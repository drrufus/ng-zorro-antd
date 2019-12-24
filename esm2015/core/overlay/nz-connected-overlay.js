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
export class NzConnectedOverlayDirective {
    constructor(cdkConnectedOverlay) {
        this.cdkConnectedOverlay = cdkConnectedOverlay;
        this.cdkConnectedOverlay.backdropClass = 'nz-overlay-transparent-backdrop';
    }
}
/** @nocollapse */ NzConnectedOverlayDirective.ɵfac = function NzConnectedOverlayDirective_Factory(t) { return new (t || NzConnectedOverlayDirective)(i0.ɵɵdirectiveInject(i1.CdkConnectedOverlay)); };
/** @nocollapse */ NzConnectedOverlayDirective.ɵdir = i0.ɵɵdefineDirective({ type: NzConnectedOverlayDirective, selectors: [["", "cdkConnectedOverlay", "", "nzConnectedOverlay", ""]], exportAs: ["nzConnectedOverlay"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzConnectedOverlayDirective, [{
        type: Directive,
        args: [{
                selector: '[cdkConnectedOverlay][nzConnectedOverlay]',
                exportAs: 'nzConnectedOverlay'
            }]
    }], function () { return [{ type: i1.CdkConnectedOverlay }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29ubmVjdGVkLW92ZXJsYXkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJvdmVybGF5L256LWNvbm5lY3RlZC1vdmVybGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU0xQyxNQUFNLE9BQU8sMkJBQTJCO0lBQ3RDLFlBQW9CLG1CQUF3QztRQUF4Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQzFELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEdBQUcsaUNBQWlDLENBQUM7SUFDN0UsQ0FBQzs7c0dBSFUsMkJBQTJCO2dFQUEzQiwyQkFBMkI7a0RBQTNCLDJCQUEyQjtjQUp2QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJDQUEyQztnQkFDckQsUUFBUSxFQUFFLG9CQUFvQjthQUMvQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ2RrQ29ubmVjdGVkT3ZlcmxheSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tjZGtDb25uZWN0ZWRPdmVybGF5XVtuekNvbm5lY3RlZE92ZXJsYXldJyxcclxuICBleHBvcnRBczogJ256Q29ubmVjdGVkT3ZlcmxheSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE56Q29ubmVjdGVkT3ZlcmxheURpcmVjdGl2ZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZGtDb25uZWN0ZWRPdmVybGF5OiBDZGtDb25uZWN0ZWRPdmVybGF5KSB7XHJcbiAgICB0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkuYmFja2Ryb3BDbGFzcyA9ICduei1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wJztcclxuICB9XHJcbn1cclxuIl19