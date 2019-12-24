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
    i0.ɵɵlistener("click", function YearPanelComponent_tr_13_td_1_Template_td_click_0_listener($event) { const yearCell_r2307 = ctx.$implicit; return yearCell_r2307.disabled ? null : yearCell_r2307.onClick(); });
    i0.ɵɵelementStart(1, "a");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const yearCell_r2307 = ctx.$implicit;
    const ctx_r2306 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("title", yearCell_r2307.title);
    i0.ɵɵproperty("ngClass", yearCell_r2307.classMap);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("", ctx_r2306.prefixCls, "-year");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(yearCell_r2307.content);
} }
function YearPanelComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 3);
    i0.ɵɵtemplate(1, YearPanelComponent_tr_13_td_1_Template, 3, 6, "td", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r2305 = ctx.$implicit;
    const ctx_r2304 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", row_r2305)("ngForTrackBy", ctx_r2304.trackPanelYear);
} }
const MAX_ROW = 4;
const MAX_COL = 3;
export class YearPanelComponent {
    constructor() {
        this.valueChange = new EventEmitter();
        this.decadePanelShow = new EventEmitter();
        this.prefixCls = 'ant-calendar-year-panel';
    }
    get currentYear() {
        return this.value.getYear();
    }
    get startYear() {
        return parseInt(`${this.currentYear / 10}`, 10) * 10;
    }
    get endYear() {
        return this.startYear + 9;
    }
    ngOnChanges(changes) {
        if (changes.value || changes.disabledDate) {
            this.render();
        }
    }
    previousDecade() {
        this.gotoYear(-10);
    }
    nextDecade() {
        this.gotoYear(10);
    }
    trackPanelYear(_index, yearData) {
        return yearData.content;
    }
    render() {
        if (this.value) {
            this.panelYears = this.makePanelYears();
        }
    }
    // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
    gotoYear(amount) {
        this.value = this.value.addYears(amount);
        // this.valueChange.emit(this.value); // Do not trigger final value change
        this.render();
    }
    chooseYear(year) {
        this.value = this.value.setYear(year);
        this.valueChange.emit(this.value);
        this.render();
    }
    makePanelYears() {
        const years = [];
        const currentYear = this.currentYear;
        const startYear = this.startYear;
        const endYear = this.endYear;
        const previousYear = startYear - 1;
        let index = 0;
        for (let rowIndex = 0; rowIndex < MAX_ROW; rowIndex++) {
            years[rowIndex] = [];
            for (let colIndex = 0; colIndex < MAX_COL; colIndex++) {
                const year = previousYear + index;
                const content = String(year);
                const disabled = this.disabledDate ? this.disabledDate(this.value.setYear(year).nativeDate) : false;
                const cell = (years[rowIndex][colIndex] = {
                    disabled,
                    content,
                    year,
                    title: content,
                    isCurrent: year === currentYear,
                    isLowerThanStart: year < startYear,
                    isBiggerThanEnd: year > endYear,
                    classMap: null,
                    onClick: null
                });
                cell.classMap = {
                    [`${this.prefixCls}-cell`]: true,
                    [`${this.prefixCls}-selected-cell`]: cell.isCurrent,
                    [`${this.prefixCls}-cell-disabled`]: disabled,
                    [`${this.prefixCls}-last-decade-cell`]: cell.isLowerThanStart,
                    [`${this.prefixCls}-next-decade-cell`]: cell.isBiggerThanEnd
                };
                if (cell.isLowerThanStart) {
                    cell.onClick = () => this.previousDecade();
                }
                else if (cell.isBiggerThanEnd) {
                    cell.onClick = () => this.nextDecade();
                }
                else {
                    cell.onClick = () => this.chooseYear(cell.year);
                }
                index++;
            }
        }
        return years;
    }
}
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
                    `
      .ant-calendar-year-panel-cell-disabled .ant-calendar-year-panel-year,
      .ant-calendar-year-panel-cell-disabled .ant-calendar-year-panel-year:hover {
        color: rgba(0, 0, 0, 0.25);
        background: #f5f5f5;
        cursor: not-allowed;
      }
    `
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVhci1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2RhdGUtcGlja2VyLyIsInNvdXJjZXMiOlsibGliL3llYXIveWVhci1wYW5lbC5jb21wb25lbnQudHMiLCJsaWIveWVhci95ZWFyLXBhbmVsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUVOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7SUNXbkMsNkJBT0U7SUFIQSw0S0FBNkIsSUFBSyxHQUFFLHdCQUFrQixJQUFDO0lBR3ZELHlCQUFnQztJQUFBLFlBQXNCO0lBQUEsaUJBQUk7SUFDNUQsaUJBQUs7Ozs7SUFMSCx1REFBNEI7SUFFNUIsaURBQTZCO0lBRTFCLGVBQTRCO0lBQTVCLDJEQUE0QjtJQUFDLGVBQXNCO0lBQXRCLDRDQUFzQjs7O0lBUjFELDZCQUNFO0lBQUEsdUVBT0U7SUFFSixpQkFBSzs7OztJQVJELGVBQXFEO0lBQXJELG1DQUFxRCwwQ0FBQTs7QURUbkUsTUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFDO0FBQ2xCLE1BQU0sT0FBTyxHQUFHLENBQUMsQ0FBQztBQXFCbEIsTUFBTSxPQUFPLGtCQUFrQjtJQXVCN0I7UUFuQm1CLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUk1QyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFZOUQsY0FBUyxHQUFXLHlCQUF5QixDQUFDO0lBRy9CLENBQUM7SUFiaEIsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFDRCxJQUFJLFNBQVM7UUFDWCxPQUFP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bnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDYW5keURhdGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOekNhbGVuZGFySTE4bkludGVyZmFjZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcblxyXG5jb25zdCBNQVhfUk9XID0gNDtcclxuY29uc3QgTUFYX0NPTCA9IDM7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ3llYXItcGFuZWwnLFxyXG4gIGV4cG9ydEFzOiAneWVhclBhbmVsJyxcclxuICB0ZW1wbGF0ZVVybDogJ3llYXItcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlczogW1xyXG4gICAgLy8gU3VwcG9ydCBkaXNhYmxlZERhdGVcclxuICAgIGBcclxuICAgICAgLmFudC1jYWxlbmRhci15ZWFyLXBhbmVsLWNlbGwtZGlzYWJsZWQgLmFudC1jYWxlbmRhci15ZWFyLXBhbmVsLXllYXIsXHJcbiAgICAgIC5hbnQtY2FsZW5kYXIteWVhci1wYW5lbC1jZWxsLWRpc2FibGVkIC5hbnQtY2FsZW5kYXIteWVhci1wYW5lbC15ZWFyOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBZZWFyUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIGxvY2FsZTogTnpDYWxlbmRhckkxOG5JbnRlcmZhY2U7XHJcblxyXG4gIEBJbnB1dCgpIHZhbHVlOiBDYW5keURhdGU7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7XHJcblxyXG4gIEBJbnB1dCgpIGRpc2FibGVkRGF0ZTogKGRhdGU6IERhdGUpID0+IGJvb2xlYW47XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBkZWNhZGVQYW5lbFNob3cgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIGdldCBjdXJyZW50WWVhcigpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMudmFsdWUuZ2V0WWVhcigpO1xyXG4gIH1cclxuICBnZXQgc3RhcnRZZWFyKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gcGFyc2VJbnQoYCR7dGhpcy5jdXJyZW50WWVhciAvIDEwfWAsIDEwKSAqIDEwO1xyXG4gIH1cclxuICBnZXQgZW5kWWVhcigpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhcnRZZWFyICsgOTtcclxuICB9XHJcblxyXG4gIHByZWZpeENsczogc3RyaW5nID0gJ2FudC1jYWxlbmRhci15ZWFyLXBhbmVsJztcclxuICBwYW5lbFllYXJzOiBQYW5lbFllYXJEYXRhW11bXTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy52YWx1ZSB8fCBjaGFuZ2VzLmRpc2FibGVkRGF0ZSkge1xyXG4gICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJldmlvdXNEZWNhZGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmdvdG9ZZWFyKC0xMCk7XHJcbiAgfVxyXG5cclxuICBuZXh0RGVjYWRlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5nb3RvWWVhcigxMCk7XHJcbiAgfVxyXG5cclxuICB0cmFja1BhbmVsWWVhcihfaW5kZXg6IG51bWJlciwgeWVhckRhdGE6IFBhbmVsWWVhckRhdGEpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHllYXJEYXRhLmNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlcigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnZhbHVlKSB7XHJcbiAgICAgIHRoaXMucGFuZWxZZWFycyA9IHRoaXMubWFrZVBhbmVsWWVhcnMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFJlLXJlbmRlciBwYW5lbCBjb250ZW50IGJ5IHRoZSBoZWFkZXIncyBidXR0b25zIChOT1RFOiBEbyBub3QgdHJ5IHRvIHRyaWdnZXIgZmluYWwgdmFsdWUgY2hhbmdlKVxyXG4gIHByaXZhdGUgZ290b1llYXIoYW1vdW50OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlLmFkZFllYXJzKGFtb3VudCk7XHJcbiAgICAvLyB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7IC8vIERvIG5vdCB0cmlnZ2VyIGZpbmFsIHZhbHVlIGNoYW5nZVxyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hvb3NlWWVhcih5ZWFyOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlLnNldFllYXIoeWVhcik7XHJcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtYWtlUGFuZWxZZWFycygpOiBQYW5lbFllYXJEYXRhW11bXSB7XHJcbiAgICBjb25zdCB5ZWFyczogUGFuZWxZZWFyRGF0YVtdW10gPSBbXTtcclxuICAgIGNvbnN0IGN1cnJlbnRZZWFyID0gdGhpcy5jdXJyZW50WWVhcjtcclxuICAgIGNvbnN0IHN0YXJ0WWVhciA9IHRoaXMuc3RhcnRZZWFyO1xyXG4gICAgY29uc3QgZW5kWWVhciA9IHRoaXMuZW5kWWVhcjtcclxuICAgIGNvbnN0IHByZXZpb3VzWWVhciA9IHN0YXJ0WWVhciAtIDE7XHJcbiAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgZm9yIChsZXQgcm93SW5kZXggPSAwOyByb3dJbmRleCA8IE1BWF9ST1c7IHJvd0luZGV4KyspIHtcclxuICAgICAgeWVhcnNbcm93SW5kZXhdID0gW107XHJcbiAgICAgIGZvciAobGV0IGNvbEluZGV4ID0gMDsgY29sSW5kZXggPCBNQVhfQ09MOyBjb2xJbmRleCsrKSB7XHJcbiAgICAgICAgY29uc3QgeWVhciA9IHByZXZpb3VzWWVhciArIGluZGV4O1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBTdHJpbmcoeWVhcik7XHJcbiAgICAgICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkRGF0ZSA/IHRoaXMuZGlzYWJsZWREYXRlKHRoaXMudmFsdWUuc2V0WWVhcih5ZWFyKS5uYXRpdmVEYXRlKSA6IGZhbHNlO1xyXG5cclxuICAgICAgICBjb25zdCBjZWxsOiBQYW5lbFllYXJEYXRhID0gKHllYXJzW3Jvd0luZGV4XVtjb2xJbmRleF0gPSB7XHJcbiAgICAgICAgICBkaXNhYmxlZCxcclxuICAgICAgICAgIGNvbnRlbnQsXHJcbiAgICAgICAgICB5ZWFyLFxyXG4gICAgICAgICAgdGl0bGU6IGNvbnRlbnQsXHJcbiAgICAgICAgICBpc0N1cnJlbnQ6IHllYXIgPT09IGN1cnJlbnRZZWFyLFxyXG4gICAgICAgICAgaXNMb3dlclRoYW5TdGFydDogeWVhciA8IHN0YXJ0WWVhcixcclxuICAgICAgICAgIGlzQmlnZ2VyVGhhbkVuZDogeWVhciA+IGVuZFllYXIsXHJcbiAgICAgICAgICBjbGFzc01hcDogbnVsbCxcclxuICAgICAgICAgIG9uQ2xpY2s6IG51bGxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY2VsbC5jbGFzc01hcCA9IHtcclxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tY2VsbGBdOiB0cnVlLFxyXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1zZWxlY3RlZC1jZWxsYF06IGNlbGwuaXNDdXJyZW50LFxyXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1jZWxsLWRpc2FibGVkYF06IGRpc2FibGVkLFxyXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1sYXN0LWRlY2FkZS1jZWxsYF06IGNlbGwuaXNMb3dlclRoYW5TdGFydCxcclxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbmV4dC1kZWNhZGUtY2VsbGBdOiBjZWxsLmlzQmlnZ2VyVGhhbkVuZFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChjZWxsLmlzTG93ZXJUaGFuU3RhcnQpIHtcclxuICAgICAgICAgIGNlbGwub25DbGljayA9ICgpID0+IHRoaXMucHJldmlvdXNEZWNhZGUoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGNlbGwuaXNCaWdnZXJUaGFuRW5kKSB7XHJcbiAgICAgICAgICBjZWxsLm9uQ2xpY2sgPSAoKSA9PiB0aGlzLm5leHREZWNhZGUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY2VsbC5vbkNsaWNrID0gKCkgPT4gdGhpcy5jaG9vc2VZZWFyKGNlbGwueWVhcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbmRleCsrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4geWVhcnM7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBhbmVsWWVhckRhdGEge1xyXG4gIGRpc2FibGVkOiBib29sZWFuO1xyXG4gIGNvbnRlbnQ6IHN0cmluZztcclxuICB5ZWFyOiBudW1iZXI7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBpc0N1cnJlbnQ6IGJvb2xlYW47XHJcbiAgaXNMb3dlclRoYW5TdGFydDogYm9vbGVhbjtcclxuICBpc0JpZ2dlclRoYW5FbmQ6IGJvb2xlYW47XHJcbiAgY2xhc3NNYXA6IG9iamVjdCB8IG51bGw7XHJcbiAgb25DbGljazogVm9pZEZ1bmN0aW9uIHwgbnVsbDtcclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19XCI+XHJcbiAgPGRpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0taGVhZGVyXCI+XHJcbiAgICAgIDxhXHJcbiAgICAgICAgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tcHJldi1kZWNhZGUtYnRuXCJcclxuICAgICAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgICAgICAoY2xpY2spPVwicHJldmlvdXNEZWNhZGUoKVwiXHJcbiAgICAgICAgdGl0bGU9XCJ7eyBsb2NhbGUucHJldmlvdXNEZWNhZGUgfX1cIlxyXG4gICAgICA+PC9hPlxyXG4gICAgICA8YVxyXG4gICAgICAgIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWRlY2FkZS1zZWxlY3RcIlxyXG4gICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgIChjbGljayk9XCJkZWNhZGVQYW5lbFNob3cuZW1pdCgpXCJcclxuICAgICAgICB0aXRsZT1cInt7IGxvY2FsZS5kZWNhZGVTZWxlY3QgfX1cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tZGVjYWRlLXNlbGVjdC1jb250ZW50XCI+IHt7IHN0YXJ0WWVhciB9fS17eyBlbmRZZWFyIH19IDwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cInt7IHByZWZpeENscyB9fS1kZWNhZGUtc2VsZWN0LWFycm93XCI+eDwvc3Bhbj5cclxuICAgICAgPC9hPlxyXG5cclxuICAgICAgPGFcclxuICAgICAgICBjbGFzcz1cInt7IHByZWZpeENscyB9fS1uZXh0LWRlY2FkZS1idG5cIlxyXG4gICAgICAgIChjbGljayk9XCJuZXh0RGVjYWRlKClcIlxyXG4gICAgICAgIHRpdGxlPVwie3sgbG9jYWxlLm5leHREZWNhZGUgfX1cIlxyXG4gICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICA+PC9hPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWJvZHlcIj5cclxuICAgICAgPHRhYmxlIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LXRhYmxlXCIgY2VsbFNwYWNpbmc9XCIwXCIgcm9sZT1cImdyaWRcIj5cclxuICAgICAgICA8dGJvZHkgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tdGJvZHlcIj5cclxuICAgICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgcm93IG9mIHBhbmVsWWVhcnNcIiByb2xlPVwicm93XCI+XHJcbiAgICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICAgICpuZ0Zvcj1cImxldCB5ZWFyQ2VsbCBvZiByb3c7IHRyYWNrQnk6IHRyYWNrUGFuZWxZZWFyXCJcclxuICAgICAgICAgICAgICByb2xlPVwiZ3JpZGNlbGxcIlxyXG4gICAgICAgICAgICAgIHRpdGxlPVwie3sgeWVhckNlbGwudGl0bGUgfX1cIlxyXG4gICAgICAgICAgICAgIChjbGljayk9XCJ5ZWFyQ2VsbC5kaXNhYmxlZCA/IG51bGwgOiB5ZWFyQ2VsbC5vbkNsaWNrKClcIlxyXG4gICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInllYXJDZWxsLmNsYXNzTWFwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LXllYXJcIj57eyB5ZWFyQ2VsbC5jb250ZW50IH19PC9hPlxyXG4gICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=