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

(defn setup-keys [ci controls]
  (doseq [c controls]
    (let [{:keys [id code]} c
          el (dom/getElement id)]
      (events/listen
       el
       events/EventType.MOUSEDOWN
       #(.simulateKeyEvent ci code true))
      (events/listen
       el
       events/EventType.MOUSEUP
       #(.simulateKeyEvent ci code false)))))

(defn fullscreen []
  (let [el (dom/getElement "player-container")]
    (requestFullScreen el)))

(defn listen-fullscreen []
  (let [btn (dom/getElement "fullscreen")]
    (events/listen btn events/EventType.MOUSEDOWN fullscreen)))

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
