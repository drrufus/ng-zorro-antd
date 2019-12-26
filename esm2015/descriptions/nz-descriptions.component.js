/**
 * @fileoverview added by tsickle
 * Generated from: nz-descriptions.component.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZGVzY3JpcHRpb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZGVzY3JpcHRpb25zLyIsInNvdXJjZXMiOlsibnotZGVzY3JpcHRpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLEtBQUssRUFHTCxTQUFTLEVBR1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEYsT0FBTyxFQUNMLGFBQWEsRUFDYixJQUFJLEVBQ0osWUFBWSxFQUNaLFlBQVksRUFDWixlQUFlLEVBQ2YsaUJBQWlCLEVBQ2pCLFVBQVUsRUFDWCxNQUFNLG9CQUFvQixDQUFDO0FBRTVCLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOztNQUV6RSx3QkFBd0IsR0FBRyxjQUFjOztNQUN6QyxnQkFBZ0IsR0FBc0M7SUFDMUQsR0FBRyxFQUFFLENBQUM7SUFDTixFQUFFLEVBQUUsQ0FBQztJQUNMLEVBQUUsRUFBRSxDQUFDO0lBQ0wsRUFBRSxFQUFFLENBQUM7SUFDTCxFQUFFLEVBQUUsQ0FBQztJQUNMLEVBQUUsRUFBRSxDQUFDO0NBQ047QUF1QkQsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7Ozs7SUFpQmxDLFlBQ1MsZUFBZ0MsRUFDL0IsR0FBc0IsRUFDdEIsWUFBMEIs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QUFLO3NCQUNMLEtBQUs7c0JBQ0wsS0FBSzs7QUFMZ0U7SUFBNUQsWUFBWSxFQUFFLEVBQUUsVUFBVSxDQUFDLHdCQUF3QixFQUFFLEtBQUssQ0FBQzs7MkRBQXFCO0FBRXpCO0lBQXZELFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxnQkFBZ0IsQ0FBQzs7eURBQXNEO0FBQzVEO0lBQWhELFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxTQUFTLENBQUM7O3VEQUE0QjtBQUVoQjtJQUEzRCxVQUFVLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLEVBQUUsWUFBWSxFQUFFOzt3REFBa0I7OztJQVB0Rix3Q0FBNEY7O0lBRTVGLDZDQUEwRjs7SUFDMUYsMkNBQXVEOztJQUN2RCwyQ0FBc0g7O0lBQ3RILHlDQUFxRjs7SUFDckYsMENBQWtEOztJQUNsRCwwQ0FBc0Y7O0lBRXRGLDZDQUFtRDs7SUFFbkQsNkNBQWU7Ozs7O0lBRWYsMkNBQXVDOzs7OztJQUN2QywwQ0FBc0M7O0lBR3BDLGtEQUF1Qzs7Ozs7SUFDdkMsc0NBQThCOzs7OztJQUM5QiwrQ0FBa0M7Ozs7O0lBQ2xDLDJDQUEwQjs7Ozs7SUFDMUIsb0RBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBNZWRpYU1hdGNoZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvbGF5b3V0JztcclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IG1lcmdlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGF1ZGl0VGltZSwgZmluYWxpemUsIHN0YXJ0V2l0aCwgc3dpdGNoTWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIHJlc3BvbnNpdmVNYXAsXHJcbiAgd2FybixcclxuICBJbnB1dEJvb2xlYW4sXHJcbiAgTnpCcmVha3BvaW50LFxyXG4gIE56Q29uZmlnU2VydmljZSxcclxuICBOekRvbUV2ZW50U2VydmljZSxcclxuICBXaXRoQ29uZmlnXHJcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpEZXNjcmlwdGlvbnNJdGVtUmVuZGVyUHJvcHMsIE56RGVzY3JpcHRpb25zTGF5b3V0LCBOekRlc2NyaXB0aW9uc1NpemUgfSBmcm9tICcuL256LWRlc2NyaXB0aW9ucy1kZWZpbml0aW9ucyc7XHJcbmltcG9ydCB7IE56RGVzY3JpcHRpb25zSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vbnotZGVzY3JpcHRpb25zLWl0ZW0uY29tcG9uZW50JztcclxuXHJcbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdkZXNjcmlwdGlvbnMnO1xyXG5jb25zdCBkZWZhdWx0Q29sdW1uTWFwOiB7IFtrZXkgaW4gTnpCcmVha3BvaW50XTogbnVtYmVyIH0gPSB7XHJcbiAgeHhsOiAzLFxyXG4gIHhsOiAzLFxyXG4gIGxnOiAzLFxyXG4gIG1kOiAzLFxyXG4gIHNtOiAyLFxyXG4gIHhzOiAxXHJcbn07XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHNlbGVjdG9yOiAnbnotZGVzY3JpcHRpb25zJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotZGVzY3JpcHRpb25zLmNvbXBvbmVudC5odG1sJyxcclxuICBleHBvcnRBczogJ256RGVzY3JpcHRpb25zJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBob3N0OiB7XHJcbiAgICBjbGFzczogJ2FudC1kZXNjcmlwdGlvbnMnLFxyXG4gICAgJ1tjbGFzcy5hbnQtZGVzY3JpcHRpb25zLWJvcmRlcmVkXSc6ICduekJvcmRlcmVkJyxcclxuICAgICdbY2xhc3MuYW50LWRlc2NyaXB0aW9ucy1taWRkbGVdJzogJ256U2l6ZSA9PT0gXCJtaWRkbGVcIicsXHJcbiAgICAnW2NsYXNzLmFudC1kZXNjcmlwdGlvbnMtc21hbGxdJzogJ256U2l6ZSA9PT0gXCJzbWFsbFwiJ1xyXG4gIH0sXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIG56LWRlc2NyaXB0aW9ucyB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekRlc2NyaXB0aW9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95LCBBZnRlckNvbnRlbnRJbml0IHtcclxuICBAQ29udGVudENoaWxkcmVuKE56RGVzY3JpcHRpb25zSXRlbUNvbXBvbmVudCkgaXRlbXM6IFF1ZXJ5TGlzdDxOekRlc2NyaXB0aW9uc0l0ZW1Db21wb25lbnQ+O1xyXG5cclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCBmYWxzZSkgbnpCb3JkZXJlZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBuekxheW91dDogTnpEZXNjcmlwdGlvbnNMYXlvdXQgPSAnaG9yaXpvbnRhbCc7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCBkZWZhdWx0Q29sdW1uTWFwKSBuekNvbHVtbjogbnVtYmVyIHwgeyBba2V5IGluIE56QnJlYWtwb2ludF06IG51bWJlciB9O1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgJ2RlZmF1bHQnKSBuelNpemU6IE56RGVzY3JpcHRpb25zU2l6ZTtcclxuICBASW5wdXQoKSBuelRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiA9ICcnO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgdHJ1ZSkgQElucHV0Qm9vbGVhbigpIG56Q29sb246IGJvb2xlYW47XHJcblxyXG4gIGl0ZW1NYXRyaXg6IE56RGVzY3JpcHRpb25zSXRlbVJlbmRlclByb3BzW11bXSA9IFtdO1xyXG5cclxuICByZWFsQ29sdW1uID0gMztcclxuXHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgcHJpdmF0ZSByZXNpemUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIG1lZGlhTWF0Y2hlcjogTWVkaWFNYXRjaGVyLFxyXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sXHJcbiAgICBwcml2YXRlIG56RG9tRXZlbnRTZXJ2aWNlOiBOekRvbUV2ZW50U2VydmljZVxyXG4gICkge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMubnpDb2x1bW4pIHtcclxuICAgICAgdGhpcy5yZXNpemUkLm5leHQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNvbnRlbnRDaGFuZ2UkID0gdGhpcy5pdGVtcy5jaGFuZ2VzLnBpcGUoXHJcbiAgICAgIHN0YXJ0V2l0aCh0aGlzLml0ZW1zKSxcclxuICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXHJcbiAgICApO1xyXG5cclxuICAgIG1lcmdlKFxyXG4gICAgICBjb250ZW50Q2hhbmdlJCxcclxuICAgICAgY29udGVudENoYW5nZSQucGlwZShzd2l0Y2hNYXAoKCkgPT4gbWVyZ2UoLi4udGhpcy5pdGVtcy5tYXAoaSA9PiBpLmlucHV0Q2hhbmdlJCkpLnBpcGUoYXVkaXRUaW1lKDE2KSkpKSxcclxuICAgICAgdGhpcy5yZXNpemUkXHJcbiAgICApXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcmVwYXJlTWF0cml4KCk7XHJcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xyXG4gICAgICB0aGlzLm56RG9tRXZlbnRTZXJ2aWNlXHJcbiAgICAgICAgLnJlZ2lzdGVyUmVzaXplTGlzdGVuZXIoKVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxyXG4gICAgICAgICAgZmluYWxpemUoKCkgPT4gdGhpcy5uekRvbUV2ZW50U2VydmljZS51bnJlZ2lzdGVyUmVzaXplTGlzdGVuZXIoKSlcclxuICAgICAgICApXHJcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlc2l6ZSQubmV4dCgpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgICB0aGlzLnJlc2l6ZSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFByZXBhcmUgdGhlIHJlbmRlciBtYXRyaXggYWNjb3JkaW5nIHRvIGRlc2NyaXB0aW9uIGl0ZW1zJyBzcGFucy5cclxuICAgKi9cclxuICBwcml2YXRlIHByZXBhcmVNYXRyaXgoKTogdm9pZCB7XHJcbiAgICBsZXQgY3VycmVudFJvdzogTnpEZXNjcmlwdGlvbnNJdGVtUmVuZGVyUHJvcHNbXSA9IFtdO1xyXG4gICAgbGV0IHdpZHRoID0gMDtcclxuXHJcbiAgICBjb25zdCBjb2x1bW4gPSAodGhpcy5yZWFsQ29sdW1uID0gdGhpcy5nZXRDb2x1bW4oKSk7XHJcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMuaXRlbXMudG9BcnJheSgpO1xyXG4gICAgY29uc3QgbGVuZ3RoID0gaXRlbXMubGVuZ3RoO1xyXG4gICAgY29uc3QgbWF0cml4OiBOekRlc2NyaXB0aW9uc0l0ZW1SZW5kZXJQcm9wc1tdW10gPSBbXTtcclxuICAgIGNvbnN0IGZsdXNoUm93ID0gKCkgPT4ge1xyXG4gICAgICBtYXRyaXgucHVzaChjdXJyZW50Um93KTtcclxuICAgICAgY3VycmVudFJvdyA9IFtdO1xyXG4gICAgICB3aWR0aCA9IDA7XHJcbiAgICB9O1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgaXRlbSA9IGl0ZW1zW2ldO1xyXG4gICAgICBjb25zdCB7IG56VGl0bGU6IHRpdGxlLCBjb250ZW50LCBuelNwYW46IHNwYW4gfSA9IGl0ZW07XHJcblxyXG4gICAgICB3aWR0aCArPSBzcGFuO1xyXG5cclxuICAgICAgLy8gSWYgdGhlIGxhc3QgaXRlbSBtYWtlIHRoZSByb3cncyBsZW5ndGggZXhjZWVkcyBgbnpDb2x1bW5gLCB0aGUgbGFzdFxyXG4gICAgICAvLyBpdGVtIHNob3VsZCB0YWtlIGFsbCB0aGUgc3BhY2UgbGVmdC4gVGhpcyBsb2dpYyBpcyBpbXBsZW1lbnRlZCBpbiB0aGUgdGVtcGxhdGUuXHJcbiAgICAgIC8vIFdhcm4gdXNlciBhYm91dCB0aGF0LlxyXG4gICAgICBpZiAod2lkdGggPj0gY29sdW1uKSB7XHJcbiAgICAgICAgaWYgKHdpZHRoID4gY29sdW1uKSB7XHJcbiAgICAgICAgICB3YXJuKGBcIm56Q29sdW1uXCIgaXMgJHtjb2x1bW59IGJ1dCB3ZSBoYXZlIHJvdyBsZW5ndGggJHt3aWR0aH1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3VycmVudFJvdy5wdXNoKHsgdGl0bGUsIGNvbnRlbnQsIHNwYW46IGNvbHVtbiAtICh3aWR0aCAtIHNwYW4pIH0pO1xyXG4gICAgICAgIGZsdXNoUm93KCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoaSA9PT0gbGVuZ3RoIC0gMSkge1xyXG4gICAgICAgIGN1cnJlbnRSb3cucHVzaCh7IHRpdGxlLCBjb250ZW50LCBzcGFuOiBjb2x1bW4gLSAod2lkdGggLSBzcGFuKSB9KTtcclxuICAgICAgICBmbHVzaFJvdygpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGN1cnJlbnRSb3cucHVzaCh7IHRpdGxlLCBjb250ZW50LCBzcGFuIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pdGVtTWF0cml4ID0gbWF0cml4O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtYXRjaE1lZGlhKCk6IE56QnJlYWtwb2ludCB7XHJcbiAgICBsZXQgYnA6IE56QnJlYWtwb2ludCA9IE56QnJlYWtwb2ludC5tZDtcclxuXHJcbiAgICBPYmplY3Qua2V5cyhyZXNwb25zaXZlTWFwKS5tYXAoKGJyZWFrcG9pbnQ6IHN0cmluZykgPT4ge1xyXG4gICAgICBjb25zdCBjYXN0QlAgPSBicmVha3BvaW50IGFzIE56QnJlYWtwb2ludDtcclxuICAgICAgY29uc3QgbWF0Y2hCZWxvdyA9IHRoaXMubWVkaWFNYXRjaGVyLm1hdGNoTWVkaWEocmVzcG9uc2l2ZU1hcFtjYXN0QlBdKS5tYXRjaGVzO1xyXG4gICAgICBpZiAobWF0Y2hCZWxvdykge1xyXG4gICAgICAgIGJwID0gY2FzdEJQO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gYnA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldENvbHVtbigpOiBudW1iZXIge1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLm56Q29sdW1uICE9PSAnbnVtYmVyJykge1xyXG4gICAgICByZXR1cm4gdGhpcy5uekNvbHVtblt0aGlzLm1hdGNoTWVkaWEoKV07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMubnpDb2x1bW47XHJcbiAgfVxyXG59XHJcbiJdfQ==