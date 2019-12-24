/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/icon";
const _c0 = ["nz-transfer-search", ""];
function NzTransferSearchComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r1584 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 3);
    i0.ɵɵlistener("click", function NzTransferSearchComponent_a_1_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r1584); const ctx_r1583 = i0.ɵɵnextContext(); return ctx_r1583._clear(); });
    i0.ɵɵelement(1, "i", 4);
    i0.ɵɵelementEnd();
} }
function NzTransferSearchComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 5);
    i0.ɵɵelement(1, "i", 6);
    i0.ɵɵelementEnd();
} }
const _c1 = function (a0) { return { "ant-input-disabled": a0 }; };
export class NzTransferSearchComponent {
    // endregion
    constructor(cdr) {
        this.cdr = cdr;
        this.valueChanged = new EventEmitter();
        this.valueClear = new EventEmitter();
    }
    _handle() {
        this.valueChanged.emit(this.value);
    }
    _clear() {
        if (this.disabled) {
            return;
        }
        this.value = '';
        this.valueClear.emit();
    }
    ngOnChanges() {
        this.cdr.detectChanges();
    }
}
/** @nocollapse */ NzTransferSearchComponent.ɵfac = function NzTransferSearchComponent_Factory(t) { return new (t || NzTransferSearchComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
/** @nocollapse */ NzTransferSearchComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzTransferSearchComponent, selectors: [["", "nz-transfer-search", ""]], inputs: { placeholder: "placeholder", value: "value", disabled: "disabled" }, outputs: { valueChanged: "valueChanged", valueClear: "valueClear" }, exportAs: ["nzTransferSearch"], features: [i0.ɵɵNgOnChangesFeature()], attrs: _c0, decls: 4, vars: 8, consts: [[1, "ant-input", "ant-transfer-list-search", 3, "ngModel", "disabled", "placeholder", "ngClass", "ngModelChange"], ["class", "ant-transfer-list-search-action", 3, "click", 4, "ngIf", "ngIfElse"], ["def", ""], [1, "ant-transfer-list-search-action", 3, "click"], ["nz-icon", "", "nzType", "close-circle"], [1, "ant-transfer-list-search-action"], ["nz-icon", "", "nzType", "search"]], template: function NzTransferSearchComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "input", 0);
        i0.ɵɵlistener("ngModelChange", function NzTransferSearchComponent_Template_input_ngModelChange_0_listener($event) { return ctx.value = $event; })("ngModelChange", function NzTransferSearchComponent_Template_input_ngModelChange_0_listener($event) { return ctx._handle(); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(1, NzTransferSearchComponent_a_1_Template, 2, 0, "a", 1);
        i0.ɵɵtemplate(2, NzTransferSearchComponent_ng_template_2_Template, 2, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1581 = i0.ɵɵreference(3);
        i0.ɵɵproperty("ngModel", ctx.value)("disabled", ctx.disabled)("placeholder", ctx.placeholder)("ngClass", i0.ɵɵpureFunction1(6, _c1, ctx.disabled));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.value && ctx.value.length > 0)("ngIfElse", _r1581);
    } }, directives: [i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, i2.NgClass, i2.NgIf, i3.NzIconDirective], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzTransferSearchComponent, [{
        type: Component,
        args: [{
                selector: '[nz-transfer-search]',
                exportAs: 'nzTransferSearch',
                preserveWhitespaces: false,
                templateUrl: './nz-transfer-search.component.html',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { placeholder: [{
            type: Input
        }], value: [{
            type: Input
        }], disabled: [{
            type: Input
        }], valueChanged: [{
            type: Output
        }], valueClear: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJhbnNmZXItc2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdHJhbnNmZXIvIiwic291cmNlcyI6WyJuei10cmFuc2Zlci1zZWFyY2guY29tcG9uZW50LnRzIiwibnotdHJhbnNmZXItc2VhcmNoLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0lDVHZCLDRCQUtFO0lBRkEsaU1BQWtCO0lBRWxCLHVCQUFxQztJQUN2QyxpQkFBSTs7O0lBRUYsK0JBQThDO0lBQUEsdUJBQStCO0lBQUEsaUJBQU87OztBRFd0RixNQUFNLE9BQU8seUJBQXlCO0lBVXBDLFlBQVk7SUFFWixZQUFvQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUx2QixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDMUMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7SUFJWixDQUFDO0lBRTlDLE9BQU87UUFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELE1BQU07UUFDSixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7a0dBNUJVLHlCQUF5Qjs4REFBekIseUJBQXlCO1FDM0J0QyxnQ0FRQTtRQVBFLGlKQUFtQiw4R0FDRixhQUFTLElBRFA7UUFEckIsaUJBUUE7UUFBQSxzRUFLRTtRQUVGLDJIQUNFOzs7UUFmQSxtQ0FBbUIsMEJBQUEsZ0NBQUEscURBQUE7UUFRbkIsZUFBMkM7UUFBM0Msd0RBQTJDLG9CQUFBOztrRERrQmhDLHlCQUF5QjtjQVJyQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsV0FBVyxFQUFFLHFDQUFxQztnQkFDbEQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOztrQkFJRSxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFFTCxNQUFNOztrQkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE91dHB1dCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdbbnotdHJhbnNmZXItc2VhcmNoXScsXHJcbiAgZXhwb3J0QXM6ICduelRyYW5zZmVyU2VhcmNoJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotdHJhbnNmZXItc2VhcmNoLmNvbXBvbmVudC5odG1sJyxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelRyYW5zZmVyU2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICAvLyByZWdpb246IGZpZWxkc1xyXG5cclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSB2YWx1ZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgdmFsdWVDbGVhciA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgLy8gZW5kcmVnaW9uXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cclxuXHJcbiAgX2hhbmRsZSgpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWVDaGFuZ2VkLmVtaXQodGhpcy52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBfY2xlYXIoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnZhbHVlID0gJyc7XHJcbiAgICB0aGlzLnZhbHVlQ2xlYXIuZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG59XHJcbiIsIjxpbnB1dFxyXG4gIFsobmdNb2RlbCldPVwidmFsdWVcIlxyXG4gIChuZ01vZGVsQ2hhbmdlKT1cIl9oYW5kbGUoKVwiXHJcbiAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxyXG4gIGNsYXNzPVwiYW50LWlucHV0IGFudC10cmFuc2Zlci1saXN0LXNlYXJjaFwiXHJcbiAgW25nQ2xhc3NdPVwieyAnYW50LWlucHV0LWRpc2FibGVkJzogZGlzYWJsZWQgfVwiXHJcbi8+XHJcbjxhXHJcbiAgKm5nSWY9XCJ2YWx1ZSAmJiB2YWx1ZS5sZW5ndGggPiAwOyBlbHNlIGRlZlwiXHJcbiAgY2xhc3M9XCJhbnQtdHJhbnNmZXItbGlzdC1zZWFyY2gtYWN0aW9uXCJcclxuICAoY2xpY2spPVwiX2NsZWFyKClcIlxyXG4+XHJcbiAgPGkgbnotaWNvbiBuelR5cGU9XCJjbG9zZS1jaXJjbGVcIj48L2k+XHJcbjwvYT5cclxuPG5nLXRlbXBsYXRlICNkZWY+XHJcbiAgPHNwYW4gY2xhc3M9XCJhbnQtdHJhbnNmZXItbGlzdC1zZWFyY2gtYWN0aW9uXCI+PGkgbnotaWNvbiBuelR5cGU9XCJzZWFyY2hcIj48L2k+PC9zcGFuPlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=