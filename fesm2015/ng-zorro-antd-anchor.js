import { Platform, PlatformModule } from '@angular/cdk/platform';
import { ɵɵelementStart, ɵɵtemplate, ɵɵelementEnd, ɵɵnextContext, ɵɵreference, ɵɵproperty, ɵɵadvance, ɵɵelement, ɵɵprojection, ɵɵpureFunction1, ɵɵclassProp, EventEmitter, ɵɵdirectiveInject, ChangeDetectorRef, ɵɵdefineComponent, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵprojectionDef, ɵɵtemplateRefExtractor, ɵsetClassMetadata, Component, ViewEncapsulation, ChangeDetectionStrategy, Inject, ViewChild, Input, Output, ɵɵtext, ɵɵtextInterpolate, TemplateRef, ElementRef, Renderer2, ɵɵcontentQuery, ɵɵallocHostVars, ɵɵlistener, ɵɵpropertyInterpolate, ɵɵsanitizeUrl, ContentChild, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { __decorate, __metadata } from 'tslib';
import { DOCUMENT, NgIf, NgTemplateOutlet, NgStyle, NgClass, CommonModule } from '@angular/common';
import { fromEvent } from 'rxjs';
import { throttleTime, distinctUntilChanged } from 'rxjs/operators';
import { toNumber, NzConfigService, NzScrollService, InputBoolean, WithConfig, InputNumber, SCROLL_SERVICE_PROVIDER } from 'ng-zorro-antd/core';
import { NzAffixComponent, NzAffixModule } from 'ng-zorro-antd/affix';

const _c0 = ["ink"];
function NzAnchorComponent_nz_affix_0_ng_template_1_Template(rf, ctx) { }
function NzAnchorComponent_nz_affix_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "nz-affix", 2);
    ɵɵtemplate(1, NzAnchorComponent_nz_affix_0_ng_template_1_Template, 0, 0, "ng-template", 3);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r354 = ɵɵnextContext();
    const _r355 = ɵɵreference(2);
    ɵɵproperty("nzOffsetTop", ctx_r354.nzOffsetTop);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r355);
} }
const _c1 = function (a0) { return { fixed: a0 }; };
function NzAnchorComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵelementStart(1, "div", 5);
    ɵɵelementStart(2, "div", 6);
    ɵɵelement(3, "div", 7, 8);
    ɵɵelementEnd();
    ɵɵprojection(5);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r356 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ctx_r356.wrapperStyle);
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ɵɵpureFunction1(3, _c1, !ctx_r356.nzAffix && !ctx_r356.nzShowInkInFixed));
    ɵɵadvance(2);
    ɵɵclassProp("visible", ctx_r356.visible);
} }
const _c2 = ["*"];
const NZ_CONFIG_COMPONENT_NAME = 'anchor';
const sharpMatcherRegx = /#([^#]+)$/;
class NzAnchorComponent {
    constructor(nzConfigService, scrollSrv, 
    /* tslint:disable-next-line:no-any */
    doc, cdr, platform) {
        this.nzConfigService = nzConfigService;
        this.scrollSrv = scrollSrv;
        this.doc = doc;
        this.cdr = cdr;
        this.platform = platform;
        this.nzAffix = true;
        this.nzClick = new EventEmitter();
        this.nzScroll = new EventEmitter();
        this.visible = false;
        this.wrapperStyle = { 'max-height': '100vh' };
        this.links = [];
        this.animating = false;
        this.target = null;
        this.scroll$ = null;
        this.destroyed = false;
    }
    set nzOffsetTop(value) {
        this._offsetTop = toNumber(value, 0);
        this.wrapperStyle = {
            'max-height': `calc(100vh - ${this._offsetTop}px)`
        };
    }
    get nzOffsetTop() {
        return this._offsetTop;
    }
    set nzTarget(el) {
        this.target = typeof el === 'string' ? this.doc.querySelector(el) : el;
        this.registerScrollEvent();
    }
    registerLink(link) {
        this.links.push(link);
    }
    unregisterLink(link) {
        this.links.splice(this.links.indexOf(link), 1);
    }
    getTarget() {
        return this.target || window;
    }
    ngAfterViewInit() {
        this.registerScrollEvent();
    }
    ngOnDestroy() {
        this.destroyed = true;
        this.removeListen();
    }
    registerScrollEvent() {
        if (!this.platform.isBrowser) {
            return;
        }
        this.removeListen();
        this.scroll$ = fromEvent(this.getTarget(), 'scroll')
            .pipe(throttleTime(50), distinctUntilChanged())
            .subscribe(() => this.handleScroll());
        // Browser would maintain the scrolling position when refreshing.
        // So we have to delay calculation in avoid of getting a incorrect result.
        setTimeout(() => this.handleScroll());
    }
    removeListen() {
        if (this.scroll$) {
            this.scroll$.unsubscribe();
        }
    }
    getOffsetTop(element) {
        if (!element || !element.getClientRects().length) {
            return 0;
        }
        const rect = element.getBoundingClientRect();
        if (rect.width || rect.height) {
            if (this.getTarget() === window) {
                return rect.top - element.ownerDocument.documentElement.clientTop;
            }
            return rect.top - this.getTarget().getBoundingClientRect().top;
        }
        return rect.top;
    }
    handleScroll() {
        if (typeof document === 'undefined' || this.destroyed || this.animating) {
            return;
        }
        const sections = [];
        const scope = (this.nzOffsetTop || 0) + this.nzBounds;
        this.links.forEach(comp => {
            const sharpLinkMatch = sharpMatcherRegx.exec(comp.nzHref.toString());
            if (!sharpLinkMatch) {
                return;
            }
            const target = this.doc.getElementById(sharpLinkMatch[1]);
            if (target) {
                const top = this.getOffsetTop(target);
                if (top < scope) {
                    sections.push({
                        top,
                        comp
                    });
                }
            }
        });
        this.visible = !!sections.length;
        if (!this.visible) {
            this.clearActive();
            this.cdr.detectChanges();
        }
        else {
            const maxSection = sections.reduce((prev, curr) => (curr.top > prev.top ? curr : prev));
            this.handleActive(maxSection.comp);
        }
    }
    clearActive() {
        this.links.forEach(i => {
            i.active = false;
            i.markForCheck();
        });
    }
    handleActive(comp) {
        this.clearActive();
        comp.active = true;
        comp.markForCheck();
        const linkNode = comp.elementRef.nativeElement.querySelector('.ant-anchor-link-title');
        this.ink.nativeElement.style.top = `${linkNode.offsetTop + linkNode.clientHeight / 2 - 4.5}px`;
        this.visible = true;
        this.cdr.detectChanges();
        this.nzScroll.emit(comp);
    }
    handleScrollTo(linkComp) {
        const el = this.doc.querySelector(linkComp.nzHref);
        if (!el) {
            return;
        }
        this.animating = true;
        const containerScrollTop = this.scrollSrv.getScroll(this.getTarget());
        const elOffsetTop = this.getOffsetTop(el);
        const targetScrollTop = containerScrollTop + elOffsetTop - (this.nzOffsetTop || 0);
        this.scrollSrv.scrollTo(this.getTarget(), targetScrollTop, undefined, () => {
            this.animating = false;
            this.handleActive(linkComp);
        });
        this.nzClick.emit(linkComp.nzHref);
    }
}
/** @nocollapse */ NzAnchorComponent.ɵfac = function NzAnchorComponent_Factory(t) { return new (t || NzAnchorComponent)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(NzScrollService), ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Platform)); };
/** @nocollapse */ NzAnchorComponent.ɵcmp = ɵɵdefineComponent({ type: NzAnchorComponent, selectors: [["nz-anchor"]], viewQuery: function NzAnchorComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.ink = _t.first);
    } }, inputs: { nzAffix: "nzAffix", nzShowInkInFixed: "nzShowInkInFixed", nzBounds: "nzBounds", nzOffsetTop: "nzOffsetTop", nzTarget: "nzTarget" }, outputs: { nzClick: "nzClick", nzScroll: "nzScroll" }, exportAs: ["nzAnchor"], ngContentSelectors: _c2, decls: 3, vars: 2, consts: [[3, "nzOffsetTop", 4, "ngIf", "ngIfElse"], ["content", ""], [3, "nzOffsetTop"], [3, "ngTemplateOutlet"], [1, "ant-anchor-wrapper", 3, "ngStyle"], [1, "ant-anchor", 3, "ngClass"], [1, "ant-anchor-ink"], [1, "ant-anchor-ink-ball"], ["ink", ""]], template: function NzAnchorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵtemplate(0, NzAnchorComponent_nz_affix_0_Template, 2, 2, "nz-affix", 0);
        ɵɵtemplate(1, NzAnchorComponent_ng_template_1_Template, 6, 5, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r355 = ɵɵreference(2);
        ɵɵproperty("ngIf", ctx.nzAffix)("ngIfElse", _r355);
    } }, directives: [NgIf, NzAffixComponent, NgTemplateOutlet, NgStyle, NgClass], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzAnchorComponent.prototype, "nzAffix", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, false),
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzAnchorComponent.prototype, "nzShowInkInFixed", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, 5),
    InputNumber(),
    __metadata("design:type", Number)
], NzAnchorComponent.prototype, "nzBounds", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], NzAnchorComponent.prototype, "nzOffsetTop", null);
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzAnchorComponent, [{
        type: Component,
        args: [{
                selector: 'nz-anchor',
                exportAs: 'nzAnchor',
                preserveWhitespaces: false,
                templateUrl: './nz-anchor.component.html',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: NzConfigService }, { type: NzScrollService }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: ChangeDetectorRef }, { type: Platform }]; }, { ink: [{
            type: ViewChild,
            args: ['ink', { static: false }]
        }], nzAffix: [{
            type: Input
        }], nzShowInkInFixed: [{
            type: Input
        }], nzBounds: [{
            type: Input
        }], nzOffsetTop: [{
            type: Input
        }], nzTarget: [{
            type: Input
        }], nzClick: [{
            type: Output
        }], nzScroll: [{
            type: Output
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const _c0$1 = ["nzTemplate"];
function NzAnchorLinkComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r359 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r359.titleStr);
} }
const _c1$1 = ["*"];
class NzAnchorLinkComponent {
    constructor(elementRef, anchorComp, cdr, platform, renderer) {
        this.elementRef = elementRef;
        this.anchorComp = anchorComp;
        this.cdr = cdr;
        this.platform = platform;
        this.nzHref = '#';
        this.titleStr = '';
        this.active = false;
        renderer.addClass(elementRef.nativeElement, 'ant-anchor-link');
    }
    set nzTitle(value) {
        if (value instanceof TemplateRef) {
            this.titleStr = null;
            this.titleTpl = value;
        }
        else {
            this.titleStr = value;
        }
    }
    ngOnInit() {
        this.anchorComp.registerLink(this);
    }
    goToClick(e) {
        e.preventDefault();
        e.stopPropagation();
        if (this.platform.isBrowser) {
            this.anchorComp.handleScrollTo(this);
        }
    }
    markForCheck() {
        this.cdr.markForCheck();
    }
    ngOnDestroy() {
        this.anchorComp.unregisterLink(this);
    }
}
/** @nocollapse */ NzAnchorLinkComponent.ɵfac = function NzAnchorLinkComponent_Factory(t) { return new (t || NzAnchorLinkComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NzAnchorComponent), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(Renderer2)); };
/** @nocollapse */ NzAnchorLinkComponent.ɵcmp = ɵɵdefineComponent({ type: NzAnchorLinkComponent, selectors: [["nz-link"]], contentQueries: function NzAnchorLinkComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵɵcontentQuery(dirIndex, _c0$1, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzTemplate = _t.first);
    } }, hostBindings: function NzAnchorLinkComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        ɵɵallocHostVars(1);
    } if (rf & 2) {
        ɵɵclassProp("ant-anchor-link-active", ctx.active);
    } }, inputs: { nzHref: "nzHref", nzTitle: "nzTitle" }, exportAs: ["nzLink"], ngContentSelectors: _c1$1, decls: 3, vars: 4, consts: [[1, "ant-anchor-link-title", 3, "href", "title", "click"], [4, "ngIf", "ngIfElse"]], template: function NzAnchorLinkComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "a", 0);
        ɵɵlistener("click", function NzAnchorLinkComponent_Template_a_click_0_listener($event) { return ctx.goToClick($event); });
        ɵɵtemplate(1, NzAnchorLinkComponent_span_1_Template, 2, 1, "span", 1);
        ɵɵelementEnd();
        ɵɵprojection(2);
    } if (rf & 2) {
        ɵɵpropertyInterpolate("href", ctx.nzHref, ɵɵsanitizeUrl);
        ɵɵpropertyInterpolate("title", ctx.titleStr);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.titleStr)("ngIfElse", ctx.titleTpl || ctx.nzTemplate);
    } }, directives: [NgIf], styles: ["\n      nz-link {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzAnchorLinkComponent, [{
        type: Component,
        args: [{
                selector: 'nz-link',
                exportAs: 'nzLink',
                preserveWhitespaces: false,
                templateUrl: './nz-anchor-link.component.html',
                host: {
                    '[class.ant-anchor-link-active]': 'active'
                },
                styles: [
                    `
      nz-link {
        display: block;
      }
    `
                ],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ElementRef }, { type: NzAnchorComponent }, { type: ChangeDetectorRef }, { type: Platform }, { type: Renderer2 }]; }, { nzHref: [{
            type: Input
        }], nzTitle: [{
            type: Input
        }], nzTemplate: [{
            type: ContentChild,
            args: ['nzTemplate', { static: false }]
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzAnchorModule {
}
/** @nocollapse */ NzAnchorModule.ɵmod = ɵɵdefineNgModule({ type: NzAnchorModule });
/** @nocollapse */ NzAnchorModule.ɵinj = ɵɵdefineInjector({ factory: function NzAnchorModule_Factory(t) { return new (t || NzAnchorModule)(); }, providers: [SCROLL_SERVICE_PROVIDER], imports: [[CommonModule, NzAffixModule, PlatformModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzAnchorModule, { declarations: [NzAnchorComponent, NzAnchorLinkComponent], imports: [CommonModule, NzAffixModule, PlatformModule], exports: [NzAnchorComponent, NzAnchorLinkComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzAnchorModule, [{
        type: NgModule,
        args: [{
                declarations: [NzAnchorComponent, NzAnchorLinkComponent],
                exports: [NzAnchorComponent, NzAnchorLinkComponent],
                imports: [CommonModule, NzAffixModule, PlatformModule],
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

export { NzAnchorComponent, NzAnchorLinkComponent, NzAnchorModule };
//# sourceMappingURL=ng-zorro-antd-anchor.js.map
