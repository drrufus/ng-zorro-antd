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
var NzI18nService = /** @class */ (function () {
    function NzI18nService(locale, dateLocale) {
        this._change = new BehaviorSubject(this._locale);
        this.setLocale(locale || zh_CN);
        this.setDateLocale(dateLocale || null);
    }
    Object.defineProperty(NzI18nService.prototype, "localeChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._change.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    // [NOTE] Performance issue: this method may called by every change detections
    // TODO: cache more deeply paths for performance
    /* tslint:disable-next-line:no-any */
    // [NOTE] Performance issue: this method may called by every change detections
    // TODO: cache more deeply paths for performance
    /* tslint:disable-next-line:no-any */
    /**
     * @param {?} path
     * @param {?=} data
     * @return {?}
     */
    NzI18nService.prototype.translate = 
    // [NOTE] Performance issue: this method may called by every change detections
    // TODO: cache more deeply paths for performance
    /* tslint:disable-next-line:no-any */
    /**
     * @param {?} path
     * @param {?=} data
     * @return {?}
     */
    function (path, data) {
        // this._logger.debug(`[NzI18nService] Translating(${this._locale.locale}): ${path}`);
        /** @type {?} */
        var content = (/** @type {?} */ (this._getObjectPath(this._locale, path)));
        if (typeof content === 'string') {
            if (data) {
                Object.keys(data).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) { return (content = content.replace(new RegExp("%" + key + "%", 'g'), data[key])); }));
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
    /**
     * Set/Change current locale globally throughout the WHOLE application
     * NOTE: If called at runtime, rendered interface may not change along with the locale change,
     * because this do not trigger another render schedule.
     *
     * @param {?} locale The translating letters
     * @return {?}
     */
    NzI18nService.prototype.setLocale = /**
     * Set/Change current locale globally throughout the WHOLE application
     * NOTE: If called at runtime, rendered interface may not change along with the locale change,
     * because this do not trigger another render schedule.
     *
     * @param {?} locale The translating letters
     * @return {?}
     */
    function (locale) {
        if (this._locale && this._locale.locale === locale.locale) {
            return;
        }
        this._locale = locale;
        this._change.next(locale);
    };
    /**
     * @return {?}
     */
    NzI18nService.prototype.getLocale = /**
     * @return {?}
     */
    function () {
        return this._locale;
    };
    /**
     * @return {?}
     */
    NzI18nService.prototype.getLocaleId = /**
     * @return {?}
     */
    function () {
        return this._locale ? this._locale.locale : '';
    };
    /**
     * @param {?} dateLocale
     * @return {?}
     */
    NzI18nService.prototype.setDateLocale = /**
     * @param {?} dateLocale
     * @return {?}
     */
    function (dateLocale) {
        this.dateLocale = dateLocale;
    };
    /**
     * @return {?}
     */
    NzI18nService.prototype.getDateLocale = /**
     * @return {?}
     */
    function () {
        return this.dateLocale;
    };
    /**
     * Get locale data
     * @param path dot paths for finding exist value from locale data, eg. "a.b.c"
     * @param defaultValue default value if the result is not "truthy"
     */
    // tslint:disable-next-line:no-any
    /**
     * Get locale data
     * @param {?} path dot paths for finding exist value from locale data, eg. "a.b.c"
     * @param {?=} defaultValue default value if the result is not "truthy"
     * @return {?}
     */
    // tslint:disable-next-line:no-any
    NzI18nService.prototype.getLocaleData = /**
     * Get locale data
     * @param {?} path dot paths for finding exist value from locale data, eg. "a.b.c"
     * @param {?=} defaultValue default value if the result is not "truthy"
     * @return {?}
     */
    // tslint:disable-next-line:no-any
    function (path, defaultValue) {
        /** @type {?} */
        var result = path ? this._getObjectPath(this._locale, path) : this._locale;
        if (!result && !defaultValue) {
            warn("Missing translations for \"" + path + "\" in language \"" + this._locale.locale + "\".\nYou can use \"NzI18nService.setLocale\" as a temporary fix.\nWelcome to submit a pull request to help us optimize the translations!\nhttps://github.com/NG-ZORRO/ng-zorro-antd/blob/master/CONTRIBUTING.md");
        }
        return result || defaultValue || {};
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @private
     * @param {?} obj
     * @param {?} path
     * @return {?}
     */
    NzI18nService.prototype._getObjectPath = 
    // tslint:disable-next-line:no-any
    /**
     * @private
     * @param {?} obj
     * @param {?} path
     * @return {?}
     */
    function (obj, path) {
        /** @type {?} */
        var res = obj;
        /** @type {?} */
        var paths = path.split('.');
        /** @type {?} */
        var depth = paths.length;
        /** @type {?} */
        var index = 0;
        while (res && index < depth) {
            res = res[paths[index++]];
        }
        return index === depth ? res : null;
    };
    NzI18nService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NzI18nService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_I18N,] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_DATE_LOCALE,] }] }
    ]; };
    /** @nocollapse */ NzI18nService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzI18nService_Factory() { return new NzI18nService(i0.ɵɵinject(i1.NZ_I18N, 8), i0.ɵɵinject(i1.NZ_DATE_LOCALE, 8)); }, token: NzI18nService, providedIn: "root" });
    return NzI18nService;
}());
export { NzI18nService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaTE4bi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9pMThuLyIsInNvdXJjZXMiOlsibnotaTE4bi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxJQUFJLEVBQW1CLE1BQU0sb0JBQW9CLENBQUM7QUFFM0QsT0FBTyxLQUFLLE1BQU0sbUJBQW1CLENBQUM7QUFFdEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBRTFEO0lBWUUsdUJBQytCLE1BQXVCLEVBQ2hCLFVBQXNCO1FBVHBELFlBQU8sR0FBRyxJQUFJLGVBQWUsQ0FBa0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBV25FLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFWRCxzQkFBSSx1Q0FBWTs7OztRQUFoQjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNyQyxDQUFDOzs7T0FBQTtJQVVELDhFQUE4RTtJQUM5RSxnREFBZ0Q7SUFDaEQscUNBQXFDOzs7Ozs7Ozs7SUFDckMsaUNBQVM7Ozs7Ozs7OztJQUFULFVBQVUsSUFBWSxFQUFFLElBQVU7OztZQUU1QixPQUFPLEdBQUcsbUJBQUEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxFQUFVO1FBQy9ELElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO1lBQy9CLElBQUksSUFBSSxF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QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IHdhcm4sIEluZGV4YWJsZU9iamVjdCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgemhfQ04gZnJvbSAnLi9sYW5ndWFnZXMvemhfQ04nO1xyXG5pbXBvcnQgeyBEYXRlTG9jYWxlLCBOekkxOG5JbnRlcmZhY2UgfSBmcm9tICcuL256LWkxOG4uaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgTlpfREFURV9MT0NBTEUsIE5aX0kxOE4gfSBmcm9tICcuL256LWkxOG4udG9rZW4nO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpJMThuU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBfbG9jYWxlOiBOekkxOG5JbnRlcmZhY2U7XHJcbiAgcHJpdmF0ZSBfY2hhbmdlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxOekkxOG5JbnRlcmZhY2U+KHRoaXMuX2xvY2FsZSk7XHJcbiAgcHJpdmF0ZSBkYXRlTG9jYWxlOiBEYXRlTG9jYWxlO1xyXG5cclxuICBnZXQgbG9jYWxlQ2hhbmdlKCk6IE9ic2VydmFibGU8TnpJMThuSW50ZXJmYWNlPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fY2hhbmdlLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE5aX0kxOE4pIGxvY2FsZTogTnpJMThuSW50ZXJmYWNlLFxyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChOWl9EQVRFX0xPQ0FMRSkgZGF0ZUxvY2FsZTogRGF0ZUxvY2FsZVxyXG4gICkge1xyXG4gICAgdGhpcy5zZXRMb2NhbGUobG9jYWxlIHx8IHpoX0NOKTtcclxuICAgIHRoaXMuc2V0RGF0ZUxvY2FsZShkYXRlTG9jYWxlIHx8IG51bGwpO1xyXG4gIH1cclxuXHJcbiAgLy8gW05PVEVdIFBlcmZvcm1hbmNlIGlzc3VlOiB0aGlzIG1ldGhvZCBtYXkgY2FsbGVkIGJ5IGV2ZXJ5IGNoYW5nZSBkZXRlY3Rpb25zXHJcbiAgLy8gVE9ETzogY2FjaGUgbW9yZSBkZWVwbHkgcGF0aHMgZm9yIHBlcmZvcm1hbmNlXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG4gIHRyYW5zbGF0ZShwYXRoOiBzdHJpbmcsIGRhdGE/OiBhbnkpOiBzdHJpbmcge1xyXG4gICAgLy8gdGhpcy5fbG9nZ2VyLmRlYnVnKGBbTnpJMThuU2VydmljZV0gVHJhbnNsYXRpbmcoJHt0aGlzLl9sb2NhbGUubG9jYWxlfSk6ICR7cGF0aH1gKTtcclxuICAgIGxldCBjb250ZW50ID0gdGhpcy5fZ2V0T2JqZWN0UGF0aCh0aGlzLl9sb2NhbGUsIHBhdGgpIGFzIHN0cmluZztcclxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKGtleSA9PiAoY29udGVudCA9IGNvbnRlbnQucmVwbGFjZShuZXcgUmVnRXhwKGAlJHtrZXl9JWAsICdnJyksIGRhdGFba2V5XSkpKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY29udGVudDtcclxuICAgIH1cclxuICAgIHJldHVybiBwYXRoO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0L0NoYW5nZSBjdXJyZW50IGxvY2FsZSBnbG9iYWxseSB0aHJvdWdob3V0IHRoZSBXSE9MRSBhcHBsaWNhdGlvblxyXG4gICAqIE5PVEU6IElmIGNhbGxlZCBhdCBydW50aW1lLCByZW5kZXJlZCBpbnRlcmZhY2UgbWF5IG5vdCBjaGFuZ2UgYWxvbmcgd2l0aCB0aGUgbG9jYWxlIGNoYW5nZSxcclxuICAgKiBiZWNhdXNlIHRoaXMgZG8gbm90IHRyaWdnZXIgYW5vdGhlciByZW5kZXIgc2NoZWR1bGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gbG9jYWxlIFRoZSB0cmFuc2xhdGluZyBsZXR0ZXJzXHJcbiAgICovXHJcbiAgc2V0TG9jYWxlKGxvY2FsZTogTnpJMThuSW50ZXJmYWNlKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fbG9jYWxlICYmIHRoaXMuX2xvY2FsZS5sb2NhbGUgPT09IGxvY2FsZS5sb2NhbGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fbG9jYWxlID0gbG9jYWxlO1xyXG4gICAgdGhpcy5fY2hhbmdlLm5leHQobG9jYWxlKTtcclxuICB9XHJcblxyXG4gIGdldExvY2FsZSgpOiBOekkxOG5JbnRlcmZhY2Uge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xvY2FsZTtcclxuICB9XHJcblxyXG4gIGdldExvY2FsZUlkKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fbG9jYWxlID8gdGhpcy5fbG9jYWxlLmxvY2FsZSA6ICcnO1xyXG4gIH1cclxuXHJcbiAgc2V0RGF0ZUxvY2FsZShkYXRlTG9jYWxlOiBEYXRlTG9jYWxlKTogdm9pZCB7XHJcbiAgICB0aGlzLmRhdGVMb2NhbGUgPSBkYXRlTG9jYWxlO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0ZUxvY2FsZSgpOiBEYXRlTG9jYWxlIHtcclxuICAgIHJldHVybiB0aGlzLmRhdGVMb2NhbGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgbG9jYWxlIGRhdGFcclxuICAgKiBAcGFyYW0gcGF0aCBkb3QgcGF0aHMgZm9yIGZpbmRpbmcgZXhpc3QgdmFsdWUgZnJvbSBsb2NhbGUgZGF0YSwgZWcuIFwiYS5iLmNcIlxyXG4gICAqIEBwYXJhbSBkZWZhdWx0VmFsdWUgZGVmYXVsdCB2YWx1ZSBpZiB0aGUgcmVzdWx0IGlzIG5vdCBcInRydXRoeVwiXHJcbiAgICovXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIGdldExvY2FsZURhdGEocGF0aDogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBhbnkpOiBhbnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gcGF0aCA/IHRoaXMuX2dldE9iamVjdFBhdGgodGhpcy5fbG9jYWxlLCBwYXRoKSA6IHRoaXMuX2xvY2FsZTtcclxuXHJcbiAgICBpZiAoIXJlc3VsdCAmJiAhZGVmYXVsdFZhbHVlKSB7XHJcbiAgICAgIHdhcm4oYE1pc3NpbmcgdHJhbnNsYXRpb25zIGZvciBcIiR7cGF0aH1cIiBpbiBsYW5ndWFnZSBcIiR7dGhpcy5fbG9jYWxlLmxvY2FsZX1cIi5cclxuWW91IGNhbiB1c2UgXCJOekkxOG5TZXJ2aWNlLnNldExvY2FsZVwiIGFzIGEgdGVtcG9yYXJ5IGZpeC5cclxuV2VsY29tZSB0byBzdWJtaXQgYSBwdWxsIHJlcXVlc3QgdG8gaGVscCB1cyBvcHRpbWl6ZSB0aGUgdHJhbnNsYXRpb25zIVxyXG5odHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9DT05UUklCVVRJTkcubWRgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0IHx8IGRlZmF1bHRWYWx1ZSB8fCB7fTtcclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBwcml2YXRlIF9nZXRPYmplY3RQYXRoKG9iajogSW5kZXhhYmxlT2JqZWN0LCBwYXRoOiBzdHJpbmcpOiBzdHJpbmcgfCBvYmplY3QgfCBhbnkge1xyXG4gICAgbGV0IHJlcyA9IG9iajtcclxuICAgIGNvbnN0IHBhdGhzID0gcGF0aC5zcGxpdCgnLicpO1xyXG4gICAgY29uc3QgZGVwdGggPSBwYXRocy5sZW5ndGg7XHJcbiAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgd2hpbGUgKHJlcyAmJiBpbmRleCA8IGRlcHRoKSB7XHJcbiAgICAgIHJlcyA9IHJlc1twYXRoc1tpbmRleCsrXV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaW5kZXggPT09IGRlcHRoID8gcmVzIDogbnVsbDtcclxuICB9XHJcbn1cclxuIl19