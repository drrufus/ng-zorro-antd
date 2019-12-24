import { __decorate, __metadata } from 'tslib';
import { Platform, PlatformModule } from '@angular/cdk/platform';
import { DOCUMENT, NgIf, NgTemplateOutlet, CommonModule } from '@angular/common';
import { ɵɵelementStart, ɵɵelement, ɵɵelementEnd, ɵɵgetCurrentView, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵtemplate, ɵɵtemplateRefExtractor, ɵɵreference, ɵɵproperty, ɵɵadvance, EventEmitter, ɵɵdirectiveInject, ChangeDetectorRef, ɵɵdefineComponent, ɵsetClassMetadata, Component, ChangeDetectionStrategy, ViewEncapsulation, Inject, Input, Output, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NzConfigService, NzScrollService, fadeMotion, WithConfig, InputNumber, SCROLL_SERVICE_PROVIDER } from 'ng-zorro-antd/core';
import { fromEvent } from 'rxjs';
import { throttleTime, distinctUntilChanged } from 'rxjs/operators';

function NzBackTopComponent_div_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵelement(1, "div", 5);
    ɵɵelementEnd();
} }
function NzBackTopComponent_div_0_ng_template_3_Template(rf, ctx) { }
function NzBackTopComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r29 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1);
    ɵɵlistener("click", function NzBackTopComponent_div_0_Template_div_click_0_listener($event) { ɵɵrestoreView(_r29); const ctx_r28 = ɵɵnextContext(); return ctx_r28.clickBackTop(); });
    ɵɵtemplate(1, NzBackTopComponent_div_0_ng_template_1_Template, 2, 0, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    ɵɵtemplate(3, NzBackTopComponent_div_0_ng_template_3_Template, 0, 0, "ng-template", 3);
    ɵɵelementEnd();
} if (rf & 2) {
    const _r25 = ɵɵreference(2);
    const ctx_r24 = ɵɵnextContext();
    ɵɵproperty("@fadeMotion", undefined);
    ɵɵadvance(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r24.nzTemplate || _r25);
} }
const NZ_CONFIG_COMPONENT_NAME = 'backTop';
class NzBackTopComponent {
    constructor(nzConfigService, scrollSrv, 
    // tslint:disable-next-line:no-any
    doc, platform, cd) {
        this.nzConfigService = nzConfigService;
        this.scrollSrv = scrollSrv;
        this.doc = doc;
        this.platform = platform;
        this.cd = cd;
        this.scroll$ = null;
        this.target = null;
        this.visible = false;
        this.nzClick = new EventEmitter();
    }
    set nzTarget(el) {
        this.target = typeof el === 'string' ? this.doc.querySelector(el) : el;
        this.registerScrollEvent();
    }
    ngOnInit() {
        if (!this.scroll$) {
            this.registerScrollEvent();
        }
    }
    clickBackTop() {
        this.scrollSrv.scrollTo(this.getTarget(), 0);
        this.nzClick.emit(true);
    }
    getTarget() {
        return this.target || window;
    }
    handleScroll() {
        if (this.visible === this.scrollSrv.getScroll(this.getTarget()) > this.nzVisibilityHeight) {
            return;
        }
        this.visible = !this.visible;
        this.cd.markForCheck();
    }
    removeListen() {
        if (this.scroll$) {
            this.scroll$.unsubscribe();
        }
    }
    registerScrollEvent() {
        if (!this.platform.isBrowser) {
            return;
        }
        this.removeListen();
        this.handleScroll();
        this.scroll$ = fromEvent(this.getTarget(), 'scroll')
            .pipe(throttleTime(50), distinctUntilChanged())
            .subscribe(() => this.handleScroll());
    }
    ngOnDestroy() {
        this.removeListen();
    }
}
/** @nocollapse */ NzBackTopComponent.ɵfac = function NzBackTopComponent_Factory(t) { return new (t || NzBackTopComponent)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(NzScrollService), ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(ChangeDetectorRef)); };
/** @nocollapse */ NzBackTopComponent.ɵcmp = ɵɵdefineComponent({ type: NzBackTopComponent, selectors: [["nz-back-top"]], inputs: { nzTemplate: "nzTemplate", nzVisibilityHeight: "nzVisibilityHeight", nzTarget: "nzTarget" }, outputs: { nzClick: "nzClick" }, exportAs: ["nzBackTop"], decls: 1, vars: 1, consts: [["class", "ant-back-top", 3, "click", 4, "ngIf"], [1, "ant-back-top", 3, "click"], ["defaultContent", ""], [3, "ngTemplateOutlet"], [1, "ant-back-top-content"], [1, "ant-back-top-icon"]], template: function NzBackTopComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, NzBackTopComponent_div_0_Template, 4, 2, "div", 0);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.visible);
    } }, directives: [NgIf, NgTemplateOutlet], encapsulation: 2, data: { animation: [fadeMotion] }, changeDetection: 0 });
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, 400), InputNumber(),
    __metadata("design:type", Number)
], NzBackTopComponent.prototype, "nzVisibilityHeight", void 0);
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzBackTopComponent, [{
        type: Component,
        args: [{
                selector: 'nz-back-top',
                exportAs: 'nzBackTop',
                animations: [fadeMotion],
                templateUrl: './nz-back-top.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false
            }]
    }], function () { return [{ type: NzConfigService }, { type: NzScrollService }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: Platform }, { type: ChangeDetectorRef }]; }, { nzTemplate: [{
            type: Input
        }], nzVisibilityHeight: [{
            type: Input
        }], nzTarget: [{
            type: Input
        }], nzClick: [{
            type: Output
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzBackTopModule {
}
/** @nocollapse */ NzBackTopModule.ɵmod = ɵɵdefineNgModule({ type: NzBackTopModule });
/** @nocollapse */ NzBackTopModule.ɵinj = ɵɵdefineInjector({ factory: function NzBackTopModule_Factory(t) { return new (t || NzBackTopModule)(); }, providers: [SCROLL_SERVICE_PROVIDER], imports: [[CommonModule, PlatformModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzBackTopModule, { declarations: [NzBackTopComponent], imports: [CommonModule, PlatformModule], exports: [NzBackTopComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzBackTopModule, [{
        type: NgModule,
        args: [{
                declarations: [NzBackTopComponent],
                exports: [NzBackTopComponent],
                imports: [CommonModule, PlatformModule],
                providers: [SCROLL_SERVICE_PROVIDER]
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

export { NzBackTopComponent, NzBackTopModule };
//# sourceMappingURL=ng-zorro-antd-back-top.js.map
