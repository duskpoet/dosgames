goog.provide('app.core');
goog.require('cljs.core');
var module$node_modules$js_dos$dist$js_dos=shadow.js.require("module$node_modules$js_dos$dist$js_dos", {});
goog.require('goog.dom');
goog.require('goog.events');
goog.require('app.mouse');
app.core.controls_scheme = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"space",new cljs.core.Keyword(null,"code","code",1586293142),(32)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"r",new cljs.core.Keyword(null,"code","code",1586293142),(82)], null)], null);
app.core.listen_touch = (function app$core$listen_touch(el,press,cb){
var G__27016_27039 = el;
var G__27017_27040 = (cljs.core.truth_(press)?goog.events.EventType.TOUCHSTART:goog.events.EventType.TOUCHEND);
var G__27018_27041 = (function (evt){
evt.preventDefault();

return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
});
goog.events.listen(G__27016_27039,G__27017_27040,G__27018_27041);

var G__27019 = el;
var G__27020 = (cljs.core.truth_(press)?goog.events.EventType.MOUSEDOWN:goog.events.EventType.MOUSEUP);
var G__27021 = (function (evt){
evt.preventDefault();

return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
});
return goog.events.listen(G__27019,G__27020,G__27021);
});
app.core.setup_keys = (function app$core$setup_keys(ci,controls){
var seq__27022 = cljs.core.seq(controls);
var chunk__27023 = null;
var count__27024 = (0);
var i__27025 = (0);
while(true){
if((i__27025 < count__27024)){
var c = chunk__27023.cljs$core$IIndexed$_nth$arity$2(null,i__27025);
var map__27030_27042 = c;
var map__27030_27043__$1 = (((((!((map__27030_27042 == null))))?(((((map__27030_27042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27030_27042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27030_27042):map__27030_27042);
var id_27044 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27030_27043__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var code_27045 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27030_27043__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var el_27046 = goog.dom.getElement(id_27044);
app.core.listen_touch(el_27046,true,((function (seq__27022,chunk__27023,count__27024,i__27025,map__27030_27042,map__27030_27043__$1,id_27044,code_27045,el_27046,c){
return (function (){
return ci.simulateKeyEvent(code_27045,true);
});})(seq__27022,chunk__27023,count__27024,i__27025,map__27030_27042,map__27030_27043__$1,id_27044,code_27045,el_27046,c))
);

app.core.listen_touch(el_27046,false,((function (seq__27022,chunk__27023,count__27024,i__27025,map__27030_27042,map__27030_27043__$1,id_27044,code_27045,el_27046,c){
return (function (){
return ci.simulateKeyEvent(code_27045,false);
});})(seq__27022,chunk__27023,count__27024,i__27025,map__27030_27042,map__27030_27043__$1,id_27044,code_27045,el_27046,c))
);


var G__27047 = seq__27022;
var G__27048 = chunk__27023;
var G__27049 = count__27024;
var G__27050 = (i__27025 + (1));
seq__27022 = G__27047;
chunk__27023 = G__27048;
count__27024 = G__27049;
i__27025 = G__27050;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__27022);
if(temp__5735__auto__){
var seq__27022__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27022__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__27022__$1);
var G__27051 = cljs.core.chunk_rest(seq__27022__$1);
var G__27052 = c__4609__auto__;
var G__27053 = cljs.core.count(c__4609__auto__);
var G__27054 = (0);
seq__27022 = G__27051;
chunk__27023 = G__27052;
count__27024 = G__27053;
i__27025 = G__27054;
continue;
} else {
var c = cljs.core.first(seq__27022__$1);
var map__27032_27055 = c;
var map__27032_27056__$1 = (((((!((map__27032_27055 == null))))?(((((map__27032_27055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27032_27055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27032_27055):map__27032_27055);
var id_27057 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27032_27056__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var code_27058 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27032_27056__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var el_27059 = goog.dom.getElement(id_27057);
app.core.listen_touch(el_27059,true,((function (seq__27022,chunk__27023,count__27024,i__27025,map__27032_27055,map__27032_27056__$1,id_27057,code_27058,el_27059,c,seq__27022__$1,temp__5735__auto__){
return (function (){
return ci.simulateKeyEvent(code_27058,true);
});})(seq__27022,chunk__27023,count__27024,i__27025,map__27032_27055,map__27032_27056__$1,id_27057,code_27058,el_27059,c,seq__27022__$1,temp__5735__auto__))
);

app.core.listen_touch(el_27059,false,((function (seq__27022,chunk__27023,count__27024,i__27025,map__27032_27055,map__27032_27056__$1,id_27057,code_27058,el_27059,c,seq__27022__$1,temp__5735__auto__){
return (function (){
return ci.simulateKeyEvent(code_27058,false);
});})(seq__27022,chunk__27023,count__27024,i__27025,map__27032_27055,map__27032_27056__$1,id_27057,code_27058,el_27059,c,seq__27022__$1,temp__5735__auto__))
);


var G__27060 = cljs.core.next(seq__27022__$1);
var G__27061 = null;
var G__27062 = (0);
var G__27063 = (0);
seq__27022 = G__27060;
chunk__27023 = G__27061;
count__27024 = G__27062;
i__27025 = G__27063;
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
var seq__27034_27064 = cljs.core.seq(cljs.core.list((52),(66),(13)));
var chunk__27035_27065 = null;
var count__27036_27066 = (0);
var i__27037_27067 = (0);
while(true){
if((i__27037_27067 < count__27036_27066)){
var code_27068 = chunk__27035_27065.cljs$core$IIndexed$_nth$arity$2(null,i__27037_27067);
ci.simulateKeyEvent(code_27068,true);


var G__27069 = seq__27034_27064;
var G__27070 = chunk__27035_27065;
var G__27071 = count__27036_27066;
var G__27072 = (i__27037_27067 + (1));
seq__27034_27064 = G__27069;
chunk__27035_27065 = G__27070;
count__27036_27066 = G__27071;
i__27037_27067 = G__27072;
continue;
} else {
var temp__5735__auto___27073 = cljs.core.seq(seq__27034_27064);
if(temp__5735__auto___27073){
var seq__27034_27074__$1 = temp__5735__auto___27073;
if(cljs.core.chunked_seq_QMARK_(seq__27034_27074__$1)){
var c__4609__auto___27075 = cljs.core.chunk_first(seq__27034_27074__$1);
var G__27076 = cljs.core.chunk_rest(seq__27034_27074__$1);
var G__27077 = c__4609__auto___27075;
var G__27078 = cljs.core.count(c__4609__auto___27075);
var G__27079 = (0);
seq__27034_27064 = G__27076;
chunk__27035_27065 = G__27077;
count__27036_27066 = G__27078;
i__27037_27067 = G__27079;
continue;
} else {
var code_27080 = cljs.core.first(seq__27034_27074__$1);
ci.simulateKeyEvent(code_27080,true);


var G__27081 = cljs.core.next(seq__27034_27074__$1);
var G__27082 = null;
var G__27083 = (0);
var G__27084 = (0);
seq__27034_27064 = G__27081;
chunk__27035_27065 = G__27082;
count__27036_27066 = G__27083;
i__27037_27067 = G__27084;
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
var G__27038 = ["-c","CHIPS.EXE"];
return (main.cljs$core$IFn$_invoke$arity$1 ? main.cljs$core$IFn$_invoke$arity$1(G__27038) : main.call(null,G__27038));
}));
return p2.then(app.core.process_ci);
});
app.core.launch = (function app$core$launch(){
var el = goog.dom.getElement("playerbox");
var runner = Dos(el,({"cycles": (2000)}));
return runner.ready(app.core.on_ready);
});
app.core.main_BANG_ = (function app$core$main_BANG_(){
return app.core.launch();
});

//# sourceMappingURL=app.core.js.map
