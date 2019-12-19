goog.provide('app.core');
goog.require('cljs.core');
var module$node_modules$js_dos$dist$js_dos=shadow.js.require("module$node_modules$js_dos$dist$js_dos", {});
goog.require('goog.dom');
goog.require('goog.dom.fullscreen');
goog.require('goog.events');
app.core.controls_scheme = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"left",new cljs.core.Keyword(null,"code","code",1586293142),(37)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"right",new cljs.core.Keyword(null,"code","code",1586293142),(39)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"up",new cljs.core.Keyword(null,"code","code",1586293142),(38)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"down",new cljs.core.Keyword(null,"code","code",1586293142),(40)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"space",new cljs.core.Keyword(null,"code","code",1586293142),(32)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"enter",new cljs.core.Keyword(null,"code","code",1586293142),(13)], null)], null);
app.core.setup_keys = (function app$core$setup_keys(ci,controls){
var seq__34154 = cljs.core.seq(controls);
var chunk__34155 = null;
var count__34156 = (0);
var i__34157 = (0);
while(true){
if((i__34157 < count__34156)){
var c = chunk__34155.cljs$core$IIndexed$_nth$arity$2(null,i__34157);
var map__34174_34191 = c;
var map__34174_34192__$1 = (((((!((map__34174_34191 == null))))?(((((map__34174_34191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34174_34191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34174_34191):map__34174_34191);
var id_34193 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34174_34192__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var code_34194 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34174_34192__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var el_34195 = goog.dom.getElement(id_34193);
var G__34176_34196 = el_34195;
var G__34177_34197 = goog.events.EventType.MOUSEDOWN;
var G__34178_34198 = ((function (seq__34154,chunk__34155,count__34156,i__34157,G__34176_34196,G__34177_34197,map__34174_34191,map__34174_34192__$1,id_34193,code_34194,el_34195,c){
return (function (){
return ci.simulateKeyEvent(code_34194,true);
});})(seq__34154,chunk__34155,count__34156,i__34157,G__34176_34196,G__34177_34197,map__34174_34191,map__34174_34192__$1,id_34193,code_34194,el_34195,c))
;
goog.events.listen(G__34176_34196,G__34177_34197,G__34178_34198);

var G__34179_34199 = el_34195;
var G__34180_34200 = goog.events.EventType.MOUSEUP;
var G__34181_34201 = ((function (seq__34154,chunk__34155,count__34156,i__34157,G__34179_34199,G__34180_34200,map__34174_34191,map__34174_34192__$1,id_34193,code_34194,el_34195,c){
return (function (){
return ci.simulateKeyEvent(code_34194,false);
});})(seq__34154,chunk__34155,count__34156,i__34157,G__34179_34199,G__34180_34200,map__34174_34191,map__34174_34192__$1,id_34193,code_34194,el_34195,c))
;
goog.events.listen(G__34179_34199,G__34180_34200,G__34181_34201);


var G__34202 = seq__34154;
var G__34203 = chunk__34155;
var G__34204 = count__34156;
var G__34205 = (i__34157 + (1));
seq__34154 = G__34202;
chunk__34155 = G__34203;
count__34156 = G__34204;
i__34157 = G__34205;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34154);
if(temp__5735__auto__){
var seq__34154__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34154__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34154__$1);
var G__34206 = cljs.core.chunk_rest(seq__34154__$1);
var G__34207 = c__4609__auto__;
var G__34208 = cljs.core.count(c__4609__auto__);
var G__34209 = (0);
seq__34154 = G__34206;
chunk__34155 = G__34207;
count__34156 = G__34208;
i__34157 = G__34209;
continue;
} else {
var c = cljs.core.first(seq__34154__$1);
var map__34182_34210 = c;
var map__34182_34211__$1 = (((((!((map__34182_34210 == null))))?(((((map__34182_34210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34182_34210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34182_34210):map__34182_34210);
var id_34212 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34182_34211__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var code_34213 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34182_34211__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var el_34214 = goog.dom.getElement(id_34212);
var G__34184_34215 = el_34214;
var G__34185_34216 = goog.events.EventType.MOUSEDOWN;
var G__34186_34217 = ((function (seq__34154,chunk__34155,count__34156,i__34157,G__34184_34215,G__34185_34216,map__34182_34210,map__34182_34211__$1,id_34212,code_34213,el_34214,c,seq__34154__$1,temp__5735__auto__){
return (function (){
return ci.simulateKeyEvent(code_34213,true);
});})(seq__34154,chunk__34155,count__34156,i__34157,G__34184_34215,G__34185_34216,map__34182_34210,map__34182_34211__$1,id_34212,code_34213,el_34214,c,seq__34154__$1,temp__5735__auto__))
;
goog.events.listen(G__34184_34215,G__34185_34216,G__34186_34217);

var G__34187_34218 = el_34214;
var G__34188_34219 = goog.events.EventType.MOUSEUP;
var G__34189_34220 = ((function (seq__34154,chunk__34155,count__34156,i__34157,G__34187_34218,G__34188_34219,map__34182_34210,map__34182_34211__$1,id_34212,code_34213,el_34214,c,seq__34154__$1,temp__5735__auto__){
return (function (){
return ci.simulateKeyEvent(code_34213,false);
});})(seq__34154,chunk__34155,count__34156,i__34157,G__34187_34218,G__34188_34219,map__34182_34210,map__34182_34211__$1,id_34212,code_34213,el_34214,c,seq__34154__$1,temp__5735__auto__))
;
goog.events.listen(G__34187_34218,G__34188_34219,G__34189_34220);


var G__34221 = cljs.core.next(seq__34154__$1);
var G__34222 = null;
var G__34223 = (0);
var G__34224 = (0);
seq__34154 = G__34221;
chunk__34155 = G__34222;
count__34156 = G__34223;
i__34157 = G__34224;
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
return goog.events.listen(btn,goog.events.EventType.MOUSEDOWN,app.core.fullscreen);
});
app.core.process_ci = (function app$core$process_ci(ci){
return app.core.setup_keys(ci,app.core.controls_scheme);
});
app.core.on_ready = (function app$core$on_ready(fs,main){
var p1 = fs.extract("chip.zip");
var p2 = p1.then((function (){
var G__34190 = ["-c","CHIPS.EXE"];
return (main.cljs$core$IFn$_invoke$arity$1 ? main.cljs$core$IFn$_invoke$arity$1(G__34190) : main.call(null,G__34190));
}));
p2.then(app.core.process_ci);

return app.core.listen_fullscreen();
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
