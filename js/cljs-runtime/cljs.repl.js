goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35448){
var map__35449 = p__35448;
var map__35449__$1 = (((((!((map__35449 == null))))?(((((map__35449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35449.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35449):map__35449);
var m = map__35449__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35449__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35449__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__35452_35660 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35453_35661 = null;
var count__35454_35662 = (0);
var i__35455_35663 = (0);
while(true){
if((i__35455_35663 < count__35454_35662)){
var f_35664 = chunk__35453_35661.cljs$core$IIndexed$_nth$arity$2(null,i__35455_35663);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35664], 0));


var G__35665 = seq__35452_35660;
var G__35666 = chunk__35453_35661;
var G__35667 = count__35454_35662;
var G__35668 = (i__35455_35663 + (1));
seq__35452_35660 = G__35665;
chunk__35453_35661 = G__35666;
count__35454_35662 = G__35667;
i__35455_35663 = G__35668;
continue;
} else {
var temp__5735__auto___35669 = cljs.core.seq(seq__35452_35660);
if(temp__5735__auto___35669){
var seq__35452_35670__$1 = temp__5735__auto___35669;
if(cljs.core.chunked_seq_QMARK_(seq__35452_35670__$1)){
var c__4609__auto___35671 = cljs.core.chunk_first(seq__35452_35670__$1);
var G__35672 = cljs.core.chunk_rest(seq__35452_35670__$1);
var G__35673 = c__4609__auto___35671;
var G__35674 = cljs.core.count(c__4609__auto___35671);
var G__35675 = (0);
seq__35452_35660 = G__35672;
chunk__35453_35661 = G__35673;
count__35454_35662 = G__35674;
i__35455_35663 = G__35675;
continue;
} else {
var f_35676 = cljs.core.first(seq__35452_35670__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35676], 0));


var G__35677 = cljs.core.next(seq__35452_35670__$1);
var G__35678 = null;
var G__35679 = (0);
var G__35680 = (0);
seq__35452_35660 = G__35677;
chunk__35453_35661 = G__35678;
count__35454_35662 = G__35679;
i__35455_35663 = G__35680;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35681 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35681], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35681)))?cljs.core.second(arglists_35681):arglists_35681)], 0));
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
var seq__35457_35684 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35458_35685 = null;
var count__35459_35686 = (0);
var i__35460_35687 = (0);
while(true){
if((i__35460_35687 < count__35459_35686)){
var vec__35476_35690 = chunk__35458_35685.cljs$core$IIndexed$_nth$arity$2(null,i__35460_35687);
var name_35691 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35476_35690,(0),null);
var map__35479_35692 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35476_35690,(1),null);
var map__35479_35693__$1 = (((((!((map__35479_35692 == null))))?(((((map__35479_35692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35479_35692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35479_35692):map__35479_35692);
var doc_35694 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35479_35693__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35695 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35479_35693__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35691], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35695], 0));

if(cljs.core.truth_(doc_35694)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35694], 0));
} else {
}


var G__35698 = seq__35457_35684;
var G__35699 = chunk__35458_35685;
var G__35700 = count__35459_35686;
var G__35701 = (i__35460_35687 + (1));
seq__35457_35684 = G__35698;
chunk__35458_35685 = G__35699;
count__35459_35686 = G__35700;
i__35460_35687 = G__35701;
continue;
} else {
var temp__5735__auto___35702 = cljs.core.seq(seq__35457_35684);
if(temp__5735__auto___35702){
var seq__35457_35705__$1 = temp__5735__auto___35702;
if(cljs.core.chunked_seq_QMARK_(seq__35457_35705__$1)){
var c__4609__auto___35706 = cljs.core.chunk_first(seq__35457_35705__$1);
var G__35707 = cljs.core.chunk_rest(seq__35457_35705__$1);
var G__35708 = c__4609__auto___35706;
var G__35709 = cljs.core.count(c__4609__auto___35706);
var G__35710 = (0);
seq__35457_35684 = G__35707;
chunk__35458_35685 = G__35708;
count__35459_35686 = G__35709;
i__35460_35687 = G__35710;
continue;
} else {
var vec__35481_35711 = cljs.core.first(seq__35457_35705__$1);
var name_35712 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35481_35711,(0),null);
var map__35484_35713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35481_35711,(1),null);
var map__35484_35714__$1 = (((((!((map__35484_35713 == null))))?(((((map__35484_35713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35484_35713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35484_35713):map__35484_35713);
var doc_35715 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35484_35714__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35716 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35484_35714__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35712], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35716], 0));

if(cljs.core.truth_(doc_35715)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35715], 0));
} else {
}


var G__35717 = cljs.core.next(seq__35457_35705__$1);
var G__35718 = null;
var G__35719 = (0);
var G__35720 = (0);
seq__35457_35684 = G__35717;
chunk__35458_35685 = G__35718;
count__35459_35686 = G__35719;
i__35460_35687 = G__35720;
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

var seq__35490 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35491 = null;
var count__35492 = (0);
var i__35493 = (0);
while(true){
if((i__35493 < count__35492)){
var role = chunk__35491.cljs$core$IIndexed$_nth$arity$2(null,i__35493);
var temp__5735__auto___35721__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___35721__$1)){
var spec_35722 = temp__5735__auto___35721__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35722)], 0));
} else {
}


