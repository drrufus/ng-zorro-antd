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
    TimeHolder.prototype.setDefaultValueIfNil = function () {
        if (!isNotNil(this._value)) {
            this._value = new Date(this.defaultOpenValue);
        }
    };
    TimeHolder.prototype.setMinutes = function (value, disabled) {
        if (disabled) {
            return this;
        }
        this.setDefaultValueIfNil();
        this.minutes = value;
        return this;
    };
    TimeHolder.prototype.setHours = function (value, disabled) {
        if (disabled) {
            return this;
        }
        this.setDefaultValueIfNil();
        this.hours = value;
        return this;
    };
    TimeHolder.prototype.setSeconds = function (value, disabled) {
        if (disabled) {
            return this;
        }
        this.setDefaultValueIfNil();
        this.seconds = value;
        return this;
    };
    TimeHolder.prototype.setUse12Hours = function (value) {
        this._use12Hours = value;
        return this;
    };
    Object.defineProperty(TimeHolder.prototype, "changes", {
        get: function () {
            return this._changes.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeHolder.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            if (value !== this._value) {
                this._value = value;
                if (isNotNil(this._value)) {
                    this._hours = this._value.getHours();
                    this._minutes = this._value.getMinutes();
                    this._seconds = this._value.getSeconds();
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
    TimeHolder.prototype.setValue = function (value, use12Hours) {
        if (isNotNil(use12Hours)) {
            this._use12Hours = use12Hours;
        }
        this.value = value;
        return this;
    };
    TimeHolder.prototype.clear = function () {
        this._clear();
        this.update();
    };
    Object.defineProperty(TimeHolder.prototype, "isEmpty", {
        get: function () {
            return !(isNotNil(this._hours) || isNotNil(this._minutes) || isNotNil(this._seconds));
        },
        enumerable: true,
        configurable: true
    });
    TimeHolder.prototype._clear = function () {
        this._hours = undefined;
        this._minutes = undefined;
        this._seconds = undefined;
        this._selected12Hours = undefined;
    };
    TimeHolder.prototype.update = function () {
        if (this.isEmpty) {
            this._value = undefined;
        }
        else {
            if (!isNotNil(this._hours)) {
                this._hours = this.defaultHours;
            }
            else {
                this._value.setHours(this.hours);
            }
            if (!isNotNil(this._minutes)) {
                this._minutes = this.defaultMinutes;
            }
            else {
                this._value.setMinutes(this.minutes);
            }
            if (!isNotNil(this._seconds)) {
                this._seconds = this.defaultSeconds;
            }
            else {
                this._value.setSeconds(this.seconds);
            }
            if (this._use12Hours) {
                if (!isNotNil(this._selected12Hours)) {
                    this._selected12Hours = this.default12Hours;
                }
                if (this.selected12Hours === 'PM' && this._hours < 12) {
                    this._hours += 12;
                    this._value.setHours(this._hours);
                }
                if (this.selected12Hours === 'AM' && this._hours >= 12) {
                    this._hours -= 12;
                    this._value.setHours(this._hours);
                }
            }
            this._value = new Date(this._value);
        }
        this.changed();
    };
    TimeHolder.prototype.changed = function () {
        this._changes.next(this._value);
    };
    Object.defineProperty(TimeHolder.prototype, "viewHours", {
        /**
         * @description
         * UI view hours
         * Get viewHours which is selected in `time-picker-panel` and its range is [12, 1, 2, ..., 11]
         */
        get: function () {
            return this._use12Hours && isNotNil(this._hours) ? this.calculateViewHour(this._hours) : this._hours;
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
        get: function () {
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
        get: function () {
            return this._hours;
        },
        /**
         * @description
         * Set viewHours to realHours
         */
        set: function (value) {
            if (value !== this._hours) {
                if (this._use12Hours) {
                    if (this.selected12Hours === 'PM' && value !== 12) {
                        this._hours = value + 12;
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
        get: function () {
            return this._minutes;
        },
        set: function (value) {
            if (value !== this._minutes) {
                this._minutes = value;
                this.update();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeHolder.prototype, "seconds", {
        get: function () {
            return this._seconds;
        },
        set: function (value) {
            if (value !== this._seconds) {
                this._seconds = value;
                this.update();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeHolder.prototype, "selected12Hours", {
        get: function () {
            return this._selected12Hours;
        },
        set: function (value) {
            if (value.toUpperCase() !== this._selected12Hours) {
                this._selected12Hours = value.toUpperCase();
                this.update();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeHolder.prototype, "defaultOpenValue", {
        get: function () {
            return this._defaultOpenValue;
        },
        set: function (value) {
            if (this._defaultOpenValue !== value) {
                this._defaultOpenValue = value;
                this.update();
            }
        },
        enumerable: true,
        configurable: true
    });
    TimeHolder.prototype.setDefaultOpenValue = function (value) {
        this.defaultOpenValue = value;
        return this;
    };
    Object.defineProperty(TimeHolder.prototype, "defaultViewHours", {
        /**
         * @description
         * Get deafultViewHours when defaultOpenValue is setted
         * @see viewHours
         */
        get: function () {
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
        get: function () {
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
        get: function () {
            return this._defaultOpenValue.getHours();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeHolder.prototype, "defaultMinutes", {
        get: function () {
            return this._defaultOpenValue.getMinutes();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeHolder.prototype, "defaultSeconds", {
        get: function () {
            return this._defaultOpenValue.getSeconds();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeHolder.prototype, "default12Hours", {
        get: function () {
            return this._defaultOpenValue.getHours() >= 12 ? 'PM' : 'AM';
        },
        enumerable: true,
        configurable: true
    });
    TimeHolder.prototype.calculateViewHour = function (value) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1ob2xkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3RpbWUtcGlja2VyLyIsInNvdXJjZXMiOlsidGltZS1ob2xkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFOUM7SUFxUkU7UUFwUlEsYUFBUSxHQUF1QixTQUFTLENBQUM7UUFDekMsV0FBTSxHQUF1QixTQUFTLENBQUM7UUFDdkMsYUFBUSxHQUF1QixTQUFTLENBQUM7UUFDekMscUJBQWdCLEdBQXVCLFNBQVMsQ0FBQztRQUNqRCxnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM3QixzQkFBaUIsR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO1FBRXJDLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0lBNlF4QixDQUFDO0lBM1FoQix5Q0FBb0IsR0FBcEI7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQy9DO0lBQ0gsQ0FBQztJQUVELCtCQUFVLEdBQVYsVUFBVyxLQUFhLEVBQUUsUUFBaUI7UUFDekMsSUFBSSxRQUFRLEVBQUU7WUFDWixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsNkJBQVEsR0FBUixVQUFTLEtBQWEsRUFBRSxRQUFpQjtRQUN2QyxJQUFJLFFBQVEsRUFBRTtZQUNaLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCwrQkFBVSxHQUFWLFVBQVcsS0FBYSxFQUFFLFFBQWlCO1FBQ3pDLElBQUksUUFBUSxFQUFFO1lBQ1osT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELGtDQUFhLEdBQWIsVUFBYyxLQUFjO1FBQzFCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELHNCQUFJLCtCQUFPO2FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw2QkFBSzthQUFUO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JCLENBQUM7YUFFRCxVQUFVLEtBQXVCO1lBQy9CLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNwQixJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7b0JBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDdEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUMxQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQzFDLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO3dCQUM3QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO3FCQUN6RDtpQkFDRjtxQkFBTTtvQkFDTCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7aUJBQ2Y7YUFDRjtRQUNILENBQUM7OztPQWhCQTtJQWtCRCw2QkFBUSxHQUFSLFVBQVMsS0FBdUIsRUFBRSxVQUFvQjtRQUNwRCxJQUFJLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQXFCLENBQUM7U0FDMUM7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCwwQkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxzQkFBSSwrQkFBTzthQUFYO1lBQ0UsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUN4RixDQUFDOzs7T0FBQTtJQUVPLDJCQUFNLEdBQWQ7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztRQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztRQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztRQUMxQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDO0lBQ3BDLENBQUM7SUFFTywyQkFBTSxHQUFkO1FBQ0UsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1NBQ3pCO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO2FBQ2pDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxNQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFNLENBQUMsQ0FBQzthQUNwQztZQUVELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7YUFDckM7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQVEsQ0FBQyxDQUFDO2FBQ3hDO1lBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQzthQUNyQztpQkFBTTtnQkFDTCxJQUFJLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBUSxDQUFDLENBQUM7YUFDeEM7WUFFRCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUU7b0JBQ3BDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO2lCQUM3QztnQkFDRCxJQUFJLElBQUksQ0FBQyxlQUFlLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFPLEdBQUcsRUFBRSxFQUFFO29CQUN0RCxJQUFJLENBQUMsTUFBTyxJQUFJLEVBQUUsQ0FBQztvQkFDbkIsSUFBSSxDQUFDLE1BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU8sQ0FBQyxDQUFDO2lCQUNyQztnQkFDRCxJQUFJLElBQUksQ0FBQyxlQUFlLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFPLElBQUksRUFBRSxFQUFFO29CQUN2RCxJQUFJLENBQUMsTUFBTyxJQUFJLEVBQUUsQ0FBQztvQkFDbkIsSUFBSSxDQUFDLE1BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU8sQ0FBQyxDQUFDO2lCQUNyQzthQUNGO1lBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTyxDQUFDLENBQUM7U0FDdEM7UUFDRCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELDRCQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQU9ELHNCQUFJLGlDQUFTO1FBTGI7Ozs7V0FJRzthQUNIO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDeEcsQ0FBQzs7O09BQUE7SUFPRCxzQkFBSSxpQ0FBUztRQUxiOzs7O1dBSUc7YUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQU9ELHNCQUFJLDZCQUFLO1FBTFQ7Ozs7V0FJRzthQUNIO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JCLENBQUM7UUFFRDs7O1dBR0c7YUFDSCxVQUFVLEtBQXlCO1lBQ2pDLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ3pCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtvQkFDcEIsSUFBSSxJQUFJLENBQUMsZUFBZSxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssRUFBRSxFQUFFO3dCQUNqRCxJQUFJLENBQUMsTUFBTyxHQUFJLEtBQWdCLEdBQUcsRUFBRSxDQUFDO3FCQUN2Qzt5QkFBTSxJQUFJLElBQUksQ0FBQyxlQUFlLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxFQUFFLEVBQUU7d0JBQ3hELElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO3FCQUNqQjt5QkFBTTt3QkFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztxQkFDckI7aUJBQ0Y7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7aUJBQ3JCO2dCQUNELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUNmO1FBQ0gsQ0FBQzs7O09BckJBO0lBdUJELHNCQUFJLCtCQUFPO2FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQzthQUVELFVBQVksS0FBeUI7WUFDbkMsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUNmO1FBQ0gsQ0FBQzs7O09BUEE7SUFTRCxzQkFBSSwrQkFBTzthQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZCLENBQUM7YUFFRCxVQUFZLEtBQXlCO1lBQ25DLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUN0QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDZjtRQUNILENBQUM7OztPQVBBO0lBU0Qsc0JBQUksdUNBQWU7YUFBbkI7WUFDRSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUMvQixDQUFDO2FBRUQsVUFBb0IsS0FBeUI7WUFDM0MsSUFBSSxLQUFNLENBQUMsV0FBVyxFQUFFLEtBQUssSUFBSSxDQUFDLGdCQUFnQixFQUFFO2dCQUNsRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUM3QyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDZjtRQUNILENBQUM7OztPQVBBO0lBU0Qsc0JBQUksd0NBQWdCO2FBQXBCO1lBQ0UsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7UUFDaEMsQ0FBQzthQUVELFVBQXFCLEtBQVc7WUFDOUIsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEtBQUssS0FBSyxFQUFFO2dCQUNwQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO2dCQUMvQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDZjtRQUNILENBQUM7OztPQVBBO0lBU0Qsd0NBQW1CLEdBQW5CLFVBQW9CLEtBQVc7UUFDN0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUM5QixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFPRCxzQkFBSSx3Q0FBZ0I7UUFMcEI7Ozs7V0FJRzthQUNIO1lBQ0UsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2hELE9BQU8sSUFBSSxDQUFDLFdBQVcsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3JGLENBQUM7OztPQUFBO0lBT0Qsc0JBQUksd0NBQWdCO1FBTHBCOzs7O1dBSUc7YUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzNDLENBQUM7OztPQUFBO0lBTUQsc0JBQUksb0NBQVk7UUFKaEI7OztXQUdHO2FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMzQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHNDQUFjO2FBQWxCO1lBQ0UsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDN0MsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxzQ0FBYzthQUFsQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzdDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksc0NBQWM7YUFBbEI7WUFDRSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQy9ELENBQUM7OztPQUFBO0lBSU8sc0NBQWlCLEdBQXpCLFVBQTBCLEtBQWE7UUFDckMsSUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDckUsSUFBSSxlQUFlLEtBQUssSUFBSSxJQUFJLEtBQUssR0FBRyxFQUFFLEVBQUU7WUFDMUMsT0FBTyxLQUFLLEdBQUcsRUFBRSxDQUFDO1NBQ25CO1FBQ0QsSUFBSSxlQUFlLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDM0MsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQyxBQWpTRCxJQWlTQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRpbWVIb2xkZXIge1xyXG4gIHByaXZhdGUgX3NlY29uZHM6IG51bWJlciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIF9ob3VyczogbnVtYmVyIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgX21pbnV0ZXM6IG51bWJlciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIF9zZWxlY3RlZDEySG91cnM6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIF91c2UxMkhvdXJzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfZGVmYXVsdE9wZW5WYWx1ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgcHJpdmF0ZSBfdmFsdWU6IERhdGUgfCB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBfY2hhbmdlcyA9IG5ldyBTdWJqZWN0PERhdGU+KCk7XHJcblxyXG4gIHNldERlZmF1bHRWYWx1ZUlmTmlsKCk6IHZvaWQge1xyXG4gICAgaWYgKCFpc05vdE5pbCh0aGlzLl92YWx1ZSkpIHtcclxuICAgICAgdGhpcy5fdmFsdWUgPSBuZXcgRGF0ZSh0aGlzLmRlZmF1bHRPcGVuVmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0TWludXRlcyh2YWx1ZTogbnVtYmVyLCBkaXNhYmxlZDogYm9vbGVhbik6IHRoaXMge1xyXG4gICAgaWYgKGRpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXREZWZhdWx0VmFsdWVJZk5pbCgpO1xyXG4gICAgdGhpcy5taW51dGVzID0gdmFsdWU7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHNldEhvdXJzKHZhbHVlOiBudW1iZXIsIGRpc2FibGVkOiBib29sZWFuKTogdGhpcyB7XHJcbiAgICBpZiAoZGlzYWJsZWQpIHtcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldERlZmF1bHRWYWx1ZUlmTmlsKCk7XHJcbiAgICB0aGlzLmhvdXJzID0gdmFsdWU7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHNldFNlY29uZHModmFsdWU6IG51bWJlciwgZGlzYWJsZWQ6IGJvb2xlYW4pOiB0aGlzIHtcclxuICAgIGlmIChkaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlSWZOaWwoKTtcclxuICAgIHRoaXMuc2Vjb25kcyA9IHZhbHVlO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBzZXRVc2UxMkhvdXJzKHZhbHVlOiBib29sZWFuKTogdGhpcyB7XHJcbiAgICB0aGlzLl91c2UxMkhvdXJzID0gdmFsdWU7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGdldCBjaGFuZ2VzKCk6IE9ic2VydmFibGU8RGF0ZT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NoYW5nZXMuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgdmFsdWUoKTogRGF0ZSB8IHVuZGVmaW5lZCB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgfVxyXG5cclxuICBzZXQgdmFsdWUodmFsdWU6IERhdGUgfCB1bmRlZmluZWQpIHtcclxuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fdmFsdWUpIHtcclxuICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcclxuICAgICAgaWYgKGlzTm90TmlsKHRoaXMuX3ZhbHVlKSkge1xyXG4gICAgICAgIHRoaXMuX2hvdXJzID0gdGhpcy5fdmFsdWUhLmdldEhvdXJzKCk7XHJcbiAgICAgICAgdGhpcy5fbWludXRlcyA9IHRoaXMuX3ZhbHVlIS5nZXRNaW51dGVzKCk7XHJcbiAgICAgICAgdGhpcy5fc2Vjb25kcyA9IHRoaXMuX3ZhbHVlIS5nZXRTZWNvbmRzKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX3VzZTEySG91cnMgJiYgaXNOb3ROaWwodGhpcy5faG91cnMpKSB7XHJcbiAgICAgICAgICB0aGlzLl9zZWxlY3RlZDEySG91cnMgPSB0aGlzLl9ob3VycyA+PSAxMiA/ICdQTScgOiAnQU0nO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9jbGVhcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRWYWx1ZSh2YWx1ZTogRGF0ZSB8IHVuZGVmaW5lZCwgdXNlMTJIb3Vycz86IGJvb2xlYW4pOiB0aGlzIHtcclxuICAgIGlmIChpc05vdE5pbCh1c2UxMkhvdXJzKSkge1xyXG4gICAgICB0aGlzLl91c2UxMkhvdXJzID0gdXNlMTJIb3VycyBhcyBib29sZWFuO1xyXG4gICAgfVxyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBjbGVhcigpOiB2b2lkIHtcclxuICAgIHRoaXMuX2NsZWFyKCk7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzRW1wdHkoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gIShpc05vdE5pbCh0aGlzLl9ob3VycykgfHwgaXNOb3ROaWwodGhpcy5fbWludXRlcykgfHwgaXNOb3ROaWwodGhpcy5fc2Vjb25kcykpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfY2xlYXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9ob3VycyA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuX21pbnV0ZXMgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLl9zZWNvbmRzID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5fc2VsZWN0ZWQxMkhvdXJzID0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc0VtcHR5KSB7XHJcbiAgICAgIHRoaXMuX3ZhbHVlID0gdW5kZWZpbmVkO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKCFpc05vdE5pbCh0aGlzLl9ob3VycykpIHtcclxuICAgICAgICB0aGlzLl9ob3VycyA9IHRoaXMuZGVmYXVsdEhvdXJzO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuX3ZhbHVlIS5zZXRIb3Vycyh0aGlzLmhvdXJzISk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghaXNOb3ROaWwodGhpcy5fbWludXRlcykpIHtcclxuICAgICAgICB0aGlzLl9taW51dGVzID0gdGhpcy5kZWZhdWx0TWludXRlcztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl92YWx1ZSEuc2V0TWludXRlcyh0aGlzLm1pbnV0ZXMhKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCFpc05vdE5pbCh0aGlzLl9zZWNvbmRzKSkge1xyXG4gICAgICAgIHRoaXMuX3NlY29uZHMgPSB0aGlzLmRlZmF1bHRTZWNvbmRzO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuX3ZhbHVlIS5zZXRTZWNvbmRzKHRoaXMuc2Vjb25kcyEpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5fdXNlMTJIb3Vycykge1xyXG4gICAgICAgIGlmICghaXNOb3ROaWwodGhpcy5fc2VsZWN0ZWQxMkhvdXJzKSkge1xyXG4gICAgICAgICAgdGhpcy5fc2VsZWN0ZWQxMkhvdXJzID0gdGhpcy5kZWZhdWx0MTJIb3VycztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQxMkhvdXJzID09PSAnUE0nICYmIHRoaXMuX2hvdXJzISA8IDEyKSB7XHJcbiAgICAgICAgICB0aGlzLl9ob3VycyEgKz0gMTI7XHJcbiAgICAgICAgICB0aGlzLl92YWx1ZSEuc2V0SG91cnModGhpcy5faG91cnMhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQxMkhvdXJzID09PSAnQU0nICYmIHRoaXMuX2hvdXJzISA+PSAxMikge1xyXG4gICAgICAgICAgdGhpcy5faG91cnMhIC09IDEyO1xyXG4gICAgICAgICAgdGhpcy5fdmFsdWUhLnNldEhvdXJzKHRoaXMuX2hvdXJzISk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLl92YWx1ZSA9IG5ldyBEYXRlKHRoaXMuX3ZhbHVlISk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNoYW5nZWQoKTtcclxuICB9XHJcblxyXG4gIGNoYW5nZWQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9jaGFuZ2VzLm5leHQodGhpcy5fdmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICogVUkgdmlldyBob3Vyc1xyXG4gICAqIEdldCB2aWV3SG91cnMgd2hpY2ggaXMgc2VsZWN0ZWQgaW4gYHRpbWUtcGlja2VyLXBhbmVsYCBhbmQgaXRzIHJhbmdlIGlzIFsxMiwgMSwgMiwgLi4uLCAxMV1cclxuICAgKi9cclxuICBnZXQgdmlld0hvdXJzKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XHJcbiAgICByZXR1cm4gdGhpcy5fdXNlMTJIb3VycyAmJiBpc05vdE5pbCh0aGlzLl9ob3VycykgPyB0aGlzLmNhbGN1bGF0ZVZpZXdIb3VyKHRoaXMuX2hvdXJzISkgOiB0aGlzLl9ob3VycztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqIFZhbHVlIGhvdXJzXHJcbiAgICogR2V0IHJlYWxIb3VycyBhbmQgaXRzIHJhbmdlIGlzIFswLCAxLCAyLCAuLi4sIDIyLCAyM11cclxuICAgKi9cclxuICBnZXQgcmVhbEhvdXJzKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XHJcbiAgICByZXR1cm4gdGhpcy5faG91cnM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKiBTYW1lIGFzIHJlYWxIb3Vyc1xyXG4gICAqIEBzZWUgcmVhbEhvdXJzXHJcbiAgICovXHJcbiAgZ2V0IGhvdXJzKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XHJcbiAgICByZXR1cm4gdGhpcy5faG91cnM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKiBTZXQgdmlld0hvdXJzIHRvIHJlYWxIb3Vyc1xyXG4gICAqL1xyXG4gIHNldCBob3Vycyh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XHJcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuX2hvdXJzKSB7XHJcbiAgICAgIGlmICh0aGlzLl91c2UxMkhvdXJzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQxMkhvdXJzID09PSAnUE0nICYmIHZhbHVlICE9PSAxMikge1xyXG4gICAgICAgICAgdGhpcy5faG91cnMhID0gKHZhbHVlIGFzIG51bWJlcikgKyAxMjtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWQxMkhvdXJzID09PSAnQU0nICYmIHZhbHVlID09PSAxMikge1xyXG4gICAgICAgICAgdGhpcy5faG91cnMgPSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLl9ob3VycyA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9ob3VycyA9IHZhbHVlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbWludXRlcygpOiBudW1iZXIgfCB1bmRlZmluZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuX21pbnV0ZXM7XHJcbiAgfVxyXG5cclxuICBzZXQgbWludXRlcyh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XHJcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuX21pbnV0ZXMpIHtcclxuICAgICAgdGhpcy5fbWludXRlcyA9IHZhbHVlO1xyXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IHNlY29uZHMoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWNvbmRzO1xyXG4gIH1cclxuXHJcbiAgc2V0IHNlY29uZHModmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xyXG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLl9zZWNvbmRzKSB7XHJcbiAgICAgIHRoaXMuX3NlY29uZHMgPSB2YWx1ZTtcclxuICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBzZWxlY3RlZDEySG91cnMoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZDEySG91cnM7XHJcbiAgfVxyXG5cclxuICBzZXQgc2VsZWN0ZWQxMkhvdXJzKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcclxuICAgIGlmICh2YWx1ZSEudG9VcHBlckNhc2UoKSAhPT0gdGhpcy5fc2VsZWN0ZWQxMkhvdXJzKSB7XHJcbiAgICAgIHRoaXMuX3NlbGVjdGVkMTJIb3VycyA9IHZhbHVlIS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGRlZmF1bHRPcGVuVmFsdWUoKTogRGF0ZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVmYXVsdE9wZW5WYWx1ZTtcclxuICB9XHJcblxyXG4gIHNldCBkZWZhdWx0T3BlblZhbHVlKHZhbHVlOiBEYXRlKSB7XHJcbiAgICBpZiAodGhpcy5fZGVmYXVsdE9wZW5WYWx1ZSAhPT0gdmFsdWUpIHtcclxuICAgICAgdGhpcy5fZGVmYXVsdE9wZW5WYWx1ZSA9IHZhbHVlO1xyXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0RGVmYXVsdE9wZW5WYWx1ZSh2YWx1ZTogRGF0ZSk6IHRoaXMge1xyXG4gICAgdGhpcy5kZWZhdWx0T3BlblZhbHVlID0gdmFsdWU7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqIEdldCBkZWFmdWx0Vmlld0hvdXJzIHdoZW4gZGVmYXVsdE9wZW5WYWx1ZSBpcyBzZXR0ZWRcclxuICAgKiBAc2VlIHZpZXdIb3Vyc1xyXG4gICAqL1xyXG4gIGdldCBkZWZhdWx0Vmlld0hvdXJzKCk6IG51bWJlciB7XHJcbiAgICBjb25zdCBob3VycyA9IHRoaXMuX2RlZmF1bHRPcGVuVmFsdWUuZ2V0SG91cnMoKTtcclxuICAgIHJldHVybiB0aGlzLl91c2UxMkhvdXJzICYmIGlzTm90TmlsKGhvdXJzKSA/IHRoaXMuY2FsY3VsYXRlVmlld0hvdXIoaG91cnMpIDogaG91cnM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKiBHZXQgZGVmYXVsdFJlYWxIb3VycyB3aGVuIGRlZmF1bHRPcGVuVmFsdWUgaXMgc2V0dGVkXHJcbiAgICogQHNlZSByZWFsSG91cnNcclxuICAgKi9cclxuICBnZXQgZGVmYXVsdFJlYWxIb3VycygpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRPcGVuVmFsdWUuZ2V0SG91cnMoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqIFNhbWUgYXMgZGVmYXVsdFJlYWxIb3Vyc1xyXG4gICAqL1xyXG4gIGdldCBkZWZhdWx0SG91cnMoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0T3BlblZhbHVlLmdldEhvdXJzKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgZGVmYXVsdE1pbnV0ZXMoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0T3BlblZhbHVlLmdldE1pbnV0ZXMoKTtcclxuICB9XHJcblxyXG4gIGdldCBkZWZhdWx0U2Vjb25kcygpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRPcGVuVmFsdWUuZ2V0U2Vjb25kcygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRlZmF1bHQxMkhvdXJzKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVmYXVsdE9wZW5WYWx1ZS5nZXRIb3VycygpID49IDEyID8gJ1BNJyA6ICdBTSc7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHByaXZhdGUgY2FsY3VsYXRlVmlld0hvdXIodmFsdWU6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCBzZWxlY3RlZDEySG91cnMgPSB0aGlzLl9zZWxlY3RlZDEySG91cnMgfHwgdGhpcy5kZWZhdWx0MTJIb3VycztcclxuICAgIGlmIChzZWxlY3RlZDEySG91cnMgPT09ICdQTScgJiYgdmFsdWUgPiAxMikge1xyXG4gICAgICByZXR1cm4gdmFsdWUgLSAxMjtcclxuICAgIH1cclxuICAgIGlmIChzZWxlY3RlZDEySG91cnMgPT09ICdBTScgJiYgdmFsdWUgPT09IDApIHtcclxuICAgICAgcmV0dXJuIDEyO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG4gIH1cclxufVxyXG4iXX0=