goog.provide("goog.dom.fullscreen");
goog.provide("goog.dom.fullscreen.EventType");
goog.require("goog.dom");
/** @enum {string} */ goog.dom.fullscreen.EventType = {CHANGE:function() {
  var el = goog.dom.getDomHelper().getDocument().documentElement;
  if (el.requestFullscreen) {
    return "fullscreenchange";
  }
  if (el.webkitRequestFullscreen) {
    return "webkitfullscreenchange";
  }
  if (el.mozRequestFullScreen) {
    return "mozfullscreenchange";
  }
  if (el.msRequestFullscreen) {
    return "MSFullscreenChange";
  }
  return "fullscreenchange";
}()};
/** @enum {string} */ goog.dom.fullscreen.FullscreenNavigationUI = {AUTO:"auto", HIDE:"hide", SHOW:"show"};
/**
 * @record
 * @extends {FullscreenOptions}
 */
goog.dom.fullscreen.FullscreenOptions = function() {
};
/** @type {!goog.dom.fullscreen.FullscreenNavigationUI} */ goog.dom.fullscreen.FullscreenOptions.prototype.navigationUI;
/**
 * @param {!goog.dom.DomHelper=} opt_domHelper
 * @return {boolean}
 */
goog.dom.fullscreen.isSupported = function(opt_domHelper) {
  var doc = goog.dom.fullscreen.getDocument_(opt_domHelper);
  var body = doc.body;
  return !!(body.webkitRequestFullscreen || body.mozRequestFullScreen && doc.mozFullScreenEnabled || body.msRequestFullscreen && doc.msFullscreenEnabled || body.requestFullscreen && doc.fullscreenEnabled);
};
/**
 * @param {!Element} element
 * @param {!goog.dom.fullscreen.FullscreenOptions=} opt_options
 */
goog.dom.fullscreen.requestFullScreen = function(element, opt_options) {
  if (element.requestFullscreen) {
    element.requestFullscreen(opt_options);
  } else {
    if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else {
      if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else {
        if (element.msRequestFullscreen) {
          element.msRequestFullscreen();
        }
      }
    }
  }
};
/**
 * @param {!Element} element
 */
goog.dom.fullscreen.requestFullScreenWithKeys = function(element) {
  if (element.mozRequestFullScreenWithKeys) {
    element.mozRequestFullScreenWithKeys();
  } else {
    goog.dom.fullscreen.requestFullScreen(element);
  }
};
/**
 * @param {!goog.dom.DomHelper=} opt_domHelper
 */
goog.dom.fullscreen.exitFullScreen = function(opt_domHelper) {
  var doc = goog.dom.fullscreen.getDocument_(opt_domHelper);
  if (doc.exitFullscreen) {
    doc.exitFullscreen();
  } else {
    if (doc.webkitCancelFullScreen) {
      doc.webkitCancelFullScreen();
    } else {
      if (doc.mozCancelFullScreen) {
        doc.mozCancelFullScreen();
      } else {
        if (doc.msExitFullscreen) {
          doc.msExitFullscreen();
        }
      }
    }
  }
};
/**
 * @param {!goog.dom.DomHelper=} opt_domHelper
 * @return {boolean}
 */
goog.dom.fullscreen.isFullScreen = function(opt_domHelper) {
  var doc = goog.dom.fullscreen.getDocument_(opt_domHelper);
  return !!(doc.webkitIsFullScreen || doc.mozFullScreen || doc.msFullscreenElement || doc.fullscreenElement);
};
/**
 * @param {!goog.dom.DomHelper=} opt_domHelper
 * @return {?Element}
 */
goog.dom.fullscreen.getFullScreenElement = function(opt_domHelper) {
  var doc = goog.dom.fullscreen.getDocument_(opt_domHelper);
  var element_list = [doc.fullscreenElement, doc.webkitFullscreenElement, doc.mozFullScreenElement, doc.msFullscreenElement];
  for (var i = 0; i < element_list.length; i++) {
    if (element_list[i] != null) {
      return element_list[i];
    }
  }
  return null;
};
/**
 * @private
 * @param {!goog.dom.DomHelper=} opt_domHelper
 * @return {!Document}
 */
goog.dom.fullscreen.getDocument_ = function(opt_domHelper) {
  return opt_domHelper ? opt_domHelper.getDocument() : goog.dom.getDomHelper().getDocument();
};

//# sourceMappingURL=goog.dom.fullscreen.js.map
