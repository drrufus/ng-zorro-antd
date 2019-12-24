/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { NgModule } from '@angular/core';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';
import * as i0 from "@angular/core";
var antDesignIcons = AllIcons;
var icons = Object.keys(antDesignIcons).map(function (key) {
    var i = antDesignIcons[key];
    return i;
});
/**
 * Include this module in every testing spec, except `nz-icon.spec.ts`.
 */
// @dynamic
var NzIconTestModule = /** @class */ (function () {
    function NzIconTestModule() {
    }
    /** @nocollapse */ NzIconTestModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzIconTestModule });
    /** @nocollapse */ NzIconTestModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzIconTestModule_Factory(t) { return new (t || NzIconTestModule)(); }, providers: [
            {
                provide: NZ_ICONS,
                useValue: icons
            }
        ], imports: [NzIconModule] });
    return NzIconTestModule;
}());
export { NzIconTestModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzIconTestModule, { exports: [NzIconModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzIconTestModule, [{
        type: NgModule,
        args: [{
                exports: [NzIconModule],
                providers: [
                    {
                        provide: NZ_ICONS,
                        useValue: icons
                    }
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaWNvbi10ZXN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvaWNvbi90ZXN0aW5nLyIsInNvdXJjZXMiOlsibnotaWNvbi10ZXN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sS0FBSyxRQUFRLE1BQU0saUNBQWlDLENBQUM7QUFFNUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFFNUQsSUFBTSxjQUFjLEdBQUcsUUFFdEIsQ0FBQztBQUVGLElBQU0sS0FBSyxHQUFxQixNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUc7SUFDakUsSUFBTSxDQUFDLEdBQUcsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLE9BQU8sQ0FBQyxDQUFDO0FBQ1gsQ0FBQyxDQUFDLENBQUM7QUFFSDs7R0FFRztBQUNILFdBQVc7QUFDWDtJQUFBO0tBU2dDO3dEQUFuQixnQkFBZ0I7bUhBQWhCLGdCQUFnQixtQkFQaEI7WUFDVDtnQkFDRSxPQUFPLEVBQUUsUUFBUTtnQkFDakIsUUFBUSxFQUFFLEtBQUs7YUFDaEI7U0FDRixZQU5TLFlBQVk7MkJBNUJ4QjtDQW9DZ0MsQUFUaEMsSUFTZ0M7U0FBbkIsZ0JBQWdCO3dGQUFoQixnQkFBZ0IsY0FSakIsWUFBWTtrREFRWCxnQkFBZ0I7Y0FUNUIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxRQUFRO3dCQUNqQixRQUFRLEVBQUUsS0FBSztxQkFDaEI7aUJBQ0Y7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSWNvbkRlZmluaXRpb24gfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy1hbmd1bGFyJztcclxuaW1wb3J0ICogYXMgQWxsSWNvbnMgZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMtYW5ndWxhci9pY29ucyc7XHJcblxyXG5pbXBvcnQgeyBOWl9JQ09OUywgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcclxuXHJcbmNvbnN0IGFudERlc2lnbkljb25zID0gQWxsSWNvbnMgYXMge1xyXG4gIFtrZXk6IHN0cmluZ106IEljb25EZWZpbml0aW9uO1xyXG59O1xyXG5cclxuY29uc3QgaWNvbnM6IEljb25EZWZpbml0aW9uW10gPSBPYmplY3Qua2V5cyhhbnREZXNpZ25JY29ucykubWFwKGtleSA9PiB7XHJcbiAgY29uc3QgaSA9IGFudERlc2lnbkljb25zW2tleV07XHJcbiAgcmV0dXJuIGk7XHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIEluY2x1ZGUgdGhpcyBtb2R1bGUgaW4gZXZlcnkgdGVzdGluZyBzcGVjLCBleGNlcHQgYG56LWljb24uc3BlYy50c2AuXHJcbiAqL1xyXG4vLyBAZHluYW1pY1xyXG5ATmdNb2R1bGUoe1xyXG4gIGV4cG9ydHM6IFtOekljb25Nb2R1bGVdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOWl9JQ09OUyxcclxuICAgICAgdXNlVmFsdWU6IGljb25zXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpJY29uVGVzdE1vZHVsZSB7fVxyXG4iXX0=