/**
 * @fileoverview added by tsickle
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
import { forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, Input, QueryList, Renderer2, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { merge, Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import { isNotNil, InputBoolean } from 'ng-zorro-antd/core';
import { NzRadioComponent } from './nz-radio.component';
var NzRadioGroupComponent = /** @class */ (function () {
    function NzRadioGroupComponent(cdr, renderer, elementRef) {
        this.cdr = cdr;
        this.destroy$ = new Subject();
        this.onChange = (/**
         * @return {?}
         */
        function () { return null; });
        this.onTouched = (/**
         * @return {?}
         */
        function () { return null; });
        this.nzButtonStyle = 'outline';
        this.nzSize = 'default';
        this.nzGroupLabelledById = null;
        renderer.addClass(elementRef.nativeElement, 'ant-radio-group');
    }
    /**
     * @return {?}
     */
    NzRadioGroupComponent.prototype.updateChildrenStatus = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.radios) {
            Promise.resolve().then((/**
             * @return {?}
             */
            function () {
                _this.radios.forEach((/**
                 * @param {?} radio
                 * @return {?}
                 */
                function (radio) {
                    radio.checked = radio.nzValue === _this.value;
                    if (isNotNil(_this.nzDisabled)) {
                        radio.nzDisabled = _this.nzDisabled;
                    }
                    if (_this.nzName) {
                        radio.name = _this.nzName;
                    }
                    /*if (this.nzGroupLabelledById) {
                      radio.nzLabelledById = this.nzGroupLabelledById;
                    }*/
                    radio.markForCheck();
                }));
            }));
        }
    };
    /**
     * @return {?}
     */
    NzRadioGroupComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.radios.changes.pipe(startWith(null), takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.updateChildrenStatus();
            if (_this.selectSubscription) {
                _this.selectSubscription.unsubscribe();
            }
            _this.selectSubscription = merge.apply(void 0, tslib_1.__spread(_this.radios.map((/**
             * @param {?} radio
             * @return {?}
             */
            function (radio) { return radio.select$; })))).pipe(takeUntil(_this.destroy$))
                .subscribe((/**
             * @param {?} radio
             * @return {?}
             */
            function (radio) {
                if (_this.value !== radio.nzValue) {
                    _this.value = radio.nzValue;
                    _this.updateChildrenStatus();
                    _this.onChange(_this.value);
                }
            }));
            if (_this.touchedSubscription) {
                _this.touchedSubscription.unsubscribe();
            }
            _this.touchedSubscription = merge.apply(void 0, tslib_1.__spread(_this.radios.map((/**
             * @param {?} radio
             * @return {?}
             */
            function (radio) { return radio.touched$; })))).pipe(takeUntil(_this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            function () {
                Promise.resolve().then((/**
                 * @return {?}
                 */
                function () { return _this.onTouched(); }));
            }));
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzRadioGroupComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzDisabled || changes.nzName) {
            this.updateChildrenStatus();
        }
    };
    /**
     * @return {?}
     */
    NzRadioGroupComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /* tslint:disable-next-line:no-any */
    /* tslint:disable-next-line:no-any */
    /**
     * @param {?} value
     * @return {?}
     */
    NzRadioGroupComponent.prototype.writeValue = /* tslint:disable-next-line:no-any */
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
        this.updateChildrenStatus();
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzRadioGroupComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzRadioGroupComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NzRadioGroupComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.nzDisabled = isDisabled;
        this.cdr.markForCheck();
    };
    NzRadioGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-radio-group',
                    exportAs: 'nzRadioGroup',
                    preserveWhitespaces: false,
                    template: "<div role=\"radiogroup\" [attr.aria-labelledby]=\"nzGroupLabelledById\">\r\n    <ng-content></ng-content>\r\n</div>",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return NzRadioGroupComponent; })),
                            multi: true
                        }
                    ],
                    host: {
                        '[class.ant-radio-group-large]': "nzSize === 'large'",
                        '[class.ant-radio-group-small]': "nzSize === 'small'",
                        '[class.ant-radio-group-solid]': "nzButtonStyle === 'solid'"
                    }
                }] }
    ];
    /** @nocollapse */
    NzRadioGroupComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    NzRadioGroupComponent.propDecorators = {
        radios: [{ type: ContentChildren, args: [forwardRef((/**
                     * @return {?}
                     */
                    function () { return NzRadioComponent; })),
                    { descendants: true },] }],
        nzDisabled: [{ type: Input }],
        nzButtonStyle: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzName: [{ type: Input }],
        nzGroupLabelledById: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzRadioGroupComponent.prototype, "nzDisabled", void 0);
    return NzRadioGroupComponent;
}());
export { NzRadioGroupComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzRadioGroupComponent.prototype.value;
    /**
     * @type {?}
     * @private
     */
    NzRadioGroupComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzRadioGroupComponent.prototype.selectSubscription;
    /**
     * @type {?}
     * @private
     */
    NzRadioGroupComponent.prototype.touchedSubscription;
    /** @type {?} */
    NzRadioGroupComponent.prototype.onChange;
    /** @type {?} */
    NzRadioGroupComponent.prototype.onTouched;
    /** @type {?} */
    NzRadioGroupComponent.prototype.radios;
    /** @type {?} */
    NzRadioGroupComponent.prototype.nzDisabled;
    /** @type {?} */
    NzRadioGroupComponent.prototype.nzButtonStyle;
    /** @type {?} */
    NzRadioGroupComponent.prototype.nzSize;
    /** @type {?} */
    NzRadioGroupComponent.prototype.nzName;
    /** @type {?} */
    NzRadioGroupComponent.prototype.nzGroupLabelledById;
    /**
     * @type {?}
     * @private
     */
    NzRadioGroupComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmFkaW8tZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9yYWRpby8iLCJzb3VyY2VzIjpbIm56LXJhZGlvLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsVUFBVSxFQUVWLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsS0FBSyxFQUdMLFNBQVMsRUFDVCxTQUFTLEVBRVQsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBaUIsTUFBTSxvQkFBb0IsQ0FBQztBQUUzRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUl4RDtJQTJERSwrQkFBb0IsR0FBc0IsRUFBRSxRQUFtQixFQUFFLFVBQXNCO1FBQW5FLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBcENsQyxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUdqQyxhQUFROzs7UUFBd0IsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLEVBQUM7UUFDM0MsY0FBUzs7O1FBQWUsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLEVBQUM7UUFPMUIsa0JBQWEsR0FBdUIsU0FBUyxDQUFDO1FBQzlDLFdBQU0sR0FBa0IsU0FBUyxDQUFDO1FBRWxDLHdCQUFtQixHQUFrQixJQUFJLENBQUM7UUF1QmpELFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxpQkFB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QkFBb0I7d0JBQ3JELCtCQUErQixFQUFFLG9CQUFvQjt3QkFDckQsK0JBQStCLEVBQUUsMkJBQTJCO3FCQUM3RDtpQkFDRjs7OztnQkF6Q0MsaUJBQWlCO2dCQVFqQixTQUFTO2dCQUxULFVBQVU7Ozt5QkErQ1QsZUFBZSxTQUNkLFVBQVU7OztvQkFBQyxjQUFNLE9BQUEsZ0JBQWdCLEVBQWhCLENBQWdCLEVBQUM7b0JBQ2xDLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTs2QkFHdEIsS0FBSztnQ0FDTCxLQUFLO3lCQUNMLEtBQUs7eUJBQ0wsS0FBSztzQ0FDTCxLQUFLOztJQUptQjtRQUFmLFlBQVksRUFBRTs7NkRBQXFCO0lBc0YvQyw0QkFBQztDQUFBLEFBdkhELElBdUhDO1NBbkdZLHFCQUFxQjs7Ozs7O0lBRWhDLHNDQUFtQjs7Ozs7SUFDbkIseUNBQWlDOzs7OztJQUNqQyxtREFBeUM7Ozs7O0lBQ3pDLG9EQUEwQzs7SUFDMUMseUNBQTJDOztJQUMzQywwQ0FBbUM7O0lBQ25DLHVDQUlvQzs7SUFDcEMsMkNBQTZDOztJQUM3Qyw4Q0FBdUQ7O0lBQ3ZELHVDQUEyQzs7SUFDM0MsdUNBQXdCOztJQUN4QixvREFBbUQ7Ozs7O0lBc0J2QyxvQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgZm9yd2FyZFJlZixcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IG1lcmdlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgc3RhcnRXaXRoLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBpc05vdE5pbCwgSW5wdXRCb29sZWFuLCBOelNpemVMRFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56UmFkaW9Db21wb25lbnQgfSBmcm9tICcuL256LXJhZGlvLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgdHlwZSBOelJhZGlvQnV0dG9uU3R5bGUgPSAnb3V0bGluZScgfCAnc29saWQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei1yYWRpby1ncm91cCcsXHJcbiAgZXhwb3J0QXM6ICduelJhZGlvR3JvdXAnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1yYWRpby1ncm91cC5jb21wb25lbnQuaHRtbCcsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE56UmFkaW9Hcm91cENvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXSxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC1yYWRpby1ncm91cC1sYXJnZV0nOiBgbnpTaXplID09PSAnbGFyZ2UnYCxcclxuICAgICdbY2xhc3MuYW50LXJhZGlvLWdyb3VwLXNtYWxsXSc6IGBuelNpemUgPT09ICdzbWFsbCdgLFxyXG4gICAgJ1tjbGFzcy5hbnQtcmFkaW8tZ3JvdXAtc29saWRdJzogYG56QnV0dG9uU3R5bGUgPT09ICdzb2xpZCdgXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpSYWRpb0dyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXHJcbiAgcHJpdmF0ZSB2YWx1ZTogYW55O1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xyXG4gIHByaXZhdGUgc2VsZWN0U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgcHJpdmF0ZSB0b3VjaGVkU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgb25DaGFuZ2U6IChfOiBzdHJpbmcpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xyXG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IG51bGw7XHJcbiAgQENvbnRlbnRDaGlsZHJlbihcclxuICAgIGZvcndhcmRSZWYoKCkgPT4gTnpSYWRpb0NvbXBvbmVudCksXHJcbiAgICB7IGRlc2NlbmRhbnRzOiB0cnVlIH1cclxuICApXHJcbiAgcmFkaW9zOiBRdWVyeUxpc3Q8TnpSYWRpb0NvbXBvbmVudD47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgbnpCdXR0b25TdHlsZTogTnpSYWRpb0J1dHRvblN0eWxlID0gJ291dGxpbmUnO1xyXG4gIEBJbnB1dCgpIG56U2l6ZTogTnpTaXplTERTVHlwZSA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBuek5hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBuekdyb3VwTGFiZWxsZWRCeUlkOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgdXBkYXRlQ2hpbGRyZW5TdGF0dXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5yYWRpb3MpIHtcclxuICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yYWRpb3MuZm9yRWFjaChyYWRpbyA9PiB7XHJcbiAgICAgICAgICByYWRpby5jaGVja2VkID0gcmFkaW8ubnpWYWx1ZSA9PT0gdGhpcy52YWx1ZTtcclxuICAgICAgICAgIGlmIChpc05vdE5pbCh0aGlzLm56RGlzYWJsZWQpKSB7XHJcbiAgICAgICAgICAgIHJhZGlvLm56RGlzYWJsZWQgPSB0aGlzLm56RGlzYWJsZWQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAodGhpcy5uek5hbWUpIHtcclxuICAgICAgICAgICAgcmFkaW8ubmFtZSA9IHRoaXMubnpOYW1lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLyppZiAodGhpcy5uekdyb3VwTGFiZWxsZWRCeUlkKSB7XHJcbiAgICAgICAgICAgIHJhZGlvLm56TGFiZWxsZWRCeUlkID0gdGhpcy5uekdyb3VwTGFiZWxsZWRCeUlkO1xyXG4gICAgICAgICAgfSovXHJcbiAgICAgICAgICByYWRpby5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1yYWRpby1ncm91cCcpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5yYWRpb3MuY2hhbmdlcy5waXBlKHN0YXJ0V2l0aChudWxsKSwgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuU3RhdHVzKCk7XHJcbiAgICAgIGlmICh0aGlzLnNlbGVjdFN1YnNjcmlwdGlvbikge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZWxlY3RTdWJzY3JpcHRpb24gPSBtZXJnZSguLi50aGlzLnJhZGlvcy5tYXAocmFkaW8gPT4gcmFkaW8uc2VsZWN0JCkpXHJcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAgIC5zdWJzY3JpYmUocmFkaW8gPT4ge1xyXG4gICAgICAgICAgaWYgKHRoaXMudmFsdWUgIT09IHJhZGlvLm56VmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHJhZGlvLm56VmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5TdGF0dXMoKTtcclxuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgaWYgKHRoaXMudG91Y2hlZFN1YnNjcmlwdGlvbikge1xyXG4gICAgICAgIHRoaXMudG91Y2hlZFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudG91Y2hlZFN1YnNjcmlwdGlvbiA9IG1lcmdlKC4uLnRoaXMucmFkaW9zLm1hcChyYWRpbyA9PiByYWRpby50b3VjaGVkJCkpXHJcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLm9uVG91Y2hlZCgpKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMubnpEaXNhYmxlZCB8fCBjaGFuZ2VzLm56TmFtZSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuU3RhdHVzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy51cGRhdGVDaGlsZHJlblN0YXR1cygpO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5uekRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxufVxyXG4iXX0=