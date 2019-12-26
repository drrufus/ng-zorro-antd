/**
 * @fileoverview added by tsickle
 * Generated from: lib/decade/decade-panel.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { CandyDate } from 'ng-zorro-antd/core';
/** @type {?} */
var MAX_ROW = 4;
/** @type {?} */
var MAX_COL = 3;
var DecadePanelComponent = /** @class */ (function () {
    function DecadePanelComponent() {
        this.valueChange = new EventEmitter();
        this.prefixCls = 'ant-calendar-decade-panel';
    }
    Object.defineProperty(DecadePanelComponent.prototype, "startYear", {
        get: /**
         * @return {?}
         */
        function () {
            return parseInt("" + this.value.getYear() / 100, 10) * 100;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DecadePanelComponent.prototype, "endYear", {
        get: /**
         * @return {?}
         */
        function () {
            return this.startYear + 99;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    DecadePanelComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.value) {
            this.render();
        }
    };
    /**
     * @return {?}
     */
    DecadePanelComponent.prototype.previousCentury = /**
     * @return {?}
     */
    function () {
        this.gotoYear(-100);
    };
    /**
     * @return {?}
     */
    DecadePanelComponent.prototype.nextCentury = /**
     * @return {?}
     */
    function () {
        this.gotoYear(100);
    };
    /**
     * @param {?} _index
     * @param {?} decadeData
     * @return {?}
     */
    DecadePanelComponent.prototype.trackPanelDecade = /**
     * @param {?} _index
     * @param {?} decadeData
     * @return {?}
     */
    function (_index, decadeData) {
        return decadeData.content;
    };
    /**
     * @private
     * @return {?}
     */
    DecadePanelComponent.prototype.render = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.value) {
            this.panelDecades = this.makePanelDecades();
        }
    };
    // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
    // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
    /**
     * @private
     * @param {?} amount
     * @return {?}
     */
    DecadePanelComponent.prototype.gotoYear = 
    // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
    /**
     * @private
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        this.value = this.value.addYears(amount);
        // this.valueChange.emit(this.value); // Do not try to trigger final value change
        this.render();
    };
    /**
     * @private
     * @param {?} startYear
     * @return {?}
     */
    DecadePanelComponent.prototype.chooseDecade = /**
     * @private
     * @param {?} startYear
     * @return {?}
     */
    function (startYear) {
        this.value = this.value.setYear(startYear);
        this.valueChange.emit(this.value);
    };
    /**
     * @private
     * @return {?}
     */
    DecadePanelComponent.prototype.makePanelDecades = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var decades = [];
        /** @type {?} */
        var currentYear = this.value.getYear();
        /** @type {?} */
        var startYear = this.startYear;
        /** @type {?} */
        var endYear = this.endYear;
        /** @type {?} */
        var previousYear = startYear - 10;
        /** @type {?} */
        var index = 0;
        for (var rowIndex = 0; rowIndex < MAX_ROW; rowIndex++) {
            decades[rowIndex] = [];
            var _loop_1 = function (colIndex) {
                var _a;
                /** @type {?} */
                var start = previousYear + index * 10;
                /** @type {?} */
                var end = previousYear + index * 10 + 9;
                /** @type {?} */
                var content = start + "-" + end;
                /** @type {?} */
                var cell = (decades[rowIndex][colIndex] = {
                    content: content,
                    title: content,
                    isCurrent: currentYear >= start && currentYear <= end,
                    isLowerThanStart: end < startYear,
                    isBiggerThanEnd: start > endYear,
                    classMap: null,
                    onClick: null
                });
                cell.classMap = (_a = {},
                    _a[this_1.prefixCls + "-cell"] = true,
                    _a[this_1.prefixCls + "-selected-cell"] = cell.isCurrent,
                    _a[this_1.prefixCls + "-last-century-cell"] = cell.isLowerThanStart,
                    _a[this_1.prefixCls + "-next-century-cell"] = cell.isBiggerThanEnd,
                    _a);
                if (cell.isLowerThanStart) {
                    cell.onClick = (/**
                     * @return {?}
                     */
                    function () { return _this.previousCentury(); });
                }
                else if (cell.isBiggerThanEnd) {
                    cell.onClick = (/**
                     * @return {?}
                     */
                    function () { return _this.nextCentury(); });
                }
                else {
                    cell.onClick = (/**
                     * @return {?}
                     */
                    function () { return _this.chooseDecade(start); });
                }
                index++;
            };
            var this_1 = this;
            for (var colIndex = 0; colIndex < MAX_COL; colIndex++) {
                _loop_1(colIndex);
            }
        }
        return decades;
    };
    DecadePanelComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    // tslint:disable-next-line:component-selector
                    selector: 'decade-panel',
                    exportAs: 'decadePanel',
                    template: "<div class=\"{{ prefixCls }}\">\r\n  <div class=\"{{ prefixCls }}-header\">\r\n    <a\r\n      class=\"{{ prefixCls }}-prev-century-btn\"\r\n      role=\"button\"\r\n      (click)=\"previousCentury()\"\r\n      title=\"{{ locale.previousCentury }}\"\r\n    ></a>\r\n\r\n    <div class=\"{{ prefixCls }}-century\">\r\n      {{ startYear }}-{{ endYear }}\r\n    </div>\r\n    <a\r\n      class=\"{{ prefixCls }}-next-century-btn\"\r\n      role=\"button\"\r\n      (click)=\"nextCentury()\"\r\n      title=\"{{ locale.nextCentury }}\"\r\n    ></a>\r\n  </div>\r\n  <div class=\"{{ prefixCls }}-body\">\r\n    <table class=\"{{ prefixCls }}-table\" cellSpacing=\"0\" role=\"grid\">\r\n      <tbody class=\"{{ prefixCls }}-tbody\">\r\n        <tr *ngFor=\"let row of panelDecades\" role=\"row\">\r\n          <td *ngFor=\"let cell of row; trackBy: trackPanelDecade\"\r\n            role=\"gridcell\"\r\n            title=\"{{ cell.title }}\"\r\n            (click)=\"cell.onClick()\"\r\n            [ngClass]=\"cell.classMap\"\r\n          >\r\n            <a class=\"{{ prefixCls }}-decade\">{{ cell.content }}</a>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>"
                }] }
    ];
    /** @nocollapse */
    DecadePanelComponent.ctorParameters = function () { return []; };
    DecadePanelComponent.propDecorators = {
        locale: [{ type: Input }],
        value: [{ type: Input }],
        valueChange: [{ type: Output }]
    };
    return DecadePanelComponent;
}());
export { DecadePanelComponent };
if (false) {
    /** @type {?} */
    DecadePanelComponent.prototype.locale;
    /** @type {?} */
    DecadePanelComponent.prototype.value;
    /** @type {?} */
    DecadePanelComponent.prototype.valueChange;
    /** @type {?} */
    DecadePanelComponent.prototype.prefixCls;
    /** @type {?} */
    DecadePanelComponent.prototype.panelDecades;
}
/**
 * @record
 */
