import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, Input, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { InputNumber } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
function NzDescriptionsItemComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
var _c0 = ["*"];
var NzDescriptionsItemComponent = /** @class */ (function () {
    function NzDescriptionsItemComponent() {
        this.nzSpan = 1;
        this.nzTitle = '';
        this.inputChange$ = new Subject();
    }
    NzDescriptionsItemComponent.prototype.ngOnChanges = function () {
        this.inputChange$.next();
    };
    NzDescriptionsItemComponent.prototype.ngOnDestroy = function () {
        this.inputChange$.complete();
    };
    /** @nocollapse */ NzDescriptionsItemComponent.ɵfac = function NzDescriptionsItemComponent_Factory(t) { return new (t || NzDescriptionsItemComponent)(); };
    /** @nocollapse */ NzDescriptionsItemComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzDescriptionsItemComponent, selectors: [["nz-descriptions-item"]], viewQuery: function NzDescriptionsItemComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵstaticViewQuery(TemplateRef, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.content = _t.first);
        } }, inputs: { nzSpan: "nzSpan", nzTitle: "nzTitle" }, exportAs: ["nzDescriptionsItem"], features: [i0.ɵɵNgOnChangesFeature()], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzDescriptionsItemComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, NzDescriptionsItemComponent_ng_template_0_Template, 1, 0, "ng-template");
        } }, encapsulation: 2, changeDetection: 0 });
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], NzDescriptionsItemComponent.prototype, "nzSpan", void 0);
    return NzDescriptionsItemComponent;
}());
export { NzDescriptionsItemComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzDescriptionsItemComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-descriptions-item',
                templateUrl: './nz-descriptions-item.component.html',
                exportAs: 'nzDescriptionsItem',
                preserveWhitespaces: false
            }]
    }], null, { content: [{
            type: ViewChild,
            args: [TemplateRef, { static: true }]
        }], nzSpan: [{
            type: Input
        }], nzTitle: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZGVzY3JpcHRpb25zLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9kZXNjcmlwdGlvbnMvIiwic291cmNlcyI6WyJuei1kZXNjcmlwdGlvbnMtaXRlbS5jb21wb25lbnQudHMiLCJuei1kZXNjcmlwdGlvbnMtaXRlbS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXdCLFdBQVcsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0ksT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7OztJQ1Q3QixrQkFBWTs7O0FEV2Q7SUFBQTtRQVcwQixXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFFckIsaUJBQVksR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0tBUzdDO0lBUEMsaURBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELGlEQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQy9CLENBQUM7MEdBZFUsMkJBQTJCO29FQUEzQiwyQkFBMkI7aUNBQzNCLFdBQVc7Ozs7OztZQ3JCeEIseUZBQ0U7O0lEc0J3QjtRQUFkLFdBQVcsRUFBRTs7K0RBQVk7c0NBeEJyQztDQW9DQyxBQXZCRCxJQXVCQztTQWZZLDJCQUEyQjtrREFBM0IsMkJBQTJCO2NBUnZDLFNBQVM7ZUFBQztnQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFdBQVcsRUFBRSx1Q0FBdUM7Z0JBQ3BELFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLG1CQUFtQixFQUFFLEtBQUs7YUFDM0I7O2tCQUVFLFNBQVM7bUJBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7a0JBRXZDLEtBQUs7O2tCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IElucHV0TnVtYmVyIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzZWxlY3RvcjogJ256LWRlc2NyaXB0aW9ucy1pdGVtJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotZGVzY3JpcHRpb25zLWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxyXG4gIGV4cG9ydEFzOiAnbnpEZXNjcmlwdGlvbnNJdGVtJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpEZXNjcmlwdGlvbnNJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYsIHsgc3RhdGljOiB0cnVlIH0pIGNvbnRlbnQ6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBuelNwYW4gPSAxO1xyXG4gIEBJbnB1dCgpIG56VGl0bGU6IHN0cmluZyA9ICcnO1xyXG5cclxuICByZWFkb25seSBpbnB1dENoYW5nZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cclxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5wdXRDaGFuZ2UkLm5leHQoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbnB1dENoYW5nZSQuY29tcGxldGUoKTtcclxuICB9XHJcbn1cclxuIiwiPCEtLSBVc2UgYSB0ZW1wbGF0ZSB0byB3cmFwIGNvbnRlbnRzIHNvIGNvbnRlbnRzIHdvdWxkbid0IGJlIGRpc3BsYXllZC4gLS0+XHJcbjxuZy10ZW1wbGF0ZT5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==