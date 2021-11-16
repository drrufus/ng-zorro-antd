/**
 * @fileoverview added by tsickle
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
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core';
import { isConfigAObject } from './nz-slider-definitions';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function NzSliderMarksComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 2);
} if (rf & 2) {
    const attr_r1 = ctx.$implicit;
    ɵngcc0.ɵɵclassProp("ant-slider-mark-active", attr_r1.active);
    ɵngcc0.ɵɵproperty("ngStyle", attr_r1.style)("innerHTML", attr_r1.label, ɵngcc0.ɵɵsanitizeHtml);
} }
export class NzSliderMarksComponent {
    constructor() {
        this.nzLowerBound = null;
        this.nzUpperBound = null;
        this.nzVertical = false;
        this.nzIncluded = false;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzMarksArray) {
            this.buildMarks();
        }
        if (changes.nzMarksArray || changes.nzLowerBound || changes.nzUpperBound) {
            this.togglePointActive();
        }
    }
    /**
     * @param {?} _index
     * @param {?} mark
     * @return {?}
     */
    trackById(_index, mark) {
        return mark.value;
    }
    /**
     * @private
     * @return {?}
     */
    buildMarks() {
        /** @type {?} */
        const range = this.nzMax - this.nzMin;
        this.marks = this.nzMarksArray.map((/**
         * @param {?} mark
         * @return {?}
         */
        mark => {
            const { value, offset, config } = mark;
            /** @type {?} */
            const style = this.getMarkStyles(value, range, config);
            /** @type {?} */
            const label = isConfigAObject(config) ? config.label : config;
            return {
                label,
                offset,
                style,
                value,
                config,
                active: false
            };
        }));
    }
    /**
     * @private
     * @param {?} value
     * @param {?} range
     * @param {?} config
     * @return {?}
     */
    getMarkStyles(value, range, config) {
        /** @type {?} */
        let style;
        if (this.nzVertical) {
            style = {
                marginBottom: '-50%',
                bottom: `${((value - this.nzMin) / range) * 100}%`
            };
        }
        else {
            style = {
                transform: `translate3d(-50%, 0, 0)`,
                left: `${((value - this.nzMin) / range) * 100}%`
            };
        }
        if (isConfigAObject(config) && config.style) {
            style = Object.assign({}, style, config.style);
        }
        return style;
    }
    /**
     * @private
     * @return {?}
     */
    togglePointActive() {
        if (this.marks && this.nzLowerBound !== null && this.nzUpperBound !== null) {
            this.marks.forEach((/**
             * @param {?} mark
             * @return {?}
             */
            mark => {
                /** @type {?} */
                const value = mark.value;
                /** @type {?} */
                const isActive = (!this.nzIncluded && value === this.nzUpperBound) ||
                    (this.nzIncluded && value <= (/** @type {?} */ (this.nzUpperBound)) && value >= (/** @type {?} */ (this.nzLowerBound)));
                mark.active = isActive;
            }));
        }
    }
}
NzSliderMarksComponent.ɵfac = function NzSliderMarksComponent_Factory(t) { return new (t || NzSliderMarksComponent)(); };
NzSliderMarksComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzSliderMarksComponent, selectors: [["nz-slider-marks"]], inputs: { nzLowerBound: "nzLowerBound", nzUpperBound: "nzUpperBound", nzVertical: "nzVertical", nzIncluded: "nzIncluded", nzMarksArray: "nzMarksArray", nzMin: "nzMin", nzMax: "nzMax" }, exportAs: ["nzSliderMarks"], features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [[1, "ant-slider-mark"], ["class", "ant-slider-mark-text", 3, "ant-slider-mark-active", "ngStyle", "innerHTML", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ant-slider-mark-text", 3, "ngStyle", "innerHTML"]], template: function NzSliderMarksComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, NzSliderMarksComponent_span_1_Template, 1, 4, "span", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.marks)("ngForTrackBy", ctx.trackById);
    } }, directives: [ɵngcc1.NgForOf, ɵngcc1.NgStyle], encapsulation: 2, changeDetection: 0 });
