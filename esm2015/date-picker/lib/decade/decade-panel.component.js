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
function DecadePanelComponent_tr_9_td_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 5);
    i0.ɵɵlistener("click", function DecadePanelComponent_tr_9_td_1_Template_td_click_0_listener($event) { const cell_r2252 = ctx.$implicit; return cell_r2252.onClick(); });
    i0.ɵɵelementStart(1, "a");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const cell_r2252 = ctx.$implicit;
    const ctx_r2251 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("title", cell_r2252.title);
    i0.ɵɵproperty("ngClass", cell_r2252.classMap);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("", ctx_r2251.prefixCls, "-decade");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(cell_r2252.content);
} }
function DecadePanelComponent_tr_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 3);
    i0.ɵɵtemplate(1, DecadePanelComponent_tr_9_td_1_Template, 3, 6, "td", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r2250 = ctx.$implicit;
    const ctx_r2249 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", row_r2250)("ngForTrackBy", ctx_r2249.trackPanelDecade);
} }
const MAX_ROW = 4;
const MAX_COL = 3;
export class DecadePanelComponent {
    constructor() {
        this.valueChange = new EventEmitter();
        this.prefixCls = 'ant-calendar-decade-panel';
    }
    get startYear() {
        return parseInt(`${this.value.getYear() / 100}`, 10) * 100;
    }
    get endYear() {
        return this.startYear + 99;
    }
    ngOnChanges(changes) {
        if (changes.value) {
            this.render();
        }
    }
    previousCentury() {
        this.gotoYear(-100);
    }
    nextCentury() {
        this.gotoYear(100);
    }
    trackPanelDecade(_index, decadeData) {
        return decadeData.content;
    }
    render() {
        if (this.value) {
            this.panelDecades = this.makePanelDecades();
        }
    }
    // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
    gotoYear(amount) {
        this.value = this.value.addYears(amount);
        // this.valueChange.emit(this.value); // Do not try to trigger final value change
        this.render();
    }
    chooseDecade(startYear) {
        this.value = this.value.setYear(startYear);
        this.valueChange.emit(this.value);
    }
    makePanelDecades() {
        const decades = [];
        const currentYear = this.value.getYear();
        const startYear = this.startYear;
        const endYear = this.endYear;
        const previousYear = startYear - 10;
        let index = 0;
        for (let rowIndex = 0; rowIndex < MAX_ROW; rowIndex++) {
            decades[rowIndex] = [];
            for (let colIndex = 0; colIndex < MAX_COL; colIndex++) {
                const start = previousYear + index * 10;
                const end = previousYear + index * 10 + 9;
                const content = `${start}-${end}`;
                const cell = (decades[rowIndex][colIndex] = {
                    content,
                    title: content,
                    isCurrent: currentYear >= start && currentYear <= end,
                    isLowerThanStart: end < startYear,
                    isBiggerThanEnd: start > endYear,
                    classMap: null,
                    onClick: null
                });
                cell.classMap = {
                    [`${this.prefixCls}-cell`]: true,
                    [`${this.prefixCls}-selected-cell`]: cell.isCurrent,
                    [`${this.prefixCls}-last-century-cell`]: cell.isLowerThanStart,
                    [`${this.prefixCls}-next-century-cell`]: cell.isBiggerThanEnd
                };
                if (cell.isLowerThanStart) {
                    cell.onClick = () => this.previousCentury();
                }
                else if (cell.isBiggerThanEnd) {
                    cell.onClick = () => this.nextCentury();
                }
                else {
                    cell.onClick = () => this.chooseDecade(start);
                }
                index++;
            }
        }
        return decades;
    }
}
/** @nocollapse */ DecadePanelComponent.ɵfac = function DecadePanelComponent_Factory(t) { return new (t || DecadePanelComponent)(); };
/** @nocollapse */ DecadePanelComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DecadePanelComponent, selectors: [["decade-panel"]], inputs: { locale: "locale", value: "value" }, outputs: { valueChange: "valueChange" }, exportAs: ["decadePanel"], features: [i0.ɵɵNgOnChangesFeature()], decls: 10, vars: 29, consts: [["role", "button", 3, "title", "click"], ["cellSpacing", "0", "role", "grid"], ["role", "row", 4, "ngFor", "ngForOf"], ["role", "row"], ["role", "gridcell", 3, "title", "ngClass", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "gridcell", 3, "title", "ngClass", "click"]], template: function DecadePanelComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelementStart(1, "div");
        i0.ɵɵelementStart(2, "a", 0);
        i0.ɵɵlistener("click", function DecadePanelComponent_Template_a_click_2_listener($event) { return ctx.previousCentury(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div");
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "a", 0);
        i0.ɵɵlistener("click", function DecadePanelComponent_Template_a_click_5_listener($event) { return ctx.nextCentury(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div");
        i0.ɵɵelementStart(7, "table", 1);
        i0.ɵɵelementStart(8, "tbody");
        i0.ɵɵtemplate(9, DecadePanelComponent_tr_9_Template, 2, 2, "tr", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMap(ctx.prefixCls);
        i0.ɵɵadvance(1);
        i0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-header");
        i0.ɵɵadvance(1);
        i0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-prev-century-btn");
        i0.ɵɵpropertyInterpolate("title", ctx.locale.previousCentury);
        i0.ɵɵadvance(1);
        i0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-century");
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate2("", ctx.startYear, "-", ctx.endYear, "");
        i0.ɵɵadvance(1);
        i0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-next-century-btn");
        i0.ɵɵpropertyInterpolate("title", ctx.locale.nextCentury);
        i0.ɵɵadvance(1);
        i0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-body");
        i0.ɵɵadvance(1);
        i0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-table");
        i0.ɵɵadvance(1);
        i0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-tbody");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.panelDecades);
    } }, directives: [i1.NgForOf, i1.NgClass], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DecadePanelComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'decade-panel',
                exportAs: 'decadePanel',
                templateUrl: 'decade-panel.component.html'
            }]
    }], function () { return []; }, { locale: [{
            type: Input
        }], value: [{
            type: Input
        }], valueChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjYWRlLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvZGVjYWRlL2RlY2FkZS1wYW5lbC5jb21wb25lbnQudHMiLCJsaWIvZGVjYWRlL2RlY2FkZS1wYW5lbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFFTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7O0lDRXJDLDZCQU9FO0lBSEEsK0lBQVMsb0JBQWMsSUFBQztJQUd4Qix5QkFBa0M7SUFBQSxZQUFrQjtJQUFBLGlCQUFJO0lBQzFELGlCQUFLOzs7O0lBTEgsbURBQXdCO0lBRXhCLDZDQUF5QjtJQUV0QixlQUE4QjtJQUE5Qiw2REFBOEI7SUFBQyxlQUFrQjtJQUFsQix3Q0FBa0I7OztJQVJ4RCw2QkFDRTtJQUFBLHdFQU9FO0lBRUosaUJBQUs7Ozs7SUFSRCxlQUFtRDtJQUFuRCxtQ0FBbUQsNENBQUE7O0FEQS9ELE1BQU0sT0FBTyxHQUFHLENBQUMsQ0FBQztBQUNsQixNQUFNLE9BQU8sR0FBRyxDQUFDLENBQUM7QUFVbEIsTUFBTSxPQUFPLG9CQUFvQjtJQWdCL0I7UUFabUIsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO1FBUy9ELGNBQVMsR0FBVywyQkFBMkIsQ0FBQztJQUdqQyxDQUFDO0lBVmhCLElBQUksU0FBUztRQUNYLE9BQU8sUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsR0FBRyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDN0QsQ0FBQztJQUNELElBQUks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NkI7UUFBN0IsOERBQTZCO1FBRWhFLGVBQXdDO1FBQXhDLGlFQUF3QztRQUd4Qyx5REFBZ0M7UUFHL0IsZUFBNEI7UUFBNUIscURBQTRCO1FBQ3hCLGVBQTZCO1FBQTdCLHNEQUE2QjtRQUMzQixlQUE2QjtRQUE3QixzREFBNkI7UUFDOUIsZUFBZ0M7UUFBaEMsMENBQWdDOztrRERhL0Isb0JBQW9CO2NBUmhDLFNBQVM7ZUFBQztnQkFDVCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLDhDQUE4QztnQkFDOUMsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixXQUFXLEVBQUUsNkJBQTZCO2FBQzNDOztrQkFFRSxLQUFLOztrQkFFTCxLQUFLOztrQkFDTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDYW5keURhdGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOekNhbGVuZGFySTE4bkludGVyZmFjZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcblxyXG5jb25zdCBNQVhfUk9XID0gNDtcclxuY29uc3QgTUFYX0NPTCA9IDM7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2RlY2FkZS1wYW5lbCcsXHJcbiAgZXhwb3J0QXM6ICdkZWNhZGVQYW5lbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICdkZWNhZGUtcGFuZWwuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEZWNhZGVQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgbG9jYWxlOiBOekNhbGVuZGFySTE4bkludGVyZmFjZTtcclxuXHJcbiAgQElucHV0KCkgdmFsdWU6IENhbmR5RGF0ZTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmR5RGF0ZT4oKTtcclxuXHJcbiAgZ2V0IHN0YXJ0WWVhcigpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHBhcnNlSW50KGAke3RoaXMudmFsdWUuZ2V0WWVhcigpIC8gMTAwfWAsIDEwKSAqIDEwMDtcclxuICB9XHJcbiAgZ2V0IGVuZFllYXIoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXJ0WWVhciArIDk5O1xyXG4gIH1cclxuXHJcbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW50LWNhbGVuZGFyLWRlY2FkZS1wYW5lbCc7XHJcbiAgcGFuZWxEZWNhZGVzOiBQYW5lbERlY2FkZURhdGFbXVtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLnZhbHVlKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcmV2aW91c0NlbnR1cnkoKTogdm9pZCB7XHJcbiAgICB0aGlzLmdvdG9ZZWFyKC0xMDApO1xyXG4gIH1cclxuXHJcbiAgbmV4dENlbnR1cnkoKTogdm9pZCB7XHJcbiAgICB0aGlzLmdvdG9ZZWFyKDEwMCk7XHJcbiAgfVxyXG5cclxuICB0cmFja1BhbmVsRGVjYWRlKF9pbmRleDogbnVtYmVyLCBkZWNhZGVEYXRhOiBQYW5lbERlY2FkZURhdGEpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGRlY2FkZURhdGEuY29udGVudDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVuZGVyKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudmFsdWUpIHtcclxuICAgICAgdGhpcy5wYW5lbERlY2FkZXMgPSB0aGlzLm1ha2VQYW5lbERlY2FkZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFJlLXJlbmRlciBwYW5lbCBjb250ZW50IGJ5IHRoZSBoZWFkZXIncyBidXR0b25zIChOT1RFOiBEbyBub3QgdHJ5IHRvIHRyaWdnZXIgZmluYWwgdmFsdWUgY2hhbmdlKVxyXG4gIHByaXZhdGUgZ290b1llYXIoYW1vdW50OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlLmFkZFllYXJzKGFtb3VudCk7XHJcbiAgICAvLyB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7IC8vIERvIG5vdCB0cnkgdG8gdHJpZ2dlciBmaW5hbCB2YWx1ZSBjaGFuZ2VcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNob29zZURlY2FkZShzdGFydFllYXI6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUuc2V0WWVhcihzdGFydFllYXIpO1xyXG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtYWtlUGFuZWxEZWNhZGVzKCk6IFBhbmVsRGVjYWRlRGF0YVtdW10ge1xyXG4gICAgY29uc3QgZGVjYWRlczogUGFuZWxEZWNhZGVEYXRhW11bXSA9IFtdO1xyXG4gICAgY29uc3QgY3VycmVudFllYXIgPSB0aGlzLnZhbHVlLmdldFllYXIoKTtcclxuICAgIGNvbnN0IHN0YXJ0WWVhciA9IHRoaXMuc3RhcnRZZWFyO1xyXG4gICAgY29uc3QgZW5kWWVhciA9IHRoaXMuZW5kWWVhcjtcclxuICAgIGNvbnN0IHByZXZpb3VzWWVhciA9IHN0YXJ0WWVhciAtIDEwO1xyXG5cclxuICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICBmb3IgKGxldCByb3dJbmRleCA9IDA7IHJvd0luZGV4IDwgTUFYX1JPVzsgcm93SW5kZXgrKykge1xyXG4gICAgICBkZWNhZGVzW3Jvd0luZGV4XSA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBjb2xJbmRleCA9IDA7IGNvbEluZGV4IDwgTUFYX0NPTDsgY29sSW5kZXgrKykge1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gcHJldmlvdXNZZWFyICsgaW5kZXggKiAxMDtcclxuICAgICAgICBjb25zdCBlbmQgPSBwcmV2aW91c1llYXIgKyBpbmRleCAqIDEwICsgOTtcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gYCR7c3RhcnR9LSR7ZW5kfWA7XHJcblxyXG4gICAgICAgIGNvbnN0IGNlbGw6IFBhbmVsRGVjYWRlRGF0YSA9IChkZWNhZGVzW3Jvd0luZGV4XVtjb2xJbmRleF0gPSB7XHJcbiAgICAgICAgICBjb250ZW50LFxyXG4gICAgICAgICAgdGl0bGU6IGNvbnRlbnQsXHJcbiAgICAgICAgICBpc0N1cnJlbnQ6IGN1cnJlbnRZZWFyID49IHN0YXJ0ICYmIGN1cnJlbnRZZWFyIDw9IGVuZCxcclxuICAgICAgICAgIGlzTG93ZXJUaGFuU3RhcnQ6IGVuZCA8IHN0YXJ0WWVhcixcclxuICAgICAgICAgIGlzQmlnZ2VyVGhhbkVuZDogc3RhcnQgPiBlbmRZZWFyLFxyXG4gICAgICAgICAgY2xhc3NNYXA6IG51bGwsXHJcbiAgICAgICAgICBvbkNsaWNrOiBudWxsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNlbGwuY2xhc3NNYXAgPSB7XHJcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWNlbGxgXTogdHJ1ZSxcclxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tc2VsZWN0ZWQtY2VsbGBdOiBjZWxsLmlzQ3VycmVudCxcclxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbGFzdC1jZW50dXJ5LWNlbGxgXTogY2VsbC5pc0xvd2VyVGhhblN0YXJ0LFxyXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1uZXh0LWNlbnR1cnktY2VsbGBdOiBjZWxsLmlzQmlnZ2VyVGhhbkVuZFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChjZWxsLmlzTG93ZXJUaGFuU3RhcnQpIHtcclxuICAgICAgICAgIGNlbGwub25DbGljayA9ICgpID0+IHRoaXMucHJldmlvdXNDZW50dXJ5KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjZWxsLmlzQmlnZ2VyVGhhbkVuZCkge1xyXG4gICAgICAgICAgY2VsbC5vbkNsaWNrID0gKCkgPT4gdGhpcy5uZXh0Q2VudHVyeSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjZWxsLm9uQ2xpY2sgPSAoKSA9PiB0aGlzLmNob29zZURlY2FkZShzdGFydCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbmRleCsrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGVjYWRlcztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGFuZWxEZWNhZGVEYXRhIHtcclxuICBjb250ZW50OiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBpc0N1cnJlbnQ6IGJvb2xlYW47XHJcbiAgaXNMb3dlclRoYW5TdGFydDogYm9vbGVhbjtcclxuICBpc0JpZ2dlclRoYW5FbmQ6IGJvb2xlYW47XHJcbiAgY2xhc3NNYXA/OiBvYmplY3QgfCBudWxsO1xyXG4gIG9uQ2xpY2s6IFZvaWRGdW5jdGlvbiB8IG51bGw7XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cInt7IHByZWZpeENscyB9fVwiPlxyXG4gIDxkaXYgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0taGVhZGVyXCI+XHJcbiAgICA8YVxyXG4gICAgICBjbGFzcz1cInt7IHByZWZpeENscyB9fS1wcmV2LWNlbnR1cnktYnRuXCJcclxuICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgIChjbGljayk9XCJwcmV2aW91c0NlbnR1cnkoKVwiXHJcbiAgICAgIHRpdGxlPVwie3sgbG9jYWxlLnByZXZpb3VzQ2VudHVyeSB9fVwiXHJcbiAgICA+PC9hPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tY2VudHVyeVwiPnt7IHN0YXJ0WWVhciB9fS17eyBlbmRZZWFyIH19PC9kaXY+XHJcbiAgICA8YVxyXG4gICAgICBjbGFzcz1cInt7IHByZWZpeENscyB9fS1uZXh0LWNlbnR1cnktYnRuXCJcclxuICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgIChjbGljayk9XCJuZXh0Q2VudHVyeSgpXCJcclxuICAgICAgdGl0bGU9XCJ7eyBsb2NhbGUubmV4dENlbnR1cnkgfX1cIlxyXG4gICAgPjwvYT5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWJvZHlcIj5cclxuICAgIDx0YWJsZSBjbGFzcz1cInt7IHByZWZpeENscyB9fS10YWJsZVwiIGNlbGxTcGFjaW5nPVwiMFwiIHJvbGU9XCJncmlkXCI+XHJcbiAgICAgIDx0Ym9keSBjbGFzcz1cInt7IHByZWZpeENscyB9fS10Ym9keVwiPlxyXG4gICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgcm93IG9mIHBhbmVsRGVjYWRlc1wiIHJvbGU9XCJyb3dcIj5cclxuICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgY2VsbCBvZiByb3c7IHRyYWNrQnk6IHRyYWNrUGFuZWxEZWNhZGVcIlxyXG4gICAgICAgICAgICByb2xlPVwiZ3JpZGNlbGxcIlxyXG4gICAgICAgICAgICB0aXRsZT1cInt7IGNlbGwudGl0bGUgfX1cIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwiY2VsbC5vbkNsaWNrKClcIlxyXG4gICAgICAgICAgICBbbmdDbGFzc109XCJjZWxsLmNsYXNzTWFwXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tZGVjYWRlXCI+e3sgY2VsbC5jb250ZW50IH19PC9hPlxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICA8L3Rib2R5PlxyXG4gICAgPC90YWJsZT5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==