goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__31821 = coll;
var G__31822 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__31821,G__31822) : shadow.dom.lazy_native_coll_seq.call(null,G__31821,G__31822));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4185__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__31859 = arguments.length;
switch (G__31859) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__31863 = arguments.length;
switch (G__31863) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__31871 = arguments.length;
switch (G__31871) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__31880 = arguments.length;
switch (G__31880) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__31896 = arguments.length;
switch (G__31896) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__31898 = document;
var G__31899 = shadow.dom.dom_node(el);
return goog.dom.contains(G__31898,G__31899);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__31904 = shadow.dom.dom_node(parent);
var G__31905 = shadow.dom.dom_node(el);
return goog.dom.contains(G__31904,G__31905);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__31908 = shadow.dom.dom_node(el);
var G__31909 = cls;
return goog.dom.classlist.add(G__31908,G__31909);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__31910 = shadow.dom.dom_node(el);
var G__31911 = cls;
return goog.dom.classlist.remove(G__31910,G__31911);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__31915 = arguments.length;
switch (G__31915) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__31918 = shadow.dom.dom_node(el);
var G__31919 = cls;
return goog.dom.classlist.toggle(G__31918,G__31919);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e31925){if((e31925 instanceof Object)){
var e = e31925;
return console.log("didnt support attachEvent",el,e);
} else {
throw e31925;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__31930 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__31931 = null;
var count__31932 = (0);
var i__31933 = (0);
while(true){
if((i__31933 < count__31932)){
var el = chunk__31931.cljs$core$IIndexed$_nth$arity$2(null,i__31933);
var handler_32897__$1 = ((function (seq__31930,chunk__31931,count__31932,i__31933,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__31930,chunk__31931,count__31932,i__31933,el))
;
var G__31946_32898 = el;
var G__31947_32899 = cljs.core.name(ev);
var G__31948_32900 = handler_32897__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__31946_32898,G__31947_32899,G__31948_32900) : shadow.dom.dom_listen.call(null,G__31946_32898,G__31947_32899,G__31948_32900));


var G__32901 = seq__31930;
var G__32902 = chunk__31931;
var G__32903 = count__31932;
var G__32904 = (i__31933 + (1));
seq__31930 = G__32901;
chunk__31931 = G__32902;
count__31932 = G__32903;
i__31933 = G__32904;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31930);
if(temp__5735__auto__){
var seq__31930__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31930__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__31930__$1);
var G__32906 = cljs.core.chunk_rest(seq__31930__$1);
var G__32907 = c__4609__auto__;
var G__32908 = cljs.core.count(c__4609__auto__);
var G__32909 = (0);
seq__31930 = G__32906;
chunk__31931 = G__32907;
count__31932 = G__32908;
i__31933 = G__32909;
continue;
} else {
var el = cljs.core.first(seq__31930__$1);
var handler_32910__$1 = ((function (seq__31930,chunk__31931,count__31932,i__31933,el,seq__31930__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__31930,chunk__31931,count__31932,i__31933,el,seq__31930__$1,temp__5735__auto__))
;
var G__31955_32911 = el;
var G__31956_32912 = cljs.core.name(ev);
var G__31957_32913 = handler_32910__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__31955_32911,G__31956_32912,G__31957_32913) : shadow.dom.dom_listen.call(null,G__31955_32911,G__31956_32912,G__31957_32913));


var G__32914 = cljs.core.next(seq__31930__$1);
var G__32915 = null;
var G__32916 = (0);
var G__32917 = (0);
seq__31930 = G__32914;
chunk__31931 = G__32915;
count__31932 = G__32916;
i__31933 = G__32917;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__31961 = arguments.length;
switch (G__31961) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__31974 = shadow.dom.dom_node(el);
var G__31975 = cljs.core.name(ev);
var G__31976 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__31974,G__31975,G__31976) : shadow.dom.dom_listen.call(null,G__31974,G__31975,G__31976));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__31979 = shadow.dom.dom_node(el);
var G__31980 = cljs.core.name(ev);
var G__31981 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__31979,G__31980,G__31981) : shadow.dom.dom_listen_remove.call(null,G__31979,G__31980,G__31981));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__31984 = cljs.core.seq(events);
var chunk__31985 = null;
var count__31986 = (0);
var i__31987 = (0);
while(true){
if((i__31987 < count__31986)){
var vec__31999 = chunk__31985.cljs$core$IIndexed$_nth$arity$2(null,i__31987);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31999,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31999,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__32923 = seq__31984;
var G__32924 = chunk__31985;
var G__32925 = count__31986;
var G__32926 = (i__31987 + (1));
seq__31984 = G__32923;
chunk__31985 = G__32924;
count__31986 = G__32925;
i__31987 = G__32926;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31984);
if(temp__5735__auto__){
var seq__31984__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31984__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__31984__$1);
var G__32927 = cljs.core.chunk_rest(seq__31984__$1);
var G__32928 = c__4609__auto__;
var G__32929 = cljs.core.count(c__4609__auto__);
var G__32930 = (0);
seq__31984 = G__32927;
chunk__31985 = G__32928;
count__31986 = G__32929;
i__31987 = G__32930;
continue;
} else {
var vec__32004 = cljs.core.first(seq__31984__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32004,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32004,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__32932 = cljs.core.next(seq__31984__$1);
var G__32933 = null;
var G__32934 = (0);
var G__32935 = (0);
seq__31984 = G__32932;
chunk__31985 = G__32933;
count__31986 = G__32934;
i__31987 = G__32935;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__32009 = cljs.core.seq(styles);
var chunk__32010 = null;
var count__32011 = (0);
var i__32012 = (0);
while(true){
if((i__32012 < count__32011)){
var vec__32035 = chunk__32010.cljs$core$IIndexed$_nth$arity$2(null,i__32012);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32035,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32035,(1),null);
var G__32040_32940 = dom;
var G__32041_32941 = cljs.core.name(k);
var G__32042_32942 = (((v == null))?"":v);
goog.style.setStyle(G__32040_32940,G__32041_32941,G__32042_32942);


var G__32943 = seq__32009;
var G__32944 = chunk__32010;
var G__32945 = count__32011;
var G__32946 = (i__32012 + (1));
seq__32009 = G__32943;
chunk__32010 = G__32944;
count__32011 = G__32945;
i__32012 = G__32946;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32009);
if(temp__5735__auto__){
var seq__32009__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32009__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32009__$1);
var G__32949 = cljs.core.chunk_rest(seq__32009__$1);
var G__32950 = c__4609__auto__;
var G__32951 = cljs.core.count(c__4609__auto__);
var G__32952 = (0);
seq__32009 = G__32949;
chunk__32010 = G__32950;
count__32011 = G__32951;
i__32012 = G__32952;
continue;
} else {
var vec__32046 = cljs.core.first(seq__32009__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32046,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32046,(1),null);
var G__32049_32956 = dom;
var G__32050_32957 = cljs.core.name(k);
var G__32051_32958 = (((v == null))?"":v);
goog.style.setStyle(G__32049_32956,G__32050_32957,G__32051_32958);


var G__32960 = cljs.core.next(seq__32009__$1);
var G__32961 = null;
var G__32962 = (0);
var G__32963 = (0);
seq__32009 = G__32960;
chunk__32010 = G__32961;
count__32011 = G__32962;
i__32012 = G__32963;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__32058_32965 = key;
var G__32058_32966__$1 = (((G__32058_32965 instanceof cljs.core.Keyword))?G__32058_32965.fqn:null);
switch (G__32058_32966__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_32977 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_32977,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_32977,"aria-");
}
})())){
el.setAttribute(ks_32977,value);
} else {
(el[ks_32977] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__32069 = shadow.dom.dom_node(el);
var G__32070 = cls;
return goog.dom.classlist.contains(G__32069,G__32070);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32084){
var map__32085 = p__32084;
var map__32085__$1 = (((((!((map__32085 == null))))?(((((map__32085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32085):map__32085);
var props = map__32085__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32085__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32092 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32092,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32092,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32092,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32096 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32096,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32096;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32105 = arguments.length;
switch (G__32105) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32111){
var vec__32113 = p__32111;
var seq__32114 = cljs.core.seq(vec__32113);
var first__32115 = cljs.core.first(seq__32114);
var seq__32114__$1 = cljs.core.next(seq__32114);
var nn = first__32115;
var first__32115__$1 = cljs.core.first(seq__32114__$1);
var seq__32114__$2 = cljs.core.next(seq__32114__$1);
var np = first__32115__$1;
var nc = seq__32114__$2;
var node = vec__32113;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32117 = nn;
var G__32118 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32117,G__32118) : create_fn.call(null,G__32117,G__32118));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32119 = nn;
var G__32120 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32119,G__32120) : create_fn.call(null,G__32119,G__32120));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32126 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32126,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32126,(1),null);
var seq__32131_33004 = cljs.core.seq(node_children);
var chunk__32132_33005 = null;
var count__32133_33006 = (0);
var i__32134_33007 = (0);
while(true){
if((i__32134_33007 < count__32133_33006)){
var child_struct_33008 = chunk__32132_33005.cljs$core$IIndexed$_nth$arity$2(null,i__32134_33007);
var children_33009 = shadow.dom.dom_node(child_struct_33008);
if(cljs.core.seq_QMARK_(children_33009)){
var seq__32181_33010 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33009));
var chunk__32183_33011 = null;
var count__32184_33012 = (0);
var i__32185_33013 = (0);
while(true){
if((i__32185_33013 < count__32184_33012)){
var child_33014 = chunk__32183_33011.cljs$core$IIndexed$_nth$arity$2(null,i__32185_33013);
if(cljs.core.truth_(child_33014)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33014);


var G__33019 = seq__32181_33010;
var G__33020 = chunk__32183_33011;
var G__33021 = count__32184_33012;
var G__33022 = (i__32185_33013 + (1));
seq__32181_33010 = G__33019;
chunk__32183_33011 = G__33020;
count__32184_33012 = G__33021;
i__32185_33013 = G__33022;
continue;
} else {
var G__33023 = seq__32181_33010;
var G__33024 = chunk__32183_33011;
var G__33025 = count__32184_33012;
var G__33026 = (i__32185_33013 + (1));
seq__32181_33010 = G__33023;
chunk__32183_33011 = G__33024;
count__32184_33012 = G__33025;
i__32185_33013 = G__33026;
continue;
}
} else {
var temp__5735__auto___33027 = cljs.core.seq(seq__32181_33010);
if(temp__5735__auto___33027){
var seq__32181_33028__$1 = temp__5735__auto___33027;
if(cljs.core.chunked_seq_QMARK_(seq__32181_33028__$1)){
var c__4609__auto___33029 = cljs.core.chunk_first(seq__32181_33028__$1);
var G__33031 = cljs.core.chunk_rest(seq__32181_33028__$1);
var G__33032 = c__4609__auto___33029;
var G__33033 = cljs.core.count(c__4609__auto___33029);
var G__33034 = (0);
seq__32181_33010 = G__33031;
chunk__32183_33011 = G__33032;
count__32184_33012 = G__33033;
i__32185_33013 = G__33034;
continue;
} else {
var child_33035 = cljs.core.first(seq__32181_33028__$1);
if(cljs.core.truth_(child_33035)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33035);


var G__33036 = cljs.core.next(seq__32181_33028__$1);
var G__33037 = null;
var G__33038 = (0);
var G__33039 = (0);
seq__32181_33010 = G__33036;
chunk__32183_33011 = G__33037;
count__32184_33012 = G__33038;
i__32185_33013 = G__33039;
continue;
} else {
var G__33041 = cljs.core.next(seq__32181_33028__$1);
var G__33042 = null;
var G__33043 = (0);
var G__33044 = (0);
seq__32181_33010 = G__33041;
chunk__32183_33011 = G__33042;
count__32184_33012 = G__33043;
i__32185_33013 = G__33044;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33009);
}


var G__33045 = seq__32131_33004;
var G__33046 = chunk__32132_33005;
var G__33047 = count__32133_33006;
var G__33048 = (i__32134_33007 + (1));
seq__32131_33004 = G__33045;
chunk__32132_33005 = G__33046;
count__32133_33006 = G__33047;
i__32134_33007 = G__33048;
continue;
} else {
var temp__5735__auto___33049 = cljs.core.seq(seq__32131_33004);
if(temp__5735__auto___33049){
var seq__32131_33050__$1 = temp__5735__auto___33049;
if(cljs.core.chunked_seq_QMARK_(seq__32131_33050__$1)){
var c__4609__auto___33051 = cljs.core.chunk_first(seq__32131_33050__$1);
var G__33052 = cljs.core.chunk_rest(seq__32131_33050__$1);
var G__33053 = c__4609__auto___33051;
var G__33054 = cljs.core.count(c__4609__auto___33051);
var G__33055 = (0);
seq__32131_33004 = G__33052;
chunk__32132_33005 = G__33053;
count__32133_33006 = G__33054;
i__32134_33007 = G__33055;
continue;
} else {
var child_struct_33057 = cljs.core.first(seq__32131_33050__$1);
var children_33058 = shadow.dom.dom_node(child_struct_33057);
if(cljs.core.seq_QMARK_(children_33058)){
var seq__32197_33059 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33058));
var chunk__32199_33060 = null;
var count__32200_33061 = (0);
var i__32201_33062 = (0);
while(true){
if((i__32201_33062 < count__32200_33061)){
var child_33063 = chunk__32199_33060.cljs$core$IIndexed$_nth$arity$2(null,i__32201_33062);
if(cljs.core.truth_(child_33063)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33063);


var G__33064 = seq__32197_33059;
var G__33065 = chunk__32199_33060;
var G__33066 = count__32200_33061;
var G__33067 = (i__32201_33062 + (1));
seq__32197_33059 = G__33064;
chunk__32199_33060 = G__33065;
count__32200_33061 = G__33066;
i__32201_33062 = G__33067;
continue;
} else {
var G__33068 = seq__32197_33059;
var G__33069 = chunk__32199_33060;
var G__33070 = count__32200_33061;
var G__33071 = (i__32201_33062 + (1));
seq__32197_33059 = G__33068;
chunk__32199_33060 = G__33069;
count__32200_33061 = G__33070;
i__32201_33062 = G__33071;
continue;
}
} else {
var temp__5735__auto___33075__$1 = cljs.core.seq(seq__32197_33059);
if(temp__5735__auto___33075__$1){
var seq__32197_33076__$1 = temp__5735__auto___33075__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32197_33076__$1)){
var c__4609__auto___33077 = cljs.core.chunk_first(seq__32197_33076__$1);
var G__33078 = cljs.core.chunk_rest(seq__32197_33076__$1);
var G__33079 = c__4609__auto___33077;
var G__33080 = cljs.core.count(c__4609__auto___33077);
var G__33081 = (0);
seq__32197_33059 = G__33078;
chunk__32199_33060 = G__33079;
count__32200_33061 = G__33080;
i__32201_33062 = G__33081;
continue;
} else {
var child_33082 = cljs.core.first(seq__32197_33076__$1);
if(cljs.core.truth_(child_33082)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33082);


var G__33083 = cljs.core.next(seq__32197_33076__$1);
var G__33084 = null;
var G__33085 = (0);
var G__33086 = (0);
seq__32197_33059 = G__33083;
chunk__32199_33060 = G__33084;
count__32200_33061 = G__33085;
i__32201_33062 = G__33086;
continue;
} else {
var G__33087 = cljs.core.next(seq__32197_33076__$1);
var G__33088 = null;
var G__33089 = (0);
var G__33090 = (0);
seq__32197_33059 = G__33087;
chunk__32199_33060 = G__33088;
count__32200_33061 = G__33089;
i__32201_33062 = G__33090;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33058);
}


var G__33092 = cljs.core.next(seq__32131_33050__$1);
var G__33093 = null;
var G__33094 = (0);
var G__33095 = (0);
seq__32131_33004 = G__33092;
chunk__32132_33005 = G__33093;
count__32133_33006 = G__33094;
i__32134_33007 = G__33095;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__32263 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__32263);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__32276 = cljs.core.seq(node);
var chunk__32277 = null;
var count__32278 = (0);
var i__32279 = (0);
while(true){
if((i__32279 < count__32278)){
var n = chunk__32277.cljs$core$IIndexed$_nth$arity$2(null,i__32279);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33101 = seq__32276;
var G__33102 = chunk__32277;
var G__33103 = count__32278;
var G__33104 = (i__32279 + (1));
seq__32276 = G__33101;
chunk__32277 = G__33102;
count__32278 = G__33103;
i__32279 = G__33104;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32276);
if(temp__5735__auto__){
var seq__32276__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32276__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32276__$1);
var G__33105 = cljs.core.chunk_rest(seq__32276__$1);
var G__33106 = c__4609__auto__;
var G__33107 = cljs.core.count(c__4609__auto__);
var G__33108 = (0);
seq__32276 = G__33105;
chunk__32277 = G__33106;
count__32278 = G__33107;
i__32279 = G__33108;
continue;
} else {
var n = cljs.core.first(seq__32276__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33109 = cljs.core.next(seq__32276__$1);
var G__33110 = null;
var G__33111 = (0);
var G__33112 = (0);
seq__32276 = G__33109;
chunk__32277 = G__33110;
count__32278 = G__33111;
i__32279 = G__33112;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__32296 = shadow.dom.dom_node(new$);
var G__32297 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__32296,G__32297);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__32302 = arguments.length;
switch (G__32302) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__32313 = arguments.length;
switch (G__32313) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__32326 = arguments.length;
switch (G__32326) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4185__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4795__auto__ = [];
var len__4789__auto___33128 = arguments.length;
var i__4790__auto___33129 = (0);
while(true){
if((i__4790__auto___33129 < len__4789__auto___33128)){
args__4795__auto__.push((arguments[i__4790__auto___33129]));

var G__33131 = (i__4790__auto___33129 + (1));
i__4790__auto___33129 = G__33131;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__32353_33133 = cljs.core.seq(nodes);
var chunk__32354_33134 = null;
var count__32355_33135 = (0);
var i__32356_33136 = (0);
while(true){
if((i__32356_33136 < count__32355_33135)){
var node_33137 = chunk__32354_33134.cljs$core$IIndexed$_nth$arity$2(null,i__32356_33136);
fragment.appendChild(shadow.dom._to_dom(node_33137));


var G__33138 = seq__32353_33133;
var G__33139 = chunk__32354_33134;
var G__33140 = count__32355_33135;
var G__33141 = (i__32356_33136 + (1));
seq__32353_33133 = G__33138;
chunk__32354_33134 = G__33139;
count__32355_33135 = G__33140;
i__32356_33136 = G__33141;
continue;
} else {
var temp__5735__auto___33143 = cljs.core.seq(seq__32353_33133);
if(temp__5735__auto___33143){
var seq__32353_33144__$1 = temp__5735__auto___33143;
if(cljs.core.chunked_seq_QMARK_(seq__32353_33144__$1)){
var c__4609__auto___33145 = cljs.core.chunk_first(seq__32353_33144__$1);
var G__33146 = cljs.core.chunk_rest(seq__32353_33144__$1);
var G__33147 = c__4609__auto___33145;
var G__33148 = cljs.core.count(c__4609__auto___33145);
var G__33149 = (0);
seq__32353_33133 = G__33146;
chunk__32354_33134 = G__33147;
count__32355_33135 = G__33148;
i__32356_33136 = G__33149;
continue;
} else {
var node_33150 = cljs.core.first(seq__32353_33144__$1);
fragment.appendChild(shadow.dom._to_dom(node_33150));


var G__33153 = cljs.core.next(seq__32353_33144__$1);
var G__33154 = null;
var G__33155 = (0);
var G__33156 = (0);
seq__32353_33133 = G__33153;
chunk__32354_33134 = G__33154;
count__32355_33135 = G__33155;
i__32356_33136 = G__33156;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq32347){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32347));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__32372_33161 = cljs.core.seq(scripts);
var chunk__32373_33162 = null;
var count__32374_33163 = (0);
var i__32375_33164 = (0);
while(true){
if((i__32375_33164 < count__32374_33163)){
var vec__32384_33167 = chunk__32373_33162.cljs$core$IIndexed$_nth$arity$2(null,i__32375_33164);
var script_tag_33168 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32384_33167,(0),null);
var script_body_33169 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32384_33167,(1),null);
eval(script_body_33169);


var G__33170 = seq__32372_33161;
var G__33171 = chunk__32373_33162;
var G__33172 = count__32374_33163;
var G__33173 = (i__32375_33164 + (1));
seq__32372_33161 = G__33170;
chunk__32373_33162 = G__33171;
count__32374_33163 = G__33172;
i__32375_33164 = G__33173;
continue;
} else {
var temp__5735__auto___33176 = cljs.core.seq(seq__32372_33161);
if(temp__5735__auto___33176){
var seq__32372_33177__$1 = temp__5735__auto___33176;
if(cljs.core.chunked_seq_QMARK_(seq__32372_33177__$1)){
var c__4609__auto___33178 = cljs.core.chunk_first(seq__32372_33177__$1);
var G__33179 = cljs.core.chunk_rest(seq__32372_33177__$1);
var G__33180 = c__4609__auto___33178;
var G__33181 = cljs.core.count(c__4609__auto___33178);
var G__33182 = (0);
seq__32372_33161 = G__33179;
chunk__32373_33162 = G__33180;
count__32374_33163 = G__33181;
i__32375_33164 = G__33182;
continue;
} else {
var vec__32392_33188 = cljs.core.first(seq__32372_33177__$1);
var script_tag_33189 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32392_33188,(0),null);
var script_body_33190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32392_33188,(1),null);
eval(script_body_33190);


var G__33192 = cljs.core.next(seq__32372_33177__$1);
var G__33193 = null;
var G__33194 = (0);
var G__33195 = (0);
seq__32372_33161 = G__33192;
chunk__32373_33162 = G__33193;
count__32374_33163 = G__33194;
i__32375_33164 = G__33195;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__32398){
var vec__32399 = p__32398;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32399,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32399,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__32410 = shadow.dom.dom_node(el);
var G__32411 = cls;
return goog.dom.getAncestorByClass(G__32410,G__32411);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__32420 = arguments.length;
switch (G__32420) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__32426 = shadow.dom.dom_node(el);
var G__32427 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__32426,G__32427);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__32428 = shadow.dom.dom_node(el);
var G__32429 = cljs.core.name(tag);
var G__32430 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__32428,G__32429,G__32430);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__32436 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__32436);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__32440 = shadow.dom.dom_node(dom);
var G__32441 = value;
return goog.dom.forms.setValue(G__32440,G__32441);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__32457 = cljs.core.seq(style_keys);
var chunk__32458 = null;
var count__32459 = (0);
var i__32460 = (0);
while(true){
if((i__32460 < count__32459)){
var it = chunk__32458.cljs$core$IIndexed$_nth$arity$2(null,i__32460);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33248 = seq__32457;
var G__33249 = chunk__32458;
var G__33250 = count__32459;
var G__33251 = (i__32460 + (1));
seq__32457 = G__33248;
chunk__32458 = G__33249;
count__32459 = G__33250;
i__32460 = G__33251;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32457);
if(temp__5735__auto__){
var seq__32457__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32457__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32457__$1);
var G__33253 = cljs.core.chunk_rest(seq__32457__$1);
var G__33254 = c__4609__auto__;
var G__33255 = cljs.core.count(c__4609__auto__);
var G__33256 = (0);
seq__32457 = G__33253;
chunk__32458 = G__33254;
count__32459 = G__33255;
i__32460 = G__33256;
continue;
} else {
var it = cljs.core.first(seq__32457__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33257 = cljs.core.next(seq__32457__$1);
var G__33258 = null;
var G__33259 = (0);
var G__33260 = (0);
seq__32457 = G__33257;
chunk__32458 = G__33258;
count__32459 = G__33259;
i__32460 = G__33260;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k32468,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__32485 = k32468;
var G__32485__$1 = (((G__32485 instanceof cljs.core.Keyword))?G__32485.fqn:null);
switch (G__32485__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32468,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__32491){
var vec__32492 = p__32491;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32492,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32492,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32467){
var self__ = this;
var G__32467__$1 = this;
return (new cljs.core.RecordIter((0),G__32467__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__32512 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__32512(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32469,other32470){
var self__ = this;
var this32469__$1 = this;
return (((!((other32470 == null)))) && ((this32469__$1.constructor === other32470.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32469__$1.x,other32470.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32469__$1.y,other32470.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32469__$1.__extmap,other32470.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__32467){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__32528 = cljs.core.keyword_identical_QMARK_;
var expr__32529 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__32532 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__32533 = expr__32529;
return (pred__32528.cljs$core$IFn$_invoke$arity$2 ? pred__32528.cljs$core$IFn$_invoke$arity$2(G__32532,G__32533) : pred__32528.call(null,G__32532,G__32533));
})())){
return (new shadow.dom.Coordinate(G__32467,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__32535 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__32536 = expr__32529;
return (pred__32528.cljs$core$IFn$_invoke$arity$2 ? pred__32528.cljs$core$IFn$_invoke$arity$2(G__32535,G__32536) : pred__32528.call(null,G__32535,G__32536));
})())){
return (new shadow.dom.Coordinate(self__.x,G__32467,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__32467),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__32467){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__32467,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__32476){
var extmap__4478__auto__ = (function (){var G__32557 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32476,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__32476)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32557);
} else {
return G__32557;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__32476),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__32476),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__32561 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__32561);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__32566 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__32566);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__32571 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__32571);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k32575,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__32591 = k32575;
var G__32591__$1 = (((G__32591 instanceof cljs.core.Keyword))?G__32591.fqn:null);
switch (G__32591__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32575,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__32596){
var vec__32597 = p__32596;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32597,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32597,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Size{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32574){
var self__ = this;
var G__32574__$1 = this;
return (new cljs.core.RecordIter((0),G__32574__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__32621 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__32621(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32576,other32577){
var self__ = this;
var this32576__$1 = this;
return (((!((other32577 == null)))) && ((this32576__$1.constructor === other32577.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32576__$1.w,other32577.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32576__$1.h,other32577.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32576__$1.__extmap,other32577.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__32574){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__32627 = cljs.core.keyword_identical_QMARK_;
var expr__32628 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__32631 = new cljs.core.Keyword(null,"w","w",354169001);
var G__32632 = expr__32628;
return (pred__32627.cljs$core$IFn$_invoke$arity$2 ? pred__32627.cljs$core$IFn$_invoke$arity$2(G__32631,G__32632) : pred__32627.call(null,G__32631,G__32632));
})())){
return (new shadow.dom.Size(G__32574,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__32634 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__32635 = expr__32628;
return (pred__32627.cljs$core$IFn$_invoke$arity$2 ? pred__32627.cljs$core$IFn$_invoke$arity$2(G__32634,G__32635) : pred__32627.call(null,G__32634,G__32635));
})())){
return (new shadow.dom.Size(self__.w,G__32574,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__32574),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__32574){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__32574,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__32584){
var extmap__4478__auto__ = (function (){var G__32642 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32584,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__32584)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32642);
} else {
return G__32642;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__32584),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__32584),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__32649 = shadow.dom.dom_node(el);
return goog.style.getSize(G__32649);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4663__auto__ = opts;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4664__auto__)){
var G__33305 = (i + (1));
var G__33306 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__33305;
ret = G__33306;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32703){
var vec__32704 = p__32703;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32704,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32704,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__32709 = arguments.length;
switch (G__32709) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__32722_33309 = new_node;
var G__32723_33310 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__32722_33309,G__32723_33310);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__32728_33312 = new_node;
var G__32729_33313 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__32728_33312,G__32729_33313);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__33317 = ps;
var G__33318 = (i + (1));
el__$1 = G__33317;
i = G__33318;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__32734 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__32734);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__32745 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__32745);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__32747 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__32747);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__32748 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32748,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32748,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32748,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__32751_33320 = cljs.core.seq(props);
var chunk__32752_33321 = null;
var count__32753_33322 = (0);
var i__32754_33323 = (0);
while(true){
if((i__32754_33323 < count__32753_33322)){
var vec__32764_33324 = chunk__32752_33321.cljs$core$IIndexed$_nth$arity$2(null,i__32754_33323);
var k_33325 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32764_33324,(0),null);
var v_33326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32764_33324,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_33325);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33325),v_33326);


var G__33327 = seq__32751_33320;
var G__33328 = chunk__32752_33321;
var G__33329 = count__32753_33322;
var G__33330 = (i__32754_33323 + (1));
seq__32751_33320 = G__33327;
chunk__32752_33321 = G__33328;
count__32753_33322 = G__33329;
i__32754_33323 = G__33330;
continue;
} else {
var temp__5735__auto___33331 = cljs.core.seq(seq__32751_33320);
if(temp__5735__auto___33331){
var seq__32751_33332__$1 = temp__5735__auto___33331;
if(cljs.core.chunked_seq_QMARK_(seq__32751_33332__$1)){
var c__4609__auto___33333 = cljs.core.chunk_first(seq__32751_33332__$1);
var G__33334 = cljs.core.chunk_rest(seq__32751_33332__$1);
var G__33335 = c__4609__auto___33333;
var G__33336 = cljs.core.count(c__4609__auto___33333);
var G__33337 = (0);
seq__32751_33320 = G__33334;
chunk__32752_33321 = G__33335;
count__32753_33322 = G__33336;
i__32754_33323 = G__33337;
continue;
} else {
var vec__32767_33338 = cljs.core.first(seq__32751_33332__$1);
var k_33339 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32767_33338,(0),null);
var v_33340 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32767_33338,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_33339);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33339),v_33340);


