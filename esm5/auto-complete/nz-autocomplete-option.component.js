/**
 * @fileoverview added by tsickle
 * Generated from: nz-autocomplete-option.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { scrollIntoView, InputBoolean } from 'ng-zorro-antd/core';
var NzOptionSelectionChange = /** @class */ (function () {
    function NzOptionSelectionChange(source, isUserInput) {
        if (isUserInput === void 0) { isUserInput = false; }
        this.source = source;
        this.isUserInput = isUserInput;
    }
    return NzOptionSelectionChange;
}());
export { NzOptionSelectionChange };
if (false) {
    /** @type {?} */
    NzOptionSelectionChange.prototype.source;
    /** @type {?} */
    NzOptionSelectionChange.prototype.isUserInput;
}
var NzAutocompleteOptionComponent = /** @class */ (function () {
    function NzAutocompleteOptionComponent(changeDetectorRef, element) {
        this.changeDetectorRef = changeDetectorRef;
        this.element = element;
        this.nzDisabled = false;
        this.selectionChange = new EventEmitter();
        this.active = false;
        this.selected = false;
    }
    /**
     * @param {?=} emit
     * @return {?}
     */
    NzAutocompleteOptionComponent.prototype.select = /**
     * @param {?=} emit
     * @return {?}
     */
    function (emit) {
        if (emit === void 0) { emit = true; }
        this.selected = true;
        this.changeDetectorRef.markForCheck();
        if (emit) {
            this.emitSelectionChangeEvent();
        }
    };
    /**
     * @return {?}
     */
    NzAutocompleteOptionComponent.prototype.deselect = /**
     * @return {?}
     */
    function () {
        this.selected = false;
        this.changeDetectorRef.markForCheck();
        this.emitSelectionChangeEvent();
    };
    /** Git display label */
    /**
     * Git display label
     * @return {?}
     */
    NzAutocompleteOptionComponent.prototype.getLabel = /**
     * Git display label
     * @return {?}
     */
    function () {
        return this.nzLabel || this.nzValue.toString();
    };
    /** Set active (only styles) */
    /**
     * Set active (only styles)
     * @return {?}
     */
    NzAutocompleteOptionComponent.prototype.setActiveStyles = /**
     * Set active (only styles)
     * @return {?}
     */
    function () {
        if (!this.active) {
            this.active = true;
            this.changeDetectorRef.markForCheck();
        }
    };
    /** Unset active (only styles) */
    /**
     * Unset active (only styles)
     * @return {?}
     */
    NzAutocompleteOptionComponent.prototype.setInactiveStyles = /**
     * Unset active (only styles)
     * @return {?}
     */
    function () {
        if (this.active) {
            this.active = false;
            this.changeDetectorRef.markForCheck();
        }
    };
    /**
     * @return {?}
     */
    NzAutocompleteOptionComponent.prototype.scrollIntoViewIfNeeded = /**
     * @return {?}
     */
    function () {
        scrollIntoView(this.element.nativeElement);
    };
    /**
     * @return {?}
     */
    NzAutocompleteOptionComponent.prototype.selectViaInteraction = /**
     * @return {?}
     */
    function () {
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
    /**
     * @private
     * @param {?=} isUserInput
     * @return {?}
     */
    NzAutocompleteOptionComponent.prototype.emitSelectionChangeEvent = /**
     * @private
     * @param {?=} isUserInput
     * @return {?}
     */
    function (isUserInput) {
        if (isUserInput === void 0) { isUserInput = false; }
        this.selectionChange.emit(new NzOptionSelectionChange(this, isUserInput));
    };
    NzAutocompleteOptionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-auto-option',
                    exportAs: 'nzAutoOption',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "<ng-content></ng-content>",
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
                }] }
    ];
    /** @nocollapse */
    NzAutocompleteOptionComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef }
    ]; };
    NzAutocompleteOptionComponent.propDecorators = {
        nzValue: [{ type: Input }],
        nzLabel: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        selectionChange: [{ type: Output }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzAutocompleteOptionComponent.prototype, "nzDisabled", void 0);
    return NzAutocompleteOptionComponent;
}());
export { NzAutocompleteOptionComponent };
if (false) {
    /** @type {?} */
    NzAutocompleteOptionComponent.prototype.nzValue;
    /** @type {?} */
    NzAutocompleteOptionComponent.prototype.nzLabel;
    /** @type {?} */
    NzAutocompleteOptionComponent.prototype.nzDisabled;
    /** @type {?} */
    NzAutocompleteOptionComponent.prototype.selectionChange;
    /** @type {?} */
    NzAutocompleteOptionComponent.prototype.active;
    /** @type {?} */
    NzAutocompleteOptionComponent.prototype.selected;
    /**
     * @type {?}
     * @private
     */
    NzAutocompleteOptionComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    NzAutocompleteOptionComponent.prototype.element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYXV0b2NvbXBsZXRlLW9wdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2F1dG8tY29tcGxldGUvIiwic291cmNlcyI6WyJuei1hdXRvY29tcGxldGUtb3B0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRTtJQUNFLGlDQUFtQixNQUFxQyxFQUFTLFdBQTRCO1FBQTVCLDRCQUFBLEVBQUEsbUJBQTRCO1FBQTFFLFdBQU0sR0FBTixNQUFNLENBQStCO1FBQVMsZ0JBQVcsR0FBWCxXQUFXLENBQWlCO0lBQUcsQ0FBQztJQUNuRyw4QkFBQztBQUFELENBQUMsQUFGRCxJQUVDOzs7O0lBRGEseUNBQTRDOztJQUFFLDhDQUFtQzs7QUFHL0Y7SUE2QkUsdUNBQW9CLGlCQUFvQyxFQUFVLE9BQW1CO1FBQWpFLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBTjVELGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDekIsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBMkIsQ0FBQztRQUVqRixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsYUFBUSxHQUFHLEtBQUssQ0FBQztJQUV1RSxDQUFDOzs7OztJQUV6Riw4Q0FBTTs7OztJQUFOLFVBQU8sSUFBb0I7UUFBcEIscUJBQUEsRUFBQSxXQUFvQjtRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdEMsSUFBSSxJQUFJLEVBQUU7WUFDUixJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztTQUNqQztJQUNILENBQUM7Ozs7SUFFRCxnREFBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVELHdCQUF3Qjs7Ozs7SUFDeEIsZ0RBQVE7Ozs7SUFBUjtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2pELENBQUM7SUFFRCwrQkFBK0I7Ozs7O0lBQy9CLHVEQUFlOzs7O0lBQWY7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDdkM7SUFDSCxDQUFDO0lBRUQsaUNBQWlDOzs7OztJQUNqQyx5REFBaUI7Ozs7SUFBakI7UUFDRSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDdkM7SUFDSCxDQUFDOzs7O0lBRUQsOERBQXNCOzs7SUFBdEI7UUFDRSxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7O0lBRUQsNERBQW9COzs7SUFBcEI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUMvQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQzthQUN4QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzthQUMxQjtZQUNELElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDdkM7SUFDSCxDQUFDOzs7Ozs7SUFFTyxnRUFBd0I7Ozs7O0lBQWhDLFVBQWlDLFdBQTRCO1FBQTVCLDRCQUFBLEVBQUEsbUJBQTRCO1FBQzNELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksdUJBQXVCLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDNUUsQ0FBQzs7Z0JBckZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsY0FBYztvQkFDeEIsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxxQ0FBc0Q7b0JBQ3RELElBQUksRUFBRTt3QkFDSixJQUFJLEVBQUUsVUFBVTt3QkFDaEIsS0FBSyxFQUFFLCtCQUErQjt3QkFDdEMsZ0RBQWdELEVBQUUsVUFBVTt3QkFDNUQsOENBQThDLEVBQUUsUUFBUTt3QkFDeEQsZ0RBQWdELEVBQUUsWUFBWTt3QkFDOUQsc0JBQXNCLEVBQUUscUJBQXFCO3dCQUM3QyxzQkFBc0IsRUFBRSx1QkFBdUI7d0JBQy9DLFNBQVMsRUFBRSx3QkFBd0I7d0JBQ25DLGFBQWEsRUFBRSx5QkFBeUI7cUJBQ3pDO2lCQUNGOzs7O2dCQWpDQyxpQkFBaUI7Z0JBRWpCLFVBQVU7OzswQkFrQ1QsS0FBSzswQkFDTCxLQUFLOzZCQUNMLEtBQUs7a0NBQ0wsTUFBTTs7SUFEa0I7UUFBZixZQUFZLEVBQUU7O3FFQUFvQjtJQStEOUMsb0NBQUM7Q0FBQSxBQXRGRCxJQXNGQztTQW5FWSw2QkFBNkI7OztJQUV4QyxnREFBc0I7O0lBQ3RCLGdEQUF5Qjs7SUFDekIsbURBQTRDOztJQUM1Qyx3REFBaUY7O0lBRWpGLCtDQUFlOztJQUNmLGlEQUFpQjs7Ozs7SUFFTCwwREFBNEM7Ozs7O0lBQUUsZ0RBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IHNjcm9sbEludG9WaWV3LCBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE56T3B0aW9uU2VsZWN0aW9uQ2hhbmdlIHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc291cmNlOiBOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudCwgcHVibGljIGlzVXNlcklucHV0OiBib29sZWFuID0gZmFsc2UpIHt9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotYXV0by1vcHRpb24nLFxyXG4gIGV4cG9ydEFzOiAnbnpBdXRvT3B0aW9uJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1hdXRvY29tcGxldGUtb3B0aW9uLmNvbXBvbmVudC5odG1sJyxcclxuICBob3N0OiB7XHJcbiAgICByb2xlOiAnbWVudWl0ZW0nLFxyXG4gICAgY2xhc3M6ICdhbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbScsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtLXNlbGVjdGVkXSc6ICdzZWxlY3RlZCcsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtLWFjdGl2ZV0nOiAnYWN0aXZlJyxcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0tZGlzYWJsZWRdJzogJ256RGlzYWJsZWQnLFxyXG4gICAgJ1thdHRyLmFyaWEtc2VsZWN0ZWRdJzogJ3NlbGVjdGVkLnRvU3RyaW5nKCknLFxyXG4gICAgJ1thdHRyLmFyaWEtZGlzYWJsZWRdJzogJ256RGlzYWJsZWQudG9TdHJpbmcoKScsXHJcbiAgICAnKGNsaWNrKSc6ICdzZWxlY3RWaWFJbnRlcmFjdGlvbigpJyxcclxuICAgICcobW91c2Vkb3duKSc6ICckZXZlbnQucHJldmVudERlZmF1bHQoKSdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudCB7XHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG4gIEBJbnB1dCgpIG56VmFsdWU6IGFueTtcclxuICBASW5wdXQoKSBuekxhYmVsOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGlzYWJsZWQgPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2VsZWN0aW9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxOek9wdGlvblNlbGVjdGlvbkNoYW5nZT4oKTtcclxuXHJcbiAgYWN0aXZlID0gZmFsc2U7XHJcbiAgc2VsZWN0ZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZikge31cclxuXHJcbiAgc2VsZWN0KGVtaXQ6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XHJcbiAgICB0aGlzLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgICBpZiAoZW1pdCkge1xyXG4gICAgICB0aGlzLmVtaXRTZWxlY3Rpb25DaGFuZ2VFdmVudCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGVzZWxlY3QoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgdGhpcy5lbWl0U2VsZWN0aW9uQ2hhbmdlRXZlbnQoKTtcclxuICB9XHJcblxyXG4gIC8qKiBHaXQgZGlzcGxheSBsYWJlbCAqL1xyXG4gIGdldExhYmVsKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5uekxhYmVsIHx8IHRoaXMubnpWYWx1ZS50b1N0cmluZygpO1xyXG4gIH1cclxuXHJcbiAgLyoqIFNldCBhY3RpdmUgKG9ubHkgc3R5bGVzKSAqL1xyXG4gIHNldEFjdGl2ZVN0eWxlcygpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5hY3RpdmUpIHtcclxuICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIFVuc2V0IGFjdGl2ZSAob25seSBzdHlsZXMpICovXHJcbiAgc2V0SW5hY3RpdmVTdHlsZXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5hY3RpdmUpIHtcclxuICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNjcm9sbEludG9WaWV3SWZOZWVkZWQoKTogdm9pZCB7XHJcbiAgICBzY3JvbGxJbnRvVmlldyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RWaWFJbnRlcmFjdGlvbigpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5uekRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSAhdGhpcy5zZWxlY3RlZDtcclxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQpIHtcclxuICAgICAgICB0aGlzLnNldEFjdGl2ZVN0eWxlcygpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2V0SW5hY3RpdmVTdHlsZXMoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmVtaXRTZWxlY3Rpb25DaGFuZ2VFdmVudCh0cnVlKTtcclxuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZW1pdFNlbGVjdGlvbkNoYW5nZUV2ZW50KGlzVXNlcklucHV0OiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQobmV3IE56T3B0aW9uU2VsZWN0aW9uQ2hhbmdlKHRoaXMsIGlzVXNlcklucHV0KSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==