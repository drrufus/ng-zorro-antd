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
import { NzI18nService } from './nz-i18n.service';
import * as ɵngcc0 from '@angular/core';
var NzI18nPipe = /** @class */ (function () {
    function NzI18nPipe(_locale) {
        this._locale = _locale;
    }
    /**
     * @param {?} path
     * @param {?=} keyValue
     * @return {?}
     */
    NzI18nPipe.prototype.transform = /**
     * @param {?} path
     * @param {?=} keyValue
     * @return {?}
     */
    function (path, keyValue) {
        return this._locale.translate(path, keyValue);
    };
    /** @nocollapse */
    NzI18nPipe.ctorParameters = function () { return [
        { type: NzI18nService }
    ]; };
NzI18nPipe.ɵfac = function NzI18nPipe_Factory(t) { return new (t || NzI18nPipe)(ɵngcc0.ɵɵdirectiveInject(NzI18nService)); };
NzI18nPipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "nzI18n", type: NzI18nPipe, pure: true });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzI18nPipe, [{
        type: Pipe,
        args: [{
                name: 'nzI18n'
            }]
    }], function () { return [{ type: NzI18nService }]; }, null); })();
    return NzI18nPipe;
}());
export { NzI18nPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzI18nPipe.prototype._locale;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaTE4bi5waXBlLmpzIiwic291cmNlcyI6WyJuZzovbmctem9ycm8tYW50ZC9pMThuL256LWkxOG4ucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7QUFFbEQ7SUFJRSxvQkFBb0IsT0FBc0I7UUFBdEIsWUFBTyxHQUFQLE9BQU8sQ0FBZTtJQUFHLENBQUM7Ozs7OztJQUU5Qyw4QkFBUzs7Ozs7SUFBVCxVQUFVLElBQVksRUFBRSxRQUFpQjtRQUN2QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNoRCxDQUFDLENBQ0gsQUFOUzs7dUJBSFIsSUFBSSxTQUFDO0dBQ0osSUFBSSxFQUFFLFFBQVEsREFIUCxhQUFhO0dBSXJCOzs7Ozs7Ozt1RUFKaUM7SUFXbEMsaUJBQUM7Q0FBQSxBQVRELElBU0M7U0FOWSxVQUFVOzs7Ozs7SUFDVCw2QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICcuL256LWkxOG4uc2VydmljZSc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ256STE4bidcclxufSlcclxuZXhwb3J0IGNsYXNzIE56STE4blBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9sb2NhbGU6IE56STE4blNlcnZpY2UpIHt9XHJcblxyXG4gIHRyYW5zZm9ybShwYXRoOiBzdHJpbmcsIGtleVZhbHVlPzogb2JqZWN0KTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9sb2NhbGUudHJhbnNsYXRlKHBhdGgsIGtleVZhbHVlKTtcclxuICB9XHJcbn1cclxuIl19