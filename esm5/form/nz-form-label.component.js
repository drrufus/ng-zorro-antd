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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Host, Input, Optional, Renderer2, ViewEncapsulation } from '@angular/core';
import { toBoolean, InputBoolean, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { NzColDirective, NzRowDirective } from 'ng-zorro-antd/grid';
import { NzFormItemComponent } from './nz-form-item.component';
var NzFormLabelComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NzFormLabelComponent, _super);
    function NzFormLabelComponent(nzUpdateHostClassService, elementRef, nzFormItemComponent, nzRowDirective, renderer, cdr) {
        var _this = _super.call(this, nzUpdateHostClassService, elementRef, nzFormItemComponent || nzRowDirective, renderer) || this;
        _this.cdr = cdr;
        _this.nzRequired = false;
        _this.defaultNoColon = false;
        _this.noColon = 'default';
        renderer.addClass(elementRef.nativeElement, 'ant-form-item-label');
        return _this;
    }
    Object.defineProperty(NzFormLabelComponent.prototype, "nzNoColon", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this.noColon;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.noColon = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    NzFormLabelComponent.prototype.setDefaultNoColon = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.defaultNoColon = toBoolean(value);
        this.cdr.markForCheck();
    };
    /**
     * @return {?}
     */
    NzFormLabelComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
    };
    /**
     * @return {?}
     */
    NzFormLabelComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngAfterViewInit.call(this);
    };
    NzFormLabelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-form-label',
                    exportAs: 'nzFormLabel',
                    providers: [NzUpdateHostClassService],
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "<label [attr.for]=\"nzFor\"\r\n  [class.ant-form-item-no-colon]=\"noColon === 'default' ? defaultNoColon : nzNoColon\"\r\n  [class.ant-form-item-required]=\"nzRequired\">\r\n  <ng-content></ng-content>\r\n</label>"
                }] }
    ];
    /** @nocollapse */
    NzFormLabelComponent.ctorParameters = function () { return [
        { type: NzUpdateHostClassService },
        { type: ElementRef },
        { type: NzFormItemComponent, decorators: [{ type: Optional }, { type: Host }] },
        { type: NzRowDirective, decorators: [{ type: Optional }, { type: Host }] },
        { type: Renderer2 },
        { type: ChangeDetectorRef }
    ]; };
    NzFormLabelComponent.propDecorators = {
        nzFor: [{ type: Input }],
        nzRequired: [{ type: Input }],
        nzNoColon: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzFormLabelComponent.prototype, "nzRequired", void 0);
    return NzFormLabelComponent;
}(NzColDirective));
export { NzFormLabelComponent };
if (false) {
    /** @type {?} */
    NzFormLabelComponent.prototype.nzFor;
    /** @type {?} */
    NzFormLabelComponent.prototype.nzRequired;
    /** @type {?} */
    NzFormLabelComponent.prototype.defaultNoColon;
    /** @type {?} */
    NzFormLabelComponent.prototype.noColon;
    /**
     * @type {?}
     * @private
     */
    NzFormLabelComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZm9ybS1sYWJlbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2Zvcm0vIiwic291cmNlcyI6WyJuei1mb3JtLWxhYmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLElBQUksRUFDSixLQUFLLEVBRUwsUUFBUSxFQUNSLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN2RixPQUFPLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXBFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRS9EO0lBUzBDLGdEQUFjO0lBY3RELDhCQUNFLHdCQUFrRCxFQUNsRCxVQUFzQixFQUNGLG1CQUF3QyxFQUN4QyxjQUE4QixFQUNsRCxRQUFtQixFQUNYLEdBQXNCO1FBTmhDLFlBUUUsa0JBQU0sd0JBQXdCLEVBQUUsVUFBVSxFQUFFLG1CQUFtQixJQUFJLGNBQWMsRUFBRSxRQUFRLENBQUMsU0FFN0Y7UUFKUyxTQUFHLEdBQUgsR0FBRyxDQUFtQjtRQWxCUCxnQkFBVSxHQUFHLEtBQUssQ0FBQztRQVM1QyxvQkFBYyxHQUFZLEtBQUssQ0FBQztRQUNoQyxhQUFPLEdBQXFCLFNBQVMsQ0FBQztRQVdwQyxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUscUJBQXFCLENBQUMsQ0FBQzs7SUFDckUsQ0FBQztJQXJCRCxzQkFDSSwyQ0FBUzs7OztRQUdiO1lBQ0UsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDOzs7OztRQU5ELFVBQ2MsS0FBYztZQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTs7Ozs7SUFvQkQsZ0RBQWlCOzs7O0lBQWpCLFVBQWtCLEtBQWM7UUFDOUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsMENBQVc7OztJQUFYO1FBQ0UsaUJBQU0sV0FBVyxXQUFFLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELDhDQUFlOzs7SUFBZjtRQUNFLGlCQUFNLGVBQWUsV0FBRSxDQUFDO0lBQzFCLENBQUM7O2dCQTlDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSxhQUFhO29CQUN2QixTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztvQkFDckMsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxpT0FBNkM7aUJBQzlDOzs7O2dCQWJpQyx3QkFBd0I7Z0JBVHhELFVBQVU7Z0JBWUgsbUJBQW1CLHVCQTRCdkIsUUFBUSxZQUFJLElBQUk7Z0JBOUJJLGNBQWMsdUJBK0JsQyxRQUFRLFlBQUksSUFBSTtnQkFwQ25CLFNBQVM7Z0JBUFQsaUJBQWlCOzs7d0JBMEJoQixLQUFLOzZCQUNMLEtBQUs7NEJBQ0wsS0FBSzs7SUFEbUI7UUFBZixZQUFZLEVBQUU7OzREQUFvQjtJQW9DOUMsMkJBQUM7Q0FBQSxBQS9DRCxDQVMwQyxjQUFjLEdBc0N2RDtTQXRDWSxvQkFBb0I7OztJQUMvQixxQ0FBdUI7O0lBQ3ZCLDBDQUE0Qzs7SUFTNUMsOENBQWdDOztJQUNoQyx1Q0FBc0M7Ozs7O0lBUXBDLG1DQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEhvc3QsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9wdGlvbmFsLFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgdG9Cb29sZWFuLCBJbnB1dEJvb2xlYW4sIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56Q29sRGlyZWN0aXZlLCBOelJvd0RpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvZ3JpZCc7XHJcblxyXG5pbXBvcnQgeyBOekZvcm1JdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9uei1mb3JtLWl0ZW0uY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotZm9ybS1sYWJlbCcsXHJcbiAgZXhwb3J0QXM6ICduekZvcm1MYWJlbCcsXHJcbiAgcHJvdmlkZXJzOiBbTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1mb3JtLWxhYmVsLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpGb3JtTGFiZWxDb21wb25lbnQgZXh0ZW5kcyBOekNvbERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQElucHV0KCkgbnpGb3I6IHN0cmluZztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpSZXF1aXJlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56Tm9Db2xvbih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5ub0NvbG9uID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcbiAgZ2V0IG56Tm9Db2xvbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhIXRoaXMubm9Db2xvbjtcclxuICB9XHJcblxyXG4gIGRlZmF1bHROb0NvbG9uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgbm9Db2xvbjogYm9vbGVhbiB8IHN0cmluZyA9ICdkZWZhdWx0JztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSxcclxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBAT3B0aW9uYWwoKSBASG9zdCgpIG56Rm9ybUl0ZW1Db21wb25lbnQ6IE56Rm9ybUl0ZW1Db21wb25lbnQsXHJcbiAgICBAT3B0aW9uYWwoKSBASG9zdCgpIG56Um93RGlyZWN0aXZlOiBOelJvd0RpcmVjdGl2ZSxcclxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHtcclxuICAgIHN1cGVyKG56VXBkYXRlSG9zdENsYXNzU2VydmljZSwgZWxlbWVudFJlZiwgbnpGb3JtSXRlbUNvbXBvbmVudCB8fCBuelJvd0RpcmVjdGl2ZSwgcmVuZGVyZXIpO1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWZvcm0taXRlbS1sYWJlbCcpO1xyXG4gIH1cclxuXHJcbiAgc2V0RGVmYXVsdE5vQ29sb24odmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuZGVmYXVsdE5vQ29sb24gPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHN1cGVyLm5nT25EZXN0cm95KCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBzdXBlci5uZ0FmdGVyVmlld0luaXQoKTtcclxuICB9XHJcbn1cclxuIl19