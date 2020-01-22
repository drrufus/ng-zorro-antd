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
/**
 * This module provides utility functions to query DOM information or
 * set properties.
 */
import { filterNotEmptyNode } from './check';
/**
 * Silent an event by stopping and preventing it.
 * @param {?} e
 * @return {?}
 */
export function silentEvent(e) {
    e.stopPropagation();
    e.preventDefault();
}
/**
 * @param {?} elem
 * @return {?}
 */
export function getElementOffset(elem) {
    if (!elem.getClientRects().length) {
        return { top: 0, left: 0 };
    }
    /** @type {?} */
    const rect = elem.getBoundingClientRect();
    /** @type {?} */
    const win = (/** @type {?} */ (elem.ownerDocument)).defaultView;
    return {
        top: rect.top + (/** @type {?} */ (win)).pageYOffset,
        left: rect.left + (/** @type {?} */ (win)).pageXOffset
    };
}
/**
 * @param {?} element
 * @return {?}
 */
export function findFirstNotEmptyNode(element) {
    /** @type {?} */
    const children = element.childNodes;
    for (let i = 0; i < children.length; i++) {
        /** @type {?} */
        const node = children.item(i);
        if (filterNotEmptyNode(node)) {
            return node;
        }
    }
    return null;
}
/**
 * @param {?} element
 * @return {?}
 */
export function findLastNotEmptyNode(element) {
    /** @type {?} */
    const children = element.childNodes;
    for (let i = children.length - 1; i >= 0; i--) {
        /** @type {?} */
        const node = children.item(i);
        if (filterNotEmptyNode(node)) {
            return node;
        }
    }
    return null;
}
/**
 * @param {?} parent
 * @return {?}
 */
export function reverseChildNodes(parent) {
    /** @type {?} */
    const children = parent.childNodes;
    /** @type {?} */
    let length = children.length;
    if (length) {
        /** @type {?} */
        const nodes = [];
        children.forEach((/**
         * @param {?} node
         * @param {?} i
         * @return {?}
         */
        (node, i) => (nodes[i] = node)));
        while (length--) {
            parent.appendChild(nodes[length]);
        }
    }
}
/**
 * Investigate if an event is a `TouchEvent`.
 * @param {?} event
 * @return {?}
 */
export function isTouchEvent(event) {
    return event.type.startsWith('touch');
}
/**
 * @param {?} event
 * @return {?}
 */
export function getEventPosition(event) {
    return isTouchEvent(event) ? event.touches[0] || event.changedTouches[0] : event;
}
/**
 * @record
 */
