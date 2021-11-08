/**
 * @fileoverview added by tsickle
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
import { BACKSPACE, DOWN_ARROW, ENTER, SPACE, TAB, UP_ARROW } from '@angular/cdk/keycodes';
import { Injectable } from '@angular/core';
import { combineLatest, merge, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { distinctUntilChanged, filter, map, share, skip, tap } from 'rxjs/operators';
import { isNil, isNotNil } from 'ng-zorro-antd/core';
import { NzOptionComponent } from './nz-option.component';
import { defaultFilterOption, NzFilterOptionPipe } from './nz-option.pipe';
import * as ɵngcc0 from '@angular/core';
var NzSelectService = /** @class */ (function () {
    function NzSelectService() {
        var _this = this;
        /**
         * Input params *
         */
        this.autoClearSearchValue = true;
        this.serverSearch = false;
        this.filterOption = defaultFilterOption;
        this.mode = 'default';
        this.maxMultipleCount = Infinity;
        this.disabled = false;
        // tslint:disable-next-line:no-any
        this.compareWith = (/**
         * @param {?} o1
         * @param {?} o2
         * @return {?}
         */
        function (o1, o2) { return o1 === o2; });
        /**
         * selectedValueChanged should emit ngModelChange or not *
         */
        // tslint:disable-next-line:no-any
        this.listOfSelectedValueWithEmit$ = new BehaviorSubject({
            value: [],
            emit: false
        });
        /**
         * ContentChildren Change *
         */
        this.mapOfTemplateOption$ = new BehaviorSubject({
            listOfNzOptionComponent: [],
            listOfNzOptionGroupComponent: []
        });
        /**
         * searchValue Change *
         */
        this.searchValueRaw$ = new BehaviorSubject('');
        this.listOfFilteredOption = [];
        this.openRaw$ = new Subject();
        this.checkRaw$ = new Subject();
        this.open = false;
        this.clearInput$ = new Subject();
        this.searchValue = '';
        this.isShowNotFound = false;
        /**
         * animation event *
         */
        this.animationEvent$ = new Subject();
        /**
         * open event *
         */
        this.open$ = this.openRaw$.pipe(distinctUntilChanged());
        this.activatedOption$ = new ReplaySubject(1);
        this.listOfSelectedValue$ = this.listOfSelectedValueWithEmit$.pipe(map((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return data.value; })));
        this.modelChange$ = this.listOfSelectedValueWithEmit$.pipe(filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.emit; })), map((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            /** @type {?} */
            var selectedList = data.value;
            /** @type {?} */
            var modelValue = null;
            if (_this.isSingleMode) {
                if (selectedList.length) {
                    modelValue = selectedList[0];
                }
            }
            else {
                modelValue = selectedList;
            }
            return modelValue;
        })));
        this.searchValue$ = this.searchValueRaw$.pipe(distinctUntilChanged(), skip(1), share(), tap((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.searchValue = value;
            if (value) {
                _this.updateActivatedOption(_this.listOfFilteredOption[0]);
            }
            _this.updateListOfFilteredOption();
        })));
        // tslint:disable-next-line:no-any
        this.listOfSelectedValue = [];
        /**
         * flat ViewChildren *
         */
        this.listOfTemplateOption = [];
        /**
         * tag option *
         */
        this.listOfTagOption = [];
        /**
         * tag option concat template option *
         */
        this.listOfTagAndTemplateOption = [];
        /**
         * ViewChildren *
         */
        this.listOfNzOptionComponent = [];
        this.listOfNzOptionGroupComponent = [];
        /**
         * display in top control *
         */
        this.listOfCachedSelectedOption = [];
        /**
         * selected value or ViewChildren change *
         */
        this.valueOrOption$ = combineLatest([this.listOfSelectedValue$, this.mapOfTemplateOption$]).pipe(tap((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            var _a = tslib_1.__read(data, 2), listOfSelectedValue = _a[0], mapOfTemplateOption = _a[1];
            _this.listOfSelectedValue = listOfSelectedValue;
            _this.listOfNzOptionComponent = mapOfTemplateOption.listOfNzOptionComponent;
            _this.listOfNzOptionGroupComponent = mapOfTemplateOption.listOfNzOptionGroupComponent;
            _this.listOfTemplateOption = _this.listOfNzOptionComponent.concat(_this.listOfNzOptionGroupComponent.reduce((/**
             * @param {?} pre
             * @param {?} cur
             * @return {?}
             */
            function (pre, cur) { return tslib_1.__spread(pre, cur.listOfNzOptionComponent.toArray()); }), (/** @type {?} */ ([]))));
            _this.updateListOfTagOption();
            _this.updateListOfFilteredOption();
            _this.resetActivatedOptionIfNeeded();
            _this.updateListOfCachedOption();
        })), share());
        this.check$ = merge(this.checkRaw$, this.valueOrOption$, this.searchValue$, this.activatedOption$, this.open$, this.modelChange$).pipe(share());
    }
    /**
     * @param {?} option
     * @return {?}
     */
    NzSelectService.prototype.clickOption = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        var _this = this;
        /** update listOfSelectedOption -> update listOfSelectedValue -> next listOfSelectedValue$ **/
        if (!option.nzDisabled) {
            this.updateActivatedOption(option);
            /** @type {?} */
            var listOfSelectedValue = tslib_1.__spread(this.listOfSelectedValue);
            if (this.isMultipleOrTags) {
                /** @type {?} */
                var targetValue = listOfSelectedValue.find((/**
                 * @param {?} o
                 * @return {?}
                 */
                function (o) { return _this.compareWith(o, option.nzValue); }));
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
    /**
     * @return {?}
     */
    NzSelectService.prototype.updateListOfCachedOption = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isSingleMode) {
            /** @type {?} */
            var selectedOption = this.listOfTemplateOption.find((/**
             * @param {?} o
             * @return {?}
             */
            function (o) {
                return _this.compareWith(o.nzValue, _this.listOfSelectedValue[0]);
            }));
            if (!isNil(selectedOption)) {
                this.listOfCachedSelectedOption = [selectedOption];
            }
        }
        else {
            /** @type {?} */
            var listOfCachedSelectedOption_1 = [];
            this.listOfSelectedValue.forEach((/**
             * @param {?} v
             * @return {?}
             */
            function (v) {
                /** @type {?} */
                var listOfMixedOption = tslib_1.__spread(_this.listOfTagAndTemplateOption, _this.listOfCachedSelectedOption);
                /** @type {?} */
                var option = listOfMixedOption.find((/**
                 * @param {?} o
                 * @return {?}
                 */
                function (o) { return _this.compareWith(o.nzValue, v); }));
                if (option) {
                    listOfCachedSelectedOption_1.push(option);
                }
            }));
            this.listOfCachedSelectedOption = listOfCachedSelectedOption_1;
        }
    };
    /**
     * @return {?}
     */
    NzSelectService.prototype.updateListOfTagOption = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isTagsMode) {
            /** @type {?} */
            var listOfMissValue = this.listOfSelectedValue.filter((/**
             * @param {?} value
             * @return {?}
             */
            function (value) { return !_this.listOfTemplateOption.find((/**
             * @param {?} o
             * @return {?}
             */
            function (o) { return _this.compareWith(o.nzValue, value); })); }));
            this.listOfTagOption = listOfMissValue.map((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                /** @type {?} */
                var cachedOption = _this.listOfCachedSelectedOption.find((/**
                 * @param {?} o
                 * @return {?}
                 */
                function (o) { return _this.compareWith(o.nzValue, value); }));
                if (cachedOption) {
                    return cachedOption;
                }
                else {
                    /** @type {?} */
                    var nzOptionComponent = new NzOptionComponent();
                    nzOptionComponent.nzValue = value;
                    nzOptionComponent.nzLabel = value;
                    return nzOptionComponent;
                }
            }));
            this.listOfTagAndTemplateOption = tslib_1.__spread(this.listOfTemplateOption.concat(this.listOfTagOption));
        }
        else {
            this.listOfTagAndTemplateOption = tslib_1.__spread(this.listOfTemplateOption);
        }
    };
    /**
     * @return {?}
     */
    NzSelectService.prototype.updateAddTagOption = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var isMatch = this.listOfTagAndTemplateOption.find((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.nzLabel === _this.searchValue; }));
        if (this.isTagsMode && this.searchValue && !isMatch) {
            /** @type {?} */
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
    /**
     * @return {?}
     */
    NzSelectService.prototype.updateListOfFilteredOption = /**
     * @return {?}
     */
    function () {
        this.updateAddTagOption();
        /** @type {?} */
        var listOfFilteredOption = new NzFilterOptionPipe().transform(this.listOfTagAndTemplateOption, this.searchValue, this.filterOption, this.serverSearch);
        this.listOfFilteredOption = this.addedTagOption
            ? tslib_1.__spread([this.addedTagOption], listOfFilteredOption) : tslib_1.__spread(listOfFilteredOption);
        this.isShowNotFound = !this.isTagsMode && !this.listOfFilteredOption.length;
    };
    /**
     * @return {?}
     */
    NzSelectService.prototype.clearInput = /**
     * @return {?}
     */
    function () {
        this.clearInput$.next();
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    NzSelectService.prototype.updateListOfSelectedValue = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    function (value, emit) {
        this.listOfSelectedValueWithEmit$.next({ value: value, emit: emit });
    };
    /**
     * @param {?} option
     * @return {?}
     */
    NzSelectService.prototype.updateActivatedOption = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.activatedOption$.next(option);
        this.activatedOption = option;
    };
    /**
     * @param {?} inputValue
     * @param {?} tokenSeparators
     * @return {?}
     */
    NzSelectService.prototype.tokenSeparate = /**
     * @param {?} inputValue
     * @param {?} tokenSeparators
     * @return {?}
     */
    function (inputValue, tokenSeparators) {
        /** auto tokenSeparators **/
        if (inputValue &&
            inputValue.length &&
            tokenSeparators.length &&
            this.isMultipleOrTags &&
            this.includesSeparators(inputValue, tokenSeparators)) {
            /** @type {?} */
            var listOfLabel = this.splitBySeparators(inputValue, tokenSeparators);
            this.updateSelectedValueByLabelList(listOfLabel);
            this.clearInput();
        }
    };
    /**
     * @param {?} str
     * @param {?} separators
     * @return {?}
     */
    NzSelectService.prototype.includesSeparators = /**
     * @param {?} str
     * @param {?} separators
     * @return {?}
     */
    function (str, separators) {
        // tslint:disable-next-line:prefer-for-of
        for (var i = 0; i < separators.length; ++i) {
            if (str.lastIndexOf(separators[i]) > 0) {
                return true;
            }
        }
        return false;
    };
    /**
     * @param {?} str
     * @param {?} separators
     * @return {?}
     */
    NzSelectService.prototype.splitBySeparators = /**
     * @param {?} str
     * @param {?} separators
     * @return {?}
     */
    function (str, separators) {
        /** @type {?} */
        var reg = new RegExp("[" + separators.join() + "]");
        /** @type {?} */
        var array = ((/** @type {?} */ (str))).split(reg).filter((/**
         * @param {?} token
         * @return {?}
         */
        function (token) { return token; }));
        return Array.from(new Set(array));
    };
    /**
     * @return {?}
     */
    NzSelectService.prototype.resetActivatedOptionIfNeeded = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var resetActivatedOption = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var activatedOption = _this.listOfFilteredOption.find((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                return _this.compareWith(item.nzValue, _this.listOfSelectedValue[0]);
            }));
            _this.updateActivatedOption(activatedOption || null);
        });
        if (this.activatedOption) {
            if (!this.listOfFilteredOption.find((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return _this.compareWith(item.nzValue, (/** @type {?} */ (_this.activatedOption)).nzValue); })) ||
                !this.listOfSelectedValue.find((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return _this.compareWith(item, (/** @type {?} */ (_this.activatedOption)).nzValue); }))) {
                resetActivatedOption();
            }
        }
        else {
            resetActivatedOption();
        }
    };
    /**
     * @param {?} listOfNzOptionComponent
     * @param {?} listOfNzOptionGroupComponent
     * @return {?}
     */
    NzSelectService.prototype.updateTemplateOption = /**
     * @param {?} listOfNzOptionComponent
     * @param {?} listOfNzOptionGroupComponent
     * @return {?}
     */
    function (listOfNzOptionComponent, listOfNzOptionGroupComponent) {
        this.mapOfTemplateOption$.next({ listOfNzOptionComponent: listOfNzOptionComponent, listOfNzOptionGroupComponent: listOfNzOptionGroupComponent });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzSelectService.prototype.updateSearchValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.searchValueRaw$.next(value);
    };
    /**
     * @param {?} listOfLabel
     * @return {?}
     */
    NzSelectService.prototype.updateSelectedValueByLabelList = /**
     * @param {?} listOfLabel
     * @return {?}
     */
    function (listOfLabel) {
        var _this = this;
        /** @type {?} */
        var listOfSelectedValue = tslib_1.__spread(this.listOfSelectedValue);
        /** @type {?} */
        var listOfMatchOptionValue = this.listOfTagAndTemplateOption
            .filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return listOfLabel.indexOf(item.nzLabel) !== -1; }))
            .map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.nzValue; }))
            .filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return !isNotNil(_this.listOfSelectedValue.find((/**
         * @param {?} v
         * @return {?}
         */
        function (v) { return _this.compareWith(v, item); }))); }));
        if (this.isMultipleMode) {
            this.updateListOfSelectedValue(tslib_1.__spread(listOfSelectedValue, listOfMatchOptionValue), true);
        }
        else {
            /** @type {?} */
            var listOfUnMatchOptionValue = listOfLabel.filter((/**
             * @param {?} label
             * @return {?}
             */
            function (label) { return _this.listOfTagAndTemplateOption.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.nzLabel; })).indexOf(label) === -1; }));
            this.updateListOfSelectedValue(tslib_1.__spread(listOfSelectedValue, listOfMatchOptionValue, listOfUnMatchOptionValue), true);
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzSelectService.prototype.onKeyDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        if (this.disabled) {
            return;
        }
        /** @type {?} */
        var keyCode = e.keyCode;
        /** @type {?} */
        var eventTarget = (/** @type {?} */ (e.target));
        /** @type {?} */
        var listOfFilteredOptionWithoutDisabledOrHidden = this.listOfFilteredOption.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return !item.nzDisabled && !item.nzHide; }));
        /** @type {?} */
        var activatedIndex = listOfFilteredOptionWithoutDisabledOrHidden.findIndex((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item === _this.activatedOption; }));
        switch (keyCode) {
            case UP_ARROW:
                e.preventDefault();
                /** @type {?} */
                var preIndex = activatedIndex > 0 ? activatedIndex - 1 : listOfFilteredOptionWithoutDisabledOrHidden.length - 1;
                this.updateActivatedOption(listOfFilteredOptionWithoutDisabledOrHidden[preIndex]);
                break;
            case DOWN_ARROW:
                e.preventDefault();
                /** @type {?} */
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
    // tslint:disable-next-line:no-any
    /**
     * @param {?} option
     * @return {?}
     */
    NzSelectService.prototype.removeValueFormSelected = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        var _this = this;
        if (this.disabled || option.nzDisabled) {
            return;
        }
        /** @type {?} */
        var listOfSelectedValue = this.listOfSelectedValue.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return !_this.compareWith(item, option.nzValue); }));
        this.updateListOfSelectedValue(listOfSelectedValue, true);
        this.clearInput();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzSelectService.prototype.setOpenState = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.openRaw$.next(value);
        this.open = value;
    };
    /**
     * @return {?}
     */
    NzSelectService.prototype.check = /**
     * @return {?}
     */
    function () {
        this.checkRaw$.next();
    };
    Object.defineProperty(NzSelectService.prototype, "isSingleMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this.mode === 'default';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectService.prototype, "isTagsMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this.mode === 'tags';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectService.prototype, "isMultipleMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this.mode === 'multiple';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectService.prototype, "isMultipleOrTags", {
        get: /**
         * @return {?}
         */
        function () {
            return this.mode === 'tags' || this.mode === 'multiple';
        },
        enumerable: true,
        configurable: true
    });
