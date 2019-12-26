/**
 * @fileoverview added by tsickle
 * Generated from: testing/type-in-element.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS1pbi1lbGVtZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsidGVzdGluZy90eXBlLWluLWVsZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7Ozs7O0FBUXRELE1BQU0sVUFBVSxhQUFhLENBQUMsS0FBYSxFQUFFLE9BQStDO0lBQzFGLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNoQixPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN0QixpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDdEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgZGlzcGF0Y2hGYWtlRXZlbnQgfSBmcm9tICcuL2Rpc3BhdGNoLWV2ZW50cyc7XHJcblxyXG4vKipcclxuICogRm9jdXNlcyBhbiBpbnB1dCwgc2V0cyBpdHMgdmFsdWUgYW5kIGRpc3BhdGNoZXNcclxuICogdGhlIGBpbnB1dGAgZXZlbnQsIHNpbXVsYXRpbmcgdGhlIHVzZXIgdHlwaW5nLlxyXG4gKiBAcGFyYW0gdmFsdWUgVmFsdWUgdG8gYmUgc2V0IG9uIHRoZSBpbnB1dC5cclxuICogQHBhcmFtIGVsZW1lbnQgRWxlbWVudCBvbnRvIHdoaWNoIHRvIHNldCB0aGUgdmFsdWUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHlwZUluRWxlbWVudCh2YWx1ZTogc3RyaW5nLCBlbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFRleHRBcmVhRWxlbWVudCk6IHZvaWQge1xyXG4gIGVsZW1lbnQuZm9jdXMoKTtcclxuICBlbGVtZW50LnZhbHVlID0gdmFsdWU7XHJcbiAgZGlzcGF0Y2hGYWtlRXZlbnQoZWxlbWVudCwgJ2lucHV0Jyk7XHJcbn1cclxuIl19