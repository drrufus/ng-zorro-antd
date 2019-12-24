import { __read, __spread } from "tslib";
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
import * as i0 from "@angular/core";
/**
 * All data is stored and parsed in NzCascaderService.
 */
var NzCascaderService = /** @class */ (function () {
    function NzCascaderService() {
        /** Activated options in each column. */
        this.activatedOptions = [];
        /** An array to store cascader items arranged in different layers. */
        this.columns = [[]];
        /** If user has entered searching mode. */
        this.inSearchingMode = false;
        /** Selected options would be output to user. */
        this.selectedOptions = [];
        this.values = []; // tslint:disable-line:no-any
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
        /** To hold columns before entering searching mode. */
        this.columnsSnapshot = [[]];
        /** To hold activated options before entering searching mode. */
        this.activatedOptionsSnapshot = [];
    }
    Object.defineProperty(NzCascaderService.prototype, "nzOptions", {
        /** Return cascader options in the first layer. */
        get: function () {
            return this.columns[0];
        },
        enumerable: true,
        configurable: true
    });
    NzCascaderService.prototype.ngOnDestroy = function () {
        this.$redraw.complete();
        this.$quitSearching.complete();
        this.$optionSelected.complete();
        this.$loading.complete();
    };
    /**
     * Make sure that value matches what is displayed in the dropdown.
     */
    NzCascaderService.prototype.syncOptions = function (first) {
        var _this = this;
        if (first === void 0) { first = false; }
        var values = this.values;
        var hasValue = values && values.length;
        var lastColumnIndex = values.length - 1;
        var initColumnWithIndex = function (columnIndex) {
            var activatedOptionSetter = function () {
                var _a;
                var currentValue = values[columnIndex];
                if (!isNotNil(currentValue)) {
                    _this.$redraw.next();
                    return;
                }
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
                    _this.selectedOptions = __spread(_this.activatedOptions);
                    _this.$redraw.next();
                }
            };
            if (_this.isLoaded(columnIndex) || !_this.cascaderComponent.nzLoadData) {
                activatedOptionSetter();
            }
            else {
                var option = _this.activatedOptions[columnIndex - 1] || {};
                _this.loadChildren(option, columnIndex - 1, activatedOptionSetter);
            }
        };
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
    NzCascaderService.prototype.withComponent = function (cascaderComponent) {
        this.cascaderComponent = cascaderComponent;
    };
    /**
     * Reset all options. Rebuild searching options if in searching mode.
     */
    NzCascaderService.prototype.withOptions = function (options) {
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
    NzCascaderService.prototype.setOptionActivated = function (option, columnIndex, performSelect, loadingChildren) {
        if (performSelect === void 0) { performSelect = false; }
        if (loadingChildren === void 0) { loadingChildren = true; }
        if (option.disabled) {
            return;
        }
        this.activatedOptions[columnIndex] = option;
        this.trackAncestorActivatedOptions(columnIndex);
        this.dropBehindActivatedOptions(columnIndex);
        var isParent = isParentOption(option);
        if (isParent) {
            // Parent option that has children.
            this.setColumnData(option.children, columnIndex + 1, option);
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
    NzCascaderService.prototype.setOptionSelected = function (option, index) {
        var changeOn = this.cascaderComponent.nzChangeOn;
        var shouldPerformSelection = function (o, i) {
            return typeof changeOn === 'function' ? changeOn(o, i) : false;
        };
        if (option.isLeaf || this.cascaderComponent.nzChangeOnSelect || shouldPerformSelection(option, index)) {
            this.selectedOptions = __spread(this.activatedOptions);
            this.prepareEmitValue();
            this.$redraw.next();
            this.$optionSelected.next({ option: option, index: index });
        }
    };
    NzCascaderService.prototype.setOptionDeactivatedSinceColumn = function (column) {
        this.dropBehindActivatedOptions(column - 1);
        this.dropBehindColumns(column);
        this.$redraw.next();
    };
    /**
     * Set a searching option as selected, finishing up things.
     * @param option
     */
    NzCascaderService.prototype.setSearchOptionSelected = function (option) {
        var _this = this;
        this.activatedOptions = [option];
        this.selectedOptions = __spread(option.path);
        this.prepareEmitValue();
        this.$redraw.next();
        this.$optionSelected.next({ option: option, index: 0 });
        setTimeout(function () {
            // Reset data and tell UI only to remove input and reset dropdown width style.
            _this.$quitSearching.next();
            _this.$redraw.next();
            _this.inSearchingMode = false;
            _this.columns = __spread(_this.columnsSnapshot);
            _this.activatedOptions = __spread(_this.selectedOptions);
        }, 200);
    };
    /**
     * Filter cascader options to reset `columns`.
     * @param searchValue The string user wants to search.
     */
    NzCascaderService.prototype.prepareSearchOptions = function (searchValue) {
        var _this = this;
        var results = []; // Search results only have one layer.
        var path = [];
        var defaultFilter = function (i, p) {
            return p.some(function (o) {
                var label = _this.getOptionLabel(o);
                return !!label && label.indexOf(i) !== -1;
            });
        };
        var showSearch = this.cascaderComponent.nzShowSearch;
        var filter = isShowSearchObject(showSearch) && showSearch.filter ? showSearch.filter : defaultFilter;
        var sorter = isShowSearchObject(showSearch) && showSearch.sorter ? showSearch.sorter : null;
        var loopChild = function (node, forceDisabled) {
            var _a;
            if (forceDisabled === void 0) { forceDisabled = false; }
            path.push(node);
            var cPath = Array.from(path);
            if (filter(searchValue, cPath)) {
                var disabled = forceDisabled || node.disabled;
                var option = (_a = {
                        disabled: disabled,
                        isLeaf: true,
                        path: cPath
                    },
                    _a[_this.cascaderComponent.nzLabelProperty] = cPath.map(function (p) { return _this.getOptionLabel(p); }).join(' / '),
                    _a);
                results.push(option);
            }
            path.pop();
        };
        var loopParent = function (node, forceDisabled) {
            if (forceDisabled === void 0) { forceDisabled = false; }
            var disabled = forceDisabled || node.disabled;
            path.push(node);
            node.children.forEach(function (sNode) {
                if (!sNode.parent) {
                    sNode.parent = node;
                }
                if (!sNode.isLeaf) {
                    loopParent(sNode, disabled);
                }
                if (sNode.isLeaf || !sNode.children || !sNode.children.length) {
                    loopChild(sNode, disabled);
                }
            });
            path.pop();
        };
        if (!this.columnsSnapshot.length) {
            this.columns = [[]];
            return;
        }
        this.columnsSnapshot[0].forEach(function (o) { return (isChildOption(o) ? loopChild(o) : loopParent(o)); });
        if (sorter) {
            results.sort(function (a, b) { return sorter(a.path, b.path, searchValue); });
        }
        this.columns = [results];
    };
    /**
     * Toggle searching mode by UI. It deals with things not directly related to UI.
     * @param toSearching If this cascader is entering searching mode
     */
    NzCascaderService.prototype.toggleSearchingMode = function (toSearching) {
        this.inSearchingMode = toSearching;
        if (toSearching) {
            this.activatedOptionsSnapshot = __spread(this.activatedOptions);
            this.activatedOptions = [];
            this.selectedOptions = [];
            this.$redraw.next();
        }
        else {
            // User quit searching mode without selecting an option.
            this.activatedOptions = __spread(this.activatedOptionsSnapshot);
            this.selectedOptions = __spread(this.activatedOptions);
            this.columns = __spread(this.columnsSnapshot);
            this.syncOptions();
            this.$redraw.next();
        }
    };
    /**
     * Clear selected options.
     */
    NzCascaderService.prototype.clear = function () {
        this.values = [];
        this.selectedOptions = [];
        this.activatedOptions = [];
        this.dropBehindColumns(0);
        this.prepareEmitValue();
        this.$redraw.next();
        this.$optionSelected.next(null);
    };
    NzCascaderService.prototype.getOptionLabel = function (o) {
        return o[this.cascaderComponent.nzLabelProperty || 'label'];
    };
    // tslint:disable-next-line:no-any
    NzCascaderService.prototype.getOptionValue = function (o) {
        return o[this.cascaderComponent.nzValueProperty || 'value'];
    };
    /**
     * Try to insert options into a column.
     * @param options Options to insert
     * @param columnIndex Position
     */
    NzCascaderService.prototype.setColumnData = function (options, columnIndex, parent) {
        var existingOptions = this.columns[columnIndex];
        if (!arraysEqual(existingOptions, options)) {
            options.forEach(function (o) { return (o.parent = parent); });
            this.columns[columnIndex] = options;
            this.dropBehindColumns(columnIndex);
        }
    };
    /**
     * Set all ancestor options as activated.
     */
    NzCascaderService.prototype.trackAncestorActivatedOptions = function (startIndex) {
        for (var i = startIndex - 1; i >= 0; i--) {
            if (!this.activatedOptions[i]) {
                this.activatedOptions[i] = this.activatedOptions[i + 1].parent;
            }
        }
    };
    NzCascaderService.prototype.dropBehindActivatedOptions = function (lastReserveIndex) {
        this.activatedOptions = this.activatedOptions.splice(0, lastReserveIndex + 1);
    };
    NzCascaderService.prototype.dropBehindColumns = function (lastReserveIndex) {
        if (lastReserveIndex < this.columns.length - 1) {
            this.columns = this.columns.slice(0, lastReserveIndex + 1);
        }
    };
    /**
     * Load children of an option asynchronously.
     */
    NzCascaderService.prototype.loadChildren = function (option, // tslint:disable-line:no-any
    columnIndex, success, failure) {
        var _this = this;
        var loadFn = this.cascaderComponent.nzLoadData;
        if (loadFn) {
            // If there isn't any option in columns.
            this.$loading.next(columnIndex < 0);
            if (typeof option === 'object') {
                option.loading = true;
            }
            loadFn(option, columnIndex).then(function () {
                option.loading = false;
                if (option.children) {
                    _this.setColumnData(option.children, columnIndex + 1, option);
                }
                if (success) {
                    success();
                }
                _this.$loading.next(false);
                _this.$redraw.next();
            }, function () {
                option.loading = false;
                option.isLeaf = true;
                if (failure) {
                    failure();
                }
                _this.$redraw.next();
            });
        }
    };
    NzCascaderService.prototype.isLoaded = function (index) {
        return this.columns[index] && this.columns[index].length > 0;
    };
    /**
     * Find a option that has a given value in a given column.
     */
    NzCascaderService.prototype.findOptionWithValue = function (columnIndex, value // tslint:disable-line:no-any
    ) {
        var _this = this;
        var targetColumn = this.columns[columnIndex];
        if (targetColumn) {
            var v_1 = typeof value === 'object' ? this.getOptionValue(value) : value;
            return targetColumn.find(function (o) { return v_1 === _this.getOptionValue(o); });
        }
        return null;
    };
    NzCascaderService.prototype.prepareEmitValue = function () {
        var _this = this;
        this.values = this.selectedOptions.map(function (o) { return _this.getOptionValue(o); });
    };
    /** @nocollapse */ NzCascaderService.ɵfac = function NzCascaderService_Factory(t) { return new (t || NzCascaderService)(); };
    /** @nocollapse */ NzCascaderService.ɵprov = i0.ɵɵdefineInjectable({ token: NzCascaderService, factory: NzCascaderService.ɵfac });
    return NzCascaderService;
}());
export { NzCascaderService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzCascaderService, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FzY2FkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY2FzY2FkZXIvIiwic291cmNlcyI6WyJuei1jYXNjYWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWhELE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFM0QsT0FBTyxFQUNMLGtCQUFrQixFQUtuQixNQUFNLDJCQUEyQixDQUFDO0FBQ25DLE9BQU8sRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBRXBFOztHQUVHO0FBQ0g7SUFBQTtRQUVFLHdDQUF3QztRQUN4QyxxQkFBZ0IsR0FBdUIsRUFBRSxDQUFDO1FBRTFDLHFFQUFxRTtRQUNyRSxZQUFPLEdBQXlCLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFckMsMENBQTBDO1FBQzFDLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBRXhCLGdEQUFnRDtRQUNoRCxvQkFBZSxHQUF1QixFQUFFLENBQUM7UUFFekMsV0FBTSxHQUFVLEVBQUUsQ0FBQyxDQUFDLDZCQUE2QjtRQUV4QyxhQUFRLEdBQUcsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7UUFFeEQ7OztXQUdHO1FBQ00sWUFBTyxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFFdkM7OztXQUdHO1FBQ00sb0JBQWUsR0FBRyxJQUFJLE9BQU8sRUFHM0IsQ0FBQztRQUVaOzs7V0FHRztRQUNNLG1CQUFjLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUU5QyxzREFBc0Q7UUFDOUMsb0JBQWUsR0FBeUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVyRCxnRUFBZ0U7UUFD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QUFhO1FBQzVCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVEOztPQUVHO0lBQ0ssK0NBQW1CLEdBQTNCLFVBQ0UsV0FBbUIsRUFDbkIsS0FBNkIsQ0FBQyw2QkFBNkI7O1FBRjdELGlCQVVDO1FBTkMsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMvQyxJQUFJLFlBQVksRUFBRTtZQUNoQixJQUFNLEdBQUMsR0FBRyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUN6RSxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxHQUFDLEtBQUssS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBNUIsQ0FBNEIsQ0FBRSxDQUFDO1NBQzlEO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU8sNENBQWdCLEdBQXhCO1FBQUEsaUJBRUM7UUFEQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7c0ZBamFVLGlCQUFpQjs2REFBakIsaUJBQWlCLFdBQWpCLGlCQUFpQjs0QkExQjlCO0NBNGJDLEFBbmFELElBbWFDO1NBbGFZLGlCQUFpQjtrREFBakIsaUJBQWlCO2NBRDdCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IGFycmF5c0VxdWFsLCBpc05vdE5pbCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGlzU2hvd1NlYXJjaE9iamVjdCxcclxuICBOekNhc2NhZGVyQ29tcG9uZW50QXNTb3VyY2UsXHJcbiAgTnpDYXNjYWRlckZpbHRlcixcclxuICBOekNhc2NhZGVyT3B0aW9uLFxyXG4gIE56Q2FzY2FkZXJTZWFyY2hPcHRpb25cclxufSBmcm9tICcuL256LWNhc2NhZGVyLWRlZmluaXRpb25zJztcclxuaW1wb3J0IHsgaXNDaGlsZE9wdGlvbiwgaXNQYXJlbnRPcHRpb24gfSBmcm9tICcuL256LWNhc2NhZGVyLXV0aWxzJztcclxuXHJcbi8qKlxyXG4gKiBBbGwgZGF0YSBpcyBzdG9yZWQgYW5kIHBhcnNlZCBpbiBOekNhc2NhZGVyU2VydmljZS5cclxuICovXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE56Q2FzY2FkZXJTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICAvKiogQWN0aXZhdGVkIG9wdGlvbnMgaW4gZWFjaCBjb2x1bW4uICovXHJcbiAgYWN0aXZhdGVkT3B0aW9uczogTnpDYXNjYWRlck9wdGlvbltdID0gW107XHJcblxyXG4gIC8qKiBBbiBhcnJheSB0byBzdG9yZSBjYXNjYWRlciBpdGVtcyBhcnJhbmdlZCBpbiBkaWZmZXJlbnQgbGF5ZXJzLiAqL1xyXG4gIGNvbHVtbnM6IE56Q2FzY2FkZXJPcHRpb25bXVtdID0gW1tdXTtcclxuXHJcbiAgLyoqIElmIHVzZXIgaGFzIGVudGVyZWQgc2VhcmNoaW5nIG1vZGUuICovXHJcbiAgaW5TZWFyY2hpbmdNb2RlID0gZmFsc2U7XHJcblxyXG4gIC8qKiBTZWxlY3RlZCBvcHRpb25zIHdvdWxkIGJlIG91dHB1dCB0byB1c2VyLiAqL1xyXG4gIHNlbGVjdGVkT3B0aW9uczogTnpDYXNjYWRlck9wdGlvbltdID0gW107XHJcblxyXG4gIHZhbHVlczogYW55W10gPSBbXTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcclxuXHJcbiAgcmVhZG9ubHkgJGxvYWRpbmcgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgLyoqXHJcbiAgICogRW1pdCBhbiBldmVudCB0byBub3RpZnkgY2FzY2FkZXIgaXQgbmVlZHMgdG8gcmVkcmF3IGJlY2F1c2UgYWN0aXZhdGVkIG9yXHJcbiAgICogc2VsZWN0ZWQgb3B0aW9ucyBhcmUgY2hhbmdlZC5cclxuICAgKi9cclxuICByZWFkb25seSAkcmVkcmF3ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogRW1pdCBhbiBldmVudCB3aGVuIGFuIG9wdGlvbiBnZXRzIHNlbGVjdGVkLlxyXG4gICAqIEVtaXQgdHJ1ZSBpZiBhIGxlYWYgb3B0aW9ucyBpcyBzZWxlY3RlZC5cclxuICAgKi9cclxuICByZWFkb25seSAkb3B0aW9uU2VsZWN0ZWQgPSBuZXcgU3ViamVjdDx7XHJcbiAgICBvcHRpb246IE56Q2FzY2FkZXJPcHRpb247XHJcbiAgICBpbmRleDogbnVtYmVyO1xyXG4gIH0gfCBudWxsPigpO1xyXG5cclxuICAvKipcclxuICAgKiBFbWl0IGFuIGV2ZW50IHRvIG5vdGlmeSBjYXNjYWRlciBpdCBuZWVkcyB0byBxdWl0IHNlYXJjaGluZyBtb2RlLlxyXG4gICAqIE9ubHkgZW1pdCB3aGVuIHVzZXIgZG8gc2VsZWN0IGEgc2VhcmNoaW5nIG9wdGlvbi5cclxuICAgKi9cclxuICByZWFkb25seSAkcXVpdFNlYXJjaGluZyA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gIC8qKiBUbyBob2xkIGNvbHVtbnMgYmVmb3JlIGVudGVyaW5nIHNlYXJjaGluZyBtb2RlLiAqL1xyXG4gIHByaXZhdGUgY29sdW1uc1NuYXBzaG90OiBOekNhc2NhZGVyT3B0aW9uW11bXSA9IFtbXV07XHJcblxyXG4gIC8qKiBUbyBob2xkIGFjdGl2YXRlZCBvcHRpb25zIGJlZm9yZSBlbnRlcmluZyBzZWFyY2hpbmcgbW9kZS4gKi9cclxuICBwcml2YXRlIGFjdGl2YXRlZE9wdGlvbnNTbmFwc2hvdDogTnpDYXNjYWRlck9wdGlvbltdID0gW107XHJcblxyXG4gIHByaXZhdGUgY2FzY2FkZXJDb21wb25lbnQ6IE56Q2FzY2FkZXJDb21wb25lbnRBc1NvdXJjZTtcclxuXHJcbiAgLyoqIFJldHVybiBjYXNjYWRlciBvcHRpb25zIGluIHRoZSBmaXJzdCBsYXllci4gKi9cclxuICBnZXQgbnpPcHRpb25zKCk6IE56Q2FzY2FkZXJPcHRpb25bXSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb2x1bW5zWzBdO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLiRyZWRyYXcuY29tcGxldGUoKTtcclxuICAgIHRoaXMuJHF1aXRTZWFyY2hpbmcuY29tcGxldGUoKTtcclxuICAgIHRoaXMuJG9wdGlvblNlbGVjdGVkLmNvbXBsZXRlKCk7XHJcbiAgICB0aGlzLiRsb2FkaW5nLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNYWtlIHN1cmUgdGhhdCB2YWx1ZSBtYXRjaGVzIHdoYXQgaXMgZGlzcGxheWVkIGluIHRoZSBkcm9wZG93bi5cclxuICAgKi9cclxuICBzeW5jT3B0aW9ucyhmaXJzdDogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLnZhbHVlcztcclxuICAgIGNvbnN0IGhhc1ZhbHVlID0gdmFsdWVzICYmIHZhbHVlcy5sZW5ndGg7XHJcbiAgICBjb25zdCBsYXN0Q29sdW1uSW5kZXggPSB2YWx1ZXMubGVuZ3RoIC0gMTtcclxuICAgIGNvbnN0IGluaXRDb2x1bW5XaXRoSW5kZXggPSAoY29sdW1uSW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICBjb25zdCBhY3RpdmF0ZWRPcHRpb25TZXR0ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gdmFsdWVzW2NvbHVtbkluZGV4XTtcclxuXHJcbiAgICAgICAgaWYgKCFpc05vdE5pbChjdXJyZW50VmFsdWUpKSB7XHJcbiAgICAgICAgICB0aGlzLiRyZWRyYXcubmV4dCgpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgb3B0aW9uID1cclxuICAgICAgICAgIHRoaXMuZmluZE9wdGlvbldpdGhWYWx1ZShjb2x1bW5JbmRleCwgdmFsdWVzW2NvbHVtbkluZGV4XSkgfHxcclxuICAgICAgICAgICh0eXBlb2YgY3VycmVudFZhbHVlID09PSAnb2JqZWN0J1xyXG4gICAgICAgICAgICA/IGN1cnJlbnRWYWx1ZVxyXG4gICAgICAgICAgICA6IHtcclxuICAgICAgICAgICAgICAgIFtgJHt0aGlzLmNhc2NhZGVyQ29tcG9uZW50Lm56VmFsdWVQcm9wZXJ0eX1gXTogY3VycmVudFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgW2Ake3RoaXMuY2FzY2FkZXJDb21wb25lbnQubnpMYWJlbFByb3BlcnR5fWBdOiBjdXJyZW50VmFsdWVcclxuICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRPcHRpb25BY3RpdmF0ZWQob3B0aW9uLCBjb2x1bW5JbmRleCwgZmFsc2UsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgaWYgKGNvbHVtbkluZGV4IDwgbGFzdENvbHVtbkluZGV4KSB7XHJcbiAgICAgICAgICBpbml0Q29sdW1uV2l0aEluZGV4KGNvbHVtbkluZGV4ICsgMSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuZHJvcEJlaGluZENvbHVtbnMoY29sdW1uSW5kZXgpO1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSBbLi4udGhpcy5hY3RpdmF0ZWRPcHRpb25zXTtcclxuICAgICAgICAgIHRoaXMuJHJlZHJhdy5uZXh0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgaWYgKHRoaXMuaXNMb2FkZWQoY29sdW1uSW5kZXgpIHx8ICF0aGlzLmNhc2NhZGVyQ29tcG9uZW50Lm56TG9hZERhdGEpIHtcclxuICAgICAgICBhY3RpdmF0ZWRPcHRpb25TZXR0ZXIoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBvcHRpb24gPSB0aGlzLmFjdGl2YXRlZE9wdGlvbnNbY29sdW1uSW5kZXggLSAxXSB8fCB7fTtcclxuICAgICAgICB0aGlzLmxvYWRDaGlsZHJlbihvcHRpb24sIGNvbHVtbkluZGV4IC0gMSwgYWN0aXZhdGVkT3B0aW9uU2V0dGVyKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnMgPSBbXTtcclxuICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gW107XHJcblxyXG4gICAgaWYgKGZpcnN0ICYmIHRoaXMuY2FzY2FkZXJDb21wb25lbnQubnpMb2FkRGF0YSAmJiAhaGFzVmFsdWUpIHtcclxuICAgICAgLy8gU2hvdWxkIGFsc28gbm90aWZ5IHRoZSBjb21wb25lbnQgdGhhdCB2YWx1ZSBjaGFuZ2VzLiBGaXggIzM0ODAuXHJcbiAgICAgIHRoaXMuJHJlZHJhdy5uZXh0KCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGluaXRDb2x1bW5XaXRoSW5kZXgoMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBCaW5kIGNhc2NhZGVyIGNvbXBvbmVudCBzbyB0aGlzIHNlcnZpY2UgY291bGQgdXNlIGlucHV0cy5cclxuICAgKi9cclxuICB3aXRoQ29tcG9uZW50KGNhc2NhZGVyQ29tcG9uZW50OiBOekNhc2NhZGVyQ29tcG9uZW50QXNTb3VyY2UpOiB2b2lkIHtcclxuICAgIHRoaXMuY2FzY2FkZXJDb21wb25lbnQgPSBjYXNjYWRlckNvbXBvbmVudDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlc2V0IGFsbCBvcHRpb25zLiBSZWJ1aWxkIHNlYXJjaGluZyBvcHRpb25zIGlmIGluIHNlYXJjaGluZyBtb2RlLlxyXG4gICAqL1xyXG4gIHdpdGhPcHRpb25zKG9wdGlvbnM6IE56Q2FzY2FkZXJPcHRpb25bXSB8IG51bGwpOiB2b2lkIHtcclxuICAgIHRoaXMuY29sdW1uc1NuYXBzaG90ID0gdGhpcy5jb2x1bW5zID0gb3B0aW9ucyAmJiBvcHRpb25zLmxlbmd0aCA/IFtvcHRpb25zXSA6IFtdO1xyXG5cclxuICAgIGlmICh0aGlzLmluU2VhcmNoaW5nTW9kZSkge1xyXG4gICAgICB0aGlzLnByZXBhcmVTZWFyY2hPcHRpb25zKHRoaXMuY2FzY2FkZXJDb21wb25lbnQuaW5wdXRWYWx1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29sdW1ucy5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5zeW5jT3B0aW9ucygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVHJ5IHRvIHNldCBhIG9wdGlvbiBhcyBhY3RpdmF0ZWQuXHJcbiAgICogQHBhcmFtIG9wdGlvbiBDYXNjYWRlciBvcHRpb25cclxuICAgKiBAcGFyYW0gY29sdW1uSW5kZXggT2Ygd2hpY2ggY29sdW1uIHRoaXMgb3B0aW9uIGlzIGluXHJcbiAgICogQHBhcmFtIHBlcmZvcm1TZWxlY3QgU2VsZWN0XHJcbiAgICogQHBhcmFtIGxvYWRpbmdDaGlsZHJlbiBUcnkgdG8gbG9hZCBjaGlsZHJlbiBhc3luY2hyb25vdXNseS5cclxuICAgKi9cclxuICBzZXRPcHRpb25BY3RpdmF0ZWQob3B0aW9uOiBOekNhc2NhZGVyT3B0aW9uLCBjb2x1bW5JbmRleDogbnVtYmVyLCBwZXJmb3JtU2VsZWN0OiBib29sZWFuID0gZmFsc2UsIGxvYWRpbmdDaGlsZHJlbjogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcclxuICAgIGlmIChvcHRpb24uZGlzYWJsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9uc1tjb2x1bW5JbmRleF0gPSBvcHRpb247XHJcbiAgICB0aGlzLnRyYWNrQW5jZXN0b3JBY3RpdmF0ZWRPcHRpb25zKGNvbHVtbkluZGV4KTtcclxuICAgIHRoaXMuZHJvcEJlaGluZEFjdGl2YXRlZE9wdGlvbnMoY29sdW1uSW5kZXgpO1xyXG5cclxuICAgIGNvbnN0IGlzUGFyZW50ID0gaXNQYXJlbnRPcHRpb24ob3B0aW9uKTtcclxuXHJcbiAgICBpZiAoaXNQYXJlbnQpIHtcclxuICAgICAgLy8gUGFyZW50IG9wdGlvbiB0aGF0IGhhcyBjaGlsZHJlbi5cclxuICAgICAgdGhpcy5zZXRDb2x1bW5EYXRhKG9wdGlvbi5jaGlsZHJlbiEsIGNvbHVtbkluZGV4ICsgMSwgb3B0aW9uKTtcclxuICAgIH0gZWxzZSBpZiAoIW9wdGlvbi5pc0xlYWYgJiYgbG9hZGluZ0NoaWxkcmVuKSB7XHJcbiAgICAgIC8vIFBhcmVudCBvcHRpb24gdGhhdCBzaG91bGQgdHJ5IHRvIGxvYWQgY2hpbGRyZW4gYXN5bmNocm9ub3VzbHkuXHJcbiAgICAgIHRoaXMubG9hZENoaWxkcmVuKG9wdGlvbiwgY29sdW1uSW5kZXgpO1xyXG4gICAgfSBlbHNlIGlmIChvcHRpb24uaXNMZWFmKSB7XHJcbiAgICAgIC8vIExlYWYgb3B0aW9uLlxyXG4gICAgICB0aGlzLmRyb3BCZWhpbmRDb2x1bW5zKGNvbHVtbkluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBY3R1YWxseSBwZXJmb3JtIHNlbGVjdGlvbiB0byBtYWtlIGFuIG9wdGlvbnMgbm90IG9ubHkgYWN0aXZhdGVkIGJ1dCBhbHNvIHNlbGVjdGVkLlxyXG4gICAgaWYgKHBlcmZvcm1TZWxlY3QpIHtcclxuICAgICAgdGhpcy5zZXRPcHRpb25TZWxlY3RlZChvcHRpb24sIGNvbHVtbkluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLiRyZWRyYXcubmV4dCgpO1xyXG4gIH1cclxuXHJcbiAgc2V0T3B0aW9uU2VsZWN0ZWQob3B0aW9uOiBOekNhc2NhZGVyT3B0aW9uLCBpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBjb25zdCBjaGFuZ2VPbiA9IHRoaXMuY2FzY2FkZXJDb21wb25lbnQubnpDaGFuZ2VPbjtcclxuICAgIGNvbnN0IHNob3VsZFBlcmZvcm1TZWxlY3Rpb24gPSAobzogTnpDYXNjYWRlck9wdGlvbiwgaTogbnVtYmVyKTogYm9vbGVhbiA9PiB7XHJcbiAgICAgIHJldHVybiB0eXBlb2YgY2hhbmdlT24gPT09ICdmdW5jdGlvbicgPyBjaGFuZ2VPbihvLCBpKSA6IGZhbHNlO1xyXG4gICAgfTtcclxuXHJcbiAgICBpZiAob3B0aW9uLmlzTGVhZiB8fCB0aGlzLmNhc2NhZGVyQ29tcG9uZW50Lm56Q2hhbmdlT25TZWxlY3QgfHwgc2hvdWxkUGVyZm9ybVNlbGVjdGlvbihvcHRpb24sIGluZGV4KSkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IFsuLi50aGlzLmFjdGl2YXRlZE9wdGlvbnNdO1xyXG4gICAgICB0aGlzLnByZXBhcmVFbWl0VmFsdWUoKTtcclxuICAgICAgdGhpcy4kcmVkcmF3Lm5leHQoKTtcclxuICAgICAgdGhpcy4kb3B0aW9uU2VsZWN0ZWQubmV4dCh7IG9wdGlvbiwgaW5kZXggfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRPcHRpb25EZWFjdGl2YXRlZFNpbmNlQ29sdW1uKGNvbHVtbjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLmRyb3BCZWhpbmRBY3RpdmF0ZWRPcHRpb25zKGNvbHVtbiAtIDEpO1xyXG4gICAgdGhpcy5kcm9wQmVoaW5kQ29sdW1ucyhjb2x1bW4pO1xyXG4gICAgdGhpcy4kcmVkcmF3Lm5leHQoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCBhIHNlYXJjaGluZyBvcHRpb24gYXMgc2VsZWN0ZWQsIGZpbmlzaGluZyB1cCB0aGluZ3MuXHJcbiAgICogQHBhcmFtIG9wdGlvblxyXG4gICAqL1xyXG4gIHNldFNlYXJjaE9wdGlvblNlbGVjdGVkKG9wdGlvbjogTnpDYXNjYWRlclNlYXJjaE9wdGlvbik6IHZvaWQge1xyXG4gICAgdGhpcy5hY3RpdmF0ZWRPcHRpb25zID0gW29wdGlvbl07XHJcbiAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IFsuLi5vcHRpb24ucGF0aF07XHJcbiAgICB0aGlzLnByZXBhcmVFbWl0VmFsdWUoKTtcclxuICAgIHRoaXMuJHJlZHJhdy5uZXh0KCk7XHJcbiAgICB0aGlzLiRvcHRpb25TZWxlY3RlZC5uZXh0KHsgb3B0aW9uLCBpbmRleDogMCB9KTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgLy8gUmVzZXQgZGF0YSBhbmQgdGVsbCBVSSBvbmx5IHRvIHJlbW92ZSBpbnB1dCBhbmQgcmVzZXQgZHJvcGRvd24gd2lkdGggc3R5bGUuXHJcbiAgICAgIHRoaXMuJHF1aXRTZWFyY2hpbmcubmV4dCgpO1xyXG4gICAgICB0aGlzLiRyZWRyYXcubmV4dCgpO1xyXG4gICAgICB0aGlzLmluU2VhcmNoaW5nTW9kZSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmNvbHVtbnMgPSBbLi4udGhpcy5jb2x1bW5zU25hcHNob3RdO1xyXG4gICAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnMgPSBbLi4udGhpcy5zZWxlY3RlZE9wdGlvbnNdO1xyXG4gICAgfSwgMjAwKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZpbHRlciBjYXNjYWRlciBvcHRpb25zIHRvIHJlc2V0IGBjb2x1bW5zYC5cclxuICAgKiBAcGFyYW0gc2VhcmNoVmFsdWUgVGhlIHN0cmluZyB1c2VyIHdhbnRzIHRvIHNlYXJjaC5cclxuICAgKi9cclxuICBwcmVwYXJlU2VhcmNoT3B0aW9ucyhzZWFyY2hWYWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXN1bHRzOiBOekNhc2NhZGVyT3B0aW9uW10gPSBbXTsgLy8gU2VhcmNoIHJlc3VsdHMgb25seSBoYXZlIG9uZSBsYXllci5cclxuICAgIGNvbnN0IHBhdGg6IE56Q2FzY2FkZXJPcHRpb25bXSA9IFtdO1xyXG4gICAgY29uc3QgZGVmYXVsdEZpbHRlcjogTnpDYXNjYWRlckZpbHRlciA9IChpLCBwKSA9PiB7XHJcbiAgICAgIHJldHVybiBwLnNvbWUobyA9PiB7XHJcbiAgICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLmdldE9wdGlvbkxhYmVsKG8pO1xyXG4gICAgICAgIHJldHVybiAhIWxhYmVsICYmIGxhYmVsLmluZGV4T2YoaSkgIT09IC0xO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgICBjb25zdCBzaG93U2VhcmNoID0gdGhpcy5jYXNjYWRlckNvbXBvbmVudC5uelNob3dTZWFyY2g7XHJcbiAgICBjb25zdCBmaWx0ZXIgPSBpc1Nob3dTZWFyY2hPYmplY3Qoc2hvd1NlYXJjaCkgJiYgc2hvd1NlYXJjaC5maWx0ZXIgPyBzaG93U2VhcmNoLmZpbHRlciA6IGRlZmF1bHRGaWx0ZXI7XHJcbiAgICBjb25zdCBzb3J0ZXIgPSBpc1Nob3dTZWFyY2hPYmplY3Qoc2hvd1NlYXJjaCkgJiYgc2hvd1NlYXJjaC5zb3J0ZXIgPyBzaG93U2VhcmNoLnNvcnRlciA6IG51bGw7XHJcbiAgICBjb25zdCBsb29wQ2hpbGQgPSAobm9kZTogTnpDYXNjYWRlck9wdGlvbiwgZm9yY2VEaXNhYmxlZCA9IGZhbHNlKSA9PiB7XHJcbiAgICAgIHBhdGgucHVzaChub2RlKTtcclxuICAgICAgY29uc3QgY1BhdGggPSBBcnJheS5mcm9tKHBhdGgpO1xyXG4gICAgICBpZiAoZmlsdGVyKHNlYXJjaFZhbHVlLCBjUGF0aCkpIHtcclxuICAgICAgICBjb25zdCBkaXNhYmxlZCA9IGZvcmNlRGlzYWJsZWQgfHwgbm9kZS5kaXNhYmxlZDtcclxuICAgICAgICBjb25zdCBvcHRpb246IE56Q2FzY2FkZXJTZWFyY2hPcHRpb24gPSB7XHJcbiAgICAgICAgICBkaXNhYmxlZCxcclxuICAgICAgICAgIGlzTGVhZjogdHJ1ZSxcclxuICAgICAgICAgIHBhdGg6IGNQYXRoLFxyXG4gICAgICAgICAgW3RoaXMuY2FzY2FkZXJDb21wb25lbnQubnpMYWJlbFByb3BlcnR5XTogY1BhdGgubWFwKHAgPT4gdGhpcy5nZXRPcHRpb25MYWJlbChwKSkuam9pbignIC8gJylcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlc3VsdHMucHVzaChvcHRpb24pO1xyXG4gICAgICB9XHJcbiAgICAgIHBhdGgucG9wKCk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgbG9vcFBhcmVudCA9IChub2RlOiBOekNhc2NhZGVyT3B0aW9uLCBmb3JjZURpc2FibGVkID0gZmFsc2UpID0+IHtcclxuICAgICAgY29uc3QgZGlzYWJsZWQgPSBmb3JjZURpc2FibGVkIHx8IG5vZGUuZGlzYWJsZWQ7XHJcbiAgICAgIHBhdGgucHVzaChub2RlKTtcclxuICAgICAgbm9kZS5jaGlsZHJlbiEuZm9yRWFjaChzTm9kZSA9PiB7XHJcbiAgICAgICAgaWYgKCFzTm9kZS5wYXJlbnQpIHtcclxuICAgICAgICAgIHNOb2RlLnBhcmVudCA9IG5vZGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc05vZGUuaXNMZWFmKSB7XHJcbiAgICAgICAgICBsb29wUGFyZW50KHNOb2RlLCBkaXNhYmxlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzTm9kZS5pc0xlYWYgfHwgIXNOb2RlLmNoaWxkcmVuIHx8ICFzTm9kZS5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgICAgIGxvb3BDaGlsZChzTm9kZSwgZGlzYWJsZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHBhdGgucG9wKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGlmICghdGhpcy5jb2x1bW5zU25hcHNob3QubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuY29sdW1ucyA9IFtbXV07XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNvbHVtbnNTbmFwc2hvdFswXS5mb3JFYWNoKG8gPT4gKGlzQ2hpbGRPcHRpb24obykgPyBsb29wQ2hpbGQobykgOiBsb29wUGFyZW50KG8pKSk7XHJcblxyXG4gICAgaWYgKHNvcnRlcikge1xyXG4gICAgICByZXN1bHRzLnNvcnQoKGEsIGIpID0+IHNvcnRlcihhLnBhdGgsIGIucGF0aCwgc2VhcmNoVmFsdWUpKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNvbHVtbnMgPSBbcmVzdWx0c107XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUb2dnbGUgc2VhcmNoaW5nIG1vZGUgYnkgVUkuIEl0IGRlYWxzIHdpdGggdGhpbmdzIG5vdCBkaXJlY3RseSByZWxhdGVkIHRvIFVJLlxyXG4gICAqIEBwYXJhbSB0b1NlYXJjaGluZyBJZiB0aGlzIGNhc2NhZGVyIGlzIGVudGVyaW5nIHNlYXJjaGluZyBtb2RlXHJcbiAgICovXHJcbiAgdG9nZ2xlU2VhcmNoaW5nTW9kZSh0b1NlYXJjaGluZzogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5pblNlYXJjaGluZ01vZGUgPSB0b1NlYXJjaGluZztcclxuXHJcbiAgICBpZiAodG9TZWFyY2hpbmcpIHtcclxuICAgICAgdGhpcy5hY3RpdmF0ZWRPcHRpb25zU25hcHNob3QgPSBbLi4udGhpcy5hY3RpdmF0ZWRPcHRpb25zXTtcclxuICAgICAgdGhpcy5hY3RpdmF0ZWRPcHRpb25zID0gW107XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gW107XHJcbiAgICAgIHRoaXMuJHJlZHJhdy5uZXh0KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBVc2VyIHF1aXQgc2VhcmNoaW5nIG1vZGUgd2l0aG91dCBzZWxlY3RpbmcgYW4gb3B0aW9uLlxyXG4gICAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnMgPSBbLi4udGhpcy5hY3RpdmF0ZWRPcHRpb25zU25hcHNob3RdO1xyXG4gICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IFsuLi50aGlzLmFjdGl2YXRlZE9wdGlvbnNdO1xyXG4gICAgICB0aGlzLmNvbHVtbnMgPSBbLi4udGhpcy5jb2x1bW5zU25hcHNob3RdO1xyXG4gICAgICB0aGlzLnN5bmNPcHRpb25zKCk7XHJcbiAgICAgIHRoaXMuJHJlZHJhdy5uZXh0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDbGVhciBzZWxlY3RlZCBvcHRpb25zLlxyXG4gICAqL1xyXG4gIGNsZWFyKCk6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZXMgPSBbXTtcclxuICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gW107XHJcbiAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnMgPSBbXTtcclxuICAgIHRoaXMuZHJvcEJlaGluZENvbHVtbnMoMCk7XHJcbiAgICB0aGlzLnByZXBhcmVFbWl0VmFsdWUoKTtcclxuICAgIHRoaXMuJHJlZHJhdy5uZXh0KCk7XHJcbiAgICB0aGlzLiRvcHRpb25TZWxlY3RlZC5uZXh0KG51bGwpO1xyXG4gIH1cclxuXHJcbiAgZ2V0T3B0aW9uTGFiZWwobzogTnpDYXNjYWRlck9wdGlvbik6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gb1t0aGlzLmNhc2NhZGVyQ29tcG9uZW50Lm56TGFiZWxQcm9wZXJ0eSB8fCAnbGFiZWwnXSBhcyBzdHJpbmc7XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgZ2V0T3B0aW9uVmFsdWUobzogTnpDYXNjYWRlck9wdGlvbik6IGFueSB7XHJcbiAgICByZXR1cm4gb1t0aGlzLmNhc2NhZGVyQ29tcG9uZW50Lm56VmFsdWVQcm9wZXJ0eSB8fCAndmFsdWUnXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRyeSB0byBpbnNlcnQgb3B0aW9ucyBpbnRvIGEgY29sdW1uLlxyXG4gICAqIEBwYXJhbSBvcHRpb25zIE9wdGlvbnMgdG8gaW5zZXJ0XHJcbiAgICogQHBhcmFtIGNvbHVtbkluZGV4IFBvc2l0aW9uXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzZXRDb2x1bW5EYXRhKG9wdGlvbnM6IE56Q2FzY2FkZXJPcHRpb25bXSwgY29sdW1uSW5kZXg6IG51bWJlciwgcGFyZW50OiBOekNhc2NhZGVyT3B0aW9uKTogdm9pZCB7XHJcbiAgICBjb25zdCBleGlzdGluZ09wdGlvbnMgPSB0aGlzLmNvbHVtbnNbY29sdW1uSW5kZXhdO1xyXG4gICAgaWYgKCFhcnJheXNFcXVhbChleGlzdGluZ09wdGlvbnMsIG9wdGlvbnMpKSB7XHJcbiAgICAgIG9wdGlvbnMuZm9yRWFjaChvID0+IChvLnBhcmVudCA9IHBhcmVudCkpO1xyXG4gICAgICB0aGlzLmNvbHVtbnNbY29sdW1uSW5kZXhdID0gb3B0aW9ucztcclxuICAgICAgdGhpcy5kcm9wQmVoaW5kQ29sdW1ucyhjb2x1bW5JbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXQgYWxsIGFuY2VzdG9yIG9wdGlvbnMgYXMgYWN0aXZhdGVkLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgdHJhY2tBbmNlc3RvckFjdGl2YXRlZE9wdGlvbnMoc3RhcnRJbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBmb3IgKGxldCBpID0gc3RhcnRJbmRleCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgIGlmICghdGhpcy5hY3RpdmF0ZWRPcHRpb25zW2ldKSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmF0ZWRPcHRpb25zW2ldID0gdGhpcy5hY3RpdmF0ZWRPcHRpb25zW2kgKyAxXS5wYXJlbnQhO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRyb3BCZWhpbmRBY3RpdmF0ZWRPcHRpb25zKGxhc3RSZXNlcnZlSW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5hY3RpdmF0ZWRPcHRpb25zID0gdGhpcy5hY3RpdmF0ZWRPcHRpb25zLnNwbGljZSgwLCBsYXN0UmVzZXJ2ZUluZGV4ICsgMSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRyb3BCZWhpbmRDb2x1bW5zKGxhc3RSZXNlcnZlSW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKGxhc3RSZXNlcnZlSW5kZXggPCB0aGlzLmNvbHVtbnMubGVuZ3RoIC0gMSkge1xyXG4gICAgICB0aGlzLmNvbHVtbnMgPSB0aGlzLmNvbHVtbnMuc2xpY2UoMCwgbGFzdFJlc2VydmVJbmRleCArIDEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTG9hZCBjaGlsZHJlbiBvZiBhbiBvcHRpb24gYXN5bmNocm9ub3VzbHkuXHJcbiAgICovXHJcbiAgbG9hZENoaWxkcmVuKFxyXG4gICAgb3B0aW9uOiBOekNhc2NhZGVyT3B0aW9uIHwgYW55LCAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxyXG4gICAgY29sdW1uSW5kZXg6IG51bWJlcixcclxuICAgIHN1Y2Nlc3M/OiBWb2lkRnVuY3Rpb24sXHJcbiAgICBmYWlsdXJlPzogVm9pZEZ1bmN0aW9uXHJcbiAgKTogdm9pZCB7XHJcbiAgICBjb25zdCBsb2FkRm4gPSB0aGlzLmNhc2NhZGVyQ29tcG9uZW50Lm56TG9hZERhdGE7XHJcblxyXG4gICAgaWYgKGxvYWRGbikge1xyXG4gICAgICAvLyBJZiB0aGVyZSBpc24ndCBhbnkgb3B0aW9uIGluIGNvbHVtbnMuXHJcbiAgICAgIHRoaXMuJGxvYWRpbmcubmV4dChjb2x1bW5JbmRleCA8IDApO1xyXG5cclxuICAgICAgaWYgKHR5cGVvZiBvcHRpb24gPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgb3B0aW9uLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsb2FkRm4ob3B0aW9uLCBjb2x1bW5JbmRleCkudGhlbihcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICBvcHRpb24ubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgaWYgKG9wdGlvbi5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICB0aGlzLnNldENvbHVtbkRhdGEob3B0aW9uLmNoaWxkcmVuLCBjb2x1bW5JbmRleCArIDEsIG9wdGlvbik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoc3VjY2Vzcykge1xyXG4gICAgICAgICAgICBzdWNjZXNzKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLiRsb2FkaW5nLm5leHQoZmFsc2UpO1xyXG4gICAgICAgICAgdGhpcy4kcmVkcmF3Lm5leHQoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIG9wdGlvbi5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICBvcHRpb24uaXNMZWFmID0gdHJ1ZTtcclxuICAgICAgICAgIGlmIChmYWlsdXJlKSB7XHJcbiAgICAgICAgICAgIGZhaWx1cmUoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuJHJlZHJhdy5uZXh0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc0xvYWRlZChpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb2x1bW5zW2luZGV4XSAmJiB0aGlzLmNvbHVtbnNbaW5kZXhdLmxlbmd0aCA+IDA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGaW5kIGEgb3B0aW9uIHRoYXQgaGFzIGEgZ2l2ZW4gdmFsdWUgaW4gYSBnaXZlbiBjb2x1bW4uXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBmaW5kT3B0aW9uV2l0aFZhbHVlKFxyXG4gICAgY29sdW1uSW5kZXg6IG51bWJlcixcclxuICAgIHZhbHVlOiBOekNhc2NhZGVyT3B0aW9uIHwgYW55IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcbiAgKTogTnpDYXNjYWRlck9wdGlvbiB8IG51bGwge1xyXG4gICAgY29uc3QgdGFyZ2V0Q29sdW1uID0gdGhpcy5jb2x1bW5zW2NvbHVtbkluZGV4XTtcclxuICAgIGlmICh0YXJnZXRDb2x1bW4pIHtcclxuICAgICAgY29uc3QgdiA9IHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgPyB0aGlzLmdldE9wdGlvblZhbHVlKHZhbHVlKSA6IHZhbHVlO1xyXG4gICAgICByZXR1cm4gdGFyZ2V0Q29sdW1uLmZpbmQobyA9PiB2ID09PSB0aGlzLmdldE9wdGlvblZhbHVlKG8pKSE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcHJlcGFyZUVtaXRWYWx1ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWVzID0gdGhpcy5zZWxlY3RlZE9wdGlvbnMubWFwKG8gPT4gdGhpcy5nZXRPcHRpb25WYWx1ZShvKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==