export function PanelDecadeData() { }
if (false) {
    /** @type {?} */
    PanelDecadeData.prototype.content;
    /** @type {?} */
    PanelDecadeData.prototype.title;
    /** @type {?} */
    PanelDecadeData.prototype.isCurrent;
    /** @type {?} */
    PanelDecadeData.prototype.isLowerThanStart;
    /** @type {?} */
    PanelDecadeData.prototype.isBiggerThanEnd;
    /** @type {?|undefined} */
    PanelDecadeData.prototype.classMap;
    /** @type {?} */
    PanelDecadeData.prototype.onClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjYWRlLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvZGVjYWRlL2RlY2FkZS1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBRU4saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7SUFHekMsT0FBTyxHQUFHLENBQUM7O0lBQ1gsT0FBTyxHQUFHLENBQUM7QUFFakI7SUF3QkU7UUFabUIsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO1FBUy9ELGNBQVMsR0FBVywyQkFBMkIsQ0FBQztJQUdqQyxDQUFDO0lBVmhCLHNCQUFJLDJDQUFTOzs7O1FBQWI7WUFDRSxPQUFPLFFBQVEsQ0FBQyxLQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEdBQUcsR0FBSyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM3RCxDQUFDOzs7T0FBQTtJQUNELHNCQUFJLHlDQUFPOzs7O1FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQzdCLENBQUM7OztPQUFBOzs7OztJQU9ELDBDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7WUFDakIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2Y7SUFDSCxDQUFDOzs7O0lBRUQsOENBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCwwQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsUUFB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QSxDQUFDO2lCQUN6QztxQkFBTTtvQkFDTCxJQUFJLENBQUMsT0FBTzs7O29CQUFHLGNBQU0sT0FBQSxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUF4QixDQUF3QixDQUFBLENBQUM7aUJBQy9DO2dCQUVELEtBQUssRUFBRSxDQUFDOzs7WUE5QlYsS0FBSyxJQUFJLFFBQVEsR0FBRyxDQUFDLEVBQUUsUUFBUSxHQUFHLE9BQU8sRUFBRSxRQUFRLEVBQUU7d0JBQTVDLFFBQVE7YUErQmhCO1NBQ0Y7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOztnQkExR0YsU0FBUyxTQUFDO29CQUNULGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7b0JBRS9DLFFBQVEsRUFBRSxjQUFjO29CQUN4QixRQUFRLEVBQUUsYUFBYTtvQkFDdkIsK3JDQUEwQztpQkFDM0M7Ozs7O3lCQUVFLEtBQUs7d0JBRUwsS0FBSzs4QkFDTCxNQUFNOztJQStGVCwyQkFBQztDQUFBLEFBM0dELElBMkdDO1NBbkdZLG9CQUFvQjs7O0lBQy9CLHNDQUF5Qzs7SUFFekMscUNBQTBCOztJQUMxQiwyQ0FBK0Q7O0lBUy9ELHlDQUFnRDs7SUFDaEQsNENBQWtDOzs7OztBQXVGcEMscUNBUUM7OztJQVBDLGtDQUFnQjs7SUFDaEIsZ0NBQWM7O0lBQ2Qsb0NBQW1COztJQUNuQiwyQ0FBMEI7O0lBQzFCLDBDQUF5Qjs7SUFDekIsbUNBQXlCOztJQUN6QixrQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IENhbmR5RGF0ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuXHJcbmNvbnN0IE1BWF9ST1cgPSA0O1xyXG5jb25zdCBNQVhfQ09MID0gMztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnZGVjYWRlLXBhbmVsJyxcclxuICBleHBvcnRBczogJ2RlY2FkZVBhbmVsJyxcclxuICB0ZW1wbGF0ZVVybDogJ2RlY2FkZS1wYW5lbC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIERlY2FkZVBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBsb2NhbGU6IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlO1xyXG5cclxuICBASW5wdXQoKSB2YWx1ZTogQ2FuZHlEYXRlO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpO1xyXG5cclxuICBnZXQgc3RhcnRZZWFyKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gcGFyc2VJbnQoYCR7dGhpcy52YWx1ZS5nZXRZZWFyKCkgLyAxMDB9YCwgMTApICogMTAwO1xyXG4gIH1cclxuICBnZXQgZW5kWWVhcigpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhcnRZZWFyICsgOTk7XHJcbiAgfVxyXG5cclxuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbnQtY2FsZW5kYXItZGVjYWRlLXBhbmVsJztcclxuICBwYW5lbERlY2FkZXM6IFBhbmVsRGVjYWRlRGF0YVtdW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMudmFsdWUpIHtcclxuICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByZXZpb3VzQ2VudHVyeSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZ290b1llYXIoLTEwMCk7XHJcbiAgfVxyXG5cclxuICBuZXh0Q2VudHVyeSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZ290b1llYXIoMTAwKTtcclxuICB9XHJcblxyXG4gIHRyYWNrUGFuZWxEZWNhZGUoX2luZGV4OiBudW1iZXIsIGRlY2FkZURhdGE6IFBhbmVsRGVjYWRlRGF0YSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gZGVjYWRlRGF0YS5jb250ZW50O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXIoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy52YWx1ZSkge1xyXG4gICAgICB0aGlzLnBhbmVsRGVjYWRlcyA9IHRoaXMubWFrZVBhbmVsRGVjYWRlcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gUmUtcmVuZGVyIHBhbmVsIGNvbnRlbnQgYnkgdGhlIGhlYWRlcidzIGJ1dHRvbnMgKE5PVEU6IERvIG5vdCB0cnkgdG8gdHJpZ2dlciBmaW5hbCB2YWx1ZSBjaGFuZ2UpXHJcbiAgcHJpdmF0ZSBnb3RvWWVhcihhbW91bnQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUuYWRkWWVhcnMoYW1vdW50KTtcclxuICAgIC8vIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTsgLy8gRG8gbm90IHRyeSB0byB0cmlnZ2VyIGZpbmFsIHZhbHVlIGNoYW5nZVxyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hvb3NlRGVjYWRlKHN0YXJ0WWVhcjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZS5zZXRZZWFyKHN0YXJ0WWVhcik7XHJcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1ha2VQYW5lbERlY2FkZXMoKTogUGFuZWxEZWNhZGVEYXRhW11bXSB7XHJcbiAgICBjb25zdCBkZWNhZGVzOiBQYW5lbERlY2FkZURhdGFbXVtdID0gW107XHJcbiAgICBjb25zdCBjdXJyZW50WWVhciA9IHRoaXMudmFsdWUuZ2V0WWVhcigpO1xyXG4gICAgY29uc3Qgc3RhcnRZZWFyID0gdGhpcy5zdGFydFllYXI7XHJcbiAgICBjb25zdCBlbmRZZWFyID0gdGhpcy5lbmRZZWFyO1xyXG4gICAgY29uc3QgcHJldmlvdXNZZWFyID0gc3RhcnRZZWFyIC0gMTA7XHJcblxyXG4gICAgbGV0IGluZGV4ID0gMDtcclxuICAgIGZvciAobGV0IHJvd0luZGV4ID0gMDsgcm93SW5kZXggPCBNQVhfUk9XOyByb3dJbmRleCsrKSB7XHJcbiAgICAgIGRlY2FkZXNbcm93SW5kZXhdID0gW107XHJcbiAgICAgIGZvciAobGV0IGNvbEluZGV4ID0gMDsgY29sSW5kZXggPCBNQVhfQ09MOyBjb2xJbmRleCsrKSB7XHJcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBwcmV2aW91c1llYXIgKyBpbmRleCAqIDEwO1xyXG4gICAgICAgIGNvbnN0IGVuZCA9IHByZXZpb3VzWWVhciArIGluZGV4ICogMTAgKyA5O1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBgJHtzdGFydH0tJHtlbmR9YDtcclxuXHJcbiAgICAgICAgY29uc3QgY2VsbDogUGFuZWxEZWNhZGVEYXRhID0gKGRlY2FkZXNbcm93SW5kZXhdW2NvbEluZGV4XSA9IHtcclxuICAgICAgICAgIGNvbnRlbnQsXHJcbiAgICAgICAgICB0aXRsZTogY29udGVudCxcclxuICAgICAgICAgIGlzQ3VycmVudDogY3VycmVudFllYXIgPj0gc3RhcnQgJiYgY3VycmVudFllYXIgPD0gZW5kLFxyXG4gICAgICAgICAgaXNMb3dlclRoYW5TdGFydDogZW5kIDwgc3RhcnRZZWFyLFxyXG4gICAgICAgICAgaXNCaWdnZXJUaGFuRW5kOiBzdGFydCA+IGVuZFllYXIsXHJcbiAgICAgICAgICBjbGFzc01hcDogbnVsbCxcclxuICAgICAgICAgIG9uQ2xpY2s6IG51bGxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY2VsbC5jbGFzc01hcCA9IHtcclxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tY2VsbGBdOiB0cnVlLFxyXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1zZWxlY3RlZC1jZWxsYF06IGNlbGwuaXNDdXJyZW50LFxyXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1sYXN0LWNlbnR1cnktY2VsbGBdOiBjZWxsLmlzTG93ZXJUaGFuU3RhcnQsXHJcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LW5leHQtY2VudHVyeS1jZWxsYF06IGNlbGwuaXNCaWdnZXJUaGFuRW5kXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKGNlbGwuaXNMb3dlclRoYW5TdGFydCkge1xyXG4gICAgICAgICAgY2VsbC5vbkNsaWNrID0gKCkgPT4gdGhpcy5wcmV2aW91c0NlbnR1cnkoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGNlbGwuaXNCaWdnZXJUaGFuRW5kKSB7XHJcbiAgICAgICAgICBjZWxsLm9uQ2xpY2sgPSAoKSA9PiB0aGlzLm5leHRDZW50dXJ5KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNlbGwub25DbGljayA9ICgpID0+IHRoaXMuY2hvb3NlRGVjYWRlKHN0YXJ0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGluZGV4Kys7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBkZWNhZGVzO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQYW5lbERlY2FkZURhdGEge1xyXG4gIGNvbnRlbnQ6IHN0cmluZztcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGlzQ3VycmVudDogYm9vbGVhbjtcclxuICBpc0xvd2VyVGhhblN0YXJ0OiBib29sZWFuO1xyXG4gIGlzQmlnZ2VyVGhhbkVuZDogYm9vbGVhbjtcclxuICBjbGFzc01hcD86IG9iamVjdCB8IG51bGw7XHJcbiAgb25DbGljazogVm9pZEZ1bmN0aW9uIHwgbnVsbDtcclxufVxyXG4iXX0=