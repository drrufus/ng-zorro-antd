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
import { Directive, Optional, Self } from '@angular/core';
import { RouterLink, RouterLinkWithHref } from '@angular/router';
/**
 * This component is for catching `routerLink` directive.
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/router';
var NzTabLinkDirective = /** @class */ (function () {
    function NzTabLinkDirective(routerLink, routerLinkWithHref) {
        this.routerLink = routerLink;
        this.routerLinkWithHref = routerLinkWithHref;
    }
    /** @nocollapse */
    NzTabLinkDirective.ctorParameters = function () { return [
        { type: RouterLink, decorators: [{ type: Optional }, { type: Self }] },
        { type: RouterLinkWithHref, decorators: [{ type: Optional }, { type: Self }] }
    ]; };
NzTabLinkDirective.ɵfac = function NzTabLinkDirective_Factory(t) { return new (t || NzTabLinkDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.RouterLink, 10), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.RouterLinkWithHref, 10)); };
NzTabLinkDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzTabLinkDirective, selectors: [["a", "nz-tab-link", ""]], exportAs: ["nzTabLink"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTabLinkDirective, [{
        type: Directive,
        args: [{
                selector: 'a[nz-tab-link]',
                exportAs: 'nzTabLink'
            }]
    }], function () { return [{ type: ɵngcc1.RouterLink, decorators: [{
                type: Optional
            }, {
                type: Self
            }] }, { type: ɵngcc1.RouterLinkWithHref, decorators: [{
                type: Optional
            }, {
                type: Self
            }] }]; }, null); })();
    return NzTabLinkDirective;
}());
export { NzTabLinkDirective };
if (false) {
    /** @type {?} */
    NzTabLinkDirective.prototype.routerLink;
    /** @type {?} */
    NzTabLinkDirective.prototype.routerLinkWithHref;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFiLWxpbmsuZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyJuZzovbmctem9ycm8tYW50ZC90YWJzL256LXRhYi1saW5rLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQUUsVUFBVSxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7OztBQUtqRTtJQUtFLDRCQUM2QixVQUF1QixFQUN2QixrQkFBdUM7UUFEdkMsZUFBVSxHQUFWLFVBQVUsQ0FBYTtRQUN2Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQXFCO0lBQ2pFLENBQUMsQUFKRzs7K0JBSlIsU0FBUyxTQUFDO1FBQ1QsUUFBUSxFQUFFLGdCQUFnQixzQkFDMUIsUUFBUSxFQUFFLFdBQVcsN0RBUGQsVUFBVSx1QkFXZCxRQUFRLFlBQUksSUFBSTtlQUhwQixDQVJvQixrQkFBa0IsdUJBWWxDLFFBQVEsWUFBSSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBQWU7SUFFcEMseUJBQUM7Q0FBQSxBQVRELElBU0M7U0FMWSxrQkFBa0I7OztJQUUzQix3Q0FBa0Q7O0lBQ2xELGdEQUFrRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgRGlyZWN0aXZlLCBPcHRpb25hbCwgU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJMaW5rLCBSb3V0ZXJMaW5rV2l0aEhyZWYgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgY29tcG9uZW50IGlzIGZvciBjYXRjaGluZyBgcm91dGVyTGlua2AgZGlyZWN0aXZlLlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdhW256LXRhYi1saW5rXScsXHJcbiAgZXhwb3J0QXM6ICduelRhYkxpbmsnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelRhYkxpbmtEaXJlY3RpdmUge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQE9wdGlvbmFsKCkgQFNlbGYoKSBwdWJsaWMgcm91dGVyTGluaz86IFJvdXRlckxpbmssXHJcbiAgICBAT3B0aW9uYWwoKSBAU2VsZigpIHB1YmxpYyByb3V0ZXJMaW5rV2l0aEhyZWY/OiBSb3V0ZXJMaW5rV2l0aEhyZWZcclxuICApIHt9XHJcbn1cclxuIl19