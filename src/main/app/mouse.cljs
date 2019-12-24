(ns app.mouse
  (:require
   [goog.dom :as dom]
   [goog.events :as events]))

(def THRESHOLD 10)

(def CODES {:up 38
            :down 40
            :left 37
            :right 39})

(defn sqr [x] (bit-shift-left x 1))

(def motion (atom nil))

(defn control-ci [ci action]
  (if (nil? action)
    (when-not (nil? @motion)
      (.simulateKeyEvent ci (CODES @motion) false)
      (reset! motion nil))
    (when-not (= @motion action)
      (when-not (nil? @motion) (.simulateKeyEvent ci (CODES @motion) false))
      (reset! motion action)
      (.simulateKeyEvent ci (CODES @motion) true))))

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
                                (and (neg? deltaY) (> absY absX)) :down
                                (and (pos? deltaY) (> absY absX)) :up
                                (and (neg? deltaX) (> absX absY)) :right
                                (and (pos? deltaX) (> absX absY)) :left)]
                      (control-ci ci action)))
        on-start #(reset! start-evt %)
        on-release #(control-ci ci nil)]
    (events/listen el events/EventType.TOUCHSTART on-start)
    (events/listen el events/EventType.TOUCHMOVE on-move)
    (events/listen el events/EventType.TOUCHEND on-release)))
