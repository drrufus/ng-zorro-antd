/**
 * @fileoverview added by tsickle
 * Generated from: nz-page-header.component.ts
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
const NZ_CONFIG_COMPONENT_NAME = 'pageHeader';
export class NzPageHeaderComponent {
    /**
     * @param {?} location
     * @param {?} nzConfigService
     */
    constructor(location, nzConfigService) {
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
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('nzBackIcon')) {
            this.isTemplateRefBackIcon = changes.nzBackIcon.currentValue instanceof TemplateRef;
            this.isStringBackIcon = typeof changes.nzBackIcon.currentValue === 'string';
        }
    }
    /**
     * @return {?}
     */
    onBack() {
        if (this.nzBack.observers.length) {
            this.nzBack.emit();
        }
        else {
            this.location.back();
        }
    }
}
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
                styles: ["nz-page-header,nz-page-header-content,nz-page-header-footer{display:block}", `
      .ant-page-header-back-button {
        border: 0px;
        background: transparent;
        padding: 0px;
        line-height: inherit;
        display: inline-block;
      }
    `]
            }] }
];
/** @nocollapse */
NzPageHeaderComponent.ctorParameters = () => [
    { type: Location },
    { type: NzConfigService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcGFnZS1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9wYWdlLWhlYWRlci8iLCJzb3VyY2VzIjpbIm56LXBhZ2UtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFFTixXQUFXLEVBQ1gsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztNQUVoRyx3QkFBd0IsR0FBRyxZQUFZO0FBMkI3QyxNQUFNLE9BQU8scUJBQXFCOzs7OztJQWtCaEMsWUFBb0IsUUFBa0IsRUFBUyxlQUFnQztRQUEzRCxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBakIvRSwwQkFBcUIsR0FBRyxLQUFLLENBQUM7UUFDOUIscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBRWhCLGVBQVUsR0FBc0MsSUFBSSxDQUFDO1FBSTNDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO0lBVTZCLENBQUM7Ozs7O0lBRW5GLFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDeEMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsWUFBWSxZQUFZLFdBQVcsQ0FBQztZQUNwRixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxPQUFPLENBQUMsVUFBVSxDQUFDLFlBQVksS0FBSyxRQUFRLENBQUM7U0FDN0U7SUFDSCxDQUFDOzs7O0lBRUQsTUFBTTtRQUNKLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDcEI7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDdEI7SUFDSCxDQUFDOzs7WUExREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRSxjQUFjO2dCQUN4QixzbkRBQThDO2dCQUU5QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUsaUJBQWlCO29CQUN4QixvQkFBb0IsRUFBRSxvQkFBb0I7b0JBQzFDLCtCQUErQixFQUFFLFNBQVM7b0JBQzFDLHdCQUF3QixFQUFFLHdCQUF3QjtpQkFDbkQ7dUdBRUM7Ozs7Ozs7O0tBUUM7YUFFSjs7OztZQTlCUSxRQUFRO1lBQ1IsZUFBZTs7O3lCQWtDckIsS0FBSztzQkFDTCxLQUFLO3lCQUNMLEtBQUs7c0JBQ0wsS0FBSztxQkFDTCxNQUFNO2lDQUVOLFlBQVksU0FBQywyQkFBMkIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7cUNBSTNELFlBQVksU0FBQywrQkFBK0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O0FBUFg7SUFBM0MsVUFBVSxDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQzs7c0RBQWtCOzs7SUFOdEUsc0RBQThCOztJQUM5QixpREFBeUI7O0lBRXpCLDJDQUE4RDs7SUFDOUQsd0NBQTZDOztJQUM3QywyQ0FBZ0Q7O0lBQ2hELHdDQUFzRTs7SUFDdEUsdUNBQXFEOztJQUVyRCxtREFFRTs7SUFFRix1REFFRTs7Ozs7SUFFVSx5Q0FBMEI7O0lBQUUsZ0RBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE56Q29uZmlnU2VydmljZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56UGFnZUhlYWRlckJyZWFkY3J1bWJEaXJlY3RpdmUsIE56UGFnZUhlYWRlckZvb3RlckRpcmVjdGl2ZSB9IGZyb20gJy4vbnotcGFnZS1oZWFkZXItY2VsbHMnO1xyXG5cclxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ3BhZ2VIZWFkZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei1wYWdlLWhlYWRlcicsXHJcbiAgZXhwb3J0QXM6ICduelBhZ2VIZWFkZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1wYWdlLWhlYWRlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbnotcGFnZS1oZWFkZXIuY29tcG9uZW50Lmxlc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnYW50LXBhZ2UtaGVhZGVyJyxcclxuICAgICdbY2xhc3MuaGFzLWZvb3Rlcl0nOiAnbnpQYWdlSGVhZGVyRm9vdGVyJyxcclxuICAgICdbY2xhc3MuYW50LXBhZ2UtaGVhZGVyLWdob3N0XSc6ICduekdob3N0JyxcclxuICAgICdbY2xhc3MuaGFzLWJyZWFkY3J1bWJdJzogJ256UGFnZUhlYWRlckJyZWFkY3J1bWInXHJcbiAgfSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgLmFudC1wYWdlLWhlYWRlci1iYWNrLWJ1dHRvbiB7XHJcbiAgICAgICAgYm9yZGVyOiAwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56UGFnZUhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgaXNUZW1wbGF0ZVJlZkJhY2tJY29uID0gZmFsc2U7XHJcbiAgaXNTdHJpbmdCYWNrSWNvbiA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKSBuekJhY2tJY29uOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIG56VGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56U3VidGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgdHJ1ZSkgbnpHaG9zdDogYm9vbGVhbjtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpCYWNrID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBAQ29udGVudENoaWxkKE56UGFnZUhlYWRlckZvb3RlckRpcmVjdGl2ZSwgeyBzdGF0aWM6IGZhbHNlIH0pIG56UGFnZUhlYWRlckZvb3RlcjogRWxlbWVudFJlZjxcclxuICAgIE56UGFnZUhlYWRlckZvb3RlckRpcmVjdGl2ZVxyXG4gID47XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoTnpQYWdlSGVhZGVyQnJlYWRjcnVtYkRpcmVjdGl2ZSwgeyBzdGF0aWM6IGZhbHNlIH0pIG56UGFnZUhlYWRlckJyZWFkY3J1bWI6IEVsZW1lbnRSZWY8XHJcbiAgICBOelBhZ2VIZWFkZXJCcmVhZGNydW1iRGlyZWN0aXZlXHJcbiAgPjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSkge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ256QmFja0ljb24nKSkge1xyXG4gICAgICB0aGlzLmlzVGVtcGxhdGVSZWZCYWNrSWNvbiA9IGNoYW5nZXMubnpCYWNrSWNvbi5jdXJyZW50VmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZjtcclxuICAgICAgdGhpcy5pc1N0cmluZ0JhY2tJY29uID0gdHlwZW9mIGNoYW5nZXMubnpCYWNrSWNvbi5jdXJyZW50VmFsdWUgPT09ICdzdHJpbmcnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25CYWNrKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpCYWNrLm9ic2VydmVycy5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5uekJhY2suZW1pdCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5sb2NhdGlvbi5iYWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==