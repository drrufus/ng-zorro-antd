/**
 * @fileoverview added by tsickle
 * Generated from: util/dom.ts
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
    var rect = elem.getBoundingClientRect();
    /** @type {?} */
    var win = (/** @type {?} */ (elem.ownerDocument)).defaultView;
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
    var children = element.childNodes;
    for (var i = 0; i < children.length; i++) {
        /** @type {?} */
        var node = children.item(i);
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
    var children = element.childNodes;
    for (var i = children.length - 1; i >= 0; i--) {
        /** @type {?} */
        var node = children.item(i);
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
    var children = parent.childNodes;
    /** @type {?} */
    var length = children.length;
    if (length) {
        /** @type {?} */
        var nodes_1 = [];
        children.forEach((/**
         * @param {?} node
         * @param {?} i
         * @return {?}
         */
        function (node, i) { return (nodes_1[i] = node); }));
        while (length--) {
            parent.appendChild(nodes_1[length]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsidXRpbC9kb20udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQWVBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7Ozs7O0FBSzdDLE1BQU0sVUFBVSxXQUFXLENBQUMsQ0FBUTtJQUNsQyxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDcEIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQ3JCLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLGdCQUFnQixDQUFDLElBQWlCO0lBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxFQUFFO1FBQ2pDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQztLQUM1Qjs7UUFFSyxJQUFJLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixFQUFFOztRQUNuQyxHQUFHLEdBQUcsbUJBQUEsSUFBSSxDQUFDLGFBQWEsRUFBQyxDQUFDLFdBQVc7SUFDM0MsT0FBTztRQUNMLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLG1CQUFBLEdBQUcsRUFBQyxDQUFDLFdBQVc7UUFDaEMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsbUJBQUEsR0FBRyxFQUFDLENBQUMsV0FBVztLQUNuQyxDQUFDO0FBQ0osQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUscUJBQXFCLENBQUMsT0FBb0I7O1FBQ2xELFFBQVEsR0FBRyxPQUFPLENBQUMsVUFBVTtJQUNuQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7WUFDbEMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksa0JBQWtCLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDNUIsT0FBTyxJQUFJLENBQUM7U0FDYjtLQUNGO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxvQkFBb0IsQ0FBQyxPQUFvQjs7UUFDakQsUUFBUSxHQUFHLE9BQU8sQ0FBQyxVQUFVO0lBQ25DLEtBQUssSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTs7WUFDdkMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksa0JBQWtCLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDNUIsT0FBTyxJQUFJLENBQUM7U0FDYjtLQUNGO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxpQkFBaUIsQ0FBQyxNQUFtQjs7UUFDN0MsUUFBUSxHQUFHLE1BQU0sQ0FBQyxVQUFVOztRQUM5QixNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU07SUFDNUIsSUFBSSxNQUFNLEVBQUU7O1lBQ0osT0FBSyxHQUFXLEVBQUU7UUFDeEIsUUFBUSxDQUFDLE9BQU87Ozs7O1FBQUMsVUFBQyxJQUFJLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxPQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQWpCLENBQWlCLEVBQUMsQ0FBQztRQUNqRCxPQUFPLE1BQU0sRUFBRSxFQUFFO1lBQ2YsTUFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUNuQztLQUNGO0FBQ0gsQ0FBQzs7Ozs7O0FBS0QsTUFBTSxVQUFVLFlBQVksQ0FBQyxLQUE4QjtJQUN6RCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3hDLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLGdCQUFnQixDQUFDLEtBQThCO0lBQzdELE9BQU8sWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUNuRixDQUFDOzs7O0FBRUQsOENBV0M7OztJQVZDLHVDQUFZOztJQUNaLHdDQUFhOztJQUNiLDRDQUFtQjs7SUFDbkIseUNBQWM7O0lBRWQsd0NBQXlCOztJQUN6QixpREFBbUM7O0lBQ25DLGlEQUFtQzs7Ozs7SUFFbkMsNkRBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG4vKipcclxuICogVGhpcyBtb2R1bGUgcHJvdmlkZXMgdXRpbGl0eSBmdW5jdGlvbnMgdG8gcXVlcnkgRE9NIGluZm9ybWF0aW9uIG9yXHJcbiAqIHNldCBwcm9wZXJ0aWVzLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IGZpbHRlck5vdEVtcHR5Tm9kZSB9IGZyb20gJy4vY2hlY2snO1xyXG5cclxuLyoqXHJcbiAqIFNpbGVudCBhbiBldmVudCBieSBzdG9wcGluZyBhbmQgcHJldmVudGluZyBpdC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzaWxlbnRFdmVudChlOiBFdmVudCk6IHZvaWQge1xyXG4gIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudE9mZnNldChlbGVtOiBIVE1MRWxlbWVudCk6IHsgdG9wOiBudW1iZXI7IGxlZnQ6IG51bWJlciB9IHtcclxuICBpZiAoIWVsZW0uZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpIHtcclxuICAgIHJldHVybiB7IHRvcDogMCwgbGVmdDogMCB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgY29uc3Qgd2luID0gZWxlbS5vd25lckRvY3VtZW50IS5kZWZhdWx0VmlldztcclxuICByZXR1cm4ge1xyXG4gICAgdG9wOiByZWN0LnRvcCArIHdpbiEucGFnZVlPZmZzZXQsXHJcbiAgICBsZWZ0OiByZWN0LmxlZnQgKyB3aW4hLnBhZ2VYT2Zmc2V0XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRGaXJzdE5vdEVtcHR5Tm9kZShlbGVtZW50OiBIVE1MRWxlbWVudCk6IE5vZGUgfCBudWxsIHtcclxuICBjb25zdCBjaGlsZHJlbiA9IGVsZW1lbnQuY2hpbGROb2RlcztcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBub2RlID0gY2hpbGRyZW4uaXRlbShpKTtcclxuICAgIGlmIChmaWx0ZXJOb3RFbXB0eU5vZGUobm9kZSkpIHtcclxuICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmluZExhc3ROb3RFbXB0eU5vZGUoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBOb2RlIHwgbnVsbCB7XHJcbiAgY29uc3QgY2hpbGRyZW4gPSBlbGVtZW50LmNoaWxkTm9kZXM7XHJcbiAgZm9yIChsZXQgaSA9IGNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICBjb25zdCBub2RlID0gY2hpbGRyZW4uaXRlbShpKTtcclxuICAgIGlmIChmaWx0ZXJOb3RFbXB0eU5vZGUobm9kZSkpIHtcclxuICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmV2ZXJzZUNoaWxkTm9kZXMocGFyZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gIGNvbnN0IGNoaWxkcmVuID0gcGFyZW50LmNoaWxkTm9kZXM7XHJcbiAgbGV0IGxlbmd0aCA9IGNoaWxkcmVuLmxlbmd0aDtcclxuICBpZiAobGVuZ3RoKSB7XHJcbiAgICBjb25zdCBub2RlczogTm9kZVtdID0gW107XHJcbiAgICBjaGlsZHJlbi5mb3JFYWNoKChub2RlLCBpKSA9PiAobm9kZXNbaV0gPSBub2RlKSk7XHJcbiAgICB3aGlsZSAobGVuZ3RoLS0pIHtcclxuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKG5vZGVzW2xlbmd0aF0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEludmVzdGlnYXRlIGlmIGFuIGV2ZW50IGlzIGEgYFRvdWNoRXZlbnRgLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVG91Y2hFdmVudChldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpOiBldmVudCBpcyBUb3VjaEV2ZW50IHtcclxuICByZXR1cm4gZXZlbnQudHlwZS5zdGFydHNXaXRoKCd0b3VjaCcpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RXZlbnRQb3NpdGlvbihldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpOiBNb3VzZUV2ZW50IHwgVG91Y2gge1xyXG4gIHJldHVybiBpc1RvdWNoRXZlbnQoZXZlbnQpID8gZXZlbnQudG91Y2hlc1swXSB8fCBldmVudC5jaGFuZ2VkVG91Y2hlc1swXSA6IGV2ZW50O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1vdXNlVG91Y2hPYnNlcnZlckNvbmZpZyB7XHJcbiAgZW5kOiBzdHJpbmc7XHJcbiAgbW92ZTogc3RyaW5nO1xyXG4gIHBsdWNrS2V5OiBzdHJpbmdbXTtcclxuICBzdGFydDogc3RyaW5nO1xyXG5cclxuICBlbmQkPzogT2JzZXJ2YWJsZTxFdmVudD47XHJcbiAgbW92ZVJlc29sdmVkJD86IE9ic2VydmFibGU8bnVtYmVyPjtcclxuICBzdGFydFBsdWNrZWQkPzogT2JzZXJ2YWJsZTxudW1iZXI+O1xyXG5cclxuICBmaWx0ZXI/KGU6IEV2ZW50KTogYm9vbGVhbjtcclxufVxyXG4iXX0=