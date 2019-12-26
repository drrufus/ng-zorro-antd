/**
 * @fileoverview added by tsickle
 * Generated from: nz-list-item.component.ts
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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, HostBinding, Input, QueryList, Renderer2, TemplateRef, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core';
import { NzListItemMetaComponent } from './nz-list-item-meta.component';
import { NzListComponent } from './nz-list.component';
var NzListItemComponent = /** @class */ (function () {
    function NzListItemComponent(elementRef, renderer, parentComp, cdr) {
        this.parentComp = parentComp;
        this.cdr = cdr;
        this.nzActions = [];
        this.nzNoFlex = false;
        renderer.addClass(elementRef.nativeElement, 'ant-list-item');
    }
    Object.defineProperty(NzListItemComponent.prototype, "isVerticalAndExtra", {
        get: /**
         * @return {?}
         */
        function () {
            return this.itemLayout === 'vertical' && !!this.nzExtra;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzListItemComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.itemLayout$ = this.parentComp.itemLayoutNotify$.subscribe((/**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            _this.itemLayout = val;
            _this.cdr.detectChanges();
        }));
    };
    /**
     * @return {?}
     */
    NzListItemComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.itemLayout$) {
            this.itemLayout$.unsubscribe();
        }
    };
    NzListItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-list-item, [nz-list-item]',
                    exportAs: 'nzListItem',
                    template: "<ng-template #actionsTpl>\r\n  <ul *ngIf=\"nzActions?.length > 0\" class=\"ant-list-item-action\">\r\n    <li *ngFor=\"let i of nzActions; let last=last;\">\r\n      <ng-template [ngTemplateOutlet]=\"i\"></ng-template>\r\n      <em *ngIf=\"!last\" class=\"ant-list-item-action-split\"></em>\r\n    </li>\r\n  </ul>\r\n</ng-template>\r\n<ng-template #contentTpl>\r\n  <ng-content></ng-content>\r\n  <ng-container *ngIf=\"nzContent\">\r\n    <ng-container *nzStringTemplateOutlet=\"nzContent\">{{ nzContent }}</ng-container>\r\n  </ng-container>\r\n</ng-template>\r\n<ng-template #simpleTpl>\r\n  <ng-template [ngTemplateOutlet]=\"contentTpl\"></ng-template>\r\n  <ng-template [ngTemplateOutlet]=\"nzExtra\"></ng-template>\r\n  <ng-template [ngTemplateOutlet]=\"actionsTpl\"></ng-template>\r\n</ng-template>\r\n<ng-container *ngIf=\"isVerticalAndExtra; else simpleTpl\">\r\n  <div class=\"ant-list-item-main\">\r\n    <ng-template [ngTemplateOutlet]=\"contentTpl\"></ng-template>\r\n    <ng-template [ngTemplateOutlet]=\"actionsTpl\"></ng-template>\r\n  </div>\r\n  <div class=\"ant-list-item-extra\">\r\n    <ng-template [ngTemplateOutlet]=\"nzExtra\"></ng-template>\r\n  </div>\r\n</ng-container>",
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NzListItemComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: NzListComponent },
        { type: ChangeDetectorRef }
    ]; };
    NzListItemComponent.propDecorators = {
        metas: [{ type: ContentChildren, args: [NzListItemMetaComponent,] }],
        nzActions: [{ type: Input }],
        nzContent: [{ type: Input }],
        nzExtra: [{ type: Input }],
        nzNoFlex: [{ type: Input }, { type: HostBinding, args: ['class.ant-list-item-no-flex',] }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzListItemComponent.prototype, "nzNoFlex", void 0);
    return NzListItemComponent;
}());
export { NzListItemComponent };
if (false) {
    /** @type {?} */
    NzListItemComponent.prototype.metas;
    /** @type {?} */
    NzListItemComponent.prototype.nzActions;
    /** @type {?} */
    NzListItemComponent.prototype.nzContent;
    /** @type {?} */
    NzListItemComponent.prototype.nzExtra;
    /** @type {?} */
    NzListItemComponent.prototype.nzNoFlex;
    /**
     * @type {?}
     * @private
     */
    NzListItemComponent.prototype.itemLayout;
    /**
     * @type {?}
     * @private
     */
    NzListItemComponent.prototype.itemLayout$;
    /**
     * @type {?}
     * @private
     */
    NzListItemComponent.prototype.parentComp;
    /**
     * @type {?}
     * @private
     */
    NzListItemComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbGlzdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvbGlzdC8iLCJzb3VyY2VzIjpbIm56LWxpc3QtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsVUFBVSxFQUNWLFdBQVcsRUFDWCxLQUFLLEVBRUwsU0FBUyxFQUNULFNBQVMsRUFDVCxXQUFXLEVBQ1gsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQXFCLE1BQU0sb0JBQW9CLENBQUM7QUFFckUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXREO0lBc0JFLDZCQUNFLFVBQXNCLEVBQ3RCLFFBQW1CLEVBQ1gsVUFBMkIsRUFDM0IsR0FBc0I7UUFEdEIsZUFBVSxHQUFWLFVBQVUsQ0FBaUI7UUFDM0IsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFoQnZCLGNBQVMsR0FBNkIsRUFBRSxDQUFDO1FBR21CLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFlN0YsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFYRCxzQkFBSSxtREFBa0I7Ozs7UUFBdEI7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLEtBQUssVUFBVSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzFELENBQUM7OztPQUFBOzs7O0lBV0QsNkNBQWU7OztJQUFmO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsR0FBRztZQUNoRSxLQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztZQUN0QixLQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzNCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELHlDQUFXOzs7SUFBWDtRQUNFLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQzs7Z0JBMUNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsOEJBQThCO29CQUN4QyxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsd3JDQUE0QztvQkFDNUMsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkF0QkMsVUFBVTtnQkFLVixTQUFTO2dCQVFGLGVBQWU7Z0JBaEJ0QixpQkFBaUI7Ozt3QkEyQmhCLGVBQWUsU0FBQyx1QkFBdUI7NEJBQ3ZDLEtBQUs7NEJBQ0wsS0FBSzswQkFDTCxLQUFLOzJCQUNMLEtBQUssWUFBb0IsV0FBVyxTQUFDLDZCQUE2Qjs7SUFBRTtRQUEzRCxZQUFZLEVBQUU7O3lEQUF1RTtJQThCakcsMEJBQUM7Q0FBQSxBQTNDRCxJQTJDQztTQW5DWSxtQkFBbUI7OztJQUM5QixvQ0FBcUY7O0lBQ3JGLHdDQUFrRDs7SUFDbEQsd0NBQStDOztJQUMvQyxzQ0FBb0M7O0lBQ3BDLHVDQUErRjs7Ozs7SUFFL0YseUNBQXNDOzs7OztJQUN0QywwQ0FBa0M7Ozs7O0lBU2hDLHlDQUFtQzs7Ozs7SUFDbkMsa0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBFbGVtZW50UmVmLFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBRdWVyeUxpc3QsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIE56RGlyZWN0aW9uVkhUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE56TGlzdEl0ZW1NZXRhQ29tcG9uZW50IH0gZnJvbSAnLi9uei1saXN0LWl0ZW0tbWV0YS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOekxpc3RDb21wb25lbnQgfSBmcm9tICcuL256LWxpc3QuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotbGlzdC1pdGVtLCBbbnotbGlzdC1pdGVtXScsXHJcbiAgZXhwb3J0QXM6ICduekxpc3RJdGVtJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotbGlzdC1pdGVtLmNvbXBvbmVudC5odG1sJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekxpc3RJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcclxuICBAQ29udGVudENoaWxkcmVuKE56TGlzdEl0ZW1NZXRhQ29tcG9uZW50KSBtZXRhcyE6IFF1ZXJ5TGlzdDxOekxpc3RJdGVtTWV0YUNvbXBvbmVudD47XHJcbiAgQElucHV0KCkgbnpBY3Rpb25zOiBBcnJheTxUZW1wbGF0ZVJlZjx2b2lkPj4gPSBbXTtcclxuICBASW5wdXQoKSBuekNvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56RXh0cmE6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1saXN0LWl0ZW0tbm8tZmxleCcpIG56Tm9GbGV4OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHByaXZhdGUgaXRlbUxheW91dDogTnpEaXJlY3Rpb25WSFR5cGU7XHJcbiAgcHJpdmF0ZSBpdGVtTGF5b3V0JDogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBnZXQgaXNWZXJ0aWNhbEFuZEV4dHJhKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXRlbUxheW91dCA9PT0gJ3ZlcnRpY2FsJyAmJiAhIXRoaXMubnpFeHRyYTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIHBhcmVudENvbXA6IE56TGlzdENvbXBvbmVudCxcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWxpc3QtaXRlbScpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pdGVtTGF5b3V0JCA9IHRoaXMucGFyZW50Q29tcC5pdGVtTGF5b3V0Tm90aWZ5JC5zdWJzY3JpYmUodmFsID0+IHtcclxuICAgICAgdGhpcy5pdGVtTGF5b3V0ID0gdmFsO1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXRlbUxheW91dCQpIHtcclxuICAgICAgdGhpcy5pdGVtTGF5b3V0JC51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=