import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { InputBoolean } from 'ng-zorro-antd/core';
import { NzTooltipDirective } from 'ng-zorro-antd/tooltip';
import { NzSliderComponent } from './nz-slider.component';
import * as i0 from "@angular/core";
import * as i1 from "./nz-slider.component";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/tooltip";
function NzSliderHandleComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 2);
} if (rf & 2) {
    const ctx_r745 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngStyle", ctx_r745.style)("nzTitle", ctx_r745.tooltipTitle)("nzTrigger", null)("nzPlacement", ctx_r745.nzTooltipPlacement);
} }
function NzSliderHandleComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 3);
} if (rf & 2) {
    const ctx_r746 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngStyle", ctx_r746.style);
} }
export class NzSliderHandleComponent {
    constructor(sliderComponent, cdr) {
        this.sliderComponent = sliderComponent;
        this.cdr = cdr;
        this.nzTooltipVisible = 'default';
        this.nzActive = false;
        this.style = {};
        this.hovers_ = new Subscription();
        this.enterHandle = () => {
            if (!this.sliderComponent.isDragging) {
                this.toggleTooltip(true);
                this.updateTooltipPosition();
                this.cdr.detectChanges();
            }
        };
        this.leaveHandle = () => {
            if (!this.sliderComponent.isDragging) {
                this.toggleTooltip(false);
                this.cdr.detectChanges();
            }
        };
    }
    ngOnChanges(changes) {
        const { nzOffset, nzValue, nzActive, nzTooltipVisible } = changes;
        if (nzOffset) {
            this.updateStyle();
        }
        if (nzValue) {
            this.updateTooltipTitle();
            this.updateTooltipPosition();
        }
        if (nzActive) {
            if (nzActive.currentValue) {
                this.toggleTooltip(true);
            }
            else {
                this.toggleTooltip(false);
            }
        }
        if (nzTooltipVisible && nzTooltipVisible.currentValue === 'always') {
            Promise.resolve().then(() => this.toggleTooltip(true, true));
        }
    }
    ngOnDestroy() {
        this.hovers_.unsubscribe();
    }
    toggleTooltip(show, force = false) {
        if (!force && (this.nzTooltipVisible !== 'default' || !this.tooltip)) {
            return;
        }
        if (show) {
            this.tooltip.show();
        }
        else {
            this.tooltip.hide();
        }
    }
    updateTooltipTitle() {
        this.tooltipTitle = this.nzTipFormatter ? this.nzTipFormatter(this.nzValue) : `${this.nzValue}`;
    }
    updateTooltipPosition() {
        if (this.tooltip) {
            Promise.resolve().then(() => this.tooltip.updatePosition());
        }
    }
    updateStyle() {
        this.style[this.nzVertical ? 'bottom' : 'left'] = `${this.nzOffset}%`;
        this.cdr.markForCheck();
    }
}
/** @nocollapse */ NzSliderHandleComponent.ɵfac = function NzSliderHandleComponent_Factory(t) { return new (t || NzSliderHandleComponent)(i0.ɵɵdirectiveInject(i1.NzSliderComponent), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
/** @nocollapse */ NzSliderHandleComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzSliderHandleComponent, selectors: [["nz-slider-handle"]], viewQuery: function NzSliderHandleComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(NzTooltipDirective, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tooltip = _t.first);
    } }, hostBindings: function NzSliderHandleComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        i0.ɵɵlistener("mouseenter", function NzSliderHandleComponent_mouseenter_HostBindingHandler($event) { return ctx.enterHandle(); })("mouseleave", function NzSliderHandleComponent_mouseleave_HostBindingHandler($event) { return ctx.leaveHandle(); });
    } }, inputs: { nzVertical: "nzVertical", nzOffset: "nzOffset", nzValue: "nzValue", nzTooltipVisible: "nzTooltipVisible", nzTooltipPlacement: "nzTooltipPlacement", nzTipFormatter: "nzTipFormatter", nzActive: "nzActive" }, exportAs: ["nzSliderHandle"], features: [i0.ɵɵNgOnChangesFeature()], decls: 2, vars: 2, consts: [["nz-tooltip", "", "class", "ant-slider-handle", 3, "ngStyle", "nzTitle", "nzTrigger", "nzPlacement", 4, "ngIf"], ["class", "ant-slider-handle", 3, "ngStyle", 4, "ngIf"], ["nz-tooltip", "", 1, "ant-slider-handle", 3, "ngStyle", "nzTitle", "nzTrigger", "nzPlacement"], [1, "ant-slider-handle", 3, "ngStyle"]], template: function NzSliderHandleComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, NzSliderHandleComponent_div_0_Template, 1, 4, "div", 0);
        i0.ɵɵtemplate(1, NzSliderHandleComponent_div_1_Template, 1, 1, "div", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.nzTipFormatter !== null && ctx.nzTooltipVisible !== "never");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.nzTipFormatter === null || ctx.nzTooltipVisible === "never");
    } }, directives: [i2.NgIf, i3.NzTooltipDirective, i2.NgStyle], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzSliderHandleComponent.prototype, "nzActive", void 0);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzSliderHandleComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-slider-handle',
                exportAs: 'nzSliderHandle',
                preserveWhitespaces: false,
                templateUrl: './nz-slider-handle.component.html',
                host: {
                    '(mouseenter)': 'enterHandle()',
                    '(mouseleave)': 'leaveHandle()'
                }
            }]
    }], function () { return [{ type: i1.NzSliderComponent }, { type: i0.ChangeDetectorRef }]; }, { tooltip: [{
            type: ViewChild,
            args: [NzTooltipDirective, { static: false }]
        }], nzVertical: [{
            type: Input
        }], nzOffset: [{
            type: Input
        }], nzValue: [{
            type: Input
        }], nzTooltipVisible: [{
            type: Input
        }], nzTooltipPlacement: [{
            type: Input
        }], nzTipFormatter: [{
            type: Input
        }], nzActive: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLWhhbmRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3NsaWRlci8iLCJzb3VyY2VzIjpbIm56LXNsaWRlci1oYW5kbGUuY29tcG9uZW50LnRzIiwibnotc2xpZGVyLWhhbmRsZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULEtBQUssRUFJTCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFcEMsT0FBTyxFQUFFLFlBQVksRUFBb0IsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUczRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7O0lDekIxRCx5QkFRTzs7O0lBSkwsd0NBQWlCLGtDQUFBLG1CQUFBLDRDQUFBOzs7SUFLbkIseUJBSU87OztJQURMLHdDQUFpQjs7QUQyQm5CLE1BQU0sT0FBTyx1QkFBdUI7SUFnQmxDLFlBQW9CLGVBQWtDLEVBQVUsR0FBc0I7UUFBbEUsb0JBQWUsR0FBZixlQUFlLENBQW1CO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFWN0UscUJBQWdCLEdBQXNCLFNBQVMsQ0FBQztRQUdoQyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRzFDLFVBQUssR0FBcUIsRUFBRSxDQUFDO1FBRXJCLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBOEJyQyxnQkFBVyxHQUFHLEdBQUcsRUFBRTtZQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFD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O1FBQS9ELHNGQUErRDs7QURzQ3RDO0lBQWYsWUFBWSxFQUFFOzt5REFBa0I7a0RBVC9CLHVCQUF1QjtjQVpuQyxTQUFTO2VBQUM7Z0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixXQUFXLEVBQUUsbUNBQW1DO2dCQUNoRCxJQUFJLEVBQUU7b0JBQ0osY0FBYyxFQUFFLGVBQWU7b0JBQy9CLGNBQWMsRUFBRSxlQUFlO2lCQUNoQzthQUNGOztrQkFFRSxTQUFTO21CQUFDLGtCQUFrQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7a0JBRS9DLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIE5nU3R5bGVJbnRlcmZhY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOelRvb2x0aXBEaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL3Rvb2x0aXAnO1xyXG5cclxuaW1wb3J0IHsgU2xpZGVyU2hvd1Rvb2x0aXAgfSBmcm9tICcuL256LXNsaWRlci1kZWZpbml0aW9ucyc7XHJcbmltcG9ydCB7IE56U2xpZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9uei1zbGlkZXIuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc2VsZWN0b3I6ICduei1zbGlkZXItaGFuZGxlJyxcclxuICBleHBvcnRBczogJ256U2xpZGVySGFuZGxlJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotc2xpZGVyLWhhbmRsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgaG9zdDoge1xyXG4gICAgJyhtb3VzZWVudGVyKSc6ICdlbnRlckhhbmRsZSgpJyxcclxuICAgICcobW91c2VsZWF2ZSknOiAnbGVhdmVIYW5kbGUoKSdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelNsaWRlckhhbmRsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICBAVmlld0NoaWxkKE56VG9vbHRpcERpcmVjdGl2ZSwgeyBzdGF0aWM6IGZhbHNlIH0pIHRvb2x0aXA6IE56VG9vbHRpcERpcmVjdGl2ZTtcclxuXHJcbiAgQElucHV0KCkgbnpWZXJ0aWNhbDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56T2Zmc2V0OiBudW1iZXI7XHJcbiAgQElucHV0KCkgbnpWYWx1ZTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIG56VG9vbHRpcFZpc2libGU6IFNsaWRlclNob3dUb29sdGlwID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIG56VG9vbHRpcFBsYWNlbWVudDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56VGlwRm9ybWF0dGVyOiAodmFsdWU6IG51bWJlcikgPT4gc3RyaW5nO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICB0b29sdGlwVGl0bGU6IHN0cmluZztcclxuICBzdHlsZTogTmdTdHlsZUludGVyZmFjZSA9IHt9O1xyXG5cclxuICBwcml2YXRlIGhvdmVyc18gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2xpZGVyQ29tcG9uZW50OiBOelNsaWRlckNvbXBvbmVudCwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBjb25zdCB7IG56T2Zmc2V0LCBuelZhbHVlLCBuekFjdGl2ZSwgbnpUb29sdGlwVmlzaWJsZSB9ID0gY2hhbmdlcztcclxuXHJcbiAgICBpZiAobnpPZmZzZXQpIHtcclxuICAgICAgdGhpcy51cGRhdGVTdHlsZSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKG56VmFsdWUpIHtcclxuICAgICAgdGhpcy51cGRhdGVUb29sdGlwVGl0bGUoKTtcclxuICAgICAgdGhpcy51cGRhdGVUb29sdGlwUG9zaXRpb24oKTtcclxuICAgIH1cclxuICAgIGlmIChuekFjdGl2ZSkge1xyXG4gICAgICBpZiAobnpBY3RpdmUuY3VycmVudFZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy50b2dnbGVUb29sdGlwKHRydWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudG9nZ2xlVG9vbHRpcChmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChuelRvb2x0aXBWaXNpYmxlICYmIG56VG9vbHRpcFZpc2libGUuY3VycmVudFZhbHVlID09PSAnYWx3YXlzJykge1xyXG4gICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMudG9nZ2xlVG9vbHRpcCh0cnVlLCB0cnVlKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuaG92ZXJzXy51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgZW50ZXJIYW5kbGUgPSAoKSA9PiB7XHJcbiAgICBpZiAoIXRoaXMuc2xpZGVyQ29tcG9uZW50LmlzRHJhZ2dpbmcpIHtcclxuICAgICAgdGhpcy50b2dnbGVUb29sdGlwKHRydWUpO1xyXG4gICAgICB0aGlzLnVwZGF0ZVRvb2x0aXBQb3NpdGlvbigpO1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgbGVhdmVIYW5kbGUgPSAoKSA9PiB7XHJcbiAgICBpZiAoIXRoaXMuc2xpZGVyQ29tcG9uZW50LmlzRHJhZ2dpbmcpIHtcclxuICAgICAgdGhpcy50b2dnbGVUb29sdGlwKGZhbHNlKTtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgdG9nZ2xlVG9vbHRpcChzaG93OiBib29sZWFuLCBmb3JjZTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICBpZiAoIWZvcmNlICYmICh0aGlzLm56VG9vbHRpcFZpc2libGUgIT09ICdkZWZhdWx0JyB8fCAhdGhpcy50b29sdGlwKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNob3cpIHtcclxuICAgICAgdGhpcy50b29sdGlwLnNob3coKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudG9vbHRpcC5oaWRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZVRvb2x0aXBUaXRsZSgpOiB2b2lkIHtcclxuICAgIHRoaXMudG9vbHRpcFRpdGxlID0gdGhpcy5uelRpcEZvcm1hdHRlciA/IHRoaXMubnpUaXBGb3JtYXR0ZXIodGhpcy5uelZhbHVlKSA6IGAke3RoaXMubnpWYWx1ZX1gO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVUb29sdGlwUG9zaXRpb24oKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy50b29sdGlwKSB7XHJcbiAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy50b29sdGlwLnVwZGF0ZVBvc2l0aW9uKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVTdHlsZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuc3R5bGVbdGhpcy5uelZlcnRpY2FsID8gJ2JvdHRvbScgOiAnbGVmdCddID0gYCR7dGhpcy5uek9mZnNldH0lYDtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2XHJcbiAgbnotdG9vbHRpcFxyXG4gICpuZ0lmPVwibnpUaXBGb3JtYXR0ZXIgIT09IG51bGwgJiYgbnpUb29sdGlwVmlzaWJsZSAhPT0gJ25ldmVyJ1wiXHJcbiAgY2xhc3M9XCJhbnQtc2xpZGVyLWhhbmRsZVwiXHJcbiAgW25nU3R5bGVdPVwic3R5bGVcIlxyXG4gIFtuelRpdGxlXT1cInRvb2x0aXBUaXRsZVwiXHJcbiAgW256VHJpZ2dlcl09XCJudWxsXCJcclxuICBbbnpQbGFjZW1lbnRdPVwibnpUb29sdGlwUGxhY2VtZW50XCJcclxuPjwvZGl2PlxyXG48ZGl2XHJcbiAgKm5nSWY9XCJuelRpcEZvcm1hdHRlciA9PT0gbnVsbCB8fCBuelRvb2x0aXBWaXNpYmxlID09PSAnbmV2ZXInXCJcclxuICBjbGFzcz1cImFudC1zbGlkZXItaGFuZGxlXCJcclxuICBbbmdTdHlsZV09XCJzdHlsZVwiXHJcbj48L2Rpdj5cclxuIl19