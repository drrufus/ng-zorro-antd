/**
 * @fileoverview added by tsickle
 * Generated from: nz-transfer.component.ts
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
    NzTransferComponent.decorators = [
        { type: Component, args: [{
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
                }] }
    ];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJhbnNmZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90cmFuc2Zlci8iLCJzb3VyY2VzIjpbIm56LXRyYW5zZmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUVULFdBQVcsRUFDWCxZQUFZLEVBQ1osaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxFQUFFLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDNUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBVW5ELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRXZFO0lBd0lFLGFBQWE7SUFFYiw2QkFDVSxHQUFzQixFQUN0QixJQUFtQixFQUNuQix3QkFBa0QsRUFDbEQsVUFBc0IsRUFDOUIsUUFBbUI7UUFMckIsaUJBUUM7UUFQUyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixTQUFJLEdBQUosSUFBSSxDQUFlO1FBQ25CLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQWpJeEIsaUJBQVksR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDOztRQUkzQyxXQUFNLEdBQVEsRUFBRSxDQUFDO1FBRWpCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7O1FBSVEsZUFBVSxHQUFH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QUN0RSx1Q0FBcUM7O0lBQ3JDLHVDQUFxQzs7SUFDckMsMkNBQThDOztJQUM5Qyw2Q0FBNkU7O0lBQzdFLGtEQUFxQzs7SUFDckMsZ0RBQW1DOztJQUduQyx1Q0FBaUU7O0lBQ2pFLDZDQUE2RTs7SUFDN0UsNkNBQTZFOztJQU83RSw2Q0FBb0M7O0lBR3BDLDhDQUFxQzs7SUFvQnJDLGtEQUErRTs7SUFDL0UsbURBQWlGOztJQUVqRiwrQ0FBMkY7O0lBQzNGLGdEQUE2Rjs7SUFnQjdGLHlDQUFtQjs7SUFDbkIsMENBQW9COztJQU9wQix5Q0FBdUM7O0lBQ3ZDLDBDQUF5Qzs7Ozs7SUFvQ3ZDLGtDQUE4Qjs7Ozs7SUFDOUIsbUNBQTJCOzs7OztJQUMzQix1REFBMEQ7Ozs7O0lBQzFELHlDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGRyZW4sXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IG9mLCBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcblxyXG5pbXBvcnQge1xyXG4gIFRyYW5zZmVyQ2FuTW92ZSxcclxuICBUcmFuc2ZlckNoYW5nZSxcclxuICBUcmFuc2ZlckRpcmVjdGlvbixcclxuICBUcmFuc2Zlckl0ZW0sXHJcbiAgVHJhbnNmZXJTZWFyY2hDaGFuZ2UsXHJcbiAgVHJhbnNmZXJTZWxlY3RDaGFuZ2VcclxufSBmcm9tICcuL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IE56VHJhbnNmZXJMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9uei10cmFuc2Zlci1saXN0LmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LXRyYW5zZmVyJyxcclxuICBleHBvcnRBczogJ256VHJhbnNmZXInLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei10cmFuc2Zlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtdHJhbnNmZXItZGlzYWJsZWRdJzogJ256RGlzYWJsZWQnXHJcbiAgfSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByb3ZpZGVyczogW056VXBkYXRlSG9zdENsYXNzU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56VHJhbnNmZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICBwcml2YXRlIHVuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgQFZpZXdDaGlsZHJlbihOelRyYW5zZmVyTGlzdENvbXBvbmVudClcclxuICBwcml2YXRlIGxpc3RzITogUXVlcnlMaXN0PE56VHJhbnNmZXJMaXN0Q29tcG9uZW50PjtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgbG9jYWxlOiBhbnkgPSB7fTtcclxuXHJcbiAgbGVmdEZpbHRlciA9ICcnO1xyXG4gIHJpZ2h0RmlsdGVyID0gJyc7XHJcblxyXG4gIC8vICNyZWdpb24gZmllbGRzXHJcblxyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpEYXRhU291cmNlOiBUcmFuc2Zlckl0ZW1bXSA9IFtdO1xyXG4gIEBJbnB1dCgpIG56VGl0bGVzOiBzdHJpbmdbXSA9IFsnJywgJyddO1xyXG4gIEBJbnB1dCgpIG56T3BlcmF0aW9uczogc3RyaW5nW10gPSBbXTtcclxuICBASW5wdXQoKSBuekxpc3RTdHlsZTogb2JqZWN0O1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dTZWxlY3RBbGwgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIG56SXRlbVVuaXQ6IHN0cmluZztcclxuICBASW5wdXQoKSBuekl0ZW1zVW5pdDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56Q2FuTW92ZTogKGFyZzogVHJhbnNmZXJDYW5Nb3ZlKSA9PiBPYnNlcnZhYmxlPFRyYW5zZmVySXRlbVtdPiA9IChhcmc6IFRyYW5zZmVyQ2FuTW92ZSkgPT4gb2YoYXJnLmxpc3QpO1xyXG4gIEBJbnB1dCgpIG56UmVuZGVyTGlzdDogQXJyYXk8VGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsPiA9IFtudWxsLCBudWxsXTtcclxuICBASW5wdXQoKSBuelJlbmRlcjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpGb290ZXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dTZWFyY2ggPSBmYWxzZTtcclxuICBASW5wdXQoKSBuekZpbHRlck9wdGlvbjogKGlucHV0VmFsdWU6IHN0cmluZywgaXRlbTogVHJhbnNmZXJJdGVtKSA9PiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIG56U2VhcmNoUGxhY2Vob2xkZXI6IHN0cmluZztcclxuICBASW5wdXQoKSBuek5vdEZvdW5kQ29udGVudDogc3RyaW5nO1xyXG5cclxuICAvLyBldmVudHNcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFRyYW5zZmVyQ2hhbmdlPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNlYXJjaENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8VHJhbnNmZXJTZWFyY2hDaGFuZ2U+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56U2VsZWN0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxUcmFuc2ZlclNlbGVjdENoYW5nZT4oKTtcclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAvLyAjcmVnaW9uIHByb2Nlc3MgZGF0YVxyXG5cclxuICAvLyBsZWZ0XHJcbiAgbGVmdERhdGFTb3VyY2U6IFRyYW5zZmVySXRlbVtdID0gW107XHJcblxyXG4gIC8vIHJpZ2h0XHJcbiAgcmlnaHREYXRhU291cmNlOiBUcmFuc2Zlckl0ZW1bXSA9IFtdO1xyXG5cclxuICBwcml2YXRlIHNwbGl0RGF0YVNvdXJjZSgpOiB2b2lkIHtcclxuICAgIHRoaXMubGVmdERhdGFTb3VyY2UgPSBbXTtcclxuICAgIHRoaXMucmlnaHREYXRhU291cmNlID0gW107XHJcbiAgICB0aGlzLm56RGF0YVNvdXJjZS5mb3JFYWNoKHJlY29yZCA9PiB7XHJcbiAgICAgIGlmIChyZWNvcmQuZGlyZWN0aW9uID09PSAncmlnaHQnKSB7XHJcbiAgICAgICAgcmVjb3JkLmRpcmVjdGlvbiA9ICdyaWdodCc7XHJcbiAgICAgICAgdGhpcy5yaWdodERhdGFTb3VyY2UucHVzaChyZWNvcmQpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlY29yZC5kaXJlY3Rpb24gPSAnbGVmdCc7XHJcbiAgICAgICAgdGhpcy5sZWZ0RGF0YVNvdXJjZS5wdXNoKHJlY29yZCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRDaGVja2VkRGF0YShkaXJlY3Rpb246IHN0cmluZyk6IFRyYW5zZmVySXRlbVtdIHtcclxuICAgIHJldHVybiB0aGlzW2RpcmVjdGlvbiA9PT0gJ2xlZnQnID8gJ2xlZnREYXRhU291cmNlJyA6ICdyaWdodERhdGFTb3VyY2UnXS5maWx0ZXIodyA9PiB3LmNoZWNrZWQpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlTGVmdFNlbGVjdEFsbCA9IChjaGVja2VkOiBib29sZWFuKSA9PiB0aGlzLmhhbmRsZVNlbGVjdCgnbGVmdCcsIGNoZWNrZWQpO1xyXG4gIGhhbmRsZVJpZ2h0U2VsZWN0QWxsID0gKGNoZWNrZWQ6IGJvb2xlYW4pID0+IHRoaXMuaGFuZGxlU2VsZWN0KCdyaWdodCcsIGNoZWNrZWQpO1xyXG5cclxuICBoYW5kbGVMZWZ0U2VsZWN0ID0gKGl0ZW06IFRyYW5zZmVySXRlbSkgPT4gdGhpcy5oYW5kbGVTZWxlY3QoJ2xlZnQnLCAhIWl0ZW0uY2hlY2tlZCwgaXRlbSk7XHJcbiAgaGFuZGxlUmlnaHRTZWxlY3QgPSAoaXRlbTogVHJhbnNmZXJJdGVtKSA9PiB0aGlzLmhhbmRsZVNlbGVjdCgncmlnaHQnLCAhIWl0ZW0uY2hlY2tlZCwgaXRlbSk7XHJcblxyXG4gIGhhbmRsZVNlbGVjdChkaXJlY3Rpb246IFRyYW5zZmVyRGlyZWN0aW9uLCBjaGVja2VkOiBib29sZWFuLCBpdGVtPzogVHJhbnNmZXJJdGVtKTogdm9pZCB7XHJcbiAgICBjb25zdCBsaXN0ID0gdGhpcy5nZXRDaGVja2VkRGF0YShkaXJlY3Rpb24pO1xyXG4gICAgdGhpcy51cGRhdGVPcGVyYXRpb25TdGF0dXMoZGlyZWN0aW9uLCBsaXN0Lmxlbmd0aCk7XHJcbiAgICB0aGlzLm56U2VsZWN0Q2hhbmdlLmVtaXQoeyBkaXJlY3Rpb24sIGNoZWNrZWQsIGxpc3QsIGl0ZW0gfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVGaWx0ZXJDaGFuZ2UocmV0OiB7IGRpcmVjdGlvbjogVHJhbnNmZXJEaXJlY3Rpb247IHZhbHVlOiBzdHJpbmcgfSk6IHZvaWQge1xyXG4gICAgdGhpcy5uelNlYXJjaENoYW5nZS5lbWl0KHJldCk7XHJcbiAgfVxyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIC8vICNyZWdpb24gb3BlcmF0aW9uXHJcblxyXG4gIGxlZnRBY3RpdmUgPSBmYWxzZTtcclxuICByaWdodEFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIHVwZGF0ZU9wZXJhdGlvblN0YXR1cyhkaXJlY3Rpb246IHN0cmluZywgY291bnQ/OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXNbZGlyZWN0aW9uID09PSAncmlnaHQnID8gJ2xlZnRBY3RpdmUnIDogJ3JpZ2h0QWN0aXZlJ10gPVxyXG4gICAgICAodHlwZW9mIGNvdW50ID09PSAndW5kZWZpbmVkJyA/IHRoaXMuZ2V0Q2hlY2tlZERhdGEoZGlyZWN0aW9uKS5maWx0ZXIodyA9PiAhdy5kaXNhYmxlZCkubGVuZ3RoIDogY291bnQpID4gMDtcclxuICB9XHJcblxyXG4gIG1vdmVUb0xlZnQgPSAoKSA9PiB0aGlzLm1vdmVUbygnbGVmdCcpO1xyXG4gIG1vdmVUb1JpZ2h0ID0gKCkgPT4gdGhpcy5tb3ZlVG8oJ3JpZ2h0Jyk7XHJcblxyXG4gIG1vdmVUbyhkaXJlY3Rpb246IFRyYW5zZmVyRGlyZWN0aW9uKTogdm9pZCB7XHJcbiAgICBjb25zdCBvcHBvc2l0ZURpcmVjdGlvbiA9IGRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gJ3JpZ2h0JyA6ICdsZWZ0JztcclxuICAgIHRoaXMudXBkYXRlT3BlcmF0aW9uU3RhdHVzKG9wcG9zaXRlRGlyZWN0aW9uLCAwKTtcclxuICAgIGNvbnN0IGRhdGFzb3VyY2UgPSBkaXJlY3Rpb24gPT09ICdsZWZ0JyA/IHRoaXMucmlnaHREYXRhU291cmNlIDogdGhpcy5sZWZ0RGF0YVNvdXJjZTtcclxuICAgIGNvbnN0IG1vdmVMaXN0ID0gZGF0YXNvdXJjZS5maWx0ZXIoaXRlbSA9PiBpdGVtLmNoZWNrZWQgPT09IHRydWUgJiYgIWl0ZW0uZGlzYWJsZWQpO1xyXG4gICAgdGhpcy5uekNhbk1vdmUoeyBkaXJlY3Rpb24sIGxpc3Q6IG1vdmVMaXN0IH0pLnN1YnNjcmliZShcclxuICAgICAgbmV3TW92ZUxpc3QgPT4gdGhpcy50cnV0aE1vdmVUbyhkaXJlY3Rpb24sIG5ld01vdmVMaXN0LmZpbHRlcihpID0+ICEhaSkpLFxyXG4gICAgICAoKSA9PiBtb3ZlTGlzdC5mb3JFYWNoKGkgPT4gKGkuY2hlY2tlZCA9IGZhbHNlKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRydXRoTW92ZVRvKGRpcmVjdGlvbjogVHJhbnNmZXJEaXJlY3Rpb24sIGxpc3Q6IFRyYW5zZmVySXRlbVtdKTogdm9pZCB7XHJcbiAgICBjb25zdCBvcHBvc2l0ZURpcmVjdGlvbiA9IGRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gJ3JpZ2h0JyA6ICdsZWZ0JztcclxuICAgIGNvbnN0IGRhdGFzb3VyY2UgPSBkaXJlY3Rpb24gPT09ICdsZWZ0JyA/IHRoaXMucmlnaHREYXRhU291cmNlIDogdGhpcy5sZWZ0RGF0YVNvdXJjZTtcclxuICAgIGNvbnN0IHRhcmdldERhdGFzb3VyY2UgPSBkaXJlY3Rpb24gPT09ICdsZWZ0JyA/IHRoaXMubGVmdERhdGFTb3VyY2UgOiB0aGlzLnJpZ2h0RGF0YVNvdXJjZTtcclxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBsaXN0KSB7XHJcbiAgICAgIGl0ZW0uY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICBpdGVtLmhpZGUgPSBmYWxzZTtcclxuICAgICAgaXRlbS5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XHJcbiAgICAgIGRhdGFzb3VyY2Uuc3BsaWNlKGRhdGFzb3VyY2UuaW5kZXhPZihpdGVtKSwgMSk7XHJcbiAgICB9XHJcbiAgICB0YXJnZXREYXRhc291cmNlLnNwbGljZSgwLCAwLCAuLi5saXN0KTtcclxuICAgIHRoaXMudXBkYXRlT3BlcmF0aW9uU3RhdHVzKG9wcG9zaXRlRGlyZWN0aW9uKTtcclxuICAgIHRoaXMubnpDaGFuZ2UuZW1pdCh7XHJcbiAgICAgIGZyb206IG9wcG9zaXRlRGlyZWN0aW9uLFxyXG4gICAgICB0bzogZGlyZWN0aW9uLFxyXG4gICAgICBsaXN0XHJcbiAgICB9KTtcclxuICAgIHRoaXMubWFya0ZvckNoZWNrQWxsTGlzdCgpO1xyXG4gIH1cclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZSxcclxuICAgIHByaXZhdGUgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyXHJcbiAgKSB7XHJcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtdHJhbnNmZXInKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICBjb25zdCBwcmVmaXhDbHMgPSAnYW50LXRyYW5zZmVyJztcclxuICAgIHRoaXMubnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwge1xyXG4gICAgICBbYCR7cHJlZml4Q2xzfS1kaXNhYmxlZGBdOiB0aGlzLm56RGlzYWJsZWQsXHJcbiAgICAgIFtgJHtwcmVmaXhDbHN9LWN1c3RvbWl6ZS1saXN0YF06IHRoaXMubnpSZW5kZXJMaXN0LnNvbWUoaSA9PiAhIWkpXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbWFya0ZvckNoZWNrQWxsTGlzdCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5saXN0cykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmxpc3RzLmZvckVhY2goaSA9PiBpLm1hcmtGb3JDaGVjaygpKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldExvY2FsZURhdGEoJ1RyYW5zZmVyJyk7XHJcbiAgICAgIHRoaXMubWFya0ZvckNoZWNrQWxsTGlzdCgpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICBpZiAoY2hhbmdlcy5uekRhdGFTb3VyY2UgfHwgY2hhbmdlcy5uelRhcmdldEtleXMpIHtcclxuICAgICAgdGhpcy5zcGxpdERhdGFTb3VyY2UoKTtcclxuICAgICAgdGhpcy51cGRhdGVPcGVyYXRpb25TdGF0dXMoJ2xlZnQnKTtcclxuICAgICAgdGhpcy51cGRhdGVPcGVyYXRpb25TdGF0dXMoJ3JpZ2h0Jyk7XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgdGhpcy5tYXJrRm9yQ2hlY2tBbGxMaXN0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcclxuICAgIHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==