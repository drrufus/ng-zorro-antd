/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { NzUpdateHostClassService } from 'ng-zorro-antd/core';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
var _c0 = ["*"];
var NzButtonGroupComponent = /** @class */ (function () {
    function NzButtonGroupComponent(nzUpdateHostClassService, elementRef) {
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.elementRef = elementRef;
        this.isInDropdown = false;
    }
    Object.defineProperty(NzButtonGroupComponent.prototype, "nzSize", {
        get: function () {
            return this._size;
        },
        set: function (value) {
            this._size = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    NzButtonGroupComponent.prototype.setClassMap = function () {
        var _a;
        var prefixCls = 'ant-btn-group';
        var classMap = (_a = {},
            _a[prefixCls] = true,
            _a["ant-dropdown-button"] = this.isInDropdown,
            _a[prefixCls + "-lg"] = this.nzSize === 'large',
            _a[prefixCls + "-sm"] = this.nzSize === 'small',
            _a);
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, classMap);
    };
    NzButtonGroupComponent.prototype.ngOnInit = function () {
        this.setClassMap();
    };
    /** @nocollapse */ NzButtonGroupComponent.ɵfac = function NzButtonGroupComponent_Factory(t) { return new (t || NzButtonGroupComponent)(i0.ɵɵdirectiveInject(i1.NzUpdateHostClassService), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    /** @nocollapse */ NzButtonGroupComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzButtonGroupComponent, selectors: [["nz-button-group"]], inputs: { nzSize: "nzSize" }, exportAs: ["nzButtonGroup"], features: [i0.ɵɵProvidersFeature([NzUpdateHostClassService])], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzButtonGroupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    return NzButtonGroupComponent;
}());
export { NzButtonGroupComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzButtonGroupComponent, [{
        type: Component,
        args: [{
                selector: 'nz-button-group',
                exportAs: 'nzButtonGroup',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                providers: [NzUpdateHostClassService],
                templateUrl: './nz-button-group.component.html'
            }]
    }], function () { return [{ type: i1.NzUpdateHostClassService }, { type: i0.ElementRef }]; }, { nzSize: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYnV0dG9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvYnV0dG9uLyIsInNvdXJjZXMiOlsibnotYnV0dG9uLWdyb3VwLmNvbXBvbmVudC50cyIsIm56LWJ1dHRvbi1ncm91cC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakgsT0FBTyxFQUFpQix3QkFBd0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBRTdFO0lBdUJFLGdDQUFvQix3QkFBa0QsRUFBVSxVQUFzQjtRQUFsRiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQVp0RyxpQkFBWSxHQUFHLEtBQUssQ0FBQztJQVlvRixDQUFDO0lBVjFHLHNCQUNJLDBDQUFNO2FBRFY7WUFFRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQzthQUVELFVBQVcsS0FBb0I7WUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JCLENBQUM7OztPQUxBO0lBU0QsNENBQVcsR0FBWDs7UUFDRSxJQUFNLFNBQVMsR0FBRyxlQUFlLENBQUM7UUFDbEMsSUFBTSxRQUFRO1lBQ1osR0FBQyxTQUFTLElBQUcsSUFBSTtZQUNqQixHQUFDLHFCQUFxQixJQUFHLElBQUksQ0FBQyxZQUFZO1lBQzFDLEdBQUksU0FBUyxRQUFLLElBQUcsSUFBSSxDQUFDLE1BQU0sS0FBSyxPQUFPO1lBQzVDLEdBQUksU0FBUyxRQUFLLElBQUcsSUFBSSxDQUFDLE1BQU0sS0FBSyxPQUFPO2VBQzdDLENBQUM7UUFDRixJQUFJLENBQUMsd0JBQXdCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUFFRCx5Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Z0dBN0JVLHNCQUFzQjsrREFBdEIsc0JBQXNCLGdJQUh0QixDQUFDLHdCQUF3QixDQUFDOztZQ2pCdkMsa0JBQVk7O2lDREFaO0NBa0RDLEFBdkNELElBdUNDO1NBOUJZLHNCQUFzQjtrREFBdEIsc0JBQXNCO2NBVGxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUUsZUFBZTtnQkFDekIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztnQkFDckMsV0FBVyxFQUFFLGtDQUFrQzthQUNoRDs7a0JBS0UsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpTaXplTERTVHlwZSwgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotYnV0dG9uLWdyb3VwJyxcclxuICBleHBvcnRBczogJ256QnV0dG9uR3JvdXAnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgcHJvdmlkZXJzOiBbTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotYnV0dG9uLWdyb3VwLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpCdXR0b25Hcm91cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcHJpdmF0ZSBfc2l6ZTogTnpTaXplTERTVHlwZTtcclxuICBpc0luRHJvcGRvd24gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgbnpTaXplKCk6IE56U2l6ZUxEU1R5cGUge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NpemU7XHJcbiAgfVxyXG5cclxuICBzZXQgbnpTaXplKHZhbHVlOiBOelNpemVMRFNUeXBlKSB7XHJcbiAgICB0aGlzLl9zaXplID0gdmFsdWU7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XHJcblxyXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgY29uc3QgcHJlZml4Q2xzID0gJ2FudC1idG4tZ3JvdXAnO1xyXG4gICAgY29uc3QgY2xhc3NNYXAgPSB7XHJcbiAgICAgIFtwcmVmaXhDbHNdOiB0cnVlLFxyXG4gICAgICBbYGFudC1kcm9wZG93bi1idXR0b25gXTogdGhpcy5pc0luRHJvcGRvd24sXHJcbiAgICAgIFtgJHtwcmVmaXhDbHN9LWxnYF06IHRoaXMubnpTaXplID09PSAnbGFyZ2UnLFxyXG4gICAgICBbYCR7cHJlZml4Q2xzfS1zbWBdOiB0aGlzLm56U2l6ZSA9PT0gJ3NtYWxsJ1xyXG4gICAgfTtcclxuICAgIHRoaXMubnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgY2xhc3NNYXApO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgfVxyXG59XHJcbiIsIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuIl19