/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsibG9nZ2VyL2xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBU0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7O0lBRXBELE1BQU0sR0FBNEIsRUFBRTs7QUFFMUMsTUFBTSxLQUFPLE1BQU0sR0FBRyxhQUFhOzs7OztBQUVuQyxTQUFTLFdBQVc7SUFBQyxjQUFjO1NBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztRQUFkLHlCQUFjOzs7UUFDM0IsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNOzs7OztJQUFDLFVBQUMsR0FBRyxFQUFFLENBQUMsSUFBSyxPQUFBLEdBQUcsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQWxCLENBQWtCLEdBQUUsRUFBRSxDQUFDO0lBRWhFLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQ3BCLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7U0FBTTtRQUNMLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDeEIsT0FBTyxJQUFJLENBQUM7S0FDYjtBQUNILENBQUM7Ozs7OztBQUVELFNBQVMscUJBQXFCLENBQUMsV0FBbUM7SUFBRSxjQUFjO1NBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztRQUFkLDZCQUFjOztJQUNoRixJQUFJLFdBQVcsQ0FBQyxVQUFVLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxXQUFXLGdDQUFJLElBQUksRUFBQyxDQUFDLEVBQUU7UUFDbkUsV0FBVyxnQ0FBSSxJQUFJLEdBQUU7S0FDdEI7QUFDSCxDQUFDOzs7QUFHRCxNQUFNLEtBQU8sSUFBSTs7OztBQUFHO0lBQUMsY0FBYztTQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7UUFBZCx5QkFBYzs7SUFBSyxPQUFBLHFCQUFxQjs7OztRQUFDO1lBQUMsYUFBYTtpQkFBYixVQUFhLEVBQWIscUJBQWEsRUFBYixJQUFhO2dCQUFiLHdCQUFhOztZQUFLLE9BQUEsT0FBTyxDQUFDLElBQUksT0FBWixPQUFPLG9CQUFNLE1BQU0sR0FBSyxHQUFHO1FBQTNCLENBQTRCLElBQUssSUFBSTtBQUE5RSxDQUErRSxDQUFBOztBQUV2SCxNQUFNLEtBQU8sZUFBZTs7OztBQUFHO0lBQUMsY0FBYztTQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7UUFBZCx5QkFBYzs7SUFDNUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUU7O1lBQ3JCLE9BQUssR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDLEtBQUs7UUFDL0IsT0FBTyxxQkFBcUI7Ozs7WUFBQztnQkFBQyxhQUFhO3FCQUFiLFVBQWEsRUFBYixxQkFBYSxFQUFiLElBQWE7b0JBQWIsd0JBQWE7O2dCQUFLLE9BQUEsT0FBTyxDQUFDLElBQUksT0FBWixPQUFPLG9CQUFNLE1BQU0sRUFBRSxhQUFhLEdBQUssR0FBRyxHQUFFLE9BQUs7WUFBakQsQ0FBa0QsSUFBSyxJQUFJLEdBQUU7S0FDOUc7U0FBTTtRQUNMOzs7UUFBTyxjQUFPLENBQUMsRUFBQztLQUNqQjtBQUNILENBQUMsQ0FBQTs7O0FBR0QsTUFBTSxLQUFPLEdBQUc7Ozs7QUFBRztJQUFDLGNBQWM7U0FBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1FBQWQseUJBQWM7O0lBQ2hDLElBQUksU0FBUyxFQUFFLEVBQUU7UUFDZixPQUFPLENBQUMsR0FBRyxPQUFYLE9BQU8sb0JBQUssTUFBTSxHQUFLLElBQUksR0FBRTtLQUM5QjtBQUNILENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuLy8gdHNsaW50OmRpc2FibGU6bm8tYW55XHJcbmltcG9ydCB7IGlzRGV2TW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnO1xyXG5cclxuY29uc3QgcmVjb3JkOiBSZWNvcmQ8c3RyaW5nLCBib29sZWFuPiA9IHt9O1xyXG5cclxuZXhwb3J0IGNvbnN0IFBSRUZJWCA9ICdbTkctWk9SUk9dOic7XHJcblxyXG5mdW5jdGlvbiBub3RSZWNvcmRlZCguLi5hcmdzOiBhbnlbXSk6IGJvb2xlYW4ge1xyXG4gIGNvbnN0IGFzUmVjb3JkID0gYXJncy5yZWR1Y2UoKGFjYywgYykgPT4gYWNjICsgYy50b1N0cmluZygpLCAnJyk7XHJcblxyXG4gIGlmIChyZWNvcmRbYXNSZWNvcmRdKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlY29yZFthc1JlY29yZF0gPSB0cnVlO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjb25zb2xlQ29tbW9uQmVoYXZpb3IoY29uc29sZUZ1bmM6ICguLi5hcmdzOiBhbnkpID0+IHZvaWQsIC4uLmFyZ3M6IGFueVtdKTogdm9pZCB7XHJcbiAgaWYgKGVudmlyb25tZW50LmlzVGVzdE1vZGUgfHwgKGlzRGV2TW9kZSgpICYmIG5vdFJlY29yZGVkKC4uLmFyZ3MpKSkge1xyXG4gICAgY29uc29sZUZ1bmMoLi4uYXJncyk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBXYXJuaW5nIHNob3VsZCBvbmx5IGJlIHByaW50ZWQgaW4gZGV2IG1vZGUgYW5kIG9ubHkgb25jZS5cclxuZXhwb3J0IGNvbnN0IHdhcm4gPSAoLi4uYXJnczogYW55W10pID0+IGNvbnNvbGVDb21tb25CZWhhdmlvcigoLi4uYXJnOiBhbnlbXSkgPT4gY29uc29sZS53YXJuKFBSRUZJWCwgLi4uYXJnKSwgLi4uYXJncyk7XHJcblxyXG5leHBvcnQgY29uc3Qgd2FybkRlcHJlY2F0aW9uID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XHJcbiAgaWYgKCFlbnZpcm9ubWVudC5pc1Rlc3RNb2RlKSB7XHJcbiAgICBjb25zdCBzdGFjayA9IG5ldyBFcnJvcigpLnN0YWNrO1xyXG4gICAgcmV0dXJuIGNvbnNvbGVDb21tb25CZWhhdmlvcigoLi4uYXJnOiBhbnlbXSkgPT4gY29uc29sZS53YXJuKFBSRUZJWCwgJ2RlcHJlY2F0ZWQ6JywgLi4uYXJnLCBzdGFjayksIC4uLmFyZ3MpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gKCkgPT4ge307XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gTG9nIHNob3VsZCBvbmx5IGJlIHByaW50ZWQgaW4gZGV2IG1vZGUuXHJcbmV4cG9ydCBjb25zdCBsb2cgPSAoLi4uYXJnczogYW55W10pID0+IHtcclxuICBpZiAoaXNEZXZNb2RlKCkpIHtcclxuICAgIGNvbnNvbGUubG9nKFBSRUZJWCwgLi4uYXJncyk7XHJcbiAgfVxyXG59O1xyXG4iXX0=