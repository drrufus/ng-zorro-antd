import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { fromEvent } from 'rxjs';
import { distinctUntilChanged, throttleTime } from 'rxjs/operators';
import { InputBoolean, InputNumber, NzConfigService, NzScrollService, toNumber, WithConfig } from 'ng-zorro-antd/core';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
import * as i2 from "@angular/cdk/platform";
import * as i3 from "@angular/common";
import * as i4 from "ng-zorro-antd/affix";
const _c0 = ["ink"];
function NzAnchorComponent_nz_affix_0_ng_template_1_Template(rf, ctx) { }
function NzAnchorComponent_nz_affix_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nz-affix", 2);
    i0.ɵɵtemplate(1, NzAnchorComponent_nz_affix_0_ng_template_1_Template, 0, 0, "ng-template", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r354 = i0.ɵɵnextContext();
    const _r355 = i0.ɵɵreference(2);
    i0.ɵɵproperty("nzOffsetTop", ctx_r354.nzOffsetTop);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r355);
} }
const _c1 = function (a0) { return { fixed: a0 }; };
function NzAnchorComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵelementStart(2, "div", 6);
    i0.ɵɵelement(3, "div", 7, 8);
    i0.ɵɵelementEnd();
    i0.ɵɵprojection(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r356 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngStyle", ctx_r356.wrapperStyle);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c1, !ctx_r356.nzAffix && !ctx_r356.nzShowInkInFixed));
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("visible", ctx_r356.visible);
} }
const _c2 = ["*"];
const NZ_CONFIG_COMPONENT_NAME = 'anchor';
const sharpMatcherRegx = /#([^#]+)$/;
export class NzAnchorComponent {
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
/** @nocollapse */ NzAnchorComponent.ɵfac = function NzAnchorComponent_Factory(t) { return new (t || NzAnchorComponent)(i0.ɵɵdirectiveInject(i1.NzConfigService), i0.ɵɵdirectiveInject(i1.NzScrollService), i0.ɵɵdirectiveInject(DOCUMENT), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.Platform)); };
/** @nocollapse */ NzAnchorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzAnchorComponent, selectors: [["nz-anchor"]], viewQuery: function NzAnchorComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.ink = _t.first);
    } }, inputs: { nzAffix: "nzAffix", nzShowInkInFixed: "nzShowInkInFixed", nzBounds: "nzBounds", nzOffsetTop: "nzOffsetTop", nzTarget: "nzTarget" }, outputs: { nzClick: "nzClick", nzScroll: "nzScroll" }, exportAs: ["nzAnchor"], ngContentSelectors: _c2, decls: 3, vars: 2, consts: [[3, "nzOffsetTop", 4, "ngIf", "ngIfElse"], ["content", ""], [3, "nzOffsetTop"], [3, "ngTemplateOutlet"], [1, "ant-anchor-wrapper", 3, "ngStyle"], [1, "ant-anchor", 3, "ngClass"], [1, "ant-anchor-ink"], [1, "ant-anchor-ink-ball"], ["ink", ""]], template: function NzAnchorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, NzAnchorComponent_nz_affix_0_Template, 2, 2, "nz-affix", 0);
        i0.ɵɵtemplate(1, NzAnchorComponent_ng_template_1_Template, 6, 5, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r355 = i0.ɵɵreference(2);
        i0.ɵɵproperty("ngIf", ctx.nzAffix)("ngIfElse", _r355);
    } }, directives: [i3.NgIf, i4.NzAffixComponent, i3.NgTemplateOutlet, i3.NgStyle, i3.NgClass], encapsulation: 2, changeDetection: 0 });
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzAnchorComponent, [{
        type: Component,
        args: [{
                selector: 'nz-anchor',
                exportAs: 'nzAnchor',
                preserveWhitespaces: false,
                templateUrl: './nz-anchor.component.html',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.NzConfigService }, { type: i1.NzScrollService }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: i0.ChangeDetectorRef }, { type: i2.Platform }]; }, { ink: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYW5jaG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvYW5jaG9yLyIsInNvdXJjZXMiOlsibnotYW5jaG9yLmNvbXBvbmVudC50cyIsIm56LWFuY2hvci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVwRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBb0IsZUFBZSxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7OztJQzNCekksbUNBQ0U7SUFBQSw2RkFBMEM7SUFDNUMsaUJBQVc7Ozs7SUFGNkIsa0RBQTJCO0lBQ3BELGVBQTRCO0lBQTVCLHdDQUE0Qjs7OztJQUd6Qyw4QkFDRTtJQUFBLDhCQUNFO0lBQUEsOEJBQ0U7SUFBQSw0QkFBc0U7SUFDeEUsaUJBQU07SUFDTixrQkFBWTtJQUNkLGlCQUFNO0lBQ1IsaUJBQU07OztJQVAwQiwrQ0FBd0I7SUFDOUIsZUFBb0Q7SUFBcEQscUdBQW9EO0lBRXZDLGVBQXlCO0lBQXpCLDJDQUF5Qjs7O0FENkJsRSxNQUFNLHdCQUF3QixHQUFHLFFBQVEsQ0FBQztBQUMxQyxNQUFNLGdC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bnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbmplY3QsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE91dHB1dCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIHRocm90dGxlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIsIE5nU3R5bGVJbnRlcmZhY2UsIE56Q29uZmlnU2VydmljZSwgTnpTY3JvbGxTZXJ2aWNlLCB0b051bWJlciwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOekFuY2hvckxpbmtDb21wb25lbnQgfSBmcm9tICcuL256LWFuY2hvci1saW5rLmNvbXBvbmVudCc7XHJcblxyXG5pbnRlcmZhY2UgU2VjdGlvbiB7XHJcbiAgY29tcDogTnpBbmNob3JMaW5rQ29tcG9uZW50O1xyXG4gIHRvcDogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAnYW5jaG9yJztcclxuY29uc3Qgc2hhcnBNYXRjaGVyUmVneCA9IC8jKFteI10rKSQvO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei1hbmNob3InLFxyXG4gIGV4cG9ydEFzOiAnbnpBbmNob3InLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1hbmNob3IuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE56QW5jaG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcclxuICBAVmlld0NoaWxkKCdpbmsnLCB7IHN0YXRpYzogZmFsc2UgfSkgcHJpdmF0ZSBpbms6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekFmZml4ID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIGZhbHNlKVxyXG4gIEBJbnB1dEJvb2xlYW4oKVxyXG4gIG56U2hvd0lua0luRml4ZWQ6IGJvb2xlYW47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCA1KVxyXG4gIEBJbnB1dE51bWJlcigpXHJcbiAgbnpCb3VuZHM6IG51bWJlcjtcclxuXHJcbiAgQElucHV0KClcclxuICBAV2l0aENvbmZpZzxudW1iZXI+KE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSlcclxuICBzZXQgbnpPZmZzZXRUb3AodmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5fb2Zmc2V0VG9wID0gdG9OdW1iZXIodmFsdWUsIDApO1xyXG4gICAgdGhpcy53cmFwcGVyU3R5bGUgPSB7XHJcbiAgICAgICdtYXgtaGVpZ2h0JzogYGNhbGMoMTAwdmggLSAke3RoaXMuX29mZnNldFRvcH1weClgXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56T2Zmc2V0VG9wKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fb2Zmc2V0VG9wO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfb2Zmc2V0VG9wOiBudW1iZXI7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56VGFyZ2V0KGVsOiBzdHJpbmcgfCBFbGVtZW50KSB7XHJcbiAgICB0aGlzLnRhcmdldCA9IHR5cGVvZiBlbCA9PT0gJ3N0cmluZycgPyB0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKGVsKSA6IGVsO1xyXG4gICAgdGhpcy5yZWdpc3RlclNjcm9sbEV2ZW50KCk7XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNjcm9sbCA9IG5ldyBFdmVudEVtaXR0ZXI8TnpBbmNob3JMaW5rQ29tcG9uZW50PigpO1xyXG5cclxuICB2aXNpYmxlID0gZmFsc2U7XHJcbiAgd3JhcHBlclN0eWxlOiBOZ1N0eWxlSW50ZXJmYWNlID0geyAnbWF4LWhlaWdodCc6ICcxMDB2aCcgfTtcclxuXHJcbiAgcHJpdmF0ZSBsaW5rczogTnpBbmNob3JMaW5rQ29tcG9uZW50W10gPSBbXTtcclxuICBwcml2YXRlIGFuaW1hdGluZyA9IGZhbHNlO1xyXG4gIHByaXZhdGUgdGFyZ2V0OiBFbGVtZW50IHwgbnVsbCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBzY3JvbGwkOiBTdWJzY3JpcHRpb24gfCBudWxsID0gbnVsbDtcclxuICBwcml2YXRlIGRlc3Ryb3llZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcclxuICAgIHByaXZhdGUgc2Nyb2xsU3J2OiBOelNjcm9sbFNlcnZpY2UsXHJcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXHJcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm1cclxuICApIHt9XHJcblxyXG4gIHJlZ2lzdGVyTGluayhsaW5rOiBOekFuY2hvckxpbmtDb21wb25lbnQpOiB2b2lkIHtcclxuICAgIHRoaXMubGlua3MucHVzaChsaW5rKTtcclxuICB9XHJcblxyXG4gIHVucmVnaXN0ZXJMaW5rKGxpbms6IE56QW5jaG9yTGlua0NvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5saW5rcy5zcGxpY2UodGhpcy5saW5rcy5pbmRleE9mKGxpbmspLCAxKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0VGFyZ2V0KCk6IEVsZW1lbnQgfCBXaW5kb3cge1xyXG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0IHx8IHdpbmRvdztcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVnaXN0ZXJTY3JvbGxFdmVudCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWU7XHJcbiAgICB0aGlzLnJlbW92ZUxpc3RlbigpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZWdpc3RlclNjcm9sbEV2ZW50KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnJlbW92ZUxpc3RlbigpO1xyXG4gICAgdGhpcy5zY3JvbGwkID0gZnJvbUV2ZW50KHRoaXMuZ2V0VGFyZ2V0KCksICdzY3JvbGwnKVxyXG4gICAgICAucGlwZSh0aHJvdHRsZVRpbWUoNTApLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuaGFuZGxlU2Nyb2xsKCkpO1xyXG4gICAgLy8gQnJvd3NlciB3b3VsZCBtYWludGFpbiB0aGUgc2Nyb2xsaW5nIHBvc2l0aW9uIHdoZW4gcmVmcmVzaGluZy5cclxuICAgIC8vIFNvIHdlIGhhdmUgdG8gZGVsYXkgY2FsY3VsYXRpb24gaW4gYXZvaWQgb2YgZ2V0dGluZyBhIGluY29ycmVjdCByZXN1bHQuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaGFuZGxlU2Nyb2xsKCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVMaXN0ZW4oKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zY3JvbGwkKSB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsJC51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRPZmZzZXRUb3AoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBudW1iZXIge1xyXG4gICAgaWYgKCFlbGVtZW50IHx8ICFlbGVtZW50LmdldENsaWVudFJlY3RzKCkubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBpZiAocmVjdC53aWR0aCB8fCByZWN0LmhlaWdodCkge1xyXG4gICAgICBpZiAodGhpcy5nZXRUYXJnZXQoKSA9PT0gd2luZG93KSB7XHJcbiAgICAgICAgcmV0dXJuIHJlY3QudG9wIC0gZWxlbWVudC5vd25lckRvY3VtZW50IS5kb2N1bWVudEVsZW1lbnQhLmNsaWVudFRvcDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVjdC50b3AgLSAodGhpcy5nZXRUYXJnZXQoKSBhcyBIVE1MRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlY3QudG9wO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU2Nyb2xsKCk6IHZvaWQge1xyXG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcgfHwgdGhpcy5kZXN0cm95ZWQgfHwgdGhpcy5hbmltYXRpbmcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNlY3Rpb25zOiBTZWN0aW9uW10gPSBbXTtcclxuICAgIGNvbnN0IHNjb3BlID0gKHRoaXMubnpPZmZzZXRUb3AgfHwgMCkgKyB0aGlzLm56Qm91bmRzO1xyXG4gICAgdGhpcy5saW5rcy5mb3JFYWNoKGNvbXAgPT4ge1xyXG4gICAgICBjb25zdCBzaGFycExpbmtNYXRjaCA9IHNoYXJwTWF0Y2hlclJlZ3guZXhlYyhjb21wLm56SHJlZi50b1N0cmluZygpKTtcclxuICAgICAgaWYgKCFzaGFycExpbmtNYXRjaCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmRvYy5nZXRFbGVtZW50QnlJZChzaGFycExpbmtNYXRjaFsxXSk7XHJcbiAgICAgIGlmICh0YXJnZXQpIHtcclxuICAgICAgICBjb25zdCB0b3AgPSB0aGlzLmdldE9mZnNldFRvcCh0YXJnZXQpO1xyXG4gICAgICAgIGlmICh0b3AgPCBzY29wZSkge1xyXG4gICAgICAgICAgc2VjdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICAgIHRvcCxcclxuICAgICAgICAgICAgY29tcFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnZpc2libGUgPSAhIXNlY3Rpb25zLmxlbmd0aDtcclxuICAgIGlmICghdGhpcy52aXNpYmxlKSB7XHJcbiAgICAgIHRoaXMuY2xlYXJBY3RpdmUoKTtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgbWF4U2VjdGlvbiA9IHNlY3Rpb25zLnJlZHVjZSgocHJldiwgY3VycikgPT4gKGN1cnIudG9wID4gcHJldi50b3AgPyBjdXJyIDogcHJldikpO1xyXG4gICAgICB0aGlzLmhhbmRsZUFjdGl2ZShtYXhTZWN0aW9uLmNvbXApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGVhckFjdGl2ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMubGlua3MuZm9yRWFjaChpID0+IHtcclxuICAgICAgaS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgaS5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVBY3RpdmUoY29tcDogTnpBbmNob3JMaW5rQ29tcG9uZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLmNsZWFyQWN0aXZlKCk7XHJcblxyXG4gICAgY29tcC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgY29tcC5tYXJrRm9yQ2hlY2soKTtcclxuXHJcbiAgICBjb25zdCBsaW5rTm9kZSA9IChjb21wLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MRGl2RWxlbWVudCkucXVlcnlTZWxlY3RvcignLmFudC1hbmNob3ItbGluay10aXRsZScpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgdGhpcy5pbmsubmF0aXZlRWxlbWVudC5zdHlsZS50b3AgPSBgJHtsaW5rTm9kZS5vZmZzZXRUb3AgKyBsaW5rTm9kZS5jbGllbnRIZWlnaHQgLyAyIC0gNC41fXB4YDtcclxuICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcblxyXG4gICAgdGhpcy5uelNjcm9sbC5lbWl0KGNvbXApO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU2Nyb2xsVG8obGlua0NvbXA6IE56QW5jaG9yTGlua0NvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgY29uc3QgZWwgPSB0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKGxpbmtDb21wLm56SHJlZik7XHJcbiAgICBpZiAoIWVsKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFuaW1hdGluZyA9IHRydWU7XHJcbiAgICBjb25zdCBjb250YWluZXJTY3JvbGxUb3AgPSB0aGlzLnNjcm9sbFNydi5nZXRTY3JvbGwodGhpcy5nZXRUYXJnZXQoKSk7XHJcbiAgICBjb25zdCBlbE9mZnNldFRvcCA9IHRoaXMuZ2V0T2Zmc2V0VG9wKGVsKTtcclxuICAgIGNvbnN0IHRhcmdldFNjcm9sbFRvcCA9IGNvbnRhaW5lclNjcm9sbFRvcCArIGVsT2Zmc2V0VG9wIC0gKHRoaXMubnpPZmZzZXRUb3AgfHwgMCk7XHJcbiAgICB0aGlzLnNjcm9sbFNydi5zY3JvbGxUbyh0aGlzLmdldFRhcmdldCgpLCB0YXJnZXRTY3JvbGxUb3AsIHVuZGVmaW5lZCwgKCkgPT4ge1xyXG4gICAgICB0aGlzLmFuaW1hdGluZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmhhbmRsZUFjdGl2ZShsaW5rQ29tcCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMubnpDbGljay5lbWl0KGxpbmtDb21wLm56SHJlZik7XHJcbiAgfVxyXG59XHJcbiIsIjxuei1hZmZpeCAqbmdJZj1cIm56QWZmaXg7IGVsc2UgY29udGVudFwiIFtuek9mZnNldFRvcF09XCJuek9mZnNldFRvcFwiPlxyXG4gIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJjb250ZW50XCI+PC9uZy10ZW1wbGF0ZT5cclxuPC9uei1hZmZpeD5cclxuPG5nLXRlbXBsYXRlICNjb250ZW50PlxyXG4gIDxkaXYgY2xhc3M9XCJhbnQtYW5jaG9yLXdyYXBwZXJcIiBbbmdTdHlsZV09XCJ3cmFwcGVyU3R5bGVcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJhbnQtYW5jaG9yXCIgW25nQ2xhc3NdPVwieyBmaXhlZDogIW56QWZmaXggJiYgIW56U2hvd0lua0luRml4ZWQgfVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LWFuY2hvci1pbmtcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LWFuY2hvci1pbmstYmFsbFwiIFtjbGFzcy52aXNpYmxlXT1cInZpc2libGVcIiAjaW5rPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==