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
import { forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Renderer2, ViewEncapsulation } from '@angular/core';
import { FocusMonitor } from '@angular/cdk/a11y';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzRadioComponent } from './nz-radio.component';
export class NzRadioButtonComponent extends NzRadioComponent {
    /* tslint:disable-next-line:no-any */
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} cdr
     * @param {?} focusMonitor
     */
    constructor(elementRef, renderer, cdr, focusMonitor) {
        super(elementRef, renderer, cdr, focusMonitor);
        renderer.removeClass(elementRef.nativeElement, 'ant-radio-wrapper');
        renderer.addClass(elementRef.nativeElement, 'ant-radio-button-wrapper');
    }
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
                        () => NzRadioComponent)),
                        multi: true
                    },
                    {
                        provide: NzRadioComponent,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => NzRadioButtonComponent))
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
NzRadioButtonComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: FocusMonitor }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmFkaW8tYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvcmFkaW8vIiwic291cmNlcyI6WyJuei1yYWRpby1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLFVBQVUsRUFDVix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUF5QnhELE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxnQkFBZ0I7Ozs7Ozs7O0lBRTFELFlBQVksVUFBc0IsRUFBRSxRQUFtQixFQUFFLEdBQXNCLEVBQUUsWUFBMEI7UUFDekcsS0FBSyxDQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQy9DLFFBQVEsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3BFLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSwwQkFBMEIsQ0FBQyxDQUFDO0lBQzFFLENBQUM7OztZQTdCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVTs7O3dCQUFDLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixFQUFDO3dCQUMvQyxLQUFLLEVBQUUsSUFBSTtxQkFDWjtvQkFDRDt3QkFDRSxPQUFPLEVBQUUsZ0JBQWdCO3dCQUN6QixXQUFXLEVBQUUsVUFBVTs7O3dCQUFDLEdBQUcsRUFBRSxDQUFDLHNCQUFzQixFQUFDO3FCQUN0RDtpQkFDRjtnQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLG9hQUErQztnQkFDL0MsSUFBSSxFQUFFO29CQUNKLDBDQUEwQyxFQUFFLFNBQVM7b0JBQ3JELDJDQUEyQyxFQUFFLFlBQVk7aUJBQzFEO2FBQ0Y7Ozs7WUEvQkMsVUFBVTtZQUNWLFNBQVM7WUFIVCxpQkFBaUI7WUFPVixZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIGZvcndhcmRSZWYsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBGb2N1c01vbml0b3IgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XHJcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOelJhZGlvQ29tcG9uZW50IH0gZnJvbSAnLi9uei1yYWRpby5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdbbnotcmFkaW8tYnV0dG9uXScsXHJcbiAgZXhwb3J0QXM6ICduelJhZGlvQnV0dG9uJyxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE56UmFkaW9Db21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTnpSYWRpb0NvbXBvbmVudCxcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnpSYWRpb0J1dHRvbkNvbXBvbmVudClcclxuICAgIH1cclxuICBdLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXJhZGlvLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtcmFkaW8tYnV0dG9uLXdyYXBwZXItY2hlY2tlZF0nOiAnY2hlY2tlZCcsXHJcbiAgICAnW2NsYXNzLmFudC1yYWRpby1idXR0b24td3JhcHBlci1kaXNhYmxlZF0nOiAnbnpEaXNhYmxlZCdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelJhZGlvQnV0dG9uQ29tcG9uZW50IGV4dGVuZHMgTnpSYWRpb0NvbXBvbmVudCB7XHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIGZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yKSB7XHJcbiAgICBzdXBlcihlbGVtZW50UmVmLCByZW5kZXJlciwgY2RyLCBmb2N1c01vbml0b3IpO1xyXG4gICAgcmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LXJhZGlvLXdyYXBwZXInKTtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1yYWRpby1idXR0b24td3JhcHBlcicpO1xyXG4gIH1cclxufVxyXG4iXX0=