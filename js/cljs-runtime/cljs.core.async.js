goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__38418 = arguments.length;
switch (G__38418) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38419 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38419 = (function (f,blockable,meta38420){
this.f = f;
this.blockable = blockable;
this.meta38420 = meta38420;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38419.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38421,meta38420__$1){
var self__ = this;
var _38421__$1 = this;
return (new cljs.core.async.t_cljs$core$async38419(self__.f,self__.blockable,meta38420__$1));
}));

(cljs.core.async.t_cljs$core$async38419.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38421){
var self__ = this;
var _38421__$1 = this;
return self__.meta38420;
}));

(cljs.core.async.t_cljs$core$async38419.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38419.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async38419.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async38419.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async38419.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta38420","meta38420",935340724,null)], null);
}));

(cljs.core.async.t_cljs$core$async38419.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38419.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38419");

(cljs.core.async.t_cljs$core$async38419.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38419");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38419.
 */
cljs.core.async.__GT_t_cljs$core$async38419 = (function cljs$core$async$__GT_t_cljs$core$async38419(f__$1,blockable__$1,meta38420){
return (new cljs.core.async.t_cljs$core$async38419(f__$1,blockable__$1,meta38420));
});

}

return (new cljs.core.async.t_cljs$core$async38419(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__38428 = arguments.length;
switch (G__38428) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__38430 = arguments.length;
switch (G__38430) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__38432 = arguments.length;
switch (G__38432) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_40710 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_40710) : fn1.call(null,val_40710));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_40710) : fn1.call(null,val_40710));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__38438 = arguments.length;
switch (G__38438) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___40719 = n;
var x_40720 = (0);
while(true){
if((x_40720 < n__4666__auto___40719)){
(a[x_40720] = x_40720);

var G__40723 = (x_40720 + (1));
x_40720 = G__40723;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38440 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38440 = (function (flag,meta38441){
this.flag = flag;
this.meta38441 = meta38441;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38442,meta38441__$1){
var self__ = this;
var _38442__$1 = this;
return (new cljs.core.async.t_cljs$core$async38440(self__.flag,meta38441__$1));
}));

(cljs.core.async.t_cljs$core$async38440.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38442){
var self__ = this;
var _38442__$1 = this;
return self__.meta38441;
}));

(cljs.core.async.t_cljs$core$async38440.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38440.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async38440.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async38440.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async38440.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta38441","meta38441",-1864735203,null)], null);
}));

(cljs.core.async.t_cljs$core$async38440.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38440.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38440");

(cljs.core.async.t_cljs$core$async38440.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38440");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38440.
 */
cljs.core.async.__GT_t_cljs$core$async38440 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async38440(flag__$1,meta38441){
return (new cljs.core.async.t_cljs$core$async38440(flag__$1,meta38441));
});

}

return (new cljs.core.async.t_cljs$core$async38440(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38443 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38443 = (function (flag,cb,meta38444){
this.flag = flag;
this.cb = cb;
this.meta38444 = meta38444;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38443.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38445,meta38444__$1){
var self__ = this;
var _38445__$1 = this;
return (new cljs.core.async.t_cljs$core$async38443(self__.flag,self__.cb,meta38444__$1));
}));

(cljs.core.async.t_cljs$core$async38443.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38445){
var self__ = this;
var _38445__$1 = this;
return self__.meta38444;
}));

(cljs.core.async.t_cljs$core$async38443.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38443.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async38443.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async38443.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async38443.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta38444","meta38444",-715284945,null)], null);
}));

(cljs.core.async.t_cljs$core$async38443.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38443.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38443");

(cljs.core.async.t_cljs$core$async38443.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38443");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38443.
 */
cljs.core.async.__GT_t_cljs$core$async38443 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async38443(flag__$1,cb__$1,meta38444){
return (new cljs.core.async.t_cljs$core$async38443(flag__$1,cb__$1,meta38444));
});

}

