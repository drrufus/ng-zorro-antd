/**
 * @fileoverview added by tsickle
 * Generated from: nz-empty.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { emptyImage } from './nz-empty-config';
export class NzEmptyComponent {
    /**
     * @param {?} sanitizer
     * @param {?} i18n
     * @param {?} cdr
     */
    constructor(sanitizer, i18n, cdr) {
        this.sanitizer = sanitizer;
        this.i18n = i18n;
        this.cdr = cdr;
        // NOTE: It would be very hack to use `ContentChild`, because Angular could
        // tell if user actually pass something to <ng-content>.
        // See: https://github.com/angular/angular/issues/12530.
        // I can use a directive but this would expose the name `footer`.
        // @ContentChild(TemplateRef, {static: false}) nzNotFoundFooter: TemplateRef<void>;
        this.defaultSvg = this.sanitizer.bypassSecurityTrustResourceUrl(emptyImage);
        this.isContentString = false;
        this.locale = {};
        this.destroy$ = new Subject();
    }
    /**
     * @return {?}
     */
    get shouldRenderContent() {
        /** @type {?} */
        const content = this.nzNotFoundContent;
        return !!(content || typeof content === 'string');
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzNotFoundContent } = changes;
        if (nzNotFoundContent) {
            this.isContentString = typeof nzNotFoundContent.currentValue === 'string';
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => {
            this.locale = this.i18n.getLocaleData('Empty');
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
}
NzEmptyComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-empty',
                exportAs: 'nzEmpty',
                template: "<div class=\"ant-empty-image\">\r\n  <ng-container *nzStringTemplateOutlet=\"nzNotFoundImage\">\r\n    <img [src]=\"nzNotFoundImage || defaultSvg\" [alt]=\"isContentString ? nzNotFoundContent : 'empty'\">\r\n  </ng-container>\r\n</div>\r\n<p class=\"ant-empty-description\">\r\n  <ng-container *nzStringTemplateOutlet=\"nzNotFoundContent\">\r\n    {{ shouldRenderContent ? nzNotFoundContent : locale['description'] }}\r\n  </ng-container>\r\n</p>\r\n<div class=\"ant-empty-footer\" *ngIf=\"nzNotFoundFooter\">\r\n  <ng-container *nzStringTemplateOutlet=\"nzNotFoundFooter\">\r\n    {{ nzNotFoundFooter }}\r\n  </ng-container>\r\n</div>\r\n",
                host: {
                    class: 'ant-empty'
                },
                styles: ['nz-empty { display: block; }']
            }] }
];
/** @nocollapse */
NzEmptyComponent.ctorParameters = () => [
    { type: DomSanitizer },
    { type: NzI18nService },
    { type: ChangeDetectorRef }
];
NzEmptyComponent.propDecorators = {
    nzNotFoundImage: [{ type: Input }],
    nzNotFoundContent: [{ type: Input }],
    nzNotFoundFooter: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NzEmptyComponent.prototype.nzNotFoundImage;
    /** @type {?} */
    NzEmptyComponent.prototype.nzNotFoundContent;
    /** @type {?} */
    NzEmptyComponent.prototype.nzNotFoundFooter;
    /** @type {?} */
    NzEmptyComponent.prototype.defaultSvg;
    /** @type {?} */
    NzEmptyComponent.prototype.isContentString;
    /** @type {?} */
    NzEmptyComponent.prototype.locale;
    /**
     * @type {?}
     * @private
     */
    NzEmptyComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzEmptyComponent.prototype.sanitizer;
    /**
     * @type {?}
     * @private
     */
    NzEmptyComponent.prototype.i18n;
    /**
     * @type {?}
     * @private
     */
    NzEmptyComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZW1wdHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9lbXB0eS8iLCJzb3VyY2VzIjpbIm56LWVtcHR5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsS0FBSyxFQU1MLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQWEvQyxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7SUFzQjNCLFlBQW9CLFNBQXVCLEVBQVUsSUFBbUIsRUFBVSxHQUFzQjtRQUFwRixjQUFTLEdBQVQsU0FBUyxDQUFjO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBZTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1COzs7Ozs7UUFYeEcsZUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsOEJBQThCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdkUsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFDeEIsV0FBTSxHQUE4QixFQUFFLENBQUM7UUFPL0IsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7SUFFb0UsQ0FBQzs7OztJQVA1RyxJQUFJLG1CQUFtQjs7Y0FDZixPQUFPLEdBQUcsSUFBSSxDQUFDLGlCQUFpQjtRQUN0QyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7OztJQU1ELFdBQVcsQ0FBQyxPQUFzQjtjQUMxQixFQUFFLGlCQUFpQixFQUFFLEdBQUcsT0FBTztRQUNyQyxJQUFJLGlCQUFpQixFQUFFO1lBQ3JCLElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxpQkFBaUIsQ0FBQyxZQUFZLEtBQUssUUFBUSxDQUFDO1NBQzNFO0lBQ0gsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVM7OztRQUFDLEdBQUcsRUFBRTtZQUNuRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7WUFwREYsU0FBUyxTQUFDO2dCQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFFBQVEsRUFBRSxTQUFTO2dCQUNuQiwyb0JBQXdDO2dCQUV4QyxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLFdBQVc7aUJBQ25CO3lCQUhRLDhCQUE4QjthQUl4Qzs7OztZQWxCUSxZQUFZO1lBSVosYUFBYTtZQWRwQixpQkFBaUI7Ozs4QkE4QmhCLEtBQUs7Z0NBQ0wsS0FBSzsrQkFDTCxLQUFLOzs7O0lBRk4sMkNBQXFEOztJQUNyRCw2Q0FBdUQ7O0lBQ3ZELDRDQUFzRDs7SUFRdEQsc0NBQXVFOztJQUN2RSwyQ0FBd0I7O0lBQ3hCLGtDQUF1Qzs7Ozs7SUFPdkMsb0NBQXVDOzs7OztJQUUzQixxQ0FBK0I7Ozs7O0lBQUUsZ0NBQTJCOzs7OztJQUFFLCtCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuXHJcbmltcG9ydCB7IGVtcHR5SW1hZ2UgfSBmcm9tICcuL256LWVtcHR5LWNvbmZpZyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHNlbGVjdG9yOiAnbnotZW1wdHknLFxyXG4gIGV4cG9ydEFzOiAnbnpFbXB0eScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LWVtcHR5LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZXM6IFsnbnotZW1wdHkgeyBkaXNwbGF5OiBibG9jazsgfSddLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnYW50LWVtcHR5J1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56RW1wdHlDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBuek5vdEZvdW5kSW1hZ2U6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56Tm90Rm91bmRDb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuek5vdEZvdW5kRm9vdGVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgLy8gTk9URTogSXQgd291bGQgYmUgdmVyeSBoYWNrIHRvIHVzZSBgQ29udGVudENoaWxkYCwgYmVjYXVzZSBBbmd1bGFyIGNvdWxkXHJcbiAgLy8gdGVsbCBpZiB1c2VyIGFjdHVhbGx5IHBhc3Mgc29tZXRoaW5nIHRvIDxuZy1jb250ZW50Pi5cclxuICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzEyNTMwLlxyXG4gIC8vIEkgY2FuIHVzZSBhIGRpcmVjdGl2ZSBidXQgdGhpcyB3b3VsZCBleHBvc2UgdGhlIG5hbWUgYGZvb3RlcmAuXHJcbiAgLy8gQENvbnRlbnRDaGlsZChUZW1wbGF0ZVJlZiwge3N0YXRpYzogZmFsc2V9KSBuek5vdEZvdW5kRm9vdGVyOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgZGVmYXVsdFN2ZyA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybChlbXB0eUltYWdlKTtcclxuICBpc0NvbnRlbnRTdHJpbmcgPSBmYWxzZTtcclxuICBsb2NhbGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcclxuXHJcbiAgZ2V0IHNob3VsZFJlbmRlckNvbnRlbnQoKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5uek5vdEZvdW5kQ29udGVudDtcclxuICAgIHJldHVybiAhIShjb250ZW50IHx8IHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplciwgcHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgbnpOb3RGb3VuZENvbnRlbnQgfSA9IGNoYW5nZXM7XHJcbiAgICBpZiAobnpOb3RGb3VuZENvbnRlbnQpIHtcclxuICAgICAgdGhpcy5pc0NvbnRlbnRTdHJpbmcgPSB0eXBlb2YgbnpOb3RGb3VuZENvbnRlbnQuY3VycmVudFZhbHVlID09PSAnc3RyaW5nJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnRW1wdHknKTtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==