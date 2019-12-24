/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { CandyDate } from 'ng-zorro-antd/core';
import { DateHelperService } from 'ng-zorro-antd/i18n';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/i18n";
var _c0 = ["inputElement"];
var CalendarInputComponent = /** @class */ (function () {
    function CalendarInputComponent(dateHelper) {
        this.dateHelper = dateHelper;
        this.valueChange = new EventEmitter();
        this.prefixCls = 'ant-calendar';
        this.invalidInputClass = '';
    }
    CalendarInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.autoFocus) {
            setTimeout(function () { return _this.inputRef.nativeElement.focus(); });
        }
    };
    CalendarInputComponent.prototype.onInputKeyup = function (event, isEnter) {
        if (isEnter === void 0) { isEnter = false; }
        var date = this.checkValidInputDate(event);
        if (!date || (this.disabledDate && this.disabledDate(date.nativeDate))) {
            return;
        }
        this.value = date;
        this.valueChange.emit({ date: date, isEnter: isEnter });
    };
    CalendarInputComponent.prototype.toReadableInput = function (value) {
        return value ? this.dateHelper.format(value.nativeDate, this.format) : '';
    };
    CalendarInputComponent.prototype.checkValidInputDate = function (event) {
        var input = event.target.value;
        var date = new CandyDate(input);
        this.invalidInputClass = '';
        if (!date.isValid() || input !== this.toReadableInput(date)) {
            // Should also match the input format exactly
            this.invalidInputClass = this.prefixCls + "-input-invalid";
            return null;
        }
        return date;
    };
    /** @nocollapse */ CalendarInputComponent.ɵfac = function CalendarInputComponent_Factory(t) { return new (t || CalendarInputComponent)(i0.ɵɵdirectiveInject(i1.DateHelperService)); };
    /** @nocollapse */ CalendarInputComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CalendarInputComponent, selectors: [["calendar-input"]], viewQuery: function CalendarInputComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵstaticViewQuery(_c0, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputRef = _t.first);
        } }, inputs: { locale: "locale", format: "format", placeholder: "placeholder", disabledDate: "disabledDate", value: "value", autoFocus: "autoFocus" }, outputs: { valueChange: "valueChange" }, exportAs: ["calendarInput"], decls: 5, vars: 16, consts: [[3, "placeholder", "value", "input", "keyup.enter"], ["inputElement", ""], ["role", "button", 3, "title"]], template: function CalendarInputComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "div");
            i0.ɵɵelementStart(2, "input", 0, 1);
            i0.ɵɵlistener("input", function CalendarInputComponent_Template_input_input_2_listener($event) { return ctx.onInputKeyup($event); })("keyup.enter", function CalendarInputComponent_Template_input_keyup_enter_2_listener($event) { return ctx.onInputKeyup($event, true); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelement(4, "a", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-input-wrap");
            i0.ɵɵadvance(1);
            i0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-date-input-wrap");
            i0.ɵɵadvance(1);
            i0.ɵɵclassMapInterpolate2("", ctx.prefixCls, "-input ", ctx.invalidInputClass, "");
            i0.ɵɵpropertyInterpolate("placeholder", ctx.placeholder || ctx.locale.dateSelect);
            i0.ɵɵpropertyInterpolate("value", ctx.toReadableInput(ctx.value));
            i0.ɵɵadvance(2);
            i0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-clear-btn");
            i0.ɵɵpropertyInterpolate("title", ctx.locale.clear);
        } }, encapsulation: 2, changeDetection: 0 });
    return CalendarInputComponent;
}());
export { CalendarInputComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalendarInputComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'calendar-input',
                exportAs: 'calendarInput',
                templateUrl: 'calendar-input.component.html'
            }]
    }], function () { return [{ type: i1.DateHelperService }]; }, { locale: [{
            type: Input
        }], format: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], disabledDate: [{
            type: Input
        }], value: [{
            type: Input
        }], autoFocus: [{
            type: Input
        }], inputRef: [{
            type: ViewChild,
            args: ['inputElement', { static: true }]
        }], valueChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9kYXRlLXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9jYWxlbmRhci9jYWxlbmRhci1pbnB1dC5jb21wb25lbnQudHMiLCJsaWIvY2FsZW5kYXIvY2FsZW5kYXItaW5wdXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBMkIsTUFBTSxvQkFBb0IsQ0FBQzs7OztBQUVoRjtJQXVCRSxnQ0FBb0IsVUFBNkI7UUFBN0IsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFMOUIsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBeUMsQ0FBQztRQUUzRixjQUFTLEdBQVcsY0FBYyxDQUFDO1FBQ25DLHNCQUFpQixHQUFXLEVBQUUsQ0FBQztJQUVxQixDQUFDO0lBRXJELHlDQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixVQUFVLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxFQUFuQyxDQUFtQyxDQUFDLENBQUM7U0FDdkQ7SUFDSCxDQUFDO0lBRUQsNkNBQVksR0FBWixVQUFhLEtBQW9CLEVBQUUsT0FBd0I7UUFBeEIsd0JBQUEsRUFBQSxlQUF3QjtRQUN6RCxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFN0MsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRTtZQUN0RSxPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksTUFBQSxFQUFFLE9BQU8sU0FBQSxFQUFFLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsZ0RBQWUsR0FBZixVQUFnQixLQUFnQjtRQUM5QixPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM1RSxDQUFDO0lBRU8sb0RBQW1CLEdBQTNCLFVBQTRCLEtBQVk7UUFDdEMsSUFBTSxLQUFLLEdBQUksS0FBSyxDQUFDLE1BQTJCLENBQUMsS0FBSyxDQUFDO1FBQ3ZELElBQU0sSUFBSSxHQUFHLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWxDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMzRCw2Q0FBNkM7WUFDN0MsSUFBSSxDQUFDLGlCQUFpQixHQUFNLElBQUksQ0FBQyxTQUFTLG1CQUFnQixDQUFDO1lBQzNELE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Z0dBbERVLHNCQUFzQjsrREFBdEIsc0JBQXNCOzs7Ozs7WUMvQm5DLDJCQUNFO1lBQUEsMkJBQ0U7WUFBQSxtQ0FRRjtZQUpJLHdHQUFTLHdCQUFvQixJQUFDLHVHQUNmLHlCQUFxQixJQUFJLENBQUMsSUFEWDtZQUpoQyxpQkFRRjtZQUFBLGlCQUFNO1lBQ04sdUJBQWtGO1lBQ3BGLGlCQUFNOztZQVpELDJEQUFrQztZQUNoQyxlQUF1QztZQUF2QyxnRUFBdUM7WUFFeEMsZUFBcUQ7WUFBckQsa0ZBQXFEO1lBQ3JELGlGQUFvRDtZQUNwRCxpRUFBb0M7WUFNckMsZUFBaUM7WUFBakMsMERBQWlDO1lBQWUsbURBQTBCOztpQ0RYL0U7Q0FrRkMsQUEzREQsSUEyREM7U0FuRFksc0JBQXNCO2tEQUF0QixzQkFBc0I7Y0FSbEMsU0FBUztlQUFDO2dCQUNULGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsOENBQThDO2dCQUM5QyxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUUsZUFBZTtnQkFDekIsV0FBVyxFQUFFLCtCQUErQjthQUM3Qzs7a0JBRUUsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsU0FBUzttQkFBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztrQkFFMUMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IENhbmR5RGF0ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IERhdGVIZWxwZXJTZXJ2aWNlLCBOekNhbGVuZGFySTE4bkludGVyZmFjZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2NhbGVuZGFyLWlucHV0JyxcclxuICBleHBvcnRBczogJ2NhbGVuZGFySW5wdXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnY2FsZW5kYXItaW5wdXQuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYWxlbmRhcklucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBsb2NhbGU6IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlO1xyXG4gIEBJbnB1dCgpIGZvcm1hdDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZGlzYWJsZWREYXRlOiAoZDogRGF0ZSkgPT4gYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KCkgdmFsdWU6IENhbmR5RGF0ZTtcclxuICBASW5wdXQoKSBhdXRvRm9jdXM6IGJvb2xlYW47XHJcbiAgQFZpZXdDaGlsZCgnaW5wdXRFbGVtZW50JywgeyBzdGF0aWM6IHRydWUgfSkgaW5wdXRSZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8eyBkYXRlOiBDYW5keURhdGU7IGlzRW50ZXI6IGJvb2xlYW4gfT4oKTtcclxuXHJcbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW50LWNhbGVuZGFyJztcclxuICBpbnZhbGlkSW5wdXRDbGFzczogc3RyaW5nID0gJyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0ZUhlbHBlcjogRGF0ZUhlbHBlclNlcnZpY2UpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuYXV0b0ZvY3VzKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25JbnB1dEtleXVwKGV2ZW50OiBLZXlib2FyZEV2ZW50LCBpc0VudGVyOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgIGNvbnN0IGRhdGUgPSB0aGlzLmNoZWNrVmFsaWRJbnB1dERhdGUoZXZlbnQpO1xyXG5cclxuICAgIGlmICghZGF0ZSB8fCAodGhpcy5kaXNhYmxlZERhdGUgJiYgdGhpcy5kaXNhYmxlZERhdGUoZGF0ZS5uYXRpdmVEYXRlKSkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudmFsdWUgPSBkYXRlO1xyXG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHsgZGF0ZSwgaXNFbnRlciB9KTtcclxuICB9XHJcblxyXG4gIHRvUmVhZGFibGVJbnB1dCh2YWx1ZTogQ2FuZHlEYXRlKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB2YWx1ZSA/IHRoaXMuZGF0ZUhlbHBlci5mb3JtYXQodmFsdWUubmF0aXZlRGF0ZSwgdGhpcy5mb3JtYXQpIDogJyc7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoZWNrVmFsaWRJbnB1dERhdGUoZXZlbnQ6IEV2ZW50KTogQ2FuZHlEYXRlIHwgbnVsbCB7XHJcbiAgICBjb25zdCBpbnB1dCA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XHJcbiAgICBjb25zdCBkYXRlID0gbmV3IENhbmR5RGF0ZShpbnB1dCk7XHJcblxyXG4gICAgdGhpcy5pbnZhbGlkSW5wdXRDbGFzcyA9ICcnO1xyXG4gICAgaWYgKCFkYXRlLmlzVmFsaWQoKSB8fCBpbnB1dCAhPT0gdGhpcy50b1JlYWRhYmxlSW5wdXQoZGF0ZSkpIHtcclxuICAgICAgLy8gU2hvdWxkIGFsc28gbWF0Y2ggdGhlIGlucHV0IGZvcm1hdCBleGFjdGx5XHJcbiAgICAgIHRoaXMuaW52YWxpZElucHV0Q2xhc3MgPSBgJHt0aGlzLnByZWZpeENsc30taW5wdXQtaW52YWxpZGA7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRlO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWlucHV0LXdyYXBcIj5cclxuICA8ZGl2IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWRhdGUtaW5wdXQtd3JhcFwiPlxyXG4gICAgPGlucHV0XHJcbiAgICAgIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWlucHV0IHt7IGludmFsaWRJbnB1dENsYXNzIH19XCJcclxuICAgICAgcGxhY2Vob2xkZXI9XCJ7eyBwbGFjZWhvbGRlciB8fCBsb2NhbGUuZGF0ZVNlbGVjdCB9fVwiXHJcbiAgICAgIHZhbHVlPVwie3sgdG9SZWFkYWJsZUlucHV0KHZhbHVlKSB9fVwiXHJcbiAgICAgIChpbnB1dCk9XCJvbklucHV0S2V5dXAoJGV2ZW50KVwiXHJcbiAgICAgIChrZXl1cC5lbnRlcik9XCJvbklucHV0S2V5dXAoJGV2ZW50LCB0cnVlKVwiXHJcbiAgICAgICNpbnB1dEVsZW1lbnRcclxuICAgIC8+XHJcbiAgPC9kaXY+XHJcbiAgPGEgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tY2xlYXItYnRuXCIgcm9sZT1cImJ1dHRvblwiIHRpdGxlPVwie3sgbG9jYWxlLmNsZWFyIH19XCI+PC9hPlxyXG48L2Rpdj5cclxuIl19