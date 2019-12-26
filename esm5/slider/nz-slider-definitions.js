/**
 * @fileoverview added by tsickle
 * Generated from: nz-slider-definitions.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLWRlZmluaXRpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9zbGlkZXIvIiwic291cmNlcyI6WyJuei1zbGlkZXItZGVmaW5pdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsNkJBR0M7OztJQUZDLHdCQUFlOztJQUNmLHdCQUFjOztBQUtoQjtJQUFBO0lBRUEsQ0FBQztJQUFELFlBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQzs7Ozs7O0FBS0Qsa0NBSUM7OztJQUhDLDZCQUFjOztJQUNkLDhCQUFlOztJQUNmLDhCQUFhOzs7Ozs7QUFNZixtQ0FJQzs7O0lBSEMsK0JBQWdCOztJQUNoQiw4QkFBYzs7SUFDZCw4QkFBZTs7Ozs7O0FBTWpCLG1DQUdDOzs7SUFGQywrQkFBZ0I7O0lBQ2hCLDhCQUFlOzs7OztBQU9qQixtQ0FJQzs7O0lBSEMsK0JBQXNCOztJQUN0Qiw4QkFBcUI7O0lBQ3JCLCtCQUFnQjs7Ozs7O0FBR2xCLE1BQU0sVUFBVSxhQUFhLENBQUMsS0FBa0I7SUFDOUMsSUFBSSxLQUFLLFlBQVksS0FBSyxFQUFFO1FBQzFCLE9BQU8sS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7S0FDM0I7U0FBTTtRQUNMLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7QUFDSCxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxlQUFlLENBQUMsTUFBWTtJQUMxQyxPQUFPLE1BQU0sWUFBWSxNQUFNLENBQUM7QUFDbEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuZXhwb3J0IHR5cGUgTWFyayA9IHN0cmluZyB8IE1hcmtPYmo7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1hcmtPYmoge1xyXG4gIHN0eWxlPzogb2JqZWN0O1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIE56TWFya3MgPSBNYXJrcztcclxuXHJcbmV4cG9ydCBjbGFzcyBNYXJrcyB7XHJcbiAgW2tleTogbnVtYmVyXTogTWFyaztcclxufVxyXG5cclxuLyoqXHJcbiAqIFByb2Nlc3NlZCBzdGVwcyB0aGF0IHdvdWxkIGJlIHBhc3NlZCB0byBzdWIgY29tcG9uZW50cy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXh0ZW5kZWRNYXJrIHtcclxuICB2YWx1ZTogbnVtYmVyO1xyXG4gIG9mZnNldDogbnVtYmVyO1xyXG4gIGNvbmZpZzogTWFyaztcclxufVxyXG5cclxuLyoqXHJcbiAqIE1hcmtzIHRoYXQgd291bGQgYmUgcmVuZGVyZWQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIERpc3BsYXllZE1hcmsgZXh0ZW5kcyBFeHRlbmRlZE1hcmsge1xyXG4gIGFjdGl2ZTogYm9vbGVhbjtcclxuICBsYWJlbDogc3RyaW5nO1xyXG4gIHN0eWxlPzogb2JqZWN0O1xyXG59XHJcblxyXG4vKipcclxuICogU3RlcHMgdGhhdCB3b3VsZCBiZSByZW5kZXJlZC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGlzcGxheWVkU3RlcCBleHRlbmRzIEV4dGVuZGVkTWFyayB7XHJcbiAgYWN0aXZlOiBib29sZWFuO1xyXG4gIHN0eWxlPzogb2JqZWN0O1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBTbGlkZXJTaG93VG9vbHRpcCA9ICdhbHdheXMnIHwgJ25ldmVyJyB8ICdkZWZhdWx0JztcclxuXHJcbmV4cG9ydCB0eXBlIFNsaWRlclZhbHVlID0gbnVtYmVyW10gfCBudW1iZXI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNsaWRlckhhbmRsZXIge1xyXG4gIG9mZnNldDogbnVtYmVyIHwgbnVsbDtcclxuICB2YWx1ZTogbnVtYmVyIHwgbnVsbDtcclxuICBhY3RpdmU6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbHVlQVJhbmdlKHZhbHVlOiBTbGlkZXJWYWx1ZSk6IHZhbHVlIGlzIG51bWJlcltdIHtcclxuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA9PT0gMjtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQ29uZmlnQU9iamVjdChjb25maWc6IE1hcmspOiBjb25maWcgaXMgTWFya09iaiB7XHJcbiAgcmV0dXJuIGNvbmZpZyBpbnN0YW5jZW9mIE9iamVjdDtcclxufVxyXG4iXX0=