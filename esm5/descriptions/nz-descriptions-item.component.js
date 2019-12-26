/**
 * @fileoverview added by tsickle
 * Generated from: nz-descriptions-item.component.ts
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
import { ChangeDetectionStrategy, Component, Input, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { InputNumber } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
var NzDescriptionsItemComponent = /** @class */ (function () {
    function NzDescriptionsItemComponent() {
        this.nzSpan = 1;
        this.nzTitle = '';
        this.inputChange$ = new Subject();
    }
    /**
     * @return {?}
     */
    NzDescriptionsItemComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.inputChange$.next();
    };
    /**
     * @return {?}
     */
    NzDescriptionsItemComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.inputChange$.complete();
    };
    NzDescriptionsItemComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-descriptions-item',
                    template: "<!-- Use a template to wrap contents so contents wouldn't be displayed. -->\r\n<ng-template>\r\n  <ng-content></ng-content>\r\n</ng-template>\r\n",
                    exportAs: 'nzDescriptionsItem',
                    preserveWhitespaces: false
                }] }
    ];
    NzDescriptionsItemComponent.propDecorators = {
        content: [{ type: ViewChild, args: [TemplateRef, { static: true },] }],
        nzSpan: [{ type: Input }],
        nzTitle: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], NzDescriptionsItemComponent.prototype, "nzSpan", void 0);
    return NzDescriptionsItemComponent;
}());
export { NzDescriptionsItemComponent };
if (false) {
    /** @type {?} */
    NzDescriptionsItemComponent.prototype.content;
    /** @type {?} */
    NzDescriptionsItemComponent.prototype.nzSpan;
    /** @type {?} */
    NzDescriptionsItemComponent.prototype.nzTitle;
    /** @type {?} */
    NzDescriptionsItemComponent.prototype.inputChange$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZGVzY3JpcHRpb25zLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9kZXNjcmlwdGlvbnMvIiwic291cmNlcyI6WyJuei1kZXNjcmlwdGlvbnMtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFHTCxXQUFXLEVBQ1gsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQjtJQUFBO1FBVzBCLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFDMUIsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUVyQixpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7SUFTOUMsQ0FBQzs7OztJQVBDLGlEQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELGlEQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDL0IsQ0FBQzs7Z0JBdEJGLFNBQVMsU0FBQztvQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLDZKQUFvRDtvQkFDcEQsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsbUJBQW1CLEVBQUUsS0FBSztpQkFDM0I7OzswQkFFRSxTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTt5QkFFdkMsS0FBSzswQkFDTCxLQUFLOztJQURrQjtRQUFkLFdBQVcsRUFBRTs7K0RBQVk7SUFZckMsa0NBQUM7Q0FBQSxBQXZCRCxJQXVCQztTQWZZLDJCQUEyQjs7O0lBQ3RDLDhDQUFxRTs7SUFFckUsNkNBQW1DOztJQUNuQyw4Q0FBOEI7O0lBRTlCLG1EQUE0QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IElucHV0TnVtYmVyIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzZWxlY3RvcjogJ256LWRlc2NyaXB0aW9ucy1pdGVtJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotZGVzY3JpcHRpb25zLWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxyXG4gIGV4cG9ydEFzOiAnbnpEZXNjcmlwdGlvbnNJdGVtJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpEZXNjcmlwdGlvbnNJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYsIHsgc3RhdGljOiB0cnVlIH0pIGNvbnRlbnQ6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBuelNwYW4gPSAxO1xyXG4gIEBJbnB1dCgpIG56VGl0bGU6IHN0cmluZyA9ICcnO1xyXG5cclxuICByZWFkb25seSBpbnB1dENoYW5nZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cclxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5wdXRDaGFuZ2UkLm5leHQoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbnB1dENoYW5nZSQuY29tcGxldGUoKTtcclxuICB9XHJcbn1cclxuIl19