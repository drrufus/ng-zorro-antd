import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { LEFT_ARROW, RIGHT_ARROW } from '@angular/cdk/keycodes';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Input, Output, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InputBoolean, NzConfigService, WithConfig } from 'ng-zorro-antd/core';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/tooltip";
import * as i4 from "./nz-rate-item.component";
var _c0 = ["ulElement"];
function NzRateComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    var _r698 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 3);
    i0.ɵɵelementStart(1, "div", 4);
    i0.ɵɵlistener("itemHover", function NzRateComponent_li_2_Template_div_itemHover_1_listener($event) { i0.ɵɵrestoreView(_r698); var i_r696 = ctx.index; var ctx_r697 = i0.ɵɵnextContext(); return ctx_r697.onItemHover(i_r696, $event); })("itemClick", function NzRateComponent_li_2_Template_div_itemClick_1_listener($event) { i0.ɵɵrestoreView(_r698); var i_r696 = ctx.index; var ctx_r699 = i0.ɵɵnextContext(); return ctx_r699.onItemClick(i_r696, $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var star_r695 = ctx.$implicit;
    var i_r696 = ctx.index;
    var ctx_r694 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r694.setClasses(star_r695))("nzTitle", ctx_r694.nzTooltips[i_r696]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("allowHalf", ctx_r694.nzAllowHalf)("character", ctx_r694.nzCharacter);
} }
var NZ_CONFIG_COMPONENT_NAME = 'rate';
var NzRateComponent = /** @class */ (function () {
    function NzRateComponent(nzConfigService, renderer, cdr) {
        this.nzConfigService = nzConfigService;
        this.renderer = renderer;
        this.cdr = cdr;
        this.nzDisabled = false;
        this.nzAutoFocus = false;
        this.nzTooltips = [];
        this.nzOnBlur = new EventEmitter();
        this.nzOnFocus = new EventEmitter();
        this.nzOnHoverChange = new EventEmitter();
        this.nzOnKeyDown = new EventEmitter();
        this.hasHalf = false;
        this.hoverValue = 0;
        this.prefixCls = 'ant-rate';
        this.innerPrefixCls = this.prefixCls + "-star";
        this.isFocused = false;
        this.isInit = false;
        this.starArray = [];
        this.destroy$ = new Subject();
        this._count = 5;
        this._value = 0;
        this.onChange = function () { return null; };
        this.onTouched = function () { return null; };
    }
    Object.defineProperty(NzRateComponent.prototype, "nzCount", {
        get: function () {
            return this._count;
        },
        set: function (value) {
            if (this._count === value) {
                return;
            }
            this._count = value;
            this.updateStarArray();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzRateComponent.prototype, "nzValue", {
        get: function () {
            return this._value;
        },
        set: function (input) {
            if (this._value === input) {
                return;
            }
            this._value = input;
            this.hasHalf = !Number.isInteger(input);
            this.hoverValue = Math.ceil(input);
        },
        enumerable: true,
        configurable: true
    });
    NzRateComponent.prototype.ngOnChanges = function (changes) {
        if (changes.nzAutoFocus && !changes.nzAutoFocus.isFirstChange()) {
            if (this.nzAutoFocus && !this.nzDisabled) {
                this.renderer.setAttribute(this.ulElement.nativeElement, 'autofocus', 'autofocus');
            }
            else {
                this.renderer.removeAttribute(this.ulElement.nativeElement, 'autofocus');
            }
        }
    };
    NzRateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.updateStarArray();
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe(function () { return _this.cdr.markForCheck(); });
    };
    NzRateComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzRateComponent.prototype.ngAfterViewInit = function () {
        this.isInit = true;
    };
    NzRateComponent.prototype.onItemClick = function (index, isHalf) {
        if (this.nzDisabled) {
            return;
        }
        this.hoverValue = index + 1;
        var actualValue = isHalf ? index + 0.5 : index + 1;
        if (this.nzValue === actualValue) {
            if (this.nzAllowClear) {
                this.nzValue = 0;
                this.onChange(this.nzValue);
            }
        }
        else {
            this.nzValue = actualValue;
            this.onChange(this.nzValue);
        }
    };
    NzRateComponent.prototype.onItemHover = function (index, isHalf) {
        if (this.nzDisabled || (this.hoverValue === index + 1 && isHalf === this.hasHalf)) {
            return;
        }
        this.hoverValue = index + 1;
        this.hasHalf = isHalf;
        this.nzOnHoverChange.emit(this.hoverValue);
    };
    NzRateComponent.prototype.onRateLeave = function () {
        this.hasHalf = !Number.isInteger(this.nzValue);
        this.hoverValue = Math.ceil(this.nzValue);
    };
    NzRateComponent.prototype.onFocus = function (e) {
        this.isFocused = true;
        this.nzOnFocus.emit(e);
    };
    NzRateComponent.prototype.onBlur = function (e) {
        this.isFocused = false;
        this.nzOnBlur.emit(e);
    };
    NzRateComponent.prototype.focus = function () {
        this.ulElement.nativeElement.focus();
    };
    NzRateComponent.prototype.blur = function () {
        this.ulElement.nativeElement.blur();
    };
    NzRateComponent.prototype.onKeyDown = function (e) {
        var oldVal = this.nzValue;
        if (e.keyCode === RIGHT_ARROW && this.nzValue < this.nzCount) {
            this.nzValue += this.nzAllowHalf ? 0.5 : 1;
        }
        else if (e.keyCode === LEFT_ARROW && this.nzValue > 0) {
            this.nzValue -= this.nzAllowHalf ? 0.5 : 1;
        }
        if (oldVal !== this.nzValue) {
            this.onChange(this.nzValue);
            this.nzOnKeyDown.emit(e);
            this.cdr.markForCheck();
        }
    };
    NzRateComponent.prototype.setClasses = function (i) {
        var _a;
        return _a = {},
            _a[this.innerPrefixCls + "-full"] = i + 1 < this.hoverValue || (!this.hasHalf && i + 1 === this.hoverValue),
            _a[this.innerPrefixCls + "-half"] = this.hasHalf && i + 1 === this.hoverValue,
            _a[this.innerPrefixCls + "-active"] = this.hasHalf && i + 1 === this.hoverValue,
            _a[this.innerPrefixCls + "-zero"] = i + 1 > this.hoverValue,
            _a[this.innerPrefixCls + "-focused"] = this.hasHalf && i + 1 === this.hoverValue && this.isFocused,
            _a;
    };
    NzRateComponent.prototype.updateStarArray = function () {
        this.starArray = Array(this.nzCount)
            .fill(0)
            .map(function (_, i) { return i; });
    };
    // #region Implement `ControlValueAccessor`
    NzRateComponent.prototype.writeValue = function (value) {
        this.nzValue = value || 0;
        this.cdr.markForCheck();
    };
    NzRateComponent.prototype.setDisabledState = function (isDisabled) {
        this.nzDisabled = isDisabled;
    };
    NzRateComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    NzRateComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    /** @nocollapse */ NzRateComponent.ɵfac = function NzRateComponent_Factory(t) { return new (t || NzRateComponent)(i0.ɵɵdirectiveInject(i1.NzConfigService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ NzRateComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzRateComponent, selectors: [["nz-rate"]], viewQuery: function NzRateComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.ulElement = _t.first);
        } }, inputs: { nzAllowClear: "nzAllowClear", nzAllowHalf: "nzAllowHalf", nzDisabled: "nzDisabled", nzAutoFocus: "nzAutoFocus", nzCharacter: "nzCharacter", nzTooltips: "nzTooltips", nzCount: "nzCount" }, outputs: { nzOnBlur: "nzOnBlur", nzOnFocus: "nzOnFocus", nzOnHoverChange: "nzOnHoverChange", nzOnKeyDown: "nzOnKeyDown" }, exportAs: ["nzRate"], features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef((function () { return NzRateComponent; })),
                    multi: true
                }
            ]), i0.ɵɵNgOnChangesFeature()], decls: 3, vars: 4, consts: [[1, "ant-rate", 3, "ngClass", "tabindex", "blur", "focus", "keydown", "mouseleave"], ["ulElement", ""], ["class", "ant-rate-star", "nz-tooltip", "", 3, "ngClass", "nzTitle", 4, "ngFor", "ngForOf"], ["nz-tooltip", "", 1, "ant-rate-star", 3, "ngClass", "nzTitle"], ["nz-rate-item", "", 3, "allowHalf", "character", "itemHover", "itemClick"]], template: function NzRateComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "ul", 0, 1);
            i0.ɵɵlistener("blur", function NzRateComponent_Template_ul_blur_0_listener($event) { return ctx.onBlur($event); })("focus", function NzRateComponent_Template_ul_focus_0_listener($event) { return ctx.onFocus($event); })("keydown", function NzRateComponent_Template_ul_keydown_0_listener($event) { ctx.onKeyDown($event); return $event.preventDefault(); })("mouseleave", function NzRateComponent_Template_ul_mouseleave_0_listener($event) { ctx.onRateLeave(); return $event.stopPropagation(); });
            i0.ɵɵtemplate(2, NzRateComponent_li_2_Template, 2, 4, "li", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassProp("ant-rate-disabled", ctx.nzDisabled);
            i0.ɵɵproperty("ngClass", ctx.classMap)("tabindex", ctx.nzDisabled ? 0 - 1 : 1);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.starArray);
        } }, directives: [i2.NgClass, i2.NgForOf, i3.NzTooltipDirective, i4.NzRateItemComponent], encapsulation: 2, changeDetection: 0 });
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, true), InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzRateComponent.prototype, "nzAllowClear", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzRateComponent.prototype, "nzAllowHalf", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzRateComponent.prototype, "nzDisabled", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzRateComponent.prototype, "nzAutoFocus", void 0);
    return NzRateComponent;
}());
export { NzRateComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzRateComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-rate',
                exportAs: 'nzRate',
                preserveWhitespaces: false,
                templateUrl: './nz-rate.component.html',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((function () { return NzRateComponent; })),
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: i1.NzConfigService }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }]; }, { ulElement: [{
            type: ViewChild,
            args: ['ulElement', { static: false }]
        }], nzAllowClear: [{
            type: Input
        }], nzAllowHalf: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }], nzAutoFocus: [{
            type: Input
        }], nzCharacter: [{
            type: Input
        }], nzTooltips: [{
            type: Input
        }], nzOnBlur: [{
            type: Output
        }], nzOnFocus: [{
            type: Output
        }], nzOnHoverChange: [{
            type: Output
        }], nzOnKeyDown: [{
            type: Output
        }], nzCount: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3JhdGUvIiwic291cmNlcyI6WyJuei1yYXRlLmNvbXBvbmVudC50cyIsIm56LXJhdGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDaEUsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osVUFBVSxFQUNWLEtBQUssRUFJTCxNQUFNLEVBQ04sU0FBUyxFQUVULFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsWUFBWSxFQUFlLGVBQWUsRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7O0lDckIxRiw2QkFPRTtJQUFBLDhCQU1PO0lBRkwsd09BQW9DLDJOQUFBO0lBRXJDLGlCQUFNO0lBQ1QsaUJBQUs7Ozs7O0lBWEgsd0RBQTRCLHdDQUFBO0lBTTFCLGVBQXlCO0lBQXpCLGdEQUF5QixtQ0FBQTs7QURjL0IsSUFBTSx3QkFBd0IsR0FBRyxNQUFNLENBQUM7QUFFeEM7SUFxRUUseUJBQW1CLGVBQWdDLEVBQVUsUUFBbUIsRUFBVSxHQUFzQjtRQUE3RixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFqRHZGLGVBQVUsR0FBWSxLQUFLLENBQUM7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WSxFQUFFOzt5REFBdUI7SUFDckI7UUFBNUQsVUFBVSxDQUFDLHdCQUF3QixFQUFFLEtBQUssQ0FBQyxFQUFFLFlBQVksRUFBRTs7d0RBQXNCO0lBQ2xFO1FBQWYsWUFBWSxFQUFFOzt1REFBNkI7SUFDNUI7UUFBZixZQUFZLEVBQUU7O3dEQUE4QjswQkF6RHhEO0NBbVBDLEFBL01ELElBK01DO1NBaE1ZLGVBQWU7a0RBQWYsZUFBZTtjQWYzQixTQUFTO2VBQUM7Z0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxRQUFRLEVBQUUsU0FBUztnQkFDbkIsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLFdBQVcsRUFBRSwwQkFBMEI7Z0JBQ3ZDLFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVSxFQUFDLGNBQU0sT0FBQSxlQUFlLEVBQWYsQ0FBZSxFQUFDO3dCQUM5QyxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjthQUNGOztrQkFFRSxTQUFTO21CQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O2tCQUV4QyxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFlTixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBMRUZUX0FSUk9XLCBSSUdIVF9BUlJPVyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgZm9yd2FyZFJlZixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIE5nQ2xhc3NUeXBlLCBOekNvbmZpZ1NlcnZpY2UsIFdpdGhDb25maWcgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ3JhdGUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzZWxlY3RvcjogJ256LXJhdGUnLFxyXG4gIGV4cG9ydEFzOiAnbnpSYXRlJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotcmF0ZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOelJhdGVDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56UmF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBDb250cm9sVmFsdWVBY2Nlc3NvciwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcclxuICBAVmlld0NoaWxkKCd1bEVsZW1lbnQnLCB7IHN0YXRpYzogZmFsc2UgfSkgcHJpdmF0ZSB1bEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgdHJ1ZSkgQElucHV0Qm9vbGVhbigpIG56QWxsb3dDbGVhcjogYm9vbGVhbjtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIGZhbHNlKSBASW5wdXRCb29sZWFuKCkgbnpBbGxvd0hhbGY6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpBdXRvRm9jdXM6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBuekNoYXJhY3RlcjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpUb29sdGlwczogc3RyaW5nW10gPSBbXTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkJsdXIgPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25Gb2N1cyA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkhvdmVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25LZXlEb3duID0gbmV3IEV2ZW50RW1pdHRlcjxLZXlib2FyZEV2ZW50PigpO1xyXG5cclxuICBjbGFzc01hcDogTmdDbGFzc1R5cGU7XHJcbiAgaGFzSGFsZiA9IGZhbHNlO1xyXG4gIGhvdmVyVmFsdWUgPSAwO1xyXG4gIHByZWZpeENscyA9ICdhbnQtcmF0ZSc7XHJcbiAgaW5uZXJQcmVmaXhDbHMgPSBgJHt0aGlzLnByZWZpeENsc30tc3RhcmA7XHJcbiAgaXNGb2N1c2VkID0gZmFsc2U7XHJcbiAgaXNJbml0ID0gZmFsc2U7XHJcbiAgc3RhckFycmF5OiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBwcml2YXRlIF9jb3VudCA9IDU7XHJcbiAgcHJpdmF0ZSBfdmFsdWUgPSAwO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekNvdW50KHZhbHVlOiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLl9jb3VudCA9PT0gdmFsdWUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fY291bnQgPSB2YWx1ZTtcclxuICAgIHRoaXMudXBkYXRlU3RhckFycmF5KCk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpDb3VudCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvdW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56VmFsdWUoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcclxuICB9XHJcblxyXG4gIHNldCBuelZhbHVlKGlucHV0OiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLl92YWx1ZSA9PT0gaW5wdXQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3ZhbHVlID0gaW5wdXQ7XHJcbiAgICB0aGlzLmhhc0hhbGYgPSAhTnVtYmVyLmlzSW50ZWdlcihpbnB1dCk7XHJcbiAgICB0aGlzLmhvdmVyVmFsdWUgPSBNYXRoLmNlaWwoaW5wdXQpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMubnpBdXRvRm9jdXMgJiYgIWNoYW5nZXMubnpBdXRvRm9jdXMuaXNGaXJzdENoYW5nZSgpKSB7XHJcbiAgICAgIGlmICh0aGlzLm56QXV0b0ZvY3VzICYmICF0aGlzLm56RGlzYWJsZWQpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLnVsRWxlbWVudC5uYXRpdmVFbGVtZW50LCAnYXV0b2ZvY3VzJywgJ2F1dG9mb2N1cycpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMudWxFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdhdXRvZm9jdXMnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZVN0YXJBcnJheSgpO1xyXG5cclxuICAgIHRoaXMubnpDb25maWdTZXJ2aWNlXHJcbiAgICAgIC5nZXRDb25maWdDaGFuZ2VFdmVudEZvckNvbXBvbmVudChOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0luaXQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgb25JdGVtQ2xpY2soaW5kZXg6IG51bWJlciwgaXNIYWxmOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uekRpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmhvdmVyVmFsdWUgPSBpbmRleCArIDE7XHJcblxyXG4gICAgY29uc3QgYWN0dWFsVmFsdWUgPSBpc0hhbGYgPyBpbmRleCArIDAuNSA6IGluZGV4ICsgMTtcclxuXHJcbiAgICBpZiAodGhpcy5uelZhbHVlID09PSBhY3R1YWxWYWx1ZSkge1xyXG4gICAgICBpZiAodGhpcy5uekFsbG93Q2xlYXIpIHtcclxuICAgICAgICB0aGlzLm56VmFsdWUgPSAwO1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2UodGhpcy5uelZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5uelZhbHVlID0gYWN0dWFsVmFsdWU7XHJcbiAgICAgIHRoaXMub25DaGFuZ2UodGhpcy5uelZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uSXRlbUhvdmVyKGluZGV4OiBudW1iZXIsIGlzSGFsZjogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpEaXNhYmxlZCB8fCAodGhpcy5ob3ZlclZhbHVlID09PSBpbmRleCArIDEgJiYgaXNIYWxmID09PSB0aGlzLmhhc0hhbGYpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmhvdmVyVmFsdWUgPSBpbmRleCArIDE7XHJcbiAgICB0aGlzLmhhc0hhbGYgPSBpc0hhbGY7XHJcbiAgICB0aGlzLm56T25Ib3ZlckNoYW5nZS5lbWl0KHRoaXMuaG92ZXJWYWx1ZSk7XHJcbiAgfVxyXG5cclxuICBvblJhdGVMZWF2ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuaGFzSGFsZiA9ICFOdW1iZXIuaXNJbnRlZ2VyKHRoaXMubnpWYWx1ZSk7XHJcbiAgICB0aGlzLmhvdmVyVmFsdWUgPSBNYXRoLmNlaWwodGhpcy5uelZhbHVlKTtcclxuICB9XHJcblxyXG4gIG9uRm9jdXMoZTogRm9jdXNFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0ZvY3VzZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5uek9uRm9jdXMuZW1pdChlKTtcclxuICB9XHJcblxyXG4gIG9uQmx1cihlOiBGb2N1c0V2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLmlzRm9jdXNlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5uek9uQmx1ci5lbWl0KGUpO1xyXG4gIH1cclxuXHJcbiAgZm9jdXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVsRWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICBibHVyKCk6IHZvaWQge1xyXG4gICAgdGhpcy51bEVsZW1lbnQubmF0aXZlRWxlbWVudC5ibHVyKCk7XHJcbiAgfVxyXG5cclxuICBvbktleURvd24oZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgY29uc3Qgb2xkVmFsID0gdGhpcy5uelZhbHVlO1xyXG5cclxuICAgIGlmIChlLmtleUNvZGUgPT09IFJJR0hUX0FSUk9XICYmIHRoaXMubnpWYWx1ZSA8IHRoaXMubnpDb3VudCkge1xyXG4gICAgICB0aGlzLm56VmFsdWUgKz0gdGhpcy5uekFsbG93SGFsZiA/IDAuNSA6IDE7XHJcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gTEVGVF9BUlJPVyAmJiB0aGlzLm56VmFsdWUgPiAwKSB7XHJcbiAgICAgIHRoaXMubnpWYWx1ZSAtPSB0aGlzLm56QWxsb3dIYWxmID8gMC41IDogMTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAob2xkVmFsICE9PSB0aGlzLm56VmFsdWUpIHtcclxuICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLm56VmFsdWUpO1xyXG4gICAgICB0aGlzLm56T25LZXlEb3duLmVtaXQoZSk7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0Q2xhc3NlcyhpOiBudW1iZXIpOiBvYmplY3Qge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgW2Ake3RoaXMuaW5uZXJQcmVmaXhDbHN9LWZ1bGxgXTogaSArIDEgPCB0aGlzLmhvdmVyVmFsdWUgfHwgKCF0aGlzLmhhc0hhbGYgJiYgaSArIDEgPT09IHRoaXMuaG92ZXJWYWx1ZSksXHJcbiAgICAgIFtgJHt0aGlzLmlubmVyUHJlZml4Q2xzfS1oYWxmYF06IHRoaXMuaGFzSGFsZiAmJiBpICsgMSA9PT0gdGhpcy5ob3ZlclZhbHVlLFxyXG4gICAgICBbYCR7dGhpcy5pbm5lclByZWZpeENsc30tYWN0aXZlYF06IHRoaXMuaGFzSGFsZiAmJiBpICsgMSA9PT0gdGhpcy5ob3ZlclZhbHVlLFxyXG4gICAgICBbYCR7dGhpcy5pbm5lclByZWZpeENsc30temVyb2BdOiBpICsgMSA+IHRoaXMuaG92ZXJWYWx1ZSxcclxuICAgICAgW2Ake3RoaXMuaW5uZXJQcmVmaXhDbHN9LWZvY3VzZWRgXTogdGhpcy5oYXNIYWxmICYmIGkgKyAxID09PSB0aGlzLmhvdmVyVmFsdWUgJiYgdGhpcy5pc0ZvY3VzZWRcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZVN0YXJBcnJheSgpOiB2b2lkIHtcclxuICAgIHRoaXMuc3RhckFycmF5ID0gQXJyYXkodGhpcy5uekNvdW50KVxyXG4gICAgICAuZmlsbCgwKVxyXG4gICAgICAubWFwKChfLCBpKSA9PiBpKTtcclxuICB9XHJcblxyXG4gIC8vICNyZWdpb24gSW1wbGVtZW50IGBDb250cm9sVmFsdWVBY2Nlc3NvcmBcclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogbnVtYmVyIHwgbnVsbCk6IHZvaWQge1xyXG4gICAgdGhpcy5uelZhbHVlID0gdmFsdWUgfHwgMDtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLm56RGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IG51bWJlcikgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZTogKHZhbHVlOiBudW1iZXIpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xyXG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IG51bGw7XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxufVxyXG4iLCI8dWxcclxuICAjdWxFbGVtZW50XHJcbiAgY2xhc3M9XCJhbnQtcmF0ZVwiXHJcbiAgW2NsYXNzLmFudC1yYXRlLWRpc2FibGVkXT1cIm56RGlzYWJsZWRcIlxyXG4gIFtuZ0NsYXNzXT1cImNsYXNzTWFwXCJcclxuICAoYmx1cik9XCJvbkJsdXIoJGV2ZW50KVwiXHJcbiAgKGZvY3VzKT1cIm9uRm9jdXMoJGV2ZW50KVwiXHJcbiAgKGtleWRvd24pPVwib25LZXlEb3duKCRldmVudCk7ICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCJcclxuICAobW91c2VsZWF2ZSk9XCJvblJhdGVMZWF2ZSgpOyAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIlxyXG4gIFt0YWJpbmRleF09XCJuekRpc2FibGVkID8gLTEgOiAxXCJcclxuPlxyXG4gIDxsaVxyXG4gICAgKm5nRm9yPVwibGV0IHN0YXIgb2Ygc3RhckFycmF5OyBsZXQgaSA9IGluZGV4XCJcclxuICAgIGNsYXNzPVwiYW50LXJhdGUtc3RhclwiXHJcbiAgICBbbmdDbGFzc109XCJzZXRDbGFzc2VzKHN0YXIpXCJcclxuICAgIG56LXRvb2x0aXBcclxuICAgIFtuelRpdGxlXT1cIm56VG9vbHRpcHNbaV1cIlxyXG4gID5cclxuICAgIDxkaXZcclxuICAgICAgbnotcmF0ZS1pdGVtXHJcbiAgICAgIFthbGxvd0hhbGZdPVwibnpBbGxvd0hhbGZcIlxyXG4gICAgICBbY2hhcmFjdGVyXT1cIm56Q2hhcmFjdGVyXCJcclxuICAgICAgKGl0ZW1Ib3Zlcik9XCJvbkl0ZW1Ib3ZlcihpLCAkZXZlbnQpXCJcclxuICAgICAgKGl0ZW1DbGljayk9XCJvbkl0ZW1DbGljayhpLCAkZXZlbnQpXCJcclxuICAgID48L2Rpdj5cclxuICA8L2xpPlxyXG48L3VsPlxyXG4iXX0=