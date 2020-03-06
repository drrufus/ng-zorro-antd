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
var NzTooltipBaseComponentLegacy = /** @class */ (function (_super) {
    tslib_1.__extends(NzTooltipBaseComponentLegacy, _super);
    function NzTooltipBaseComponentLegacy(cdr, noAnimation) {
        var _this = _super.call(this, cdr, noAnimation) || this;
        _this.noAnimation = noAnimation;
        _this.nzOverlayClassName = '';
        _this.nzOverlayStyle = {};
        _this.nzMouseEnterDelay = 0.15; // second
        // second
        _this.nzMouseLeaveDelay = 0.1; // second
        _this.nzVisibleChange = new EventEmitter();
        _this.nzShowPopoverCloseButton = false;
        _this.nzPopoverCloseButtonLabel = 'close';
        return _this;
    }
    Object.defineProperty(NzTooltipBaseComponentLegacy.prototype, "nzPlacement", {
        get: /**
         * @return {?}
         */
        function () {
            return this._placement;
        },
        // TODO: placement logic should be removed into `NzTooltipBaseDirective` once this component is removed.
        set: 
        // second
        // TODO: placement logic should be removed into `NzTooltipBaseDirective` once this component is removed.
        /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value !== this._placement) {
                this._placement = value;
                this._positions = tslib_1.__spread([POSITION_MAP[this.nzPlacement]], this._positions);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTooltipBaseComponentLegacy.prototype, "nzVisible", {
        get: /**
         * @return {?}
         */
        function () {
            return this._visible;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var visible = toBoolean(value);
            if (this._visible !== visible) {
                this._visible = visible;
                this.nzVisibleChange.emit(visible);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTooltipBaseComponentLegacy.prototype, "nzTrigger", {
        get: /**
         * @return {?}
         */
        function () {
            return this._trigger;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._trigger = value;
            this._hasBackdrop = this._trigger === 'click';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzTooltipBaseComponentLegacy.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        var _this = this;
        Promise.resolve().then((/**
         * @return {?}
         */
        function () {
            _this.updatePosition();
        }));
    };
    /** @nocollapse */
    NzTooltipBaseComponentLegacy.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    NzTooltipBaseComponentLegacy.propDecorators = {
        overlay: [{ type: ViewChild, args: ['overlay', { static: false },] }],
        nzOverlayClassName: [{ type: Input }],
        nzOverlayStyle: [{ type: Input }],
        nzMouseEnterDelay: [{ type: Input }],
        nzMouseLeaveDelay: [{ type: Input }],
        nzPlacement: [{ type: Input }],
        nzVisible: [{ type: Input }],
        nzTrigger: [{ type: Input }],
        nzVisibleChange: [{ type: Output }],
        nzShowPopoverCloseButton: [{ type: Input }],
        nzPopoverCloseButtonLabel: [{ type: Input }]
    };
    return NzTooltipBaseComponentLegacy;
}(NzTooltipBaseComponent));
export { NzTooltipBaseComponentLegacy };
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
    NzTooltipBaseComponentLegacy.prototype.nzShowPopoverCloseButton;
    /** @type {?} */
    NzTooltipBaseComponentLegacy.prototype.nzPopoverCloseButtonLabel;
    /** @type {?} */
    NzTooltipBaseComponentLegacy.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdG9vbHRpcC1iYXNlLWxlZ2FjeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3Rvb2x0aXAvIiwic291cmNlcyI6WyJiYXNlL256LXRvb2x0aXAtYmFzZS1sZWdhY3kuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBYSxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNySCxPQUFPLEVBQUUsU0FBUyxFQUFvQixzQkFBc0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUd2RyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCckU7SUFBa0Qsd0RBQXNCO0lBaUR0RSxzQ0FBWSxHQUFzQixFQUE2QixXQUFvQztRQUFuRyxZQUNFLGtCQUFNLEdBQUcsRUFBRSxXQUFXLENBQUMsU0FDeEI7UUFGOEQsaUJBQVcsR0FBWCxXQUFXLENBQXlCO1FBOUMxRix3QkFBa0IsR0FBRyxFQUFFLENBQUM7UUFDeEIsb0JBQWMsR0FBcUIsRUFBRSxDQUFDO1FBQ3RDLHVCQUFpQixHQUFHLElBQUksQ0FBQyxDQUFDLFNBQVM7O1FBQ25DLHVCQUFpQixHQUFHLEdBQUcsQ0FBQyxDQUFDLFNBQVM7UUFzQ3hCLHFCQUFlLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUV4RCw4QkFBd0IsR0FBWSxLQUFLLENBQUM7UUFDMUMsK0JBQXlCLEdBQVcsT0FBTyxDQUFDOztJQUlyRCxDQUFDO0lBMUNELHNCQUNJLHFEQUFXOzs7O1FBT2Y7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDekIsQ0FBQztRQVhELHdHQUF3Rzs7Ozs7Ozs7UUFDeEcsVUFDZ0IsS0FBYTtZQUMzQixJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztnQkFDeEIsSUFBSSxDQUFDLFVBQVUscUJBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDeEU7UUFDSCxDQUFDOzs7T0FBQTtJQU1ELHNCQUNJLG1EQUFTOzs7O1FBUWI7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQzs7Ozs7UUFYRCxVQUNjLEtBQWM7O2dCQUNwQixPQUFPLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQztZQUNoQyxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssT0FBTyxFQUFFO2dCQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztnQkFDeEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDcEM7UUFDSCxDQUFDOzs7T0FBQTtJQU1ELHNCQUNJLG1EQUFTOzs7O1FBS2I7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQzs7Ozs7UUFSRCxVQUNjLEtBQXVCO1lBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsS0FBSyxPQUFPLENBQUM7UUFDaEQsQ0FBQzs7O09BQUE7Ozs7SUFlRCxrREFBVzs7O0lBQVg7UUFBQSxpQkFJQztRQUhDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJOzs7UUFBQztZQUNyQixLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Z0JBOUVNLGlCQUFpQjtnQkFDWSxzQkFBc0IsdUJBcUVyQixJQUFJLFlBQUksUUFBUTs7OzBCQWhEcEQsU0FBUyxTQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7cUNBRXRDLEtBQUs7aUNBQ0wsS0FBSztvQ0FDTCxLQUFLO29DQUNMLEtBQUs7OEJBR0wsS0FBSzs0QkFZTCxLQUFLOzRCQWFMLEtBQUs7a0NBVUwsTUFBTTsyQ0FFTixLQUFLOzRDQUNMLEtBQUs7O0lBV1IsbUNBQUM7Q0FBQSxBQTFERCxDQUFrRCxzQkFBc0IsR0EwRHZFO1NBMURZLDRCQUE0Qjs7O0lBQ3ZDLCtDQUFzRTs7SUFFdEUsMERBQWlDOztJQUNqQyxzREFBK0M7O0lBQy9DLHlEQUFrQzs7SUFDbEMseURBQWlDOztJQXNDakMsdURBQWlFOztJQUVqRSxnRUFBbUQ7O0lBQ25ELGlFQUFxRDs7SUFFakIsbURBQStEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBDZGtDb25uZWN0ZWRPdmVybGF5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRXZlbnRFbWl0dGVyLCBIb3N0LCBJbnB1dCwgT25DaGFuZ2VzLCBPcHRpb25hbCwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgdG9Cb29sZWFuLCBOZ1N0eWxlSW50ZXJmYWNlLCBOek5vQW5pbWF0aW9uRGlyZWN0aXZlLCBQT1NJVElPTl9NQVAgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpUb29sdGlwVHJpZ2dlciB9IGZyb20gJy4uL256LXRvb2x0aXAuZGVmaW5pdGlvbnMnO1xyXG5pbXBvcnQgeyBOelRvb2x0aXBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9uei10b29sdGlwLWJhc2UuY29tcG9uZW50JztcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGNvbXBvbmVudCBvdmVycmlkZXMgc29tZSBwcm9wZXJ0aWVzIG9mIGBOelRvb2x0aXBCYXNlQ29tcG9uZW50YCBhbmQgbWFrZSB0aGVtXHJcbiAqIGlucHV0IHByb3BlcnRpZXMuXHJcbiAqXHJcbiAqIEBkZXByZWNhdGVkIDkuMC4wIHRvb2x0aXAgYW5kIG90aGVyIGNvbXBvbmVudHMgZGVwcmVjYXRlIHRoZSBvbGQgQVBJLiBUaGlzXHJcbiAqIHdvdWxkIGJlIHJlbW92ZWQgaW4gOS4wLjAuXHJcbiAqXHJcbiAqIEBleGFtcGxlIFRoaXMgZXhhbXBsZSBpcyB3aGF0IGdvaW5nIHRvIGJlIHJlbW92ZWRcclxuICpcclxuICogYGBgaHRtbFxyXG4gKiA8bnotdG9vbHRpcD5cclxuICogICA8YSBuei10b29sdGlwPjwvYT5cclxuICogPC9uei10b29sdGlwPlxyXG4gKiBgYGBcclxuICovXHJcbmV4cG9ydCBjbGFzcyBOelRvb2x0aXBCYXNlQ29tcG9uZW50TGVnYWN5IGV4dGVuZHMgTnpUb29sdGlwQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgQFZpZXdDaGlsZCgnb3ZlcmxheScsIHsgc3RhdGljOiBmYWxzZSB9KSBvdmVybGF5OiBDZGtDb25uZWN0ZWRPdmVybGF5O1xyXG5cclxuICBASW5wdXQoKSBuek92ZXJsYXlDbGFzc05hbWUgPSAnJztcclxuICBASW5wdXQoKSBuek92ZXJsYXlTdHlsZTogTmdTdHlsZUludGVyZmFjZSA9IHt9O1xyXG4gIEBJbnB1dCgpIG56TW91c2VFbnRlckRlbGF5ID0gMC4xNTsgLy8gc2Vjb25kXHJcbiAgQElucHV0KCkgbnpNb3VzZUxlYXZlRGVsYXkgPSAwLjE7IC8vIHNlY29uZFxyXG5cclxuICAvLyBUT0RPOiBwbGFjZW1lbnQgbG9naWMgc2hvdWxkIGJlIHJlbW92ZWQgaW50byBgTnpUb29sdGlwQmFzZURpcmVjdGl2ZWAgb25jZSB0aGlzIGNvbXBvbmVudCBpcyByZW1vdmVkLlxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56UGxhY2VtZW50KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fcGxhY2VtZW50KSB7XHJcbiAgICAgIHRoaXMuX3BsYWNlbWVudCA9IHZhbHVlO1xyXG4gICAgICB0aGlzLl9wb3NpdGlvbnMgPSBbUE9TSVRJT05fTUFQW3RoaXMubnpQbGFjZW1lbnRdLCAuLi50aGlzLl9wb3NpdGlvbnNdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG56UGxhY2VtZW50KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGxhY2VtZW50O1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpWaXNpYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICBjb25zdCB2aXNpYmxlID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICAgIGlmICh0aGlzLl92aXNpYmxlICE9PSB2aXNpYmxlKSB7XHJcbiAgICAgIHRoaXMuX3Zpc2libGUgPSB2aXNpYmxlO1xyXG4gICAgICB0aGlzLm56VmlzaWJsZUNoYW5nZS5lbWl0KHZpc2libGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG56VmlzaWJsZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl92aXNpYmxlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpUcmlnZ2VyKHZhbHVlOiBOelRvb2x0aXBUcmlnZ2VyKSB7XHJcbiAgICB0aGlzLl90cmlnZ2VyID0gdmFsdWU7XHJcbiAgICB0aGlzLl9oYXNCYWNrZHJvcCA9IHRoaXMuX3RyaWdnZXIgPT09ICdjbGljayc7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpUcmlnZ2VyKCk6IE56VG9vbHRpcFRyaWdnZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RyaWdnZXI7XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpWaXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBASW5wdXQoKSBuelNob3dQb3BvdmVyQ2xvc2VCdXR0b246IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBuelBvcG92ZXJDbG9zZUJ1dHRvbkxhYmVsOiBzdHJpbmcgPSAnY2xvc2UnO1xyXG5cclxuICBjb25zdHJ1Y3RvcihjZHI6IENoYW5nZURldGVjdG9yUmVmLCBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmUpIHtcclxuICAgIHN1cGVyKGNkciwgbm9BbmltYXRpb24pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcclxuICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==