goog.provide('app.core');
goog.require('cljs.core');
var module$node_modules$js_dos$dist$js_dos=shadow.js.require("module$node_modules$js_dos$dist$js_dos", {});
goog.require('goog.dom');
goog.require('goog.events');
goog.require('app.mouse');
app.core.controls_scheme = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"space",new cljs.core.Keyword(null,"code","code",1586293142),(32)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"r",new cljs.core.Keyword(null,"code","code",1586293142),(82)], null)], null);
app.core.listen_touch = (function app$core$listen_touch(el,press,cb){
var G__26815_26838 = el;
var G__26816_26839 = (cljs.core.truth_(press)?goog.events.EventType.TOUCHSTART:goog.events.EventType.TOUCHEND);
var G__26817_26840 = (function (evt){
evt.preventDefault();

return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
});
goog.events.listen(G__26815_26838,G__26816_26839,G__26817_26840);

var G__26818 = el;
var G__26819 = (cljs.core.truth_(press)?goog.events.EventType.MOUSEDOWN:goog.events.EventType.MOUSEUP);
var G__26820 = (function (evt){
evt.preventDefault();

return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
});
return goog.events.listen(G__26818,G__26819,G__26820);
});
app.core.setup_keys = (function app$core$setup_keys(ci,controls){
var seq__26821 = cljs.core.seq(controls);
var chunk__26822 = null;
var count__26823 = (0);
var i__26824 = (0);
while(true){
if((i__26824 < count__26823)){
var c = chunk__26822.cljs$core$IIndexed$_nth$arity$2(null,i__26824);
var map__26829_26841 = c;
var map__26829_26842__$1 = (((((!((map__26829_26841 == null))))?(((((map__26829_26841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26829_26841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26829_26841):map__26829_26841);
var id_26843 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26829_26842__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var code_26844 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26829_26842__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var el_26845 = goog.dom.getElement(id_26843);
app.core.listen_touch(el_26845,true,((function (seq__26821,chunk__26822,count__26823,i__26824,map__26829_26841,map__26829_26842__$1,id_26843,code_26844,el_26845,c){
return (function (){
return ci.simulateKeyEvent(code_26844,true);
});})(seq__26821,chunk__26822,count__26823,i__26824,map__26829_26841,map__26829_26842__$1,id_26843,code_26844,el_26845,c))
);

app.core.listen_touch(el_26845,false,((function (seq__26821,chunk__26822,count__26823,i__26824,map__26829_26841,map__26829_26842__$1,id_26843,code_26844,el_26845,c){
return (function (){
return ci.simulateKeyEvent(code_26844,false);
});})(seq__26821,chunk__26822,count__26823,i__26824,map__26829_26841,map__26829_26842__$1,id_26843,code_26844,el_26845,c))
);


var G__26846 = seq__26821;
var G__26847 = chunk__26822;
var G__26848 = count__26823;
var G__26849 = (i__26824 + (1));
seq__26821 = G__26846;
chunk__26822 = G__26847;
count__26823 = G__26848;
i__26824 = G__26849;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__26821);
if(temp__5735__auto__){
var seq__26821__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26821__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__26821__$1);
var G__26850 = cljs.core.chunk_rest(seq__26821__$1);
var G__26851 = c__4609__auto__;
var G__26852 = cljs.core.count(c__4609__auto__);
var G__26853 = (0);
seq__26821 = G__26850;
chunk__26822 = G__26851;
count__26823 = G__26852;
i__26824 = G__26853;
continue;
} else {
var c = cljs.core.first(seq__26821__$1);
var map__26831_26854 = c;
var map__26831_26855__$1 = (((((!((map__26831_26854 == null))))?(((((map__26831_26854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26831_26854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26831_26854):map__26831_26854);
var id_26856 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26831_26855__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var code_26857 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26831_26855__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var el_26858 = goog.dom.getElement(id_26856);
app.core.listen_touch(el_26858,true,((function (seq__26821,chunk__26822,count__26823,i__26824,map__26831_26854,map__26831_26855__$1,id_26856,code_26857,el_26858,c,seq__26821__$1,temp__5735__auto__){
return (function (){
return ci.simulateKeyEvent(code_26857,true);
});})(seq__26821,chunk__26822,count__26823,i__26824,map__26831_26854,map__26831_26855__$1,id_26856,code_26857,el_26858,c,seq__26821__$1,temp__5735__auto__))
);

app.core.listen_touch(el_26858,false,((function (seq__26821,chunk__26822,count__26823,i__26824,map__26831_26854,map__26831_26855__$1,id_26856,code_26857,el_26858,c,seq__26821__$1,temp__5735__auto__){
return (function (){
return ci.simulateKeyEvent(code_26857,false);
});})(seq__26821,chunk__26822,count__26823,i__26824,map__26831_26854,map__26831_26855__$1,id_26856,code_26857,el_26858,c,seq__26821__$1,temp__5735__auto__))
);


var G__26859 = cljs.core.next(seq__26821__$1);
var G__26860 = null;
var G__26861 = (0);
var G__26862 = (0);
seq__26821 = G__26859;
chunk__26822 = G__26860;
count__26823 = G__26861;
i__26824 = G__26862;
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
var seq__26833_26863 = cljs.core.seq(cljs.core.list((52),(66),(13)));
var chunk__26834_26864 = null;
var count__26835_26865 = (0);
var i__26836_26866 = (0);
while(true){
if((i__26836_26866 < count__26835_26865)){
var code_26867 = chunk__26834_26864.cljs$core$IIndexed$_nth$arity$2(null,i__26836_26866);
ci.simulateKeyEvent(code_26867,true);


var G__26868 = seq__26833_26863;
var G__26869 = chunk__26834_26864;
var G__26870 = count__26835_26865;
var G__26871 = (i__26836_26866 + (1));
seq__26833_26863 = G__26868;
chunk__26834_26864 = G__26869;
count__26835_26865 = G__26870;
i__26836_26866 = G__26871;
continue;
} else {
var temp__5735__auto___26872 = cljs.core.seq(seq__26833_26863);
if(temp__5735__auto___26872){
var seq__26833_26873__$1 = temp__5735__auto___26872;
if(cljs.core.chunked_seq_QMARK_(seq__26833_26873__$1)){
var c__4609__auto___26874 = cljs.core.chunk_first(seq__26833_26873__$1);
var G__26875 = cljs.core.chunk_rest(seq__26833_26873__$1);
var G__26876 = c__4609__auto___26874;
var G__26877 = cljs.core.count(c__4609__auto___26874);
var G__26878 = (0);
seq__26833_26863 = G__26875;
chunk__26834_26864 = G__26876;
count__26835_26865 = G__26877;
i__26836_26866 = G__26878;
continue;
} else {
var code_26879 = cljs.core.first(seq__26833_26873__$1);
ci.simulateKeyEvent(code_26879,true);


var G__26880 = cljs.core.next(seq__26833_26873__$1);
var G__26881 = null;
var G__26882 = (0);
var G__26883 = (0);
seq__26833_26863 = G__26880;
chunk__26834_26864 = G__26881;
count__26835_26865 = G__26882;
i__26836_26866 = G__26883;
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
var G__26837 = ["-c","CHIPS.EXE"];
return (main.cljs$core$IFn$_invoke$arity$1 ? main.cljs$core$IFn$_invoke$arity$1(G__26837) : main.call(null,G__26837));
}));
return p2.then(app.core.process_ci);
});
app.core.launch = (function app$core$launch(){
var el = goog.dom.getElement("playerbox");
var runner = Dos(el,({"cycles": (1000)}));
return runner.ready(app.core.on_ready);
});
app.core.main_BANG_ = (function app$core$main_BANG_(){
return app.core.launch();
});

//# sourceMappingURL=app.core.js.map
