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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsidXRpbC9kb20udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQWVBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7Ozs7O0FBSzdDLE1BQU0sVUFBVSxXQUFXLENBQUMsQ0FBUTtJQUNsQyxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDcEIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQ3JCLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLGdCQUFnQixDQUFDLElBQWlCO0lBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxFQUFFO1FBQ2pDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQztLQUM1Qjs7VUFFSyxJQUFJLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixFQUFFOztVQUNuQyxHQUFHLEdBQUcsbUJBQUEsSUFBSSxDQUFDLGFBQWEsRUFBQyxDQUFDLFdBQVc7SUFDM0MsT0FBTztRQUNMLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLG1CQUFBLEdBQUcsRUFBQyxDQUFDLFdBQVc7UUFDaEMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsbUJBQUEsR0FBRyxFQUFDLENBQUMsV0FBVztLQUNuQyxDQUFDO0FBQ0osQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUscUJBQXFCLENBQUMsT0FBb0I7O1VBQ2xELFFBQVEsR0FBRyxPQUFPLENBQUMsVUFBVTtJQUNuQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7Y0FDbEMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksa0JBQWtCLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDNUIsT0FBTyxJQUFJLENBQUM7U0FDYjtLQUNGO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxvQkFBb0IsQ0FBQyxPQUFvQjs7VUFDakQsUUFBUSxHQUFHLE9BQU8sQ0FBQyxVQUFVO0lBQ25DLEtBQUssSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTs7Y0FDdkMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksa0JBQWtCLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDNUIsT0FBTyxJQUFJLENBQUM7U0FDYjtLQUNGO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxpQkFBaUIsQ0FBQyxNQUFtQjs7VUFDN0MsUUFBUSxHQUFHLE1BQU0sQ0FBQyxVQUFVOztRQUM5QixNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU07SUFDNUIsSUFBSSxNQUFNLEVBQUU7O2NBQ0osS0FBSyxHQUFXLEVBQUU7UUFDeEIsUUFBUSxDQUFDLE9BQU87Ozs7O1FBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBQyxDQUFDO1FBQ2pELE9BQU8sTUFBTSxFQUFFLEVBQUU7WUFDZixNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ25DO0tBQ0Y7QUFDSCxDQUFDOzs7Ozs7QUFLRCxNQUFNLFVBQVUsWUFBWSxDQUFDLEtBQThCO0lBQ3pELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDeEMsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsS0FBOEI7SUFDN0QsT0FBTyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQ25GLENBQUM7Ozs7QUFFRCw4Q0FXQzs7O0lBVkMsdUNBQVk7O0lBQ1osd0NBQWE7O0lBQ2IsNENBQW1COztJQUNuQix5Q0FBYzs7SUFFZCx3Q0FBeUI7O0lBQ3pCLGlEQUFtQzs7SUFDbkMsaURBQW1DOzs7OztJQUVuQyw2REFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBUaGlzIG1vZHVsZSBwcm92aWRlcyB1dGlsaXR5IGZ1bmN0aW9ucyB0byBxdWVyeSBET00gaW5mb3JtYXRpb24gb3JcclxuICogc2V0IHByb3BlcnRpZXMuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgZmlsdGVyTm90RW1wdHlOb2RlIH0gZnJvbSAnLi9jaGVjayc7XHJcblxyXG4vKipcclxuICogU2lsZW50IGFuIGV2ZW50IGJ5IHN0b3BwaW5nIGFuZCBwcmV2ZW50aW5nIGl0LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNpbGVudEV2ZW50KGU6IEV2ZW50KTogdm9pZCB7XHJcbiAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50T2Zmc2V0KGVsZW06IEhUTUxFbGVtZW50KTogeyB0b3A6IG51bWJlcjsgbGVmdDogbnVtYmVyIH0ge1xyXG4gIGlmICghZWxlbS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCkge1xyXG4gICAgcmV0dXJuIHsgdG9wOiAwLCBsZWZ0OiAwIH07XHJcbiAgfVxyXG5cclxuICBjb25zdCByZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICBjb25zdCB3aW4gPSBlbGVtLm93bmVyRG9jdW1lbnQhLmRlZmF1bHRWaWV3O1xyXG4gIHJldHVybiB7XHJcbiAgICB0b3A6IHJlY3QudG9wICsgd2luIS5wYWdlWU9mZnNldCxcclxuICAgIGxlZnQ6IHJlY3QubGVmdCArIHdpbiEucGFnZVhPZmZzZXRcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmluZEZpcnN0Tm90RW1wdHlOb2RlKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogTm9kZSB8IG51bGwge1xyXG4gIGNvbnN0IGNoaWxkcmVuID0gZWxlbWVudC5jaGlsZE5vZGVzO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IG5vZGUgPSBjaGlsZHJlbi5pdGVtKGkpO1xyXG4gICAgaWYgKGZpbHRlck5vdEVtcHR5Tm9kZShub2RlKSkge1xyXG4gICAgICByZXR1cm4gbm9kZTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kTGFzdE5vdEVtcHR5Tm9kZShlbGVtZW50OiBIVE1MRWxlbWVudCk6IE5vZGUgfCBudWxsIHtcclxuICBjb25zdCBjaGlsZHJlbiA9IGVsZW1lbnQuY2hpbGROb2RlcztcclxuICBmb3IgKGxldCBpID0gY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgIGNvbnN0IG5vZGUgPSBjaGlsZHJlbi5pdGVtKGkpO1xyXG4gICAgaWYgKGZpbHRlck5vdEVtcHR5Tm9kZShub2RlKSkge1xyXG4gICAgICByZXR1cm4gbm9kZTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXZlcnNlQ2hpbGROb2RlcyhwYXJlbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XHJcbiAgY29uc3QgY2hpbGRyZW4gPSBwYXJlbnQuY2hpbGROb2RlcztcclxuICBsZXQgbGVuZ3RoID0gY2hpbGRyZW4ubGVuZ3RoO1xyXG4gIGlmIChsZW5ndGgpIHtcclxuICAgIGNvbnN0IG5vZGVzOiBOb2RlW10gPSBbXTtcclxuICAgIGNoaWxkcmVuLmZvckVhY2goKG5vZGUsIGkpID0+IChub2Rlc1tpXSA9IG5vZGUpKTtcclxuICAgIHdoaWxlIChsZW5ndGgtLSkge1xyXG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobm9kZXNbbGVuZ3RoXSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogSW52ZXN0aWdhdGUgaWYgYW4gZXZlbnQgaXMgYSBgVG91Y2hFdmVudGAuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNUb3VjaEV2ZW50KGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCk6IGV2ZW50IGlzIFRvdWNoRXZlbnQge1xyXG4gIHJldHVybiBldmVudC50eXBlLnN0YXJ0c1dpdGgoJ3RvdWNoJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRFdmVudFBvc2l0aW9uKGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCk6IE1vdXNlRXZlbnQgfCBUb3VjaCB7XHJcbiAgcmV0dXJuIGlzVG91Y2hFdmVudChldmVudCkgPyBldmVudC50b3VjaGVzWzBdIHx8IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdIDogZXZlbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTW91c2VUb3VjaE9ic2VydmVyQ29uZmlnIHtcclxuICBlbmQ6IHN0cmluZztcclxuICBtb3ZlOiBzdHJpbmc7XHJcbiAgcGx1Y2tLZXk6IHN0cmluZ1tdO1xyXG4gIHN0YXJ0OiBzdHJpbmc7XHJcblxyXG4gIGVuZCQ/OiBPYnNlcnZhYmxlPEV2ZW50PjtcclxuICBtb3ZlUmVzb2x2ZWQkPzogT2JzZXJ2YWJsZTxudW1iZXI+O1xyXG4gIHN0YXJ0UGx1Y2tlZCQ/OiBPYnNlcnZhYmxlPG51bWJlcj47XHJcblxyXG4gIGZpbHRlcj8oZTogRXZlbnQpOiBib29sZWFuO1xyXG59XHJcbiJdfQ==