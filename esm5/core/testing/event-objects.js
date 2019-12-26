/**
 * @fileoverview added by tsickle
 * Generated from: testing/event-objects.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates a browser MouseEvent with the specified options.
 * @param {?} type
 * @param {?=} x
 * @param {?=} y
 * @param {?=} button
 * @return {?}
 */
export function createMouseEvent(type, x, y, button) {
    if (x === void 0) { x = 0; }
    if (y === void 0) { y = 0; }
    if (button === void 0) { button = 0; }
    /** @type {?} */
    var event = document.createEvent('MouseEvent');
    event.initMouseEvent(type, true /* canBubble */, false /* cancelable */, window /* view */, 0 /* detail */, x /* screenX */, y /* screenY */, x /* clientX */, y /* clientY */, false /* ctrlKey */, false /* altKey */, false /* shiftKey */, false /* metaKey */, button /* button */, null /* relatedTarget */);
    // `initMouseEvent` doesn't allow us to pass the `buttons` and
    // defaults it to 0 which looks like a fake event.
    Object.defineProperty(event, 'buttons', { get: (/**
         * @return {?}
         */
        function () { return 1; }) });
    return event;
}
/**
 * Creates a browser TouchEvent with the specified pointer coordinates.
 * @param {?} type
 * @param {?=} pageX
 * @param {?=} pageY
 * @return {?}
 */
export function createTouchEvent(type, pageX, pageY) {
    if (pageX === void 0) { pageX = 0; }
    if (pageY === void 0) { pageY = 0; }
    // In favor of creating events that work for most of the browsers, the event is created
    // as a basic UI Event. The necessary details for the event will be set manually.
    /** @type {?} */
    var event = document.createEvent('UIEvent');
    /** @type {?} */
    var touchDetails = { pageX: pageX, pageY: pageY, clientX: pageX, clientY: pageY };
    event.initUIEvent(type, true, true, window, 0);
    // Most of the browsers don't have a "initTouchEvent" method that can be used to define
    // the touch details.
    Object.defineProperties(event, {
        touches: { value: [touchDetails] },
        targetTouches: { value: [touchDetails] },
        changedTouches: { value: [touchDetails] }
    });
    return event;
}
/**
 * Dispatches a keydown event from an element.
 * @param {?} type
 * @param {?} keyCode
 * @param {?=} target
 * @param {?=} key
 * @return {?}
 */
export function createKeyboardEvent(type, keyCode, target, key) {
    // tslint:disable-next-line:no-any
    /** @type {?} */
    var event = (/** @type {?} */ (document.createEvent('KeyboardEvent')));
    /** @type {?} */
    var originalPreventDefault = event.preventDefault;
    // Firefox does not support `initKeyboardEvent`, but supports `initKeyEvent`.
    if (event.initKeyEvent) {
        event.initKeyEvent(type, true, true, window, 0, 0, 0, 0, 0, keyCode);
    }
    else {
        event.initKeyboardEvent(type, true, true, window, 0, key, 0, '', false);
    }
    // Webkit Browsers don't set the keyCode when calling the init function.
    // See related bug https://bugs.webkit.org/show_bug.cgi?id=16735
    Object.defineProperties(event, {
        keyCode: { get: (/**
             * @return {?}
             */
            function () { return keyCode; }) },
        key: { get: (/**
             * @return {?}
             */
            function () { return key; }) },
        target: { get: (/**
             * @return {?}
             */
            function () { return target; }) }
    });
    // IE won't set `defaultPrevented` on synthetic events so we need to do it manually.
    // tslint:disable-next-line:typedef
    event.preventDefault = (/**
     * @return {?}
     */
    function () {
        Object.defineProperty(event, 'defaultPrevented', { get: (/**
             * @return {?}
             */
            function () { return true; }) });
        // tslint:disable-next-line:no-invalid-this
        return originalPreventDefault.apply(this, arguments);
    });
    return event;
}
/**
 * Creates a fake event object with any desired event type.
 * @param {?} type
 * @param {?=} canBubble
 * @param {?=} cancelable
 * @return {?}
 */
