/**
 * @fileoverview added by tsickle
 * Generated from: nz-cascader.component.ts
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
import { BACKSPACE, DOWN_ARROW, ENTER, ESCAPE, LEFT_ARROW, RIGHT_ARROW, UP_ARROW } from '@angular/cdk/keycodes';
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Host, HostListener, Input, Optional, Output, QueryList, Renderer2, TemplateRef, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import { slideMotion, toArray, warnDeprecation, DEFAULT_DROPDOWN_POSITIONS, InputBoolean, NzConfigService, NzNoAnimationDirective, WithConfig } from 'ng-zorro-antd/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { NzCascaderOptionComponent } from './nz-cascader-li.component';
import { NzCascaderService } from './nz-cascader.service';
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'cascader';
/** @type {?} */
const defaultDisplayRender = (/**
 * @param {?} labels
 * @return {?}
 */
(labels) => labels.join(' / '));
const ɵ0 = defaultDisplayRender;
export class NzCascaderComponent {
    /**
     * @param {?} cascaderService
     * @param {?} i18nService
     * @param {?} nzConfigService
     * @param {?} cdr
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?=} noAnimation
     */
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
        // ms
        this.nzMouseLeaveDelay = 150; // ms
        // ms
        this.nzTriggerAction = (/** @type {?} */ (['click']));
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
    // tslint:disable-line:no-any
    /**
     * @return {?}
     */
    get nzOptions() {
        return this.cascaderService.nzOptions;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    set nzOptions(options) {
        this.cascaderService.withOptions(options);
    }
    /**
     * @return {?}
     */
    get inSearchingMode() {
        return this.cascaderService.inSearchingMode;
    }
    /**
     * @param {?} inputValue
     * @return {?}
     */
    set inputValue(inputValue) {
        this.inputString = inputValue;
        this.toggleSearchingMode(!!inputValue);
    }
    /**
     * @return {?}
     */
    get inputValue() {
        return this.inputString;
    }
    /**
     * @return {?}
     */
    get menuCls() {
        return { [`${this.nzMenuClassName}`]: !!this.nzMenuClassName };
    }
    /**
     * @return {?}
     */
    get menuColumnCls() {
        return { [`${this.nzColumnClassName}`]: !!this.nzColumnClassName };
    }
    /**
     * @private
     * @return {?}
     */
    get hasInput() {
        return !!this.inputValue;
    }
    /**
     * @private
     * @return {?}
     */
    get hasValue() {
        return this.cascaderService.values && this.cascaderService.values.length > 0;
    }
    /**
     * @return {?}
     */
    get showPlaceholder() {
        return !(this.hasInput || this.hasValue);
    }
    /**
     * @return {?}
     */
    get clearIconVisible() {
        return this.nzAllowClear && !this.nzDisabled && (this.hasValue || this.hasInput);
    }
    /**
     * @return {?}
     */
    get isLabelRenderTemplate() {
        return !!this.nzLabelRender;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const srv = this.cascaderService;
        srv.$redraw.pipe(takeUntil(this.$destroy)).subscribe((/**
         * @return {?}
         */
        () => {
            // These operations would not mutate data.
            this.checkChildren();
            this.buildDisplayLabel();
            this.reposition();
            this.cdr.markForCheck();
        }));
        srv.$loading.pipe(takeUntil(this.$destroy)).subscribe((/**
         * @param {?} loading
         * @return {?}
         */
        loading => {
            this.isLoading = loading;
        }));
        srv.$optionSelected.pipe(takeUntil(this.$destroy)).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            if (!data) {
                this.onChange([]);
                this.nzSelect.emit(null);
                this.nzSelectionChange.emit([]);
            }
            else {
                const { option, index } = data;
                /** @type {?} */
                const shouldClose = option.isLeaf;
                if (shouldClose) {
                    this.delaySetMenuVisible(false);
                }
                this.onChange(this.cascaderService.values);
                this.nzSelectionChange.emit(this.cascaderService.selectedOptions);
                this.nzSelect.emit({ option, index });
                this.cdr.markForCheck();
            }
        }));
        srv.$quitSearching.pipe(takeUntil(this.$destroy)).subscribe((/**
         * @return {?}
         */
        () => {
            this.inputString = '';
            this.dropdownWidthStyle = '';
        }));
        this.i18nService.localeChange
            .pipe(startWith(), takeUntil(this.$destroy))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.setLocale();
        }));
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(takeUntil(this.$destroy))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.cdr.markForCheck();
        }));
        if (this.nzSelect.observers.length > 0) {
            warnDeprecation(`nzSelect is deprecated and will be removed in 9.0.0. Please use 'nzSelectionChange' instead.`);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.$destroy.next();
        this.$destroy.complete();
        this.clearDelayMenuTimer();
        this.clearDelaySelectTimer();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.cascaderService.values = toArray(value);
        this.cascaderService.syncOptions(true);
    }
    /**
     * @param {?} visible
     * @param {?=} delay
     * @param {?=} setOpening
     * @return {?}
     */
    delaySetMenuVisible(visible, delay = 100, setOpening = false) {
        this.clearDelayMenuTimer();
        if (delay) {
            if (visible && setOpening) {
                this.isOpening = true;
            }
            this.delayMenuTimer = setTimeout((/**
             * @return {?}
             */
            () => {
                this.setMenuVisible(visible);
                this.cdr.detectChanges();
                this.clearDelayMenuTimer();
                if (visible) {
                    setTimeout((/**
                     * @return {?}
                     */
                    () => {
                        this.isOpening = false;
                    }), 100);
                }
            }), delay);
        }
        else {
            this.setMenuVisible(visible);
        }
    }
    /**
     * @param {?} visible
     * @return {?}
     */
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
    /**
     * @private
     * @return {?}
     */
    clearDelayMenuTimer() {
        if (this.delayMenuTimer) {
            clearTimeout(this.delayMenuTimer);
            this.delayMenuTimer = null;
        }
    }
    /**
     * @param {?=} event
     * @return {?}
     */
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
    /**
     * @return {?}
     */
    getSubmitValue() {
        return this.cascaderService.selectedOptions.map((/**
         * @param {?} o
         * @return {?}
         */
        o => this.cascaderService.getOptionValue(o)));
    }
    /**
     * @return {?}
     */
    focus() {
        if (!this.isFocused) {
            (this.input ? this.input.nativeElement : this.el).focus();
            this.isFocused = true;
        }
    }
    /**
     * @return {?}
     */
    blur() {
        if (this.isFocused) {
            (this.input ? this.input.nativeElement : this.el).blur();
            this.isFocused = false;
        }
    }
    /**
     * @return {?}
     */
    handleInputBlur() {
        this.menuVisible ? this.focus() : this.blur();
    }
    /**
     * @return {?}
     */
    handleInputFocus() {
        this.focus();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        /** @type {?} */
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
    /**
     * @return {?}
     */
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
    /**
     * @return {?}
     */
    onTriggerMouseEnter() {
        if (this.nzDisabled || !this.isActionTrigger('hover')) {
            return;
        }
        this.delaySetMenuVisible(true, this.nzMouseEnterDelay, true);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onTriggerMouseLeave(event) {
        if (this.nzDisabled || !this.menuVisible || this.isOpening || !this.isActionTrigger('hover')) {
            event.preventDefault();
            return;
        }
        /** @type {?} */
        const mouseTarget = (/** @type {?} */ (event.relatedTarget));
        /** @type {?} */
        const hostEl = this.el;
        /** @type {?} */
        const menuEl = this.menu && ((/** @type {?} */ (this.menu.nativeElement)));
        if (hostEl.contains(mouseTarget) || (menuEl && menuEl.contains(mouseTarget))) {
            return;
        }
        this.delaySetMenuVisible(false, this.nzMouseLeaveDelay);
    }
    /**
     * @param {?} option
     * @param {?} columnIndex
     * @param {?} event
     * @return {?}
     */
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
    /**
     * @param {?} option
     * @param {?} _columnIndex
     * @param {?} event
     * @return {?}
     */
    onOptionMouseLeave(option, _columnIndex, event) {
        event.preventDefault();
        if (this.nzExpandTrigger === 'hover' && !option.isLeaf) {
            this.clearDelaySelectTimer();
        }
    }
    /**
     * @param {?} option
     * @param {?} columnIndex
     * @param {?} event
     * @return {?}
     */
    onOptionClick(option, columnIndex, event) {
        if (event) {
            event.preventDefault();
        }
        if (option && option.disabled) {
            return;
        }
        this.el.focus();
        this.inSearchingMode
            ? this.cascaderService.setSearchOptionSelected((/** @type {?} */ (option)))
            : this.cascaderService.setOptionActivated(option, columnIndex, true);
    }
    /**
     * @private
     * @param {?} action
     * @return {?}
     */
    isActionTrigger(action) {
        return typeof this.nzTriggerAction === 'string'
            ? this.nzTriggerAction === action
            : this.nzTriggerAction.indexOf(action) !== -1;
    }
    /**
     * @private
     * @return {?}
     */
    onEnter() {
        /** @type {?} */
        const columnIndex = Math.max(this.cascaderService.activatedOptions.length - 1, 0);
        /** @type {?} */
        const option = this.cascaderService.activatedOptions[columnIndex];
        if (option && !option.disabled) {
            this.inSearchingMode
                ? this.cascaderService.setSearchOptionSelected((/** @type {?} */ (option)))
                : this.cascaderService.setOptionActivated(option, columnIndex, true);
        }
    }
    /**
     * @private
     * @param {?} isUp
     * @return {?}
     */
    moveUpOrDown(isUp) {
        /** @type {?} */
        const columnIndex = Math.max(this.cascaderService.activatedOptions.length - 1, 0);
        /** @type {?} */
        const activeOption = this.cascaderService.activatedOptions[columnIndex];
        /** @type {?} */
        const options = this.cascaderService.columns[columnIndex] || [];
        /** @type {?} */
        const length = options.length;
        /** @type {?} */
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
            /** @type {?} */
            const nextOption = options[nextIndex];
            if (!nextOption || nextOption.disabled) {
                continue;
            }
            this.cascaderService.setOptionActivated(nextOption, columnIndex);
            break;
        }
    }
    /**
     * @private
     * @return {?}
     */
    moveLeft() {
        /** @type {?} */
        const options = this.cascaderService.activatedOptions;
        if (options.length) {
            options.pop(); // Remove the last one
        }
    }
    /**
     * @private
     * @return {?}
     */
    moveRight() {
        /** @type {?} */
        const length = this.cascaderService.activatedOptions.length;
        /** @type {?} */
        const options = this.cascaderService.columns[length];
        if (options && options.length) {
            /** @type {?} */
            const nextOpt = options.find((/**
             * @param {?} o
             * @return {?}
             */
            o => !o.disabled));
            if (nextOpt) {
                this.cascaderService.setOptionActivated(nextOpt, length);
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    clearDelaySelectTimer() {
        if (this.delaySelectTimer) {
            clearTimeout(this.delaySelectTimer);
            this.delaySelectTimer = null;
        }
    }
    /**
     * @private
     * @param {?} option
     * @param {?} columnIndex
     * @param {?} performSelect
     * @return {?}
     */
    delaySetOptionActivated(option, columnIndex, performSelect) {
        this.clearDelaySelectTimer();
        this.delaySelectTimer = setTimeout((/**
         * @return {?}
         */
        () => {
            this.cascaderService.setOptionActivated(option, columnIndex, performSelect);
            this.delaySelectTimer = null;
        }), 150);
    }
    /**
     * @private
     * @param {?} toSearching
     * @return {?}
     */
    toggleSearchingMode(toSearching) {
        if (this.inSearchingMode !== toSearching) {
            this.cascaderService.toggleSearchingMode(toSearching);
            this.dropdownWidthStyle = toSearching ? `${this.input.nativeElement.offsetWidth}px` : '';
        }
        if (this.inSearchingMode) {
            this.cascaderService.prepareSearchOptions(this.inputValue);
        }
    }
    /**
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    isOptionActivated(option, index) {
        /** @type {?} */
        const activeOpt = this.cascaderService.activatedOptions[index];
        return activeOpt === option;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        if (isDisabled) {
            this.closeMenu();
        }
        this.nzDisabled = isDisabled;
    }
    /**
     * @return {?}
     */
    closeMenu() {
        this.blur();
        this.clearDelayMenuTimer();
        this.setMenuVisible(false);
    }
    /**
     * @param {?} position
     * @return {?}
     */
    onPositionChange(position) {
        /** @type {?} */
        const newValue = position.connectionPair.originY === 'bottom' ? 'bottom' : 'top';
        if (this.dropDownPosition !== newValue) {
            this.dropDownPosition = newValue;
            this.cdr.detectChanges();
        }
    }
    /**
     * Reposition the cascader panel. When a menu opens, the cascader expands
     * and may exceed the boundary of browser's window.
     * @private
     * @return {?}
     */
    reposition() {
        if (this.overlay && this.overlay.overlayRef && this.menuVisible) {
            Promise.resolve().then((/**
             * @return {?}
             */
            () => {
                this.overlay.overlayRef.updatePosition();
            }));
        }
    }
    /**
     * When a cascader options is changed, a child needs to know that it should re-render.
     * @private
     * @return {?}
     */
    checkChildren() {
        if (this.cascaderItems) {
            this.cascaderItems.forEach((/**
             * @param {?} item
             * @return {?}
             */
            item => item.markForCheck()));
        }
    }
    /**
     * @private
     * @return {?}
     */
    buildDisplayLabel() {
        /** @type {?} */
        const selectedOptions = this.cascaderService.selectedOptions;
        /** @type {?} */
        const labels = selectedOptions.map((/**
         * @param {?} o
         * @return {?}
         */
        o => this.cascaderService.getOptionLabel(o)));
        if (this.isLabelRenderTemplate) {
            this.labelRenderContext = { labels, selectedOptions };
        }
        else {
            this.labelRenderText = defaultDisplayRender.call(this, labels, selectedOptions);
        }
    }
    /**
     * @private
     * @return {?}
     */
    setLocale() {
        this.locale = this.i18nService.getLocaleData('global');
        this.cdr.markForCheck();
    }
}
NzCascaderComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-cascader, [nz-cascader]',
                exportAs: 'nzCascader',
                preserveWhitespaces: false,
                template: "<div\r\n  cdkOverlayOrigin\r\n  #origin=\"cdkOverlayOrigin\"\r\n  #trigger>\r\n  <div *ngIf=\"nzShowInput\">\r\n    <input\r\n      #input\r\n      nz-input\r\n      class=\"ant-cascader-input\"\r\n      [class.ant-cascader-input-disabled]=\"nzDisabled\"\r\n      [class.ant-cascader-input-lg]=\"nzSize === 'large'\"\r\n      [class.ant-cascader-input-sm]=\"nzSize === 'small'\"\r\n      [attr.autoComplete]=\"'off'\"\r\n      [attr.placeholder]=\"showPlaceholder ? (nzPlaceHolder || locale?.placeholder ) : null\"\r\n      [attr.autofocus]=\"nzAutoFocus ? 'autofocus' : null\"\r\n      [readonly]=\"!nzShowSearch\"\r\n      [disabled]=\"nzDisabled\"\r\n      [nzSize]=\"nzSize\"\r\n      [(ngModel)]=\"inputValue\"\r\n      (blur)=\"handleInputBlur()\"\r\n      (focus)=\"handleInputFocus()\"\r\n      (change)=\"$event.stopPropagation()\">\r\n    <i *ngIf=\"clearIconVisible\"\r\n      nz-icon\r\n      nzType=\"close-circle\"\r\n      nzTheme=\"fill\"\r\n      class=\"ant-cascader-picker-clear\"\r\n      (click)=\"clearSelection($event)\"></i>\r\n    <i *ngIf=\"nzShowArrow && !isLoading\"\r\n      nz-icon\r\n      nzType=\"down\"\r\n      class=\"ant-cascader-picker-arrow\"\r\n      [class.ant-cascader-picker-arrow-expand]=\"menuVisible\">\r\n    </i>\r\n    <i *ngIf=\"isLoading\" nz-icon nzType=\"loading\" class=\"ant-cascader-picker-arrow\"></i>\r\n    <span\r\n      class=\"ant-cascader-picker-label\"\r\n      [class.ant-cascader-show-search]=\"!!nzShowSearch\"\r\n      [class.ant-focusd]=\"!!nzShowSearch && isFocused && !inputValue\">\r\n      <ng-container *ngIf=\"!isLabelRenderTemplate; else labelTemplate\">{{ labelRenderText }}</ng-container>\r\n      <ng-template #labelTemplate>\r\n        <ng-template [ngTemplateOutlet]=\"nzLabelRender\" [ngTemplateOutletContext]=\"labelRenderContext\"></ng-template>\r\n      </ng-template>\r\n    </span>\r\n  </div>\r\n  <ng-content></ng-content>\r\n</div>\r\n<ng-template\r\n  cdkConnectedOverlay\r\n  nzConnectedOverlay\r\n  cdkConnectedOverlayHasBackdrop\r\n  [cdkConnectedOverlayOrigin]=\"origin\"\r\n  [cdkConnectedOverlayPositions]=\"positions\"\r\n  (backdropClick)=\"closeMenu()\"\r\n  (detach)=\"closeMenu()\"\r\n  (positionChange)=\"onPositionChange($event)\"\r\n  [cdkConnectedOverlayOpen]=\"menuVisible\">\r\n  <div\r\n    #menu\r\n    class=\"ant-cascader-menus\"\r\n    *ngIf=\"nzOptions && nzOptions.length || inSearchingMode\"\r\n    [class.ant-cascader-menus-hidden]=\"!menuVisible\"\r\n    [ngClass]=\"menuCls\"\r\n    [ngStyle]=\"nzMenuStyle\"\r\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\r\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n    [@slideMotion]=\"dropDownPosition\"\r\n    (mouseleave)=\"onTriggerMouseLeave($event)\">\r\n    <ul *ngFor=\"let options of cascaderService.columns; let i = index;\" class=\"ant-cascader-menu\"\r\n      [ngClass]=\"menuColumnCls\"\r\n      [style.height]=\"inSearchingMode && !cascaderService.columns[0].length ? 'auto': ''\"\r\n      [style.width]=\"dropdownWidthStyle\">\r\n      <li\r\n        nz-cascader-option\r\n        *ngFor=\"let option of options\"\r\n        [columnIndex]=\"i\"\r\n        [nzLabelProperty]=\"nzLabelProperty\"\r\n        [optionTemplate]=\"nzOptionRender\"\r\n        [activated]=\"isOptionActivated(option, i)\"\r\n        [highlightText]=\"inSearchingMode ? inputValue : ''\"\r\n        [option]=\"option\"\r\n        (mouseenter)=\"onOptionMouseEnter(option, i, $event)\"\r\n        (mouseleave)=\"onOptionMouseLeave(option, i, $event)\"\r\n        (click)=\"onOptionClick(option, i, $event)\">\r\n      </li>\r\n      <li *ngIf=\"inSearchingMode && !cascaderService.columns[0].length\"\r\n        class=\"ant-cascader-menu-item ant-cascader-menu-item-expanded ant-cascader-menu-item-disabled\">\r\n        <nz-embed-empty [nzComponentName]=\"'cascader'\" [specificContent]=\"nzNotFoundContent\"></nz-embed-empty>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</ng-template>\r\n",
                animations: [slideMotion],
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => NzCascaderComponent)),
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
                styles: [`
      .ant-cascader-menus {
        margin-top: 4px;
        margin-bottom: 4px;
        top: 100%;
        left: 0;
        position: relative;
        width: 100%;
      }
    `]
            }] }
];
/** @nocollapse */
NzCascaderComponent.ctorParameters = () => [
    { type: NzCascaderService },
    { type: NzI18nService },
    { type: NzConfigService },
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: Renderer2 },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
NzCascaderComponent.propDecorators = {
    input: [{ type: ViewChild, args: ['input', { static: false },] }],
    menu: [{ type: ViewChild, args: ['menu', { static: false },] }],
    overlay: [{ type: ViewChild, args: [CdkConnectedOverlay, { static: false },] }],
    cascaderItems: [{ type: ViewChildren, args: [NzCascaderOptionComponent,] }],
    nzOptionRender: [{ type: Input }],
    nzShowInput: [{ type: Input }],
    nzShowArrow: [{ type: Input }],
    nzAllowClear: [{ type: Input }],
    nzAutoFocus: [{ type: Input }],
    nzChangeOnSelect: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzColumnClassName: [{ type: Input }],
    nzExpandTrigger: [{ type: Input }],
    nzValueProperty: [{ type: Input }],
    nzLabelRender: [{ type: Input }],
    nzLabelProperty: [{ type: Input }],
    nzNotFoundContent: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzShowSearch: [{ type: Input }],
    nzPlaceHolder: [{ type: Input }],
    nzMenuClassName: [{ type: Input }],
    nzMenuStyle: [{ type: Input }],
    nzMouseEnterDelay: [{ type: Input }],
    nzMouseLeaveDelay: [{ type: Input }],
    nzTriggerAction: [{ type: Input }],
    nzChangeOn: [{ type: Input }],
    nzLoadData: [{ type: Input }],
    nzOptions: [{ type: Input }],
    nzVisibleChange: [{ type: Output }],
    nzSelectionChange: [{ type: Output }],
    nzSelect: [{ type: Output }],
    nzClear: [{ type: Output }],
    onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }],
    onTriggerClick: [{ type: HostListener, args: ['click',] }],
    onTriggerMouseEnter: [{ type: HostListener, args: ['mouseenter',] }],
    onTriggerMouseLeave: [{ type: HostListener, args: ['mouseleave', ['$event'],] }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzCascaderComponent.prototype, "nzShowInput", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzCascaderComponent.prototype, "nzShowArrow", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzCascaderComponent.prototype, "nzAllowClear", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzCascaderComponent.prototype, "nzAutoFocus", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzCascaderComponent.prototype, "nzChangeOnSelect", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzCascaderComponent.prototype, "nzDisabled", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default'),
    tslib_1.__metadata("design:type", String)
], NzCascaderComponent.prototype, "nzSize", void 0);
if (false) {
    /** @type {?} */
    NzCascaderComponent.prototype.input;
    /** @type {?} */
    NzCascaderComponent.prototype.menu;
    /** @type {?} */
    NzCascaderComponent.prototype.overlay;
    /** @type {?} */
    NzCascaderComponent.prototype.cascaderItems;
    /** @type {?} */
    NzCascaderComponent.prototype.nzOptionRender;
    /** @type {?} */
    NzCascaderComponent.prototype.nzShowInput;
    /** @type {?} */
    NzCascaderComponent.prototype.nzShowArrow;
    /** @type {?} */
    NzCascaderComponent.prototype.nzAllowClear;
    /** @type {?} */
    NzCascaderComponent.prototype.nzAutoFocus;
    /** @type {?} */
    NzCascaderComponent.prototype.nzChangeOnSelect;
    /** @type {?} */
    NzCascaderComponent.prototype.nzDisabled;
    /** @type {?} */
    NzCascaderComponent.prototype.nzColumnClassName;
    /** @type {?} */
    NzCascaderComponent.prototype.nzExpandTrigger;
    /** @type {?} */
    NzCascaderComponent.prototype.nzValueProperty;
    /** @type {?} */
    NzCascaderComponent.prototype.nzLabelRender;
    /** @type {?} */
    NzCascaderComponent.prototype.nzLabelProperty;
    /** @type {?} */
    NzCascaderComponent.prototype.nzNotFoundContent;
    /** @type {?} */
    NzCascaderComponent.prototype.nzSize;
    /** @type {?} */
    NzCascaderComponent.prototype.nzShowSearch;
    /** @type {?} */
    NzCascaderComponent.prototype.nzPlaceHolder;
    /** @type {?} */
    NzCascaderComponent.prototype.nzMenuClassName;
    /** @type {?} */
    NzCascaderComponent.prototype.nzMenuStyle;
    /** @type {?} */
    NzCascaderComponent.prototype.nzMouseEnterDelay;
    /** @type {?} */
    NzCascaderComponent.prototype.nzMouseLeaveDelay;
    /** @type {?} */
    NzCascaderComponent.prototype.nzTriggerAction;
    /** @type {?} */
    NzCascaderComponent.prototype.nzChangeOn;
    /** @type {?} */
    NzCascaderComponent.prototype.nzLoadData;
    /** @type {?} */
    NzCascaderComponent.prototype.nzVisibleChange;
    /** @type {?} */
    NzCascaderComponent.prototype.nzSelectionChange;
    /**
     * @deprecated 9.0.0. This api is a duplication of `ngModelChange`.
     * @type {?}
     */
    NzCascaderComponent.prototype.nzSelect;
    /** @type {?} */
    NzCascaderComponent.prototype.nzClear;
    /** @type {?} */
    NzCascaderComponent.prototype.el;
    /** @type {?} */
    NzCascaderComponent.prototype.dropDownPosition;
    /** @type {?} */
    NzCascaderComponent.prototype.menuVisible;
    /** @type {?} */
    NzCascaderComponent.prototype.isLoading;
    /** @type {?} */
    NzCascaderComponent.prototype.labelRenderText;
    /** @type {?} */
    NzCascaderComponent.prototype.labelRenderContext;
    /** @type {?} */
    NzCascaderComponent.prototype.onChange;
    /** @type {?} */
    NzCascaderComponent.prototype.onTouched;
    /** @type {?} */
    NzCascaderComponent.prototype.positions;
    /** @type {?} */
    NzCascaderComponent.prototype.dropdownWidthStyle;
    /** @type {?} */
    NzCascaderComponent.prototype.isFocused;
    /** @type {?} */
    NzCascaderComponent.prototype.locale;
    /**
     * @type {?}
     * @private
     */
    NzCascaderComponent.prototype.$destroy;
    /**
     * @type {?}
     * @private
     */
    NzCascaderComponent.prototype.inputString;
    /**
     * @type {?}
     * @private
     */
    NzCascaderComponent.prototype.isOpening;
    /**
     * @type {?}
     * @private
     */
    NzCascaderComponent.prototype.delayMenuTimer;
    /**
     * @type {?}
     * @private
     */
    NzCascaderComponent.prototype.delaySelectTimer;
    /** @type {?} */
    NzCascaderComponent.prototype.cascaderService;
    /**
     * @type {?}
     * @private
     */
    NzCascaderComponent.prototype.i18nService;
    /** @type {?} */
    NzCascaderComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzCascaderComponent.prototype.cdr;
    /** @type {?} */
    NzCascaderComponent.prototype.noAnimation;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FzY2FkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jYXNjYWRlci8iLCJzb3VyY2VzIjpbIm56LWNhc2NhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2hILE9BQU8sRUFBRSxtQkFBbUIsRUFBMEQsTUFBTSxzQkFBc0IsQ0FBQztBQUNuSCxPQUFPLEVBQ0wsVUFBVSxFQUNWLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osSUFBSSxFQUNKLFlBQVksRUFDWixLQUFLLEVBR0wsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1QsWUFBWSxFQUNaLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRELE9BQU8sRUFDTCxXQUFXLEVBQ1gsT0FBTyxFQUNQLGVBQWUsRUFDZiwwQkFBMEIsRUFDMUIsWUFBWSxFQUdaLGVBQWUsRUFDZixzQkFBc0IsRUFDdEIsVUFBVSxFQUNYLE1BQU0sb0JBQW9CLENBQUM7QUFFNUIsT0FBTyxFQUEyQixhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQVU1RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUs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LCtDQUE0Qjs7SUFDNUIsMENBQW9COztJQUNwQix3Q0FBa0I7O0lBQ2xCLDhDQUF3Qjs7SUFDeEIsaURBQXdCOztJQUN4Qix1Q0FBOEI7O0lBQzlCLHdDQUErQjs7SUFDL0Isd0NBQXNFOztJQUN0RSxpREFBMkI7O0lBQzNCLHdDQUFrQjs7SUFFbEIscUNBQWdDOzs7OztJQUVoQyx1Q0FBdUM7Ozs7O0lBQ3ZDLDBDQUF5Qjs7Ozs7SUFDekIsd0NBQTBCOzs7OztJQUMxQiw2Q0FBc0M7Ozs7O0lBQ3RDLCtDQUF3Qzs7SUE0Q3RDLDhDQUF5Qzs7Ozs7SUFDekMsMENBQWtDOztJQUNsQyw4Q0FBdUM7Ozs7O0lBQ3ZDLGtDQUE4Qjs7SUFHOUIsMENBQStEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBCQUNLU1BBQ0UsIERPV05fQVJST1csIEVOVEVSLCBFU0NBUEUsIExFRlRfQVJST1csIFJJR0hUX0FSUk9XLCBVUF9BUlJPVyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XHJcbmltcG9ydCB7IENka0Nvbm5lY3RlZE92ZXJsYXksIENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSwgQ29ubmVjdGlvblBvc2l0aW9uUGFpciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHtcclxuICBmb3J3YXJkUmVmLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBIb3N0LFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBRdWVyeUxpc3QsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3Q2hpbGRyZW4sXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHN0YXJ0V2l0aCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBzbGlkZU1vdGlvbixcclxuICB0b0FycmF5LFxyXG4gIHdhcm5EZXByZWNhdGlvbixcclxuICBERUZBVUxUX0RST1BET1dOX1BPU0lUSU9OUyxcclxuICBJbnB1dEJvb2xlYW4sXHJcbiAgTmdDbGFzc1R5cGUsXHJcbiAgTmdTdHlsZUludGVyZmFjZSxcclxuICBOekNvbmZpZ1NlcnZpY2UsXHJcbiAgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSxcclxuICBXaXRoQ29uZmlnXHJcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56Q2FzY2FkZXJJMThuSW50ZXJmYWNlLCBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuaW1wb3J0IHtcclxuICBOekNhc2NhZGVyQ29tcG9uZW50QXNTb3VyY2UsXHJcbiAgTnpDYXNjYWRlckV4cGFuZFRyaWdnZXIsXHJcbiAgTnpDYXNjYWRlck9wdGlvbixcclxuICBOekNhc2NhZGVyU2VhcmNoT3B0aW9uLFxyXG4gIE56Q2FzY2FkZXJTaXplLFxyXG4gIE56Q2FzY2FkZXJUcmlnZ2VyVHlwZSxcclxuICBOelNob3dTZWFyY2hPcHRpb25zXHJcbn0gZnJvbSAnLi9uei1jYXNjYWRlci1kZWZpbml0aW9ucyc7XHJcbmltcG9ydCB7IE56Q2FzY2FkZXJPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL256LWNhc2NhZGVyLWxpLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56Q2FzY2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi9uei1jYXNjYWRlci5zZXJ2aWNlJztcclxuXHJcbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdjYXNjYWRlcic7XHJcbmNvbnN0IGRlZmF1bHREaXNwbGF5UmVuZGVyID0gKGxhYmVsczogc3RyaW5nW10pID0+IGxhYmVscy5qb2luKCcgLyAnKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc2VsZWN0b3I6ICduei1jYXNjYWRlciwgW256LWNhc2NhZGVyXScsXHJcbiAgZXhwb3J0QXM6ICduekNhc2NhZGVyJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotY2FzY2FkZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGFuaW1hdGlvbnM6IFtzbGlkZU1vdGlvbl0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOekNhc2NhZGVyQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH0sXHJcbiAgICBOekNhc2NhZGVyU2VydmljZVxyXG4gIF0sXHJcbiAgaG9zdDoge1xyXG4gICAgJ1thdHRyLnRhYkluZGV4XSc6ICdcIjBcIicsXHJcbiAgICAnW2NsYXNzLmFudC1jYXNjYWRlci1sZ10nOiAnbnpTaXplID09PSBcImxhcmdlXCInLFxyXG4gICAgJ1tjbGFzcy5hbnQtY2FzY2FkZXItc21dJzogJ256U2l6ZSA9PT0gXCJzbWFsbFwiJyxcclxuICAgICdbY2xhc3MuYW50LWNhc2NhZGVyLXBpY2tlci1kaXNhYmxlZF0nOiAnbnpEaXNhYmxlZCcsXHJcbiAgICAnW2NsYXNzLmFudC1jYXNjYWRlci1waWNrZXItb3Blbl0nOiAnbWVudVZpc2libGUnLFxyXG4gICAgJ1tjbGFzcy5hbnQtY2FzY2FkZXItcGlja2VyLXdpdGgtdmFsdWVdJzogJyEhaW5wdXRWYWx1ZScsXHJcbiAgICAnW2NsYXNzLmFudC1jYXNjYWRlci1mb2N1c2VkXSc6ICdpc0ZvY3VzZWQnXHJcbiAgfSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgLmFudC1jYXNjYWRlci1tZW51cyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgICB0b3A6IDEwMCU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekNhc2NhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgTnpDYXNjYWRlckNvbXBvbmVudEFzU291cmNlLCBPbkluaXQsIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG4gIEBWaWV3Q2hpbGQoJ2lucHV0JywgeyBzdGF0aWM6IGZhbHNlIH0pIGlucHV0OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ21lbnUnLCB7IHN0YXRpYzogZmFsc2UgfSkgbWVudTogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKENka0Nvbm5lY3RlZE92ZXJsYXksIHsgc3RhdGljOiBmYWxzZSB9KSBvdmVybGF5OiBDZGtDb25uZWN0ZWRPdmVybGF5O1xyXG4gIEBWaWV3Q2hpbGRyZW4oTnpDYXNjYWRlck9wdGlvbkNvbXBvbmVudCkgY2FzY2FkZXJJdGVtczogUXVlcnlMaXN0PE56Q2FzY2FkZXJPcHRpb25Db21wb25lbnQ+O1xyXG5cclxuICBASW5wdXQoKSBuek9wdGlvblJlbmRlcjogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56Q2FzY2FkZXJPcHRpb247IGluZGV4OiBudW1iZXIgfT4gfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93SW5wdXQgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dBcnJvdyA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QWxsb3dDbGVhciA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QXV0b0ZvY3VzID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q2hhbmdlT25TZWxlY3QgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56Q29sdW1uQ2xhc3NOYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpFeHBhbmRUcmlnZ2VyOiBOekNhc2NhZGVyRXhwYW5kVHJpZ2dlciA9ICdjbGljayc7XHJcbiAgQElucHV0KCkgbnpWYWx1ZVByb3BlcnR5ID0gJ3ZhbHVlJztcclxuICBASW5wdXQoKSBuekxhYmVsUmVuZGVyOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuekxhYmVsUHJvcGVydHkgPSAnbGFiZWwnO1xyXG4gIEBJbnB1dCgpIG56Tm90Rm91bmRDb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsICdkZWZhdWx0JykgbnpTaXplOiBOekNhc2NhZGVyU2l6ZTtcclxuICBASW5wdXQoKSBuelNob3dTZWFyY2g6IGJvb2xlYW4gfCBOelNob3dTZWFyY2hPcHRpb25zO1xyXG4gIEBJbnB1dCgpIG56UGxhY2VIb2xkZXI6IHN0cmluZztcclxuICBASW5wdXQoKSBuek1lbnVDbGFzc05hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBuek1lbnVTdHlsZTogTmdTdHlsZUludGVyZmFjZTtcclxuICBASW5wdXQoKSBuek1vdXNlRW50ZXJEZWxheTogbnVtYmVyID0gMTUwOyAvLyBtc1xyXG4gIEBJbnB1dCgpIG56TW91c2VMZWF2ZURlbGF5OiBudW1iZXIgPSAxNTA7IC8vIG1zXHJcbiAgQElucHV0KCkgbnpUcmlnZ2VyQWN0aW9uOiBOekNhc2NhZGVyVHJpZ2dlclR5cGUgfCBOekNhc2NhZGVyVHJpZ2dlclR5cGVbXSA9IFsnY2xpY2snXSBhcyBOekNhc2NhZGVyVHJpZ2dlclR5cGVbXTtcclxuICBASW5wdXQoKSBuekNoYW5nZU9uOiAob3B0aW9uOiBOekNhc2NhZGVyT3B0aW9uLCBsZXZlbDogbnVtYmVyKSA9PiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIG56TG9hZERhdGE6IChub2RlOiBOekNhc2NhZGVyT3B0aW9uLCBpbmRleD86IG51bWJlcikgPT4gUHJvbWlzZUxpa2U8YW55PjsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgbnpPcHRpb25zKCk6IE56Q2FzY2FkZXJPcHRpb25bXSB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuY2FzY2FkZXJTZXJ2aWNlLm56T3B0aW9ucztcclxuICB9XHJcblxyXG4gIHNldCBuek9wdGlvbnMob3B0aW9uczogTnpDYXNjYWRlck9wdGlvbltdIHwgbnVsbCkge1xyXG4gICAgdGhpcy5jYXNjYWRlclNlcnZpY2Uud2l0aE9wdGlvbnMob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpWaXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpTZWxlY3Rpb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE56Q2FzY2FkZXJPcHRpb25bXT4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgOS4wLjAuIFRoaXMgYXBpIGlzIGEgZHVwbGljYXRpb24gb2YgYG5nTW9kZWxDaGFuZ2VgLlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8eyBvcHRpb246IE56Q2FzY2FkZXJPcHRpb247IGluZGV4OiBudW1iZXIgfSB8IG51bGw+KCk7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNsZWFyID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBlbDogSFRNTEVsZW1lbnQ7XHJcbiAgZHJvcERvd25Qb3NpdGlvbiA9ICdib3R0b20nO1xyXG4gIG1lbnVWaXNpYmxlID0gZmFsc2U7XHJcbiAgaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgbGFiZWxSZW5kZXJUZXh0OiBzdHJpbmc7XHJcbiAgbGFiZWxSZW5kZXJDb250ZXh0ID0ge307XHJcbiAgb25DaGFuZ2UgPSBGdW5jdGlvbi5wcm90b3R5cGU7XHJcbiAgb25Ub3VjaGVkID0gRnVuY3Rpb24ucHJvdG90eXBlO1xyXG4gIHBvc2l0aW9uczogQ29ubmVjdGlvblBvc2l0aW9uUGFpcltdID0gWy4uLkRFRkFVTFRfRFJPUERPV05fUE9TSVRJT05TXTtcclxuICBkcm9wZG93bldpZHRoU3R5bGU6IHN0cmluZztcclxuICBpc0ZvY3VzZWQgPSBmYWxzZTtcclxuXHJcbiAgbG9jYWxlOiBOekNhc2NhZGVySTE4bkludGVyZmFjZTtcclxuXHJcbiAgcHJpdmF0ZSAkZGVzdHJveSA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgcHJpdmF0ZSBpbnB1dFN0cmluZyA9ICcnO1xyXG4gIHByaXZhdGUgaXNPcGVuaW5nID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBkZWxheU1lbnVUaW1lcjogbnVtYmVyIHwgbnVsbDtcclxuICBwcml2YXRlIGRlbGF5U2VsZWN0VGltZXI6IG51bWJlciB8IG51bGw7XHJcblxyXG4gIGdldCBpblNlYXJjaGluZ01vZGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jYXNjYWRlclNlcnZpY2UuaW5TZWFyY2hpbmdNb2RlO1xyXG4gIH1cclxuXHJcbiAgc2V0IGlucHV0VmFsdWUoaW5wdXRWYWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmlucHV0U3RyaW5nID0gaW5wdXRWYWx1ZTtcclxuICAgIHRoaXMudG9nZ2xlU2VhcmNoaW5nTW9kZSghIWlucHV0VmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlucHV0VmFsdWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmlucHV0U3RyaW5nO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG1lbnVDbHMoKTogTmdDbGFzc1R5cGUge1xyXG4gICAgcmV0dXJuIHsgW2Ake3RoaXMubnpNZW51Q2xhc3NOYW1lfWBdOiAhIXRoaXMubnpNZW51Q2xhc3NOYW1lIH07XHJcbiAgfVxyXG5cclxuICBnZXQgbWVudUNvbHVtbkNscygpOiBOZ0NsYXNzVHlwZSB7XHJcbiAgICByZXR1cm4geyBbYCR7dGhpcy5uekNvbHVtbkNsYXNzTmFtZX1gXTogISF0aGlzLm56Q29sdW1uQ2xhc3NOYW1lIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldCBoYXNJbnB1dCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhIXRoaXMuaW5wdXRWYWx1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0IGhhc1ZhbHVlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY2FzY2FkZXJTZXJ2aWNlLnZhbHVlcyAmJiB0aGlzLmNhc2NhZGVyU2VydmljZS52YWx1ZXMubGVuZ3RoID4gMDtcclxuICB9XHJcblxyXG4gIGdldCBzaG93UGxhY2Vob2xkZXIoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gISh0aGlzLmhhc0lucHV0IHx8IHRoaXMuaGFzVmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNsZWFySWNvblZpc2libGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5uekFsbG93Q2xlYXIgJiYgIXRoaXMubnpEaXNhYmxlZCAmJiAodGhpcy5oYXNWYWx1ZSB8fCB0aGlzLmhhc0lucHV0KTtcclxuICB9XHJcblxyXG4gIGdldCBpc0xhYmVsUmVuZGVyVGVtcGxhdGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gISF0aGlzLm56TGFiZWxSZW5kZXI7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBjYXNjYWRlclNlcnZpY2U6IE56Q2FzY2FkZXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBpMThuU2VydmljZTogTnpJMThuU2VydmljZSxcclxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXHJcbiAgKSB7XHJcbiAgICB0aGlzLmVsID0gZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgdGhpcy5jYXNjYWRlclNlcnZpY2Uud2l0aENvbXBvbmVudCh0aGlzKTtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1jYXNjYWRlcicpO1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWNhc2NhZGVyLXBpY2tlcicpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBzcnYgPSB0aGlzLmNhc2NhZGVyU2VydmljZTtcclxuXHJcbiAgICBzcnYuJHJlZHJhdy5waXBlKHRha2VVbnRpbCh0aGlzLiRkZXN0cm95KSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgLy8gVGhlc2Ugb3BlcmF0aW9ucyB3b3VsZCBub3QgbXV0YXRlIGRhdGEuXHJcbiAgICAgIHRoaXMuY2hlY2tDaGlsZHJlbigpO1xyXG4gICAgICB0aGlzLmJ1aWxkRGlzcGxheUxhYmVsKCk7XHJcbiAgICAgIHRoaXMucmVwb3NpdGlvbigpO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHNydi4kbG9hZGluZy5waXBlKHRha2VVbnRpbCh0aGlzLiRkZXN0cm95KSkuc3Vic2NyaWJlKGxvYWRpbmcgPT4ge1xyXG4gICAgICB0aGlzLmlzTG9hZGluZyA9IGxvYWRpbmc7XHJcbiAgICB9KTtcclxuXHJcbiAgICBzcnYuJG9wdGlvblNlbGVjdGVkLnBpcGUodGFrZVVudGlsKHRoaXMuJGRlc3Ryb3kpKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgIGlmICghZGF0YSkge1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2UoW10pO1xyXG4gICAgICAgIHRoaXMubnpTZWxlY3QuZW1pdChudWxsKTtcclxuICAgICAgICB0aGlzLm56U2VsZWN0aW9uQ2hhbmdlLmVtaXQoW10pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHsgb3B0aW9uLCBpbmRleCB9ID0gZGF0YTtcclxuICAgICAgICBjb25zdCBzaG91bGRDbG9zZSA9IG9wdGlvbi5pc0xlYWY7XHJcbiAgICAgICAgaWYgKHNob3VsZENsb3NlKSB7XHJcbiAgICAgICAgICB0aGlzLmRlbGF5U2V0TWVudVZpc2libGUoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuY2FzY2FkZXJTZXJ2aWNlLnZhbHVlcyk7XHJcbiAgICAgICAgdGhpcy5uelNlbGVjdGlvbkNoYW5nZS5lbWl0KHRoaXMuY2FzY2FkZXJTZXJ2aWNlLnNlbGVjdGVkT3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5uelNlbGVjdC5lbWl0KHsgb3B0aW9uLCBpbmRleCB9KTtcclxuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgc3J2LiRxdWl0U2VhcmNoaW5nLnBpcGUodGFrZVVudGlsKHRoaXMuJGRlc3Ryb3kpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmlucHV0U3RyaW5nID0gJyc7XHJcbiAgICAgIHRoaXMuZHJvcGRvd25XaWR0aFN0eWxlID0gJyc7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmkxOG5TZXJ2aWNlLmxvY2FsZUNoYW5nZVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBzdGFydFdpdGgoKSxcclxuICAgICAgICB0YWtlVW50aWwodGhpcy4kZGVzdHJveSlcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLnNldExvY2FsZSgpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB0aGlzLm56Q29uZmlnU2VydmljZVxyXG4gICAgICAuZ2V0Q29uZmlnQ2hhbmdlRXZlbnRGb3JDb21wb25lbnQoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy4kZGVzdHJveSkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBpZiAodGhpcy5uelNlbGVjdC5vYnNlcnZlcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICB3YXJuRGVwcmVjYXRpb24oYG56U2VsZWN0IGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiA5LjAuMC4gUGxlYXNlIHVzZSAnbnpTZWxlY3Rpb25DaGFuZ2UnIGluc3RlYWQuYCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuJGRlc3Ryb3kubmV4dCgpO1xyXG4gICAgdGhpcy4kZGVzdHJveS5jb21wbGV0ZSgpO1xyXG4gICAgdGhpcy5jbGVhckRlbGF5TWVudVRpbWVyKCk7XHJcbiAgICB0aGlzLmNsZWFyRGVsYXlTZWxlY3RUaW1lcigpO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKCkgPT4ge30pOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMuY2FzY2FkZXJTZXJ2aWNlLnZhbHVlcyA9IHRvQXJyYXkodmFsdWUpO1xyXG4gICAgdGhpcy5jYXNjYWRlclNlcnZpY2Uuc3luY09wdGlvbnModHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBkZWxheVNldE1lbnVWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4sIGRlbGF5OiBudW1iZXIgPSAxMDAsIHNldE9wZW5pbmc6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgdGhpcy5jbGVhckRlbGF5TWVudVRpbWVyKCk7XHJcbiAgICBpZiAoZGVsYXkpIHtcclxuICAgICAgaWYgKHZpc2libGUgJiYgc2V0T3BlbmluZykge1xyXG4gICAgICAgIHRoaXMuaXNPcGVuaW5nID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmRlbGF5TWVudVRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRNZW51VmlzaWJsZSh2aXNpYmxlKTtcclxuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgdGhpcy5jbGVhckRlbGF5TWVudVRpbWVyKCk7XHJcbiAgICAgICAgaWYgKHZpc2libGUpIHtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmlzT3BlbmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIGRlbGF5KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0TWVudVZpc2libGUodmlzaWJsZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRNZW51VmlzaWJsZSh2aXNpYmxlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uekRpc2FibGVkIHx8IHRoaXMubWVudVZpc2libGUgPT09IHZpc2libGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHZpc2libGUpIHtcclxuICAgICAgdGhpcy5jYXNjYWRlclNlcnZpY2Uuc3luY09wdGlvbnMoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm1lbnVWaXNpYmxlID0gdmlzaWJsZTtcclxuICAgIHRoaXMubnpWaXNpYmxlQ2hhbmdlLmVtaXQodmlzaWJsZSk7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsZWFyRGVsYXlNZW51VGltZXIoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kZWxheU1lbnVUaW1lcikge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5kZWxheU1lbnVUaW1lcik7XHJcbiAgICAgIHRoaXMuZGVsYXlNZW51VGltZXIgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xlYXJTZWxlY3Rpb24oZXZlbnQ/OiBFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKGV2ZW50KSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubGFiZWxSZW5kZXJUZXh0ID0gJyc7XHJcbiAgICB0aGlzLmxhYmVsUmVuZGVyQ29udGV4dCA9IHt9O1xyXG4gICAgdGhpcy5pbnB1dFZhbHVlID0gJyc7XHJcbiAgICB0aGlzLnNldE1lbnVWaXNpYmxlKGZhbHNlKTtcclxuICAgIHRoaXMuY2FzY2FkZXJTZXJ2aWNlLmNsZWFyKCk7XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgZ2V0U3VibWl0VmFsdWUoKTogYW55W10ge1xyXG4gICAgcmV0dXJuIHRoaXMuY2FzY2FkZXJTZXJ2aWNlLnNlbGVjdGVkT3B0aW9ucy5tYXAobyA9PiB0aGlzLmNhc2NhZGVyU2VydmljZS5nZXRPcHRpb25WYWx1ZShvKSk7XHJcbiAgfVxyXG5cclxuICBmb2N1cygpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5pc0ZvY3VzZWQpIHtcclxuICAgICAgKHRoaXMuaW5wdXQgPyB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQgOiB0aGlzLmVsKS5mb2N1cygpO1xyXG4gICAgICB0aGlzLmlzRm9jdXNlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBibHVyKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNGb2N1c2VkKSB7XHJcbiAgICAgICh0aGlzLmlucHV0ID8gdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50IDogdGhpcy5lbCkuYmx1cigpO1xyXG4gICAgICB0aGlzLmlzRm9jdXNlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlSW5wdXRCbHVyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5tZW51VmlzaWJsZSA/IHRoaXMuZm9jdXMoKSA6IHRoaXMuYmx1cigpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlSW5wdXRGb2N1cygpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9jdXMoKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKVxyXG4gIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgY29uc3Qga2V5Q29kZSA9IGV2ZW50LmtleUNvZGU7XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICBrZXlDb2RlICE9PSBET1dOX0FSUk9XICYmXHJcbiAgICAgIGtleUNvZGUgIT09IFVQX0FSUk9XICYmXHJcbiAgICAgIGtleUNvZGUgIT09IExFRlRfQVJST1cgJiZcclxuICAgICAga2V5Q29kZSAhPT0gUklHSFRfQVJST1cgJiZcclxuICAgICAga2V5Q29kZSAhPT0gRU5URVIgJiZcclxuICAgICAga2V5Q29kZSAhPT0gQkFDS1NQQUNFICYmXHJcbiAgICAgIGtleUNvZGUgIT09IEVTQ0FQRVxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQcmVzcyBhbnkga2V5cyBhYm92ZSB0byByZW9wZW4gbWVudS5cclxuICAgIGlmICghdGhpcy5tZW51VmlzaWJsZSAmJiBrZXlDb2RlICE9PSBCQUNLU1BBQ0UgJiYga2V5Q29kZSAhPT0gRVNDQVBFKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnNldE1lbnVWaXNpYmxlKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ha2UgdGhlc2Uga2V5cyB3b3JrIGFzIGRlZmF1bHQgaW4gc2VhcmNoaW5nIG1vZGUuXHJcbiAgICBpZiAodGhpcy5pblNlYXJjaGluZ01vZGUgJiYgKGtleUNvZGUgPT09IEJBQ0tTUEFDRSB8fCBrZXlDb2RlID09PSBMRUZUX0FSUk9XIHx8IGtleUNvZGUgPT09IFJJR0hUX0FSUk9XKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSW50ZXJhY3Qgd2l0aCB0aGUgY29tcG9uZW50LlxyXG4gICAgaWYgKHRoaXMubWVudVZpc2libGUpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgaWYgKGtleUNvZGUgPT09IERPV05fQVJST1cpIHtcclxuICAgICAgICB0aGlzLm1vdmVVcE9yRG93bihmYWxzZSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gVVBfQVJST1cpIHtcclxuICAgICAgICB0aGlzLm1vdmVVcE9yRG93bih0cnVlKTtcclxuICAgICAgfSBlbHNlIGlmIChrZXlDb2RlID09PSBMRUZUX0FSUk9XKSB7XHJcbiAgICAgICAgdGhpcy5tb3ZlTGVmdCgpO1xyXG4gICAgICB9IGVsc2UgaWYgKGtleUNvZGUgPT09IFJJR0hUX0FSUk9XKSB7XHJcbiAgICAgICAgdGhpcy5tb3ZlUmlnaHQoKTtcclxuICAgICAgfSBlbHNlIGlmIChrZXlDb2RlID09PSBFTlRFUikge1xyXG4gICAgICAgIHRoaXMub25FbnRlcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXHJcbiAgb25UcmlnZ2VyQ2xpY2soKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uekRpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm56U2hvd1NlYXJjaCkge1xyXG4gICAgICB0aGlzLmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5pc0FjdGlvblRyaWdnZXIoJ2NsaWNrJykpIHtcclxuICAgICAgdGhpcy5kZWxheVNldE1lbnVWaXNpYmxlKCF0aGlzLm1lbnVWaXNpYmxlLCAxMDApO1xyXG4gICAgfVxyXG4gICAgdGhpcy5vblRvdWNoZWQoKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInKVxyXG4gIG9uVHJpZ2dlck1vdXNlRW50ZXIoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uekRpc2FibGVkIHx8ICF0aGlzLmlzQWN0aW9uVHJpZ2dlcignaG92ZXInKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kZWxheVNldE1lbnVWaXNpYmxlKHRydWUsIHRoaXMubnpNb3VzZUVudGVyRGVsYXksIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScsIFsnJGV2ZW50J10pXHJcbiAgb25UcmlnZ2VyTW91c2VMZWF2ZShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpEaXNhYmxlZCB8fCAhdGhpcy5tZW51VmlzaWJsZSB8fCB0aGlzLmlzT3BlbmluZyB8fCAhdGhpcy5pc0FjdGlvblRyaWdnZXIoJ2hvdmVyJykpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbW91c2VUYXJnZXQgPSBldmVudC5yZWxhdGVkVGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgY29uc3QgaG9zdEVsID0gdGhpcy5lbDtcclxuICAgIGNvbnN0IG1lbnVFbCA9IHRoaXMubWVudSAmJiAodGhpcy5tZW51Lm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpO1xyXG4gICAgaWYgKGhvc3RFbC5jb250YWlucyhtb3VzZVRhcmdldCkgfHwgKG1lbnVFbCAmJiBtZW51RWwuY29udGFpbnMobW91c2VUYXJnZXQpKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmRlbGF5U2V0TWVudVZpc2libGUoZmFsc2UsIHRoaXMubnpNb3VzZUxlYXZlRGVsYXkpO1xyXG4gIH1cclxuXHJcbiAgb25PcHRpb25Nb3VzZUVudGVyKG9wdGlvbjogTnpDYXNjYWRlck9wdGlvbiwgY29sdW1uSW5kZXg6IG51bWJlciwgZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKHRoaXMubnpFeHBhbmRUcmlnZ2VyID09PSAnaG92ZXInKSB7XHJcbiAgICAgIGlmICghb3B0aW9uLmlzTGVhZikge1xyXG4gICAgICAgIHRoaXMuZGVsYXlTZXRPcHRpb25BY3RpdmF0ZWQob3B0aW9uLCBjb2x1bW5JbmRleCwgZmFsc2UpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY2FzY2FkZXJTZXJ2aWNlLnNldE9wdGlvbkRlYWN0aXZhdGVkU2luY2VDb2x1bW4oY29sdW1uSW5kZXgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbk9wdGlvbk1vdXNlTGVhdmUob3B0aW9uOiBOekNhc2NhZGVyT3B0aW9uLCBfY29sdW1uSW5kZXg6IG51bWJlciwgZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKHRoaXMubnpFeHBhbmRUcmlnZ2VyID09PSAnaG92ZXInICYmICFvcHRpb24uaXNMZWFmKSB7XHJcbiAgICAgIHRoaXMuY2xlYXJEZWxheVNlbGVjdFRpbWVyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbk9wdGlvbkNsaWNrKG9wdGlvbjogTnpDYXNjYWRlck9wdGlvbiwgY29sdW1uSW5kZXg6IG51bWJlciwgZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoZXZlbnQpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuICAgIGlmIChvcHRpb24gJiYgb3B0aW9uLmRpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuZWwuZm9jdXMoKTtcclxuICAgIHRoaXMuaW5TZWFyY2hpbmdNb2RlXHJcbiAgICAgID8gdGhpcy5jYXNjYWRlclNlcnZpY2Uuc2V0U2VhcmNoT3B0aW9uU2VsZWN0ZWQob3B0aW9uIGFzIE56Q2FzY2FkZXJTZWFyY2hPcHRpb24pXHJcbiAgICAgIDogdGhpcy5jYXNjYWRlclNlcnZpY2Uuc2V0T3B0aW9uQWN0aXZhdGVkKG9wdGlvbiwgY29sdW1uSW5kZXgsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc0FjdGlvblRyaWdnZXIoYWN0aW9uOiAnY2xpY2snIHwgJ2hvdmVyJyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLm56VHJpZ2dlckFjdGlvbiA9PT0gJ3N0cmluZydcclxuICAgICAgPyB0aGlzLm56VHJpZ2dlckFjdGlvbiA9PT0gYWN0aW9uXHJcbiAgICAgIDogdGhpcy5uelRyaWdnZXJBY3Rpb24uaW5kZXhPZihhY3Rpb24pICE9PSAtMTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25FbnRlcigpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNvbHVtbkluZGV4ID0gTWF0aC5tYXgodGhpcy5jYXNjYWRlclNlcnZpY2UuYWN0aXZhdGVkT3B0aW9ucy5sZW5ndGggLSAxLCAwKTtcclxuICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMuY2FzY2FkZXJTZXJ2aWNlLmFjdGl2YXRlZE9wdGlvbnNbY29sdW1uSW5kZXhdO1xyXG4gICAgaWYgKG9wdGlvbiAmJiAhb3B0aW9uLmRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuaW5TZWFyY2hpbmdNb2RlXHJcbiAgICAgICAgPyB0aGlzLmNhc2NhZGVyU2VydmljZS5zZXRTZWFyY2hPcHRpb25TZWxlY3RlZChvcHRpb24gYXMgTnpDYXNjYWRlclNlYXJjaE9wdGlvbilcclxuICAgICAgICA6IHRoaXMuY2FzY2FkZXJTZXJ2aWNlLnNldE9wdGlvbkFjdGl2YXRlZChvcHRpb24sIGNvbHVtbkluZGV4LCB0cnVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgbW92ZVVwT3JEb3duKGlzVXA6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGNvbnN0IGNvbHVtbkluZGV4ID0gTWF0aC5tYXgodGhpcy5jYXNjYWRlclNlcnZpY2UuYWN0aXZhdGVkT3B0aW9ucy5sZW5ndGggLSAxLCAwKTtcclxuICAgIGNvbnN0IGFjdGl2ZU9wdGlvbiA9IHRoaXMuY2FzY2FkZXJTZXJ2aWNlLmFjdGl2YXRlZE9wdGlvbnNbY29sdW1uSW5kZXhdO1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuY2FzY2FkZXJTZXJ2aWNlLmNvbHVtbnNbY29sdW1uSW5kZXhdIHx8IFtdO1xyXG4gICAgY29uc3QgbGVuZ3RoID0gb3B0aW9ucy5sZW5ndGg7XHJcbiAgICBsZXQgbmV4dEluZGV4ID0gLTE7XHJcbiAgICBpZiAoIWFjdGl2ZU9wdGlvbikge1xyXG4gICAgICAvLyBOb3Qgc2VsZWN0ZWQgb3B0aW9ucyBpbiB0aGlzIGNvbHVtblxyXG4gICAgICBuZXh0SW5kZXggPSBpc1VwID8gbGVuZ3RoIDogLTE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuZXh0SW5kZXggPSBvcHRpb25zLmluZGV4T2YoYWN0aXZlT3B0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICBuZXh0SW5kZXggPSBpc1VwID8gbmV4dEluZGV4IC0gMSA6IG5leHRJbmRleCArIDE7XHJcbiAgICAgIGlmIChuZXh0SW5kZXggPCAwIHx8IG5leHRJbmRleCA+PSBsZW5ndGgpIHtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBuZXh0T3B0aW9uID0gb3B0aW9uc1tuZXh0SW5kZXhdO1xyXG4gICAgICBpZiAoIW5leHRPcHRpb24gfHwgbmV4dE9wdGlvbi5kaXNhYmxlZCkge1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2FzY2FkZXJTZXJ2aWNlLnNldE9wdGlvbkFjdGl2YXRlZChuZXh0T3B0aW9uLCBjb2x1bW5JbmRleCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtb3ZlTGVmdCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmNhc2NhZGVyU2VydmljZS5hY3RpdmF0ZWRPcHRpb25zO1xyXG4gICAgaWYgKG9wdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgIG9wdGlvbnMucG9wKCk7IC8vIFJlbW92ZSB0aGUgbGFzdCBvbmVcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgbW92ZVJpZ2h0KCk6IHZvaWQge1xyXG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5jYXNjYWRlclNlcnZpY2UuYWN0aXZhdGVkT3B0aW9ucy5sZW5ndGg7XHJcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5jYXNjYWRlclNlcnZpY2UuY29sdW1uc1tsZW5ndGhdO1xyXG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgY29uc3QgbmV4dE9wdCA9IG9wdGlvbnMuZmluZChvID0+ICFvLmRpc2FibGVkKTtcclxuICAgICAgaWYgKG5leHRPcHQpIHtcclxuICAgICAgICB0aGlzLmNhc2NhZGVyU2VydmljZS5zZXRPcHRpb25BY3RpdmF0ZWQobmV4dE9wdCwgbGVuZ3RoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGVhckRlbGF5U2VsZWN0VGltZXIoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kZWxheVNlbGVjdFRpbWVyKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRlbGF5U2VsZWN0VGltZXIpO1xyXG4gICAgICB0aGlzLmRlbGF5U2VsZWN0VGltZXIgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkZWxheVNldE9wdGlvbkFjdGl2YXRlZChvcHRpb246IE56Q2FzY2FkZXJPcHRpb24sIGNvbHVtbkluZGV4OiBudW1iZXIsIHBlcmZvcm1TZWxlY3Q6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuY2xlYXJEZWxheVNlbGVjdFRpbWVyKCk7XHJcbiAgICB0aGlzLmRlbGF5U2VsZWN0VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5jYXNjYWRlclNlcnZpY2Uuc2V0T3B0aW9uQWN0aXZhdGVkKG9wdGlvbiwgY29sdW1uSW5kZXgsIHBlcmZvcm1TZWxlY3QpO1xyXG4gICAgICB0aGlzLmRlbGF5U2VsZWN0VGltZXIgPSBudWxsO1xyXG4gICAgfSwgMTUwKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdG9nZ2xlU2VhcmNoaW5nTW9kZSh0b1NlYXJjaGluZzogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaW5TZWFyY2hpbmdNb2RlICE9PSB0b1NlYXJjaGluZykge1xyXG4gICAgICB0aGlzLmNhc2NhZGVyU2VydmljZS50b2dnbGVTZWFyY2hpbmdNb2RlKHRvU2VhcmNoaW5nKTtcclxuICAgICAgdGhpcy5kcm9wZG93bldpZHRoU3R5bGUgPSB0b1NlYXJjaGluZyA/IGAke3RoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aH1weGAgOiAnJztcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmluU2VhcmNoaW5nTW9kZSkge1xyXG4gICAgICB0aGlzLmNhc2NhZGVyU2VydmljZS5wcmVwYXJlU2VhcmNoT3B0aW9ucyh0aGlzLmlucHV0VmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaXNPcHRpb25BY3RpdmF0ZWQob3B0aW9uOiBOekNhc2NhZGVyT3B0aW9uLCBpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBhY3RpdmVPcHQgPSB0aGlzLmNhc2NhZGVyU2VydmljZS5hY3RpdmF0ZWRPcHRpb25zW2luZGV4XTtcclxuICAgIHJldHVybiBhY3RpdmVPcHQgPT09IG9wdGlvbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKGlzRGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5jbG9zZU1lbnUoKTtcclxuICAgIH1cclxuICAgIHRoaXMubnpEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBjbG9zZU1lbnUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmJsdXIoKTtcclxuICAgIHRoaXMuY2xlYXJEZWxheU1lbnVUaW1lcigpO1xyXG4gICAgdGhpcy5zZXRNZW51VmlzaWJsZShmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBvblBvc2l0aW9uQ2hhbmdlKHBvc2l0aW9uOiBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UpOiB2b2lkIHtcclxuICAgIGNvbnN0IG5ld1ZhbHVlID0gcG9zaXRpb24uY29ubmVjdGlvblBhaXIub3JpZ2luWSA9PT0gJ2JvdHRvbScgPyAnYm90dG9tJyA6ICd0b3AnO1xyXG4gICAgaWYgKHRoaXMuZHJvcERvd25Qb3NpdGlvbiAhPT0gbmV3VmFsdWUpIHtcclxuICAgICAgdGhpcy5kcm9wRG93blBvc2l0aW9uID0gbmV3VmFsdWU7XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlcG9zaXRpb24gdGhlIGNhc2NhZGVyIHBhbmVsLiBXaGVuIGEgbWVudSBvcGVucywgdGhlIGNhc2NhZGVyIGV4cGFuZHNcclxuICAgKiBhbmQgbWF5IGV4Y2VlZCB0aGUgYm91bmRhcnkgb2YgYnJvd3NlcidzIHdpbmRvdy5cclxuICAgKi9cclxuICBwcml2YXRlIHJlcG9zaXRpb24oKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5vdmVybGF5ICYmIHRoaXMub3ZlcmxheS5vdmVybGF5UmVmICYmIHRoaXMubWVudVZpc2libGUpIHtcclxuICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5vdmVybGF5Lm92ZXJsYXlSZWYudXBkYXRlUG9zaXRpb24oKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBXaGVuIGEgY2FzY2FkZXIgb3B0aW9ucyBpcyBjaGFuZ2VkLCBhIGNoaWxkIG5lZWRzIHRvIGtub3cgdGhhdCBpdCBzaG91bGQgcmUtcmVuZGVyLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgY2hlY2tDaGlsZHJlbigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmNhc2NhZGVySXRlbXMpIHtcclxuICAgICAgdGhpcy5jYXNjYWRlckl0ZW1zLmZvckVhY2goaXRlbSA9PiBpdGVtLm1hcmtGb3JDaGVjaygpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYnVpbGREaXNwbGF5TGFiZWwoKTogdm9pZCB7XHJcbiAgICBjb25zdCBzZWxlY3RlZE9wdGlvbnMgPSB0aGlzLmNhc2NhZGVyU2VydmljZS5zZWxlY3RlZE9wdGlvbnM7XHJcbiAgICBjb25zdCBsYWJlbHM6IHN0cmluZ1tdID0gc2VsZWN0ZWRPcHRpb25zLm1hcChvID0+IHRoaXMuY2FzY2FkZXJTZXJ2aWNlLmdldE9wdGlvbkxhYmVsKG8pKTtcclxuXHJcbiAgICBpZiAodGhpcy5pc0xhYmVsUmVuZGVyVGVtcGxhdGUpIHtcclxuICAgICAgdGhpcy5sYWJlbFJlbmRlckNvbnRleHQgPSB7IGxhYmVscywgc2VsZWN0ZWRPcHRpb25zIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmxhYmVsUmVuZGVyVGV4dCA9IGRlZmF1bHREaXNwbGF5UmVuZGVyLmNhbGwodGhpcywgbGFiZWxzLCBzZWxlY3RlZE9wdGlvbnMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRMb2NhbGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4blNlcnZpY2UuZ2V0TG9jYWxlRGF0YSgnZ2xvYmFsJyk7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcbn1cclxuIl19