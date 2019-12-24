import { __extends } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, forwardRef, Renderer2, ViewEncapsulation } from '@angular/core';
import { FocusMonitor } from '@angular/cdk/a11y';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzRadioComponent } from './nz-radio.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/a11y";
var _c0 = ["nz-radio-button", ""];
var _c1 = ["*"];
var NzRadioButtonComponent = /** @class */ (function (_super) {
    __extends(NzRadioButtonComponent, _super);
    /* tslint:disable-next-line:no-any */
    function NzRadioButtonComponent(elementRef, renderer, cdr, focusMonitor) {
        var _this = _super.call(this, elementRef, renderer, cdr, focusMonitor) || this;
        renderer.removeClass(elementRef.nativeElement, 'ant-radio-wrapper');
        renderer.addClass(elementRef.nativeElement, 'ant-radio-button-wrapper');
        return _this;
    }
    /** @nocollapse */ NzRadioButtonComponent.ɵfac = function NzRadioButtonComponent_Factory(t) { return new (t || NzRadioButtonComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.FocusMonitor)); };
    /** @nocollapse */ NzRadioButtonComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzRadioButtonComponent, selectors: [["", "nz-radio-button", ""]], hostBindings: function NzRadioButtonComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            i0.ɵɵallocHostVars(2);
        } if (rf & 2) {
            i0.ɵɵclassProp("ant-radio-button-wrapper-checked", ctx.checked)("ant-radio-button-wrapper-disabled", ctx.nzDisabled);
        } }, exportAs: ["nzRadioButton"], features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef((function () { return NzRadioComponent; })),
                    multi: true
                },
                {
                    provide: NzRadioComponent,
                    useExisting: forwardRef((function () { return NzRadioButtonComponent; }))
                }
            ]), i0.ɵɵInheritDefinitionFeature], attrs: _c0, ngContentSelectors: _c1, decls: 6, vars: 5, consts: [[1, "ant-radio-button"], ["type", "radio", 1, "ant-radio-button-input", 3, "disabled", "checked"], ["inputElement", ""], [1, "ant-radio-button-inner"]], template: function NzRadioButtonComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "span", 0);
            i0.ɵɵelement(1, "input", 1, 2);
            i0.ɵɵelement(3, "span", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "span");
            i0.ɵɵprojection(5);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassProp("ant-radio-button-checked", ctx.checked)("ant-radio-button-disabled", ctx.nzDisabled);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("disabled", ctx.nzDisabled)("checked", ctx.checked);
            i0.ɵɵattribute("name", ctx.name);
        } }, encapsulation: 2, changeDetection: 0 });
    return NzRadioButtonComponent;
}(NzRadioComponent));
export { NzRadioButtonComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzRadioButtonComponent, [{
        type: Component,
        args: [{
                selector: '[nz-radio-button]',
                exportAs: 'nzRadioButton',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((function () { return NzRadioComponent; })),
                        multi: true
                    },
                    {
                        provide: NzRadioComponent,
                        useExisting: forwardRef((function () { return NzRadioButtonComponent; }))
                    }
                ],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                templateUrl: './nz-radio-button.component.html',
                host: {
                    '[class.ant-radio-button-wrapper-checked]': 'checked',
                    '[class.ant-radio-button-wrapper-disabled]': 'nzDisabled'
                }
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }, { type: i1.FocusMonitor }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmFkaW8tYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvcmFkaW8vIiwic291cmNlcyI6WyJuei1yYWRpby1idXR0b24uY29tcG9uZW50LnRzIiwibnotcmFkaW8tYnV0dG9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTVJLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7QUFFeEQ7SUF1QjRDLDBDQUFnQjtJQUMxRCxxQ0FBcUM7SUFDckMsZ0NBQVksVUFBc0IsRUFBRSxRQUFtQixFQUFFLEdBQXNCLEVBQUUsWUFBMEI7UUFBM0csWUFDRSxrQkFBTSxVQUFVLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxZQUFZLENBQUMsU0FHL0M7UUFGQyxRQUFRLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztRQUNwRSxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsMEJBQTBCLENBQUMsQ0FBQzs7SUFDMUUsQ0FBQztnR0FOVSxzQkFBc0I7K0RBQXRCLHNCQUFzQjs7OzsyRUFwQnRCO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxpQkFBaUI7b0JBQzFCLFdBQVcsRUFBRSxVQUFVLEVBQUMsY0FBTSxPQUFBLGdCQUFnQixFQUFoQixDQUFnQixFQUFDO29CQUMvQyxLQUFLLEVBQUUsSUFBSTtpQkFDWjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsZ0JBQWdCO29CQUN6QixXQUFXLEVBQUUsVUFBVSxFQUFDLGNBQU0sT0FBQSxzQkFBc0IsRUFBdEIsQ0FBc0IsRUFBQztpQkFDdEQ7YUFDRjs7WUMzQkgsK0JBS0U7WUFBQSw4QkFRQTtZQUFBLDBCQUE0QztZQUM5QyxpQkFBTztZQUNQLDRCQUFNO1lBQUEsa0JBQVk7WUFBYSxpQkFBTzs7WUFicEMsdURBQTBDLDZDQUFBO1lBT3hDLGVBQXVCO1lBQXZCLHlDQUF1Qix3QkFBQTtZQUV2QixnQ0FBa0I7O2lDRFh0QjtDQTRDQyxBQTlCRCxDQXVCNEMsZ0JBQWdCLEdBTzNEO1NBUFksc0JBQXNCO2tEQUF0QixzQkFBc0I7Y0F2QmxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUUsZUFBZTtnQkFDekIsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVLEVBQUMsY0FBTSxPQUFBLGdCQUFnQixFQUFoQixDQUFnQixFQUFDO3dCQUMvQyxLQUFLLEVBQUUsSUFBSTtxQkFDWjtvQkFDRDt3QkFDRSxPQUFPLEVBQUUsZ0JBQWdCO3dCQUN6QixXQUFXLEVBQUUsVUFBVSxFQUFDLGNBQU0sT0FBQSxzQkFBc0IsRUFBdEIsQ0FBc0IsRUFBQztxQkFDdEQ7aUJBQ0Y7Z0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixXQUFXLEVBQUUsa0NBQWtDO2dCQUMvQyxJQUFJLEVBQUU7b0JBQ0osMENBQTBDLEVBQUUsU0FBUztvQkFDckQsMkNBQTJDLEVBQUUsWUFBWTtpQkFDMUQ7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIGZvcndhcmRSZWYsIFJlbmRlcmVyMiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEZvY3VzTW9uaXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcclxuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE56UmFkaW9Db21wb25lbnQgfSBmcm9tICcuL256LXJhZGlvLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1tuei1yYWRpby1idXR0b25dJyxcclxuICBleHBvcnRBczogJ256UmFkaW9CdXR0b24nLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnpSYWRpb0NvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOelJhZGlvQ29tcG9uZW50LFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOelJhZGlvQnV0dG9uQ29tcG9uZW50KVxyXG4gICAgfVxyXG4gIF0sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotcmFkaW8tYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC1yYWRpby1idXR0b24td3JhcHBlci1jaGVja2VkXSc6ICdjaGVja2VkJyxcclxuICAgICdbY2xhc3MuYW50LXJhZGlvLWJ1dHRvbi13cmFwcGVyLWRpc2FibGVkXSc6ICduekRpc2FibGVkJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56UmFkaW9CdXR0b25Db21wb25lbnQgZXh0ZW5kcyBOelJhZGlvQ29tcG9uZW50IHtcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgZm9jdXNNb25pdG9yOiBGb2N1c01vbml0b3IpIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWYsIHJlbmRlcmVyLCBjZHIsIGZvY3VzTW9uaXRvcik7XHJcbiAgICByZW5kZXJlci5yZW1vdmVDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtcmFkaW8td3JhcHBlcicpO1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LXJhZGlvLWJ1dHRvbi13cmFwcGVyJyk7XHJcbiAgfVxyXG59XHJcbiIsIjxzcGFuXHJcbiAgY2xhc3M9XCJhbnQtcmFkaW8tYnV0dG9uXCJcclxuICBbY2xhc3MuYW50LXJhZGlvLWJ1dHRvbi1jaGVja2VkXT1cImNoZWNrZWRcIlxyXG4gIFtjbGFzcy5hbnQtcmFkaW8tYnV0dG9uLWRpc2FibGVkXT1cIm56RGlzYWJsZWRcIlxyXG4+XHJcbiAgPGlucHV0XHJcbiAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgI2lucHV0RWxlbWVudFxyXG4gICAgY2xhc3M9XCJhbnQtcmFkaW8tYnV0dG9uLWlucHV0XCJcclxuICAgIFtkaXNhYmxlZF09XCJuekRpc2FibGVkXCJcclxuICAgIFtjaGVja2VkXT1cImNoZWNrZWRcIlxyXG4gICAgW2F0dHIubmFtZV09XCJuYW1lXCJcclxuICAvPlxyXG4gIDxzcGFuIGNsYXNzPVwiYW50LXJhZGlvLWJ1dHRvbi1pbm5lclwiPjwvc3Bhbj5cclxuPC9zcGFuPlxyXG48c3Bhbj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9zcGFuPlxyXG4iXX0=