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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { InputBoolean, InputNumber, NzConfigService, WithConfig } from 'ng-zorro-antd/core';
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'spin';
export class NzSpinComponent {
    /**
     * @param {?} nzConfigService
     * @param {?} cdr
     */
    constructor(nzConfigService, cdr) {
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.nzSize = 'default';
        this.nzDelay = 0;
        this.nzSimple = false;
        this.nzSpinning = true;
        this.loading = true;
        this.destroy$ = new Subject();
        this.spinning$ = new BehaviorSubject(this.nzSpinning);
        this.loading$ = this.spinning$.pipe(debounceTime(this.nzDelay));
    }
    /**
     * @return {?}
     */
    subscribeLoading() {
        this.unsubscribeLoading();
        this.loading_ = this.loading$.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.loading = data;
            this.cdr.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    unsubscribeLoading() {
        if (this.loading_) {
            this.loading_.unsubscribe();
            this.loading_ = null;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.subscribeLoading();
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => this.cdr.markForCheck()));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzSpinning) {
            if (changes.nzSpinning.isFirstChange()) {
                this.loading = this.nzSpinning;
            }
            this.spinning$.next(this.nzSpinning);
        }
        if (changes.nzDelay) {
            this.loading$ = this.spinning$.pipe(debounceTime(this.nzDelay));
            this.subscribeLoading();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.unsubscribeLoading();
    }
}
NzSpinComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-spin',
                exportAs: 'nzSpin',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "<ng-template #defaultIndicatorTemplate>\r\n  <span class=\"ant-spin-dot\" [class.ant-spin-dot-spin]=\"loading\">\r\n    <i class=\"ant-spin-dot-item\"></i><i class=\"ant-spin-dot-item\"></i><i class=\"ant-spin-dot-item\"></i><i class=\"ant-spin-dot-item\"></i>\r\n  </span>\r\n</ng-template>\r\n<div *ngIf=\"loading\">\r\n  <div class=\"ant-spin\"\r\n    [class.ant-spin-spinning]=\"loading\"\r\n    [class.ant-spin-lg]=\"nzSize === 'large'\"\r\n    [class.ant-spin-sm]=\"nzSize === 'small'\"\r\n    [class.ant-spin-show-text]=\"nzTip\">\r\n    <ng-template [ngTemplateOutlet]=\"nzIndicator || defaultIndicatorTemplate\"></ng-template>\r\n    <div class=\"ant-spin-text\" *ngIf=\"nzTip\">{{ nzTip }}</div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"!nzSimple\"\r\n  class=\"ant-spin-container\"\r\n  [class.ant-spin-blur]=\"loading\">\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                host: {
                    '[class.ant-spin-nested-loading]': '!nzSimple'
                },
                styles: [`
      nz-spin {
        display: block;
      }
    `]
            }] }
];
/** @nocollapse */
NzSpinComponent.ctorParameters = () => [
    { type: NzConfigService },
    { type: ChangeDetectorRef }
];
NzSpinComponent.propDecorators = {
    nzIndicator: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzTip: [{ type: Input }],
    nzDelay: [{ type: Input }],
    nzSimple: [{ type: Input }],
    nzSpinning: [{ type: Input }]
};
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME),
    tslib_1.__metadata("design:type", TemplateRef)
], NzSpinComponent.prototype, "nzIndicator", void 0);
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Object)
], NzSpinComponent.prototype, "nzDelay", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzSpinComponent.prototype, "nzSimple", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzSpinComponent.prototype, "nzSpinning", void 0);
if (false) {
    /** @type {?} */
    NzSpinComponent.prototype.nzIndicator;
    /** @type {?} */
    NzSpinComponent.prototype.nzSize;
    /** @type {?} */
    NzSpinComponent.prototype.nzTip;
    /** @type {?} */
    NzSpinComponent.prototype.nzDelay;
    /** @type {?} */
    NzSpinComponent.prototype.nzSimple;
    /** @type {?} */
    NzSpinComponent.prototype.nzSpinning;
    /** @type {?} */
    NzSpinComponent.prototype.loading;
    /**
     * @type {?}
     * @private
     */
    NzSpinComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzSpinComponent.prototype.spinning$;
    /**
     * @type {?}
     * @private
     */
    NzSpinComponent.prototype.loading$;
    /**
     * @type {?}
     * @private
     */
    NzSpinComponent.prototype.loading_;
    /** @type {?} */
    NzSpinComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzSpinComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3Bpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3NwaW4vIiwic291cmNlcyI6WyJuei1zcGluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsS0FBSyxFQUtMLFdBQVcsRUFDWCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBYyxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekQsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFpQixVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7TUFFckcsd0JBQXdCLEdBQUcsTUFBTTtBQW9CdkMsTUFBTSxPQUFPLGVBQWU7Ozs7O0lBNEIxQixZQUFtQixlQUFnQyxFQUFVLEdBQXNCO1FBQWhFLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBMUIxRSxXQUFNLEdBQWtCLFNBQVMsQ0FBQztRQUVuQixZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQzNDLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDUCxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUMvQixjQUFTLEdBQUcsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pELGFBQVEsR0FBd0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBa0JGLENBQUM7Ozs7SUFmdkYsZ0JBQWdC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IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIsIE56Q29uZmlnU2VydmljZSwgTnpTaXplTERTVHlwZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAnc3Bpbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LXNwaW4nLFxyXG4gIGV4cG9ydEFzOiAnbnpTcGluJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1zcGluLmNvbXBvbmVudC5odG1sJyxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC1zcGluLW5lc3RlZC1sb2FkaW5nXSc6ICchbnpTaW1wbGUnXHJcbiAgfSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgbnotc3BpbiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelNwaW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0IHtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpIG56SW5kaWNhdG9yOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuelNpemU6IE56U2l6ZUxEU1R5cGUgPSAnZGVmYXVsdCc7XHJcbiAgQElucHV0KCkgbnpUaXA6IHN0cmluZztcclxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBuekRlbGF5ID0gMDtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaW1wbGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTcGlubmluZyA9IHRydWU7XHJcbiAgbG9hZGluZyA9IHRydWU7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgcHJpdmF0ZSBzcGlubmluZyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRoaXMubnpTcGlubmluZyk7XHJcbiAgcHJpdmF0ZSBsb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMuc3Bpbm5pbmckLnBpcGUoZGVib3VuY2VUaW1lKHRoaXMubnpEZWxheSkpO1xyXG4gIHByaXZhdGUgbG9hZGluZ186IFN1YnNjcmlwdGlvbiB8IG51bGw7XHJcblxyXG4gIHN1YnNjcmliZUxvYWRpbmcoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVuc3Vic2NyaWJlTG9hZGluZygpO1xyXG4gICAgdGhpcy5sb2FkaW5nXyA9IHRoaXMubG9hZGluZyQuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICB0aGlzLmxvYWRpbmcgPSBkYXRhO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdW5zdWJzY3JpYmVMb2FkaW5nKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubG9hZGluZ18pIHtcclxuICAgICAgdGhpcy5sb2FkaW5nXy51bnN1YnNjcmliZSgpO1xyXG4gICAgICB0aGlzLmxvYWRpbmdfID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc3Vic2NyaWJlTG9hZGluZygpO1xyXG5cclxuICAgIHRoaXMubnpDb25maWdTZXJ2aWNlXHJcbiAgICAgIC5nZXRDb25maWdDaGFuZ2VFdmVudEZvckNvbXBvbmVudChOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5uelNwaW5uaW5nKSB7XHJcbiAgICAgIGlmIChjaGFuZ2VzLm56U3Bpbm5pbmcuaXNGaXJzdENoYW5nZSgpKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdGhpcy5uelNwaW5uaW5nO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc3Bpbm5pbmckLm5leHQodGhpcy5uelNwaW5uaW5nKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLm56RGVsYXkpIHtcclxuICAgICAgdGhpcy5sb2FkaW5nJCA9IHRoaXMuc3Bpbm5pbmckLnBpcGUoZGVib3VuY2VUaW1lKHRoaXMubnpEZWxheSkpO1xyXG4gICAgICB0aGlzLnN1YnNjcmliZUxvYWRpbmcoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgICB0aGlzLnVuc3Vic2NyaWJlTG9hZGluZygpO1xyXG4gIH1cclxufVxyXG4iXX0=