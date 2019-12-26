/**
 * @fileoverview added by tsickle
 * Generated from: nz-i18n.service.ts
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
NzI18nService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NzI18nService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_I18N,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_DATE_LOCALE,] }] }
];
/** @nocollapse */ NzI18nService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzI18nService_Factory() { return new NzI18nService(i0.ɵɵinject(i1.NZ_I18N, 8), i0.ɵɵinject(i1.NZ_DATE_LOCALE, 8)); }, token: NzI18nService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaTE4bi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9pMThuLyIsInNvdXJjZXMiOlsibnotaTE4bi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxJQUFJLEVBQW1CLE1BQU0sb0JBQW9CLENBQUM7QUFFM0QsT0FBTyxLQUFLLE1BQU0sbUJBQW1CLENBQUM7QUFFdEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBSzFELE1BQU0sT0FBTyxhQUFhOzs7OztJQVN4QixZQUMrQixNQUF1QixFQUNoQixVQUFzQjtRQVRwRCxZQUFPLEdBQUcsSUFBSSxlQUFlLENBQWtCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQVduRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7O0lBVkQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3JDLENBQUM7Ozs7Ozs7OztJQWFELFNBQVMsQ0FBQyxJQUFZLEVBQUUsSUFBVTs7O1lBRTVCLE9BQU8sR0FBRyxtQkFBQSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEVBQVU7UUFDL0QsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUU7WUFDL0IsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPOzs7O2dCQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEdBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQzthQUN2RztZQUNELE9BQU8sT0FBTyxDQUFDO1NBQ2hCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7Ozs7Ozs7SUFTRCxTQUFTLENBQUMsTUFBdUI7UUFDL0IsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDekQsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDakQsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsVUFBc0I7UUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVELGFBQWE7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQzs7Ozs7Ozs7SUFRRCxhQUFhLENBQUMsSUFBWSxFQUFFLFlBQWtCOztjQUN0QyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPO1FBRTVFLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDNUIsSUFBSSxDQUFDLDZCQUE2QixJQUFJLGtCQUFrQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU07OztzRUFHWCxDQUFDLENBQUM7U0FDbkU7UUFFRCxPQUFPLE1BQU0sSUFBSSxZQUFZLElBQUksRUFBRSxDQUFDO0lBQ3RDLENBQUM7Ozs7Ozs7O0lBR08sY0FBYyxDQUFDLEdBQW9CLEVBQUUsSUFBWTs7WUFDbkQsR0FBRyxHQUFHLEdBQUc7O2NBQ1AsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOztjQUN2QixLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU07O1lBQ3RCLEtBQUssR0FBRyxDQUFDO1FBQ2IsT0FBTyxHQUFHLElBQUksS0FBSyxHQUFHLEtBQUssRUFBRTtZQUMzQixHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDM0I7UUFDRCxPQUFPLEtBQUssS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3RDLENBQUM7OztZQS9GRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7NENBV0ksUUFBUSxZQUFJLE1BQU0sU0FBQyxPQUFPOzRDQUMxQixRQUFRLFlBQUksTUFBTSxTQUFDLGNBQWM7Ozs7Ozs7O0lBVnBDLGdDQUFpQzs7Ozs7SUFDakMsZ0NBQXFFOzs7OztJQUNyRSxtQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyB3YXJuLCBJbmRleGFibGVPYmplY3QgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHpoX0NOIGZyb20gJy4vbGFuZ3VhZ2VzL3poX0NOJztcclxuaW1wb3J0IHsgRGF0ZUxvY2FsZSwgTnpJMThuSW50ZXJmYWNlIH0gZnJvbSAnLi9uei1pMThuLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IE5aX0RBVEVfTE9DQUxFLCBOWl9JMThOIH0gZnJvbSAnLi9uei1pMThuLnRva2VuJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE56STE4blNlcnZpY2Uge1xyXG4gIHByaXZhdGUgX2xvY2FsZTogTnpJMThuSW50ZXJmYWNlO1xyXG4gIHByaXZhdGUgX2NoYW5nZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TnpJMThuSW50ZXJmYWNlPih0aGlzLl9sb2NhbGUpO1xyXG4gIHByaXZhdGUgZGF0ZUxvY2FsZTogRGF0ZUxvY2FsZTtcclxuXHJcbiAgZ2V0IGxvY2FsZUNoYW5nZSgpOiBPYnNlcnZhYmxlPE56STE4bkludGVyZmFjZT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NoYW5nZS5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChOWl9JMThOKSBsb2NhbGU6IE56STE4bkludGVyZmFjZSxcclxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTlpfREFURV9MT0NBTEUpIGRhdGVMb2NhbGU6IERhdGVMb2NhbGVcclxuICApIHtcclxuICAgIHRoaXMuc2V0TG9jYWxlKGxvY2FsZSB8fCB6aF9DTik7XHJcbiAgICB0aGlzLnNldERhdGVMb2NhbGUoZGF0ZUxvY2FsZSB8fCBudWxsKTtcclxuICB9XHJcblxyXG4gIC8vIFtOT1RFXSBQZXJmb3JtYW5jZSBpc3N1ZTogdGhpcyBtZXRob2QgbWF5IGNhbGxlZCBieSBldmVyeSBjaGFuZ2UgZGV0ZWN0aW9uc1xyXG4gIC8vIFRPRE86IGNhY2hlIG1vcmUgZGVlcGx5IHBhdGhzIGZvciBwZXJmb3JtYW5jZVxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cclxuICB0cmFuc2xhdGUocGF0aDogc3RyaW5nLCBkYXRhPzogYW55KTogc3RyaW5nIHtcclxuICAgIC8vIHRoaXMuX2xvZ2dlci5kZWJ1ZyhgW056STE4blNlcnZpY2VdIFRyYW5zbGF0aW5nKCR7dGhpcy5fbG9jYWxlLmxvY2FsZX0pOiAke3BhdGh9YCk7XHJcbiAgICBsZXQgY29udGVudCA9IHRoaXMuX2dldE9iamVjdFBhdGgodGhpcy5fbG9jYWxlLCBwYXRoKSBhcyBzdHJpbmc7XHJcbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaChrZXkgPT4gKGNvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UobmV3IFJlZ0V4cChgJSR7a2V5fSVgLCAnZycpLCBkYXRhW2tleV0pKSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGF0aDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldC9DaGFuZ2UgY3VycmVudCBsb2NhbGUgZ2xvYmFsbHkgdGhyb3VnaG91dCB0aGUgV0hPTEUgYXBwbGljYXRpb25cclxuICAgKiBOT1RFOiBJZiBjYWxsZWQgYXQgcnVudGltZSwgcmVuZGVyZWQgaW50ZXJmYWNlIG1heSBub3QgY2hhbmdlIGFsb25nIHdpdGggdGhlIGxvY2FsZSBjaGFuZ2UsXHJcbiAgICogYmVjYXVzZSB0aGlzIGRvIG5vdCB0cmlnZ2VyIGFub3RoZXIgcmVuZGVyIHNjaGVkdWxlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGxvY2FsZSBUaGUgdHJhbnNsYXRpbmcgbGV0dGVyc1xyXG4gICAqL1xyXG4gIHNldExvY2FsZShsb2NhbGU6IE56STE4bkludGVyZmFjZSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2xvY2FsZSAmJiB0aGlzLl9sb2NhbGUubG9jYWxlID09PSBsb2NhbGUubG9jYWxlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuX2xvY2FsZSA9IGxvY2FsZTtcclxuICAgIHRoaXMuX2NoYW5nZS5uZXh0KGxvY2FsZSk7XHJcbiAgfVxyXG5cclxuICBnZXRMb2NhbGUoKTogTnpJMThuSW50ZXJmYWNlIHtcclxuICAgIHJldHVybiB0aGlzLl9sb2NhbGU7XHJcbiAgfVxyXG5cclxuICBnZXRMb2NhbGVJZCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xvY2FsZSA/IHRoaXMuX2xvY2FsZS5sb2NhbGUgOiAnJztcclxuICB9XHJcblxyXG4gIHNldERhdGVMb2NhbGUoZGF0ZUxvY2FsZTogRGF0ZUxvY2FsZSk6IHZvaWQge1xyXG4gICAgdGhpcy5kYXRlTG9jYWxlID0gZGF0ZUxvY2FsZTtcclxuICB9XHJcblxyXG4gIGdldERhdGVMb2NhbGUoKTogRGF0ZUxvY2FsZSB7XHJcbiAgICByZXR1cm4gdGhpcy5kYXRlTG9jYWxlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGxvY2FsZSBkYXRhXHJcbiAgICogQHBhcmFtIHBhdGggZG90IHBhdGhzIGZvciBmaW5kaW5nIGV4aXN0IHZhbHVlIGZyb20gbG9jYWxlIGRhdGEsIGVnLiBcImEuYi5jXCJcclxuICAgKiBAcGFyYW0gZGVmYXVsdFZhbHVlIGRlZmF1bHQgdmFsdWUgaWYgdGhlIHJlc3VsdCBpcyBub3QgXCJ0cnV0aHlcIlxyXG4gICAqL1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBnZXRMb2NhbGVEYXRhKHBhdGg6IHN0cmluZywgZGVmYXVsdFZhbHVlPzogYW55KTogYW55IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHBhdGggPyB0aGlzLl9nZXRPYmplY3RQYXRoKHRoaXMuX2xvY2FsZSwgcGF0aCkgOiB0aGlzLl9sb2NhbGU7XHJcblxyXG4gICAgaWYgKCFyZXN1bHQgJiYgIWRlZmF1bHRWYWx1ZSkge1xyXG4gICAgICB3YXJuKGBNaXNzaW5nIHRyYW5zbGF0aW9ucyBmb3IgXCIke3BhdGh9XCIgaW4gbGFuZ3VhZ2UgXCIke3RoaXMuX2xvY2FsZS5sb2NhbGV9XCIuXHJcbllvdSBjYW4gdXNlIFwiTnpJMThuU2VydmljZS5zZXRMb2NhbGVcIiBhcyBhIHRlbXBvcmFyeSBmaXguXHJcbldlbGNvbWUgdG8gc3VibWl0IGEgcHVsbCByZXF1ZXN0IHRvIGhlbHAgdXMgb3B0aW1pemUgdGhlIHRyYW5zbGF0aW9ucyFcclxuaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvQ09OVFJJQlVUSU5HLm1kYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdCB8fCBkZWZhdWx0VmFsdWUgfHwge307XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgcHJpdmF0ZSBfZ2V0T2JqZWN0UGF0aChvYmo6IEluZGV4YWJsZU9iamVjdCwgcGF0aDogc3RyaW5nKTogc3RyaW5nIHwgb2JqZWN0IHwgYW55IHtcclxuICAgIGxldCByZXMgPSBvYmo7XHJcbiAgICBjb25zdCBwYXRocyA9IHBhdGguc3BsaXQoJy4nKTtcclxuICAgIGNvbnN0IGRlcHRoID0gcGF0aHMubGVuZ3RoO1xyXG4gICAgbGV0IGluZGV4ID0gMDtcclxuICAgIHdoaWxlIChyZXMgJiYgaW5kZXggPCBkZXB0aCkge1xyXG4gICAgICByZXMgPSByZXNbcGF0aHNbaW5kZXgrK11dO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGluZGV4ID09PSBkZXB0aCA/IHJlcyA6IG51bGw7XHJcbiAgfVxyXG59XHJcbiJdfQ==