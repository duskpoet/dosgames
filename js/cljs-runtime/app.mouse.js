goog.provide('app.mouse');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.events');
app.mouse.THRESHOLD = (10);
app.mouse.CODES = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"up","up",-269712113),(38),new cljs.core.Keyword(null,"down","down",1565245570),(40),new cljs.core.Keyword(null,"left","left",-399115937),(37),new cljs.core.Keyword(null,"right","right",-452581833),(39)], null);
app.mouse.sqr = (function app$mouse$sqr(x){
return (x << (1));
});
app.mouse.motion = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
app.mouse.control_ci = (function app$mouse$control_ci(ci,action){
if((action == null)){
if((cljs.core.deref(app.mouse.motion) == null)){
return null;
} else {
ci.simulateKeyEvent((function (){var G__27010 = cljs.core.deref(app.mouse.motion);
return (app.mouse.CODES.cljs$core$IFn$_invoke$arity$1 ? app.mouse.CODES.cljs$core$IFn$_invoke$arity$1(G__27010) : app.mouse.CODES.call(null,G__27010));
})(),false);

return cljs.core.reset_BANG_(app.mouse.motion,null);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.mouse.motion),action)){
return null;
} else {
if((cljs.core.deref(app.mouse.motion) == null)){
} else {
ci.simulateKeyEvent((function (){var G__27011 = cljs.core.deref(app.mouse.motion);
return (app.mouse.CODES.cljs$core$IFn$_invoke$arity$1 ? app.mouse.CODES.cljs$core$IFn$_invoke$arity$1(G__27011) : app.mouse.CODES.call(null,G__27011));
})(),false);
}

cljs.core.reset_BANG_(app.mouse.motion,action);

return ci.simulateKeyEvent((function (){var G__27012 = cljs.core.deref(app.mouse.motion);
return (app.mouse.CODES.cljs$core$IFn$_invoke$arity$1 ? app.mouse.CODES.cljs$core$IFn$_invoke$arity$1(G__27012) : app.mouse.CODES.call(null,G__27012));
})(),true);
}
}
});
app.mouse.setup_mouse = (function app$mouse$setup_mouse(ci){
var el = goog.dom.getElement("container");
var start_evt = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var motion = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var on_move = (function (move_evt){
var deltaX = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27013_SHARP_){
return p1__27013_SHARP_.clientX;
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(start_evt),move_evt], null)));
var deltaY = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27014_SHARP_){
return p1__27014_SHARP_.clientY;
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(start_evt),move_evt], null)));
var absX = Math.abs(deltaX);
var absY = Math.abs(deltaY);
var r = Math.sqrt((app.mouse.sqr(deltaX) + app.mouse.sqr(deltaY)));
var action = (((r < app.mouse.THRESHOLD))?null:(((((deltaY < (0))) && ((absY > absX))))?new cljs.core.Keyword(null,"down","down",1565245570):(((((deltaY > (0))) && ((absY > absX))))?new cljs.core.Keyword(null,"up","up",-269712113):(((((deltaX < (0))) && ((absX > absY))))?new cljs.core.Keyword(null,"right","right",-452581833):(((((deltaX > (0))) && ((absX > absY))))?new cljs.core.Keyword(null,"left","left",-399115937):null)))));
return app.mouse.control_ci(ci,action);
});
var on_start = (function (p1__27015_SHARP_){
return cljs.core.reset_BANG_(start_evt,p1__27015_SHARP_);
});
var on_release = (function (){
return app.mouse.control_ci(ci,null);
});
goog.events.listen(el,goog.events.EventType.TOUCHSTART,on_start);

goog.events.listen(el,goog.events.EventType.TOUCHMOVE,on_move);

return goog.events.listen(el,goog.events.EventType.TOUCHEND,on_release);
});

//# sourceMappingURL=app.mouse.js.map
