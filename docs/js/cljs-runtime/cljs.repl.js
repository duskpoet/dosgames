goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__44137){
var map__44138 = p__44137;
var map__44138__$1 = (((((!((map__44138 == null))))?(((((map__44138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44138):map__44138);
var m = map__44138__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44138__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44138__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__44140_44347 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__44141_44348 = null;
var count__44142_44349 = (0);
var i__44143_44350 = (0);
while(true){
if((i__44143_44350 < count__44142_44349)){
var f_44351 = chunk__44141_44348.cljs$core$IIndexed$_nth$arity$2(null,i__44143_44350);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_44351], 0));


var G__44352 = seq__44140_44347;
var G__44353 = chunk__44141_44348;
var G__44354 = count__44142_44349;
var G__44355 = (i__44143_44350 + (1));
seq__44140_44347 = G__44352;
chunk__44141_44348 = G__44353;
count__44142_44349 = G__44354;
i__44143_44350 = G__44355;
continue;
} else {
var temp__5735__auto___44356 = cljs.core.seq(seq__44140_44347);
if(temp__5735__auto___44356){
var seq__44140_44357__$1 = temp__5735__auto___44356;
if(cljs.core.chunked_seq_QMARK_(seq__44140_44357__$1)){
var c__4609__auto___44358 = cljs.core.chunk_first(seq__44140_44357__$1);
var G__44359 = cljs.core.chunk_rest(seq__44140_44357__$1);
var G__44360 = c__4609__auto___44358;
var G__44361 = cljs.core.count(c__4609__auto___44358);
var G__44362 = (0);
seq__44140_44347 = G__44359;
chunk__44141_44348 = G__44360;
count__44142_44349 = G__44361;
i__44143_44350 = G__44362;
continue;
} else {
var f_44363 = cljs.core.first(seq__44140_44357__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_44363], 0));


var G__44364 = cljs.core.next(seq__44140_44357__$1);
var G__44365 = null;
var G__44366 = (0);
var G__44367 = (0);
seq__44140_44347 = G__44364;
chunk__44141_44348 = G__44365;
count__44142_44349 = G__44366;
i__44143_44350 = G__44367;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_44369 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_44369], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_44369)))?cljs.core.second(arglists_44369):arglists_44369)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__44145_44370 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__44146_44371 = null;
var count__44147_44372 = (0);
var i__44148_44373 = (0);
while(true){
if((i__44148_44373 < count__44147_44372)){
var vec__44163_44374 = chunk__44146_44371.cljs$core$IIndexed$_nth$arity$2(null,i__44148_44373);
var name_44375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44163_44374,(0),null);
var map__44166_44376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44163_44374,(1),null);
var map__44166_44377__$1 = (((((!((map__44166_44376 == null))))?(((((map__44166_44376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44166_44376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44166_44376):map__44166_44376);
var doc_44378 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44166_44377__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_44379 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44166_44377__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_44375], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_44379], 0));

if(cljs.core.truth_(doc_44378)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_44378], 0));
} else {
}


var G__44380 = seq__44145_44370;
var G__44381 = chunk__44146_44371;
var G__44382 = count__44147_44372;
var G__44383 = (i__44148_44373 + (1));
seq__44145_44370 = G__44380;
chunk__44146_44371 = G__44381;
count__44147_44372 = G__44382;
i__44148_44373 = G__44383;
continue;
} else {
var temp__5735__auto___44384 = cljs.core.seq(seq__44145_44370);
if(temp__5735__auto___44384){
var seq__44145_44385__$1 = temp__5735__auto___44384;
if(cljs.core.chunked_seq_QMARK_(seq__44145_44385__$1)){
var c__4609__auto___44386 = cljs.core.chunk_first(seq__44145_44385__$1);
var G__44387 = cljs.core.chunk_rest(seq__44145_44385__$1);
var G__44388 = c__4609__auto___44386;
var G__44389 = cljs.core.count(c__4609__auto___44386);
var G__44390 = (0);
seq__44145_44370 = G__44387;
chunk__44146_44371 = G__44388;
count__44147_44372 = G__44389;
i__44148_44373 = G__44390;
continue;
} else {
var vec__44169_44391 = cljs.core.first(seq__44145_44385__$1);
var name_44392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44169_44391,(0),null);
var map__44172_44393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44169_44391,(1),null);
var map__44172_44394__$1 = (((((!((map__44172_44393 == null))))?(((((map__44172_44393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44172_44393.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44172_44393):map__44172_44393);
var doc_44395 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44172_44394__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_44396 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44172_44394__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_44392], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_44396], 0));

if(cljs.core.truth_(doc_44395)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_44395], 0));
} else {
}


