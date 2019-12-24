(ns app.mouse
  (:require
   [goog.dom :as dom]
   [goog.events :as events]))

(def THRESHOLD 10)

(defn sqr [x] (bit-shift-left x 1))

(def motion (atom nil))
(def codes {:up 38
            :down 40
            :left 37
            :right 39})

(defn control-ci [ci action]
  (if (nil? action)
    (when-not (nil? @motion)
      (.simulateKeyEvent ci (codes @motion false))
      (reset! motion nil))
    (when-not (= @motion action)
      (.simulateKeyEvent ci (codes @motion false))
      (reset! motion action)
      (.simulateKeyEvent ci (codes @motion true)))))

(defn setup-mouse [ci]
  (let [el (dom/getElement "container")
        start-evt (atom nil)
        motion (atom nil)
        on-move (fn [move-evt]
                  (let [deltaX (apply - (map #(.-clientX %) [@start-evt move-evt]))
                        deltaY (apply - (map #(.-clientY %) [@start-evt move-evt]))
                        absX (js/Math.abs deltaX)
                        absY (js/Math.abs deltaY)
                        r (js/Math.sqrt (+ (sqr deltaX) (sqr deltaY)))
                        action (cond
                                (< r THRESHOLD) nil
                                ((and (neg? deltaY) (> absY absX) :up))
                                ((and (pos? deltaY) (> absY absX) :down))
                                ((and (neg? deltaX) (> absX absY) :left))
                                ((and (pos? deltaX) (> absX absY) :right)))]
                      (control-ci ci action)))
        on-start #(reset! start-evt %)]
    (events/listen el events/EventType.TOUCHSTART on-start)
    (events/listen el events/EventType.TOUCHMOVE on-move)))
