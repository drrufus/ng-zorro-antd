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
import { EventEmitter, Output, TemplateRef } from '@angular/core';
import { getPlacementName, isNotNil, DEFAULT_TOOLTIP_POSITIONS } from 'ng-zorro-antd/core';
/**
 * Tooltip component. Also the base component for legacy components.
 * @abstract
 */
export class NzTooltipBaseComponent {
    /**
     * @param {?} cdr
     * @param {?=} noAnimation
     */
    constructor(cdr, noAnimation) {
        this.cdr = cdr;
        this.noAnimation = noAnimation;
        this.nzPopoverForceRestoreFocus = false;
        this.nzVisibleChange = new EventEmitter();
        this._classMap = {};
        this._hasBackdrop = false;
        this._prefix = 'ant-tooltip-placement';
        this._visible = false;
        this._positions = [...DEFAULT_TOOLTIP_POSITIONS];
        this._placement = 'top';
        this._trigger = 'hover';
    }
    /**
     * @return {?}
     */
    get content() {
        return this.nzContent !== undefined ? this.nzContent : this.nzContentTemplate;
    }
    /**
     * @return {?}
     */
    get title() {
        return this.nzTitle !== undefined ? this.nzTitle : this.nzTitleTemplate;
    }
    /**
     * @return {?}
     */
    show() {
        if (this.nzVisible) {
            return;
        }
        if (!this.isTitleEmpty() || !this.isContentEmpty()) {
            this.nzVisible = true;
            this.nzVisibleChange.emit(true);
            this.cdr.detectChanges();
        }
        this.afterAppearing();
    }
    /**
     * @return {?}
     */
    hide() {
        if (!this.nzVisible) {
            return;
        }
        this.nzVisible = false;
        this.nzVisibleChange.emit(false);
        this.cdr.detectChanges();
        if (this.nzPopoverForceRestoreFocus) {
            this.restoreFocus();
        }
    }
    /**
     * @return {?}
     */
    restoreFocus() {
        try {
            this.origin.elementRef.nativeElement.focus();
        }
        catch (e) {
            console.warn("Unable to restore a focus:");
            console.warn(e);
        }
    }
    /**
     * @return {?}
     */
    updateByDirective() {
        this.setClassMap();
        this.cdr.detectChanges();
        Promise.resolve().then((/**
         * @return {?}
         */
        () => {
            this.updatePosition();
        }));
    }
    /**
     * Force the component to update its position.
     * @return {?}
     */
    updatePosition() {
        if (this.origin && this.overlay && this.overlay.overlayRef) {
            this.overlay.overlayRef.updatePosition();
        }
    }
    /**
     * @param {?} position
     * @return {?}
     */
    onPositionChange(position) {
        this._placement = (/** @type {?} */ (getPlacementName(position)));
        this.setClassMap();
        this.cdr.detectChanges();
    }
    /**
     * @return {?}
     */
    afterAppearing() {
        // may be overridden in concrete classes
    }
    /**
     * @return {?}
     */
    setClassMap() {
        this._classMap = {
            [this.nzOverlayClassName]: true,
            [`${this._prefix}-${this._placement}`]: true
        };
    }
    /**
     * @param {?} origin
     * @return {?}
     */
    setOverlayOrigin(origin) {
        this.origin = origin;
        this.cdr.markForCheck();
    }
    /**
     * @private
     * @return {?}
     */
    isTitleEmpty() {
        return this.title instanceof TemplateRef ? false : this.title === '' || !isNotNil(this.title);
    }
    /**
     * @private
     * @return {?}
     */
    isContentEmpty() {
        return this.content instanceof TemplateRef ? false : this.content === '' || !isNotNil(this.content);
    }
}
NzTooltipBaseComponent.propDecorators = {
    nzVisibleChange: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdG9vbHRpcC1iYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdG9vbHRpcC8iLCJzb3VyY2VzIjpbImJhc2UvbnotdG9vbHRpcC1iYXNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQWNBLE9BQU8sRUFBcUIsWUFBWSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckYsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixRQUFRLEVBQ1IseUJBQXlCLEVBSzFCLE1BQU0sb0JBQW9CLENBQUM7Ozs7O0FBTzVCLE1BQU0sT0FBZ0Isc0JBQXNCOzs7OztJQW9DMUMsWUFBbUIsR0FBc0IsRUFBUyxXQUFvQztRQUFuRSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQXZCdEYsK0JBQTBCLEdBQVksS0FBSyxDQUFDO1FBRXpCLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUtqRSxjQUFTLEdBQXFCLEVBQUUsQ0FBQztRQUNqQyxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixZQUFPLEdBQUcsdUJBQXVCLENBQUM7UUFDbEMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixlQUFVLEdBQTZCLENBQUMsR0FBRyx5QkFBeUIsQ0FBQyxDQUFDO1FBQ3RFLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsYUFBUSxHQUFxQixPQUFPLENBQUM7SUFVb0QsQ0FBQzs7OztJQVIxRixJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxTQUFTLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDaEYsQ0FBQzs7OztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLENBQUMsQ0FBQyxD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QyxLQUFLLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoRyxDQUFDOzs7OztJQUVPLGNBQWM7UUFDcEIsT0FBTyxJQUFJLENBQUMsT0FBTyxZQUFZLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEcsQ0FBQzs7OzhCQTFHQSxNQUFNOzs7O0lBZFAseUNBQXlCOztJQUN6QiwyQ0FBMkI7O0lBQzNCLDJDQUFtQjs7SUFDbkIsNkNBQW9COztJQUNwQixvREFBMkI7O0lBQzNCLGdEQUFpQzs7SUFDakMsbURBQTBCOztJQUMxQixtREFBMEI7O0lBQzFCLDJDQUE0Qjs7SUFDNUIsaURBQW1DOztJQUNuQyxtREFBcUM7O0lBQ3JDLDBEQUFrQzs7SUFDbEMsNERBQTRDOztJQUU1QyxpREFBaUU7O0lBRWpFLHlDQUE2Qjs7SUFDN0Isd0NBQXlCOztJQUV6QiwyQ0FBaUM7O0lBQ2pDLDhDQUFxQjs7SUFDckIseUNBQWtDOztJQUNsQywwQ0FBaUI7O0lBQ2pCLDRDQUFzRTs7SUFDdEUsNENBQW1COztJQUNuQiwwQ0FBcUM7O0lBVXpCLHFDQUE2Qjs7SUFBRSw2Q0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2RrQ29ubmVjdGVkT3ZlcmxheSxcclxuICBDZGtPdmVybGF5T3JpZ2luLFxyXG4gIENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSxcclxuICBDb25uZWN0aW9uUG9zaXRpb25QYWlyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgZ2V0UGxhY2VtZW50TmFtZSxcclxuICBpc05vdE5pbCxcclxuICBERUZBVUxUX1RPT0xUSVBfUE9TSVRJT05TLFxyXG4gIE5nQ2xhc3NJbnRlcmZhY2UsXHJcbiAgTmdTdHlsZUludGVyZmFjZSxcclxuICBOek5vQW5pbWF0aW9uRGlyZWN0aXZlLFxyXG4gIE56VFNUeXBlXHJcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56VG9vbHRpcFRyaWdnZXIgfSBmcm9tICcuLi9uei10b29sdGlwLmRlZmluaXRpb25zJztcclxuXHJcbi8qKlxyXG4gKiBUb29sdGlwIGNvbXBvbmVudC4gQWxzbyB0aGUgYmFzZSBjb21wb25lbnQgZm9yIGxlZ2FjeSBjb21wb25lbnRzLlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE56VG9vbHRpcEJhc2VDb21wb25lbnQge1xyXG4gIG56VGl0bGU6IE56VFNUeXBlIHwgbnVsbDtcclxuICBuekNvbnRlbnQ6IE56VFNUeXBlIHwgbnVsbDtcclxuICBuelZpc2libGU6IGJvb2xlYW47XHJcbiAgbnpQbGFjZW1lbnQ6IHN0cmluZztcclxuICBuek92ZXJsYXlDbGFzc05hbWU6IHN0cmluZztcclxuICBuek92ZXJsYXlTdHlsZTogTmdTdHlsZUludGVyZmFjZTtcclxuICBuek1vdXNlRW50ZXJEZWxheTogbnVtYmVyO1xyXG4gIG56TW91c2VMZWF2ZURlbGF5OiBudW1iZXI7XHJcbiAgbnpUcmlnZ2VyOiBOelRvb2x0aXBUcmlnZ2VyO1xyXG4gIG56VGl0bGVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgbnpDb250ZW50VGVtcGxhdGU6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIG56U2hvd1BvcG92ZXJDbG9zZUJ1dHRvbjogYm9vbGVhbjtcclxuICBuelBvcG92ZXJGb3JjZVJlc3RvcmVGb2N1czogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpWaXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBvdmVybGF5OiBDZGtDb25uZWN0ZWRPdmVybGF5O1xyXG4gIG9yaWdpbjogQ2RrT3ZlcmxheU9yaWdpbjtcclxuXHJcbiAgX2NsYXNzTWFwOiBOZ0NsYXNzSW50ZXJmYWNlID0ge307XHJcbiAgX2hhc0JhY2tkcm9wID0gZmFsc2U7XHJcbiAgX3ByZWZpeCA9ICdhbnQtdG9vbHRpcC1wbGFjZW1lbnQnO1xyXG4gIF92aXNpYmxlID0gZmFsc2U7XHJcbiAgX3Bvc2l0aW9uczogQ29ubmVjdGlvblBvc2l0aW9uUGFpcltdID0gWy4uLkRFRkFVTFRfVE9PTFRJUF9QT1NJVElPTlNdO1xyXG4gIF9wbGFjZW1lbnQgPSAndG9wJztcclxuICBfdHJpZ2dlcjogTnpUb29sdGlwVHJpZ2dlciA9ICdob3Zlcic7XHJcblxyXG4gIGdldCBjb250ZW50KCk6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5uekNvbnRlbnQgIT09IHVuZGVmaW5lZCA/IHRoaXMubnpDb250ZW50IDogdGhpcy5uekNvbnRlbnRUZW1wbGF0ZTtcclxuICB9XHJcblxyXG4gIGdldCB0aXRsZSgpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMubnpUaXRsZSAhPT0gdW5kZWZpbmVkID8gdGhpcy5uelRpdGxlIDogdGhpcy5uelRpdGxlVGVtcGxhdGU7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSkge31cclxuXHJcbiAgc2hvdygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56VmlzaWJsZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLmlzVGl0bGVFbXB0eSgpIHx8ICF0aGlzLmlzQ29udGVudEVtcHR5KCkpIHtcclxuICAgICAgdGhpcy5uelZpc2libGUgPSB0cnVlO1xyXG4gICAgICB0aGlzLm56VmlzaWJsZUNoYW5nZS5lbWl0KHRydWUpO1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRoaXMuYWZ0ZXJBcHBlYXJpbmcoKTtcclxuICB9XHJcblxyXG4gIGhpZGUoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMubnpWaXNpYmxlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm56VmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5uelZpc2libGVDaGFuZ2UuZW1pdChmYWxzZSk7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcblxyXG4gICAgaWYgKHRoaXMubnpQb3BvdmVyRm9yY2VSZXN0b3JlRm9jdXMpIHtcclxuICAgICAgdGhpcy5yZXN0b3JlRm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlc3RvcmVGb2N1cygpOiB2b2lkIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHRoaXMub3JpZ2luLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgfSBjYXRjaChlKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcIlVuYWJsZSB0byByZXN0b3JlIGEgZm9jdXM6XCIpO1xyXG4gICAgICBjb25zb2xlLndhcm4oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVCeURpcmVjdGl2ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuXHJcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcclxuICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGb3JjZSB0aGUgY29tcG9uZW50IHRvIHVwZGF0ZSBpdHMgcG9zaXRpb24uXHJcbiAgICovXHJcbiAgdXBkYXRlUG9zaXRpb24oKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5vcmlnaW4gJiYgdGhpcy5vdmVybGF5ICYmIHRoaXMub3ZlcmxheS5vdmVybGF5UmVmKSB7XHJcbiAgICAgIHRoaXMub3ZlcmxheS5vdmVybGF5UmVmLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblBvc2l0aW9uQ2hhbmdlKHBvc2l0aW9uOiBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UpOiB2b2lkIHtcclxuICAgIHRoaXMuX3BsYWNlbWVudCA9IGdldFBsYWNlbWVudE5hbWUocG9zaXRpb24pITtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIGFmdGVyQXBwZWFyaW5nKCk6IHZvaWQge1xyXG4gICAgLy8gbWF5IGJlIG92ZXJyaWRkZW4gaW4gY29uY3JldGUgY2xhc3Nlc1xyXG4gIH1cclxuXHJcbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9jbGFzc01hcCA9IHtcclxuICAgICAgW3RoaXMubnpPdmVybGF5Q2xhc3NOYW1lXTogdHJ1ZSxcclxuICAgICAgW2Ake3RoaXMuX3ByZWZpeH0tJHt0aGlzLl9wbGFjZW1lbnR9YF06IHRydWVcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzZXRPdmVybGF5T3JpZ2luKG9yaWdpbjogQ2RrT3ZlcmxheU9yaWdpbik6IHZvaWQge1xyXG4gICAgdGhpcy5vcmlnaW4gPSBvcmlnaW47XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNUaXRsZUVtcHR5KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMudGl0bGUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZiA/IGZhbHNlIDogdGhpcy50aXRsZSA9PT0gJycgfHwgIWlzTm90TmlsKHRoaXMudGl0bGUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc0NvbnRlbnRFbXB0eSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRlbnQgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZiA/IGZhbHNlIDogdGhpcy5jb250ZW50ID09PSAnJyB8fCAhaXNOb3ROaWwodGhpcy5jb250ZW50KTtcclxuICB9XHJcbn1cclxuIl19