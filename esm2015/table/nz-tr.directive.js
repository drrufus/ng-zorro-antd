/**
 * @fileoverview added by tsickle
 * Generated from: nz-tr.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, ElementRef, Host, Input, Optional, Renderer2 } from '@angular/core';
import { toBoolean } from 'ng-zorro-antd/core';
import { NzTableComponent } from './nz-table.component';
export class NzTrDirective {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} nzTableComponent
     */
    constructor(elementRef, renderer, nzTableComponent) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.nzTableComponent = nzTableComponent;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzExpand(value) {
        if (toBoolean(value)) {
            this.renderer.removeStyle(this.elementRef.nativeElement, 'display');
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-table-expanded-row');
        }
        else {
            this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'none');
            this.renderer.removeClass(this.elementRef.nativeElement, 'ant-table-expanded-row');
        }
    }
}
NzTrDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: 'tr:not([mat-row]):not([mat-header-row])',
                host: {
                    '[class.ant-table-row]': 'nzTableComponent'
                }
            },] }
];
/** @nocollapse */
NzTrDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: NzTableComponent, decorators: [{ type: Host }, { type: Optional }] }
];
NzTrDirective.propDecorators = {
    nzExpand: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzTrDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzTrDirective.prototype.renderer;
    /** @type {?} */
    NzTrDirective.prototype.nzTableComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90YWJsZS8iLCJzb3VyY2VzIjpbIm56LXRyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBU3hELE1BQU0sT0FBTyxhQUFhOzs7Ozs7SUFZeEIsWUFDVSxVQUFzQixFQUN0QixRQUFtQixFQUNBLGdCQUFrQztRQUZyRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDQSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQzVELENBQUM7Ozs7O0lBZkosSUFDSSxRQUFRLENBQUMsS0FBYztRQUN6QixJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUNwRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO1NBQ2pGO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDekUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztTQUNwRjtJQUNILENBQUM7OztZQWpCRixTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSx5Q0FBeUM7Z0JBQ25ELElBQUksRUFBRTtvQkFDSix1QkFBdUIsRUFBRSxrQkFBa0I7aUJBQzVDO2FBQ0Y7Ozs7WUFWbUIsVUFBVTtZQUF5QixTQUFTO1lBRXZELGdCQUFnQix1QkF3QnBCLElBQUksWUFBSSxRQUFROzs7dUJBZGxCLEtBQUs7Ozs7Ozs7SUFZSixtQ0FBOEI7Ozs7O0lBQzlCLGlDQUEyQjs7SUFDM0IseUNBQTZEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3QsIElucHV0LCBPcHRpb25hbCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56VGFibGVDb21wb25lbnQgfSBmcm9tICcuL256LXRhYmxlLmNvbXBvbmVudCc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICd0cjpub3QoW21hdC1yb3ddKTpub3QoW21hdC1oZWFkZXItcm93XSknLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LXRhYmxlLXJvd10nOiAnbnpUYWJsZUNvbXBvbmVudCdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelRyRGlyZWN0aXZlIHtcclxuICBASW5wdXQoKVxyXG4gIHNldCBuekV4cGFuZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgaWYgKHRvQm9vbGVhbih2YWx1ZSkpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC10YWJsZS1leHBhbmRlZC1yb3cnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC10YWJsZS1leHBhbmRlZC1yb3cnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbnpUYWJsZUNvbXBvbmVudDogTnpUYWJsZUNvbXBvbmVudFxyXG4gICkge31cclxufVxyXG4iXX0=