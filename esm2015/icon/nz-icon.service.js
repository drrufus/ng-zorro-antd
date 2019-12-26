/**
 * @fileoverview added by tsickle
 * Generated from: nz-icon.service.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaWNvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9pY29uLyIsInNvdXJjZXMiOlsibnotaWNvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFrQixXQUFXLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RSxPQUFPLEVBQ0wsV0FBVyxFQUNYLGVBQWUsRUFDZixhQUFhLEVBQ2IsZ0JBQWdCLEVBQ2hCLFdBQVcsRUFDWCxjQUFjLEVBQ2QsZUFBZSxFQUNmLGtCQUFrQixFQUNsQixZQUFZLEVBQ1osa0JBQWtCLEVBQ2xCLGVBQWUsRUFDZixrQkFBa0IsRUFDbEIsWUFBWSxFQUNaLFdBQVcsRUFDWCxpQkFBaUIsRUFDakIsa0JBQWtCLEVBQ2xCLFdBQVcsRUFDWCxXQUFXLEVBQ1gsZUFBZSxFQUNmLHFCQUFxQixFQUNyQix3QkFBd0IsRUFDeEIsVUFBVSxFQUNWLFFBQVEsRUFDUixXQUFXLEVBQ1gsVUFBVSxFQUNWLGNBQWMsRUFDZCxpQkFBaUIsRUFDakIsV0FBVyxFQUNYLGNBQWMsRUFDZCxnQkFBZ0IsRUFDaEIscUJBQXFCLEVBQ3JCLFlBQVksRUFDWixhQUFhLEVBQ2IsUUFBUSxFQUNSLGFBQWEsRUFDYixTQUFTLEVBQ1YsTUFBTSxpQ0FBaUMsQ0FBQztBQUN6QyxPQUFPLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBYyxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RixP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QUFRLFlBQUksTUFBTSxTQUFDLDZCQUE2Qjs7Ozs7SUExRG5ELHVDQUFxQzs7Ozs7SUFFckMsc0NBQTBDOzs7OztJQStDeEMsd0NBQTBDOzs7Ozs7O0lBUzFDLGtEQUE2RiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBIdHRwQmFja2VuZCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiwgT3B0aW9uYWwsIFJlbmRlcmVyRmFjdG9yeTIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IEljb25EZWZpbml0aW9uLCBJY29uU2VydmljZSB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLWFuZ3VsYXInO1xyXG5pbXBvcnQge1xyXG4gIEJhcnNPdXRsaW5lLFxyXG4gIENhbGVuZGFyT3V0bGluZSxcclxuICBDYXJldERvd25GaWxsLFxyXG4gIENhcmV0RG93bk91dGxpbmUsXHJcbiAgQ2FyZXRVcEZpbGwsXHJcbiAgQ2FyZXRVcE91dGxpbmUsXHJcbiAgQ2hlY2tDaXJjbGVGaWxsLFxyXG4gIENoZWNrQ2lyY2xlT3V0bGluZSxcclxuICBDaGVja091dGxpbmUsXHJcbiAgQ2xvY2tDaXJjbGVPdXRsaW5lLFxyXG4gIENsb3NlQ2lyY2xlRmlsbCxcclxuICBDbG9zZUNpcmNsZU91dGxpbmUsXHJcbiAgQ2xvc2VPdXRsaW5lLFxyXG4gIENvcHlPdXRsaW5lLFxyXG4gIERvdWJsZUxlZnRPdXRsaW5lLFxyXG4gIERvdWJsZVJpZ2h0T3V0bGluZSxcclxuICBEb3duT3V0bGluZSxcclxuICBFZGl0T3V0bGluZSxcclxuICBFbGxpcHNpc091dGxpbmUsXHJcbiAgRXhjbGFtYXRpb25DaXJjbGVGaWxsLFxyXG4gIEV4Y2xhbWF0aW9uQ2lyY2xlT3V0bGluZSxcclxuICBFeWVPdXRsaW5lLFxyXG4gIEZpbGVGaWxsLFxyXG4gIEZpbGVPdXRsaW5lLFxyXG4gIEZpbHRlckZpbGwsXHJcbiAgSW5mb0NpcmNsZUZpbGwsXHJcbiAgSW5mb0NpcmNsZU91dGxpbmUsXHJcbiAgTGVmdE91dGxpbmUsXHJcbiAgTG9hZGluZ091dGxpbmUsXHJcbiAgUGFwZXJDbGlwT3V0bGluZSxcclxuICBRdWVzdGlvbkNpcmNsZU91dGxpbmUsXHJcbiAgUmlnaHRPdXRsaW5lLFxyXG4gIFNlYXJjaE91dGxpbmUsXHJcbiAgU3RhckZpbGwsXHJcbiAgVXBsb2FkT3V0bGluZSxcclxuICBVcE91dGxpbmVcclxufSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy1hbmd1bGFyL2ljb25zJztcclxuaW1wb3J0IHsgd2Fybiwgd2FybkRlcHJlY2F0aW9uLCBJY29uQ29uZmlnLCBOekNvbmZpZ1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE56SWNvbmZvbnRPcHRpb24ge1xyXG4gIHNjcmlwdFVybDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTlpfSUNPTlMgPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ256X2ljb25zJyk7XHJcbmV4cG9ydCBjb25zdCBOWl9JQ09OX0RFRkFVTFRfVFdPVE9ORV9DT0xPUiA9IG5ldyBJbmplY3Rpb25Ub2tlbignbnpfaWNvbl9kZWZhdWx0X3R3b3RvbmVfY29sb3InKTtcclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfVFdPVE9ORV9DT0xPUiA9ICcjMTg5MGZmJztcclxuZXhwb3J0IGNvbnN0IE5aX0lDT05TX1VTRURfQllfWk9SUk86IEljb25EZWZpbml0aW9uW10gPSBbXHJcbiAgQmFyc091dGxpbmUsXHJcbiAgQ2FsZW5kYXJPdXRsaW5lLFxyXG4gIENhcmV0VXBGaWxsLFxyXG4gIENhcmV0VXBPdXRsaW5lLFxyXG4gIENhcmV0RG93bkZpbGwsXHJcbiAgQ2FyZXREb3duT3V0bGluZSxcclxuICBDaGVja0NpcmNsZUZpbGwsXHJcbiAgQ2hlY2tDaXJjbGVPdXRsaW5lLFxyXG4gIENoZWNrT3V0bGluZSxcclxuICBDbG9ja0NpcmNsZU91dGxpbmUsXHJcbiAgQ2xvc2VDaXJjbGVPdXRsaW5lLFxyXG4gIENsb3NlQ2lyY2xlRmlsbCxcclxuICBDbG9zZU91dGxpbmUsXHJcbiAgQ29weU91dGxpbmUsXHJcbiAgRG91YmxlTGVmdE91dGxpbmUsXHJcbiAgRG91YmxlUmlnaHRPdXRsaW5lLFxyXG4gIERvd25PdXRsaW5lLFxyXG4gIEVkaXRPdXRsaW5lLFxyXG4gIEVsbGlwc2lzT3V0bGluZSxcclxuICBFeGNsYW1hdGlvbkNpcmNsZUZpbGwsXHJcbiAgRXhjbGFtYXRpb25DaXJjbGVPdXRsaW5lLFxyXG4gIEV5ZU91dGxpbmUsXHJcbiAgRmlsZUZpbGwsXHJcbiAgRmlsZU91dGxpbmUsXHJcbiAgRmlsdGVyRmlsbCxcclxuICBJbmZvQ2lyY2xlRmlsbCxcclxuICBJbmZvQ2lyY2xlT3V0bGluZSxcclxuICBMZWZ0T3V0bGluZSxcclxuICBMb2FkaW5nT3V0bGluZSxcclxuICBQYXBlckNsaXBPdXRsaW5lLFxyXG4gIFF1ZXN0aW9uQ2lyY2xlT3V0bGluZSxcclxuICBSaWdodE91dGxpbmUsXHJcbiAgU3RhckZpbGwsXHJcbiAgU2VhcmNoT3V0bGluZSxcclxuICBTdGFyRmlsbCxcclxuICBVcGxvYWRPdXRsaW5lLFxyXG4gIFVwT3V0bGluZVxyXG5dO1xyXG5cclxuLyoqXHJcbiAqIEl0IHNob3VsZCBiZSBhIGdsb2JhbCBzaW5nbGV0b24sIG90aGVyd2lzZSByZWdpc3RlcmVkIGljb25zIGNvdWxkIG5vdCBiZSBmb3VuZC5cclxuICovXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE56SWNvblNlcnZpY2UgZXh0ZW5kcyBJY29uU2VydmljZSB7XHJcbiAgY29uZmlnVXBkYXRlZCQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cclxuICBwcml2YXRlIGljb25mb250Q2FjaGUgPSBuZXcgU2V0PHN0cmluZz4oKTtcclxuXHJcbiAgd2FybkFQSSh0eXBlOiAnb2xkJyB8ICdjcm9zcycgfCAndmVydGljYWwnKTogdm9pZCB7XHJcbiAgICBpZiAodHlwZSA9PT0gJ29sZCcpIHtcclxuICAgICAgd2FybkRlcHJlY2F0aW9uKFxyXG4gICAgICAgIGAnPGkgY2xhc3M9XCJhbnRpY29uXCI+PC9pPicgd291bGQgYmUgZGVwcmVjYXRlZCBpbiA5LjAuMC4gUGxlYXNlIHVzZSAnPGkgbnotaWNvbiBuelR5cGU9XCJcIj48L2k+JyBBUEkuIFBsZWFzZSByZWZlciBodHRwczovL25nLmFudC5kZXNpZ24vY29tcG9uZW50cy9pY29uL2VuLmBcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlID09PSAnY3Jvc3MnKSB7XHJcbiAgICAgIHdhcm5EZXByZWNhdGlvbihgJ2Nyb3NzJyBpY29uIGlzIHJlcGxhY2VkIGJ5ICdjbG9zZScgaWNvbi4gVGhpcyBhdXRvIGNvcnJlY3Rpb24gd291bGQgYmUgcmVtb3ZlZCBpbiA5LjAuMC5gKTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgIHdhcm5EZXByZWNhdGlvbihgJ3ZlcnRpY2xlJyBpcyBtaXNzcGVsbGVkLiBQbGVhc2UgdXNlICd2ZXJ0aWNhbCcuIFRoaXMgbWlzc3BlbGwgd291bGQgYmUgZml4ZWQgaW4gOS4wLjAuYCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBub3JtYWxpemVTdmdFbGVtZW50KHN2ZzogU1ZHRWxlbWVudCk6IHZvaWQge1xyXG4gICAgaWYgKCFzdmcuZ2V0QXR0cmlidXRlKCd2aWV3Qm94JykpIHtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHN2ZywgJ3ZpZXdCb3gnLCAnMCAwIDEwMjQgMTAyNCcpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFzdmcuZ2V0QXR0cmlidXRlKCd3aWR0aCcpIHx8ICFzdmcuZ2V0QXR0cmlidXRlKCdoZWlnaHQnKSkge1xyXG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUoc3ZnLCAnd2lkdGgnLCAnMWVtJyk7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZShzdmcsICdoZWlnaHQnLCAnMWVtJyk7XHJcbiAgICB9XHJcbiAgICBpZiAoIXN2Zy5nZXRBdHRyaWJ1dGUoJ2ZpbGwnKSkge1xyXG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUoc3ZnLCAnZmlsbCcsICdjdXJyZW50Q29sb3InKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZldGNoRnJvbUljb25mb250KG9wdDogTnpJY29uZm9udE9wdGlvbik6IHZvaWQge1xyXG4gICAgY29uc3QgeyBzY3JpcHRVcmwgfSA9IG9wdDtcclxuICAgIGlmICh0aGlzLl9kb2N1bWVudCAmJiAhdGhpcy5pY29uZm9udENhY2hlLmhhcyhzY3JpcHRVcmwpKSB7XHJcbiAgICAgIGNvbnN0IHNjcmlwdCA9IHRoaXMuX3JlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUoc2NyaXB0LCAnc3JjJywgc2NyaXB0VXJsKTtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHNjcmlwdCwgJ2RhdGEtbmFtZXNwYWNlJywgc2NyaXB0VXJsLnJlcGxhY2UoL14oaHR0cHM/fGh0dHApOi9nLCAnJykpO1xyXG4gICAgICB0aGlzLl9yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLl9kb2N1bWVudC5ib2R5LCBzY3JpcHQpO1xyXG4gICAgICB0aGlzLmljb25mb250Q2FjaGUuYWRkKHNjcmlwdFVybCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGVJY29uZm9udEljb24odHlwZTogc3RyaW5nKTogU1ZHRWxlbWVudCB7XHJcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlU1ZHRWxlbWVudEZyb21TdHJpbmcoYDxzdmc+PHVzZSB4bGluazpocmVmPVwiJHt0eXBlfVwiPjwvc3ZnPmApO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICByZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTIsXHJcbiAgICBzYW5pdGl6ZXI6IERvbVNhbml0aXplcixcclxuICAgIHByb3RlY3RlZCBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcclxuICAgIEBPcHRpb25hbCgpIGhhbmRsZXI6IEh0dHBCYWNrZW5kLFxyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgX2RvY3VtZW50OiBhbnksXHJcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE5aX0lDT05TKSBpY29ucz86IEljb25EZWZpbml0aW9uW10sXHJcbiAgICAvKipcclxuICAgICAqIEBkZXByZWNhdGVkXHJcbiAgICAgKiBAaW5uZXJcclxuICAgICAqL1xyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChOWl9JQ09OX0RFRkFVTFRfVFdPVE9ORV9DT0xPUikgcHJpdmF0ZSBsZWdhY3lEZWZhdWx0VHdvdG9uZUNvbG9yPzogc3RyaW5nXHJcbiAgKSB7XHJcbiAgICBzdXBlcihyZW5kZXJlckZhY3RvcnksIGhhbmRsZXIsIF9kb2N1bWVudCwgc2FuaXRpemVyKTtcclxuXHJcbiAgICB0aGlzLm9uQ29uZmlnQ2hhbmdlKCk7XHJcblxyXG4gICAgdGhpcy5hZGRJY29uKC4uLk5aX0lDT05TX1VTRURfQllfWk9SUk8sIC4uLihpY29ucyB8fCBbXSkpO1xyXG5cclxuICAgIGlmIChsZWdhY3lEZWZhdWx0VHdvdG9uZUNvbG9yKSB7XHJcbiAgICAgIHdhcm5EZXByZWNhdGlvbihcclxuICAgICAgICBgJ05aX0lDT05fREVGQVVMVF9UV09UT05FX0NPTE9SJyBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFBsZWFzZSB1c2UgJ05aX0NPTkZJRycgaW5zdGVhZCFgXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNvbmZpZ0RlZmF1bHRUd290b25lQ29sb3IoKTtcclxuXHJcbiAgICB0aGlzLmNvbmZpZ0RlZmF1bHRUaGVtZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkNvbmZpZ0NoYW5nZSgpOiB2b2lkIHtcclxuICAgIHRoaXMubnpDb25maWdTZXJ2aWNlLmdldENvbmZpZ0NoYW5nZUV2ZW50Rm9yQ29tcG9uZW50KCdpY29uJykuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5jb25maWdEZWZhdWx0VHdvdG9uZUNvbG9yKCk7XHJcbiAgICAgIHRoaXMuY29uZmlnRGVmYXVsdFRoZW1lKCk7XHJcbiAgICAgIHRoaXMuY29uZmlnVXBkYXRlZCQubmV4dCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbmZpZ0RlZmF1bHRUaGVtZSgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGljb25Db25maWcgPSB0aGlzLmdldENvbmZpZygpO1xyXG4gICAgdGhpcy5kZWZhdWx0VGhlbWUgPSBpY29uQ29uZmlnLm56VGhlbWUgfHwgJ291dGxpbmUnO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb25maWdEZWZhdWx0VHdvdG9uZUNvbG9yKCk6IHZvaWQge1xyXG4gICAgY29uc3QgaWNvbkNvbmZpZyA9IHRoaXMuZ2V0Q29uZmlnKCk7XHJcbiAgICBjb25zdCBkZWZhdWx0VHdvdG9uZUNvbG9yID0gaWNvbkNvbmZpZy5uelR3b3RvbmVDb2xvciB8fCB0aGlzLmxlZ2FjeURlZmF1bHRUd290b25lQ29sb3I7XHJcblxyXG4gICAgbGV0IHByaW1hcnlDb2xvciA9IERFRkFVTFRfVFdPVE9ORV9DT0xPUjtcclxuXHJcbiAgICBpZiAoZGVmYXVsdFR3b3RvbmVDb2xvcikge1xyXG4gICAgICBpZiAoZGVmYXVsdFR3b3RvbmVDb2xvci5zdGFydHNXaXRoKCcjJykpIHtcclxuICAgICAgICBwcmltYXJ5Q29sb3IgPSBkZWZhdWx0VHdvdG9uZUNvbG9yO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdhcm4oJ1R3b3RvbmUgY29sb3IgbXVzdCBiZSBhIGhleCBjb2xvciEnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudHdvVG9uZUNvbG9yID0geyBwcmltYXJ5Q29sb3IgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0Q29uZmlnKCk6IEljb25Db25maWcge1xyXG4gICAgcmV0dXJuIHRoaXMubnpDb25maWdTZXJ2aWNlLmdldENvbmZpZ0ZvckNvbXBvbmVudCgnaWNvbicpIHx8IHt9O1xyXG4gIH1cclxufVxyXG4iXX0=