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
var NzCalendarHeaderComponent = /** @class */ (function () {
    function NzCalendarHeaderComponent(i18n, dateHelper) {
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
    Object.defineProperty(NzCalendarHeaderComponent.prototype, "activeYear", {
        get: /**
         * @return {?}
         */
        function () {
            return this.activeDate.getYear();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarHeaderComponent.prototype, "activeMonth", {
        get: /**
         * @return {?}
         */
        function () {
            return this.activeDate.getMonth();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarHeaderComponent.prototype, "size", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fullscreen ? 'default' : 'small';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarHeaderComponent.prototype, "yearTypeText", {
        get: /**
         * @return {?}
         */
        function () {
            return this.i18n.getLocale().Calendar.year;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarHeaderComponent.prototype, "monthTypeText", {
        get: /**
         * @return {?}
         */
        function () {
            return this.i18n.getLocale().Calendar.month;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzCalendarHeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setUpYears();
        this.setUpMonths();
    };
    /**
     * @param {?} year
     * @return {?}
     */
    NzCalendarHeaderComponent.prototype.updateYear = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        this.yearChange.emit(year);
        this.setUpYears(year);
    };
    /**
     * @private
     * @param {?=} year
     * @return {?}
     */
    NzCalendarHeaderComponent.prototype.setUpYears = /**
     * @private
     * @param {?=} year
     * @return {?}
     */
    function (year) {
        /** @type {?} */
        var start = (year || this.activeYear) - this.yearOffset;
        /** @type {?} */
        var end = start + this.yearTotal;
        this.years = [];
        for (var i = start; i < end; i++) {
            this.years.push({ label: "" + i, value: i });
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzCalendarHeaderComponent.prototype.setUpMonths = /**
     * @private
     * @return {?}
     */
    function () {
        this.months = [];
        for (var i = 0; i < 12; i++) {
            /** @type {?} */
            var dateInMonth = this.activeDate.setMonth(i);
            /** @type {?} */
            var monthText = this.dateHelper.format(dateInMonth.nativeDate, 'MMM');
            this.months.push({ label: monthText, value: i });
        }
    };
    NzCalendarHeaderComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'nz-calendar-header',
                    exportAs: 'nzCalendarHeader',
                    template: "<nz-select class=\"ant-fullcalendar-year-select\" [nzSize]=\"size\" [nzDropdownMatchSelectWidth]=\"false\"\r\n           [ngModel]=\"activeYear\" (ngModelChange)=\"updateYear($event)\"> \r\n  <nz-option *ngFor=\"let year of years\" [nzLabel]=\"year.label\" [nzValue]=\"year.value\"></nz-option>\r\n</nz-select>\r\n\r\n<nz-select *ngIf=\"mode === 'month'\" class=\"ant-fullcalendar-month-select\" [nzSize]=\"size\" [nzDropdownMatchSelectWidth]=\"false\"\r\n           [ngModel]=\"activeMonth\" (ngModelChange)=\"monthChange.emit($event)\">\r\n  <nz-option *ngFor=\"let month of months\" [nzLabel]=\"month.label\" [nzValue]=\"month.value\"></nz-option>\r\n</nz-select>\r\n\r\n<nz-radio-group [(ngModel)]=\"mode\" (ngModelChange)=\"modeChange.emit($event)\" [nzSize]=\"size\">\r\n  <label nz-radio-button nzValue=\"month\">{{ monthTypeText }}</label>\r\n  <label nz-radio-button nzValue=\"year\">{{ yearTypeText }}</label>\r\n</nz-radio-group>\r\n",
                    host: {
                        '[style.display]': "'block'",
                        '[class.ant-fullcalendar-header]': "true"
                    }
                }] }
    ];
    /** @nocollapse */
    NzCalendarHeaderComponent.ctorParameters = function () { return [
        { type: I18n },
        { type: DateHelperService }
    ]; };
    NzCalendarHeaderComponent.propDecorators = {
        mode: [{ type: Input }],
        fullscreen: [{ type: Input }],
        modeChange: [{ type: Output }],
        activeDate: [{ type: Input }],
        yearChange: [{ type: Output }],
        monthChange: [{ type: Output }]
    };
    return NzCalendarHeaderComponent;
}());
export { NzCalendarHeaderComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FsZW5kYXItaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY2FsZW5kYXIvIiwic291cmNlcyI6WyJuei1jYWxlbmRhci1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsYUFBYSxJQUFJLElBQUksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTlFO0lBZ0RFLG1DQUFvQixJQUFVLEVBQVUsVUFBNkI7UUFBakQsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBcEM1RCxTQUFJLEdBQXFCLE9BQU8sQ0FBQztRQUNqQyxlQUFVLEdBQVksSUFBSSxDQUFDO1FBRWpCLGVBQVUsR0FBbUMsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUxRSxlQUFVLEdBQWMsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUU5QixlQUFVLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdEQsZ0JBQVcsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7UUFHMUUsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixjQUFTLEdBQVcsRUFBRSxDQUFDO0lBd0JpRCxDQUFDO0lBcEJ6RSxzQkFBSSxpREFBVTs7OztRQUFkO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ25DLENBQUM7OztPQUFBO0lBRUQsc0JBQUksa0RBQVc7Ozs7UUFBZjtZQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNw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dkIsMENBQStDOztJQUMvQywyQ0FBZ0Q7Ozs7O0lBc0JwQyx5Q0FBa0I7Ozs7O0lBQUUsK0NBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDYW5keURhdGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRlSGVscGVyU2VydmljZSwgTnpJMThuU2VydmljZSBhcyBJMThuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgc2VsZWN0b3I6ICduei1jYWxlbmRhci1oZWFkZXInLFxyXG4gIGV4cG9ydEFzOiAnbnpDYWxlbmRhckhlYWRlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LWNhbGVuZGFyLWhlYWRlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tzdHlsZS5kaXNwbGF5XSc6IGAnYmxvY2snYCxcclxuICAgICdbY2xhc3MuYW50LWZ1bGxjYWxlbmRhci1oZWFkZXJdJzogYHRydWVgXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpDYWxlbmRhckhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgbW9kZTogJ21vbnRoJyB8ICd5ZWFyJyA9ICdtb250aCc7XHJcbiAgQElucHV0KCkgZnVsbHNjcmVlbjogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBtb2RlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8J21vbnRoJyB8ICd5ZWFyJz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBJbnB1dCgpIGFjdGl2ZURhdGU6IENhbmR5RGF0ZSA9IG5ldyBDYW5keURhdGUoKTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHllYXJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBtb250aENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgLy8gQE91dHB1dCgpIHJlYWRvbmx5IHZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgeWVhck9mZnNldDogbnVtYmVyID0gMTA7XHJcbiAgeWVhclRvdGFsOiBudW1iZXIgPSAyMDtcclxuICB5ZWFyczogQXJyYXk8eyBsYWJlbDogc3RyaW5nOyB2YWx1ZTogbnVtYmVyIH0+O1xyXG4gIG1vbnRoczogQXJyYXk8eyBsYWJlbDogc3RyaW5nOyB2YWx1ZTogbnVtYmVyIH0+O1xyXG5cclxuICBnZXQgYWN0aXZlWWVhcigpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlRGF0ZS5nZXRZZWFyKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgYWN0aXZlTW9udGgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmFjdGl2ZURhdGUuZ2V0TW9udGgoKTtcclxuICB9XHJcblxyXG4gIGdldCBzaXplKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5mdWxsc2NyZWVuID8gJ2RlZmF1bHQnIDogJ3NtYWxsJztcclxuICB9XHJcblxyXG4gIGdldCB5ZWFyVHlwZVRleHQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmkxOG4uZ2V0TG9jYWxlKCkuQ2FsZW5kYXIueWVhcjtcclxuICB9XHJcblxyXG4gIGdldCBtb250aFR5cGVUZXh0KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5pMThuLmdldExvY2FsZSgpLkNhbGVuZGFyLm1vbnRoO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpMThuOiBJMThuLCBwcml2YXRlIGRhdGVIZWxwZXI6IERhdGVIZWxwZXJTZXJ2aWNlKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0VXBZZWFycygpO1xyXG4gICAgdGhpcy5zZXRVcE1vbnRocygpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlWWVhcih5ZWFyOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMueWVhckNoYW5nZS5lbWl0KHllYXIpO1xyXG4gICAgdGhpcy5zZXRVcFllYXJzKHllYXIpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRVcFllYXJzKHllYXI/OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGNvbnN0IHN0YXJ0ID0gKHllYXIgfHwgdGhpcy5hY3RpdmVZZWFyKSAtIHRoaXMueWVhck9mZnNldDtcclxuICAgIGNvbnN0IGVuZCA9IHN0YXJ0ICsgdGhpcy55ZWFyVG90YWw7XHJcblxyXG4gICAgdGhpcy55ZWFycyA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcclxuICAgICAgdGhpcy55ZWFycy5wdXNoKHsgbGFiZWw6IGAke2l9YCwgdmFsdWU6IGkgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFVwTW9udGhzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5tb250aHMgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEyOyBpKyspIHtcclxuICAgICAgY29uc3QgZGF0ZUluTW9udGggPSB0aGlzLmFjdGl2ZURhdGUuc2V0TW9udGgoaSk7XHJcbiAgICAgIGNvbnN0IG1vbnRoVGV4dCA9IHRoaXMuZGF0ZUhlbHBlci5mb3JtYXQoZGF0ZUluTW9udGgubmF0aXZlRGF0ZSwgJ01NTScpO1xyXG4gICAgICB0aGlzLm1vbnRocy5wdXNoKHsgbGFiZWw6IG1vbnRoVGV4dCwgdmFsdWU6IGkgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==