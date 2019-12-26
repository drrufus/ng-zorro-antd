/**
 * @fileoverview added by tsickle
 * Generated from: nz-pagination.component.ts
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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { isInteger, toNumber, InputBoolean, InputNumber } from 'ng-zorro-antd/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
/**
 * @record
 */
export function PaginationItemRenderContext() { }
if (false) {
    /** @type {?} */
    PaginationItemRenderContext.prototype.$implicit;
    /** @type {?} */
    PaginationItemRenderContext.prototype.page;
}
var NzPaginationComponent = /** @class */ (function () {
    function NzPaginationComponent(i18n, cdr) {
        this.i18n = i18n;
        this.cdr = cdr;
        // tslint:disable-next-line:no-any
        this.locale = {};
        this.firstIndex = 1;
        this.pages = [];
        this.$destroy = new Subject();
        this.nzPageSizeChange = new EventEmitter();
        this.nzPageIndexChange = new EventEmitter();
        this.nzInTable = false;
        this.nzSize = 'default';
        this.nzPageSizeOptions = [10, 20, 30, 40];
        this.nzDisabled = false;
        this.nzShowSizeChanger = false;
        this.nzHideOnSinglePage = false;
        this.nzShowQuickJumper = false;
        this.nzSimple = false;
        this.nzTotal = 0;
        this.nzPageIndex = 1;
        this.nzPageSize = 10;
    }
    Object.defineProperty(NzPaginationComponent.prototype, "itemRender", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzItemRender || this.nzItemRenderChild;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    NzPaginationComponent.prototype.validatePageIndex = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value > this.lastIndex) {
            return this.lastIndex;
        }
        else if (value < this.firstIndex) {
            return this.firstIndex;
        }
        else {
            return value;
        }
    };
    /**
     * @param {?} page
     * @return {?}
     */
    NzPaginationComponent.prototype.updatePageIndexValue = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        this.nzPageIndex = page;
        this.nzPageIndexChange.emit(this.nzPageIndex);
        this.buildIndexes();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzPaginationComponent.prototype.isPageIndexValid = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this.validatePageIndex(value) === value;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NzPaginationComponent.prototype.jumpPage = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (index !== this.nzPageIndex && !this.nzDisabled) {
            /** @type {?} */
            var pageIndex = this.validatePageIndex(index);
            if (pageIndex !== this.nzPageIndex) {
                this.updatePageIndexValue(pageIndex);
            }
        }
    };
    /**
     * @param {?} diff
     * @return {?}
     */
    NzPaginationComponent.prototype.jumpDiff = /**
     * @param {?} diff
     * @return {?}
     */
    function (diff) {
        this.jumpPage(this.nzPageIndex + diff);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NzPaginationComponent.prototype.onPageSizeChange = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.nzPageSize = $event;
        this.nzPageSizeChange.emit($event);
        this.buildIndexes();
        if (this.nzPageIndex > this.lastIndex) {
            this.updatePageIndexValue(this.lastIndex);
        }
    };
    /**
     * @param {?} _
     * @param {?} input
     * @param {?} clearInputValue
     * @return {?}
     */
    NzPaginationComponent.prototype.handleKeyDown = /**
     * @param {?} _
     * @param {?} input
     * @param {?} clearInputValue
     * @return {?}
     */
    function (_, input, clearInputValue) {
        /** @type {?} */
        var target = input;
        /** @type {?} */
        var page = toNumber(target.value, this.nzPageIndex);
        if (isInteger(page) && this.isPageIndexValid(page) && page !== this.nzPageIndex) {
            this.updatePageIndexValue(page);
        }
        if (clearInputValue) {
            target.value = '';
        }
        else {
            target.value = "" + this.nzPageIndex;
        }
    };
    /** generate indexes list */
    /**
     * generate indexes list
     * @return {?}
     */
    NzPaginationComponent.prototype.buildIndexes = /**
     * generate indexes list
     * @return {?}
     */
    function () {
        /** @type {?} */
        var pages = [];
        if (this.lastIndex <= 9) {
            for (var i = 2; i <= this.lastIndex - 1; i++) {
                pages.push(i);
            }
        }
        else {
            /** @type {?} */
            var current = +this.nzPageIndex;
            /** @type {?} */
            var left = Math.max(2, current - 2);
            /** @type {?} */
            var right = Math.min(current + 2, this.lastIndex - 1);
            if (current - 1 <= 2) {
                right = 5;
            }
            if (this.lastIndex - current <= 2) {
                left = this.lastIndex - 4;
            }
            for (var i = left; i <= right; i++) {
                pages.push(i);
            }
        }
        this.pages = pages;
        this.cdr.markForCheck();
    };
    Object.defineProperty(NzPaginationComponent.prototype, "lastIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return Math.ceil(this.nzTotal / this.nzPageSize);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzPaginationComponent.prototype, "isLastIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzPageIndex === this.lastIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzPaginationComponent.prototype, "isFirstIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzPageIndex === this.firstIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzPaginationComponent.prototype, "ranges", {
        get: /**
         * @return {?}
         */
        function () {
            return [(this.nzPageIndex - 1) * this.nzPageSize + 1, Math.min(this.nzPageIndex * this.nzPageSize, this.nzTotal)];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzPaginationComponent.prototype, "showAddOption", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzPageSizeOptions.indexOf(this.nzPageSize) === -1;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzPaginationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.i18n.localeChange.pipe(takeUntil(this.$destroy)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.locale = _this.i18n.getLocaleData('Pagination');
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @return {?}
     */
    NzPaginationComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.$destroy.next();
        this.$destroy.complete();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzPaginationComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzTotal || changes.nzPageSize || changes.nzPageIndex) {
            this.buildIndexes();
        }
    };
    NzPaginationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-pagination',
                    exportAs: 'nzPagination',
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "<ng-template #renderItemTemplate let-type let-page=\"page\">\r\n  <a class=\"ant-pagination-item-link\" *ngIf=\"type==='pre'\">\r\n    <i nz-icon nzType=\"left\"></i>\r\n  </a>\r\n  <a class=\"ant-pagination-item-link\" *ngIf=\"type==='next'\">\r\n    <i nz-icon nzType=\"right\"></i>\r\n  </a>\r\n  <a *ngIf=\"type=='page'\">{{ page }}</a>\r\n</ng-template>\r\n<ng-container *ngIf=\"(nzHideOnSinglePage && (nzTotal > nzPageSize)) || (nzTotal && !nzHideOnSinglePage)\">\r\n  <ul class=\"ant-pagination\"\r\n      [class.ant-table-pagination]=\"nzInTable\"\r\n      [class.ant-pagination-simple]=\"nzSimple\"\r\n      [class.ant-pagination-disabled]=\"nzDisabled\"\r\n      [class.mini]=\"(nzSize === 'small') && !nzSimple\">\r\n    <ng-container *ngIf=\"nzSimple; else normalTemplate\">\r\n      <li class=\"ant-pagination-prev\"\r\n          [attr.title]=\"locale.prev_page\"\r\n          [class.ant-pagination-disabled]=\"isFirstIndex\"\r\n          (click)=\"jumpDiff(-1)\">\r\n        <ng-template [ngTemplateOutlet]=\"itemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'pre'}\"></ng-template>\r\n      </li>\r\n      <li [attr.title]=\"nzPageIndex+'/'+lastIndex\" class=\"ant-pagination-simple-pager\">\r\n        <input #simplePagerInput\r\n               [disabled]=\"nzDisabled\"\r\n               [value]=\"nzPageIndex\"\r\n               (keydown.enter)=\"handleKeyDown($event,simplePagerInput,false)\"\r\n               size=\"3\">\r\n        <span class=\"ant-pagination-slash\">/</span>\r\n        {{ lastIndex }}\r\n      </li>\r\n      <li class=\"ant-pagination-next\"\r\n          [attr.title]=\"locale.next_page\"\r\n          [class.ant-pagination-disabled]=\"isLastIndex\"\r\n          (click)=\"jumpDiff(1)\">\r\n        <ng-template [ngTemplateOutlet]=\"itemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'next'}\"></ng-template>\r\n      </li>\r\n    </ng-container>\r\n    <ng-template #normalTemplate>\r\n      <li class=\"ant-pagination-total-text\" *ngIf=\"nzShowTotal\">\r\n        <ng-template [ngTemplateOutlet]=\"nzShowTotal\"\r\n                     [ngTemplateOutletContext]=\"{ $implicit: nzTotal,range:ranges }\"></ng-template>\r\n      </li>\r\n      <li class=\"ant-pagination-prev\"\r\n          [attr.title]=\"locale.prev_page\"\r\n          [class.ant-pagination-disabled]=\"isFirstIndex\"\r\n          (click)=\"jumpDiff(-1)\">\r\n        <ng-template [ngTemplateOutlet]=\"itemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'pre'}\"></ng-template>\r\n      </li>\r\n      <li class=\"ant-pagination-item\"\r\n          [attr.title]=\"firstIndex\"\r\n          [class.ant-pagination-item-active]=\"isFirstIndex\"\r\n          (click)=\"jumpPage(firstIndex)\">\r\n        <ng-template [ngTemplateOutlet]=\"itemRender\"\r\n                     [ngTemplateOutletContext]=\"{ $implicit: 'page',page: firstIndex }\"></ng-template>\r\n      </li>\r\n      <li class=\"ant-pagination-jump-prev\"\r\n          *ngIf=\"(lastIndex > 9) && (nzPageIndex - 3 > firstIndex)\"\r\n          [attr.title]=\"locale.prev_5\"\r\n          (click)=\"jumpDiff(-5)\">\r\n        <a class=\"ant-pagination-item-link\">\r\n          <div class=\"ant-pagination-item-container\">\r\n            <i nz-icon nzType=\"double-left\" class=\"ant-pagination-item-link-icon\"></i>\r\n            <span class=\"ant-pagination-item-ellipsis\">\u2022\u2022\u2022</span>\r\n          </div>\r\n        </a>\r\n      </li>\r\n      <li class=\"ant-pagination-item\"\r\n          *ngFor=\"let page of pages\"\r\n          [attr.title]=\"page\"\r\n          [class.ant-pagination-item-active]=\"nzPageIndex === page\"\r\n          (click)=\"jumpPage(page)\">\r\n        <ng-template [ngTemplateOutlet]=\"itemRender\"\r\n                     [ngTemplateOutletContext]=\"{ $implicit: 'page',page: page }\"></ng-template>\r\n      </li>\r\n      <li class=\"ant-pagination-jump-next ant-pagination-item-link-icon\"\r\n          [attr.title]=\"locale.next_5\"\r\n          (click)=\"jumpDiff(5)\"\r\n          *ngIf=\"(lastIndex > 9) && (nzPageIndex + 3 < lastIndex)\">\r\n        <a class=\"ant-pagination-item-link\">\r\n          <div class=\"ant-pagination-item-container\">\r\n            <i nz-icon nzType=\"double-right\" class=\"ant-pagination-item-link-icon\"></i>\r\n            <span class=\"ant-pagination-item-ellipsis\">\u2022\u2022\u2022</span>\r\n          </div>\r\n        </a>\r\n      </li>\r\n      <li class=\"ant-pagination-item\"\r\n          [attr.title]=\"lastIndex\"\r\n          (click)=\"jumpPage(lastIndex)\"\r\n          *ngIf=\"(lastIndex > 0) && (lastIndex !== firstIndex)\"\r\n          [class.ant-pagination-item-active]=\"isLastIndex\">\r\n        <ng-template [ngTemplateOutlet]=\"itemRender\"\r\n                     [ngTemplateOutletContext]=\"{ $implicit: 'page',page: lastIndex }\"></ng-template>\r\n      </li>\r\n      <li class=\"ant-pagination-next\"\r\n          [title]=\"locale.next_page\"\r\n          [class.ant-pagination-disabled]=\"isLastIndex\"\r\n          (click)=\"jumpDiff(1)\">\r\n        <ng-template [ngTemplateOutlet]=\"itemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'next'}\"></ng-template>\r\n      </li>\r\n      <div class=\"ant-pagination-options\" *ngIf=\"nzShowQuickJumper || nzShowSizeChanger\">\r\n        <nz-select class=\"ant-pagination-options-size-changer\"\r\n                   *ngIf=\"nzShowSizeChanger\"\r\n                   [nzDisabled]=\"nzDisabled\"\r\n                   [nzSize]=\"nzSize\"\r\n                   [ngModel]=\"nzPageSize\"\r\n                   (ngModelChange)=\"onPageSizeChange($event)\">\r\n          <nz-option *ngFor=\"let option of nzPageSizeOptions\"\r\n                     [nzLabel]=\"option + ' ' + locale.items_per_page\"\r\n                     [nzValue]=\"option\">\r\n          </nz-option>\r\n          <nz-option *ngIf=\"showAddOption\"\r\n                     [nzLabel]=\"nzPageSize + ' ' + locale.items_per_page\"\r\n                     [nzValue]=\"nzPageSize\">\r\n          </nz-option>\r\n        </nz-select>\r\n        <div class=\"ant-pagination-options-quick-jumper\" *ngIf=\"nzShowQuickJumper\">\r\n          {{ locale.jump_to }}\r\n          <input #quickJumperInput\r\n                 [disabled]=\"nzDisabled\"\r\n                 (keydown.enter)=\"handleKeyDown($event,quickJumperInput,true)\">\r\n          {{ locale.page }}\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n  </ul>\r\n</ng-container>\r\n"
                }] }
    ];
    /** @nocollapse */
    NzPaginationComponent.ctorParameters = function () { return [
        { type: NzI18nService },
        { type: ChangeDetectorRef }
    ]; };
    NzPaginationComponent.propDecorators = {
        nzPageSizeChange: [{ type: Output }],
        nzPageIndexChange: [{ type: Output }],
        nzShowTotal: [{ type: Input }],
        nzInTable: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzPageSizeOptions: [{ type: Input }],
        nzItemRender: [{ type: Input }],
        nzItemRenderChild: [{ type: ViewChild, args: ['renderItemTemplate', { static: true },] }],
        nzDisabled: [{ type: Input }],
        nzShowSizeChanger: [{ type: Input }],
        nzHideOnSinglePage: [{ type: Input }],
        nzShowQuickJumper: [{ type: Input }],
        nzSimple: [{ type: Input }],
        nzTotal: [{ type: Input }],
        nzPageIndex: [{ type: Input }],
        nzPageSize: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzPaginationComponent.prototype, "nzDisabled", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzPaginationComponent.prototype, "nzShowSizeChanger", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzPaginationComponent.prototype, "nzHideOnSinglePage", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzPaginationComponent.prototype, "nzShowQuickJumper", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzPaginationComponent.prototype, "nzSimple", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], NzPaginationComponent.prototype, "nzTotal", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], NzPaginationComponent.prototype, "nzPageIndex", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], NzPaginationComponent.prototype, "nzPageSize", void 0);
    return NzPaginationComponent;
}());
export { NzPaginationComponent };
if (false) {
    /** @type {?} */
    NzPaginationComponent.prototype.locale;
    /** @type {?} */
    NzPaginationComponent.prototype.firstIndex;
    /** @type {?} */
    NzPaginationComponent.prototype.pages;
    /**
     * @type {?}
     * @private
     */
    NzPaginationComponent.prototype.$destroy;
    /** @type {?} */
    NzPaginationComponent.prototype.nzPageSizeChange;
    /** @type {?} */
    NzPaginationComponent.prototype.nzPageIndexChange;
    /** @type {?} */
    NzPaginationComponent.prototype.nzShowTotal;
    /** @type {?} */
    NzPaginationComponent.prototype.nzInTable;
    /** @type {?} */
    NzPaginationComponent.prototype.nzSize;
    /** @type {?} */
    NzPaginationComponent.prototype.nzPageSizeOptions;
    /** @type {?} */
    NzPaginationComponent.prototype.nzItemRender;
    /** @type {?} */
    NzPaginationComponent.prototype.nzItemRenderChild;
    /** @type {?} */
    NzPaginationComponent.prototype.nzDisabled;
    /** @type {?} */
    NzPaginationComponent.prototype.nzShowSizeChanger;
    /** @type {?} */
    NzPaginationComponent.prototype.nzHideOnSinglePage;
    /** @type {?} */
    NzPaginationComponent.prototype.nzShowQuickJumper;
    /** @type {?} */
    NzPaginationComponent.prototype.nzSimple;
    /** @type {?} */
    NzPaginationComponent.prototype.nzTotal;
    /** @type {?} */
    NzPaginationComponent.prototype.nzPageIndex;
    /** @type {?} */
    NzPaginationComponent.prototype.nzPageSize;
    /**
     * @type {?}
     * @private
     */
    NzPaginationComponent.prototype.i18n;
    /**
     * @type {?}
     * @private
     */
    NzPaginationComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3BhZ2luYXRpb24vIiwic291cmNlcyI6WyJuei1wYWdpbmF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUVOLFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7QUFFbkQsaURBR0M7OztJQUZDLGdEQUFvQzs7SUFDcEMsMkNBQWE7O0FBR2Y7SUF3SUUsK0JBQW9CLElBQW1CLEVBQVUsR0FBc0I7UUFBbkQsU0FBSSxHQUFKLElBQUksQ0FBZTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1COztRQTlIdkUsV0FBTSxHQUFRLEVBQUUsQ0FBQztRQUNqQixlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsVUFBSyxHQUFhLEVBQUUsQ0FBQztRQUNiLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQ3BCLHFCQUFnQixHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVELHNCQUFpQixHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXZFLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsV0FBTSxHQUF3QixTQUFTLENBQUM7UUFDeEMsc0JBQWlCLEdBQUcsQ0FBQyxF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MkI7SUFDMUI7UUFBZixZQUFZLEVBQUU7OzJEQUFrQjtJQUNsQjtRQUFkLFdBQVcsRUFBRTs7MERBQWE7SUFDWjtRQUFkLFdBQVcsRUFBRTs7OERBQWlCO0lBQ2hCO1FBQWQsV0FBVyxFQUFFOzs2REFBaUI7SUF5SDFDLDRCQUFDO0NBQUEsQUEzSkQsSUEySkM7U0FuSlkscUJBQXFCOzs7SUFFaEMsdUNBQWlCOztJQUNqQiwyQ0FBZTs7SUFDZixzQ0FBcUI7Ozs7O0lBQ3JCLHlDQUF1Qzs7SUFDdkMsaURBQStFOztJQUMvRSxrREFBZ0Y7O0lBQ2hGLDRDQUFrRjs7SUFDbEYsMENBQTJCOztJQUMzQix1Q0FBaUQ7O0lBQ2pELGtEQUE4Qzs7SUFFOUMsNkNBQWdFOztJQUNoRSxrREFBK0c7O0lBSy9HLDJDQUE0Qzs7SUFDNUMsa0RBQW1EOztJQUNuRCxtREFBb0Q7O0lBQ3BELGtEQUFtRDs7SUFDbkQseUNBQTBDOztJQUMxQyx3Q0FBb0M7O0lBQ3BDLDRDQUF3Qzs7SUFDeEMsMkNBQXdDOzs7OztJQXNHNUIscUNBQTJCOzs7OztJQUFFLG9DQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IGlzSW50ZWdlciwgdG9OdW1iZXIsIElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGFnaW5hdGlvbkl0ZW1SZW5kZXJDb250ZXh0IHtcclxuICAkaW1wbGljaXQ6ICdwYWdlJyB8ICdwcmV2JyB8ICduZXh0JztcclxuICBwYWdlOiBudW1iZXI7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotcGFnaW5hdGlvbicsXHJcbiAgZXhwb3J0QXM6ICduelBhZ2luYXRpb24nLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXBhZ2luYXRpb24uY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelBhZ2luYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgbG9jYWxlOiBhbnkgPSB7fTtcclxuICBmaXJzdEluZGV4ID0gMTtcclxuICBwYWdlczogbnVtYmVyW10gPSBbXTtcclxuICBwcml2YXRlICRkZXN0cm95ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpQYWdlU2l6ZUNoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56UGFnZUluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBASW5wdXQoKSBuelNob3dUb3RhbDogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IG51bWJlcjsgcmFuZ2U6IFtudW1iZXIsIG51bWJlcl0gfT47XHJcbiAgQElucHV0KCkgbnpJblRhYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpTaXplOiAnZGVmYXVsdCcgfCAnc21hbGwnID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIG56UGFnZVNpemVPcHRpb25zID0gWzEwLCAyMCwgMzAsIDQwXTtcclxuXHJcbiAgQElucHV0KCkgbnpJdGVtUmVuZGVyOiBUZW1wbGF0ZVJlZjxQYWdpbmF0aW9uSXRlbVJlbmRlckNvbnRleHQ+O1xyXG4gIEBWaWV3Q2hpbGQoJ3JlbmRlckl0ZW1UZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pIG56SXRlbVJlbmRlckNoaWxkOiBUZW1wbGF0ZVJlZjxQYWdpbmF0aW9uSXRlbVJlbmRlckNvbnRleHQ+O1xyXG4gIGdldCBpdGVtUmVuZGVyKCk6IFRlbXBsYXRlUmVmPFBhZ2luYXRpb25JdGVtUmVuZGVyQ29udGV4dD4ge1xyXG4gICAgcmV0dXJuIHRoaXMubnpJdGVtUmVuZGVyIHx8IHRoaXMubnpJdGVtUmVuZGVyQ2hpbGQ7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dTaXplQ2hhbmdlciA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekhpZGVPblNpbmdsZVBhZ2UgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93UXVpY2tKdW1wZXIgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaW1wbGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBuelRvdGFsID0gMDtcclxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBuelBhZ2VJbmRleCA9IDE7XHJcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbnpQYWdlU2l6ZSA9IDEwO1xyXG5cclxuICB2YWxpZGF0ZVBhZ2VJbmRleCh2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGlmICh2YWx1ZSA+IHRoaXMubGFzdEluZGV4KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmxhc3RJbmRleDtcclxuICAgIH0gZWxzZSBpZiAodmFsdWUgPCB0aGlzLmZpcnN0SW5kZXgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZmlyc3RJbmRleDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZVBhZ2VJbmRleFZhbHVlKHBhZ2U6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5uelBhZ2VJbmRleCA9IHBhZ2U7XHJcbiAgICB0aGlzLm56UGFnZUluZGV4Q2hhbmdlLmVtaXQodGhpcy5uelBhZ2VJbmRleCk7XHJcbiAgICB0aGlzLmJ1aWxkSW5kZXhlcygpO1xyXG4gIH1cclxuXHJcbiAgaXNQYWdlSW5kZXhWYWxpZCh2YWx1ZTogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy52YWxpZGF0ZVBhZ2VJbmRleCh2YWx1ZSkgPT09IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAganVtcFBhZ2UoaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKGluZGV4ICE9PSB0aGlzLm56UGFnZUluZGV4ICYmICF0aGlzLm56RGlzYWJsZWQpIHtcclxuICAgICAgY29uc3QgcGFnZUluZGV4ID0gdGhpcy52YWxpZGF0ZVBhZ2VJbmRleChpbmRleCk7XHJcbiAgICAgIGlmIChwYWdlSW5kZXggIT09IHRoaXMubnpQYWdlSW5kZXgpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVBhZ2VJbmRleFZhbHVlKHBhZ2VJbmRleCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGp1bXBEaWZmKGRpZmY6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5qdW1wUGFnZSh0aGlzLm56UGFnZUluZGV4ICsgZGlmZik7XHJcbiAgfVxyXG5cclxuICBvblBhZ2VTaXplQ2hhbmdlKCRldmVudDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLm56UGFnZVNpemUgPSAkZXZlbnQ7XHJcbiAgICB0aGlzLm56UGFnZVNpemVDaGFuZ2UuZW1pdCgkZXZlbnQpO1xyXG4gICAgdGhpcy5idWlsZEluZGV4ZXMoKTtcclxuICAgIGlmICh0aGlzLm56UGFnZUluZGV4ID4gdGhpcy5sYXN0SW5kZXgpIHtcclxuICAgICAgdGhpcy51cGRhdGVQYWdlSW5kZXhWYWx1ZSh0aGlzLmxhc3RJbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVLZXlEb3duKF86IEtleWJvYXJkRXZlbnQsIGlucHV0OiBIVE1MSW5wdXRFbGVtZW50LCBjbGVhcklucHV0VmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGlucHV0O1xyXG4gICAgY29uc3QgcGFnZSA9IHRvTnVtYmVyKHRhcmdldC52YWx1ZSwgdGhpcy5uelBhZ2VJbmRleCk7XHJcbiAgICBpZiAoaXNJbnRlZ2VyKHBhZ2UpICYmIHRoaXMuaXNQYWdlSW5kZXhWYWxpZChwYWdlKSAmJiBwYWdlICE9PSB0aGlzLm56UGFnZUluZGV4KSB7XHJcbiAgICAgIHRoaXMudXBkYXRlUGFnZUluZGV4VmFsdWUocGFnZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2xlYXJJbnB1dFZhbHVlKSB7XHJcbiAgICAgIHRhcmdldC52YWx1ZSA9ICcnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGFyZ2V0LnZhbHVlID0gYCR7dGhpcy5uelBhZ2VJbmRleH1gO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIGdlbmVyYXRlIGluZGV4ZXMgbGlzdCAqL1xyXG4gIGJ1aWxkSW5kZXhlcygpOiB2b2lkIHtcclxuICAgIGNvbnN0IHBhZ2VzOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgaWYgKHRoaXMubGFzdEluZGV4IDw9IDkpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDI7IGkgPD0gdGhpcy5sYXN0SW5kZXggLSAxOyBpKyspIHtcclxuICAgICAgICBwYWdlcy5wdXNoKGkpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBjdXJyZW50ID0gK3RoaXMubnpQYWdlSW5kZXg7XHJcbiAgICAgIGxldCBsZWZ0ID0gTWF0aC5tYXgoMiwgY3VycmVudCAtIDIpO1xyXG4gICAgICBsZXQgcmlnaHQgPSBNYXRoLm1pbihjdXJyZW50ICsgMiwgdGhpcy5sYXN0SW5kZXggLSAxKTtcclxuICAgICAgaWYgKGN1cnJlbnQgLSAxIDw9IDIpIHtcclxuICAgICAgICByaWdodCA9IDU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMubGFzdEluZGV4IC0gY3VycmVudCA8PSAyKSB7XHJcbiAgICAgICAgbGVmdCA9IHRoaXMubGFzdEluZGV4IC0gNDtcclxuICAgICAgfVxyXG4gICAgICBmb3IgKGxldCBpID0gbGVmdDsgaSA8PSByaWdodDsgaSsrKSB7XHJcbiAgICAgICAgcGFnZXMucHVzaChpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5wYWdlcyA9IHBhZ2VzO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgbGFzdEluZGV4KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5jZWlsKHRoaXMubnpUb3RhbCAvIHRoaXMubnpQYWdlU2l6ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNMYXN0SW5kZXgoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5uelBhZ2VJbmRleCA9PT0gdGhpcy5sYXN0SW5kZXg7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNGaXJzdEluZGV4KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubnpQYWdlSW5kZXggPT09IHRoaXMuZmlyc3RJbmRleDtcclxuICB9XHJcblxyXG4gIGdldCByYW5nZXMoKTogbnVtYmVyW10ge1xyXG4gICAgcmV0dXJuIFsodGhpcy5uelBhZ2VJbmRleCAtIDEpICogdGhpcy5uelBhZ2VTaXplICsgMSwgTWF0aC5taW4odGhpcy5uelBhZ2VJbmRleCAqIHRoaXMubnpQYWdlU2l6ZSwgdGhpcy5uelRvdGFsKV07XHJcbiAgfVxyXG5cclxuICBnZXQgc2hvd0FkZE9wdGlvbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm56UGFnZVNpemVPcHRpb25zLmluZGV4T2YodGhpcy5uelBhZ2VTaXplKSA9PT0gLTE7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuJGRlc3Ryb3kpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXRMb2NhbGVEYXRhKCdQYWdpbmF0aW9uJyk7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuJGRlc3Ryb3kubmV4dCgpO1xyXG4gICAgdGhpcy4kZGVzdHJveS5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMubnpUb3RhbCB8fCBjaGFuZ2VzLm56UGFnZVNpemUgfHwgY2hhbmdlcy5uelBhZ2VJbmRleCkge1xyXG4gICAgICB0aGlzLmJ1aWxkSW5kZXhlcygpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=