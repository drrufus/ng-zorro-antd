/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Pipe } from '@angular/core';
import { NzI18nService } from './nz-i18n.service';
import * as i0 from "@angular/core";
import * as i1 from "./nz-i18n.service";
export class NzI18nPipe {
    constructor(_locale) {
        this._locale = _locale;
    }
    transform(path, keyValue) {
        return this._locale.translate(path, keyValue);
    }
}
/** @nocollapse */ NzI18nPipe.ɵfac = function NzI18nPipe_Factory(t) { return new (t || NzI18nPipe)(i0.ɵɵdirectiveInject(i1.NzI18nService)); };
/** @nocollapse */ NzI18nPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "nzI18n", type: NzI18nPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzI18nPipe, [{
        type: Pipe,
        args: [{
                name: 'nzI18n'
            }]
    }], function () { return [{ type: i1.NzI18nService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaTE4bi5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9pMThuLyIsInNvdXJjZXMiOlsibnotaTE4bi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7O0FBS2xELE1BQU0sT0FBTyxVQUFVO0lBQ3JCLFlBQW9CLE9BQXNCO1FBQXRCLFlBQU8sR0FBUCxPQUFPLENBQWU7SUFBRyxDQUFDO0lBRTlDLFNBQVMsQ0FBQyxJQUFZLEVBQUUsUUFBaUI7UUFDdkMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7b0VBTFUsVUFBVTsyREFBVixVQUFVO2tEQUFWLFVBQVU7Y0FIdEIsSUFBSTtlQUFDO2dCQUNKLElBQUksRUFBRSxRQUFRO2FBQ2YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICcuL256LWkxOG4uc2VydmljZSc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ256STE4bidcclxufSlcclxuZXhwb3J0IGNsYXNzIE56STE4blBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9sb2NhbGU6IE56STE4blNlcnZpY2UpIHt9XHJcblxyXG4gIHRyYW5zZm9ybShwYXRoOiBzdHJpbmcsIGtleVZhbHVlPzogb2JqZWN0KTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9sb2NhbGUudHJhbnNsYXRlKHBhdGgsIGtleVZhbHVlKTtcclxuICB9XHJcbn1cclxuIl19