var G__44397 = cljs.core.next(seq__44145_44385__$1);
var G__44398 = null;
var G__44399 = (0);
var G__44400 = (0);
seq__44145_44370 = G__44397;
chunk__44146_44371 = G__44398;
count__44147_44372 = G__44399;
i__44148_44373 = G__44400;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__44174 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__44175 = null;
var count__44176 = (0);
var i__44177 = (0);
while(true){
if((i__44177 < count__44176)){
var role = chunk__44175.cljs$core$IIndexed$_nth$arity$2(null,i__44177);
var temp__5735__auto___44401__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___44401__$1)){
var spec_44402 = temp__5735__auto___44401__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_44402)], 0));
} else {
}


var G__44403 = seq__44174;
var G__44404 = chunk__44175;
var G__44405 = count__44176;
var G__44406 = (i__44177 + (1));
seq__44174 = G__44403;
chunk__44175 = G__44404;
count__44176 = G__44405;
i__44177 = G__44406;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__44174);
if(temp__5735__auto____$1){
var seq__44174__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__44174__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__44174__$1);
var G__44407 = cljs.core.chunk_rest(seq__44174__$1);
var G__44408 = c__4609__auto__;
var G__44409 = cljs.core.count(c__4609__auto__);
var G__44410 = (0);
seq__44174 = G__44407;
chunk__44175 = G__44408;
count__44176 = G__44409;
i__44177 = G__44410;
continue;
} else {
var role = cljs.core.first(seq__44174__$1);
var temp__5735__auto___44411__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___44411__$2)){
var spec_44412 = temp__5735__auto___44411__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_44412)], 0));
} else {
}


