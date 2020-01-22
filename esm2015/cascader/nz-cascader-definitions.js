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
 * @deprecated Use the prefixed version.
 * @record
 */
export function CascaderOption() { }
if (false) {
    /** @type {?|undefined} */
    CascaderOption.prototype.value;
    /** @type {?|undefined} */
    CascaderOption.prototype.label;
    /** @type {?|undefined} */
    CascaderOption.prototype.title;
    /** @type {?|undefined} */
    CascaderOption.prototype.disabled;
    /** @type {?|undefined} */
    CascaderOption.prototype.loading;
    /** @type {?|undefined} */
    CascaderOption.prototype.isLeaf;
    /** @type {?|undefined} */
    CascaderOption.prototype.parent;
    /** @type {?|undefined} */
    CascaderOption.prototype.children;
    /* Skipping unhandled member: [key: string]: any;*/
}
/**
 * @deprecated Use the prefixed version.
 * @record
 */
export function CascaderSearchOption() { }
if (false) {
    /** @type {?} */
    CascaderSearchOption.prototype.path;
}
/**
 * @record
 */
export function NzShowSearchOptions() { }
if (false) {
    /** @type {?|undefined} */
    NzShowSearchOptions.prototype.filter;
    /** @type {?|undefined} */
    NzShowSearchOptions.prototype.sorter;
}
/**
 * @param {?} options
 * @return {?}
 */
export function isShowSearchObject(options) {
    return typeof options !== 'boolean';
}
/**
 * To avoid circular dependency, provide an interface of `NzCascaderComponent`
 * for `NzCascaderService`.
 * @record
 */
