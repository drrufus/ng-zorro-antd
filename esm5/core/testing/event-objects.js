/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Creates a browser MouseEvent with the specified options. */
export function createMouseEvent(type, x, y, button) {
    if (x === void 0) { x = 0; }
    if (y === void 0) { y = 0; }
    if (button === void 0) { button = 0; }
    var event = document.createEvent('MouseEvent');
    event.initMouseEvent(type, true /* canBubble */, false /* cancelable */, window /* view */, 0 /* detail */, x /* screenX */, y /* screenY */, x /* clientX */, y /* clientY */, false /* ctrlKey */, false /* altKey */, false /* shiftKey */, false /* metaKey */, button /* button */, null /* relatedTarget */);
    // `initMouseEvent` doesn't allow us to pass the `buttons` and
    // defaults it to 0 which looks like a fake event.
    Object.defineProperty(event, 'buttons', { get: function () { return 1; } });
    return event;
}
/** Creates a browser TouchEvent with the specified pointer coordinates. */
export function createTouchEvent(type, pageX, pageY) {
    if (pageX === void 0) { pageX = 0; }
    if (pageY === void 0) { pageY = 0; }
    // In favor of creating events that work for most of the browsers, the event is created
    // as a basic UI Event. The necessary details for the event will be set manually.
    var event = new UIEvent(type, { detail: 0, view: window });
    var touchDetails = { pageX: pageX, pageY: pageY, clientX: pageX, clientY: pageY };
    // Most of the browsers don't have a "initTouchEvent" method that can be used to define
    // the touch details.
    Object.defineProperties(event, {
        touches: { value: [touchDetails] },
        targetTouches: { value: [touchDetails] },
        changedTouches: { value: [touchDetails] }
    });
    return event;
}
/** Dispatches a keydown event from an element. */
export function createKeyboardEvent(type, keyCode, target, key) {
    // tslint:disable-next-line:no-any
    var event = document.createEvent('KeyboardEvent');
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
        keyCode: { get: function () { return keyCode; } },
        key: { get: function () { return key; } },
        target: { get: function () { return target; } }
    });
    // IE won't set `defaultPrevented` on synthetic events so we need to do it manually.
    // tslint:disable-next-line:typedef
    event.preventDefault = function () {
        Object.defineProperty(event, 'defaultPrevented', { get: function () { return true; }, configurable: true });
        // tslint:disable-next-line:no-invalid-this
        return originalPreventDefault.apply(this, arguments);
    };
    return event;
}
/** Creates a fake event object with any desired event type. */
export function createFakeEvent(type, canBubble, cancelable) {
    if (canBubble === void 0) { canBubble = true; }
    if (cancelable === void 0) { cancelable = true; }
    var event = document.createEvent('Event');
    event.initEvent(type, canBubble, cancelable);
    return event;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtb2JqZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbInRlc3RpbmcvZXZlbnQtb2JqZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCwrREFBK0Q7QUFDL0QsTUFBTSxVQUFVLGdCQUFnQixDQUFDLElBQVksRUFBRSxDQUFhLEVBQUUsQ0FBYSxFQUFFLE1BQWtCO0lBQWhELGtCQUFBLEVBQUEsS0FBYTtJQUFFLGtCQUFBLEVBQUEsS0FBYTtJQUFFLHVCQUFBLEVBQUEsVUFBa0I7SUFDN0YsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUVqRCxLQUFLLENBQUMsY0FBYyxDQUNsQixJQUFJLEVBQ0osSUFBSSxDQUFDLGVBQWUsRUFDcEIsS0FBSyxDQUFDLGdCQUFnQixFQUN0QixNQUFNLENBQUMsVUFBVSxFQUNqQixDQUFDLENBQUMsWUFBWSxFQUNkLENBQUMsQ0FBQyxhQUFhLEVBQ2YsQ0FBQyxDQUFDLGFBQWEsRUFDZixDQUFDLENBQUMsYUFBYSxFQUNmLENBQUMsQ0FBQyxhQUFhLEVBQ2YsS0FBSyxDQUFDLGFBQWEsRUFDbkIsS0FBSyxDQUFDLFlBQVksRUFDbEIsS0FBSyxDQUFDLGNBQWMsRUFDcEIsS0FBSyxDQUFDLGFBQWEsRUFDbkIsTUFBTSxDQUFDLFlBQVksRUFDbkIsSUFBSSxDQUFDLG1CQUFtQixDQUN6QixDQUFDO0lBRUYsOERBQThEO0lBQzlELGtEQUFrRDtJQUNsRCxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsRUFBRSxHQUFHLEVBQUUsY0FBTSxPQUFBLENBQUMsRUFBRCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRTFELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQUVELDJFQUEyRTtBQUMzRSxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsSUFBWSxFQUFFLEtBQWlCLEVBQUUsS0FBaUI7SUFBcEMsc0JBQUEsRUFBQSxTQUFpQjtJQUFFLHNCQUFBLEVBQUEsU0FBaUI7SUFDakYsdUZBQXVGO0lBQ3ZGLGlGQUFpRjtJQUNqRixJQUFNLEtBQUssR0FBRyxJQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQzdELElBQU0sWUFBWSxHQUFHLEVBQUUsS0FBSyxPQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUM7SUFFdEUsdUZBQXVGO0lBQ3ZGLHFCQUFxQjtJQUNyQixNQUFNLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFO1FBQzdCLE9BQU8sRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFFO1FBQ2xDLGFBQWEsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFFO1FBQ3hDLGNBQWMsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFFO0tBQzFDLENBQUMsQ0FBQztJQUVILE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQUVELGtEQUFrRDtBQUNsRCxNQUFNLFVBQVUsbUJBQW1CLENBQUMsSUFBWSxFQUFFLE9BQWUsRUFBRSxNQUFnQixFQUFFLEdBQVk7SUFDL0Ysa0NBQWtDO0lBQ2xDLElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFRLENBQUM7SUFDM0QsSUFBTSxzQkFBc0IsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDO0lBRXBELDZFQUE2RTtJQUM3RSxJQUFJLEtBQUssQ0FBQyxZQUFZLEVBQUU7UUFDdEIsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztLQUN0RTtTQUFNO1FBQ0wsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDekU7SUFFRCx3RUFBd0U7SUFDeEUsZ0VBQWdFO0lBQ2hFLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUU7UUFDN0IsT0FBTyxFQUFFLEVBQUUsR0FBRyxFQUFFLGNBQU0sT0FBQSxPQUFPLEVBQVAsQ0FBTyxFQUFFO1FBQy9CLEdBQUcsRUFBRSxFQUFFLEdBQUcsRUFBRSxjQUFNLE9BQUEsR0FBRyxFQUFILENBQUcsRUFBRTtRQUN2QixNQUFNLEVBQUUsRUFBRSxHQUFHLEVBQUUsY0FBTSxPQUFBLE1BQU0sRUFBTixDQUFNLEVBQUU7S0FDOUIsQ0FBQyxDQUFDO0lBRUgsb0ZBQW9GO0lBQ3BGLG1DQUFtQztJQUNuQyxLQUFLLENBQUMsY0FBYyxHQUFHO1FBQ3JCLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLGtCQUFrQixFQUFFLEVBQUUsR0FBRyxFQUFFLGNBQU0sT0FBQSxJQUFJLEVBQUosQ0FBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzFGLDJDQUEyQztRQUMzQyxPQUFPLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDdkQsQ0FBQyxDQUFDO0lBRUYsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDO0FBRUQsK0RBQStEO0FBQy9ELE1BQU0sVUFBVSxlQUFlLENBQUMsSUFBWSxFQUFFLFNBQXlCLEVBQUUsVUFBMEI7SUFBckQsMEJBQUEsRUFBQSxnQkFBeUI7SUFBRSwyQkFBQSxFQUFBLGlCQUEwQjtJQUNqRyxJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUM3QyxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxyXG4gKi9cclxuXHJcbi8qKiBDcmVhdGVzIGEgYnJvd3NlciBNb3VzZUV2ZW50IHdpdGggdGhlIHNwZWNpZmllZCBvcHRpb25zLiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTW91c2VFdmVudCh0eXBlOiBzdHJpbmcsIHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDAsIGJ1dHRvbjogbnVtYmVyID0gMCk6IE1vdXNlRXZlbnQge1xyXG4gIGNvbnN0IGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ01vdXNlRXZlbnQnKTtcclxuXHJcbiAgZXZlbnQuaW5pdE1vdXNlRXZlbnQoXHJcbiAgICB0eXBlLFxyXG4gICAgdHJ1ZSAvKiBjYW5CdWJibGUgKi8sXHJcbiAgICBmYWxzZSAvKiBjYW5jZWxhYmxlICovLFxyXG4gICAgd2luZG93IC8qIHZpZXcgKi8sXHJcbiAgICAwIC8qIGRldGFpbCAqLyxcclxuICAgIHggLyogc2NyZWVuWCAqLyxcclxuICAgIHkgLyogc2NyZWVuWSAqLyxcclxuICAgIHggLyogY2xpZW50WCAqLyxcclxuICAgIHkgLyogY2xpZW50WSAqLyxcclxuICAgIGZhbHNlIC8qIGN0cmxLZXkgKi8sXHJcbiAgICBmYWxzZSAvKiBhbHRLZXkgKi8sXHJcbiAgICBmYWxzZSAvKiBzaGlmdEtleSAqLyxcclxuICAgIGZhbHNlIC8qIG1ldGFLZXkgKi8sXHJcbiAgICBidXR0b24gLyogYnV0dG9uICovLFxyXG4gICAgbnVsbCAvKiByZWxhdGVkVGFyZ2V0ICovXHJcbiAgKTtcclxuXHJcbiAgLy8gYGluaXRNb3VzZUV2ZW50YCBkb2Vzbid0IGFsbG93IHVzIHRvIHBhc3MgdGhlIGBidXR0b25zYCBhbmRcclxuICAvLyBkZWZhdWx0cyBpdCB0byAwIHdoaWNoIGxvb2tzIGxpa2UgYSBmYWtlIGV2ZW50LlxyXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShldmVudCwgJ2J1dHRvbnMnLCB7IGdldDogKCkgPT4gMSB9KTtcclxuXHJcbiAgcmV0dXJuIGV2ZW50O1xyXG59XHJcblxyXG4vKiogQ3JlYXRlcyBhIGJyb3dzZXIgVG91Y2hFdmVudCB3aXRoIHRoZSBzcGVjaWZpZWQgcG9pbnRlciBjb29yZGluYXRlcy4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRvdWNoRXZlbnQodHlwZTogc3RyaW5nLCBwYWdlWDogbnVtYmVyID0gMCwgcGFnZVk6IG51bWJlciA9IDApOiBVSUV2ZW50IHtcclxuICAvLyBJbiBmYXZvciBvZiBjcmVhdGluZyBldmVudHMgdGhhdCB3b3JrIGZvciBtb3N0IG9mIHRoZSBicm93c2VycywgdGhlIGV2ZW50IGlzIGNyZWF0ZWRcclxuICAvLyBhcyBhIGJhc2ljIFVJIEV2ZW50LiBUaGUgbmVjZXNzYXJ5IGRldGFpbHMgZm9yIHRoZSBldmVudCB3aWxsIGJlIHNldCBtYW51YWxseS5cclxuICBjb25zdCBldmVudCA9IG5ldyBVSUV2ZW50KHR5cGUsIHsgZGV0YWlsOiAwLCB2aWV3OiB3aW5kb3cgfSk7XHJcbiAgY29uc3QgdG91Y2hEZXRhaWxzID0geyBwYWdlWCwgcGFnZVksIGNsaWVudFg6IHBhZ2VYLCBjbGllbnRZOiBwYWdlWSB9O1xyXG5cclxuICAvLyBNb3N0IG9mIHRoZSBicm93c2VycyBkb24ndCBoYXZlIGEgXCJpbml0VG91Y2hFdmVudFwiIG1ldGhvZCB0aGF0IGNhbiBiZSB1c2VkIHRvIGRlZmluZVxyXG4gIC8vIHRoZSB0b3VjaCBkZXRhaWxzLlxyXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGV2ZW50LCB7XHJcbiAgICB0b3VjaGVzOiB7IHZhbHVlOiBbdG91Y2hEZXRhaWxzXSB9LFxyXG4gICAgdGFyZ2V0VG91Y2hlczogeyB2YWx1ZTogW3RvdWNoRGV0YWlsc10gfSxcclxuICAgIGNoYW5nZWRUb3VjaGVzOiB7IHZhbHVlOiBbdG91Y2hEZXRhaWxzXSB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBldmVudDtcclxufVxyXG5cclxuLyoqIERpc3BhdGNoZXMgYSBrZXlkb3duIGV2ZW50IGZyb20gYW4gZWxlbWVudC4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUtleWJvYXJkRXZlbnQodHlwZTogc3RyaW5nLCBrZXlDb2RlOiBudW1iZXIsIHRhcmdldD86IEVsZW1lbnQsIGtleT86IHN0cmluZyk6IEtleWJvYXJkRXZlbnQge1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBjb25zdCBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdLZXlib2FyZEV2ZW50JykgYXMgYW55O1xyXG4gIGNvbnN0IG9yaWdpbmFsUHJldmVudERlZmF1bHQgPSBldmVudC5wcmV2ZW50RGVmYXVsdDtcclxuXHJcbiAgLy8gRmlyZWZveCBkb2VzIG5vdCBzdXBwb3J0IGBpbml0S2V5Ym9hcmRFdmVudGAsIGJ1dCBzdXBwb3J0cyBgaW5pdEtleUV2ZW50YC5cclxuICBpZiAoZXZlbnQuaW5pdEtleUV2ZW50KSB7XHJcbiAgICBldmVudC5pbml0S2V5RXZlbnQodHlwZSwgdHJ1ZSwgdHJ1ZSwgd2luZG93LCAwLCAwLCAwLCAwLCAwLCBrZXlDb2RlKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZXZlbnQuaW5pdEtleWJvYXJkRXZlbnQodHlwZSwgdHJ1ZSwgdHJ1ZSwgd2luZG93LCAwLCBrZXksIDAsICcnLCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICAvLyBXZWJraXQgQnJvd3NlcnMgZG9uJ3Qgc2V0IHRoZSBrZXlDb2RlIHdoZW4gY2FsbGluZyB0aGUgaW5pdCBmdW5jdGlvbi5cclxuICAvLyBTZWUgcmVsYXRlZCBidWcgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE2NzM1XHJcbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZXZlbnQsIHtcclxuICAgIGtleUNvZGU6IHsgZ2V0OiAoKSA9PiBrZXlDb2RlIH0sXHJcbiAgICBrZXk6IHsgZ2V0OiAoKSA9PiBrZXkgfSxcclxuICAgIHRhcmdldDogeyBnZXQ6ICgpID0+IHRhcmdldCB9XHJcbiAgfSk7XHJcblxyXG4gIC8vIElFIHdvbid0IHNldCBgZGVmYXVsdFByZXZlbnRlZGAgb24gc3ludGhldGljIGV2ZW50cyBzbyB3ZSBuZWVkIHRvIGRvIGl0IG1hbnVhbGx5LlxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp0eXBlZGVmXHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQgPSBmdW5jdGlvbigpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShldmVudCwgJ2RlZmF1bHRQcmV2ZW50ZWQnLCB7IGdldDogKCkgPT4gdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0pO1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWludmFsaWQtdGhpc1xyXG4gICAgcmV0dXJuIG9yaWdpbmFsUHJldmVudERlZmF1bHQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gZXZlbnQ7XHJcbn1cclxuXHJcbi8qKiBDcmVhdGVzIGEgZmFrZSBldmVudCBvYmplY3Qgd2l0aCBhbnkgZGVzaXJlZCBldmVudCB0eXBlLiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRmFrZUV2ZW50KHR5cGU6IHN0cmluZywgY2FuQnViYmxlOiBib29sZWFuID0gdHJ1ZSwgY2FuY2VsYWJsZTogYm9vbGVhbiA9IHRydWUpOiBFdmVudCB7XHJcbiAgY29uc3QgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcclxuICBldmVudC5pbml0RXZlbnQodHlwZSwgY2FuQnViYmxlLCBjYW5jZWxhYmxlKTtcclxuICByZXR1cm4gZXZlbnQ7XHJcbn1cclxuIl19