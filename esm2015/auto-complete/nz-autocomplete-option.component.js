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
const _c0 = ["role", "menuitem", 1, "ant-select-dropdown-menu-item"];
const _c1 = ["*"];
export class NzOptionSelectionChange {
    constructor(source, isUserInput = false) {
        this.source = source;
        this.isUserInput = isUserInput;
    }
}
export class NzAutocompleteOptionComponent {
    constructor(changeDetectorRef, element) {
        this.changeDetectorRef = changeDetectorRef;
        this.element = element;
        this.nzDisabled = false;
        this.selectionChange = new EventEmitter();
        this.active = false;
        this.selected = false;
    }
    select(emit = true) {
        this.selected = true;
        this.changeDetectorRef.markForCheck();
        if (emit) {
            this.emitSelectionChangeEvent();
        }
    }
    deselect() {
        this.selected = false;
        this.changeDetectorRef.markForCheck();
        this.emitSelectionChangeEvent();
    }
    /** Git display label */
    getLabel() {
        return this.nzLabel || this.nzValue.toString();
    }
    /** Set active (only styles) */
    setActiveStyles() {
        if (!this.active) {
            this.active = true;
            this.changeDetectorRef.markForCheck();
        }
    }
    /** Unset active (only styles) */
    setInactiveStyles() {
        if (this.active) {
            this.active = false;
            this.changeDetectorRef.markForCheck();
        }
    }
    scrollIntoViewIfNeeded() {
        scrollIntoView(this.element.nativeElement);
    }
    selectViaInteraction() {
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
    }
    emitSelectionChangeEvent(isUserInput = false) {
        this.selectionChange.emit(new NzOptionSelectionChange(this, isUserInput));
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYXV0b2NvbXBsZXRlLW9wdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2F1dG8tY29tcGxldGUvIiwic291cmNlcyI6WyJuei1hdXRvY29tcGxldGUtb3B0aW9uLmNvbXBvbmVudC50cyIsIm56LWF1dG9jb21wbGV0ZS1vcHRpb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7QUFFbEUsTUFBTSxPQUFPLHVCQUF1QjtJQUNsQyxZQUFtQixNQUFxQyxFQUFTLGNBQXVCLEtBQUs7UUFBMUUsV0FBTSxHQUFOLE1BQU0sQ0FBK0I7UUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBaUI7SUFBRyxDQUFDO0NBQ2xHO0FBcUJELE1BQU0sT0FBTyw2QkFBNkI7SUFVeEMsWUFBb0IsaUJBQW9DLEVBQVUsT0FBbUI7UUFBakUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFONUQsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUN6QixvQkFBZSxHQUFHLElBQUksWUFBWSxFQUEyQixDQUFDO1FBRWpGLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixhQUFRLEdBQUcsS0FBSyxDQUFDO0lBRXVFLENBQUM7SUFFekYsTUFBTSxDQUFDLE9BQWdCLElBQUk7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3RDLElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7U0FDakM7SUFDSCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsd0JBQXdCO0lBQ3hCLFFBQVE7UUFDTixPQUFPLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBRUQsK0JBQStCO0lBQy9CLGVBQWU7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDdkM7SUFDSCxDQUFDO0lBRUQsaUNBQWlDO0lBQ2pDLGlCQUFpQjtRQUNmLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN2QztJQUNILENBQUM7SUFFRCxzQkFBc0I7UUFDcEIsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELG9CQUFvQjtRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUMvQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQzthQUN4QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzthQUMxQjtZQUNELElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDdkM7SUFDSCxDQUFDO0lBRU8sd0JBQXdCLENBQUMsY0FBdUIsS0FBSztRQUMzRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLHVCQUF1QixDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzVFLENBQUM7OzBHQWxFVSw2QkFBNkI7a0VBQTdCLDZCQUE2Qjs7Ozs7Ozs7O1FDNUMxQyxrQkFBWTs7QURnRGU7SUFBZixZQUFZLEVBQUU7O2lFQUFvQjtrREFKakMsNkJBQTZCO2NBbkJ6QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsV0FBVyxFQUFFLHlDQUF5QztnQkFDdEQsSUFBSSxFQUFFO29CQUNKLElBQUksRUFBRSxVQUFVO29CQUNoQixLQUFLLEVBQUUsK0JBQStCO29CQUN0QyxnREFBZ0QsRUFBRSxVQUFVO29CQUM1RCw4Q0FBOEMsRUFBRSxRQUFRO29CQUN4RCxnREFBZ0QsRUFBRSxZQUFZO29CQUM5RCxzQkFBc0IsRUFBRSxxQkFBcUI7b0JBQzdDLHNCQUFzQixFQUFFLHVCQUF1QjtvQkFDL0MsU0FBUyxFQUFFLHdCQUF3QjtvQkFDbkMsYUFBYSxFQUFFLHlCQUF5QjtpQkFDekM7YUFDRjs7a0JBR0UsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIHNjcm9sbEludG9WaWV3IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBOek9wdGlvblNlbGVjdGlvbkNoYW5nZSB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIHNvdXJjZTogTnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQsIHB1YmxpYyBpc1VzZXJJbnB1dDogYm9vbGVhbiA9IGZhbHNlKSB7fVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LWF1dG8tb3B0aW9uJyxcclxuICBleHBvcnRBczogJ256QXV0b09wdGlvbicsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotYXV0b2NvbXBsZXRlLW9wdGlvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgaG9zdDoge1xyXG4gICAgcm9sZTogJ21lbnVpdGVtJyxcclxuICAgIGNsYXNzOiAnYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0nLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbS1zZWxlY3RlZF0nOiAnc2VsZWN0ZWQnLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbS1hY3RpdmVdJzogJ2FjdGl2ZScsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtLWRpc2FibGVkXSc6ICduekRpc2FibGVkJyxcclxuICAgICdbYXR0ci5hcmlhLXNlbGVjdGVkXSc6ICdzZWxlY3RlZC50b1N0cmluZygpJyxcclxuICAgICdbYXR0ci5hcmlhLWRpc2FibGVkXSc6ICduekRpc2FibGVkLnRvU3RyaW5nKCknLFxyXG4gICAgJyhjbGljayknOiAnc2VsZWN0VmlhSW50ZXJhY3Rpb24oKScsXHJcbiAgICAnKG1vdXNlZG93biknOiAnJGV2ZW50LnByZXZlbnREZWZhdWx0KCknXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQge1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cclxuICBASW5wdXQoKSBuelZhbHVlOiBhbnk7XHJcbiAgQElucHV0KCkgbnpMYWJlbDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpc2FibGVkID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNlbGVjdGlvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpPcHRpb25TZWxlY3Rpb25DaGFuZ2U+KCk7XHJcblxyXG4gIGFjdGl2ZSA9IGZhbHNlO1xyXG4gIHNlbGVjdGVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHt9XHJcblxyXG4gIHNlbGVjdChlbWl0OiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgaWYgKGVtaXQpIHtcclxuICAgICAgdGhpcy5lbWl0U2VsZWN0aW9uQ2hhbmdlRXZlbnQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRlc2VsZWN0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICAgIHRoaXMuZW1pdFNlbGVjdGlvbkNoYW5nZUV2ZW50KCk7XHJcbiAgfVxyXG5cclxuICAvKiogR2l0IGRpc3BsYXkgbGFiZWwgKi9cclxuICBnZXRMYWJlbCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMubnpMYWJlbCB8fCB0aGlzLm56VmFsdWUudG9TdHJpbmcoKTtcclxuICB9XHJcblxyXG4gIC8qKiBTZXQgYWN0aXZlIChvbmx5IHN0eWxlcykgKi9cclxuICBzZXRBY3RpdmVTdHlsZXMoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuYWN0aXZlKSB7XHJcbiAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBVbnNldCBhY3RpdmUgKG9ubHkgc3R5bGVzKSAqL1xyXG4gIHNldEluYWN0aXZlU3R5bGVzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuYWN0aXZlKSB7XHJcbiAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzY3JvbGxJbnRvVmlld0lmTmVlZGVkKCk6IHZvaWQge1xyXG4gICAgc2Nyb2xsSW50b1ZpZXcodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0VmlhSW50ZXJhY3Rpb24oKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMubnpEaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkID0gIXRoaXMuc2VsZWN0ZWQ7XHJcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVTdHlsZXMoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNldEluYWN0aXZlU3R5bGVzKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5lbWl0U2VsZWN0aW9uQ2hhbmdlRXZlbnQodHJ1ZSk7XHJcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGVtaXRTZWxlY3Rpb25DaGFuZ2VFdmVudChpc1VzZXJJbnB1dDogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KG5ldyBOek9wdGlvblNlbGVjdGlvbkNoYW5nZSh0aGlzLCBpc1VzZXJJbnB1dCkpO1xyXG4gIH1cclxufVxyXG4iLCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiJdfQ==