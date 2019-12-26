/**
 * @fileoverview added by tsickle
 * Generated from: time-holder.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Subject } from 'rxjs';
import { isNotNil } from 'ng-zorro-antd/core';
export class TimeHolder {
    constructor() {
        this._seconds = undefined;
        this._hours = undefined;
        this._minutes = undefined;
        this._selected12Hours = undefined;
        this._use12Hours = false;
        this._defaultOpenValue = new Date();
        this._changes = new Subject();
    }
    /**
     * @return {?}
     */
    setDefaultValueIfNil() {
        if (!isNotNil(this._value)) {
            this._value = new Date(this.defaultOpenValue);
        }
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?} disabled
     * @return {THIS}
     */
    setMinutes(value, disabled) {
        if (disabled) {
            return (/** @type {?} */ (this));
        }
        (/** @type {?} */ (this)).setDefaultValueIfNil();
        (/** @type {?} */ (this)).minutes = value;
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?} disabled
     * @return {THIS}
     */
    setHours(value, disabled) {
        if (disabled) {
            return (/** @type {?} */ (this));
        }
        (/** @type {?} */ (this)).setDefaultValueIfNil();
        (/** @type {?} */ (this)).hours = value;
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?} disabled
     * @return {THIS}
     */
    setSeconds(value, disabled) {
        if (disabled) {
            return (/** @type {?} */ (this));
        }
        (/** @type {?} */ (this)).setDefaultValueIfNil();
        (/** @type {?} */ (this)).seconds = value;
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @return {THIS}
     */
    setUse12Hours(value) {
        (/** @type {?} */ (this))._use12Hours = value;
        return (/** @type {?} */ (this));
    }
    /**
     * @return {?}
     */
    get changes() {
        return this._changes.asObservable();
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        if (value !== this._value) {
            this._value = value;
            if (isNotNil(this._value)) {
                this._hours = (/** @type {?} */ (this._value)).getHours();
                this._minutes = (/** @type {?} */ (this._value)).getMinutes();
                this._seconds = (/** @type {?} */ (this._value)).getSeconds();
                if (this._use12Hours && isNotNil(this._hours)) {
                    this._selected12Hours = this._hours >= 12 ? 'PM' : 'AM';
                }
            }
            else {
                this._clear();
            }
        }
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?=} use12Hours
     * @return {THIS}
     */
    setValue(value, use12Hours) {
        if (isNotNil(use12Hours)) {
            (/** @type {?} */ (this))._use12Hours = (/** @type {?} */ (use12Hours));
        }
        (/** @type {?} */ (this)).value = value;
        return (/** @type {?} */ (this));
    }
    /**
     * @return {?}
     */
    clear() {
        this._clear();
        this.update();
    }
    /**
     * @return {?}
     */
    get isEmpty() {
        return !(isNotNil(this._hours) || isNotNil(this._minutes) || isNotNil(this._seconds));
    }
    /**
     * @private
     * @return {?}
     */
    _clear() {
        this._hours = undefined;
        this._minutes = undefined;
        this._seconds = undefined;
        this._selected12Hours = undefined;
    }
    /**
     * @private
     * @return {?}
     */
    update() {
        if (this.isEmpty) {
            this._value = undefined;
        }
        else {
            if (!isNotNil(this._hours)) {
                this._hours = this.defaultHours;
            }
            else {
                (/** @type {?} */ (this._value)).setHours((/** @type {?} */ (this.hours)));
            }
            if (!isNotNil(this._minutes)) {
                this._minutes = this.defaultMinutes;
            }
            else {
                (/** @type {?} */ (this._value)).setMinutes((/** @type {?} */ (this.minutes)));
            }
            if (!isNotNil(this._seconds)) {
                this._seconds = this.defaultSeconds;
            }
            else {
                (/** @type {?} */ (this._value)).setSeconds((/** @type {?} */ (this.seconds)));
            }
            if (this._use12Hours) {
                if (!isNotNil(this._selected12Hours)) {
                    this._selected12Hours = this.default12Hours;
                }
                if (this.selected12Hours === 'PM' && (/** @type {?} */ (this._hours)) < 12) {
                    (/** @type {?} */ (this._hours)) += 12;
                    (/** @type {?} */ (this._value)).setHours((/** @type {?} */ (this._hours)));
                }
                if (this.selected12Hours === 'AM' && (/** @type {?} */ (this._hours)) >= 12) {
                    (/** @type {?} */ (this._hours)) -= 12;
                    (/** @type {?} */ (this._value)).setHours((/** @type {?} */ (this._hours)));
                }
            }
            this._value = new Date((/** @type {?} */ (this._value)));
        }
        this.changed();
    }
    /**
     * @return {?}
     */
    changed() {
        this._changes.next(this._value);
    }
    /**
     * \@description
     * UI view hours
     * Get viewHours which is selected in `time-picker-panel` and its range is [12, 1, 2, ..., 11]
     * @return {?}
     */
    get viewHours() {
        return this._use12Hours && isNotNil(this._hours) ? this.calculateViewHour((/** @type {?} */ (this._hours))) : this._hours;
    }
    /**
     * \@description
     * Value hours
     * Get realHours and its range is [0, 1, 2, ..., 22, 23]
     * @return {?}
     */
    get realHours() {
        return this._hours;
    }
    /**
     * \@description
     * Same as realHours
     * @see realHours
     * @return {?}
     */
    get hours() {
        return this._hours;
    }
    /**
     * \@description
     * Set viewHours to realHours
     * @param {?} value
     * @return {?}
     */
    set hours(value) {
        if (value !== this._hours) {
            if (this._use12Hours) {
                if (this.selected12Hours === 'PM' && value !== 12) {
                    (/** @type {?} */ (this._hours)) = ((/** @type {?} */ (value))) + 12;
                }
                else if (this.selected12Hours === 'AM' && value === 12) {
                    this._hours = 0;
                }
                else {
                    this._hours = value;
                }
            }
            else {
                this._hours = value;
            }
            this.update();
        }
    }
    /**
     * @return {?}
     */
    get minutes() {
        return this._minutes;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set minutes(value) {
        if (value !== this._minutes) {
            this._minutes = value;
            this.update();
        }
    }
    /**
     * @return {?}
     */
    get seconds() {
        return this._seconds;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set seconds(value) {
        if (value !== this._seconds) {
            this._seconds = value;
            this.update();
        }
    }
    /**
     * @return {?}
     */
    get selected12Hours() {
        return this._selected12Hours;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set selected12Hours(value) {
        if ((/** @type {?} */ (value)).toUpperCase() !== this._selected12Hours) {
            this._selected12Hours = (/** @type {?} */ (value)).toUpperCase();
            this.update();
        }
    }
    /**
     * @return {?}
     */
    get defaultOpenValue() {
        return this._defaultOpenValue;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set defaultOpenValue(value) {
        if (this._defaultOpenValue !== value) {
            this._defaultOpenValue = value;
            this.update();
        }
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @return {THIS}
     */
    setDefaultOpenValue(value) {
        (/** @type {?} */ (this)).defaultOpenValue = value;
        return (/** @type {?} */ (this));
    }
    /**
     * \@description
     * Get deafultViewHours when defaultOpenValue is setted
     * @see viewHours
     * @return {?}
     */
    get defaultViewHours() {
        /** @type {?} */
        const hours = this._defaultOpenValue.getHours();
        return this._use12Hours && isNotNil(hours) ? this.calculateViewHour(hours) : hours;
    }
    /**
     * \@description
     * Get defaultRealHours when defaultOpenValue is setted
     * @see realHours
     * @return {?}
     */
    get defaultRealHours() {
        return this._defaultOpenValue.getHours();
    }
    /**
     * \@description
     * Same as defaultRealHours
     * @return {?}
     */
    get defaultHours() {
        return this._defaultOpenValue.getHours();
    }
    /**
     * @return {?}
     */
    get defaultMinutes() {
        return this._defaultOpenValue.getMinutes();
    }
    /**
     * @return {?}
     */
    get defaultSeconds() {
        return this._defaultOpenValue.getSeconds();
    }
    /**
     * @return {?}
     */
    get default12Hours() {
        return this._defaultOpenValue.getHours() >= 12 ? 'PM' : 'AM';
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    calculateViewHour(value) {
        /** @type {?} */
        const selected12Hours = this._selected12Hours || this.default12Hours;
        if (selected12Hours === 'PM' && value > 12) {
            return value - 12;
        }
        if (selected12Hours === 'AM' && value === 0) {
            return 12;
        }
        return value;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    TimeHolder.prototype._seconds;
    /**
     * @type {?}
     * @private
     */
    TimeHolder.prototype._hours;
    /**
     * @type {?}
     * @private
     */
    TimeHolder.prototype._minutes;
    /**
     * @type {?}
     * @private
     */
    TimeHolder.prototype._selected12Hours;
    /**
     * @type {?}
     * @private
     */
    TimeHolder.prototype._use12Hours;
    /**
     * @type {?}
     * @private
     */
    TimeHolder.prototype._defaultOpenValue;
    /**
     * @type {?}
     * @private
     */
    TimeHolder.prototype._value;
    /**
     * @type {?}
     * @private
     */
    TimeHolder.prototype._changes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1ob2xkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3RpbWUtcGlja2VyLyIsInNvdXJjZXMiOlsidGltZS1ob2xkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFOUMsTUFBTSxPQUFPLFVBQVU7SUFxUnJCO1FBcFJRLGFBQVEsR0FBdUIsU0FBUyxDQUFDO1FBQ3pDLFdBQU0sR0FBdUIsU0FBUyxDQUFDO1FBQ3ZDLGFBQVEsR0FBdUIsU0FBUyxDQUFDO1FBQ3pDLHFCQUFnQixHQUF1QixTQUFTLENBQUM7UUFDakQsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFDN0Isc0JBQWlCLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUVyQyxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztJQTZReEIsQ0FBQzs7OztJQTNRaEIsb0JBQW9CO1FBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDL0M7SUFDSCxDQUFDOzs7Ozs7OztJQUVELFVBQVUsQ0FBQyxLQUFhLEVBQUUsUUFBaUI7UUFDekMsSUFBSSxRQUFRLEVBQUU7WUFDWixPQUFPLG1CQUFBLElBQUksRUFBQSxDQUFDO1NBQ2I7UUFDRCxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzVCLG1CQUFBLElBQUksRUFBQSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsT0FBTyxtQkFBQSxJQUFJLEVBQUEsQ0FBQztJQUNkLENBQUM7Ozs7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQWEsRUFBRSxRQUFpQjtR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Q2pDLDhCQUF1QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRpbWVIb2xkZXIge1xyXG4gIHByaXZhdGUgX3NlY29uZHM6IG51bWJlciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIF9ob3VyczogbnVtYmVyIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgX21pbnV0ZXM6IG51bWJlciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIF9zZWxlY3RlZDEySG91cnM6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIF91c2UxMkhvdXJzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfZGVmYXVsdE9wZW5WYWx1ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgcHJpdmF0ZSBfdmFsdWU6IERhdGUgfCB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBfY2hhbmdlcyA9IG5ldyBTdWJqZWN0PERhdGU+KCk7XHJcblxyXG4gIHNldERlZmF1bHRWYWx1ZUlmTmlsKCk6IHZvaWQge1xyXG4gICAgaWYgKCFpc05vdE5pbCh0aGlzLl92YWx1ZSkpIHtcclxuICAgICAgdGhpcy5fdmFsdWUgPSBuZXcgRGF0ZSh0aGlzLmRlZmF1bHRPcGVuVmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0TWludXRlcyh2YWx1ZTogbnVtYmVyLCBkaXNhYmxlZDogYm9vbGVhbik6IHRoaXMge1xyXG4gICAgaWYgKGRpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXREZWZhdWx0VmFsdWVJZk5pbCgpO1xyXG4gICAgdGhpcy5taW51dGVzID0gdmFsdWU7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHNldEhvdXJzKHZhbHVlOiBudW1iZXIsIGRpc2FibGVkOiBib29sZWFuKTogdGhpcyB7XHJcbiAgICBpZiAoZGlzYWJsZWQpIHtcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldERlZmF1bHRWYWx1ZUlmTmlsKCk7XHJcbiAgICB0aGlzLmhvdXJzID0gdmFsdWU7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHNldFNlY29uZHModmFsdWU6IG51bWJlciwgZGlzYWJsZWQ6IGJvb2xlYW4pOiB0aGlzIHtcclxuICAgIGlmIChkaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlSWZOaWwoKTtcclxuICAgIHRoaXMuc2Vjb25kcyA9IHZhbHVlO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBzZXRVc2UxMkhvdXJzKHZhbHVlOiBib29sZWFuKTogdGhpcyB7XHJcbiAgICB0aGlzLl91c2UxMkhvdXJzID0gdmFsdWU7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGdldCBjaGFuZ2VzKCk6IE9ic2VydmFibGU8RGF0ZT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NoYW5nZXMuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgdmFsdWUoKTogRGF0ZSB8IHVuZGVmaW5lZCB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgfVxyXG5cclxuICBzZXQgdmFsdWUodmFsdWU6IERhdGUgfCB1bmRlZmluZWQpIHtcclxuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fdmFsdWUpIHtcclxuICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcclxuICAgICAgaWYgKGlzTm90TmlsKHRoaXMuX3ZhbHVlKSkge1xyXG4gICAgICAgIHRoaXMuX2hvdXJzID0gdGhpcy5fdmFsdWUhLmdldEhvdXJzKCk7XHJcbiAgICAgICAgdGhpcy5fbWludXRlcyA9IHRoaXMuX3ZhbHVlIS5nZXRNaW51dGVzKCk7XHJcbiAgICAgICAgdGhpcy5fc2Vjb25kcyA9IHRoaXMuX3ZhbHVlIS5nZXRTZWNvbmRzKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX3VzZTEySG91cnMgJiYgaXNOb3ROaWwodGhpcy5faG91cnMpKSB7XHJcbiAgICAgICAgICB0aGlzLl9zZWxlY3RlZDEySG91cnMgPSB0aGlzLl9ob3VycyA+PSAxMiA/ICdQTScgOiAnQU0nO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9jbGVhcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRWYWx1ZSh2YWx1ZTogRGF0ZSB8IHVuZGVmaW5lZCwgdXNlMTJIb3Vycz86IGJvb2xlYW4pOiB0aGlzIHtcclxuICAgIGlmIChpc05vdE5pbCh1c2UxMkhvdXJzKSkge1xyXG4gICAgICB0aGlzLl91c2UxMkhvdXJzID0gdXNlMTJIb3VycyBhcyBib29sZWFuO1xyXG4gICAgfVxyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBjbGVhcigpOiB2b2lkIHtcclxuICAgIHRoaXMuX2NsZWFyKCk7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzRW1wdHkoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gIShpc05vdE5pbCh0aGlzLl9ob3VycykgfHwgaXNOb3ROaWwodGhpcy5fbWludXRlcykgfHwgaXNOb3ROaWwodGhpcy5fc2Vjb25kcykpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfY2xlYXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9ob3VycyA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuX21pbnV0ZXMgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLl9zZWNvbmRzID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5fc2VsZWN0ZWQxMkhvdXJzID0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc0VtcHR5KSB7XHJcbiAgICAgIHRoaXMuX3ZhbHVlID0gdW5kZWZpbmVkO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKCFpc05vdE5pbCh0aGlzLl9ob3VycykpIHtcclxuICAgICAgICB0aGlzLl9ob3VycyA9IHRoaXMuZGVmYXVsdEhvdXJzO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuX3ZhbHVlIS5zZXRIb3Vycyh0aGlzLmhvdXJzISk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghaXNOb3ROaWwodGhpcy5fbWludXRlcykpIHtcclxuICAgICAgICB0aGlzLl9taW51dGVzID0gdGhpcy5kZWZhdWx0TWludXRlcztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl92YWx1ZSEuc2V0TWludXRlcyh0aGlzLm1pbnV0ZXMhKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCFpc05vdE5pbCh0aGlzLl9zZWNvbmRzKSkge1xyXG4gICAgICAgIHRoaXMuX3NlY29uZHMgPSB0aGlzLmRlZmF1bHRTZWNvbmRzO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuX3ZhbHVlIS5zZXRTZWNvbmRzKHRoaXMuc2Vjb25kcyEpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5fdXNlMTJIb3Vycykge1xyXG4gICAgICAgIGlmICghaXNOb3ROaWwodGhpcy5fc2VsZWN0ZWQxMkhvdXJzKSkge1xyXG4gICAgICAgICAgdGhpcy5fc2VsZWN0ZWQxMkhvdXJzID0gdGhpcy5kZWZhdWx0MTJIb3VycztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQxMkhvdXJzID09PSAnUE0nICYmIHRoaXMuX2hvdXJzISA8IDEyKSB7XHJcbiAgICAgICAgICB0aGlzLl9ob3VycyEgKz0gMTI7XHJcbiAgICAgICAgICB0aGlzLl92YWx1ZSEuc2V0SG91cnModGhpcy5faG91cnMhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQxMkhvdXJzID09PSAnQU0nICYmIHRoaXMuX2hvdXJzISA+PSAxMikge1xyXG4gICAgICAgICAgdGhpcy5faG91cnMhIC09IDEyO1xyXG4gICAgICAgICAgdGhpcy5fdmFsdWUhLnNldEhvdXJzKHRoaXMuX2hvdXJzISk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLl92YWx1ZSA9IG5ldyBEYXRlKHRoaXMuX3ZhbHVlISk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNoYW5nZWQoKTtcclxuICB9XHJcblxyXG4gIGNoYW5nZWQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9jaGFuZ2VzLm5leHQodGhpcy5fdmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICogVUkgdmlldyBob3Vyc1xyXG4gICAqIEdldCB2aWV3SG91cnMgd2hpY2ggaXMgc2VsZWN0ZWQgaW4gYHRpbWUtcGlja2VyLXBhbmVsYCBhbmQgaXRzIHJhbmdlIGlzIFsxMiwgMSwgMiwgLi4uLCAxMV1cclxuICAgKi9cclxuICBnZXQgdmlld0hvdXJzKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XHJcbiAgICByZXR1cm4gdGhpcy5fdXNlMTJIb3VycyAmJiBpc05vdE5pbCh0aGlzLl9ob3VycykgPyB0aGlzLmNhbGN1bGF0ZVZpZXdIb3VyKHRoaXMuX2hvdXJzISkgOiB0aGlzLl9ob3VycztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqIFZhbHVlIGhvdXJzXHJcbiAgICogR2V0IHJlYWxIb3VycyBhbmQgaXRzIHJhbmdlIGlzIFswLCAxLCAyLCAuLi4sIDIyLCAyM11cclxuICAgKi9cclxuICBnZXQgcmVhbEhvdXJzKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XHJcbiAgICByZXR1cm4gdGhpcy5faG91cnM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKiBTYW1lIGFzIHJlYWxIb3Vyc1xyXG4gICAqIEBzZWUgcmVhbEhvdXJzXHJcbiAgICovXHJcbiAgZ2V0IGhvdXJzKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XHJcbiAgICByZXR1cm4gdGhpcy5faG91cnM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKiBTZXQgdmlld0hvdXJzIHRvIHJlYWxIb3Vyc1xyXG4gICAqL1xyXG4gIHNldCBob3Vycyh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XHJcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuX2hvdXJzKSB7XHJcbiAgICAgIGlmICh0aGlzLl91c2UxMkhvdXJzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQxMkhvdXJzID09PSAnUE0nICYmIHZhbHVlICE9PSAxMikge1xyXG4gICAgICAgICAgdGhpcy5faG91cnMhID0gKHZhbHVlIGFzIG51bWJlcikgKyAxMjtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWQxMkhvdXJzID09PSAnQU0nICYmIHZhbHVlID09PSAxMikge1xyXG4gICAgICAgICAgdGhpcy5faG91cnMgPSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLl9ob3VycyA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9ob3VycyA9IHZhbHVlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbWludXRlcygpOiBudW1iZXIgfCB1bmRlZmluZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuX21pbnV0ZXM7XHJcbiAgfVxyXG5cclxuICBzZXQgbWludXRlcyh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XHJcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuX21pbnV0ZXMpIHtcclxuICAgICAgdGhpcy5fbWludXRlcyA9IHZhbHVlO1xyXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IHNlY29uZHMoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWNvbmRzO1xyXG4gIH1cclxuXHJcbiAgc2V0IHNlY29uZHModmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xyXG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLl9zZWNvbmRzKSB7XHJcbiAgICAgIHRoaXMuX3NlY29uZHMgPSB2YWx1ZTtcclxuICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBzZWxlY3RlZDEySG91cnMoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZDEySG91cnM7XHJcbiAgfVxyXG5cclxuICBzZXQgc2VsZWN0ZWQxMkhvdXJzKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcclxuICAgIGlmICh2YWx1ZSEudG9VcHBlckNhc2UoKSAhPT0gdGhpcy5fc2VsZWN0ZWQxMkhvdXJzKSB7XHJcbiAgICAgIHRoaXMuX3NlbGVjdGVkMTJIb3VycyA9IHZhbHVlIS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGRlZmF1bHRPcGVuVmFsdWUoKTogRGF0ZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVmYXVsdE9wZW5WYWx1ZTtcclxuICB9XHJcblxyXG4gIHNldCBkZWZhdWx0T3BlblZhbHVlKHZhbHVlOiBEYXRlKSB7XHJcbiAgICBpZiAodGhpcy5fZGVmYXVsdE9wZW5WYWx1ZSAhPT0gdmFsdWUpIHtcclxuICAgICAgdGhpcy5fZGVmYXVsdE9wZW5WYWx1ZSA9IHZhbHVlO1xyXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0RGVmYXVsdE9wZW5WYWx1ZSh2YWx1ZTogRGF0ZSk6IHRoaXMge1xyXG4gICAgdGhpcy5kZWZhdWx0T3BlblZhbHVlID0gdmFsdWU7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqIEdldCBkZWFmdWx0Vmlld0hvdXJzIHdoZW4gZGVmYXVsdE9wZW5WYWx1ZSBpcyBzZXR0ZWRcclxuICAgKiBAc2VlIHZpZXdIb3Vyc1xyXG4gICAqL1xyXG4gIGdldCBkZWZhdWx0Vmlld0hvdXJzKCk6IG51bWJlciB7XHJcbiAgICBjb25zdCBob3VycyA9IHRoaXMuX2RlZmF1bHRPcGVuVmFsdWUuZ2V0SG91cnMoKTtcclxuICAgIHJldHVybiB0aGlzLl91c2UxMkhvdXJzICYmIGlzTm90TmlsKGhvdXJzKSA/IHRoaXMuY2FsY3VsYXRlVmlld0hvdXIoaG91cnMpIDogaG91cnM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKiBHZXQgZGVmYXVsdFJlYWxIb3VycyB3aGVuIGRlZmF1bHRPcGVuVmFsdWUgaXMgc2V0dGVkXHJcbiAgICogQHNlZSByZWFsSG91cnNcclxuICAgKi9cclxuICBnZXQgZGVmYXVsdFJlYWxIb3VycygpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRPcGVuVmFsdWUuZ2V0SG91cnMoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqIFNhbWUgYXMgZGVmYXVsdFJlYWxIb3Vyc1xyXG4gICAqL1xyXG4gIGdldCBkZWZhdWx0SG91cnMoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0T3BlblZhbHVlLmdldEhvdXJzKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgZGVmYXVsdE1pbnV0ZXMoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0T3BlblZhbHVlLmdldE1pbnV0ZXMoKTtcclxuICB9XHJcblxyXG4gIGdldCBkZWZhdWx0U2Vjb25kcygpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRPcGVuVmFsdWUuZ2V0U2Vjb25kcygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRlZmF1bHQxMkhvdXJzKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVmYXVsdE9wZW5WYWx1ZS5nZXRIb3VycygpID49IDEyID8gJ1BNJyA6ICdBTSc7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHByaXZhdGUgY2FsY3VsYXRlVmlld0hvdXIodmFsdWU6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCBzZWxlY3RlZDEySG91cnMgPSB0aGlzLl9zZWxlY3RlZDEySG91cnMgfHwgdGhpcy5kZWZhdWx0MTJIb3VycztcclxuICAgIGlmIChzZWxlY3RlZDEySG91cnMgPT09ICdQTScgJiYgdmFsdWUgPiAxMikge1xyXG4gICAgICByZXR1cm4gdmFsdWUgLSAxMjtcclxuICAgIH1cclxuICAgIGlmIChzZWxlY3RlZDEySG91cnMgPT09ICdBTScgJiYgdmFsdWUgPT09IDApIHtcclxuICAgICAgcmV0dXJuIDEyO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG4gIH1cclxufVxyXG4iXX0=