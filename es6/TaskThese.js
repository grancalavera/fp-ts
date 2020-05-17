var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { pipeable } from './pipeable';
import { getSemigroup as getTaskSemigroup, task } from './Task';
import * as TH from './These';
import { getTheseM } from './TheseT';
var T = /*@__PURE__*/ getTheseM(task);
/**
 * @since 2.4.0
 */
export var URI = 'TaskThese';
/**
 * @since 2.4.0
 */
export var left = T.left;
/**
 * @since 2.4.0
 */
export var right = T.right;
/**
 * @since 2.4.0
 */
export var both = T.both;
/**
 * @since 2.4.0
 */
export function rightIO(ma) {
    return rightTask(task.fromIO(ma));
}
/**
 * @since 2.4.0
 */
export function leftIO(me) {
    return leftTask(task.fromIO(me));
}
/**
 * @since 2.4.0
 */
export var leftTask = T.leftM;
/**
 * @since 2.4.0
 */
export var rightTask = T.rightM;
/**
 * @since 2.4.0
 */
export var fromIOEither = task.fromIO;
/**
 * @since 2.4.0
 */
export function fold(onLeft, onRight, onBoth) {
    return function (fa) { return T.fold(fa, onLeft, onRight, onBoth); };
}
/**
 * @since 2.4.0
 */
export var swap = T.swap;
/**
 * @since 2.4.0
 */
export function getSemigroup(SE, SA) {
    return getTaskSemigroup(TH.getSemigroup(SE, SA));
}
/**
 * @since 2.4.0
 */
export function getMonad(S) {
    return __assign(__assign({ URI: URI }, T.getMonad(S)), { fromIO: rightIO, fromTask: rightTask });
}
/* tslint:disable:readonly-array */
/**
 * @since 2.4.0
 */
export function toTuple(e, a) {
    return function (fa) { return T.toTuple(fa, e, a); };
}
/* tslint:enable:readonly-array */
/**
 * @since 2.4.0
 */
export var taskThese = {
    URI: URI,
    map: T.map,
    bimap: T.bimap,
    mapLeft: T.mapLeft
};
var pipeables = /*@__PURE__*/ pipeable(taskThese);
var bimap = /*@__PURE__*/ (function () { return pipeables.bimap; })();
var map = /*@__PURE__*/ (function () { return pipeables.map; })();
var mapLeft = /*@__PURE__*/ (function () { return pipeables.mapLeft; })();
export { 
/**
 * @since 2.4.0
 */
bimap, 
/**
 * @since 2.4.0
 */
map, 
/**
 * @since 2.4.0
 */
mapLeft };
