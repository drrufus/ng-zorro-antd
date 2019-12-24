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
const _c0 = ["textarea"];
function NzTextEditComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r1711 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 2);
    i0.ɵɵlistener("click", function NzTextEditComponent_button_0_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r1711); const ctx_r1710 = i0.ɵɵnextContext(); return ctx_r1710.onClick(); });
    i0.ɵɵelement(1, "i", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1708 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nzTitle", ctx_r1708.locale == null ? null : ctx_r1708.locale.edit);
} }
function NzTextEditComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r1714 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "textarea", 4, 5);
    i0.ɵɵlistener("input", function NzTextEditComponent_ng_container_1_Template_textarea_input_1_listener($event) { i0.ɵɵrestoreView(_r1714); const ctx_r1713 = i0.ɵɵnextContext(); return ctx_r1713.onInput($event); })("blur", function NzTextEditComponent_ng_container_1_Template_textarea_blur_1_listener($event) { i0.ɵɵrestoreView(_r1714); const ctx_r1715 = i0.ɵɵnextContext(); return ctx_r1715.confirm(); })("keydown.esc", function NzTextEditComponent_ng_container_1_Template_textarea_keydown_esc_1_listener($event) { i0.ɵɵrestoreView(_r1714); const ctx_r1716 = i0.ɵɵnextContext(); return ctx_r1716.onCancel(); })("keydown.enter", function NzTextEditComponent_ng_container_1_Template_textarea_keydown_enter_1_listener($event) { i0.ɵɵrestoreView(_r1714); const ctx_r1717 = i0.ɵɵnextContext(); return ctx_r1717.onEnter($event); });
    i0.ɵɵtext(3, "  ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 6);
    i0.ɵɵlistener("click", function NzTextEditComponent_ng_container_1_Template_button_click_4_listener($event) { i0.ɵɵrestoreView(_r1714); const ctx_r1718 = i0.ɵɵnextContext(); return ctx_r1718.confirm(); });
    i0.ɵɵelement(5, "i", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} }
