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
import { NzConfigService, warn, warnDeprecation } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "ng-zorro-antd/core";
import * as i3 from "@angular/common/http";
export const NZ_ICONS = new InjectionToken('nz_icons');
export const NZ_ICON_DEFAULT_TWOTONE_COLOR = new InjectionToken('nz_icon_default_twotone_color');
export const DEFAULT_TWOTONE_COLOR = '#1890ff';
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
    constructor(rendererFactory, sanitizer, nzConfigService, handler, 
    // tslint:disable-next-line:no-any
    _document, icons, 
    /**
     * @deprecated
     * @inner
     */
    legacyDefaultTwotoneColor) {
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
    fetchFromIconfont(opt) {
        const { scriptUrl } = opt;
        if (this._document && !this.iconfontCache.has(scriptUrl)) {
            const script = this._renderer.createElement('script');
            this._renderer.setAttribute(script, 'src', scriptUrl);
            this._renderer.setAttribute(script, 'data-namespace', scriptUrl.replace(/^(https?|http):/g, ''));
            this._renderer.appendChild(this._document.body, script);
            this.iconfontCache.add(scriptUrl);
        }
    }
    createIconfontIcon(type) {
        return this._createSVGElementFromString(`<svg><use xlink:href="${type}"></svg>`);
    }
    onConfigChange() {
        this.nzConfigService.getConfigChangeEventForComponent('icon').subscribe(() => {
            this.configDefaultTwotoneColor();
            this.configDefaultTheme();
            this.configUpdated$.next();
        });
    }
    configDefaultTheme() {
        const iconConfig = this.getConfig();
        this.defaultTheme = iconConfig.nzTheme || 'outline';
    }
    configDefaultTwotoneColor() {
        const iconConfig = this.getConfig();
        const defaultTwotoneColor = iconConfig.nzTwotoneColor || this.legacyDefaultTwotoneColor;
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
    getConfig() {
        return this.nzConfigService.getConfigForComponent('icon') || {};
    }
}
/** @nocollapse */ NzIconService.ɵfac = function NzIconService_Factory(t) { return new (t || NzIconService)(i0.ɵɵinject(i0.RendererFactory2), i0.ɵɵinject(i1.DomSanitizer), i0.ɵɵinject(i2.NzConfigService), i0.ɵɵinject(i3.HttpBackend, 8), i0.ɵɵinject(DOCUMENT, 8), i0.ɵɵinject(NZ_ICONS, 8), i0.ɵɵinject(NZ_ICON_DEFAULT_TWOTONE_COLOR, 8)); };
/** @nocollapse */ NzIconService.ɵprov = i0.ɵɵdefineInjectable({ token: NzIconService, factory: NzIconService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzIconService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i0.RendererFactory2 }, { type: i1.DomSanitizer }, { type: i2.NzConfigService }, { type: i3.HttpBackend, decorators: [{
                type: Optional
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [NZ_ICONS]
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [NZ_ICON_DEFAULT_TWOTONE_COLOR]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaWNvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9pY29uLyIsInNvdXJjZXMiOlsibnotaWNvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFrQixXQUFXLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RSxPQUFPLEVBQ0wsV0FBVyxFQUNYLGVBQWUsRUFDZixhQUFhLEVBQ2IsZ0JBQWdCLEVBQ2hCLFdBQVcsRUFDWCxjQUFjLEVBQ2QsZUFBZSxFQUNmLGtCQUFrQixFQUNsQixZQUFZLEVBQ1osa0JBQWtCLEVBQ2xCLGVBQWUsRUFDZixrQkFBa0IsRUFDbEIsWUFBWSxFQUNaLFdBQVcsRUFDWCxpQkFBaUIsRUFDakIsa0JBQWtCLEVBQ2xCLFdBQVcsRUFDWCxXQUFXLEVBQ1gsZUFBZSxFQUNmLHFCQUFxQixFQUNyQix3QkFBd0IsRUFDeEIsVUFBVSxFQUNWLFFBQVEsRUFDUixXQUFXLEVBQ1gsVUFBVSxFQUNWLGNBQWMsRUFDZCxpQkFBaUIsRUFDakIsV0FBVyxFQUNYLGNBQWMsRUFDZCxnQkFBZ0IsRUFDaEIscUJBQXFCLEVBQ3JCLFlBQVksRUFDWixhQUFhLEVBQ2IsUUFBUSxFQUNSLGFBQWEsRUFDYixTQUFTLEVBQ1YsTUFBTSxpQ0FBaUMsQ0FBQztBQUN6QyxPQUFPLEVBQWMsZUFBZSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN4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QUNwQyxJQUFJLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQyxPQUFPLElBQUksU0FBUyxDQUFDO0lBQ3RELENBQUM7SUFFTyx5QkFBeUI7UUFDL0IsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3BDLE1BQU0sbUJBQW1CLEdBQUcsVUFBVSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMseUJBQXlCLENBQUM7UUFFeEYsSUFBSSxZQUFZLEdBQUcscUJBQXFCLENBQUM7UUFFekMsSUFBSSxtQkFBbUIsRUFBRTtZQUN2QixJQUFJLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDdkMsWUFBWSxHQUFHLG1CQUFtQixDQUFDO2FBQ3BDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO2FBQzVDO1NBQ0Y7UUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsWUFBWSxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVPLFNBQVM7UUFDZixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2xFLENBQUM7OzBFQTdGVSxhQUFhLCtJQXVDRixRQUFRLGtCQUNSLFFBQVEsa0JBS1IsNkJBQTZCO3FEQTdDeEMsYUFBYSxXQUFiLGFBQWEsbUJBRlosTUFBTTtrREFFUCxhQUFhO2NBSHpCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7c0JBc0NJLFFBQVE7O3NCQUVSLFFBQVE7O3NCQUFJLE1BQU07dUJBQUMsUUFBUTs7c0JBQzNCLFFBQVE7O3NCQUFJLE1BQU07dUJBQUMsUUFBUTs7c0JBSzNCLFFBQVE7O3NCQUFJLE1BQU07dUJBQUMsNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEh0dHBCYWNrZW5kIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIEluamVjdGlvblRva2VuLCBPcHRpb25hbCwgUmVuZGVyZXJGYWN0b3J5MiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgSWNvbkRlZmluaXRpb24sIEljb25TZXJ2aWNlIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMtYW5ndWxhcic7XHJcbmltcG9ydCB7XHJcbiAgQmFyc091dGxpbmUsXHJcbiAgQ2FsZW5kYXJPdXRsaW5lLFxyXG4gIENhcmV0RG93bkZpbGwsXHJcbiAgQ2FyZXREb3duT3V0bGluZSxcclxuICBDYXJldFVwRmlsbCxcclxuICBDYXJldFVwT3V0bGluZSxcclxuICBDaGVja0NpcmNsZUZpbGwsXHJcbiAgQ2hlY2tDaXJjbGVPdXRsaW5lLFxyXG4gIENoZWNrT3V0bGluZSxcclxuICBDbG9ja0NpcmNsZU91dGxpbmUsXHJcbiAgQ2xvc2VDaXJjbGVGaWxsLFxyXG4gIENsb3NlQ2lyY2xlT3V0bGluZSxcclxuICBDbG9zZU91dGxpbmUsXHJcbiAgQ29weU91dGxpbmUsXHJcbiAgRG91YmxlTGVmdE91dGxpbmUsXHJcbiAgRG91YmxlUmlnaHRPdXRsaW5lLFxyXG4gIERvd25PdXRsaW5lLFxyXG4gIEVkaXRPdXRsaW5lLFxyXG4gIEVsbGlwc2lzT3V0bGluZSxcclxuICBFeGNsYW1hdGlvbkNpcmNsZUZpbGwsXHJcbiAgRXhjbGFtYXRpb25DaXJjbGVPdXRsaW5lLFxyXG4gIEV5ZU91dGxpbmUsXHJcbiAgRmlsZUZpbGwsXHJcbiAgRmlsZU91dGxpbmUsXHJcbiAgRmlsdGVyRmlsbCxcclxuICBJbmZvQ2lyY2xlRmlsbCxcclxuICBJbmZvQ2lyY2xlT3V0bGluZSxcclxuICBMZWZ0T3V0bGluZSxcclxuICBMb2FkaW5nT3V0bGluZSxcclxuICBQYXBlckNsaXBPdXRsaW5lLFxyXG4gIFF1ZXN0aW9uQ2lyY2xlT3V0bGluZSxcclxuICBSaWdodE91dGxpbmUsXHJcbiAgU2VhcmNoT3V0bGluZSxcclxuICBTdGFyRmlsbCxcclxuICBVcGxvYWRPdXRsaW5lLFxyXG4gIFVwT3V0bGluZVxyXG59IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLWFuZ3VsYXIvaWNvbnMnO1xyXG5pbXBvcnQgeyBJY29uQ29uZmlnLCBOekNvbmZpZ1NlcnZpY2UsIHdhcm4sIHdhcm5EZXByZWNhdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTnpJY29uZm9udE9wdGlvbiB7XHJcbiAgc2NyaXB0VXJsOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBOWl9JQ09OUyA9IG5ldyBJbmplY3Rpb25Ub2tlbignbnpfaWNvbnMnKTtcclxuZXhwb3J0IGNvbnN0IE5aX0lDT05fREVGQVVMVF9UV09UT05FX0NPTE9SID0gbmV3IEluamVjdGlvblRva2VuKCduel9pY29uX2RlZmF1bHRfdHdvdG9uZV9jb2xvcicpO1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9UV09UT05FX0NPTE9SID0gJyMxODkwZmYnO1xyXG5leHBvcnQgY29uc3QgTlpfSUNPTlNfVVNFRF9CWV9aT1JSTzogSWNvbkRlZmluaXRpb25bXSA9IFtcclxuICBCYXJzT3V0bGluZSxcclxuICBDYWxlbmRhck91dGxpbmUsXHJcbiAgQ2FyZXRVcEZpbGwsXHJcbiAgQ2FyZXRVcE91dGxpbmUsXHJcbiAgQ2FyZXREb3duRmlsbCxcclxuICBDYXJldERvd25PdXRsaW5lLFxyXG4gIENoZWNrQ2lyY2xlRmlsbCxcclxuICBDaGVja0NpcmNsZU91dGxpbmUsXHJcbiAgQ2hlY2tPdXRsaW5lLFxyXG4gIENsb2NrQ2lyY2xlT3V0bGluZSxcclxuICBDbG9zZUNpcmNsZU91dGxpbmUsXHJcbiAgQ2xvc2VDaXJjbGVGaWxsLFxyXG4gIENsb3NlT3V0bGluZSxcclxuICBDb3B5T3V0bGluZSxcclxuICBEb3VibGVMZWZ0T3V0bGluZSxcclxuICBEb3VibGVSaWdodE91dGxpbmUsXHJcbiAgRG93bk91dGxpbmUsXHJcbiAgRWRpdE91dGxpbmUsXHJcbiAgRWxsaXBzaXNPdXRsaW5lLFxyXG4gIEV4Y2xhbWF0aW9uQ2lyY2xlRmlsbCxcclxuICBFeGNsYW1hdGlvbkNpcmNsZU91dGxpbmUsXHJcbiAgRXllT3V0bGluZSxcclxuICBGaWxlRmlsbCxcclxuICBGaWxlT3V0bGluZSxcclxuICBGaWx0ZXJGaWxsLFxyXG4gIEluZm9DaXJjbGVGaWxsLFxyXG4gIEluZm9DaXJjbGVPdXRsaW5lLFxyXG4gIExlZnRPdXRsaW5lLFxyXG4gIExvYWRpbmdPdXRsaW5lLFxyXG4gIFBhcGVyQ2xpcE91dGxpbmUsXHJcbiAgUXVlc3Rpb25DaXJjbGVPdXRsaW5lLFxyXG4gIFJpZ2h0T3V0bGluZSxcclxuICBTdGFyRmlsbCxcclxuICBTZWFyY2hPdXRsaW5lLFxyXG4gIFN0YXJGaWxsLFxyXG4gIFVwbG9hZE91dGxpbmUsXHJcbiAgVXBPdXRsaW5lXHJcbl07XHJcblxyXG4vKipcclxuICogSXQgc2hvdWxkIGJlIGEgZ2xvYmFsIHNpbmdsZXRvbiwgb3RoZXJ3aXNlIHJlZ2lzdGVyZWQgaWNvbnMgY291bGQgbm90IGJlIGZvdW5kLlxyXG4gKi9cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpJY29uU2VydmljZSBleHRlbmRzIEljb25TZXJ2aWNlIHtcclxuICBjb25maWdVcGRhdGVkJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gIHByaXZhdGUgaWNvbmZvbnRDYWNoZSA9IG5ldyBTZXQ8c3RyaW5nPigpO1xyXG5cclxuICBub3JtYWxpemVTdmdFbGVtZW50KHN2ZzogU1ZHRWxlbWVudCk6IHZvaWQge1xyXG4gICAgaWYgKCFzdmcuZ2V0QXR0cmlidXRlKCd2aWV3Qm94JykpIHtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHN2ZywgJ3ZpZXdCb3gnLCAnMCAwIDEwMjQgMTAyNCcpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFzdmcuZ2V0QXR0cmlidXRlKCd3aWR0aCcpIHx8ICFzdmcuZ2V0QXR0cmlidXRlKCdoZWlnaHQnKSkge1xyXG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUoc3ZnLCAnd2lkdGgnLCAnMWVtJyk7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZShzdmcsICdoZWlnaHQnLCAnMWVtJyk7XHJcbiAgICB9XHJcbiAgICBpZiAoIXN2Zy5nZXRBdHRyaWJ1dGUoJ2ZpbGwnKSkge1xyXG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUoc3ZnLCAnZmlsbCcsICdjdXJyZW50Q29sb3InKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZldGNoRnJvbUljb25mb250KG9wdDogTnpJY29uZm9udE9wdGlvbik6IHZvaWQge1xyXG4gICAgY29uc3QgeyBzY3JpcHRVcmwgfSA9IG9wdDtcclxuICAgIGlmICh0aGlzLl9kb2N1bWVudCAmJiAhdGhpcy5pY29uZm9udENhY2hlLmhhcyhzY3JpcHRVcmwpKSB7XHJcbiAgICAgIGNvbnN0IHNjcmlwdCA9IHRoaXMuX3JlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUoc2NyaXB0LCAnc3JjJywgc2NyaXB0VXJsKTtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHNjcmlwdCwgJ2RhdGEtbmFtZXNwYWNlJywgc2NyaXB0VXJsLnJlcGxhY2UoL14oaHR0cHM/fGh0dHApOi9nLCAnJykpO1xyXG4gICAgICB0aGlzLl9yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLl9kb2N1bWVudC5ib2R5LCBzY3JpcHQpO1xyXG4gICAgICB0aGlzLmljb25mb250Q2FjaGUuYWRkKHNjcmlwdFVybCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGVJY29uZm9udEljb24odHlwZTogc3RyaW5nKTogU1ZHRWxlbWVudCB7XHJcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlU1ZHRWxlbWVudEZyb21TdHJpbmcoYDxzdmc+PHVzZSB4bGluazpocmVmPVwiJHt0eXBlfVwiPjwvc3ZnPmApO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICByZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTIsXHJcbiAgICBzYW5pdGl6ZXI6IERvbVNhbml0aXplcixcclxuICAgIHByb3RlY3RlZCBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcclxuICAgIEBPcHRpb25hbCgpIGhhbmRsZXI6IEh0dHBCYWNrZW5kLFxyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgX2RvY3VtZW50OiBhbnksXHJcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE5aX0lDT05TKSBpY29ucz86IEljb25EZWZpbml0aW9uW10sXHJcbiAgICAvKipcclxuICAgICAqIEBkZXByZWNhdGVkXHJcbiAgICAgKiBAaW5uZXJcclxuICAgICAqL1xyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChOWl9JQ09OX0RFRkFVTFRfVFdPVE9ORV9DT0xPUikgcHJpdmF0ZSBsZWdhY3lEZWZhdWx0VHdvdG9uZUNvbG9yPzogc3RyaW5nXHJcbiAgKSB7XHJcbiAgICBzdXBlcihyZW5kZXJlckZhY3RvcnksIGhhbmRsZXIsIF9kb2N1bWVudCwgc2FuaXRpemVyKTtcclxuXHJcbiAgICB0aGlzLm9uQ29uZmlnQ2hhbmdlKCk7XHJcblxyXG4gICAgdGhpcy5hZGRJY29uKC4uLk5aX0lDT05TX1VTRURfQllfWk9SUk8sIC4uLihpY29ucyB8fCBbXSkpO1xyXG5cclxuICAgIGlmIChsZWdhY3lEZWZhdWx0VHdvdG9uZUNvbG9yKSB7XHJcbiAgICAgIHdhcm5EZXByZWNhdGlvbihgJ05aX0lDT05fREVGQVVMVF9UV09UT05FX0NPTE9SJyBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFBsZWFzZSB1c2UgJ05aX0NPTkZJRycgaW5zdGVhZCFgKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNvbmZpZ0RlZmF1bHRUd290b25lQ29sb3IoKTtcclxuICAgIHRoaXMuY29uZmlnRGVmYXVsdFRoZW1lKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uQ29uZmlnQ2hhbmdlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5uekNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnQ2hhbmdlRXZlbnRGb3JDb21wb25lbnQoJ2ljb24nKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNvbmZpZ0RlZmF1bHRUd290b25lQ29sb3IoKTtcclxuICAgICAgdGhpcy5jb25maWdEZWZhdWx0VGhlbWUoKTtcclxuICAgICAgdGhpcy5jb25maWdVcGRhdGVkJC5uZXh0KCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29uZmlnRGVmYXVsdFRoZW1lKCk6IHZvaWQge1xyXG4gICAgY29uc3QgaWNvbkNvbmZpZyA9IHRoaXMuZ2V0Q29uZmlnKCk7XHJcbiAgICB0aGlzLmRlZmF1bHRUaGVtZSA9IGljb25Db25maWcubnpUaGVtZSB8fCAnb3V0bGluZSc7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbmZpZ0RlZmF1bHRUd290b25lQ29sb3IoKTogdm9pZCB7XHJcbiAgICBjb25zdCBpY29uQ29uZmlnID0gdGhpcy5nZXRDb25maWcoKTtcclxuICAgIGNvbnN0IGRlZmF1bHRUd290b25lQ29sb3IgPSBpY29uQ29uZmlnLm56VHdvdG9uZUNvbG9yIHx8IHRoaXMubGVnYWN5RGVmYXVsdFR3b3RvbmVDb2xvcjtcclxuXHJcbiAgICBsZXQgcHJpbWFyeUNvbG9yID0gREVGQVVMVF9UV09UT05FX0NPTE9SO1xyXG5cclxuICAgIGlmIChkZWZhdWx0VHdvdG9uZUNvbG9yKSB7XHJcbiAgICAgIGlmIChkZWZhdWx0VHdvdG9uZUNvbG9yLnN0YXJ0c1dpdGgoJyMnKSkge1xyXG4gICAgICAgIHByaW1hcnlDb2xvciA9IGRlZmF1bHRUd290b25lQ29sb3I7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd2FybignVHdvdG9uZSBjb2xvciBtdXN0IGJlIGEgaGV4IGNvbG9yIScpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50d29Ub25lQ29sb3IgPSB7IHByaW1hcnlDb2xvciB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRDb25maWcoKTogSWNvbkNvbmZpZyB7XHJcbiAgICByZXR1cm4gdGhpcy5uekNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnRm9yQ29tcG9uZW50KCdpY29uJykgfHwge307XHJcbiAgfVxyXG59XHJcbiJdfQ==