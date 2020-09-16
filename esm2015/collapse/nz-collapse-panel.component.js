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
        this.nzHeadingAriaLevel = 4;
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
                template: "<div class=\"ant-collapse-header\" style=\"display: flex; justify-content: space-between;\"\r\n  [attr.role]=\"nzHeadingAriaLabel ? 'heading' : null\" [attr.aria-label]=\"nzHeadingAriaLabel\"\r\n  [attr.aria-level]=\"nzHeadingAriaLabel ? nzHeadingAriaLevel : null\">\r\n  <div [attr.role]=\"nzRole\" [attr.aria-expanded]=\"nzActive\" style=\"flex: 1;\" (keyup.enter)=\"clickHeader()\"\r\n    (keyup.Space)=\"clickHeader()\" (click)=\"clickHeader()\" [attr.tabindex]=\"nzDisabled ? null : 0\"\r\n    [attr.aria-disabled]=\"nzDisabled\" #focusable>\r\n    <ng-container *ngIf=\"nzShowArrow\">\r\n      <ng-container *nzStringTemplateOutlet=\"nzExpandedIcon\">\r\n        <a class=\"ant-collapse-arrow-link\" aria-hidden=\"true\">\r\n          <i nz-icon [nzType]=\"nzExpandedIcon || 'right'\" class=\"ant-collapse-arrow\" [nzRotate]=\"nzActive ? 90 : 0\"></i>\r\n        </a>\r\n      </ng-container>\r\n    </ng-container>\r\n    <ng-container *nzStringTemplateOutlet=\"nzHeader\">\r\n      {{ nzHeader }}\r\n    </ng-container>\r\n  </div>\r\n  <div class=\"ant-collapse-extra\" *ngIf=\"nzExtra\">\r\n    <ng-container *nzStringTemplateOutlet=\"nzExtra\">{{ nzExtra }}</ng-container>\r\n  </div>\r\n</div>\r\n<div class=\"ant-collapse-content\" [class.ant-collapse-content-active]=\"nzActive\"\r\n  [@collapseMotion]=\"nzActive ? 'expanded' : 'hidden' \">\r\n  <div class=\"ant-collapse-content-box\" [hidden]=\"!nzActive\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>",
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
    nzHeadingAriaLevel: [{ type: Input }],
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
    NzCollapsePanelComponent.prototype.nzHeadingAriaLevel;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29sbGFwc2UtcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb2xsYXBzZS8iLCJzb3VyY2VzIjpbIm56LWNvbGxhcHNlLXBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLElBQUksRUFDSixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsRUFFVCxpQkFBaUIsRUFDakIsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUvRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7TUFFeEQsd0JBQXdCLEdBQUcsZUFBZTtBQXNCaEQsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7Ozs7SUE2Qm5DLFlBQ1MsZUFBZ0MsRUFDL0IsR0FBc0IsRUFDZCxtQkFBd0MsRUFDeEQsVUFBc0IsRUFDdEIsUUFBbUI7UUFKWixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDL0IsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDZCx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBL0JqQyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFJbkMsdUJBQWtCLEdBQWtCLElBQUksQ0FBQztRQUN6Qyx1QkFBa0IsR0FBVyxDQUFDLENBQUM7UUFFL0IsV0FBTSxHQUFXLEtBQUssQ0FBQztRQUNiLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQTBCOUQsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFDbkUsQ0FBQzs7OztJQXRCRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN0QztJQUNILENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM5QyxDQUFDOzs7O0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7OztJQVlELFFBQVE7UUFDTixJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7WUFqRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLG05Q0FBaUQ7Z0JBQ2pELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsVUFBVSxFQUFFLENBQUMsY0FBYyxDQUFDO2dCQVE1QixJQUFJLEVBQUU7b0JBQ0osK0JBQStCLEVBQUUsY0FBYztvQkFDL0Msa0NBQWtDLEVBQUUsVUFBVTtvQkFDOUMsb0NBQW9DLEVBQUUsWUFBWTtpQkFDbkQ7eUJBVkM7Ozs7S0FJQzthQU9KOzs7O1lBekJzQyxlQUFlO1lBZnBELGlCQUFpQjtZQWlCVixtQkFBbUIsdUJBd0R2QixJQUFJO1lBdkVQLFVBQVU7WUFPVixTQUFTOzs7dUJBaUNSLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxLQUFLO3NCQUNMLEtBQUs7dUJBQ0wsS0FBSztpQ0FDTCxLQUFLO2lDQUNMLEtBQUs7NkJBQ0wsS0FBSztxQkFDTCxLQUFLOzZCQUNMLE1BQU07K0JBRU4sU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O0FBWGhCO0lBQWYsWUFBWSxFQUFFOzswREFBa0I7QUFDakI7SUFBZixZQUFZLEVBQUU7OzREQUFvQjtBQUN5QjtJQUEzRCxVQUFVLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLEVBQUUsWUFBWSxFQUFFOzs2REFBc0I7OztJQUYxRiw0Q0FBMEM7O0lBQzFDLDhDQUE0Qzs7SUFDNUMsK0NBQTBGOztJQUMxRiwyQ0FBNkM7O0lBQzdDLDRDQUE4Qzs7SUFDOUMsc0RBQWtEOztJQUNsRCxzREFBd0M7O0lBQ3hDLGtEQUFvRDs7SUFDcEQsMENBQWdDOztJQUNoQyxrREFBZ0U7Ozs7O0lBRWhFLG9EQUNxQzs7SUFpQm5DLG1EQUF1Qzs7Ozs7SUFDdkMsdUNBQThCOzs7OztJQUM5Qix1REFBd0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdCxcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbiAgVmlld0NoaWxkXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBjb2xsYXBzZU1vdGlvbiwgSW5wdXRCb29sZWFuLCBOekNvbmZpZ1NlcnZpY2UsIFdpdGhDb25maWcgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpDb2xsYXBzZUNvbXBvbmVudCB9IGZyb20gJy4vbnotY29sbGFwc2UuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdjb2xsYXBzZVBhbmVsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotY29sbGFwc2UtcGFuZWwnLFxyXG4gIGV4cG9ydEFzOiAnbnpDb2xsYXBzZVBhbmVsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotY29sbGFwc2UtcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgYW5pbWF0aW9uczogW2NvbGxhcHNlTW90aW9uXSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgbnotY29sbGFwc2UtcGFuZWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXSxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC1jb2xsYXBzZS1uby1hcnJvd10nOiAnIW56U2hvd0Fycm93JyxcclxuICAgICdbY2xhc3MuYW50LWNvbGxhcHNlLWl0ZW0tYWN0aXZlXSc6ICduekFjdGl2ZScsXHJcbiAgICAnW2NsYXNzLmFudC1jb2xsYXBzZS1pdGVtLWRpc2FibGVkXSc6ICduekRpc2FibGVkJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56Q29sbGFwc2VQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpBY3RpdmUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgdHJ1ZSkgQElucHV0Qm9vbGVhbigpIG56U2hvd0Fycm93OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIG56RXh0cmE6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56SGVhZGVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuekhlYWRpbmdBcmlhTGFiZWw6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIG56SGVhZGluZ0FyaWFMZXZlbDogbnVtYmVyID0gNDtcclxuICBASW5wdXQoKSBuekV4cGFuZGVkSWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpSb2xlOiBzdHJpbmcgPSAndGFiJztcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpBY3RpdmVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoXCJmb2N1c2FibGVcIiwgeyBzdGF0aWM6IGZhbHNlIH0pXHJcbiAgcHJpdmF0ZSBfZm9jdXNhYmxlSGVhZGVyOiBFbGVtZW50UmVmO1xyXG5cclxuICBjbGlja0hlYWRlcigpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5uekRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMubnpDb2xsYXBzZUNvbXBvbmVudC5jbGljayh0aGlzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvY3VzT25IZWFkZXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9mb2N1c2FibGVIZWFkZXIubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgbWFya0ZvckNoZWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIEBIb3N0KCkgcHJpdmF0ZSBuekNvbGxhcHNlQ29tcG9uZW50OiBOekNvbGxhcHNlQ29tcG9uZW50LFxyXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjJcclxuICApIHtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1jb2xsYXBzZS1pdGVtJyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMubnpDb2xsYXBzZUNvbXBvbmVudC5hZGRQYW5lbCh0aGlzKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5uekNvbGxhcHNlQ29tcG9uZW50LnJlbW92ZVBhbmVsKHRoaXMpO1xyXG4gIH1cclxufVxyXG4iXX0=