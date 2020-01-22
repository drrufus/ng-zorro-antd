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
import { TemplateRef, Type } from '@angular/core';
/**
 * @template T
 * @param {?} value
 * @return {?}
 */
export function isNotNil(value) {
    return typeof value !== 'undefined' && value !== null;
}
/**
 * @param {?} value
 * @return {?}
 */
export function isNil(value) {
    return typeof value === 'undefined' || value === null;
}
/**
 * Examine if two objects are shallowly equaled.
 * @param {?=} objA
 * @param {?=} objB
 * @return {?}
 */
export function shallowEqual(objA, objB) {
    if (objA === objB) {
        return true;
    }
    if (typeof objA !== 'object' || !objA || typeof objB !== 'object' || !objB) {
        return false;
    }
    /** @type {?} */
    var keysA = Object.keys(objA);
    /** @type {?} */
    var keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) {
        return false;
    }
    /** @type {?} */
    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
    // tslint:disable-next-line:prefer-for-of
    for (var idx = 0; idx < keysA.length; idx++) {
        /** @type {?} */
        var key = keysA[idx];
        if (!bHasOwnProperty(key)) {
            return false;
        }
        if (objA[key] !== objB[key]) {
            return false;
        }
    }
    return true;
}
/**
 * @param {?} value
 * @return {?}
 */
export function isInteger(value) {
    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}
/**
 * @param {?} element
 * @return {?}
 */
export function isEmpty(element) {
    /** @type {?} */
    var nodes = element.childNodes;
    for (var i = 0; i < nodes.length; i++) {
        if (filterNotEmptyNode(nodes.item(i))) {
            return false;
        }
    }
    return true;
}
/**
 * @param {?} node
 * @return {?}
 */
export function filterNotEmptyNode(node) {
    if (node) {
        if (node.nodeType === 1 && ((/** @type {?} */ (node))).outerHTML.toString().trim().length !== 0) {
            // ELEMENT_NODE
            return node;
        }
        else if (node.nodeType === 3 && (/** @type {?} */ (node.textContent)).toString().trim().length !== 0) {
            // TEXT_NODE
            return node;
        }
        return null;
    }
    return null;
}
// tslint:disable-next-line:no-any
/**
 * @param {?} value
 * @return {?}
 */
export function isNonEmptyString(value) {
    return typeof value === 'string' && value !== '';
}
// tslint:disable-next-line:no-any
/**
 * @param {?} value
 * @return {?}
 */
export function isTemplateRef(value) {
    return value instanceof TemplateRef;
}
// tslint:disable-next-line:no-any
/**
 * @param {?} value
 * @return {?}
 */
