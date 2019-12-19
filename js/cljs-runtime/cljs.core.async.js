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
var G__29201 = arguments.length;
switch (G__29201) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29213 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29213 = (function (f,blockable,meta29214){
this.f = f;
this.blockable = blockable;
this.meta29214 = meta29214;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29213.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29215,meta29214__$1){
var self__ = this;
var _29215__$1 = this;
return (new cljs.core.async.t_cljs$core$async29213(self__.f,self__.blockable,meta29214__$1));
}));

(cljs.core.async.t_cljs$core$async29213.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29215){
var self__ = this;
var _29215__$1 = this;
return self__.meta29214;
}));

(cljs.core.async.t_cljs$core$async29213.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29213.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29213.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29213.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29213.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29214","meta29214",-1927755113,null)], null);
}));

(cljs.core.async.t_cljs$core$async29213.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29213.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29213");

(cljs.core.async.t_cljs$core$async29213.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async29213");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29213.
 */
cljs.core.async.__GT_t_cljs$core$async29213 = (function cljs$core$async$__GT_t_cljs$core$async29213(f__$1,blockable__$1,meta29214){
return (new cljs.core.async.t_cljs$core$async29213(f__$1,blockable__$1,meta29214));
});

}

return (new cljs.core.async.t_cljs$core$async29213(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__29260 = arguments.length;
switch (G__29260) {
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
var G__29276 = arguments.length;
switch (G__29276) {
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
var G__29282 = arguments.length;
switch (G__29282) {
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
var val_31700 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_31700) : fn1.call(null,val_31700));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_31700) : fn1.call(null,val_31700));
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
var G__29306 = arguments.length;
switch (G__29306) {
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
var n__4666__auto___31713 = n;
var x_31715 = (0);
while(true){
if((x_31715 < n__4666__auto___31713)){
(a[x_31715] = x_31715);

var G__31716 = (x_31715 + (1));
x_31715 = G__31716;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29346 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29346 = (function (flag,meta29347){
this.flag = flag;
this.meta29347 = meta29347;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29348,meta29347__$1){
var self__ = this;
var _29348__$1 = this;
return (new cljs.core.async.t_cljs$core$async29346(self__.flag,meta29347__$1));
}));

(cljs.core.async.t_cljs$core$async29346.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29348){
var self__ = this;
var _29348__$1 = this;
return self__.meta29347;
}));

(cljs.core.async.t_cljs$core$async29346.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29346.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29346.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29346.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29346.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29347","meta29347",-1163019098,null)], null);
}));

(cljs.core.async.t_cljs$core$async29346.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29346.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29346");

(cljs.core.async.t_cljs$core$async29346.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async29346");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29346.
 */
cljs.core.async.__GT_t_cljs$core$async29346 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29346(flag__$1,meta29347){
return (new cljs.core.async.t_cljs$core$async29346(flag__$1,meta29347));
});

}

return (new cljs.core.async.t_cljs$core$async29346(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29372 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29372 = (function (flag,cb,meta29373){
this.flag = flag;
this.cb = cb;
this.meta29373 = meta29373;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29374,meta29373__$1){
var self__ = this;
var _29374__$1 = this;
return (new cljs.core.async.t_cljs$core$async29372(self__.flag,self__.cb,meta29373__$1));
}));

(cljs.core.async.t_cljs$core$async29372.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29374){
var self__ = this;
var _29374__$1 = this;
return self__.meta29373;
}));

(cljs.core.async.t_cljs$core$async29372.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29372.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29372.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29372.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29372.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29373","meta29373",96825082,null)], null);
}));

(cljs.core.async.t_cljs$core$async29372.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29372.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29372");

(cljs.core.async.t_cljs$core$async29372.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async29372");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29372.
 */
cljs.core.async.__GT_t_cljs$core$async29372 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29372(flag__$1,cb__$1,meta29373){
return (new cljs.core.async.t_cljs$core$async29372(flag__$1,cb__$1,meta29373));
});

}

