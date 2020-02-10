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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdG9vbHRpcC1iYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdG9vbHRpcC8iLCJzb3VyY2VzIjpbImJhc2UvbnotdG9vbHRpcC1iYXNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFjQSxPQUFPLEVBQXFCLFlBQVksRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JGLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsUUFBUSxFQUNSLHlCQUF5QixFQUsxQixNQUFNLG9CQUFvQixDQUFDOzs7OztBQU81QjtJQWtDRSxnQ0FBbUIsR0FBc0IsRUFBUyxXQUFvQztRQUFuRSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQXJCbkUsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBS2pFLGNBQVMsR0FBcUIsRUFBRSxDQUFDO1FBQ2pDLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLFlBQU8sR0FBRyx1QkFBdUIsQ0FBQztRQUNsQyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGVBQVUsb0JBQWlDLHlCQUF5QixFQUFFO1FBQ3RFLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsYUFBUSxHQUFxQixPQUFPLENBQUM7SUFVb0QsQ0FBQztJQVIxRixzQkFBSSwyQ0FBTzs7OztRQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQ2hGLENBQUM7OztPQUFBO0lBRUQsc0JBQUkseUNBQUs7Ozs7UUFBVDtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FB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Qzs7a0NBN0ZBLE1BQU07O0lBOEZULDZCQUFDO0NBQUEsQUEzR0QsSUEyR0M7U0EzR3FCLHNCQUFzQjs7O0lBQzFDLHlDQUF5Qjs7SUFDekIsMkNBQTJCOztJQUMzQiwyQ0FBbUI7O0lBQ25CLDZDQUFvQjs7SUFDcEIsb0RBQTJCOztJQUMzQixnREFBaUM7O0lBQ2pDLG1EQUEwQjs7SUFDMUIsbURBQTBCOztJQUMxQiwyQ0FBNEI7O0lBQzVCLGlEQUFtQzs7SUFDbkMsbURBQXFDOztJQUVyQyxpREFBaUU7O0lBRWpFLHlDQUE2Qjs7SUFDN0Isd0NBQXlCOztJQUV6QiwyQ0FBaUM7O0lBQ2pDLDhDQUFxQjs7SUFDckIseUNBQWtDOztJQUNsQywwQ0FBaUI7O0lBQ2pCLDRDQUFzRTs7SUFDdEUsNENBQW1COztJQUNuQiwwQ0FBcUM7O0lBVXpCLHFDQUE2Qjs7SUFBRSw2Q0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2RrQ29ubmVjdGVkT3ZlcmxheSxcclxuICBDZGtPdmVybGF5T3JpZ2luLFxyXG4gIENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSxcclxuICBDb25uZWN0aW9uUG9zaXRpb25QYWlyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgZ2V0UGxhY2VtZW50TmFtZSxcclxuICBpc05vdE5pbCxcclxuICBERUZBVUxUX1RPT0xUSVBfUE9TSVRJT05TLFxyXG4gIE5nQ2xhc3NJbnRlcmZhY2UsXHJcbiAgTmdTdHlsZUludGVyZmFjZSxcclxuICBOek5vQW5pbWF0aW9uRGlyZWN0aXZlLFxyXG4gIE56VFNUeXBlXHJcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56VG9vbHRpcFRyaWdnZXIgfSBmcm9tICcuLi9uei10b29sdGlwLmRlZmluaXRpb25zJztcclxuXHJcbi8qKlxyXG4gKiBUb29sdGlwIGNvbXBvbmVudC4gQWxzbyB0aGUgYmFzZSBjb21wb25lbnQgZm9yIGxlZ2FjeSBjb21wb25lbnRzLlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE56VG9vbHRpcEJhc2VDb21wb25lbnQge1xyXG4gIG56VGl0bGU6IE56VFNUeXBlIHwgbnVsbDtcclxuICBuekNvbnRlbnQ6IE56VFNUeXBlIHwgbnVsbDtcclxuICBuelZpc2libGU6IGJvb2xlYW47XHJcbiAgbnpQbGFjZW1lbnQ6IHN0cmluZztcclxuICBuek92ZXJsYXlDbGFzc05hbWU6IHN0cmluZztcclxuICBuek92ZXJsYXlTdHlsZTogTmdTdHlsZUludGVyZmFjZTtcclxuICBuek1vdXNlRW50ZXJEZWxheTogbnVtYmVyO1xyXG4gIG56TW91c2VMZWF2ZURlbGF5OiBudW1iZXI7XHJcbiAgbnpUcmlnZ2VyOiBOelRvb2x0aXBUcmlnZ2VyO1xyXG4gIG56VGl0bGVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgbnpDb250ZW50VGVtcGxhdGU6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpWaXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBvdmVybGF5OiBDZGtDb25uZWN0ZWRPdmVybGF5O1xyXG4gIG9yaWdpbjogQ2RrT3ZlcmxheU9yaWdpbjtcclxuXHJcbiAgX2NsYXNzTWFwOiBOZ0NsYXNzSW50ZXJmYWNlID0ge307XHJcbiAgX2hhc0JhY2tkcm9wID0gZmFsc2U7XHJcbiAgX3ByZWZpeCA9ICdhbnQtdG9vbHRpcC1wbGFjZW1lbnQnO1xyXG4gIF92aXNpYmxlID0gZmFsc2U7XHJcbiAgX3Bvc2l0aW9uczogQ29ubmVjdGlvblBvc2l0aW9uUGFpcltdID0gWy4uLkRFRkFVTFRfVE9PTFRJUF9QT1NJVElPTlNdO1xyXG4gIF9wbGFjZW1lbnQgPSAndG9wJztcclxuICBfdHJpZ2dlcjogTnpUb29sdGlwVHJpZ2dlciA9ICdob3Zlcic7XHJcblxyXG4gIGdldCBjb250ZW50KCk6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5uekNvbnRlbnQgIT09IHVuZGVmaW5lZCA/IHRoaXMubnpDb250ZW50IDogdGhpcy5uekNvbnRlbnRUZW1wbGF0ZTtcclxuICB9XHJcblxyXG4gIGdldCB0aXRsZSgpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMubnpUaXRsZSAhPT0gdW5kZWZpbmVkID8gdGhpcy5uelRpdGxlIDogdGhpcy5uelRpdGxlVGVtcGxhdGU7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSkge31cclxuXHJcbiAgc2hvdygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56VmlzaWJsZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLmlzVGl0bGVFbXB0eSgpIHx8ICF0aGlzLmlzQ29udGVudEVtcHR5KCkpIHtcclxuICAgICAgdGhpcy5uelZpc2libGUgPSB0cnVlO1xyXG4gICAgICB0aGlzLm56VmlzaWJsZUNoYW5nZS5lbWl0KHRydWUpO1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hZnRlckFwcGVhcmluZygpO1xyXG4gIH1cclxuXHJcbiAgaGlkZSgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5uelZpc2libGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubnpWaXNpYmxlID0gZmFsc2U7XHJcbiAgICB0aGlzLm56VmlzaWJsZUNoYW5nZS5lbWl0KGZhbHNlKTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUJ5RGlyZWN0aXZlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG5cclxuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZvcmNlIHRoZSBjb21wb25lbnQgdG8gdXBkYXRlIGl0cyBwb3NpdGlvbi5cclxuICAgKi9cclxuICB1cGRhdGVQb3NpdGlvbigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm9yaWdpbiAmJiB0aGlzLm92ZXJsYXkgJiYgdGhpcy5vdmVybGF5Lm92ZXJsYXlSZWYpIHtcclxuICAgICAgdGhpcy5vdmVybGF5Lm92ZXJsYXlSZWYudXBkYXRlUG9zaXRpb24oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uUG9zaXRpb25DaGFuZ2UocG9zaXRpb246IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSk6IHZvaWQge1xyXG4gICAgdGhpcy5fcGxhY2VtZW50ID0gZ2V0UGxhY2VtZW50TmFtZShwb3NpdGlvbikhO1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgYWZ0ZXJBcHBlYXJpbmcoKTogdm9pZCB7XHJcbiAgICAvLyBtYXkgYmUgb3ZlcnJpZGRlbiBpbiBjb25jcmV0ZSBjbGFzc2VzXHJcbiAgfVxyXG5cclxuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2NsYXNzTWFwID0ge1xyXG4gICAgICBbdGhpcy5uek92ZXJsYXlDbGFzc05hbWVdOiB0cnVlLFxyXG4gICAgICBbYCR7dGhpcy5fcHJlZml4fS0ke3RoaXMuX3BsYWNlbWVudH1gXTogdHJ1ZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHNldE92ZXJsYXlPcmlnaW4ob3JpZ2luOiBDZGtPdmVybGF5T3JpZ2luKTogdm9pZCB7XHJcbiAgICB0aGlzLm9yaWdpbiA9IG9yaWdpbjtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1RpdGxlRW1wdHkoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy50aXRsZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmID8gZmFsc2UgOiB0aGlzLnRpdGxlID09PSAnJyB8fCAhaXNOb3ROaWwodGhpcy50aXRsZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzQ29udGVudEVtcHR5KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGVudCBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmID8gZmFsc2UgOiB0aGlzLmNvbnRlbnQgPT09ICcnIHx8ICFpc05vdE5pbCh0aGlzLmNvbnRlbnQpO1xyXG4gIH1cclxufVxyXG4iXX0=