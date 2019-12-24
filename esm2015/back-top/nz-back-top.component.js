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
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵlistener("click", function NzBackTopComponent_div_0_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r28 = i0.ɵɵnextContext(); return ctx_r28.clickBackTop(); });
    i0.ɵɵtemplate(1, NzBackTopComponent_div_0_ng_template_1_Template, 2, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(3, NzBackTopComponent_div_0_ng_template_3_Template, 0, 0, "ng-template", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r25 = i0.ɵɵreference(2);
    const ctx_r24 = i0.ɵɵnextContext();
    i0.ɵɵproperty("@fadeMotion", undefined);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r24.nzTemplate || _r25);
} }
const NZ_CONFIG_COMPONENT_NAME = 'backTop';
export class NzBackTopComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYmFjay10b3AuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9iYWNrLXRvcC8iLCJzb3VyY2VzIjpbIm56LWJhY2stdG9wLmNvbXBvbmVudC50cyIsIm56LWJhY2stdG9wLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFHTCxNQUFNLEVBQ04sV0FBVyxFQUNYLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzNHLE9BQU8sRUFBRSxTQUFTLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7O0lDeEJoRSw4QkFDRTtJQUFBLHlCQUFxQztJQUN2QyxpQkFBTTs7Ozs7SUFKViw4QkFDRTtJQUR3Qiw4TEFBd0I7SUFDaEQsMEhBQ0U7SUFJRix5RkFBK0Q7SUFDakUsaUJBQU07Ozs7SUFQNkMsdUNBQVc7SUFNL0MsZUFBaUQ7SUFBakQsNkRBQWlEOztBRHNCaEUsTUFBTSx3QkFBd0IsR0FBRyxTQUFTLENBQUM7QUFXM0MsTUFBTSxPQUFPLGtCQUFrQjtJQWlCN0IsWUFDUyxlQUFnQyxFQUMvQixTQUEwQjtJQUNsQyxrQ0FBa0M7SUFDUixHQUFRLEVBQzFCLFFBQWtCLEVBQ2xCLEVBQXFCO1FBTHRCLG9CQUFlLEdBQWYsZUFBZSxDQUFp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QWlCLENBQUMsSUFBSTtnQkFDckMsbUJBQW1CLEVBQUUsS0FBSzthQUMzQjs7c0JBc0JJLE1BQU07dUJBQUMsUUFBUTs7a0JBZmpCLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQU1MLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5qZWN0LFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBmYWRlTW90aW9uLCBJbnB1dE51bWJlciwgTnpDb25maWdTZXJ2aWNlLCBOelNjcm9sbFNlcnZpY2UsIFdpdGhDb25maWcgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgdGhyb3R0bGVUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ2JhY2tUb3AnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei1iYWNrLXRvcCcsXHJcbiAgZXhwb3J0QXM6ICduekJhY2tUb3AnLFxyXG4gIGFuaW1hdGlvbnM6IFtmYWRlTW90aW9uXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotYmFjay10b3AuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2VcclxufSlcclxuZXhwb3J0IGNsYXNzIE56QmFja1RvcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBwcml2YXRlIHNjcm9sbCQ6IFN1YnNjcmlwdGlvbiB8IG51bGwgPSBudWxsO1xyXG4gIHByaXZhdGUgdGFyZ2V0OiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xyXG5cclxuICB2aXNpYmxlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIG56VGVtcGxhdGU6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgNDAwKSBASW5wdXROdW1iZXIoKSBuelZpc2liaWxpdHlIZWlnaHQ6IG51bWJlcjtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpUYXJnZXQoZWw6IHN0cmluZyB8IEhUTUxFbGVtZW50KSB7XHJcbiAgICB0aGlzLnRhcmdldCA9IHR5cGVvZiBlbCA9PT0gJ3N0cmluZycgPyB0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKGVsKSA6IGVsO1xyXG4gICAgdGhpcy5yZWdpc3RlclNjcm9sbEV2ZW50KCk7XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDbGljazogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcclxuICAgIHByaXZhdGUgc2Nyb2xsU3J2OiBOelNjcm9sbFNlcnZpY2UsXHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LFxyXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sXHJcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuc2Nyb2xsJCkge1xyXG4gICAgICB0aGlzLnJlZ2lzdGVyU2Nyb2xsRXZlbnQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsaWNrQmFja1RvcCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2Nyb2xsU3J2LnNjcm9sbFRvKHRoaXMuZ2V0VGFyZ2V0KCksIDApO1xyXG4gICAgdGhpcy5uekNsaWNrLmVtaXQodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFRhcmdldCgpOiBIVE1MRWxlbWVudCB8IFdpbmRvdyB7XHJcbiAgICByZXR1cm4gdGhpcy50YXJnZXQgfHwgd2luZG93O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVTY3JvbGwoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy52aXNpYmxlID09PSB0aGlzLnNjcm9sbFNydi5nZXRTY3JvbGwodGhpcy5nZXRUYXJnZXQoKSkgPiB0aGlzLm56VmlzaWJpbGl0eUhlaWdodCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnZpc2libGUgPSAhdGhpcy52aXNpYmxlO1xyXG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVtb3ZlTGlzdGVuKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc2Nyb2xsJCkge1xyXG4gICAgICB0aGlzLnNjcm9sbCQudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVnaXN0ZXJTY3JvbGxFdmVudCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yZW1vdmVMaXN0ZW4oKTtcclxuICAgIHRoaXMuaGFuZGxlU2Nyb2xsKCk7XHJcbiAgICB0aGlzLnNjcm9sbCQgPSBmcm9tRXZlbnQodGhpcy5nZXRUYXJnZXQoKSwgJ3Njcm9sbCcpXHJcbiAgICAgIC5waXBlKHRocm90dGxlVGltZSg1MCksIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5oYW5kbGVTY3JvbGwoKSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVtb3ZlTGlzdGVuKCk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJhbnQtYmFjay10b3BcIiAoY2xpY2spPVwiY2xpY2tCYWNrVG9wKClcIiBAZmFkZU1vdGlvbiAqbmdJZj1cInZpc2libGVcIj5cclxuICA8bmctdGVtcGxhdGUgI2RlZmF1bHRDb250ZW50PlxyXG4gICAgPGRpdiBjbGFzcz1cImFudC1iYWNrLXRvcC1jb250ZW50XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtYmFjay10b3AtaWNvblwiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9uZy10ZW1wbGF0ZT5cclxuICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwibnpUZW1wbGF0ZSB8fCBkZWZhdWx0Q29udGVudFwiPjwvbmctdGVtcGxhdGU+XHJcbjwvZGl2PlxyXG4iXX0=