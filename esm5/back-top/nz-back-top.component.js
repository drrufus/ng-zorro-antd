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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Inject, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { fadeMotion, InputNumber, NzConfigService, NzScrollService, WithConfig } from 'ng-zorro-antd/core';
import { fromEvent } from 'rxjs';
import { distinctUntilChanged, throttleTime } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
import * as i2 from "@angular/cdk/platform";
import * as i3 from "@angular/common";
function NzBackTopComponent_div_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelement(1, "div", 5);
    i0.ɵɵelementEnd();
} }
function NzBackTopComponent_div_0_ng_template_3_Template(rf, ctx) { }
function NzBackTopComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r35 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵlistener("click", function NzBackTopComponent_div_0_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r35); var ctx_r34 = i0.ɵɵnextContext(); return ctx_r34.clickBackTop(); });
    i0.ɵɵtemplate(1, NzBackTopComponent_div_0_ng_template_1_Template, 2, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(3, NzBackTopComponent_div_0_ng_template_3_Template, 0, 0, "ng-template", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var _r31 = i0.ɵɵreference(2);
    var ctx_r30 = i0.ɵɵnextContext();
    i0.ɵɵproperty("@fadeMotion", undefined);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r30.nzTemplate || _r31);
} }
var NZ_CONFIG_COMPONENT_NAME = 'backTop';
var NzBackTopComponent = /** @class */ (function () {
    function NzBackTopComponent(nzConfigService, scrollSrv, 
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
    Object.defineProperty(NzBackTopComponent.prototype, "nzTarget", {
        set: function (el) {
            this.target = typeof el === 'string' ? this.doc.querySelector(el) : el;
            this.registerScrollEvent();
        },
        enumerable: true,
        configurable: true
    });
    NzBackTopComponent.prototype.ngOnInit = function () {
        if (!this.scroll$) {
            this.registerScrollEvent();
        }
    };
    NzBackTopComponent.prototype.clickBackTop = function () {
        this.scrollSrv.scrollTo(this.getTarget(), 0);
        this.nzClick.emit(true);
    };
    NzBackTopComponent.prototype.getTarget = function () {
        return this.target || window;
    };
    NzBackTopComponent.prototype.handleScroll = function () {
        if (this.visible === this.scrollSrv.getScroll(this.getTarget()) > this.nzVisibilityHeight) {
            return;
        }
        this.visible = !this.visible;
        this.cd.markForCheck();
    };
    NzBackTopComponent.prototype.removeListen = function () {
        if (this.scroll$) {
            this.scroll$.unsubscribe();
        }
    };
    NzBackTopComponent.prototype.registerScrollEvent = function () {
        var _this = this;
        if (!this.platform.isBrowser) {
            return;
        }
        this.removeListen();
        this.handleScroll();
        this.scroll$ = fromEvent(this.getTarget(), 'scroll')
            .pipe(throttleTime(50), distinctUntilChanged())
            .subscribe(function () { return _this.handleScroll(); });
    };
    NzBackTopComponent.prototype.ngOnDestroy = function () {
        this.removeListen();
    };
    /** @nocollapse */ NzBackTopComponent.ɵfac = function NzBackTopComponent_Factory(t) { return new (t || NzBackTopComponent)(i0.ɵɵdirectiveInject(i1.NzConfigService), i0.ɵɵdirectiveInject(i1.NzScrollService), i0.ɵɵdirectiveInject(DOCUMENT), i0.ɵɵdirectiveInject(i2.Platform), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ NzBackTopComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzBackTopComponent, selectors: [["nz-back-top"]], inputs: { nzTemplate: "nzTemplate", nzVisibilityHeight: "nzVisibilityHeight", nzTarget: "nzTarget" }, outputs: { nzClick: "nzClick" }, exportAs: ["nzBackTop"], decls: 1, vars: 1, consts: [["class", "ant-back-top", 3, "click", 4, "ngIf"], [1, "ant-back-top", 3, "click"], ["defaultContent", ""], [3, "ngTemplateOutlet"], [1, "ant-back-top-content"], [1, "ant-back-top-icon"]], template: function NzBackTopComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, NzBackTopComponent_div_0_Template, 4, 2, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.visible);
        } }, directives: [i3.NgIf, i3.NgTemplateOutlet], encapsulation: 2, data: { animation: [fadeMotion] }, changeDetection: 0 });
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, 400), InputNumber(),
        __metadata("design:type", Number)
    ], NzBackTopComponent.prototype, "nzVisibilityHeight", void 0);
    return NzBackTopComponent;
}());
export { NzBackTopComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzBackTopComponent, [{
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
    }], function () { return [{ type: i1.NzConfigService }, { type: i1.NzScrollService }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: i2.Platform }, { type: i0.ChangeDetectorRef }]; }, { nzTemplate: [{
            type: Input
        }], nzVisibilityHeight: [{
            type: Input
        }], nzTarget: [{
            type: Input
        }], nzClick: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYmFjay10b3AuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9iYWNrLXRvcC8iLCJzb3VyY2VzIjpbIm56LWJhY2stdG9wLmNvbXBvbmVudC50cyIsIm56LWJhY2stdG9wLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFHTCxNQUFNLEVBQ04sV0FBVyxFQUNYLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzNHLE9BQU8sRUFBRSxTQUFTLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7O0lDeEJoRSw4QkFDRTtJQUFBLHlCQUFxQztJQUN2QyxpQkFBTTs7Ozs7SUFKViw4QkFDRTtJQUR3Qiw0TEFBd0I7SUFDaEQsMEhBQ0U7SUFJRix5RkFBK0Q7SUFDakUsaUJBQU07Ozs7SUFQNkMsdUNBQVc7SUFNL0MsZUFBaUQ7SUFBakQsNkRBQWlEOztBRHNCaEUsSUFBTSx3QkFBd0IsR0FBRyxTQUFTLENBQUM7QUFFM0M7SUEwQkUsNEJBQ1MsZUFBZ0MsRUFDL0IsU0FBMEI7SUFDbEMsa0NBQWtDO0lBQ1IsR0FBUSxFQUMxQixRQUFrQixFQUNsQixFQUFxQjtRQUx0QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDL0IsY0FBUyxHQUFU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RSxDQUFDLFVBQVUsQ0FBQztnQkFDeEIsV0FBVyxFQUFFLDhCQUE4QjtnQkFDM0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxtQkFBbUIsRUFBRSxLQUFLO2FBQzNCOztzQkFzQkksTUFBTTt1QkFBQyxRQUFROztrQkFmakIsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsS0FBSzs7a0JBTUwsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbmplY3QsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGZhZGVNb3Rpb24sIElucHV0TnVtYmVyLCBOekNvbmZpZ1NlcnZpY2UsIE56U2Nyb2xsU2VydmljZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IGZyb21FdmVudCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCB0aHJvdHRsZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAnYmFja1RvcCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LWJhY2stdG9wJyxcclxuICBleHBvcnRBczogJ256QmFja1RvcCcsXHJcbiAgYW5pbWF0aW9uczogW2ZhZGVNb3Rpb25dLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1iYWNrLXRvcC5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpCYWNrVG9wQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgc2Nyb2xsJDogU3Vic2NyaXB0aW9uIHwgbnVsbCA9IG51bGw7XHJcbiAgcHJpdmF0ZSB0YXJnZXQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIHZpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KCkgbnpUZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCA0MDApIEBJbnB1dE51bWJlcigpIG56VmlzaWJpbGl0eUhlaWdodDogbnVtYmVyO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelRhcmdldChlbDogc3RyaW5nIHwgSFRNTEVsZW1lbnQpIHtcclxuICAgIHRoaXMudGFyZ2V0ID0gdHlwZW9mIGVsID09PSAnc3RyaW5nJyA/IHRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3IoZWwpIDogZWw7XHJcbiAgICB0aGlzLnJlZ2lzdGVyU2Nyb2xsRXZlbnQoKTtcclxuICB9XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNsaWNrOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBzY3JvbGxTcnY6IE56U2Nyb2xsU2VydmljZSxcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXHJcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcclxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5zY3JvbGwkKSB7XHJcbiAgICAgIHRoaXMucmVnaXN0ZXJTY3JvbGxFdmVudCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xpY2tCYWNrVG9wKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zY3JvbGxTcnYuc2Nyb2xsVG8odGhpcy5nZXRUYXJnZXQoKSwgMCk7XHJcbiAgICB0aGlzLm56Q2xpY2suZW1pdCh0cnVlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0VGFyZ2V0KCk6IEhUTUxFbGVtZW50IHwgV2luZG93IHtcclxuICAgIHJldHVybiB0aGlzLnRhcmdldCB8fCB3aW5kb3c7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhbmRsZVNjcm9sbCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnZpc2libGUgPT09IHRoaXMuc2Nyb2xsU3J2LmdldFNjcm9sbCh0aGlzLmdldFRhcmdldCgpKSA+IHRoaXMubnpWaXNpYmlsaXR5SGVpZ2h0KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMudmlzaWJsZSA9ICF0aGlzLnZpc2libGU7XHJcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVMaXN0ZW4oKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zY3JvbGwkKSB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsJC51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZWdpc3RlclNjcm9sbEV2ZW50KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnJlbW92ZUxpc3RlbigpO1xyXG4gICAgdGhpcy5oYW5kbGVTY3JvbGwoKTtcclxuICAgIHRoaXMuc2Nyb2xsJCA9IGZyb21FdmVudCh0aGlzLmdldFRhcmdldCgpLCAnc2Nyb2xsJylcclxuICAgICAgLnBpcGUodGhyb3R0bGVUaW1lKDUwKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmhhbmRsZVNjcm9sbCgpKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZW1vdmVMaXN0ZW4oKTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImFudC1iYWNrLXRvcFwiIChjbGljayk9XCJjbGlja0JhY2tUb3AoKVwiIEBmYWRlTW90aW9uICpuZ0lmPVwidmlzaWJsZVwiPlxyXG4gIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdENvbnRlbnQ+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYW50LWJhY2stdG9wLWNvbnRlbnRcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImFudC1iYWNrLXRvcC1pY29uXCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L25nLXRlbXBsYXRlPlxyXG4gIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJuelRlbXBsYXRlIHx8IGRlZmF1bHRDb250ZW50XCI+PC9uZy10ZW1wbGF0ZT5cclxuPC9kaXY+XHJcbiJdfQ==