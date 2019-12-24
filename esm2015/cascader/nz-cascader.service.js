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
export class NzCascaderService {
    constructor() {
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
    /** Return cascader options in the first layer. */
    get nzOptions() {
        return this.columns[0];
    }
    ngOnDestroy() {
        this.$redraw.complete();
        this.$quitSearching.complete();
        this.$optionSelected.complete();
        this.$loading.complete();
    }
    /**
     * Make sure that value matches what is displayed in the dropdown.
     */
    syncOptions(first = false) {
        const values = this.values;
        const hasValue = values && values.length;
        const lastColumnIndex = values.length - 1;
        const initColumnWithIndex = (columnIndex) => {
            const activatedOptionSetter = () => {
                const currentValue = values[columnIndex];
                if (!isNotNil(currentValue)) {
                    this.$redraw.next();
                    return;
                }
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
            };
            if (this.isLoaded(columnIndex) || !this.cascaderComponent.nzLoadData) {
                activatedOptionSetter();
            }
            else {
                const option = this.activatedOptions[columnIndex - 1] || {};
                this.loadChildren(option, columnIndex - 1, activatedOptionSetter);
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
    }
    /**
     * Bind cascader component so this service could use inputs.
     */
    withComponent(cascaderComponent) {
        this.cascaderComponent = cascaderComponent;
    }
    /**
     * Reset all options. Rebuild searching options if in searching mode.
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
     * @param option Cascader option
     * @param columnIndex Of which column this option is in
     * @param performSelect Select
     * @param loadingChildren Try to load children asynchronously.
     */
    setOptionActivated(option, columnIndex, performSelect = false, loadingChildren = true) {
        if (option.disabled) {
            return;
        }
        this.activatedOptions[columnIndex] = option;
        this.trackAncestorActivatedOptions(columnIndex);
        this.dropBehindActivatedOptions(columnIndex);
        const isParent = isParentOption(option);
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
    }
    setOptionSelected(option, index) {
        const changeOn = this.cascaderComponent.nzChangeOn;
        const shouldPerformSelection = (o, i) => {
            return typeof changeOn === 'function' ? changeOn(o, i) : false;
        };
        if (option.isLeaf || this.cascaderComponent.nzChangeOnSelect || shouldPerformSelection(option, index)) {
            this.selectedOptions = [...this.activatedOptions];
            this.prepareEmitValue();
            this.$redraw.next();
            this.$optionSelected.next({ option, index });
        }
    }
    setOptionDeactivatedSinceColumn(column) {
        this.dropBehindActivatedOptions(column - 1);
        this.dropBehindColumns(column);
        this.$redraw.next();
    }
    /**
     * Set a searching option as selected, finishing up things.
     * @param option
     */
    setSearchOptionSelected(option) {
        this.activatedOptions = [option];
        this.selectedOptions = [...option.path];
        this.prepareEmitValue();
        this.$redraw.next();
        this.$optionSelected.next({ option, index: 0 });
        setTimeout(() => {
            // Reset data and tell UI only to remove input and reset dropdown width style.
            this.$quitSearching.next();
            this.$redraw.next();
            this.inSearchingMode = false;
            this.columns = [...this.columnsSnapshot];
            this.activatedOptions = [...this.selectedOptions];
        }, 200);
    }
    /**
     * Filter cascader options to reset `columns`.
     * @param searchValue The string user wants to search.
     */
    prepareSearchOptions(searchValue) {
        const results = []; // Search results only have one layer.
        const path = [];
        const defaultFilter = (i, p) => {
            return p.some(o => {
                const label = this.getOptionLabel(o);
                return !!label && label.indexOf(i) !== -1;
            });
        };
        const showSearch = this.cascaderComponent.nzShowSearch;
        const filter = isShowSearchObject(showSearch) && showSearch.filter ? showSearch.filter : defaultFilter;
        const sorter = isShowSearchObject(showSearch) && showSearch.sorter ? showSearch.sorter : null;
        const loopChild = (node, forceDisabled = false) => {
            path.push(node);
            const cPath = Array.from(path);
            if (filter(searchValue, cPath)) {
                const disabled = forceDisabled || node.disabled;
                const option = {
                    disabled,
                    isLeaf: true,
                    path: cPath,
                    [this.cascaderComponent.nzLabelProperty]: cPath.map(p => this.getOptionLabel(p)).join(' / ')
                };
                results.push(option);
            }
            path.pop();
        };
        const loopParent = (node, forceDisabled = false) => {
            const disabled = forceDisabled || node.disabled;
            path.push(node);
            node.children.forEach(sNode => {
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
        this.columnsSnapshot[0].forEach(o => (isChildOption(o) ? loopChild(o) : loopParent(o)));
        if (sorter) {
            results.sort((a, b) => sorter(a.path, b.path, searchValue));
        }
        this.columns = [results];
    }
    /**
     * Toggle searching mode by UI. It deals with things not directly related to UI.
     * @param toSearching If this cascader is entering searching mode
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
    getOptionLabel(o) {
        return o[this.cascaderComponent.nzLabelProperty || 'label'];
    }
    // tslint:disable-next-line:no-any
    getOptionValue(o) {
        return o[this.cascaderComponent.nzValueProperty || 'value'];
    }
    /**
     * Try to insert options into a column.
     * @param options Options to insert
     * @param columnIndex Position
     */
    setColumnData(options, columnIndex, parent) {
        const existingOptions = this.columns[columnIndex];
        if (!arraysEqual(existingOptions, options)) {
            options.forEach(o => (o.parent = parent));
            this.columns[columnIndex] = options;
            this.dropBehindColumns(columnIndex);
        }
    }
    /**
     * Set all ancestor options as activated.
     */
    trackAncestorActivatedOptions(startIndex) {
        for (let i = startIndex - 1; i >= 0; i--) {
            if (!this.activatedOptions[i]) {
                this.activatedOptions[i] = this.activatedOptions[i + 1].parent;
            }
        }
    }
    dropBehindActivatedOptions(lastReserveIndex) {
        this.activatedOptions = this.activatedOptions.splice(0, lastReserveIndex + 1);
    }
    dropBehindColumns(lastReserveIndex) {
        if (lastReserveIndex < this.columns.length - 1) {
            this.columns = this.columns.slice(0, lastReserveIndex + 1);
        }
    }
    /**
     * Load children of an option asynchronously.
     */
    loadChildren(option, // tslint:disable-line:no-any
    columnIndex, success, failure) {
        const loadFn = this.cascaderComponent.nzLoadData;
        if (loadFn) {
            // If there isn't any option in columns.
            this.$loading.next(columnIndex < 0);
            if (typeof option === 'object') {
                option.loading = true;
            }
            loadFn(option, columnIndex).then(() => {
                option.loading = false;
                if (option.children) {
                    this.setColumnData(option.children, columnIndex + 1, option);
                }
                if (success) {
                    success();
                }
                this.$loading.next(false);
                this.$redraw.next();
            }, () => {
                option.loading = false;
                option.isLeaf = true;
                if (failure) {
                    failure();
                }
                this.$redraw.next();
            });
        }
    }
    isLoaded(index) {
        return this.columns[index] && this.columns[index].length > 0;
    }
    /**
     * Find a option that has a given value in a given column.
     */
    findOptionWithValue(columnIndex, value // tslint:disable-line:no-any
    ) {
        const targetColumn = this.columns[columnIndex];
        if (targetColumn) {
            const v = typeof value === 'object' ? this.getOptionValue(value) : value;
            return targetColumn.find(o => v === this.getOptionValue(o));
        }
        return null;
    }
    prepareEmitValue() {
        this.values = this.selectedOptions.map(o => this.getOptionValue(o));
    }
}
/** @nocollapse */ NzCascaderService.ɵfac = function NzCascaderService_Factory(t) { return new (t || NzCascaderService)(); };
/** @nocollapse */ NzCascaderService.ɵprov = i0.ɵɵdefineInjectable({ token: NzCascaderService, factory: NzCascaderService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzCascaderService, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FzY2FkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY2FzY2FkZXIvIiwic291cmNlcyI6WyJuei1jYXNjYWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFaEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUzRCxPQUFPLEVBQ0wsa0JBQWtCLEVBS25CLE1BQU0sMkJBQTJCLENBQUM7QUFDbkMsT0FBTyxFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFFcEU7O0dBRUc7QUFFSCxNQUFNLE9BQU8saUJBQWlCO0lBRDlCO1FBRUUsd0NBQXdDO1FBQ3hDLHFCQUFnQixHQUF1QixFQUFFLENBQUM7UUFFMUMscUVBQXFFO1FBQ3JFLFlBQU8sR0FBeUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVyQywwQ0FBMEM7UUFDMUMsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFFeEIsZ0RBQWdEO1FBQ2hELG9CQUFlLEdBQXVCLEVBQUUsQ0FBQztRQUV6QyxXQUFNLEdBQVUsRUFBRSxDQUFDLENBQUMsNkJBQTZCO1FBRXhDLGFBQVEsR0FBRyxJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUV4RDs7O1dBR0c7UUFDTSxZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUV2Qzs7O1dBR0c7UUFDTSxvQkFBZSxHQUFHLElBQUksT0FBTyxFQUczQixDQUFDO1FBRVo7OztXQUdHO1FBQ00sbUJBQWMsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBRTlDLHNEQUFzRDtRQUM5QyxvQkFBZSxHQUF5QixDQUFDLEVBQUUsQ0FBQyxDQUFD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QUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQ7O09BRUc7SUFDSyxtQkFBbUIsQ0FDekIsV0FBbUIsRUFDbkIsS0FBNkIsQ0FBQyw2QkFBNkI7O1FBRTNELE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDL0MsSUFBSSxZQUFZLEVBQUU7WUFDaEIsTUFBTSxDQUFDLEdBQUcsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDekUsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztTQUM5RDtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVPLGdCQUFnQjtRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7O2tGQWphVSxpQkFBaUI7eURBQWpCLGlCQUFpQixXQUFqQixpQkFBaUI7a0RBQWpCLGlCQUFpQjtjQUQ3QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBhcnJheXNFcXVhbCwgaXNOb3ROaWwgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtcclxuICBpc1Nob3dTZWFyY2hPYmplY3QsXHJcbiAgTnpDYXNjYWRlckNvbXBvbmVudEFzU291cmNlLFxyXG4gIE56Q2FzY2FkZXJGaWx0ZXIsXHJcbiAgTnpDYXNjYWRlck9wdGlvbixcclxuICBOekNhc2NhZGVyU2VhcmNoT3B0aW9uXHJcbn0gZnJvbSAnLi9uei1jYXNjYWRlci1kZWZpbml0aW9ucyc7XHJcbmltcG9ydCB7IGlzQ2hpbGRPcHRpb24sIGlzUGFyZW50T3B0aW9uIH0gZnJvbSAnLi9uei1jYXNjYWRlci11dGlscyc7XHJcblxyXG4vKipcclxuICogQWxsIGRhdGEgaXMgc3RvcmVkIGFuZCBwYXJzZWQgaW4gTnpDYXNjYWRlclNlcnZpY2UuXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOekNhc2NhZGVyU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgLyoqIEFjdGl2YXRlZCBvcHRpb25zIGluIGVhY2ggY29sdW1uLiAqL1xyXG4gIGFjdGl2YXRlZE9wdGlvbnM6IE56Q2FzY2FkZXJPcHRpb25bXSA9IFtdO1xyXG5cclxuICAvKiogQW4gYXJyYXkgdG8gc3RvcmUgY2FzY2FkZXIgaXRlbXMgYXJyYW5nZWQgaW4gZGlmZmVyZW50IGxheWVycy4gKi9cclxuICBjb2x1bW5zOiBOekNhc2NhZGVyT3B0aW9uW11bXSA9IFtbXV07XHJcblxyXG4gIC8qKiBJZiB1c2VyIGhhcyBlbnRlcmVkIHNlYXJjaGluZyBtb2RlLiAqL1xyXG4gIGluU2VhcmNoaW5nTW9kZSA9IGZhbHNlO1xyXG5cclxuICAvKiogU2VsZWN0ZWQgb3B0aW9ucyB3b3VsZCBiZSBvdXRwdXQgdG8gdXNlci4gKi9cclxuICBzZWxlY3RlZE9wdGlvbnM6IE56Q2FzY2FkZXJPcHRpb25bXSA9IFtdO1xyXG5cclxuICB2YWx1ZXM6IGFueVtdID0gW107IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcblxyXG4gIHJlYWRvbmx5ICRsb2FkaW5nID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEVtaXQgYW4gZXZlbnQgdG8gbm90aWZ5IGNhc2NhZGVyIGl0IG5lZWRzIHRvIHJlZHJhdyBiZWNhdXNlIGFjdGl2YXRlZCBvclxyXG4gICAqIHNlbGVjdGVkIG9wdGlvbnMgYXJlIGNoYW5nZWQuXHJcbiAgICovXHJcbiAgcmVhZG9ubHkgJHJlZHJhdyA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEVtaXQgYW4gZXZlbnQgd2hlbiBhbiBvcHRpb24gZ2V0cyBzZWxlY3RlZC5cclxuICAgKiBFbWl0IHRydWUgaWYgYSBsZWFmIG9wdGlvbnMgaXMgc2VsZWN0ZWQuXHJcbiAgICovXHJcbiAgcmVhZG9ubHkgJG9wdGlvblNlbGVjdGVkID0gbmV3IFN1YmplY3Q8e1xyXG4gICAgb3B0aW9uOiBOekNhc2NhZGVyT3B0aW9uO1xyXG4gICAgaW5kZXg6IG51bWJlcjtcclxuICB9IHwgbnVsbD4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogRW1pdCBhbiBldmVudCB0byBub3RpZnkgY2FzY2FkZXIgaXQgbmVlZHMgdG8gcXVpdCBzZWFyY2hpbmcgbW9kZS5cclxuICAgKiBPbmx5IGVtaXQgd2hlbiB1c2VyIGRvIHNlbGVjdCBhIHNlYXJjaGluZyBvcHRpb24uXHJcbiAgICovXHJcbiAgcmVhZG9ubHkgJHF1aXRTZWFyY2hpbmcgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cclxuICAvKiogVG8gaG9sZCBjb2x1bW5zIGJlZm9yZSBlbnRlcmluZyBzZWFyY2hpbmcgbW9kZS4gKi9cclxuICBwcml2YXRlIGNvbHVtbnNTbmFwc2hvdDogTnpDYXNjYWRlck9wdGlvbltdW10gPSBbW11dO1xyXG5cclxuICAvKiogVG8gaG9sZCBhY3RpdmF0ZWQgb3B0aW9ucyBiZWZvcmUgZW50ZXJpbmcgc2VhcmNoaW5nIG1vZGUuICovXHJcbiAgcHJpdmF0ZSBhY3RpdmF0ZWRPcHRpb25zU25hcHNob3Q6IE56Q2FzY2FkZXJPcHRpb25bXSA9IFtdO1xyXG5cclxuICBwcml2YXRlIGNhc2NhZGVyQ29tcG9uZW50OiBOekNhc2NhZGVyQ29tcG9uZW50QXNTb3VyY2U7XHJcblxyXG4gIC8qKiBSZXR1cm4gY2FzY2FkZXIgb3B0aW9ucyBpbiB0aGUgZmlyc3QgbGF5ZXIuICovXHJcbiAgZ2V0IG56T3B0aW9ucygpOiBOekNhc2NhZGVyT3B0aW9uW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29sdW1uc1swXTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy4kcmVkcmF3LmNvbXBsZXRlKCk7XHJcbiAgICB0aGlzLiRxdWl0U2VhcmNoaW5nLmNvbXBsZXRlKCk7XHJcbiAgICB0aGlzLiRvcHRpb25TZWxlY3RlZC5jb21wbGV0ZSgpO1xyXG4gICAgdGhpcy4kbG9hZGluZy5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTWFrZSBzdXJlIHRoYXQgdmFsdWUgbWF0Y2hlcyB3aGF0IGlzIGRpc3BsYXllZCBpbiB0aGUgZHJvcGRvd24uXHJcbiAgICovXHJcbiAgc3luY09wdGlvbnMoZmlyc3Q6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgY29uc3QgdmFsdWVzID0gdGhpcy52YWx1ZXM7XHJcbiAgICBjb25zdCBoYXNWYWx1ZSA9IHZhbHVlcyAmJiB2YWx1ZXMubGVuZ3RoO1xyXG4gICAgY29uc3QgbGFzdENvbHVtbkluZGV4ID0gdmFsdWVzLmxlbmd0aCAtIDE7XHJcbiAgICBjb25zdCBpbml0Q29sdW1uV2l0aEluZGV4ID0gKGNvbHVtbkluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgY29uc3QgYWN0aXZhdGVkT3B0aW9uU2V0dGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHZhbHVlc1tjb2x1bW5JbmRleF07XHJcblxyXG4gICAgICAgIGlmICghaXNOb3ROaWwoY3VycmVudFZhbHVlKSkge1xyXG4gICAgICAgICAgdGhpcy4kcmVkcmF3Lm5leHQoKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG9wdGlvbiA9XHJcbiAgICAgICAgICB0aGlzLmZpbmRPcHRpb25XaXRoVmFsdWUoY29sdW1uSW5kZXgsIHZhbHVlc1tjb2x1bW5JbmRleF0pIHx8XHJcbiAgICAgICAgICAodHlwZW9mIGN1cnJlbnRWYWx1ZSA9PT0gJ29iamVjdCdcclxuICAgICAgICAgICAgPyBjdXJyZW50VmFsdWVcclxuICAgICAgICAgICAgOiB7XHJcbiAgICAgICAgICAgICAgICBbYCR7dGhpcy5jYXNjYWRlckNvbXBvbmVudC5uelZhbHVlUHJvcGVydHl9YF06IGN1cnJlbnRWYWx1ZSxcclxuICAgICAgICAgICAgICAgIFtgJHt0aGlzLmNhc2NhZGVyQ29tcG9uZW50Lm56TGFiZWxQcm9wZXJ0eX1gXTogY3VycmVudFZhbHVlXHJcbiAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0T3B0aW9uQWN0aXZhdGVkKG9wdGlvbiwgY29sdW1uSW5kZXgsIGZhbHNlLCBmYWxzZSk7XHJcblxyXG4gICAgICAgIGlmIChjb2x1bW5JbmRleCA8IGxhc3RDb2x1bW5JbmRleCkge1xyXG4gICAgICAgICAgaW5pdENvbHVtbldpdGhJbmRleChjb2x1bW5JbmRleCArIDEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmRyb3BCZWhpbmRDb2x1bW5zKGNvbHVtbkluZGV4KTtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gWy4uLnRoaXMuYWN0aXZhdGVkT3B0aW9uc107XHJcbiAgICAgICAgICB0aGlzLiRyZWRyYXcubmV4dCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmlzTG9hZGVkKGNvbHVtbkluZGV4KSB8fCAhdGhpcy5jYXNjYWRlckNvbXBvbmVudC5uekxvYWREYXRhKSB7XHJcbiAgICAgICAgYWN0aXZhdGVkT3B0aW9uU2V0dGVyKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gdGhpcy5hY3RpdmF0ZWRPcHRpb25zW2NvbHVtbkluZGV4IC0gMV0gfHwge307XHJcbiAgICAgICAgdGhpcy5sb2FkQ2hpbGRyZW4ob3B0aW9uLCBjb2x1bW5JbmRleCAtIDEsIGFjdGl2YXRlZE9wdGlvblNldHRlcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5hY3RpdmF0ZWRPcHRpb25zID0gW107XHJcbiAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IFtdO1xyXG5cclxuICAgIGlmIChmaXJzdCAmJiB0aGlzLmNhc2NhZGVyQ29tcG9uZW50Lm56TG9hZERhdGEgJiYgIWhhc1ZhbHVlKSB7XHJcbiAgICAgIC8vIFNob3VsZCBhbHNvIG5vdGlmeSB0aGUgY29tcG9uZW50IHRoYXQgdmFsdWUgY2hhbmdlcy4gRml4ICMzNDgwLlxyXG4gICAgICB0aGlzLiRyZWRyYXcubmV4dCgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpbml0Q29sdW1uV2l0aEluZGV4KDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQmluZCBjYXNjYWRlciBjb21wb25lbnQgc28gdGhpcyBzZXJ2aWNlIGNvdWxkIHVzZSBpbnB1dHMuXHJcbiAgICovXHJcbiAgd2l0aENvbXBvbmVudChjYXNjYWRlckNvbXBvbmVudDogTnpDYXNjYWRlckNvbXBvbmVudEFzU291cmNlKTogdm9pZCB7XHJcbiAgICB0aGlzLmNhc2NhZGVyQ29tcG9uZW50ID0gY2FzY2FkZXJDb21wb25lbnQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXNldCBhbGwgb3B0aW9ucy4gUmVidWlsZCBzZWFyY2hpbmcgb3B0aW9ucyBpZiBpbiBzZWFyY2hpbmcgbW9kZS5cclxuICAgKi9cclxuICB3aXRoT3B0aW9ucyhvcHRpb25zOiBOekNhc2NhZGVyT3B0aW9uW10gfCBudWxsKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbHVtbnNTbmFwc2hvdCA9IHRoaXMuY29sdW1ucyA9IG9wdGlvbnMgJiYgb3B0aW9ucy5sZW5ndGggPyBbb3B0aW9uc10gOiBbXTtcclxuXHJcbiAgICBpZiAodGhpcy5pblNlYXJjaGluZ01vZGUpIHtcclxuICAgICAgdGhpcy5wcmVwYXJlU2VhcmNoT3B0aW9ucyh0aGlzLmNhc2NhZGVyQ29tcG9uZW50LmlucHV0VmFsdWUpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbHVtbnMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuc3luY09wdGlvbnMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRyeSB0byBzZXQgYSBvcHRpb24gYXMgYWN0aXZhdGVkLlxyXG4gICAqIEBwYXJhbSBvcHRpb24gQ2FzY2FkZXIgb3B0aW9uXHJcbiAgICogQHBhcmFtIGNvbHVtbkluZGV4IE9mIHdoaWNoIGNvbHVtbiB0aGlzIG9wdGlvbiBpcyBpblxyXG4gICAqIEBwYXJhbSBwZXJmb3JtU2VsZWN0IFNlbGVjdFxyXG4gICAqIEBwYXJhbSBsb2FkaW5nQ2hpbGRyZW4gVHJ5IHRvIGxvYWQgY2hpbGRyZW4gYXN5bmNocm9ub3VzbHkuXHJcbiAgICovXHJcbiAgc2V0T3B0aW9uQWN0aXZhdGVkKG9wdGlvbjogTnpDYXNjYWRlck9wdGlvbiwgY29sdW1uSW5kZXg6IG51bWJlciwgcGVyZm9ybVNlbGVjdDogYm9vbGVhbiA9IGZhbHNlLCBsb2FkaW5nQ2hpbGRyZW46IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XHJcbiAgICBpZiAob3B0aW9uLmRpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnNbY29sdW1uSW5kZXhdID0gb3B0aW9uO1xyXG4gICAgdGhpcy50cmFja0FuY2VzdG9yQWN0aXZhdGVkT3B0aW9ucyhjb2x1bW5JbmRleCk7XHJcbiAgICB0aGlzLmRyb3BCZWhpbmRBY3RpdmF0ZWRPcHRpb25zKGNvbHVtbkluZGV4KTtcclxuXHJcbiAgICBjb25zdCBpc1BhcmVudCA9IGlzUGFyZW50T3B0aW9uKG9wdGlvbik7XHJcblxyXG4gICAgaWYgKGlzUGFyZW50KSB7XHJcbiAgICAgIC8vIFBhcmVudCBvcHRpb24gdGhhdCBoYXMgY2hpbGRyZW4uXHJcbiAgICAgIHRoaXMuc2V0Q29sdW1uRGF0YShvcHRpb24uY2hpbGRyZW4hLCBjb2x1bW5JbmRleCArIDEsIG9wdGlvbik7XHJcbiAgICB9IGVsc2UgaWYgKCFvcHRpb24uaXNMZWFmICYmIGxvYWRpbmdDaGlsZHJlbikge1xyXG4gICAgICAvLyBQYXJlbnQgb3B0aW9uIHRoYXQgc2hvdWxkIHRyeSB0byBsb2FkIGNoaWxkcmVuIGFzeW5jaHJvbm91c2x5LlxyXG4gICAgICB0aGlzLmxvYWRDaGlsZHJlbihvcHRpb24sIGNvbHVtbkluZGV4KTtcclxuICAgIH0gZWxzZSBpZiAob3B0aW9uLmlzTGVhZikge1xyXG4gICAgICAvLyBMZWFmIG9wdGlvbi5cclxuICAgICAgdGhpcy5kcm9wQmVoaW5kQ29sdW1ucyhjb2x1bW5JbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWN0dWFsbHkgcGVyZm9ybSBzZWxlY3Rpb24gdG8gbWFrZSBhbiBvcHRpb25zIG5vdCBvbmx5IGFjdGl2YXRlZCBidXQgYWxzbyBzZWxlY3RlZC5cclxuICAgIGlmIChwZXJmb3JtU2VsZWN0KSB7XHJcbiAgICAgIHRoaXMuc2V0T3B0aW9uU2VsZWN0ZWQob3B0aW9uLCBjb2x1bW5JbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy4kcmVkcmF3Lm5leHQoKTtcclxuICB9XHJcblxyXG4gIHNldE9wdGlvblNlbGVjdGVkKG9wdGlvbjogTnpDYXNjYWRlck9wdGlvbiwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgY29uc3QgY2hhbmdlT24gPSB0aGlzLmNhc2NhZGVyQ29tcG9uZW50Lm56Q2hhbmdlT247XHJcbiAgICBjb25zdCBzaG91bGRQZXJmb3JtU2VsZWN0aW9uID0gKG86IE56Q2FzY2FkZXJPcHRpb24sIGk6IG51bWJlcik6IGJvb2xlYW4gPT4ge1xyXG4gICAgICByZXR1cm4gdHlwZW9mIGNoYW5nZU9uID09PSAnZnVuY3Rpb24nID8gY2hhbmdlT24obywgaSkgOiBmYWxzZTtcclxuICAgIH07XHJcblxyXG4gICAgaWYgKG9wdGlvbi5pc0xlYWYgfHwgdGhpcy5jYXNjYWRlckNvbXBvbmVudC5uekNoYW5nZU9uU2VsZWN0IHx8IHNob3VsZFBlcmZvcm1TZWxlY3Rpb24ob3B0aW9uLCBpbmRleCkpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSBbLi4udGhpcy5hY3RpdmF0ZWRPcHRpb25zXTtcclxuICAgICAgdGhpcy5wcmVwYXJlRW1pdFZhbHVlKCk7XHJcbiAgICAgIHRoaXMuJHJlZHJhdy5uZXh0KCk7XHJcbiAgICAgIHRoaXMuJG9wdGlvblNlbGVjdGVkLm5leHQoeyBvcHRpb24sIGluZGV4IH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0T3B0aW9uRGVhY3RpdmF0ZWRTaW5jZUNvbHVtbihjb2x1bW46IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5kcm9wQmVoaW5kQWN0aXZhdGVkT3B0aW9ucyhjb2x1bW4gLSAxKTtcclxuICAgIHRoaXMuZHJvcEJlaGluZENvbHVtbnMoY29sdW1uKTtcclxuICAgIHRoaXMuJHJlZHJhdy5uZXh0KCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXQgYSBzZWFyY2hpbmcgb3B0aW9uIGFzIHNlbGVjdGVkLCBmaW5pc2hpbmcgdXAgdGhpbmdzLlxyXG4gICAqIEBwYXJhbSBvcHRpb25cclxuICAgKi9cclxuICBzZXRTZWFyY2hPcHRpb25TZWxlY3RlZChvcHRpb246IE56Q2FzY2FkZXJTZWFyY2hPcHRpb24pOiB2b2lkIHtcclxuICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9ucyA9IFtvcHRpb25dO1xyXG4gICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSBbLi4ub3B0aW9uLnBhdGhdO1xyXG4gICAgdGhpcy5wcmVwYXJlRW1pdFZhbHVlKCk7XHJcbiAgICB0aGlzLiRyZWRyYXcubmV4dCgpO1xyXG4gICAgdGhpcy4kb3B0aW9uU2VsZWN0ZWQubmV4dCh7IG9wdGlvbiwgaW5kZXg6IDAgfSk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIC8vIFJlc2V0IGRhdGEgYW5kIHRlbGwgVUkgb25seSB0byByZW1vdmUgaW5wdXQgYW5kIHJlc2V0IGRyb3Bkb3duIHdpZHRoIHN0eWxlLlxyXG4gICAgICB0aGlzLiRxdWl0U2VhcmNoaW5nLm5leHQoKTtcclxuICAgICAgdGhpcy4kcmVkcmF3Lm5leHQoKTtcclxuICAgICAgdGhpcy5pblNlYXJjaGluZ01vZGUgPSBmYWxzZTtcclxuICAgICAgdGhpcy5jb2x1bW5zID0gWy4uLnRoaXMuY29sdW1uc1NuYXBzaG90XTtcclxuICAgICAgdGhpcy5hY3RpdmF0ZWRPcHRpb25zID0gWy4uLnRoaXMuc2VsZWN0ZWRPcHRpb25zXTtcclxuICAgIH0sIDIwMCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGaWx0ZXIgY2FzY2FkZXIgb3B0aW9ucyB0byByZXNldCBgY29sdW1uc2AuXHJcbiAgICogQHBhcmFtIHNlYXJjaFZhbHVlIFRoZSBzdHJpbmcgdXNlciB3YW50cyB0byBzZWFyY2guXHJcbiAgICovXHJcbiAgcHJlcGFyZVNlYXJjaE9wdGlvbnMoc2VhcmNoVmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVzdWx0czogTnpDYXNjYWRlck9wdGlvbltdID0gW107IC8vIFNlYXJjaCByZXN1bHRzIG9ubHkgaGF2ZSBvbmUgbGF5ZXIuXHJcbiAgICBjb25zdCBwYXRoOiBOekNhc2NhZGVyT3B0aW9uW10gPSBbXTtcclxuICAgIGNvbnN0IGRlZmF1bHRGaWx0ZXI6IE56Q2FzY2FkZXJGaWx0ZXIgPSAoaSwgcCkgPT4ge1xyXG4gICAgICByZXR1cm4gcC5zb21lKG8gPT4ge1xyXG4gICAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy5nZXRPcHRpb25MYWJlbChvKTtcclxuICAgICAgICByZXR1cm4gISFsYWJlbCAmJiBsYWJlbC5pbmRleE9mKGkpICE9PSAtMTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgc2hvd1NlYXJjaCA9IHRoaXMuY2FzY2FkZXJDb21wb25lbnQubnpTaG93U2VhcmNoO1xyXG4gICAgY29uc3QgZmlsdGVyID0gaXNTaG93U2VhcmNoT2JqZWN0KHNob3dTZWFyY2gpICYmIHNob3dTZWFyY2guZmlsdGVyID8gc2hvd1NlYXJjaC5maWx0ZXIgOiBkZWZhdWx0RmlsdGVyO1xyXG4gICAgY29uc3Qgc29ydGVyID0gaXNTaG93U2VhcmNoT2JqZWN0KHNob3dTZWFyY2gpICYmIHNob3dTZWFyY2guc29ydGVyID8gc2hvd1NlYXJjaC5zb3J0ZXIgOiBudWxsO1xyXG4gICAgY29uc3QgbG9vcENoaWxkID0gKG5vZGU6IE56Q2FzY2FkZXJPcHRpb24sIGZvcmNlRGlzYWJsZWQgPSBmYWxzZSkgPT4ge1xyXG4gICAgICBwYXRoLnB1c2gobm9kZSk7XHJcbiAgICAgIGNvbnN0IGNQYXRoID0gQXJyYXkuZnJvbShwYXRoKTtcclxuICAgICAgaWYgKGZpbHRlcihzZWFyY2hWYWx1ZSwgY1BhdGgpKSB7XHJcbiAgICAgICAgY29uc3QgZGlzYWJsZWQgPSBmb3JjZURpc2FibGVkIHx8IG5vZGUuZGlzYWJsZWQ7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uOiBOekNhc2NhZGVyU2VhcmNoT3B0aW9uID0ge1xyXG4gICAgICAgICAgZGlzYWJsZWQsXHJcbiAgICAgICAgICBpc0xlYWY6IHRydWUsXHJcbiAgICAgICAgICBwYXRoOiBjUGF0aCxcclxuICAgICAgICAgIFt0aGlzLmNhc2NhZGVyQ29tcG9uZW50Lm56TGFiZWxQcm9wZXJ0eV06IGNQYXRoLm1hcChwID0+IHRoaXMuZ2V0T3B0aW9uTGFiZWwocCkpLmpvaW4oJyAvICcpXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXN1bHRzLnB1c2gob3B0aW9uKTtcclxuICAgICAgfVxyXG4gICAgICBwYXRoLnBvcCgpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGxvb3BQYXJlbnQgPSAobm9kZTogTnpDYXNjYWRlck9wdGlvbiwgZm9yY2VEaXNhYmxlZCA9IGZhbHNlKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRpc2FibGVkID0gZm9yY2VEaXNhYmxlZCB8fCBub2RlLmRpc2FibGVkO1xyXG4gICAgICBwYXRoLnB1c2gobm9kZSk7XHJcbiAgICAgIG5vZGUuY2hpbGRyZW4hLmZvckVhY2goc05vZGUgPT4ge1xyXG4gICAgICAgIGlmICghc05vZGUucGFyZW50KSB7XHJcbiAgICAgICAgICBzTm9kZS5wYXJlbnQgPSBub2RlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNOb2RlLmlzTGVhZikge1xyXG4gICAgICAgICAgbG9vcFBhcmVudChzTm9kZSwgZGlzYWJsZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc05vZGUuaXNMZWFmIHx8ICFzTm9kZS5jaGlsZHJlbiB8fCAhc05vZGUuY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgICAgICBsb29wQ2hpbGQoc05vZGUsIGRpc2FibGVkKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBwYXRoLnBvcCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoIXRoaXMuY29sdW1uc1NuYXBzaG90Lmxlbmd0aCkge1xyXG4gICAgICB0aGlzLmNvbHVtbnMgPSBbW11dO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jb2x1bW5zU25hcHNob3RbMF0uZm9yRWFjaChvID0+IChpc0NoaWxkT3B0aW9uKG8pID8gbG9vcENoaWxkKG8pIDogbG9vcFBhcmVudChvKSkpO1xyXG5cclxuICAgIGlmIChzb3J0ZXIpIHtcclxuICAgICAgcmVzdWx0cy5zb3J0KChhLCBiKSA9PiBzb3J0ZXIoYS5wYXRoLCBiLnBhdGgsIHNlYXJjaFZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jb2x1bW5zID0gW3Jlc3VsdHNdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVG9nZ2xlIHNlYXJjaGluZyBtb2RlIGJ5IFVJLiBJdCBkZWFscyB3aXRoIHRoaW5ncyBub3QgZGlyZWN0bHkgcmVsYXRlZCB0byBVSS5cclxuICAgKiBAcGFyYW0gdG9TZWFyY2hpbmcgSWYgdGhpcyBjYXNjYWRlciBpcyBlbnRlcmluZyBzZWFyY2hpbmcgbW9kZVxyXG4gICAqL1xyXG4gIHRvZ2dsZVNlYXJjaGluZ01vZGUodG9TZWFyY2hpbmc6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuaW5TZWFyY2hpbmdNb2RlID0gdG9TZWFyY2hpbmc7XHJcblxyXG4gICAgaWYgKHRvU2VhcmNoaW5nKSB7XHJcbiAgICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9uc1NuYXBzaG90ID0gWy4uLnRoaXMuYWN0aXZhdGVkT3B0aW9uc107XHJcbiAgICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9ucyA9IFtdO1xyXG4gICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IFtdO1xyXG4gICAgICB0aGlzLiRyZWRyYXcubmV4dCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gVXNlciBxdWl0IHNlYXJjaGluZyBtb2RlIHdpdGhvdXQgc2VsZWN0aW5nIGFuIG9wdGlvbi5cclxuICAgICAgdGhpcy5hY3RpdmF0ZWRPcHRpb25zID0gWy4uLnRoaXMuYWN0aXZhdGVkT3B0aW9uc1NuYXBzaG90XTtcclxuICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSBbLi4udGhpcy5hY3RpdmF0ZWRPcHRpb25zXTtcclxuICAgICAgdGhpcy5jb2x1bW5zID0gWy4uLnRoaXMuY29sdW1uc1NuYXBzaG90XTtcclxuICAgICAgdGhpcy5zeW5jT3B0aW9ucygpO1xyXG4gICAgICB0aGlzLiRyZWRyYXcubmV4dCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2xlYXIgc2VsZWN0ZWQgb3B0aW9ucy5cclxuICAgKi9cclxuICBjbGVhcigpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWVzID0gW107XHJcbiAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IFtdO1xyXG4gICAgdGhpcy5hY3RpdmF0ZWRPcHRpb25zID0gW107XHJcbiAgICB0aGlzLmRyb3BCZWhpbmRDb2x1bW5zKDApO1xyXG4gICAgdGhpcy5wcmVwYXJlRW1pdFZhbHVlKCk7XHJcbiAgICB0aGlzLiRyZWRyYXcubmV4dCgpO1xyXG4gICAgdGhpcy4kb3B0aW9uU2VsZWN0ZWQubmV4dChudWxsKTtcclxuICB9XHJcblxyXG4gIGdldE9wdGlvbkxhYmVsKG86IE56Q2FzY2FkZXJPcHRpb24pOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIG9bdGhpcy5jYXNjYWRlckNvbXBvbmVudC5uekxhYmVsUHJvcGVydHkgfHwgJ2xhYmVsJ10gYXMgc3RyaW5nO1xyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIGdldE9wdGlvblZhbHVlKG86IE56Q2FzY2FkZXJPcHRpb24pOiBhbnkge1xyXG4gICAgcmV0dXJuIG9bdGhpcy5jYXNjYWRlckNvbXBvbmVudC5uelZhbHVlUHJvcGVydHkgfHwgJ3ZhbHVlJ107XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUcnkgdG8gaW5zZXJ0IG9wdGlvbnMgaW50byBhIGNvbHVtbi5cclxuICAgKiBAcGFyYW0gb3B0aW9ucyBPcHRpb25zIHRvIGluc2VydFxyXG4gICAqIEBwYXJhbSBjb2x1bW5JbmRleCBQb3NpdGlvblxyXG4gICAqL1xyXG4gIHByaXZhdGUgc2V0Q29sdW1uRGF0YShvcHRpb25zOiBOekNhc2NhZGVyT3B0aW9uW10sIGNvbHVtbkluZGV4OiBudW1iZXIsIHBhcmVudDogTnpDYXNjYWRlck9wdGlvbik6IHZvaWQge1xyXG4gICAgY29uc3QgZXhpc3RpbmdPcHRpb25zID0gdGhpcy5jb2x1bW5zW2NvbHVtbkluZGV4XTtcclxuICAgIGlmICghYXJyYXlzRXF1YWwoZXhpc3RpbmdPcHRpb25zLCBvcHRpb25zKSkge1xyXG4gICAgICBvcHRpb25zLmZvckVhY2gobyA9PiAoby5wYXJlbnQgPSBwYXJlbnQpKTtcclxuICAgICAgdGhpcy5jb2x1bW5zW2NvbHVtbkluZGV4XSA9IG9wdGlvbnM7XHJcbiAgICAgIHRoaXMuZHJvcEJlaGluZENvbHVtbnMoY29sdW1uSW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IGFsbCBhbmNlc3RvciBvcHRpb25zIGFzIGFjdGl2YXRlZC5cclxuICAgKi9cclxuICBwcml2YXRlIHRyYWNrQW5jZXN0b3JBY3RpdmF0ZWRPcHRpb25zKHN0YXJ0SW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0SW5kZXggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICBpZiAoIXRoaXMuYWN0aXZhdGVkT3B0aW9uc1tpXSkge1xyXG4gICAgICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9uc1tpXSA9IHRoaXMuYWN0aXZhdGVkT3B0aW9uc1tpICsgMV0ucGFyZW50ITtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkcm9wQmVoaW5kQWN0aXZhdGVkT3B0aW9ucyhsYXN0UmVzZXJ2ZUluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9ucyA9IHRoaXMuYWN0aXZhdGVkT3B0aW9ucy5zcGxpY2UoMCwgbGFzdFJlc2VydmVJbmRleCArIDEpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkcm9wQmVoaW5kQ29sdW1ucyhsYXN0UmVzZXJ2ZUluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmIChsYXN0UmVzZXJ2ZUluZGV4IDwgdGhpcy5jb2x1bW5zLmxlbmd0aCAtIDEpIHtcclxuICAgICAgdGhpcy5jb2x1bW5zID0gdGhpcy5jb2x1bW5zLnNsaWNlKDAsIGxhc3RSZXNlcnZlSW5kZXggKyAxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExvYWQgY2hpbGRyZW4gb2YgYW4gb3B0aW9uIGFzeW5jaHJvbm91c2x5LlxyXG4gICAqL1xyXG4gIGxvYWRDaGlsZHJlbihcclxuICAgIG9wdGlvbjogTnpDYXNjYWRlck9wdGlvbiB8IGFueSwgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcclxuICAgIGNvbHVtbkluZGV4OiBudW1iZXIsXHJcbiAgICBzdWNjZXNzPzogVm9pZEZ1bmN0aW9uLFxyXG4gICAgZmFpbHVyZT86IFZvaWRGdW5jdGlvblxyXG4gICk6IHZvaWQge1xyXG4gICAgY29uc3QgbG9hZEZuID0gdGhpcy5jYXNjYWRlckNvbXBvbmVudC5uekxvYWREYXRhO1xyXG5cclxuICAgIGlmIChsb2FkRm4pIHtcclxuICAgICAgLy8gSWYgdGhlcmUgaXNuJ3QgYW55IG9wdGlvbiBpbiBjb2x1bW5zLlxyXG4gICAgICB0aGlzLiRsb2FkaW5nLm5leHQoY29sdW1uSW5kZXggPCAwKTtcclxuXHJcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9uID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIG9wdGlvbi5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbG9hZEZuKG9wdGlvbiwgY29sdW1uSW5kZXgpLnRoZW4oXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgb3B0aW9uLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIGlmIChvcHRpb24uY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRDb2x1bW5EYXRhKG9wdGlvbi5jaGlsZHJlbiwgY29sdW1uSW5kZXggKyAxLCBvcHRpb24pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgc3VjY2VzcygpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy4kbG9hZGluZy5uZXh0KGZhbHNlKTtcclxuICAgICAgICAgIHRoaXMuJHJlZHJhdy5uZXh0KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICBvcHRpb24ubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgb3B0aW9uLmlzTGVhZiA9IHRydWU7XHJcbiAgICAgICAgICBpZiAoZmFpbHVyZSkge1xyXG4gICAgICAgICAgICBmYWlsdXJlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLiRyZWRyYXcubmV4dCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNMb2FkZWQoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29sdW1uc1tpbmRleF0gJiYgdGhpcy5jb2x1bW5zW2luZGV4XS5sZW5ndGggPiAwO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmluZCBhIG9wdGlvbiB0aGF0IGhhcyBhIGdpdmVuIHZhbHVlIGluIGEgZ2l2ZW4gY29sdW1uLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgZmluZE9wdGlvbldpdGhWYWx1ZShcclxuICAgIGNvbHVtbkluZGV4OiBudW1iZXIsXHJcbiAgICB2YWx1ZTogTnpDYXNjYWRlck9wdGlvbiB8IGFueSAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxyXG4gICk6IE56Q2FzY2FkZXJPcHRpb24gfCBudWxsIHtcclxuICAgIGNvbnN0IHRhcmdldENvbHVtbiA9IHRoaXMuY29sdW1uc1tjb2x1bW5JbmRleF07XHJcbiAgICBpZiAodGFyZ2V0Q29sdW1uKSB7XHJcbiAgICAgIGNvbnN0IHYgPSB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnID8gdGhpcy5nZXRPcHRpb25WYWx1ZSh2YWx1ZSkgOiB2YWx1ZTtcclxuICAgICAgcmV0dXJuIHRhcmdldENvbHVtbi5maW5kKG8gPT4gdiA9PT0gdGhpcy5nZXRPcHRpb25WYWx1ZShvKSkhO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHByZXBhcmVFbWl0VmFsdWUoKTogdm9pZCB7XHJcbiAgICB0aGlzLnZhbHVlcyA9IHRoaXMuc2VsZWN0ZWRPcHRpb25zLm1hcChvID0+IHRoaXMuZ2V0T3B0aW9uVmFsdWUobykpO1xyXG4gIH1cclxufVxyXG4iXX0=