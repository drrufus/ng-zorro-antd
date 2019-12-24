/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { CandyDate } from 'ng-zorro-antd/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function YearPanelComponent_tr_13_td_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 5);
    i0.ɵɵlistener("click", function YearPanelComponent_tr_13_td_1_Template_td_click_0_listener($event) { var yearCell_r2466 = ctx.$implicit; return yearCell_r2466.disabled ? null : yearCell_r2466.onClick(); });
    i0.ɵɵelementStart(1, "a");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var yearCell_r2466 = ctx.$implicit;
    var ctx_r2465 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("title", yearCell_r2466.title);
    i0.ɵɵproperty("ngClass", yearCell_r2466.classMap);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("", ctx_r2465.prefixCls, "-year");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(yearCell_r2466.content);
} }
function YearPanelComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 3);
    i0.ɵɵtemplate(1, YearPanelComponent_tr_13_td_1_Template, 3, 6, "td", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var row_r2464 = ctx.$implicit;
    var ctx_r2463 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", row_r2464)("ngForTrackBy", ctx_r2463.trackPanelYear);
} }
var MAX_ROW = 4;
var MAX_COL = 3;
var YearPanelComponent = /** @class */ (function () {
    function YearPanelComponent() {
        this.valueChange = new EventEmitter();
        this.decadePanelShow = new EventEmitter();
        this.prefixCls = 'ant-calendar-year-panel';
    }
    Object.defineProperty(YearPanelComponent.prototype, "currentYear", {
        get: function () {
            return this.value.getYear();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(YearPanelComponent.prototype, "startYear", {
        get: function () {
            return parseInt("" + this.currentYear / 10, 10) * 10;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(YearPanelComponent.prototype, "endYear", {
        get: function () {
            return this.startYear + 9;
        },
        enumerable: true,
        configurable: true
    });
    YearPanelComponent.prototype.ngOnChanges = function (changes) {
        if (changes.value || changes.disabledDate) {
            this.render();
        }
    };
    YearPanelComponent.prototype.previousDecade = function () {
        this.gotoYear(-10);
    };
    YearPanelComponent.prototype.nextDecade = function () {
        this.gotoYear(10);
    };
    YearPanelComponent.prototype.trackPanelYear = function (_index, yearData) {
        return yearData.content;
    };
    YearPanelComponent.prototype.render = function () {
        if (this.value) {
            this.panelYears = this.makePanelYears();
        }
    };
    // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
    YearPanelComponent.prototype.gotoYear = function (amount) {
        this.value = this.value.addYears(amount);
        // this.valueChange.emit(this.value); // Do not trigger final value change
        this.render();
    };
    YearPanelComponent.prototype.chooseYear = function (year) {
        this.value = this.value.setYear(year);
        this.valueChange.emit(this.value);
        this.render();
    };
    YearPanelComponent.prototype.makePanelYears = function () {
        var _this = this;
        var years = [];
        var currentYear = this.currentYear;
        var startYear = this.startYear;
        var endYear = this.endYear;
        var previousYear = startYear - 1;
        var index = 0;
        for (var rowIndex = 0; rowIndex < MAX_ROW; rowIndex++) {
            years[rowIndex] = [];
            var _loop_1 = function (colIndex) {
                var _a;
                var year = previousYear + index;
                var content = String(year);
                var disabled = this_1.disabledDate ? this_1.disabledDate(this_1.value.setYear(year).nativeDate) : false;
                var cell = (years[rowIndex][colIndex] = {
                    disabled: disabled,
                    content: content,
                    year: year,
                    title: content,
                    isCurrent: year === currentYear,
                    isLowerThanStart: year < startYear,
                    isBiggerThanEnd: year > endYear,
                    classMap: null,
                    onClick: null
                });
                cell.classMap = (_a = {},
                    _a[this_1.prefixCls + "-cell"] = true,
                    _a[this_1.prefixCls + "-selected-cell"] = cell.isCurrent,
                    _a[this_1.prefixCls + "-cell-disabled"] = disabled,
                    _a[this_1.prefixCls + "-last-decade-cell"] = cell.isLowerThanStart,
                    _a[this_1.prefixCls + "-next-decade-cell"] = cell.isBiggerThanEnd,
                    _a);
                if (cell.isLowerThanStart) {
                    cell.onClick = function () { return _this.previousDecade(); };
                }
                else if (cell.isBiggerThanEnd) {
                    cell.onClick = function () { return _this.nextDecade(); };
                }
                else {
                    cell.onClick = function () { return _this.chooseYear(cell.year); };
                }
                index++;
            };
            var this_1 = this;
            for (var colIndex = 0; colIndex < MAX_COL; colIndex++) {
                _loop_1(colIndex);
            }
        }
        return years;
    };
    /** @nocollapse */ YearPanelComponent.ɵfac = function YearPanelComponent_Factory(t) { return new (t || YearPanelComponent)(); };
    /** @nocollapse */ YearPanelComponent.ɵcmp = i0.ɵɵdefineComponent({ type: YearPanelComponent, selectors: [["year-panel"]], inputs: { locale: "locale", value: "value", disabledDate: "disabledDate" }, outputs: { valueChange: "valueChange", decadePanelShow: "decadePanelShow" }, exportAs: ["yearPanel"], features: [i0.ɵɵNgOnChangesFeature()], decls: 14, vars: 36, consts: [["role", "button", 3, "title", "click"], ["cellSpacing", "0", "role", "grid"], ["role", "row", 4, "ngFor", "ngForOf"], ["role", "row"], ["role", "gridcell", 3, "title", "ngClass", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "gridcell", 3, "title", "ngClass", "click"]], template: function YearPanelComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "div");
            i0.ɵɵelementStart(2, "div");
            i0.ɵɵelementStart(3, "a", 0);
            i0.ɵɵlistener("click", function YearPanelComponent_Template_a_click_3_listener($event) { return ctx.previousDecade(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "a", 0);
            i0.ɵɵlistener("click", function YearPanelComponent_Template_a_click_4_listener($event) { return ctx.decadePanelShow.emit(); });
            i0.ɵɵelementStart(5, "span");
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "span");
            i0.ɵɵtext(8, "x");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "a", 0);
            i0.ɵɵlistener("click", function YearPanelComponent_Template_a_click_9_listener($event) { return ctx.nextDecade(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "div");
            i0.ɵɵelementStart(11, "table", 1);
            i0.ɵɵelementStart(12, "tbody");
            i0.ɵɵtemplate(13, YearPanelComponent_tr_13_Template, 2, 2, "tr", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassMap(ctx.prefixCls);
            i0.ɵɵadvance(2);
            i0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-header");
            i0.ɵɵadvance(1);
            i0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-prev-decade-btn");
            i0.ɵɵpropertyInterpolate("title", ctx.locale.previousDecade);
            i0.ɵɵadvance(1);
            i0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-decade-select");
            i0.ɵɵpropertyInterpolate("title", ctx.locale.decadeSelect);
            i0.ɵɵadvance(1);
            i0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-decade-select-content");
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate2(" ", ctx.startYear, "-", ctx.endYear, " ");
            i0.ɵɵadvance(1);
            i0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-decade-select-arrow");
            i0.ɵɵadvance(2);
            i0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-next-decade-btn");
            i0.ɵɵpropertyInterpolate("title", ctx.locale.nextDecade);
            i0.ɵɵadvance(1);
            i0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-body");
            i0.ɵɵadvance(1);
            i0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-table");
            i0.ɵɵadvance(1);
            i0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-tbody");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.panelYears);
        } }, directives: [i1.NgForOf, i1.NgClass], styles: ["\n      .ant-calendar-year-panel-cell-disabled .ant-calendar-year-panel-year,\n      .ant-calendar-year-panel-cell-disabled .ant-calendar-year-panel-year:hover {\n        color: rgba(0, 0, 0, 0.25);\n        background: #f5f5f5;\n        cursor: not-allowed;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
    return YearPanelComponent;
}());
export { YearPanelComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(YearPanelComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'year-panel',
                exportAs: 'yearPanel',
                templateUrl: 'year-panel.component.html',
                styles: [
                    // Support disabledDate
                    "\n      .ant-calendar-year-panel-cell-disabled .ant-calendar-year-panel-year,\n      .ant-calendar-year-panel-cell-disabled .ant-calendar-year-panel-year:hover {\n        color: rgba(0, 0, 0, 0.25);\n        background: #f5f5f5;\n        cursor: not-allowed;\n      }\n    "
                ]
            }]
    }], function () { return []; }, { locale: [{
            type: Input
        }], value: [{
            type: Input
        }], valueChange: [{
            type: Output
        }], disabledDate: [{
            type: Input
        }], decadePanelShow: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVhci1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2RhdGUtcGlja2VyLyIsInNvdXJjZXMiOlsibGliL3llYXIveWVhci1wYW5lbC5jb21wb25lbnQudHMiLCJsaWIveWVhci95ZWFyLXBhbmVsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUVOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7SUNXbkMsNkJBT0U7SUFIQSwwS0FBNkIsSUFBSyxHQUFFLHdCQUFrQixJQUFDO0lBR3ZELHlCQUFnQztJQUFBLFlBQXNCO0lBQUEsaUJBQUk7SUFDNUQsaUJBQUs7Ozs7SUFMSCx1REFBNEI7SUFFNUIsaURBQTZCO0lBRTFCLGVBQTRCO0lBQTVCLDJEQUE0QjtJQUFDLGVBQXNCO0lBQXRCLDRDQUFzQjs7O0lBUjFELDZCQUNFO0lBQUEsdUVBT0U7SUFFSixpQkFBSzs7OztJQVJELGVBQXFEO0lBQXJELG1DQUFxRCwwQ0FBQTs7QURUbkUsSUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFDO0FBQ2xCLElBQU0sT0FBTyxHQUFHLENBQUMsQ0FBQztBQUVsQjtJQTBDRTtRQW5CbUIsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO1FBSTVDLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQVk5RCxjQUFTLEdBQVcseUJBQXlCLENBQUM7SUFHL0IsQ0FBQztJQWJoQixzQkFBSSwyQ0FBVzthQUFmO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzlCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUkseUNBQVM7YUFBYjtZQUNFLE9B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YUFDRjs7a0JBRUUsS0FBSzs7a0JBRUwsS0FBSzs7a0JBQ0wsTUFBTTs7a0JBRU4sS0FBSzs7a0JBRUwsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ2FuZHlEYXRlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpDYWxlbmRhckkxOG5JbnRlcmZhY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5cclxuY29uc3QgTUFYX1JPVyA9IDQ7XHJcbmNvbnN0IE1BWF9DT0wgPSAzO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICd5ZWFyLXBhbmVsJyxcclxuICBleHBvcnRBczogJ3llYXJQYW5lbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICd5ZWFyLXBhbmVsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZXM6IFtcclxuICAgIC8vIFN1cHBvcnQgZGlzYWJsZWREYXRlXHJcbiAgICBgXHJcbiAgICAgIC5hbnQtY2FsZW5kYXIteWVhci1wYW5lbC1jZWxsLWRpc2FibGVkIC5hbnQtY2FsZW5kYXIteWVhci1wYW5lbC15ZWFyLFxyXG4gICAgICAuYW50LWNhbGVuZGFyLXllYXItcGFuZWwtY2VsbC1kaXNhYmxlZCAuYW50LWNhbGVuZGFyLXllYXItcGFuZWwteWVhcjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgWWVhclBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBsb2NhbGU6IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlO1xyXG5cclxuICBASW5wdXQoKSB2YWx1ZTogQ2FuZHlEYXRlO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpO1xyXG5cclxuICBASW5wdXQoKSBkaXNhYmxlZERhdGU6IChkYXRlOiBEYXRlKSA9PiBib29sZWFuO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgZGVjYWRlUGFuZWxTaG93ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBnZXQgY3VycmVudFllYXIoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLnZhbHVlLmdldFllYXIoKTtcclxuICB9XHJcbiAgZ2V0IHN0YXJ0WWVhcigpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHBhcnNlSW50KGAke3RoaXMuY3VycmVudFllYXIgLyAxMH1gLCAxMCkgKiAxMDtcclxuICB9XHJcbiAgZ2V0IGVuZFllYXIoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXJ0WWVhciArIDk7XHJcbiAgfVxyXG5cclxuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbnQtY2FsZW5kYXIteWVhci1wYW5lbCc7XHJcbiAgcGFuZWxZZWFyczogUGFuZWxZZWFyRGF0YVtdW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMudmFsdWUgfHwgY2hhbmdlcy5kaXNhYmxlZERhdGUpIHtcclxuICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByZXZpb3VzRGVjYWRlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5nb3RvWWVhcigtMTApO1xyXG4gIH1cclxuXHJcbiAgbmV4dERlY2FkZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZ290b1llYXIoMTApO1xyXG4gIH1cclxuXHJcbiAgdHJhY2tQYW5lbFllYXIoX2luZGV4OiBudW1iZXIsIHllYXJEYXRhOiBQYW5lbFllYXJEYXRhKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB5ZWFyRGF0YS5jb250ZW50O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXIoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy52YWx1ZSkge1xyXG4gICAgICB0aGlzLnBhbmVsWWVhcnMgPSB0aGlzLm1ha2VQYW5lbFllYXJzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBSZS1yZW5kZXIgcGFuZWwgY29udGVudCBieSB0aGUgaGVhZGVyJ3MgYnV0dG9ucyAoTk9URTogRG8gbm90IHRyeSB0byB0cmlnZ2VyIGZpbmFsIHZhbHVlIGNoYW5nZSlcclxuICBwcml2YXRlIGdvdG9ZZWFyKGFtb3VudDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZS5hZGRZZWFycyhhbW91bnQpO1xyXG4gICAgLy8gdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpOyAvLyBEbyBub3QgdHJpZ2dlciBmaW5hbCB2YWx1ZSBjaGFuZ2VcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNob29zZVllYXIoeWVhcjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZS5zZXRZZWFyKHllYXIpO1xyXG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbWFrZVBhbmVsWWVhcnMoKTogUGFuZWxZZWFyRGF0YVtdW10ge1xyXG4gICAgY29uc3QgeWVhcnM6IFBhbmVsWWVhckRhdGFbXVtdID0gW107XHJcbiAgICBjb25zdCBjdXJyZW50WWVhciA9IHRoaXMuY3VycmVudFllYXI7XHJcbiAgICBjb25zdCBzdGFydFllYXIgPSB0aGlzLnN0YXJ0WWVhcjtcclxuICAgIGNvbnN0IGVuZFllYXIgPSB0aGlzLmVuZFllYXI7XHJcbiAgICBjb25zdCBwcmV2aW91c1llYXIgPSBzdGFydFllYXIgLSAxO1xyXG4gICAgbGV0IGluZGV4ID0gMDtcclxuICAgIGZvciAobGV0IHJvd0luZGV4ID0gMDsgcm93SW5kZXggPCBNQVhfUk9XOyByb3dJbmRleCsrKSB7XHJcbiAgICAgIHllYXJzW3Jvd0luZGV4XSA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBjb2xJbmRleCA9IDA7IGNvbEluZGV4IDwgTUFYX0NPTDsgY29sSW5kZXgrKykge1xyXG4gICAgICAgIGNvbnN0IHllYXIgPSBwcmV2aW91c1llYXIgKyBpbmRleDtcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gU3RyaW5nKHllYXIpO1xyXG4gICAgICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5kaXNhYmxlZERhdGUgPyB0aGlzLmRpc2FibGVkRGF0ZSh0aGlzLnZhbHVlLnNldFllYXIoeWVhcikubmF0aXZlRGF0ZSkgOiBmYWxzZTtcclxuXHJcbiAgICAgICAgY29uc3QgY2VsbDogUGFuZWxZZWFyRGF0YSA9ICh5ZWFyc1tyb3dJbmRleF1bY29sSW5kZXhdID0ge1xyXG4gICAgICAgICAgZGlzYWJsZWQsXHJcbiAgICAgICAgICBjb250ZW50LFxyXG4gICAgICAgICAgeWVhcixcclxuICAgICAgICAgIHRpdGxlOiBjb250ZW50LFxyXG4gICAgICAgICAgaXNDdXJyZW50OiB5ZWFyID09PSBjdXJyZW50WWVhcixcclxuICAgICAgICAgIGlzTG93ZXJUaGFuU3RhcnQ6IHllYXIgPCBzdGFydFllYXIsXHJcbiAgICAgICAgICBpc0JpZ2dlclRoYW5FbmQ6IHllYXIgPiBlbmRZZWFyLFxyXG4gICAgICAgICAgY2xhc3NNYXA6IG51bGwsXHJcbiAgICAgICAgICBvbkNsaWNrOiBudWxsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNlbGwuY2xhc3NNYXAgPSB7XHJcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWNlbGxgXTogdHJ1ZSxcclxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tc2VsZWN0ZWQtY2VsbGBdOiBjZWxsLmlzQ3VycmVudCxcclxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tY2VsbC1kaXNhYmxlZGBdOiBkaXNhYmxlZCxcclxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbGFzdC1kZWNhZGUtY2VsbGBdOiBjZWxsLmlzTG93ZXJUaGFuU3RhcnQsXHJcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LW5leHQtZGVjYWRlLWNlbGxgXTogY2VsbC5pc0JpZ2dlclRoYW5FbmRcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAoY2VsbC5pc0xvd2VyVGhhblN0YXJ0KSB7XHJcbiAgICAgICAgICBjZWxsLm9uQ2xpY2sgPSAoKSA9PiB0aGlzLnByZXZpb3VzRGVjYWRlKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjZWxsLmlzQmlnZ2VyVGhhbkVuZCkge1xyXG4gICAgICAgICAgY2VsbC5vbkNsaWNrID0gKCkgPT4gdGhpcy5uZXh0RGVjYWRlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNlbGwub25DbGljayA9ICgpID0+IHRoaXMuY2hvb3NlWWVhcihjZWxsLnllYXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5kZXgrKztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHllYXJzO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQYW5lbFllYXJEYXRhIHtcclxuICBkaXNhYmxlZDogYm9vbGVhbjtcclxuICBjb250ZW50OiBzdHJpbmc7XHJcbiAgeWVhcjogbnVtYmVyO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgaXNDdXJyZW50OiBib29sZWFuO1xyXG4gIGlzTG93ZXJUaGFuU3RhcnQ6IGJvb2xlYW47XHJcbiAgaXNCaWdnZXJUaGFuRW5kOiBib29sZWFuO1xyXG4gIGNsYXNzTWFwOiBvYmplY3QgfCBudWxsO1xyXG4gIG9uQ2xpY2s6IFZvaWRGdW5jdGlvbiB8IG51bGw7XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cInt7IHByZWZpeENscyB9fVwiPlxyXG4gIDxkaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWhlYWRlclwiPlxyXG4gICAgICA8YVxyXG4gICAgICAgIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LXByZXYtZGVjYWRlLWJ0blwiXHJcbiAgICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgKGNsaWNrKT1cInByZXZpb3VzRGVjYWRlKClcIlxyXG4gICAgICAgIHRpdGxlPVwie3sgbG9jYWxlLnByZXZpb3VzRGVjYWRlIH19XCJcclxuICAgICAgPjwvYT5cclxuICAgICAgPGFcclxuICAgICAgICBjbGFzcz1cInt7IHByZWZpeENscyB9fS1kZWNhZGUtc2VsZWN0XCJcclxuICAgICAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgICAgICAoY2xpY2spPVwiZGVjYWRlUGFuZWxTaG93LmVtaXQoKVwiXHJcbiAgICAgICAgdGl0bGU9XCJ7eyBsb2NhbGUuZGVjYWRlU2VsZWN0IH19XCJcclxuICAgICAgPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWRlY2FkZS1zZWxlY3QtY29udGVudFwiPiB7eyBzdGFydFllYXIgfX0te3sgZW5kWWVhciB9fSA8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tZGVjYWRlLXNlbGVjdC1hcnJvd1wiPng8L3NwYW4+XHJcbiAgICAgIDwvYT5cclxuXHJcbiAgICAgIDxhXHJcbiAgICAgICAgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tbmV4dC1kZWNhZGUtYnRuXCJcclxuICAgICAgICAoY2xpY2spPVwibmV4dERlY2FkZSgpXCJcclxuICAgICAgICB0aXRsZT1cInt7IGxvY2FsZS5uZXh0RGVjYWRlIH19XCJcclxuICAgICAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgICAgPjwvYT5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInt7IHByZWZpeENscyB9fS1ib2R5XCI+XHJcbiAgICAgIDx0YWJsZSBjbGFzcz1cInt7IHByZWZpeENscyB9fS10YWJsZVwiIGNlbGxTcGFjaW5nPVwiMFwiIHJvbGU9XCJncmlkXCI+XHJcbiAgICAgICAgPHRib2R5IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LXRib2R5XCI+XHJcbiAgICAgICAgICA8dHIgKm5nRm9yPVwibGV0IHJvdyBvZiBwYW5lbFllYXJzXCIgcm9sZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgeWVhckNlbGwgb2Ygcm93OyB0cmFja0J5OiB0cmFja1BhbmVsWWVhclwiXHJcbiAgICAgICAgICAgICAgcm9sZT1cImdyaWRjZWxsXCJcclxuICAgICAgICAgICAgICB0aXRsZT1cInt7IHllYXJDZWxsLnRpdGxlIH19XCJcclxuICAgICAgICAgICAgICAoY2xpY2spPVwieWVhckNlbGwuZGlzYWJsZWQgPyBudWxsIDogeWVhckNlbGwub25DbGljaygpXCJcclxuICAgICAgICAgICAgICBbbmdDbGFzc109XCJ5ZWFyQ2VsbC5jbGFzc01hcFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8YSBjbGFzcz1cInt7IHByZWZpeENscyB9fS15ZWFyXCI+e3sgeWVhckNlbGwuY29udGVudCB9fTwvYT5cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC90YWJsZT5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19