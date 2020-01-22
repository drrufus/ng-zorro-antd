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
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core';
var NzRateItemComponent = /** @class */ (function () {
    function NzRateItemComponent() {
        this.allowHalf = false;
        this.itemHover = new EventEmitter();
        this.itemClick = new EventEmitter();
    }
    /**
     * @param {?} isHalf
     * @return {?}
     */
    NzRateItemComponent.prototype.hoverRate = /**
     * @param {?} isHalf
     * @return {?}
     */
    function (isHalf) {
        this.itemHover.next(isHalf && this.allowHalf);
    };
    /**
     * @param {?} isHalf
     * @return {?}
     */
    NzRateItemComponent.prototype.clickRate = /**
     * @param {?} isHalf
     * @return {?}
     */
    function (isHalf) {
        this.itemClick.next(isHalf && this.allowHalf);
    };
    NzRateItemComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: '[nz-rate-item]',
                    exportAs: 'nzRateItem',
                    template: "<div class=\"ant-rate-star-second\"\r\n  (mouseover)=\"hoverRate(false); $event.stopPropagation();\"\r\n  (click)=\"clickRate(false);\">\r\n  <ng-template [ngTemplateOutlet]=\"character || defaultCharacter\"></ng-template>\r\n</div>\r\n<div class=\"ant-rate-star-first\"\r\n  (mouseover)=\"hoverRate(true); $event.stopPropagation();\"\r\n  (click)=\"clickRate(true);\">\r\n  <ng-template [ngTemplateOutlet]=\"character || defaultCharacter\"></ng-template>\r\n</div>\r\n\r\n<ng-template #defaultCharacter>\r\n  <i nz-icon\r\n    nzType=\"star\"\r\n    nzTheme=\"fill\"></i>\r\n</ng-template>\r\n"
                }] }
    ];
    NzRateItemComponent.propDecorators = {
        character: [{ type: Input }],
        allowHalf: [{ type: Input }],
        itemHover: [{ type: Output }],
        itemClick: [{ type: Output }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzRateItemComponent.prototype, "allowHalf", void 0);
    return NzRateItemComponent;
}());
export { NzRateItemComponent };
if (false) {
    /** @type {?} */
    NzRateItemComponent.prototype.character;
    /** @type {?} */
    NzRateItemComponent.prototype.allowHalf;
    /** @type {?} */
    NzRateItemComponent.prototype.itemHover;
    /** @type {?} */
    NzRateItemComponent.prototype.itemClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmF0ZS1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvcmF0ZS8iLCJzb3VyY2VzIjpbIm56LXJhdGUtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sV0FBVyxFQUNYLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQ7SUFBQTtRQVMyQixjQUFTLEdBQVksS0FBSyxDQUFDO1FBQ2pDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBQ3hDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0lBUzdELENBQUM7Ozs7O0lBUEMsdUNBQVM7Ozs7SUFBVCxVQUFVLE1BQWU7UUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7OztJQUVELHVDQUFTOzs7O0lBQVQsVUFBVSxNQUFlO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7Z0JBbkJGLFNBQVMsU0FBQztvQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSxZQUFZO29CQUN0Qiw4bEJBQTRDO2lCQUM3Qzs7OzRCQUVFLEtBQUs7NEJBQ0wsS0FBSzs0QkFDTCxNQUFNOzRCQUNOLE1BQU07O0lBRmtCO1FBQWYsWUFBWSxFQUFFOzswREFBNEI7SUFXdEQsMEJBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQWJZLG1CQUFtQjs7O0lBQzlCLHdDQUFzQzs7SUFDdEMsd0NBQW9EOztJQUNwRCx3Q0FBMkQ7O0lBQzNELHdDQUEyRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzZWxlY3RvcjogJ1tuei1yYXRlLWl0ZW1dJyxcclxuICBleHBvcnRBczogJ256UmF0ZUl0ZW0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1yYXRlLWl0ZW0uY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelJhdGVJdGVtQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBjaGFyYWN0ZXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhbGxvd0hhbGY6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgaXRlbUhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBpdGVtQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIGhvdmVyUmF0ZShpc0hhbGY6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuaXRlbUhvdmVyLm5leHQoaXNIYWxmICYmIHRoaXMuYWxsb3dIYWxmKTtcclxuICB9XHJcblxyXG4gIGNsaWNrUmF0ZShpc0hhbGY6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuaXRlbUNsaWNrLm5leHQoaXNIYWxmICYmIHRoaXMuYWxsb3dIYWxmKTtcclxuICB9XHJcbn1cclxuIl19