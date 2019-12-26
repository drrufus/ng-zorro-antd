/**
 * @fileoverview added by tsickle
 * Generated from: nz-icon.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { DOCUMENT } from '@angular/common';
import { HttpBackend } from '@angular/common/http';
import { Inject, Injectable, InjectionToken, Optional, RendererFactory2 } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IconService } from '@ant-design/icons-angular';
import { BarsOutline, CalendarOutline, CaretDownFill, CaretDownOutline, CaretUpFill, CaretUpOutline, CheckCircleFill, CheckCircleOutline, CheckOutline, ClockCircleOutline, CloseCircleFill, CloseCircleOutline, CloseOutline, CopyOutline, DoubleLeftOutline, DoubleRightOutline, DownOutline, EditOutline, EllipsisOutline, ExclamationCircleFill, ExclamationCircleOutline, EyeOutline, FileFill, FileOutline, FilterFill, InfoCircleFill, InfoCircleOutline, LeftOutline, LoadingOutline, PaperClipOutline, QuestionCircleOutline, RightOutline, SearchOutline, StarFill, UploadOutline, UpOutline } from '@ant-design/icons-angular/icons';
import { warn, warnDeprecation, NzConfigService } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "ng-zorro-antd/core";
import * as i3 from "@angular/common/http";
import * as i4 from "@angular/common";
/**
 * @record
 */
export function NzIconfontOption() { }
if (false) {
    /** @type {?} */
    NzIconfontOption.prototype.scriptUrl;
}
/** @type {?} */
export var NZ_ICONS = new InjectionToken('nz_icons');
/** @type {?} */
export var NZ_ICON_DEFAULT_TWOTONE_COLOR = new InjectionToken('nz_icon_default_twotone_color');
/** @type {?} */
export var DEFAULT_TWOTONE_COLOR = '#1890ff';
/** @type {?} */
export var NZ_ICONS_USED_BY_ZORRO = [
    BarsOutline,
    CalendarOutline,
    CaretUpFill,
    CaretUpOutline,
    CaretDownFill,
    CaretDownOutline,
    CheckCircleFill,
    CheckCircleOutline,
    CheckOutline,
    ClockCircleOutline,
    CloseCircleOutline,
    CloseCircleFill,
    CloseOutline,
    CopyOutline,
    DoubleLeftOutline,
    DoubleRightOutline,
    DownOutline,
    EditOutline,
    EllipsisOutline,
    ExclamationCircleFill,
    ExclamationCircleOutline,
    EyeOutline,
    FileFill,
    FileOutline,
    FilterFill,
    InfoCircleFill,
    InfoCircleOutline,
    LeftOutline,
    LoadingOutline,
    PaperClipOutline,
    QuestionCircleOutline,
    RightOutline,
    StarFill,
    SearchOutline,
    StarFill,
    UploadOutline,
    UpOutline
];
/**
 * It should be a global singleton, otherwise registered icons could not be found.
 */
