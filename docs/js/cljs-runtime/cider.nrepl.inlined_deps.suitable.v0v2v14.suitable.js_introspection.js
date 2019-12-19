goog.provide('cider.nrepl.inlined_deps.suitable.v0v2v14.suitable.js_introspection');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.object');
cider.nrepl.inlined_deps.suitable.v0v2v14.suitable.js_introspection.own_property_descriptors = (cljs.core.truth_("getOwnPropertyDescriptors" in Object)?(function (obj){
return Object.getOwnPropertyDescriptors(obj);
}):(function (obj){
return cljs.core.clj__GT_js(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (key){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,Object.getOwnPropertyDescriptor(obj,key)], null);
}),Object.getOwnPropertyNames(obj))));
}));
/**
 * 
 */
cider.nrepl.inlined_deps.suitable.v0v2v14.suitable.js_introspection.properties_by_prototype = (function cider$nrepl$inlined_deps$suitable$v0v2v14$suitable$js_introspection$properties_by_prototype(obj){
var obj__$1 = obj;
var protos = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(obj__$1)){
var G__38519 = Object.getPrototypeOf(obj__$1);
var G__38520 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(protos,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"props","props",453281727),(cider.nrepl.inlined_deps.suitable.v0v2v14.suitable.js_introspection.own_property_descriptors.cljs$core$IFn$_invoke$arity$1 ? cider.nrepl.inlined_deps.suitable.v0v2v14.suitable.js_introspection.own_property_descriptors.cljs$core$IFn$_invoke$arity$1(obj__$1) : cider.nrepl.inlined_deps.suitable.v0v2v14.suitable.js_introspection.own_property_descriptors.call(null,obj__$1))], null));
obj__$1 = G__38519;
protos = G__38520;
continue;
} else {
return protos;
}
break;
}
});
cider.nrepl.inlined_deps.suitable.v0v2v14.suitable.js_introspection.property_names_and_types = (function cider$nrepl$inlined_deps$suitable$v0v2v14$suitable$js_introspection$property_names_and_types(var_args){
var G__38505 = arguments.length;
switch (G__38505) {
case 1:
return cider.nrepl.inlined_deps.suitable.v0v2v14.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cider.nrepl.inlined_deps.suitable.v0v2v14.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cider.nrepl.inlined_deps.suitable.v0v2v14.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$1 = (function (js_obj){
return cider.nrepl.inlined_deps.suitable.v0v2v14.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$2(js_obj,null);
}));

(cider.nrepl.inlined_deps.suitable.v0v2v14.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$2 = (function (js_obj,prefix){
var seen = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);
var iter__4582__auto__ = (function cider$nrepl$inlined_deps$suitable$v0v2v14$suitable$js_introspection$iter__38506(s__38507){
return (new cljs.core.LazySeq(null,(function (){
var s__38507__$1 = s__38507;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38507__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var vec__38512 = cljs.core.first(xs__6292__auto__);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38512,(0),null);
var map__38515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38512,(1),null);
var map__38515__$1 = (((((!((map__38515 == null))))?(((((map__38515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38515):map__38515);
var obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38515__$1,new cljs.core.Keyword(null,"obj","obj",981763962));
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38515__$1,new cljs.core.Keyword(null,"props","props",453281727));
var iterys__4578__auto__ = ((function (s__38507__$1,vec__38512,i,map__38515,map__38515__$1,obj,props,xs__6292__auto__,temp__5735__auto__,seen){
return (function cider$nrepl$inlined_deps$suitable$v0v2v14$suitable$js_introspection$iter__38506_$_iter__38508(s__38509){
return (new cljs.core.LazySeq(null,((function (s__38507__$1,vec__38512,i,map__38515,map__38515__$1,obj,props,xs__6292__auto__,temp__5735__auto__,seen){
return (function (){
var s__38509__$1 = s__38509;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__38509__$1);
if(temp__5735__auto____$1){
var s__38509__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38509__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38509__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38511 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38510 = (0);
while(true){
if((i__38510 < size__4581__auto__)){
var key = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__38510);
if(((cljs.core.not(goog.object.get(seen,key))) && (((cljs.core.empty_QMARK_(prefix)) || (clojure.string.starts_with_QMARK_(key,prefix)))))){
cljs.core.chunk_append(b__38511,(function (){var prop = goog.object.get(props,key);
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(seen,key);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),key,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),i,new cljs.core.Keyword(null,"type","type",1174270348),(function (){try{var temp__5733__auto__ = (function (){var or__4185__auto__ = goog.object.get(prop,"value");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.object.get(prop,"get"),cljs.core.PersistentVector.EMPTY);
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var value = temp__5733__auto__;
if(cljs.core.fn_QMARK_(value)){
return "function";
} else {
return "var";
}
} else {
return "var";
}
}catch (e38517){if((e38517 instanceof Error)){
var e = e38517;
return "var";
} else {
throw e38517;

}
}})()], null);
})());

var G__38522 = (i__38510 + (1));
i__38510 = G__38522;
continue;
} else {
var G__38523 = (i__38510 + (1));
i__38510 = G__38523;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38511),cider$nrepl$inlined_deps$suitable$v0v2v14$suitable$js_introspection$iter__38506_$_iter__38508(cljs.core.chunk_rest(s__38509__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38511),null);
}
} else {
var key = cljs.core.first(s__38509__$2);
if(((cljs.core.not(goog.object.get(seen,key))) && (((cljs.core.empty_QMARK_(prefix)) || (clojure.string.starts_with_QMARK_(key,prefix)))))){
return cljs.core.cons((function (){var prop = goog.object.get(props,key);
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(seen,key);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),key,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),i,new cljs.core.Keyword(null,"type","type",1174270348),(function (){try{var temp__5733__auto__ = (function (){var or__4185__auto__ = goog.object.get(prop,"value");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.object.get(prop,"get"),cljs.core.PersistentVector.EMPTY);
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var value = temp__5733__auto__;
if(cljs.core.fn_QMARK_(value)){
return "function";
} else {
return "var";
}
} else {
return "var";
}
}catch (e38518){if((e38518 instanceof Error)){
var e = e38518;
return "var";
} else {
throw e38518;

}
}})()], null);
})(),cider$nrepl$inlined_deps$suitable$v0v2v14$suitable$js_introspection$iter__38506_$_iter__38508(cljs.core.rest(s__38509__$2)));
} else {
var G__38524 = cljs.core.rest(s__38509__$2);
s__38509__$1 = G__38524;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__38507__$1,vec__38512,i,map__38515,map__38515__$1,obj,props,xs__6292__auto__,temp__5735__auto__,seen))
,null,null));
});})(s__38507__$1,vec__38512,i,map__38515,map__38515__$1,obj,props,xs__6292__auto__,temp__5735__auto__,seen))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(cljs.core.js_keys(props)));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,cider$nrepl$inlined_deps$suitable$v0v2v14$suitable$js_introspection$iter__38506(cljs.core.rest(s__38507__$1)));
} else {
var G__38525 = cljs.core.rest(s__38507__$1);
s__38507__$1 = G__38525;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cider.nrepl.inlined_deps.suitable.v0v2v14.suitable.js_introspection.properties_by_prototype(js_obj)));
}));

(cider.nrepl.inlined_deps.suitable.v0v2v14.suitable.js_introspection.property_names_and_types.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=cider.nrepl.inlined_deps.suitable.v0v2v14.suitable.js_introspection.js.map
