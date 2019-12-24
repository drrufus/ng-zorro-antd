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
var _c0 = ["nz-transfer-search", ""];
function NzTransferSearchComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r1621 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 3);
    i0.ɵɵlistener("click", function NzTransferSearchComponent_a_1_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r1621); var ctx_r1620 = i0.ɵɵnextContext(); return ctx_r1620._clear(); });
    i0.ɵɵelement(1, "i", 4);
    i0.ɵɵelementEnd();
} }
function NzTransferSearchComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 5);
    i0.ɵɵelement(1, "i", 6);
    i0.ɵɵelementEnd();
} }
var _c1 = function (a0) { return { "ant-input-disabled": a0 }; };
var NzTransferSearchComponent = /** @class */ (function () {
    // endregion
    function NzTransferSearchComponent(cdr) {
        this.cdr = cdr;
        this.valueChanged = new EventEmitter();
        this.valueClear = new EventEmitter();
    }
    NzTransferSearchComponent.prototype._handle = function () {
        this.valueChanged.emit(this.value);
    };
    NzTransferSearchComponent.prototype._clear = function () {
        if (this.disabled) {
            return;
        }
        this.value = '';
        this.valueClear.emit();
    };
    NzTransferSearchComponent.prototype.ngOnChanges = function () {
        this.cdr.detectChanges();
    };
    /** @nocollapse */ NzTransferSearchComponent.ɵfac = function NzTransferSearchComponent_Factory(t) { return new (t || NzTransferSearchComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ NzTransferSearchComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzTransferSearchComponent, selectors: [["", "nz-transfer-search", ""]], inputs: { placeholder: "placeholder", value: "value", disabled: "disabled" }, outputs: { valueChanged: "valueChanged", valueClear: "valueClear" }, exportAs: ["nzTransferSearch"], features: [i0.ɵɵNgOnChangesFeature()], attrs: _c0, decls: 4, vars: 8, consts: [[1, "ant-input", "ant-transfer-list-search", 3, "ngModel", "disabled", "placeholder", "ngClass", "ngModelChange"], ["class", "ant-transfer-list-search-action", 3, "click", 4, "ngIf", "ngIfElse"], ["def", ""], [1, "ant-transfer-list-search-action", 3, "click"], ["nz-icon", "", "nzType", "close-circle"], [1, "ant-transfer-list-search-action"], ["nz-icon", "", "nzType", "search"]], template: function NzTransferSearchComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "input", 0);
            i0.ɵɵlistener("ngModelChange", function NzTransferSearchComponent_Template_input_ngModelChange_0_listener($event) { return ctx.value = $event; })("ngModelChange", function NzTransferSearchComponent_Template_input_ngModelChange_0_listener($event) { return ctx._handle(); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(1, NzTransferSearchComponent_a_1_Template, 2, 0, "a", 1);
            i0.ɵɵtemplate(2, NzTransferSearchComponent_ng_template_2_Template, 2, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            var _r1618 = i0.ɵɵreference(3);
            i0.ɵɵproperty("ngModel", ctx.value)("disabled", ctx.disabled)("placeholder", ctx.placeholder)("ngClass", i0.ɵɵpureFunction1(6, _c1, ctx.disabled));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.value && ctx.value.length > 0)("ngIfElse", _r1618);
        } }, directives: [i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, i2.NgClass, i2.NgIf, i3.NzIconDirective], encapsulation: 2, changeDetection: 0 });
    return NzTransferSearchComponent;
}());
export { NzTransferSearchComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJhbnNmZXItc2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdHJhbnNmZXIvIiwic291cmNlcyI6WyJuei10cmFuc2Zlci1zZWFyY2guY29tcG9uZW50LnRzIiwibnotdHJhbnNmZXItc2VhcmNoLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0lDVHZCLDRCQUtFO0lBRkEsK0xBQWtCO0lBRWxCLHVCQUFxQztJQUN2QyxpQkFBSTs7O0lBRUYsK0JBQThDO0lBQUEsdUJBQStCO0lBQUEsaUJBQU87OztBREd0RjtJQWtCRSxZQUFZO0lBRVosbUNBQW9CLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBTHZCLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUMxQyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQUlaLENBQUM7SUFFOUMsMkNBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsMENBQU0sR0FBTjtRQUNFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCwrQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDO3NHQTVCVSx5QkFBeUI7a0VBQXpCLHlCQUF5QjtZQzNCdEMsZ0NBUUE7WUFQRSxpSkFBbUIsOEdBQ0YsYUFBUyxJQURQO1lBRHJCLGlCQVFBO1lBQUEsc0VBS0U7WUFFRiwySEFDRTs7O1lBZkEsbUNBQW1CLDBCQUFBLGdDQUFBLHFEQUFBO1lBUW5CLGVBQTJDO1lBQTNDLHdEQUEyQyxvQkFBQTs7b0NEVDdDO0NBd0RDLEFBckNELElBcUNDO1NBN0JZLHlCQUF5QjtrREFBekIseUJBQXlCO2NBUnJDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixXQUFXLEVBQUUscUNBQXFDO2dCQUNsRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7O2tCQUlFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUVMLE1BQU07O2tCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT3V0cHV0LFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1tuei10cmFuc2Zlci1zZWFyY2hdJyxcclxuICBleHBvcnRBczogJ256VHJhbnNmZXJTZWFyY2gnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei10cmFuc2Zlci1zZWFyY2guY29tcG9uZW50Lmh0bWwnLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE56VHJhbnNmZXJTZWFyY2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIC8vIHJlZ2lvbjogZmllbGRzXHJcblxyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdmFsdWU6IHN0cmluZztcclxuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHZhbHVlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSB2YWx1ZUNsZWFyID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICAvLyBlbmRyZWdpb25cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxyXG5cclxuICBfaGFuZGxlKCk6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZUNoYW5nZWQuZW1pdCh0aGlzLnZhbHVlKTtcclxuICB9XHJcblxyXG4gIF9jbGVhcigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMudmFsdWUgPSAnJztcclxuICAgIHRoaXMudmFsdWVDbGVhci5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcbn1cclxuIiwiPGlucHV0XHJcbiAgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiXHJcbiAgKG5nTW9kZWxDaGFuZ2UpPVwiX2hhbmRsZSgpXCJcclxuICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXHJcbiAgY2xhc3M9XCJhbnQtaW5wdXQgYW50LXRyYW5zZmVyLWxpc3Qtc2VhcmNoXCJcclxuICBbbmdDbGFzc109XCJ7ICdhbnQtaW5wdXQtZGlzYWJsZWQnOiBkaXNhYmxlZCB9XCJcclxuLz5cclxuPGFcclxuICAqbmdJZj1cInZhbHVlICYmIHZhbHVlLmxlbmd0aCA+IDA7IGVsc2UgZGVmXCJcclxuICBjbGFzcz1cImFudC10cmFuc2Zlci1saXN0LXNlYXJjaC1hY3Rpb25cIlxyXG4gIChjbGljayk9XCJfY2xlYXIoKVwiXHJcbj5cclxuICA8aSBuei1pY29uIG56VHlwZT1cImNsb3NlLWNpcmNsZVwiPjwvaT5cclxuPC9hPlxyXG48bmctdGVtcGxhdGUgI2RlZj5cclxuICA8c3BhbiBjbGFzcz1cImFudC10cmFuc2Zlci1saXN0LXNlYXJjaC1hY3Rpb25cIj48aSBuei1pY29uIG56VHlwZT1cInNlYXJjaFwiPjwvaT48L3NwYW4+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==