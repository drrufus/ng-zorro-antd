import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { InputBoolean, scrollIntoView } from 'ng-zorro-antd/core';
import * as i0 from "@angular/core";
var _c0 = ["role", "menuitem", 1, "ant-select-dropdown-menu-item"];
var _c1 = ["*"];
var NzOptionSelectionChange = /** @class */ (function () {
    function NzOptionSelectionChange(source, isUserInput) {
        if (isUserInput === void 0) { isUserInput = false; }
        this.source = source;
        this.isUserInput = isUserInput;
    }
    return NzOptionSelectionChange;
}());
export { NzOptionSelectionChange };
var NzAutocompleteOptionComponent = /** @class */ (function () {
    function NzAutocompleteOptionComponent(changeDetectorRef, element) {
        this.changeDetectorRef = changeDetectorRef;
        this.element = element;
        this.nzDisabled = false;
        this.selectionChange = new EventEmitter();
        this.active = false;
        this.selected = false;
    }
    NzAutocompleteOptionComponent.prototype.select = function (emit) {
        if (emit === void 0) { emit = true; }
        this.selected = true;
        this.changeDetectorRef.markForCheck();
        if (emit) {
            this.emitSelectionChangeEvent();
        }
    };
    NzAutocompleteOptionComponent.prototype.deselect = function () {
        this.selected = false;
        this.changeDetectorRef.markForCheck();
        this.emitSelectionChangeEvent();
    };
    /** Git display label */
    NzAutocompleteOptionComponent.prototype.getLabel = function () {
        return this.nzLabel || this.nzValue.toString();
    };
    /** Set active (only styles) */
    NzAutocompleteOptionComponent.prototype.setActiveStyles = function () {
        if (!this.active) {
            this.active = true;
            this.changeDetectorRef.markForCheck();
        }
    };
    /** Unset active (only styles) */
    NzAutocompleteOptionComponent.prototype.setInactiveStyles = function () {
        if (this.active) {
            this.active = false;
            this.changeDetectorRef.markForCheck();
        }
    };
    NzAutocompleteOptionComponent.prototype.scrollIntoViewIfNeeded = function () {
        scrollIntoView(this.element.nativeElement);
    };
    NzAutocompleteOptionComponent.prototype.selectViaInteraction = function () {
        if (!this.nzDisabled) {
            this.selected = !this.selected;
            if (this.selected) {
                this.setActiveStyles();
            }
            else {
                this.setInactiveStyles();
            }
            this.emitSelectionChangeEvent(true);
            this.changeDetectorRef.markForCheck();
        }
    };
    NzAutocompleteOptionComponent.prototype.emitSelectionChangeEvent = function (isUserInput) {
        if (isUserInput === void 0) { isUserInput = false; }
        this.selectionChange.emit(new NzOptionSelectionChange(this, isUserInput));
    };
    /** @nocollapse */ NzAutocompleteOptionComponent.ɵfac = function NzAutocompleteOptionComponent_Factory(t) { return new (t || NzAutocompleteOptionComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    /** @nocollapse */ NzAutocompleteOptionComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzAutocompleteOptionComponent, selectors: [["nz-auto-option"]], hostBindings: function NzAutocompleteOptionComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            i0.ɵɵallocHostVars(5);
            i0.ɵɵlistener("click", function NzAutocompleteOptionComponent_click_HostBindingHandler($event) { return ctx.selectViaInteraction(); })("mousedown", function NzAutocompleteOptionComponent_mousedown_HostBindingHandler($event) { return $event.preventDefault(); });
            i0.ɵɵelementHostAttrs(_c0);
        } if (rf & 2) {
            i0.ɵɵattribute("aria-selected", ctx.selected.toString())("aria-disabled", ctx.nzDisabled.toString());
            i0.ɵɵclassProp("ant-select-dropdown-menu-item-selected", ctx.selected)("ant-select-dropdown-menu-item-active", ctx.active)("ant-select-dropdown-menu-item-disabled", ctx.nzDisabled);
        } }, inputs: { nzValue: "nzValue", nzLabel: "nzLabel", nzDisabled: "nzDisabled" }, outputs: { selectionChange: "selectionChange" }, exportAs: ["nzAutoOption"], ngContentSelectors: _c1, decls: 1, vars: 0, template: function NzAutocompleteOptionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzAutocompleteOptionComponent.prototype, "nzDisabled", void 0);
    return NzAutocompleteOptionComponent;
}());
export { NzAutocompleteOptionComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzAutocompleteOptionComponent, [{
        type: Component,
        args: [{
                selector: 'nz-auto-option',
                exportAs: 'nzAutoOption',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                templateUrl: './nz-autocomplete-option.component.html',
                host: {
                    role: 'menuitem',
                    class: 'ant-select-dropdown-menu-item',
                    '[class.ant-select-dropdown-menu-item-selected]': 'selected',
                    '[class.ant-select-dropdown-menu-item-active]': 'active',
                    '[class.ant-select-dropdown-menu-item-disabled]': 'nzDisabled',
                    '[attr.aria-selected]': 'selected.toString()',
                    '[attr.aria-disabled]': 'nzDisabled.toString()',
                    '(click)': 'selectViaInteraction()',
                    '(mousedown)': '$event.preventDefault()'
                }
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }]; }, { nzValue: [{
            type: Input
        }], nzLabel: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }], selectionChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYXV0b2NvbXBsZXRlLW9wdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2F1dG8tY29tcGxldGUvIiwic291cmNlcyI6WyJuei1hdXRvY29tcGxldGUtb3B0aW9uLmNvbXBvbmVudC50cyIsIm56LWF1dG9jb21wbGV0ZS1vcHRpb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7QUFFbEU7SUFDRSxpQ0FBbUIsTUFBcUMsRUFBUyxXQUE0QjtRQUE1Qiw0QkFBQSxFQUFBLG1CQUE0QjtRQUExRSxXQUFNLEdBQU4sTUFBTSxDQUErQjtRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFpQjtJQUFHLENBQUM7SUFDbkcsOEJBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQzs7QUFFRDtJQTZCRSx1Q0FBb0IsaUJBQW9DLEVBQVUsT0FBbUI7UUFBakUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFONUQsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUN6QixvQkFBZSxHQUFHLElBQUksWUFBWSxFQUEyQixDQUFDO1FBRWpGLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixhQUFRLEdBQUcsS0FBSyxDQUFDO0lBRXVFLENBQUM7SUFFekYsOENBQU0sR0FBTixVQUFPLElBQW9CO1FBQXBCLHFCQUFBLEVBQUEsV0FBb0I7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLGlCQUFpQixDQUFD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c0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgc2Nyb2xsSW50b1ZpZXcgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE56T3B0aW9uU2VsZWN0aW9uQ2hhbmdlIHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc291cmNlOiBOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudCwgcHVibGljIGlzVXNlcklucHV0OiBib29sZWFuID0gZmFsc2UpIHt9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotYXV0by1vcHRpb24nLFxyXG4gIGV4cG9ydEFzOiAnbnpBdXRvT3B0aW9uJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1hdXRvY29tcGxldGUtb3B0aW9uLmNvbXBvbmVudC5odG1sJyxcclxuICBob3N0OiB7XHJcbiAgICByb2xlOiAnbWVudWl0ZW0nLFxyXG4gICAgY2xhc3M6ICdhbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbScsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtLXNlbGVjdGVkXSc6ICdzZWxlY3RlZCcsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtLWFjdGl2ZV0nOiAnYWN0aXZlJyxcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0tZGlzYWJsZWRdJzogJ256RGlzYWJsZWQnLFxyXG4gICAgJ1thdHRyLmFyaWEtc2VsZWN0ZWRdJzogJ3NlbGVjdGVkLnRvU3RyaW5nKCknLFxyXG4gICAgJ1thdHRyLmFyaWEtZGlzYWJsZWRdJzogJ256RGlzYWJsZWQudG9TdHJpbmcoKScsXHJcbiAgICAnKGNsaWNrKSc6ICdzZWxlY3RWaWFJbnRlcmFjdGlvbigpJyxcclxuICAgICcobW91c2Vkb3duKSc6ICckZXZlbnQucHJldmVudERlZmF1bHQoKSdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudCB7XHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG4gIEBJbnB1dCgpIG56VmFsdWU6IGFueTtcclxuICBASW5wdXQoKSBuekxhYmVsOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGlzYWJsZWQgPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2VsZWN0aW9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxOek9wdGlvblNlbGVjdGlvbkNoYW5nZT4oKTtcclxuXHJcbiAgYWN0aXZlID0gZmFsc2U7XHJcbiAgc2VsZWN0ZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZikge31cclxuXHJcbiAgc2VsZWN0KGVtaXQ6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XHJcbiAgICB0aGlzLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgICBpZiAoZW1pdCkge1xyXG4gICAgICB0aGlzLmVtaXRTZWxlY3Rpb25DaGFuZ2VFdmVudCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGVzZWxlY3QoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgdGhpcy5lbWl0U2VsZWN0aW9uQ2hhbmdlRXZlbnQoKTtcclxuICB9XHJcblxyXG4gIC8qKiBHaXQgZGlzcGxheSBsYWJlbCAqL1xyXG4gIGdldExhYmVsKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5uekxhYmVsIHx8IHRoaXMubnpWYWx1ZS50b1N0cmluZygpO1xyXG4gIH1cclxuXHJcbiAgLyoqIFNldCBhY3RpdmUgKG9ubHkgc3R5bGVzKSAqL1xyXG4gIHNldEFjdGl2ZVN0eWxlcygpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5hY3RpdmUpIHtcclxuICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIFVuc2V0IGFjdGl2ZSAob25seSBzdHlsZXMpICovXHJcbiAgc2V0SW5hY3RpdmVTdHlsZXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5hY3RpdmUpIHtcclxuICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNjcm9sbEludG9WaWV3SWZOZWVkZWQoKTogdm9pZCB7XHJcbiAgICBzY3JvbGxJbnRvVmlldyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RWaWFJbnRlcmFjdGlvbigpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5uekRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSAhdGhpcy5zZWxlY3RlZDtcclxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQpIHtcclxuICAgICAgICB0aGlzLnNldEFjdGl2ZVN0eWxlcygpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2V0SW5hY3RpdmVTdHlsZXMoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmVtaXRTZWxlY3Rpb25DaGFuZ2VFdmVudCh0cnVlKTtcclxuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZW1pdFNlbGVjdGlvbkNoYW5nZUV2ZW50KGlzVXNlcklucHV0OiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQobmV3IE56T3B0aW9uU2VsZWN0aW9uQ2hhbmdlKHRoaXMsIGlzVXNlcklucHV0KSk7XHJcbiAgfVxyXG59XHJcbiIsIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuIl19