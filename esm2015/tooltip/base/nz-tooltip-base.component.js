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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdG9vbHRpcC1iYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdG9vbHRpcC8iLCJzb3VyY2VzIjpbImJhc2UvbnotdG9vbHRpcC1iYXNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQWNBLE9BQU8sRUFBcUIsWUFBWSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckYsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixRQUFRLEVBQ1IseUJBQXlCLEVBSzFCLE1BQU0sb0JBQW9CLENBQUM7Ozs7O0FBTzVCLE1BQU0sT0FBZ0Isc0JBQXNCOzs7OztJQW1DMUMsWUFBbUIsR0FBc0IsRUFBUyxXQUFvQztRQUFuRSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQXJCbkUsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBS2pFLGNBQVMsR0FBcUIsRUFBRSxDQUFDO1FBQ2pDLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLFlBQU8sR0FBRyx1QkFBdUIsQ0FBQztRQUNsQyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGVBQVUsR0FBNkIsQ0FBQyxHQUFHLHlCQUF5QixDQUFDLENBQUM7UUFDdEUsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixhQUFRLEdBQXFCLE9BQU8sQ0FBQztJQVVvRCxDQUFDOzs7O0lBUjFGLElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNoRixDQUFDOzs7O0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsT0FBTyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFD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QUFvQjs7SUFDcEIsb0RBQTJCOztJQUMzQixnREFBaUM7O0lBQ2pDLG1EQUEwQjs7SUFDMUIsbURBQTBCOztJQUMxQiwyQ0FBNEI7O0lBQzVCLGlEQUFtQzs7SUFDbkMsbURBQXFDOztJQUNyQywwREFBa0M7O0lBRWxDLGlEQUFpRTs7SUFFakUseUNBQTZCOztJQUM3Qix3Q0FBeUI7O0lBRXpCLDJDQUFpQzs7SUFDakMsOENBQXFCOztJQUNyQix5Q0FBa0M7O0lBQ2xDLDBDQUFpQjs7SUFDakIsNENBQXNFOztJQUN0RSw0Q0FBbUI7O0lBQ25CLDBDQUFxQzs7SUFVekIscUNBQTZCOztJQUFFLDZDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDZGtDb25uZWN0ZWRPdmVybGF5LFxyXG4gIENka092ZXJsYXlPcmlnaW4sXHJcbiAgQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlLFxyXG4gIENvbm5lY3Rpb25Qb3NpdGlvblBhaXJcclxufSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBnZXRQbGFjZW1lbnROYW1lLFxyXG4gIGlzTm90TmlsLFxyXG4gIERFRkFVTFRfVE9PTFRJUF9QT1NJVElPTlMsXHJcbiAgTmdDbGFzc0ludGVyZmFjZSxcclxuICBOZ1N0eWxlSW50ZXJmYWNlLFxyXG4gIE56Tm9BbmltYXRpb25EaXJlY3RpdmUsXHJcbiAgTnpUU1R5cGVcclxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpUb29sdGlwVHJpZ2dlciB9IGZyb20gJy4uL256LXRvb2x0aXAuZGVmaW5pdGlvbnMnO1xyXG5cclxuLyoqXHJcbiAqIFRvb2x0aXAgY29tcG9uZW50LiBBbHNvIHRoZSBiYXNlIGNvbXBvbmVudCBmb3IgbGVnYWN5IGNvbXBvbmVudHMuXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTnpUb29sdGlwQmFzZUNvbXBvbmVudCB7XHJcbiAgbnpUaXRsZTogTnpUU1R5cGUgfCBudWxsO1xyXG4gIG56Q29udGVudDogTnpUU1R5cGUgfCBudWxsO1xyXG4gIG56VmlzaWJsZTogYm9vbGVhbjtcclxuICBuelBsYWNlbWVudDogc3RyaW5nO1xyXG4gIG56T3ZlcmxheUNsYXNzTmFtZTogc3RyaW5nO1xyXG4gIG56T3ZlcmxheVN0eWxlOiBOZ1N0eWxlSW50ZXJmYWNlO1xyXG4gIG56TW91c2VFbnRlckRlbGF5OiBudW1iZXI7XHJcbiAgbnpNb3VzZUxlYXZlRGVsYXk6IG51bWJlcjtcclxuICBuelRyaWdnZXI6IE56VG9vbHRpcFRyaWdnZXI7XHJcbiAgbnpUaXRsZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBuekNvbnRlbnRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgbnpTaG93UG9wb3ZlckNsb3NlQnV0dG9uOiBib29sZWFuO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpWaXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBvdmVybGF5OiBDZGtDb25uZWN0ZWRPdmVybGF5O1xyXG4gIG9yaWdpbjogQ2RrT3ZlcmxheU9yaWdpbjtcclxuXHJcbiAgX2NsYXNzTWFwOiBOZ0NsYXNzSW50ZXJmYWNlID0ge307XHJcbiAgX2hhc0JhY2tkcm9wID0gZmFsc2U7XHJcbiAgX3ByZWZpeCA9ICdhbnQtdG9vbHRpcC1wbGFjZW1lbnQnO1xyXG4gIF92aXNpYmxlID0gZmFsc2U7XHJcbiAgX3Bvc2l0aW9uczogQ29ubmVjdGlvblBvc2l0aW9uUGFpcltdID0gWy4uLkRFRkFVTFRfVE9PTFRJUF9QT1NJVElPTlNdO1xyXG4gIF9wbGFjZW1lbnQgPSAndG9wJztcclxuICBfdHJpZ2dlcjogTnpUb29sdGlwVHJpZ2dlciA9ICdob3Zlcic7XHJcblxyXG4gIGdldCBjb250ZW50KCk6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5uekNvbnRlbnQgIT09IHVuZGVmaW5lZCA/IHRoaXMubnpDb250ZW50IDogdGhpcy5uekNvbnRlbnRUZW1wbGF0ZTtcclxuICB9XHJcblxyXG4gIGdldCB0aXRsZSgpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMubnpUaXRsZSAhPT0gdW5kZWZpbmVkID8gdGhpcy5uelRpdGxlIDogdGhpcy5uelRpdGxlVGVtcGxhdGU7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSkge31cclxuXHJcbiAgc2hvdygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56VmlzaWJsZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLmlzVGl0bGVFbXB0eSgpIHx8ICF0aGlzLmlzQ29udGVudEVtcHR5KCkpIHtcclxuICAgICAgdGhpcy5uelZpc2libGUgPSB0cnVlO1xyXG4gICAgICB0aGlzLm56VmlzaWJsZUNoYW5nZS5lbWl0KHRydWUpO1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hZnRlckFwcGVhcmluZygpO1xyXG4gIH1cclxuXHJcbiAgaGlkZSgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5uelZpc2libGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubnpWaXNpYmxlID0gZmFsc2U7XHJcbiAgICB0aGlzLm56VmlzaWJsZUNoYW5nZS5lbWl0KGZhbHNlKTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUJ5RGlyZWN0aXZlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG5cclxuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZvcmNlIHRoZSBjb21wb25lbnQgdG8gdXBkYXRlIGl0cyBwb3NpdGlvbi5cclxuICAgKi9cclxuICB1cGRhdGVQb3NpdGlvbigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm9yaWdpbiAmJiB0aGlzLm92ZXJsYXkgJiYgdGhpcy5vdmVybGF5Lm92ZXJsYXlSZWYpIHtcclxuICAgICAgdGhpcy5vdmVybGF5Lm92ZXJsYXlSZWYudXBkYXRlUG9zaXRpb24oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uUG9zaXRpb25DaGFuZ2UocG9zaXRpb246IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSk6IHZvaWQge1xyXG4gICAgdGhpcy5fcGxhY2VtZW50ID0gZ2V0UGxhY2VtZW50TmFtZShwb3NpdGlvbikhO1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgYWZ0ZXJBcHBlYXJpbmcoKTogdm9pZCB7XHJcbiAgICAvLyBtYXkgYmUgb3ZlcnJpZGRlbiBpbiBjb25jcmV0ZSBjbGFzc2VzXHJcbiAgfVxyXG5cclxuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2NsYXNzTWFwID0ge1xyXG4gICAgICBbdGhpcy5uek92ZXJsYXlDbGFzc05hbWVdOiB0cnVlLFxyXG4gICAgICBbYCR7dGhpcy5fcHJlZml4fS0ke3RoaXMuX3BsYWNlbWVudH1gXTogdHJ1ZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHNldE92ZXJsYXlPcmlnaW4ob3JpZ2luOiBDZGtPdmVybGF5T3JpZ2luKTogdm9pZCB7XHJcbiAgICB0aGlzLm9yaWdpbiA9IG9yaWdpbjtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1RpdGxlRW1wdHkoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy50aXRsZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmID8gZmFsc2UgOiB0aGlzLnRpdGxlID09PSAnJyB8fCAhaXNOb3ROaWwodGhpcy50aXRsZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzQ29udGVudEVtcHR5KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGVudCBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmID8gZmFsc2UgOiB0aGlzLmNvbnRlbnQgPT09ICcnIHx8ICFpc05vdE5pbCh0aGlzLmNvbnRlbnQpO1xyXG4gIH1cclxufVxyXG4iXX0=