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
var NZ_CONFIG_COMPONENT_NAME = 'cascader';
/** @type {?} */
var defaultDisplayRender = (/**
 * @param {?} labels
 * @return {?}
 */
function (labels) { return labels.join(' / '); });
var ɵ0 = defaultDisplayRender;
var NzCascaderComponent = /** @class */ (function () {
    function NzCascaderComponent(cascaderService, i18nService, nzConfigService, cdr, elementRef, renderer, noAnimation) {
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
        this.positions = tslib_1.__spread(DEFAULT_DROPDOWN_POSITIONS);
        this.isFocused = false;
        this.$destroy = new Subject();
        this.inputString = '';
        this.isOpening = false;
        this.el = elementRef.nativeElement;
        this.cascaderService.withComponent(this);
        renderer.addClass(elementRef.nativeElement, 'ant-cascader');
        renderer.addClass(elementRef.nativeElement, 'ant-cascader-picker');
    }
    Object.defineProperty(NzCascaderComponent.prototype, "nzOptions", {
        get: 
        // tslint:disable-line:no-any
        /**
         * @return {?}
         */
        function () {
            return this.cascaderService.nzOptions;
        },
        set: /**
         * @param {?} options
         * @return {?}
         */
        function (options) {
            this.cascaderService.withOptions(options);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "inSearchingMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this.cascaderService.inSearchingMode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "inputValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this.inputString;
        },
        set: /**
         * @param {?} inputValue
         * @return {?}
         */
        function (inputValue) {
            this.inputString = inputValue;
            this.toggleSearchingMode(!!inputValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "menuCls", {
        get: /**
         * @return {?}
         */
        function () {
            var _a;
            return _a = {}, _a["" + this.nzMenuClassName] = !!this.nzMenuClassName, _a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "menuColumnCls", {
        get: /**
         * @return {?}
         */
        function () {
            var _a;
            return _a = {}, _a["" + this.nzColumnClassName] = !!this.nzColumnClassName, _a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "hasInput", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return !!this.inputValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "hasValue", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.cascaderService.values && this.cascaderService.values.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "showPlaceholder", {
        get: /**
         * @return {?}
         */
        function () {
            return !(this.hasInput || this.hasValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "clearIconVisible", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzAllowClear && !this.nzDisabled && (this.hasValue || this.hasInput);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "isLabelRenderTemplate", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this.nzLabelRender;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var srv = this.cascaderService;
        srv.$redraw.pipe(takeUntil(this.$destroy)).subscribe((/**
         * @return {?}
         */
        function () {
            // These operations would not mutate data.
            _this.checkChildren();
            _this.buildDisplayLabel();
            _this.reposition();
            _this.cdr.markForCheck();
        }));
        srv.$loading.pipe(takeUntil(this.$destroy)).subscribe((/**
         * @param {?} loading
         * @return {?}
         */
        function (loading) {
            _this.isLoading = loading;
        }));
        srv.$optionSelected.pipe(takeUntil(this.$destroy)).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (!data) {
                _this.onChange([]);
                _this.nzSelect.emit(null);
                _this.nzSelectionChange.emit([]);
            }
            else {
                var option = data.option, index = data.index;
                /** @type {?} */
                var shouldClose = option.isLeaf;
                if (shouldClose) {
                    _this.delaySetMenuVisible(false);
                }
                _this.onChange(_this.cascaderService.values);
                _this.nzSelectionChange.emit(_this.cascaderService.selectedOptions);
                _this.nzSelect.emit({ option: option, index: index });
                _this.cdr.markForCheck();
            }
        }));
        srv.$quitSearching.pipe(takeUntil(this.$destroy)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.inputString = '';
            _this.dropdownWidthStyle = '';
        }));
        this.i18nService.localeChange
            .pipe(startWith(), takeUntil(this.$destroy))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.setLocale();
        }));
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(takeUntil(this.$destroy))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.cdr.markForCheck();
        }));
        if (this.nzSelect.observers.length > 0) {
            warnDeprecation("nzSelect is deprecated and will be removed in 9.0.0. Please use 'nzSelectionChange' instead.");
        }
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.$destroy.next();
        this.$destroy.complete();
        this.clearDelayMenuTimer();
        this.clearDelaySelectTimer();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzCascaderComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzCascaderComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @return {?}
     */
    NzCascaderComponent.prototype.writeValue = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.cascaderService.values = toArray(value);
        this.cascaderService.syncOptions(true);
    };
    /**
     * @param {?} visible
     * @param {?=} delay
     * @param {?=} setOpening
     * @return {?}
     */
    NzCascaderComponent.prototype.delaySetMenuVisible = /**
     * @param {?} visible
     * @param {?=} delay
     * @param {?=} setOpening
     * @return {?}
     */
    function (visible, delay, setOpening) {
        var _this = this;
        if (delay === void 0) { delay = 100; }
        if (setOpening === void 0) { setOpening = false; }
        this.clearDelayMenuTimer();
        if (delay) {
            if (visible && setOpening) {
                this.isOpening = true;
            }
            this.delayMenuTimer = setTimeout((/**
             * @return {?}
             */
            function () {
                _this.setMenuVisible(visible);
                _this.cdr.detectChanges();
                _this.clearDelayMenuTimer();
                if (visible) {
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        _this.isOpening = false;
                    }), 100);
                }
            }), delay);
        }
        else {
            this.setMenuVisible(visible);
        }
    };
    /**
     * @param {?} visible
     * @return {?}
     */
    NzCascaderComponent.prototype.setMenuVisible = /**
     * @param {?} visible
     * @return {?}
     */
    function (visible) {
        if (this.nzDisabled || this.menuVisible === visible) {
            return;
        }
        if (visible) {
            this.cascaderService.syncOptions();
        }
        this.menuVisible = visible;
        this.nzVisibleChange.emit(visible);
        this.cdr.detectChanges();
    };
    /**
     * @private
     * @return {?}
     */
    NzCascaderComponent.prototype.clearDelayMenuTimer = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.delayMenuTimer) {
            clearTimeout(this.delayMenuTimer);
            this.delayMenuTimer = null;
        }
    };
    /**
     * @param {?=} event
     * @return {?}
     */
    NzCascaderComponent.prototype.clearSelection = /**
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.labelRenderText = '';
        this.labelRenderContext = {};
        this.inputValue = '';
        this.setMenuVisible(false);
        this.cascaderService.clear();
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.getSubmitValue = 
    // tslint:disable-next-line:no-any
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.cascaderService.selectedOptions.map((/**
         * @param {?} o
         * @return {?}
         */
        function (o) { return _this.cascaderService.getOptionValue(o); }));
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        if (!this.isFocused) {
            (this.input ? this.input.nativeElement : this.el).focus();
            this.isFocused = true;
        }
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        if (this.isFocused) {
            (this.input ? this.input.nativeElement : this.el).blur();
            this.isFocused = false;
        }
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.handleInputBlur = /**
     * @return {?}
     */
    function () {
        this.menuVisible ? this.focus() : this.blur();
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.handleInputFocus = /**
     * @return {?}
     */
    function () {
        this.focus();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzCascaderComponent.prototype.onKeyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var keyCode = event.keyCode;
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
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.onTriggerClick = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.onTriggerMouseEnter = /**
     * @return {?}
     */
    function () {
        if (this.nzDisabled || !this.isActionTrigger('hover')) {
            return;
        }
        this.delaySetMenuVisible(true, this.nzMouseEnterDelay, true);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzCascaderComponent.prototype.onTriggerMouseLeave = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.nzDisabled || !this.menuVisible || this.isOpening || !this.isActionTrigger('hover')) {
            event.preventDefault();
            return;
        }
        /** @type {?} */
        var mouseTarget = (/** @type {?} */ (event.relatedTarget));
        /** @type {?} */
        var hostEl = this.el;
        /** @type {?} */
        var menuEl = this.menu && ((/** @type {?} */ (this.menu.nativeElement)));
        if (hostEl.contains(mouseTarget) || (menuEl && menuEl.contains(mouseTarget))) {
            return;
        }
        this.delaySetMenuVisible(false, this.nzMouseLeaveDelay);
    };
    /**
     * @param {?} option
     * @param {?} columnIndex
     * @param {?} event
     * @return {?}
     */
    NzCascaderComponent.prototype.onOptionMouseEnter = /**
     * @param {?} option
     * @param {?} columnIndex
     * @param {?} event
     * @return {?}
     */
    function (option, columnIndex, event) {
        event.preventDefault();
        if (this.nzExpandTrigger === 'hover') {
            if (!option.isLeaf) {
                this.delaySetOptionActivated(option, columnIndex, false);
            }
            else {
                this.cascaderService.setOptionDeactivatedSinceColumn(columnIndex);
            }
        }
    };
    /**
     * @param {?} option
     * @param {?} _columnIndex
     * @param {?} event
     * @return {?}
     */
    NzCascaderComponent.prototype.onOptionMouseLeave = /**
     * @param {?} option
     * @param {?} _columnIndex
     * @param {?} event
     * @return {?}
     */
    function (option, _columnIndex, event) {
        event.preventDefault();
        if (this.nzExpandTrigger === 'hover' && !option.isLeaf) {
            this.clearDelaySelectTimer();
        }
    };
    /**
     * @param {?} option
     * @param {?} columnIndex
     * @param {?} event
     * @return {?}
     */
    NzCascaderComponent.prototype.onOptionClick = /**
     * @param {?} option
     * @param {?} columnIndex
     * @param {?} event
     * @return {?}
     */
    function (option, columnIndex, event) {
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
    };
    /**
     * @private
     * @param {?} action
     * @return {?}
     */
    NzCascaderComponent.prototype.isActionTrigger = /**
     * @private
     * @param {?} action
     * @return {?}
     */
    function (action) {
        return typeof this.nzTriggerAction === 'string'
            ? this.nzTriggerAction === action
            : this.nzTriggerAction.indexOf(action) !== -1;
    };
    /**
     * @private
     * @return {?}
     */
    NzCascaderComponent.prototype.onEnter = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var columnIndex = Math.max(this.cascaderService.activatedOptions.length - 1, 0);
        /** @type {?} */
        var option = this.cascaderService.activatedOptions[columnIndex];
        if (option && !option.disabled) {
            this.inSearchingMode
                ? this.cascaderService.setSearchOptionSelected((/** @type {?} */ (option)))
                : this.cascaderService.setOptionActivated(option, columnIndex, true);
        }
    };
    /**
     * @private
     * @param {?} isUp
     * @return {?}
     */
    NzCascaderComponent.prototype.moveUpOrDown = /**
     * @private
     * @param {?} isUp
     * @return {?}
     */
    function (isUp) {
        /** @type {?} */
        var columnIndex = Math.max(this.cascaderService.activatedOptions.length - 1, 0);
        /** @type {?} */
        var activeOption = this.cascaderService.activatedOptions[columnIndex];
        /** @type {?} */
        var options = this.cascaderService.columns[columnIndex] || [];
        /** @type {?} */
        var length = options.length;
        /** @type {?} */
        var nextIndex = -1;
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
            var nextOption = options[nextIndex];
            if (!nextOption || nextOption.disabled) {
                continue;
            }
            this.cascaderService.setOptionActivated(nextOption, columnIndex);
            break;
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzCascaderComponent.prototype.moveLeft = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var options = this.cascaderService.activatedOptions;
        if (options.length) {
            options.pop(); // Remove the last one
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzCascaderComponent.prototype.moveRight = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var length = this.cascaderService.activatedOptions.length;
        /** @type {?} */
        var options = this.cascaderService.columns[length];
        if (options && options.length) {
            /** @type {?} */
            var nextOpt = options.find((/**
             * @param {?} o
             * @return {?}
             */
            function (o) { return !o.disabled; }));
            if (nextOpt) {
                this.cascaderService.setOptionActivated(nextOpt, length);
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzCascaderComponent.prototype.clearDelaySelectTimer = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.delaySelectTimer) {
            clearTimeout(this.delaySelectTimer);
            this.delaySelectTimer = null;
        }
    };
    /**
     * @private
     * @param {?} option
     * @param {?} columnIndex
     * @param {?} performSelect
     * @return {?}
     */
    NzCascaderComponent.prototype.delaySetOptionActivated = /**
     * @private
     * @param {?} option
     * @param {?} columnIndex
     * @param {?} performSelect
     * @return {?}
     */
    function (option, columnIndex, performSelect) {
        var _this = this;
        this.clearDelaySelectTimer();
        this.delaySelectTimer = setTimeout((/**
         * @return {?}
         */
        function () {
            _this.cascaderService.setOptionActivated(option, columnIndex, performSelect);
            _this.delaySelectTimer = null;
        }), 150);
    };
    /**
     * @private
     * @param {?} toSearching
     * @return {?}
     */
    NzCascaderComponent.prototype.toggleSearchingMode = /**
     * @private
     * @param {?} toSearching
     * @return {?}
     */
    function (toSearching) {
        if (this.inSearchingMode !== toSearching) {
            this.cascaderService.toggleSearchingMode(toSearching);
            this.dropdownWidthStyle = toSearching ? this.input.nativeElement.offsetWidth + "px" : '';
        }
        if (this.inSearchingMode) {
            this.cascaderService.prepareSearchOptions(this.inputValue);
        }
    };
    /**
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    NzCascaderComponent.prototype.isOptionActivated = /**
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    function (option, index) {
        /** @type {?} */
        var activeOpt = this.cascaderService.activatedOptions[index];
        return activeOpt === option;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NzCascaderComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        if (isDisabled) {
            this.closeMenu();
        }
        this.nzDisabled = isDisabled;
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.closeMenu = /**
     * @return {?}
     */
    function () {
        this.blur();
        this.clearDelayMenuTimer();
        this.setMenuVisible(false);
    };
    /**
     * @param {?} position
     * @return {?}
     */
    NzCascaderComponent.prototype.onPositionChange = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        /** @type {?} */
        var newValue = position.connectionPair.originY === 'bottom' ? 'bottom' : 'top';
        if (this.dropDownPosition !== newValue) {
            this.dropDownPosition = newValue;
            this.cdr.detectChanges();
        }
    };
    /**
     * Reposition the cascader panel. When a menu opens, the cascader expands
     * and may exceed the boundary of browser's window.
     */
    /**
     * Reposition the cascader panel. When a menu opens, the cascader expands
     * and may exceed the boundary of browser's window.
     * @private
     * @return {?}
     */
    NzCascaderComponent.prototype.reposition = /**
     * Reposition the cascader panel. When a menu opens, the cascader expands
     * and may exceed the boundary of browser's window.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.overlay && this.overlay.overlayRef && this.menuVisible) {
            Promise.resolve().then((/**
             * @return {?}
             */
            function () {
                _this.overlay.overlayRef.updatePosition();
            }));
        }
    };
    /**
     * When a cascader options is changed, a child needs to know that it should re-render.
     */
    /**
     * When a cascader options is changed, a child needs to know that it should re-render.
     * @private
     * @return {?}
     */
    NzCascaderComponent.prototype.checkChildren = /**
     * When a cascader options is changed, a child needs to know that it should re-render.
     * @private
     * @return {?}
     */
    function () {
        if (this.cascaderItems) {
            this.cascaderItems.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.markForCheck(); }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzCascaderComponent.prototype.buildDisplayLabel = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var selectedOptions = this.cascaderService.selectedOptions;
        /** @type {?} */
        var labels = selectedOptions.map((/**
         * @param {?} o
         * @return {?}
         */
        function (o) { return _this.cascaderService.getOptionLabel(o); }));
        if (this.isLabelRenderTemplate) {
            this.labelRenderContext = { labels: labels, selectedOptions: selectedOptions };
        }
        else {
            this.labelRenderText = defaultDisplayRender.call(this, labels, selectedOptions);
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzCascaderComponent.prototype.setLocale = /**
     * @private
     * @return {?}
     */
    function () {
        this.locale = this.i18nService.getLocaleData('global');
        this.cdr.markForCheck();
    };
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
                            function () { return NzCascaderComponent; })),
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
                    styles: ["\n      .ant-cascader-menus {\n        margin-top: 4px;\n        margin-bottom: 4px;\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzCascaderComponent.ctorParameters = function () { return [
        { type: NzCascaderService },
        { type: NzI18nService },
        { type: NzConfigService },
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: Renderer2 },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
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
    return NzCascaderComponent;
}());
export { NzCascaderComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FzY2FkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jYXNjYWRlci8iLCJzb3VyY2VzIjpbIm56LWNhc2NhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2hILE9BQU8sRUFBRSxtQkFBbUIsRUFBMEQsTUFBTSxzQkFBc0IsQ0FBQztBQUNuSCxPQUFPLEVBQ0wsVUFBVSxFQUNWLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osSUFBSSxFQUNKLFlBQVksRUFDWixLQUFLLEVBR0wsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1QsWUFBWSxFQUNaLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRELE9BQU8sRUFDTCxXQUFXLEVBQ1gsT0FBTyxFQUNQLGVBQWUsRUFDZiwwQkFBMEIsRUFDMUIsWUFBWSxFQUdaLGVBQWUsRUFDZixzQkFBc0IsRUFDdEIsVUFBVSxFQUNYLE1BQU0sb0JBQW9CLENBQUM7QUFFNUIsT0FBTyxFQUEyQixhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQVU1RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUs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dGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEJBQ0tTUEFDRSwgRE9XTl9BUlJPVywgRU5URVIsIEVTQ0FQRSwgTEVGVF9BUlJPVywgUklHSFRfQVJST1csIFVQX0FSUk9XIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcclxuaW1wb3J0IHsgQ2RrQ29ubmVjdGVkT3ZlcmxheSwgQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlLCBDb25uZWN0aW9uUG9zaXRpb25QYWlyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQge1xyXG4gIGZvcndhcmRSZWYsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEhvc3QsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdDaGlsZHJlbixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgc3RhcnRXaXRoLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIHNsaWRlTW90aW9uLFxyXG4gIHRvQXJyYXksXHJcbiAgd2FybkRlcHJlY2F0aW9uLFxyXG4gIERFRkFVTFRfRFJPUERPV05fUE9TSVRJT05TLFxyXG4gIElucHV0Qm9vbGVhbixcclxuICBOZ0NsYXNzVHlwZSxcclxuICBOZ1N0eWxlSW50ZXJmYWNlLFxyXG4gIE56Q29uZmlnU2VydmljZSxcclxuICBOek5vQW5pbWF0aW9uRGlyZWN0aXZlLFxyXG4gIFdpdGhDb25maWdcclxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpDYXNjYWRlckkxOG5JbnRlcmZhY2UsIE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5pbXBvcnQge1xyXG4gIE56Q2FzY2FkZXJDb21wb25lbnRBc1NvdXJjZSxcclxuICBOekNhc2NhZGVyRXhwYW5kVHJpZ2dlcixcclxuICBOekNhc2NhZGVyT3B0aW9uLFxyXG4gIE56Q2FzY2FkZXJTZWFyY2hPcHRpb24sXHJcbiAgTnpDYXNjYWRlclNpemUsXHJcbiAgTnpDYXNjYWRlclRyaWdnZXJUeXBlLFxyXG4gIE56U2hvd1NlYXJjaE9wdGlvbnNcclxufSBmcm9tICcuL256LWNhc2NhZGVyLWRlZmluaXRpb25zJztcclxuaW1wb3J0IHsgTnpDYXNjYWRlck9wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbnotY2FzY2FkZXItbGkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpDYXNjYWRlclNlcnZpY2UgfSBmcm9tICcuL256LWNhc2NhZGVyLnNlcnZpY2UnO1xyXG5cclxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ2Nhc2NhZGVyJztcclxuY29uc3QgZGVmYXVsdERpc3BsYXlSZW5kZXIgPSAobGFiZWxzOiBzdHJpbmdbXSkgPT4gbGFiZWxzLmpvaW4oJyAvICcpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzZWxlY3RvcjogJ256LWNhc2NhZGVyLCBbbnotY2FzY2FkZXJdJyxcclxuICBleHBvcnRBczogJ256Q2FzY2FkZXInLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1jYXNjYWRlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgYW5pbWF0aW9uczogW3NsaWRlTW90aW9uXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE56Q2FzY2FkZXJDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIE56Q2FzY2FkZXJTZXJ2aWNlXHJcbiAgXSxcclxuICBob3N0OiB7XHJcbiAgICAnW2F0dHIudGFiSW5kZXhdJzogJ1wiMFwiJyxcclxuICAgICdbY2xhc3MuYW50LWNhc2NhZGVyLWxnXSc6ICduelNpemUgPT09IFwibGFyZ2VcIicsXHJcbiAgICAnW2NsYXNzLmFudC1jYXNjYWRlci1zbV0nOiAnbnpTaXplID09PSBcInNtYWxsXCInLFxyXG4gICAgJ1tjbGFzcy5hbnQtY2FzY2FkZXItcGlja2VyLWRpc2FibGVkXSc6ICduekRpc2FibGVkJyxcclxuICAgICdbY2xhc3MuYW50LWNhc2NhZGVyLXBpY2tlci1vcGVuXSc6ICdtZW51VmlzaWJsZScsXHJcbiAgICAnW2NsYXNzLmFudC1jYXNjYWRlci1waWNrZXItd2l0aC12YWx1ZV0nOiAnISFpbnB1dFZhbHVlJyxcclxuICAgICdbY2xhc3MuYW50LWNhc2NhZGVyLWZvY3VzZWRdJzogJ2lzRm9jdXNlZCdcclxuICB9LFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICAuYW50LWNhc2NhZGVyLW1lbnVzIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgICAgIHRvcDogMTAwJTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56Q2FzY2FkZXJDb21wb25lbnQgaW1wbGVtZW50cyBOekNhc2NhZGVyQ29tcG9uZW50QXNTb3VyY2UsIE9uSW5pdCwgT25EZXN0cm95LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcbiAgQFZpZXdDaGlsZCgnaW5wdXQnLCB7IHN0YXRpYzogZmFsc2UgfSkgaW5wdXQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnbWVudScsIHsgc3RhdGljOiBmYWxzZSB9KSBtZW51OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoQ2RrQ29ubmVjdGVkT3ZlcmxheSwgeyBzdGF0aWM6IGZhbHNlIH0pIG92ZXJsYXk6IENka0Nvbm5lY3RlZE92ZXJsYXk7XHJcbiAgQFZpZXdDaGlsZHJlbihOekNhc2NhZGVyT3B0aW9uQ29tcG9uZW50KSBjYXNjYWRlckl0ZW1zOiBRdWVyeUxpc3Q8TnpDYXNjYWRlck9wdGlvbkNvbXBvbmVudD47XHJcblxyXG4gIEBJbnB1dCgpIG56T3B0aW9uUmVuZGVyOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpDYXNjYWRlck9wdGlvbjsgaW5kZXg6IG51bWJlciB9PiB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dJbnB1dCA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd0Fycm93ID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpBbGxvd0NsZWFyID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpBdXRvRm9jdXMgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDaGFuZ2VPblNlbGVjdCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpDb2x1bW5DbGFzc05hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBuekV4cGFuZFRyaWdnZXI6IE56Q2FzY2FkZXJFeHBhbmRUcmlnZ2VyID0gJ2NsaWNrJztcclxuICBASW5wdXQoKSBuelZhbHVlUHJvcGVydHkgPSAndmFsdWUnO1xyXG4gIEBJbnB1dCgpIG56TGFiZWxSZW5kZXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56TGFiZWxQcm9wZXJ0eSA9ICdsYWJlbCc7XHJcbiAgQElucHV0KCkgbnpOb3RGb3VuZENvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgJ2RlZmF1bHQnKSBuelNpemU6IE56Q2FzY2FkZXJTaXplO1xyXG4gIEBJbnB1dCgpIG56U2hvd1NlYXJjaDogYm9vbGVhbiB8IE56U2hvd1NlYXJjaE9wdGlvbnM7XHJcbiAgQElucHV0KCkgbnpQbGFjZUhvbGRlcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56TWVudUNsYXNzTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56TWVudVN0eWxlOiBOZ1N0eWxlSW50ZXJmYWNlO1xyXG4gIEBJbnB1dCgpIG56TW91c2VFbnRlckRlbGF5OiBudW1iZXIgPSAxNTA7IC8vIG1zXHJcbiAgQElucHV0KCkgbnpNb3VzZUxlYXZlRGVsYXk6IG51bWJlciA9IDE1MDsgLy8gbXNcclxuICBASW5wdXQoKSBuelRyaWdnZXJBY3Rpb246IE56Q2FzY2FkZXJUcmlnZ2VyVHlwZSB8IE56Q2FzY2FkZXJUcmlnZ2VyVHlwZVtdID0gWydjbGljayddIGFzIE56Q2FzY2FkZXJUcmlnZ2VyVHlwZVtdO1xyXG4gIEBJbnB1dCgpIG56Q2hhbmdlT246IChvcHRpb246IE56Q2FzY2FkZXJPcHRpb24sIGxldmVsOiBudW1iZXIpID0+IGJvb2xlYW47XHJcbiAgQElucHV0KCkgbnpMb2FkRGF0YTogKG5vZGU6IE56Q2FzY2FkZXJPcHRpb24sIGluZGV4PzogbnVtYmVyKSA9PiBQcm9taXNlTGlrZTxhbnk+OyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxyXG5cclxuICBASW5wdXQoKVxyXG4gIGdldCBuek9wdGlvbnMoKTogTnpDYXNjYWRlck9wdGlvbltdIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5jYXNjYWRlclNlcnZpY2UubnpPcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgc2V0IG56T3B0aW9ucyhvcHRpb25zOiBOekNhc2NhZGVyT3B0aW9uW10gfCBudWxsKSB7XHJcbiAgICB0aGlzLmNhc2NhZGVyU2VydmljZS53aXRoT3B0aW9ucyhvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNlbGVjdGlvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpDYXNjYWRlck9wdGlvbltdPigpO1xyXG5cclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCA5LjAuMC4gVGhpcyBhcGkgaXMgYSBkdXBsaWNhdGlvbiBvZiBgbmdNb2RlbENoYW5nZWAuXHJcbiAgICovXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56U2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjx7IG9wdGlvbjogTnpDYXNjYWRlck9wdGlvbjsgaW5kZXg6IG51bWJlciB9IHwgbnVsbD4oKTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2xlYXIgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIGVsOiBIVE1MRWxlbWVudDtcclxuICBkcm9wRG93blBvc2l0aW9uID0gJ2JvdHRvbSc7XHJcbiAgbWVudVZpc2libGUgPSBmYWxzZTtcclxuICBpc0xvYWRpbmcgPSBmYWxzZTtcclxuICBsYWJlbFJlbmRlclRleHQ6IHN0cmluZztcclxuICBsYWJlbFJlbmRlckNvbnRleHQgPSB7fTtcclxuICBvbkNoYW5nZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcclxuICBvblRvdWNoZWQgPSBGdW5jdGlvbi5wcm90b3R5cGU7XHJcbiAgcG9zaXRpb25zOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyW10gPSBbLi4uREVGQVVMVF9EUk9QRE9XTl9QT1NJVElPTlNdO1xyXG4gIGRyb3Bkb3duV2lkdGhTdHlsZTogc3RyaW5nO1xyXG4gIGlzRm9jdXNlZCA9IGZhbHNlO1xyXG5cclxuICBsb2NhbGU6IE56Q2FzY2FkZXJJMThuSW50ZXJmYWNlO1xyXG5cclxuICBwcml2YXRlICRkZXN0cm95ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBwcml2YXRlIGlucHV0U3RyaW5nID0gJyc7XHJcbiAgcHJpdmF0ZSBpc09wZW5pbmcgPSBmYWxzZTtcclxuICBwcml2YXRlIGRlbGF5TWVudVRpbWVyOiBudW1iZXIgfCBudWxsO1xyXG4gIHByaXZhdGUgZGVsYXlTZWxlY3RUaW1lcjogbnVtYmVyIHwgbnVsbDtcclxuXHJcbiAgZ2V0IGluU2VhcmNoaW5nTW9kZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNhc2NhZGVyU2VydmljZS5pblNlYXJjaGluZ01vZGU7XHJcbiAgfVxyXG5cclxuICBzZXQgaW5wdXRWYWx1ZShpbnB1dFZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuaW5wdXRTdHJpbmcgPSBpbnB1dFZhbHVlO1xyXG4gICAgdGhpcy50b2dnbGVTZWFyY2hpbmdNb2RlKCEhaW5wdXRWYWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgaW5wdXRWYWx1ZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5wdXRTdHJpbmc7XHJcbiAgfVxyXG5cclxuICBnZXQgbWVudUNscygpOiBOZ0NsYXNzVHlwZSB7XHJcbiAgICByZXR1cm4geyBbYCR7dGhpcy5uek1lbnVDbGFzc05hbWV9YF06ICEhdGhpcy5uek1lbnVDbGFzc05hbWUgfTtcclxuICB9XHJcblxyXG4gIGdldCBtZW51Q29sdW1uQ2xzKCk6IE5nQ2xhc3NUeXBlIHtcclxuICAgIHJldHVybiB7IFtgJHt0aGlzLm56Q29sdW1uQ2xhc3NOYW1lfWBdOiAhIXRoaXMubnpDb2x1bW5DbGFzc05hbWUgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0IGhhc0lucHV0KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEhdGhpcy5pbnB1dFZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXQgaGFzVmFsdWUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jYXNjYWRlclNlcnZpY2UudmFsdWVzICYmIHRoaXMuY2FzY2FkZXJTZXJ2aWNlLnZhbHVlcy5sZW5ndGggPiAwO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNob3dQbGFjZWhvbGRlcigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhKHRoaXMuaGFzSW5wdXQgfHwgdGhpcy5oYXNWYWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgY2xlYXJJY29uVmlzaWJsZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm56QWxsb3dDbGVhciAmJiAhdGhpcy5uekRpc2FibGVkICYmICh0aGlzLmhhc1ZhbHVlIHx8IHRoaXMuaGFzSW5wdXQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzTGFiZWxSZW5kZXJUZW1wbGF0ZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhIXRoaXMubnpMYWJlbFJlbmRlcjtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGNhc2NhZGVyU2VydmljZTogTnpDYXNjYWRlclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGkxOG5TZXJ2aWNlOiBOekkxOG5TZXJ2aWNlLFxyXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxuICApIHtcclxuICAgIHRoaXMuZWwgPSBlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB0aGlzLmNhc2NhZGVyU2VydmljZS53aXRoQ29tcG9uZW50KHRoaXMpO1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWNhc2NhZGVyJyk7XHJcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtY2FzY2FkZXItcGlja2VyJyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHNydiA9IHRoaXMuY2FzY2FkZXJTZXJ2aWNlO1xyXG5cclxuICAgIHNydi4kcmVkcmF3LnBpcGUodGFrZVVudGlsKHRoaXMuJGRlc3Ryb3kpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAvLyBUaGVzZSBvcGVyYXRpb25zIHdvdWxkIG5vdCBtdXRhdGUgZGF0YS5cclxuICAgICAgdGhpcy5jaGVja0NoaWxkcmVuKCk7XHJcbiAgICAgIHRoaXMuYnVpbGREaXNwbGF5TGFiZWwoKTtcclxuICAgICAgdGhpcy5yZXBvc2l0aW9uKCk7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgc3J2LiRsb2FkaW5nLnBpcGUodGFrZVVudGlsKHRoaXMuJGRlc3Ryb3kpKS5zdWJzY3JpYmUobG9hZGluZyA9PiB7XHJcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gbG9hZGluZztcclxuICAgIH0pO1xyXG5cclxuICAgIHNydi4kb3B0aW9uU2VsZWN0ZWQucGlwZSh0YWtlVW50aWwodGhpcy4kZGVzdHJveSkpLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgaWYgKCFkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZShbXSk7XHJcbiAgICAgICAgdGhpcy5uelNlbGVjdC5lbWl0KG51bGwpO1xyXG4gICAgICAgIHRoaXMubnpTZWxlY3Rpb25DaGFuZ2UuZW1pdChbXSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgeyBvcHRpb24sIGluZGV4IH0gPSBkYXRhO1xyXG4gICAgICAgIGNvbnN0IHNob3VsZENsb3NlID0gb3B0aW9uLmlzTGVhZjtcclxuICAgICAgICBpZiAoc2hvdWxkQ2xvc2UpIHtcclxuICAgICAgICAgIHRoaXMuZGVsYXlTZXRNZW51VmlzaWJsZShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub25DaGFuZ2UodGhpcy5jYXNjYWRlclNlcnZpY2UudmFsdWVzKTtcclxuICAgICAgICB0aGlzLm56U2VsZWN0aW9uQ2hhbmdlLmVtaXQodGhpcy5jYXNjYWRlclNlcnZpY2Uuc2VsZWN0ZWRPcHRpb25zKTtcclxuICAgICAgICB0aGlzLm56U2VsZWN0LmVtaXQoeyBvcHRpb24sIGluZGV4IH0pO1xyXG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBzcnYuJHF1aXRTZWFyY2hpbmcucGlwZSh0YWtlVW50aWwodGhpcy4kZGVzdHJveSkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuaW5wdXRTdHJpbmcgPSAnJztcclxuICAgICAgdGhpcy5kcm9wZG93bldpZHRoU3R5bGUgPSAnJztcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuaTE4blNlcnZpY2UubG9jYWxlQ2hhbmdlXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHN0YXJ0V2l0aCgpLFxyXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLiRkZXN0cm95KVxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0TG9jYWxlKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHRoaXMubnpDb25maWdTZXJ2aWNlXHJcbiAgICAgIC5nZXRDb25maWdDaGFuZ2VFdmVudEZvckNvbXBvbmVudChOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLiRkZXN0cm95KSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGlmICh0aGlzLm56U2VsZWN0Lm9ic2VydmVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHdhcm5EZXByZWNhdGlvbihgbnpTZWxlY3QgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIDkuMC4wLiBQbGVhc2UgdXNlICduelNlbGVjdGlvbkNoYW5nZScgaW5zdGVhZC5gKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy4kZGVzdHJveS5uZXh0KCk7XHJcbiAgICB0aGlzLiRkZXN0cm95LmNvbXBsZXRlKCk7XHJcbiAgICB0aGlzLmNsZWFyRGVsYXlNZW51VGltZXIoKTtcclxuICAgIHRoaXMuY2xlYXJEZWxheVNlbGVjdFRpbWVyKCk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5jYXNjYWRlclNlcnZpY2UudmFsdWVzID0gdG9BcnJheSh2YWx1ZSk7XHJcbiAgICB0aGlzLmNhc2NhZGVyU2VydmljZS5zeW5jT3B0aW9ucyh0cnVlKTtcclxuICB9XHJcblxyXG4gIGRlbGF5U2V0TWVudVZpc2libGUodmlzaWJsZTogYm9vbGVhbiwgZGVsYXk6IG51bWJlciA9IDEwMCwgc2V0T3BlbmluZzogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsZWFyRGVsYXlNZW51VGltZXIoKTtcclxuICAgIGlmIChkZWxheSkge1xyXG4gICAgICBpZiAodmlzaWJsZSAmJiBzZXRPcGVuaW5nKSB7XHJcbiAgICAgICAgdGhpcy5pc09wZW5pbmcgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZGVsYXlNZW51VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLnNldE1lbnVWaXNpYmxlKHZpc2libGUpO1xyXG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICB0aGlzLmNsZWFyRGVsYXlNZW51VGltZXIoKTtcclxuICAgICAgICBpZiAodmlzaWJsZSkge1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgZGVsYXkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRNZW51VmlzaWJsZSh2aXNpYmxlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldE1lbnVWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56RGlzYWJsZWQgfHwgdGhpcy5tZW51VmlzaWJsZSA9PT0gdmlzaWJsZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodmlzaWJsZSkge1xyXG4gICAgICB0aGlzLmNhc2NhZGVyU2VydmljZS5zeW5jT3B0aW9ucygpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubWVudVZpc2libGUgPSB2aXNpYmxlO1xyXG4gICAgdGhpcy5uelZpc2libGVDaGFuZ2UuZW1pdCh2aXNpYmxlKTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xlYXJEZWxheU1lbnVUaW1lcigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRlbGF5TWVudVRpbWVyKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRlbGF5TWVudVRpbWVyKTtcclxuICAgICAgdGhpcy5kZWxheU1lbnVUaW1lciA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbGVhclNlbGVjdGlvbihldmVudD86IEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoZXZlbnQpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5sYWJlbFJlbmRlclRleHQgPSAnJztcclxuICAgIHRoaXMubGFiZWxSZW5kZXJDb250ZXh0ID0ge307XHJcbiAgICB0aGlzLmlucHV0VmFsdWUgPSAnJztcclxuICAgIHRoaXMuc2V0TWVudVZpc2libGUoZmFsc2UpO1xyXG4gICAgdGhpcy5jYXNjYWRlclNlcnZpY2UuY2xlYXIoKTtcclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBnZXRTdWJtaXRWYWx1ZSgpOiBhbnlbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5jYXNjYWRlclNlcnZpY2Uuc2VsZWN0ZWRPcHRpb25zLm1hcChvID0+IHRoaXMuY2FzY2FkZXJTZXJ2aWNlLmdldE9wdGlvblZhbHVlKG8pKTtcclxuICB9XHJcblxyXG4gIGZvY3VzKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmlzRm9jdXNlZCkge1xyXG4gICAgICAodGhpcy5pbnB1dCA/IHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCA6IHRoaXMuZWwpLmZvY3VzKCk7XHJcbiAgICAgIHRoaXMuaXNGb2N1c2VkID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGJsdXIoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc0ZvY3VzZWQpIHtcclxuICAgICAgKHRoaXMuaW5wdXQgPyB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQgOiB0aGlzLmVsKS5ibHVyKCk7XHJcbiAgICAgIHRoaXMuaXNGb2N1c2VkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVJbnB1dEJsdXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLm1lbnVWaXNpYmxlID8gdGhpcy5mb2N1cygpIDogdGhpcy5ibHVyKCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVJbnB1dEZvY3VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXHJcbiAgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCBrZXlDb2RlID0gZXZlbnQua2V5Q29kZTtcclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIGtleUNvZGUgIT09IERPV05fQVJST1cgJiZcclxuICAgICAga2V5Q29kZSAhPT0gVVBfQVJST1cgJiZcclxuICAgICAga2V5Q29kZSAhPT0gTEVGVF9BUlJPVyAmJlxyXG4gICAgICBrZXlDb2RlICE9PSBSSUdIVF9BUlJPVyAmJlxyXG4gICAgICBrZXlDb2RlICE9PSBFTlRFUiAmJlxyXG4gICAgICBrZXlDb2RlICE9PSBCQUNLU1BBQ0UgJiZcclxuICAgICAga2V5Q29kZSAhPT0gRVNDQVBFXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFByZXNzIGFueSBrZXlzIGFib3ZlIHRvIHJlb3BlbiBtZW51LlxyXG4gICAgaWYgKCF0aGlzLm1lbnVWaXNpYmxlICYmIGtleUNvZGUgIT09IEJBQ0tTUEFDRSAmJiBrZXlDb2RlICE9PSBFU0NBUEUpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc2V0TWVudVZpc2libGUodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWFrZSB0aGVzZSBrZXlzIHdvcmsgYXMgZGVmYXVsdCBpbiBzZWFyY2hpbmcgbW9kZS5cclxuICAgIGlmICh0aGlzLmluU2VhcmNoaW5nTW9kZSAmJiAoa2V5Q29kZSA9PT0gQkFDS1NQQUNFIHx8IGtleUNvZGUgPT09IExFRlRfQVJST1cgfHwga2V5Q29kZSA9PT0gUklHSFRfQVJST1cpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBJbnRlcmFjdCB3aXRoIHRoZSBjb21wb25lbnQuXHJcbiAgICBpZiAodGhpcy5tZW51VmlzaWJsZSkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBpZiAoa2V5Q29kZSA9PT0gRE9XTl9BUlJPVykge1xyXG4gICAgICAgIHRoaXMubW92ZVVwT3JEb3duKGZhbHNlKTtcclxuICAgICAgfSBlbHNlIGlmIChrZXlDb2RlID09PSBVUF9BUlJPVykge1xyXG4gICAgICAgIHRoaXMubW92ZVVwT3JEb3duKHRydWUpO1xyXG4gICAgICB9IGVsc2UgaWYgKGtleUNvZGUgPT09IExFRlRfQVJST1cpIHtcclxuICAgICAgICB0aGlzLm1vdmVMZWZ0KCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gUklHSFRfQVJST1cpIHtcclxuICAgICAgICB0aGlzLm1vdmVSaWdodCgpO1xyXG4gICAgICB9IGVsc2UgaWYgKGtleUNvZGUgPT09IEVOVEVSKSB7XHJcbiAgICAgICAgdGhpcy5vbkVudGVyKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcclxuICBvblRyaWdnZXJDbGljaygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56RGlzYWJsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubnpTaG93U2VhcmNoKSB7XHJcbiAgICAgIHRoaXMuZm9jdXMoKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmlzQWN0aW9uVHJpZ2dlcignY2xpY2snKSkge1xyXG4gICAgICB0aGlzLmRlbGF5U2V0TWVudVZpc2libGUoIXRoaXMubWVudVZpc2libGUsIDEwMCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicpXHJcbiAgb25UcmlnZ2VyTW91c2VFbnRlcigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56RGlzYWJsZWQgfHwgIXRoaXMuaXNBY3Rpb25UcmlnZ2VyKCdob3ZlcicpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRlbGF5U2V0TWVudVZpc2libGUodHJ1ZSwgdGhpcy5uek1vdXNlRW50ZXJEZWxheSwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJywgWyckZXZlbnQnXSlcclxuICBvblRyaWdnZXJNb3VzZUxlYXZlKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uekRpc2FibGVkIHx8ICF0aGlzLm1lbnVWaXNpYmxlIHx8IHRoaXMuaXNPcGVuaW5nIHx8ICF0aGlzLmlzQWN0aW9uVHJpZ2dlcignaG92ZXInKSkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBtb3VzZVRhcmdldCA9IGV2ZW50LnJlbGF0ZWRUYXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBjb25zdCBob3N0RWwgPSB0aGlzLmVsO1xyXG4gICAgY29uc3QgbWVudUVsID0gdGhpcy5tZW51ICYmICh0aGlzLm1lbnUubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCk7XHJcbiAgICBpZiAoaG9zdEVsLmNvbnRhaW5zKG1vdXNlVGFyZ2V0KSB8fCAobWVudUVsICYmIG1lbnVFbC5jb250YWlucyhtb3VzZVRhcmdldCkpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuZGVsYXlTZXRNZW51VmlzaWJsZShmYWxzZSwgdGhpcy5uek1vdXNlTGVhdmVEZWxheSk7XHJcbiAgfVxyXG5cclxuICBvbk9wdGlvbk1vdXNlRW50ZXIob3B0aW9uOiBOekNhc2NhZGVyT3B0aW9uLCBjb2x1bW5JbmRleDogbnVtYmVyLCBldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAodGhpcy5uekV4cGFuZFRyaWdnZXIgPT09ICdob3ZlcicpIHtcclxuICAgICAgaWYgKCFvcHRpb24uaXNMZWFmKSB7XHJcbiAgICAgICAgdGhpcy5kZWxheVNldE9wdGlvbkFjdGl2YXRlZChvcHRpb24sIGNvbHVtbkluZGV4LCBmYWxzZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jYXNjYWRlclNlcnZpY2Uuc2V0T3B0aW9uRGVhY3RpdmF0ZWRTaW5jZUNvbHVtbihjb2x1bW5JbmRleCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uT3B0aW9uTW91c2VMZWF2ZShvcHRpb246IE56Q2FzY2FkZXJPcHRpb24sIF9jb2x1bW5JbmRleDogbnVtYmVyLCBldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAodGhpcy5uekV4cGFuZFRyaWdnZXIgPT09ICdob3ZlcicgJiYgIW9wdGlvbi5pc0xlYWYpIHtcclxuICAgICAgdGhpcy5jbGVhckRlbGF5U2VsZWN0VGltZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uT3B0aW9uQ2xpY2sob3B0aW9uOiBOekNhc2NhZGVyT3B0aW9uLCBjb2x1bW5JbmRleDogbnVtYmVyLCBldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChldmVudCkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKG9wdGlvbiAmJiBvcHRpb24uZGlzYWJsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5lbC5mb2N1cygpO1xyXG4gICAgdGhpcy5pblNlYXJjaGluZ01vZGVcclxuICAgICAgPyB0aGlzLmNhc2NhZGVyU2VydmljZS5zZXRTZWFyY2hPcHRpb25TZWxlY3RlZChvcHRpb24gYXMgTnpDYXNjYWRlclNlYXJjaE9wdGlvbilcclxuICAgICAgOiB0aGlzLmNhc2NhZGVyU2VydmljZS5zZXRPcHRpb25BY3RpdmF0ZWQob3B0aW9uLCBjb2x1bW5JbmRleCwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzQWN0aW9uVHJpZ2dlcihhY3Rpb246ICdjbGljaycgfCAnaG92ZXInKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMubnpUcmlnZ2VyQWN0aW9uID09PSAnc3RyaW5nJ1xyXG4gICAgICA/IHRoaXMubnpUcmlnZ2VyQWN0aW9uID09PSBhY3Rpb25cclxuICAgICAgOiB0aGlzLm56VHJpZ2dlckFjdGlvbi5pbmRleE9mKGFjdGlvbikgIT09IC0xO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkVudGVyKCk6IHZvaWQge1xyXG4gICAgY29uc3QgY29sdW1uSW5kZXggPSBNYXRoLm1heCh0aGlzLmNhc2NhZGVyU2VydmljZS5hY3RpdmF0ZWRPcHRpb25zLmxlbmd0aCAtIDEsIDApO1xyXG4gICAgY29uc3Qgb3B0aW9uID0gdGhpcy5jYXNjYWRlclNlcnZpY2UuYWN0aXZhdGVkT3B0aW9uc1tjb2x1bW5JbmRleF07XHJcbiAgICBpZiAob3B0aW9uICYmICFvcHRpb24uZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5pblNlYXJjaGluZ01vZGVcclxuICAgICAgICA/IHRoaXMuY2FzY2FkZXJTZXJ2aWNlLnNldFNlYXJjaE9wdGlvblNlbGVjdGVkKG9wdGlvbiBhcyBOekNhc2NhZGVyU2VhcmNoT3B0aW9uKVxyXG4gICAgICAgIDogdGhpcy5jYXNjYWRlclNlcnZpY2Uuc2V0T3B0aW9uQWN0aXZhdGVkKG9wdGlvbiwgY29sdW1uSW5kZXgsIHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtb3ZlVXBPckRvd24oaXNVcDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgY29uc3QgY29sdW1uSW5kZXggPSBNYXRoLm1heCh0aGlzLmNhc2NhZGVyU2VydmljZS5hY3RpdmF0ZWRPcHRpb25zLmxlbmd0aCAtIDEsIDApO1xyXG4gICAgY29uc3QgYWN0aXZlT3B0aW9uID0gdGhpcy5jYXNjYWRlclNlcnZpY2UuYWN0aXZhdGVkT3B0aW9uc1tjb2x1bW5JbmRleF07XHJcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5jYXNjYWRlclNlcnZpY2UuY29sdW1uc1tjb2x1bW5JbmRleF0gfHwgW107XHJcbiAgICBjb25zdCBsZW5ndGggPSBvcHRpb25zLmxlbmd0aDtcclxuICAgIGxldCBuZXh0SW5kZXggPSAtMTtcclxuICAgIGlmICghYWN0aXZlT3B0aW9uKSB7XHJcbiAgICAgIC8vIE5vdCBzZWxlY3RlZCBvcHRpb25zIGluIHRoaXMgY29sdW1uXHJcbiAgICAgIG5leHRJbmRleCA9IGlzVXAgPyBsZW5ndGggOiAtMTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5leHRJbmRleCA9IG9wdGlvbnMuaW5kZXhPZihhY3RpdmVPcHRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgIG5leHRJbmRleCA9IGlzVXAgPyBuZXh0SW5kZXggLSAxIDogbmV4dEluZGV4ICsgMTtcclxuICAgICAgaWYgKG5leHRJbmRleCA8IDAgfHwgbmV4dEluZGV4ID49IGxlbmd0aCkge1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IG5leHRPcHRpb24gPSBvcHRpb25zW25leHRJbmRleF07XHJcbiAgICAgIGlmICghbmV4dE9wdGlvbiB8fCBuZXh0T3B0aW9uLmRpc2FibGVkKSB7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jYXNjYWRlclNlcnZpY2Uuc2V0T3B0aW9uQWN0aXZhdGVkKG5leHRPcHRpb24sIGNvbHVtbkluZGV4KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1vdmVMZWZ0KCk6IHZvaWQge1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuY2FzY2FkZXJTZXJ2aWNlLmFjdGl2YXRlZE9wdGlvbnM7XHJcbiAgICBpZiAob3B0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgb3B0aW9ucy5wb3AoKTsgLy8gUmVtb3ZlIHRoZSBsYXN0IG9uZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtb3ZlUmlnaHQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmNhc2NhZGVyU2VydmljZS5hY3RpdmF0ZWRPcHRpb25zLmxlbmd0aDtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmNhc2NhZGVyU2VydmljZS5jb2x1bW5zW2xlbmd0aF07XHJcbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmxlbmd0aCkge1xyXG4gICAgICBjb25zdCBuZXh0T3B0ID0gb3B0aW9ucy5maW5kKG8gPT4gIW8uZGlzYWJsZWQpO1xyXG4gICAgICBpZiAobmV4dE9wdCkge1xyXG4gICAgICAgIHRoaXMuY2FzY2FkZXJTZXJ2aWNlLnNldE9wdGlvbkFjdGl2YXRlZChuZXh0T3B0LCBsZW5ndGgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsZWFyRGVsYXlTZWxlY3RUaW1lcigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRlbGF5U2VsZWN0VGltZXIpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGVsYXlTZWxlY3RUaW1lcik7XHJcbiAgICAgIHRoaXMuZGVsYXlTZWxlY3RUaW1lciA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRlbGF5U2V0T3B0aW9uQWN0aXZhdGVkKG9wdGlvbjogTnpDYXNjYWRlck9wdGlvbiwgY29sdW1uSW5kZXg6IG51bWJlciwgcGVyZm9ybVNlbGVjdDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5jbGVhckRlbGF5U2VsZWN0VGltZXIoKTtcclxuICAgIHRoaXMuZGVsYXlTZWxlY3RUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNhc2NhZGVyU2VydmljZS5zZXRPcHRpb25BY3RpdmF0ZWQob3B0aW9uLCBjb2x1bW5JbmRleCwgcGVyZm9ybVNlbGVjdCk7XHJcbiAgICAgIHRoaXMuZGVsYXlTZWxlY3RUaW1lciA9IG51bGw7XHJcbiAgICB9LCAxNTApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0b2dnbGVTZWFyY2hpbmdNb2RlKHRvU2VhcmNoaW5nOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pblNlYXJjaGluZ01vZGUgIT09IHRvU2VhcmNoaW5nKSB7XHJcbiAgICAgIHRoaXMuY2FzY2FkZXJTZXJ2aWNlLnRvZ2dsZVNlYXJjaGluZ01vZGUodG9TZWFyY2hpbmcpO1xyXG4gICAgICB0aGlzLmRyb3Bkb3duV2lkdGhTdHlsZSA9IHRvU2VhcmNoaW5nID8gYCR7dGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRofXB4YCA6ICcnO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaW5TZWFyY2hpbmdNb2RlKSB7XHJcbiAgICAgIHRoaXMuY2FzY2FkZXJTZXJ2aWNlLnByZXBhcmVTZWFyY2hPcHRpb25zKHRoaXMuaW5wdXRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc09wdGlvbkFjdGl2YXRlZChvcHRpb246IE56Q2FzY2FkZXJPcHRpb24sIGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGFjdGl2ZU9wdCA9IHRoaXMuY2FzY2FkZXJTZXJ2aWNlLmFjdGl2YXRlZE9wdGlvbnNbaW5kZXhdO1xyXG4gICAgcmV0dXJuIGFjdGl2ZU9wdCA9PT0gb3B0aW9uO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAoaXNEaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLmNsb3NlTWVudSgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5uekRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIGNsb3NlTWVudSgpOiB2b2lkIHtcclxuICAgIHRoaXMuYmx1cigpO1xyXG4gICAgdGhpcy5jbGVhckRlbGF5TWVudVRpbWVyKCk7XHJcbiAgICB0aGlzLnNldE1lbnVWaXNpYmxlKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIG9uUG9zaXRpb25DaGFuZ2UocG9zaXRpb246IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSk6IHZvaWQge1xyXG4gICAgY29uc3QgbmV3VmFsdWUgPSBwb3NpdGlvbi5jb25uZWN0aW9uUGFpci5vcmlnaW5ZID09PSAnYm90dG9tJyA/ICdib3R0b20nIDogJ3RvcCc7XHJcbiAgICBpZiAodGhpcy5kcm9wRG93blBvc2l0aW9uICE9PSBuZXdWYWx1ZSkge1xyXG4gICAgICB0aGlzLmRyb3BEb3duUG9zaXRpb24gPSBuZXdWYWx1ZTtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVwb3NpdGlvbiB0aGUgY2FzY2FkZXIgcGFuZWwuIFdoZW4gYSBtZW51IG9wZW5zLCB0aGUgY2FzY2FkZXIgZXhwYW5kc1xyXG4gICAqIGFuZCBtYXkgZXhjZWVkIHRoZSBib3VuZGFyeSBvZiBicm93c2VyJ3Mgd2luZG93LlxyXG4gICAqL1xyXG4gIHByaXZhdGUgcmVwb3NpdGlvbigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm92ZXJsYXkgJiYgdGhpcy5vdmVybGF5Lm92ZXJsYXlSZWYgJiYgdGhpcy5tZW51VmlzaWJsZSkge1xyXG4gICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLm92ZXJsYXkub3ZlcmxheVJlZi51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFdoZW4gYSBjYXNjYWRlciBvcHRpb25zIGlzIGNoYW5nZWQsIGEgY2hpbGQgbmVlZHMgdG8ga25vdyB0aGF0IGl0IHNob3VsZCByZS1yZW5kZXIuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBjaGVja0NoaWxkcmVuKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuY2FzY2FkZXJJdGVtcykge1xyXG4gICAgICB0aGlzLmNhc2NhZGVySXRlbXMuZm9yRWFjaChpdGVtID0+IGl0ZW0ubWFya0ZvckNoZWNrKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBidWlsZERpc3BsYXlMYWJlbCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9ucyA9IHRoaXMuY2FzY2FkZXJTZXJ2aWNlLnNlbGVjdGVkT3B0aW9ucztcclxuICAgIGNvbnN0IGxhYmVsczogc3RyaW5nW10gPSBzZWxlY3RlZE9wdGlvbnMubWFwKG8gPT4gdGhpcy5jYXNjYWRlclNlcnZpY2UuZ2V0T3B0aW9uTGFiZWwobykpO1xyXG5cclxuICAgIGlmICh0aGlzLmlzTGFiZWxSZW5kZXJUZW1wbGF0ZSkge1xyXG4gICAgICB0aGlzLmxhYmVsUmVuZGVyQ29udGV4dCA9IHsgbGFiZWxzLCBzZWxlY3RlZE9wdGlvbnMgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubGFiZWxSZW5kZXJUZXh0ID0gZGVmYXVsdERpc3BsYXlSZW5kZXIuY2FsbCh0aGlzLCBsYWJlbHMsIHNlbGVjdGVkT3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldExvY2FsZSgpOiB2b2lkIHtcclxuICAgIHRoaXMubG9jYWxlID0gdGhpcy5pMThuU2VydmljZS5nZXRMb2NhbGVEYXRhKCdnbG9iYWwnKTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxufVxyXG4iXX0=