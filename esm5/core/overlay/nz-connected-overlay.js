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
var NzConnectedOverlayDirective = /** @class */ (function () {
    function NzConnectedOverlayDirective(cdkConnectedOverlay) {
        this.cdkConnectedOverlay = cdkConnectedOverlay;
        this.cdkConnectedOverlay.backdropClass = 'nz-overlay-transparent-backdrop';
    }
    /** @nocollapse */
    NzConnectedOverlayDirective.ctorParameters = function () { return [
        { type: CdkConnectedOverlay }
    ]; };
NzConnectedOverlayDirective.ɵfac = function NzConnectedOverlayDirective_Factory(t) { return new (t || NzConnectedOverlayDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.CdkConnectedOverlay)); };
NzConnectedOverlayDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzConnectedOverlayDirective, selectors: [["", "cdkConnectedOverlay", "", "nzConnectedOverlay", ""]], exportAs: ["nzConnectedOverlay"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzConnectedOverlayDirective, [{
        type: Directive,
        args: [{
                selector: '[cdkConnectedOverlay][nzConnectedOverlay]',
                exportAs: 'nzConnectedOverlay'
            }]
    }], function () { return [{ type: ɵngcc1.CdkConnectedOverlay }]; }, null); })();
    return NzConnectedOverlayDirective;
}());
export { NzConnectedOverlayDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzConnectedOverlayDirective.prototype.cdkConnectedOverlay;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29ubmVjdGVkLW92ZXJsYXkuanMiLCJzb3VyY2VzIjpbIm5nOi9uZy16b3Jyby1hbnRkL2NvcmUvb3ZlcmxheS9uei1jb25uZWN0ZWQtb3ZlcmxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQUUxQztJQUtFLHFDQUFvQixtQkFBd0M7UUFBeEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUMxRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxHQUFHLGlDQUFpQyxDQUFDO0lBQzdFLENBQUMsQUFITTs7d0NBSlIsU0FBUyxTQUFDO1FBQ1QsUUFBUSxFQUFFLEZBSkgsbUJBQW1COzthQUkyQixzQkFDckQsUUFBUSxFQUFFLG9CQUFvQixrQkFDL0I7Ozs7Ozs7O29GQU51QztJQVd4QyxrQ0FBQztDQUFBLEFBUkQsSUFRQztTQUpZLDJCQUEyQjs7Ozs7O0lBQzFCLDBEQUFnRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ2RrQ29ubmVjdGVkT3ZlcmxheSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tjZGtDb25uZWN0ZWRPdmVybGF5XVtuekNvbm5lY3RlZE92ZXJsYXldJyxcclxuICBleHBvcnRBczogJ256Q29ubmVjdGVkT3ZlcmxheSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE56Q29ubmVjdGVkT3ZlcmxheURpcmVjdGl2ZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZGtDb25uZWN0ZWRPdmVybGF5OiBDZGtDb25uZWN0ZWRPdmVybGF5KSB7XHJcbiAgICB0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkuYmFja2Ryb3BDbGFzcyA9ICduei1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wJztcclxuICB9XHJcbn1cclxuIl19