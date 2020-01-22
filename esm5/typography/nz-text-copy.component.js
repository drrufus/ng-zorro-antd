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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGV4dC1jb3B5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdHlwb2dyYXBoeS8iLCJzb3VyY2VzIjpbIm56LXRleHQtY29weS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0M7SUFtQkUsNkJBQ1UsSUFBZ0IsRUFDaEIsR0FBc0IsRUFDdEIsZUFBeUMsRUFDekMsSUFBbUI7UUFIbkIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixvQkFBZSxHQUFmLGVBQWUsQ0FBMEI7UUFDekMsU0FBSSxHQUFKLElBQUksQ0FBZTtRQWQ3QixXQUFNLEdBQUcsS0FBSyxDQUFDOztRQUdmLFdBQU0sR0FBUSxFQUFFLENBQUM7UUFDakIsa0JBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUNoQyxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUdkLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBT3RELENBQUM7Ozs7SUFFSixzQ0FBUTs7O0lBQVI7UUFBQSxpQkFLQztRQUpDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUzs7O1FBQUM7WUFDOUQsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM5QyxLQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzFCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELHlDQUFXOzs7SUFBWDtRQUNFLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxxQ0FBTzs7O0lBQVA7UUFBQSxpQkFZQztRQVhDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7O1lBQ25CLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSTtRQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsZUFBZTthQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ1YsSUFBSTs7O1FBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxRQUFRLEVBQUUsRUFBZixDQUFlLEVBQUM7YUFDM0IsS0FBSzs7O1FBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxRQUFRLEVBQUUsRUFBZixDQUFlLEVBQUMsQ0FBQztJQUNsQyxDQUFDOzs7O0lBRUQsc0NBQVE7OztJQUFSO1FBQUEsaUJBTUM7UUFMQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVTs7O1FBQUM7WUFDdkIsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsS0FBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMzQixDQUFDLEdBQUUsSUFBSSxDQUFDLENBQUM7SUFDWCxDQUFDOztnQkEzREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixRQUFRLEVBQUUsWUFBWTtvQkFDdEIsc1RBQTRDO29CQUM1QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLG1CQUFtQixFQUFFLEtBQUs7aUJBQzNCOzs7O2dCQXJCQyxVQUFVO2dCQUZWLGlCQUFpQjtnQkFXVix3QkFBd0I7Z0JBQ3hCLGFBQWE7Ozt1QkFvQm5CLEtBQUs7MkJBQ0wsTUFBTTs7SUEyQ1QsMEJBQUM7Q0FBQSxBQTVERCxJQTREQztTQXBEWSxtQkFBbUI7OztJQUM5QixxQ0FBZTs7SUFDZixxQ0FBZTs7SUFFZixxQ0FBaUI7O0lBQ2pCLDRDQUF3Qzs7Ozs7SUFDeEMsdUNBQWlDOztJQUVqQyxtQ0FBc0I7O0lBQ3RCLHVDQUF5RDs7Ozs7SUFHdkQsbUNBQXdCOzs7OztJQUN4QixrQ0FBOEI7Ozs7O0lBQzlCLDhDQUFpRDs7Ozs7SUFDakQsbUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpDb3B5VG9DbGlwYm9hcmRTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei10ZXh0LWNvcHknLFxyXG4gIGV4cG9ydEFzOiAnbnpUZXh0Q29weScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXRleHQtY29weS5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpUZXh0Q29weUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBjb3BpZWQgPSBmYWxzZTtcclxuICBjb3B5SWQ6IG51bWJlcjtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgbG9jYWxlOiBhbnkgPSB7fTtcclxuICBuYXRpdmVFbGVtZW50ID0gdGhpcy5ob3N0Lm5hdGl2ZUVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIEBJbnB1dCgpIHRleHQ6IHN0cmluZztcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgdGV4dENvcHkgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGhvc3Q6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIGNvcHlUb0NsaXBib2FyZDogTnpDb3B5VG9DbGlwYm9hcmRTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaTE4bi5sb2NhbGVDaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldExvY2FsZURhdGEoJ1RleHQnKTtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuY29weUlkKTtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgb25DbGljaygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmNvcGllZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmNvcGllZCA9IHRydWU7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICBjb25zdCB0ZXh0ID0gdGhpcy50ZXh0O1xyXG4gICAgdGhpcy50ZXh0Q29weS5lbWl0KHRleHQpO1xyXG4gICAgdGhpcy5jb3B5VG9DbGlwYm9hcmRcclxuICAgICAgLmNvcHkodGV4dClcclxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5vbkNvcGllZCgpKVxyXG4gICAgICAuY2F0Y2goKCkgPT4gdGhpcy5vbkNvcGllZCgpKTtcclxuICB9XHJcblxyXG4gIG9uQ29waWVkKCk6IHZvaWQge1xyXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuY29weUlkKTtcclxuICAgIHRoaXMuY29weUlkID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY29waWVkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH0sIDMwMDApO1xyXG4gIH1cclxufVxyXG4iXX0=