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
import { Inject, Injectable, Optional } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { warn } from 'ng-zorro-antd/core';
import zh_CN from './languages/zh_CN';
import { NZ_DATE_LOCALE, NZ_I18N } from './nz-i18n.token';
import * as i0 from "@angular/core";
import * as i1 from "./nz-i18n.token";
import * as ɵngcc0 from '@angular/core';
export class NzI18nService {
    /**
     * @param {?} locale
     * @param {?} dateLocale
     */
    constructor(locale, dateLocale) {
        this._change = new BehaviorSubject(this._locale);
        this.setLocale(locale || zh_CN);
        this.setDateLocale(dateLocale || null);
    }
    /**
     * @return {?}
     */
    get localeChange() {
        return this._change.asObservable();
    }
    // [NOTE] Performance issue: this method may called by every change detections
    // TODO: cache more deeply paths for performance
    /* tslint:disable-next-line:no-any */
    /**
     * @param {?} path
     * @param {?=} data
     * @return {?}
     */
    translate(path, data) {
        // this._logger.debug(`[NzI18nService] Translating(${this._locale.locale}): ${path}`);
        /** @type {?} */
        let content = (/** @type {?} */ (this._getObjectPath(this._locale, path)));
        if (typeof content === 'string') {
            if (data) {
                Object.keys(data).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                key => (content = content.replace(new RegExp(`%${key}%`, 'g'), data[key]))));
            }
            return content;
        }
        return path;
    }
    /**
     * Set/Change current locale globally throughout the WHOLE application
     * NOTE: If called at runtime, rendered interface may not change along with the locale change,
     * because this do not trigger another render schedule.
     *
     * @param {?} locale The translating letters
     * @return {?}
     */
    setLocale(locale) {
        if (this._locale && this._locale.locale === locale.locale) {
            return;
        }
        this._locale = locale;
        this._change.next(locale);
    }
    /**
     * @return {?}
     */
    getLocale() {
        return this._locale;
    }
    /**
     * @return {?}
     */
    getLocaleId() {
        return this._locale ? this._locale.locale : '';
    }
    /**
     * @param {?} dateLocale
     * @return {?}
     */
    setDateLocale(dateLocale) {
        this.dateLocale = dateLocale;
    }
    /**
     * @return {?}
     */
    getDateLocale() {
        return this.dateLocale;
    }
    /**
     * Get locale data
     * @param {?} path dot paths for finding exist value from locale data, eg. "a.b.c"
     * @param {?=} defaultValue default value if the result is not "truthy"
     * @return {?}
     */
    // tslint:disable-next-line:no-any
    getLocaleData(path, defaultValue) {
        /** @type {?} */
        const result = path ? this._getObjectPath(this._locale, path) : this._locale;
        if (!result && !defaultValue) {
            warn(`Missing translations for "${path}" in language "${this._locale.locale}".
You can use "NzI18nService.setLocale" as a temporary fix.
Welcome to submit a pull request to help us optimize the translations!
https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/CONTRIBUTING.md`);
        }
        return result || defaultValue || {};
    }
    // tslint:disable-next-line:no-any
    /**
     * @private
     * @param {?} obj
     * @param {?} path
     * @return {?}
     */
    _getObjectPath(obj, path) {
        /** @type {?} */
        let res = obj;
        /** @type {?} */
        const paths = path.split('.');
        /** @type {?} */
        const depth = paths.length;
        /** @type {?} */
        let index = 0;
        while (res && index < depth) {
            res = res[paths[index++]];
        }
        return index === depth ? res : null;
    }
}
NzI18nService.ɵfac = function NzI18nService_Factory(t) { return new (t || NzI18nService)(ɵngcc0.ɵɵinject(NZ_I18N, 8), ɵngcc0.ɵɵinject(NZ_DATE_LOCALE, 8)); };
NzI18nService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: NzI18nService, factory: NzI18nService.ɵfac, providedIn: 'root' });
/** @nocollapse */
NzI18nService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_I18N,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_DATE_LOCALE,] }] }
];
/** @nocollapse */ NzI18nService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzI18nService_Factory() { return new NzI18nService(i0.ɵɵinject(i1.NZ_I18N, 8), i0.ɵɵinject(i1.NZ_DATE_LOCALE, 8)); }, token: NzI18nService, providedIn: "root" });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzI18nService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [NZ_I18N]
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [NZ_DATE_LOCALE]
            }] }]; }, null); })();
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzI18nService.prototype._locale;
    /**
     * @type {?}
     * @private
     */
    NzI18nService.prototype._change;
    /**
     * @type {?}
     * @private
     */
    NzI18nService.prototype.dateLocale;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaTE4bi5zZXJ2aWNlLmpzIiwic291cmNlcyI6WyJuZzovbmctem9ycm8tYW50ZC9pMThuL256LWkxOG4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxJQUFJLEVBQW1CLE1BQU0sb0JBQW9CLENBQUM7QUFFM0QsT0FBTyxLQUFLLE1BQU0sbUJBQW1CLENBQUM7QUFFdEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7OztBQUsxRCxNQUFNLE9BQU8sYUFBYTs7Ozs7SUFTeEIsWUFDK0IsTUFBdUIsRUFDaEIsVUFBc0I7UUFUcEQsWUFBTyxHQUFHLElBQUksZUFBZSxDQUFrQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFXbkUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7OztJQVZELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNyQyxDQUFDOzs7Ozs7Ozs7SUFhRCxTQUFTLENBQUMsSUFBWSxFQUFFLElBQVU7OztZQUU1QixPQUFPLEdBQUcsbUJBQUEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxFQUFVO1FBQy9ELElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO1lBQy9CLElBQUksSUFBSSxFQUFFO2dCQUNSLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTzs7OztnQkFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxHQUFHLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7YUFDdkc7WUFDRCxPQUFPLE9BQU8sQ0FBQztTQUNoQjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7Ozs7O0lBU0QsU0FBUyxDQUFDLE1BQXVCO1FBQy9CLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ3pELE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1AsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2pELENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLFVBQXNCO1FBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQy9CLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7Ozs7Ozs7O0lBUUQsYUFBYSxDQUFDLElBQVksRUFBRSxZQUFrQjs7Y0FDdEMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTztRQUU1RSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQzVCLElBQUksQ0FBQyw2QkFBNkIsSUFBSSxrQkFBa0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNOzs7c0VBR1gsQ0FBQyxDQUFDO1NBQ25FO1FBRUQsT0FBTyxNQUFNLElBQUksWUFBWSxJQUFJLEVBQUUsQ0FBQztJQUN0QyxDQUFDOzs7Ozs7OztJQUdPLGNBQWMsQ0FBQyxHQUFvQixFQUFFLElBQVk7O1lBQ25ELEdBQUcsR0FBRyxHQUFHOztjQUNQLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7Y0FDdkIsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNOztZQUN0QixLQUFLLEdBQUcsQ0FBQztRQUNiLE9BQU8sR0FBRyxJQUFJLEtBQUssR0FBRyxLQUFLLEVBQUU7WUFDM0IsR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzNCO1FBQ0QsT0FBTyxLQUFLLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN0QyxDQUFDOzs7Q0FDRiwwQ0FoR0EsVUFBVSxTQUFDLGtCQUNWLFVBQVUsRUFBRSxNQUFNLGNBQ25CLFdBQ0k7Ozs0Q0FVQSxRQUFRLFlBQUksTUFBTSxTQUFDLE9BQU87NENBQzFCLFFBQVEsWUFBSSxNQUFNLFNBQUMsY0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQVFyQjs7Ozs7O0lBbEJmLGdDQUFpQzs7Ozs7SUFDakMsZ0NBQXFFOzs7OztJQUNyRSxtQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyB3YXJuLCBJbmRleGFibGVPYmplY3QgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHpoX0NOIGZyb20gJy4vbGFuZ3VhZ2VzL3poX0NOJztcclxuaW1wb3J0IHsgRGF0ZUxvY2FsZSwgTnpJMThuSW50ZXJmYWNlIH0gZnJvbSAnLi9uei1pMThuLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IE5aX0RBVEVfTE9DQUxFLCBOWl9JMThOIH0gZnJvbSAnLi9uei1pMThuLnRva2VuJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE56STE4blNlcnZpY2Uge1xyXG4gIHByaXZhdGUgX2xvY2FsZTogTnpJMThuSW50ZXJmYWNlO1xyXG4gIHByaXZhdGUgX2NoYW5nZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TnpJMThuSW50ZXJmYWNlPih0aGlzLl9sb2NhbGUpO1xyXG4gIHByaXZhdGUgZGF0ZUxvY2FsZTogRGF0ZUxvY2FsZTtcclxuXHJcbiAgZ2V0IGxvY2FsZUNoYW5nZSgpOiBPYnNlcnZhYmxlPE56STE4bkludGVyZmFjZT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NoYW5nZS5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChOWl9JMThOKSBsb2NhbGU6IE56STE4bkludGVyZmFjZSxcclxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTlpfREFURV9MT0NBTEUpIGRhdGVMb2NhbGU6IERhdGVMb2NhbGVcclxuICApIHtcclxuICAgIHRoaXMuc2V0TG9jYWxlKGxvY2FsZSB8fCB6aF9DTik7XHJcbiAgICB0aGlzLnNldERhdGVMb2NhbGUoZGF0ZUxvY2FsZSB8fCBudWxsKTtcclxuICB9XHJcblxyXG4gIC8vIFtOT1RFXSBQZXJmb3JtYW5jZSBpc3N1ZTogdGhpcyBtZXRob2QgbWF5IGNhbGxlZCBieSBldmVyeSBjaGFuZ2UgZGV0ZWN0aW9uc1xyXG4gIC8vIFRPRE86IGNhY2hlIG1vcmUgZGVlcGx5IHBhdGhzIGZvciBwZXJmb3JtYW5jZVxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cclxuICB0cmFuc2xhdGUocGF0aDogc3RyaW5nLCBkYXRhPzogYW55KTogc3RyaW5nIHtcclxuICAgIC8vIHRoaXMuX2xvZ2dlci5kZWJ1ZyhgW056STE4blNlcnZpY2VdIFRyYW5zbGF0aW5nKCR7dGhpcy5fbG9jYWxlLmxvY2FsZX0pOiAke3BhdGh9YCk7XHJcbiAgICBsZXQgY29udGVudCA9IHRoaXMuX2dldE9iamVjdFBhdGgodGhpcy5fbG9jYWxlLCBwYXRoKSBhcyBzdHJpbmc7XHJcbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaChrZXkgPT4gKGNvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UobmV3IFJlZ0V4cChgJSR7a2V5fSVgLCAnZycpLCBkYXRhW2tleV0pKSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGF0aDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldC9DaGFuZ2UgY3VycmVudCBsb2NhbGUgZ2xvYmFsbHkgdGhyb3VnaG91dCB0aGUgV0hPTEUgYXBwbGljYXRpb25cclxuICAgKiBOT1RFOiBJZiBjYWxsZWQgYXQgcnVudGltZSwgcmVuZGVyZWQgaW50ZXJmYWNlIG1heSBub3QgY2hhbmdlIGFsb25nIHdpdGggdGhlIGxvY2FsZSBjaGFuZ2UsXHJcbiAgICogYmVjYXVzZSB0aGlzIGRvIG5vdCB0cmlnZ2VyIGFub3RoZXIgcmVuZGVyIHNjaGVkdWxlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGxvY2FsZSBUaGUgdHJhbnNsYXRpbmcgbGV0dGVyc1xyXG4gICAqL1xyXG4gIHNldExvY2FsZShsb2NhbGU6IE56STE4bkludGVyZmFjZSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2xvY2FsZSAmJiB0aGlzLl9sb2NhbGUubG9jYWxlID09PSBsb2NhbGUubG9jYWxlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuX2xvY2FsZSA9IGxvY2FsZTtcclxuICAgIHRoaXMuX2NoYW5nZS5uZXh0KGxvY2FsZSk7XHJcbiAgfVxyXG5cclxuICBnZXRMb2NhbGUoKTogTnpJMThuSW50ZXJmYWNlIHtcclxuICAgIHJldHVybiB0aGlzLl9sb2NhbGU7XHJcbiAgfVxyXG5cclxuICBnZXRMb2NhbGVJZCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xvY2FsZSA/IHRoaXMuX2xvY2FsZS5sb2NhbGUgOiAnJztcclxuICB9XHJcblxyXG4gIHNldERhdGVMb2NhbGUoZGF0ZUxvY2FsZTogRGF0ZUxvY2FsZSk6IHZvaWQge1xyXG4gICAgdGhpcy5kYXRlTG9jYWxlID0gZGF0ZUxvY2FsZTtcclxuICB9XHJcblxyXG4gIGdldERhdGVMb2NhbGUoKTogRGF0ZUxvY2FsZSB7XHJcbiAgICByZXR1cm4gdGhpcy5kYXRlTG9jYWxlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGxvY2FsZSBkYXRhXHJcbiAgICogQHBhcmFtIHBhdGggZG90IHBhdGhzIGZvciBmaW5kaW5nIGV4aXN0IHZhbHVlIGZyb20gbG9jYWxlIGRhdGEsIGVnLiBcImEuYi5jXCJcclxuICAgKiBAcGFyYW0gZGVmYXVsdFZhbHVlIGRlZmF1bHQgdmFsdWUgaWYgdGhlIHJlc3VsdCBpcyBub3QgXCJ0cnV0aHlcIlxyXG4gICAqL1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBnZXRMb2NhbGVEYXRhKHBhdGg6IHN0cmluZywgZGVmYXVsdFZhbHVlPzogYW55KTogYW55IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHBhdGggPyB0aGlzLl9nZXRPYmplY3RQYXRoKHRoaXMuX2xvY2FsZSwgcGF0aCkgOiB0aGlzLl9sb2NhbGU7XHJcblxyXG4gICAgaWYgKCFyZXN1bHQgJiYgIWRlZmF1bHRWYWx1ZSkge1xyXG4gICAgICB3YXJuKGBNaXNzaW5nIHRyYW5zbGF0aW9ucyBmb3IgXCIke3BhdGh9XCIgaW4gbGFuZ3VhZ2UgXCIke3RoaXMuX2xvY2FsZS5sb2NhbGV9XCIuXHJcbllvdSBjYW4gdXNlIFwiTnpJMThuU2VydmljZS5zZXRMb2NhbGVcIiBhcyBhIHRlbXBvcmFyeSBmaXguXHJcbldlbGNvbWUgdG8gc3VibWl0IGEgcHVsbCByZXF1ZXN0IHRvIGhlbHAgdXMgb3B0aW1pemUgdGhlIHRyYW5zbGF0aW9ucyFcclxuaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvQ09OVFJJQlVUSU5HLm1kYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdCB8fCBkZWZhdWx0VmFsdWUgfHwge307XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgcHJpdmF0ZSBfZ2V0T2JqZWN0UGF0aChvYmo6IEluZGV4YWJsZU9iamVjdCwgcGF0aDogc3RyaW5nKTogc3RyaW5nIHwgb2JqZWN0IHwgYW55IHtcclxuICAgIGxldCByZXMgPSBvYmo7XHJcbiAgICBjb25zdCBwYXRocyA9IHBhdGguc3BsaXQoJy4nKTtcclxuICAgIGNvbnN0IGRlcHRoID0gcGF0aHMubGVuZ3RoO1xyXG4gICAgbGV0IGluZGV4ID0gMDtcclxuICAgIHdoaWxlIChyZXMgJiYgaW5kZXggPCBkZXB0aCkge1xyXG4gICAgICByZXMgPSByZXNbcGF0aHNbaW5kZXgrK11dO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGluZGV4ID09PSBkZXB0aCA/IHJlcyA6IG51bGw7XHJcbiAgfVxyXG59XHJcbiJdfQ==