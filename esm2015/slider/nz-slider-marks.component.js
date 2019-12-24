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
import { isConfigAObject } from './nz-slider-definitions';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function NzSliderMarksComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 2);
} if (rf & 2) {
    const attr_r748 = ctx.$implicit;
    i0.ɵɵclassProp("ant-slider-mark-active", attr_r748.active);
    i0.ɵɵproperty("ngStyle", attr_r748.style)("innerHTML", attr_r748.label, i0.ɵɵsanitizeHtml);
} }
export class NzSliderMarksComponent {
    constructor() {
        this.nzLowerBound = null;
        this.nzUpperBound = null;
        this.nzVertical = false;
        this.nzIncluded = false;
    }
    ngOnChanges(changes) {
        if (changes.nzMarksArray) {
            this.buildMarks();
        }
        if (changes.nzMarksArray || changes.nzLowerBound || changes.nzUpperBound) {
            this.togglePointActive();
        }
    }
    trackById(_index, mark) {
        return mark.value;
    }
    buildMarks() {
        const range = this.nzMax - this.nzMin;
        this.marks = this.nzMarksArray.map(mark => {
            const { value, offset, config } = mark;
            const style = this.getMarkStyles(value, range, config);
            const label = isConfigAObject(config) ? config.label : config;
            return {
                label,
                offset,
                style,
                value,
                config,
                active: false
            };
        });
    }
    getMarkStyles(value, range, config) {
        let style;
        if (this.nzVertical) {
            style = {
                marginBottom: '-50%',
                bottom: `${((value - this.nzMin) / range) * 100}%`
            };
        }
        else {
            style = {
                transform: `translate3d(-50%, 0, 0)`,
                left: `${((value - this.nzMin) / range) * 100}%`
            };
        }
        if (isConfigAObject(config) && config.style) {
            style = Object.assign(Object.assign({}, style), config.style);
        }
        return style;
    }
    togglePointActive() {
        if (this.marks && this.nzLowerBound !== null && this.nzUpperBound !== null) {
            this.marks.forEach(mark => {
                const value = mark.value;
                const isActive = (!this.nzIncluded && value === this.nzUpperBound) ||
                    (this.nzIncluded && value <= this.nzUpperBound && value >= this.nzLowerBound);
                mark.active = isActive;
            });
        }
    }
}
/** @nocollapse */ NzSliderMarksComponent.ɵfac = function NzSliderMarksComponent_Factory(t) { return new (t || NzSliderMarksComponent)(); };
/** @nocollapse */ NzSliderMarksComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzSliderMarksComponent, selectors: [["nz-slider-marks"]], inputs: { nzLowerBound: "nzLowerBound", nzUpperBound: "nzUpperBound", nzMarksArray: "nzMarksArray", nzMin: "nzMin", nzMax: "nzMax", nzVertical: "nzVertical", nzIncluded: "nzIncluded" }, exportAs: ["nzSliderMarks"], features: [i0.ɵɵNgOnChangesFeature()], decls: 2, vars: 2, consts: [[1, "ant-slider-mark"], ["class", "ant-slider-mark-text", 3, "ant-slider-mark-active", "ngStyle", "innerHTML", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ant-slider-mark-text", 3, "ngStyle", "innerHTML"]], template: function NzSliderMarksComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, NzSliderMarksComponent_span_1_Template, 1, 3, "span", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.marks)("ngForTrackBy", ctx.trackById);
    } }, directives: [i1.NgForOf, i1.NgStyle], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzSliderMarksComponent.prototype, "nzVertical", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzSliderMarksComponent.prototype, "nzIncluded", void 0);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzSliderMarksComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                selector: 'nz-slider-marks',
                exportAs: 'nzSliderMarks',
                templateUrl: './nz-slider-marks.component.html'
            }]
    }], null, { nzLowerBound: [{
            type: Input
        }], nzUpperBound: [{
            type: Input
        }], nzMarksArray: [{
            type: Input
        }], nzMin: [{
            type: Input
        }], nzMax: [{
            type: Input
        }], nzVertical: [{
            type: Input
        }], nzIncluded: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLW1hcmtzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc2xpZGVyLyIsInNvdXJjZXMiOlsibnotc2xpZGVyLW1hcmtzLmNvbXBvbmVudC50cyIsIm56LXNsaWRlci1tYXJrcy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZILE9BQU8sRUFBRSxZQUFZLEVBQW9CLE1BQU0sb0JBQW9CLENBQUM7QUFFcEUsT0FBTyxFQUErQixlQUFlLEVBQVEsTUFBTSx5QkFBeUIsQ0FBQzs7OztJQ1gzRiwwQkFPTzs7O0lBSkwsMERBQTRDO0lBQzVDLHlDQUFzQixpREFBQTs7QURpQjFCLE1BQU0sT0FBTyxzQkFBc0I7SUFSbkM7UUFTVyxpQkFBWSxHQUFrQixJQUFJLENBQUM7UUFDbkMsaUJBQVksR0FBa0IsSUFBSSxDQUFDO1FBSW5CLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsZUFBVSxHQUFHLEtBQUssQ0FBQztLQXNFN0M7SUFsRUMsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLFlBQVksRUFBRTtZQUN4QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkI7UUFDRCxJQUFJLE9BQU8sQ0FBQyxZQUFZLElBQUksT0FBTyxDQUFDLFlBQVksSUFBSSxPQUFPLENBQUMsWUFBWSxFQUFFO1lBQ3hFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztJQUVELFNBQVMsQ0FBQyxNQUFjLEVBQUUsSUFBbUI7UUFDM0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFFTyxVQUFVO1FBQ2hCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFB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Szs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgTmdTdHlsZUludGVyZmFjZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBEaXNwbGF5ZWRNYXJrLCBFeHRlbmRlZE1hcmssIGlzQ29uZmlnQU9iamVjdCwgTWFyayB9IGZyb20gJy4vbnotc2xpZGVyLWRlZmluaXRpb25zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgc2VsZWN0b3I6ICduei1zbGlkZXItbWFya3MnLFxyXG4gIGV4cG9ydEFzOiAnbnpTbGlkZXJNYXJrcycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXNsaWRlci1tYXJrcy5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE56U2xpZGVyTWFya3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIG56TG93ZXJCb3VuZDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgbnpVcHBlckJvdW5kOiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBuek1hcmtzQXJyYXk6IEV4dGVuZGVkTWFya1tdO1xyXG4gIEBJbnB1dCgpIG56TWluOiBudW1iZXI7XHJcbiAgQElucHV0KCkgbnpNYXg6IG51bWJlcjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpWZXJ0aWNhbCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekluY2x1ZGVkID0gZmFsc2U7XHJcblxyXG4gIG1hcmtzOiBEaXNwbGF5ZWRNYXJrW107XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLm56TWFya3NBcnJheSkge1xyXG4gICAgICB0aGlzLmJ1aWxkTWFya3MoKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLm56TWFya3NBcnJheSB8fCBjaGFuZ2VzLm56TG93ZXJCb3VuZCB8fCBjaGFuZ2VzLm56VXBwZXJCb3VuZCkge1xyXG4gICAgICB0aGlzLnRvZ2dsZVBvaW50QWN0aXZlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0cmFja0J5SWQoX2luZGV4OiBudW1iZXIsIG1hcms6IERpc3BsYXllZE1hcmspOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIG1hcmsudmFsdWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGJ1aWxkTWFya3MoKTogdm9pZCB7XHJcbiAgICBjb25zdCByYW5nZSA9IHRoaXMubnpNYXggLSB0aGlzLm56TWluO1xyXG5cclxuICAgIHRoaXMubWFya3MgPSB0aGlzLm56TWFya3NBcnJheS5tYXAobWFyayA9PiB7XHJcbiAgICAgIGNvbnN0IHsgdmFsdWUsIG9mZnNldCwgY29uZmlnIH0gPSBtYXJrO1xyXG4gICAgICBjb25zdCBzdHlsZSA9IHRoaXMuZ2V0TWFya1N0eWxlcyh2YWx1ZSwgcmFuZ2UsIGNvbmZpZyk7XHJcbiAgICAgIGNvbnN0IGxhYmVsID0gaXNDb25maWdBT2JqZWN0KGNvbmZpZykgPyBjb25maWcubGFiZWwgOiBjb25maWc7XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGxhYmVsLFxyXG4gICAgICAgIG9mZnNldCxcclxuICAgICAgICBzdHlsZSxcclxuICAgICAgICB2YWx1ZSxcclxuICAgICAgICBjb25maWcsXHJcbiAgICAgICAgYWN0aXZlOiBmYWxzZVxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE1hcmtTdHlsZXModmFsdWU6IG51bWJlciwgcmFuZ2U6IG51bWJlciwgY29uZmlnOiBNYXJrKTogTmdTdHlsZUludGVyZmFjZSB7XHJcbiAgICBsZXQgc3R5bGU7XHJcblxyXG4gICAgaWYgKHRoaXMubnpWZXJ0aWNhbCkge1xyXG4gICAgICBzdHlsZSA9IHtcclxuICAgICAgICBtYXJnaW5Cb3R0b206ICctNTAlJyxcclxuICAgICAgICBib3R0b206IGAkeygodmFsdWUgLSB0aGlzLm56TWluKSAvIHJhbmdlKSAqIDEwMH0lYFxyXG4gICAgICB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3R5bGUgPSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlM2QoLTUwJSwgMCwgMClgLFxyXG4gICAgICAgIGxlZnQ6IGAkeygodmFsdWUgLSB0aGlzLm56TWluKSAvIHJhbmdlKSAqIDEwMH0lYFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc0NvbmZpZ0FPYmplY3QoY29uZmlnKSAmJiBjb25maWcuc3R5bGUpIHtcclxuICAgICAgc3R5bGUgPSB7IC4uLnN0eWxlLCAuLi5jb25maWcuc3R5bGUgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3R5bGU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRvZ2dsZVBvaW50QWN0aXZlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubWFya3MgJiYgdGhpcy5uekxvd2VyQm91bmQgIT09IG51bGwgJiYgdGhpcy5uelVwcGVyQm91bmQgIT09IG51bGwpIHtcclxuICAgICAgdGhpcy5tYXJrcy5mb3JFYWNoKG1hcmsgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gbWFyay52YWx1ZTtcclxuICAgICAgICBjb25zdCBpc0FjdGl2ZSA9XHJcbiAgICAgICAgICAoIXRoaXMubnpJbmNsdWRlZCAmJiB2YWx1ZSA9PT0gdGhpcy5uelVwcGVyQm91bmQpIHx8XHJcbiAgICAgICAgICAodGhpcy5uekluY2x1ZGVkICYmIHZhbHVlIDw9IHRoaXMubnpVcHBlckJvdW5kISAmJiB2YWx1ZSA+PSB0aGlzLm56TG93ZXJCb3VuZCEpO1xyXG5cclxuICAgICAgICBtYXJrLmFjdGl2ZSA9IGlzQWN0aXZlO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImFudC1zbGlkZXItbWFya1wiPlxyXG4gIDxzcGFuXHJcbiAgICBjbGFzcz1cImFudC1zbGlkZXItbWFyay10ZXh0XCJcclxuICAgICpuZ0Zvcj1cImxldCBhdHRyIG9mIG1hcmtzOyB0cmFja0J5OiB0cmFja0J5SWRcIlxyXG4gICAgW2NsYXNzLmFudC1zbGlkZXItbWFyay1hY3RpdmVdPVwiYXR0ci5hY3RpdmVcIlxyXG4gICAgW25nU3R5bGVdPVwiYXR0ci5zdHlsZVwiXHJcbiAgICBbaW5uZXJIVE1MXT1cImF0dHIubGFiZWxcIlxyXG4gID5cclxuICA8L3NwYW4+XHJcbjwvZGl2PlxyXG4iXX0=