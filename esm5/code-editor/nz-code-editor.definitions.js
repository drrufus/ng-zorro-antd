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
import { InjectionToken } from '@angular/core';
/** @enum {string} */
var NzCodeEditorLoadingStatus = {
    UNLOAD: 'unload',
    LOADING: 'loading',
    LOADED: 'LOADED',
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
export var NZ_CODE_EDITOR_CONFIG = new InjectionToken('nz-code-editor-config', {
    providedIn: 'root',
    factory: NZ_CODE_EDITOR_CONFIG_FACTORY
});
/**
 * @return {?}
 */
export function NZ_CODE_EDITOR_CONFIG_FACTORY() {
    return {};
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29kZS1lZGl0b3IuZGVmaW5pdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvZGUtZWRpdG9yLyIsInNvdXJjZXMiOlsibnotY29kZS1lZGl0b3IuZGVmaW5pdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7SUFhN0MsUUFBUyxRQUFRO0lBQ2pCLFNBQVUsU0FBUztJQUNuQixRQUFTLFFBQVE7Ozs7OztBQUduQix3Q0FRQzs7O0lBUEMsd0NBQThCOztJQUM5QixpREFBMEM7O0lBQzFDLDhDQUEyQjs7OztJQUUzQixzREFBZ0I7Ozs7SUFDaEIsaUVBQTJCOzs7O0lBQzNCLHNEQUFnQjs7O0FBR2xCLE1BQU0sS0FBTyxxQkFBcUIsR0FBRyxJQUFJLGNBQWMsQ0FBcUIsdUJBQXVCLEVBQUU7SUFDbkcsVUFBVSxFQUFFLE1BQU07SUFDbEIsT0FBTyxFQUFFLDZCQUE2QjtDQUN2QyxDQUFDOzs7O0FBRUYsTUFBTSxVQUFVLDZCQUE2QjtJQUMzQyxPQUFPLEVBQUUsQ0FBQztBQUNaLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNhZmVVcmwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgZWRpdG9yIH0gZnJvbSAnbW9uYWNvLWVkaXRvcic7XHJcbmltcG9ydCBJRWRpdG9yQ29uc3RydWN0aW9uT3B0aW9ucyA9IGVkaXRvci5JRWRpdG9yQ29uc3RydWN0aW9uT3B0aW9ucztcclxuaW1wb3J0IElEaWZmRWRpdG9yQ29uc3RydWN0aW9uT3B0aW9ucyA9IGVkaXRvci5JRGlmZkVkaXRvckNvbnN0cnVjdGlvbk9wdGlvbnM7XHJcblxyXG5leHBvcnQgdHlwZSBFZGl0b3JPcHRpb25zID0gSUVkaXRvckNvbnN0cnVjdGlvbk9wdGlvbnM7XHJcbmV4cG9ydCB0eXBlIERpZmZFZGl0b3JPcHRpb25zID0gSURpZmZFZGl0b3JDb25zdHJ1Y3Rpb25PcHRpb25zO1xyXG5leHBvcnQgdHlwZSBKb2luZWRFZGl0b3JPcHRpb25zID0gRWRpdG9yT3B0aW9ucyB8IERpZmZFZGl0b3JPcHRpb25zO1xyXG5cclxuZXhwb3J0IHR5cGUgTnpFZGl0b3JNb2RlID0gJ25vcm1hbCcgfCAnZGlmZic7XHJcblxyXG5leHBvcnQgZW51bSBOekNvZGVFZGl0b3JMb2FkaW5nU3RhdHVzIHtcclxuICBVTkxPQUQgPSAndW5sb2FkJyxcclxuICBMT0FESU5HID0gJ2xvYWRpbmcnLFxyXG4gIExPQURFRCA9ICdMT0FERUQnXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTnpDb2RlRWRpdG9yQ29uZmlnIHtcclxuICBhc3NldHNSb290Pzogc3RyaW5nIHwgU2FmZVVybDtcclxuICBkZWZhdWx0RWRpdG9yT3B0aW9uPzogSm9pbmVkRWRpdG9yT3B0aW9ucztcclxuICB1c2VTdGF0aWNMb2FkaW5nPzogYm9vbGVhbjtcclxuXHJcbiAgb25Mb2FkPygpOiB2b2lkO1xyXG4gIG9uRmlyc3RFZGl0b3JJbml0PygpOiB2b2lkO1xyXG4gIG9uSW5pdD8oKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE5aX0NPREVfRURJVE9SX0NPTkZJRyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxOekNvZGVFZGl0b3JDb25maWc+KCduei1jb2RlLWVkaXRvci1jb25maWcnLCB7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG4gIGZhY3Rvcnk6IE5aX0NPREVfRURJVE9SX0NPTkZJR19GQUNUT1JZXHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE5aX0NPREVfRURJVE9SX0NPTkZJR19GQUNUT1JZKCk6IE56Q29kZUVkaXRvckNvbmZpZyB7XHJcbiAgcmV0dXJuIHt9O1xyXG59XHJcbiJdfQ==