/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
var NzSelectUnselectableDirective = /** @class */ (function () {
    function NzSelectUnselectableDirective() {
    }
    /** @nocollapse */ NzSelectUnselectableDirective.ɵfac = function NzSelectUnselectableDirective_Factory(t) { return new (t || NzSelectUnselectableDirective)(); };
    /** @nocollapse */ NzSelectUnselectableDirective.ɵdir = i0.ɵɵdefineDirective({ type: NzSelectUnselectableDirective, selectors: [["", "nz-select-unselectable", ""]], hostBindings: function NzSelectUnselectableDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            i0.ɵɵallocHostVars(2);
        } if (rf & 2) {
            i0.ɵɵattribute("unselectable", "unselectable");
            i0.ɵɵstyleProp("user-select", "none");
        } }, exportAs: ["nzSelectUnselectable"] });
    return NzSelectUnselectableDirective;
}());
export { NzSelectUnselectableDirective };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzSelectUnselectableDirective, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2VsZWN0LXVuc2VsZWN0YWJsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3NlbGVjdC8iLCJzb3VyY2VzIjpbIm56LXNlbGVjdC11bnNlbGVjdGFibGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTFDO0lBQUE7S0FRNkM7OEdBQWhDLDZCQUE2QjtzRUFBN0IsNkJBQTZCOzs7Ozs7d0NBbEIxQztDQWtCNkMsQUFSN0MsSUFRNkM7U0FBaEMsNkJBQTZCO2tEQUE3Qiw2QkFBNkI7Y0FSekMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLElBQUksRUFBRTtvQkFDSixxQkFBcUIsRUFBRSxnQkFBZ0I7b0JBQ3ZDLHFCQUFxQixFQUFFLFFBQVE7aUJBQ2hDO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbnotc2VsZWN0LXVuc2VsZWN0YWJsZV0nLFxyXG4gIGV4cG9ydEFzOiAnbnpTZWxlY3RVbnNlbGVjdGFibGUnLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbYXR0ci51bnNlbGVjdGFibGVdJzogJ1widW5zZWxlY3RhYmxlXCInLFxyXG4gICAgJ1tzdHlsZS51c2VyLXNlbGVjdF0nOiAnXCJub25lXCInXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpTZWxlY3RVbnNlbGVjdGFibGVEaXJlY3RpdmUge31cclxuIl19