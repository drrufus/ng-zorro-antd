/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { HttpBackend } from '@angular/common/http';
import { InjectionToken, RendererFactory2 } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IconDefinition, IconService } from '@ant-design/icons-angular';
import { NzConfigService } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export interface NzIconfontOption {
    scriptUrl: string;
}
export declare const NZ_ICONS: InjectionToken<unknown>;
export declare const NZ_ICON_DEFAULT_TWOTONE_COLOR: InjectionToken<unknown>;
export declare const DEFAULT_TWOTONE_COLOR = "#1890ff";
export declare const NZ_ICONS_USED_BY_ZORRO: IconDefinition[];
/**
 * It should be a global singleton, otherwise registered icons could not be found.
 */
export declare class NzIconService extends IconService {
    protected nzConfigService: NzConfigService;
    /**
     * @deprecated
     * @inner
     */
    private legacyDefaultTwotoneColor?;
    configUpdated$: Subject<void>;
    private iconfontCache;
    warnAPI(type: 'old' | 'cross' | 'vertical'): void;
    normalizeSvgElement(svg: SVGElement): void;
    fetchFromIconfont(opt: NzIconfontOption): void;
    createIconfontIcon(type: string): SVGElement;
    constructor(rendererFactory: RendererFactory2, sanitizer: DomSanitizer, nzConfigService: NzConfigService, handler: HttpBackend, _document: any, icons?: IconDefinition[], 
    /**
     * @deprecated
     * @inner
     */
    legacyDefaultTwotoneColor?: string | undefined);
    private onConfigChange;
    private configDefaultTheme;
    private configDefaultTwotoneColor;
    private getConfig;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzIconService, [null, null, null, { optional: true; }, { optional: true; }, { optional: true; }, { optional: true; }]>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NzIconService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaWNvbi5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbIm56LWljb24uc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztBQWFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5pbXBvcnQgeyBIdHRwQmFja2VuZCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4sIFJlbmRlcmVyRmFjdG9yeTIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IEljb25EZWZpbml0aW9uLCBJY29uU2VydmljZSB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLWFuZ3VsYXInO1xyXG5pbXBvcnQgeyBOekNvbmZpZ1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmV4cG9ydCBpbnRlcmZhY2UgTnpJY29uZm9udE9wdGlvbiB7XHJcbiAgICBzY3JpcHRVcmw6IHN0cmluZztcclxufVxyXG5leHBvcnQgZGVjbGFyZSBjb25zdCBOWl9JQ09OUzogSW5qZWN0aW9uVG9rZW48dW5rbm93bj47XHJcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IE5aX0lDT05fREVGQVVMVF9UV09UT05FX0NPTE9SOiBJbmplY3Rpb25Ub2tlbjx1bmtub3duPjtcclxuZXhwb3J0IGRlY2xhcmUgY29uc3QgREVGQVVMVF9UV09UT05FX0NPTE9SID0gXCIjMTg5MGZmXCI7XHJcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IE5aX0lDT05TX1VTRURfQllfWk9SUk86IEljb25EZWZpbml0aW9uW107XHJcbi8qKlxyXG4gKiBJdCBzaG91bGQgYmUgYSBnbG9iYWwgc2luZ2xldG9uLCBvdGhlcndpc2UgcmVnaXN0ZXJlZCBpY29ucyBjb3VsZCBub3QgYmUgZm91bmQuXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOekljb25TZXJ2aWNlIGV4dGVuZHMgSWNvblNlcnZpY2Uge1xyXG4gICAgcHJvdGVjdGVkIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVwcmVjYXRlZFxyXG4gICAgICogQGlubmVyXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgbGVnYWN5RGVmYXVsdFR3b3RvbmVDb2xvcj87XHJcbiAgICBjb25maWdVcGRhdGVkJDogU3ViamVjdDx2b2lkPjtcclxuICAgIHByaXZhdGUgaWNvbmZvbnRDYWNoZTtcclxuICAgIHdhcm5BUEkodHlwZTogJ29sZCcgfCAnY3Jvc3MnIHwgJ3ZlcnRpY2FsJyk6IHZvaWQ7XHJcbiAgICBub3JtYWxpemVTdmdFbGVtZW50KHN2ZzogU1ZHRWxlbWVudCk6IHZvaWQ7XHJcbiAgICBmZXRjaEZyb21JY29uZm9udChvcHQ6IE56SWNvbmZvbnRPcHRpb24pOiB2b2lkO1xyXG4gICAgY3JlYXRlSWNvbmZvbnRJY29uKHR5cGU6IHN0cmluZyk6IFNWR0VsZW1lbnQ7XHJcbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTIsIHNhbml0aXplcjogRG9tU2FuaXRpemVyLCBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSwgaGFuZGxlcjogSHR0cEJhY2tlbmQsIF9kb2N1bWVudDogYW55LCBpY29ucz86IEljb25EZWZpbml0aW9uW10sIFxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVwcmVjYXRlZFxyXG4gICAgICogQGlubmVyXHJcbiAgICAgKi9cclxuICAgIGxlZ2FjeURlZmF1bHRUd290b25lQ29sb3I/OiBzdHJpbmcgfCB1bmRlZmluZWQpO1xyXG4gICAgcHJpdmF0ZSBvbkNvbmZpZ0NoYW5nZTtcclxuICAgIHByaXZhdGUgY29uZmlnRGVmYXVsdFRoZW1lO1xyXG4gICAgcHJpdmF0ZSBjb25maWdEZWZhdWx0VHdvdG9uZUNvbG9yO1xyXG4gICAgcHJpdmF0ZSBnZXRDb25maWc7XHJcbn1cclxuIl19