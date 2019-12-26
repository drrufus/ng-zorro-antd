/**
 * @fileoverview added by tsickle
 * Generated from: util/tick.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';
/**
 * @return {?}
 */
export function inNextTick() {
    /** @type {?} */
    var timer = new Subject();
    Promise.resolve().then((/**
     * @return {?}
     */
    function () { return timer.next(); }));
    return timer.pipe(take(1));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGljay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbInV0aWwvdGljay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUV0QyxNQUFNLFVBQVUsVUFBVTs7UUFDbEIsS0FBSyxHQUFHLElBQUksT0FBTyxFQUFRO0lBQ2pDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJOzs7SUFBQyxjQUFNLE9BQUEsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFaLENBQVksRUFBQyxDQUFDO0lBQzNDLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM3QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5OZXh0VGljaygpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcclxuICBjb25zdCB0aW1lciA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aW1lci5uZXh0KCkpO1xyXG4gIHJldHVybiB0aW1lci5waXBlKHRha2UoMSkpO1xyXG59XHJcbiJdfQ==