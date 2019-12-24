(ns app.core
  (:require
   [clojure.string :refer [join]]
   ["js-dos"]
   ["keycoder" :refer [fromCharacter]]
   [goog.dom :as dom]
   [goog.dom.safe :as safe]
   [goog.events :as events]
   [goog.net.XhrIo :as XhrIo]
   [goog.net.EventType :as NetEvents]
   [oops.core :refer [oget oset!]]
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

(defn attach-levels [json]
  (let [el (dom/getElement "load")
        html (->>
               json
               js->clj
               (map #(str
                       "<option value=\""
                       (% 2)
                       "\">"
                       (% 0) ". " (% 1)
                       "</option>"))
               join)]
    (oset! el "innerHTML" html)))

(defn setup-load []
  (let [req (XhrIo/send "chip_levels.json")
        el (dom/getElement "load")]
    (.listen req NetEvents/COMPLETE #(-> req .getResponseJson attach-levels))))

(defn send-char [chrs ci]
  (let [[c & tail] chrs
        code (if c
               (-> c
                   fromCharacter
                   (oget "keyCode.ie"))
               0)]
    (if (empty? c)
      (.simulateKeyPress ci 13)
      (do
        (.simulateKeyPress ci code)
        (js/setTimeout #(send-char tail ci) 200)))))

(defn listen-select [ci]
  (let [el (dom/getElement "load")
        listener (fn [evt]
                   (let [v (oget evt "target.value")]
                     (send-char v ci)))]
    (events/listen el "change" listener)))

(defn setup-keys [ci controls]
  (setup-load)
  (listen-select ci)
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
    (.simulateKeyEvent ci code true)
    (.simulateKeyEvent ci code false))
  (setup-keys ci controls-scheme)
  (setup-mouse ci))

(defn on-ready [fs, main]
  (let [p1 (.extract fs "chip.zip")
        p2 (.then p1 #(main #js ["-c" "CHIPS.EXE"]))]
    (.then p2 process-ci)))

(defn launch []
  (let [el (dom/getElement "playerbox")
        runner (js/Dos el #js {:cycles 2000 :log (fn [] ())})]
    (.ready runner on-ready)))

(defn main! []
  (launch))
