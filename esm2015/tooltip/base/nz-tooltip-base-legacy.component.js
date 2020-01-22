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
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { ChangeDetectorRef, EventEmitter, Host, Input, Optional, Output, ViewChild } from '@angular/core';
import { toBoolean, NzNoAnimationDirective, POSITION_MAP } from 'ng-zorro-antd/core';
import { NzTooltipBaseComponent } from './nz-tooltip-base.component';
/**
 * This component overrides some properties of `NzTooltipBaseComponent` and make them
 * input properties.
 *
 * @deprecated 9.0.0 tooltip and other components deprecate the old API. This
 * would be removed in 9.0.0.
 *
 * \@example This example is what going to be removed
 *
 * ```html
 * <nz-tooltip>
 *   <a nz-tooltip></a>
 * </nz-tooltip>
 * ```
 */
export class NzTooltipBaseComponentLegacy extends NzTooltipBaseComponent {
    /**
     * @param {?} cdr
     * @param {?=} noAnimation
     */
    constructor(cdr, noAnimation) {
        super(cdr, noAnimation);
        this.noAnimation = noAnimation;
        this.nzOverlayClassName = '';
        this.nzOverlayStyle = {};
        this.nzMouseEnterDelay = 0.15; // second
        // second
        this.nzMouseLeaveDelay = 0.1; // second
        this.nzVisibleChange = new EventEmitter();
    }
    // second
    // TODO: placement logic should be removed into `NzTooltipBaseDirective` once this component is removed.
    /**
     * @param {?} value
     * @return {?}
     */
    set nzPlacement(value) {
        if (value !== this._placement) {
            this._placement = value;
            this._positions = [POSITION_MAP[this.nzPlacement], ...this._positions];
        }
    }
    /**
     * @return {?}
     */
    get nzPlacement() {
        return this._placement;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzVisible(value) {
        /** @type {?} */
        const visible = toBoolean(value);
        if (this._visible !== visible) {
            this._visible = visible;
            this.nzVisibleChange.emit(visible);
        }
    }
    /**
     * @return {?}
     */
    get nzVisible() {
        return this._visible;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzTrigger(value) {
        this._trigger = value;
        this._hasBackdrop = this._trigger === 'click';
    }
    /**
     * @return {?}
     */
    get nzTrigger() {
        return this._trigger;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        Promise.resolve().then((/**
         * @return {?}
         */
        () => {
            this.updatePosition();
        }));
    }
}
/** @nocollapse */
NzTooltipBaseComponentLegacy.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
NzTooltipBaseComponentLegacy.propDecorators = {
    overlay: [{ type: ViewChild, args: ['overlay', { static: false },] }],
    nzOverlayClassName: [{ type: Input }],
    nzOverlayStyle: [{ type: Input }],
    nzMouseEnterDelay: [{ type: Input }],
    nzMouseLeaveDelay: [{ type: Input }],
    nzPlacement: [{ type: Input }],
    nzVisible: [{ type: Input }],
    nzTrigger: [{ type: Input }],
    nzVisibleChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NzTooltipBaseComponentLegacy.prototype.overlay;
    /** @type {?} */
    NzTooltipBaseComponentLegacy.prototype.nzOverlayClassName;
    /** @type {?} */
    NzTooltipBaseComponentLegacy.prototype.nzOverlayStyle;
    /** @type {?} */
    NzTooltipBaseComponentLegacy.prototype.nzMouseEnterDelay;
    /** @type {?} */
    NzTooltipBaseComponentLegacy.prototype.nzMouseLeaveDelay;
    /** @type {?} */
    NzTooltipBaseComponentLegacy.prototype.nzVisibleChange;
    /** @type {?} */
    NzTooltipBaseComponentLegacy.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdG9vbHRpcC1iYXNlLWxlZ2FjeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3Rvb2x0aXAvIiwic291cmNlcyI6WyJiYXNlL256LXRvb2x0aXAtYmFzZS1sZWdhY3kuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFhLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JILE9BQU8sRUFBRSxTQUFTLEVBQW9CLHNCQUFzQixFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3ZHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FBaUJyRSxNQUFNLE9BQU8sNEJBQTZCLFNBQVEsc0JBQXNCOzs7OztJQThDdEUsWUFBWSxHQUFzQixFQUE2QixXQUFvQztRQUNqRyxLQUFLLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBRHFDLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQTNDMUYsdUJBQWtCLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLG1CQUFjLEdBQXFCLEVBQUUsQ0FBQztRQUN0QyxzQkFBaUIsR0FBRyxJQUFJLENBQUMsQ0FBQyxTQUFTOztRQUNuQyxzQkFBaUIsR0FBRyxHQUFHLENBQUMsQ0FBQyxTQUFTO1FBc0N4QixvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7SUFJakUsQ0FBQzs7Ozs7OztJQXZDRCxJQUNJLFdBQVcsQ0FBQyxLQUFhO1FBQzNCLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDeEU7SUFDSCxDQUFDOzs7O0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsSUFDSSxTQUFTLENBQUMsS0FBYzs7Y0FDcEIsT0FBTyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7UUFDaEMsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLE9BQU8sRUFBRTtZQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztZQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7Ozs7SUFFRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxJQUNJLFNBQVMsQ0FBQyxLQUF1QjtRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLEtBQUssT0FBTyxDQUFDO0lBQ2hELENBQUM7Ozs7SUFFRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQzs7OztJQVFELFdBQVc7UUFDVCxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSTs7O1FBQUMsR0FBRyxFQUFFO1lBQzFCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7WUEzRU0saUJBQWlCO1lBQ1ksc0JBQXNCLHVCQWtFckIsSUFBSSxZQUFJLFFBQVE7OztzQkE3Q3BELFNBQVMsU0FBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO2lDQUV0QyxLQUFLOzZCQUNMLEtBQUs7Z0NBQ0wsS0FBSztnQ0FDTCxLQUFLOzBCQUdMLEtBQUs7d0JBWUwsS0FBSzt3QkFhTCxLQUFLOzhCQVVMLE1BQU07Ozs7SUEzQ1AsK0NBQXNFOztJQUV0RSwwREFBaUM7O0lBQ2pDLHNEQUErQzs7SUFDL0MseURBQWtDOztJQUNsQyx5REFBaUM7O0lBc0NqQyx1REFBaUU7O0lBRTdCLG1EQUErRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ2RrQ29ubmVjdGVkT3ZlcmxheSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIEV2ZW50RW1pdHRlciwgSG9zdCwgSW5wdXQsIE9uQ2hhbmdlcywgT3B0aW9uYWwsIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHRvQm9vbGVhbiwgTmdTdHlsZUludGVyZmFjZSwgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSwgUE9TSVRJT05fTUFQIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56VG9vbHRpcFRyaWdnZXIgfSBmcm9tICcuLi9uei10b29sdGlwLmRlZmluaXRpb25zJztcclxuaW1wb3J0IHsgTnpUb29sdGlwQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vbnotdG9vbHRpcC1iYXNlLmNvbXBvbmVudCc7XHJcblxyXG4vKipcclxuICogVGhpcyBjb21wb25lbnQgb3ZlcnJpZGVzIHNvbWUgcHJvcGVydGllcyBvZiBgTnpUb29sdGlwQmFzZUNvbXBvbmVudGAgYW5kIG1ha2UgdGhlbVxyXG4gKiBpbnB1dCBwcm9wZXJ0aWVzLlxyXG4gKlxyXG4gKiBAZGVwcmVjYXRlZCA5LjAuMCB0b29sdGlwIGFuZCBvdGhlciBjb21wb25lbnRzIGRlcHJlY2F0ZSB0aGUgb2xkIEFQSS4gVGhpc1xyXG4gKiB3b3VsZCBiZSByZW1vdmVkIGluIDkuMC4wLlxyXG4gKlxyXG4gKiBAZXhhbXBsZSBUaGlzIGV4YW1wbGUgaXMgd2hhdCBnb2luZyB0byBiZSByZW1vdmVkXHJcbiAqXHJcbiAqIGBgYGh0bWxcclxuICogPG56LXRvb2x0aXA+XHJcbiAqICAgPGEgbnotdG9vbHRpcD48L2E+XHJcbiAqIDwvbnotdG9vbHRpcD5cclxuICogYGBgXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTnpUb29sdGlwQmFzZUNvbXBvbmVudExlZ2FjeSBleHRlbmRzIE56VG9vbHRpcEJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIEBWaWV3Q2hpbGQoJ292ZXJsYXknLCB7IHN0YXRpYzogZmFsc2UgfSkgb3ZlcmxheTogQ2RrQ29ubmVjdGVkT3ZlcmxheTtcclxuXHJcbiAgQElucHV0KCkgbnpPdmVybGF5Q2xhc3NOYW1lID0gJyc7XHJcbiAgQElucHV0KCkgbnpPdmVybGF5U3R5bGU6IE5nU3R5bGVJbnRlcmZhY2UgPSB7fTtcclxuICBASW5wdXQoKSBuek1vdXNlRW50ZXJEZWxheSA9IDAuMTU7IC8vIHNlY29uZFxyXG4gIEBJbnB1dCgpIG56TW91c2VMZWF2ZURlbGF5ID0gMC4xOyAvLyBzZWNvbmRcclxuXHJcbiAgLy8gVE9ETzogcGxhY2VtZW50IGxvZ2ljIHNob3VsZCBiZSByZW1vdmVkIGludG8gYE56VG9vbHRpcEJhc2VEaXJlY3RpdmVgIG9uY2UgdGhpcyBjb21wb25lbnQgaXMgcmVtb3ZlZC5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelBsYWNlbWVudCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuX3BsYWNlbWVudCkge1xyXG4gICAgICB0aGlzLl9wbGFjZW1lbnQgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5fcG9zaXRpb25zID0gW1BPU0lUSU9OX01BUFt0aGlzLm56UGxhY2VtZW50XSwgLi4udGhpcy5fcG9zaXRpb25zXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBuelBsYWNlbWVudCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3BsYWNlbWVudDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56VmlzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgY29uc3QgdmlzaWJsZSA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgICBpZiAodGhpcy5fdmlzaWJsZSAhPT0gdmlzaWJsZSkge1xyXG4gICAgICB0aGlzLl92aXNpYmxlID0gdmlzaWJsZTtcclxuICAgICAgdGhpcy5uelZpc2libGVDaGFuZ2UuZW1pdCh2aXNpYmxlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBuelZpc2libGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmlzaWJsZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56VHJpZ2dlcih2YWx1ZTogTnpUb29sdGlwVHJpZ2dlcikge1xyXG4gICAgdGhpcy5fdHJpZ2dlciA9IHZhbHVlO1xyXG4gICAgdGhpcy5faGFzQmFja2Ryb3AgPSB0aGlzLl90cmlnZ2VyID09PSAnY2xpY2snO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56VHJpZ2dlcigpOiBOelRvb2x0aXBUcmlnZ2VyIHtcclxuICAgIHJldHVybiB0aGlzLl90cmlnZ2VyO1xyXG4gIH1cclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56VmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlKSB7XHJcbiAgICBzdXBlcihjZHIsIG5vQW5pbWF0aW9uKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=