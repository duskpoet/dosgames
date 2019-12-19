goog.provide('app.core');
goog.require('cljs.core');
var module$node_modules$js_dos$dist$js_dos=shadow.js.require("module$node_modules$js_dos$dist$js_dos", {});
goog.require('goog.dom');
goog.require('goog.dom.fullscreen');
goog.require('goog.events');
app.core.controls_scheme = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"left",new cljs.core.Keyword(null,"code","code",1586293142),(37)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"right",new cljs.core.Keyword(null,"code","code",1586293142),(39)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"up",new cljs.core.Keyword(null,"code","code",1586293142),(38)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"down",new cljs.core.Keyword(null,"code","code",1586293142),(40)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"space",new cljs.core.Keyword(null,"code","code",1586293142),(32)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"enter",new cljs.core.Keyword(null,"code","code",1586293142),(13)], null)], null);
app.core.setup_keys = (function app$core$setup_keys(ci,controls){
var seq__43863 = cljs.core.seq(controls);
var chunk__43875 = null;
var count__43876 = (0);
var i__43877 = (0);
while(true){
if((i__43877 < count__43876)){
var c = chunk__43875.cljs$core$IIndexed$_nth$arity$2(null,i__43877);
var map__43912_43954 = c;
var map__43912_43955__$1 = (((((!((map__43912_43954 == null))))?(((((map__43912_43954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43912_43954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43912_43954):map__43912_43954);
var id_43956 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43912_43955__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var code_43957 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43912_43955__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var el_43958 = goog.dom.getElement(id_43956);
var G__43914_43967 = el_43958;
var G__43915_43968 = goog.events.EventType.POINTERDOWN;
var G__43916_43969 = ((function (seq__43863,chunk__43875,count__43876,i__43877,G__43914_43967,G__43915_43968,map__43912_43954,map__43912_43955__$1,id_43956,code_43957,el_43958,c){
return (function (){
return ci.simulateKeyEvent(code_43957,true);
});})(seq__43863,chunk__43875,count__43876,i__43877,G__43914_43967,G__43915_43968,map__43912_43954,map__43912_43955__$1,id_43956,code_43957,el_43958,c))
;
goog.events.listen(G__43914_43967,G__43915_43968,G__43916_43969);

var G__43917_43970 = el_43958;
var G__43918_43971 = goog.events.EventType.POINTERUP;
var G__43919_43972 = ((function (seq__43863,chunk__43875,count__43876,i__43877,G__43917_43970,G__43918_43971,map__43912_43954,map__43912_43955__$1,id_43956,code_43957,el_43958,c){
return (function (){
return ci.simulateKeyEvent(code_43957,false);
});})(seq__43863,chunk__43875,count__43876,i__43877,G__43917_43970,G__43918_43971,map__43912_43954,map__43912_43955__$1,id_43956,code_43957,el_43958,c))
;
goog.events.listen(G__43917_43970,G__43918_43971,G__43919_43972);


var G__43973 = seq__43863;
var G__43974 = chunk__43875;
var G__43975 = count__43876;
var G__43976 = (i__43877 + (1));
seq__43863 = G__43973;
chunk__43875 = G__43974;
count__43876 = G__43975;
i__43877 = G__43976;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43863);
if(temp__5735__auto__){
var seq__43863__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43863__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__43863__$1);
var G__43978 = cljs.core.chunk_rest(seq__43863__$1);
var G__43979 = c__4609__auto__;
var G__43980 = cljs.core.count(c__4609__auto__);
var G__43981 = (0);
seq__43863 = G__43978;
chunk__43875 = G__43979;
count__43876 = G__43980;
i__43877 = G__43981;
continue;
} else {
var c = cljs.core.first(seq__43863__$1);
var map__43923_43982 = c;
var map__43923_43983__$1 = (((((!((map__43923_43982 == null))))?(((((map__43923_43982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43923_43982.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43923_43982):map__43923_43982);
var id_43984 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43923_43983__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var code_43985 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43923_43983__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var el_43986 = goog.dom.getElement(id_43984);
var G__43925_43989 = el_43986;
var G__43926_43990 = goog.events.EventType.POINTERDOWN;
var G__43927_43991 = ((function (seq__43863,chunk__43875,count__43876,i__43877,G__43925_43989,G__43926_43990,map__43923_43982,map__43923_43983__$1,id_43984,code_43985,el_43986,c,seq__43863__$1,temp__5735__auto__){
return (function (){
return ci.simulateKeyEvent(code_43985,true);
});})(seq__43863,chunk__43875,count__43876,i__43877,G__43925_43989,G__43926_43990,map__43923_43982,map__43923_43983__$1,id_43984,code_43985,el_43986,c,seq__43863__$1,temp__5735__auto__))
;
goog.events.listen(G__43925_43989,G__43926_43990,G__43927_43991);

var G__43928_43992 = el_43986;
var G__43929_43993 = goog.events.EventType.POINTERUP;
var G__43930_43994 = ((function (seq__43863,chunk__43875,count__43876,i__43877,G__43928_43992,G__43929_43993,map__43923_43982,map__43923_43983__$1,id_43984,code_43985,el_43986,c,seq__43863__$1,temp__5735__auto__){
return (function (){
return ci.simulateKeyEvent(code_43985,false);
});})(seq__43863,chunk__43875,count__43876,i__43877,G__43928_43992,G__43929_43993,map__43923_43982,map__43923_43983__$1,id_43984,code_43985,el_43986,c,seq__43863__$1,temp__5735__auto__))
;
goog.events.listen(G__43928_43992,G__43929_43993,G__43930_43994);


var G__44000 = cljs.core.next(seq__43863__$1);
var G__44001 = null;
var G__44002 = (0);
var G__44003 = (0);
seq__43863 = G__44000;
chunk__43875 = G__44001;
count__43876 = G__44002;
i__43877 = G__44003;
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
return goog.events.listen(btn,"click",app.core.fullscreen);
});
app.core.process_ci = (function app$core$process_ci(ci){
return app.core.setup_keys(ci,app.core.controls_scheme);
});
app.core.on_ready = (function app$core$on_ready(fs,main){
var p1 = fs.extract("chip.zip");
var p2 = p1.then((function (){
var G__43939 = ["-c","CHIPS.EXE"];
return (main.cljs$core$IFn$_invoke$arity$1 ? main.cljs$core$IFn$_invoke$arity$1(G__43939) : main.call(null,G__43939));
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
