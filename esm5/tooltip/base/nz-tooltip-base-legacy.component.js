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
        nzVisibleChange: [{ type: Output }]
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
    NzTooltipBaseComponentLegacy.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdG9vbHRpcC1iYXNlLWxlZ2FjeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3Rvb2x0aXAvIiwic291cmNlcyI6WyJiYXNlL256LXRvb2x0aXAtYmFzZS1sZWdhY3kuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBYSxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNySCxPQUFPLEVBQUUsU0FBUyxFQUFvQixzQkFBc0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUd2RyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCckU7SUFBa0Qsd0RBQXNCO0lBOEN0RSxzQ0FBWSxHQUFzQixFQUE2QixXQUFvQztRQUFuRyxZQUNFLGtCQUFNLEdBQUcsRUFBRSxXQUFXLENBQUMsU0FDeEI7UUFGOEQsaUJBQVcsR0FBWCxXQUFXLENBQXlCO1FBM0MxRix3QkFBa0IsR0FBRyxFQUFFLENBQUM7UUFDeEIsb0JBQWMsR0FBcUIsRUFBRSxDQUFDO1FBQ3RDLHVCQUFpQixHQUFHLElBQUksQ0FBQyxDQUFDLFNBQVM7O1FBQ25DLHVCQUFpQixHQUFHLEdBQUcsQ0FBQyxDQUFDLFNBQVM7UUFzQ3hCLHFCQUFlLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQzs7SUFJakUsQ0FBQztJQXZDRCxzQkFDSSxxREFBVzs7OztRQU9mO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3pCLENBQUM7UUFYRCx3R0FBd0c7Ozs7Ozs7O1FBQ3hHLFVBQ2dCLEtBQWE7WUFDM0IsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxVQUFVLHFCQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ3hFO1FBQ0gsQ0FBQzs7O09BQUE7SUFNRCxzQkFDSSxtREFBUzs7OztRQVFiO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZCLENBQUM7Ozs7O1FBWEQsVUFDYyxLQUFjOztnQkFDcEIsT0FBTyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7WUFDaEMsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLE9BQU8sRUFBRTtnQkFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3BDO1FBQ0gsQ0FBQzs7O09BQUE7SUFNRCxzQkFDSSxtREFBUzs7OztRQUtiO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZCLENBQUM7Ozs7O1FBUkQsVUFDYyxLQUF1QjtZQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLEtBQUssT0FBTyxDQUFDO1FBQ2hELENBQUM7OztPQUFBOzs7O0lBWUQsa0RBQVc7OztJQUFYO1FBQUEsaUJBSUM7UUFIQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSTs7O1FBQUM7WUFDckIsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O2dCQTNFTSxpQkFBaUI7Z0JBQ1ksc0JBQXNCLHVCQWtFckIsSUFBSSxZQUFJLFFBQVE7OzswQkE3Q3BELFNBQVMsU0FBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO3FDQUV0QyxLQUFLO2lDQUNMLEtBQUs7b0NBQ0wsS0FBSztvQ0FDTCxLQUFLOzhCQUdMLEtBQUs7NEJBWUwsS0FBSzs0QkFhTCxLQUFLO2tDQVVMLE1BQU07O0lBV1QsbUNBQUM7Q0FBQSxBQXZERCxDQUFrRCxzQkFBc0IsR0F1RHZFO1NBdkRZLDRCQUE0Qjs7O0lBQ3ZDLCtDQUFzRTs7SUFFdEUsMERBQWlDOztJQUNqQyxzREFBK0M7O0lBQy9DLHlEQUFrQzs7SUFDbEMseURBQWlDOztJQXNDakMsdURBQWlFOztJQUU3QixtREFBK0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENka0Nvbm5lY3RlZE92ZXJsYXkgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBFdmVudEVtaXR0ZXIsIEhvc3QsIElucHV0LCBPbkNoYW5nZXMsIE9wdGlvbmFsLCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB0b0Jvb2xlYW4sIE5nU3R5bGVJbnRlcmZhY2UsIE56Tm9BbmltYXRpb25EaXJlY3RpdmUsIFBPU0lUSU9OX01BUCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOelRvb2x0aXBUcmlnZ2VyIH0gZnJvbSAnLi4vbnotdG9vbHRpcC5kZWZpbml0aW9ucyc7XHJcbmltcG9ydCB7IE56VG9vbHRpcEJhc2VDb21wb25lbnQgfSBmcm9tICcuL256LXRvb2x0aXAtYmFzZS5jb21wb25lbnQnO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgY29tcG9uZW50IG92ZXJyaWRlcyBzb21lIHByb3BlcnRpZXMgb2YgYE56VG9vbHRpcEJhc2VDb21wb25lbnRgIGFuZCBtYWtlIHRoZW1cclxuICogaW5wdXQgcHJvcGVydGllcy5cclxuICpcclxuICogQGRlcHJlY2F0ZWQgOS4wLjAgdG9vbHRpcCBhbmQgb3RoZXIgY29tcG9uZW50cyBkZXByZWNhdGUgdGhlIG9sZCBBUEkuIFRoaXNcclxuICogd291bGQgYmUgcmVtb3ZlZCBpbiA5LjAuMC5cclxuICpcclxuICogQGV4YW1wbGUgVGhpcyBleGFtcGxlIGlzIHdoYXQgZ29pbmcgdG8gYmUgcmVtb3ZlZFxyXG4gKlxyXG4gKiBgYGBodG1sXHJcbiAqIDxuei10b29sdGlwPlxyXG4gKiAgIDxhIG56LXRvb2x0aXA+PC9hPlxyXG4gKiA8L256LXRvb2x0aXA+XHJcbiAqIGBgYFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE56VG9vbHRpcEJhc2VDb21wb25lbnRMZWdhY3kgZXh0ZW5kcyBOelRvb2x0aXBCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBAVmlld0NoaWxkKCdvdmVybGF5JywgeyBzdGF0aWM6IGZhbHNlIH0pIG92ZXJsYXk6IENka0Nvbm5lY3RlZE92ZXJsYXk7XHJcblxyXG4gIEBJbnB1dCgpIG56T3ZlcmxheUNsYXNzTmFtZSA9ICcnO1xyXG4gIEBJbnB1dCgpIG56T3ZlcmxheVN0eWxlOiBOZ1N0eWxlSW50ZXJmYWNlID0ge307XHJcbiAgQElucHV0KCkgbnpNb3VzZUVudGVyRGVsYXkgPSAwLjE1OyAvLyBzZWNvbmRcclxuICBASW5wdXQoKSBuek1vdXNlTGVhdmVEZWxheSA9IDAuMTsgLy8gc2Vjb25kXHJcblxyXG4gIC8vIFRPRE86IHBsYWNlbWVudCBsb2dpYyBzaG91bGQgYmUgcmVtb3ZlZCBpbnRvIGBOelRvb2x0aXBCYXNlRGlyZWN0aXZlYCBvbmNlIHRoaXMgY29tcG9uZW50IGlzIHJlbW92ZWQuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpQbGFjZW1lbnQodmFsdWU6IHN0cmluZykge1xyXG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLl9wbGFjZW1lbnQpIHtcclxuICAgICAgdGhpcy5fcGxhY2VtZW50ID0gdmFsdWU7XHJcbiAgICAgIHRoaXMuX3Bvc2l0aW9ucyA9IFtQT1NJVElPTl9NQVBbdGhpcy5uelBsYWNlbWVudF0sIC4uLnRoaXMuX3Bvc2l0aW9uc107XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbnpQbGFjZW1lbnQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9wbGFjZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelZpc2libGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIGNvbnN0IHZpc2libGUgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gICAgaWYgKHRoaXMuX3Zpc2libGUgIT09IHZpc2libGUpIHtcclxuICAgICAgdGhpcy5fdmlzaWJsZSA9IHZpc2libGU7XHJcbiAgICAgIHRoaXMubnpWaXNpYmxlQ2hhbmdlLmVtaXQodmlzaWJsZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbnpWaXNpYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Zpc2libGU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelRyaWdnZXIodmFsdWU6IE56VG9vbHRpcFRyaWdnZXIpIHtcclxuICAgIHRoaXMuX3RyaWdnZXIgPSB2YWx1ZTtcclxuICAgIHRoaXMuX2hhc0JhY2tkcm9wID0gdGhpcy5fdHJpZ2dlciA9PT0gJ2NsaWNrJztcclxuICB9XHJcblxyXG4gIGdldCBuelRyaWdnZXIoKTogTnpUb29sdGlwVHJpZ2dlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fdHJpZ2dlcjtcclxuICB9XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSkge1xyXG4gICAgc3VwZXIoY2RyLCBub0FuaW1hdGlvbik7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19