/**
 * @fileoverview added by tsickle
 * Generated from: nz-timeline.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ContentChildren, ElementRef, Input, QueryList, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { reverseChildNodes } from 'ng-zorro-antd/core';
import { NzTimelineItemComponent } from './nz-timeline-item.component';
export class NzTimelineComponent {
    /**
     * @param {?} cdr
     * @param {?} platform
     */
    constructor(cdr, platform) {
        this.cdr = cdr;
        this.platform = platform;
        this.nzReverse = false;
        this.isPendingBoolean = false;
        this.destroy$ = new Subject();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const modeChanges = changes.nzMode;
        /** @type {?} */
        const reverseChanges = changes.nzReverse;
        /** @type {?} */
        const pendingChanges = changes.nzPending;
        if (modeChanges && (modeChanges.previousValue !== modeChanges.currentValue || modeChanges.isFirstChange())) {
            this.updateChildren();
        }
        if (reverseChanges &&
            reverseChanges.previousValue !== reverseChanges.currentValue &&
            !reverseChanges.isFirstChange()) {
            this.reverseChildTimelineDots();
        }
        if (pendingChanges) {
            this.isPendingBoolean = pendingChanges.currentValue === true;
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.updateChildren();
        if (this.listOfTimeLine) {
            this.listOfTimeLine.changes.pipe(takeUntil(this.destroy$)).subscribe((/**
             * @return {?}
             */
            () => {
                this.updateChildren();
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @private
     * @return {?}
     */
    updateChildren() {
        if (this.listOfTimeLine && this.listOfTimeLine.length) {
            /** @type {?} */
            const length = this.listOfTimeLine.length;
            this.listOfTimeLine.toArray().forEach((/**
             * @param {?} item
             * @param {?} index
             * @return {?}
             */
            (item, index) => {
                item.isLast = !this.nzReverse ? index === length - 1 : index === 0;
                item.position =
                    this.nzMode === 'left' || !this.nzMode
                        ? undefined
                        : this.nzMode === 'right'
                            ? 'right'
                            : this.nzMode === 'alternate' && index % 2 === 0
                                ? 'left'
                                : 'right';
                item.detectChanges();
            }));
            this.cdr.markForCheck();
        }
    }
    /**
     * @private
     * @return {?}
     */
    reverseChildTimelineDots() {
        if (this.platform.isBrowser) {
            reverseChildNodes((/** @type {?} */ (this.timeline.nativeElement)));
            this.updateChildren();
        }
    }
}
NzTimelineComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                selector: 'nz-timeline',
                exportAs: 'nzTimeline',
                template: "<ul\r\n  class=\"ant-timeline\"\r\n  [class.ant-timeline-right]=\"nzMode === 'right'\"\r\n  [class.ant-timeline-alternate]=\"nzMode === 'alternate'\"\r\n  [class.ant-timeline-pending]=\"!!nzPending\"\r\n  [class.ant-timeline-reverse]=\"nzReverse\"\r\n  #timeline>\r\n  <!-- User inserted timeline dots. -->\r\n  <ng-content></ng-content>\r\n  <!-- Pending dot. -->\r\n  <li *ngIf=\"nzPending\" class=\"ant-timeline-item ant-timeline-item-pending\">\r\n    <div class=\"ant-timeline-item-tail\"></div>\r\n    <div class=\"ant-timeline-item-head ant-timeline-item-head-custom ant-timeline-item-head-blue\">\r\n      <ng-container *nzStringTemplateOutlet=\"nzPendingDot\">\r\n        {{ nzPendingDot }}<i *ngIf=\"!nzPendingDot\" nz-icon nzType=\"loading\"></i>\r\n      </ng-container>\r\n    </div>\r\n    <div class=\"ant-timeline-item-content\">\r\n      <ng-container *nzStringTemplateOutlet=\"nzPending\">\r\n        {{ isPendingBoolean ? '' : nzPending }}\r\n      </ng-container>\r\n    </div>\r\n  </li>\r\n</ul>\r\n"
            }] }
];
/** @nocollapse */
NzTimelineComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: Platform }
];
NzTimelineComponent.propDecorators = {
    timeline: [{ type: ViewChild, args: ['timeline', { static: false },] }],
    listOfTimeLine: [{ type: ContentChildren, args: [NzTimelineItemComponent,] }],
    _pendingContent: [{ type: ContentChild, args: ['pending', { static: false },] }],
    nzMode: [{ type: Input }],
    nzPending: [{ type: Input }],
    nzPendingDot: [{ type: Input }],
    nzReverse: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NzTimelineComponent.prototype.timeline;
    /** @type {?} */
    NzTimelineComponent.prototype.listOfTimeLine;
    /** @type {?} */
    NzTimelineComponent.prototype._pendingContent;
    /** @type {?} */
    NzTimelineComponent.prototype.nzMode;
    /** @type {?} */
    NzTimelineComponent.prototype.nzPending;
    /** @type {?} */
    NzTimelineComponent.prototype.nzPendingDot;
    /** @type {?} */
    NzTimelineComponent.prototype.nzReverse;
    /** @type {?} */
    NzTimelineComponent.prototype.isPendingBoolean;
    /**
     * @type {?}
     * @private
     */
    NzTimelineComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzTimelineComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzTimelineComponent.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGltZWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90aW1lbGluZS8iLCJzb3VyY2VzIjpbIm56LXRpbWVsaW5lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixlQUFlLEVBQ2YsVUFBVSxFQUNWLEtBQUssRUFHTCxTQUFTLEVBRVQsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdkQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFZdkUsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7SUFjOUIsWUFBb0IsR0FBc0IsRUFBVSxRQUFrQjtRQUFsRCxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7UUFON0QsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUVwQyxxQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFFMUIsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7SUFFa0MsQ0FBQzs7Ozs7SUFFMUUsV0FBVyxDQUFDLE9BQXNCOztjQUMxQixXQUFXLEdBQUcsT0FBTyxDQUFDLE1BQU07O2NBQzVCLGNBQWMsR0FBRyxPQUFPLENBQUMsU0FBUzs7Y0FDbEMsY0FBYyxHQUFHLE9BQU8sQ0FBQyxTQUFTO1FBRXhDLElBQUksV0FBVyxJQUFJLENBQUMsV0FBVyxDQUFDLGFB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QUFFLEtBQUssRUFBRTs2QkFDdkMsZUFBZSxTQUFDLHVCQUF1Qjs4QkFDdkMsWUFBWSxTQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7cUJBRXpDLEtBQUs7d0JBQ0wsS0FBSzsyQkFDTCxLQUFLO3dCQUNMLEtBQUs7Ozs7SUFQTix1Q0FBNEU7O0lBQzVFLDZDQUE2Rjs7SUFDN0YsOENBQStFOztJQUUvRSxxQ0FBZ0M7O0lBQ2hDLHdDQUF5RDs7SUFDekQsMkNBQWtEOztJQUNsRCx3Q0FBb0M7O0lBRXBDLCtDQUFrQzs7Ozs7SUFFbEMsdUNBQXVDOzs7OztJQUUzQixrQ0FBOEI7Ozs7O0lBQUUsdUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgcmV2ZXJzZUNoaWxkTm9kZXMgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpUaW1lbGluZUl0ZW1Db21wb25lbnQgfSBmcm9tICcuL256LXRpbWVsaW5lLWl0ZW0uY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCB0eXBlIE56VGltZWxpbmVNb2RlID0gJ2xlZnQnIHwgJ2FsdGVybmF0ZScgfCAncmlnaHQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBzZWxlY3RvcjogJ256LXRpbWVsaW5lJyxcclxuICBleHBvcnRBczogJ256VGltZWxpbmUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei10aW1lbGluZS5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE56VGltZWxpbmVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgQFZpZXdDaGlsZCgndGltZWxpbmUnLCB7IHN0YXRpYzogZmFsc2UgfSkgdGltZWxpbmU6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oTnpUaW1lbGluZUl0ZW1Db21wb25lbnQpIGxpc3RPZlRpbWVMaW5lOiBRdWVyeUxpc3Q8TnpUaW1lbGluZUl0ZW1Db21wb25lbnQ+O1xyXG4gIEBDb250ZW50Q2hpbGQoJ3BlbmRpbmcnLCB7IHN0YXRpYzogZmFsc2UgfSkgX3BlbmRpbmdDb250ZW50OiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgQElucHV0KCkgbnpNb2RlOiBOelRpbWVsaW5lTW9kZTtcclxuICBASW5wdXQoKSBuelBlbmRpbmc6IHN0cmluZyB8IGJvb2xlYW4gfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuelBlbmRpbmdEb3Q6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56UmV2ZXJzZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBpc1BlbmRpbmdCb29sZWFuOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBjb25zdCBtb2RlQ2hhbmdlcyA9IGNoYW5nZXMubnpNb2RlO1xyXG4gICAgY29uc3QgcmV2ZXJzZUNoYW5nZXMgPSBjaGFuZ2VzLm56UmV2ZXJzZTtcclxuICAgIGNvbnN0IHBlbmRpbmdDaGFuZ2VzID0gY2hhbmdlcy5uelBlbmRpbmc7XHJcblxyXG4gICAgaWYgKG1vZGVDaGFuZ2VzICYmIChtb2RlQ2hhbmdlcy5wcmV2aW91c1ZhbHVlICE9PSBtb2RlQ2hhbmdlcy5jdXJyZW50VmFsdWUgfHwgbW9kZUNoYW5nZXMuaXNGaXJzdENoYW5nZSgpKSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoXHJcbiAgICAgIHJldmVyc2VDaGFuZ2VzICYmXHJcbiAgICAgIHJldmVyc2VDaGFuZ2VzLnByZXZpb3VzVmFsdWUgIT09IHJldmVyc2VDaGFuZ2VzLmN1cnJlbnRWYWx1ZSAmJlxyXG4gICAgICAhcmV2ZXJzZUNoYW5nZXMuaXNGaXJzdENoYW5nZSgpXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5yZXZlcnNlQ2hpbGRUaW1lbGluZURvdHMoKTtcclxuICAgIH1cclxuICAgIGlmIChwZW5kaW5nQ2hhbmdlcykge1xyXG4gICAgICB0aGlzLmlzUGVuZGluZ0Jvb2xlYW4gPSBwZW5kaW5nQ2hhbmdlcy5jdXJyZW50VmFsdWUgPT09IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuKCk7XHJcbiAgICBpZiAodGhpcy5saXN0T2ZUaW1lTGluZSkge1xyXG4gICAgICB0aGlzLmxpc3RPZlRpbWVMaW5lLmNoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDaGlsZHJlbigpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZUNoaWxkcmVuKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubGlzdE9mVGltZUxpbmUgJiYgdGhpcy5saXN0T2ZUaW1lTGluZS5sZW5ndGgpIHtcclxuICAgICAgY29uc3QgbGVuZ3RoID0gdGhpcy5saXN0T2ZUaW1lTGluZS5sZW5ndGg7XHJcbiAgICAgIHRoaXMubGlzdE9mVGltZUxpbmUudG9BcnJheSgpLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaXRlbS5pc0xhc3QgPSAhdGhpcy5uelJldmVyc2UgPyBpbmRleCA9PT0gbGVuZ3RoIC0gMSA6IGluZGV4ID09PSAwO1xyXG4gICAgICAgIGl0ZW0ucG9zaXRpb24gPVxyXG4gICAgICAgICAgdGhpcy5uek1vZGUgPT09ICdsZWZ0JyB8fCAhdGhpcy5uek1vZGVcclxuICAgICAgICAgICAgPyB1bmRlZmluZWRcclxuICAgICAgICAgICAgOiB0aGlzLm56TW9kZSA9PT0gJ3JpZ2h0J1xyXG4gICAgICAgICAgICA/ICdyaWdodCdcclxuICAgICAgICAgICAgOiB0aGlzLm56TW9kZSA9PT0gJ2FsdGVybmF0ZScgJiYgaW5kZXggJSAyID09PSAwXHJcbiAgICAgICAgICAgID8gJ2xlZnQnXHJcbiAgICAgICAgICAgIDogJ3JpZ2h0JztcclxuICAgICAgICBpdGVtLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZXZlcnNlQ2hpbGRUaW1lbGluZURvdHMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgcmV2ZXJzZUNoaWxkTm9kZXModGhpcy50aW1lbGluZS5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KTtcclxuICAgICAgdGhpcy51cGRhdGVDaGlsZHJlbigpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=