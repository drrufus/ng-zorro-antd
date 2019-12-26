/**
 * @fileoverview added by tsickle
 * Generated from: nz-message-config.ts
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
/**
 * @deprecated This interface has been removed to `ng-zorro-antd/core`. Please migrate to that.
 * @record
 */
export function NzMessageConfigLegacy() { }
if (false) {
    /** @type {?|undefined} */
    NzMessageConfigLegacy.prototype.nzAnimate;
    /** @type {?|undefined} */
    NzMessageConfigLegacy.prototype.nzDuration;
    /** @type {?|undefined} */
    NzMessageConfigLegacy.prototype.nzMaxStack;
    /** @type {?|undefined} */
    NzMessageConfigLegacy.prototype.nzPauseOnHover;
    /** @type {?|undefined} */
    NzMessageConfigLegacy.prototype.nzTop;
}
/** @type {?} */
export var NZ_MESSAGE_DEFAULT_CONFIG = new InjectionToken('NZ_MESSAGE_DEFAULT_CONFIG');
/**
 * @deprecated 9.0.0 - Injection token 'NZ_MESSAGE_CONFIG' is deprecated and will be removed in 9.0.0. Please use 'NzConfigService' instead.
 * @type {?}
 */
export var NZ_MESSAGE_CONFIG = new InjectionToken('NZ_MESSAGE_CONFIG');
var ɵ0 = {
    nzAnimate: true,
    nzDuration: 3000,
    nzMaxStack: 7,
    nzPauseOnHover: true,
    nzTop: 24
};
/** @type {?} */
export var NZ_MESSAGE_DEFAULT_CONFIG_PROVIDER = {
    provide: NZ_MESSAGE_DEFAULT_CONFIG,
    useValue: ɵ0
};
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVzc2FnZS1jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL21lc3NhZ2UvIiwic291cmNlcyI6WyJuei1tZXNzYWdlLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztBQUsvQywyQ0FNQzs7O0lBTEMsMENBQW9COztJQUNwQiwyQ0FBb0I7O0lBQ3BCLDJDQUFvQjs7SUFDcEIsK0NBQXlCOztJQUN6QixzQ0FBd0I7OztBQUcxQixNQUFNLEtBQU8seUJBQXlCLEdBQUcsSUFBSSxjQUFjLENBQXdCLDJCQUEyQixDQUFDOzs7OztBQUsvRyxNQUFNLEtBQU8saUJBQWlCLEdBQUcsSUFBSSxjQUFjLENBQXdCLG1CQUFtQixDQUFDO1NBSW5GO0lBQ1IsU0FBUyxFQUFFLElBQUk7SUFDZixVQUFVLEVBQUUsSUFBSTtJQUNoQixVQUFVLEVBQUUsQ0FBQztJQUNiLGNBQWMsRUFBRSxJQUFJO0lBQ3BCLEtBQUssRUFBRSxFQUFFO0NBQ1Y7O0FBUkgsTUFBTSxLQUFPLGtDQUFrQyxHQUFHO0lBQ2hELE9BQU8sRUFBRSx5QkFBeUI7SUFDbEMsUUFBUSxJQU1QO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogQGRlcHJlY2F0ZWQgVGhpcyBpbnRlcmZhY2UgaGFzIGJlZW4gcmVtb3ZlZCB0byBgbmctem9ycm8tYW50ZC9jb3JlYC4gUGxlYXNlIG1pZ3JhdGUgdG8gdGhhdC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgTnpNZXNzYWdlQ29uZmlnTGVnYWN5IHtcclxuICBuekFuaW1hdGU/OiBib29sZWFuO1xyXG4gIG56RHVyYXRpb24/OiBudW1iZXI7XHJcbiAgbnpNYXhTdGFjaz86IG51bWJlcjtcclxuICBuelBhdXNlT25Ib3Zlcj86IGJvb2xlYW47XHJcbiAgbnpUb3A/OiBudW1iZXIgfCBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBOWl9NRVNTQUdFX0RFRkFVTFRfQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuPE56TWVzc2FnZUNvbmZpZ0xlZ2FjeT4oJ05aX01FU1NBR0VfREVGQVVMVF9DT05GSUcnKTtcclxuXHJcbi8qKlxyXG4gKiBAZGVwcmVjYXRlZCA5LjAuMCAtIEluamVjdGlvbiB0b2tlbiAnTlpfTUVTU0FHRV9DT05GSUcnIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiA5LjAuMC4gUGxlYXNlIHVzZSAnTnpDb25maWdTZXJ2aWNlJyBpbnN0ZWFkLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IE5aX01FU1NBR0VfQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuPE56TWVzc2FnZUNvbmZpZ0xlZ2FjeT4oJ05aX01FU1NBR0VfQ09ORklHJyk7XHJcblxyXG5leHBvcnQgY29uc3QgTlpfTUVTU0FHRV9ERUZBVUxUX0NPTkZJR19QUk9WSURFUiA9IHtcclxuICBwcm92aWRlOiBOWl9NRVNTQUdFX0RFRkFVTFRfQ09ORklHLFxyXG4gIHVzZVZhbHVlOiB7XHJcbiAgICBuekFuaW1hdGU6IHRydWUsXHJcbiAgICBuekR1cmF0aW9uOiAzMDAwLFxyXG4gICAgbnpNYXhTdGFjazogNyxcclxuICAgIG56UGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgbnpUb3A6IDI0XHJcbiAgfVxyXG59O1xyXG4iXX0=