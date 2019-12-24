import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { BACKSPACE, DOWN_ARROW, ENTER, ESCAPE, LEFT_ARROW, RIGHT_ARROW, UP_ARROW } from '@angular/cdk/keycodes';
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Host, HostListener, Input, Optional, Output, QueryList, Renderer2, TemplateRef, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import { DEFAULT_DROPDOWN_POSITIONS, InputBoolean, NzConfigService, NzNoAnimationDirective, slideMotion, toArray, warnDeprecation, WithConfig } from 'ng-zorro-antd/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { NzCascaderOptionComponent } from './nz-cascader-li.component';
import { NzCascaderService } from './nz-cascader.service';
import * as i0 from "@angular/core";
import * as i1 from "./nz-cascader.service";
import * as i2 from "ng-zorro-antd/i18n";
import * as i3 from "ng-zorro-antd/core";
import * as i4 from "@angular/cdk/overlay";
import * as i5 from "@angular/common";
import * as i6 from "@angular/forms";
import * as i7 from "ng-zorro-antd/input";
import * as i8 from "ng-zorro-antd/icon";
import * as i9 from "./nz-cascader-li.component";
import * as i10 from "ng-zorro-antd/empty";
const _c0 = ["input"];
const _c1 = ["menu"];
function NzCascaderComponent_div_3_i_3_Template(rf, ctx) { if (rf & 1) {
    const _r1051 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 12);
    i0.ɵɵlistener("click", function NzCascaderComponent_div_3_i_3_Template_i_click_0_listener($event) { i0.ɵɵrestoreView(_r1051); const ctx_r1050 = i0.ɵɵnextContext(2); return ctx_r1050.clearSelection($event); });
    i0.ɵɵelementEnd();
} }
function NzCascaderComponent_div_3_i_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 13);
} if (rf & 2) {
    const ctx_r1045 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("ant-cascader-picker-arrow-expand", ctx_r1045.menuVisible);
} }
function NzCascaderComponent_div_3_i_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 14);
} }
function NzCascaderComponent_div_3_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1047 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1047.labelRenderText);
} }
function NzCascaderComponent_div_3_ng_template_8_ng_template_0_Template(rf, ctx) { }
function NzCascaderComponent_div_3_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NzCascaderComponent_div_3_ng_template_8_ng_template_0_Template, 0, 0, "ng-template", 15);
} if (rf & 2) {
    const ctx_r1049 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1049.nzLabelRender)("ngTemplateOutletContext", ctx_r1049.labelRenderContext);
} }
function NzCascaderComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r1054 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "input", 4, 5);
    i0.ɵɵlistener("ngModelChange", function NzCascaderComponent_div_3_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r1054); const ctx_r1053 = i0.ɵɵnextContext(); return ctx_r1053.inputValue = $event; })("blur", function NzCascaderComponent_div_3_Template_input_blur_1_listener($event) { i0.ɵɵrestoreView(_r1054); const ctx_r1055 = i0.ɵɵnextContext(); return ctx_r1055.handleInputBlur(); })("focus", function NzCascaderComponent_div_3_Template_input_focus_1_listener($event) { i0.ɵɵrestoreView(_r1054); const ctx_r1056 = i0.ɵɵnextContext(); return ctx_r1056.handleInputFocus(); })("change", function NzCascaderComponent_div_3_Template_input_change_1_listener($event) { i0.ɵɵrestoreView(_r1054); return $event.stopPropagation(); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, NzCascaderComponent_div_3_i_3_Template, 1, 0, "i", 6);
    i0.ɵɵtemplate(4, NzCascaderComponent_div_3_i_4_Template, 1, 1, "i", 7);
    i0.ɵɵtemplate(5, NzCascaderComponent_div_3_i_5_Template, 1, 0, "i", 8);
    i0.ɵɵelementStart(6, "span", 9);
    i0.ɵɵtemplate(7, NzCascaderComponent_div_3_ng_container_7_Template, 2, 1, "ng-container", 10);
    i0.ɵɵtemplate(8, NzCascaderComponent_div_3_ng_template_8_Template, 1, 2, "ng-template", null, 11, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r1048 = i0.ɵɵreference(9);
    const ctx_r1041 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ant-cascader-input-disabled", ctx_r1041.nzDisabled)("ant-cascader-input-lg", ctx_r1041.nzSize === "large")("ant-cascader-input-sm", ctx_r1041.nzSize === "small");
    i0.ɵɵproperty("readonly", !ctx_r1041.nzShowSearch)("disabled", ctx_r1041.nzDisabled)("nzSize", ctx_r1041.nzSize)("ngModel", ctx_r1041.inputValue);
    i0.ɵɵattribute("autoComplete", "off")("placeholder", ctx_r1041.showPlaceholder ? ctx_r1041.nzPlaceHolder || (ctx_r1041.locale == null ? null : ctx_r1041.locale.placeholder) : null)("autofocus", ctx_r1041.nzAutoFocus ? "autofocus" : null);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1041.clearIconVisible);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1041.nzShowArrow && !ctx_r1041.isLoading);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1041.isLoading);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ant-cascader-show-search", !!ctx_r1041.nzShowSearch)("ant-focusd", !!ctx_r1041.nzShowSearch && ctx_r1041.isFocused && !ctx_r1041.inputValue);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1041.isLabelRenderTemplate)("ngIfElse", _r1048);
} }
function NzCascaderComponent_ng_template_5_div_0_ul_2_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r1068 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 23);
    i0.ɵɵlistener("mouseenter", function NzCascaderComponent_ng_template_5_div_0_ul_2_li_1_Template_li_mouseenter_0_listener($event) { i0.ɵɵrestoreView(_r1068); const option_r1065 = ctx.$implicit; const i_r1062 = i0.ɵɵnextContext().index; const ctx_r1066 = i0.ɵɵnextContext(3); return ctx_r1066.onOptionMouseEnter(option_r1065, i_r1062, $event); })("mouseleave", function NzCascaderComponent_ng_template_5_div_0_ul_2_li_1_Template_li_mouseleave_0_listener($event) { i0.ɵɵrestoreView(_r1068); const option_r1065 = ctx.$implicit; const i_r1062 = i0.ɵɵnextContext().index; const ctx_r1069 = i0.ɵɵnextContext(3); return ctx_r1069.onOptionMouseLeave(option_r1065, i_r1062, $event); })("click", function NzCascaderComponent_ng_template_5_div_0_ul_2_li_1_Template_li_click_0_listener($event) { i0.ɵɵrestoreView(_r1068); const option_r1065 = ctx.$implicit; const i_r1062 = i0.ɵɵnextContext().index; const ctx_r1071 = i0.ɵɵnextContext(3); return ctx_r1071.onOptionClick(option_r1065, i_r1062, $event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r1065 = ctx.$implicit;
    const i_r1062 = i0.ɵɵnextContext().index;
    const ctx_r1063 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("columnIndex", i_r1062)("nzLabelProperty", ctx_r1063.nzLabelProperty)("optionTemplate", ctx_r1063.nzOptionRender)("activated", ctx_r1063.isOptionActivated(option_r1065, i_r1062))("highlightText", ctx_r1063.inSearchingMode ? ctx_r1063.inputValue : "")("option", option_r1065);
} }
function NzCascaderComponent_ng_template_5_div_0_ul_2_li_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 24);
    i0.ɵɵelement(1, "nz-embed-empty", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1064 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzComponentName", "cascader")("specificContent", ctx_r1064.nzNotFoundContent);
} }
function NzCascaderComponent_ng_template_5_div_0_ul_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 20);
    i0.ɵɵtemplate(1, NzCascaderComponent_ng_template_5_div_0_ul_2_li_1_Template, 1, 6, "li", 21);
    i0.ɵɵtemplate(2, NzCascaderComponent_ng_template_5_div_0_ul_2_li_2_Template, 2, 2, "li", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const options_r1061 = ctx.$implicit;
    const ctx_r1060 = i0.ɵɵnextContext(3);
    i0.ɵɵstyleProp("height", ctx_r1060.inSearchingMode && !ctx_r1060.cascaderService.columns[0].length ? "auto" : "")("width", ctx_r1060.dropdownWidthStyle);
    i0.ɵɵproperty("ngClass", ctx_r1060.menuColumnCls);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", options_r1061);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1060.inSearchingMode && !ctx_r1060.cascaderService.columns[0].length);
} }
function NzCascaderComponent_ng_template_5_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r1075 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17, 18);
    i0.ɵɵlistener("mouseleave", function NzCascaderComponent_ng_template_5_div_0_Template_div_mouseleave_0_listener($event) { i0.ɵɵrestoreView(_r1075); const ctx_r1074 = i0.ɵɵnextContext(2); return ctx_r1074.onTriggerMouseLeave($event); });
    i0.ɵɵtemplate(2, NzCascaderComponent_ng_template_5_div_0_ul_2_Template, 3, 5, "ul", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1058 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("ant-cascader-menus-hidden", !ctx_r1058.menuVisible);
    i0.ɵɵproperty("ngClass", ctx_r1058.menuCls)("ngStyle", ctx_r1058.nzMenuStyle)("@.disabled", ctx_r1058.noAnimation == null ? null : ctx_r1058.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r1058.noAnimation == null ? null : ctx_r1058.noAnimation.nzNoAnimation)("@slideMotion", ctx_r1058.dropDownPosition);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1058.cascaderService.columns);
} }
function NzCascaderComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NzCascaderComponent_ng_template_5_div_0_Template, 3, 7, "div", 16);
} if (rf & 2) {
    const ctx_r1042 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r1042.nzOptions && ctx_r1042.nzOptions.length || ctx_r1042.inSearchingMode);
} }
const _c2 = ["*"];
const NZ_CONFIG_COMPONENT_NAME = 'cascader';
const defaultDisplayRender = (labels) => labels.join(' / ');
export class NzCascaderComponent {
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
/** @nocollapse */ NzCascaderComponent.ɵfac = function NzCascaderComponent_Factory(t) { return new (t || NzCascaderComponent)(i0.ɵɵdirectiveInject(i1.NzCascaderService), i0.ɵɵdirectiveInject(i2.NzI18nService), i0.ɵɵdirectiveInject(i3.NzConfigService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i3.NzNoAnimationDirective, 9)); };
/** @nocollapse */ NzCascaderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzCascaderComponent, selectors: [["nz-cascader"], ["", "nz-cascader", ""]], viewQuery: function NzCascaderComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
        i0.ɵɵviewQuery(_c1, true);
        i0.ɵɵviewQuery(CdkConnectedOverlay, true);
        i0.ɵɵviewQuery(NzCascaderOptionComponent, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.input = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.menu = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.overlay = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.cascaderItems = _t);
    } }, hostBindings: function NzCascaderComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        i0.ɵɵallocHostVars(7);
        i0.ɵɵlistener("keydown", function NzCascaderComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); })("click", function NzCascaderComponent_click_HostBindingHandler($event) { return ctx.onTriggerClick(); })("mouseenter", function NzCascaderComponent_mouseenter_HostBindingHandler($event) { return ctx.onTriggerMouseEnter(); })("mouseleave", function NzCascaderComponent_mouseleave_HostBindingHandler($event) { return ctx.onTriggerMouseLeave($event); });
    } if (rf & 2) {
        i0.ɵɵattribute("tabIndex", "0");
        i0.ɵɵclassProp("ant-cascader-lg", ctx.nzSize === "large")("ant-cascader-sm", ctx.nzSize === "small")("ant-cascader-picker-disabled", ctx.nzDisabled)("ant-cascader-picker-open", ctx.menuVisible)("ant-cascader-picker-with-value", !!ctx.inputValue)("ant-cascader-focused", ctx.isFocused);
    } }, inputs: { nzOptionRender: "nzOptionRender", nzShowInput: "nzShowInput", nzShowArrow: "nzShowArrow", nzAllowClear: "nzAllowClear", nzAutoFocus: "nzAutoFocus", nzChangeOnSelect: "nzChangeOnSelect", nzDisabled: "nzDisabled", nzColumnClassName: "nzColumnClassName", nzExpandTrigger: "nzExpandTrigger", nzValueProperty: "nzValueProperty", nzLabelRender: "nzLabelRender", nzLabelProperty: "nzLabelProperty", nzNotFoundContent: "nzNotFoundContent", nzSize: "nzSize", nzShowSearch: "nzShowSearch", nzPlaceHolder: "nzPlaceHolder", nzMenuClassName: "nzMenuClassName", nzMenuStyle: "nzMenuStyle", nzMouseEnterDelay: "nzMouseEnterDelay", nzMouseLeaveDelay: "nzMouseLeaveDelay", nzTriggerAction: "nzTriggerAction", nzChangeOn: "nzChangeOn", nzLoadData: "nzLoadData", nzOptions: "nzOptions" }, outputs: { nzVisibleChange: "nzVisibleChange", nzSelectionChange: "nzSelectionChange", nzSelect: "nzSelect", nzClear: "nzClear" }, exportAs: ["nzCascader"], features: [i0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef((() => NzCascaderComponent)),
                multi: true
            },
            NzCascaderService
        ])], ngContentSelectors: _c2, decls: 6, vars: 4, consts: [["cdkOverlayOrigin", ""], ["origin", "cdkOverlayOrigin", "trigger", ""], [4, "ngIf"], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", "cdkConnectedOverlayHasBackdrop", "", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayPositions", "cdkConnectedOverlayOpen", "backdropClick", "detach", "positionChange"], ["nz-input", "", 1, "ant-cascader-input", 3, "readonly", "disabled", "nzSize", "ngModel", "ngModelChange", "blur", "focus", "change"], ["input", ""], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", "class", "ant-cascader-picker-clear", 3, "click", 4, "ngIf"], ["nz-icon", "", "nzType", "down", "class", "ant-cascader-picker-arrow", 3, "ant-cascader-picker-arrow-expand", 4, "ngIf"], ["nz-icon", "", "nzType", "loading", "class", "ant-cascader-picker-arrow", 4, "ngIf"], [1, "ant-cascader-picker-label"], [4, "ngIf", "ngIfElse"], ["labelTemplate", ""], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", 1, "ant-cascader-picker-clear", 3, "click"], ["nz-icon", "", "nzType", "down", 1, "ant-cascader-picker-arrow"], ["nz-icon", "", "nzType", "loading", 1, "ant-cascader-picker-arrow"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "ant-cascader-menus", 3, "ant-cascader-menus-hidden", "ngClass", "ngStyle", "nzNoAnimation", "mouseleave", 4, "ngIf"], [1, "ant-cascader-menus", 3, "ngClass", "ngStyle", "nzNoAnimation", "mouseleave"], ["menu", ""], ["class", "ant-cascader-menu", 3, "ngClass", "height", "width", 4, "ngFor", "ngForOf"], [1, "ant-cascader-menu", 3, "ngClass"], ["nz-cascader-option", "", 3, "columnIndex", "nzLabelProperty", "optionTemplate", "activated", "highlightText", "option", "mouseenter", "mouseleave", "click", 4, "ngFor", "ngForOf"], ["class", "ant-cascader-menu-item ant-cascader-menu-item-expanded ant-cascader-menu-item-disabled", 4, "ngIf"], ["nz-cascader-option", "", 3, "columnIndex", "nzLabelProperty", "optionTemplate", "activated", "highlightText", "option", "mouseenter", "mouseleave", "click"], [1, "ant-cascader-menu-item", "ant-cascader-menu-item-expanded", "ant-cascader-menu-item-disabled"], [3, "nzComponentName", "specificContent"]], template: function NzCascaderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0, 1);
        i0.ɵɵtemplate(3, NzCascaderComponent_div_3_Template, 10, 17, "div", 2);
        i0.ɵɵprojection(4);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(5, NzCascaderComponent_ng_template_5_Template, 1, 1, "ng-template", 3);
        i0.ɵɵlistener("backdropClick", function NzCascaderComponent_Template_ng_template_backdropClick_5_listener($event) { return ctx.closeMenu(); })("detach", function NzCascaderComponent_Template_ng_template_detach_5_listener($event) { return ctx.closeMenu(); })("positionChange", function NzCascaderComponent_Template_ng_template_positionChange_5_listener($event) { return ctx.onPositionChange($event); });
    } if (rf & 2) {
        const _r1039 = i0.ɵɵreference(1);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.nzShowInput);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("cdkConnectedOverlayOrigin", _r1039)("cdkConnectedOverlayPositions", ctx.positions)("cdkConnectedOverlayOpen", ctx.menuVisible);
    } }, directives: [i4.CdkOverlayOrigin, i5.NgIf, i4.CdkConnectedOverlay, i3.NzConnectedOverlayDirective, i6.DefaultValueAccessor, i7.NzInputDirective, i6.NgControlStatus, i6.NgModel, i8.NzIconDirective, i5.NgTemplateOutlet, i5.NgClass, i5.NgStyle, i3.NzNoAnimationDirective, i5.NgForOf, i9.NzCascaderOptionComponent, i10.NzEmbedEmptyComponent], styles: ["\n      .ant-cascader-menus {\n        margin-top: 4px;\n        margin-bottom: 4px;\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n      }\n    "], encapsulation: 2, data: { animation: [slideMotion] }, changeDetection: 0 });
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzCascaderComponent, [{
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
    }], function () { return [{ type: i1.NzCascaderService }, { type: i2.NzI18nService }, { type: i3.NzConfigService }, { type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i3.NzNoAnimationDirective, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FzY2FkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jYXNjYWRlci8iLCJzb3VyY2VzIjpbIm56LWNhc2NhZGVyLmNvbXBvbmVudC50cyIsIm56LWNhc2NhZGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDaEgsT0FBTyxFQUFFLG1CQUFtQixFQUEwRCxNQUFNLHNCQUFzQixDQUFDO0FBQ25ILE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixJQUFJLEVBQ0osWUFBWSxFQUNaLEtBQUssRUFHTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxZQUFZLEVBQ1osaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEQsT0FBTyxFQUNMLDBCQUEwQixFQUMxQixZQUFZLEVBR1osZUFBZSxFQUNmLHNCQUFzQixFQUN0QixXQUFXLEVBQ1gsT0FBTyxFQUNQLGVBQWUsRUFDZixVQUFVLEVBQ1gsTUFBTSxvQkFBb0IsQ0FBQztBQUU1QixPQUFPLEVBQTJCLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBVTVFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDRCQUE0QixD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QUFDLFFBQVEsQ0FBQzs7a0JBMkNsQyxZQUFZO21CQUFDLE9BQU87O2tCQWNwQixZQUFZO21CQUFDLFlBQVk7O2tCQVN6QixZQUFZO21CQUFDLFlBQVksRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQkFDS1NQQUNFLCBET1dOX0FSUk9XLCBFTlRFUiwgRVNDQVBFLCBMRUZUX0FSUk9XLCBSSUdIVF9BUlJPVywgVVBfQVJST1cgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xyXG5pbXBvcnQgeyBDZGtDb25uZWN0ZWRPdmVybGF5LCBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UsIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgSG9zdCxcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFJlbmRlcmVyMixcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0NoaWxkcmVuLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBzdGFydFdpdGgsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgREVGQVVMVF9EUk9QRE9XTl9QT1NJVElPTlMsXHJcbiAgSW5wdXRCb29sZWFuLFxyXG4gIE5nQ2xhc3NUeXBlLFxyXG4gIE5nU3R5bGVJbnRlcmZhY2UsXHJcbiAgTnpDb25maWdTZXJ2aWNlLFxyXG4gIE56Tm9BbmltYXRpb25EaXJlY3RpdmUsXHJcbiAgc2xpZGVNb3Rpb24sXHJcbiAgdG9BcnJheSxcclxuICB3YXJuRGVwcmVjYXRpb24sXHJcbiAgV2l0aENvbmZpZ1xyXG59IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOekNhc2NhZGVySTE4bkludGVyZmFjZSwgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcbmltcG9ydCB7XHJcbiAgTnpDYXNjYWRlckNvbXBvbmVudEFzU291cmNlLFxyXG4gIE56Q2FzY2FkZXJFeHBhbmRUcmlnZ2VyLFxyXG4gIE56Q2FzY2FkZXJPcHRpb24sXHJcbiAgTnpDYXNjYWRlclNlYXJjaE9wdGlvbixcclxuICBOekNhc2NhZGVyU2l6ZSxcclxuICBOekNhc2NhZGVyVHJpZ2dlclR5cGUsXHJcbiAgTnpTaG93U2VhcmNoT3B0aW9uc1xyXG59IGZyb20gJy4vbnotY2FzY2FkZXItZGVmaW5pdGlvbnMnO1xyXG5pbXBvcnQgeyBOekNhc2NhZGVyT3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9uei1jYXNjYWRlci1saS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOekNhc2NhZGVyU2VydmljZSB9IGZyb20gJy4vbnotY2FzY2FkZXIuc2VydmljZSc7XHJcblxyXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAnY2FzY2FkZXInO1xyXG5jb25zdCBkZWZhdWx0RGlzcGxheVJlbmRlciA9IChsYWJlbHM6IHN0cmluZ1tdKSA9PiBsYWJlbHMuam9pbignIC8gJyk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHNlbGVjdG9yOiAnbnotY2FzY2FkZXIsIFtuei1jYXNjYWRlcl0nLFxyXG4gIGV4cG9ydEFzOiAnbnpDYXNjYWRlcicsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LWNhc2NhZGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBhbmltYXRpb25zOiBbc2xpZGVNb3Rpb25dLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnpDYXNjYWRlckNvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgTnpDYXNjYWRlclNlcnZpY2VcclxuICBdLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbYXR0ci50YWJJbmRleF0nOiAnXCIwXCInLFxyXG4gICAgJ1tjbGFzcy5hbnQtY2FzY2FkZXItbGddJzogJ256U2l6ZSA9PT0gXCJsYXJnZVwiJyxcclxuICAgICdbY2xhc3MuYW50LWNhc2NhZGVyLXNtXSc6ICduelNpemUgPT09IFwic21hbGxcIicsXHJcbiAgICAnW2NsYXNzLmFudC1jYXNjYWRlci1waWNrZXItZGlzYWJsZWRdJzogJ256RGlzYWJsZWQnLFxyXG4gICAgJ1tjbGFzcy5hbnQtY2FzY2FkZXItcGlja2VyLW9wZW5dJzogJ21lbnVWaXNpYmxlJyxcclxuICAgICdbY2xhc3MuYW50LWNhc2NhZGVyLXBpY2tlci13aXRoLXZhbHVlXSc6ICchIWlucHV0VmFsdWUnLFxyXG4gICAgJ1tjbGFzcy5hbnQtY2FzY2FkZXItZm9jdXNlZF0nOiAnaXNGb2N1c2VkJ1xyXG4gIH0sXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIC5hbnQtY2FzY2FkZXItbWVudXMge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICAgICAgdG9wOiAxMDAlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpDYXNjYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE56Q2FzY2FkZXJDb21wb25lbnRBc1NvdXJjZSwgT25Jbml0LCBPbkRlc3Ryb3ksIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcclxuICBAVmlld0NoaWxkKCdpbnB1dCcsIHsgc3RhdGljOiBmYWxzZSB9KSBpbnB1dDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdtZW51JywgeyBzdGF0aWM6IGZhbHNlIH0pIG1lbnU6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZChDZGtDb25uZWN0ZWRPdmVybGF5LCB7IHN0YXRpYzogZmFsc2UgfSkgb3ZlcmxheTogQ2RrQ29ubmVjdGVkT3ZlcmxheTtcclxuICBAVmlld0NoaWxkcmVuKE56Q2FzY2FkZXJPcHRpb25Db21wb25lbnQpIGNhc2NhZGVySXRlbXM6IFF1ZXJ5TGlzdDxOekNhc2NhZGVyT3B0aW9uQ29tcG9uZW50PjtcclxuXHJcbiAgQElucHV0KCkgbnpPcHRpb25SZW5kZXI6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOekNhc2NhZGVyT3B0aW9uOyBpbmRleDogbnVtYmVyIH0+IHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd0lucHV0ID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93QXJyb3cgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekFsbG93Q2xlYXIgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekF1dG9Gb2N1cyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekNoYW5nZU9uU2VsZWN0ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBuekNvbHVtbkNsYXNzTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56RXhwYW5kVHJpZ2dlcjogTnpDYXNjYWRlckV4cGFuZFRyaWdnZXIgPSAnY2xpY2snO1xyXG4gIEBJbnB1dCgpIG56VmFsdWVQcm9wZXJ0eSA9ICd2YWx1ZSc7XHJcbiAgQElucHV0KCkgbnpMYWJlbFJlbmRlcjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpMYWJlbFByb3BlcnR5ID0gJ2xhYmVsJztcclxuICBASW5wdXQoKSBuek5vdEZvdW5kQ29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCAnZGVmYXVsdCcpIG56U2l6ZTogTnpDYXNjYWRlclNpemU7XHJcbiAgQElucHV0KCkgbnpTaG93U2VhcmNoOiBib29sZWFuIHwgTnpTaG93U2VhcmNoT3B0aW9ucztcclxuICBASW5wdXQoKSBuelBsYWNlSG9sZGVyOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpNZW51Q2xhc3NOYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpNZW51U3R5bGU6IE5nU3R5bGVJbnRlcmZhY2U7XHJcbiAgQElucHV0KCkgbnpNb3VzZUVudGVyRGVsYXk6IG51bWJlciA9IDE1MDsgLy8gbXNcclxuICBASW5wdXQoKSBuek1vdXNlTGVhdmVEZWxheTogbnVtYmVyID0gMTUwOyAvLyBtc1xyXG4gIEBJbnB1dCgpIG56VHJpZ2dlckFjdGlvbjogTnpDYXNjYWRlclRyaWdnZXJUeXBlIHwgTnpDYXNjYWRlclRyaWdnZXJUeXBlW10gPSBbJ2NsaWNrJ10gYXMgTnpDYXNjYWRlclRyaWdnZXJUeXBlW107XHJcbiAgQElucHV0KCkgbnpDaGFuZ2VPbjogKG9wdGlvbjogTnpDYXNjYWRlck9wdGlvbiwgbGV2ZWw6IG51bWJlcikgPT4gYm9vbGVhbjtcclxuICBASW5wdXQoKSBuekxvYWREYXRhOiAobm9kZTogTnpDYXNjYWRlck9wdGlvbiwgaW5kZXg/OiBudW1iZXIpID0+IFByb21pc2VMaWtlPGFueT47IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IG56T3B0aW9ucygpOiBOekNhc2NhZGVyT3B0aW9uW10gfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLmNhc2NhZGVyU2VydmljZS5uek9wdGlvbnM7XHJcbiAgfVxyXG5cclxuICBzZXQgbnpPcHRpb25zKG9wdGlvbnM6IE56Q2FzY2FkZXJPcHRpb25bXSB8IG51bGwpIHtcclxuICAgIHRoaXMuY2FzY2FkZXJTZXJ2aWNlLndpdGhPcHRpb25zKG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56VmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56U2VsZWN0aW9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxOekNhc2NhZGVyT3B0aW9uW10+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXByZWNhdGVkIDkuMC4wLiBUaGlzIGFwaSBpcyBhIGR1cGxpY2F0aW9uIG9mIGBuZ01vZGVsQ2hhbmdlYC5cclxuICAgKi9cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpTZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPHsgb3B0aW9uOiBOekNhc2NhZGVyT3B0aW9uOyBpbmRleDogbnVtYmVyIH0gfCBudWxsPigpO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDbGVhciA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgZWw6IEhUTUxFbGVtZW50O1xyXG4gIGRyb3BEb3duUG9zaXRpb24gPSAnYm90dG9tJztcclxuICBtZW51VmlzaWJsZSA9IGZhbHNlO1xyXG4gIGlzTG9hZGluZyA9IGZhbHNlO1xyXG4gIGxhYmVsUmVuZGVyVGV4dDogc3RyaW5nO1xyXG4gIGxhYmVsUmVuZGVyQ29udGV4dCA9IHt9O1xyXG4gIG9uQ2hhbmdlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xyXG4gIG9uVG91Y2hlZCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcclxuICBwb3NpdGlvbnM6IENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXSA9IFsuLi5ERUZBVUxUX0RST1BET1dOX1BPU0lUSU9OU107XHJcbiAgZHJvcGRvd25XaWR0aFN0eWxlOiBzdHJpbmc7XHJcbiAgaXNGb2N1c2VkID0gZmFsc2U7XHJcblxyXG4gIGxvY2FsZTogTnpDYXNjYWRlckkxOG5JbnRlcmZhY2U7XHJcblxyXG4gIHByaXZhdGUgJGRlc3Ryb3kgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIHByaXZhdGUgaW5wdXRTdHJpbmcgPSAnJztcclxuICBwcml2YXRlIGlzT3BlbmluZyA9IGZhbHNlO1xyXG4gIHByaXZhdGUgZGVsYXlNZW51VGltZXI6IG51bWJlciB8IG51bGw7XHJcbiAgcHJpdmF0ZSBkZWxheVNlbGVjdFRpbWVyOiBudW1iZXIgfCBudWxsO1xyXG5cclxuICBnZXQgaW5TZWFyY2hpbmdNb2RlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY2FzY2FkZXJTZXJ2aWNlLmluU2VhcmNoaW5nTW9kZTtcclxuICB9XHJcblxyXG4gIHNldCBpbnB1dFZhbHVlKGlucHV0VmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5pbnB1dFN0cmluZyA9IGlucHV0VmFsdWU7XHJcbiAgICB0aGlzLnRvZ2dsZVNlYXJjaGluZ01vZGUoISFpbnB1dFZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBpbnB1dFZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5pbnB1dFN0cmluZztcclxuICB9XHJcblxyXG4gIGdldCBtZW51Q2xzKCk6IE5nQ2xhc3NUeXBlIHtcclxuICAgIHJldHVybiB7IFtgJHt0aGlzLm56TWVudUNsYXNzTmFtZX1gXTogISF0aGlzLm56TWVudUNsYXNzTmFtZSB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0IG1lbnVDb2x1bW5DbHMoKTogTmdDbGFzc1R5cGUge1xyXG4gICAgcmV0dXJuIHsgW2Ake3RoaXMubnpDb2x1bW5DbGFzc05hbWV9YF06ICEhdGhpcy5uekNvbHVtbkNsYXNzTmFtZSB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXQgaGFzSW5wdXQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gISF0aGlzLmlucHV0VmFsdWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldCBoYXNWYWx1ZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNhc2NhZGVyU2VydmljZS52YWx1ZXMgJiYgdGhpcy5jYXNjYWRlclNlcnZpY2UudmFsdWVzLmxlbmd0aCA+IDA7XHJcbiAgfVxyXG5cclxuICBnZXQgc2hvd1BsYWNlaG9sZGVyKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEodGhpcy5oYXNJbnB1dCB8fCB0aGlzLmhhc1ZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBjbGVhckljb25WaXNpYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubnpBbGxvd0NsZWFyICYmICF0aGlzLm56RGlzYWJsZWQgJiYgKHRoaXMuaGFzVmFsdWUgfHwgdGhpcy5oYXNJbnB1dCk7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNMYWJlbFJlbmRlclRlbXBsYXRlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEhdGhpcy5uekxhYmVsUmVuZGVyO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgY2FzY2FkZXJTZXJ2aWNlOiBOekNhc2NhZGVyU2VydmljZSxcclxuICAgIHByaXZhdGUgaTE4blNlcnZpY2U6IE56STE4blNlcnZpY2UsXHJcbiAgICBwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG4gICkge1xyXG4gICAgdGhpcy5lbCA9IGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICAgIHRoaXMuY2FzY2FkZXJTZXJ2aWNlLndpdGhDb21wb25lbnQodGhpcyk7XHJcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtY2FzY2FkZXInKTtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1jYXNjYWRlci1waWNrZXInKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgY29uc3Qgc3J2ID0gdGhpcy5jYXNjYWRlclNlcnZpY2U7XHJcblxyXG4gICAgc3J2LiRyZWRyYXcucGlwZSh0YWtlVW50aWwodGhpcy4kZGVzdHJveSkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIC8vIFRoZXNlIG9wZXJhdGlvbnMgd291bGQgbm90IG11dGF0ZSBkYXRhLlxyXG4gICAgICB0aGlzLmNoZWNrQ2hpbGRyZW4oKTtcclxuICAgICAgdGhpcy5idWlsZERpc3BsYXlMYWJlbCgpO1xyXG4gICAgICB0aGlzLnJlcG9zaXRpb24oKTtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBzcnYuJGxvYWRpbmcucGlwZSh0YWtlVW50aWwodGhpcy4kZGVzdHJveSkpLnN1YnNjcmliZShsb2FkaW5nID0+IHtcclxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSBsb2FkaW5nO1xyXG4gICAgfSk7XHJcblxyXG4gICAgc3J2LiRvcHRpb25TZWxlY3RlZC5waXBlKHRha2VVbnRpbCh0aGlzLiRkZXN0cm95KSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICBpZiAoIWRhdGEpIHtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlKFtdKTtcclxuICAgICAgICB0aGlzLm56U2VsZWN0LmVtaXQobnVsbCk7XHJcbiAgICAgICAgdGhpcy5uelNlbGVjdGlvbkNoYW5nZS5lbWl0KFtdKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCB7IG9wdGlvbiwgaW5kZXggfSA9IGRhdGE7XHJcbiAgICAgICAgY29uc3Qgc2hvdWxkQ2xvc2UgPSBvcHRpb24uaXNMZWFmO1xyXG4gICAgICAgIGlmIChzaG91bGRDbG9zZSkge1xyXG4gICAgICAgICAgdGhpcy5kZWxheVNldE1lbnVWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLmNhc2NhZGVyU2VydmljZS52YWx1ZXMpO1xyXG4gICAgICAgIHRoaXMubnpTZWxlY3Rpb25DaGFuZ2UuZW1pdCh0aGlzLmNhc2NhZGVyU2VydmljZS5zZWxlY3RlZE9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMubnpTZWxlY3QuZW1pdCh7IG9wdGlvbiwgaW5kZXggfSk7XHJcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHNydi4kcXVpdFNlYXJjaGluZy5waXBlKHRha2VVbnRpbCh0aGlzLiRkZXN0cm95KSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5pbnB1dFN0cmluZyA9ICcnO1xyXG4gICAgICB0aGlzLmRyb3Bkb3duV2lkdGhTdHlsZSA9ICcnO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5pMThuU2VydmljZS5sb2NhbGVDaGFuZ2UucGlwZShzdGFydFdpdGgoKSwgdGFrZVVudGlsKHRoaXMuJGRlc3Ryb3kpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNldExvY2FsZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5uekNvbmZpZ1NlcnZpY2VcclxuICAgICAgLmdldENvbmZpZ0NoYW5nZUV2ZW50Rm9yQ29tcG9uZW50KE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSlcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuJGRlc3Ryb3kpKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgaWYgKHRoaXMubnpTZWxlY3Qub2JzZXJ2ZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgd2FybkRlcHJlY2F0aW9uKGBuelNlbGVjdCBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFBsZWFzZSB1c2UgJ256U2VsZWN0aW9uQ2hhbmdlJyBpbnN0ZWFkLmApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLiRkZXN0cm95Lm5leHQoKTtcclxuICAgIHRoaXMuJGRlc3Ryb3kuY29tcGxldGUoKTtcclxuICAgIHRoaXMuY2xlYXJEZWxheU1lbnVUaW1lcigpO1xyXG4gICAgdGhpcy5jbGVhckRlbGF5U2VsZWN0VGltZXIoKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICgpID0+IHt9KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4ge30pOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLmNhc2NhZGVyU2VydmljZS52YWx1ZXMgPSB0b0FycmF5KHZhbHVlKTtcclxuICAgIHRoaXMuY2FzY2FkZXJTZXJ2aWNlLnN5bmNPcHRpb25zKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgZGVsYXlTZXRNZW51VmlzaWJsZSh2aXNpYmxlOiBib29sZWFuLCBkZWxheTogbnVtYmVyID0gMTAwLCBzZXRPcGVuaW5nOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xlYXJEZWxheU1lbnVUaW1lcigpO1xyXG4gICAgaWYgKGRlbGF5KSB7XHJcbiAgICAgIGlmICh2aXNpYmxlICYmIHNldE9wZW5pbmcpIHtcclxuICAgICAgICB0aGlzLmlzT3BlbmluZyA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5kZWxheU1lbnVUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0TWVudVZpc2libGUodmlzaWJsZSk7XHJcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIHRoaXMuY2xlYXJEZWxheU1lbnVUaW1lcigpO1xyXG4gICAgICAgIGlmICh2aXNpYmxlKSB7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pc09wZW5pbmcgPSBmYWxzZTtcclxuICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCBkZWxheSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldE1lbnVWaXNpYmxlKHZpc2libGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0TWVudVZpc2libGUodmlzaWJsZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpEaXNhYmxlZCB8fCB0aGlzLm1lbnVWaXNpYmxlID09PSB2aXNpYmxlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh2aXNpYmxlKSB7XHJcbiAgICAgIHRoaXMuY2FzY2FkZXJTZXJ2aWNlLnN5bmNPcHRpb25zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5tZW51VmlzaWJsZSA9IHZpc2libGU7XHJcbiAgICB0aGlzLm56VmlzaWJsZUNoYW5nZS5lbWl0KHZpc2libGUpO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGVhckRlbGF5TWVudVRpbWVyKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZGVsYXlNZW51VGltZXIpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGVsYXlNZW51VGltZXIpO1xyXG4gICAgICB0aGlzLmRlbGF5TWVudVRpbWVyID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsZWFyU2VsZWN0aW9uKGV2ZW50PzogRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChldmVudCkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmxhYmVsUmVuZGVyVGV4dCA9ICcnO1xyXG4gICAgdGhpcy5sYWJlbFJlbmRlckNvbnRleHQgPSB7fTtcclxuICAgIHRoaXMuaW5wdXRWYWx1ZSA9ICcnO1xyXG4gICAgdGhpcy5zZXRNZW51VmlzaWJsZShmYWxzZSk7XHJcbiAgICB0aGlzLmNhc2NhZGVyU2VydmljZS5jbGVhcigpO1xyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIGdldFN1Ym1pdFZhbHVlKCk6IGFueVtdIHtcclxuICAgIHJldHVybiB0aGlzLmNhc2NhZGVyU2VydmljZS5zZWxlY3RlZE9wdGlvbnMubWFwKG8gPT4gdGhpcy5jYXNjYWRlclNlcnZpY2UuZ2V0T3B0aW9uVmFsdWUobykpO1xyXG4gIH1cclxuXHJcbiAgZm9jdXMoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuaXNGb2N1c2VkKSB7XHJcbiAgICAgICh0aGlzLmlucHV0ID8gdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50IDogdGhpcy5lbCkuZm9jdXMoKTtcclxuICAgICAgdGhpcy5pc0ZvY3VzZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYmx1cigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzRm9jdXNlZCkge1xyXG4gICAgICAodGhpcy5pbnB1dCA/IHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCA6IHRoaXMuZWwpLmJsdXIoKTtcclxuICAgICAgdGhpcy5pc0ZvY3VzZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZUlucHV0Qmx1cigpOiB2b2lkIHtcclxuICAgIHRoaXMubWVudVZpc2libGUgPyB0aGlzLmZvY3VzKCkgOiB0aGlzLmJsdXIoKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUlucHV0Rm9jdXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcclxuICBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IGtleUNvZGUgPSBldmVudC5rZXlDb2RlO1xyXG5cclxuICAgIGlmIChcclxuICAgICAga2V5Q29kZSAhPT0gRE9XTl9BUlJPVyAmJlxyXG4gICAgICBrZXlDb2RlICE9PSBVUF9BUlJPVyAmJlxyXG4gICAgICBrZXlDb2RlICE9PSBMRUZUX0FSUk9XICYmXHJcbiAgICAgIGtleUNvZGUgIT09IFJJR0hUX0FSUk9XICYmXHJcbiAgICAgIGtleUNvZGUgIT09IEVOVEVSICYmXHJcbiAgICAgIGtleUNvZGUgIT09IEJBQ0tTUEFDRSAmJlxyXG4gICAgICBrZXlDb2RlICE9PSBFU0NBUEVcclxuICAgICkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHJlc3MgYW55IGtleXMgYWJvdmUgdG8gcmVvcGVuIG1lbnUuXHJcbiAgICBpZiAoIXRoaXMubWVudVZpc2libGUgJiYga2V5Q29kZSAhPT0gQkFDS1NQQUNFICYmIGtleUNvZGUgIT09IEVTQ0FQRSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5zZXRNZW51VmlzaWJsZSh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNYWtlIHRoZXNlIGtleXMgd29yayBhcyBkZWZhdWx0IGluIHNlYXJjaGluZyBtb2RlLlxyXG4gICAgaWYgKHRoaXMuaW5TZWFyY2hpbmdNb2RlICYmIChrZXlDb2RlID09PSBCQUNLU1BBQ0UgfHwga2V5Q29kZSA9PT0gTEVGVF9BUlJPVyB8fCBrZXlDb2RlID09PSBSSUdIVF9BUlJPVykpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEludGVyYWN0IHdpdGggdGhlIGNvbXBvbmVudC5cclxuICAgIGlmICh0aGlzLm1lbnVWaXNpYmxlKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGlmIChrZXlDb2RlID09PSBET1dOX0FSUk9XKSB7XHJcbiAgICAgICAgdGhpcy5tb3ZlVXBPckRvd24oZmFsc2UpO1xyXG4gICAgICB9IGVsc2UgaWYgKGtleUNvZGUgPT09IFVQX0FSUk9XKSB7XHJcbiAgICAgICAgdGhpcy5tb3ZlVXBPckRvd24odHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gTEVGVF9BUlJPVykge1xyXG4gICAgICAgIHRoaXMubW92ZUxlZnQoKTtcclxuICAgICAgfSBlbHNlIGlmIChrZXlDb2RlID09PSBSSUdIVF9BUlJPVykge1xyXG4gICAgICAgIHRoaXMubW92ZVJpZ2h0KCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gRU5URVIpIHtcclxuICAgICAgICB0aGlzLm9uRW50ZXIoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxyXG4gIG9uVHJpZ2dlckNsaWNrKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpEaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5uelNob3dTZWFyY2gpIHtcclxuICAgICAgdGhpcy5mb2N1cygpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaXNBY3Rpb25UcmlnZ2VyKCdjbGljaycpKSB7XHJcbiAgICAgIHRoaXMuZGVsYXlTZXRNZW51VmlzaWJsZSghdGhpcy5tZW51VmlzaWJsZSwgMTAwKTtcclxuICAgIH1cclxuICAgIHRoaXMub25Ub3VjaGVkKCk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJylcclxuICBvblRyaWdnZXJNb3VzZUVudGVyKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpEaXNhYmxlZCB8fCAhdGhpcy5pc0FjdGlvblRyaWdnZXIoJ2hvdmVyJykpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZGVsYXlTZXRNZW51VmlzaWJsZSh0cnVlLCB0aGlzLm56TW91c2VFbnRlckRlbGF5LCB0cnVlKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBbJyRldmVudCddKVxyXG4gIG9uVHJpZ2dlck1vdXNlTGVhdmUoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56RGlzYWJsZWQgfHwgIXRoaXMubWVudVZpc2libGUgfHwgdGhpcy5pc09wZW5pbmcgfHwgIXRoaXMuaXNBY3Rpb25UcmlnZ2VyKCdob3ZlcicpKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IG1vdXNlVGFyZ2V0ID0gZXZlbnQucmVsYXRlZFRhcmdldCBhcyBIVE1MRWxlbWVudDtcclxuICAgIGNvbnN0IGhvc3RFbCA9IHRoaXMuZWw7XHJcbiAgICBjb25zdCBtZW51RWwgPSB0aGlzLm1lbnUgJiYgKHRoaXMubWVudS5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KTtcclxuICAgIGlmIChob3N0RWwuY29udGFpbnMobW91c2VUYXJnZXQpIHx8IChtZW51RWwgJiYgbWVudUVsLmNvbnRhaW5zKG1vdXNlVGFyZ2V0KSkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5kZWxheVNldE1lbnVWaXNpYmxlKGZhbHNlLCB0aGlzLm56TW91c2VMZWF2ZURlbGF5KTtcclxuICB9XHJcblxyXG4gIG9uT3B0aW9uTW91c2VFbnRlcihvcHRpb246IE56Q2FzY2FkZXJPcHRpb24sIGNvbHVtbkluZGV4OiBudW1iZXIsIGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICh0aGlzLm56RXhwYW5kVHJpZ2dlciA9PT0gJ2hvdmVyJykge1xyXG4gICAgICBpZiAoIW9wdGlvbi5pc0xlYWYpIHtcclxuICAgICAgICB0aGlzLmRlbGF5U2V0T3B0aW9uQWN0aXZhdGVkKG9wdGlvbiwgY29sdW1uSW5kZXgsIGZhbHNlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNhc2NhZGVyU2VydmljZS5zZXRPcHRpb25EZWFjdGl2YXRlZFNpbmNlQ29sdW1uKGNvbHVtbkluZGV4KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25PcHRpb25Nb3VzZUxlYXZlKG9wdGlvbjogTnpDYXNjYWRlck9wdGlvbiwgX2NvbHVtbkluZGV4OiBudW1iZXIsIGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICh0aGlzLm56RXhwYW5kVHJpZ2dlciA9PT0gJ2hvdmVyJyAmJiAhb3B0aW9uLmlzTGVhZikge1xyXG4gICAgICB0aGlzLmNsZWFyRGVsYXlTZWxlY3RUaW1lcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25PcHRpb25DbGljayhvcHRpb246IE56Q2FzY2FkZXJPcHRpb24sIGNvbHVtbkluZGV4OiBudW1iZXIsIGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKGV2ZW50KSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgICBpZiAob3B0aW9uICYmIG9wdGlvbi5kaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmVsLmZvY3VzKCk7XHJcbiAgICB0aGlzLmluU2VhcmNoaW5nTW9kZVxyXG4gICAgICA/IHRoaXMuY2FzY2FkZXJTZXJ2aWNlLnNldFNlYXJjaE9wdGlvblNlbGVjdGVkKG9wdGlvbiBhcyBOekNhc2NhZGVyU2VhcmNoT3B0aW9uKVxyXG4gICAgICA6IHRoaXMuY2FzY2FkZXJTZXJ2aWNlLnNldE9wdGlvbkFjdGl2YXRlZChvcHRpb24sIGNvbHVtbkluZGV4LCB0cnVlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNBY3Rpb25UcmlnZ2VyKGFjdGlvbjogJ2NsaWNrJyB8ICdob3ZlcicpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0eXBlb2YgdGhpcy5uelRyaWdnZXJBY3Rpb24gPT09ICdzdHJpbmcnID8gdGhpcy5uelRyaWdnZXJBY3Rpb24gPT09IGFjdGlvbiA6IHRoaXMubnpUcmlnZ2VyQWN0aW9uLmluZGV4T2YoYWN0aW9uKSAhPT0gLTE7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uRW50ZXIoKTogdm9pZCB7XHJcbiAgICBjb25zdCBjb2x1bW5JbmRleCA9IE1hdGgubWF4KHRoaXMuY2FzY2FkZXJTZXJ2aWNlLmFjdGl2YXRlZE9wdGlvbnMubGVuZ3RoIC0gMSwgMCk7XHJcbiAgICBjb25zdCBvcHRpb24gPSB0aGlzLmNhc2NhZGVyU2VydmljZS5hY3RpdmF0ZWRPcHRpb25zW2NvbHVtbkluZGV4XTtcclxuICAgIGlmIChvcHRpb24gJiYgIW9wdGlvbi5kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLmluU2VhcmNoaW5nTW9kZVxyXG4gICAgICAgID8gdGhpcy5jYXNjYWRlclNlcnZpY2Uuc2V0U2VhcmNoT3B0aW9uU2VsZWN0ZWQob3B0aW9uIGFzIE56Q2FzY2FkZXJTZWFyY2hPcHRpb24pXHJcbiAgICAgICAgOiB0aGlzLmNhc2NhZGVyU2VydmljZS5zZXRPcHRpb25BY3RpdmF0ZWQob3B0aW9uLCBjb2x1bW5JbmRleCwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1vdmVVcE9yRG93bihpc1VwOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBjb25zdCBjb2x1bW5JbmRleCA9IE1hdGgubWF4KHRoaXMuY2FzY2FkZXJTZXJ2aWNlLmFjdGl2YXRlZE9wdGlvbnMubGVuZ3RoIC0gMSwgMCk7XHJcbiAgICBjb25zdCBhY3RpdmVPcHRpb24gPSB0aGlzLmNhc2NhZGVyU2VydmljZS5hY3RpdmF0ZWRPcHRpb25zW2NvbHVtbkluZGV4XTtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmNhc2NhZGVyU2VydmljZS5jb2x1bW5zW2NvbHVtbkluZGV4XSB8fCBbXTtcclxuICAgIGNvbnN0IGxlbmd0aCA9IG9wdGlvbnMubGVuZ3RoO1xyXG4gICAgbGV0IG5leHRJbmRleCA9IC0xO1xyXG4gICAgaWYgKCFhY3RpdmVPcHRpb24pIHtcclxuICAgICAgLy8gTm90IHNlbGVjdGVkIG9wdGlvbnMgaW4gdGhpcyBjb2x1bW5cclxuICAgICAgbmV4dEluZGV4ID0gaXNVcCA/IGxlbmd0aCA6IC0xO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbmV4dEluZGV4ID0gb3B0aW9ucy5pbmRleE9mKGFjdGl2ZU9wdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgbmV4dEluZGV4ID0gaXNVcCA/IG5leHRJbmRleCAtIDEgOiBuZXh0SW5kZXggKyAxO1xyXG4gICAgICBpZiAobmV4dEluZGV4IDwgMCB8fCBuZXh0SW5kZXggPj0gbGVuZ3RoKSB7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgbmV4dE9wdGlvbiA9IG9wdGlvbnNbbmV4dEluZGV4XTtcclxuICAgICAgaWYgKCFuZXh0T3B0aW9uIHx8IG5leHRPcHRpb24uZGlzYWJsZWQpIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNhc2NhZGVyU2VydmljZS5zZXRPcHRpb25BY3RpdmF0ZWQobmV4dE9wdGlvbiwgY29sdW1uSW5kZXgpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgbW92ZUxlZnQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5jYXNjYWRlclNlcnZpY2UuYWN0aXZhdGVkT3B0aW9ucztcclxuICAgIGlmIChvcHRpb25zLmxlbmd0aCkge1xyXG4gICAgICBvcHRpb25zLnBvcCgpOyAvLyBSZW1vdmUgdGhlIGxhc3Qgb25lXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1vdmVSaWdodCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuY2FzY2FkZXJTZXJ2aWNlLmFjdGl2YXRlZE9wdGlvbnMubGVuZ3RoO1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuY2FzY2FkZXJTZXJ2aWNlLmNvbHVtbnNbbGVuZ3RoXTtcclxuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IG5leHRPcHQgPSBvcHRpb25zLmZpbmQobyA9PiAhby5kaXNhYmxlZCk7XHJcbiAgICAgIGlmIChuZXh0T3B0KSB7XHJcbiAgICAgICAgdGhpcy5jYXNjYWRlclNlcnZpY2Uuc2V0T3B0aW9uQWN0aXZhdGVkKG5leHRPcHQsIGxlbmd0aCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xlYXJEZWxheVNlbGVjdFRpbWVyKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZGVsYXlTZWxlY3RUaW1lcikge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5kZWxheVNlbGVjdFRpbWVyKTtcclxuICAgICAgdGhpcy5kZWxheVNlbGVjdFRpbWVyID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGVsYXlTZXRPcHRpb25BY3RpdmF0ZWQob3B0aW9uOiBOekNhc2NhZGVyT3B0aW9uLCBjb2x1bW5JbmRleDogbnVtYmVyLCBwZXJmb3JtU2VsZWN0OiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsZWFyRGVsYXlTZWxlY3RUaW1lcigpO1xyXG4gICAgdGhpcy5kZWxheVNlbGVjdFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY2FzY2FkZXJTZXJ2aWNlLnNldE9wdGlvbkFjdGl2YXRlZChvcHRpb24sIGNvbHVtbkluZGV4LCBwZXJmb3JtU2VsZWN0KTtcclxuICAgICAgdGhpcy5kZWxheVNlbGVjdFRpbWVyID0gbnVsbDtcclxuICAgIH0sIDE1MCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRvZ2dsZVNlYXJjaGluZ01vZGUodG9TZWFyY2hpbmc6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmluU2VhcmNoaW5nTW9kZSAhPT0gdG9TZWFyY2hpbmcpIHtcclxuICAgICAgdGhpcy5jYXNjYWRlclNlcnZpY2UudG9nZ2xlU2VhcmNoaW5nTW9kZSh0b1NlYXJjaGluZyk7XHJcbiAgICAgIHRoaXMuZHJvcGRvd25XaWR0aFN0eWxlID0gdG9TZWFyY2hpbmcgPyBgJHt0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGh9cHhgIDogJyc7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5pblNlYXJjaGluZ01vZGUpIHtcclxuICAgICAgdGhpcy5jYXNjYWRlclNlcnZpY2UucHJlcGFyZVNlYXJjaE9wdGlvbnModGhpcy5pbnB1dFZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzT3B0aW9uQWN0aXZhdGVkKG9wdGlvbjogTnpDYXNjYWRlck9wdGlvbiwgaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgYWN0aXZlT3B0ID0gdGhpcy5jYXNjYWRlclNlcnZpY2UuYWN0aXZhdGVkT3B0aW9uc1tpbmRleF07XHJcbiAgICByZXR1cm4gYWN0aXZlT3B0ID09PSBvcHRpb247XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmIChpc0Rpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuY2xvc2VNZW51KCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLm56RGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgY2xvc2VNZW51KCk6IHZvaWQge1xyXG4gICAgdGhpcy5ibHVyKCk7XHJcbiAgICB0aGlzLmNsZWFyRGVsYXlNZW51VGltZXIoKTtcclxuICAgIHRoaXMuc2V0TWVudVZpc2libGUoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgb25Qb3NpdGlvbkNoYW5nZShwb3NpdGlvbjogQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlKTogdm9pZCB7XHJcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHBvc2l0aW9uLmNvbm5lY3Rpb25QYWlyLm9yaWdpblkgPT09ICdib3R0b20nID8gJ2JvdHRvbScgOiAndG9wJztcclxuICAgIGlmICh0aGlzLmRyb3BEb3duUG9zaXRpb24gIT09IG5ld1ZhbHVlKSB7XHJcbiAgICAgIHRoaXMuZHJvcERvd25Qb3NpdGlvbiA9IG5ld1ZhbHVlO1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXBvc2l0aW9uIHRoZSBjYXNjYWRlciBwYW5lbC4gV2hlbiBhIG1lbnUgb3BlbnMsIHRoZSBjYXNjYWRlciBleHBhbmRzXHJcbiAgICogYW5kIG1heSBleGNlZWQgdGhlIGJvdW5kYXJ5IG9mIGJyb3dzZXIncyB3aW5kb3cuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSByZXBvc2l0aW9uKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMub3ZlcmxheSAmJiB0aGlzLm92ZXJsYXkub3ZlcmxheVJlZiAmJiB0aGlzLm1lbnVWaXNpYmxlKSB7XHJcbiAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMub3ZlcmxheS5vdmVybGF5UmVmLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogV2hlbiBhIGNhc2NhZGVyIG9wdGlvbnMgaXMgY2hhbmdlZCwgYSBjaGlsZCBuZWVkcyB0byBrbm93IHRoYXQgaXQgc2hvdWxkIHJlLXJlbmRlci5cclxuICAgKi9cclxuICBwcml2YXRlIGNoZWNrQ2hpbGRyZW4oKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5jYXNjYWRlckl0ZW1zKSB7XHJcbiAgICAgIHRoaXMuY2FzY2FkZXJJdGVtcy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5tYXJrRm9yQ2hlY2soKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGJ1aWxkRGlzcGxheUxhYmVsKCk6IHZvaWQge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25zID0gdGhpcy5jYXNjYWRlclNlcnZpY2Uuc2VsZWN0ZWRPcHRpb25zO1xyXG4gICAgY29uc3QgbGFiZWxzOiBzdHJpbmdbXSA9IHNlbGVjdGVkT3B0aW9ucy5tYXAobyA9PiB0aGlzLmNhc2NhZGVyU2VydmljZS5nZXRPcHRpb25MYWJlbChvKSk7XHJcblxyXG4gICAgaWYgKHRoaXMuaXNMYWJlbFJlbmRlclRlbXBsYXRlKSB7XHJcbiAgICAgIHRoaXMubGFiZWxSZW5kZXJDb250ZXh0ID0geyBsYWJlbHMsIHNlbGVjdGVkT3B0aW9ucyB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5sYWJlbFJlbmRlclRleHQgPSBkZWZhdWx0RGlzcGxheVJlbmRlci5jYWxsKHRoaXMsIGxhYmVscywgc2VsZWN0ZWRPcHRpb25zKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0TG9jYWxlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG5TZXJ2aWNlLmdldExvY2FsZURhdGEoJ2dsb2JhbCcpO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2RrT3ZlcmxheU9yaWdpbiAjb3JpZ2luPVwiY2RrT3ZlcmxheU9yaWdpblwiICN0cmlnZ2VyPlxyXG4gIDxkaXYgKm5nSWY9XCJuelNob3dJbnB1dFwiPlxyXG4gICAgPGlucHV0XHJcbiAgICAgICNpbnB1dFxyXG4gICAgICBuei1pbnB1dFxyXG4gICAgICBjbGFzcz1cImFudC1jYXNjYWRlci1pbnB1dFwiXHJcbiAgICAgIFtjbGFzcy5hbnQtY2FzY2FkZXItaW5wdXQtZGlzYWJsZWRdPVwibnpEaXNhYmxlZFwiXHJcbiAgICAgIFtjbGFzcy5hbnQtY2FzY2FkZXItaW5wdXQtbGddPVwibnpTaXplID09PSAnbGFyZ2UnXCJcclxuICAgICAgW2NsYXNzLmFudC1jYXNjYWRlci1pbnB1dC1zbV09XCJuelNpemUgPT09ICdzbWFsbCdcIlxyXG4gICAgICBbYXR0ci5hdXRvQ29tcGxldGVdPVwiJ29mZidcIlxyXG4gICAgICBbYXR0ci5wbGFjZWhvbGRlcl09XCJzaG93UGxhY2Vob2xkZXIgPyBuelBsYWNlSG9sZGVyIHx8IGxvY2FsZT8ucGxhY2Vob2xkZXIgOiBudWxsXCJcclxuICAgICAgW2F0dHIuYXV0b2ZvY3VzXT1cIm56QXV0b0ZvY3VzID8gJ2F1dG9mb2N1cycgOiBudWxsXCJcclxuICAgICAgW3JlYWRvbmx5XT1cIiFuelNob3dTZWFyY2hcIlxyXG4gICAgICBbZGlzYWJsZWRdPVwibnpEaXNhYmxlZFwiXHJcbiAgICAgIFtuelNpemVdPVwibnpTaXplXCJcclxuICAgICAgWyhuZ01vZGVsKV09XCJpbnB1dFZhbHVlXCJcclxuICAgICAgKGJsdXIpPVwiaGFuZGxlSW5wdXRCbHVyKClcIlxyXG4gICAgICAoZm9jdXMpPVwiaGFuZGxlSW5wdXRGb2N1cygpXCJcclxuICAgICAgKGNoYW5nZSk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIlxyXG4gICAgLz5cclxuICAgIDxpXHJcbiAgICAgICpuZ0lmPVwiY2xlYXJJY29uVmlzaWJsZVwiXHJcbiAgICAgIG56LWljb25cclxuICAgICAgbnpUeXBlPVwiY2xvc2UtY2lyY2xlXCJcclxuICAgICAgbnpUaGVtZT1cImZpbGxcIlxyXG4gICAgICBjbGFzcz1cImFudC1jYXNjYWRlci1waWNrZXItY2xlYXJcIlxyXG4gICAgICAoY2xpY2spPVwiY2xlYXJTZWxlY3Rpb24oJGV2ZW50KVwiXHJcbiAgICA+PC9pPlxyXG4gICAgPGlcclxuICAgICAgKm5nSWY9XCJuelNob3dBcnJvdyAmJiAhaXNMb2FkaW5nXCJcclxuICAgICAgbnotaWNvblxyXG4gICAgICBuelR5cGU9XCJkb3duXCJcclxuICAgICAgY2xhc3M9XCJhbnQtY2FzY2FkZXItcGlja2VyLWFycm93XCJcclxuICAgICAgW2NsYXNzLmFudC1jYXNjYWRlci1waWNrZXItYXJyb3ctZXhwYW5kXT1cIm1lbnVWaXNpYmxlXCJcclxuICAgID5cclxuICAgIDwvaT5cclxuICAgIDxpICpuZ0lmPVwiaXNMb2FkaW5nXCIgbnotaWNvbiBuelR5cGU9XCJsb2FkaW5nXCIgY2xhc3M9XCJhbnQtY2FzY2FkZXItcGlja2VyLWFycm93XCI+PC9pPlxyXG4gICAgPHNwYW5cclxuICAgICAgY2xhc3M9XCJhbnQtY2FzY2FkZXItcGlja2VyLWxhYmVsXCJcclxuICAgICAgW2NsYXNzLmFudC1jYXNjYWRlci1zaG93LXNlYXJjaF09XCIhIW56U2hvd1NlYXJjaFwiXHJcbiAgICAgIFtjbGFzcy5hbnQtZm9jdXNkXT1cIiEhbnpTaG93U2VhcmNoICYmIGlzRm9jdXNlZCAmJiAhaW5wdXRWYWx1ZVwiXHJcbiAgICA+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXNMYWJlbFJlbmRlclRlbXBsYXRlOyBlbHNlIGxhYmVsVGVtcGxhdGVcIj57e1xyXG4gICAgICAgIGxhYmVsUmVuZGVyVGV4dFxyXG4gICAgICB9fTwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctdGVtcGxhdGUgI2xhYmVsVGVtcGxhdGU+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlXHJcbiAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJuekxhYmVsUmVuZGVyXCJcclxuICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJsYWJlbFJlbmRlckNvbnRleHRcIlxyXG4gICAgICAgID48L25nLXRlbXBsYXRlPlxyXG4gICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgPC9zcGFuPlxyXG4gIDwvZGl2PlxyXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC9kaXY+XHJcbjxuZy10ZW1wbGF0ZVxyXG4gIGNka0Nvbm5lY3RlZE92ZXJsYXlcclxuICBuekNvbm5lY3RlZE92ZXJsYXlcclxuICBjZGtDb25uZWN0ZWRPdmVybGF5SGFzQmFja2Ryb3BcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9yaWdpbl09XCJvcmlnaW5cIlxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25zXT1cInBvc2l0aW9uc1wiXHJcbiAgKGJhY2tkcm9wQ2xpY2spPVwiY2xvc2VNZW51KClcIlxyXG4gIChkZXRhY2gpPVwiY2xvc2VNZW51KClcIlxyXG4gIChwb3NpdGlvbkNoYW5nZSk9XCJvblBvc2l0aW9uQ2hhbmdlKCRldmVudClcIlxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5T3Blbl09XCJtZW51VmlzaWJsZVwiXHJcbj5cclxuICA8ZGl2XHJcbiAgICAjbWVudVxyXG4gICAgY2xhc3M9XCJhbnQtY2FzY2FkZXItbWVudXNcIlxyXG4gICAgKm5nSWY9XCIobnpPcHRpb25zICYmIG56T3B0aW9ucy5sZW5ndGgpIHx8IGluU2VhcmNoaW5nTW9kZVwiXHJcbiAgICBbY2xhc3MuYW50LWNhc2NhZGVyLW1lbnVzLWhpZGRlbl09XCIhbWVudVZpc2libGVcIlxyXG4gICAgW25nQ2xhc3NdPVwibWVudUNsc1wiXHJcbiAgICBbbmdTdHlsZV09XCJuek1lbnVTdHlsZVwiXHJcbiAgICBbQC5kaXNhYmxlZF09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXHJcbiAgICBbbnpOb0FuaW1hdGlvbl09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXHJcbiAgICBbQHNsaWRlTW90aW9uXT1cImRyb3BEb3duUG9zaXRpb25cIlxyXG4gICAgKG1vdXNlbGVhdmUpPVwib25UcmlnZ2VyTW91c2VMZWF2ZSgkZXZlbnQpXCJcclxuICA+XHJcbiAgICA8dWxcclxuICAgICAgKm5nRm9yPVwibGV0IG9wdGlvbnMgb2YgY2FzY2FkZXJTZXJ2aWNlLmNvbHVtbnM7IGxldCBpID0gaW5kZXhcIlxyXG4gICAgICBjbGFzcz1cImFudC1jYXNjYWRlci1tZW51XCJcclxuICAgICAgW25nQ2xhc3NdPVwibWVudUNvbHVtbkNsc1wiXHJcbiAgICAgIFtzdHlsZS5oZWlnaHRdPVwiaW5TZWFyY2hpbmdNb2RlICYmICFjYXNjYWRlclNlcnZpY2UuY29sdW1uc1swXS5sZW5ndGggPyAnYXV0bycgOiAnJ1wiXHJcbiAgICAgIFtzdHlsZS53aWR0aF09XCJkcm9wZG93bldpZHRoU3R5bGVcIlxyXG4gICAgPlxyXG4gICAgICA8bGlcclxuICAgICAgICBuei1jYXNjYWRlci1vcHRpb25cclxuICAgICAgICAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG9wdGlvbnNcIlxyXG4gICAgICAgIFtjb2x1bW5JbmRleF09XCJpXCJcclxuICAgICAgICBbbnpMYWJlbFByb3BlcnR5XT1cIm56TGFiZWxQcm9wZXJ0eVwiXHJcbiAgICAgICAgW29wdGlvblRlbXBsYXRlXT1cIm56T3B0aW9uUmVuZGVyXCJcclxuICAgICAgICBbYWN0aXZhdGVkXT1cImlzT3B0aW9uQWN0aXZhdGVkKG9wdGlvbiwgaSlcIlxyXG4gICAgICAgIFtoaWdobGlnaHRUZXh0XT1cImluU2VhcmNoaW5nTW9kZSA/IGlucHV0VmFsdWUgOiAnJ1wiXHJcbiAgICAgICAgW29wdGlvbl09XCJvcHRpb25cIlxyXG4gICAgICAgIChtb3VzZWVudGVyKT1cIm9uT3B0aW9uTW91c2VFbnRlcihvcHRpb24sIGksICRldmVudClcIlxyXG4gICAgICAgIChtb3VzZWxlYXZlKT1cIm9uT3B0aW9uTW91c2VMZWF2ZShvcHRpb24sIGksICRldmVudClcIlxyXG4gICAgICAgIChjbGljayk9XCJvbk9wdGlvbkNsaWNrKG9wdGlvbiwgaSwgJGV2ZW50KVwiXHJcbiAgICAgID48L2xpPlxyXG4gICAgICA8bGlcclxuICAgICAgICAqbmdJZj1cImluU2VhcmNoaW5nTW9kZSAmJiAhY2FzY2FkZXJTZXJ2aWNlLmNvbHVtbnNbMF0ubGVuZ3RoXCJcclxuICAgICAgICBjbGFzcz1cImFudC1jYXNjYWRlci1tZW51LWl0ZW0gYW50LWNhc2NhZGVyLW1lbnUtaXRlbS1leHBhbmRlZCBhbnQtY2FzY2FkZXItbWVudS1pdGVtLWRpc2FibGVkXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxuei1lbWJlZC1lbXB0eVxyXG4gICAgICAgICAgW256Q29tcG9uZW50TmFtZV09XCInY2FzY2FkZXInXCJcclxuICAgICAgICAgIFtzcGVjaWZpY0NvbnRlbnRdPVwibnpOb3RGb3VuZENvbnRlbnRcIlxyXG4gICAgICAgID48L256LWVtYmVkLWVtcHR5PlxyXG4gICAgICA8L2xpPlxyXG4gICAgPC91bD5cclxuICA8L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuIl19