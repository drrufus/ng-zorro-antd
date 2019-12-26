/**
 * @fileoverview added by tsickle
 * Generated from: base/nz-tooltip-base-legacy.component.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdG9vbHRpcC1iYXNlLWxlZ2FjeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3Rvb2x0aXAvIiwic291cmNlcyI6WyJiYXNlL256LXRvb2x0aXAtYmFzZS1sZWdhY3kuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBYSxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNySCxPQUFPLEVBQUUsU0FBUyxFQUFvQixzQkFBc0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUd2RyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCckUsTUFBTSxPQUFPLDRCQUE2QixTQUFRLHNCQUFzQjs7Ozs7SUE4Q3RFLFlBQVksR0FBc0IsRUFBNkIsV0FBb0M7UUFDakcsS0FBSyxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQztRQURxQyxnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUEzQzFGLHVCQUFrQixHQUFHLEVBQUUsQ0FBQztRQUN4QixtQkFBYyxHQUFxQixFQUFFLENBQUM7UUFDdEMsc0JBQWlCLEdBQUcsSUFBSSxDQUFDLENBQUMsU0FBUzs7UUFDbkMsc0JBQWlCLEdBQUcsR0FBRyxDQUFDLENBQUMsU0FBUztRQXNDeEIsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0lBSWpFLENBQUM7Ozs7Ozs7SUF2Q0QsSUFDSSxXQUFXLENBQUMsS0FBYTtRQUMzQixJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3hFO0lBQ0gsQ0FBQzs7OztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELElBQ0ksU0FBUyxDQUFDLEtBQWM7O2NBQ3BCLE9BQU8sR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO1FBQ2hDLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxPQUFPLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7WUFDeEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDcEM7SUFDSCxDQUFDOzs7O0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsSUFDSSxTQUFTLENBQUMsS0FBdUI7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxLQUFLLE9BQU8sQ0FBQztJQUNoRCxDQUFDOzs7O0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFRRCxXQUFXO1FBQ1QsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUk7OztRQUFDLEdBQUcsRUFBRTtZQUMxQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O1lBM0VNLGlCQUFpQjtZQUNZLHNCQUFzQix1QkFrRXJCLElBQUksWUFBSSxRQUFROzs7c0JBN0NwRCxTQUFTLFNBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtpQ0FFdEMsS0FBSzs2QkFDTCxLQUFLO2dDQUNMLEtBQUs7Z0NBQ0wsS0FBSzswQkFHTCxLQUFLO3dCQVlMLEtBQUs7d0JBYUwsS0FBSzs4QkFVTCxNQUFNOzs7O0lBM0NQLCtDQUFzRTs7SUFFdEUsMERBQWlDOztJQUNqQyxzREFBK0M7O0lBQy9DLHlEQUFrQzs7SUFDbEMseURBQWlDOztJQXNDakMsdURBQWlFOztJQUU3QixtREFBK0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENka0Nvbm5lY3RlZE92ZXJsYXkgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBFdmVudEVtaXR0ZXIsIEhvc3QsIElucHV0LCBPbkNoYW5nZXMsIE9wdGlvbmFsLCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB0b0Jvb2xlYW4sIE5nU3R5bGVJbnRlcmZhY2UsIE56Tm9BbmltYXRpb25EaXJlY3RpdmUsIFBPU0lUSU9OX01BUCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOelRvb2x0aXBUcmlnZ2VyIH0gZnJvbSAnLi4vbnotdG9vbHRpcC5kZWZpbml0aW9ucyc7XHJcbmltcG9ydCB7IE56VG9vbHRpcEJhc2VDb21wb25lbnQgfSBmcm9tICcuL256LXRvb2x0aXAtYmFzZS5jb21wb25lbnQnO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgY29tcG9uZW50IG92ZXJyaWRlcyBzb21lIHByb3BlcnRpZXMgb2YgYE56VG9vbHRpcEJhc2VDb21wb25lbnRgIGFuZCBtYWtlIHRoZW1cclxuICogaW5wdXQgcHJvcGVydGllcy5cclxuICpcclxuICogQGRlcHJlY2F0ZWQgOS4wLjAgdG9vbHRpcCBhbmQgb3RoZXIgY29tcG9uZW50cyBkZXByZWNhdGUgdGhlIG9sZCBBUEkuIFRoaXNcclxuICogd291bGQgYmUgcmVtb3ZlZCBpbiA5LjAuMC5cclxuICpcclxuICogQGV4YW1wbGUgVGhpcyBleGFtcGxlIGlzIHdoYXQgZ29pbmcgdG8gYmUgcmVtb3ZlZFxyXG4gKlxyXG4gKiBgYGBodG1sXHJcbiAqIDxuei10b29sdGlwPlxyXG4gKiAgIDxhIG56LXRvb2x0aXA+PC9hPlxyXG4gKiA8L256LXRvb2x0aXA+XHJcbiAqIGBgYFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE56VG9vbHRpcEJhc2VDb21wb25lbnRMZWdhY3kgZXh0ZW5kcyBOelRvb2x0aXBCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBAVmlld0NoaWxkKCdvdmVybGF5JywgeyBzdGF0aWM6IGZhbHNlIH0pIG92ZXJsYXk6IENka0Nvbm5lY3RlZE92ZXJsYXk7XHJcblxyXG4gIEBJbnB1dCgpIG56T3ZlcmxheUNsYXNzTmFtZSA9ICcnO1xyXG4gIEBJbnB1dCgpIG56T3ZlcmxheVN0eWxlOiBOZ1N0eWxlSW50ZXJmYWNlID0ge307XHJcbiAgQElucHV0KCkgbnpNb3VzZUVudGVyRGVsYXkgPSAwLjE1OyAvLyBzZWNvbmRcclxuICBASW5wdXQoKSBuek1vdXNlTGVhdmVEZWxheSA9IDAuMTsgLy8gc2Vjb25kXHJcblxyXG4gIC8vIFRPRE86IHBsYWNlbWVudCBsb2dpYyBzaG91bGQgYmUgcmVtb3ZlZCBpbnRvIGBOelRvb2x0aXBCYXNlRGlyZWN0aXZlYCBvbmNlIHRoaXMgY29tcG9uZW50IGlzIHJlbW92ZWQuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpQbGFjZW1lbnQodmFsdWU6IHN0cmluZykge1xyXG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLl9wbGFjZW1lbnQpIHtcclxuICAgICAgdGhpcy5fcGxhY2VtZW50ID0gdmFsdWU7XHJcbiAgICAgIHRoaXMuX3Bvc2l0aW9ucyA9IFtQT1NJVElPTl9NQVBbdGhpcy5uelBsYWNlbWVudF0sIC4uLnRoaXMuX3Bvc2l0aW9uc107XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbnpQbGFjZW1lbnQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9wbGFjZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelZpc2libGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIGNvbnN0IHZpc2libGUgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gICAgaWYgKHRoaXMuX3Zpc2libGUgIT09IHZpc2libGUpIHtcclxuICAgICAgdGhpcy5fdmlzaWJsZSA9IHZpc2libGU7XHJcbiAgICAgIHRoaXMubnpWaXNpYmxlQ2hhbmdlLmVtaXQodmlzaWJsZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbnpWaXNpYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Zpc2libGU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelRyaWdnZXIodmFsdWU6IE56VG9vbHRpcFRyaWdnZXIpIHtcclxuICAgIHRoaXMuX3RyaWdnZXIgPSB2YWx1ZTtcclxuICAgIHRoaXMuX2hhc0JhY2tkcm9wID0gdGhpcy5fdHJpZ2dlciA9PT0gJ2NsaWNrJztcclxuICB9XHJcblxyXG4gIGdldCBuelRyaWdnZXIoKTogTnpUb29sdGlwVHJpZ2dlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fdHJpZ2dlcjtcclxuICB9XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSkge1xyXG4gICAgc3VwZXIoY2RyLCBub0FuaW1hdGlvbik7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19