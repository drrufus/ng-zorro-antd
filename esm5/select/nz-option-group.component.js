/**
 * @fileoverview added by tsickle
 * Generated from: nz-option-group.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ContentChildren, Input, QueryList, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NzOptionComponent } from './nz-option.component';
var NzOptionGroupComponent = /** @class */ (function () {
    function NzOptionGroupComponent() {
        this.isLabelString = false;
    }
    Object.defineProperty(NzOptionGroupComponent.prototype, "nzLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return this.label;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.label = value;
            this.isLabelString = !(this.nzLabel instanceof TemplateRef);
        },
        enumerable: true,
        configurable: true
    });
    NzOptionGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-option-group',
                    exportAs: 'nzOptionGroup',
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "<ng-content></ng-content>"
                }] }
    ];
    NzOptionGroupComponent.propDecorators = {
        listOfNzOptionComponent: [{ type: ContentChildren, args: [NzOptionComponent,] }],
        nzLabel: [{ type: Input }]
    };
    return NzOptionGroupComponent;
}());
export { NzOptionGroupComponent };
if (false) {
    /** @type {?} */
    NzOptionGroupComponent.prototype.isLabelString;
    /** @type {?} */
    NzOptionGroupComponent.prototype.label;
    /** @type {?} */
    NzOptionGroupComponent.prototype.listOfNzOptionComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotb3B0aW9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc2VsZWN0LyIsInNvdXJjZXMiOlsibnotb3B0aW9uLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsS0FBSyxFQUNMLFNBQVMsRUFDVCxXQUFXLEVBQ1gsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTFEO0lBQUE7UUFRRSxrQkFBYSxHQUFHLEtBQUssQ0FBQztJQWF4QixDQUFDO0lBVEMsc0JBQ0ksMkNBQU87Ozs7UUFLWDtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7OztRQVJELFVBQ1ksS0FBaUM7WUFDM0MsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sWUFBWSxXQUFXLENBQUMsQ0FBQztRQUM5RCxDQUFDOzs7T0FBQTs7Z0JBaEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUUsZUFBZTtvQkFDekIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxxQ0FBK0M7aUJBQ2hEOzs7MENBSUUsZUFBZSxTQUFDLGlCQUFpQjswQkFFakMsS0FBSzs7SUFTUiw2QkFBQztDQUFBLEFBckJELElBcUJDO1NBZFksc0JBQXNCOzs7SUFDakMsK0NBQXNCOztJQUN0Qix1Q0FBa0M7O0lBQ2xDLHlEQUEwRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIElucHV0LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOek9wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbnotb3B0aW9uLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LW9wdGlvbi1ncm91cCcsXHJcbiAgZXhwb3J0QXM6ICduek9wdGlvbkdyb3VwJyxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1vcHRpb24tZ3JvdXAuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOek9wdGlvbkdyb3VwQ29tcG9uZW50IHtcclxuICBpc0xhYmVsU3RyaW5nID0gZmFsc2U7XHJcbiAgbGFiZWw6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oTnpPcHRpb25Db21wb25lbnQpIGxpc3RPZk56T3B0aW9uQ29tcG9uZW50OiBRdWVyeUxpc3Q8TnpPcHRpb25Db21wb25lbnQ+O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekxhYmVsKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xyXG4gICAgdGhpcy5sYWJlbCA9IHZhbHVlO1xyXG4gICAgdGhpcy5pc0xhYmVsU3RyaW5nID0gISh0aGlzLm56TGFiZWwgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZik7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpMYWJlbCgpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5sYWJlbDtcclxuICB9XHJcbn1cclxuIl19