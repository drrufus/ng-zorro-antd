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
import { dispatchFakeEvent } from './dispatch-events';
/**
 * Focuses an input, sets its value and dispatches
 * the `input` event, simulating the user typing.
 * @param {?} value Value to be set on the input.
 * @param {?} element Element onto which to set the value.
 * @return {?}
 */
export function typeInElement(value, element) {
    element.focus();
    element.value = value;
    dispatchFakeEvent(element, 'input');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS1pbi1lbGVtZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsidGVzdGluZy90eXBlLWluLWVsZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7QUFRdEQsTUFBTSxVQUFVLGFBQWEsQ0FBQyxLQUFhLEVBQUUsT0FBK0M7SUFDMUYsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2hCLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN0QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcclxuICovXHJcblxyXG5pbXBvcnQgeyBkaXNwYXRjaEZha2VFdmVudCB9IGZyb20gJy4vZGlzcGF0Y2gtZXZlbnRzJztcclxuXHJcbi8qKlxyXG4gKiBGb2N1c2VzIGFuIGlucHV0LCBzZXRzIGl0cyB2YWx1ZSBhbmQgZGlzcGF0Y2hlc1xyXG4gKiB0aGUgYGlucHV0YCBldmVudCwgc2ltdWxhdGluZyB0aGUgdXNlciB0eXBpbmcuXHJcbiAqIEBwYXJhbSB2YWx1ZSBWYWx1ZSB0byBiZSBzZXQgb24gdGhlIGlucHV0LlxyXG4gKiBAcGFyYW0gZWxlbWVudCBFbGVtZW50IG9udG8gd2hpY2ggdG8gc2V0IHRoZSB2YWx1ZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0eXBlSW5FbGVtZW50KHZhbHVlOiBzdHJpbmcsIGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50KTogdm9pZCB7XHJcbiAgZWxlbWVudC5mb2N1cygpO1xyXG4gIGVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcclxuICBkaXNwYXRjaEZha2VFdmVudChlbGVtZW50LCAnaW5wdXQnKTtcclxufVxyXG4iXX0=