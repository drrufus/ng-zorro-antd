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
export class Marks {
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLWRlZmluaXRpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9zbGlkZXIvIiwic291cmNlcyI6WyJuei1zbGlkZXItZGVmaW5pdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFVQSw2QkFHQzs7O0lBRkMsd0JBQWU7O0lBQ2Ysd0JBQWM7O0FBS2hCLE1BQU0sT0FBTyxLQUFLO0NBRWpCOzs7OztBQUtELGtDQUlDOzs7SUFIQyw2QkFBYzs7SUFDZCw4QkFBZTs7SUFDZiw4QkFBYTs7Ozs7O0FBTWYsbUNBSUM7OztJQUhDLCtCQUFnQjs7SUFDaEIsOEJBQWM7O0lBQ2QsOEJBQWU7Ozs7OztBQU1qQixtQ0FHQzs7O0lBRkMsK0JBQWdCOztJQUNoQiw4QkFBZTs7Ozs7QUFPakIsbUNBSUM7OztJQUhDLCtCQUFzQjs7SUFDdEIsOEJBQXFCOztJQUNyQiwrQkFBZ0I7Ozs7OztBQUdsQixNQUFNLFVBQVUsYUFBYSxDQUFDLEtBQWtCO0lBQzlDLElBQUksS0FBSyxZQUFZLEtBQUssRUFBRTtRQUMxQixPQUFPLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO0tBQzNCO1NBQU07UUFDTCxPQUFPLEtBQUssQ0FBQztLQUNkO0FBQ0gsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsZUFBZSxDQUFDLE1BQVk7SUFDMUMsT0FBTyxNQUFNLFlBQVksTUFBTSxDQUFDO0FBQ2xDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmV4cG9ydCB0eXBlIE1hcmsgPSBzdHJpbmcgfCBNYXJrT2JqO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNYXJrT2JqIHtcclxuICBzdHlsZT86IG9iamVjdDtcclxuICBsYWJlbDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBOek1hcmtzID0gTWFya3M7XHJcblxyXG5leHBvcnQgY2xhc3MgTWFya3Mge1xyXG4gIFtrZXk6IG51bWJlcl06IE1hcms7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQcm9jZXNzZWQgc3RlcHMgdGhhdCB3b3VsZCBiZSBwYXNzZWQgdG8gc3ViIGNvbXBvbmVudHMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEV4dGVuZGVkTWFyayB7XHJcbiAgdmFsdWU6IG51bWJlcjtcclxuICBvZmZzZXQ6IG51bWJlcjtcclxuICBjb25maWc6IE1hcms7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNYXJrcyB0aGF0IHdvdWxkIGJlIHJlbmRlcmVkLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBEaXNwbGF5ZWRNYXJrIGV4dGVuZHMgRXh0ZW5kZWRNYXJrIHtcclxuICBhY3RpdmU6IGJvb2xlYW47XHJcbiAgbGFiZWw6IHN0cmluZztcclxuICBzdHlsZT86IG9iamVjdDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFN0ZXBzIHRoYXQgd291bGQgYmUgcmVuZGVyZWQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIERpc3BsYXllZFN0ZXAgZXh0ZW5kcyBFeHRlbmRlZE1hcmsge1xyXG4gIGFjdGl2ZTogYm9vbGVhbjtcclxuICBzdHlsZT86IG9iamVjdDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgU2xpZGVyU2hvd1Rvb2x0aXAgPSAnYWx3YXlzJyB8ICduZXZlcicgfCAnZGVmYXVsdCc7XHJcblxyXG5leHBvcnQgdHlwZSBTbGlkZXJWYWx1ZSA9IG51bWJlcltdIHwgbnVtYmVyO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTbGlkZXJIYW5kbGVyIHtcclxuICBvZmZzZXQ6IG51bWJlciB8IG51bGw7XHJcbiAgdmFsdWU6IG51bWJlciB8IG51bGw7XHJcbiAgYWN0aXZlOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNWYWx1ZUFSYW5nZSh2YWx1ZTogU2xpZGVyVmFsdWUpOiB2YWx1ZSBpcyBudW1iZXJbXSB7XHJcbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPT09IDI7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0NvbmZpZ0FPYmplY3QoY29uZmlnOiBNYXJrKTogY29uZmlnIGlzIE1hcmtPYmoge1xyXG4gIHJldHVybiBjb25maWcgaW5zdGFuY2VvZiBPYmplY3Q7XHJcbn1cclxuIl19