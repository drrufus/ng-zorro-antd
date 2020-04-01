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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdG9vbHRpcC1iYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdG9vbHRpcC8iLCJzb3VyY2VzIjpbImJhc2UvbnotdG9vbHRpcC1iYXNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFjQSxPQUFPLEVBQXFCLFlBQVksRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JGLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsUUFBUSxFQUNSLHlCQUF5QixFQUsxQixNQUFNLG9CQUFvQixDQUFDOzs7OztBQU81QjtJQW9DRSxnQ0FBbUIsR0FBc0IsRUFBUyxXQUFvQztRQUFuRSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQXZCdEYsK0JBQTBCLEdBQVksS0FBSyxDQUFDO1FBRXpCLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUtqRSxjQUFTLEdBQXFCLEVBQUUsQ0FBQztRQUNqQyxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixZQUFPLEdBQUcsdUJBQXVCLENBQUM7UUFDbEMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixlQUFVLG9CQUFpQyx5QkFBeUIsRUFBRTtRQUN0RSxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGFBQVEsR0FBcUIsT0FBTyxDQUFDO0lBVW9ELENBQUM7SUFSMUYsc0JBQUksMkNBQU87Ozs7UUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUNoRixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHlDQUFLOzs7O1FBQVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMs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QUFJLENBQUMsS0FBSyxZQUFZLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEcsQ0FBQzs7Ozs7SUFFTywrQ0FBYzs7OztJQUF0QjtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sWUFBWSxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RHLENBQUM7O2tDQTFHQSxNQUFNOztJQTJHVCw2QkFBQztDQUFBLEFBMUhELElBMEhDO1NBMUhxQixzQkFBc0I7OztJQUMxQyx5Q0FBeUI7O0lBQ3pCLDJDQUEyQjs7SUFDM0IsMkNBQW1COztJQUNuQiw2Q0FBb0I7O0lBQ3BCLG9EQUEyQjs7SUFDM0IsZ0RBQWlDOztJQUNqQyxtREFBMEI7O0lBQzFCLG1EQUEwQjs7SUFDMUIsMkNBQTRCOztJQUM1QixpREFBbUM7O0lBQ25DLG1EQUFxQzs7SUFDckMsMERBQWtDOztJQUNsQyw0REFBNEM7O0lBRTVDLGlEQUFpRTs7SUFFakUseUNBQTZCOztJQUM3Qix3Q0FBeUI7O0lBRXpCLDJDQUFpQzs7SUFDakMsOENBQXFCOztJQUNyQix5Q0FBa0M7O0lBQ2xDLDBDQUFpQjs7SUFDakIsNENBQXNFOztJQUN0RSw0Q0FBbUI7O0lBQ25CLDBDQUFxQzs7SUFVekIscUNBQTZCOztJQUFFLDZDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDZGtDb25uZWN0ZWRPdmVybGF5LFxyXG4gIENka092ZXJsYXlPcmlnaW4sXHJcbiAgQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlLFxyXG4gIENvbm5lY3Rpb25Qb3NpdGlvblBhaXJcclxufSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBnZXRQbGFjZW1lbnROYW1lLFxyXG4gIGlzTm90TmlsLFxyXG4gIERFRkFVTFRfVE9PTFRJUF9QT1NJVElPTlMsXHJcbiAgTmdDbGFzc0ludGVyZmFjZSxcclxuICBOZ1N0eWxlSW50ZXJmYWNlLFxyXG4gIE56Tm9BbmltYXRpb25EaXJlY3RpdmUsXHJcbiAgTnpUU1R5cGVcclxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpUb29sdGlwVHJpZ2dlciB9IGZyb20gJy4uL256LXRvb2x0aXAuZGVmaW5pdGlvbnMnO1xyXG5cclxuLyoqXHJcbiAqIFRvb2x0aXAgY29tcG9uZW50LiBBbHNvIHRoZSBiYXNlIGNvbXBvbmVudCBmb3IgbGVnYWN5IGNvbXBvbmVudHMuXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTnpUb29sdGlwQmFzZUNvbXBvbmVudCB7XHJcbiAgbnpUaXRsZTogTnpUU1R5cGUgfCBudWxsO1xyXG4gIG56Q29udGVudDogTnpUU1R5cGUgfCBudWxsO1xyXG4gIG56VmlzaWJsZTogYm9vbGVhbjtcclxuICBuelBsYWNlbWVudDogc3RyaW5nO1xyXG4gIG56T3ZlcmxheUNsYXNzTmFtZTogc3RyaW5nO1xyXG4gIG56T3ZlcmxheVN0eWxlOiBOZ1N0eWxlSW50ZXJmYWNlO1xyXG4gIG56TW91c2VFbnRlckRlbGF5OiBudW1iZXI7XHJcbiAgbnpNb3VzZUxlYXZlRGVsYXk6IG51bWJlcjtcclxuICBuelRyaWdnZXI6IE56VG9vbHRpcFRyaWdnZXI7XHJcbiAgbnpUaXRsZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBuekNvbnRlbnRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgbnpTaG93UG9wb3ZlckNsb3NlQnV0dG9uOiBib29sZWFuO1xyXG4gIG56UG9wb3ZlckZvcmNlUmVzdG9yZUZvY3VzOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIG92ZXJsYXk6IENka0Nvbm5lY3RlZE92ZXJsYXk7XHJcbiAgb3JpZ2luOiBDZGtPdmVybGF5T3JpZ2luO1xyXG5cclxuICBfY2xhc3NNYXA6IE5nQ2xhc3NJbnRlcmZhY2UgPSB7fTtcclxuICBfaGFzQmFja2Ryb3AgPSBmYWxzZTtcclxuICBfcHJlZml4ID0gJ2FudC10b29sdGlwLXBsYWNlbWVudCc7XHJcbiAgX3Zpc2libGUgPSBmYWxzZTtcclxuICBfcG9zaXRpb25zOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyW10gPSBbLi4uREVGQVVMVF9UT09MVElQX1BPU0lUSU9OU107XHJcbiAgX3BsYWNlbWVudCA9ICd0b3AnO1xyXG4gIF90cmlnZ2VyOiBOelRvb2x0aXBUcmlnZ2VyID0gJ2hvdmVyJztcclxuXHJcbiAgZ2V0IGNvbnRlbnQoKTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLm56Q29udGVudCAhPT0gdW5kZWZpbmVkID8gdGhpcy5uekNvbnRlbnQgOiB0aGlzLm56Q29udGVudFRlbXBsYXRlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRpdGxlKCk6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5uelRpdGxlICE9PSB1bmRlZmluZWQgPyB0aGlzLm56VGl0bGUgOiB0aGlzLm56VGl0bGVUZW1wbGF0ZTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlKSB7fVxyXG5cclxuICBzaG93KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpWaXNpYmxlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuaXNUaXRsZUVtcHR5KCkgfHwgIXRoaXMuaXNDb250ZW50RW1wdHkoKSkge1xyXG4gICAgICB0aGlzLm56VmlzaWJsZSA9IHRydWU7XHJcbiAgICAgIHRoaXMubnpWaXNpYmxlQ2hhbmdlLmVtaXQodHJ1ZSk7XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGhpcy5hZnRlckFwcGVhcmluZygpO1xyXG4gIH1cclxuXHJcbiAgaGlkZSgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5uelZpc2libGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubnpWaXNpYmxlID0gZmFsc2U7XHJcbiAgICB0aGlzLm56VmlzaWJsZUNoYW5nZS5lbWl0KGZhbHNlKTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuXHJcbiAgICBpZiAodGhpcy5uelBvcG92ZXJGb3JjZVJlc3RvcmVGb2N1cykge1xyXG4gICAgICB0aGlzLnJlc3RvcmVGb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVzdG9yZUZvY3VzKCk6IHZvaWQge1xyXG4gICAgdHJ5IHtcclxuICAgICAgdGhpcy5vcmlnaW4uZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgY29uc29sZS53YXJuKFwiVW5hYmxlIHRvIHJlc3RvcmUgYSBmb2N1czpcIik7XHJcbiAgICAgIGNvbnNvbGUud2FybihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZUJ5RGlyZWN0aXZlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG5cclxuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZvcmNlIHRoZSBjb21wb25lbnQgdG8gdXBkYXRlIGl0cyBwb3NpdGlvbi5cclxuICAgKi9cclxuICB1cGRhdGVQb3NpdGlvbigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm9yaWdpbiAmJiB0aGlzLm92ZXJsYXkgJiYgdGhpcy5vdmVybGF5Lm92ZXJsYXlSZWYpIHtcclxuICAgICAgdGhpcy5vdmVybGF5Lm92ZXJsYXlSZWYudXBkYXRlUG9zaXRpb24oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uUG9zaXRpb25DaGFuZ2UocG9zaXRpb246IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSk6IHZvaWQge1xyXG4gICAgdGhpcy5fcGxhY2VtZW50ID0gZ2V0UGxhY2VtZW50TmFtZShwb3NpdGlvbikhO1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgYWZ0ZXJBcHBlYXJpbmcoKTogdm9pZCB7XHJcbiAgICAvLyBtYXkgYmUgb3ZlcnJpZGRlbiBpbiBjb25jcmV0ZSBjbGFzc2VzXHJcbiAgfVxyXG5cclxuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2NsYXNzTWFwID0ge1xyXG4gICAgICBbdGhpcy5uek92ZXJsYXlDbGFzc05hbWVdOiB0cnVlLFxyXG4gICAgICBbYCR7dGhpcy5fcHJlZml4fS0ke3RoaXMuX3BsYWNlbWVudH1gXTogdHJ1ZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHNldE92ZXJsYXlPcmlnaW4ob3JpZ2luOiBDZGtPdmVybGF5T3JpZ2luKTogdm9pZCB7XHJcbiAgICB0aGlzLm9yaWdpbiA9IG9yaWdpbjtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1RpdGxlRW1wdHkoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy50aXRsZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmID8gZmFsc2UgOiB0aGlzLnRpdGxlID09PSAnJyB8fCAhaXNOb3ROaWwodGhpcy50aXRsZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzQ29udGVudEVtcHR5KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGVudCBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmID8gZmFsc2UgOiB0aGlzLmNvbnRlbnQgPT09ICcnIHx8ICFpc05vdE5pbCh0aGlzLmNvbnRlbnQpO1xyXG4gIH1cclxufVxyXG4iXX0=