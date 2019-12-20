goog.provide('app.core');
goog.require('cljs.core');
var module$node_modules$js_dos$dist$js_dos=shadow.js.require("module$node_modules$js_dos$dist$js_dos", {});
goog.require('goog.dom');
goog.require('goog.dom.fullscreen');
goog.require('goog.events');
goog.require('goog.style');
app.core.controls_scheme = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"left",new cljs.core.Keyword(null,"code","code",1586293142),(37),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),0.25,new cljs.core.Keyword(null,"top","top",-1856271961),0.25,new cljs.core.Keyword(null,"left","left",-399115937),(0)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"right",new cljs.core.Keyword(null,"code","code",1586293142),(39),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),0.25,new cljs.core.Keyword(null,"top","top",-1856271961),0.25,new cljs.core.Keyword(null,"left","left",-399115937),0.5], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"up",new cljs.core.Keyword(null,"code","code",1586293142),(38),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),0.25,new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"left","left",-399115937),0.25], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"down",new cljs.core.Keyword(null,"code","code",1586293142),(40),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),0.25,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),0.25,new cljs.core.Keyword(null,"left","left",-399115937),0.25], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"enter",new cljs.core.Keyword(null,"code","code",1586293142),(13),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),0.25,new cljs.core.Keyword(null,"top","top",-1856271961),0.25,new cljs.core.Keyword(null,"right","right",-452581833),0.25], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"space",new cljs.core.Keyword(null,"code","code",1586293142),(32),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),0.25,new cljs.core.Keyword(null,"top","top",-1856271961),0.25,new cljs.core.Keyword(null,"right","right",-452581833),0.5], null)], null)], null);
app.core.listen_touch = (function app$core$listen_touch(el,press,cb){
var G__26501_26556 = el;
var G__26502_26557 = (cljs.core.truth_(press)?goog.events.EventType.TOUCHSTART:goog.events.EventType.TOUCHEND);
var G__26503_26558 = (function (evt){
evt.preventDefault();

return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
});
goog.events.listen(G__26501_26556,G__26502_26557,G__26503_26558);

var G__26504 = el;
var G__26505 = (cljs.core.truth_(press)?goog.events.EventType.MOUSEDOWN:goog.events.EventType.MOUSEUP);
var G__26506 = (function (evt){
evt.preventDefault();

return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
});
return goog.events.listen(G__26504,G__26505,G__26506);
});
app.core.set_positions = (function app$core$set_positions(){
var keysEl = goog.dom.getElement("keys");
var container = goog.dom.getElement("player-container");
var h = (goog.style.getContentBoxSize(container).height / (2));
goog.style.setHeight(keysEl,h);

var seq__26507 = cljs.core.seq(app.core.controls_scheme);
var chunk__26508 = null;
var count__26509 = (0);
var i__26510 = (0);
while(true){
if((i__26510 < count__26509)){
var c = chunk__26508.cljs$core$IIndexed$_nth$arity$2(null,i__26510);
var map__26527_26559 = c;
var map__26527_26560__$1 = (((((!((map__26527_26559 == null))))?(((((map__26527_26559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26527_26559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26527_26559):map__26527_26559);
var pos_26561 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26527_26560__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var id_26562 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26527_26560__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var el_26563 = goog.dom.getElement(id_26562);
var styl_26564 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (seq__26507,chunk__26508,count__26509,i__26510,map__26527_26559,map__26527_26560__$1,pos_26561,id_26562,el_26563,c,keysEl,container,h){
return (function (p__26529){
var vec__26530 = p__26529;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26530,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26530,(1),null);
var px = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((v * h)),"px"].join('');
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"size","size",1098693007))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"width","width",-384071477),px,new cljs.core.Keyword(null,"height","height",1025178622),px], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,px], null);
}
});})(seq__26507,chunk__26508,count__26509,i__26510,map__26527_26559,map__26527_26560__$1,pos_26561,id_26562,el_26563,c,keysEl,container,h))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pos_26561], 0)));
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([styl_26564], 0));

