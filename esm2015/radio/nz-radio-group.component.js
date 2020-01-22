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
export class NzRadioGroupComponent {
    /**
     * @param {?} cdr
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(cdr, renderer, elementRef) {
        this.cdr = cdr;
        this.destroy$ = new Subject();
        this.onChange = (/**
         * @return {?}
         */
        () => null);
        this.onTouched = (/**
         * @return {?}
         */
        () => null);
        this.nzButtonStyle = 'outline';
        this.nzSize = 'default';
        renderer.addClass(elementRef.nativeElement, 'ant-radio-group');
    }
    /**
     * @return {?}
     */
    updateChildrenStatus() {
        if (this.radios) {
            Promise.resolve().then((/**
             * @return {?}
             */
            () => {
                this.radios.forEach((/**
                 * @param {?} radio
                 * @return {?}
                 */
                radio => {
                    radio.checked = radio.nzValue === this.value;
                    if (isNotNil(this.nzDisabled)) {
                        radio.nzDisabled = this.nzDisabled;
                    }
                    if (this.nzName) {
                        radio.name = this.nzName;
                    }
                    radio.markForCheck();
                }));
            }));
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.radios.changes
            .pipe(startWith(null), takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.updateChildrenStatus();
            if (this.selectSubscription) {
                this.selectSubscription.unsubscribe();
            }
            this.selectSubscription = merge(...this.radios.map((/**
             * @param {?} radio
             * @return {?}
             */
            radio => radio.select$)))
                .pipe(takeUntil(this.destroy$))
                .subscribe((/**
             * @param {?} radio
             * @return {?}
             */
            radio => {
                if (this.value !== radio.nzValue) {
                    this.value = radio.nzValue;
                    this.updateChildrenStatus();
                    this.onChange(this.value);
                }
            }));
            if (this.touchedSubscription) {
                this.touchedSubscription.unsubscribe();
            }
            this.touchedSubscription = merge(...this.radios.map((/**
             * @param {?} radio
             * @return {?}
             */
            radio => radio.touched$)))
                .pipe(takeUntil(this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            () => {
                Promise.resolve().then((/**
                 * @return {?}
                 */
                () => this.onTouched()));
            }));
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzDisabled || changes.nzName) {
            this.updateChildrenStatus();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /* tslint:disable-next-line:no-any */
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
        this.updateChildrenStatus();
        this.cdr.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.nzDisabled = isDisabled;
        this.cdr.markForCheck();
    }
}
NzRadioGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-radio-group',
                exportAs: 'nzRadioGroup',
                preserveWhitespaces: false,
                template: "<ng-content></ng-content>",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => NzRadioGroupComponent)),
                        multi: true
                    }
                ],
                host: {
                    '[class.ant-radio-group-large]': `nzSize === 'large'`,
                    '[class.ant-radio-group-small]': `nzSize === 'small'`,
                    '[class.ant-radio-group-solid]': `nzButtonStyle === 'solid'`
                }
            }] }
];
/** @nocollapse */
NzRadioGroupComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: ElementRef }
];
NzRadioGroupComponent.propDecorators = {
    radios: [{ type: ContentChildren, args: [forwardRef((/**
                 * @return {?}
                 */
                () => NzRadioComponent)), { descendants: true },] }],
    nzDisabled: [{ type: Input }],
    nzButtonStyle: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzName: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzRadioGroupComponent.prototype, "nzDisabled", void 0);
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
    /**
     * @type {?}
     * @private
     */
    NzRadioGroupComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmFkaW8tZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9yYWRpby8iLCJzb3VyY2VzIjpbIm56LXJhZGlvLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsVUFBVSxFQUVWLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsS0FBSyxFQUdMLFNBQVMsRUFDVCxTQUFTLEVBRVQsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBaUIsTUFBTSxvQkFBb0IsQ0FBQztBQUUzRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQXdCeEQsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7O0lBK0JoQyxZQUFvQixHQUFzQixFQUFFLFFBQW1CLEVBQUUsVUFBc0I7UUFBbkUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUE1QmxDLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBR2pDLGFBQVE7OztRQUF3QixHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUM7UUFDM0MsY0FBUzs7O1FBQWUsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFDO1FBRzFCLGtCQUFhLEdBQXVCLFNBQVMsQ0FBQztRQUM5QyxXQUFNLEdBQWtCLFNBQVMsQ0FBQztRQXFCekMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFD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QStDVCxlQUFlLFNBQUMsVUFBVTs7O2dCQUFDLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixFQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFO3lCQUN6RSxLQUFLOzRCQUNMLEtBQUs7cUJBQ0wsS0FBSztxQkFDTCxLQUFLOztBQUhtQjtJQUFmLFlBQVksRUFBRTs7eURBQXFCOzs7Ozs7SUFQN0Msc0NBQW1COzs7OztJQUNuQix5Q0FBaUM7Ozs7O0lBQ2pDLG1EQUF5Qzs7Ozs7SUFDekMsb0RBQTBDOztJQUMxQyx5Q0FBMkM7O0lBQzNDLDBDQUFtQzs7SUFDbkMsdUNBQWdIOztJQUNoSCwyQ0FBNkM7O0lBQzdDLDhDQUF1RDs7SUFDdkQsdUNBQTJDOztJQUMzQyx1Q0FBd0I7Ozs7O0lBbUJaLG9DQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBmb3J3YXJkUmVmLFxyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgbWVyZ2UsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBzdGFydFdpdGgsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IGlzTm90TmlsLCBJbnB1dEJvb2xlYW4sIE56U2l6ZUxEU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpSYWRpb0NvbXBvbmVudCB9IGZyb20gJy4vbnotcmFkaW8uY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCB0eXBlIE56UmFkaW9CdXR0b25TdHlsZSA9ICdvdXRsaW5lJyB8ICdzb2xpZCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LXJhZGlvLWdyb3VwJyxcclxuICBleHBvcnRBczogJ256UmFkaW9Hcm91cCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXJhZGlvLWdyb3VwLmNvbXBvbmVudC5odG1sJyxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnpSYWRpb0dyb3VwQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LXJhZGlvLWdyb3VwLWxhcmdlXSc6IGBuelNpemUgPT09ICdsYXJnZSdgLFxyXG4gICAgJ1tjbGFzcy5hbnQtcmFkaW8tZ3JvdXAtc21hbGxdJzogYG56U2l6ZSA9PT0gJ3NtYWxsJ2AsXHJcbiAgICAnW2NsYXNzLmFudC1yYWRpby1ncm91cC1zb2xpZF0nOiBgbnpCdXR0b25TdHlsZSA9PT0gJ3NvbGlkJ2BcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelJhZGlvR3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cclxuICBwcml2YXRlIHZhbHVlOiBhbnk7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJpdmF0ZSBzZWxlY3RTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICBwcml2YXRlIHRvdWNoZWRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICBvbkNoYW5nZTogKF86IHN0cmluZykgPT4gdm9pZCA9ICgpID0+IG51bGw7XHJcbiAgb25Ub3VjaGVkOiAoKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcclxuICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gTnpSYWRpb0NvbXBvbmVudCksIHsgZGVzY2VuZGFudHM6IHRydWUgfSkgcmFkaW9zOiBRdWVyeUxpc3Q8TnpSYWRpb0NvbXBvbmVudD47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgbnpCdXR0b25TdHlsZTogTnpSYWRpb0J1dHRvblN0eWxlID0gJ291dGxpbmUnO1xyXG4gIEBJbnB1dCgpIG56U2l6ZTogTnpTaXplTERTVHlwZSA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBuek5hbWU6IHN0cmluZztcclxuXHJcbiAgdXBkYXRlQ2hpbGRyZW5TdGF0dXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5yYWRpb3MpIHtcclxuICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yYWRpb3MuZm9yRWFjaChyYWRpbyA9PiB7XHJcbiAgICAgICAgICByYWRpby5jaGVja2VkID0gcmFkaW8ubnpWYWx1ZSA9PT0gdGhpcy52YWx1ZTtcclxuICAgICAgICAgIGlmIChpc05vdE5pbCh0aGlzLm56RGlzYWJsZWQpKSB7XHJcbiAgICAgICAgICAgIHJhZGlvLm56RGlzYWJsZWQgPSB0aGlzLm56RGlzYWJsZWQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAodGhpcy5uek5hbWUpIHtcclxuICAgICAgICAgICAgcmFkaW8ubmFtZSA9IHRoaXMubnpOYW1lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmFkaW8ubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XHJcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtcmFkaW8tZ3JvdXAnKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMucmFkaW9zLmNoYW5nZXNcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgc3RhcnRXaXRoKG51bGwpLFxyXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5TdGF0dXMoKTtcclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RTdWJzY3JpcHRpb24pIHtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2VsZWN0U3Vic2NyaXB0aW9uID0gbWVyZ2UoLi4udGhpcy5yYWRpb3MubWFwKHJhZGlvID0+IHJhZGlvLnNlbGVjdCQpKVxyXG4gICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAgICAgLnN1YnNjcmliZShyYWRpbyA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlICE9PSByYWRpby5uelZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHJhZGlvLm56VmFsdWU7XHJcbiAgICAgICAgICAgICAgdGhpcy51cGRhdGVDaGlsZHJlblN0YXR1cygpO1xyXG4gICAgICAgICAgICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh0aGlzLnRvdWNoZWRTdWJzY3JpcHRpb24pIHtcclxuICAgICAgICAgIHRoaXMudG91Y2hlZFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRvdWNoZWRTdWJzY3JpcHRpb24gPSBtZXJnZSguLi50aGlzLnJhZGlvcy5tYXAocmFkaW8gPT4gcmFkaW8udG91Y2hlZCQpKVxyXG4gICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy5vblRvdWNoZWQoKSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5uekRpc2FibGVkIHx8IGNoYW5nZXMubnpOYW1lKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5TdGF0dXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuU3RhdHVzKCk7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLm56RGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==