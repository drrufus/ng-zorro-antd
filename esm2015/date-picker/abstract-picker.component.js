import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CandyDate, InputBoolean } from 'ng-zorro-antd/core';
import { NzPickerComponent } from './picker.component';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/i18n";
import * as i2 from "ng-zorro-antd/core";
const POPUP_STYLE_PATCH = { position: 'relative' }; // Aim to override antd's style to support overlay's position strategy (position:absolute will cause it not working beacuse the overlay can't get the height/width of it's content)
/**
 * The base picker for all common APIs
 */
export class AbstractPickerComponent {
    constructor(i18n, cdr, dateHelper, noAnimation) {
        this.i18n = i18n;
        this.cdr = cdr;
        this.dateHelper = dateHelper;
        this.noAnimation = noAnimation;
        // --- Common API
        this.nzAllowClear = true;
        this.nzAutoFocus = false;
        this.nzDisabled = false;
        this.nzPopupStyle = POPUP_STYLE_PATCH;
        this.nzOnOpenChange = new EventEmitter();
        this.isRange = false; // Indicate whether the value is a range value
        this.destroyed$ = new Subject();
        this.isCustomPlaceHolder = false;
        // ------------------------------------------------------------------------
        // | Control value accessor implements
        // ------------------------------------------------------------------------
        // NOTE: onChangeFn/onTouchedFn will not be assigned if user not use as ngModel
        this.onChangeFn = () => void 0;
        this.onTouchedFn = () => void 0;
    }
    get realOpenState() {
        return this.picker.animationOpenState;
    } // Use picker's real open state to let re-render the picker's content when shown up
    initValue() {
        this.nzValue = this.isRange ? [] : null;
    }
    ngOnInit() {
        // Subscribe the every locale change if the nzLocale is not handled by user
        if (!this.nzLocale) {
            this.i18n.localeChange.pipe(takeUntil(this.destroyed$)).subscribe(() => this.setLocale());
        }
        // Default value
        this.initValue();
    }
    ngOnChanges(changes) {
        if (changes.nzPopupStyle) {
            // Always assign the popup style patch
            this.nzPopupStyle = this.nzPopupStyle ? Object.assign(Object.assign({}, this.nzPopupStyle), POPUP_STYLE_PATCH) : POPUP_STYLE_PATCH;
        }
        // Mark as customized placeholder by user once nzPlaceHolder assigned at the first time
        if (changes.nzPlaceHolder && changes.nzPlaceHolder.firstChange && typeof this.nzPlaceHolder !== 'undefined') {
            this.isCustomPlaceHolder = true;
        }
        if (changes.nzLocale) {
            // The nzLocale is currently handled by user
            this.setDefaultPlaceHolder();
        }
    }
    ngOnDestroy() {
        this.destroyed$.next();
        this.destroyed$.complete();
    }
    closeOverlay() {
        this.picker.hideOverlay();
    }
    /**
     * Common handle for value changes
     * @param value changed value
     */
    onValueChange(value) {
        this.nzValue = value;
        if (this.isRange) {
            const vAsRange = this.nzValue;
            if (vAsRange.length) {
                this.onChangeFn([vAsRange[0].nativeDate, vAsRange[1].nativeDate]);
            }
            else {
                this.onChangeFn([]);
            }
        }
        else {
            if (this.nzValue) {
                this.onChangeFn(this.nzValue.nativeDate);
            }
            else {
                this.onChangeFn(null);
            }
        }
        this.onTouchedFn();
    }
    /**
     * Triggered when overlayOpen changes (different with realOpenState)
     * @param open The overlayOpen in picker component
     */
    onOpenChange(open) {
        this.nzOnOpenChange.emit(open);
    }
    writeValue(value) {
        this.setValue(value);
        this.cdr.markForCheck();
    }
    // tslint:disable-next-line:no-any
    registerOnChange(fn) {
        this.onChangeFn = fn;
    }
    // tslint:disable-next-line:no-any
    registerOnTouched(fn) {
        this.onTouchedFn = fn;
    }
    setDisabledState(disabled) {
        this.nzDisabled = disabled;
        this.cdr.markForCheck();
    }
    // ------------------------------------------------------------------------
    // | Internal methods
    // ------------------------------------------------------------------------
    // Reload locale from i18n with side effects
    setLocale() {
        this.nzLocale = this.i18n.getLocaleData('DatePicker', {});
        this.setDefaultPlaceHolder();
        this.cdr.markForCheck();
    }
    setDefaultPlaceHolder() {
        if (!this.isCustomPlaceHolder && this.nzLocale) {
            this.nzPlaceHolder = this.isRange ? this.nzLocale.lang.rangePlaceholder : this.nzLocale.lang.placeholder;
        }
    }
    // Safe way of setting value with default
    setValue(value) {
        if (this.isRange) {
            this.nzValue = value ? value.map(val => new CandyDate(val)) : [];
        }
        else {
            this.nzValue = value ? new CandyDate(value) : null;
        }
    }
}
/** @nocollapse */ AbstractPickerComponent.ɵfac = function AbstractPickerComponent_Factory(t) { return new (t || AbstractPickerComponent)(i0.ɵɵdirectiveInject(i1.NzI18nService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.DateHelperService), i0.ɵɵdirectiveInject(i2.NzNoAnimationDirective)); };
/** @nocollapse */ AbstractPickerComponent.ɵdir = i0.ɵɵdefineDirective({ type: AbstractPickerComponent, viewQuery: function AbstractPickerComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(NzPickerComponent, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.picker = _t.first);
    } }, inputs: { nzAllowClear: "nzAllowClear", nzAutoFocus: "nzAutoFocus", nzDisabled: "nzDisabled", nzOpen: "nzOpen", nzClassName: "nzClassName", nzDisabledDate: "nzDisabledDate", nzLocale: "nzLocale", nzPlaceHolder: "nzPlaceHolder", nzPopupStyle: "nzPopupStyle", nzDropdownClassName: "nzDropdownClassName", nzSize: "nzSize", nzStyle: "nzStyle", nzFormat: "nzFormat", nzValue: "nzValue" }, outputs: { nzOnOpenChange: "nzOnOpenChange" }, features: [i0.ɵɵNgOnChangesFeature()] });
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], AbstractPickerComponent.prototype, "nzAllowClear", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], AbstractPickerComponent.prototype, "nzAutoFocus", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], AbstractPickerComponent.prototype, "nzDisabled", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], AbstractPickerComponent.prototype, "nzOpen", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXIvIiwic291cmNlcyI6WyJhYnN0cmFjdC1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQXFCLFlBQVksRUFBRSxLQUFLLEVBQWdDLE1BQU0sRUFBaUIsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZJLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUEwQixNQUFNLG9CQUFvQixDQUFDO0FBR3JGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBR3ZELE1BQU0saUJBQWlCLEdBQUcsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQyxtTEFBbUw7QUFFdk87O0dBRUc7QUFDSCxNQUFNLE9BQWdCLHVCQUF1QjtJQWtDM0MsWUFDWSxJQUFtQixFQUNuQixHQUFzQixFQUN0QixVQUE2QixFQUNoQyxXQUFvQztRQUhqQyxTQUFJLEdBQUosSUFBSSxDQUFlO1FBQ25CLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBQ2hDLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQXJDN0MsaUJBQWlCO1FBQ1EsaUJBQVksR0FBWSxJQUFJLENBQUM7UUFDN0IsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFDN0IsZUFBVSxHQUFZLEtBQUssQ0FBQztRQU01QyxpQkFBWSxHQUFXLGlCQUFpQixDQUFDO1FBTy9CLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUloRSxZQUFPLEdBQVksS0FBSyxDQUFDLENBQUMsOENBQThDO1FBVTlELGVBQVUsR0FBa0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUMxQyx3QkFBbUIsR0FBWSxLQUFLLENBQUM7UUE0RS9DLDJFQUEyRTtRQUMzRSxzQ0FBc0M7UUFDdEMsMkVBQTJFO1FBRTNFLCtFQUErRTtRQUMvRSxlQUFVLEdBQXlDLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hFLGdCQUFXLEdBQWUsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7SUEzRXBDLENBQUM7SUFoQkosSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDO0lBQ3hDLENBQUMsQ0FBQyxtRkFBbUY7SUFFckYsU0FBUztRQUNQLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDMUMsQ0FBQztJQVlELFFBQVE7UUFDTiwyRUFBMkU7UUFDM0UsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7U0FDM0Y7UUFFRCxnQkFBZ0I7UUFDaEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsWUFBWSxFQUFFO1lBQ3hCLHNDQUFzQztZQUN0QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxpQ0FBTSxJQUFJLENBQUMsWUFBWSxHQUFLLGlCQUFpQixFQUFHLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQztTQUM1RztRQUVELHVGQUF1RjtRQUN2RixJQUFJLE9BQU8sQ0FBQyxhQUFhLElBQUksT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXLElBQUksT0FBTyxJQUFJLENBQUMsYUFBYSxLQUFLLFdBQVcsRUFBRTtZQUMzRyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO1NBQ2pDO1FBRUQsSUFBSSxPQUFPLENBQUMsUUFBUSxFQUFFO1lBQ3BCLDRDQUE0QztZQUM1QyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztTQUM5QjtJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsYUFBYSxDQUFDLEtBQXNCO1FBQ2xDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBc0IsQ0FBQztZQUM3QyxJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2FBQ25FO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDckI7U0FDRjthQUFNO1lBQ0wsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNoQixJQUFJLENBQUMsVUFBVSxDQUFFLElBQUksQ0FBQyxPQUFxQixDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ3pEO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdkI7U0FDRjtRQUNELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsWUFBWSxDQUFDLElBQWE7UUFDeEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQVVELFVBQVUsQ0FBQyxLQUFxQjtRQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELGtDQUFrQztJQUNsQyxnQkFBZ0IsQ0FBQyxFQUFPO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxrQ0FBa0M7SUFDbEMsaUJBQWlCLENBQUMsRUFBTztRQUN2QixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsUUFBaUI7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7UUFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsMkVBQTJFO0lBQzNFLHFCQUFxQjtJQUNyQiwyRUFBMkU7SUFFM0UsNENBQTRDO0lBQ3BDLFNBQVM7UUFDZixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFTyxxQkFBcUI7UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQzlDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUMxRztJQUNILENBQUM7SUFFRCx5Q0FBeUM7SUFDakMsUUFBUSxDQUFDLEtBQXFCO1FBQ3BDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUUsS0FBZ0IsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7U0FDOUU7YUFBTTtZQUNMLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxLQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1NBQzVEO0lBQ0gsQ0FBQzs7OEZBaEttQix1QkFBdUI7NERBQXZCLHVCQUF1Qjs2QkFtQmhDLGlCQUFpQjs7Ozs7QUFqQkg7SUFBZixZQUFZLEVBQUU7OzZEQUE4QjtBQUM3QjtJQUFmLFlBQVksRUFBRTs7NERBQThCO0FBQzdCO0lBQWYsWUFBWSxFQUFFOzsyREFBNkI7QUFDNUI7SUFBZixZQUFZLEVBQUU7O3VEQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcywgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IENhbmR5RGF0ZSwgSW5wdXRCb29sZWFuLCBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgRGF0ZUhlbHBlclNlcnZpY2UsIE56RGF0ZVBpY2tlckkxOG5JbnRlcmZhY2UsIE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5cclxuaW1wb3J0IHsgTnpQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL3BpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21wYXRpYmxlRGF0ZSwgQ29tcGF0aWJsZVZhbHVlIH0gZnJvbSAnLi9zdGFuZGFyZC10eXBlcyc7XHJcblxyXG5jb25zdCBQT1BVUF9TVFlMRV9QQVRDSCA9IHsgcG9zaXRpb246ICdyZWxhdGl2ZScgfTsgLy8gQWltIHRvIG92ZXJyaWRlIGFudGQncyBzdHlsZSB0byBzdXBwb3J0IG92ZXJsYXkncyBwb3NpdGlvbiBzdHJhdGVneSAocG9zaXRpb246YWJzb2x1dGUgd2lsbCBjYXVzZSBpdCBub3Qgd29ya2luZyBiZWFjdXNlIHRoZSBvdmVybGF5IGNhbid0IGdldCB0aGUgaGVpZ2h0L3dpZHRoIG9mIGl0J3MgY29udGVudClcclxuXHJcbi8qKlxyXG4gKiBUaGUgYmFzZSBwaWNrZXIgZm9yIGFsbCBjb21tb24gQVBJc1xyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0UGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG4gIC8vIC0tLSBDb21tb24gQVBJXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QWxsb3dDbGVhcjogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QXV0b0ZvY3VzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpPcGVuOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIG56Q2xhc3NOYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpEaXNhYmxlZERhdGU6IChkOiBEYXRlKSA9PiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIG56TG9jYWxlOiBOekRhdGVQaWNrZXJJMThuSW50ZXJmYWNlO1xyXG4gIEBJbnB1dCgpIG56UGxhY2VIb2xkZXI6IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gIEBJbnB1dCgpIG56UG9wdXBTdHlsZTogb2JqZWN0ID0gUE9QVVBfU1RZTEVfUEFUQ0g7XHJcbiAgQElucHV0KCkgbnpEcm9wZG93bkNsYXNzTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56U2l6ZTogJ2xhcmdlJyB8ICdzbWFsbCc7XHJcbiAgQElucHV0KCkgbnpTdHlsZTogb2JqZWN0O1xyXG4gIEBJbnB1dCgpIG56Rm9ybWF0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpWYWx1ZTogQ29tcGF0aWJsZVZhbHVlIHwgbnVsbDtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25PcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBAVmlld0NoaWxkKE56UGlja2VyQ29tcG9uZW50LCB7IHN0YXRpYzogdHJ1ZSB9KSBwcm90ZWN0ZWQgcGlja2VyOiBOelBpY2tlckNvbXBvbmVudDtcclxuXHJcbiAgaXNSYW5nZTogYm9vbGVhbiA9IGZhbHNlOyAvLyBJbmRpY2F0ZSB3aGV0aGVyIHRoZSB2YWx1ZSBpcyBhIHJhbmdlIHZhbHVlXHJcblxyXG4gIGdldCByZWFsT3BlblN0YXRlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMucGlja2VyLmFuaW1hdGlvbk9wZW5TdGF0ZTtcclxuICB9IC8vIFVzZSBwaWNrZXIncyByZWFsIG9wZW4gc3RhdGUgdG8gbGV0IHJlLXJlbmRlciB0aGUgcGlja2VyJ3MgY29udGVudCB3aGVuIHNob3duIHVwXHJcblxyXG4gIGluaXRWYWx1ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMubnpWYWx1ZSA9IHRoaXMuaXNSYW5nZSA/IFtdIDogbnVsbDtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBkZXN0cm95ZWQkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcclxuICBwcm90ZWN0ZWQgaXNDdXN0b21QbGFjZUhvbGRlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByb3RlY3RlZCBpMThuOiBOekkxOG5TZXJ2aWNlLFxyXG4gICAgcHJvdGVjdGVkIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcm90ZWN0ZWQgZGF0ZUhlbHBlcjogRGF0ZUhlbHBlclNlcnZpY2UsXHJcbiAgICBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIFN1YnNjcmliZSB0aGUgZXZlcnkgbG9jYWxlIGNoYW5nZSBpZiB0aGUgbnpMb2NhbGUgaXMgbm90IGhhbmRsZWQgYnkgdXNlclxyXG4gICAgaWYgKCF0aGlzLm56TG9jYWxlKSB7XHJcbiAgICAgIHRoaXMuaTE4bi5sb2NhbGVDaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2V0TG9jYWxlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERlZmF1bHQgdmFsdWVcclxuICAgIHRoaXMuaW5pdFZhbHVlKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5uelBvcHVwU3R5bGUpIHtcclxuICAgICAgLy8gQWx3YXlzIGFzc2lnbiB0aGUgcG9wdXAgc3R5bGUgcGF0Y2hcclxuICAgICAgdGhpcy5uelBvcHVwU3R5bGUgPSB0aGlzLm56UG9wdXBTdHlsZSA/IHsgLi4udGhpcy5uelBvcHVwU3R5bGUsIC4uLlBPUFVQX1NUWUxFX1BBVENIIH0gOiBQT1BVUF9TVFlMRV9QQVRDSDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNYXJrIGFzIGN1c3RvbWl6ZWQgcGxhY2Vob2xkZXIgYnkgdXNlciBvbmNlIG56UGxhY2VIb2xkZXIgYXNzaWduZWQgYXQgdGhlIGZpcnN0IHRpbWVcclxuICAgIGlmIChjaGFuZ2VzLm56UGxhY2VIb2xkZXIgJiYgY2hhbmdlcy5uelBsYWNlSG9sZGVyLmZpcnN0Q2hhbmdlICYmIHR5cGVvZiB0aGlzLm56UGxhY2VIb2xkZXIgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHRoaXMuaXNDdXN0b21QbGFjZUhvbGRlciA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZXMubnpMb2NhbGUpIHtcclxuICAgICAgLy8gVGhlIG56TG9jYWxlIGlzIGN1cnJlbnRseSBoYW5kbGVkIGJ5IHVzZXJcclxuICAgICAgdGhpcy5zZXREZWZhdWx0UGxhY2VIb2xkZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95ZWQkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveWVkJC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2VPdmVybGF5KCk6IHZvaWQge1xyXG4gICAgdGhpcy5waWNrZXIuaGlkZU92ZXJsYXkoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbW1vbiBoYW5kbGUgZm9yIHZhbHVlIGNoYW5nZXNcclxuICAgKiBAcGFyYW0gdmFsdWUgY2hhbmdlZCB2YWx1ZVxyXG4gICAqL1xyXG4gIG9uVmFsdWVDaGFuZ2UodmFsdWU6IENvbXBhdGlibGVWYWx1ZSk6IHZvaWQge1xyXG4gICAgdGhpcy5uelZhbHVlID0gdmFsdWU7XHJcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgIGNvbnN0IHZBc1JhbmdlID0gdGhpcy5uelZhbHVlIGFzIENhbmR5RGF0ZVtdO1xyXG4gICAgICBpZiAodkFzUmFuZ2UubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZUZuKFt2QXNSYW5nZVswXS5uYXRpdmVEYXRlLCB2QXNSYW5nZVsxXS5uYXRpdmVEYXRlXSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZUZuKFtdKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMubnpWYWx1ZSkge1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2VGbigodGhpcy5uelZhbHVlIGFzIENhbmR5RGF0ZSkubmF0aXZlRGF0ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZUZuKG51bGwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLm9uVG91Y2hlZEZuKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUcmlnZ2VyZWQgd2hlbiBvdmVybGF5T3BlbiBjaGFuZ2VzIChkaWZmZXJlbnQgd2l0aCByZWFsT3BlblN0YXRlKVxyXG4gICAqIEBwYXJhbSBvcGVuIFRoZSBvdmVybGF5T3BlbiBpbiBwaWNrZXIgY29tcG9uZW50XHJcbiAgICovXHJcbiAgb25PcGVuQ2hhbmdlKG9wZW46IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMubnpPbk9wZW5DaGFuZ2UuZW1pdChvcGVuKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIC8vIHwgQ29udHJvbCB2YWx1ZSBhY2Nlc3NvciBpbXBsZW1lbnRzXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gIC8vIE5PVEU6IG9uQ2hhbmdlRm4vb25Ub3VjaGVkRm4gd2lsbCBub3QgYmUgYXNzaWduZWQgaWYgdXNlciBub3QgdXNlIGFzIG5nTW9kZWxcclxuICBvbkNoYW5nZUZuOiAodmFsOiBDb21wYXRpYmxlRGF0ZSB8IG51bGwpID0+IHZvaWQgPSAoKSA9PiB2b2lkIDA7XHJcbiAgb25Ub3VjaGVkRm46ICgpID0+IHZvaWQgPSAoKSA9PiB2b2lkIDA7XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IENvbXBhdGlibGVEYXRlKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZUZuID0gZm47XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWRGbiA9IGZuO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5uekRpc2FibGVkID0gZGlzYWJsZWQ7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIC8vIHwgSW50ZXJuYWwgbWV0aG9kc1xyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAvLyBSZWxvYWQgbG9jYWxlIGZyb20gaTE4biB3aXRoIHNpZGUgZWZmZWN0c1xyXG4gIHByaXZhdGUgc2V0TG9jYWxlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5uekxvY2FsZSA9IHRoaXMuaTE4bi5nZXRMb2NhbGVEYXRhKCdEYXRlUGlja2VyJywge30pO1xyXG4gICAgdGhpcy5zZXREZWZhdWx0UGxhY2VIb2xkZXIoKTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXREZWZhdWx0UGxhY2VIb2xkZXIoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuaXNDdXN0b21QbGFjZUhvbGRlciAmJiB0aGlzLm56TG9jYWxlKSB7XHJcbiAgICAgIHRoaXMubnpQbGFjZUhvbGRlciA9IHRoaXMuaXNSYW5nZSA/IHRoaXMubnpMb2NhbGUubGFuZy5yYW5nZVBsYWNlaG9sZGVyIDogdGhpcy5uekxvY2FsZS5sYW5nLnBsYWNlaG9sZGVyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gU2FmZSB3YXkgb2Ygc2V0dGluZyB2YWx1ZSB3aXRoIGRlZmF1bHRcclxuICBwcml2YXRlIHNldFZhbHVlKHZhbHVlOiBDb21wYXRpYmxlRGF0ZSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xyXG4gICAgICB0aGlzLm56VmFsdWUgPSB2YWx1ZSA/ICh2YWx1ZSBhcyBEYXRlW10pLm1hcCh2YWwgPT4gbmV3IENhbmR5RGF0ZSh2YWwpKSA6IFtdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5uelZhbHVlID0gdmFsdWUgPyBuZXcgQ2FuZHlEYXRlKHZhbHVlIGFzIERhdGUpIDogbnVsbDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19