import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Host, Input, Optional, Renderer2, ViewEncapsulation } from '@angular/core';
import { InputBoolean, NzUpdateHostClassService, toBoolean } from 'ng-zorro-antd/core';
import { NzColDirective, NzRowDirective } from 'ng-zorro-antd/grid';
import { NzFormItemComponent } from './nz-form-item.component';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
import * as i2 from "./nz-form-item.component";
import * as i3 from "ng-zorro-antd/grid";
const _c0 = ["*"];
export class NzFormLabelComponent extends NzColDirective {
    constructor(nzUpdateHostClassService, elementRef, nzFormItemComponent, nzRowDirective, renderer, cdr) {
        super(nzUpdateHostClassService, elementRef, nzFormItemComponent || nzRowDirective, renderer);
        this.cdr = cdr;
        this.nzRequired = false;
        this.defaultNoColon = false;
        this.noColon = 'default';
        renderer.addClass(elementRef.nativeElement, 'ant-form-item-label');
    }
    set nzNoColon(value) {
        this.noColon = toBoolean(value);
    }
    get nzNoColon() {
        return !!this.noColon;
    }
    setDefaultNoColon(value) {
        this.defaultNoColon = toBoolean(value);
        this.cdr.markForCheck();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
    }
}
/** @nocollapse */ NzFormLabelComponent.ɵfac = function NzFormLabelComponent_Factory(t) { return new (t || NzFormLabelComponent)(i0.ɵɵdirectiveInject(i1.NzUpdateHostClassService), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i2.NzFormItemComponent, 9), i0.ɵɵdirectiveInject(i3.NzRowDirective, 9), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
/** @nocollapse */ NzFormLabelComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzFormLabelComponent, selectors: [["nz-form-label"]], inputs: { nzFor: "nzFor", nzRequired: "nzRequired", nzNoColon: "nzNoColon" }, exportAs: ["nzFormLabel"], features: [i0.ɵɵProvidersFeature([NzUpdateHostClassService]), i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 3, template: function NzFormLabelComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "label");
        i0.ɵɵprojection(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassProp("ant-form-item-no-colon", ctx.noColon === "default" ? ctx.defaultNoColon : ctx.nzNoColon)("ant-form-item-required", ctx.nzRequired);
        i0.ɵɵattribute("for", ctx.nzFor);
    } }, encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzFormLabelComponent.prototype, "nzRequired", void 0);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzFormLabelComponent, [{
        type: Component,
        args: [{
                selector: 'nz-form-label',
                exportAs: 'nzFormLabel',
                providers: [NzUpdateHostClassService],
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                templateUrl: './nz-form-label.component.html'
            }]
    }], function () { return [{ type: i1.NzUpdateHostClassService }, { type: i0.ElementRef }, { type: i2.NzFormItemComponent, decorators: [{
                type: Optional
            }, {
                type: Host
            }] }, { type: i3.NzRowDirective, decorators: [{
                type: Optional
            }, {
                type: Host
            }] }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }]; }, { nzFor: [{
            type: Input
        }], nzRequired: [{
            type: Input
        }], nzNoColon: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZm9ybS1sYWJlbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2Zvcm0vIiwic291cmNlcyI6WyJuei1mb3JtLWxhYmVsLmNvbXBvbmVudC50cyIsIm56LWZvcm0tbGFiZWwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsSUFBSSxFQUNKLEtBQUssRUFFTCxRQUFRLEVBQ1IsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsWUFBWSxFQUFFLHdCQUF3QixFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFcEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7OztBQVcvRCxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsY0FBYztJQWN0RCxZQUNFLHdCQUFrRCxFQUNsRCxVQUFzQixFQUNGLG1CQUF3QyxFQUN4QyxjQUE4QixFQUNsRCxRQUFtQixFQUNYLEdBQXNCO1FBRTlCLEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxVQUFVLEVBQUUsbUJBQW1CLElBQUksY0FBYyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRnJGLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBbEJQLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFTNUMsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsWUFBTyxHQUFxQixTQUFTLENBQUM7UUFXcEMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLHFCQUFxQixDQUFDLENBQUM7SUFDckUsQ0FBQztJQXJCRCxJQUNJLFNBQVMsQ0FBQyxLQUFjO1FBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDRCxJQUFJLFNBQVM7UUFDWCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFpQkQsaUJBQWlCLENBQUMsS0FBYztRQUM5QixJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxXQUFXO1FBQ1QsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxlQUFlO1FBQ2IsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzFCLENBQUM7O3dGQXJDVSxvQkFBb0I7eURBQXBCLG9CQUFvQiw0S0FOcEIsQ0FBQyx3QkFBd0IsQ0FBQzs7UUM5QnZDLDZCQUtFO1FBQUEsa0JBQVk7UUFDZCxpQkFBUTs7UUFKTix3R0FBbUYsMENBQUE7UUFEbkYsZ0NBQWtCOztBRHFDTztJQUFmLFlBQVksRUFBRTs7d0RBQW9CO2tEQUZqQyxvQkFBb0I7Y0FUaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUUsYUFBYTtnQkFDdkIsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7Z0JBQ3JDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsV0FBVyxFQUFFLGdDQUFnQzthQUM5Qzs7c0JBa0JJLFFBQVE7O3NCQUFJLElBQUk7O3NCQUNoQixRQUFROztzQkFBSSxJQUFJOztrQkFqQmxCLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBIb3N0LFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPcHRpb25hbCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLCB0b0Jvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOekNvbERpcmVjdGl2ZSwgTnpSb3dEaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2dyaWQnO1xyXG5cclxuaW1wb3J0IHsgTnpGb3JtSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vbnotZm9ybS1pdGVtLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LWZvcm0tbGFiZWwnLFxyXG4gIGV4cG9ydEFzOiAnbnpGb3JtTGFiZWwnLFxyXG4gIHByb3ZpZGVyczogW056VXBkYXRlSG9zdENsYXNzU2VydmljZV0sXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotZm9ybS1sYWJlbC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE56Rm9ybUxhYmVsQ29tcG9uZW50IGV4dGVuZHMgTnpDb2xEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xyXG4gIEBJbnB1dCgpIG56Rm9yOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56UmVxdWlyZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKVxyXG4gIHNldCBuek5vQ29sb24odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMubm9Db2xvbiA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG4gIGdldCBuek5vQ29sb24oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gISF0aGlzLm5vQ29sb247XHJcbiAgfVxyXG5cclxuICBkZWZhdWx0Tm9Db2xvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIG5vQ29sb246IGJvb2xlYW4gfCBzdHJpbmcgPSAnZGVmYXVsdCc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsXHJcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgQE9wdGlvbmFsKCkgQEhvc3QoKSBuekZvcm1JdGVtQ29tcG9uZW50OiBOekZvcm1JdGVtQ29tcG9uZW50LFxyXG4gICAgQE9wdGlvbmFsKCkgQEhvc3QoKSBuelJvd0RpcmVjdGl2ZTogTnpSb3dEaXJlY3RpdmUsXHJcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7XHJcbiAgICBzdXBlcihuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsIGVsZW1lbnRSZWYsIG56Rm9ybUl0ZW1Db21wb25lbnQgfHwgbnpSb3dEaXJlY3RpdmUsIHJlbmRlcmVyKTtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1mb3JtLWl0ZW0tbGFiZWwnKTtcclxuICB9XHJcblxyXG4gIHNldERlZmF1bHROb0NvbG9uKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlZmF1bHROb0NvbG9uID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgc3VwZXIubmdBZnRlclZpZXdJbml0KCk7XHJcbiAgfVxyXG59XHJcbiIsIjxsYWJlbFxyXG4gIFthdHRyLmZvcl09XCJuekZvclwiXHJcbiAgW2NsYXNzLmFudC1mb3JtLWl0ZW0tbm8tY29sb25dPVwibm9Db2xvbiA9PT0gJ2RlZmF1bHQnID8gZGVmYXVsdE5vQ29sb24gOiBuek5vQ29sb25cIlxyXG4gIFtjbGFzcy5hbnQtZm9ybS1pdGVtLXJlcXVpcmVkXT1cIm56UmVxdWlyZWRcIlxyXG4+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L2xhYmVsPlxyXG4iXX0=