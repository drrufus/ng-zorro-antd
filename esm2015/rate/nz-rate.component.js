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
import { LEFT_ARROW, RIGHT_ARROW } from '@angular/cdk/keycodes';
import { forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InputBoolean, NzConfigService, WithConfig } from 'ng-zorro-antd/core';
/** @type {?} */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from 'ng-zorro-antd/tooltip';
import * as ɵngcc4 from './nz-rate-item.component';

const _c0 = ["ulElement"];
function NzRateComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 3);
    ɵngcc0.ɵɵelementStart(1, "div", 4);
    ɵngcc0.ɵɵlistener("itemHover", function NzRateComponent_li_2_Template_div_itemHover_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const i_r3 = ctx.index; const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.onItemHover(i_r3, $event); })("itemClick", function NzRateComponent_li_2_Template_div_itemClick_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const i_r3 = ctx.index; const ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.onItemClick(i_r3, $event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const star_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ctx_r1.setClasses(star_r2))("nzTitle", ctx_r1.nzTooltips[i_r3]);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("allowHalf", ctx_r1.nzAllowHalf)("character", ctx_r1.nzCharacter);
} }
const NZ_CONFIG_COMPONENT_NAME = 'rate';
export class NzRateComponent {
    /**
     * @param {?} nzConfigService
     * @param {?} renderer
     * @param {?} cdr
     */
    constructor(nzConfigService, renderer, cdr) {
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
        this.innerPrefixCls = `${this.prefixCls}-star`;
        this.isFocused = false;
        this.isInit = false;
        this.starArray = [];
        this.destroy$ = new Subject();
        this._count = 5;
        this._value = 0;
        this.onChange = (/**
         * @return {?}
         */
        () => null);
        this.onTouched = (/**
         * @return {?}
         */
        () => null);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzCount(value) {
        if (this._count === value) {
            return;
        }
        this._count = value;
        this.updateStarArray();
    }
    /**
     * @return {?}
     */
    get nzCount() {
        return this._count;
    }
    /**
     * @return {?}
     */
    get nzValue() {
        return this._value;
    }
    /**
     * @param {?} input
     * @return {?}
     */
    set nzValue(input) {
        if (this._value === input) {
            return;
        }
        this._value = input;
        this.hasHalf = !Number.isInteger(input);
        this.hoverValue = Math.ceil(input);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzAutoFocus && !changes.nzAutoFocus.isFirstChange()) {
            if (this.nzAutoFocus && !this.nzDisabled) {
                this.renderer.setAttribute(this.ulElement.nativeElement, 'autofocus', 'autofocus');
            }
            else {
                this.renderer.removeAttribute(this.ulElement.nativeElement, 'autofocus');
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updateStarArray();
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => this.cdr.markForCheck()));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.isInit = true;
    }
    /**
     * @param {?} index
     * @param {?} isHalf
     * @return {?}
     */
    onItemClick(index, isHalf) {
        if (this.nzDisabled) {
            return;
        }
        this.hoverValue = index + 1;
        /** @type {?} */
        const actualValue = isHalf ? index + 0.5 : index + 1;
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
    }
    /**
     * @param {?} index
     * @param {?} isHalf
     * @return {?}
     */
    onItemHover(index, isHalf) {
        if (this.nzDisabled || (this.hoverValue === index + 1 && isHalf === this.hasHalf)) {
            return;
        }
        this.hoverValue = index + 1;
        this.hasHalf = isHalf;
        this.nzOnHoverChange.emit(this.hoverValue);
    }
    /**
     * @return {?}
     */
    onRateLeave() {
        this.hasHalf = !Number.isInteger(this.nzValue);
        this.hoverValue = Math.ceil(this.nzValue);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onFocus(e) {
        this.isFocused = true;
        this.nzOnFocus.emit(e);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onBlur(e) {
        this.isFocused = false;
        this.nzOnBlur.emit(e);
    }
    /**
     * @return {?}
     */
    focus() {
        this.ulElement.nativeElement.focus();
    }
    /**
     * @return {?}
     */
    blur() {
        this.ulElement.nativeElement.blur();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDown(e) {
        /** @type {?} */
        const oldVal = this.nzValue;
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
    }
    /**
     * @param {?} i
     * @return {?}
     */
    setClasses(i) {
        return {
            [`${this.innerPrefixCls}-full`]: i + 1 < this.hoverValue || (!this.hasHalf && i + 1 === this.hoverValue),
            [`${this.innerPrefixCls}-half`]: this.hasHalf && i + 1 === this.hoverValue,
            [`${this.innerPrefixCls}-active`]: this.hasHalf && i + 1 === this.hoverValue,
            [`${this.innerPrefixCls}-zero`]: i + 1 > this.hoverValue,
            [`${this.innerPrefixCls}-focused`]: this.hasHalf && i + 1 === this.hoverValue && this.isFocused
        };
    }
    /**
     * @private
     * @return {?}
     */
    updateStarArray() {
        this.starArray = Array(this.nzCount)
            .fill(0)
            .map((/**
         * @param {?} _
         * @param {?} i
         * @return {?}
         */
        (_, i) => i));
    }
    // #region Implement `ControlValueAccessor`
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.nzValue = value || 0;
        this.cdr.markForCheck();
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.nzDisabled = isDisabled;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
}
NzRateComponent.ɵfac = function NzRateComponent_Factory(t) { return new (t || NzRateComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzConfigService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
NzRateComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzRateComponent, selectors: [["nz-rate"]], viewQuery: function NzRateComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.ulElement = _t.first);
    } }, inputs: { nzDisabled: "nzDisabled", nzAutoFocus: "nzAutoFocus", nzTooltips: "nzTooltips", nzCount: "nzCount", nzAllowClear: "nzAllowClear", nzAllowHalf: "nzAllowHalf", nzCharacter: "nzCharacter" }, outputs: { nzOnBlur: "nzOnBlur", nzOnFocus: "nzOnFocus", nzOnHoverChange: "nzOnHoverChange", nzOnKeyDown: "nzOnKeyDown" }, exportAs: ["nzRate"], features: [ɵngcc0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(( /**
                 * @return {?}
                 */() => NzRateComponent)),
                multi: true
            }
        ]), ɵngcc0.ɵɵNgOnChangesFeature], decls: 3, vars: 5, consts: [[1, "ant-rate", 3, "ngClass", "tabindex", "blur", "focus", "keydown", "mouseleave"], ["ulElement", ""], ["class", "ant-rate-star", "nz-tooltip", "", 3, "ngClass", "nzTitle", 4, "ngFor", "ngForOf"], ["nz-tooltip", "", 1, "ant-rate-star", 3, "ngClass", "nzTitle"], ["nz-rate-item", "", 3, "allowHalf", "character", "itemHover", "itemClick"]], template: function NzRateComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ul", 0, 1);
        ɵngcc0.ɵɵlistener("blur", function NzRateComponent_Template_ul_blur_0_listener($event) { return ctx.onBlur($event); })("focus", function NzRateComponent_Template_ul_focus_0_listener($event) { return ctx.onFocus($event); })("keydown", function NzRateComponent_Template_ul_keydown_0_listener($event) { ctx.onKeyDown($event); return $event.preventDefault(); })("mouseleave", function NzRateComponent_Template_ul_mouseleave_0_listener($event) { ctx.onRateLeave(); return $event.stopPropagation(); });
        ɵngcc0.ɵɵtemplate(2, NzRateComponent_li_2_Template, 2, 4, "li", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-rate-disabled", ctx.nzDisabled);
        ɵngcc0.ɵɵproperty("ngClass", ctx.classMap)("tabindex", ctx.nzDisabled ? 0 - 1 : 1);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.starArray);
    } }, directives: [ɵngcc2.NgClass, ɵngcc2.NgForOf, ɵngcc3.NzTooltipDirective, ɵngcc4.NzRateItemComponent], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NzRateComponent.ctorParameters = () => [
    { type: NzConfigService },
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
NzRateComponent.propDecorators = {
    ulElement: [{ type: ViewChild, args: ['ulElement', { static: false },] }],
    nzAllowClear: [{ type: Input }],
    nzAllowHalf: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzAutoFocus: [{ type: Input }],
    nzCharacter: [{ type: Input }],
    nzTooltips: [{ type: Input }],
    nzOnBlur: [{ type: Output }],
    nzOnFocus: [{ type: Output }],
    nzOnHoverChange: [{ type: Output }],
    nzOnKeyDown: [{ type: Output }],
    nzCount: [{ type: Input }]
};
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, true), InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzRateComponent.prototype, "nzAllowClear", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzRateComponent.prototype, "nzAllowHalf", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzRateComponent.prototype, "nzDisabled", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzRateComponent.prototype, "nzAutoFocus", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzRateComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-rate',
                exportAs: 'nzRate',
                preserveWhitespaces: false,
                template: "<ul #ulElement\r\n  class=\"ant-rate\"\r\n  [class.ant-rate-disabled]=\"nzDisabled\"\r\n  [ngClass]=\"classMap\"\r\n  (blur)=\"onBlur($event)\"\r\n  (focus)=\"onFocus($event)\"\r\n  (keydown)=\"onKeyDown($event); $event.preventDefault();\"\r\n  (mouseleave)=\"onRateLeave(); $event.stopPropagation();\"\r\n  [tabindex]=\"nzDisabled ? -1 : 1\">\r\n  <li *ngFor=\"let star of starArray; let i = index\"\r\n    class=\"ant-rate-star\"\r\n    [ngClass]=\"setClasses(star)\"\r\n    nz-tooltip\r\n    [nzTitle]=\"nzTooltips[ i ]\">\r\n    <div nz-rate-item\r\n      [allowHalf]=\"nzAllowHalf\"\r\n      [character]=\"nzCharacter\"\r\n      (itemHover)=\"onItemHover(i, $event)\"\r\n      (itemClick)=\"onItemClick(i, $event)\">\r\n    </div>\r\n  </li>\r\n</ul>\r\n",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(( /**
                         * @return {?}
                         */() => NzRateComponent)),
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: ɵngcc1.NzConfigService }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ChangeDetectorRef }]; }, { nzDisabled: [{
            type: Input
        }], nzAutoFocus: [{
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
        }], ulElement: [{
            type: ViewChild,
            args: ['ulElement', { static: false }]
        }], nzAllowClear: [{
            type: Input
        }], nzAllowHalf: [{
            type: Input
        }], nzCharacter: [{
            type: Input
        }] }); })();
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzRateComponent.prototype.ulElement;
    /** @type {?} */
    NzRateComponent.prototype.nzAllowClear;
    /** @type {?} */
    NzRateComponent.prototype.nzAllowHalf;
    /** @type {?} */
    NzRateComponent.prototype.nzDisabled;
    /** @type {?} */
    NzRateComponent.prototype.nzAutoFocus;
    /** @type {?} */
    NzRateComponent.prototype.nzCharacter;
    /** @type {?} */
    NzRateComponent.prototype.nzTooltips;
    /** @type {?} */
    NzRateComponent.prototype.nzOnBlur;
    /** @type {?} */
    NzRateComponent.prototype.nzOnFocus;
    /** @type {?} */
    NzRateComponent.prototype.nzOnHoverChange;
    /** @type {?} */
    NzRateComponent.prototype.nzOnKeyDown;
    /** @type {?} */
    NzRateComponent.prototype.classMap;
    /** @type {?} */
    NzRateComponent.prototype.hasHalf;
    /** @type {?} */
    NzRateComponent.prototype.hoverValue;
    /** @type {?} */
    NzRateComponent.prototype.prefixCls;
    /** @type {?} */
    NzRateComponent.prototype.innerPrefixCls;
    /** @type {?} */
    NzRateComponent.prototype.isFocused;
    /** @type {?} */
    NzRateComponent.prototype.isInit;
    /** @type {?} */
    NzRateComponent.prototype.starArray;
    /**
     * @type {?}
     * @private
     */
    NzRateComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzRateComponent.prototype._count;
    /**
     * @type {?}
     * @private
     */
    NzRateComponent.prototype._value;
    /** @type {?} */
    NzRateComponent.prototype.onChange;
    /** @type {?} */
    NzRateComponent.prototype.onTouched;
    /** @type {?} */
    NzRateComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzRateComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzRateComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIm5nOi9uZy16b3Jyby1hbnRkL3JhdGUvbnotcmF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRSxPQUFPLEVBQ0wsVUFBVSxFQUVWLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFDTixTQUFTLEVBRVQsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxZQUFZLEVBQWUsZUFBZSxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsTUFBVix3QkFBd0IsR0FBRyxNQUFNO0FBaUJ2QyxNQUFNLE9BQU8sZUFBZTs7Ozs7O0lBc0QxQixZQUFtQixlQUFnQyxFQUFVLFFBQW1CLEVBQVUsR0FBc0I7UUFBN0Ysb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBakR2RixlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBRTdDLGVBQVUsR0FBYSxFQUFFLENBQUM7UUFDaEIsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDMUMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDM0Msb0JB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MEJBQ0UsT0FBTyxFQUFFLFNBVThFO01BVjdELE5BV0w7V0FWckIsUEFVTSxZQUFZLEVBQUU7RUFWVCxFQUFFLFVBQVU7bURBVTBCO1dBVnpCLEdBQUcsRUFBRSxDQUFDLGpCQVdUO1dBWHdCLEVBQUMsVEFXeEMsWUFBWSxFQUFFO21CQVZwQixLQUFLLEVBQUUsSUFBSTtLQUNaLGtCQUNGLGNBQ0YsZUFPdUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFDeEQ7Ozs7OztJQU5FLG9DQUF5RTs7SUFFekUsdUNBQTJGOztJQUMzRixzQ0FBMkY7O0lBQzNGLHFDQUFxRDs7SUFDckQsc0NBQXNEOztJQUN0RCxzQ0FBd0M7O0lBQ3hDLHFDQUFtQzs7SUFDbkMsbUNBQTZEOztJQUM3RCxvQ0FBOEQ7O0lBQzlELDBDQUFnRTs7SUFDaEUsc0NBQW1FOztJQUVuRSxtQ0FBc0I7O0lBQ3RCLGtDQUFnQjs7SUFDaEIscUNBQWU7O0lBQ2Ysb0NBQXVCOztJQUN2Qix5Q0FBMEM7O0lBQzFDLG9DQUFrQjs7SUFDbEIsaUNBQWU7O0lBQ2Ysb0NBQXlCOzs7OztJQUV6QixtQ0FBdUM7Ozs7O0lBQ3ZDLGlDQUFtQjs7Ozs7SUFDbkIsaUNBQW1COztJQW1LbkIsbUNBQStDOztJQUMvQyxvQ0FBbUM7O0lBdkl2QiwwQ0FBdUM7Ozs7O0lBQUUsbUNBQTJCOzs7OztJQUFFLDhCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgTEVGVF9BUlJPVywgUklHSFRfQVJST1cgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xyXG5pbXBvcnQge1xyXG4gIGZvcndhcmRSZWYsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBOZ0NsYXNzVHlwZSwgTnpDb25maWdTZXJ2aWNlLCBXaXRoQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdyYXRlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc2VsZWN0b3I6ICduei1yYXRlJyxcclxuICBleHBvcnRBczogJ256UmF0ZScsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXJhdGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnpSYXRlQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelJhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XHJcbiAgQFZpZXdDaGlsZCgndWxFbGVtZW50JywgeyBzdGF0aWM6IGZhbHNlIH0pIHByaXZhdGUgdWxFbGVtZW50OiBFbGVtZW50UmVmO1xyXG5cclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIHRydWUpIEBJbnB1dEJvb2xlYW4oKSBuekFsbG93Q2xlYXI6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCBmYWxzZSkgQElucHV0Qm9vbGVhbigpIG56QWxsb3dIYWxmOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QXV0b0ZvY3VzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpDaGFyYWN0ZXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56VG9vbHRpcHM6IHN0cmluZ1tdID0gW107XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25CbHVyID0gbmV3IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uRm9jdXMgPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25Ib3ZlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uS2V5RG93biA9IG5ldyBFdmVudEVtaXR0ZXI8S2V5Ym9hcmRFdmVudD4oKTtcclxuXHJcbiAgY2xhc3NNYXA6IE5nQ2xhc3NUeXBlO1xyXG4gIGhhc0hhbGYgPSBmYWxzZTtcclxuICBob3ZlclZhbHVlID0gMDtcclxuICBwcmVmaXhDbHMgPSAnYW50LXJhdGUnO1xyXG4gIGlubmVyUHJlZml4Q2xzID0gYCR7dGhpcy5wcmVmaXhDbHN9LXN0YXJgO1xyXG4gIGlzRm9jdXNlZCA9IGZhbHNlO1xyXG4gIGlzSW5pdCA9IGZhbHNlO1xyXG4gIHN0YXJBcnJheTogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgcHJpdmF0ZSBfY291bnQgPSA1O1xyXG4gIHByaXZhdGUgX3ZhbHVlID0gMDtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpDb3VudCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy5fY291bnQgPT09IHZhbHVlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuX2NvdW50ID0gdmFsdWU7XHJcbiAgICB0aGlzLnVwZGF0ZVN0YXJBcnJheSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56Q291bnQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9jb3VudDtcclxuICB9XHJcblxyXG4gIGdldCBuelZhbHVlKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgfVxyXG5cclxuICBzZXQgbnpWYWx1ZShpbnB1dDogbnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy5fdmFsdWUgPT09IGlucHV0KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl92YWx1ZSA9IGlucHV0O1xyXG4gICAgdGhpcy5oYXNIYWxmID0gIU51bWJlci5pc0ludGVnZXIoaW5wdXQpO1xyXG4gICAgdGhpcy5ob3ZlclZhbHVlID0gTWF0aC5jZWlsKGlucHV0KTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLm56QXV0b0ZvY3VzICYmICFjaGFuZ2VzLm56QXV0b0ZvY3VzLmlzRmlyc3RDaGFuZ2UoKSkge1xyXG4gICAgICBpZiAodGhpcy5uekF1dG9Gb2N1cyAmJiAhdGhpcy5uekRpc2FibGVkKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy51bEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2F1dG9mb2N1cycsICdhdXRvZm9jdXMnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLnVsRWxlbWVudC5uYXRpdmVFbGVtZW50LCAnYXV0b2ZvY3VzJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGVTdGFyQXJyYXkoKTtcclxuXHJcbiAgICB0aGlzLm56Q29uZmlnU2VydmljZVxyXG4gICAgICAuZ2V0Q29uZmlnQ2hhbmdlRXZlbnRGb3JDb21wb25lbnQoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jZHIubWFya0ZvckNoZWNrKCkpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNJbml0ID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIG9uSXRlbUNsaWNrKGluZGV4OiBudW1iZXIsIGlzSGFsZjogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpEaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5ob3ZlclZhbHVlID0gaW5kZXggKyAxO1xyXG5cclxuICAgIGNvbnN0IGFjdHVhbFZhbHVlID0gaXNIYWxmID8gaW5kZXggKyAwLjUgOiBpbmRleCArIDE7XHJcblxyXG4gICAgaWYgKHRoaXMubnpWYWx1ZSA9PT0gYWN0dWFsVmFsdWUpIHtcclxuICAgICAgaWYgKHRoaXMubnpBbGxvd0NsZWFyKSB7XHJcbiAgICAgICAgdGhpcy5uelZhbHVlID0gMDtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMubnpWYWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubnpWYWx1ZSA9IGFjdHVhbFZhbHVlO1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMubnpWYWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkl0ZW1Ib3ZlcihpbmRleDogbnVtYmVyLCBpc0hhbGY6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56RGlzYWJsZWQgfHwgKHRoaXMuaG92ZXJWYWx1ZSA9PT0gaW5kZXggKyAxICYmIGlzSGFsZiA9PT0gdGhpcy5oYXNIYWxmKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5ob3ZlclZhbHVlID0gaW5kZXggKyAxO1xyXG4gICAgdGhpcy5oYXNIYWxmID0gaXNIYWxmO1xyXG4gICAgdGhpcy5uek9uSG92ZXJDaGFuZ2UuZW1pdCh0aGlzLmhvdmVyVmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgb25SYXRlTGVhdmUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmhhc0hhbGYgPSAhTnVtYmVyLmlzSW50ZWdlcih0aGlzLm56VmFsdWUpO1xyXG4gICAgdGhpcy5ob3ZlclZhbHVlID0gTWF0aC5jZWlsKHRoaXMubnpWYWx1ZSk7XHJcbiAgfVxyXG5cclxuICBvbkZvY3VzKGU6IEZvY3VzRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNGb2N1c2VkID0gdHJ1ZTtcclxuICAgIHRoaXMubnpPbkZvY3VzLmVtaXQoZSk7XHJcbiAgfVxyXG5cclxuICBvbkJsdXIoZTogRm9jdXNFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0ZvY3VzZWQgPSBmYWxzZTtcclxuICAgIHRoaXMubnpPbkJsdXIuZW1pdChlKTtcclxuICB9XHJcblxyXG4gIGZvY3VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy51bEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgYmx1cigpOiB2b2lkIHtcclxuICAgIHRoaXMudWxFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xyXG4gIH1cclxuXHJcbiAgb25LZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IG9sZFZhbCA9IHRoaXMubnpWYWx1ZTtcclxuXHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSBSSUdIVF9BUlJPVyAmJiB0aGlzLm56VmFsdWUgPCB0aGlzLm56Q291bnQpIHtcclxuICAgICAgdGhpcy5uelZhbHVlICs9IHRoaXMubnpBbGxvd0hhbGYgPyAwLjUgOiAxO1xyXG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IExFRlRfQVJST1cgJiYgdGhpcy5uelZhbHVlID4gMCkge1xyXG4gICAgICB0aGlzLm56VmFsdWUgLT0gdGhpcy5uekFsbG93SGFsZiA/IDAuNSA6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9sZFZhbCAhPT0gdGhpcy5uelZhbHVlKSB7XHJcbiAgICAgIHRoaXMub25DaGFuZ2UodGhpcy5uelZhbHVlKTtcclxuICAgICAgdGhpcy5uek9uS2V5RG93bi5lbWl0KGUpO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldENsYXNzZXMoaTogbnVtYmVyKTogb2JqZWN0IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIFtgJHt0aGlzLmlubmVyUHJlZml4Q2xzfS1mdWxsYF06IGkgKyAxIDwgdGhpcy5ob3ZlclZhbHVlIHx8ICghdGhpcy5oYXNIYWxmICYmIGkgKyAxID09PSB0aGlzLmhvdmVyVmFsdWUpLFxyXG4gICAgICBbYCR7dGhpcy5pbm5lclByZWZpeENsc30taGFsZmBdOiB0aGlzLmhhc0hhbGYgJiYgaSArIDEgPT09IHRoaXMuaG92ZXJWYWx1ZSxcclxuICAgICAgW2Ake3RoaXMuaW5uZXJQcmVmaXhDbHN9LWFjdGl2ZWBdOiB0aGlzLmhhc0hhbGYgJiYgaSArIDEgPT09IHRoaXMuaG92ZXJWYWx1ZSxcclxuICAgICAgW2Ake3RoaXMuaW5uZXJQcmVmaXhDbHN9LXplcm9gXTogaSArIDEgPiB0aGlzLmhvdmVyVmFsdWUsXHJcbiAgICAgIFtgJHt0aGlzLmlubmVyUHJlZml4Q2xzfS1mb2N1c2VkYF06IHRoaXMuaGFzSGFsZiAmJiBpICsgMSA9PT0gdGhpcy5ob3ZlclZhbHVlICYmIHRoaXMuaXNGb2N1c2VkXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVTdGFyQXJyYXkoKTogdm9pZCB7XHJcbiAgICB0aGlzLnN0YXJBcnJheSA9IEFycmF5KHRoaXMubnpDb3VudClcclxuICAgICAgLmZpbGwoMClcclxuICAgICAgLm1hcCgoXywgaSkgPT4gaSk7XHJcbiAgfVxyXG5cclxuICAvLyAjcmVnaW9uIEltcGxlbWVudCBgQ29udHJvbFZhbHVlQWNjZXNzb3JgXHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IG51bWJlciB8IG51bGwpOiB2b2lkIHtcclxuICAgIHRoaXMubnpWYWx1ZSA9IHZhbHVlIHx8IDA7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5uekRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBudW1iZXIpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2U6ICh2YWx1ZTogbnVtYmVyKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcclxuICBvblRvdWNoZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcbn1cclxuIl19