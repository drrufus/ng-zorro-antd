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
var TimeHolder = /** @class */ (function () {
    function TimeHolder() {
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
    TimeHolder.prototype.setDefaultValueIfNil = /**
     * @return {?}
     */
    function () {
        if (!isNotNil(this._value)) {
            this._value = new Date(this.defaultOpenValue);
        }
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?} disabled
     * @return {THIS}
     */
    TimeHolder.prototype.setMinutes = /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?} disabled
     * @return {THIS}
     */
    function (value, disabled) {
        if (disabled) {
            return (/** @type {?} */ (this));
        }
        (/** @type {?} */ (this)).setDefaultValueIfNil();
        (/** @type {?} */ (this)).minutes = value;
        return (/** @type {?} */ (this));
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?} disabled
     * @return {THIS}
     */
    TimeHolder.prototype.setHours = /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?} disabled
     * @return {THIS}
     */
    function (value, disabled) {
        if (disabled) {
            return (/** @type {?} */ (this));
        }
        (/** @type {?} */ (this)).setDefaultValueIfNil();
        (/** @type {?} */ (this)).hours = value;
        return (/** @type {?} */ (this));
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?} disabled
     * @return {THIS}
     */
    TimeHolder.prototype.setSeconds = /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?} disabled
     * @return {THIS}
     */
    function (value, disabled) {
        if (disabled) {
            return (/** @type {?} */ (this));
        }
        (/** @type {?} */ (this)).setDefaultValueIfNil();
        (/** @type {?} */ (this)).seconds = value;
        return (/** @type {?} */ (this));
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @return {THIS}
     */
    TimeHolder.prototype.setUse12Hours = /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @return {THIS}
     */
    function (value) {
        (/** @type {?} */ (this))._use12Hours = value;
        return (/** @type {?} */ (this));
    };
    Object.defineProperty(TimeHolder.prototype, "changes", {
        get: /**
         * @return {?}
         */
        function () {
            return this._changes.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeHolder.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
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
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?=} use12Hours
     * @return {THIS}
     */
    TimeHolder.prototype.setValue = /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?=} use12Hours
     * @return {THIS}
     */
    function (value, use12Hours) {
        if (isNotNil(use12Hours)) {
            (/** @type {?} */ (this))._use12Hours = (/** @type {?} */ (use12Hours));
        }
        (/** @type {?} */ (this)).value = value;
        return (/** @type {?} */ (this));
    };
    /**
     * @return {?}
     */
    TimeHolder.prototype.clear = /**
     * @return {?}
     */
    function () {
        this._clear();
        this.update();
    };
    Object.defineProperty(TimeHolder.prototype, "isEmpty", {
        get: /**
         * @return {?}
         */
        function () {
            return !(isNotNil(this._hours) || isNotNil(this._minutes) || isNotNil(this._seconds));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    TimeHolder.prototype._clear = /**
     * @private
     * @return {?}
     */
    function () {
        this._hours = undefined;
        this._minutes = undefined;
        this._seconds = undefined;
        this._selected12Hours = undefined;
    };
    /**
     * @private
     * @return {?}
     */
    TimeHolder.prototype.update = /**
     * @private
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    TimeHolder.prototype.changed = /**
     * @return {?}
     */
    function () {
        this._changes.next(this._value);
    };
    Object.defineProperty(TimeHolder.prototype, "viewHours", {
        /**
         * @description
         * UI view hours
         * Get viewHours which is selected in `time-picker-panel` and its range is [12, 1, 2, ..., 11]
         */
        get: /**
         * \@description
         * UI view hours
         * Get viewHours which is selected in `time-picker-panel` and its range is [12, 1, 2, ..., 11]
         * @return {?}
         */
        function () {
            return this._use12Hours && isNotNil(this._hours) ? this.calculateViewHour((/** @type {?} */ (this._hours))) : this._hours;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeHolder.prototype, "realHours", {
        /**
         * @description
         * Value hours
         * Get realHours and its range is [0, 1, 2, ..., 22, 23]
         */
        get: /**
         * \@description
         * Value hours
         * Get realHours and its range is [0, 1, 2, ..., 22, 23]
         * @return {?}
         */
        function () {
            return this._hours;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeHolder.prototype, "hours", {
        /**
         * @description
         * Same as realHours
         * @see realHours
         */
        get: /**
         * \@description
         * Same as realHours
         * @see realHours
         * @return {?}
         */
        function () {
            return this._hours;
        },
        /**
         * @description
         * Set viewHours to realHours
         */
        set: /**
         * \@description
         * Set viewHours to realHours
         * @param {?} value
         * @return {?}
         */
        function (value) {
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeHolder.prototype, "minutes", {
        get: /**
         * @return {?}
         */
        function () {
            return this._minutes;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value !== this._minutes) {
                this._minutes = value;
                this.update();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeHolder.prototype, "seconds", {
        get: /**
         * @return {?}
         */
        function () {
            return this._seconds;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value !== this._seconds) {
                this._seconds = value;
                this.update();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeHolder.prototype, "selected12Hours", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selected12Hours;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if ((/** @type {?} */ (value)).toUpperCase() !== this._selected12Hours) {
                this._selected12Hours = (/** @type {?} */ (value)).toUpperCase();
                this.update();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeHolder.prototype, "defaultOpenValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this._defaultOpenValue;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._defaultOpenValue !== value) {
                this._defaultOpenValue = value;
                this.update();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @return {THIS}
     */
    TimeHolder.prototype.setDefaultOpenValue = /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @return {THIS}
     */
    function (value) {
        (/** @type {?} */ (this)).defaultOpenValue = value;
        return (/** @type {?} */ (this));
    };
    Object.defineProperty(TimeHolder.prototype, "defaultViewHours", {
        /**
         * @description
         * Get deafultViewHours when defaultOpenValue is setted
         * @see viewHours
         */
        get: /**
         * \@description
         * Get deafultViewHours when defaultOpenValue is setted
         * @see viewHours
         * @return {?}
         */
        function () {
            /** @type {?} */
            var hours = this._defaultOpenValue.getHours();
            return this._use12Hours && isNotNil(hours) ? this.calculateViewHour(hours) : hours;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeHolder.prototype, "defaultRealHours", {
        /**
         * @description
         * Get defaultRealHours when defaultOpenValue is setted
         * @see realHours
         */
        get: /**
         * \@description
         * Get defaultRealHours when defaultOpenValue is setted
         * @see realHours
         * @return {?}
         */
        function () {
            return this._defaultOpenValue.getHours();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeHolder.prototype, "defaultHours", {
        /**
         * @description
         * Same as defaultRealHours
         */
        get: /**
         * \@description
         * Same as defaultRealHours
         * @return {?}
         */
        function () {
            return this._defaultOpenValue.getHours();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeHolder.prototype, "defaultMinutes", {
        get: /**
         * @return {?}
         */
        function () {
            return this._defaultOpenValue.getMinutes();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeHolder.prototype, "defaultSeconds", {
        get: /**
         * @return {?}
         */
        function () {
            return this._defaultOpenValue.getSeconds();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeHolder.prototype, "default12Hours", {
        get: /**
         * @return {?}
         */
        function () {
            return this._defaultOpenValue.getHours() >= 12 ? 'PM' : 'AM';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    TimeHolder.prototype.calculateViewHour = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var selected12Hours = this._selected12Hours || this.default12Hours;
        if (selected12Hours === 'PM' && value > 12) {
            return value - 12;
        }
        if (selected12Hours === 'AM' && value === 0) {
            return 12;
        }
        return value;
    };
    return TimeHolder;
}());
export { TimeHolder };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1ob2xkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3RpbWUtcGlja2VyLyIsInNvdXJjZXMiOlsidGltZS1ob2xkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFOUM7SUFxUkU7UUFwUlEsYUFBUSxHQUF1QixTQUFTLENBQUM7UUFDekMsV0FBTSxHQUF1QixTQUFTLENBQUM7UUFDdkMsYUFBUSxHQUF1QixTQUFTLENBQUM7UUFDekMscUJBQWdCLEdBQXVCLFNBQVMsQ0FBQztRQUNqRCxnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM3QixzQkFBaUIsR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO1FBRXJDLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0lBNlF4QixDQUFDOzs7O0lBM1FoQix5Q0FBb0I7OztJQUFwQjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDL0M7SUFDSCxDQUFDOzs7Ozs7OztJQUVELCtCQUFVOzs7Ozs7O0lBQVYsVUFBVyxLQUFhLEVBQUUsUUFBaUI7UUFDekMsSUFBSSxRQUFRLEVBQUU7WUFDWixPQUFPLG1CQUFBLElBQUksRUFBQSxDQUFDO1NBQ2I7UUFDRCxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzVCLG1CQUFBLElBQUksRUFBQSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsT0FBTyxtQkFBQSxJQUFJLEVBQUEsQ0FBQztJQUNkLENBQUM7Ozs7Ozs7O0lBRUQsNkJBQVE7Ozs7Ozs7SUFBUixVQUFTLEtB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OztZQUMvQixlQUFlLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxjQUFjO1FBQ3BFLElBQUksZUFBZSxLQUFLLElBQUksSUFBSSxLQUFLLEdBQUcsRUFBRSxFQUFFO1lBQzFDLE9BQU8sS0FBSyxHQUFHLEVBQUUsQ0FBQztTQUNuQjtRQUNELElBQUksZUFBZSxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQzNDLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQUFqU0QsSUFpU0M7Ozs7Ozs7SUFoU0MsOEJBQWlEOzs7OztJQUNqRCw0QkFBK0M7Ozs7O0lBQy9DLDhCQUFpRDs7Ozs7SUFDakQsc0NBQXlEOzs7OztJQUN6RCxpQ0FBcUM7Ozs7O0lBQ3JDLHVDQUE2Qzs7Ozs7SUFDN0MsNEJBQWlDOzs7OztJQUNqQyw4QkFBdUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IGlzTm90TmlsIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUaW1lSG9sZGVyIHtcclxuICBwcml2YXRlIF9zZWNvbmRzOiBudW1iZXIgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBfaG91cnM6IG51bWJlciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIF9taW51dGVzOiBudW1iZXIgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBfc2VsZWN0ZWQxMkhvdXJzOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBfdXNlMTJIb3VyczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX2RlZmF1bHRPcGVuVmFsdWU6IERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIHByaXZhdGUgX3ZhbHVlOiBEYXRlIHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgX2NoYW5nZXMgPSBuZXcgU3ViamVjdDxEYXRlPigpO1xyXG5cclxuICBzZXREZWZhdWx0VmFsdWVJZk5pbCgpOiB2b2lkIHtcclxuICAgIGlmICghaXNOb3ROaWwodGhpcy5fdmFsdWUpKSB7XHJcbiAgICAgIHRoaXMuX3ZhbHVlID0gbmV3IERhdGUodGhpcy5kZWZhdWx0T3BlblZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldE1pbnV0ZXModmFsdWU6IG51bWJlciwgZGlzYWJsZWQ6IGJvb2xlYW4pOiB0aGlzIHtcclxuICAgIGlmIChkaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlSWZOaWwoKTtcclxuICAgIHRoaXMubWludXRlcyA9IHZhbHVlO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBzZXRIb3Vycyh2YWx1ZTogbnVtYmVyLCBkaXNhYmxlZDogYm9vbGVhbik6IHRoaXMge1xyXG4gICAgaWYgKGRpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXREZWZhdWx0VmFsdWVJZk5pbCgpO1xyXG4gICAgdGhpcy5ob3VycyA9IHZhbHVlO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBzZXRTZWNvbmRzKHZhbHVlOiBudW1iZXIsIGRpc2FibGVkOiBib29sZWFuKTogdGhpcyB7XHJcbiAgICBpZiAoZGlzYWJsZWQpIHtcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldERlZmF1bHRWYWx1ZUlmTmlsKCk7XHJcbiAgICB0aGlzLnNlY29uZHMgPSB2YWx1ZTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgc2V0VXNlMTJIb3Vycyh2YWx1ZTogYm9vbGVhbik6IHRoaXMge1xyXG4gICAgdGhpcy5fdXNlMTJIb3VycyA9IHZhbHVlO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBnZXQgY2hhbmdlcygpOiBPYnNlcnZhYmxlPERhdGU+IHtcclxuICAgIHJldHVybiB0aGlzLl9jaGFuZ2VzLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHZhbHVlKCk6IERhdGUgfCB1bmRlZmluZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG4gIH1cclxuXHJcbiAgc2V0IHZhbHVlKHZhbHVlOiBEYXRlIHwgdW5kZWZpbmVkKSB7XHJcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuX3ZhbHVlKSB7XHJcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XHJcbiAgICAgIGlmIChpc05vdE5pbCh0aGlzLl92YWx1ZSkpIHtcclxuICAgICAgICB0aGlzLl9ob3VycyA9IHRoaXMuX3ZhbHVlIS5nZXRIb3VycygpO1xyXG4gICAgICAgIHRoaXMuX21pbnV0ZXMgPSB0aGlzLl92YWx1ZSEuZ2V0TWludXRlcygpO1xyXG4gICAgICAgIHRoaXMuX3NlY29uZHMgPSB0aGlzLl92YWx1ZSEuZ2V0U2Vjb25kcygpO1xyXG4gICAgICAgIGlmICh0aGlzLl91c2UxMkhvdXJzICYmIGlzTm90TmlsKHRoaXMuX2hvdXJzKSkge1xyXG4gICAgICAgICAgdGhpcy5fc2VsZWN0ZWQxMkhvdXJzID0gdGhpcy5faG91cnMgPj0gMTIgPyAnUE0nIDogJ0FNJztcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5fY2xlYXIoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0VmFsdWUodmFsdWU6IERhdGUgfCB1bmRlZmluZWQsIHVzZTEySG91cnM/OiBib29sZWFuKTogdGhpcyB7XHJcbiAgICBpZiAoaXNOb3ROaWwodXNlMTJIb3VycykpIHtcclxuICAgICAgdGhpcy5fdXNlMTJIb3VycyA9IHVzZTEySG91cnMgYXMgYm9vbGVhbjtcclxuICAgIH1cclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgY2xlYXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9jbGVhcigpO1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9XHJcblxyXG4gIGdldCBpc0VtcHR5KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEoaXNOb3ROaWwodGhpcy5faG91cnMpIHx8IGlzTm90TmlsKHRoaXMuX21pbnV0ZXMpIHx8IGlzTm90TmlsKHRoaXMuX3NlY29uZHMpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2NsZWFyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5faG91cnMgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLl9taW51dGVzID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5fc2Vjb25kcyA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuX3NlbGVjdGVkMTJIb3VycyA9IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNFbXB0eSkge1xyXG4gICAgICB0aGlzLl92YWx1ZSA9IHVuZGVmaW5lZDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICghaXNOb3ROaWwodGhpcy5faG91cnMpKSB7XHJcbiAgICAgICAgdGhpcy5faG91cnMgPSB0aGlzLmRlZmF1bHRIb3VycztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl92YWx1ZSEuc2V0SG91cnModGhpcy5ob3VycyEpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIWlzTm90TmlsKHRoaXMuX21pbnV0ZXMpKSB7XHJcbiAgICAgICAgdGhpcy5fbWludXRlcyA9IHRoaXMuZGVmYXVsdE1pbnV0ZXM7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5fdmFsdWUhLnNldE1pbnV0ZXModGhpcy5taW51dGVzISk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghaXNOb3ROaWwodGhpcy5fc2Vjb25kcykpIHtcclxuICAgICAgICB0aGlzLl9zZWNvbmRzID0gdGhpcy5kZWZhdWx0U2Vjb25kcztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl92YWx1ZSEuc2V0U2Vjb25kcyh0aGlzLnNlY29uZHMhKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuX3VzZTEySG91cnMpIHtcclxuICAgICAgICBpZiAoIWlzTm90TmlsKHRoaXMuX3NlbGVjdGVkMTJIb3VycykpIHtcclxuICAgICAgICAgIHRoaXMuX3NlbGVjdGVkMTJIb3VycyA9IHRoaXMuZGVmYXVsdDEySG91cnM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkMTJIb3VycyA9PT0gJ1BNJyAmJiB0aGlzLl9ob3VycyEgPCAxMikge1xyXG4gICAgICAgICAgdGhpcy5faG91cnMhICs9IDEyO1xyXG4gICAgICAgICAgdGhpcy5fdmFsdWUhLnNldEhvdXJzKHRoaXMuX2hvdXJzISk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkMTJIb3VycyA9PT0gJ0FNJyAmJiB0aGlzLl9ob3VycyEgPj0gMTIpIHtcclxuICAgICAgICAgIHRoaXMuX2hvdXJzISAtPSAxMjtcclxuICAgICAgICAgIHRoaXMuX3ZhbHVlIS5zZXRIb3Vycyh0aGlzLl9ob3VycyEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5fdmFsdWUgPSBuZXcgRGF0ZSh0aGlzLl92YWx1ZSEpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jaGFuZ2VkKCk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fY2hhbmdlcy5uZXh0KHRoaXMuX3ZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqIFVJIHZpZXcgaG91cnNcclxuICAgKiBHZXQgdmlld0hvdXJzIHdoaWNoIGlzIHNlbGVjdGVkIGluIGB0aW1lLXBpY2tlci1wYW5lbGAgYW5kIGl0cyByYW5nZSBpcyBbMTIsIDEsIDIsIC4uLiwgMTFdXHJcbiAgICovXHJcbiAgZ2V0IHZpZXdIb3VycygpOiBudW1iZXIgfCB1bmRlZmluZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuX3VzZTEySG91cnMgJiYgaXNOb3ROaWwodGhpcy5faG91cnMpID8gdGhpcy5jYWxjdWxhdGVWaWV3SG91cih0aGlzLl9ob3VycyEpIDogdGhpcy5faG91cnM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKiBWYWx1ZSBob3Vyc1xyXG4gICAqIEdldCByZWFsSG91cnMgYW5kIGl0cyByYW5nZSBpcyBbMCwgMSwgMiwgLi4uLCAyMiwgMjNdXHJcbiAgICovXHJcbiAgZ2V0IHJlYWxIb3VycygpOiBudW1iZXIgfCB1bmRlZmluZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hvdXJzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICogU2FtZSBhcyByZWFsSG91cnNcclxuICAgKiBAc2VlIHJlYWxIb3Vyc1xyXG4gICAqL1xyXG4gIGdldCBob3VycygpOiBudW1iZXIgfCB1bmRlZmluZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hvdXJzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICogU2V0IHZpZXdIb3VycyB0byByZWFsSG91cnNcclxuICAgKi9cclxuICBzZXQgaG91cnModmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xyXG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLl9ob3Vycykge1xyXG4gICAgICBpZiAodGhpcy5fdXNlMTJIb3Vycykge1xyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkMTJIb3VycyA9PT0gJ1BNJyAmJiB2YWx1ZSAhPT0gMTIpIHtcclxuICAgICAgICAgIHRoaXMuX2hvdXJzISA9ICh2YWx1ZSBhcyBudW1iZXIpICsgMTI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkMTJIb3VycyA9PT0gJ0FNJyAmJiB2YWx1ZSA9PT0gMTIpIHtcclxuICAgICAgICAgIHRoaXMuX2hvdXJzID0gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5faG91cnMgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5faG91cnMgPSB2YWx1ZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG1pbnV0ZXMoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcclxuICAgIHJldHVybiB0aGlzLl9taW51dGVzO1xyXG4gIH1cclxuXHJcbiAgc2V0IG1pbnV0ZXModmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xyXG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLl9taW51dGVzKSB7XHJcbiAgICAgIHRoaXMuX21pbnV0ZXMgPSB2YWx1ZTtcclxuICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBzZWNvbmRzKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2Vjb25kcztcclxuICB9XHJcblxyXG4gIHNldCBzZWNvbmRzKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcclxuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fc2Vjb25kcykge1xyXG4gICAgICB0aGlzLl9zZWNvbmRzID0gdmFsdWU7XHJcbiAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgc2VsZWN0ZWQxMkhvdXJzKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWQxMkhvdXJzO1xyXG4gIH1cclxuXHJcbiAgc2V0IHNlbGVjdGVkMTJIb3Vycyh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XHJcbiAgICBpZiAodmFsdWUhLnRvVXBwZXJDYXNlKCkgIT09IHRoaXMuX3NlbGVjdGVkMTJIb3Vycykge1xyXG4gICAgICB0aGlzLl9zZWxlY3RlZDEySG91cnMgPSB2YWx1ZSEudG9VcHBlckNhc2UoKTtcclxuICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBkZWZhdWx0T3BlblZhbHVlKCk6IERhdGUge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRPcGVuVmFsdWU7XHJcbiAgfVxyXG5cclxuICBzZXQgZGVmYXVsdE9wZW5WYWx1ZSh2YWx1ZTogRGF0ZSkge1xyXG4gICAgaWYgKHRoaXMuX2RlZmF1bHRPcGVuVmFsdWUgIT09IHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuX2RlZmF1bHRPcGVuVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldERlZmF1bHRPcGVuVmFsdWUodmFsdWU6IERhdGUpOiB0aGlzIHtcclxuICAgIHRoaXMuZGVmYXVsdE9wZW5WYWx1ZSA9IHZhbHVlO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKiBHZXQgZGVhZnVsdFZpZXdIb3VycyB3aGVuIGRlZmF1bHRPcGVuVmFsdWUgaXMgc2V0dGVkXHJcbiAgICogQHNlZSB2aWV3SG91cnNcclxuICAgKi9cclxuICBnZXQgZGVmYXVsdFZpZXdIb3VycygpOiBudW1iZXIge1xyXG4gICAgY29uc3QgaG91cnMgPSB0aGlzLl9kZWZhdWx0T3BlblZhbHVlLmdldEhvdXJzKCk7XHJcbiAgICByZXR1cm4gdGhpcy5fdXNlMTJIb3VycyAmJiBpc05vdE5pbChob3VycykgPyB0aGlzLmNhbGN1bGF0ZVZpZXdIb3VyKGhvdXJzKSA6IGhvdXJzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICogR2V0IGRlZmF1bHRSZWFsSG91cnMgd2hlbiBkZWZhdWx0T3BlblZhbHVlIGlzIHNldHRlZFxyXG4gICAqIEBzZWUgcmVhbEhvdXJzXHJcbiAgICovXHJcbiAgZ2V0IGRlZmF1bHRSZWFsSG91cnMoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0T3BlblZhbHVlLmdldEhvdXJzKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKiBTYW1lIGFzIGRlZmF1bHRSZWFsSG91cnNcclxuICAgKi9cclxuICBnZXQgZGVmYXVsdEhvdXJzKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVmYXVsdE9wZW5WYWx1ZS5nZXRIb3VycygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRlZmF1bHRNaW51dGVzKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVmYXVsdE9wZW5WYWx1ZS5nZXRNaW51dGVzKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgZGVmYXVsdFNlY29uZHMoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0T3BlblZhbHVlLmdldFNlY29uZHMoKTtcclxuICB9XHJcblxyXG4gIGdldCBkZWZhdWx0MTJIb3VycygpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRPcGVuVmFsdWUuZ2V0SG91cnMoKSA+PSAxMiA/ICdQTScgOiAnQU0nO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBwcml2YXRlIGNhbGN1bGF0ZVZpZXdIb3VyKHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWQxMkhvdXJzID0gdGhpcy5fc2VsZWN0ZWQxMkhvdXJzIHx8IHRoaXMuZGVmYXVsdDEySG91cnM7XHJcbiAgICBpZiAoc2VsZWN0ZWQxMkhvdXJzID09PSAnUE0nICYmIHZhbHVlID4gMTIpIHtcclxuICAgICAgcmV0dXJuIHZhbHVlIC0gMTI7XHJcbiAgICB9XHJcbiAgICBpZiAoc2VsZWN0ZWQxMkhvdXJzID09PSAnQU0nICYmIHZhbHVlID09PSAwKSB7XHJcbiAgICAgIHJldHVybiAxMjtcclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9XHJcbn1cclxuIl19