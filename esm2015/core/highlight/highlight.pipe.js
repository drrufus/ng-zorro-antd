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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGxpZ2h0LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJoaWdobGlnaHQvaGlnaGxpZ2h0LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7O01BRzlDLHFCQUFxQixHQUFHLGlDQUFpQzs7O01BRXpELHVCQUF1QixHQUFHLGVBQWU7Ozs7Ozs7O0FBTy9DLFNBQVMsY0FBYyxDQUFDLEtBQWE7SUFDbkMsT0FBTyxLQUFLO1NBQ1QsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUM7U0FDdEIsT0FBTyxDQUFDLHFCQUFxQjs7OztJQUFFLENBQUMsS0FBYSxFQUFFLEVBQUU7O2NBQzFDLEVBQUUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzs7Y0FDeEIsR0FBRyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQy9CLE9BQU8sS0FBSyxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsT0FBTyxHQUFHLENBQUM7SUFDbEUsQ0FBQyxFQUFDO1NBQ0QsT0FBTyxDQUFDLHVCQUF1Qjs7OztJQUFFLENBQUMsS0FBYSxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQztTQUNoRixPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQztTQUNyQixPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzNCLENBQUM7QUFNRCxNQUFNLE9BQU8sZUFBZTtJQUo1QjtRQUtVLG9CQUFlLEdBQXFCLENBQUMsb0JBQW9CLEVBQUUscUJBQXFCLENBQUMsQ0FBQztJQWM1RixDQUFDOzs7Ozs7OztJQVpDLFNBQVMsQ0FBQyxLQUFhLEVBQUUsY0FBc0IsRUFBRSxLQUFjLEVBQUUsS0FBYztRQUM3RSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ25CLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7OztjQUdLLFdBQVcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLDRCQUE0QixFQUFFLE1BQU0sQ0FBQyxFQUFFLEtBQUssQ0FBQzs7Y0FDN0YsU0FBUyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDdEcsT0FBTyxjQUFjLENBQUMsU0FBUyxDQUFDO2FBQzdCLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7YUFDL0YsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7O1lBbEJGLElBQUksU0FBQztnQkFDSixJQUFJLEVBQUUsYUFBYTtnQkFDbkIsSUFBSSxFQUFFLElBQUk7YUFDWDs7Ozs7OztJQUVDLDBDQUEwRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLy8gUmVndWxhciBFeHByZXNzaW9ucyBmb3IgcGFyc2luZyB0YWdzIGFuZCBhdHRyaWJ1dGVzXHJcbmNvbnN0IFNVUlJPR0FURV9QQUlSX1JFR0VYUCA9IC9bXFx1RDgwMC1cXHVEQkZGXVtcXHVEQzAwLVxcdURGRkZdL2c7XHJcbi8vICEgdG8gfiBpcyB0aGUgQVNDSUkgcmFuZ2UuXHJcbmNvbnN0IE5PTl9BTFBIQU5VTUVSSUNfUkVHRVhQID0gLyhbXlxcIy1+IHwhXSkvZztcclxuXHJcbi8qKlxyXG4gKiBFc2NhcGVzIGFsbCBwb3RlbnRpYWxseSBkYW5nZXJvdXMgY2hhcmFjdGVycywgc28gdGhhdCB0aGVcclxuICogcmVzdWx0aW5nIHN0cmluZyBjYW4gYmUgc2FmZWx5IGluc2VydGVkIGludG8gYXR0cmlidXRlIG9yXHJcbiAqIGVsZW1lbnQgdGV4dC5cclxuICovXHJcbmZ1bmN0aW9uIGVuY29kZUVudGl0aWVzKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gIHJldHVybiB2YWx1ZVxyXG4gICAgLnJlcGxhY2UoLyYvZywgJyZhbXA7JylcclxuICAgIC5yZXBsYWNlKFNVUlJPR0FURV9QQUlSX1JFR0VYUCwgKG1hdGNoOiBzdHJpbmcpID0+IHtcclxuICAgICAgY29uc3QgaGkgPSBtYXRjaC5jaGFyQ29kZUF0KDApO1xyXG4gICAgICBjb25zdCBsb3cgPSBtYXRjaC5jaGFyQ29kZUF0KDEpO1xyXG4gICAgICByZXR1cm4gYCYjJHsoaGkgLSAweEQ4MDApICogMHg0MDAgKyAobG93IC0gMHhEQzAwKSArIDB4MTAwMDB9O2A7XHJcbiAgICB9KVxyXG4gICAgLnJlcGxhY2UoTk9OX0FMUEhBTlVNRVJJQ19SRUdFWFAsIChtYXRjaDogc3RyaW5nKSA9PiBgJiMke21hdGNoLmNoYXJDb2RlQXQoMCl9O2ApXHJcbiAgICAucmVwbGFjZSgvPC9nLCAnJmx0OycpXHJcbiAgICAucmVwbGFjZSgvPi9nLCAnJmd0OycpO1xyXG59XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ256SGlnaGxpZ2h0JyxcclxuICBwdXJlOiB0cnVlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekhpZ2hsaWdodFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBwcml2YXRlIFVOSVFVRV9XUkFQUEVSUzogW3N0cmluZywgc3RyaW5nXSA9IFsnIyM9PS1vcGVuX3RhZy09PSMjJywgJyMjPT0tY2xvc2VfdGFnLT09IyMnXTtcclxuXHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcsIGhpZ2hsaWdodFZhbHVlOiBzdHJpbmcsIGZsYWdzPzogc3RyaW5nLCBrbGFzcz86IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xyXG4gICAgaWYgKCFoaWdobGlnaHRWYWx1ZSkge1xyXG4gICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRXNjYXBlcyByZWdleCBrZXl3b3JkIHRvIGludGVycHJldCB0aGVzZSBjaGFyYWN0ZXJzIGxpdGVyYWxseVxyXG4gICAgY29uc3Qgc2VhcmNoVmFsdWUgPSBuZXcgUmVnRXhwKGhpZ2hsaWdodFZhbHVlLnJlcGxhY2UoLyhbLiorP149IToke30oKXxbXFxdXFwvXFxcXF0pL2csICdcXFxcJCYnKSwgZmxhZ3MpO1xyXG4gICAgY29uc3Qgd3JhcFZhbHVlID0gdmFsdWUucmVwbGFjZShzZWFyY2hWYWx1ZSwgYCR7dGhpcy5VTklRVUVfV1JBUFBFUlNbMF19JCYke3RoaXMuVU5JUVVFX1dSQVBQRVJTWzFdfWApO1xyXG4gICAgcmV0dXJuIGVuY29kZUVudGl0aWVzKHdyYXBWYWx1ZSlcclxuICAgICAgLnJlcGxhY2UobmV3IFJlZ0V4cCh0aGlzLlVOSVFVRV9XUkFQUEVSU1swXSwgJ2cnKSwga2xhc3MgPyBgPHNwYW4gY2xhc3M9XCIke2tsYXNzfVwiPmAgOiAnPHNwYW4+JylcclxuICAgICAgLnJlcGxhY2UobmV3IFJlZ0V4cCh0aGlzLlVOSVFVRV9XUkFQUEVSU1sxXSwgJ2cnKSwgJzwvc3Bhbj4nKTtcclxuICB9XHJcbn1cclxuIl19