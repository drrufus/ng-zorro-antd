import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function NzSliderStepComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 2);
} if (rf & 2) {
    const mark_r750 = ctx.$implicit;
    i0.ɵɵclassProp("ant-slider-dot-active", mark_r750.active);
    i0.ɵɵproperty("ngStyle", mark_r750.style);
} }
export class NzSliderStepComponent {
    constructor() {
        this.nzLowerBound = null;
        this.nzUpperBound = null;
        this.nzVertical = false;
        this.nzIncluded = false;
    }
    ngOnChanges(changes) {
        if (changes.nzMarksArray) {
            this.buildSteps();
        }
        if (changes.nzMarksArray || changes.nzLowerBound || changes.nzUpperBound) {
            this.togglePointActive();
        }
    }
    trackById(_index, step) {
        return step.value;
    }
    buildSteps() {
        const orient = this.nzVertical ? 'bottom' : 'left';
        this.steps = this.nzMarksArray.map(mark => {
            const { value, offset, config } = mark;
            return {
                value,
                offset,
                config,
                active: false,
                style: {
                    [orient]: `${offset}%`
                }
            };
        });
    }
    togglePointActive() {
        if (this.steps && this.nzLowerBound !== null && this.nzUpperBound !== null) {
            this.steps.forEach(step => {
                const value = step.value;
                const isActive = (!this.nzIncluded && value === this.nzUpperBound) ||
                    (this.nzIncluded && value <= this.nzUpperBound && value >= this.nzLowerBound);
                step.active = isActive;
            });
        }
    }
}
/** @nocollapse */ NzSliderStepComponent.ɵfac = function NzSliderStepComponent_Factory(t) { return new (t || NzSliderStepComponent)(); };
/** @nocollapse */ NzSliderStepComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzSliderStepComponent, selectors: [["nz-slider-step"]], inputs: { nzLowerBound: "nzLowerBound", nzUpperBound: "nzUpperBound", nzMarksArray: "nzMarksArray", nzVertical: "nzVertical", nzIncluded: "nzIncluded" }, exportAs: ["nzSliderStep"], features: [i0.ɵɵNgOnChangesFeature()], decls: 2, vars: 2, consts: [[1, "ant-slider-step"], ["class", "ant-slider-dot", 3, "ant-slider-dot-active", "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ant-slider-dot", 3, "ngStyle"]], template: function NzSliderStepComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, NzSliderStepComponent_span_1_Template, 1, 2, "span", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.steps)("ngForTrackBy", ctx.trackById);
    } }, directives: [i1.NgForOf, i1.NgStyle], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzSliderStepComponent.prototype, "nzVertical", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzSliderStepComponent.prototype, "nzIncluded", void 0);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzSliderStepComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-slider-step',
                exportAs: 'nzSliderStep',
                preserveWhitespaces: false,
                templateUrl: './nz-slider-step.component.html'
            }]
    }], null, { nzLowerBound: [{
            type: Input
        }], nzUpperBound: [{
            type: Input
        }], nzMarksArray: [{
            type: Input
        }], nzVertical: [{
            type: Input
        }], nzIncluded: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLXN0ZXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9zbGlkZXIvIiwic291cmNlcyI6WyJuei1zbGlkZXItc3RlcC5jb21wb25lbnQudHMiLCJuei1zbGlkZXItc3RlcC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZILE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7OztJQ1RoRCwwQkFNTzs7O0lBSEwseURBQTJDO0lBQzNDLHlDQUFzQjs7QURpQjFCLE1BQU0sT0FBTyxxQkFBcUI7SUFSbEM7UUFTVyxpQkFBWSxHQUFrQixJQUFJLENBQUM7UUFDbkMsaUJBQVksR0FBa0IsSUFBSSxDQUFDO1FBRW5CLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsZUFBVSxHQUFHLEtBQUssQ0FBQztLQThDN0M7SUExQ0MsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLFlBQVksRUFBRTtZQUN4QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkI7UUFDRCxJQUFJLE9BQU8sQ0FBQyxZQUFZLElBQUksT0FBTyxDQUFDLFlBQVksSUFBSSxPQUFPLENBQUMsWUFBWSxFQUFFO1lBQ3hFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztJQUVELFNBQVMsQ0FBQyxNQUFjLEVBQUUsSUFBbUI7UUFDM0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFFTyxVQUFVO1FBQ2hCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBRW5ELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDeEMsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDO1lBRXZDLE9BQU87Z0JBQ0wsS0FBSztnQkFDTCxNQUFNO2dCQUNOLE1BQU07Z0JBQ04sTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsS0FBSyxFQUFFO29CQUNMLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxNQUFNLEdBQUc7aUJBQ3ZCO2FBQ0YsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLGlCQUFpQjtRQUN2QixJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxJQUFJLEVBQUU7WUFDMUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3hCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQ3pCLE1BQU0sUUFBUSxHQUNaLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsWUFBWSxDQUFDO29CQUNqRCxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxZQUFhLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxZQUFhLENBQUMsQ0FBQztnQkFDbEYsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7WUFDekIsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7OzBGQWxEVSxxQkFBcUI7MERBQXJCLHFCQUFxQjtRQ3RCbEMsOEJBQ0U7UUFBQSx3RUFNQTtRQUNGLGlCQUFNOztRQUxGLGVBQThDO1FBQTlDLG1DQUE4QywrQkFBQTs7QUR1QnZCO0lBQWYsWUFBWSxFQUFFOzt5REFBb0I7QUFDbkI7SUFBZixZQUFZLEVBQUU7O3lEQUFvQjtrREFMakMscUJBQXFCO2NBUmpDLFNBQVM7ZUFBQztnQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRSxjQUFjO2dCQUN4QixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixXQUFXLEVBQUUsaUNBQWlDO2FBQy9DOztrQkFFRSxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IERpc3BsYXllZFN0ZXAsIEV4dGVuZGVkTWFyayB9IGZyb20gJy4vbnotc2xpZGVyLWRlZmluaXRpb25zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc2VsZWN0b3I6ICduei1zbGlkZXItc3RlcCcsXHJcbiAgZXhwb3J0QXM6ICduelNsaWRlclN0ZXAnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1zbGlkZXItc3RlcC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE56U2xpZGVyU3RlcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgbnpMb3dlckJvdW5kOiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBuelVwcGVyQm91bmQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIG56TWFya3NBcnJheTogRXh0ZW5kZWRNYXJrW107XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56VmVydGljYWwgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpJbmNsdWRlZCA9IGZhbHNlO1xyXG5cclxuICBzdGVwczogRGlzcGxheWVkU3RlcFtdO1xyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5uek1hcmtzQXJyYXkpIHtcclxuICAgICAgdGhpcy5idWlsZFN0ZXBzKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5uek1hcmtzQXJyYXkgfHwgY2hhbmdlcy5uekxvd2VyQm91bmQgfHwgY2hhbmdlcy5uelVwcGVyQm91bmQpIHtcclxuICAgICAgdGhpcy50b2dnbGVQb2ludEFjdGl2ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdHJhY2tCeUlkKF9pbmRleDogbnVtYmVyLCBzdGVwOiBEaXNwbGF5ZWRTdGVwKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBzdGVwLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBidWlsZFN0ZXBzKCk6IHZvaWQge1xyXG4gICAgY29uc3Qgb3JpZW50ID0gdGhpcy5uelZlcnRpY2FsID8gJ2JvdHRvbScgOiAnbGVmdCc7XHJcblxyXG4gICAgdGhpcy5zdGVwcyA9IHRoaXMubnpNYXJrc0FycmF5Lm1hcChtYXJrID0+IHtcclxuICAgICAgY29uc3QgeyB2YWx1ZSwgb2Zmc2V0LCBjb25maWcgfSA9IG1hcms7XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHZhbHVlLFxyXG4gICAgICAgIG9mZnNldCxcclxuICAgICAgICBjb25maWcsXHJcbiAgICAgICAgYWN0aXZlOiBmYWxzZSxcclxuICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgW29yaWVudF06IGAke29mZnNldH0lYFxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0b2dnbGVQb2ludEFjdGl2ZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnN0ZXBzICYmIHRoaXMubnpMb3dlckJvdW5kICE9PSBudWxsICYmIHRoaXMubnpVcHBlckJvdW5kICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuc3RlcHMuZm9yRWFjaChzdGVwID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHN0ZXAudmFsdWU7XHJcbiAgICAgICAgY29uc3QgaXNBY3RpdmUgPVxyXG4gICAgICAgICAgKCF0aGlzLm56SW5jbHVkZWQgJiYgdmFsdWUgPT09IHRoaXMubnpVcHBlckJvdW5kKSB8fFxyXG4gICAgICAgICAgKHRoaXMubnpJbmNsdWRlZCAmJiB2YWx1ZSA8PSB0aGlzLm56VXBwZXJCb3VuZCEgJiYgdmFsdWUgPj0gdGhpcy5uekxvd2VyQm91bmQhKTtcclxuICAgICAgICBzdGVwLmFjdGl2ZSA9IGlzQWN0aXZlO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImFudC1zbGlkZXItc3RlcFwiPlxyXG4gIDxzcGFuXHJcbiAgICBjbGFzcz1cImFudC1zbGlkZXItZG90XCJcclxuICAgICpuZ0Zvcj1cImxldCBtYXJrIG9mIHN0ZXBzOyB0cmFja0J5OiB0cmFja0J5SWRcIlxyXG4gICAgW2NsYXNzLmFudC1zbGlkZXItZG90LWFjdGl2ZV09XCJtYXJrLmFjdGl2ZVwiXHJcbiAgICBbbmdTdHlsZV09XCJtYXJrLnN0eWxlXCJcclxuICA+XHJcbiAgPC9zcGFuPlxyXG48L2Rpdj5cclxuIl19