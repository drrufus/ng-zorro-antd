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
import { MediaMatcher } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, Input, QueryList, ViewEncapsulation } from '@angular/core';
import { merge, Subject } from 'rxjs';
import { auditTime, finalize, startWith, switchMap, takeUntil } from 'rxjs/operators';
import { responsiveMap, warn, InputBoolean, NzBreakpoint, NzConfigService, NzDomEventService, WithConfig } from 'ng-zorro-antd/core';
import { NzDescriptionsItemComponent } from './nz-descriptions-item.component';
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'descriptions';
/** @type {?} */
const defaultColumnMap = {
    xxl: 3,
    xl: 3,
    lg: 3,
    md: 3,
    sm: 2,
    xs: 1
};
export class NzDescriptionsComponent {
    /**
     * @param {?} nzConfigService
     * @param {?} cdr
     * @param {?} mediaMatcher
     * @param {?} platform
     * @param {?} nzDomEventService
     */
    constructor(nzConfigService, cdr, mediaMatcher, platform, nzDomEventService) {
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.mediaMatcher = mediaMatcher;
        this.platform = platform;
        this.nzDomEventService = nzDomEventService;
        this.nzLayout = 'horizontal';
        this.nzTitle = '';
        this.itemMatrix = [];
        this.realColumn = 3;
        this.destroy$ = new Subject();
        this.resize$ = new Subject();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzColumn) {
            this.resize$.next();
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        /** @type {?} */
        const contentChange$ = this.items.changes.pipe(startWith(this.items), takeUntil(this.destroy$));
        merge(contentChange$, contentChange$.pipe(switchMap((/**
         * @return {?}
         */
        () => merge(...this.items.map((/**
         * @param {?} i
         * @return {?}
         */
        i => i.inputChange$))).pipe(auditTime(16))))), this.resize$)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.prepareMatrix();
            this.cdr.markForCheck();
        }));
        if (this.platform.isBrowser) {
            this.nzDomEventService
                .registerResizeListener()
                .pipe(takeUntil(this.destroy$), finalize((/**
             * @return {?}
             */
            () => this.nzDomEventService.unregisterResizeListener())))
                .subscribe((/**
             * @return {?}
             */
            () => this.resize$.next()));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.resize$.complete();
    }
    /**
     * Prepare the render matrix according to description items' spans.
     * @private
     * @return {?}
     */
    prepareMatrix() {
        /** @type {?} */
        let currentRow = [];
        /** @type {?} */
        let width = 0;
        /** @type {?} */
        const column = (this.realColumn = this.getColumn());
        /** @type {?} */
        const items = this.items.toArray();
        /** @type {?} */
        const length = items.length;
        /** @type {?} */
        const matrix = [];
        /** @type {?} */
        const flushRow = (/**
         * @return {?}
         */
        () => {
            matrix.push(currentRow);
            currentRow = [];
            width = 0;
        });
        for (let i = 0; i < length; i++) {
            /** @type {?} */
            const item = items[i];
            const { nzTitle: title, content, nzSpan: span } = item;
            width += span;
            // If the last item make the row's length exceeds `nzColumn`, the last
            // item should take all the space left. This logic is implemented in the template.
            // Warn user about that.
            if (width >= column) {
                if (width > column) {
                    warn(`"nzColumn" is ${column} but we have row length ${width}`);
                }
                currentRow.push({ title, content, span: column - (width - span) });
                flushRow();
            }
            else if (i === length - 1) {
                currentRow.push({ title, content, span: column - (width - span) });
                flushRow();
            }
            else {
                currentRow.push({ title, content, span });
            }
        }
        this.itemMatrix = matrix;
    }
    /**
     * @private
     * @return {?}
     */
    matchMedia() {
        /** @type {?} */
        let bp = NzBreakpoint.md;
        Object.keys(responsiveMap).map((/**
         * @param {?} breakpoint
         * @return {?}
         */
        (breakpoint) => {
            /** @type {?} */
            const castBP = (/** @type {?} */ (breakpoint));
            /** @type {?} */
            const matchBelow = this.mediaMatcher.matchMedia(responsiveMap[castBP]).matches;
            if (matchBelow) {
                bp = castBP;
            }
        }));
        return bp;
    }
    /**
     * @private
     * @return {?}
     */
    getColumn() {
        if (typeof this.nzColumn !== 'number') {
            return this.nzColumn[this.matchMedia()];
        }
        return this.nzColumn;
    }
}
NzDescriptionsComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-descriptions',
                template: "<div *ngIf=\"nzTitle\"\r\n     class=\"ant-descriptions-title\">\r\n  <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\r\n</div>\r\n<div class=\"ant-descriptions-view\">\r\n  <table>\r\n    <tbody>\r\n      <ng-container *ngIf=\"nzLayout === 'horizontal'\">\r\n        <tr class=\"ant-descriptions-row\"\r\n            *ngFor=\"let row of itemMatrix; let i = index\">\r\n          <ng-container *ngFor=\"let item of row; let isLast = last\">\r\n            <!-- Horizontal & NOT Bordered -->\r\n            <ng-container *ngIf=\"!nzBordered\">\r\n              <td class=\"ant-descriptions-item\"\r\n                  [colSpan]=\"item.span\">\r\n                <span class=\"ant-descriptions-item-label\"\r\n                      [class.ant-descriptions-item-colon]=\"nzColon\">{{ item.title }}</span>\r\n                <span class=\"ant-descriptions-item-content\">\r\n                  <ng-template [ngTemplateOutlet]=\"item.content\"></ng-template>\r\n                </span>\r\n              </td>\r\n            </ng-container>\r\n            <!-- Horizontal & Bordered -->\r\n            <ng-container *ngIf=\"nzBordered\">\r\n              <td class=\"ant-descriptions-item-label\"\r\n                  *nzStringTemplateOutlet=\"item.title\">{{ item.title }}</td>\r\n              <td class=\"ant-descriptions-item-content\"\r\n                  [colSpan]=\"item.span * 2 - 1\">\r\n                <ng-template [ngTemplateOutlet]=\"item.content\"></ng-template>\r\n              </td>\r\n            </ng-container>\r\n          </ng-container>\r\n        </tr>\r\n      </ng-container>\r\n\r\n      <ng-container *ngIf=\"nzLayout === 'vertical'\">\r\n        <!-- Vertical & NOT Bordered -->\r\n        <ng-container *ngIf=\"!nzBordered\">\r\n          <ng-container *ngFor=\"let row of itemMatrix; let i = index\">\r\n            <tr class=\"ant-descriptions-row\">\r\n              <ng-container *ngFor=\"let item of row; let isLast = last\">\r\n                <td class=\"ant-descriptions-item\"\r\n                    [colSpan]=\"item.span\">\r\n                  <span class=\"ant-descriptions-item-label\"\r\n                        [class.ant-descriptions-item-colon]=\"nzColon\">{{ item.title }}</span>\r\n                </td>\r\n              </ng-container>\r\n            </tr>\r\n            <tr class=\"ant-descriptions-row\">\r\n              <ng-container *ngFor=\"let item of row; let isLast = last\">\r\n                <td class=\"ant-descriptions-item\"\r\n                    [colSpan]=\"item.span\">\r\n                  <span class=\"ant-descriptions-item-content\">\r\n                    <ng-template [ngTemplateOutlet]=\"item.content\"></ng-template>\r\n                  </span>\r\n                </td>\r\n              </ng-container>\r\n            </tr>\r\n          </ng-container>\r\n        </ng-container>\r\n        <!-- Vertical & Bordered -->\r\n        <ng-container *ngIf=\"nzBordered\">\r\n          <ng-container *ngFor=\"let row of itemMatrix; let i = index\">\r\n            <tr class=\"ant-descriptions-row\">\r\n              <ng-container *ngFor=\"let item of row; let isLast = last\">\r\n                <td class=\"ant-descriptions-item-label\"\r\n                    [colSpan]=\"item.span\">\r\n                  {{ item.title }}\r\n                </td>\r\n              </ng-container>\r\n            </tr>\r\n            <tr class=\"ant-descriptions-row\">\r\n              <ng-container *ngFor=\"let item of row; let isLast = last\">\r\n                <td class=\"ant-descriptions-item-content\"\r\n                    [colSpan]=\"item.span\">\r\n                  <ng-template [ngTemplateOutlet]=\"item.content\"></ng-template>\r\n                </td>\r\n              </ng-container>\r\n            </tr>\r\n          </ng-container>\r\n        </ng-container>\r\n      </ng-container>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n",
                exportAs: 'nzDescriptions',
                preserveWhitespaces: false,
                host: {
                    class: 'ant-descriptions',
                    '[class.ant-descriptions-bordered]': 'nzBordered',
                    '[class.ant-descriptions-middle]': 'nzSize === "middle"',
                    '[class.ant-descriptions-small]': 'nzSize === "small"'
                },
                styles: [`
      nz-descriptions {
        display: block;
      }
    `]
            }] }
];
/** @nocollapse */
NzDescriptionsComponent.ctorParameters = () => [
    { type: NzConfigService },
    { type: ChangeDetectorRef },
    { type: MediaMatcher },
    { type: Platform },
    { type: NzDomEventService }
];
NzDescriptionsComponent.propDecorators = {
    items: [{ type: ContentChildren, args: [NzDescriptionsItemComponent,] }],
    nzBordered: [{ type: Input }],
    nzLayout: [{ type: Input }],
    nzColumn: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzTitle: [{ type: Input }],
    nzColon: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(), WithConfig(NZ_CONFIG_COMPONENT_NAME, false),
    tslib_1.__metadata("design:type", Boolean)
], NzDescriptionsComponent.prototype, "nzBordered", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, defaultColumnMap),
    tslib_1.__metadata("design:type", Object)
], NzDescriptionsComponent.prototype, "nzColumn", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default'),
    tslib_1.__metadata("design:type", String)
], NzDescriptionsComponent.prototype, "nzSize", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, true), InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzDescriptionsComponent.prototype, "nzColon", void 0);
if (false) {
    /** @type {?} */
    NzDescriptionsComponent.prototype.items;
    /** @type {?} */
    NzDescriptionsComponent.prototype.nzBordered;
    /** @type {?} */
    NzDescriptionsComponent.prototype.nzLayout;
    /** @type {?} */
    NzDescriptionsComponent.prototype.nzColumn;
    /** @type {?} */
    NzDescriptionsComponent.prototype.nzSize;
    /** @type {?} */
    NzDescriptionsComponent.prototype.nzTitle;
    /** @type {?} */
    NzDescriptionsComponent.prototype.nzColon;
    /** @type {?} */
    NzDescriptionsComponent.prototype.itemMatrix;
    /** @type {?} */
    NzDescriptionsComponent.prototype.realColumn;
    /**
     * @type {?}
     * @private
     */
    NzDescriptionsComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzDescriptionsComponent.prototype.resize$;
    /** @type {?} */
    NzDescriptionsComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzDescriptionsComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzDescriptionsComponent.prototype.mediaMatcher;
    /**
     * @type {?}
     * @private
     */
    NzDescriptionsComponent.prototype.platform;
    /**
     * @type {?}
     * @private
     */
    NzDescriptionsComponent.prototype.nzDomEventService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZGVzY3JpcHRpb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZGVzY3JpcHRpb25zLyIsInNvdXJjZXMiOlsibnotZGVzY3JpcHRpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsS0FBSyxFQUdMLFNBQVMsRUFHVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RixPQUFPLEVBQ0wsYUFBYSxFQUNiLElBQUksRUFDSixZQUFZLEVBQ1osWUFBWSxFQUNaLGVBQWUsRUFDZixpQkFBaUIsRUFDakIsVUFBVSxFQUNYLE1BQU0sb0JBQW9CLENBQUM7QUFFNUIsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7O01BRXpFLHdCQUF3QixHQUFHLGNBQWM7O01BQ3pDLGdCQUFnQixHQUFzQztJQUMxRCxHQUFHLEVBQUUsQ0FBQztJQUNOLEVBQUUsRUFBRSxDQUFDO0lBQ0wsRUFBRSxFQUFFLENBQUM7SUFDTCxFQUFFLEVBQUUsQ0FBQztJQUNMLEVBQUUsRUFBRSxDQUFDO0lBQ0wsRUFBRSxFQUFFLENBQUM7Q0FDTjtBQXVCRCxNQUFNLE9BQU8sdUJBQXVCOzs7Ozs7OztJQWlCbEMsWUFDUyxlQUFnQyxFQUMvQixHQUFzQixFQUN0QixZQUEwQixF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QUs7c0JBQ0wsS0FBSztzQkFDTCxLQUFLOztBQUxnRTtJQUE1RCxZQUFZLEVBQUUsRUFBRSxVQUFVLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxDQUFDOzsyREFBcUI7QUFFekI7SUFBdkQsVUFBVSxDQUFDLHdCQUF3QixFQUFFLGdCQUFnQixDQUFDOzt5REFBc0Q7QUFDNUQ7SUFBaEQsVUFBVSxDQUFDLHdCQUF3QixFQUFFLFNBQVMsQ0FBQzs7dURBQTRCO0FBRWhCO0lBQTNELFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLENBQUMsRUFBRSxZQUFZLEVBQUU7O3dEQUFrQjs7O0lBUHRGLHdDQUE0Rjs7SUFFNUYsNkNBQTBGOztJQUMxRiwyQ0FBdUQ7O0lBQ3ZELDJDQUFzSDs7SUFDdEgseUNBQXFGOztJQUNyRiwwQ0FBa0Q7O0lBQ2xELDBDQUFzRjs7SUFFdEYsNkNBQW1EOztJQUVuRCw2Q0FBZTs7Ozs7SUFFZiwyQ0FBdUM7Ozs7O0lBQ3ZDLDBDQUFzQzs7SUFHcEMsa0RBQXVDOzs7OztJQUN2QyxzQ0FBOEI7Ozs7O0lBQzlCLCtDQUFrQzs7Ozs7SUFDbEMsMkNBQTBCOzs7OztJQUMxQixvREFBNEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IE1lZGlhTWF0Y2hlciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9sYXlvdXQnO1xyXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgbWVyZ2UsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgYXVkaXRUaW1lLCBmaW5hbGl6ZSwgc3RhcnRXaXRoLCBzd2l0Y2hNYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgcmVzcG9uc2l2ZU1hcCxcclxuICB3YXJuLFxyXG4gIElucHV0Qm9vbGVhbixcclxuICBOekJyZWFrcG9pbnQsXHJcbiAgTnpDb25maWdTZXJ2aWNlLFxyXG4gIE56RG9tRXZlbnRTZXJ2aWNlLFxyXG4gIFdpdGhDb25maWdcclxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOekRlc2NyaXB0aW9uc0l0ZW1SZW5kZXJQcm9wcywgTnpEZXNjcmlwdGlvbnNMYXlvdXQsIE56RGVzY3JpcHRpb25zU2l6ZSB9IGZyb20gJy4vbnotZGVzY3JpcHRpb25zLWRlZmluaXRpb25zJztcclxuaW1wb3J0IHsgTnpEZXNjcmlwdGlvbnNJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9uei1kZXNjcmlwdGlvbnMtaXRlbS5jb21wb25lbnQnO1xyXG5cclxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ2Rlc2NyaXB0aW9ucyc7XHJcbmNvbnN0IGRlZmF1bHRDb2x1bW5NYXA6IHsgW2tleSBpbiBOekJyZWFrcG9pbnRdOiBudW1iZXIgfSA9IHtcclxuICB4eGw6IDMsXHJcbiAgeGw6IDMsXHJcbiAgbGc6IDMsXHJcbiAgbWQ6IDMsXHJcbiAgc206IDIsXHJcbiAgeHM6IDFcclxufTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc2VsZWN0b3I6ICduei1kZXNjcmlwdGlvbnMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1kZXNjcmlwdGlvbnMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGV4cG9ydEFzOiAnbnpEZXNjcmlwdGlvbnMnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnYW50LWRlc2NyaXB0aW9ucycsXHJcbiAgICAnW2NsYXNzLmFudC1kZXNjcmlwdGlvbnMtYm9yZGVyZWRdJzogJ256Qm9yZGVyZWQnLFxyXG4gICAgJ1tjbGFzcy5hbnQtZGVzY3JpcHRpb25zLW1pZGRsZV0nOiAnbnpTaXplID09PSBcIm1pZGRsZVwiJyxcclxuICAgICdbY2xhc3MuYW50LWRlc2NyaXB0aW9ucy1zbWFsbF0nOiAnbnpTaXplID09PSBcInNtYWxsXCInXHJcbiAgfSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgbnotZGVzY3JpcHRpb25zIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56RGVzY3JpcHRpb25zQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQge1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oTnpEZXNjcmlwdGlvbnNJdGVtQ29tcG9uZW50KSBpdGVtczogUXVlcnlMaXN0PE56RGVzY3JpcHRpb25zSXRlbUNvbXBvbmVudD47XHJcblxyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIGZhbHNlKSBuekJvcmRlcmVkOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIG56TGF5b3V0OiBOekRlc2NyaXB0aW9uc0xheW91dCA9ICdob3Jpem9udGFsJztcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIGRlZmF1bHRDb2x1bW5NYXApIG56Q29sdW1uOiBudW1iZXIgfCB7IFtrZXkgaW4gTnpCcmVha3BvaW50XTogbnVtYmVyIH07XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCAnZGVmYXVsdCcpIG56U2l6ZTogTnpEZXNjcmlwdGlvbnNTaXplO1xyXG4gIEBJbnB1dCgpIG56VGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+ID0gJyc7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCB0cnVlKSBASW5wdXRCb29sZWFuKCkgbnpDb2xvbjogYm9vbGVhbjtcclxuXHJcbiAgaXRlbU1hdHJpeDogTnpEZXNjcmlwdGlvbnNJdGVtUmVuZGVyUHJvcHNbXVtdID0gW107XHJcblxyXG4gIHJlYWxDb2x1bW4gPSAzO1xyXG5cclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBwcml2YXRlIHJlc2l6ZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgbWVkaWFNYXRjaGVyOiBNZWRpYU1hdGNoZXIsXHJcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcclxuICAgIHByaXZhdGUgbnpEb21FdmVudFNlcnZpY2U6IE56RG9tRXZlbnRTZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5uekNvbHVtbikge1xyXG4gICAgICB0aGlzLnJlc2l6ZSQubmV4dCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgY29uc3QgY29udGVudENoYW5nZSQgPSB0aGlzLml0ZW1zLmNoYW5nZXMucGlwZShcclxuICAgICAgc3RhcnRXaXRoKHRoaXMuaXRlbXMpLFxyXG4gICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcclxuICAgICk7XHJcblxyXG4gICAgbWVyZ2UoXHJcbiAgICAgIGNvbnRlbnRDaGFuZ2UkLFxyXG4gICAgICBjb250ZW50Q2hhbmdlJC5waXBlKHN3aXRjaE1hcCgoKSA9PiBtZXJnZSguLi50aGlzLml0ZW1zLm1hcChpID0+IGkuaW5wdXRDaGFuZ2UkKSkucGlwZShhdWRpdFRpbWUoMTYpKSkpLFxyXG4gICAgICB0aGlzLnJlc2l6ZSRcclxuICAgIClcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLnByZXBhcmVNYXRyaXgoKTtcclxuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgaWYgKHRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XHJcbiAgICAgIHRoaXMubnpEb21FdmVudFNlcnZpY2VcclxuICAgICAgICAucmVnaXN0ZXJSZXNpemVMaXN0ZW5lcigpXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXHJcbiAgICAgICAgICBmaW5hbGl6ZSgoKSA9PiB0aGlzLm56RG9tRXZlbnRTZXJ2aWNlLnVucmVnaXN0ZXJSZXNpemVMaXN0ZW5lcigpKVxyXG4gICAgICAgIClcclxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMucmVzaXplJC5uZXh0KCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICAgIHRoaXMucmVzaXplJC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUHJlcGFyZSB0aGUgcmVuZGVyIG1hdHJpeCBhY2NvcmRpbmcgdG8gZGVzY3JpcHRpb24gaXRlbXMnIHNwYW5zLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgcHJlcGFyZU1hdHJpeCgpOiB2b2lkIHtcclxuICAgIGxldCBjdXJyZW50Um93OiBOekRlc2NyaXB0aW9uc0l0ZW1SZW5kZXJQcm9wc1tdID0gW107XHJcbiAgICBsZXQgd2lkdGggPSAwO1xyXG5cclxuICAgIGNvbnN0IGNvbHVtbiA9ICh0aGlzLnJlYWxDb2x1bW4gPSB0aGlzLmdldENvbHVtbigpKTtcclxuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5pdGVtcy50b0FycmF5KCk7XHJcbiAgICBjb25zdCBsZW5ndGggPSBpdGVtcy5sZW5ndGg7XHJcbiAgICBjb25zdCBtYXRyaXg6IE56RGVzY3JpcHRpb25zSXRlbVJlbmRlclByb3BzW11bXSA9IFtdO1xyXG4gICAgY29uc3QgZmx1c2hSb3cgPSAoKSA9PiB7XHJcbiAgICAgIG1hdHJpeC5wdXNoKGN1cnJlbnRSb3cpO1xyXG4gICAgICBjdXJyZW50Um93ID0gW107XHJcbiAgICAgIHdpZHRoID0gMDtcclxuICAgIH07XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBpdGVtID0gaXRlbXNbaV07XHJcbiAgICAgIGNvbnN0IHsgbnpUaXRsZTogdGl0bGUsIGNvbnRlbnQsIG56U3Bhbjogc3BhbiB9ID0gaXRlbTtcclxuXHJcbiAgICAgIHdpZHRoICs9IHNwYW47XHJcblxyXG4gICAgICAvLyBJZiB0aGUgbGFzdCBpdGVtIG1ha2UgdGhlIHJvdydzIGxlbmd0aCBleGNlZWRzIGBuekNvbHVtbmAsIHRoZSBsYXN0XHJcbiAgICAgIC8vIGl0ZW0gc2hvdWxkIHRha2UgYWxsIHRoZSBzcGFjZSBsZWZ0LiBUaGlzIGxvZ2ljIGlzIGltcGxlbWVudGVkIGluIHRoZSB0ZW1wbGF0ZS5cclxuICAgICAgLy8gV2FybiB1c2VyIGFib3V0IHRoYXQuXHJcbiAgICAgIGlmICh3aWR0aCA+PSBjb2x1bW4pIHtcclxuICAgICAgICBpZiAod2lkdGggPiBjb2x1bW4pIHtcclxuICAgICAgICAgIHdhcm4oYFwibnpDb2x1bW5cIiBpcyAke2NvbHVtbn0gYnV0IHdlIGhhdmUgcm93IGxlbmd0aCAke3dpZHRofWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjdXJyZW50Um93LnB1c2goeyB0aXRsZSwgY29udGVudCwgc3BhbjogY29sdW1uIC0gKHdpZHRoIC0gc3BhbikgfSk7XHJcbiAgICAgICAgZmx1c2hSb3coKTtcclxuICAgICAgfSBlbHNlIGlmIChpID09PSBsZW5ndGggLSAxKSB7XHJcbiAgICAgICAgY3VycmVudFJvdy5wdXNoKHsgdGl0bGUsIGNvbnRlbnQsIHNwYW46IGNvbHVtbiAtICh3aWR0aCAtIHNwYW4pIH0pO1xyXG4gICAgICAgIGZsdXNoUm93KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY3VycmVudFJvdy5wdXNoKHsgdGl0bGUsIGNvbnRlbnQsIHNwYW4gfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLml0ZW1NYXRyaXggPSBtYXRyaXg7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1hdGNoTWVkaWEoKTogTnpCcmVha3BvaW50IHtcclxuICAgIGxldCBicDogTnpCcmVha3BvaW50ID0gTnpCcmVha3BvaW50Lm1kO1xyXG5cclxuICAgIE9iamVjdC5rZXlzKHJlc3BvbnNpdmVNYXApLm1hcCgoYnJlYWtwb2ludDogc3RyaW5nKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNhc3RCUCA9IGJyZWFrcG9pbnQgYXMgTnpCcmVha3BvaW50O1xyXG4gICAgICBjb25zdCBtYXRjaEJlbG93ID0gdGhpcy5tZWRpYU1hdGNoZXIubWF0Y2hNZWRpYShyZXNwb25zaXZlTWFwW2Nhc3RCUF0pLm1hdGNoZXM7XHJcbiAgICAgIGlmIChtYXRjaEJlbG93KSB7XHJcbiAgICAgICAgYnAgPSBjYXN0QlA7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBicDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0Q29sdW1uKCk6IG51bWJlciB7XHJcbiAgICBpZiAodHlwZW9mIHRoaXMubnpDb2x1bW4gIT09ICdudW1iZXInKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm56Q29sdW1uW3RoaXMubWF0Y2hNZWRpYSgpXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5uekNvbHVtbjtcclxuICB9XHJcbn1cclxuIl19