return (new cljs.core.async.t_cljs$core$async29372(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__29379_SHARP_){
var G__29392 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29379_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29392) : fret.call(null,G__29392));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29381_SHARP_){
var G__29393 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29381_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29393) : fret.call(null,G__29393));
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
var G__31771 = (i + (1));
i = G__31771;
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
var len__4789__auto___31780 = arguments.length;
var i__4790__auto___31781 = (0);
while(true){
if((i__4790__auto___31781 < len__4789__auto___31780)){
args__4795__auto__.push((arguments[i__4790__auto___31781]));

var G__31791 = (i__4790__auto___31781 + (1));
i__4790__auto___31781 = G__31791;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29398){
var map__29399 = p__29398;
var map__29399__$1 = (((((!((map__29399 == null))))?(((((map__29399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29399):map__29399);
var opts = map__29399__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29394){
var G__29395 = cljs.core.first(seq29394);
var seq29394__$1 = cljs.core.next(seq29394);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29395,seq29394__$1);
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
var G__29423 = arguments.length;
switch (G__29423) {
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
var c__29076__auto___31809 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29077__auto__ = (function (){var switch__28731__auto__ = (function (state_29477){
var state_val_29481 = (state_29477[(1)]);
if((state_val_29481 === (7))){
var inst_29470 = (state_29477[(2)]);
var state_29477__$1 = state_29477;
var statearr_29493_31813 = state_29477__$1;
(statearr_29493_31813[(2)] = inst_29470);

(statearr_29493_31813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (1))){
var state_29477__$1 = state_29477;
var statearr_29494_31814 = state_29477__$1;
(statearr_29494_31814[(2)] = null);

(statearr_29494_31814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (4))){
var inst_29447 = (state_29477[(7)]);
var inst_29447__$1 = (state_29477[(2)]);
var inst_29451 = (inst_29447__$1 == null);
var state_29477__$1 = (function (){var statearr_29499 = state_29477;
(statearr_29499[(7)] = inst_29447__$1);

return statearr_29499;
})();
if(cljs.core.truth_(inst_29451)){
var statearr_29500_31819 = state_29477__$1;
(statearr_29500_31819[(1)] = (5));

} else {
var statearr_29501_31820 = state_29477__$1;
(statearr_29501_31820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (13))){
var state_29477__$1 = state_29477;
var statearr_29502_31823 = state_29477__$1;
(statearr_29502_31823[(2)] = null);

(statearr_29502_31823[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (6))){
var inst_29447 = (state_29477[(7)]);
var state_29477__$1 = state_29477;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29477__$1,(11),to,inst_29447);
} else {
if((state_val_29481 === (3))){
var inst_29472 = (state_29477[(2)]);
var state_29477__$1 = state_29477;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29477__$1,inst_29472);
} else {
if((state_val_29481 === (12))){
var state_29477__$1 = state_29477;
var statearr_29508_31832 = state_29477__$1;
(statearr_29508_31832[(2)] = null);

(statearr_29508_31832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (2))){
var state_29477__$1 = state_29477;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29477__$1,(4),from);
} else {
if((state_val_29481 === (11))){
var inst_29460 = (state_29477[(2)]);
var state_29477__$1 = state_29477;
if(cljs.core.truth_(inst_29460)){
var statearr_29509_31837 = state_29477__$1;
(statearr_29509_31837[(1)] = (12));

} else {
var statearr_29510_31838 = state_29477__$1;
(statearr_29510_31838[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (9))){
var state_29477__$1 = state_29477;
var statearr_29515_31839 = state_29477__$1;
(statearr_29515_31839[(2)] = null);

(statearr_29515_31839[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (5))){
var state_29477__$1 = state_29477;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29516_31841 = state_29477__$1;
(statearr_29516_31841[(1)] = (8));

} else {
var statearr_29517_31842 = state_29477__$1;
(statearr_29517_31842[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (14))){
var inst_29468 = (state_29477[(2)]);
var state_29477__$1 = state_29477;
var statearr_29518_31843 = state_29477__$1;
(statearr_29518_31843[(2)] = inst_29468);

(statearr_29518_31843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (10))){
var inst_29457 = (state_29477[(2)]);
var state_29477__$1 = state_29477;
var statearr_29519_31845 = state_29477__$1;
(statearr_29519_31845[(2)] = inst_29457);

(statearr_29519_31845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (8))){
var inst_29454 = cljs.core.async.close_BANG_(to);
var state_29477__$1 = state_29477;
var statearr_29520_31848 = state_29477__$1;
(statearr_29520_31848[(2)] = inst_29454);

(statearr_29520_31848[(1)] = (10));


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
var cljs$core$async$state_machine__28732__auto__ = null;
var cljs$core$async$state_machine__28732__auto____0 = (function (){
var statearr_29521 = [null,null,null,null,null,null,null,null];
(statearr_29521[(0)] = cljs$core$async$state_machine__28732__auto__);

(statearr_29521[(1)] = (1));

return statearr_29521;
});
var cljs$core$async$state_machine__28732__auto____1 = (function (state_29477){
while(true){
var ret_value__28733__auto__ = (function (){try{while(true){
var result__28734__auto__ = switch__28731__auto__(state_29477);
if(cljs.core.keyword_identical_QMARK_(result__28734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28734__auto__;
}
break;
}
}catch (e29524){if((e29524 instanceof Object)){
var ex__28735__auto__ = e29524;
var statearr_29525_31850 = state_29477;
(statearr_29525_31850[(5)] = ex__28735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29524;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31852 = state_29477;
state_29477 = G__31852;
continue;
} else {
return ret_value__28733__auto__;
}
break;
}
});
cljs$core$async$state_machine__28732__auto__ = function(state_29477){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28732__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28732__auto____1.call(this,state_29477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28732__auto____0;
cljs$core$async$state_machine__28732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28732__auto____1;
return cljs$core$async$state_machine__28732__auto__;
})()
})();
var state__29079__auto__ = (function (){var statearr_29526 = (f__29077__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29077__auto__.cljs$core$IFn$_invoke$arity$0() : f__29077__auto__.call(null));
(statearr_29526[(6)] = c__29076__auto___31809);

return statearr_29526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29079__auto__);
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
var process = (function (p__29531){
var vec__29532 = p__29531;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29532,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29532,(1),null);
var job = vec__29532;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29076__auto___31860 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29077__auto__ = (function (){var switch__28731__auto__ = (function (state_29543){
var state_val_29544 = (state_29543[(1)]);
if((state_val_29544 === (1))){
var state_29543__$1 = state_29543;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29543__$1,(2),res,v);
} else {
if((state_val_29544 === (2))){
var inst_29540 = (state_29543[(2)]);
var inst_29541 = cljs.core.async.close_BANG_(res);
var state_29543__$1 = (function (){var statearr_29547 = state_29543;
(statearr_29547[(7)] = inst_29540);

return statearr_29547;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29543__$1,inst_29541);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28732__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28732__auto____0 = (function (){
var statearr_29550 = [null,null,null,null,null,null,null,null];
(statearr_29550[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28732__auto__);

(statearr_29550[(1)] = (1));

return statearr_29550;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28732__auto____1 = (function (state_29543){
while(true){
var ret_value__28733__auto__ = (function (){try{while(true){
var result__28734__auto__ = switch__28731__auto__(state_29543);
if(cljs.core.keyword_identical_QMARK_(result__28734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28734__auto__;
}
break;
}
}catch (e29551){if((e29551 instanceof Object)){
var ex__28735__auto__ = e29551;
var statearr_29552_31868 = state_29543;
(statearr_29552_31868[(5)] = ex__28735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29551;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31869 = state_29543;
state_29543 = G__31869;
continue;
} else {
return ret_value__28733__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28732__auto__ = function(state_29543){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28732__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28732__auto____1.call(this,state_29543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28732__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28732__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28732__auto__;
})()
})();
var state__29079__auto__ = (function (){var statearr_29553 = (f__29077__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29077__auto__.cljs$core$IFn$_invoke$arity$0() : f__29077__auto__.call(null));
(statearr_29553[(6)] = c__29076__auto___31860);

return statearr_29553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29079__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__29557){
var vec__29558 = p__29557;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29558,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29558,(1),null);
var job = vec__29558;
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
var n__4666__auto___31873 = n;
var __31874 = (0);
while(true){
if((__31874 < n__4666__auto___31873)){
var G__29564_31875 = type;
var G__29564_31876__$1 = (((G__29564_31875 instanceof cljs.core.Keyword))?G__29564_31875.fqn:null);
switch (G__29564_31876__$1) {
case "compute":
var c__29076__auto___31878 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31874,c__29076__auto___31878,G__29564_31875,G__29564_31876__$1,n__4666__auto___31873,jobs,results,process,async){
return (function (){
var f__29077__auto__ = (function (){var switch__28731__auto__ = ((function (__31874,c__29076__auto___31878,G__29564_31875,G__29564_31876__$1,n__4666__auto___31873,jobs,results,process,async){
return (function (state_29577){
var state_val_29578 = (state_29577[(1)]);
if((state_val_29578 === (1))){
var state_29577__$1 = state_29577;
var statearr_29584_31881 = state_29577__$1;
(statearr_29584_31881[(2)] = null);

(statearr_29584_31881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29578 === (2))){
var state_29577__$1 = state_29577;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29577__$1,(4),jobs);
} else {
if((state_val_29578 === (3))){
var inst_29575 = (state_29577[(2)]);
var state_29577__$1 = state_29577;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29577__$1,inst_29575);
} else {
if((state_val_29578 === (4))){
var inst_29567 = (state_29577[(2)]);
var inst_29568 = process(inst_29567);
var state_29577__$1 = state_29577;
if(cljs.core.truth_(inst_29568)){
var statearr_29585_31886 = state_29577__$1;
(statearr_29585_31886[(1)] = (5));

} else {
var statearr_29586_31887 = state_29577__$1;
(statearr_29586_31887[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29578 === (5))){
var state_29577__$1 = state_29577;
var statearr_29587_31893 = state_29577__$1;
(statearr_29587_31893[(2)] = null);

(statearr_29587_31893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29578 === (6))){
var state_29577__$1 = state_29577;
var statearr_29588_31895 = state_29577__$1;
(statearr_29588_31895[(2)] = null);

(statearr_29588_31895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29578 === (7))){
var inst_29573 = (state_29577[(2)]);
var state_29577__$1 = state_29577;
var statearr_29589_31897 = state_29577__$1;
(statearr_29589_31897[(2)] = inst_29573);

(statearr_29589_31897[(1)] = (3));


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
});})(__31874,c__29076__auto___31878,G__29564_31875,G__29564_31876__$1,n__4666__auto___31873,jobs,results,process,async))
;
return ((function (__31874,switch__28731__auto__,c__29076__auto___31878,G__29564_31875,G__29564_31876__$1,n__4666__auto___31873,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28732__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28732__auto____0 = (function (){
var statearr_29596 = [null,null,null,null,null,null,null];
(statearr_29596[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28732__auto__);

(statearr_29596[(1)] = (1));

return statearr_29596;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28732__auto____1 = (function (state_29577){
while(true){
var ret_value__28733__auto__ = (function (){try{while(true){
var result__28734__auto__ = switch__28731__auto__(state_29577);
if(cljs.core.keyword_identical_QMARK_(result__28734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28734__auto__;
}
break;
}
}catch (e29601){if((e29601 instanceof Object)){
var ex__28735__auto__ = e29601;
var statearr_29602_31906 = state_29577;
(statearr_29602_31906[(5)] = ex__28735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29601;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31907 = state_29577;
state_29577 = G__31907;
continue;
} else {
return ret_value__28733__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28732__auto__ = function(state_29577){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28732__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28732__auto____1.call(this,state_29577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28732__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28732__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28732__auto__;
})()
;})(__31874,switch__28731__auto__,c__29076__auto___31878,G__29564_31875,G__29564_31876__$1,n__4666__auto___31873,jobs,results,process,async))
})();
var state__29079__auto__ = (function (){var statearr_29604 = (f__29077__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29077__auto__.cljs$core$IFn$_invoke$arity$0() : f__29077__auto__.call(null));
(statearr_29604[(6)] = c__29076__auto___31878);

return statearr_29604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29079__auto__);
});})(__31874,c__29076__auto___31878,G__29564_31875,G__29564_31876__$1,n__4666__auto___31873,jobs,results,process,async))
);


break;
case "async":
var c__29076__auto___31912 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31874,c__29076__auto___31912,G__29564_31875,G__29564_31876__$1,n__4666__auto___31873,jobs,results,process,async){
return (function (){
var f__29077__auto__ = (function (){var switch__28731__auto__ = ((function (__31874,c__29076__auto___31912,G__29564_31875,G__29564_31876__$1,n__4666__auto___31873,jobs,results,process,async){
return (function (state_29618){
var state_val_29619 = (state_29618[(1)]);
if((state_val_29619 === (1))){
var state_29618__$1 = state_29618;
var statearr_29631_31914 = state_29618__$1;
(statearr_29631_31914[(2)] = null);

(statearr_29631_31914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29619 === (2))){
var state_29618__$1 = state_29618;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29618__$1,(4),jobs);
} else {
if((state_val_29619 === (3))){
var inst_29616 = (state_29618[(2)]);
var state_29618__$1 = state_29618;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29618__$1,inst_29616);
} else {
if((state_val_29619 === (4))){
var inst_29607 = (state_29618[(2)]);
var inst_29608 = async(inst_29607);
var state_29618__$1 = state_29618;
if(cljs.core.truth_(inst_29608)){
var statearr_29635_31920 = state_29618__$1;
(statearr_29635_31920[(1)] = (5));

} else {
var statearr_29637_31921 = state_29618__$1;
(statearr_29637_31921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29619 === (5))){
var state_29618__$1 = state_29618;
var statearr_29639_31922 = state_29618__$1;
(statearr_29639_31922[(2)] = null);

(statearr_29639_31922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29619 === (6))){
var state_29618__$1 = state_29618;
var statearr_29642_31923 = state_29618__$1;
(statearr_29642_31923[(2)] = null);

(statearr_29642_31923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29619 === (7))){
var inst_29614 = (state_29618[(2)]);
var state_29618__$1 = state_29618;
var statearr_29644_31924 = state_29618__$1;
(statearr_29644_31924[(2)] = inst_29614);

(statearr_29644_31924[(1)] = (3));


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
});})(__31874,c__29076__auto___31912,G__29564_31875,G__29564_31876__$1,n__4666__auto___31873,jobs,results,process,async))
;
return ((function (__31874,switch__28731__auto__,c__29076__auto___31912,G__29564_31875,G__29564_31876__$1,n__4666__auto___31873,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28732__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28732__auto____0 = (function (){
var statearr_29646 = [null,null,null,null,null,null,null];
(statearr_29646[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28732__auto__);

(statearr_29646[(1)] = (1));

return statearr_29646;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28732__auto____1 = (function (state_29618){
while(true){
var ret_value__28733__auto__ = (function (){try{while(true){
var result__28734__auto__ = switch__28731__auto__(state_29618);
if(cljs.core.keyword_identical_QMARK_(result__28734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28734__auto__;
}
break;
}
}catch (e29647){if((e29647 instanceof Object)){
var ex__28735__auto__ = e29647;
var statearr_29648_31926 = state_29618;
(statearr_29648_31926[(5)] = ex__28735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29647;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31927 = state_29618;
state_29618 = G__31927;
continue;
} else {
return ret_value__28733__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28732__auto__ = function(state_29618){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28732__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28732__auto____1.call(this,state_29618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28732__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28732__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28732__auto__;
})()
;})(__31874,switch__28731__auto__,c__29076__auto___31912,G__29564_31875,G__29564_31876__$1,n__4666__auto___31873,jobs,results,process,async))
})();
var state__29079__auto__ = (function (){var statearr_29650 = (f__29077__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29077__auto__.cljs$core$IFn$_invoke$arity$0() : f__29077__auto__.call(null));
(statearr_29650[(6)] = c__29076__auto___31912);

return statearr_29650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29079__auto__);
});})(__31874,c__29076__auto___31912,G__29564_31875,G__29564_31876__$1,n__4666__auto___31873,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29564_31876__$1)].join('')));

}

var G__31928 = (__31874 + (1));
__31874 = G__31928;
continue;
} else {
}
break;
}

var c__29076__auto___31929 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29077__auto__ = (function (){var switch__28731__auto__ = (function (state_29675){
var state_val_29676 = (state_29675[(1)]);
if((state_val_29676 === (7))){
var inst_29669 = (state_29675[(2)]);
var state_29675__$1 = state_29675;
var statearr_29692_31936 = state_29675__$1;
(statearr_29692_31936[(2)] = inst_29669);

(statearr_29692_31936[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29676 === (1))){
var state_29675__$1 = state_29675;
var statearr_29697_31940 = state_29675__$1;
(statearr_29697_31940[(2)] = null);

(statearr_29697_31940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29676 === (4))){
var inst_29653 = (state_29675[(7)]);
var inst_29653__$1 = (state_29675[(2)]);
var inst_29655 = (inst_29653__$1 == null);
var state_29675__$1 = (function (){var statearr_29698 = state_29675;
(statearr_29698[(7)] = inst_29653__$1);

return statearr_29698;
})();
if(cljs.core.truth_(inst_29655)){
var statearr_29699_31941 = state_29675__$1;
(statearr_29699_31941[(1)] = (5));

} else {
var statearr_29702_31942 = state_29675__$1;
(statearr_29702_31942[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29676 === (6))){
var inst_29653 = (state_29675[(7)]);
var inst_29659 = (state_29675[(8)]);
var inst_29659__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_29660 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29661 = [inst_29653,inst_29659__$1];
var inst_29662 = (new cljs.core.PersistentVector(null,2,(5),inst_29660,inst_29661,null));
var state_29675__$1 = (function (){var statearr_29704 = state_29675;
(statearr_29704[(8)] = inst_29659__$1);

return statearr_29704;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29675__$1,(8),jobs,inst_29662);
} else {
if((state_val_29676 === (3))){
var inst_29673 = (state_29675[(2)]);
var state_29675__$1 = state_29675;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29675__$1,inst_29673);
} else {
if((state_val_29676 === (2))){
var state_29675__$1 = state_29675;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29675__$1,(4),from);
} else {
if((state_val_29676 === (9))){
var inst_29666 = (state_29675[(2)]);
var state_29675__$1 = (function (){var statearr_29706 = state_29675;
(statearr_29706[(9)] = inst_29666);

return statearr_29706;
})();
var statearr_29707_31952 = state_29675__$1;
(statearr_29707_31952[(2)] = null);

(statearr_29707_31952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29676 === (5))){
var inst_29657 = cljs.core.async.close_BANG_(jobs);
var state_29675__$1 = state_29675;
var statearr_29708_31954 = state_29675__$1;
(statearr_29708_31954[(2)] = inst_29657);

(statearr_29708_31954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29676 === (8))){
var inst_29659 = (state_29675[(8)]);
var inst_29664 = (state_29675[(2)]);
var state_29675__$1 = (function (){var statearr_29712 = state_29675;
(statearr_29712[(10)] = inst_29664);

return statearr_29712;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29675__$1,(9),results,inst_29659);
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
var cljs$core$async$pipeline_STAR__$_state_machine__28732__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28732__auto____0 = (function (){
var statearr_29713 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29713[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28732__auto__);

(statearr_29713[(1)] = (1));

return statearr_29713;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28732__auto____1 = (function (state_29675){
while(true){
var ret_value__28733__auto__ = (function (){try{while(true){
var result__28734__auto__ = switch__28731__auto__(state_29675);
if(cljs.core.keyword_identical_QMARK_(result__28734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28734__auto__;
}
break;
}
}catch (e29714){if((e29714 instanceof Object)){
var ex__28735__auto__ = e29714;
var statearr_29715_31964 = state_29675;
(statearr_29715_31964[(5)] = ex__28735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29714;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31969 = state_29675;
state_29675 = G__31969;
continue;
} else {
return ret_value__28733__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28732__auto__ = function(state_29675){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28732__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28732__auto____1.call(this,state_29675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28732__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28732__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28732__auto__;
})()
})();
var state__29079__auto__ = (function (){var statearr_29716 = (f__29077__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29077__auto__.cljs$core$IFn$_invoke$arity$0() : f__29077__auto__.call(null));
(statearr_29716[(6)] = c__29076__auto___31929);

return statearr_29716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29079__auto__);
}));


var c__29076__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29077__auto__ = (function (){var switch__28731__auto__ = (function (state_29755){
var state_val_29756 = (state_29755[(1)]);
if((state_val_29756 === (7))){
var inst_29751 = (state_29755[(2)]);
var state_29755__$1 = state_29755;
var statearr_29762_31977 = state_29755__$1;
(statearr_29762_31977[(2)] = inst_29751);

(statearr_29762_31977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29756 === (20))){
var state_29755__$1 = state_29755;
var statearr_29763_31978 = state_29755__$1;
(statearr_29763_31978[(2)] = null);

(statearr_29763_31978[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29756 === (1))){
var state_29755__$1 = state_29755;
var statearr_29765_31982 = state_29755__$1;
(statearr_29765_31982[(2)] = null);

(statearr_29765_31982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29756 === (4))){
var inst_29719 = (state_29755[(7)]);
var inst_29719__$1 = (state_29755[(2)]);
var inst_29720 = (inst_29719__$1 == null);
var state_29755__$1 = (function (){var statearr_29766 = state_29755;
(statearr_29766[(7)] = inst_29719__$1);

return statearr_29766;
})();
if(cljs.core.truth_(inst_29720)){
var statearr_29767_31989 = state_29755__$1;
(statearr_29767_31989[(1)] = (5));

} else {
var statearr_29768_31993 = state_29755__$1;
(statearr_29768_31993[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29756 === (15))){
var inst_29732 = (state_29755[(8)]);
var state_29755__$1 = state_29755;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29755__$1,(18),to,inst_29732);
} else {
if((state_val_29756 === (21))){
var inst_29746 = (state_29755[(2)]);
var state_29755__$1 = state_29755;
var statearr_29770_31994 = state_29755__$1;
(statearr_29770_31994[(2)] = inst_29746);

(statearr_29770_31994[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29756 === (13))){
var inst_29748 = (state_29755[(2)]);
var state_29755__$1 = (function (){var statearr_29771 = state_29755;
(statearr_29771[(9)] = inst_29748);

return statearr_29771;
})();
var statearr_29774_31998 = state_29755__$1;
(statearr_29774_31998[(2)] = null);

(statearr_29774_31998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29756 === (6))){
var inst_29719 = (state_29755[(7)]);
var state_29755__$1 = state_29755;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29755__$1,(11),inst_29719);
} else {
if((state_val_29756 === (17))){
var inst_29741 = (state_29755[(2)]);
var state_29755__$1 = state_29755;
if(cljs.core.truth_(inst_29741)){
var statearr_29775_32002 = state_29755__$1;
(statearr_29775_32002[(1)] = (19));

} else {
var statearr_29776_32003 = state_29755__$1;
(statearr_29776_32003[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29756 === (3))){
var inst_29753 = (state_29755[(2)]);
var state_29755__$1 = state_29755;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29755__$1,inst_29753);
} else {
if((state_val_29756 === (12))){
var inst_29729 = (state_29755[(10)]);
var state_29755__$1 = state_29755;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29755__$1,(14),inst_29729);
} else {
if((state_val_29756 === (2))){
var state_29755__$1 = state_29755;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29755__$1,(4),results);
} else {
if((state_val_29756 === (19))){
var state_29755__$1 = state_29755;
var statearr_29789_32008 = state_29755__$1;
(statearr_29789_32008[(2)] = null);

(statearr_29789_32008[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29756 === (11))){
var inst_29729 = (state_29755[(2)]);
var state_29755__$1 = (function (){var statearr_29790 = state_29755;
(statearr_29790[(10)] = inst_29729);

return statearr_29790;
})();
var statearr_29791_32016 = state_29755__$1;
(statearr_29791_32016[(2)] = null);

(statearr_29791_32016[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29756 === (9))){
var state_29755__$1 = state_29755;
var statearr_29796_32020 = state_29755__$1;
(statearr_29796_32020[(2)] = null);

(statearr_29796_32020[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29756 === (5))){
var state_29755__$1 = state_29755;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29797_32021 = state_29755__$1;
(statearr_29797_32021[(1)] = (8));

} else {
var statearr_29798_32022 = state_29755__$1;
(statearr_29798_32022[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29756 === (14))){
var inst_29732 = (state_29755[(8)]);
var inst_29732__$1 = (state_29755[(2)]);
var inst_29734 = (inst_29732__$1 == null);
var inst_29735 = cljs.core.not(inst_29734);
var state_29755__$1 = (function (){var statearr_29800 = state_29755;
(statearr_29800[(8)] = inst_29732__$1);

return statearr_29800;
})();
if(inst_29735){
var statearr_29801_32033 = state_29755__$1;
(statearr_29801_32033[(1)] = (15));

} else {
var statearr_29802_32034 = state_29755__$1;
(statearr_29802_32034[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29756 === (16))){
var state_29755__$1 = state_29755;
var statearr_29803_32039 = state_29755__$1;
(statearr_29803_32039[(2)] = false);

(statearr_29803_32039[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29756 === (10))){
var inst_29726 = (state_29755[(2)]);
var state_29755__$1 = state_29755;
var statearr_29805_32043 = state_29755__$1;
(statearr_29805_32043[(2)] = inst_29726);

(statearr_29805_32043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29756 === (18))){
var inst_29738 = (state_29755[(2)]);
var state_29755__$1 = state_29755;
var statearr_29806_32044 = state_29755__$1;
(statearr_29806_32044[(2)] = inst_29738);

(statearr_29806_32044[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29756 === (8))){
var inst_29723 = cljs.core.async.close_BANG_(to);
var state_29755__$1 = state_29755;
var statearr_29807_32053 = state_29755__$1;
(statearr_29807_32053[(2)] = inst_29723);

(statearr_29807_32053[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__28732__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28732__auto____0 = (function (){
var statearr_29809 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29809[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28732__auto__);

(statearr_29809[(1)] = (1));

return statearr_29809;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28732__auto____1 = (function (state_29755){
while(true){
var ret_value__28733__auto__ = (function (){try{while(true){
var result__28734__auto__ = switch__28731__auto__(state_29755);
if(cljs.core.keyword_identical_QMARK_(result__28734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28734__auto__;
}
break;
}
}catch (e29810){if((e29810 instanceof Object)){
var ex__28735__auto__ = e29810;
var statearr_29811_32059 = state_29755;
(statearr_29811_32059[(5)] = ex__28735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29810;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32060 = state_29755;
state_29755 = G__32060;
continue;
} else {
return ret_value__28733__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28732__auto__ = function(state_29755){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28732__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28732__auto____1.call(this,state_29755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28732__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28732__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28732__auto__;
})()
})();
var state__29079__auto__ = (function (){var statearr_29812 = (f__29077__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29077__auto__.cljs$core$IFn$_invoke$arity$0() : f__29077__auto__.call(null));
(statearr_29812[(6)] = c__29076__auto__);

return statearr_29812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29079__auto__);
}));

return c__29076__auto__;
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
var G__29823 = arguments.length;
switch (G__29823) {
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
var G__29826 = arguments.length;
switch (G__29826) {
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
var G__29844 = arguments.length;
switch (G__29844) {
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
var c__29076__auto___32078 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29077__auto__ = (function (){var switch__28731__auto__ = (function (state_29870){
var state_val_29871 = (state_29870[(1)]);
if((state_val_29871 === (7))){
var inst_29866 = (state_29870[(2)]);
var state_29870__$1 = state_29870;
var statearr_29883_32079 = state_29870__$1;
(statearr_29883_32079[(2)] = inst_29866);

(statearr_29883_32079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29871 === (1))){
var state_29870__$1 = state_29870;
var statearr_29884_32081 = state_29870__$1;
(statearr_29884_32081[(2)] = null);

(statearr_29884_32081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29871 === (4))){
var inst_29847 = (state_29870[(7)]);
var inst_29847__$1 = (state_29870[(2)]);
var inst_29848 = (inst_29847__$1 == null);
var state_29870__$1 = (function (){var statearr_29885 = state_29870;
(statearr_29885[(7)] = inst_29847__$1);

return statearr_29885;
})();
if(cljs.core.truth_(inst_29848)){
var statearr_29886_32089 = state_29870__$1;
(statearr_29886_32089[(1)] = (5));

} else {
var statearr_29887_32090 = state_29870__$1;
(statearr_29887_32090[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29871 === (13))){
var state_29870__$1 = state_29870;
var statearr_29888_32091 = state_29870__$1;
(statearr_29888_32091[(2)] = null);

(statearr_29888_32091[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29871 === (6))){
var inst_29847 = (state_29870[(7)]);
var inst_29853 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_29847) : p.call(null,inst_29847));
var state_29870__$1 = state_29870;
if(cljs.core.truth_(inst_29853)){
var statearr_29889_32097 = state_29870__$1;
(statearr_29889_32097[(1)] = (9));

} else {
var statearr_29890_32099 = state_29870__$1;
(statearr_29890_32099[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29871 === (3))){
var inst_29868 = (state_29870[(2)]);
var state_29870__$1 = state_29870;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29870__$1,inst_29868);
} else {
if((state_val_29871 === (12))){
var state_29870__$1 = state_29870;
var statearr_29891_32104 = state_29870__$1;
(statearr_29891_32104[(2)] = null);

(statearr_29891_32104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29871 === (2))){
var state_29870__$1 = state_29870;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29870__$1,(4),ch);
} else {
if((state_val_29871 === (11))){
var inst_29847 = (state_29870[(7)]);
var inst_29857 = (state_29870[(2)]);
var state_29870__$1 = state_29870;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29870__$1,(8),inst_29857,inst_29847);
} else {
if((state_val_29871 === (9))){
var state_29870__$1 = state_29870;
var statearr_29892_32106 = state_29870__$1;
(statearr_29892_32106[(2)] = tc);

(statearr_29892_32106[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29871 === (5))){
var inst_29850 = cljs.core.async.close_BANG_(tc);
var inst_29851 = cljs.core.async.close_BANG_(fc);
var state_29870__$1 = (function (){var statearr_29897 = state_29870;
(statearr_29897[(8)] = inst_29850);

return statearr_29897;
})();
var statearr_29898_32108 = state_29870__$1;
(statearr_29898_32108[(2)] = inst_29851);

(statearr_29898_32108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29871 === (14))){
var inst_29864 = (state_29870[(2)]);
var state_29870__$1 = state_29870;
var statearr_29899_32109 = state_29870__$1;
(statearr_29899_32109[(2)] = inst_29864);

(statearr_29899_32109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29871 === (10))){
var state_29870__$1 = state_29870;
var statearr_29900_32110 = state_29870__$1;
(statearr_29900_32110[(2)] = fc);

(statearr_29900_32110[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29871 === (8))){
var inst_29859 = (state_29870[(2)]);
var state_29870__$1 = state_29870;
if(cljs.core.truth_(inst_29859)){
var statearr_29902_32112 = state_29870__$1;
(statearr_29902_32112[(1)] = (12));

} else {
var statearr_29907_32116 = state_29870__$1;
(statearr_29907_32116[(1)] = (13));

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
var cljs$core$async$state_machine__28732__auto__ = null;
var cljs$core$async$state_machine__28732__auto____0 = (function (){
var statearr_29908 = [null,null,null,null,null,null,null,null,null];
(statearr_29908[(0)] = cljs$core$async$state_machine__28732__auto__);

(statearr_29908[(1)] = (1));

return statearr_29908;
});
var cljs$core$async$state_machine__28732__auto____1 = (function (state_29870){
while(true){
var ret_value__28733__auto__ = (function (){try{while(true){
var result__28734__auto__ = switch__28731__auto__(state_29870);
if(cljs.core.keyword_identical_QMARK_(result__28734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28734__auto__;
}
break;
}
}catch (e29909){if((e29909 instanceof Object)){
var ex__28735__auto__ = e29909;
var statearr_29910_32121 = state_29870;
(statearr_29910_32121[(5)] = ex__28735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29909;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32122 = state_29870;
state_29870 = G__32122;
continue;
} else {
return ret_value__28733__auto__;
}
break;
}
});
cljs$core$async$state_machine__28732__auto__ = function(state_29870){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28732__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28732__auto____1.call(this,state_29870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28732__auto____0;
cljs$core$async$state_machine__28732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28732__auto____1;
return cljs$core$async$state_machine__28732__auto__;
})()
})();
var state__29079__auto__ = (function (){var statearr_29911 = (f__29077__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29077__auto__.cljs$core$IFn$_invoke$arity$0() : f__29077__auto__.call(null));
(statearr_29911[(6)] = c__29076__auto___32078);

return statearr_29911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29079__auto__);
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
var c__29076__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29077__auto__ = (function (){var switch__28731__auto__ = (function (state_29937){
var state_val_29938 = (state_29937[(1)]);
if((state_val_29938 === (7))){
var inst_29933 = (state_29937[(2)]);
var state_29937__$1 = state_29937;
var statearr_29940_32146 = state_29937__$1;
(statearr_29940_32146[(2)] = inst_29933);

(statearr_29940_32146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (1))){
var inst_29916 = init;
var state_29937__$1 = (function (){var statearr_29941 = state_29937;
(statearr_29941[(7)] = inst_29916);

return statearr_29941;
})();
var statearr_29942_32150 = state_29937__$1;
(statearr_29942_32150[(2)] = null);

(statearr_29942_32150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (4))){
var inst_29920 = (state_29937[(8)]);
var inst_29920__$1 = (state_29937[(2)]);
var inst_29921 = (inst_29920__$1 == null);
var state_29937__$1 = (function (){var statearr_29947 = state_29937;
(statearr_29947[(8)] = inst_29920__$1);

return statearr_29947;
})();
if(cljs.core.truth_(inst_29921)){
var statearr_29948_32155 = state_29937__$1;
(statearr_29948_32155[(1)] = (5));

} else {
var statearr_29949_32156 = state_29937__$1;
(statearr_29949_32156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (6))){
var inst_29920 = (state_29937[(8)]);
var inst_29916 = (state_29937[(7)]);
var inst_29924 = (state_29937[(9)]);
var inst_29924__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_29916,inst_29920) : f.call(null,inst_29916,inst_29920));
var inst_29925 = cljs.core.reduced_QMARK_(inst_29924__$1);
var state_29937__$1 = (function (){var statearr_29951 = state_29937;
(statearr_29951[(9)] = inst_29924__$1);

return statearr_29951;
})();
if(inst_29925){
var statearr_29952_32165 = state_29937__$1;
(statearr_29952_32165[(1)] = (8));

} else {
var statearr_29953_32166 = state_29937__$1;
(statearr_29953_32166[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (3))){
var inst_29935 = (state_29937[(2)]);
var state_29937__$1 = state_29937;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29937__$1,inst_29935);
} else {
if((state_val_29938 === (2))){
var state_29937__$1 = state_29937;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29937__$1,(4),ch);
} else {
if((state_val_29938 === (9))){
var inst_29924 = (state_29937[(9)]);
var inst_29916 = inst_29924;
var state_29937__$1 = (function (){var statearr_29960 = state_29937;
(statearr_29960[(7)] = inst_29916);

return statearr_29960;
})();
var statearr_29961_32173 = state_29937__$1;
(statearr_29961_32173[(2)] = null);

(statearr_29961_32173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (5))){
var inst_29916 = (state_29937[(7)]);
var state_29937__$1 = state_29937;
var statearr_29962_32177 = state_29937__$1;
(statearr_29962_32177[(2)] = inst_29916);

(statearr_29962_32177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (10))){
var inst_29931 = (state_29937[(2)]);
var state_29937__$1 = state_29937;
var statearr_29963_32178 = state_29937__$1;
(statearr_29963_32178[(2)] = inst_29931);

(statearr_29963_32178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (8))){
var inst_29924 = (state_29937[(9)]);
var inst_29927 = cljs.core.deref(inst_29924);
var state_29937__$1 = state_29937;
var statearr_29964_32179 = state_29937__$1;
(statearr_29964_32179[(2)] = inst_29927);

(statearr_29964_32179[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__28732__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28732__auto____0 = (function (){
var statearr_29965 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29965[(0)] = cljs$core$async$reduce_$_state_machine__28732__auto__);

(statearr_29965[(1)] = (1));

return statearr_29965;
});
var cljs$core$async$reduce_$_state_machine__28732__auto____1 = (function (state_29937){
while(true){
var ret_value__28733__auto__ = (function (){try{while(true){
var result__28734__auto__ = switch__28731__auto__(state_29937);
if(cljs.core.keyword_identical_QMARK_(result__28734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28734__auto__;
}
break;
}
}catch (e29967){if((e29967 instanceof Object)){
var ex__28735__auto__ = e29967;
var statearr_29968_32180 = state_29937;
(statearr_29968_32180[(5)] = ex__28735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29967;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32187 = state_29937;
state_29937 = G__32187;
continue;
} else {
return ret_value__28733__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28732__auto__ = function(state_29937){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28732__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28732__auto____1.call(this,state_29937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28732__auto____0;
cljs$core$async$reduce_$_state_machine__28732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28732__auto____1;
return cljs$core$async$reduce_$_state_machine__28732__auto__;
})()
})();
var state__29079__auto__ = (function (){var statearr_29972 = (f__29077__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29077__auto__.cljs$core$IFn$_invoke$arity$0() : f__29077__auto__.call(null));
(statearr_29972[(6)] = c__29076__auto__);

return statearr_29972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29079__auto__);
}));

return c__29076__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29076__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29077__auto__ = (function (){var switch__28731__auto__ = (function (state_29981){
var state_val_29982 = (state_29981[(1)]);
if((state_val_29982 === (1))){
var inst_29976 = cljs.core.async.reduce(f__$1,init,ch);
var state_29981__$1 = state_29981;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29981__$1,(2),inst_29976);
} else {
if((state_val_29982 === (2))){
var inst_29978 = (state_29981[(2)]);
var inst_29979 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_29978) : f__$1.call(null,inst_29978));
var state_29981__$1 = state_29981;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29981__$1,inst_29979);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__28732__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28732__auto____0 = (function (){
var statearr_29986 = [null,null,null,null,null,null,null];
(statearr_29986[(0)] = cljs$core$async$transduce_$_state_machine__28732__auto__);

(statearr_29986[(1)] = (1));

return statearr_29986;
});
var cljs$core$async$transduce_$_state_machine__28732__auto____1 = (function (state_29981){
while(true){
var ret_value__28733__auto__ = (function (){try{while(true){
var result__28734__auto__ = switch__28731__auto__(state_29981);
if(cljs.core.keyword_identical_QMARK_(result__28734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28734__auto__;
}
break;
}
}catch (e29987){if((e29987 instanceof Object)){
var ex__28735__auto__ = e29987;
var statearr_29988_32191 = state_29981;
(statearr_29988_32191[(5)] = ex__28735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29987;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32192 = state_29981;
state_29981 = G__32192;
continue;
} else {
return ret_value__28733__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28732__auto__ = function(state_29981){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28732__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28732__auto____1.call(this,state_29981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28732__auto____0;
cljs$core$async$transduce_$_state_machine__28732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28732__auto____1;
return cljs$core$async$transduce_$_state_machine__28732__auto__;
})()
})();
var state__29079__auto__ = (function (){var statearr_29989 = (f__29077__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29077__auto__.cljs$core$IFn$_invoke$arity$0() : f__29077__auto__.call(null));
(statearr_29989[(6)] = c__29076__auto__);

return statearr_29989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29079__auto__);
}));

return c__29076__auto__;
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
var G__29992 = arguments.length;
switch (G__29992) {
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
var c__29076__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29077__auto__ = (function (){var switch__28731__auto__ = (function (state_30020){
var state_val_30021 = (state_30020[(1)]);
if((state_val_30021 === (7))){
var inst_29999 = (state_30020[(2)]);
var state_30020__$1 = state_30020;
var statearr_30024_32218 = state_30020__$1;
(statearr_30024_32218[(2)] = inst_29999);

(statearr_30024_32218[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30021 === (1))){
var inst_29993 = cljs.core.seq(coll);
var inst_29994 = inst_29993;
var state_30020__$1 = (function (){var statearr_30025 = state_30020;
(statearr_30025[(7)] = inst_29994);

return statearr_30025;
})();
var statearr_30026_32222 = state_30020__$1;
(statearr_30026_32222[(2)] = null);

(statearr_30026_32222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30021 === (4))){
var inst_29994 = (state_30020[(7)]);
var inst_29997 = cljs.core.first(inst_29994);
var state_30020__$1 = state_30020;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30020__$1,(7),ch,inst_29997);
} else {
if((state_val_30021 === (13))){
var inst_30014 = (state_30020[(2)]);
var state_30020__$1 = state_30020;
var statearr_30034_32232 = state_30020__$1;
(statearr_30034_32232[(2)] = inst_30014);

(statearr_30034_32232[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30021 === (6))){
var inst_30002 = (state_30020[(2)]);
var state_30020__$1 = state_30020;
if(cljs.core.truth_(inst_30002)){
var statearr_30035_32238 = state_30020__$1;
(statearr_30035_32238[(1)] = (8));

} else {
var statearr_30036_32239 = state_30020__$1;
(statearr_30036_32239[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30021 === (3))){
var inst_30018 = (state_30020[(2)]);
var state_30020__$1 = state_30020;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30020__$1,inst_30018);
} else {
if((state_val_30021 === (12))){
var state_30020__$1 = state_30020;
var statearr_30040_32245 = state_30020__$1;
(statearr_30040_32245[(2)] = null);

(statearr_30040_32245[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30021 === (2))){
var inst_29994 = (state_30020[(7)]);
var state_30020__$1 = state_30020;
if(cljs.core.truth_(inst_29994)){
var statearr_30041_32247 = state_30020__$1;
(statearr_30041_32247[(1)] = (4));

} else {
var statearr_30045_32248 = state_30020__$1;
(statearr_30045_32248[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30021 === (11))){
var inst_30011 = cljs.core.async.close_BANG_(ch);
var state_30020__$1 = state_30020;
var statearr_30046_32249 = state_30020__$1;
(statearr_30046_32249[(2)] = inst_30011);

(statearr_30046_32249[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30021 === (9))){
var state_30020__$1 = state_30020;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30051_32258 = state_30020__$1;
(statearr_30051_32258[(1)] = (11));

} else {
var statearr_30052_32260 = state_30020__$1;
(statearr_30052_32260[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30021 === (5))){
var inst_29994 = (state_30020[(7)]);
var state_30020__$1 = state_30020;
var statearr_30053_32268 = state_30020__$1;
(statearr_30053_32268[(2)] = inst_29994);

(statearr_30053_32268[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30021 === (10))){
var inst_30016 = (state_30020[(2)]);
var state_30020__$1 = state_30020;
var statearr_30055_32271 = state_30020__$1;
(statearr_30055_32271[(2)] = inst_30016);

(statearr_30055_32271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30021 === (8))){
var inst_29994 = (state_30020[(7)]);
var inst_30006 = cljs.core.next(inst_29994);
var inst_29994__$1 = inst_30006;
var state_30020__$1 = (function (){var statearr_30059 = state_30020;
(statearr_30059[(7)] = inst_29994__$1);

return statearr_30059;
})();
var statearr_30060_32280 = state_30020__$1;
(statearr_30060_32280[(2)] = null);

(statearr_30060_32280[(1)] = (2));


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
var cljs$core$async$state_machine__28732__auto__ = null;
var cljs$core$async$state_machine__28732__auto____0 = (function (){
var statearr_30066 = [null,null,null,null,null,null,null,null];
(statearr_30066[(0)] = cljs$core$async$state_machine__28732__auto__);

(statearr_30066[(1)] = (1));

return statearr_30066;
});
var cljs$core$async$state_machine__28732__auto____1 = (function (state_30020){
while(true){
var ret_value__28733__auto__ = (function (){try{while(true){
var result__28734__auto__ = switch__28731__auto__(state_30020);
if(cljs.core.keyword_identical_QMARK_(result__28734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28734__auto__;
}
break;
}
}catch (e30069){if((e30069 instanceof Object)){
var ex__28735__auto__ = e30069;
var statearr_30073_32287 = state_30020;
(statearr_30073_32287[(5)] = ex__28735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30020);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30069;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32291 = state_30020;
state_30020 = G__32291;
continue;
} else {
return ret_value__28733__auto__;
}
break;
}
});
cljs$core$async$state_machine__28732__auto__ = function(state_30020){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28732__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28732__auto____1.call(this,state_30020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28732__auto____0;
cljs$core$async$state_machine__28732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28732__auto____1;
return cljs$core$async$state_machine__28732__auto__;
})()
})();
var state__29079__auto__ = (function (){var statearr_30079 = (f__29077__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29077__auto__.cljs$core$IFn$_invoke$arity$0() : f__29077__auto__.call(null));
(statearr_30079[(6)] = c__29076__auto__);

return statearr_30079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29079__auto__);
}));

return c__29076__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30094 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30094 = (function (ch,cs,meta30095){
this.ch = ch;
this.cs = cs;
this.meta30095 = meta30095;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30094.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30096,meta30095__$1){
var self__ = this;
var _30096__$1 = this;
return (new cljs.core.async.t_cljs$core$async30094(self__.ch,self__.cs,meta30095__$1));
}));

(cljs.core.async.t_cljs$core$async30094.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30096){
var self__ = this;
var _30096__$1 = this;
return self__.meta30095;
}));

(cljs.core.async.t_cljs$core$async30094.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30094.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30094.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30094.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30094.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30094.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30094.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30095","meta30095",458242621,null)], null);
}));

(cljs.core.async.t_cljs$core$async30094.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30094.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30094");

(cljs.core.async.t_cljs$core$async30094.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30094");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30094.
 */
cljs.core.async.__GT_t_cljs$core$async30094 = (function cljs$core$async$mult_$___GT_t_cljs$core$async30094(ch__$1,cs__$1,meta30095){
return (new cljs.core.async.t_cljs$core$async30094(ch__$1,cs__$1,meta30095));
});

}

return (new cljs.core.async.t_cljs$core$async30094(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__29076__auto___32349 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29077__auto__ = (function (){var switch__28731__auto__ = (function (state_30252){
var state_val_30253 = (state_30252[(1)]);
if((state_val_30253 === (7))){
var inst_30246 = (state_30252[(2)]);
var state_30252__$1 = state_30252;
var statearr_30258_32351 = state_30252__$1;
(statearr_30258_32351[(2)] = inst_30246);

(statearr_30258_32351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30253 === (20))){
var inst_30139 = (state_30252[(7)]);
var inst_30151 = cljs.core.first(inst_30139);
var inst_30152 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30151,(0),null);
var inst_30153 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30151,(1),null);
var state_30252__$1 = (function (){var statearr_30262 = state_30252;
(statearr_30262[(8)] = inst_30152);

return statearr_30262;
})();
if(cljs.core.truth_(inst_30153)){
var statearr_30264_32360 = state_30252__$1;
(statearr_30264_32360[(1)] = (22));

} else {
var statearr_30265_32361 = state_30252__$1;
(statearr_30265_32361[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30253 === (27))){
var inst_30184 = (state_30252[(9)]);
var inst_30189 = (state_30252[(10)]);
var inst_30182 = (state_30252[(11)]);
var inst_30107 = (state_30252[(12)]);
var inst_30189__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_30182,inst_30184);
var inst_30190 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30189__$1,inst_30107,done);
var state_30252__$1 = (function (){var statearr_30268 = state_30252;
(statearr_30268[(10)] = inst_30189__$1);

return statearr_30268;
})();
if(cljs.core.truth_(inst_30190)){
var statearr_30269_32366 = state_30252__$1;
(statearr_30269_32366[(1)] = (30));

} else {
var statearr_30270_32367 = state_30252__$1;
(statearr_30270_32367[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30253 === (1))){
var state_30252__$1 = state_30252;
var statearr_30271_32369 = state_30252__$1;
(statearr_30271_32369[(2)] = null);

(statearr_30271_32369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30253 === (24))){
var inst_30139 = (state_30252[(7)]);
var inst_30158 = (state_30252[(2)]);
var inst_30159 = cljs.core.next(inst_30139);
var inst_30116 = inst_30159;
var inst_30117 = null;
var inst_30118 = (0);
var inst_30119 = (0);
var state_30252__$1 = (function (){var statearr_30272 = state_30252;
(statearr_30272[(13)] = inst_30158);

(statearr_30272[(14)] = inst_30117);

(statearr_30272[(15)] = inst_30119);

(statearr_30272[(16)] = inst_30118);

(statearr_30272[(17)] = inst_30116);

return statearr_30272;
})();
var statearr_30273_32383 = state_30252__$1;
(statearr_30273_32383[(2)] = null);

(statearr_30273_32383[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30253 === (39))){
var state_30252__$1 = state_30252;
var statearr_30279_32387 = state_30252__$1;
(statearr_30279_32387[(2)] = null);

(statearr_30279_32387[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30253 === (4))){
var inst_30107 = (state_30252[(12)]);
var inst_30107__$1 = (state_30252[(2)]);
var inst_30108 = (inst_30107__$1 == null);
var state_30252__$1 = (function (){var statearr_30280 = state_30252;
(statearr_30280[(12)] = inst_30107__$1);

return statearr_30280;
})();
if(cljs.core.truth_(inst_30108)){
var statearr_30281_32395 = state_30252__$1;
(statearr_30281_32395[(1)] = (5));

} else {
var statearr_30283_32397 = state_30252__$1;
(statearr_30283_32397[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30253 === (15))){
var inst_30117 = (state_30252[(14)]);
var inst_30119 = (state_30252[(15)]);
var inst_30118 = (state_30252[(16)]);
var inst_30116 = (state_30252[(17)]);
var inst_30135 = (state_30252[(2)]);
var inst_30136 = (inst_30119 + (1));
var tmp30275 = inst_30117;
var tmp30276 = inst_30118;
var tmp30277 = inst_30116;
var inst_30116__$1 = tmp30277;
var inst_30117__$1 = tmp30275;
var inst_30118__$1 = tmp30276;
var inst_30119__$1 = inst_30136;
var state_30252__$1 = (function (){var statearr_30284 = state_30252;
(statearr_30284[(14)] = inst_30117__$1);

(statearr_30284[(15)] = inst_30119__$1);

(statearr_30284[(18)] = inst_30135);

(statearr_30284[(16)] = inst_30118__$1);

(statearr_30284[(17)] = inst_30116__$1);

return statearr_30284;
})();
var statearr_30285_32408 = state_30252__$1;
(statearr_30285_32408[(2)] = null);

(statearr_30285_32408[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30253 === (21))){
var inst_30163 = (state_30252[(2)]);
var state_30252__$1 = state_30252;
var statearr_30289_32412 = state_30252__$1;
(statearr_30289_32412[(2)] = inst_30163);

(statearr_30289_32412[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30253 === (31))){
var inst_30189 = (state_30252[(10)]);
var inst_30193 = done(null);
var inst_30195 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30189);
var state_30252__$1 = (function (){var statearr_30291 = state_30252;
(statearr_30291[(19)] = inst_30193);

return statearr_30291;
})();
var statearr_30292_32421 = state_30252__$1;
(statearr_30292_32421[(2)] = inst_30195);

(statearr_30292_32421[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30253 === (32))){
var inst_30184 = (state_30252[(9)]);
var inst_30182 = (state_30252[(11)]);
var inst_30183 = (state_30252[(20)]);
var inst_30181 = (state_30252[(21)]);
var inst_30197 = (state_30252[(2)]);
var inst_30198 = (inst_30184 + (1));
var tmp30286 = inst_30182;
var tmp30287 = inst_30183;
var tmp30288 = inst_30181;
var inst_30181__$1 = tmp30288;
var inst_30182__$1 = tmp30286;
var inst_30183__$1 = tmp30287;
var inst_30184__$1 = inst_30198;
var state_30252__$1 = (function (){var statearr_30293 = state_30252;
(statearr_30293[(9)] = inst_30184__$1);

(statearr_30293[(22)] = inst_30197);

(statearr_30293[(11)] = inst_30182__$1);

(statearr_30293[(20)] = inst_30183__$1);

(statearr_30293[(21)] = inst_30181__$1);

return statearr_30293;
})();
var statearr_30294_32434 = state_30252__$1;
(statearr_30294_32434[(2)] = null);

(statearr_30294_32434[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30253 === (40))){
var inst_30216 = (state_30252[(23)]);
var inst_30221 = done(null);
var inst_30222 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30216);
var state_30252__$1 = (function (){var statearr_30295 = state_30252;
(statearr_30295[(24)] = inst_30221);

return statearr_30295;
})();
var statearr_30296_32443 = state_30252__$1;
(statearr_30296_32443[(2)] = inst_30222);

(statearr_30296_32443[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30253 === (33))){
var inst_30201 = (state_30252[(25)]);
var inst_30204 = cljs.core.chunked_seq_QMARK_(inst_30201);
var state_30252__$1 = state_30252;
if(inst_30204){
var statearr_30298_32447 = state_30252__$1;
(statearr_30298_32447[(1)] = (36));

} else {
var statearr_30299_32448 = state_30252__$1;
(statearr_30299_32448[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30253 === (13))){
var inst_30129 = (state_30252[(26)]);
var inst_30132 = cljs.core.async.close_BANG_(inst_30129);
var state_30252__$1 = state_30252;
var statearr_30301_32451 = state_30252__$1;
(statearr_30301_32451[(2)] = inst_30132);

(statearr_30301_32451[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30253 === (22))){
var inst_30152 = (state_30252[(8)]);
var inst_30155 = cljs.core.async.close_BANG_(inst_30152);
var state_30252__$1 = state_30252;
var statearr_30305_32453 = state_30252__$1;
(statearr_30305_32453[(2)] = inst_30155);

(statearr_30305_32453[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30253 === (36))){
var inst_30201 = (state_30252[(25)]);
var inst_30210 = cljs.core.chunk_first(inst_30201);
var inst_30211 = cljs.core.chunk_rest(inst_30201);
var inst_30212 = cljs.core.count(inst_30210);
var inst_30181 = inst_30211;
var inst_30182 = inst_30210;
var inst_30183 = inst_30212;
var inst_30184 = (0);
var state_30252__$1 = (function (){var statearr_30307 = state_30252;
(statearr_30307[(9)] = inst_30184);

(statearr_30307[(11)] = inst_30182);

(statearr_30307[(20)] = inst_30183);

(statearr_30307[(21)] = inst_30181);

return statearr_30307;
})();
var statearr_30308_32461 = state_30252__$1;
(statearr_30308_32461[(2)] = null);

(statearr_30308_32461[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30253 === (41))){
var inst_30201 = (state_30252[(25)]);
var inst_30224 = (state_30252[(2)]);
var inst_30225 = cljs.core.next(inst_30201);
var inst_30181 = inst_30225;
var inst_30182 = null;
var inst_30183 = (0);
var inst_30184 = (0);
var state_30252__$1 = (function (){var statearr_30309 = state_30252;
(statearr_30309[(9)] = inst_30184);

(statearr_30309[(11)] = inst_30182);

(statearr_30309[(27)] = inst_30224);

(statearr_30309[(20)] = inst_30183);

(statearr_30309[(21)] = inst_30181);

return statearr_30309;
})();
var statearr_30310_32472 = state_30252__$1;
(statearr_30310_32472[(2)] = null);

(statearr_30310_32472[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30253 === (43))){
var state_30252__$1 = state_30252;
var statearr_30313_32479 = state_30252__$1;
(statearr_30313_32479[(2)] = null);

(statearr_30313_32479[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30253 === (29))){
var inst_30233 = (state_30252[(2)]);
var state_30252__$1 = state_30252;
var statearr_30317_32481 = state_30252__$1;
(statearr_30317_32481[(2)] = inst_30233);

(statearr_30317_32481[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30253 === (44))){
var inst_30243 = (state_30252[(2)]);
var state_30252__$1 = (function (){var statearr_30318 = state_30252;
(statearr_30318[(28)] = inst_30243);

return statearr_30318;
})();
var statearr_30319_32487 = state_30252__$1;
(statearr_30319_32487[(2)] = null);

(statearr_30319_32487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30253 === (6))){
var inst_30173 = (state_30252[(29)]);
var inst_30172 = cljs.core.deref(cs);
var inst_30173__$1 = cljs.core.keys(inst_30172);
var inst_30174 = cljs.core.count(inst_30173__$1);
var inst_30175 = cljs.core.reset_BANG_(dctr,inst_30174);
var inst_30180 = cljs.core.seq(inst_30173__$1);
var inst_30181 = inst_30180;
var inst_30182 = null;
var inst_30183 = (0);
var inst_30184 = (0);
var state_30252__$1 = (function (){var statearr_30321 = state_30252;
(statearr_30321[(9)] = inst_30184);

(statearr_30321[(29)] = inst_30173__$1);

(statearr_30321[(30)] = inst_30175);

(statearr_30321[(11)] = inst_30182);

(statearr_30321[(20)] = inst_30183);

(statearr_30321[(21)] = inst_30181);

return statearr_30321;
})();
var statearr_30322_32500 = state_30252__$1;
(statearr_30322_32500[(2)] = null);

(statearr_30322_32500[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30253 === (28))){
var inst_30201 = (state_30252[(25)]);
var inst_30181 = (state_30252[(21)]);
var inst_30201__$1 = cljs.core.seq(inst_30181);
var state_30252__$1 = (function (){var statearr_30327 = state_30252;
(statearr_30327[(25)] = inst_30201__$1);

return statearr_30327;
})();
if(inst_30201__$1){
var statearr_30328_32507 = state_30252__$1;
(statearr_30328_32507[(1)] = (33));

} else {
var statearr_30329_32508 = state_30252__$1;
(statearr_30329_32508[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30253 === (25))){
var inst_30184 = (state_30252[(9)]);
var inst_30183 = (state_30252[(20)]);
var inst_30186 = (inst_30184 < inst_30183);
var inst_30187 = inst_30186;
var state_30252__$1 = state_30252;
if(cljs.core.truth_(inst_30187)){
var statearr_30330_32511 = state_30252__$1;
(statearr_30330_32511[(1)] = (27));

} else {
var statearr_30331_32513 = state_30252__$1;
(statearr_30331_32513[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30253 === (34))){
var state_30252__$1 = state_30252;
var statearr_30332_32514 = state_30252__$1;
(statearr_30332_32514[(2)] = null);

(statearr_30332_32514[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30253 === (17))){
var state_30252__$1 = state_30252;
var statearr_30333_32519 = state_30252__$1;
(statearr_30333_32519[(2)] = null);

(statearr_30333_32519[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30253 === (3))){
var inst_30248 = (state_30252[(2)]);
var state_30252__$1 = state_30252;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30252__$1,inst_30248);
} else {
if((state_val_30253 === (12))){
var inst_30168 = (state_30252[(2)]);
var state_30252__$1 = state_30252;
var statearr_30334_32525 = state_30252__$1;
(statearr_30334_32525[(2)] = inst_30168);

(statearr_30334_32525[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30253 === (2))){
var state_30252__$1 = state_30252;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30252__$1,(4),ch);
} else {
if((state_val_30253 === (23))){
var state_30252__$1 = state_30252;
var statearr_30339_32537 = state_30252__$1;
(statearr_30339_32537[(2)] = null);

(statearr_30339_32537[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30253 === (35))){
var inst_30231 = (state_30252[(2)]);
var state_30252__$1 = state_30252;
var statearr_30342_32541 = state_30252__$1;
(statearr_30342_32541[(2)] = inst_30231);

(statearr_30342_32541[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30253 === (19))){
var inst_30139 = (state_30252[(7)]);
var inst_30143 = cljs.core.chunk_first(inst_30139);
var inst_30144 = cljs.core.chunk_rest(inst_30139);
var inst_30145 = cljs.core.count(inst_30143);
var inst_30116 = inst_30144;
var inst_30117 = inst_30143;
var inst_30118 = inst_30145;
var inst_30119 = (0);
var state_30252__$1 = (function (){var statearr_30343 = state_30252;
(statearr_30343[(14)] = inst_30117);

(statearr_30343[(15)] = inst_30119);

(statearr_30343[(16)] = inst_30118);

(statearr_30343[(17)] = inst_30116);

return statearr_30343;
})();
var statearr_30346_32549 = state_30252__$1;
(statearr_30346_32549[(2)] = null);

(statearr_30346_32549[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30253 === (11))){
var inst_30116 = (state_30252[(17)]);
var inst_30139 = (state_30252[(7)]);
var inst_30139__$1 = cljs.core.seq(inst_30116);
var state_30252__$1 = (function (){var statearr_30347 = state_30252;
(statearr_30347[(7)] = inst_30139__$1);

return statearr_30347;
})();
if(inst_30139__$1){
var statearr_30348_32559 = state_30252__$1;
(statearr_30348_32559[(1)] = (16));

} else {
var statearr_30350_32560 = state_30252__$1;
(statearr_30350_32560[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30253 === (9))){
var inst_30170 = (state_30252[(2)]);
var state_30252__$1 = state_30252;
var statearr_30355_32562 = state_30252__$1;
(statearr_30355_32562[(2)] = inst_30170);

(statearr_30355_32562[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30253 === (5))){
var inst_30114 = cljs.core.deref(cs);
var inst_30115 = cljs.core.seq(inst_30114);
var inst_30116 = inst_30115;
var inst_30117 = null;
var inst_30118 = (0);
var inst_30119 = (0);
var state_30252__$1 = (function (){var statearr_30361 = state_30252;
(statearr_30361[(14)] = inst_30117);

(statearr_30361[(15)] = inst_30119);

(statearr_30361[(16)] = inst_30118);

(statearr_30361[(17)] = inst_30116);

return statearr_30361;
})();
var statearr_30362_32572 = state_30252__$1;
(statearr_30362_32572[(2)] = null);

(statearr_30362_32572[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30253 === (14))){
var state_30252__$1 = state_30252;
var statearr_30367_32581 = state_30252__$1;
(statearr_30367_32581[(2)] = null);

(statearr_30367_32581[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30253 === (45))){
var inst_30240 = (state_30252[(2)]);
var state_30252__$1 = state_30252;
var statearr_30368_32590 = state_30252__$1;
(statearr_30368_32590[(2)] = inst_30240);

(statearr_30368_32590[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30253 === (26))){
var inst_30173 = (state_30252[(29)]);
var inst_30235 = (state_30252[(2)]);
var inst_30237 = cljs.core.seq(inst_30173);
var state_30252__$1 = (function (){var statearr_30369 = state_30252;
(statearr_30369[(31)] = inst_30235);

return statearr_30369;
})();
if(inst_30237){
var statearr_30370_32592 = state_30252__$1;
(statearr_30370_32592[(1)] = (42));

} else {
var statearr_30371_32595 = state_30252__$1;
(statearr_30371_32595[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30253 === (16))){
var inst_30139 = (state_30252[(7)]);
var inst_30141 = cljs.core.chunked_seq_QMARK_(inst_30139);
var state_30252__$1 = state_30252;
if(inst_30141){
var statearr_30374_32600 = state_30252__$1;
(statearr_30374_32600[(1)] = (19));

} else {
var statearr_30375_32601 = state_30252__$1;
(statearr_30375_32601[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30253 === (38))){
var inst_30228 = (state_30252[(2)]);
var state_30252__$1 = state_30252;
var statearr_30377_32602 = state_30252__$1;
(statearr_30377_32602[(2)] = inst_30228);

(statearr_30377_32602[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30253 === (30))){
var state_30252__$1 = state_30252;
var statearr_30380_32606 = state_30252__$1;
(statearr_30380_32606[(2)] = null);

(statearr_30380_32606[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30253 === (10))){
var inst_30117 = (state_30252[(14)]);
var inst_30119 = (state_30252[(15)]);
var inst_30128 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_30117,inst_30119);
var inst_30129 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30128,(0),null);
var inst_30130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30128,(1),null);
var state_30252__$1 = (function (){var statearr_30381 = state_30252;
(statearr_30381[(26)] = inst_30129);

return statearr_30381;
})();
if(cljs.core.truth_(inst_30130)){
var statearr_30382_32617 = state_30252__$1;
(statearr_30382_32617[(1)] = (13));

} else {
var statearr_30383_32620 = state_30252__$1;
(statearr_30383_32620[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30253 === (18))){
var inst_30166 = (state_30252[(2)]);
var state_30252__$1 = state_30252;
var statearr_30384_32624 = state_30252__$1;
(statearr_30384_32624[(2)] = inst_30166);

(statearr_30384_32624[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30253 === (42))){
var state_30252__$1 = state_30252;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30252__$1,(45),dchan);
} else {
if((state_val_30253 === (37))){
var inst_30201 = (state_30252[(25)]);
var inst_30216 = (state_30252[(23)]);
var inst_30107 = (state_30252[(12)]);
var inst_30216__$1 = cljs.core.first(inst_30201);
var inst_30218 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30216__$1,inst_30107,done);
var state_30252__$1 = (function (){var statearr_30386 = state_30252;
(statearr_30386[(23)] = inst_30216__$1);

return statearr_30386;
})();
if(cljs.core.truth_(inst_30218)){
var statearr_30387_32625 = state_30252__$1;
(statearr_30387_32625[(1)] = (39));

} else {
var statearr_30388_32630 = state_30252__$1;
(statearr_30388_32630[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30253 === (8))){
var inst_30119 = (state_30252[(15)]);
var inst_30118 = (state_30252[(16)]);
var inst_30122 = (inst_30119 < inst_30118);
var inst_30123 = inst_30122;
var state_30252__$1 = state_30252;
if(cljs.core.truth_(inst_30123)){
var statearr_30390_32636 = state_30252__$1;
(statearr_30390_32636[(1)] = (10));

} else {
var statearr_30391_32637 = state_30252__$1;
(statearr_30391_32637[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__28732__auto__ = null;
var cljs$core$async$mult_$_state_machine__28732__auto____0 = (function (){
var statearr_30395 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30395[(0)] = cljs$core$async$mult_$_state_machine__28732__auto__);

(statearr_30395[(1)] = (1));

return statearr_30395;
});
var cljs$core$async$mult_$_state_machine__28732__auto____1 = (function (state_30252){
while(true){
var ret_value__28733__auto__ = (function (){try{while(true){
var result__28734__auto__ = switch__28731__auto__(state_30252);
if(cljs.core.keyword_identical_QMARK_(result__28734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28734__auto__;
}
break;
}
}catch (e30401){if((e30401 instanceof Object)){
var ex__28735__auto__ = e30401;
var statearr_30402_32641 = state_30252;
(statearr_30402_32641[(5)] = ex__28735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30401;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32643 = state_30252;
state_30252 = G__32643;
continue;
} else {
return ret_value__28733__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28732__auto__ = function(state_30252){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28732__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28732__auto____1.call(this,state_30252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28732__auto____0;
cljs$core$async$mult_$_state_machine__28732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28732__auto____1;
return cljs$core$async$mult_$_state_machine__28732__auto__;
})()
})();
var state__29079__auto__ = (function (){var statearr_30407 = (f__29077__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29077__auto__.cljs$core$IFn$_invoke$arity$0() : f__29077__auto__.call(null));
(statearr_30407[(6)] = c__29076__auto___32349);

return statearr_30407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29079__auto__);
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
var G__30409 = arguments.length;
switch (G__30409) {
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
var len__4789__auto___32730 = arguments.length;
var i__4790__auto___32731 = (0);
while(true){
if((i__4790__auto___32731 < len__4789__auto___32730)){
args__4795__auto__.push((arguments[i__4790__auto___32731]));

var G__32732 = (i__4790__auto___32731 + (1));
i__4790__auto___32731 = G__32732;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30462){
var map__30463 = p__30462;
var map__30463__$1 = (((((!((map__30463 == null))))?(((((map__30463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30463.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30463):map__30463);
var opts = map__30463__$1;
var statearr_30465_32738 = state;
(statearr_30465_32738[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_30466_32741 = state;
(statearr_30466_32741[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_30467_32743 = state;
(statearr_30467_32743[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30456){
var G__30457 = cljs.core.first(seq30456);
var seq30456__$1 = cljs.core.next(seq30456);
var G__30458 = cljs.core.first(seq30456__$1);
var seq30456__$2 = cljs.core.next(seq30456__$1);
var G__30459 = cljs.core.first(seq30456__$2);
var seq30456__$3 = cljs.core.next(seq30456__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30457,G__30458,G__30459,seq30456__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30476 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30476 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30477){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30477 = meta30477;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30476.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30478,meta30477__$1){
var self__ = this;
var _30478__$1 = this;
return (new cljs.core.async.t_cljs$core$async30476(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30477__$1));
}));

(cljs.core.async.t_cljs$core$async30476.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30478){
var self__ = this;
var _30478__$1 = this;
return self__.meta30477;
}));

(cljs.core.async.t_cljs$core$async30476.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30476.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async30476.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30476.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30476.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30476.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30476.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30476.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30476.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30477","meta30477",1106946629,null)], null);
}));

(cljs.core.async.t_cljs$core$async30476.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30476.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30476");

(cljs.core.async.t_cljs$core$async30476.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30476");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30476.
 */
cljs.core.async.__GT_t_cljs$core$async30476 = (function cljs$core$async$mix_$___GT_t_cljs$core$async30476(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30477){
return (new cljs.core.async.t_cljs$core$async30476(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30477));
});

}

return (new cljs.core.async.t_cljs$core$async30476(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29076__auto___32792 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29077__auto__ = (function (){var switch__28731__auto__ = (function (state_30589){
var state_val_30590 = (state_30589[(1)]);
if((state_val_30590 === (7))){
var inst_30502 = (state_30589[(2)]);
var state_30589__$1 = state_30589;
var statearr_30592_32800 = state_30589__$1;
(statearr_30592_32800[(2)] = inst_30502);

(statearr_30592_32800[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (20))){
var inst_30515 = (state_30589[(7)]);
var state_30589__$1 = state_30589;
var statearr_30593_32801 = state_30589__$1;
(statearr_30593_32801[(2)] = inst_30515);

(statearr_30593_32801[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (27))){
var state_30589__$1 = state_30589;
var statearr_30594_32802 = state_30589__$1;
(statearr_30594_32802[(2)] = null);

(statearr_30594_32802[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (1))){
var inst_30488 = (state_30589[(8)]);
var inst_30488__$1 = calc_state();
var inst_30491 = (inst_30488__$1 == null);
var inst_30492 = cljs.core.not(inst_30491);
var state_30589__$1 = (function (){var statearr_30595 = state_30589;
(statearr_30595[(8)] = inst_30488__$1);

return statearr_30595;
})();
if(inst_30492){
var statearr_30596_32803 = state_30589__$1;
(statearr_30596_32803[(1)] = (2));

} else {
var statearr_30599_32810 = state_30589__$1;
(statearr_30599_32810[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (24))){
var inst_30563 = (state_30589[(9)]);
var inst_30540 = (state_30589[(10)]);
var inst_30549 = (state_30589[(11)]);
var inst_30563__$1 = (inst_30540.cljs$core$IFn$_invoke$arity$1 ? inst_30540.cljs$core$IFn$_invoke$arity$1(inst_30549) : inst_30540.call(null,inst_30549));
var state_30589__$1 = (function (){var statearr_30602 = state_30589;
(statearr_30602[(9)] = inst_30563__$1);

return statearr_30602;
})();
if(cljs.core.truth_(inst_30563__$1)){
var statearr_30603_32811 = state_30589__$1;
(statearr_30603_32811[(1)] = (29));

} else {
var statearr_30604_32812 = state_30589__$1;
(statearr_30604_32812[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (4))){
var inst_30505 = (state_30589[(2)]);
var state_30589__$1 = state_30589;
if(cljs.core.truth_(inst_30505)){
var statearr_30607_32814 = state_30589__$1;
(statearr_30607_32814[(1)] = (8));

} else {
var statearr_30608_32815 = state_30589__$1;
(statearr_30608_32815[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (15))){
var inst_30534 = (state_30589[(2)]);
var state_30589__$1 = state_30589;
if(cljs.core.truth_(inst_30534)){
var statearr_30609_32816 = state_30589__$1;
(statearr_30609_32816[(1)] = (19));

} else {
var statearr_30610_32817 = state_30589__$1;
(statearr_30610_32817[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (21))){
var inst_30539 = (state_30589[(12)]);
var inst_30539__$1 = (state_30589[(2)]);
var inst_30540 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30539__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30541 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30539__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30542 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30539__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30589__$1 = (function (){var statearr_30611 = state_30589;
(statearr_30611[(10)] = inst_30540);

(statearr_30611[(12)] = inst_30539__$1);

(statearr_30611[(13)] = inst_30541);

return statearr_30611;
})();
return cljs.core.async.ioc_alts_BANG_(state_30589__$1,(22),inst_30542);
} else {
if((state_val_30590 === (31))){
var inst_30571 = (state_30589[(2)]);
var state_30589__$1 = state_30589;
if(cljs.core.truth_(inst_30571)){
var statearr_30613_32824 = state_30589__$1;
(statearr_30613_32824[(1)] = (32));

} else {
var statearr_30614_32825 = state_30589__$1;
(statearr_30614_32825[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (32))){
var inst_30548 = (state_30589[(14)]);
var state_30589__$1 = state_30589;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30589__$1,(35),out,inst_30548);
} else {
if((state_val_30590 === (33))){
var inst_30539 = (state_30589[(12)]);
var inst_30515 = inst_30539;
var state_30589__$1 = (function (){var statearr_30615 = state_30589;
(statearr_30615[(7)] = inst_30515);

return statearr_30615;
})();
var statearr_30616_32830 = state_30589__$1;
(statearr_30616_32830[(2)] = null);

(statearr_30616_32830[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (13))){
var inst_30515 = (state_30589[(7)]);
var inst_30523 = inst_30515.cljs$lang$protocol_mask$partition0$;
var inst_30524 = (inst_30523 & (64));
var inst_30525 = inst_30515.cljs$core$ISeq$;
var inst_30526 = (cljs.core.PROTOCOL_SENTINEL === inst_30525);
var inst_30527 = ((inst_30524) || (inst_30526));
var state_30589__$1 = state_30589;
if(cljs.core.truth_(inst_30527)){
var statearr_30618_32832 = state_30589__$1;
(statearr_30618_32832[(1)] = (16));

} else {
var statearr_30619_32833 = state_30589__$1;
(statearr_30619_32833[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (22))){
var inst_30548 = (state_30589[(14)]);
var inst_30549 = (state_30589[(11)]);
var inst_30547 = (state_30589[(2)]);
var inst_30548__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30547,(0),null);
var inst_30549__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30547,(1),null);
var inst_30550 = (inst_30548__$1 == null);
var inst_30551 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30549__$1,change);
var inst_30552 = ((inst_30550) || (inst_30551));
var state_30589__$1 = (function (){var statearr_30624 = state_30589;
(statearr_30624[(14)] = inst_30548__$1);

(statearr_30624[(11)] = inst_30549__$1);

return statearr_30624;
})();
if(cljs.core.truth_(inst_30552)){
var statearr_30625_32839 = state_30589__$1;
(statearr_30625_32839[(1)] = (23));

} else {
var statearr_30626_32840 = state_30589__$1;
(statearr_30626_32840[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (36))){
var inst_30539 = (state_30589[(12)]);
var inst_30515 = inst_30539;
var state_30589__$1 = (function (){var statearr_30629 = state_30589;
(statearr_30629[(7)] = inst_30515);

return statearr_30629;
})();
var statearr_30630_32841 = state_30589__$1;
(statearr_30630_32841[(2)] = null);

(statearr_30630_32841[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (29))){
var inst_30563 = (state_30589[(9)]);
var state_30589__$1 = state_30589;
var statearr_30631_32842 = state_30589__$1;
(statearr_30631_32842[(2)] = inst_30563);

(statearr_30631_32842[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (6))){
var state_30589__$1 = state_30589;
var statearr_30632_32845 = state_30589__$1;
(statearr_30632_32845[(2)] = false);

(statearr_30632_32845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (28))){
var inst_30559 = (state_30589[(2)]);
var inst_30560 = calc_state();
var inst_30515 = inst_30560;
var state_30589__$1 = (function (){var statearr_30633 = state_30589;
(statearr_30633[(7)] = inst_30515);

(statearr_30633[(15)] = inst_30559);

return statearr_30633;
})();
var statearr_30634_32846 = state_30589__$1;
(statearr_30634_32846[(2)] = null);

(statearr_30634_32846[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (25))){
var inst_30585 = (state_30589[(2)]);
var state_30589__$1 = state_30589;
var statearr_30635_32847 = state_30589__$1;
(statearr_30635_32847[(2)] = inst_30585);

(statearr_30635_32847[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (34))){
var inst_30583 = (state_30589[(2)]);
var state_30589__$1 = state_30589;
var statearr_30636_32851 = state_30589__$1;
(statearr_30636_32851[(2)] = inst_30583);

(statearr_30636_32851[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (17))){
var state_30589__$1 = state_30589;
var statearr_30637_32852 = state_30589__$1;
(statearr_30637_32852[(2)] = false);

(statearr_30637_32852[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (3))){
var state_30589__$1 = state_30589;
var statearr_30638_32859 = state_30589__$1;
(statearr_30638_32859[(2)] = false);

(statearr_30638_32859[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (12))){
var inst_30587 = (state_30589[(2)]);
var state_30589__$1 = state_30589;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30589__$1,inst_30587);
} else {
if((state_val_30590 === (2))){
var inst_30488 = (state_30589[(8)]);
var inst_30494 = inst_30488.cljs$lang$protocol_mask$partition0$;
var inst_30495 = (inst_30494 & (64));
var inst_30496 = inst_30488.cljs$core$ISeq$;
var inst_30497 = (cljs.core.PROTOCOL_SENTINEL === inst_30496);
var inst_30498 = ((inst_30495) || (inst_30497));
var state_30589__$1 = state_30589;
if(cljs.core.truth_(inst_30498)){
var statearr_30639_32862 = state_30589__$1;
(statearr_30639_32862[(1)] = (5));

} else {
var statearr_30640_32864 = state_30589__$1;
(statearr_30640_32864[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (23))){
var inst_30548 = (state_30589[(14)]);
var inst_30554 = (inst_30548 == null);
var state_30589__$1 = state_30589;
if(cljs.core.truth_(inst_30554)){
var statearr_30641_32866 = state_30589__$1;
(statearr_30641_32866[(1)] = (26));

} else {
var statearr_30642_32868 = state_30589__$1;
(statearr_30642_32868[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (35))){
var inst_30574 = (state_30589[(2)]);
var state_30589__$1 = state_30589;
if(cljs.core.truth_(inst_30574)){
var statearr_30643_32869 = state_30589__$1;
(statearr_30643_32869[(1)] = (36));

} else {
var statearr_30648_32870 = state_30589__$1;
(statearr_30648_32870[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (19))){
var inst_30515 = (state_30589[(7)]);
var inst_30536 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30515);
var state_30589__$1 = state_30589;
var statearr_30649_32871 = state_30589__$1;
(statearr_30649_32871[(2)] = inst_30536);

(statearr_30649_32871[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (11))){
var inst_30515 = (state_30589[(7)]);
var inst_30520 = (inst_30515 == null);
var inst_30521 = cljs.core.not(inst_30520);
var state_30589__$1 = state_30589;
if(inst_30521){
var statearr_30654_32872 = state_30589__$1;
(statearr_30654_32872[(1)] = (13));

} else {
var statearr_30655_32873 = state_30589__$1;
(statearr_30655_32873[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (9))){
var inst_30488 = (state_30589[(8)]);
var state_30589__$1 = state_30589;
var statearr_30656_32874 = state_30589__$1;
(statearr_30656_32874[(2)] = inst_30488);

(statearr_30656_32874[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (5))){
var state_30589__$1 = state_30589;
var statearr_30661_32875 = state_30589__$1;
(statearr_30661_32875[(2)] = true);

(statearr_30661_32875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (14))){
var state_30589__$1 = state_30589;
var statearr_30662_32876 = state_30589__$1;
(statearr_30662_32876[(2)] = false);

(statearr_30662_32876[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (26))){
var inst_30549 = (state_30589[(11)]);
var inst_30556 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_30549);
var state_30589__$1 = state_30589;
var statearr_30666_32878 = state_30589__$1;
(statearr_30666_32878[(2)] = inst_30556);

(statearr_30666_32878[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (16))){
var state_30589__$1 = state_30589;
var statearr_30671_32879 = state_30589__$1;
(statearr_30671_32879[(2)] = true);

(statearr_30671_32879[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (38))){
var inst_30579 = (state_30589[(2)]);
var state_30589__$1 = state_30589;
var statearr_30672_32880 = state_30589__$1;
(statearr_30672_32880[(2)] = inst_30579);

(statearr_30672_32880[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (30))){
var inst_30540 = (state_30589[(10)]);
var inst_30549 = (state_30589[(11)]);
var inst_30541 = (state_30589[(13)]);
var inst_30566 = cljs.core.empty_QMARK_(inst_30540);
var inst_30567 = (inst_30541.cljs$core$IFn$_invoke$arity$1 ? inst_30541.cljs$core$IFn$_invoke$arity$1(inst_30549) : inst_30541.call(null,inst_30549));
var inst_30568 = cljs.core.not(inst_30567);
var inst_30569 = ((inst_30566) && (inst_30568));
var state_30589__$1 = state_30589;
var statearr_30678_32881 = state_30589__$1;
(statearr_30678_32881[(2)] = inst_30569);

(statearr_30678_32881[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (10))){
var inst_30488 = (state_30589[(8)]);
var inst_30510 = (state_30589[(2)]);
var inst_30511 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30510,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30512 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30510,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30514 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30510,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30515 = inst_30488;
var state_30589__$1 = (function (){var statearr_30683 = state_30589;
(statearr_30683[(16)] = inst_30511);

(statearr_30683[(17)] = inst_30512);

(statearr_30683[(18)] = inst_30514);

(statearr_30683[(7)] = inst_30515);

return statearr_30683;
})();
var statearr_30684_32883 = state_30589__$1;
(statearr_30684_32883[(2)] = null);

(statearr_30684_32883[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (18))){
var inst_30531 = (state_30589[(2)]);
var state_30589__$1 = state_30589;
var statearr_30685_32884 = state_30589__$1;
(statearr_30685_32884[(2)] = inst_30531);

(statearr_30685_32884[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (37))){
var state_30589__$1 = state_30589;
var statearr_30691_32886 = state_30589__$1;
(statearr_30691_32886[(2)] = null);

(statearr_30691_32886[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (8))){
var inst_30488 = (state_30589[(8)]);
var inst_30507 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30488);
var state_30589__$1 = state_30589;
var statearr_30692_32887 = state_30589__$1;
(statearr_30692_32887[(2)] = inst_30507);

(statearr_30692_32887[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__28732__auto__ = null;
var cljs$core$async$mix_$_state_machine__28732__auto____0 = (function (){
var statearr_30693 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30693[(0)] = cljs$core$async$mix_$_state_machine__28732__auto__);

(statearr_30693[(1)] = (1));

return statearr_30693;
});
var cljs$core$async$mix_$_state_machine__28732__auto____1 = (function (state_30589){
while(true){
var ret_value__28733__auto__ = (function (){try{while(true){
var result__28734__auto__ = switch__28731__auto__(state_30589);
if(cljs.core.keyword_identical_QMARK_(result__28734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28734__auto__;
}
break;
}
}catch (e30694){if((e30694 instanceof Object)){
var ex__28735__auto__ = e30694;
var statearr_30695_32889 = state_30589;
(statearr_30695_32889[(5)] = ex__28735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30694;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32891 = state_30589;
state_30589 = G__32891;
continue;
} else {
return ret_value__28733__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28732__auto__ = function(state_30589){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28732__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28732__auto____1.call(this,state_30589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28732__auto____0;
cljs$core$async$mix_$_state_machine__28732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28732__auto____1;
return cljs$core$async$mix_$_state_machine__28732__auto__;
})()
})();
var state__29079__auto__ = (function (){var statearr_30700 = (f__29077__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29077__auto__.cljs$core$IFn$_invoke$arity$0() : f__29077__auto__.call(null));
(statearr_30700[(6)] = c__29076__auto___32792);

return statearr_30700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29079__auto__);
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
var G__30703 = arguments.length;
switch (G__30703) {
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
var G__30714 = arguments.length;
switch (G__30714) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__30712_SHARP_){
if(cljs.core.truth_((p1__30712_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__30712_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__30712_SHARP_.call(null,topic)))){
return p1__30712_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__30712_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30717 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30717 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30718){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30718 = meta30718;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30717.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30719,meta30718__$1){
var self__ = this;
var _30719__$1 = this;
return (new cljs.core.async.t_cljs$core$async30717(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30718__$1));
}));

(cljs.core.async.t_cljs$core$async30717.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30719){
var self__ = this;
var _30719__$1 = this;
return self__.meta30718;
}));

(cljs.core.async.t_cljs$core$async30717.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30717.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30717.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30717.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async30717.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async30717.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async30717.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async30717.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30718","meta30718",-699866866,null)], null);
}));

(cljs.core.async.t_cljs$core$async30717.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30717.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30717");

(cljs.core.async.t_cljs$core$async30717.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30717");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30717.
 */
cljs.core.async.__GT_t_cljs$core$async30717 = (function cljs$core$async$__GT_t_cljs$core$async30717(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30718){
return (new cljs.core.async.t_cljs$core$async30717(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30718));
});

}

return (new cljs.core.async.t_cljs$core$async30717(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29076__auto___32931 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29077__auto__ = (function (){var switch__28731__auto__ = (function (state_30812){
var state_val_30813 = (state_30812[(1)]);
if((state_val_30813 === (7))){
var inst_30808 = (state_30812[(2)]);
var state_30812__$1 = state_30812;
var statearr_30817_32936 = state_30812__$1;
(statearr_30817_32936[(2)] = inst_30808);

(statearr_30817_32936[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (20))){
var state_30812__$1 = state_30812;
var statearr_30818_32937 = state_30812__$1;
(statearr_30818_32937[(2)] = null);

(statearr_30818_32937[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (1))){
var state_30812__$1 = state_30812;
var statearr_30820_32939 = state_30812__$1;
(statearr_30820_32939[(2)] = null);

(statearr_30820_32939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (24))){
var inst_30791 = (state_30812[(7)]);
var inst_30800 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_30791);
var state_30812__$1 = state_30812;
var statearr_30821_32947 = state_30812__$1;
(statearr_30821_32947[(2)] = inst_30800);

(statearr_30821_32947[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (4))){
var inst_30743 = (state_30812[(8)]);
var inst_30743__$1 = (state_30812[(2)]);
var inst_30744 = (inst_30743__$1 == null);
var state_30812__$1 = (function (){var statearr_30822 = state_30812;
(statearr_30822[(8)] = inst_30743__$1);

return statearr_30822;
})();
if(cljs.core.truth_(inst_30744)){
var statearr_30824_32953 = state_30812__$1;
(statearr_30824_32953[(1)] = (5));

} else {
var statearr_30826_32955 = state_30812__$1;
(statearr_30826_32955[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (15))){
var inst_30785 = (state_30812[(2)]);
var state_30812__$1 = state_30812;
var statearr_30827_32959 = state_30812__$1;
(statearr_30827_32959[(2)] = inst_30785);

(statearr_30827_32959[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (21))){
var inst_30805 = (state_30812[(2)]);
var state_30812__$1 = (function (){var statearr_30828 = state_30812;
(statearr_30828[(9)] = inst_30805);

return statearr_30828;
})();
var statearr_30830_32964 = state_30812__$1;
(statearr_30830_32964[(2)] = null);

(statearr_30830_32964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (13))){
var inst_30767 = (state_30812[(10)]);
var inst_30769 = cljs.core.chunked_seq_QMARK_(inst_30767);
var state_30812__$1 = state_30812;
if(inst_30769){
var statearr_30831_32969 = state_30812__$1;
(statearr_30831_32969[(1)] = (16));

} else {
var statearr_30833_32970 = state_30812__$1;
(statearr_30833_32970[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (22))){
var inst_30797 = (state_30812[(2)]);
var state_30812__$1 = state_30812;
if(cljs.core.truth_(inst_30797)){
var statearr_30834_32971 = state_30812__$1;
(statearr_30834_32971[(1)] = (23));

} else {
var statearr_30835_32972 = state_30812__$1;
(statearr_30835_32972[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (6))){
var inst_30743 = (state_30812[(8)]);
var inst_30791 = (state_30812[(7)]);
var inst_30793 = (state_30812[(11)]);
var inst_30791__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_30743) : topic_fn.call(null,inst_30743));
var inst_30792 = cljs.core.deref(mults);
var inst_30793__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30792,inst_30791__$1);
var state_30812__$1 = (function (){var statearr_30836 = state_30812;
(statearr_30836[(7)] = inst_30791__$1);

(statearr_30836[(11)] = inst_30793__$1);

return statearr_30836;
})();
if(cljs.core.truth_(inst_30793__$1)){
var statearr_30838_32976 = state_30812__$1;
(statearr_30838_32976[(1)] = (19));

} else {
var statearr_30839_32978 = state_30812__$1;
(statearr_30839_32978[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (25))){
var inst_30802 = (state_30812[(2)]);
var state_30812__$1 = state_30812;
var statearr_30840_32979 = state_30812__$1;
(statearr_30840_32979[(2)] = inst_30802);

(statearr_30840_32979[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (17))){
var inst_30767 = (state_30812[(10)]);
var inst_30776 = cljs.core.first(inst_30767);
var inst_30777 = cljs.core.async.muxch_STAR_(inst_30776);
var inst_30778 = cljs.core.async.close_BANG_(inst_30777);
var inst_30779 = cljs.core.next(inst_30767);
var inst_30753 = inst_30779;
var inst_30754 = null;
var inst_30755 = (0);
var inst_30756 = (0);
var state_30812__$1 = (function (){var statearr_30842 = state_30812;
(statearr_30842[(12)] = inst_30753);

(statearr_30842[(13)] = inst_30778);

(statearr_30842[(14)] = inst_30754);

(statearr_30842[(15)] = inst_30755);

(statearr_30842[(16)] = inst_30756);

return statearr_30842;
})();
var statearr_30843_32983 = state_30812__$1;
(statearr_30843_32983[(2)] = null);

(statearr_30843_32983[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (3))){
var inst_30810 = (state_30812[(2)]);
var state_30812__$1 = state_30812;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30812__$1,inst_30810);
} else {
if((state_val_30813 === (12))){
var inst_30787 = (state_30812[(2)]);
var state_30812__$1 = state_30812;
var statearr_30844_32984 = state_30812__$1;
(statearr_30844_32984[(2)] = inst_30787);

(statearr_30844_32984[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (2))){
var state_30812__$1 = state_30812;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30812__$1,(4),ch);
} else {
if((state_val_30813 === (23))){
var state_30812__$1 = state_30812;
var statearr_30845_32985 = state_30812__$1;
(statearr_30845_32985[(2)] = null);

(statearr_30845_32985[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (19))){
var inst_30743 = (state_30812[(8)]);
var inst_30793 = (state_30812[(11)]);
var inst_30795 = cljs.core.async.muxch_STAR_(inst_30793);
var state_30812__$1 = state_30812;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30812__$1,(22),inst_30795,inst_30743);
} else {
if((state_val_30813 === (11))){
var inst_30753 = (state_30812[(12)]);
var inst_30767 = (state_30812[(10)]);
var inst_30767__$1 = cljs.core.seq(inst_30753);
var state_30812__$1 = (function (){var statearr_30849 = state_30812;
(statearr_30849[(10)] = inst_30767__$1);

return statearr_30849;
})();
if(inst_30767__$1){
var statearr_30851_32986 = state_30812__$1;
(statearr_30851_32986[(1)] = (13));

} else {
var statearr_30852_32987 = state_30812__$1;
(statearr_30852_32987[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (9))){
var inst_30789 = (state_30812[(2)]);
var state_30812__$1 = state_30812;
var statearr_30853_32988 = state_30812__$1;
(statearr_30853_32988[(2)] = inst_30789);

(statearr_30853_32988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (5))){
var inst_30750 = cljs.core.deref(mults);
var inst_30751 = cljs.core.vals(inst_30750);
var inst_30752 = cljs.core.seq(inst_30751);
var inst_30753 = inst_30752;
var inst_30754 = null;
var inst_30755 = (0);
var inst_30756 = (0);
var state_30812__$1 = (function (){var statearr_30855 = state_30812;
(statearr_30855[(12)] = inst_30753);

(statearr_30855[(14)] = inst_30754);

(statearr_30855[(15)] = inst_30755);

(statearr_30855[(16)] = inst_30756);

return statearr_30855;
})();
var statearr_30858_32992 = state_30812__$1;
(statearr_30858_32992[(2)] = null);

(statearr_30858_32992[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (14))){
var state_30812__$1 = state_30812;
var statearr_30862_32994 = state_30812__$1;
(statearr_30862_32994[(2)] = null);

(statearr_30862_32994[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (16))){
var inst_30767 = (state_30812[(10)]);
var inst_30771 = cljs.core.chunk_first(inst_30767);
var inst_30772 = cljs.core.chunk_rest(inst_30767);
var inst_30773 = cljs.core.count(inst_30771);
var inst_30753 = inst_30772;
var inst_30754 = inst_30771;
var inst_30755 = inst_30773;
var inst_30756 = (0);
var state_30812__$1 = (function (){var statearr_30863 = state_30812;
(statearr_30863[(12)] = inst_30753);

(statearr_30863[(14)] = inst_30754);

(statearr_30863[(15)] = inst_30755);

(statearr_30863[(16)] = inst_30756);

return statearr_30863;
})();
var statearr_30864_32999 = state_30812__$1;
(statearr_30864_32999[(2)] = null);

(statearr_30864_32999[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (10))){
var inst_30753 = (state_30812[(12)]);
var inst_30754 = (state_30812[(14)]);
var inst_30755 = (state_30812[(15)]);
var inst_30756 = (state_30812[(16)]);
var inst_30761 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_30754,inst_30756);
var inst_30762 = cljs.core.async.muxch_STAR_(inst_30761);
var inst_30763 = cljs.core.async.close_BANG_(inst_30762);
var inst_30764 = (inst_30756 + (1));
var tmp30859 = inst_30753;
var tmp30860 = inst_30754;
var tmp30861 = inst_30755;
var inst_30753__$1 = tmp30859;
var inst_30754__$1 = tmp30860;
var inst_30755__$1 = tmp30861;
var inst_30756__$1 = inst_30764;
var state_30812__$1 = (function (){var statearr_30865 = state_30812;
(statearr_30865[(12)] = inst_30753__$1);

(statearr_30865[(14)] = inst_30754__$1);

(statearr_30865[(15)] = inst_30755__$1);

(statearr_30865[(17)] = inst_30763);

(statearr_30865[(16)] = inst_30756__$1);

return statearr_30865;
})();
var statearr_30868_33000 = state_30812__$1;
(statearr_30868_33000[(2)] = null);

(statearr_30868_33000[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (18))){
var inst_30782 = (state_30812[(2)]);
var state_30812__$1 = state_30812;
var statearr_30869_33001 = state_30812__$1;
(statearr_30869_33001[(2)] = inst_30782);

(statearr_30869_33001[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (8))){
var inst_30755 = (state_30812[(15)]);
var inst_30756 = (state_30812[(16)]);
var inst_30758 = (inst_30756 < inst_30755);
var inst_30759 = inst_30758;
var state_30812__$1 = state_30812;
if(cljs.core.truth_(inst_30759)){
var statearr_30874_33002 = state_30812__$1;
(statearr_30874_33002[(1)] = (10));

} else {
var statearr_30875_33003 = state_30812__$1;
(statearr_30875_33003[(1)] = (11));

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
var cljs$core$async$state_machine__28732__auto__ = null;
var cljs$core$async$state_machine__28732__auto____0 = (function (){
var statearr_30877 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30877[(0)] = cljs$core$async$state_machine__28732__auto__);

(statearr_30877[(1)] = (1));

return statearr_30877;
});
var cljs$core$async$state_machine__28732__auto____1 = (function (state_30812){
while(true){
var ret_value__28733__auto__ = (function (){try{while(true){
var result__28734__auto__ = switch__28731__auto__(state_30812);
if(cljs.core.keyword_identical_QMARK_(result__28734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28734__auto__;
}
break;
}
}catch (e30886){if((e30886 instanceof Object)){
var ex__28735__auto__ = e30886;
var statearr_30888_33030 = state_30812;
(statearr_30888_33030[(5)] = ex__28735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30886;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33040 = state_30812;
state_30812 = G__33040;
continue;
} else {
return ret_value__28733__auto__;
}
break;
}
});
cljs$core$async$state_machine__28732__auto__ = function(state_30812){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28732__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28732__auto____1.call(this,state_30812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28732__auto____0;
cljs$core$async$state_machine__28732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28732__auto____1;
return cljs$core$async$state_machine__28732__auto__;
})()
})();
var state__29079__auto__ = (function (){var statearr_30899 = (f__29077__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29077__auto__.cljs$core$IFn$_invoke$arity$0() : f__29077__auto__.call(null));
(statearr_30899[(6)] = c__29076__auto___32931);

return statearr_30899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29079__auto__);
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
var G__30906 = arguments.length;
switch (G__30906) {
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
var G__30912 = arguments.length;
switch (G__30912) {
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
var G__30914 = arguments.length;
switch (G__30914) {
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
var c__29076__auto___33113 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29077__auto__ = (function (){var switch__28731__auto__ = (function (state_30956){
var state_val_30957 = (state_30956[(1)]);
if((state_val_30957 === (7))){
var state_30956__$1 = state_30956;
var statearr_30960_33115 = state_30956__$1;
(statearr_30960_33115[(2)] = null);

(statearr_30960_33115[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (1))){
var state_30956__$1 = state_30956;
var statearr_30961_33117 = state_30956__$1;
(statearr_30961_33117[(2)] = null);

(statearr_30961_33117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (4))){
var inst_30920 = (state_30956[(7)]);
var inst_30922 = (inst_30920 < cnt);
var state_30956__$1 = state_30956;
if(cljs.core.truth_(inst_30922)){
var statearr_30964_33118 = state_30956__$1;
(statearr_30964_33118[(1)] = (6));

} else {
var statearr_30965_33119 = state_30956__$1;
(statearr_30965_33119[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (15))){
var inst_30952 = (state_30956[(2)]);
var state_30956__$1 = state_30956;
var statearr_30967_33123 = state_30956__$1;
(statearr_30967_33123[(2)] = inst_30952);

(statearr_30967_33123[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (13))){
var inst_30945 = cljs.core.async.close_BANG_(out);
var state_30956__$1 = state_30956;
var statearr_30969_33125 = state_30956__$1;
(statearr_30969_33125[(2)] = inst_30945);

(statearr_30969_33125[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (6))){
var state_30956__$1 = state_30956;
var statearr_30973_33127 = state_30956__$1;
(statearr_30973_33127[(2)] = null);

(statearr_30973_33127[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (3))){
var inst_30954 = (state_30956[(2)]);
var state_30956__$1 = state_30956;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30956__$1,inst_30954);
} else {
if((state_val_30957 === (12))){
var inst_30942 = (state_30956[(8)]);
var inst_30942__$1 = (state_30956[(2)]);
var inst_30943 = cljs.core.some(cljs.core.nil_QMARK_,inst_30942__$1);
var state_30956__$1 = (function (){var statearr_30976 = state_30956;
(statearr_30976[(8)] = inst_30942__$1);

return statearr_30976;
})();
if(cljs.core.truth_(inst_30943)){
var statearr_30977_33130 = state_30956__$1;
(statearr_30977_33130[(1)] = (13));

} else {
var statearr_30978_33132 = state_30956__$1;
(statearr_30978_33132[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (2))){
var inst_30919 = cljs.core.reset_BANG_(dctr,cnt);
var inst_30920 = (0);
var state_30956__$1 = (function (){var statearr_30980 = state_30956;
(statearr_30980[(7)] = inst_30920);

(statearr_30980[(9)] = inst_30919);

return statearr_30980;
})();
var statearr_30981_33142 = state_30956__$1;
(statearr_30981_33142[(2)] = null);

(statearr_30981_33142[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (11))){
var inst_30920 = (state_30956[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_30956,(10),Object,null,(9));
var inst_30929 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_30920) : chs__$1.call(null,inst_30920));
var inst_30930 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_30920) : done.call(null,inst_30920));
var inst_30931 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_30929,inst_30930);
var state_30956__$1 = state_30956;
var statearr_30984_33157 = state_30956__$1;
(statearr_30984_33157[(2)] = inst_30931);


cljs.core.async.impl.ioc_helpers.process_exception(state_30956__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (9))){
var inst_30920 = (state_30956[(7)]);
var inst_30933 = (state_30956[(2)]);
var inst_30934 = (inst_30920 + (1));
var inst_30920__$1 = inst_30934;
var state_30956__$1 = (function (){var statearr_30985 = state_30956;
(statearr_30985[(7)] = inst_30920__$1);

(statearr_30985[(10)] = inst_30933);

return statearr_30985;
})();
var statearr_30986_33165 = state_30956__$1;
(statearr_30986_33165[(2)] = null);

(statearr_30986_33165[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (5))){
var inst_30940 = (state_30956[(2)]);
var state_30956__$1 = (function (){var statearr_30987 = state_30956;
(statearr_30987[(11)] = inst_30940);

return statearr_30987;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30956__$1,(12),dchan);
} else {
if((state_val_30957 === (14))){
var inst_30942 = (state_30956[(8)]);
var inst_30947 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_30942);
var state_30956__$1 = state_30956;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30956__$1,(16),out,inst_30947);
} else {
if((state_val_30957 === (16))){
var inst_30949 = (state_30956[(2)]);
var state_30956__$1 = (function (){var statearr_30988 = state_30956;
(statearr_30988[(12)] = inst_30949);

return statearr_30988;
})();
var statearr_30989_33183 = state_30956__$1;
(statearr_30989_33183[(2)] = null);

(statearr_30989_33183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (10))){
var inst_30924 = (state_30956[(2)]);
var inst_30925 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_30956__$1 = (function (){var statearr_30990 = state_30956;
(statearr_30990[(13)] = inst_30924);

return statearr_30990;
})();
var statearr_30991_33191 = state_30956__$1;
(statearr_30991_33191[(2)] = inst_30925);


cljs.core.async.impl.ioc_helpers.process_exception(state_30956__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (8))){
var inst_30938 = (state_30956[(2)]);
var state_30956__$1 = state_30956;
var statearr_30993_33196 = state_30956__$1;
(statearr_30993_33196[(2)] = inst_30938);

(statearr_30993_33196[(1)] = (5));


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
var cljs$core$async$state_machine__28732__auto__ = null;
var cljs$core$async$state_machine__28732__auto____0 = (function (){
var statearr_30995 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30995[(0)] = cljs$core$async$state_machine__28732__auto__);

(statearr_30995[(1)] = (1));

return statearr_30995;
});
var cljs$core$async$state_machine__28732__auto____1 = (function (state_30956){
while(true){
var ret_value__28733__auto__ = (function (){try{while(true){
var result__28734__auto__ = switch__28731__auto__(state_30956);
if(cljs.core.keyword_identical_QMARK_(result__28734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28734__auto__;
}
break;
}
}catch (e30998){if((e30998 instanceof Object)){
var ex__28735__auto__ = e30998;
var statearr_30999_33197 = state_30956;
(statearr_30999_33197[(5)] = ex__28735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30998;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33202 = state_30956;
state_30956 = G__33202;
continue;
} else {
return ret_value__28733__auto__;
}
break;
}
});
cljs$core$async$state_machine__28732__auto__ = function(state_30956){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28732__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28732__auto____1.call(this,state_30956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28732__auto____0;
cljs$core$async$state_machine__28732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28732__auto____1;
return cljs$core$async$state_machine__28732__auto__;
})()
})();
var state__29079__auto__ = (function (){var statearr_31002 = (f__29077__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29077__auto__.cljs$core$IFn$_invoke$arity$0() : f__29077__auto__.call(null));
(statearr_31002[(6)] = c__29076__auto___33113);

return statearr_31002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29079__auto__);
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
var G__31007 = arguments.length;
switch (G__31007) {
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
var c__29076__auto___33217 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29077__auto__ = (function (){var switch__28731__auto__ = (function (state_31041){
var state_val_31042 = (state_31041[(1)]);
if((state_val_31042 === (7))){
var inst_31021 = (state_31041[(7)]);
var inst_31020 = (state_31041[(8)]);
var inst_31020__$1 = (state_31041[(2)]);
var inst_31021__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31020__$1,(0),null);
var inst_31022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31020__$1,(1),null);
var inst_31023 = (inst_31021__$1 == null);
var state_31041__$1 = (function (){var statearr_31043 = state_31041;
(statearr_31043[(7)] = inst_31021__$1);

(statearr_31043[(9)] = inst_31022);

(statearr_31043[(8)] = inst_31020__$1);

return statearr_31043;
})();
if(cljs.core.truth_(inst_31023)){
var statearr_31044_33226 = state_31041__$1;
(statearr_31044_33226[(1)] = (8));

} else {
var statearr_31045_33227 = state_31041__$1;
(statearr_31045_33227[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (1))){
var inst_31010 = cljs.core.vec(chs);
var inst_31011 = inst_31010;
var state_31041__$1 = (function (){var statearr_31046 = state_31041;
(statearr_31046[(10)] = inst_31011);

return statearr_31046;
})();
var statearr_31047_33233 = state_31041__$1;
(statearr_31047_33233[(2)] = null);

(statearr_31047_33233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (4))){
var inst_31011 = (state_31041[(10)]);
var state_31041__$1 = state_31041;
return cljs.core.async.ioc_alts_BANG_(state_31041__$1,(7),inst_31011);
} else {
if((state_val_31042 === (6))){
var inst_31037 = (state_31041[(2)]);
var state_31041__$1 = state_31041;
var statearr_31048_33241 = state_31041__$1;
(statearr_31048_33241[(2)] = inst_31037);

(statearr_31048_33241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (3))){
var inst_31039 = (state_31041[(2)]);
var state_31041__$1 = state_31041;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31041__$1,inst_31039);
} else {
if((state_val_31042 === (2))){
var inst_31011 = (state_31041[(10)]);
var inst_31013 = cljs.core.count(inst_31011);
var inst_31014 = (inst_31013 > (0));
var state_31041__$1 = state_31041;
if(cljs.core.truth_(inst_31014)){
var statearr_31050_33247 = state_31041__$1;
(statearr_31050_33247[(1)] = (4));

} else {
var statearr_31051_33252 = state_31041__$1;
(statearr_31051_33252[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (11))){
var inst_31011 = (state_31041[(10)]);
var inst_31030 = (state_31041[(2)]);
var tmp31049 = inst_31011;
var inst_31011__$1 = tmp31049;
var state_31041__$1 = (function (){var statearr_31055 = state_31041;
(statearr_31055[(11)] = inst_31030);

(statearr_31055[(10)] = inst_31011__$1);

return statearr_31055;
})();
var statearr_31056_33261 = state_31041__$1;
(statearr_31056_33261[(2)] = null);

(statearr_31056_33261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (9))){
var inst_31021 = (state_31041[(7)]);
var state_31041__$1 = state_31041;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31041__$1,(11),out,inst_31021);
} else {
if((state_val_31042 === (5))){
var inst_31035 = cljs.core.async.close_BANG_(out);
var state_31041__$1 = state_31041;
var statearr_31057_33266 = state_31041__$1;
(statearr_31057_33266[(2)] = inst_31035);

(statearr_31057_33266[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (10))){
var inst_31033 = (state_31041[(2)]);
var state_31041__$1 = state_31041;
var statearr_31058_33267 = state_31041__$1;
(statearr_31058_33267[(2)] = inst_31033);

(statearr_31058_33267[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (8))){
var inst_31021 = (state_31041[(7)]);
var inst_31022 = (state_31041[(9)]);
var inst_31020 = (state_31041[(8)]);
var inst_31011 = (state_31041[(10)]);
var inst_31025 = (function (){var cs = inst_31011;
var vec__31016 = inst_31020;
var v = inst_31021;
var c = inst_31022;
return (function (p1__31003_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31003_SHARP_);
});
})();
var inst_31026 = cljs.core.filterv(inst_31025,inst_31011);
var inst_31011__$1 = inst_31026;
var state_31041__$1 = (function (){var statearr_31059 = state_31041;
(statearr_31059[(10)] = inst_31011__$1);

return statearr_31059;
})();
var statearr_31061_33268 = state_31041__$1;
(statearr_31061_33268[(2)] = null);

(statearr_31061_33268[(1)] = (2));


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
var cljs$core$async$state_machine__28732__auto__ = null;
var cljs$core$async$state_machine__28732__auto____0 = (function (){
var statearr_31064 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31064[(0)] = cljs$core$async$state_machine__28732__auto__);

(statearr_31064[(1)] = (1));

return statearr_31064;
});
var cljs$core$async$state_machine__28732__auto____1 = (function (state_31041){
while(true){
var ret_value__28733__auto__ = (function (){try{while(true){
var result__28734__auto__ = switch__28731__auto__(state_31041);
if(cljs.core.keyword_identical_QMARK_(result__28734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28734__auto__;
}
break;
}
}catch (e31065){if((e31065 instanceof Object)){
var ex__28735__auto__ = e31065;
var statearr_31066_33276 = state_31041;
(statearr_31066_33276[(5)] = ex__28735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31065;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33277 = state_31041;
state_31041 = G__33277;
continue;
} else {
return ret_value__28733__auto__;
}
break;
}
});
cljs$core$async$state_machine__28732__auto__ = function(state_31041){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28732__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28732__auto____1.call(this,state_31041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28732__auto____0;
cljs$core$async$state_machine__28732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28732__auto____1;
return cljs$core$async$state_machine__28732__auto__;
})()
})();
var state__29079__auto__ = (function (){var statearr_31067 = (f__29077__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29077__auto__.cljs$core$IFn$_invoke$arity$0() : f__29077__auto__.call(null));
(statearr_31067[(6)] = c__29076__auto___33217);

return statearr_31067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29079__auto__);
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
var G__31069 = arguments.length;
switch (G__31069) {
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
var c__29076__auto___33280 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29077__auto__ = (function (){var switch__28731__auto__ = (function (state_31096){
var state_val_31097 = (state_31096[(1)]);
if((state_val_31097 === (7))){
var inst_31078 = (state_31096[(7)]);
var inst_31078__$1 = (state_31096[(2)]);
var inst_31079 = (inst_31078__$1 == null);
var inst_31080 = cljs.core.not(inst_31079);
var state_31096__$1 = (function (){var statearr_31100 = state_31096;
(statearr_31100[(7)] = inst_31078__$1);

return statearr_31100;
})();
if(inst_31080){
var statearr_31101_33281 = state_31096__$1;
(statearr_31101_33281[(1)] = (8));

} else {
var statearr_31104_33282 = state_31096__$1;
(statearr_31104_33282[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (1))){
var inst_31072 = (0);
var state_31096__$1 = (function (){var statearr_31105 = state_31096;
(statearr_31105[(8)] = inst_31072);

return statearr_31105;
})();
var statearr_31106_33285 = state_31096__$1;
(statearr_31106_33285[(2)] = null);

(statearr_31106_33285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (4))){
var state_31096__$1 = state_31096;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31096__$1,(7),ch);
} else {
if((state_val_31097 === (6))){
var inst_31091 = (state_31096[(2)]);
var state_31096__$1 = state_31096;
var statearr_31109_33286 = state_31096__$1;
(statearr_31109_33286[(2)] = inst_31091);

(statearr_31109_33286[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (3))){
var inst_31093 = (state_31096[(2)]);
var inst_31094 = cljs.core.async.close_BANG_(out);
var state_31096__$1 = (function (){var statearr_31110 = state_31096;
(statearr_31110[(9)] = inst_31093);

return statearr_31110;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31096__$1,inst_31094);
} else {
if((state_val_31097 === (2))){
var inst_31072 = (state_31096[(8)]);
var inst_31074 = (inst_31072 < n);
var state_31096__$1 = state_31096;
if(cljs.core.truth_(inst_31074)){
var statearr_31111_33287 = state_31096__$1;
(statearr_31111_33287[(1)] = (4));

} else {
var statearr_31112_33288 = state_31096__$1;
(statearr_31112_33288[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (11))){
var inst_31072 = (state_31096[(8)]);
var inst_31083 = (state_31096[(2)]);
var inst_31084 = (inst_31072 + (1));
var inst_31072__$1 = inst_31084;
var state_31096__$1 = (function (){var statearr_31113 = state_31096;
(statearr_31113[(8)] = inst_31072__$1);

(statearr_31113[(10)] = inst_31083);

return statearr_31113;
})();
var statearr_31114_33291 = state_31096__$1;
(statearr_31114_33291[(2)] = null);

(statearr_31114_33291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (9))){
var state_31096__$1 = state_31096;
var statearr_31115_33292 = state_31096__$1;
(statearr_31115_33292[(2)] = null);

(statearr_31115_33292[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (5))){
var state_31096__$1 = state_31096;
var statearr_31116_33293 = state_31096__$1;
(statearr_31116_33293[(2)] = null);

(statearr_31116_33293[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (10))){
var inst_31088 = (state_31096[(2)]);
var state_31096__$1 = state_31096;
var statearr_31118_33294 = state_31096__$1;
(statearr_31118_33294[(2)] = inst_31088);

(statearr_31118_33294[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (8))){
var inst_31078 = (state_31096[(7)]);
var state_31096__$1 = state_31096;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31096__$1,(11),out,inst_31078);
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
var cljs$core$async$state_machine__28732__auto__ = null;
var cljs$core$async$state_machine__28732__auto____0 = (function (){
var statearr_31119 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31119[(0)] = cljs$core$async$state_machine__28732__auto__);

(statearr_31119[(1)] = (1));

return statearr_31119;
});
var cljs$core$async$state_machine__28732__auto____1 = (function (state_31096){
while(true){
var ret_value__28733__auto__ = (function (){try{while(true){
var result__28734__auto__ = switch__28731__auto__(state_31096);
if(cljs.core.keyword_identical_QMARK_(result__28734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28734__auto__;
}
break;
}
}catch (e31120){if((e31120 instanceof Object)){
var ex__28735__auto__ = e31120;
var statearr_31121_33295 = state_31096;
(statearr_31121_33295[(5)] = ex__28735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31120;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33297 = state_31096;
state_31096 = G__33297;
continue;
} else {
return ret_value__28733__auto__;
}
break;
}
});
cljs$core$async$state_machine__28732__auto__ = function(state_31096){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28732__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28732__auto____1.call(this,state_31096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28732__auto____0;
cljs$core$async$state_machine__28732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28732__auto____1;
return cljs$core$async$state_machine__28732__auto__;
})()
})();
var state__29079__auto__ = (function (){var statearr_31122 = (f__29077__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29077__auto__.cljs$core$IFn$_invoke$arity$0() : f__29077__auto__.call(null));
(statearr_31122[(6)] = c__29076__auto___33280);

return statearr_31122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29079__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31126 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31126 = (function (f,ch,meta31127){
this.f = f;
this.ch = ch;
this.meta31127 = meta31127;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31126.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31128,meta31127__$1){
var self__ = this;
var _31128__$1 = this;
return (new cljs.core.async.t_cljs$core$async31126(self__.f,self__.ch,meta31127__$1));
}));

(cljs.core.async.t_cljs$core$async31126.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31128){
var self__ = this;
var _31128__$1 = this;
return self__.meta31127;
}));

(cljs.core.async.t_cljs$core$async31126.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31126.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31126.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31126.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31126.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31133 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31133 = (function (f,ch,meta31127,_,fn1,meta31134){
this.f = f;
this.ch = ch;
this.meta31127 = meta31127;
this._ = _;
this.fn1 = fn1;
this.meta31134 = meta31134;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31133.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31135,meta31134__$1){
var self__ = this;
var _31135__$1 = this;
return (new cljs.core.async.t_cljs$core$async31133(self__.f,self__.ch,self__.meta31127,self__._,self__.fn1,meta31134__$1));
}));

(cljs.core.async.t_cljs$core$async31133.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31135){
var self__ = this;
var _31135__$1 = this;
return self__.meta31134;
}));

(cljs.core.async.t_cljs$core$async31133.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31133.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async31133.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31133.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__31125_SHARP_){
var G__31140 = (((p1__31125_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__31125_SHARP_) : self__.f.call(null,p1__31125_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31140) : f1.call(null,G__31140));
});
}));

(cljs.core.async.t_cljs$core$async31133.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31127","meta31127",1696161671,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31126","cljs.core.async/t_cljs$core$async31126",-143852646,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31134","meta31134",-559453999,null)], null);
}));

(cljs.core.async.t_cljs$core$async31133.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31133.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31133");

(cljs.core.async.t_cljs$core$async31133.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31133");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31133.
 */
cljs.core.async.__GT_t_cljs$core$async31133 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31133(f__$1,ch__$1,meta31127__$1,___$2,fn1__$1,meta31134){
return (new cljs.core.async.t_cljs$core$async31133(f__$1,ch__$1,meta31127__$1,___$2,fn1__$1,meta31134));
});

}

return (new cljs.core.async.t_cljs$core$async31133(self__.f,self__.ch,self__.meta31127,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__31143 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31143) : self__.f.call(null,G__31143));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async31126.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31126.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async31126.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31127","meta31127",1696161671,null)], null);
}));

(cljs.core.async.t_cljs$core$async31126.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31126.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31126");

(cljs.core.async.t_cljs$core$async31126.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31126");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31126.
 */
cljs.core.async.__GT_t_cljs$core$async31126 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31126(f__$1,ch__$1,meta31127){
return (new cljs.core.async.t_cljs$core$async31126(f__$1,ch__$1,meta31127));
});

}

return (new cljs.core.async.t_cljs$core$async31126(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31145 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31145 = (function (f,ch,meta31146){
this.f = f;
this.ch = ch;
this.meta31146 = meta31146;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31145.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31147,meta31146__$1){
var self__ = this;
var _31147__$1 = this;
return (new cljs.core.async.t_cljs$core$async31145(self__.f,self__.ch,meta31146__$1));
}));

(cljs.core.async.t_cljs$core$async31145.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31147){
var self__ = this;
var _31147__$1 = this;
return self__.meta31146;
}));

(cljs.core.async.t_cljs$core$async31145.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31145.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31145.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31145.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31145.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31145.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async31145.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31146","meta31146",1930962291,null)], null);
}));

(cljs.core.async.t_cljs$core$async31145.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31145.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31145");

(cljs.core.async.t_cljs$core$async31145.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31145");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31145.
 */
cljs.core.async.__GT_t_cljs$core$async31145 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31145(f__$1,ch__$1,meta31146){
return (new cljs.core.async.t_cljs$core$async31145(f__$1,ch__$1,meta31146));
});

}

return (new cljs.core.async.t_cljs$core$async31145(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31149 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31149 = (function (p,ch,meta31150){
this.p = p;
this.ch = ch;
this.meta31150 = meta31150;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31151,meta31150__$1){
var self__ = this;
var _31151__$1 = this;
return (new cljs.core.async.t_cljs$core$async31149(self__.p,self__.ch,meta31150__$1));
}));

(cljs.core.async.t_cljs$core$async31149.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31151){
var self__ = this;
var _31151__$1 = this;
return self__.meta31150;
}));

(cljs.core.async.t_cljs$core$async31149.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31149.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31149.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31149.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31149.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31149.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31149.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async31149.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31150","meta31150",1955243389,null)], null);
}));

(cljs.core.async.t_cljs$core$async31149.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31149.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31149");

(cljs.core.async.t_cljs$core$async31149.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31149");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31149.
 */
cljs.core.async.__GT_t_cljs$core$async31149 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31149(p__$1,ch__$1,meta31150){
return (new cljs.core.async.t_cljs$core$async31149(p__$1,ch__$1,meta31150));
});

}

return (new cljs.core.async.t_cljs$core$async31149(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31156 = arguments.length;
switch (G__31156) {
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
var c__29076__auto___33359 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29077__auto__ = (function (){var switch__28731__auto__ = (function (state_31177){
var state_val_31178 = (state_31177[(1)]);
if((state_val_31178 === (7))){
var inst_31173 = (state_31177[(2)]);
var state_31177__$1 = state_31177;
var statearr_31179_33365 = state_31177__$1;
(statearr_31179_33365[(2)] = inst_31173);

(statearr_31179_33365[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31178 === (1))){
var state_31177__$1 = state_31177;
var statearr_31180_33367 = state_31177__$1;
(statearr_31180_33367[(2)] = null);

(statearr_31180_33367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31178 === (4))){
var inst_31159 = (state_31177[(7)]);
var inst_31159__$1 = (state_31177[(2)]);
var inst_31160 = (inst_31159__$1 == null);
var state_31177__$1 = (function (){var statearr_31181 = state_31177;
(statearr_31181[(7)] = inst_31159__$1);

return statearr_31181;
})();
if(cljs.core.truth_(inst_31160)){
var statearr_31182_33379 = state_31177__$1;
(statearr_31182_33379[(1)] = (5));

} else {
var statearr_31183_33384 = state_31177__$1;
(statearr_31183_33384[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31178 === (6))){
var inst_31159 = (state_31177[(7)]);
var inst_31164 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31159) : p.call(null,inst_31159));
var state_31177__$1 = state_31177;
if(cljs.core.truth_(inst_31164)){
var statearr_31184_33391 = state_31177__$1;
(statearr_31184_33391[(1)] = (8));

} else {
var statearr_31185_33392 = state_31177__$1;
(statearr_31185_33392[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31178 === (3))){
var inst_31175 = (state_31177[(2)]);
var state_31177__$1 = state_31177;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31177__$1,inst_31175);
} else {
if((state_val_31178 === (2))){
var state_31177__$1 = state_31177;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31177__$1,(4),ch);
} else {
if((state_val_31178 === (11))){
var inst_31167 = (state_31177[(2)]);
var state_31177__$1 = state_31177;
var statearr_31186_33405 = state_31177__$1;
(statearr_31186_33405[(2)] = inst_31167);

(statearr_31186_33405[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31178 === (9))){
var state_31177__$1 = state_31177;
var statearr_31187_33414 = state_31177__$1;
(statearr_31187_33414[(2)] = null);

(statearr_31187_33414[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31178 === (5))){
var inst_31162 = cljs.core.async.close_BANG_(out);
var state_31177__$1 = state_31177;
var statearr_31188_33416 = state_31177__$1;
(statearr_31188_33416[(2)] = inst_31162);

(statearr_31188_33416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31178 === (10))){
var inst_31170 = (state_31177[(2)]);
var state_31177__$1 = (function (){var statearr_31189 = state_31177;
(statearr_31189[(8)] = inst_31170);

return statearr_31189;
})();
var statearr_31190_33424 = state_31177__$1;
(statearr_31190_33424[(2)] = null);

(statearr_31190_33424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31178 === (8))){
var inst_31159 = (state_31177[(7)]);
var state_31177__$1 = state_31177;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31177__$1,(11),out,inst_31159);
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
var cljs$core$async$state_machine__28732__auto__ = null;
var cljs$core$async$state_machine__28732__auto____0 = (function (){
var statearr_31191 = [null,null,null,null,null,null,null,null,null];
(statearr_31191[(0)] = cljs$core$async$state_machine__28732__auto__);

(statearr_31191[(1)] = (1));

return statearr_31191;
});
var cljs$core$async$state_machine__28732__auto____1 = (function (state_31177){
while(true){
var ret_value__28733__auto__ = (function (){try{while(true){
var result__28734__auto__ = switch__28731__auto__(state_31177);
if(cljs.core.keyword_identical_QMARK_(result__28734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28734__auto__;
}
break;
}
}catch (e31192){if((e31192 instanceof Object)){
var ex__28735__auto__ = e31192;
var statearr_31193_33453 = state_31177;
(statearr_31193_33453[(5)] = ex__28735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31177);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31192;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33461 = state_31177;
state_31177 = G__33461;
continue;
} else {
return ret_value__28733__auto__;
}
break;
}
});
cljs$core$async$state_machine__28732__auto__ = function(state_31177){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28732__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28732__auto____1.call(this,state_31177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28732__auto____0;
cljs$core$async$state_machine__28732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28732__auto____1;
return cljs$core$async$state_machine__28732__auto__;
})()
})();
var state__29079__auto__ = (function (){var statearr_31194 = (f__29077__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29077__auto__.cljs$core$IFn$_invoke$arity$0() : f__29077__auto__.call(null));
(statearr_31194[(6)] = c__29076__auto___33359);

return statearr_31194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29079__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__31201 = arguments.length;
switch (G__31201) {
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
var c__29076__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29077__auto__ = (function (){var switch__28731__auto__ = (function (state_31273){
var state_val_31274 = (state_31273[(1)]);
if((state_val_31274 === (7))){
var inst_31269 = (state_31273[(2)]);
var state_31273__$1 = state_31273;
var statearr_31275_33469 = state_31273__$1;
(statearr_31275_33469[(2)] = inst_31269);

(statearr_31275_33469[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31274 === (20))){
var inst_31237 = (state_31273[(7)]);
var inst_31250 = (state_31273[(2)]);
var inst_31251 = cljs.core.next(inst_31237);
var inst_31223 = inst_31251;
var inst_31224 = null;
var inst_31225 = (0);
var inst_31226 = (0);
var state_31273__$1 = (function (){var statearr_31276 = state_31273;
(statearr_31276[(8)] = inst_31225);

(statearr_31276[(9)] = inst_31223);

(statearr_31276[(10)] = inst_31224);

(statearr_31276[(11)] = inst_31226);

(statearr_31276[(12)] = inst_31250);

return statearr_31276;
})();
var statearr_31277_33471 = state_31273__$1;
(statearr_31277_33471[(2)] = null);

(statearr_31277_33471[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31274 === (1))){
var state_31273__$1 = state_31273;
var statearr_31278_33472 = state_31273__$1;
(statearr_31278_33472[(2)] = null);

(statearr_31278_33472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31274 === (4))){
var inst_31212 = (state_31273[(13)]);
var inst_31212__$1 = (state_31273[(2)]);
var inst_31213 = (inst_31212__$1 == null);
var state_31273__$1 = (function (){var statearr_31279 = state_31273;
(statearr_31279[(13)] = inst_31212__$1);

return statearr_31279;
})();
if(cljs.core.truth_(inst_31213)){
var statearr_31280_33473 = state_31273__$1;
(statearr_31280_33473[(1)] = (5));

} else {
var statearr_31281_33477 = state_31273__$1;
(statearr_31281_33477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31274 === (15))){
var state_31273__$1 = state_31273;
var statearr_31285_33478 = state_31273__$1;
(statearr_31285_33478[(2)] = null);

(statearr_31285_33478[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31274 === (21))){
var state_31273__$1 = state_31273;
var statearr_31286_33479 = state_31273__$1;
(statearr_31286_33479[(2)] = null);

(statearr_31286_33479[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31274 === (13))){
var inst_31225 = (state_31273[(8)]);
var inst_31223 = (state_31273[(9)]);
var inst_31224 = (state_31273[(10)]);
var inst_31226 = (state_31273[(11)]);
var inst_31233 = (state_31273[(2)]);
var inst_31234 = (inst_31226 + (1));
var tmp31282 = inst_31225;
var tmp31283 = inst_31223;
var tmp31284 = inst_31224;
var inst_31223__$1 = tmp31283;
var inst_31224__$1 = tmp31284;
var inst_31225__$1 = tmp31282;
var inst_31226__$1 = inst_31234;
var state_31273__$1 = (function (){var statearr_31287 = state_31273;
(statearr_31287[(8)] = inst_31225__$1);

(statearr_31287[(9)] = inst_31223__$1);

(statearr_31287[(10)] = inst_31224__$1);

(statearr_31287[(11)] = inst_31226__$1);

(statearr_31287[(14)] = inst_31233);

return statearr_31287;
})();
var statearr_31290_33486 = state_31273__$1;
(statearr_31290_33486[(2)] = null);

(statearr_31290_33486[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31274 === (22))){
var state_31273__$1 = state_31273;
var statearr_31291_33488 = state_31273__$1;
(statearr_31291_33488[(2)] = null);

(statearr_31291_33488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31274 === (6))){
var inst_31212 = (state_31273[(13)]);
var inst_31221 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31212) : f.call(null,inst_31212));
var inst_31222 = cljs.core.seq(inst_31221);
var inst_31223 = inst_31222;
var inst_31224 = null;
var inst_31225 = (0);
var inst_31226 = (0);
var state_31273__$1 = (function (){var statearr_31293 = state_31273;
(statearr_31293[(8)] = inst_31225);

(statearr_31293[(9)] = inst_31223);

(statearr_31293[(10)] = inst_31224);

(statearr_31293[(11)] = inst_31226);

return statearr_31293;
})();
var statearr_31294_33489 = state_31273__$1;
(statearr_31294_33489[(2)] = null);

(statearr_31294_33489[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31274 === (17))){
var inst_31237 = (state_31273[(7)]);
var inst_31241 = cljs.core.chunk_first(inst_31237);
var inst_31242 = cljs.core.chunk_rest(inst_31237);
var inst_31243 = cljs.core.count(inst_31241);
var inst_31223 = inst_31242;
var inst_31224 = inst_31241;
var inst_31225 = inst_31243;
var inst_31226 = (0);
var state_31273__$1 = (function (){var statearr_31295 = state_31273;
(statearr_31295[(8)] = inst_31225);

(statearr_31295[(9)] = inst_31223);

(statearr_31295[(10)] = inst_31224);

(statearr_31295[(11)] = inst_31226);

return statearr_31295;
})();
var statearr_31296_33494 = state_31273__$1;
(statearr_31296_33494[(2)] = null);

(statearr_31296_33494[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31274 === (3))){
var inst_31271 = (state_31273[(2)]);
var state_31273__$1 = state_31273;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31273__$1,inst_31271);
} else {
if((state_val_31274 === (12))){
var inst_31259 = (state_31273[(2)]);
var state_31273__$1 = state_31273;
var statearr_31297_33496 = state_31273__$1;
(statearr_31297_33496[(2)] = inst_31259);

(statearr_31297_33496[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31274 === (2))){
var state_31273__$1 = state_31273;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31273__$1,(4),in$);
} else {
if((state_val_31274 === (23))){
var inst_31267 = (state_31273[(2)]);
var state_31273__$1 = state_31273;
var statearr_31304_33498 = state_31273__$1;
(statearr_31304_33498[(2)] = inst_31267);

(statearr_31304_33498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31274 === (19))){
var inst_31254 = (state_31273[(2)]);
var state_31273__$1 = state_31273;
var statearr_31307_33499 = state_31273__$1;
(statearr_31307_33499[(2)] = inst_31254);

(statearr_31307_33499[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31274 === (11))){
var inst_31223 = (state_31273[(9)]);
var inst_31237 = (state_31273[(7)]);
var inst_31237__$1 = cljs.core.seq(inst_31223);
var state_31273__$1 = (function (){var statearr_31308 = state_31273;
(statearr_31308[(7)] = inst_31237__$1);

return statearr_31308;
})();
if(inst_31237__$1){
var statearr_31309_33500 = state_31273__$1;
(statearr_31309_33500[(1)] = (14));

} else {
var statearr_31310_33501 = state_31273__$1;
(statearr_31310_33501[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31274 === (9))){
var inst_31261 = (state_31273[(2)]);
var inst_31262 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_31273__$1 = (function (){var statearr_31311 = state_31273;
(statearr_31311[(15)] = inst_31261);

return statearr_31311;
})();
if(cljs.core.truth_(inst_31262)){
var statearr_31315_33504 = state_31273__$1;
(statearr_31315_33504[(1)] = (21));

} else {
var statearr_31316_33505 = state_31273__$1;
(statearr_31316_33505[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31274 === (5))){
var inst_31215 = cljs.core.async.close_BANG_(out);
var state_31273__$1 = state_31273;
var statearr_31319_33506 = state_31273__$1;
(statearr_31319_33506[(2)] = inst_31215);

(statearr_31319_33506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31274 === (14))){
var inst_31237 = (state_31273[(7)]);
var inst_31239 = cljs.core.chunked_seq_QMARK_(inst_31237);
var state_31273__$1 = state_31273;
if(inst_31239){
var statearr_31321_33507 = state_31273__$1;
(statearr_31321_33507[(1)] = (17));

} else {
var statearr_31322_33508 = state_31273__$1;
(statearr_31322_33508[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31274 === (16))){
var inst_31257 = (state_31273[(2)]);
var state_31273__$1 = state_31273;
var statearr_31325_33513 = state_31273__$1;
(statearr_31325_33513[(2)] = inst_31257);

(statearr_31325_33513[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31274 === (10))){
var inst_31224 = (state_31273[(10)]);
var inst_31226 = (state_31273[(11)]);
var inst_31231 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31224,inst_31226);
var state_31273__$1 = state_31273;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31273__$1,(13),out,inst_31231);
} else {
if((state_val_31274 === (18))){
var inst_31237 = (state_31273[(7)]);
var inst_31247 = cljs.core.first(inst_31237);
var state_31273__$1 = state_31273;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31273__$1,(20),out,inst_31247);
} else {
if((state_val_31274 === (8))){
var inst_31225 = (state_31273[(8)]);
var inst_31226 = (state_31273[(11)]);
var inst_31228 = (inst_31226 < inst_31225);
var inst_31229 = inst_31228;
var state_31273__$1 = state_31273;
if(cljs.core.truth_(inst_31229)){
var statearr_31329_33514 = state_31273__$1;
(statearr_31329_33514[(1)] = (10));

} else {
var statearr_31330_33515 = state_31273__$1;
(statearr_31330_33515[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__28732__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28732__auto____0 = (function (){
var statearr_31331 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31331[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28732__auto__);

(statearr_31331[(1)] = (1));

return statearr_31331;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28732__auto____1 = (function (state_31273){
while(true){
var ret_value__28733__auto__ = (function (){try{while(true){
var result__28734__auto__ = switch__28731__auto__(state_31273);
if(cljs.core.keyword_identical_QMARK_(result__28734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28734__auto__;
}
break;
}
}catch (e31334){if((e31334 instanceof Object)){
var ex__28735__auto__ = e31334;
var statearr_31336_33516 = state_31273;
(statearr_31336_33516[(5)] = ex__28735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31334;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33517 = state_31273;
state_31273 = G__33517;
continue;
} else {
return ret_value__28733__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28732__auto__ = function(state_31273){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28732__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28732__auto____1.call(this,state_31273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28732__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28732__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28732__auto__;
})()
})();
var state__29079__auto__ = (function (){var statearr_31337 = (f__29077__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29077__auto__.cljs$core$IFn$_invoke$arity$0() : f__29077__auto__.call(null));
(statearr_31337[(6)] = c__29076__auto__);

return statearr_31337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29079__auto__);
}));

return c__29076__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__31350 = arguments.length;
switch (G__31350) {
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
var G__31359 = arguments.length;
switch (G__31359) {
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
var G__31365 = arguments.length;
switch (G__31365) {
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
var c__29076__auto___33526 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29077__auto__ = (function (){var switch__28731__auto__ = (function (state_31397){
var state_val_31398 = (state_31397[(1)]);
if((state_val_31398 === (7))){
var inst_31390 = (state_31397[(2)]);
var state_31397__$1 = state_31397;
var statearr_31399_33527 = state_31397__$1;
(statearr_31399_33527[(2)] = inst_31390);

(statearr_31399_33527[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31398 === (1))){
var inst_31370 = null;
var state_31397__$1 = (function (){var statearr_31400 = state_31397;
(statearr_31400[(7)] = inst_31370);

return statearr_31400;
})();
var statearr_31401_33528 = state_31397__$1;
(statearr_31401_33528[(2)] = null);

(statearr_31401_33528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31398 === (4))){
var inst_31373 = (state_31397[(8)]);
var inst_31373__$1 = (state_31397[(2)]);
var inst_31374 = (inst_31373__$1 == null);
var inst_31376 = cljs.core.not(inst_31374);
var state_31397__$1 = (function (){var statearr_31402 = state_31397;
(statearr_31402[(8)] = inst_31373__$1);

return statearr_31402;
})();
if(inst_31376){
var statearr_31403_33529 = state_31397__$1;
(statearr_31403_33529[(1)] = (5));

} else {
var statearr_31404_33530 = state_31397__$1;
(statearr_31404_33530[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31398 === (6))){
var state_31397__$1 = state_31397;
var statearr_31408_33534 = state_31397__$1;
(statearr_31408_33534[(2)] = null);

(statearr_31408_33534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31398 === (3))){
var inst_31392 = (state_31397[(2)]);
var inst_31393 = cljs.core.async.close_BANG_(out);
var state_31397__$1 = (function (){var statearr_31409 = state_31397;
(statearr_31409[(9)] = inst_31392);

return statearr_31409;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31397__$1,inst_31393);
} else {
if((state_val_31398 === (2))){
var state_31397__$1 = state_31397;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31397__$1,(4),ch);
} else {
if((state_val_31398 === (11))){
var inst_31373 = (state_31397[(8)]);
var inst_31384 = (state_31397[(2)]);
var inst_31370 = inst_31373;
var state_31397__$1 = (function (){var statearr_31415 = state_31397;
(statearr_31415[(7)] = inst_31370);

(statearr_31415[(10)] = inst_31384);

return statearr_31415;
})();
var statearr_31416_33535 = state_31397__$1;
(statearr_31416_33535[(2)] = null);

(statearr_31416_33535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31398 === (9))){
var inst_31373 = (state_31397[(8)]);
var state_31397__$1 = state_31397;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31397__$1,(11),out,inst_31373);
} else {
if((state_val_31398 === (5))){
var inst_31370 = (state_31397[(7)]);
var inst_31373 = (state_31397[(8)]);
var inst_31379 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31373,inst_31370);
var state_31397__$1 = state_31397;
if(inst_31379){
var statearr_31419_33536 = state_31397__$1;
(statearr_31419_33536[(1)] = (8));

} else {
var statearr_31421_33537 = state_31397__$1;
(statearr_31421_33537[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31398 === (10))){
var inst_31387 = (state_31397[(2)]);
var state_31397__$1 = state_31397;
var statearr_31422_33538 = state_31397__$1;
(statearr_31422_33538[(2)] = inst_31387);

(statearr_31422_33538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31398 === (8))){
var inst_31370 = (state_31397[(7)]);
var tmp31418 = inst_31370;
var inst_31370__$1 = tmp31418;
var state_31397__$1 = (function (){var statearr_31423 = state_31397;
(statearr_31423[(7)] = inst_31370__$1);

return statearr_31423;
})();
var statearr_31427_33540 = state_31397__$1;
(statearr_31427_33540[(2)] = null);

(statearr_31427_33540[(1)] = (2));


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
var cljs$core$async$state_machine__28732__auto__ = null;
var cljs$core$async$state_machine__28732__auto____0 = (function (){
var statearr_31428 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31428[(0)] = cljs$core$async$state_machine__28732__auto__);

(statearr_31428[(1)] = (1));

return statearr_31428;
});
var cljs$core$async$state_machine__28732__auto____1 = (function (state_31397){
while(true){
var ret_value__28733__auto__ = (function (){try{while(true){
var result__28734__auto__ = switch__28731__auto__(state_31397);
if(cljs.core.keyword_identical_QMARK_(result__28734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28734__auto__;
}
break;
}
}catch (e31429){if((e31429 instanceof Object)){
var ex__28735__auto__ = e31429;
var statearr_31430_33548 = state_31397;
(statearr_31430_33548[(5)] = ex__28735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31429;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33549 = state_31397;
state_31397 = G__33549;
continue;
} else {
return ret_value__28733__auto__;
}
break;
}
});
cljs$core$async$state_machine__28732__auto__ = function(state_31397){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28732__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28732__auto____1.call(this,state_31397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28732__auto____0;
cljs$core$async$state_machine__28732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28732__auto____1;
return cljs$core$async$state_machine__28732__auto__;
})()
})();
var state__29079__auto__ = (function (){var statearr_31431 = (f__29077__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29077__auto__.cljs$core$IFn$_invoke$arity$0() : f__29077__auto__.call(null));
(statearr_31431[(6)] = c__29076__auto___33526);

return statearr_31431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29079__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__31441 = arguments.length;
switch (G__31441) {
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
var c__29076__auto___33557 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29077__auto__ = (function (){var switch__28731__auto__ = (function (state_31482){
var state_val_31483 = (state_31482[(1)]);
if((state_val_31483 === (7))){
var inst_31478 = (state_31482[(2)]);
var state_31482__$1 = state_31482;
var statearr_31487_33558 = state_31482__$1;
(statearr_31487_33558[(2)] = inst_31478);

(statearr_31487_33558[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31483 === (1))){
var inst_31442 = (new Array(n));
var inst_31443 = inst_31442;
var inst_31444 = (0);
var state_31482__$1 = (function (){var statearr_31490 = state_31482;
(statearr_31490[(7)] = inst_31444);

(statearr_31490[(8)] = inst_31443);

return statearr_31490;
})();
var statearr_31491_33562 = state_31482__$1;
(statearr_31491_33562[(2)] = null);

(statearr_31491_33562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31483 === (4))){
var inst_31447 = (state_31482[(9)]);
var inst_31447__$1 = (state_31482[(2)]);
var inst_31448 = (inst_31447__$1 == null);
var inst_31449 = cljs.core.not(inst_31448);
var state_31482__$1 = (function (){var statearr_31492 = state_31482;
(statearr_31492[(9)] = inst_31447__$1);

return statearr_31492;
})();
if(inst_31449){
var statearr_31495_33563 = state_31482__$1;
(statearr_31495_33563[(1)] = (5));

} else {
var statearr_31497_33564 = state_31482__$1;
(statearr_31497_33564[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31483 === (15))){
var inst_31472 = (state_31482[(2)]);
var state_31482__$1 = state_31482;
var statearr_31498_33567 = state_31482__$1;
(statearr_31498_33567[(2)] = inst_31472);

(statearr_31498_33567[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31483 === (13))){
var state_31482__$1 = state_31482;
var statearr_31499_33569 = state_31482__$1;
(statearr_31499_33569[(2)] = null);

(statearr_31499_33569[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31483 === (6))){
var inst_31444 = (state_31482[(7)]);
var inst_31468 = (inst_31444 > (0));
var state_31482__$1 = state_31482;
if(cljs.core.truth_(inst_31468)){
var statearr_31500_33570 = state_31482__$1;
(statearr_31500_33570[(1)] = (12));

} else {
var statearr_31501_33571 = state_31482__$1;
(statearr_31501_33571[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31483 === (3))){
var inst_31480 = (state_31482[(2)]);
var state_31482__$1 = state_31482;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31482__$1,inst_31480);
} else {
if((state_val_31483 === (12))){
var inst_31443 = (state_31482[(8)]);
var inst_31470 = cljs.core.vec(inst_31443);
var state_31482__$1 = state_31482;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31482__$1,(15),out,inst_31470);
} else {
if((state_val_31483 === (2))){
var state_31482__$1 = state_31482;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31482__$1,(4),ch);
} else {
if((state_val_31483 === (11))){
var inst_31462 = (state_31482[(2)]);
var inst_31463 = (new Array(n));
var inst_31443 = inst_31463;
var inst_31444 = (0);
var state_31482__$1 = (function (){var statearr_31502 = state_31482;
(statearr_31502[(7)] = inst_31444);

(statearr_31502[(10)] = inst_31462);

(statearr_31502[(8)] = inst_31443);

return statearr_31502;
})();
var statearr_31503_33573 = state_31482__$1;
(statearr_31503_33573[(2)] = null);

(statearr_31503_33573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31483 === (9))){
var inst_31443 = (state_31482[(8)]);
var inst_31460 = cljs.core.vec(inst_31443);
var state_31482__$1 = state_31482;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31482__$1,(11),out,inst_31460);
} else {
if((state_val_31483 === (5))){
var inst_31444 = (state_31482[(7)]);
var inst_31447 = (state_31482[(9)]);
var inst_31443 = (state_31482[(8)]);
var inst_31452 = (state_31482[(11)]);
var inst_31451 = (inst_31443[inst_31444] = inst_31447);
var inst_31452__$1 = (inst_31444 + (1));
var inst_31456 = (inst_31452__$1 < n);
var state_31482__$1 = (function (){var statearr_31506 = state_31482;
(statearr_31506[(12)] = inst_31451);

(statearr_31506[(11)] = inst_31452__$1);

return statearr_31506;
})();
if(cljs.core.truth_(inst_31456)){
var statearr_31507_33574 = state_31482__$1;
(statearr_31507_33574[(1)] = (8));

} else {
var statearr_31508_33575 = state_31482__$1;
(statearr_31508_33575[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31483 === (14))){
var inst_31475 = (state_31482[(2)]);
var inst_31476 = cljs.core.async.close_BANG_(out);
var state_31482__$1 = (function (){var statearr_31510 = state_31482;
(statearr_31510[(13)] = inst_31475);

return statearr_31510;
})();
var statearr_31511_33578 = state_31482__$1;
(statearr_31511_33578[(2)] = inst_31476);

(statearr_31511_33578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31483 === (10))){
var inst_31466 = (state_31482[(2)]);
var state_31482__$1 = state_31482;
var statearr_31512_33579 = state_31482__$1;
(statearr_31512_33579[(2)] = inst_31466);

(statearr_31512_33579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31483 === (8))){
var inst_31443 = (state_31482[(8)]);
var inst_31452 = (state_31482[(11)]);
var tmp31509 = inst_31443;
var inst_31443__$1 = tmp31509;
var inst_31444 = inst_31452;
var state_31482__$1 = (function (){var statearr_31513 = state_31482;
(statearr_31513[(7)] = inst_31444);

(statearr_31513[(8)] = inst_31443__$1);

return statearr_31513;
})();
var statearr_31514_33584 = state_31482__$1;
(statearr_31514_33584[(2)] = null);

(statearr_31514_33584[(1)] = (2));


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
var cljs$core$async$state_machine__28732__auto__ = null;
var cljs$core$async$state_machine__28732__auto____0 = (function (){
var statearr_31515 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31515[(0)] = cljs$core$async$state_machine__28732__auto__);

(statearr_31515[(1)] = (1));

return statearr_31515;
});
var cljs$core$async$state_machine__28732__auto____1 = (function (state_31482){
while(true){
var ret_value__28733__auto__ = (function (){try{while(true){
var result__28734__auto__ = switch__28731__auto__(state_31482);
if(cljs.core.keyword_identical_QMARK_(result__28734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28734__auto__;
}
break;
}
}catch (e31517){if((e31517 instanceof Object)){
var ex__28735__auto__ = e31517;
var statearr_31518_33585 = state_31482;
(statearr_31518_33585[(5)] = ex__28735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31517;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33586 = state_31482;
state_31482 = G__33586;
continue;
} else {
return ret_value__28733__auto__;
}
break;
}
});
cljs$core$async$state_machine__28732__auto__ = function(state_31482){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28732__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28732__auto____1.call(this,state_31482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28732__auto____0;
cljs$core$async$state_machine__28732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28732__auto____1;
return cljs$core$async$state_machine__28732__auto__;
})()
})();
var state__29079__auto__ = (function (){var statearr_31523 = (f__29077__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29077__auto__.cljs$core$IFn$_invoke$arity$0() : f__29077__auto__.call(null));
(statearr_31523[(6)] = c__29076__auto___33557);

return statearr_31523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29079__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__31533 = arguments.length;
switch (G__31533) {
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
var c__29076__auto___33589 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29077__auto__ = (function (){var switch__28731__auto__ = (function (state_31575){
var state_val_31576 = (state_31575[(1)]);
if((state_val_31576 === (7))){
var inst_31571 = (state_31575[(2)]);
var state_31575__$1 = state_31575;
var statearr_31577_33592 = state_31575__$1;
(statearr_31577_33592[(2)] = inst_31571);

(statearr_31577_33592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31576 === (1))){
var inst_31534 = [];
var inst_31535 = inst_31534;
var inst_31536 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31575__$1 = (function (){var statearr_31578 = state_31575;
(statearr_31578[(7)] = inst_31535);

(statearr_31578[(8)] = inst_31536);

return statearr_31578;
})();
var statearr_31579_33593 = state_31575__$1;
(statearr_31579_33593[(2)] = null);

(statearr_31579_33593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31576 === (4))){
var inst_31539 = (state_31575[(9)]);
var inst_31539__$1 = (state_31575[(2)]);
var inst_31540 = (inst_31539__$1 == null);
var inst_31541 = cljs.core.not(inst_31540);
var state_31575__$1 = (function (){var statearr_31580 = state_31575;
(statearr_31580[(9)] = inst_31539__$1);

return statearr_31580;
})();
if(inst_31541){
var statearr_31581_33594 = state_31575__$1;
(statearr_31581_33594[(1)] = (5));

} else {
var statearr_31582_33595 = state_31575__$1;
(statearr_31582_33595[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31576 === (15))){
var inst_31565 = (state_31575[(2)]);
var state_31575__$1 = state_31575;
var statearr_31584_33597 = state_31575__$1;
(statearr_31584_33597[(2)] = inst_31565);

(statearr_31584_33597[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31576 === (13))){
var state_31575__$1 = state_31575;
var statearr_31585_33601 = state_31575__$1;
(statearr_31585_33601[(2)] = null);

(statearr_31585_33601[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31576 === (6))){
var inst_31535 = (state_31575[(7)]);
var inst_31560 = inst_31535.length;
var inst_31561 = (inst_31560 > (0));
var state_31575__$1 = state_31575;
if(cljs.core.truth_(inst_31561)){
var statearr_31586_33602 = state_31575__$1;
(statearr_31586_33602[(1)] = (12));

} else {
var statearr_31587_33603 = state_31575__$1;
(statearr_31587_33603[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31576 === (3))){
var inst_31573 = (state_31575[(2)]);
var state_31575__$1 = state_31575;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31575__$1,inst_31573);
} else {
if((state_val_31576 === (12))){
var inst_31535 = (state_31575[(7)]);
var inst_31563 = cljs.core.vec(inst_31535);
var state_31575__$1 = state_31575;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31575__$1,(15),out,inst_31563);
} else {
if((state_val_31576 === (2))){
var state_31575__$1 = state_31575;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31575__$1,(4),ch);
} else {
if((state_val_31576 === (11))){
var inst_31543 = (state_31575[(10)]);
var inst_31539 = (state_31575[(9)]);
var inst_31553 = (state_31575[(2)]);
var inst_31554 = [];
var inst_31555 = inst_31554.push(inst_31539);
var inst_31535 = inst_31554;
var inst_31536 = inst_31543;
var state_31575__$1 = (function (){var statearr_31593 = state_31575;
(statearr_31593[(11)] = inst_31553);

(statearr_31593[(12)] = inst_31555);

(statearr_31593[(7)] = inst_31535);

(statearr_31593[(8)] = inst_31536);

return statearr_31593;
})();
var statearr_31594_33610 = state_31575__$1;
(statearr_31594_33610[(2)] = null);

(statearr_31594_33610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31576 === (9))){
var inst_31535 = (state_31575[(7)]);
var inst_31551 = cljs.core.vec(inst_31535);
var state_31575__$1 = state_31575;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31575__$1,(11),out,inst_31551);
} else {
if((state_val_31576 === (5))){
var inst_31543 = (state_31575[(10)]);
var inst_31539 = (state_31575[(9)]);
var inst_31536 = (state_31575[(8)]);
var inst_31543__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31539) : f.call(null,inst_31539));
var inst_31544 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31543__$1,inst_31536);
var inst_31545 = cljs.core.keyword_identical_QMARK_(inst_31536,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31546 = ((inst_31544) || (inst_31545));
var state_31575__$1 = (function (){var statearr_31599 = state_31575;
(statearr_31599[(10)] = inst_31543__$1);

return statearr_31599;
})();
if(cljs.core.truth_(inst_31546)){
var statearr_31600_33611 = state_31575__$1;
(statearr_31600_33611[(1)] = (8));

} else {
var statearr_31603_33612 = state_31575__$1;
(statearr_31603_33612[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31576 === (14))){
var inst_31568 = (state_31575[(2)]);
var inst_31569 = cljs.core.async.close_BANG_(out);
var state_31575__$1 = (function (){var statearr_31609 = state_31575;
(statearr_31609[(13)] = inst_31568);

return statearr_31609;
})();
var statearr_31611_33613 = state_31575__$1;
(statearr_31611_33613[(2)] = inst_31569);

(statearr_31611_33613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31576 === (10))){
var inst_31558 = (state_31575[(2)]);
var state_31575__$1 = state_31575;
var statearr_31617_33617 = state_31575__$1;
(statearr_31617_33617[(2)] = inst_31558);

(statearr_31617_33617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31576 === (8))){
var inst_31535 = (state_31575[(7)]);
var inst_31543 = (state_31575[(10)]);
var inst_31539 = (state_31575[(9)]);
var inst_31548 = inst_31535.push(inst_31539);
var tmp31608 = inst_31535;
var inst_31535__$1 = tmp31608;
var inst_31536 = inst_31543;
var state_31575__$1 = (function (){var statearr_31643 = state_31575;
(statearr_31643[(7)] = inst_31535__$1);

(statearr_31643[(14)] = inst_31548);

(statearr_31643[(8)] = inst_31536);

return statearr_31643;
})();
var statearr_31644_33622 = state_31575__$1;
(statearr_31644_33622[(2)] = null);

(statearr_31644_33622[(1)] = (2));


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
var cljs$core$async$state_machine__28732__auto__ = null;
var cljs$core$async$state_machine__28732__auto____0 = (function (){
var statearr_31645 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31645[(0)] = cljs$core$async$state_machine__28732__auto__);

(statearr_31645[(1)] = (1));

return statearr_31645;
});
var cljs$core$async$state_machine__28732__auto____1 = (function (state_31575){
while(true){
var ret_value__28733__auto__ = (function (){try{while(true){
var result__28734__auto__ = switch__28731__auto__(state_31575);
if(cljs.core.keyword_identical_QMARK_(result__28734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28734__auto__;
}
break;
}
}catch (e31646){if((e31646 instanceof Object)){
var ex__28735__auto__ = e31646;
var statearr_31647_33623 = state_31575;
(statearr_31647_33623[(5)] = ex__28735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31646;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33624 = state_31575;
state_31575 = G__33624;
continue;
} else {
return ret_value__28733__auto__;
}
break;
}
});
cljs$core$async$state_machine__28732__auto__ = function(state_31575){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28732__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28732__auto____1.call(this,state_31575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28732__auto____0;
cljs$core$async$state_machine__28732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28732__auto____1;
return cljs$core$async$state_machine__28732__auto__;
})()
})();
var state__29079__auto__ = (function (){var statearr_31648 = (f__29077__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29077__auto__.cljs$core$IFn$_invoke$arity$0() : f__29077__auto__.call(null));
(statearr_31648[(6)] = c__29076__auto___33589);

return statearr_31648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29079__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
