/**
 * @fileoverview added by tsickle
 * Generated from: nz-option.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Pipe } from '@angular/core';
export class NzFilterOptionPipe {
    /**
     * @param {?} options
     * @param {?} searchValue
     * @param {?} filterOption
     * @param {?} serverSearch
     * @return {?}
     */
    transform(options, searchValue, filterOption, serverSearch) {
        if (serverSearch || !searchValue) {
            return (/** @type {?} */ (options));
        }
        else {
            return ((/** @type {?} */ (options))).filter((/**
             * @param {?} o
             * @return {?}
             */
            o => filterOption(searchValue, o)));
        }
    }
}
NzFilterOptionPipe.decorators = [
    { type: Pipe, args: [{ name: 'nzFilterOption' },] }
];
export class NzFilterGroupOptionPipe {
    /**
     * @param {?} groups
     * @param {?} searchValue
     * @param {?} filterOption
     * @param {?} serverSearch
     * @return {?}
     */
    transform(groups, searchValue, filterOption, serverSearch) {
        if (serverSearch || !searchValue) {
            return groups;
        }
        else {
            return ((/** @type {?} */ (groups))).filter((/**
             * @param {?} g
             * @return {?}
             */
            g => {
                return g.listOfNzOptionComponent.some((/**
                 * @param {?} o
                 * @return {?}
                 */
                o => filterOption(searchValue, o)));
            }));
        }
    }
}
NzFilterGroupOptionPipe.decorators = [
    { type: Pipe, args: [{ name: 'nzFilterGroupOption' },] }
];
/**
 * @param {?} searchValue
 * @param {?} option
 * @return {?}
 */
export function defaultFilterOption(searchValue, option) {
    if (option && option.nzLabel) {
        return option.nzLabel.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
    }
    else {
        return false;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotb3B0aW9uLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3NlbGVjdC8iLCJzb3VyY2VzIjpbIm56LW9wdGlvbi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxJQUFJLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBTy9ELE1BQU0sT0FBTyxrQkFBa0I7Ozs7Ozs7O0lBQzdCLFNBQVMsQ0FDUCxPQUEyRCxFQUMzRCxXQUFtQixFQUNuQixZQUEyQixFQUMzQixZQUFxQjtRQUVyQixJQUFJLFlBQVksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNoQyxPQUFPLG1CQUFBLE9BQU8sRUFBdUIsQ0FBQztTQUN2QzthQUFNO1lBQ0wsT0FBTyxDQUFDLG1CQUFBLE9BQU8sRUFBdUIsQ0FBQyxDQUFDLE1BQU07Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQztTQUNuRjtJQUNILENBQUM7OztZQWJGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTs7QUFpQmhDLE1BQU0sT0FBTyx1QkFBdUI7Ozs7Ozs7O0lBQ2xDLFNBQVMsQ0FDUCxNQUFnQyxFQUNoQyxXQUFtQixFQUNuQixZQUEyQixFQUMzQixZQUFxQjtRQUVyQixJQUFJLFlBQVksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNoQyxPQUFPLE1BQU0sQ0FBQztTQUNmO2FBQU07WUFDTCxPQUFPLENBQUMsbUJBQUEsTUFBTSxFQUE0QixDQUFDLENBQUMsTUFBTTs7OztZQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNyRCxPQUFPLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJOzs7O2dCQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQzNFLENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7WUFmRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUscUJBQXFCLEVBQUU7Ozs7Ozs7QUFrQnJDLE1BQU0sVUFBVSxtQkFBbUIsQ0FBQyxXQUFtQixFQUFFLE1BQXlCO0lBQ2hGLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUU7UUFDNUIsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUM3RTtTQUFNO1FBQ0wsT0FBTyxLQUFLLENBQUM7S0FDZDtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0sIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOek9wdGlvbkdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9uei1vcHRpb24tZ3JvdXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL256LW9wdGlvbi5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IHR5cGUgVEZpbHRlck9wdGlvbiA9IChpbnB1dDogc3RyaW5nLCBvcHRpb246IE56T3B0aW9uQ29tcG9uZW50KSA9PiBib29sZWFuO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnbnpGaWx0ZXJPcHRpb24nIH0pXHJcbmV4cG9ydCBjbGFzcyBOekZpbHRlck9wdGlvblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0oXHJcbiAgICBvcHRpb25zOiBOek9wdGlvbkNvbXBvbmVudFtdIHwgUXVlcnlMaXN0PE56T3B0aW9uQ29tcG9uZW50PixcclxuICAgIHNlYXJjaFZhbHVlOiBzdHJpbmcsXHJcbiAgICBmaWx0ZXJPcHRpb246IFRGaWx0ZXJPcHRpb24sXHJcbiAgICBzZXJ2ZXJTZWFyY2g6IGJvb2xlYW5cclxuICApOiBOek9wdGlvbkNvbXBvbmVudFtdIHtcclxuICAgIGlmIChzZXJ2ZXJTZWFyY2ggfHwgIXNlYXJjaFZhbHVlKSB7XHJcbiAgICAgIHJldHVybiBvcHRpb25zIGFzIE56T3B0aW9uQ29tcG9uZW50W107XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gKG9wdGlvbnMgYXMgTnpPcHRpb25Db21wb25lbnRbXSkuZmlsdGVyKG8gPT4gZmlsdGVyT3B0aW9uKHNlYXJjaFZhbHVlLCBvKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AUGlwZSh7IG5hbWU6ICduekZpbHRlckdyb3VwT3B0aW9uJyB9KVxyXG5leHBvcnQgY2xhc3MgTnpGaWx0ZXJHcm91cE9wdGlvblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0oXHJcbiAgICBncm91cHM6IE56T3B0aW9uR3JvdXBDb21wb25lbnRbXSxcclxuICAgIHNlYXJjaFZhbHVlOiBzdHJpbmcsXHJcbiAgICBmaWx0ZXJPcHRpb246IFRGaWx0ZXJPcHRpb24sXHJcbiAgICBzZXJ2ZXJTZWFyY2g6IGJvb2xlYW5cclxuICApOiBOek9wdGlvbkdyb3VwQ29tcG9uZW50W10ge1xyXG4gICAgaWYgKHNlcnZlclNlYXJjaCB8fCAhc2VhcmNoVmFsdWUpIHtcclxuICAgICAgcmV0dXJuIGdyb3VwcztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoZ3JvdXBzIGFzIE56T3B0aW9uR3JvdXBDb21wb25lbnRbXSkuZmlsdGVyKGcgPT4ge1xyXG4gICAgICAgIHJldHVybiBnLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50LnNvbWUobyA9PiBmaWx0ZXJPcHRpb24oc2VhcmNoVmFsdWUsIG8pKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdEZpbHRlck9wdGlvbihzZWFyY2hWYWx1ZTogc3RyaW5nLCBvcHRpb246IE56T3B0aW9uQ29tcG9uZW50KTogYm9vbGVhbiB7XHJcbiAgaWYgKG9wdGlvbiAmJiBvcHRpb24ubnpMYWJlbCkge1xyXG4gICAgcmV0dXJuIG9wdGlvbi5uekxhYmVsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2hWYWx1ZS50b0xvd2VyQ2FzZSgpKSA+IC0xO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiJdfQ==