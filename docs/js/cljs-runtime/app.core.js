goog.provide('app.core');
goog.require('cljs.core');
var module$node_modules$js_dos$dist$js_dos=shadow.js.require("module$node_modules$js_dos$dist$js_dos", {});
goog.require('goog.dom');
goog.require('goog.dom.fullscreen');
goog.require('goog.events');
app.core.controls_scheme = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"left",new cljs.core.Keyword(null,"code","code",1586293142),(37)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"right",new cljs.core.Keyword(null,"code","code",1586293142),(39)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"up",new cljs.core.Keyword(null,"code","code",1586293142),(38)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"down",new cljs.core.Keyword(null,"code","code",1586293142),(40)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"space",new cljs.core.Keyword(null,"code","code",1586293142),(32)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"enter",new cljs.core.Keyword(null,"code","code",1586293142),(13)], null)], null);
app.core.listen_touch = (function app$core$listen_touch(el,press,cb){
var G__26132_26151 = el;
var G__26133_26152 = (cljs.core.truth_(press)?goog.events.EventType.TOUCHSTART:goog.events.EventType.TOUCHEND);
var G__26134_26153 = (function (evt){
evt.preventDefault();

return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
});
goog.events.listen(G__26132_26151,G__26133_26152,G__26134_26153);

var G__26135 = el;
var G__26136 = (cljs.core.truth_(press)?goog.events.EventType.MOUSEDOWN:goog.events.EventType.MOUSEUP);
var G__26137 = (function (evt){
evt.preventDefault();

return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
});
return goog.events.listen(G__26135,G__26136,G__26137);
});
app.core.setup_keys = (function app$core$setup_keys(ci,controls){
var seq__26138 = cljs.core.seq(controls);
var chunk__26139 = null;
var count__26140 = (0);
var i__26141 = (0);
while(true){
if((i__26141 < count__26140)){
var c = chunk__26139.cljs$core$IIndexed$_nth$arity$2(null,i__26141);
var map__26146_26154 = c;
var map__26146_26155__$1 = (((((!((map__26146_26154 == null))))?(((((map__26146_26154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26146_26154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26146_26154):map__26146_26154);
var id_26156 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26146_26155__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var code_26157 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26146_26155__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var el_26158 = goog.dom.getElement(id_26156);
app.core.listen_touch(el_26158,true,((function (seq__26138,chunk__26139,count__26140,i__26141,map__26146_26154,map__26146_26155__$1,id_26156,code_26157,el_26158,c){
return (function (){
return ci.simulateKeyEvent(code_26157,true);
});})(seq__26138,chunk__26139,count__26140,i__26141,map__26146_26154,map__26146_26155__$1,id_26156,code_26157,el_26158,c))
);

app.core.listen_touch(el_26158,false,((function (seq__26138,chunk__26139,count__26140,i__26141,map__26146_26154,map__26146_26155__$1,id_26156,code_26157,el_26158,c){
return (function (){
return ci.simulateKeyEvent(code_26157,false);
});})(seq__26138,chunk__26139,count__26140,i__26141,map__26146_26154,map__26146_26155__$1,id_26156,code_26157,el_26158,c))
);


var G__26159 = seq__26138;
var G__26160 = chunk__26139;
var G__26161 = count__26140;
var G__26162 = (i__26141 + (1));
seq__26138 = G__26159;
chunk__26139 = G__26160;
count__26140 = G__26161;
i__26141 = G__26162;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__26138);
if(temp__5735__auto__){
var seq__26138__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26138__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__26138__$1);
var G__26163 = cljs.core.chunk_rest(seq__26138__$1);
var G__26164 = c__4609__auto__;
var G__26165 = cljs.core.count(c__4609__auto__);
var G__26166 = (0);
seq__26138 = G__26163;
chunk__26139 = G__26164;
count__26140 = G__26165;
i__26141 = G__26166;
continue;
} else {
var c = cljs.core.first(seq__26138__$1);
var map__26148_26167 = c;
var map__26148_26168__$1 = (((((!((map__26148_26167 == null))))?(((((map__26148_26167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26148_26167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26148_26167):map__26148_26167);
var id_26169 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26148_26168__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var code_26170 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26148_26168__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var el_26171 = goog.dom.getElement(id_26169);
app.core.listen_touch(el_26171,true,((function (seq__26138,chunk__26139,count__26140,i__26141,map__26148_26167,map__26148_26168__$1,id_26169,code_26170,el_26171,c,seq__26138__$1,temp__5735__auto__){
return (function (){
return ci.simulateKeyEvent(code_26170,true);
});})(seq__26138,chunk__26139,count__26140,i__26141,map__26148_26167,map__26148_26168__$1,id_26169,code_26170,el_26171,c,seq__26138__$1,temp__5735__auto__))
);

app.core.listen_touch(el_26171,false,((function (seq__26138,chunk__26139,count__26140,i__26141,map__26148_26167,map__26148_26168__$1,id_26169,code_26170,el_26171,c,seq__26138__$1,temp__5735__auto__){
return (function (){
return ci.simulateKeyEvent(code_26170,false);
});})(seq__26138,chunk__26139,count__26140,i__26141,map__26148_26167,map__26148_26168__$1,id_26169,code_26170,el_26171,c,seq__26138__$1,temp__5735__auto__))
);


var G__26172 = cljs.core.next(seq__26138__$1);
var G__26173 = null;
var G__26174 = (0);
var G__26175 = (0);
seq__26138 = G__26172;
chunk__26139 = G__26173;
count__26140 = G__26174;
i__26141 = G__26175;
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
var G__26150 = ["-c","CHIPS.EXE"];
return (main.cljs$core$IFn$_invoke$arity$1 ? main.cljs$core$IFn$_invoke$arity$1(G__26150) : main.call(null,G__26150));
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
