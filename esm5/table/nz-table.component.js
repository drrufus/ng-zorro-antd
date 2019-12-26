/**
 * @fileoverview added by tsickle
 * Generated from: nz-table.component.ts
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
import { Platform } from '@angular/cdk/platform';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ContentChildren, ElementRef, EventEmitter, Input, NgZone, Output, QueryList, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { fromEvent, merge, EMPTY, Subject } from 'rxjs';
import { flatMap, startWith, takeUntil } from 'rxjs/operators';
import { measureScrollbar, InputBoolean, InputNumber, NzConfigService, WithConfig } from 'ng-zorro-antd/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { NzThComponent } from './nz-th.component';
import { NzVirtualScrollDirective } from './nz-virtual-scroll.directive';
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'table';
/**
 * @template T
 */
var NzTableComponent = /** @class */ (function () {
    function NzTableComponent(nzConfigService, renderer, ngZone, cdr, i18n, platform, elementRef) {
        this.nzConfigService = nzConfigService;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.cdr = cdr;
        this.i18n = i18n;
        this.platform = platform;
        /**
         * public data for ngFor tr
         */
        this.data = [];
        this.locale = {}; // tslint:disable-line:no-any
        this.lastScrollLeft = 0;
        this.headerBottomStyle = {};
        this.destroy$ = new Subject();
        this.nzPageSizeOptions = [10, 20, 30, 40, 50];
        this.nzVirtualScroll = false;
        this.nzVirtualItemSize = 0;
        this.nzVirtualMaxBufferPx = 200;
        this.nzVirtualMinBufferPx = 100;
        this.nzLoadingDelay = 0;
        this.nzTotal = 0;
        this.nzWidthConfig = [];
        this.nzPageIndex = 1;
        this.nzPageSize = 10;
        this.nzData = [];
        this.nzPaginationPosition = 'bottom';
        this.nzScroll = { x: null, y: null };
        this.nzFrontPagination = true;
        this.nzTemplateMode = false;
        this.nzShowPagination = true;
        this.nzLoading = false;
        this.nzPageSizeChange = new EventEmitter();
        this.nzPageIndexChange = new EventEmitter();
        /* tslint:disable-next-line:no-any */
        this.nzCurrentPageDataChange = new EventEmitter();
        renderer.addClass(elementRef.nativeElement, 'ant-table-wrapper');
    }
    Object.defineProperty(NzTableComponent.prototype, "itemRender", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzItemRender || this.itemRenderChild;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTableComponent.prototype, "tableBodyNativeElement", {
        get: /**
         * @return {?}
         */
        function () {
            return this.tableBodyElement && this.tableBodyElement.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTableComponent.prototype, "tableHeaderNativeElement", {
        get: /**
         * @return {?}
         */
        function () {
            return this.tableHeaderElement && this.tableHeaderElement.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTableComponent.prototype, "cdkVirtualScrollNativeElement", {
        get: /**
         * @return {?}
         */
        function () {
            return this.cdkVirtualScrollElement && this.cdkVirtualScrollElement.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTableComponent.prototype, "mixTableBodyNativeElement", {
        get: /**
         * @return {?}
         */
        function () {
            return this.tableBodyNativeElement || this.cdkVirtualScrollNativeElement;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} size
     * @param {?} index
     * @return {?}
     */
    NzTableComponent.prototype.emitPageSizeOrIndex = /**
     * @param {?} size
     * @param {?} index
     * @return {?}
     */
    function (size, index) {
        if (this.nzPageSize !== size || this.nzPageIndex !== index) {
            if (this.nzPageSize !== size) {
                this.nzPageSize = size;
                this.nzPageSizeChange.emit(this.nzPageSize);
            }
            if (this.nzPageIndex !== index) {
                this.nzPageIndex = index;
                this.nzPageIndexChange.emit(this.nzPageIndex);
            }
            this.updateFrontPaginationDataIfNeeded(this.nzPageSize !== size);
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzTableComponent.prototype.syncScrollTable = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.currentTarget === e.target) {
            /** @type {?} */
            var target = (/** @type {?} */ (e.target));
            if (target.scrollLeft !== this.lastScrollLeft && this.nzScroll && this.nzScroll.x) {
                if (target === this.mixTableBodyNativeElement && this.tableHeaderNativeElement) {
                    this.tableHeaderNativeElement.scrollLeft = target.scrollLeft;
                }
                else if (target === this.tableHeaderNativeElement && this.mixTableBodyNativeElement) {
                    this.mixTableBodyNativeElement.scrollLeft = target.scrollLeft;
                }
                this.setScrollPositionClassName();
            }
            this.lastScrollLeft = target.scrollLeft;
        }
    };
    /**
     * @return {?}
     */
    NzTableComponent.prototype.setScrollPositionClassName = /**
     * @return {?}
     */
    function () {
        if (this.mixTableBodyNativeElement && this.nzScroll && this.nzScroll.x) {
            if (this.mixTableBodyNativeElement.scrollWidth === this.mixTableBodyNativeElement.clientWidth &&
                this.mixTableBodyNativeElement.scrollWidth !== 0) {
                this.setScrollName();
            }
            else if (this.mixTableBodyNativeElement.scrollLeft === 0) {
                this.setScrollName('left');
            }
            else if (this.mixTableBodyNativeElement.scrollWidth ===
                this.mixTableBodyNativeElement.scrollLeft + this.mixTableBodyNativeElement.clientWidth) {
                this.setScrollName('right');
            }
            else {
                this.setScrollName('middle');
            }
        }
    };
    /**
     * @param {?=} position
     * @return {?}
     */
    NzTableComponent.prototype.setScrollName = /**
     * @param {?=} position
     * @return {?}
     */
    function (position) {
        var _this = this;
        /** @type {?} */
        var prefix = 'ant-table-scroll-position';
        /** @type {?} */
        var classList = ['left', 'right', 'middle'];
        classList.forEach((/**
         * @param {?} name
         * @return {?}
         */
        function (name) {
            _this.renderer.removeClass(_this.tableMainElement.nativeElement, prefix + "-" + name);
        }));
        if (position) {
            this.renderer.addClass(this.tableMainElement.nativeElement, prefix + "-" + position);
        }
    };
    /**
     * @return {?}
     */
    NzTableComponent.prototype.fitScrollBar = /**
     * @return {?}
     */
    function () {
        if (this.nzScroll.y) {
            /** @type {?} */
            var scrollbarWidth = measureScrollbar('vertical');
            /** @type {?} */
            var scrollbarWidthOfHeader = measureScrollbar('horizontal', 'ant-table');
            // Add negative margin bottom for scroll bar overflow bug
            if (scrollbarWidthOfHeader > 0) {
                this.headerBottomStyle = {
                    marginBottom: "-" + scrollbarWidthOfHeader + "px",
                    paddingBottom: '0px',
                    overflowX: 'scroll',
                    overflowY: "" + (scrollbarWidth === 0 ? 'hidden' : 'scroll')
                };
                this.cdr.markForCheck();
            }
        }
    };
    /**
     * @param {?=} isPageSizeOrDataChange
     * @return {?}
     */
    NzTableComponent.prototype.updateFrontPaginationDataIfNeeded = /**
     * @param {?=} isPageSizeOrDataChange
     * @return {?}
     */
    function (isPageSizeOrDataChange) {
        var _this = this;
        if (isPageSizeOrDataChange === void 0) { isPageSizeOrDataChange = false; }
        /** @type {?} */
        var data = this.nzData || [];
        if (this.nzFrontPagination) {
            this.nzTotal = data.length;
            if (isPageSizeOrDataChange) {
                /** @type {?} */
                var maxPageIndex = Math.ceil(data.length / this.nzPageSize) || 1;
                /** @type {?} */
                var pageIndex_1 = this.nzPageIndex > maxPageIndex ? maxPageIndex : this.nzPageIndex;
                if (pageIndex_1 !== this.nzPageIndex) {
                    this.nzPageIndex = pageIndex_1;
                    Promise.resolve().then((/**
                     * @return {?}
                     */
                    function () { return _this.nzPageIndexChange.emit(pageIndex_1); }));
                }
            }
            data = data.slice((this.nzPageIndex - 1) * this.nzPageSize, this.nzPageIndex * this.nzPageSize);
        }
        this.data = tslib_1.__spread(data);
        this.nzCurrentPageDataChange.emit(this.data);
    };
    /**
     * @return {?}
     */
    NzTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.locale = _this.i18n.getLocaleData('Table');
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzTableComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        if (changes.nzScroll) {
            if (changes.nzScroll.currentValue) {
                this.nzScroll = changes.nzScroll.currentValue;
            }
            else {
                this.nzScroll = { x: null, y: null };
            }
            this.fitScrollBar();
            this.setScrollPositionClassName();
        }
        if (changes.nzData) {
            if (this.platform.isBrowser) {
                setTimeout((/**
                 * @return {?}
                 */
                function () { return _this.setScrollPositionClassName(); }));
            }
        }
        if (changes.nzPageIndex || changes.nzPageSize || changes.nzFrontPagination || changes.nzData) {
            this.updateFrontPaginationDataIfNeeded(!!(changes.nzPageSize || changes.nzData));
        }
    };
    /**
     * @return {?}
     */
    NzTableComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.platform.isBrowser) {
            return;
        }
        setTimeout((/**
         * @return {?}
         */
        function () { return _this.setScrollPositionClassName(); }));
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            merge(_this.tableHeaderNativeElement ? fromEvent(_this.tableHeaderNativeElement, 'scroll') : EMPTY, _this.mixTableBodyNativeElement ? fromEvent(_this.mixTableBodyNativeElement, 'scroll') : EMPTY)
                .pipe(takeUntil(_this.destroy$))
                .subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                _this.syncScrollTable(data);
            }));
            fromEvent(window, 'resize')
                .pipe(startWith(true), takeUntil(_this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this.fitScrollBar();
                _this.setScrollPositionClassName();
            }));
        }));
    };
    /**
     * @return {?}
     */
    NzTableComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.listOfNzThComponent.changes
            .pipe(startWith(true), flatMap((/**
         * @return {?}
         */
        function () {
            return merge.apply(void 0, tslib_1.__spread([_this.listOfNzThComponent.changes], _this.listOfNzThComponent.map((/**
             * @param {?} th
             * @return {?}
             */
            function (th) { return th.nzWidthChange$; }))));
        })), takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @return {?}
     */
    NzTableComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzTableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-table',
                    exportAs: 'nzTable',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "<ng-template #renderItemTemplate let-type let-page=\"page\">\r\n  <a class=\"ant-pagination-item-link\" *ngIf=\"type==='pre'\"><i nz-icon nzType=\"left\"></i></a>\r\n  <a class=\"ant-pagination-item-link\" *ngIf=\"type==='next'\"><i nz-icon nzType=\"right\"></i></a>\r\n  <a *ngIf=\"type=='page'\">{{ page }}</a>\r\n</ng-template>\r\n<ng-template #colGroupTemplate>\r\n  <colgroup>\r\n    <col [style.width]=\"width\" [style.minWidth]=\"width\" *ngFor=\"let width of nzWidthConfig\">\r\n    <ng-container *ngIf=\"(nzWidthConfig && !nzWidthConfig.length) || !nzWidthConfig\">\r\n      <col [style.width]=\"th.nzWidth\" [style.minWidth]=\"th.nzWidth\" *ngFor=\"let th of listOfNzThComponent\">\r\n    </ng-container>\r\n  </colgroup>\r\n</ng-template>\r\n<ng-template #headerTemplate>\r\n  <ng-template [ngTemplateOutlet]=\"colGroupTemplate\"></ng-template>\r\n  <thead class=\"ant-table-thead\" *ngIf=\"!nzScroll.y\">\r\n    <ng-template [ngTemplateOutlet]=\"nzTheadComponent?.templateRef\"></ng-template>\r\n  </thead>\r\n</ng-template>\r\n<ng-template #tableInnerTemplate>\r\n  <div #tableHeaderElement\r\n    *ngIf=\"nzScroll.y\"\r\n    [ngStyle]=\"headerBottomStyle\"\r\n    class=\"ant-table-header ant-table-hide-scrollbar\">\r\n    <table [class.ant-table-fixed]=\"nzScroll.x\" [style.width]=\"nzScroll.x\">\r\n      <ng-template [ngTemplateOutlet]=\"colGroupTemplate\"></ng-template>\r\n      <thead class=\"ant-table-thead\" *ngIf=\"nzScroll.y\">\r\n        <ng-template [ngTemplateOutlet]=\"nzTheadComponent?.templateRef\"></ng-template>\r\n      </thead>\r\n    </table>\r\n  </div>\r\n  <div #tableBodyElement *ngIf=\"!nzVirtualScroll;else scrollViewTpl\"\r\n    class=\"ant-table-body\"\r\n    [style.maxHeight]=\"nzScroll.y\"\r\n    [style.overflow-y]=\"nzScroll.y ? 'scroll' : ''\"\r\n    [style.overflow-x]=\"nzScroll.x ? 'auto' : ''\">\r\n    <table [class.ant-table-fixed]=\"nzScroll.x\" [style.width]=\"nzScroll.x\">\r\n      <ng-template [ngIf]=\"!nzVirtualScroll\" [ngTemplateOutlet]=\"headerTemplate\"></ng-template>\r\n      <ng-content></ng-content>\r\n    </table>\r\n  </div>\r\n  <ng-template #scrollViewTpl>\r\n    <cdk-virtual-scroll-viewport\r\n      class=\"ant-table-body\"\r\n      [hidden]=\"!data.length\"\r\n      [itemSize]=\"nzVirtualItemSize\"\r\n      [maxBufferPx]=\"nzVirtualMaxBufferPx\"\r\n      [minBufferPx]=\"nzVirtualMinBufferPx\"\r\n      [style.height]=\"nzScroll.y\">\r\n      <table [class.ant-table-fixed]=\"nzScroll.x\" [style.width]=\"nzScroll.x\">\r\n        <ng-template [ngIf]=\"nzVirtualScroll\" [ngTemplateOutlet]=\"headerTemplate\"></ng-template>\r\n        <tbody>\r\n          <ng-container *cdkVirtualFor=\"let item of data; let i = index; trackBy:nzVirtualForTrackBy;\">\r\n            <ng-template [ngTemplateOutlet]=\"nzVirtualScrollDirective?.templateRef\" [ngTemplateOutletContext]=\"{$implicit:item, index:i}\"></ng-template>\r\n          </ng-container>\r\n        </tbody>\r\n      </table>\r\n    </cdk-virtual-scroll-viewport>\r\n  </ng-template>\r\n  <div class=\"ant-table-placeholder\" *ngIf=\"data.length === 0 && !nzLoading && !nzTemplateMode\">\r\n    <nz-embed-empty [nzComponentName]=\"'table'\" [specificContent]=\"nzNoResult\"></nz-embed-empty>\r\n  </div>\r\n  <div class=\"ant-table-footer\" *ngIf=\"nzFooter\">\r\n    <ng-container *nzStringTemplateOutlet=\"nzFooter\">{{ nzFooter }}</ng-container>\r\n  </div>\r\n</ng-template>\r\n<ng-template #paginationTemplate>\r\n  <nz-pagination *ngIf=\"nzShowPagination && data.length\"\r\n    [nzInTable]=\"true\"\r\n    [nzShowSizeChanger]=\"nzShowSizeChanger\"\r\n    [nzPageSizeOptions]=\"nzPageSizeOptions\"\r\n    [nzItemRender]=\"itemRender\"\r\n    [nzShowQuickJumper]=\"nzShowQuickJumper\"\r\n    [nzHideOnSinglePage]=\"nzHideOnSinglePage\"\r\n    [nzShowTotal]=\"nzShowTotal\"\r\n    [nzSize]=\"nzSize === 'default' ? 'default' : 'small'\"\r\n    [nzPageSize]=\"nzPageSize\"\r\n    [nzTotal]=\"nzTotal\"\r\n    [nzSimple]=\"nzSimple\"\r\n    [nzPageIndex]=\"nzPageIndex\"\r\n    (nzPageSizeChange)=\"emitPageSizeOrIndex($event,nzPageIndex)\"\r\n    (nzPageIndexChange)=\"emitPageSizeOrIndex(nzPageSize,$event)\">\r\n  </nz-pagination>\r\n</ng-template>\r\n<nz-spin [nzDelay]=\"nzLoadingDelay\" [nzSpinning]=\"nzLoading\" [nzIndicator]=\"nzLoadingIndicator\">\r\n  <ng-container *ngIf=\"nzPaginationPosition === 'both' || nzPaginationPosition === 'top'\">\r\n    <ng-template [ngTemplateOutlet]=\"paginationTemplate\"></ng-template>\r\n  </ng-container>\r\n  <div #tableMainElement\r\n    class=\"ant-table\"\r\n    [class.ant-table-fixed-header]=\"nzScroll.x || nzScroll.y\"\r\n    [class.ant-table-bordered]=\"nzBordered\"\r\n    [class.ant-table-default]=\"nzSize === 'default'\"\r\n    [class.ant-table-middle]=\"nzSize === 'middle'\"\r\n    [class.ant-table-small]=\"nzSize === 'small'\">\r\n    <div class=\"ant-table-title\" *ngIf=\"nzTitle\">\r\n      <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\r\n    </div>\r\n    <div class=\"ant-table-content\">\r\n      <ng-container *ngIf=\"nzScroll.x || nzScroll.y; else tableInnerTemplate\">\r\n        <div class=\"ant-table-scroll\">\r\n          <ng-template [ngTemplateOutlet]=\"tableInnerTemplate\"></ng-template>\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <ng-container *ngIf=\"nzPaginationPosition === 'both' || nzPaginationPosition === 'bottom'\">\r\n    <ng-template [ngTemplateOutlet]=\"paginationTemplate\"></ng-template>\r\n  </ng-container>\r\n</nz-spin>\r\n",
                    host: {
                        '[class.ant-table-empty]': 'data.length === 0 && !nzTemplateMode'
                    },
                    styles: ["\n      nz-table {\n        display: block;\n      }\n\n      cdk-virtual-scroll-viewport.ant-table-body {\n        overflow-y: scroll;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzTableComponent.ctorParameters = function () { return [
        { type: NzConfigService },
        { type: Renderer2 },
        { type: NgZone },
        { type: ChangeDetectorRef },
        { type: NzI18nService },
        { type: Platform },
        { type: ElementRef }
    ]; };
    NzTableComponent.propDecorators = {
        listOfNzThComponent: [{ type: ContentChildren, args: [NzThComponent, { descendants: true },] }],
        tableHeaderElement: [{ type: ViewChild, args: ['tableHeaderElement', { static: false, read: ElementRef },] }],
        tableBodyElement: [{ type: ViewChild, args: ['tableBodyElement', { static: false, read: ElementRef },] }],
        tableMainElement: [{ type: ViewChild, args: ['tableMainElement', { static: false, read: ElementRef },] }],
        cdkVirtualScrollElement: [{ type: ViewChild, args: [CdkVirtualScrollViewport, { static: false, read: ElementRef },] }],
        cdkVirtualScrollViewport: [{ type: ViewChild, args: [CdkVirtualScrollViewport, { static: false, read: CdkVirtualScrollViewport },] }],
        nzVirtualScrollDirective: [{ type: ContentChild, args: [NzVirtualScrollDirective, { static: false },] }],
        nzSize: [{ type: Input }],
        nzShowTotal: [{ type: Input }],
        nzPageSizeOptions: [{ type: Input }],
        nzVirtualScroll: [{ type: Input }],
        nzVirtualItemSize: [{ type: Input }],
        nzVirtualMaxBufferPx: [{ type: Input }],
        nzVirtualMinBufferPx: [{ type: Input }],
        nzVirtualForTrackBy: [{ type: Input }],
        nzLoadingDelay: [{ type: Input }],
        nzLoadingIndicator: [{ type: Input }],
        nzTotal: [{ type: Input }],
        nzTitle: [{ type: Input }],
        nzFooter: [{ type: Input }],
        nzNoResult: [{ type: Input }],
        nzWidthConfig: [{ type: Input }],
        nzPageIndex: [{ type: Input }],
        nzPageSize: [{ type: Input }],
        nzData: [{ type: Input }],
        nzPaginationPosition: [{ type: Input }],
        nzScroll: [{ type: Input }],
        nzItemRender: [{ type: Input }],
        itemRenderChild: [{ type: ViewChild, args: ['renderItemTemplate', { static: true },] }],
        nzFrontPagination: [{ type: Input }],
        nzTemplateMode: [{ type: Input }],
        nzBordered: [{ type: Input }],
        nzShowPagination: [{ type: Input }],
        nzLoading: [{ type: Input }],
        nzShowSizeChanger: [{ type: Input }],
        nzHideOnSinglePage: [{ type: Input }],
        nzShowQuickJumper: [{ type: Input }],
        nzSimple: [{ type: Input }],
        nzPageSizeChange: [{ type: Output }],
        nzPageIndexChange: [{ type: Output }],
        nzCurrentPageDataChange: [{ type: Output }]
    };
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default'),
        tslib_1.__metadata("design:type", String)
    ], NzTableComponent.prototype, "nzSize", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTableComponent.prototype, "nzVirtualScroll", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], NzTableComponent.prototype, "nzVirtualItemSize", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], NzTableComponent.prototype, "nzVirtualMaxBufferPx", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], NzTableComponent.prototype, "nzVirtualMinBufferPx", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTableComponent.prototype, "nzFrontPagination", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTableComponent.prototype, "nzTemplateMode", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzTableComponent.prototype, "nzBordered", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTableComponent.prototype, "nzShowPagination", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTableComponent.prototype, "nzLoading", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzTableComponent.prototype, "nzShowSizeChanger", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzTableComponent.prototype, "nzHideOnSinglePage", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzTableComponent.prototype, "nzShowQuickJumper", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzTableComponent.prototype, "nzSimple", void 0);
    return NzTableComponent;
}());
export { NzTableComponent };
if (false) {
    /**
     * public data for ngFor tr
     * @type {?}
     */
    NzTableComponent.prototype.data;
    /** @type {?} */
    NzTableComponent.prototype.locale;
    /** @type {?} */
    NzTableComponent.prototype.nzTheadComponent;
    /** @type {?} */
    NzTableComponent.prototype.lastScrollLeft;
    /** @type {?} */
    NzTableComponent.prototype.headerBottomStyle;
    /**
     * @type {?}
     * @private
     */
    NzTableComponent.prototype.destroy$;
    /** @type {?} */
    NzTableComponent.prototype.listOfNzThComponent;
    /** @type {?} */
    NzTableComponent.prototype.tableHeaderElement;
    /** @type {?} */
    NzTableComponent.prototype.tableBodyElement;
    /** @type {?} */
    NzTableComponent.prototype.tableMainElement;
    /** @type {?} */
    NzTableComponent.prototype.cdkVirtualScrollElement;
    /** @type {?} */
    NzTableComponent.prototype.cdkVirtualScrollViewport;
    /** @type {?} */
    NzTableComponent.prototype.nzVirtualScrollDirective;
    /** @type {?} */
    NzTableComponent.prototype.nzSize;
    /** @type {?} */
    NzTableComponent.prototype.nzShowTotal;
    /** @type {?} */
    NzTableComponent.prototype.nzPageSizeOptions;
    /** @type {?} */
    NzTableComponent.prototype.nzVirtualScroll;
    /** @type {?} */
    NzTableComponent.prototype.nzVirtualItemSize;
    /** @type {?} */
    NzTableComponent.prototype.nzVirtualMaxBufferPx;
    /** @type {?} */
    NzTableComponent.prototype.nzVirtualMinBufferPx;
    /** @type {?} */
    NzTableComponent.prototype.nzVirtualForTrackBy;
    /** @type {?} */
    NzTableComponent.prototype.nzLoadingDelay;
    /** @type {?} */
    NzTableComponent.prototype.nzLoadingIndicator;
    /** @type {?} */
    NzTableComponent.prototype.nzTotal;
    /** @type {?} */
    NzTableComponent.prototype.nzTitle;
    /** @type {?} */
    NzTableComponent.prototype.nzFooter;
    /** @type {?} */
    NzTableComponent.prototype.nzNoResult;
    /** @type {?} */
    NzTableComponent.prototype.nzWidthConfig;
    /** @type {?} */
    NzTableComponent.prototype.nzPageIndex;
    /** @type {?} */
    NzTableComponent.prototype.nzPageSize;
    /** @type {?} */
    NzTableComponent.prototype.nzData;
    /** @type {?} */
    NzTableComponent.prototype.nzPaginationPosition;
    /** @type {?} */
    NzTableComponent.prototype.nzScroll;
    /** @type {?} */
    NzTableComponent.prototype.nzItemRender;
    /** @type {?} */
    NzTableComponent.prototype.itemRenderChild;
    /** @type {?} */
    NzTableComponent.prototype.nzFrontPagination;
    /** @type {?} */
    NzTableComponent.prototype.nzTemplateMode;
    /** @type {?} */
    NzTableComponent.prototype.nzBordered;
    /** @type {?} */
    NzTableComponent.prototype.nzShowPagination;
    /** @type {?} */
    NzTableComponent.prototype.nzLoading;
    /** @type {?} */
    NzTableComponent.prototype.nzShowSizeChanger;
    /** @type {?} */
    NzTableComponent.prototype.nzHideOnSinglePage;
    /** @type {?} */
    NzTableComponent.prototype.nzShowQuickJumper;
    /** @type {?} */
    NzTableComponent.prototype.nzSimple;
    /** @type {?} */
    NzTableComponent.prototype.nzPageSizeChange;
    /** @type {?} */
    NzTableComponent.prototype.nzPageIndexChange;
    /** @type {?} */
    NzTableComponent.prototype.nzCurrentPageDataChange;
    /** @type {?} */
    NzTableComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzTableComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzTableComponent.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    NzTableComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzTableComponent.prototype.i18n;
    /**
     * @type {?}
     * @private
     */
    NzTableComponent.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90YWJsZS8iLCJzb3VyY2VzIjpbIm56LXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2xFLE9BQU8sRUFHTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osZUFBZSxFQUNmLFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFJTixNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsRUFFVCxXQUFXLEVBRVgsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRS9ELE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsWUFBWSxFQUNaLFdBQVcsRUFDWCxlQUFlLEVBRWYsVUFBVSxFQUNYLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR25ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVsRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7SUFFbkUsd0JBQXdCLEdBQUcsT0FBTzs7OztBQUV4QztJQWdNRSwwQkFDUyxlQUFnQyxFQUMvQixRQUFtQixFQUNuQixNQUFjLEVBQ2QsR0FBc0IsRUFDdEIsSUFBbUIsRUFDbkIsUUFBa0IsRUFDMUIs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K0JBQThCOzs7OztJQUM5QixnQ0FBMkI7Ozs7O0lBQzNCLG9DQUEwQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQgfSBmcm9tICdAYW5ndWxhci9jZGsvc2Nyb2xsaW5nJztcclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBRdWVyeUxpc3QsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVHJhY2tCeUZ1bmN0aW9uLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQsIG1lcmdlLCBFTVBUWSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmbGF0TWFwLCBzdGFydFdpdGgsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgbWVhc3VyZVNjcm9sbGJhcixcclxuICBJbnB1dEJvb2xlYW4sXHJcbiAgSW5wdXROdW1iZXIsXHJcbiAgTnpDb25maWdTZXJ2aWNlLFxyXG4gIE56U2l6ZU1EU1R5cGUsXHJcbiAgV2l0aENvbmZpZ1xyXG59IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5pbXBvcnQgeyBQYWdpbmF0aW9uSXRlbVJlbmRlckNvbnRleHQgfSBmcm9tICduZy16b3Jyby1hbnRkL3BhZ2luYXRpb24nO1xyXG5cclxuaW1wb3J0IHsgTnpUaENvbXBvbmVudCB9IGZyb20gJy4vbnotdGguY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpUaGVhZENvbXBvbmVudCB9IGZyb20gJy4vbnotdGhlYWQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpWaXJ0dWFsU2Nyb2xsRGlyZWN0aXZlIH0gZnJvbSAnLi9uei12aXJ0dWFsLXNjcm9sbC5kaXJlY3RpdmUnO1xyXG5cclxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ3RhYmxlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotdGFibGUnLFxyXG4gIGV4cG9ydEFzOiAnbnpUYWJsZScsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotdGFibGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LXRhYmxlLWVtcHR5XSc6ICdkYXRhLmxlbmd0aCA9PT0gMCAmJiAhbnpUZW1wbGF0ZU1vZGUnXHJcbiAgfSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgbnotdGFibGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQuYW50LXRhYmxlLWJvZHkge1xyXG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWFueVxyXG5leHBvcnQgY2xhc3MgTnpUYWJsZUNvbXBvbmVudDxUID0gYW55PiBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMsIEFmdGVyQ29udGVudEluaXQge1xyXG4gIC8qKiBwdWJsaWMgZGF0YSBmb3IgbmdGb3IgdHIgKi9cclxuICBkYXRhOiBUW10gPSBbXTtcclxuICBsb2NhbGU6IGFueSA9IHt9OyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxyXG4gIG56VGhlYWRDb21wb25lbnQ6IE56VGhlYWRDb21wb25lbnQ7XHJcbiAgbGFzdFNjcm9sbExlZnQgPSAwO1xyXG4gIGhlYWRlckJvdHRvbVN0eWxlID0ge307XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgQENvbnRlbnRDaGlsZHJlbihOelRoQ29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIGxpc3RPZk56VGhDb21wb25lbnQ6IFF1ZXJ5TGlzdDxOelRoQ29tcG9uZW50PjtcclxuICBAVmlld0NoaWxkKCd0YWJsZUhlYWRlckVsZW1lbnQnLCB7IHN0YXRpYzogZmFsc2UsIHJlYWQ6IEVsZW1lbnRSZWYgfSkgdGFibGVIZWFkZXJFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ3RhYmxlQm9keUVsZW1lbnQnLCB7IHN0YXRpYzogZmFsc2UsIHJlYWQ6IEVsZW1lbnRSZWYgfSkgdGFibGVCb2R5RWxlbWVudDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCd0YWJsZU1haW5FbGVtZW50JywgeyBzdGF0aWM6IGZhbHNlLCByZWFkOiBFbGVtZW50UmVmIH0pIHRhYmxlTWFpbkVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZChDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQsIHsgc3RhdGljOiBmYWxzZSwgcmVhZDogRWxlbWVudFJlZiB9KSBjZGtWaXJ0dWFsU2Nyb2xsRWxlbWVudDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKENka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydCwgeyBzdGF0aWM6IGZhbHNlLCByZWFkOiBDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQgfSlcclxuICBjZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQ6IENka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydDtcclxuICBAQ29udGVudENoaWxkKE56VmlydHVhbFNjcm9sbERpcmVjdGl2ZSwgeyBzdGF0aWM6IGZhbHNlIH0pIG56VmlydHVhbFNjcm9sbERpcmVjdGl2ZTogTnpWaXJ0dWFsU2Nyb2xsRGlyZWN0aXZlO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgJ2RlZmF1bHQnKSBuelNpemU6IE56U2l6ZU1EU1R5cGU7XHJcbiAgQElucHV0KCkgbnpTaG93VG90YWw6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBudW1iZXI7IHJhbmdlOiBbbnVtYmVyLCBudW1iZXJdIH0+O1xyXG4gIEBJbnB1dCgpIG56UGFnZVNpemVPcHRpb25zID0gWzEwLCAyMCwgMzAsIDQwLCA1MF07XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56VmlydHVhbFNjcm9sbCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG56VmlydHVhbEl0ZW1TaXplID0gMDtcclxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBuelZpcnR1YWxNYXhCdWZmZXJQeCA9IDIwMDtcclxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBuelZpcnR1YWxNaW5CdWZmZXJQeCA9IDEwMDtcclxuICBASW5wdXQoKSBuelZpcnR1YWxGb3JUcmFja0J5OiBUcmFja0J5RnVuY3Rpb248VD4gfCB1bmRlZmluZWQ7XHJcbiAgQElucHV0KCkgbnpMb2FkaW5nRGVsYXkgPSAwO1xyXG4gIEBJbnB1dCgpIG56TG9hZGluZ0luZGljYXRvcjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpUb3RhbCA9IDA7XHJcbiAgQElucHV0KCkgbnpUaXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpGb290ZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56Tm9SZXN1bHQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56V2lkdGhDb25maWc6IHN0cmluZ1tdID0gW107XHJcbiAgQElucHV0KCkgbnpQYWdlSW5kZXggPSAxO1xyXG4gIEBJbnB1dCgpIG56UGFnZVNpemUgPSAxMDtcclxuICBASW5wdXQoKSBuekRhdGE6IFRbXSA9IFtdO1xyXG4gIEBJbnB1dCgpIG56UGFnaW5hdGlvblBvc2l0aW9uOiAndG9wJyB8ICdib3R0b20nIHwgJ2JvdGgnID0gJ2JvdHRvbSc7XHJcbiAgQElucHV0KCkgbnpTY3JvbGw6IHsgeD86IHN0cmluZyB8IG51bGw7IHk/OiBzdHJpbmcgfCBudWxsIH0gPSB7IHg6IG51bGwsIHk6IG51bGwgfTtcclxuXHJcbiAgQElucHV0KCkgbnpJdGVtUmVuZGVyOiBUZW1wbGF0ZVJlZjxQYWdpbmF0aW9uSXRlbVJlbmRlckNvbnRleHQ+O1xyXG4gIEBWaWV3Q2hpbGQoJ3JlbmRlckl0ZW1UZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pIGl0ZW1SZW5kZXJDaGlsZDogVGVtcGxhdGVSZWY8UGFnaW5hdGlvbkl0ZW1SZW5kZXJDb250ZXh0PjtcclxuXHJcbiAgZ2V0IGl0ZW1SZW5kZXIoKTogVGVtcGxhdGVSZWY8UGFnaW5hdGlvbkl0ZW1SZW5kZXJDb250ZXh0PiB7XHJcbiAgICByZXR1cm4gdGhpcy5uekl0ZW1SZW5kZXIgfHwgdGhpcy5pdGVtUmVuZGVyQ2hpbGQ7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpGcm9udFBhZ2luYXRpb24gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelRlbXBsYXRlTW9kZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgZmFsc2UpIEBJbnB1dEJvb2xlYW4oKSBuekJvcmRlcmVkOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dQYWdpbmF0aW9uID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpMb2FkaW5nID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCBmYWxzZSkgQElucHV0Qm9vbGVhbigpIG56U2hvd1NpemVDaGFuZ2VyOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgZmFsc2UpIEBJbnB1dEJvb2xlYW4oKSBuekhpZGVPblNpbmdsZVBhZ2U6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCBmYWxzZSkgQElucHV0Qm9vbGVhbigpIG56U2hvd1F1aWNrSnVtcGVyOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgZmFsc2UpIEBJbnB1dEJvb2xlYW4oKSBuelNpbXBsZTogYm9vbGVhbjtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpQYWdlU2l6ZUNoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56UGFnZUluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q3VycmVudFBhZ2VEYXRhQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55W10+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBnZXQgdGFibGVCb2R5TmF0aXZlRWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICByZXR1cm4gdGhpcy50YWJsZUJvZHlFbGVtZW50ICYmIHRoaXMudGFibGVCb2R5RWxlbWVudC5uYXRpdmVFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRhYmxlSGVhZGVyTmF0aXZlRWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICByZXR1cm4gdGhpcy50YWJsZUhlYWRlckVsZW1lbnQgJiYgdGhpcy50YWJsZUhlYWRlckVsZW1lbnQubmF0aXZlRWxlbWVudDtcclxuICB9XHJcblxyXG4gIGdldCBjZGtWaXJ0dWFsU2Nyb2xsTmF0aXZlRWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICByZXR1cm4gdGhpcy5jZGtWaXJ0dWFsU2Nyb2xsRWxlbWVudCAmJiB0aGlzLmNka1ZpcnR1YWxTY3JvbGxFbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBnZXQgbWl4VGFibGVCb2R5TmF0aXZlRWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICByZXR1cm4gdGhpcy50YWJsZUJvZHlOYXRpdmVFbGVtZW50IHx8IHRoaXMuY2RrVmlydHVhbFNjcm9sbE5hdGl2ZUVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBlbWl0UGFnZVNpemVPckluZGV4KHNpemU6IG51bWJlciwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpQYWdlU2l6ZSAhPT0gc2l6ZSB8fCB0aGlzLm56UGFnZUluZGV4ICE9PSBpbmRleCkge1xyXG4gICAgICBpZiAodGhpcy5uelBhZ2VTaXplICE9PSBzaXplKSB7XHJcbiAgICAgICAgdGhpcy5uelBhZ2VTaXplID0gc2l6ZTtcclxuICAgICAgICB0aGlzLm56UGFnZVNpemVDaGFuZ2UuZW1pdCh0aGlzLm56UGFnZVNpemUpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLm56UGFnZUluZGV4ICE9PSBpbmRleCkge1xyXG4gICAgICAgIHRoaXMubnpQYWdlSW5kZXggPSBpbmRleDtcclxuICAgICAgICB0aGlzLm56UGFnZUluZGV4Q2hhbmdlLmVtaXQodGhpcy5uelBhZ2VJbmRleCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy51cGRhdGVGcm9udFBhZ2luYXRpb25EYXRhSWZOZWVkZWQodGhpcy5uelBhZ2VTaXplICE9PSBzaXplKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN5bmNTY3JvbGxUYWJsZShlOiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoZS5jdXJyZW50VGFyZ2V0ID09PSBlLnRhcmdldCkge1xyXG4gICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgaWYgKHRhcmdldC5zY3JvbGxMZWZ0ICE9PSB0aGlzLmxhc3RTY3JvbGxMZWZ0ICYmIHRoaXMubnpTY3JvbGwgJiYgdGhpcy5uelNjcm9sbC54KSB7XHJcbiAgICAgICAgaWYgKHRhcmdldCA9PT0gdGhpcy5taXhUYWJsZUJvZHlOYXRpdmVFbGVtZW50ICYmIHRoaXMudGFibGVIZWFkZXJOYXRpdmVFbGVtZW50KSB7XHJcbiAgICAgICAgICB0aGlzLnRhYmxlSGVhZGVyTmF0aXZlRWxlbWVudC5zY3JvbGxMZWZ0ID0gdGFyZ2V0LnNjcm9sbExlZnQ7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQgPT09IHRoaXMudGFibGVIZWFkZXJOYXRpdmVFbGVtZW50ICYmIHRoaXMubWl4VGFibGVCb2R5TmF0aXZlRWxlbWVudCkge1xyXG4gICAgICAgICAgdGhpcy5taXhUYWJsZUJvZHlOYXRpdmVFbGVtZW50LnNjcm9sbExlZnQgPSB0YXJnZXQuc2Nyb2xsTGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTY3JvbGxQb3NpdGlvbkNsYXNzTmFtZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubGFzdFNjcm9sbExlZnQgPSB0YXJnZXQuc2Nyb2xsTGVmdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldFNjcm9sbFBvc2l0aW9uQ2xhc3NOYW1lKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubWl4VGFibGVCb2R5TmF0aXZlRWxlbWVudCAmJiB0aGlzLm56U2Nyb2xsICYmIHRoaXMubnpTY3JvbGwueCkge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGhpcy5taXhUYWJsZUJvZHlOYXRpdmVFbGVtZW50LnNjcm9sbFdpZHRoID09PSB0aGlzLm1peFRhYmxlQm9keU5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGggJiZcclxuICAgICAgICB0aGlzLm1peFRhYmxlQm9keU5hdGl2ZUVsZW1lbnQuc2Nyb2xsV2lkdGggIT09IDBcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTY3JvbGxOYW1lKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5taXhUYWJsZUJvZHlOYXRpdmVFbGVtZW50LnNjcm9sbExlZnQgPT09IDApIHtcclxuICAgICAgICB0aGlzLnNldFNjcm9sbE5hbWUoJ2xlZnQnKTtcclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICB0aGlzLm1peFRhYmxlQm9keU5hdGl2ZUVsZW1lbnQuc2Nyb2xsV2lkdGggPT09XHJcbiAgICAgICAgdGhpcy5taXhUYWJsZUJvZHlOYXRpdmVFbGVtZW50LnNjcm9sbExlZnQgKyB0aGlzLm1peFRhYmxlQm9keU5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGhcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTY3JvbGxOYW1lKCdyaWdodCcpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2V0U2Nyb2xsTmFtZSgnbWlkZGxlJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldFNjcm9sbE5hbWUocG9zaXRpb24/OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnN0IHByZWZpeCA9ICdhbnQtdGFibGUtc2Nyb2xsLXBvc2l0aW9uJztcclxuICAgIGNvbnN0IGNsYXNzTGlzdCA9IFsnbGVmdCcsICdyaWdodCcsICdtaWRkbGUnXTtcclxuICAgIGNsYXNzTGlzdC5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMudGFibGVNYWluRWxlbWVudC5uYXRpdmVFbGVtZW50LCBgJHtwcmVmaXh9LSR7bmFtZX1gKTtcclxuICAgIH0pO1xyXG4gICAgaWYgKHBvc2l0aW9uKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy50YWJsZU1haW5FbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIGAke3ByZWZpeH0tJHtwb3NpdGlvbn1gKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZpdFNjcm9sbEJhcigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56U2Nyb2xsLnkpIHtcclxuICAgICAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSBtZWFzdXJlU2Nyb2xsYmFyKCd2ZXJ0aWNhbCcpO1xyXG4gICAgICBjb25zdCBzY3JvbGxiYXJXaWR0aE9mSGVhZGVyID0gbWVhc3VyZVNjcm9sbGJhcignaG9yaXpvbnRhbCcsICdhbnQtdGFibGUnKTtcclxuICAgICAgLy8gQWRkIG5lZ2F0aXZlIG1hcmdpbiBib3R0b20gZm9yIHNjcm9sbCBiYXIgb3ZlcmZsb3cgYnVnXHJcbiAgICAgIGlmIChzY3JvbGxiYXJXaWR0aE9mSGVhZGVyID4gMCkge1xyXG4gICAgICAgIHRoaXMuaGVhZGVyQm90dG9tU3R5bGUgPSB7XHJcbiAgICAgICAgICBtYXJnaW5Cb3R0b206IGAtJHtzY3JvbGxiYXJXaWR0aE9mSGVhZGVyfXB4YCxcclxuICAgICAgICAgIHBhZGRpbmdCb3R0b206ICcwcHgnLFxyXG4gICAgICAgICAgb3ZlcmZsb3dYOiAnc2Nyb2xsJyxcclxuICAgICAgICAgIG92ZXJmbG93WTogYCR7c2Nyb2xsYmFyV2lkdGggPT09IDAgPyAnaGlkZGVuJyA6ICdzY3JvbGwnfWBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVGcm9udFBhZ2luYXRpb25EYXRhSWZOZWVkZWQoaXNQYWdlU2l6ZU9yRGF0YUNoYW5nZTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICBsZXQgZGF0YSA9IHRoaXMubnpEYXRhIHx8IFtdO1xyXG4gICAgaWYgKHRoaXMubnpGcm9udFBhZ2luYXRpb24pIHtcclxuICAgICAgdGhpcy5uelRvdGFsID0gZGF0YS5sZW5ndGg7XHJcbiAgICAgIGlmIChpc1BhZ2VTaXplT3JEYXRhQ2hhbmdlKSB7XHJcbiAgICAgICAgY29uc3QgbWF4UGFnZUluZGV4ID0gTWF0aC5jZWlsKGRhdGEubGVuZ3RoIC8gdGhpcy5uelBhZ2VTaXplKSB8fCAxO1xyXG4gICAgICAgIGNvbnN0IHBhZ2VJbmRleCA9IHRoaXMubnpQYWdlSW5kZXggPiBtYXhQYWdlSW5kZXggPyBtYXhQYWdlSW5kZXggOiB0aGlzLm56UGFnZUluZGV4O1xyXG4gICAgICAgIGlmIChwYWdlSW5kZXggIT09IHRoaXMubnpQYWdlSW5kZXgpIHtcclxuICAgICAgICAgIHRoaXMubnpQYWdlSW5kZXggPSBwYWdlSW5kZXg7XHJcbiAgICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMubnpQYWdlSW5kZXhDaGFuZ2UuZW1pdChwYWdlSW5kZXgpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZGF0YSA9IGRhdGEuc2xpY2UoKHRoaXMubnpQYWdlSW5kZXggLSAxKSAqIHRoaXMubnpQYWdlU2l6ZSwgdGhpcy5uelBhZ2VJbmRleCAqIHRoaXMubnpQYWdlU2l6ZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmRhdGEgPSBbLi4uZGF0YV07XHJcbiAgICB0aGlzLm56Q3VycmVudFBhZ2VEYXRhQ2hhbmdlLmVtaXQodGhpcy5kYXRhKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZSxcclxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxyXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZlxyXG4gICkge1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LXRhYmxlLXdyYXBwZXInKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnVGFibGUnKTtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLm56U2Nyb2xsKSB7XHJcbiAgICAgIGlmIChjaGFuZ2VzLm56U2Nyb2xsLmN1cnJlbnRWYWx1ZSkge1xyXG4gICAgICAgIHRoaXMubnpTY3JvbGwgPSBjaGFuZ2VzLm56U2Nyb2xsLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLm56U2Nyb2xsID0geyB4OiBudWxsLCB5OiBudWxsIH07XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5maXRTY3JvbGxCYXIoKTtcclxuICAgICAgdGhpcy5zZXRTY3JvbGxQb3NpdGlvbkNsYXNzTmFtZSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMubnpEYXRhKSB7XHJcbiAgICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zZXRTY3JvbGxQb3NpdGlvbkNsYXNzTmFtZSgpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMubnpQYWdlSW5kZXggfHwgY2hhbmdlcy5uelBhZ2VTaXplIHx8IGNoYW5nZXMubnpGcm9udFBhZ2luYXRpb24gfHwgY2hhbmdlcy5uekRhdGEpIHtcclxuICAgICAgdGhpcy51cGRhdGVGcm9udFBhZ2luYXRpb25EYXRhSWZOZWVkZWQoISEoY2hhbmdlcy5uelBhZ2VTaXplIHx8IGNoYW5nZXMubnpEYXRhKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zZXRTY3JvbGxQb3NpdGlvbkNsYXNzTmFtZSgpKTtcclxuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgbWVyZ2U8TW91c2VFdmVudD4oXHJcbiAgICAgICAgdGhpcy50YWJsZUhlYWRlck5hdGl2ZUVsZW1lbnQgPyBmcm9tRXZlbnQ8TW91c2VFdmVudD4odGhpcy50YWJsZUhlYWRlck5hdGl2ZUVsZW1lbnQsICdzY3JvbGwnKSA6IEVNUFRZLFxyXG4gICAgICAgIHRoaXMubWl4VGFibGVCb2R5TmF0aXZlRWxlbWVudCA/IGZyb21FdmVudDxNb3VzZUV2ZW50Pih0aGlzLm1peFRhYmxlQm9keU5hdGl2ZUVsZW1lbnQsICdzY3JvbGwnKSA6IEVNUFRZXHJcbiAgICAgIClcclxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgICAgLnN1YnNjcmliZSgoZGF0YTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zeW5jU2Nyb2xsVGFibGUoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIGZyb21FdmVudDxVSUV2ZW50Pih3aW5kb3csICdyZXNpemUnKVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgc3RhcnRXaXRoKHRydWUpLFxyXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5maXRTY3JvbGxCYXIoKTtcclxuICAgICAgICAgIHRoaXMuc2V0U2Nyb2xsUG9zaXRpb25DbGFzc05hbWUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5saXN0T2ZOelRoQ29tcG9uZW50LmNoYW5nZXNcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgc3RhcnRXaXRoKHRydWUpLFxyXG4gICAgICAgIGZsYXRNYXAoKCkgPT5cclxuICAgICAgICAgIG1lcmdlKHRoaXMubGlzdE9mTnpUaENvbXBvbmVudC5jaGFuZ2VzLCAuLi50aGlzLmxpc3RPZk56VGhDb21wb25lbnQubWFwKHRoID0+IHRoLm56V2lkdGhDaGFuZ2UkKSlcclxuICAgICAgICApLFxyXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==