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

var _c0 = ["ulElement"];
function NzRateComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    var _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 3);
    ɵngcc0.ɵɵelementStart(1, "div", 4);
    ɵngcc0.ɵɵlistener("itemHover", function NzRateComponent_li_2_Template_div_itemHover_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); var i_r3 = ctx.index; var ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.onItemHover(i_r3, $event); })("itemClick", function NzRateComponent_li_2_Template_div_itemClick_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); var i_r3 = ctx.index; var ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.onItemClick(i_r3, $event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var star_r2 = ctx.$implicit;
    var i_r3 = ctx.index;
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ctx_r1.setClasses(star_r2))("nzTitle", ctx_r1.nzTooltips[i_r3]);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("allowHalf", ctx_r1.nzAllowHalf)("character", ctx_r1.nzCharacter);
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
        this.onChange = (/**
         * @return {?}
         */
        function () { return null; });
        this.onTouched = (/**
         * @return {?}
         */
        function () { return null; });
    }
    Object.defineProperty(NzRateComponent.prototype, "nzCount", {
        get: /**
         * @return {?}
         */
        function () {
            return this._count;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
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
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} input
         * @return {?}
         */
        function (input) {
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
    /**
     * @param {?} changes
     * @return {?}
     */
    NzRateComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzAutoFocus && !changes.nzAutoFocus.isFirstChange()) {
            if (this.nzAutoFocus && !this.nzDisabled) {
                this.renderer.setAttribute(this.ulElement.nativeElement, 'autofocus', 'autofocus');
            }
            else {
                this.renderer.removeAttribute(this.ulElement.nativeElement, 'autofocus');
            }
        }
    };
    /**
     * @return {?}
     */
    NzRateComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.updateStarArray();
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.cdr.markForCheck(); }));
    };
    /**
     * @return {?}
     */
    NzRateComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @return {?}
     */
    NzRateComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.isInit = true;
    };
    /**
     * @param {?} index
     * @param {?} isHalf
     * @return {?}
     */
    NzRateComponent.prototype.onItemClick = /**
     * @param {?} index
     * @param {?} isHalf
     * @return {?}
     */
    function (index, isHalf) {
        if (this.nzDisabled) {
            return;
        }
        this.hoverValue = index + 1;
        /** @type {?} */
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
    /**
     * @param {?} index
     * @param {?} isHalf
     * @return {?}
     */
    NzRateComponent.prototype.onItemHover = /**
     * @param {?} index
     * @param {?} isHalf
     * @return {?}
     */
    function (index, isHalf) {
        if (this.nzDisabled || (this.hoverValue === index + 1 && isHalf === this.hasHalf)) {
            return;
        }
        this.hoverValue = index + 1;
        this.hasHalf = isHalf;
        this.nzOnHoverChange.emit(this.hoverValue);
    };
    /**
     * @return {?}
     */
    NzRateComponent.prototype.onRateLeave = /**
     * @return {?}
     */
    function () {
        this.hasHalf = !Number.isInteger(this.nzValue);
        this.hoverValue = Math.ceil(this.nzValue);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzRateComponent.prototype.onFocus = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.isFocused = true;
        this.nzOnFocus.emit(e);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzRateComponent.prototype.onBlur = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.isFocused = false;
        this.nzOnBlur.emit(e);
    };
    /**
     * @return {?}
     */
    NzRateComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        this.ulElement.nativeElement.focus();
    };
    /**
     * @return {?}
     */
    NzRateComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        this.ulElement.nativeElement.blur();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzRateComponent.prototype.onKeyDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
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
    /**
     * @param {?} i
     * @return {?}
     */
    NzRateComponent.prototype.setClasses = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        var _a;
        return _a = {},
            _a[this.innerPrefixCls + "-full"] = i + 1 < this.hoverValue || (!this.hasHalf && i + 1 === this.hoverValue),
            _a[this.innerPrefixCls + "-half"] = this.hasHalf && i + 1 === this.hoverValue,
            _a[this.innerPrefixCls + "-active"] = this.hasHalf && i + 1 === this.hoverValue,
            _a[this.innerPrefixCls + "-zero"] = i + 1 > this.hoverValue,
            _a[this.innerPrefixCls + "-focused"] = this.hasHalf && i + 1 === this.hoverValue && this.isFocused,
            _a;
    };
    /**
     * @private
     * @return {?}
     */
    NzRateComponent.prototype.updateStarArray = /**
     * @private
     * @return {?}
     */
    function () {
        this.starArray = Array(this.nzCount)
            .fill(0)
            .map((/**
         * @param {?} _
         * @param {?} i
         * @return {?}
         */
        function (_, i) { return i; }));
    };
    // #region Implement `ControlValueAccessor`
    // #region Implement `ControlValueAccessor`
    /**
     * @param {?} value
     * @return {?}
     */
    NzRateComponent.prototype.writeValue = 
    // #region Implement `ControlValueAccessor`
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.nzValue = value || 0;
        this.cdr.markForCheck();
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NzRateComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.nzDisabled = isDisabled;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzRateComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzRateComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /** @nocollapse */
    NzRateComponent.ctorParameters = function () { return [
        { type: NzConfigService },
        { type: Renderer2 },
        { type: ChangeDetectorRef }
    ]; };
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
                 */function () { return NzRateComponent; })),
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
                         */function () { return NzRateComponent; })),
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
    return NzRateComponent;
}());
export { NzRateComponent };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIm5nOi9uZy16b3Jyby1hbnRkL3JhdGUvbnotcmF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRSxPQUFPLEVBQ0wsVUFBVSxFQUVWLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFDTixTQUFTLEVBRVQsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxZQUFZLEVBQWUsZUFBZSxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBVix3QkFBd0IsR0FBRyxNQUFNO0FBRXZDO0lBcUVFLHlCQUFtQixlQUFnQyxFQUFVLFFBQW1CLEVBQVUsR0FBc0I7UUFBN0Ysb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBakR2RixlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBRTdDLGVBQVUsR0FBYSxFQUFFLENBQUM7UUFDaEIsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDMUMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDM0Msb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQzdDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQWlCLENBQUM7UUFHbkUsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsY0FBUyxHQUFHLFVBQVUsQ0FBQztRQUN2QixtQkFBYyxHQUFNLElBQUksQ0FBQyxTQUFTLFVBQU8sQ0FBQztRQUMxQyxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixjQUFTLEdBQWEsRUFBRSxDQUFDO1FBRWpCLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQy9CLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFDWCxXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBbUtuQixhQUFROzs7UUFBNEIsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLEVBQUM7UUFDL0MsY0FBUzs7O1FBQWUsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLEVBQUM7SUF2SWdGLENBQUM7SUEzQnBILHNCQUNJLG9DQUFPOzs7O1FBUVg7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzs7Ozs7UUFYRCxVQUNZLEtBQWE7WUFDdkIsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLEtBQUssRUFBRTtnQkFDekIsT0FBTzthQUNSO1lBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBTUQsc0JBQUksb0NBQU87Ozs7UUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQixDQUFDOzs7OztRQUVELFVBQVksS0FBYTtZQUN2QixJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssS0FBSyxFQUFFO2dCQUN6QixPQUFPO2FBQ1I7WUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsQ0FBQzs7O09BVkE7Ozs7O0lBY0QscUNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLFdBQVcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDL0QsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDO2FBQ3BGO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO2FBQzFFO1NBQ0Y7SUFDSCxDQUFDOzs7O0lBRUQsa0NBQVE7OztJQUFSO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFdkIsSUFBSSxDQUFDLGVBQWU7YUFDakIsZ0NBQWdDLENBQUMsd0JBQXdCLENBQUM7YUFDMUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDOUIsU0FBUzs7O1FBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLEVBQXZCLENBQXVCLEVBQUMsQ0FBQztJQUM5QyxDQUFDOzs7O0lBRUQscUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCx5Q0FBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDOzs7Ozs7SUFFRCxxQ0FBVzs7Ozs7SUFBWCxVQUFZLEtBQWEsRUFBRSxNQUFlO1FBQ3hDLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7O1lBRXRCLFdBQVcsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDO1FBRXBELElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxXQUFXLEVBQUU7WUFDaEMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztnQkFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDN0I7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUM7WUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDN0I7SUFDSCxDQUFDOzs7Ozs7SUFFRCxxQ0FBVzs7Ozs7SUFBWCxVQUFZLEtBQWEsRUFBRSxNQUFlO1FBQ3hDLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUssS0FBSyxHQUFHLENBQUMsSUFBSSxNQUFNLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ2pGLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7OztJQUVELHFDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7O0lBRUQsaUNBQU87Ozs7SUFBUCxVQUFRLENBQWE7UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCxnQ0FBTTs7OztJQUFOLFVBQU8sQ0FBYTtRQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsK0JBQUs7OztJQUFMO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdkMsQ0FBQzs7OztJQUVELDhCQUFJOzs7SUFBSjtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RDLENBQUM7Ozs7O0lBRUQsbUNBQVM7Ozs7SUFBVCxVQUFVLENBQWdCOztZQUNsQixNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU87UUFFM0IsSUFBSSxDQUFDLENBQUMsT0FBTyxLQUFLLFdBQVcsSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDNUQsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM1QzthQUFNLElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBSyxVQUFVLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLEVBQUU7WUFDdkQsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM1QztRQUVELElBQUksTUFBTSxLQUFLLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN6QjtJQUNILENBQUM7Ozs7O0lBRUQsb0NBQVU7Ozs7SUFBVixVQUFXLENBQVM7O1FBQ2xCO1lBQ0UsR0FBSSxJQUFJLENBQUMsY0FBYyxVQUFPLElBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUN4RyxHQUFJLElBQUksQ0FBQyxjQUFjLFVBQU8sSUFBRyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxDQUFDLFVBQVU7WUFDMUUsR0FBSSxJQUFJLENBQUMsY0FBYyxZQUFTLElBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksQ0FBQyxVQUFVO1lBQzVFLEdBQUksSUFBSSxDQUFDLGNBQWMsVUFBTyxJQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVU7WUFDeEQsR0FBSSxJQUFJLENBQUMsY0FBYyxhQUFVLElBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFNBQVM7ZUFDL0Y7SUFDSixDQUFDOzs7OztJQUVPLHlDQUFlOzs7O0lBQXZCO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUNqQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ1AsR0FBRzs7Ozs7UUFBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLEVBQUQsQ0FBQyxFQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELDJDQUEyQzs7Ozs7O0lBRTNDLG9DQUFVOzs7Ozs7SUFBVixVQUFXLEtBQW9CO1FBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsMENBQWdCOzs7O0lBQWhCLFVBQWlCLFVBQW1CO1FBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRUQsMENBQWdCOzs7O0lBQWhCLFVBQWlCLEVBQXVCO1FBQ3RDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsMkNBQWlCOzs7O0lBQWpCLFVBQWtCLEVBQWM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQyxDQUNILEFBM0xROzs0QkFmUCxTQUFTLFNBQUM7UUFDVCxlQUFlLEVBQUUsVEFMaUIsZUFBZTthQUtULENBQUMsTUFBTSxKQWYvQyxTQUFTO2FBZ0JULGFBQWEsRUFBRSxaQXpCZixpQkFBaUI7U0F5QmU7QUFBQyxJQUFJLHNCQUNyQyxRQUFRLEVBQUU7TUFBUyxzQkFDbkIsUUFBUSxFQUFFLFFBQVEsc0JBQ2xCLHhDQVdDLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO0lBWHRCLEVBQUUsS0FBSyxzQkFDMUIsRkFZQyxLQUFLOzhCQUNMLEtBQUs7NkJBQ0wsS0FBSzs4QkFDTCxLQUFLOzhCQUNMLEtBQUs7NkJBQ0wsS0FBSzsyQkFDTCxNQUFNOzRCQUNOLE1BQU07a0NBQ04sTUFBTTs4QkFDTixNQUFNOzBCQWVOLEtBQUs7O0lBeEIrRDtRQUEzRCxVQUFVLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLEVBQUUsWUFBWSxFQUFFOzt5REFBdUI7SUFDckI7UUFBNUQsVUFBVSxDQUFDLHdCQUF3QixFQUFFLEtBQUssQ0FBQyxFQUFFLFlBQVksRUFBRTs7WUFiOUIsc0JBQ3ZDLFNBQVMsRUFBRSxXQVlnRjthQVh6RixUQVl1QjtrQkFYckIsVkFXTSxZQUFZLEVBQUU7Q0FYYixFQUFFLGlCQUFpQiw4QkFDMUI7VUFBVyxFQUFFLFVBQVUsaUNBVTBCO0lBQzVCO1FBQWYsWUFBWSxFQUFFO3lCQVhJLGNBQU0sT0FBQTtVQUFlLEVBQWYsQ0FBZSxFQUFDLDhCQUM5QyxLQUFLLEVBQUUsSUFBSSxBQVV1Qzt3QkFUbkQsc0JBQ0Ysa0JBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFRRDtJQXlMQSxzQkFBQztDQUFBLEFBL01ELElBK01DO1NBaE1ZLGVBQWU7Ozs7OztJQUMxQixvQ0FBeUU7O0lBRXpFLHVDQUEyRjs7SUFDM0Ysc0NBQTJGOztJQUMzRixxQ0FBcUQ7O0lBQ3JELHNDQUFzRDs7SUFDdEQsc0NBQXdDOztJQUN4QyxxQ0FBbUM7O0lBQ25DLG1DQUE2RDs7SUFDN0Qsb0NBQThEOztJQUM5RCwwQ0FBZ0U7O0lBQ2hFLHNDQUFtRTs7SUFFbkUsbUNBQXNCOztJQUN0QixrQ0FBZ0I7O0lBQ2hCLHFDQUFlOztJQUNmLG9DQUF1Qjs7SUFDdkIseUNBQTBDOztJQUMxQyxvQ0FBa0I7O0lBQ2xCLGlDQUFlOztJQUNmLG9DQUF5Qjs7Ozs7SUFFekIsbUNBQXVDOzs7OztJQUN2QyxpQ0FBbUI7Ozs7O0lBQ25CLGlDQUFtQjs7SUFtS25CLG1DQUErQzs7SUFDL0Msb0NBQW1DOztJQXZJdkIsMENBQXVDOzs7OztJQUFFLG1DQUEyQjs7Ozs7SUFBRSw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IExFRlRfQVJST1csIFJJR0hUX0FSUk9XIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcclxuaW1wb3J0IHtcclxuICBmb3J3YXJkUmVmLFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgTmdDbGFzc1R5cGUsIE56Q29uZmlnU2VydmljZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAncmF0ZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHNlbGVjdG9yOiAnbnotcmF0ZScsXHJcbiAgZXhwb3J0QXM6ICduelJhdGUnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1yYXRlLmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE56UmF0ZUNvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpSYXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xyXG4gIEBWaWV3Q2hpbGQoJ3VsRWxlbWVudCcsIHsgc3RhdGljOiBmYWxzZSB9KSBwcml2YXRlIHVsRWxlbWVudDogRWxlbWVudFJlZjtcclxuXHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCB0cnVlKSBASW5wdXRCb29sZWFuKCkgbnpBbGxvd0NsZWFyOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgZmFsc2UpIEBJbnB1dEJvb2xlYW4oKSBuekFsbG93SGFsZjogYm9vbGVhbjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekF1dG9Gb2N1czogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56Q2hhcmFjdGVyOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuelRvb2x0aXBzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uQmx1ciA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkZvY3VzID0gbmV3IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uSG92ZXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbktleURvd24gPSBuZXcgRXZlbnRFbWl0dGVyPEtleWJvYXJkRXZlbnQ+KCk7XHJcblxyXG4gIGNsYXNzTWFwOiBOZ0NsYXNzVHlwZTtcclxuICBoYXNIYWxmID0gZmFsc2U7XHJcbiAgaG92ZXJWYWx1ZSA9IDA7XHJcbiAgcHJlZml4Q2xzID0gJ2FudC1yYXRlJztcclxuICBpbm5lclByZWZpeENscyA9IGAke3RoaXMucHJlZml4Q2xzfS1zdGFyYDtcclxuICBpc0ZvY3VzZWQgPSBmYWxzZTtcclxuICBpc0luaXQgPSBmYWxzZTtcclxuICBzdGFyQXJyYXk6IG51bWJlcltdID0gW107XHJcblxyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIHByaXZhdGUgX2NvdW50ID0gNTtcclxuICBwcml2YXRlIF92YWx1ZSA9IDA7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56Q291bnQodmFsdWU6IG51bWJlcikge1xyXG4gICAgaWYgKHRoaXMuX2NvdW50ID09PSB2YWx1ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLl9jb3VudCA9IHZhbHVlO1xyXG4gICAgdGhpcy51cGRhdGVTdGFyQXJyYXkoKTtcclxuICB9XHJcblxyXG4gIGdldCBuekNvdW50KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fY291bnQ7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpWYWx1ZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG4gIH1cclxuXHJcbiAgc2V0IG56VmFsdWUoaW5wdXQ6IG51bWJlcikge1xyXG4gICAgaWYgKHRoaXMuX3ZhbHVlID09PSBpbnB1dCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fdmFsdWUgPSBpbnB1dDtcclxuICAgIHRoaXMuaGFzSGFsZiA9ICFOdW1iZXIuaXNJbnRlZ2VyKGlucHV0KTtcclxuICAgIHRoaXMuaG92ZXJWYWx1ZSA9IE1hdGguY2VpbChpbnB1dCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5uekF1dG9Gb2N1cyAmJiAhY2hhbmdlcy5uekF1dG9Gb2N1cy5pc0ZpcnN0Q2hhbmdlKCkpIHtcclxuICAgICAgaWYgKHRoaXMubnpBdXRvRm9jdXMgJiYgIXRoaXMubnpEaXNhYmxlZCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMudWxFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdhdXRvZm9jdXMnLCAnYXV0b2ZvY3VzJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy51bEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2F1dG9mb2N1cycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlU3RhckFycmF5KCk7XHJcblxyXG4gICAgdGhpcy5uekNvbmZpZ1NlcnZpY2VcclxuICAgICAgLmdldENvbmZpZ0NoYW5nZUV2ZW50Rm9yQ29tcG9uZW50KE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSlcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzSW5pdCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBvbkl0ZW1DbGljayhpbmRleDogbnVtYmVyLCBpc0hhbGY6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56RGlzYWJsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaG92ZXJWYWx1ZSA9IGluZGV4ICsgMTtcclxuXHJcbiAgICBjb25zdCBhY3R1YWxWYWx1ZSA9IGlzSGFsZiA/IGluZGV4ICsgMC41IDogaW5kZXggKyAxO1xyXG5cclxuICAgIGlmICh0aGlzLm56VmFsdWUgPT09IGFjdHVhbFZhbHVlKSB7XHJcbiAgICAgIGlmICh0aGlzLm56QWxsb3dDbGVhcikge1xyXG4gICAgICAgIHRoaXMubnpWYWx1ZSA9IDA7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLm56VmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm56VmFsdWUgPSBhY3R1YWxWYWx1ZTtcclxuICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLm56VmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25JdGVtSG92ZXIoaW5kZXg6IG51bWJlciwgaXNIYWxmOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uekRpc2FibGVkIHx8ICh0aGlzLmhvdmVyVmFsdWUgPT09IGluZGV4ICsgMSAmJiBpc0hhbGYgPT09IHRoaXMuaGFzSGFsZikpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaG92ZXJWYWx1ZSA9IGluZGV4ICsgMTtcclxuICAgIHRoaXMuaGFzSGFsZiA9IGlzSGFsZjtcclxuICAgIHRoaXMubnpPbkhvdmVyQ2hhbmdlLmVtaXQodGhpcy5ob3ZlclZhbHVlKTtcclxuICB9XHJcblxyXG4gIG9uUmF0ZUxlYXZlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5oYXNIYWxmID0gIU51bWJlci5pc0ludGVnZXIodGhpcy5uelZhbHVlKTtcclxuICAgIHRoaXMuaG92ZXJWYWx1ZSA9IE1hdGguY2VpbCh0aGlzLm56VmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgb25Gb2N1cyhlOiBGb2N1c0V2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLmlzRm9jdXNlZCA9IHRydWU7XHJcbiAgICB0aGlzLm56T25Gb2N1cy5lbWl0KGUpO1xyXG4gIH1cclxuXHJcbiAgb25CbHVyKGU6IEZvY3VzRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNGb2N1c2VkID0gZmFsc2U7XHJcbiAgICB0aGlzLm56T25CbHVyLmVtaXQoZSk7XHJcbiAgfVxyXG5cclxuICBmb2N1cygpOiB2b2lkIHtcclxuICAgIHRoaXMudWxFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICB9XHJcblxyXG4gIGJsdXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVsRWxlbWVudC5uYXRpdmVFbGVtZW50LmJsdXIoKTtcclxuICB9XHJcblxyXG4gIG9uS2V5RG93bihlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCBvbGRWYWwgPSB0aGlzLm56VmFsdWU7XHJcblxyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gUklHSFRfQVJST1cgJiYgdGhpcy5uelZhbHVlIDwgdGhpcy5uekNvdW50KSB7XHJcbiAgICAgIHRoaXMubnpWYWx1ZSArPSB0aGlzLm56QWxsb3dIYWxmID8gMC41IDogMTtcclxuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSBMRUZUX0FSUk9XICYmIHRoaXMubnpWYWx1ZSA+IDApIHtcclxuICAgICAgdGhpcy5uelZhbHVlIC09IHRoaXMubnpBbGxvd0hhbGYgPyAwLjUgOiAxO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvbGRWYWwgIT09IHRoaXMubnpWYWx1ZSkge1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMubnpWYWx1ZSk7XHJcbiAgICAgIHRoaXMubnpPbktleURvd24uZW1pdChlKTtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRDbGFzc2VzKGk6IG51bWJlcik6IG9iamVjdCB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBbYCR7dGhpcy5pbm5lclByZWZpeENsc30tZnVsbGBdOiBpICsgMSA8IHRoaXMuaG92ZXJWYWx1ZSB8fCAoIXRoaXMuaGFzSGFsZiAmJiBpICsgMSA9PT0gdGhpcy5ob3ZlclZhbHVlKSxcclxuICAgICAgW2Ake3RoaXMuaW5uZXJQcmVmaXhDbHN9LWhhbGZgXTogdGhpcy5oYXNIYWxmICYmIGkgKyAxID09PSB0aGlzLmhvdmVyVmFsdWUsXHJcbiAgICAgIFtgJHt0aGlzLmlubmVyUHJlZml4Q2xzfS1hY3RpdmVgXTogdGhpcy5oYXNIYWxmICYmIGkgKyAxID09PSB0aGlzLmhvdmVyVmFsdWUsXHJcbiAgICAgIFtgJHt0aGlzLmlubmVyUHJlZml4Q2xzfS16ZXJvYF06IGkgKyAxID4gdGhpcy5ob3ZlclZhbHVlLFxyXG4gICAgICBbYCR7dGhpcy5pbm5lclByZWZpeENsc30tZm9jdXNlZGBdOiB0aGlzLmhhc0hhbGYgJiYgaSArIDEgPT09IHRoaXMuaG92ZXJWYWx1ZSAmJiB0aGlzLmlzRm9jdXNlZFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlU3RhckFycmF5KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zdGFyQXJyYXkgPSBBcnJheSh0aGlzLm56Q291bnQpXHJcbiAgICAgIC5maWxsKDApXHJcbiAgICAgIC5tYXAoKF8sIGkpID0+IGkpO1xyXG4gIH1cclxuXHJcbiAgLy8gI3JlZ2lvbiBJbXBsZW1lbnQgYENvbnRyb2xWYWx1ZUFjY2Vzc29yYFxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBudW1iZXIgfCBudWxsKTogdm9pZCB7XHJcbiAgICB0aGlzLm56VmFsdWUgPSB2YWx1ZSB8fCAwO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMubnpEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogbnVtYmVyKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlOiAodmFsdWU6IG51bWJlcikgPT4gdm9pZCA9ICgpID0+IG51bGw7XHJcbiAgb25Ub3VjaGVkOiAoKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG59XHJcbiJdfQ==