/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { NzAutosizeDirective } from 'ng-zorro-antd/input';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/i18n";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/core";
import * as i4 from "ng-zorro-antd/tooltip";
import * as i5 from "ng-zorro-antd/icon";
import * as i6 from "ng-zorro-antd/input";
var _c0 = ["textarea"];
function NzTextEditComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    var _r1743 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 2);
    i0.ɵɵlistener("click", function NzTextEditComponent_button_0_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r1743); var ctx_r1742 = i0.ɵɵnextContext(); return ctx_r1742.onClick(); });
    i0.ɵɵelement(1, "i", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1740 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nzTitle", ctx_r1740.locale == null ? null : ctx_r1740.locale.edit);
} }
function NzTextEditComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    var _r1746 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "textarea", 4, 5);
    i0.ɵɵlistener("input", function NzTextEditComponent_ng_container_1_Template_textarea_input_1_listener($event) { i0.ɵɵrestoreView(_r1746); var ctx_r1745 = i0.ɵɵnextContext(); return ctx_r1745.onInput($event); })("blur", function NzTextEditComponent_ng_container_1_Template_textarea_blur_1_listener($event) { i0.ɵɵrestoreView(_r1746); var ctx_r1747 = i0.ɵɵnextContext(); return ctx_r1747.confirm(); })("keydown.esc", function NzTextEditComponent_ng_container_1_Template_textarea_keydown_esc_1_listener($event) { i0.ɵɵrestoreView(_r1746); var ctx_r1748 = i0.ɵɵnextContext(); return ctx_r1748.onCancel(); })("keydown.enter", function NzTextEditComponent_ng_container_1_Template_textarea_keydown_enter_1_listener($event) { i0.ɵɵrestoreView(_r1746); var ctx_r1749 = i0.ɵɵnextContext(); return ctx_r1749.onEnter($event); });
    i0.ɵɵtext(3, "  ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 6);
    i0.ɵɵlistener("click", function NzTextEditComponent_ng_container_1_Template_button_click_4_listener($event) { i0.ɵɵrestoreView(_r1746); var ctx_r1750 = i0.ɵɵnextContext(); return ctx_r1750.confirm(); });
    i0.ɵɵelement(5, "i", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} }
