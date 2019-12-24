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
    const _r2007 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "date-table", 4);
    i0.ɵɵlistener("valueChange", function NzCalendarComponent_ng_template_4_Template_date_table_valueChange_0_listener($event) { i0.ɵɵrestoreView(_r2007); const ctx_r2006 = i0.ɵɵnextContext(); return ctx_r2006.onDateSelect($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2003 = i0.ɵɵnextContext();
    i0.ɵɵproperty("prefixCls", ctx_r2003.prefixCls)("value", ctx_r2003.activeDate)("dateCellRender", ctx_r2003.dateCell)("dateFullCellRender", ctx_r2003.dateFullCell);
} }
function NzCalendarComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r2009 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "month-table", 5);
    i0.ɵɵlistener("valueChange", function NzCalendarComponent_ng_template_6_Template_month_table_valueChange_0_listener($event) { i0.ɵɵrestoreView(_r2009); const ctx_r2008 = i0.ɵɵnextContext(); return ctx_r2008.onDateSelect($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2005 = i0.ɵɵnextContext();
    i0.ɵɵproperty("prefixCls", ctx_r2005.prefixCls)("value", ctx_r2005.activeDate)("monthCellRender", ctx_r2005.monthCell)("monthFullCellRender", ctx_r2005.monthFullCell);
} }
export class NzCalendarComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.activeDate = new CandyDate();
        this.prefixCls = 'ant-fullcalendar';
        this.onChangeFn = () => { };
        this.onTouchFn = () => { };
        this.nzMode = 'month';
        this.nzModeChange = new EventEmitter();
        this.nzPanelChange = new EventEmitter();
        this.nzSelectChange = new EventEmitter();
        this.nzValueChange = new EventEmitter();
        this.nzFullscreen = true;
    }
    set nzValue(value) {
        this.updateDate(new CandyDate(value), false);
    }
    get dateCell() {
        return this.nzDateCell || this.nzDateCellChild;
    }
    get dateFullCell() {
        return this.nzDateFullCell || this.nzDateFullCellChild;
    }
    get monthCell() {
        return this.nzMonthCell || this.nzMonthCellChild;
    }
    get monthFullCell() {
        return this.nzMonthFullCell || this.nzMonthFullCellChild;
    }
    onModeChange(mode) {
        this.nzModeChange.emit(mode);
        this.nzPanelChange.emit({ date: this.activeDate.nativeDate, mode });
    }
    onYearSelect(year) {
        const date = this.activeDate.setYear(year);
        this.updateDate(date);
    }
    onMonthSelect(month) {
        const date = this.activeDate.setMonth(month);
        this.updateDate(date);
    }
    onDateSelect(date) {
        // Only activeDate is enough in calendar
        // this.value = date;
        this.updateDate(date);
    }
    writeValue(value) {
        this.updateDate(new CandyDate(value), false);
        this.cdr.markForCheck();
    }
    registerOnChange(fn) {
        this.onChangeFn = fn;
    }
    registerOnTouched(fn) {
        this.onTouchFn = fn;
    }
    updateDate(date, touched = true) {
        this.activeDate = date;
        if (touched) {
            this.onChangeFn(date.nativeDate);
            this.onTouchFn();
            this.nzSelectChange.emit(date.nativeDate);
            this.nzValueChange.emit(date.nativeDate);
        }
    }
}
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
    } }, inputs: { nzMode: "nzMode", nzValue: "nzValue", nzDateCell: "nzDateCell", nzDateFullCell: "nzDateFullCell", nzMonthCell: "nzMonthCell", nzMonthFullCell: "nzMonthFullCell", nzFullscreen: "nzFullscreen" }, outputs: { nzModeChange: "nzModeChange", nzPanelChange: "nzPanelChange", nzSelectChange: "nzSelectChange", nzValueChange: "nzValueChange" }, exportAs: ["nzCalendar"], features: [i0.ɵɵProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef((() => NzCalendarComponent)), multi: true }])], decls: 8, vars: 14, consts: [[3, "fullscreen", "activeDate", "mode", "modeChange", "yearChange", "monthChange"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["monthModeTable", ""], ["yearModeTable", ""], [3, "prefixCls", "value", "dateCellRender", "dateFullCellRender", "valueChange"], [3, "prefixCls", "value", "monthCellRender", "monthFullCellRender", "valueChange"]], template: function NzCalendarComponent_Template(rf, ctx) { if (rf & 1) {
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
        const _r2002 = i0.ɵɵreference(5);
        const _r2004 = i0.ɵɵreference(7);
        i0.ɵɵproperty("fullscreen", ctx.nzFullscreen)("activeDate", ctx.activeDate)("mode", ctx.nzMode);
        i0.ɵɵadvance(1);
        i0.ɵɵclassMapInterpolate2("", ctx.prefixCls, " ", ctx.prefixCls, "-full");
        i0.ɵɵclassProp("ant-fullcalendar-fullscreen", ctx.nzFullscreen);
        i0.ɵɵadvance(1);
        i0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-calendar-body");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.nzMode === "month")("ngIfThen", _r2002)("ngIfElse", _r2004);
    } }, directives: [i1.NzCalendarHeaderComponent, i2.NgIf, i3.DateTableComponent, i4.MonthTableComponent], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzCalendarComponent.prototype, "nzFullscreen", void 0);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzCalendarComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'nz-calendar',
                exportAs: 'nzCalendar',
                templateUrl: './nz-calendar.component.html',
                providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef((() => NzCalendarComponent)), multi: true }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jYWxlbmRhci8iLCJzb3VyY2VzIjpbIm56LWNhbGVuZGFyLmNvbXBvbmVudC50cyIsIm56LWNhbGVuZGFyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFlBQVksRUFDWixVQUFVLEVBQ1YsV0FBVyxFQUNYLEtBQUssRUFDTCxNQUFNLEVBQ04sV0FBVyxFQUNYLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM3RCxPQUFPLEVBQ0wsbUJBQW1CLElBQUksUUFBUSxFQUMvQix1QkFBdUIsSUFBSSxZQUFZLEVBQ3ZDLG9CQUFvQixJQUFJLFNBQVMsRUFDakMsd0JBQXdCLElBQUksYUFBYSxFQUMxQyxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7O0lDZHpCLHdCQUVnQjs7OztJQUtsQixxQ0FNYztJQURaLHNPQUFvQztJQUNyQyxpQkFBYTs7O0lBTFosK0NBQXVCLCtCQUFBLHNDQUFBLDhDQUFBOzs7O0lBU3pCLHNDQU1lO0lBRGIsdU9BQW9DO0lBQ3JDLGlCQUFjOzs7SUFMYiwrQ0FBdUIsK0JBQUEsd0NBQUEsZ0RBQUE7O0FEUzNCLE1BQU0sT0FBTyxtQkFBbUI7SUFtRDlCLFlBQW9CLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBbEQxQyxlQUFVLEdBQWMsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUN4QyxjQUFTLEdBQVcsa0JBQWtCLENBQUM7UUFFL0IsZUFBVSxHQUF5QixHQUFHLEVBQUUsR0FBRSxD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SSxFQUFFLENBQUM7YUFDN0c7O2tCQVFFLEtBQUs7O2tCQUVMLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUVOLEtBQUs7O2tCQUdMLE1BQU07O2tCQU1OLEtBQUs7O2tCQUNMLFlBQVk7bUJBQUMsUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFOztrQkFLM0QsS0FBSzs7a0JBQ0wsWUFBWTttQkFBQyxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7O2tCQUsvRCxLQUFLOztrQkFDTCxZQUFZO21CQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTs7a0JBSzVELEtBQUs7O2tCQUNMLFlBQVk7bUJBQUMsYUFBYSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFOztrQkFLaEUsS0FBSzs7a0JBRUwsV0FBVzttQkFBQyxvQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgZm9yd2FyZFJlZixcclxuICBIb3N0QmluZGluZyxcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgQ2FuZHlEYXRlLCBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIE56RGF0ZUNlbGxEaXJlY3RpdmUgYXMgRGF0ZUNlbGwsXHJcbiAgTnpEYXRlRnVsbENlbGxEaXJlY3RpdmUgYXMgRGF0ZUZ1bGxDZWxsLFxyXG4gIE56TW9udGhDZWxsRGlyZWN0aXZlIGFzIE1vbnRoQ2VsbCxcclxuICBOek1vbnRoRnVsbENlbGxEaXJlY3RpdmUgYXMgTW9udGhGdWxsQ2VsbFxyXG59IGZyb20gJy4vbnotY2FsZW5kYXItY2VsbHMnO1xyXG5cclxuZXhwb3J0IHR5cGUgTW9kZVR5cGUgPSAnbW9udGgnIHwgJ3llYXInO1xyXG5leHBvcnQgdHlwZSBEYXRlVGVtcGxhdGUgPSBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogRGF0ZSB9PjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgc2VsZWN0b3I6ICduei1jYWxlbmRhcicsXHJcbiAgZXhwb3J0QXM6ICduekNhbGVuZGFyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotY2FsZW5kYXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE56Q2FsZW5kYXJDb21wb25lbnQpLCBtdWx0aTogdHJ1ZSB9XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpDYWxlbmRhckNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcclxuICBhY3RpdmVEYXRlOiBDYW5keURhdGUgPSBuZXcgQ2FuZHlEYXRlKCk7XHJcbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW50LWZ1bGxjYWxlbmRhcic7XHJcblxyXG4gIHByaXZhdGUgb25DaGFuZ2VGbjogKGRhdGU6IERhdGUpID0+IHZvaWQgPSAoKSA9PiB7fTtcclxuICBwcml2YXRlIG9uVG91Y2hGbjogKCkgPT4gdm9pZCA9ICgpID0+IHt9O1xyXG5cclxuICBASW5wdXQoKSBuek1vZGU6IE1vZGVUeXBlID0gJ21vbnRoJztcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56TW9kZUNoYW5nZTogRXZlbnRFbWl0dGVyPE1vZGVUeXBlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpQYW5lbENoYW5nZTogRXZlbnRFbWl0dGVyPHsgZGF0ZTogRGF0ZTsgbW9kZTogTW9kZVR5cGUgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56U2VsZWN0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBJbnB1dCgpIHNldCBuelZhbHVlKHZhbHVlOiBEYXRlKSB7XHJcbiAgICB0aGlzLnVwZGF0ZURhdGUobmV3IENhbmR5RGF0ZSh2YWx1ZSksIGZhbHNlKTtcclxuICB9XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56VmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ2Fubm90IHVzZSBASW5wdXQgYW5kIEBDb250ZW50Q2hpbGQgb24gb25lIHZhcmlhYmxlXHJcbiAgICogYmVjYXVzZSB7IHN0YXRpYzogZmFsc2UgfSB3aWxsIG1ha2UgQElucHV0IHByb3BlcnR5IGdldCBkZWxheWVkXHJcbiAgICoqL1xyXG4gIEBJbnB1dCgpIG56RGF0ZUNlbGw6IERhdGVUZW1wbGF0ZTtcclxuICBAQ29udGVudENoaWxkKERhdGVDZWxsLCB7IHN0YXRpYzogZmFsc2UsIHJlYWQ6IFRlbXBsYXRlUmVmIH0pIG56RGF0ZUNlbGxDaGlsZDogRGF0ZVRlbXBsYXRlO1xyXG4gIGdldCBkYXRlQ2VsbCgpOiBEYXRlVGVtcGxhdGUge1xyXG4gICAgcmV0dXJuIHRoaXMubnpEYXRlQ2VsbCB8fCB0aGlzLm56RGF0ZUNlbGxDaGlsZDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIG56RGF0ZUZ1bGxDZWxsOiBEYXRlVGVtcGxhdGU7XHJcbiAgQENvbnRlbnRDaGlsZChEYXRlRnVsbENlbGwsIHsgc3RhdGljOiBmYWxzZSwgcmVhZDogVGVtcGxhdGVSZWYgfSkgbnpEYXRlRnVsbENlbGxDaGlsZDogRGF0ZVRlbXBsYXRlO1xyXG4gIGdldCBkYXRlRnVsbENlbGwoKTogRGF0ZVRlbXBsYXRlIHtcclxuICAgIHJldHVybiB0aGlzLm56RGF0ZUZ1bGxDZWxsIHx8IHRoaXMubnpEYXRlRnVsbENlbGxDaGlsZDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIG56TW9udGhDZWxsOiBEYXRlVGVtcGxhdGU7XHJcbiAgQENvbnRlbnRDaGlsZChNb250aENlbGwsIHsgc3RhdGljOiBmYWxzZSwgcmVhZDogVGVtcGxhdGVSZWYgfSkgbnpNb250aENlbGxDaGlsZDogRGF0ZVRlbXBsYXRlO1xyXG4gIGdldCBtb250aENlbGwoKTogRGF0ZVRlbXBsYXRlIHtcclxuICAgIHJldHVybiB0aGlzLm56TW9udGhDZWxsIHx8IHRoaXMubnpNb250aENlbGxDaGlsZDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIG56TW9udGhGdWxsQ2VsbDogRGF0ZVRlbXBsYXRlO1xyXG4gIEBDb250ZW50Q2hpbGQoTW9udGhGdWxsQ2VsbCwgeyBzdGF0aWM6IGZhbHNlLCByZWFkOiBUZW1wbGF0ZVJlZiB9KSBuek1vbnRoRnVsbENlbGxDaGlsZDogRGF0ZVRlbXBsYXRlO1xyXG4gIGdldCBtb250aEZ1bGxDZWxsKCk6IERhdGVUZW1wbGF0ZSB7XHJcbiAgICByZXR1cm4gdGhpcy5uek1vbnRoRnVsbENlbGwgfHwgdGhpcy5uek1vbnRoRnVsbENlbGxDaGlsZDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgQElucHV0Qm9vbGVhbigpXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtZnVsbGNhbGVuZGFyLS1mdWxsc2NyZWVuJylcclxuICBuekZ1bGxzY3JlZW46IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XHJcblxyXG4gIG9uTW9kZUNoYW5nZShtb2RlOiBNb2RlVHlwZSk6IHZvaWQge1xyXG4gICAgdGhpcy5uek1vZGVDaGFuZ2UuZW1pdChtb2RlKTtcclxuICAgIHRoaXMubnpQYW5lbENoYW5nZS5lbWl0KHsgZGF0ZTogdGhpcy5hY3RpdmVEYXRlLm5hdGl2ZURhdGUsIG1vZGUgfSk7XHJcbiAgfVxyXG5cclxuICBvblllYXJTZWxlY3QoeWVhcjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBjb25zdCBkYXRlID0gdGhpcy5hY3RpdmVEYXRlLnNldFllYXIoeWVhcik7XHJcbiAgICB0aGlzLnVwZGF0ZURhdGUoZGF0ZSk7XHJcbiAgfVxyXG5cclxuICBvbk1vbnRoU2VsZWN0KG1vbnRoOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGNvbnN0IGRhdGUgPSB0aGlzLmFjdGl2ZURhdGUuc2V0TW9udGgobW9udGgpO1xyXG4gICAgdGhpcy51cGRhdGVEYXRlKGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgb25EYXRlU2VsZWN0KGRhdGU6IENhbmR5RGF0ZSk6IHZvaWQge1xyXG4gICAgLy8gT25seSBhY3RpdmVEYXRlIGlzIGVub3VnaCBpbiBjYWxlbmRhclxyXG4gICAgLy8gdGhpcy52YWx1ZSA9IGRhdGU7XHJcbiAgICB0aGlzLnVwZGF0ZURhdGUoZGF0ZSk7XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBEYXRlIHwgbnVsbCk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGVEYXRlKG5ldyBDYW5keURhdGUodmFsdWUgYXMgRGF0ZSksIGZhbHNlKTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKGRhdGU6IERhdGUpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2VGbiA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaEZuID0gZm47XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZURhdGUoZGF0ZTogQ2FuZHlEYXRlLCB0b3VjaGVkOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xyXG4gICAgdGhpcy5hY3RpdmVEYXRlID0gZGF0ZTtcclxuXHJcbiAgICBpZiAodG91Y2hlZCkge1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlRm4oZGF0ZS5uYXRpdmVEYXRlKTtcclxuICAgICAgdGhpcy5vblRvdWNoRm4oKTtcclxuICAgICAgdGhpcy5uelNlbGVjdENoYW5nZS5lbWl0KGRhdGUubmF0aXZlRGF0ZSk7XHJcbiAgICAgIHRoaXMubnpWYWx1ZUNoYW5nZS5lbWl0KGRhdGUubmF0aXZlRGF0ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxuei1jYWxlbmRhci1oZWFkZXJcclxuICBbZnVsbHNjcmVlbl09XCJuekZ1bGxzY3JlZW5cIlxyXG4gIFthY3RpdmVEYXRlXT1cImFjdGl2ZURhdGVcIlxyXG4gIFsobW9kZSldPVwibnpNb2RlXCJcclxuICAobW9kZUNoYW5nZSk9XCJvbk1vZGVDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgKHllYXJDaGFuZ2UpPVwib25ZZWFyU2VsZWN0KCRldmVudClcIlxyXG4gIChtb250aENoYW5nZSk9XCJvbk1vbnRoU2VsZWN0KCRldmVudClcIlxyXG4+XHJcbjwvbnotY2FsZW5kYXItaGVhZGVyPlxyXG5cclxuPGRpdlxyXG4gIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19IHt7IHByZWZpeENscyB9fS1mdWxsXCJcclxuICBbY2xhc3MuYW50LWZ1bGxjYWxlbmRhci1mdWxsc2NyZWVuXT1cIm56RnVsbHNjcmVlblwiXHJcbj5cclxuICA8ZGl2IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWNhbGVuZGFyLWJvZHlcIj5cclxuICAgIDxuZy1jb250YWluZXJcclxuICAgICAgKm5nSWY9XCJuek1vZGUgPT09ICdtb250aCc7IHRoZW4gbW9udGhNb2RlVGFibGU7IGVsc2UgeWVhck1vZGVUYWJsZVwiXHJcbiAgICA+PC9uZy1jb250YWluZXI+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuPG5nLXRlbXBsYXRlICNtb250aE1vZGVUYWJsZT5cclxuICA8ZGF0ZS10YWJsZVxyXG4gICAgW3ByZWZpeENsc109XCJwcmVmaXhDbHNcIlxyXG4gICAgW3ZhbHVlXT1cImFjdGl2ZURhdGVcIlxyXG4gICAgW2RhdGVDZWxsUmVuZGVyXT1cImRhdGVDZWxsXCJcclxuICAgIFtkYXRlRnVsbENlbGxSZW5kZXJdPVwiZGF0ZUZ1bGxDZWxsXCJcclxuICAgICh2YWx1ZUNoYW5nZSk9XCJvbkRhdGVTZWxlY3QoJGV2ZW50KVwiXHJcbiAgPjwvZGF0ZS10YWJsZT5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjeWVhck1vZGVUYWJsZT5cclxuICA8bW9udGgtdGFibGVcclxuICAgIFtwcmVmaXhDbHNdPVwicHJlZml4Q2xzXCJcclxuICAgIFt2YWx1ZV09XCJhY3RpdmVEYXRlXCJcclxuICAgIFttb250aENlbGxSZW5kZXJdPVwibW9udGhDZWxsXCJcclxuICAgIFttb250aEZ1bGxDZWxsUmVuZGVyXT1cIm1vbnRoRnVsbENlbGxcIlxyXG4gICAgKHZhbHVlQ2hhbmdlKT1cIm9uRGF0ZVNlbGVjdCgkZXZlbnQpXCJcclxuICA+PC9tb250aC10YWJsZT5cclxuPC9uZy10ZW1wbGF0ZT5cclxuIl19