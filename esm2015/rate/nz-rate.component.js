/**
 * @fileoverview added by tsickle
 * Generated from: nz-rate.component.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3JhdGUvIiwic291cmNlcyI6WyJuei1yYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRSxPQUFPLEVBQ0wsVUFBVSxFQUVWLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFDTixTQUFTLEVBRVQsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxZQUFZLEVBQWUsZUFBZSxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztNQUV0Rix3QkFBd0IsR0FBRyxNQUFNO0FBaUJ2QyxNQUFNLE9BQU8sZUFBZTs7Ozs7O0lBc0QxQixZQUFtQixlQUFnQyxFQUFVLFFBQW1CLEVBQVUsR0FBc0I7UUFBN0Ysb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBakR2RixlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBRTdDLGVBQVUsR0FBYSxFQUFFLENBQUM7UUFDaEIsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDMUMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDM0Msb0JBQWUsR0FBRyxJ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QUFFLFlBQVksRUFBRTs7cURBQXVCO0FBQ3JCO0lBQTVELFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxLQUFLLENBQUMsRUFBRSxZQUFZLEVBQUU7O29EQUFzQjtBQUNsRTtJQUFmLFlBQVksRUFBRTs7bURBQTZCO0FBQzVCO0lBQWYsWUFBWSxFQUFFOztvREFBOEI7Ozs7OztJQUx0RCxvQ0FBeUU7O0lBRXpFLHVDQUEyRjs7SUFDM0Ysc0NBQTJGOztJQUMzRixxQ0FBcUQ7O0lBQ3JELHNDQUFzRDs7SUFDdEQsc0NBQXdDOztJQUN4QyxxQ0FBbUM7O0lBQ25DLG1DQUE2RDs7SUFDN0Qsb0NBQThEOztJQUM5RCwwQ0FBZ0U7O0lBQ2hFLHNDQUFtRTs7SUFFbkUsbUNBQXNCOztJQUN0QixrQ0FBZ0I7O0lBQ2hCLHFDQUFlOztJQUNmLG9DQUF1Qjs7SUFDdkIseUNBQTBDOztJQUMxQyxvQ0FBa0I7O0lBQ2xCLGlDQUFlOztJQUNmLG9DQUF5Qjs7Ozs7SUFFekIsbUNBQXVDOzs7OztJQUN2QyxpQ0FBbUI7Ozs7O0lBQ25CLGlDQUFtQjs7SUFtS25CLG1DQUErQzs7SUFDL0Msb0NBQW1DOztJQXZJdkIsMENBQXVDOzs7OztJQUFFLG1DQUEyQjs7Ozs7SUFBRSw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IExFRlRfQVJST1csIFJJR0hUX0FSUk9XIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcclxuaW1wb3J0IHtcclxuICBmb3J3YXJkUmVmLFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgTmdDbGFzc1R5cGUsIE56Q29uZmlnU2VydmljZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAncmF0ZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHNlbGVjdG9yOiAnbnotcmF0ZScsXHJcbiAgZXhwb3J0QXM6ICduelJhdGUnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1yYXRlLmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE56UmF0ZUNvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpSYXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xyXG4gIEBWaWV3Q2hpbGQoJ3VsRWxlbWVudCcsIHsgc3RhdGljOiBmYWxzZSB9KSBwcml2YXRlIHVsRWxlbWVudDogRWxlbWVudFJlZjtcclxuXHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCB0cnVlKSBASW5wdXRCb29sZWFuKCkgbnpBbGxvd0NsZWFyOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgZmFsc2UpIEBJbnB1dEJvb2xlYW4oKSBuekFsbG93SGFsZjogYm9vbGVhbjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekF1dG9Gb2N1czogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56Q2hhcmFjdGVyOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuelRvb2x0aXBzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uQmx1ciA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkZvY3VzID0gbmV3IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uSG92ZXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbktleURvd24gPSBuZXcgRXZlbnRFbWl0dGVyPEtleWJvYXJkRXZlbnQ+KCk7XHJcblxyXG4gIGNsYXNzTWFwOiBOZ0NsYXNzVHlwZTtcclxuICBoYXNIYWxmID0gZmFsc2U7XHJcbiAgaG92ZXJWYWx1ZSA9IDA7XHJcbiAgcHJlZml4Q2xzID0gJ2FudC1yYXRlJztcclxuICBpbm5lclByZWZpeENscyA9IGAke3RoaXMucHJlZml4Q2xzfS1zdGFyYDtcclxuICBpc0ZvY3VzZWQgPSBmYWxzZTtcclxuICBpc0luaXQgPSBmYWxzZTtcclxuICBzdGFyQXJyYXk6IG51bWJlcltdID0gW107XHJcblxyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIHByaXZhdGUgX2NvdW50ID0gNTtcclxuICBwcml2YXRlIF92YWx1ZSA9IDA7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56Q291bnQodmFsdWU6IG51bWJlcikge1xyXG4gICAgaWYgKHRoaXMuX2NvdW50ID09PSB2YWx1ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLl9jb3VudCA9IHZhbHVlO1xyXG4gICAgdGhpcy51cGRhdGVTdGFyQXJyYXkoKTtcclxuICB9XHJcblxyXG4gIGdldCBuekNvdW50KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fY291bnQ7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpWYWx1ZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG4gIH1cclxuXHJcbiAgc2V0IG56VmFsdWUoaW5wdXQ6IG51bWJlcikge1xyXG4gICAgaWYgKHRoaXMuX3ZhbHVlID09PSBpbnB1dCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fdmFsdWUgPSBpbnB1dDtcclxuICAgIHRoaXMuaGFzSGFsZiA9ICFOdW1iZXIuaXNJbnRlZ2VyKGlucHV0KTtcclxuICAgIHRoaXMuaG92ZXJWYWx1ZSA9IE1hdGguY2VpbChpbnB1dCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5uekF1dG9Gb2N1cyAmJiAhY2hhbmdlcy5uekF1dG9Gb2N1cy5pc0ZpcnN0Q2hhbmdlKCkpIHtcclxuICAgICAgaWYgKHRoaXMubnpBdXRvRm9jdXMgJiYgIXRoaXMubnpEaXNhYmxlZCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMudWxFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdhdXRvZm9jdXMnLCAnYXV0b2ZvY3VzJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy51bEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2F1dG9mb2N1cycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlU3RhckFycmF5KCk7XHJcblxyXG4gICAgdGhpcy5uekNvbmZpZ1NlcnZpY2VcclxuICAgICAgLmdldENvbmZpZ0NoYW5nZUV2ZW50Rm9yQ29tcG9uZW50KE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSlcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzSW5pdCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBvbkl0ZW1DbGljayhpbmRleDogbnVtYmVyLCBpc0hhbGY6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56RGlzYWJsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaG92ZXJWYWx1ZSA9IGluZGV4ICsgMTtcclxuXHJcbiAgICBjb25zdCBhY3R1YWxWYWx1ZSA9IGlzSGFsZiA/IGluZGV4ICsgMC41IDogaW5kZXggKyAxO1xyXG5cclxuICAgIGlmICh0aGlzLm56VmFsdWUgPT09IGFjdHVhbFZhbHVlKSB7XHJcbiAgICAgIGlmICh0aGlzLm56QWxsb3dDbGVhcikge1xyXG4gICAgICAgIHRoaXMubnpWYWx1ZSA9IDA7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLm56VmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm56VmFsdWUgPSBhY3R1YWxWYWx1ZTtcclxuICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLm56VmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25JdGVtSG92ZXIoaW5kZXg6IG51bWJlciwgaXNIYWxmOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uekRpc2FibGVkIHx8ICh0aGlzLmhvdmVyVmFsdWUgPT09IGluZGV4ICsgMSAmJiBpc0hhbGYgPT09IHRoaXMuaGFzSGFsZikpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaG92ZXJWYWx1ZSA9IGluZGV4ICsgMTtcclxuICAgIHRoaXMuaGFzSGFsZiA9IGlzSGFsZjtcclxuICAgIHRoaXMubnpPbkhvdmVyQ2hhbmdlLmVtaXQodGhpcy5ob3ZlclZhbHVlKTtcclxuICB9XHJcblxyXG4gIG9uUmF0ZUxlYXZlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5oYXNIYWxmID0gIU51bWJlci5pc0ludGVnZXIodGhpcy5uelZhbHVlKTtcclxuICAgIHRoaXMuaG92ZXJWYWx1ZSA9IE1hdGguY2VpbCh0aGlzLm56VmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgb25Gb2N1cyhlOiBGb2N1c0V2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLmlzRm9jdXNlZCA9IHRydWU7XHJcbiAgICB0aGlzLm56T25Gb2N1cy5lbWl0KGUpO1xyXG4gIH1cclxuXHJcbiAgb25CbHVyKGU6IEZvY3VzRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNGb2N1c2VkID0gZmFsc2U7XHJcbiAgICB0aGlzLm56T25CbHVyLmVtaXQoZSk7XHJcbiAgfVxyXG5cclxuICBmb2N1cygpOiB2b2lkIHtcclxuICAgIHRoaXMudWxFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICB9XHJcblxyXG4gIGJsdXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVsRWxlbWVudC5uYXRpdmVFbGVtZW50LmJsdXIoKTtcclxuICB9XHJcblxyXG4gIG9uS2V5RG93bihlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCBvbGRWYWwgPSB0aGlzLm56VmFsdWU7XHJcblxyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gUklHSFRfQVJST1cgJiYgdGhpcy5uelZhbHVlIDwgdGhpcy5uekNvdW50KSB7XHJcbiAgICAgIHRoaXMubnpWYWx1ZSArPSB0aGlzLm56QWxsb3dIYWxmID8gMC41IDogMTtcclxuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSBMRUZUX0FSUk9XICYmIHRoaXMubnpWYWx1ZSA+IDApIHtcclxuICAgICAgdGhpcy5uelZhbHVlIC09IHRoaXMubnpBbGxvd0hhbGYgPyAwLjUgOiAxO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvbGRWYWwgIT09IHRoaXMubnpWYWx1ZSkge1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMubnpWYWx1ZSk7XHJcbiAgICAgIHRoaXMubnpPbktleURvd24uZW1pdChlKTtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRDbGFzc2VzKGk6IG51bWJlcik6IG9iamVjdCB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBbYCR7dGhpcy5pbm5lclByZWZpeENsc30tZnVsbGBdOiBpICsgMSA8IHRoaXMuaG92ZXJWYWx1ZSB8fCAoIXRoaXMuaGFzSGFsZiAmJiBpICsgMSA9PT0gdGhpcy5ob3ZlclZhbHVlKSxcclxuICAgICAgW2Ake3RoaXMuaW5uZXJQcmVmaXhDbHN9LWhhbGZgXTogdGhpcy5oYXNIYWxmICYmIGkgKyAxID09PSB0aGlzLmhvdmVyVmFsdWUsXHJcbiAgICAgIFtgJHt0aGlzLmlubmVyUHJlZml4Q2xzfS1hY3RpdmVgXTogdGhpcy5oYXNIYWxmICYmIGkgKyAxID09PSB0aGlzLmhvdmVyVmFsdWUsXHJcbiAgICAgIFtgJHt0aGlzLmlubmVyUHJlZml4Q2xzfS16ZXJvYF06IGkgKyAxID4gdGhpcy5ob3ZlclZhbHVlLFxyXG4gICAgICBbYCR7dGhpcy5pbm5lclByZWZpeENsc30tZm9jdXNlZGBdOiB0aGlzLmhhc0hhbGYgJiYgaSArIDEgPT09IHRoaXMuaG92ZXJWYWx1ZSAmJiB0aGlzLmlzRm9jdXNlZFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlU3RhckFycmF5KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zdGFyQXJyYXkgPSBBcnJheSh0aGlzLm56Q291bnQpXHJcbiAgICAgIC5maWxsKDApXHJcbiAgICAgIC5tYXAoKF8sIGkpID0+IGkpO1xyXG4gIH1cclxuXHJcbiAgLy8gI3JlZ2lvbiBJbXBsZW1lbnQgYENvbnRyb2xWYWx1ZUFjY2Vzc29yYFxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBudW1iZXIgfCBudWxsKTogdm9pZCB7XHJcbiAgICB0aGlzLm56VmFsdWUgPSB2YWx1ZSB8fCAwO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMubnpEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogbnVtYmVyKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlOiAodmFsdWU6IG51bWJlcikgPT4gdm9pZCA9ICgpID0+IG51bGw7XHJcbiAgb25Ub3VjaGVkOiAoKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG59XHJcbiJdfQ==