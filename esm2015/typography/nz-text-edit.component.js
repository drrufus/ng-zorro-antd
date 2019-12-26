/**
 * @fileoverview added by tsickle
 * Generated from: nz-text-edit.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class NzTextEditComponent {
    /**
     * @param {?} host
     * @param {?} cdr
     * @param {?} i18n
     */
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
    /**
     * @return {?}
     */
    ngOnInit() {
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => {
            this.locale = this.i18n.getLocaleData('Text');
            this.cdr.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @return {?}
     */
    onClick() {
        this.beforeText = this.text;
        this.currentText = this.beforeText;
        this.editing = true;
        this.startEditing.emit();
        this.focusAndSetValue();
    }
    /**
     * @return {?}
     */
    confirm() {
        this.editing = false;
        this.endEditing.emit(this.currentText);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onInput(event) {
        /** @type {?} */
        const target = (/** @type {?} */ (event.target));
        this.currentText = target.value;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onEnter(event) {
        event.stopPropagation();
        event.preventDefault();
        this.confirm();
    }
    /**
     * @return {?}
     */
    onCancel() {
        this.currentText = this.beforeText;
        this.confirm();
    }
    /**
     * @return {?}
     */
    focusAndSetValue() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (this.textarea && this.textarea.nativeElement) {
                this.textarea.nativeElement.focus();
                this.textarea.nativeElement.value = this.currentText;
                this.autosizeDirective.resizeToFitContent();
            }
        }));
    }
}
NzTextEditComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-text-edit',
                exportAs: 'nzTextEdit',
                template: "<button\r\n  *ngIf=\"!editing\"\r\n  [nzTitle]=\"locale?.edit\"\r\n  nz-tooltip\r\n  nz-trans-button\r\n  class=\"ant-typography-edit\"\r\n  (click)=\"onClick()\">\r\n  <i nz-icon nzType=\"edit\"></i>\r\n</button>\r\n<ng-container *ngIf=\"editing\">\r\n  <textarea #textarea\r\n            nz-input\r\n            nzAutosize\r\n            (input)=\"onInput($event)\"\r\n            (blur)=\"confirm()\"\r\n            (keydown.esc)=\"onCancel()\"\r\n            (keydown.enter)=\"onEnter($event)\">\r\n  </textarea>\r\n  <button nz-trans-button class=\"ant-typography-edit-content-confirm\" (click)=\"confirm()\">\r\n    <i nz-icon nzType=\"enter\"></i>\r\n  </button>\r\n</ng-container>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false
            }] }
];
/** @nocollapse */
NzTextEditComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: NzI18nService }
];
NzTextEditComponent.propDecorators = {
    text: [{ type: Input }],
    startEditing: [{ type: Output }],
    endEditing: [{ type: Output }],
    textarea: [{ type: ViewChild, args: ['textarea', { static: false },] }],
    autosizeDirective: [{ type: ViewChild, args: [NzAutosizeDirective, { static: false },] }]
};
if (false) {
    /** @type {?} */
    NzTextEditComponent.prototype.editing;
    /** @type {?} */
    NzTextEditComponent.prototype.locale;
    /**
     * @type {?}
     * @private
     */
    NzTextEditComponent.prototype.destroy$;
    /** @type {?} */
    NzTextEditComponent.prototype.text;
    /** @type {?} */
    NzTextEditComponent.prototype.startEditing;
    /** @type {?} */
    NzTextEditComponent.prototype.endEditing;
    /** @type {?} */
    NzTextEditComponent.prototype.textarea;
    /** @type {?} */
    NzTextEditComponent.prototype.autosizeDirective;
    /** @type {?} */
    NzTextEditComponent.prototype.beforeText;
    /** @type {?} */
    NzTextEditComponent.prototype.currentText;
    /** @type {?} */
    NzTextEditComponent.prototype.nativeElement;
    /**
     * @type {?}
     * @private
     */
    NzTextEditComponent.prototype.host;
    /**
     * @type {?}
     * @private
     */
    NzTextEditComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzTextEditComponent.prototype.i18n;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGV4dC1lZGl0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdHlwb2dyYXBoeS8iLCJzb3VyY2VzIjpbIm56LXRleHQtZWRpdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQVUxRCxNQUFNLE9BQU8sbUJBQW1COzs7Ozs7SUFlOUIsWUFBb0IsSUFBZ0IsRUFBVSxHQUFzQixFQUFVLElBQW1CO1FBQTdFLFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQWU7UUFkakcsWUFBTyxHQUFHLEtBQUssQ0FBQzs7UUFFaEIsV0FBTSxHQUFRLEVBQUUsQ0FBQztRQUNULGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBR2QsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQ3hDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBTTNELGtCQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNEQsQ0FBQzs7OztJQUVyRyxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FB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O0lBQ3BCLDRDQUF3Qzs7Ozs7SUFDNUIsbUNBQXdCOzs7OztJQUFFLGtDQUE4Qjs7Ozs7SUFBRSxtQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuaW1wb3J0IHsgTnpBdXRvc2l6ZURpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaW5wdXQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei10ZXh0LWVkaXQnLFxyXG4gIGV4cG9ydEFzOiAnbnpUZXh0RWRpdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXRleHQtZWRpdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpUZXh0RWRpdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBlZGl0aW5nID0gZmFsc2U7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIGxvY2FsZTogYW55ID0ge307XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIEBJbnB1dCgpIHRleHQ6IHN0cmluZztcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgc3RhcnRFZGl0aW5nID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBlbmRFZGl0aW5nID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcbiAgQFZpZXdDaGlsZCgndGV4dGFyZWEnLCB7IHN0YXRpYzogZmFsc2UgfSkgdGV4dGFyZWE6IEVsZW1lbnRSZWY8SFRNTFRleHRBcmVhRWxlbWVudD47XHJcbiAgQFZpZXdDaGlsZChOekF1dG9zaXplRGlyZWN0aXZlLCB7IHN0YXRpYzogZmFsc2UgfSkgYXV0b3NpemVEaXJlY3RpdmU6IE56QXV0b3NpemVEaXJlY3RpdmU7XHJcblxyXG4gIGJlZm9yZVRleHQ6IHN0cmluZztcclxuICBjdXJyZW50VGV4dDogc3RyaW5nO1xyXG4gIG5hdGl2ZUVsZW1lbnQgPSB0aGlzLmhvc3QubmF0aXZlRWxlbWVudDtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhvc3Q6IEVsZW1lbnRSZWYsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaTE4bi5sb2NhbGVDaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldExvY2FsZURhdGEoJ1RleHQnKTtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5iZWZvcmVUZXh0ID0gdGhpcy50ZXh0O1xyXG4gICAgdGhpcy5jdXJyZW50VGV4dCA9IHRoaXMuYmVmb3JlVGV4dDtcclxuICAgIHRoaXMuZWRpdGluZyA9IHRydWU7XHJcbiAgICB0aGlzLnN0YXJ0RWRpdGluZy5lbWl0KCk7XHJcbiAgICB0aGlzLmZvY3VzQW5kU2V0VmFsdWUoKTtcclxuICB9XHJcblxyXG4gIGNvbmZpcm0oKTogdm9pZCB7XHJcbiAgICB0aGlzLmVkaXRpbmcgPSBmYWxzZTtcclxuICAgIHRoaXMuZW5kRWRpdGluZy5lbWl0KHRoaXMuY3VycmVudFRleHQpO1xyXG4gIH1cclxuXHJcbiAgb25JbnB1dChldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MVGV4dEFyZWFFbGVtZW50O1xyXG4gICAgdGhpcy5jdXJyZW50VGV4dCA9IHRhcmdldC52YWx1ZTtcclxuICB9XHJcblxyXG4gIG9uRW50ZXIoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuY29uZmlybSgpO1xyXG4gIH1cclxuXHJcbiAgb25DYW5jZWwoKTogdm9pZCB7XHJcbiAgICB0aGlzLmN1cnJlbnRUZXh0ID0gdGhpcy5iZWZvcmVUZXh0O1xyXG4gICAgdGhpcy5jb25maXJtKCk7XHJcbiAgfVxyXG5cclxuICBmb2N1c0FuZFNldFZhbHVlKCk6IHZvaWQge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnRleHRhcmVhICYmIHRoaXMudGV4dGFyZWEubmF0aXZlRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMudGV4dGFyZWEubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICAgIHRoaXMudGV4dGFyZWEubmF0aXZlRWxlbWVudC52YWx1ZSA9IHRoaXMuY3VycmVudFRleHQ7XHJcbiAgICAgICAgdGhpcy5hdXRvc2l6ZURpcmVjdGl2ZS5yZXNpemVUb0ZpdENvbnRlbnQoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==