var G__26533_26565 = el_26563;
var G__26534_26566 = cljs.core.clj__GT_js(styl_26564);
goog.style.setStyle(G__26533_26565,G__26534_26566);


var G__26567 = seq__26507;
var G__26568 = chunk__26508;
var G__26569 = count__26509;
var G__26570 = (i__26510 + (1));
seq__26507 = G__26567;
chunk__26508 = G__26568;
count__26509 = G__26569;
i__26510 = G__26570;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__26507);
if(temp__5735__auto__){
var seq__26507__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26507__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__26507__$1);
var G__26571 = cljs.core.chunk_rest(seq__26507__$1);
var G__26572 = c__4609__auto__;
var G__26573 = cljs.core.count(c__4609__auto__);
var G__26574 = (0);
seq__26507 = G__26571;
chunk__26508 = G__26572;
count__26509 = G__26573;
i__26510 = G__26574;
continue;
} else {
var c = cljs.core.first(seq__26507__$1);
var map__26535_26575 = c;
var map__26535_26576__$1 = (((((!((map__26535_26575 == null))))?(((((map__26535_26575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26535_26575.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26535_26575):map__26535_26575);
var pos_26577 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26535_26576__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var id_26578 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26535_26576__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var el_26579 = goog.dom.getElement(id_26578);
var styl_26580 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (seq__26507,chunk__26508,count__26509,i__26510,map__26535_26575,map__26535_26576__$1,pos_26577,id_26578,el_26579,c,seq__26507__$1,temp__5735__auto__,keysEl,container,h){
return (function (p__26537){
var vec__26538 = p__26537;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26538,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26538,(1),null);
var px = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((v * h)),"px"].join('');
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"size","size",1098693007))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"width","width",-384071477),px,new cljs.core.Keyword(null,"height","height",1025178622),px], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,px], null);
}
});})(seq__26507,chunk__26508,count__26509,i__26510,map__26535_26575,map__26535_26576__$1,pos_26577,id_26578,el_26579,c,seq__26507__$1,temp__5735__auto__,keysEl,container,h))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pos_26577], 0)));
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([styl_26580], 0));

var G__26541_26581 = el_26579;
var G__26542_26582 = cljs.core.clj__GT_js(styl_26580);
goog.style.setStyle(G__26541_26581,G__26542_26582);


