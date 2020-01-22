/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsibG9nZ2VyL2xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFTQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7TUFFcEQsTUFBTSxHQUE0QixFQUFFOztBQUUxQyxNQUFNLE9BQU8sTUFBTSxHQUFHLGFBQWE7Ozs7O0FBRW5DLFNBQVMsV0FBVyxDQUFDLEdBQUcsSUFBVzs7VUFDM0IsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNOzs7OztJQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsR0FBRSxFQUFFLENBQUM7SUFFaEUsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDcEIsT0FBTyxLQUFLLENBQUM7S0FDZDtTQUFNO1FBQ0wsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUN4QixPQUFPLElBQUksQ0FBQztLQUNiO0FBQ0gsQ0FBQzs7Ozs7O0FBRUQsU0FBUyxxQkFBcUIsQ0FBQyxXQUFtQyxFQUFFLEdBQUcsSUFBVztJQUNoRixJQUFJLFdBQVcsQ0FBQyxVQUFVLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFO1FBQ25FLFdBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0tBQ3RCO0FBQ0gsQ0FBQzs7O0FBR0QsTUFBTSxPQUFPLElBQUk7Ozs7QUFBRyxDQUFDLEdBQUcsSUFBVyxFQUFFLEVBQUUsQ0FBQyxxQkFBcUI7Ozs7QUFBQyxDQUFDLEdBQUcsR0FBVSxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFFLEdBQUcsSUFBSSxDQUFDLENBQUE7O0FBRXZILE1BQU0sT0FBTyxlQUFlOzs7O0FBQUcsQ0FBQyxHQUFHLElBQVcsRUFBRSxFQUFFO0lBQ2hELElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFOztjQUNyQixLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQyxLQUFLO1FBQy9CLE9BQU8scUJBQXFCOzs7O1FBQUMsQ0FBQyxHQUFHLEdBQVUsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsYUFBYSxFQUFFLEdBQUcsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7S0FDOUc7U0FBTTtRQUNMOzs7UUFBTyxHQUFHLEVBQUUsR0FBRSxDQUFDLEVBQUM7S0FDakI7QUFDSCxDQUFDLENBQUE7OztBQUdELE1BQU0sT0FBTyxHQUFHOzs7O0FBQUcsQ0FBQyxHQUFHLElBQVcsRUFBRSxFQUFFO0lBQ3BDLElBQUksU0FBUyxFQUFFLEVBQUU7UUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0tBQzlCO0FBQ0gsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1hbnlcclxuaW1wb3J0IHsgaXNEZXZNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4uL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XHJcblxyXG5jb25zdCByZWNvcmQ6IFJlY29yZDxzdHJpbmcsIGJvb2xlYW4+ID0ge307XHJcblxyXG5leHBvcnQgY29uc3QgUFJFRklYID0gJ1tORy1aT1JST106JztcclxuXHJcbmZ1bmN0aW9uIG5vdFJlY29yZGVkKC4uLmFyZ3M6IGFueVtdKTogYm9vbGVhbiB7XHJcbiAgY29uc3QgYXNSZWNvcmQgPSBhcmdzLnJlZHVjZSgoYWNjLCBjKSA9PiBhY2MgKyBjLnRvU3RyaW5nKCksICcnKTtcclxuXHJcbiAgaWYgKHJlY29yZFthc1JlY29yZF0pIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmVjb3JkW2FzUmVjb3JkXSA9IHRydWU7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnNvbGVDb21tb25CZWhhdmlvcihjb25zb2xlRnVuYzogKC4uLmFyZ3M6IGFueSkgPT4gdm9pZCwgLi4uYXJnczogYW55W10pOiB2b2lkIHtcclxuICBpZiAoZW52aXJvbm1lbnQuaXNUZXN0TW9kZSB8fCAoaXNEZXZNb2RlKCkgJiYgbm90UmVjb3JkZWQoLi4uYXJncykpKSB7XHJcbiAgICBjb25zb2xlRnVuYyguLi5hcmdzKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIFdhcm5pbmcgc2hvdWxkIG9ubHkgYmUgcHJpbnRlZCBpbiBkZXYgbW9kZSBhbmQgb25seSBvbmNlLlxyXG5leHBvcnQgY29uc3Qgd2FybiA9ICguLi5hcmdzOiBhbnlbXSkgPT4gY29uc29sZUNvbW1vbkJlaGF2aW9yKCguLi5hcmc6IGFueVtdKSA9PiBjb25zb2xlLndhcm4oUFJFRklYLCAuLi5hcmcpLCAuLi5hcmdzKTtcclxuXHJcbmV4cG9ydCBjb25zdCB3YXJuRGVwcmVjYXRpb24gPSAoLi4uYXJnczogYW55W10pID0+IHtcclxuICBpZiAoIWVudmlyb25tZW50LmlzVGVzdE1vZGUpIHtcclxuICAgIGNvbnN0IHN0YWNrID0gbmV3IEVycm9yKCkuc3RhY2s7XHJcbiAgICByZXR1cm4gY29uc29sZUNvbW1vbkJlaGF2aW9yKCguLi5hcmc6IGFueVtdKSA9PiBjb25zb2xlLndhcm4oUFJFRklYLCAnZGVwcmVjYXRlZDonLCAuLi5hcmcsIHN0YWNrKSwgLi4uYXJncyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoKSA9PiB7fTtcclxuICB9XHJcbn07XHJcblxyXG4vLyBMb2cgc2hvdWxkIG9ubHkgYmUgcHJpbnRlZCBpbiBkZXYgbW9kZS5cclxuZXhwb3J0IGNvbnN0IGxvZyA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xyXG4gIGlmIChpc0Rldk1vZGUoKSkge1xyXG4gICAgY29uc29sZS5sb2coUFJFRklYLCAuLi5hcmdzKTtcclxuICB9XHJcbn07XHJcbiJdfQ==