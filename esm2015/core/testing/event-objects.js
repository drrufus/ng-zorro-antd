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
export function createMouseEvent(type, x = 0, y = 0, button = 0) {
    /** @type {?} */
    const event = document.createEvent('MouseEvent');
    event.initMouseEvent(type, true /* canBubble */, false /* cancelable */, window /* view */, 0 /* detail */, x /* screenX */, y /* screenY */, x /* clientX */, y /* clientY */, false /* ctrlKey */, false /* altKey */, false /* shiftKey */, false /* metaKey */, button /* button */, null /* relatedTarget */);
    // `initMouseEvent` doesn't allow us to pass the `buttons` and
    // defaults it to 0 which looks like a fake event.
    Object.defineProperty(event, 'buttons', { get: (/**
         * @return {?}
         */
        () => 1) });
    return event;
}
/**
 * Creates a browser TouchEvent with the specified pointer coordinates.
 * @param {?} type
 * @param {?=} pageX
 * @param {?=} pageY
 * @return {?}
 */
export function createTouchEvent(type, pageX = 0, pageY = 0) {
    // In favor of creating events that work for most of the browsers, the event is created
    // as a basic UI Event. The necessary details for the event will be set manually.
    /** @type {?} */
    const event = document.createEvent('UIEvent');
    /** @type {?} */
    const touchDetails = { pageX, pageY, clientX: pageX, clientY: pageY };
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
    const event = (/** @type {?} */ (document.createEvent('KeyboardEvent')));
    /** @type {?} */
    const originalPreventDefault = event.preventDefault;
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
            () => keyCode) },
        key: { get: (/**
             * @return {?}
             */
            () => key) },
        target: { get: (/**
             * @return {?}
             */
            () => target) }
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
            () => true) });
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
export function createFakeEvent(type, canBubble = true, cancelable = true) {
    /** @type {?} */
    const event = document.createEvent('Event');
    event.initEvent(type, canBubble, cancelable);
    return event;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtb2JqZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbInRlc3RpbmcvZXZlbnQtb2JqZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNBLE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxJQUFZLEVBQUUsSUFBWSxDQUFDLEVBQUUsSUFBWSxDQUFDLEVBQUUsU0FBaUIsQ0FBQzs7VUFDdkYsS0FBSyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDO0lBRWhELEtBQUssQ0FBQyxjQUFjLENBQ2xCLElBQUksRUFDSixJQUFJLENBQUMsZUFBZSxFQUNwQixLQUFLLENBQUMsZ0JBQWdCLEVBQ3RCLE1BQU0sQ0FBQyxVQUFVLEVBQ2pCLENBQUMsQ0FBQyxZQUFZLEVBQ2QsQ0FBQyxDQUFDLGFBQWEsRUFDZixDQUFDLENBQUMsYUFBYSxFQUNmLENBQUMsQ0FBQyxhQUFhLEVBQ2YsQ0FBQyxDQUFDLGFBQWEsRUFDZixLQUFLLENBQUMsYUFBYSxFQUNuQixLQUFLLENBQUMsWUFBWSxFQUNsQixLQUFLLENBQUMsY0FBYyxFQUNwQixLQUFLLENBQUMsYUFBYSxFQUNuQixNQUFNLENBQUMsWUFBWSxFQUNuQixJQUFJLENBQUMsbUJBQW1CLENBQ3pCLENBQUM7SUFFRiw4REFBOEQ7SUFDOUQsa0RBQWtEO0lBQ2xELE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxFQUFFLEdBQUc7OztRQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQSxFQUFFLENBQUMsQ0FBQztJQUUxRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7Ozs7Ozs7O0FBR0QsTUFBTSxVQUFVLGdCQUFnQixDQUFDLElBQVksRUFBRSxRQUFnQixDQUFDLEVBQUUsUUFBZ0IsQ0FBQzs7OztVQUczRSxLQUFLLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUM7O1VBQ3ZDLFlBQVksR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFO0lBQ3JFLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRS9DLHVGQUF1RjtJQUN2RixxQkFBcUI7SUFDckIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRTtRQUM3QixPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxZQUFZLENBQUMsRUFBRTtRQUNsQyxhQUFhLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxZQUFZLENBQUMsRUFBRTtRQUN4QyxjQUFjLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxZQUFZLENBQUMsRUFBRTtLQUMxQyxDQUFDLENBQUM7SUFFSCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7Ozs7Ozs7OztBQUdELE1BQU0sVUFBVSxtQkFBbUIsQ0FBQyxJQUFZLEVBQUUsT0FBZSxFQUFFLE1BQWdCLEVBQUUsR0FBWTs7O1VBRXpGLEtBQUssR0FBRyxtQkFBQSxRQUFRLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxFQUFPOztVQUNwRCxzQkFBc0IsR0FBRyxLQUFLLENBQUMsY0FBYztJQUVuRCw2RUFBNkU7SUFDN0UsSUFBSSxLQUFLLENBQUMsWUFBWSxFQUFFO1FBQ3RCLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDdEU7U0FBTTtRQUNMLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQ3pFO0lBRUQsd0VBQXdFO0lBQ3hFLGdFQUFnRTtJQUNoRSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFO1FBQzdCLE9BQU8sRUFBRSxFQUFFLEdBQUc7OztZQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQSxFQUFFO1FBQy9CLEdBQUcsRUFBRSxFQUFFLEdBQUc7OztZQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQSxFQUFFO1FBQ3ZCLE1BQU0sRUFBRSxFQUFFLEdBQUc7OztZQUFFLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQSxFQUFFO0tBQzlCLENBQUMsQ0FBQztJQUVILG9GQUFvRjtJQUNwRixtQ0FBbUM7SUFDbkMsS0FBSyxDQUFDLGNBQWM7OztJQUFHO1FBQ3JCLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLGtCQUFrQixFQUFFLEVBQUUsR0FBRzs7O1lBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFBLEVBQUUsQ0FBQyxDQUFDO1FBQ3RFLDJDQUEyQztRQUMzQyxPQUFPLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDdkQsQ0FBQyxDQUFBLENBQUM7SUFFRixPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7Ozs7Ozs7O0FBR0QsTUFBTSxVQUFVLGVBQWUsQ0FBQyxJQUFZLEVBQUUsWUFBcUIsSUFBSSxFQUFFLGFBQXNCLElBQUk7O1VBQzNGLEtBQUssR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQztJQUMzQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDN0MsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcclxuICovXHJcblxyXG4vKiogQ3JlYXRlcyBhIGJyb3dzZXIgTW91c2VFdmVudCB3aXRoIHRoZSBzcGVjaWZpZWQgb3B0aW9ucy4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1vdXNlRXZlbnQodHlwZTogc3RyaW5nLCB4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwLCBidXR0b246IG51bWJlciA9IDApOiBNb3VzZUV2ZW50IHtcclxuICBjb25zdCBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdNb3VzZUV2ZW50Jyk7XHJcblxyXG4gIGV2ZW50LmluaXRNb3VzZUV2ZW50KFxyXG4gICAgdHlwZSxcclxuICAgIHRydWUgLyogY2FuQnViYmxlICovLFxyXG4gICAgZmFsc2UgLyogY2FuY2VsYWJsZSAqLyxcclxuICAgIHdpbmRvdyAvKiB2aWV3ICovLFxyXG4gICAgMCAvKiBkZXRhaWwgKi8sXHJcbiAgICB4IC8qIHNjcmVlblggKi8sXHJcbiAgICB5IC8qIHNjcmVlblkgKi8sXHJcbiAgICB4IC8qIGNsaWVudFggKi8sXHJcbiAgICB5IC8qIGNsaWVudFkgKi8sXHJcbiAgICBmYWxzZSAvKiBjdHJsS2V5ICovLFxyXG4gICAgZmFsc2UgLyogYWx0S2V5ICovLFxyXG4gICAgZmFsc2UgLyogc2hpZnRLZXkgKi8sXHJcbiAgICBmYWxzZSAvKiBtZXRhS2V5ICovLFxyXG4gICAgYnV0dG9uIC8qIGJ1dHRvbiAqLyxcclxuICAgIG51bGwgLyogcmVsYXRlZFRhcmdldCAqL1xyXG4gICk7XHJcblxyXG4gIC8vIGBpbml0TW91c2VFdmVudGAgZG9lc24ndCBhbGxvdyB1cyB0byBwYXNzIHRoZSBgYnV0dG9uc2AgYW5kXHJcbiAgLy8gZGVmYXVsdHMgaXQgdG8gMCB3aGljaCBsb29rcyBsaWtlIGEgZmFrZSBldmVudC5cclxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXZlbnQsICdidXR0b25zJywgeyBnZXQ6ICgpID0+IDEgfSk7XHJcblxyXG4gIHJldHVybiBldmVudDtcclxufVxyXG5cclxuLyoqIENyZWF0ZXMgYSBicm93c2VyIFRvdWNoRXZlbnQgd2l0aCB0aGUgc3BlY2lmaWVkIHBvaW50ZXIgY29vcmRpbmF0ZXMuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb3VjaEV2ZW50KHR5cGU6IHN0cmluZywgcGFnZVg6IG51bWJlciA9IDAsIHBhZ2VZOiBudW1iZXIgPSAwKTogVUlFdmVudCB7XHJcbiAgLy8gSW4gZmF2b3Igb2YgY3JlYXRpbmcgZXZlbnRzIHRoYXQgd29yayBmb3IgbW9zdCBvZiB0aGUgYnJvd3NlcnMsIHRoZSBldmVudCBpcyBjcmVhdGVkXHJcbiAgLy8gYXMgYSBiYXNpYyBVSSBFdmVudC4gVGhlIG5lY2Vzc2FyeSBkZXRhaWxzIGZvciB0aGUgZXZlbnQgd2lsbCBiZSBzZXQgbWFudWFsbHkuXHJcbiAgY29uc3QgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnVUlFdmVudCcpO1xyXG4gIGNvbnN0IHRvdWNoRGV0YWlscyA9IHsgcGFnZVgsIHBhZ2VZLCBjbGllbnRYOiBwYWdlWCwgY2xpZW50WTogcGFnZVkgfTtcclxuICBldmVudC5pbml0VUlFdmVudCh0eXBlLCB0cnVlLCB0cnVlLCB3aW5kb3csIDApO1xyXG5cclxuICAvLyBNb3N0IG9mIHRoZSBicm93c2VycyBkb24ndCBoYXZlIGEgXCJpbml0VG91Y2hFdmVudFwiIG1ldGhvZCB0aGF0IGNhbiBiZSB1c2VkIHRvIGRlZmluZVxyXG4gIC8vIHRoZSB0b3VjaCBkZXRhaWxzLlxyXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGV2ZW50LCB7XHJcbiAgICB0b3VjaGVzOiB7IHZhbHVlOiBbdG91Y2hEZXRhaWxzXSB9LFxyXG4gICAgdGFyZ2V0VG91Y2hlczogeyB2YWx1ZTogW3RvdWNoRGV0YWlsc10gfSxcclxuICAgIGNoYW5nZWRUb3VjaGVzOiB7IHZhbHVlOiBbdG91Y2hEZXRhaWxzXSB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBldmVudDtcclxufVxyXG5cclxuLyoqIERpc3BhdGNoZXMgYSBrZXlkb3duIGV2ZW50IGZyb20gYW4gZWxlbWVudC4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUtleWJvYXJkRXZlbnQodHlwZTogc3RyaW5nLCBrZXlDb2RlOiBudW1iZXIsIHRhcmdldD86IEVsZW1lbnQsIGtleT86IHN0cmluZyk6IEtleWJvYXJkRXZlbnQge1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBjb25zdCBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdLZXlib2FyZEV2ZW50JykgYXMgYW55O1xyXG4gIGNvbnN0IG9yaWdpbmFsUHJldmVudERlZmF1bHQgPSBldmVudC5wcmV2ZW50RGVmYXVsdDtcclxuXHJcbiAgLy8gRmlyZWZveCBkb2VzIG5vdCBzdXBwb3J0IGBpbml0S2V5Ym9hcmRFdmVudGAsIGJ1dCBzdXBwb3J0cyBgaW5pdEtleUV2ZW50YC5cclxuICBpZiAoZXZlbnQuaW5pdEtleUV2ZW50KSB7XHJcbiAgICBldmVudC5pbml0S2V5RXZlbnQodHlwZSwgdHJ1ZSwgdHJ1ZSwgd2luZG93LCAwLCAwLCAwLCAwLCAwLCBrZXlDb2RlKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZXZlbnQuaW5pdEtleWJvYXJkRXZlbnQodHlwZSwgdHJ1ZSwgdHJ1ZSwgd2luZG93LCAwLCBrZXksIDAsICcnLCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICAvLyBXZWJraXQgQnJvd3NlcnMgZG9uJ3Qgc2V0IHRoZSBrZXlDb2RlIHdoZW4gY2FsbGluZyB0aGUgaW5pdCBmdW5jdGlvbi5cclxuICAvLyBTZWUgcmVsYXRlZCBidWcgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE2NzM1XHJcbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZXZlbnQsIHtcclxuICAgIGtleUNvZGU6IHsgZ2V0OiAoKSA9PiBrZXlDb2RlIH0sXHJcbiAgICBrZXk6IHsgZ2V0OiAoKSA9PiBrZXkgfSxcclxuICAgIHRhcmdldDogeyBnZXQ6ICgpID0+IHRhcmdldCB9XHJcbiAgfSk7XHJcblxyXG4gIC8vIElFIHdvbid0IHNldCBgZGVmYXVsdFByZXZlbnRlZGAgb24gc3ludGhldGljIGV2ZW50cyBzbyB3ZSBuZWVkIHRvIGRvIGl0IG1hbnVhbGx5LlxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp0eXBlZGVmXHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQgPSBmdW5jdGlvbigpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShldmVudCwgJ2RlZmF1bHRQcmV2ZW50ZWQnLCB7IGdldDogKCkgPT4gdHJ1ZSB9KTtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnZhbGlkLXRoaXNcclxuICAgIHJldHVybiBvcmlnaW5hbFByZXZlbnREZWZhdWx0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGV2ZW50O1xyXG59XHJcblxyXG4vKiogQ3JlYXRlcyBhIGZha2UgZXZlbnQgb2JqZWN0IHdpdGggYW55IGRlc2lyZWQgZXZlbnQgdHlwZS4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZha2VFdmVudCh0eXBlOiBzdHJpbmcsIGNhbkJ1YmJsZTogYm9vbGVhbiA9IHRydWUsIGNhbmNlbGFibGU6IGJvb2xlYW4gPSB0cnVlKTogRXZlbnQge1xyXG4gIGNvbnN0IGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XHJcbiAgZXZlbnQuaW5pdEV2ZW50KHR5cGUsIGNhbkJ1YmJsZSwgY2FuY2VsYWJsZSk7XHJcbiAgcmV0dXJuIGV2ZW50O1xyXG59XHJcbiJdfQ==