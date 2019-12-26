/**
 * @fileoverview added by tsickle
 * Generated from: nz-code-editor.definitions.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { InjectionToken } from '@angular/core';
/** @enum {string} */
const NzCodeEditorLoadingStatus = {
    UNLOAD: "unload",
    LOADING: "loading",
    LOADED: "LOADED",
};
export { NzCodeEditorLoadingStatus };
/**
 * @record
 */
export function NzCodeEditorConfig() { }
if (false) {
    /** @type {?|undefined} */
    NzCodeEditorConfig.prototype.assetsRoot;
    /** @type {?|undefined} */
    NzCodeEditorConfig.prototype.defaultEditorOption;
    /** @type {?|undefined} */
    NzCodeEditorConfig.prototype.useStaticLoading;
    /**
     * @return {?}
     */
    NzCodeEditorConfig.prototype.onLoad = function () { };
    /**
     * @return {?}
     */
    NzCodeEditorConfig.prototype.onFirstEditorInit = function () { };
    /**
     * @return {?}
     */
    NzCodeEditorConfig.prototype.onInit = function () { };
}
/** @type {?} */
export const NZ_CODE_EDITOR_CONFIG = new InjectionToken('nz-code-editor-config', {
    providedIn: 'root',
    factory: NZ_CODE_EDITOR_CONFIG_FACTORY
});
/**
 * @return {?}
 */
export function NZ_CODE_EDITOR_CONFIG_FACTORY() {
    return {};
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29kZS1lZGl0b3IuZGVmaW5pdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvZGUtZWRpdG9yLyIsInNvdXJjZXMiOlsibnotY29kZS1lZGl0b3IuZGVmaW5pdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFZL0MsTUFBWSx5QkFBeUI7SUFDbkMsTUFBTSxVQUFXO0lBQ2pCLE9BQU8sV0FBWTtJQUNuQixNQUFNLFVBQVc7RUFDbEI7Ozs7O0FBRUQsd0NBUUM7OztJQVBDLHdDQUE4Qjs7SUFDOUIsaURBQTBDOztJQUMxQyw4Q0FBMkI7Ozs7SUFFM0Isc0RBQWdCOzs7O0lBQ2hCLGlFQUEyQjs7OztJQUMzQixzREFBZ0I7OztBQUdsQixNQUFNLE9BQU8scUJBQXFCLEdBQUcsSUFBSSxjQUFjLENBQXFCLHVCQUF1QixFQUFFO0lBQ25HLFVBQVUsRUFBRSxNQUFNO0lBQ2xCLE9BQU8sRUFBRSw2QkFBNkI7Q0FDdkMsQ0FBQzs7OztBQUVGLE1BQU0sVUFBVSw2QkFBNkI7SUFDM0MsT0FBTyxFQUFFLENBQUM7QUFDWixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTYWZlVXJsIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IGVkaXRvciB9IGZyb20gJ21vbmFjby1lZGl0b3InO1xyXG5pbXBvcnQgSUVkaXRvckNvbnN0cnVjdGlvbk9wdGlvbnMgPSBlZGl0b3IuSUVkaXRvckNvbnN0cnVjdGlvbk9wdGlvbnM7XHJcbmltcG9ydCBJRGlmZkVkaXRvckNvbnN0cnVjdGlvbk9wdGlvbnMgPSBlZGl0b3IuSURpZmZFZGl0b3JDb25zdHJ1Y3Rpb25PcHRpb25zO1xyXG5cclxuZXhwb3J0IHR5cGUgRWRpdG9yT3B0aW9ucyA9IElFZGl0b3JDb25zdHJ1Y3Rpb25PcHRpb25zO1xyXG5leHBvcnQgdHlwZSBEaWZmRWRpdG9yT3B0aW9ucyA9IElEaWZmRWRpdG9yQ29uc3RydWN0aW9uT3B0aW9ucztcclxuZXhwb3J0IHR5cGUgSm9pbmVkRWRpdG9yT3B0aW9ucyA9IEVkaXRvck9wdGlvbnMgfCBEaWZmRWRpdG9yT3B0aW9ucztcclxuXHJcbmV4cG9ydCB0eXBlIE56RWRpdG9yTW9kZSA9ICdub3JtYWwnIHwgJ2RpZmYnO1xyXG5cclxuZXhwb3J0IGVudW0gTnpDb2RlRWRpdG9yTG9hZGluZ1N0YXR1cyB7XHJcbiAgVU5MT0FEID0gJ3VubG9hZCcsXHJcbiAgTE9BRElORyA9ICdsb2FkaW5nJyxcclxuICBMT0FERUQgPSAnTE9BREVEJ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE56Q29kZUVkaXRvckNvbmZpZyB7XHJcbiAgYXNzZXRzUm9vdD86IHN0cmluZyB8IFNhZmVVcmw7XHJcbiAgZGVmYXVsdEVkaXRvck9wdGlvbj86IEpvaW5lZEVkaXRvck9wdGlvbnM7XHJcbiAgdXNlU3RhdGljTG9hZGluZz86IGJvb2xlYW47XHJcblxyXG4gIG9uTG9hZD8oKTogdm9pZDtcclxuICBvbkZpcnN0RWRpdG9ySW5pdD8oKTogdm9pZDtcclxuICBvbkluaXQ/KCk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBOWl9DT0RFX0VESVRPUl9DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48TnpDb2RlRWRpdG9yQ29uZmlnPignbnotY29kZS1lZGl0b3ItY29uZmlnJywge1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxuICBmYWN0b3J5OiBOWl9DT0RFX0VESVRPUl9DT05GSUdfRkFDVE9SWVxyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBOWl9DT0RFX0VESVRPUl9DT05GSUdfRkFDVE9SWSgpOiBOekNvZGVFZGl0b3JDb25maWcge1xyXG4gIHJldHVybiB7fTtcclxufVxyXG4iXX0=