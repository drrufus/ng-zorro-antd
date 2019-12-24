/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
// Regular Expressions for parsing tags and attributes
const SURROGATE_PAIR_REGEXP = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
// ! to ~ is the ASCII range.
const NON_ALPHANUMERIC_REGEXP = /([^\#-~ |!])/g;
/**
 * Escapes all potentially dangerous characters, so that the
 * resulting string can be safely inserted into attribute or
 * element text.
 */
function encodeEntities(value) {
    return value
        .replace(/&/g, '&amp;')
        .replace(SURROGATE_PAIR_REGEXP, (match) => {
        const hi = match.charCodeAt(0);
        const low = match.charCodeAt(1);
        return `&#${(hi - 0xd800) * 0x400 + (low - 0xdc00) + 0x10000};`;
    })
        .replace(NON_ALPHANUMERIC_REGEXP, (match) => `&#${match.charCodeAt(0)};`)
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}
export class NzHighlightPipe {
    constructor() {
        this.UNIQUE_WRAPPERS = ['##==-open_tag-==##', '##==-close_tag-==##'];
    }
    transform(value, highlightValue, flags, klass) {
        if (!highlightValue) {
            return value;
        }
        // Escapes regex keyword to interpret these characters literally
        const searchValue = new RegExp(highlightValue.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$&'), flags);
        const wrapValue = value.replace(searchValue, `${this.UNIQUE_WRAPPERS[0]}$&${this.UNIQUE_WRAPPERS[1]}`);
        return encodeEntities(wrapValue)
            .replace(new RegExp(this.UNIQUE_WRAPPERS[0], 'g'), klass ? `<span class="${klass}">` : '<span>')
            .replace(new RegExp(this.UNIQUE_WRAPPERS[1], 'g'), '</span>');
    }
}
/** @nocollapse */ NzHighlightPipe.ɵfac = function NzHighlightPipe_Factory(t) { return new (t || NzHighlightPipe)(); };
/** @nocollapse */ NzHighlightPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "nzHighlight", type: NzHighlightPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzHighlightPipe, [{
        type: Pipe,
        args: [{
                name: 'nzHighlight',
                pure: true
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGxpZ2h0LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJoaWdobGlnaHQvaGlnaGxpZ2h0LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBRXBELHNEQUFzRDtBQUN0RCxNQUFNLHFCQUFxQixHQUFHLGlDQUFpQyxDQUFDO0FBQ2hFLDZCQUE2QjtBQUM3QixNQUFNLHVCQUF1QixHQUFHLGVBQWUsQ0FBQztBQUVoRDs7OztHQUlHO0FBQ0gsU0FBUyxjQUFjLENBQUMsS0FBYTtJQUNuQyxPQUFPLEtBQUs7U0FDVCxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQztTQUN0QixPQUFPLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxLQUFhLEVBQUUsRUFBRTtRQUNoRCxNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9CLE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEMsT0FBTyxLQUFLLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxPQUFPLEdBQUcsQ0FBQztJQUNsRSxDQUFDLENBQUM7U0FDRCxPQUFPLENBQUMsdUJBQXVCLEVBQUUsQ0FBQyxLQUFhLEVBQUUsRUFBRSxDQUFDLEtBQUssS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1NBQ2hGLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDO1NBQ3JCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDM0IsQ0FBQztBQU1ELE1BQU0sT0FBTyxlQUFlO0lBSjVCO1FBS1Usb0JBQWUsR0FBcUIsQ0FBQyxvQkFBb0IsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0tBYzNGO0lBWkMsU0FBUyxDQUFDLEtBQWEsRUFBRSxjQUFzQixFQUFFLEtBQWMsRUFBRSxLQUFjO1FBQzdFLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDbkIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELGdFQUFnRTtRQUNoRSxNQUFNLFdBQVcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLDRCQUE0QixFQUFFLE1BQU0sQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3BHLE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN2RyxPQUFPLGNBQWMsQ0FBQyxTQUFTLENBQUM7YUFDN0IsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQzthQUMvRixPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs4RUFkVSxlQUFlO3FFQUFmLGVBQWU7a0RBQWYsZUFBZTtjQUozQixJQUFJO2VBQUM7Z0JBQ0osSUFBSSxFQUFFLGFBQWE7Z0JBQ25CLElBQUksRUFBRSxJQUFJO2FBQ1giLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8vIFJlZ3VsYXIgRXhwcmVzc2lvbnMgZm9yIHBhcnNpbmcgdGFncyBhbmQgYXR0cmlidXRlc1xyXG5jb25zdCBTVVJST0dBVEVfUEFJUl9SRUdFWFAgPSAvW1xcdUQ4MDAtXFx1REJGRl1bXFx1REMwMC1cXHVERkZGXS9nO1xyXG4vLyAhIHRvIH4gaXMgdGhlIEFTQ0lJIHJhbmdlLlxyXG5jb25zdCBOT05fQUxQSEFOVU1FUklDX1JFR0VYUCA9IC8oW15cXCMtfiB8IV0pL2c7XHJcblxyXG4vKipcclxuICogRXNjYXBlcyBhbGwgcG90ZW50aWFsbHkgZGFuZ2Vyb3VzIGNoYXJhY3RlcnMsIHNvIHRoYXQgdGhlXHJcbiAqIHJlc3VsdGluZyBzdHJpbmcgY2FuIGJlIHNhZmVseSBpbnNlcnRlZCBpbnRvIGF0dHJpYnV0ZSBvclxyXG4gKiBlbGVtZW50IHRleHQuXHJcbiAqL1xyXG5mdW5jdGlvbiBlbmNvZGVFbnRpdGllcyh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICByZXR1cm4gdmFsdWVcclxuICAgIC5yZXBsYWNlKC8mL2csICcmYW1wOycpXHJcbiAgICAucmVwbGFjZShTVVJST0dBVEVfUEFJUl9SRUdFWFAsIChtYXRjaDogc3RyaW5nKSA9PiB7XHJcbiAgICAgIGNvbnN0IGhpID0gbWF0Y2guY2hhckNvZGVBdCgwKTtcclxuICAgICAgY29uc3QgbG93ID0gbWF0Y2guY2hhckNvZGVBdCgxKTtcclxuICAgICAgcmV0dXJuIGAmIyR7KGhpIC0gMHhkODAwKSAqIDB4NDAwICsgKGxvdyAtIDB4ZGMwMCkgKyAweDEwMDAwfTtgO1xyXG4gICAgfSlcclxuICAgIC5yZXBsYWNlKE5PTl9BTFBIQU5VTUVSSUNfUkVHRVhQLCAobWF0Y2g6IHN0cmluZykgPT4gYCYjJHttYXRjaC5jaGFyQ29kZUF0KDApfTtgKVxyXG4gICAgLnJlcGxhY2UoLzwvZywgJyZsdDsnKVxyXG4gICAgLnJlcGxhY2UoLz4vZywgJyZndDsnKTtcclxufVxyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICduekhpZ2hsaWdodCcsXHJcbiAgcHVyZTogdHJ1ZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpIaWdobGlnaHRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgcHJpdmF0ZSBVTklRVUVfV1JBUFBFUlM6IFtzdHJpbmcsIHN0cmluZ10gPSBbJyMjPT0tb3Blbl90YWctPT0jIycsICcjIz09LWNsb3NlX3RhZy09PSMjJ107XHJcblxyXG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nLCBoaWdobGlnaHRWYWx1ZTogc3RyaW5nLCBmbGFncz86IHN0cmluZywga2xhc3M/OiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcclxuICAgIGlmICghaGlnaGxpZ2h0VmFsdWUpIHtcclxuICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEVzY2FwZXMgcmVnZXgga2V5d29yZCB0byBpbnRlcnByZXQgdGhlc2UgY2hhcmFjdGVycyBsaXRlcmFsbHlcclxuICAgIGNvbnN0IHNlYXJjaFZhbHVlID0gbmV3IFJlZ0V4cChoaWdobGlnaHRWYWx1ZS5yZXBsYWNlKC8oWy4qKz9ePSE6JHt9KCl8W1xcXVxcL1xcXFxdKS9nLCAnXFxcXCQmJyksIGZsYWdzKTtcclxuICAgIGNvbnN0IHdyYXBWYWx1ZSA9IHZhbHVlLnJlcGxhY2Uoc2VhcmNoVmFsdWUsIGAke3RoaXMuVU5JUVVFX1dSQVBQRVJTWzBdfSQmJHt0aGlzLlVOSVFVRV9XUkFQUEVSU1sxXX1gKTtcclxuICAgIHJldHVybiBlbmNvZGVFbnRpdGllcyh3cmFwVmFsdWUpXHJcbiAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAodGhpcy5VTklRVUVfV1JBUFBFUlNbMF0sICdnJyksIGtsYXNzID8gYDxzcGFuIGNsYXNzPVwiJHtrbGFzc31cIj5gIDogJzxzcGFuPicpXHJcbiAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAodGhpcy5VTklRVUVfV1JBUFBFUlNbMV0sICdnJyksICc8L3NwYW4+Jyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==