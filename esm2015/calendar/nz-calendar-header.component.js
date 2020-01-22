/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { CandyDate } from 'ng-zorro-antd/core';
import { DateHelperService, NzI18nService as I18n } from 'ng-zorro-antd/i18n';
export class NzCalendarHeaderComponent {
    /**
     * @param {?} i18n
     * @param {?} dateHelper
     */
    constructor(i18n, dateHelper) {
        this.i18n = i18n;
        this.dateHelper = dateHelper;
        this.mode = 'month';
        this.fullscreen = true;
        this.modeChange = new EventEmitter();
        this.activeDate = new CandyDate();
        this.yearChange = new EventEmitter();
        this.monthChange = new EventEmitter();
        // @Output() readonly valueChange: EventEmitter<CandyDate> = new EventEmitter();
        this.yearOffset = 10;
        this.yearTotal = 20;
    }
    /**
     * @return {?}
     */
    get activeYear() {
        return this.activeDate.getYear();
    }
    /**
     * @return {?}
     */
    get activeMonth() {
        return this.activeDate.getMonth();
    }
    /**
     * @return {?}
     */
    get size() {
        return this.fullscreen ? 'default' : 'small';
    }
    /**
     * @return {?}
     */
    get yearTypeText() {
        return this.i18n.getLocale().Calendar.year;
    }
    /**
     * @return {?}
     */
    get monthTypeText() {
        return this.i18n.getLocale().Calendar.month;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setUpYears();
        this.setUpMonths();
    }
    /**
     * @param {?} year
     * @return {?}
     */
    updateYear(year) {
        this.yearChange.emit(year);
        this.setUpYears(year);
    }
    /**
     * @private
     * @param {?=} year
     * @return {?}
     */
    setUpYears(year) {
        /** @type {?} */
        const start = (year || this.activeYear) - this.yearOffset;
        /** @type {?} */
        const end = start + this.yearTotal;
        this.years = [];
        for (let i = start; i < end; i++) {
            this.years.push({ label: `${i}`, value: i });
        }
    }
    /**
     * @private
     * @return {?}
     */
    setUpMonths() {
        this.months = [];
        for (let i = 0; i < 12; i++) {
            /** @type {?} */
            const dateInMonth = this.activeDate.setMonth(i);
            /** @type {?} */
            const monthText = this.dateHelper.format(dateInMonth.nativeDate, 'MMM');
            this.months.push({ label: monthText, value: i });
        }
    }
}
NzCalendarHeaderComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'nz-calendar-header',
                exportAs: 'nzCalendarHeader',
                template: "<nz-select class=\"ant-fullcalendar-year-select\" [nzSize]=\"size\" [nzDropdownMatchSelectWidth]=\"false\"\r\n           [ngModel]=\"activeYear\" (ngModelChange)=\"updateYear($event)\"> \r\n  <nz-option *ngFor=\"let year of years\" [nzLabel]=\"year.label\" [nzValue]=\"year.value\"></nz-option>\r\n</nz-select>\r\n\r\n<nz-select *ngIf=\"mode === 'month'\" class=\"ant-fullcalendar-month-select\" [nzSize]=\"size\" [nzDropdownMatchSelectWidth]=\"false\"\r\n           [ngModel]=\"activeMonth\" (ngModelChange)=\"monthChange.emit($event)\">\r\n  <nz-option *ngFor=\"let month of months\" [nzLabel]=\"month.label\" [nzValue]=\"month.value\"></nz-option>\r\n</nz-select>\r\n\r\n<nz-radio-group [(ngModel)]=\"mode\" (ngModelChange)=\"modeChange.emit($event)\" [nzSize]=\"size\">\r\n  <label nz-radio-button nzValue=\"month\">{{ monthTypeText }}</label>\r\n  <label nz-radio-button nzValue=\"year\">{{ yearTypeText }}</label>\r\n</nz-radio-group>\r\n",
                host: {
                    '[style.display]': `'block'`,
                    '[class.ant-fullcalendar-header]': `true`
                }
            }] }
];
/** @nocollapse */
NzCalendarHeaderComponent.ctorParameters = () => [
    { type: I18n },
    { type: DateHelperService }
];
NzCalendarHeaderComponent.propDecorators = {
    mode: [{ type: Input }],
    fullscreen: [{ type: Input }],
    modeChange: [{ type: Output }],
    activeDate: [{ type: Input }],
    yearChange: [{ type: Output }],
    monthChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.mode;
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.fullscreen;
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.modeChange;
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.activeDate;
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.yearChange;
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.monthChange;
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.yearOffset;
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.yearTotal;
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.years;
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.months;
    /**
     * @type {?}
     * @private
     */
    NzCalendarHeaderComponent.prototype.i18n;
    /**
     * @type {?}
     * @private
     */
    NzCalendarHeaderComponent.prototype.dateHelper;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FsZW5kYXItaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY2FsZW5kYXIvIiwic291cmNlcyI6WyJuei1jYWxlbmRhci1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsYUFBYSxJQUFJLElBQUksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBYTlFLE1BQU0sT0FBTyx5QkFBeUI7Ozs7O0lBcUNwQyxZQUFvQixJQUFVLEVBQVUsVUFBNkI7UUFBakQsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBcEM1RCxTQUFJLEdBQXFCLE9BQU8sQ0FBQztRQUNqQyxlQUFVLEdBQVksSUFBSSxDQUFDO1FBRWpCLGVBQVUsR0FBbUMsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUxRSxlQUFVLEdBQWMsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUU5QixlQUFVLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdEQsZ0JBQVcsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7UUFHMUUsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixjQUFTLEdBQVcsRUFBRSxDQUFDO0lBd0JpRCxDQUFDOzs7O0lBcEJ6RSxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7OztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQyxDQUFDOzs7O0lBRUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztJQUMvQyxDQUFDOzs7O0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDN0MsQ0FBQzs7OztJQUVELElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO0lBQzlDLENBQUM7Ozs7SUFJRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxJQUFZO1FBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7Ozs7O0lBRU8sVUFBVSxDQUFDLElBQWE7O2NBQ3hCLEtBQUssR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVU7O2NBQ25ELEdBQUcsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVM7UUFFbEMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsS0FBSyxJQUFJLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzlDO0lBQ0gsQ0FBQzs7Ozs7SUFFTyxXQUFXO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBRWpCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O2tCQUNyQixXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDOztrQkFDekMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDO1lBQ3ZFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNsRDtJQUNILENBQUM7OztZQTlFRixTQUFTLFNBQUM7Z0JBQ1QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixRQUFRLEVBQUUsa0JBQWtCO2dCQUM1Qiw0N0JBQWtEO2dCQUNsRCxJQUFJLEVBQUU7b0JBQ0osaUJBQWlCLEVBQUUsU0FBUztvQkFDNUIsaUNBQWlDLEVBQUUsTUFBTTtpQkFDMUM7YUFDRjs7OztZQVo0QyxJQUFJO1lBQXhDLGlCQUFpQjs7O21CQWN2QixLQUFLO3lCQUNMLEtBQUs7eUJBRUwsTUFBTTt5QkFFTixLQUFLO3lCQUVMLE1BQU07MEJBQ04sTUFBTTs7OztJQVJQLHlDQUEwQzs7SUFDMUMsK0NBQW9DOztJQUVwQywrQ0FBbUY7O0lBRW5GLCtDQUFpRDs7SUFFakQsK0NBQXlFOztJQUN6RSxnREFBMEU7O0lBRzFFLCtDQUF3Qjs7SUFDeEIsOENBQXVCOztJQUN2QiwwQ0FBK0M7O0lBQy9DLDJDQUFnRDs7Ozs7SUFzQnBDLHlDQUFrQjs7Ozs7SUFBRSwrQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENhbmR5RGF0ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IERhdGVIZWxwZXJTZXJ2aWNlLCBOekkxOG5TZXJ2aWNlIGFzIEkxOG4gfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBzZWxlY3RvcjogJ256LWNhbGVuZGFyLWhlYWRlcicsXHJcbiAgZXhwb3J0QXM6ICduekNhbGVuZGFySGVhZGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotY2FsZW5kYXItaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBob3N0OiB7XHJcbiAgICAnW3N0eWxlLmRpc3BsYXldJzogYCdibG9jaydgLFxyXG4gICAgJ1tjbGFzcy5hbnQtZnVsbGNhbGVuZGFyLWhlYWRlcl0nOiBgdHJ1ZWBcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekNhbGVuZGFySGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBtb2RlOiAnbW9udGgnIHwgJ3llYXInID0gJ21vbnRoJztcclxuICBASW5wdXQoKSBmdWxsc2NyZWVuOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG1vZGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjwnbW9udGgnIHwgJ3llYXInPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQElucHV0KCkgYWN0aXZlRGF0ZTogQ2FuZHlEYXRlID0gbmV3IENhbmR5RGF0ZSgpO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgeWVhckNoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG1vbnRoQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAvLyBAT3V0cHV0KCkgcmVhZG9ubHkgdmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICB5ZWFyT2Zmc2V0OiBudW1iZXIgPSAxMDtcclxuICB5ZWFyVG90YWw6IG51bWJlciA9IDIwO1xyXG4gIHllYXJzOiBBcnJheTx7IGxhYmVsOiBzdHJpbmc7IHZhbHVlOiBudW1iZXIgfT47XHJcbiAgbW9udGhzOiBBcnJheTx7IGxhYmVsOiBzdHJpbmc7IHZhbHVlOiBudW1iZXIgfT47XHJcblxyXG4gIGdldCBhY3RpdmVZZWFyKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVEYXRlLmdldFllYXIoKTtcclxuICB9XHJcblxyXG4gIGdldCBhY3RpdmVNb250aCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlRGF0ZS5nZXRNb250aCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNpemUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmZ1bGxzY3JlZW4gPyAnZGVmYXVsdCcgOiAnc21hbGwnO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHllYXJUeXBlVGV4dCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuaTE4bi5nZXRMb2NhbGUoKS5DYWxlbmRhci55ZWFyO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG1vbnRoVHlwZVRleHQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmkxOG4uZ2V0TG9jYWxlKCkuQ2FsZW5kYXIubW9udGg7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGkxOG46IEkxOG4sIHByaXZhdGUgZGF0ZUhlbHBlcjogRGF0ZUhlbHBlclNlcnZpY2UpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRVcFllYXJzKCk7XHJcbiAgICB0aGlzLnNldFVwTW9udGhzKCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVZZWFyKHllYXI6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy55ZWFyQ2hhbmdlLmVtaXQoeWVhcik7XHJcbiAgICB0aGlzLnNldFVwWWVhcnMoeWVhcik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFVwWWVhcnMoeWVhcj86IG51bWJlcik6IHZvaWQge1xyXG4gICAgY29uc3Qgc3RhcnQgPSAoeWVhciB8fCB0aGlzLmFjdGl2ZVllYXIpIC0gdGhpcy55ZWFyT2Zmc2V0O1xyXG4gICAgY29uc3QgZW5kID0gc3RhcnQgKyB0aGlzLnllYXJUb3RhbDtcclxuXHJcbiAgICB0aGlzLnllYXJzID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xyXG4gICAgICB0aGlzLnllYXJzLnB1c2goeyBsYWJlbDogYCR7aX1gLCB2YWx1ZTogaSB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0VXBNb250aHMoKTogdm9pZCB7XHJcbiAgICB0aGlzLm1vbnRocyA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTI7IGkrKykge1xyXG4gICAgICBjb25zdCBkYXRlSW5Nb250aCA9IHRoaXMuYWN0aXZlRGF0ZS5zZXRNb250aChpKTtcclxuICAgICAgY29uc3QgbW9udGhUZXh0ID0gdGhpcy5kYXRlSGVscGVyLmZvcm1hdChkYXRlSW5Nb250aC5uYXRpdmVEYXRlLCAnTU1NJyk7XHJcbiAgICAgIHRoaXMubW9udGhzLnB1c2goeyBsYWJlbDogbW9udGhUZXh0LCB2YWx1ZTogaSB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19