/**
 * @fileoverview added by tsickle
 * Generated from: highlight/highlight.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Pipe } from '@angular/core';
// Regular Expressions for parsing tags and attributes
/** @type {?} */
const SURROGATE_PAIR_REGEXP = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
// ! to ~ is the ASCII range.
/** @type {?} */
const NON_ALPHANUMERIC_REGEXP = /([^\#-~ |!])/g;
/**
 * Escapes all potentially dangerous characters, so that the
 * resulting string can be safely inserted into attribute or
 * element text.
 * @param {?} value
 * @return {?}
 */
function encodeEntities(value) {
    return value
        .replace(/&/g, '&amp;')
        .replace(SURROGATE_PAIR_REGEXP, (/**
     * @param {?} match
     * @return {?}
     */
    (match) => {
        /** @type {?} */
        const hi = match.charCodeAt(0);
        /** @type {?} */
        const low = match.charCodeAt(1);
        return `&#${(hi - 0xD800) * 0x400 + (low - 0xDC00) + 0x10000};`;
    }))
        .replace(NON_ALPHANUMERIC_REGEXP, (/**
     * @param {?} match
     * @return {?}
     */
    (match) => `&#${match.charCodeAt(0)};`))
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}
export class NzHighlightPipe {
    constructor() {
        this.UNIQUE_WRAPPERS = ['##==-open_tag-==##', '##==-close_tag-==##'];
    }
    /**
     * @param {?} value
     * @param {?} highlightValue
     * @param {?=} flags
     * @param {?=} klass
     * @return {?}
     */
    transform(value, highlightValue, flags, klass) {
        if (!highlightValue) {
            return value;
        }
        // Escapes regex keyword to interpret these characters literally
        /** @type {?} */
        const searchValue = new RegExp(highlightValue.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$&'), flags);
        /** @type {?} */
        const wrapValue = value.replace(searchValue, `${this.UNIQUE_WRAPPERS[0]}$&${this.UNIQUE_WRAPPERS[1]}`);
        return encodeEntities(wrapValue)
            .replace(new RegExp(this.UNIQUE_WRAPPERS[0], 'g'), klass ? `<span class="${klass}">` : '<span>')
            .replace(new RegExp(this.UNIQUE_WRAPPERS[1], 'g'), '</span>');
    }
}
NzHighlightPipe.decorators = [
    { type: Pipe, args: [{
                name: 'nzHighlight',
                pure: true
            },] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzHighlightPipe.prototype.UNIQUE_WRAPPERS;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGxpZ2h0LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJoaWdobGlnaHQvaGlnaGxpZ2h0LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7OztNQUc5QyxxQkFBcUIsR0FBRyxpQ0FBaUM7OztNQUV6RCx1QkFBdUIsR0FBRyxlQUFlOzs7Ozs7OztBQU8vQyxTQUFTLGNBQWMsQ0FBQyxLQUFhO0lBQ25DLE9BQU8sS0FBSztTQUNULE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDO1NBQ3RCLE9BQU8sQ0FBQyxxQkFBcUI7Ozs7SUFBRSxDQUFDLEtBQWEsRUFBRSxFQUFFOztjQUMxQyxFQUFFLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7O2NBQ3hCLEdBQUcsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUMvQixPQUFPLEtBQUssQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLE9BQU8sR0FBRyxDQUFDO0lBQ2xFLENBQUMsRUFBQztTQUNELE9BQU8sQ0FBQyx1QkFBdUI7Ozs7SUFBRSxDQUFDLEtBQWEsRUFBRSxFQUFFLENBQUMsS0FBSyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUM7U0FDaEYsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUM7U0FDckIsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztBQUMzQixDQUFDO0FBTUQsTUFBTSxPQUFPLGVBQWU7SUFKNUI7UUFLVSxvQkFBZSxHQUFxQixDQUFDLG9CQUFvQixFQUFFLHFCQUFxQixDQUFDLENBQUM7SUFjNUYsQ0FBQzs7Ozs7Ozs7SUFaQyxTQUFTLENBQUMsS0FBYSxFQUFFLGNBQXNCLEVBQUUsS0FBYyxFQUFFLEtBQWM7UUFDN0UsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUNuQixPQUFPLEtBQUssQ0FBQztTQUNkOzs7Y0FHSyxXQUFXLEdBQUcsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyw0QkFBNEIsRUFBRSxNQUFNLENBQUMsRUFBRSxLQUFLLENBQUM7O2NBQzdGLFNBQVMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3RHLE9BQU8sY0FBYyxDQUFDLFNBQVMsQ0FBQzthQUM3QixPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO2FBQy9GLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7OztZQWxCRixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLGFBQWE7Z0JBQ25CLElBQUksRUFBRSxJQUFJO2FBQ1g7Ozs7Ozs7SUFFQywwQ0FBMEYiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8vIFJlZ3VsYXIgRXhwcmVzc2lvbnMgZm9yIHBhcnNpbmcgdGFncyBhbmQgYXR0cmlidXRlc1xyXG5jb25zdCBTVVJST0dBVEVfUEFJUl9SRUdFWFAgPSAvW1xcdUQ4MDAtXFx1REJGRl1bXFx1REMwMC1cXHVERkZGXS9nO1xyXG4vLyAhIHRvIH4gaXMgdGhlIEFTQ0lJIHJhbmdlLlxyXG5jb25zdCBOT05fQUxQSEFOVU1FUklDX1JFR0VYUCA9IC8oW15cXCMtfiB8IV0pL2c7XHJcblxyXG4vKipcclxuICogRXNjYXBlcyBhbGwgcG90ZW50aWFsbHkgZGFuZ2Vyb3VzIGNoYXJhY3RlcnMsIHNvIHRoYXQgdGhlXHJcbiAqIHJlc3VsdGluZyBzdHJpbmcgY2FuIGJlIHNhZmVseSBpbnNlcnRlZCBpbnRvIGF0dHJpYnV0ZSBvclxyXG4gKiBlbGVtZW50IHRleHQuXHJcbiAqL1xyXG5mdW5jdGlvbiBlbmNvZGVFbnRpdGllcyh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICByZXR1cm4gdmFsdWVcclxuICAgIC5yZXBsYWNlKC8mL2csICcmYW1wOycpXHJcbiAgICAucmVwbGFjZShTVVJST0dBVEVfUEFJUl9SRUdFWFAsIChtYXRjaDogc3RyaW5nKSA9PiB7XHJcbiAgICAgIGNvbnN0IGhpID0gbWF0Y2guY2hhckNvZGVBdCgwKTtcclxuICAgICAgY29uc3QgbG93ID0gbWF0Y2guY2hhckNvZGVBdCgxKTtcclxuICAgICAgcmV0dXJuIGAmIyR7KGhpIC0gMHhEODAwKSAqIDB4NDAwICsgKGxvdyAtIDB4REMwMCkgKyAweDEwMDAwfTtgO1xyXG4gICAgfSlcclxuICAgIC5yZXBsYWNlKE5PTl9BTFBIQU5VTUVSSUNfUkVHRVhQLCAobWF0Y2g6IHN0cmluZykgPT4gYCYjJHttYXRjaC5jaGFyQ29kZUF0KDApfTtgKVxyXG4gICAgLnJlcGxhY2UoLzwvZywgJyZsdDsnKVxyXG4gICAgLnJlcGxhY2UoLz4vZywgJyZndDsnKTtcclxufVxyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICduekhpZ2hsaWdodCcsXHJcbiAgcHVyZTogdHJ1ZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpIaWdobGlnaHRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgcHJpdmF0ZSBVTklRVUVfV1JBUFBFUlM6IFtzdHJpbmcsIHN0cmluZ10gPSBbJyMjPT0tb3Blbl90YWctPT0jIycsICcjIz09LWNsb3NlX3RhZy09PSMjJ107XHJcblxyXG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nLCBoaWdobGlnaHRWYWx1ZTogc3RyaW5nLCBmbGFncz86IHN0cmluZywga2xhc3M/OiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcclxuICAgIGlmICghaGlnaGxpZ2h0VmFsdWUpIHtcclxuICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEVzY2FwZXMgcmVnZXgga2V5d29yZCB0byBpbnRlcnByZXQgdGhlc2UgY2hhcmFjdGVycyBsaXRlcmFsbHlcclxuICAgIGNvbnN0IHNlYXJjaFZhbHVlID0gbmV3IFJlZ0V4cChoaWdobGlnaHRWYWx1ZS5yZXBsYWNlKC8oWy4qKz9ePSE6JHt9KCl8W1xcXVxcL1xcXFxdKS9nLCAnXFxcXCQmJyksIGZsYWdzKTtcclxuICAgIGNvbnN0IHdyYXBWYWx1ZSA9IHZhbHVlLnJlcGxhY2Uoc2VhcmNoVmFsdWUsIGAke3RoaXMuVU5JUVVFX1dSQVBQRVJTWzBdfSQmJHt0aGlzLlVOSVFVRV9XUkFQUEVSU1sxXX1gKTtcclxuICAgIHJldHVybiBlbmNvZGVFbnRpdGllcyh3cmFwVmFsdWUpXHJcbiAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAodGhpcy5VTklRVUVfV1JBUFBFUlNbMF0sICdnJyksIGtsYXNzID8gYDxzcGFuIGNsYXNzPVwiJHtrbGFzc31cIj5gIDogJzxzcGFuPicpXHJcbiAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAodGhpcy5VTklRVUVfV1JBUFBFUlNbMV0sICdnJyksICc8L3NwYW4+Jyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==