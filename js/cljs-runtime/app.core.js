goog.provide('app.core');
goog.require('cljs.core');
var module$node_modules$js_dos$dist$js_dos=shadow.js.require("module$node_modules$js_dos$dist$js_dos", {});
goog.require('goog.dom');
goog.require('goog.dom.fullscreen');
goog.require('goog.events');
goog.require('goog.style');
app.core.controls_scheme = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"left",new cljs.core.Keyword(null,"code","code",1586293142),(37),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),0.25,new cljs.core.Keyword(null,"top","top",-1856271961),0.25,new cljs.core.Keyword(null,"left","left",-399115937),(0)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"right",new cljs.core.Keyword(null,"code","code",1586293142),(39),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),0.25,new cljs.core.Keyword(null,"top","top",-1856271961),0.25,new cljs.core.Keyword(null,"left","left",-399115937),0.5], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"up",new cljs.core.Keyword(null,"code","code",1586293142),(38),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),0.25,new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"left","left",-399115937),0.25], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"down",new cljs.core.Keyword(null,"code","code",1586293142),(40),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),0.25,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),0.25,new cljs.core.Keyword(null,"left","left",-399115937),0.25], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"enter",new cljs.core.Keyword(null,"code","code",1586293142),(13),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),0.25,new cljs.core.Keyword(null,"top","top",-1856271961),0.25,new cljs.core.Keyword(null,"right","right",-452581833),0.25], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"space",new cljs.core.Keyword(null,"code","code",1586293142),(32),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),0.25,new cljs.core.Keyword(null,"top","top",-1856271961),0.25,new cljs.core.Keyword(null,"right","right",-452581833),0.5], null)], null)], null);
app.core.listen_touch = (function app$core$listen_touch(el,press,cb){
var G__26051_26106 = el;
var G__26052_26107 = (cljs.core.truth_(press)?goog.events.EventType.TOUCHSTART:goog.events.EventType.TOUCHEND);
var G__26053_26108 = (function (evt){
evt.preventDefault();

return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
});
goog.events.listen(G__26051_26106,G__26052_26107,G__26053_26108);

var G__26054 = el;
var G__26055 = (cljs.core.truth_(press)?goog.events.EventType.MOUSEDOWN:goog.events.EventType.MOUSEUP);
var G__26056 = (function (evt){
evt.preventDefault();

return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
});
return goog.events.listen(G__26054,G__26055,G__26056);
});
app.core.set_positions = (function app$core$set_positions(){
var keysEl = goog.dom.getElement("keys");
var container = goog.dom.getElement("player-container");
var h = (goog.style.getContentBoxSize(container).height / (2));
goog.style.setHeight(keysEl,h);

var seq__26057 = cljs.core.seq(app.core.controls_scheme);
var chunk__26058 = null;
var count__26059 = (0);
var i__26060 = (0);
while(true){
if((i__26060 < count__26059)){
var c = chunk__26058.cljs$core$IIndexed$_nth$arity$2(null,i__26060);
var map__26077_26109 = c;
var map__26077_26110__$1 = (((((!((map__26077_26109 == null))))?(((((map__26077_26109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26077_26109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26077_26109):map__26077_26109);
var pos_26111 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26077_26110__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var id_26112 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26077_26110__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var el_26113 = goog.dom.getElement(id_26112);
var styl_26114 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (seq__26057,chunk__26058,count__26059,i__26060,map__26077_26109,map__26077_26110__$1,pos_26111,id_26112,el_26113,c,keysEl,container,h){
return (function (p__26079){
var vec__26080 = p__26079;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26080,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26080,(1),null);
var px = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((v * h)),"px"].join('');
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"size","size",1098693007))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"width","width",-384071477),px,new cljs.core.Keyword(null,"height","height",1025178622),px], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,px], null);
}
});})(seq__26057,chunk__26058,count__26059,i__26060,map__26077_26109,map__26077_26110__$1,pos_26111,id_26112,el_26113,c,keysEl,container,h))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pos_26111], 0)));
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([styl_26114], 0));

var G__26083_26115 = el_26113;
var G__26084_26116 = cljs.core.clj__GT_js(styl_26114);
goog.style.setStyle(G__26083_26115,G__26084_26116);


var G__26117 = seq__26057;
var G__26118 = chunk__26058;
var G__26119 = count__26059;
var G__26120 = (i__26060 + (1));
seq__26057 = G__26117;
chunk__26058 = G__26118;
count__26059 = G__26119;
i__26060 = G__26120;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__26057);
if(temp__5735__auto__){
var seq__26057__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26057__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__26057__$1);
var G__26121 = cljs.core.chunk_rest(seq__26057__$1);
var G__26122 = c__4609__auto__;
var G__26123 = cljs.core.count(c__4609__auto__);
var G__26124 = (0);
seq__26057 = G__26121;
chunk__26058 = G__26122;
count__26059 = G__26123;
i__26060 = G__26124;
continue;
} else {
var c = cljs.core.first(seq__26057__$1);
var map__26085_26125 = c;
var map__26085_26126__$1 = (((((!((map__26085_26125 == null))))?(((((map__26085_26125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26085_26125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26085_26125):map__26085_26125);
var pos_26127 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26085_26126__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var id_26128 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26085_26126__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var el_26129 = goog.dom.getElement(id_26128);
var styl_26130 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (seq__26057,chunk__26058,count__26059,i__26060,map__26085_26125,map__26085_26126__$1,pos_26127,id_26128,el_26129,c,seq__26057__$1,temp__5735__auto__,keysEl,container,h){
return (function (p__26087){
var vec__26088 = p__26087;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26088,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26088,(1),null);
var px = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((v * h)),"px"].join('');
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"size","size",1098693007))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"width","width",-384071477),px,new cljs.core.Keyword(null,"height","height",1025178622),px], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,px], null);
}
});})(seq__26057,chunk__26058,count__26059,i__26060,map__26085_26125,map__26085_26126__$1,pos_26127,id_26128,el_26129,c,seq__26057__$1,temp__5735__auto__,keysEl,container,h))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pos_26127], 0)));
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([styl_26130], 0));

