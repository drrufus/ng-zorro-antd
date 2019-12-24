import { ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵtext, ɵɵelementEnd, ɵɵadvance, ɵɵattribute, ɵɵsanitizeUrl, ɵɵtextInterpolate, ɵɵelementContainerStart, ɵɵtemplate, ɵɵelementContainerEnd, ɵɵproperty, ɵɵdirectiveInject, Injector, NgZone, ChangeDetectorRef, ElementRef, Renderer2, ɵɵdefineComponent, ɵɵprojectionDef, ɵɵprojection, ɵsetClassMetadata, Component, ChangeDetectionStrategy, ViewEncapsulation, Input, ɵɵelement, ɵɵreference, ɵɵtextInterpolate1, ɵɵtemplateRefExtractor, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, ɵɵsetComponentScope } from '@angular/core';
import { NzDropDownDirective, NzDropDownModule, NzDropDownADirective, NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import { __decorate, __metadata } from 'tslib';
import { Router, ActivatedRoute, NavigationEnd, PRIMARY_OUTLET } from '@angular/router';
import { PREFIX, InputBoolean, NzStringTemplateOutletDirective, NzAddOnModule, NzOverlayModule, NzClassListAddDirective, NzConnectedOverlayDirective } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import { filter, takeUntil, startWith } from 'rxjs/operators';
import { NgIf, NgTemplateOutlet, CommonModule, NgClass, NgComponentOutlet, NgForOf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgPlural, NgPluralCase, AsyncPipe, UpperCasePipe, LowerCasePipe, JsonPipe, SlicePipe, DecimalPipe, PercentPipe, TitleCasePipe, CurrencyPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, KeyValuePipe } from '@angular/common';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { OverlayModule, CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { Dir } from '@angular/cdk/bidi';
import { CdkFixedSizeVirtualScroll, CdkScrollable, CdkVirtualForOf, CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { NzMenuDirective, NzMenuItemDirective, NzSubMenuComponent, NzMenuDividerDirective, NzMenuGroupComponent } from 'ng-zorro-antd/menu';

function NzBreadCrumbComponent_ng_container_1_nz_breadcrumb_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r2188 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-breadcrumb-item");
    ɵɵelementStart(1, "a", 2);
    ɵɵlistener("click", function NzBreadCrumbComponent_ng_container_1_nz_breadcrumb_item_1_Template_a_click_1_listener($event) { ɵɵrestoreView(_r2188); const breadcrumb_r2186 = ctx.$implicit; const ctx_r2187 = ɵɵnextContext(2); return ctx_r2187.navigate(breadcrumb_r2186.url, $event); });
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const breadcrumb_r2186 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵattribute("href", breadcrumb_r2186.url, ɵɵsanitizeUrl);
    ɵɵadvance(1);
    ɵɵtextInterpolate(breadcrumb_r2186.label);
} }
function NzBreadCrumbComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzBreadCrumbComponent_ng_container_1_nz_breadcrumb_item_1_Template, 3, 2, "nz-breadcrumb-item", 1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2184 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r2184.breadcrumbs);
} }
const _c0 = ["*"];
class NzBreadCrumbComponent {
    constructor(injector, ngZone, cdr, elementRef, renderer) {
        this.injector = injector;
        this.ngZone = ngZone;
        this.cdr = cdr;
        this.nzAutoGenerate = false;
        this.nzSeparator = '/';
        this.nzRouteLabel = 'breadcrumb';
        this.breadcrumbs = [];
        this.destroy$ = new Subject();
        renderer.addClass(elementRef.nativeElement, 'ant-breadcrumb');
    }
    ngOnInit() {
        if (this.nzAutoGenerate) {
            this.registerRouterChange();
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    navigate(url, e) {
        e.preventDefault();
        this.ngZone
            .run(() => this.injector
            .get(Router)
            .navigateByUrl(url)
            .then())
            .then();
    }
    registerRouterChange() {
        try {
            const router = this.injector.get(Router);
            const activatedRoute = this.injector.get(ActivatedRoute);
            router.events
                .pipe(filter(e => e instanceof NavigationEnd), takeUntil(this.destroy$), startWith(true) // Trigger initial render.
            )
                .subscribe(() => {
                this.breadcrumbs = this.getBreadcrumbs(activatedRoute.root);
                this.cdr.markForCheck();
            });
        }
        catch (e) {
            throw new Error(`${PREFIX} You should import RouterModule if you want to use 'NzAutoGenerate'.`);
        }
    }
    getBreadcrumbs(route, url = '', breadcrumbs = []) {
        const children = route.children;
        // If there's no sub root, then stop the recurse and returns the generated breadcrumbs.
        if (children.length === 0) {
            return breadcrumbs;
        }
        for (const child of children) {
            if (child.outlet === PRIMARY_OUTLET) {
                // Only parse components in primary router-outlet (in another word, router-outlet without a specific name).
                // Parse this layer and generate a breadcrumb item.
                const routeURL = child.snapshot.url.map(segment => segment.path).join('/');
                const nextUrl = url + `/${routeURL}`;
                const breadcrumbLabel = child.snapshot.data[this.nzRouteLabel];
                // If have data, go to generate a breadcrumb for it.
                if (routeURL && breadcrumbLabel) {
                    const breadcrumb = {
                        label: breadcrumbLabel,
                        params: child.snapshot.params,
                        url: nextUrl
                    };
                    breadcrumbs.push(breadcrumb);
                }
                return this.getBreadcrumbs(child, nextUrl, breadcrumbs);
            }
        }
        return undefined;
    }
}
/** @nocollapse */ NzBreadCrumbComponent.ɵfac = function NzBreadCrumbComponent_Factory(t) { return new (t || NzBreadCrumbComponent)(ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2)); };
/** @nocollapse */ NzBreadCrumbComponent.ɵcmp = ɵɵdefineComponent({ type: NzBreadCrumbComponent, selectors: [["nz-breadcrumb"]], inputs: { nzAutoGenerate: "nzAutoGenerate", nzSeparator: "nzSeparator", nzRouteLabel: "nzRouteLabel" }, exportAs: ["nzBreadcrumb"], ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "click"]], template: function NzBreadCrumbComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
        ɵɵtemplate(1, NzBreadCrumbComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.nzAutoGenerate);
    } }, styles: ["\n      nz-breadcrumb {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzBreadCrumbComponent.prototype, "nzAutoGenerate", void 0);
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzBreadCrumbComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-breadcrumb',
                exportAs: 'nzBreadcrumb',
                preserveWhitespaces: false,
                templateUrl: './nz-breadcrumb.component.html',
                styles: [
                    `
      nz-breadcrumb {
        display: block;
      }
    `
                ]
            }]
    }], function () { return [{ type: Injector }, { type: NgZone }, { type: ChangeDetectorRef }, { type: ElementRef }, { type: Renderer2 }]; }, { nzAutoGenerate: [{
            type: Input
        }], nzSeparator: [{
            type: Input
        }], nzRouteLabel: [{
            type: Input
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function NzBreadCrumbItemComponent_ng_container_0_ng_template_2_Template(rf, ctx) { }
function NzBreadCrumbItemComponent_ng_container_0_i_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 7);
} }
function NzBreadCrumbItemComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 4);
    ɵɵtemplate(2, NzBreadCrumbItemComponent_ng_container_0_ng_template_2_Template, 0, 0, "ng-template", 5);
    ɵɵtemplate(3, NzBreadCrumbItemComponent_ng_container_0_i_3_Template, 1, 0, "i", 6);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2189 = ɵɵnextContext();
    const _r2190 = ɵɵreference(2);
    ɵɵadvance(1);
    ɵɵproperty("nzDropdownMenu", ctx_r2189.nzOverlay);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r2190);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !!ctx_r2189.nzOverlay);
} }
function NzBreadCrumbItemComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 8);
    ɵɵprojection(1);
    ɵɵelementEnd();
} }
function NzBreadCrumbItemComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2192 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r2192.nzBreadCrumbComponent.nzSeparator, " ");
} }
const _c0$1 = ["*"];
class NzBreadCrumbItemComponent {
    constructor(nzBreadCrumbComponent) {
        this.nzBreadCrumbComponent = nzBreadCrumbComponent;
    }
}
/** @nocollapse */ NzBreadCrumbItemComponent.ɵfac = function NzBreadCrumbItemComponent_Factory(t) { return new (t || NzBreadCrumbItemComponent)(ɵɵdirectiveInject(NzBreadCrumbComponent)); };
/** @nocollapse */ NzBreadCrumbItemComponent.ɵcmp = ɵɵdefineComponent({ type: NzBreadCrumbItemComponent, selectors: [["nz-breadcrumb-item"]], inputs: { nzOverlay: "nzOverlay" }, exportAs: ["nzBreadcrumbItem"], ngContentSelectors: _c0$1, decls: 5, vars: 3, consts: [[4, "ngIf", "ngIfElse"], ["noMenuTpl", ""], [1, "ant-breadcrumb-separator"], [4, "nzStringTemplateOutlet"], ["nz-dropdown", "", 1, "ant-breadcrumb-overlay-link", 3, "nzDropdownMenu"], [3, "ngTemplateOutlet"], ["nz-icon", "", "nzType", "down", 4, "ngIf"], ["nz-icon", "", "nzType", "down"], [1, "ant-breadcrumb-link"]], template: function NzBreadCrumbItemComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵtemplate(0, NzBreadCrumbItemComponent_ng_container_0_Template, 4, 3, "ng-container", 0);
        ɵɵtemplate(1, NzBreadCrumbItemComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        ɵɵelementStart(3, "span", 2);
        ɵɵtemplate(4, NzBreadCrumbItemComponent_ng_container_4_Template, 2, 1, "ng-container", 3);
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r2190 = ɵɵreference(2);
        ɵɵproperty("ngIf", !!ctx.nzOverlay)("ngIfElse", _r2190);
        ɵɵadvance(4);
        ɵɵproperty("nzStringTemplateOutlet", ctx.nzBreadCrumbComponent.nzSeparator);
    } }, directives: [NgIf, NzStringTemplateOutletDirective, NzDropDownDirective, NgTemplateOutlet, NzIconDirective], styles: ["\n      nz-breadcrumb-item:last-child {\n        color: rgba(0, 0, 0, 0.65);\n      }\n\n      nz-breadcrumb-item:last-child .ant-breadcrumb-separator {\n        display: none;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzBreadCrumbItemComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-breadcrumb-item',
                exportAs: 'nzBreadcrumbItem',
                preserveWhitespaces: false,
                templateUrl: './nz-breadcrumb-item.component.html',
                styles: [
                    `
      nz-breadcrumb-item:last-child {
        color: rgba(0, 0, 0, 0.65);
      }

      nz-breadcrumb-item:last-child .ant-breadcrumb-separator {
        display: none;
      }
    `
                ]
            }]
    }], function () { return [{ type: NzBreadCrumbComponent }]; }, { nzOverlay: [{
            type: Input
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzBreadCrumbModule {
}
/** @nocollapse */ NzBreadCrumbModule.ɵmod = ɵɵdefineNgModule({ type: NzBreadCrumbModule });
/** @nocollapse */ NzBreadCrumbModule.ɵinj = ɵɵdefineInjector({ factory: function NzBreadCrumbModule_Factory(t) { return new (t || NzBreadCrumbModule)(); }, imports: [[CommonModule, NzAddOnModule, OverlayModule, NzOverlayModule, NzDropDownModule, NzIconModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzBreadCrumbModule, { declarations: [NzBreadCrumbComponent, NzBreadCrumbItemComponent], imports: [CommonModule, NzAddOnModule, OverlayModule, NzOverlayModule, NzDropDownModule, NzIconModule], exports: [NzBreadCrumbComponent, NzBreadCrumbItemComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzBreadCrumbModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NzAddOnModule, OverlayModule, NzOverlayModule, NzDropDownModule, NzIconModule],
                declarations: [NzBreadCrumbComponent, NzBreadCrumbItemComponent],
                exports: [NzBreadCrumbComponent, NzBreadCrumbItemComponent]
            }]
    }], null, null); })();
ɵɵsetComponentScope(NzBreadCrumbComponent, [NzBreadCrumbComponent, NzBreadCrumbItemComponent, NgClass, NgComponentOutlet, NgForOf, NgIf, NgTemplateOutlet, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgPlural, NgPluralCase, NzStringTemplateOutletDirective, NzClassListAddDirective, CdkConnectedOverlay, CdkOverlayOrigin, Dir, CdkFixedSizeVirtualScroll, CdkScrollable, CdkVirtualForOf, CdkVirtualScrollViewport, NzConnectedOverlayDirective, NzMenuDirective, NzMenuItemDirective, NzSubMenuComponent, NzMenuDividerDirective, NzMenuGroupComponent, NzDropDownDirective, NzDropDownADirective, NzDropdownMenuComponent, NzIconDirective], [AsyncPipe, UpperCasePipe, LowerCasePipe, JsonPipe, SlicePipe, DecimalPipe, PercentPipe, TitleCasePipe, CurrencyPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, KeyValuePipe]);

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NzBreadCrumbComponent, NzBreadCrumbItemComponent, NzBreadCrumbModule };
//# sourceMappingURL=ng-zorro-antd-breadcrumb.js.map