var G__26583 = cljs.core.next(seq__26507__$1);
var G__26584 = null;
var G__26585 = (0);
var G__26586 = (0);
seq__26507 = G__26583;
chunk__26508 = G__26584;
count__26509 = G__26585;
i__26510 = G__26586;
continue;
}
} else {
return null;
}
}
break;
}
});
app.core.setup_keys = (function app$core$setup_keys(ci,controls){
var seq__26543 = cljs.core.seq(controls);
var chunk__26544 = null;
var count__26545 = (0);
var i__26546 = (0);
while(true){
if((i__26546 < count__26545)){
var c = chunk__26544.cljs$core$IIndexed$_nth$arity$2(null,i__26546);
var map__26551_26587 = c;
var map__26551_26588__$1 = (((((!((map__26551_26587 == null))))?(((((map__26551_26587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26551_26587.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26551_26587):map__26551_26587);
var id_26589 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26551_26588__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var code_26590 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26551_26588__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var el_26591 = goog.dom.getElement(id_26589);
app.core.listen_touch(el_26591,true,((function (seq__26543,chunk__26544,count__26545,i__26546,map__26551_26587,map__26551_26588__$1,id_26589,code_26590,el_26591,c){
return (function (){
return ci.simulateKeyEvent(code_26590,true);
});})(seq__26543,chunk__26544,count__26545,i__26546,map__26551_26587,map__26551_26588__$1,id_26589,code_26590,el_26591,c))
);

app.core.listen_touch(el_26591,false,((function (seq__26543,chunk__26544,count__26545,i__26546,map__26551_26587,map__26551_26588__$1,id_26589,code_26590,el_26591,c){
return (function (){
return ci.simulateKeyEvent(code_26590,false);
});})(seq__26543,chunk__26544,count__26545,i__26546,map__26551_26587,map__26551_26588__$1,id_26589,code_26590,el_26591,c))
);


var G__26592 = seq__26543;
var G__26593 = chunk__26544;
var G__26594 = count__26545;
var G__26595 = (i__26546 + (1));
seq__26543 = G__26592;
chunk__26544 = G__26593;
count__26545 = G__26594;
i__26546 = G__26595;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__26543);
if(temp__5735__auto__){
var seq__26543__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26543__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__26543__$1);
var G__26596 = cljs.core.chunk_rest(seq__26543__$1);
var G__26597 = c__4609__auto__;
var G__26598 = cljs.core.count(c__4609__auto__);
var G__26599 = (0);
seq__26543 = G__26596;
chunk__26544 = G__26597;
count__26545 = G__26598;
i__26546 = G__26599;
continue;
} else {
var c = cljs.core.first(seq__26543__$1);
var map__26553_26600 = c;
var map__26553_26601__$1 = (((((!((map__26553_26600 == null))))?(((((map__26553_26600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26553_26600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26553_26600):map__26553_26600);
var id_26602 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26553_26601__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var code_26603 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26553_26601__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var el_26604 = goog.dom.getElement(id_26602);
app.core.listen_touch(el_26604,true,((function (seq__26543,chunk__26544,count__26545,i__26546,map__26553_26600,map__26553_26601__$1,id_26602,code_26603,el_26604,c,seq__26543__$1,temp__5735__auto__){
return (function (){
return ci.simulateKeyEvent(code_26603,true);
});})(seq__26543,chunk__26544,count__26545,i__26546,map__26553_26600,map__26553_26601__$1,id_26602,code_26603,el_26604,c,seq__26543__$1,temp__5735__auto__))
);

app.core.listen_touch(el_26604,false,((function (seq__26543,chunk__26544,count__26545,i__26546,map__26553_26600,map__26553_26601__$1,id_26602,code_26603,el_26604,c,seq__26543__$1,temp__5735__auto__){
return (function (){
return ci.simulateKeyEvent(code_26603,false);
});})(seq__26543,chunk__26544,count__26545,i__26546,map__26553_26600,map__26553_26601__$1,id_26602,code_26603,el_26604,c,seq__26543__$1,temp__5735__auto__))
);


var G__26605 = cljs.core.next(seq__26543__$1);
var G__26606 = null;
var G__26607 = (0);
var G__26608 = (0);
seq__26543 = G__26605;
chunk__26544 = G__26606;
count__26545 = G__26607;
i__26546 = G__26608;
continue;
}
} else {
return null;
}
}
break;
}
});
app.core.fullscreen = (function app$core$fullscreen(){
var el = goog.dom.getElement("player-container");
return goog.dom.fullscreen.requestFullScreen(el);
});
app.core.listen_fullscreen = (function app$core$listen_fullscreen(){
var btn = goog.dom.getElement("fullscreen");
return app.core.listen_touch(btn,true,app.core.fullscreen);
});
app.core.process_ci = (function app$core$process_ci(ci){
return app.core.setup_keys(ci,app.core.controls_scheme);
});
app.core.on_ready = (function app$core$on_ready(fs,main){
var p1 = fs.extract("chip.zip");
var p2 = p1.then((function (){
var G__26555 = ["-c","CHIPS.EXE"];
return (main.cljs$core$IFn$_invoke$arity$1 ? main.cljs$core$IFn$_invoke$arity$1(G__26555) : main.call(null,G__26555));
}));
p2.then(app.core.process_ci);

app.core.listen_fullscreen();

return setTimeout(app.core.set_positions,(1000));
});
app.core.launch = (function app$core$launch(){
var el = goog.dom.getElement("playerbox");
var runner = Dos(el);
return runner.ready(app.core.on_ready);
});
app.core.main_BANG_ = (function app$core$main_BANG_(){
return app.core.launch();
});

//# sourceMappingURL=app.core.js.map
