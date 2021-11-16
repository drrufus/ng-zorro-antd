/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, EventEmitter, OnChanges, SimpleChanges, TemplateRef } from '@angular/core';
import { Location } from '@angular/common';
import { NzConfigService } from 'ng-zorro-antd/core';
import { NzPageHeaderBreadcrumbDirective, NzPageHeaderFooterDirective } from './nz-page-header-cells';
import * as ɵngcc0 from '@angular/core';
export declare class NzPageHeaderComponent implements OnChanges {
    private location;
    nzConfigService: NzConfigService;
    isTemplateRefBackIcon: boolean;
    isStringBackIcon: boolean;
    nzBackIcon: string | TemplateRef<void> | null;
    nzTitle: string | TemplateRef<void>;
    nzSubtitle: string | TemplateRef<void>;
    nzGhost: boolean;
    readonly nzBack: EventEmitter<void>;
    nzPageHeaderFooter: ElementRef<NzPageHeaderFooterDirective>;
    nzPageHeaderBreadcrumb: ElementRef<NzPageHeaderBreadcrumbDirective>;
    constructor(location: Location, nzConfigService: NzConfigService);
    ngOnChanges(changes: SimpleChanges): void;
    onBack(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzPageHeaderComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzPageHeaderComponent, "nz-page-header", ["nzPageHeader"], { "nzBackIcon": "nzBackIcon"; "nzTitle": "nzTitle"; "nzSubtitle": "nzSubtitle"; "nzGhost": "nzGhost"; }, { "nzBack": "nzBack"; }, ["nzPageHeaderFooter", "nzPageHeaderBreadcrumb"], ["nz-breadcrumb[nz-page-header-breadcrumb]", "nz-avatar[nz-page-header-avatar]", "nz-page-header-title, [nz-page-header-title]", "nz-page-header-subtitle, [nz-page-header-subtitle]", "nz-page-header-tags, [nz-page-header-tags]", "nz-page-header-extra, [nz-page-header-extra]", "nz-page-header-content, [nz-page-header-content]", "nz-page-header-footer, [nz-page-header-footer]"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcGFnZS1oZWFkZXIuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbIm56LXBhZ2UtaGVhZGVyLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFXQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5pbXBvcnQgeyBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOekNvbmZpZ1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOelBhZ2VIZWFkZXJCcmVhZGNydW1iRGlyZWN0aXZlLCBOelBhZ2VIZWFkZXJGb290ZXJEaXJlY3RpdmUgfSBmcm9tICcuL256LXBhZ2UtaGVhZGVyLWNlbGxzJztcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTnpQYWdlSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICAgIHByaXZhdGUgbG9jYXRpb247XHJcbiAgICBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZTtcclxuICAgIGlzVGVtcGxhdGVSZWZCYWNrSWNvbjogYm9vbGVhbjtcclxuICAgIGlzU3RyaW5nQmFja0ljb246IGJvb2xlYW47XHJcbiAgICBuekJhY2tJY29uOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGw7XHJcbiAgICBuelRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICAgIG56U3VidGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gICAgbnpHaG9zdDogYm9vbGVhbjtcclxuICAgIHJlYWRvbmx5IG56QmFjazogRXZlbnRFbWl0dGVyPHZvaWQ+O1xyXG4gICAgbnpQYWdlSGVhZGVyRm9vdGVyOiBFbGVtZW50UmVmPE56UGFnZUhlYWRlckZvb3RlckRpcmVjdGl2ZT47XHJcbiAgICBuelBhZ2VIZWFkZXJCcmVhZGNydW1iOiBFbGVtZW50UmVmPE56UGFnZUhlYWRlckJyZWFkY3J1bWJEaXJlY3RpdmU+O1xyXG4gICAgY29uc3RydWN0b3IobG9jYXRpb246IExvY2F0aW9uLCBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSk7XHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcclxuICAgIG9uQmFjaygpOiB2b2lkO1xyXG59XHJcbiJdfQ==