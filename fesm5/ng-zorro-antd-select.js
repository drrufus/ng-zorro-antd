import { ɵɵprojection, ɵɵdefineComponent, ɵɵviewQuery, TemplateRef, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵNgOnChangesFeature, ɵɵprojectionDef, ɵɵtemplate, ɵsetClassMetadata, Component, ViewEncapsulation, ChangeDetectionStrategy, ViewChild, Input, ɵɵcontentQuery, ContentChildren, ɵɵdefinePipe, Pipe, ɵɵdefineInjectable, Injectable, ɵɵelementContainerStart, ɵɵtext, ɵɵelementContainerEnd, ɵɵnextContext, ɵɵadvance, ɵɵtextInterpolate1, ɵɵelement, ɵɵproperty, ɵɵdirectiveInject, ElementRef, ChangeDetectorRef, Renderer2, ɵɵallocHostVars, ɵɵlistener, ɵɵattribute, ɵɵstyleProp, ɵɵclassProp, ɵɵdefineDirective, Directive, ɵɵelementStart, ɵɵelementEnd, ɵɵpipe, ɵɵpipeBind4, EventEmitter, NgZone, ɵɵstaticViewQuery, ViewChildren, Output, ɵɵgetCurrentView, ɵɵrestoreView, ɵɵtextInterpolate, ɵɵpureFunction1, ɵɵreference, ɵɵpipeBind2, ɵɵpipeBind3, ɵɵtemplateRefExtractor, Host, Optional, ɵɵProvidersFeature, forwardRef, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { __decorate, __metadata, __read, __spread } from 'tslib';
import { InputBoolean, isNotNil, isNil, NzStringTemplateOutletDirective, NzNoAnimationDirective, zoomMotion, toBoolean, NzConnectedOverlayDirective, NzClassListAddDirective, slideMotion, NzAddOnModule, NzOverlayModule, NzNoAnimationModule } from 'ng-zorro-antd/core';
import { Subject, BehaviorSubject, ReplaySubject, combineLatest, merge, fromEvent, EMPTY } from 'rxjs';
import { distinctUntilChanged, map, filter, skip, share, tap, takeUntil, pairwise, startWith, flatMap } from 'rxjs/operators';
import { TAB, SPACE, BACKSPACE, ENTER, DOWN_ARROW, UP_ARROW } from '@angular/cdk/keycodes';
import { NgIf, NgForOf, NgStyle, NgTemplateOutlet, SlicePipe, CommonModule } from '@angular/common';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { NzEmbedEmptyComponent, NzEmptyModule } from 'ng-zorro-antd/empty';
import { CdkOverlayOrigin, CdkConnectedOverlay, OverlayModule } from '@angular/cdk/overlay';
import { Platform, PlatformModule } from '@angular/cdk/platform';
import { DefaultValueAccessor, NgControlStatus, NgModel, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { NzI18nModule } from 'ng-zorro-antd/i18n';

function NzOptionComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵprojection(0);
} }
var _c0 = ["*"];
var NzOptionComponent = /** @class */ (function () {
    function NzOptionComponent() {
        this.changes = new Subject();
        this.nzDisabled = false;
        this.nzHide = false;
        this.nzCustomContent = false;
    }
    NzOptionComponent.prototype.ngOnChanges = function () {
        this.changes.next();
    };
    /** @nocollapse */ NzOptionComponent.ɵfac = function NzOptionComponent_Factory(t) { return new (t || NzOptionComponent)(); };
    /** @nocollapse */ NzOptionComponent.ɵcmp = ɵɵdefineComponent({ type: NzOptionComponent, selectors: [["nz-option"]], viewQuery: function NzOptionComponent_Query(rf, ctx) { if (rf & 1) {
            ɵɵviewQuery(TemplateRef, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t.first);
        } }, inputs: { nzLabel: "nzLabel", nzValue: "nzValue", nzDisabled: "nzDisabled", nzHide: "nzHide", nzCustomContent: "nzCustomContent" }, exportAs: ["nzOption"], features: [ɵɵNgOnChangesFeature()], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzOptionComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵtemplate(0, NzOptionComponent_ng_template_0_Template, 1, 0, "ng-template");
        } }, encapsulation: 2, changeDetection: 0 });
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzOptionComponent.prototype, "nzDisabled", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzOptionComponent.prototype, "nzHide", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzOptionComponent.prototype, "nzCustomContent", void 0);
    return NzOptionComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzOptionComponent, [{
        type: Component,
        args: [{
                selector: 'nz-option',
                exportAs: 'nzOption',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                templateUrl: './nz-option.component.html'
            }]
    }], null, { template: [{
            type: ViewChild,
            args: [TemplateRef, { static: false }]
        }], nzLabel: [{
            type: Input
        }], nzValue: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }], nzHide: [{
            type: Input
        }], nzCustomContent: [{
            type: Input
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var _c0$1 = ["*"];
var NzOptionGroupComponent = /** @class */ (function () {
    function NzOptionGroupComponent() {
        this.isLabelString = false;
    }
    Object.defineProperty(NzOptionGroupComponent.prototype, "nzLabel", {
        get: function () {
            return this.label;
        },
        set: function (value) {
            this.label = value;
            this.isLabelString = !(this.nzLabel instanceof TemplateRef);
        },
        enumerable: true,
        configurable: true
    });
    /** @nocollapse */ NzOptionGroupComponent.ɵfac = function NzOptionGroupComponent_Factory(t) { return new (t || NzOptionGroupComponent)(); };
    /** @nocollapse */ NzOptionGroupComponent.ɵcmp = ɵɵdefineComponent({ type: NzOptionGroupComponent, selectors: [["nz-option-group"]], contentQueries: function NzOptionGroupComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            ɵɵcontentQuery(dirIndex, NzOptionComponent, false);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfNzOptionComponent = _t);
        } }, inputs: { nzLabel: "nzLabel" }, exportAs: ["nzOptionGroup"], ngContentSelectors: _c0$1, decls: 1, vars: 0, template: function NzOptionGroupComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    return NzOptionGroupComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzOptionGroupComponent, [{
        type: Component,
        args: [{
                selector: 'nz-option-group',
                exportAs: 'nzOptionGroup',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                templateUrl: './nz-option-group.component.html'
            }]
    }], null, { listOfNzOptionComponent: [{
            type: ContentChildren,
            args: [NzOptionComponent]
        }], nzLabel: [{
            type: Input
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzFilterOptionPipe = /** @class */ (function () {
    function NzFilterOptionPipe() {
    }
    NzFilterOptionPipe.prototype.transform = function (options, searchValue, filterOption, serverSearch) {
        if (serverSearch || !searchValue) {
            return options;
        }
        else {
            return options.filter(function (o) { return filterOption(searchValue, o); });
        }
    };
    /** @nocollapse */ NzFilterOptionPipe.ɵfac = function NzFilterOptionPipe_Factory(t) { return new (t || NzFilterOptionPipe)(); };
    /** @nocollapse */ NzFilterOptionPipe.ɵpipe = ɵɵdefinePipe({ name: "nzFilterOption", type: NzFilterOptionPipe, pure: true });
    return NzFilterOptionPipe;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzFilterOptionPipe, [{
        type: Pipe,
        args: [{ name: 'nzFilterOption' }]
    }], null, null); })();
var NzFilterGroupOptionPipe = /** @class */ (function () {
    function NzFilterGroupOptionPipe() {
    }
    NzFilterGroupOptionPipe.prototype.transform = function (groups, searchValue, filterOption, serverSearch) {
        if (serverSearch || !searchValue) {
            return groups;
        }
        else {
            return groups.filter(function (g) {
                return g.listOfNzOptionComponent.some(function (o) { return filterOption(searchValue, o); });
            });
        }
    };
    /** @nocollapse */ NzFilterGroupOptionPipe.ɵfac = function NzFilterGroupOptionPipe_Factory(t) { return new (t || NzFilterGroupOptionPipe)(); };
    /** @nocollapse */ NzFilterGroupOptionPipe.ɵpipe = ɵɵdefinePipe({ name: "nzFilterGroupOption", type: NzFilterGroupOptionPipe, pure: true });
    return NzFilterGroupOptionPipe;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzFilterGroupOptionPipe, [{
        type: Pipe,
        args: [{ name: 'nzFilterGroupOption' }]
    }], null, null); })();
function defaultFilterOption(searchValue, option) {
    if (option && option.nzLabel) {
        return option.nzLabel.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
    }
    else {
        return false;
    }
}

var NzSelectService = /** @class */ (function () {
    function NzSelectService() {
        var _this = this;
        /** Input params **/
        this.autoClearSearchValue = true;
        this.serverSearch = false;
        this.filterOption = defaultFilterOption;
        this.mode = 'default';
        this.maxMultipleCount = Infinity;
        this.disabled = false;
        // tslint:disable-next-line:no-any
        this.compareWith = function (o1, o2) { return o1 === o2; };
        /** selectedValueChanged should emit ngModelChange or not **/
        // tslint:disable-next-line:no-any
        this.listOfSelectedValueWithEmit$ = new BehaviorSubject({
            value: [],
            emit: false
        });
        /** ContentChildren Change **/
        this.mapOfTemplateOption$ = new BehaviorSubject({
            listOfNzOptionComponent: [],
            listOfNzOptionGroupComponent: []
        });
        /** searchValue Change **/
        this.searchValueRaw$ = new BehaviorSubject('');
        this.listOfFilteredOption = [];
        this.openRaw$ = new Subject();
        this.checkRaw$ = new Subject();
        this.open = false;
        this.clearInput$ = new Subject();
        this.searchValue = '';
        this.isShowNotFound = false;
        /** animation event **/
        this.animationEvent$ = new Subject();
        /** open event **/
        this.open$ = this.openRaw$.pipe(distinctUntilChanged());
        this.activatedOption$ = new ReplaySubject(1);
        this.listOfSelectedValue$ = this.listOfSelectedValueWithEmit$.pipe(map(function (data) { return data.value; }));
        this.modelChange$ = this.listOfSelectedValueWithEmit$.pipe(filter(function (item) { return item.emit; }), map(function (data) {
            var selectedList = data.value;
            var modelValue = null; // tslint:disable-line:no-any
            if (_this.isSingleMode) {
                if (selectedList.length) {
                    modelValue = selectedList[0];
                }
            }
            else {
                modelValue = selectedList;
            }
            return modelValue;
        }));
        this.searchValue$ = this.searchValueRaw$.pipe(distinctUntilChanged(), skip(1), share(), tap(function (value) {
            _this.searchValue = value;
            if (value) {
                _this.updateActivatedOption(_this.listOfFilteredOption[0]);
            }
            _this.updateListOfFilteredOption();
        }));
        // tslint:disable-next-line:no-any
        this.listOfSelectedValue = [];
        /** flat ViewChildren **/
        this.listOfTemplateOption = [];
        /** tag option **/
        this.listOfTagOption = [];
        /** tag option concat template option **/
        this.listOfTagAndTemplateOption = [];
        /** ViewChildren **/
        this.listOfNzOptionComponent = [];
        this.listOfNzOptionGroupComponent = [];
        /** display in top control **/
        this.listOfCachedSelectedOption = [];
        /** selected value or ViewChildren change **/
        this.valueOrOption$ = combineLatest([this.listOfSelectedValue$, this.mapOfTemplateOption$]).pipe(tap(function (data) {
            var _a = __read(data, 2), listOfSelectedValue = _a[0], mapOfTemplateOption = _a[1];
            _this.listOfSelectedValue = listOfSelectedValue;
            _this.listOfNzOptionComponent = mapOfTemplateOption.listOfNzOptionComponent;
            _this.listOfNzOptionGroupComponent = mapOfTemplateOption.listOfNzOptionGroupComponent;
            _this.listOfTemplateOption = _this.listOfNzOptionComponent.concat(_this.listOfNzOptionGroupComponent.reduce(function (pre, cur) { return __spread(pre, cur.listOfNzOptionComponent.toArray()); }, []));
            _this.updateListOfTagOption();
            _this.updateListOfFilteredOption();
            _this.resetActivatedOptionIfNeeded();
            _this.updateListOfCachedOption();
        }), share());
        this.check$ = merge(this.checkRaw$, this.valueOrOption$, this.searchValue$, this.activatedOption$, this.open$, this.modelChange$).pipe(share());
    }
    NzSelectService.prototype.clickOption = function (option) {
        var _this = this;
        /** update listOfSelectedOption -> update listOfSelectedValue -> next listOfSelectedValue$ **/
        if (!option.nzDisabled) {
            this.updateActivatedOption(option);
            var listOfSelectedValue = __spread(this.listOfSelectedValue);
            if (this.isMultipleOrTags) {
                var targetValue = listOfSelectedValue.find(function (o) { return _this.compareWith(o, option.nzValue); });
                if (isNotNil(targetValue)) {
                    listOfSelectedValue.splice(listOfSelectedValue.indexOf(targetValue), 1);
                    this.updateListOfSelectedValue(listOfSelectedValue, true);
                }
                else if (listOfSelectedValue.length < this.maxMultipleCount) {
                    listOfSelectedValue.push(option.nzValue);
                    this.updateListOfSelectedValue(listOfSelectedValue, true);
                }
            }
            else if (!this.compareWith(listOfSelectedValue[0], option.nzValue)) {
                listOfSelectedValue = [option.nzValue];
                this.updateListOfSelectedValue(listOfSelectedValue, true);
            }
            if (this.isSingleMode) {
                this.setOpenState(false);
            }
            else if (this.autoClearSearchValue) {
                this.clearInput();
            }
        }
    };
    NzSelectService.prototype.updateListOfCachedOption = function () {
        var _this = this;
        if (this.isSingleMode) {
            var selectedOption = this.listOfTemplateOption.find(function (o) { return _this.compareWith(o.nzValue, _this.listOfSelectedValue[0]); });
            if (!isNil(selectedOption)) {
                this.listOfCachedSelectedOption = [selectedOption];
            }
        }
        else {
            var listOfCachedSelectedOption_1 = [];
            this.listOfSelectedValue.forEach(function (v) {
                var listOfMixedOption = __spread(_this.listOfTagAndTemplateOption, _this.listOfCachedSelectedOption);
                var option = listOfMixedOption.find(function (o) { return _this.compareWith(o.nzValue, v); });
                if (option) {
                    listOfCachedSelectedOption_1.push(option);
                }
            });
            this.listOfCachedSelectedOption = listOfCachedSelectedOption_1;
        }
    };
    NzSelectService.prototype.updateListOfTagOption = function () {
        var _this = this;
        if (this.isTagsMode) {
            var listOfMissValue = this.listOfSelectedValue.filter(function (value) { return !_this.listOfTemplateOption.find(function (o) { return _this.compareWith(o.nzValue, value); }); });
            this.listOfTagOption = listOfMissValue.map(function (value) {
                var cachedOption = _this.listOfCachedSelectedOption.find(function (o) { return _this.compareWith(o.nzValue, value); });
                if (cachedOption) {
                    return cachedOption;
                }
                else {
                    var nzOptionComponent = new NzOptionComponent();
                    nzOptionComponent.nzValue = value;
                    nzOptionComponent.nzLabel = value;
                    return nzOptionComponent;
                }
            });
            this.listOfTagAndTemplateOption = __spread(this.listOfTemplateOption.concat(this.listOfTagOption));
        }
        else {
            this.listOfTagAndTemplateOption = __spread(this.listOfTemplateOption);
        }
    };
    NzSelectService.prototype.updateAddTagOption = function () {
        var _this = this;
        var isMatch = this.listOfTagAndTemplateOption.find(function (item) { return item.nzLabel === _this.searchValue; });
        if (this.isTagsMode && this.searchValue && !isMatch) {
            var option = new NzOptionComponent();
            option.nzValue = this.searchValue;
            option.nzLabel = this.searchValue;
            this.addedTagOption = option;
            this.updateActivatedOption(option);
        }
        else {
            this.addedTagOption = null;
        }
    };
    NzSelectService.prototype.updateListOfFilteredOption = function () {
        this.updateAddTagOption();
        var listOfFilteredOption = new NzFilterOptionPipe().transform(this.listOfTagAndTemplateOption, this.searchValue, this.filterOption, this.serverSearch);
        this.listOfFilteredOption = this.addedTagOption ? __spread([this.addedTagOption], listOfFilteredOption) : __spread(listOfFilteredOption);
        this.isShowNotFound = !this.isTagsMode && !this.listOfFilteredOption.length;
    };
    NzSelectService.prototype.clearInput = function () {
        this.clearInput$.next();
    };
    // tslint:disable-next-line:no-any
    NzSelectService.prototype.updateListOfSelectedValue = function (value, emit) {
        this.listOfSelectedValueWithEmit$.next({ value: value, emit: emit });
    };
    NzSelectService.prototype.updateActivatedOption = function (option) {
        this.activatedOption$.next(option);
        this.activatedOption = option;
    };
    NzSelectService.prototype.tokenSeparate = function (inputValue, tokenSeparators) {
        /** auto tokenSeparators **/
        if (inputValue &&
            inputValue.length &&
            tokenSeparators.length &&
            this.isMultipleOrTags &&
            this.includesSeparators(inputValue, tokenSeparators)) {
            var listOfLabel = this.splitBySeparators(inputValue, tokenSeparators);
            this.updateSelectedValueByLabelList(listOfLabel);
            this.clearInput();
        }
    };
    NzSelectService.prototype.includesSeparators = function (str, separators) {
        // tslint:disable-next-line:prefer-for-of
        for (var i = 0; i < separators.length; ++i) {
            if (str.lastIndexOf(separators[i]) > 0) {
                return true;
            }
        }
        return false;
    };
    NzSelectService.prototype.splitBySeparators = function (str, separators) {
        var reg = new RegExp("[" + separators.join() + "]");
        var array = str.split(reg).filter(function (token) { return token; });
        return Array.from(new Set(array));
    };
    NzSelectService.prototype.resetActivatedOptionIfNeeded = function () {
        var _this = this;
        var resetActivatedOption = function () {
            var activatedOption = _this.listOfFilteredOption.find(function (item) { return _this.compareWith(item.nzValue, _this.listOfSelectedValue[0]); });
            _this.updateActivatedOption(activatedOption || null);
        };
        if (this.activatedOption) {
            if (!this.listOfFilteredOption.find(function (item) { return _this.compareWith(item.nzValue, _this.activatedOption.nzValue); }) ||
                !this.listOfSelectedValue.find(function (item) { return _this.compareWith(item, _this.activatedOption.nzValue); })) {
                resetActivatedOption();
            }
        }
        else {
            resetActivatedOption();
        }
    };
    NzSelectService.prototype.updateTemplateOption = function (listOfNzOptionComponent, listOfNzOptionGroupComponent) {
        this.mapOfTemplateOption$.next({ listOfNzOptionComponent: listOfNzOptionComponent, listOfNzOptionGroupComponent: listOfNzOptionGroupComponent });
    };
    NzSelectService.prototype.updateSearchValue = function (value) {
        this.searchValueRaw$.next(value);
    };
    NzSelectService.prototype.updateSelectedValueByLabelList = function (listOfLabel) {
        var _this = this;
        var listOfSelectedValue = __spread(this.listOfSelectedValue);
        var listOfMatchOptionValue = this.listOfTagAndTemplateOption
            .filter(function (item) { return listOfLabel.indexOf(item.nzLabel) !== -1; })
            .map(function (item) { return item.nzValue; })
            .filter(function (item) { return !isNotNil(_this.listOfSelectedValue.find(function (v) { return _this.compareWith(v, item); })); });
        if (this.isMultipleMode) {
            this.updateListOfSelectedValue(__spread(listOfSelectedValue, listOfMatchOptionValue), true);
        }
        else {
            var listOfUnMatchOptionValue = listOfLabel.filter(function (label) { return _this.listOfTagAndTemplateOption.map(function (item) { return item.nzLabel; }).indexOf(label) === -1; });
            this.updateListOfSelectedValue(__spread(listOfSelectedValue, listOfMatchOptionValue, listOfUnMatchOptionValue), true);
        }
    };
    NzSelectService.prototype.onKeyDown = function (e) {
        var _this = this;
        if (this.disabled) {
            return;
        }
        var keyCode = e.keyCode;
        var eventTarget = e.target;
        var listOfFilteredOptionWithoutDisabledOrHidden = this.listOfFilteredOption.filter(function (item) { return !item.nzDisabled && !item.nzHide; });
        var activatedIndex = listOfFilteredOptionWithoutDisabledOrHidden.findIndex(function (item) { return item === _this.activatedOption; });
        switch (keyCode) {
            case UP_ARROW:
                e.preventDefault();
                var preIndex = activatedIndex > 0 ? activatedIndex - 1 : listOfFilteredOptionWithoutDisabledOrHidden.length - 1;
                this.updateActivatedOption(listOfFilteredOptionWithoutDisabledOrHidden[preIndex]);
                break;
            case DOWN_ARROW:
                e.preventDefault();
                var nextIndex = activatedIndex < listOfFilteredOptionWithoutDisabledOrHidden.length - 1 ? activatedIndex + 1 : 0;
                this.updateActivatedOption(listOfFilteredOptionWithoutDisabledOrHidden[nextIndex]);
                if (!this.disabled && !this.open) {
                    this.setOpenState(true);
                }
                break;
            case ENTER:
                e.preventDefault();
                if (this.open) {
                    if (this.activatedOption && !this.activatedOption.nzDisabled) {
                        this.clickOption(this.activatedOption);
                    }
                }
                else {
                    this.setOpenState(true);
                }
                break;
            case BACKSPACE:
                if (this.isMultipleOrTags && !eventTarget.value && this.listOfCachedSelectedOption.length) {
                    e.preventDefault();
                    this.removeValueFormSelected(this.listOfCachedSelectedOption[this.listOfCachedSelectedOption.length - 1]);
                }
                break;
            case SPACE:
                if (!this.disabled && !this.open) {
                    this.setOpenState(true);
                    e.preventDefault();
                }
                break;
            case TAB:
                this.setOpenState(false);
                break;
        }
    };
    // tslint:disable-next-line:no-any
    NzSelectService.prototype.removeValueFormSelected = function (option) {
        var _this = this;
        if (this.disabled || option.nzDisabled) {
            return;
        }
        var listOfSelectedValue = this.listOfSelectedValue.filter(function (item) { return !_this.compareWith(item, option.nzValue); });
        this.updateListOfSelectedValue(listOfSelectedValue, true);
        this.clearInput();
    };
    NzSelectService.prototype.setOpenState = function (value) {
        this.openRaw$.next(value);
        this.open = value;
    };
    NzSelectService.prototype.check = function () {
        this.checkRaw$.next();
    };
    Object.defineProperty(NzSelectService.prototype, "isSingleMode", {
        get: function () {
            return this.mode === 'default';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectService.prototype, "isTagsMode", {
        get: function () {
            return this.mode === 'tags';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectService.prototype, "isMultipleMode", {
        get: function () {
            return this.mode === 'multiple';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectService.prototype, "isMultipleOrTags", {
        get: function () {
            return this.mode === 'tags' || this.mode === 'multiple';
        },
        enumerable: true,
        configurable: true
    });
    /** @nocollapse */ NzSelectService.ɵfac = function NzSelectService_Factory(t) { return new (t || NzSelectService)(); };
    /** @nocollapse */ NzSelectService.ɵprov = ɵɵdefineInjectable({ token: NzSelectService, factory: NzSelectService.ɵfac });
    return NzSelectService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzSelectService, [{
        type: Injectable
    }], null, null); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var _c0$2 = ["nz-option-li", ""];
function NzOptionLiComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1479 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r1479.nzOption.nzLabel, "\n");
} }
function NzOptionLiComponent_ng_container_1_i_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 3);
} }
function NzOptionLiComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzOptionLiComponent_ng_container_1_i_1_Template, 1, 0, "i", 2);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1480 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r1480.nzMenuItemSelectedIcon)("ngIfElse", ctx_r1480.nzMenuItemSelectedIcon);
} }
var NzOptionLiComponent = /** @class */ (function () {
    function NzOptionLiComponent(elementRef, nzSelectService, cdr, renderer) {
        this.elementRef = elementRef;
        this.nzSelectService = nzSelectService;
        this.cdr = cdr;
        this.el = this.elementRef.nativeElement;
        this.selected = false;
        this.active = false;
        this.destroy$ = new Subject();
        renderer.addClass(elementRef.nativeElement, 'ant-select-dropdown-menu-item');
    }
    NzOptionLiComponent.prototype.clickOption = function () {
        this.nzSelectService.clickOption(this.nzOption);
    };
    NzOptionLiComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nzSelectService.listOfSelectedValue$.pipe(takeUntil(this.destroy$)).subscribe(function (list) {
            _this.selected = isNotNil(list.find(function (v) { return _this.nzSelectService.compareWith(v, _this.nzOption.nzValue); }));
            _this.cdr.markForCheck();
        });
        this.nzSelectService.activatedOption$.pipe(takeUntil(this.destroy$)).subscribe(function (option) {
            if (option) {
                _this.active = _this.nzSelectService.compareWith(option.nzValue, _this.nzOption.nzValue);
            }
            else {
                _this.active = false;
            }
            _this.cdr.markForCheck();
        });
    };
    NzOptionLiComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /** @nocollapse */ NzOptionLiComponent.ɵfac = function NzOptionLiComponent_Factory(t) { return new (t || NzOptionLiComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NzSelectService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2)); };
    /** @nocollapse */ NzOptionLiComponent.ɵcmp = ɵɵdefineComponent({ type: NzOptionLiComponent, selectors: [["", "nz-option-li", ""]], hostBindings: function NzOptionLiComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            ɵɵallocHostVars(5);
            ɵɵlistener("click", function NzOptionLiComponent_click_HostBindingHandler($event) { return ctx.clickOption(); })("mousedown", function NzOptionLiComponent_mousedown_HostBindingHandler($event) { return $event.preventDefault(); });
        } if (rf & 2) {
            ɵɵattribute("unselectable", "unselectable");
            ɵɵstyleProp("user-select", "none");
            ɵɵclassProp("ant-select-dropdown-menu-item-selected", ctx.selected && !ctx.nzOption.nzDisabled)("ant-select-dropdown-menu-item-disabled", ctx.nzOption.nzDisabled)("ant-select-dropdown-menu-item-active", ctx.active && !ctx.nzOption.nzDisabled);
        } }, inputs: { nzOption: "nzOption", nzMenuItemSelectedIcon: "nzMenuItemSelectedIcon" }, exportAs: ["nzOptionLi"], attrs: _c0$2, decls: 2, vars: 3, consts: [[4, "ngIf", "ngIfElse"], [4, "ngIf"], ["nz-icon", "", "nzType", "check", "class", "ant-select-selected-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "check", 1, "ant-select-selected-icon"]], template: function NzOptionLiComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵtemplate(0, NzOptionLiComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
            ɵɵtemplate(1, NzOptionLiComponent_ng_container_1_Template, 2, 2, "ng-container", 1);
        } if (rf & 2) {
            ɵɵproperty("ngIf", !ctx.nzOption.nzCustomContent)("ngIfElse", ctx.nzOption.template);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.nzSelectService.isMultipleOrTags);
        } }, directives: [NgIf, NzIconDirective], encapsulation: 2, changeDetection: 0 });
    return NzOptionLiComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzOptionLiComponent, [{
        type: Component,
        args: [{
                selector: '[nz-option-li]',
                exportAs: 'nzOptionLi',
                templateUrl: './nz-option-li.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.ant-select-dropdown-menu-item-selected]': 'selected && !nzOption.nzDisabled',
                    '[class.ant-select-dropdown-menu-item-disabled]': 'nzOption.nzDisabled',
                    '[class.ant-select-dropdown-menu-item-active]': 'active && !nzOption.nzDisabled',
                    '[attr.unselectable]': '"unselectable"',
                    '[style.user-select]': '"none"',
                    '(click)': 'clickOption()',
                    '(mousedown)': '$event.preventDefault()'
                }
            }]
    }], function () { return [{ type: ElementRef }, { type: NzSelectService }, { type: ChangeDetectorRef }, { type: Renderer2 }]; }, { nzOption: [{
            type: Input
        }], nzMenuItemSelectedIcon: [{
            type: Input
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzSelectUnselectableDirective = /** @class */ (function () {
    function NzSelectUnselectableDirective() {
    }
    /** @nocollapse */ NzSelectUnselectableDirective.ɵfac = function NzSelectUnselectableDirective_Factory(t) { return new (t || NzSelectUnselectableDirective)(); };
    /** @nocollapse */ NzSelectUnselectableDirective.ɵdir = ɵɵdefineDirective({ type: NzSelectUnselectableDirective, selectors: [["", "nz-select-unselectable", ""]], hostBindings: function NzSelectUnselectableDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            ɵɵallocHostVars(2);
        } if (rf & 2) {
            ɵɵattribute("unselectable", "unselectable");
            ɵɵstyleProp("user-select", "none");
        } }, exportAs: ["nzSelectUnselectable"] });
    return NzSelectUnselectableDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzSelectUnselectableDirective, [{
        type: Directive,
        args: [{
                selector: '[nz-select-unselectable]',
                exportAs: 'nzSelectUnselectable',
                host: {
                    '[attr.unselectable]': '"unselectable"',
                    '[style.user-select]': '"none"'
                }
            }]
    }], null, null); })();

