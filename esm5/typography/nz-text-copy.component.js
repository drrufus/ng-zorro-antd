/**
 * @fileoverview added by tsickle
 * Generated from: nz-text-copy.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { NzCopyToClipboardService } from 'ng-zorro-antd/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
var NzTextCopyComponent = /** @class */ (function () {
    function NzTextCopyComponent(host, cdr, copyToClipboard, i18n) {
        this.host = host;
        this.cdr = cdr;
        this.copyToClipboard = copyToClipboard;
        this.i18n = i18n;
        this.copied = false;
        // tslint:disable-next-line:no-any
        this.locale = {};
        this.nativeElement = this.host.nativeElement;
        this.destroy$ = new Subject();
        this.textCopy = new EventEmitter();
    }
    /**
     * @return {?}
     */
    NzTextCopyComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.locale = _this.i18n.getLocaleData('Text');
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @return {?}
     */
    NzTextCopyComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        clearTimeout(this.copyId);
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @return {?}
     */
    NzTextCopyComponent.prototype.onClick = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.copied) {
            return;
        }
        this.copied = true;
        this.cdr.detectChanges();
        /** @type {?} */
        var text = this.text;
        this.textCopy.emit(text);
        this.copyToClipboard
            .copy(text)
            .then((/**
         * @return {?}
         */
        function () { return _this.onCopied(); }))
            .catch((/**
         * @return {?}
         */
        function () { return _this.onCopied(); }));
    };
    /**
     * @return {?}
     */
    NzTextCopyComponent.prototype.onCopied = /**
     * @return {?}
     */
    function () {
        var _this = this;
        clearTimeout(this.copyId);
        this.copyId = setTimeout((/**
         * @return {?}
         */
        function () {
            _this.copied = false;
            _this.cdr.detectChanges();
        }), 3000);
    };
    NzTextCopyComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-text-copy',
                    exportAs: 'nzTextCopy',
                    template: "<button\r\n  nz-tooltip\r\n  nz-trans-button\r\n  [nzTitle]=\"copied ? locale?.copied : locale?.copy\"\r\n  class=\"ant-typography-copy\"\r\n  [class.ant-typography-copy-success]=\"copied\"\r\n  (click)=\"onClick()\">\r\n  <i nz-icon [nzType]=\"copied ? 'check' : 'copy'\"></i>\r\n</button>\r\n\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false
                }] }
    ];
    /** @nocollapse */
    NzTextCopyComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: NzCopyToClipboardService },
        { type: NzI18nService }
    ]; };
    NzTextCopyComponent.propDecorators = {
        text: [{ type: Input }],
        textCopy: [{ type: Output }]
    };
    return NzTextCopyComponent;
}());
export { NzTextCopyComponent };
if (false) {
    /** @type {?} */
    NzTextCopyComponent.prototype.copied;
    /** @type {?} */
    NzTextCopyComponent.prototype.copyId;
    /** @type {?} */
    NzTextCopyComponent.prototype.locale;
    /** @type {?} */
    NzTextCopyComponent.prototype.nativeElement;
    /**
     * @type {?}
     * @private
     */
    NzTextCopyComponent.prototype.destroy$;
    /** @type {?} */
    NzTextCopyComponent.prototype.text;
    /** @type {?} */
    NzTextCopyComponent.prototype.textCopy;
    /**
     * @type {?}
     * @private
     */
    NzTextCopyComponent.prototype.host;
    /**
     * @type {?}
     * @private
     */
    NzTextCopyComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzTextCopyComponent.prototype.copyToClipboard;
    /**
     * @type {?}
     * @private
     */
    NzTextCopyComponent.prototype.i18n;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGV4dC1jb3B5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdHlwb2dyYXBoeS8iLCJzb3VyY2VzIjpbIm56LXRleHQtY29weS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDO0lBbUJFLDZCQUNVLElBQWdCLEVBQ2hCLEdBQXNCLEVBQ3RCLGVBQXlDLEVBQ3pDLElBQW1CO1FBSG5CLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsb0JBQWUsR0FBZixlQUFlLENBQTBCO1FBQ3pDLFNBQUksR0FBSixJQUFJLENBQWU7UUFkN0IsV0FBTSxHQUFHLEtBQUssQ0FBQzs7UUFHZixXQUFNLEdBQVEsRUFBRSxDQUFDO1FBQ2pCLGtCQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDaEMsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFHZCxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQU90RCxDQUFDOzs7O0lBRUosc0NBQVE7OztJQUFSO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVM7OztRQUFDO1lBQzlELEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCx5Q0FBVzs7O0lBQVg7UUFDRSxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQscUNBQU87OztJQUFQO1FBQUEsaUJBWUM7UUFYQyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDOztZQUNuQixJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUk7UUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLGVBQWU7YUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNWLElBQUk7OztRQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsUUFBUSxFQUFFLEVBQWYsQ0FBZSxFQUFDO2FBQzNCLEtBQUs7OztRQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsUUFBUSxFQUFFLEVBQWYsQ0FBZSxFQUFDLENBQUM7SUFDbEMsQ0FBQzs7OztJQUVELHNDQUFROzs7SUFBUjtRQUFBLGlCQU1DO1FBTEMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVU7OztRQUFDO1lBQ3ZCLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLEtBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxHQUFFLElBQUksQ0FBQyxDQUFDO0lBQ1gsQ0FBQzs7Z0JBM0RGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLHNUQUE0QztvQkFDNUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxtQkFBbUIsRUFBRSxLQUFLO2lCQUMzQjs7OztnQkFyQkMsVUFBVTtnQkFGVixpQkFBaUI7Z0JBV1Ysd0JBQXdCO2dCQUN4QixhQUFhOzs7dUJBb0JuQixLQUFLOzJCQUNMLE1BQU07O0lBMkNULDBCQUFDO0NBQUEsQUE1REQsSUE0REM7U0FwRFksbUJBQW1COzs7SUFDOUIscUNBQWU7O0lBQ2YscUNBQWU7O0lBRWYscUNBQWlCOztJQUNqQiw0Q0FBd0M7Ozs7O0lBQ3hDLHVDQUFpQzs7SUFFakMsbUNBQXNCOztJQUN0Qix1Q0FBeUQ7Ozs7O0lBR3ZELG1DQUF3Qjs7Ozs7SUFDeEIsa0NBQThCOzs7OztJQUM5Qiw4Q0FBaUQ7Ozs7O0lBQ2pELG1DQUEyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56Q29weVRvQ2xpcGJvYXJkU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotdGV4dC1jb3B5JyxcclxuICBleHBvcnRBczogJ256VGV4dENvcHknLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei10ZXh0LWNvcHkuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2VcclxufSlcclxuZXhwb3J0IGNsYXNzIE56VGV4dENvcHlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgY29waWVkID0gZmFsc2U7XHJcbiAgY29weUlkOiBudW1iZXI7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIGxvY2FsZTogYW55ID0ge307XHJcbiAgbmF0aXZlRWxlbWVudCA9IHRoaXMuaG9zdC5uYXRpdmVFbGVtZW50O1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBASW5wdXQoKSB0ZXh0OiBzdHJpbmc7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHRleHRDb3B5ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBob3N0OiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBjb3B5VG9DbGlwYm9hcmQ6IE56Q29weVRvQ2xpcGJvYXJkU2VydmljZSxcclxuICAgIHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZVxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXRMb2NhbGVEYXRhKCdUZXh0Jyk7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGNsZWFyVGltZW91dCh0aGlzLmNvcHlJZCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2soKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5jb3BpZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jb3BpZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgY29uc3QgdGV4dCA9IHRoaXMudGV4dDtcclxuICAgIHRoaXMudGV4dENvcHkuZW1pdCh0ZXh0KTtcclxuICAgIHRoaXMuY29weVRvQ2xpcGJvYXJkXHJcbiAgICAgIC5jb3B5KHRleHQpXHJcbiAgICAgIC50aGVuKCgpID0+IHRoaXMub25Db3BpZWQoKSlcclxuICAgICAgLmNhdGNoKCgpID0+IHRoaXMub25Db3BpZWQoKSk7XHJcbiAgfVxyXG5cclxuICBvbkNvcGllZCgpOiB2b2lkIHtcclxuICAgIGNsZWFyVGltZW91dCh0aGlzLmNvcHlJZCk7XHJcbiAgICB0aGlzLmNvcHlJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNvcGllZCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9LCAzMDAwKTtcclxuICB9XHJcbn1cclxuIl19