/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaWNvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9pY29uLyIsInNvdXJjZXMiOlsibnotaWNvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFrQixXQUFXLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RSxPQUFPLEVBQ0wsV0FBVyxFQUNYLGVBQWUsRUFDZixhQUFhLEVBQ2IsZ0JBQWdCLEVBQ2hCLFdBQVcsRUFDWCxjQUFjLEVBQ2QsZUFBZSxFQUNmLGtCQUFrQixFQUNsQixZQUFZLEVBQ1osa0JBQWtCLEVBQ2xCLGVBQWUsRUFDZixrQkFBa0IsRUFDbEIsWUFBWSxFQUNaLFdBQVcsRUFDWCxpQkFBaUIsRUFDakIsa0JBQWtCLEVBQ2xCLFdBQVcsRUFDWCxXQUFXLEVBQ1gsZUFBZSxFQUNmLHFCQUFxQixFQUNyQix3QkFBd0IsRUFDeEIsVUFBVSxFQUNWLFFBQVEsRUFDUixXQUFXLEVBQ1gsVUFBVSxFQUNWLGNBQWMsRUFDZCxpQkFBaUIsRUFDakIsV0FBVyxFQUNYLGNBQWMsRUFDZCxnQkFBZ0IsRUFDaEIscUJBQXFCLEVBQ3JCLFlBQVksRUFDWixhQUFhLEVBQ2IsUUFBUSxFQUNSLGFBQWEsRUFDYixTQUFTLEVBQ1YsTUFBTSxpQ0FBaUMsQ0FBQztBQUN6QyxPQUFPLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBYyxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RixP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QUFDLFFBQVE7NENBQzNCLFFBQVEsWUFBSSxNQUFNLFNBQUMsUUFBUTs2Q0FLM0IsUUFBUSxZQUFJLE1BQU0sU0FBQyw2QkFBNkI7Ozt3QkF0S3JEO0NBeU5DLEFBakhELENBR21DLFdBQVcsR0E4RzdDO1NBOUdZLGFBQWE7OztJQUN4Qix1Q0FBcUM7Ozs7O0lBRXJDLHNDQUEwQzs7Ozs7SUErQ3hDLHdDQUEwQzs7Ozs7OztJQVMxQyxrREFBNkYiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSHR0cEJhY2tlbmQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4sIE9wdGlvbmFsLCBSZW5kZXJlckZhY3RvcnkyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBJY29uRGVmaW5pdGlvbiwgSWNvblNlcnZpY2UgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy1hbmd1bGFyJztcclxuaW1wb3J0IHtcclxuICBCYXJzT3V0bGluZSxcclxuICBDYWxlbmRhck91dGxpbmUsXHJcbiAgQ2FyZXREb3duRmlsbCxcclxuICBDYXJldERvd25PdXRsaW5lLFxyXG4gIENhcmV0VXBGaWxsLFxyXG4gIENhcmV0VXBPdXRsaW5lLFxyXG4gIENoZWNrQ2lyY2xlRmlsbCxcclxuICBDaGVja0NpcmNsZU91dGxpbmUsXHJcbiAgQ2hlY2tPdXRsaW5lLFxyXG4gIENsb2NrQ2lyY2xlT3V0bGluZSxcclxuICBDbG9zZUNpcmNsZUZpbGwsXHJcbiAgQ2xvc2VDaXJjbGVPdXRsaW5lLFxyXG4gIENsb3NlT3V0bGluZSxcclxuICBDb3B5T3V0bGluZSxcclxuICBEb3VibGVMZWZ0T3V0bGluZSxcclxuICBEb3VibGVSaWdodE91dGxpbmUsXHJcbiAgRG93bk91dGxpbmUsXHJcbiAgRWRpdE91dGxpbmUsXHJcbiAgRWxsaXBzaXNPdXRsaW5lLFxyXG4gIEV4Y2xhbWF0aW9uQ2lyY2xlRmlsbCxcclxuICBFeGNsYW1hdGlvbkNpcmNsZU91dGxpbmUsXHJcbiAgRXllT3V0bGluZSxcclxuICBGaWxlRmlsbCxcclxuICBGaWxlT3V0bGluZSxcclxuICBGaWx0ZXJGaWxsLFxyXG4gIEluZm9DaXJjbGVGaWxsLFxyXG4gIEluZm9DaXJjbGVPdXRsaW5lLFxyXG4gIExlZnRPdXRsaW5lLFxyXG4gIExvYWRpbmdPdXRsaW5lLFxyXG4gIFBhcGVyQ2xpcE91dGxpbmUsXHJcbiAgUXVlc3Rpb25DaXJjbGVPdXRsaW5lLFxyXG4gIFJpZ2h0T3V0bGluZSxcclxuICBTZWFyY2hPdXRsaW5lLFxyXG4gIFN0YXJGaWxsLFxyXG4gIFVwbG9hZE91dGxpbmUsXHJcbiAgVXBPdXRsaW5lXHJcbn0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMtYW5ndWxhci9pY29ucyc7XHJcbmltcG9ydCB7IHdhcm4sIHdhcm5EZXByZWNhdGlvbiwgSWNvbkNvbmZpZywgTnpDb25maWdTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBOekljb25mb250T3B0aW9uIHtcclxuICBzY3JpcHRVcmw6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE5aX0lDT05TID0gbmV3IEluamVjdGlvblRva2VuKCduel9pY29ucycpO1xyXG5leHBvcnQgY29uc3QgTlpfSUNPTl9ERUZBVUxUX1RXT1RPTkVfQ09MT1IgPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ256X2ljb25fZGVmYXVsdF90d290b25lX2NvbG9yJyk7XHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX1RXT1RPTkVfQ09MT1IgPSAnIzE4OTBmZic7XHJcbmV4cG9ydCBjb25zdCBOWl9JQ09OU19VU0VEX0JZX1pPUlJPOiBJY29uRGVmaW5pdGlvbltdID0gW1xyXG4gIEJhcnNPdXRsaW5lLFxyXG4gIENhbGVuZGFyT3V0bGluZSxcclxuICBDYXJldFVwRmlsbCxcclxuICBDYXJldFVwT3V0bGluZSxcclxuICBDYXJldERvd25GaWxsLFxyXG4gIENhcmV0RG93bk91dGxpbmUsXHJcbiAgQ2hlY2tDaXJjbGVGaWxsLFxyXG4gIENoZWNrQ2lyY2xlT3V0bGluZSxcclxuICBDaGVja091dGxpbmUsXHJcbiAgQ2xvY2tDaXJjbGVPdXRsaW5lLFxyXG4gIENsb3NlQ2lyY2xlT3V0bGluZSxcclxuICBDbG9zZUNpcmNsZUZpbGwsXHJcbiAgQ2xvc2VPdXRsaW5lLFxyXG4gIENvcHlPdXRsaW5lLFxyXG4gIERvdWJsZUxlZnRPdXRsaW5lLFxyXG4gIERvdWJsZVJpZ2h0T3V0bGluZSxcclxuICBEb3duT3V0bGluZSxcclxuICBFZGl0T3V0bGluZSxcclxuICBFbGxpcHNpc091dGxpbmUsXHJcbiAgRXhjbGFtYXRpb25DaXJjbGVGaWxsLFxyXG4gIEV4Y2xhbWF0aW9uQ2lyY2xlT3V0bGluZSxcclxuICBFeWVPdXRsaW5lLFxyXG4gIEZpbGVGaWxsLFxyXG4gIEZpbGVPdXRsaW5lLFxyXG4gIEZpbHRlckZpbGwsXHJcbiAgSW5mb0NpcmNsZUZpbGwsXHJcbiAgSW5mb0NpcmNsZU91dGxpbmUsXHJcbiAgTGVmdE91dGxpbmUsXHJcbiAgTG9hZGluZ091dGxpbmUsXHJcbiAgUGFwZXJDbGlwT3V0bGluZSxcclxuICBRdWVzdGlvbkNpcmNsZU91dGxpbmUsXHJcbiAgUmlnaHRPdXRsaW5lLFxyXG4gIFN0YXJGaWxsLFxyXG4gIFNlYXJjaE91dGxpbmUsXHJcbiAgU3RhckZpbGwsXHJcbiAgVXBsb2FkT3V0bGluZSxcclxuICBVcE91dGxpbmVcclxuXTtcclxuXHJcbi8qKlxyXG4gKiBJdCBzaG91bGQgYmUgYSBnbG9iYWwgc2luZ2xldG9uLCBvdGhlcndpc2UgcmVnaXN0ZXJlZCBpY29ucyBjb3VsZCBub3QgYmUgZm91bmQuXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekljb25TZXJ2aWNlIGV4dGVuZHMgSWNvblNlcnZpY2Uge1xyXG4gIGNvbmZpZ1VwZGF0ZWQkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgcHJpdmF0ZSBpY29uZm9udENhY2hlID0gbmV3IFNldDxzdHJpbmc+KCk7XHJcblxyXG4gIHdhcm5BUEkodHlwZTogJ29sZCcgfCAnY3Jvc3MnIHwgJ3ZlcnRpY2FsJyk6IHZvaWQge1xyXG4gICAgaWYgKHR5cGUgPT09ICdvbGQnKSB7XHJcbiAgICAgIHdhcm5EZXByZWNhdGlvbihcclxuICAgICAgICBgJzxpIGNsYXNzPVwiYW50aWNvblwiPjwvaT4nIHdvdWxkIGJlIGRlcHJlY2F0ZWQgaW4gOS4wLjAuIFBsZWFzZSB1c2UgJzxpIG56LWljb24gbnpUeXBlPVwiXCI+PC9pPicgQVBJLiBQbGVhc2UgcmVmZXIgaHR0cHM6Ly9uZy5hbnQuZGVzaWduL2NvbXBvbmVudHMvaWNvbi9lbi5gXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZSA9PT0gJ2Nyb3NzJykge1xyXG4gICAgICB3YXJuRGVwcmVjYXRpb24oYCdjcm9zcycgaWNvbiBpcyByZXBsYWNlZCBieSAnY2xvc2UnIGljb24uIFRoaXMgYXV0byBjb3JyZWN0aW9uIHdvdWxkIGJlIHJlbW92ZWQgaW4gOS4wLjAuYCk7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZSA9PT0gJ3ZlcnRpY2FsJykge1xyXG4gICAgICB3YXJuRGVwcmVjYXRpb24oYCd2ZXJ0aWNsZScgaXMgbWlzc3BlbGxlZC4gUGxlYXNlIHVzZSAndmVydGljYWwnLiBUaGlzIG1pc3NwZWxsIHdvdWxkIGJlIGZpeGVkIGluIDkuMC4wLmApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbm9ybWFsaXplU3ZnRWxlbWVudChzdmc6IFNWR0VsZW1lbnQpOiB2b2lkIHtcclxuICAgIGlmICghc3ZnLmdldEF0dHJpYnV0ZSgndmlld0JveCcpKSB7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZShzdmcsICd2aWV3Qm94JywgJzAgMCAxMDI0IDEwMjQnKTtcclxuICAgIH1cclxuICAgIGlmICghc3ZnLmdldEF0dHJpYnV0ZSgnd2lkdGgnKSB8fCAhc3ZnLmdldEF0dHJpYnV0ZSgnaGVpZ2h0JykpIHtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHN2ZywgJ3dpZHRoJywgJzFlbScpO1xyXG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUoc3ZnLCAnaGVpZ2h0JywgJzFlbScpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFzdmcuZ2V0QXR0cmlidXRlKCdmaWxsJykpIHtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHN2ZywgJ2ZpbGwnLCAnY3VycmVudENvbG9yJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmZXRjaEZyb21JY29uZm9udChvcHQ6IE56SWNvbmZvbnRPcHRpb24pOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgc2NyaXB0VXJsIH0gPSBvcHQ7XHJcbiAgICBpZiAodGhpcy5fZG9jdW1lbnQgJiYgIXRoaXMuaWNvbmZvbnRDYWNoZS5oYXMoc2NyaXB0VXJsKSkge1xyXG4gICAgICBjb25zdCBzY3JpcHQgPSB0aGlzLl9yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHNjcmlwdCwgJ3NyYycsIHNjcmlwdFVybCk7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZShzY3JpcHQsICdkYXRhLW5hbWVzcGFjZScsIHNjcmlwdFVybC5yZXBsYWNlKC9eKGh0dHBzP3xodHRwKTovZywgJycpKTtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5fZG9jdW1lbnQuYm9keSwgc2NyaXB0KTtcclxuICAgICAgdGhpcy5pY29uZm9udENhY2hlLmFkZChzY3JpcHRVcmwpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlSWNvbmZvbnRJY29uKHR5cGU6IHN0cmluZyk6IFNWR0VsZW1lbnQge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVNWR0VsZW1lbnRGcm9tU3RyaW5nKGA8c3ZnPjx1c2UgeGxpbms6aHJlZj1cIiR7dHlwZX1cIj48L3N2Zz5gKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyLFxyXG4gICAgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXHJcbiAgICBwcm90ZWN0ZWQgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXHJcbiAgICBAT3B0aW9uYWwoKSBoYW5kbGVyOiBIdHRwQmFja2VuZCxcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIF9kb2N1bWVudDogYW55LFxyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChOWl9JQ09OUykgaWNvbnM/OiBJY29uRGVmaW5pdGlvbltdLFxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVwcmVjYXRlZFxyXG4gICAgICogQGlubmVyXHJcbiAgICAgKi9cclxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTlpfSUNPTl9ERUZBVUxUX1RXT1RPTkVfQ09MT1IpIHByaXZhdGUgbGVnYWN5RGVmYXVsdFR3b3RvbmVDb2xvcj86IHN0cmluZ1xyXG4gICkge1xyXG4gICAgc3VwZXIocmVuZGVyZXJGYWN0b3J5LCBoYW5kbGVyLCBfZG9jdW1lbnQsIHNhbml0aXplcik7XHJcblxyXG4gICAgdGhpcy5vbkNvbmZpZ0NoYW5nZSgpO1xyXG5cclxuICAgIHRoaXMuYWRkSWNvbiguLi5OWl9JQ09OU19VU0VEX0JZX1pPUlJPLCAuLi4oaWNvbnMgfHwgW10pKTtcclxuXHJcbiAgICBpZiAobGVnYWN5RGVmYXVsdFR3b3RvbmVDb2xvcikge1xyXG4gICAgICB3YXJuRGVwcmVjYXRpb24oXHJcbiAgICAgICAgYCdOWl9JQ09OX0RFRkFVTFRfVFdPVE9ORV9DT0xPUicgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIDkuMC4wLiBQbGVhc2UgdXNlICdOWl9DT05GSUcnIGluc3RlYWQhYFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jb25maWdEZWZhdWx0VHdvdG9uZUNvbG9yKCk7XHJcblxyXG4gICAgdGhpcy5jb25maWdEZWZhdWx0VGhlbWUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25Db25maWdDaGFuZ2UoKTogdm9pZCB7XHJcbiAgICB0aGlzLm56Q29uZmlnU2VydmljZS5nZXRDb25maWdDaGFuZ2VFdmVudEZvckNvbXBvbmVudCgnaWNvbicpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY29uZmlnRGVmYXVsdFR3b3RvbmVDb2xvcigpO1xyXG4gICAgICB0aGlzLmNvbmZpZ0RlZmF1bHRUaGVtZSgpO1xyXG4gICAgICB0aGlzLmNvbmZpZ1VwZGF0ZWQkLm5leHQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb25maWdEZWZhdWx0VGhlbWUoKTogdm9pZCB7XHJcbiAgICBjb25zdCBpY29uQ29uZmlnID0gdGhpcy5nZXRDb25maWcoKTtcclxuICAgIHRoaXMuZGVmYXVsdFRoZW1lID0gaWNvbkNvbmZpZy5uelRoZW1lIHx8ICdvdXRsaW5lJztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29uZmlnRGVmYXVsdFR3b3RvbmVDb2xvcigpOiB2b2lkIHtcclxuICAgIGNvbnN0IGljb25Db25maWcgPSB0aGlzLmdldENvbmZpZygpO1xyXG4gICAgY29uc3QgZGVmYXVsdFR3b3RvbmVDb2xvciA9IGljb25Db25maWcubnpUd290b25lQ29sb3IgfHwgdGhpcy5sZWdhY3lEZWZhdWx0VHdvdG9uZUNvbG9yO1xyXG5cclxuICAgIGxldCBwcmltYXJ5Q29sb3IgPSBERUZBVUxUX1RXT1RPTkVfQ09MT1I7XHJcblxyXG4gICAgaWYgKGRlZmF1bHRUd290b25lQ29sb3IpIHtcclxuICAgICAgaWYgKGRlZmF1bHRUd290b25lQ29sb3Iuc3RhcnRzV2l0aCgnIycpKSB7XHJcbiAgICAgICAgcHJpbWFyeUNvbG9yID0gZGVmYXVsdFR3b3RvbmVDb2xvcjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB3YXJuKCdUd290b25lIGNvbG9yIG11c3QgYmUgYSBoZXggY29sb3IhJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnR3b1RvbmVDb2xvciA9IHsgcHJpbWFyeUNvbG9yIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldENvbmZpZygpOiBJY29uQ29uZmlnIHtcclxuICAgIHJldHVybiB0aGlzLm56Q29uZmlnU2VydmljZS5nZXRDb25maWdGb3JDb21wb25lbnQoJ2ljb24nKSB8fCB7fTtcclxuICB9XHJcbn1cclxuIl19