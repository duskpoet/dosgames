goog.provide('oops.core');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.object');
goog.require('oops.sdefs');
goog.require('oops.state');
goog.require('oops.config');
goog.require('oops.messages');
goog.require('oops.helpers');
goog.require('oops.schema');
oops.core.report_error_dynamically = (function oops$core$report_error_dynamically(msg,data){
if(oops.state.was_error_reported_QMARK_()){
return null;
} else {
oops.state.mark_error_reported_BANG_();

var G__27316 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"throw","throw",-1044625833),G__27316)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"console","console",1228072057),G__27316)){
var G__27318 = (console["error"]);
var G__27319 = msg;
var G__27320 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__27317 = oops.state.get_console_reporter();
return (fexpr__27317.cljs$core$IFn$_invoke$arity$3 ? fexpr__27317.cljs$core$IFn$_invoke$arity$3(G__27318,G__27319,G__27320) : fexpr__27317.call(null,G__27318,G__27319,G__27320));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__27316)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27316)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__27321 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"throw","throw",-1044625833),G__27321)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"console","console",1228072057),G__27321)){
var G__27323 = (console["warn"]);
var G__27324 = msg;
var G__27325 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__27322 = oops.state.get_console_reporter();
return (fexpr__27322.cljs$core$IFn$_invoke$arity$3 ? fexpr__27322.cljs$core$IFn$_invoke$arity$3(G__27323,G__27324,G__27325) : fexpr__27322.call(null,G__27323,G__27324,G__27325));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__27321)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27321)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4795__auto__ = [];
var len__4789__auto___27398 = arguments.length;
var i__4790__auto___27399 = (0);
while(true){
if((i__4790__auto___27399 < len__4789__auto___27398)){
args__4795__auto__.push((arguments[i__4790__auto___27399]));

var G__27400 = (i__4790__auto___27399 + (1));
i__4790__auto___27399 = G__27400;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__27328){
var vec__27329 = p__27328;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27329,(0),null);

if(cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),msg_id)){
} else {
var G__27332_27401 = oops.config.get_config_key(msg_id);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"warn","warn",-436710552),G__27332_27401)){
(oops.core.report_warning_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_warning_dynamically.cljs$core$IFn$_invoke$arity$2((oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2 ? oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info) : oops.messages.runtime_message.call(null,msg_id,info)),info) : oops.core.report_warning_dynamically.call(null,(oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2 ? oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info) : oops.messages.runtime_message.call(null,msg_id,info)),info));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032),G__27332_27401)){
(oops.core.report_error_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_error_dynamically.cljs$core$IFn$_invoke$arity$2((oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2 ? oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info) : oops.messages.runtime_message.call(null,msg_id,info)),info) : oops.core.report_error_dynamically.call(null,(oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2 ? oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info) : oops.messages.runtime_message.call(null,msg_id,info)),info));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__27332_27401)){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__27332_27401)){
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27332_27401)].join('')));

}
}
}
}
}

return null;
}));

(oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq27326){
var G__27327 = cljs.core.first(seq27326);
var seq27326__$1 = cljs.core.next(seq27326);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27327,seq27326__$1);
}));

oops.core.validate_object_access_dynamically = (function oops$core$validate_object_access_dynamically(obj,mode,key,push_QMARK_,check_key_read_QMARK_,check_key_write_QMARK_){
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && ((void 0 === obj))))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"undefined",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"undefined",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)));

return false;
})()
):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && ((obj == null))))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"nil",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"nil",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)));

return false;
})()
):(cljs.core.truth_(goog.isBoolean(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"boolean",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"boolean",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)));

return false;
})()
):(cljs.core.truth_(goog.isNumber(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"number",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"number",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)));

return false;
})()
):(cljs.core.truth_(goog.isString(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"string",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"string",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)));

return false;
})()
):((cljs.core.not(goog.isObject(obj)))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"non-object",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"non-object",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)));

