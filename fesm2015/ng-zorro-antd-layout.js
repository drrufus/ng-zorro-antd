import { ɵɵdirectiveInject, ElementRef, Renderer2, ɵɵdefineComponent, ɵɵprojectionDef, ɵɵprojection, ɵsetClassMetadata, Component, ChangeDetectionStrategy, ViewEncapsulation, ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵtemplate, ɵɵelementEnd, ɵɵreference, ɵɵadvance, ɵɵproperty, ɵɵstyleProp, ɵɵelement, EventEmitter, NgZone, ChangeDetectorRef, ɵɵstaticViewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵallocHostVars, ɵɵclassProp, ɵɵtemplateRefExtractor, Optional, Host, Output, Input, ViewChild, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { __decorate, __metadata } from 'tslib';
import { MediaMatcher, LayoutModule } from '@angular/cdk/layout';
import { Platform, PlatformModule } from '@angular/cdk/platform';
import { Subject } from 'rxjs';
import { takeUntil, finalize } from 'rxjs/operators';
import { toCssPixel, NzDomEventService, InputBoolean } from 'ng-zorro-antd/core';
import { NgIf, NgTemplateOutlet, CommonModule } from '@angular/common';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const _c0 = ["*"];
class NzContentComponent {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-layout-content');
    }
}
/** @nocollapse */ NzContentComponent.ɵfac = function NzContentComponent_Factory(t) { return new (t || NzContentComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2)); };
/** @nocollapse */ NzContentComponent.ɵcmp = ɵɵdefineComponent({ type: NzContentComponent, selectors: [["nz-content"]], exportAs: ["nzContent"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzContentComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, styles: ["\n      nz-content {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzContentComponent, [{
        type: Component,
        args: [{
                selector: 'nz-content',
                exportAs: 'nzContent',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                templateUrl: './nz-content.component.html',
                styles: [
                    `
      nz-content {
        display: block;
      }
    `
                ]
            }]
    }], function () { return [{ type: ElementRef }, { type: Renderer2 }]; }, null); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const _c0$1 = ["*"];
class NzFooterComponent {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-layout-footer');
    }
}
/** @nocollapse */ NzFooterComponent.ɵfac = function NzFooterComponent_Factory(t) { return new (t || NzFooterComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2)); };
/** @nocollapse */ NzFooterComponent.ɵcmp = ɵɵdefineComponent({ type: NzFooterComponent, selectors: [["nz-footer"]], exportAs: ["nzFooter"], ngContentSelectors: _c0$1, decls: 1, vars: 0, template: function NzFooterComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, styles: ["\n      nz-footer {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzFooterComponent, [{
        type: Component,
        args: [{
                selector: 'nz-footer',
                exportAs: 'nzFooter',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                templateUrl: './nz-footer.component.html',
                styles: [
                    `
      nz-footer {
        display: block;
      }
    `
                ]
            }]
    }], function () { return [{ type: ElementRef }, { type: Renderer2 }]; }, null); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const _c0$2 = ["*"];
class NzHeaderComponent {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-layout-header');
    }
}
/** @nocollapse */ NzHeaderComponent.ɵfac = function NzHeaderComponent_Factory(t) { return new (t || NzHeaderComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2)); };
/** @nocollapse */ NzHeaderComponent.ɵcmp = ɵɵdefineComponent({ type: NzHeaderComponent, selectors: [["nz-header"]], exportAs: ["nzHeader"], ngContentSelectors: _c0$2, decls: 1, vars: 0, template: function NzHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, styles: ["\n      nz-header {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzHeaderComponent, [{
        type: Component,
        args: [{
                selector: 'nz-header',
                exportAs: 'nzHeader',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                templateUrl: './nz-header.component.html',
                styles: [
                    `
      nz-header {
        display: block;
      }
    `
                ]
            }]
    }], function () { return [{ type: ElementRef }, { type: Renderer2 }]; }, null); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const _c0$3 = ["*"];
