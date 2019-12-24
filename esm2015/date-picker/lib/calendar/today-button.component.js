/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { CandyDate } from 'ng-zorro-antd/core';
import { DateHelperService } from 'ng-zorro-antd/i18n';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/i18n";
export class TodayButtonComponent {
    constructor(dateHelper) {
        this.dateHelper = dateHelper;
        this.hasTimePicker = false;
        this.clickToday = new EventEmitter();
        this.prefixCls = 'ant-calendar';
        this.isDisabled = false;
        this.now = new CandyDate();
    }
    ngOnChanges(changes) {
        if (changes.disabledDate) {
            this.isDisabled = this.disabledDate && this.disabledDate(this.now.nativeDate);
        }
        if (changes.locale) {
            // NOTE: Compat for DatePipe formatting rules
            let dateFormat = this.locale.dateFormat;
            if (this.dateHelper.relyOnDatePipe) {
                dateFormat = this.dateHelper.transCompatFormat(dateFormat);
            }
            this.title = this.dateHelper.format(this.now.nativeDate, dateFormat);
        }
    }
    onClickToday() {
        this.clickToday.emit(this.now.clone()); // To prevent the "now" being modified from outside, we use clone
    }
}
/** @nocollapse */ TodayButtonComponent.ɵfac = function TodayButtonComponent_Factory(t) { return new (t || TodayButtonComponent)(i0.ɵɵdirectiveInject(i1.DateHelperService)); };
/** @nocollapse */ TodayButtonComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TodayButtonComponent, selectors: [["today-button"]], inputs: { locale: "locale", hasTimePicker: "hasTimePicker", disabledDate: "disabledDate" }, outputs: { clickToday: "clickToday" }, exportAs: ["todayButton"], features: [i0.ɵɵNgOnChangesFeature()], decls: 2, vars: 6, consts: [["role", "button", 3, "title", "click"]], template: function TodayButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "a", 0);
        i0.ɵɵlistener("click", function TodayButtonComponent_Template_a_click_0_listener($event) { return ctx.isDisabled ? null : ctx.onClickToday(); });
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMapInterpolate2("", ctx.prefixCls, "-today-btn ", ctx.isDisabled ? ctx.prefixCls + "-today-btn-disabled" : "", "");
        i0.ɵɵpropertyInterpolate("title", ctx.title);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.hasTimePicker ? ctx.locale.now : ctx.locale.today, "\n");
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TodayButtonComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'today-button',
                exportAs: 'todayButton',
                templateUrl: 'today-button.component.html'
            }]
    }], function () { return [{ type: i1.DateHelperService }]; }, { locale: [{
            type: Input
        }], hasTimePicker: [{
            type: Input
        }], disabledDate: [{
            type: Input
        }], clickToday: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kYXktYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvY2FsZW5kYXIvdG9kYXktYnV0dG9uLmNvbXBvbmVudC50cyIsImxpYi9jYWxlbmRhci90b2RheS1idXR0b24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBRU4saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMvQyxPQUFPLEVBQXdCLGlCQUFpQixFQUEyQixNQUFNLG9CQUFvQixDQUFDOzs7QUFVdEcsTUFBTSxPQUFPLG9CQUFvQjtJQWEvQixZQUFvQixVQUE2QjtRQUE3QixlQUFVLEdBQVYsVUFBVSxDQUFtQjtRQVh4QyxrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUdyQixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUU5RCxjQUFTLEdBQVcsY0FBYyxDQUFDO1FBQ25DLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFHcEIsUUFBRyxHQUFjLElBQUksU0FBUyxFQUFFLENBQUM7SUFFVyxDQUFDO0lBRXJELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxZQUFZLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUMvRTtRQUNELElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUNsQiw2Q0FBNkM7WUFDN0MsSUFBSSxVQUFVLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7WUFDaEQsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRTtnQkFDbEMsVUFBVSxHQUFJLElBQUksQ0FBQyxVQUFtQyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ3RGO1lBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztTQUN0RTtJQUNILENBQUM7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsaUVBQWlFO0lBQzNHLENBQUM7O3dGQS9CVSxvQkFBb0I7eURBQXBCLG9CQUFvQjtRQzlCakMsNEJBTUU7UUFIQSxtSEFBc0IsSUFBSyxHQUFFLGtCQUFjLElBQUM7UUFHNUMsWUFDRjtRQUFBLGlCQUFJOztRQU5GLDRIQUEyRjtRQUczRiw0Q0FBbUI7UUFFbkIsZUFDRjtRQURFLHVGQUNGOztrRER1QmEsb0JBQW9CO2NBUmhDLFNBQVM7ZUFBQztnQkFDVCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLDhDQUE4QztnQkFDOUMsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixXQUFXLEVBQUUsNkJBQTZCO2FBQzNDOztrQkFFRSxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFFTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDYW5keURhdGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRlSGVscGVyQnlEYXRlUGlwZSwgRGF0ZUhlbHBlclNlcnZpY2UsIE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAndG9kYXktYnV0dG9uJyxcclxuICBleHBvcnRBczogJ3RvZGF5QnV0dG9uJyxcclxuICB0ZW1wbGF0ZVVybDogJ3RvZGF5LWJ1dHRvbi5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRvZGF5QnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBsb2NhbGU6IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlO1xyXG4gIEBJbnB1dCgpIGhhc1RpbWVQaWNrZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBkaXNhYmxlZERhdGU6IChkOiBEYXRlKSA9PiBib29sZWFuO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2xpY2tUb2RheSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpO1xyXG5cclxuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbnQtY2FsZW5kYXInO1xyXG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICB0aXRsZTogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIG5vdzogQ2FuZHlEYXRlID0gbmV3IENhbmR5RGF0ZSgpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGVIZWxwZXI6IERhdGVIZWxwZXJTZXJ2aWNlKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5kaXNhYmxlZERhdGUpIHtcclxuICAgICAgdGhpcy5pc0Rpc2FibGVkID0gdGhpcy5kaXNhYmxlZERhdGUgJiYgdGhpcy5kaXNhYmxlZERhdGUodGhpcy5ub3cubmF0aXZlRGF0ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5sb2NhbGUpIHtcclxuICAgICAgLy8gTk9URTogQ29tcGF0IGZvciBEYXRlUGlwZSBmb3JtYXR0aW5nIHJ1bGVzXHJcbiAgICAgIGxldCBkYXRlRm9ybWF0OiBzdHJpbmcgPSB0aGlzLmxvY2FsZS5kYXRlRm9ybWF0O1xyXG4gICAgICBpZiAodGhpcy5kYXRlSGVscGVyLnJlbHlPbkRhdGVQaXBlKSB7XHJcbiAgICAgICAgZGF0ZUZvcm1hdCA9ICh0aGlzLmRhdGVIZWxwZXIgYXMgRGF0ZUhlbHBlckJ5RGF0ZVBpcGUpLnRyYW5zQ29tcGF0Rm9ybWF0KGRhdGVGb3JtYXQpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudGl0bGUgPSB0aGlzLmRhdGVIZWxwZXIuZm9ybWF0KHRoaXMubm93Lm5hdGl2ZURhdGUsIGRhdGVGb3JtYXQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DbGlja1RvZGF5KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jbGlja1RvZGF5LmVtaXQodGhpcy5ub3cuY2xvbmUoKSk7IC8vIFRvIHByZXZlbnQgdGhlIFwibm93XCIgYmVpbmcgbW9kaWZpZWQgZnJvbSBvdXRzaWRlLCB3ZSB1c2UgY2xvbmVcclxuICB9XHJcbn1cclxuIiwiPGFcclxuICBjbGFzcz1cInt7IHByZWZpeENscyB9fS10b2RheS1idG4ge3sgaXNEaXNhYmxlZCA/IHByZWZpeENscyArICctdG9kYXktYnRuLWRpc2FibGVkJyA6ICcnIH19XCJcclxuICByb2xlPVwiYnV0dG9uXCJcclxuICAoY2xpY2spPVwiaXNEaXNhYmxlZCA/IG51bGwgOiBvbkNsaWNrVG9kYXkoKVwiXHJcbiAgdGl0bGU9XCJ7eyB0aXRsZSB9fVwiXHJcbj5cclxuICB7eyBoYXNUaW1lUGlja2VyID8gbG9jYWxlLm5vdyA6IGxvY2FsZS50b2RheSB9fVxyXG48L2E+XHJcbiJdfQ==