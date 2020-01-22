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
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';
/**
 * @return {?}
 */
export function inNextTick() {
    /** @type {?} */
    var timer = new Subject();
    Promise.resolve().then((/**
     * @return {?}
     */
    function () { return timer.next(); }));
    return timer.pipe(take(1));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGljay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbInV0aWwvdGljay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRXRDLE1BQU0sVUFBVSxVQUFVOztRQUNsQixLQUFLLEdBQUcsSUFBSSxPQUFPLEVBQVE7SUFDakMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUk7OztJQUFDLGNBQU0sT0FBQSxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQVosQ0FBWSxFQUFDLENBQUM7SUFDM0MsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbk5leHRUaWNrKCk6IE9ic2VydmFibGU8dm9pZD4ge1xyXG4gIGNvbnN0IHRpbWVyID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRpbWVyLm5leHQoKSk7XHJcbiAgcmV0dXJuIHRpbWVyLnBpcGUodGFrZSgxKSk7XHJcbn1cclxuIl19