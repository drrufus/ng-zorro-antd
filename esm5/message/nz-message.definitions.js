/**
 * @fileoverview added by tsickle
 * Generated from: nz-message.definitions.ts
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
export function NzMessageDataOptions() { }
if (false) {
    /** @type {?|undefined} */
    NzMessageDataOptions.prototype.nzDuration;
    /** @type {?|undefined} */
    NzMessageDataOptions.prototype.nzAnimate;
    /** @type {?|undefined} */
    NzMessageDataOptions.prototype.nzPauseOnHover;
}
/**
 * Message data for terminal users.
 * @record
 */
export function NzMessageData() { }
if (false) {
    /** @type {?|undefined} */
    NzMessageData.prototype.type;
    /** @type {?|undefined} */
    NzMessageData.prototype.content;
}
/**
 * Filled version of NzMessageData (includes more private properties).
 * @record
 */
export function NzMessageDataFilled() { }
if (false) {
    /** @type {?} */
    NzMessageDataFilled.prototype.messageId;
    /** @type {?} */
    NzMessageDataFilled.prototype.createdAt;
    /** @type {?|undefined} */
    NzMessageDataFilled.prototype.options;
    /** @type {?|undefined} */
    NzMessageDataFilled.prototype.state;
    /** @type {?|undefined} */
    NzMessageDataFilled.prototype.onClose;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVzc2FnZS5kZWZpbml0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvbWVzc2FnZS8iLCJzb3VyY2VzIjpbIm56LW1lc3NhZ2UuZGVmaW5pdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBYUEsMENBSUM7OztJQUhDLDBDQUFvQjs7SUFDcEIseUNBQW9COztJQUNwQiw4Q0FBeUI7Ozs7OztBQU0zQixtQ0FHQzs7O0lBRkMsNkJBQThCOztJQUM5QixnQ0FBcUM7Ozs7OztBQU12Qyx5Q0FPQzs7O0lBTkMsd0NBQWtCOztJQUNsQix3Q0FBZ0I7O0lBRWhCLHNDQUErQjs7SUFDL0Isb0NBQTBCOztJQUMxQixzQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbmV4cG9ydCB0eXBlIE56TWVzc2FnZVR5cGUgPSAnc3VjY2VzcycgfCAnaW5mbycgfCAnd2FybmluZycgfCAnZXJyb3InIHwgJ2xvYWRpbmcnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBOek1lc3NhZ2VEYXRhT3B0aW9ucyB7XHJcbiAgbnpEdXJhdGlvbj86IG51bWJlcjtcclxuICBuekFuaW1hdGU/OiBib29sZWFuO1xyXG4gIG56UGF1c2VPbkhvdmVyPzogYm9vbGVhbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1lc3NhZ2UgZGF0YSBmb3IgdGVybWluYWwgdXNlcnMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIE56TWVzc2FnZURhdGEge1xyXG4gIHR5cGU/OiBOek1lc3NhZ2VUeXBlIHwgc3RyaW5nO1xyXG4gIGNvbnRlbnQ/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEZpbGxlZCB2ZXJzaW9uIG9mIE56TWVzc2FnZURhdGEgKGluY2x1ZGVzIG1vcmUgcHJpdmF0ZSBwcm9wZXJ0aWVzKS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgTnpNZXNzYWdlRGF0YUZpbGxlZCBleHRlbmRzIE56TWVzc2FnZURhdGEge1xyXG4gIG1lc3NhZ2VJZDogc3RyaW5nO1xyXG4gIGNyZWF0ZWRBdDogRGF0ZTtcclxuXHJcbiAgb3B0aW9ucz86IE56TWVzc2FnZURhdGFPcHRpb25zO1xyXG4gIHN0YXRlPzogJ2VudGVyJyB8ICdsZWF2ZSc7XHJcbiAgb25DbG9zZT86IFN1YmplY3Q8Ym9vbGVhbj47XHJcbn1cclxuIl19