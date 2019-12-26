/**
 * @fileoverview added by tsickle
 * Generated from: nz-cascader.service.ts
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
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { arraysEqual, isNotNil } from 'ng-zorro-antd/core';
import { isShowSearchObject } from './nz-cascader-definitions';
import { isChildOption, isParentOption } from './nz-cascader-utils';
/**
 * All data is stored and parsed in NzCascaderService.
 */
var NzCascaderService = /** @class */ (function () {
    function NzCascaderService() {
        /**
         * Activated options in each column.
         */
        this.activatedOptions = [];
        /**
         * An array to store cascader items arranged in different layers.
         */
        this.columns = [[]];
        /**
         * If user has entered searching mode.
         */
        this.inSearchingMode = false;
        /**
         * Selected options would be output to user.
         */
        this.selectedOptions = [];
        this.values = []; // tslint:disable-line:no-any
        // tslint:disable-line:no-any
        this.$loading = new BehaviorSubject(false);
        /**
         * Emit an event to notify cascader it needs to redraw because activated or
         * selected options are changed.
         */
        this.$redraw = new Subject();
        /**
         * Emit an event when an option gets selected.
         * Emit true if a leaf options is selected.
         */
        this.$optionSelected = new Subject();
        /**
         * Emit an event to notify cascader it needs to quit searching mode.
         * Only emit when user do select a searching option.
         */
        this.$quitSearching = new Subject();
        /**
         * To hold columns before entering searching mode.
         */
        this.columnsSnapshot = [[]];
        /**
         * To hold activated options before entering searching mode.
         */
        this.activatedOptionsSnapshot = [];
    }
    Object.defineProperty(NzCascaderService.prototype, "nzOptions", {
        /** Return cascader options in the first layer. */
        get: /**
         * Return cascader options in the first layer.
         * @return {?}
         */
        function () {
            return this.columns[0];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzCascaderService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.$redraw.complete();
        this.$quitSearching.complete();
        this.$optionSelected.complete();
        this.$loading.complete();
    };
    /**
     * Make sure that value matches what is displayed in the dropdown.
     */
    /**
     * Make sure that value matches what is displayed in the dropdown.
     * @param {?=} first
     * @return {?}
     */
    NzCascaderService.prototype.syncOptions = /**
     * Make sure that value matches what is displayed in the dropdown.
     * @param {?=} first
     * @return {?}
     */
    function (first) {
        var _this = this;
        if (first === void 0) { first = false; }
        /** @type {?} */
        var values = this.values;
        /** @type {?} */
        var hasValue = values && values.length;
        /** @type {?} */
        var lastColumnIndex = values.length - 1;
        /** @type {?} */
        var initColumnWithIndex = (/**
         * @param {?} columnIndex
         * @return {?}
         */
        function (columnIndex) {
            /** @type {?} */
            var activatedOptionSetter = (/**
             * @return {?}
             */
            function () {
                var _a;
                /** @type {?} */
                var currentValue = values[columnIndex];
                if (!isNotNil(currentValue)) {
                    _this.$redraw.next();
                    return;
                }
                /** @type {?} */
                var option = _this.findOptionWithValue(columnIndex, values[columnIndex]) ||
                    (typeof currentValue === 'object'
                        ? currentValue
                        : (_a = {},
                            _a["" + _this.cascaderComponent.nzValueProperty] = currentValue,
                            _a["" + _this.cascaderComponent.nzLabelProperty] = currentValue,
                            _a));
                _this.setOptionActivated(option, columnIndex, false, false);
                if (columnIndex < lastColumnIndex) {
                    initColumnWithIndex(columnIndex + 1);
                }
                else {
                    _this.dropBehindColumns(columnIndex);
                    _this.selectedOptions = tslib_1.__spread(_this.activatedOptions);
                    _this.$redraw.next();
                }
            });
            if (_this.isLoaded(columnIndex) || !_this.cascaderComponent.nzLoadData) {
                activatedOptionSetter();
            }
            else {
                /** @type {?} */
                var option = _this.activatedOptions[columnIndex - 1] || {};
                _this.loadChildren(option, columnIndex - 1, activatedOptionSetter);
            }
        });
        this.activatedOptions = [];
        this.selectedOptions = [];
        if (first && this.cascaderComponent.nzLoadData && !hasValue) {
            // Should also notify the component that value changes. Fix #3480.
            this.$redraw.next();
            return;
        }
        else {
            initColumnWithIndex(0);
        }
    };
    /**
     * Bind cascader component so this service could use inputs.
     */
    /**
     * Bind cascader component so this service could use inputs.
     * @param {?} cascaderComponent
     * @return {?}
     */
    NzCascaderService.prototype.withComponent = /**
     * Bind cascader component so this service could use inputs.
     * @param {?} cascaderComponent
     * @return {?}
     */
    function (cascaderComponent) {
        this.cascaderComponent = cascaderComponent;
    };
    /**
     * Reset all options. Rebuild searching options if in searching mode.
     */
    /**
     * Reset all options. Rebuild searching options if in searching mode.
     * @param {?} options
     * @return {?}
     */
    NzCascaderService.prototype.withOptions = /**
     * Reset all options. Rebuild searching options if in searching mode.
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.columnsSnapshot = this.columns = options && options.length ? [options] : [];
        if (this.inSearchingMode) {
            this.prepareSearchOptions(this.cascaderComponent.inputValue);
        }
        else if (this.columns.length) {
            this.syncOptions();
        }
    };
    /**
     * Try to set a option as activated.
     * @param option Cascader option
     * @param columnIndex Of which column this option is in
     * @param performSelect Select
     * @param loadingChildren Try to load children asynchronously.
     */
    /**
     * Try to set a option as activated.
     * @param {?} option Cascader option
     * @param {?} columnIndex Of which column this option is in
     * @param {?=} performSelect Select
     * @param {?=} loadingChildren Try to load children asynchronously.
     * @return {?}
     */
    NzCascaderService.prototype.setOptionActivated = /**
     * Try to set a option as activated.
     * @param {?} option Cascader option
     * @param {?} columnIndex Of which column this option is in
     * @param {?=} performSelect Select
     * @param {?=} loadingChildren Try to load children asynchronously.
     * @return {?}
     */
    function (option, columnIndex, performSelect, loadingChildren) {
        if (performSelect === void 0) { performSelect = false; }
        if (loadingChildren === void 0) { loadingChildren = true; }
        if (option.disabled) {
            return;
        }
        this.activatedOptions[columnIndex] = option;
        this.trackAncestorActivatedOptions(columnIndex);
        this.dropBehindActivatedOptions(columnIndex);
        /** @type {?} */
        var isParent = isParentOption(option);
        if (isParent) {
            // Parent option that has children.
            this.setColumnData((/** @type {?} */ (option.children)), columnIndex + 1, option);
        }
        else if (!option.isLeaf && loadingChildren) {
            // Parent option that should try to load children asynchronously.
            this.loadChildren(option, columnIndex);
        }
        else if (option.isLeaf) {
            // Leaf option.
            this.dropBehindColumns(columnIndex);
        }
        // Actually perform selection to make an options not only activated but also selected.
        if (performSelect) {
            this.setOptionSelected(option, columnIndex);
        }
        this.$redraw.next();
    };
    /**
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    NzCascaderService.prototype.setOptionSelected = /**
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    function (option, index) {
        /** @type {?} */
        var changeOn = this.cascaderComponent.nzChangeOn;
        /** @type {?} */
        var shouldPerformSelection = (/**
         * @param {?} o
         * @param {?} i
         * @return {?}
         */
        function (o, i) {
            return typeof changeOn === 'function' ? changeOn(o, i) : false;
        });
        if (option.isLeaf || this.cascaderComponent.nzChangeOnSelect || shouldPerformSelection(option, index)) {
            this.selectedOptions = tslib_1.__spread(this.activatedOptions);
            this.prepareEmitValue();
            this.$redraw.next();
            this.$optionSelected.next({ option: option, index: index });
        }
    };
    /**
     * @param {?} column
     * @return {?}
     */
    NzCascaderService.prototype.setOptionDeactivatedSinceColumn = /**
     * @param {?} column
     * @return {?}
     */
    function (column) {
        this.dropBehindActivatedOptions(column - 1);
        this.dropBehindColumns(column);
        this.$redraw.next();
    };
    /**
     * Set a searching option as selected, finishing up things.
     * @param option
     */
    /**
     * Set a searching option as selected, finishing up things.
     * @param {?} option
     * @return {?}
     */
    NzCascaderService.prototype.setSearchOptionSelected = /**
     * Set a searching option as selected, finishing up things.
     * @param {?} option
     * @return {?}
     */
    function (option) {
        var _this = this;
        this.activatedOptions = [option];
        this.selectedOptions = tslib_1.__spread(option.path);
        this.prepareEmitValue();
        this.$redraw.next();
        this.$optionSelected.next({ option: option, index: 0 });
        setTimeout((/**
         * @return {?}
         */
        function () {
            // Reset data and tell UI only to remove input and reset dropdown width style.
            _this.$quitSearching.next();
            _this.$redraw.next();
            _this.inSearchingMode = false;
            _this.columns = tslib_1.__spread(_this.columnsSnapshot);
            _this.activatedOptions = tslib_1.__spread(_this.selectedOptions);
        }), 200);
    };
    /**
     * Filter cascader options to reset `columns`.
     * @param searchValue The string user wants to search.
     */
    /**
     * Filter cascader options to reset `columns`.
     * @param {?} searchValue The string user wants to search.
     * @return {?}
     */
    NzCascaderService.prototype.prepareSearchOptions = /**
     * Filter cascader options to reset `columns`.
     * @param {?} searchValue The string user wants to search.
     * @return {?}
     */
    function (searchValue) {
        var _this = this;
        /** @type {?} */
        var results = [];
        // Search results only have one layer.
        /** @type {?} */
        var path = [];
        /** @type {?} */
        var defaultFilter = (/**
         * @param {?} i
         * @param {?} p
         * @return {?}
         */
        function (i, p) {
            return p.some((/**
             * @param {?} o
             * @return {?}
             */
            function (o) {
                /** @type {?} */
                var label = _this.getOptionLabel(o);
                return !!label && label.indexOf(i) !== -1;
            }));
        });
        /** @type {?} */
        var showSearch = this.cascaderComponent.nzShowSearch;
        /** @type {?} */
        var filter = isShowSearchObject(showSearch) && showSearch.filter ? showSearch.filter : defaultFilter;
        /** @type {?} */
        var sorter = isShowSearchObject(showSearch) && showSearch.sorter ? showSearch.sorter : null;
        /** @type {?} */
        var loopChild = (/**
         * @param {?} node
         * @param {?=} forceDisabled
         * @return {?}
         */
        function (node, forceDisabled) {
            var _a;
            if (forceDisabled === void 0) { forceDisabled = false; }
            path.push(node);
            /** @type {?} */
            var cPath = Array.from(path);
            if (filter(searchValue, cPath)) {
                /** @type {?} */
                var disabled = forceDisabled || node.disabled;
                /** @type {?} */
                var option = (_a = {
                        disabled: disabled,
                        isLeaf: true,
                        path: cPath
                    },
                    _a[_this.cascaderComponent.nzLabelProperty] = cPath.map((/**
                     * @param {?} p
                     * @return {?}
                     */
                    function (p) { return _this.getOptionLabel(p); })).join(' / '),
                    _a);
                results.push(option);
            }
            path.pop();
        });
        /** @type {?} */
        var loopParent = (/**
         * @param {?} node
         * @param {?=} forceDisabled
         * @return {?}
         */
        function (node, forceDisabled) {
            if (forceDisabled === void 0) { forceDisabled = false; }
            /** @type {?} */
            var disabled = forceDisabled || node.disabled;
            path.push(node);
            (/** @type {?} */ (node.children)).forEach((/**
             * @param {?} sNode
             * @return {?}
             */
            function (sNode) {
                if (!sNode.parent) {
                    sNode.parent = node;
                }
                if (!sNode.isLeaf) {
                    loopParent(sNode, disabled);
                }
                if (sNode.isLeaf || !sNode.children || !sNode.children.length) {
                    loopChild(sNode, disabled);
                }
            }));
            path.pop();
        });
        if (!this.columnsSnapshot.length) {
            this.columns = [[]];
            return;
        }
        this.columnsSnapshot[0].forEach((/**
         * @param {?} o
         * @return {?}
         */
        function (o) { return (isChildOption(o) ? loopChild(o) : loopParent(o)); }));
        if (sorter) {
            results.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) { return sorter(a.path, b.path, searchValue); }));
        }
        this.columns = [results];
    };
    /**
     * Toggle searching mode by UI. It deals with things not directly related to UI.
     * @param toSearching If this cascader is entering searching mode
     */
    /**
     * Toggle searching mode by UI. It deals with things not directly related to UI.
     * @param {?} toSearching If this cascader is entering searching mode
     * @return {?}
     */
    NzCascaderService.prototype.toggleSearchingMode = /**
     * Toggle searching mode by UI. It deals with things not directly related to UI.
     * @param {?} toSearching If this cascader is entering searching mode
     * @return {?}
     */
    function (toSearching) {
        this.inSearchingMode = toSearching;
        if (toSearching) {
            this.activatedOptionsSnapshot = tslib_1.__spread(this.activatedOptions);
            this.activatedOptions = [];
            this.selectedOptions = [];
            this.$redraw.next();
        }
        else {
            // User quit searching mode without selecting an option.
            this.activatedOptions = tslib_1.__spread(this.activatedOptionsSnapshot);
            this.selectedOptions = tslib_1.__spread(this.activatedOptions);
            this.columns = tslib_1.__spread(this.columnsSnapshot);
            this.syncOptions();
            this.$redraw.next();
        }
    };
    /**
     * Clear selected options.
     */
    /**
     * Clear selected options.
     * @return {?}
     */
    NzCascaderService.prototype.clear = /**
     * Clear selected options.
     * @return {?}
     */
    function () {
        this.values = [];
        this.selectedOptions = [];
        this.activatedOptions = [];
        this.dropBehindColumns(0);
        this.prepareEmitValue();
        this.$redraw.next();
        this.$optionSelected.next(null);
    };
    /**
     * @param {?} o
     * @return {?}
     */
    NzCascaderService.prototype.getOptionLabel = /**
     * @param {?} o
     * @return {?}
     */
    function (o) {
        return (/** @type {?} */ (o[this.cascaderComponent.nzLabelProperty || 'label']));
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} o
     * @return {?}
     */
    NzCascaderService.prototype.getOptionValue = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} o
     * @return {?}
     */
    function (o) {
        return o[this.cascaderComponent.nzValueProperty || 'value'];
    };
    /**
     * Try to insert options into a column.
     * @param options Options to insert
     * @param columnIndex Position
     */
    /**
     * Try to insert options into a column.
     * @private
     * @param {?} options Options to insert
     * @param {?} columnIndex Position
     * @param {?} parent
     * @return {?}
     */
    NzCascaderService.prototype.setColumnData = /**
     * Try to insert options into a column.
     * @private
     * @param {?} options Options to insert
     * @param {?} columnIndex Position
     * @param {?} parent
     * @return {?}
     */
    function (options, columnIndex, parent) {
        /** @type {?} */
        var existingOptions = this.columns[columnIndex];
        if (!arraysEqual(existingOptions, options)) {
            options.forEach((/**
             * @param {?} o
             * @return {?}
             */
            function (o) { return (o.parent = parent); }));
            this.columns[columnIndex] = options;
            this.dropBehindColumns(columnIndex);
        }
    };
    /**
     * Set all ancestor options as activated.
     */
    /**
     * Set all ancestor options as activated.
     * @private
     * @param {?} startIndex
     * @return {?}
     */
    NzCascaderService.prototype.trackAncestorActivatedOptions = /**
     * Set all ancestor options as activated.
     * @private
     * @param {?} startIndex
     * @return {?}
     */
    function (startIndex) {
        for (var i = startIndex - 1; i >= 0; i--) {
            if (!this.activatedOptions[i]) {
                this.activatedOptions[i] = (/** @type {?} */ (this.activatedOptions[i + 1].parent));
            }
        }
    };
    /**
     * @private
     * @param {?} lastReserveIndex
     * @return {?}
     */
    NzCascaderService.prototype.dropBehindActivatedOptions = /**
     * @private
     * @param {?} lastReserveIndex
     * @return {?}
     */
    function (lastReserveIndex) {
        this.activatedOptions = this.activatedOptions.splice(0, lastReserveIndex + 1);
    };
    /**
     * @private
     * @param {?} lastReserveIndex
     * @return {?}
     */
    NzCascaderService.prototype.dropBehindColumns = /**
     * @private
     * @param {?} lastReserveIndex
     * @return {?}
     */
    function (lastReserveIndex) {
        if (lastReserveIndex < this.columns.length - 1) {
            this.columns = this.columns.slice(0, lastReserveIndex + 1);
        }
    };
    /**
     * Load children of an option asynchronously.
     */
    /**
     * Load children of an option asynchronously.
     * @param {?} option
     * @param {?} columnIndex
     * @param {?=} success
     * @param {?=} failure
     * @return {?}
     */
    NzCascaderService.prototype.loadChildren = /**
     * Load children of an option asynchronously.
     * @param {?} option
     * @param {?} columnIndex
     * @param {?=} success
     * @param {?=} failure
     * @return {?}
     */
    function (option, // tslint:disable-line:no-any
    columnIndex, success, failure) {
        var _this = this;
        /** @type {?} */
        var loadFn = this.cascaderComponent.nzLoadData;
        if (loadFn) {
            // If there isn't any option in columns.
            this.$loading.next(columnIndex < 0);
            if (typeof option === 'object') {
                option.loading = true;
            }
            loadFn(option, columnIndex).then((/**
             * @return {?}
             */
            function () {
                option.loading = false;
                if (option.children) {
                    _this.setColumnData(option.children, columnIndex + 1, option);
                }
                if (success) {
                    success();
                }
                _this.$loading.next(false);
                _this.$redraw.next();
            }), (/**
             * @return {?}
             */
            function () {
                option.loading = false;
                option.isLeaf = true;
                if (failure) {
                    failure();
                }
                _this.$redraw.next();
            }));
        }
    };
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    NzCascaderService.prototype.isLoaded = /**
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return this.columns[index] && this.columns[index].length > 0;
    };
    /**
     * Find a option that has a given value in a given column.
     */
    /**
     * Find a option that has a given value in a given column.
     * @private
     * @param {?} columnIndex
     * @param {?} value
     * @return {?}
     */
    NzCascaderService.prototype.findOptionWithValue = /**
     * Find a option that has a given value in a given column.
     * @private
     * @param {?} columnIndex
     * @param {?} value
     * @return {?}
     */
    function (columnIndex, value // tslint:disable-line:no-any
    ) {
        var _this = this;
        /** @type {?} */
        var targetColumn = this.columns[columnIndex];
        if (targetColumn) {
            /** @type {?} */
            var v_1 = typeof value === 'object' ? this.getOptionValue(value) : value;
            return (/** @type {?} */ (targetColumn.find((/**
             * @param {?} o
             * @return {?}
             */
            function (o) { return v_1 === _this.getOptionValue(o); }))));
        }
        return null;
    };
    /**
     * @private
     * @return {?}
     */
    NzCascaderService.prototype.prepareEmitValue = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.values = this.selectedOptions.map((/**
         * @param {?} o
         * @return {?}
         */
        function (o) { return _this.getOptionValue(o); }));
    };
    NzCascaderService.decorators = [
        { type: Injectable }
    ];
    return NzCascaderService;
}());
export { NzCascaderService };
if (false) {
    /**
     * Activated options in each column.
     * @type {?}
     */
    NzCascaderService.prototype.activatedOptions;
    /**
     * An array to store cascader items arranged in different layers.
     * @type {?}
     */
    NzCascaderService.prototype.columns;
    /**
     * If user has entered searching mode.
     * @type {?}
     */
    NzCascaderService.prototype.inSearchingMode;
    /**
     * Selected options would be output to user.
     * @type {?}
     */
    NzCascaderService.prototype.selectedOptions;
    /** @type {?} */
    NzCascaderService.prototype.values;
    /** @type {?} */
    NzCascaderService.prototype.$loading;
    /**
     * Emit an event to notify cascader it needs to redraw because activated or
     * selected options are changed.
     * @type {?}
     */
    NzCascaderService.prototype.$redraw;
    /**
     * Emit an event when an option gets selected.
     * Emit true if a leaf options is selected.
     * @type {?}
     */
    NzCascaderService.prototype.$optionSelected;
    /**
     * Emit an event to notify cascader it needs to quit searching mode.
     * Only emit when user do select a searching option.
     * @type {?}
     */
    NzCascaderService.prototype.$quitSearching;
    /**
     * To hold columns before entering searching mode.
     * @type {?}
     * @private
     */
    NzCascaderService.prototype.columnsSnapshot;
    /**
     * To hold activated options before entering searching mode.
     * @type {?}
     * @private
     */
    NzCascaderService.prototype.activatedOptionsSnapshot;
    /**
     * @type {?}
     * @private
     */
    NzCascaderService.prototype.cascaderComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FzY2FkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY2FzY2FkZXIvIiwic291cmNlcyI6WyJuei1jYXNjYWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWhELE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFM0QsT0FBTyxFQUNMLGtCQUFrQixFQUtuQixNQUFNLDJCQUEyQixDQUFDO0FBQ25DLE9BQU8sRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFLcEU7SUFBQTs7OztRQUdFLHFCQUFnQixHQUF1QixFQUFFLENBQUM7Ozs7UUFHMUMsWUFBTyxHQUF5QixDQUFDLEVBQUUsQ0FBQyxDQUFDOzs7O1FBR3JDLG9CQUFlLEdBQUcsS0FBSyxDQUFDOzs7O1FBR3hCLG9CQUFlLEdBQXVCLEVBQUUsQ0FBQztRQUV6QyxXQUFNLEdBQVUsRUFBRSxDQUFDLENBQUMsNkJBQTZCOztRQUV4QyxhQUFRLEdBQUcsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7Ozs7O1FBTS9DLFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDOzs7OztRQU05QixvQkFBZSxHQUFHLElBQUksT0FBTyxFQUczQixDQUFDOzs7OztRQU1ILG1CQUFjLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQzs7OztRQUd0QyxvQkFBZSxHQUF5QixDQUFDLEVBQUUsQ0FBQyxDQUFDOzs7O1FBRzdDLDZCQUF3QixHQUF1QixFQUFFLENBQUM7SUE2WDVELENBQUM7SUF4WEMsc0JBQUksd0NBQVM7UUFEYixrREFBa0Q7Ozs7O1FBQ2xEO1lBQ0UsT0FBTyxJQUFJLENB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Q0FBOEM7Ozs7OztJQUc5Qyw0Q0FBcUQ7Ozs7OztJQUdyRCxxREFBMEQ7Ozs7O0lBRTFELDhDQUF1RCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgYXJyYXlzRXF1YWwsIGlzTm90TmlsIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7XHJcbiAgaXNTaG93U2VhcmNoT2JqZWN0LFxyXG4gIE56Q2FzY2FkZXJDb21wb25lbnRBc1NvdXJjZSxcclxuICBOekNhc2NhZGVyRmlsdGVyLFxyXG4gIE56Q2FzY2FkZXJPcHRpb24sXHJcbiAgTnpDYXNjYWRlclNlYXJjaE9wdGlvblxyXG59IGZyb20gJy4vbnotY2FzY2FkZXItZGVmaW5pdGlvbnMnO1xyXG5pbXBvcnQgeyBpc0NoaWxkT3B0aW9uLCBpc1BhcmVudE9wdGlvbiB9IGZyb20gJy4vbnotY2FzY2FkZXItdXRpbHMnO1xyXG5cclxuLyoqXHJcbiAqIEFsbCBkYXRhIGlzIHN0b3JlZCBhbmQgcGFyc2VkIGluIE56Q2FzY2FkZXJTZXJ2aWNlLlxyXG4gKi9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTnpDYXNjYWRlclNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIC8qKiBBY3RpdmF0ZWQgb3B0aW9ucyBpbiBlYWNoIGNvbHVtbi4gKi9cclxuICBhY3RpdmF0ZWRPcHRpb25zOiBOekNhc2NhZGVyT3B0aW9uW10gPSBbXTtcclxuXHJcbiAgLyoqIEFuIGFycmF5IHRvIHN0b3JlIGNhc2NhZGVyIGl0ZW1zIGFycmFuZ2VkIGluIGRpZmZlcmVudCBsYXllcnMuICovXHJcbiAgY29sdW1uczogTnpDYXNjYWRlck9wdGlvbltdW10gPSBbW11dO1xyXG5cclxuICAvKiogSWYgdXNlciBoYXMgZW50ZXJlZCBzZWFyY2hpbmcgbW9kZS4gKi9cclxuICBpblNlYXJjaGluZ01vZGUgPSBmYWxzZTtcclxuXHJcbiAgLyoqIFNlbGVjdGVkIG9wdGlvbnMgd291bGQgYmUgb3V0cHV0IHRvIHVzZXIuICovXHJcbiAgc2VsZWN0ZWRPcHRpb25zOiBOekNhc2NhZGVyT3B0aW9uW10gPSBbXTtcclxuXHJcbiAgdmFsdWVzOiBhbnlbXSA9IFtdOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxyXG5cclxuICByZWFkb25seSAkbG9hZGluZyA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICAvKipcclxuICAgKiBFbWl0IGFuIGV2ZW50IHRvIG5vdGlmeSBjYXNjYWRlciBpdCBuZWVkcyB0byByZWRyYXcgYmVjYXVzZSBhY3RpdmF0ZWQgb3JcclxuICAgKiBzZWxlY3RlZCBvcHRpb25zIGFyZSBjaGFuZ2VkLlxyXG4gICAqL1xyXG4gIHJlYWRvbmx5ICRyZWRyYXcgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cclxuICAvKipcclxuICAgKiBFbWl0IGFuIGV2ZW50IHdoZW4gYW4gb3B0aW9uIGdldHMgc2VsZWN0ZWQuXHJcbiAgICogRW1pdCB0cnVlIGlmIGEgbGVhZiBvcHRpb25zIGlzIHNlbGVjdGVkLlxyXG4gICAqL1xyXG4gIHJlYWRvbmx5ICRvcHRpb25TZWxlY3RlZCA9IG5ldyBTdWJqZWN0PHtcclxuICAgIG9wdGlvbjogTnpDYXNjYWRlck9wdGlvbjtcclxuICAgIGluZGV4OiBudW1iZXI7XHJcbiAgfSB8IG51bGw+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEVtaXQgYW4gZXZlbnQgdG8gbm90aWZ5IGNhc2NhZGVyIGl0IG5lZWRzIHRvIHF1aXQgc2VhcmNoaW5nIG1vZGUuXHJcbiAgICogT25seSBlbWl0IHdoZW4gdXNlciBkbyBzZWxlY3QgYSBzZWFyY2hpbmcgb3B0aW9uLlxyXG4gICAqL1xyXG4gIHJlYWRvbmx5ICRxdWl0U2VhcmNoaW5nID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgLyoqIFRvIGhvbGQgY29sdW1ucyBiZWZvcmUgZW50ZXJpbmcgc2VhcmNoaW5nIG1vZGUuICovXHJcbiAgcHJpdmF0ZSBjb2x1bW5zU25hcHNob3Q6IE56Q2FzY2FkZXJPcHRpb25bXVtdID0gW1tdXTtcclxuXHJcbiAgLyoqIFRvIGhvbGQgYWN0aXZhdGVkIG9wdGlvbnMgYmVmb3JlIGVudGVyaW5nIHNlYXJjaGluZyBtb2RlLiAqL1xyXG4gIHByaXZhdGUgYWN0aXZhdGVkT3B0aW9uc1NuYXBzaG90OiBOekNhc2NhZGVyT3B0aW9uW10gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSBjYXNjYWRlckNvbXBvbmVudDogTnpDYXNjYWRlckNvbXBvbmVudEFzU291cmNlO1xyXG5cclxuICAvKiogUmV0dXJuIGNhc2NhZGVyIG9wdGlvbnMgaW4gdGhlIGZpcnN0IGxheWVyLiAqL1xyXG4gIGdldCBuek9wdGlvbnMoKTogTnpDYXNjYWRlck9wdGlvbltdIHtcclxuICAgIHJldHVybiB0aGlzLmNvbHVtbnNbMF07XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuJHJlZHJhdy5jb21wbGV0ZSgpO1xyXG4gICAgdGhpcy4kcXVpdFNlYXJjaGluZy5jb21wbGV0ZSgpO1xyXG4gICAgdGhpcy4kb3B0aW9uU2VsZWN0ZWQuY29tcGxldGUoKTtcclxuICAgIHRoaXMuJGxvYWRpbmcuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1ha2Ugc3VyZSB0aGF0IHZhbHVlIG1hdGNoZXMgd2hhdCBpcyBkaXNwbGF5ZWQgaW4gdGhlIGRyb3Bkb3duLlxyXG4gICAqL1xyXG4gIHN5bmNPcHRpb25zKGZpcnN0OiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMudmFsdWVzO1xyXG4gICAgY29uc3QgaGFzVmFsdWUgPSB2YWx1ZXMgJiYgdmFsdWVzLmxlbmd0aDtcclxuICAgIGNvbnN0IGxhc3RDb2x1bW5JbmRleCA9IHZhbHVlcy5sZW5ndGggLSAxO1xyXG4gICAgY29uc3QgaW5pdENvbHVtbldpdGhJbmRleCA9IChjb2x1bW5JbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIGNvbnN0IGFjdGl2YXRlZE9wdGlvblNldHRlciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50VmFsdWUgPSB2YWx1ZXNbY29sdW1uSW5kZXhdO1xyXG5cclxuICAgICAgICBpZiAoIWlzTm90TmlsKGN1cnJlbnRWYWx1ZSkpIHtcclxuICAgICAgICAgIHRoaXMuJHJlZHJhdy5uZXh0KCk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBvcHRpb24gPVxyXG4gICAgICAgICAgdGhpcy5maW5kT3B0aW9uV2l0aFZhbHVlKGNvbHVtbkluZGV4LCB2YWx1ZXNbY29sdW1uSW5kZXhdKSB8fFxyXG4gICAgICAgICAgKHR5cGVvZiBjdXJyZW50VmFsdWUgPT09ICdvYmplY3QnXHJcbiAgICAgICAgICAgID8gY3VycmVudFZhbHVlXHJcbiAgICAgICAgICAgIDoge1xyXG4gICAgICAgICAgICAgICAgW2Ake3RoaXMuY2FzY2FkZXJDb21wb25lbnQubnpWYWx1ZVByb3BlcnR5fWBdOiBjdXJyZW50VmFsdWUsXHJcbiAgICAgICAgICAgICAgICBbYCR7dGhpcy5jYXNjYWRlckNvbXBvbmVudC5uekxhYmVsUHJvcGVydHl9YF06IGN1cnJlbnRWYWx1ZVxyXG4gICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNldE9wdGlvbkFjdGl2YXRlZChvcHRpb24sIGNvbHVtbkluZGV4LCBmYWxzZSwgZmFsc2UpO1xyXG5cclxuICAgICAgICBpZiAoY29sdW1uSW5kZXggPCBsYXN0Q29sdW1uSW5kZXgpIHtcclxuICAgICAgICAgIGluaXRDb2x1bW5XaXRoSW5kZXgoY29sdW1uSW5kZXggKyAxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5kcm9wQmVoaW5kQ29sdW1ucyhjb2x1bW5JbmRleCk7XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IFsuLi50aGlzLmFjdGl2YXRlZE9wdGlvbnNdO1xyXG4gICAgICAgICAgdGhpcy4kcmVkcmF3Lm5leHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBpZiAodGhpcy5pc0xvYWRlZChjb2x1bW5JbmRleCkgfHwgIXRoaXMuY2FzY2FkZXJDb21wb25lbnQubnpMb2FkRGF0YSkge1xyXG4gICAgICAgIGFjdGl2YXRlZE9wdGlvblNldHRlcigpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMuYWN0aXZhdGVkT3B0aW9uc1tjb2x1bW5JbmRleCAtIDFdIHx8IHt9O1xyXG4gICAgICAgIHRoaXMubG9hZENoaWxkcmVuKG9wdGlvbiwgY29sdW1uSW5kZXggLSAxLCBhY3RpdmF0ZWRPcHRpb25TZXR0ZXIpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9ucyA9IFtdO1xyXG4gICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSBbXTtcclxuXHJcbiAgICBpZiAoZmlyc3QgJiYgdGhpcy5jYXNjYWRlckNvbXBvbmVudC5uekxvYWREYXRhICYmICFoYXNWYWx1ZSkge1xyXG4gICAgICAvLyBTaG91bGQgYWxzbyBub3RpZnkgdGhlIGNvbXBvbmVudCB0aGF0IHZhbHVlIGNoYW5nZXMuIEZpeCAjMzQ4MC5cclxuICAgICAgdGhpcy4kcmVkcmF3Lm5leHQoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaW5pdENvbHVtbldpdGhJbmRleCgwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEJpbmQgY2FzY2FkZXIgY29tcG9uZW50IHNvIHRoaXMgc2VydmljZSBjb3VsZCB1c2UgaW5wdXRzLlxyXG4gICAqL1xyXG4gIHdpdGhDb21wb25lbnQoY2FzY2FkZXJDb21wb25lbnQ6IE56Q2FzY2FkZXJDb21wb25lbnRBc1NvdXJjZSk6IHZvaWQge1xyXG4gICAgdGhpcy5jYXNjYWRlckNvbXBvbmVudCA9IGNhc2NhZGVyQ29tcG9uZW50O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVzZXQgYWxsIG9wdGlvbnMuIFJlYnVpbGQgc2VhcmNoaW5nIG9wdGlvbnMgaWYgaW4gc2VhcmNoaW5nIG1vZGUuXHJcbiAgICovXHJcbiAgd2l0aE9wdGlvbnMob3B0aW9uczogTnpDYXNjYWRlck9wdGlvbltdIHwgbnVsbCk6IHZvaWQge1xyXG4gICAgdGhpcy5jb2x1bW5zU25hcHNob3QgPSB0aGlzLmNvbHVtbnMgPSBvcHRpb25zICYmIG9wdGlvbnMubGVuZ3RoID8gW29wdGlvbnNdIDogW107XHJcblxyXG4gICAgaWYgKHRoaXMuaW5TZWFyY2hpbmdNb2RlKSB7XHJcbiAgICAgIHRoaXMucHJlcGFyZVNlYXJjaE9wdGlvbnModGhpcy5jYXNjYWRlckNvbXBvbmVudC5pbnB1dFZhbHVlKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5jb2x1bW5zLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnN5bmNPcHRpb25zKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUcnkgdG8gc2V0IGEgb3B0aW9uIGFzIGFjdGl2YXRlZC5cclxuICAgKiBAcGFyYW0gb3B0aW9uIENhc2NhZGVyIG9wdGlvblxyXG4gICAqIEBwYXJhbSBjb2x1bW5JbmRleCBPZiB3aGljaCBjb2x1bW4gdGhpcyBvcHRpb24gaXMgaW5cclxuICAgKiBAcGFyYW0gcGVyZm9ybVNlbGVjdCBTZWxlY3RcclxuICAgKiBAcGFyYW0gbG9hZGluZ0NoaWxkcmVuIFRyeSB0byBsb2FkIGNoaWxkcmVuIGFzeW5jaHJvbm91c2x5LlxyXG4gICAqL1xyXG4gIHNldE9wdGlvbkFjdGl2YXRlZChcclxuICAgIG9wdGlvbjogTnpDYXNjYWRlck9wdGlvbixcclxuICAgIGNvbHVtbkluZGV4OiBudW1iZXIsXHJcbiAgICBwZXJmb3JtU2VsZWN0OiBib29sZWFuID0gZmFsc2UsXHJcbiAgICBsb2FkaW5nQ2hpbGRyZW46IGJvb2xlYW4gPSB0cnVlXHJcbiAgKTogdm9pZCB7XHJcbiAgICBpZiAob3B0aW9uLmRpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnNbY29sdW1uSW5kZXhdID0gb3B0aW9uO1xyXG4gICAgdGhpcy50cmFja0FuY2VzdG9yQWN0aXZhdGVkT3B0aW9ucyhjb2x1bW5JbmRleCk7XHJcbiAgICB0aGlzLmRyb3BCZWhpbmRBY3RpdmF0ZWRPcHRpb25zKGNvbHVtbkluZGV4KTtcclxuXHJcbiAgICBjb25zdCBpc1BhcmVudCA9IGlzUGFyZW50T3B0aW9uKG9wdGlvbik7XHJcblxyXG4gICAgaWYgKGlzUGFyZW50KSB7XHJcbiAgICAgIC8vIFBhcmVudCBvcHRpb24gdGhhdCBoYXMgY2hpbGRyZW4uXHJcbiAgICAgIHRoaXMuc2V0Q29sdW1uRGF0YShvcHRpb24uY2hpbGRyZW4hLCBjb2x1bW5JbmRleCArIDEsIG9wdGlvbik7XHJcbiAgICB9IGVsc2UgaWYgKCFvcHRpb24uaXNMZWFmICYmIGxvYWRpbmdDaGlsZHJlbikge1xyXG4gICAgICAvLyBQYXJlbnQgb3B0aW9uIHRoYXQgc2hvdWxkIHRyeSB0byBsb2FkIGNoaWxkcmVuIGFzeW5jaHJvbm91c2x5LlxyXG4gICAgICB0aGlzLmxvYWRDaGlsZHJlbihvcHRpb24sIGNvbHVtbkluZGV4KTtcclxuICAgIH0gZWxzZSBpZiAob3B0aW9uLmlzTGVhZikge1xyXG4gICAgICAvLyBMZWFmIG9wdGlvbi5cclxuICAgICAgdGhpcy5kcm9wQmVoaW5kQ29sdW1ucyhjb2x1bW5JbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWN0dWFsbHkgcGVyZm9ybSBzZWxlY3Rpb24gdG8gbWFrZSBhbiBvcHRpb25zIG5vdCBvbmx5IGFjdGl2YXRlZCBidXQgYWxzbyBzZWxlY3RlZC5cclxuICAgIGlmIChwZXJmb3JtU2VsZWN0KSB7XHJcbiAgICAgIHRoaXMuc2V0T3B0aW9uU2VsZWN0ZWQob3B0aW9uLCBjb2x1bW5JbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy4kcmVkcmF3Lm5leHQoKTtcclxuICB9XHJcblxyXG4gIHNldE9wdGlvblNlbGVjdGVkKG9wdGlvbjogTnpDYXNjYWRlck9wdGlvbiwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgY29uc3QgY2hhbmdlT24gPSB0aGlzLmNhc2NhZGVyQ29tcG9uZW50Lm56Q2hhbmdlT247XHJcbiAgICBjb25zdCBzaG91bGRQZXJmb3JtU2VsZWN0aW9uID0gKG86IE56Q2FzY2FkZXJPcHRpb24sIGk6IG51bWJlcik6IGJvb2xlYW4gPT4ge1xyXG4gICAgICByZXR1cm4gdHlwZW9mIGNoYW5nZU9uID09PSAnZnVuY3Rpb24nID8gY2hhbmdlT24obywgaSkgOiBmYWxzZTtcclxuICAgIH07XHJcblxyXG4gICAgaWYgKG9wdGlvbi5pc0xlYWYgfHwgdGhpcy5jYXNjYWRlckNvbXBvbmVudC5uekNoYW5nZU9uU2VsZWN0IHx8IHNob3VsZFBlcmZvcm1TZWxlY3Rpb24ob3B0aW9uLCBpbmRleCkpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSBbLi4udGhpcy5hY3RpdmF0ZWRPcHRpb25zXTtcclxuICAgICAgdGhpcy5wcmVwYXJlRW1pdFZhbHVlKCk7XHJcbiAgICAgIHRoaXMuJHJlZHJhdy5uZXh0KCk7XHJcbiAgICAgIHRoaXMuJG9wdGlvblNlbGVjdGVkLm5leHQoeyBvcHRpb24sIGluZGV4IH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0T3B0aW9uRGVhY3RpdmF0ZWRTaW5jZUNvbHVtbihjb2x1bW46IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5kcm9wQmVoaW5kQWN0aXZhdGVkT3B0aW9ucyhjb2x1bW4gLSAxKTtcclxuICAgIHRoaXMuZHJvcEJlaGluZENvbHVtbnMoY29sdW1uKTtcclxuICAgIHRoaXMuJHJlZHJhdy5uZXh0KCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXQgYSBzZWFyY2hpbmcgb3B0aW9uIGFzIHNlbGVjdGVkLCBmaW5pc2hpbmcgdXAgdGhpbmdzLlxyXG4gICAqIEBwYXJhbSBvcHRpb25cclxuICAgKi9cclxuICBzZXRTZWFyY2hPcHRpb25TZWxlY3RlZChvcHRpb246IE56Q2FzY2FkZXJTZWFyY2hPcHRpb24pOiB2b2lkIHtcclxuICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9ucyA9IFtvcHRpb25dO1xyXG4gICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSBbLi4ub3B0aW9uLnBhdGhdO1xyXG4gICAgdGhpcy5wcmVwYXJlRW1pdFZhbHVlKCk7XHJcbiAgICB0aGlzLiRyZWRyYXcubmV4dCgpO1xyXG4gICAgdGhpcy4kb3B0aW9uU2VsZWN0ZWQubmV4dCh7IG9wdGlvbiwgaW5kZXg6IDAgfSk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIC8vIFJlc2V0IGRhdGEgYW5kIHRlbGwgVUkgb25seSB0byByZW1vdmUgaW5wdXQgYW5kIHJlc2V0IGRyb3Bkb3duIHdpZHRoIHN0eWxlLlxyXG4gICAgICB0aGlzLiRxdWl0U2VhcmNoaW5nLm5leHQoKTtcclxuICAgICAgdGhpcy4kcmVkcmF3Lm5leHQoKTtcclxuICAgICAgdGhpcy5pblNlYXJjaGluZ01vZGUgPSBmYWxzZTtcclxuICAgICAgdGhpcy5jb2x1bW5zID0gWy4uLnRoaXMuY29sdW1uc1NuYXBzaG90XTtcclxuICAgICAgdGhpcy5hY3RpdmF0ZWRPcHRpb25zID0gWy4uLnRoaXMuc2VsZWN0ZWRPcHRpb25zXTtcclxuICAgIH0sIDIwMCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGaWx0ZXIgY2FzY2FkZXIgb3B0aW9ucyB0byByZXNldCBgY29sdW1uc2AuXHJcbiAgICogQHBhcmFtIHNlYXJjaFZhbHVlIFRoZSBzdHJpbmcgdXNlciB3YW50cyB0byBzZWFyY2guXHJcbiAgICovXHJcbiAgcHJlcGFyZVNlYXJjaE9wdGlvbnMoc2VhcmNoVmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVzdWx0czogTnpDYXNjYWRlck9wdGlvbltdID0gW107IC8vIFNlYXJjaCByZXN1bHRzIG9ubHkgaGF2ZSBvbmUgbGF5ZXIuXHJcbiAgICBjb25zdCBwYXRoOiBOekNhc2NhZGVyT3B0aW9uW10gPSBbXTtcclxuICAgIGNvbnN0IGRlZmF1bHRGaWx0ZXI6IE56Q2FzY2FkZXJGaWx0ZXIgPSAoaSwgcCkgPT4ge1xyXG4gICAgICByZXR1cm4gcC5zb21lKG8gPT4ge1xyXG4gICAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy5nZXRPcHRpb25MYWJlbChvKTtcclxuICAgICAgICByZXR1cm4gISFsYWJlbCAmJiBsYWJlbC5pbmRleE9mKGkpICE9PSAtMTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgc2hvd1NlYXJjaCA9IHRoaXMuY2FzY2FkZXJDb21wb25lbnQubnpTaG93U2VhcmNoO1xyXG4gICAgY29uc3QgZmlsdGVyID0gaXNTaG93U2VhcmNoT2JqZWN0KHNob3dTZWFyY2gpICYmIHNob3dTZWFyY2guZmlsdGVyID8gc2hvd1NlYXJjaC5maWx0ZXIgOiBkZWZhdWx0RmlsdGVyO1xyXG4gICAgY29uc3Qgc29ydGVyID0gaXNTaG93U2VhcmNoT2JqZWN0KHNob3dTZWFyY2gpICYmIHNob3dTZWFyY2guc29ydGVyID8gc2hvd1NlYXJjaC5zb3J0ZXIgOiBudWxsO1xyXG4gICAgY29uc3QgbG9vcENoaWxkID0gKG5vZGU6IE56Q2FzY2FkZXJPcHRpb24sIGZvcmNlRGlzYWJsZWQgPSBmYWxzZSkgPT4ge1xyXG4gICAgICBwYXRoLnB1c2gobm9kZSk7XHJcbiAgICAgIGNvbnN0IGNQYXRoID0gQXJyYXkuZnJvbShwYXRoKTtcclxuICAgICAgaWYgKGZpbHRlcihzZWFyY2hWYWx1ZSwgY1BhdGgpKSB7XHJcbiAgICAgICAgY29uc3QgZGlzYWJsZWQgPSBmb3JjZURpc2FibGVkIHx8IG5vZGUuZGlzYWJsZWQ7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uOiBOekNhc2NhZGVyU2VhcmNoT3B0aW9uID0ge1xyXG4gICAgICAgICAgZGlzYWJsZWQsXHJcbiAgICAgICAgICBpc0xlYWY6IHRydWUsXHJcbiAgICAgICAgICBwYXRoOiBjUGF0aCxcclxuICAgICAgICAgIFt0aGlzLmNhc2NhZGVyQ29tcG9uZW50Lm56TGFiZWxQcm9wZXJ0eV06IGNQYXRoLm1hcChwID0+IHRoaXMuZ2V0T3B0aW9uTGFiZWwocCkpLmpvaW4oJyAvICcpXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXN1bHRzLnB1c2gob3B0aW9uKTtcclxuICAgICAgfVxyXG4gICAgICBwYXRoLnBvcCgpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGxvb3BQYXJlbnQgPSAobm9kZTogTnpDYXNjYWRlck9wdGlvbiwgZm9yY2VEaXNhYmxlZCA9IGZhbHNlKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRpc2FibGVkID0gZm9yY2VEaXNhYmxlZCB8fCBub2RlLmRpc2FibGVkO1xyXG4gICAgICBwYXRoLnB1c2gobm9kZSk7XHJcbiAgICAgIG5vZGUuY2hpbGRyZW4hLmZvckVhY2goc05vZGUgPT4ge1xyXG4gICAgICAgIGlmICghc05vZGUucGFyZW50KSB7XHJcbiAgICAgICAgICBzTm9kZS5wYXJlbnQgPSBub2RlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNOb2RlLmlzTGVhZikge1xyXG4gICAgICAgICAgbG9vcFBhcmVudChzTm9kZSwgZGlzYWJsZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc05vZGUuaXNMZWFmIHx8ICFzTm9kZS5jaGlsZHJlbiB8fCAhc05vZGUuY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgICAgICBsb29wQ2hpbGQoc05vZGUsIGRpc2FibGVkKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBwYXRoLnBvcCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoIXRoaXMuY29sdW1uc1NuYXBzaG90Lmxlbmd0aCkge1xyXG4gICAgICB0aGlzLmNvbHVtbnMgPSBbW11dO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jb2x1bW5zU25hcHNob3RbMF0uZm9yRWFjaChvID0+IChpc0NoaWxkT3B0aW9uKG8pID8gbG9vcENoaWxkKG8pIDogbG9vcFBhcmVudChvKSkpO1xyXG5cclxuICAgIGlmIChzb3J0ZXIpIHtcclxuICAgICAgcmVzdWx0cy5zb3J0KChhLCBiKSA9PiBzb3J0ZXIoYS5wYXRoLCBiLnBhdGgsIHNlYXJjaFZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jb2x1bW5zID0gW3Jlc3VsdHNdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVG9nZ2xlIHNlYXJjaGluZyBtb2RlIGJ5IFVJLiBJdCBkZWFscyB3aXRoIHRoaW5ncyBub3QgZGlyZWN0bHkgcmVsYXRlZCB0byBVSS5cclxuICAgKiBAcGFyYW0gdG9TZWFyY2hpbmcgSWYgdGhpcyBjYXNjYWRlciBpcyBlbnRlcmluZyBzZWFyY2hpbmcgbW9kZVxyXG4gICAqL1xyXG4gIHRvZ2dsZVNlYXJjaGluZ01vZGUodG9TZWFyY2hpbmc6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuaW5TZWFyY2hpbmdNb2RlID0gdG9TZWFyY2hpbmc7XHJcblxyXG4gICAgaWYgKHRvU2VhcmNoaW5nKSB7XHJcbiAgICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9uc1NuYXBzaG90ID0gWy4uLnRoaXMuYWN0aXZhdGVkT3B0aW9uc107XHJcbiAgICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9ucyA9IFtdO1xyXG4gICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IFtdO1xyXG4gICAgICB0aGlzLiRyZWRyYXcubmV4dCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gVXNlciBxdWl0IHNlYXJjaGluZyBtb2RlIHdpdGhvdXQgc2VsZWN0aW5nIGFuIG9wdGlvbi5cclxuICAgICAgdGhpcy5hY3RpdmF0ZWRPcHRpb25zID0gWy4uLnRoaXMuYWN0aXZhdGVkT3B0aW9uc1NuYXBzaG90XTtcclxuICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSBbLi4udGhpcy5hY3RpdmF0ZWRPcHRpb25zXTtcclxuICAgICAgdGhpcy5jb2x1bW5zID0gWy4uLnRoaXMuY29sdW1uc1NuYXBzaG90XTtcclxuICAgICAgdGhpcy5zeW5jT3B0aW9ucygpO1xyXG4gICAgICB0aGlzLiRyZWRyYXcubmV4dCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2xlYXIgc2VsZWN0ZWQgb3B0aW9ucy5cclxuICAgKi9cclxuICBjbGVhcigpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWVzID0gW107XHJcbiAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IFtdO1xyXG4gICAgdGhpcy5hY3RpdmF0ZWRPcHRpb25zID0gW107XHJcbiAgICB0aGlzLmRyb3BCZWhpbmRDb2x1bW5zKDApO1xyXG4gICAgdGhpcy5wcmVwYXJlRW1pdFZhbHVlKCk7XHJcbiAgICB0aGlzLiRyZWRyYXcubmV4dCgpO1xyXG4gICAgdGhpcy4kb3B0aW9uU2VsZWN0ZWQubmV4dChudWxsKTtcclxuICB9XHJcblxyXG4gIGdldE9wdGlvbkxhYmVsKG86IE56Q2FzY2FkZXJPcHRpb24pOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIG9bdGhpcy5jYXNjYWRlckNvbXBvbmVudC5uekxhYmVsUHJvcGVydHkgfHwgJ2xhYmVsJ10gYXMgc3RyaW5nO1xyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIGdldE9wdGlvblZhbHVlKG86IE56Q2FzY2FkZXJPcHRpb24pOiBhbnkge1xyXG4gICAgcmV0dXJuIG9bdGhpcy5jYXNjYWRlckNvbXBvbmVudC5uelZhbHVlUHJvcGVydHkgfHwgJ3ZhbHVlJ107XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUcnkgdG8gaW5zZXJ0IG9wdGlvbnMgaW50byBhIGNvbHVtbi5cclxuICAgKiBAcGFyYW0gb3B0aW9ucyBPcHRpb25zIHRvIGluc2VydFxyXG4gICAqIEBwYXJhbSBjb2x1bW5JbmRleCBQb3NpdGlvblxyXG4gICAqL1xyXG4gIHByaXZhdGUgc2V0Q29sdW1uRGF0YShvcHRpb25zOiBOekNhc2NhZGVyT3B0aW9uW10sIGNvbHVtbkluZGV4OiBudW1iZXIsIHBhcmVudDogTnpDYXNjYWRlck9wdGlvbik6IHZvaWQge1xyXG4gICAgY29uc3QgZXhpc3RpbmdPcHRpb25zID0gdGhpcy5jb2x1bW5zW2NvbHVtbkluZGV4XTtcclxuICAgIGlmICghYXJyYXlzRXF1YWwoZXhpc3RpbmdPcHRpb25zLCBvcHRpb25zKSkge1xyXG4gICAgICBvcHRpb25zLmZvckVhY2gobyA9PiAoby5wYXJlbnQgPSBwYXJlbnQpKTtcclxuICAgICAgdGhpcy5jb2x1bW5zW2NvbHVtbkluZGV4XSA9IG9wdGlvbnM7XHJcbiAgICAgIHRoaXMuZHJvcEJlaGluZENvbHVtbnMoY29sdW1uSW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IGFsbCBhbmNlc3RvciBvcHRpb25zIGFzIGFjdGl2YXRlZC5cclxuICAgKi9cclxuICBwcml2YXRlIHRyYWNrQW5jZXN0b3JBY3RpdmF0ZWRPcHRpb25zKHN0YXJ0SW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0SW5kZXggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICBpZiAoIXRoaXMuYWN0aXZhdGVkT3B0aW9uc1tpXSkge1xyXG4gICAgICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9uc1tpXSA9IHRoaXMuYWN0aXZhdGVkT3B0aW9uc1tpICsgMV0ucGFyZW50ITtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkcm9wQmVoaW5kQWN0aXZhdGVkT3B0aW9ucyhsYXN0UmVzZXJ2ZUluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9ucyA9IHRoaXMuYWN0aXZhdGVkT3B0aW9ucy5zcGxpY2UoMCwgbGFzdFJlc2VydmVJbmRleCArIDEpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkcm9wQmVoaW5kQ29sdW1ucyhsYXN0UmVzZXJ2ZUluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmIChsYXN0UmVzZXJ2ZUluZGV4IDwgdGhpcy5jb2x1bW5zLmxlbmd0aCAtIDEpIHtcclxuICAgICAgdGhpcy5jb2x1bW5zID0gdGhpcy5jb2x1bW5zLnNsaWNlKDAsIGxhc3RSZXNlcnZlSW5kZXggKyAxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExvYWQgY2hpbGRyZW4gb2YgYW4gb3B0aW9uIGFzeW5jaHJvbm91c2x5LlxyXG4gICAqL1xyXG4gIGxvYWRDaGlsZHJlbihcclxuICAgIG9wdGlvbjogTnpDYXNjYWRlck9wdGlvbiB8IGFueSwgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcclxuICAgIGNvbHVtbkluZGV4OiBudW1iZXIsXHJcbiAgICBzdWNjZXNzPzogVm9pZEZ1bmN0aW9uLFxyXG4gICAgZmFpbHVyZT86IFZvaWRGdW5jdGlvblxyXG4gICk6IHZvaWQge1xyXG4gICAgY29uc3QgbG9hZEZuID0gdGhpcy5jYXNjYWRlckNvbXBvbmVudC5uekxvYWREYXRhO1xyXG5cclxuICAgIGlmIChsb2FkRm4pIHtcclxuICAgICAgLy8gSWYgdGhlcmUgaXNuJ3QgYW55IG9wdGlvbiBpbiBjb2x1bW5zLlxyXG4gICAgICB0aGlzLiRsb2FkaW5nLm5leHQoY29sdW1uSW5kZXggPCAwKTtcclxuXHJcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9uID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIG9wdGlvbi5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbG9hZEZuKG9wdGlvbiwgY29sdW1uSW5kZXgpLnRoZW4oXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgb3B0aW9uLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIGlmIChvcHRpb24uY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRDb2x1bW5EYXRhKG9wdGlvbi5jaGlsZHJlbiwgY29sdW1uSW5kZXggKyAxLCBvcHRpb24pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgc3VjY2VzcygpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy4kbG9hZGluZy5uZXh0KGZhbHNlKTtcclxuICAgICAgICAgIHRoaXMuJHJlZHJhdy5uZXh0KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICBvcHRpb24ubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgb3B0aW9uLmlzTGVhZiA9IHRydWU7XHJcbiAgICAgICAgICBpZiAoZmFpbHVyZSkge1xyXG4gICAgICAgICAgICBmYWlsdXJlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLiRyZWRyYXcubmV4dCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNMb2FkZWQoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29sdW1uc1tpbmRleF0gJiYgdGhpcy5jb2x1bW5zW2luZGV4XS5sZW5ndGggPiAwO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmluZCBhIG9wdGlvbiB0aGF0IGhhcyBhIGdpdmVuIHZhbHVlIGluIGEgZ2l2ZW4gY29sdW1uLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgZmluZE9wdGlvbldpdGhWYWx1ZShcclxuICAgIGNvbHVtbkluZGV4OiBudW1iZXIsXHJcbiAgICB2YWx1ZTogTnpDYXNjYWRlck9wdGlvbiB8IGFueSAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxyXG4gICk6IE56Q2FzY2FkZXJPcHRpb24gfCBudWxsIHtcclxuICAgIGNvbnN0IHRhcmdldENvbHVtbiA9IHRoaXMuY29sdW1uc1tjb2x1bW5JbmRleF07XHJcbiAgICBpZiAodGFyZ2V0Q29sdW1uKSB7XHJcbiAgICAgIGNvbnN0IHYgPSB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnID8gdGhpcy5nZXRPcHRpb25WYWx1ZSh2YWx1ZSkgOiB2YWx1ZTtcclxuICAgICAgcmV0dXJuIHRhcmdldENvbHVtbi5maW5kKG8gPT4gdiA9PT0gdGhpcy5nZXRPcHRpb25WYWx1ZShvKSkhO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHByZXBhcmVFbWl0VmFsdWUoKTogdm9pZCB7XHJcbiAgICB0aGlzLnZhbHVlcyA9IHRoaXMuc2VsZWN0ZWRPcHRpb25zLm1hcChvID0+IHRoaXMuZ2V0T3B0aW9uVmFsdWUobykpO1xyXG4gIH1cclxufVxyXG4iXX0=