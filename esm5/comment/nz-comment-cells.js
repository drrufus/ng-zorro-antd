/**
 * @fileoverview added by tsickle
 * Generated from: nz-comment-cells.ts
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
import { CdkPortalOutlet, TemplatePortal } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, Component, ComponentFactoryResolver, Directive, Input, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
var NzCommentAvatarDirective = /** @class */ (function () {
    function NzCommentAvatarDirective() {
    }
    NzCommentAvatarDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'nz-avatar[nz-comment-avatar]',
                    exportAs: 'nzCommentAvatar'
                },] }
    ];
    return NzCommentAvatarDirective;
}());
export { NzCommentAvatarDirective };
var NzCommentContentDirective = /** @class */ (function () {
    function NzCommentContentDirective() {
    }
    NzCommentContentDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'nz-comment-content, [nz-comment-content]',
                    exportAs: 'nzCommentContent',
                    host: { class: 'ant-comment-content-detail' }
                },] }
    ];
    return NzCommentContentDirective;
}());
export { NzCommentContentDirective };
var NzCommentActionHostDirective = /** @class */ (function (_super) {
    tslib_1.__extends(NzCommentActionHostDirective, _super);
    function NzCommentActionHostDirective(componentFactoryResolver, viewContainerRef) {
        return _super.call(this, componentFactoryResolver, viewContainerRef) || this;
    }
    /**
     * @return {?}
     */
    NzCommentActionHostDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnInit.call(this);
    };
    /**
     * @return {?}
     */
    NzCommentActionHostDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
    };
    /**
     * @return {?}
     */
    NzCommentActionHostDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.attach(this.nzCommentActionHost);
    };
    NzCommentActionHostDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nzCommentActionHost]',
                    exportAs: 'nzCommentActionHost'
                },] }
    ];
    /** @nocollapse */
    NzCommentActionHostDirective.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ViewContainerRef }
    ]; };
    NzCommentActionHostDirective.propDecorators = {
        nzCommentActionHost: [{ type: Input }]
    };
    return NzCommentActionHostDirective;
}(CdkPortalOutlet));
export { NzCommentActionHostDirective };
if (false) {
    /** @type {?} */
    NzCommentActionHostDirective.prototype.nzCommentActionHost;
}
var NzCommentActionComponent = /** @class */ (function () {
    function NzCommentActionComponent(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
        this.contentPortal = null;
    }
    Object.defineProperty(NzCommentActionComponent.prototype, "content", {
        get: /**
         * @return {?}
         */
        function () {
            return this.contentPortal;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzCommentActionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.contentPortal = new TemplatePortal(this.implicitContent, this.viewContainerRef);
    };
    NzCommentActionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-comment-action',
                    exportAs: 'nzCommentAction',
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-template><ng-content></ng-content></ng-template>'
                }] }
    ];
    /** @nocollapse */
    NzCommentActionComponent.ctorParameters = function () { return [
        { type: ViewContainerRef }
    ]; };
    NzCommentActionComponent.propDecorators = {
        implicitContent: [{ type: ViewChild, args: [TemplateRef, { static: true },] }]
    };
    return NzCommentActionComponent;
}());
export { NzCommentActionComponent };
if (false) {
    /** @type {?} */
    NzCommentActionComponent.prototype.implicitContent;
    /**
     * @type {?}
     * @private
     */
    NzCommentActionComponent.prototype.contentPortal;
    /**
     * @type {?}
     * @private
     */
    NzCommentActionComponent.prototype.viewContainerRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29tbWVudC1jZWxscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29tbWVudC8iLCJzb3VyY2VzIjpbIm56LWNvbW1lbnQtY2VsbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEUsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1Qsd0JBQXdCLEVBQ3hCLFNBQVMsRUFDVCxLQUFLLEVBR0wsV0FBVyxFQUNYLFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCO0lBQUE7SUFJdUMsQ0FBQzs7Z0JBSnZDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsOEJBQThCO29CQUN4QyxRQUFRLEVBQUUsaUJBQWlCO2lCQUM1Qjs7SUFDc0MsK0JBQUM7Q0FBQSxBQUp4QyxJQUl3QztTQUEzQix3QkFBd0I7QUFFckM7SUFBQTtJQUt3QyxDQUFDOztnQkFMeEMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwwQ0FBMEM7b0JBQ3BELFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSw0QkFBNEIsRUFBRTtpQkFDOUM7O0lBQ3VDLGdDQUFDO0NBQUEsQUFMekMsSUFLeUM7U0FBNUIseUJBQXlCO0FBRXRDO0lBSWtELHdEQUFlO0lBRy9ELHNDQUFZLHdCQUFrRCxFQUFFLGdCQUFrQztlQUNoRyxrQkFBTSx3QkFBd0IsRUFBRSxnQkFBZ0IsQ0FBQztJQUNuRCxDQUFDOzs7O0lBRUQsK0NBQVE7OztJQUFSO1FBQ0UsaUJBQU0sUUFBUSxXQUFFLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELGtEQUFXOzs7SUFBWDtRQUNFLGlCQUFNLFdBQVcsV0FBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxzREFBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7O2dCQXJCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsUUFBUSxFQUFFLHFCQUFxQjtpQkFDaEM7Ozs7Z0JBM0JDLHdCQUF3QjtnQkFPeEIsZ0JBQWdCOzs7c0NBc0JmLEtBQUs7O0lBaUJSLG1DQUFDO0NBQUEsQUF0QkQsQ0FJa0QsZUFBZSxHQWtCaEU7U0FsQlksNEJBQTRCOzs7SUFDdkMsMkRBQW9EOztBQW1CdEQ7SUFlRSxrQ0FBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFOOUMsa0JBQWEsR0FBMEIsSUFBSSxDQUFDO0lBTUssQ0FBQztJQUoxRCxzQkFBSSw2Q0FBTzs7OztRQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzVCLENBQUM7OztPQUFBOzs7O0lBSUQsMkNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7O2dCQW5CRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxRQUFRLEVBQUUsc0RBQXNEO2lCQUNqRTs7OztnQkEvQ0MsZ0JBQWdCOzs7a0NBaURmLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztJQVkxQywrQkFBQztDQUFBLEFBcEJELElBb0JDO1NBYlksd0JBQXdCOzs7SUFDbkMsbURBQTZFOzs7OztJQUM3RSxpREFBb0Q7Ozs7O0lBTXhDLG9EQUEwQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ2RrUG9ydGFsT3V0bGV0LCBUZW1wbGF0ZVBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICBEaXJlY3RpdmUsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0NvbnRhaW5lclJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICduei1hdmF0YXJbbnotY29tbWVudC1hdmF0YXJdJyxcclxuICBleHBvcnRBczogJ256Q29tbWVudEF2YXRhcidcclxufSlcclxuZXhwb3J0IGNsYXNzIE56Q29tbWVudEF2YXRhckRpcmVjdGl2ZSB7fVxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICduei1jb21tZW50LWNvbnRlbnQsIFtuei1jb21tZW50LWNvbnRlbnRdJyxcclxuICBleHBvcnRBczogJ256Q29tbWVudENvbnRlbnQnLFxyXG4gIGhvc3Q6IHsgY2xhc3M6ICdhbnQtY29tbWVudC1jb250ZW50LWRldGFpbCcgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpDb21tZW50Q29udGVudERpcmVjdGl2ZSB7fVxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbnpDb21tZW50QWN0aW9uSG9zdF0nLFxyXG4gIGV4cG9ydEFzOiAnbnpDb21tZW50QWN0aW9uSG9zdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE56Q29tbWVudEFjdGlvbkhvc3REaXJlY3RpdmUgZXh0ZW5kcyBDZGtQb3J0YWxPdXRsZXQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQElucHV0KCkgbnpDb21tZW50QWN0aW9uSG9zdDogVGVtcGxhdGVQb3J0YWwgfCBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xyXG4gICAgc3VwZXIoY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCB2aWV3Q29udGFpbmVyUmVmKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgc3VwZXIubmdPbkluaXQoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgc3VwZXIubmdPbkRlc3Ryb3koKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuYXR0YWNoKHRoaXMubnpDb21tZW50QWN0aW9uSG9zdCk7XHJcbiAgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LWNvbW1lbnQtYWN0aW9uJyxcclxuICBleHBvcnRBczogJ256Q29tbWVudEFjdGlvbicsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9uZy10ZW1wbGF0ZT4nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekNvbW1lbnRBY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYsIHsgc3RhdGljOiB0cnVlIH0pIGltcGxpY2l0Q29udGVudDogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgcHJpdmF0ZSBjb250ZW50UG9ydGFsOiBUZW1wbGF0ZVBvcnRhbCB8IG51bGwgPSBudWxsO1xyXG5cclxuICBnZXQgY29udGVudCgpOiBUZW1wbGF0ZVBvcnRhbCB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGVudFBvcnRhbDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbnRlbnRQb3J0YWwgPSBuZXcgVGVtcGxhdGVQb3J0YWwodGhpcy5pbXBsaWNpdENvbnRlbnQsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XHJcbiAgfVxyXG59XHJcbiJdfQ==