return false;
})()
):(cljs.core.truth_(goog.isDateLike(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"date-like",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"date-like",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_type_QMARK_(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs type",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs type",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_instance_QMARK_(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs instance",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs instance",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)));

return true;
})()
):true
)))))))))){
if(cljs.core.truth_(push_QMARK_)){
oops.state.add_key_to_current_path_BANG_(key);

oops.state.set_last_access_modifier_BANG_(mode);
} else {
}

var and__4174__auto__ = (cljs.core.truth_(check_key_read_QMARK_)?((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && (cljs.core.not(goog.object.containsKey(obj,key)))))?(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"missing-object-key","missing-object-key",-1300201731),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"missing-object-key","missing-object-key",-1300201731),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null))):true):true);
if(cljs.core.truth_(and__4174__auto__)){
if(cljs.core.truth_(check_key_write_QMARK_)){
var temp__5737__auto__ = oops.helpers.get_property_descriptor(obj,key);
if((temp__5737__auto__ == null)){
if(cljs.core.truth_(oops.helpers.is_object_frozen_QMARK_(obj))){
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"object-is-frozen","object-is-frozen",-1391578096),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-is-frozen","object-is-frozen",-1391578096),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)));
} else {
if(cljs.core.truth_(oops.helpers.is_object_sealed_QMARK_(obj))){
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"object-is-sealed","object-is-sealed",-1791813926),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-is-sealed","object-is-sealed",-1791813926),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)));
} else {
return true;

}
}
} else {
var descriptor_27333 = temp__5737__auto__;
var temp__5737__auto____$1 = oops.helpers.determine_property_non_writable_reason(descriptor_27333);
if((temp__5737__auto____$1 == null)){
return true;
} else {
var reason_27334 = temp__5737__auto____$1;
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),oops.helpers.is_object_frozen_QMARK_(obj),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_27334,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),oops.helpers.is_object_frozen_QMARK_(obj),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_27334,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)));
}
}
} else {
return true;
}
} else {
return and__4174__auto__;
}
} else {
return null;
}
});
oops.core.validate_fn_call_dynamically = (function oops$core$validate_fn_call_dynamically(fn,mode){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1))) && ((fn == null)))){
return true;
} else {
if(cljs.core.truth_(goog.isFunction(fn))){
return true;
} else {
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expected-function-value","expected-function-value",-1399123630),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"soft?","soft?",-1339668477),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1)),new cljs.core.Keyword(null,"fn","fn",-1175266204),fn,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"expected-function-value","expected-function-value",-1399123630),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"soft?","soft?",-1339668477),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1)),new cljs.core.Keyword(null,"fn","fn",-1175266204),fn,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)));

}
}
});
oops.core.punch_key_dynamically_BANG_ = (function oops$core$punch_key_dynamically_BANG_(obj,key){
var child_factory_27336 = oops.config.get_child_factory();
var child_factory_27336__$1 = (function (){var G__27337 = child_factory_27336;
var G__27337__$1 = (((G__27337 instanceof cljs.core.Keyword))?G__27337.fqn:null);
switch (G__27337__$1) {
case "js-obj":
return (function (){
return ({});
});

break;
case "js-array":
return (function (){
return [];
});

break;
default:
return child_factory_27336;

}
})();

var child_obj_27335 = (child_factory_27336__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_27336__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_27336__$1.call(null,obj,key));
if(oops.core.validate_object_access_dynamically(obj,(2),key,false,true,true)){
(obj[key] = child_obj_27335);
} else {
}

return child_obj_27335;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_27340 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_27340);

return selector_path_27340;
} else {
var selector_path_27341 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_27341);

