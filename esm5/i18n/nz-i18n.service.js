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
var NzI18nService = /** @class */ (function () {
    function NzI18nService(locale, dateLocale) {
        this._change = new BehaviorSubject(this._locale);
        this.setLocale(locale || zh_CN);
        this.setDateLocale(dateLocale || null);
    }
    Object.defineProperty(NzI18nService.prototype, "localeChange", {
        get: function () {
            return this._change.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    // [NOTE] Performance issue: this method may called by every change detections
    // TODO: cache more deeply paths for performance
    /* tslint:disable-next-line:no-any */
    NzI18nService.prototype.translate = function (path, data) {
        // this._logger.debug(`[NzI18nService] Translating(${this._locale.locale}): ${path}`);
        var content = this._getObjectPath(this._locale, path);
        if (typeof content === 'string') {
            if (data) {
                Object.keys(data).forEach(function (key) { return (content = content.replace(new RegExp("%" + key + "%", 'g'), data[key])); });
            }
            return content;
        }
        return path;
    };
    /**
     * Set/Change current locale globally throughout the WHOLE application
     * NOTE: If called at runtime, rendered interface may not change along with the locale change,
     * because this do not trigger another render schedule.
     *
     * @param locale The translating letters
     */
    NzI18nService.prototype.setLocale = function (locale) {
        if (this._locale && this._locale.locale === locale.locale) {
            return;
        }
        this._locale = locale;
        this._change.next(locale);
    };
    NzI18nService.prototype.getLocale = function () {
        return this._locale;
    };
    NzI18nService.prototype.getLocaleId = function () {
        return this._locale ? this._locale.locale : '';
    };
    NzI18nService.prototype.setDateLocale = function (dateLocale) {
        this.dateLocale = dateLocale;
    };
    NzI18nService.prototype.getDateLocale = function () {
        return this.dateLocale;
    };
    /**
     * Get locale data
     * @param path dot paths for finding exist value from locale data, eg. "a.b.c"
     * @param defaultValue default value if the result is not "truthy"
     */
    // tslint:disable-next-line:no-any
    NzI18nService.prototype.getLocaleData = function (path, defaultValue) {
        var result = path ? this._getObjectPath(this._locale, path) : this._locale;
        if (!result && !defaultValue) {
            warn("Missing translations for \"" + path + "\" in language \"" + this._locale.locale + "\".\nYou can use \"NzI18nService.setLocale\" as a temporary fix.\nWelcome to submit a pull request to help us optimize the translations!\nhttps://github.com/NG-ZORRO/ng-zorro-antd/blob/master/CONTRIBUTING.md");
        }
        return result || defaultValue || {};
    };
    // tslint:disable-next-line:no-any
    NzI18nService.prototype._getObjectPath = function (obj, path) {
        var res = obj;
        var paths = path.split('.');
        var depth = paths.length;
        var index = 0;
        while (res && index < depth) {
            res = res[paths[index++]];
        }
        return index === depth ? res : null;
    };
    /** @nocollapse */ NzI18nService.ɵfac = function NzI18nService_Factory(t) { return new (t || NzI18nService)(i0.ɵɵinject(NZ_I18N, 8), i0.ɵɵinject(NZ_DATE_LOCALE, 8)); };
    /** @nocollapse */ NzI18nService.ɵprov = i0.ɵɵdefineInjectable({ token: NzI18nService, factory: NzI18nService.ɵfac, providedIn: 'root' });
    return NzI18nService;
}());
export { NzI18nService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzI18nService, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaTE4bi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9pMThuLyIsInNvdXJjZXMiOlsibnotaTE4bi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBRW5ELE9BQU8sRUFBbUIsSUFBSSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFM0QsT0FBTyxLQUFLLE1BQU0sbUJBQW1CLENBQUM7QUFFdEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFFMUQ7SUFZRSx1QkFBeUMsTUFBdUIsRUFBc0MsVUFBc0I7UUFQcEgsWUFBTyxHQUFHLElBQUksZUFBZSxDQUFrQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFRbkUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQVBELHNCQUFJLHVDQUFZO2FBQWhCO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3JDLENBQUM7OztPQUFBO0lBT0QsOEVBQThFO0lBQzlFLGdEQUFnRDtJQUNoRCxxQ0FBcUM7SUFDckMsaUNBQVMsR0FBVCxVQUFVLElBQVksRUFBRSxJQUFVO1FBQ2hDLHNGQUFzRjtRQUN0RixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFXLENBQUM7UUFDaEUsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUU7WUFDL0IsSUFBSSxJQUFJLEVBQUU7Z0JB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c291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgSW5kZXhhYmxlT2JqZWN0LCB3YXJuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB6aF9DTiBmcm9tICcuL2xhbmd1YWdlcy96aF9DTic7XHJcbmltcG9ydCB7IERhdGVMb2NhbGUsIE56STE4bkludGVyZmFjZSB9IGZyb20gJy4vbnotaTE4bi5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBOWl9EQVRFX0xPQ0FMRSwgTlpfSTE4TiB9IGZyb20gJy4vbnotaTE4bi50b2tlbic7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekkxOG5TZXJ2aWNlIHtcclxuICBwcml2YXRlIF9sb2NhbGU6IE56STE4bkludGVyZmFjZTtcclxuICBwcml2YXRlIF9jaGFuZ2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PE56STE4bkludGVyZmFjZT4odGhpcy5fbG9jYWxlKTtcclxuICBwcml2YXRlIGRhdGVMb2NhbGU6IERhdGVMb2NhbGU7XHJcblxyXG4gIGdldCBsb2NhbGVDaGFuZ2UoKTogT2JzZXJ2YWJsZTxOekkxOG5JbnRlcmZhY2U+IHtcclxuICAgIHJldHVybiB0aGlzLl9jaGFuZ2UuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KE5aX0kxOE4pIGxvY2FsZTogTnpJMThuSW50ZXJmYWNlLCBAT3B0aW9uYWwoKSBASW5qZWN0KE5aX0RBVEVfTE9DQUxFKSBkYXRlTG9jYWxlOiBEYXRlTG9jYWxlKSB7XHJcbiAgICB0aGlzLnNldExvY2FsZShsb2NhbGUgfHwgemhfQ04pO1xyXG4gICAgdGhpcy5zZXREYXRlTG9jYWxlKGRhdGVMb2NhbGUgfHwgbnVsbCk7XHJcbiAgfVxyXG5cclxuICAvLyBbTk9URV0gUGVyZm9ybWFuY2UgaXNzdWU6IHRoaXMgbWV0aG9kIG1heSBjYWxsZWQgYnkgZXZlcnkgY2hhbmdlIGRldGVjdGlvbnNcclxuICAvLyBUT0RPOiBjYWNoZSBtb3JlIGRlZXBseSBwYXRocyBmb3IgcGVyZm9ybWFuY2VcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXHJcbiAgdHJhbnNsYXRlKHBhdGg6IHN0cmluZywgZGF0YT86IGFueSk6IHN0cmluZyB7XHJcbiAgICAvLyB0aGlzLl9sb2dnZXIuZGVidWcoYFtOekkxOG5TZXJ2aWNlXSBUcmFuc2xhdGluZygke3RoaXMuX2xvY2FsZS5sb2NhbGV9KTogJHtwYXRofWApO1xyXG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLl9nZXRPYmplY3RQYXRoKHRoaXMuX2xvY2FsZSwgcGF0aCkgYXMgc3RyaW5nO1xyXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xyXG4gICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goa2V5ID0+IChjb250ZW50ID0gY29udGVudC5yZXBsYWNlKG5ldyBSZWdFeHAoYCUke2tleX0lYCwgJ2cnKSwgZGF0YVtrZXldKSkpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBjb250ZW50O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhdGg7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXQvQ2hhbmdlIGN1cnJlbnQgbG9jYWxlIGdsb2JhbGx5IHRocm91Z2hvdXQgdGhlIFdIT0xFIGFwcGxpY2F0aW9uXHJcbiAgICogTk9URTogSWYgY2FsbGVkIGF0IHJ1bnRpbWUsIHJlbmRlcmVkIGludGVyZmFjZSBtYXkgbm90IGNoYW5nZSBhbG9uZyB3aXRoIHRoZSBsb2NhbGUgY2hhbmdlLFxyXG4gICAqIGJlY2F1c2UgdGhpcyBkbyBub3QgdHJpZ2dlciBhbm90aGVyIHJlbmRlciBzY2hlZHVsZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBsb2NhbGUgVGhlIHRyYW5zbGF0aW5nIGxldHRlcnNcclxuICAgKi9cclxuICBzZXRMb2NhbGUobG9jYWxlOiBOekkxOG5JbnRlcmZhY2UpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9sb2NhbGUgJiYgdGhpcy5fbG9jYWxlLmxvY2FsZSA9PT0gbG9jYWxlLmxvY2FsZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLl9sb2NhbGUgPSBsb2NhbGU7XHJcbiAgICB0aGlzLl9jaGFuZ2UubmV4dChsb2NhbGUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TG9jYWxlKCk6IE56STE4bkludGVyZmFjZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbG9jYWxlO1xyXG4gIH1cclxuXHJcbiAgZ2V0TG9jYWxlSWQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9sb2NhbGUgPyB0aGlzLl9sb2NhbGUubG9jYWxlIDogJyc7XHJcbiAgfVxyXG5cclxuICBzZXREYXRlTG9jYWxlKGRhdGVMb2NhbGU6IERhdGVMb2NhbGUpOiB2b2lkIHtcclxuICAgIHRoaXMuZGF0ZUxvY2FsZSA9IGRhdGVMb2NhbGU7XHJcbiAgfVxyXG5cclxuICBnZXREYXRlTG9jYWxlKCk6IERhdGVMb2NhbGUge1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0ZUxvY2FsZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBsb2NhbGUgZGF0YVxyXG4gICAqIEBwYXJhbSBwYXRoIGRvdCBwYXRocyBmb3IgZmluZGluZyBleGlzdCB2YWx1ZSBmcm9tIGxvY2FsZSBkYXRhLCBlZy4gXCJhLmIuY1wiXHJcbiAgICogQHBhcmFtIGRlZmF1bHRWYWx1ZSBkZWZhdWx0IHZhbHVlIGlmIHRoZSByZXN1bHQgaXMgbm90IFwidHJ1dGh5XCJcclxuICAgKi9cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgZ2V0TG9jYWxlRGF0YShwYXRoOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IGFueSk6IGFueSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBwYXRoID8gdGhpcy5fZ2V0T2JqZWN0UGF0aCh0aGlzLl9sb2NhbGUsIHBhdGgpIDogdGhpcy5fbG9jYWxlO1xyXG5cclxuICAgIGlmICghcmVzdWx0ICYmICFkZWZhdWx0VmFsdWUpIHtcclxuICAgICAgd2FybihgTWlzc2luZyB0cmFuc2xhdGlvbnMgZm9yIFwiJHtwYXRofVwiIGluIGxhbmd1YWdlIFwiJHt0aGlzLl9sb2NhbGUubG9jYWxlfVwiLlxyXG5Zb3UgY2FuIHVzZSBcIk56STE4blNlcnZpY2Uuc2V0TG9jYWxlXCIgYXMgYSB0ZW1wb3JhcnkgZml4LlxyXG5XZWxjb21lIHRvIHN1Ym1pdCBhIHB1bGwgcmVxdWVzdCB0byBoZWxwIHVzIG9wdGltaXplIHRoZSB0cmFuc2xhdGlvbnMhXHJcbmh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0NPTlRSSUJVVElORy5tZGApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQgfHwgZGVmYXVsdFZhbHVlIHx8IHt9O1xyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHByaXZhdGUgX2dldE9iamVjdFBhdGgob2JqOiBJbmRleGFibGVPYmplY3QsIHBhdGg6IHN0cmluZyk6IHN0cmluZyB8IG9iamVjdCB8IGFueSB7XHJcbiAgICBsZXQgcmVzID0gb2JqO1xyXG4gICAgY29uc3QgcGF0aHMgPSBwYXRoLnNwbGl0KCcuJyk7XHJcbiAgICBjb25zdCBkZXB0aCA9IHBhdGhzLmxlbmd0aDtcclxuICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICB3aGlsZSAocmVzICYmIGluZGV4IDwgZGVwdGgpIHtcclxuICAgICAgcmVzID0gcmVzW3BhdGhzW2luZGV4KytdXTtcclxuICAgIH1cclxuICAgIHJldHVybiBpbmRleCA9PT0gZGVwdGggPyByZXMgOiBudWxsO1xyXG4gIH1cclxufVxyXG4iXX0=