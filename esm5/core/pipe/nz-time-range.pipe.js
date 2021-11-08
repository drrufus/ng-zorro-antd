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
import { Pipe } from '@angular/core';
import { timeUnits } from '../time';
import { padStart } from '../util';
import * as ɵngcc0 from '@angular/core';
var NzTimeRangePipe = /** @class */ (function () {
    function NzTimeRangePipe() {
    }
    /**
     * @param {?} value
     * @param {?=} format
     * @return {?}
     */
    NzTimeRangePipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} format
     * @return {?}
     */
    function (value, format) {
        if (format === void 0) { format = 'HH:mm:ss'; }
        /** @type {?} */
        var duration = Number(value || 0);
        return timeUnits.reduce((/**
         * @param {?} current
         * @param {?} __1
         * @return {?}
         */
        function (current, _a) {
            var _b = tslib_1.__read(_a, 2), name = _b[0], unit = _b[1];
            if (current.indexOf(name) !== -1) {
                /** @type {?} */
                var v_1 = Math.floor(duration / unit);
                duration -= v_1 * unit;
                return current.replace(new RegExp(name + "+", 'g'), (/**
                 * @param {?} match
                 * @return {?}
                 */
                function (match) {
                    return padStart(v_1.toString(), match.length, '0');
                }));
            }
            return current;
        }), format);
    };
NzTimeRangePipe.ɵfac = function NzTimeRangePipe_Factory(t) { return new (t || NzTimeRangePipe)(); };
NzTimeRangePipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "nzTimeRange", type: NzTimeRangePipe, pure: true });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTimeRangePipe, [{
        type: Pipe,
        args: [{
                name: 'nzTimeRange',
                pure: true
            }]
    }], function () { return []; }, null); })();
    return NzTimeRangePipe;
}());
export { NzTimeRangePipe };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGltZS1yYW5nZS5waXBlLmpzIiwic291cmNlcyI6WyJuZzovbmctem9ycm8tYW50ZC9jb3JlL3BpcGUvbnotdGltZS1yYW5nZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDcEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7QUFFbkM7SUFBQTtJQW1CQSxDQUFDOzs7Ozs7SUFkQyxtQ0FBUzs7Ozs7SUFBVCxVQUFVLEtBQXNCLEVBQUUsTUFBMkI7UUFBM0IsdUJBQUEsRUFBQSxtQkFBMkI7O1lBQ3ZELFFBQVEsR0FBRyxNQUFNLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztRQUVqQyxPQUFPLFNBQVMsQ0FBQyxNQUFNOzs7OztRQUFDLFVBQUMsT0FBTyxFQUFFLEVBQVk7Z0JBQVosMEJBQVksRUFBWCxZQUFJLEVBQUUsWUFBSTtZQUMzQyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7O29CQUMxQixHQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNyQyxRQUFRLElBQUksR0FBQyxHQUFHLElBQUksQ0FBQztnQkFDckIsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFJLElBQUksTUFBRyxFQUFFLEdBQUcsQ0FBQzs7OztnQkFBRSxVQUFDLEtBQWE7b0JBQ2hFLE9BQU8sUUFBUSxDQUFDLEdBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxLQUFLLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNuRCxDQUFDLEVBQUMsQ0FBQzthQUNKO1lBQ0QsT0FBTyxPQUFPLENBQUM7UUFDakIsQ0FBQyxHQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2IsQ0FBQyxDQUNIO21EQW5CQyxJQUFJLFNBQUMsc0JBQ0osSUFBSSxFQUFFO0lBQWEsc0JBQ25CLElBQUksRUFBRSxJQUFJLGtCQUNYOzs7Ozs7O2dEQUNRO0lBZVQsc0JBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQWZZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgdGltZVVuaXRzIH0gZnJvbSAnLi4vdGltZSc7XHJcbmltcG9ydCB7IHBhZFN0YXJ0IH0gZnJvbSAnLi4vdXRpbCc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ256VGltZVJhbmdlJyxcclxuICBwdXJlOiB0cnVlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelRpbWVSYW5nZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZyB8IG51bWJlciwgZm9ybWF0OiBzdHJpbmcgPSAnSEg6bW06c3MnKTogc3RyaW5nIHtcclxuICAgIGxldCBkdXJhdGlvbiA9IE51bWJlcih2YWx1ZSB8fCAwKTtcclxuXHJcbiAgICByZXR1cm4gdGltZVVuaXRzLnJlZHVjZSgoY3VycmVudCwgW25hbWUsIHVuaXRdKSA9PiB7XHJcbiAgICAgIGlmIChjdXJyZW50LmluZGV4T2YobmFtZSkgIT09IC0xKSB7XHJcbiAgICAgICAgY29uc3QgdiA9IE1hdGguZmxvb3IoZHVyYXRpb24gLyB1bml0KTtcclxuICAgICAgICBkdXJhdGlvbiAtPSB2ICogdW5pdDtcclxuICAgICAgICByZXR1cm4gY3VycmVudC5yZXBsYWNlKG5ldyBSZWdFeHAoYCR7bmFtZX0rYCwgJ2cnKSwgKG1hdGNoOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgIHJldHVybiBwYWRTdGFydCh2LnRvU3RyaW5nKCksIG1hdGNoLmxlbmd0aCwgJzAnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY3VycmVudDtcclxuICAgIH0sIGZvcm1hdCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==