(ns app.core
  (:require
   ["js-dos"]
   [goog.dom :as dom]
   [goog.events :as events]
   [app.mouse :refer [setup-mouse]]))

(def controls-scheme
  [{:id "space"
    :code 32}
   {:id "r"
    :code 82}])

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

(defn process-ci [ci]
  (doseq [code '(52 66 13)]
    (.simulateKeyEvent ci code true))
  (setup-keys ci controls-scheme)
  (setup-mouse ci))

(defn on-ready [fs, main]
  (let [p1 (.extract fs "chip.zip")
        p2 (.then p1 #(main #js ["-c" "CHIPS.EXE"]))]
    (.then p2 process-ci)))

(defn launch []
  (let [el (dom/getElement "playerbox")
        runner (js/Dos el #js {:cycles 2000})]
    (.ready runner on-ready)))

(defn main! []
  (launch))