var NzTextEditComponent = /** @class */ (function () {
    function NzTextEditComponent(host, cdr, i18n) {
        this.host = host;
        this.cdr = cdr;
        this.i18n = i18n;
        this.editing = false;
        // tslint:disable-next-line:no-any
        this.locale = {};
        this.destroy$ = new Subject();
        this.startEditing = new EventEmitter();
        this.endEditing = new EventEmitter();
        this.nativeElement = this.host.nativeElement;
    }
    NzTextEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(function () {
            _this.locale = _this.i18n.getLocaleData('Text');
            _this.cdr.markForCheck();
        });
    };
    NzTextEditComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzTextEditComponent.prototype.onClick = function () {
        this.beforeText = this.text;
        this.currentText = this.beforeText;
        this.editing = true;
        this.startEditing.emit();
        this.focusAndSetValue();
    };
    NzTextEditComponent.prototype.confirm = function () {
        this.editing = false;
        this.endEditing.emit(this.currentText);
    };
    NzTextEditComponent.prototype.onInput = function (event) {
        var target = event.target;
        this.currentText = target.value;
    };
    NzTextEditComponent.prototype.onEnter = function (event) {
        event.stopPropagation();
        event.preventDefault();
        this.confirm();
    };
    NzTextEditComponent.prototype.onCancel = function () {
        this.currentText = this.beforeText;
        this.confirm();
    };
    NzTextEditComponent.prototype.focusAndSetValue = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.textarea && _this.textarea.nativeElement) {
                _this.textarea.nativeElement.focus();
                _this.textarea.nativeElement.value = _this.currentText;
                _this.autosizeDirective.resizeToFitContent();
            }
        });
    };
    /** @nocollapse */ NzTextEditComponent.ɵfac = function NzTextEditComponent_Factory(t) { return new (t || NzTextEditComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.NzI18nService)); };
    /** @nocollapse */ NzTextEditComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzTextEditComponent, selectors: [["nz-text-edit"]], viewQuery: function NzTextEditComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, true);
            i0.ɵɵviewQuery(NzAutosizeDirective, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.textarea = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.autosizeDirective = _t.first);
        } }, inputs: { text: "text" }, outputs: { startEditing: "startEditing", endEditing: "endEditing" }, exportAs: ["nzTextEdit"], decls: 2, vars: 2, consts: [["nz-tooltip", "", "nz-trans-button", "", "class", "ant-typography-edit", 3, "nzTitle", "click", 4, "ngIf"], [4, "ngIf"], ["nz-tooltip", "", "nz-trans-button", "", 1, "ant-typography-edit", 3, "nzTitle", "click"], ["nz-icon", "", "nzType", "edit"], ["nz-input", "", "nzAutosize", "", 3, "input", "blur", "keydown.esc", "keydown.enter"], ["textarea", ""], ["nz-trans-button", "", 1, "ant-typography-edit-content-confirm", 3, "click"], ["nz-icon", "", "nzType", "enter"]], template: function NzTextEditComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, NzTextEditComponent_button_0_Template, 2, 1, "button", 0);
            i0.ɵɵtemplate(1, NzTextEditComponent_ng_container_1_Template, 6, 0, "ng-container", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.editing);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.editing);
        } }, directives: [i2.NgIf, i3.NzTransButtonDirective, i4.NzTooltipDirective, i5.NzIconDirective, i6.NzAutosizeDirective, i6.NzInputDirective], encapsulation: 2, changeDetection: 0 });
    return NzTextEditComponent;
}());
export { NzTextEditComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzTextEditComponent, [{
        type: Component,
        args: [{
                selector: 'nz-text-edit',
                exportAs: 'nzTextEdit',
                templateUrl: './nz-text-edit.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i1.NzI18nService }]; }, { text: [{
            type: Input
        }], startEditing: [{
            type: Output
        }], endEditing: [{
            type: Output
        }], textarea: [{
            type: ViewChild,
            args: ['textarea', { static: false }]
        }], autosizeDirective: [{
            type: ViewChild,
            args: [NzAutosizeDirective, { static: false }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGV4dC1lZGl0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdHlwb2dyYXBoeS8iLCJzb3VyY2VzIjpbIm56LXRleHQtZWRpdC5jb21wb25lbnQudHMiLCJuei10ZXh0LWVkaXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7Ozs7SUMxQjFELGlDQVFFO0lBRkEsb01BQW1CO0lBRW5CLHVCQUE2QjtJQUMvQixpQkFBUzs7O0lBUFAsaUZBQXdCOzs7O0lBUTFCLDZCQUNFO0lBQUEsc0NBU0E7SUFMRSxrTkFBeUIsNkxBQUEsNE1BQUEscU5BQUE7SUFLM0Isa0JBQUE7SUFBQSxpQkFBVztJQUNYLGlDQUNFO0lBRGtFLDBNQUFtQjtJQUNyRix1QkFBOEI7SUFDaEMsaUJBQVM7SUFDWCwwQkFBZTs7QURJZjtJQXVCRSw2QkFBb0IsSUFBZ0IsRUFBVSxHQUFzQixFQUFVLElBQW1CO1FBQTdFLFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQWU7UUFkakcsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixrQ0FBa0M7UUFDbEMsV0FBTSxHQUFRLEVBQUUsQ0FBQztRQUNULGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBR2QsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQ3hDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBTTNELGtCQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNEQsQ0FBQztJQUVyRyxzQ0FBUSxHQUFSO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUM5RCxLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzlDLEtBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQseUNBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQscUNBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQscUNBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQscUNBQU8sR0FBUCxVQUFRLEtBQVk7UUFDbEIsSUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQTZCLENBQUM7UUFDbkQsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxxQ0FBTyxHQUFQLFVBQVEsS0FBb0I7UUFDMUIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELHNDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCw4Q0FBZ0IsR0FBaEI7UUFBQSxpQkFRQztRQVBDLFVBQVUsQ0FBQztZQUNULElBQUksS0FBSSxDQUFDLFFBQVEsSUFBSSxLQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRTtnQkFDaEQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ3BDLEtBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDO2dCQUNyRCxLQUFJLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQzthQUM3QztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzswRkFsRVUsbUJBQW1COzREQUFuQixtQkFBbUI7OzJCQVVuQixtQkFBbUI7Ozs7OztZQzlDaEMsMEVBUUU7WUFFRixzRkFDRTs7WUFWQSxtQ0FBZ0I7WUFTSixlQUFlO1lBQWYsa0NBQWU7OzhCRFY3QjtDQXVHQyxBQTNFRCxJQTJFQztTQW5FWSxtQkFBbUI7a0RBQW5CLG1CQUFtQjtjQVIvQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixXQUFXLEVBQUUsK0JBQStCO2dCQUM1QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLG1CQUFtQixFQUFFLEtBQUs7YUFDM0I7O2tCQU9FLEtBQUs7O2tCQUNMLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLFNBQVM7bUJBQUMsVUFBVSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7a0JBQ3ZDLFNBQVM7bUJBQUMsbUJBQW1CLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcbmltcG9ydCB7IE56QXV0b3NpemVEaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2lucHV0JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotdGV4dC1lZGl0JyxcclxuICBleHBvcnRBczogJ256VGV4dEVkaXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei10ZXh0LWVkaXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2VcclxufSlcclxuZXhwb3J0IGNsYXNzIE56VGV4dEVkaXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgZWRpdGluZyA9IGZhbHNlO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBsb2NhbGU6IGFueSA9IHt9O1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBASW5wdXQoKSB0ZXh0OiBzdHJpbmc7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHN0YXJ0RWRpdGluZyA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgZW5kRWRpdGluZyA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG4gIEBWaWV3Q2hpbGQoJ3RleHRhcmVhJywgeyBzdGF0aWM6IGZhbHNlIH0pIHRleHRhcmVhOiBFbGVtZW50UmVmPEhUTUxUZXh0QXJlYUVsZW1lbnQ+O1xyXG4gIEBWaWV3Q2hpbGQoTnpBdXRvc2l6ZURpcmVjdGl2ZSwgeyBzdGF0aWM6IGZhbHNlIH0pIGF1dG9zaXplRGlyZWN0aXZlOiBOekF1dG9zaXplRGlyZWN0aXZlO1xyXG5cclxuICBiZWZvcmVUZXh0OiBzdHJpbmc7XHJcbiAgY3VycmVudFRleHQ6IHN0cmluZztcclxuICBuYXRpdmVFbGVtZW50ID0gdGhpcy5ob3N0Lm5hdGl2ZUVsZW1lbnQ7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBob3N0OiBFbGVtZW50UmVmLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZSkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXRMb2NhbGVEYXRhKCdUZXh0Jyk7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgb25DbGljaygpOiB2b2lkIHtcclxuICAgIHRoaXMuYmVmb3JlVGV4dCA9IHRoaXMudGV4dDtcclxuICAgIHRoaXMuY3VycmVudFRleHQgPSB0aGlzLmJlZm9yZVRleHQ7XHJcbiAgICB0aGlzLmVkaXRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5zdGFydEVkaXRpbmcuZW1pdCgpO1xyXG4gICAgdGhpcy5mb2N1c0FuZFNldFZhbHVlKCk7XHJcbiAgfVxyXG5cclxuICBjb25maXJtKCk6IHZvaWQge1xyXG4gICAgdGhpcy5lZGl0aW5nID0gZmFsc2U7XHJcbiAgICB0aGlzLmVuZEVkaXRpbmcuZW1pdCh0aGlzLmN1cnJlbnRUZXh0KTtcclxuICB9XHJcblxyXG4gIG9uSW5wdXQoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTFRleHRBcmVhRWxlbWVudDtcclxuICAgIHRoaXMuY3VycmVudFRleHQgPSB0YXJnZXQudmFsdWU7XHJcbiAgfVxyXG5cclxuICBvbkVudGVyKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLmNvbmZpcm0oKTtcclxuICB9XHJcblxyXG4gIG9uQ2FuY2VsKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jdXJyZW50VGV4dCA9IHRoaXMuYmVmb3JlVGV4dDtcclxuICAgIHRoaXMuY29uZmlybSgpO1xyXG4gIH1cclxuXHJcbiAgZm9jdXNBbmRTZXRWYWx1ZSgpOiB2b2lkIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy50ZXh0YXJlYSAmJiB0aGlzLnRleHRhcmVhLm5hdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLnRleHRhcmVhLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgICB0aGlzLnRleHRhcmVhLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB0aGlzLmN1cnJlbnRUZXh0O1xyXG4gICAgICAgIHRoaXMuYXV0b3NpemVEaXJlY3RpdmUucmVzaXplVG9GaXRDb250ZW50KCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCI8YnV0dG9uXHJcbiAgKm5nSWY9XCIhZWRpdGluZ1wiXHJcbiAgW256VGl0bGVdPVwibG9jYWxlPy5lZGl0XCJcclxuICBuei10b29sdGlwXHJcbiAgbnotdHJhbnMtYnV0dG9uXHJcbiAgY2xhc3M9XCJhbnQtdHlwb2dyYXBoeS1lZGl0XCJcclxuICAoY2xpY2spPVwib25DbGljaygpXCJcclxuPlxyXG4gIDxpIG56LWljb24gbnpUeXBlPVwiZWRpdFwiPjwvaT5cclxuPC9idXR0b24+XHJcbjxuZy1jb250YWluZXIgKm5nSWY9XCJlZGl0aW5nXCI+XHJcbiAgPHRleHRhcmVhXHJcbiAgICAjdGV4dGFyZWFcclxuICAgIG56LWlucHV0XHJcbiAgICBuekF1dG9zaXplXHJcbiAgICAoaW5wdXQpPVwib25JbnB1dCgkZXZlbnQpXCJcclxuICAgIChibHVyKT1cImNvbmZpcm0oKVwiXHJcbiAgICAoa2V5ZG93bi5lc2MpPVwib25DYW5jZWwoKVwiXHJcbiAgICAoa2V5ZG93bi5lbnRlcik9XCJvbkVudGVyKCRldmVudClcIlxyXG4gID5cclxuICA8L3RleHRhcmVhPlxyXG4gIDxidXR0b24gbnotdHJhbnMtYnV0dG9uIGNsYXNzPVwiYW50LXR5cG9ncmFwaHktZWRpdC1jb250ZW50LWNvbmZpcm1cIiAoY2xpY2spPVwiY29uZmlybSgpXCI+XHJcbiAgICA8aSBuei1pY29uIG56VHlwZT1cImVudGVyXCI+PC9pPlxyXG4gIDwvYnV0dG9uPlxyXG48L25nLWNvbnRhaW5lcj5cclxuIl19