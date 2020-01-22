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
import { Pipe } from '@angular/core';
// Regular Expressions for parsing tags and attributes
/** @type {?} */
var SURROGATE_PAIR_REGEXP = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
// ! to ~ is the ASCII range.
/** @type {?} */
var NON_ALPHANUMERIC_REGEXP = /([^\#-~ |!])/g;
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
    function (match) {
        /** @type {?} */
        var hi = match.charCodeAt(0);
        /** @type {?} */
        var low = match.charCodeAt(1);
        return "&#" + ((hi - 0xD800) * 0x400 + (low - 0xDC00) + 0x10000) + ";";
    }))
        .replace(NON_ALPHANUMERIC_REGEXP, (/**
     * @param {?} match
     * @return {?}
     */
    function (match) { return "&#" + match.charCodeAt(0) + ";"; }))
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}
var NzHighlightPipe = /** @class */ (function () {
    function NzHighlightPipe() {
        this.UNIQUE_WRAPPERS = ['##==-open_tag-==##', '##==-close_tag-==##'];
    }
    /**
     * @param {?} value
     * @param {?} highlightValue
     * @param {?=} flags
     * @param {?=} klass
     * @return {?}
     */
    NzHighlightPipe.prototype.transform = /**
     * @param {?} value
     * @param {?} highlightValue
     * @param {?=} flags
     * @param {?=} klass
     * @return {?}
     */
    function (value, highlightValue, flags, klass) {
        if (!highlightValue) {
            return value;
        }
        // Escapes regex keyword to interpret these characters literally
        /** @type {?} */
        var searchValue = new RegExp(highlightValue.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$&'), flags);
        /** @type {?} */
        var wrapValue = value.replace(searchValue, this.UNIQUE_WRAPPERS[0] + "$&" + this.UNIQUE_WRAPPERS[1]);
        return encodeEntities(wrapValue)
            .replace(new RegExp(this.UNIQUE_WRAPPERS[0], 'g'), klass ? "<span class=\"" + klass + "\">" : '<span>')
            .replace(new RegExp(this.UNIQUE_WRAPPERS[1], 'g'), '</span>');
    };
    NzHighlightPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'nzHighlight',
                    pure: true
                },] }
    ];
    return NzHighlightPipe;
}());
export { NzHighlightPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzHighlightPipe.prototype.UNIQUE_WRAPPERS;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGxpZ2h0LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJoaWdobGlnaHQvaGlnaGxpZ2h0LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7O0lBRzlDLHFCQUFxQixHQUFHLGlDQUFpQzs7O0lBRXpELHVCQUF1QixHQUFHLGVBQWU7Ozs7Ozs7O0FBTy9DLFNBQVMsY0FBYyxDQUFDLEtBQWE7SUFDbkMsT0FBTyxLQUFLO1NBQ1QsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUM7U0FDdEIsT0FBTyxDQUFDLHFCQUFxQjs7OztJQUFFLFVBQUMsS0FBYTs7WUFDdEMsRUFBRSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDOztZQUN4QixHQUFHLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDL0IsT0FBTyxRQUFLLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxPQUFPLE9BQUcsQ0FBQztJQUNsRSxDQUFDLEVBQUM7U0FDRCxPQUFPLENBQUMsdUJBQXVCOzs7O0lBQUUsVUFBQyxLQUFhLElBQUssT0FBQSxPQUFLLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQUcsRUFBM0IsQ0FBMkIsRUFBQztTQUNoRixPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQztTQUNyQixPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzNCLENBQUM7QUFFRDtJQUFBO1FBS1Usb0JBQWUsR0FBcUIsQ0FBQyxvQkFBb0IsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0lBYzVGLENBQUM7Ozs7Ozs7O0lBWkMsbUNBQVM7Ozs7Ozs7SUFBVCxVQUFVLEtBQWEsRUFBRSxjQUFzQixFQUFFLEtBQWMsRUFBRSxLQUFjO1FBQzdFLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDbkIsT0FBTyxLQUFLLENBQUM7U0FDZDs7O1lBR0ssV0FBVyxHQUFHLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsNEJBQTRCLEVBQUUsTUFBTSxDQUFDLEVBQUUsS0FBSyxDQUFDOztZQUM3RixTQUFTLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUssSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsVUFBSyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBRyxDQUFDO1FBQ3RHLE9BQU8sY0FBYyxDQUFDLFNBQVMsQ0FBQzthQUM3QixPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLG1CQUFnQixLQUFLLFFBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO2FBQy9GLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7O2dCQWxCRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLGFBQWE7b0JBQ25CLElBQUksRUFBRSxJQUFJO2lCQUNYOztJQWdCRCxzQkFBQztDQUFBLEFBbkJELElBbUJDO1NBZlksZUFBZTs7Ozs7O0lBQzFCLDBDQUEwRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLy8gUmVndWxhciBFeHByZXNzaW9ucyBmb3IgcGFyc2luZyB0YWdzIGFuZCBhdHRyaWJ1dGVzXHJcbmNvbnN0IFNVUlJPR0FURV9QQUlSX1JFR0VYUCA9IC9bXFx1RDgwMC1cXHVEQkZGXVtcXHVEQzAwLVxcdURGRkZdL2c7XHJcbi8vICEgdG8gfiBpcyB0aGUgQVNDSUkgcmFuZ2UuXHJcbmNvbnN0IE5PTl9BTFBIQU5VTUVSSUNfUkVHRVhQID0gLyhbXlxcIy1+IHwhXSkvZztcclxuXHJcbi8qKlxyXG4gKiBFc2NhcGVzIGFsbCBwb3RlbnRpYWxseSBkYW5nZXJvdXMgY2hhcmFjdGVycywgc28gdGhhdCB0aGVcclxuICogcmVzdWx0aW5nIHN0cmluZyBjYW4gYmUgc2FmZWx5IGluc2VydGVkIGludG8gYXR0cmlidXRlIG9yXHJcbiAqIGVsZW1lbnQgdGV4dC5cclxuICovXHJcbmZ1bmN0aW9uIGVuY29kZUVudGl0aWVzKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gIHJldHVybiB2YWx1ZVxyXG4gICAgLnJlcGxhY2UoLyYvZywgJyZhbXA7JylcclxuICAgIC5yZXBsYWNlKFNVUlJPR0FURV9QQUlSX1JFR0VYUCwgKG1hdGNoOiBzdHJpbmcpID0+IHtcclxuICAgICAgY29uc3QgaGkgPSBtYXRjaC5jaGFyQ29kZUF0KDApO1xyXG4gICAgICBjb25zdCBsb3cgPSBtYXRjaC5jaGFyQ29kZUF0KDEpO1xyXG4gICAgICByZXR1cm4gYCYjJHsoaGkgLSAweEQ4MDApICogMHg0MDAgKyAobG93IC0gMHhEQzAwKSArIDB4MTAwMDB9O2A7XHJcbiAgICB9KVxyXG4gICAgLnJlcGxhY2UoTk9OX0FMUEhBTlVNRVJJQ19SRUdFWFAsIChtYXRjaDogc3RyaW5nKSA9PiBgJiMke21hdGNoLmNoYXJDb2RlQXQoMCl9O2ApXHJcbiAgICAucmVwbGFjZSgvPC9nLCAnJmx0OycpXHJcbiAgICAucmVwbGFjZSgvPi9nLCAnJmd0OycpO1xyXG59XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ256SGlnaGxpZ2h0JyxcclxuICBwdXJlOiB0cnVlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekhpZ2hsaWdodFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBwcml2YXRlIFVOSVFVRV9XUkFQUEVSUzogW3N0cmluZywgc3RyaW5nXSA9IFsnIyM9PS1vcGVuX3RhZy09PSMjJywgJyMjPT0tY2xvc2VfdGFnLT09IyMnXTtcclxuXHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcsIGhpZ2hsaWdodFZhbHVlOiBzdHJpbmcsIGZsYWdzPzogc3RyaW5nLCBrbGFzcz86IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xyXG4gICAgaWYgKCFoaWdobGlnaHRWYWx1ZSkge1xyXG4gICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRXNjYXBlcyByZWdleCBrZXl3b3JkIHRvIGludGVycHJldCB0aGVzZSBjaGFyYWN0ZXJzIGxpdGVyYWxseVxyXG4gICAgY29uc3Qgc2VhcmNoVmFsdWUgPSBuZXcgUmVnRXhwKGhpZ2hsaWdodFZhbHVlLnJlcGxhY2UoLyhbLiorP149IToke30oKXxbXFxdXFwvXFxcXF0pL2csICdcXFxcJCYnKSwgZmxhZ3MpO1xyXG4gICAgY29uc3Qgd3JhcFZhbHVlID0gdmFsdWUucmVwbGFjZShzZWFyY2hWYWx1ZSwgYCR7dGhpcy5VTklRVUVfV1JBUFBFUlNbMF19JCYke3RoaXMuVU5JUVVFX1dSQVBQRVJTWzFdfWApO1xyXG4gICAgcmV0dXJuIGVuY29kZUVudGl0aWVzKHdyYXBWYWx1ZSlcclxuICAgICAgLnJlcGxhY2UobmV3IFJlZ0V4cCh0aGlzLlVOSVFVRV9XUkFQUEVSU1swXSwgJ2cnKSwga2xhc3MgPyBgPHNwYW4gY2xhc3M9XCIke2tsYXNzfVwiPmAgOiAnPHNwYW4+JylcclxuICAgICAgLnJlcGxhY2UobmV3IFJlZ0V4cCh0aGlzLlVOSVFVRV9XUkFQUEVSU1sxXSwgJ2cnKSwgJzwvc3Bhbj4nKTtcclxuICB9XHJcbn1cclxuIl19