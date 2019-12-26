/**
 * @fileoverview added by tsickle
 * Generated from: logger/logger.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
// tslint:disable:no-any
import { isDevMode } from '@angular/core';
import { environment } from '../environments/environment';
/** @type {?} */
var record = {};
/** @type {?} */
export var PREFIX = '[NG-ZORRO]:';
/**
 * @param {...?} args
 * @return {?}
 */
function notRecorded() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    /** @type {?} */
    var asRecord = args.reduce((/**
     * @param {?} acc
     * @param {?} c
     * @return {?}
     */
    function (acc, c) { return acc + c.toString(); }), '');
    if (record[asRecord]) {
        return false;
    }
    else {
        record[asRecord] = true;
        return true;
    }
}
/**
 * @param {?} consoleFunc
 * @param {...?} args
 * @return {?}
 */
function consoleCommonBehavior(consoleFunc) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (environment.isTestMode || (isDevMode() && notRecorded.apply(void 0, tslib_1.__spread(args)))) {
        consoleFunc.apply(void 0, tslib_1.__spread(args));
    }
}
// Warning should only be printed in dev mode and only once.
/** @type {?} */
export var warn = (/**
 * @param {...?} args
 * @return {?}
 */
function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return consoleCommonBehavior.apply(void 0, tslib_1.__spread([(/**
         * @param {...?} arg
         * @return {?}
         */
        function () {
            var arg = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                arg[_i] = arguments[_i];
            }
            return console.warn.apply(console, tslib_1.__spread([PREFIX], arg));
        })], args));
});
/** @type {?} */
export var warnDeprecation = (/**
 * @param {...?} args
 * @return {?}
 */
function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!environment.isTestMode) {
        /** @type {?} */
        var stack_1 = new Error().stack;
        return consoleCommonBehavior.apply(void 0, tslib_1.__spread([(/**
             * @param {...?} arg
             * @return {?}
             */
            function () {
                var arg = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    arg[_i] = arguments[_i];
                }
                return console.warn.apply(console, tslib_1.__spread([PREFIX, 'deprecated:'], arg, [stack_1]));
            })], args));
    }
    else {
        return (/**
         * @return {?}
         */
        function () { });
    }
});
// Log should only be printed in dev mode.
/** @type {?} */
export var log = (/**
 * @param {...?} args
 * @return {?}
 */
function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (isDevMode()) {
        console.log.apply(console, tslib_1.__spread([PREFIX], args));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsibG9nZ2VyL2xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQVNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDOztJQUVwRCxNQUFNLEdBQTRCLEVBQUU7O0FBRTFDLE1BQU0sS0FBTyxNQUFNLEdBQUcsYUFBYTs7Ozs7QUFFbkMsU0FBUyxXQUFXO0lBQUMsY0FBYztTQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7UUFBZCx5QkFBYzs7O1FBQzNCLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTTs7Ozs7SUFBQyxVQUFDLEdBQUcsRUFBRSxDQUFDLElBQUssT0FBQSxHQUFHLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFsQixDQUFrQixHQUFFLEVBQUUsQ0FBQztJQUVoRSxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUNwQixPQUFPLEtBQUssQ0FBQztLQUNkO1NBQU07UUFDTCxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLE9BQU8sSUFBSSxDQUFDO0tBQ2I7QUFDSCxDQUFDOzs7Ozs7QUFFRCxTQUFTLHFCQUFxQixDQUFDLFdBQW1DO0lBQUUsY0FBYztTQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7UUFBZCw2QkFBYzs7SUFDaEYsSUFBSSxXQUFXLENBQUMsVUFBVSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksV0FBVyxnQ0FBSSxJQUFJLEVBQUMsQ0FBQyxFQUFFO1FBQ25FLFdBQVcsZ0NBQUksSUFBSSxHQUFFO0tBQ3RCO0FBQ0gsQ0FBQzs7O0FBR0QsTUFBTSxLQUFPLElBQUk7Ozs7QUFBRztJQUFDLGNBQWM7U0FBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1FBQWQseUJBQWM7O0lBQUssT0FBQSxxQkFBcUI7Ozs7UUFBQztZQUFDLGFBQWE7aUJBQWIsVUFBYSxFQUFiLHFCQUFhLEVBQWIsSUFBYTtnQkFBYix3QkFBYTs7WUFBSyxPQUFBLE9BQU8sQ0FBQyxJQUFJLE9BQVosT0FBTyxvQkFBTSxNQUFNLEdBQUssR0FBRztRQUEzQixDQUE0QixJQUFLLElBQUk7QUFBOUUsQ0FBK0UsQ0FBQTs7QUFFdkgsTUFBTSxLQUFPLGVBQWU7Ozs7QUFBRztJQUFDLGNBQWM7U0FBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1FBQWQseUJBQWM7O0lBQzVDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFOztZQUNyQixPQUFLLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQyxLQUFLO1FBQy9CLE9BQU8scUJBQXFCOzs7O1lBQUM7Z0JBQUMsYUFBYTtxQkFBYixVQUFhLEVBQWIscUJBQWEsRUFBYixJQUFhO29CQUFiLHdCQUFhOztnQkFBSyxPQUFBLE9BQU8sQ0FBQyxJQUFJLE9BQVosT0FBTyxvQkFBTSxNQUFNLEVBQUUsYUFBYSxHQUFLLEdBQUcsR0FBRSxPQUFLO1lBQWpELENBQWtELElBQUssSUFBSSxHQUFFO0tBQzlHO1NBQU07UUFDTDs7O1FBQU8sY0FBTyxDQUFDLEVBQUM7S0FDakI7QUFDSCxDQUFDLENBQUE7OztBQUdELE1BQU0sS0FBTyxHQUFHOzs7O0FBQUc7SUFBQyxjQUFjO1NBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztRQUFkLHlCQUFjOztJQUNoQyxJQUFJLFNBQVMsRUFBRSxFQUFFO1FBQ2YsT0FBTyxDQUFDLEdBQUcsT0FBWCxPQUFPLG9CQUFLLE1BQU0sR0FBSyxJQUFJLEdBQUU7S0FDOUI7QUFDSCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLWFueVxyXG5pbXBvcnQgeyBpc0Rldk1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnLi4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50JztcclxuXHJcbmNvbnN0IHJlY29yZDogUmVjb3JkPHN0cmluZywgYm9vbGVhbj4gPSB7fTtcclxuXHJcbmV4cG9ydCBjb25zdCBQUkVGSVggPSAnW05HLVpPUlJPXTonO1xyXG5cclxuZnVuY3Rpb24gbm90UmVjb3JkZWQoLi4uYXJnczogYW55W10pOiBib29sZWFuIHtcclxuICBjb25zdCBhc1JlY29yZCA9IGFyZ3MucmVkdWNlKChhY2MsIGMpID0+IGFjYyArIGMudG9TdHJpbmcoKSwgJycpO1xyXG5cclxuICBpZiAocmVjb3JkW2FzUmVjb3JkXSkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZWNvcmRbYXNSZWNvcmRdID0gdHJ1ZTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY29uc29sZUNvbW1vbkJlaGF2aW9yKGNvbnNvbGVGdW5jOiAoLi4uYXJnczogYW55KSA9PiB2b2lkLCAuLi5hcmdzOiBhbnlbXSk6IHZvaWQge1xyXG4gIGlmIChlbnZpcm9ubWVudC5pc1Rlc3RNb2RlIHx8IChpc0Rldk1vZGUoKSAmJiBub3RSZWNvcmRlZCguLi5hcmdzKSkpIHtcclxuICAgIGNvbnNvbGVGdW5jKC4uLmFyZ3MpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gV2FybmluZyBzaG91bGQgb25seSBiZSBwcmludGVkIGluIGRldiBtb2RlIGFuZCBvbmx5IG9uY2UuXHJcbmV4cG9ydCBjb25zdCB3YXJuID0gKC4uLmFyZ3M6IGFueVtdKSA9PiBjb25zb2xlQ29tbW9uQmVoYXZpb3IoKC4uLmFyZzogYW55W10pID0+IGNvbnNvbGUud2FybihQUkVGSVgsIC4uLmFyZyksIC4uLmFyZ3MpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHdhcm5EZXByZWNhdGlvbiA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xyXG4gIGlmICghZW52aXJvbm1lbnQuaXNUZXN0TW9kZSkge1xyXG4gICAgY29uc3Qgc3RhY2sgPSBuZXcgRXJyb3IoKS5zdGFjaztcclxuICAgIHJldHVybiBjb25zb2xlQ29tbW9uQmVoYXZpb3IoKC4uLmFyZzogYW55W10pID0+IGNvbnNvbGUud2FybihQUkVGSVgsICdkZXByZWNhdGVkOicsIC4uLmFyZywgc3RhY2spLCAuLi5hcmdzKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuICgpID0+IHt9O1xyXG4gIH1cclxufTtcclxuXHJcbi8vIExvZyBzaG91bGQgb25seSBiZSBwcmludGVkIGluIGRldiBtb2RlLlxyXG5leHBvcnQgY29uc3QgbG9nID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XHJcbiAgaWYgKGlzRGV2TW9kZSgpKSB7XHJcbiAgICBjb25zb2xlLmxvZyhQUkVGSVgsIC4uLmFyZ3MpO1xyXG4gIH1cclxufTtcclxuIl19