export class NzTextEditComponent {
    constructor(host, cdr, i18n) {
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
    ngOnInit() {
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.locale = this.i18n.getLocaleData('Text');
            this.cdr.markForCheck();
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    onClick() {
        this.beforeText = this.text;
        this.currentText = this.beforeText;
        this.editing = true;
        this.startEditing.emit();
        this.focusAndSetValue();
    }
    confirm() {
        this.editing = false;
        this.endEditing.emit(this.currentText);
    }
    onInput(event) {
        const target = event.target;
        this.currentText = target.value;
    }
    onEnter(event) {
        event.stopPropagation();
        event.preventDefault();
        this.confirm();
    }
    onCancel() {
        this.currentText = this.beforeText;
        this.confirm();
    }
    focusAndSetValue() {
        setTimeout(() => {
            if (this.textarea && this.textarea.nativeElement) {
                this.textarea.nativeElement.focus();
                this.textarea.nativeElement.value = this.currentText;
                this.autosizeDirective.resizeToFitContent();
            }
        });
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGV4dC1lZGl0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdHlwb2dyYXBoeS8iLCJzb3VyY2VzIjpbIm56LXRleHQtZWRpdC5jb21wb25lbnQudHMiLCJuei10ZXh0LWVkaXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7Ozs7SUMxQjFELGlDQVFFO0lBRkEsc01BQW1CO0lBRW5CLHVCQUE2QjtJQUMvQixpQkFBUzs7O0lBUFAsaUZBQXdCOzs7O0lBUTFCLDZCQUNFO0lBQUEsc0NBU0E7SUFMRSxvTkFBeUIsK0xBQUEsOE1BQUEsdU5BQUE7SUFLM0Isa0JBQUE7SUFBQSxpQkFBVztJQUNYLGlDQUNFO0lBRGtFLDRNQUFtQjtJQUNyRix1QkFBOEI7SUFDaEMsaUJBQVM7SUFDWCwwQkFBZTs7QURZZixNQUFNLE9BQU8sbUJBQW1CO0lBZTlCLFlBQW9CLElBQWdCLEVBQVUsR0FBc0IsRUFBVSxJQUFtQjtRQUE3RSxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFlO1FBZGpHLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsa0NBQWtDO1FBQ2xDLFdBQU0sR0FBUSxFQUFFLENBQUM7UUFDVCxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUdkLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUN4QyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQU0zRCxrQkFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzRELENBQUM7SUFFckcsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNuRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsT0FBTyxDQUFDLEtBQVk7UUFDbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQTZCLENBQUM7UUFDbkQsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxPQUFPLENBQUMsS0FBb0I7UUFDMUIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCxnQkFBZ0I7UUFDZCxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFO2dCQUNoRCxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQ3JELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO2FBQzdDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOztzRkFsRVUsbUJBQW1CO3dEQUFuQixtQkFBbUI7O3VCQVVuQixtQkFBbUI7Ozs7OztRQzlDaEMsMEVBUUU7UUFFRixzRkFDRTs7UUFWQSxtQ0FBZ0I7UUFTSixlQUFlO1FBQWYsa0NBQWU7O2tERDBCaEIsbUJBQW1CO2NBUi9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFdBQVcsRUFBRSwrQkFBK0I7Z0JBQzVDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsbUJBQW1CLEVBQUUsS0FBSzthQUMzQjs7a0JBT0UsS0FBSzs7a0JBQ0wsTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sU0FBUzttQkFBQyxVQUFVLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOztrQkFDdkMsU0FBUzttQkFBQyxtQkFBbUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuaW1wb3J0IHsgTnpBdXRvc2l6ZURpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaW5wdXQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei10ZXh0LWVkaXQnLFxyXG4gIGV4cG9ydEFzOiAnbnpUZXh0RWRpdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXRleHQtZWRpdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpUZXh0RWRpdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBlZGl0aW5nID0gZmFsc2U7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIGxvY2FsZTogYW55ID0ge307XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIEBJbnB1dCgpIHRleHQ6IHN0cmluZztcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgc3RhcnRFZGl0aW5nID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBlbmRFZGl0aW5nID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcbiAgQFZpZXdDaGlsZCgndGV4dGFyZWEnLCB7IHN0YXRpYzogZmFsc2UgfSkgdGV4dGFyZWE6IEVsZW1lbnRSZWY8SFRNTFRleHRBcmVhRWxlbWVudD47XHJcbiAgQFZpZXdDaGlsZChOekF1dG9zaXplRGlyZWN0aXZlLCB7IHN0YXRpYzogZmFsc2UgfSkgYXV0b3NpemVEaXJlY3RpdmU6IE56QXV0b3NpemVEaXJlY3RpdmU7XHJcblxyXG4gIGJlZm9yZVRleHQ6IHN0cmluZztcclxuICBjdXJyZW50VGV4dDogc3RyaW5nO1xyXG4gIG5hdGl2ZUVsZW1lbnQgPSB0aGlzLmhvc3QubmF0aXZlRWxlbWVudDtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhvc3Q6IEVsZW1lbnRSZWYsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaTE4bi5sb2NhbGVDaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldExvY2FsZURhdGEoJ1RleHQnKTtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5iZWZvcmVUZXh0ID0gdGhpcy50ZXh0O1xyXG4gICAgdGhpcy5jdXJyZW50VGV4dCA9IHRoaXMuYmVmb3JlVGV4dDtcclxuICAgIHRoaXMuZWRpdGluZyA9IHRydWU7XHJcbiAgICB0aGlzLnN0YXJ0RWRpdGluZy5lbWl0KCk7XHJcbiAgICB0aGlzLmZvY3VzQW5kU2V0VmFsdWUoKTtcclxuICB9XHJcblxyXG4gIGNvbmZpcm0oKTogdm9pZCB7XHJcbiAgICB0aGlzLmVkaXRpbmcgPSBmYWxzZTtcclxuICAgIHRoaXMuZW5kRWRpdGluZy5lbWl0KHRoaXMuY3VycmVudFRleHQpO1xyXG4gIH1cclxuXHJcbiAgb25JbnB1dChldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MVGV4dEFyZWFFbGVtZW50O1xyXG4gICAgdGhpcy5jdXJyZW50VGV4dCA9IHRhcmdldC52YWx1ZTtcclxuICB9XHJcblxyXG4gIG9uRW50ZXIoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuY29uZmlybSgpO1xyXG4gIH1cclxuXHJcbiAgb25DYW5jZWwoKTogdm9pZCB7XHJcbiAgICB0aGlzLmN1cnJlbnRUZXh0ID0gdGhpcy5iZWZvcmVUZXh0O1xyXG4gICAgdGhpcy5jb25maXJtKCk7XHJcbiAgfVxyXG5cclxuICBmb2N1c0FuZFNldFZhbHVlKCk6IHZvaWQge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnRleHRhcmVhICYmIHRoaXMudGV4dGFyZWEubmF0aXZlRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMudGV4dGFyZWEubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICAgIHRoaXMudGV4dGFyZWEubmF0aXZlRWxlbWVudC52YWx1ZSA9IHRoaXMuY3VycmVudFRleHQ7XHJcbiAgICAgICAgdGhpcy5hdXRvc2l6ZURpcmVjdGl2ZS5yZXNpemVUb0ZpdENvbnRlbnQoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIjxidXR0b25cclxuICAqbmdJZj1cIiFlZGl0aW5nXCJcclxuICBbbnpUaXRsZV09XCJsb2NhbGU/LmVkaXRcIlxyXG4gIG56LXRvb2x0aXBcclxuICBuei10cmFucy1idXR0b25cclxuICBjbGFzcz1cImFudC10eXBvZ3JhcGh5LWVkaXRcIlxyXG4gIChjbGljayk9XCJvbkNsaWNrKClcIlxyXG4+XHJcbiAgPGkgbnotaWNvbiBuelR5cGU9XCJlZGl0XCI+PC9pPlxyXG48L2J1dHRvbj5cclxuPG5nLWNvbnRhaW5lciAqbmdJZj1cImVkaXRpbmdcIj5cclxuICA8dGV4dGFyZWFcclxuICAgICN0ZXh0YXJlYVxyXG4gICAgbnotaW5wdXRcclxuICAgIG56QXV0b3NpemVcclxuICAgIChpbnB1dCk9XCJvbklucHV0KCRldmVudClcIlxyXG4gICAgKGJsdXIpPVwiY29uZmlybSgpXCJcclxuICAgIChrZXlkb3duLmVzYyk9XCJvbkNhbmNlbCgpXCJcclxuICAgIChrZXlkb3duLmVudGVyKT1cIm9uRW50ZXIoJGV2ZW50KVwiXHJcbiAgPlxyXG4gIDwvdGV4dGFyZWE+XHJcbiAgPGJ1dHRvbiBuei10cmFucy1idXR0b24gY2xhc3M9XCJhbnQtdHlwb2dyYXBoeS1lZGl0LWNvbnRlbnQtY29uZmlybVwiIChjbGljayk9XCJjb25maXJtKClcIj5cclxuICAgIDxpIG56LWljb24gbnpUeXBlPVwiZW50ZXJcIj48L2k+XHJcbiAgPC9idXR0b24+XHJcbjwvbmctY29udGFpbmVyPlxyXG4iXX0=