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
import { NzCarouselContentDirective } from './nz-carousel-content.directive';
import { NzCarouselComponent } from './nz-carousel.component';
import * as i0 from "@angular/core";
var NzCarouselModule = /** @class */ (function () {
    function NzCarouselModule() {
    }
    /** @nocollapse */ NzCarouselModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzCarouselModule });
    /** @nocollapse */ NzCarouselModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzCarouselModule_Factory(t) { return new (t || NzCarouselModule)(); }, imports: [[CommonModule, PlatformModule]] });
    return NzCarouselModule;
}());
export { NzCarouselModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzCarouselModule, { declarations: [NzCarouselComponent, NzCarouselContentDirective], imports: [CommonModule, PlatformModule], exports: [NzCarouselComponent, NzCarouselContentDirective] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzCarouselModule, [{
        type: NgModule,
        args: [{
                declarations: [NzCarouselComponent, NzCarouselContentDirective],
                exports: [NzCarouselComponent, NzCarouselContentDirective],
                imports: [CommonModule, PlatformModule]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2Fyb3VzZWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jYXJvdXNlbC8iLCJzb3VyY2VzIjpbIm56LWNhcm91c2VsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFDSCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7O0FBRTlEO0lBQUE7S0FLZ0M7d0RBQW5CLGdCQUFnQjttSEFBaEIsZ0JBQWdCLGtCQUZsQixDQUFDLFlBQVksRUFBRSxjQUFjLENBQUM7MkJBakJ6QztDQW1CZ0MsQUFMaEMsSUFLZ0M7U0FBbkIsZ0JBQWdCO3dGQUFoQixnQkFBZ0IsbUJBSlosbUJBQW1CLEVBQUUsMEJBQTBCLGFBRXBELFlBQVksRUFBRSxjQUFjLGFBRDVCLG1CQUFtQixFQUFFLDBCQUEwQjtrREFHOUMsZ0JBQWdCO2NBTDVCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSwwQkFBMEIsQ0FBQztnQkFDL0QsT0FBTyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsMEJBQTBCLENBQUM7Z0JBQzFELE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxjQUFjLENBQUM7YUFDeEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgUGxhdGZvcm1Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpDYXJvdXNlbENvbnRlbnREaXJlY3RpdmUgfSBmcm9tICcuL256LWNhcm91c2VsLWNvbnRlbnQuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTnpDYXJvdXNlbENvbXBvbmVudCB9IGZyb20gJy4vbnotY2Fyb3VzZWwuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbTnpDYXJvdXNlbENvbXBvbmVudCwgTnpDYXJvdXNlbENvbnRlbnREaXJlY3RpdmVdLFxyXG4gIGV4cG9ydHM6IFtOekNhcm91c2VsQ29tcG9uZW50LCBOekNhcm91c2VsQ29udGVudERpcmVjdGl2ZV0sXHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUGxhdGZvcm1Nb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekNhcm91c2VsTW9kdWxlIHt9XHJcbiJdfQ==