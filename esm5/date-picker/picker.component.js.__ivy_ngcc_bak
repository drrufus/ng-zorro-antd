/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { slideMotion } from 'ng-zorro-antd/core';
import { DateHelperService } from 'ng-zorro-antd/i18n';
var NzPickerComponent = /** @class */ (function () {
    function NzPickerComponent(dateHelper, changeDetector) {
        this.dateHelper = dateHelper;
        this.changeDetector = changeDetector;
        this.noAnimation = false;
        this.isRange = false;
        this.open = undefined;
        this.valueChange = new EventEmitter();
        this.openChange = new EventEmitter(); // Emitted when overlay's open state change
        this.prefixCls = 'ant-calendar';
        this.animationOpenState = false;
        this.overlayOpen = false; // Available when "open"=undefined
        // Available when "open"=undefined
        this.overlayOffsetY = 0;
        this.overlayOffsetX = -2;
        this.overlayPositions = (/** @type {?} */ ([
            {
                // offsetX: -10, // TODO: What a pity, cdk/overlay current not support offset configs even though it already provide these properties
                // offsetY: -10,
                originX: 'start',
                originY: 'top',
                overlayX: 'start',
                overlayY: 'top'
            },
            {
                originX: 'start',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'bottom'
            },
            {
                originX: 'end',
                originY: 'top',
                overlayX: 'end',
                overlayY: 'top'
            },
            {
                originX: 'end',
                originY: 'bottom',
                overlayX: 'end',
                overlayY: 'bottom'
            }
        ]));
        this.dropdownAnimation = 'bottom';
        this.currentPositionX = 'start';
        this.currentPositionY = 'top';
    }
    Object.defineProperty(NzPickerComponent.prototype, "realOpenState", {
        get: /**
         * @return {?}
         */
        function () {
            // The value that really decide the open state of overlay
            return this.isOpenHandledByUser() ? !!this.open : this.overlayOpen;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzPickerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.autoFocus) {
            this.focus();
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzPickerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.open) {
            this.animationStart();
        }
    };
    /**
     * @return {?}
     */
    NzPickerComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        if (this.isRange) {
            /** @type {?} */
            var firstInput = (/** @type {?} */ (((/** @type {?} */ (this.pickerInput.nativeElement))).querySelector('input:first-child')));
            firstInput.focus(); // Focus on the first input
        }
        else {
            this.pickerInput.nativeElement.focus();
        }
    };
    // Show overlay content
    // Show overlay content
    /**
     * @return {?}
     */
    NzPickerComponent.prototype.showOverlay = 
    // Show overlay content
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.realOpenState) {
            this.overlayOpen = true;
            this.animationStart();
            this.openChange.emit(this.overlayOpen);
            setTimeout((/**
             * @return {?}
             */
            function () {
                if (_this.cdkConnectedOverlay && _this.cdkConnectedOverlay.overlayRef) {
                    _this.cdkConnectedOverlay.overlayRef.updatePosition();
                }
            }));
        }
    };
    /**
     * @return {?}
     */
    NzPickerComponent.prototype.hideOverlay = /**
     * @return {?}
     */
    function () {
        if (this.realOpenState) {
            this.overlayOpen = false;
            this.openChange.emit(this.overlayOpen);
            this.focus();
        }
    };
    /**
     * @return {?}
     */
    NzPickerComponent.prototype.onClickInputBox = /**
     * @return {?}
     */
    function () {
        if (!this.disabled && !this.isOpenHandledByUser()) {
            this.showOverlay();
        }
    };
    /**
     * @return {?}
     */
    NzPickerComponent.prototype.onClickBackdrop = /**
     * @return {?}
     */
    function () {
        this.hideOverlay();
    };
    /**
     * @return {?}
     */
    NzPickerComponent.prototype.onOverlayDetach = /**
     * @return {?}
     */
    function () {
        this.hideOverlay();
    };
    // NOTE: A issue here, the first time position change, the animation will not be triggered.
    // Because the overlay's "positionChange" event is emitted after the content's full shown up.
    // All other components like "nz-dropdown" which depends on overlay also has the same issue.
    // See: https://github.com/NG-ZORRO/ng-zorro-antd/issues/1429
    // NOTE: A issue here, the first time position change, the animation will not be triggered.
    // Because the overlay's "positionChange" event is emitted after the content's full shown up.
    // All other components like "nz-dropdown" which depends on overlay also has the same issue.
    // See: https://github.com/NG-ZORRO/ng-zorro-antd/issues/1429
    /**
     * @param {?} position
     * @return {?}
     */
    NzPickerComponent.prototype.onPositionChange = 
    // NOTE: A issue here, the first time position change, the animation will not be triggered.
    // Because the overlay's "positionChange" event is emitted after the content's full shown up.
    // All other components like "nz-dropdown" which depends on overlay also has the same issue.
    // See: https://github.com/NG-ZORRO/ng-zorro-antd/issues/1429
    /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        this.dropdownAnimation = position.connectionPair.originY === 'top' ? 'bottom' : 'top';
        this.currentPositionX = (/** @type {?} */ (position.connectionPair.originX));
        this.currentPositionY = (/** @type {?} */ (position.connectionPair.originY));
        this.changeDetector.detectChanges(); // Take side-effects to position styles
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzPickerComponent.prototype.onClickClear = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.value = this.isRange ? [] : null;
        this.valueChange.emit(this.value);
    };
    /**
     * @param {?=} partType
     * @return {?}
     */
    NzPickerComponent.prototype.getReadableValue = /**
     * @param {?=} partType
     * @return {?}
     */
    function (partType) {
        /** @type {?} */
        var value;
        if (this.isRange) {
            value = ((/** @type {?} */ (this.value)))[this.getPartTypeIndex((/** @type {?} */ (partType)))];
        }
        else {
            value = (/** @type {?} */ (this.value));
        }
        return value ? this.dateHelper.format(value.nativeDate, this.format) : null;
    };
    /**
     * @param {?} partType
     * @return {?}
     */
    NzPickerComponent.prototype.getPartTypeIndex = /**
     * @param {?} partType
     * @return {?}
     */
    function (partType) {
        return { left: 0, right: 1 }[partType];
    };
    /**
     * @param {?=} partType
     * @return {?}
     */
    NzPickerComponent.prototype.getPlaceholder = /**
     * @param {?=} partType
     * @return {?}
     */
    function (partType) {
        return this.isRange ? this.placeholder[this.getPartTypeIndex((/** @type {?} */ (partType)))] : ((/** @type {?} */ (this.placeholder)));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzPickerComponent.prototype.isEmptyValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value === null) {
            return true;
        }
        else if (this.isRange) {
            return !value || !Array.isArray(value) || value.every((/**
             * @param {?} val
             * @return {?}
             */
            function (val) { return !val; }));
        }
        else {
            return !value;
        }
    };
    // Whether open state is permanently controlled by user himself
    // Whether open state is permanently controlled by user himself
    /**
     * @return {?}
     */
    NzPickerComponent.prototype.isOpenHandledByUser = 
    // Whether open state is permanently controlled by user himself
    /**
     * @return {?}
     */
    function () {
        return this.open !== undefined;
    };
    /**
     * @return {?}
     */
    NzPickerComponent.prototype.animationStart = /**
     * @return {?}
     */
    function () {
        if (this.realOpenState) {
            this.animationOpenState = true;
        }
    };
    /**
     * @return {?}
     */
    NzPickerComponent.prototype.animationDone = /**
     * @return {?}
     */
    function () {
        if (!this.realOpenState) {
            this.animationOpenState = false;
        }
    };
    NzPickerComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-picker',
                    exportAs: 'nzPicker',
                    template: "<span\r\n  cdkOverlayOrigin\r\n  #origin=\"cdkOverlayOrigin\"\r\n  class=\"{{ prefixCls }}-picker {{ size ? prefixCls + '-picker-' + size : '' }} {{ className }}\"\r\n  [ngStyle]=\"style\"\r\n  tabindex=\"0\"\r\n  (click)=\"onClickInputBox()\"\r\n  (keyup.enter)=\"onClickInputBox()\"\r\n>\r\n  <!-- Content of single picker -->\r\n  <ng-container *ngIf=\"!isRange\">\r\n    <input\r\n      #pickerInput\r\n      class=\"{{ prefixCls }}-picker-input ant-input\"\r\n      [class.ant-input-lg]=\"size === 'large'\"\r\n      [class.ant-input-sm]=\"size === 'small'\"\r\n      [class.ant-input-disabled]=\"disabled\"\r\n\r\n      [disabled]=\"disabled\"\r\n      readonly\r\n      value=\"{{ getReadableValue() }}\"\r\n      placeholder=\"{{ getPlaceholder() }}\"\r\n    />\r\n    <ng-container *ngTemplateOutlet=\"tplRightRest\"></ng-container>\r\n  </ng-container>\r\n\r\n  <!-- Content of range picker -->\r\n  <ng-container *ngIf=\"isRange\">\r\n    <span\r\n      #pickerInput\r\n      class=\"{{ prefixCls }}-picker-input ant-input\"\r\n      [class.ant-input-lg]=\"size === 'large'\"\r\n      [class.ant-input-sm]=\"size === 'small'\"\r\n      [class.ant-input-disabled]=\"disabled\"\r\n    >\r\n      <ng-container *ngTemplateOutlet=\"tplRangeInput; context: { partType: 'left' }\"></ng-container>\r\n      <span class=\"{{ prefixCls }}-range-picker-separator\"> ~ </span>\r\n      <ng-container *ngTemplateOutlet=\"tplRangeInput; context: { partType: 'right' }\"></ng-container>\r\n      <ng-container *ngTemplateOutlet=\"tplRightRest\"></ng-container>\r\n    </span>\r\n  </ng-container>\r\n</span>\r\n\r\n<!-- Input for Range ONLY -->\r\n<ng-template #tplRangeInput let-partType=\"partType\">\r\n  <input\r\n    class=\"{{ prefixCls }}-range-picker-input\"\r\n    [disabled]=\"disabled\"\r\n    readonly\r\n    value=\"{{ getReadableValue(partType) }}\"\r\n    placeholder=\"{{ getPlaceholder(partType) }}\"\r\n  />\r\n</ng-template>\r\n\r\n<!-- Right operator icons -->\r\n<ng-template #tplRightRest>\r\n  <i\r\n    nz-icon\r\n    nzType=\"close-circle\"\r\n    nzTheme=\"fill\"\r\n    *ngIf=\"!disabled && !isEmptyValue(value) && allowClear\"\r\n    class=\"{{ prefixCls }}-picker-clear\"\r\n    (click)=\"onClickClear($event)\"\r\n  ></i>\r\n  <span class=\"{{ prefixCls }}-picker-icon\">\r\n    <i nz-icon nzType=\"calendar\"></i>\r\n  </span>\r\n</ng-template>\r\n\r\n<!-- Overlay -->\r\n<ng-template\r\n  cdkConnectedOverlay\r\n  nzConnectedOverlay\r\n  [cdkConnectedOverlayOrigin]=\"origin\"\r\n  [cdkConnectedOverlayOpen]=\"realOpenState\"\r\n  [cdkConnectedOverlayHasBackdrop]=\"!isOpenHandledByUser()\"\r\n  [cdkConnectedOverlayPositions]=\"overlayPositions\"\r\n  (positionChange)=\"onPositionChange($event)\"\r\n  (backdropClick)=\"onClickBackdrop()\"\r\n  (detach)=\"onOverlayDetach()\"\r\n>\r\n  <div\r\n    [nzNoAnimation]=\"noAnimation\"\r\n    [@slideMotion]=\"dropdownAnimation\"\r\n    (@slideMotion.done)=\"animationDone()\"\r\n    style=\"position: relative;\"\r\n    [style.left]=\"currentPositionX === 'start' ? '-2px' : '2px'\"\r\n    [style.top]=\"currentPositionY === 'top' ? '-2px' : '2px'\"\r\n  > <!-- Compatible for overlay that not support offset dynamically and immediately -->\r\n    <ng-content></ng-content>\r\n  </div>\r\n</ng-template>\r\n",
                    animations: [slideMotion],
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NzPickerComponent.ctorParameters = function () { return [
        { type: DateHelperService },
        { type: ChangeDetectorRef }
    ]; };
    NzPickerComponent.propDecorators = {
        noAnimation: [{ type: Input }],
        isRange: [{ type: Input }],
        open: [{ type: Input }],
        disabled: [{ type: Input }],
        placeholder: [{ type: Input }],
        allowClear: [{ type: Input }],
        autoFocus: [{ type: Input }],
        className: [{ type: Input }],
        format: [{ type: Input }],
        size: [{ type: Input }],
        style: [{ type: Input }],
        value: [{ type: Input }],
        valueChange: [{ type: Output }],
        openChange: [{ type: Output }],
        origin: [{ type: ViewChild, args: ['origin', { static: false },] }],
        cdkConnectedOverlay: [{ type: ViewChild, args: [CdkConnectedOverlay, { static: false },] }],
        pickerInput: [{ type: ViewChild, args: ['pickerInput', { static: false },] }]
    };
    return NzPickerComponent;
}());
export { NzPickerComponent };
if (false) {
    /** @type {?} */
    NzPickerComponent.prototype.noAnimation;
    /** @type {?} */
    NzPickerComponent.prototype.isRange;
    /** @type {?} */
    NzPickerComponent.prototype.open;
    /** @type {?} */
    NzPickerComponent.prototype.disabled;
    /** @type {?} */
    NzPickerComponent.prototype.placeholder;
    /** @type {?} */
    NzPickerComponent.prototype.allowClear;
    /** @type {?} */
    NzPickerComponent.prototype.autoFocus;
    /** @type {?} */
    NzPickerComponent.prototype.className;
    /** @type {?} */
    NzPickerComponent.prototype.format;
    /** @type {?} */
    NzPickerComponent.prototype.size;
    /** @type {?} */
    NzPickerComponent.prototype.style;
    /** @type {?} */
    NzPickerComponent.prototype.value;
    /** @type {?} */
    NzPickerComponent.prototype.valueChange;
    /** @type {?} */
    NzPickerComponent.prototype.openChange;
    /** @type {?} */
    NzPickerComponent.prototype.origin;
    /** @type {?} */
    NzPickerComponent.prototype.cdkConnectedOverlay;
    /** @type {?} */
    NzPickerComponent.prototype.pickerInput;
    /** @type {?} */
    NzPickerComponent.prototype.prefixCls;
    /** @type {?} */
    NzPickerComponent.prototype.animationOpenState;
    /** @type {?} */
    NzPickerComponent.prototype.overlayOpen;
    /** @type {?} */
    NzPickerComponent.prototype.overlayOffsetY;
    /** @type {?} */
    NzPickerComponent.prototype.overlayOffsetX;
    /** @type {?} */
    NzPickerComponent.prototype.overlayPositions;
    /** @type {?} */
    NzPickerComponent.prototype.dropdownAnimation;
    /** @type {?} */
    NzPickerComponent.prototype.currentPositionX;
    /** @type {?} */
    NzPickerComponent.prototype.currentPositionY;
    /**
     * @type {?}
     * @private
     */
    NzPickerComponent.prototype.dateHelper;
    /**
     * @type {?}
     * @private
     */
    NzPickerComponent.prototype.changeDetector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXIvIiwic291cmNlcyI6WyJwaWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixnQkFBZ0IsRUFHakIsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUVOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFdBQVcsRUFBYSxNQUFNLG9CQUFvQixDQUFDO0FBQzVELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXZEO0lBc0VFLDJCQUFvQixVQUE2QixFQUFVLGNBQWlDO1FBQXhFLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQW1CO1FBN0RuRixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM3QixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLFNBQUksR0FBd0IsU0FBUyxDQUFDO1FBVTVCLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQWtDLENBQUM7UUFDakUsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUMsQ0FBQywyQ0FBMkM7UUFNeEcsY0FBUyxHQUFHLGNBQWMsQ0FBQztRQUMzQix1QkFBa0IsR0FBRyxLQUFLLENBQUM7UUFDM0IsZ0JBQVcsR0FBWSxLQUFLLENBQUMsQ0FBQyxrQ0FBa0M7O1FBQ2hFLG1CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBQzNCLG1CQUFjLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDNUIscUJBQWdCLEdBQTZCLG1CQUFBO1lBQzNDOzs7Z0JBR0UsT0FBTyxFQUFFLE9BQU87Z0JB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SzdDLHdCQUFDO0NBQUEsQUFsTUQsSUFrTUM7U0ExTFksaUJBQWlCOzs7SUFDNUIsd0NBQXNDOztJQUN0QyxvQ0FBa0M7O0lBQ2xDLGlDQUErQzs7SUFDL0MscUNBQTJCOztJQUMzQix3Q0FBd0M7O0lBQ3hDLHVDQUE2Qjs7SUFDN0Isc0NBQTRCOztJQUM1QixzQ0FBMkI7O0lBQzNCLG1DQUF3Qjs7SUFDeEIsaUNBQWlDOztJQUNqQyxrQ0FBdUI7O0lBQ3ZCLGtDQUErQzs7SUFDL0Msd0NBQW9GOztJQUNwRix1Q0FBNEQ7O0lBRTVELG1DQUFpRTs7SUFDakUsZ0RBQTRGOztJQUM1Rix3Q0FBcUU7O0lBRXJFLHNDQUEyQjs7SUFDM0IsK0NBQTJCOztJQUMzQix3Q0FBNkI7O0lBQzdCLDJDQUEyQjs7SUFDM0IsMkNBQTRCOztJQUM1Qiw2Q0EyQjhCOztJQUM5Qiw4Q0FBK0M7O0lBQy9DLDZDQUE0Qzs7SUFDNUMsNkNBQTJDOzs7OztJQU8vQix1Q0FBcUM7Ozs7O0lBQUUsMkNBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENka0Nvbm5lY3RlZE92ZXJsYXksXHJcbiAgQ2RrT3ZlcmxheU9yaWdpbixcclxuICBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UsXHJcbiAgQ29ubmVjdGlvblBvc2l0aW9uUGFpclxyXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBzbGlkZU1vdGlvbiwgQ2FuZHlEYXRlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgRGF0ZUhlbHBlclNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzZWxlY3RvcjogJ256LXBpY2tlcicsXHJcbiAgZXhwb3J0QXM6ICduelBpY2tlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BpY2tlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgYW5pbWF0aW9uczogW3NsaWRlTW90aW9uXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIG5vQW5pbWF0aW9uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaXNSYW5nZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG9wZW46IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gIEBJbnB1dCgpIGFsbG93Q2xlYXI6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgYXV0b0ZvY3VzOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGNsYXNzTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGZvcm1hdDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHNpemU6ICdsYXJnZScgfCAnc21hbGwnO1xyXG4gIEBJbnB1dCgpIHN0eWxlOiBvYmplY3Q7XHJcbiAgQElucHV0KCkgdmFsdWU6IENhbmR5RGF0ZSB8IENhbmR5RGF0ZVtdIHwgbnVsbDtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmR5RGF0ZSB8IENhbmR5RGF0ZVtdIHwgbnVsbD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb3BlbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTsgLy8gRW1pdHRlZCB3aGVuIG92ZXJsYXkncyBvcGVuIHN0YXRlIGNoYW5nZVxyXG5cclxuICBAVmlld0NoaWxkKCdvcmlnaW4nLCB7IHN0YXRpYzogZmFsc2UgfSkgb3JpZ2luOiBDZGtPdmVybGF5T3JpZ2luO1xyXG4gIEBWaWV3Q2hpbGQoQ2RrQ29ubmVjdGVkT3ZlcmxheSwgeyBzdGF0aWM6IGZhbHNlIH0pIGNka0Nvbm5lY3RlZE92ZXJsYXk6IENka0Nvbm5lY3RlZE92ZXJsYXk7XHJcbiAgQFZpZXdDaGlsZCgncGlja2VySW5wdXQnLCB7IHN0YXRpYzogZmFsc2UgfSkgcGlja2VySW5wdXQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gIHByZWZpeENscyA9ICdhbnQtY2FsZW5kYXInO1xyXG4gIGFuaW1hdGlvbk9wZW5TdGF0ZSA9IGZhbHNlO1xyXG4gIG92ZXJsYXlPcGVuOiBib29sZWFuID0gZmFsc2U7IC8vIEF2YWlsYWJsZSB3aGVuIFwib3BlblwiPXVuZGVmaW5lZFxyXG4gIG92ZXJsYXlPZmZzZXRZOiBudW1iZXIgPSAwO1xyXG4gIG92ZXJsYXlPZmZzZXRYOiBudW1iZXIgPSAtMjtcclxuICBvdmVybGF5UG9zaXRpb25zOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyW10gPSBbXHJcbiAgICB7XHJcbiAgICAgIC8vIG9mZnNldFg6IC0xMCwgLy8gVE9ETzogV2hhdCBhIHBpdHksIGNkay9vdmVybGF5IGN1cnJlbnQgbm90IHN1cHBvcnQgb2Zmc2V0IGNvbmZpZ3MgZXZlbiB0aG91Z2ggaXQgYWxyZWFkeSBwcm92aWRlIHRoZXNlIHByb3BlcnRpZXNcclxuICAgICAgLy8gb2Zmc2V0WTogLTEwLFxyXG4gICAgICBvcmlnaW5YOiAnc3RhcnQnLFxyXG4gICAgICBvcmlnaW5ZOiAndG9wJyxcclxuICAgICAgb3ZlcmxheVg6ICdzdGFydCcsXHJcbiAgICAgIG92ZXJsYXlZOiAndG9wJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgb3JpZ2luWDogJ3N0YXJ0JyxcclxuICAgICAgb3JpZ2luWTogJ2JvdHRvbScsXHJcbiAgICAgIG92ZXJsYXlYOiAnc3RhcnQnLFxyXG4gICAgICBvdmVybGF5WTogJ2JvdHRvbSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG9yaWdpblg6ICdlbmQnLFxyXG4gICAgICBvcmlnaW5ZOiAndG9wJyxcclxuICAgICAgb3ZlcmxheVg6ICdlbmQnLFxyXG4gICAgICBvdmVybGF5WTogJ3RvcCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG9yaWdpblg6ICdlbmQnLFxyXG4gICAgICBvcmlnaW5ZOiAnYm90dG9tJyxcclxuICAgICAgb3ZlcmxheVg6ICdlbmQnLFxyXG4gICAgICBvdmVybGF5WTogJ2JvdHRvbSdcclxuICAgIH1cclxuICBdIGFzIENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXTtcclxuICBkcm9wZG93bkFuaW1hdGlvbjogJ3RvcCcgfCAnYm90dG9tJyA9ICdib3R0b20nO1xyXG4gIGN1cnJlbnRQb3NpdGlvblg6ICdzdGFydCcgfCAnZW5kJyA9ICdzdGFydCc7XHJcbiAgY3VycmVudFBvc2l0aW9uWTogJ3RvcCcgfCAnYm90dG9tJyA9ICd0b3AnO1xyXG5cclxuICBnZXQgcmVhbE9wZW5TdGF0ZSgpOiBib29sZWFuIHtcclxuICAgIC8vIFRoZSB2YWx1ZSB0aGF0IHJlYWxseSBkZWNpZGUgdGhlIG9wZW4gc3RhdGUgb2Ygb3ZlcmxheVxyXG4gICAgcmV0dXJuIHRoaXMuaXNPcGVuSGFuZGxlZEJ5VXNlcigpID8gISF0aGlzLm9wZW4gOiB0aGlzLm92ZXJsYXlPcGVuO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRlSGVscGVyOiBEYXRlSGVscGVyU2VydmljZSwgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmF1dG9Gb2N1cykge1xyXG4gICAgICB0aGlzLmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5vcGVuKSB7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uU3RhcnQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvY3VzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xyXG4gICAgICBjb25zdCBmaXJzdElucHV0ID0gKHRoaXMucGlja2VySW5wdXQubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAnaW5wdXQ6Zmlyc3QtY2hpbGQnXHJcbiAgICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgZmlyc3RJbnB1dC5mb2N1cygpOyAvLyBGb2N1cyBvbiB0aGUgZmlyc3QgaW5wdXRcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucGlja2VySW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gU2hvdyBvdmVybGF5IGNvbnRlbnRcclxuICBzaG93T3ZlcmxheSgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5yZWFsT3BlblN0YXRlKSB7XHJcbiAgICAgIHRoaXMub3ZlcmxheU9wZW4gPSB0cnVlO1xyXG4gICAgICB0aGlzLmFuaW1hdGlvblN0YXJ0KCk7XHJcbiAgICAgIHRoaXMub3BlbkNoYW5nZS5lbWl0KHRoaXMub3ZlcmxheU9wZW4pO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5ICYmIHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheS5vdmVybGF5UmVmKSB7XHJcbiAgICAgICAgICB0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkub3ZlcmxheVJlZi51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoaWRlT3ZlcmxheSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnJlYWxPcGVuU3RhdGUpIHtcclxuICAgICAgdGhpcy5vdmVybGF5T3BlbiA9IGZhbHNlO1xyXG4gICAgICB0aGlzLm9wZW5DaGFuZ2UuZW1pdCh0aGlzLm92ZXJsYXlPcGVuKTtcclxuICAgICAgdGhpcy5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DbGlja0lucHV0Qm94KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmRpc2FibGVkICYmICF0aGlzLmlzT3BlbkhhbmRsZWRCeVVzZXIoKSkge1xyXG4gICAgICB0aGlzLnNob3dPdmVybGF5KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrQmFja2Ryb3AoKTogdm9pZCB7XHJcbiAgICB0aGlzLmhpZGVPdmVybGF5KCk7XHJcbiAgfVxyXG5cclxuICBvbk92ZXJsYXlEZXRhY2goKTogdm9pZCB7XHJcbiAgICB0aGlzLmhpZGVPdmVybGF5KCk7XHJcbiAgfVxyXG5cclxuICAvLyBOT1RFOiBBIGlzc3VlIGhlcmUsIHRoZSBmaXJzdCB0aW1lIHBvc2l0aW9uIGNoYW5nZSwgdGhlIGFuaW1hdGlvbiB3aWxsIG5vdCBiZSB0cmlnZ2VyZWQuXHJcbiAgLy8gQmVjYXVzZSB0aGUgb3ZlcmxheSdzIFwicG9zaXRpb25DaGFuZ2VcIiBldmVudCBpcyBlbWl0dGVkIGFmdGVyIHRoZSBjb250ZW50J3MgZnVsbCBzaG93biB1cC5cclxuICAvLyBBbGwgb3RoZXIgY29tcG9uZW50cyBsaWtlIFwibnotZHJvcGRvd25cIiB3aGljaCBkZXBlbmRzIG9uIG92ZXJsYXkgYWxzbyBoYXMgdGhlIHNhbWUgaXNzdWUuXHJcbiAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9pc3N1ZXMvMTQyOVxyXG4gIG9uUG9zaXRpb25DaGFuZ2UocG9zaXRpb246IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSk6IHZvaWQge1xyXG4gICAgdGhpcy5kcm9wZG93bkFuaW1hdGlvbiA9IHBvc2l0aW9uLmNvbm5lY3Rpb25QYWlyLm9yaWdpblkgPT09ICd0b3AnID8gJ2JvdHRvbScgOiAndG9wJztcclxuICAgIHRoaXMuY3VycmVudFBvc2l0aW9uWCA9IHBvc2l0aW9uLmNvbm5lY3Rpb25QYWlyLm9yaWdpblggYXMgJ3N0YXJ0JyB8ICdlbmQnO1xyXG4gICAgdGhpcy5jdXJyZW50UG9zaXRpb25ZID0gcG9zaXRpb24uY29ubmVjdGlvblBhaXIub3JpZ2luWSBhcyAndG9wJyB8ICdib3R0b20nO1xyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7IC8vIFRha2Ugc2lkZS1lZmZlY3RzIHRvIHBvc2l0aW9uIHN0eWxlc1xyXG4gIH1cclxuXHJcbiAgb25DbGlja0NsZWFyKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuaXNSYW5nZSA/IFtdIDogbnVsbDtcclxuICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldFJlYWRhYmxlVmFsdWUocGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogc3RyaW5nIHwgbnVsbCB7XHJcbiAgICBsZXQgdmFsdWU6IENhbmR5RGF0ZTtcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgdmFsdWUgPSAodGhpcy52YWx1ZSBhcyBDYW5keURhdGVbXSlbdGhpcy5nZXRQYXJ0VHlwZUluZGV4KHBhcnRUeXBlIGFzIFJhbmdlUGFydFR5cGUpXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhbHVlID0gdGhpcy52YWx1ZSBhcyBDYW5keURhdGU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsdWUgPyB0aGlzLmRhdGVIZWxwZXIuZm9ybWF0KHZhbHVlLm5hdGl2ZURhdGUsIHRoaXMuZm9ybWF0KSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICBnZXRQYXJ0VHlwZUluZGV4KHBhcnRUeXBlOiBSYW5nZVBhcnRUeXBlKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB7IGxlZnQ6IDAsIHJpZ2h0OiAxIH1bcGFydFR5cGVdO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGxhY2Vob2xkZXIocGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmlzUmFuZ2UgPyB0aGlzLnBsYWNlaG9sZGVyW3RoaXMuZ2V0UGFydFR5cGVJbmRleChwYXJ0VHlwZSEpXSA6ICh0aGlzLnBsYWNlaG9sZGVyIGFzIHN0cmluZyk7XHJcbiAgfVxyXG5cclxuICBpc0VtcHR5VmFsdWUodmFsdWU6IENhbmR5RGF0ZVtdIHwgQ2FuZHlEYXRlIHwgbnVsbCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHZhbHVlID09PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgcmV0dXJuICF2YWx1ZSB8fCAhQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgdmFsdWUuZXZlcnkodmFsID0+ICF2YWwpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuICF2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFdoZXRoZXIgb3BlbiBzdGF0ZSBpcyBwZXJtYW5lbnRseSBjb250cm9sbGVkIGJ5IHVzZXIgaGltc2VsZlxyXG4gIGlzT3BlbkhhbmRsZWRCeVVzZXIoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5vcGVuICE9PSB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBhbmltYXRpb25TdGFydCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnJlYWxPcGVuU3RhdGUpIHtcclxuICAgICAgdGhpcy5hbmltYXRpb25PcGVuU3RhdGUgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYW5pbWF0aW9uRG9uZSgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5yZWFsT3BlblN0YXRlKSB7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uT3BlblN0YXRlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBSYW5nZVBhcnRUeXBlID0gJ2xlZnQnIHwgJ3JpZ2h0JztcclxuIl19