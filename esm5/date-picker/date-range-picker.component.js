/**
 * @fileoverview added by tsickle
 * Generated from: date-range-picker.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { toBoolean, valueFunctionProp, InputBoolean, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { DateHelperService, NzI18nService } from 'ng-zorro-antd/i18n';
import { AbstractPickerComponent } from './abstract-picker.component';
var DateRangePickerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DateRangePickerComponent, _super);
    function DateRangePickerComponent(i18n, cdr, dateHelper, noAnimation) {
        var _this = _super.call(this, i18n, cdr, dateHelper, noAnimation) || this;
        _this.showWeek = false; // Should show as week picker
        _this.nzShowToday = true;
        _this.nzOnPanelChange = new EventEmitter();
        _this.nzOnCalendarChange = new EventEmitter();
        _this.nzOnOk = new EventEmitter();
        return _this;
    }
    Object.defineProperty(DateRangePickerComponent.prototype, "nzShowTime", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showTime;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showTime = typeof value === 'object' ? value : toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateRangePickerComponent.prototype, "realShowToday", {
        get: /**
         * @return {?}
         */
        function () {
            // Range not support nzShowToday currently
            return !this.isRange && this.nzShowToday;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DateRangePickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnInit.call(this);
        // Default format when it's empty
        if (!this.nzFormat) {
            if (this.showWeek) {
                this.nzFormat = this.dateHelper.relyOnDatePipe ? 'yyyy-ww' : 'YYYY-WW'; // Format for week
            }
            else {
                if (this.dateHelper.relyOnDatePipe) {
                    this.nzFormat = this.nzShowTime ? 'yyyy-MM-dd HH:mm:ss' : 'yyyy-MM-dd';
                }
                else {
                    this.nzFormat = this.nzShowTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD';
                }
            }
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    DateRangePickerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        if (changes.nzRenderExtraFooter) {
            this.extraFooter = valueFunctionProp(this.nzRenderExtraFooter);
        }
        if (changes.nzShowTime || changes.nzStyle) {
            this.setFixedPickerStyle();
        }
    };
    /**
     * If user press 'Enter' in input box or `nzShowTime` is false, overlay will close.
     */
    /**
     * If user press 'Enter' in input box or `nzShowTime` is false, overlay will close.
     * @param {?} value
     * @param {?=} isEnter
     * @return {?}
     */
    DateRangePickerComponent.prototype.onValueChange = /**
     * If user press 'Enter' in input box or `nzShowTime` is false, overlay will close.
     * @param {?} value
     * @param {?=} isEnter
     * @return {?}
     */
    function (value, isEnter) {
        if (isEnter === void 0) { isEnter = false; }
        _super.prototype.onValueChange.call(this, value);
        if (!this.nzShowTime || isEnter) {
            this.closeOverlay();
        }
    };
    // Emit nzOnCalendarChange when select date by nz-range-picker
    // Emit nzOnCalendarChange when select date by nz-range-picker
    /**
     * @param {?} value
     * @return {?}
     */
    DateRangePickerComponent.prototype.onCalendarChange = 
    // Emit nzOnCalendarChange when select date by nz-range-picker
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.isRange) {
            /** @type {?} */
            var rangeValue = value.map((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.nativeDate; }));
            this.nzOnCalendarChange.emit(rangeValue);
        }
    };
    // Emitted when done with date selecting
    // Emitted when done with date selecting
    /**
     * @return {?}
     */
    DateRangePickerComponent.prototype.onResultOk = 
    // Emitted when done with date selecting
    /**
     * @return {?}
     */
    function () {
        if (this.isRange) {
            /** @type {?} */
            var value = (/** @type {?} */ (this.nzValue));
            if (value.length) {
                this.nzOnOk.emit([value[0].nativeDate, value[1].nativeDate]);
            }
            else {
                this.nzOnOk.emit([]);
            }
        }
        else {
            if (this.nzValue) {
                this.nzOnOk.emit(((/** @type {?} */ (this.nzValue))).nativeDate);
            }
            else {
                this.nzOnOk.emit(null);
            }
        }
        this.closeOverlay();
    };
    /**
     * @param {?} open
     * @return {?}
     */
    DateRangePickerComponent.prototype.onOpenChange = /**
     * @param {?} open
     * @return {?}
     */
    function (open) {
        this.nzOnOpenChange.emit(open);
    };
    // Setup fixed style for picker
    // Setup fixed style for picker
    /**
     * @private
     * @return {?}
     */
    DateRangePickerComponent.prototype.setFixedPickerStyle = 
    // Setup fixed style for picker
    /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var showTimeFixes = {};
        if (this.nzShowTime) {
            showTimeFixes.width = this.isRange ? '350px' : '195px';
        }
        this.pickerStyle = tslib_1.__assign({}, showTimeFixes, this.nzStyle);
    };
    DateRangePickerComponent.decorators = [
        { type: Component, args: [{
                    template: "" // Just for rollup
                }] }
    ];
    /** @nocollapse */
    DateRangePickerComponent.ctorParameters = function () { return [
        { type: NzI18nService },
        { type: ChangeDetectorRef },
        { type: DateHelperService },
        { type: NzNoAnimationDirective }
    ]; };
    DateRangePickerComponent.propDecorators = {
        nzDateRender: [{ type: Input }],
        nzDisabledTime: [{ type: Input }],
        nzRenderExtraFooter: [{ type: Input }],
        nzShowToday: [{ type: Input }],
        nzMode: [{ type: Input }],
        nzRanges: [{ type: Input }],
        nzOnPanelChange: [{ type: Output }],
        nzOnCalendarChange: [{ type: Output }],
        nzShowTime: [{ type: Input }],
        nzOnOk: [{ type: Output }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], DateRangePickerComponent.prototype, "nzShowToday", void 0);
    return DateRangePickerComponent;
}(AbstractPickerComponent));
export { DateRangePickerComponent };
if (false) {
    /** @type {?} */
    DateRangePickerComponent.prototype.showWeek;
    /** @type {?} */
    DateRangePickerComponent.prototype.nzDateRender;
    /** @type {?} */
    DateRangePickerComponent.prototype.nzDisabledTime;
    /** @type {?} */
    DateRangePickerComponent.prototype.nzRenderExtraFooter;
    /** @type {?} */
    DateRangePickerComponent.prototype.nzShowToday;
    /** @type {?} */
    DateRangePickerComponent.prototype.nzMode;
    /** @type {?} */
    DateRangePickerComponent.prototype.nzRanges;
    /** @type {?} */
    DateRangePickerComponent.prototype.nzOnPanelChange;
    /** @type {?} */
    DateRangePickerComponent.prototype.nzOnCalendarChange;
    /**
     * @type {?}
     * @private
     */
    DateRangePickerComponent.prototype._showTime;
    /** @type {?} */
    DateRangePickerComponent.prototype.nzOnOk;
    /** @type {?} */
    DateRangePickerComponent.prototype.pickerStyle;
    /** @type {?} */
    DateRangePickerComponent.prototype.extraFooter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9kYXRlLXBpY2tlci8iLCJzb3VyY2VzIjpbImRhdGUtcmFuZ2UtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBR1AsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUNMLFNBQVMsRUFDVCxpQkFBaUIsRUFHakIsWUFBWSxFQUNaLHNCQUFzQixFQUN2QixNQUFNLG9CQUFvQixDQUFDO0FBQzVCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV0RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUd0RTtJQUc4QyxvREFBdUI7SUE4Qm5FLGtDQUNFLElBQW1CLEVBQ25CLEdBQXNCLEVBQ3RCLFVBQTZCLEVBQzdCLFdBQW9DO1FBSnRDLFlBTUUsa0JBQU0sSUFBSSxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsV0FBVyxDQUFDLFNBQzFDO1FBcENELGNBQVEsR0FBWSxLQUFLLENBQUMsQ0FBQyw2QkFBNkI7UUFLL0IsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFHbEMscUJBQWUsR0FBRyxJQUFJLFlBQVksRUFBMkIsQ0FBQztRQUM5RCx3QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBVWhELFlBQU0sR0FBRyxJQUFJLFlBQVksRUFBeUIsQ0FBQzs7SUFpQnRFLENBQUM7SUF4QkQsc0JBQWEsZ0RBQVU7Ozs7UUFBdkI7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsQ0FBQzs7Ozs7UUFDRCxVQUFlLEtBQXVCO1lBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4RSxDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLG1EQUFhOzs7O1FBQWpCO1lBQ0UsMENBQTBDO1lBQzFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDM0MsQ0FBQzs7O09BQUE7Ozs7SUFjRCwyQ0FBUTs7O0lBQVI7UUFDRSxpQkFBTSxRQUFRLFdBQUUsQ0FBQztRQUVqQixpQ0FBaUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLGtCQUFrQjthQUMzRjtpQkFBTTtnQkFDTCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFO29CQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7aUJBQ3hFO3FCQUFNO29CQUNMLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztpQkFDeEU7YUFDRjtTQUNGO0lBQ0gsQ0FBQzs7Ozs7SUFFRCw4Q0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsaUJBQU0sV0FBVyxZQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTNCLElBQUksT0FBTyxDQUFDLG1CQUFtQixFQUFFO1lBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7U0FDaEU7UUFFRCxJQUFJLE9BQU8sQ0FBQyxVQUFVLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUN6QyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztTQUM1QjtJQUNILENBQUM7SUFFRDs7T0FFRzs7Ozs7OztJQUNILGdEQUFhOzs7Ozs7SUFBYixVQUFjLEtBQWdCLEVBQUUsT0FBd0I7UUFBeEIsd0JBQUEsRUFBQSxlQUF3QjtRQUN0RCxpQkFBTSxhQUFhLFlBQUMsS0FBSyxDQUFDLENBQUM7UUFFM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksT0FBTyxFQUFFO1lBQy9CLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjtJQUNILENBQUM7SUFFRCw4REFBOEQ7Ozs7OztJQUM5RCxtREFBZ0I7Ozs7OztJQUFoQixVQUFpQixLQUFrQjtRQUNqQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7O2dCQUNWLFVBQVUsR0FBRyxLQUFLLENBQUMsR0FBRzs7OztZQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFVBQVUsRUFBWixDQUFZLEVBQUM7WUFDL0MsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUMxQztJQUNILENBQUM7SUFFRCx3Q0FBd0M7Ozs7O0lBQ3hDLDZDQUFVOzs7OztJQUFWO1FBQ0UsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFOztnQkFDVixLQUFLLEdBQUcsbUJBQUEsSUFBSSxDQUFDLE9BQU8sRUFBZTtZQUN6QyxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzthQUM5RDtpQkFBTTtnQkFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUN0QjtTQUNGO2FBQU07WUFDTCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsbUJBQUEsSUFBSSxDQUFDLE9BQU8sRUFBYSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDMUQ7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDeEI7U0FDRjtRQUNELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELCtDQUFZOzs7O0lBQVosVUFBYSxJQUFhO1FBQ3hCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCwrQkFBK0I7Ozs7OztJQUN2QixzREFBbUI7Ozs7OztJQUEzQjs7WUFDUSxhQUFhLEdBQXVCLEVBQUU7UUFDNUMsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLGFBQWEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7U0FDeEQ7UUFFRCxJQUFJLENBQUMsV0FBVyx3QkFBUSxhQUFhLEVBQUssSUFBSSxDQUFDLE9BQU8sQ0FBRSxDQUFDO0lBQzNELENBQUM7O2dCQXpIRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLEVBQUUsQ0FBQyxrQkFBa0I7aUJBQ2hDOzs7O2dCQVAyQixhQUFhO2dCQW5CdkMsaUJBQWlCO2dCQW1CVixpQkFBaUI7Z0JBRnhCLHNCQUFzQjs7OytCQWFyQixLQUFLO2lDQUNMLEtBQUs7c0NBQ0wsS0FBSzs4QkFDTCxLQUFLO3lCQUNMLEtBQUs7MkJBQ0wsS0FBSztrQ0FDTCxNQUFNO3FDQUNOLE1BQU07NkJBR04sS0FBSzt5QkFPTCxNQUFNOztJQWRrQjtRQUFmLFlBQVksRUFBRTs7aUVBQTZCO0lBaUh2RCwrQkFBQztDQUFBLEFBMUhELENBRzhDLHVCQUF1QixHQXVIcEU7U0F2SFksd0JBQXdCOzs7SUFDbkMsNENBQTBCOztJQUUxQixnREFBZ0U7O0lBQ2hFLGtEQUF3Qzs7SUFDeEMsdURBQXVFOztJQUN2RSwrQ0FBcUQ7O0lBQ3JELDBDQUF5Qzs7SUFDekMsNENBQWdDOztJQUNoQyxtREFBaUY7O0lBQ2pGLHNEQUFtRTs7Ozs7SUFFbkUsNkNBQW9DOztJQVFwQywwQ0FBc0U7O0lBT3RFLCtDQUFvQjs7SUFDcEIsK0NBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtcclxuICB0b0Jvb2xlYW4sXHJcbiAgdmFsdWVGdW5jdGlvblByb3AsXHJcbiAgQ2FuZHlEYXRlLFxyXG4gIEZ1bmN0aW9uUHJvcCxcclxuICBJbnB1dEJvb2xlYW4sXHJcbiAgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG59IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IERhdGVIZWxwZXJTZXJ2aWNlLCBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuXHJcbmltcG9ydCB7IEFic3RyYWN0UGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9hYnN0cmFjdC1waWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tcGF0aWJsZURhdGUsIERpc2FibGVkVGltZUZuLCBQYW5lbE1vZGUsIFByZXNldFJhbmdlcyB9IGZyb20gJy4vc3RhbmRhcmQtdHlwZXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgdGVtcGxhdGU6IGBgIC8vIEp1c3QgZm9yIHJvbGx1cFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZVJhbmdlUGlja2VyQ29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgc2hvd1dlZWs6IGJvb2xlYW4gPSBmYWxzZTsgLy8gU2hvdWxkIHNob3cgYXMgd2VlayBwaWNrZXJcclxuXHJcbiAgQElucHV0KCkgbnpEYXRlUmVuZGVyOiBGdW5jdGlvblByb3A8VGVtcGxhdGVSZWY8RGF0ZT4gfCBzdHJpbmc+O1xyXG4gIEBJbnB1dCgpIG56RGlzYWJsZWRUaW1lOiBEaXNhYmxlZFRpbWVGbjtcclxuICBASW5wdXQoKSBuelJlbmRlckV4dHJhRm9vdGVyOiBGdW5jdGlvblByb3A8VGVtcGxhdGVSZWY8dm9pZD4gfCBzdHJpbmc+O1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dUb2RheTogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgbnpNb2RlOiBQYW5lbE1vZGUgfCBQYW5lbE1vZGVbXTtcclxuICBASW5wdXQoKSBuelJhbmdlczogUHJlc2V0UmFuZ2VzO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uUGFuZWxDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFBhbmVsTW9kZSB8IFBhbmVsTW9kZVtdPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uQ2FsZW5kYXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGVbXT4oKTtcclxuXHJcbiAgcHJpdmF0ZSBfc2hvd1RpbWU6IG9iamVjdCB8IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZ2V0IG56U2hvd1RpbWUoKTogb2JqZWN0IHwgYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2hvd1RpbWU7XHJcbiAgfVxyXG4gIHNldCBuelNob3dUaW1lKHZhbHVlOiBvYmplY3QgfCBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9zaG93VGltZSA9IHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgPyB2YWx1ZSA6IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbk9rID0gbmV3IEV2ZW50RW1pdHRlcjxDb21wYXRpYmxlRGF0ZSB8IG51bGw+KCk7XHJcblxyXG4gIGdldCByZWFsU2hvd1RvZGF5KCk6IGJvb2xlYW4ge1xyXG4gICAgLy8gUmFuZ2Ugbm90IHN1cHBvcnQgbnpTaG93VG9kYXkgY3VycmVudGx5XHJcbiAgICByZXR1cm4gIXRoaXMuaXNSYW5nZSAmJiB0aGlzLm56U2hvd1RvZGF5O1xyXG4gIH1cclxuXHJcbiAgcGlja2VyU3R5bGU6IG9iamVjdDsgLy8gRmluYWwgcGlja2VyIHN0eWxlIHRoYXQgY29udGFpbnMgd2lkdGggZml4IGNvcnJlY3Rpb25zIGV0Yy5cclxuICBleHRyYUZvb3RlcjogVGVtcGxhdGVSZWY8dm9pZD4gfCBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgaTE4bjogTnpJMThuU2VydmljZSxcclxuICAgIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBkYXRlSGVscGVyOiBEYXRlSGVscGVyU2VydmljZSxcclxuICAgIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG4gICkge1xyXG4gICAgc3VwZXIoaTE4biwgY2RyLCBkYXRlSGVscGVyLCBub0FuaW1hdGlvbik7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHN1cGVyLm5nT25Jbml0KCk7XHJcblxyXG4gICAgLy8gRGVmYXVsdCBmb3JtYXQgd2hlbiBpdCdzIGVtcHR5XHJcbiAgICBpZiAoIXRoaXMubnpGb3JtYXQpIHtcclxuICAgICAgaWYgKHRoaXMuc2hvd1dlZWspIHtcclxuICAgICAgICB0aGlzLm56Rm9ybWF0ID0gdGhpcy5kYXRlSGVscGVyLnJlbHlPbkRhdGVQaXBlID8gJ3l5eXktd3cnIDogJ1lZWVktV1cnOyAvLyBGb3JtYXQgZm9yIHdlZWtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAodGhpcy5kYXRlSGVscGVyLnJlbHlPbkRhdGVQaXBlKSB7XHJcbiAgICAgICAgICB0aGlzLm56Rm9ybWF0ID0gdGhpcy5uelNob3dUaW1lID8gJ3l5eXktTU0tZGQgSEg6bW06c3MnIDogJ3l5eXktTU0tZGQnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLm56Rm9ybWF0ID0gdGhpcy5uelNob3dUaW1lID8gJ1lZWVktTU0tREQgSEg6bW06c3MnIDogJ1lZWVktTU0tREQnO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgc3VwZXIubmdPbkNoYW5nZXMoY2hhbmdlcyk7XHJcblxyXG4gICAgaWYgKGNoYW5nZXMubnpSZW5kZXJFeHRyYUZvb3Rlcikge1xyXG4gICAgICB0aGlzLmV4dHJhRm9vdGVyID0gdmFsdWVGdW5jdGlvblByb3AodGhpcy5uelJlbmRlckV4dHJhRm9vdGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2hhbmdlcy5uelNob3dUaW1lIHx8IGNoYW5nZXMubnpTdHlsZSkge1xyXG4gICAgICB0aGlzLnNldEZpeGVkUGlja2VyU3R5bGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIElmIHVzZXIgcHJlc3MgJ0VudGVyJyBpbiBpbnB1dCBib3ggb3IgYG56U2hvd1RpbWVgIGlzIGZhbHNlLCBvdmVybGF5IHdpbGwgY2xvc2UuXHJcbiAgICovXHJcbiAgb25WYWx1ZUNoYW5nZSh2YWx1ZTogQ2FuZHlEYXRlLCBpc0VudGVyOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgIHN1cGVyLm9uVmFsdWVDaGFuZ2UodmFsdWUpO1xyXG5cclxuICAgIGlmICghdGhpcy5uelNob3dUaW1lIHx8IGlzRW50ZXIpIHtcclxuICAgICAgdGhpcy5jbG9zZU92ZXJsYXkoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEVtaXQgbnpPbkNhbGVuZGFyQ2hhbmdlIHdoZW4gc2VsZWN0IGRhdGUgYnkgbnotcmFuZ2UtcGlja2VyXHJcbiAgb25DYWxlbmRhckNoYW5nZSh2YWx1ZTogQ2FuZHlEYXRlW10pOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgY29uc3QgcmFuZ2VWYWx1ZSA9IHZhbHVlLm1hcCh4ID0+IHgubmF0aXZlRGF0ZSk7XHJcbiAgICAgIHRoaXMubnpPbkNhbGVuZGFyQ2hhbmdlLmVtaXQocmFuZ2VWYWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBFbWl0dGVkIHdoZW4gZG9uZSB3aXRoIGRhdGUgc2VsZWN0aW5nXHJcbiAgb25SZXN1bHRPaygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLm56VmFsdWUgYXMgQ2FuZHlEYXRlW107XHJcbiAgICAgIGlmICh2YWx1ZS5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLm56T25Pay5lbWl0KFt2YWx1ZVswXS5uYXRpdmVEYXRlLCB2YWx1ZVsxXS5uYXRpdmVEYXRlXSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5uek9uT2suZW1pdChbXSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLm56VmFsdWUpIHtcclxuICAgICAgICB0aGlzLm56T25Pay5lbWl0KCh0aGlzLm56VmFsdWUgYXMgQ2FuZHlEYXRlKS5uYXRpdmVEYXRlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLm56T25Pay5lbWl0KG51bGwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmNsb3NlT3ZlcmxheSgpO1xyXG4gIH1cclxuXHJcbiAgb25PcGVuQ2hhbmdlKG9wZW46IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMubnpPbk9wZW5DaGFuZ2UuZW1pdChvcGVuKTtcclxuICB9XHJcblxyXG4gIC8vIFNldHVwIGZpeGVkIHN0eWxlIGZvciBwaWNrZXJcclxuICBwcml2YXRlIHNldEZpeGVkUGlja2VyU3R5bGUoKTogdm9pZCB7XHJcbiAgICBjb25zdCBzaG93VGltZUZpeGVzOiB7IHdpZHRoPzogc3RyaW5nIH0gPSB7fTtcclxuICAgIGlmICh0aGlzLm56U2hvd1RpbWUpIHtcclxuICAgICAgc2hvd1RpbWVGaXhlcy53aWR0aCA9IHRoaXMuaXNSYW5nZSA/ICczNTBweCcgOiAnMTk1cHgnO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucGlja2VyU3R5bGUgPSB7IC4uLnNob3dUaW1lRml4ZXMsIC4uLnRoaXMubnpTdHlsZSB9O1xyXG4gIH1cclxufVxyXG4iXX0=