var _c0$3 = ["dropdownUl"];
var _c1 = ["nz-option-container", ""];
function NzOptionContainerComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li", 7);
    ɵɵelement(1, "nz-embed-empty", 8);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1483 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("nzComponentName", "select")("specificContent", ctx_r1483.nzNotFoundContent);
} }
function NzOptionContainerComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "li", 9);
} if (rf & 2) {
    var ctx_r1484 = ɵɵnextContext();
    ɵɵproperty("nzMenuItemSelectedIcon", ctx_r1484.nzMenuItemSelectedIcon)("nzOption", ctx_r1484.nzSelectService.addedTagOption);
} }
function NzOptionContainerComponent_ng_container_4_li_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "li", 9);
} if (rf & 2) {
    var option_r1488 = ɵɵnextContext().$implicit;
    var ctx_r1489 = ɵɵnextContext();
    ɵɵproperty("nzMenuItemSelectedIcon", ctx_r1489.nzMenuItemSelectedIcon)("nzOption", option_r1488);
} }
function NzOptionContainerComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzOptionContainerComponent_ng_container_4_li_1_Template, 1, 2, "li", 3);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var option_r1488 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !option_r1488.nzHide);
} }
function NzOptionContainerComponent_li_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var group_r1491 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", group_r1491.nzLabel, " ");
} }
function NzOptionContainerComponent_li_6_ng_container_4_li_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "li", 9);
} if (rf & 2) {
    var option_r1495 = ɵɵnextContext().$implicit;
    var ctx_r1496 = ɵɵnextContext(2);
    ɵɵproperty("nzMenuItemSelectedIcon", ctx_r1496.nzMenuItemSelectedIcon)("nzOption", option_r1495);
} }
function NzOptionContainerComponent_li_6_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzOptionContainerComponent_li_6_ng_container_4_li_1_Template, 1, 2, "li", 3);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var option_r1495 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !option_r1495.nzHide);
} }
function NzOptionContainerComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li", 10);
    ɵɵelementStart(1, "div", 11);
    ɵɵtemplate(2, NzOptionContainerComponent_li_6_ng_container_2_Template, 2, 1, "ng-container", 12);
    ɵɵelementEnd();
    ɵɵelementStart(3, "ul", 13);
    ɵɵtemplate(4, NzOptionContainerComponent_li_6_ng_container_4_Template, 2, 1, "ng-container", 4);
    ɵɵpipe(5, "nzFilterOption");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var group_r1491 = ctx.$implicit;
    var ctx_r1486 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵattribute("title", group_r1491.isLabelString ? group_r1491.nzLabel : "");
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", group_r1491.nzLabel);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ɵɵpipeBind4(5, 4, group_r1491.listOfNzOptionComponent, ctx_r1486.nzSelectService.searchValue, ctx_r1486.nzSelectService.filterOption, ctx_r1486.nzSelectService.serverSearch))("ngForTrackBy", ctx_r1486.trackValue);
} }
function NzOptionContainerComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "li", 9);
} if (rf & 2) {
    var option_r1498 = ctx.$implicit;
    var ctx_r1487 = ɵɵnextContext();
    ɵɵproperty("nzMenuItemSelectedIcon", ctx_r1487.nzMenuItemSelectedIcon)("nzOption", option_r1498);
} }
var NzOptionContainerComponent = /** @class */ (function () {
    function NzOptionContainerComponent(nzSelectService, cdr, ngZone) {
        this.nzSelectService = nzSelectService;
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.destroy$ = new Subject();
        this.lastScrollTop = 0;
        this.nzScrollToBottom = new EventEmitter();
    }
    NzOptionContainerComponent.prototype.scrollIntoViewIfNeeded = function (option) {
        var _this = this;
        // delay after open
        setTimeout(function () {
            if (_this.listOfNzOptionLiComponent && _this.listOfNzOptionLiComponent.length && option) {
                var targetOption = _this.listOfNzOptionLiComponent.find(function (o) { return _this.nzSelectService.compareWith(o.nzOption.nzValue, option.nzValue); });
                // tslint:disable:no-any
                if (targetOption && targetOption.el && targetOption.el.scrollIntoViewIfNeeded) {
                    targetOption.el.scrollIntoViewIfNeeded(false);
                }
            }
        });
    };
    NzOptionContainerComponent.prototype.trackLabel = function (_index, option) {
        return option.nzLabel;
    };
    // tslint:disable-next-line:no-any
    NzOptionContainerComponent.prototype.trackValue = function (_index, option) {
        return option.nzValue;
    };
    NzOptionContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nzSelectService.activatedOption$.pipe(takeUntil(this.destroy$)).subscribe(function (option) {
            _this.scrollIntoViewIfNeeded(option);
        });
        this.nzSelectService.check$.pipe(takeUntil(this.destroy$)).subscribe(function () {
            _this.cdr.markForCheck();
        });
        this.ngZone.runOutsideAngular(function () {
            var ul = _this.dropdownUl.nativeElement;
            fromEvent(ul, 'scroll')
                .pipe(takeUntil(_this.destroy$))
                .subscribe(function (e) {
                e.preventDefault();
                e.stopPropagation();
                if (ul && ul.scrollTop > _this.lastScrollTop && ul.scrollHeight < ul.clientHeight + ul.scrollTop + 10) {
                    _this.lastScrollTop = ul.scrollTop;
                    _this.ngZone.run(function () {
                        _this.nzScrollToBottom.emit();
                    });
                }
            });
        });
    };
    NzOptionContainerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.listOfNzOptionLiComponent.changes
            .pipe(map(function (list) { return list.length; }), pairwise(), filter(function (_a) {
            var _b = __read(_a, 2), before = _b[0], after = _b[1];
            return after < before;
        }), takeUntil(this.destroy$))
            .subscribe(function () { return (_this.lastScrollTop = 0); });
    };
    NzOptionContainerComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /** @nocollapse */ NzOptionContainerComponent.ɵfac = function NzOptionContainerComponent_Factory(t) { return new (t || NzOptionContainerComponent)(ɵɵdirectiveInject(NzSelectService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone)); };
    /** @nocollapse */ NzOptionContainerComponent.ɵcmp = ɵɵdefineComponent({ type: NzOptionContainerComponent, selectors: [["", "nz-option-container", ""]], viewQuery: function NzOptionContainerComponent_Query(rf, ctx) { if (rf & 1) {
            ɵɵstaticViewQuery(_c0$3, true);
            ɵɵviewQuery(NzOptionLiComponent, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dropdownUl = _t.first);
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfNzOptionLiComponent = _t);
        } }, inputs: { nzNotFoundContent: "nzNotFoundContent", nzMenuItemSelectedIcon: "nzMenuItemSelectedIcon" }, outputs: { nzScrollToBottom: "nzScrollToBottom" }, exportAs: ["nzOptionContainer"], attrs: _c1, decls: 10, vars: 23, consts: [["role", "menu", "tabindex", "0", 1, "ant-select-dropdown-menu", "ant-select-dropdown-menu-root", "ant-select-dropdown-menu-vertical"], ["dropdownUl", ""], ["nz-select-unselectable", "", "class", "ant-select-dropdown-menu-item ant-select-dropdown-menu-item-disabled", 4, "ngIf"], ["nz-option-li", "", 3, "nzMenuItemSelectedIcon", "nzOption", 4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "ant-select-dropdown-menu-item-group", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["nz-option-li", "", 3, "nzMenuItemSelectedIcon", "nzOption", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["nz-select-unselectable", "", 1, "ant-select-dropdown-menu-item", "ant-select-dropdown-menu-item-disabled"], [3, "nzComponentName", "specificContent"], ["nz-option-li", "", 3, "nzMenuItemSelectedIcon", "nzOption"], [1, "ant-select-dropdown-menu-item-group"], [1, "ant-select-dropdown-menu-item-group-title"], [4, "nzStringTemplateOutlet"], [1, "ant-select-dropdown-menu-item-group-list"]], template: function NzOptionContainerComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "ul", 0, 1);
            ɵɵtemplate(2, NzOptionContainerComponent_li_2_Template, 2, 2, "li", 2);
            ɵɵtemplate(3, NzOptionContainerComponent_li_3_Template, 1, 2, "li", 3);
            ɵɵtemplate(4, NzOptionContainerComponent_ng_container_4_Template, 2, 1, "ng-container", 4);
            ɵɵpipe(5, "nzFilterOption");
            ɵɵtemplate(6, NzOptionContainerComponent_li_6_Template, 6, 9, "li", 5);
            ɵɵpipe(7, "nzFilterGroupOption");
            ɵɵtemplate(8, NzOptionContainerComponent_li_8_Template, 1, 2, "li", 6);
            ɵɵpipe(9, "nzFilterOption");
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(2);
            ɵɵproperty("ngIf", ctx.nzSelectService.isShowNotFound);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.nzSelectService.addedTagOption);
            ɵɵadvance(1);
            ɵɵproperty("ngForOf", ɵɵpipeBind4(5, 8, ctx.nzSelectService.listOfNzOptionComponent, ctx.nzSelectService.searchValue, ctx.nzSelectService.filterOption, ctx.nzSelectService.serverSearch))("ngForTrackBy", ctx.trackValue);
            ɵɵadvance(2);
            ɵɵproperty("ngForOf", ɵɵpipeBind4(7, 13, ctx.nzSelectService.listOfNzOptionGroupComponent, ctx.nzSelectService.searchValue, ctx.nzSelectService.filterOption, ctx.nzSelectService.serverSearch))("ngForTrackBy", ctx.trackLabel);
            ɵɵadvance(2);
            ɵɵproperty("ngForOf", ɵɵpipeBind4(9, 18, ctx.nzSelectService.listOfTagOption, ctx.nzSelectService.searchValue, ctx.nzSelectService.filterOption, ctx.nzSelectService.serverSearch))("ngForTrackBy", ctx.trackValue);
        } }, directives: [NgIf, NgForOf, NzSelectUnselectableDirective, NzEmbedEmptyComponent, NzOptionLiComponent, NzStringTemplateOutletDirective], pipes: [NzFilterOptionPipe, NzFilterGroupOptionPipe], encapsulation: 2, changeDetection: 0 });
    return NzOptionContainerComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzOptionContainerComponent, [{
        type: Component,
        args: [{
                selector: '[nz-option-container]',
                exportAs: 'nzOptionContainer',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                templateUrl: './nz-option-container.component.html'
            }]
    }], function () { return [{ type: NzSelectService }, { type: ChangeDetectorRef }, { type: NgZone }]; }, { listOfNzOptionLiComponent: [{
            type: ViewChildren,
            args: [NzOptionLiComponent]
        }], dropdownUl: [{
            type: ViewChild,
            args: ['dropdownUl', { static: true }]
        }], nzNotFoundContent: [{
            type: Input
        }], nzMenuItemSelectedIcon: [{
            type: Input
        }], nzScrollToBottom: [{
            type: Output
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var _c0$4 = ["inputElement"];
var _c1$1 = ["mirrorElement"];
var _c2 = ["nz-select-top-control", ""];
function NzSelectTopControlComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    var _r1509 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 6, 7);
    ɵɵlistener("compositionstart", function NzSelectTopControlComponent_ng_template_0_Template_input_compositionstart_0_listener($event) { ɵɵrestoreView(_r1509); var ctx_r1508 = ɵɵnextContext(); return ctx_r1508.isComposing = true; })("compositionend", function NzSelectTopControlComponent_ng_template_0_Template_input_compositionend_0_listener($event) { ɵɵrestoreView(_r1509); var ctx_r1510 = ɵɵnextContext(); return ctx_r1510.isComposing = false; })("ngModelChange", function NzSelectTopControlComponent_ng_template_0_Template_input_ngModelChange_0_listener($event) { ɵɵrestoreView(_r1509); var ctx_r1511 = ɵɵnextContext(); return ctx_r1511.setInputValue($event); });
    ɵɵelementEnd();
    ɵɵelement(2, "span", 8, 9);
} if (rf & 2) {
    var ctx_r1500 = ɵɵnextContext();
    ɵɵproperty("ngModel", ctx_r1500.inputValue)("disabled", ctx_r1500.nzSelectService.disabled);
} }
function NzSelectTopControlComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1501 = ɵɵnextContext();
    ɵɵstyleProp("display", ctx_r1501.placeHolderDisplay);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r1501.nzPlaceHolder, " ");
} }
function NzSelectTopControlComponent_ng_container_4_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementContainerStart(1);
    ɵɵtext(2);
    ɵɵelementContainerEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1514 = ɵɵnextContext(3);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1514.nzSelectService.listOfCachedSelectedOption[0] == null ? null : ctx_r1514.nzSelectService.listOfCachedSelectedOption[0].nzLabel);
} }
var _c3 = function (a0) { return { $implicit: a0 }; };
function NzSelectTopControlComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 13);
    ɵɵtemplate(1, NzSelectTopControlComponent_ng_container_4_div_1_ng_container_1_Template, 3, 1, "ng-container", 14);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1512 = ɵɵnextContext(2);
    ɵɵproperty("ngStyle", ctx_r1512.selectedValueStyle);
    ɵɵattribute("title", ctx_r1512.nzSelectService.listOfCachedSelectedOption[0] == null ? null : ctx_r1512.nzSelectService.listOfCachedSelectedOption[0].nzLabel);
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r1512.nzCustomTemplate)("nzStringTemplateOutletContext", ɵɵpureFunction1(4, _c3, ctx_r1512.nzSelectService.listOfCachedSelectedOption[0]));
} }
function NzSelectTopControlComponent_ng_container_4_div_2_ng_template_2_Template(rf, ctx) { }
function NzSelectTopControlComponent_ng_container_4_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 15);
    ɵɵelementStart(1, "div", 16);
    ɵɵtemplate(2, NzSelectTopControlComponent_ng_container_4_div_2_ng_template_2_Template, 0, 0, "ng-template", 17);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1513 = ɵɵnextContext(2);
    var _r1499 = ɵɵreference(1);
    ɵɵstyleProp("display", ctx_r1513.nzOpen ? "block" : "none");
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", _r1499);
} }
function NzSelectTopControlComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzSelectTopControlComponent_ng_container_4_div_1_Template, 2, 6, "div", 11);
    ɵɵtemplate(2, NzSelectTopControlComponent_ng_container_4_div_2_Template, 3, 2, "div", 12);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1502 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1502.nzSelectService.listOfCachedSelectedOption.length && ctx_r1502.nzSelectService.listOfSelectedValue.length);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1502.nzShowSearch);
} }
function NzSelectTopControlComponent_ul_5_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 22);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var option_r1519 = ɵɵnextContext().$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(option_r1519.nzLabel);
} }
function NzSelectTopControlComponent_ul_5_ng_container_1_span_3_i_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 25);
} }
function NzSelectTopControlComponent_ul_5_ng_container_1_span_3_Template(rf, ctx) { if (rf & 1) {
    var _r1526 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 23);
    ɵɵlistener("mousedown", function NzSelectTopControlComponent_ul_5_ng_container_1_span_3_Template_span_mousedown_0_listener($event) { ɵɵrestoreView(_r1526); return $event.preventDefault(); })("click", function NzSelectTopControlComponent_ul_5_ng_container_1_span_3_Template_span_click_0_listener($event) { ɵɵrestoreView(_r1526); var option_r1519 = ɵɵnextContext().$implicit; var ctx_r1527 = ɵɵnextContext(2); return ctx_r1527.removeSelectedValue(option_r1519, $event); });
    ɵɵtemplate(1, NzSelectTopControlComponent_ul_5_ng_container_1_span_3_i_1_Template, 1, 0, "i", 24);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1522 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r1522.nzRemoveIcon)("ngIfElse", ctx_r1522.nzRemoveIcon);
} }
function NzSelectTopControlComponent_ul_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    var _r1530 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "li", 20);
    ɵɵlistener("@zoomMotion.done", function NzSelectTopControlComponent_ul_5_ng_container_1_Template_li_animation_zoomMotion_done_1_listener($event) { ɵɵrestoreView(_r1530); var ctx_r1529 = ɵɵnextContext(2); return ctx_r1529.animationEnd(); });
    ɵɵtemplate(2, NzSelectTopControlComponent_ul_5_ng_container_1_ng_container_2_Template, 3, 1, "ng-container", 14);
    ɵɵtemplate(3, NzSelectTopControlComponent_ul_5_ng_container_1_span_3_Template, 2, 2, "span", 21);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var option_r1519 = ctx.$implicit;
    var index_r1520 = ctx.index;
    var ctx_r1516 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵclassProp("ant-select-selection__choice__disabled", option_r1519.nzDisabled);
    ɵɵproperty("@zoomMotion", undefined)("@.disabled", ctx_r1516.noAnimation == null ? null : ctx_r1516.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r1516.noAnimation == null ? null : ctx_r1516.noAnimation.nzNoAnimation);
    ɵɵattribute("title", option_r1519.nzLabel);
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r1516.nzCustomTemplate)("nzStringTemplateOutletContext", ɵɵpureFunction1(8, _c3, ctx_r1516.nzSelectService.listOfCachedSelectedOption[index_r1520]));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !option_r1519.nzDisabled);
} }
function NzSelectTopControlComponent_ul_5_li_3_ng_container_2_ng_template_1_Template(rf, ctx) { }
function NzSelectTopControlComponent_ul_5_li_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzSelectTopControlComponent_ul_5_li_3_ng_container_2_ng_template_1_Template, 0, 0, "ng-template", 26);
    ɵɵpipe(2, "slice");
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1531 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r1531.nzMaxTagPlaceholder)("ngTemplateOutletContext", ɵɵpureFunction1(5, _c3, ɵɵpipeBind2(2, 2, ctx_r1531.nzSelectService.listOfSelectedValue, ctx_r1531.nzMaxTagCount)));
} }
function NzSelectTopControlComponent_ul_5_li_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1532 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" + ", ctx_r1532.nzSelectService.listOfCachedSelectedOption.length - ctx_r1532.nzMaxTagCount, " ... ");
} }
function NzSelectTopControlComponent_ul_5_li_3_Template(rf, ctx) { if (rf & 1) {
    var _r1535 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 20);
    ɵɵlistener("@zoomMotion.done", function NzSelectTopControlComponent_ul_5_li_3_Template_li_animation_zoomMotion_done_0_listener($event) { ɵɵrestoreView(_r1535); var ctx_r1534 = ɵɵnextContext(2); return ctx_r1534.animationEnd(); });
    ɵɵelementStart(1, "div", 22);
    ɵɵtemplate(2, NzSelectTopControlComponent_ul_5_li_3_ng_container_2_Template, 3, 7, "ng-container", 3);
    ɵɵtemplate(3, NzSelectTopControlComponent_ul_5_li_3_ng_container_3_Template, 2, 1, "ng-container", 3);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1517 = ɵɵnextContext(2);
    ɵɵproperty("@zoomMotion", undefined)("@.disabled", ctx_r1517.noAnimation == null ? null : ctx_r1517.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r1517.noAnimation == null ? null : ctx_r1517.noAnimation.nzNoAnimation);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1517.nzMaxTagPlaceholder);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r1517.nzMaxTagPlaceholder);
} }
function NzSelectTopControlComponent_ul_5_ng_template_5_Template(rf, ctx) { }
function NzSelectTopControlComponent_ul_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "ul");
    ɵɵtemplate(1, NzSelectTopControlComponent_ul_5_ng_container_1_Template, 4, 10, "ng-container", 18);
    ɵɵpipe(2, "slice");
    ɵɵtemplate(3, NzSelectTopControlComponent_ul_5_li_3_Template, 4, 5, "li", 19);
    ɵɵelementStart(4, "li", 15);
    ɵɵtemplate(5, NzSelectTopControlComponent_ul_5_ng_template_5_Template, 0, 0, "ng-template", 17);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1503 = ɵɵnextContext();
    var _r1499 = ɵɵreference(1);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ɵɵpipeBind3(2, 4, ctx_r1503.nzSelectService.listOfCachedSelectedOption, 0, ctx_r1503.nzMaxTagCount))("ngForTrackBy", ctx_r1503.trackValue);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1503.nzSelectService.listOfCachedSelectedOption.length > ctx_r1503.nzMaxTagCount);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", _r1499);
} }
function NzSelectTopControlComponent_span_6_i_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 29);
} }
function NzSelectTopControlComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    var _r1538 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 27);
    ɵɵlistener("mousedown", function NzSelectTopControlComponent_span_6_Template_span_mousedown_0_listener($event) { ɵɵrestoreView(_r1538); return $event.preventDefault(); })("click", function NzSelectTopControlComponent_span_6_Template_span_click_0_listener($event) { ɵɵrestoreView(_r1538); var ctx_r1539 = ɵɵnextContext(); return ctx_r1539.onClearSelection($event); });
    ɵɵtemplate(1, NzSelectTopControlComponent_span_6_i_1_Template, 1, 0, "i", 28);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1504 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r1504.nzClearIcon)("ngIfElse", ctx_r1504.nzClearIcon);
} }
function NzSelectTopControlComponent_span_7_i_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 33);
} }
function NzSelectTopControlComponent_span_7_ng_template_2_i_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 35);
} }
function NzSelectTopControlComponent_span_7_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, NzSelectTopControlComponent_span_7_ng_template_2_i_0_Template, 1, 0, "i", 34);
} if (rf & 2) {
    var ctx_r1542 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", !ctx_r1542.nzSuffixIcon)("ngIfElse", ctx_r1542.nzSuffixIcon);
} }
function NzSelectTopControlComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 30);
    ɵɵtemplate(1, NzSelectTopControlComponent_span_7_i_1_Template, 1, 0, "i", 31);
    ɵɵtemplate(2, NzSelectTopControlComponent_span_7_ng_template_2_Template, 1, 2, "ng-template", null, 32, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
} if (rf & 2) {
    var _r1541 = ɵɵreference(3);
    var ctx_r1505 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1505.nzLoading)("ngIfElse", _r1541);
} }
var NzSelectTopControlComponent = /** @class */ (function () {
    function NzSelectTopControlComponent(renderer, nzSelectService, cdr, noAnimation) {
        this.renderer = renderer;
        this.nzSelectService = nzSelectService;
        this.cdr = cdr;
        this.noAnimation = noAnimation;
        this.isComposing = false;
        this.destroy$ = new Subject();
        this.nzShowSearch = false;
        this.nzOpen = false;
        this.nzAllowClear = false;
        this.nzShowArrow = true;
        this.nzLoading = false;
        this.nzTokenSeparators = [];
    }
    NzSelectTopControlComponent.prototype.onClearSelection = function (e) {
        e.stopPropagation();
        this.nzSelectService.updateListOfSelectedValue([], true);
    };
    NzSelectTopControlComponent.prototype.setInputValue = function (value) {
        /** fix clear value https://github.com/NG-ZORRO/ng-zorro-antd/issues/3825 **/
        if (this.inputDOM && !value) {
            this.inputDOM.value = value;
        }
        this.inputValue = value;
        this.updateWidth();
        this.nzSelectService.updateSearchValue(value);
        this.nzSelectService.tokenSeparate(this.inputValue, this.nzTokenSeparators);
    };
    Object.defineProperty(NzSelectTopControlComponent.prototype, "mirrorDOM", {
        get: function () {
            return this.mirrorElement && this.mirrorElement.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectTopControlComponent.prototype, "inputDOM", {
        get: function () {
            return this.inputElement && this.inputElement.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectTopControlComponent.prototype, "placeHolderDisplay", {
        get: function () {
            return this.inputValue || this.isComposing || this.nzSelectService.listOfSelectedValue.length ? 'none' : 'block';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectTopControlComponent.prototype, "selectedValueStyle", {
        get: function () {
            var showSelectedValue = false;
            var opacity = 1;
            if (!this.nzShowSearch) {
                showSelectedValue = true;
            }
            else {
                if (this.nzOpen) {
                    showSelectedValue = !(this.inputValue || this.isComposing);
                    if (showSelectedValue) {
                        opacity = 0.4;
                    }
                }
                else {
                    showSelectedValue = true;
                }
            }
            return {
                display: showSelectedValue ? 'block' : 'none',
                opacity: "" + opacity
            };
        },
        enumerable: true,
        configurable: true
    });
    // tslint:disable-next-line:no-any
    NzSelectTopControlComponent.prototype.trackValue = function (_index, option) {
        return option.nzValue;
    };
    NzSelectTopControlComponent.prototype.updateWidth = function () {
        if (this.mirrorDOM && this.inputDOM && this.inputDOM.value) {
            this.mirrorDOM.innerText = this.inputDOM.value + "&nbsp;";
            this.renderer.removeStyle(this.inputDOM, 'width');
            this.renderer.setStyle(this.inputDOM, 'width', this.mirrorDOM.clientWidth + "px");
        }
        else if (this.inputDOM) {
            this.renderer.removeStyle(this.inputDOM, 'width');
            this.mirrorDOM.innerText = '';
        }
    };
    NzSelectTopControlComponent.prototype.removeSelectedValue = function (option, e) {
        this.nzSelectService.removeValueFormSelected(option);
        e.stopPropagation();
    };
    NzSelectTopControlComponent.prototype.animationEnd = function () {
        this.nzSelectService.animationEvent$.next();
    };
    NzSelectTopControlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nzSelectService.open$.pipe(takeUntil(this.destroy$)).subscribe(function (open) {
            if (_this.inputElement && open) {
                setTimeout(function () { return _this.inputDOM.focus(); });
            }
        });
        this.nzSelectService.clearInput$.pipe(takeUntil(this.destroy$)).subscribe(function () {
            _this.setInputValue('');
        });
        this.nzSelectService.check$.pipe(takeUntil(this.destroy$)).subscribe(function () {
            _this.cdr.markForCheck();
        });
    };
    NzSelectTopControlComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /** @nocollapse */ NzSelectTopControlComponent.ɵfac = function NzSelectTopControlComponent_Factory(t) { return new (t || NzSelectTopControlComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NzSelectService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzNoAnimationDirective, 9)); };
    /** @nocollapse */ NzSelectTopControlComponent.ɵcmp = ɵɵdefineComponent({ type: NzSelectTopControlComponent, selectors: [["", "nz-select-top-control", ""]], viewQuery: function NzSelectTopControlComponent_Query(rf, ctx) { if (rf & 1) {
            ɵɵviewQuery(_c0$4, true);
            ɵɵviewQuery(_c1$1, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputElement = _t.first);
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.mirrorElement = _t.first);
        } }, inputs: { nzShowSearch: "nzShowSearch", nzPlaceHolder: "nzPlaceHolder", nzOpen: "nzOpen", nzMaxTagCount: "nzMaxTagCount", nzAllowClear: "nzAllowClear", nzShowArrow: "nzShowArrow", nzLoading: "nzLoading", nzCustomTemplate: "nzCustomTemplate", nzSuffixIcon: "nzSuffixIcon", nzClearIcon: "nzClearIcon", nzRemoveIcon: "nzRemoveIcon", nzMaxTagPlaceholder: "nzMaxTagPlaceholder", nzTokenSeparators: "nzTokenSeparators" }, exportAs: ["nzSelectTopControl"], attrs: _c2, decls: 8, vars: 5, consts: [["inputTemplate", ""], [1, "ant-select-selection__rendered"], ["nz-select-unselectable", "", "class", "ant-select-selection__placeholder", 3, "display", 4, "ngIf"], [4, "ngIf"], ["class", "ant-select-selection__clear", "nz-select-unselectable", "", 3, "mousedown", "click", 4, "ngIf"], ["class", "ant-select-arrow", "nz-select-unselectable", "", 4, "ngIf"], ["autocomplete", "something-new", 1, "ant-select-search__field", 3, "ngModel", "disabled", "compositionstart", "compositionend", "ngModelChange"], ["inputElement", ""], [1, "ant-select-search__field__mirror"], ["mirrorElement", ""], ["nz-select-unselectable", "", 1, "ant-select-selection__placeholder"], ["class", "ant-select-selection-selected-value", 3, "ngStyle", 4, "ngIf"], ["class", "ant-select-search ant-select-search--inline", 3, "display", 4, "ngIf"], [1, "ant-select-selection-selected-value", 3, "ngStyle"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], [1, "ant-select-search", "ant-select-search--inline"], [1, "ant-select-search__field__wrap"], [3, "ngTemplateOutlet"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "ant-select-selection__choice", 3, "nzNoAnimation", 4, "ngIf"], [1, "ant-select-selection__choice", 3, "nzNoAnimation"], ["class", "ant-select-selection__choice__remove", 3, "mousedown", "click", 4, "ngIf"], [1, "ant-select-selection__choice__content"], [1, "ant-select-selection__choice__remove", 3, "mousedown", "click"], ["nz-icon", "", "nzType", "close", "class", "ant-select-remove-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "close", 1, "ant-select-remove-icon"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["nz-select-unselectable", "", 1, "ant-select-selection__clear", 3, "mousedown", "click"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", "class", "ant-select-close-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", 1, "ant-select-close-icon"], ["nz-select-unselectable", "", 1, "ant-select-arrow"], ["nz-icon", "", "nzType", "loading", 4, "ngIf", "ngIfElse"], ["defaultArrow", ""], ["nz-icon", "", "nzType", "loading"], ["nz-icon", "", "nzType", "down", "class", "ant-select-arrow-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "down", 1, "ant-select-arrow-icon"]], template: function NzSelectTopControlComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵtemplate(0, NzSelectTopControlComponent_ng_template_0_Template, 4, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor);
            ɵɵelementStart(2, "div", 1);
            ɵɵtemplate(3, NzSelectTopControlComponent_div_3_Template, 2, 2, "div", 2);
            ɵɵtemplate(4, NzSelectTopControlComponent_ng_container_4_Template, 3, 2, "ng-container", 3);
            ɵɵtemplate(5, NzSelectTopControlComponent_ul_5_Template, 6, 8, "ul", 3);
            ɵɵelementEnd();
            ɵɵtemplate(6, NzSelectTopControlComponent_span_6_Template, 2, 2, "span", 4);
            ɵɵtemplate(7, NzSelectTopControlComponent_span_7_Template, 4, 2, "span", 5);
        } if (rf & 2) {
            ɵɵadvance(3);
            ɵɵproperty("ngIf", ctx.nzPlaceHolder);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.nzSelectService.isSingleMode);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.nzSelectService.isMultipleOrTags);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.nzAllowClear && ctx.nzSelectService.listOfSelectedValue.length);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.nzShowArrow);
        } }, directives: [NgIf, DefaultValueAccessor, NgControlStatus, NgModel, NzSelectUnselectableDirective, NgStyle, NzStringTemplateOutletDirective, NgTemplateOutlet, NgForOf, NzNoAnimationDirective, NzIconDirective], pipes: [SlicePipe], encapsulation: 2, data: { animation: [zoomMotion] }, changeDetection: 0 });
    return NzSelectTopControlComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzSelectTopControlComponent, [{
        type: Component,
        args: [{
                selector: '[nz-select-top-control]',
                exportAs: 'nzSelectTopControl',
                preserveWhitespaces: false,
                animations: [zoomMotion],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                templateUrl: './nz-select-top-control.component.html'
            }]
    }], function () { return [{ type: Renderer2 }, { type: NzSelectService }, { type: ChangeDetectorRef }, { type: NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { inputElement: [{
            type: ViewChild,
            args: ['inputElement', { static: false }]
        }], mirrorElement: [{
            type: ViewChild,
            args: ['mirrorElement', { static: false }]
        }], nzShowSearch: [{
            type: Input
        }], nzPlaceHolder: [{
            type: Input
        }], nzOpen: [{
            type: Input
        }], nzMaxTagCount: [{
            type: Input
        }], nzAllowClear: [{
            type: Input
        }], nzShowArrow: [{
            type: Input
        }], nzLoading: [{
            type: Input
        }], nzCustomTemplate: [{
            type: Input
        }], nzSuffixIcon: [{
            type: Input
        }], nzClearIcon: [{
            type: Input
        }], nzRemoveIcon: [{
            type: Input
        }], nzMaxTagPlaceholder: [{
            type: Input
        }], nzTokenSeparators: [{
            type: Input
        }] }); })();

function NzSelectComponent_ng_template_1_ng_template_2_Template(rf, ctx) { }
var _c0$5 = function (a0) { return [a0]; };
function NzSelectComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    var _r1548 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 2);
    ɵɵelementStart(1, "div", 3);
    ɵɵlistener("keydown", function NzSelectComponent_ng_template_1_Template_div_keydown_1_listener($event) { ɵɵrestoreView(_r1548); var ctx_r1547 = ɵɵnextContext(); return ctx_r1547.onKeyDown($event); })("nzScrollToBottom", function NzSelectComponent_ng_template_1_Template_div_nzScrollToBottom_1_listener($event) { ɵɵrestoreView(_r1548); var ctx_r1549 = ɵɵnextContext(); return ctx_r1549.nzScrollToBottom.emit(); });
    ɵɵelementEnd();
    ɵɵtemplate(2, NzSelectComponent_ng_template_1_ng_template_2_Template, 0, 0, "ng-template", 4);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1544 = ɵɵnextContext();
    ɵɵclassProp("ant-select-dropdown--single", ctx_r1544.nzSelectService.isSingleMode)("ant-select-dropdown--multiple", ctx_r1544.nzSelectService.isMultipleOrTags)("ant-select-dropdown-placement-bottomLeft", ctx_r1544.dropDownPosition === "bottom")("ant-select-dropdown-placement-topLeft", ctx_r1544.dropDownPosition === "top");
    ɵɵproperty("nzClassListAdd", ɵɵpureFunction1(12, _c0$5, ctx_r1544.nzDropdownClassName))("@slideMotion", ctx_r1544.dropDownPosition)("@.disabled", ctx_r1544.noAnimation == null ? null : ctx_r1544.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r1544.noAnimation == null ? null : ctx_r1544.noAnimation.nzNoAnimation)("ngStyle", ctx_r1544.nzDropdownStyle);
    ɵɵadvance(1);
    ɵɵproperty("nzMenuItemSelectedIcon", ctx_r1544.nzMenuItemSelectedIcon)("nzNotFoundContent", ctx_r1544.nzNotFoundContent);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r1544.nzDropdownRender);
} }
function NzSelectComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵprojection(0);
} }
var _c1$2 = ["*"];
var NzSelectComponent = /** @class */ (function () {
    function NzSelectComponent(renderer, nzSelectService, cdr, platform, elementRef, noAnimation) {
        this.nzSelectService = nzSelectService;
        this.cdr = cdr;
        this.platform = platform;
        this.noAnimation = noAnimation;
        this.open = false;
        this.onChange = function () { return null; };
        this.onTouched = function () { return null; };
        this.dropDownPosition = 'bottom';
        this._disabled = false;
        this.isInit = false;
        this.destroy$ = new Subject();
        this.nzOnSearch = new EventEmitter();
        this.nzScrollToBottom = new EventEmitter();
        this.nzOpenChange = new EventEmitter();
        this.nzBlur = new EventEmitter();
        this.nzFocus = new EventEmitter();
        this.nzSize = 'default';
        this.nzDropdownMatchSelectWidth = true;
        this.nzAllowClear = false;
        this.nzShowSearch = false;
        this.nzLoading = false;
        this.nzAutoFocus = false;
        this.nzShowArrow = true;
        this.nzTokenSeparators = [];
        renderer.addClass(elementRef.nativeElement, 'ant-select');
    }
    Object.defineProperty(NzSelectComponent.prototype, "nzAutoClearSearchValue", {
        set: function (value) {
            this.nzSelectService.autoClearSearchValue = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectComponent.prototype, "nzMaxMultipleCount", {
        set: function (value) {
            this.nzSelectService.maxMultipleCount = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectComponent.prototype, "nzServerSearch", {
        set: function (value) {
            this.nzSelectService.serverSearch = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectComponent.prototype, "nzMode", {
        set: function (value) {
            this.nzSelectService.mode = value;
            this.nzSelectService.check();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectComponent.prototype, "nzFilterOption", {
        set: function (value) {
            this.nzSelectService.filterOption = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectComponent.prototype, "compareWith", {
        set: function (value) {
            this.nzSelectService.compareWith = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectComponent.prototype, "nzOpen", {
        set: function (value) {
            this.open = value;
            this.nzSelectService.setOpenState(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectComponent.prototype, "nzDisabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = toBoolean(value);
            this.nzSelectService.disabled = this._disabled;
            this.nzSelectService.check();
            if (this.nzDisabled && this.isInit) {
                this.closeDropDown();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectComponent.prototype, "nzSelectTopControlDOM", {
        get: function () {
            return this.nzSelectTopControlElement && this.nzSelectTopControlElement.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    NzSelectComponent.prototype.updateAutoFocus = function () {
        if (this.nzSelectTopControlDOM && this.nzAutoFocus) {
            this.nzSelectTopControlDOM.focus();
        }
    };
    NzSelectComponent.prototype.focus = function () {
        if (this.nzSelectTopControlDOM) {
            this.nzSelectTopControlDOM.focus();
        }
    };
    NzSelectComponent.prototype.blur = function () {
        if (this.nzSelectTopControlDOM) {
            this.nzSelectTopControlDOM.blur();
        }
    };
    NzSelectComponent.prototype.onFocus = function () {
        this.nzFocus.emit();
    };
    NzSelectComponent.prototype.onBlur = function () {
        this.nzBlur.emit();
    };
    NzSelectComponent.prototype.onKeyDown = function (event) {
        this.nzSelectService.onKeyDown(event);
    };
    NzSelectComponent.prototype.toggleDropDown = function () {
        if (!this.nzDisabled) {
            this.nzSelectService.setOpenState(!this.open);
        }
    };
    NzSelectComponent.prototype.closeDropDown = function () {
        this.nzSelectService.setOpenState(false);
    };
    NzSelectComponent.prototype.onPositionChange = function (position) {
        this.dropDownPosition = position.connectionPair.originY;
    };
    NzSelectComponent.prototype.updateCdkConnectedOverlayStatus = function () {
        if (this.platform.isBrowser) {
            this.triggerWidth = this.cdkOverlayOrigin.elementRef.nativeElement.getBoundingClientRect().width;
        }
    };
    NzSelectComponent.prototype.updateCdkConnectedOverlayPositions = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.cdkConnectedOverlay && _this.cdkConnectedOverlay.overlayRef) {
                _this.cdkConnectedOverlay.overlayRef.updatePosition();
            }
        });
    };
    /** update ngModel -> update listOfSelectedValue **/
    // tslint:disable-next-line:no-any
    NzSelectComponent.prototype.writeValue = function (value) {
        this.value = value;
        var listValue = []; // tslint:disable-line:no-any
        if (isNotNil(value)) {
            if (this.nzSelectService.isMultipleOrTags) {
                listValue = value;
            }
            else {
                listValue = [value];
            }
        }
        this.nzSelectService.updateListOfSelectedValue(listValue, false);
        this.cdr.markForCheck();
    };
    NzSelectComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    NzSelectComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    NzSelectComponent.prototype.setDisabledState = function (isDisabled) {
        this.nzDisabled = isDisabled;
        this.cdr.markForCheck();
    };
    NzSelectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nzSelectService.animationEvent$.pipe(takeUntil(this.destroy$)).subscribe(function () { return _this.updateCdkConnectedOverlayPositions(); });
        this.nzSelectService.searchValue$.pipe(takeUntil(this.destroy$)).subscribe(function (data) {
            _this.nzOnSearch.emit(data);
            _this.updateCdkConnectedOverlayPositions();
        });
        this.nzSelectService.modelChange$.pipe(takeUntil(this.destroy$)).subscribe(function (modelValue) {
            if (_this.value !== modelValue) {
                _this.value = modelValue;
                _this.onChange(_this.value);
            }
        });
        this.nzSelectService.open$.pipe(takeUntil(this.destroy$)).subscribe(function (value) {
            if (_this.open !== value) {
                _this.nzOpenChange.emit(value);
            }
            if (value) {
                _this.focus();
                _this.updateCdkConnectedOverlayStatus();
            }
            else {
                _this.blur();
                _this.onTouched();
            }
            _this.open = value;
            _this.nzSelectService.clearInput();
        });
        this.nzSelectService.check$.pipe(takeUntil(this.destroy$)).subscribe(function () {
            _this.cdr.markForCheck();
        });
    };
    NzSelectComponent.prototype.ngAfterViewInit = function () {
        this.updateCdkConnectedOverlayStatus();
        this.updateAutoFocus();
        this.isInit = true;
    };
    NzSelectComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.listOfNzOptionGroupComponent.changes
            .pipe(startWith(true), flatMap(function () {
            return merge.apply(void 0, __spread([_this.listOfNzOptionGroupComponent.changes,
                _this.listOfNzOptionComponent.changes], _this.listOfNzOptionComponent.map(function (option) { return option.changes; }), _this.listOfNzOptionGroupComponent.map(function (group) {
                return group.listOfNzOptionComponent ? group.listOfNzOptionComponent.changes : EMPTY;
            }))).pipe(startWith(true));
        }))
            .subscribe(function () {
            _this.nzSelectService.updateTemplateOption(_this.listOfNzOptionComponent.toArray(), _this.listOfNzOptionGroupComponent.toArray());
        });
    };
    NzSelectComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /** @nocollapse */ NzSelectComponent.ɵfac = function NzSelectComponent_Factory(t) { return new (t || NzSelectComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NzSelectService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NzNoAnimationDirective, 9)); };
    /** @nocollapse */ NzSelectComponent.ɵcmp = ɵɵdefineComponent({ type: NzSelectComponent, selectors: [["nz-select"]], contentQueries: function NzSelectComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            ɵɵcontentQuery(dirIndex, NzOptionComponent, false);
            ɵɵcontentQuery(dirIndex, NzOptionGroupComponent, false);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfNzOptionComponent = _t);
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfNzOptionGroupComponent = _t);
        } }, viewQuery: function NzSelectComponent_Query(rf, ctx) { if (rf & 1) {
            ɵɵviewQuery(CdkOverlayOrigin, true);
            ɵɵviewQuery(CdkConnectedOverlay, true);
            ɵɵstaticViewQuery(NzSelectTopControlComponent, true);
            ɵɵstaticViewQuery(NzSelectTopControlComponent, true, ElementRef);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cdkOverlayOrigin = _t.first);
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cdkConnectedOverlay = _t.first);
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzSelectTopControlComponent = _t.first);
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzSelectTopControlElement = _t.first);
        } }, hostBindings: function NzSelectComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            ɵɵallocHostVars(7);
            ɵɵlistener("click", function NzSelectComponent_click_HostBindingHandler($event) { return ctx.toggleDropDown(); });
        } if (rf & 2) {
            ɵɵclassProp("ant-select-lg", ctx.nzSize === "large")("ant-select-sm", ctx.nzSize === "small")("ant-select-enabled", !ctx.nzDisabled)("ant-select-no-arrow", !ctx.nzShowArrow)("ant-select-disabled", ctx.nzDisabled)("ant-select-allow-clear", ctx.nzAllowClear)("ant-select-open", ctx.open);
        } }, inputs: { nzSize: "nzSize", nzDropdownClassName: "nzDropdownClassName", nzDropdownMatchSelectWidth: "nzDropdownMatchSelectWidth", nzDropdownStyle: "nzDropdownStyle", nzNotFoundContent: "nzNotFoundContent", nzAllowClear: "nzAllowClear", nzShowSearch: "nzShowSearch", nzLoading: "nzLoading", nzAutoFocus: "nzAutoFocus", nzPlaceHolder: "nzPlaceHolder", nzMaxTagCount: "nzMaxTagCount", nzDropdownRender: "nzDropdownRender", nzCustomTemplate: "nzCustomTemplate", nzSuffixIcon: "nzSuffixIcon", nzClearIcon: "nzClearIcon", nzRemoveIcon: "nzRemoveIcon", nzMenuItemSelectedIcon: "nzMenuItemSelectedIcon", nzShowArrow: "nzShowArrow", nzTokenSeparators: "nzTokenSeparators", nzMaxTagPlaceholder: "nzMaxTagPlaceholder", nzAutoClearSearchValue: "nzAutoClearSearchValue", nzMaxMultipleCount: "nzMaxMultipleCount", nzServerSearch: "nzServerSearch", nzMode: "nzMode", nzFilterOption: "nzFilterOption", compareWith: "compareWith", nzOpen: "nzOpen", nzDisabled: "nzDisabled" }, outputs: { nzOnSearch: "nzOnSearch", nzScrollToBottom: "nzScrollToBottom", nzOpenChange: "nzOpenChange", nzBlur: "nzBlur", nzFocus: "nzFocus" }, exportAs: ["nzSelect"], features: [ɵɵProvidersFeature([
                NzSelectService,
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef((function () { return NzSelectComponent; })),
                    multi: true
                }
            ])], ngContentSelectors: _c1$2, decls: 3, vars: 22, consts: [["cdkOverlayOrigin", "", "nz-select-top-control", "", "tabindex", "0", 1, "ant-select-selection", 3, "nzOpen", "nzNoAnimation", "nzMaxTagPlaceholder", "nzPlaceHolder", "nzAllowClear", "nzMaxTagCount", "nzShowArrow", "nzLoading", "nzCustomTemplate", "nzSuffixIcon", "nzClearIcon", "nzRemoveIcon", "nzShowSearch", "nzTokenSeparators", "focus", "blur", "keydown"], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayWidth", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "backdropClick", "detach", "positionChange"], [1, "ant-select-dropdown", 3, "nzClassListAdd", "nzNoAnimation", "ngStyle"], ["nz-option-container", "", 2, "overflow", "auto", "transform", "translateZ(0px)", 3, "nzMenuItemSelectedIcon", "nzNotFoundContent", "keydown", "nzScrollToBottom"], [3, "ngTemplateOutlet"]], template: function NzSelectComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵelementStart(0, "div", 0);
            ɵɵlistener("focus", function NzSelectComponent_Template_div_focus_0_listener($event) { return ctx.onFocus(); })("blur", function NzSelectComponent_Template_div_blur_0_listener($event) { return ctx.onBlur(); })("keydown", function NzSelectComponent_Template_div_keydown_0_listener($event) { return ctx.onKeyDown($event); });
            ɵɵelementEnd();
            ɵɵtemplate(1, NzSelectComponent_ng_template_1_Template, 3, 14, "ng-template", 1);
            ɵɵlistener("backdropClick", function NzSelectComponent_Template_ng_template_backdropClick_1_listener($event) { return ctx.closeDropDown(); })("detach", function NzSelectComponent_Template_ng_template_detach_1_listener($event) { return ctx.closeDropDown(); })("positionChange", function NzSelectComponent_Template_ng_template_positionChange_1_listener($event) { return ctx.onPositionChange($event); });
            ɵɵtemplate(2, NzSelectComponent_ng_template_2_Template, 1, 0, "ng-template");
        } if (rf & 2) {
            ɵɵclassProp("ant-select-selection--single", ctx.nzSelectService.isSingleMode)("ant-select-selection--multiple", ctx.nzSelectService.isMultipleOrTags);
            ɵɵproperty("nzOpen", ctx.open)("@.disabled", ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation)("nzNoAnimation", ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation)("nzMaxTagPlaceholder", ctx.nzMaxTagPlaceholder)("nzPlaceHolder", ctx.nzPlaceHolder)("nzAllowClear", ctx.nzAllowClear)("nzMaxTagCount", ctx.nzMaxTagCount)("nzShowArrow", ctx.nzShowArrow)("nzLoading", ctx.nzLoading)("nzCustomTemplate", ctx.nzCustomTemplate)("nzSuffixIcon", ctx.nzSuffixIcon)("nzClearIcon", ctx.nzClearIcon)("nzRemoveIcon", ctx.nzRemoveIcon)("nzShowSearch", ctx.nzShowSearch)("nzTokenSeparators", ctx.nzTokenSeparators);
            ɵɵadvance(1);
            ɵɵproperty("cdkConnectedOverlayHasBackdrop", true)("cdkConnectedOverlayMinWidth", ctx.nzDropdownMatchSelectWidth ? null : ctx.triggerWidth)("cdkConnectedOverlayWidth", ctx.nzDropdownMatchSelectWidth ? ctx.triggerWidth : null)("cdkConnectedOverlayOrigin", ctx.cdkOverlayOrigin)("cdkConnectedOverlayOpen", ctx.open);
        } }, directives: [CdkOverlayOrigin, NzSelectTopControlComponent, NzNoAnimationDirective, CdkConnectedOverlay, NzConnectedOverlayDirective, NzClassListAddDirective, NgStyle, NzOptionContainerComponent, NgTemplateOutlet], styles: ["\n      .ant-select-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "], encapsulation: 2, data: { animation: [slideMotion] }, changeDetection: 0 });
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzSelectComponent.prototype, "nzAllowClear", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzSelectComponent.prototype, "nzShowSearch", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzSelectComponent.prototype, "nzLoading", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzSelectComponent.prototype, "nzAutoFocus", void 0);
    return NzSelectComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzSelectComponent, [{
        type: Component,
        args: [{
                selector: 'nz-select',
                exportAs: 'nzSelect',
                preserveWhitespaces: false,
                providers: [
                    NzSelectService,
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((function () { return NzSelectComponent; })),
                        multi: true
                    }
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                animations: [slideMotion],
                templateUrl: './nz-select.component.html',
                host: {
                    '[class.ant-select-lg]': 'nzSize==="large"',
                    '[class.ant-select-sm]': 'nzSize==="small"',
                    '[class.ant-select-enabled]': '!nzDisabled',
                    '[class.ant-select-no-arrow]': '!nzShowArrow',
                    '[class.ant-select-disabled]': 'nzDisabled',
                    '[class.ant-select-allow-clear]': 'nzAllowClear',
                    '[class.ant-select-open]': 'open',
                    '(click)': 'toggleDropDown()'
                },
                styles: [
                    "\n      .ant-select-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "
                ]
            }]
    }], function () { return [{ type: Renderer2 }, { type: NzSelectService }, { type: ChangeDetectorRef }, { type: Platform }, { type: ElementRef }, { type: NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { cdkOverlayOrigin: [{
            type: ViewChild,
            args: [CdkOverlayOrigin, { static: false }]
        }], cdkConnectedOverlay: [{
            type: ViewChild,
            args: [CdkConnectedOverlay, { static: false }]
        }], nzSelectTopControlComponent: [{
            type: ViewChild,
            args: [NzSelectTopControlComponent, { static: true }]
        }], nzSelectTopControlElement: [{
            type: ViewChild,
            args: [NzSelectTopControlComponent, { static: true, read: ElementRef }]
        }], listOfNzOptionComponent: [{
            type: ContentChildren,
            args: [NzOptionComponent]
        }], listOfNzOptionGroupComponent: [{
            type: ContentChildren,
            args: [NzOptionGroupComponent]
        }], nzOnSearch: [{
            type: Output
        }], nzScrollToBottom: [{
            type: Output
        }], nzOpenChange: [{
            type: Output
        }], nzBlur: [{
            type: Output
        }], nzFocus: [{
            type: Output
        }], nzSize: [{
            type: Input
        }], nzDropdownClassName: [{
            type: Input
        }], nzDropdownMatchSelectWidth: [{
            type: Input
        }], nzDropdownStyle: [{
            type: Input
        }], nzNotFoundContent: [{
            type: Input
        }], nzAllowClear: [{
            type: Input
        }], nzShowSearch: [{
            type: Input
        }], nzLoading: [{
            type: Input
        }], nzAutoFocus: [{
            type: Input
        }], nzPlaceHolder: [{
            type: Input
        }], nzMaxTagCount: [{
            type: Input
        }], nzDropdownRender: [{
            type: Input
        }], nzCustomTemplate: [{
            type: Input
        }], nzSuffixIcon: [{
            type: Input
        }], nzClearIcon: [{
            type: Input
        }], nzRemoveIcon: [{
            type: Input
        }], nzMenuItemSelectedIcon: [{
            type: Input
        }], nzShowArrow: [{
            type: Input
        }], nzTokenSeparators: [{
            type: Input
        }], nzMaxTagPlaceholder: [{
            type: Input
        }], nzAutoClearSearchValue: [{
            type: Input
        }], nzMaxMultipleCount: [{
            type: Input
        }], nzServerSearch: [{
            type: Input
        }], nzMode: [{
            type: Input
        }], nzFilterOption: [{
            type: Input
        }], compareWith: [{
            type: Input
        }], nzOpen: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzSelectModule = /** @class */ (function () {
    function NzSelectModule() {
    }
    /** @nocollapse */ NzSelectModule.ɵmod = ɵɵdefineNgModule({ type: NzSelectModule });
    /** @nocollapse */ NzSelectModule.ɵinj = ɵɵdefineInjector({ factory: function NzSelectModule_Factory(t) { return new (t || NzSelectModule)(); }, imports: [[
                CommonModule,
                NzI18nModule,
                FormsModule,
                PlatformModule,
                OverlayModule,
                NzIconModule,
                NzAddOnModule,
                NzEmptyModule,
                NzOverlayModule,
                NzNoAnimationModule
            ]] });
    return NzSelectModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzSelectModule, { declarations: [NzFilterGroupOptionPipe,
        NzFilterOptionPipe,
        NzOptionComponent,
        NzSelectComponent,
        NzOptionContainerComponent,
        NzOptionGroupComponent,
        NzOptionLiComponent,
        NzSelectTopControlComponent,
        NzSelectUnselectableDirective], imports: [CommonModule,
        NzI18nModule,
        FormsModule,
        PlatformModule,
        OverlayModule,
        NzIconModule,
        NzAddOnModule,
        NzEmptyModule,
        NzOverlayModule,
        NzNoAnimationModule], exports: [NzOptionComponent, NzSelectComponent, NzOptionContainerComponent, NzOptionGroupComponent, NzSelectTopControlComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzSelectModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    NzI18nModule,
                    FormsModule,
                    PlatformModule,
                    OverlayModule,
                    NzIconModule,
                    NzAddOnModule,
                    NzEmptyModule,
                    NzOverlayModule,
                    NzNoAnimationModule
                ],
                declarations: [
                    NzFilterGroupOptionPipe,
                    NzFilterOptionPipe,
                    NzOptionComponent,
                    NzSelectComponent,
                    NzOptionContainerComponent,
                    NzOptionGroupComponent,
                    NzOptionLiComponent,
                    NzSelectTopControlComponent,
                    NzSelectUnselectableDirective
                ],
                exports: [NzOptionComponent, NzSelectComponent, NzOptionContainerComponent, NzOptionGroupComponent, NzSelectTopControlComponent]
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

export { NzFilterGroupOptionPipe, NzFilterOptionPipe, NzOptionComponent, NzOptionContainerComponent, NzOptionGroupComponent, NzOptionLiComponent, NzSelectComponent, NzSelectModule, NzSelectService, NzSelectTopControlComponent, NzSelectUnselectableDirective, defaultFilterOption };
//# sourceMappingURL=ng-zorro-antd-select.js.map