class NzLayoutComponent {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        renderer.addClass(elementRef.nativeElement, 'ant-layout');
    }
    destroySider() {
        this.renderer.removeClass(this.elementRef.nativeElement, 'ant-layout-has-sider');
    }
    initSider() {
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-layout-has-sider');
    }
}
/** @nocollapse */ NzLayoutComponent.ɵfac = function NzLayoutComponent_Factory(t) { return new (t || NzLayoutComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2)); };
/** @nocollapse */ NzLayoutComponent.ɵcmp = ɵɵdefineComponent({ type: NzLayoutComponent, selectors: [["nz-layout"]], exportAs: ["nzLayout"], ngContentSelectors: _c0$3, decls: 1, vars: 0, template: function NzLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzLayoutComponent, [{
        type: Component,
        args: [{
                selector: 'nz-layout',
                exportAs: 'nzLayout',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                templateUrl: './nz-layout.component.html'
            }]
    }], function () { return [{ type: ElementRef }, { type: Renderer2 }]; }, null); })();

const _c0$4 = ["defaultTrigger"];
function NzSiderComponent_span_2_ng_template_1_Template(rf, ctx) { }
function NzSiderComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r546 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 5);
    ɵɵlistener("click", function NzSiderComponent_span_2_Template_span_click_0_listener($event) { ɵɵrestoreView(_r546); const ctx_r545 = ɵɵnextContext(); return ctx_r545.toggleCollapse(); });
    ɵɵtemplate(1, NzSiderComponent_span_2_ng_template_1_Template, 0, 0, "ng-template", 6);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r538 = ɵɵnextContext();
    const _r542 = ɵɵreference(7);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r538.nzZeroTrigger || _r542);
} }
function NzSiderComponent_div_3_ng_template_1_Template(rf, ctx) { }
function NzSiderComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r549 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 7);
    ɵɵlistener("click", function NzSiderComponent_div_3_Template_div_click_0_listener($event) { ɵɵrestoreView(_r549); const ctx_r548 = ɵɵnextContext(); return ctx_r548.toggleCollapse(); });
    ɵɵtemplate(1, NzSiderComponent_div_3_ng_template_1_Template, 0, 0, "ng-template", 6);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r539 = ɵɵnextContext();
    ɵɵstyleProp("width", ctx_r539.widthSetting);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r539.trigger);
} }
function NzSiderComponent_ng_template_4_i_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 9);
} if (rf & 2) {
    const ctx_r550 = ɵɵnextContext(2);
    ɵɵproperty("nzType", ctx_r550.nzCollapsed ? "right" : "left");
} }
function NzSiderComponent_ng_template_4_i_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 9);
} if (rf & 2) {
    const ctx_r551 = ɵɵnextContext(2);
    ɵɵproperty("nzType", ctx_r551.nzCollapsed ? "left" : "right");
} }
function NzSiderComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, NzSiderComponent_ng_template_4_i_0_Template, 1, 1, "i", 8);
    ɵɵtemplate(1, NzSiderComponent_ng_template_4_i_1_Template, 1, 1, "i", 8);
} if (rf & 2) {
    const ctx_r541 = ɵɵnextContext();
    ɵɵproperty("ngIf", !ctx_r541.nzReverseArrow);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r541.nzReverseArrow);
} }
function NzSiderComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 10);
} }
const _c1 = ["*"];
class NzSiderComponent {
    constructor(nzLayoutComponent, mediaMatcher, ngZone, platform, cdr, nzDomEventService, renderer, elementRef) {
        this.nzLayoutComponent = nzLayoutComponent;
        this.mediaMatcher = mediaMatcher;
        this.ngZone = ngZone;
        this.platform = platform;
        this.cdr = cdr;
        this.nzDomEventService = nzDomEventService;
        this.below = false;
        this.destroy$ = new Subject();
        this.dimensionMap = {
            xs: '480px',
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px',
            xxl: '1600px'
        };
        this.nzCollapsedChange = new EventEmitter();
        this.nzWidth = 200;
        this.nzTheme = 'dark';
        this.nzCollapsedWidth = 80;
        this.nzReverseArrow = false;
        this.nzCollapsible = false;
        this.nzCollapsed = false;
        renderer.addClass(elementRef.nativeElement, 'ant-layout-sider');
    }
    get trigger() {
        return this.nzTrigger !== undefined ? this.nzTrigger : this.defaultTrigger;
    }
    get flexSetting() {
        return `0 0 ${this.widthSetting}`;
    }
    get widthSetting() {
        if (this.nzCollapsed) {
            return `${this.nzCollapsedWidth}px`;
        }
        else {
            return toCssPixel(this.nzWidth);
        }
    }
    watchMatchMedia() {
        if (this.nzBreakpoint) {
            const matchBelow = this.mediaMatcher.matchMedia(`(max-width: ${this.dimensionMap[this.nzBreakpoint]})`).matches;
            this.below = matchBelow;
            this.nzCollapsed = matchBelow;
            this.nzCollapsedChange.emit(matchBelow);
            this.ngZone.run(() => {
                this.cdr.markForCheck();
            });
        }
    }
    toggleCollapse() {
        this.nzCollapsed = !this.nzCollapsed;
        this.nzCollapsedChange.emit(this.nzCollapsed);
    }
    get isZeroTrigger() {
        return this.nzCollapsible && this.trigger && this.nzCollapsedWidth === 0 && ((this.nzBreakpoint && this.below) || !this.nzBreakpoint);
    }
    get isSiderTrigger() {
        return this.nzCollapsible && this.trigger && this.nzCollapsedWidth !== 0;
    }
    ngOnInit() {
        if (this.nzLayoutComponent) {
            this.nzLayoutComponent.initSider();
        }
    }
    ngAfterViewInit() {
        if (this.platform.isBrowser) {
            Promise.resolve().then(() => this.watchMatchMedia());
            this.nzDomEventService
                .registerResizeListener()
                .pipe(takeUntil(this.destroy$), finalize(() => this.nzDomEventService.unregisterResizeListener()))
                .subscribe(() => this.watchMatchMedia());
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        if (this.nzLayoutComponent) {
            this.nzLayoutComponent.destroySider();
        }
    }
}
/** @nocollapse */ NzSiderComponent.ɵfac = function NzSiderComponent_Factory(t) { return new (t || NzSiderComponent)(ɵɵdirectiveInject(NzLayoutComponent, 9), ɵɵdirectiveInject(MediaMatcher), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzDomEventService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef)); };
/** @nocollapse */ NzSiderComponent.ɵcmp = ɵɵdefineComponent({ type: NzSiderComponent, selectors: [["nz-sider"]], viewQuery: function NzSiderComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(_c0$4, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.defaultTrigger = _t.first);
    } }, hostBindings: function NzSiderComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        ɵɵallocHostVars(7);
    } if (rf & 2) {
        ɵɵstyleProp("flex", ctx.flexSetting)("max-width", ctx.widthSetting)("min-width", ctx.widthSetting)("width", ctx.widthSetting);
        ɵɵclassProp("ant-layout-sider-zero-width", ctx.nzCollapsed && ctx.nzCollapsedWidth === 0)("ant-layout-sider-light", ctx.nzTheme === "light")("ant-layout-sider-collapsed", ctx.nzCollapsed);
    } }, inputs: { nzWidth: "nzWidth", nzTheme: "nzTheme", nzCollapsedWidth: "nzCollapsedWidth", nzBreakpoint: "nzBreakpoint", nzZeroTrigger: "nzZeroTrigger", nzReverseArrow: "nzReverseArrow", nzCollapsible: "nzCollapsible", nzCollapsed: "nzCollapsed", nzTrigger: "nzTrigger" }, outputs: { nzCollapsedChange: "nzCollapsedChange" }, exportAs: ["nzSider"], ngContentSelectors: _c1, decls: 8, vars: 2, consts: [[1, "ant-layout-sider-children"], ["class", "ant-layout-sider-zero-width-trigger", 3, "click", 4, "ngIf"], ["class", "ant-layout-sider-trigger", 3, "width", "click", 4, "ngIf"], ["defaultTrigger", ""], ["zeroTrigger", ""], [1, "ant-layout-sider-zero-width-trigger", 3, "click"], [3, "ngTemplateOutlet"], [1, "ant-layout-sider-trigger", 3, "click"], ["nz-icon", "", 3, "nzType", 4, "ngIf"], ["nz-icon", "", 3, "nzType"], ["nz-icon", "", "nzType", "bars"]], template: function NzSiderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 0);
        ɵɵprojection(1);
        ɵɵelementEnd();
        ɵɵtemplate(2, NzSiderComponent_span_2_Template, 2, 1, "span", 1);
        ɵɵtemplate(3, NzSiderComponent_div_3_Template, 2, 2, "div", 2);
        ɵɵtemplate(4, NzSiderComponent_ng_template_4_Template, 2, 2, "ng-template", null, 3, ɵɵtemplateRefExtractor);
        ɵɵtemplate(6, NzSiderComponent_ng_template_6_Template, 1, 0, "ng-template", null, 4, ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.isZeroTrigger);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.isSiderTrigger);
    } }, directives: [NgIf, NgTemplateOutlet, NzIconDirective], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzSiderComponent.prototype, "nzReverseArrow", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzSiderComponent.prototype, "nzCollapsible", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzSiderComponent.prototype, "nzCollapsed", void 0);
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzSiderComponent, [{
        type: Component,
        args: [{
                selector: 'nz-sider',
                exportAs: 'nzSider',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                templateUrl: './nz-sider.component.html',
                host: {
                    '[class.ant-layout-sider-zero-width]': 'nzCollapsed && nzCollapsedWidth === 0',
                    '[class.ant-layout-sider-light]': `nzTheme === 'light'`,
                    '[class.ant-layout-sider-collapsed]': 'nzCollapsed',
                    '[style.flex]': 'flexSetting',
                    '[style.max-width]': 'widthSetting',
                    '[style.min-width]': 'widthSetting',
                    '[style.width]': 'widthSetting'
                }
            }]
    }], function () { return [{ type: NzLayoutComponent, decorators: [{
                type: Optional
            }, {
                type: Host
            }] }, { type: MediaMatcher }, { type: NgZone }, { type: Platform }, { type: ChangeDetectorRef }, { type: NzDomEventService }, { type: Renderer2 }, { type: ElementRef }]; }, { nzCollapsedChange: [{
            type: Output
        }], nzWidth: [{
            type: Input
        }], nzTheme: [{
            type: Input
        }], nzCollapsedWidth: [{
            type: Input
        }], nzBreakpoint: [{
            type: Input
        }], nzZeroTrigger: [{
            type: Input
        }], nzReverseArrow: [{
            type: Input
        }], nzCollapsible: [{
            type: Input
        }], nzCollapsed: [{
            type: Input
        }], nzTrigger: [{
            type: Input
        }], defaultTrigger: [{
            type: ViewChild,
            args: ['defaultTrigger', { static: true }]
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzLayoutModule {
}
/** @nocollapse */ NzLayoutModule.ɵmod = ɵɵdefineNgModule({ type: NzLayoutModule });
/** @nocollapse */ NzLayoutModule.ɵinj = ɵɵdefineInjector({ factory: function NzLayoutModule_Factory(t) { return new (t || NzLayoutModule)(); }, imports: [[CommonModule, NzIconModule, LayoutModule, PlatformModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzLayoutModule, { declarations: [NzLayoutComponent, NzHeaderComponent, NzContentComponent, NzFooterComponent, NzSiderComponent], imports: [CommonModule, NzIconModule, LayoutModule, PlatformModule], exports: [NzLayoutComponent, NzHeaderComponent, NzContentComponent, NzFooterComponent, NzSiderComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzLayoutModule, [{
        type: NgModule,
        args: [{
                declarations: [NzLayoutComponent, NzHeaderComponent, NzContentComponent, NzFooterComponent, NzSiderComponent],
                exports: [NzLayoutComponent, NzHeaderComponent, NzContentComponent, NzFooterComponent, NzSiderComponent],
                imports: [CommonModule, NzIconModule, LayoutModule, PlatformModule]
            }]
    }], null, null); })();

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

export { NzContentComponent, NzFooterComponent, NzHeaderComponent, NzLayoutComponent, NzLayoutModule, NzSiderComponent };
//# sourceMappingURL=ng-zorro-antd-layout.js.map
