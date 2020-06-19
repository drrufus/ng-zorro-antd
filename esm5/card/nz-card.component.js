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
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ContentChild, ContentChildren, ElementRef, Input, QueryList, Renderer2, TemplateRef, ViewEncapsulation } from '@angular/core';
import { InputBoolean, NzConfigService, WithConfig } from 'ng-zorro-antd/core';
import { NzCardGridDirective } from './nz-card-grid.directive';
import { NzCardTabComponent } from './nz-card-tab.component';
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'card';
var NzCardComponent = /** @class */ (function () {
    function NzCardComponent(nzConfigService, renderer, elementRef) {
        this.nzConfigService = nzConfigService;
        this.nzLoading = false;
        this.nzActions = [];
        this.nzHeadingAriaLabel = null;
        this.nzHeadingAriaLevel = 4;
        renderer.addClass(elementRef.nativeElement, 'ant-card');
    }
    NzCardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-card',
                    exportAs: 'nzCard',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "<div class=\"ant-card-head\" *ngIf=\"nzTitle || nzExtra || tab\" \r\n  [attr.role]=\"nzHeadingAriaLabel ? 'heading' : null\" \r\n  [attr.aria-label]=\"nzHeadingAriaLabel\"\r\n  [attr.aria-level]=\"nzHeadingAriaLabel ? nzHeadingAriaLevel : null\">\r\n  <div class=\"ant-card-head-wrapper\">\r\n    <div class=\"ant-card-head-title\" *ngIf=\"nzTitle\">\r\n      <ng-container *nzStringTemplateOutlet=\"nzTitle\">\r\n        <h4 style=\"margin-bottom: 0;\">\r\n          {{ nzTitle }}\r\n        </h4>\r\n      </ng-container>\r\n    </div>\r\n    <div class=\"ant-card-extra\" *ngIf=\"nzExtra\">\r\n      <ng-container *nzStringTemplateOutlet=\"nzExtra\">{{ nzExtra }}</ng-container>\r\n    </div>\r\n  </div>\r\n  <ng-container *ngIf=\"tab\">\r\n    <ng-template [ngTemplateOutlet]=\"tab.template\"></ng-template>\r\n  </ng-container>\r\n</div>\r\n<div class=\"ant-card-cover\" *ngIf=\"nzCover\">\r\n  <ng-template [ngTemplateOutlet]=\"nzCover\"></ng-template>\r\n</div>\r\n<div class=\"ant-card-body\" [ngStyle]=\"nzBodyStyle\">\r\n  <ng-container *ngIf=\"!nzLoading\">\r\n    <ng-content></ng-content>\r\n  </ng-container>\r\n  <nz-card-loading *ngIf=\"nzLoading\"></nz-card-loading>\r\n</div>\r\n<ul class=\"ant-card-actions\" *ngIf=\"nzActions.length\">\r\n  <li *ngFor=\"let action of nzActions\" [style.width.%]=\"100 / nzActions.length\">\r\n    <span><ng-template [ngTemplateOutlet]=\"action\"></ng-template></span>\r\n  </li>\r\n</ul>",
                    host: {
                        '[class.ant-card-loading]': 'nzLoading',
                        '[class.ant-card-bordered]': 'nzBordered',
                        '[class.ant-card-hoverable]': 'nzHoverable',
                        '[class.ant-card-small]': 'nzSize === "small"',
                        '[class.ant-card-contain-grid]': 'grids && grids.length',
                        '[class.ant-card-type-inner]': 'nzType === "inner"',
                        '[class.ant-card-contain-tabs]': '!!tab'
                    },
                    styles: ["\n      nz-card {\n        display: block;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzCardComponent.ctorParameters = function () { return [
        { type: NzConfigService },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    NzCardComponent.propDecorators = {
        nzBordered: [{ type: Input }],
        nzLoading: [{ type: Input }],
        nzHoverable: [{ type: Input }],
        nzBodyStyle: [{ type: Input }],
        nzCover: [{ type: Input }],
        nzActions: [{ type: Input }],
        nzType: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzTitle: [{ type: Input }],
        nzExtra: [{ type: Input }],
        nzHeadingAriaLabel: [{ type: Input }],
        nzHeadingAriaLevel: [{ type: Input }],
        tab: [{ type: ContentChild, args: [NzCardTabComponent, { static: false },] }],
        grids: [{ type: ContentChildren, args: [NzCardGridDirective,] }]
    };
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, true), InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzCardComponent.prototype, "nzBordered", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzCardComponent.prototype, "nzLoading", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzCardComponent.prototype, "nzHoverable", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default'),
        tslib_1.__metadata("design:type", String)
    ], NzCardComponent.prototype, "nzSize", void 0);
    return NzCardComponent;
}());
export { NzCardComponent };
if (false) {
    /** @type {?} */
    NzCardComponent.prototype.nzBordered;
    /** @type {?} */
    NzCardComponent.prototype.nzLoading;
    /** @type {?} */
    NzCardComponent.prototype.nzHoverable;
    /** @type {?} */
    NzCardComponent.prototype.nzBodyStyle;
    /** @type {?} */
    NzCardComponent.prototype.nzCover;
    /** @type {?} */
    NzCardComponent.prototype.nzActions;
    /** @type {?} */
    NzCardComponent.prototype.nzType;
    /** @type {?} */
    NzCardComponent.prototype.nzSize;
    /** @type {?} */
    NzCardComponent.prototype.nzTitle;
    /** @type {?} */
    NzCardComponent.prototype.nzExtra;
    /** @type {?} */
    NzCardComponent.prototype.nzHeadingAriaLabel;
    /** @type {?} */
    NzCardComponent.prototype.nzHeadingAriaLevel;
    /** @type {?} */
    NzCardComponent.prototype.tab;
    /** @type {?} */
    NzCardComponent.prototype.grids;
    /** @type {?} */
    NzCardComponent.prototype.nzConfigService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NhcmQvIiwic291cmNlcyI6WyJuei1jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixlQUFlLEVBQ2YsVUFBVSxFQUNWLEtBQUssRUFDTCxTQUFTLEVBQ1QsU0FBUyxFQUNULFdBQVcsRUFDWCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQWdCLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzdGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztJQUV2RCx3QkFBd0IsR0FBRyxNQUFNO0FBRXZDO0lBd0NFLHlCQUFtQixlQUFnQyxFQUFFLFFBQW1CLEVBQUUsVUFBc0I7UUFBN0Usb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBZDFCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFJbEMsY0FBUyxHQUE2QixFQUFFLENBQUM7UUFLekMsdUJBQWtCLEdBQWtCLElBQUksQ0FBQztRQUN6Qyx1QkFBa0IsR0FBVyxDQUFDLENBQUM7UUFLdEMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzFELENBQUM7O2dCQTFDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFFBQVEsRUFBRSxRQUFRO29CQUNsQixtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLDg2Q0FBdUM7b0JBUXZDLElBQUksRUFBRTt3QkFDSiwwQkFBMEIsRUFBRSxXQUFXO3dCQUN2QywyQkFBMkIsRUFBRSxZQUFZO3dCQUN6Qyw0QkFBNEIsRUFBRSxhQUFhO3dCQUMzQyx3QkFBd0IsRUFBRSxvQkFBb0I7d0JBQzlDLCtCQUErQixFQUFFLHVCQUF1Qjt3QkFDeEQsNkJBQTZCLEVBQUUsb0JBQW9CO3dCQUNuRCwrQkFBK0IsRUFBRSxPQUFPO3FCQUN6Qzs2QkFkQywyREFJQztpQkFXSjs7OztnQkE3QnNCLGVBQWU7Z0JBSnBDLFNBQVM7Z0JBSFQsVUFBVTs7OzZCQXNDVCxLQUFLOzRCQUNMLEtBQUs7OEJBQ0wsS0FBSzs4QkFDTCxLQUFLOzBCQUNMLEtBQUs7NEJBQ0wsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLO3FDQUNMLEtBQUs7cUNBQ0wsS0FBSztzQkFDTCxZQUFZLFNBQUMsa0JBQWtCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO3dCQUNsRCxlQUFlLFNBQUMsbUJBQW1COztJQWJpQztRQUEzRCxVQUFVLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLEVBQUUsWUFBWSxFQUFFOzt1REFBcUI7SUFDaEU7UUFBZixZQUFZLEVBQUU7O3NEQUFtQjtJQUMyQjtRQUE1RCxVQUFVLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLEVBQUUsWUFBWSxFQUFFOzt3REFBc0I7SUFLakM7UUFBaEQsVUFBVSxDQUFDLHdCQUF3QixFQUFFLFNBQVMsQ0FBQzs7bURBQXNCO0lBV2pGLHNCQUFDO0NBQUEsQUEzQ0QsSUEyQ0M7U0FuQlksZUFBZTs7O0lBQzFCLHFDQUF5Rjs7SUFDekYsb0NBQTJDOztJQUMzQyxzQ0FBMkY7O0lBQzNGLHNDQUFnRDs7SUFDaEQsa0NBQW9DOztJQUNwQyxvQ0FBa0Q7O0lBQ2xELGlDQUF3Qjs7SUFDeEIsaUNBQStFOztJQUMvRSxrQ0FBNkM7O0lBQzdDLGtDQUE2Qzs7SUFDN0MsNkNBQWtEOztJQUNsRCw2Q0FBd0M7O0lBQ3hDLDhCQUE2RTs7SUFDN0UsZ0NBQTRFOztJQUVoRSwwQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBOekNvbmZpZ1NlcnZpY2UsIE56U2l6ZURTVHlwZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56Q2FyZEdyaWREaXJlY3RpdmUgfSBmcm9tICcuL256LWNhcmQtZ3JpZC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBOekNhcmRUYWJDb21wb25lbnQgfSBmcm9tICcuL256LWNhcmQtdGFiLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAnY2FyZCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LWNhcmQnLFxyXG4gIGV4cG9ydEFzOiAnbnpDYXJkJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1jYXJkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgbnotY2FyZCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LWNhcmQtbG9hZGluZ10nOiAnbnpMb2FkaW5nJyxcclxuICAgICdbY2xhc3MuYW50LWNhcmQtYm9yZGVyZWRdJzogJ256Qm9yZGVyZWQnLFxyXG4gICAgJ1tjbGFzcy5hbnQtY2FyZC1ob3ZlcmFibGVdJzogJ256SG92ZXJhYmxlJyxcclxuICAgICdbY2xhc3MuYW50LWNhcmQtc21hbGxdJzogJ256U2l6ZSA9PT0gXCJzbWFsbFwiJyxcclxuICAgICdbY2xhc3MuYW50LWNhcmQtY29udGFpbi1ncmlkXSc6ICdncmlkcyAmJiBncmlkcy5sZW5ndGgnLFxyXG4gICAgJ1tjbGFzcy5hbnQtY2FyZC10eXBlLWlubmVyXSc6ICduelR5cGUgPT09IFwiaW5uZXJcIicsXHJcbiAgICAnW2NsYXNzLmFudC1jYXJkLWNvbnRhaW4tdGFic10nOiAnISF0YWInXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpDYXJkQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIHRydWUpIEBJbnB1dEJvb2xlYW4oKSBuekJvcmRlcmVkOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekxvYWRpbmcgPSBmYWxzZTtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIGZhbHNlKSBASW5wdXRCb29sZWFuKCkgbnpIb3ZlcmFibGU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgbnpCb2R5U3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcbiAgQElucHV0KCkgbnpDb3ZlcjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpBY3Rpb25zOiBBcnJheTxUZW1wbGF0ZVJlZjx2b2lkPj4gPSBbXTtcclxuICBASW5wdXQoKSBuelR5cGU6IHN0cmluZztcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsICdkZWZhdWx0JykgbnpTaXplOiBOelNpemVEU1R5cGU7XHJcbiAgQElucHV0KCkgbnpUaXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpFeHRyYTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpIZWFkaW5nQXJpYUxhYmVsOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBuekhlYWRpbmdBcmlhTGV2ZWw6IG51bWJlciA9IDQ7XHJcbiAgQENvbnRlbnRDaGlsZChOekNhcmRUYWJDb21wb25lbnQsIHsgc3RhdGljOiBmYWxzZSB9KSB0YWI6IE56Q2FyZFRhYkNvbXBvbmVudDtcclxuICBAQ29udGVudENoaWxkcmVuKE56Q2FyZEdyaWREaXJlY3RpdmUpIGdyaWRzOiBRdWVyeUxpc3Q8TnpDYXJkR3JpZERpcmVjdGl2ZT47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWNhcmQnKTtcclxuICB9XHJcbn1cclxuIl19