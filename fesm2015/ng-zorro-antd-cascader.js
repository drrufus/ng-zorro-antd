import { __decorate, __metadata } from 'tslib';
import { DOWN_ARROW, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, ENTER, BACKSPACE, ESCAPE } from '@angular/cdk/keycodes';
import { CdkConnectedOverlay, CdkOverlayOrigin, OverlayModule } from '@angular/cdk/overlay';
import { ɵɵelementContainerStart, ɵɵtemplate, ɵɵelementContainerEnd, ɵɵnextContext, ɵɵadvance, ɵɵproperty, ɵɵpureFunction2, ɵɵelement, ɵɵpipe, ɵɵpipeBind4, ɵɵsanitizeHtml, ɵɵelementStart, ɵɵelementEnd, ɵɵdirectiveInject, ChangeDetectorRef, ElementRef, Renderer2, ɵɵdefineComponent, ɵɵallocHostVars, ɵɵattribute, ɵɵclassProp, ɵɵtemplateRefExtractor, ɵɵreference, ɵsetClassMetadata, Component, ChangeDetectionStrategy, ViewEncapsulation, Input, ɵɵdefineInjectable, Injectable, ɵɵgetCurrentView, ɵɵlistener, ɵɵrestoreView, ɵɵtext, ɵɵtextInterpolate, ɵɵstyleProp, EventEmitter, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵProvidersFeature, forwardRef, ɵɵprojectionDef, ɵɵprojection, Host, Optional, ViewChild, ViewChildren, Output, HostListener, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, DefaultValueAccessor, NgControlStatus, NgModel, FormsModule } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil, startWith } from 'rxjs/operators';
import { NzHighlightPipe, isNotNil, arraysEqual, DEFAULT_DROPDOWN_POSITIONS, warnDeprecation, toArray, NzConfigService, NzNoAnimationDirective, NzConnectedOverlayDirective, slideMotion, InputBoolean, WithConfig, NzAddOnModule, NzHighlightModule, NzNoAnimationModule, NzOverlayModule } from 'ng-zorro-antd/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { NgIf, NgTemplateOutlet, NgClass, NgStyle, NgForOf, CommonModule } from '@angular/common';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputDirective, NzInputModule } from 'ng-zorro-antd/input';
import { NzEmbedEmptyComponent, NzEmptyModule } from 'ng-zorro-antd/empty';

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function isShowSearchObject(options) {
    return typeof options !== 'boolean';
}

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function isChildOption(o) {
    return o.isLeaf || !o.children || !o.children.length;
}
function isParentOption(o) {
    return !!o.children && !!o.children.length && !o.isLeaf;
}

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const _c0 = ["nz-cascader-option", ""];
function NzCascaderOptionComponent_ng_container_0_ng_template_1_Template(rf, ctx) { }
const _c1 = function (a0, a1) { return { $implicit: a0, index: a1 }; };
function NzCascaderOptionComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzCascaderOptionComponent_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 3);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1034 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r1034.optionTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c1, ctx_r1034.option, ctx_r1034.columnIndex));
} }
function NzCascaderOptionComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "span", 4);
    ɵɵpipe(1, "nzHighlight");
} if (rf & 2) {
    const ctx_r1036 = ɵɵnextContext();
    ɵɵproperty("innerHTML", ɵɵpipeBind4(1, 1, ctx_r1036.optionLabel, ctx_r1036.highlightText, "g", "ant-cascader-menu-item-keyword"), ɵɵsanitizeHtml);
} }
function NzCascaderOptionComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵelement(1, "i", 6);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1037 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("nzType", ctx_r1037.option.loading ? "loading" : "right");
} }
class NzCascaderOptionComponent {
    constructor(cdr, elementRef, renderer) {
        this.cdr = cdr;
        this.optionTemplate = null;
        this.activated = false;
        this.nzLabelProperty = 'label';
        renderer.addClass(elementRef.nativeElement, 'ant-cascader-menu-item');
    }
    get optionLabel() {
        return this.option[this.nzLabelProperty];
    }
    markForCheck() {
        this.cdr.markForCheck();
    }
}
/** @nocollapse */ NzCascaderOptionComponent.ɵfac = function NzCascaderOptionComponent_Factory(t) { return new (t || NzCascaderOptionComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2)); };
/** @nocollapse */ NzCascaderOptionComponent.ɵcmp = ɵɵdefineComponent({ type: NzCascaderOptionComponent, selectors: [["", "nz-cascader-option", ""]], hostBindings: function NzCascaderOptionComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        ɵɵallocHostVars(4);
    } if (rf & 2) {
        ɵɵattribute("title", ctx.option.title || ctx.optionLabel);
        ɵɵclassProp("ant-cascader-menu-item-active", ctx.activated)("ant-cascader-menu-item-expand", !ctx.option.isLeaf)("ant-cascader-menu-item-disabled", ctx.option.disabled);
    } }, inputs: { optionTemplate: "optionTemplate", option: "option", activated: "activated", highlightText: "highlightText", nzLabelProperty: "nzLabelProperty", columnIndex: "columnIndex" }, exportAs: ["nzCascaderOption"], attrs: _c0, decls: 4, vars: 3, consts: [[4, "ngIf", "ngIfElse"], ["defaultOptionTemplate", ""], ["class", "ant-cascader-menu-item-expand-icon", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "innerHTML"], [1, "ant-cascader-menu-item-expand-icon"], ["nz-icon", "", 3, "nzType"]], template: function NzCascaderOptionComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, NzCascaderOptionComponent_ng_container_0_Template, 2, 5, "ng-container", 0);
        ɵɵtemplate(1, NzCascaderOptionComponent_ng_template_1_Template, 2, 6, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        ɵɵtemplate(3, NzCascaderOptionComponent_span_3_Template, 2, 1, "span", 2);
    } if (rf & 2) {
        const _r1035 = ɵɵreference(2);
        ɵɵproperty("ngIf", ctx.optionTemplate)("ngIfElse", _r1035);
        ɵɵadvance(3);
        ɵɵproperty("ngIf", !ctx.option.isLeaf || (ctx.option.children == null ? null : ctx.option.children.length) || ctx.option.loading);
    } }, directives: [NgIf, NgTemplateOutlet, NzIconDirective], pipes: [NzHighlightPipe], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzCascaderOptionComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: '[nz-cascader-option]',
                exportAs: 'nzCascaderOption',
                templateUrl: './nz-cascader-li.component.html',
                host: {
                    '[attr.title]': 'option.title || optionLabel',
                    '[class.ant-cascader-menu-item-active]': 'activated',
                    '[class.ant-cascader-menu-item-expand]': '!option.isLeaf',
                    '[class.ant-cascader-menu-item-disabled]': 'option.disabled'
                }
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: Renderer2 }]; }, { optionTemplate: [{
            type: Input
        }], option: [{
            type: Input
        }], activated: [{
            type: Input
        }], highlightText: [{
            type: Input
        }], nzLabelProperty: [{
            type: Input
        }], columnIndex: [{
            type: Input
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * All data is stored and parsed in NzCascaderService.
 */
class NzCascaderService {
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
/** @nocollapse */ NzCascaderService.ɵprov = ɵɵdefineInjectable({ token: NzCascaderService, factory: NzCascaderService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzCascaderService, [{
        type: Injectable
    }], null, null); })();

const _c0$1 = ["input"];
const _c1$1 = ["menu"];
function NzCascaderComponent_div_3_i_3_Template(rf, ctx) { if (rf & 1) {
    const _r1051 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "i", 12);
    ɵɵlistener("click", function NzCascaderComponent_div_3_i_3_Template_i_click_0_listener($event) { ɵɵrestoreView(_r1051); const ctx_r1050 = ɵɵnextContext(2); return ctx_r1050.clearSelection($event); });
    ɵɵelementEnd();
} }
function NzCascaderComponent_div_3_i_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 13);
} if (rf & 2) {
    const ctx_r1045 = ɵɵnextContext(2);
    ɵɵclassProp("ant-cascader-picker-arrow-expand", ctx_r1045.menuVisible);
} }
function NzCascaderComponent_div_3_i_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 14);
} }
function NzCascaderComponent_div_3_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1047 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r1047.labelRenderText);
} }
function NzCascaderComponent_div_3_ng_template_8_ng_template_0_Template(rf, ctx) { }
function NzCascaderComponent_div_3_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, NzCascaderComponent_div_3_ng_template_8_ng_template_0_Template, 0, 0, "ng-template", 15);
} if (rf & 2) {
    const ctx_r1049 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1049.nzLabelRender)("ngTemplateOutletContext", ctx_r1049.labelRenderContext);
} }
function NzCascaderComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r1054 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "input", 4, 5);
    ɵɵlistener("ngModelChange", function NzCascaderComponent_div_3_Template_input_ngModelChange_1_listener($event) { ɵɵrestoreView(_r1054); const ctx_r1053 = ɵɵnextContext(); return ctx_r1053.inputValue = $event; })("blur", function NzCascaderComponent_div_3_Template_input_blur_1_listener($event) { ɵɵrestoreView(_r1054); const ctx_r1055 = ɵɵnextContext(); return ctx_r1055.handleInputBlur(); })("focus", function NzCascaderComponent_div_3_Template_input_focus_1_listener($event) { ɵɵrestoreView(_r1054); const ctx_r1056 = ɵɵnextContext(); return ctx_r1056.handleInputFocus(); })("change", function NzCascaderComponent_div_3_Template_input_change_1_listener($event) { ɵɵrestoreView(_r1054); return $event.stopPropagation(); });
    ɵɵelementEnd();
    ɵɵtemplate(3, NzCascaderComponent_div_3_i_3_Template, 1, 0, "i", 6);
    ɵɵtemplate(4, NzCascaderComponent_div_3_i_4_Template, 1, 1, "i", 7);
    ɵɵtemplate(5, NzCascaderComponent_div_3_i_5_Template, 1, 0, "i", 8);
    ɵɵelementStart(6, "span", 9);
    ɵɵtemplate(7, NzCascaderComponent_div_3_ng_container_7_Template, 2, 1, "ng-container", 10);
    ɵɵtemplate(8, NzCascaderComponent_div_3_ng_template_8_Template, 1, 2, "ng-template", null, 11, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const _r1048 = ɵɵreference(9);
    const ctx_r1041 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵclassProp("ant-cascader-input-disabled", ctx_r1041.nzDisabled)("ant-cascader-input-lg", ctx_r1041.nzSize === "large")("ant-cascader-input-sm", ctx_r1041.nzSize === "small");
    ɵɵproperty("readonly", !ctx_r1041.nzShowSearch)("disabled", ctx_r1041.nzDisabled)("nzSize", ctx_r1041.nzSize)("ngModel", ctx_r1041.inputValue);
    ɵɵattribute("autoComplete", "off")("placeholder", ctx_r1041.showPlaceholder ? ctx_r1041.nzPlaceHolder || (ctx_r1041.locale == null ? null : ctx_r1041.locale.placeholder) : null)("autofocus", ctx_r1041.nzAutoFocus ? "autofocus" : null);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1041.clearIconVisible);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1041.nzShowArrow && !ctx_r1041.isLoading);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1041.isLoading);
    ɵɵadvance(1);
    ɵɵclassProp("ant-cascader-show-search", !!ctx_r1041.nzShowSearch)("ant-focusd", !!ctx_r1041.nzShowSearch && ctx_r1041.isFocused && !ctx_r1041.inputValue);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r1041.isLabelRenderTemplate)("ngIfElse", _r1048);
} }
function NzCascaderComponent_ng_template_5_div_0_ul_2_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r1068 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 23);
    ɵɵlistener("mouseenter", function NzCascaderComponent_ng_template_5_div_0_ul_2_li_1_Template_li_mouseenter_0_listener($event) { ɵɵrestoreView(_r1068); const option_r1065 = ctx.$implicit; const i_r1062 = ɵɵnextContext().index; const ctx_r1066 = ɵɵnextContext(3); return ctx_r1066.onOptionMouseEnter(option_r1065, i_r1062, $event); })("mouseleave", function NzCascaderComponent_ng_template_5_div_0_ul_2_li_1_Template_li_mouseleave_0_listener($event) { ɵɵrestoreView(_r1068); const option_r1065 = ctx.$implicit; const i_r1062 = ɵɵnextContext().index; const ctx_r1069 = ɵɵnextContext(3); return ctx_r1069.onOptionMouseLeave(option_r1065, i_r1062, $event); })("click", function NzCascaderComponent_ng_template_5_div_0_ul_2_li_1_Template_li_click_0_listener($event) { ɵɵrestoreView(_r1068); const option_r1065 = ctx.$implicit; const i_r1062 = ɵɵnextContext().index; const ctx_r1071 = ɵɵnextContext(3); return ctx_r1071.onOptionClick(option_r1065, i_r1062, $event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const option_r1065 = ctx.$implicit;
    const i_r1062 = ɵɵnextContext().index;
    const ctx_r1063 = ɵɵnextContext(3);
    ɵɵproperty("columnIndex", i_r1062)("nzLabelProperty", ctx_r1063.nzLabelProperty)("optionTemplate", ctx_r1063.nzOptionRender)("activated", ctx_r1063.isOptionActivated(option_r1065, i_r1062))("highlightText", ctx_r1063.inSearchingMode ? ctx_r1063.inputValue : "")("option", option_r1065);
} }
function NzCascaderComponent_ng_template_5_div_0_ul_2_li_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li", 24);
    ɵɵelement(1, "nz-embed-empty", 25);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1064 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵproperty("nzComponentName", "cascader")("specificContent", ctx_r1064.nzNotFoundContent);
} }
function NzCascaderComponent_ng_template_5_div_0_ul_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "ul", 20);
    ɵɵtemplate(1, NzCascaderComponent_ng_template_5_div_0_ul_2_li_1_Template, 1, 6, "li", 21);
    ɵɵtemplate(2, NzCascaderComponent_ng_template_5_div_0_ul_2_li_2_Template, 2, 2, "li", 22);
    ɵɵelementEnd();
} if (rf & 2) {
    const options_r1061 = ctx.$implicit;
    const ctx_r1060 = ɵɵnextContext(3);
    ɵɵstyleProp("height", ctx_r1060.inSearchingMode && !ctx_r1060.cascaderService.columns[0].length ? "auto" : "")("width", ctx_r1060.dropdownWidthStyle);
    ɵɵproperty("ngClass", ctx_r1060.menuColumnCls);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", options_r1061);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1060.inSearchingMode && !ctx_r1060.cascaderService.columns[0].length);
} }
function NzCascaderComponent_ng_template_5_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r1075 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 17, 18);
    ɵɵlistener("mouseleave", function NzCascaderComponent_ng_template_5_div_0_Template_div_mouseleave_0_listener($event) { ɵɵrestoreView(_r1075); const ctx_r1074 = ɵɵnextContext(2); return ctx_r1074.onTriggerMouseLeave($event); });
    ɵɵtemplate(2, NzCascaderComponent_ng_template_5_div_0_ul_2_Template, 3, 5, "ul", 19);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1058 = ɵɵnextContext(2);
    ɵɵclassProp("ant-cascader-menus-hidden", !ctx_r1058.menuVisible);
    ɵɵproperty("ngClass", ctx_r1058.menuCls)("ngStyle", ctx_r1058.nzMenuStyle)("@.disabled", ctx_r1058.noAnimation == null ? null : ctx_r1058.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r1058.noAnimation == null ? null : ctx_r1058.noAnimation.nzNoAnimation)("@slideMotion", ctx_r1058.dropDownPosition);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r1058.cascaderService.columns);
} }
function NzCascaderComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, NzCascaderComponent_ng_template_5_div_0_Template, 3, 7, "div", 16);
} if (rf & 2) {
    const ctx_r1042 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r1042.nzOptions && ctx_r1042.nzOptions.length || ctx_r1042.inSearchingMode);
} }
const _c2 = ["*"];
const NZ_CONFIG_COMPONENT_NAME = 'cascader';
const defaultDisplayRender = (labels) => labels.join(' / ');
class NzCascaderComponent {
    constructor(cascaderService, i18nService, nzConfigService, cdr, elementRef, renderer, noAnimation) {
        this.cascaderService = cascaderService;
        this.i18nService = i18nService;
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.noAnimation = noAnimation;
        this.nzOptionRender = null;
        this.nzShowInput = true;
        this.nzShowArrow = true;
        this.nzAllowClear = true;
        this.nzAutoFocus = false;
        this.nzChangeOnSelect = false;
        this.nzDisabled = false;
        this.nzExpandTrigger = 'click';
        this.nzValueProperty = 'value';
        this.nzLabelProperty = 'label';
        this.nzMouseEnterDelay = 150; // ms
        this.nzMouseLeaveDelay = 150; // ms
        this.nzTriggerAction = ['click'];
        this.nzVisibleChange = new EventEmitter();
        this.nzSelectionChange = new EventEmitter();
        /**
         * @deprecated 9.0.0. This api is a duplication of `ngModelChange`.
         */
        this.nzSelect = new EventEmitter();
        this.nzClear = new EventEmitter();
        this.dropDownPosition = 'bottom';
        this.menuVisible = false;
        this.isLoading = false;
        this.labelRenderContext = {};
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.positions = [...DEFAULT_DROPDOWN_POSITIONS];
        this.isFocused = false;
        this.$destroy = new Subject();
        this.inputString = '';
        this.isOpening = false;
        this.el = elementRef.nativeElement;
        this.cascaderService.withComponent(this);
        renderer.addClass(elementRef.nativeElement, 'ant-cascader');
        renderer.addClass(elementRef.nativeElement, 'ant-cascader-picker');
    }
    get nzOptions() {
        return this.cascaderService.nzOptions;
    }
    set nzOptions(options) {
        this.cascaderService.withOptions(options);
    }
    get inSearchingMode() {
        return this.cascaderService.inSearchingMode;
    }
    set inputValue(inputValue) {
        this.inputString = inputValue;
        this.toggleSearchingMode(!!inputValue);
    }
    get inputValue() {
        return this.inputString;
    }
    get menuCls() {
        return { [`${this.nzMenuClassName}`]: !!this.nzMenuClassName };
    }
    get menuColumnCls() {
        return { [`${this.nzColumnClassName}`]: !!this.nzColumnClassName };
    }
    get hasInput() {
        return !!this.inputValue;
    }
    get hasValue() {
        return this.cascaderService.values && this.cascaderService.values.length > 0;
    }
    get showPlaceholder() {
        return !(this.hasInput || this.hasValue);
    }
    get clearIconVisible() {
        return this.nzAllowClear && !this.nzDisabled && (this.hasValue || this.hasInput);
    }
    get isLabelRenderTemplate() {
        return !!this.nzLabelRender;
    }
    ngOnInit() {
        const srv = this.cascaderService;
        srv.$redraw.pipe(takeUntil(this.$destroy)).subscribe(() => {
            // These operations would not mutate data.
            this.checkChildren();
            this.buildDisplayLabel();
            this.reposition();
            this.cdr.markForCheck();
        });
        srv.$loading.pipe(takeUntil(this.$destroy)).subscribe(loading => {
            this.isLoading = loading;
        });
        srv.$optionSelected.pipe(takeUntil(this.$destroy)).subscribe(data => {
            if (!data) {
                this.onChange([]);
                this.nzSelect.emit(null);
                this.nzSelectionChange.emit([]);
            }
            else {
                const { option, index } = data;
                const shouldClose = option.isLeaf;
                if (shouldClose) {
                    this.delaySetMenuVisible(false);
                }
                this.onChange(this.cascaderService.values);
                this.nzSelectionChange.emit(this.cascaderService.selectedOptions);
                this.nzSelect.emit({ option, index });
                this.cdr.markForCheck();
            }
        });
        srv.$quitSearching.pipe(takeUntil(this.$destroy)).subscribe(() => {
            this.inputString = '';
            this.dropdownWidthStyle = '';
        });
        this.i18nService.localeChange.pipe(startWith(), takeUntil(this.$destroy)).subscribe(() => {
            this.setLocale();
        });
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(takeUntil(this.$destroy))
            .subscribe(() => {
            this.cdr.markForCheck();
        });
        if (this.nzSelect.observers.length > 0) {
            warnDeprecation(`nzSelect is deprecated and will be removed in 9.0.0. Please use 'nzSelectionChange' instead.`);
        }
    }
    ngOnDestroy() {
        this.$destroy.next();
        this.$destroy.complete();
        this.clearDelayMenuTimer();
        this.clearDelaySelectTimer();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    // tslint:disable-next-line:no-any
    writeValue(value) {
        this.cascaderService.values = toArray(value);
        this.cascaderService.syncOptions(true);
    }
    delaySetMenuVisible(visible, delay = 100, setOpening = false) {
        this.clearDelayMenuTimer();
        if (delay) {
            if (visible && setOpening) {
                this.isOpening = true;
            }
            this.delayMenuTimer = setTimeout(() => {
                this.setMenuVisible(visible);
                this.cdr.detectChanges();
                this.clearDelayMenuTimer();
                if (visible) {
                    setTimeout(() => {
                        this.isOpening = false;
                    }, 100);
                }
            }, delay);
        }
        else {
            this.setMenuVisible(visible);
        }
    }
    setMenuVisible(visible) {
        if (this.nzDisabled || this.menuVisible === visible) {
            return;
        }
        if (visible) {
            this.cascaderService.syncOptions();
        }
        this.menuVisible = visible;
        this.nzVisibleChange.emit(visible);
        this.cdr.detectChanges();
    }
    clearDelayMenuTimer() {
        if (this.delayMenuTimer) {
            clearTimeout(this.delayMenuTimer);
            this.delayMenuTimer = null;
        }
    }
    clearSelection(event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.labelRenderText = '';
        this.labelRenderContext = {};
        this.inputValue = '';
        this.setMenuVisible(false);
        this.cascaderService.clear();
    }
    // tslint:disable-next-line:no-any
    getSubmitValue() {
        return this.cascaderService.selectedOptions.map(o => this.cascaderService.getOptionValue(o));
    }
    focus() {
        if (!this.isFocused) {
            (this.input ? this.input.nativeElement : this.el).focus();
            this.isFocused = true;
        }
    }
    blur() {
        if (this.isFocused) {
            (this.input ? this.input.nativeElement : this.el).blur();
            this.isFocused = false;
        }
    }
    handleInputBlur() {
        this.menuVisible ? this.focus() : this.blur();
    }
    handleInputFocus() {
        this.focus();
    }
    onKeyDown(event) {
        const keyCode = event.keyCode;
        if (keyCode !== DOWN_ARROW &&
            keyCode !== UP_ARROW &&
            keyCode !== LEFT_ARROW &&
            keyCode !== RIGHT_ARROW &&
            keyCode !== ENTER &&
            keyCode !== BACKSPACE &&
            keyCode !== ESCAPE) {
            return;
        }
        // Press any keys above to reopen menu.
        if (!this.menuVisible && keyCode !== BACKSPACE && keyCode !== ESCAPE) {
            return this.setMenuVisible(true);
        }
        // Make these keys work as default in searching mode.
        if (this.inSearchingMode && (keyCode === BACKSPACE || keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW)) {
            return;
        }
        // Interact with the component.
        if (this.menuVisible) {
            event.preventDefault();
            if (keyCode === DOWN_ARROW) {
                this.moveUpOrDown(false);
            }
            else if (keyCode === UP_ARROW) {
                this.moveUpOrDown(true);
            }
            else if (keyCode === LEFT_ARROW) {
                this.moveLeft();
            }
            else if (keyCode === RIGHT_ARROW) {
                this.moveRight();
            }
            else if (keyCode === ENTER) {
                this.onEnter();
            }
        }
    }
    onTriggerClick() {
        if (this.nzDisabled) {
            return;
        }
        if (this.nzShowSearch) {
            this.focus();
        }
        if (this.isActionTrigger('click')) {
            this.delaySetMenuVisible(!this.menuVisible, 100);
        }
        this.onTouched();
    }
    onTriggerMouseEnter() {
        if (this.nzDisabled || !this.isActionTrigger('hover')) {
            return;
        }
        this.delaySetMenuVisible(true, this.nzMouseEnterDelay, true);
    }
    onTriggerMouseLeave(event) {
        if (this.nzDisabled || !this.menuVisible || this.isOpening || !this.isActionTrigger('hover')) {
            event.preventDefault();
            return;
        }
        const mouseTarget = event.relatedTarget;
        const hostEl = this.el;
        const menuEl = this.menu && this.menu.nativeElement;
        if (hostEl.contains(mouseTarget) || (menuEl && menuEl.contains(mouseTarget))) {
            return;
        }
        this.delaySetMenuVisible(false, this.nzMouseLeaveDelay);
    }
    onOptionMouseEnter(option, columnIndex, event) {
        event.preventDefault();
        if (this.nzExpandTrigger === 'hover') {
            if (!option.isLeaf) {
                this.delaySetOptionActivated(option, columnIndex, false);
            }
            else {
                this.cascaderService.setOptionDeactivatedSinceColumn(columnIndex);
            }
        }
    }
    onOptionMouseLeave(option, _columnIndex, event) {
        event.preventDefault();
        if (this.nzExpandTrigger === 'hover' && !option.isLeaf) {
            this.clearDelaySelectTimer();
        }
    }
    onOptionClick(option, columnIndex, event) {
        if (event) {
            event.preventDefault();
        }
        if (option && option.disabled) {
            return;
        }
        this.el.focus();
        this.inSearchingMode
            ? this.cascaderService.setSearchOptionSelected(option)
            : this.cascaderService.setOptionActivated(option, columnIndex, true);
    }
    isActionTrigger(action) {
        return typeof this.nzTriggerAction === 'string' ? this.nzTriggerAction === action : this.nzTriggerAction.indexOf(action) !== -1;
    }
    onEnter() {
        const columnIndex = Math.max(this.cascaderService.activatedOptions.length - 1, 0);
        const option = this.cascaderService.activatedOptions[columnIndex];
        if (option && !option.disabled) {
            this.inSearchingMode
                ? this.cascaderService.setSearchOptionSelected(option)
                : this.cascaderService.setOptionActivated(option, columnIndex, true);
        }
    }
    moveUpOrDown(isUp) {
        const columnIndex = Math.max(this.cascaderService.activatedOptions.length - 1, 0);
        const activeOption = this.cascaderService.activatedOptions[columnIndex];
        const options = this.cascaderService.columns[columnIndex] || [];
        const length = options.length;
        let nextIndex = -1;
        if (!activeOption) {
            // Not selected options in this column
            nextIndex = isUp ? length : -1;
        }
        else {
            nextIndex = options.indexOf(activeOption);
        }
        while (true) {
            nextIndex = isUp ? nextIndex - 1 : nextIndex + 1;
            if (nextIndex < 0 || nextIndex >= length) {
                break;
            }
            const nextOption = options[nextIndex];
            if (!nextOption || nextOption.disabled) {
                continue;
            }
            this.cascaderService.setOptionActivated(nextOption, columnIndex);
            break;
        }
    }
    moveLeft() {
        const options = this.cascaderService.activatedOptions;
        if (options.length) {
            options.pop(); // Remove the last one
        }
    }
    moveRight() {
        const length = this.cascaderService.activatedOptions.length;
        const options = this.cascaderService.columns[length];
        if (options && options.length) {
            const nextOpt = options.find(o => !o.disabled);
            if (nextOpt) {
                this.cascaderService.setOptionActivated(nextOpt, length);
            }
        }
    }
    clearDelaySelectTimer() {
        if (this.delaySelectTimer) {
            clearTimeout(this.delaySelectTimer);
            this.delaySelectTimer = null;
        }
    }
    delaySetOptionActivated(option, columnIndex, performSelect) {
        this.clearDelaySelectTimer();
        this.delaySelectTimer = setTimeout(() => {
            this.cascaderService.setOptionActivated(option, columnIndex, performSelect);
            this.delaySelectTimer = null;
        }, 150);
    }
    toggleSearchingMode(toSearching) {
        if (this.inSearchingMode !== toSearching) {
            this.cascaderService.toggleSearchingMode(toSearching);
            this.dropdownWidthStyle = toSearching ? `${this.input.nativeElement.offsetWidth}px` : '';
        }
        if (this.inSearchingMode) {
            this.cascaderService.prepareSearchOptions(this.inputValue);
        }
    }
    isOptionActivated(option, index) {
        const activeOpt = this.cascaderService.activatedOptions[index];
        return activeOpt === option;
    }
    setDisabledState(isDisabled) {
        if (isDisabled) {
            this.closeMenu();
        }
        this.nzDisabled = isDisabled;
    }
    closeMenu() {
        this.blur();
        this.clearDelayMenuTimer();
        this.setMenuVisible(false);
    }
    onPositionChange(position) {
        const newValue = position.connectionPair.originY === 'bottom' ? 'bottom' : 'top';
        if (this.dropDownPosition !== newValue) {
            this.dropDownPosition = newValue;
            this.cdr.detectChanges();
        }
    }
    /**
     * Reposition the cascader panel. When a menu opens, the cascader expands
     * and may exceed the boundary of browser's window.
     */
    reposition() {
        if (this.overlay && this.overlay.overlayRef && this.menuVisible) {
            Promise.resolve().then(() => {
                this.overlay.overlayRef.updatePosition();
            });
        }
    }
    /**
     * When a cascader options is changed, a child needs to know that it should re-render.
     */
    checkChildren() {
        if (this.cascaderItems) {
            this.cascaderItems.forEach(item => item.markForCheck());
        }
    }
    buildDisplayLabel() {
        const selectedOptions = this.cascaderService.selectedOptions;
        const labels = selectedOptions.map(o => this.cascaderService.getOptionLabel(o));
        if (this.isLabelRenderTemplate) {
            this.labelRenderContext = { labels, selectedOptions };
        }
        else {
            this.labelRenderText = defaultDisplayRender.call(this, labels, selectedOptions);
        }
    }
    setLocale() {
        this.locale = this.i18nService.getLocaleData('global');
        this.cdr.markForCheck();
    }
}
/** @nocollapse */ NzCascaderComponent.ɵfac = function NzCascaderComponent_Factory(t) { return new (t || NzCascaderComponent)(ɵɵdirectiveInject(NzCascaderService), ɵɵdirectiveInject(NzI18nService), ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NzNoAnimationDirective, 9)); };
/** @nocollapse */ NzCascaderComponent.ɵcmp = ɵɵdefineComponent({ type: NzCascaderComponent, selectors: [["nz-cascader"], ["", "nz-cascader", ""]], viewQuery: function NzCascaderComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$1, true);
        ɵɵviewQuery(_c1$1, true);
        ɵɵviewQuery(CdkConnectedOverlay, true);
        ɵɵviewQuery(NzCascaderOptionComponent, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.input = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.menu = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.overlay = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cascaderItems = _t);
    } }, hostBindings: function NzCascaderComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        ɵɵallocHostVars(7);
        ɵɵlistener("keydown", function NzCascaderComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); })("click", function NzCascaderComponent_click_HostBindingHandler($event) { return ctx.onTriggerClick(); })("mouseenter", function NzCascaderComponent_mouseenter_HostBindingHandler($event) { return ctx.onTriggerMouseEnter(); })("mouseleave", function NzCascaderComponent_mouseleave_HostBindingHandler($event) { return ctx.onTriggerMouseLeave($event); });
    } if (rf & 2) {
        ɵɵattribute("tabIndex", "0");
        ɵɵclassProp("ant-cascader-lg", ctx.nzSize === "large")("ant-cascader-sm", ctx.nzSize === "small")("ant-cascader-picker-disabled", ctx.nzDisabled)("ant-cascader-picker-open", ctx.menuVisible)("ant-cascader-picker-with-value", !!ctx.inputValue)("ant-cascader-focused", ctx.isFocused);
    } }, inputs: { nzOptionRender: "nzOptionRender", nzShowInput: "nzShowInput", nzShowArrow: "nzShowArrow", nzAllowClear: "nzAllowClear", nzAutoFocus: "nzAutoFocus", nzChangeOnSelect: "nzChangeOnSelect", nzDisabled: "nzDisabled", nzColumnClassName: "nzColumnClassName", nzExpandTrigger: "nzExpandTrigger", nzValueProperty: "nzValueProperty", nzLabelRender: "nzLabelRender", nzLabelProperty: "nzLabelProperty", nzNotFoundContent: "nzNotFoundContent", nzSize: "nzSize", nzShowSearch: "nzShowSearch", nzPlaceHolder: "nzPlaceHolder", nzMenuClassName: "nzMenuClassName", nzMenuStyle: "nzMenuStyle", nzMouseEnterDelay: "nzMouseEnterDelay", nzMouseLeaveDelay: "nzMouseLeaveDelay", nzTriggerAction: "nzTriggerAction", nzChangeOn: "nzChangeOn", nzLoadData: "nzLoadData", nzOptions: "nzOptions" }, outputs: { nzVisibleChange: "nzVisibleChange", nzSelectionChange: "nzSelectionChange", nzSelect: "nzSelect", nzClear: "nzClear" }, exportAs: ["nzCascader"], features: [ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef((() => NzCascaderComponent)),
                multi: true
            },
            NzCascaderService
        ])], ngContentSelectors: _c2, decls: 6, vars: 4, consts: [["cdkOverlayOrigin", ""], ["origin", "cdkOverlayOrigin", "trigger", ""], [4, "ngIf"], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", "cdkConnectedOverlayHasBackdrop", "", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayPositions", "cdkConnectedOverlayOpen", "backdropClick", "detach", "positionChange"], ["nz-input", "", 1, "ant-cascader-input", 3, "readonly", "disabled", "nzSize", "ngModel", "ngModelChange", "blur", "focus", "change"], ["input", ""], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", "class", "ant-cascader-picker-clear", 3, "click", 4, "ngIf"], ["nz-icon", "", "nzType", "down", "class", "ant-cascader-picker-arrow", 3, "ant-cascader-picker-arrow-expand", 4, "ngIf"], ["nz-icon", "", "nzType", "loading", "class", "ant-cascader-picker-arrow", 4, "ngIf"], [1, "ant-cascader-picker-label"], [4, "ngIf", "ngIfElse"], ["labelTemplate", ""], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", 1, "ant-cascader-picker-clear", 3, "click"], ["nz-icon", "", "nzType", "down", 1, "ant-cascader-picker-arrow"], ["nz-icon", "", "nzType", "loading", 1, "ant-cascader-picker-arrow"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "ant-cascader-menus", 3, "ant-cascader-menus-hidden", "ngClass", "ngStyle", "nzNoAnimation", "mouseleave", 4, "ngIf"], [1, "ant-cascader-menus", 3, "ngClass", "ngStyle", "nzNoAnimation", "mouseleave"], ["menu", ""], ["class", "ant-cascader-menu", 3, "ngClass", "height", "width", 4, "ngFor", "ngForOf"], [1, "ant-cascader-menu", 3, "ngClass"], ["nz-cascader-option", "", 3, "columnIndex", "nzLabelProperty", "optionTemplate", "activated", "highlightText", "option", "mouseenter", "mouseleave", "click", 4, "ngFor", "ngForOf"], ["class", "ant-cascader-menu-item ant-cascader-menu-item-expanded ant-cascader-menu-item-disabled", 4, "ngIf"], ["nz-cascader-option", "", 3, "columnIndex", "nzLabelProperty", "optionTemplate", "activated", "highlightText", "option", "mouseenter", "mouseleave", "click"], [1, "ant-cascader-menu-item", "ant-cascader-menu-item-expanded", "ant-cascader-menu-item-disabled"], [3, "nzComponentName", "specificContent"]], template: function NzCascaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 0, 1);
        ɵɵtemplate(3, NzCascaderComponent_div_3_Template, 10, 17, "div", 2);
        ɵɵprojection(4);
        ɵɵelementEnd();
        ɵɵtemplate(5, NzCascaderComponent_ng_template_5_Template, 1, 1, "ng-template", 3);
        ɵɵlistener("backdropClick", function NzCascaderComponent_Template_ng_template_backdropClick_5_listener($event) { return ctx.closeMenu(); })("detach", function NzCascaderComponent_Template_ng_template_detach_5_listener($event) { return ctx.closeMenu(); })("positionChange", function NzCascaderComponent_Template_ng_template_positionChange_5_listener($event) { return ctx.onPositionChange($event); });
    } if (rf & 2) {
        const _r1039 = ɵɵreference(1);
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.nzShowInput);
        ɵɵadvance(2);
        ɵɵproperty("cdkConnectedOverlayOrigin", _r1039)("cdkConnectedOverlayPositions", ctx.positions)("cdkConnectedOverlayOpen", ctx.menuVisible);
    } }, directives: [CdkOverlayOrigin, NgIf, CdkConnectedOverlay, NzConnectedOverlayDirective, DefaultValueAccessor, NzInputDirective, NgControlStatus, NgModel, NzIconDirective, NgTemplateOutlet, NgClass, NgStyle, NzNoAnimationDirective, NgForOf, NzCascaderOptionComponent, NzEmbedEmptyComponent], styles: ["\n      .ant-cascader-menus {\n        margin-top: 4px;\n        margin-bottom: 4px;\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n      }\n    "], encapsulation: 2, data: { animation: [slideMotion] }, changeDetection: 0 });
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzCascaderComponent.prototype, "nzShowInput", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzCascaderComponent.prototype, "nzShowArrow", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzCascaderComponent.prototype, "nzAllowClear", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzCascaderComponent.prototype, "nzAutoFocus", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzCascaderComponent.prototype, "nzChangeOnSelect", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzCascaderComponent.prototype, "nzDisabled", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default'),
    __metadata("design:type", String)
], NzCascaderComponent.prototype, "nzSize", void 0);
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzCascaderComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-cascader, [nz-cascader]',
                exportAs: 'nzCascader',
                preserveWhitespaces: false,
                templateUrl: './nz-cascader.component.html',
                animations: [slideMotion],
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((() => NzCascaderComponent)),
                        multi: true
                    },
                    NzCascaderService
                ],
                host: {
                    '[attr.tabIndex]': '"0"',
                    '[class.ant-cascader-lg]': 'nzSize === "large"',
                    '[class.ant-cascader-sm]': 'nzSize === "small"',
                    '[class.ant-cascader-picker-disabled]': 'nzDisabled',
                    '[class.ant-cascader-picker-open]': 'menuVisible',
                    '[class.ant-cascader-picker-with-value]': '!!inputValue',
                    '[class.ant-cascader-focused]': 'isFocused'
                },
                styles: [
                    `
      .ant-cascader-menus {
        margin-top: 4px;
        margin-bottom: 4px;
        top: 100%;
        left: 0;
        position: relative;
        width: 100%;
      }
    `
                ]
            }]
    }], function () { return [{ type: NzCascaderService }, { type: NzI18nService }, { type: NzConfigService }, { type: ChangeDetectorRef }, { type: ElementRef }, { type: Renderer2 }, { type: NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { input: [{
            type: ViewChild,
            args: ['input', { static: false }]
        }], menu: [{
            type: ViewChild,
            args: ['menu', { static: false }]
        }], overlay: [{
            type: ViewChild,
            args: [CdkConnectedOverlay, { static: false }]
        }], cascaderItems: [{
            type: ViewChildren,
            args: [NzCascaderOptionComponent]
        }], nzOptionRender: [{
            type: Input
        }], nzShowInput: [{
            type: Input
        }], nzShowArrow: [{
            type: Input
        }], nzAllowClear: [{
            type: Input
        }], nzAutoFocus: [{
            type: Input
        }], nzChangeOnSelect: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }], nzColumnClassName: [{
            type: Input
        }], nzExpandTrigger: [{
            type: Input
        }], nzValueProperty: [{
            type: Input
        }], nzLabelRender: [{
            type: Input
        }], nzLabelProperty: [{
            type: Input
        }], nzNotFoundContent: [{
            type: Input
        }], nzSize: [{
            type: Input
        }], nzShowSearch: [{
            type: Input
        }], nzPlaceHolder: [{
            type: Input
        }], nzMenuClassName: [{
            type: Input
        }], nzMenuStyle: [{
            type: Input
        }], nzMouseEnterDelay: [{
            type: Input
        }], nzMouseLeaveDelay: [{
            type: Input
        }], nzTriggerAction: [{
            type: Input
        }], nzChangeOn: [{
            type: Input
        }], nzLoadData: [{
            type: Input
        }], nzOptions: [{
            type: Input
        }], nzVisibleChange: [{
            type: Output
        }], nzSelectionChange: [{
            type: Output
        }], nzSelect: [{
            type: Output
        }], nzClear: [{
            type: Output
        }], onKeyDown: [{
            type: HostListener,
            args: ['keydown', ['$event']]
        }], onTriggerClick: [{
            type: HostListener,
            args: ['click']
        }], onTriggerMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }], onTriggerMouseLeave: [{
            type: HostListener,
            args: ['mouseleave', ['$event']]
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzCascaderModule {
}
/** @nocollapse */ NzCascaderModule.ɵmod = ɵɵdefineNgModule({ type: NzCascaderModule });
/** @nocollapse */ NzCascaderModule.ɵinj = ɵɵdefineInjector({ factory: function NzCascaderModule_Factory(t) { return new (t || NzCascaderModule)(); }, imports: [[
            CommonModule,
            FormsModule,
            OverlayModule,
            NzAddOnModule,
            NzEmptyModule,
            NzHighlightModule,
            NzIconModule,
            NzInputModule,
            NzNoAnimationModule,
            NzOverlayModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzCascaderModule, { declarations: [NzCascaderComponent, NzCascaderOptionComponent], imports: [CommonModule,
        FormsModule,
        OverlayModule,
        NzAddOnModule,
        NzEmptyModule,
        NzHighlightModule,
        NzIconModule,
        NzInputModule,
        NzNoAnimationModule,
        NzOverlayModule], exports: [NzCascaderComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzCascaderModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    OverlayModule,
                    NzAddOnModule,
                    NzEmptyModule,
                    NzHighlightModule,
                    NzIconModule,
                    NzInputModule,
                    NzNoAnimationModule,
                    NzOverlayModule
                ],
                declarations: [NzCascaderComponent, NzCascaderOptionComponent],
                exports: [NzCascaderComponent]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NzCascaderComponent, NzCascaderModule, NzCascaderOptionComponent, NzCascaderService, isChildOption, isParentOption, isShowSearchObject };
//# sourceMappingURL=ng-zorro-antd-cascader.js.map