export function createFakeEvent(type, canBubble, cancelable) {
    if (canBubble === void 0) { canBubble = true; }
    if (cancelable === void 0) { cancelable = true; }
    /** @type {?} */
    var event = document.createEvent('Event');
    event.initEvent(type, canBubble, cancelable);
    return event;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtb2JqZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbInRlc3RpbmcvZXZlbnQtb2JqZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNBLE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxJQUFZLEVBQUUsQ0FBYSxFQUFFLENBQWEsRUFBRSxNQUFrQjtJQUFoRCxrQkFBQSxFQUFBLEtBQWE7SUFBRSxrQkFBQSxFQUFBLEtBQWE7SUFBRSx1QkFBQSxFQUFBLFVBQWtCOztRQUN2RixLQUFLLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUM7SUFFaEQsS0FBSyxDQUFDLGNBQWMsQ0FDbEIsSUFBSSxFQUNKLElBQUksQ0FBQyxlQUFlLEVBQ3BCLEtBQUssQ0FBQyxnQkFBZ0IsRUFDdEIsTUFBTSxDQUFDLFVBQVUsRUFDakIsQ0FBQyxDQUFDLFlBQVksRUFDZCxDQUFDLENBQUMsYUFBYSxFQUNmLENBQUMsQ0FBQyxhQUFhLEVBQ2YsQ0FBQyxDQUFDLGFBQWEsRUFDZixDQUFDLENBQUMsYUFBYSxFQUNmLEtBQUssQ0FBQyxhQUFhLEVBQ25CLEtBQUssQ0FBQyxZQUFZLEVBQ2xCLEtBQUssQ0FBQyxjQUFjLEVBQ3BCLEtBQUssQ0FBQyxhQUFhLEVBQ25CLE1BQU0sQ0FBQyxZQUFZLEVBQ25CLElBQUksQ0FBQyxtQkFBbUIsQ0FDekIsQ0FBQztJQUVGLDhEQUE4RDtJQUM5RCxrREFBa0Q7SUFDbEQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLEVBQUUsR0FBRzs7O1FBQUUsY0FBTSxPQUFBLENBQUMsRUFBRCxDQUFDLENBQUEsRUFBRSxDQUFDLENBQUM7SUFFMUQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDOzs7Ozs7OztBQUdELE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxJQUFZLEVBQUUsS0FBaUIsRUFBRSxLQUFpQjtJQUFw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SyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXHJcbiAqL1xyXG5cclxuLyoqIENyZWF0ZXMgYSBicm93c2VyIE1vdXNlRXZlbnQgd2l0aCB0aGUgc3BlY2lmaWVkIG9wdGlvbnMuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNb3VzZUV2ZW50KHR5cGU6IHN0cmluZywgeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCwgYnV0dG9uOiBudW1iZXIgPSAwKTogTW91c2VFdmVudCB7XHJcbiAgY29uc3QgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnTW91c2VFdmVudCcpO1xyXG5cclxuICBldmVudC5pbml0TW91c2VFdmVudChcclxuICAgIHR5cGUsXHJcbiAgICB0cnVlIC8qIGNhbkJ1YmJsZSAqLyxcclxuICAgIGZhbHNlIC8qIGNhbmNlbGFibGUgKi8sXHJcbiAgICB3aW5kb3cgLyogdmlldyAqLyxcclxuICAgIDAgLyogZGV0YWlsICovLFxyXG4gICAgeCAvKiBzY3JlZW5YICovLFxyXG4gICAgeSAvKiBzY3JlZW5ZICovLFxyXG4gICAgeCAvKiBjbGllbnRYICovLFxyXG4gICAgeSAvKiBjbGllbnRZICovLFxyXG4gICAgZmFsc2UgLyogY3RybEtleSAqLyxcclxuICAgIGZhbHNlIC8qIGFsdEtleSAqLyxcclxuICAgIGZhbHNlIC8qIHNoaWZ0S2V5ICovLFxyXG4gICAgZmFsc2UgLyogbWV0YUtleSAqLyxcclxuICAgIGJ1dHRvbiAvKiBidXR0b24gKi8sXHJcbiAgICBudWxsIC8qIHJlbGF0ZWRUYXJnZXQgKi9cclxuICApO1xyXG5cclxuICAvLyBgaW5pdE1vdXNlRXZlbnRgIGRvZXNuJ3QgYWxsb3cgdXMgdG8gcGFzcyB0aGUgYGJ1dHRvbnNgIGFuZFxyXG4gIC8vIGRlZmF1bHRzIGl0IHRvIDAgd2hpY2ggbG9va3MgbGlrZSBhIGZha2UgZXZlbnQuXHJcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV2ZW50LCAnYnV0dG9ucycsIHsgZ2V0OiAoKSA9PiAxIH0pO1xyXG5cclxuICByZXR1cm4gZXZlbnQ7XHJcbn1cclxuXHJcbi8qKiBDcmVhdGVzIGEgYnJvd3NlciBUb3VjaEV2ZW50IHdpdGggdGhlIHNwZWNpZmllZCBwb2ludGVyIGNvb3JkaW5hdGVzLiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVG91Y2hFdmVudCh0eXBlOiBzdHJpbmcsIHBhZ2VYOiBudW1iZXIgPSAwLCBwYWdlWTogbnVtYmVyID0gMCk6IFVJRXZlbnQge1xyXG4gIC8vIEluIGZhdm9yIG9mIGNyZWF0aW5nIGV2ZW50cyB0aGF0IHdvcmsgZm9yIG1vc3Qgb2YgdGhlIGJyb3dzZXJzLCB0aGUgZXZlbnQgaXMgY3JlYXRlZFxyXG4gIC8vIGFzIGEgYmFzaWMgVUkgRXZlbnQuIFRoZSBuZWNlc3NhcnkgZGV0YWlscyBmb3IgdGhlIGV2ZW50IHdpbGwgYmUgc2V0IG1hbnVhbGx5LlxyXG4gIGNvbnN0IGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ1VJRXZlbnQnKTtcclxuICBjb25zdCB0b3VjaERldGFpbHMgPSB7IHBhZ2VYLCBwYWdlWSwgY2xpZW50WDogcGFnZVgsIGNsaWVudFk6IHBhZ2VZIH07XHJcbiAgZXZlbnQuaW5pdFVJRXZlbnQodHlwZSwgdHJ1ZSwgdHJ1ZSwgd2luZG93LCAwKTtcclxuXHJcbiAgLy8gTW9zdCBvZiB0aGUgYnJvd3NlcnMgZG9uJ3QgaGF2ZSBhIFwiaW5pdFRvdWNoRXZlbnRcIiBtZXRob2QgdGhhdCBjYW4gYmUgdXNlZCB0byBkZWZpbmVcclxuICAvLyB0aGUgdG91Y2ggZGV0YWlscy5cclxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhldmVudCwge1xyXG4gICAgdG91Y2hlczogeyB2YWx1ZTogW3RvdWNoRGV0YWlsc10gfSxcclxuICAgIHRhcmdldFRvdWNoZXM6IHsgdmFsdWU6IFt0b3VjaERldGFpbHNdIH0sXHJcbiAgICBjaGFuZ2VkVG91Y2hlczogeyB2YWx1ZTogW3RvdWNoRGV0YWlsc10gfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gZXZlbnQ7XHJcbn1cclxuXHJcbi8qKiBEaXNwYXRjaGVzIGEga2V5ZG93biBldmVudCBmcm9tIGFuIGVsZW1lbnQuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVLZXlib2FyZEV2ZW50KHR5cGU6IHN0cmluZywga2V5Q29kZTogbnVtYmVyLCB0YXJnZXQ/OiBFbGVtZW50LCBrZXk/OiBzdHJpbmcpOiBLZXlib2FyZEV2ZW50IHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgY29uc3QgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnS2V5Ym9hcmRFdmVudCcpIGFzIGFueTtcclxuICBjb25zdCBvcmlnaW5hbFByZXZlbnREZWZhdWx0ID0gZXZlbnQucHJldmVudERlZmF1bHQ7XHJcblxyXG4gIC8vIEZpcmVmb3ggZG9lcyBub3Qgc3VwcG9ydCBgaW5pdEtleWJvYXJkRXZlbnRgLCBidXQgc3VwcG9ydHMgYGluaXRLZXlFdmVudGAuXHJcbiAgaWYgKGV2ZW50LmluaXRLZXlFdmVudCkge1xyXG4gICAgZXZlbnQuaW5pdEtleUV2ZW50KHR5cGUsIHRydWUsIHRydWUsIHdpbmRvdywgMCwgMCwgMCwgMCwgMCwga2V5Q29kZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGV2ZW50LmluaXRLZXlib2FyZEV2ZW50KHR5cGUsIHRydWUsIHRydWUsIHdpbmRvdywgMCwga2V5LCAwLCAnJywgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgLy8gV2Via2l0IEJyb3dzZXJzIGRvbid0IHNldCB0aGUga2V5Q29kZSB3aGVuIGNhbGxpbmcgdGhlIGluaXQgZnVuY3Rpb24uXHJcbiAgLy8gU2VlIHJlbGF0ZWQgYnVnIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNjczNVxyXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGV2ZW50LCB7XHJcbiAgICBrZXlDb2RlOiB7IGdldDogKCkgPT4ga2V5Q29kZSB9LFxyXG4gICAga2V5OiB7IGdldDogKCkgPT4ga2V5IH0sXHJcbiAgICB0YXJnZXQ6IHsgZ2V0OiAoKSA9PiB0YXJnZXQgfVxyXG4gIH0pO1xyXG5cclxuICAvLyBJRSB3b24ndCBzZXQgYGRlZmF1bHRQcmV2ZW50ZWRgIG9uIHN5bnRoZXRpYyBldmVudHMgc28gd2UgbmVlZCB0byBkbyBpdCBtYW51YWxseS5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHlwZWRlZlxyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXZlbnQsICdkZWZhdWx0UHJldmVudGVkJywgeyBnZXQ6ICgpID0+IHRydWUgfSk7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW52YWxpZC10aGlzXHJcbiAgICByZXR1cm4gb3JpZ2luYWxQcmV2ZW50RGVmYXVsdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiBldmVudDtcclxufVxyXG5cclxuLyoqIENyZWF0ZXMgYSBmYWtlIGV2ZW50IG9iamVjdCB3aXRoIGFueSBkZXNpcmVkIGV2ZW50IHR5cGUuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGYWtlRXZlbnQodHlwZTogc3RyaW5nLCBjYW5CdWJibGU6IGJvb2xlYW4gPSB0cnVlLCBjYW5jZWxhYmxlOiBib29sZWFuID0gdHJ1ZSk6IEV2ZW50IHtcclxuICBjb25zdCBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xyXG4gIGV2ZW50LmluaXRFdmVudCh0eXBlLCBjYW5CdWJibGUsIGNhbmNlbGFibGUpO1xyXG4gIHJldHVybiBldmVudDtcclxufVxyXG4iXX0=