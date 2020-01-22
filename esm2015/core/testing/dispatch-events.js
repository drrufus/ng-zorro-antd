/**
 * @fileoverview added by tsickle
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
export function dispatchMouseEvent(node, type, x = 0, y = 0, event = createMouseEvent(type, x, y)) {
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
export function dispatchTouchEvent(node, type, x = 0, y = 0) {
    return (/** @type {?} */ (dispatchEvent(node, createTouchEvent(type, x, y))));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGF0Y2gtZXZlbnRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsidGVzdGluZy9kaXNwYXRjaC1ldmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7Ozs7QUFHM0csTUFBTSxVQUFVLGFBQWEsQ0FBQyxJQUFtQixFQUFFLEtBQVk7SUFDN0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7Ozs7Ozs7O0FBR0QsTUFBTSxVQUFVLGlCQUFpQixDQUFDLElBQW1CLEVBQUUsSUFBWSxFQUFFLFNBQW1CO0lBQ3RGLE9BQU8sYUFBYSxDQUFDLElBQUksRUFBRSxlQUFlLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFDL0QsQ0FBQzs7Ozs7Ozs7O0FBR0QsTUFBTSxVQUFVLHFCQUFxQixDQUFDLElBQVUsRUFBRSxJQUFZLEVBQUUsT0FBZSxFQUFFLE1BQWdCO0lBQy9GLE9BQU8sbUJBQUEsYUFBYSxDQUFDLElBQUksRUFBRSxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEVBQWlCLENBQUM7QUFDMUYsQ0FBQzs7Ozs7Ozs7OztBQUdELE1BQU0sVUFBVSxrQkFBa0IsQ0FDaEMsSUFBVSxFQUNWLElBQVksRUFDWixJQUFZLENBQUMsRUFDYixJQUFZLENBQUMsRUFDYixRQUFvQixnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVoRCxPQUFPLG1CQUFBLGFBQWEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQWMsQ0FBQztBQUNsRCxDQUFDOzs7Ozs7Ozs7QUFHRCxNQUFNLFVBQVUsa0JBQWtCLENBQUMsSUFBVSxFQUFFLElBQVksRUFBRSxJQUFZLENBQUMsRUFBRSxJQUFZLENBQUM7SUFDdkYsT0FBTyxtQkFBQSxhQUFhLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBYyxDQUFDO0FBQ3pFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IGNyZWF0ZUZha2VFdmVudCwgY3JlYXRlS2V5Ym9hcmRFdmVudCwgY3JlYXRlTW91c2VFdmVudCwgY3JlYXRlVG91Y2hFdmVudCB9IGZyb20gJy4vZXZlbnQtb2JqZWN0cyc7XHJcblxyXG4vKiogVXRpbGl0eSB0byBkaXNwYXRjaCBhbnkgZXZlbnQgb24gYSBOb2RlLiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChub2RlOiBOb2RlIHwgV2luZG93LCBldmVudDogRXZlbnQpOiBFdmVudCB7XHJcbiAgbm9kZS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuICByZXR1cm4gZXZlbnQ7XHJcbn1cclxuXHJcbi8qKiBTaG9ydGhhbmQgdG8gZGlzcGF0Y2ggYSBmYWtlIGV2ZW50IG9uIGEgc3BlY2lmaWVkIG5vZGUuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwYXRjaEZha2VFdmVudChub2RlOiBOb2RlIHwgV2luZG93LCB0eXBlOiBzdHJpbmcsIGNhbkJ1YmJsZT86IGJvb2xlYW4pOiBFdmVudCB7XHJcbiAgcmV0dXJuIGRpc3BhdGNoRXZlbnQobm9kZSwgY3JlYXRlRmFrZUV2ZW50KHR5cGUsIGNhbkJ1YmJsZSkpO1xyXG59XHJcblxyXG4vKiogU2hvcnRoYW5kIHRvIGRpc3BhdGNoIGEga2V5Ym9hcmQgZXZlbnQgd2l0aCBhIHNwZWNpZmllZCBrZXkgY29kZS4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BhdGNoS2V5Ym9hcmRFdmVudChub2RlOiBOb2RlLCB0eXBlOiBzdHJpbmcsIGtleUNvZGU6IG51bWJlciwgdGFyZ2V0PzogRWxlbWVudCk6IEtleWJvYXJkRXZlbnQge1xyXG4gIHJldHVybiBkaXNwYXRjaEV2ZW50KG5vZGUsIGNyZWF0ZUtleWJvYXJkRXZlbnQodHlwZSwga2V5Q29kZSwgdGFyZ2V0KSkgYXMgS2V5Ym9hcmRFdmVudDtcclxufVxyXG5cclxuLyoqIFNob3J0aGFuZCB0byBkaXNwYXRjaCBhIG1vdXNlIGV2ZW50IG9uIHRoZSBzcGVjaWZpZWQgY29vcmRpbmF0ZXMuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwYXRjaE1vdXNlRXZlbnQoXHJcbiAgbm9kZTogTm9kZSxcclxuICB0eXBlOiBzdHJpbmcsXHJcbiAgeDogbnVtYmVyID0gMCxcclxuICB5OiBudW1iZXIgPSAwLFxyXG4gIGV2ZW50OiBNb3VzZUV2ZW50ID0gY3JlYXRlTW91c2VFdmVudCh0eXBlLCB4LCB5KVxyXG4pOiBNb3VzZUV2ZW50IHtcclxuICByZXR1cm4gZGlzcGF0Y2hFdmVudChub2RlLCBldmVudCkgYXMgTW91c2VFdmVudDtcclxufVxyXG5cclxuLyoqIFNob3J0aGFuZCB0byBkaXNwYXRjaCBhIHRvdWNoIGV2ZW50IG9uIHRoZSBzcGVjaWZpZWQgY29vcmRpbmF0ZXMuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwYXRjaFRvdWNoRXZlbnQobm9kZTogTm9kZSwgdHlwZTogc3RyaW5nLCB4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwKTogVG91Y2hFdmVudCB7XHJcbiAgcmV0dXJuIGRpc3BhdGNoRXZlbnQobm9kZSwgY3JlYXRlVG91Y2hFdmVudCh0eXBlLCB4LCB5KSkgYXMgVG91Y2hFdmVudDtcclxufVxyXG4iXX0=