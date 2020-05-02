/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Observable } from 'rxjs';
import { DateLocale, NzI18nInterface } from './nz-i18n.interface';
import * as ɵngcc0 from '@angular/core';
export declare class NzI18nService {
    private _locale;
    private _change;
    private dateLocale;
    readonly localeChange: Observable<NzI18nInterface>;
    constructor(locale: NzI18nInterface, dateLocale: DateLocale);
    translate(path: string, data?: any): string;
    /**
     * Set/Change current locale globally throughout the WHOLE application
     * NOTE: If called at runtime, rendered interface may not change along with the locale change,
     * because this do not trigger another render schedule.
     *
     * @param locale The translating letters
     */
    setLocale(locale: NzI18nInterface): void;
    getLocale(): NzI18nInterface;
    getLocaleId(): string;
    setDateLocale(dateLocale: DateLocale): void;
    getDateLocale(): DateLocale;
    /**
     * Get locale data
     * @param path dot paths for finding exist value from locale data, eg. "a.b.c"
     * @param defaultValue default value if the result is not "truthy"
     */
    getLocaleData(path: string, defaultValue?: any): any;
    private _getObjectPath;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzI18nService, [{ optional: true; }, { optional: true; }]>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NzI18nService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaTE4bi5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbIm56LWkxOG4uc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQkEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBEYXRlTG9jYWxlLCBOekkxOG5JbnRlcmZhY2UgfSBmcm9tICcuL256LWkxOG4uaW50ZXJmYWNlJztcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTnpJMThuU2VydmljZSB7XHJcbiAgICBwcml2YXRlIF9sb2NhbGU7XHJcbiAgICBwcml2YXRlIF9jaGFuZ2U7XHJcbiAgICBwcml2YXRlIGRhdGVMb2NhbGU7XHJcbiAgICByZWFkb25seSBsb2NhbGVDaGFuZ2U6IE9ic2VydmFibGU8TnpJMThuSW50ZXJmYWNlPjtcclxuICAgIGNvbnN0cnVjdG9yKGxvY2FsZTogTnpJMThuSW50ZXJmYWNlLCBkYXRlTG9jYWxlOiBEYXRlTG9jYWxlKTtcclxuICAgIHRyYW5zbGF0ZShwYXRoOiBzdHJpbmcsIGRhdGE/OiBhbnkpOiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIFNldC9DaGFuZ2UgY3VycmVudCBsb2NhbGUgZ2xvYmFsbHkgdGhyb3VnaG91dCB0aGUgV0hPTEUgYXBwbGljYXRpb25cclxuICAgICAqIE5PVEU6IElmIGNhbGxlZCBhdCBydW50aW1lLCByZW5kZXJlZCBpbnRlcmZhY2UgbWF5IG5vdCBjaGFuZ2UgYWxvbmcgd2l0aCB0aGUgbG9jYWxlIGNoYW5nZSxcclxuICAgICAqIGJlY2F1c2UgdGhpcyBkbyBub3QgdHJpZ2dlciBhbm90aGVyIHJlbmRlciBzY2hlZHVsZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbG9jYWxlIFRoZSB0cmFuc2xhdGluZyBsZXR0ZXJzXHJcbiAgICAgKi9cclxuICAgIHNldExvY2FsZShsb2NhbGU6IE56STE4bkludGVyZmFjZSk6IHZvaWQ7XHJcbiAgICBnZXRMb2NhbGUoKTogTnpJMThuSW50ZXJmYWNlO1xyXG4gICAgZ2V0TG9jYWxlSWQoKTogc3RyaW5nO1xyXG4gICAgc2V0RGF0ZUxvY2FsZShkYXRlTG9jYWxlOiBEYXRlTG9jYWxlKTogdm9pZDtcclxuICAgIGdldERhdGVMb2NhbGUoKTogRGF0ZUxvY2FsZTtcclxuICAgIC8qKlxyXG4gICAgICogR2V0IGxvY2FsZSBkYXRhXHJcbiAgICAgKiBAcGFyYW0gcGF0aCBkb3QgcGF0aHMgZm9yIGZpbmRpbmcgZXhpc3QgdmFsdWUgZnJvbSBsb2NhbGUgZGF0YSwgZWcuIFwiYS5iLmNcIlxyXG4gICAgICogQHBhcmFtIGRlZmF1bHRWYWx1ZSBkZWZhdWx0IHZhbHVlIGlmIHRoZSByZXN1bHQgaXMgbm90IFwidHJ1dGh5XCJcclxuICAgICAqL1xyXG4gICAgZ2V0TG9jYWxlRGF0YShwYXRoOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IGFueSk6IGFueTtcclxuICAgIHByaXZhdGUgX2dldE9iamVjdFBhdGg7XHJcbn1cclxuIl19