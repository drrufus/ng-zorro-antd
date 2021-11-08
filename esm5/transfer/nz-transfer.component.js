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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, QueryList, Renderer2, TemplateRef, ViewChildren, ViewEncapsulation } from '@angular/core';
import { of, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InputBoolean, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { NzTransferListComponent } from './nz-transfer-list.component';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/i18n';
import * as ɵngcc2 from 'ng-zorro-antd/core';
import * as ɵngcc3 from './nz-transfer-list.component';
import * as ɵngcc4 from '@angular/common';
import * as ɵngcc5 from 'ng-zorro-antd/button';
import * as ɵngcc6 from 'ng-zorro-antd/icon';

function NzTransferComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.nzOperations[1]);
} }
function NzTransferComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.nzOperations[0]);
} }
var NzTransferComponent = /** @class */ (function () {
    // #endregion
    function NzTransferComponent(cdr, i18n, nzUpdateHostClassService, elementRef, renderer) {
        var _this = this;
        this.cdr = cdr;
        this.i18n = i18n;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.elementRef = elementRef;
        this.unsubscribe$ = new Subject();
        // tslint:disable-next-line:no-any
        this.locale = {};
        this.leftFilter = '';
        this.rightFilter = '';
        // #region fields
        this.nzDisabled = false;
        this.nzDataSource = [];
        this.nzTitles = ['', ''];
        this.nzOperations = [];
        this.nzShowSelectAll = true;
        this.nzCanMove = (/**
         * @param {?} arg
         * @return {?}
         */
        function (arg) { return of(arg.list); });
        this.nzRenderList = [null, null];
        this.nzShowSearch = false;
        // events
        this.nzChange = new EventEmitter();
        this.nzSearchChange = new EventEmitter();
        this.nzSelectChange = new EventEmitter();
        // #endregion
        // #region process data
        // left
        this.leftDataSource = [];
        // right
        this.rightDataSource = [];
        this.handleLeftSelectAll = (/**
         * @param {?} checked
         * @return {?}
         */
        function (checked) { return _this.handleSelect('left', checked); });
        this.handleRightSelectAll = (/**
         * @param {?} checked
         * @return {?}
         */
        function (checked) { return _this.handleSelect('right', checked); });
        this.handleLeftSelect = (/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return _this.handleSelect('left', !!item.checked, item); });
        this.handleRightSelect = (/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return _this.handleSelect('right', !!item.checked, item); });
        // #endregion
        // #region operation
        this.leftActive = false;
        this.rightActive = false;
        this.moveToLeft = (/**
         * @return {?}
         */
        function () { return _this.moveTo('left'); });
        this.moveToRight = (/**
         * @return {?}
         */
        function () { return _this.moveTo('right'); });
        renderer.addClass(elementRef.nativeElement, 'ant-transfer');
    }
    /**
     * @private
     * @return {?}
     */
    NzTransferComponent.prototype.splitDataSource = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.leftDataSource = [];
        this.rightDataSource = [];
        this.nzDataSource.forEach((/**
         * @param {?} record
         * @return {?}
         */
        function (record) {
            if (record.direction === 'right') {
                record.direction = 'right';
                _this.rightDataSource.push(record);
            }
            else {
                record.direction = 'left';
                _this.leftDataSource.push(record);
            }
        }));
    };
    /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    NzTransferComponent.prototype.getCheckedData = /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    function (direction) {
        return this[direction === 'left' ? 'leftDataSource' : 'rightDataSource'].filter((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return w.checked; }));
    };
    /**
     * @param {?} direction
     * @param {?} checked
     * @param {?=} item
     * @return {?}
     */
    NzTransferComponent.prototype.handleSelect = /**
     * @param {?} direction
     * @param {?} checked
     * @param {?=} item
     * @return {?}
     */
    function (direction, checked, item) {
        /** @type {?} */
        var list = this.getCheckedData(direction);
        this.updateOperationStatus(direction, list.length);
        this.nzSelectChange.emit({ direction: direction, checked: checked, list: list, item: item });
    };
    /**
     * @param {?} ret
     * @return {?}
     */
    NzTransferComponent.prototype.handleFilterChange = /**
     * @param {?} ret
     * @return {?}
     */
    function (ret) {
        this.nzSearchChange.emit(ret);
    };
    /**
     * @private
     * @param {?} direction
     * @param {?=} count
     * @return {?}
     */
    NzTransferComponent.prototype.updateOperationStatus = /**
     * @private
     * @param {?} direction
     * @param {?=} count
     * @return {?}
     */
    function (direction, count) {
        this[direction === 'right' ? 'leftActive' : 'rightActive'] =
            (typeof count === 'undefined' ? this.getCheckedData(direction).filter((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return !w.disabled; })).length : count) > 0;
    };
    /**
     * @param {?} direction
     * @return {?}
     */
    NzTransferComponent.prototype.moveTo = /**
     * @param {?} direction
     * @return {?}
     */
    function (direction) {
        var _this = this;
        /** @type {?} */
        var oppositeDirection = direction === 'left' ? 'right' : 'left';
        this.updateOperationStatus(oppositeDirection, 0);
        /** @type {?} */
        var datasource = direction === 'left' ? this.rightDataSource : this.leftDataSource;
        /** @type {?} */
        var moveList = datasource.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.checked === true && !item.disabled; }));
        this.nzCanMove({ direction: direction, list: moveList }).subscribe((/**
         * @param {?} newMoveList
         * @return {?}
         */
        function (newMoveList) { return _this.truthMoveTo(direction, newMoveList.filter((/**
         * @param {?} i
         * @return {?}
         */
        function (i) { return !!i; }))); }), (/**
         * @return {?}
         */
        function () { return moveList.forEach((/**
         * @param {?} i
         * @return {?}
         */
        function (i) { return (i.checked = false); })); }));
    };
    /**
     * @private
     * @param {?} direction
     * @param {?} list
     * @return {?}
     */
    NzTransferComponent.prototype.truthMoveTo = /**
     * @private
     * @param {?} direction
     * @param {?} list
     * @return {?}
     */
    function (direction, list) {
        var e_1, _a;
        /** @type {?} */
        var oppositeDirection = direction === 'left' ? 'right' : 'left';
        /** @type {?} */
        var datasource = direction === 'left' ? this.rightDataSource : this.leftDataSource;
        /** @type {?} */
        var targetDatasource = direction === 'left' ? this.leftDataSource : this.rightDataSource;
        try {
            for (var list_1 = tslib_1.__values(list), list_1_1 = list_1.next(); !list_1_1.done; list_1_1 = list_1.next()) {
                var item = list_1_1.value;
                item.checked = false;
                item.hide = false;
                item.direction = direction;
                datasource.splice(datasource.indexOf(item), 1);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (list_1_1 && !list_1_1.done && (_a = list_1.return)) _a.call(list_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        targetDatasource.splice.apply(targetDatasource, tslib_1.__spread([0, 0], list));
        this.updateOperationStatus(oppositeDirection);
        this.nzChange.emit({
            from: oppositeDirection,
            to: direction,
            list: list
        });
        this.markForCheckAllList();
    };
    /**
     * @private
     * @return {?}
     */
    NzTransferComponent.prototype.setClassMap = /**
     * @private
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var prefixCls = 'ant-transfer';
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, (_a = {},
            _a[prefixCls + "-disabled"] = this.nzDisabled,
            _a[prefixCls + "-customize-list"] = this.nzRenderList.some((/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return !!i; })),
            _a));
    };
    /**
     * @private
     * @return {?}
     */
    NzTransferComponent.prototype.markForCheckAllList = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.lists) {
            return;
        }
        this.lists.forEach((/**
         * @param {?} i
         * @return {?}
         */
        function (i) { return i.markForCheck(); }));
    };
    /**
     * @return {?}
     */
    NzTransferComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.i18n.localeChange.pipe(takeUntil(this.unsubscribe$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.locale = _this.i18n.getLocaleData('Transfer');
            _this.markForCheckAllList();
        }));
        this.setClassMap();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzTransferComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.setClassMap();
        if (changes.nzDataSource || changes.nzTargetKeys) {
            this.splitDataSource();
            this.updateOperationStatus('left');
            this.updateOperationStatus('right');
            this.cdr.detectChanges();
            this.markForCheckAllList();
        }
    };
    /**
     * @return {?}
     */
    NzTransferComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    /** @nocollapse */
    NzTransferComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NzI18nService },
        { type: NzUpdateHostClassService },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    NzTransferComponent.propDecorators = {
        lists: [{ type: ViewChildren, args: [NzTransferListComponent,] }],
        nzDisabled: [{ type: Input }],
        nzDataSource: [{ type: Input }],
        nzTitles: [{ type: Input }],
        nzOperations: [{ type: Input }],
        nzListStyle: [{ type: Input }],
        nzShowSelectAll: [{ type: Input }],
        nzItemUnit: [{ type: Input }],
        nzItemsUnit: [{ type: Input }],
        nzCanMove: [{ type: Input }],
        nzRenderList: [{ type: Input }],
        nzRender: [{ type: Input }],
        nzFooter: [{ type: Input }],
        nzShowSearch: [{ type: Input }],
        nzFilterOption: [{ type: Input }],
        nzSearchPlaceholder: [{ type: Input }],
        nzNotFoundContent: [{ type: Input }],
        nzChange: [{ type: Output }],
        nzSearchChange: [{ type: Output }],
        nzSelectChange: [{ type: Output }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTransferComponent.prototype, "nzDisabled", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTransferComponent.prototype, "nzShowSelectAll", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTransferComponent.prototype, "nzShowSearch", void 0);
NzTransferComponent.ɵfac = function NzTransferComponent_Factory(t) { return new (t || NzTransferComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzI18nService), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NzUpdateHostClassService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2)); };
NzTransferComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTransferComponent, selectors: [["nz-transfer"]], viewQuery: function NzTransferComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(NzTransferListComponent, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.lists = _t);
    } }, hostVars: 2, hostBindings: function NzTransferComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-transfer-disabled", ctx.nzDisabled);
    } }, inputs: { nzDisabled: "nzDisabled", nzDataSource: "nzDataSource", nzTitles: "nzTitles", nzOperations: "nzOperations", nzShowSelectAll: "nzShowSelectAll", nzCanMove: "nzCanMove", nzRenderList: "nzRenderList", nzShowSearch: "nzShowSearch", nzListStyle: "nzListStyle", nzItemUnit: "nzItemUnit", nzItemsUnit: "nzItemsUnit", nzRender: "nzRender", nzFooter: "nzFooter", nzFilterOption: "nzFilterOption", nzSearchPlaceholder: "nzSearchPlaceholder", nzNotFoundContent: "nzNotFoundContent" }, outputs: { nzChange: "nzChange", nzSearchChange: "nzSearchChange", nzSelectChange: "nzSelectChange" }, exportAs: ["nzTransfer"], features: [ɵngcc0.ɵɵProvidersFeature([NzUpdateHostClassService]), ɵngcc0.ɵɵNgOnChangesFeature], decls: 9, vars: 38, consts: [["data-direction", "left", 1, "ant-transfer-list", 3, "ngStyle", "titleText", "showSelectAll", "dataSource", "filter", "filterOption", "renderList", "render", "disabled", "showSearch", "searchPlaceholder", "notFoundContent", "itemUnit", "itemsUnit", "footer", "filterChange", "handleSelect", "handleSelectAll"], [1, "ant-transfer-operation"], ["nz-button", "", 3, "disabled", "nzType", "nzSize", "click"], ["nz-icon", "", "nzType", "left"], [4, "ngIf"], ["nz-icon", "", "nzType", "right"], ["data-direction", "right", 1, "ant-transfer-list", 3, "ngStyle", "titleText", "showSelectAll", "dataSource", "filter", "filterOption", "renderList", "render", "disabled", "showSearch", "searchPlaceholder", "notFoundContent", "itemUnit", "itemsUnit", "footer", "filterChange", "handleSelect", "handleSelectAll"]], template: function NzTransferComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "nz-transfer-list", 0);
        ɵngcc0.ɵɵlistener("filterChange", function NzTransferComponent_Template_nz_transfer_list_filterChange_0_listener($event) { return ctx.handleFilterChange($event); })("handleSelect", function NzTransferComponent_Template_nz_transfer_list_handleSelect_0_listener($event) { return ctx.handleLeftSelect($event); })("handleSelectAll", function NzTransferComponent_Template_nz_transfer_list_handleSelectAll_0_listener($event) { return ctx.handleLeftSelectAll($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "button", 2);
        ɵngcc0.ɵɵlistener("click", function NzTransferComponent_Template_button_click_2_listener() { return ctx.moveToLeft(); });
        ɵngcc0.ɵɵelement(3, "i", 3);
        ɵngcc0.ɵɵtemplate(4, NzTransferComponent_span_4_Template, 2, 1, "span", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "button", 2);
        ɵngcc0.ɵɵlistener("click", function NzTransferComponent_Template_button_click_5_listener() { return ctx.moveToRight(); });
        ɵngcc0.ɵɵelement(6, "i", 5);
        ɵngcc0.ɵɵtemplate(7, NzTransferComponent_span_7_Template, 2, 1, "span", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(8, "nz-transfer-list", 6);
        ɵngcc0.ɵɵlistener("filterChange", function NzTransferComponent_Template_nz_transfer_list_filterChange_8_listener($event) { return ctx.handleFilterChange($event); })("handleSelect", function NzTransferComponent_Template_nz_transfer_list_handleSelect_8_listener($event) { return ctx.handleRightSelect($event); })("handleSelectAll", function NzTransferComponent_Template_nz_transfer_list_handleSelectAll_8_listener($event) { return ctx.handleRightSelectAll($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngStyle", ctx.nzListStyle)("titleText", ctx.nzTitles[0])("showSelectAll", ctx.nzShowSelectAll)("dataSource", ctx.leftDataSource)("filter", ctx.leftFilter)("filterOption", ctx.nzFilterOption)("renderList", ctx.nzRenderList[0])("render", ctx.nzRender)("disabled", ctx.nzDisabled)("showSearch", ctx.nzShowSearch)("searchPlaceholder", ctx.nzSearchPlaceholder || ctx.locale.searchPlaceholder)("notFoundContent", ctx.nzNotFoundContent)("itemUnit", ctx.nzItemUnit || ctx.locale.itemUnit)("itemsUnit", ctx.nzItemsUnit || ctx.locale.itemsUnit)("footer", ctx.nzFooter);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("disabled", ctx.nzDisabled || !ctx.leftActive)("nzType", "primary")("nzSize", "small");
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzOperations[1]);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("disabled", ctx.nzDisabled || !ctx.rightActive)("nzType", "primary")("nzSize", "small");
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzOperations[0]);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.nzListStyle)("titleText", ctx.nzTitles[1])("showSelectAll", ctx.nzShowSelectAll)("dataSource", ctx.rightDataSource)("filter", ctx.rightFilter)("filterOption", ctx.nzFilterOption)("renderList", ctx.nzRenderList[1])("render", ctx.nzRender)("disabled", ctx.nzDisabled)("showSearch", ctx.nzShowSearch)("searchPlaceholder", ctx.nzSearchPlaceholder || ctx.locale.searchPlaceholder)("notFoundContent", ctx.nzNotFoundContent)("itemUnit", ctx.nzItemUnit || ctx.locale.itemUnit)("itemsUnit", ctx.nzItemsUnit || ctx.locale.itemsUnit)("footer", ctx.nzFooter);
    } }, directives: [ɵngcc3.NzTransferListComponent, ɵngcc4.NgStyle, ɵngcc5.NzButtonComponent, ɵngcc6.NzIconDirective, ɵngcc4.NgIf], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTransferComponent, [{
        type: Component,
        args: [{
                selector: 'nz-transfer',
                exportAs: 'nzTransfer',
                preserveWhitespaces: false,
                template: "<nz-transfer-list class=\"ant-transfer-list\" [ngStyle]=\"nzListStyle\" data-direction=\"left\"\r\n  [titleText]=\"nzTitles[0]\"\r\n  [showSelectAll]=\"nzShowSelectAll\"\r\n  [dataSource]=\"leftDataSource\"\r\n  [filter]=\"leftFilter\"\r\n  [filterOption]=\"nzFilterOption\"\r\n  (filterChange)=\"handleFilterChange($event)\"\r\n  [renderList]=\"nzRenderList[0]\"\r\n  [render]=\"nzRender\"\r\n  [disabled]=\"nzDisabled\"\r\n  [showSearch]=\"nzShowSearch\"\r\n  [searchPlaceholder]=\"nzSearchPlaceholder || locale.searchPlaceholder\"\r\n  [notFoundContent]=\"nzNotFoundContent\"\r\n  [itemUnit]=\"nzItemUnit || locale.itemUnit\"\r\n  [itemsUnit]=\"nzItemsUnit || locale.itemsUnit\"\r\n  [footer]=\"nzFooter\"\r\n  (handleSelect)=\"handleLeftSelect($event)\"\r\n  (handleSelectAll)=\"handleLeftSelectAll($event)\">\r\n</nz-transfer-list>\r\n<div class=\"ant-transfer-operation\">\r\n  <button nz-button (click)=\"moveToLeft()\" [disabled]=\"nzDisabled || !leftActive\" [nzType]=\"'primary'\" [nzSize]=\"'small'\">\r\n    <i nz-icon nzType=\"left\"></i><span *ngIf=\"nzOperations[1]\">{{ nzOperations[1] }}</span>\r\n  </button>\r\n  <button nz-button (click)=\"moveToRight()\" [disabled]=\"nzDisabled || !rightActive\" [nzType]=\"'primary'\" [nzSize]=\"'small'\">\r\n    <i nz-icon nzType=\"right\"></i><span *ngIf=\"nzOperations[0]\">{{ nzOperations[0] }}</span>\r\n  </button>\r\n</div>\r\n<nz-transfer-list class=\"ant-transfer-list\" [ngStyle]=\"nzListStyle\" data-direction=\"right\"\r\n  [titleText]=\"nzTitles[1]\"\r\n  [showSelectAll]=\"nzShowSelectAll\"\r\n  [dataSource]=\"rightDataSource\"\r\n  [filter]=\"rightFilter\"\r\n  [filterOption]=\"nzFilterOption\"\r\n  (filterChange)=\"handleFilterChange($event)\"\r\n  [renderList]=\"nzRenderList[1]\"\r\n  [render]=\"nzRender\"\r\n  [disabled]=\"nzDisabled\"\r\n  [showSearch]=\"nzShowSearch\"\r\n  [searchPlaceholder]=\"nzSearchPlaceholder || locale.searchPlaceholder\"\r\n  [notFoundContent]=\"nzNotFoundContent\"\r\n  [itemUnit]=\"nzItemUnit || locale.itemUnit\"\r\n  [itemsUnit]=\"nzItemsUnit || locale.itemsUnit\"\r\n  [footer]=\"nzFooter\"\r\n  (handleSelect)=\"handleRightSelect($event)\"\r\n  (handleSelectAll)=\"handleRightSelectAll($event)\">\r\n</nz-transfer-list>\r\n",
                host: {
                    '[class.ant-transfer-disabled]': 'nzDisabled'
                },
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [NzUpdateHostClassService]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.NzI18nService }, { type: ɵngcc2.NzUpdateHostClassService }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }]; }, { nzDisabled: [{
            type: Input
        }], nzDataSource: [{
            type: Input
        }], nzTitles: [{
            type: Input
        }], nzOperations: [{
            type: Input
        }], nzShowSelectAll: [{
            type: Input
        }], nzCanMove: [{
            type: Input
        }], nzRenderList: [{
            type: Input
        }], nzShowSearch: [{
            type: Input
        }], nzChange: [{
            type: Output
        }], nzSearchChange: [{
            type: Output
        }], nzSelectChange: [{
            type: Output
        }], lists: [{
            type: ViewChildren,
            args: [NzTransferListComponent]
        }], nzListStyle: [{
            type: Input
        }], nzItemUnit: [{
            type: Input
        }], nzItemsUnit: [{
            type: Input
        }], nzRender: [{
            type: Input
        }], nzFooter: [{
            type: Input
        }], nzFilterOption: [{
            type: Input
        }], nzSearchPlaceholder: [{
            type: Input
        }], nzNotFoundContent: [{
            type: Input
        }] }); })();
    return NzTransferComponent;
}());
export { NzTransferComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzTransferComponent.prototype.unsubscribe$;
    /**
     * @type {?}
     * @private
     */
    NzTransferComponent.prototype.lists;
    /** @type {?} */
    NzTransferComponent.prototype.locale;
    /** @type {?} */
    NzTransferComponent.prototype.leftFilter;
    /** @type {?} */
    NzTransferComponent.prototype.rightFilter;
    /** @type {?} */
    NzTransferComponent.prototype.nzDisabled;
    /** @type {?} */
    NzTransferComponent.prototype.nzDataSource;
    /** @type {?} */
    NzTransferComponent.prototype.nzTitles;
    /** @type {?} */
    NzTransferComponent.prototype.nzOperations;
    /** @type {?} */
    NzTransferComponent.prototype.nzListStyle;
    /** @type {?} */
    NzTransferComponent.prototype.nzShowSelectAll;
    /** @type {?} */
    NzTransferComponent.prototype.nzItemUnit;
    /** @type {?} */
    NzTransferComponent.prototype.nzItemsUnit;
    /** @type {?} */
    NzTransferComponent.prototype.nzCanMove;
    /** @type {?} */
    NzTransferComponent.prototype.nzRenderList;
    /** @type {?} */
    NzTransferComponent.prototype.nzRender;
    /** @type {?} */
    NzTransferComponent.prototype.nzFooter;
    /** @type {?} */
    NzTransferComponent.prototype.nzShowSearch;
    /** @type {?} */
    NzTransferComponent.prototype.nzFilterOption;
    /** @type {?} */
    NzTransferComponent.prototype.nzSearchPlaceholder;
    /** @type {?} */
    NzTransferComponent.prototype.nzNotFoundContent;
    /** @type {?} */
    NzTransferComponent.prototype.nzChange;
    /** @type {?} */
    NzTransferComponent.prototype.nzSearchChange;
    /** @type {?} */
    NzTransferComponent.prototype.nzSelectChange;
    /** @type {?} */
    NzTransferComponent.prototype.leftDataSource;
    /** @type {?} */
    NzTransferComponent.prototype.rightDataSource;
    /** @type {?} */
    NzTransferComponent.prototype.handleLeftSelectAll;
    /** @type {?} */
    NzTransferComponent.prototype.handleRightSelectAll;
    /** @type {?} */
    NzTransferComponent.prototype.handleLeftSelect;
    /** @type {?} */
    NzTransferComponent.prototype.handleRightSelect;
    /** @type {?} */
    NzTransferComponent.prototype.leftActive;
    /** @type {?} */
    NzTransferComponent.prototype.rightActive;
    /** @type {?} */
    NzTransferComponent.prototype.moveToLeft;
    /** @type {?} */
    NzTransferComponent.prototype.moveToRight;
    /**
     * @type {?}
     * @private
     */
    NzTransferComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzTransferComponent.prototype.i18n;
    /**
     * @type {?}
     * @private
     */
    NzTransferComponent.prototype.nzUpdateHostClassService;
    /**
     * @type {?}
     * @private
     */
    NzTransferComponent.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJhbnNmZXIuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJuZzovbmctem9ycm8tYW50ZC90cmFuc2Zlci9uei10cmFuc2Zlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUVULFdBQVcsRUFDWCxZQUFZLEVBQ1osaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxFQUFFLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDNUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBVW5ELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkU7SUF3SUUsYUFBYTtJQUViLDZCQUNVLEdBQXNCLEVBQ3RCLElBQW1CLEVBQ25CLHdCQUFrRCxFQUNsRCxVQUFzQixFQUM5QixRQUFtQjtRQUxyQixpQkFRQztRQVBTLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLFNBQUksR0FBSixJQUFJLENBQWU7UUFDbkIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBakl4QixpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7O1FBSTNDLFdBQU0sR0FBUSxFQUFFLENBQUM7UUFFakIsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixnQkFBVyxHQUFHLEVBQUUsQ0FBQzs7UUFJUSxl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Qyx1Q0FBdUM7O0lBQ3ZDLDJDQUFxQzs7SUFDckMsMENBQTZCOztJQUM3Qiw4Q0FBZ0Q7O0lBQ2hELHlDQUE0Qjs7SUFDNUIsMENBQTZCOztJQUM3Qix3Q0FBa0g7O0lBQ2xILDJDQUFzRTs7SUFDdEUsdUNBQXFDOztJQUNyQyx1Q0FBcUM7O0lBQ3JDLDJDQUE4Qzs7SUFDOUMsNkNBQTZFOztJQUM3RSxrREFBcUM7O0lBQ3JDLGdEQUFtQzs7SUFHbkMsdUNBQWlFOztJQUNqRSw2Q0FBNkU7O0lBQzdFLDZDQUE2RTs7SUFPN0UsNkNBQW9DOztJQUdwQyw4Q0FBcUM7O0lBb0JyQyxrREFBK0U7O0lBQy9FLG1EQUFpRjs7SUFFakYsK0NBQTJGOztJQUMzRixnREFBNkY7O0lBZ0I3Rix5Q0FBbUI7O0lBQ25CLDBDQUFvQjs7SUFPcEIseUNBQXVDOztJQUN2QywwQ0FBeUM7Ozs7O0lBb0N2QyxrQ0FBOEI7Ozs7O0lBQzlCLG1DQUEyQjs7Ozs7SUFDM0IsdURBQTBEOzs7OztJQUMxRCx5Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBRdWVyeUxpc3QsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkcmVuLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBvZiwgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5cclxuaW1wb3J0IHtcclxuICBUcmFuc2ZlckNhbk1vdmUsXHJcbiAgVHJhbnNmZXJDaGFuZ2UsXHJcbiAgVHJhbnNmZXJEaXJlY3Rpb24sXHJcbiAgVHJhbnNmZXJJdGVtLFxyXG4gIFRyYW5zZmVyU2VhcmNoQ2hhbmdlLFxyXG4gIFRyYW5zZmVyU2VsZWN0Q2hhbmdlXHJcbn0gZnJvbSAnLi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBOelRyYW5zZmVyTGlzdENvbXBvbmVudCB9IGZyb20gJy4vbnotdHJhbnNmZXItbGlzdC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei10cmFuc2ZlcicsXHJcbiAgZXhwb3J0QXM6ICduelRyYW5zZmVyJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotdHJhbnNmZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LXRyYW5zZmVyLWRpc2FibGVkXSc6ICduekRpc2FibGVkJ1xyXG4gIH0sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcm92aWRlcnM6IFtOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelRyYW5zZmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIEBWaWV3Q2hpbGRyZW4oTnpUcmFuc2Zlckxpc3RDb21wb25lbnQpXHJcbiAgcHJpdmF0ZSBsaXN0cyE6IFF1ZXJ5TGlzdDxOelRyYW5zZmVyTGlzdENvbXBvbmVudD47XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIGxvY2FsZTogYW55ID0ge307XHJcblxyXG4gIGxlZnRGaWx0ZXIgPSAnJztcclxuICByaWdodEZpbHRlciA9ICcnO1xyXG5cclxuICAvLyAjcmVnaW9uIGZpZWxkc1xyXG5cclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56RGF0YVNvdXJjZTogVHJhbnNmZXJJdGVtW10gPSBbXTtcclxuICBASW5wdXQoKSBuelRpdGxlczogc3RyaW5nW10gPSBbJycsICcnXTtcclxuICBASW5wdXQoKSBuek9wZXJhdGlvbnM6IHN0cmluZ1tdID0gW107XHJcbiAgQElucHV0KCkgbnpMaXN0U3R5bGU6IG9iamVjdDtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93U2VsZWN0QWxsID0gdHJ1ZTtcclxuICBASW5wdXQoKSBuekl0ZW1Vbml0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpJdGVtc1VuaXQ6IHN0cmluZztcclxuICBASW5wdXQoKSBuekNhbk1vdmU6IChhcmc6IFRyYW5zZmVyQ2FuTW92ZSkgPT4gT2JzZXJ2YWJsZTxUcmFuc2Zlckl0ZW1bXT4gPSAoYXJnOiBUcmFuc2ZlckNhbk1vdmUpID0+IG9mKGFyZy5saXN0KTtcclxuICBASW5wdXQoKSBuelJlbmRlckxpc3Q6IEFycmF5PFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbD4gPSBbbnVsbCwgbnVsbF07XHJcbiAgQElucHV0KCkgbnpSZW5kZXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56Rm9vdGVyOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93U2VhcmNoID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpGaWx0ZXJPcHRpb246IChpbnB1dFZhbHVlOiBzdHJpbmcsIGl0ZW06IFRyYW5zZmVySXRlbSkgPT4gYm9vbGVhbjtcclxuICBASW5wdXQoKSBuelNlYXJjaFBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpOb3RGb3VuZENvbnRlbnQ6IHN0cmluZztcclxuXHJcbiAgLy8gZXZlbnRzXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxUcmFuc2ZlckNoYW5nZT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpTZWFyY2hDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFRyYW5zZmVyU2VhcmNoQ2hhbmdlPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNlbGVjdENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8VHJhbnNmZXJTZWxlY3RDaGFuZ2U+KCk7XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgLy8gI3JlZ2lvbiBwcm9jZXNzIGRhdGFcclxuXHJcbiAgLy8gbGVmdFxyXG4gIGxlZnREYXRhU291cmNlOiBUcmFuc2Zlckl0ZW1bXSA9IFtdO1xyXG5cclxuICAvLyByaWdodFxyXG4gIHJpZ2h0RGF0YVNvdXJjZTogVHJhbnNmZXJJdGVtW10gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSBzcGxpdERhdGFTb3VyY2UoKTogdm9pZCB7XHJcbiAgICB0aGlzLmxlZnREYXRhU291cmNlID0gW107XHJcbiAgICB0aGlzLnJpZ2h0RGF0YVNvdXJjZSA9IFtdO1xyXG4gICAgdGhpcy5uekRhdGFTb3VyY2UuZm9yRWFjaChyZWNvcmQgPT4ge1xyXG4gICAgICBpZiAocmVjb3JkLmRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xyXG4gICAgICAgIHJlY29yZC5kaXJlY3Rpb24gPSAncmlnaHQnO1xyXG4gICAgICAgIHRoaXMucmlnaHREYXRhU291cmNlLnB1c2gocmVjb3JkKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZWNvcmQuZGlyZWN0aW9uID0gJ2xlZnQnO1xyXG4gICAgICAgIHRoaXMubGVmdERhdGFTb3VyY2UucHVzaChyZWNvcmQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0Q2hlY2tlZERhdGEoZGlyZWN0aW9uOiBzdHJpbmcpOiBUcmFuc2Zlckl0ZW1bXSB7XHJcbiAgICByZXR1cm4gdGhpc1tkaXJlY3Rpb24gPT09ICdsZWZ0JyA/ICdsZWZ0RGF0YVNvdXJjZScgOiAncmlnaHREYXRhU291cmNlJ10uZmlsdGVyKHcgPT4gdy5jaGVja2VkKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUxlZnRTZWxlY3RBbGwgPSAoY2hlY2tlZDogYm9vbGVhbikgPT4gdGhpcy5oYW5kbGVTZWxlY3QoJ2xlZnQnLCBjaGVja2VkKTtcclxuICBoYW5kbGVSaWdodFNlbGVjdEFsbCA9IChjaGVja2VkOiBib29sZWFuKSA9PiB0aGlzLmhhbmRsZVNlbGVjdCgncmlnaHQnLCBjaGVja2VkKTtcclxuXHJcbiAgaGFuZGxlTGVmdFNlbGVjdCA9IChpdGVtOiBUcmFuc2Zlckl0ZW0pID0+IHRoaXMuaGFuZGxlU2VsZWN0KCdsZWZ0JywgISFpdGVtLmNoZWNrZWQsIGl0ZW0pO1xyXG4gIGhhbmRsZVJpZ2h0U2VsZWN0ID0gKGl0ZW06IFRyYW5zZmVySXRlbSkgPT4gdGhpcy5oYW5kbGVTZWxlY3QoJ3JpZ2h0JywgISFpdGVtLmNoZWNrZWQsIGl0ZW0pO1xyXG5cclxuICBoYW5kbGVTZWxlY3QoZGlyZWN0aW9uOiBUcmFuc2ZlckRpcmVjdGlvbiwgY2hlY2tlZDogYm9vbGVhbiwgaXRlbT86IFRyYW5zZmVySXRlbSk6IHZvaWQge1xyXG4gICAgY29uc3QgbGlzdCA9IHRoaXMuZ2V0Q2hlY2tlZERhdGEoZGlyZWN0aW9uKTtcclxuICAgIHRoaXMudXBkYXRlT3BlcmF0aW9uU3RhdHVzKGRpcmVjdGlvbiwgbGlzdC5sZW5ndGgpO1xyXG4gICAgdGhpcy5uelNlbGVjdENoYW5nZS5lbWl0KHsgZGlyZWN0aW9uLCBjaGVja2VkLCBsaXN0LCBpdGVtIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRmlsdGVyQ2hhbmdlKHJldDogeyBkaXJlY3Rpb246IFRyYW5zZmVyRGlyZWN0aW9uOyB2YWx1ZTogc3RyaW5nIH0pOiB2b2lkIHtcclxuICAgIHRoaXMubnpTZWFyY2hDaGFuZ2UuZW1pdChyZXQpO1xyXG4gIH1cclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAvLyAjcmVnaW9uIG9wZXJhdGlvblxyXG5cclxuICBsZWZ0QWN0aXZlID0gZmFsc2U7XHJcbiAgcmlnaHRBY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVPcGVyYXRpb25TdGF0dXMoZGlyZWN0aW9uOiBzdHJpbmcsIGNvdW50PzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzW2RpcmVjdGlvbiA9PT0gJ3JpZ2h0JyA/ICdsZWZ0QWN0aXZlJyA6ICdyaWdodEFjdGl2ZSddID1cclxuICAgICAgKHR5cGVvZiBjb3VudCA9PT0gJ3VuZGVmaW5lZCcgPyB0aGlzLmdldENoZWNrZWREYXRhKGRpcmVjdGlvbikuZmlsdGVyKHcgPT4gIXcuZGlzYWJsZWQpLmxlbmd0aCA6IGNvdW50KSA+IDA7XHJcbiAgfVxyXG5cclxuICBtb3ZlVG9MZWZ0ID0gKCkgPT4gdGhpcy5tb3ZlVG8oJ2xlZnQnKTtcclxuICBtb3ZlVG9SaWdodCA9ICgpID0+IHRoaXMubW92ZVRvKCdyaWdodCcpO1xyXG5cclxuICBtb3ZlVG8oZGlyZWN0aW9uOiBUcmFuc2ZlckRpcmVjdGlvbik6IHZvaWQge1xyXG4gICAgY29uc3Qgb3Bwb3NpdGVEaXJlY3Rpb24gPSBkaXJlY3Rpb24gPT09ICdsZWZ0JyA/ICdyaWdodCcgOiAnbGVmdCc7XHJcbiAgICB0aGlzLnVwZGF0ZU9wZXJhdGlvblN0YXR1cyhvcHBvc2l0ZURpcmVjdGlvbiwgMCk7XHJcbiAgICBjb25zdCBkYXRhc291cmNlID0gZGlyZWN0aW9uID09PSAnbGVmdCcgPyB0aGlzLnJpZ2h0RGF0YVNvdXJjZSA6IHRoaXMubGVmdERhdGFTb3VyY2U7XHJcbiAgICBjb25zdCBtb3ZlTGlzdCA9IGRhdGFzb3VyY2UuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jaGVja2VkID09PSB0cnVlICYmICFpdGVtLmRpc2FibGVkKTtcclxuICAgIHRoaXMubnpDYW5Nb3ZlKHsgZGlyZWN0aW9uLCBsaXN0OiBtb3ZlTGlzdCB9KS5zdWJzY3JpYmUoXHJcbiAgICAgIG5ld01vdmVMaXN0ID0+IHRoaXMudHJ1dGhNb3ZlVG8oZGlyZWN0aW9uLCBuZXdNb3ZlTGlzdC5maWx0ZXIoaSA9PiAhIWkpKSxcclxuICAgICAgKCkgPT4gbW92ZUxpc3QuZm9yRWFjaChpID0+IChpLmNoZWNrZWQgPSBmYWxzZSkpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0cnV0aE1vdmVUbyhkaXJlY3Rpb246IFRyYW5zZmVyRGlyZWN0aW9uLCBsaXN0OiBUcmFuc2Zlckl0ZW1bXSk6IHZvaWQge1xyXG4gICAgY29uc3Qgb3Bwb3NpdGVEaXJlY3Rpb24gPSBkaXJlY3Rpb24gPT09ICdsZWZ0JyA/ICdyaWdodCcgOiAnbGVmdCc7XHJcbiAgICBjb25zdCBkYXRhc291cmNlID0gZGlyZWN0aW9uID09PSAnbGVmdCcgPyB0aGlzLnJpZ2h0RGF0YVNvdXJjZSA6IHRoaXMubGVmdERhdGFTb3VyY2U7XHJcbiAgICBjb25zdCB0YXJnZXREYXRhc291cmNlID0gZGlyZWN0aW9uID09PSAnbGVmdCcgPyB0aGlzLmxlZnREYXRhU291cmNlIDogdGhpcy5yaWdodERhdGFTb3VyY2U7XHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgbGlzdCkge1xyXG4gICAgICBpdGVtLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgaXRlbS5oaWRlID0gZmFsc2U7XHJcbiAgICAgIGl0ZW0uZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xyXG4gICAgICBkYXRhc291cmNlLnNwbGljZShkYXRhc291cmNlLmluZGV4T2YoaXRlbSksIDEpO1xyXG4gICAgfVxyXG4gICAgdGFyZ2V0RGF0YXNvdXJjZS5zcGxpY2UoMCwgMCwgLi4ubGlzdCk7XHJcbiAgICB0aGlzLnVwZGF0ZU9wZXJhdGlvblN0YXR1cyhvcHBvc2l0ZURpcmVjdGlvbik7XHJcbiAgICB0aGlzLm56Q2hhbmdlLmVtaXQoe1xyXG4gICAgICBmcm9tOiBvcHBvc2l0ZURpcmVjdGlvbixcclxuICAgICAgdG86IGRpcmVjdGlvbixcclxuICAgICAgbGlzdFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLm1hcmtGb3JDaGVja0FsbExpc3QoKTtcclxuICB9XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UsXHJcbiAgICBwcml2YXRlIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMlxyXG4gICkge1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LXRyYW5zZmVyJyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgY29uc3QgcHJlZml4Q2xzID0gJ2FudC10cmFuc2Zlcic7XHJcbiAgICB0aGlzLm56VXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHtcclxuICAgICAgW2Ake3ByZWZpeENsc30tZGlzYWJsZWRgXTogdGhpcy5uekRpc2FibGVkLFxyXG4gICAgICBbYCR7cHJlZml4Q2xzfS1jdXN0b21pemUtbGlzdGBdOiB0aGlzLm56UmVuZGVyTGlzdC5zb21lKGkgPT4gISFpKVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1hcmtGb3JDaGVja0FsbExpc3QoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMubGlzdHMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5saXN0cy5mb3JFYWNoKGkgPT4gaS5tYXJrRm9yQ2hlY2soKSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaTE4bi5sb2NhbGVDaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXRMb2NhbGVEYXRhKCdUcmFuc2ZlcicpO1xyXG4gICAgICB0aGlzLm1hcmtGb3JDaGVja0FsbExpc3QoKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgaWYgKGNoYW5nZXMubnpEYXRhU291cmNlIHx8IGNoYW5nZXMubnpUYXJnZXRLZXlzKSB7XHJcbiAgICAgIHRoaXMuc3BsaXREYXRhU291cmNlKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlT3BlcmF0aW9uU3RhdHVzKCdsZWZ0Jyk7XHJcbiAgICAgIHRoaXMudXBkYXRlT3BlcmF0aW9uU3RhdHVzKCdyaWdodCcpO1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIHRoaXMubWFya0ZvckNoZWNrQWxsTGlzdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XHJcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=