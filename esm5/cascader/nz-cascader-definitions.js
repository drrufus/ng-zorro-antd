/**
 * @fileoverview added by tsickle
 * Generated from: nz-cascader-definitions.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FzY2FkZXItZGVmaW5pdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2Nhc2NhZGVyLyIsInNvdXJjZXMiOlsibnotY2FzY2FkZXItZGVmaW5pdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQSxvQ0FXQzs7O0lBVkMsK0JBQVk7O0lBQ1osK0JBQWU7O0lBQ2YsK0JBQWU7O0lBQ2Ysa0NBQW1COztJQUNuQixpQ0FBa0I7O0lBQ2xCLGdDQUFpQjs7SUFDakIsZ0NBQTBCOztJQUMxQixrQ0FBOEI7Ozs7Ozs7QUFVaEMsMENBRUM7OztJQURDLG9DQUF5Qjs7Ozs7QUFLM0IseUNBR0M7OztJQUZDLHFDQUEwQjs7SUFDMUIscUNBQTBCOzs7Ozs7QUFHNUIsTUFBTSxVQUFVLGtCQUFrQixDQUFDLE9BQXNDO0lBQ3ZFLE9BQU8sT0FBTyxPQUFPLEtBQUssU0FBUyxDQUFDO0FBQ3RDLENBQUM7Ozs7OztBQU1ELGlEQVdDOzs7SUFWQyxpREFBbUI7O0lBQ25CLG1EQUE0Qzs7SUFDNUMsc0RBQXdCOztJQUN4QixzREFBd0I7O0lBQ3hCLHVEQUEwQjs7Ozs7O0lBRTFCLGdGQUE4RDs7Ozs7O0lBRzlELDhFQUFzRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuZXhwb3J0IHR5cGUgTnpDYXNjYWRlckV4cGFuZFRyaWdnZXIgPSAnY2xpY2snIHwgJ2hvdmVyJztcclxuZXhwb3J0IHR5cGUgTnpDYXNjYWRlclRyaWdnZXJUeXBlID0gJ2NsaWNrJyB8ICdob3Zlcic7XHJcbmV4cG9ydCB0eXBlIE56Q2FzY2FkZXJTaXplID0gJ3NtYWxsJyB8ICdsYXJnZScgfCAnZGVmYXVsdCc7XHJcblxyXG5leHBvcnQgdHlwZSBOekNhc2NhZGVyRmlsdGVyID0gKHNlYXJjaFZhbHVlOiBzdHJpbmcsIHBhdGg6IE56Q2FzY2FkZXJPcHRpb25bXSkgPT4gYm9vbGVhbjtcclxuZXhwb3J0IHR5cGUgTnpDYXNjYWRlclNvcnRlciA9IChhOiBOekNhc2NhZGVyT3B0aW9uW10sIGI6IE56Q2FzY2FkZXJPcHRpb25bXSwgaW5wdXRWYWx1ZTogc3RyaW5nKSA9PiBudW1iZXI7XHJcblxyXG4vKipcclxuICogQGRlcHJlY2F0ZWQgVXNlIHRoZSBwcmVmaXhlZCB2ZXJzaW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBDYXNjYWRlck9wdGlvbiB7XHJcbiAgdmFsdWU/OiBhbnk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcbiAgbGFiZWw/OiBzdHJpbmc7XHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gIGxvYWRpbmc/OiBib29sZWFuO1xyXG4gIGlzTGVhZj86IGJvb2xlYW47XHJcbiAgcGFyZW50PzogTnpDYXNjYWRlck9wdGlvbjtcclxuICBjaGlsZHJlbj86IE56Q2FzY2FkZXJPcHRpb25bXTtcclxuXHJcbiAgW2tleTogc3RyaW5nXTogYW55OyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBOekNhc2NhZGVyT3B0aW9uID0gQ2FzY2FkZXJPcHRpb247XHJcblxyXG4vKipcclxuICogQGRlcHJlY2F0ZWQgVXNlIHRoZSBwcmVmaXhlZCB2ZXJzaW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBDYXNjYWRlclNlYXJjaE9wdGlvbiBleHRlbmRzIE56Q2FzY2FkZXJPcHRpb24ge1xyXG4gIHBhdGg6IE56Q2FzY2FkZXJPcHRpb25bXTtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgTnpDYXNjYWRlclNlYXJjaE9wdGlvbiA9IENhc2NhZGVyU2VhcmNoT3B0aW9uO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBOelNob3dTZWFyY2hPcHRpb25zIHtcclxuICBmaWx0ZXI/OiBOekNhc2NhZGVyRmlsdGVyO1xyXG4gIHNvcnRlcj86IE56Q2FzY2FkZXJTb3J0ZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1Nob3dTZWFyY2hPYmplY3Qob3B0aW9uczogTnpTaG93U2VhcmNoT3B0aW9ucyB8IGJvb2xlYW4pOiBvcHRpb25zIGlzIE56U2hvd1NlYXJjaE9wdGlvbnMge1xyXG4gIHJldHVybiB0eXBlb2Ygb3B0aW9ucyAhPT0gJ2Jvb2xlYW4nO1xyXG59XHJcblxyXG4vKipcclxuICogVG8gYXZvaWQgY2lyY3VsYXIgZGVwZW5kZW5jeSwgcHJvdmlkZSBhbiBpbnRlcmZhY2Ugb2YgYE56Q2FzY2FkZXJDb21wb25lbnRgXHJcbiAqIGZvciBgTnpDYXNjYWRlclNlcnZpY2VgLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBOekNhc2NhZGVyQ29tcG9uZW50QXNTb3VyY2Uge1xyXG4gIGlucHV0VmFsdWU6IHN0cmluZztcclxuICBuelNob3dTZWFyY2g6IE56U2hvd1NlYXJjaE9wdGlvbnMgfCBib29sZWFuO1xyXG4gIG56TGFiZWxQcm9wZXJ0eTogc3RyaW5nO1xyXG4gIG56VmFsdWVQcm9wZXJ0eTogc3RyaW5nO1xyXG4gIG56Q2hhbmdlT25TZWxlY3Q6IGJvb2xlYW47XHJcblxyXG4gIG56Q2hhbmdlT24/KG9wdGlvbjogTnpDYXNjYWRlck9wdGlvbiwgbGV2ZWw6IG51bWJlcik6IGJvb2xlYW47XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBuekxvYWREYXRhPyhub2RlOiBOekNhc2NhZGVyT3B0aW9uLCBpbmRleD86IG51bWJlcik6IFByb21pc2VMaWtlPGFueT47XHJcbn1cclxuIl19