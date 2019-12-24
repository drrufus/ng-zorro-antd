import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { InputBoolean, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
import * as i2 from "@angular/common";
function NzDividerComponent_span_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r251 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r251.nzText);
} }
function NzDividerComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 1);
    i0.ɵɵtemplate(1, NzDividerComponent_span_0_ng_container_1_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r250 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r250.nzText);
} }
export class NzDividerComponent {
    constructor(elementRef, nzUpdateHostClassService) {
        this.elementRef = elementRef;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.nzType = 'horizontal';
        this.nzOrientation = 'center';
        this.nzDashed = false;
    }
    setClass() {
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, {
            ['ant-divider']: true,
            [`ant-divider-${this.nzType}`]: true,
            [`ant-divider-with-text-${this.nzOrientation}`]: this.nzText,
            [`ant-divider-dashed`]: this.nzDashed
        });
    }
    ngOnChanges() {
        this.setClass();
    }
    ngOnInit() {
        this.setClass();
    }
}
/** @nocollapse */ NzDividerComponent.ɵfac = function NzDividerComponent_Factory(t) { return new (t || NzDividerComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.NzUpdateHostClassService)); };
/** @nocollapse */ NzDividerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzDividerComponent, selectors: [["nz-divider"]], inputs: { nzText: "nzText", nzType: "nzType", nzOrientation: "nzOrientation", nzDashed: "nzDashed" }, exportAs: ["nzDivider"], features: [i0.ɵɵProvidersFeature([NzUpdateHostClassService]), i0.ɵɵNgOnChangesFeature()], decls: 1, vars: 1, consts: [["class", "ant-divider-inner-text", 4, "ngIf"], [1, "ant-divider-inner-text"], [4, "nzStringTemplateOutlet"]], template: function NzDividerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, NzDividerComponent_span_0_Template, 2, 1, "span", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.nzText);
    } }, directives: [i2.NgIf, i1.NzStringTemplateOutletDirective], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzDividerComponent.prototype, "nzDashed", void 0);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzDividerComponent, [{
        type: Component,
        args: [{
                selector: 'nz-divider',
                exportAs: 'nzDivider',
                templateUrl: './nz-divider.component.html',
                preserveWhitespaces: false,
                providers: [NzUpdateHostClassService],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.NzUpdateHostClassService }]; }, { nzText: [{
            type: Input
        }], nzType: [{
            type: Input
        }], nzOrientation: [{
            type: Input
        }], nzDashed: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZGl2aWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2RpdmlkZXIvIiwic291cmNlcyI6WyJuei1kaXZpZGVyLmNvbXBvbmVudC50cyIsIm56LWRpdmlkZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBa0MsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekksT0FBTyxFQUFFLFlBQVksRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7OztJQ1QxRSw2QkFBK0M7SUFBQSxZQUFZO0lBQUEsMEJBQWU7OztJQUEzQixlQUFZO0lBQVoscUNBQVk7OztJQUQ3RCwrQkFDRTtJQUFBLDRGQUErQztJQUNqRCxpQkFBTzs7O0lBRFMsZUFBZ0M7SUFBaEMsd0RBQWdDOztBRG9CaEQsTUFBTSxPQUFPLGtCQUFrQjtJQWU3QixZQUFvQixVQUFzQixFQUFVLHdCQUFrRDtRQUFsRixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQWI3RixXQUFNLEdBQThCLFlBQVksQ0FBQztRQUNqRCxrQkFBYSxHQUFnQyxRQUFRLENBQUM7UUFDdEMsYUFBUSxHQUFHLEtBQUssQ0FBQztJQVcrRCxDQUFDO0lBVGxHLFFBQVE7UUFDZCxJQUFJLENBQUMsd0JBQXdCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFO1lBQzNFLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSTtZQUNyQixDQUFDLGVBQWUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSTtZQUNwQyxDQUFDLHlCQUF5QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTTtZQUM1RCxDQUFDLG9CQUFvQixDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDdEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUlELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7b0ZBdkJVLGtCQUFrQjt1REFBbEIsa0JBQWtCLCtMQUpsQixDQUFDLHdCQUF3QixDQUFDO1FDakJ2QyxxRUFDRTs7UUFESSxpQ0FBYzs7QUR5Qk87SUFBZixZQUFZLEVBQUU7O29EQUFrQjtrREFKL0Isa0JBQWtCO2NBVDlCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFdBQVcsRUFBRSw2QkFBNkI7Z0JBQzFDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO2dCQUNyQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7O2tCQUVFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgVGVtcGxhdGVSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LWRpdmlkZXInLFxyXG4gIGV4cG9ydEFzOiAnbnpEaXZpZGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotZGl2aWRlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgcHJvdmlkZXJzOiBbTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekRpdmlkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgbnpUZXh0OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuelR5cGU6ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCcgPSAnaG9yaXpvbnRhbCc7XHJcbiAgQElucHV0KCkgbnpPcmllbnRhdGlvbjogJ2xlZnQnIHwgJ3JpZ2h0JyB8ICdjZW50ZXInID0gJ2NlbnRlcic7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGFzaGVkID0gZmFsc2U7XHJcblxyXG4gIHByaXZhdGUgc2V0Q2xhc3MoKTogdm9pZCB7XHJcbiAgICB0aGlzLm56VXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHtcclxuICAgICAgWydhbnQtZGl2aWRlciddOiB0cnVlLFxyXG4gICAgICBbYGFudC1kaXZpZGVyLSR7dGhpcy5uelR5cGV9YF06IHRydWUsXHJcbiAgICAgIFtgYW50LWRpdmlkZXItd2l0aC10ZXh0LSR7dGhpcy5uek9yaWVudGF0aW9ufWBdOiB0aGlzLm56VGV4dCxcclxuICAgICAgW2BhbnQtZGl2aWRlci1kYXNoZWRgXTogdGhpcy5uekRhc2hlZFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UpIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDbGFzcygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldENsYXNzKCk7XHJcbiAgfVxyXG59XHJcbiIsIjxzcGFuICpuZ0lmPVwibnpUZXh0XCIgY2xhc3M9XCJhbnQtZGl2aWRlci1pbm5lci10ZXh0XCI+XHJcbiAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56VGV4dFwiPnt7IG56VGV4dCB9fTwvbmctY29udGFpbmVyPlxyXG48L3NwYW4+XHJcbiJdfQ==