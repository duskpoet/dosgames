goog.provide('app.core');
goog.require('cljs.core');
var module$node_modules$js_dos$dist$js_dos=shadow.js.require("module$node_modules$js_dos$dist$js_dos", {});
goog.require('goog.dom');
goog.require('goog.dom.fullscreen');
goog.require('goog.events');
app.core.controls_scheme = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"left",new cljs.core.Keyword(null,"code","code",1586293142),(37)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"right",new cljs.core.Keyword(null,"code","code",1586293142),(39)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"up",new cljs.core.Keyword(null,"code","code",1586293142),(38)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"down",new cljs.core.Keyword(null,"code","code",1586293142),(40)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"space",new cljs.core.Keyword(null,"code","code",1586293142),(32)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"enter",new cljs.core.Keyword(null,"code","code",1586293142),(13)], null)], null);
app.core.listen_touch = (function app$core$listen_touch(el,press,cb){
var G__25898_25917 = el;
var G__25899_25918 = (cljs.core.truth_(press)?goog.events.EventType.TOUCHSTART:goog.events.EventType.TOUCHEND);
var G__25900_25919 = (function (evt){
evt.preventDefault();

return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
});
goog.events.listen(G__25898_25917,G__25899_25918,G__25900_25919);

var G__25901 = el;
var G__25902 = (cljs.core.truth_(press)?goog.events.EventType.MOUSEDOWN:goog.events.EventType.MOUSEUP);
var G__25903 = (function (evt){
evt.preventDefault();

return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
});
return goog.events.listen(G__25901,G__25902,G__25903);
});
app.core.setup_keys = (function app$core$setup_keys(ci,controls){
var seq__25904 = cljs.core.seq(controls);
var chunk__25905 = null;
var count__25906 = (0);
var i__25907 = (0);
while(true){
if((i__25907 < count__25906)){
var c = chunk__25905.cljs$core$IIndexed$_nth$arity$2(null,i__25907);
var map__25912_25920 = c;
var map__25912_25921__$1 = (((((!((map__25912_25920 == null))))?(((((map__25912_25920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25912_25920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25912_25920):map__25912_25920);
var id_25922 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25912_25921__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var code_25923 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25912_25921__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var el_25924 = goog.dom.getElement(id_25922);
app.core.listen_touch(el_25924,true,((function (seq__25904,chunk__25905,count__25906,i__25907,map__25912_25920,map__25912_25921__$1,id_25922,code_25923,el_25924,c){
return (function (){
return ci.simulateKeyEvent(code_25923,true);
});})(seq__25904,chunk__25905,count__25906,i__25907,map__25912_25920,map__25912_25921__$1,id_25922,code_25923,el_25924,c))
);

app.core.listen_touch(el_25924,false,((function (seq__25904,chunk__25905,count__25906,i__25907,map__25912_25920,map__25912_25921__$1,id_25922,code_25923,el_25924,c){
return (function (){
return ci.simulateKeyEvent(code_25923,false);
});})(seq__25904,chunk__25905,count__25906,i__25907,map__25912_25920,map__25912_25921__$1,id_25922,code_25923,el_25924,c))
);


var G__25925 = seq__25904;
var G__25926 = chunk__25905;
var G__25927 = count__25906;
var G__25928 = (i__25907 + (1));
seq__25904 = G__25925;
chunk__25905 = G__25926;
count__25906 = G__25927;
i__25907 = G__25928;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__25904);
if(temp__5735__auto__){
var seq__25904__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25904__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__25904__$1);
var G__25929 = cljs.core.chunk_rest(seq__25904__$1);
var G__25930 = c__4609__auto__;
var G__25931 = cljs.core.count(c__4609__auto__);
var G__25932 = (0);
seq__25904 = G__25929;
chunk__25905 = G__25930;
count__25906 = G__25931;
i__25907 = G__25932;
continue;
} else {
var c = cljs.core.first(seq__25904__$1);
var map__25914_25933 = c;
var map__25914_25934__$1 = (((((!((map__25914_25933 == null))))?(((((map__25914_25933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25914_25933.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25914_25933):map__25914_25933);
var id_25935 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25914_25934__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var code_25936 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25914_25934__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var el_25937 = goog.dom.getElement(id_25935);
app.core.listen_touch(el_25937,true,((function (seq__25904,chunk__25905,count__25906,i__25907,map__25914_25933,map__25914_25934__$1,id_25935,code_25936,el_25937,c,seq__25904__$1,temp__5735__auto__){
return (function (){
return ci.simulateKeyEvent(code_25936,true);
});})(seq__25904,chunk__25905,count__25906,i__25907,map__25914_25933,map__25914_25934__$1,id_25935,code_25936,el_25937,c,seq__25904__$1,temp__5735__auto__))
);

app.core.listen_touch(el_25937,false,((function (seq__25904,chunk__25905,count__25906,i__25907,map__25914_25933,map__25914_25934__$1,id_25935,code_25936,el_25937,c,seq__25904__$1,temp__5735__auto__){
return (function (){
return ci.simulateKeyEvent(code_25936,false);
});})(seq__25904,chunk__25905,count__25906,i__25907,map__25914_25933,map__25914_25934__$1,id_25935,code_25936,el_25937,c,seq__25904__$1,temp__5735__auto__))
);


var G__25938 = cljs.core.next(seq__25904__$1);
var G__25939 = null;
var G__25940 = (0);
var G__25941 = (0);
seq__25904 = G__25938;
chunk__25905 = G__25939;
count__25906 = G__25940;
i__25907 = G__25941;
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
var G__25916 = ["-c","CHIPS.EXE"];
return (main.cljs$core$IFn$_invoke$arity$1 ? main.cljs$core$IFn$_invoke$arity$1(G__25916) : main.call(null,G__25916));
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
