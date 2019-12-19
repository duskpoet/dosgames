goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___43145 = arguments.length;
var i__4790__auto___43146 = (0);
while(true){
if((i__4790__auto___43146 < len__4789__auto___43145)){
args__4795__auto__.push((arguments[i__4790__auto___43146]));

var G__43148 = (i__4790__auto___43146 + (1));
i__4790__auto___43146 = G__43148;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq42951){
var G__42952 = cljs.core.first(seq42951);
var seq42951__$1 = cljs.core.next(seq42951);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42952,seq42951__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__42954){
var map__42955 = p__42954;
var map__42955__$1 = (((((!((map__42955 == null))))?(((((map__42955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42955):map__42955);
var src = map__42955__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42955__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42955__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4185__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__42958 = cljs.core.seq(sources);
var chunk__42959 = null;
var count__42960 = (0);
var i__42961 = (0);
while(true){
if((i__42961 < count__42960)){
var map__42983 = chunk__42959.cljs$core$IIndexed$_nth$arity$2(null,i__42961);
var map__42983__$1 = (((((!((map__42983 == null))))?(((((map__42983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42983.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42983):map__42983);
var src = map__42983__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42983__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42983__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42983__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42983__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e42985){var e_43150 = e42985;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_43150);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_43150.message)].join('')));
}

var G__43151 = seq__42958;
var G__43152 = chunk__42959;
var G__43153 = count__42960;
var G__43154 = (i__42961 + (1));
seq__42958 = G__43151;
chunk__42959 = G__43152;
count__42960 = G__43153;
i__42961 = G__43154;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42958);
if(temp__5735__auto__){
var seq__42958__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42958__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__42958__$1);
var G__43155 = cljs.core.chunk_rest(seq__42958__$1);
var G__43156 = c__4609__auto__;
var G__43157 = cljs.core.count(c__4609__auto__);
var G__43158 = (0);
seq__42958 = G__43155;
chunk__42959 = G__43156;
count__42960 = G__43157;
i__42961 = G__43158;
continue;
} else {
var map__42986 = cljs.core.first(seq__42958__$1);
var map__42986__$1 = (((((!((map__42986 == null))))?(((((map__42986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42986):map__42986);
var src = map__42986__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42986__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42986__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42986__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42986__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e42988){var e_43160 = e42988;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_43160);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_43160.message)].join('')));
}

var G__43161 = cljs.core.next(seq__42958__$1);
var G__43162 = null;
var G__43163 = (0);
var G__43164 = (0);
seq__42958 = G__43161;
chunk__42959 = G__43162;
count__42960 = G__43163;
i__42961 = G__43164;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__42989 = cljs.core.seq(js_requires);
var chunk__42990 = null;
var count__42991 = (0);
var i__42992 = (0);
while(true){
if((i__42992 < count__42991)){
var js_ns = chunk__42990.cljs$core$IIndexed$_nth$arity$2(null,i__42992);
var require_str_43165 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_43165);


var G__43166 = seq__42989;
var G__43167 = chunk__42990;
var G__43168 = count__42991;
var G__43169 = (i__42992 + (1));
seq__42989 = G__43166;
chunk__42990 = G__43167;
count__42991 = G__43168;
i__42992 = G__43169;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42989);
if(temp__5735__auto__){
var seq__42989__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42989__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__42989__$1);
var G__43171 = cljs.core.chunk_rest(seq__42989__$1);
var G__43172 = c__4609__auto__;
var G__43173 = cljs.core.count(c__4609__auto__);
var G__43174 = (0);
seq__42989 = G__43171;
chunk__42990 = G__43172;
count__42991 = G__43173;
i__42992 = G__43174;
continue;
} else {
var js_ns = cljs.core.first(seq__42989__$1);
var require_str_43175 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_43175);


var G__43176 = cljs.core.next(seq__42989__$1);
var G__43177 = null;
var G__43178 = (0);
var G__43179 = (0);
seq__42989 = G__43176;
chunk__42990 = G__43177;
count__42991 = G__43178;
i__42992 = G__43179;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__42993 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__42993) : callback.call(null,G__42993));
} else {
var G__42994 = shadow.cljs.devtools.client.env.files_url();
var G__42995 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__42996 = "POST";
var G__42997 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__42998 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__42994,G__42995,G__42996,G__42997,G__42998);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__43000){
var map__43001 = p__43000;
var map__43001__$1 = (((((!((map__43001 == null))))?(((((map__43001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43001):map__43001);
var msg = map__43001__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43001__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43001__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__43003 = info;
var map__43003__$1 = (((((!((map__43003 == null))))?(((((map__43003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43003):map__43003);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43003__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43003__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__43005(s__43006){
return (new cljs.core.LazySeq(null,(function (){
var s__43006__$1 = s__43006;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__43006__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__43011 = cljs.core.first(xs__6292__auto__);
var map__43011__$1 = (((((!((map__43011 == null))))?(((((map__43011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43011):map__43011);
var src = map__43011__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43011__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43011__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__43006__$1,map__43011,map__43011__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__43003,map__43003__$1,sources,compiled,map__43001,map__43001__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__43005_$_iter__43007(s__43008){
return (new cljs.core.LazySeq(null,((function (s__43006__$1,map__43011,map__43011__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__43003,map__43003__$1,sources,compiled,map__43001,map__43001__$1,msg,info,reload_info){
return (function (){
var s__43008__$1 = s__43008;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__43008__$1);
if(temp__5735__auto____$1){
var s__43008__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__43008__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__43008__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__43010 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__43009 = (0);
while(true){
if((i__43009 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__43009);
cljs.core.chunk_append(b__43010,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__43184 = (i__43009 + (1));
i__43009 = G__43184;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43010),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__43005_$_iter__43007(cljs.core.chunk_rest(s__43008__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43010),null);
}
} else {
var warning = cljs.core.first(s__43008__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__43005_$_iter__43007(cljs.core.rest(s__43008__$2)));
}
} else {
return null;
}
break;
}
});})(s__43006__$1,map__43011,map__43011__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__43003,map__43003__$1,sources,compiled,map__43001,map__43001__$1,msg,info,reload_info))
,null,null));
});})(s__43006__$1,map__43011,map__43011__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__43003,map__43003__$1,sources,compiled,map__43001,map__43001__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__43005(cljs.core.rest(s__43006__$1)));
} else {
var G__43185 = cljs.core.rest(s__43006__$1);
s__43006__$1 = G__43185;
continue;
}
} else {
var G__43186 = cljs.core.rest(s__43006__$1);
s__43006__$1 = G__43186;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(sources);
})()));
var seq__43013_43187 = cljs.core.seq(warnings);
var chunk__43014_43188 = null;
var count__43015_43189 = (0);
var i__43016_43190 = (0);
while(true){
if((i__43016_43190 < count__43015_43189)){
var map__43022_43191 = chunk__43014_43188.cljs$core$IIndexed$_nth$arity$2(null,i__43016_43190);
var map__43022_43192__$1 = (((((!((map__43022_43191 == null))))?(((((map__43022_43191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43022_43191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43022_43191):map__43022_43191);
var w_43193 = map__43022_43192__$1;
var msg_43194__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43022_43192__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_43195 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43022_43192__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_43196 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43022_43192__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_43197 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43022_43192__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_43197)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_43195),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_43196),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_43194__$1)].join(''));


var G__43199 = seq__43013_43187;
var G__43200 = chunk__43014_43188;
var G__43201 = count__43015_43189;
var G__43202 = (i__43016_43190 + (1));
seq__43013_43187 = G__43199;
chunk__43014_43188 = G__43200;
count__43015_43189 = G__43201;
i__43016_43190 = G__43202;
continue;
} else {
var temp__5735__auto___43203 = cljs.core.seq(seq__43013_43187);
if(temp__5735__auto___43203){
var seq__43013_43204__$1 = temp__5735__auto___43203;
if(cljs.core.chunked_seq_QMARK_(seq__43013_43204__$1)){
var c__4609__auto___43205 = cljs.core.chunk_first(seq__43013_43204__$1);
var G__43206 = cljs.core.chunk_rest(seq__43013_43204__$1);
var G__43207 = c__4609__auto___43205;
var G__43208 = cljs.core.count(c__4609__auto___43205);
var G__43209 = (0);
seq__43013_43187 = G__43206;
chunk__43014_43188 = G__43207;
count__43015_43189 = G__43208;
i__43016_43190 = G__43209;
continue;
} else {
var map__43024_43210 = cljs.core.first(seq__43013_43204__$1);
var map__43024_43211__$1 = (((((!((map__43024_43210 == null))))?(((((map__43024_43210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43024_43210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43024_43210):map__43024_43210);
var w_43212 = map__43024_43211__$1;
var msg_43213__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43024_43211__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_43214 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43024_43211__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_43215 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43024_43211__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_43216 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43024_43211__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_43216)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_43214),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_43215),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_43213__$1)].join(''));


var G__43217 = cljs.core.next(seq__43013_43204__$1);
var G__43218 = null;
var G__43219 = (0);
var G__43220 = (0);
seq__43013_43187 = G__43217;
chunk__43014_43188 = G__43218;
count__43015_43189 = G__43219;
i__43016_43190 = G__43220;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__43026){
var map__43027 = p__43026;
var map__43027__$1 = (((((!((map__43027 == null))))?(((((map__43027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43027):map__43027);
var src = map__43027__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43027__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43027__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__43029){
var map__43030 = p__43029;
var map__43030__$1 = (((((!((map__43030 == null))))?(((((map__43030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43030.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43030):map__43030);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43030__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__43032){
var map__43033 = p__43032;
var map__43033__$1 = (((((!((map__43033 == null))))?(((((map__43033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43033):map__43033);
var rc = map__43033__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43033__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__42999_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__42999_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__43040){
var map__43042 = p__43040;
var map__43042__$1 = (((((!((map__43042 == null))))?(((((map__43042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43042):map__43042);
var msg = map__43042__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43042__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__43044 = cljs.core.seq(updates);
var chunk__43046 = null;
var count__43047 = (0);
var i__43048 = (0);
while(true){
if((i__43048 < count__43047)){
var path = chunk__43046.cljs$core$IIndexed$_nth$arity$2(null,i__43048);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__43076_43222 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__43079_43223 = null;
var count__43080_43224 = (0);
var i__43081_43225 = (0);
while(true){
if((i__43081_43225 < count__43080_43224)){
var node_43226 = chunk__43079_43223.cljs$core$IIndexed$_nth$arity$2(null,i__43081_43225);
var path_match_43227 = shadow.cljs.devtools.client.browser.match_paths(node_43226.getAttribute("href"),path);
if(cljs.core.truth_(path_match_43227)){
var new_link_43228 = (function (){var G__43088 = node_43226.cloneNode(true);
G__43088.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_43227),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__43088;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_43227], 0));

goog.dom.insertSiblingAfter(new_link_43228,node_43226);

goog.dom.removeNode(node_43226);


var G__43229 = seq__43076_43222;
var G__43230 = chunk__43079_43223;
var G__43231 = count__43080_43224;
var G__43232 = (i__43081_43225 + (1));
seq__43076_43222 = G__43229;
chunk__43079_43223 = G__43230;
count__43080_43224 = G__43231;
i__43081_43225 = G__43232;
continue;
} else {
var G__43233 = seq__43076_43222;
var G__43234 = chunk__43079_43223;
var G__43235 = count__43080_43224;
var G__43236 = (i__43081_43225 + (1));
seq__43076_43222 = G__43233;
chunk__43079_43223 = G__43234;
count__43080_43224 = G__43235;
i__43081_43225 = G__43236;
continue;
}
} else {
var temp__5735__auto___43237 = cljs.core.seq(seq__43076_43222);
if(temp__5735__auto___43237){
var seq__43076_43238__$1 = temp__5735__auto___43237;
if(cljs.core.chunked_seq_QMARK_(seq__43076_43238__$1)){
var c__4609__auto___43240 = cljs.core.chunk_first(seq__43076_43238__$1);
var G__43241 = cljs.core.chunk_rest(seq__43076_43238__$1);
var G__43242 = c__4609__auto___43240;
var G__43243 = cljs.core.count(c__4609__auto___43240);
var G__43244 = (0);
seq__43076_43222 = G__43241;
chunk__43079_43223 = G__43242;
count__43080_43224 = G__43243;
i__43081_43225 = G__43244;
continue;
} else {
var node_43245 = cljs.core.first(seq__43076_43238__$1);
var path_match_43246 = shadow.cljs.devtools.client.browser.match_paths(node_43245.getAttribute("href"),path);
if(cljs.core.truth_(path_match_43246)){
var new_link_43247 = (function (){var G__43090 = node_43245.cloneNode(true);
G__43090.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_43246),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__43090;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_43246], 0));

goog.dom.insertSiblingAfter(new_link_43247,node_43245);

goog.dom.removeNode(node_43245);


var G__43248 = cljs.core.next(seq__43076_43238__$1);
var G__43249 = null;
var G__43250 = (0);
var G__43251 = (0);
seq__43076_43222 = G__43248;
chunk__43079_43223 = G__43249;
count__43080_43224 = G__43250;
i__43081_43225 = G__43251;
continue;
} else {
var G__43252 = cljs.core.next(seq__43076_43238__$1);
var G__43253 = null;
var G__43254 = (0);
var G__43255 = (0);
seq__43076_43222 = G__43252;
chunk__43079_43223 = G__43253;
count__43080_43224 = G__43254;
i__43081_43225 = G__43255;
continue;
}
}
} else {
}
}
break;
}


var G__43256 = seq__43044;
var G__43257 = chunk__43046;
var G__43258 = count__43047;
var G__43259 = (i__43048 + (1));
seq__43044 = G__43256;
chunk__43046 = G__43257;
count__43047 = G__43258;
i__43048 = G__43259;
continue;
} else {
var G__43260 = seq__43044;
var G__43261 = chunk__43046;
var G__43262 = count__43047;
var G__43263 = (i__43048 + (1));
seq__43044 = G__43260;
chunk__43046 = G__43261;
count__43047 = G__43262;
i__43048 = G__43263;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43044);
if(temp__5735__auto__){
var seq__43044__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43044__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__43044__$1);
var G__43264 = cljs.core.chunk_rest(seq__43044__$1);
var G__43265 = c__4609__auto__;
var G__43266 = cljs.core.count(c__4609__auto__);
var G__43267 = (0);
seq__43044 = G__43264;
chunk__43046 = G__43265;
count__43047 = G__43266;
i__43048 = G__43267;
continue;
} else {
var path = cljs.core.first(seq__43044__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__43091_43269 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__43094_43270 = null;
var count__43095_43271 = (0);
var i__43096_43272 = (0);
while(true){
if((i__43096_43272 < count__43095_43271)){
var node_43273 = chunk__43094_43270.cljs$core$IIndexed$_nth$arity$2(null,i__43096_43272);
var path_match_43274 = shadow.cljs.devtools.client.browser.match_paths(node_43273.getAttribute("href"),path);
if(cljs.core.truth_(path_match_43274)){
var new_link_43275 = (function (){var G__43103 = node_43273.cloneNode(true);
G__43103.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_43274),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__43103;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_43274], 0));

goog.dom.insertSiblingAfter(new_link_43275,node_43273);

goog.dom.removeNode(node_43273);


var G__43276 = seq__43091_43269;
var G__43277 = chunk__43094_43270;
var G__43278 = count__43095_43271;
var G__43279 = (i__43096_43272 + (1));
seq__43091_43269 = G__43276;
chunk__43094_43270 = G__43277;
count__43095_43271 = G__43278;
i__43096_43272 = G__43279;
continue;
} else {
var G__43280 = seq__43091_43269;
var G__43281 = chunk__43094_43270;
var G__43282 = count__43095_43271;
var G__43283 = (i__43096_43272 + (1));
seq__43091_43269 = G__43280;
chunk__43094_43270 = G__43281;
count__43095_43271 = G__43282;
i__43096_43272 = G__43283;
continue;
}
} else {
var temp__5735__auto___43284__$1 = cljs.core.seq(seq__43091_43269);
if(temp__5735__auto___43284__$1){
var seq__43091_43285__$1 = temp__5735__auto___43284__$1;
if(cljs.core.chunked_seq_QMARK_(seq__43091_43285__$1)){
var c__4609__auto___43286 = cljs.core.chunk_first(seq__43091_43285__$1);
var G__43287 = cljs.core.chunk_rest(seq__43091_43285__$1);
var G__43288 = c__4609__auto___43286;
var G__43289 = cljs.core.count(c__4609__auto___43286);
var G__43290 = (0);
seq__43091_43269 = G__43287;
chunk__43094_43270 = G__43288;
count__43095_43271 = G__43289;
i__43096_43272 = G__43290;
continue;
} else {
var node_43291 = cljs.core.first(seq__43091_43285__$1);
var path_match_43292 = shadow.cljs.devtools.client.browser.match_paths(node_43291.getAttribute("href"),path);
if(cljs.core.truth_(path_match_43292)){
var new_link_43293 = (function (){var G__43104 = node_43291.cloneNode(true);
G__43104.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_43292),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__43104;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_43292], 0));

goog.dom.insertSiblingAfter(new_link_43293,node_43291);

goog.dom.removeNode(node_43291);


var G__43294 = cljs.core.next(seq__43091_43285__$1);
var G__43295 = null;
var G__43296 = (0);
var G__43297 = (0);
seq__43091_43269 = G__43294;
chunk__43094_43270 = G__43295;
count__43095_43271 = G__43296;
i__43096_43272 = G__43297;
continue;
} else {
var G__43298 = cljs.core.next(seq__43091_43285__$1);
var G__43299 = null;
var G__43300 = (0);
var G__43301 = (0);
seq__43091_43269 = G__43298;
chunk__43094_43270 = G__43299;
count__43095_43271 = G__43300;
i__43096_43272 = G__43301;
continue;
}
}
} else {
}
}
break;
}


var G__43302 = cljs.core.next(seq__43044__$1);
var G__43303 = null;
var G__43304 = (0);
var G__43305 = (0);
seq__43044 = G__43302;
chunk__43046 = G__43303;
count__43047 = G__43304;
i__43048 = G__43305;
continue;
} else {
var G__43306 = cljs.core.next(seq__43044__$1);
var G__43307 = null;
var G__43308 = (0);
var G__43309 = (0);
seq__43044 = G__43306;
chunk__43046 = G__43307;
count__43047 = G__43308;
i__43048 = G__43309;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__43107){
var map__43108 = p__43107;
var map__43108__$1 = (((((!((map__43108 == null))))?(((((map__43108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43108):map__43108);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43108__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43108__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__43111,done){
var map__43112 = p__43111;
var map__43112__$1 = (((((!((map__43112 == null))))?(((((map__43112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43112):map__43112);
var msg = map__43112__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43112__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43112__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43112__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43112__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__43114){
var map__43115 = p__43114;
var map__43115__$1 = (((((!((map__43115 == null))))?(((((map__43115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43115):map__43115);
var src = map__43115__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43115__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e43117){var e = e43117;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__43120,done){
var map__43121 = p__43120;
var map__43121__$1 = (((((!((map__43121 == null))))?(((((map__43121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43121):map__43121);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43121__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43121__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__43123){
var map__43124 = p__43123;
var map__43124__$1 = (((((!((map__43124 == null))))?(((((map__43124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43124):map__43124);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43124__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43124__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__43126,done){
var map__43127 = p__43126;
var map__43127__$1 = (((((!((map__43127 == null))))?(((((map__43127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43127):map__43127);
var msg = map__43127__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43127__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__43130_43314 = type;
var G__43130_43315__$1 = (((G__43130_43314 instanceof cljs.core.Keyword))?G__43130_43314.fqn:null);
switch (G__43130_43315__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__43134 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__43135 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__43136 = "POST";
var G__43137 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__43138 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__43134,G__43135,G__43136,G__43137,G__43138);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var G__43141 = new cljs.core.Keyword(null,"init","init",-1875481434);
var fexpr__43140 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__43140.cljs$core$IFn$_invoke$arity$1 ? fexpr__43140.cljs$core$IFn$_invoke$arity$1(G__43141) : fexpr__43140.call(null,G__43141));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4185__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e43143){var e = e43143;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___43317 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___43317)){
var s_43318 = temp__5735__auto___43317;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_43318.onclose = (function (e){
return null;
}));

s_43318.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4174__auto__ = document;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4174__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
