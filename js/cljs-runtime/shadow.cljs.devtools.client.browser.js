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
var len__4789__auto___34857 = arguments.length;
var i__4790__auto___34858 = (0);
while(true){
if((i__4790__auto___34858 < len__4789__auto___34857)){
args__4795__auto__.push((arguments[i__4790__auto___34858]));

var G__34859 = (i__4790__auto___34858 + (1));
i__4790__auto___34858 = G__34859;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq34365){
var G__34366 = cljs.core.first(seq34365);
var seq34365__$1 = cljs.core.next(seq34365);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34366,seq34365__$1);
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
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__34400){
var map__34401 = p__34400;
var map__34401__$1 = (((((!((map__34401 == null))))?(((((map__34401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34401):map__34401);
var src = map__34401__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34401__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34401__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
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
var seq__34411 = cljs.core.seq(sources);
var chunk__34412 = null;
var count__34413 = (0);
var i__34414 = (0);
while(true){
if((i__34414 < count__34413)){
var map__34437 = chunk__34412.cljs$core$IIndexed$_nth$arity$2(null,i__34414);
var map__34437__$1 = (((((!((map__34437 == null))))?(((((map__34437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34437):map__34437);
var src = map__34437__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34437__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34437__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34437__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34437__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e34441){var e_34869 = e34441;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_34869);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_34869.message)].join('')));
}

var G__34872 = seq__34411;
var G__34873 = chunk__34412;
var G__34874 = count__34413;
var G__34875 = (i__34414 + (1));
seq__34411 = G__34872;
chunk__34412 = G__34873;
count__34413 = G__34874;
i__34414 = G__34875;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34411);
if(temp__5735__auto__){
var seq__34411__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34411__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34411__$1);
var G__34877 = cljs.core.chunk_rest(seq__34411__$1);
var G__34878 = c__4609__auto__;
var G__34879 = cljs.core.count(c__4609__auto__);
var G__34880 = (0);
seq__34411 = G__34877;
chunk__34412 = G__34878;
count__34413 = G__34879;
i__34414 = G__34880;
continue;
} else {
var map__34445 = cljs.core.first(seq__34411__$1);
var map__34445__$1 = (((((!((map__34445 == null))))?(((((map__34445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34445.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34445):map__34445);
var src = map__34445__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34445__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34445__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34445__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34445__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e34448){var e_34884 = e34448;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_34884);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_34884.message)].join('')));
}

var G__34885 = cljs.core.next(seq__34411__$1);
var G__34886 = null;
var G__34887 = (0);
var G__34888 = (0);
seq__34411 = G__34885;
chunk__34412 = G__34886;
count__34413 = G__34887;
i__34414 = G__34888;
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
var seq__34459 = cljs.core.seq(js_requires);
var chunk__34460 = null;
var count__34461 = (0);
var i__34462 = (0);
while(true){
if((i__34462 < count__34461)){
var js_ns = chunk__34460.cljs$core$IIndexed$_nth$arity$2(null,i__34462);
var require_str_34889 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_34889);


var G__34890 = seq__34459;
var G__34891 = chunk__34460;
var G__34892 = count__34461;
var G__34893 = (i__34462 + (1));
seq__34459 = G__34890;
chunk__34460 = G__34891;
count__34461 = G__34892;
i__34462 = G__34893;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34459);
if(temp__5735__auto__){
var seq__34459__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34459__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34459__$1);
var G__34894 = cljs.core.chunk_rest(seq__34459__$1);
var G__34895 = c__4609__auto__;
var G__34896 = cljs.core.count(c__4609__auto__);
var G__34897 = (0);
seq__34459 = G__34894;
chunk__34460 = G__34895;
count__34461 = G__34896;
i__34462 = G__34897;
continue;
} else {
var js_ns = cljs.core.first(seq__34459__$1);
var require_str_34905 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_34905);


var G__34909 = cljs.core.next(seq__34459__$1);
var G__34913 = null;
var G__34914 = (0);
var G__34915 = (0);
seq__34459 = G__34909;
chunk__34460 = G__34913;
count__34461 = G__34914;
i__34462 = G__34915;
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
var G__34479 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__34479) : callback.call(null,G__34479));
} else {
var G__34480 = shadow.cljs.devtools.client.env.files_url();
var G__34481 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__34482 = "POST";
var G__34483 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__34484 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__34480,G__34481,G__34482,G__34483,G__34484);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__34495){
var map__34497 = p__34495;
var map__34497__$1 = (((((!((map__34497 == null))))?(((((map__34497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34497.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34497):map__34497);
var msg = map__34497__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34497__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34497__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__34501 = info;
var map__34501__$1 = (((((!((map__34501 == null))))?(((((map__34501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34501):map__34501);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34501__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34501__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34506(s__34507){
return (new cljs.core.LazySeq(null,(function (){
var s__34507__$1 = s__34507;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__34507__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__34516 = cljs.core.first(xs__6292__auto__);
var map__34516__$1 = (((((!((map__34516 == null))))?(((((map__34516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34516):map__34516);
var src = map__34516__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34516__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34516__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__34507__$1,map__34516,map__34516__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34501,map__34501__$1,sources,compiled,map__34497,map__34497__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34506_$_iter__34508(s__34509){
return (new cljs.core.LazySeq(null,((function (s__34507__$1,map__34516,map__34516__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34501,map__34501__$1,sources,compiled,map__34497,map__34497__$1,msg,info,reload_info){
return (function (){
var s__34509__$1 = s__34509;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__34509__$1);
if(temp__5735__auto____$1){
var s__34509__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34509__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__34509__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__34511 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__34510 = (0);
while(true){
if((i__34510 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__34510);
cljs.core.chunk_append(b__34511,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__34935 = (i__34510 + (1));
i__34510 = G__34935;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34511),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34506_$_iter__34508(cljs.core.chunk_rest(s__34509__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34511),null);
}
} else {
var warning = cljs.core.first(s__34509__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34506_$_iter__34508(cljs.core.rest(s__34509__$2)));
}
} else {
return null;
}
break;
}
});})(s__34507__$1,map__34516,map__34516__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34501,map__34501__$1,sources,compiled,map__34497,map__34497__$1,msg,info,reload_info))
,null,null));
});})(s__34507__$1,map__34516,map__34516__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34501,map__34501__$1,sources,compiled,map__34497,map__34497__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34506(cljs.core.rest(s__34507__$1)));
} else {
var G__34936 = cljs.core.rest(s__34507__$1);
s__34507__$1 = G__34936;
continue;
}
} else {
var G__34937 = cljs.core.rest(s__34507__$1);
s__34507__$1 = G__34937;
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
var seq__34523_34938 = cljs.core.seq(warnings);
var chunk__34524_34939 = null;
var count__34525_34940 = (0);
var i__34526_34941 = (0);
while(true){
if((i__34526_34941 < count__34525_34940)){
var map__34544_34942 = chunk__34524_34939.cljs$core$IIndexed$_nth$arity$2(null,i__34526_34941);
var map__34544_34943__$1 = (((((!((map__34544_34942 == null))))?(((((map__34544_34942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34544_34942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34544_34942):map__34544_34942);
var w_34944 = map__34544_34943__$1;
var msg_34945__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34544_34943__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_34946 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34544_34943__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_34947 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34544_34943__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_34948 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34544_34943__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_34948)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_34946),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_34947),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_34945__$1)].join(''));


var G__34953 = seq__34523_34938;
var G__34954 = chunk__34524_34939;
var G__34955 = count__34525_34940;
var G__34956 = (i__34526_34941 + (1));
seq__34523_34938 = G__34953;
chunk__34524_34939 = G__34954;
count__34525_34940 = G__34955;
i__34526_34941 = G__34956;
continue;
} else {
var temp__5735__auto___34957 = cljs.core.seq(seq__34523_34938);
if(temp__5735__auto___34957){
var seq__34523_34958__$1 = temp__5735__auto___34957;
if(cljs.core.chunked_seq_QMARK_(seq__34523_34958__$1)){
var c__4609__auto___34959 = cljs.core.chunk_first(seq__34523_34958__$1);
var G__34960 = cljs.core.chunk_rest(seq__34523_34958__$1);
var G__34961 = c__4609__auto___34959;
var G__34962 = cljs.core.count(c__4609__auto___34959);
var G__34963 = (0);
seq__34523_34938 = G__34960;
chunk__34524_34939 = G__34961;
count__34525_34940 = G__34962;
i__34526_34941 = G__34963;
continue;
} else {
var map__34548_34964 = cljs.core.first(seq__34523_34958__$1);
var map__34548_34965__$1 = (((((!((map__34548_34964 == null))))?(((((map__34548_34964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34548_34964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34548_34964):map__34548_34964);
var w_34966 = map__34548_34965__$1;
var msg_34967__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34548_34965__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_34968 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34548_34965__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_34969 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34548_34965__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_34970 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34548_34965__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_34970)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_34968),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_34969),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_34967__$1)].join(''));


var G__34971 = cljs.core.next(seq__34523_34958__$1);
var G__34972 = null;
var G__34973 = (0);
var G__34974 = (0);
seq__34523_34938 = G__34971;
chunk__34524_34939 = G__34972;
count__34525_34940 = G__34973;
i__34526_34941 = G__34974;
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
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__34553){
var map__34554 = p__34553;
var map__34554__$1 = (((((!((map__34554 == null))))?(((((map__34554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34554):map__34554);
var src = map__34554__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34554__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34554__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__34561){
var map__34563 = p__34561;
var map__34563__$1 = (((((!((map__34563 == null))))?(((((map__34563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34563.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34563):map__34563);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34563__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__34568){
var map__34569 = p__34568;
var map__34569__$1 = (((((!((map__34569 == null))))?(((((map__34569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34569):map__34569);
var rc = map__34569__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34569__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__34490_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__34490_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__34602){
var map__34603 = p__34602;
var map__34603__$1 = (((((!((map__34603 == null))))?(((((map__34603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34603):map__34603);
var msg = map__34603__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34603__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__34606 = cljs.core.seq(updates);
var chunk__34608 = null;
var count__34609 = (0);
var i__34610 = (0);
while(true){
if((i__34610 < count__34609)){
var path = chunk__34608.cljs$core$IIndexed$_nth$arity$2(null,i__34610);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__34706_34983 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__34709_34984 = null;
var count__34710_34985 = (0);
var i__34711_34986 = (0);
while(true){
if((i__34711_34986 < count__34710_34985)){
var node_34987 = chunk__34709_34984.cljs$core$IIndexed$_nth$arity$2(null,i__34711_34986);
var path_match_34988 = shadow.cljs.devtools.client.browser.match_paths(node_34987.getAttribute("href"),path);
if(cljs.core.truth_(path_match_34988)){
var new_link_34989 = (function (){var G__34733 = node_34987.cloneNode(true);
G__34733.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_34988),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34733;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_34988], 0));

goog.dom.insertSiblingAfter(new_link_34989,node_34987);

goog.dom.removeNode(node_34987);


var G__34990 = seq__34706_34983;
var G__34991 = chunk__34709_34984;
var G__34992 = count__34710_34985;
var G__34993 = (i__34711_34986 + (1));
seq__34706_34983 = G__34990;
chunk__34709_34984 = G__34991;
count__34710_34985 = G__34992;
i__34711_34986 = G__34993;
continue;
} else {
var G__34994 = seq__34706_34983;
var G__34995 = chunk__34709_34984;
var G__34996 = count__34710_34985;
var G__34997 = (i__34711_34986 + (1));
seq__34706_34983 = G__34994;
chunk__34709_34984 = G__34995;
count__34710_34985 = G__34996;
i__34711_34986 = G__34997;
continue;
}
} else {
var temp__5735__auto___34998 = cljs.core.seq(seq__34706_34983);
if(temp__5735__auto___34998){
var seq__34706_34999__$1 = temp__5735__auto___34998;
if(cljs.core.chunked_seq_QMARK_(seq__34706_34999__$1)){
var c__4609__auto___35000 = cljs.core.chunk_first(seq__34706_34999__$1);
var G__35001 = cljs.core.chunk_rest(seq__34706_34999__$1);
var G__35002 = c__4609__auto___35000;
var G__35003 = cljs.core.count(c__4609__auto___35000);
var G__35004 = (0);
seq__34706_34983 = G__35001;
chunk__34709_34984 = G__35002;
count__34710_34985 = G__35003;
i__34711_34986 = G__35004;
continue;
} else {
var node_35005 = cljs.core.first(seq__34706_34999__$1);
var path_match_35006 = shadow.cljs.devtools.client.browser.match_paths(node_35005.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35006)){
var new_link_35007 = (function (){var G__34741 = node_35005.cloneNode(true);
G__34741.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35006),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34741;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35006], 0));

goog.dom.insertSiblingAfter(new_link_35007,node_35005);

goog.dom.removeNode(node_35005);


var G__35008 = cljs.core.next(seq__34706_34999__$1);
var G__35009 = null;
var G__35010 = (0);
var G__35011 = (0);
seq__34706_34983 = G__35008;
chunk__34709_34984 = G__35009;
count__34710_34985 = G__35010;
i__34711_34986 = G__35011;
continue;
} else {
var G__35012 = cljs.core.next(seq__34706_34999__$1);
var G__35013 = null;
var G__35014 = (0);
var G__35015 = (0);
seq__34706_34983 = G__35012;
chunk__34709_34984 = G__35013;
count__34710_34985 = G__35014;
i__34711_34986 = G__35015;
continue;
}
}
} else {
}
}
break;
}


var G__35016 = seq__34606;
var G__35017 = chunk__34608;
var G__35018 = count__34609;
var G__35019 = (i__34610 + (1));
seq__34606 = G__35016;
chunk__34608 = G__35017;
count__34609 = G__35018;
i__34610 = G__35019;
continue;
} else {
var G__35020 = seq__34606;
var G__35021 = chunk__34608;
var G__35022 = count__34609;
var G__35023 = (i__34610 + (1));
seq__34606 = G__35020;
chunk__34608 = G__35021;
count__34609 = G__35022;
i__34610 = G__35023;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34606);
if(temp__5735__auto__){
var seq__34606__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34606__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34606__$1);
var G__35025 = cljs.core.chunk_rest(seq__34606__$1);
var G__35026 = c__4609__auto__;
var G__35027 = cljs.core.count(c__4609__auto__);
var G__35028 = (0);
seq__34606 = G__35025;
chunk__34608 = G__35026;
count__34609 = G__35027;
i__34610 = G__35028;
continue;
} else {
var path = cljs.core.first(seq__34606__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__34749_35030 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__34752_35031 = null;
var count__34753_35032 = (0);
var i__34754_35033 = (0);
while(true){
if((i__34754_35033 < count__34753_35032)){
var node_35034 = chunk__34752_35031.cljs$core$IIndexed$_nth$arity$2(null,i__34754_35033);
var path_match_35035 = shadow.cljs.devtools.client.browser.match_paths(node_35034.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35035)){
var new_link_35036 = (function (){var G__34779 = node_35034.cloneNode(true);
G__34779.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35035),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34779;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35035], 0));

goog.dom.insertSiblingAfter(new_link_35036,node_35034);

goog.dom.removeNode(node_35034);


var G__35037 = seq__34749_35030;
var G__35038 = chunk__34752_35031;
var G__35039 = count__34753_35032;
var G__35040 = (i__34754_35033 + (1));
seq__34749_35030 = G__35037;
chunk__34752_35031 = G__35038;
count__34753_35032 = G__35039;
i__34754_35033 = G__35040;
continue;
} else {
var G__35041 = seq__34749_35030;
var G__35042 = chunk__34752_35031;
var G__35043 = count__34753_35032;
var G__35044 = (i__34754_35033 + (1));
seq__34749_35030 = G__35041;
chunk__34752_35031 = G__35042;
count__34753_35032 = G__35043;
i__34754_35033 = G__35044;
continue;
}
} else {
var temp__5735__auto___35045__$1 = cljs.core.seq(seq__34749_35030);
if(temp__5735__auto___35045__$1){
var seq__34749_35046__$1 = temp__5735__auto___35045__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34749_35046__$1)){
var c__4609__auto___35047 = cljs.core.chunk_first(seq__34749_35046__$1);
var G__35049 = cljs.core.chunk_rest(seq__34749_35046__$1);
var G__35050 = c__4609__auto___35047;
var G__35051 = cljs.core.count(c__4609__auto___35047);
var G__35052 = (0);
seq__34749_35030 = G__35049;
chunk__34752_35031 = G__35050;
count__34753_35032 = G__35051;
i__34754_35033 = G__35052;
continue;
} else {
var node_35053 = cljs.core.first(seq__34749_35046__$1);
var path_match_35054 = shadow.cljs.devtools.client.browser.match_paths(node_35053.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35054)){
var new_link_35055 = (function (){var G__34785 = node_35053.cloneNode(true);
G__34785.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35054),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34785;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35054], 0));

goog.dom.insertSiblingAfter(new_link_35055,node_35053);

goog.dom.removeNode(node_35053);


var G__35060 = cljs.core.next(seq__34749_35046__$1);
var G__35061 = null;
var G__35062 = (0);
var G__35063 = (0);
seq__34749_35030 = G__35060;
chunk__34752_35031 = G__35061;
count__34753_35032 = G__35062;
i__34754_35033 = G__35063;
continue;
} else {
var G__35064 = cljs.core.next(seq__34749_35046__$1);
var G__35065 = null;
var G__35066 = (0);
var G__35067 = (0);
seq__34749_35030 = G__35064;
chunk__34752_35031 = G__35065;
count__34753_35032 = G__35066;
i__34754_35033 = G__35067;
continue;
}
}
} else {
}
}
break;
}


var G__35068 = cljs.core.next(seq__34606__$1);
var G__35069 = null;
var G__35070 = (0);
var G__35071 = (0);
seq__34606 = G__35068;
chunk__34608 = G__35069;
count__34609 = G__35070;
i__34610 = G__35071;
continue;
} else {
var G__35072 = cljs.core.next(seq__34606__$1);
var G__35073 = null;
var G__35074 = (0);
var G__35075 = (0);
seq__34606 = G__35072;
chunk__34608 = G__35073;
count__34609 = G__35074;
i__34610 = G__35075;
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
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__34802){
var map__34803 = p__34802;
var map__34803__$1 = (((((!((map__34803 == null))))?(((((map__34803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34803):map__34803);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34803__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34803__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__34809,done){
var map__34810 = p__34809;
var map__34810__$1 = (((((!((map__34810 == null))))?(((((map__34810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34810):map__34810);
var msg = map__34810__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34810__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34810__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34810__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34810__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__34816){
var map__34818 = p__34816;
var map__34818__$1 = (((((!((map__34818 == null))))?(((((map__34818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34818):map__34818);
var src = map__34818__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34818__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
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
}catch (e34822){var e = e34822;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__34826,done){
var map__34827 = p__34826;
var map__34827__$1 = (((((!((map__34827 == null))))?(((((map__34827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34827.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34827):map__34827);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34827__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34827__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__34833){
var map__34834 = p__34833;
var map__34834__$1 = (((((!((map__34834 == null))))?(((((map__34834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34834.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34834):map__34834);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34834__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34834__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__34839,done){
var map__34840 = p__34839;
var map__34840__$1 = (((((!((map__34840 == null))))?(((((map__34840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34840.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34840):map__34840);
var msg = map__34840__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34840__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__34842_35080 = type;
var G__34842_35081__$1 = (((G__34842_35080 instanceof cljs.core.Keyword))?G__34842_35080.fqn:null);
switch (G__34842_35081__$1) {
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
var G__34843 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__34844 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__34845 = "POST";
var G__34846 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__34847 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__34843,G__34844,G__34845,G__34846,G__34847);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var G__34851 = new cljs.core.Keyword(null,"init","init",-1875481434);
var fexpr__34850 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__34850.cljs$core$IFn$_invoke$arity$1 ? fexpr__34850.cljs$core$IFn$_invoke$arity$1(G__34851) : fexpr__34850.call(null,G__34851));
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
}catch (e34854){var e = e34854;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___35093 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___35093)){
var s_35094 = temp__5735__auto___35093;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_35094.onclose = (function (e){
return null;
}));

s_35094.close();

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
