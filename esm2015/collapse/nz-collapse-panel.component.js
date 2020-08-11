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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Host, Input, Output, Renderer2, ViewEncapsulation, ViewChild } from '@angular/core';
import { collapseMotion, InputBoolean, NzConfigService, WithConfig } from 'ng-zorro-antd/core';
import { NzCollapseComponent } from './nz-collapse.component';
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'collapsePanel';
export class NzCollapsePanelComponent {
    /**
     * @param {?} nzConfigService
     * @param {?} cdr
     * @param {?} nzCollapseComponent
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(nzConfigService, cdr, nzCollapseComponent, elementRef, renderer) {
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.nzCollapseComponent = nzCollapseComponent;
        this.nzActive = false;
        this.nzDisabled = false;
        this.nzHeadingAriaLabel = null;
        this.nzRole = 'tab';
        this.nzActiveChange = new EventEmitter();
        renderer.addClass(elementRef.nativeElement, 'ant-collapse-item');
    }
    /**
     * @return {?}
     */
    clickHeader() {
        if (!this.nzDisabled) {
            this.nzCollapseComponent.click(this);
        }
    }
    /**
     * @return {?}
     */
    focusOnHeader() {
        this._focusableHeader.nativeElement.focus();
    }
    /**
     * @return {?}
     */
    markForCheck() {
        this.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.nzCollapseComponent.addPanel(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.nzCollapseComponent.removePanel(this);
    }
}
NzCollapsePanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-collapse-panel',
                exportAs: 'nzCollapsePanel',
                template: "<div class=\"ant-collapse-header\" style=\"display: flex; justify-content: space-between;\"\r\n  [attr.role]=\"nzHeadingAriaLabel ? 'heading' : null\" [attr.aria-label]=\"nzHeadingAriaLabel\"\r\n  [attr.aria-level]=\"nzHeadingAriaLabel ? 4 : null\">\r\n  <div [attr.role]=\"nzRole\" [attr.aria-expanded]=\"nzActive\" style=\"flex: 1;\" (keyup.enter)=\"clickHeader()\"\r\n    (keyup.Space)=\"clickHeader()\" (click)=\"clickHeader()\" [attr.tabindex]=\"nzDisabled ? null : 0\"\r\n    [attr.aria-disabled]=\"nzDisabled\" #focusable>\r\n    <ng-container *ngIf=\"nzShowArrow\">\r\n      <ng-container *nzStringTemplateOutlet=\"nzExpandedIcon\">\r\n        <a class=\"ant-collapse-arrow-link\" aria-hidden=\"true\">\r\n          <i nz-icon [nzType]=\"nzExpandedIcon || 'right'\" class=\"ant-collapse-arrow\" [nzRotate]=\"nzActive ? 90 : 0\"></i>\r\n        </a>\r\n      </ng-container>\r\n    </ng-container>\r\n    <ng-container *nzStringTemplateOutlet=\"nzHeader\">\r\n      {{ nzHeader }}\r\n    </ng-container>\r\n  </div>\r\n  <div class=\"ant-collapse-extra\" *ngIf=\"nzExtra\">\r\n    <ng-container *nzStringTemplateOutlet=\"nzExtra\">{{ nzExtra }}</ng-container>\r\n  </div>\r\n</div>\r\n<div class=\"ant-collapse-content\" [class.ant-collapse-content-active]=\"nzActive\"\r\n  [@collapseMotion]=\"nzActive ? 'expanded' : 'hidden' \">\r\n  <div class=\"ant-collapse-content-box\" [hidden]=\"!nzActive\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                animations: [collapseMotion],
                host: {
                    '[class.ant-collapse-no-arrow]': '!nzShowArrow',
                    '[class.ant-collapse-item-active]': 'nzActive',
                    '[class.ant-collapse-item-disabled]': 'nzDisabled'
                },
                styles: [`
      nz-collapse-panel {
        display: block;
      }
    `]
            }] }
];
/** @nocollapse */
NzCollapsePanelComponent.ctorParameters = () => [
    { type: NzConfigService },
    { type: ChangeDetectorRef },
    { type: NzCollapseComponent, decorators: [{ type: Host }] },
    { type: ElementRef },
    { type: Renderer2 }
];
NzCollapsePanelComponent.propDecorators = {
    nzActive: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzShowArrow: [{ type: Input }],
    nzExtra: [{ type: Input }],
    nzHeader: [{ type: Input }],
    nzHeadingAriaLabel: [{ type: Input }],
    nzExpandedIcon: [{ type: Input }],
    nzRole: [{ type: Input }],
    nzActiveChange: [{ type: Output }],
    _focusableHeader: [{ type: ViewChild, args: ["focusable", { static: false },] }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzCollapsePanelComponent.prototype, "nzActive", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzCollapsePanelComponent.prototype, "nzDisabled", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, true), InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzCollapsePanelComponent.prototype, "nzShowArrow", void 0);
