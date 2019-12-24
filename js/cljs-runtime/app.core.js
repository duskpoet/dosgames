goog.provide('app.core');
goog.require('cljs.core');
goog.require('clojure.string');
var module$node_modules$js_dos$dist$js_dos=shadow.js.require("module$node_modules$js_dos$dist$js_dos", {});
var module$node_modules$keycoder$dist$keycoder=shadow.js.require("module$node_modules$keycoder$dist$keycoder", {});
goog.require('goog.dom');
goog.require('goog.dom.safe');
goog.require('goog.events');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
goog.require('oops.core');
goog.require('app.mouse');
app.core.controls_scheme = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"space",new cljs.core.Keyword(null,"code","code",1586293142),(32)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"r",new cljs.core.Keyword(null,"code","code",1586293142),(82)], null)], null);
app.core.listen_touch = (function app$core$listen_touch(el,press,cb){
var G__29469_29510 = el;
var G__29470_29511 = (cljs.core.truth_(press)?goog.events.EventType.TOUCHSTART:goog.events.EventType.TOUCHEND);
var G__29471_29512 = (function (evt){
evt.preventDefault();

return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
});
goog.events.listen(G__29469_29510,G__29470_29511,G__29471_29512);

var G__29472 = el;
var G__29473 = (cljs.core.truth_(press)?goog.events.EventType.MOUSEDOWN:goog.events.EventType.MOUSEUP);
var G__29474 = (function (evt){
evt.preventDefault();

return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
});
return goog.events.listen(G__29472,G__29473,G__29474);
});
app.core.attach_levels = (function app$core$attach_levels(json){
var el = goog.dom.getElement("load");
var html = clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29475_SHARP_){
return ["<option value=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__29475_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__29475_SHARP_.cljs$core$IFn$_invoke$arity$1((2)) : p1__29475_SHARP_.call(null,(2)))),"\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__29475_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__29475_SHARP_.cljs$core$IFn$_invoke$arity$1((0)) : p1__29475_SHARP_.call(null,(0)))),". ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__29475_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__29475_SHARP_.cljs$core$IFn$_invoke$arity$1((1)) : p1__29475_SHARP_.call(null,(1)))),"</option>"].join('');
}),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(json)));
var target_obj_29476 = el;
var _STAR_runtime_state_STAR__orig_val__29478 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__29479 = oops.state.prepare_state(target_obj_29476,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__29479);

