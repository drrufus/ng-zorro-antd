/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Output, Renderer2, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["*"];
export class NzCheckboxWrapperComponent {
    constructor(renderer, elementRef) {
        this.nzOnChange = new EventEmitter();
        this.checkboxList = [];
        renderer.addClass(elementRef.nativeElement, 'ant-checkbox-group');
    }
    addCheckbox(value) {
        this.checkboxList.push(value);
    }
    removeCheckbox(value) {
        this.checkboxList.splice(this.checkboxList.indexOf(value), 1);
    }
    outputValue() {
        const checkedList = this.checkboxList.filter(item => item.nzChecked);
        return checkedList.map(item => item.nzValue);
    }
    onChange() {
        this.nzOnChange.emit(this.outputValue());
    }
}
/** @nocollapse */ NzCheckboxWrapperComponent.ɵfac = function NzCheckboxWrapperComponent_Factory(t) { return new (t || NzCheckboxWrapperComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
/** @nocollapse */ NzCheckboxWrapperComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzCheckboxWrapperComponent, selectors: [["nz-checkbox-wrapper"]], outputs: { nzOnChange: "nzOnChange" }, exportAs: ["nzCheckboxWrapper"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzCheckboxWrapperComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzCheckboxWrapperComponent, [{
        type: Component,
        args: [{
                selector: 'nz-checkbox-wrapper',
                exportAs: 'nzCheckboxWrapper',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                templateUrl: './nz-checkbox-wrapper.component.html'
            }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { nzOnChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2hlY2tib3gtd3JhcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NoZWNrYm94LyIsInNvdXJjZXMiOlsibnotY2hlY2tib3gtd3JhcHBlci5jb21wb25lbnQudHMiLCJuei1jaGVja2JveC13cmFwcGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFZbkksTUFBTSxPQUFPLDBCQUEwQjtJQXFCckMsWUFBWSxRQUFtQixFQUFFLFVBQXNCO1FBcEJwQyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVksQ0FBQztRQUNyRCxpQkFBWSxHQUEwQixFQUFFLENBQUM7UUFvQi9DLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFuQkQsV0FBVyxDQUFDLEtBQTBCO1FBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxjQUFjLENBQUMsS0FBMEI7UUFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELFdBQVc7UUFDVCxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyRSxPQUFPLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUMzQyxDQUFDOztvR0FuQlUsMEJBQTBCOytEQUExQiwwQkFBMEI7O1FDcEJ2QyxrQkFBWTs7a0REb0JDLDBCQUEwQjtjQVJ0QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxXQUFXLEVBQUUsc0NBQXNDO2FBQ3BEOztrQkFFRSxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgUmVuZGVyZXIyLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpDaGVja2JveENvbXBvbmVudCB9IGZyb20gJy4vbnotY2hlY2tib3guY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotY2hlY2tib3gtd3JhcHBlcicsXHJcbiAgZXhwb3J0QXM6ICduekNoZWNrYm94V3JhcHBlcicsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotY2hlY2tib3gtd3JhcHBlci5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE56Q2hlY2tib3hXcmFwcGVyQ29tcG9uZW50IHtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nW10+KCk7XHJcbiAgcHJpdmF0ZSBjaGVja2JveExpc3Q6IE56Q2hlY2tib3hDb21wb25lbnRbXSA9IFtdO1xyXG5cclxuICBhZGRDaGVja2JveCh2YWx1ZTogTnpDaGVja2JveENvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5jaGVja2JveExpc3QucHVzaCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVDaGVja2JveCh2YWx1ZTogTnpDaGVja2JveENvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5jaGVja2JveExpc3Quc3BsaWNlKHRoaXMuY2hlY2tib3hMaXN0LmluZGV4T2YodmFsdWUpLCAxKTtcclxuICB9XHJcblxyXG4gIG91dHB1dFZhbHVlKCk6IHN0cmluZ1tdIHtcclxuICAgIGNvbnN0IGNoZWNrZWRMaXN0ID0gdGhpcy5jaGVja2JveExpc3QuZmlsdGVyKGl0ZW0gPT4gaXRlbS5uekNoZWNrZWQpO1xyXG4gICAgcmV0dXJuIGNoZWNrZWRMaXN0Lm1hcChpdGVtID0+IGl0ZW0ubnpWYWx1ZSk7XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZSgpOiB2b2lkIHtcclxuICAgIHRoaXMubnpPbkNoYW5nZS5lbWl0KHRoaXMub3V0cHV0VmFsdWUoKSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihyZW5kZXJlcjogUmVuZGVyZXIyLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XHJcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtY2hlY2tib3gtZ3JvdXAnKTtcclxuICB9XHJcbn1cclxuIiwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4iXX0=