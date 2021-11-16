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
export const NZ_ICONS = new InjectionToken('nz_icons');
/** @type {?} */
export const NZ_ICON_DEFAULT_TWOTONE_COLOR = new InjectionToken('nz_icon_default_twotone_color');
/** @type {?} */
export const DEFAULT_TWOTONE_COLOR = '#1890ff';
/** @type {?} */
export const NZ_ICONS_USED_BY_ZORRO = [
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
export class NzIconService extends IconService {
    /**
     * @param {?} rendererFactory
     * @param {?} sanitizer
     * @param {?} nzConfigService
     * @param {?} handler
     * @param {?} _document
     * @param {?=} icons
     * @param {?=} legacyDefaultTwotoneColor
     */
    constructor(rendererFactory, sanitizer, nzConfigService, handler, 
    // tslint:disable-next-line:no-any
    _document, icons, legacyDefaultTwotoneColor) {
        super(rendererFactory, handler, _document, sanitizer);
        this.nzConfigService = nzConfigService;
        this.legacyDefaultTwotoneColor = legacyDefaultTwotoneColor;
        this.configUpdated$ = new Subject();
        this.iconfontCache = new Set();
        this.onConfigChange();
        this.addIcon(...NZ_ICONS_USED_BY_ZORRO, ...(icons || []));
        if (legacyDefaultTwotoneColor) {
            warnDeprecation(`'NZ_ICON_DEFAULT_TWOTONE_COLOR' is deprecated and will be removed in 9.0.0. Please use 'NZ_CONFIG' instead!`);
        }
        this.configDefaultTwotoneColor();
        this.configDefaultTheme();
    }
    /**
     * @param {?} type
     * @return {?}
     */
    warnAPI(type) {
        if (type === 'old') {
            warnDeprecation(`'<i class="anticon"></i>' would be deprecated in 9.0.0. Please use '<i nz-icon nzType=""></i>' API. Please refer https://ng.ant.design/components/icon/en.`);
        }
        if (type === 'cross') {
            warnDeprecation(`'cross' icon is replaced by 'close' icon. This auto correction would be removed in 9.0.0.`);
        }
        if (type === 'vertical') {
            warnDeprecation(`'verticle' is misspelled. Please use 'vertical'. This misspell would be fixed in 9.0.0.`);
        }
    }
    /**
     * @param {?} svg
     * @return {?}
     */
    normalizeSvgElement(svg) {
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
    }
    /**
     * @param {?} opt
     * @return {?}
     */
    fetchFromIconfont(opt) {
        const { scriptUrl } = opt;
        if (this._document && !this.iconfontCache.has(scriptUrl)) {
            /** @type {?} */
            const script = this._renderer.createElement('script');
            this._renderer.setAttribute(script, 'src', scriptUrl);
            this._renderer.setAttribute(script, 'data-namespace', scriptUrl.replace(/^(https?|http):/g, ''));
            this._renderer.appendChild(this._document.body, script);
            this.iconfontCache.add(scriptUrl);
        }
    }
    /**
     * @param {?} type
     * @return {?}
     */
    createIconfontIcon(type) {
        return this._createSVGElementFromString(`<svg><use xlink:href="${type}"></svg>`);
    }
    /**
     * @private
     * @return {?}
     */
    onConfigChange() {
        this.nzConfigService.getConfigChangeEventForComponent('icon').subscribe((/**
         * @return {?}
         */
        () => {
            this.configDefaultTwotoneColor();
            this.configDefaultTheme();
            this.configUpdated$.next();
        }));
    }
    /**
     * @private
     * @return {?}
     */
    configDefaultTheme() {
        /** @type {?} */
        const iconConfig = this.getConfig();
        this.defaultTheme = iconConfig.nzTheme || 'outline';
    }
    /**
     * @private
     * @return {?}
     */
    configDefaultTwotoneColor() {
        /** @type {?} */
        const iconConfig = this.getConfig();
        /** @type {?} */
        const defaultTwotoneColor = iconConfig.nzTwotoneColor || this.legacyDefaultTwotoneColor;
        /** @type {?} */
        let primaryColor = DEFAULT_TWOTONE_COLOR;
        if (defaultTwotoneColor) {
            if (defaultTwotoneColor.startsWith('#')) {
                primaryColor = defaultTwotoneColor;
            }
            else {
                warn('Twotone color must be a hex color!');
            }
        }
        this.twoToneColor = { primaryColor };
    }
    /**
     * @private
     * @return {?}
     */
    getConfig() {
        return this.nzConfigService.getConfigForComponent('icon') || {};
    }
}
NzIconService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NzIconService.ctorParameters = () => [
    { type: RendererFactory2 },
    { type: DomSanitizer },
    { type: NzConfigService },
    { type: HttpBackend, decorators: [{ type: Optional }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
    { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [NZ_ICONS,] }] },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [NZ_ICON_DEFAULT_TWOTONE_COLOR,] }] }
];
/** @nocollapse */ NzIconService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzIconService_Factory() { return new NzIconService(i0.ɵɵinject(i0.RendererFactory2), i0.ɵɵinject(i1.DomSanitizer), i0.ɵɵinject(i2.NzConfigService), i0.ɵɵinject(i3.HttpBackend, 8), i0.ɵɵinject(i4.DOCUMENT, 8), i0.ɵɵinject(NZ_ICONS, 8), i0.ɵɵinject(NZ_ICON_DEFAULT_TWOTONE_COLOR, 8)); }, token: NzIconService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaWNvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9pY29uLyIsInNvdXJjZXMiOlsibnotaWNvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9GLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQWtCLFdBQVcsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3hFLE9BQU8sRUFDTCxXQUFXLEVBQ1gsZUFBZSxFQUNmLGFBQWEsRUFDYixnQkFBZ0IsRUFDaEIsV0FBVyxFQUNYLGNBQWMsRUFDZCxlQUFlLEVBQ2Ysa0JBQWtCLEVBQ2xCLFlBQVksRUFDWixrQkFBa0IsRUFDbEIsZUFBZSxFQUNmLGtCQUFrQixFQUNsQixZQUFZLEVBQ1osV0FBVyxFQUNYLGlCQUFpQixFQUNqQixrQkFBa0IsRUFDbEIsV0FBVyxFQUNYLFdBQVcsRUFDWCxlQUFlLEVBQ2YscUJBQXFCLEVBQ3JCLHdCQUF3QixFQUN4QixVQUFVLEVBQ1YsUUFBUSxFQUNSLFdBQVcsRUFDWCxVQUFVLEVBQ1YsY0FBYyxFQUNkLGlCQUFpQixFQUNqQixXQUFXLEVBQ1gsY0FBYyxFQUNkLGdCQUFnQixFQUNoQixxQkFBcUIsRUFDckIsWUFBWSxFQUNaLGFBQWEsRUFDYixRQUFRLEVBQ1IsYUFBYSxFQUNiLFNBQVMsRUFDVixNQUFNLGlDQUFpQyxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFjLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3hGLE9B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QVEsWUFBSSxNQUFNLFNBQUMsNkJBQTZCOzs7OztJQTFEbkQsdUNBQXFDOzs7OztJQUVyQyxzQ0FBMEM7Ozs7O0lBK0N4Qyx3Q0FBMEM7Ozs7Ozs7SUFTMUMsa0RBQTZGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEh0dHBCYWNrZW5kIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIEluamVjdGlvblRva2VuLCBPcHRpb25hbCwgUmVuZGVyZXJGYWN0b3J5MiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgSWNvbkRlZmluaXRpb24sIEljb25TZXJ2aWNlIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMtYW5ndWxhcic7XHJcbmltcG9ydCB7XHJcbiAgQmFyc091dGxpbmUsXHJcbiAgQ2FsZW5kYXJPdXRsaW5lLFxyXG4gIENhcmV0RG93bkZpbGwsXHJcbiAgQ2FyZXREb3duT3V0bGluZSxcclxuICBDYXJldFVwRmlsbCxcclxuICBDYXJldFVwT3V0bGluZSxcclxuICBDaGVja0NpcmNsZUZpbGwsXHJcbiAgQ2hlY2tDaXJjbGVPdXRsaW5lLFxyXG4gIENoZWNrT3V0bGluZSxcclxuICBDbG9ja0NpcmNsZU91dGxpbmUsXHJcbiAgQ2xvc2VDaXJjbGVGaWxsLFxyXG4gIENsb3NlQ2lyY2xlT3V0bGluZSxcclxuICBDbG9zZU91dGxpbmUsXHJcbiAgQ29weU91dGxpbmUsXHJcbiAgRG91YmxlTGVmdE91dGxpbmUsXHJcbiAgRG91YmxlUmlnaHRPdXRsaW5lLFxyXG4gIERvd25PdXRsaW5lLFxyXG4gIEVkaXRPdXRsaW5lLFxyXG4gIEVsbGlwc2lzT3V0bGluZSxcclxuICBFeGNsYW1hdGlvbkNpcmNsZUZpbGwsXHJcbiAgRXhjbGFtYXRpb25DaXJjbGVPdXRsaW5lLFxyXG4gIEV5ZU91dGxpbmUsXHJcbiAgRmlsZUZpbGwsXHJcbiAgRmlsZU91dGxpbmUsXHJcbiAgRmlsdGVyRmlsbCxcclxuICBJbmZvQ2lyY2xlRmlsbCxcclxuICBJbmZvQ2lyY2xlT3V0bGluZSxcclxuICBMZWZ0T3V0bGluZSxcclxuICBMb2FkaW5nT3V0bGluZSxcclxuICBQYXBlckNsaXBPdXRsaW5lLFxyXG4gIFF1ZXN0aW9uQ2lyY2xlT3V0bGluZSxcclxuICBSaWdodE91dGxpbmUsXHJcbiAgU2VhcmNoT3V0bGluZSxcclxuICBTdGFyRmlsbCxcclxuICBVcGxvYWRPdXRsaW5lLFxyXG4gIFVwT3V0bGluZVxyXG59IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLWFuZ3VsYXIvaWNvbnMnO1xyXG5pbXBvcnQgeyB3YXJuLCB3YXJuRGVwcmVjYXRpb24sIEljb25Db25maWcsIE56Q29uZmlnU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTnpJY29uZm9udE9wdGlvbiB7XHJcbiAgc2NyaXB0VXJsOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBOWl9JQ09OUyA9IG5ldyBJbmplY3Rpb25Ub2tlbignbnpfaWNvbnMnKTtcclxuZXhwb3J0IGNvbnN0IE5aX0lDT05fREVGQVVMVF9UV09UT05FX0NPTE9SID0gbmV3IEluamVjdGlvblRva2VuKCduel9pY29uX2RlZmF1bHRfdHdvdG9uZV9jb2xvcicpO1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9UV09UT05FX0NPTE9SID0gJyMxODkwZmYnO1xyXG5leHBvcnQgY29uc3QgTlpfSUNPTlNfVVNFRF9CWV9aT1JSTzogSWNvbkRlZmluaXRpb25bXSA9IFtcclxuICBCYXJzT3V0bGluZSxcclxuICBDYWxlbmRhck91dGxpbmUsXHJcbiAgQ2FyZXRVcEZpbGwsXHJcbiAgQ2FyZXRVcE91dGxpbmUsXHJcbiAgQ2FyZXREb3duRmlsbCxcclxuICBDYXJldERvd25PdXRsaW5lLFxyXG4gIENoZWNrQ2lyY2xlRmlsbCxcclxuICBDaGVja0NpcmNsZU91dGxpbmUsXHJcbiAgQ2hlY2tPdXRsaW5lLFxyXG4gIENsb2NrQ2lyY2xlT3V0bGluZSxcclxuICBDbG9zZUNpcmNsZU91dGxpbmUsXHJcbiAgQ2xvc2VDaXJjbGVGaWxsLFxyXG4gIENsb3NlT3V0bGluZSxcclxuICBDb3B5T3V0bGluZSxcclxuICBEb3VibGVMZWZ0T3V0bGluZSxcclxuICBEb3VibGVSaWdodE91dGxpbmUsXHJcbiAgRG93bk91dGxpbmUsXHJcbiAgRWRpdE91dGxpbmUsXHJcbiAgRWxsaXBzaXNPdXRsaW5lLFxyXG4gIEV4Y2xhbWF0aW9uQ2lyY2xlRmlsbCxcclxuICBFeGNsYW1hdGlvbkNpcmNsZU91dGxpbmUsXHJcbiAgRXllT3V0bGluZSxcclxuICBGaWxlRmlsbCxcclxuICBGaWxlT3V0bGluZSxcclxuICBGaWx0ZXJGaWxsLFxyXG4gIEluZm9DaXJjbGVGaWxsLFxyXG4gIEluZm9DaXJjbGVPdXRsaW5lLFxyXG4gIExlZnRPdXRsaW5lLFxyXG4gIExvYWRpbmdPdXRsaW5lLFxyXG4gIFBhcGVyQ2xpcE91dGxpbmUsXHJcbiAgUXVlc3Rpb25DaXJjbGVPdXRsaW5lLFxyXG4gIFJpZ2h0T3V0bGluZSxcclxuICBTdGFyRmlsbCxcclxuICBTZWFyY2hPdXRsaW5lLFxyXG4gIFN0YXJGaWxsLFxyXG4gIFVwbG9hZE91dGxpbmUsXHJcbiAgVXBPdXRsaW5lXHJcbl07XHJcblxyXG4vKipcclxuICogSXQgc2hvdWxkIGJlIGEgZ2xvYmFsIHNpbmdsZXRvbiwgb3RoZXJ3aXNlIHJlZ2lzdGVyZWQgaWNvbnMgY291bGQgbm90IGJlIGZvdW5kLlxyXG4gKi9cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpJY29uU2VydmljZSBleHRlbmRzIEljb25TZXJ2aWNlIHtcclxuICBjb25maWdVcGRhdGVkJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gIHByaXZhdGUgaWNvbmZvbnRDYWNoZSA9IG5ldyBTZXQ8c3RyaW5nPigpO1xyXG5cclxuICB3YXJuQVBJKHR5cGU6ICdvbGQnIHwgJ2Nyb3NzJyB8ICd2ZXJ0aWNhbCcpOiB2b2lkIHtcclxuICAgIGlmICh0eXBlID09PSAnb2xkJykge1xyXG4gICAgICB3YXJuRGVwcmVjYXRpb24oXHJcbiAgICAgICAgYCc8aSBjbGFzcz1cImFudGljb25cIj48L2k+JyB3b3VsZCBiZSBkZXByZWNhdGVkIGluIDkuMC4wLiBQbGVhc2UgdXNlICc8aSBuei1pY29uIG56VHlwZT1cIlwiPjwvaT4nIEFQSS4gUGxlYXNlIHJlZmVyIGh0dHBzOi8vbmcuYW50LmRlc2lnbi9jb21wb25lbnRzL2ljb24vZW4uYFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGUgPT09ICdjcm9zcycpIHtcclxuICAgICAgd2FybkRlcHJlY2F0aW9uKGAnY3Jvc3MnIGljb24gaXMgcmVwbGFjZWQgYnkgJ2Nsb3NlJyBpY29uLiBUaGlzIGF1dG8gY29ycmVjdGlvbiB3b3VsZCBiZSByZW1vdmVkIGluIDkuMC4wLmApO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgd2FybkRlcHJlY2F0aW9uKGAndmVydGljbGUnIGlzIG1pc3NwZWxsZWQuIFBsZWFzZSB1c2UgJ3ZlcnRpY2FsJy4gVGhpcyBtaXNzcGVsbCB3b3VsZCBiZSBmaXhlZCBpbiA5LjAuMC5gKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5vcm1hbGl6ZVN2Z0VsZW1lbnQoc3ZnOiBTVkdFbGVtZW50KTogdm9pZCB7XHJcbiAgICBpZiAoIXN2Zy5nZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnKSkge1xyXG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUoc3ZnLCAndmlld0JveCcsICcwIDAgMTAyNCAxMDI0Jyk7XHJcbiAgICB9XHJcbiAgICBpZiAoIXN2Zy5nZXRBdHRyaWJ1dGUoJ3dpZHRoJykgfHwgIXN2Zy5nZXRBdHRyaWJ1dGUoJ2hlaWdodCcpKSB7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZShzdmcsICd3aWR0aCcsICcxZW0nKTtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHN2ZywgJ2hlaWdodCcsICcxZW0nKTtcclxuICAgIH1cclxuICAgIGlmICghc3ZnLmdldEF0dHJpYnV0ZSgnZmlsbCcpKSB7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZShzdmcsICdmaWxsJywgJ2N1cnJlbnRDb2xvcicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZmV0Y2hGcm9tSWNvbmZvbnQob3B0OiBOekljb25mb250T3B0aW9uKTogdm9pZCB7XHJcbiAgICBjb25zdCB7IHNjcmlwdFVybCB9ID0gb3B0O1xyXG4gICAgaWYgKHRoaXMuX2RvY3VtZW50ICYmICF0aGlzLmljb25mb250Q2FjaGUuaGFzKHNjcmlwdFVybCkpIHtcclxuICAgICAgY29uc3Qgc2NyaXB0ID0gdGhpcy5fcmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZShzY3JpcHQsICdzcmMnLCBzY3JpcHRVcmwpO1xyXG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUoc2NyaXB0LCAnZGF0YS1uYW1lc3BhY2UnLCBzY3JpcHRVcmwucmVwbGFjZSgvXihodHRwcz98aHR0cCk6L2csICcnKSk7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuX2RvY3VtZW50LmJvZHksIHNjcmlwdCk7XHJcbiAgICAgIHRoaXMuaWNvbmZvbnRDYWNoZS5hZGQoc2NyaXB0VXJsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNyZWF0ZUljb25mb250SWNvbih0eXBlOiBzdHJpbmcpOiBTVkdFbGVtZW50IHtcclxuICAgIHJldHVybiB0aGlzLl9jcmVhdGVTVkdFbGVtZW50RnJvbVN0cmluZyhgPHN2Zz48dXNlIHhsaW5rOmhyZWY9XCIke3R5cGV9XCI+PC9zdmc+YCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5MixcclxuICAgIHNhbml0aXplcjogRG9tU2FuaXRpemVyLFxyXG4gICAgcHJvdGVjdGVkIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxyXG4gICAgQE9wdGlvbmFsKCkgaGFuZGxlcjogSHR0cEJhY2tlbmQsXHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBfZG9jdW1lbnQ6IGFueSxcclxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTlpfSUNPTlMpIGljb25zPzogSWNvbkRlZmluaXRpb25bXSxcclxuICAgIC8qKlxyXG4gICAgICogQGRlcHJlY2F0ZWRcclxuICAgICAqIEBpbm5lclxyXG4gICAgICovXHJcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE5aX0lDT05fREVGQVVMVF9UV09UT05FX0NPTE9SKSBwcml2YXRlIGxlZ2FjeURlZmF1bHRUd290b25lQ29sb3I/OiBzdHJpbmdcclxuICApIHtcclxuICAgIHN1cGVyKHJlbmRlcmVyRmFjdG9yeSwgaGFuZGxlciwgX2RvY3VtZW50LCBzYW5pdGl6ZXIpO1xyXG5cclxuICAgIHRoaXMub25Db25maWdDaGFuZ2UoKTtcclxuXHJcbiAgICB0aGlzLmFkZEljb24oLi4uTlpfSUNPTlNfVVNFRF9CWV9aT1JSTywgLi4uKGljb25zIHx8IFtdKSk7XHJcblxyXG4gICAgaWYgKGxlZ2FjeURlZmF1bHRUd290b25lQ29sb3IpIHtcclxuICAgICAgd2FybkRlcHJlY2F0aW9uKFxyXG4gICAgICAgIGAnTlpfSUNPTl9ERUZBVUxUX1RXT1RPTkVfQ09MT1InIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiA5LjAuMC4gUGxlYXNlIHVzZSAnTlpfQ09ORklHJyBpbnN0ZWFkIWBcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHRoaXMuY29uZmlnRGVmYXVsdFR3b3RvbmVDb2xvcigpO1xyXG5cclxuICAgIHRoaXMuY29uZmlnRGVmYXVsdFRoZW1lKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uQ29uZmlnQ2hhbmdlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5uekNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnQ2hhbmdlRXZlbnRGb3JDb21wb25lbnQoJ2ljb24nKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNvbmZpZ0RlZmF1bHRUd290b25lQ29sb3IoKTtcclxuICAgICAgdGhpcy5jb25maWdEZWZhdWx0VGhlbWUoKTtcclxuICAgICAgdGhpcy5jb25maWdVcGRhdGVkJC5uZXh0KCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29uZmlnRGVmYXVsdFRoZW1lKCk6IHZvaWQge1xyXG4gICAgY29uc3QgaWNvbkNvbmZpZyA9IHRoaXMuZ2V0Q29uZmlnKCk7XHJcbiAgICB0aGlzLmRlZmF1bHRUaGVtZSA9IGljb25Db25maWcubnpUaGVtZSB8fCAnb3V0bGluZSc7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbmZpZ0RlZmF1bHRUd290b25lQ29sb3IoKTogdm9pZCB7XHJcbiAgICBjb25zdCBpY29uQ29uZmlnID0gdGhpcy5nZXRDb25maWcoKTtcclxuICAgIGNvbnN0IGRlZmF1bHRUd290b25lQ29sb3IgPSBpY29uQ29uZmlnLm56VHdvdG9uZUNvbG9yIHx8IHRoaXMubGVnYWN5RGVmYXVsdFR3b3RvbmVDb2xvcjtcclxuXHJcbiAgICBsZXQgcHJpbWFyeUNvbG9yID0gREVGQVVMVF9UV09UT05FX0NPTE9SO1xyXG5cclxuICAgIGlmIChkZWZhdWx0VHdvdG9uZUNvbG9yKSB7XHJcbiAgICAgIGlmIChkZWZhdWx0VHdvdG9uZUNvbG9yLnN0YXJ0c1dpdGgoJyMnKSkge1xyXG4gICAgICAgIHByaW1hcnlDb2xvciA9IGRlZmF1bHRUd290b25lQ29sb3I7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd2FybignVHdvdG9uZSBjb2xvciBtdXN0IGJlIGEgaGV4IGNvbG9yIScpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50d29Ub25lQ29sb3IgPSB7IHByaW1hcnlDb2xvciB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRDb25maWcoKTogSWNvbkNvbmZpZyB7XHJcbiAgICByZXR1cm4gdGhpcy5uekNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnRm9yQ29tcG9uZW50KCdpY29uJykgfHwge307XHJcbiAgfVxyXG59XHJcbiJdfQ==