var G__26091_26131 = el_26129;
var G__26092_26132 = cljs.core.clj__GT_js(styl_26130);
goog.style.setStyle(G__26091_26131,G__26092_26132);


var G__26133 = cljs.core.next(seq__26057__$1);
var G__26134 = null;
var G__26135 = (0);
var G__26136 = (0);
seq__26057 = G__26133;
chunk__26058 = G__26134;
count__26059 = G__26135;
i__26060 = G__26136;
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
var seq__26093 = cljs.core.seq(controls);
var chunk__26094 = null;
var count__26095 = (0);
var i__26096 = (0);
while(true){
if((i__26096 < count__26095)){
var c = chunk__26094.cljs$core$IIndexed$_nth$arity$2(null,i__26096);
var map__26101_26137 = c;
var map__26101_26138__$1 = (((((!((map__26101_26137 == null))))?(((((map__26101_26137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26101_26137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26101_26137):map__26101_26137);
var id_26139 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26101_26138__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var code_26140 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26101_26138__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var el_26141 = goog.dom.getElement(id_26139);
app.core.listen_touch(el_26141,true,((function (seq__26093,chunk__26094,count__26095,i__26096,map__26101_26137,map__26101_26138__$1,id_26139,code_26140,el_26141,c){
return (function (){
return ci.simulateKeyEvent(code_26140,true);
});})(seq__26093,chunk__26094,count__26095,i__26096,map__26101_26137,map__26101_26138__$1,id_26139,code_26140,el_26141,c))
);

app.core.listen_touch(el_26141,false,((function (seq__26093,chunk__26094,count__26095,i__26096,map__26101_26137,map__26101_26138__$1,id_26139,code_26140,el_26141,c){
return (function (){
return ci.simulateKeyEvent(code_26140,false);
});})(seq__26093,chunk__26094,count__26095,i__26096,map__26101_26137,map__26101_26138__$1,id_26139,code_26140,el_26141,c))
);


var G__26142 = seq__26093;
var G__26143 = chunk__26094;
var G__26144 = count__26095;
var G__26145 = (i__26096 + (1));
seq__26093 = G__26142;
chunk__26094 = G__26143;
count__26095 = G__26144;
i__26096 = G__26145;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__26093);
if(temp__5735__auto__){
var seq__26093__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26093__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__26093__$1);
var G__26146 = cljs.core.chunk_rest(seq__26093__$1);
var G__26147 = c__4609__auto__;
var G__26148 = cljs.core.count(c__4609__auto__);
var G__26149 = (0);
seq__26093 = G__26146;
chunk__26094 = G__26147;
count__26095 = G__26148;
i__26096 = G__26149;
continue;
} else {
var c = cljs.core.first(seq__26093__$1);
var map__26103_26150 = c;
var map__26103_26151__$1 = (((((!((map__26103_26150 == null))))?(((((map__26103_26150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26103_26150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26103_26150):map__26103_26150);
var id_26152 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26103_26151__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var code_26153 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26103_26151__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var el_26154 = goog.dom.getElement(id_26152);
app.core.listen_touch(el_26154,true,((function (seq__26093,chunk__26094,count__26095,i__26096,map__26103_26150,map__26103_26151__$1,id_26152,code_26153,el_26154,c,seq__26093__$1,temp__5735__auto__){
return (function (){
return ci.simulateKeyEvent(code_26153,true);
});})(seq__26093,chunk__26094,count__26095,i__26096,map__26103_26150,map__26103_26151__$1,id_26152,code_26153,el_26154,c,seq__26093__$1,temp__5735__auto__))
);

app.core.listen_touch(el_26154,false,((function (seq__26093,chunk__26094,count__26095,i__26096,map__26103_26150,map__26103_26151__$1,id_26152,code_26153,el_26154,c,seq__26093__$1,temp__5735__auto__){
return (function (){
return ci.simulateKeyEvent(code_26153,false);
});})(seq__26093,chunk__26094,count__26095,i__26096,map__26103_26150,map__26103_26151__$1,id_26152,code_26153,el_26154,c,seq__26093__$1,temp__5735__auto__))
);


var G__26155 = cljs.core.next(seq__26093__$1);
var G__26156 = null;
var G__26157 = (0);
var G__26158 = (0);
seq__26093 = G__26155;
chunk__26094 = G__26156;
count__26095 = G__26157;
i__26096 = G__26158;
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
return app.core.setup_keys(ci,app.core.controls_scheme);
});
app.core.on_ready = (function app$core$on_ready(fs,main){
var p1 = fs.extract("chip.zip");
var p2 = p1.then((function (){
var G__26105 = ["-c","CHIPS.EXE"];
return (main.cljs$core$IFn$_invoke$arity$1 ? main.cljs$core$IFn$_invoke$arity$1(G__26105) : main.call(null,G__26105));
}));
p2.then(app.core.process_ci);

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
