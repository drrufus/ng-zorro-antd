import { __decorate, __metadata } from 'tslib';
import { RIGHT_ARROW, LEFT_ARROW } from '@angular/cdk/keycodes';
import { EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, forwardRef, Renderer2, ChangeDetectorRef, ViewChild, Input, Output, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzConfigService, WithConfig, InputBoolean } from 'ng-zorro-antd/core';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'rate';
class NzRateComponent {
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
NzRateComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-rate',
                exportAs: 'nzRate',
                preserveWhitespaces: false,
                template: "<ul #ulElement\r\n  class=\"ant-rate\"\r\n  [class.ant-rate-disabled]=\"nzDisabled\"\r\n  [ngClass]=\"classMap\"\r\n  (blur)=\"onBlur($event)\"\r\n  (focus)=\"onFocus($event)\"\r\n  (keydown)=\"onKeyDown($event); $event.preventDefault();\"\r\n  (mouseleave)=\"onRateLeave(); $event.stopPropagation();\"\r\n  [tabindex]=\"nzDisabled ? -1 : 1\">\r\n  <li *ngFor=\"let star of starArray; let i = index\"\r\n    class=\"ant-rate-star\"\r\n    [ngClass]=\"setClasses(star)\"\r\n    nz-tooltip\r\n    [nzTitle]=\"nzTooltips[ i ]\">\r\n    <div nz-rate-item\r\n      [allowHalf]=\"nzAllowHalf\"\r\n      [character]=\"nzCharacter\"\r\n      (itemHover)=\"onItemHover(i, $event)\"\r\n      (itemClick)=\"onItemClick(i, $event)\">\r\n    </div>\r\n  </li>\r\n</ul>\r\n",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => NzRateComponent)),
                        multi: true
                    }
                ]
            }] }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzRateItemComponent {
    constructor() {
        this.allowHalf = false;
        this.itemHover = new EventEmitter();
        this.itemClick = new EventEmitter();
    }
    /**
     * @param {?} isHalf
     * @return {?}
     */
    hoverRate(isHalf) {
        this.itemHover.next(isHalf && this.allowHalf);
    }
    /**
     * @param {?} isHalf
     * @return {?}
     */
    clickRate(isHalf) {
        this.itemClick.next(isHalf && this.allowHalf);
    }
}
NzRateItemComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: '[nz-rate-item]',
                exportAs: 'nzRateItem',
                template: "<div class=\"ant-rate-star-second\"\r\n  (mouseover)=\"hoverRate(false); $event.stopPropagation();\"\r\n  (click)=\"clickRate(false);\">\r\n  <ng-template [ngTemplateOutlet]=\"character || defaultCharacter\"></ng-template>\r\n</div>\r\n<div class=\"ant-rate-star-first\"\r\n  (mouseover)=\"hoverRate(true); $event.stopPropagation();\"\r\n  (click)=\"clickRate(true);\">\r\n  <ng-template [ngTemplateOutlet]=\"character || defaultCharacter\"></ng-template>\r\n</div>\r\n\r\n<ng-template #defaultCharacter>\r\n  <i nz-icon\r\n    nzType=\"star\"\r\n    nzTheme=\"fill\"></i>\r\n</ng-template>\r\n"
            }] }
];
NzRateItemComponent.propDecorators = {
    character: [{ type: Input }],
    allowHalf: [{ type: Input }],
    itemHover: [{ type: Output }],
    itemClick: [{ type: Output }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzRateItemComponent.prototype, "allowHalf", void 0);
if (false) {
    /** @type {?} */
    NzRateItemComponent.prototype.character;
    /** @type {?} */
    NzRateItemComponent.prototype.allowHalf;
    /** @type {?} */
    NzRateItemComponent.prototype.itemHover;
    /** @type {?} */
    NzRateItemComponent.prototype.itemClick;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzRateModule {
}
NzRateModule.decorators = [
    { type: NgModule, args: [{
                exports: [NzRateComponent],
                declarations: [NzRateComponent, NzRateItemComponent],
                imports: [CommonModule, NzIconModule, NzToolTipModule]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzRateComponent, NzRateItemComponent, NzRateModule };
//# sourceMappingURL=ng-zorro-antd-rate.js.map