NzSliderMarksComponent.propDecorators = {
    nzLowerBound: [{ type: Input }],
    nzUpperBound: [{ type: Input }],
    nzMarksArray: [{ type: Input }],
    nzMin: [{ type: Input }],
    nzMax: [{ type: Input }],
    nzVertical: [{ type: Input }],
    nzIncluded: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzSliderMarksComponent.prototype, "nzVertical", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzSliderMarksComponent.prototype, "nzIncluded", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzSliderMarksComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                selector: 'nz-slider-marks',
                exportAs: 'nzSliderMarks',
                template: "<div class=\"ant-slider-mark\">\r\n  <span\r\n    class=\"ant-slider-mark-text\"\r\n    *ngFor=\"let attr of marks; trackBy: trackById\"\r\n    [class.ant-slider-mark-active]=\"attr.active\"\r\n    [ngStyle]=\"attr.style\"\r\n    [innerHTML]=\"attr.label\">\r\n  </span>\r\n</div>"
            }]
    }], function () { return []; }, { nzLowerBound: [{
            type: Input
        }], nzUpperBound: [{
            type: Input
        }], nzVertical: [{
            type: Input
        }], nzIncluded: [{
            type: Input
        }], nzMarksArray: [{
            type: Input
        }], nzMin: [{
            type: Input
        }], nzMax: [{
            type: Input
        }] }); })();
