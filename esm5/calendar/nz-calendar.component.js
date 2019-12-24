import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, EventEmitter, forwardRef, HostBinding, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CandyDate, InputBoolean } from 'ng-zorro-antd/core';
import { NzDateCellDirective as DateCell, NzDateFullCellDirective as DateFullCell, NzMonthCellDirective as MonthCell, NzMonthFullCellDirective as MonthFullCell } from './nz-calendar-cells';
import * as i0 from "@angular/core";
import * as i1 from "./nz-calendar-header.component";
import * as i2 from "@angular/common";
import * as i3 from "./date-table.component";
import * as i4 from "./month-table.component";
function NzCalendarComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function NzCalendarComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    var _r2063 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "date-table", 4);
    i0.ɵɵlistener("valueChange", function NzCalendarComponent_ng_template_4_Template_date_table_valueChange_0_listener($event) { i0.ɵɵrestoreView(_r2063); var ctx_r2062 = i0.ɵɵnextContext(); return ctx_r2062.onDateSelect($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2059 = i0.ɵɵnextContext();
    i0.ɵɵproperty("prefixCls", ctx_r2059.prefixCls)("value", ctx_r2059.activeDate)("dateCellRender", ctx_r2059.dateCell)("dateFullCellRender", ctx_r2059.dateFullCell);
} }
function NzCalendarComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    var _r2065 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "month-table", 5);
    i0.ɵɵlistener("valueChange", function NzCalendarComponent_ng_template_6_Template_month_table_valueChange_0_listener($event) { i0.ɵɵrestoreView(_r2065); var ctx_r2064 = i0.ɵɵnextContext(); return ctx_r2064.onDateSelect($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2061 = i0.ɵɵnextContext();
    i0.ɵɵproperty("prefixCls", ctx_r2061.prefixCls)("value", ctx_r2061.activeDate)("monthCellRender", ctx_r2061.monthCell)("monthFullCellRender", ctx_r2061.monthFullCell);
} }
var NzCalendarComponent = /** @class */ (function () {
    function NzCalendarComponent(cdr) {
        this.cdr = cdr;
        this.activeDate = new CandyDate();
        this.prefixCls = 'ant-fullcalendar';
        this.onChangeFn = function () { };
        this.onTouchFn = function () { };
        this.nzMode = 'month';
        this.nzModeChange = new EventEmitter();
        this.nzPanelChange = new EventEmitter();
        this.nzSelectChange = new EventEmitter();
        this.nzValueChange = new EventEmitter();
        this.nzFullscreen = true;
    }
    Object.defineProperty(NzCalendarComponent.prototype, "nzValue", {
        set: function (value) {
            this.updateDate(new CandyDate(value), false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarComponent.prototype, "dateCell", {
        get: function () {
            return this.nzDateCell || this.nzDateCellChild;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarComponent.prototype, "dateFullCell", {
        get: function () {
            return this.nzDateFullCell || this.nzDateFullCellChild;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarComponent.prototype, "monthCell", {
        get: function () {
            return this.nzMonthCell || this.nzMonthCellChild;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarComponent.prototype, "monthFullCell", {
        get: function () {
            return this.nzMonthFullCell || this.nzMonthFullCellChild;
        },
        enumerable: true,
        configurable: true
    });
    NzCalendarComponent.prototype.onModeChange = function (mode) {
        this.nzModeChange.emit(mode);
        this.nzPanelChange.emit({ date: this.activeDate.nativeDate, mode: mode });
    };
    NzCalendarComponent.prototype.onYearSelect = function (year) {
        var date = this.activeDate.setYear(year);
        this.updateDate(date);
    };
    NzCalendarComponent.prototype.onMonthSelect = function (month) {
        var date = this.activeDate.setMonth(month);
        this.updateDate(date);
    };
    NzCalendarComponent.prototype.onDateSelect = function (date) {
        // Only activeDate is enough in calendar
        // this.value = date;
        this.updateDate(date);
    };
    NzCalendarComponent.prototype.writeValue = function (value) {
        this.updateDate(new CandyDate(value), false);
        this.cdr.markForCheck();
    };
    NzCalendarComponent.prototype.registerOnChange = function (fn) {
        this.onChangeFn = fn;
    };
    NzCalendarComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchFn = fn;
    };
    NzCalendarComponent.prototype.updateDate = function (date, touched) {
        if (touched === void 0) { touched = true; }
        this.activeDate = date;
        if (touched) {
            this.onChangeFn(date.nativeDate);
            this.onTouchFn();
            this.nzSelectChange.emit(date.nativeDate);
            this.nzValueChange.emit(date.nativeDate);
        }
    };
    /** @nocollapse */ NzCalendarComponent.ɵfac = function NzCalendarComponent_Factory(t) { return new (t || NzCalendarComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ NzCalendarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzCalendarComponent, selectors: [["nz-calendar"]], contentQueries: function NzCalendarComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, DateCell, true, TemplateRef);
            i0.ɵɵcontentQuery(dirIndex, DateFullCell, true, TemplateRef);
            i0.ɵɵcontentQuery(dirIndex, MonthCell, true, TemplateRef);
            i0.ɵɵcontentQuery(dirIndex, MonthFullCell, true, TemplateRef);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.nzDateCellChild = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.nzDateFullCellChild = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.nzMonthCellChild = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.nzMonthFullCellChild = _t.first);
        } }, hostBindings: function NzCalendarComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            i0.ɵɵallocHostVars(1);
        } if (rf & 2) {
            i0.ɵɵclassProp("ant-fullcalendar--fullscreen", ctx.nzFullscreen);
        } }, inputs: { nzMode: "nzMode", nzValue: "nzValue", nzDateCell: "nzDateCell", nzDateFullCell: "nzDateFullCell", nzMonthCell: "nzMonthCell", nzMonthFullCell: "nzMonthFullCell", nzFullscreen: "nzFullscreen" }, outputs: { nzModeChange: "nzModeChange", nzPanelChange: "nzPanelChange", nzSelectChange: "nzSelectChange", nzValueChange: "nzValueChange" }, exportAs: ["nzCalendar"], features: [i0.ɵɵProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef((function () { return NzCalendarComponent; })), multi: true }])], decls: 8, vars: 14, consts: [[3, "fullscreen", "activeDate", "mode", "modeChange", "yearChange", "monthChange"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["monthModeTable", ""], ["yearModeTable", ""], [3, "prefixCls", "value", "dateCellRender", "dateFullCellRender", "valueChange"], [3, "prefixCls", "value", "monthCellRender", "monthFullCellRender", "valueChange"]], template: function NzCalendarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "nz-calendar-header", 0);
            i0.ɵɵlistener("modeChange", function NzCalendarComponent_Template_nz_calendar_header_modeChange_0_listener($event) { return ctx.nzMode = $event; })("modeChange", function NzCalendarComponent_Template_nz_calendar_header_modeChange_0_listener($event) { return ctx.onModeChange($event); })("yearChange", function NzCalendarComponent_Template_nz_calendar_header_yearChange_0_listener($event) { return ctx.onYearSelect($event); })("monthChange", function NzCalendarComponent_Template_nz_calendar_header_monthChange_0_listener($event) { return ctx.onMonthSelect($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(1, "div");
            i0.ɵɵelementStart(2, "div");
            i0.ɵɵtemplate(3, NzCalendarComponent_ng_container_3_Template, 1, 0, "ng-container", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, NzCalendarComponent_ng_template_4_Template, 1, 4, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(6, NzCalendarComponent_ng_template_6_Template, 1, 4, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            var _r2058 = i0.ɵɵreference(5);
            var _r2060 = i0.ɵɵreference(7);
            i0.ɵɵproperty("fullscreen", ctx.nzFullscreen)("activeDate", ctx.activeDate)("mode", ctx.nzMode);
            i0.ɵɵadvance(1);
            i0.ɵɵclassMapInterpolate2("", ctx.prefixCls, " ", ctx.prefixCls, "-full");
            i0.ɵɵclassProp("ant-fullcalendar-fullscreen", ctx.nzFullscreen);
            i0.ɵɵadvance(1);
            i0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-calendar-body");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.nzMode === "month")("ngIfThen", _r2058)("ngIfElse", _r2060);
        } }, directives: [i1.NzCalendarHeaderComponent, i2.NgIf, i3.DateTableComponent, i4.MonthTableComponent], encapsulation: 2, changeDetection: 0 });
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzCalendarComponent.prototype, "nzFullscreen", void 0);
    return NzCalendarComponent;
}());
export { NzCalendarComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzCalendarComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'nz-calendar',
                exportAs: 'nzCalendar',
                templateUrl: './nz-calendar.component.html',
                providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef((function () { return NzCalendarComponent; })), multi: true }]
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { nzMode: [{
            type: Input
        }], nzModeChange: [{
            type: Output
        }], nzPanelChange: [{
            type: Output
        }], nzSelectChange: [{
            type: Output
        }], nzValue: [{
            type: Input
        }], nzValueChange: [{
            type: Output
        }], nzDateCell: [{
            type: Input
        }], nzDateCellChild: [{
            type: ContentChild,
            args: [DateCell, { static: false, read: TemplateRef }]
        }], nzDateFullCell: [{
            type: Input
        }], nzDateFullCellChild: [{
            type: ContentChild,
            args: [DateFullCell, { static: false, read: TemplateRef }]
        }], nzMonthCell: [{
            type: Input
        }], nzMonthCellChild: [{
            type: ContentChild,
            args: [MonthCell, { static: false, read: TemplateRef }]
        }], nzMonthFullCell: [{
            type: Input
        }], nzMonthFullCellChild: [{
            type: ContentChild,
            args: [MonthFullCell, { static: false, read: TemplateRef }]
        }], nzFullscreen: [{
            type: Input
        }, {
            type: HostBinding,
            args: ['class.ant-fullcalendar--fullscreen']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jYWxlbmRhci8iLCJzb3VyY2VzIjpbIm56LWNhbGVuZGFyLmNvbXBvbmVudC50cyIsIm56LWNhbGVuZGFyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFlBQVksRUFDWixVQUFVLEVBQ1YsV0FBVyxFQUNYLEtBQUssRUFDTCxNQUFNLEVBQ04sV0FBVyxFQUNYLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM3RCxPQUFPLEVBQ0wsbUJBQW1CLElBQUksUUFBUSxFQUMvQix1QkFBdUIsSUFBSSxZQUFZLEVBQ3ZDLG9CQUFvQixJQUFJLFNBQVMsRUFDakMsd0JBQXdCLElBQUksYUFBYSxFQUMxQyxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7O0lDZHpCLHdCQUVnQjs7OztJQUtsQixxQ0FNYztJQURaLG9PQUFvQztJQUNyQyxpQkFBYTs7O0lBTFosK0NBQXVCLCtCQUFBLHNDQUFBLDhDQUFBOzs7O0lBU3pCLHNDQU1lO0lBRGIscU9BQW9DO0lBQ3JDLGlCQUFjOzs7SUFMYiwrQ0FBdUIsK0JBQUEsd0NBQUEsZ0RBQUE7O0FEQzNCO0lBMkRFLDZCQUFvQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQWxEMUMsZUFBVSxHQUFjLElBQUksU0FBUyxFQUFFLENBQUM7UUFDeEMsY0FBUyxHQUFXLGtCQUFrQixDQUFDO1FBRS9CLGVBQVUsR0FBeUIsY0FBTyxDQUFDLENBQUM7UUFDNUMsY0FBUyxHQUFlLGNB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dkIsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUMsY0FBTSxPQUFBLG1CQUFtQixFQUFuQixDQUFtQixFQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDO2FBQzdHOztrQkFRRSxLQUFLOztrQkFFTCxNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFFTixLQUFLOztrQkFHTCxNQUFNOztrQkFNTixLQUFLOztrQkFDTCxZQUFZO21CQUFDLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTs7a0JBSzNELEtBQUs7O2tCQUNMLFlBQVk7bUJBQUMsWUFBWSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFOztrQkFLL0QsS0FBSzs7a0JBQ0wsWUFBWTttQkFBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7O2tCQUs1RCxLQUFLOztrQkFDTCxZQUFZO21CQUFDLGFBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTs7a0JBS2hFLEtBQUs7O2tCQUVMLFdBQVc7bUJBQUMsb0NBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IENhbmR5RGF0ZSwgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHtcclxuICBOekRhdGVDZWxsRGlyZWN0aXZlIGFzIERhdGVDZWxsLFxyXG4gIE56RGF0ZUZ1bGxDZWxsRGlyZWN0aXZlIGFzIERhdGVGdWxsQ2VsbCxcclxuICBOek1vbnRoQ2VsbERpcmVjdGl2ZSBhcyBNb250aENlbGwsXHJcbiAgTnpNb250aEZ1bGxDZWxsRGlyZWN0aXZlIGFzIE1vbnRoRnVsbENlbGxcclxufSBmcm9tICcuL256LWNhbGVuZGFyLWNlbGxzJztcclxuXHJcbmV4cG9ydCB0eXBlIE1vZGVUeXBlID0gJ21vbnRoJyB8ICd5ZWFyJztcclxuZXhwb3J0IHR5cGUgRGF0ZVRlbXBsYXRlID0gVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IERhdGUgfT47XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHNlbGVjdG9yOiAnbnotY2FsZW5kYXInLFxyXG4gIGV4cG9ydEFzOiAnbnpDYWxlbmRhcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LWNhbGVuZGFyLmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOekNhbGVuZGFyQ29tcG9uZW50KSwgbXVsdGk6IHRydWUgfV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56Q2FsZW5kYXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcbiAgYWN0aXZlRGF0ZTogQ2FuZHlEYXRlID0gbmV3IENhbmR5RGF0ZSgpO1xyXG4gIHByZWZpeENsczogc3RyaW5nID0gJ2FudC1mdWxsY2FsZW5kYXInO1xyXG5cclxuICBwcml2YXRlIG9uQ2hhbmdlRm46IChkYXRlOiBEYXRlKSA9PiB2b2lkID0gKCkgPT4ge307XHJcbiAgcHJpdmF0ZSBvblRvdWNoRm46ICgpID0+IHZvaWQgPSAoKSA9PiB7fTtcclxuXHJcbiAgQElucHV0KCkgbnpNb2RlOiBNb2RlVHlwZSA9ICdtb250aCc7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek1vZGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxNb2RlVHlwZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56UGFuZWxDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGRhdGU6IERhdGU7IG1vZGU6IE1vZGVUeXBlIH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNlbGVjdENoYW5nZTogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBASW5wdXQoKSBzZXQgbnpWYWx1ZSh2YWx1ZTogRGF0ZSkge1xyXG4gICAgdGhpcy51cGRhdGVEYXRlKG5ldyBDYW5keURhdGUodmFsdWUpLCBmYWxzZSk7XHJcbiAgfVxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbm5vdCB1c2UgQElucHV0IGFuZCBAQ29udGVudENoaWxkIG9uIG9uZSB2YXJpYWJsZVxyXG4gICAqIGJlY2F1c2UgeyBzdGF0aWM6IGZhbHNlIH0gd2lsbCBtYWtlIEBJbnB1dCBwcm9wZXJ0eSBnZXQgZGVsYXllZFxyXG4gICAqKi9cclxuICBASW5wdXQoKSBuekRhdGVDZWxsOiBEYXRlVGVtcGxhdGU7XHJcbiAgQENvbnRlbnRDaGlsZChEYXRlQ2VsbCwgeyBzdGF0aWM6IGZhbHNlLCByZWFkOiBUZW1wbGF0ZVJlZiB9KSBuekRhdGVDZWxsQ2hpbGQ6IERhdGVUZW1wbGF0ZTtcclxuICBnZXQgZGF0ZUNlbGwoKTogRGF0ZVRlbXBsYXRlIHtcclxuICAgIHJldHVybiB0aGlzLm56RGF0ZUNlbGwgfHwgdGhpcy5uekRhdGVDZWxsQ2hpbGQ7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBuekRhdGVGdWxsQ2VsbDogRGF0ZVRlbXBsYXRlO1xyXG4gIEBDb250ZW50Q2hpbGQoRGF0ZUZ1bGxDZWxsLCB7IHN0YXRpYzogZmFsc2UsIHJlYWQ6IFRlbXBsYXRlUmVmIH0pIG56RGF0ZUZ1bGxDZWxsQ2hpbGQ6IERhdGVUZW1wbGF0ZTtcclxuICBnZXQgZGF0ZUZ1bGxDZWxsKCk6IERhdGVUZW1wbGF0ZSB7XHJcbiAgICByZXR1cm4gdGhpcy5uekRhdGVGdWxsQ2VsbCB8fCB0aGlzLm56RGF0ZUZ1bGxDZWxsQ2hpbGQ7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBuek1vbnRoQ2VsbDogRGF0ZVRlbXBsYXRlO1xyXG4gIEBDb250ZW50Q2hpbGQoTW9udGhDZWxsLCB7IHN0YXRpYzogZmFsc2UsIHJlYWQ6IFRlbXBsYXRlUmVmIH0pIG56TW9udGhDZWxsQ2hpbGQ6IERhdGVUZW1wbGF0ZTtcclxuICBnZXQgbW9udGhDZWxsKCk6IERhdGVUZW1wbGF0ZSB7XHJcbiAgICByZXR1cm4gdGhpcy5uek1vbnRoQ2VsbCB8fCB0aGlzLm56TW9udGhDZWxsQ2hpbGQ7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBuek1vbnRoRnVsbENlbGw6IERhdGVUZW1wbGF0ZTtcclxuICBAQ29udGVudENoaWxkKE1vbnRoRnVsbENlbGwsIHsgc3RhdGljOiBmYWxzZSwgcmVhZDogVGVtcGxhdGVSZWYgfSkgbnpNb250aEZ1bGxDZWxsQ2hpbGQ6IERhdGVUZW1wbGF0ZTtcclxuICBnZXQgbW9udGhGdWxsQ2VsbCgpOiBEYXRlVGVtcGxhdGUge1xyXG4gICAgcmV0dXJuIHRoaXMubnpNb250aEZ1bGxDZWxsIHx8IHRoaXMubnpNb250aEZ1bGxDZWxsQ2hpbGQ7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dEJvb2xlYW4oKVxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LWZ1bGxjYWxlbmRhci0tZnVsbHNjcmVlbicpXHJcbiAgbnpGdWxsc2NyZWVuOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxyXG5cclxuICBvbk1vZGVDaGFuZ2UobW9kZTogTW9kZVR5cGUpOiB2b2lkIHtcclxuICAgIHRoaXMubnpNb2RlQ2hhbmdlLmVtaXQobW9kZSk7XHJcbiAgICB0aGlzLm56UGFuZWxDaGFuZ2UuZW1pdCh7IGRhdGU6IHRoaXMuYWN0aXZlRGF0ZS5uYXRpdmVEYXRlLCBtb2RlIH0pO1xyXG4gIH1cclxuXHJcbiAgb25ZZWFyU2VsZWN0KHllYXI6IG51bWJlcik6IHZvaWQge1xyXG4gICAgY29uc3QgZGF0ZSA9IHRoaXMuYWN0aXZlRGF0ZS5zZXRZZWFyKHllYXIpO1xyXG4gICAgdGhpcy51cGRhdGVEYXRlKGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgb25Nb250aFNlbGVjdChtb250aDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBjb25zdCBkYXRlID0gdGhpcy5hY3RpdmVEYXRlLnNldE1vbnRoKG1vbnRoKTtcclxuICAgIHRoaXMudXBkYXRlRGF0ZShkYXRlKTtcclxuICB9XHJcblxyXG4gIG9uRGF0ZVNlbGVjdChkYXRlOiBDYW5keURhdGUpOiB2b2lkIHtcclxuICAgIC8vIE9ubHkgYWN0aXZlRGF0ZSBpcyBlbm91Z2ggaW4gY2FsZW5kYXJcclxuICAgIC8vIHRoaXMudmFsdWUgPSBkYXRlO1xyXG4gICAgdGhpcy51cGRhdGVEYXRlKGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogRGF0ZSB8IG51bGwpOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlRGF0ZShuZXcgQ2FuZHlEYXRlKHZhbHVlIGFzIERhdGUpLCBmYWxzZSk7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChkYXRlOiBEYXRlKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlRm4gPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hGbiA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVEYXRlKGRhdGU6IENhbmR5RGF0ZSwgdG91Y2hlZDogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcclxuICAgIHRoaXMuYWN0aXZlRGF0ZSA9IGRhdGU7XHJcblxyXG4gICAgaWYgKHRvdWNoZWQpIHtcclxuICAgICAgdGhpcy5vbkNoYW5nZUZuKGRhdGUubmF0aXZlRGF0ZSk7XHJcbiAgICAgIHRoaXMub25Ub3VjaEZuKCk7XHJcbiAgICAgIHRoaXMubnpTZWxlY3RDaGFuZ2UuZW1pdChkYXRlLm5hdGl2ZURhdGUpO1xyXG4gICAgICB0aGlzLm56VmFsdWVDaGFuZ2UuZW1pdChkYXRlLm5hdGl2ZURhdGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8bnotY2FsZW5kYXItaGVhZGVyXHJcbiAgW2Z1bGxzY3JlZW5dPVwibnpGdWxsc2NyZWVuXCJcclxuICBbYWN0aXZlRGF0ZV09XCJhY3RpdmVEYXRlXCJcclxuICBbKG1vZGUpXT1cIm56TW9kZVwiXHJcbiAgKG1vZGVDaGFuZ2UpPVwib25Nb2RlQ2hhbmdlKCRldmVudClcIlxyXG4gICh5ZWFyQ2hhbmdlKT1cIm9uWWVhclNlbGVjdCgkZXZlbnQpXCJcclxuICAobW9udGhDaGFuZ2UpPVwib25Nb250aFNlbGVjdCgkZXZlbnQpXCJcclxuPlxyXG48L256LWNhbGVuZGFyLWhlYWRlcj5cclxuXHJcbjxkaXZcclxuICBjbGFzcz1cInt7IHByZWZpeENscyB9fSB7eyBwcmVmaXhDbHMgfX0tZnVsbFwiXHJcbiAgW2NsYXNzLmFudC1mdWxsY2FsZW5kYXItZnVsbHNjcmVlbl09XCJuekZ1bGxzY3JlZW5cIlxyXG4+XHJcbiAgPGRpdiBjbGFzcz1cInt7IHByZWZpeENscyB9fS1jYWxlbmRhci1ib2R5XCI+XHJcbiAgICA8bmctY29udGFpbmVyXHJcbiAgICAgICpuZ0lmPVwibnpNb2RlID09PSAnbW9udGgnOyB0aGVuIG1vbnRoTW9kZVRhYmxlOyBlbHNlIHllYXJNb2RlVGFibGVcIlxyXG4gICAgPjwvbmctY29udGFpbmVyPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjbW9udGhNb2RlVGFibGU+XHJcbiAgPGRhdGUtdGFibGVcclxuICAgIFtwcmVmaXhDbHNdPVwicHJlZml4Q2xzXCJcclxuICAgIFt2YWx1ZV09XCJhY3RpdmVEYXRlXCJcclxuICAgIFtkYXRlQ2VsbFJlbmRlcl09XCJkYXRlQ2VsbFwiXHJcbiAgICBbZGF0ZUZ1bGxDZWxsUmVuZGVyXT1cImRhdGVGdWxsQ2VsbFwiXHJcbiAgICAodmFsdWVDaGFuZ2UpPVwib25EYXRlU2VsZWN0KCRldmVudClcIlxyXG4gID48L2RhdGUtdGFibGU+XHJcbjwvbmctdGVtcGxhdGU+XHJcblxyXG48bmctdGVtcGxhdGUgI3llYXJNb2RlVGFibGU+XHJcbiAgPG1vbnRoLXRhYmxlXHJcbiAgICBbcHJlZml4Q2xzXT1cInByZWZpeENsc1wiXHJcbiAgICBbdmFsdWVdPVwiYWN0aXZlRGF0ZVwiXHJcbiAgICBbbW9udGhDZWxsUmVuZGVyXT1cIm1vbnRoQ2VsbFwiXHJcbiAgICBbbW9udGhGdWxsQ2VsbFJlbmRlcl09XCJtb250aEZ1bGxDZWxsXCJcclxuICAgICh2YWx1ZUNoYW5nZSk9XCJvbkRhdGVTZWxlY3QoJGV2ZW50KVwiXHJcbiAgPjwvbW9udGgtdGFibGU+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==