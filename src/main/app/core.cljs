(ns app.core
  (:require
   ["js-dos"]
   [goog.dom :as dom]
   [goog.dom.fullscreen :refer [requestFullScreen]]
   [goog.events :as events]
   [goog.style :as styles]))

(def controls-scheme
  [{:id "left"
    :code 37
    :pos {:size 0.25
          :top 0.25
          :left 0}}

   {:id "right"
    :code 39
    :pos {:size 0.25
          :top 0.25
          :left 0.5}}

   {:id "up"
    :code 38
    :pos {:size 0.25
          :top 0
          :left 0.25}}

   {:id "down"
    :code 40
    :pos {:size 0.25
          :bottom 0.25
          :left 0.25}}

   {:id "enter"
    :code 13
    :pos {:size 0.25
          :top 0.25
          :right 0.25}}

   {:id "space"
    :code 32
    :pos {:size 0.25
          :top 0.25
          :right 0.5}}])

(defn listen-touch [el press cb]
  (events/listen
    el
    (if press
      events/EventType.TOUCHSTART
      events/EventType.TOUCHEND)
    (fn [evt]
      (.preventDefault evt)
      (cb)))
  (events/listen
    el
    (if press
      events/EventType.MOUSEDOWN
      events/EventType.MOUSEUP)
    (fn [evt]
      (.preventDefault evt)
      (cb))))

(defn set-positions []
  (let [keysEl (dom/getElement "keys")
        container (dom/getElement "player-container")
        h (-> container styles/getContentBoxSize .-height (/ 2))]
    (styles/setHeight keysEl h)
    (doseq [c controls-scheme]
      (let [{:keys [pos id]} c
            el (dom/getElement id)
            styl (apply hash-map (mapcat (fn [[k v]]
                                           (let [px (str (* v h) "px")]
                                            (if (= k :size)
                                              [:width px :height px]
                                              [k px])))
                                        pos))]
        (print styl)
        (styles/setStyle el (clj->js styl))))))

(defn setup-keys [ci controls]
  (doseq [c controls]
    (let [{:keys [id code]} c
          el (dom/getElement id)]
      (listen-touch
       el
       true
       #(.simulateKeyEvent ci code true))
      (listen-touch
       el
       false
       #(.simulateKeyEvent ci code false)))))

(defn process-ci [ci]
  (setup-keys ci controls-scheme))

(defn on-ready [fs, main]
  (let [p1 (.extract fs "chip.zip")
        p2 (.then p1 #(main #js ["-c" "CHIPS.EXE"]))]
    (.then p2 process-ci)
    (js/setInterval set-positions 1000)))

(defn launch []
  (let [el (dom/getElement "playerbox")
        runner (js/Dos el)]
    (.ready runner on-ready)))

(defn main! []
  (launch))
