/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
import * as ɵngcc0 from '@angular/core';
export class NzCascaderService {
    constructor() {
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
    /**
     * Return cascader options in the first layer.
     * @return {?}
     */
    get nzOptions() {
        return this.columns[0];
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.$redraw.complete();
        this.$quitSearching.complete();
        this.$optionSelected.complete();
        this.$loading.complete();
    }
    /**
     * Make sure that value matches what is displayed in the dropdown.
     * @param {?=} first
     * @return {?}
     */
    syncOptions(first = false) {
        /** @type {?} */
        const values = this.values;
        /** @type {?} */
        const hasValue = values && values.length;
        /** @type {?} */
        const lastColumnIndex = values.length - 1;
        /** @type {?} */
        const initColumnWithIndex = (/**
         * @param {?} columnIndex
         * @return {?}
         */
        (columnIndex) => {
            /** @type {?} */
            const activatedOptionSetter = (/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const currentValue = values[columnIndex];
                if (!isNotNil(currentValue)) {
                    this.$redraw.next();
                    return;
                }
                /** @type {?} */
                const option = this.findOptionWithValue(columnIndex, values[columnIndex]) ||
                    (typeof currentValue === 'object'
                        ? currentValue
                        : {
                            [`${this.cascaderComponent.nzValueProperty}`]: currentValue,
                            [`${this.cascaderComponent.nzLabelProperty}`]: currentValue
                        });
                this.setOptionActivated(option, columnIndex, false, false);
                if (columnIndex < lastColumnIndex) {
                    initColumnWithIndex(columnIndex + 1);
                }
                else {
                    this.dropBehindColumns(columnIndex);
                    this.selectedOptions = [...this.activatedOptions];
                    this.$redraw.next();
                }
            });
            if (this.isLoaded(columnIndex) || !this.cascaderComponent.nzLoadData) {
                activatedOptionSetter();
            }
            else {
                /** @type {?} */
                const option = this.activatedOptions[columnIndex - 1] || {};
                this.loadChildren(option, columnIndex - 1, activatedOptionSetter);
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
    }
    /**
     * Bind cascader component so this service could use inputs.
     * @param {?} cascaderComponent
     * @return {?}
     */
    withComponent(cascaderComponent) {
        this.cascaderComponent = cascaderComponent;
    }
    /**
     * Reset all options. Rebuild searching options if in searching mode.
     * @param {?} options
     * @return {?}
     */
    withOptions(options) {
        this.columnsSnapshot = this.columns = options && options.length ? [options] : [];
        if (this.inSearchingMode) {
            this.prepareSearchOptions(this.cascaderComponent.inputValue);
        }
        else if (this.columns.length) {
            this.syncOptions();
        }
    }
    /**
     * Try to set a option as activated.
     * @param {?} option Cascader option
     * @param {?} columnIndex Of which column this option is in
     * @param {?=} performSelect Select
     * @param {?=} loadingChildren Try to load children asynchronously.
     * @return {?}
     */
    setOptionActivated(option, columnIndex, performSelect = false, loadingChildren = true) {
        if (option.disabled) {
            return;
        }
        this.activatedOptions[columnIndex] = option;
        this.trackAncestorActivatedOptions(columnIndex);
        this.dropBehindActivatedOptions(columnIndex);
        /** @type {?} */
        const isParent = isParentOption(option);
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
    }
    /**
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    setOptionSelected(option, index) {
        /** @type {?} */
        const changeOn = this.cascaderComponent.nzChangeOn;
        /** @type {?} */
        const shouldPerformSelection = (/**
         * @param {?} o
         * @param {?} i
         * @return {?}
         */
        (o, i) => {
            return typeof changeOn === 'function' ? changeOn(o, i) : false;
        });
        if (option.isLeaf || this.cascaderComponent.nzChangeOnSelect || shouldPerformSelection(option, index)) {
            this.selectedOptions = [...this.activatedOptions];
            this.prepareEmitValue();
            this.$redraw.next();
            this.$optionSelected.next({ option, index });
        }
    }
    /**
     * @param {?} column
     * @return {?}
     */
    setOptionDeactivatedSinceColumn(column) {
        this.dropBehindActivatedOptions(column - 1);
        this.dropBehindColumns(column);
        this.$redraw.next();
    }
    /**
     * Set a searching option as selected, finishing up things.
     * @param {?} option
     * @return {?}
     */
    setSearchOptionSelected(option) {
        this.activatedOptions = [option];
        this.selectedOptions = [...option.path];
        this.prepareEmitValue();
        this.$redraw.next();
        this.$optionSelected.next({ option, index: 0 });
        setTimeout((/**
         * @return {?}
         */
        () => {
            // Reset data and tell UI only to remove input and reset dropdown width style.
            this.$quitSearching.next();
            this.$redraw.next();
            this.inSearchingMode = false;
            this.columns = [...this.columnsSnapshot];
            this.activatedOptions = [...this.selectedOptions];
        }), 200);
    }
    /**
     * Filter cascader options to reset `columns`.
     * @param {?} searchValue The string user wants to search.
     * @return {?}
     */
    prepareSearchOptions(searchValue) {
        /** @type {?} */
        const results = [];
        // Search results only have one layer.
        /** @type {?} */
        const path = [];
        /** @type {?} */
        const defaultFilter = (/**
         * @param {?} i
         * @param {?} p
         * @return {?}
         */
        (i, p) => {
            return p.some((/**
             * @param {?} o
             * @return {?}
             */
            o => {
                /** @type {?} */
                const label = this.getOptionLabel(o);
                return !!label && label.indexOf(i) !== -1;
            }));
        });
        /** @type {?} */
        const showSearch = this.cascaderComponent.nzShowSearch;
        /** @type {?} */
        const filter = isShowSearchObject(showSearch) && showSearch.filter ? showSearch.filter : defaultFilter;
        /** @type {?} */
        const sorter = isShowSearchObject(showSearch) && showSearch.sorter ? showSearch.sorter : null;
        /** @type {?} */
        const loopChild = (/**
         * @param {?} node
         * @param {?=} forceDisabled
         * @return {?}
         */
        (node, forceDisabled = false) => {
            path.push(node);
            /** @type {?} */
            const cPath = Array.from(path);
            if (filter(searchValue, cPath)) {
                /** @type {?} */
                const disabled = forceDisabled || node.disabled;
                /** @type {?} */
                const option = {
                    disabled,
                    isLeaf: true,
                    path: cPath,
                    [this.cascaderComponent.nzLabelProperty]: cPath.map((/**
                     * @param {?} p
                     * @return {?}
                     */
                    p => this.getOptionLabel(p))).join(' / ')
                };
                results.push(option);
            }
            path.pop();
        });
        /** @type {?} */
        const loopParent = (/**
         * @param {?} node
         * @param {?=} forceDisabled
         * @return {?}
         */
        (node, forceDisabled = false) => {
            /** @type {?} */
            const disabled = forceDisabled || node.disabled;
            path.push(node);
            (/** @type {?} */ (node.children)).forEach((/**
             * @param {?} sNode
             * @return {?}
             */
            sNode => {
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
        o => (isChildOption(o) ? loopChild(o) : loopParent(o))));
        if (sorter) {
            results.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => sorter(a.path, b.path, searchValue)));
        }
        this.columns = [results];
    }
    /**
     * Toggle searching mode by UI. It deals with things not directly related to UI.
     * @param {?} toSearching If this cascader is entering searching mode
     * @return {?}
     */
    toggleSearchingMode(toSearching) {
        this.inSearchingMode = toSearching;
        if (toSearching) {
            this.activatedOptionsSnapshot = [...this.activatedOptions];
            this.activatedOptions = [];
            this.selectedOptions = [];
            this.$redraw.next();
        }
        else {
            // User quit searching mode without selecting an option.
            this.activatedOptions = [...this.activatedOptionsSnapshot];
            this.selectedOptions = [...this.activatedOptions];
            this.columns = [...this.columnsSnapshot];
            this.syncOptions();
            this.$redraw.next();
        }
    }
    /**
     * Clear selected options.
     * @return {?}
     */
    clear() {
        this.values = [];
        this.selectedOptions = [];
        this.activatedOptions = [];
        this.dropBehindColumns(0);
        this.prepareEmitValue();
        this.$redraw.next();
        this.$optionSelected.next(null);
    }
    /**
     * @param {?} o
     * @return {?}
     */
    getOptionLabel(o) {
        return (/** @type {?} */ (o[this.cascaderComponent.nzLabelProperty || 'label']));
    }
    // tslint:disable-next-line:no-any
    /**
     * @param {?} o
     * @return {?}
     */
    getOptionValue(o) {
        return o[this.cascaderComponent.nzValueProperty || 'value'];
    }
    /**
     * Try to insert options into a column.
     * @private
     * @param {?} options Options to insert
     * @param {?} columnIndex Position
     * @param {?} parent
     * @return {?}
     */
    setColumnData(options, columnIndex, parent) {
        /** @type {?} */
        const existingOptions = this.columns[columnIndex];
        if (!arraysEqual(existingOptions, options)) {
            options.forEach((/**
             * @param {?} o
             * @return {?}
             */
            o => (o.parent = parent)));
            this.columns[columnIndex] = options;
            this.dropBehindColumns(columnIndex);
        }
    }
    /**
     * Set all ancestor options as activated.
     * @private
     * @param {?} startIndex
     * @return {?}
     */
    trackAncestorActivatedOptions(startIndex) {
        for (let i = startIndex - 1; i >= 0; i--) {
            if (!this.activatedOptions[i]) {
                this.activatedOptions[i] = (/** @type {?} */ (this.activatedOptions[i + 1].parent));
            }
        }
    }
    /**
     * @private
     * @param {?} lastReserveIndex
     * @return {?}
     */
    dropBehindActivatedOptions(lastReserveIndex) {
        this.activatedOptions = this.activatedOptions.splice(0, lastReserveIndex + 1);
    }
    /**
     * @private
     * @param {?} lastReserveIndex
     * @return {?}
     */
    dropBehindColumns(lastReserveIndex) {
        if (lastReserveIndex < this.columns.length - 1) {
            this.columns = this.columns.slice(0, lastReserveIndex + 1);
        }
    }
    /**
     * Load children of an option asynchronously.
     * @param {?} option
     * @param {?} columnIndex
     * @param {?=} success
     * @param {?=} failure
     * @return {?}
     */
    loadChildren(option, // tslint:disable-line:no-any
    columnIndex, success, failure) {
        /** @type {?} */
        const loadFn = this.cascaderComponent.nzLoadData;
        if (loadFn) {
            // If there isn't any option in columns.
            this.$loading.next(columnIndex < 0);
            if (typeof option === 'object') {
                option.loading = true;
            }
            loadFn(option, columnIndex).then((/**
             * @return {?}
             */
            () => {
                option.loading = false;
                if (option.children) {
                    this.setColumnData(option.children, columnIndex + 1, option);
                }
                if (success) {
                    success();
                }
                this.$loading.next(false);
                this.$redraw.next();
            }), (/**
             * @return {?}
             */
            () => {
                option.loading = false;
                option.isLeaf = true;
                if (failure) {
                    failure();
                }
                this.$redraw.next();
            }));
        }
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    isLoaded(index) {
        return this.columns[index] && this.columns[index].length > 0;
    }
    /**
     * Find a option that has a given value in a given column.
     * @private
     * @param {?} columnIndex
     * @param {?} value
     * @return {?}
     */
    findOptionWithValue(columnIndex, value // tslint:disable-line:no-any
    ) {
        /** @type {?} */
        const targetColumn = this.columns[columnIndex];
        if (targetColumn) {
            /** @type {?} */
            const v = typeof value === 'object' ? this.getOptionValue(value) : value;
            return (/** @type {?} */ (targetColumn.find((/**
             * @param {?} o
             * @return {?}
             */
            o => v === this.getOptionValue(o)))));
        }
        return null;
    }
    /**
     * @private
     * @return {?}
     */
    prepareEmitValue() {
        this.values = this.selectedOptions.map((/**
         * @param {?} o
         * @return {?}
         */
        o => this.getOptionValue(o)));
    }
}
NzCascaderService.ɵfac = function NzCascaderService_Factory(t) { return new (t || NzCascaderService)(); };
NzCascaderService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: NzCascaderService, factory: NzCascaderService.ɵfac });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCascaderService, [{
        type: Injectable
    }], function () { return []; }, null); })();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FzY2FkZXIuc2VydmljZS5qcyIsInNvdXJjZXMiOlsibmc6L25nLXpvcnJvLWFudGQvY2FzY2FkZXIvbnotY2FzY2FkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFaEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUzRCxPQUFPLEVBQ0wsa0JBQWtCLEVBS25CLE1BQU0sMkJBQTJCLENBQUM7QUFDbkMsT0FBTyxFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7QUFNcEUsTUFBTSxPQUFPLGlCQUFpQjtJQUQ5Qjs7OztRQUdFLHFCQUFnQixHQUF1QixFQUFFLENBQUM7Ozs7UUFHMUMsWUFBTyxHQUF5QixDQUFDLEVBQUUsQ0FBQyxDQUFDOzs7O1FBR3JDLG9CQUFlLEdBQUcsS0FBSyxDQUFDOzs7O1FBR3hCLG9CQUFlLEdBQXVCLEVBQUUsQ0FBQztRQUV6QyxXQUFNLEdBQVUsRUFBRSxDQUFDLENBQUMsNkJBQTZCOztRQUV4QyxhQUFRLEdBQUcsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7Ozs7O1FBTS9DLFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDOzs7OztRQU05QixvQkFBZSxHQUFHLElBQUksT0FBTyxFQUczQixDQUFDOzs7OztRQU1ILG1CQUFjLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQzs7OztRQUd0QyxvQkFBZSxHQUF5QixDQUFDLEVBQUUsQ0FBQyxDQUFDOzs7O1FBRzdDLDZCQUF3QixHQUF1QixFQUFFLENBQUM7SUE2WDVELENBQUM7Ozs7O0lBeFhDLElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENB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OztZQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBQyxDQUFDO1NBQzlEO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUVPLGdCQUFnQjtRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO0lBQ3RFLENBQUM7OztDQUNGLDhDQXhhQSxVQUFVOzs7Z0RBQ1Q7Ozs7OztJQUVBLDZDQUEwQzs7Ozs7SUFHMUMsb0NBQXFDOzs7OztJQUdyQyw0Q0FBd0I7Ozs7O0lBR3hCLDRDQUF5Qzs7SUFFekMsbUNBQW1COztJQUVuQixxQ0FBd0Q7Ozs7OztJQU14RCxvQ0FBdUM7Ozs7OztJQU12Qyw0Q0FHWTs7Ozs7O0lBTVosMkNBQThDOzs7Ozs7SUFHOUMsNENBQXFEOzs7Ozs7SUFHckQscURBQTBEOzs7OztJQUUxRCw4Q0FBdUQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IGFycmF5c0VxdWFsLCBpc05vdE5pbCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGlzU2hvd1NlYXJjaE9iamVjdCxcclxuICBOekNhc2NhZGVyQ29tcG9uZW50QXNTb3VyY2UsXHJcbiAgTnpDYXNjYWRlckZpbHRlcixcclxuICBOekNhc2NhZGVyT3B0aW9uLFxyXG4gIE56Q2FzY2FkZXJTZWFyY2hPcHRpb25cclxufSBmcm9tICcuL256LWNhc2NhZGVyLWRlZmluaXRpb25zJztcclxuaW1wb3J0IHsgaXNDaGlsZE9wdGlvbiwgaXNQYXJlbnRPcHRpb24gfSBmcm9tICcuL256LWNhc2NhZGVyLXV0aWxzJztcclxuXHJcbi8qKlxyXG4gKiBBbGwgZGF0YSBpcyBzdG9yZWQgYW5kIHBhcnNlZCBpbiBOekNhc2NhZGVyU2VydmljZS5cclxuICovXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE56Q2FzY2FkZXJTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICAvKiogQWN0aXZhdGVkIG9wdGlvbnMgaW4gZWFjaCBjb2x1bW4uICovXHJcbiAgYWN0aXZhdGVkT3B0aW9uczogTnpDYXNjYWRlck9wdGlvbltdID0gW107XHJcblxyXG4gIC8qKiBBbiBhcnJheSB0byBzdG9yZSBjYXNjYWRlciBpdGVtcyBhcnJhbmdlZCBpbiBkaWZmZXJlbnQgbGF5ZXJzLiAqL1xyXG4gIGNvbHVtbnM6IE56Q2FzY2FkZXJPcHRpb25bXVtdID0gW1tdXTtcclxuXHJcbiAgLyoqIElmIHVzZXIgaGFzIGVudGVyZWQgc2VhcmNoaW5nIG1vZGUuICovXHJcbiAgaW5TZWFyY2hpbmdNb2RlID0gZmFsc2U7XHJcblxyXG4gIC8qKiBTZWxlY3RlZCBvcHRpb25zIHdvdWxkIGJlIG91dHB1dCB0byB1c2VyLiAqL1xyXG4gIHNlbGVjdGVkT3B0aW9uczogTnpDYXNjYWRlck9wdGlvbltdID0gW107XHJcblxyXG4gIHZhbHVlczogYW55W10gPSBbXTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcclxuXHJcbiAgcmVhZG9ubHkgJGxvYWRpbmcgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgLyoqXHJcbiAgICogRW1pdCBhbiBldmVudCB0byBub3RpZnkgY2FzY2FkZXIgaXQgbmVlZHMgdG8gcmVkcmF3IGJlY2F1c2UgYWN0aXZhdGVkIG9yXHJcbiAgICogc2VsZWN0ZWQgb3B0aW9ucyBhcmUgY2hhbmdlZC5cclxuICAgKi9cclxuICByZWFkb25seSAkcmVkcmF3ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogRW1pdCBhbiBldmVudCB3aGVuIGFuIG9wdGlvbiBnZXRzIHNlbGVjdGVkLlxyXG4gICAqIEVtaXQgdHJ1ZSBpZiBhIGxlYWYgb3B0aW9ucyBpcyBzZWxlY3RlZC5cclxuICAgKi9cclxuICByZWFkb25seSAkb3B0aW9uU2VsZWN0ZWQgPSBuZXcgU3ViamVjdDx7XHJcbiAgICBvcHRpb246IE56Q2FzY2FkZXJPcHRpb247XHJcbiAgICBpbmRleDogbnVtYmVyO1xyXG4gIH0gfCBudWxsPigpO1xyXG5cclxuICAvKipcclxuICAgKiBFbWl0IGFuIGV2ZW50IHRvIG5vdGlmeSBjYXNjYWRlciBpdCBuZWVkcyB0byBxdWl0IHNlYXJjaGluZyBtb2RlLlxyXG4gICAqIE9ubHkgZW1pdCB3aGVuIHVzZXIgZG8gc2VsZWN0IGEgc2VhcmNoaW5nIG9wdGlvbi5cclxuICAgKi9cclxuICByZWFkb25seSAkcXVpdFNlYXJjaGluZyA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gIC8qKiBUbyBob2xkIGNvbHVtbnMgYmVmb3JlIGVudGVyaW5nIHNlYXJjaGluZyBtb2RlLiAqL1xyXG4gIHByaXZhdGUgY29sdW1uc1NuYXBzaG90OiBOekNhc2NhZGVyT3B0aW9uW11bXSA9IFtbXV07XHJcblxyXG4gIC8qKiBUbyBob2xkIGFjdGl2YXRlZCBvcHRpb25zIGJlZm9yZSBlbnRlcmluZyBzZWFyY2hpbmcgbW9kZS4gKi9cclxuICBwcml2YXRlIGFjdGl2YXRlZE9wdGlvbnNTbmFwc2hvdDogTnpDYXNjYWRlck9wdGlvbltdID0gW107XHJcblxyXG4gIHByaXZhdGUgY2FzY2FkZXJDb21wb25lbnQ6IE56Q2FzY2FkZXJDb21wb25lbnRBc1NvdXJjZTtcclxuXHJcbiAgLyoqIFJldHVybiBjYXNjYWRlciBvcHRpb25zIGluIHRoZSBmaXJzdCBsYXllci4gKi9cclxuICBnZXQgbnpPcHRpb25zKCk6IE56Q2FzY2FkZXJPcHRpb25bXSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb2x1bW5zWzBdO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLiRyZWRyYXcuY29tcGxldGUoKTtcclxuICAgIHRoaXMuJHF1aXRTZWFyY2hpbmcuY29tcGxldGUoKTtcclxuICAgIHRoaXMuJG9wdGlvblNlbGVjdGVkLmNvbXBsZXRlKCk7XHJcbiAgICB0aGlzLiRsb2FkaW5nLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNYWtlIHN1cmUgdGhhdCB2YWx1ZSBtYXRjaGVzIHdoYXQgaXMgZGlzcGxheWVkIGluIHRoZSBkcm9wZG93bi5cclxuICAgKi9cclxuICBzeW5jT3B0aW9ucyhmaXJzdDogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLnZhbHVlcztcclxuICAgIGNvbnN0IGhhc1ZhbHVlID0gdmFsdWVzICYmIHZhbHVlcy5sZW5ndGg7XHJcbiAgICBjb25zdCBsYXN0Q29sdW1uSW5kZXggPSB2YWx1ZXMubGVuZ3RoIC0gMTtcclxuICAgIGNvbnN0IGluaXRDb2x1bW5XaXRoSW5kZXggPSAoY29sdW1uSW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICBjb25zdCBhY3RpdmF0ZWRPcHRpb25TZXR0ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gdmFsdWVzW2NvbHVtbkluZGV4XTtcclxuXHJcbiAgICAgICAgaWYgKCFpc05vdE5pbChjdXJyZW50VmFsdWUpKSB7XHJcbiAgICAgICAgICB0aGlzLiRyZWRyYXcubmV4dCgpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgb3B0aW9uID1cclxuICAgICAgICAgIHRoaXMuZmluZE9wdGlvbldpdGhWYWx1ZShjb2x1bW5JbmRleCwgdmFsdWVzW2NvbHVtbkluZGV4XSkgfHxcclxuICAgICAgICAgICh0eXBlb2YgY3VycmVudFZhbHVlID09PSAnb2JqZWN0J1xyXG4gICAgICAgICAgICA/IGN1cnJlbnRWYWx1ZVxyXG4gICAgICAgICAgICA6IHtcclxuICAgICAgICAgICAgICAgIFtgJHt0aGlzLmNhc2NhZGVyQ29tcG9uZW50Lm56VmFsdWVQcm9wZXJ0eX1gXTogY3VycmVudFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgW2Ake3RoaXMuY2FzY2FkZXJDb21wb25lbnQubnpMYWJlbFByb3BlcnR5fWBdOiBjdXJyZW50VmFsdWVcclxuICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRPcHRpb25BY3RpdmF0ZWQob3B0aW9uLCBjb2x1bW5JbmRleCwgZmFsc2UsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgaWYgKGNvbHVtbkluZGV4IDwgbGFzdENvbHVtbkluZGV4KSB7XHJcbiAgICAgICAgICBpbml0Q29sdW1uV2l0aEluZGV4KGNvbHVtbkluZGV4ICsgMSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuZHJvcEJlaGluZENvbHVtbnMoY29sdW1uSW5kZXgpO1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSBbLi4udGhpcy5hY3RpdmF0ZWRPcHRpb25zXTtcclxuICAgICAgICAgIHRoaXMuJHJlZHJhdy5uZXh0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgaWYgKHRoaXMuaXNMb2FkZWQoY29sdW1uSW5kZXgpIHx8ICF0aGlzLmNhc2NhZGVyQ29tcG9uZW50Lm56TG9hZERhdGEpIHtcclxuICAgICAgICBhY3RpdmF0ZWRPcHRpb25TZXR0ZXIoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBvcHRpb24gPSB0aGlzLmFjdGl2YXRlZE9wdGlvbnNbY29sdW1uSW5kZXggLSAxXSB8fCB7fTtcclxuICAgICAgICB0aGlzLmxvYWRDaGlsZHJlbihvcHRpb24sIGNvbHVtbkluZGV4IC0gMSwgYWN0aXZhdGVkT3B0aW9uU2V0dGVyKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnMgPSBbXTtcclxuICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gW107XHJcblxyXG4gICAgaWYgKGZpcnN0ICYmIHRoaXMuY2FzY2FkZXJDb21wb25lbnQubnpMb2FkRGF0YSAmJiAhaGFzVmFsdWUpIHtcclxuICAgICAgLy8gU2hvdWxkIGFsc28gbm90aWZ5IHRoZSBjb21wb25lbnQgdGhhdCB2YWx1ZSBjaGFuZ2VzLiBGaXggIzM0ODAuXHJcbiAgICAgIHRoaXMuJHJlZHJhdy5uZXh0KCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGluaXRDb2x1bW5XaXRoSW5kZXgoMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBCaW5kIGNhc2NhZGVyIGNvbXBvbmVudCBzbyB0aGlzIHNlcnZpY2UgY291bGQgdXNlIGlucHV0cy5cclxuICAgKi9cclxuICB3aXRoQ29tcG9uZW50KGNhc2NhZGVyQ29tcG9uZW50OiBOekNhc2NhZGVyQ29tcG9uZW50QXNTb3VyY2UpOiB2b2lkIHtcclxuICAgIHRoaXMuY2FzY2FkZXJDb21wb25lbnQgPSBjYXNjYWRlckNvbXBvbmVudDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlc2V0IGFsbCBvcHRpb25zLiBSZWJ1aWxkIHNlYXJjaGluZyBvcHRpb25zIGlmIGluIHNlYXJjaGluZyBtb2RlLlxyXG4gICAqL1xyXG4gIHdpdGhPcHRpb25zKG9wdGlvbnM6IE56Q2FzY2FkZXJPcHRpb25bXSB8IG51bGwpOiB2b2lkIHtcclxuICAgIHRoaXMuY29sdW1uc1NuYXBzaG90ID0gdGhpcy5jb2x1bW5zID0gb3B0aW9ucyAmJiBvcHRpb25zLmxlbmd0aCA/IFtvcHRpb25zXSA6IFtdO1xyXG5cclxuICAgIGlmICh0aGlzLmluU2VhcmNoaW5nTW9kZSkge1xyXG4gICAgICB0aGlzLnByZXBhcmVTZWFyY2hPcHRpb25zKHRoaXMuY2FzY2FkZXJDb21wb25lbnQuaW5wdXRWYWx1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29sdW1ucy5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5zeW5jT3B0aW9ucygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVHJ5IHRvIHNldCBhIG9wdGlvbiBhcyBhY3RpdmF0ZWQuXHJcbiAgICogQHBhcmFtIG9wdGlvbiBDYXNjYWRlciBvcHRpb25cclxuICAgKiBAcGFyYW0gY29sdW1uSW5kZXggT2Ygd2hpY2ggY29sdW1uIHRoaXMgb3B0aW9uIGlzIGluXHJcbiAgICogQHBhcmFtIHBlcmZvcm1TZWxlY3QgU2VsZWN0XHJcbiAgICogQHBhcmFtIGxvYWRpbmdDaGlsZHJlbiBUcnkgdG8gbG9hZCBjaGlsZHJlbiBhc3luY2hyb25vdXNseS5cclxuICAgKi9cclxuICBzZXRPcHRpb25BY3RpdmF0ZWQoXHJcbiAgICBvcHRpb246IE56Q2FzY2FkZXJPcHRpb24sXHJcbiAgICBjb2x1bW5JbmRleDogbnVtYmVyLFxyXG4gICAgcGVyZm9ybVNlbGVjdDogYm9vbGVhbiA9IGZhbHNlLFxyXG4gICAgbG9hZGluZ0NoaWxkcmVuOiBib29sZWFuID0gdHJ1ZVxyXG4gICk6IHZvaWQge1xyXG4gICAgaWYgKG9wdGlvbi5kaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hY3RpdmF0ZWRPcHRpb25zW2NvbHVtbkluZGV4XSA9IG9wdGlvbjtcclxuICAgIHRoaXMudHJhY2tBbmNlc3RvckFjdGl2YXRlZE9wdGlvbnMoY29sdW1uSW5kZXgpO1xyXG4gICAgdGhpcy5kcm9wQmVoaW5kQWN0aXZhdGVkT3B0aW9ucyhjb2x1bW5JbmRleCk7XHJcblxyXG4gICAgY29uc3QgaXNQYXJlbnQgPSBpc1BhcmVudE9wdGlvbihvcHRpb24pO1xyXG5cclxuICAgIGlmIChpc1BhcmVudCkge1xyXG4gICAgICAvLyBQYXJlbnQgb3B0aW9uIHRoYXQgaGFzIGNoaWxkcmVuLlxyXG4gICAgICB0aGlzLnNldENvbHVtbkRhdGEob3B0aW9uLmNoaWxkcmVuISwgY29sdW1uSW5kZXggKyAxLCBvcHRpb24pO1xyXG4gICAgfSBlbHNlIGlmICghb3B0aW9uLmlzTGVhZiAmJiBsb2FkaW5nQ2hpbGRyZW4pIHtcclxuICAgICAgLy8gUGFyZW50IG9wdGlvbiB0aGF0IHNob3VsZCB0cnkgdG8gbG9hZCBjaGlsZHJlbiBhc3luY2hyb25vdXNseS5cclxuICAgICAgdGhpcy5sb2FkQ2hpbGRyZW4ob3B0aW9uLCBjb2x1bW5JbmRleCk7XHJcbiAgICB9IGVsc2UgaWYgKG9wdGlvbi5pc0xlYWYpIHtcclxuICAgICAgLy8gTGVhZiBvcHRpb24uXHJcbiAgICAgIHRoaXMuZHJvcEJlaGluZENvbHVtbnMoY29sdW1uSW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFjdHVhbGx5IHBlcmZvcm0gc2VsZWN0aW9uIHRvIG1ha2UgYW4gb3B0aW9ucyBub3Qgb25seSBhY3RpdmF0ZWQgYnV0IGFsc28gc2VsZWN0ZWQuXHJcbiAgICBpZiAocGVyZm9ybVNlbGVjdCkge1xyXG4gICAgICB0aGlzLnNldE9wdGlvblNlbGVjdGVkKG9wdGlvbiwgY29sdW1uSW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuJHJlZHJhdy5uZXh0KCk7XHJcbiAgfVxyXG5cclxuICBzZXRPcHRpb25TZWxlY3RlZChvcHRpb246IE56Q2FzY2FkZXJPcHRpb24sIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNoYW5nZU9uID0gdGhpcy5jYXNjYWRlckNvbXBvbmVudC5uekNoYW5nZU9uO1xyXG4gICAgY29uc3Qgc2hvdWxkUGVyZm9ybVNlbGVjdGlvbiA9IChvOiBOekNhc2NhZGVyT3B0aW9uLCBpOiBudW1iZXIpOiBib29sZWFuID0+IHtcclxuICAgICAgcmV0dXJuIHR5cGVvZiBjaGFuZ2VPbiA9PT0gJ2Z1bmN0aW9uJyA/IGNoYW5nZU9uKG8sIGkpIDogZmFsc2U7XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChvcHRpb24uaXNMZWFmIHx8IHRoaXMuY2FzY2FkZXJDb21wb25lbnQubnpDaGFuZ2VPblNlbGVjdCB8fCBzaG91bGRQZXJmb3JtU2VsZWN0aW9uKG9wdGlvbiwgaW5kZXgpKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gWy4uLnRoaXMuYWN0aXZhdGVkT3B0aW9uc107XHJcbiAgICAgIHRoaXMucHJlcGFyZUVtaXRWYWx1ZSgpO1xyXG4gICAgICB0aGlzLiRyZWRyYXcubmV4dCgpO1xyXG4gICAgICB0aGlzLiRvcHRpb25TZWxlY3RlZC5uZXh0KHsgb3B0aW9uLCBpbmRleCB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldE9wdGlvbkRlYWN0aXZhdGVkU2luY2VDb2x1bW4oY29sdW1uOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuZHJvcEJlaGluZEFjdGl2YXRlZE9wdGlvbnMoY29sdW1uIC0gMSk7XHJcbiAgICB0aGlzLmRyb3BCZWhpbmRDb2x1bW5zKGNvbHVtbik7XHJcbiAgICB0aGlzLiRyZWRyYXcubmV4dCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IGEgc2VhcmNoaW5nIG9wdGlvbiBhcyBzZWxlY3RlZCwgZmluaXNoaW5nIHVwIHRoaW5ncy5cclxuICAgKiBAcGFyYW0gb3B0aW9uXHJcbiAgICovXHJcbiAgc2V0U2VhcmNoT3B0aW9uU2VsZWN0ZWQob3B0aW9uOiBOekNhc2NhZGVyU2VhcmNoT3B0aW9uKTogdm9pZCB7XHJcbiAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnMgPSBbb3B0aW9uXTtcclxuICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gWy4uLm9wdGlvbi5wYXRoXTtcclxuICAgIHRoaXMucHJlcGFyZUVtaXRWYWx1ZSgpO1xyXG4gICAgdGhpcy4kcmVkcmF3Lm5leHQoKTtcclxuICAgIHRoaXMuJG9wdGlvblNlbGVjdGVkLm5leHQoeyBvcHRpb24sIGluZGV4OiAwIH0pO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAvLyBSZXNldCBkYXRhIGFuZCB0ZWxsIFVJIG9ubHkgdG8gcmVtb3ZlIGlucHV0IGFuZCByZXNldCBkcm9wZG93biB3aWR0aCBzdHlsZS5cclxuICAgICAgdGhpcy4kcXVpdFNlYXJjaGluZy5uZXh0KCk7XHJcbiAgICAgIHRoaXMuJHJlZHJhdy5uZXh0KCk7XHJcbiAgICAgIHRoaXMuaW5TZWFyY2hpbmdNb2RlID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuY29sdW1ucyA9IFsuLi50aGlzLmNvbHVtbnNTbmFwc2hvdF07XHJcbiAgICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9ucyA9IFsuLi50aGlzLnNlbGVjdGVkT3B0aW9uc107XHJcbiAgICB9LCAyMDApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmlsdGVyIGNhc2NhZGVyIG9wdGlvbnMgdG8gcmVzZXQgYGNvbHVtbnNgLlxyXG4gICAqIEBwYXJhbSBzZWFyY2hWYWx1ZSBUaGUgc3RyaW5nIHVzZXIgd2FudHMgdG8gc2VhcmNoLlxyXG4gICAqL1xyXG4gIHByZXBhcmVTZWFyY2hPcHRpb25zKHNlYXJjaFZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnN0IHJlc3VsdHM6IE56Q2FzY2FkZXJPcHRpb25bXSA9IFtdOyAvLyBTZWFyY2ggcmVzdWx0cyBvbmx5IGhhdmUgb25lIGxheWVyLlxyXG4gICAgY29uc3QgcGF0aDogTnpDYXNjYWRlck9wdGlvbltdID0gW107XHJcbiAgICBjb25zdCBkZWZhdWx0RmlsdGVyOiBOekNhc2NhZGVyRmlsdGVyID0gKGksIHApID0+IHtcclxuICAgICAgcmV0dXJuIHAuc29tZShvID0+IHtcclxuICAgICAgICBjb25zdCBsYWJlbCA9IHRoaXMuZ2V0T3B0aW9uTGFiZWwobyk7XHJcbiAgICAgICAgcmV0dXJuICEhbGFiZWwgJiYgbGFiZWwuaW5kZXhPZihpKSAhPT0gLTE7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHNob3dTZWFyY2ggPSB0aGlzLmNhc2NhZGVyQ29tcG9uZW50Lm56U2hvd1NlYXJjaDtcclxuICAgIGNvbnN0IGZpbHRlciA9IGlzU2hvd1NlYXJjaE9iamVjdChzaG93U2VhcmNoKSAmJiBzaG93U2VhcmNoLmZpbHRlciA/IHNob3dTZWFyY2guZmlsdGVyIDogZGVmYXVsdEZpbHRlcjtcclxuICAgIGNvbnN0IHNvcnRlciA9IGlzU2hvd1NlYXJjaE9iamVjdChzaG93U2VhcmNoKSAmJiBzaG93U2VhcmNoLnNvcnRlciA/IHNob3dTZWFyY2guc29ydGVyIDogbnVsbDtcclxuICAgIGNvbnN0IGxvb3BDaGlsZCA9IChub2RlOiBOekNhc2NhZGVyT3B0aW9uLCBmb3JjZURpc2FibGVkID0gZmFsc2UpID0+IHtcclxuICAgICAgcGF0aC5wdXNoKG5vZGUpO1xyXG4gICAgICBjb25zdCBjUGF0aCA9IEFycmF5LmZyb20ocGF0aCk7XHJcbiAgICAgIGlmIChmaWx0ZXIoc2VhcmNoVmFsdWUsIGNQYXRoKSkge1xyXG4gICAgICAgIGNvbnN0IGRpc2FibGVkID0gZm9yY2VEaXNhYmxlZCB8fCBub2RlLmRpc2FibGVkO1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbjogTnpDYXNjYWRlclNlYXJjaE9wdGlvbiA9IHtcclxuICAgICAgICAgIGRpc2FibGVkLFxyXG4gICAgICAgICAgaXNMZWFmOiB0cnVlLFxyXG4gICAgICAgICAgcGF0aDogY1BhdGgsXHJcbiAgICAgICAgICBbdGhpcy5jYXNjYWRlckNvbXBvbmVudC5uekxhYmVsUHJvcGVydHldOiBjUGF0aC5tYXAocCA9PiB0aGlzLmdldE9wdGlvbkxhYmVsKHApKS5qb2luKCcgLyAnKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKG9wdGlvbik7XHJcbiAgICAgIH1cclxuICAgICAgcGF0aC5wb3AoKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBsb29wUGFyZW50ID0gKG5vZGU6IE56Q2FzY2FkZXJPcHRpb24sIGZvcmNlRGlzYWJsZWQgPSBmYWxzZSkgPT4ge1xyXG4gICAgICBjb25zdCBkaXNhYmxlZCA9IGZvcmNlRGlzYWJsZWQgfHwgbm9kZS5kaXNhYmxlZDtcclxuICAgICAgcGF0aC5wdXNoKG5vZGUpO1xyXG4gICAgICBub2RlLmNoaWxkcmVuIS5mb3JFYWNoKHNOb2RlID0+IHtcclxuICAgICAgICBpZiAoIXNOb2RlLnBhcmVudCkge1xyXG4gICAgICAgICAgc05vZGUucGFyZW50ID0gbm9kZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzTm9kZS5pc0xlYWYpIHtcclxuICAgICAgICAgIGxvb3BQYXJlbnQoc05vZGUsIGRpc2FibGVkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNOb2RlLmlzTGVhZiB8fCAhc05vZGUuY2hpbGRyZW4gfHwgIXNOb2RlLmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICAgICAgbG9vcENoaWxkKHNOb2RlLCBkaXNhYmxlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgcGF0aC5wb3AoKTtcclxuICAgIH07XHJcblxyXG4gICAgaWYgKCF0aGlzLmNvbHVtbnNTbmFwc2hvdC5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5jb2x1bW5zID0gW1tdXTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY29sdW1uc1NuYXBzaG90WzBdLmZvckVhY2gobyA9PiAoaXNDaGlsZE9wdGlvbihvKSA/IGxvb3BDaGlsZChvKSA6IGxvb3BQYXJlbnQobykpKTtcclxuXHJcbiAgICBpZiAoc29ydGVyKSB7XHJcbiAgICAgIHJlc3VsdHMuc29ydCgoYSwgYikgPT4gc29ydGVyKGEucGF0aCwgYi5wYXRoLCBzZWFyY2hWYWx1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY29sdW1ucyA9IFtyZXN1bHRzXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRvZ2dsZSBzZWFyY2hpbmcgbW9kZSBieSBVSS4gSXQgZGVhbHMgd2l0aCB0aGluZ3Mgbm90IGRpcmVjdGx5IHJlbGF0ZWQgdG8gVUkuXHJcbiAgICogQHBhcmFtIHRvU2VhcmNoaW5nIElmIHRoaXMgY2FzY2FkZXIgaXMgZW50ZXJpbmcgc2VhcmNoaW5nIG1vZGVcclxuICAgKi9cclxuICB0b2dnbGVTZWFyY2hpbmdNb2RlKHRvU2VhcmNoaW5nOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmluU2VhcmNoaW5nTW9kZSA9IHRvU2VhcmNoaW5nO1xyXG5cclxuICAgIGlmICh0b1NlYXJjaGluZykge1xyXG4gICAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnNTbmFwc2hvdCA9IFsuLi50aGlzLmFjdGl2YXRlZE9wdGlvbnNdO1xyXG4gICAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnMgPSBbXTtcclxuICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSBbXTtcclxuICAgICAgdGhpcy4kcmVkcmF3Lm5leHQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFVzZXIgcXVpdCBzZWFyY2hpbmcgbW9kZSB3aXRob3V0IHNlbGVjdGluZyBhbiBvcHRpb24uXHJcbiAgICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9ucyA9IFsuLi50aGlzLmFjdGl2YXRlZE9wdGlvbnNTbmFwc2hvdF07XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gWy4uLnRoaXMuYWN0aXZhdGVkT3B0aW9uc107XHJcbiAgICAgIHRoaXMuY29sdW1ucyA9IFsuLi50aGlzLmNvbHVtbnNTbmFwc2hvdF07XHJcbiAgICAgIHRoaXMuc3luY09wdGlvbnMoKTtcclxuICAgICAgdGhpcy4kcmVkcmF3Lm5leHQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENsZWFyIHNlbGVjdGVkIG9wdGlvbnMuXHJcbiAgICovXHJcbiAgY2xlYXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLnZhbHVlcyA9IFtdO1xyXG4gICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSBbXTtcclxuICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9ucyA9IFtdO1xyXG4gICAgdGhpcy5kcm9wQmVoaW5kQ29sdW1ucygwKTtcclxuICAgIHRoaXMucHJlcGFyZUVtaXRWYWx1ZSgpO1xyXG4gICAgdGhpcy4kcmVkcmF3Lm5leHQoKTtcclxuICAgIHRoaXMuJG9wdGlvblNlbGVjdGVkLm5leHQobnVsbCk7XHJcbiAgfVxyXG5cclxuICBnZXRPcHRpb25MYWJlbChvOiBOekNhc2NhZGVyT3B0aW9uKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBvW3RoaXMuY2FzY2FkZXJDb21wb25lbnQubnpMYWJlbFByb3BlcnR5IHx8ICdsYWJlbCddIGFzIHN0cmluZztcclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBnZXRPcHRpb25WYWx1ZShvOiBOekNhc2NhZGVyT3B0aW9uKTogYW55IHtcclxuICAgIHJldHVybiBvW3RoaXMuY2FzY2FkZXJDb21wb25lbnQubnpWYWx1ZVByb3BlcnR5IHx8ICd2YWx1ZSddO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVHJ5IHRvIGluc2VydCBvcHRpb25zIGludG8gYSBjb2x1bW4uXHJcbiAgICogQHBhcmFtIG9wdGlvbnMgT3B0aW9ucyB0byBpbnNlcnRcclxuICAgKiBAcGFyYW0gY29sdW1uSW5kZXggUG9zaXRpb25cclxuICAgKi9cclxuICBwcml2YXRlIHNldENvbHVtbkRhdGEob3B0aW9uczogTnpDYXNjYWRlck9wdGlvbltdLCBjb2x1bW5JbmRleDogbnVtYmVyLCBwYXJlbnQ6IE56Q2FzY2FkZXJPcHRpb24pOiB2b2lkIHtcclxuICAgIGNvbnN0IGV4aXN0aW5nT3B0aW9ucyA9IHRoaXMuY29sdW1uc1tjb2x1bW5JbmRleF07XHJcbiAgICBpZiAoIWFycmF5c0VxdWFsKGV4aXN0aW5nT3B0aW9ucywgb3B0aW9ucykpIHtcclxuICAgICAgb3B0aW9ucy5mb3JFYWNoKG8gPT4gKG8ucGFyZW50ID0gcGFyZW50KSk7XHJcbiAgICAgIHRoaXMuY29sdW1uc1tjb2x1bW5JbmRleF0gPSBvcHRpb25zO1xyXG4gICAgICB0aGlzLmRyb3BCZWhpbmRDb2x1bW5zKGNvbHVtbkluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCBhbGwgYW5jZXN0b3Igb3B0aW9ucyBhcyBhY3RpdmF0ZWQuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSB0cmFja0FuY2VzdG9yQWN0aXZhdGVkT3B0aW9ucyhzdGFydEluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGZvciAobGV0IGkgPSBzdGFydEluZGV4IC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgaWYgKCF0aGlzLmFjdGl2YXRlZE9wdGlvbnNbaV0pIHtcclxuICAgICAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnNbaV0gPSB0aGlzLmFjdGl2YXRlZE9wdGlvbnNbaSArIDFdLnBhcmVudCE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZHJvcEJlaGluZEFjdGl2YXRlZE9wdGlvbnMobGFzdFJlc2VydmVJbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnMgPSB0aGlzLmFjdGl2YXRlZE9wdGlvbnMuc3BsaWNlKDAsIGxhc3RSZXNlcnZlSW5kZXggKyAxKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZHJvcEJlaGluZENvbHVtbnMobGFzdFJlc2VydmVJbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAobGFzdFJlc2VydmVJbmRleCA8IHRoaXMuY29sdW1ucy5sZW5ndGggLSAxKSB7XHJcbiAgICAgIHRoaXMuY29sdW1ucyA9IHRoaXMuY29sdW1ucy5zbGljZSgwLCBsYXN0UmVzZXJ2ZUluZGV4ICsgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMb2FkIGNoaWxkcmVuIG9mIGFuIG9wdGlvbiBhc3luY2hyb25vdXNseS5cclxuICAgKi9cclxuICBsb2FkQ2hpbGRyZW4oXHJcbiAgICBvcHRpb246IE56Q2FzY2FkZXJPcHRpb24gfCBhbnksIC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcbiAgICBjb2x1bW5JbmRleDogbnVtYmVyLFxyXG4gICAgc3VjY2Vzcz86IFZvaWRGdW5jdGlvbixcclxuICAgIGZhaWx1cmU/OiBWb2lkRnVuY3Rpb25cclxuICApOiB2b2lkIHtcclxuICAgIGNvbnN0IGxvYWRGbiA9IHRoaXMuY2FzY2FkZXJDb21wb25lbnQubnpMb2FkRGF0YTtcclxuXHJcbiAgICBpZiAobG9hZEZuKSB7XHJcbiAgICAgIC8vIElmIHRoZXJlIGlzbid0IGFueSBvcHRpb24gaW4gY29sdW1ucy5cclxuICAgICAgdGhpcy4kbG9hZGluZy5uZXh0KGNvbHVtbkluZGV4IDwgMCk7XHJcblxyXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbiA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICBvcHRpb24ubG9hZGluZyA9IHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxvYWRGbihvcHRpb24sIGNvbHVtbkluZGV4KS50aGVuKFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIG9wdGlvbi5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICBpZiAob3B0aW9uLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q29sdW1uRGF0YShvcHRpb24uY2hpbGRyZW4sIGNvbHVtbkluZGV4ICsgMSwgb3B0aW9uKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChzdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3MoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuJGxvYWRpbmcubmV4dChmYWxzZSk7XHJcbiAgICAgICAgICB0aGlzLiRyZWRyYXcubmV4dCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgb3B0aW9uLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIG9wdGlvbi5pc0xlYWYgPSB0cnVlO1xyXG4gICAgICAgICAgaWYgKGZhaWx1cmUpIHtcclxuICAgICAgICAgICAgZmFpbHVyZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy4kcmVkcmF3Lm5leHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzTG9hZGVkKGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNvbHVtbnNbaW5kZXhdICYmIHRoaXMuY29sdW1uc1tpbmRleF0ubGVuZ3RoID4gMDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZpbmQgYSBvcHRpb24gdGhhdCBoYXMgYSBnaXZlbiB2YWx1ZSBpbiBhIGdpdmVuIGNvbHVtbi5cclxuICAgKi9cclxuICBwcml2YXRlIGZpbmRPcHRpb25XaXRoVmFsdWUoXHJcbiAgICBjb2x1bW5JbmRleDogbnVtYmVyLFxyXG4gICAgdmFsdWU6IE56Q2FzY2FkZXJPcHRpb24gfCBhbnkgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcclxuICApOiBOekNhc2NhZGVyT3B0aW9uIHwgbnVsbCB7XHJcbiAgICBjb25zdCB0YXJnZXRDb2x1bW4gPSB0aGlzLmNvbHVtbnNbY29sdW1uSW5kZXhdO1xyXG4gICAgaWYgKHRhcmdldENvbHVtbikge1xyXG4gICAgICBjb25zdCB2ID0gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyA/IHRoaXMuZ2V0T3B0aW9uVmFsdWUodmFsdWUpIDogdmFsdWU7XHJcbiAgICAgIHJldHVybiB0YXJnZXRDb2x1bW4uZmluZChvID0+IHYgPT09IHRoaXMuZ2V0T3B0aW9uVmFsdWUobykpITtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwcmVwYXJlRW1pdFZhbHVlKCk6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZXMgPSB0aGlzLnNlbGVjdGVkT3B0aW9ucy5tYXAobyA9PiB0aGlzLmdldE9wdGlvblZhbHVlKG8pKTtcclxuICB9XHJcbn1cclxuIl19