var G__44415 = cljs.core.next(seq__44174__$1);
var G__44416 = null;
var G__44417 = (0);
var G__44418 = (0);
seq__44174 = G__44415;
chunk__44175 = G__44416;
count__44176 = G__44417;
i__44177 = G__44418;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__44421 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__44422 = cljs.core.ex_cause(t);
via = G__44421;
t = G__44422;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__44218 = datafied_throwable;
var map__44218__$1 = (((((!((map__44218 == null))))?(((((map__44218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44218):map__44218);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44218__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44218__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44218__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__44219 = cljs.core.last(via);
var map__44219__$1 = (((((!((map__44219 == null))))?(((((map__44219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44219):map__44219);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44219__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44219__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44219__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__44220 = data;
var map__44220__$1 = (((((!((map__44220 == null))))?(((((map__44220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44220):map__44220);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44220__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44220__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44220__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__44221 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__44221__$1 = (((((!((map__44221 == null))))?(((((map__44221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44221):map__44221);
var top_data = map__44221__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44221__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__44250 = phase;
var G__44250__$1 = (((G__44250 instanceof cljs.core.Keyword))?G__44250.fqn:null);
switch (G__44250__$1) {
case "read-source":
var map__44251 = data;
var map__44251__$1 = (((((!((map__44251 == null))))?(((((map__44251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44251):map__44251);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44251__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44251__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__44257 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__44257__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44257,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__44257);
var G__44257__$2 = (cljs.core.truth_((function (){var fexpr__44261 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__44261.cljs$core$IFn$_invoke$arity$1 ? fexpr__44261.cljs$core$IFn$_invoke$arity$1(source) : fexpr__44261.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__44257__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__44257__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44257__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__44257__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__44262 = top_data;
var G__44262__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44262,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__44262);
var G__44262__$2 = (cljs.core.truth_((function (){var fexpr__44263 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__44263.cljs$core$IFn$_invoke$arity$1 ? fexpr__44263.cljs$core$IFn$_invoke$arity$1(source) : fexpr__44263.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__44262__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__44262__$1);
var G__44262__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44262__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__44262__$2);
var G__44262__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44262__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__44262__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44262__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__44262__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__44271 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44271,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44271,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44271,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44271,(3),null);
var G__44278 = top_data;
var G__44278__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44278,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__44278);
var G__44278__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44278__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__44278__$1);
var G__44278__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44278__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__44278__$2);
var G__44278__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44278__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__44278__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44278__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__44278__$4;
}

break;
case "execution":
var vec__44286 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44286,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44286,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44286,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44286,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__44217_SHARP_){
var or__4185__auto__ = (p1__44217_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__44294 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__44294.cljs$core$IFn$_invoke$arity$1 ? fexpr__44294.cljs$core$IFn$_invoke$arity$1(p1__44217_SHARP_) : fexpr__44294.call(null,p1__44217_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__44295 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__44295__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44295,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__44295);
var G__44295__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44295__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__44295__$1);
var G__44295__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44295__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__44295__$2);
var G__44295__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44295__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__44295__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44295__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__44295__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44250__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__44302){
var map__44304 = p__44302;
var map__44304__$1 = (((((!((map__44304 == null))))?(((((map__44304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44304):map__44304);
var triage_data = map__44304__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44304__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44304__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44304__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44304__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44304__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44304__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44304__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44304__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__44307 = phase;
var G__44307__$1 = (((G__44307 instanceof cljs.core.Keyword))?G__44307.fqn:null);
switch (G__44307__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__44308 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__44309 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44310 = loc;
var G__44311 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__44312_44430 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__44313_44431 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__44314_44432 = true;
var _STAR_print_fn_STAR__temp_val__44315_44433 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__44314_44432);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__44315_44433);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44300_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__44300_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__44313_44431);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__44312_44430);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__44308,G__44309,G__44310,G__44311) : format.call(null,G__44308,G__44309,G__44310,G__44311));

break;
case "macroexpansion":
var G__44316 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__44317 = cause_type;
var G__44318 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44319 = loc;
var G__44320 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__44316,G__44317,G__44318,G__44319,G__44320) : format.call(null,G__44316,G__44317,G__44318,G__44319,G__44320));

break;
case "compile-syntax-check":
var G__44321 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__44322 = cause_type;
var G__44323 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44324 = loc;
var G__44325 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__44321,G__44322,G__44323,G__44324,G__44325) : format.call(null,G__44321,G__44322,G__44323,G__44324,G__44325));

break;
case "compilation":
var G__44327 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__44328 = cause_type;
var G__44329 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44330 = loc;
var G__44331 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__44327,G__44328,G__44329,G__44330,G__44331) : format.call(null,G__44327,G__44328,G__44329,G__44330,G__44331));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__44332 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__44333 = symbol;
var G__44334 = loc;
var G__44335 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__44336_44435 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__44337_44436 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__44338_44437 = true;
var _STAR_print_fn_STAR__temp_val__44339_44438 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__44338_44437);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__44339_44438);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44301_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__44301_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__44337_44436);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__44336_44435);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__44332,G__44333,G__44334,G__44335) : format.call(null,G__44332,G__44333,G__44334,G__44335));
} else {
var G__44341 = "Execution error%s at %s(%s).\n%s\n";
var G__44342 = cause_type;
var G__44343 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44344 = loc;
var G__44345 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__44341,G__44342,G__44343,G__44344,G__44345) : format.call(null,G__44341,G__44342,G__44343,G__44344,G__44345));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44307__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
