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
 * @record
 */
export function MarkObj() { }
if (false) {
    /** @type {?|undefined} */
    MarkObj.prototype.style;
    /** @type {?} */
    MarkObj.prototype.label;
}
var Marks = /** @class */ (function () {
    function Marks() {
    }
    return Marks;
}());
export { Marks };
/**
 * Processed steps that would be passed to sub components.
 * @record
 */
export function ExtendedMark() { }
if (false) {
    /** @type {?} */
    ExtendedMark.prototype.value;
    /** @type {?} */
    ExtendedMark.prototype.offset;
    /** @type {?} */
    ExtendedMark.prototype.config;
}
/**
 * Marks that would be rendered.
 * @record
 */
export function DisplayedMark() { }
if (false) {
    /** @type {?} */
    DisplayedMark.prototype.active;
    /** @type {?} */
    DisplayedMark.prototype.label;
    /** @type {?|undefined} */
    DisplayedMark.prototype.style;
}
/**
 * Steps that would be rendered.
 * @record
 */
export function DisplayedStep() { }
if (false) {
    /** @type {?} */
    DisplayedStep.prototype.active;
    /** @type {?|undefined} */
    DisplayedStep.prototype.style;
}
/**
 * @record
 */
export function SliderHandler() { }
if (false) {
    /** @type {?} */
    SliderHandler.prototype.offset;
    /** @type {?} */
    SliderHandler.prototype.value;
    /** @type {?} */
    SliderHandler.prototype.active;
}
/**
 * @param {?} value
 * @return {?}
 */
export function isValueARange(value) {
    if (value instanceof Array) {
        return value.length === 2;
    }
    else {
        return false;
    }
}
/**
 * @param {?} config
 * @return {?}
 */
export function isConfigAObject(config) {
    return config instanceof Object;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLWRlZmluaXRpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9zbGlkZXIvIiwic291cmNlcyI6WyJuei1zbGlkZXItZGVmaW5pdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFVQSw2QkFHQzs7O0lBRkMsd0JBQWU7O0lBQ2Ysd0JBQWM7O0FBS2hCO0lBQUE7SUFFQSxDQUFDO0lBQUQsWUFBQztBQUFELENBQUMsQUFGRCxJQUVDOzs7Ozs7QUFLRCxrQ0FJQzs7O0lBSEMsNkJBQWM7O0lBQ2QsOEJBQWU7O0lBQ2YsOEJBQWE7Ozs7OztBQU1mLG1DQUlDOzs7SUFIQywrQkFBZ0I7O0lBQ2hCLDhCQUFjOztJQUNkLDhCQUFlOzs7Ozs7QUFNakIsbUNBR0M7OztJQUZDLCtCQUFnQjs7SUFDaEIsOEJBQWU7Ozs7O0FBT2pCLG1DQUlDOzs7SUFIQywrQkFBc0I7O0lBQ3RCLDhCQUFxQjs7SUFDckIsK0JBQWdCOzs7Ozs7QUFHbEIsTUFBTSxVQUFVLGFBQWEsQ0FBQyxLQUFrQjtJQUM5QyxJQUFJLEtBQUssWUFBWSxLQUFLLEVBQUU7UUFDMUIsT0FBTyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztLQUMzQjtTQUFNO1FBQ0wsT0FBTyxLQUFLLENBQUM7S0FDZDtBQUNILENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLGVBQWUsQ0FBQyxNQUFZO0lBQzFDLE9BQU8sTUFBTSxZQUFZLE1BQU0sQ0FBQztBQUNsQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5leHBvcnQgdHlwZSBNYXJrID0gc3RyaW5nIHwgTWFya09iajtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWFya09iaiB7XHJcbiAgc3R5bGU/OiBvYmplY3Q7XHJcbiAgbGFiZWw6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgTnpNYXJrcyA9IE1hcmtzO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1hcmtzIHtcclxuICBba2V5OiBudW1iZXJdOiBNYXJrO1xyXG59XHJcblxyXG4vKipcclxuICogUHJvY2Vzc2VkIHN0ZXBzIHRoYXQgd291bGQgYmUgcGFzc2VkIHRvIHN1YiBjb21wb25lbnRzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBFeHRlbmRlZE1hcmsge1xyXG4gIHZhbHVlOiBudW1iZXI7XHJcbiAgb2Zmc2V0OiBudW1iZXI7XHJcbiAgY29uZmlnOiBNYXJrO1xyXG59XHJcblxyXG4vKipcclxuICogTWFya3MgdGhhdCB3b3VsZCBiZSByZW5kZXJlZC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGlzcGxheWVkTWFyayBleHRlbmRzIEV4dGVuZGVkTWFyayB7XHJcbiAgYWN0aXZlOiBib29sZWFuO1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgc3R5bGU/OiBvYmplY3Q7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTdGVwcyB0aGF0IHdvdWxkIGJlIHJlbmRlcmVkLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBEaXNwbGF5ZWRTdGVwIGV4dGVuZHMgRXh0ZW5kZWRNYXJrIHtcclxuICBhY3RpdmU6IGJvb2xlYW47XHJcbiAgc3R5bGU/OiBvYmplY3Q7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFNsaWRlclNob3dUb29sdGlwID0gJ2Fsd2F5cycgfCAnbmV2ZXInIHwgJ2RlZmF1bHQnO1xyXG5cclxuZXhwb3J0IHR5cGUgU2xpZGVyVmFsdWUgPSBudW1iZXJbXSB8IG51bWJlcjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2xpZGVySGFuZGxlciB7XHJcbiAgb2Zmc2V0OiBudW1iZXIgfCBudWxsO1xyXG4gIHZhbHVlOiBudW1iZXIgfCBudWxsO1xyXG4gIGFjdGl2ZTogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsdWVBUmFuZ2UodmFsdWU6IFNsaWRlclZhbHVlKTogdmFsdWUgaXMgbnVtYmVyW10ge1xyXG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICByZXR1cm4gdmFsdWUubGVuZ3RoID09PSAyO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNDb25maWdBT2JqZWN0KGNvbmZpZzogTWFyayk6IGNvbmZpZyBpcyBNYXJrT2JqIHtcclxuICByZXR1cm4gY29uZmlnIGluc3RhbmNlb2YgT2JqZWN0O1xyXG59XHJcbiJdfQ==