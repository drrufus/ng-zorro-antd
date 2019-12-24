import { __assign, __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core';
import { isConfigAObject } from './nz-slider-definitions';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function NzSliderMarksComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 2);
} if (rf & 2) {
    var attr_r759 = ctx.$implicit;
    i0.ɵɵclassProp("ant-slider-mark-active", attr_r759.active);
    i0.ɵɵproperty("ngStyle", attr_r759.style)("innerHTML", attr_r759.label, i0.ɵɵsanitizeHtml);
} }
var NzSliderMarksComponent = /** @class */ (function () {
    function NzSliderMarksComponent() {
        this.nzLowerBound = null;
        this.nzUpperBound = null;
        this.nzVertical = false;
        this.nzIncluded = false;
    }
    NzSliderMarksComponent.prototype.ngOnChanges = function (changes) {
        if (changes.nzMarksArray) {
            this.buildMarks();
        }
        if (changes.nzMarksArray || changes.nzLowerBound || changes.nzUpperBound) {
            this.togglePointActive();
        }
    };
    NzSliderMarksComponent.prototype.trackById = function (_index, mark) {
        return mark.value;
    };
    NzSliderMarksComponent.prototype.buildMarks = function () {
        var _this = this;
        var range = this.nzMax - this.nzMin;
        this.marks = this.nzMarksArray.map(function (mark) {
            var value = mark.value, offset = mark.offset, config = mark.config;
            var style = _this.getMarkStyles(value, range, config);
            var label = isConfigAObject(config) ? config.label : config;
            return {
                label: label,
                offset: offset,
                style: style,
                value: value,
                config: config,
                active: false
            };
        });
    };
    NzSliderMarksComponent.prototype.getMarkStyles = function (value, range, config) {
        var style;
        if (this.nzVertical) {
            style = {
                marginBottom: '-50%',
                bottom: ((value - this.nzMin) / range) * 100 + "%"
            };
        }
        else {
            style = {
                transform: "translate3d(-50%, 0, 0)",
                left: ((value - this.nzMin) / range) * 100 + "%"
            };
        }
        if (isConfigAObject(config) && config.style) {
            style = __assign(__assign({}, style), config.style);
        }
        return style;
    };
    NzSliderMarksComponent.prototype.togglePointActive = function () {
        var _this = this;
        if (this.marks && this.nzLowerBound !== null && this.nzUpperBound !== null) {
            this.marks.forEach(function (mark) {
                var value = mark.value;
                var isActive = (!_this.nzIncluded && value === _this.nzUpperBound) ||
                    (_this.nzIncluded && value <= _this.nzUpperBound && value >= _this.nzLowerBound);
                mark.active = isActive;
            });
        }
    };
    /** @nocollapse */ NzSliderMarksComponent.ɵfac = function NzSliderMarksComponent_Factory(t) { return new (t || NzSliderMarksComponent)(); };
    /** @nocollapse */ NzSliderMarksComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzSliderMarksComponent, selectors: [["nz-slider-marks"]], inputs: { nzLowerBound: "nzLowerBound", nzUpperBound: "nzUpperBound", nzMarksArray: "nzMarksArray", nzMin: "nzMin", nzMax: "nzMax", nzVertical: "nzVertical", nzIncluded: "nzIncluded" }, exportAs: ["nzSliderMarks"], features: [i0.ɵɵNgOnChangesFeature()], decls: 2, vars: 2, consts: [[1, "ant-slider-mark"], ["class", "ant-slider-mark-text", 3, "ant-slider-mark-active", "ngStyle", "innerHTML", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ant-slider-mark-text", 3, "ngStyle", "innerHTML"]], template: function NzSliderMarksComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, NzSliderMarksComponent_span_1_Template, 1, 3, "span", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.marks)("ngForTrackBy", ctx.trackById);
        } }, directives: [i1.NgForOf, i1.NgStyle], encapsulation: 2, changeDetection: 0 });
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzSliderMarksComponent.prototype, "nzVertical", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzSliderMarksComponent.prototype, "nzIncluded", void 0);
    return NzSliderMarksComponent;
}());
export { NzSliderMarksComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzSliderMarksComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                selector: 'nz-slider-marks',
                exportAs: 'nzSliderMarks',
                templateUrl: './nz-slider-marks.component.html'
            }]
    }], null, { nzLowerBound: [{
            type: Input
        }], nzUpperBound: [{
            type: Input
        }], nzMarksArray: [{
            type: Input
        }], nzMin: [{
            type: Input
        }], nzMax: [{
            type: Input
        }], nzVertical: [{
            type: Input
        }], nzIncluded: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLW1hcmtzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc2xpZGVyLyIsInNvdXJjZXMiOlsibnotc2xpZGVyLW1hcmtzLmNvbXBvbmVudC50cyIsIm56LXNsaWRlci1tYXJrcy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZILE9BQU8sRUFBRSxZQUFZLEVBQW9CLE1BQU0sb0JBQW9CLENBQUM7QUFFcEUsT0FBTyxFQUErQixlQUFlLEVBQVEsTUFBTSx5QkFBeUIsQ0FBQzs7OztJQ1gzRiwwQkFPTzs7O0lBSkwsMERBQTRDO0lBQzVDLHlDQUFzQixpREFBQTs7QURTMUI7SUFBQTtRQVNXLGlCQUFZLEdBQWtCLElBQUksQ0FBQztRQUNuQyxpQkFBWSxHQUFrQixJQUFJLENBQUM7UUFJbkIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixlQUFVLEdBQUcsS0FBSyxDQUFDO0tBc0U3QztJQWxFQyw0Q0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsWUFBWSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNuQjtRQUNELElBQUksT0FBTyxDQUFDLFlBQVksSUFBSSxPQUFPLENBQUMsWUFBWSxJQUFJLE9BQU8sQ0FBQyxZQUFZLEVBQUU7WUFDeEUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDMUI7SUFDSCxDQUFDO0lBRUQsMENBQVMsR0FBVCxVQUFVLE1BQWMsRUFBRSxJQUFtQjtRQUMzQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVPLDJDQUFVLEdBQWxCO1FBQUEsaUJBaUJDO1FBaEJDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxL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RUFBRSxlQUFlO2dCQUN6QixXQUFXLEVBQUUsa0NBQWtDO2FBQ2hEOztrQkFFRSxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBOZ1N0eWxlSW50ZXJmYWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IERpc3BsYXllZE1hcmssIEV4dGVuZGVkTWFyaywgaXNDb25maWdBT2JqZWN0LCBNYXJrIH0gZnJvbSAnLi9uei1zbGlkZXItZGVmaW5pdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBzZWxlY3RvcjogJ256LXNsaWRlci1tYXJrcycsXHJcbiAgZXhwb3J0QXM6ICduelNsaWRlck1hcmtzJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotc2xpZGVyLW1hcmtzLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpTbGlkZXJNYXJrc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgbnpMb3dlckJvdW5kOiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBuelVwcGVyQm91bmQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIG56TWFya3NBcnJheTogRXh0ZW5kZWRNYXJrW107XHJcbiAgQElucHV0KCkgbnpNaW46IG51bWJlcjtcclxuICBASW5wdXQoKSBuek1heDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelZlcnRpY2FsID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56SW5jbHVkZWQgPSBmYWxzZTtcclxuXHJcbiAgbWFya3M6IERpc3BsYXllZE1hcmtbXTtcclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMubnpNYXJrc0FycmF5KSB7XHJcbiAgICAgIHRoaXMuYnVpbGRNYXJrcygpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMubnpNYXJrc0FycmF5IHx8IGNoYW5nZXMubnpMb3dlckJvdW5kIHx8IGNoYW5nZXMubnpVcHBlckJvdW5kKSB7XHJcbiAgICAgIHRoaXMudG9nZ2xlUG9pbnRBY3RpdmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRyYWNrQnlJZChfaW5kZXg6IG51bWJlciwgbWFyazogRGlzcGxheWVkTWFyayk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gbWFyay52YWx1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYnVpbGRNYXJrcygpOiB2b2lkIHtcclxuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5uek1heCAtIHRoaXMubnpNaW47XHJcblxyXG4gICAgdGhpcy5tYXJrcyA9IHRoaXMubnpNYXJrc0FycmF5Lm1hcChtYXJrID0+IHtcclxuICAgICAgY29uc3QgeyB2YWx1ZSwgb2Zmc2V0LCBjb25maWcgfSA9IG1hcms7XHJcbiAgICAgIGNvbnN0IHN0eWxlID0gdGhpcy5nZXRNYXJrU3R5bGVzKHZhbHVlLCByYW5nZSwgY29uZmlnKTtcclxuICAgICAgY29uc3QgbGFiZWwgPSBpc0NvbmZpZ0FPYmplY3QoY29uZmlnKSA/IGNvbmZpZy5sYWJlbCA6IGNvbmZpZztcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbGFiZWwsXHJcbiAgICAgICAgb2Zmc2V0LFxyXG4gICAgICAgIHN0eWxlLFxyXG4gICAgICAgIHZhbHVlLFxyXG4gICAgICAgIGNvbmZpZyxcclxuICAgICAgICBhY3RpdmU6IGZhbHNlXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0TWFya1N0eWxlcyh2YWx1ZTogbnVtYmVyLCByYW5nZTogbnVtYmVyLCBjb25maWc6IE1hcmspOiBOZ1N0eWxlSW50ZXJmYWNlIHtcclxuICAgIGxldCBzdHlsZTtcclxuXHJcbiAgICBpZiAodGhpcy5uelZlcnRpY2FsKSB7XHJcbiAgICAgIHN0eWxlID0ge1xyXG4gICAgICAgIG1hcmdpbkJvdHRvbTogJy01MCUnLFxyXG4gICAgICAgIGJvdHRvbTogYCR7KCh2YWx1ZSAtIHRoaXMubnpNaW4pIC8gcmFuZ2UpICogMTAwfSVgXHJcbiAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdHlsZSA9IHtcclxuICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCgtNTAlLCAwLCAwKWAsXHJcbiAgICAgICAgbGVmdDogYCR7KCh2YWx1ZSAtIHRoaXMubnpNaW4pIC8gcmFuZ2UpICogMTAwfSVgXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzQ29uZmlnQU9iamVjdChjb25maWcpICYmIGNvbmZpZy5zdHlsZSkge1xyXG4gICAgICBzdHlsZSA9IHsgLi4uc3R5bGUsIC4uLmNvbmZpZy5zdHlsZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdHlsZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdG9nZ2xlUG9pbnRBY3RpdmUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5tYXJrcyAmJiB0aGlzLm56TG93ZXJCb3VuZCAhPT0gbnVsbCAmJiB0aGlzLm56VXBwZXJCb3VuZCAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLm1hcmtzLmZvckVhY2gobWFyayA9PiB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBtYXJrLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGlzQWN0aXZlID1cclxuICAgICAgICAgICghdGhpcy5uekluY2x1ZGVkICYmIHZhbHVlID09PSB0aGlzLm56VXBwZXJCb3VuZCkgfHxcclxuICAgICAgICAgICh0aGlzLm56SW5jbHVkZWQgJiYgdmFsdWUgPD0gdGhpcy5uelVwcGVyQm91bmQhICYmIHZhbHVlID49IHRoaXMubnpMb3dlckJvdW5kISk7XHJcblxyXG4gICAgICAgIG1hcmsuYWN0aXZlID0gaXNBY3RpdmU7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiYW50LXNsaWRlci1tYXJrXCI+XHJcbiAgPHNwYW5cclxuICAgIGNsYXNzPVwiYW50LXNsaWRlci1tYXJrLXRleHRcIlxyXG4gICAgKm5nRm9yPVwibGV0IGF0dHIgb2YgbWFya3M7IHRyYWNrQnk6IHRyYWNrQnlJZFwiXHJcbiAgICBbY2xhc3MuYW50LXNsaWRlci1tYXJrLWFjdGl2ZV09XCJhdHRyLmFjdGl2ZVwiXHJcbiAgICBbbmdTdHlsZV09XCJhdHRyLnN0eWxlXCJcclxuICAgIFtpbm5lckhUTUxdPVwiYXR0ci5sYWJlbFwiXHJcbiAgPlxyXG4gIDwvc3Bhbj5cclxuPC9kaXY+XHJcbiJdfQ==