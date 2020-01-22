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
import { ChangeDetectionStrategy, Component, ContentChild, ElementRef, EventEmitter, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core';
import { NzPageHeaderBreadcrumbDirective, NzPageHeaderFooterDirective } from './nz-page-header-cells';
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'pageHeader';
var NzPageHeaderComponent = /** @class */ (function () {
    function NzPageHeaderComponent(location, nzConfigService) {
        this.location = location;
        this.nzConfigService = nzConfigService;
        this.isTemplateRefBackIcon = false;
        this.isStringBackIcon = false;
        this.nzBackIcon = null;
        this.nzBack = new EventEmitter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    NzPageHeaderComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.hasOwnProperty('nzBackIcon')) {
            this.isTemplateRefBackIcon = changes.nzBackIcon.currentValue instanceof TemplateRef;
            this.isStringBackIcon = typeof changes.nzBackIcon.currentValue === 'string';
        }
    };
    /**
     * @return {?}
     */
    NzPageHeaderComponent.prototype.onBack = /**
     * @return {?}
     */
    function () {
        if (this.nzBack.observers.length) {
            this.nzBack.emit();
        }
        else {
            this.location.back();
        }
    };
    NzPageHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-page-header',
                    exportAs: 'nzPageHeader',
                    template: "<ng-content select=\"nz-breadcrumb[nz-page-header-breadcrumb]\"></ng-content>\r\n\r\n<div class=\"ant-page-header-heading\">\r\n  <!--back-->\r\n  <div *ngIf=\"nzBackIcon !== null\" (click)=\"onBack()\" class=\"ant-page-header-back\">\r\n    <div role=\"button\" tabindex=\"0\" class=\"ant-page-header-back-button\">\r\n      <i *ngIf=\"isStringBackIcon\" nz-icon [nzType]=\"nzBackIcon ? nzBackIcon : 'arrow-left'\" nzTheme=\"outline\"></i>\r\n      <ng-container *ngIf=\"isTemplateRefBackIcon\" [ngTemplateOutlet]=\"nzBackIcon\"></ng-container>\r\n    </div>\r\n  </div>\r\n  <!--avatar-->\r\n  <ng-content select=\"nz-avatar[nz-page-header-avatar]\"></ng-content>\r\n  <!--title-->\r\n  <span class=\"ant-page-header-heading-title\" *ngIf=\"nzTitle\">\r\n    <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\r\n  </span>\r\n  <ng-content *ngIf=\"!nzTitle\" select=\"nz-page-header-title, [nz-page-header-title]\"></ng-content>\r\n  <!--subtitle-->\r\n  <span class=\"ant-page-header-heading-sub-title\" *ngIf=\"nzSubtitle\">\r\n    <ng-container *nzStringTemplateOutlet=\"nzSubtitle\">{{ nzSubtitle }}</ng-container>\r\n  </span>\r\n  <ng-content *ngIf=\"!nzSubtitle\" select=\"nz-page-header-subtitle, [nz-page-header-subtitle]\"></ng-content>\r\n  <ng-content select=\"nz-page-header-tags, [nz-page-header-tags]\"></ng-content>\r\n  <ng-content select=\"nz-page-header-extra, [nz-page-header-extra]\"></ng-content>\r\n</div>\r\n\r\n<ng-content select=\"nz-page-header-content, [nz-page-header-content]\"></ng-content>\r\n<ng-content select=\"nz-page-header-footer, [nz-page-header-footer]\"></ng-content>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        class: 'ant-page-header',
                        '[class.has-footer]': 'nzPageHeaderFooter',
                        '[class.ant-page-header-ghost]': 'nzGhost',
                        '[class.has-breadcrumb]': 'nzPageHeaderBreadcrumb'
                    },
                    styles: ["nz-page-header,nz-page-header-content,nz-page-header-footer{display:block}", "\n      .ant-page-header-back-button {\n        border: 0px;\n        background: transparent;\n        padding: 0px;\n        line-height: inherit;\n        display: inline-block;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzPageHeaderComponent.ctorParameters = function () { return [
        { type: Location },
        { type: NzConfigService }
    ]; };
    NzPageHeaderComponent.propDecorators = {
        nzBackIcon: [{ type: Input }],
        nzTitle: [{ type: Input }],
        nzSubtitle: [{ type: Input }],
        nzGhost: [{ type: Input }],
        nzBack: [{ type: Output }],
        nzPageHeaderFooter: [{ type: ContentChild, args: [NzPageHeaderFooterDirective, { static: false },] }],
        nzPageHeaderBreadcrumb: [{ type: ContentChild, args: [NzPageHeaderBreadcrumbDirective, { static: false },] }]
    };
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, true),
        tslib_1.__metadata("design:type", Boolean)
    ], NzPageHeaderComponent.prototype, "nzGhost", void 0);
    return NzPageHeaderComponent;
}());
export { NzPageHeaderComponent };
if (false) {
    /** @type {?} */
    NzPageHeaderComponent.prototype.isTemplateRefBackIcon;
    /** @type {?} */
    NzPageHeaderComponent.prototype.isStringBackIcon;
    /** @type {?} */
    NzPageHeaderComponent.prototype.nzBackIcon;
    /** @type {?} */
    NzPageHeaderComponent.prototype.nzTitle;
    /** @type {?} */
    NzPageHeaderComponent.prototype.nzSubtitle;
    /** @type {?} */
    NzPageHeaderComponent.prototype.nzGhost;
    /** @type {?} */
    NzPageHeaderComponent.prototype.nzBack;
    /** @type {?} */
    NzPageHeaderComponent.prototype.nzPageHeaderFooter;
    /** @type {?} */
    NzPageHeaderComponent.prototype.nzPageHeaderBreadcrumb;
    /**
     * @type {?}
     * @private
     */
    NzPageHeaderComponent.prototype.location;
    /** @type {?} */
    NzPageHeaderComponent.prototype.nzConfigService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcGFnZS1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9wYWdlLWhlYWRlci8iLCJzb3VyY2VzIjpbIm56LXBhZ2UtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUVOLFdBQVcsRUFDWCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDakUsT0FBTyxFQUFFLCtCQUErQixFQUFFLDJCQUEyQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0lBRWhHLHdCQUF3QixHQUFHLFlBQVk7QUFFN0M7SUEyQ0UsK0JBQW9CLFFBQWtCLEVBQVMsZUFBZ0M7UUFBM0QsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFTLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQWpCL0UsMEJBQXFCLEdBQUcsS0FBSyxDQUFDO1FBQzlCLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUVoQixlQUFVLEdBQXNDLElBQUksQ0FBQztRQUkzQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQVU2QixDQUFDOzs7OztJQUVuRiwyQ0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLFlBQVksWUFBWSxXQUFXLENBQUM7WUFDcEYsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE9BQU8sT0FBTyxDQUFDLFVBQVUsQ0FBQyxZQUFZLEtBQUssUUFBUSxDQUFDO1NBQzdFO0lBQ0gsQ0FBQzs7OztJQUVELHNDQUFNOzs7SUFBTjtRQUNFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDcEI7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDdEI7SUFDSCxDQUFDOztnQkExREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSxjQUFjO29CQUN4QixzbkRBQThDO29CQUU5QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLElBQUksRUFBRTt3QkFDSixLQUFLLEVBQUUsaUJBQWlCO3dCQUN4QixvQkFBb0IsRUFBRSxvQkFBb0I7d0JBQzFDLCtCQUErQixFQUFFLFNBQVM7d0JBQzFDLHdCQUF3QixFQUFFLHdCQUF3QjtxQkFDbkQ7MkdBRUMscU1BUUM7aUJBRUo7Ozs7Z0JBOUJRLFFBQVE7Z0JBQ1IsZUFBZTs7OzZCQWtDckIsS0FBSzswQkFDTCxLQUFLOzZCQUNMLEtBQUs7MEJBQ0wsS0FBSzt5QkFDTCxNQUFNO3FDQUVOLFlBQVksU0FBQywyQkFBMkIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7eUNBSTNELFlBQVksU0FBQywrQkFBK0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O0lBUFg7UUFBM0MsVUFBVSxDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQzs7MERBQWtCO0lBMkJ4RSw0QkFBQztDQUFBLEFBM0RELElBMkRDO1NBbENZLHFCQUFxQjs7O0lBQ2hDLHNEQUE4Qjs7SUFDOUIsaURBQXlCOztJQUV6QiwyQ0FBOEQ7O0lBQzlELHdDQUE2Qzs7SUFDN0MsMkNBQWdEOztJQUNoRCx3Q0FBc0U7O0lBQ3RFLHVDQUFxRDs7SUFFckQsbURBRUU7O0lBRUYsdURBRUU7Ozs7O0lBRVUseUNBQTBCOztJQUFFLGdEQUF1QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOekNvbmZpZ1NlcnZpY2UsIFdpdGhDb25maWcgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOelBhZ2VIZWFkZXJCcmVhZGNydW1iRGlyZWN0aXZlLCBOelBhZ2VIZWFkZXJGb290ZXJEaXJlY3RpdmUgfSBmcm9tICcuL256LXBhZ2UtaGVhZGVyLWNlbGxzJztcclxuXHJcbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdwYWdlSGVhZGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotcGFnZS1oZWFkZXInLFxyXG4gIGV4cG9ydEFzOiAnbnpQYWdlSGVhZGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotcGFnZS1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL256LXBhZ2UtaGVhZGVyLmNvbXBvbmVudC5sZXNzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBob3N0OiB7XHJcbiAgICBjbGFzczogJ2FudC1wYWdlLWhlYWRlcicsXHJcbiAgICAnW2NsYXNzLmhhcy1mb290ZXJdJzogJ256UGFnZUhlYWRlckZvb3RlcicsXHJcbiAgICAnW2NsYXNzLmFudC1wYWdlLWhlYWRlci1naG9zdF0nOiAnbnpHaG9zdCcsXHJcbiAgICAnW2NsYXNzLmhhcy1icmVhZGNydW1iXSc6ICduelBhZ2VIZWFkZXJCcmVhZGNydW1iJ1xyXG4gIH0sXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIC5hbnQtcGFnZS1oZWFkZXItYmFjay1idXR0b24ge1xyXG4gICAgICAgIGJvcmRlcjogMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelBhZ2VIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIGlzVGVtcGxhdGVSZWZCYWNrSWNvbiA9IGZhbHNlO1xyXG4gIGlzU3RyaW5nQmFja0ljb24gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KCkgbnpCYWNrSWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBuelRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuelN1YnRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIHRydWUpIG56R2hvc3Q6IGJvb2xlYW47XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56QmFjayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgQENvbnRlbnRDaGlsZChOelBhZ2VIZWFkZXJGb290ZXJEaXJlY3RpdmUsIHsgc3RhdGljOiBmYWxzZSB9KSBuelBhZ2VIZWFkZXJGb290ZXI6IEVsZW1lbnRSZWY8XHJcbiAgICBOelBhZ2VIZWFkZXJGb290ZXJEaXJlY3RpdmVcclxuICA+O1xyXG5cclxuICBAQ29udGVudENoaWxkKE56UGFnZUhlYWRlckJyZWFkY3J1bWJEaXJlY3RpdmUsIHsgc3RhdGljOiBmYWxzZSB9KSBuelBhZ2VIZWFkZXJCcmVhZGNydW1iOiBFbGVtZW50UmVmPFxyXG4gICAgTnpQYWdlSGVhZGVyQnJlYWRjcnVtYkRpcmVjdGl2ZVxyXG4gID47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLCBwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UpIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCduekJhY2tJY29uJykpIHtcclxuICAgICAgdGhpcy5pc1RlbXBsYXRlUmVmQmFja0ljb24gPSBjaGFuZ2VzLm56QmFja0ljb24uY3VycmVudFZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWY7XHJcbiAgICAgIHRoaXMuaXNTdHJpbmdCYWNrSWNvbiA9IHR5cGVvZiBjaGFuZ2VzLm56QmFja0ljb24uY3VycmVudFZhbHVlID09PSAnc3RyaW5nJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQmFjaygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56QmFjay5vYnNlcnZlcnMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMubnpCYWNrLmVtaXQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubG9jYXRpb24uYmFjaygpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=