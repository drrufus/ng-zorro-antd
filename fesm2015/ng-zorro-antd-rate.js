import { __decorate, __metadata } from 'tslib';
import { RIGHT_ARROW, LEFT_ARROW } from '@angular/cdk/keycodes';
import { ɵɵelement, EventEmitter, ɵɵdefineComponent, ɵɵelementStart, ɵɵlistener, ɵɵtemplate, ɵɵelementEnd, ɵɵtemplateRefExtractor, ɵɵreference, ɵɵadvance, ɵɵproperty, ɵsetClassMetadata, Component, ChangeDetectionStrategy, ViewEncapsulation, Input, Output, ɵɵgetCurrentView, ɵɵrestoreView, ɵɵnextContext, ɵɵdirectiveInject, Renderer2, ChangeDetectorRef, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵProvidersFeature, forwardRef, ɵɵNgOnChangesFeature, ɵɵclassProp, ViewChild, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InputBoolean, NzConfigService, WithConfig } from 'ng-zorro-antd/core';
import { NgTemplateOutlet, NgClass, NgForOf, CommonModule } from '@angular/common';
import { NzTooltipDirective, NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';

const _c0 = ["nz-rate-item", ""];
function NzRateItemComponent_ng_template_1_Template(rf, ctx) { }
function NzRateItemComponent_ng_template_3_Template(rf, ctx) { }
function NzRateItemComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 4);
} }
class NzRateItemComponent {
    constructor() {
        this.allowHalf = false;
        this.itemHover = new EventEmitter();
        this.itemClick = new EventEmitter();
    }
    hoverRate(isHalf) {
        this.itemHover.next(isHalf && this.allowHalf);
    }
    clickRate(isHalf) {
        this.itemClick.next(isHalf && this.allowHalf);
    }
}
/** @nocollapse */ NzRateItemComponent.ɵfac = function NzRateItemComponent_Factory(t) { return new (t || NzRateItemComponent)(); };
/** @nocollapse */ NzRateItemComponent.ɵcmp = ɵɵdefineComponent({ type: NzRateItemComponent, selectors: [["", "nz-rate-item", ""]], inputs: { character: "character", allowHalf: "allowHalf" }, outputs: { itemHover: "itemHover", itemClick: "itemClick" }, exportAs: ["nzRateItem"], attrs: _c0, decls: 6, vars: 2, consts: [[1, "ant-rate-star-second", 3, "mouseover", "click"], [3, "ngTemplateOutlet"], [1, "ant-rate-star-first", 3, "mouseover", "click"], ["defaultCharacter", ""], ["nz-icon", "", "nzType", "star", "nzTheme", "fill"]], template: function NzRateItemComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵlistener("mouseover", function NzRateItemComponent_Template_div_mouseover_0_listener($event) { ctx.hoverRate(false); return $event.stopPropagation(); })("click", function NzRateItemComponent_Template_div_click_0_listener($event) { return ctx.clickRate(false); });
        ɵɵtemplate(1, NzRateItemComponent_ng_template_1_Template, 0, 0, "ng-template", 1);
        ɵɵelementEnd();
        ɵɵelementStart(2, "div", 2);
        ɵɵlistener("mouseover", function NzRateItemComponent_Template_div_mouseover_2_listener($event) { ctx.hoverRate(true); return $event.stopPropagation(); })("click", function NzRateItemComponent_Template_div_click_2_listener($event) { return ctx.clickRate(true); });
        ɵɵtemplate(3, NzRateItemComponent_ng_template_3_Template, 0, 0, "ng-template", 1);
        ɵɵelementEnd();
        ɵɵtemplate(4, NzRateItemComponent_ng_template_4_Template, 1, 0, "ng-template", null, 3, ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r691 = ɵɵreference(5);
        ɵɵadvance(1);
        ɵɵproperty("ngTemplateOutlet", ctx.character || _r691);
        ɵɵadvance(2);
        ɵɵproperty("ngTemplateOutlet", ctx.character || _r691);
    } }, directives: [NgTemplateOutlet, NzIconDirective], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzRateItemComponent.prototype, "allowHalf", void 0);
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzRateItemComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: '[nz-rate-item]',
                exportAs: 'nzRateItem',
                templateUrl: './nz-rate-item.component.html'
            }]
    }], null, { character: [{
            type: Input
        }], allowHalf: [{
            type: Input
        }], itemHover: [{
            type: Output
        }], itemClick: [{
            type: Output
        }] }); })();