try{var parent_obj_29477_29513 = target_obj_29476;
if(oops.core.validate_object_access_dynamically(parent_obj_29477_29513,(0),"innerHTML",true,true,true)){
(parent_obj_29477_29513["innerHTML"] = html);
} else {
}

return target_obj_29476;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__29478);
}});
app.core.setup_load = (function app$core$setup_load(){
var req = goog.net.XhrIo.send("chip_levels.json");
var el = goog.dom.getElement("load");
return req.listen(goog.net.EventType.COMPLETE,(function (){
return app.core.attach_levels(req.getResponseJson());
}));
});
app.core.send_char = (function app$core$send_char(chrs,ci){
var vec__29480 = chrs;
var seq__29481 = cljs.core.seq(vec__29480);
var first__29482 = cljs.core.first(seq__29481);
var seq__29481__$1 = cljs.core.next(seq__29481);
var c = first__29482;
var tail = seq__29481__$1;
var code = (cljs.core.truth_(c)?(function (){var target_obj_29483 = module$node_modules$keycoder$dist$keycoder.fromCharacter(c);
var _STAR_runtime_state_STAR__orig_val__29486 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__29487 = oops.state.prepare_state(target_obj_29483,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__29487);

try{var next_obj_29484 = ((oops.core.validate_object_access_dynamically(target_obj_29483,(0),"keyCode",true,true,false))?(target_obj_29483["keyCode"]):null);
var next_obj_29485 = ((oops.core.validate_object_access_dynamically(next_obj_29484,(0),"ie",true,true,false))?(next_obj_29484["ie"]):null);
return next_obj_29485;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__29486);
}})():(0));
if(cljs.core.empty_QMARK_(c)){
return ci.simulateKeyPress((13));
} else {
ci.simulateKeyPress(code);

return setTimeout((function (){
return (app.core.send_char.cljs$core$IFn$_invoke$arity$2 ? app.core.send_char.cljs$core$IFn$_invoke$arity$2(tail,ci) : app.core.send_char.call(null,tail,ci));
}),(200));
}
});
app.core.listen_select = (function app$core$listen_select(ci){
var el = goog.dom.getElement("load");
var listener = (function (evt){
var v = (function (){var target_obj_29488 = evt;
var _STAR_runtime_state_STAR__orig_val__29491 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__29492 = oops.state.prepare_state(target_obj_29488,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__29492);

try{var next_obj_29489 = ((oops.core.validate_object_access_dynamically(target_obj_29488,(0),"target",true,true,false))?(target_obj_29488["target"]):null);
var next_obj_29490 = ((oops.core.validate_object_access_dynamically(next_obj_29489,(0),"value",true,true,false))?(next_obj_29489["value"]):null);
return next_obj_29490;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__29491);
}})();
return app.core.send_char(v,ci);
});
return goog.events.listen(el,"change",listener);
});
app.core.setup_keys = (function app$core$setup_keys(ci,controls){
app.core.setup_load();

app.core.listen_select(ci);

var seq__29493 = cljs.core.seq(controls);
var chunk__29494 = null;
var count__29495 = (0);
var i__29496 = (0);
while(true){
if((i__29496 < count__29495)){
var c = chunk__29494.cljs$core$IIndexed$_nth$arity$2(null,i__29496);
var map__29501_29514 = c;
var map__29501_29515__$1 = (((((!((map__29501_29514 == null))))?(((((map__29501_29514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29501_29514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29501_29514):map__29501_29514);
var id_29516 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29501_29515__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var code_29517 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29501_29515__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var el_29518 = goog.dom.getElement(id_29516);
app.core.listen_touch(el_29518,true,((function (seq__29493,chunk__29494,count__29495,i__29496,map__29501_29514,map__29501_29515__$1,id_29516,code_29517,el_29518,c){
return (function (){
return ci.simulateKeyEvent(code_29517,true);
});})(seq__29493,chunk__29494,count__29495,i__29496,map__29501_29514,map__29501_29515__$1,id_29516,code_29517,el_29518,c))
);

app.core.listen_touch(el_29518,false,((function (seq__29493,chunk__29494,count__29495,i__29496,map__29501_29514,map__29501_29515__$1,id_29516,code_29517,el_29518,c){
return (function (){
return ci.simulateKeyEvent(code_29517,false);
});})(seq__29493,chunk__29494,count__29495,i__29496,map__29501_29514,map__29501_29515__$1,id_29516,code_29517,el_29518,c))
);


var G__29519 = seq__29493;
var G__29520 = chunk__29494;
var G__29521 = count__29495;
var G__29522 = (i__29496 + (1));
seq__29493 = G__29519;
chunk__29494 = G__29520;
count__29495 = G__29521;
i__29496 = G__29522;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__29493);
if(temp__5735__auto__){
var seq__29493__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29493__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__29493__$1);
var G__29523 = cljs.core.chunk_rest(seq__29493__$1);
var G__29524 = c__4609__auto__;
var G__29525 = cljs.core.count(c__4609__auto__);
var G__29526 = (0);
seq__29493 = G__29523;
chunk__29494 = G__29524;
count__29495 = G__29525;
i__29496 = G__29526;
continue;
} else {
var c = cljs.core.first(seq__29493__$1);
var map__29503_29527 = c;
var map__29503_29528__$1 = (((((!((map__29503_29527 == null))))?(((((map__29503_29527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29503_29527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29503_29527):map__29503_29527);
var id_29529 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29503_29528__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var code_29530 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29503_29528__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var el_29531 = goog.dom.getElement(id_29529);
app.core.listen_touch(el_29531,true,((function (seq__29493,chunk__29494,count__29495,i__29496,map__29503_29527,map__29503_29528__$1,id_29529,code_29530,el_29531,c,seq__29493__$1,temp__5735__auto__){
return (function (){
return ci.simulateKeyEvent(code_29530,true);
});})(seq__29493,chunk__29494,count__29495,i__29496,map__29503_29527,map__29503_29528__$1,id_29529,code_29530,el_29531,c,seq__29493__$1,temp__5735__auto__))
);

app.core.listen_touch(el_29531,false,((function (seq__29493,chunk__29494,count__29495,i__29496,map__29503_29527,map__29503_29528__$1,id_29529,code_29530,el_29531,c,seq__29493__$1,temp__5735__auto__){
return (function (){
return ci.simulateKeyEvent(code_29530,false);
});})(seq__29493,chunk__29494,count__29495,i__29496,map__29503_29527,map__29503_29528__$1,id_29529,code_29530,el_29531,c,seq__29493__$1,temp__5735__auto__))
);


var G__29532 = cljs.core.next(seq__29493__$1);
var G__29533 = null;
var G__29534 = (0);
var G__29535 = (0);
seq__29493 = G__29532;
chunk__29494 = G__29533;
count__29495 = G__29534;
i__29496 = G__29535;
continue;
}
} else {
return null;
}
}
break;
}
});
app.core.process_ci = (function app$core$process_ci(ci){
var seq__29505_29536 = cljs.core.seq(cljs.core.list((52),(66),(13)));
var chunk__29506_29537 = null;
var count__29507_29538 = (0);
var i__29508_29539 = (0);
while(true){
if((i__29508_29539 < count__29507_29538)){
var code_29540 = chunk__29506_29537.cljs$core$IIndexed$_nth$arity$2(null,i__29508_29539);
ci.simulateKeyEvent(code_29540,true);

ci.simulateKeyEvent(code_29540,false);


var G__29541 = seq__29505_29536;
var G__29542 = chunk__29506_29537;
var G__29543 = count__29507_29538;
var G__29544 = (i__29508_29539 + (1));
seq__29505_29536 = G__29541;
chunk__29506_29537 = G__29542;
count__29507_29538 = G__29543;
i__29508_29539 = G__29544;
continue;
} else {
var temp__5735__auto___29545 = cljs.core.seq(seq__29505_29536);
if(temp__5735__auto___29545){
var seq__29505_29546__$1 = temp__5735__auto___29545;
if(cljs.core.chunked_seq_QMARK_(seq__29505_29546__$1)){
var c__4609__auto___29547 = cljs.core.chunk_first(seq__29505_29546__$1);
var G__29548 = cljs.core.chunk_rest(seq__29505_29546__$1);
var G__29549 = c__4609__auto___29547;
var G__29550 = cljs.core.count(c__4609__auto___29547);
var G__29551 = (0);
seq__29505_29536 = G__29548;
chunk__29506_29537 = G__29549;
count__29507_29538 = G__29550;
i__29508_29539 = G__29551;
continue;
} else {
var code_29552 = cljs.core.first(seq__29505_29546__$1);
ci.simulateKeyEvent(code_29552,true);

ci.simulateKeyEvent(code_29552,false);


var G__29553 = cljs.core.next(seq__29505_29546__$1);
var G__29554 = null;
var G__29555 = (0);
var G__29556 = (0);
seq__29505_29536 = G__29553;
chunk__29506_29537 = G__29554;
count__29507_29538 = G__29555;
i__29508_29539 = G__29556;
continue;
}
} else {
}
}
break;
}

app.core.setup_keys(ci,app.core.controls_scheme);

return app.mouse.setup_mouse(ci);
});
app.core.on_ready = (function app$core$on_ready(fs,main){
var p1 = fs.extract("chip.zip");
var p2 = p1.then((function (){
var G__29509 = ["-c","CHIPS.EXE"];
return (main.cljs$core$IFn$_invoke$arity$1 ? main.cljs$core$IFn$_invoke$arity$1(G__29509) : main.call(null,G__29509));
}));
return p2.then(app.core.process_ci);
});
app.core.launch = (function app$core$launch(){
var el = goog.dom.getElement("playerbox");
var runner = Dos(el,({"cycles": (2000), "log": (function (){
return cljs.core.List.EMPTY;
})}));
return runner.ready(app.core.on_ready);
});
app.core.main_BANG_ = (function app$core$main_BANG_(){
return app.core.launch();
});

//# sourceMappingURL=app.core.js.map
