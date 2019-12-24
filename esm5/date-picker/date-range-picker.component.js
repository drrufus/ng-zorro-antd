import { __assign, __decorate, __extends, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { InputBoolean, NzNoAnimationDirective, toBoolean, valueFunctionProp } from 'ng-zorro-antd/core';
import { DateHelperService, NzI18nService } from 'ng-zorro-antd/i18n';
import { AbstractPickerComponent } from './abstract-picker.component';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/i18n";
import * as i2 from "ng-zorro-antd/core";
var DateRangePickerComponent = /** @class */ (function (_super) {
    __extends(DateRangePickerComponent, _super);
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
        get: function () {
            return this._showTime;
        },
        set: function (value) {
            this._showTime = typeof value === 'object' ? value : toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateRangePickerComponent.prototype, "realShowToday", {
        get: function () {
            // Range not support nzShowToday currently
            return !this.isRange && this.nzShowToday;
        },
        enumerable: true,
        configurable: true
    });
    DateRangePickerComponent.prototype.ngOnInit = function () {
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
    DateRangePickerComponent.prototype.ngOnChanges = function (changes) {
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
    DateRangePickerComponent.prototype.onValueChange = function (value, isEnter) {
        if (isEnter === void 0) { isEnter = false; }
        _super.prototype.onValueChange.call(this, value);
        if (!this.nzShowTime || isEnter) {
            this.closeOverlay();
        }
    };
    // Emit nzOnCalendarChange when select date by nz-range-picker
    DateRangePickerComponent.prototype.onCalendarChange = function (value) {
        if (this.isRange) {
            var rangeValue = value.map(function (x) { return x.nativeDate; });
            this.nzOnCalendarChange.emit(rangeValue);
        }
    };
    // Emitted when done with date selecting
    DateRangePickerComponent.prototype.onResultOk = function () {
        if (this.isRange) {
            var value = this.nzValue;
            if (value.length) {
                this.nzOnOk.emit([value[0].nativeDate, value[1].nativeDate]);
            }
            else {
                this.nzOnOk.emit([]);
            }
        }
        else {
            if (this.nzValue) {
                this.nzOnOk.emit(this.nzValue.nativeDate);
            }
            else {
                this.nzOnOk.emit(null);
            }
        }
        this.closeOverlay();
    };
    DateRangePickerComponent.prototype.onOpenChange = function (open) {
        this.nzOnOpenChange.emit(open);
    };
    // Setup fixed style for picker
    DateRangePickerComponent.prototype.setFixedPickerStyle = function () {
        var showTimeFixes = {};
        if (this.nzShowTime) {
            showTimeFixes.width = this.isRange ? '350px' : '195px';
        }
        this.pickerStyle = __assign(__assign({}, showTimeFixes), this.nzStyle);
    };
    /** @nocollapse */ DateRangePickerComponent.ɵfac = function DateRangePickerComponent_Factory(t) { return new (t || DateRangePickerComponent)(i0.ɵɵdirectiveInject(i1.NzI18nService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.DateHelperService), i0.ɵɵdirectiveInject(i2.NzNoAnimationDirective)); };
    /** @nocollapse */ DateRangePickerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DateRangePickerComponent, selectors: [["ng-component"]], inputs: { nzDateRender: "nzDateRender", nzDisabledTime: "nzDisabledTime", nzRenderExtraFooter: "nzRenderExtraFooter", nzShowToday: "nzShowToday", nzMode: "nzMode", nzRanges: "nzRanges", nzShowTime: "nzShowTime" }, outputs: { nzOnPanelChange: "nzOnPanelChange", nzOnCalendarChange: "nzOnCalendarChange", nzOnOk: "nzOnOk" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature()], decls: 0, vars: 0, template: function DateRangePickerComponent_Template(rf, ctx) { }, encapsulation: 2 });
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], DateRangePickerComponent.prototype, "nzShowToday", void 0);
    return DateRangePickerComponent;
}(AbstractPickerComponent));
export { DateRangePickerComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DateRangePickerComponent, [{
        type: Component,
        args: [{
                template: "" // Just for rollup
            }]
    }], function () { return [{ type: i1.NzI18nService }, { type: i0.ChangeDetectorRef }, { type: i1.DateHelperService }, { type: i2.NzNoAnimationDirective }]; }, { nzDateRender: [{
            type: Input
        }], nzDisabledTime: [{
            type: Input
        }], nzRenderExtraFooter: [{
            type: Input
        }], nzShowToday: [{
            type: Input
        }], nzMode: [{
            type: Input
        }], nzRanges: [{
            type: Input
        }], nzOnPanelChange: [{
            type: Output
        }], nzOnCalendarChange: [{
            type: Output
        }], nzShowTime: [{
            type: Input
        }], nzOnOk: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9kYXRlLXBpY2tlci8iLCJzb3VyY2VzIjpbImRhdGUtcmFuZ2UtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQThCLE1BQU0sZUFBZSxDQUFDO0FBRXpJLE9BQU8sRUFBMkIsWUFBWSxFQUFFLHNCQUFzQixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2pJLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV0RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7OztBQUd0RTtJQUc4Qyw0Q0FBdUI7SUE4Qm5FLGtDQUFZLElBQW1CLEVBQUUsR0FBc0IsRUFBRSxVQUE2QixFQUFFLFdBQW9DO1FBQTVILFlBQ0Usa0JBQU0sSUFBSSxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsV0FBVyxDQUFDLFNBQzFDO1FBL0JELGNBQVEsR0FBWSxLQUFLLENBQUMsQ0FBQyw2QkFBNkI7UUFLL0IsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFHbEMscUJBQWUsR0FBRyxJQUFJLFlBQVksRUFBMkIsQ0FBQztRQUM5RCx3QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBVWhELFlBQU0sR0FBRyxJQUFJLFlBQVksRUFBeUIsQ0FBQzs7SUFZdEUsQ0FBQztJQW5CRCxzQkFBYSxnREFBVTthQUF2QjtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4QixDQUFDO2FBQ0QsVUFBZSxLQUF1QjtZQUNwQyxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sS0FBSyxLQUFLLFFBQVEs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LENBQUMsT0FBcUIsQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUMxRDtpQkFBTTtnQkFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN4QjtTQUNGO1FBQ0QsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCwrQ0FBWSxHQUFaLFVBQWEsSUFBYTtRQUN4QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsK0JBQStCO0lBQ3ZCLHNEQUFtQixHQUEzQjtRQUNFLElBQU0sYUFBYSxHQUF1QixFQUFFLENBQUM7UUFDN0MsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLGFBQWEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7U0FDeEQ7UUFFRCxJQUFJLENBQUMsV0FBVyx5QkFBUSxhQUFhLEdBQUssSUFBSSxDQUFDLE9BQU8sQ0FBRSxDQUFDO0lBQzNELENBQUM7b0dBakhVLHdCQUF3QjtpRUFBeEIsd0JBQXdCO0lBTVY7UUFBZixZQUFZLEVBQUU7O2lFQUE2QjttQ0F6QnZEO0NBcUlDLEFBckhELENBRzhDLHVCQUF1QixHQWtIcEU7U0FsSFksd0JBQXdCO2tEQUF4Qix3QkFBd0I7Y0FIcEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxFQUFFLENBQUMsa0JBQWtCO2FBQ2hDOztrQkFJRSxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxNQUFNOztrQkFDTixNQUFNOztrQkFHTixLQUFLOztrQkFPTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ2FuZHlEYXRlLCBGdW5jdGlvblByb3AsIElucHV0Qm9vbGVhbiwgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSwgdG9Cb29sZWFuLCB2YWx1ZUZ1bmN0aW9uUHJvcCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IERhdGVIZWxwZXJTZXJ2aWNlLCBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuXHJcbmltcG9ydCB7IEFic3RyYWN0UGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9hYnN0cmFjdC1waWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tcGF0aWJsZURhdGUsIERpc2FibGVkVGltZUZuLCBQYW5lbE1vZGUsIFByZXNldFJhbmdlcyB9IGZyb20gJy4vc3RhbmRhcmQtdHlwZXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgdGVtcGxhdGU6IGBgIC8vIEp1c3QgZm9yIHJvbGx1cFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZVJhbmdlUGlja2VyQ29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgc2hvd1dlZWs6IGJvb2xlYW4gPSBmYWxzZTsgLy8gU2hvdWxkIHNob3cgYXMgd2VlayBwaWNrZXJcclxuXHJcbiAgQElucHV0KCkgbnpEYXRlUmVuZGVyOiBGdW5jdGlvblByb3A8VGVtcGxhdGVSZWY8RGF0ZT4gfCBzdHJpbmc+O1xyXG4gIEBJbnB1dCgpIG56RGlzYWJsZWRUaW1lOiBEaXNhYmxlZFRpbWVGbjtcclxuICBASW5wdXQoKSBuelJlbmRlckV4dHJhRm9vdGVyOiBGdW5jdGlvblByb3A8VGVtcGxhdGVSZWY8dm9pZD4gfCBzdHJpbmc+O1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dUb2RheTogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgbnpNb2RlOiBQYW5lbE1vZGUgfCBQYW5lbE1vZGVbXTtcclxuICBASW5wdXQoKSBuelJhbmdlczogUHJlc2V0UmFuZ2VzO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uUGFuZWxDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFBhbmVsTW9kZSB8IFBhbmVsTW9kZVtdPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uQ2FsZW5kYXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGVbXT4oKTtcclxuXHJcbiAgcHJpdmF0ZSBfc2hvd1RpbWU6IG9iamVjdCB8IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZ2V0IG56U2hvd1RpbWUoKTogb2JqZWN0IHwgYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2hvd1RpbWU7XHJcbiAgfVxyXG4gIHNldCBuelNob3dUaW1lKHZhbHVlOiBvYmplY3QgfCBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9zaG93VGltZSA9IHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgPyB2YWx1ZSA6IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbk9rID0gbmV3IEV2ZW50RW1pdHRlcjxDb21wYXRpYmxlRGF0ZSB8IG51bGw+KCk7XHJcblxyXG4gIGdldCByZWFsU2hvd1RvZGF5KCk6IGJvb2xlYW4ge1xyXG4gICAgLy8gUmFuZ2Ugbm90IHN1cHBvcnQgbnpTaG93VG9kYXkgY3VycmVudGx5XHJcbiAgICByZXR1cm4gIXRoaXMuaXNSYW5nZSAmJiB0aGlzLm56U2hvd1RvZGF5O1xyXG4gIH1cclxuXHJcbiAgcGlja2VyU3R5bGU6IG9iamVjdDsgLy8gRmluYWwgcGlja2VyIHN0eWxlIHRoYXQgY29udGFpbnMgd2lkdGggZml4IGNvcnJlY3Rpb25zIGV0Yy5cclxuICBleHRyYUZvb3RlcjogVGVtcGxhdGVSZWY8dm9pZD4gfCBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGkxOG46IE56STE4blNlcnZpY2UsIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIGRhdGVIZWxwZXI6IERhdGVIZWxwZXJTZXJ2aWNlLCBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmUpIHtcclxuICAgIHN1cGVyKGkxOG4sIGNkciwgZGF0ZUhlbHBlciwgbm9BbmltYXRpb24pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xyXG5cclxuICAgIC8vIERlZmF1bHQgZm9ybWF0IHdoZW4gaXQncyBlbXB0eVxyXG4gICAgaWYgKCF0aGlzLm56Rm9ybWF0KSB7XHJcbiAgICAgIGlmICh0aGlzLnNob3dXZWVrKSB7XHJcbiAgICAgICAgdGhpcy5uekZvcm1hdCA9IHRoaXMuZGF0ZUhlbHBlci5yZWx5T25EYXRlUGlwZSA/ICd5eXl5LXd3JyA6ICdZWVlZLVdXJzsgLy8gRm9ybWF0IGZvciB3ZWVrXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0ZUhlbHBlci5yZWx5T25EYXRlUGlwZSkge1xyXG4gICAgICAgICAgdGhpcy5uekZvcm1hdCA9IHRoaXMubnpTaG93VGltZSA/ICd5eXl5LU1NLWRkIEhIOm1tOnNzJyA6ICd5eXl5LU1NLWRkJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5uekZvcm1hdCA9IHRoaXMubnpTaG93VGltZSA/ICdZWVlZLU1NLUREIEhIOm1tOnNzJyA6ICdZWVlZLU1NLUREJztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIHN1cGVyLm5nT25DaGFuZ2VzKGNoYW5nZXMpO1xyXG5cclxuICAgIGlmIChjaGFuZ2VzLm56UmVuZGVyRXh0cmFGb290ZXIpIHtcclxuICAgICAgdGhpcy5leHRyYUZvb3RlciA9IHZhbHVlRnVuY3Rpb25Qcm9wKHRoaXMubnpSZW5kZXJFeHRyYUZvb3Rlcik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZXMubnpTaG93VGltZSB8fCBjaGFuZ2VzLm56U3R5bGUpIHtcclxuICAgICAgdGhpcy5zZXRGaXhlZFBpY2tlclN0eWxlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJZiB1c2VyIHByZXNzICdFbnRlcicgaW4gaW5wdXQgYm94IG9yIGBuelNob3dUaW1lYCBpcyBmYWxzZSwgb3ZlcmxheSB3aWxsIGNsb3NlLlxyXG4gICAqL1xyXG4gIG9uVmFsdWVDaGFuZ2UodmFsdWU6IENhbmR5RGF0ZSwgaXNFbnRlcjogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICBzdXBlci5vblZhbHVlQ2hhbmdlKHZhbHVlKTtcclxuXHJcbiAgICBpZiAoIXRoaXMubnpTaG93VGltZSB8fCBpc0VudGVyKSB7XHJcbiAgICAgIHRoaXMuY2xvc2VPdmVybGF5KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBFbWl0IG56T25DYWxlbmRhckNoYW5nZSB3aGVuIHNlbGVjdCBkYXRlIGJ5IG56LXJhbmdlLXBpY2tlclxyXG4gIG9uQ2FsZW5kYXJDaGFuZ2UodmFsdWU6IENhbmR5RGF0ZVtdKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgIGNvbnN0IHJhbmdlVmFsdWUgPSB2YWx1ZS5tYXAoeCA9PiB4Lm5hdGl2ZURhdGUpO1xyXG4gICAgICB0aGlzLm56T25DYWxlbmRhckNoYW5nZS5lbWl0KHJhbmdlVmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gRW1pdHRlZCB3aGVuIGRvbmUgd2l0aCBkYXRlIHNlbGVjdGluZ1xyXG4gIG9uUmVzdWx0T2soKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5uelZhbHVlIGFzIENhbmR5RGF0ZVtdO1xyXG4gICAgICBpZiAodmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5uek9uT2suZW1pdChbdmFsdWVbMF0ubmF0aXZlRGF0ZSwgdmFsdWVbMV0ubmF0aXZlRGF0ZV0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMubnpPbk9rLmVtaXQoW10pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5uelZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5uek9uT2suZW1pdCgodGhpcy5uelZhbHVlIGFzIENhbmR5RGF0ZSkubmF0aXZlRGF0ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5uek9uT2suZW1pdChudWxsKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5jbG9zZU92ZXJsYXkoKTtcclxuICB9XHJcblxyXG4gIG9uT3BlbkNoYW5nZShvcGVuOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLm56T25PcGVuQ2hhbmdlLmVtaXQob3Blbik7XHJcbiAgfVxyXG5cclxuICAvLyBTZXR1cCBmaXhlZCBzdHlsZSBmb3IgcGlja2VyXHJcbiAgcHJpdmF0ZSBzZXRGaXhlZFBpY2tlclN0eWxlKCk6IHZvaWQge1xyXG4gICAgY29uc3Qgc2hvd1RpbWVGaXhlczogeyB3aWR0aD86IHN0cmluZyB9ID0ge307XHJcbiAgICBpZiAodGhpcy5uelNob3dUaW1lKSB7XHJcbiAgICAgIHNob3dUaW1lRml4ZXMud2lkdGggPSB0aGlzLmlzUmFuZ2UgPyAnMzUwcHgnIDogJzE5NXB4JztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnBpY2tlclN0eWxlID0geyAuLi5zaG93VGltZUZpeGVzLCAuLi50aGlzLm56U3R5bGUgfTtcclxuICB9XHJcbn1cclxuIl19