/**
 * @fileoverview added by tsickle
 * Generated from: logger/logger.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
const record = {};
/** @type {?} */
export const PREFIX = '[NG-ZORRO]:';
/**
 * @param {...?} args
 * @return {?}
 */
function notRecorded(...args) {
    /** @type {?} */
    const asRecord = args.reduce((/**
     * @param {?} acc
     * @param {?} c
     * @return {?}
     */
    (acc, c) => acc + c.toString()), '');
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
function consoleCommonBehavior(consoleFunc, ...args) {
    if (environment.isTestMode || (isDevMode() && notRecorded(...args))) {
        consoleFunc(...args);
    }
}
// Warning should only be printed in dev mode and only once.
/** @type {?} */
export const warn = (/**
 * @param {...?} args
 * @return {?}
 */
(...args) => consoleCommonBehavior((/**
 * @param {...?} arg
 * @return {?}
 */
(...arg) => console.warn(PREFIX, ...arg)), ...args));
/** @type {?} */
export const warnDeprecation = (/**
 * @param {...?} args
 * @return {?}
 */
(...args) => {
    if (!environment.isTestMode) {
        /** @type {?} */
        const stack = new Error().stack;
        return consoleCommonBehavior((/**
         * @param {...?} arg
         * @return {?}
         */
        (...arg) => console.warn(PREFIX, 'deprecated:', ...arg, stack)), ...args);
    }
    else {
        return (/**
         * @return {?}
         */
        () => { });
    }
});
// Log should only be printed in dev mode.
/** @type {?} */
export const log = (/**
 * @param {...?} args
 * @return {?}
 */
(...args) => {
    if (isDevMode()) {
        console.log(PREFIX, ...args);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsibG9nZ2VyL2xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBU0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7O01BRXBELE1BQU0sR0FBNEIsRUFBRTs7QUFFMUMsTUFBTSxPQUFPLE1BQU0sR0FBRyxhQUFhOzs7OztBQUVuQyxTQUFTLFdBQVcsQ0FBQyxHQUFHLElBQVc7O1VBQzNCLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTTs7Ozs7SUFBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEdBQUUsRUFBRSxDQUFDO0lBRWhFLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQ3BCLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7U0FBTTtRQUNMLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDeEIsT0FBTyxJQUFJLENBQUM7S0FDYjtBQUNILENBQUM7Ozs7OztBQUVELFNBQVMscUJBQXFCLENBQUMsV0FBbUMsRUFBRSxHQUFHLElBQVc7SUFDaEYsSUFBSSxXQUFXLENBQUMsVUFBVSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRTtRQUNuRSxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztLQUN0QjtBQUNILENBQUM7OztBQUdELE1BQU0sT0FBTyxJQUFJOzs7O0FBQUcsQ0FBQyxHQUFHLElBQVcsRUFBRSxFQUFFLENBQUMscUJBQXFCOzs7O0FBQUMsQ0FBQyxHQUFHLEdBQVUsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRSxHQUFHLElBQUksQ0FBQyxDQUFBOztBQUV2SCxNQUFNLE9BQU8sZUFBZTs7OztBQUFHLENBQUMsR0FBRyxJQUFXLEVBQUUsRUFBRTtJQUNoRCxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRTs7Y0FDckIsS0FBSyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUMsS0FBSztRQUMvQixPQUFPLHFCQUFxQjs7OztRQUFDLENBQUMsR0FBRyxHQUFVLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLGFBQWEsRUFBRSxHQUFHLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0tBQzlHO1NBQU07UUFDTDs7O1FBQU8sR0FBRyxFQUFFLEdBQUUsQ0FBQyxFQUFDO0tBQ2pCO0FBQ0gsQ0FBQyxDQUFBOzs7QUFHRCxNQUFNLE9BQU8sR0FBRzs7OztBQUFHLENBQUMsR0FBRyxJQUFXLEVBQUUsRUFBRTtJQUNwQyxJQUFJLFNBQVMsRUFBRSxFQUFFO1FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztLQUM5QjtBQUNILENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuLy8gdHNsaW50OmRpc2FibGU6bm8tYW55XHJcbmltcG9ydCB7IGlzRGV2TW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnO1xyXG5cclxuY29uc3QgcmVjb3JkOiBSZWNvcmQ8c3RyaW5nLCBib29sZWFuPiA9IHt9O1xyXG5cclxuZXhwb3J0IGNvbnN0IFBSRUZJWCA9ICdbTkctWk9SUk9dOic7XHJcblxyXG5mdW5jdGlvbiBub3RSZWNvcmRlZCguLi5hcmdzOiBhbnlbXSk6IGJvb2xlYW4ge1xyXG4gIGNvbnN0IGFzUmVjb3JkID0gYXJncy5yZWR1Y2UoKGFjYywgYykgPT4gYWNjICsgYy50b1N0cmluZygpLCAnJyk7XHJcblxyXG4gIGlmIChyZWNvcmRbYXNSZWNvcmRdKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlY29yZFthc1JlY29yZF0gPSB0cnVlO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjb25zb2xlQ29tbW9uQmVoYXZpb3IoY29uc29sZUZ1bmM6ICguLi5hcmdzOiBhbnkpID0+IHZvaWQsIC4uLmFyZ3M6IGFueVtdKTogdm9pZCB7XHJcbiAgaWYgKGVudmlyb25tZW50LmlzVGVzdE1vZGUgfHwgKGlzRGV2TW9kZSgpICYmIG5vdFJlY29yZGVkKC4uLmFyZ3MpKSkge1xyXG4gICAgY29uc29sZUZ1bmMoLi4uYXJncyk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBXYXJuaW5nIHNob3VsZCBvbmx5IGJlIHByaW50ZWQgaW4gZGV2IG1vZGUgYW5kIG9ubHkgb25jZS5cclxuZXhwb3J0IGNvbnN0IHdhcm4gPSAoLi4uYXJnczogYW55W10pID0+IGNvbnNvbGVDb21tb25CZWhhdmlvcigoLi4uYXJnOiBhbnlbXSkgPT4gY29uc29sZS53YXJuKFBSRUZJWCwgLi4uYXJnKSwgLi4uYXJncyk7XHJcblxyXG5leHBvcnQgY29uc3Qgd2FybkRlcHJlY2F0aW9uID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XHJcbiAgaWYgKCFlbnZpcm9ubWVudC5pc1Rlc3RNb2RlKSB7XHJcbiAgICBjb25zdCBzdGFjayA9IG5ldyBFcnJvcigpLnN0YWNrO1xyXG4gICAgcmV0dXJuIGNvbnNvbGVDb21tb25CZWhhdmlvcigoLi4uYXJnOiBhbnlbXSkgPT4gY29uc29sZS53YXJuKFBSRUZJWCwgJ2RlcHJlY2F0ZWQ6JywgLi4uYXJnLCBzdGFjayksIC4uLmFyZ3MpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gKCkgPT4ge307XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gTG9nIHNob3VsZCBvbmx5IGJlIHByaW50ZWQgaW4gZGV2IG1vZGUuXHJcbmV4cG9ydCBjb25zdCBsb2cgPSAoLi4uYXJnczogYW55W10pID0+IHtcclxuICBpZiAoaXNEZXZNb2RlKCkpIHtcclxuICAgIGNvbnNvbGUubG9nKFBSRUZJWCwgLi4uYXJncyk7XHJcbiAgfVxyXG59O1xyXG4iXX0=