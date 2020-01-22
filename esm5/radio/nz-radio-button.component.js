/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Renderer2, ViewEncapsulation } from '@angular/core';
import { FocusMonitor } from '@angular/cdk/a11y';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzRadioComponent } from './nz-radio.component';
var NzRadioButtonComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NzRadioButtonComponent, _super);
    /* tslint:disable-next-line:no-any */
    function NzRadioButtonComponent(elementRef, renderer, cdr, focusMonitor) {
        var _this = _super.call(this, elementRef, renderer, cdr, focusMonitor) || this;
        renderer.removeClass(elementRef.nativeElement, 'ant-radio-wrapper');
        renderer.addClass(elementRef.nativeElement, 'ant-radio-button-wrapper');
        return _this;
    }
    NzRadioButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: '[nz-radio-button]',
                    exportAs: 'nzRadioButton',
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return NzRadioComponent; })),
                            multi: true
                        },
                        {
                            provide: NzRadioComponent,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return NzRadioButtonComponent; }))
                        }
                    ],
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    template: "<span class=\"ant-radio-button\" [class.ant-radio-button-checked]=\"checked\" [class.ant-radio-button-disabled]=\"nzDisabled\">\r\n  <input type=\"radio\" #inputElement class=\"ant-radio-button-input\" [disabled]=\"nzDisabled\" [checked]=\"checked\" [attr.name]=\"name\" [attr.aria-checked]=\"checked\">\r\n  <span class=\"ant-radio-button-inner\"></span>\r\n</span>\r\n<span><ng-content></ng-content></span>",
                    host: {
                        '[class.ant-radio-button-wrapper-checked]': 'checked',
                        '[class.ant-radio-button-wrapper-disabled]': 'nzDisabled'
                    }
                }] }
    ];
    /** @nocollapse */
    NzRadioButtonComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: FocusMonitor }
    ]; };
    return NzRadioButtonComponent;
}(NzRadioComponent));
export { NzRadioButtonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmFkaW8tYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvcmFkaW8vIiwic291cmNlcyI6WyJuei1yYWRpby1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCxVQUFVLEVBQ1YsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXhEO0lBdUI0QyxrREFBZ0I7SUFDMUQscUNBQXFDO0lBQ3JDLGdDQUFZLFVBQXNCLEVBQUUsUUFBbUIsRUFBRSxHQUFzQixFQUFFLFlBQTBCO1FBQTNHLFlBQ0Usa0JBQU0sVUFBVSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsWUFBWSxDQUFDLFNBRy9DO1FBRkMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLG1CQUFtQixDQUFDLENBQUM7UUFDcEUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLDBCQUEwQixDQUFDLENBQUM7O0lBQzFFLENBQUM7O2dCQTdCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVTs7OzRCQUFDLGNBQU0sT0FBQSxnQkFBZ0IsRUFBaEIsQ0FBZ0IsRUFBQzs0QkFDL0MsS0FBSyxFQUFFLElBQUk7eUJBQ1o7d0JBQ0Q7NEJBQ0UsT0FBTyxFQUFFLGdCQUFnQjs0QkFDekIsV0FBVyxFQUFFLFVBQVU7Ozs0QkFBQyxjQUFNLE9BQUEsc0JBQXNCLEVBQXRCLENBQXNCLEVBQUM7eUJBQ3REO3FCQUNGO29CQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsb2FBQStDO29CQUMvQyxJQUFJLEVBQUU7d0JBQ0osMENBQTBDLEVBQUUsU0FBUzt3QkFDckQsMkNBQTJDLEVBQUUsWUFBWTtxQkFDMUQ7aUJBQ0Y7Ozs7Z0JBL0JDLFVBQVU7Z0JBQ1YsU0FBUztnQkFIVCxpQkFBaUI7Z0JBT1YsWUFBWTs7SUFrQ3JCLDZCQUFDO0NBQUEsQUE5QkQsQ0F1QjRDLGdCQUFnQixHQU8zRDtTQVBZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBmb3J3YXJkUmVmLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRm9jdXNNb25pdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xyXG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTnpSYWRpb0NvbXBvbmVudCB9IGZyb20gJy4vbnotcmFkaW8uY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnW256LXJhZGlvLWJ1dHRvbl0nLFxyXG4gIGV4cG9ydEFzOiAnbnpSYWRpb0J1dHRvbicsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOelJhZGlvQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE56UmFkaW9Db21wb25lbnQsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE56UmFkaW9CdXR0b25Db21wb25lbnQpXHJcbiAgICB9XHJcbiAgXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1yYWRpby1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LXJhZGlvLWJ1dHRvbi13cmFwcGVyLWNoZWNrZWRdJzogJ2NoZWNrZWQnLFxyXG4gICAgJ1tjbGFzcy5hbnQtcmFkaW8tYnV0dG9uLXdyYXBwZXItZGlzYWJsZWRdJzogJ256RGlzYWJsZWQnXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpSYWRpb0J1dHRvbkNvbXBvbmVudCBleHRlbmRzIE56UmFkaW9Db21wb25lbnQge1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBmb2N1c01vbml0b3I6IEZvY3VzTW9uaXRvcikge1xyXG4gICAgc3VwZXIoZWxlbWVudFJlZiwgcmVuZGVyZXIsIGNkciwgZm9jdXNNb25pdG9yKTtcclxuICAgIHJlbmRlcmVyLnJlbW92ZUNsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1yYWRpby13cmFwcGVyJyk7XHJcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtcmFkaW8tYnV0dG9uLXdyYXBwZXInKTtcclxuICB9XHJcbn1cclxuIl19