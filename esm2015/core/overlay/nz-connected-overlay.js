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
import { Directive } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/overlay';
export class NzConnectedOverlayDirective {
    /**
     * @param {?} cdkConnectedOverlay
     */
    constructor(cdkConnectedOverlay) {
        this.cdkConnectedOverlay = cdkConnectedOverlay;
        this.cdkConnectedOverlay.backdropClass = 'nz-overlay-transparent-backdrop';
    }
}
NzConnectedOverlayDirective.ɵfac = function NzConnectedOverlayDirective_Factory(t) { return new (t || NzConnectedOverlayDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.CdkConnectedOverlay)); };
NzConnectedOverlayDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzConnectedOverlayDirective, selectors: [["", "cdkConnectedOverlay", "", "nzConnectedOverlay", ""]], exportAs: ["nzConnectedOverlay"] });
/** @nocollapse */
NzConnectedOverlayDirective.ctorParameters = () => [
    { type: CdkConnectedOverlay }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzConnectedOverlayDirective, [{
        type: Directive,
        args: [{
                selector: '[cdkConnectedOverlay][nzConnectedOverlay]',
                exportAs: 'nzConnectedOverlay'
            }]
    }], function () { return [{ type: ɵngcc1.CdkConnectedOverlay }]; }, null); })();
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzConnectedOverlayDirective.prototype.cdkConnectedOverlay;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29ubmVjdGVkLW92ZXJsYXkuanMiLCJzb3VyY2VzIjpbIm5nOi9uZy16b3Jyby1hbnRkL2NvcmUvb3ZlcmxheS9uei1jb25uZWN0ZWQtb3ZlcmxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU0xQyxNQUFNLE9BQU8sMkJBQTJCOzs7O0lBQ3RDLFlBQW9CLG1CQUF3QztRQUF4Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQzFELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEdBQUcsaUNBQWlDLENBQUM7SUFDN0UsQ0FBQzs7O0NBQ0Ysd0RBUkEsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSwyQ0FBMkMsa0JBQ3JELFFBQVEsRUFBRSxvQkFBb0IsV0FFM0I7RUFESjs7WUFOUSxtQkFBbUI7Ozs7Ozs7O29GQUFLOzs7Ozs7SUFRbkIsMERBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBDZGtDb25uZWN0ZWRPdmVybGF5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2Nka0Nvbm5lY3RlZE92ZXJsYXldW256Q29ubmVjdGVkT3ZlcmxheV0nLFxyXG4gIGV4cG9ydEFzOiAnbnpDb25uZWN0ZWRPdmVybGF5J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpDb25uZWN0ZWRPdmVybGF5RGlyZWN0aXZlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNka0Nvbm5lY3RlZE92ZXJsYXk6IENka0Nvbm5lY3RlZE92ZXJsYXkpIHtcclxuICAgIHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheS5iYWNrZHJvcENsYXNzID0gJ256LW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3AnO1xyXG4gIH1cclxufVxyXG4iXX0=