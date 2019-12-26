/**
 * @fileoverview added by tsickle
 * Generated from: testing/dispatch-events.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { createFakeEvent, createKeyboardEvent, createMouseEvent, createTouchEvent } from './event-objects';
/**
 * Utility to dispatch any event on a Node.
 * @param {?} node
 * @param {?} event
 * @return {?}
 */
export function dispatchEvent(node, event) {
    node.dispatchEvent(event);
    return event;
}
/**
 * Shorthand to dispatch a fake event on a specified node.
 * @param {?} node
 * @param {?} type
 * @param {?=} canBubble
 * @return {?}
 */
export function dispatchFakeEvent(node, type, canBubble) {
    return dispatchEvent(node, createFakeEvent(type, canBubble));
}
/**
 * Shorthand to dispatch a keyboard event with a specified key code.
 * @param {?} node
 * @param {?} type
 * @param {?} keyCode
 * @param {?=} target
 * @return {?}
 */
export function dispatchKeyboardEvent(node, type, keyCode, target) {
    return (/** @type {?} */ (dispatchEvent(node, createKeyboardEvent(type, keyCode, target))));
}
/**
 * Shorthand to dispatch a mouse event on the specified coordinates.
 * @param {?} node
 * @param {?} type
 * @param {?=} x
 * @param {?=} y
 * @param {?=} event
 * @return {?}
 */
export function dispatchMouseEvent(node, type, x, y, event) {
    if (x === void 0) { x = 0; }
    if (y === void 0) { y = 0; }
    if (event === void 0) { event = createMouseEvent(type, x, y); }
    return (/** @type {?} */ (dispatchEvent(node, event)));
}
/**
 * Shorthand to dispatch a touch event on the specified coordinates.
 * @param {?} node
 * @param {?} type
 * @param {?=} x
 * @param {?=} y
 * @return {?}
 */
