goog.provide('app.mouse');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.events');
app.mouse.THRESHOLD = (10);
app.mouse.sqr = (function app$mouse$sqr(x){
return (x << (1));
});
app.mouse.motion = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
app.mouse.codes = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"up","up",-269712113),(38),new cljs.core.Keyword(null,"down","down",1565245570),(40),new cljs.core.Keyword(null,"left","left",-399115937),(37),new cljs.core.Keyword(null,"right","right",-452581833),(39)], null);
app.mouse.control_ci = (function app$mouse$control_ci(ci,action){
if((action == null)){
if((cljs.core.deref(app.mouse.motion) == null)){
return null;
} else {
ci.simulateKeyEvent((function (){var G__26733 = cljs.core.deref(app.mouse.motion);
var G__26734 = false;
return (app.mouse.codes.cljs$core$IFn$_invoke$arity$2 ? app.mouse.codes.cljs$core$IFn$_invoke$arity$2(G__26733,G__26734) : app.mouse.codes.call(null,G__26733,G__26734));
})());

return cljs.core.reset_BANG_(app.mouse.motion,null);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.mouse.motion),action)){
return null;
} else {
ci.simulateKeyEvent((function (){var G__26735 = cljs.core.deref(app.mouse.motion);
var G__26736 = false;
return (app.mouse.codes.cljs$core$IFn$_invoke$arity$2 ? app.mouse.codes.cljs$core$IFn$_invoke$arity$2(G__26735,G__26736) : app.mouse.codes.call(null,G__26735,G__26736));
})());

cljs.core.reset_BANG_(app.mouse.motion,action);

return ci.simulateKeyEvent((function (){var G__26737 = cljs.core.deref(app.mouse.motion);
var G__26738 = true;
return (app.mouse.codes.cljs$core$IFn$_invoke$arity$2 ? app.mouse.codes.cljs$core$IFn$_invoke$arity$2(G__26737,G__26738) : app.mouse.codes.call(null,G__26737,G__26738));
})());
}
}
});
app.mouse.setup_mouse = (function app$mouse$setup_mouse(ci){
var el = goog.dom.getElement("container");
var start_evt = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var motion = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var on_move = (function (move_evt){
var deltaX = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26739_SHARP_){
return p1__26739_SHARP_.clientX;
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(start_evt),move_evt], null)));
var deltaY = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26740_SHARP_){
return p1__26740_SHARP_.clientY;
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(start_evt),move_evt], null)));
var absX = Math.abs(deltaX);
var absY = Math.abs(deltaY);
var r = Math.sqrt((app.mouse.sqr(deltaX) + app.mouse.sqr(deltaY)));
var action = (((r < app.mouse.THRESHOLD))?null:(cljs.core.truth_((function (){var fexpr__26742 = (((deltaY < (0)))?(((absY > absX))?new cljs.core.Keyword(null,"up","up",-269712113):false):false);
return (fexpr__26742.cljs$core$IFn$_invoke$arity$0 ? fexpr__26742.cljs$core$IFn$_invoke$arity$0() : fexpr__26742.call(null));
})())?(function (){var fexpr__26743 = (((deltaY > (0)))?(((absY > absX))?new cljs.core.Keyword(null,"down","down",1565245570):false):false);
return (fexpr__26743.cljs$core$IFn$_invoke$arity$0 ? fexpr__26743.cljs$core$IFn$_invoke$arity$0() : fexpr__26743.call(null));
})():(cljs.core.truth_((function (){var fexpr__26744 = (((deltaX < (0)))?(((absX > absY))?new cljs.core.Keyword(null,"left","left",-399115937):false):false);
return (fexpr__26744.cljs$core$IFn$_invoke$arity$0 ? fexpr__26744.cljs$core$IFn$_invoke$arity$0() : fexpr__26744.call(null));
})())?(function (){var fexpr__26745 = (((deltaX > (0)))?(((absX > absY))?new cljs.core.Keyword(null,"right","right",-452581833):false):false);
return (fexpr__26745.cljs$core$IFn$_invoke$arity$0 ? fexpr__26745.cljs$core$IFn$_invoke$arity$0() : fexpr__26745.call(null));
})():null)));
return app.mouse.control_ci(ci,action);
});
var on_start = (function (p1__26741_SHARP_){
return cljs.core.reset_BANG_(start_evt,p1__26741_SHARP_);
});
goog.events.listen(el,goog.events.EventType.TOUCHSTART,on_start);

return goog.events.listen(el,goog.events.EventType.TOUCHMOVE,on_move);
});

//# sourceMappingURL=app.mouse.js.map