export function isComponent(value) {
    return value instanceof Type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJ1dGlsL2NoZWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7OztBQUlsRCxNQUFNLFVBQVUsUUFBUSxDQUFJLEtBQVE7SUFDbEMsT0FBTyxPQUFPLEtBQUssS0FBSyxXQUFXLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQztBQUN4RCxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxLQUFLLENBQUMsS0FBYztJQUNsQyxPQUFPLE9BQU8sS0FBSyxLQUFLLFdBQVcsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDO0FBQ3hELENBQUM7Ozs7Ozs7QUFLRCxNQUFNLFVBQVUsWUFBWSxDQUFDLElBQXNCLEVBQUUsSUFBc0I7SUFDekUsSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFO1FBQ2pCLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFFRCxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSSxDQUFDLElBQUksSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLElBQUksQ0FBQyxJQUFJLEVBQUU7UUFDMUUsT0FBTyxLQUFLLENBQUM7S0FDZDs7UUFFSyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7O1FBQ3pCLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUUvQixJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssS0FBSyxDQUFDLE1BQU0sRUFBRTtRQUNqQyxPQUFPLEtBQUssQ0FBQztLQUNkOztRQUVLLGVBQWUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBRWxFLHlDQUF5QztJQUN6QyxLQUFLLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFBRTs7WUFDckMsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDdEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN6QixPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzNCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7S0FDRjtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsU0FBUyxDQUFDLEtBQXNCO0lBQzlDLE9BQU8sT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssQ0FBQztBQUNyRixDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQUMsT0FBb0I7O1FBQ3BDLEtBQUssR0FBRyxPQUFPLENBQUMsVUFBVTtJQUNoQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNyQyxJQUFJLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNyQyxPQUFPLEtBQUssQ0FBQztTQUNkO0tBQ0Y7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLGtCQUFrQixDQUFDLElBQVU7SUFDM0MsSUFBSSxJQUFJLEVBQUU7UUFDUixJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssQ0FBQyxJQUFJLENBQUMsbUJBQUEsSUFBSSxFQUFlLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUN6RixlQUFlO1lBQ2YsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxDQUFDLElBQUksbUJBQUEsSUFBSSxDQUFDLFdBQVcsRUFBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDbEYsWUFBWTtZQUNaLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLElBQUksQ0FBQztLQUNiO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDOzs7Ozs7QUFHRCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsS0FBVTtJQUN6QyxPQUFPLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxLQUFLLEtBQUssRUFBRSxDQUFDO0FBQ25ELENBQUM7Ozs7OztBQUdELE1BQU0sVUFBVSxhQUFhLENBQUMsS0FBVTtJQUN0QyxPQUFPLEtBQUssWUFBWSxXQUFXLENBQUM7QUFDdEMsQ0FBQzs7Ozs7O0FBR0QsTUFBTSxVQUFVLFdBQVcsQ0FBQyxLQUFVO0lBQ3BDLE9BQU8sS0FBSyxZQUFZLElBQUksQ0FBQztBQUMvQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBUZW1wbGF0ZVJlZiwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgSW5kZXhhYmxlT2JqZWN0IH0gZnJvbSAnLi4vdHlwZXMvaW5kZXhhYmxlJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc05vdE5pbDxUPih2YWx1ZTogVCk6IHZhbHVlIGlzIE5vbk51bGxhYmxlPFQ+IHtcclxuICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSAhPT0gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTmlsKHZhbHVlOiB1bmtub3duKTogdmFsdWUgaXMgbnVsbCB8IHVuZGVmaW5lZCB7XHJcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdmFsdWUgPT09IG51bGw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBFeGFtaW5lIGlmIHR3byBvYmplY3RzIGFyZSBzaGFsbG93bHkgZXF1YWxlZC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzaGFsbG93RXF1YWwob2JqQT86IEluZGV4YWJsZU9iamVjdCwgb2JqQj86IEluZGV4YWJsZU9iamVjdCk6IGJvb2xlYW4ge1xyXG4gIGlmIChvYmpBID09PSBvYmpCKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2Ygb2JqQSAhPT0gJ29iamVjdCcgfHwgIW9iakEgfHwgdHlwZW9mIG9iakIgIT09ICdvYmplY3QnIHx8ICFvYmpCKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBjb25zdCBrZXlzQSA9IE9iamVjdC5rZXlzKG9iakEpO1xyXG4gIGNvbnN0IGtleXNCID0gT2JqZWN0LmtleXMob2JqQik7XHJcblxyXG4gIGlmIChrZXlzQS5sZW5ndGggIT09IGtleXNCLmxlbmd0aCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYkhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5iaW5kKG9iakIpO1xyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cHJlZmVyLWZvci1vZlxyXG4gIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IGtleXNBLmxlbmd0aDsgaWR4KyspIHtcclxuICAgIGNvbnN0IGtleSA9IGtleXNBW2lkeF07XHJcbiAgICBpZiAoIWJIYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChvYmpBW2tleV0gIT09IG9iakJba2V5XSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzSW50ZWdlcih2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgaXNGaW5pdGUodmFsdWUpICYmIE1hdGguZmxvb3IodmFsdWUpID09PSB2YWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRW1wdHkoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcclxuICBjb25zdCBub2RlcyA9IGVsZW1lbnQuY2hpbGROb2RlcztcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoZmlsdGVyTm90RW1wdHlOb2RlKG5vZGVzLml0ZW0oaSkpKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJOb3RFbXB0eU5vZGUobm9kZTogTm9kZSk6IE5vZGUgfCBudWxsIHtcclxuICBpZiAobm9kZSkge1xyXG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEgJiYgKG5vZGUgYXMgSFRNTEVsZW1lbnQpLm91dGVySFRNTC50b1N0cmluZygpLnRyaW0oKS5sZW5ndGggIT09IDApIHtcclxuICAgICAgLy8gRUxFTUVOVF9OT0RFXHJcbiAgICAgIHJldHVybiBub2RlO1xyXG4gICAgfSBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSAzICYmIG5vZGUudGV4dENvbnRlbnQhLnRvU3RyaW5nKCkudHJpbSgpLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAvLyBURVhUX05PREVcclxuICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbiAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuZXhwb3J0IGZ1bmN0aW9uIGlzTm9uRW1wdHlTdHJpbmcodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xyXG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlICE9PSAnJztcclxufVxyXG5cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG5leHBvcnQgZnVuY3Rpb24gaXNUZW1wbGF0ZVJlZih2YWx1ZTogYW55KTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWY7XHJcbn1cclxuXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuZXhwb3J0IGZ1bmN0aW9uIGlzQ29tcG9uZW50KHZhbHVlOiBhbnkpOiBib29sZWFuIHtcclxuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBUeXBlO1xyXG59XHJcbiJdfQ==