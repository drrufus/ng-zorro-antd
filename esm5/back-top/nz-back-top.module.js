/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { PlatformModule } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SCROLL_SERVICE_PROVIDER } from 'ng-zorro-antd/core';
import { NzBackTopComponent } from './nz-back-top.component';
import * as i0 from "@angular/core";
var NzBackTopModule = /** @class */ (function () {
    function NzBackTopModule() {
    }
    /** @nocollapse */ NzBackTopModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzBackTopModule });
    /** @nocollapse */ NzBackTopModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzBackTopModule_Factory(t) { return new (t || NzBackTopModule)(); }, providers: [SCROLL_SERVICE_PROVIDER], imports: [[CommonModule, PlatformModule]] });
    return NzBackTopModule;
}());
export { NzBackTopModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzBackTopModule, { declarations: [NzBackTopComponent], imports: [CommonModule, PlatformModule], exports: [NzBackTopComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzBackTopModule, [{
        type: NgModule,
        args: [{
                declarations: [NzBackTopComponent],
                exports: [NzBackTopComponent],
                imports: [CommonModule, PlatformModule],
                providers: [SCROLL_SERVICE_PROVIDER]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYmFjay10b3AubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9iYWNrLXRvcC8iLCJzb3VyY2VzIjpbIm56LWJhY2stdG9wLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFDSCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFN0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7O0FBRTdEO0lBQUE7S0FNK0I7dURBQWxCLGVBQWU7aUhBQWYsZUFBZSxtQkFGZixDQUFDLHVCQUF1QixDQUFDLFlBRDNCLENBQUMsWUFBWSxFQUFFLGNBQWMsQ0FBQzswQkFqQnpDO0NBb0IrQixBQU4vQixJQU0rQjtTQUFsQixlQUFlO3dGQUFmLGVBQWUsbUJBTFgsa0JBQWtCLGFBRXZCLFlBQVksRUFBRSxjQUFjLGFBRDVCLGtCQUFrQjtrREFJakIsZUFBZTtjQU4zQixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsa0JBQWtCLENBQUM7Z0JBQ2xDLE9BQU8sRUFBRSxDQUFDLGtCQUFrQixDQUFDO2dCQUM3QixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsY0FBYyxDQUFDO2dCQUN2QyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQzthQUNyQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5pbXBvcnQgeyBQbGF0Zm9ybU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNDUk9MTF9TRVJWSUNFX1BST1ZJREVSIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56QmFja1RvcENvbXBvbmVudCB9IGZyb20gJy4vbnotYmFjay10b3AuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbTnpCYWNrVG9wQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbTnpCYWNrVG9wQ29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBQbGF0Zm9ybU1vZHVsZV0sXHJcbiAgcHJvdmlkZXJzOiBbU0NST0xMX1NFUlZJQ0VfUFJPVklERVJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekJhY2tUb3BNb2R1bGUge31cclxuIl19