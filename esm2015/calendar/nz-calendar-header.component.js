/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { CandyDate } from 'ng-zorro-antd/core';
import { DateHelperService, NzI18nService as I18n } from 'ng-zorro-antd/i18n';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/i18n";
import * as i2 from "ng-zorro-antd/select";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/common";
import * as i5 from "ng-zorro-antd/radio";
function NzCalendarHeaderComponent_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nz-option", 6);
} if (rf & 2) {
    const year_r1996 = ctx.$implicit;
    i0.ɵɵproperty("nzLabel", year_r1996.label)("nzValue", year_r1996.value);
} }
function NzCalendarHeaderComponent_nz_select_2_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nz-option", 6);
} if (rf & 2) {
    const month_r1998 = ctx.$implicit;
    i0.ɵɵproperty("nzLabel", month_r1998.label)("nzValue", month_r1998.value);
} }
function NzCalendarHeaderComponent_nz_select_2_Template(rf, ctx) { if (rf & 1) {
    const _r2000 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nz-select", 7);
    i0.ɵɵlistener("ngModelChange", function NzCalendarHeaderComponent_nz_select_2_Template_nz_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r2000); const ctx_r1999 = i0.ɵɵnextContext(); return ctx_r1999.monthChange.emit($event); });
    i0.ɵɵtemplate(1, NzCalendarHeaderComponent_nz_select_2_nz_option_1_Template, 1, 2, "nz-option", 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1995 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nzSize", ctx_r1995.size)("nzDropdownMatchSelectWidth", false)("ngModel", ctx_r1995.activeMonth);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1995.months);
} }
export class NzCalendarHeaderComponent {
    constructor(i18n, dateHelper) {
        this.i18n = i18n;
        this.dateHelper = dateHelper;
        this.mode = 'month';
        this.fullscreen = true;
        this.modeChange = new EventEmitter();
        this.activeDate = new CandyDate();
        this.yearChange = new EventEmitter();
        this.monthChange = new EventEmitter();
        // @Output() readonly valueChange: EventEmitter<CandyDate> = new EventEmitter();
        this.yearOffset = 10;
        this.yearTotal = 20;
    }
    get activeYear() {
        return this.activeDate.getYear();
    }
    get activeMonth() {
        return this.activeDate.getMonth();
    }
    get size() {
        return this.fullscreen ? 'default' : 'small';
    }
    get yearTypeText() {
        return this.i18n.getLocale().Calendar.year;
    }
    get monthTypeText() {
        return this.i18n.getLocale().Calendar.month;
    }
    ngOnInit() {
        this.setUpYears();
        this.setUpMonths();
    }
    updateYear(year) {
        this.yearChange.emit(year);
        this.setUpYears(year);
    }
    setUpYears(year) {
        const start = (year || this.activeYear) - this.yearOffset;
        const end = start + this.yearTotal;
        this.years = [];
        for (let i = start; i < end; i++) {
            this.years.push({ label: `${i}`, value: i });
        }
    }
    setUpMonths() {
        this.months = [];
        for (let i = 0; i < 12; i++) {
            const dateInMonth = this.activeDate.setMonth(i);
            const monthText = this.dateHelper.format(dateInMonth.nativeDate, 'MMM');
            this.months.push({ label: monthText, value: i });
        }
    }
}
/** @nocollapse */ NzCalendarHeaderComponent.ɵfac = function NzCalendarHeaderComponent_Factory(t) { return new (t || NzCalendarHeaderComponent)(i0.ɵɵdirectiveInject(i1.NzI18nService), i0.ɵɵdirectiveInject(i1.DateHelperService)); };
/** @nocollapse */ NzCalendarHeaderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzCalendarHeaderComponent, selectors: [["nz-calendar-header"]], hostBindings: function NzCalendarHeaderComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        i0.ɵɵallocHostVars(2);
    } if (rf & 2) {
        i0.ɵɵstyleProp("display", "block");
        i0.ɵɵclassProp("ant-fullcalendar-header", true);
    } }, inputs: { mode: "mode", fullscreen: "fullscreen", activeDate: "activeDate" }, outputs: { modeChange: "modeChange", yearChange: "yearChange", monthChange: "monthChange" }, exportAs: ["nzCalendarHeader"], decls: 8, vars: 9, consts: [[1, "ant-fullcalendar-year-select", 3, "nzSize", "nzDropdownMatchSelectWidth", "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["class", "ant-fullcalendar-month-select", 3, "nzSize", "nzDropdownMatchSelectWidth", "ngModel", "ngModelChange", 4, "ngIf"], [3, "ngModel", "nzSize", "ngModelChange"], ["nz-radio-button", "", "nzValue", "month"], ["nz-radio-button", "", "nzValue", "year"], [3, "nzLabel", "nzValue"], [1, "ant-fullcalendar-month-select", 3, "nzSize", "nzDropdownMatchSelectWidth", "ngModel", "ngModelChange"]], template: function NzCalendarHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "nz-select", 0);
        i0.ɵɵlistener("ngModelChange", function NzCalendarHeaderComponent_Template_nz_select_ngModelChange_0_listener($event) { return ctx.updateYear($event); });
        i0.ɵɵtemplate(1, NzCalendarHeaderComponent_nz_option_1_Template, 1, 2, "nz-option", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(2, NzCalendarHeaderComponent_nz_select_2_Template, 2, 4, "nz-select", 2);
        i0.ɵɵelementStart(3, "nz-radio-group", 3);
        i0.ɵɵlistener("ngModelChange", function NzCalendarHeaderComponent_Template_nz_radio_group_ngModelChange_3_listener($event) { return ctx.mode = $event; })("ngModelChange", function NzCalendarHeaderComponent_Template_nz_radio_group_ngModelChange_3_listener($event) { return ctx.modeChange.emit($event); });
        i0.ɵɵelementStart(4, "label", 4);
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "label", 5);
        i0.ɵɵtext(7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("nzSize", ctx.size)("nzDropdownMatchSelectWidth", false)("ngModel", ctx.activeYear);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.years);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.mode === "month");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.mode)("nzSize", ctx.size);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.monthTypeText);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.yearTypeText);
    } }, directives: [i2.NzSelectComponent, i3.NgControlStatus, i3.NgModel, i4.NgForOf, i4.NgIf, i5.NzRadioGroupComponent, i5.NzRadioButtonComponent, i2.NzOptionComponent], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzCalendarHeaderComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'nz-calendar-header',
                exportAs: 'nzCalendarHeader',
                templateUrl: './nz-calendar-header.component.html',
                host: {
                    '[style.display]': `'block'`,
                    '[class.ant-fullcalendar-header]': `true`
                }
            }]
    }], function () { return [{ type: i1.NzI18nService }, { type: i1.DateHelperService }]; }, { mode: [{
            type: Input
        }], fullscreen: [{
            type: Input
        }], modeChange: [{
            type: Output
        }], activeDate: [{
            type: Input
        }], yearChange: [{
            type: Output
        }], monthChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FsZW5kYXItaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY2FsZW5kYXIvIiwic291cmNlcyI6WyJuei1jYWxlbmRhci1oZWFkZXIuY29tcG9uZW50LnRzIiwibnotY2FsZW5kYXItaGVhZGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0gsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxhQUFhLElBQUksSUFBSSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7O0lDSDVFLCtCQUFnRzs7O0lBQTFELDBDQUFzQiw2QkFBQTs7O0lBVzVELCtCQUlhOzs7SUFGWCwyQ0FBdUIsOEJBQUE7Ozs7SUFWM0Isb0NBUUU7SUFGQSwyTUFBaUIsa0NBQXdCLElBQUM7SUFFMUMsa0dBSUM7SUFDSCxpQkFBWTs7O0lBVlYsdUNBQWUscUNBQUEsa0NBQUE7SUFNYixlQUE0QjtJQUE1QiwwQ0FBNEI7O0FESWhDLE1BQU0sT0FBTyx5QkFBeUI7SUFxQ3BDLFlBQW9CLElBQVUsRUFBVSxVQUE2QjtRQUFqRCxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFwQzVELFNBQUksR0FBcUIsT0FBTyxDQUFDO1FBQ2pDLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFFakIsZUFBVSxHQUFtQyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTFFLGVBQVUsR0FBYyxJQUFJLFNBQVMsRUFBRSxDQUFDO1FBRTlCLGVBQVUsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN0RCxnQkFBVyxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzFFLGdGQUFnRjtRQUVoRixlQUFVLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLGNBQVMsR0FBVyxFQUFFLENBQUM7SUF3QmlELENBQUM7SUFwQnpFLElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO0lBQy9DLENBQUM7SUFFRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztJQUM3QyxDQUFDO0lBRUQsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7SUFDOUMsQ0FBQztJQUlELFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBWTtRQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFTyxVQUFVLENBQUMsSUFBYTtRQUM5QixNQUFNLEtBQUssR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMxRCxNQUFNLEdBQUcsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUVuQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixLQUFLLElBQUksQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDOUM7SUFDSCxDQUFDO0lBRU8sV0FBVztRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUVqQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzNCLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hELE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDeEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2xEO0lBQ0gsQ0FBQzs7a0dBbkVVLHlCQUF5Qjs4REFBekIseUJBQXlCOzs7Ozs7UUN2QnRDLG9DQU9FO1FBRkEsK0hBQWlCLHNCQUFrQixJQUFDO1FBRXBDLHNGQUFvRjtRQUN0RixpQkFBWTtRQUVaLHNGQVFFO1FBT0YseUNBQ0U7UUFEYyx5SkFBa0IsdUhBQWtCLDJCQUF1QixJQUF6QztRQUNoQyxnQ0FBdUM7UUFBQSxZQUFtQjtRQUFBLGlCQUFRO1FBQ2xFLGdDQUFzQztRQUFBLFlBQWtCO1FBQUEsaUJBQVE7UUFDbEUsaUJBQWlCOztRQTFCZixpQ0FBZSxxQ0FBQSwyQkFBQTtRQUtKLGVBQTBCO1FBQTFCLG1DQUEwQjtRQUlyQyxlQUF3QjtRQUF4QiwyQ0FBd0I7UUFjVixlQUFrQjtRQUFsQixrQ0FBa0Isb0JBQUE7UUFDTyxlQUFtQjtRQUFuQix1Q0FBbUI7UUFDcEIsZUFBa0I7UUFBbEIsc0NBQWtCOztrRERKN0MseUJBQXlCO2NBWHJDLFNBQVM7ZUFBQztnQkFDVCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFdBQVcsRUFBRSxxQ0FBcUM7Z0JBQ2xELElBQUksRUFBRTtvQkFDSixpQkFBaUIsRUFBRSxTQUFTO29CQUM1QixpQ0FBaUMsRUFBRSxNQUFNO2lCQUMxQzthQUNGOztrQkFFRSxLQUFLOztrQkFDTCxLQUFLOztrQkFFTCxNQUFNOztrQkFFTixLQUFLOztrQkFFTCxNQUFNOztrQkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2FuZHlEYXRlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgRGF0ZUhlbHBlclNlcnZpY2UsIE56STE4blNlcnZpY2UgYXMgSTE4biB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHNlbGVjdG9yOiAnbnotY2FsZW5kYXItaGVhZGVyJyxcclxuICBleHBvcnRBczogJ256Q2FsZW5kYXJIZWFkZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1jYWxlbmRhci1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbc3R5bGUuZGlzcGxheV0nOiBgJ2Jsb2NrJ2AsXHJcbiAgICAnW2NsYXNzLmFudC1mdWxsY2FsZW5kYXItaGVhZGVyXSc6IGB0cnVlYFxyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56Q2FsZW5kYXJIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIG1vZGU6ICdtb250aCcgfCAneWVhcicgPSAnbW9udGgnO1xyXG4gIEBJbnB1dCgpIGZ1bGxzY3JlZW46IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbW9kZUNoYW5nZTogRXZlbnRFbWl0dGVyPCdtb250aCcgfCAneWVhcic+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBASW5wdXQoKSBhY3RpdmVEYXRlOiBDYW5keURhdGUgPSBuZXcgQ2FuZHlEYXRlKCk7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSB5ZWFyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbW9udGhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIC8vIEBPdXRwdXQoKSByZWFkb25seSB2YWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPENhbmR5RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIHllYXJPZmZzZXQ6IG51bWJlciA9IDEwO1xyXG4gIHllYXJUb3RhbDogbnVtYmVyID0gMjA7XHJcbiAgeWVhcnM6IEFycmF5PHsgbGFiZWw6IHN0cmluZzsgdmFsdWU6IG51bWJlciB9PjtcclxuICBtb250aHM6IEFycmF5PHsgbGFiZWw6IHN0cmluZzsgdmFsdWU6IG51bWJlciB9PjtcclxuXHJcbiAgZ2V0IGFjdGl2ZVllYXIoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmFjdGl2ZURhdGUuZ2V0WWVhcigpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGFjdGl2ZU1vbnRoKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVEYXRlLmdldE1vbnRoKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgc2l6ZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuZnVsbHNjcmVlbiA/ICdkZWZhdWx0JyA6ICdzbWFsbCc7XHJcbiAgfVxyXG5cclxuICBnZXQgeWVhclR5cGVUZXh0KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5pMThuLmdldExvY2FsZSgpLkNhbGVuZGFyLnllYXI7XHJcbiAgfVxyXG5cclxuICBnZXQgbW9udGhUeXBlVGV4dCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuaTE4bi5nZXRMb2NhbGUoKS5DYWxlbmRhci5tb250aDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaTE4bjogSTE4biwgcHJpdmF0ZSBkYXRlSGVscGVyOiBEYXRlSGVscGVyU2VydmljZSkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldFVwWWVhcnMoKTtcclxuICAgIHRoaXMuc2V0VXBNb250aHMoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVllYXIoeWVhcjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLnllYXJDaGFuZ2UuZW1pdCh5ZWFyKTtcclxuICAgIHRoaXMuc2V0VXBZZWFycyh5ZWFyKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0VXBZZWFycyh5ZWFyPzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBjb25zdCBzdGFydCA9ICh5ZWFyIHx8IHRoaXMuYWN0aXZlWWVhcikgLSB0aGlzLnllYXJPZmZzZXQ7XHJcbiAgICBjb25zdCBlbmQgPSBzdGFydCArIHRoaXMueWVhclRvdGFsO1xyXG5cclxuICAgIHRoaXMueWVhcnMgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XHJcbiAgICAgIHRoaXMueWVhcnMucHVzaCh7IGxhYmVsOiBgJHtpfWAsIHZhbHVlOiBpIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRVcE1vbnRocygpOiB2b2lkIHtcclxuICAgIHRoaXMubW9udGhzID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMjsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGRhdGVJbk1vbnRoID0gdGhpcy5hY3RpdmVEYXRlLnNldE1vbnRoKGkpO1xyXG4gICAgICBjb25zdCBtb250aFRleHQgPSB0aGlzLmRhdGVIZWxwZXIuZm9ybWF0KGRhdGVJbk1vbnRoLm5hdGl2ZURhdGUsICdNTU0nKTtcclxuICAgICAgdGhpcy5tb250aHMucHVzaCh7IGxhYmVsOiBtb250aFRleHQsIHZhbHVlOiBpIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8bnotc2VsZWN0XHJcbiAgY2xhc3M9XCJhbnQtZnVsbGNhbGVuZGFyLXllYXItc2VsZWN0XCJcclxuICBbbnpTaXplXT1cInNpemVcIlxyXG4gIFtuekRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aF09XCJmYWxzZVwiXHJcbiAgW25nTW9kZWxdPVwiYWN0aXZlWWVhclwiXHJcbiAgKG5nTW9kZWxDaGFuZ2UpPVwidXBkYXRlWWVhcigkZXZlbnQpXCJcclxuPlxyXG4gIDxuei1vcHRpb24gKm5nRm9yPVwibGV0IHllYXIgb2YgeWVhcnNcIiBbbnpMYWJlbF09XCJ5ZWFyLmxhYmVsXCIgW256VmFsdWVdPVwieWVhci52YWx1ZVwiPjwvbnotb3B0aW9uPlxyXG48L256LXNlbGVjdD5cclxuXHJcbjxuei1zZWxlY3RcclxuICAqbmdJZj1cIm1vZGUgPT09ICdtb250aCdcIlxyXG4gIGNsYXNzPVwiYW50LWZ1bGxjYWxlbmRhci1tb250aC1zZWxlY3RcIlxyXG4gIFtuelNpemVdPVwic2l6ZVwiXHJcbiAgW256RHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoXT1cImZhbHNlXCJcclxuICBbbmdNb2RlbF09XCJhY3RpdmVNb250aFwiXHJcbiAgKG5nTW9kZWxDaGFuZ2UpPVwibW9udGhDaGFuZ2UuZW1pdCgkZXZlbnQpXCJcclxuPlxyXG4gIDxuei1vcHRpb25cclxuICAgICpuZ0Zvcj1cImxldCBtb250aCBvZiBtb250aHNcIlxyXG4gICAgW256TGFiZWxdPVwibW9udGgubGFiZWxcIlxyXG4gICAgW256VmFsdWVdPVwibW9udGgudmFsdWVcIlxyXG4gID48L256LW9wdGlvbj5cclxuPC9uei1zZWxlY3Q+XHJcblxyXG48bnotcmFkaW8tZ3JvdXAgWyhuZ01vZGVsKV09XCJtb2RlXCIgKG5nTW9kZWxDaGFuZ2UpPVwibW9kZUNoYW5nZS5lbWl0KCRldmVudClcIiBbbnpTaXplXT1cInNpemVcIj5cclxuICA8bGFiZWwgbnotcmFkaW8tYnV0dG9uIG56VmFsdWU9XCJtb250aFwiPnt7IG1vbnRoVHlwZVRleHQgfX08L2xhYmVsPlxyXG4gIDxsYWJlbCBuei1yYWRpby1idXR0b24gbnpWYWx1ZT1cInllYXJcIj57eyB5ZWFyVHlwZVRleHQgfX08L2xhYmVsPlxyXG48L256LXJhZGlvLWdyb3VwPlxyXG4iXX0=