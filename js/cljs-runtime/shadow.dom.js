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
return cljs.core.cons((coll[idx]),(function (){var G__40728 = coll;
var G__40729 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__40728,G__40729) : shadow.dom.lazy_native_coll_seq.call(null,G__40728,G__40729));
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
var G__40732 = arguments.length;
switch (G__40732) {
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
var G__40738 = arguments.length;
switch (G__40738) {
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
var G__40740 = arguments.length;
switch (G__40740) {
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
var G__40742 = arguments.length;
switch (G__40742) {
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
var G__40744 = arguments.length;
switch (G__40744) {
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
var G__40745 = document;
var G__40746 = shadow.dom.dom_node(el);
return goog.dom.contains(G__40745,G__40746);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__40747 = shadow.dom.dom_node(parent);
var G__40748 = shadow.dom.dom_node(el);
return goog.dom.contains(G__40747,G__40748);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__40751 = shadow.dom.dom_node(el);
var G__40752 = cls;
return goog.dom.classlist.add(G__40751,G__40752);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__40755 = shadow.dom.dom_node(el);
var G__40756 = cls;
return goog.dom.classlist.remove(G__40755,G__40756);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__40761 = arguments.length;
switch (G__40761) {
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
var G__40765 = shadow.dom.dom_node(el);
var G__40766 = cls;
return goog.dom.classlist.toggle(G__40765,G__40766);
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
}catch (e40773){if((e40773 instanceof Object)){
var e = e40773;
return console.log("didnt support attachEvent",el,e);
} else {
throw e40773;

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
var seq__40776 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__40777 = null;
var count__40778 = (0);
var i__40779 = (0);
while(true){
if((i__40779 < count__40778)){
var el = chunk__40777.cljs$core$IIndexed$_nth$arity$2(null,i__40779);
var handler_41316__$1 = ((function (seq__40776,chunk__40777,count__40778,i__40779,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__40776,chunk__40777,count__40778,i__40779,el))
;
var G__40786_41317 = el;
var G__40787_41318 = cljs.core.name(ev);
var G__40788_41319 = handler_41316__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__40786_41317,G__40787_41318,G__40788_41319) : shadow.dom.dom_listen.call(null,G__40786_41317,G__40787_41318,G__40788_41319));


var G__41320 = seq__40776;
var G__41321 = chunk__40777;
var G__41322 = count__40778;
var G__41323 = (i__40779 + (1));
seq__40776 = G__41320;
chunk__40777 = G__41321;
count__40778 = G__41322;
i__40779 = G__41323;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40776);
if(temp__5735__auto__){
var seq__40776__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40776__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__40776__$1);
var G__41339 = cljs.core.chunk_rest(seq__40776__$1);
var G__41340 = c__4609__auto__;
var G__41341 = cljs.core.count(c__4609__auto__);
var G__41342 = (0);
seq__40776 = G__41339;
chunk__40777 = G__41340;
count__40778 = G__41341;
i__40779 = G__41342;
continue;
} else {
var el = cljs.core.first(seq__40776__$1);
var handler_41344__$1 = ((function (seq__40776,chunk__40777,count__40778,i__40779,el,seq__40776__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__40776,chunk__40777,count__40778,i__40779,el,seq__40776__$1,temp__5735__auto__))
;
var G__40789_41345 = el;
var G__40790_41346 = cljs.core.name(ev);
var G__40791_41347 = handler_41344__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__40789_41345,G__40790_41346,G__40791_41347) : shadow.dom.dom_listen.call(null,G__40789_41345,G__40790_41346,G__40791_41347));


var G__41348 = cljs.core.next(seq__40776__$1);
var G__41349 = null;
var G__41350 = (0);
var G__41351 = (0);
seq__40776 = G__41348;
chunk__40777 = G__41349;
count__40778 = G__41350;
i__40779 = G__41351;
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
var G__40793 = arguments.length;
switch (G__40793) {
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
var G__40794 = shadow.dom.dom_node(el);
var G__40795 = cljs.core.name(ev);
var G__40796 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__40794,G__40795,G__40796) : shadow.dom.dom_listen.call(null,G__40794,G__40795,G__40796));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__40798 = shadow.dom.dom_node(el);
var G__40799 = cljs.core.name(ev);
var G__40800 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__40798,G__40799,G__40800) : shadow.dom.dom_listen_remove.call(null,G__40798,G__40799,G__40800));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__40801 = cljs.core.seq(events);
var chunk__40802 = null;
var count__40803 = (0);
var i__40804 = (0);
while(true){
if((i__40804 < count__40803)){
var vec__40815 = chunk__40802.cljs$core$IIndexed$_nth$arity$2(null,i__40804);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40815,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40815,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__41356 = seq__40801;
var G__41357 = chunk__40802;
var G__41358 = count__40803;
var G__41359 = (i__40804 + (1));
seq__40801 = G__41356;
chunk__40802 = G__41357;
count__40803 = G__41358;
i__40804 = G__41359;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40801);
if(temp__5735__auto__){
var seq__40801__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40801__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__40801__$1);
var G__41362 = cljs.core.chunk_rest(seq__40801__$1);
var G__41363 = c__4609__auto__;
var G__41364 = cljs.core.count(c__4609__auto__);
var G__41365 = (0);
seq__40801 = G__41362;
chunk__40802 = G__41363;
count__40803 = G__41364;
i__40804 = G__41365;
continue;
} else {
var vec__40822 = cljs.core.first(seq__40801__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40822,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40822,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__41367 = cljs.core.next(seq__40801__$1);
var G__41368 = null;
var G__41369 = (0);
var G__41370 = (0);
seq__40801 = G__41367;
chunk__40802 = G__41368;
count__40803 = G__41369;
i__40804 = G__41370;
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
var seq__40826 = cljs.core.seq(styles);
var chunk__40827 = null;
var count__40828 = (0);
var i__40829 = (0);
while(true){
if((i__40829 < count__40828)){
var vec__40846 = chunk__40827.cljs$core$IIndexed$_nth$arity$2(null,i__40829);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40846,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40846,(1),null);
var G__40849_41373 = dom;
var G__40850_41374 = cljs.core.name(k);
var G__40851_41375 = (((v == null))?"":v);
goog.style.setStyle(G__40849_41373,G__40850_41374,G__40851_41375);


var G__41376 = seq__40826;
var G__41377 = chunk__40827;
var G__41378 = count__40828;
var G__41379 = (i__40829 + (1));
seq__40826 = G__41376;
chunk__40827 = G__41377;
count__40828 = G__41378;
i__40829 = G__41379;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40826);
if(temp__5735__auto__){
var seq__40826__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40826__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__40826__$1);
var G__41381 = cljs.core.chunk_rest(seq__40826__$1);
var G__41382 = c__4609__auto__;
var G__41383 = cljs.core.count(c__4609__auto__);
var G__41384 = (0);
seq__40826 = G__41381;
chunk__40827 = G__41382;
count__40828 = G__41383;
i__40829 = G__41384;
continue;
} else {
var vec__40853 = cljs.core.first(seq__40826__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40853,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40853,(1),null);
var G__40856_41385 = dom;
var G__40857_41386 = cljs.core.name(k);
var G__40858_41387 = (((v == null))?"":v);
goog.style.setStyle(G__40856_41385,G__40857_41386,G__40858_41387);


var G__41388 = cljs.core.next(seq__40826__$1);
var G__41389 = null;
var G__41390 = (0);
var G__41391 = (0);
seq__40826 = G__41388;
chunk__40827 = G__41389;
count__40828 = G__41390;
i__40829 = G__41391;
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
var G__40859_41392 = key;
var G__40859_41393__$1 = (((G__40859_41392 instanceof cljs.core.Keyword))?G__40859_41392.fqn:null);
switch (G__40859_41393__$1) {
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
var ks_41399 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_41399,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_41399,"aria-");
}
})())){
el.setAttribute(ks_41399,value);
} else {
(el[ks_41399] = value);
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
var G__40860 = shadow.dom.dom_node(el);
var G__40861 = cls;
return goog.dom.classlist.contains(G__40860,G__40861);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__40866){
var map__40867 = p__40866;
var map__40867__$1 = (((((!((map__40867 == null))))?(((((map__40867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40867):map__40867);
var props = map__40867__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40867__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__40872 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40872,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40872,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40872,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__40876 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__40876,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__40876;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__40879 = arguments.length;
switch (G__40879) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__40885){
var vec__40886 = p__40885;
var seq__40887 = cljs.core.seq(vec__40886);
var first__40888 = cljs.core.first(seq__40887);
var seq__40887__$1 = cljs.core.next(seq__40887);
var nn = first__40888;
var first__40888__$1 = cljs.core.first(seq__40887__$1);
var seq__40887__$2 = cljs.core.next(seq__40887__$1);
var np = first__40888__$1;
var nc = seq__40887__$2;
var node = vec__40886;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__40889 = nn;
var G__40890 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__40889,G__40890) : create_fn.call(null,G__40889,G__40890));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__40891 = nn;
var G__40892 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__40891,G__40892) : create_fn.call(null,G__40891,G__40892));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__40893 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40893,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40893,(1),null);
var seq__40896_41412 = cljs.core.seq(node_children);
var chunk__40897_41413 = null;
var count__40898_41414 = (0);
var i__40899_41415 = (0);
while(true){
if((i__40899_41415 < count__40898_41414)){
var child_struct_41416 = chunk__40897_41413.cljs$core$IIndexed$_nth$arity$2(null,i__40899_41415);
var children_41417 = shadow.dom.dom_node(child_struct_41416);
if(cljs.core.seq_QMARK_(children_41417)){
var seq__40912_41418 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_41417));
var chunk__40914_41419 = null;
var count__40915_41420 = (0);
var i__40916_41421 = (0);
while(true){
if((i__40916_41421 < count__40915_41420)){
var child_41423 = chunk__40914_41419.cljs$core$IIndexed$_nth$arity$2(null,i__40916_41421);
if(cljs.core.truth_(child_41423)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_41423);


var G__41425 = seq__40912_41418;
var G__41426 = chunk__40914_41419;
var G__41427 = count__40915_41420;
var G__41428 = (i__40916_41421 + (1));
seq__40912_41418 = G__41425;
chunk__40914_41419 = G__41426;
count__40915_41420 = G__41427;
i__40916_41421 = G__41428;
continue;
} else {
var G__41429 = seq__40912_41418;
var G__41430 = chunk__40914_41419;
var G__41431 = count__40915_41420;
var G__41432 = (i__40916_41421 + (1));
seq__40912_41418 = G__41429;
chunk__40914_41419 = G__41430;
count__40915_41420 = G__41431;
i__40916_41421 = G__41432;
continue;
}
} else {
var temp__5735__auto___41433 = cljs.core.seq(seq__40912_41418);
if(temp__5735__auto___41433){
var seq__40912_41434__$1 = temp__5735__auto___41433;
if(cljs.core.chunked_seq_QMARK_(seq__40912_41434__$1)){
var c__4609__auto___41435 = cljs.core.chunk_first(seq__40912_41434__$1);
var G__41436 = cljs.core.chunk_rest(seq__40912_41434__$1);
var G__41437 = c__4609__auto___41435;
var G__41438 = cljs.core.count(c__4609__auto___41435);
var G__41439 = (0);
seq__40912_41418 = G__41436;
chunk__40914_41419 = G__41437;
count__40915_41420 = G__41438;
i__40916_41421 = G__41439;
continue;
} else {
var child_41441 = cljs.core.first(seq__40912_41434__$1);
if(cljs.core.truth_(child_41441)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_41441);


var G__41443 = cljs.core.next(seq__40912_41434__$1);
var G__41444 = null;
var G__41445 = (0);
var G__41446 = (0);
seq__40912_41418 = G__41443;
chunk__40914_41419 = G__41444;
count__40915_41420 = G__41445;
i__40916_41421 = G__41446;
continue;
} else {
var G__41447 = cljs.core.next(seq__40912_41434__$1);
var G__41448 = null;
var G__41449 = (0);
var G__41450 = (0);
seq__40912_41418 = G__41447;
chunk__40914_41419 = G__41448;
count__40915_41420 = G__41449;
i__40916_41421 = G__41450;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_41417);
}


var G__41452 = seq__40896_41412;
var G__41453 = chunk__40897_41413;
var G__41454 = count__40898_41414;
var G__41455 = (i__40899_41415 + (1));
seq__40896_41412 = G__41452;
chunk__40897_41413 = G__41453;
count__40898_41414 = G__41454;
i__40899_41415 = G__41455;
continue;
} else {
var temp__5735__auto___41456 = cljs.core.seq(seq__40896_41412);
if(temp__5735__auto___41456){
var seq__40896_41457__$1 = temp__5735__auto___41456;
if(cljs.core.chunked_seq_QMARK_(seq__40896_41457__$1)){
var c__4609__auto___41458 = cljs.core.chunk_first(seq__40896_41457__$1);
var G__41459 = cljs.core.chunk_rest(seq__40896_41457__$1);
var G__41460 = c__4609__auto___41458;
var G__41461 = cljs.core.count(c__4609__auto___41458);
var G__41462 = (0);
seq__40896_41412 = G__41459;
chunk__40897_41413 = G__41460;
count__40898_41414 = G__41461;
i__40899_41415 = G__41462;
continue;
} else {
var child_struct_41463 = cljs.core.first(seq__40896_41457__$1);
var children_41465 = shadow.dom.dom_node(child_struct_41463);
if(cljs.core.seq_QMARK_(children_41465)){
var seq__40918_41466 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_41465));
var chunk__40920_41467 = null;
var count__40921_41468 = (0);
var i__40922_41469 = (0);
while(true){
if((i__40922_41469 < count__40921_41468)){
var child_41470 = chunk__40920_41467.cljs$core$IIndexed$_nth$arity$2(null,i__40922_41469);
if(cljs.core.truth_(child_41470)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_41470);


var G__41472 = seq__40918_41466;
var G__41473 = chunk__40920_41467;
var G__41474 = count__40921_41468;
var G__41475 = (i__40922_41469 + (1));
seq__40918_41466 = G__41472;
chunk__40920_41467 = G__41473;
count__40921_41468 = G__41474;
i__40922_41469 = G__41475;
continue;
} else {
var G__41476 = seq__40918_41466;
var G__41477 = chunk__40920_41467;
var G__41478 = count__40921_41468;
var G__41479 = (i__40922_41469 + (1));
seq__40918_41466 = G__41476;
chunk__40920_41467 = G__41477;
count__40921_41468 = G__41478;
i__40922_41469 = G__41479;
continue;
}
} else {
var temp__5735__auto___41480__$1 = cljs.core.seq(seq__40918_41466);
if(temp__5735__auto___41480__$1){
var seq__40918_41481__$1 = temp__5735__auto___41480__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40918_41481__$1)){
var c__4609__auto___41482 = cljs.core.chunk_first(seq__40918_41481__$1);
var G__41483 = cljs.core.chunk_rest(seq__40918_41481__$1);
var G__41484 = c__4609__auto___41482;
var G__41485 = cljs.core.count(c__4609__auto___41482);
var G__41486 = (0);
seq__40918_41466 = G__41483;
chunk__40920_41467 = G__41484;
count__40921_41468 = G__41485;
i__40922_41469 = G__41486;
continue;
} else {
var child_41487 = cljs.core.first(seq__40918_41481__$1);
if(cljs.core.truth_(child_41487)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_41487);


var G__41488 = cljs.core.next(seq__40918_41481__$1);
var G__41489 = null;
var G__41490 = (0);
var G__41491 = (0);
seq__40918_41466 = G__41488;
chunk__40920_41467 = G__41489;
count__40921_41468 = G__41490;
i__40922_41469 = G__41491;
continue;
} else {
var G__41493 = cljs.core.next(seq__40918_41481__$1);
var G__41494 = null;
var G__41495 = (0);
var G__41496 = (0);
seq__40918_41466 = G__41493;
chunk__40920_41467 = G__41494;
count__40921_41468 = G__41495;
i__40922_41469 = G__41496;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_41465);
}


var G__41497 = cljs.core.next(seq__40896_41457__$1);
var G__41498 = null;
var G__41499 = (0);
var G__41500 = (0);
seq__40896_41412 = G__41497;
chunk__40897_41413 = G__41498;
count__40898_41414 = G__41499;
i__40899_41415 = G__41500;
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
var G__40936 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__40936);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__40939 = cljs.core.seq(node);
var chunk__40940 = null;
var count__40941 = (0);
var i__40942 = (0);
while(true){
if((i__40942 < count__40941)){
var n = chunk__40940.cljs$core$IIndexed$_nth$arity$2(null,i__40942);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__41506 = seq__40939;
var G__41507 = chunk__40940;
var G__41508 = count__40941;
var G__41509 = (i__40942 + (1));
seq__40939 = G__41506;
chunk__40940 = G__41507;
count__40941 = G__41508;
i__40942 = G__41509;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40939);
if(temp__5735__auto__){
var seq__40939__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40939__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__40939__$1);
var G__41510 = cljs.core.chunk_rest(seq__40939__$1);
var G__41511 = c__4609__auto__;
var G__41512 = cljs.core.count(c__4609__auto__);
var G__41513 = (0);
seq__40939 = G__41510;
chunk__40940 = G__41511;
count__40941 = G__41512;
i__40942 = G__41513;
continue;
} else {
var n = cljs.core.first(seq__40939__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__41515 = cljs.core.next(seq__40939__$1);
var G__41516 = null;
var G__41517 = (0);
var G__41518 = (0);
seq__40939 = G__41515;
chunk__40940 = G__41516;
count__40941 = G__41517;
i__40942 = G__41518;
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
var G__40951 = shadow.dom.dom_node(new$);
var G__40952 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__40951,G__40952);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__40958 = arguments.length;
switch (G__40958) {
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
var G__40964 = arguments.length;
switch (G__40964) {
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
var G__40968 = arguments.length;
switch (G__40968) {
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
var len__4789__auto___41534 = arguments.length;
var i__4790__auto___41535 = (0);
while(true){
if((i__4790__auto___41535 < len__4789__auto___41534)){
args__4795__auto__.push((arguments[i__4790__auto___41535]));

var G__41536 = (i__4790__auto___41535 + (1));
i__4790__auto___41535 = G__41536;
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
var seq__40981_41537 = cljs.core.seq(nodes);
var chunk__40982_41538 = null;
var count__40983_41539 = (0);
var i__40984_41540 = (0);
while(true){
if((i__40984_41540 < count__40983_41539)){
var node_41541 = chunk__40982_41538.cljs$core$IIndexed$_nth$arity$2(null,i__40984_41540);
fragment.appendChild(shadow.dom._to_dom(node_41541));


var G__41542 = seq__40981_41537;
var G__41543 = chunk__40982_41538;
var G__41544 = count__40983_41539;
var G__41545 = (i__40984_41540 + (1));
seq__40981_41537 = G__41542;
chunk__40982_41538 = G__41543;
count__40983_41539 = G__41544;
i__40984_41540 = G__41545;
continue;
} else {
var temp__5735__auto___41546 = cljs.core.seq(seq__40981_41537);
if(temp__5735__auto___41546){
var seq__40981_41547__$1 = temp__5735__auto___41546;
if(cljs.core.chunked_seq_QMARK_(seq__40981_41547__$1)){
var c__4609__auto___41548 = cljs.core.chunk_first(seq__40981_41547__$1);
var G__41549 = cljs.core.chunk_rest(seq__40981_41547__$1);
var G__41550 = c__4609__auto___41548;
var G__41551 = cljs.core.count(c__4609__auto___41548);
var G__41552 = (0);
seq__40981_41537 = G__41549;
chunk__40982_41538 = G__41550;
count__40983_41539 = G__41551;
i__40984_41540 = G__41552;
continue;
} else {
var node_41553 = cljs.core.first(seq__40981_41547__$1);
fragment.appendChild(shadow.dom._to_dom(node_41553));


var G__41554 = cljs.core.next(seq__40981_41547__$1);
var G__41555 = null;
var G__41556 = (0);
var G__41557 = (0);
seq__40981_41537 = G__41554;
chunk__40982_41538 = G__41555;
count__40983_41539 = G__41556;
i__40984_41540 = G__41557;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq40980){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40980));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__40990_41558 = cljs.core.seq(scripts);
var chunk__40991_41559 = null;
var count__40992_41560 = (0);
var i__40993_41561 = (0);
while(true){
if((i__40993_41561 < count__40992_41560)){
var vec__41003_41563 = chunk__40991_41559.cljs$core$IIndexed$_nth$arity$2(null,i__40993_41561);
var script_tag_41564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41003_41563,(0),null);
var script_body_41565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41003_41563,(1),null);
eval(script_body_41565);


var G__41566 = seq__40990_41558;
var G__41567 = chunk__40991_41559;
var G__41568 = count__40992_41560;
var G__41569 = (i__40993_41561 + (1));
seq__40990_41558 = G__41566;
chunk__40991_41559 = G__41567;
count__40992_41560 = G__41568;
i__40993_41561 = G__41569;
continue;
} else {
var temp__5735__auto___41570 = cljs.core.seq(seq__40990_41558);
if(temp__5735__auto___41570){
var seq__40990_41572__$1 = temp__5735__auto___41570;
if(cljs.core.chunked_seq_QMARK_(seq__40990_41572__$1)){
var c__4609__auto___41573 = cljs.core.chunk_first(seq__40990_41572__$1);
var G__41574 = cljs.core.chunk_rest(seq__40990_41572__$1);
var G__41575 = c__4609__auto___41573;
var G__41576 = cljs.core.count(c__4609__auto___41573);
var G__41577 = (0);
seq__40990_41558 = G__41574;
chunk__40991_41559 = G__41575;
count__40992_41560 = G__41576;
i__40993_41561 = G__41577;
continue;
} else {
var vec__41014_41578 = cljs.core.first(seq__40990_41572__$1);
var script_tag_41579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41014_41578,(0),null);
var script_body_41580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41014_41578,(1),null);
eval(script_body_41580);


var G__41582 = cljs.core.next(seq__40990_41572__$1);
var G__41583 = null;
var G__41584 = (0);
var G__41585 = (0);
seq__40990_41558 = G__41582;
chunk__40991_41559 = G__41583;
count__40992_41560 = G__41584;
i__40993_41561 = G__41585;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__41017){
var vec__41018 = p__41017;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41018,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41018,(1),null);
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
var G__41022 = shadow.dom.dom_node(el);
var G__41023 = cls;
return goog.dom.getAncestorByClass(G__41022,G__41023);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__41027 = arguments.length;
switch (G__41027) {
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
var G__41028 = shadow.dom.dom_node(el);
var G__41029 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__41028,G__41029);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__41030 = shadow.dom.dom_node(el);
var G__41031 = cljs.core.name(tag);
var G__41032 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__41030,G__41031,G__41032);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__41035 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__41035);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__41037 = shadow.dom.dom_node(dom);
var G__41038 = value;
return goog.dom.forms.setValue(G__41037,G__41038);
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
var seq__41045 = cljs.core.seq(style_keys);
var chunk__41046 = null;
var count__41047 = (0);
var i__41048 = (0);
while(true){
if((i__41048 < count__41047)){
var it = chunk__41046.cljs$core$IIndexed$_nth$arity$2(null,i__41048);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__41598 = seq__41045;
var G__41599 = chunk__41046;
var G__41600 = count__41047;
var G__41601 = (i__41048 + (1));
seq__41045 = G__41598;
chunk__41046 = G__41599;
count__41047 = G__41600;
i__41048 = G__41601;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41045);
if(temp__5735__auto__){
var seq__41045__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41045__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__41045__$1);
var G__41602 = cljs.core.chunk_rest(seq__41045__$1);
var G__41603 = c__4609__auto__;
var G__41604 = cljs.core.count(c__4609__auto__);
var G__41605 = (0);
seq__41045 = G__41602;
chunk__41046 = G__41603;
count__41047 = G__41604;
i__41048 = G__41605;
continue;
} else {
var it = cljs.core.first(seq__41045__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__41606 = cljs.core.next(seq__41045__$1);
var G__41607 = null;
var G__41608 = (0);
var G__41609 = (0);
seq__41045 = G__41606;
chunk__41046 = G__41607;
count__41047 = G__41608;
i__41048 = G__41609;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k41058,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__41064 = k41058;
var G__41064__$1 = (((G__41064 instanceof cljs.core.Keyword))?G__41064.fqn:null);
switch (G__41064__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k41058,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__41065){
var vec__41066 = p__41065;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41066,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41066,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41057){
var self__ = this;
var G__41057__$1 = this;
return (new cljs.core.RecordIter((0),G__41057__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4297__auto____$1 = (function (){var fexpr__41069 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__41069(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this41059,other41060){
var self__ = this;
var this41059__$1 = this;
return (((!((other41060 == null)))) && ((this41059__$1.constructor === other41060.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41059__$1.x,other41060.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41059__$1.y,other41060.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41059__$1.__extmap,other41060.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__41057){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__41070 = cljs.core.keyword_identical_QMARK_;
var expr__41071 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__41074 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__41075 = expr__41071;
return (pred__41070.cljs$core$IFn$_invoke$arity$2 ? pred__41070.cljs$core$IFn$_invoke$arity$2(G__41074,G__41075) : pred__41070.call(null,G__41074,G__41075));
})())){
return (new shadow.dom.Coordinate(G__41057,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__41076 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__41077 = expr__41071;
return (pred__41070.cljs$core$IFn$_invoke$arity$2 ? pred__41070.cljs$core$IFn$_invoke$arity$2(G__41076,G__41077) : pred__41070.call(null,G__41076,G__41077));
})())){
return (new shadow.dom.Coordinate(self__.x,G__41057,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__41057),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__41057){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__41057,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__41061){
var extmap__4478__auto__ = (function (){var G__41079 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__41061,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__41061)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__41079);
} else {
return G__41079;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__41061),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__41061),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__41080 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__41080);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__41081 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__41081);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__41084 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__41084);
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k41086,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__41090 = k41086;
var G__41090__$1 = (((G__41090 instanceof cljs.core.Keyword))?G__41090.fqn:null);
switch (G__41090__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k41086,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__41091){
var vec__41092 = p__41091;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41092,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41092,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41085){
var self__ = this;
var G__41085__$1 = this;
return (new cljs.core.RecordIter((0),G__41085__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4297__auto____$1 = (function (){var fexpr__41102 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__41102(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this41087,other41088){
var self__ = this;
var this41087__$1 = this;
return (((!((other41088 == null)))) && ((this41087__$1.constructor === other41088.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41087__$1.w,other41088.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41087__$1.h,other41088.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41087__$1.__extmap,other41088.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__41085){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__41105 = cljs.core.keyword_identical_QMARK_;
var expr__41106 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__41108 = new cljs.core.Keyword(null,"w","w",354169001);
var G__41109 = expr__41106;
return (pred__41105.cljs$core$IFn$_invoke$arity$2 ? pred__41105.cljs$core$IFn$_invoke$arity$2(G__41108,G__41109) : pred__41105.call(null,G__41108,G__41109));
})())){
return (new shadow.dom.Size(G__41085,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__41111 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__41112 = expr__41106;
return (pred__41105.cljs$core$IFn$_invoke$arity$2 ? pred__41105.cljs$core$IFn$_invoke$arity$2(G__41111,G__41112) : pred__41105.call(null,G__41111,G__41112));
})())){
return (new shadow.dom.Size(self__.w,G__41085,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__41085),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__41085){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__41085,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__41089){
var extmap__4478__auto__ = (function (){var G__41117 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__41089,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__41089)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__41117);
} else {
return G__41117;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__41089),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__41089),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__41121 = shadow.dom.dom_node(el);
return goog.style.getSize(G__41121);
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
var G__41627 = (i + (1));
var G__41628 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__41627;
ret = G__41628;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__41133){
var vec__41134 = p__41133;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41134,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41134,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__41138 = arguments.length;
switch (G__41138) {
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
var G__41150_41646 = new_node;
var G__41151_41647 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__41150_41646,G__41151_41647);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__41153_41648 = new_node;
var G__41154_41649 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__41153_41648,G__41154_41649);

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
var G__41651 = ps;
var G__41652 = (i + (1));
el__$1 = G__41651;
i = G__41652;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__41161 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__41161);
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
var G__41166 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__41166);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__41168 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__41168);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__41173 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41173,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41173,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41173,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__41176_41660 = cljs.core.seq(props);
var chunk__41177_41661 = null;
var count__41178_41662 = (0);
var i__41179_41663 = (0);
while(true){
if((i__41179_41663 < count__41178_41662)){
var vec__41189_41665 = chunk__41177_41661.cljs$core$IIndexed$_nth$arity$2(null,i__41179_41663);
var k_41666 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41189_41665,(0),null);
var v_41667 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41189_41665,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_41666);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_41666),v_41667);


var G__41670 = seq__41176_41660;
var G__41671 = chunk__41177_41661;
var G__41672 = count__41178_41662;
var G__41673 = (i__41179_41663 + (1));
seq__41176_41660 = G__41670;
chunk__41177_41661 = G__41671;
count__41178_41662 = G__41672;
i__41179_41663 = G__41673;
continue;
} else {
var temp__5735__auto___41675 = cljs.core.seq(seq__41176_41660);
if(temp__5735__auto___41675){
var seq__41176_41676__$1 = temp__5735__auto___41675;
if(cljs.core.chunked_seq_QMARK_(seq__41176_41676__$1)){
var c__4609__auto___41677 = cljs.core.chunk_first(seq__41176_41676__$1);
var G__41678 = cljs.core.chunk_rest(seq__41176_41676__$1);
var G__41679 = c__4609__auto___41677;
var G__41680 = cljs.core.count(c__4609__auto___41677);
var G__41681 = (0);
seq__41176_41660 = G__41678;
chunk__41177_41661 = G__41679;
count__41178_41662 = G__41680;
i__41179_41663 = G__41681;
continue;
} else {
var vec__41192_41682 = cljs.core.first(seq__41176_41676__$1);
var k_41683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41192_41682,(0),null);
var v_41684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41192_41682,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_41683);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_41683),v_41684);


var G__41692 = cljs.core.next(seq__41176_41676__$1);
var G__41693 = null;
var G__41694 = (0);
var G__41695 = (0);
seq__41176_41660 = G__41692;
chunk__41177_41661 = G__41693;
count__41178_41662 = G__41694;
i__41179_41663 = G__41695;
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
var vec__41199 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41199,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41199,(1),null);
var seq__41202_41696 = cljs.core.seq(node_children);
var chunk__41204_41697 = null;
var count__41205_41698 = (0);
var i__41206_41699 = (0);
while(true){
if((i__41206_41699 < count__41205_41698)){
var child_struct_41700 = chunk__41204_41697.cljs$core$IIndexed$_nth$arity$2(null,i__41206_41699);
if((!((child_struct_41700 == null)))){
if(typeof child_struct_41700 === 'string'){
var text_41701 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_41701),child_struct_41700].join(''));
} else {
var children_41702 = shadow.dom.svg_node(child_struct_41700);
if(cljs.core.seq_QMARK_(children_41702)){
var seq__41227_41703 = cljs.core.seq(children_41702);
var chunk__41229_41704 = null;
var count__41230_41705 = (0);
var i__41231_41706 = (0);
while(true){
if((i__41231_41706 < count__41230_41705)){
var child_41707 = chunk__41229_41704.cljs$core$IIndexed$_nth$arity$2(null,i__41231_41706);
if(cljs.core.truth_(child_41707)){
node.appendChild(child_41707);


var G__41708 = seq__41227_41703;
var G__41709 = chunk__41229_41704;
var G__41710 = count__41230_41705;
var G__41711 = (i__41231_41706 + (1));
seq__41227_41703 = G__41708;
chunk__41229_41704 = G__41709;
count__41230_41705 = G__41710;
i__41231_41706 = G__41711;
continue;
} else {
var G__41712 = seq__41227_41703;
var G__41713 = chunk__41229_41704;
var G__41714 = count__41230_41705;
var G__41715 = (i__41231_41706 + (1));
seq__41227_41703 = G__41712;
chunk__41229_41704 = G__41713;
count__41230_41705 = G__41714;
i__41231_41706 = G__41715;
continue;
}
} else {
var temp__5735__auto___41716 = cljs.core.seq(seq__41227_41703);
if(temp__5735__auto___41716){
var seq__41227_41717__$1 = temp__5735__auto___41716;
if(cljs.core.chunked_seq_QMARK_(seq__41227_41717__$1)){
var c__4609__auto___41718 = cljs.core.chunk_first(seq__41227_41717__$1);
var G__41719 = cljs.core.chunk_rest(seq__41227_41717__$1);
var G__41720 = c__4609__auto___41718;
var G__41721 = cljs.core.count(c__4609__auto___41718);
var G__41722 = (0);
seq__41227_41703 = G__41719;
chunk__41229_41704 = G__41720;
count__41230_41705 = G__41721;
i__41231_41706 = G__41722;
continue;
} else {
var child_41723 = cljs.core.first(seq__41227_41717__$1);
if(cljs.core.truth_(child_41723)){
node.appendChild(child_41723);


var G__41724 = cljs.core.next(seq__41227_41717__$1);
var G__41725 = null;
var G__41726 = (0);
var G__41727 = (0);
seq__41227_41703 = G__41724;
chunk__41229_41704 = G__41725;
count__41230_41705 = G__41726;
i__41231_41706 = G__41727;
continue;
} else {
var G__41728 = cljs.core.next(seq__41227_41717__$1);
var G__41729 = null;
var G__41730 = (0);
var G__41731 = (0);
seq__41227_41703 = G__41728;
chunk__41229_41704 = G__41729;
count__41230_41705 = G__41730;
i__41231_41706 = G__41731;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_41702);
}
}


var G__41732 = seq__41202_41696;
var G__41733 = chunk__41204_41697;
var G__41734 = count__41205_41698;
var G__41735 = (i__41206_41699 + (1));
seq__41202_41696 = G__41732;
chunk__41204_41697 = G__41733;
count__41205_41698 = G__41734;
i__41206_41699 = G__41735;
continue;
} else {
var G__41736 = seq__41202_41696;
var G__41737 = chunk__41204_41697;
var G__41738 = count__41205_41698;
var G__41739 = (i__41206_41699 + (1));
seq__41202_41696 = G__41736;
chunk__41204_41697 = G__41737;
count__41205_41698 = G__41738;
i__41206_41699 = G__41739;
continue;
}
} else {
var temp__5735__auto___41740 = cljs.core.seq(seq__41202_41696);
if(temp__5735__auto___41740){
var seq__41202_41741__$1 = temp__5735__auto___41740;
if(cljs.core.chunked_seq_QMARK_(seq__41202_41741__$1)){
var c__4609__auto___41742 = cljs.core.chunk_first(seq__41202_41741__$1);
var G__41743 = cljs.core.chunk_rest(seq__41202_41741__$1);
var G__41744 = c__4609__auto___41742;
var G__41745 = cljs.core.count(c__4609__auto___41742);
var G__41746 = (0);
seq__41202_41696 = G__41743;
chunk__41204_41697 = G__41744;
count__41205_41698 = G__41745;
i__41206_41699 = G__41746;
continue;
} else {
var child_struct_41747 = cljs.core.first(seq__41202_41741__$1);
if((!((child_struct_41747 == null)))){
if(typeof child_struct_41747 === 'string'){
var text_41748 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_41748),child_struct_41747].join(''));
} else {
var children_41749 = shadow.dom.svg_node(child_struct_41747);
if(cljs.core.seq_QMARK_(children_41749)){
var seq__41246_41750 = cljs.core.seq(children_41749);
var chunk__41248_41751 = null;
var count__41249_41752 = (0);
var i__41250_41753 = (0);
while(true){
if((i__41250_41753 < count__41249_41752)){
var child_41754 = chunk__41248_41751.cljs$core$IIndexed$_nth$arity$2(null,i__41250_41753);
if(cljs.core.truth_(child_41754)){
node.appendChild(child_41754);


var G__41755 = seq__41246_41750;
var G__41756 = chunk__41248_41751;
var G__41757 = count__41249_41752;
var G__41758 = (i__41250_41753 + (1));
seq__41246_41750 = G__41755;
chunk__41248_41751 = G__41756;
count__41249_41752 = G__41757;
i__41250_41753 = G__41758;
continue;
} else {
var G__41760 = seq__41246_41750;
var G__41761 = chunk__41248_41751;
var G__41762 = count__41249_41752;
var G__41763 = (i__41250_41753 + (1));
seq__41246_41750 = G__41760;
chunk__41248_41751 = G__41761;
count__41249_41752 = G__41762;
i__41250_41753 = G__41763;
continue;
}
} else {
var temp__5735__auto___41764__$1 = cljs.core.seq(seq__41246_41750);
if(temp__5735__auto___41764__$1){
var seq__41246_41765__$1 = temp__5735__auto___41764__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41246_41765__$1)){
var c__4609__auto___41766 = cljs.core.chunk_first(seq__41246_41765__$1);
var G__41767 = cljs.core.chunk_rest(seq__41246_41765__$1);
var G__41768 = c__4609__auto___41766;
var G__41769 = cljs.core.count(c__4609__auto___41766);
var G__41770 = (0);
seq__41246_41750 = G__41767;
chunk__41248_41751 = G__41768;
count__41249_41752 = G__41769;
i__41250_41753 = G__41770;
continue;
} else {
var child_41771 = cljs.core.first(seq__41246_41765__$1);
if(cljs.core.truth_(child_41771)){
node.appendChild(child_41771);


var G__41772 = cljs.core.next(seq__41246_41765__$1);
var G__41773 = null;
var G__41774 = (0);
var G__41775 = (0);
seq__41246_41750 = G__41772;
chunk__41248_41751 = G__41773;
count__41249_41752 = G__41774;
i__41250_41753 = G__41775;
continue;
} else {
var G__41777 = cljs.core.next(seq__41246_41765__$1);
var G__41778 = null;
var G__41779 = (0);
var G__41780 = (0);
seq__41246_41750 = G__41777;
chunk__41248_41751 = G__41778;
count__41249_41752 = G__41779;
i__41250_41753 = G__41780;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_41749);
}
}


var G__41782 = cljs.core.next(seq__41202_41741__$1);
var G__41783 = null;
var G__41784 = (0);
var G__41785 = (0);
seq__41202_41696 = G__41782;
chunk__41204_41697 = G__41783;
count__41205_41698 = G__41784;
i__41206_41699 = G__41785;
continue;
} else {
var G__41786 = cljs.core.next(seq__41202_41741__$1);
var G__41787 = null;
var G__41788 = (0);
var G__41789 = (0);
seq__41202_41696 = G__41786;
chunk__41204_41697 = G__41787;
count__41205_41698 = G__41788;
i__41206_41699 = G__41789;
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

var G__41252_41790 = shadow.dom._to_svg;
var G__41253_41791 = "string";
var G__41254_41792 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__41252_41790,G__41253_41791,G__41254_41792);

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

var G__41265_41807 = shadow.dom._to_svg;
var G__41266_41808 = "null";
var G__41267_41809 = (function (_){
return null;
});
goog.object.set(G__41265_41807,G__41266_41808,G__41267_41809);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41810 = arguments.length;
var i__4790__auto___41811 = (0);
while(true){
if((i__4790__auto___41811 < len__4789__auto___41810)){
args__4795__auto__.push((arguments[i__4790__auto___41811]));

var G__41812 = (i__4790__auto___41811 + (1));
i__4790__auto___41811 = G__41812;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq41268){
var G__41269 = cljs.core.first(seq41268);
var seq41268__$1 = cljs.core.next(seq41268);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41269,seq41268__$1);
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
var G__41271 = arguments.length;
switch (G__41271) {
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
var G__41279_41814 = shadow.dom.dom_node(el);
var G__41280_41815 = cljs.core.name(event);
var G__41281_41816 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__41279_41814,G__41280_41815,G__41281_41816) : shadow.dom.dom_listen.call(null,G__41279_41814,G__41280_41815,G__41281_41816));

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__38325__auto___41817 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38326__auto__ = (function (){var switch__37962__auto__ = (function (state_41288){
var state_val_41289 = (state_41288[(1)]);
if((state_val_41289 === (1))){
var state_41288__$1 = state_41288;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41288__$1,(2),once_or_cleanup);
} else {
if((state_val_41289 === (2))){
var inst_41285 = (state_41288[(2)]);
var inst_41286 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_41288__$1 = (function (){var statearr_41293 = state_41288;
(statearr_41293[(7)] = inst_41285);

return statearr_41293;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_41288__$1,inst_41286);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__37963__auto__ = null;
var shadow$dom$state_machine__37963__auto____0 = (function (){
var statearr_41295 = [null,null,null,null,null,null,null,null];
(statearr_41295[(0)] = shadow$dom$state_machine__37963__auto__);

(statearr_41295[(1)] = (1));

return statearr_41295;
});
var shadow$dom$state_machine__37963__auto____1 = (function (state_41288){
while(true){
var ret_value__37964__auto__ = (function (){try{while(true){
var result__37965__auto__ = switch__37962__auto__(state_41288);
if(cljs.core.keyword_identical_QMARK_(result__37965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37965__auto__;
}
break;
}
}catch (e41298){if((e41298 instanceof Object)){
var ex__37966__auto__ = e41298;
var statearr_41299_41819 = state_41288;
(statearr_41299_41819[(5)] = ex__37966__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41298;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41822 = state_41288;
state_41288 = G__41822;
continue;
} else {
return ret_value__37964__auto__;
}
break;
}
});
shadow$dom$state_machine__37963__auto__ = function(state_41288){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__37963__auto____0.call(this);
case 1:
return shadow$dom$state_machine__37963__auto____1.call(this,state_41288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__37963__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__37963__auto____0;
shadow$dom$state_machine__37963__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__37963__auto____1;
return shadow$dom$state_machine__37963__auto__;
})()
})();
var state__38327__auto__ = (function (){var statearr_41301 = (f__38326__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38326__auto__.cljs$core$IFn$_invoke$arity$0() : f__38326__auto__.call(null));
(statearr_41301[(6)] = c__38325__auto___41817);

return statearr_41301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38327__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