export function MouseTouchObserverConfig() { }
if (false) {
    /** @type {?} */
    MouseTouchObserverConfig.prototype.end;
    /** @type {?} */
    MouseTouchObserverConfig.prototype.move;
    /** @type {?} */
    MouseTouchObserverConfig.prototype.pluckKey;
    /** @type {?} */
    MouseTouchObserverConfig.prototype.start;
    /** @type {?|undefined} */
    MouseTouchObserverConfig.prototype.end$;
    /** @type {?|undefined} */
    MouseTouchObserverConfig.prototype.moveResolved$;
    /** @type {?|undefined} */
    MouseTouchObserverConfig.prototype.startPlucked$;
    /**
     * @param {?} e
     * @return {?}
     */
    MouseTouchObserverConfig.prototype.filter = function (e) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsidXRpbC9kb20udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBZUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sU0FBUyxDQUFDOzs7Ozs7QUFLN0MsTUFBTSxVQUFVLFdBQVcsQ0FBQyxDQUFRO0lBQ2xDLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNwQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDckIsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsSUFBaUI7SUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxNQUFNLEVBQUU7UUFDakMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDO0tBQzVCOztVQUVLLElBQUksR0FBRyxJQUFJLENBQUMscUJBQXFCLEVBQUU7O1VBQ25DLEdBQUcsR0FBRyxtQkFBQSxJQUFJLENBQUMsYUFBYSxFQUFDLENBQUMsV0FBVztJQUMzQyxPQUFPO1FBQ0wsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsbUJBQUEsR0FBRyxFQUFDLENBQUMsV0FBVztRQUNoQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxtQkFBQSxHQUFHLEVBQUMsQ0FBQyxXQUFXO0tBQ25DLENBQUM7QUFDSixDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxxQkFBcUIsQ0FBQyxPQUFvQjs7VUFDbEQsUUFBUSxHQUFHLE9BQU8sQ0FBQyxVQUFVO0lBQ25DLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztjQUNsQyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM1QixPQUFPLElBQUksQ0FBQztTQUNiO0tBQ0Y7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLG9CQUFvQixDQUFDLE9BQW9COztVQUNqRCxRQUFRLEdBQUcsT0FBTyxDQUFDLFVBQVU7SUFDbkMsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFOztjQUN2QyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM1QixPQUFPLElBQUksQ0FBQztTQUNiO0tBQ0Y7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLGlCQUFpQixDQUFDLE1BQW1COztVQUM3QyxRQUFRLEdBQUcsTUFBTSxDQUFDLFVBQVU7O1FBQzlCLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTTtJQUM1QixJQUFJLE1BQU0sRUFBRTs7Y0FDSixLQUFLLEdBQVcsRUFBRTtRQUN4QixRQUFRLENBQUMsT0FBTzs7Ozs7UUFBQyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFDLENBQUM7UUFDakQsT0FBTyxNQUFNLEVBQUUsRUFBRTtZQUNmLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDbkM7S0FDRjtBQUNILENBQUM7Ozs7OztBQUtELE1BQU0sVUFBVSxZQUFZLENBQUMsS0FBOEI7SUFDekQsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN4QyxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxLQUE4QjtJQUM3RCxPQUFPLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7QUFDbkYsQ0FBQzs7OztBQUVELDhDQVdDOzs7SUFWQyx1Q0FBWTs7SUFDWix3Q0FBYTs7SUFDYiw0Q0FBbUI7O0lBQ25CLHlDQUFjOztJQUVkLHdDQUF5Qjs7SUFDekIsaURBQW1DOztJQUNuQyxpREFBbUM7Ozs7O0lBRW5DLDZEQUEyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgbW9kdWxlIHByb3ZpZGVzIHV0aWxpdHkgZnVuY3Rpb25zIHRvIHF1ZXJ5IERPTSBpbmZvcm1hdGlvbiBvclxyXG4gKiBzZXQgcHJvcGVydGllcy5cclxuICovXHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBmaWx0ZXJOb3RFbXB0eU5vZGUgfSBmcm9tICcuL2NoZWNrJztcclxuXHJcbi8qKlxyXG4gKiBTaWxlbnQgYW4gZXZlbnQgYnkgc3RvcHBpbmcgYW5kIHByZXZlbnRpbmcgaXQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2lsZW50RXZlbnQoZTogRXZlbnQpOiB2b2lkIHtcclxuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnRPZmZzZXQoZWxlbTogSFRNTEVsZW1lbnQpOiB7IHRvcDogbnVtYmVyOyBsZWZ0OiBudW1iZXIgfSB7XHJcbiAgaWYgKCFlbGVtLmdldENsaWVudFJlY3RzKCkubGVuZ3RoKSB7XHJcbiAgICByZXR1cm4geyB0b3A6IDAsIGxlZnQ6IDAgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlY3QgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gIGNvbnN0IHdpbiA9IGVsZW0ub3duZXJEb2N1bWVudCEuZGVmYXVsdFZpZXc7XHJcbiAgcmV0dXJuIHtcclxuICAgIHRvcDogcmVjdC50b3AgKyB3aW4hLnBhZ2VZT2Zmc2V0LFxyXG4gICAgbGVmdDogcmVjdC5sZWZ0ICsgd2luIS5wYWdlWE9mZnNldFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kRmlyc3ROb3RFbXB0eU5vZGUoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBOb2RlIHwgbnVsbCB7XHJcbiAgY29uc3QgY2hpbGRyZW4gPSBlbGVtZW50LmNoaWxkTm9kZXM7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3Qgbm9kZSA9IGNoaWxkcmVuLml0ZW0oaSk7XHJcbiAgICBpZiAoZmlsdGVyTm90RW1wdHlOb2RlKG5vZGUpKSB7XHJcbiAgICAgIHJldHVybiBub2RlO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRMYXN0Tm90RW1wdHlOb2RlKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogTm9kZSB8IG51bGwge1xyXG4gIGNvbnN0IGNoaWxkcmVuID0gZWxlbWVudC5jaGlsZE5vZGVzO1xyXG4gIGZvciAobGV0IGkgPSBjaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgY29uc3Qgbm9kZSA9IGNoaWxkcmVuLml0ZW0oaSk7XHJcbiAgICBpZiAoZmlsdGVyTm90RW1wdHlOb2RlKG5vZGUpKSB7XHJcbiAgICAgIHJldHVybiBub2RlO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJldmVyc2VDaGlsZE5vZGVzKHBhcmVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuICBjb25zdCBjaGlsZHJlbiA9IHBhcmVudC5jaGlsZE5vZGVzO1xyXG4gIGxldCBsZW5ndGggPSBjaGlsZHJlbi5sZW5ndGg7XHJcbiAgaWYgKGxlbmd0aCkge1xyXG4gICAgY29uc3Qgbm9kZXM6IE5vZGVbXSA9IFtdO1xyXG4gICAgY2hpbGRyZW4uZm9yRWFjaCgobm9kZSwgaSkgPT4gKG5vZGVzW2ldID0gbm9kZSkpO1xyXG4gICAgd2hpbGUgKGxlbmd0aC0tKSB7XHJcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChub2Rlc1tsZW5ndGhdKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnZlc3RpZ2F0ZSBpZiBhbiBldmVudCBpcyBhIGBUb3VjaEV2ZW50YC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1RvdWNoRXZlbnQoZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KTogZXZlbnQgaXMgVG91Y2hFdmVudCB7XHJcbiAgcmV0dXJuIGV2ZW50LnR5cGUuc3RhcnRzV2l0aCgndG91Y2gnKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEV2ZW50UG9zaXRpb24oZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KTogTW91c2VFdmVudCB8IFRvdWNoIHtcclxuICByZXR1cm4gaXNUb3VjaEV2ZW50KGV2ZW50KSA/IGV2ZW50LnRvdWNoZXNbMF0gfHwgZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0gOiBldmVudDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNb3VzZVRvdWNoT2JzZXJ2ZXJDb25maWcge1xyXG4gIGVuZDogc3RyaW5nO1xyXG4gIG1vdmU6IHN0cmluZztcclxuICBwbHVja0tleTogc3RyaW5nW107XHJcbiAgc3RhcnQ6IHN0cmluZztcclxuXHJcbiAgZW5kJD86IE9ic2VydmFibGU8RXZlbnQ+O1xyXG4gIG1vdmVSZXNvbHZlZCQ/OiBPYnNlcnZhYmxlPG51bWJlcj47XHJcbiAgc3RhcnRQbHVja2VkJD86IE9ic2VydmFibGU8bnVtYmVyPjtcclxuXHJcbiAgZmlsdGVyPyhlOiBFdmVudCk6IGJvb2xlYW47XHJcbn1cclxuIl19