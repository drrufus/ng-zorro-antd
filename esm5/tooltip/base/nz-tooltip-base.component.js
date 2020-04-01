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
import { EventEmitter, Output, TemplateRef } from '@angular/core';
import { getPlacementName, isNotNil, DEFAULT_TOOLTIP_POSITIONS } from 'ng-zorro-antd/core';
/**
 * Tooltip component. Also the base component for legacy components.
 * @abstract
 */
var NzTooltipBaseComponent = /** @class */ (function () {
    function NzTooltipBaseComponent(cdr, noAnimation) {
        this.cdr = cdr;
        this.noAnimation = noAnimation;
        this.nzPopoverForceRestoreFocus = false;
        this.nzVisibleChange = new EventEmitter();
        this._classMap = {};
        this._hasBackdrop = false;
        this._prefix = 'ant-tooltip-placement';
        this._visible = false;
        this._positions = tslib_1.__spread(DEFAULT_TOOLTIP_POSITIONS);
        this._placement = 'top';
        this._trigger = 'hover';
    }
    Object.defineProperty(NzTooltipBaseComponent.prototype, "content", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzContent !== undefined ? this.nzContent : this.nzContentTemplate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTooltipBaseComponent.prototype, "title", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzTitle !== undefined ? this.nzTitle : this.nzTitleTemplate;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzTooltipBaseComponent.prototype.show = /**
     * @return {?}
     */
    function () {
        if (this.nzVisible) {
            return;
        }
        if (!this.isTitleEmpty() || !this.isContentEmpty()) {
            this.nzVisible = true;
            this.nzVisibleChange.emit(true);
            this.cdr.detectChanges();
        }
        this.afterAppearing();
    };
    /**
     * @return {?}
     */
    NzTooltipBaseComponent.prototype.hide = /**
     * @return {?}
     */
    function () {
        if (!this.nzVisible) {
            return;
        }
        this.nzVisible = false;
        this.nzVisibleChange.emit(false);
        this.cdr.detectChanges();
        if (this.nzPopoverForceRestoreFocus) {
            this.restoreFocus();
        }
    };
    /**
     * @return {?}
     */
    NzTooltipBaseComponent.prototype.restoreFocus = /**
     * @return {?}
     */
    function () {
        console.log("an attempt to restore a focus");
        try {
            this.origin.elementRef.nativeElement.focus();
        }
        catch (e) {
            console.warn("Unable to restore a focus:");
            console.warn(e);
        }
    };
    /**
     * @return {?}
     */
    NzTooltipBaseComponent.prototype.updateByDirective = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.setClassMap();
        this.cdr.detectChanges();
        Promise.resolve().then((/**
         * @return {?}
         */
        function () {
            _this.updatePosition();
        }));
    };
    /**
     * Force the component to update its position.
     */
    /**
     * Force the component to update its position.
     * @return {?}
     */
    NzTooltipBaseComponent.prototype.updatePosition = /**
     * Force the component to update its position.
     * @return {?}
     */
    function () {
        if (this.origin && this.overlay && this.overlay.overlayRef) {
            this.overlay.overlayRef.updatePosition();
        }
    };
    /**
     * @param {?} position
     * @return {?}
     */
    NzTooltipBaseComponent.prototype.onPositionChange = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        this._placement = (/** @type {?} */ (getPlacementName(position)));
        this.setClassMap();
        this.cdr.detectChanges();
    };
    /**
     * @return {?}
     */
    NzTooltipBaseComponent.prototype.afterAppearing = /**
     * @return {?}
     */
    function () {
        // may be overridden in concrete classes
    };
    /**
     * @return {?}
     */
    NzTooltipBaseComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        this._classMap = (_a = {},
            _a[this.nzOverlayClassName] = true,
            _a[this._prefix + "-" + this._placement] = true,
            _a);
    };
    /**
     * @param {?} origin
     * @return {?}
     */
    NzTooltipBaseComponent.prototype.setOverlayOrigin = /**
     * @param {?} origin
     * @return {?}
     */
    function (origin) {
        this.origin = origin;
        this.cdr.markForCheck();
    };
    /**
     * @private
     * @return {?}
     */
    NzTooltipBaseComponent.prototype.isTitleEmpty = /**
     * @private
     * @return {?}
     */
    function () {
        return this.title instanceof TemplateRef ? false : this.title === '' || !isNotNil(this.title);
    };
    /**
     * @private
     * @return {?}
     */
    NzTooltipBaseComponent.prototype.isContentEmpty = /**
     * @private
     * @return {?}
     */
    function () {
        return this.content instanceof TemplateRef ? false : this.content === '' || !isNotNil(this.content);
    };
    NzTooltipBaseComponent.propDecorators = {
        nzVisibleChange: [{ type: Output }]
    };
    return NzTooltipBaseComponent;
}());
export { NzTooltipBaseComponent };
if (false) {
    /** @type {?} */
    NzTooltipBaseComponent.prototype.nzTitle;
    /** @type {?} */
    NzTooltipBaseComponent.prototype.nzContent;
    /** @type {?} */
    NzTooltipBaseComponent.prototype.nzVisible;
    /** @type {?} */
    NzTooltipBaseComponent.prototype.nzPlacement;
    /** @type {?} */
    NzTooltipBaseComponent.prototype.nzOverlayClassName;
    /** @type {?} */
    NzTooltipBaseComponent.prototype.nzOverlayStyle;
    /** @type {?} */
    NzTooltipBaseComponent.prototype.nzMouseEnterDelay;
    /** @type {?} */
    NzTooltipBaseComponent.prototype.nzMouseLeaveDelay;
    /** @type {?} */
    NzTooltipBaseComponent.prototype.nzTrigger;
    /** @type {?} */
    NzTooltipBaseComponent.prototype.nzTitleTemplate;
    /** @type {?} */
    NzTooltipBaseComponent.prototype.nzContentTemplate;
    /** @type {?} */
    NzTooltipBaseComponent.prototype.nzShowPopoverCloseButton;
    /** @type {?} */
    NzTooltipBaseComponent.prototype.nzPopoverForceRestoreFocus;
    /** @type {?} */
    NzTooltipBaseComponent.prototype.nzVisibleChange;
    /** @type {?} */
    NzTooltipBaseComponent.prototype.overlay;
    /** @type {?} */
    NzTooltipBaseComponent.prototype.origin;
    /** @type {?} */
    NzTooltipBaseComponent.prototype._classMap;
    /** @type {?} */
    NzTooltipBaseComponent.prototype._hasBackdrop;
    /** @type {?} */
    NzTooltipBaseComponent.prototype._prefix;
    /** @type {?} */
    NzTooltipBaseComponent.prototype._visible;
    /** @type {?} */
    NzTooltipBaseComponent.prototype._positions;
    /** @type {?} */
    NzTooltipBaseComponent.prototype._placement;
    /** @type {?} */
    NzTooltipBaseComponent.prototype._trigger;
    /** @type {?} */
    NzTooltipBaseComponent.prototype.cdr;
    /** @type {?} */
    NzTooltipBaseComponent.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdG9vbHRpcC1iYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdG9vbHRpcC8iLCJzb3VyY2VzIjpbImJhc2UvbnotdG9vbHRpcC1iYXNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFjQSxPQUFPLEVBQXFCLFlBQVksRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JGLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsUUFBUSxFQUNSLHlCQUF5QixFQUsxQixNQUFNLG9CQUFvQixDQUFDOzs7OztBQU81QjtJQW9DRSxnQ0FBbUIsR0FBc0IsRUFBUyxXQUFvQztRQUFuRSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQXZCdEYsK0JBQTBCLEdBQVksS0FBSyxDQUFDO1FBRXpCLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUtqRSxjQUFTLEdBQXFCLEVBQUUsQ0FBQztRQUNqQyxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixZQUFPLEdBQUcsdUJBQXVCLENBQUM7UUFDbEMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixlQUFVLG9CQUFpQyx5QkFBeUIsRUFBRTtRQUN0RSxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGFBQVEsR0FBcUIsT0FBTyxDQUFDO0lBVW9ELENBQUM7SUFSMUYsc0JBQUksMkNBQU87Ozs7UUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUNoRixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHlDQUFLOzs7O1FBQVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMs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MUIsQ0FBQzs7Ozs7SUFFTyw2Q0FBWTs7OztJQUFwQjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssWUFBWSxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hHLENBQUM7Ozs7O0lBRU8sK0NBQWM7Ozs7SUFBdEI7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLFlBQVksV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0RyxDQUFDOztrQ0EzR0EsTUFBTTs7SUE0R1QsNkJBQUM7Q0FBQSxBQTNIRCxJQTJIQztTQTNIcUIsc0JBQXNCOzs7SUFDMUMseUNBQXlCOztJQUN6QiwyQ0FBMkI7O0lBQzNCLDJDQUFtQjs7SUFDbkIsNkNBQW9COztJQUNwQixvREFBMkI7O0lBQzNCLGdEQUFpQzs7SUFDakMsbURBQTBCOztJQUMxQixtREFBMEI7O0lBQzFCLDJDQUE0Qjs7SUFDNUIsaURBQW1DOztJQUNuQyxtREFBcUM7O0lBQ3JDLDBEQUFrQzs7SUFDbEMsNERBQTRDOztJQUU1QyxpREFBaUU7O0lBRWpFLHlDQUE2Qjs7SUFDN0Isd0NBQXlCOztJQUV6QiwyQ0FBaUM7O0lBQ2pDLDhDQUFxQjs7SUFDckIseUNBQWtDOztJQUNsQywwQ0FBaUI7O0lBQ2pCLDRDQUFzRTs7SUFDdEUsNENBQW1COztJQUNuQiwwQ0FBcUM7O0lBVXpCLHFDQUE2Qjs7SUFBRSw2Q0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2RrQ29ubmVjdGVkT3ZlcmxheSxcclxuICBDZGtPdmVybGF5T3JpZ2luLFxyXG4gIENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSxcclxuICBDb25uZWN0aW9uUG9zaXRpb25QYWlyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgZ2V0UGxhY2VtZW50TmFtZSxcclxuICBpc05vdE5pbCxcclxuICBERUZBVUxUX1RPT0xUSVBfUE9TSVRJT05TLFxyXG4gIE5nQ2xhc3NJbnRlcmZhY2UsXHJcbiAgTmdTdHlsZUludGVyZmFjZSxcclxuICBOek5vQW5pbWF0aW9uRGlyZWN0aXZlLFxyXG4gIE56VFNUeXBlXHJcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56VG9vbHRpcFRyaWdnZXIgfSBmcm9tICcuLi9uei10b29sdGlwLmRlZmluaXRpb25zJztcclxuXHJcbi8qKlxyXG4gKiBUb29sdGlwIGNvbXBvbmVudC4gQWxzbyB0aGUgYmFzZSBjb21wb25lbnQgZm9yIGxlZ2FjeSBjb21wb25lbnRzLlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE56VG9vbHRpcEJhc2VDb21wb25lbnQge1xyXG4gIG56VGl0bGU6IE56VFNUeXBlIHwgbnVsbDtcclxuICBuekNvbnRlbnQ6IE56VFNUeXBlIHwgbnVsbDtcclxuICBuelZpc2libGU6IGJvb2xlYW47XHJcbiAgbnpQbGFjZW1lbnQ6IHN0cmluZztcclxuICBuek92ZXJsYXlDbGFzc05hbWU6IHN0cmluZztcclxuICBuek92ZXJsYXlTdHlsZTogTmdTdHlsZUludGVyZmFjZTtcclxuICBuek1vdXNlRW50ZXJEZWxheTogbnVtYmVyO1xyXG4gIG56TW91c2VMZWF2ZURlbGF5OiBudW1iZXI7XHJcbiAgbnpUcmlnZ2VyOiBOelRvb2x0aXBUcmlnZ2VyO1xyXG4gIG56VGl0bGVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgbnpDb250ZW50VGVtcGxhdGU6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIG56U2hvd1BvcG92ZXJDbG9zZUJ1dHRvbjogYm9vbGVhbjtcclxuICBuelBvcG92ZXJGb3JjZVJlc3RvcmVGb2N1czogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpWaXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBvdmVybGF5OiBDZGtDb25uZWN0ZWRPdmVybGF5O1xyXG4gIG9yaWdpbjogQ2RrT3ZlcmxheU9yaWdpbjtcclxuXHJcbiAgX2NsYXNzTWFwOiBOZ0NsYXNzSW50ZXJmYWNlID0ge307XHJcbiAgX2hhc0JhY2tkcm9wID0gZmFsc2U7XHJcbiAgX3ByZWZpeCA9ICdhbnQtdG9vbHRpcC1wbGFjZW1lbnQnO1xyXG4gIF92aXNpYmxlID0gZmFsc2U7XHJcbiAgX3Bvc2l0aW9uczogQ29ubmVjdGlvblBvc2l0aW9uUGFpcltdID0gWy4uLkRFRkFVTFRfVE9PTFRJUF9QT1NJVElPTlNdO1xyXG4gIF9wbGFjZW1lbnQgPSAndG9wJztcclxuICBfdHJpZ2dlcjogTnpUb29sdGlwVHJpZ2dlciA9ICdob3Zlcic7XHJcblxyXG4gIGdldCBjb250ZW50KCk6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5uekNvbnRlbnQgIT09IHVuZGVmaW5lZCA/IHRoaXMubnpDb250ZW50IDogdGhpcy5uekNvbnRlbnRUZW1wbGF0ZTtcclxuICB9XHJcblxyXG4gIGdldCB0aXRsZSgpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMubnpUaXRsZSAhPT0gdW5kZWZpbmVkID8gdGhpcy5uelRpdGxlIDogdGhpcy5uelRpdGxlVGVtcGxhdGU7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSkge31cclxuXHJcbiAgc2hvdygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56VmlzaWJsZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLmlzVGl0bGVFbXB0eSgpIHx8ICF0aGlzLmlzQ29udGVudEVtcHR5KCkpIHtcclxuICAgICAgdGhpcy5uelZpc2libGUgPSB0cnVlO1xyXG4gICAgICB0aGlzLm56VmlzaWJsZUNoYW5nZS5lbWl0KHRydWUpO1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRoaXMuYWZ0ZXJBcHBlYXJpbmcoKTtcclxuICB9XHJcblxyXG4gIGhpZGUoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMubnpWaXNpYmxlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm56VmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5uelZpc2libGVDaGFuZ2UuZW1pdChmYWxzZSk7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcblxyXG4gICAgaWYgKHRoaXMubnpQb3BvdmVyRm9yY2VSZXN0b3JlRm9jdXMpIHtcclxuICAgICAgdGhpcy5yZXN0b3JlRm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlc3RvcmVGb2N1cygpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKFwiYW4gYXR0ZW1wdCB0byByZXN0b3JlIGEgZm9jdXNcIik7XHJcbiAgICB0cnkge1xyXG4gICAgICB0aGlzLm9yaWdpbi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oXCJVbmFibGUgdG8gcmVzdG9yZSBhIGZvY3VzOlwiKTtcclxuICAgICAgY29uc29sZS53YXJuKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlQnlEaXJlY3RpdmUoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcblxyXG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRm9yY2UgdGhlIGNvbXBvbmVudCB0byB1cGRhdGUgaXRzIHBvc2l0aW9uLlxyXG4gICAqL1xyXG4gIHVwZGF0ZVBvc2l0aW9uKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMub3JpZ2luICYmIHRoaXMub3ZlcmxheSAmJiB0aGlzLm92ZXJsYXkub3ZlcmxheVJlZikge1xyXG4gICAgICB0aGlzLm92ZXJsYXkub3ZlcmxheVJlZi51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Qb3NpdGlvbkNoYW5nZShwb3NpdGlvbjogQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlKTogdm9pZCB7XHJcbiAgICB0aGlzLl9wbGFjZW1lbnQgPSBnZXRQbGFjZW1lbnROYW1lKHBvc2l0aW9uKSE7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBhZnRlckFwcGVhcmluZygpOiB2b2lkIHtcclxuICAgIC8vIG1heSBiZSBvdmVycmlkZGVuIGluIGNvbmNyZXRlIGNsYXNzZXNcclxuICB9XHJcblxyXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fY2xhc3NNYXAgPSB7XHJcbiAgICAgIFt0aGlzLm56T3ZlcmxheUNsYXNzTmFtZV06IHRydWUsXHJcbiAgICAgIFtgJHt0aGlzLl9wcmVmaXh9LSR7dGhpcy5fcGxhY2VtZW50fWBdOiB0cnVlXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc2V0T3ZlcmxheU9yaWdpbihvcmlnaW46IENka092ZXJsYXlPcmlnaW4pOiB2b2lkIHtcclxuICAgIHRoaXMub3JpZ2luID0gb3JpZ2luO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzVGl0bGVFbXB0eSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnRpdGxlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYgPyBmYWxzZSA6IHRoaXMudGl0bGUgPT09ICcnIHx8ICFpc05vdE5pbCh0aGlzLnRpdGxlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNDb250ZW50RW1wdHkoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250ZW50IGluc3RhbmNlb2YgVGVtcGxhdGVSZWYgPyBmYWxzZSA6IHRoaXMuY29udGVudCA9PT0gJycgfHwgIWlzTm90TmlsKHRoaXMuY29udGVudCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==