var NzIconService = /** @class */ (function (_super) {
    tslib_1.__extends(NzIconService, _super);
    function NzIconService(rendererFactory, sanitizer, nzConfigService, handler, 
    // tslint:disable-next-line:no-any
    _document, icons, legacyDefaultTwotoneColor) {
        var _this = _super.call(this, rendererFactory, handler, _document, sanitizer) || this;
        _this.nzConfigService = nzConfigService;
        _this.legacyDefaultTwotoneColor = legacyDefaultTwotoneColor;
        _this.configUpdated$ = new Subject();
        _this.iconfontCache = new Set();
        _this.onConfigChange();
        _this.addIcon.apply(_this, tslib_1.__spread(NZ_ICONS_USED_BY_ZORRO, (icons || [])));
        if (legacyDefaultTwotoneColor) {
            warnDeprecation("'NZ_ICON_DEFAULT_TWOTONE_COLOR' is deprecated and will be removed in 9.0.0. Please use 'NZ_CONFIG' instead!");
        }
        _this.configDefaultTwotoneColor();
        _this.configDefaultTheme();
        return _this;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    NzIconService.prototype.warnAPI = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        if (type === 'old') {
            warnDeprecation("'<i class=\"anticon\"></i>' would be deprecated in 9.0.0. Please use '<i nz-icon nzType=\"\"></i>' API. Please refer https://ng.ant.design/components/icon/en.");
        }
        if (type === 'cross') {
            warnDeprecation("'cross' icon is replaced by 'close' icon. This auto correction would be removed in 9.0.0.");
        }
        if (type === 'vertical') {
            warnDeprecation("'verticle' is misspelled. Please use 'vertical'. This misspell would be fixed in 9.0.0.");
        }
    };
    /**
     * @param {?} svg
     * @return {?}
     */
    NzIconService.prototype.normalizeSvgElement = /**
     * @param {?} svg
     * @return {?}
     */
    function (svg) {
        if (!svg.getAttribute('viewBox')) {
            this._renderer.setAttribute(svg, 'viewBox', '0 0 1024 1024');
        }
        if (!svg.getAttribute('width') || !svg.getAttribute('height')) {
            this._renderer.setAttribute(svg, 'width', '1em');
            this._renderer.setAttribute(svg, 'height', '1em');
        }
        if (!svg.getAttribute('fill')) {
            this._renderer.setAttribute(svg, 'fill', 'currentColor');
        }
    };
    /**
     * @param {?} opt
     * @return {?}
     */
    NzIconService.prototype.fetchFromIconfont = /**
     * @param {?} opt
     * @return {?}
     */
    function (opt) {
        var scriptUrl = opt.scriptUrl;
        if (this._document && !this.iconfontCache.has(scriptUrl)) {
            /** @type {?} */
            var script = this._renderer.createElement('script');
            this._renderer.setAttribute(script, 'src', scriptUrl);
            this._renderer.setAttribute(script, 'data-namespace', scriptUrl.replace(/^(https?|http):/g, ''));
            this._renderer.appendChild(this._document.body, script);
            this.iconfontCache.add(scriptUrl);
        }
    };
    /**
     * @param {?} type
     * @return {?}
     */
    NzIconService.prototype.createIconfontIcon = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        return this._createSVGElementFromString("<svg><use xlink:href=\"" + type + "\"></svg>");
    };
    /**
     * @private
     * @return {?}
     */
    NzIconService.prototype.onConfigChange = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.nzConfigService.getConfigChangeEventForComponent('icon').subscribe((/**
         * @return {?}
         */
        function () {
            _this.configDefaultTwotoneColor();
            _this.configDefaultTheme();
            _this.configUpdated$.next();
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NzIconService.prototype.configDefaultTheme = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var iconConfig = this.getConfig();
        this.defaultTheme = iconConfig.nzTheme || 'outline';
    };
    /**
     * @private
     * @return {?}
     */
    NzIconService.prototype.configDefaultTwotoneColor = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var iconConfig = this.getConfig();
        /** @type {?} */
        var defaultTwotoneColor = iconConfig.nzTwotoneColor || this.legacyDefaultTwotoneColor;
        /** @type {?} */
        var primaryColor = DEFAULT_TWOTONE_COLOR;
        if (defaultTwotoneColor) {
            if (defaultTwotoneColor.startsWith('#')) {
                primaryColor = defaultTwotoneColor;
            }
            else {
                warn('Twotone color must be a hex color!');
            }
        }
        this.twoToneColor = { primaryColor: primaryColor };
    };
    /**
     * @private
     * @return {?}
     */
    NzIconService.prototype.getConfig = /**
     * @private
     * @return {?}
     */
    function () {
        return this.nzConfigService.getConfigForComponent('icon') || {};
    };
    NzIconService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NzIconService.ctorParameters = function () { return [
        { type: RendererFactory2 },
        { type: DomSanitizer },
        { type: NzConfigService },
        { type: HttpBackend, decorators: [{ type: Optional }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
        { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [NZ_ICONS,] }] },
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [NZ_ICON_DEFAULT_TWOTONE_COLOR,] }] }
    ]; };
    /** @nocollapse */ NzIconService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzIconService_Factory() { return new NzIconService(i0.ɵɵinject(i0.RendererFactory2), i0.ɵɵinject(i1.DomSanitizer), i0.ɵɵinject(i2.NzConfigService), i0.ɵɵinject(i3.HttpBackend, 8), i0.ɵɵinject(i4.DOCUMENT, 8), i0.ɵɵinject(NZ_ICONS, 8), i0.ɵɵinject(NZ_ICON_DEFAULT_TWOTONE_COLOR, 8)); }, token: NzIconService, providedIn: "root" });
    return NzIconService;
}(IconService));
export { NzIconService };
if (false) {
    /** @type {?} */
    NzIconService.prototype.configUpdated$;
    /**
     * @type {?}
     * @private
     */
    NzIconService.prototype.iconfontCache;
    /**
     * @type {?}
     * @protected
     */
    NzIconService.prototype.nzConfigService;
    /**
     * @deprecated
     * \@inner
     * @type {?}
     * @private
     */
    NzIconService.prototype.legacyDefaultTwotoneColor;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaWNvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9pY29uLyIsInNvdXJjZXMiOlsibnotaWNvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0YsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBa0IsV0FBVyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDeEUsT0FBTyxFQUNMLFdBQVcsRUFDWCxlQUFlLEVBQ2YsYUFBYSxFQUNiLGdCQUFnQixFQUNoQixXQUFXLEVBQ1gsY0FBYyxFQUNkLGVBQWUsRUFDZixrQkFBa0IsRUFDbEIsWUFBWSxFQUNaLGtCQUFrQixFQUNsQixlQUFlLEVBQ2Ysa0JBQWtCLEVBQ2xCLFlBQVksRUFDWixXQUFXLEVBQ1gsaUJBQWlCLEVBQ2pCLGtCQUFrQixFQUNsQixXQUFXLEVBQ1gsV0FBVyxFQUNYLGVBQWUsRUFDZixxQkFBcUIsRUFDckIsd0JBQXdCLEVBQ3hCLFVBQVUsRUFDVixRQUFRLEVBQ1IsV0FBVyxFQUNYLFVBQVUsRUFDVixjQUFjLEVBQ2QsaUJBQWlCLEVBQ2pCLFdBQVcsRUFDWCxjQUFjLEVBQ2QsZ0JBQWdCLEVBQ2hCLHFCQUFxQixFQUNyQixZQUFZLEVBQ1osYUFBYSxFQUNiLFFBQVEsRUFDUixhQUFhLEVBQ2IsU0FBUyxFQUNWLE1BQU0saUNBQWlDLENBQUM7QUFDekMsT0FBTyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQWMsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDeEYs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U0FBQyxRQUFROzRDQUMzQixRQUFRLFlBQUksTUFBTSxTQUFDLFFBQVE7NkNBSzNCLFFBQVEsWUFBSSxNQUFNLFNBQUMsNkJBQTZCOzs7d0JBdEtyRDtDQXlOQyxBQWpIRCxDQUdtQyxXQUFXLEdBOEc3QztTQTlHWSxhQUFhOzs7SUFDeEIsdUNBQXFDOzs7OztJQUVyQyxzQ0FBMEM7Ozs7O0lBK0N4Qyx3Q0FBMEM7Ozs7Ozs7SUFTMUMsa0RBQTZGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEh0dHBCYWNrZW5kIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIEluamVjdGlvblRva2VuLCBPcHRpb25hbCwgUmVuZGVyZXJGYWN0b3J5MiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgSWNvbkRlZmluaXRpb24sIEljb25TZXJ2aWNlIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMtYW5ndWxhcic7XHJcbmltcG9ydCB7XHJcbiAgQmFyc091dGxpbmUsXHJcbiAgQ2FsZW5kYXJPdXRsaW5lLFxyXG4gIENhcmV0RG93bkZpbGwsXHJcbiAgQ2FyZXREb3duT3V0bGluZSxcclxuICBDYXJldFVwRmlsbCxcclxuICBDYXJldFVwT3V0bGluZSxcclxuICBDaGVja0NpcmNsZUZpbGwsXHJcbiAgQ2hlY2tDaXJjbGVPdXRsaW5lLFxyXG4gIENoZWNrT3V0bGluZSxcclxuICBDbG9ja0NpcmNsZU91dGxpbmUsXHJcbiAgQ2xvc2VDaXJjbGVGaWxsLFxyXG4gIENsb3NlQ2lyY2xlT3V0bGluZSxcclxuICBDbG9zZU91dGxpbmUsXHJcbiAgQ29weU91dGxpbmUsXHJcbiAgRG91YmxlTGVmdE91dGxpbmUsXHJcbiAgRG91YmxlUmlnaHRPdXRsaW5lLFxyXG4gIERvd25PdXRsaW5lLFxyXG4gIEVkaXRPdXRsaW5lLFxyXG4gIEVsbGlwc2lzT3V0bGluZSxcclxuICBFeGNsYW1hdGlvbkNpcmNsZUZpbGwsXHJcbiAgRXhjbGFtYXRpb25DaXJjbGVPdXRsaW5lLFxyXG4gIEV5ZU91dGxpbmUsXHJcbiAgRmlsZUZpbGwsXHJcbiAgRmlsZU91dGxpbmUsXHJcbiAgRmlsdGVyRmlsbCxcclxuICBJbmZvQ2lyY2xlRmlsbCxcclxuICBJbmZvQ2lyY2xlT3V0bGluZSxcclxuICBMZWZ0T3V0bGluZSxcclxuICBMb2FkaW5nT3V0bGluZSxcclxuICBQYXBlckNsaXBPdXRsaW5lLFxyXG4gIFF1ZXN0aW9uQ2lyY2xlT3V0bGluZSxcclxuICBSaWdodE91dGxpbmUsXHJcbiAgU2VhcmNoT3V0bGluZSxcclxuICBTdGFyRmlsbCxcclxuICBVcGxvYWRPdXRsaW5lLFxyXG4gIFVwT3V0bGluZVxyXG59IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLWFuZ3VsYXIvaWNvbnMnO1xyXG5pbXBvcnQgeyB3YXJuLCB3YXJuRGVwcmVjYXRpb24sIEljb25Db25maWcsIE56Q29uZmlnU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTnpJY29uZm9udE9wdGlvbiB7XHJcbiAgc2NyaXB0VXJsOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBOWl9JQ09OUyA9IG5ldyBJbmplY3Rpb25Ub2tlbignbnpfaWNvbnMnKTtcclxuZXhwb3J0IGNvbnN0IE5aX0lDT05fREVGQVVMVF9UV09UT05FX0NPTE9SID0gbmV3IEluamVjdGlvblRva2VuKCduel9pY29uX2RlZmF1bHRfdHdvdG9uZV9jb2xvcicpO1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9UV09UT05FX0NPTE9SID0gJyMxODkwZmYnO1xyXG5leHBvcnQgY29uc3QgTlpfSUNPTlNfVVNFRF9CWV9aT1JSTzogSWNvbkRlZmluaXRpb25bXSA9IFtcclxuICBCYXJzT3V0bGluZSxcclxuICBDYWxlbmRhck91dGxpbmUsXHJcbiAgQ2FyZXRVcEZpbGwsXHJcbiAgQ2FyZXRVcE91dGxpbmUsXHJcbiAgQ2FyZXREb3duRmlsbCxcclxuICBDYXJldERvd25PdXRsaW5lLFxyXG4gIENoZWNrQ2lyY2xlRmlsbCxcclxuICBDaGVja0NpcmNsZU91dGxpbmUsXHJcbiAgQ2hlY2tPdXRsaW5lLFxyXG4gIENsb2NrQ2lyY2xlT3V0bGluZSxcclxuICBDbG9zZUNpcmNsZU91dGxpbmUsXHJcbiAgQ2xvc2VDaXJjbGVGaWxsLFxyXG4gIENsb3NlT3V0bGluZSxcclxuICBDb3B5T3V0bGluZSxcclxuICBEb3VibGVMZWZ0T3V0bGluZSxcclxuICBEb3VibGVSaWdodE91dGxpbmUsXHJcbiAgRG93bk91dGxpbmUsXHJcbiAgRWRpdE91dGxpbmUsXHJcbiAgRWxsaXBzaXNPdXRsaW5lLFxyXG4gIEV4Y2xhbWF0aW9uQ2lyY2xlRmlsbCxcclxuICBFeGNsYW1hdGlvbkNpcmNsZU91dGxpbmUsXHJcbiAgRXllT3V0bGluZSxcclxuICBGaWxlRmlsbCxcclxuICBGaWxlT3V0bGluZSxcclxuICBGaWx0ZXJGaWxsLFxyXG4gIEluZm9DaXJjbGVGaWxsLFxyXG4gIEluZm9DaXJjbGVPdXRsaW5lLFxyXG4gIExlZnRPdXRsaW5lLFxyXG4gIExvYWRpbmdPdXRsaW5lLFxyXG4gIFBhcGVyQ2xpcE91dGxpbmUsXHJcbiAgUXVlc3Rpb25DaXJjbGVPdXRsaW5lLFxyXG4gIFJpZ2h0T3V0bGluZSxcclxuICBTdGFyRmlsbCxcclxuICBTZWFyY2hPdXRsaW5lLFxyXG4gIFN0YXJGaWxsLFxyXG4gIFVwbG9hZE91dGxpbmUsXHJcbiAgVXBPdXRsaW5lXHJcbl07XHJcblxyXG4vKipcclxuICogSXQgc2hvdWxkIGJlIGEgZ2xvYmFsIHNpbmdsZXRvbiwgb3RoZXJ3aXNlIHJlZ2lzdGVyZWQgaWNvbnMgY291bGQgbm90IGJlIGZvdW5kLlxyXG4gKi9cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpJY29uU2VydmljZSBleHRlbmRzIEljb25TZXJ2aWNlIHtcclxuICBjb25maWdVcGRhdGVkJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gIHByaXZhdGUgaWNvbmZvbnRDYWNoZSA9IG5ldyBTZXQ8c3RyaW5nPigpO1xyXG5cclxuICB3YXJuQVBJKHR5cGU6ICdvbGQnIHwgJ2Nyb3NzJyB8ICd2ZXJ0aWNhbCcpOiB2b2lkIHtcclxuICAgIGlmICh0eXBlID09PSAnb2xkJykge1xyXG4gICAgICB3YXJuRGVwcmVjYXRpb24oXHJcbiAgICAgICAgYCc8aSBjbGFzcz1cImFudGljb25cIj48L2k+JyB3b3VsZCBiZSBkZXByZWNhdGVkIGluIDkuMC4wLiBQbGVhc2UgdXNlICc8aSBuei1pY29uIG56VHlwZT1cIlwiPjwvaT4nIEFQSS4gUGxlYXNlIHJlZmVyIGh0dHBzOi8vbmcuYW50LmRlc2lnbi9jb21wb25lbnRzL2ljb24vZW4uYFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGUgPT09ICdjcm9zcycpIHtcclxuICAgICAgd2FybkRlcHJlY2F0aW9uKGAnY3Jvc3MnIGljb24gaXMgcmVwbGFjZWQgYnkgJ2Nsb3NlJyBpY29uLiBUaGlzIGF1dG8gY29ycmVjdGlvbiB3b3VsZCBiZSByZW1vdmVkIGluIDkuMC4wLmApO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgd2FybkRlcHJlY2F0aW9uKGAndmVydGljbGUnIGlzIG1pc3NwZWxsZWQuIFBsZWFzZSB1c2UgJ3ZlcnRpY2FsJy4gVGhpcyBtaXNzcGVsbCB3b3VsZCBiZSBmaXhlZCBpbiA5LjAuMC5gKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5vcm1hbGl6ZVN2Z0VsZW1lbnQoc3ZnOiBTVkdFbGVtZW50KTogdm9pZCB7XHJcbiAgICBpZiAoIXN2Zy5nZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnKSkge1xyXG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUoc3ZnLCAndmlld0JveCcsICcwIDAgMTAyNCAxMDI0Jyk7XHJcbiAgICB9XHJcbiAgICBpZiAoIXN2Zy5nZXRBdHRyaWJ1dGUoJ3dpZHRoJykgfHwgIXN2Zy5nZXRBdHRyaWJ1dGUoJ2hlaWdodCcpKSB7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZShzdmcsICd3aWR0aCcsICcxZW0nKTtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHN2ZywgJ2hlaWdodCcsICcxZW0nKTtcclxuICAgIH1cclxuICAgIGlmICghc3ZnLmdldEF0dHJpYnV0ZSgnZmlsbCcpKSB7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZShzdmcsICdmaWxsJywgJ2N1cnJlbnRDb2xvcicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZmV0Y2hGcm9tSWNvbmZvbnQob3B0OiBOekljb25mb250T3B0aW9uKTogdm9pZCB7XHJcbiAgICBjb25zdCB7IHNjcmlwdFVybCB9ID0gb3B0O1xyXG4gICAgaWYgKHRoaXMuX2RvY3VtZW50ICYmICF0aGlzLmljb25mb250Q2FjaGUuaGFzKHNjcmlwdFVybCkpIHtcclxuICAgICAgY29uc3Qgc2NyaXB0ID0gdGhpcy5fcmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZShzY3JpcHQsICdzcmMnLCBzY3JpcHRVcmwpO1xyXG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUoc2NyaXB0LCAnZGF0YS1uYW1lc3BhY2UnLCBzY3JpcHRVcmwucmVwbGFjZSgvXihodHRwcz98aHR0cCk6L2csICcnKSk7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuX2RvY3VtZW50LmJvZHksIHNjcmlwdCk7XHJcbiAgICAgIHRoaXMuaWNvbmZvbnRDYWNoZS5hZGQoc2NyaXB0VXJsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNyZWF0ZUljb25mb250SWNvbih0eXBlOiBzdHJpbmcpOiBTVkdFbGVtZW50IHtcclxuICAgIHJldHVybiB0aGlzLl9jcmVhdGVTVkdFbGVtZW50RnJvbVN0cmluZyhgPHN2Zz48dXNlIHhsaW5rOmhyZWY9XCIke3R5cGV9XCI+PC9zdmc+YCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5MixcclxuICAgIHNhbml0aXplcjogRG9tU2FuaXRpemVyLFxyXG4gICAgcHJvdGVjdGVkIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxyXG4gICAgQE9wdGlvbmFsKCkgaGFuZGxlcjogSHR0cEJhY2tlbmQsXHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBfZG9jdW1lbnQ6IGFueSxcclxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTlpfSUNPTlMpIGljb25zPzogSWNvbkRlZmluaXRpb25bXSxcclxuICAgIC8qKlxyXG4gICAgICogQGRlcHJlY2F0ZWRcclxuICAgICAqIEBpbm5lclxyXG4gICAgICovXHJcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE5aX0lDT05fREVGQVVMVF9UV09UT05FX0NPTE9SKSBwcml2YXRlIGxlZ2FjeURlZmF1bHRUd290b25lQ29sb3I/OiBzdHJpbmdcclxuICApIHtcclxuICAgIHN1cGVyKHJlbmRlcmVyRmFjdG9yeSwgaGFuZGxlciwgX2RvY3VtZW50LCBzYW5pdGl6ZXIpO1xyXG5cclxuICAgIHRoaXMub25Db25maWdDaGFuZ2UoKTtcclxuXHJcbiAgICB0aGlzLmFkZEljb24oLi4uTlpfSUNPTlNfVVNFRF9CWV9aT1JSTywgLi4uKGljb25zIHx8IFtdKSk7XHJcblxyXG4gICAgaWYgKGxlZ2FjeURlZmF1bHRUd290b25lQ29sb3IpIHtcclxuICAgICAgd2FybkRlcHJlY2F0aW9uKFxyXG4gICAgICAgIGAnTlpfSUNPTl9ERUZBVUxUX1RXT1RPTkVfQ09MT1InIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiA5LjAuMC4gUGxlYXNlIHVzZSAnTlpfQ09ORklHJyBpbnN0ZWFkIWBcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHRoaXMuY29uZmlnRGVmYXVsdFR3b3RvbmVDb2xvcigpO1xyXG5cclxuICAgIHRoaXMuY29uZmlnRGVmYXVsdFRoZW1lKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uQ29uZmlnQ2hhbmdlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5uekNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnQ2hhbmdlRXZlbnRGb3JDb21wb25lbnQoJ2ljb24nKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNvbmZpZ0RlZmF1bHRUd290b25lQ29sb3IoKTtcclxuICAgICAgdGhpcy5jb25maWdEZWZhdWx0VGhlbWUoKTtcclxuICAgICAgdGhpcy5jb25maWdVcGRhdGVkJC5uZXh0KCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29uZmlnRGVmYXVsdFRoZW1lKCk6IHZvaWQge1xyXG4gICAgY29uc3QgaWNvbkNvbmZpZyA9IHRoaXMuZ2V0Q29uZmlnKCk7XHJcbiAgICB0aGlzLmRlZmF1bHRUaGVtZSA9IGljb25Db25maWcubnpUaGVtZSB8fCAnb3V0bGluZSc7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbmZpZ0RlZmF1bHRUd290b25lQ29sb3IoKTogdm9pZCB7XHJcbiAgICBjb25zdCBpY29uQ29uZmlnID0gdGhpcy5nZXRDb25maWcoKTtcclxuICAgIGNvbnN0IGRlZmF1bHRUd290b25lQ29sb3IgPSBpY29uQ29uZmlnLm56VHdvdG9uZUNvbG9yIHx8IHRoaXMubGVnYWN5RGVmYXVsdFR3b3RvbmVDb2xvcjtcclxuXHJcbiAgICBsZXQgcHJpbWFyeUNvbG9yID0gREVGQVVMVF9UV09UT05FX0NPTE9SO1xyXG5cclxuICAgIGlmIChkZWZhdWx0VHdvdG9uZUNvbG9yKSB7XHJcbiAgICAgIGlmIChkZWZhdWx0VHdvdG9uZUNvbG9yLnN0YXJ0c1dpdGgoJyMnKSkge1xyXG4gICAgICAgIHByaW1hcnlDb2xvciA9IGRlZmF1bHRUd290b25lQ29sb3I7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd2FybignVHdvdG9uZSBjb2xvciBtdXN0IGJlIGEgaGV4IGNvbG9yIScpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50d29Ub25lQ29sb3IgPSB7IHByaW1hcnlDb2xvciB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRDb25maWcoKTogSWNvbkNvbmZpZyB7XHJcbiAgICByZXR1cm4gdGhpcy5uekNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnRm9yQ29tcG9uZW50KCdpY29uJykgfHwge307XHJcbiAgfVxyXG59XHJcbiJdfQ==