export function dispatchTouchEvent(node, type, x, y) {
    if (x === void 0) { x = 0; }
    if (y === void 0) { y = 0; }
    return (/** @type {?} */ (dispatchEvent(node, createTouchEvent(type, x, y))));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGF0Y2gtZXZlbnRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsidGVzdGluZy9kaXNwYXRjaC1ldmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxtQkFBbUIsRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7Ozs7O0FBRzNHLE1BQU0sVUFBVSxhQUFhLENBQUMsSUFBbUIsRUFBRSxLQUFZO0lBQzdELElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDOzs7Ozs7OztBQUdELE1BQU0sVUFBVSxpQkFBaUIsQ0FBQyxJQUFtQixFQUFFLElBQVksRUFBRSxTQUFtQjtJQUN0RixPQUFPLGFBQWEsQ0FBQyxJQUFJLEVBQUUsZUFBZSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQy9ELENBQUM7Ozs7Ozs7OztBQUdELE1BQU0sVUFBVSxxQkFBcUIsQ0FBQyxJQUFVLEVBQUUsSUFBWSxFQUFFLE9BQWUsRUFBRSxNQUFnQjtJQUMvRixPQUFPLG1CQUFBLGFBQWEsQ0FBQyxJQUFJLEVBQUUsbUJBQW1CLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxFQUFpQixDQUFDO0FBQzFGLENBQUM7Ozs7Ozs7Ozs7QUFHRCxNQUFNLFVBQVUsa0JBQWtCLENBQ2hDLElBQVUsRUFDVixJQUFZLEVBQ1osQ0FBYSxFQUNiLENBQWEsRUFDYixLQUFnRDtJQUZoRCxrQkFBQSxFQUFBLEtBQWE7SUFDYixrQkFBQSxFQUFBLEtBQWE7SUFDYixzQkFBQSxFQUFBLFFBQW9CLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRWhELE9BQU8sbUJBQUEsYUFBYSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsRUFBYyxDQUFDO0FBQ2xELENBQUM7Ozs7Ozs7OztBQUdELE1BQU0sVUFBVSxrQkFBa0IsQ0FBQyxJQUFVLEVBQUUsSUFBWSxFQUFFLENBQWEsRUFBRSxDQUFhO0lBQTVCLGtCQUFBLEVBQUEsS0FBYTtJQUFFLGtCQUFBLEVBQUEsS0FBYTtJQUN2RixPQUFPLG1CQUFBLGFBQWEsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFjLENBQUM7QUFDekUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlRmFrZUV2ZW50LCBjcmVhdGVLZXlib2FyZEV2ZW50LCBjcmVhdGVNb3VzZUV2ZW50LCBjcmVhdGVUb3VjaEV2ZW50IH0gZnJvbSAnLi9ldmVudC1vYmplY3RzJztcclxuXHJcbi8qKiBVdGlsaXR5IHRvIGRpc3BhdGNoIGFueSBldmVudCBvbiBhIE5vZGUuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwYXRjaEV2ZW50KG5vZGU6IE5vZGUgfCBXaW5kb3csIGV2ZW50OiBFdmVudCk6IEV2ZW50IHtcclxuICBub2RlLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG4gIHJldHVybiBldmVudDtcclxufVxyXG5cclxuLyoqIFNob3J0aGFuZCB0byBkaXNwYXRjaCBhIGZha2UgZXZlbnQgb24gYSBzcGVjaWZpZWQgbm9kZS4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BhdGNoRmFrZUV2ZW50KG5vZGU6IE5vZGUgfCBXaW5kb3csIHR5cGU6IHN0cmluZywgY2FuQnViYmxlPzogYm9vbGVhbik6IEV2ZW50IHtcclxuICByZXR1cm4gZGlzcGF0Y2hFdmVudChub2RlLCBjcmVhdGVGYWtlRXZlbnQodHlwZSwgY2FuQnViYmxlKSk7XHJcbn1cclxuXHJcbi8qKiBTaG9ydGhhbmQgdG8gZGlzcGF0Y2ggYSBrZXlib2FyZCBldmVudCB3aXRoIGEgc3BlY2lmaWVkIGtleSBjb2RlLiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGF0Y2hLZXlib2FyZEV2ZW50KG5vZGU6IE5vZGUsIHR5cGU6IHN0cmluZywga2V5Q29kZTogbnVtYmVyLCB0YXJnZXQ/OiBFbGVtZW50KTogS2V5Ym9hcmRFdmVudCB7XHJcbiAgcmV0dXJuIGRpc3BhdGNoRXZlbnQobm9kZSwgY3JlYXRlS2V5Ym9hcmRFdmVudCh0eXBlLCBrZXlDb2RlLCB0YXJnZXQpKSBhcyBLZXlib2FyZEV2ZW50O1xyXG59XHJcblxyXG4vKiogU2hvcnRoYW5kIHRvIGRpc3BhdGNoIGEgbW91c2UgZXZlbnQgb24gdGhlIHNwZWNpZmllZCBjb29yZGluYXRlcy4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BhdGNoTW91c2VFdmVudChcclxuICBub2RlOiBOb2RlLFxyXG4gIHR5cGU6IHN0cmluZyxcclxuICB4OiBudW1iZXIgPSAwLFxyXG4gIHk6IG51bWJlciA9IDAsXHJcbiAgZXZlbnQ6IE1vdXNlRXZlbnQgPSBjcmVhdGVNb3VzZUV2ZW50KHR5cGUsIHgsIHkpXHJcbik6IE1vdXNlRXZlbnQge1xyXG4gIHJldHVybiBkaXNwYXRjaEV2ZW50KG5vZGUsIGV2ZW50KSBhcyBNb3VzZUV2ZW50O1xyXG59XHJcblxyXG4vKiogU2hvcnRoYW5kIHRvIGRpc3BhdGNoIGEgdG91Y2ggZXZlbnQgb24gdGhlIHNwZWNpZmllZCBjb29yZGluYXRlcy4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BhdGNoVG91Y2hFdmVudChub2RlOiBOb2RlLCB0eXBlOiBzdHJpbmcsIHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDApOiBUb3VjaEV2ZW50IHtcclxuICByZXR1cm4gZGlzcGF0Y2hFdmVudChub2RlLCBjcmVhdGVUb3VjaEV2ZW50KHR5cGUsIHgsIHkpKSBhcyBUb3VjaEV2ZW50O1xyXG59XHJcbiJdfQ==