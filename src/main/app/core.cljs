(ns app.core
  (:require
   ["js-dos"]
   [goog.dom :as dom]
   [goog.dom.fullscreen :refer [requestFullScreen]]
   [goog.events :as events]))

(def controls-scheme
  [{:id "left"
    :code 37}
          
   {:id "right"
    :code 39}

   {:id "up"
    :code 38}

   {:id "down"
    :code 40}

   {:id "space"
    :code 32}

   {:id "enter"
    :code 13}])

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

(defn fullscreen []
  (let [el (dom/getElement "player-container")]
    (requestFullScreen el)))

(defn listen-fullscreen []
  (let [btn (dom/getElement "fullscreen")]
    (listen-touch btn true fullscreen)))

(defn process-ci [ci]
  (setup-keys ci controls-scheme))

(defn on-ready [fs, main]
  (let [p1 (.extract fs "chip.zip")
        p2 (.then p1 #(main #js ["-c" "CHIPS.EXE"]))]
    (.then p2 process-ci)
    (listen-fullscreen)))

(defn launch []
  (let [el (dom/getElement "playerbox")
        runner (js/Dos el)]
    (.ready runner on-ready)))

(defn main! []
  (launch))
