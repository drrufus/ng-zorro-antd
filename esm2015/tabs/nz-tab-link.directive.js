/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, Optional, Self } from '@angular/core';
import { RouterLink, RouterLinkWithHref } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
/**
 * This component is for catching `routerLink` directive.
 */
export class NzTabLinkDirective {
    constructor(routerLink, routerLinkWithHref) {
        this.routerLink = routerLink;
        this.routerLinkWithHref = routerLinkWithHref;
    }
}
/** @nocollapse */ NzTabLinkDirective.ɵfac = function NzTabLinkDirective_Factory(t) { return new (t || NzTabLinkDirective)(i0.ɵɵdirectiveInject(i1.RouterLink, 10), i0.ɵɵdirectiveInject(i1.RouterLinkWithHref, 10)); };
/** @nocollapse */ NzTabLinkDirective.ɵdir = i0.ɵɵdefineDirective({ type: NzTabLinkDirective, selectors: [["a", "nz-tab-link", ""]], exportAs: ["nzTabLink"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzTabLinkDirective, [{
        type: Directive,
        args: [{
                selector: 'a[nz-tab-link]',
                exportAs: 'nzTabLink'
            }]
    }], function () { return [{ type: i1.RouterLink, decorators: [{
                type: Optional
            }, {
                type: Self
            }] }, { type: i1.RouterLinkWithHref, decorators: [{
                type: Optional
            }, {
                type: Self
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFiLWxpbmsuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90YWJzLyIsInNvdXJjZXMiOlsibnotdGFiLWxpbmsuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQUUsVUFBVSxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQUVqRTs7R0FFRztBQUtILE1BQU0sT0FBTyxrQkFBa0I7SUFDN0IsWUFBdUMsVUFBdUIsRUFBNkIsa0JBQXVDO1FBQTNGLGVBQVUsR0FBVixVQUFVLENBQWE7UUFBNkIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFxQjtJQUFHLENBQUM7O29GQUQzSCxrQkFBa0I7dURBQWxCLGtCQUFrQjtrREFBbEIsa0JBQWtCO2NBSjlCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUUsV0FBVzthQUN0Qjs7c0JBRWMsUUFBUTs7c0JBQUksSUFBSTs7c0JBQW9DLFFBQVE7O3NCQUFJLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IERpcmVjdGl2ZSwgT3B0aW9uYWwsIFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTGluaywgUm91dGVyTGlua1dpdGhIcmVmIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGNvbXBvbmVudCBpcyBmb3IgY2F0Y2hpbmcgYHJvdXRlckxpbmtgIGRpcmVjdGl2ZS5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnYVtuei10YWItbGlua10nLFxyXG4gIGV4cG9ydEFzOiAnbnpUYWJMaW5rJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpUYWJMaW5rRGlyZWN0aXZlIHtcclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2VsZigpIHB1YmxpYyByb3V0ZXJMaW5rPzogUm91dGVyTGluaywgQE9wdGlvbmFsKCkgQFNlbGYoKSBwdWJsaWMgcm91dGVyTGlua1dpdGhIcmVmPzogUm91dGVyTGlua1dpdGhIcmVmKSB7fVxyXG59XHJcbiJdfQ==