export function NzCascaderComponentAsSource() { }
if (false) {
    /** @type {?} */
    NzCascaderComponentAsSource.prototype.inputValue;
    /** @type {?} */
    NzCascaderComponentAsSource.prototype.nzShowSearch;
    /** @type {?} */
    NzCascaderComponentAsSource.prototype.nzLabelProperty;
    /** @type {?} */
    NzCascaderComponentAsSource.prototype.nzValueProperty;
    /** @type {?} */
    NzCascaderComponentAsSource.prototype.nzChangeOnSelect;
    /**
     * @param {?} option
     * @param {?} level
     * @return {?}
     */
    NzCascaderComponentAsSource.prototype.nzChangeOn = function (option, level) { };
    /**
     * @param {?} node
     * @param {?=} index
     * @return {?}
     */
    NzCascaderComponentAsSource.prototype.nzLoadData = function (node, index) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FzY2FkZXItZGVmaW5pdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2Nhc2NhZGVyLyIsInNvdXJjZXMiOlsibnotY2FzY2FkZXItZGVmaW5pdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBLG9DQVdDOzs7SUFWQywrQkFBWTs7SUFDWiwrQkFBZTs7SUFDZiwrQkFBZTs7SUFDZixrQ0FBbUI7O0lBQ25CLGlDQUFrQjs7SUFDbEIsZ0NBQWlCOztJQUNqQixnQ0FBMEI7O0lBQzFCLGtDQUE4Qjs7Ozs7OztBQVVoQywwQ0FFQzs7O0lBREMsb0NBQXlCOzs7OztBQUszQix5Q0FHQzs7O0lBRkMscUNBQTBCOztJQUMxQixxQ0FBMEI7Ozs7OztBQUc1QixNQUFNLFVBQVUsa0JBQWtCLENBQUMsT0FBc0M7SUFDdkUsT0FBTyxPQUFPLE9BQU8sS0FBSyxTQUFTLENBQUM7QUFDdEMsQ0FBQzs7Ozs7O0FBTUQsaURBV0M7OztJQVZDLGlEQUFtQjs7SUFDbkIsbURBQTRDOztJQUM1QyxzREFBd0I7O0lBQ3hCLHNEQUF3Qjs7SUFDeEIsdURBQTBCOzs7Ozs7SUFFMUIsZ0ZBQThEOzs7Ozs7SUFHOUQsOEVBQXNFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5leHBvcnQgdHlwZSBOekNhc2NhZGVyRXhwYW5kVHJpZ2dlciA9ICdjbGljaycgfCAnaG92ZXInO1xyXG5leHBvcnQgdHlwZSBOekNhc2NhZGVyVHJpZ2dlclR5cGUgPSAnY2xpY2snIHwgJ2hvdmVyJztcclxuZXhwb3J0IHR5cGUgTnpDYXNjYWRlclNpemUgPSAnc21hbGwnIHwgJ2xhcmdlJyB8ICdkZWZhdWx0JztcclxuXHJcbmV4cG9ydCB0eXBlIE56Q2FzY2FkZXJGaWx0ZXIgPSAoc2VhcmNoVmFsdWU6IHN0cmluZywgcGF0aDogTnpDYXNjYWRlck9wdGlvbltdKSA9PiBib29sZWFuO1xyXG5leHBvcnQgdHlwZSBOekNhc2NhZGVyU29ydGVyID0gKGE6IE56Q2FzY2FkZXJPcHRpb25bXSwgYjogTnpDYXNjYWRlck9wdGlvbltdLCBpbnB1dFZhbHVlOiBzdHJpbmcpID0+IG51bWJlcjtcclxuXHJcbi8qKlxyXG4gKiBAZGVwcmVjYXRlZCBVc2UgdGhlIHByZWZpeGVkIHZlcnNpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIENhc2NhZGVyT3B0aW9uIHtcclxuICB2YWx1ZT86IGFueTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcclxuICBsYWJlbD86IHN0cmluZztcclxuICB0aXRsZT86IHN0cmluZztcclxuICBkaXNhYmxlZD86IGJvb2xlYW47XHJcbiAgbG9hZGluZz86IGJvb2xlYW47XHJcbiAgaXNMZWFmPzogYm9vbGVhbjtcclxuICBwYXJlbnQ/OiBOekNhc2NhZGVyT3B0aW9uO1xyXG4gIGNoaWxkcmVuPzogTnpDYXNjYWRlck9wdGlvbltdO1xyXG5cclxuICBba2V5OiBzdHJpbmddOiBhbnk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIE56Q2FzY2FkZXJPcHRpb24gPSBDYXNjYWRlck9wdGlvbjtcclxuXHJcbi8qKlxyXG4gKiBAZGVwcmVjYXRlZCBVc2UgdGhlIHByZWZpeGVkIHZlcnNpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIENhc2NhZGVyU2VhcmNoT3B0aW9uIGV4dGVuZHMgTnpDYXNjYWRlck9wdGlvbiB7XHJcbiAgcGF0aDogTnpDYXNjYWRlck9wdGlvbltdO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBOekNhc2NhZGVyU2VhcmNoT3B0aW9uID0gQ2FzY2FkZXJTZWFyY2hPcHRpb247XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE56U2hvd1NlYXJjaE9wdGlvbnMge1xyXG4gIGZpbHRlcj86IE56Q2FzY2FkZXJGaWx0ZXI7XHJcbiAgc29ydGVyPzogTnpDYXNjYWRlclNvcnRlcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU2hvd1NlYXJjaE9iamVjdChvcHRpb25zOiBOelNob3dTZWFyY2hPcHRpb25zIHwgYm9vbGVhbik6IG9wdGlvbnMgaXMgTnpTaG93U2VhcmNoT3B0aW9ucyB7XHJcbiAgcmV0dXJuIHR5cGVvZiBvcHRpb25zICE9PSAnYm9vbGVhbic7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUbyBhdm9pZCBjaXJjdWxhciBkZXBlbmRlbmN5LCBwcm92aWRlIGFuIGludGVyZmFjZSBvZiBgTnpDYXNjYWRlckNvbXBvbmVudGBcclxuICogZm9yIGBOekNhc2NhZGVyU2VydmljZWAuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIE56Q2FzY2FkZXJDb21wb25lbnRBc1NvdXJjZSB7XHJcbiAgaW5wdXRWYWx1ZTogc3RyaW5nO1xyXG4gIG56U2hvd1NlYXJjaDogTnpTaG93U2VhcmNoT3B0aW9ucyB8IGJvb2xlYW47XHJcbiAgbnpMYWJlbFByb3BlcnR5OiBzdHJpbmc7XHJcbiAgbnpWYWx1ZVByb3BlcnR5OiBzdHJpbmc7XHJcbiAgbnpDaGFuZ2VPblNlbGVjdDogYm9vbGVhbjtcclxuXHJcbiAgbnpDaGFuZ2VPbj8ob3B0aW9uOiBOekNhc2NhZGVyT3B0aW9uLCBsZXZlbDogbnVtYmVyKTogYm9vbGVhbjtcclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIG56TG9hZERhdGE/KG5vZGU6IE56Q2FzY2FkZXJPcHRpb24sIGluZGV4PzogbnVtYmVyKTogUHJvbWlzZUxpa2U8YW55PjtcclxufVxyXG4iXX0=