return (new cljs.core.async.t_cljs$core$async38443(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__38461_SHARP_){
var G__38463 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38461_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__38463) : fret.call(null,G__38463));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__38462_SHARP_){
var G__38464 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38462_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__38464) : fret.call(null,G__38464));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__40733 = (i + (1));
i = G__40733;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___40734 = arguments.length;
var i__4790__auto___40735 = (0);
while(true){
if((i__4790__auto___40735 < len__4789__auto___40734)){
args__4795__auto__.push((arguments[i__4790__auto___40735]));

var G__40736 = (i__4790__auto___40735 + (1));
i__4790__auto___40735 = G__40736;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__38470){
var map__38471 = p__38470;
var map__38471__$1 = (((((!((map__38471 == null))))?(((((map__38471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38471):map__38471);
var opts = map__38471__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq38467){
var G__38468 = cljs.core.first(seq38467);
var seq38467__$1 = cljs.core.next(seq38467);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38468,seq38467__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__38475 = arguments.length;
switch (G__38475) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__38325__auto___40750 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38326__auto__ = (function (){var switch__37962__auto__ = (function (state_38530){
var state_val_38531 = (state_38530[(1)]);
if((state_val_38531 === (7))){
var inst_38517 = (state_38530[(2)]);
var state_38530__$1 = state_38530;
var statearr_38542_40753 = state_38530__$1;
(statearr_38542_40753[(2)] = inst_38517);

(statearr_38542_40753[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38531 === (1))){
var state_38530__$1 = state_38530;
var statearr_38543_40754 = state_38530__$1;
(statearr_38543_40754[(2)] = null);

(statearr_38543_40754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38531 === (4))){
var inst_38494 = (state_38530[(7)]);
var inst_38494__$1 = (state_38530[(2)]);
var inst_38498 = (inst_38494__$1 == null);
var state_38530__$1 = (function (){var statearr_38546 = state_38530;
(statearr_38546[(7)] = inst_38494__$1);

return statearr_38546;
})();
if(cljs.core.truth_(inst_38498)){
var statearr_38547_40757 = state_38530__$1;
(statearr_38547_40757[(1)] = (5));

} else {
var statearr_38548_40758 = state_38530__$1;
(statearr_38548_40758[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38531 === (13))){
var state_38530__$1 = state_38530;
var statearr_38549_40760 = state_38530__$1;
(statearr_38549_40760[(2)] = null);

(statearr_38549_40760[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38531 === (6))){
var inst_38494 = (state_38530[(7)]);
var state_38530__$1 = state_38530;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38530__$1,(11),to,inst_38494);
} else {
if((state_val_38531 === (3))){
var inst_38522 = (state_38530[(2)]);
var state_38530__$1 = state_38530;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38530__$1,inst_38522);
} else {
if((state_val_38531 === (12))){
var state_38530__$1 = state_38530;
var statearr_38559_40762 = state_38530__$1;
(statearr_38559_40762[(2)] = null);

(statearr_38559_40762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38531 === (2))){
var state_38530__$1 = state_38530;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38530__$1,(4),from);
} else {
if((state_val_38531 === (11))){
var inst_38510 = (state_38530[(2)]);
var state_38530__$1 = state_38530;
if(cljs.core.truth_(inst_38510)){
var statearr_38561_40763 = state_38530__$1;
(statearr_38561_40763[(1)] = (12));

} else {
var statearr_38562_40764 = state_38530__$1;
(statearr_38562_40764[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38531 === (9))){
var state_38530__$1 = state_38530;
var statearr_38564_40767 = state_38530__$1;
(statearr_38564_40767[(2)] = null);

(statearr_38564_40767[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38531 === (5))){
var state_38530__$1 = state_38530;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38566_40768 = state_38530__$1;
(statearr_38566_40768[(1)] = (8));

} else {
var statearr_38567_40769 = state_38530__$1;
(statearr_38567_40769[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38531 === (14))){
var inst_38515 = (state_38530[(2)]);
var state_38530__$1 = state_38530;
var statearr_38569_40770 = state_38530__$1;
(statearr_38569_40770[(2)] = inst_38515);

(statearr_38569_40770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38531 === (10))){
var inst_38506 = (state_38530[(2)]);
var state_38530__$1 = state_38530;
var statearr_38570_40771 = state_38530__$1;
(statearr_38570_40771[(2)] = inst_38506);

(statearr_38570_40771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38531 === (8))){
var inst_38501 = cljs.core.async.close_BANG_(to);
var state_38530__$1 = state_38530;
var statearr_38575_40772 = state_38530__$1;
(statearr_38575_40772[(2)] = inst_38501);

(statearr_38575_40772[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37963__auto__ = null;
var cljs$core$async$state_machine__37963__auto____0 = (function (){
var statearr_38581 = [null,null,null,null,null,null,null,null];
(statearr_38581[(0)] = cljs$core$async$state_machine__37963__auto__);

(statearr_38581[(1)] = (1));

return statearr_38581;
});
var cljs$core$async$state_machine__37963__auto____1 = (function (state_38530){
while(true){
var ret_value__37964__auto__ = (function (){try{while(true){
var result__37965__auto__ = switch__37962__auto__(state_38530);
if(cljs.core.keyword_identical_QMARK_(result__37965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37965__auto__;
}
break;
}
}catch (e38583){if((e38583 instanceof Object)){
var ex__37966__auto__ = e38583;
var statearr_38584_40774 = state_38530;
(statearr_38584_40774[(5)] = ex__37966__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38530);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38583;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40775 = state_38530;
state_38530 = G__40775;
continue;
} else {
return ret_value__37964__auto__;
}
break;
}
});
cljs$core$async$state_machine__37963__auto__ = function(state_38530){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37963__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37963__auto____1.call(this,state_38530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37963__auto____0;
cljs$core$async$state_machine__37963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37963__auto____1;
return cljs$core$async$state_machine__37963__auto__;
})()
})();
var state__38327__auto__ = (function (){var statearr_38585 = (f__38326__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38326__auto__.cljs$core$IFn$_invoke$arity$0() : f__38326__auto__.call(null));
(statearr_38585[(6)] = c__38325__auto___40750);

return statearr_38585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38327__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__38592){
var vec__38593 = p__38592;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38593,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38593,(1),null);
var job = vec__38593;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__38325__auto___40797 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38326__auto__ = (function (){var switch__37962__auto__ = (function (state_38608){
var state_val_38609 = (state_38608[(1)]);
if((state_val_38609 === (1))){
var state_38608__$1 = state_38608;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38608__$1,(2),res,v);
} else {
if((state_val_38609 === (2))){
var inst_38605 = (state_38608[(2)]);
var inst_38606 = cljs.core.async.close_BANG_(res);
var state_38608__$1 = (function (){var statearr_38612 = state_38608;
(statearr_38612[(7)] = inst_38605);

return statearr_38612;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38608__$1,inst_38606);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37963__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37963__auto____0 = (function (){
var statearr_38613 = [null,null,null,null,null,null,null,null];
(statearr_38613[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37963__auto__);

(statearr_38613[(1)] = (1));

return statearr_38613;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37963__auto____1 = (function (state_38608){
while(true){
var ret_value__37964__auto__ = (function (){try{while(true){
var result__37965__auto__ = switch__37962__auto__(state_38608);
if(cljs.core.keyword_identical_QMARK_(result__37965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37965__auto__;
}
break;
}
}catch (e38614){if((e38614 instanceof Object)){
var ex__37966__auto__ = e38614;
var statearr_38615_40805 = state_38608;
(statearr_38615_40805[(5)] = ex__37966__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38608);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38614;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40809 = state_38608;
state_38608 = G__40809;
continue;
} else {
return ret_value__37964__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37963__auto__ = function(state_38608){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37963__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37963__auto____1.call(this,state_38608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37963__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37963__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37963__auto__;
})()
})();
var state__38327__auto__ = (function (){var statearr_38616 = (f__38326__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38326__auto__.cljs$core$IFn$_invoke$arity$0() : f__38326__auto__.call(null));
(statearr_38616[(6)] = c__38325__auto___40797);

return statearr_38616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38327__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__38617){
var vec__38618 = p__38617;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38618,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38618,(1),null);
var job = vec__38618;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___40813 = n;
var __40814 = (0);
while(true){
if((__40814 < n__4666__auto___40813)){
var G__38621_40818 = type;
var G__38621_40819__$1 = (((G__38621_40818 instanceof cljs.core.Keyword))?G__38621_40818.fqn:null);
switch (G__38621_40819__$1) {
case "compute":
var c__38325__auto___40821 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__40814,c__38325__auto___40821,G__38621_40818,G__38621_40819__$1,n__4666__auto___40813,jobs,results,process,async){
return (function (){
var f__38326__auto__ = (function (){var switch__37962__auto__ = ((function (__40814,c__38325__auto___40821,G__38621_40818,G__38621_40819__$1,n__4666__auto___40813,jobs,results,process,async){
return (function (state_38642){
var state_val_38643 = (state_38642[(1)]);
if((state_val_38643 === (1))){
var state_38642__$1 = state_38642;
var statearr_38648_40825 = state_38642__$1;
(statearr_38648_40825[(2)] = null);

(statearr_38648_40825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38643 === (2))){
var state_38642__$1 = state_38642;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38642__$1,(4),jobs);
} else {
if((state_val_38643 === (3))){
var inst_38640 = (state_38642[(2)]);
var state_38642__$1 = state_38642;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38642__$1,inst_38640);
} else {
if((state_val_38643 === (4))){
var inst_38628 = (state_38642[(2)]);
var inst_38633 = process(inst_38628);
var state_38642__$1 = state_38642;
if(cljs.core.truth_(inst_38633)){
var statearr_38650_40830 = state_38642__$1;
(statearr_38650_40830[(1)] = (5));

} else {
var statearr_38651_40831 = state_38642__$1;
(statearr_38651_40831[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38643 === (5))){
var state_38642__$1 = state_38642;
var statearr_38652_40835 = state_38642__$1;
(statearr_38652_40835[(2)] = null);

(statearr_38652_40835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38643 === (6))){
var state_38642__$1 = state_38642;
var statearr_38653_40839 = state_38642__$1;
(statearr_38653_40839[(2)] = null);

(statearr_38653_40839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38643 === (7))){
var inst_38638 = (state_38642[(2)]);
var state_38642__$1 = state_38642;
var statearr_38655_40852 = state_38642__$1;
(statearr_38655_40852[(2)] = inst_38638);

(statearr_38655_40852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__40814,c__38325__auto___40821,G__38621_40818,G__38621_40819__$1,n__4666__auto___40813,jobs,results,process,async))
;
return ((function (__40814,switch__37962__auto__,c__38325__auto___40821,G__38621_40818,G__38621_40819__$1,n__4666__auto___40813,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37963__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37963__auto____0 = (function (){
var statearr_38656 = [null,null,null,null,null,null,null];
(statearr_38656[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37963__auto__);

(statearr_38656[(1)] = (1));

return statearr_38656;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37963__auto____1 = (function (state_38642){
while(true){
var ret_value__37964__auto__ = (function (){try{while(true){
var result__37965__auto__ = switch__37962__auto__(state_38642);
if(cljs.core.keyword_identical_QMARK_(result__37965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37965__auto__;
}
break;
}
}catch (e38657){if((e38657 instanceof Object)){
var ex__37966__auto__ = e38657;
var statearr_38658_40862 = state_38642;
(statearr_38658_40862[(5)] = ex__37966__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38657;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40863 = state_38642;
state_38642 = G__40863;
continue;
} else {
return ret_value__37964__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37963__auto__ = function(state_38642){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37963__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37963__auto____1.call(this,state_38642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37963__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37963__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37963__auto__;
})()
;})(__40814,switch__37962__auto__,c__38325__auto___40821,G__38621_40818,G__38621_40819__$1,n__4666__auto___40813,jobs,results,process,async))
})();
var state__38327__auto__ = (function (){var statearr_38659 = (f__38326__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38326__auto__.cljs$core$IFn$_invoke$arity$0() : f__38326__auto__.call(null));
(statearr_38659[(6)] = c__38325__auto___40821);

return statearr_38659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38327__auto__);
});})(__40814,c__38325__auto___40821,G__38621_40818,G__38621_40819__$1,n__4666__auto___40813,jobs,results,process,async))
);


break;
case "async":
var c__38325__auto___40864 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__40814,c__38325__auto___40864,G__38621_40818,G__38621_40819__$1,n__4666__auto___40813,jobs,results,process,async){
return (function (){
var f__38326__auto__ = (function (){var switch__37962__auto__ = ((function (__40814,c__38325__auto___40864,G__38621_40818,G__38621_40819__$1,n__4666__auto___40813,jobs,results,process,async){
return (function (state_38672){
var state_val_38673 = (state_38672[(1)]);
if((state_val_38673 === (1))){
var state_38672__$1 = state_38672;
var statearr_38674_40865 = state_38672__$1;
(statearr_38674_40865[(2)] = null);

(statearr_38674_40865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38673 === (2))){
var state_38672__$1 = state_38672;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38672__$1,(4),jobs);
} else {
if((state_val_38673 === (3))){
var inst_38670 = (state_38672[(2)]);
var state_38672__$1 = state_38672;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38672__$1,inst_38670);
} else {
if((state_val_38673 === (4))){
var inst_38662 = (state_38672[(2)]);
var inst_38663 = async(inst_38662);
var state_38672__$1 = state_38672;
if(cljs.core.truth_(inst_38663)){
var statearr_38675_40869 = state_38672__$1;
(statearr_38675_40869[(1)] = (5));

} else {
var statearr_38676_40870 = state_38672__$1;
(statearr_38676_40870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38673 === (5))){
var state_38672__$1 = state_38672;
var statearr_38677_40871 = state_38672__$1;
(statearr_38677_40871[(2)] = null);

(statearr_38677_40871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38673 === (6))){
var state_38672__$1 = state_38672;
var statearr_38679_40875 = state_38672__$1;
(statearr_38679_40875[(2)] = null);

(statearr_38679_40875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38673 === (7))){
var inst_38668 = (state_38672[(2)]);
var state_38672__$1 = state_38672;
var statearr_38680_40877 = state_38672__$1;
(statearr_38680_40877[(2)] = inst_38668);

(statearr_38680_40877[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__40814,c__38325__auto___40864,G__38621_40818,G__38621_40819__$1,n__4666__auto___40813,jobs,results,process,async))
;
return ((function (__40814,switch__37962__auto__,c__38325__auto___40864,G__38621_40818,G__38621_40819__$1,n__4666__auto___40813,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37963__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37963__auto____0 = (function (){
var statearr_38681 = [null,null,null,null,null,null,null];
(statearr_38681[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37963__auto__);

(statearr_38681[(1)] = (1));

return statearr_38681;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37963__auto____1 = (function (state_38672){
while(true){
var ret_value__37964__auto__ = (function (){try{while(true){
var result__37965__auto__ = switch__37962__auto__(state_38672);
if(cljs.core.keyword_identical_QMARK_(result__37965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37965__auto__;
}
break;
}
}catch (e38682){if((e38682 instanceof Object)){
var ex__37966__auto__ = e38682;
var statearr_38683_40880 = state_38672;
(statearr_38683_40880[(5)] = ex__37966__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38672);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38682;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40881 = state_38672;
state_38672 = G__40881;
continue;
} else {
return ret_value__37964__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37963__auto__ = function(state_38672){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37963__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37963__auto____1.call(this,state_38672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37963__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37963__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37963__auto__;
})()
;})(__40814,switch__37962__auto__,c__38325__auto___40864,G__38621_40818,G__38621_40819__$1,n__4666__auto___40813,jobs,results,process,async))
})();
var state__38327__auto__ = (function (){var statearr_38684 = (f__38326__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38326__auto__.cljs$core$IFn$_invoke$arity$0() : f__38326__auto__.call(null));
(statearr_38684[(6)] = c__38325__auto___40864);

return statearr_38684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38327__auto__);
});})(__40814,c__38325__auto___40864,G__38621_40818,G__38621_40819__$1,n__4666__auto___40813,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38621_40819__$1)].join('')));

}

var G__40882 = (__40814 + (1));
__40814 = G__40882;
continue;
} else {
}
break;
}

var c__38325__auto___40883 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38326__auto__ = (function (){var switch__37962__auto__ = (function (state_38706){
var state_val_38707 = (state_38706[(1)]);
if((state_val_38707 === (7))){
var inst_38702 = (state_38706[(2)]);
var state_38706__$1 = state_38706;
var statearr_38709_40884 = state_38706__$1;
(statearr_38709_40884[(2)] = inst_38702);

(statearr_38709_40884[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38707 === (1))){
var state_38706__$1 = state_38706;
var statearr_38710_40924 = state_38706__$1;
(statearr_38710_40924[(2)] = null);

(statearr_38710_40924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38707 === (4))){
var inst_38687 = (state_38706[(7)]);
var inst_38687__$1 = (state_38706[(2)]);
var inst_38688 = (inst_38687__$1 == null);
var state_38706__$1 = (function (){var statearr_38711 = state_38706;
(statearr_38711[(7)] = inst_38687__$1);

return statearr_38711;
})();
if(cljs.core.truth_(inst_38688)){
var statearr_38712_40925 = state_38706__$1;
(statearr_38712_40925[(1)] = (5));

} else {
var statearr_38713_40926 = state_38706__$1;
(statearr_38713_40926[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38707 === (6))){
var inst_38692 = (state_38706[(8)]);
var inst_38687 = (state_38706[(7)]);
var inst_38692__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_38693 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38694 = [inst_38687,inst_38692__$1];
var inst_38695 = (new cljs.core.PersistentVector(null,2,(5),inst_38693,inst_38694,null));
var state_38706__$1 = (function (){var statearr_38714 = state_38706;
(statearr_38714[(8)] = inst_38692__$1);

return statearr_38714;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38706__$1,(8),jobs,inst_38695);
} else {
if((state_val_38707 === (3))){
var inst_38704 = (state_38706[(2)]);
var state_38706__$1 = state_38706;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38706__$1,inst_38704);
} else {
if((state_val_38707 === (2))){
var state_38706__$1 = state_38706;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38706__$1,(4),from);
} else {
if((state_val_38707 === (9))){
var inst_38699 = (state_38706[(2)]);
var state_38706__$1 = (function (){var statearr_38719 = state_38706;
(statearr_38719[(9)] = inst_38699);

return statearr_38719;
})();
var statearr_38720_40927 = state_38706__$1;
(statearr_38720_40927[(2)] = null);

(statearr_38720_40927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38707 === (5))){
var inst_38690 = cljs.core.async.close_BANG_(jobs);
var state_38706__$1 = state_38706;
var statearr_38728_40928 = state_38706__$1;
(statearr_38728_40928[(2)] = inst_38690);

(statearr_38728_40928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38707 === (8))){
var inst_38692 = (state_38706[(8)]);
var inst_38697 = (state_38706[(2)]);
var state_38706__$1 = (function (){var statearr_38731 = state_38706;
(statearr_38731[(10)] = inst_38697);

return statearr_38731;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38706__$1,(9),results,inst_38692);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37963__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37963__auto____0 = (function (){
var statearr_38755 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38755[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37963__auto__);

(statearr_38755[(1)] = (1));

return statearr_38755;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37963__auto____1 = (function (state_38706){
while(true){
var ret_value__37964__auto__ = (function (){try{while(true){
var result__37965__auto__ = switch__37962__auto__(state_38706);
if(cljs.core.keyword_identical_QMARK_(result__37965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37965__auto__;
}
break;
}
}catch (e38756){if((e38756 instanceof Object)){
var ex__37966__auto__ = e38756;
var statearr_38757_40929 = state_38706;
(statearr_38757_40929[(5)] = ex__37966__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38756;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40930 = state_38706;
state_38706 = G__40930;
continue;
} else {
return ret_value__37964__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37963__auto__ = function(state_38706){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37963__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37963__auto____1.call(this,state_38706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37963__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37963__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37963__auto__;
})()
})();
var state__38327__auto__ = (function (){var statearr_38758 = (f__38326__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38326__auto__.cljs$core$IFn$_invoke$arity$0() : f__38326__auto__.call(null));
(statearr_38758[(6)] = c__38325__auto___40883);

return statearr_38758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38327__auto__);
}));


var c__38325__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38326__auto__ = (function (){var switch__37962__auto__ = (function (state_38797){
var state_val_38798 = (state_38797[(1)]);
if((state_val_38798 === (7))){
var inst_38793 = (state_38797[(2)]);
var state_38797__$1 = state_38797;
var statearr_38799_40931 = state_38797__$1;
(statearr_38799_40931[(2)] = inst_38793);

(statearr_38799_40931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38798 === (20))){
var state_38797__$1 = state_38797;
var statearr_38804_40932 = state_38797__$1;
(statearr_38804_40932[(2)] = null);

(statearr_38804_40932[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38798 === (1))){
var state_38797__$1 = state_38797;
var statearr_38805_40933 = state_38797__$1;
(statearr_38805_40933[(2)] = null);

(statearr_38805_40933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38798 === (4))){
var inst_38762 = (state_38797[(7)]);
var inst_38762__$1 = (state_38797[(2)]);
var inst_38763 = (inst_38762__$1 == null);
var state_38797__$1 = (function (){var statearr_38810 = state_38797;
(statearr_38810[(7)] = inst_38762__$1);

return statearr_38810;
})();
if(cljs.core.truth_(inst_38763)){
var statearr_38815_40934 = state_38797__$1;
(statearr_38815_40934[(1)] = (5));

} else {
var statearr_38816_40935 = state_38797__$1;
(statearr_38816_40935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38798 === (15))){
var inst_38775 = (state_38797[(8)]);
var state_38797__$1 = state_38797;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38797__$1,(18),to,inst_38775);
} else {
if((state_val_38798 === (21))){
var inst_38788 = (state_38797[(2)]);
var state_38797__$1 = state_38797;
var statearr_38817_40937 = state_38797__$1;
(statearr_38817_40937[(2)] = inst_38788);

(statearr_38817_40937[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38798 === (13))){
var inst_38790 = (state_38797[(2)]);
var state_38797__$1 = (function (){var statearr_38818 = state_38797;
(statearr_38818[(9)] = inst_38790);

return statearr_38818;
})();
var statearr_38819_40943 = state_38797__$1;
(statearr_38819_40943[(2)] = null);

(statearr_38819_40943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38798 === (6))){
var inst_38762 = (state_38797[(7)]);
var state_38797__$1 = state_38797;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38797__$1,(11),inst_38762);
} else {
if((state_val_38798 === (17))){
var inst_38783 = (state_38797[(2)]);
var state_38797__$1 = state_38797;
if(cljs.core.truth_(inst_38783)){
var statearr_38820_40944 = state_38797__$1;
(statearr_38820_40944[(1)] = (19));

} else {
var statearr_38822_40945 = state_38797__$1;
(statearr_38822_40945[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38798 === (3))){
var inst_38795 = (state_38797[(2)]);
var state_38797__$1 = state_38797;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38797__$1,inst_38795);
} else {
if((state_val_38798 === (12))){
var inst_38772 = (state_38797[(10)]);
var state_38797__$1 = state_38797;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38797__$1,(14),inst_38772);
} else {
if((state_val_38798 === (2))){
var state_38797__$1 = state_38797;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38797__$1,(4),results);
} else {
if((state_val_38798 === (19))){
var state_38797__$1 = state_38797;
var statearr_38831_40946 = state_38797__$1;
(statearr_38831_40946[(2)] = null);

(statearr_38831_40946[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38798 === (11))){
var inst_38772 = (state_38797[(2)]);
var state_38797__$1 = (function (){var statearr_38832 = state_38797;
(statearr_38832[(10)] = inst_38772);

return statearr_38832;
})();
var statearr_38833_40947 = state_38797__$1;
(statearr_38833_40947[(2)] = null);

(statearr_38833_40947[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38798 === (9))){
var state_38797__$1 = state_38797;
var statearr_38837_40948 = state_38797__$1;
(statearr_38837_40948[(2)] = null);

(statearr_38837_40948[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38798 === (5))){
var state_38797__$1 = state_38797;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38838_40949 = state_38797__$1;
(statearr_38838_40949[(1)] = (8));

} else {
var statearr_38839_40950 = state_38797__$1;
(statearr_38839_40950[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38798 === (14))){
var inst_38775 = (state_38797[(8)]);
var inst_38775__$1 = (state_38797[(2)]);
var inst_38776 = (inst_38775__$1 == null);
var inst_38777 = cljs.core.not(inst_38776);
var state_38797__$1 = (function (){var statearr_38840 = state_38797;
(statearr_38840[(8)] = inst_38775__$1);

return statearr_38840;
})();
if(inst_38777){
var statearr_38841_40953 = state_38797__$1;
(statearr_38841_40953[(1)] = (15));

} else {
var statearr_38842_40954 = state_38797__$1;
(statearr_38842_40954[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38798 === (16))){
var state_38797__$1 = state_38797;
var statearr_38843_40955 = state_38797__$1;
(statearr_38843_40955[(2)] = false);

(statearr_38843_40955[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38798 === (10))){
var inst_38769 = (state_38797[(2)]);
var state_38797__$1 = state_38797;
var statearr_38844_40957 = state_38797__$1;
(statearr_38844_40957[(2)] = inst_38769);

(statearr_38844_40957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38798 === (18))){
var inst_38780 = (state_38797[(2)]);
var state_38797__$1 = state_38797;
var statearr_38845_40959 = state_38797__$1;
(statearr_38845_40959[(2)] = inst_38780);

(statearr_38845_40959[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38798 === (8))){
var inst_38766 = cljs.core.async.close_BANG_(to);
var state_38797__$1 = state_38797;
var statearr_38846_40960 = state_38797__$1;
(statearr_38846_40960[(2)] = inst_38766);

(statearr_38846_40960[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37963__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37963__auto____0 = (function (){
var statearr_38847 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38847[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37963__auto__);

(statearr_38847[(1)] = (1));

return statearr_38847;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37963__auto____1 = (function (state_38797){
while(true){
var ret_value__37964__auto__ = (function (){try{while(true){
var result__37965__auto__ = switch__37962__auto__(state_38797);
if(cljs.core.keyword_identical_QMARK_(result__37965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37965__auto__;
}
break;
}
}catch (e38848){if((e38848 instanceof Object)){
var ex__37966__auto__ = e38848;
var statearr_38849_40961 = state_38797;
(statearr_38849_40961[(5)] = ex__37966__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38848;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40963 = state_38797;
state_38797 = G__40963;
continue;
} else {
return ret_value__37964__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37963__auto__ = function(state_38797){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37963__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37963__auto____1.call(this,state_38797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37963__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37963__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37963__auto__;
})()
})();
var state__38327__auto__ = (function (){var statearr_38850 = (f__38326__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38326__auto__.cljs$core$IFn$_invoke$arity$0() : f__38326__auto__.call(null));
(statearr_38850[(6)] = c__38325__auto__);

return statearr_38850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38327__auto__);
}));

return c__38325__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__38882 = arguments.length;
switch (G__38882) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__38890 = arguments.length;
switch (G__38890) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__38896 = arguments.length;
switch (G__38896) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__38325__auto___40970 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38326__auto__ = (function (){var switch__37962__auto__ = (function (state_38926){
var state_val_38927 = (state_38926[(1)]);
if((state_val_38927 === (7))){
var inst_38922 = (state_38926[(2)]);
var state_38926__$1 = state_38926;
var statearr_38931_40971 = state_38926__$1;
(statearr_38931_40971[(2)] = inst_38922);

(statearr_38931_40971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38927 === (1))){
var state_38926__$1 = state_38926;
var statearr_38932_40972 = state_38926__$1;
(statearr_38932_40972[(2)] = null);

(statearr_38932_40972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38927 === (4))){
var inst_38903 = (state_38926[(7)]);
var inst_38903__$1 = (state_38926[(2)]);
var inst_38904 = (inst_38903__$1 == null);
var state_38926__$1 = (function (){var statearr_38933 = state_38926;
(statearr_38933[(7)] = inst_38903__$1);

return statearr_38933;
})();
if(cljs.core.truth_(inst_38904)){
var statearr_38934_40973 = state_38926__$1;
(statearr_38934_40973[(1)] = (5));

} else {
var statearr_38935_40974 = state_38926__$1;
(statearr_38935_40974[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38927 === (13))){
var state_38926__$1 = state_38926;
var statearr_38936_40975 = state_38926__$1;
(statearr_38936_40975[(2)] = null);

(statearr_38936_40975[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38927 === (6))){
var inst_38903 = (state_38926[(7)]);
var inst_38909 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_38903) : p.call(null,inst_38903));
var state_38926__$1 = state_38926;
if(cljs.core.truth_(inst_38909)){
var statearr_38937_40976 = state_38926__$1;
(statearr_38937_40976[(1)] = (9));

} else {
var statearr_38938_40977 = state_38926__$1;
(statearr_38938_40977[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38927 === (3))){
var inst_38924 = (state_38926[(2)]);
var state_38926__$1 = state_38926;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38926__$1,inst_38924);
} else {
if((state_val_38927 === (12))){
var state_38926__$1 = state_38926;
var statearr_38940_40978 = state_38926__$1;
(statearr_38940_40978[(2)] = null);

(statearr_38940_40978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38927 === (2))){
var state_38926__$1 = state_38926;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38926__$1,(4),ch);
} else {
if((state_val_38927 === (11))){
var inst_38903 = (state_38926[(7)]);
var inst_38913 = (state_38926[(2)]);
var state_38926__$1 = state_38926;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38926__$1,(8),inst_38913,inst_38903);
} else {
if((state_val_38927 === (9))){
var state_38926__$1 = state_38926;
var statearr_38941_40979 = state_38926__$1;
(statearr_38941_40979[(2)] = tc);

(statearr_38941_40979[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38927 === (5))){
var inst_38906 = cljs.core.async.close_BANG_(tc);
var inst_38907 = cljs.core.async.close_BANG_(fc);
var state_38926__$1 = (function (){var statearr_38943 = state_38926;
(statearr_38943[(8)] = inst_38906);

return statearr_38943;
})();
var statearr_38944_40985 = state_38926__$1;
(statearr_38944_40985[(2)] = inst_38907);

(statearr_38944_40985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38927 === (14))){
var inst_38920 = (state_38926[(2)]);
var state_38926__$1 = state_38926;
var statearr_38946_40986 = state_38926__$1;
(statearr_38946_40986[(2)] = inst_38920);

(statearr_38946_40986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38927 === (10))){
var state_38926__$1 = state_38926;
var statearr_38947_40987 = state_38926__$1;
(statearr_38947_40987[(2)] = fc);

(statearr_38947_40987[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38927 === (8))){
var inst_38915 = (state_38926[(2)]);
var state_38926__$1 = state_38926;
if(cljs.core.truth_(inst_38915)){
var statearr_38948_40988 = state_38926__$1;
(statearr_38948_40988[(1)] = (12));

} else {
var statearr_38949_40989 = state_38926__$1;
(statearr_38949_40989[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37963__auto__ = null;
var cljs$core$async$state_machine__37963__auto____0 = (function (){
var statearr_38952 = [null,null,null,null,null,null,null,null,null];
(statearr_38952[(0)] = cljs$core$async$state_machine__37963__auto__);

(statearr_38952[(1)] = (1));

return statearr_38952;
});
var cljs$core$async$state_machine__37963__auto____1 = (function (state_38926){
while(true){
var ret_value__37964__auto__ = (function (){try{while(true){
var result__37965__auto__ = switch__37962__auto__(state_38926);
if(cljs.core.keyword_identical_QMARK_(result__37965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37965__auto__;
}
break;
}
}catch (e38953){if((e38953 instanceof Object)){
var ex__37966__auto__ = e38953;
var statearr_38954_40994 = state_38926;
(statearr_38954_40994[(5)] = ex__37966__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38953;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40998 = state_38926;
state_38926 = G__40998;
continue;
} else {
return ret_value__37964__auto__;
}
break;
}
});
cljs$core$async$state_machine__37963__auto__ = function(state_38926){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37963__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37963__auto____1.call(this,state_38926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37963__auto____0;
cljs$core$async$state_machine__37963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37963__auto____1;
return cljs$core$async$state_machine__37963__auto__;
})()
})();
var state__38327__auto__ = (function (){var statearr_38956 = (f__38326__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38326__auto__.cljs$core$IFn$_invoke$arity$0() : f__38326__auto__.call(null));
(statearr_38956[(6)] = c__38325__auto___40970);

return statearr_38956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38327__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__38325__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38326__auto__ = (function (){var switch__37962__auto__ = (function (state_38977){
var state_val_38978 = (state_38977[(1)]);
if((state_val_38978 === (7))){
var inst_38973 = (state_38977[(2)]);
var state_38977__$1 = state_38977;
var statearr_38979_41002 = state_38977__$1;
(statearr_38979_41002[(2)] = inst_38973);

(statearr_38979_41002[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38978 === (1))){
var inst_38957 = init;
var state_38977__$1 = (function (){var statearr_38980 = state_38977;
(statearr_38980[(7)] = inst_38957);

return statearr_38980;
})();
var statearr_38981_41006 = state_38977__$1;
(statearr_38981_41006[(2)] = null);

(statearr_38981_41006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38978 === (4))){
var inst_38960 = (state_38977[(8)]);
var inst_38960__$1 = (state_38977[(2)]);
var inst_38961 = (inst_38960__$1 == null);
var state_38977__$1 = (function (){var statearr_38982 = state_38977;
(statearr_38982[(8)] = inst_38960__$1);

return statearr_38982;
})();
if(cljs.core.truth_(inst_38961)){
var statearr_38983_41007 = state_38977__$1;
(statearr_38983_41007[(1)] = (5));

} else {
var statearr_38984_41008 = state_38977__$1;
(statearr_38984_41008[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38978 === (6))){
var inst_38960 = (state_38977[(8)]);
var inst_38964 = (state_38977[(9)]);
var inst_38957 = (state_38977[(7)]);
var inst_38964__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_38957,inst_38960) : f.call(null,inst_38957,inst_38960));
var inst_38965 = cljs.core.reduced_QMARK_(inst_38964__$1);
var state_38977__$1 = (function (){var statearr_38985 = state_38977;
(statearr_38985[(9)] = inst_38964__$1);

return statearr_38985;
})();
if(inst_38965){
var statearr_38987_41009 = state_38977__$1;
(statearr_38987_41009[(1)] = (8));

} else {
var statearr_38988_41010 = state_38977__$1;
(statearr_38988_41010[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38978 === (3))){
var inst_38975 = (state_38977[(2)]);
var state_38977__$1 = state_38977;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38977__$1,inst_38975);
} else {
if((state_val_38978 === (2))){
var state_38977__$1 = state_38977;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38977__$1,(4),ch);
} else {
if((state_val_38978 === (9))){
var inst_38964 = (state_38977[(9)]);
var inst_38957 = inst_38964;
var state_38977__$1 = (function (){var statearr_38990 = state_38977;
(statearr_38990[(7)] = inst_38957);

return statearr_38990;
})();
var statearr_38991_41011 = state_38977__$1;
(statearr_38991_41011[(2)] = null);

(statearr_38991_41011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38978 === (5))){
var inst_38957 = (state_38977[(7)]);
var state_38977__$1 = state_38977;
var statearr_38992_41012 = state_38977__$1;
(statearr_38992_41012[(2)] = inst_38957);

(statearr_38992_41012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38978 === (10))){
var inst_38971 = (state_38977[(2)]);
var state_38977__$1 = state_38977;
var statearr_38993_41013 = state_38977__$1;
(statearr_38993_41013[(2)] = inst_38971);

(statearr_38993_41013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38978 === (8))){
var inst_38964 = (state_38977[(9)]);
var inst_38967 = cljs.core.deref(inst_38964);
var state_38977__$1 = state_38977;
var statearr_38994_41021 = state_38977__$1;
(statearr_38994_41021[(2)] = inst_38967);

(statearr_38994_41021[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__37963__auto__ = null;
var cljs$core$async$reduce_$_state_machine__37963__auto____0 = (function (){
var statearr_38995 = [null,null,null,null,null,null,null,null,null,null];
(statearr_38995[(0)] = cljs$core$async$reduce_$_state_machine__37963__auto__);

(statearr_38995[(1)] = (1));

return statearr_38995;
});
var cljs$core$async$reduce_$_state_machine__37963__auto____1 = (function (state_38977){
while(true){
var ret_value__37964__auto__ = (function (){try{while(true){
var result__37965__auto__ = switch__37962__auto__(state_38977);
if(cljs.core.keyword_identical_QMARK_(result__37965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37965__auto__;
}
break;
}
}catch (e38996){if((e38996 instanceof Object)){
var ex__37966__auto__ = e38996;
var statearr_38997_41024 = state_38977;
(statearr_38997_41024[(5)] = ex__37966__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38996;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41025 = state_38977;
state_38977 = G__41025;
continue;
} else {
return ret_value__37964__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__37963__auto__ = function(state_38977){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__37963__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__37963__auto____1.call(this,state_38977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__37963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__37963__auto____0;
cljs$core$async$reduce_$_state_machine__37963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__37963__auto____1;
return cljs$core$async$reduce_$_state_machine__37963__auto__;
})()
})();
var state__38327__auto__ = (function (){var statearr_38998 = (f__38326__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38326__auto__.cljs$core$IFn$_invoke$arity$0() : f__38326__auto__.call(null));
(statearr_38998[(6)] = c__38325__auto__);

return statearr_38998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38327__auto__);
}));

return c__38325__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__38325__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38326__auto__ = (function (){var switch__37962__auto__ = (function (state_39004){
var state_val_39005 = (state_39004[(1)]);
if((state_val_39005 === (1))){
var inst_38999 = cljs.core.async.reduce(f__$1,init,ch);
var state_39004__$1 = state_39004;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39004__$1,(2),inst_38999);
} else {
if((state_val_39005 === (2))){
var inst_39001 = (state_39004[(2)]);
var inst_39002 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_39001) : f__$1.call(null,inst_39001));
var state_39004__$1 = state_39004;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39004__$1,inst_39002);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__37963__auto__ = null;
var cljs$core$async$transduce_$_state_machine__37963__auto____0 = (function (){
var statearr_39006 = [null,null,null,null,null,null,null];
(statearr_39006[(0)] = cljs$core$async$transduce_$_state_machine__37963__auto__);

(statearr_39006[(1)] = (1));

return statearr_39006;
});
var cljs$core$async$transduce_$_state_machine__37963__auto____1 = (function (state_39004){
while(true){
var ret_value__37964__auto__ = (function (){try{while(true){
var result__37965__auto__ = switch__37962__auto__(state_39004);
if(cljs.core.keyword_identical_QMARK_(result__37965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37965__auto__;
}
break;
}
}catch (e39007){if((e39007 instanceof Object)){
var ex__37966__auto__ = e39007;
var statearr_39008_41033 = state_39004;
(statearr_39008_41033[(5)] = ex__37966__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39007;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41034 = state_39004;
state_39004 = G__41034;
continue;
} else {
return ret_value__37964__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__37963__auto__ = function(state_39004){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__37963__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__37963__auto____1.call(this,state_39004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__37963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__37963__auto____0;
cljs$core$async$transduce_$_state_machine__37963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__37963__auto____1;
return cljs$core$async$transduce_$_state_machine__37963__auto__;
})()
})();
var state__38327__auto__ = (function (){var statearr_39009 = (f__38326__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38326__auto__.cljs$core$IFn$_invoke$arity$0() : f__38326__auto__.call(null));
(statearr_39009[(6)] = c__38325__auto__);

return statearr_39009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38327__auto__);
}));

return c__38325__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__39012 = arguments.length;
switch (G__39012) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__38325__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38326__auto__ = (function (){var switch__37962__auto__ = (function (state_39038){
var state_val_39039 = (state_39038[(1)]);
if((state_val_39039 === (7))){
var inst_39020 = (state_39038[(2)]);
var state_39038__$1 = state_39038;
var statearr_39040_41039 = state_39038__$1;
(statearr_39040_41039[(2)] = inst_39020);

(statearr_39040_41039[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39039 === (1))){
var inst_39014 = cljs.core.seq(coll);
var inst_39015 = inst_39014;
var state_39038__$1 = (function (){var statearr_39041 = state_39038;
(statearr_39041[(7)] = inst_39015);

return statearr_39041;
})();
var statearr_39042_41040 = state_39038__$1;
(statearr_39042_41040[(2)] = null);

(statearr_39042_41040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39039 === (4))){
var inst_39015 = (state_39038[(7)]);
var inst_39018 = cljs.core.first(inst_39015);
var state_39038__$1 = state_39038;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39038__$1,(7),ch,inst_39018);
} else {
if((state_val_39039 === (13))){
var inst_39032 = (state_39038[(2)]);
var state_39038__$1 = state_39038;
var statearr_39043_41041 = state_39038__$1;
(statearr_39043_41041[(2)] = inst_39032);

(statearr_39043_41041[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39039 === (6))){
var inst_39023 = (state_39038[(2)]);
var state_39038__$1 = state_39038;
if(cljs.core.truth_(inst_39023)){
var statearr_39044_41042 = state_39038__$1;
(statearr_39044_41042[(1)] = (8));

} else {
var statearr_39045_41043 = state_39038__$1;
(statearr_39045_41043[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39039 === (3))){
var inst_39036 = (state_39038[(2)]);
var state_39038__$1 = state_39038;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39038__$1,inst_39036);
} else {
if((state_val_39039 === (12))){
var state_39038__$1 = state_39038;
var statearr_39046_41044 = state_39038__$1;
(statearr_39046_41044[(2)] = null);

(statearr_39046_41044[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39039 === (2))){
var inst_39015 = (state_39038[(7)]);
var state_39038__$1 = state_39038;
if(cljs.core.truth_(inst_39015)){
var statearr_39053_41049 = state_39038__$1;
(statearr_39053_41049[(1)] = (4));

} else {
var statearr_39054_41050 = state_39038__$1;
(statearr_39054_41050[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39039 === (11))){
var inst_39029 = cljs.core.async.close_BANG_(ch);
var state_39038__$1 = state_39038;
var statearr_39055_41051 = state_39038__$1;
(statearr_39055_41051[(2)] = inst_39029);

(statearr_39055_41051[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39039 === (9))){
var state_39038__$1 = state_39038;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39056_41052 = state_39038__$1;
(statearr_39056_41052[(1)] = (11));

} else {
var statearr_39057_41053 = state_39038__$1;
(statearr_39057_41053[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39039 === (5))){
var inst_39015 = (state_39038[(7)]);
var state_39038__$1 = state_39038;
var statearr_39058_41054 = state_39038__$1;
(statearr_39058_41054[(2)] = inst_39015);

(statearr_39058_41054[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39039 === (10))){
var inst_39034 = (state_39038[(2)]);
var state_39038__$1 = state_39038;
var statearr_39059_41055 = state_39038__$1;
(statearr_39059_41055[(2)] = inst_39034);

(statearr_39059_41055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39039 === (8))){
var inst_39015 = (state_39038[(7)]);
var inst_39025 = cljs.core.next(inst_39015);
var inst_39015__$1 = inst_39025;
var state_39038__$1 = (function (){var statearr_39061 = state_39038;
(statearr_39061[(7)] = inst_39015__$1);

return statearr_39061;
})();
var statearr_39062_41056 = state_39038__$1;
(statearr_39062_41056[(2)] = null);

(statearr_39062_41056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37963__auto__ = null;
var cljs$core$async$state_machine__37963__auto____0 = (function (){
var statearr_39064 = [null,null,null,null,null,null,null,null];
(statearr_39064[(0)] = cljs$core$async$state_machine__37963__auto__);

(statearr_39064[(1)] = (1));

return statearr_39064;
});
var cljs$core$async$state_machine__37963__auto____1 = (function (state_39038){
while(true){
var ret_value__37964__auto__ = (function (){try{while(true){
var result__37965__auto__ = switch__37962__auto__(state_39038);
if(cljs.core.keyword_identical_QMARK_(result__37965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37965__auto__;
}
break;
}
}catch (e39065){if((e39065 instanceof Object)){
var ex__37966__auto__ = e39065;
var statearr_39066_41062 = state_39038;
(statearr_39066_41062[(5)] = ex__37966__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39065;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41063 = state_39038;
state_39038 = G__41063;
continue;
} else {
return ret_value__37964__auto__;
}
break;
}
});
cljs$core$async$state_machine__37963__auto__ = function(state_39038){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37963__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37963__auto____1.call(this,state_39038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37963__auto____0;
cljs$core$async$state_machine__37963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37963__auto____1;
return cljs$core$async$state_machine__37963__auto__;
})()
})();
var state__38327__auto__ = (function (){var statearr_39067 = (f__38326__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38326__auto__.cljs$core$IFn$_invoke$arity$0() : f__38326__auto__.call(null));
(statearr_39067[(6)] = c__38325__auto__);

return statearr_39067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38327__auto__);
}));

return c__38325__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39076 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39076 = (function (ch,cs,meta39077){
this.ch = ch;
this.cs = cs;
this.meta39077 = meta39077;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39078,meta39077__$1){
var self__ = this;
var _39078__$1 = this;
return (new cljs.core.async.t_cljs$core$async39076(self__.ch,self__.cs,meta39077__$1));
}));

(cljs.core.async.t_cljs$core$async39076.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39078){
var self__ = this;
var _39078__$1 = this;
return self__.meta39077;
}));

(cljs.core.async.t_cljs$core$async39076.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39076.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async39076.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39076.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async39076.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async39076.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async39076.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta39077","meta39077",1576904311,null)], null);
}));

(cljs.core.async.t_cljs$core$async39076.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39076.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39076");

(cljs.core.async.t_cljs$core$async39076.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async39076");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39076.
 */
cljs.core.async.__GT_t_cljs$core$async39076 = (function cljs$core$async$mult_$___GT_t_cljs$core$async39076(ch__$1,cs__$1,meta39077){
return (new cljs.core.async.t_cljs$core$async39076(ch__$1,cs__$1,meta39077));
});

}

return (new cljs.core.async.t_cljs$core$async39076(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__38325__auto___41073 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38326__auto__ = (function (){var switch__37962__auto__ = (function (state_39252){
var state_val_39253 = (state_39252[(1)]);
if((state_val_39253 === (7))){
var inst_39237 = (state_39252[(2)]);
var state_39252__$1 = state_39252;
var statearr_39254_41078 = state_39252__$1;
(statearr_39254_41078[(2)] = inst_39237);

(statearr_39254_41078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39253 === (20))){
var inst_39117 = (state_39252[(7)]);
var inst_39146 = cljs.core.first(inst_39117);
var inst_39147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39146,(0),null);
var inst_39148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39146,(1),null);
var state_39252__$1 = (function (){var statearr_39255 = state_39252;
(statearr_39255[(8)] = inst_39147);

return statearr_39255;
})();
if(cljs.core.truth_(inst_39148)){
var statearr_39256_41082 = state_39252__$1;
(statearr_39256_41082[(1)] = (22));

} else {
var statearr_39257_41083 = state_39252__$1;
(statearr_39257_41083[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39253 === (27))){
var inst_39179 = (state_39252[(9)]);
var inst_39082 = (state_39252[(10)]);
var inst_39177 = (state_39252[(11)]);
var inst_39184 = (state_39252[(12)]);
var inst_39184__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_39177,inst_39179);
var inst_39185 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_39184__$1,inst_39082,done);
var state_39252__$1 = (function (){var statearr_39258 = state_39252;
(statearr_39258[(12)] = inst_39184__$1);

return statearr_39258;
})();
if(cljs.core.truth_(inst_39185)){
var statearr_39259_41095 = state_39252__$1;
(statearr_39259_41095[(1)] = (30));

} else {
var statearr_39260_41096 = state_39252__$1;
(statearr_39260_41096[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39253 === (1))){
var state_39252__$1 = state_39252;
var statearr_39261_41097 = state_39252__$1;
(statearr_39261_41097[(2)] = null);

(statearr_39261_41097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39253 === (24))){
var inst_39117 = (state_39252[(7)]);
var inst_39153 = (state_39252[(2)]);
var inst_39154 = cljs.core.next(inst_39117);
var inst_39091 = inst_39154;
var inst_39092 = null;
var inst_39093 = (0);
var inst_39094 = (0);
var state_39252__$1 = (function (){var statearr_39262 = state_39252;
(statearr_39262[(13)] = inst_39094);

(statearr_39262[(14)] = inst_39153);

(statearr_39262[(15)] = inst_39092);

(statearr_39262[(16)] = inst_39093);

(statearr_39262[(17)] = inst_39091);

return statearr_39262;
})();
var statearr_39264_41098 = state_39252__$1;
(statearr_39264_41098[(2)] = null);

(statearr_39264_41098[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39253 === (39))){
var state_39252__$1 = state_39252;
var statearr_39270_41099 = state_39252__$1;
(statearr_39270_41099[(2)] = null);

(statearr_39270_41099[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39253 === (4))){
var inst_39082 = (state_39252[(10)]);
var inst_39082__$1 = (state_39252[(2)]);
var inst_39083 = (inst_39082__$1 == null);
var state_39252__$1 = (function (){var statearr_39271 = state_39252;
(statearr_39271[(10)] = inst_39082__$1);

return statearr_39271;
})();
if(cljs.core.truth_(inst_39083)){
var statearr_39272_41100 = state_39252__$1;
(statearr_39272_41100[(1)] = (5));

} else {
var statearr_39274_41101 = state_39252__$1;
(statearr_39274_41101[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39253 === (15))){
var inst_39094 = (state_39252[(13)]);
var inst_39092 = (state_39252[(15)]);
var inst_39093 = (state_39252[(16)]);
var inst_39091 = (state_39252[(17)]);
var inst_39113 = (state_39252[(2)]);
var inst_39114 = (inst_39094 + (1));
var tmp39265 = inst_39092;
var tmp39266 = inst_39093;
var tmp39267 = inst_39091;
var inst_39091__$1 = tmp39267;
var inst_39092__$1 = tmp39265;
var inst_39093__$1 = tmp39266;
var inst_39094__$1 = inst_39114;
var state_39252__$1 = (function (){var statearr_39290 = state_39252;
(statearr_39290[(13)] = inst_39094__$1);

(statearr_39290[(18)] = inst_39113);

(statearr_39290[(15)] = inst_39092__$1);

(statearr_39290[(16)] = inst_39093__$1);

(statearr_39290[(17)] = inst_39091__$1);

return statearr_39290;
})();
var statearr_39303_41103 = state_39252__$1;
(statearr_39303_41103[(2)] = null);

(statearr_39303_41103[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39253 === (21))){
var inst_39157 = (state_39252[(2)]);
var state_39252__$1 = state_39252;
var statearr_39307_41104 = state_39252__$1;
(statearr_39307_41104[(2)] = inst_39157);

(statearr_39307_41104[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39253 === (31))){
var inst_39184 = (state_39252[(12)]);
var inst_39188 = done(null);
var inst_39189 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_39184);
var state_39252__$1 = (function (){var statearr_39311 = state_39252;
(statearr_39311[(19)] = inst_39188);

return statearr_39311;
})();
var statearr_39312_41110 = state_39252__$1;
(statearr_39312_41110[(2)] = inst_39189);

(statearr_39312_41110[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39253 === (32))){
var inst_39179 = (state_39252[(9)]);
var inst_39176 = (state_39252[(20)]);
var inst_39177 = (state_39252[(11)]);
var inst_39178 = (state_39252[(21)]);
var inst_39191 = (state_39252[(2)]);
var inst_39193 = (inst_39179 + (1));
var tmp39304 = inst_39176;
var tmp39305 = inst_39177;
var tmp39306 = inst_39178;
var inst_39176__$1 = tmp39304;
var inst_39177__$1 = tmp39305;
var inst_39178__$1 = tmp39306;
var inst_39179__$1 = inst_39193;
var state_39252__$1 = (function (){var statearr_39317 = state_39252;
(statearr_39317[(9)] = inst_39179__$1);

(statearr_39317[(20)] = inst_39176__$1);

(statearr_39317[(22)] = inst_39191);

(statearr_39317[(11)] = inst_39177__$1);

(statearr_39317[(21)] = inst_39178__$1);

return statearr_39317;
})();
var statearr_39318_41113 = state_39252__$1;
(statearr_39318_41113[(2)] = null);

(statearr_39318_41113[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39253 === (40))){
var inst_39206 = (state_39252[(23)]);
var inst_39210 = done(null);
var inst_39211 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_39206);
var state_39252__$1 = (function (){var statearr_39323 = state_39252;
(statearr_39323[(24)] = inst_39210);

return statearr_39323;
})();
var statearr_39328_41114 = state_39252__$1;
(statearr_39328_41114[(2)] = inst_39211);

(statearr_39328_41114[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39253 === (33))){
var inst_39197 = (state_39252[(25)]);
var inst_39199 = cljs.core.chunked_seq_QMARK_(inst_39197);
var state_39252__$1 = state_39252;
if(inst_39199){
var statearr_39329_41115 = state_39252__$1;
(statearr_39329_41115[(1)] = (36));

} else {
var statearr_39330_41116 = state_39252__$1;
(statearr_39330_41116[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39253 === (13))){
var inst_39103 = (state_39252[(26)]);
var inst_39106 = cljs.core.async.close_BANG_(inst_39103);
var state_39252__$1 = state_39252;
var statearr_39331_41118 = state_39252__$1;
(statearr_39331_41118[(2)] = inst_39106);

(statearr_39331_41118[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39253 === (22))){
var inst_39147 = (state_39252[(8)]);
var inst_39150 = cljs.core.async.close_BANG_(inst_39147);
var state_39252__$1 = state_39252;
var statearr_39332_41119 = state_39252__$1;
(statearr_39332_41119[(2)] = inst_39150);

(statearr_39332_41119[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39253 === (36))){
var inst_39197 = (state_39252[(25)]);
var inst_39201 = cljs.core.chunk_first(inst_39197);
var inst_39202 = cljs.core.chunk_rest(inst_39197);
var inst_39203 = cljs.core.count(inst_39201);
var inst_39176 = inst_39202;
var inst_39177 = inst_39201;
var inst_39178 = inst_39203;
var inst_39179 = (0);
var state_39252__$1 = (function (){var statearr_39333 = state_39252;
(statearr_39333[(9)] = inst_39179);

(statearr_39333[(20)] = inst_39176);

(statearr_39333[(11)] = inst_39177);

(statearr_39333[(21)] = inst_39178);

return statearr_39333;
})();
var statearr_39334_41120 = state_39252__$1;
(statearr_39334_41120[(2)] = null);

(statearr_39334_41120[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39253 === (41))){
var inst_39197 = (state_39252[(25)]);
var inst_39213 = (state_39252[(2)]);
var inst_39214 = cljs.core.next(inst_39197);
var inst_39176 = inst_39214;
var inst_39177 = null;
var inst_39178 = (0);
var inst_39179 = (0);
var state_39252__$1 = (function (){var statearr_39338 = state_39252;
(statearr_39338[(9)] = inst_39179);

(statearr_39338[(20)] = inst_39176);

(statearr_39338[(11)] = inst_39177);

(statearr_39338[(21)] = inst_39178);

(statearr_39338[(27)] = inst_39213);

return statearr_39338;
})();
var statearr_39339_41122 = state_39252__$1;
(statearr_39339_41122[(2)] = null);

(statearr_39339_41122[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39253 === (43))){
var state_39252__$1 = state_39252;
var statearr_39340_41123 = state_39252__$1;
(statearr_39340_41123[(2)] = null);

(statearr_39340_41123[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39253 === (29))){
var inst_39222 = (state_39252[(2)]);
var state_39252__$1 = state_39252;
var statearr_39341_41124 = state_39252__$1;
(statearr_39341_41124[(2)] = inst_39222);

(statearr_39341_41124[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39253 === (44))){
var inst_39234 = (state_39252[(2)]);
var state_39252__$1 = (function (){var statearr_39342 = state_39252;
(statearr_39342[(28)] = inst_39234);

return statearr_39342;
})();
var statearr_39343_41125 = state_39252__$1;
(statearr_39343_41125[(2)] = null);

(statearr_39343_41125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39253 === (6))){
var inst_39167 = (state_39252[(29)]);
var inst_39166 = cljs.core.deref(cs);
var inst_39167__$1 = cljs.core.keys(inst_39166);
var inst_39168 = cljs.core.count(inst_39167__$1);
var inst_39169 = cljs.core.reset_BANG_(dctr,inst_39168);
var inst_39175 = cljs.core.seq(inst_39167__$1);
var inst_39176 = inst_39175;
var inst_39177 = null;
var inst_39178 = (0);
var inst_39179 = (0);
var state_39252__$1 = (function (){var statearr_39344 = state_39252;
(statearr_39344[(29)] = inst_39167__$1);

(statearr_39344[(30)] = inst_39169);

(statearr_39344[(9)] = inst_39179);

(statearr_39344[(20)] = inst_39176);

(statearr_39344[(11)] = inst_39177);

(statearr_39344[(21)] = inst_39178);

return statearr_39344;
})();
var statearr_39345_41126 = state_39252__$1;
(statearr_39345_41126[(2)] = null);

(statearr_39345_41126[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39253 === (28))){
var inst_39197 = (state_39252[(25)]);
var inst_39176 = (state_39252[(20)]);
var inst_39197__$1 = cljs.core.seq(inst_39176);
var state_39252__$1 = (function (){var statearr_39346 = state_39252;
(statearr_39346[(25)] = inst_39197__$1);

return statearr_39346;
})();
if(inst_39197__$1){
var statearr_39347_41127 = state_39252__$1;
(statearr_39347_41127[(1)] = (33));

} else {
var statearr_39349_41128 = state_39252__$1;
(statearr_39349_41128[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39253 === (25))){
var inst_39179 = (state_39252[(9)]);
var inst_39178 = (state_39252[(21)]);
var inst_39181 = (inst_39179 < inst_39178);
var inst_39182 = inst_39181;
var state_39252__$1 = state_39252;
if(cljs.core.truth_(inst_39182)){
var statearr_39350_41139 = state_39252__$1;
(statearr_39350_41139[(1)] = (27));

} else {
var statearr_39351_41140 = state_39252__$1;
(statearr_39351_41140[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39253 === (34))){
var state_39252__$1 = state_39252;
var statearr_39352_41141 = state_39252__$1;
(statearr_39352_41141[(2)] = null);

(statearr_39352_41141[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39253 === (17))){
var state_39252__$1 = state_39252;
var statearr_39354_41142 = state_39252__$1;
(statearr_39354_41142[(2)] = null);

(statearr_39354_41142[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39253 === (3))){
var inst_39239 = (state_39252[(2)]);
var state_39252__$1 = state_39252;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39252__$1,inst_39239);
} else {
if((state_val_39253 === (12))){
var inst_39162 = (state_39252[(2)]);
var state_39252__$1 = state_39252;
var statearr_39355_41143 = state_39252__$1;
(statearr_39355_41143[(2)] = inst_39162);

(statearr_39355_41143[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39253 === (2))){
var state_39252__$1 = state_39252;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39252__$1,(4),ch);
} else {
if((state_val_39253 === (23))){
var state_39252__$1 = state_39252;
var statearr_39356_41144 = state_39252__$1;
(statearr_39356_41144[(2)] = null);

(statearr_39356_41144[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39253 === (35))){
var inst_39220 = (state_39252[(2)]);
var state_39252__$1 = state_39252;
var statearr_39357_41145 = state_39252__$1;
(statearr_39357_41145[(2)] = inst_39220);

(statearr_39357_41145[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39253 === (19))){
var inst_39117 = (state_39252[(7)]);
var inst_39138 = cljs.core.chunk_first(inst_39117);
var inst_39139 = cljs.core.chunk_rest(inst_39117);
var inst_39140 = cljs.core.count(inst_39138);
var inst_39091 = inst_39139;
var inst_39092 = inst_39138;
var inst_39093 = inst_39140;
var inst_39094 = (0);
var state_39252__$1 = (function (){var statearr_39362 = state_39252;
(statearr_39362[(13)] = inst_39094);

(statearr_39362[(15)] = inst_39092);

(statearr_39362[(16)] = inst_39093);

(statearr_39362[(17)] = inst_39091);

return statearr_39362;
})();
var statearr_39367_41146 = state_39252__$1;
(statearr_39367_41146[(2)] = null);

(statearr_39367_41146[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39253 === (11))){
var inst_39117 = (state_39252[(7)]);
var inst_39091 = (state_39252[(17)]);
var inst_39117__$1 = cljs.core.seq(inst_39091);
var state_39252__$1 = (function (){var statearr_39372 = state_39252;
(statearr_39372[(7)] = inst_39117__$1);

return statearr_39372;
})();
if(inst_39117__$1){
var statearr_39373_41147 = state_39252__$1;
(statearr_39373_41147[(1)] = (16));

} else {
var statearr_39374_41148 = state_39252__$1;
(statearr_39374_41148[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39253 === (9))){
var inst_39164 = (state_39252[(2)]);
var state_39252__$1 = state_39252;
var statearr_39375_41149 = state_39252__$1;
(statearr_39375_41149[(2)] = inst_39164);

(statearr_39375_41149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39253 === (5))){
var inst_39089 = cljs.core.deref(cs);
var inst_39090 = cljs.core.seq(inst_39089);
var inst_39091 = inst_39090;
var inst_39092 = null;
var inst_39093 = (0);
var inst_39094 = (0);
var state_39252__$1 = (function (){var statearr_39377 = state_39252;
(statearr_39377[(13)] = inst_39094);

(statearr_39377[(15)] = inst_39092);

(statearr_39377[(16)] = inst_39093);

(statearr_39377[(17)] = inst_39091);

return statearr_39377;
})();
var statearr_39378_41152 = state_39252__$1;
(statearr_39378_41152[(2)] = null);

(statearr_39378_41152[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39253 === (14))){
var state_39252__$1 = state_39252;
var statearr_39379_41155 = state_39252__$1;
(statearr_39379_41155[(2)] = null);

(statearr_39379_41155[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39253 === (45))){
var inst_39231 = (state_39252[(2)]);
var state_39252__$1 = state_39252;
var statearr_39383_41156 = state_39252__$1;
(statearr_39383_41156[(2)] = inst_39231);

(statearr_39383_41156[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39253 === (26))){
var inst_39167 = (state_39252[(29)]);
var inst_39224 = (state_39252[(2)]);
var inst_39228 = cljs.core.seq(inst_39167);
var state_39252__$1 = (function (){var statearr_39384 = state_39252;
(statearr_39384[(31)] = inst_39224);

return statearr_39384;
})();
if(inst_39228){
var statearr_39385_41157 = state_39252__$1;
(statearr_39385_41157[(1)] = (42));

} else {
var statearr_39386_41158 = state_39252__$1;
(statearr_39386_41158[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39253 === (16))){
var inst_39117 = (state_39252[(7)]);
var inst_39136 = cljs.core.chunked_seq_QMARK_(inst_39117);
var state_39252__$1 = state_39252;
if(inst_39136){
var statearr_39390_41159 = state_39252__$1;
(statearr_39390_41159[(1)] = (19));

} else {
var statearr_39391_41160 = state_39252__$1;
(statearr_39391_41160[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39253 === (38))){
var inst_39217 = (state_39252[(2)]);
var state_39252__$1 = state_39252;
var statearr_39392_41162 = state_39252__$1;
(statearr_39392_41162[(2)] = inst_39217);

(statearr_39392_41162[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39253 === (30))){
var state_39252__$1 = state_39252;
var statearr_39395_41163 = state_39252__$1;
(statearr_39395_41163[(2)] = null);

(statearr_39395_41163[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39253 === (10))){
var inst_39094 = (state_39252[(13)]);
var inst_39092 = (state_39252[(15)]);
var inst_39102 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_39092,inst_39094);
var inst_39103 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39102,(0),null);
var inst_39104 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39102,(1),null);
var state_39252__$1 = (function (){var statearr_39402 = state_39252;
(statearr_39402[(26)] = inst_39103);

return statearr_39402;
})();
if(cljs.core.truth_(inst_39104)){
var statearr_39403_41164 = state_39252__$1;
(statearr_39403_41164[(1)] = (13));

} else {
var statearr_39404_41165 = state_39252__$1;
(statearr_39404_41165[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39253 === (18))){
var inst_39160 = (state_39252[(2)]);
var state_39252__$1 = state_39252;
var statearr_39405_41167 = state_39252__$1;
(statearr_39405_41167[(2)] = inst_39160);

(statearr_39405_41167[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39253 === (42))){
var state_39252__$1 = state_39252;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39252__$1,(45),dchan);
} else {
if((state_val_39253 === (37))){
var inst_39206 = (state_39252[(23)]);
var inst_39197 = (state_39252[(25)]);
var inst_39082 = (state_39252[(10)]);
var inst_39206__$1 = cljs.core.first(inst_39197);
var inst_39207 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_39206__$1,inst_39082,done);
var state_39252__$1 = (function (){var statearr_39406 = state_39252;
(statearr_39406[(23)] = inst_39206__$1);

return statearr_39406;
})();
if(cljs.core.truth_(inst_39207)){
var statearr_39407_41169 = state_39252__$1;
(statearr_39407_41169[(1)] = (39));

} else {
var statearr_39412_41170 = state_39252__$1;
(statearr_39412_41170[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39253 === (8))){
var inst_39094 = (state_39252[(13)]);
var inst_39093 = (state_39252[(16)]);
var inst_39096 = (inst_39094 < inst_39093);
var inst_39097 = inst_39096;
var state_39252__$1 = state_39252;
if(cljs.core.truth_(inst_39097)){
var statearr_39417_41171 = state_39252__$1;
(statearr_39417_41171[(1)] = (10));

} else {
var statearr_39418_41172 = state_39252__$1;
(statearr_39418_41172[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__37963__auto__ = null;
var cljs$core$async$mult_$_state_machine__37963__auto____0 = (function (){
var statearr_39455 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39455[(0)] = cljs$core$async$mult_$_state_machine__37963__auto__);

(statearr_39455[(1)] = (1));

return statearr_39455;
});
var cljs$core$async$mult_$_state_machine__37963__auto____1 = (function (state_39252){
while(true){
var ret_value__37964__auto__ = (function (){try{while(true){
var result__37965__auto__ = switch__37962__auto__(state_39252);
if(cljs.core.keyword_identical_QMARK_(result__37965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37965__auto__;
}
break;
}
}catch (e39459){if((e39459 instanceof Object)){
var ex__37966__auto__ = e39459;
var statearr_39461_41183 = state_39252;
(statearr_39461_41183[(5)] = ex__37966__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39459;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41184 = state_39252;
state_39252 = G__41184;
continue;
} else {
return ret_value__37964__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__37963__auto__ = function(state_39252){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__37963__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__37963__auto____1.call(this,state_39252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__37963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__37963__auto____0;
cljs$core$async$mult_$_state_machine__37963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__37963__auto____1;
return cljs$core$async$mult_$_state_machine__37963__auto__;
})()
})();
var state__38327__auto__ = (function (){var statearr_39462 = (f__38326__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38326__auto__.cljs$core$IFn$_invoke$arity$0() : f__38326__auto__.call(null));
(statearr_39462[(6)] = c__38325__auto___41073);

return statearr_39462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38327__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__39464 = arguments.length;
switch (G__39464) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41195 = arguments.length;
var i__4790__auto___41197 = (0);
while(true){
if((i__4790__auto___41197 < len__4789__auto___41195)){
args__4795__auto__.push((arguments[i__4790__auto___41197]));

var G__41198 = (i__4790__auto___41197 + (1));
i__4790__auto___41197 = G__41198;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__39486){
var map__39487 = p__39486;
var map__39487__$1 = (((((!((map__39487 == null))))?(((((map__39487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39487):map__39487);
var opts = map__39487__$1;
var statearr_39489_41208 = state;
(statearr_39489_41208[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_39490_41209 = state;
(statearr_39490_41209[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_39491_41210 = state;
(statearr_39491_41210[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq39479){
var G__39480 = cljs.core.first(seq39479);
var seq39479__$1 = cljs.core.next(seq39479);
var G__39481 = cljs.core.first(seq39479__$1);
var seq39479__$2 = cljs.core.next(seq39479__$1);
var G__39482 = cljs.core.first(seq39479__$2);
var seq39479__$3 = cljs.core.next(seq39479__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39480,G__39481,G__39482,seq39479__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39505 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39505 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta39506){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta39506 = meta39506;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39505.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39507,meta39506__$1){
var self__ = this;
var _39507__$1 = this;
return (new cljs.core.async.t_cljs$core$async39505(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta39506__$1));
}));

(cljs.core.async.t_cljs$core$async39505.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39507){
var self__ = this;
var _39507__$1 = this;
return self__.meta39506;
}));

(cljs.core.async.t_cljs$core$async39505.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39505.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async39505.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39505.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async39505.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async39505.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async39505.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async39505.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async39505.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta39506","meta39506",1209535541,null)], null);
}));

(cljs.core.async.t_cljs$core$async39505.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39505.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39505");

(cljs.core.async.t_cljs$core$async39505.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async39505");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39505.
 */
cljs.core.async.__GT_t_cljs$core$async39505 = (function cljs$core$async$mix_$___GT_t_cljs$core$async39505(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta39506){
return (new cljs.core.async.t_cljs$core$async39505(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta39506));
});

}

return (new cljs.core.async.t_cljs$core$async39505(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38325__auto___41223 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38326__auto__ = (function (){var switch__37962__auto__ = (function (state_39613){
var state_val_39614 = (state_39613[(1)]);
if((state_val_39614 === (7))){
var inst_39524 = (state_39613[(2)]);
var state_39613__$1 = state_39613;
var statearr_39615_41224 = state_39613__$1;
(statearr_39615_41224[(2)] = inst_39524);

(statearr_39615_41224[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39614 === (20))){
var inst_39536 = (state_39613[(7)]);
var state_39613__$1 = state_39613;
var statearr_39616_41225 = state_39613__$1;
(statearr_39616_41225[(2)] = inst_39536);

(statearr_39616_41225[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39614 === (27))){
var state_39613__$1 = state_39613;
var statearr_39617_41226 = state_39613__$1;
(statearr_39617_41226[(2)] = null);

(statearr_39617_41226[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39614 === (1))){
var inst_39511 = (state_39613[(8)]);
var inst_39511__$1 = calc_state();
var inst_39513 = (inst_39511__$1 == null);
var inst_39514 = cljs.core.not(inst_39513);
var state_39613__$1 = (function (){var statearr_39618 = state_39613;
(statearr_39618[(8)] = inst_39511__$1);

return statearr_39618;
})();
if(inst_39514){
var statearr_39619_41233 = state_39613__$1;
(statearr_39619_41233[(1)] = (2));

} else {
var statearr_39620_41234 = state_39613__$1;
(statearr_39620_41234[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39614 === (24))){
var inst_39586 = (state_39613[(9)]);
var inst_39563 = (state_39613[(10)]);
var inst_39572 = (state_39613[(11)]);
var inst_39586__$1 = (inst_39563.cljs$core$IFn$_invoke$arity$1 ? inst_39563.cljs$core$IFn$_invoke$arity$1(inst_39572) : inst_39563.call(null,inst_39572));
var state_39613__$1 = (function (){var statearr_39621 = state_39613;
(statearr_39621[(9)] = inst_39586__$1);

return statearr_39621;
})();
if(cljs.core.truth_(inst_39586__$1)){
var statearr_39622_41235 = state_39613__$1;
(statearr_39622_41235[(1)] = (29));

} else {
var statearr_39623_41236 = state_39613__$1;
(statearr_39623_41236[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39614 === (4))){
var inst_39527 = (state_39613[(2)]);
var state_39613__$1 = state_39613;
if(cljs.core.truth_(inst_39527)){
var statearr_39624_41237 = state_39613__$1;
(statearr_39624_41237[(1)] = (8));

} else {
var statearr_39625_41238 = state_39613__$1;
(statearr_39625_41238[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39614 === (15))){
var inst_39556 = (state_39613[(2)]);
var state_39613__$1 = state_39613;
if(cljs.core.truth_(inst_39556)){
var statearr_39627_41239 = state_39613__$1;
(statearr_39627_41239[(1)] = (19));

} else {
var statearr_39628_41240 = state_39613__$1;
(statearr_39628_41240[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39614 === (21))){
var inst_39561 = (state_39613[(12)]);
var inst_39561__$1 = (state_39613[(2)]);
var inst_39563 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39561__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39564 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39561__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39565 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39561__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_39613__$1 = (function (){var statearr_39629 = state_39613;
(statearr_39629[(10)] = inst_39563);

(statearr_39629[(12)] = inst_39561__$1);

(statearr_39629[(13)] = inst_39564);

return statearr_39629;
})();
return cljs.core.async.ioc_alts_BANG_(state_39613__$1,(22),inst_39565);
} else {
if((state_val_39614 === (31))){
var inst_39594 = (state_39613[(2)]);
var state_39613__$1 = state_39613;
if(cljs.core.truth_(inst_39594)){
var statearr_39635_41241 = state_39613__$1;
(statearr_39635_41241[(1)] = (32));

} else {
var statearr_39637_41242 = state_39613__$1;
(statearr_39637_41242[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39614 === (32))){
var inst_39571 = (state_39613[(14)]);
var state_39613__$1 = state_39613;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39613__$1,(35),out,inst_39571);
} else {
if((state_val_39614 === (33))){
var inst_39561 = (state_39613[(12)]);
var inst_39536 = inst_39561;
var state_39613__$1 = (function (){var statearr_39643 = state_39613;
(statearr_39643[(7)] = inst_39536);

return statearr_39643;
})();
var statearr_39644_41243 = state_39613__$1;
(statearr_39644_41243[(2)] = null);

(statearr_39644_41243[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39614 === (13))){
var inst_39536 = (state_39613[(7)]);
var inst_39543 = inst_39536.cljs$lang$protocol_mask$partition0$;
var inst_39544 = (inst_39543 & (64));
var inst_39546 = inst_39536.cljs$core$ISeq$;
var inst_39547 = (cljs.core.PROTOCOL_SENTINEL === inst_39546);
var inst_39548 = ((inst_39544) || (inst_39547));
var state_39613__$1 = state_39613;
if(cljs.core.truth_(inst_39548)){
var statearr_39645_41244 = state_39613__$1;
(statearr_39645_41244[(1)] = (16));

} else {
var statearr_39646_41245 = state_39613__$1;
(statearr_39646_41245[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39614 === (22))){
var inst_39571 = (state_39613[(14)]);
var inst_39572 = (state_39613[(11)]);
var inst_39570 = (state_39613[(2)]);
var inst_39571__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39570,(0),null);
var inst_39572__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39570,(1),null);
var inst_39573 = (inst_39571__$1 == null);
var inst_39574 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39572__$1,change);
var inst_39575 = ((inst_39573) || (inst_39574));
var state_39613__$1 = (function (){var statearr_39649 = state_39613;
(statearr_39649[(14)] = inst_39571__$1);

(statearr_39649[(11)] = inst_39572__$1);

return statearr_39649;
})();
if(cljs.core.truth_(inst_39575)){
var statearr_39650_41255 = state_39613__$1;
(statearr_39650_41255[(1)] = (23));

} else {
var statearr_39651_41256 = state_39613__$1;
(statearr_39651_41256[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39614 === (36))){
var inst_39561 = (state_39613[(12)]);
var inst_39536 = inst_39561;
var state_39613__$1 = (function (){var statearr_39652 = state_39613;
(statearr_39652[(7)] = inst_39536);

return statearr_39652;
})();
var statearr_39653_41257 = state_39613__$1;
(statearr_39653_41257[(2)] = null);

(statearr_39653_41257[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39614 === (29))){
var inst_39586 = (state_39613[(9)]);
var state_39613__$1 = state_39613;
var statearr_39654_41258 = state_39613__$1;
(statearr_39654_41258[(2)] = inst_39586);

(statearr_39654_41258[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39614 === (6))){
var state_39613__$1 = state_39613;
var statearr_39659_41259 = state_39613__$1;
(statearr_39659_41259[(2)] = false);

(statearr_39659_41259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39614 === (28))){
var inst_39582 = (state_39613[(2)]);
var inst_39583 = calc_state();
var inst_39536 = inst_39583;
var state_39613__$1 = (function (){var statearr_39660 = state_39613;
(statearr_39660[(7)] = inst_39536);

(statearr_39660[(15)] = inst_39582);

return statearr_39660;
})();
var statearr_39661_41260 = state_39613__$1;
(statearr_39661_41260[(2)] = null);

(statearr_39661_41260[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39614 === (25))){
var inst_39608 = (state_39613[(2)]);
var state_39613__$1 = state_39613;
var statearr_39662_41261 = state_39613__$1;
(statearr_39662_41261[(2)] = inst_39608);

(statearr_39662_41261[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39614 === (34))){
var inst_39606 = (state_39613[(2)]);
var state_39613__$1 = state_39613;
var statearr_39663_41262 = state_39613__$1;
(statearr_39663_41262[(2)] = inst_39606);

(statearr_39663_41262[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39614 === (17))){
var state_39613__$1 = state_39613;
var statearr_39664_41263 = state_39613__$1;
(statearr_39664_41263[(2)] = false);

(statearr_39664_41263[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39614 === (3))){
var state_39613__$1 = state_39613;
var statearr_39665_41264 = state_39613__$1;
(statearr_39665_41264[(2)] = false);

(statearr_39665_41264[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39614 === (12))){
var inst_39610 = (state_39613[(2)]);
var state_39613__$1 = state_39613;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39613__$1,inst_39610);
} else {
if((state_val_39614 === (2))){
var inst_39511 = (state_39613[(8)]);
var inst_39516 = inst_39511.cljs$lang$protocol_mask$partition0$;
var inst_39517 = (inst_39516 & (64));
var inst_39518 = inst_39511.cljs$core$ISeq$;
var inst_39519 = (cljs.core.PROTOCOL_SENTINEL === inst_39518);
var inst_39520 = ((inst_39517) || (inst_39519));
var state_39613__$1 = state_39613;
if(cljs.core.truth_(inst_39520)){
var statearr_39667_41272 = state_39613__$1;
(statearr_39667_41272[(1)] = (5));

} else {
var statearr_39668_41273 = state_39613__$1;
(statearr_39668_41273[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39614 === (23))){
var inst_39571 = (state_39613[(14)]);
var inst_39577 = (inst_39571 == null);
var state_39613__$1 = state_39613;
if(cljs.core.truth_(inst_39577)){
var statearr_39669_41274 = state_39613__$1;
(statearr_39669_41274[(1)] = (26));

} else {
var statearr_39671_41275 = state_39613__$1;
(statearr_39671_41275[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39614 === (35))){
var inst_39597 = (state_39613[(2)]);
var state_39613__$1 = state_39613;
if(cljs.core.truth_(inst_39597)){
var statearr_39672_41276 = state_39613__$1;
(statearr_39672_41276[(1)] = (36));

} else {
var statearr_39673_41277 = state_39613__$1;
(statearr_39673_41277[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39614 === (19))){
var inst_39536 = (state_39613[(7)]);
var inst_39558 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_39536);
var state_39613__$1 = state_39613;
var statearr_39675_41278 = state_39613__$1;
(statearr_39675_41278[(2)] = inst_39558);

(statearr_39675_41278[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39614 === (11))){
var inst_39536 = (state_39613[(7)]);
var inst_39540 = (inst_39536 == null);
var inst_39541 = cljs.core.not(inst_39540);
var state_39613__$1 = state_39613;
if(inst_39541){
var statearr_39676_41282 = state_39613__$1;
(statearr_39676_41282[(1)] = (13));

} else {
var statearr_39677_41283 = state_39613__$1;
(statearr_39677_41283[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39614 === (9))){
var inst_39511 = (state_39613[(8)]);
var state_39613__$1 = state_39613;
var statearr_39678_41290 = state_39613__$1;
(statearr_39678_41290[(2)] = inst_39511);

(statearr_39678_41290[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39614 === (5))){
var state_39613__$1 = state_39613;
var statearr_39679_41291 = state_39613__$1;
(statearr_39679_41291[(2)] = true);

(statearr_39679_41291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39614 === (14))){
var state_39613__$1 = state_39613;
var statearr_39680_41292 = state_39613__$1;
(statearr_39680_41292[(2)] = false);

(statearr_39680_41292[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39614 === (26))){
var inst_39572 = (state_39613[(11)]);
var inst_39579 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_39572);
var state_39613__$1 = state_39613;
var statearr_39681_41294 = state_39613__$1;
(statearr_39681_41294[(2)] = inst_39579);

(statearr_39681_41294[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39614 === (16))){
var state_39613__$1 = state_39613;
var statearr_39685_41296 = state_39613__$1;
(statearr_39685_41296[(2)] = true);

(statearr_39685_41296[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39614 === (38))){
var inst_39602 = (state_39613[(2)]);
var state_39613__$1 = state_39613;
var statearr_39688_41297 = state_39613__$1;
(statearr_39688_41297[(2)] = inst_39602);

(statearr_39688_41297[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39614 === (30))){
var inst_39563 = (state_39613[(10)]);
var inst_39572 = (state_39613[(11)]);
var inst_39564 = (state_39613[(13)]);
var inst_39589 = cljs.core.empty_QMARK_(inst_39563);
var inst_39590 = (inst_39564.cljs$core$IFn$_invoke$arity$1 ? inst_39564.cljs$core$IFn$_invoke$arity$1(inst_39572) : inst_39564.call(null,inst_39572));
var inst_39591 = cljs.core.not(inst_39590);
var inst_39592 = ((inst_39589) && (inst_39591));
var state_39613__$1 = state_39613;
var statearr_39690_41300 = state_39613__$1;
(statearr_39690_41300[(2)] = inst_39592);

(statearr_39690_41300[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39614 === (10))){
var inst_39511 = (state_39613[(8)]);
var inst_39532 = (state_39613[(2)]);
var inst_39533 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39532,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39534 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39532,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39535 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39532,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_39536 = inst_39511;
var state_39613__$1 = (function (){var statearr_39691 = state_39613;
(statearr_39691[(16)] = inst_39534);

(statearr_39691[(17)] = inst_39533);

(statearr_39691[(18)] = inst_39535);

(statearr_39691[(7)] = inst_39536);

return statearr_39691;
})();
var statearr_39692_41302 = state_39613__$1;
(statearr_39692_41302[(2)] = null);

(statearr_39692_41302[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39614 === (18))){
var inst_39553 = (state_39613[(2)]);
var state_39613__$1 = state_39613;
var statearr_39693_41303 = state_39613__$1;
(statearr_39693_41303[(2)] = inst_39553);

(statearr_39693_41303[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39614 === (37))){
var state_39613__$1 = state_39613;
var statearr_39694_41304 = state_39613__$1;
(statearr_39694_41304[(2)] = null);

(statearr_39694_41304[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39614 === (8))){
var inst_39511 = (state_39613[(8)]);
var inst_39529 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_39511);
var state_39613__$1 = state_39613;
var statearr_39695_41305 = state_39613__$1;
(statearr_39695_41305[(2)] = inst_39529);

(statearr_39695_41305[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__37963__auto__ = null;
var cljs$core$async$mix_$_state_machine__37963__auto____0 = (function (){
var statearr_39696 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39696[(0)] = cljs$core$async$mix_$_state_machine__37963__auto__);

(statearr_39696[(1)] = (1));

return statearr_39696;
});
var cljs$core$async$mix_$_state_machine__37963__auto____1 = (function (state_39613){
while(true){
var ret_value__37964__auto__ = (function (){try{while(true){
var result__37965__auto__ = switch__37962__auto__(state_39613);
if(cljs.core.keyword_identical_QMARK_(result__37965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37965__auto__;
}
break;
}
}catch (e39697){if((e39697 instanceof Object)){
var ex__37966__auto__ = e39697;
var statearr_39698_41306 = state_39613;
(statearr_39698_41306[(5)] = ex__37966__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39697;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41307 = state_39613;
state_39613 = G__41307;
continue;
} else {
return ret_value__37964__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__37963__auto__ = function(state_39613){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__37963__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__37963__auto____1.call(this,state_39613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__37963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__37963__auto____0;
cljs$core$async$mix_$_state_machine__37963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__37963__auto____1;
return cljs$core$async$mix_$_state_machine__37963__auto__;
})()
})();
var state__38327__auto__ = (function (){var statearr_39699 = (f__38326__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38326__auto__.cljs$core$IFn$_invoke$arity$0() : f__38326__auto__.call(null));
(statearr_39699[(6)] = c__38325__auto___41223);

return statearr_39699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38327__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__39756 = arguments.length;
switch (G__39756) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__39774 = arguments.length;
switch (G__39774) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__39768_SHARP_){
if(cljs.core.truth_((p1__39768_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__39768_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__39768_SHARP_.call(null,topic)))){
return p1__39768_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__39768_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39775 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39775 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta39776){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta39776 = meta39776;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39775.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39777,meta39776__$1){
var self__ = this;
var _39777__$1 = this;
return (new cljs.core.async.t_cljs$core$async39775(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta39776__$1));
}));

(cljs.core.async.t_cljs$core$async39775.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39777){
var self__ = this;
var _39777__$1 = this;
return self__.meta39776;
}));

(cljs.core.async.t_cljs$core$async39775.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39775.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async39775.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39775.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async39775.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async39775.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async39775.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async39775.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta39776","meta39776",2131301839,null)], null);
}));

(cljs.core.async.t_cljs$core$async39775.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39775.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39775");

(cljs.core.async.t_cljs$core$async39775.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async39775");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39775.
 */
cljs.core.async.__GT_t_cljs$core$async39775 = (function cljs$core$async$__GT_t_cljs$core$async39775(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39776){
return (new cljs.core.async.t_cljs$core$async39775(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39776));
});

}

return (new cljs.core.async.t_cljs$core$async39775(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38325__auto___41324 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38326__auto__ = (function (){var switch__37962__auto__ = (function (state_39858){
var state_val_39859 = (state_39858[(1)]);
if((state_val_39859 === (7))){
var inst_39854 = (state_39858[(2)]);
var state_39858__$1 = state_39858;
var statearr_39860_41325 = state_39858__$1;
(statearr_39860_41325[(2)] = inst_39854);

(statearr_39860_41325[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (20))){
var state_39858__$1 = state_39858;
var statearr_39870_41326 = state_39858__$1;
(statearr_39870_41326[(2)] = null);

(statearr_39870_41326[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (1))){
var state_39858__$1 = state_39858;
var statearr_39871_41327 = state_39858__$1;
(statearr_39871_41327[(2)] = null);

(statearr_39871_41327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (24))){
var inst_39837 = (state_39858[(7)]);
var inst_39846 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_39837);
var state_39858__$1 = state_39858;
var statearr_39872_41328 = state_39858__$1;
(statearr_39872_41328[(2)] = inst_39846);

(statearr_39872_41328[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (4))){
var inst_39787 = (state_39858[(8)]);
var inst_39787__$1 = (state_39858[(2)]);
var inst_39788 = (inst_39787__$1 == null);
var state_39858__$1 = (function (){var statearr_39873 = state_39858;
(statearr_39873[(8)] = inst_39787__$1);

return statearr_39873;
})();
if(cljs.core.truth_(inst_39788)){
var statearr_39874_41329 = state_39858__$1;
(statearr_39874_41329[(1)] = (5));

} else {
var statearr_39875_41330 = state_39858__$1;
(statearr_39875_41330[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (15))){
var inst_39831 = (state_39858[(2)]);
var state_39858__$1 = state_39858;
var statearr_39876_41331 = state_39858__$1;
(statearr_39876_41331[(2)] = inst_39831);

(statearr_39876_41331[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (21))){
var inst_39851 = (state_39858[(2)]);
var state_39858__$1 = (function (){var statearr_39877 = state_39858;
(statearr_39877[(9)] = inst_39851);

return statearr_39877;
})();
var statearr_39878_41332 = state_39858__$1;
(statearr_39878_41332[(2)] = null);

(statearr_39878_41332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (13))){
var inst_39812 = (state_39858[(10)]);
var inst_39814 = cljs.core.chunked_seq_QMARK_(inst_39812);
var state_39858__$1 = state_39858;
if(inst_39814){
var statearr_39879_41333 = state_39858__$1;
(statearr_39879_41333[(1)] = (16));

} else {
var statearr_39880_41334 = state_39858__$1;
(statearr_39880_41334[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (22))){
var inst_39843 = (state_39858[(2)]);
var state_39858__$1 = state_39858;
if(cljs.core.truth_(inst_39843)){
var statearr_39882_41335 = state_39858__$1;
(statearr_39882_41335[(1)] = (23));

} else {
var statearr_39883_41336 = state_39858__$1;
(statearr_39883_41336[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (6))){
var inst_39787 = (state_39858[(8)]);
var inst_39839 = (state_39858[(11)]);
var inst_39837 = (state_39858[(7)]);
var inst_39837__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_39787) : topic_fn.call(null,inst_39787));
var inst_39838 = cljs.core.deref(mults);
var inst_39839__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39838,inst_39837__$1);
var state_39858__$1 = (function (){var statearr_39884 = state_39858;
(statearr_39884[(11)] = inst_39839__$1);

(statearr_39884[(7)] = inst_39837__$1);

return statearr_39884;
})();
if(cljs.core.truth_(inst_39839__$1)){
var statearr_39885_41337 = state_39858__$1;
(statearr_39885_41337[(1)] = (19));

} else {
var statearr_39886_41338 = state_39858__$1;
(statearr_39886_41338[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (25))){
var inst_39848 = (state_39858[(2)]);
var state_39858__$1 = state_39858;
var statearr_39887_41343 = state_39858__$1;
(statearr_39887_41343[(2)] = inst_39848);

(statearr_39887_41343[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (17))){
var inst_39812 = (state_39858[(10)]);
var inst_39822 = cljs.core.first(inst_39812);
var inst_39823 = cljs.core.async.muxch_STAR_(inst_39822);
var inst_39824 = cljs.core.async.close_BANG_(inst_39823);
var inst_39825 = cljs.core.next(inst_39812);
var inst_39798 = inst_39825;
var inst_39799 = null;
var inst_39800 = (0);
var inst_39801 = (0);
var state_39858__$1 = (function (){var statearr_39888 = state_39858;
(statearr_39888[(12)] = inst_39798);

(statearr_39888[(13)] = inst_39824);

(statearr_39888[(14)] = inst_39799);

(statearr_39888[(15)] = inst_39801);

(statearr_39888[(16)] = inst_39800);

return statearr_39888;
})();
var statearr_39889_41352 = state_39858__$1;
(statearr_39889_41352[(2)] = null);

(statearr_39889_41352[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (3))){
var inst_39856 = (state_39858[(2)]);
var state_39858__$1 = state_39858;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39858__$1,inst_39856);
} else {
if((state_val_39859 === (12))){
var inst_39833 = (state_39858[(2)]);
var state_39858__$1 = state_39858;
var statearr_39891_41354 = state_39858__$1;
(statearr_39891_41354[(2)] = inst_39833);

(statearr_39891_41354[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (2))){
var state_39858__$1 = state_39858;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39858__$1,(4),ch);
} else {
if((state_val_39859 === (23))){
var state_39858__$1 = state_39858;
var statearr_39892_41355 = state_39858__$1;
(statearr_39892_41355[(2)] = null);

(statearr_39892_41355[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (19))){
var inst_39787 = (state_39858[(8)]);
var inst_39839 = (state_39858[(11)]);
var inst_39841 = cljs.core.async.muxch_STAR_(inst_39839);
var state_39858__$1 = state_39858;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39858__$1,(22),inst_39841,inst_39787);
} else {
if((state_val_39859 === (11))){
var inst_39812 = (state_39858[(10)]);
var inst_39798 = (state_39858[(12)]);
var inst_39812__$1 = cljs.core.seq(inst_39798);
var state_39858__$1 = (function (){var statearr_39893 = state_39858;
(statearr_39893[(10)] = inst_39812__$1);

return statearr_39893;
})();
if(inst_39812__$1){
var statearr_39894_41360 = state_39858__$1;
(statearr_39894_41360[(1)] = (13));

} else {
var statearr_39895_41361 = state_39858__$1;
(statearr_39895_41361[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (9))){
var inst_39835 = (state_39858[(2)]);
var state_39858__$1 = state_39858;
var statearr_39896_41366 = state_39858__$1;
(statearr_39896_41366[(2)] = inst_39835);

(statearr_39896_41366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (5))){
var inst_39794 = cljs.core.deref(mults);
var inst_39795 = cljs.core.vals(inst_39794);
var inst_39796 = cljs.core.seq(inst_39795);
var inst_39798 = inst_39796;
var inst_39799 = null;
var inst_39800 = (0);
var inst_39801 = (0);
var state_39858__$1 = (function (){var statearr_39897 = state_39858;
(statearr_39897[(12)] = inst_39798);

(statearr_39897[(14)] = inst_39799);

(statearr_39897[(15)] = inst_39801);

(statearr_39897[(16)] = inst_39800);

return statearr_39897;
})();
var statearr_39898_41371 = state_39858__$1;
(statearr_39898_41371[(2)] = null);

(statearr_39898_41371[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (14))){
var state_39858__$1 = state_39858;
var statearr_39902_41372 = state_39858__$1;
(statearr_39902_41372[(2)] = null);

(statearr_39902_41372[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (16))){
var inst_39812 = (state_39858[(10)]);
var inst_39816 = cljs.core.chunk_first(inst_39812);
var inst_39818 = cljs.core.chunk_rest(inst_39812);
var inst_39819 = cljs.core.count(inst_39816);
var inst_39798 = inst_39818;
var inst_39799 = inst_39816;
var inst_39800 = inst_39819;
var inst_39801 = (0);
var state_39858__$1 = (function (){var statearr_39904 = state_39858;
(statearr_39904[(12)] = inst_39798);

(statearr_39904[(14)] = inst_39799);

(statearr_39904[(15)] = inst_39801);

(statearr_39904[(16)] = inst_39800);

return statearr_39904;
})();
var statearr_39905_41380 = state_39858__$1;
(statearr_39905_41380[(2)] = null);

(statearr_39905_41380[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (10))){
var inst_39798 = (state_39858[(12)]);
var inst_39799 = (state_39858[(14)]);
var inst_39801 = (state_39858[(15)]);
var inst_39800 = (state_39858[(16)]);
var inst_39806 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_39799,inst_39801);
var inst_39807 = cljs.core.async.muxch_STAR_(inst_39806);
var inst_39808 = cljs.core.async.close_BANG_(inst_39807);
var inst_39809 = (inst_39801 + (1));
var tmp39899 = inst_39798;
var tmp39900 = inst_39799;
var tmp39901 = inst_39800;
var inst_39798__$1 = tmp39899;
var inst_39799__$1 = tmp39900;
var inst_39800__$1 = tmp39901;
var inst_39801__$1 = inst_39809;
var state_39858__$1 = (function (){var statearr_39906 = state_39858;
(statearr_39906[(17)] = inst_39808);

(statearr_39906[(12)] = inst_39798__$1);

(statearr_39906[(14)] = inst_39799__$1);

(statearr_39906[(15)] = inst_39801__$1);

(statearr_39906[(16)] = inst_39800__$1);

return statearr_39906;
})();
var statearr_39907_41394 = state_39858__$1;
(statearr_39907_41394[(2)] = null);

(statearr_39907_41394[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (18))){
var inst_39828 = (state_39858[(2)]);
var state_39858__$1 = state_39858;
var statearr_39908_41395 = state_39858__$1;
(statearr_39908_41395[(2)] = inst_39828);

(statearr_39908_41395[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (8))){
var inst_39801 = (state_39858[(15)]);
var inst_39800 = (state_39858[(16)]);
var inst_39803 = (inst_39801 < inst_39800);
var inst_39804 = inst_39803;
var state_39858__$1 = state_39858;
if(cljs.core.truth_(inst_39804)){
var statearr_39909_41396 = state_39858__$1;
(statearr_39909_41396[(1)] = (10));

} else {
var statearr_39910_41397 = state_39858__$1;
(statearr_39910_41397[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37963__auto__ = null;
var cljs$core$async$state_machine__37963__auto____0 = (function (){
var statearr_39911 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39911[(0)] = cljs$core$async$state_machine__37963__auto__);

(statearr_39911[(1)] = (1));

return statearr_39911;
});
var cljs$core$async$state_machine__37963__auto____1 = (function (state_39858){
while(true){
var ret_value__37964__auto__ = (function (){try{while(true){
var result__37965__auto__ = switch__37962__auto__(state_39858);
if(cljs.core.keyword_identical_QMARK_(result__37965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37965__auto__;
}
break;
}
}catch (e39912){if((e39912 instanceof Object)){
var ex__37966__auto__ = e39912;
var statearr_39913_41400 = state_39858;
(statearr_39913_41400[(5)] = ex__37966__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39912;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41401 = state_39858;
state_39858 = G__41401;
continue;
} else {
return ret_value__37964__auto__;
}
break;
}
});
cljs$core$async$state_machine__37963__auto__ = function(state_39858){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37963__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37963__auto____1.call(this,state_39858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37963__auto____0;
cljs$core$async$state_machine__37963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37963__auto____1;
return cljs$core$async$state_machine__37963__auto__;
})()
})();
var state__38327__auto__ = (function (){var statearr_39914 = (f__38326__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38326__auto__.cljs$core$IFn$_invoke$arity$0() : f__38326__auto__.call(null));
(statearr_39914[(6)] = c__38325__auto___41324);

return statearr_39914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38327__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__39916 = arguments.length;
switch (G__39916) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__39920 = arguments.length;
switch (G__39920) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__39922 = arguments.length;
switch (G__39922) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__38325__auto___41406 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38326__auto__ = (function (){var switch__37962__auto__ = (function (state_39963){
var state_val_39964 = (state_39963[(1)]);
if((state_val_39964 === (7))){
var state_39963__$1 = state_39963;
var statearr_39965_41407 = state_39963__$1;
(statearr_39965_41407[(2)] = null);

(statearr_39965_41407[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39964 === (1))){
var state_39963__$1 = state_39963;
var statearr_39966_41408 = state_39963__$1;
(statearr_39966_41408[(2)] = null);

(statearr_39966_41408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39964 === (4))){
var inst_39925 = (state_39963[(7)]);
var inst_39927 = (inst_39925 < cnt);
var state_39963__$1 = state_39963;
if(cljs.core.truth_(inst_39927)){
var statearr_39967_41409 = state_39963__$1;
(statearr_39967_41409[(1)] = (6));

} else {
var statearr_39968_41410 = state_39963__$1;
(statearr_39968_41410[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39964 === (15))){
var inst_39959 = (state_39963[(2)]);
var state_39963__$1 = state_39963;
var statearr_39969_41411 = state_39963__$1;
(statearr_39969_41411[(2)] = inst_39959);

(statearr_39969_41411[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39964 === (13))){
var inst_39952 = cljs.core.async.close_BANG_(out);
var state_39963__$1 = state_39963;
var statearr_39970_41422 = state_39963__$1;
(statearr_39970_41422[(2)] = inst_39952);

(statearr_39970_41422[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39964 === (6))){
var state_39963__$1 = state_39963;
var statearr_39971_41424 = state_39963__$1;
(statearr_39971_41424[(2)] = null);

(statearr_39971_41424[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39964 === (3))){
var inst_39961 = (state_39963[(2)]);
var state_39963__$1 = state_39963;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39963__$1,inst_39961);
} else {
if((state_val_39964 === (12))){
var inst_39948 = (state_39963[(8)]);
var inst_39948__$1 = (state_39963[(2)]);
var inst_39949 = cljs.core.some(cljs.core.nil_QMARK_,inst_39948__$1);
var state_39963__$1 = (function (){var statearr_39972 = state_39963;
(statearr_39972[(8)] = inst_39948__$1);

return statearr_39972;
})();
if(cljs.core.truth_(inst_39949)){
var statearr_39973_41440 = state_39963__$1;
(statearr_39973_41440[(1)] = (13));

} else {
var statearr_39975_41442 = state_39963__$1;
(statearr_39975_41442[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39964 === (2))){
var inst_39924 = cljs.core.reset_BANG_(dctr,cnt);
var inst_39925 = (0);
var state_39963__$1 = (function (){var statearr_39976 = state_39963;
(statearr_39976[(9)] = inst_39924);

(statearr_39976[(7)] = inst_39925);

return statearr_39976;
})();
var statearr_39977_41451 = state_39963__$1;
(statearr_39977_41451[(2)] = null);

(statearr_39977_41451[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39964 === (11))){
var inst_39925 = (state_39963[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_39963,(10),Object,null,(9));
var inst_39934 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_39925) : chs__$1.call(null,inst_39925));
var inst_39935 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_39925) : done.call(null,inst_39925));
var inst_39936 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_39934,inst_39935);
var state_39963__$1 = state_39963;
var statearr_39978_41464 = state_39963__$1;
(statearr_39978_41464[(2)] = inst_39936);


cljs.core.async.impl.ioc_helpers.process_exception(state_39963__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39964 === (9))){
var inst_39925 = (state_39963[(7)]);
var inst_39938 = (state_39963[(2)]);
var inst_39940 = (inst_39925 + (1));
var inst_39925__$1 = inst_39940;
var state_39963__$1 = (function (){var statearr_39979 = state_39963;
(statearr_39979[(10)] = inst_39938);

(statearr_39979[(7)] = inst_39925__$1);

return statearr_39979;
})();
var statearr_39980_41471 = state_39963__$1;
(statearr_39980_41471[(2)] = null);

(statearr_39980_41471[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39964 === (5))){
var inst_39946 = (state_39963[(2)]);
var state_39963__$1 = (function (){var statearr_39981 = state_39963;
(statearr_39981[(11)] = inst_39946);

return statearr_39981;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39963__$1,(12),dchan);
} else {
if((state_val_39964 === (14))){
var inst_39948 = (state_39963[(8)]);
var inst_39954 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_39948);
var state_39963__$1 = state_39963;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39963__$1,(16),out,inst_39954);
} else {
if((state_val_39964 === (16))){
var inst_39956 = (state_39963[(2)]);
var state_39963__$1 = (function (){var statearr_39982 = state_39963;
(statearr_39982[(12)] = inst_39956);

return statearr_39982;
})();
var statearr_39983_41492 = state_39963__$1;
(statearr_39983_41492[(2)] = null);

(statearr_39983_41492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39964 === (10))){
var inst_39929 = (state_39963[(2)]);
var inst_39930 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_39963__$1 = (function (){var statearr_39984 = state_39963;
(statearr_39984[(13)] = inst_39929);

return statearr_39984;
})();
var statearr_39985_41501 = state_39963__$1;
(statearr_39985_41501[(2)] = inst_39930);


cljs.core.async.impl.ioc_helpers.process_exception(state_39963__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39964 === (8))){
var inst_39944 = (state_39963[(2)]);
var state_39963__$1 = state_39963;
var statearr_39986_41502 = state_39963__$1;
(statearr_39986_41502[(2)] = inst_39944);

(statearr_39986_41502[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37963__auto__ = null;
var cljs$core$async$state_machine__37963__auto____0 = (function (){
var statearr_39987 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39987[(0)] = cljs$core$async$state_machine__37963__auto__);

(statearr_39987[(1)] = (1));

return statearr_39987;
});
var cljs$core$async$state_machine__37963__auto____1 = (function (state_39963){
while(true){
var ret_value__37964__auto__ = (function (){try{while(true){
var result__37965__auto__ = switch__37962__auto__(state_39963);
if(cljs.core.keyword_identical_QMARK_(result__37965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37965__auto__;
}
break;
}
}catch (e39988){if((e39988 instanceof Object)){
var ex__37966__auto__ = e39988;
var statearr_39989_41503 = state_39963;
(statearr_39989_41503[(5)] = ex__37966__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39988;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41504 = state_39963;
state_39963 = G__41504;
continue;
} else {
return ret_value__37964__auto__;
}
break;
}
});
cljs$core$async$state_machine__37963__auto__ = function(state_39963){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37963__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37963__auto____1.call(this,state_39963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37963__auto____0;
cljs$core$async$state_machine__37963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37963__auto____1;
return cljs$core$async$state_machine__37963__auto__;
})()
})();
var state__38327__auto__ = (function (){var statearr_39990 = (f__38326__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38326__auto__.cljs$core$IFn$_invoke$arity$0() : f__38326__auto__.call(null));
(statearr_39990[(6)] = c__38325__auto___41406);

return statearr_39990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38327__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__39993 = arguments.length;
switch (G__39993) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38325__auto___41514 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38326__auto__ = (function (){var switch__37962__auto__ = (function (state_40036){
var state_val_40038 = (state_40036[(1)]);
if((state_val_40038 === (7))){
var inst_40010 = (state_40036[(7)]);
var inst_40011 = (state_40036[(8)]);
var inst_40010__$1 = (state_40036[(2)]);
var inst_40011__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40010__$1,(0),null);
var inst_40012 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40010__$1,(1),null);
var inst_40015 = (inst_40011__$1 == null);
var state_40036__$1 = (function (){var statearr_40043 = state_40036;
(statearr_40043[(7)] = inst_40010__$1);

(statearr_40043[(9)] = inst_40012);

(statearr_40043[(8)] = inst_40011__$1);

return statearr_40043;
})();
if(cljs.core.truth_(inst_40015)){
var statearr_40045_41520 = state_40036__$1;
(statearr_40045_41520[(1)] = (8));

} else {
var statearr_40046_41521 = state_40036__$1;
(statearr_40046_41521[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40038 === (1))){
var inst_40000 = cljs.core.vec(chs);
var inst_40001 = inst_40000;
var state_40036__$1 = (function (){var statearr_40049 = state_40036;
(statearr_40049[(10)] = inst_40001);

return statearr_40049;
})();
var statearr_40050_41523 = state_40036__$1;
(statearr_40050_41523[(2)] = null);

(statearr_40050_41523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40038 === (4))){
var inst_40001 = (state_40036[(10)]);
var state_40036__$1 = state_40036;
return cljs.core.async.ioc_alts_BANG_(state_40036__$1,(7),inst_40001);
} else {
if((state_val_40038 === (6))){
var inst_40029 = (state_40036[(2)]);
var state_40036__$1 = state_40036;
var statearr_40051_41524 = state_40036__$1;
(statearr_40051_41524[(2)] = inst_40029);

(statearr_40051_41524[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40038 === (3))){
var inst_40031 = (state_40036[(2)]);
var state_40036__$1 = state_40036;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40036__$1,inst_40031);
} else {
if((state_val_40038 === (2))){
var inst_40001 = (state_40036[(10)]);
var inst_40003 = cljs.core.count(inst_40001);
var inst_40004 = (inst_40003 > (0));
var state_40036__$1 = state_40036;
if(cljs.core.truth_(inst_40004)){
var statearr_40057_41526 = state_40036__$1;
(statearr_40057_41526[(1)] = (4));

} else {
var statearr_40058_41527 = state_40036__$1;
(statearr_40058_41527[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40038 === (11))){
var inst_40001 = (state_40036[(10)]);
var inst_40022 = (state_40036[(2)]);
var tmp40052 = inst_40001;
var inst_40001__$1 = tmp40052;
var state_40036__$1 = (function (){var statearr_40061 = state_40036;
(statearr_40061[(10)] = inst_40001__$1);

(statearr_40061[(11)] = inst_40022);

return statearr_40061;
})();
var statearr_40078_41528 = state_40036__$1;
(statearr_40078_41528[(2)] = null);

(statearr_40078_41528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40038 === (9))){
var inst_40011 = (state_40036[(8)]);
var state_40036__$1 = state_40036;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40036__$1,(11),out,inst_40011);
} else {
if((state_val_40038 === (5))){
var inst_40027 = cljs.core.async.close_BANG_(out);
var state_40036__$1 = state_40036;
var statearr_40079_41529 = state_40036__$1;
(statearr_40079_41529[(2)] = inst_40027);

(statearr_40079_41529[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40038 === (10))){
var inst_40025 = (state_40036[(2)]);
var state_40036__$1 = state_40036;
var statearr_40084_41530 = state_40036__$1;
(statearr_40084_41530[(2)] = inst_40025);

(statearr_40084_41530[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40038 === (8))){
var inst_40010 = (state_40036[(7)]);
var inst_40012 = (state_40036[(9)]);
var inst_40011 = (state_40036[(8)]);
var inst_40001 = (state_40036[(10)]);
var inst_40017 = (function (){var cs = inst_40001;
var vec__40006 = inst_40010;
var v = inst_40011;
var c = inst_40012;
return (function (p1__39991_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__39991_SHARP_);
});
})();
var inst_40018 = cljs.core.filterv(inst_40017,inst_40001);
var inst_40001__$1 = inst_40018;
var state_40036__$1 = (function (){var statearr_40087 = state_40036;
(statearr_40087[(10)] = inst_40001__$1);

return statearr_40087;
})();
var statearr_40089_41531 = state_40036__$1;
(statearr_40089_41531[(2)] = null);

(statearr_40089_41531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37963__auto__ = null;
var cljs$core$async$state_machine__37963__auto____0 = (function (){
var statearr_40093 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40093[(0)] = cljs$core$async$state_machine__37963__auto__);

(statearr_40093[(1)] = (1));

return statearr_40093;
});
var cljs$core$async$state_machine__37963__auto____1 = (function (state_40036){
while(true){
var ret_value__37964__auto__ = (function (){try{while(true){
var result__37965__auto__ = switch__37962__auto__(state_40036);
if(cljs.core.keyword_identical_QMARK_(result__37965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37965__auto__;
}
break;
}
}catch (e40095){if((e40095 instanceof Object)){
var ex__37966__auto__ = e40095;
var statearr_40096_41532 = state_40036;
(statearr_40096_41532[(5)] = ex__37966__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40095;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41533 = state_40036;
state_40036 = G__41533;
continue;
} else {
return ret_value__37964__auto__;
}
break;
}
});
cljs$core$async$state_machine__37963__auto__ = function(state_40036){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37963__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37963__auto____1.call(this,state_40036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37963__auto____0;
cljs$core$async$state_machine__37963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37963__auto____1;
return cljs$core$async$state_machine__37963__auto__;
})()
})();
var state__38327__auto__ = (function (){var statearr_40103 = (f__38326__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38326__auto__.cljs$core$IFn$_invoke$arity$0() : f__38326__auto__.call(null));
(statearr_40103[(6)] = c__38325__auto___41514);

return statearr_40103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38327__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__40114 = arguments.length;
switch (G__40114) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38325__auto___41571 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38326__auto__ = (function (){var switch__37962__auto__ = (function (state_40157){
var state_val_40158 = (state_40157[(1)]);
if((state_val_40158 === (7))){
var inst_40139 = (state_40157[(7)]);
var inst_40139__$1 = (state_40157[(2)]);
var inst_40140 = (inst_40139__$1 == null);
var inst_40141 = cljs.core.not(inst_40140);
var state_40157__$1 = (function (){var statearr_40163 = state_40157;
(statearr_40163[(7)] = inst_40139__$1);

return statearr_40163;
})();
if(inst_40141){
var statearr_40165_41581 = state_40157__$1;
(statearr_40165_41581[(1)] = (8));

} else {
var statearr_40166_41586 = state_40157__$1;
(statearr_40166_41586[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40158 === (1))){
var inst_40134 = (0);
var state_40157__$1 = (function (){var statearr_40168 = state_40157;
(statearr_40168[(8)] = inst_40134);

return statearr_40168;
})();
var statearr_40171_41587 = state_40157__$1;
(statearr_40171_41587[(2)] = null);

(statearr_40171_41587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40158 === (4))){
var state_40157__$1 = state_40157;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40157__$1,(7),ch);
} else {
if((state_val_40158 === (6))){
var inst_40152 = (state_40157[(2)]);
var state_40157__$1 = state_40157;
var statearr_40174_41588 = state_40157__$1;
(statearr_40174_41588[(2)] = inst_40152);

(statearr_40174_41588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40158 === (3))){
var inst_40154 = (state_40157[(2)]);
var inst_40155 = cljs.core.async.close_BANG_(out);
var state_40157__$1 = (function (){var statearr_40177 = state_40157;
(statearr_40177[(9)] = inst_40154);

return statearr_40177;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40157__$1,inst_40155);
} else {
if((state_val_40158 === (2))){
var inst_40134 = (state_40157[(8)]);
var inst_40136 = (inst_40134 < n);
var state_40157__$1 = state_40157;
if(cljs.core.truth_(inst_40136)){
var statearr_40181_41590 = state_40157__$1;
(statearr_40181_41590[(1)] = (4));

} else {
var statearr_40182_41591 = state_40157__$1;
(statearr_40182_41591[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40158 === (11))){
var inst_40134 = (state_40157[(8)]);
var inst_40144 = (state_40157[(2)]);
var inst_40145 = (inst_40134 + (1));
var inst_40134__$1 = inst_40145;
var state_40157__$1 = (function (){var statearr_40186 = state_40157;
(statearr_40186[(8)] = inst_40134__$1);

(statearr_40186[(10)] = inst_40144);

return statearr_40186;
})();
var statearr_40188_41592 = state_40157__$1;
(statearr_40188_41592[(2)] = null);

(statearr_40188_41592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40158 === (9))){
var state_40157__$1 = state_40157;
var statearr_40192_41593 = state_40157__$1;
(statearr_40192_41593[(2)] = null);

(statearr_40192_41593[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40158 === (5))){
var state_40157__$1 = state_40157;
var statearr_40193_41594 = state_40157__$1;
(statearr_40193_41594[(2)] = null);

(statearr_40193_41594[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40158 === (10))){
var inst_40149 = (state_40157[(2)]);
var state_40157__$1 = state_40157;
var statearr_40195_41595 = state_40157__$1;
(statearr_40195_41595[(2)] = inst_40149);

(statearr_40195_41595[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40158 === (8))){
var inst_40139 = (state_40157[(7)]);
var state_40157__$1 = state_40157;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40157__$1,(11),out,inst_40139);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37963__auto__ = null;
var cljs$core$async$state_machine__37963__auto____0 = (function (){
var statearr_40200 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40200[(0)] = cljs$core$async$state_machine__37963__auto__);

(statearr_40200[(1)] = (1));

return statearr_40200;
});
var cljs$core$async$state_machine__37963__auto____1 = (function (state_40157){
while(true){
var ret_value__37964__auto__ = (function (){try{while(true){
var result__37965__auto__ = switch__37962__auto__(state_40157);
if(cljs.core.keyword_identical_QMARK_(result__37965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37965__auto__;
}
break;
}
}catch (e40203){if((e40203 instanceof Object)){
var ex__37966__auto__ = e40203;
var statearr_40205_41596 = state_40157;
(statearr_40205_41596[(5)] = ex__37966__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40203;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41597 = state_40157;
state_40157 = G__41597;
continue;
} else {
return ret_value__37964__auto__;
}
break;
}
});
cljs$core$async$state_machine__37963__auto__ = function(state_40157){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37963__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37963__auto____1.call(this,state_40157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37963__auto____0;
cljs$core$async$state_machine__37963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37963__auto____1;
return cljs$core$async$state_machine__37963__auto__;
})()
})();
var state__38327__auto__ = (function (){var statearr_40209 = (f__38326__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38326__auto__.cljs$core$IFn$_invoke$arity$0() : f__38326__auto__.call(null));
(statearr_40209[(6)] = c__38325__auto___41571);

return statearr_40209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38327__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40212 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40212 = (function (f,ch,meta40213){
this.f = f;
this.ch = ch;
this.meta40213 = meta40213;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40214,meta40213__$1){
var self__ = this;
var _40214__$1 = this;
return (new cljs.core.async.t_cljs$core$async40212(self__.f,self__.ch,meta40213__$1));
}));

(cljs.core.async.t_cljs$core$async40212.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40214){
var self__ = this;
var _40214__$1 = this;
return self__.meta40213;
}));

(cljs.core.async.t_cljs$core$async40212.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40212.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async40212.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async40212.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40212.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40215 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40215 = (function (f,ch,meta40213,_,fn1,meta40216){
this.f = f;
this.ch = ch;
this.meta40213 = meta40213;
this._ = _;
this.fn1 = fn1;
this.meta40216 = meta40216;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40217,meta40216__$1){
var self__ = this;
var _40217__$1 = this;
return (new cljs.core.async.t_cljs$core$async40215(self__.f,self__.ch,self__.meta40213,self__._,self__.fn1,meta40216__$1));
}));

(cljs.core.async.t_cljs$core$async40215.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40217){
var self__ = this;
var _40217__$1 = this;
return self__.meta40216;
}));

(cljs.core.async.t_cljs$core$async40215.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40215.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async40215.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async40215.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__40211_SHARP_){
var G__40220 = (((p1__40211_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__40211_SHARP_) : self__.f.call(null,p1__40211_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__40220) : f1.call(null,G__40220));
});
}));

(cljs.core.async.t_cljs$core$async40215.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40213","meta40213",-607400130,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async40212","cljs.core.async/t_cljs$core$async40212",1039166681,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta40216","meta40216",919022391,null)], null);
}));

(cljs.core.async.t_cljs$core$async40215.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40215.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40215");

(cljs.core.async.t_cljs$core$async40215.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async40215");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40215.
 */
cljs.core.async.__GT_t_cljs$core$async40215 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40215(f__$1,ch__$1,meta40213__$1,___$2,fn1__$1,meta40216){
return (new cljs.core.async.t_cljs$core$async40215(f__$1,ch__$1,meta40213__$1,___$2,fn1__$1,meta40216));
});

}

return (new cljs.core.async.t_cljs$core$async40215(self__.f,self__.ch,self__.meta40213,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__40247 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__40247) : self__.f.call(null,G__40247));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async40212.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40212.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async40212.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40213","meta40213",-607400130,null)], null);
}));

(cljs.core.async.t_cljs$core$async40212.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40212.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40212");

(cljs.core.async.t_cljs$core$async40212.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async40212");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40212.
 */
cljs.core.async.__GT_t_cljs$core$async40212 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40212(f__$1,ch__$1,meta40213){
return (new cljs.core.async.t_cljs$core$async40212(f__$1,ch__$1,meta40213));
});

}

return (new cljs.core.async.t_cljs$core$async40212(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40258 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40258 = (function (f,ch,meta40259){
this.f = f;
this.ch = ch;
this.meta40259 = meta40259;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40258.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40260,meta40259__$1){
var self__ = this;
var _40260__$1 = this;
return (new cljs.core.async.t_cljs$core$async40258(self__.f,self__.ch,meta40259__$1));
}));

(cljs.core.async.t_cljs$core$async40258.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40260){
var self__ = this;
var _40260__$1 = this;
return self__.meta40259;
}));

(cljs.core.async.t_cljs$core$async40258.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40258.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async40258.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40258.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async40258.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40258.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async40258.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40259","meta40259",-1249373713,null)], null);
}));

(cljs.core.async.t_cljs$core$async40258.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40258.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40258");

(cljs.core.async.t_cljs$core$async40258.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async40258");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40258.
 */
cljs.core.async.__GT_t_cljs$core$async40258 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async40258(f__$1,ch__$1,meta40259){
return (new cljs.core.async.t_cljs$core$async40258(f__$1,ch__$1,meta40259));
});

}

return (new cljs.core.async.t_cljs$core$async40258(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40298 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40298 = (function (p,ch,meta40299){
this.p = p;
this.ch = ch;
this.meta40299 = meta40299;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40298.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40300,meta40299__$1){
var self__ = this;
var _40300__$1 = this;
return (new cljs.core.async.t_cljs$core$async40298(self__.p,self__.ch,meta40299__$1));
}));

(cljs.core.async.t_cljs$core$async40298.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40300){
var self__ = this;
var _40300__$1 = this;
return self__.meta40299;
}));

(cljs.core.async.t_cljs$core$async40298.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40298.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async40298.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async40298.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40298.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async40298.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40298.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async40298.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40299","meta40299",779416207,null)], null);
}));

(cljs.core.async.t_cljs$core$async40298.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40298.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40298");

(cljs.core.async.t_cljs$core$async40298.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async40298");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40298.
 */
cljs.core.async.__GT_t_cljs$core$async40298 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async40298(p__$1,ch__$1,meta40299){
return (new cljs.core.async.t_cljs$core$async40298(p__$1,ch__$1,meta40299));
});

}

return (new cljs.core.async.t_cljs$core$async40298(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__40311 = arguments.length;
switch (G__40311) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38325__auto___41613 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38326__auto__ = (function (){var switch__37962__auto__ = (function (state_40334){
var state_val_40335 = (state_40334[(1)]);
if((state_val_40335 === (7))){
var inst_40330 = (state_40334[(2)]);
var state_40334__$1 = state_40334;
var statearr_40336_41614 = state_40334__$1;
(statearr_40336_41614[(2)] = inst_40330);

(statearr_40336_41614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40335 === (1))){
var state_40334__$1 = state_40334;
var statearr_40338_41615 = state_40334__$1;
(statearr_40338_41615[(2)] = null);

(statearr_40338_41615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40335 === (4))){
var inst_40316 = (state_40334[(7)]);
var inst_40316__$1 = (state_40334[(2)]);
var inst_40317 = (inst_40316__$1 == null);
var state_40334__$1 = (function (){var statearr_40341 = state_40334;
(statearr_40341[(7)] = inst_40316__$1);

return statearr_40341;
})();
if(cljs.core.truth_(inst_40317)){
var statearr_40342_41616 = state_40334__$1;
(statearr_40342_41616[(1)] = (5));

} else {
var statearr_40343_41617 = state_40334__$1;
(statearr_40343_41617[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40335 === (6))){
var inst_40316 = (state_40334[(7)]);
var inst_40321 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_40316) : p.call(null,inst_40316));
var state_40334__$1 = state_40334;
if(cljs.core.truth_(inst_40321)){
var statearr_40348_41618 = state_40334__$1;
(statearr_40348_41618[(1)] = (8));

} else {
var statearr_40351_41619 = state_40334__$1;
(statearr_40351_41619[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40335 === (3))){
var inst_40332 = (state_40334[(2)]);
var state_40334__$1 = state_40334;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40334__$1,inst_40332);
} else {
if((state_val_40335 === (2))){
var state_40334__$1 = state_40334;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40334__$1,(4),ch);
} else {
if((state_val_40335 === (11))){
var inst_40324 = (state_40334[(2)]);
var state_40334__$1 = state_40334;
var statearr_40354_41620 = state_40334__$1;
(statearr_40354_41620[(2)] = inst_40324);

(statearr_40354_41620[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40335 === (9))){
var state_40334__$1 = state_40334;
var statearr_40355_41621 = state_40334__$1;
(statearr_40355_41621[(2)] = null);

(statearr_40355_41621[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40335 === (5))){
var inst_40319 = cljs.core.async.close_BANG_(out);
var state_40334__$1 = state_40334;
var statearr_40356_41622 = state_40334__$1;
(statearr_40356_41622[(2)] = inst_40319);

(statearr_40356_41622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40335 === (10))){
var inst_40327 = (state_40334[(2)]);
var state_40334__$1 = (function (){var statearr_40357 = state_40334;
(statearr_40357[(8)] = inst_40327);

return statearr_40357;
})();
var statearr_40358_41623 = state_40334__$1;
(statearr_40358_41623[(2)] = null);

(statearr_40358_41623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40335 === (8))){
var inst_40316 = (state_40334[(7)]);
var state_40334__$1 = state_40334;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40334__$1,(11),out,inst_40316);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37963__auto__ = null;
var cljs$core$async$state_machine__37963__auto____0 = (function (){
var statearr_40359 = [null,null,null,null,null,null,null,null,null];
(statearr_40359[(0)] = cljs$core$async$state_machine__37963__auto__);

(statearr_40359[(1)] = (1));

return statearr_40359;
});
var cljs$core$async$state_machine__37963__auto____1 = (function (state_40334){
while(true){
var ret_value__37964__auto__ = (function (){try{while(true){
var result__37965__auto__ = switch__37962__auto__(state_40334);
if(cljs.core.keyword_identical_QMARK_(result__37965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37965__auto__;
}
break;
}
}catch (e40360){if((e40360 instanceof Object)){
var ex__37966__auto__ = e40360;
var statearr_40361_41624 = state_40334;
(statearr_40361_41624[(5)] = ex__37966__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40360;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41625 = state_40334;
state_40334 = G__41625;
continue;
} else {
return ret_value__37964__auto__;
}
break;
}
});
cljs$core$async$state_machine__37963__auto__ = function(state_40334){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37963__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37963__auto____1.call(this,state_40334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37963__auto____0;
cljs$core$async$state_machine__37963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37963__auto____1;
return cljs$core$async$state_machine__37963__auto__;
})()
})();
var state__38327__auto__ = (function (){var statearr_40362 = (f__38326__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38326__auto__.cljs$core$IFn$_invoke$arity$0() : f__38326__auto__.call(null));
(statearr_40362[(6)] = c__38325__auto___41613);

return statearr_40362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38327__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__40364 = arguments.length;
switch (G__40364) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__38325__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38326__auto__ = (function (){var switch__37962__auto__ = (function (state_40454){
var state_val_40455 = (state_40454[(1)]);
if((state_val_40455 === (7))){
var inst_40450 = (state_40454[(2)]);
var state_40454__$1 = state_40454;
var statearr_40457_41629 = state_40454__$1;
(statearr_40457_41629[(2)] = inst_40450);

(statearr_40457_41629[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40455 === (20))){
var inst_40416 = (state_40454[(7)]);
var inst_40431 = (state_40454[(2)]);
var inst_40432 = cljs.core.next(inst_40416);
var inst_40397 = inst_40432;
var inst_40398 = null;
var inst_40399 = (0);
var inst_40400 = (0);
var state_40454__$1 = (function (){var statearr_40458 = state_40454;
(statearr_40458[(8)] = inst_40399);

(statearr_40458[(9)] = inst_40431);

(statearr_40458[(10)] = inst_40397);

(statearr_40458[(11)] = inst_40400);

(statearr_40458[(12)] = inst_40398);

return statearr_40458;
})();
var statearr_40461_41630 = state_40454__$1;
(statearr_40461_41630[(2)] = null);

(statearr_40461_41630[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40455 === (1))){
var state_40454__$1 = state_40454;
var statearr_40463_41631 = state_40454__$1;
(statearr_40463_41631[(2)] = null);

(statearr_40463_41631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40455 === (4))){
var inst_40381 = (state_40454[(13)]);
var inst_40381__$1 = (state_40454[(2)]);
var inst_40382 = (inst_40381__$1 == null);
var state_40454__$1 = (function (){var statearr_40464 = state_40454;
(statearr_40464[(13)] = inst_40381__$1);

return statearr_40464;
})();
if(cljs.core.truth_(inst_40382)){
var statearr_40465_41632 = state_40454__$1;
(statearr_40465_41632[(1)] = (5));

} else {
var statearr_40466_41633 = state_40454__$1;
(statearr_40466_41633[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40455 === (15))){
var state_40454__$1 = state_40454;
var statearr_40470_41634 = state_40454__$1;
(statearr_40470_41634[(2)] = null);

(statearr_40470_41634[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40455 === (21))){
var state_40454__$1 = state_40454;
var statearr_40471_41635 = state_40454__$1;
(statearr_40471_41635[(2)] = null);

(statearr_40471_41635[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40455 === (13))){
var inst_40399 = (state_40454[(8)]);
var inst_40397 = (state_40454[(10)]);
var inst_40400 = (state_40454[(11)]);
var inst_40398 = (state_40454[(12)]);
var inst_40411 = (state_40454[(2)]);
var inst_40412 = (inst_40400 + (1));
var tmp40467 = inst_40399;
var tmp40468 = inst_40397;
var tmp40469 = inst_40398;
var inst_40397__$1 = tmp40468;
var inst_40398__$1 = tmp40469;
var inst_40399__$1 = tmp40467;
var inst_40400__$1 = inst_40412;
var state_40454__$1 = (function (){var statearr_40472 = state_40454;
(statearr_40472[(8)] = inst_40399__$1);

(statearr_40472[(14)] = inst_40411);

(statearr_40472[(10)] = inst_40397__$1);

(statearr_40472[(11)] = inst_40400__$1);

(statearr_40472[(12)] = inst_40398__$1);

return statearr_40472;
})();
var statearr_40473_41636 = state_40454__$1;
(statearr_40473_41636[(2)] = null);

(statearr_40473_41636[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40455 === (22))){
var state_40454__$1 = state_40454;
var statearr_40474_41644 = state_40454__$1;
(statearr_40474_41644[(2)] = null);

(statearr_40474_41644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40455 === (6))){
var inst_40381 = (state_40454[(13)]);
var inst_40395 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_40381) : f.call(null,inst_40381));
var inst_40396 = cljs.core.seq(inst_40395);
var inst_40397 = inst_40396;
var inst_40398 = null;
var inst_40399 = (0);
var inst_40400 = (0);
var state_40454__$1 = (function (){var statearr_40475 = state_40454;
(statearr_40475[(8)] = inst_40399);

(statearr_40475[(10)] = inst_40397);

(statearr_40475[(11)] = inst_40400);

(statearr_40475[(12)] = inst_40398);

return statearr_40475;
})();
var statearr_40476_41645 = state_40454__$1;
(statearr_40476_41645[(2)] = null);

(statearr_40476_41645[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40455 === (17))){
var inst_40416 = (state_40454[(7)]);
var inst_40424 = cljs.core.chunk_first(inst_40416);
var inst_40425 = cljs.core.chunk_rest(inst_40416);
var inst_40426 = cljs.core.count(inst_40424);
var inst_40397 = inst_40425;
var inst_40398 = inst_40424;
var inst_40399 = inst_40426;
var inst_40400 = (0);
var state_40454__$1 = (function (){var statearr_40477 = state_40454;
(statearr_40477[(8)] = inst_40399);

(statearr_40477[(10)] = inst_40397);

(statearr_40477[(11)] = inst_40400);

(statearr_40477[(12)] = inst_40398);

return statearr_40477;
})();
var statearr_40478_41650 = state_40454__$1;
(statearr_40478_41650[(2)] = null);

(statearr_40478_41650[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40455 === (3))){
var inst_40452 = (state_40454[(2)]);
var state_40454__$1 = state_40454;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40454__$1,inst_40452);
} else {
if((state_val_40455 === (12))){
var inst_40440 = (state_40454[(2)]);
var state_40454__$1 = state_40454;
var statearr_40480_41653 = state_40454__$1;
(statearr_40480_41653[(2)] = inst_40440);

(statearr_40480_41653[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40455 === (2))){
var state_40454__$1 = state_40454;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40454__$1,(4),in$);
} else {
if((state_val_40455 === (23))){
var inst_40448 = (state_40454[(2)]);
var state_40454__$1 = state_40454;
var statearr_40482_41654 = state_40454__$1;
(statearr_40482_41654[(2)] = inst_40448);

(statearr_40482_41654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40455 === (19))){
var inst_40435 = (state_40454[(2)]);
var state_40454__$1 = state_40454;
var statearr_40483_41655 = state_40454__$1;
(statearr_40483_41655[(2)] = inst_40435);

(statearr_40483_41655[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40455 === (11))){
var inst_40397 = (state_40454[(10)]);
var inst_40416 = (state_40454[(7)]);
var inst_40416__$1 = cljs.core.seq(inst_40397);
var state_40454__$1 = (function (){var statearr_40484 = state_40454;
(statearr_40484[(7)] = inst_40416__$1);

return statearr_40484;
})();
if(inst_40416__$1){
var statearr_40485_41656 = state_40454__$1;
(statearr_40485_41656[(1)] = (14));

} else {
var statearr_40486_41657 = state_40454__$1;
(statearr_40486_41657[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40455 === (9))){
var inst_40442 = (state_40454[(2)]);
var inst_40443 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_40454__$1 = (function (){var statearr_40487 = state_40454;
(statearr_40487[(15)] = inst_40442);

return statearr_40487;
})();
if(cljs.core.truth_(inst_40443)){
var statearr_40488_41658 = state_40454__$1;
(statearr_40488_41658[(1)] = (21));

} else {
var statearr_40489_41659 = state_40454__$1;
(statearr_40489_41659[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40455 === (5))){
var inst_40385 = cljs.core.async.close_BANG_(out);
var state_40454__$1 = state_40454;
var statearr_40491_41664 = state_40454__$1;
(statearr_40491_41664[(2)] = inst_40385);

(statearr_40491_41664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40455 === (14))){
var inst_40416 = (state_40454[(7)]);
var inst_40422 = cljs.core.chunked_seq_QMARK_(inst_40416);
var state_40454__$1 = state_40454;
if(inst_40422){
var statearr_40492_41668 = state_40454__$1;
(statearr_40492_41668[(1)] = (17));

} else {
var statearr_40493_41669 = state_40454__$1;
(statearr_40493_41669[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40455 === (16))){
var inst_40438 = (state_40454[(2)]);
var state_40454__$1 = state_40454;
var statearr_40494_41674 = state_40454__$1;
(statearr_40494_41674[(2)] = inst_40438);

(statearr_40494_41674[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40455 === (10))){
var inst_40400 = (state_40454[(11)]);
var inst_40398 = (state_40454[(12)]);
var inst_40409 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_40398,inst_40400);
var state_40454__$1 = state_40454;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40454__$1,(13),out,inst_40409);
} else {
if((state_val_40455 === (18))){
var inst_40416 = (state_40454[(7)]);
var inst_40429 = cljs.core.first(inst_40416);
var state_40454__$1 = state_40454;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40454__$1,(20),out,inst_40429);
} else {
if((state_val_40455 === (8))){
var inst_40399 = (state_40454[(8)]);
var inst_40400 = (state_40454[(11)]);
var inst_40402 = (inst_40400 < inst_40399);
var inst_40403 = inst_40402;
var state_40454__$1 = state_40454;
if(cljs.core.truth_(inst_40403)){
var statearr_40499_41685 = state_40454__$1;
(statearr_40499_41685[(1)] = (10));

} else {
var statearr_40500_41759 = state_40454__$1;
(statearr_40500_41759[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__37963__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__37963__auto____0 = (function (){
var statearr_40501 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40501[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__37963__auto__);

(statearr_40501[(1)] = (1));

return statearr_40501;
});
var cljs$core$async$mapcat_STAR__$_state_machine__37963__auto____1 = (function (state_40454){
while(true){
var ret_value__37964__auto__ = (function (){try{while(true){
var result__37965__auto__ = switch__37962__auto__(state_40454);
if(cljs.core.keyword_identical_QMARK_(result__37965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37965__auto__;
}
break;
}
}catch (e40502){if((e40502 instanceof Object)){
var ex__37966__auto__ = e40502;
var statearr_40503_41776 = state_40454;
(statearr_40503_41776[(5)] = ex__37966__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40454);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40502;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41781 = state_40454;
state_40454 = G__41781;
continue;
} else {
return ret_value__37964__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__37963__auto__ = function(state_40454){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__37963__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__37963__auto____1.call(this,state_40454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__37963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__37963__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__37963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__37963__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__37963__auto__;
})()
})();
var state__38327__auto__ = (function (){var statearr_40504 = (f__38326__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38326__auto__.cljs$core$IFn$_invoke$arity$0() : f__38326__auto__.call(null));
(statearr_40504[(6)] = c__38325__auto__);

return statearr_40504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38327__auto__);
}));

return c__38325__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__40514 = arguments.length;
switch (G__40514) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__40516 = arguments.length;
switch (G__40516) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__40518 = arguments.length;
switch (G__40518) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38325__auto___41796 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38326__auto__ = (function (){var switch__37962__auto__ = (function (state_40542){
var state_val_40543 = (state_40542[(1)]);
if((state_val_40543 === (7))){
var inst_40537 = (state_40542[(2)]);
var state_40542__$1 = state_40542;
var statearr_40544_41797 = state_40542__$1;
(statearr_40544_41797[(2)] = inst_40537);

(statearr_40544_41797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40543 === (1))){
var inst_40519 = null;
var state_40542__$1 = (function (){var statearr_40545 = state_40542;
(statearr_40545[(7)] = inst_40519);

return statearr_40545;
})();
var statearr_40546_41798 = state_40542__$1;
(statearr_40546_41798[(2)] = null);

(statearr_40546_41798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40543 === (4))){
var inst_40522 = (state_40542[(8)]);
var inst_40522__$1 = (state_40542[(2)]);
var inst_40523 = (inst_40522__$1 == null);
var inst_40524 = cljs.core.not(inst_40523);
var state_40542__$1 = (function (){var statearr_40547 = state_40542;
(statearr_40547[(8)] = inst_40522__$1);

return statearr_40547;
})();
if(inst_40524){
var statearr_40548_41799 = state_40542__$1;
(statearr_40548_41799[(1)] = (5));

} else {
var statearr_40549_41800 = state_40542__$1;
(statearr_40549_41800[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40543 === (6))){
var state_40542__$1 = state_40542;
var statearr_40550_41801 = state_40542__$1;
(statearr_40550_41801[(2)] = null);

(statearr_40550_41801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40543 === (3))){
var inst_40539 = (state_40542[(2)]);
var inst_40540 = cljs.core.async.close_BANG_(out);
var state_40542__$1 = (function (){var statearr_40551 = state_40542;
(statearr_40551[(9)] = inst_40539);

return statearr_40551;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40542__$1,inst_40540);
} else {
if((state_val_40543 === (2))){
var state_40542__$1 = state_40542;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40542__$1,(4),ch);
} else {
if((state_val_40543 === (11))){
var inst_40522 = (state_40542[(8)]);
var inst_40531 = (state_40542[(2)]);
var inst_40519 = inst_40522;
var state_40542__$1 = (function (){var statearr_40552 = state_40542;
(statearr_40552[(10)] = inst_40531);

(statearr_40552[(7)] = inst_40519);

return statearr_40552;
})();
var statearr_40553_41818 = state_40542__$1;
(statearr_40553_41818[(2)] = null);

(statearr_40553_41818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40543 === (9))){
var inst_40522 = (state_40542[(8)]);
var state_40542__$1 = state_40542;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40542__$1,(11),out,inst_40522);
} else {
if((state_val_40543 === (5))){
var inst_40522 = (state_40542[(8)]);
var inst_40519 = (state_40542[(7)]);
var inst_40526 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_40522,inst_40519);
var state_40542__$1 = state_40542;
if(inst_40526){
var statearr_40555_41820 = state_40542__$1;
(statearr_40555_41820[(1)] = (8));

} else {
var statearr_40556_41821 = state_40542__$1;
(statearr_40556_41821[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40543 === (10))){
var inst_40534 = (state_40542[(2)]);
var state_40542__$1 = state_40542;
var statearr_40557_41823 = state_40542__$1;
(statearr_40557_41823[(2)] = inst_40534);

(statearr_40557_41823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40543 === (8))){
var inst_40519 = (state_40542[(7)]);
var tmp40554 = inst_40519;
var inst_40519__$1 = tmp40554;
var state_40542__$1 = (function (){var statearr_40558 = state_40542;
(statearr_40558[(7)] = inst_40519__$1);

return statearr_40558;
})();
var statearr_40559_41824 = state_40542__$1;
(statearr_40559_41824[(2)] = null);

(statearr_40559_41824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37963__auto__ = null;
var cljs$core$async$state_machine__37963__auto____0 = (function (){
var statearr_40560 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40560[(0)] = cljs$core$async$state_machine__37963__auto__);

(statearr_40560[(1)] = (1));

return statearr_40560;
});
var cljs$core$async$state_machine__37963__auto____1 = (function (state_40542){
while(true){
var ret_value__37964__auto__ = (function (){try{while(true){
var result__37965__auto__ = switch__37962__auto__(state_40542);
if(cljs.core.keyword_identical_QMARK_(result__37965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37965__auto__;
}
break;
}
}catch (e40561){if((e40561 instanceof Object)){
var ex__37966__auto__ = e40561;
var statearr_40562_41825 = state_40542;
(statearr_40562_41825[(5)] = ex__37966__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40542);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40561;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41826 = state_40542;
state_40542 = G__41826;
continue;
} else {
return ret_value__37964__auto__;
}
break;
}
});
cljs$core$async$state_machine__37963__auto__ = function(state_40542){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37963__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37963__auto____1.call(this,state_40542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37963__auto____0;
cljs$core$async$state_machine__37963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37963__auto____1;
return cljs$core$async$state_machine__37963__auto__;
})()
})();
var state__38327__auto__ = (function (){var statearr_40563 = (f__38326__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38326__auto__.cljs$core$IFn$_invoke$arity$0() : f__38326__auto__.call(null));
(statearr_40563[(6)] = c__38325__auto___41796);

return statearr_40563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38327__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__40565 = arguments.length;
switch (G__40565) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38325__auto___41828 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38326__auto__ = (function (){var switch__37962__auto__ = (function (state_40603){
var state_val_40604 = (state_40603[(1)]);
if((state_val_40604 === (7))){
var inst_40599 = (state_40603[(2)]);
var state_40603__$1 = state_40603;
var statearr_40605_41829 = state_40603__$1;
(statearr_40605_41829[(2)] = inst_40599);

(statearr_40605_41829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40604 === (1))){
var inst_40566 = (new Array(n));
var inst_40567 = inst_40566;
var inst_40568 = (0);
var state_40603__$1 = (function (){var statearr_40606 = state_40603;
(statearr_40606[(7)] = inst_40568);

(statearr_40606[(8)] = inst_40567);

return statearr_40606;
})();
var statearr_40607_41831 = state_40603__$1;
(statearr_40607_41831[(2)] = null);

(statearr_40607_41831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40604 === (4))){
var inst_40571 = (state_40603[(9)]);
var inst_40571__$1 = (state_40603[(2)]);
var inst_40572 = (inst_40571__$1 == null);
var inst_40573 = cljs.core.not(inst_40572);
var state_40603__$1 = (function (){var statearr_40608 = state_40603;
(statearr_40608[(9)] = inst_40571__$1);

return statearr_40608;
})();
if(inst_40573){
var statearr_40609_41832 = state_40603__$1;
(statearr_40609_41832[(1)] = (5));

} else {
var statearr_40610_41833 = state_40603__$1;
(statearr_40610_41833[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40604 === (15))){
var inst_40593 = (state_40603[(2)]);
var state_40603__$1 = state_40603;
var statearr_40611_41834 = state_40603__$1;
(statearr_40611_41834[(2)] = inst_40593);

(statearr_40611_41834[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40604 === (13))){
var state_40603__$1 = state_40603;
var statearr_40612_41836 = state_40603__$1;
(statearr_40612_41836[(2)] = null);

(statearr_40612_41836[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40604 === (6))){
var inst_40568 = (state_40603[(7)]);
var inst_40589 = (inst_40568 > (0));
var state_40603__$1 = state_40603;
if(cljs.core.truth_(inst_40589)){
var statearr_40613_41840 = state_40603__$1;
(statearr_40613_41840[(1)] = (12));

} else {
var statearr_40614_41841 = state_40603__$1;
(statearr_40614_41841[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40604 === (3))){
var inst_40601 = (state_40603[(2)]);
var state_40603__$1 = state_40603;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40603__$1,inst_40601);
} else {
if((state_val_40604 === (12))){
var inst_40567 = (state_40603[(8)]);
var inst_40591 = cljs.core.vec(inst_40567);
var state_40603__$1 = state_40603;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40603__$1,(15),out,inst_40591);
} else {
if((state_val_40604 === (2))){
var state_40603__$1 = state_40603;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40603__$1,(4),ch);
} else {
if((state_val_40604 === (11))){
var inst_40583 = (state_40603[(2)]);
var inst_40584 = (new Array(n));
var inst_40567 = inst_40584;
var inst_40568 = (0);
var state_40603__$1 = (function (){var statearr_40615 = state_40603;
(statearr_40615[(10)] = inst_40583);

(statearr_40615[(7)] = inst_40568);

(statearr_40615[(8)] = inst_40567);

return statearr_40615;
})();
var statearr_40616_41853 = state_40603__$1;
(statearr_40616_41853[(2)] = null);

(statearr_40616_41853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40604 === (9))){
var inst_40567 = (state_40603[(8)]);
var inst_40581 = cljs.core.vec(inst_40567);
var state_40603__$1 = state_40603;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40603__$1,(11),out,inst_40581);
} else {
if((state_val_40604 === (5))){
var inst_40576 = (state_40603[(11)]);
var inst_40571 = (state_40603[(9)]);
var inst_40568 = (state_40603[(7)]);
var inst_40567 = (state_40603[(8)]);
var inst_40575 = (inst_40567[inst_40568] = inst_40571);
var inst_40576__$1 = (inst_40568 + (1));
var inst_40577 = (inst_40576__$1 < n);
var state_40603__$1 = (function (){var statearr_40617 = state_40603;
(statearr_40617[(11)] = inst_40576__$1);

(statearr_40617[(12)] = inst_40575);

return statearr_40617;
})();
if(cljs.core.truth_(inst_40577)){
var statearr_40618_41854 = state_40603__$1;
(statearr_40618_41854[(1)] = (8));

} else {
var statearr_40619_41855 = state_40603__$1;
(statearr_40619_41855[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40604 === (14))){
var inst_40596 = (state_40603[(2)]);
var inst_40597 = cljs.core.async.close_BANG_(out);
var state_40603__$1 = (function (){var statearr_40621 = state_40603;
(statearr_40621[(13)] = inst_40596);

return statearr_40621;
})();
var statearr_40622_41856 = state_40603__$1;
(statearr_40622_41856[(2)] = inst_40597);

(statearr_40622_41856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40604 === (10))){
var inst_40587 = (state_40603[(2)]);
var state_40603__$1 = state_40603;
var statearr_40623_41857 = state_40603__$1;
(statearr_40623_41857[(2)] = inst_40587);

(statearr_40623_41857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40604 === (8))){
var inst_40576 = (state_40603[(11)]);
var inst_40567 = (state_40603[(8)]);
var tmp40620 = inst_40567;
var inst_40567__$1 = tmp40620;
var inst_40568 = inst_40576;
var state_40603__$1 = (function (){var statearr_40624 = state_40603;
(statearr_40624[(7)] = inst_40568);

(statearr_40624[(8)] = inst_40567__$1);

return statearr_40624;
})();
var statearr_40625_41861 = state_40603__$1;
(statearr_40625_41861[(2)] = null);

(statearr_40625_41861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37963__auto__ = null;
var cljs$core$async$state_machine__37963__auto____0 = (function (){
var statearr_40626 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40626[(0)] = cljs$core$async$state_machine__37963__auto__);

(statearr_40626[(1)] = (1));

return statearr_40626;
});
var cljs$core$async$state_machine__37963__auto____1 = (function (state_40603){
while(true){
var ret_value__37964__auto__ = (function (){try{while(true){
var result__37965__auto__ = switch__37962__auto__(state_40603);
if(cljs.core.keyword_identical_QMARK_(result__37965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37965__auto__;
}
break;
}
}catch (e40627){if((e40627 instanceof Object)){
var ex__37966__auto__ = e40627;
var statearr_40628_41863 = state_40603;
(statearr_40628_41863[(5)] = ex__37966__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40603);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40627;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41867 = state_40603;
state_40603 = G__41867;
continue;
} else {
return ret_value__37964__auto__;
}
break;
}
});
cljs$core$async$state_machine__37963__auto__ = function(state_40603){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37963__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37963__auto____1.call(this,state_40603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37963__auto____0;
cljs$core$async$state_machine__37963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37963__auto____1;
return cljs$core$async$state_machine__37963__auto__;
})()
})();
var state__38327__auto__ = (function (){var statearr_40629 = (f__38326__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38326__auto__.cljs$core$IFn$_invoke$arity$0() : f__38326__auto__.call(null));
(statearr_40629[(6)] = c__38325__auto___41828);

return statearr_40629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38327__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__40631 = arguments.length;
switch (G__40631) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38325__auto___41871 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38326__auto__ = (function (){var switch__37962__auto__ = (function (state_40673){
var state_val_40674 = (state_40673[(1)]);
if((state_val_40674 === (7))){
var inst_40669 = (state_40673[(2)]);
var state_40673__$1 = state_40673;
var statearr_40675_41872 = state_40673__$1;
(statearr_40675_41872[(2)] = inst_40669);

(statearr_40675_41872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40674 === (1))){
var inst_40632 = [];
var inst_40633 = inst_40632;
var inst_40634 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_40673__$1 = (function (){var statearr_40676 = state_40673;
(statearr_40676[(7)] = inst_40633);

(statearr_40676[(8)] = inst_40634);

return statearr_40676;
})();
var statearr_40677_41878 = state_40673__$1;
(statearr_40677_41878[(2)] = null);

(statearr_40677_41878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40674 === (4))){
var inst_40637 = (state_40673[(9)]);
var inst_40637__$1 = (state_40673[(2)]);
var inst_40638 = (inst_40637__$1 == null);
var inst_40639 = cljs.core.not(inst_40638);
var state_40673__$1 = (function (){var statearr_40678 = state_40673;
(statearr_40678[(9)] = inst_40637__$1);

return statearr_40678;
})();
if(inst_40639){
var statearr_40679_41879 = state_40673__$1;
(statearr_40679_41879[(1)] = (5));

} else {
var statearr_40680_41880 = state_40673__$1;
(statearr_40680_41880[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40674 === (15))){
var inst_40663 = (state_40673[(2)]);
var state_40673__$1 = state_40673;
var statearr_40681_41881 = state_40673__$1;
(statearr_40681_41881[(2)] = inst_40663);

(statearr_40681_41881[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40674 === (13))){
var state_40673__$1 = state_40673;
var statearr_40682_41882 = state_40673__$1;
(statearr_40682_41882[(2)] = null);

(statearr_40682_41882[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40674 === (6))){
var inst_40633 = (state_40673[(7)]);
var inst_40658 = inst_40633.length;
var inst_40659 = (inst_40658 > (0));
var state_40673__$1 = state_40673;
if(cljs.core.truth_(inst_40659)){
var statearr_40683_41883 = state_40673__$1;
(statearr_40683_41883[(1)] = (12));

} else {
var statearr_40684_41884 = state_40673__$1;
(statearr_40684_41884[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40674 === (3))){
var inst_40671 = (state_40673[(2)]);
var state_40673__$1 = state_40673;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40673__$1,inst_40671);
} else {
if((state_val_40674 === (12))){
var inst_40633 = (state_40673[(7)]);
var inst_40661 = cljs.core.vec(inst_40633);
var state_40673__$1 = state_40673;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40673__$1,(15),out,inst_40661);
} else {
if((state_val_40674 === (2))){
var state_40673__$1 = state_40673;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40673__$1,(4),ch);
} else {
if((state_val_40674 === (11))){
var inst_40641 = (state_40673[(10)]);
var inst_40637 = (state_40673[(9)]);
var inst_40651 = (state_40673[(2)]);
var inst_40652 = [];
var inst_40653 = inst_40652.push(inst_40637);
var inst_40633 = inst_40652;
var inst_40634 = inst_40641;
var state_40673__$1 = (function (){var statearr_40685 = state_40673;
(statearr_40685[(11)] = inst_40651);

(statearr_40685[(12)] = inst_40653);

(statearr_40685[(7)] = inst_40633);

(statearr_40685[(8)] = inst_40634);

return statearr_40685;
})();
var statearr_40686_41891 = state_40673__$1;
(statearr_40686_41891[(2)] = null);

(statearr_40686_41891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40674 === (9))){
var inst_40633 = (state_40673[(7)]);
var inst_40649 = cljs.core.vec(inst_40633);
var state_40673__$1 = state_40673;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40673__$1,(11),out,inst_40649);
} else {
if((state_val_40674 === (5))){
var inst_40641 = (state_40673[(10)]);
var inst_40634 = (state_40673[(8)]);
var inst_40637 = (state_40673[(9)]);
var inst_40641__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_40637) : f.call(null,inst_40637));
var inst_40642 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_40641__$1,inst_40634);
var inst_40643 = cljs.core.keyword_identical_QMARK_(inst_40634,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_40644 = ((inst_40642) || (inst_40643));
var state_40673__$1 = (function (){var statearr_40687 = state_40673;
(statearr_40687[(10)] = inst_40641__$1);

return statearr_40687;
})();
if(cljs.core.truth_(inst_40644)){
var statearr_40688_41893 = state_40673__$1;
(statearr_40688_41893[(1)] = (8));

} else {
var statearr_40689_41894 = state_40673__$1;
(statearr_40689_41894[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40674 === (14))){
var inst_40666 = (state_40673[(2)]);
var inst_40667 = cljs.core.async.close_BANG_(out);
var state_40673__$1 = (function (){var statearr_40691 = state_40673;
(statearr_40691[(13)] = inst_40666);

return statearr_40691;
})();
var statearr_40692_41898 = state_40673__$1;
(statearr_40692_41898[(2)] = inst_40667);

(statearr_40692_41898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40674 === (10))){
var inst_40656 = (state_40673[(2)]);
var state_40673__$1 = state_40673;
var statearr_40693_41899 = state_40673__$1;
(statearr_40693_41899[(2)] = inst_40656);

(statearr_40693_41899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40674 === (8))){
var inst_40641 = (state_40673[(10)]);
var inst_40633 = (state_40673[(7)]);
var inst_40637 = (state_40673[(9)]);
var inst_40646 = inst_40633.push(inst_40637);
var tmp40690 = inst_40633;
var inst_40633__$1 = tmp40690;
var inst_40634 = inst_40641;
var state_40673__$1 = (function (){var statearr_40694 = state_40673;
(statearr_40694[(14)] = inst_40646);

(statearr_40694[(7)] = inst_40633__$1);

(statearr_40694[(8)] = inst_40634);

return statearr_40694;
})();
var statearr_40695_41900 = state_40673__$1;
(statearr_40695_41900[(2)] = null);

(statearr_40695_41900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37963__auto__ = null;
var cljs$core$async$state_machine__37963__auto____0 = (function (){
var statearr_40696 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40696[(0)] = cljs$core$async$state_machine__37963__auto__);

(statearr_40696[(1)] = (1));

return statearr_40696;
});
var cljs$core$async$state_machine__37963__auto____1 = (function (state_40673){
while(true){
var ret_value__37964__auto__ = (function (){try{while(true){
var result__37965__auto__ = switch__37962__auto__(state_40673);
if(cljs.core.keyword_identical_QMARK_(result__37965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37965__auto__;
}
break;
}
}catch (e40697){if((e40697 instanceof Object)){
var ex__37966__auto__ = e40697;
var statearr_40698_41901 = state_40673;
(statearr_40698_41901[(5)] = ex__37966__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40697;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41902 = state_40673;
state_40673 = G__41902;
continue;
} else {
return ret_value__37964__auto__;
}
break;
}
});
cljs$core$async$state_machine__37963__auto__ = function(state_40673){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37963__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37963__auto____1.call(this,state_40673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37963__auto____0;
cljs$core$async$state_machine__37963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37963__auto____1;
return cljs$core$async$state_machine__37963__auto__;
})()
})();
var state__38327__auto__ = (function (){var statearr_40699 = (f__38326__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38326__auto__.cljs$core$IFn$_invoke$arity$0() : f__38326__auto__.call(null));
(statearr_40699[(6)] = c__38325__auto___41871);

return statearr_40699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38327__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
