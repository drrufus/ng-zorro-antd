/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
var NzConnectedOverlayDirective = /** @class */ (function () {
    function NzConnectedOverlayDirective(cdkConnectedOverlay) {
        this.cdkConnectedOverlay = cdkConnectedOverlay;
        this.cdkConnectedOverlay.backdropClass = 'nz-overlay-transparent-backdrop';
    }
    /** @nocollapse */ NzConnectedOverlayDirective.ɵfac = function NzConnectedOverlayDirective_Factory(t) { return new (t || NzConnectedOverlayDirective)(i0.ɵɵdirectiveInject(i1.CdkConnectedOverlay)); };
    /** @nocollapse */ NzConnectedOverlayDirective.ɵdir = i0.ɵɵdefineDirective({ type: NzConnectedOverlayDirective, selectors: [["", "cdkConnectedOverlay", "", "nzConnectedOverlay", ""]], exportAs: ["nzConnectedOverlay"] });
    return NzConnectedOverlayDirective;
}());
export { NzConnectedOverlayDirective };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzConnectedOverlayDirective, [{
        type: Directive,
        args: [{
                selector: '[cdkConnectedOverlay][nzConnectedOverlay]',
                exportAs: 'nzConnectedOverlay'
            }]
    }], function () { return [{ type: i1.CdkConnectedOverlay }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29ubmVjdGVkLW92ZXJsYXkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJvdmVybGF5L256LWNvbm5lY3RlZC1vdmVybGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQUUxQztJQUtFLHFDQUFvQixtQkFBd0M7UUFBeEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUMxRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxHQUFHLGlDQUFpQyxDQUFDO0lBQzdFLENBQUM7MEdBSFUsMkJBQTJCO29FQUEzQiwyQkFBMkI7c0NBZnhDO0NBbUJDLEFBUkQsSUFRQztTQUpZLDJCQUEyQjtrREFBM0IsMkJBQTJCO2NBSnZDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMkNBQTJDO2dCQUNyRCxRQUFRLEVBQUUsb0JBQW9CO2FBQy9CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBDZGtDb25uZWN0ZWRPdmVybGF5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2Nka0Nvbm5lY3RlZE92ZXJsYXldW256Q29ubmVjdGVkT3ZlcmxheV0nLFxyXG4gIGV4cG9ydEFzOiAnbnpDb25uZWN0ZWRPdmVybGF5J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpDb25uZWN0ZWRPdmVybGF5RGlyZWN0aXZlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNka0Nvbm5lY3RlZE92ZXJsYXk6IENka0Nvbm5lY3RlZE92ZXJsYXkpIHtcclxuICAgIHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheS5iYWNrZHJvcENsYXNzID0gJ256LW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3AnO1xyXG4gIH1cclxufVxyXG4iXX0=