var G__33346 = cljs.core.next(seq__32751_33332__$1);
var G__33347 = null;
var G__33348 = (0);
var G__33349 = (0);
seq__32751_33320 = G__33346;
chunk__32752_33321 = G__33347;
count__32753_33322 = G__33348;
i__32754_33323 = G__33349;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__32772 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32772,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32772,(1),null);
var seq__32777_33353 = cljs.core.seq(node_children);
var chunk__32779_33354 = null;
var count__32780_33355 = (0);
var i__32781_33356 = (0);
while(true){
if((i__32781_33356 < count__32780_33355)){
var child_struct_33357 = chunk__32779_33354.cljs$core$IIndexed$_nth$arity$2(null,i__32781_33356);
if((!((child_struct_33357 == null)))){
if(typeof child_struct_33357 === 'string'){
var text_33358 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33358),child_struct_33357].join(''));
} else {
var children_33360 = shadow.dom.svg_node(child_struct_33357);
if(cljs.core.seq_QMARK_(children_33360)){
var seq__32804_33361 = cljs.core.seq(children_33360);
var chunk__32806_33362 = null;
var count__32807_33363 = (0);
var i__32808_33364 = (0);
while(true){
if((i__32808_33364 < count__32807_33363)){
var child_33366 = chunk__32806_33362.cljs$core$IIndexed$_nth$arity$2(null,i__32808_33364);
if(cljs.core.truth_(child_33366)){
node.appendChild(child_33366);


var G__33368 = seq__32804_33361;
var G__33369 = chunk__32806_33362;
var G__33370 = count__32807_33363;
var G__33371 = (i__32808_33364 + (1));
seq__32804_33361 = G__33368;
chunk__32806_33362 = G__33369;
count__32807_33363 = G__33370;
i__32808_33364 = G__33371;
continue;
} else {
var G__33372 = seq__32804_33361;
var G__33373 = chunk__32806_33362;
var G__33374 = count__32807_33363;
var G__33375 = (i__32808_33364 + (1));
seq__32804_33361 = G__33372;
chunk__32806_33362 = G__33373;
count__32807_33363 = G__33374;
i__32808_33364 = G__33375;
continue;
}
} else {
var temp__5735__auto___33376 = cljs.core.seq(seq__32804_33361);
if(temp__5735__auto___33376){
var seq__32804_33377__$1 = temp__5735__auto___33376;
if(cljs.core.chunked_seq_QMARK_(seq__32804_33377__$1)){
var c__4609__auto___33378 = cljs.core.chunk_first(seq__32804_33377__$1);
var G__33380 = cljs.core.chunk_rest(seq__32804_33377__$1);
var G__33381 = c__4609__auto___33378;
var G__33382 = cljs.core.count(c__4609__auto___33378);
var G__33383 = (0);
seq__32804_33361 = G__33380;
chunk__32806_33362 = G__33381;
count__32807_33363 = G__33382;
i__32808_33364 = G__33383;
continue;
} else {
var child_33385 = cljs.core.first(seq__32804_33377__$1);
if(cljs.core.truth_(child_33385)){
node.appendChild(child_33385);


var G__33387 = cljs.core.next(seq__32804_33377__$1);
var G__33388 = null;
var G__33389 = (0);
var G__33390 = (0);
seq__32804_33361 = G__33387;
chunk__32806_33362 = G__33388;
count__32807_33363 = G__33389;
i__32808_33364 = G__33390;
continue;
} else {
var G__33393 = cljs.core.next(seq__32804_33377__$1);
var G__33394 = null;
var G__33395 = (0);
var G__33396 = (0);
seq__32804_33361 = G__33393;
chunk__32806_33362 = G__33394;
count__32807_33363 = G__33395;
i__32808_33364 = G__33396;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33360);
}
}


var G__33397 = seq__32777_33353;
var G__33398 = chunk__32779_33354;
var G__33399 = count__32780_33355;
var G__33400 = (i__32781_33356 + (1));
seq__32777_33353 = G__33397;
chunk__32779_33354 = G__33398;
count__32780_33355 = G__33399;
i__32781_33356 = G__33400;
continue;
} else {
var G__33401 = seq__32777_33353;
var G__33402 = chunk__32779_33354;
var G__33403 = count__32780_33355;
var G__33404 = (i__32781_33356 + (1));
seq__32777_33353 = G__33401;
chunk__32779_33354 = G__33402;
count__32780_33355 = G__33403;
i__32781_33356 = G__33404;
continue;
}
} else {
var temp__5735__auto___33406 = cljs.core.seq(seq__32777_33353);
if(temp__5735__auto___33406){
var seq__32777_33407__$1 = temp__5735__auto___33406;
if(cljs.core.chunked_seq_QMARK_(seq__32777_33407__$1)){
var c__4609__auto___33409 = cljs.core.chunk_first(seq__32777_33407__$1);
var G__33410 = cljs.core.chunk_rest(seq__32777_33407__$1);
var G__33411 = c__4609__auto___33409;
var G__33412 = cljs.core.count(c__4609__auto___33409);
var G__33413 = (0);
seq__32777_33353 = G__33410;
chunk__32779_33354 = G__33411;
count__32780_33355 = G__33412;
i__32781_33356 = G__33413;
continue;
} else {
var child_struct_33415 = cljs.core.first(seq__32777_33407__$1);
if((!((child_struct_33415 == null)))){
if(typeof child_struct_33415 === 'string'){
var text_33417 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33417),child_struct_33415].join(''));
} else {
var children_33418 = shadow.dom.svg_node(child_struct_33415);
if(cljs.core.seq_QMARK_(children_33418)){
var seq__32818_33419 = cljs.core.seq(children_33418);
var chunk__32820_33420 = null;
var count__32821_33421 = (0);
var i__32822_33422 = (0);
while(true){
if((i__32822_33422 < count__32821_33421)){
var child_33423 = chunk__32820_33420.cljs$core$IIndexed$_nth$arity$2(null,i__32822_33422);
if(cljs.core.truth_(child_33423)){
node.appendChild(child_33423);


var G__33425 = seq__32818_33419;
var G__33426 = chunk__32820_33420;
var G__33427 = count__32821_33421;
var G__33428 = (i__32822_33422 + (1));
seq__32818_33419 = G__33425;
chunk__32820_33420 = G__33426;
count__32821_33421 = G__33427;
i__32822_33422 = G__33428;
continue;
} else {
var G__33429 = seq__32818_33419;
var G__33430 = chunk__32820_33420;
var G__33431 = count__32821_33421;
var G__33432 = (i__32822_33422 + (1));
seq__32818_33419 = G__33429;
chunk__32820_33420 = G__33430;
count__32821_33421 = G__33431;
i__32822_33422 = G__33432;
continue;
}
} else {
var temp__5735__auto___33433__$1 = cljs.core.seq(seq__32818_33419);
if(temp__5735__auto___33433__$1){
var seq__32818_33434__$1 = temp__5735__auto___33433__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32818_33434__$1)){
var c__4609__auto___33435 = cljs.core.chunk_first(seq__32818_33434__$1);
var G__33436 = cljs.core.chunk_rest(seq__32818_33434__$1);
var G__33437 = c__4609__auto___33435;
var G__33438 = cljs.core.count(c__4609__auto___33435);
var G__33439 = (0);
seq__32818_33419 = G__33436;
chunk__32820_33420 = G__33437;
count__32821_33421 = G__33438;
i__32822_33422 = G__33439;
continue;
} else {
var child_33440 = cljs.core.first(seq__32818_33434__$1);
if(cljs.core.truth_(child_33440)){
node.appendChild(child_33440);


var G__33441 = cljs.core.next(seq__32818_33434__$1);
var G__33442 = null;
var G__33443 = (0);
var G__33444 = (0);
seq__32818_33419 = G__33441;
chunk__32820_33420 = G__33442;
count__32821_33421 = G__33443;
i__32822_33422 = G__33444;
continue;
} else {
var G__33445 = cljs.core.next(seq__32818_33434__$1);
var G__33446 = null;
var G__33447 = (0);
var G__33448 = (0);
seq__32818_33419 = G__33445;
chunk__32820_33420 = G__33446;
count__32821_33421 = G__33447;
i__32822_33422 = G__33448;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33418);
}
}


var G__33449 = cljs.core.next(seq__32777_33407__$1);
var G__33450 = null;
var G__33451 = (0);
var G__33452 = (0);
seq__32777_33353 = G__33449;
chunk__32779_33354 = G__33450;
count__32780_33355 = G__33451;
i__32781_33356 = G__33452;
continue;
} else {
var G__33454 = cljs.core.next(seq__32777_33407__$1);
var G__33455 = null;
var G__33456 = (0);
var G__33457 = (0);
seq__32777_33353 = G__33454;
chunk__32779_33354 = G__33455;
count__32780_33355 = G__33456;
i__32781_33356 = G__33457;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__32827_33458 = shadow.dom._to_svg;
var G__32828_33459 = "string";
var G__32829_33460 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__32827_33458,G__32828_33459,G__32829_33460);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__32834_33463 = shadow.dom._to_svg;
var G__32835_33464 = "null";
var G__32836_33465 = (function (_){
return null;
});
goog.object.set(G__32834_33463,G__32835_33464,G__32836_33465);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___33466 = arguments.length;
var i__4790__auto___33467 = (0);
while(true){
if((i__4790__auto___33467 < len__4789__auto___33466)){
args__4795__auto__.push((arguments[i__4790__auto___33467]));

var G__33468 = (i__4790__auto___33467 + (1));
i__4790__auto___33467 = G__33468;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq32837){
var G__32838 = cljs.core.first(seq32837);
var seq32837__$1 = cljs.core.next(seq32837);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32838,seq32837__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__32844 = arguments.length;
switch (G__32844) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
var G__32848_33474 = shadow.dom.dom_node(el);
var G__32849_33475 = cljs.core.name(event);
var G__32850_33476 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__32848_33474,G__32849_33475,G__32850_33476) : shadow.dom.dom_listen.call(null,G__32848_33474,G__32849_33475,G__32850_33476));

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__29076__auto___33480 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29077__auto__ = (function (){var switch__28731__auto__ = (function (state_32857){
var state_val_32858 = (state_32857[(1)]);
if((state_val_32858 === (1))){
var state_32857__$1 = state_32857;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32857__$1,(2),once_or_cleanup);
} else {
if((state_val_32858 === (2))){
var inst_32854 = (state_32857[(2)]);
var inst_32855 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_32857__$1 = (function (){var statearr_32860 = state_32857;
(statearr_32860[(7)] = inst_32854);

return statearr_32860;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32857__$1,inst_32855);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__28732__auto__ = null;
var shadow$dom$state_machine__28732__auto____0 = (function (){
var statearr_32861 = [null,null,null,null,null,null,null,null];
(statearr_32861[(0)] = shadow$dom$state_machine__28732__auto__);

(statearr_32861[(1)] = (1));

return statearr_32861;
});
var shadow$dom$state_machine__28732__auto____1 = (function (state_32857){
while(true){
var ret_value__28733__auto__ = (function (){try{while(true){
var result__28734__auto__ = switch__28731__auto__(state_32857);
if(cljs.core.keyword_identical_QMARK_(result__28734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28734__auto__;
}
break;
}
}catch (e32863){if((e32863 instanceof Object)){
var ex__28735__auto__ = e32863;
var statearr_32865_33492 = state_32857;
(statearr_32865_33492[(5)] = ex__28735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32857);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32863;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33493 = state_32857;
state_32857 = G__33493;
continue;
} else {
return ret_value__28733__auto__;
}
break;
}
});
shadow$dom$state_machine__28732__auto__ = function(state_32857){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__28732__auto____0.call(this);
case 1:
return shadow$dom$state_machine__28732__auto____1.call(this,state_32857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__28732__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__28732__auto____0;
shadow$dom$state_machine__28732__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__28732__auto____1;
return shadow$dom$state_machine__28732__auto__;
})()
})();
var state__29079__auto__ = (function (){var statearr_32867 = (f__29077__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29077__auto__.cljs$core$IFn$_invoke$arity$0() : f__29077__auto__.call(null));
(statearr_32867[(6)] = c__29076__auto___33480);

return statearr_32867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29079__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
