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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGV4dC1lZGl0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdHlwb2dyYXBoeS8iLCJzb3VyY2VzIjpbIm56LXRleHQtZWRpdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBVTFELE1BQU0sT0FBTyxtQkFBbUI7Ozs7OztJQWU5QixZQUFvQixJQUFnQixFQUFVLEdBQXNCLEVBQVUsSUFBbUI7UUFBN0UsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBZTtRQWRqRyxZQUFPLEdBQUcsS0FBSyxDQUFDOztRQUVoQixXQUFNLEdBQVEsRUFBRSxDQUFDO1FBQ1QsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFHZCxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDeEMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFNM0Qsa0JBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM0RCxDQUFDOzs7O0lBRXJHLFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVM7OztRQUFDLEdBQUcsRUFBRTtZQUNuRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxLQUFZOztjQUNaLE1BQU0sR0FBRyxtQkFBQSxLQUFLLENBQUMsTUFBTSxFQUF1QjtRQUNsRCxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsS0FBb0I7UUFDMUIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7Ozs7SUFFRCxnQkFBZ0I7UUFDZCxVQUFVOzs7UUFBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUU7Z0JBQ2hELElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNwQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztnQkFDckQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixFQUFFLENBQUM7YUFDN0M7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7OztZQTFFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRSxZQUFZO2dCQUN0Qixnc0JBQTRDO2dCQUM1QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLG1CQUFtQixFQUFFLEtBQUs7YUFDM0I7Ozs7WUF2QkMsVUFBVTtZQUZWLGlCQUFpQjtZQWVWLGFBQWE7OzttQkFpQm5CLEtBQUs7MkJBQ0wsTUFBTTt5QkFDTixNQUFNO3VCQUNOLFNBQVMsU0FBQyxVQUFVLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO2dDQUN2QyxTQUFTLFNBQUMsbUJBQW1CLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzs7O0lBVGpELHNDQUFnQjs7SUFFaEIscUNBQWlCOzs7OztJQUNqQix1Q0FBaUM7O0lBRWpDLG1DQUFzQjs7SUFDdEIsMkNBQTJEOztJQUMzRCx5Q0FBMkQ7O0lBQzNELHVDQUFvRjs7SUFDcEYsZ0RBQTBGOztJQUUxRix5Q0FBbUI7O0lBQ25CLDBDQUFvQjs7SUFDcEIsNENBQXdDOzs7OztJQUM1QixtQ0FBd0I7Ozs7O0lBQUUsa0NBQThCOzs7OztJQUFFLG1DQUEyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5pbXBvcnQgeyBOekF1dG9zaXplRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pbnB1dCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LXRleHQtZWRpdCcsXHJcbiAgZXhwb3J0QXM6ICduelRleHRFZGl0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotdGV4dC1lZGl0LmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelRleHRFZGl0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIGVkaXRpbmcgPSBmYWxzZTtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgbG9jYWxlOiBhbnkgPSB7fTtcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgQElucHV0KCkgdGV4dDogc3RyaW5nO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBzdGFydEVkaXRpbmcgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGVuZEVkaXRpbmcgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICBAVmlld0NoaWxkKCd0ZXh0YXJlYScsIHsgc3RhdGljOiBmYWxzZSB9KSB0ZXh0YXJlYTogRWxlbWVudFJlZjxIVE1MVGV4dEFyZWFFbGVtZW50PjtcclxuICBAVmlld0NoaWxkKE56QXV0b3NpemVEaXJlY3RpdmUsIHsgc3RhdGljOiBmYWxzZSB9KSBhdXRvc2l6ZURpcmVjdGl2ZTogTnpBdXRvc2l6ZURpcmVjdGl2ZTtcclxuXHJcbiAgYmVmb3JlVGV4dDogc3RyaW5nO1xyXG4gIGN1cnJlbnRUZXh0OiBzdHJpbmc7XHJcbiAgbmF0aXZlRWxlbWVudCA9IHRoaXMuaG9zdC5uYXRpdmVFbGVtZW50O1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaG9zdDogRWxlbWVudFJlZiwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnVGV4dCcpO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2soKTogdm9pZCB7XHJcbiAgICB0aGlzLmJlZm9yZVRleHQgPSB0aGlzLnRleHQ7XHJcbiAgICB0aGlzLmN1cnJlbnRUZXh0ID0gdGhpcy5iZWZvcmVUZXh0O1xyXG4gICAgdGhpcy5lZGl0aW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuc3RhcnRFZGl0aW5nLmVtaXQoKTtcclxuICAgIHRoaXMuZm9jdXNBbmRTZXRWYWx1ZSgpO1xyXG4gIH1cclxuXHJcbiAgY29uZmlybSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZWRpdGluZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5lbmRFZGl0aW5nLmVtaXQodGhpcy5jdXJyZW50VGV4dCk7XHJcbiAgfVxyXG5cclxuICBvbklucHV0KGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQ7XHJcbiAgICB0aGlzLmN1cnJlbnRUZXh0ID0gdGFyZ2V0LnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgb25FbnRlcihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5jb25maXJtKCk7XHJcbiAgfVxyXG5cclxuICBvbkNhbmNlbCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY3VycmVudFRleHQgPSB0aGlzLmJlZm9yZVRleHQ7XHJcbiAgICB0aGlzLmNvbmZpcm0oKTtcclxuICB9XHJcblxyXG4gIGZvY3VzQW5kU2V0VmFsdWUoKTogdm9pZCB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKHRoaXMudGV4dGFyZWEgJiYgdGhpcy50ZXh0YXJlYS5uYXRpdmVFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy50ZXh0YXJlYS5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgICAgdGhpcy50ZXh0YXJlYS5uYXRpdmVFbGVtZW50LnZhbHVlID0gdGhpcy5jdXJyZW50VGV4dDtcclxuICAgICAgICB0aGlzLmF1dG9zaXplRGlyZWN0aXZlLnJlc2l6ZVRvRml0Q29udGVudCgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19