if (false) {
    /** @type {?} */
    NzSliderMarksComponent.prototype.nzLowerBound;
    /** @type {?} */
    NzSliderMarksComponent.prototype.nzUpperBound;
    /** @type {?} */
    NzSliderMarksComponent.prototype.nzMarksArray;
    /** @type {?} */
    NzSliderMarksComponent.prototype.nzMin;
    /** @type {?} */
    NzSliderMarksComponent.prototype.nzMax;
    /** @type {?} */
    NzSliderMarksComponent.prototype.nzVertical;
    /** @type {?} */
    NzSliderMarksComponent.prototype.nzIncluded;
    /** @type {?} */
    NzSliderMarksComponent.prototype.marks;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLW1hcmtzLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsibmc6L25nLXpvcnJvLWFudGQvc2xpZGVyL256LXNsaWRlci1tYXJrcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZILE9BQU8sRUFBRSxZQUFZLEVBQW9CLE1BQU0sb0JBQW9CLENBQUM7QUFFcEUsT0FBTyxFQUFFLGVBQWUsRUFBcUMsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7Ozs7QUFVN0YsTUFBTSxPQUFPLHNCQUFzQjtJQVJuQztRQVNXLGlCQUFZLEdBQWtCLElBQUksQ0FBQztRQUNuQyxpQkFBWSxHQUFrQixJQUFJLENBQUM7UUFJbkIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixlQUFVLEdBQUcsS0FBSyxDQUFDO0lBc0U5QyxDQUFDOzs7OztJQWxFQyxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsWUFBWSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNuQjtRQUNELElBQUksT0FBTyxDQUFDLFlBQVksSUFBSSxPQUFPLENBQUMsWUFBWSxJQUFJLE9BQU8sQ0FBQyxZQUFZLEVBQUU7WUFDeEUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDMUI7SUFDSCxDQUFDOzs7Ozs7SUFFRCxTQUFTLENBQUMsTUFBYyxFQUFFLElBQW1CO1FBQzNDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7OztJQUVPLFVBQVU7O2NBQ1YsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUs7UUFFckMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUc7Ozs7UUFBQyxJQUFJLENBQUMs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dGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIE5nU3R5bGVJbnRlcmZhY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgaXNDb25maWdBT2JqZWN0LCBEaXNwbGF5ZWRNYXJrLCBFeHRlbmRlZE1hcmssIE1hcmsgfSBmcm9tICcuL256LXNsaWRlci1kZWZpbml0aW9ucyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHNlbGVjdG9yOiAnbnotc2xpZGVyLW1hcmtzJyxcclxuICBleHBvcnRBczogJ256U2xpZGVyTWFya3MnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1zbGlkZXItbWFya3MuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelNsaWRlck1hcmtzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBuekxvd2VyQm91bmQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIG56VXBwZXJCb3VuZDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgbnpNYXJrc0FycmF5OiBFeHRlbmRlZE1hcmtbXTtcclxuICBASW5wdXQoKSBuek1pbjogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIG56TWF4OiBudW1iZXI7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56VmVydGljYWwgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpJbmNsdWRlZCA9IGZhbHNlO1xyXG5cclxuICBtYXJrczogRGlzcGxheWVkTWFya1tdO1xyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5uek1hcmtzQXJyYXkpIHtcclxuICAgICAgdGhpcy5idWlsZE1hcmtzKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5uek1hcmtzQXJyYXkgfHwgY2hhbmdlcy5uekxvd2VyQm91bmQgfHwgY2hhbmdlcy5uelVwcGVyQm91bmQpIHtcclxuICAgICAgdGhpcy50b2dnbGVQb2ludEFjdGl2ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdHJhY2tCeUlkKF9pbmRleDogbnVtYmVyLCBtYXJrOiBEaXNwbGF5ZWRNYXJrKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBtYXJrLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBidWlsZE1hcmtzKCk6IHZvaWQge1xyXG4gICAgY29uc3QgcmFuZ2UgPSB0aGlzLm56TWF4IC0gdGhpcy5uek1pbjtcclxuXHJcbiAgICB0aGlzLm1hcmtzID0gdGhpcy5uek1hcmtzQXJyYXkubWFwKG1hcmsgPT4ge1xyXG4gICAgICBjb25zdCB7IHZhbHVlLCBvZmZzZXQsIGNvbmZpZyB9ID0gbWFyaztcclxuICAgICAgY29uc3Qgc3R5bGUgPSB0aGlzLmdldE1hcmtTdHlsZXModmFsdWUsIHJhbmdlLCBjb25maWcpO1xyXG4gICAgICBjb25zdCBsYWJlbCA9IGlzQ29uZmlnQU9iamVjdChjb25maWcpID8gY29uZmlnLmxhYmVsIDogY29uZmlnO1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBsYWJlbCxcclxuICAgICAgICBvZmZzZXQsXHJcbiAgICAgICAgc3R5bGUsXHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgY29uZmlnLFxyXG4gICAgICAgIGFjdGl2ZTogZmFsc2VcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRNYXJrU3R5bGVzKHZhbHVlOiBudW1iZXIsIHJhbmdlOiBudW1iZXIsIGNvbmZpZzogTWFyayk6IE5nU3R5bGVJbnRlcmZhY2Uge1xyXG4gICAgbGV0IHN0eWxlO1xyXG5cclxuICAgIGlmICh0aGlzLm56VmVydGljYWwpIHtcclxuICAgICAgc3R5bGUgPSB7XHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiAnLTUwJScsXHJcbiAgICAgICAgYm90dG9tOiBgJHsoKHZhbHVlIC0gdGhpcy5uek1pbikgLyByYW5nZSkgKiAxMDB9JWBcclxuICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN0eWxlID0ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZTNkKC01MCUsIDAsIDApYCxcclxuICAgICAgICBsZWZ0OiBgJHsoKHZhbHVlIC0gdGhpcy5uek1pbikgLyByYW5nZSkgKiAxMDB9JWBcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNDb25maWdBT2JqZWN0KGNvbmZpZykgJiYgY29uZmlnLnN0eWxlKSB7XHJcbiAgICAgIHN0eWxlID0geyAuLi5zdHlsZSwgLi4uY29uZmlnLnN0eWxlIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHN0eWxlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0b2dnbGVQb2ludEFjdGl2ZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm1hcmtzICYmIHRoaXMubnpMb3dlckJvdW5kICE9PSBudWxsICYmIHRoaXMubnpVcHBlckJvdW5kICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMubWFya3MuZm9yRWFjaChtYXJrID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IG1hcmsudmFsdWU7XHJcbiAgICAgICAgY29uc3QgaXNBY3RpdmUgPVxyXG4gICAgICAgICAgKCF0aGlzLm56SW5jbHVkZWQgJiYgdmFsdWUgPT09IHRoaXMubnpVcHBlckJvdW5kKSB8fFxyXG4gICAgICAgICAgKHRoaXMubnpJbmNsdWRlZCAmJiB2YWx1ZSA8PSB0aGlzLm56VXBwZXJCb3VuZCEgJiYgdmFsdWUgPj0gdGhpcy5uekxvd2VyQm91bmQhKTtcclxuXHJcbiAgICAgICAgbWFyay5hY3RpdmUgPSBpc0FjdGl2ZTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==