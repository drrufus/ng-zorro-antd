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
import { BACKSPACE, DOWN_ARROW, ENTER, SPACE, TAB, UP_ARROW } from '@angular/cdk/keycodes';
import { Injectable } from '@angular/core';
import { combineLatest, merge, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { distinctUntilChanged, filter, map, share, skip, tap } from 'rxjs/operators';
import { isNil, isNotNil } from 'ng-zorro-antd/core';
import { NzOptionComponent } from './nz-option.component';
import { defaultFilterOption, NzFilterOptionPipe } from './nz-option.pipe';
import * as ɵngcc0 from '@angular/core';
export class NzSelectService {
    constructor() {
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
        (o1, o2) => o1 === o2);
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
        data => data.value)));
        this.modelChange$ = this.listOfSelectedValueWithEmit$.pipe(filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item.emit)), map((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            /** @type {?} */
            const selectedList = data.value;
            /** @type {?} */
            let modelValue = null;
            if (this.isSingleMode) {
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
        value => {
            this.searchValue = value;
            if (value) {
                this.updateActivatedOption(this.listOfFilteredOption[0]);
            }
            this.updateListOfFilteredOption();
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
        data => {
            const [listOfSelectedValue, mapOfTemplateOption] = data;
            this.listOfSelectedValue = listOfSelectedValue;
            this.listOfNzOptionComponent = mapOfTemplateOption.listOfNzOptionComponent;
            this.listOfNzOptionGroupComponent = mapOfTemplateOption.listOfNzOptionGroupComponent;
            this.listOfTemplateOption = this.listOfNzOptionComponent.concat(this.listOfNzOptionGroupComponent.reduce((/**
             * @param {?} pre
             * @param {?} cur
             * @return {?}
             */
            (pre, cur) => [...pre, ...cur.listOfNzOptionComponent.toArray()]), (/** @type {?} */ ([]))));
            this.updateListOfTagOption();
            this.updateListOfFilteredOption();
            this.resetActivatedOptionIfNeeded();
            this.updateListOfCachedOption();
        })), share());
        this.check$ = merge(this.checkRaw$, this.valueOrOption$, this.searchValue$, this.activatedOption$, this.open$, this.modelChange$).pipe(share());
    }
    /**
     * @param {?} option
     * @return {?}
     */
    clickOption(option) {
        /** update listOfSelectedOption -> update listOfSelectedValue -> next listOfSelectedValue$ **/
        if (!option.nzDisabled) {
            this.updateActivatedOption(option);
            /** @type {?} */
            let listOfSelectedValue = [...this.listOfSelectedValue];
            if (this.isMultipleOrTags) {
                /** @type {?} */
                const targetValue = listOfSelectedValue.find((/**
                 * @param {?} o
                 * @return {?}
                 */
                o => this.compareWith(o, option.nzValue)));
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
    }
    /**
     * @return {?}
     */
    updateListOfCachedOption() {
        if (this.isSingleMode) {
            /** @type {?} */
            const selectedOption = this.listOfTemplateOption.find((/**
             * @param {?} o
             * @return {?}
             */
            o => this.compareWith(o.nzValue, this.listOfSelectedValue[0])));
            if (!isNil(selectedOption)) {
                this.listOfCachedSelectedOption = [selectedOption];
            }
        }
        else {
            /** @type {?} */
            const listOfCachedSelectedOption = [];
            this.listOfSelectedValue.forEach((/**
             * @param {?} v
             * @return {?}
             */
            v => {
                /** @type {?} */
                const listOfMixedOption = [...this.listOfTagAndTemplateOption, ...this.listOfCachedSelectedOption];
                /** @type {?} */
                const option = listOfMixedOption.find((/**
                 * @param {?} o
                 * @return {?}
                 */
                o => this.compareWith(o.nzValue, v)));
                if (option) {
                    listOfCachedSelectedOption.push(option);
                }
            }));
            this.listOfCachedSelectedOption = listOfCachedSelectedOption;
        }
    }
    /**
     * @return {?}
     */
    updateListOfTagOption() {
        if (this.isTagsMode) {
            /** @type {?} */
            const listOfMissValue = this.listOfSelectedValue.filter((/**
             * @param {?} value
             * @return {?}
             */
            value => !this.listOfTemplateOption.find((/**
             * @param {?} o
             * @return {?}
             */
            o => this.compareWith(o.nzValue, value)))));
            this.listOfTagOption = listOfMissValue.map((/**
             * @param {?} value
             * @return {?}
             */
            value => {
                /** @type {?} */
                const cachedOption = this.listOfCachedSelectedOption.find((/**
                 * @param {?} o
                 * @return {?}
                 */
                o => this.compareWith(o.nzValue, value)));
                if (cachedOption) {
                    return cachedOption;
                }
                else {
                    /** @type {?} */
                    const nzOptionComponent = new NzOptionComponent();
                    nzOptionComponent.nzValue = value;
                    nzOptionComponent.nzLabel = value;
                    return nzOptionComponent;
                }
            }));
            this.listOfTagAndTemplateOption = [...this.listOfTemplateOption.concat(this.listOfTagOption)];
        }
        else {
            this.listOfTagAndTemplateOption = [...this.listOfTemplateOption];
        }
    }
    /**
     * @return {?}
     */
    updateAddTagOption() {
        /** @type {?} */
        const isMatch = this.listOfTagAndTemplateOption.find((/**
         * @param {?} item
         * @return {?}
         */
        item => item.nzLabel === this.searchValue));
        if (this.isTagsMode && this.searchValue && !isMatch) {
            /** @type {?} */
            const option = new NzOptionComponent();
            option.nzValue = this.searchValue;
            option.nzLabel = this.searchValue;
            this.addedTagOption = option;
            this.updateActivatedOption(option);
        }
        else {
            this.addedTagOption = null;
        }
    }
    /**
     * @return {?}
     */
    updateListOfFilteredOption() {
        this.updateAddTagOption();
        /** @type {?} */
        const listOfFilteredOption = new NzFilterOptionPipe().transform(this.listOfTagAndTemplateOption, this.searchValue, this.filterOption, this.serverSearch);
        this.listOfFilteredOption = this.addedTagOption
            ? [this.addedTagOption, ...listOfFilteredOption]
            : [...listOfFilteredOption];
        this.isShowNotFound = !this.isTagsMode && !this.listOfFilteredOption.length;
    }
    /**
     * @return {?}
     */
    clearInput() {
        this.clearInput$.next();
    }
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    updateListOfSelectedValue(value, emit) {
        this.listOfSelectedValueWithEmit$.next({ value, emit });
    }
    /**
     * @param {?} option
     * @return {?}
     */
    updateActivatedOption(option) {
        this.activatedOption$.next(option);
        this.activatedOption = option;
    }
    /**
     * @param {?} inputValue
     * @param {?} tokenSeparators
     * @return {?}
     */
    tokenSeparate(inputValue, tokenSeparators) {
        /** auto tokenSeparators **/
        if (inputValue &&
            inputValue.length &&
            tokenSeparators.length &&
            this.isMultipleOrTags &&
            this.includesSeparators(inputValue, tokenSeparators)) {
            /** @type {?} */
            const listOfLabel = this.splitBySeparators(inputValue, tokenSeparators);
            this.updateSelectedValueByLabelList(listOfLabel);
            this.clearInput();
        }
    }
    /**
     * @param {?} str
     * @param {?} separators
     * @return {?}
     */
    includesSeparators(str, separators) {
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < separators.length; ++i) {
            if (str.lastIndexOf(separators[i]) > 0) {
                return true;
            }
        }
        return false;
    }
    /**
     * @param {?} str
     * @param {?} separators
     * @return {?}
     */
    splitBySeparators(str, separators) {
        /** @type {?} */
        const reg = new RegExp(`[${separators.join()}]`);
        /** @type {?} */
        const array = ((/** @type {?} */ (str))).split(reg).filter((/**
         * @param {?} token
         * @return {?}
         */
        token => token));
        return Array.from(new Set(array));
    }
    /**
     * @return {?}
     */
    resetActivatedOptionIfNeeded() {
        /** @type {?} */
        const resetActivatedOption = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const activatedOption = this.listOfFilteredOption.find((/**
             * @param {?} item
             * @return {?}
             */
            item => this.compareWith(item.nzValue, this.listOfSelectedValue[0])));
            this.updateActivatedOption(activatedOption || null);
        });
        if (this.activatedOption) {
            if (!this.listOfFilteredOption.find((/**
             * @param {?} item
             * @return {?}
             */
            item => this.compareWith(item.nzValue, (/** @type {?} */ (this.activatedOption)).nzValue))) ||
                !this.listOfSelectedValue.find((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => this.compareWith(item, (/** @type {?} */ (this.activatedOption)).nzValue)))) {
                resetActivatedOption();
            }
        }
        else {
            resetActivatedOption();
        }
    }
    /**
     * @param {?} listOfNzOptionComponent
     * @param {?} listOfNzOptionGroupComponent
     * @return {?}
     */
    updateTemplateOption(listOfNzOptionComponent, listOfNzOptionGroupComponent) {
        this.mapOfTemplateOption$.next({ listOfNzOptionComponent, listOfNzOptionGroupComponent });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    updateSearchValue(value) {
        this.searchValueRaw$.next(value);
    }
    /**
     * @param {?} listOfLabel
     * @return {?}
     */
    updateSelectedValueByLabelList(listOfLabel) {
        /** @type {?} */
        const listOfSelectedValue = [...this.listOfSelectedValue];
        /** @type {?} */
        const listOfMatchOptionValue = this.listOfTagAndTemplateOption
            .filter((/**
         * @param {?} item
         * @return {?}
         */
        item => listOfLabel.indexOf(item.nzLabel) !== -1))
            .map((/**
         * @param {?} item
         * @return {?}
         */
        item => item.nzValue))
            .filter((/**
         * @param {?} item
         * @return {?}
         */
        item => !isNotNil(this.listOfSelectedValue.find((/**
         * @param {?} v
         * @return {?}
         */
        v => this.compareWith(v, item))))));
        if (this.isMultipleMode) {
            this.updateListOfSelectedValue([...listOfSelectedValue, ...listOfMatchOptionValue], true);
        }
        else {
            /** @type {?} */
            const listOfUnMatchOptionValue = listOfLabel.filter((/**
             * @param {?} label
             * @return {?}
             */
            label => this.listOfTagAndTemplateOption.map((/**
             * @param {?} item
             * @return {?}
             */
            item => item.nzLabel)).indexOf(label) === -1));
            this.updateListOfSelectedValue([...listOfSelectedValue, ...listOfMatchOptionValue, ...listOfUnMatchOptionValue], true);
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDown(e) {
        if (this.disabled) {
            return;
        }
        /** @type {?} */
        const keyCode = e.keyCode;
        /** @type {?} */
        const eventTarget = (/** @type {?} */ (e.target));
        /** @type {?} */
        const listOfFilteredOptionWithoutDisabledOrHidden = this.listOfFilteredOption.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => !item.nzDisabled && !item.nzHide));
        /** @type {?} */
        const activatedIndex = listOfFilteredOptionWithoutDisabledOrHidden.findIndex((/**
         * @param {?} item
         * @return {?}
         */
        item => item === this.activatedOption));
        switch (keyCode) {
            case UP_ARROW:
                e.preventDefault();
                /** @type {?} */
                const preIndex = activatedIndex > 0 ? activatedIndex - 1 : listOfFilteredOptionWithoutDisabledOrHidden.length - 1;
                this.updateActivatedOption(listOfFilteredOptionWithoutDisabledOrHidden[preIndex]);
                break;
            case DOWN_ARROW:
                e.preventDefault();
                /** @type {?} */
                const nextIndex = activatedIndex < listOfFilteredOptionWithoutDisabledOrHidden.length - 1 ? activatedIndex + 1 : 0;
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
    }
    // tslint:disable-next-line:no-any
    /**
     * @param {?} option
     * @return {?}
     */
    removeValueFormSelected(option) {
        if (this.disabled || option.nzDisabled) {
            return;
        }
        /** @type {?} */
        const listOfSelectedValue = this.listOfSelectedValue.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => !this.compareWith(item, option.nzValue)));
        this.updateListOfSelectedValue(listOfSelectedValue, true);
        this.clearInput();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setOpenState(value) {
        this.openRaw$.next(value);
        this.open = value;
    }
    /**
     * @return {?}
     */
    check() {
        this.checkRaw$.next();
    }
    /**
     * @return {?}
     */
    get isSingleMode() {
        return this.mode === 'default';
    }
    /**
     * @return {?}
     */
    get isTagsMode() {
        return this.mode === 'tags';
    }
    /**
     * @return {?}
     */
    get isMultipleMode() {
        return this.mode === 'multiple';
    }
    /**
     * @return {?}
     */
    get isMultipleOrTags() {
        return this.mode === 'tags' || this.mode === 'multiple';
    }
}
NzSelectService.ɵfac = function NzSelectService_Factory(t) { return new (t || NzSelectService)(); };
NzSelectService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: NzSelectService, factory: NzSelectService.ɵfac });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzSelectService, [{
        type: Injectable
    }], function () { return []; }, null); })();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2VsZWN0LnNlcnZpY2UuanMiLCJzb3VyY2VzIjpbIm5nOi9uZy16b3Jyby1hbnRkL3NlbGVjdC9uei1zZWxlY3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzNGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRixPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3JELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxrQkFBa0IsRUFBaUIsTUFBTSxrQkFBa0IsQ0FBQzs7QUFHMUYsTUFBTSxPQUFPLGVBQWU7SUFENUI7Ozs7UUFHRSx5QkFBb0IsR0FBRyxJQUFJLENBQUM7UUFDNUIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsaUJBQVksR0FBa0IsbUJBQW1CLENBQUM7UUFDbEQsU0FBSSxHQUFvQyxTQUFTLENBQUM7UUFDbEQscUJBQWdCLEdBQUcsUUFBUSxDQUFDO1FBQzVCLGFBQVEsR0FBRyxLQUFLLENBQUM7O1FBRWpCLGdCQUFXOzs7OztRQUFHLENBQUMsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBQzs7Ozs7UUFHdEMsaUNBQTRCLEdBQUcsSUFB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QzVCLG1DQUFpQjs7SUFFakIsc0NBQThDOzs7Ozs7SUFHOUMsdURBR0c7Ozs7OztJQUVILCtDQU1HOzs7Ozs7SUFFSCwwQ0FBMEQ7Ozs7O0lBQzFELCtDQUF1RDs7Ozs7SUFDdkQsbUNBQTBDOzs7OztJQUMxQyxvQ0FBa0M7Ozs7O0lBQ2xDLCtCQUFxQjs7SUFDckIsc0NBQXFDOztJQUNyQyxzQ0FBaUI7O0lBQ2pCLHlDQUF1Qjs7Ozs7SUFFdkIsMENBQWdDOzs7OztJQUVoQyxnQ0FBbUQ7O0lBQ25ELDBDQUEwQzs7SUFDMUMsMkNBQWtFOztJQUNsRSwrQ0FBdUY7O0lBQ3ZGLHVDQWNFOztJQUNGLHVDQVdFOztJQUVGLDhDQUFnQzs7Ozs7SUFFaEMsK0NBQStDOzs7OztJQUUvQywwQ0FBMEM7Ozs7O0lBRTFDLHFEQUFxRDs7Ozs7SUFFckQsa0RBQWtEOztJQUNsRCx1REFBNEQ7Ozs7O0lBRTVELHlDQUF5Qzs7Ozs7SUFFekMscURBQXFEOzs7OztJQUVyRCx5Q0FrQkU7O0lBQ0YsaUNBT2dCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBCQUNLU1BBQ0UsIERPV05fQVJST1csIEVOVEVSLCBTUEFDRSwgVEFCLCBVUF9BUlJPVyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgbWVyZ2UsIEJlaGF2aW9yU3ViamVjdCwgUmVwbGF5U3ViamVjdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBtYXAsIHNoYXJlLCBza2lwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBpc05pbCwgaXNOb3ROaWwgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpPcHRpb25Hcm91cENvbXBvbmVudCB9IGZyb20gJy4vbnotb3B0aW9uLWdyb3VwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56T3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9uei1vcHRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgZGVmYXVsdEZpbHRlck9wdGlvbiwgTnpGaWx0ZXJPcHRpb25QaXBlLCBURmlsdGVyT3B0aW9uIH0gZnJvbSAnLi9uei1vcHRpb24ucGlwZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOelNlbGVjdFNlcnZpY2Uge1xyXG4gIC8qKiBJbnB1dCBwYXJhbXMgKiovXHJcbiAgYXV0b0NsZWFyU2VhcmNoVmFsdWUgPSB0cnVlO1xyXG4gIHNlcnZlclNlYXJjaCA9IGZhbHNlO1xyXG4gIGZpbHRlck9wdGlvbjogVEZpbHRlck9wdGlvbiA9IGRlZmF1bHRGaWx0ZXJPcHRpb247XHJcbiAgbW9kZTogJ2RlZmF1bHQnIHwgJ211bHRpcGxlJyB8ICd0YWdzJyA9ICdkZWZhdWx0JztcclxuICBtYXhNdWx0aXBsZUNvdW50ID0gSW5maW5pdHk7XHJcbiAgZGlzYWJsZWQgPSBmYWxzZTtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgY29tcGFyZVdpdGggPSAobzE6IGFueSwgbzI6IGFueSkgPT4gbzEgPT09IG8yO1xyXG4gIC8qKiBzZWxlY3RlZFZhbHVlQ2hhbmdlZCBzaG91bGQgZW1pdCBuZ01vZGVsQ2hhbmdlIG9yIG5vdCAqKi9cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgcHJpdmF0ZSBsaXN0T2ZTZWxlY3RlZFZhbHVlV2l0aEVtaXQkID0gbmV3IEJlaGF2aW9yU3ViamVjdDx7IHZhbHVlOiBhbnlbXTsgZW1pdDogYm9vbGVhbiB9Pih7XHJcbiAgICB2YWx1ZTogW10sXHJcbiAgICBlbWl0OiBmYWxzZVxyXG4gIH0pO1xyXG4gIC8qKiBDb250ZW50Q2hpbGRyZW4gQ2hhbmdlICoqL1xyXG4gIHByaXZhdGUgbWFwT2ZUZW1wbGF0ZU9wdGlvbiQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHtcclxuICAgIGxpc3RPZk56T3B0aW9uQ29tcG9uZW50OiBOek9wdGlvbkNvbXBvbmVudFtdO1xyXG4gICAgbGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudDogTnpPcHRpb25Hcm91cENvbXBvbmVudFtdO1xyXG4gIH0+KHtcclxuICAgIGxpc3RPZk56T3B0aW9uQ29tcG9uZW50OiBbXSxcclxuICAgIGxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQ6IFtdXHJcbiAgfSk7XHJcbiAgLyoqIHNlYXJjaFZhbHVlIENoYW5nZSAqKi9cclxuICBwcml2YXRlIHNlYXJjaFZhbHVlUmF3JCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPignJyk7XHJcbiAgcHJpdmF0ZSBsaXN0T2ZGaWx0ZXJlZE9wdGlvbjogTnpPcHRpb25Db21wb25lbnRbXSA9IFtdO1xyXG4gIHByaXZhdGUgb3BlblJhdyQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG4gIHByaXZhdGUgY2hlY2tSYXckID0gbmV3IFN1YmplY3QoKTtcclxuICBwcml2YXRlIG9wZW4gPSBmYWxzZTtcclxuICBjbGVhcklucHV0JCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcbiAgc2VhcmNoVmFsdWUgPSAnJztcclxuICBpc1Nob3dOb3RGb3VuZCA9IGZhbHNlO1xyXG4gIC8qKiBhbmltYXRpb24gZXZlbnQgKiovXHJcbiAgYW5pbWF0aW9uRXZlbnQkID0gbmV3IFN1YmplY3QoKTtcclxuICAvKiogb3BlbiBldmVudCAqKi9cclxuICBvcGVuJCA9IHRoaXMub3BlblJhdyQucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcclxuICBhY3RpdmF0ZWRPcHRpb246IE56T3B0aW9uQ29tcG9uZW50IHwgbnVsbDtcclxuICBhY3RpdmF0ZWRPcHRpb24kID0gbmV3IFJlcGxheVN1YmplY3Q8TnpPcHRpb25Db21wb25lbnQgfCBudWxsPigxKTtcclxuICBsaXN0T2ZTZWxlY3RlZFZhbHVlJCA9IHRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZVdpdGhFbWl0JC5waXBlKG1hcChkYXRhID0+IGRhdGEudmFsdWUpKTtcclxuICBtb2RlbENoYW5nZSQgPSB0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWVXaXRoRW1pdCQucGlwZShcclxuICAgIGZpbHRlcihpdGVtID0+IGl0ZW0uZW1pdCksXHJcbiAgICBtYXAoZGF0YSA9PiB7XHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkTGlzdCA9IGRhdGEudmFsdWU7XHJcbiAgICAgIGxldCBtb2RlbFZhbHVlOiBhbnlbXSB8IG51bGwgPSBudWxsOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxyXG4gICAgICBpZiAodGhpcy5pc1NpbmdsZU1vZGUpIHtcclxuICAgICAgICBpZiAoc2VsZWN0ZWRMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgbW9kZWxWYWx1ZSA9IHNlbGVjdGVkTGlzdFswXTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbW9kZWxWYWx1ZSA9IHNlbGVjdGVkTGlzdDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbW9kZWxWYWx1ZTtcclxuICAgIH0pXHJcbiAgKTtcclxuICBzZWFyY2hWYWx1ZSQgPSB0aGlzLnNlYXJjaFZhbHVlUmF3JC5waXBlKFxyXG4gICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcclxuICAgIHNraXAoMSksXHJcbiAgICBzaGFyZSgpLFxyXG4gICAgdGFwKHZhbHVlID0+IHtcclxuICAgICAgdGhpcy5zZWFyY2hWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUFjdGl2YXRlZE9wdGlvbih0aGlzLmxpc3RPZkZpbHRlcmVkT3B0aW9uWzBdKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnVwZGF0ZUxpc3RPZkZpbHRlcmVkT3B0aW9uKCk7XHJcbiAgICB9KVxyXG4gICk7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIGxpc3RPZlNlbGVjdGVkVmFsdWU6IGFueVtdID0gW107XHJcbiAgLyoqIGZsYXQgVmlld0NoaWxkcmVuICoqL1xyXG4gIGxpc3RPZlRlbXBsYXRlT3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudFtdID0gW107XHJcbiAgLyoqIHRhZyBvcHRpb24gKiovXHJcbiAgbGlzdE9mVGFnT3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudFtdID0gW107XHJcbiAgLyoqIHRhZyBvcHRpb24gY29uY2F0IHRlbXBsYXRlIG9wdGlvbiAqKi9cclxuICBsaXN0T2ZUYWdBbmRUZW1wbGF0ZU9wdGlvbjogTnpPcHRpb25Db21wb25lbnRbXSA9IFtdO1xyXG4gIC8qKiBWaWV3Q2hpbGRyZW4gKiovXHJcbiAgbGlzdE9mTnpPcHRpb25Db21wb25lbnQ6IE56T3B0aW9uQ29tcG9uZW50W10gPSBbXTtcclxuICBsaXN0T2ZOek9wdGlvbkdyb3VwQ29tcG9uZW50OiBOek9wdGlvbkdyb3VwQ29tcG9uZW50W10gPSBbXTtcclxuICAvKiogY2xpY2sgb3IgZW50ZXIgYWRkIHRhZyBvcHRpb24gKiovXHJcbiAgYWRkZWRUYWdPcHRpb246IE56T3B0aW9uQ29tcG9uZW50IHwgbnVsbDtcclxuICAvKiogZGlzcGxheSBpbiB0b3AgY29udHJvbCAqKi9cclxuICBsaXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbjogTnpPcHRpb25Db21wb25lbnRbXSA9IFtdO1xyXG4gIC8qKiBzZWxlY3RlZCB2YWx1ZSBvciBWaWV3Q2hpbGRyZW4gY2hhbmdlICoqL1xyXG4gIHZhbHVlT3JPcHRpb24kID0gY29tYmluZUxhdGVzdChbdGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlJCwgdGhpcy5tYXBPZlRlbXBsYXRlT3B0aW9uJF0pLnBpcGUoXHJcbiAgICB0YXAoZGF0YSA9PiB7XHJcbiAgICAgIGNvbnN0IFtsaXN0T2ZTZWxlY3RlZFZhbHVlLCBtYXBPZlRlbXBsYXRlT3B0aW9uXSA9IGRhdGE7XHJcbiAgICAgIHRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZSA9IGxpc3RPZlNlbGVjdGVkVmFsdWU7XHJcbiAgICAgIHRoaXMubGlzdE9mTnpPcHRpb25Db21wb25lbnQgPSBtYXBPZlRlbXBsYXRlT3B0aW9uLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50O1xyXG4gICAgICB0aGlzLmxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQgPSBtYXBPZlRlbXBsYXRlT3B0aW9uLmxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQ7XHJcbiAgICAgIHRoaXMubGlzdE9mVGVtcGxhdGVPcHRpb24gPSB0aGlzLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50LmNvbmNhdChcclxuICAgICAgICB0aGlzLmxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQucmVkdWNlKFxyXG4gICAgICAgICAgKHByZSwgY3VyKSA9PiBbLi4ucHJlLCAuLi5jdXIubGlzdE9mTnpPcHRpb25Db21wb25lbnQudG9BcnJheSgpXSxcclxuICAgICAgICAgIFtdIGFzIE56T3B0aW9uQ29tcG9uZW50W11cclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMudXBkYXRlTGlzdE9mVGFnT3B0aW9uKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlTGlzdE9mRmlsdGVyZWRPcHRpb24oKTtcclxuICAgICAgdGhpcy5yZXNldEFjdGl2YXRlZE9wdGlvbklmTmVlZGVkKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlTGlzdE9mQ2FjaGVkT3B0aW9uKCk7XHJcbiAgICB9KSxcclxuICAgIHNoYXJlKClcclxuICApO1xyXG4gIGNoZWNrJCA9IG1lcmdlKFxyXG4gICAgdGhpcy5jaGVja1JhdyQsXHJcbiAgICB0aGlzLnZhbHVlT3JPcHRpb24kLFxyXG4gICAgdGhpcy5zZWFyY2hWYWx1ZSQsXHJcbiAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbiQsXHJcbiAgICB0aGlzLm9wZW4kLFxyXG4gICAgdGhpcy5tb2RlbENoYW5nZSRcclxuICApLnBpcGUoc2hhcmUoKSk7XHJcblxyXG4gIGNsaWNrT3B0aW9uKG9wdGlvbjogTnpPcHRpb25Db21wb25lbnQpOiB2b2lkIHtcclxuICAgIC8qKiB1cGRhdGUgbGlzdE9mU2VsZWN0ZWRPcHRpb24gLT4gdXBkYXRlIGxpc3RPZlNlbGVjdGVkVmFsdWUgLT4gbmV4dCBsaXN0T2ZTZWxlY3RlZFZhbHVlJCAqKi9cclxuICAgIGlmICghb3B0aW9uLm56RGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy51cGRhdGVBY3RpdmF0ZWRPcHRpb24ob3B0aW9uKTtcclxuICAgICAgbGV0IGxpc3RPZlNlbGVjdGVkVmFsdWUgPSBbLi4udGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlXTtcclxuICAgICAgaWYgKHRoaXMuaXNNdWx0aXBsZU9yVGFncykge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldFZhbHVlID0gbGlzdE9mU2VsZWN0ZWRWYWx1ZS5maW5kKG8gPT4gdGhpcy5jb21wYXJlV2l0aChvLCBvcHRpb24ubnpWYWx1ZSkpO1xyXG4gICAgICAgIGlmIChpc05vdE5pbCh0YXJnZXRWYWx1ZSkpIHtcclxuICAgICAgICAgIGxpc3RPZlNlbGVjdGVkVmFsdWUuc3BsaWNlKGxpc3RPZlNlbGVjdGVkVmFsdWUuaW5kZXhPZih0YXJnZXRWYWx1ZSksIDEpO1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVMaXN0T2ZTZWxlY3RlZFZhbHVlKGxpc3RPZlNlbGVjdGVkVmFsdWUsIHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobGlzdE9mU2VsZWN0ZWRWYWx1ZS5sZW5ndGggPCB0aGlzLm1heE11bHRpcGxlQ291bnQpIHtcclxuICAgICAgICAgIGxpc3RPZlNlbGVjdGVkVmFsdWUucHVzaChvcHRpb24ubnpWYWx1ZSk7XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZUxpc3RPZlNlbGVjdGVkVmFsdWUobGlzdE9mU2VsZWN0ZWRWYWx1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLmNvbXBhcmVXaXRoKGxpc3RPZlNlbGVjdGVkVmFsdWVbMF0sIG9wdGlvbi5uelZhbHVlKSkge1xyXG4gICAgICAgIGxpc3RPZlNlbGVjdGVkVmFsdWUgPSBbb3B0aW9uLm56VmFsdWVdO1xyXG4gICAgICAgIHRoaXMudXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZShsaXN0T2ZTZWxlY3RlZFZhbHVlLCB0cnVlKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5pc1NpbmdsZU1vZGUpIHtcclxuICAgICAgICB0aGlzLnNldE9wZW5TdGF0ZShmYWxzZSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5hdXRvQ2xlYXJTZWFyY2hWYWx1ZSkge1xyXG4gICAgICAgIHRoaXMuY2xlYXJJbnB1dCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVMaXN0T2ZDYWNoZWRPcHRpb24oKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc1NpbmdsZU1vZGUpIHtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSB0aGlzLmxpc3RPZlRlbXBsYXRlT3B0aW9uLmZpbmQobyA9PlxyXG4gICAgICAgIHRoaXMuY29tcGFyZVdpdGgoby5uelZhbHVlLCB0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWVbMF0pXHJcbiAgICAgICk7XHJcbiAgICAgIGlmICghaXNOaWwoc2VsZWN0ZWRPcHRpb24pKSB7XHJcbiAgICAgICAgdGhpcy5saXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbiA9IFtzZWxlY3RlZE9wdGlvbl07XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudFtdID0gW107XHJcbiAgICAgIHRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZS5mb3JFYWNoKHYgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxpc3RPZk1peGVkT3B0aW9uID0gWy4uLnRoaXMubGlzdE9mVGFnQW5kVGVtcGxhdGVPcHRpb24sIC4uLnRoaXMubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb25dO1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGxpc3RPZk1peGVkT3B0aW9uLmZpbmQobyA9PiB0aGlzLmNvbXBhcmVXaXRoKG8ubnpWYWx1ZSwgdikpO1xyXG4gICAgICAgIGlmIChvcHRpb24pIHtcclxuICAgICAgICAgIGxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uLnB1c2gob3B0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uID0gbGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb247XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVMaXN0T2ZUYWdPcHRpb24oKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc1RhZ3NNb2RlKSB7XHJcbiAgICAgIGNvbnN0IGxpc3RPZk1pc3NWYWx1ZSA9IHRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZS5maWx0ZXIoXHJcbiAgICAgICAgdmFsdWUgPT4gIXRoaXMubGlzdE9mVGVtcGxhdGVPcHRpb24uZmluZChvID0+IHRoaXMuY29tcGFyZVdpdGgoby5uelZhbHVlLCB2YWx1ZSkpXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMubGlzdE9mVGFnT3B0aW9uID0gbGlzdE9mTWlzc1ZhbHVlLm1hcCh2YWx1ZSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2FjaGVkT3B0aW9uID0gdGhpcy5saXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbi5maW5kKG8gPT4gdGhpcy5jb21wYXJlV2l0aChvLm56VmFsdWUsIHZhbHVlKSk7XHJcbiAgICAgICAgaWYgKGNhY2hlZE9wdGlvbikge1xyXG4gICAgICAgICAgcmV0dXJuIGNhY2hlZE9wdGlvbjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgbnpPcHRpb25Db21wb25lbnQgPSBuZXcgTnpPcHRpb25Db21wb25lbnQoKTtcclxuICAgICAgICAgIG56T3B0aW9uQ29tcG9uZW50Lm56VmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICAgIG56T3B0aW9uQ29tcG9uZW50Lm56TGFiZWwgPSB2YWx1ZTtcclxuICAgICAgICAgIHJldHVybiBuek9wdGlvbkNvbXBvbmVudDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmxpc3RPZlRhZ0FuZFRlbXBsYXRlT3B0aW9uID0gWy4uLnRoaXMubGlzdE9mVGVtcGxhdGVPcHRpb24uY29uY2F0KHRoaXMubGlzdE9mVGFnT3B0aW9uKV07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmxpc3RPZlRhZ0FuZFRlbXBsYXRlT3B0aW9uID0gWy4uLnRoaXMubGlzdE9mVGVtcGxhdGVPcHRpb25dO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlQWRkVGFnT3B0aW9uKCk6IHZvaWQge1xyXG4gICAgY29uc3QgaXNNYXRjaCA9IHRoaXMubGlzdE9mVGFnQW5kVGVtcGxhdGVPcHRpb24uZmluZChpdGVtID0+IGl0ZW0ubnpMYWJlbCA9PT0gdGhpcy5zZWFyY2hWYWx1ZSk7XHJcbiAgICBpZiAodGhpcy5pc1RhZ3NNb2RlICYmIHRoaXMuc2VhcmNoVmFsdWUgJiYgIWlzTWF0Y2gpIHtcclxuICAgICAgY29uc3Qgb3B0aW9uID0gbmV3IE56T3B0aW9uQ29tcG9uZW50KCk7XHJcbiAgICAgIG9wdGlvbi5uelZhbHVlID0gdGhpcy5zZWFyY2hWYWx1ZTtcclxuICAgICAgb3B0aW9uLm56TGFiZWwgPSB0aGlzLnNlYXJjaFZhbHVlO1xyXG4gICAgICB0aGlzLmFkZGVkVGFnT3B0aW9uID0gb3B0aW9uO1xyXG4gICAgICB0aGlzLnVwZGF0ZUFjdGl2YXRlZE9wdGlvbihvcHRpb24pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5hZGRlZFRhZ09wdGlvbiA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVMaXN0T2ZGaWx0ZXJlZE9wdGlvbigpOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlQWRkVGFnT3B0aW9uKCk7XHJcbiAgICBjb25zdCBsaXN0T2ZGaWx0ZXJlZE9wdGlvbiA9IG5ldyBOekZpbHRlck9wdGlvblBpcGUoKS50cmFuc2Zvcm0oXHJcbiAgICAgIHRoaXMubGlzdE9mVGFnQW5kVGVtcGxhdGVPcHRpb24sXHJcbiAgICAgIHRoaXMuc2VhcmNoVmFsdWUsXHJcbiAgICAgIHRoaXMuZmlsdGVyT3B0aW9uLFxyXG4gICAgICB0aGlzLnNlcnZlclNlYXJjaFxyXG4gICAgKTtcclxuICAgIHRoaXMubGlzdE9mRmlsdGVyZWRPcHRpb24gPSB0aGlzLmFkZGVkVGFnT3B0aW9uXHJcbiAgICAgID8gW3RoaXMuYWRkZWRUYWdPcHRpb24sIC4uLmxpc3RPZkZpbHRlcmVkT3B0aW9uXVxyXG4gICAgICA6IFsuLi5saXN0T2ZGaWx0ZXJlZE9wdGlvbl07XHJcbiAgICB0aGlzLmlzU2hvd05vdEZvdW5kID0gIXRoaXMuaXNUYWdzTW9kZSAmJiAhdGhpcy5saXN0T2ZGaWx0ZXJlZE9wdGlvbi5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICBjbGVhcklucHV0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jbGVhcklucHV0JC5uZXh0KCk7XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgdXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZSh2YWx1ZTogYW55W10sIGVtaXQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZVdpdGhFbWl0JC5uZXh0KHsgdmFsdWUsIGVtaXQgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVBY3RpdmF0ZWRPcHRpb24ob3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudCB8IG51bGwpOiB2b2lkIHtcclxuICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9uJC5uZXh0KG9wdGlvbik7XHJcbiAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbiA9IG9wdGlvbjtcclxuICB9XHJcblxyXG4gIHRva2VuU2VwYXJhdGUoaW5wdXRWYWx1ZTogc3RyaW5nLCB0b2tlblNlcGFyYXRvcnM6IHN0cmluZ1tdKTogdm9pZCB7XHJcbiAgICAvKiogYXV0byB0b2tlblNlcGFyYXRvcnMgKiovXHJcbiAgICBpZiAoXHJcbiAgICAgIGlucHV0VmFsdWUgJiZcclxuICAgICAgaW5wdXRWYWx1ZS5sZW5ndGggJiZcclxuICAgICAgdG9rZW5TZXBhcmF0b3JzLmxlbmd0aCAmJlxyXG4gICAgICB0aGlzLmlzTXVsdGlwbGVPclRhZ3MgJiZcclxuICAgICAgdGhpcy5pbmNsdWRlc1NlcGFyYXRvcnMoaW5wdXRWYWx1ZSwgdG9rZW5TZXBhcmF0b3JzKVxyXG4gICAgKSB7XHJcbiAgICAgIGNvbnN0IGxpc3RPZkxhYmVsID0gdGhpcy5zcGxpdEJ5U2VwYXJhdG9ycyhpbnB1dFZhbHVlLCB0b2tlblNlcGFyYXRvcnMpO1xyXG4gICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkVmFsdWVCeUxhYmVsTGlzdChsaXN0T2ZMYWJlbCk7XHJcbiAgICAgIHRoaXMuY2xlYXJJbnB1dCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5jbHVkZXNTZXBhcmF0b3JzKHN0cjogc3RyaW5nIHwgc3RyaW5nW10sIHNlcGFyYXRvcnM6IHN0cmluZ1tdKTogYm9vbGVhbiB7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cHJlZmVyLWZvci1vZlxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXBhcmF0b3JzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgIGlmIChzdHIubGFzdEluZGV4T2Yoc2VwYXJhdG9yc1tpXSkgPiAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHNwbGl0QnlTZXBhcmF0b3JzKHN0cjogc3RyaW5nIHwgc3RyaW5nW10sIHNlcGFyYXRvcnM6IHN0cmluZ1tdKTogc3RyaW5nW10ge1xyXG4gICAgY29uc3QgcmVnID0gbmV3IFJlZ0V4cChgWyR7c2VwYXJhdG9ycy5qb2luKCl9XWApO1xyXG4gICAgY29uc3QgYXJyYXkgPSAoc3RyIGFzIHN0cmluZykuc3BsaXQocmVnKS5maWx0ZXIodG9rZW4gPT4gdG9rZW4pO1xyXG4gICAgcmV0dXJuIEFycmF5LmZyb20obmV3IFNldChhcnJheSkpO1xyXG4gIH1cclxuXHJcbiAgcmVzZXRBY3RpdmF0ZWRPcHRpb25JZk5lZWRlZCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHJlc2V0QWN0aXZhdGVkT3B0aW9uID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBhY3RpdmF0ZWRPcHRpb24gPSB0aGlzLmxpc3RPZkZpbHRlcmVkT3B0aW9uLmZpbmQoaXRlbSA9PlxyXG4gICAgICAgIHRoaXMuY29tcGFyZVdpdGgoaXRlbS5uelZhbHVlLCB0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWVbMF0pXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMudXBkYXRlQWN0aXZhdGVkT3B0aW9uKGFjdGl2YXRlZE9wdGlvbiB8fCBudWxsKTtcclxuICAgIH07XHJcbiAgICBpZiAodGhpcy5hY3RpdmF0ZWRPcHRpb24pIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgICF0aGlzLmxpc3RPZkZpbHRlcmVkT3B0aW9uLmZpbmQoaXRlbSA9PiB0aGlzLmNvbXBhcmVXaXRoKGl0ZW0ubnpWYWx1ZSwgdGhpcy5hY3RpdmF0ZWRPcHRpb24hLm56VmFsdWUpKSB8fFxyXG4gICAgICAgICF0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWUuZmluZChpdGVtID0+IHRoaXMuY29tcGFyZVdpdGgoaXRlbSwgdGhpcy5hY3RpdmF0ZWRPcHRpb24hLm56VmFsdWUpKVxyXG4gICAgICApIHtcclxuICAgICAgICByZXNldEFjdGl2YXRlZE9wdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXNldEFjdGl2YXRlZE9wdGlvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlVGVtcGxhdGVPcHRpb24oXHJcbiAgICBsaXN0T2ZOek9wdGlvbkNvbXBvbmVudDogTnpPcHRpb25Db21wb25lbnRbXSxcclxuICAgIGxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQ6IE56T3B0aW9uR3JvdXBDb21wb25lbnRbXVxyXG4gICk6IHZvaWQge1xyXG4gICAgdGhpcy5tYXBPZlRlbXBsYXRlT3B0aW9uJC5uZXh0KHsgbGlzdE9mTnpPcHRpb25Db21wb25lbnQsIGxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVTZWFyY2hWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLnNlYXJjaFZhbHVlUmF3JC5uZXh0KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVNlbGVjdGVkVmFsdWVCeUxhYmVsTGlzdChsaXN0T2ZMYWJlbDogc3RyaW5nW10pOiB2b2lkIHtcclxuICAgIGNvbnN0IGxpc3RPZlNlbGVjdGVkVmFsdWUgPSBbLi4udGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlXTtcclxuICAgIGNvbnN0IGxpc3RPZk1hdGNoT3B0aW9uVmFsdWUgPSB0aGlzLmxpc3RPZlRhZ0FuZFRlbXBsYXRlT3B0aW9uXHJcbiAgICAgIC5maWx0ZXIoaXRlbSA9PiBsaXN0T2ZMYWJlbC5pbmRleE9mKGl0ZW0ubnpMYWJlbCkgIT09IC0xKVxyXG4gICAgICAubWFwKGl0ZW0gPT4gaXRlbS5uelZhbHVlKVxyXG4gICAgICAuZmlsdGVyKGl0ZW0gPT4gIWlzTm90TmlsKHRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZS5maW5kKHYgPT4gdGhpcy5jb21wYXJlV2l0aCh2LCBpdGVtKSkpKTtcclxuICAgIGlmICh0aGlzLmlzTXVsdGlwbGVNb2RlKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZShbLi4ubGlzdE9mU2VsZWN0ZWRWYWx1ZSwgLi4ubGlzdE9mTWF0Y2hPcHRpb25WYWx1ZV0sIHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgbGlzdE9mVW5NYXRjaE9wdGlvblZhbHVlID0gbGlzdE9mTGFiZWwuZmlsdGVyKFxyXG4gICAgICAgIGxhYmVsID0+IHRoaXMubGlzdE9mVGFnQW5kVGVtcGxhdGVPcHRpb24ubWFwKGl0ZW0gPT4gaXRlbS5uekxhYmVsKS5pbmRleE9mKGxhYmVsKSA9PT0gLTFcclxuICAgICAgKTtcclxuICAgICAgdGhpcy51cGRhdGVMaXN0T2ZTZWxlY3RlZFZhbHVlKFxyXG4gICAgICAgIFsuLi5saXN0T2ZTZWxlY3RlZFZhbHVlLCAuLi5saXN0T2ZNYXRjaE9wdGlvblZhbHVlLCAuLi5saXN0T2ZVbk1hdGNoT3B0aW9uVmFsdWVdLFxyXG4gICAgICAgIHRydWVcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uS2V5RG93bihlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBrZXlDb2RlID0gZS5rZXlDb2RlO1xyXG4gICAgY29uc3QgZXZlbnRUYXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgY29uc3QgbGlzdE9mRmlsdGVyZWRPcHRpb25XaXRob3V0RGlzYWJsZWRPckhpZGRlbiA9IHRoaXMubGlzdE9mRmlsdGVyZWRPcHRpb24uZmlsdGVyKFxyXG4gICAgICBpdGVtID0+ICFpdGVtLm56RGlzYWJsZWQgJiYgIWl0ZW0ubnpIaWRlXHJcbiAgICApO1xyXG4gICAgY29uc3QgYWN0aXZhdGVkSW5kZXggPSBsaXN0T2ZGaWx0ZXJlZE9wdGlvbldpdGhvdXREaXNhYmxlZE9ySGlkZGVuLmZpbmRJbmRleChpdGVtID0+IGl0ZW0gPT09IHRoaXMuYWN0aXZhdGVkT3B0aW9uKTtcclxuICAgIHN3aXRjaCAoa2V5Q29kZSkge1xyXG4gICAgICBjYXNlIFVQX0FSUk9XOlxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBwcmVJbmRleCA9XHJcbiAgICAgICAgICBhY3RpdmF0ZWRJbmRleCA+IDAgPyBhY3RpdmF0ZWRJbmRleCAtIDEgOiBsaXN0T2ZGaWx0ZXJlZE9wdGlvbldpdGhvdXREaXNhYmxlZE9ySGlkZGVuLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgdGhpcy51cGRhdGVBY3RpdmF0ZWRPcHRpb24obGlzdE9mRmlsdGVyZWRPcHRpb25XaXRob3V0RGlzYWJsZWRPckhpZGRlbltwcmVJbmRleF0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIERPV05fQVJST1c6XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IG5leHRJbmRleCA9XHJcbiAgICAgICAgICBhY3RpdmF0ZWRJbmRleCA8IGxpc3RPZkZpbHRlcmVkT3B0aW9uV2l0aG91dERpc2FibGVkT3JIaWRkZW4ubGVuZ3RoIC0gMSA/IGFjdGl2YXRlZEluZGV4ICsgMSA6IDA7XHJcbiAgICAgICAgdGhpcy51cGRhdGVBY3RpdmF0ZWRPcHRpb24obGlzdE9mRmlsdGVyZWRPcHRpb25XaXRob3V0RGlzYWJsZWRPckhpZGRlbltuZXh0SW5kZXhdKTtcclxuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgIXRoaXMub3Blbikge1xyXG4gICAgICAgICAgdGhpcy5zZXRPcGVuU3RhdGUodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEVOVEVSOlxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAodGhpcy5vcGVuKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5hY3RpdmF0ZWRPcHRpb24gJiYgIXRoaXMuYWN0aXZhdGVkT3B0aW9uLm56RGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5jbGlja09wdGlvbih0aGlzLmFjdGl2YXRlZE9wdGlvbik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2V0T3BlblN0YXRlKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBCQUNLU1BBQ0U6XHJcbiAgICAgICAgaWYgKHRoaXMuaXNNdWx0aXBsZU9yVGFncyAmJiAhZXZlbnRUYXJnZXQudmFsdWUgJiYgdGhpcy5saXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbi5sZW5ndGgpIHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIHRoaXMucmVtb3ZlVmFsdWVGb3JtU2VsZWN0ZWQodGhpcy5saXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvblt0aGlzLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uLmxlbmd0aCAtIDFdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgU1BBQ0U6XHJcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkICYmICF0aGlzLm9wZW4pIHtcclxuICAgICAgICAgIHRoaXMuc2V0T3BlblN0YXRlKHRydWUpO1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBUQUI6XHJcbiAgICAgICAgdGhpcy5zZXRPcGVuU3RhdGUoZmFsc2UpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHJlbW92ZVZhbHVlRm9ybVNlbGVjdGVkKG9wdGlvbjogTnpPcHRpb25Db21wb25lbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IG9wdGlvbi5uekRpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGxpc3RPZlNlbGVjdGVkVmFsdWUgPSB0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWUuZmlsdGVyKGl0ZW0gPT4gIXRoaXMuY29tcGFyZVdpdGgoaXRlbSwgb3B0aW9uLm56VmFsdWUpKTtcclxuICAgIHRoaXMudXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZShsaXN0T2ZTZWxlY3RlZFZhbHVlLCB0cnVlKTtcclxuICAgIHRoaXMuY2xlYXJJbnB1dCgpO1xyXG4gIH1cclxuXHJcbiAgc2V0T3BlblN0YXRlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLm9wZW5SYXckLm5leHQodmFsdWUpO1xyXG4gICAgdGhpcy5vcGVuID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBjaGVjaygpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hlY2tSYXckLm5leHQoKTtcclxuICB9XHJcblxyXG4gIGdldCBpc1NpbmdsZU1vZGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5tb2RlID09PSAnZGVmYXVsdCc7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNUYWdzTW9kZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm1vZGUgPT09ICd0YWdzJztcclxuICB9XHJcblxyXG4gIGdldCBpc011bHRpcGxlTW9kZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm1vZGUgPT09ICdtdWx0aXBsZSc7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNNdWx0aXBsZU9yVGFncygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm1vZGUgPT09ICd0YWdzJyB8fCB0aGlzLm1vZGUgPT09ICdtdWx0aXBsZSc7XHJcbiAgfVxyXG59XHJcbiJdfQ==