const _c0$1 = ["ulElement"];
function NzRateComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r687 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 3);
    ɵɵelementStart(1, "div", 4);
    ɵɵlistener("itemHover", function NzRateComponent_li_2_Template_div_itemHover_1_listener($event) { ɵɵrestoreView(_r687); const i_r685 = ctx.index; const ctx_r686 = ɵɵnextContext(); return ctx_r686.onItemHover(i_r685, $event); })("itemClick", function NzRateComponent_li_2_Template_div_itemClick_1_listener($event) { ɵɵrestoreView(_r687); const i_r685 = ctx.index; const ctx_r688 = ɵɵnextContext(); return ctx_r688.onItemClick(i_r685, $event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const star_r684 = ctx.$implicit;
    const i_r685 = ctx.index;
    const ctx_r683 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r683.setClasses(star_r684))("nzTitle", ctx_r683.nzTooltips[i_r685]);
    ɵɵadvance(1);
    ɵɵproperty("allowHalf", ctx_r683.nzAllowHalf)("character", ctx_r683.nzCharacter);
} }
const NZ_CONFIG_COMPONENT_NAME = 'rate';
class NzRateComponent {
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
        this.onChange = () => null;
        this.onTouched = () => null;
    }
    set nzCount(value) {
        if (this._count === value) {
            return;
        }
        this._count = value;
        this.updateStarArray();
    }
    get nzCount() {
        return this._count;
    }
    get nzValue() {
        return this._value;
    }
    set nzValue(input) {
        if (this._value === input) {
            return;
        }
        this._value = input;
        this.hasHalf = !Number.isInteger(input);
        this.hoverValue = Math.ceil(input);
    }
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
    ngOnInit() {
        this.updateStarArray();
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => this.cdr.markForCheck());
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    ngAfterViewInit() {
        this.isInit = true;
    }
    onItemClick(index, isHalf) {
        if (this.nzDisabled) {
            return;
        }
        this.hoverValue = index + 1;
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
    onItemHover(index, isHalf) {
        if (this.nzDisabled || (this.hoverValue === index + 1 && isHalf === this.hasHalf)) {
            return;
        }
        this.hoverValue = index + 1;
        this.hasHalf = isHalf;
        this.nzOnHoverChange.emit(this.hoverValue);
    }
    onRateLeave() {
        this.hasHalf = !Number.isInteger(this.nzValue);
        this.hoverValue = Math.ceil(this.nzValue);
    }
    onFocus(e) {
        this.isFocused = true;
        this.nzOnFocus.emit(e);
    }
    onBlur(e) {
        this.isFocused = false;
        this.nzOnBlur.emit(e);
    }
    focus() {
        this.ulElement.nativeElement.focus();
    }
    blur() {
        this.ulElement.nativeElement.blur();
    }
    onKeyDown(e) {
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
    setClasses(i) {
        return {
            [`${this.innerPrefixCls}-full`]: i + 1 < this.hoverValue || (!this.hasHalf && i + 1 === this.hoverValue),
            [`${this.innerPrefixCls}-half`]: this.hasHalf && i + 1 === this.hoverValue,
            [`${this.innerPrefixCls}-active`]: this.hasHalf && i + 1 === this.hoverValue,
            [`${this.innerPrefixCls}-zero`]: i + 1 > this.hoverValue,
            [`${this.innerPrefixCls}-focused`]: this.hasHalf && i + 1 === this.hoverValue && this.isFocused
        };
    }
    updateStarArray() {
        this.starArray = Array(this.nzCount)
            .fill(0)
            .map((_, i) => i);
    }
    // #region Implement `ControlValueAccessor`
    writeValue(value) {
        this.nzValue = value || 0;
        this.cdr.markForCheck();
    }
    setDisabledState(isDisabled) {
        this.nzDisabled = isDisabled;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
}
/** @nocollapse */ NzRateComponent.ɵfac = function NzRateComponent_Factory(t) { return new (t || NzRateComponent)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef)); };
/** @nocollapse */ NzRateComponent.ɵcmp = ɵɵdefineComponent({ type: NzRateComponent, selectors: [["nz-rate"]], viewQuery: function NzRateComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$1, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.ulElement = _t.first);
    } }, inputs: { nzAllowClear: "nzAllowClear", nzAllowHalf: "nzAllowHalf", nzDisabled: "nzDisabled", nzAutoFocus: "nzAutoFocus", nzCharacter: "nzCharacter", nzTooltips: "nzTooltips", nzCount: "nzCount" }, outputs: { nzOnBlur: "nzOnBlur", nzOnFocus: "nzOnFocus", nzOnHoverChange: "nzOnHoverChange", nzOnKeyDown: "nzOnKeyDown" }, exportAs: ["nzRate"], features: [ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef((() => NzRateComponent)),
                multi: true
            }
        ]), ɵɵNgOnChangesFeature()], decls: 3, vars: 4, consts: [[1, "ant-rate", 3, "ngClass", "tabindex", "blur", "focus", "keydown", "mouseleave"], ["ulElement", ""], ["class", "ant-rate-star", "nz-tooltip", "", 3, "ngClass", "nzTitle", 4, "ngFor", "ngForOf"], ["nz-tooltip", "", 1, "ant-rate-star", 3, "ngClass", "nzTitle"], ["nz-rate-item", "", 3, "allowHalf", "character", "itemHover", "itemClick"]], template: function NzRateComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "ul", 0, 1);
        ɵɵlistener("blur", function NzRateComponent_Template_ul_blur_0_listener($event) { return ctx.onBlur($event); })("focus", function NzRateComponent_Template_ul_focus_0_listener($event) { return ctx.onFocus($event); })("keydown", function NzRateComponent_Template_ul_keydown_0_listener($event) { ctx.onKeyDown($event); return $event.preventDefault(); })("mouseleave", function NzRateComponent_Template_ul_mouseleave_0_listener($event) { ctx.onRateLeave(); return $event.stopPropagation(); });
        ɵɵtemplate(2, NzRateComponent_li_2_Template, 2, 4, "li", 2);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵclassProp("ant-rate-disabled", ctx.nzDisabled);
        ɵɵproperty("ngClass", ctx.classMap)("tabindex", ctx.nzDisabled ? 0 - 1 : 1);
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.starArray);
    } }, directives: [NgClass, NgForOf, NzTooltipDirective, NzRateItemComponent], encapsulation: 2, changeDetection: 0 });
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
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzRateComponent, [{
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
                        useExisting: forwardRef((() => NzRateComponent)),
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: NzConfigService }, { type: Renderer2 }, { type: ChangeDetectorRef }]; }, { ulElement: [{
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

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzRateModule {
}
/** @nocollapse */ NzRateModule.ɵmod = ɵɵdefineNgModule({ type: NzRateModule });
/** @nocollapse */ NzRateModule.ɵinj = ɵɵdefineInjector({ factory: function NzRateModule_Factory(t) { return new (t || NzRateModule)(); }, imports: [[CommonModule, NzIconModule, NzToolTipModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzRateModule, { declarations: [NzRateComponent, NzRateItemComponent], imports: [CommonModule, NzIconModule, NzToolTipModule], exports: [NzRateComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzRateModule, [{
        type: NgModule,
        args: [{
                exports: [NzRateComponent],
                declarations: [NzRateComponent, NzRateItemComponent],
                imports: [CommonModule, NzIconModule, NzToolTipModule]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NzRateComponent, NzRateItemComponent, NzRateModule };
//# sourceMappingURL=ng-zorro-antd-rate.js.map