NzSelectService.ɵfac = function NzSelectService_Factory(t) { return new (t || NzSelectService)(); };
NzSelectService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: NzSelectService, factory: function (t) { return NzSelectService.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzSelectService, [{
        type: Injectable
    }], function () { return []; }, null); })();
    return NzSelectService;
}());
export { NzSelectService };
if (false) {
    /**
     * Input params *
     * @type {?}
     */
    NzSelectService.prototype.autoClearSearchValue;
    /** @type {?} */
    NzSelectService.prototype.serverSearch;
    /** @type {?} */
    NzSelectService.prototype.filterOption;
    /** @type {?} */
    NzSelectService.prototype.mode;
    /** @type {?} */
    NzSelectService.prototype.maxMultipleCount;
    /** @type {?} */
    NzSelectService.prototype.disabled;
    /** @type {?} */
    NzSelectService.prototype.compareWith;
    /**
     * selectedValueChanged should emit ngModelChange or not *
     * @type {?}
     * @private
     */
    NzSelectService.prototype.listOfSelectedValueWithEmit$;
    /**
     * ContentChildren Change *
     * @type {?}
     * @private
     */
    NzSelectService.prototype.mapOfTemplateOption$;
    /**
     * searchValue Change *
     * @type {?}
     * @private
     */
    NzSelectService.prototype.searchValueRaw$;
    /**
     * @type {?}
     * @private
     */
    NzSelectService.prototype.listOfFilteredOption;
    /**
     * @type {?}
     * @private
     */
    NzSelectService.prototype.openRaw$;
    /**
     * @type {?}
     * @private
     */
    NzSelectService.prototype.checkRaw$;
    /**
     * @type {?}
     * @private
     */
    NzSelectService.prototype.open;
    /** @type {?} */
    NzSelectService.prototype.clearInput$;
    /** @type {?} */
    NzSelectService.prototype.searchValue;
    /** @type {?} */
    NzSelectService.prototype.isShowNotFound;
    /**
     * animation event *
     * @type {?}
     */
    NzSelectService.prototype.animationEvent$;
    /**
     * open event *
     * @type {?}
     */
    NzSelectService.prototype.open$;
    /** @type {?} */
    NzSelectService.prototype.activatedOption;
    /** @type {?} */
    NzSelectService.prototype.activatedOption$;
    /** @type {?} */
    NzSelectService.prototype.listOfSelectedValue$;
    /** @type {?} */
    NzSelectService.prototype.modelChange$;
    /** @type {?} */
    NzSelectService.prototype.searchValue$;
    /** @type {?} */
    NzSelectService.prototype.listOfSelectedValue;
    /**
     * flat ViewChildren *
     * @type {?}
     */
    NzSelectService.prototype.listOfTemplateOption;
    /**
     * tag option *
     * @type {?}
     */
    NzSelectService.prototype.listOfTagOption;
    /**
     * tag option concat template option *
     * @type {?}
     */
    NzSelectService.prototype.listOfTagAndTemplateOption;
    /**
     * ViewChildren *
     * @type {?}
     */
    NzSelectService.prototype.listOfNzOptionComponent;
    /** @type {?} */
    NzSelectService.prototype.listOfNzOptionGroupComponent;
    /**
     * click or enter add tag option *
     * @type {?}
     */
    NzSelectService.prototype.addedTagOption;
    /**
     * display in top control *
     * @type {?}
     */
    NzSelectService.prototype.listOfCachedSelectedOption;
    /**
     * selected value or ViewChildren change *
     * @type {?}
     */
    NzSelectService.prototype.valueOrOption$;
    /** @type {?} */
    NzSelectService.prototype.check$;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2VsZWN0LnNlcnZpY2UuanMiLCJzb3VyY2VzIjpbIm5nOi9uZy16b3Jyby1hbnRkL3NlbGVjdC9uei1zZWxlY3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckYsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUdyRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsa0JBQWtCLEVBQWlCLE1BQU0sa0JBQWtCLENBQUM7O0FBRTFGO0lBQUE7UUFBQSxpQkFzWUM7Ozs7UUFuWUMseUJBQW9CLEdBQUcsSUFBSSxDQUFDO1FBQzVCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLGlCQUFZLEdBQWtCLG1CQUFtQixDQUFDO1FBQ2xELFNBQUksR0FBb0MsU0FBUyxDQUFDO1FBQ2xELHFCQUFnQixHQUFHLFFBQVEsQ0FBQztRQUM1QixhQUFRLEdBQUcsS0FBSyxDQUFDOztRQUVqQixnQkFBVzs7Ozs7UUFBRyxVQUFDLEVBQU8sRUFBRSxFQUFPLElBQUssT0FBQSxFQUFFLEtBQUssRUFBRSxFQUFULENBQVMsRUFBQzs7Ozs7UUFHdEMsaUNBQTRCLEdBQUcs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QUF5Qzs7Ozs7SUFFekMscURBQXFEOzs7OztJQUVyRCx5Q0FrQkU7O0lBQ0YsaUNBT2dCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBCQUNLU1BBQ0UsIERPV05fQVJST1csIEVOVEVSLCBTUEFDRSwgVEFCLCBVUF9BUlJPVyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgbWVyZ2UsIEJlaGF2aW9yU3ViamVjdCwgUmVwbGF5U3ViamVjdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBtYXAsIHNoYXJlLCBza2lwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBpc05pbCwgaXNOb3ROaWwgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpPcHRpb25Hcm91cENvbXBvbmVudCB9IGZyb20gJy4vbnotb3B0aW9uLWdyb3VwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56T3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9uei1vcHRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgZGVmYXVsdEZpbHRlck9wdGlvbiwgTnpGaWx0ZXJPcHRpb25QaXBlLCBURmlsdGVyT3B0aW9uIH0gZnJvbSAnLi9uei1vcHRpb24ucGlwZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOelNlbGVjdFNlcnZpY2Uge1xyXG4gIC8qKiBJbnB1dCBwYXJhbXMgKiovXHJcbiAgYXV0b0NsZWFyU2VhcmNoVmFsdWUgPSB0cnVlO1xyXG4gIHNlcnZlclNlYXJjaCA9IGZhbHNlO1xyXG4gIGZpbHRlck9wdGlvbjogVEZpbHRlck9wdGlvbiA9IGRlZmF1bHRGaWx0ZXJPcHRpb247XHJcbiAgbW9kZTogJ2RlZmF1bHQnIHwgJ211bHRpcGxlJyB8ICd0YWdzJyA9ICdkZWZhdWx0JztcclxuICBtYXhNdWx0aXBsZUNvdW50ID0gSW5maW5pdHk7XHJcbiAgZGlzYWJsZWQgPSBmYWxzZTtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgY29tcGFyZVdpdGggPSAobzE6IGFueSwgbzI6IGFueSkgPT4gbzEgPT09IG8yO1xyXG4gIC8qKiBzZWxlY3RlZFZhbHVlQ2hhbmdlZCBzaG91bGQgZW1pdCBuZ01vZGVsQ2hhbmdlIG9yIG5vdCAqKi9cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgcHJpdmF0ZSBsaXN0T2ZTZWxlY3RlZFZhbHVlV2l0aEVtaXQkID0gbmV3IEJlaGF2aW9yU3ViamVjdDx7IHZhbHVlOiBhbnlbXTsgZW1pdDogYm9vbGVhbiB9Pih7XHJcbiAgICB2YWx1ZTogW10sXHJcbiAgICBlbWl0OiBmYWxzZVxyXG4gIH0pO1xyXG4gIC8qKiBDb250ZW50Q2hpbGRyZW4gQ2hhbmdlICoqL1xyXG4gIHByaXZhdGUgbWFwT2ZUZW1wbGF0ZU9wdGlvbiQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHtcclxuICAgIGxpc3RPZk56T3B0aW9uQ29tcG9uZW50OiBOek9wdGlvbkNvbXBvbmVudFtdO1xyXG4gICAgbGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudDogTnpPcHRpb25Hcm91cENvbXBvbmVudFtdO1xyXG4gIH0+KHtcclxuICAgIGxpc3RPZk56T3B0aW9uQ29tcG9uZW50OiBbXSxcclxuICAgIGxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQ6IFtdXHJcbiAgfSk7XHJcbiAgLyoqIHNlYXJjaFZhbHVlIENoYW5nZSAqKi9cclxuICBwcml2YXRlIHNlYXJjaFZhbHVlUmF3JCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPignJyk7XHJcbiAgcHJpdmF0ZSBsaXN0T2ZGaWx0ZXJlZE9wdGlvbjogTnpPcHRpb25Db21wb25lbnRbXSA9IFtdO1xyXG4gIHByaXZhdGUgb3BlblJhdyQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG4gIHByaXZhdGUgY2hlY2tSYXckID0gbmV3IFN1YmplY3QoKTtcclxuICBwcml2YXRlIG9wZW4gPSBmYWxzZTtcclxuICBjbGVhcklucHV0JCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcbiAgc2VhcmNoVmFsdWUgPSAnJztcclxuICBpc1Nob3dOb3RGb3VuZCA9IGZhbHNlO1xyXG4gIC8qKiBhbmltYXRpb24gZXZlbnQgKiovXHJcbiAgYW5pbWF0aW9uRXZlbnQkID0gbmV3IFN1YmplY3QoKTtcclxuICAvKiogb3BlbiBldmVudCAqKi9cclxuICBvcGVuJCA9IHRoaXMub3BlblJhdyQucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcclxuICBhY3RpdmF0ZWRPcHRpb246IE56T3B0aW9uQ29tcG9uZW50IHwgbnVsbDtcclxuICBhY3RpdmF0ZWRPcHRpb24kID0gbmV3IFJlcGxheVN1YmplY3Q8TnpPcHRpb25Db21wb25lbnQgfCBudWxsPigxKTtcclxuICBsaXN0T2ZTZWxlY3RlZFZhbHVlJCA9IHRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZVdpdGhFbWl0JC5waXBlKG1hcChkYXRhID0+IGRhdGEudmFsdWUpKTtcclxuICBtb2RlbENoYW5nZSQgPSB0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWVXaXRoRW1pdCQucGlwZShcclxuICAgIGZpbHRlcihpdGVtID0+IGl0ZW0uZW1pdCksXHJcbiAgICBtYXAoZGF0YSA9PiB7XHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkTGlzdCA9IGRhdGEudmFsdWU7XHJcbiAgICAgIGxldCBtb2RlbFZhbHVlOiBhbnlbXSB8IG51bGwgPSBudWxsOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxyXG4gICAgICBpZiAodGhpcy5pc1NpbmdsZU1vZGUpIHtcclxuICAgICAgICBpZiAoc2VsZWN0ZWRMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgbW9kZWxWYWx1ZSA9IHNlbGVjdGVkTGlzdFswXTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbW9kZWxWYWx1ZSA9IHNlbGVjdGVkTGlzdDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbW9kZWxWYWx1ZTtcclxuICAgIH0pXHJcbiAgKTtcclxuICBzZWFyY2hWYWx1ZSQgPSB0aGlzLnNlYXJjaFZhbHVlUmF3JC5waXBlKFxyXG4gICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcclxuICAgIHNraXAoMSksXHJcbiAgICBzaGFyZSgpLFxyXG4gICAgdGFwKHZhbHVlID0+IHtcclxuICAgICAgdGhpcy5zZWFyY2hWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUFjdGl2YXRlZE9wdGlvbih0aGlzLmxpc3RPZkZpbHRlcmVkT3B0aW9uWzBdKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnVwZGF0ZUxpc3RPZkZpbHRlcmVkT3B0aW9uKCk7XHJcbiAgICB9KVxyXG4gICk7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIGxpc3RPZlNlbGVjdGVkVmFsdWU6IGFueVtdID0gW107XHJcbiAgLyoqIGZsYXQgVmlld0NoaWxkcmVuICoqL1xyXG4gIGxpc3RPZlRlbXBsYXRlT3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudFtdID0gW107XHJcbiAgLyoqIHRhZyBvcHRpb24gKiovXHJcbiAgbGlzdE9mVGFnT3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudFtdID0gW107XHJcbiAgLyoqIHRhZyBvcHRpb24gY29uY2F0IHRlbXBsYXRlIG9wdGlvbiAqKi9cclxuICBsaXN0T2ZUYWdBbmRUZW1wbGF0ZU9wdGlvbjogTnpPcHRpb25Db21wb25lbnRbXSA9IFtdO1xyXG4gIC8qKiBWaWV3Q2hpbGRyZW4gKiovXHJcbiAgbGlzdE9mTnpPcHRpb25Db21wb25lbnQ6IE56T3B0aW9uQ29tcG9uZW50W10gPSBbXTtcclxuICBsaXN0T2ZOek9wdGlvbkdyb3VwQ29tcG9uZW50OiBOek9wdGlvbkdyb3VwQ29tcG9uZW50W10gPSBbXTtcclxuICAvKiogY2xpY2sgb3IgZW50ZXIgYWRkIHRhZyBvcHRpb24gKiovXHJcbiAgYWRkZWRUYWdPcHRpb246IE56T3B0aW9uQ29tcG9uZW50IHwgbnVsbDtcclxuICAvKiogZGlzcGxheSBpbiB0b3AgY29udHJvbCAqKi9cclxuICBsaXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbjogTnpPcHRpb25Db21wb25lbnRbXSA9IFtdO1xyXG4gIC8qKiBzZWxlY3RlZCB2YWx1ZSBvciBWaWV3Q2hpbGRyZW4gY2hhbmdlICoqL1xyXG4gIHZhbHVlT3JPcHRpb24kID0gY29tYmluZUxhdGVzdChbdGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlJCwgdGhpcy5tYXBPZlRlbXBsYXRlT3B0aW9uJF0pLnBpcGUoXHJcbiAgICB0YXAoZGF0YSA9PiB7XHJcbiAgICAgIGNvbnN0IFtsaXN0T2ZTZWxlY3RlZFZhbHVlLCBtYXBPZlRlbXBsYXRlT3B0aW9uXSA9IGRhdGE7XHJcbiAgICAgIHRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZSA9IGxpc3RPZlNlbGVjdGVkVmFsdWU7XHJcbiAgICAgIHRoaXMubGlzdE9mTnpPcHRpb25Db21wb25lbnQgPSBtYXBPZlRlbXBsYXRlT3B0aW9uLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50O1xyXG4gICAgICB0aGlzLmxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQgPSBtYXBPZlRlbXBsYXRlT3B0aW9uLmxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQ7XHJcbiAgICAgIHRoaXMubGlzdE9mVGVtcGxhdGVPcHRpb24gPSB0aGlzLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50LmNvbmNhdChcclxuICAgICAgICB0aGlzLmxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQucmVkdWNlKFxyXG4gICAgICAgICAgKHByZSwgY3VyKSA9PiBbLi4ucHJlLCAuLi5jdXIubGlzdE9mTnpPcHRpb25Db21wb25lbnQudG9BcnJheSgpXSxcclxuICAgICAgICAgIFtdIGFzIE56T3B0aW9uQ29tcG9uZW50W11cclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMudXBkYXRlTGlzdE9mVGFnT3B0aW9uKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlTGlzdE9mRmlsdGVyZWRPcHRpb24oKTtcclxuICAgICAgdGhpcy5yZXNldEFjdGl2YXRlZE9wdGlvbklmTmVlZGVkKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlTGlzdE9mQ2FjaGVkT3B0aW9uKCk7XHJcbiAgICB9KSxcclxuICAgIHNoYXJlKClcclxuICApO1xyXG4gIGNoZWNrJCA9IG1lcmdlKFxyXG4gICAgdGhpcy5jaGVja1JhdyQsXHJcbiAgICB0aGlzLnZhbHVlT3JPcHRpb24kLFxyXG4gICAgdGhpcy5zZWFyY2hWYWx1ZSQsXHJcbiAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbiQsXHJcbiAgICB0aGlzLm9wZW4kLFxyXG4gICAgdGhpcy5tb2RlbENoYW5nZSRcclxuICApLnBpcGUoc2hhcmUoKSk7XHJcblxyXG4gIGNsaWNrT3B0aW9uKG9wdGlvbjogTnpPcHRpb25Db21wb25lbnQpOiB2b2lkIHtcclxuICAgIC8qKiB1cGRhdGUgbGlzdE9mU2VsZWN0ZWRPcHRpb24gLT4gdXBkYXRlIGxpc3RPZlNlbGVjdGVkVmFsdWUgLT4gbmV4dCBsaXN0T2ZTZWxlY3RlZFZhbHVlJCAqKi9cclxuICAgIGlmICghb3B0aW9uLm56RGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy51cGRhdGVBY3RpdmF0ZWRPcHRpb24ob3B0aW9uKTtcclxuICAgICAgbGV0IGxpc3RPZlNlbGVjdGVkVmFsdWUgPSBbLi4udGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlXTtcclxuICAgICAgaWYgKHRoaXMuaXNNdWx0aXBsZU9yVGFncykge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldFZhbHVlID0gbGlzdE9mU2VsZWN0ZWRWYWx1ZS5maW5kKG8gPT4gdGhpcy5jb21wYXJlV2l0aChvLCBvcHRpb24ubnpWYWx1ZSkpO1xyXG4gICAgICAgIGlmIChpc05vdE5pbCh0YXJnZXRWYWx1ZSkpIHtcclxuICAgICAgICAgIGxpc3RPZlNlbGVjdGVkVmFsdWUuc3BsaWNlKGxpc3RPZlNlbGVjdGVkVmFsdWUuaW5kZXhPZih0YXJnZXRWYWx1ZSksIDEpO1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVMaXN0T2ZTZWxlY3RlZFZhbHVlKGxpc3RPZlNlbGVjdGVkVmFsdWUsIHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobGlzdE9mU2VsZWN0ZWRWYWx1ZS5sZW5ndGggPCB0aGlzLm1heE11bHRpcGxlQ291bnQpIHtcclxuICAgICAgICAgIGxpc3RPZlNlbGVjdGVkVmFsdWUucHVzaChvcHRpb24ubnpWYWx1ZSk7XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZUxpc3RPZlNlbGVjdGVkVmFsdWUobGlzdE9mU2VsZWN0ZWRWYWx1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLmNvbXBhcmVXaXRoKGxpc3RPZlNlbGVjdGVkVmFsdWVbMF0sIG9wdGlvbi5uelZhbHVlKSkge1xyXG4gICAgICAgIGxpc3RPZlNlbGVjdGVkVmFsdWUgPSBbb3B0aW9uLm56VmFsdWVdO1xyXG4gICAgICAgIHRoaXMudXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZShsaXN0T2ZTZWxlY3RlZFZhbHVlLCB0cnVlKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5pc1NpbmdsZU1vZGUpIHtcclxuICAgICAgICB0aGlzLnNldE9wZW5TdGF0ZShmYWxzZSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5hdXRvQ2xlYXJTZWFyY2hWYWx1ZSkge1xyXG4gICAgICAgIHRoaXMuY2xlYXJJbnB1dCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVMaXN0T2ZDYWNoZWRPcHRpb24oKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc1NpbmdsZU1vZGUpIHtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSB0aGlzLmxpc3RPZlRlbXBsYXRlT3B0aW9uLmZpbmQobyA9PlxyXG4gICAgICAgIHRoaXMuY29tcGFyZVdpdGgoby5uelZhbHVlLCB0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWVbMF0pXHJcbiAgICAgICk7XHJcbiAgICAgIGlmICghaXNOaWwoc2VsZWN0ZWRPcHRpb24pKSB7XHJcbiAgICAgICAgdGhpcy5saXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbiA9IFtzZWxlY3RlZE9wdGlvbl07XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudFtdID0gW107XHJcbiAgICAgIHRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZS5mb3JFYWNoKHYgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxpc3RPZk1peGVkT3B0aW9uID0gWy4uLnRoaXMubGlzdE9mVGFnQW5kVGVtcGxhdGVPcHRpb24sIC4uLnRoaXMubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb25dO1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGxpc3RPZk1peGVkT3B0aW9uLmZpbmQobyA9PiB0aGlzLmNvbXBhcmVXaXRoKG8ubnpWYWx1ZSwgdikpO1xyXG4gICAgICAgIGlmIChvcHRpb24pIHtcclxuICAgICAgICAgIGxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uLnB1c2gob3B0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uID0gbGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb247XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVMaXN0T2ZUYWdPcHRpb24oKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc1RhZ3NNb2RlKSB7XHJcbiAgICAgIGNvbnN0IGxpc3RPZk1pc3NWYWx1ZSA9IHRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZS5maWx0ZXIoXHJcbiAgICAgICAgdmFsdWUgPT4gIXRoaXMubGlzdE9mVGVtcGxhdGVPcHRpb24uZmluZChvID0+IHRoaXMuY29tcGFyZVdpdGgoby5uelZhbHVlLCB2YWx1ZSkpXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMubGlzdE9mVGFnT3B0aW9uID0gbGlzdE9mTWlzc1ZhbHVlLm1hcCh2YWx1ZSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2FjaGVkT3B0aW9uID0gdGhpcy5saXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbi5maW5kKG8gPT4gdGhpcy5jb21wYXJlV2l0aChvLm56VmFsdWUsIHZhbHVlKSk7XHJcbiAgICAgICAgaWYgKGNhY2hlZE9wdGlvbikge1xyXG4gICAgICAgICAgcmV0dXJuIGNhY2hlZE9wdGlvbjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgbnpPcHRpb25Db21wb25lbnQgPSBuZXcgTnpPcHRpb25Db21wb25lbnQoKTtcclxuICAgICAgICAgIG56T3B0aW9uQ29tcG9uZW50Lm56VmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICAgIG56T3B0aW9uQ29tcG9uZW50Lm56TGFiZWwgPSB2YWx1ZTtcclxuICAgICAgICAgIHJldHVybiBuek9wdGlvbkNvbXBvbmVudDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmxpc3RPZlRhZ0FuZFRlbXBsYXRlT3B0aW9uID0gWy4uLnRoaXMubGlzdE9mVGVtcGxhdGVPcHRpb24uY29uY2F0KHRoaXMubGlzdE9mVGFnT3B0aW9uKV07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmxpc3RPZlRhZ0FuZFRlbXBsYXRlT3B0aW9uID0gWy4uLnRoaXMubGlzdE9mVGVtcGxhdGVPcHRpb25dO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlQWRkVGFnT3B0aW9uKCk6IHZvaWQge1xyXG4gICAgY29uc3QgaXNNYXRjaCA9IHRoaXMubGlzdE9mVGFnQW5kVGVtcGxhdGVPcHRpb24uZmluZChpdGVtID0+IGl0ZW0ubnpMYWJlbCA9PT0gdGhpcy5zZWFyY2hWYWx1ZSk7XHJcbiAgICBpZiAodGhpcy5pc1RhZ3NNb2RlICYmIHRoaXMuc2VhcmNoVmFsdWUgJiYgIWlzTWF0Y2gpIHtcclxuICAgICAgY29uc3Qgb3B0aW9uID0gbmV3IE56T3B0aW9uQ29tcG9uZW50KCk7XHJcbiAgICAgIG9wdGlvbi5uelZhbHVlID0gdGhpcy5zZWFyY2hWYWx1ZTtcclxuICAgICAgb3B0aW9uLm56TGFiZWwgPSB0aGlzLnNlYXJjaFZhbHVlO1xyXG4gICAgICB0aGlzLmFkZGVkVGFnT3B0aW9uID0gb3B0aW9uO1xyXG4gICAgICB0aGlzLnVwZGF0ZUFjdGl2YXRlZE9wdGlvbihvcHRpb24pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5hZGRlZFRhZ09wdGlvbiA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVMaXN0T2ZGaWx0ZXJlZE9wdGlvbigpOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlQWRkVGFnT3B0aW9uKCk7XHJcbiAgICBjb25zdCBsaXN0T2ZGaWx0ZXJlZE9wdGlvbiA9IG5ldyBOekZpbHRlck9wdGlvblBpcGUoKS50cmFuc2Zvcm0oXHJcbiAgICAgIHRoaXMubGlzdE9mVGFnQW5kVGVtcGxhdGVPcHRpb24sXHJcbiAgICAgIHRoaXMuc2VhcmNoVmFsdWUsXHJcbiAgICAgIHRoaXMuZmlsdGVyT3B0aW9uLFxyXG4gICAgICB0aGlzLnNlcnZlclNlYXJjaFxyXG4gICAgKTtcclxuICAgIHRoaXMubGlzdE9mRmlsdGVyZWRPcHRpb24gPSB0aGlzLmFkZGVkVGFnT3B0aW9uXHJcbiAgICAgID8gW3RoaXMuYWRkZWRUYWdPcHRpb24sIC4uLmxpc3RPZkZpbHRlcmVkT3B0aW9uXVxyXG4gICAgICA6IFsuLi5saXN0T2ZGaWx0ZXJlZE9wdGlvbl07XHJcbiAgICB0aGlzLmlzU2hvd05vdEZvdW5kID0gIXRoaXMuaXNUYWdzTW9kZSAmJiAhdGhpcy5saXN0T2ZGaWx0ZXJlZE9wdGlvbi5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICBjbGVhcklucHV0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jbGVhcklucHV0JC5uZXh0KCk7XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgdXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZSh2YWx1ZTogYW55W10sIGVtaXQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZVdpdGhFbWl0JC5uZXh0KHsgdmFsdWUsIGVtaXQgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVBY3RpdmF0ZWRPcHRpb24ob3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudCB8IG51bGwpOiB2b2lkIHtcclxuICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9uJC5uZXh0KG9wdGlvbik7XHJcbiAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbiA9IG9wdGlvbjtcclxuICB9XHJcblxyXG4gIHRva2VuU2VwYXJhdGUoaW5wdXRWYWx1ZTogc3RyaW5nLCB0b2tlblNlcGFyYXRvcnM6IHN0cmluZ1tdKTogdm9pZCB7XHJcbiAgICAvKiogYXV0byB0b2tlblNlcGFyYXRvcnMgKiovXHJcbiAgICBpZiAoXHJcbiAgICAgIGlucHV0VmFsdWUgJiZcclxuICAgICAgaW5wdXRWYWx1ZS5sZW5ndGggJiZcclxuICAgICAgdG9rZW5TZXBhcmF0b3JzLmxlbmd0aCAmJlxyXG4gICAgICB0aGlzLmlzTXVsdGlwbGVPclRhZ3MgJiZcclxuICAgICAgdGhpcy5pbmNsdWRlc1NlcGFyYXRvcnMoaW5wdXRWYWx1ZSwgdG9rZW5TZXBhcmF0b3JzKVxyXG4gICAgKSB7XHJcbiAgICAgIGNvbnN0IGxpc3RPZkxhYmVsID0gdGhpcy5zcGxpdEJ5U2VwYXJhdG9ycyhpbnB1dFZhbHVlLCB0b2tlblNlcGFyYXRvcnMpO1xyXG4gICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkVmFsdWVCeUxhYmVsTGlzdChsaXN0T2ZMYWJlbCk7XHJcbiAgICAgIHRoaXMuY2xlYXJJbnB1dCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5jbHVkZXNTZXBhcmF0b3JzKHN0cjogc3RyaW5nIHwgc3RyaW5nW10sIHNlcGFyYXRvcnM6IHN0cmluZ1tdKTogYm9vbGVhbiB7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cHJlZmVyLWZvci1vZlxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXBhcmF0b3JzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgIGlmIChzdHIubGFzdEluZGV4T2Yoc2VwYXJhdG9yc1tpXSkgPiAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHNwbGl0QnlTZXBhcmF0b3JzKHN0cjogc3RyaW5nIHwgc3RyaW5nW10sIHNlcGFyYXRvcnM6IHN0cmluZ1tdKTogc3RyaW5nW10ge1xyXG4gICAgY29uc3QgcmVnID0gbmV3IFJlZ0V4cChgWyR7c2VwYXJhdG9ycy5qb2luKCl9XWApO1xyXG4gICAgY29uc3QgYXJyYXkgPSAoc3RyIGFzIHN0cmluZykuc3BsaXQocmVnKS5maWx0ZXIodG9rZW4gPT4gdG9rZW4pO1xyXG4gICAgcmV0dXJuIEFycmF5LmZyb20obmV3IFNldChhcnJheSkpO1xyXG4gIH1cclxuXHJcbiAgcmVzZXRBY3RpdmF0ZWRPcHRpb25JZk5lZWRlZCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHJlc2V0QWN0aXZhdGVkT3B0aW9uID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBhY3RpdmF0ZWRPcHRpb24gPSB0aGlzLmxpc3RPZkZpbHRlcmVkT3B0aW9uLmZpbmQoaXRlbSA9PlxyXG4gICAgICAgIHRoaXMuY29tcGFyZVdpdGgoaXRlbS5uelZhbHVlLCB0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWVbMF0pXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMudXBkYXRlQWN0aXZhdGVkT3B0aW9uKGFjdGl2YXRlZE9wdGlvbiB8fCBudWxsKTtcclxuICAgIH07XHJcbiAgICBpZiAodGhpcy5hY3RpdmF0ZWRPcHRpb24pIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgICF0aGlzLmxpc3RPZkZpbHRlcmVkT3B0aW9uLmZpbmQoaXRlbSA9PiB0aGlzLmNvbXBhcmVXaXRoKGl0ZW0ubnpWYWx1ZSwgdGhpcy5hY3RpdmF0ZWRPcHRpb24hLm56VmFsdWUpKSB8fFxyXG4gICAgICAgICF0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWUuZmluZChpdGVtID0+IHRoaXMuY29tcGFyZVdpdGgoaXRlbSwgdGhpcy5hY3RpdmF0ZWRPcHRpb24hLm56VmFsdWUpKVxyXG4gICAgICApIHtcclxuICAgICAgICByZXNldEFjdGl2YXRlZE9wdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXNldEFjdGl2YXRlZE9wdGlvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlVGVtcGxhdGVPcHRpb24oXHJcbiAgICBsaXN0T2ZOek9wdGlvbkNvbXBvbmVudDogTnpPcHRpb25Db21wb25lbnRbXSxcclxuICAgIGxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQ6IE56T3B0aW9uR3JvdXBDb21wb25lbnRbXVxyXG4gICk6IHZvaWQge1xyXG4gICAgdGhpcy5tYXBPZlRlbXBsYXRlT3B0aW9uJC5uZXh0KHsgbGlzdE9mTnpPcHRpb25Db21wb25lbnQsIGxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVTZWFyY2hWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLnNlYXJjaFZhbHVlUmF3JC5uZXh0KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVNlbGVjdGVkVmFsdWVCeUxhYmVsTGlzdChsaXN0T2ZMYWJlbDogc3RyaW5nW10pOiB2b2lkIHtcclxuICAgIGNvbnN0IGxpc3RPZlNlbGVjdGVkVmFsdWUgPSBbLi4udGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlXTtcclxuICAgIGNvbnN0IGxpc3RPZk1hdGNoT3B0aW9uVmFsdWUgPSB0aGlzLmxpc3RPZlRhZ0FuZFRlbXBsYXRlT3B0aW9uXHJcbiAgICAgIC5maWx0ZXIoaXRlbSA9PiBsaXN0T2ZMYWJlbC5pbmRleE9mKGl0ZW0ubnpMYWJlbCkgIT09IC0xKVxyXG4gICAgICAubWFwKGl0ZW0gPT4gaXRlbS5uelZhbHVlKVxyXG4gICAgICAuZmlsdGVyKGl0ZW0gPT4gIWlzTm90TmlsKHRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZS5maW5kKHYgPT4gdGhpcy5jb21wYXJlV2l0aCh2LCBpdGVtKSkpKTtcclxuICAgIGlmICh0aGlzLmlzTXVsdGlwbGVNb2RlKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZShbLi4ubGlzdE9mU2VsZWN0ZWRWYWx1ZSwgLi4ubGlzdE9mTWF0Y2hPcHRpb25WYWx1ZV0sIHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgbGlzdE9mVW5NYXRjaE9wdGlvblZhbHVlID0gbGlzdE9mTGFiZWwuZmlsdGVyKFxyXG4gICAgICAgIGxhYmVsID0+IHRoaXMubGlzdE9mVGFnQW5kVGVtcGxhdGVPcHRpb24ubWFwKGl0ZW0gPT4gaXRlbS5uekxhYmVsKS5pbmRleE9mKGxhYmVsKSA9PT0gLTFcclxuICAgICAgKTtcclxuICAgICAgdGhpcy51cGRhdGVMaXN0T2ZTZWxlY3RlZFZhbHVlKFxyXG4gICAgICAgIFsuLi5saXN0T2ZTZWxlY3RlZFZhbHVlLCAuLi5saXN0T2ZNYXRjaE9wdGlvblZhbHVlLCAuLi5saXN0T2ZVbk1hdGNoT3B0aW9uVmFsdWVdLFxyXG4gICAgICAgIHRydWVcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uS2V5RG93bihlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBrZXlDb2RlID0gZS5rZXlDb2RlO1xyXG4gICAgY29uc3QgZXZlbnRUYXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgY29uc3QgbGlzdE9mRmlsdGVyZWRPcHRpb25XaXRob3V0RGlzYWJsZWRPckhpZGRlbiA9IHRoaXMubGlzdE9mRmlsdGVyZWRPcHRpb24uZmlsdGVyKFxyXG4gICAgICBpdGVtID0+ICFpdGVtLm56RGlzYWJsZWQgJiYgIWl0ZW0ubnpIaWRlXHJcbiAgICApO1xyXG4gICAgY29uc3QgYWN0aXZhdGVkSW5kZXggPSBsaXN0T2ZGaWx0ZXJlZE9wdGlvbldpdGhvdXREaXNhYmxlZE9ySGlkZGVuLmZpbmRJbmRleChpdGVtID0+IGl0ZW0gPT09IHRoaXMuYWN0aXZhdGVkT3B0aW9uKTtcclxuICAgIHN3aXRjaCAoa2V5Q29kZSkge1xyXG4gICAgICBjYXNlIFVQX0FSUk9XOlxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBwcmVJbmRleCA9XHJcbiAgICAgICAgICBhY3RpdmF0ZWRJbmRleCA+IDAgPyBhY3RpdmF0ZWRJbmRleCAtIDEgOiBsaXN0T2ZGaWx0ZXJlZE9wdGlvbldpdGhvdXREaXNhYmxlZE9ySGlkZGVuLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgdGhpcy51cGRhdGVBY3RpdmF0ZWRPcHRpb24obGlzdE9mRmlsdGVyZWRPcHRpb25XaXRob3V0RGlzYWJsZWRPckhpZGRlbltwcmVJbmRleF0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIERPV05fQVJST1c6XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IG5leHRJbmRleCA9XHJcbiAgICAgICAgICBhY3RpdmF0ZWRJbmRleCA8IGxpc3RPZkZpbHRlcmVkT3B0aW9uV2l0aG91dERpc2FibGVkT3JIaWRkZW4ubGVuZ3RoIC0gMSA/IGFjdGl2YXRlZEluZGV4ICsgMSA6IDA7XHJcbiAgICAgICAgdGhpcy51cGRhdGVBY3RpdmF0ZWRPcHRpb24obGlzdE9mRmlsdGVyZWRPcHRpb25XaXRob3V0RGlzYWJsZWRPckhpZGRlbltuZXh0SW5kZXhdKTtcclxuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgIXRoaXMub3Blbikge1xyXG4gICAgICAgICAgdGhpcy5zZXRPcGVuU3RhdGUodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEVOVEVSOlxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAodGhpcy5vcGVuKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5hY3RpdmF0ZWRPcHRpb24gJiYgIXRoaXMuYWN0aXZhdGVkT3B0aW9uLm56RGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5jbGlja09wdGlvbih0aGlzLmFjdGl2YXRlZE9wdGlvbik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2V0T3BlblN0YXRlKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBCQUNLU1BBQ0U6XHJcbiAgICAgICAgaWYgKHRoaXMuaXNNdWx0aXBsZU9yVGFncyAmJiAhZXZlbnRUYXJnZXQudmFsdWUgJiYgdGhpcy5saXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbi5sZW5ndGgpIHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIHRoaXMucmVtb3ZlVmFsdWVGb3JtU2VsZWN0ZWQodGhpcy5saXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvblt0aGlzLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uLmxlbmd0aCAtIDFdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgU1BBQ0U6XHJcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkICYmICF0aGlzLm9wZW4pIHtcclxuICAgICAgICAgIHRoaXMuc2V0T3BlblN0YXRlKHRydWUpO1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBUQUI6XHJcbiAgICAgICAgdGhpcy5zZXRPcGVuU3RhdGUoZmFsc2UpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHJlbW92ZVZhbHVlRm9ybVNlbGVjdGVkKG9wdGlvbjogTnpPcHRpb25Db21wb25lbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IG9wdGlvbi5uekRpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGxpc3RPZlNlbGVjdGVkVmFsdWUgPSB0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWUuZmlsdGVyKGl0ZW0gPT4gIXRoaXMuY29tcGFyZVdpdGgoaXRlbSwgb3B0aW9uLm56VmFsdWUpKTtcclxuICAgIHRoaXMudXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZShsaXN0T2ZTZWxlY3RlZFZhbHVlLCB0cnVlKTtcclxuICAgIHRoaXMuY2xlYXJJbnB1dCgpO1xyXG4gIH1cclxuXHJcbiAgc2V0T3BlblN0YXRlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLm9wZW5SYXckLm5leHQodmFsdWUpO1xyXG4gICAgdGhpcy5vcGVuID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBjaGVjaygpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hlY2tSYXckLm5leHQoKTtcclxuICB9XHJcblxyXG4gIGdldCBpc1NpbmdsZU1vZGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5tb2RlID09PSAnZGVmYXVsdCc7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNUYWdzTW9kZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm1vZGUgPT09ICd0YWdzJztcclxuICB9XHJcblxyXG4gIGdldCBpc011bHRpcGxlTW9kZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm1vZGUgPT09ICdtdWx0aXBsZSc7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNNdWx0aXBsZU9yVGFncygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm1vZGUgPT09ICd0YWdzJyB8fCB0aGlzLm1vZGUgPT09ICdtdWx0aXBsZSc7XHJcbiAgfVxyXG59XHJcbiJdfQ==