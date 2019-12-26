/**
 * @fileoverview added by tsickle
 * Generated from: nz-year-picker.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Host, Input, Optional, Renderer2, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { DateHelperService, NzI18nService } from 'ng-zorro-antd/i18n';
import { HeaderPickerComponent } from './header-picker.component';
export class NzYearPickerComponent extends HeaderPickerComponent {
    /**
     * @param {?} i18n
     * @param {?} cdr
     * @param {?} dateHelper
     * @param {?} renderer
     * @param {?} elementRef
     * @param {?=} noAnimation
     */
    constructor(i18n, cdr, dateHelper, renderer, elementRef, noAnimation) {
        super(i18n, cdr, dateHelper, noAnimation);
        this.noAnimation = noAnimation;
        this.nzFormat = 'yyyy';
        this.endPanelMode = 'year';
        renderer.addClass(elementRef.nativeElement, 'ant-calendar-picker');
    }
}
NzYearPickerComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'nz-year-picker',
                exportAs: 'nzYearPicker',
                template: "<nz-picker\r\n  [isRange]=\"false\"\r\n  [value]=\"nzValue\"\r\n  (valueChange)=\"onValueChange($event)\"\r\n  [open]=\"nzOpen\"\r\n  [disabled]=\"nzDisabled\"\r\n  [format]=\"nzFormat\"\r\n  [allowClear]=\"nzAllowClear\"\r\n  [autoFocus]=\"nzAutoFocus\"\r\n  [className]=\"nzClassName\"\r\n  [placeholder]=\"nzPlaceHolder\"\r\n  [size]=\"nzSize\"\r\n  [style]=\"nzStyle\"\r\n  [noAnimation]=\"noAnimation?.nzNoAnimation\"\r\n  (openChange)=\"onOpenChange($event)\"\r\n>\r\n  <div *ngIf=\"realOpenState\">\r\n    <div class=\"ant-calendar-picker-container {{ nzDropdownClassName }} ant-calendar-picker-container-placement-bottomLeft\" [ngStyle]=\"nzPopupStyle\">\r\n      <div class=\"ant-calendar ant-calendar-month ant-calendar-month-calendar\" tabindex=\"0\">\r\n        <div class=\"ant-calendar-month-calendar-content\">\r\n          <div class=\"ant-calendar-month-header-wrap\">\r\n            <calendar-header\r\n              [disabledMonth]=\"nzDisabledDate\"\r\n              [disabledYear]=\"nzDisabledDate\"\r\n              [panelMode]=\"panelMode\"\r\n              (panelModeChange)=\"onPanelModeChange($event)\"\r\n              [value]=\"nzValue\"\r\n              (chooseYear)=\"onChooseValue('year', $event)\"\r\n              (chooseMonth)=\"onChooseValue('month', $event)\"\r\n              [locale]=\"nzLocale.lang\"\r\n              [enablePrev]=\"true\"\r\n              [enableNext]=\"true\"\r\n            ></calendar-header>\r\n          </div>\r\n          <calendar-footer *ngIf=\"extraFooter\" [extraFooter]=\"extraFooter\"></calendar-footer>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</nz-picker>",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        multi: true,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => NzYearPickerComponent))
                    }
                ]
            }] }
];
/** @nocollapse */
NzYearPickerComponent.ctorParameters = () => [
    { type: NzI18nService },
    { type: ChangeDetectorRef },
    { type: DateHelperService },
    { type: Renderer2 },
    { type: ElementRef },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
NzYearPickerComponent.propDecorators = {
    nzFormat: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NzYearPickerComponent.prototype.nzFormat;
    /** @type {?} */
    NzYearPickerComponent.prototype.endPanelMode;
    /** @type {?} */
    NzYearPickerComponent.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnoteWVhci1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9kYXRlLXBpY2tlci8iLCJzb3VyY2VzIjpbIm56LXllYXItcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsVUFBVSxFQUNWLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixJQUFJLEVBQ0osS0FBSyxFQUNMLFFBQVEsRUFDUixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzVELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV0RSxPQUFPLEVBQUUscUJBQXFCLEVBQXNCLE1BQU0sMkJBQTJCLENBQUM7QUFnQnRGLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxxQkFBcUI7Ozs7Ozs7OztJQUs5RCxZQUNFLElBQW1CLEVBQ25CLEdBQXNCLEVBQ3RCLFVBQTZCLEVBQzdCLFFBQW1CLEVBQ25CLFVBQXNCLEVBQ0ssV0FBb0M7UUFFL0QsS0FBSyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBRmYsZ0JBQVcsR0FBWCxXQUFXLENBQXlCO1FBVnhELGFBQVEsR0FBVyxNQUFNLENBQUM7UUFFbkMsaUJBQVksR0FBdUIsTUFBTSxDQUFDO1FBV3hDLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7OztZQTdCRixTQUFTLFNBQUM7Z0JBQ1QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUUsY0FBYztnQkFDeEIsNm5EQUE2QztnQkFDN0MsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLEtBQUssRUFBRSxJQUFJO3dCQUNYLFdBQVcsRUFBRSxVQUFVOzs7d0JBQUMsR0FBRyxFQUFFLENBQUMscUJBQXFCLEVBQUM7cUJBQ3JEO2lCQUNGO2FBQ0Y7Ozs7WUFqQjJCLGFBQWE7WUFadkMsaUJBQWlCO1lBWVYsaUJBQWlCO1lBTnhCLFNBQVM7WUFKVCxVQUFVO1lBU0gsc0JBQXNCLHVCQThCMUIsSUFBSSxZQUFJLFFBQVE7Ozt1QkFWbEIsS0FBSzs7OztJQUFOLHlDQUFtQzs7SUFFbkMsNkNBQTBDOztJQVF4Qyw0Q0FBK0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgZm9yd2FyZFJlZixcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBIb3N0LFxyXG4gIElucHV0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRlSGVscGVyU2VydmljZSwgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcblxyXG5pbXBvcnQgeyBIZWFkZXJQaWNrZXJDb21wb25lbnQsIFN1cHBvcnRIZWFkZXJQYW5lbCB9IGZyb20gJy4vaGVhZGVyLXBpY2tlci5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBzZWxlY3RvcjogJ256LXllYXItcGlja2VyJyxcclxuICBleHBvcnRBczogJ256WWVhclBpY2tlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2hlYWRlci1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE56WWVhclBpY2tlckNvbXBvbmVudClcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelllYXJQaWNrZXJDb21wb25lbnQgZXh0ZW5kcyBIZWFkZXJQaWNrZXJDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIG56Rm9ybWF0OiBzdHJpbmcgPSAneXl5eSc7XHJcblxyXG4gIGVuZFBhbmVsTW9kZTogU3VwcG9ydEhlYWRlclBhbmVsID0gJ3llYXInO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGkxOG46IE56STE4blNlcnZpY2UsXHJcbiAgICBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgZGF0ZUhlbHBlcjogRGF0ZUhlbHBlclNlcnZpY2UsXHJcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG4gICkge1xyXG4gICAgc3VwZXIoaTE4biwgY2RyLCBkYXRlSGVscGVyLCBub0FuaW1hdGlvbik7XHJcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtY2FsZW5kYXItcGlja2VyJyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==