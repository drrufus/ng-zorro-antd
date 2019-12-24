import { __decorate, __metadata, __read, __spread } from "tslib";
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
var _c0 = ["input"];
var _c1 = ["menu"];
function NzCascaderComponent_div_3_i_3_Template(rf, ctx) { if (rf & 1) {
    var _r1093 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 12);
    i0.ɵɵlistener("click", function NzCascaderComponent_div_3_i_3_Template_i_click_0_listener($event) { i0.ɵɵrestoreView(_r1093); var ctx_r1092 = i0.ɵɵnextContext(2); return ctx_r1092.clearSelection($event); });
    i0.ɵɵelementEnd();
} }
function NzCascaderComponent_div_3_i_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 13);
} if (rf & 2) {
    var ctx_r1087 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("ant-cascader-picker-arrow-expand", ctx_r1087.menuVisible);
} }
function NzCascaderComponent_div_3_i_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 14);
} }
function NzCascaderComponent_div_3_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1089 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1089.labelRenderText);
} }
function NzCascaderComponent_div_3_ng_template_8_ng_template_0_Template(rf, ctx) { }
function NzCascaderComponent_div_3_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NzCascaderComponent_div_3_ng_template_8_ng_template_0_Template, 0, 0, "ng-template", 15);
} if (rf & 2) {
    var ctx_r1091 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1091.nzLabelRender)("ngTemplateOutletContext", ctx_r1091.labelRenderContext);
} }
function NzCascaderComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r1096 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "input", 4, 5);
    i0.ɵɵlistener("ngModelChange", function NzCascaderComponent_div_3_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r1096); var ctx_r1095 = i0.ɵɵnextContext(); return ctx_r1095.inputValue = $event; })("blur", function NzCascaderComponent_div_3_Template_input_blur_1_listener($event) { i0.ɵɵrestoreView(_r1096); var ctx_r1097 = i0.ɵɵnextContext(); return ctx_r1097.handleInputBlur(); })("focus", function NzCascaderComponent_div_3_Template_input_focus_1_listener($event) { i0.ɵɵrestoreView(_r1096); var ctx_r1098 = i0.ɵɵnextContext(); return ctx_r1098.handleInputFocus(); })("change", function NzCascaderComponent_div_3_Template_input_change_1_listener($event) { i0.ɵɵrestoreView(_r1096); return $event.stopPropagation(); });
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
    var _r1090 = i0.ɵɵreference(9);
    var ctx_r1083 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ant-cascader-input-disabled", ctx_r1083.nzDisabled)("ant-cascader-input-lg", ctx_r1083.nzSize === "large")("ant-cascader-input-sm", ctx_r1083.nzSize === "small");
    i0.ɵɵproperty("readonly", !ctx_r1083.nzShowSearch)("disabled", ctx_r1083.nzDisabled)("nzSize", ctx_r1083.nzSize)("ngModel", ctx_r1083.inputValue);
    i0.ɵɵattribute("autoComplete", "off")("placeholder", ctx_r1083.showPlaceholder ? ctx_r1083.nzPlaceHolder || (ctx_r1083.locale == null ? null : ctx_r1083.locale.placeholder) : null)("autofocus", ctx_r1083.nzAutoFocus ? "autofocus" : null);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1083.clearIconVisible);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1083.nzShowArrow && !ctx_r1083.isLoading);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1083.isLoading);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ant-cascader-show-search", !!ctx_r1083.nzShowSearch)("ant-focusd", !!ctx_r1083.nzShowSearch && ctx_r1083.isFocused && !ctx_r1083.inputValue);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1083.isLabelRenderTemplate)("ngIfElse", _r1090);
} }
function NzCascaderComponent_ng_template_5_div_0_ul_2_li_1_Template(rf, ctx) { if (rf & 1) {
    var _r1110 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 23);
    i0.ɵɵlistener("mouseenter", function NzCascaderComponent_ng_template_5_div_0_ul_2_li_1_Template_li_mouseenter_0_listener($event) { i0.ɵɵrestoreView(_r1110); var option_r1107 = ctx.$implicit; var i_r1104 = i0.ɵɵnextContext().index; var ctx_r1108 = i0.ɵɵnextContext(3); return ctx_r1108.onOptionMouseEnter(option_r1107, i_r1104, $event); })("mouseleave", function NzCascaderComponent_ng_template_5_div_0_ul_2_li_1_Template_li_mouseleave_0_listener($event) { i0.ɵɵrestoreView(_r1110); var option_r1107 = ctx.$implicit; var i_r1104 = i0.ɵɵnextContext().index; var ctx_r1111 = i0.ɵɵnextContext(3); return ctx_r1111.onOptionMouseLeave(option_r1107, i_r1104, $event); })("click", function NzCascaderComponent_ng_template_5_div_0_ul_2_li_1_Template_li_click_0_listener($event) { i0.ɵɵrestoreView(_r1110); var option_r1107 = ctx.$implicit; var i_r1104 = i0.ɵɵnextContext().index; var ctx_r1113 = i0.ɵɵnextContext(3); return ctx_r1113.onOptionClick(option_r1107, i_r1104, $event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var option_r1107 = ctx.$implicit;
    var i_r1104 = i0.ɵɵnextContext().index;
    var ctx_r1105 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("columnIndex", i_r1104)("nzLabelProperty", ctx_r1105.nzLabelProperty)("optionTemplate", ctx_r1105.nzOptionRender)("activated", ctx_r1105.isOptionActivated(option_r1107, i_r1104))("highlightText", ctx_r1105.inSearchingMode ? ctx_r1105.inputValue : "")("option", option_r1107);
} }
function NzCascaderComponent_ng_template_5_div_0_ul_2_li_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 24);
    i0.ɵɵelement(1, "nz-embed-empty", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1106 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzComponentName", "cascader")("specificContent", ctx_r1106.nzNotFoundContent);
} }
function NzCascaderComponent_ng_template_5_div_0_ul_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 20);
    i0.ɵɵtemplate(1, NzCascaderComponent_ng_template_5_div_0_ul_2_li_1_Template, 1, 6, "li", 21);
    i0.ɵɵtemplate(2, NzCascaderComponent_ng_template_5_div_0_ul_2_li_2_Template, 2, 2, "li", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var options_r1103 = ctx.$implicit;
    var ctx_r1102 = i0.ɵɵnextContext(3);
    i0.ɵɵstyleProp("height", ctx_r1102.inSearchingMode && !ctx_r1102.cascaderService.columns[0].length ? "auto" : "")("width", ctx_r1102.dropdownWidthStyle);
    i0.ɵɵproperty("ngClass", ctx_r1102.menuColumnCls);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", options_r1103);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1102.inSearchingMode && !ctx_r1102.cascaderService.columns[0].length);
} }
function NzCascaderComponent_ng_template_5_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r1117 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17, 18);
    i0.ɵɵlistener("mouseleave", function NzCascaderComponent_ng_template_5_div_0_Template_div_mouseleave_0_listener($event) { i0.ɵɵrestoreView(_r1117); var ctx_r1116 = i0.ɵɵnextContext(2); return ctx_r1116.onTriggerMouseLeave($event); });
    i0.ɵɵtemplate(2, NzCascaderComponent_ng_template_5_div_0_ul_2_Template, 3, 5, "ul", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1100 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("ant-cascader-menus-hidden", !ctx_r1100.menuVisible);
    i0.ɵɵproperty("ngClass", ctx_r1100.menuCls)("ngStyle", ctx_r1100.nzMenuStyle)("@.disabled", ctx_r1100.noAnimation == null ? null : ctx_r1100.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r1100.noAnimation == null ? null : ctx_r1100.noAnimation.nzNoAnimation)("@slideMotion", ctx_r1100.dropDownPosition);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1100.cascaderService.columns);
} }
function NzCascaderComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NzCascaderComponent_ng_template_5_div_0_Template, 3, 7, "div", 16);
} if (rf & 2) {
    var ctx_r1084 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r1084.nzOptions && ctx_r1084.nzOptions.length || ctx_r1084.inSearchingMode);
} }
var _c2 = ["*"];
var NZ_CONFIG_COMPONENT_NAME = 'cascader';
var defaultDisplayRender = function (labels) { return labels.join(' / '); };
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
        this.positions = __spread(DEFAULT_DROPDOWN_POSITIONS);
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
        get: function () {
            return this.cascaderService.nzOptions;
        },
        set: function (options) {
            this.cascaderService.withOptions(options);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "inSearchingMode", {
        get: function () {
            return this.cascaderService.inSearchingMode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "inputValue", {
        get: function () {
            return this.inputString;
        },
        set: function (inputValue) {
            this.inputString = inputValue;
            this.toggleSearchingMode(!!inputValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "menuCls", {
        get: function () {
            var _a;
            return _a = {}, _a["" + this.nzMenuClassName] = !!this.nzMenuClassName, _a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "menuColumnCls", {
        get: function () {
            var _a;
            return _a = {}, _a["" + this.nzColumnClassName] = !!this.nzColumnClassName, _a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "hasInput", {
        get: function () {
            return !!this.inputValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "hasValue", {
        get: function () {
            return this.cascaderService.values && this.cascaderService.values.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "showPlaceholder", {
        get: function () {
            return !(this.hasInput || this.hasValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "clearIconVisible", {
        get: function () {
            return this.nzAllowClear && !this.nzDisabled && (this.hasValue || this.hasInput);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "isLabelRenderTemplate", {
        get: function () {
            return !!this.nzLabelRender;
        },
        enumerable: true,
        configurable: true
    });
    NzCascaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        var srv = this.cascaderService;
        srv.$redraw.pipe(takeUntil(this.$destroy)).subscribe(function () {
            // These operations would not mutate data.
            _this.checkChildren();
            _this.buildDisplayLabel();
            _this.reposition();
            _this.cdr.markForCheck();
        });
        srv.$loading.pipe(takeUntil(this.$destroy)).subscribe(function (loading) {
            _this.isLoading = loading;
        });
        srv.$optionSelected.pipe(takeUntil(this.$destroy)).subscribe(function (data) {
            if (!data) {
                _this.onChange([]);
                _this.nzSelect.emit(null);
                _this.nzSelectionChange.emit([]);
            }
            else {
                var option = data.option, index = data.index;
                var shouldClose = option.isLeaf;
                if (shouldClose) {
                    _this.delaySetMenuVisible(false);
                }
                _this.onChange(_this.cascaderService.values);
                _this.nzSelectionChange.emit(_this.cascaderService.selectedOptions);
                _this.nzSelect.emit({ option: option, index: index });
                _this.cdr.markForCheck();
            }
        });
        srv.$quitSearching.pipe(takeUntil(this.$destroy)).subscribe(function () {
            _this.inputString = '';
            _this.dropdownWidthStyle = '';
        });
        this.i18nService.localeChange.pipe(startWith(), takeUntil(this.$destroy)).subscribe(function () {
            _this.setLocale();
        });
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(takeUntil(this.$destroy))
            .subscribe(function () {
            _this.cdr.markForCheck();
        });
        if (this.nzSelect.observers.length > 0) {
            warnDeprecation("nzSelect is deprecated and will be removed in 9.0.0. Please use 'nzSelectionChange' instead.");
        }
    };
    NzCascaderComponent.prototype.ngOnDestroy = function () {
        this.$destroy.next();
        this.$destroy.complete();
        this.clearDelayMenuTimer();
        this.clearDelaySelectTimer();
    };
    NzCascaderComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    NzCascaderComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    // tslint:disable-next-line:no-any
    NzCascaderComponent.prototype.writeValue = function (value) {
        this.cascaderService.values = toArray(value);
        this.cascaderService.syncOptions(true);
    };
    NzCascaderComponent.prototype.delaySetMenuVisible = function (visible, delay, setOpening) {
        var _this = this;
        if (delay === void 0) { delay = 100; }
        if (setOpening === void 0) { setOpening = false; }
        this.clearDelayMenuTimer();
        if (delay) {
            if (visible && setOpening) {
                this.isOpening = true;
            }
            this.delayMenuTimer = setTimeout(function () {
                _this.setMenuVisible(visible);
                _this.cdr.detectChanges();
                _this.clearDelayMenuTimer();
                if (visible) {
                    setTimeout(function () {
                        _this.isOpening = false;
                    }, 100);
                }
            }, delay);
        }
        else {
            this.setMenuVisible(visible);
        }
    };
    NzCascaderComponent.prototype.setMenuVisible = function (visible) {
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
    NzCascaderComponent.prototype.clearDelayMenuTimer = function () {
        if (this.delayMenuTimer) {
            clearTimeout(this.delayMenuTimer);
            this.delayMenuTimer = null;
        }
    };
    NzCascaderComponent.prototype.clearSelection = function (event) {
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
    NzCascaderComponent.prototype.getSubmitValue = function () {
        var _this = this;
        return this.cascaderService.selectedOptions.map(function (o) { return _this.cascaderService.getOptionValue(o); });
    };
    NzCascaderComponent.prototype.focus = function () {
        if (!this.isFocused) {
            (this.input ? this.input.nativeElement : this.el).focus();
            this.isFocused = true;
        }
    };
    NzCascaderComponent.prototype.blur = function () {
        if (this.isFocused) {
            (this.input ? this.input.nativeElement : this.el).blur();
            this.isFocused = false;
        }
    };
    NzCascaderComponent.prototype.handleInputBlur = function () {
        this.menuVisible ? this.focus() : this.blur();
    };
    NzCascaderComponent.prototype.handleInputFocus = function () {
        this.focus();
    };
    NzCascaderComponent.prototype.onKeyDown = function (event) {
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
    NzCascaderComponent.prototype.onTriggerClick = function () {
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
    NzCascaderComponent.prototype.onTriggerMouseEnter = function () {
        if (this.nzDisabled || !this.isActionTrigger('hover')) {
            return;
        }
        this.delaySetMenuVisible(true, this.nzMouseEnterDelay, true);
    };
    NzCascaderComponent.prototype.onTriggerMouseLeave = function (event) {
        if (this.nzDisabled || !this.menuVisible || this.isOpening || !this.isActionTrigger('hover')) {
            event.preventDefault();
            return;
        }
        var mouseTarget = event.relatedTarget;
        var hostEl = this.el;
        var menuEl = this.menu && this.menu.nativeElement;
        if (hostEl.contains(mouseTarget) || (menuEl && menuEl.contains(mouseTarget))) {
            return;
        }
        this.delaySetMenuVisible(false, this.nzMouseLeaveDelay);
    };
    NzCascaderComponent.prototype.onOptionMouseEnter = function (option, columnIndex, event) {
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
    NzCascaderComponent.prototype.onOptionMouseLeave = function (option, _columnIndex, event) {
        event.preventDefault();
        if (this.nzExpandTrigger === 'hover' && !option.isLeaf) {
            this.clearDelaySelectTimer();
        }
    };
    NzCascaderComponent.prototype.onOptionClick = function (option, columnIndex, event) {
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
    };
    NzCascaderComponent.prototype.isActionTrigger = function (action) {
        return typeof this.nzTriggerAction === 'string' ? this.nzTriggerAction === action : this.nzTriggerAction.indexOf(action) !== -1;
    };
    NzCascaderComponent.prototype.onEnter = function () {
        var columnIndex = Math.max(this.cascaderService.activatedOptions.length - 1, 0);
        var option = this.cascaderService.activatedOptions[columnIndex];
        if (option && !option.disabled) {
            this.inSearchingMode
                ? this.cascaderService.setSearchOptionSelected(option)
                : this.cascaderService.setOptionActivated(option, columnIndex, true);
        }
    };
    NzCascaderComponent.prototype.moveUpOrDown = function (isUp) {
        var columnIndex = Math.max(this.cascaderService.activatedOptions.length - 1, 0);
        var activeOption = this.cascaderService.activatedOptions[columnIndex];
        var options = this.cascaderService.columns[columnIndex] || [];
        var length = options.length;
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
            var nextOption = options[nextIndex];
            if (!nextOption || nextOption.disabled) {
                continue;
            }
            this.cascaderService.setOptionActivated(nextOption, columnIndex);
            break;
        }
    };
    NzCascaderComponent.prototype.moveLeft = function () {
        var options = this.cascaderService.activatedOptions;
        if (options.length) {
            options.pop(); // Remove the last one
        }
    };
    NzCascaderComponent.prototype.moveRight = function () {
        var length = this.cascaderService.activatedOptions.length;
        var options = this.cascaderService.columns[length];
        if (options && options.length) {
            var nextOpt = options.find(function (o) { return !o.disabled; });
            if (nextOpt) {
                this.cascaderService.setOptionActivated(nextOpt, length);
            }
        }
    };
    NzCascaderComponent.prototype.clearDelaySelectTimer = function () {
        if (this.delaySelectTimer) {
            clearTimeout(this.delaySelectTimer);
            this.delaySelectTimer = null;
        }
    };
    NzCascaderComponent.prototype.delaySetOptionActivated = function (option, columnIndex, performSelect) {
        var _this = this;
        this.clearDelaySelectTimer();
        this.delaySelectTimer = setTimeout(function () {
            _this.cascaderService.setOptionActivated(option, columnIndex, performSelect);
            _this.delaySelectTimer = null;
        }, 150);
    };
    NzCascaderComponent.prototype.toggleSearchingMode = function (toSearching) {
        if (this.inSearchingMode !== toSearching) {
            this.cascaderService.toggleSearchingMode(toSearching);
            this.dropdownWidthStyle = toSearching ? this.input.nativeElement.offsetWidth + "px" : '';
        }
        if (this.inSearchingMode) {
            this.cascaderService.prepareSearchOptions(this.inputValue);
        }
    };
    NzCascaderComponent.prototype.isOptionActivated = function (option, index) {
        var activeOpt = this.cascaderService.activatedOptions[index];
        return activeOpt === option;
    };
    NzCascaderComponent.prototype.setDisabledState = function (isDisabled) {
        if (isDisabled) {
            this.closeMenu();
        }
        this.nzDisabled = isDisabled;
    };
    NzCascaderComponent.prototype.closeMenu = function () {
        this.blur();
        this.clearDelayMenuTimer();
        this.setMenuVisible(false);
    };
    NzCascaderComponent.prototype.onPositionChange = function (position) {
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
    NzCascaderComponent.prototype.reposition = function () {
        var _this = this;
        if (this.overlay && this.overlay.overlayRef && this.menuVisible) {
            Promise.resolve().then(function () {
                _this.overlay.overlayRef.updatePosition();
            });
        }
    };
    /**
     * When a cascader options is changed, a child needs to know that it should re-render.
     */
    NzCascaderComponent.prototype.checkChildren = function () {
        if (this.cascaderItems) {
            this.cascaderItems.forEach(function (item) { return item.markForCheck(); });
        }
    };
    NzCascaderComponent.prototype.buildDisplayLabel = function () {
        var _this = this;
        var selectedOptions = this.cascaderService.selectedOptions;
        var labels = selectedOptions.map(function (o) { return _this.cascaderService.getOptionLabel(o); });
        if (this.isLabelRenderTemplate) {
            this.labelRenderContext = { labels: labels, selectedOptions: selectedOptions };
        }
        else {
            this.labelRenderText = defaultDisplayRender.call(this, labels, selectedOptions);
        }
    };
    NzCascaderComponent.prototype.setLocale = function () {
        this.locale = this.i18nService.getLocaleData('global');
        this.cdr.markForCheck();
    };
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
                    useExisting: forwardRef((function () { return NzCascaderComponent; })),
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
            var _r1081 = i0.ɵɵreference(1);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.nzShowInput);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("cdkConnectedOverlayOrigin", _r1081)("cdkConnectedOverlayPositions", ctx.positions)("cdkConnectedOverlayOpen", ctx.menuVisible);
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
    return NzCascaderComponent;
}());
export { NzCascaderComponent };
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
                        useExisting: forwardRef((function () { return NzCascaderComponent; })),
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
                    "\n      .ant-cascader-menus {\n        margin-top: 4px;\n        margin-bottom: 4px;\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n      }\n    "
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FzY2FkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jYXNjYWRlci8iLCJzb3VyY2VzIjpbIm56LWNhc2NhZGVyLmNvbXBvbmVudC50cyIsIm56LWNhc2NhZGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDaEgsT0FBTyxFQUFFLG1CQUFtQixFQUEwRCxNQUFNLHNCQUFzQixDQUFDO0FBQ25ILE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixJQUFJLEVBQ0osWUFBWSxFQUNaLEtBQUssRUFHTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxZQUFZLEVBQ1osaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEQsT0FBTyxFQUNMLDBCQUEwQixFQUMxQixZQUFZLEVBR1osZUFBZSxFQUNmLHNCQUFzQixFQUN0QixXQUFXLEVBQ1gsT0FBTyxFQUNQLGVBQWUsRUFDZixVQUFVLEVBQ1gsTUFBTSxvQkFBb0IsQ0FBQztBQUU1QixPQUFPLEVBQTJCLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBVTVFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDRCQUE0QixD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QUUsS0FBSyxFQUFFOztrQkFDaEQsWUFBWTttQkFBQyx5QkFBeUI7O2tCQUV0QyxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFFTCxLQUFLOztrQkFTTCxNQUFNOztrQkFFTixNQUFNOztrQkFLTixNQUFNOztrQkFFTixNQUFNOztrQkEwT04sWUFBWTttQkFBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7O2tCQTJDbEMsWUFBWTttQkFBQyxPQUFPOztrQkFjcEIsWUFBWTttQkFBQyxZQUFZOztrQkFTekIsWUFBWTttQkFBQyxZQUFZLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEJBQ0tTUEFDRSwgRE9XTl9BUlJPVywgRU5URVIsIEVTQ0FQRSwgTEVGVF9BUlJPVywgUklHSFRfQVJST1csIFVQX0FSUk9XIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcclxuaW1wb3J0IHsgQ2RrQ29ubmVjdGVkT3ZlcmxheSwgQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlLCBDb25uZWN0aW9uUG9zaXRpb25QYWlyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBmb3J3YXJkUmVmLFxyXG4gIEhvc3QsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdDaGlsZHJlbixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgc3RhcnRXaXRoLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIERFRkFVTFRfRFJPUERPV05fUE9TSVRJT05TLFxyXG4gIElucHV0Qm9vbGVhbixcclxuICBOZ0NsYXNzVHlwZSxcclxuICBOZ1N0eWxlSW50ZXJmYWNlLFxyXG4gIE56Q29uZmlnU2VydmljZSxcclxuICBOek5vQW5pbWF0aW9uRGlyZWN0aXZlLFxyXG4gIHNsaWRlTW90aW9uLFxyXG4gIHRvQXJyYXksXHJcbiAgd2FybkRlcHJlY2F0aW9uLFxyXG4gIFdpdGhDb25maWdcclxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpDYXNjYWRlckkxOG5JbnRlcmZhY2UsIE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5pbXBvcnQge1xyXG4gIE56Q2FzY2FkZXJDb21wb25lbnRBc1NvdXJjZSxcclxuICBOekNhc2NhZGVyRXhwYW5kVHJpZ2dlcixcclxuICBOekNhc2NhZGVyT3B0aW9uLFxyXG4gIE56Q2FzY2FkZXJTZWFyY2hPcHRpb24sXHJcbiAgTnpDYXNjYWRlclNpemUsXHJcbiAgTnpDYXNjYWRlclRyaWdnZXJUeXBlLFxyXG4gIE56U2hvd1NlYXJjaE9wdGlvbnNcclxufSBmcm9tICcuL256LWNhc2NhZGVyLWRlZmluaXRpb25zJztcclxuaW1wb3J0IHsgTnpDYXNjYWRlck9wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbnotY2FzY2FkZXItbGkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpDYXNjYWRlclNlcnZpY2UgfSBmcm9tICcuL256LWNhc2NhZGVyLnNlcnZpY2UnO1xyXG5cclxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ2Nhc2NhZGVyJztcclxuY29uc3QgZGVmYXVsdERpc3BsYXlSZW5kZXIgPSAobGFiZWxzOiBzdHJpbmdbXSkgPT4gbGFiZWxzLmpvaW4oJyAvICcpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzZWxlY3RvcjogJ256LWNhc2NhZGVyLCBbbnotY2FzY2FkZXJdJyxcclxuICBleHBvcnRBczogJ256Q2FzY2FkZXInLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1jYXNjYWRlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgYW5pbWF0aW9uczogW3NsaWRlTW90aW9uXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE56Q2FzY2FkZXJDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIE56Q2FzY2FkZXJTZXJ2aWNlXHJcbiAgXSxcclxuICBob3N0OiB7XHJcbiAgICAnW2F0dHIudGFiSW5kZXhdJzogJ1wiMFwiJyxcclxuICAgICdbY2xhc3MuYW50LWNhc2NhZGVyLWxnXSc6ICduelNpemUgPT09IFwibGFyZ2VcIicsXHJcbiAgICAnW2NsYXNzLmFudC1jYXNjYWRlci1zbV0nOiAnbnpTaXplID09PSBcInNtYWxsXCInLFxyXG4gICAgJ1tjbGFzcy5hbnQtY2FzY2FkZXItcGlja2VyLWRpc2FibGVkXSc6ICduekRpc2FibGVkJyxcclxuICAgICdbY2xhc3MuYW50LWNhc2NhZGVyLXBpY2tlci1vcGVuXSc6ICdtZW51VmlzaWJsZScsXHJcbiAgICAnW2NsYXNzLmFudC1jYXNjYWRlci1waWNrZXItd2l0aC12YWx1ZV0nOiAnISFpbnB1dFZhbHVlJyxcclxuICAgICdbY2xhc3MuYW50LWNhc2NhZGVyLWZvY3VzZWRdJzogJ2lzRm9jdXNlZCdcclxuICB9LFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICAuYW50LWNhc2NhZGVyLW1lbnVzIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgICAgIHRvcDogMTAwJTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56Q2FzY2FkZXJDb21wb25lbnQgaW1wbGVtZW50cyBOekNhc2NhZGVyQ29tcG9uZW50QXNTb3VyY2UsIE9uSW5pdCwgT25EZXN0cm95LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcbiAgQFZpZXdDaGlsZCgnaW5wdXQnLCB7IHN0YXRpYzogZmFsc2UgfSkgaW5wdXQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnbWVudScsIHsgc3RhdGljOiBmYWxzZSB9KSBtZW51OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoQ2RrQ29ubmVjdGVkT3ZlcmxheSwgeyBzdGF0aWM6IGZhbHNlIH0pIG92ZXJsYXk6IENka0Nvbm5lY3RlZE92ZXJsYXk7XHJcbiAgQFZpZXdDaGlsZHJlbihOekNhc2NhZGVyT3B0aW9uQ29tcG9uZW50KSBjYXNjYWRlckl0ZW1zOiBRdWVyeUxpc3Q8TnpDYXNjYWRlck9wdGlvbkNvbXBvbmVudD47XHJcblxyXG4gIEBJbnB1dCgpIG56T3B0aW9uUmVuZGVyOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpDYXNjYWRlck9wdGlvbjsgaW5kZXg6IG51bWJlciB9PiB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dJbnB1dCA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd0Fycm93ID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpBbGxvd0NsZWFyID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpBdXRvRm9jdXMgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDaGFuZ2VPblNlbGVjdCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpDb2x1bW5DbGFzc05hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBuekV4cGFuZFRyaWdnZXI6IE56Q2FzY2FkZXJFeHBhbmRUcmlnZ2VyID0gJ2NsaWNrJztcclxuICBASW5wdXQoKSBuelZhbHVlUHJvcGVydHkgPSAndmFsdWUnO1xyXG4gIEBJbnB1dCgpIG56TGFiZWxSZW5kZXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56TGFiZWxQcm9wZXJ0eSA9ICdsYWJlbCc7XHJcbiAgQElucHV0KCkgbnpOb3RGb3VuZENvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgJ2RlZmF1bHQnKSBuelNpemU6IE56Q2FzY2FkZXJTaXplO1xyXG4gIEBJbnB1dCgpIG56U2hvd1NlYXJjaDogYm9vbGVhbiB8IE56U2hvd1NlYXJjaE9wdGlvbnM7XHJcbiAgQElucHV0KCkgbnpQbGFjZUhvbGRlcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56TWVudUNsYXNzTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56TWVudVN0eWxlOiBOZ1N0eWxlSW50ZXJmYWNlO1xyXG4gIEBJbnB1dCgpIG56TW91c2VFbnRlckRlbGF5OiBudW1iZXIgPSAxNTA7IC8vIG1zXHJcbiAgQElucHV0KCkgbnpNb3VzZUxlYXZlRGVsYXk6IG51bWJlciA9IDE1MDsgLy8gbXNcclxuICBASW5wdXQoKSBuelRyaWdnZXJBY3Rpb246IE56Q2FzY2FkZXJUcmlnZ2VyVHlwZSB8IE56Q2FzY2FkZXJUcmlnZ2VyVHlwZVtdID0gWydjbGljayddIGFzIE56Q2FzY2FkZXJUcmlnZ2VyVHlwZVtdO1xyXG4gIEBJbnB1dCgpIG56Q2hhbmdlT246IChvcHRpb246IE56Q2FzY2FkZXJPcHRpb24sIGxldmVsOiBudW1iZXIpID0+IGJvb2xlYW47XHJcbiAgQElucHV0KCkgbnpMb2FkRGF0YTogKG5vZGU6IE56Q2FzY2FkZXJPcHRpb24sIGluZGV4PzogbnVtYmVyKSA9PiBQcm9taXNlTGlrZTxhbnk+OyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxyXG5cclxuICBASW5wdXQoKVxyXG4gIGdldCBuek9wdGlvbnMoKTogTnpDYXNjYWRlck9wdGlvbltdIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5jYXNjYWRlclNlcnZpY2UubnpPcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgc2V0IG56T3B0aW9ucyhvcHRpb25zOiBOekNhc2NhZGVyT3B0aW9uW10gfCBudWxsKSB7XHJcbiAgICB0aGlzLmNhc2NhZGVyU2VydmljZS53aXRoT3B0aW9ucyhvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNlbGVjdGlvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpDYXNjYWRlck9wdGlvbltdPigpO1xyXG5cclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCA5LjAuMC4gVGhpcyBhcGkgaXMgYSBkdXBsaWNhdGlvbiBvZiBgbmdNb2RlbENoYW5nZWAuXHJcbiAgICovXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56U2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjx7IG9wdGlvbjogTnpDYXNjYWRlck9wdGlvbjsgaW5kZXg6IG51bWJlciB9IHwgbnVsbD4oKTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2xlYXIgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIGVsOiBIVE1MRWxlbWVudDtcclxuICBkcm9wRG93blBvc2l0aW9uID0gJ2JvdHRvbSc7XHJcbiAgbWVudVZpc2libGUgPSBmYWxzZTtcclxuICBpc0xvYWRpbmcgPSBmYWxzZTtcclxuICBsYWJlbFJlbmRlclRleHQ6IHN0cmluZztcclxuICBsYWJlbFJlbmRlckNvbnRleHQgPSB7fTtcclxuICBvbkNoYW5nZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcclxuICBvblRvdWNoZWQgPSBGdW5jdGlvbi5wcm90b3R5cGU7XHJcbiAgcG9zaXRpb25zOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyW10gPSBbLi4uREVGQVVMVF9EUk9QRE9XTl9QT1NJVElPTlNdO1xyXG4gIGRyb3Bkb3duV2lkdGhTdHlsZTogc3RyaW5nO1xyXG4gIGlzRm9jdXNlZCA9IGZhbHNlO1xyXG5cclxuICBsb2NhbGU6IE56Q2FzY2FkZXJJMThuSW50ZXJmYWNlO1xyXG5cclxuICBwcml2YXRlICRkZXN0cm95ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBwcml2YXRlIGlucHV0U3RyaW5nID0gJyc7XHJcbiAgcHJpdmF0ZSBpc09wZW5pbmcgPSBmYWxzZTtcclxuICBwcml2YXRlIGRlbGF5TWVudVRpbWVyOiBudW1iZXIgfCBudWxsO1xyXG4gIHByaXZhdGUgZGVsYXlTZWxlY3RUaW1lcjogbnVtYmVyIHwgbnVsbDtcclxuXHJcbiAgZ2V0IGluU2VhcmNoaW5nTW9kZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNhc2NhZGVyU2VydmljZS5pblNlYXJjaGluZ01vZGU7XHJcbiAgfVxyXG5cclxuICBzZXQgaW5wdXRWYWx1ZShpbnB1dFZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuaW5wdXRTdHJpbmcgPSBpbnB1dFZhbHVlO1xyXG4gICAgdGhpcy50b2dnbGVTZWFyY2hpbmdNb2RlKCEhaW5wdXRWYWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgaW5wdXRWYWx1ZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5wdXRTdHJpbmc7XHJcbiAgfVxyXG5cclxuICBnZXQgbWVudUNscygpOiBOZ0NsYXNzVHlwZSB7XHJcbiAgICByZXR1cm4geyBbYCR7dGhpcy5uek1lbnVDbGFzc05hbWV9YF06ICEhdGhpcy5uek1lbnVDbGFzc05hbWUgfTtcclxuICB9XHJcblxyXG4gIGdldCBtZW51Q29sdW1uQ2xzKCk6IE5nQ2xhc3NUeXBlIHtcclxuICAgIHJldHVybiB7IFtgJHt0aGlzLm56Q29sdW1uQ2xhc3NOYW1lfWBdOiAhIXRoaXMubnpDb2x1bW5DbGFzc05hbWUgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0IGhhc0lucHV0KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEhdGhpcy5pbnB1dFZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXQgaGFzVmFsdWUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jYXNjYWRlclNlcnZpY2UudmFsdWVzICYmIHRoaXMuY2FzY2FkZXJTZXJ2aWNlLnZhbHVlcy5sZW5ndGggPiAwO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNob3dQbGFjZWhvbGRlcigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhKHRoaXMuaGFzSW5wdXQgfHwgdGhpcy5oYXNWYWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgY2xlYXJJY29uVmlzaWJsZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm56QWxsb3dDbGVhciAmJiAhdGhpcy5uekRpc2FibGVkICYmICh0aGlzLmhhc1ZhbHVlIHx8IHRoaXMuaGFzSW5wdXQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzTGFiZWxSZW5kZXJUZW1wbGF0ZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhIXRoaXMubnpMYWJlbFJlbmRlcjtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGNhc2NhZGVyU2VydmljZTogTnpDYXNjYWRlclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGkxOG5TZXJ2aWNlOiBOekkxOG5TZXJ2aWNlLFxyXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxuICApIHtcclxuICAgIHRoaXMuZWwgPSBlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB0aGlzLmNhc2NhZGVyU2VydmljZS53aXRoQ29tcG9uZW50KHRoaXMpO1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWNhc2NhZGVyJyk7XHJcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtY2FzY2FkZXItcGlja2VyJyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHNydiA9IHRoaXMuY2FzY2FkZXJTZXJ2aWNlO1xyXG5cclxuICAgIHNydi4kcmVkcmF3LnBpcGUodGFrZVVudGlsKHRoaXMuJGRlc3Ryb3kpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAvLyBUaGVzZSBvcGVyYXRpb25zIHdvdWxkIG5vdCBtdXRhdGUgZGF0YS5cclxuICAgICAgdGhpcy5jaGVja0NoaWxkcmVuKCk7XHJcbiAgICAgIHRoaXMuYnVpbGREaXNwbGF5TGFiZWwoKTtcclxuICAgICAgdGhpcy5yZXBvc2l0aW9uKCk7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgc3J2LiRsb2FkaW5nLnBpcGUodGFrZVVudGlsKHRoaXMuJGRlc3Ryb3kpKS5zdWJzY3JpYmUobG9hZGluZyA9PiB7XHJcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gbG9hZGluZztcclxuICAgIH0pO1xyXG5cclxuICAgIHNydi4kb3B0aW9uU2VsZWN0ZWQucGlwZSh0YWtlVW50aWwodGhpcy4kZGVzdHJveSkpLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgaWYgKCFkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZShbXSk7XHJcbiAgICAgICAgdGhpcy5uelNlbGVjdC5lbWl0KG51bGwpO1xyXG4gICAgICAgIHRoaXMubnpTZWxlY3Rpb25DaGFuZ2UuZW1pdChbXSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgeyBvcHRpb24sIGluZGV4IH0gPSBkYXRhO1xyXG4gICAgICAgIGNvbnN0IHNob3VsZENsb3NlID0gb3B0aW9uLmlzTGVhZjtcclxuICAgICAgICBpZiAoc2hvdWxkQ2xvc2UpIHtcclxuICAgICAgICAgIHRoaXMuZGVsYXlTZXRNZW51VmlzaWJsZShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub25DaGFuZ2UodGhpcy5jYXNjYWRlclNlcnZpY2UudmFsdWVzKTtcclxuICAgICAgICB0aGlzLm56U2VsZWN0aW9uQ2hhbmdlLmVtaXQodGhpcy5jYXNjYWRlclNlcnZpY2Uuc2VsZWN0ZWRPcHRpb25zKTtcclxuICAgICAgICB0aGlzLm56U2VsZWN0LmVtaXQoeyBvcHRpb24sIGluZGV4IH0pO1xyXG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBzcnYuJHF1aXRTZWFyY2hpbmcucGlwZSh0YWtlVW50aWwodGhpcy4kZGVzdHJveSkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuaW5wdXRTdHJpbmcgPSAnJztcclxuICAgICAgdGhpcy5kcm9wZG93bldpZHRoU3R5bGUgPSAnJztcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuaTE4blNlcnZpY2UubG9jYWxlQ2hhbmdlLnBpcGUoc3RhcnRXaXRoKCksIHRha2VVbnRpbCh0aGlzLiRkZXN0cm95KSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5zZXRMb2NhbGUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMubnpDb25maWdTZXJ2aWNlXHJcbiAgICAgIC5nZXRDb25maWdDaGFuZ2VFdmVudEZvckNvbXBvbmVudChOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLiRkZXN0cm95KSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGlmICh0aGlzLm56U2VsZWN0Lm9ic2VydmVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHdhcm5EZXByZWNhdGlvbihgbnpTZWxlY3QgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIDkuMC4wLiBQbGVhc2UgdXNlICduelNlbGVjdGlvbkNoYW5nZScgaW5zdGVhZC5gKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy4kZGVzdHJveS5uZXh0KCk7XHJcbiAgICB0aGlzLiRkZXN0cm95LmNvbXBsZXRlKCk7XHJcbiAgICB0aGlzLmNsZWFyRGVsYXlNZW51VGltZXIoKTtcclxuICAgIHRoaXMuY2xlYXJEZWxheVNlbGVjdFRpbWVyKCk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5jYXNjYWRlclNlcnZpY2UudmFsdWVzID0gdG9BcnJheSh2YWx1ZSk7XHJcbiAgICB0aGlzLmNhc2NhZGVyU2VydmljZS5zeW5jT3B0aW9ucyh0cnVlKTtcclxuICB9XHJcblxyXG4gIGRlbGF5U2V0TWVudVZpc2libGUodmlzaWJsZTogYm9vbGVhbiwgZGVsYXk6IG51bWJlciA9IDEwMCwgc2V0T3BlbmluZzogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsZWFyRGVsYXlNZW51VGltZXIoKTtcclxuICAgIGlmIChkZWxheSkge1xyXG4gICAgICBpZiAodmlzaWJsZSAmJiBzZXRPcGVuaW5nKSB7XHJcbiAgICAgICAgdGhpcy5pc09wZW5pbmcgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZGVsYXlNZW51VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLnNldE1lbnVWaXNpYmxlKHZpc2libGUpO1xyXG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICB0aGlzLmNsZWFyRGVsYXlNZW51VGltZXIoKTtcclxuICAgICAgICBpZiAodmlzaWJsZSkge1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgZGVsYXkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRNZW51VmlzaWJsZSh2aXNpYmxlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldE1lbnVWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56RGlzYWJsZWQgfHwgdGhpcy5tZW51VmlzaWJsZSA9PT0gdmlzaWJsZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodmlzaWJsZSkge1xyXG4gICAgICB0aGlzLmNhc2NhZGVyU2VydmljZS5zeW5jT3B0aW9ucygpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubWVudVZpc2libGUgPSB2aXNpYmxlO1xyXG4gICAgdGhpcy5uelZpc2libGVDaGFuZ2UuZW1pdCh2aXNpYmxlKTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xlYXJEZWxheU1lbnVUaW1lcigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRlbGF5TWVudVRpbWVyKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRlbGF5TWVudVRpbWVyKTtcclxuICAgICAgdGhpcy5kZWxheU1lbnVUaW1lciA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbGVhclNlbGVjdGlvbihldmVudD86IEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoZXZlbnQpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5sYWJlbFJlbmRlclRleHQgPSAnJztcclxuICAgIHRoaXMubGFiZWxSZW5kZXJDb250ZXh0ID0ge307XHJcbiAgICB0aGlzLmlucHV0VmFsdWUgPSAnJztcclxuICAgIHRoaXMuc2V0TWVudVZpc2libGUoZmFsc2UpO1xyXG4gICAgdGhpcy5jYXNjYWRlclNlcnZpY2UuY2xlYXIoKTtcclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBnZXRTdWJtaXRWYWx1ZSgpOiBhbnlbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5jYXNjYWRlclNlcnZpY2Uuc2VsZWN0ZWRPcHRpb25zLm1hcChvID0+IHRoaXMuY2FzY2FkZXJTZXJ2aWNlLmdldE9wdGlvblZhbHVlKG8pKTtcclxuICB9XHJcblxyXG4gIGZvY3VzKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmlzRm9jdXNlZCkge1xyXG4gICAgICAodGhpcy5pbnB1dCA/IHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCA6IHRoaXMuZWwpLmZvY3VzKCk7XHJcbiAgICAgIHRoaXMuaXNGb2N1c2VkID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGJsdXIoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc0ZvY3VzZWQpIHtcclxuICAgICAgKHRoaXMuaW5wdXQgPyB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQgOiB0aGlzLmVsKS5ibHVyKCk7XHJcbiAgICAgIHRoaXMuaXNGb2N1c2VkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVJbnB1dEJsdXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLm1lbnVWaXNpYmxlID8gdGhpcy5mb2N1cygpIDogdGhpcy5ibHVyKCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVJbnB1dEZvY3VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXHJcbiAgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCBrZXlDb2RlID0gZXZlbnQua2V5Q29kZTtcclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIGtleUNvZGUgIT09IERPV05fQVJST1cgJiZcclxuICAgICAga2V5Q29kZSAhPT0gVVBfQVJST1cgJiZcclxuICAgICAga2V5Q29kZSAhPT0gTEVGVF9BUlJPVyAmJlxyXG4gICAgICBrZXlDb2RlICE9PSBSSUdIVF9BUlJPVyAmJlxyXG4gICAgICBrZXlDb2RlICE9PSBFTlRFUiAmJlxyXG4gICAgICBrZXlDb2RlICE9PSBCQUNLU1BBQ0UgJiZcclxuICAgICAga2V5Q29kZSAhPT0gRVNDQVBFXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFByZXNzIGFueSBrZXlzIGFib3ZlIHRvIHJlb3BlbiBtZW51LlxyXG4gICAgaWYgKCF0aGlzLm1lbnVWaXNpYmxlICYmIGtleUNvZGUgIT09IEJBQ0tTUEFDRSAmJiBrZXlDb2RlICE9PSBFU0NBUEUpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc2V0TWVudVZpc2libGUodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWFrZSB0aGVzZSBrZXlzIHdvcmsgYXMgZGVmYXVsdCBpbiBzZWFyY2hpbmcgbW9kZS5cclxuICAgIGlmICh0aGlzLmluU2VhcmNoaW5nTW9kZSAmJiAoa2V5Q29kZSA9PT0gQkFDS1NQQUNFIHx8IGtleUNvZGUgPT09IExFRlRfQVJST1cgfHwga2V5Q29kZSA9PT0gUklHSFRfQVJST1cpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBJbnRlcmFjdCB3aXRoIHRoZSBjb21wb25lbnQuXHJcbiAgICBpZiAodGhpcy5tZW51VmlzaWJsZSkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBpZiAoa2V5Q29kZSA9PT0gRE9XTl9BUlJPVykge1xyXG4gICAgICAgIHRoaXMubW92ZVVwT3JEb3duKGZhbHNlKTtcclxuICAgICAgfSBlbHNlIGlmIChrZXlDb2RlID09PSBVUF9BUlJPVykge1xyXG4gICAgICAgIHRoaXMubW92ZVVwT3JEb3duKHRydWUpO1xyXG4gICAgICB9IGVsc2UgaWYgKGtleUNvZGUgPT09IExFRlRfQVJST1cpIHtcclxuICAgICAgICB0aGlzLm1vdmVMZWZ0KCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gUklHSFRfQVJST1cpIHtcclxuICAgICAgICB0aGlzLm1vdmVSaWdodCgpO1xyXG4gICAgICB9IGVsc2UgaWYgKGtleUNvZGUgPT09IEVOVEVSKSB7XHJcbiAgICAgICAgdGhpcy5vbkVudGVyKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcclxuICBvblRyaWdnZXJDbGljaygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56RGlzYWJsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubnpTaG93U2VhcmNoKSB7XHJcbiAgICAgIHRoaXMuZm9jdXMoKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmlzQWN0aW9uVHJpZ2dlcignY2xpY2snKSkge1xyXG4gICAgICB0aGlzLmRlbGF5U2V0TWVudVZpc2libGUoIXRoaXMubWVudVZpc2libGUsIDEwMCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicpXHJcbiAgb25UcmlnZ2VyTW91c2VFbnRlcigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56RGlzYWJsZWQgfHwgIXRoaXMuaXNBY3Rpb25UcmlnZ2VyKCdob3ZlcicpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRlbGF5U2V0TWVudVZpc2libGUodHJ1ZSwgdGhpcy5uek1vdXNlRW50ZXJEZWxheSwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJywgWyckZXZlbnQnXSlcclxuICBvblRyaWdnZXJNb3VzZUxlYXZlKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uekRpc2FibGVkIHx8ICF0aGlzLm1lbnVWaXNpYmxlIHx8IHRoaXMuaXNPcGVuaW5nIHx8ICF0aGlzLmlzQWN0aW9uVHJpZ2dlcignaG92ZXInKSkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBtb3VzZVRhcmdldCA9IGV2ZW50LnJlbGF0ZWRUYXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBjb25zdCBob3N0RWwgPSB0aGlzLmVsO1xyXG4gICAgY29uc3QgbWVudUVsID0gdGhpcy5tZW51ICYmICh0aGlzLm1lbnUubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCk7XHJcbiAgICBpZiAoaG9zdEVsLmNvbnRhaW5zKG1vdXNlVGFyZ2V0KSB8fCAobWVudUVsICYmIG1lbnVFbC5jb250YWlucyhtb3VzZVRhcmdldCkpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuZGVsYXlTZXRNZW51VmlzaWJsZShmYWxzZSwgdGhpcy5uek1vdXNlTGVhdmVEZWxheSk7XHJcbiAgfVxyXG5cclxuICBvbk9wdGlvbk1vdXNlRW50ZXIob3B0aW9uOiBOekNhc2NhZGVyT3B0aW9uLCBjb2x1bW5JbmRleDogbnVtYmVyLCBldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAodGhpcy5uekV4cGFuZFRyaWdnZXIgPT09ICdob3ZlcicpIHtcclxuICAgICAgaWYgKCFvcHRpb24uaXNMZWFmKSB7XHJcbiAgICAgICAgdGhpcy5kZWxheVNldE9wdGlvbkFjdGl2YXRlZChvcHRpb24sIGNvbHVtbkluZGV4LCBmYWxzZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jYXNjYWRlclNlcnZpY2Uuc2V0T3B0aW9uRGVhY3RpdmF0ZWRTaW5jZUNvbHVtbihjb2x1bW5JbmRleCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uT3B0aW9uTW91c2VMZWF2ZShvcHRpb246IE56Q2FzY2FkZXJPcHRpb24sIF9jb2x1bW5JbmRleDogbnVtYmVyLCBldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAodGhpcy5uekV4cGFuZFRyaWdnZXIgPT09ICdob3ZlcicgJiYgIW9wdGlvbi5pc0xlYWYpIHtcclxuICAgICAgdGhpcy5jbGVhckRlbGF5U2VsZWN0VGltZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uT3B0aW9uQ2xpY2sob3B0aW9uOiBOekNhc2NhZGVyT3B0aW9uLCBjb2x1bW5JbmRleDogbnVtYmVyLCBldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChldmVudCkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKG9wdGlvbiAmJiBvcHRpb24uZGlzYWJsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5lbC5mb2N1cygpO1xyXG4gICAgdGhpcy5pblNlYXJjaGluZ01vZGVcclxuICAgICAgPyB0aGlzLmNhc2NhZGVyU2VydmljZS5zZXRTZWFyY2hPcHRpb25TZWxlY3RlZChvcHRpb24gYXMgTnpDYXNjYWRlclNlYXJjaE9wdGlvbilcclxuICAgICAgOiB0aGlzLmNhc2NhZGVyU2VydmljZS5zZXRPcHRpb25BY3RpdmF0ZWQob3B0aW9uLCBjb2x1bW5JbmRleCwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzQWN0aW9uVHJpZ2dlcihhY3Rpb246ICdjbGljaycgfCAnaG92ZXInKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMubnpUcmlnZ2VyQWN0aW9uID09PSAnc3RyaW5nJyA/IHRoaXMubnpUcmlnZ2VyQWN0aW9uID09PSBhY3Rpb24gOiB0aGlzLm56VHJpZ2dlckFjdGlvbi5pbmRleE9mKGFjdGlvbikgIT09IC0xO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkVudGVyKCk6IHZvaWQge1xyXG4gICAgY29uc3QgY29sdW1uSW5kZXggPSBNYXRoLm1heCh0aGlzLmNhc2NhZGVyU2VydmljZS5hY3RpdmF0ZWRPcHRpb25zLmxlbmd0aCAtIDEsIDApO1xyXG4gICAgY29uc3Qgb3B0aW9uID0gdGhpcy5jYXNjYWRlclNlcnZpY2UuYWN0aXZhdGVkT3B0aW9uc1tjb2x1bW5JbmRleF07XHJcbiAgICBpZiAob3B0aW9uICYmICFvcHRpb24uZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5pblNlYXJjaGluZ01vZGVcclxuICAgICAgICA/IHRoaXMuY2FzY2FkZXJTZXJ2aWNlLnNldFNlYXJjaE9wdGlvblNlbGVjdGVkKG9wdGlvbiBhcyBOekNhc2NhZGVyU2VhcmNoT3B0aW9uKVxyXG4gICAgICAgIDogdGhpcy5jYXNjYWRlclNlcnZpY2Uuc2V0T3B0aW9uQWN0aXZhdGVkKG9wdGlvbiwgY29sdW1uSW5kZXgsIHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtb3ZlVXBPckRvd24oaXNVcDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgY29uc3QgY29sdW1uSW5kZXggPSBNYXRoLm1heCh0aGlzLmNhc2NhZGVyU2VydmljZS5hY3RpdmF0ZWRPcHRpb25zLmxlbmd0aCAtIDEsIDApO1xyXG4gICAgY29uc3QgYWN0aXZlT3B0aW9uID0gdGhpcy5jYXNjYWRlclNlcnZpY2UuYWN0aXZhdGVkT3B0aW9uc1tjb2x1bW5JbmRleF07XHJcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5jYXNjYWRlclNlcnZpY2UuY29sdW1uc1tjb2x1bW5JbmRleF0gfHwgW107XHJcbiAgICBjb25zdCBsZW5ndGggPSBvcHRpb25zLmxlbmd0aDtcclxuICAgIGxldCBuZXh0SW5kZXggPSAtMTtcclxuICAgIGlmICghYWN0aXZlT3B0aW9uKSB7XHJcbiAgICAgIC8vIE5vdCBzZWxlY3RlZCBvcHRpb25zIGluIHRoaXMgY29sdW1uXHJcbiAgICAgIG5leHRJbmRleCA9IGlzVXAgPyBsZW5ndGggOiAtMTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5leHRJbmRleCA9IG9wdGlvbnMuaW5kZXhPZihhY3RpdmVPcHRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgIG5leHRJbmRleCA9IGlzVXAgPyBuZXh0SW5kZXggLSAxIDogbmV4dEluZGV4ICsgMTtcclxuICAgICAgaWYgKG5leHRJbmRleCA8IDAgfHwgbmV4dEluZGV4ID49IGxlbmd0aCkge1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IG5leHRPcHRpb24gPSBvcHRpb25zW25leHRJbmRleF07XHJcbiAgICAgIGlmICghbmV4dE9wdGlvbiB8fCBuZXh0T3B0aW9uLmRpc2FibGVkKSB7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jYXNjYWRlclNlcnZpY2Uuc2V0T3B0aW9uQWN0aXZhdGVkKG5leHRPcHRpb24sIGNvbHVtbkluZGV4KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1vdmVMZWZ0KCk6IHZvaWQge1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuY2FzY2FkZXJTZXJ2aWNlLmFjdGl2YXRlZE9wdGlvbnM7XHJcbiAgICBpZiAob3B0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgb3B0aW9ucy5wb3AoKTsgLy8gUmVtb3ZlIHRoZSBsYXN0IG9uZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtb3ZlUmlnaHQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmNhc2NhZGVyU2VydmljZS5hY3RpdmF0ZWRPcHRpb25zLmxlbmd0aDtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmNhc2NhZGVyU2VydmljZS5jb2x1bW5zW2xlbmd0aF07XHJcbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmxlbmd0aCkge1xyXG4gICAgICBjb25zdCBuZXh0T3B0ID0gb3B0aW9ucy5maW5kKG8gPT4gIW8uZGlzYWJsZWQpO1xyXG4gICAgICBpZiAobmV4dE9wdCkge1xyXG4gICAgICAgIHRoaXMuY2FzY2FkZXJTZXJ2aWNlLnNldE9wdGlvbkFjdGl2YXRlZChuZXh0T3B0LCBsZW5ndGgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsZWFyRGVsYXlTZWxlY3RUaW1lcigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRlbGF5U2VsZWN0VGltZXIpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGVsYXlTZWxlY3RUaW1lcik7XHJcbiAgICAgIHRoaXMuZGVsYXlTZWxlY3RUaW1lciA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRlbGF5U2V0T3B0aW9uQWN0aXZhdGVkKG9wdGlvbjogTnpDYXNjYWRlck9wdGlvbiwgY29sdW1uSW5kZXg6IG51bWJlciwgcGVyZm9ybVNlbGVjdDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5jbGVhckRlbGF5U2VsZWN0VGltZXIoKTtcclxuICAgIHRoaXMuZGVsYXlTZWxlY3RUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNhc2NhZGVyU2VydmljZS5zZXRPcHRpb25BY3RpdmF0ZWQob3B0aW9uLCBjb2x1bW5JbmRleCwgcGVyZm9ybVNlbGVjdCk7XHJcbiAgICAgIHRoaXMuZGVsYXlTZWxlY3RUaW1lciA9IG51bGw7XHJcbiAgICB9LCAxNTApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0b2dnbGVTZWFyY2hpbmdNb2RlKHRvU2VhcmNoaW5nOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pblNlYXJjaGluZ01vZGUgIT09IHRvU2VhcmNoaW5nKSB7XHJcbiAgICAgIHRoaXMuY2FzY2FkZXJTZXJ2aWNlLnRvZ2dsZVNlYXJjaGluZ01vZGUodG9TZWFyY2hpbmcpO1xyXG4gICAgICB0aGlzLmRyb3Bkb3duV2lkdGhTdHlsZSA9IHRvU2VhcmNoaW5nID8gYCR7dGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRofXB4YCA6ICcnO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaW5TZWFyY2hpbmdNb2RlKSB7XHJcbiAgICAgIHRoaXMuY2FzY2FkZXJTZXJ2aWNlLnByZXBhcmVTZWFyY2hPcHRpb25zKHRoaXMuaW5wdXRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc09wdGlvbkFjdGl2YXRlZChvcHRpb246IE56Q2FzY2FkZXJPcHRpb24sIGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGFjdGl2ZU9wdCA9IHRoaXMuY2FzY2FkZXJTZXJ2aWNlLmFjdGl2YXRlZE9wdGlvbnNbaW5kZXhdO1xyXG4gICAgcmV0dXJuIGFjdGl2ZU9wdCA9PT0gb3B0aW9uO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAoaXNEaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLmNsb3NlTWVudSgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5uekRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIGNsb3NlTWVudSgpOiB2b2lkIHtcclxuICAgIHRoaXMuYmx1cigpO1xyXG4gICAgdGhpcy5jbGVhckRlbGF5TWVudVRpbWVyKCk7XHJcbiAgICB0aGlzLnNldE1lbnVWaXNpYmxlKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIG9uUG9zaXRpb25DaGFuZ2UocG9zaXRpb246IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSk6IHZvaWQge1xyXG4gICAgY29uc3QgbmV3VmFsdWUgPSBwb3NpdGlvbi5jb25uZWN0aW9uUGFpci5vcmlnaW5ZID09PSAnYm90dG9tJyA/ICdib3R0b20nIDogJ3RvcCc7XHJcbiAgICBpZiAodGhpcy5kcm9wRG93blBvc2l0aW9uICE9PSBuZXdWYWx1ZSkge1xyXG4gICAgICB0aGlzLmRyb3BEb3duUG9zaXRpb24gPSBuZXdWYWx1ZTtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVwb3NpdGlvbiB0aGUgY2FzY2FkZXIgcGFuZWwuIFdoZW4gYSBtZW51IG9wZW5zLCB0aGUgY2FzY2FkZXIgZXhwYW5kc1xyXG4gICAqIGFuZCBtYXkgZXhjZWVkIHRoZSBib3VuZGFyeSBvZiBicm93c2VyJ3Mgd2luZG93LlxyXG4gICAqL1xyXG4gIHByaXZhdGUgcmVwb3NpdGlvbigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm92ZXJsYXkgJiYgdGhpcy5vdmVybGF5Lm92ZXJsYXlSZWYgJiYgdGhpcy5tZW51VmlzaWJsZSkge1xyXG4gICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLm92ZXJsYXkub3ZlcmxheVJlZi51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFdoZW4gYSBjYXNjYWRlciBvcHRpb25zIGlzIGNoYW5nZWQsIGEgY2hpbGQgbmVlZHMgdG8ga25vdyB0aGF0IGl0IHNob3VsZCByZS1yZW5kZXIuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBjaGVja0NoaWxkcmVuKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuY2FzY2FkZXJJdGVtcykge1xyXG4gICAgICB0aGlzLmNhc2NhZGVySXRlbXMuZm9yRWFjaChpdGVtID0+IGl0ZW0ubWFya0ZvckNoZWNrKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBidWlsZERpc3BsYXlMYWJlbCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9ucyA9IHRoaXMuY2FzY2FkZXJTZXJ2aWNlLnNlbGVjdGVkT3B0aW9ucztcclxuICAgIGNvbnN0IGxhYmVsczogc3RyaW5nW10gPSBzZWxlY3RlZE9wdGlvbnMubWFwKG8gPT4gdGhpcy5jYXNjYWRlclNlcnZpY2UuZ2V0T3B0aW9uTGFiZWwobykpO1xyXG5cclxuICAgIGlmICh0aGlzLmlzTGFiZWxSZW5kZXJUZW1wbGF0ZSkge1xyXG4gICAgICB0aGlzLmxhYmVsUmVuZGVyQ29udGV4dCA9IHsgbGFiZWxzLCBzZWxlY3RlZE9wdGlvbnMgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubGFiZWxSZW5kZXJUZXh0ID0gZGVmYXVsdERpc3BsYXlSZW5kZXIuY2FsbCh0aGlzLCBsYWJlbHMsIHNlbGVjdGVkT3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldExvY2FsZSgpOiB2b2lkIHtcclxuICAgIHRoaXMubG9jYWxlID0gdGhpcy5pMThuU2VydmljZS5nZXRMb2NhbGVEYXRhKCdnbG9iYWwnKTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNka092ZXJsYXlPcmlnaW4gI29yaWdpbj1cImNka092ZXJsYXlPcmlnaW5cIiAjdHJpZ2dlcj5cclxuICA8ZGl2ICpuZ0lmPVwibnpTaG93SW5wdXRcIj5cclxuICAgIDxpbnB1dFxyXG4gICAgICAjaW5wdXRcclxuICAgICAgbnotaW5wdXRcclxuICAgICAgY2xhc3M9XCJhbnQtY2FzY2FkZXItaW5wdXRcIlxyXG4gICAgICBbY2xhc3MuYW50LWNhc2NhZGVyLWlucHV0LWRpc2FibGVkXT1cIm56RGlzYWJsZWRcIlxyXG4gICAgICBbY2xhc3MuYW50LWNhc2NhZGVyLWlucHV0LWxnXT1cIm56U2l6ZSA9PT0gJ2xhcmdlJ1wiXHJcbiAgICAgIFtjbGFzcy5hbnQtY2FzY2FkZXItaW5wdXQtc21dPVwibnpTaXplID09PSAnc21hbGwnXCJcclxuICAgICAgW2F0dHIuYXV0b0NvbXBsZXRlXT1cIidvZmYnXCJcclxuICAgICAgW2F0dHIucGxhY2Vob2xkZXJdPVwic2hvd1BsYWNlaG9sZGVyID8gbnpQbGFjZUhvbGRlciB8fCBsb2NhbGU/LnBsYWNlaG9sZGVyIDogbnVsbFwiXHJcbiAgICAgIFthdHRyLmF1dG9mb2N1c109XCJuekF1dG9Gb2N1cyA/ICdhdXRvZm9jdXMnIDogbnVsbFwiXHJcbiAgICAgIFtyZWFkb25seV09XCIhbnpTaG93U2VhcmNoXCJcclxuICAgICAgW2Rpc2FibGVkXT1cIm56RGlzYWJsZWRcIlxyXG4gICAgICBbbnpTaXplXT1cIm56U2l6ZVwiXHJcbiAgICAgIFsobmdNb2RlbCldPVwiaW5wdXRWYWx1ZVwiXHJcbiAgICAgIChibHVyKT1cImhhbmRsZUlucHV0Qmx1cigpXCJcclxuICAgICAgKGZvY3VzKT1cImhhbmRsZUlucHV0Rm9jdXMoKVwiXHJcbiAgICAgIChjaGFuZ2UpPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCJcclxuICAgIC8+XHJcbiAgICA8aVxyXG4gICAgICAqbmdJZj1cImNsZWFySWNvblZpc2libGVcIlxyXG4gICAgICBuei1pY29uXHJcbiAgICAgIG56VHlwZT1cImNsb3NlLWNpcmNsZVwiXHJcbiAgICAgIG56VGhlbWU9XCJmaWxsXCJcclxuICAgICAgY2xhc3M9XCJhbnQtY2FzY2FkZXItcGlja2VyLWNsZWFyXCJcclxuICAgICAgKGNsaWNrKT1cImNsZWFyU2VsZWN0aW9uKCRldmVudClcIlxyXG4gICAgPjwvaT5cclxuICAgIDxpXHJcbiAgICAgICpuZ0lmPVwibnpTaG93QXJyb3cgJiYgIWlzTG9hZGluZ1wiXHJcbiAgICAgIG56LWljb25cclxuICAgICAgbnpUeXBlPVwiZG93blwiXHJcbiAgICAgIGNsYXNzPVwiYW50LWNhc2NhZGVyLXBpY2tlci1hcnJvd1wiXHJcbiAgICAgIFtjbGFzcy5hbnQtY2FzY2FkZXItcGlja2VyLWFycm93LWV4cGFuZF09XCJtZW51VmlzaWJsZVwiXHJcbiAgICA+XHJcbiAgICA8L2k+XHJcbiAgICA8aSAqbmdJZj1cImlzTG9hZGluZ1wiIG56LWljb24gbnpUeXBlPVwibG9hZGluZ1wiIGNsYXNzPVwiYW50LWNhc2NhZGVyLXBpY2tlci1hcnJvd1wiPjwvaT5cclxuICAgIDxzcGFuXHJcbiAgICAgIGNsYXNzPVwiYW50LWNhc2NhZGVyLXBpY2tlci1sYWJlbFwiXHJcbiAgICAgIFtjbGFzcy5hbnQtY2FzY2FkZXItc2hvdy1zZWFyY2hdPVwiISFuelNob3dTZWFyY2hcIlxyXG4gICAgICBbY2xhc3MuYW50LWZvY3VzZF09XCIhIW56U2hvd1NlYXJjaCAmJiBpc0ZvY3VzZWQgJiYgIWlucHV0VmFsdWVcIlxyXG4gICAgPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWlzTGFiZWxSZW5kZXJUZW1wbGF0ZTsgZWxzZSBsYWJlbFRlbXBsYXRlXCI+e3tcclxuICAgICAgICBsYWJlbFJlbmRlclRleHRcclxuICAgICAgfX08L25nLWNvbnRhaW5lcj5cclxuICAgICAgPG5nLXRlbXBsYXRlICNsYWJlbFRlbXBsYXRlPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZVxyXG4gICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwibnpMYWJlbFJlbmRlclwiXHJcbiAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwibGFiZWxSZW5kZXJDb250ZXh0XCJcclxuICAgICAgICA+PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgIDwvc3Bhbj5cclxuICA8L2Rpdj5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvZGl2PlxyXG48bmctdGVtcGxhdGVcclxuICBjZGtDb25uZWN0ZWRPdmVybGF5XHJcbiAgbnpDb25uZWN0ZWRPdmVybGF5XHJcbiAgY2RrQ29ubmVjdGVkT3ZlcmxheUhhc0JhY2tkcm9wXHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcmlnaW5dPVwib3JpZ2luXCJcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uc109XCJwb3NpdGlvbnNcIlxyXG4gIChiYWNrZHJvcENsaWNrKT1cImNsb3NlTWVudSgpXCJcclxuICAoZGV0YWNoKT1cImNsb3NlTWVudSgpXCJcclxuICAocG9zaXRpb25DaGFuZ2UpPVwib25Qb3NpdGlvbkNoYW5nZSgkZXZlbnQpXCJcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9wZW5dPVwibWVudVZpc2libGVcIlxyXG4+XHJcbiAgPGRpdlxyXG4gICAgI21lbnVcclxuICAgIGNsYXNzPVwiYW50LWNhc2NhZGVyLW1lbnVzXCJcclxuICAgICpuZ0lmPVwiKG56T3B0aW9ucyAmJiBuek9wdGlvbnMubGVuZ3RoKSB8fCBpblNlYXJjaGluZ01vZGVcIlxyXG4gICAgW2NsYXNzLmFudC1jYXNjYWRlci1tZW51cy1oaWRkZW5dPVwiIW1lbnVWaXNpYmxlXCJcclxuICAgIFtuZ0NsYXNzXT1cIm1lbnVDbHNcIlxyXG4gICAgW25nU3R5bGVdPVwibnpNZW51U3R5bGVcIlxyXG4gICAgW0AuZGlzYWJsZWRdPVwibm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIlxyXG4gICAgW256Tm9BbmltYXRpb25dPVwibm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIlxyXG4gICAgW0BzbGlkZU1vdGlvbl09XCJkcm9wRG93blBvc2l0aW9uXCJcclxuICAgIChtb3VzZWxlYXZlKT1cIm9uVHJpZ2dlck1vdXNlTGVhdmUoJGV2ZW50KVwiXHJcbiAgPlxyXG4gICAgPHVsXHJcbiAgICAgICpuZ0Zvcj1cImxldCBvcHRpb25zIG9mIGNhc2NhZGVyU2VydmljZS5jb2x1bW5zOyBsZXQgaSA9IGluZGV4XCJcclxuICAgICAgY2xhc3M9XCJhbnQtY2FzY2FkZXItbWVudVwiXHJcbiAgICAgIFtuZ0NsYXNzXT1cIm1lbnVDb2x1bW5DbHNcIlxyXG4gICAgICBbc3R5bGUuaGVpZ2h0XT1cImluU2VhcmNoaW5nTW9kZSAmJiAhY2FzY2FkZXJTZXJ2aWNlLmNvbHVtbnNbMF0ubGVuZ3RoID8gJ2F1dG8nIDogJydcIlxyXG4gICAgICBbc3R5bGUud2lkdGhdPVwiZHJvcGRvd25XaWR0aFN0eWxlXCJcclxuICAgID5cclxuICAgICAgPGxpXHJcbiAgICAgICAgbnotY2FzY2FkZXItb3B0aW9uXHJcbiAgICAgICAgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBvcHRpb25zXCJcclxuICAgICAgICBbY29sdW1uSW5kZXhdPVwiaVwiXHJcbiAgICAgICAgW256TGFiZWxQcm9wZXJ0eV09XCJuekxhYmVsUHJvcGVydHlcIlxyXG4gICAgICAgIFtvcHRpb25UZW1wbGF0ZV09XCJuek9wdGlvblJlbmRlclwiXHJcbiAgICAgICAgW2FjdGl2YXRlZF09XCJpc09wdGlvbkFjdGl2YXRlZChvcHRpb24sIGkpXCJcclxuICAgICAgICBbaGlnaGxpZ2h0VGV4dF09XCJpblNlYXJjaGluZ01vZGUgPyBpbnB1dFZhbHVlIDogJydcIlxyXG4gICAgICAgIFtvcHRpb25dPVwib3B0aW9uXCJcclxuICAgICAgICAobW91c2VlbnRlcik9XCJvbk9wdGlvbk1vdXNlRW50ZXIob3B0aW9uLCBpLCAkZXZlbnQpXCJcclxuICAgICAgICAobW91c2VsZWF2ZSk9XCJvbk9wdGlvbk1vdXNlTGVhdmUob3B0aW9uLCBpLCAkZXZlbnQpXCJcclxuICAgICAgICAoY2xpY2spPVwib25PcHRpb25DbGljayhvcHRpb24sIGksICRldmVudClcIlxyXG4gICAgICA+PC9saT5cclxuICAgICAgPGxpXHJcbiAgICAgICAgKm5nSWY9XCJpblNlYXJjaGluZ01vZGUgJiYgIWNhc2NhZGVyU2VydmljZS5jb2x1bW5zWzBdLmxlbmd0aFwiXHJcbiAgICAgICAgY2xhc3M9XCJhbnQtY2FzY2FkZXItbWVudS1pdGVtIGFudC1jYXNjYWRlci1tZW51LWl0ZW0tZXhwYW5kZWQgYW50LWNhc2NhZGVyLW1lbnUtaXRlbS1kaXNhYmxlZFwiXHJcbiAgICAgID5cclxuICAgICAgICA8bnotZW1iZWQtZW1wdHlcclxuICAgICAgICAgIFtuekNvbXBvbmVudE5hbWVdPVwiJ2Nhc2NhZGVyJ1wiXHJcbiAgICAgICAgICBbc3BlY2lmaWNDb250ZW50XT1cIm56Tm90Rm91bmRDb250ZW50XCJcclxuICAgICAgICA+PC9uei1lbWJlZC1lbXB0eT5cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcbiAgPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==