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
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { isNotNil, InputBoolean, NzUpdateHostClassService } from 'ng-zorro-antd/core';
var NzTdComponent = /** @class */ (function () {
    function NzTdComponent(elementRef, nzUpdateHostClassService) {
        this.elementRef = elementRef;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.nzChecked = false;
        this.nzDisabled = false;
        this.nzIndeterminate = false;
        this.nzExpand = false;
        this.nzShowExpand = false;
        this.nzShowCheckbox = false;
        this.nzBreakWord = false;
        this.nzCheckedChange = new EventEmitter();
        this.nzExpandChange = new EventEmitter();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    NzTdComponent.prototype.expandChange = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.stopPropagation();
        this.nzExpand = !this.nzExpand;
        this.nzExpandChange.emit(this.nzExpand);
    };
    /**
     * @return {?}
     */
    NzTdComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, (_a = {},
            _a["ant-table-row-expand-icon-cell"] = this.nzShowExpand && !isNotNil(this.nzIndentSize),
            _a["ant-table-selection-column"] = this.nzShowCheckbox,
            _a["ant-table-td-left-sticky"] = isNotNil(this.nzLeft),
            _a["ant-table-td-right-sticky"] = isNotNil(this.nzRight),
            _a));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzTdComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzIndentSize || changes.nzShowExpand || changes.nzShowCheckbox || changes.nzRight || changes.nzLeft) {
            this.setClassMap();
        }
    };
    NzTdComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'td:not(.nz-disable-td):not([mat-cell])',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [NzUpdateHostClassService],
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    template: "<span class=\"ant-table-row-indent\" *ngIf=\"nzIndentSize >= 0\" [style.padding-left.px]=\"nzIndentSize\"></span>\r\n<label *ngIf=\"nzShowCheckbox\"\r\n  nz-checkbox\r\n  [nzDisabled]=\"nzDisabled\"\r\n  [(ngModel)]=\"nzChecked\"\r\n  [nzIndeterminate]=\"nzIndeterminate\"\r\n  (ngModelChange)=\"nzCheckedChange.emit($event)\">\r\n</label>\r\n<span *ngIf=\"!nzShowExpand && nzIndentSize >= 0\"\r\n  class=\"ant-table-row-expand-icon ant-table-row-spaced\">\r\n</span>\r\n<span *ngIf=\"nzShowExpand\"\r\n  class=\"ant-table-row-expand-icon\"\r\n  [class.ant-table-row-expanded]=\"nzExpand\"\r\n  [class.ant-table-row-collapsed]=\"!nzExpand\"\r\n  (click)=\"expandChange($event)\">\r\n</span>\r\n<ng-content></ng-content>",
                    host: {
                        '[style.left]': 'nzLeft',
                        '[style.right]': 'nzRight',
                        '[style.text-align]': 'nzAlign',
                        '[style.word-break]': "nzBreakWord ? 'break-all' : ''"
                    }
                }] }
    ];
    /** @nocollapse */
    NzTdComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NzUpdateHostClassService }
    ]; };
    NzTdComponent.propDecorators = {
        nzChecked: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzIndeterminate: [{ type: Input }],
        nzLeft: [{ type: Input }],
        nzRight: [{ type: Input }],
        nzAlign: [{ type: Input }],
        nzIndentSize: [{ type: Input }],
        nzExpand: [{ type: Input }],
        nzShowExpand: [{ type: Input }],
        nzShowCheckbox: [{ type: Input }],
        nzBreakWord: [{ type: Input }],
        nzCheckedChange: [{ type: Output }],
        nzExpandChange: [{ type: Output }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTdComponent.prototype, "nzExpand", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTdComponent.prototype, "nzShowExpand", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTdComponent.prototype, "nzShowCheckbox", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTdComponent.prototype, "nzBreakWord", void 0);
    return NzTdComponent;
}());
export { NzTdComponent };
if (false) {
    /** @type {?} */
    NzTdComponent.prototype.nzChecked;
    /** @type {?} */
    NzTdComponent.prototype.nzDisabled;
    /** @type {?} */
    NzTdComponent.prototype.nzIndeterminate;
    /** @type {?} */
    NzTdComponent.prototype.nzLeft;
    /** @type {?} */
    NzTdComponent.prototype.nzRight;
    /** @type {?} */
    NzTdComponent.prototype.nzAlign;
    /** @type {?} */
    NzTdComponent.prototype.nzIndentSize;
    /** @type {?} */
    NzTdComponent.prototype.nzExpand;
    /** @type {?} */
    NzTdComponent.prototype.nzShowExpand;
    /** @type {?} */
    NzTdComponent.prototype.nzShowCheckbox;
    /** @type {?} */
    NzTdComponent.prototype.nzBreakWord;
    /** @type {?} */
    NzTdComponent.prototype.nzCheckedChange;
    /** @type {?} */
    NzTdComponent.prototype.nzExpandChange;
    /**
     * @type {?}
     * @private
     */
    NzTdComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzTdComponent.prototype.nzUpdateHostClassService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90YWJsZS8iLCJzb3VyY2VzIjpbIm56LXRkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBRU4saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdEY7SUE2Q0UsdUJBQW9CLFVBQXNCLEVBQVUsd0JBQWtEO1FBQWxGLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBN0I3RixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFLUixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQzFCLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUM5QyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7SUFpQnlDLENBQUM7Ozs7O0lBZjFHLG9DQUFZOzs7O0lBQVosVUFBYSxDQUFRO1FBQ25CLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUMvQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7OztJQUVELG1DQUFXOzs7SUFBWDs7UUFDRSxJQUFJLENBQUMsd0JBQXdCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYTtZQUN6RSxHQUFDLGdDQUFnQyxJQUFHLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNyRixHQUFDLDRCQUE0QixJQUFHLElBQUksQ0FBQyxjQUFjO1lBQ25ELEdBQUMsMEJBQTBCLElBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDbkQsR0FBQywyQkFBMkIsSUFBRyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDckQsQ0FBQztJQUNMLENBQUM7Ozs7O0lBSUQsbUNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLFlBQVksSUFBSSxPQUFPLENBQUMsWUFBWSxJQUFJLE9BQU8sQ0FBQyxjQUFjLElBQUksT0FBTyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQy9HLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQjtJQUNILENBQUM7O2dCQW5ERixTQUFTLFNBQUM7O29CQUVULFFBQVEsRUFBRSx3Q0FBd0M7b0JBQ2xELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztvQkFDckMsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLDJ0QkFBcUM7b0JBQ3JDLElBQUksRUFBRTt3QkFDSixjQUFjLEVBQUUsUUFBUTt3QkFDeEIsZUFBZSxFQUFFLFNBQVM7d0JBQzFCLG9CQUFvQixFQUFFLFNBQVM7d0JBQy9CLG9CQUFvQixFQUFFLGdDQUFnQztxQkFDdkQ7aUJBQ0Y7Ozs7Z0JBekJDLFVBQVU7Z0JBU3FCLHdCQUF3Qjs7OzRCQWtCdEQsS0FBSzs2QkFDTCxLQUFLO2tDQUNMLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxLQUFLOzBCQUNMLEtBQUs7K0JBQ0wsS0FBSzsyQkFDTCxLQUFLOytCQUNMLEtBQUs7aUNBQ0wsS0FBSzs4QkFDTCxLQUFLO2tDQUNMLE1BQU07aUNBQ04sTUFBTTs7SUFMa0I7UUFBZixZQUFZLEVBQUU7O21EQUFrQjtJQUNqQjtRQUFmLFlBQVksRUFBRTs7dURBQXNCO0lBQ3JCO1FBQWYsWUFBWSxFQUFFOzt5REFBd0I7SUFDdkI7UUFBZixZQUFZLEVBQUU7O3NEQUFxQjtJQTBCL0Msb0JBQUM7Q0FBQSxBQXBERCxJQW9EQztTQXJDWSxhQUFhOzs7SUFDeEIsa0NBQTJCOztJQUMzQixtQ0FBNEI7O0lBQzVCLHdDQUFpQzs7SUFDakMsK0JBQXdCOztJQUN4QixnQ0FBeUI7O0lBQ3pCLGdDQUE4Qzs7SUFDOUMscUNBQThCOztJQUM5QixpQ0FBMEM7O0lBQzFDLHFDQUE4Qzs7SUFDOUMsdUNBQWdEOztJQUNoRCxvQ0FBNkM7O0lBQzdDLHdDQUFpRTs7SUFDakUsdUNBQWdFOzs7OztJQWlCcEQsbUNBQThCOzs7OztJQUFFLGlEQUEwRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBpc05vdE5pbCwgSW5wdXRCb29sZWFuLCBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAndGQ6bm90KC5uei1kaXNhYmxlLXRkKTpub3QoW21hdC1jZWxsXSknLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByb3ZpZGVyczogW056VXBkYXRlSG9zdENsYXNzU2VydmljZV0sXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotdGQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbc3R5bGUubGVmdF0nOiAnbnpMZWZ0JyxcclxuICAgICdbc3R5bGUucmlnaHRdJzogJ256UmlnaHQnLFxyXG4gICAgJ1tzdHlsZS50ZXh0LWFsaWduXSc6ICduekFsaWduJyxcclxuICAgICdbc3R5bGUud29yZC1icmVha10nOiBgbnpCcmVha1dvcmQgPyAnYnJlYWstYWxsJyA6ICcnYFxyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56VGRDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIG56Q2hlY2tlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56RGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBuekluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBuekxlZnQ6IHN0cmluZztcclxuICBASW5wdXQoKSBuelJpZ2h0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpBbGlnbjogJ2xlZnQnIHwgJ3JpZ2h0JyB8ICdjZW50ZXInO1xyXG4gIEBJbnB1dCgpIG56SW5kZW50U2l6ZTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekV4cGFuZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dFeHBhbmQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93Q2hlY2tib3ggPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpCcmVha1dvcmQgPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDaGVja2VkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekV4cGFuZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgZXhwYW5kQ2hhbmdlKGU6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5uekV4cGFuZCA9ICF0aGlzLm56RXhwYW5kO1xyXG4gICAgdGhpcy5uekV4cGFuZENoYW5nZS5lbWl0KHRoaXMubnpFeHBhbmQpO1xyXG4gIH1cclxuXHJcbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICB0aGlzLm56VXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHtcclxuICAgICAgW2BhbnQtdGFibGUtcm93LWV4cGFuZC1pY29uLWNlbGxgXTogdGhpcy5uelNob3dFeHBhbmQgJiYgIWlzTm90TmlsKHRoaXMubnpJbmRlbnRTaXplKSxcclxuICAgICAgW2BhbnQtdGFibGUtc2VsZWN0aW9uLWNvbHVtbmBdOiB0aGlzLm56U2hvd0NoZWNrYm94LFxyXG4gICAgICBbYGFudC10YWJsZS10ZC1sZWZ0LXN0aWNreWBdOiBpc05vdE5pbCh0aGlzLm56TGVmdCksXHJcbiAgICAgIFtgYW50LXRhYmxlLXRkLXJpZ2h0LXN0aWNreWBdOiBpc05vdE5pbCh0aGlzLm56UmlnaHQpXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSkge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMubnpJbmRlbnRTaXplIHx8IGNoYW5nZXMubnpTaG93RXhwYW5kIHx8IGNoYW5nZXMubnpTaG93Q2hlY2tib3ggfHwgY2hhbmdlcy5uelJpZ2h0IHx8IGNoYW5nZXMubnpMZWZ0KSB7XHJcbiAgICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19