if (false) {
    /** @type {?} */
    NzCollapsePanelComponent.prototype.nzActive;
    /** @type {?} */
    NzCollapsePanelComponent.prototype.nzDisabled;
    /** @type {?} */
    NzCollapsePanelComponent.prototype.nzShowArrow;
    /** @type {?} */
    NzCollapsePanelComponent.prototype.nzExtra;
    /** @type {?} */
    NzCollapsePanelComponent.prototype.nzHeader;
    /** @type {?} */
    NzCollapsePanelComponent.prototype.nzHeadingAriaLabel;
    /** @type {?} */
    NzCollapsePanelComponent.prototype.nzExpandedIcon;
    /** @type {?} */
    NzCollapsePanelComponent.prototype.nzRole;
    /** @type {?} */
    NzCollapsePanelComponent.prototype.nzActiveChange;
    /**
     * @type {?}
     * @private
     */
    NzCollapsePanelComponent.prototype._focusableHeader;
    /** @type {?} */
    NzCollapsePanelComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzCollapsePanelComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzCollapsePanelComponent.prototype.nzCollapseComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29sbGFwc2UtcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb2xsYXBzZS8iLCJzb3VyY2VzIjpbIm56LWNvbGxhcHNlLXBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLElBQUksRUFDSixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsRUFFVCxpQkFBaUIsRUFDakIsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUvRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7TUFFeEQsd0JBQXdCLEdBQUcsZUFBZTtBQXNCaEQsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7Ozs7SUE0Qm5DLFlBQ1MsZUFBZ0MsRUFDL0IsR0FBc0IsRUFDZCxtQkFBd0MsRUFDeEQsVUFBc0IsRUFDdEIsUUFBbUI7UUFKWixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDL0IsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDZCx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBOUJqQyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFJbkMsdUJBQWtCLEdBQWtCLElBQUksQ0FBQztRQUV6QyxXQUFNLEdBQVcsS0FBSyxDQUFDO1FBQ2IsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBMEI5RCxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7O0lBdEJELFdBQVc7UUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQzs7OztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzlDLENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7O0lBWUQsUUFBUTtRQUNOLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7OztZQWhFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsazhDQUFpRDtnQkFDakQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxVQUFVLEVBQUUsQ0FBQyxjQUFjLENBQUM7Z0JBUTVCLElBQUksRUFBRTtvQkFDSiwrQkFBK0IsRUFBRSxjQUFjO29CQUMvQyxrQ0FBa0MsRUFBRSxVQUFVO29CQUM5QyxvQ0FBb0MsRUFBRSxZQUFZO2lCQUNuRDt5QkFWQzs7OztLQUlDO2FBT0o7Ozs7WUF6QnNDLGVBQWU7WUFmcEQsaUJBQWlCO1lBaUJWLG1CQUFtQix1QkF1RHZCLElBQUk7WUF0RVAsVUFBVTtZQU9WLFNBQVM7Ozt1QkFpQ1IsS0FBSzt5QkFDTCxLQUFLOzBCQUNMLEtBQUs7c0JBQ0wsS0FBSzt1QkFDTCxLQUFLO2lDQUNMLEtBQUs7NkJBQ0wsS0FBSztxQkFDTCxLQUFLOzZCQUNMLE1BQU07K0JBRU4sU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O0FBVmhCO0lBQWYsWUFBWSxFQUFFOzswREFBa0I7QUFDakI7SUFBZixZQUFZLEVBQUU7OzREQUFvQjtBQUN5QjtJQUEzRCxVQUFVLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLEVBQUUsWUFBWSxFQUFFOzs2REFBc0I7OztJQUYxRiw0Q0FBMEM7O0lBQzFDLDhDQUE0Qzs7SUFDNUMsK0NBQTBGOztJQUMxRiwyQ0FBNkM7O0lBQzdDLDRDQUE4Qzs7SUFDOUMsc0RBQWtEOztJQUNsRCxrREFBb0Q7O0lBQ3BELDBDQUFnQzs7SUFDaEMsa0RBQWdFOzs7OztJQUVoRSxvREFDcUM7O0lBaUJuQyxtREFBdUM7Ozs7O0lBQ3ZDLHVDQUE4Qjs7Ozs7SUFDOUIsdURBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEhvc3QsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG4gIFZpZXdDaGlsZFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgY29sbGFwc2VNb3Rpb24sIElucHV0Qm9vbGVhbiwgTnpDb25maWdTZXJ2aWNlLCBXaXRoQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56Q29sbGFwc2VDb21wb25lbnQgfSBmcm9tICcuL256LWNvbGxhcHNlLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAnY29sbGFwc2VQYW5lbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LWNvbGxhcHNlLXBhbmVsJyxcclxuICBleHBvcnRBczogJ256Q29sbGFwc2VQYW5lbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LWNvbGxhcHNlLXBhbmVsLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGFuaW1hdGlvbnM6IFtjb2xsYXBzZU1vdGlvbl0sXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIG56LWNvbGxhcHNlLXBhbmVsIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF0sXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtY29sbGFwc2Utbm8tYXJyb3ddJzogJyFuelNob3dBcnJvdycsXHJcbiAgICAnW2NsYXNzLmFudC1jb2xsYXBzZS1pdGVtLWFjdGl2ZV0nOiAnbnpBY3RpdmUnLFxyXG4gICAgJ1tjbGFzcy5hbnQtY29sbGFwc2UtaXRlbS1kaXNhYmxlZF0nOiAnbnpEaXNhYmxlZCdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekNvbGxhcHNlUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QWN0aXZlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIHRydWUpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dBcnJvdzogYm9vbGVhbjtcclxuICBASW5wdXQoKSBuekV4dHJhOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuekhlYWRlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpIZWFkaW5nQXJpYUxhYmVsOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBuekV4cGFuZGVkSWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpSb2xlOiBzdHJpbmcgPSAndGFiJztcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpBY3RpdmVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoXCJmb2N1c2FibGVcIiwgeyBzdGF0aWM6IGZhbHNlIH0pXHJcbiAgcHJpdmF0ZSBfZm9jdXNhYmxlSGVhZGVyOiBFbGVtZW50UmVmO1xyXG5cclxuICBjbGlja0hlYWRlcigpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5uekRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMubnpDb2xsYXBzZUNvbXBvbmVudC5jbGljayh0aGlzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvY3VzT25IZWFkZXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9mb2N1c2FibGVIZWFkZXIubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgbWFya0ZvckNoZWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIEBIb3N0KCkgcHJpdmF0ZSBuekNvbGxhcHNlQ29tcG9uZW50OiBOekNvbGxhcHNlQ29tcG9uZW50LFxyXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjJcclxuICApIHtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1jb2xsYXBzZS1pdGVtJyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMubnpDb2xsYXBzZUNvbXBvbmVudC5hZGRQYW5lbCh0aGlzKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5uekNvbGxhcHNlQ29tcG9uZW50LnJlbW92ZVBhbmVsKHRoaXMpO1xyXG4gIH1cclxufVxyXG4iXX0=