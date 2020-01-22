import { __decorate, __metadata } from 'tslib';
import { EventEmitter, Component, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef, Output, Input, ViewChild, NgModule } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { toNumber, isInteger, InputBoolean, InputNumber } from 'ng-zorro-antd/core';
import { NzI18nService, NzI18nModule } from 'ng-zorro-antd/i18n';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function PaginationItemRenderContext() { }
if (false) {
    /** @type {?} */
    PaginationItemRenderContext.prototype.$implicit;
    /** @type {?} */
    PaginationItemRenderContext.prototype.page;
}
class NzPaginationComponent {
    /**
     * @param {?} i18n
     * @param {?} cdr
     */
    constructor(i18n, cdr) {
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
    /**
     * @return {?}
     */
    get itemRender() {
        return this.nzItemRender || this.nzItemRenderChild;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    validatePageIndex(value) {
        if (value > this.lastIndex) {
            return this.lastIndex;
        }
        else if (value < this.firstIndex) {
            return this.firstIndex;
        }
        else {
            return value;
        }
    }
    /**
     * @param {?} page
     * @return {?}
     */
    updatePageIndexValue(page) {
        this.nzPageIndex = page;
        this.nzPageIndexChange.emit(this.nzPageIndex);
        this.buildIndexes();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isPageIndexValid(value) {
        return this.validatePageIndex(value) === value;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    jumpPage(index) {
        if (index !== this.nzPageIndex && !this.nzDisabled) {
            /** @type {?} */
            const pageIndex = this.validatePageIndex(index);
            if (pageIndex !== this.nzPageIndex) {
                this.updatePageIndexValue(pageIndex);
            }
        }
    }
    /**
     * @param {?} diff
     * @return {?}
     */
    jumpDiff(diff) {
        this.jumpPage(this.nzPageIndex + diff);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onPageSizeChange($event) {
        this.nzPageSize = $event;
        this.nzPageSizeChange.emit($event);
        this.buildIndexes();
        if (this.nzPageIndex > this.lastIndex) {
            this.updatePageIndexValue(this.lastIndex);
        }
    }
    /**
     * @param {?} _
     * @param {?} input
     * @param {?} clearInputValue
     * @return {?}
     */
    handleKeyDown(_, input, clearInputValue) {
        /** @type {?} */
        const target = input;
        /** @type {?} */
        const page = toNumber(target.value, this.nzPageIndex);
        if (isInteger(page) && this.isPageIndexValid(page) && page !== this.nzPageIndex) {
            this.updatePageIndexValue(page);
        }
        if (clearInputValue) {
            target.value = '';
        }
        else {
            target.value = `${this.nzPageIndex}`;
        }
    }
    /**
     * generate indexes list
     * @return {?}
     */
    buildIndexes() {
        /** @type {?} */
        const pages = [];
        if (this.lastIndex <= 9) {
            for (let i = 2; i <= this.lastIndex - 1; i++) {
                pages.push(i);
            }
        }
        else {
            /** @type {?} */
            const current = +this.nzPageIndex;
            /** @type {?} */
            let left = Math.max(2, current - 2);
            /** @type {?} */
            let right = Math.min(current + 2, this.lastIndex - 1);
            if (current - 1 <= 2) {
                right = 5;
            }
            if (this.lastIndex - current <= 2) {
                left = this.lastIndex - 4;
            }
            for (let i = left; i <= right; i++) {
                pages.push(i);
            }
        }
        this.pages = pages;
        this.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    get lastIndex() {
        return Math.ceil(this.nzTotal / this.nzPageSize);
    }
    /**
     * @return {?}
     */
    get isLastIndex() {
        return this.nzPageIndex === this.lastIndex;
    }
    /**
     * @return {?}
     */
    get isFirstIndex() {
        return this.nzPageIndex === this.firstIndex;
    }
    /**
     * @return {?}
     */
    get ranges() {
        return [(this.nzPageIndex - 1) * this.nzPageSize + 1, Math.min(this.nzPageIndex * this.nzPageSize, this.nzTotal)];
    }
    /**
     * @return {?}
     */
    get showAddOption() {
        return this.nzPageSizeOptions.indexOf(this.nzPageSize) === -1;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.i18n.localeChange.pipe(takeUntil(this.$destroy)).subscribe((/**
         * @return {?}
         */
        () => {
            this.locale = this.i18n.getLocaleData('Pagination');
            this.cdr.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.$destroy.next();
        this.$destroy.complete();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzTotal || changes.nzPageSize || changes.nzPageIndex) {
            this.buildIndexes();
        }
    }
}
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
NzPaginationComponent.ctorParameters = () => [
    { type: NzI18nService },
    { type: ChangeDetectorRef }
];
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
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzPaginationComponent.prototype, "nzDisabled", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzPaginationComponent.prototype, "nzShowSizeChanger", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzPaginationComponent.prototype, "nzHideOnSinglePage", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzPaginationComponent.prototype, "nzShowQuickJumper", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzPaginationComponent.prototype, "nzSimple", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], NzPaginationComponent.prototype, "nzTotal", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], NzPaginationComponent.prototype, "nzPageIndex", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], NzPaginationComponent.prototype, "nzPageSize", void 0);
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzPaginationModule {
}
NzPaginationModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NzPaginationComponent],
                exports: [NzPaginationComponent],
                imports: [CommonModule, FormsModule, NzSelectModule, NzI18nModule, NzIconModule]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzPaginationComponent, NzPaginationModule };
//# sourceMappingURL=ng-zorro-antd-pagination.js.map