var G__35723 = seq__35490;
var G__35724 = chunk__35491;
var G__35725 = count__35492;
var G__35726 = (i__35493 + (1));
seq__35490 = G__35723;
chunk__35491 = G__35724;
count__35492 = G__35725;
i__35493 = G__35726;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__35490);
if(temp__5735__auto____$1){
var seq__35490__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35490__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__35490__$1);
var G__35727 = cljs.core.chunk_rest(seq__35490__$1);
var G__35728 = c__4609__auto__;
var G__35729 = cljs.core.count(c__4609__auto__);
var G__35730 = (0);
seq__35490 = G__35727;
chunk__35491 = G__35728;
count__35492 = G__35729;
i__35493 = G__35730;
continue;
} else {
var role = cljs.core.first(seq__35490__$1);
var temp__5735__auto___35731__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___35731__$2)){
var spec_35732 = temp__5735__auto___35731__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35732)], 0));
} else {
}


var G__35733 = cljs.core.next(seq__35490__$1);
var G__35734 = null;
var G__35735 = (0);
var G__35736 = (0);
seq__35490 = G__35733;
chunk__35491 = G__35734;
count__35492 = G__35735;
i__35493 = G__35736;
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
var G__35737 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__35738 = cljs.core.ex_cause(t);
via = G__35737;
t = G__35738;
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
var map__35561 = datafied_throwable;
var map__35561__$1 = (((((!((map__35561 == null))))?(((((map__35561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35561):map__35561);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35561__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35561__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35561__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35566 = cljs.core.last(via);
var map__35566__$1 = (((((!((map__35566 == null))))?(((((map__35566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35566):map__35566);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35566__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35566__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35566__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35567 = data;
var map__35567__$1 = (((((!((map__35567 == null))))?(((((map__35567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35567):map__35567);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35567__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35567__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35567__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35568 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__35568__$1 = (((((!((map__35568 == null))))?(((((map__35568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35568):map__35568);
var top_data = map__35568__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35568__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__35591 = phase;
var G__35591__$1 = (((G__35591 instanceof cljs.core.Keyword))?G__35591.fqn:null);
switch (G__35591__$1) {
case "read-source":
var map__35592 = data;
var map__35592__$1 = (((((!((map__35592 == null))))?(((((map__35592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35592):map__35592);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35592__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35592__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35598 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__35598__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35598,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35598);
var G__35598__$2 = (cljs.core.truth_((function (){var fexpr__35599 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35599.cljs$core$IFn$_invoke$arity$1 ? fexpr__35599.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35599.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35598__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35598__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35598__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35598__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35600 = top_data;
var G__35600__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35600,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35600);
var G__35600__$2 = (cljs.core.truth_((function (){var fexpr__35601 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35601.cljs$core$IFn$_invoke$arity$1 ? fexpr__35601.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35601.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35600__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35600__$1);
var G__35600__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35600__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35600__$2);
var G__35600__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35600__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35600__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35600__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35600__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35602 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35602,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35602,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35602,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35602,(3),null);
var G__35606 = top_data;
var G__35606__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35606,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35606);
var G__35606__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35606__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35606__$1);
var G__35606__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35606__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35606__$2);
var G__35606__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35606__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35606__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35606__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35606__$4;
}

break;
case "execution":
var vec__35607 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35607,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35607,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35607,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35607,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35560_SHARP_){
var or__4185__auto__ = (p1__35560_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__35612 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35612.cljs$core$IFn$_invoke$arity$1 ? fexpr__35612.cljs$core$IFn$_invoke$arity$1(p1__35560_SHARP_) : fexpr__35612.call(null,p1__35560_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__35613 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35613__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35613,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35613);
var G__35613__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35613__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35613__$1);
var G__35613__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35613__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35613__$2);
var G__35613__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35613__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35613__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35613__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35613__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35591__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35616){
var map__35617 = p__35616;
var map__35617__$1 = (((((!((map__35617 == null))))?(((((map__35617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35617):map__35617);
var triage_data = map__35617__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35617__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35617__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35617__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35617__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35617__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35617__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35617__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35617__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__35621 = phase;
var G__35621__$1 = (((G__35621 instanceof cljs.core.Keyword))?G__35621.fqn:null);
switch (G__35621__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__35622 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__35623 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35624 = loc;
var G__35625 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35626_35743 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35627_35744 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35628_35745 = true;
var _STAR_print_fn_STAR__temp_val__35629_35746 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35628_35745);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35629_35746);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35614_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35614_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35627_35744);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35626_35743);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35622,G__35623,G__35624,G__35625) : format.call(null,G__35622,G__35623,G__35624,G__35625));

break;
case "macroexpansion":
var G__35631 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__35632 = cause_type;
var G__35633 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35634 = loc;
var G__35635 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35631,G__35632,G__35633,G__35634,G__35635) : format.call(null,G__35631,G__35632,G__35633,G__35634,G__35635));

break;
case "compile-syntax-check":
var G__35636 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__35637 = cause_type;
var G__35638 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35639 = loc;
var G__35640 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35636,G__35637,G__35638,G__35639,G__35640) : format.call(null,G__35636,G__35637,G__35638,G__35639,G__35640));

break;
case "compilation":
var G__35641 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__35642 = cause_type;
var G__35643 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35644 = loc;
var G__35645 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35641,G__35642,G__35643,G__35644,G__35645) : format.call(null,G__35641,G__35642,G__35643,G__35644,G__35645));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__35646 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__35647 = symbol;
var G__35648 = loc;
var G__35649 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35650_35748 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35651_35749 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35652_35750 = true;
var _STAR_print_fn_STAR__temp_val__35653_35751 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35652_35750);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35653_35751);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35615_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35615_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35651_35749);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35650_35748);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35646,G__35647,G__35648,G__35649) : format.call(null,G__35646,G__35647,G__35648,G__35649));
} else {
var G__35655 = "Execution error%s at %s(%s).\n%s\n";
var G__35656 = cause_type;
var G__35657 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35658 = loc;
var G__35659 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35655,G__35656,G__35657,G__35658,G__35659) : format.call(null,G__35655,G__35656,G__35657,G__35658,G__35659));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35621__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
