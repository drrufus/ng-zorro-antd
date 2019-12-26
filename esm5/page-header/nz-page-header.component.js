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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcGFnZS1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9wYWdlLWhlYWRlci8iLCJzb3VyY2VzIjpbIm56LXBhZ2UtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFFTixXQUFXLEVBQ1gsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztJQUVoRyx3QkFBd0IsR0FBRyxZQUFZO0FBRTdDO0lBMkNFLCtCQUFvQixRQUFrQixFQUFTLGVBQWdDO1FBQTNELGFBQVEsR0FBUixRQUFRLENBQVU7UUFBUyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFqQi9FLDBCQUFxQixHQUFHLEtBQUssQ0FBQztRQUM5QixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFFaEIsZUFBVSxHQUFzQyxJQUFJLENBQUM7UUFJM0MsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7SUFVNkIsQ0FBQzs7Ozs7SUFFbkYsMkNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUN4QyxJQUFJLENBQUMscUJBQXFCLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxZQUFZLFlBQVksV0FBVyxDQUFDO1lBQ3BGLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxPQUFPLE9BQU8sQ0FBQyxVQUFVLENBQUMsWUFBWSxLQUFLLFFBQVEsQ0FBQztTQUM3RTtJQUNILENBQUM7Ozs7SUFFRCxzQ0FBTTs7O0lBQU47UUFDRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtZQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3BCO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQzs7Z0JBMURGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsY0FBYztvQkFDeEIsc25EQUE4QztvQkFFOUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxJQUFJLEVBQUU7d0JBQ0osS0FBSyxFQUFFLGlCQUFpQjt3QkFDeEIsb0JBQW9CLEVBQUUsb0JBQW9CO3dCQUMxQywrQkFBK0IsRUFBRSxTQUFTO3dCQUMxQyx3QkFBd0IsRUFBRSx3QkFBd0I7cUJBQ25EOzJHQUVDLHFNQVFDO2lCQUVKOzs7O2dCQTlCUSxRQUFRO2dCQUNSLGVBQWU7Ozs2QkFrQ3JCLEtBQUs7MEJBQ0wsS0FBSzs2QkFDTCxLQUFLOzBCQUNMLEtBQUs7eUJBQ0wsTUFBTTtxQ0FFTixZQUFZLFNBQUMsMkJBQTJCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO3lDQUkzRCxZQUFZLFNBQUMsK0JBQStCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOztJQVBYO1FBQTNDLFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLENBQUM7OzBEQUFrQjtJQTJCeEUsNEJBQUM7Q0FBQSxBQTNERCxJQTJEQztTQWxDWSxxQkFBcUI7OztJQUNoQyxzREFBOEI7O0lBQzlCLGlEQUF5Qjs7SUFFekIsMkNBQThEOztJQUM5RCx3Q0FBNkM7O0lBQzdDLDJDQUFnRDs7SUFDaEQsd0NBQXNFOztJQUN0RSx1Q0FBcUQ7O0lBRXJELG1EQUVFOztJQUVGLHVEQUVFOzs7OztJQUVVLHlDQUEwQjs7SUFBRSxnREFBdUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTnpDb25maWdTZXJ2aWNlLCBXaXRoQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpQYWdlSGVhZGVyQnJlYWRjcnVtYkRpcmVjdGl2ZSwgTnpQYWdlSGVhZGVyRm9vdGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9uei1wYWdlLWhlYWRlci1jZWxscyc7XHJcblxyXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAncGFnZUhlYWRlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LXBhZ2UtaGVhZGVyJyxcclxuICBleHBvcnRBczogJ256UGFnZUhlYWRlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXBhZ2UtaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9uei1wYWdlLWhlYWRlci5jb21wb25lbnQubGVzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICdhbnQtcGFnZS1oZWFkZXInLFxyXG4gICAgJ1tjbGFzcy5oYXMtZm9vdGVyXSc6ICduelBhZ2VIZWFkZXJGb290ZXInLFxyXG4gICAgJ1tjbGFzcy5hbnQtcGFnZS1oZWFkZXItZ2hvc3RdJzogJ256R2hvc3QnLFxyXG4gICAgJ1tjbGFzcy5oYXMtYnJlYWRjcnVtYl0nOiAnbnpQYWdlSGVhZGVyQnJlYWRjcnVtYidcclxuICB9LFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICAuYW50LXBhZ2UtaGVhZGVyLWJhY2stYnV0dG9uIHtcclxuICAgICAgICBib3JkZXI6IDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpQYWdlSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBpc1RlbXBsYXRlUmVmQmFja0ljb24gPSBmYWxzZTtcclxuICBpc1N0cmluZ0JhY2tJY29uID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIG56QmFja0ljb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgbnpUaXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpTdWJ0aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCB0cnVlKSBuekdob3N0OiBib29sZWFuO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoTnpQYWdlSGVhZGVyRm9vdGVyRGlyZWN0aXZlLCB7IHN0YXRpYzogZmFsc2UgfSkgbnpQYWdlSGVhZGVyRm9vdGVyOiBFbGVtZW50UmVmPFxyXG4gICAgTnpQYWdlSGVhZGVyRm9vdGVyRGlyZWN0aXZlXHJcbiAgPjtcclxuXHJcbiAgQENvbnRlbnRDaGlsZChOelBhZ2VIZWFkZXJCcmVhZGNydW1iRGlyZWN0aXZlLCB7IHN0YXRpYzogZmFsc2UgfSkgbnpQYWdlSGVhZGVyQnJlYWRjcnVtYjogRWxlbWVudFJlZjxcclxuICAgIE56UGFnZUhlYWRlckJyZWFkY3J1bWJEaXJlY3RpdmVcclxuICA+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbiwgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnbnpCYWNrSWNvbicpKSB7XHJcbiAgICAgIHRoaXMuaXNUZW1wbGF0ZVJlZkJhY2tJY29uID0gY2hhbmdlcy5uekJhY2tJY29uLmN1cnJlbnRWYWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmO1xyXG4gICAgICB0aGlzLmlzU3RyaW5nQmFja0ljb24gPSB0eXBlb2YgY2hhbmdlcy5uekJhY2tJY29uLmN1cnJlbnRWYWx1ZSA9PT0gJ3N0cmluZyc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkJhY2soKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uekJhY2sub2JzZXJ2ZXJzLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLm56QmFjay5lbWl0KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmxvY2F0aW9uLmJhY2soKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19