return selector_path_27341;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5739__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if((temp__5739__auto__ == null)){
return null;
} else {
var issue_27342 = temp__5739__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_27342);
}
});
oops.core.get_key_dynamically = (function oops$core$get_key_dynamically(obj,key,mode){
if(oops.core.validate_object_access_dynamically(obj,mode,key,true,true,false)){
return (obj[key]);
} else {
return null;
}
});
oops.core.set_key_dynamically = (function oops$core$set_key_dynamically(obj,key,val,mode){
if(oops.core.validate_object_access_dynamically(obj,mode,key,true,true,true)){
return (obj[key] = val);
} else {
return null;
}
});
oops.core.get_selector_dynamically = (function oops$core$get_selector_dynamically(obj,selector){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_27351 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_27351,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_27351,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null)));
})():true))){
var path_27344 = (function (){var path_27343 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_27343,(0));

return path_27343;
})();
var len_27345 = path_27344.length;
var i_27346 = (0);
var obj_27347 = obj;
while(true){
if((i_27346 < len_27345)){
var mode_27348 = (path_27344[i_27346]);
var key_27349 = (path_27344[(i_27346 + (1))]);
var next_obj_27350 = oops.core.get_key_dynamically(obj_27347,key_27349,mode_27348);
var G__27352 = mode_27348;
switch (G__27352) {
case (0):
var G__27424 = (i_27346 + (2));
var G__27425 = next_obj_27350;
i_27346 = G__27424;
obj_27347 = G__27425;
continue;

break;
case (1):
if((!((next_obj_27350 == null)))){
var G__27426 = (i_27346 + (2));
var G__27427 = next_obj_27350;
i_27346 = G__27426;
obj_27347 = G__27427;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_27350 == null)))){
var G__27428 = (i_27346 + (2));
var G__27429 = next_obj_27350;
i_27346 = G__27428;
obj_27347 = G__27429;
continue;
} else {
var G__27430 = (i_27346 + (2));
var G__27431 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_27347,key_27349) : oops.core.punch_key_dynamically_BANG_.call(null,obj_27347,key_27349));
i_27346 = G__27430;
obj_27347 = G__27431;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27352)].join('')));

}
} else {
return obj_27347;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_27378 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_27378,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_27378,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null)));
})():true))){
var path_27354 = (function (){var path_27353 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_27353,(0));

return path_27353;
})();
var len_27355 = path_27354.length;
if((len_27355 < (4))){
return [obj,(function (){var path_27357 = path_27354;
var len_27358 = path_27357.length;
var i_27359 = (0);
var obj_27360 = obj;
while(true){
if((i_27359 < len_27358)){
var mode_27361 = (path_27357[i_27359]);
var key_27362 = (path_27357[(i_27359 + (1))]);
var next_obj_27363 = oops.core.get_key_dynamically(obj_27360,key_27362,mode_27361);
var G__27379 = mode_27361;
switch (G__27379) {
case (0):
var G__27435 = (i_27359 + (2));
var G__27436 = next_obj_27363;
i_27359 = G__27435;
obj_27360 = G__27436;
continue;

break;
case (1):
if((!((next_obj_27363 == null)))){
var G__27437 = (i_27359 + (2));
var G__27438 = next_obj_27363;
i_27359 = G__27437;
obj_27360 = G__27438;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_27363 == null)))){
var G__27439 = (i_27359 + (2));
var G__27440 = next_obj_27363;
i_27359 = G__27439;
obj_27360 = G__27440;
continue;
} else {
var G__27441 = (i_27359 + (2));
var G__27442 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_27360,key_27362) : oops.core.punch_key_dynamically_BANG_.call(null,obj_27360,key_27362));
i_27359 = G__27441;
obj_27360 = G__27442;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27379)].join('')));

}
} else {
return obj_27360;
}
break;
}
})()];
} else {
var target_obj_27356 = (function (){var path_27364 = path_27354.slice((0),(len_27355 - (2)));
var len_27365 = path_27364.length;
var i_27366 = (0);
var obj_27367 = obj;
while(true){
if((i_27366 < len_27365)){
var mode_27368 = (path_27364[i_27366]);
var key_27369 = (path_27364[(i_27366 + (1))]);
var next_obj_27370 = oops.core.get_key_dynamically(obj_27367,key_27369,mode_27368);
var G__27380 = mode_27368;
switch (G__27380) {
case (0):
var G__27446 = (i_27366 + (2));
var G__27447 = next_obj_27370;
i_27366 = G__27446;
obj_27367 = G__27447;
continue;

break;
case (1):
if((!((next_obj_27370 == null)))){
var G__27448 = (i_27366 + (2));
var G__27449 = next_obj_27370;
i_27366 = G__27448;
obj_27367 = G__27449;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_27370 == null)))){
var G__27450 = (i_27366 + (2));
var G__27451 = next_obj_27370;
i_27366 = G__27450;
obj_27367 = G__27451;
continue;
} else {
var G__27452 = (i_27366 + (2));
var G__27453 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_27367,key_27369) : oops.core.punch_key_dynamically_BANG_.call(null,obj_27367,key_27369));
i_27366 = G__27452;
obj_27367 = G__27453;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27380)].join('')));

}
} else {
return obj_27367;
}
break;
}
})();
return [target_obj_27356,(function (){var path_27371 = [(path_27354[(len_27355 - (2))]),(path_27354[(len_27355 - (1))])];
var len_27372 = path_27371.length;
var i_27373 = (0);
var obj_27374 = target_obj_27356;
while(true){
if((i_27373 < len_27372)){
var mode_27375 = (path_27371[i_27373]);
var key_27376 = (path_27371[(i_27373 + (1))]);
var next_obj_27377 = oops.core.get_key_dynamically(obj_27374,key_27376,mode_27375);
var G__27381 = mode_27375;
switch (G__27381) {
case (0):
var G__27455 = (i_27373 + (2));
var G__27456 = next_obj_27377;
i_27373 = G__27455;
obj_27374 = G__27456;
continue;

break;
case (1):
if((!((next_obj_27377 == null)))){
var G__27461 = (i_27373 + (2));
var G__27462 = next_obj_27377;
i_27373 = G__27461;
obj_27374 = G__27462;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_27377 == null)))){
var G__27463 = (i_27373 + (2));
var G__27464 = next_obj_27377;
i_27373 = G__27463;
obj_27374 = G__27464;
continue;
} else {
var G__27465 = (i_27373 + (2));
var G__27466 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_27374,key_27376) : oops.core.punch_key_dynamically_BANG_.call(null,obj_27374,key_27376));
i_27373 = G__27465;
obj_27374 = G__27466;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27381)].join('')));

}
} else {
return obj_27374;
}
break;
}
})()];
}
} else {
return null;
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_27396 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_27396,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_27396,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null)));
})():true))){
var path_27383 = (function (){var path_27382 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_27382,(1));

return path_27382;
})();
var len_27386 = path_27383.length;
var parent_obj_path_27387 = path_27383.slice((0),(len_27386 - (2)));
var key_27384 = (path_27383[(len_27386 - (1))]);
var mode_27385 = (path_27383[(len_27386 - (2))]);
var parent_obj_27388 = (function (){var path_27389 = parent_obj_path_27387;
var len_27390 = path_27389.length;
var i_27391 = (0);
var obj_27392 = obj;
while(true){
if((i_27391 < len_27390)){
var mode_27393 = (path_27389[i_27391]);
var key_27394 = (path_27389[(i_27391 + (1))]);
var next_obj_27395 = oops.core.get_key_dynamically(obj_27392,key_27394,mode_27393);
var G__27397 = mode_27393;
switch (G__27397) {
case (0):
var G__27468 = (i_27391 + (2));
var G__27469 = next_obj_27395;
i_27391 = G__27468;
obj_27392 = G__27469;
continue;

break;
case (1):
if((!((next_obj_27395 == null)))){
var G__27470 = (i_27391 + (2));
var G__27471 = next_obj_27395;
i_27391 = G__27470;
obj_27392 = G__27471;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_27395 == null)))){
var G__27472 = (i_27391 + (2));
var G__27473 = next_obj_27395;
i_27391 = G__27472;
obj_27392 = G__27473;
continue;
} else {
var G__27474 = (i_27391 + (2));
var G__27475 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_27392,key_27394) : oops.core.punch_key_dynamically_BANG_.call(null,obj_27392,key_27394));
i_27391 = G__27474;
obj_27392 = G__27475;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27397)].join('')));

}
} else {
return obj_27392;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_27388,key_27384,val,mode_27385);
} else {
return null;
}
});

//# sourceMappingURL=oops.core.js.map
