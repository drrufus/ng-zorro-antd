/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, Host, Optional } from '@angular/core';
import { NzTableComponent } from './nz-table.component';
import * as i0 from "@angular/core";
import * as i1 from "./nz-table.component";
var NzTbodyDirective = /** @class */ (function () {
    function NzTbodyDirective(nzTableComponent) {
        this.nzTableComponent = nzTableComponent;
    }
    /** @nocollapse */ NzTbodyDirective.ɵfac = function NzTbodyDirective_Factory(t) { return new (t || NzTbodyDirective)(i0.ɵɵdirectiveInject(i1.NzTableComponent, 9)); };
    /** @nocollapse */ NzTbodyDirective.ɵdir = i0.ɵɵdefineDirective({ type: NzTbodyDirective, selectors: [["tbody"]], hostBindings: function NzTbodyDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            i0.ɵɵallocHostVars(1);
        } if (rf & 2) {
            i0.ɵɵclassProp("ant-table-tbody", ctx.nzTableComponent);
        } } });
    return NzTbodyDirective;
}());
export { NzTbodyDirective };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzTbodyDirective, [{
        type: Directive,
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: 'tbody',
                host: {
                    '[class.ant-table-tbody]': 'nzTableComponent'
                }
            }]
    }], function () { return [{ type: i1.NzTableComponent, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGJvZHkuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90YWJsZS8iLCJzb3VyY2VzIjpbIm56LXRib2R5LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQUV4RDtJQVFFLDBCQUF1QyxnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFHLENBQUM7b0ZBRGxFLGdCQUFnQjt5REFBaEIsZ0JBQWdCOzs7OzsyQkFsQjdCO0NBb0JDLEFBVEQsSUFTQztTQUZZLGdCQUFnQjtrREFBaEIsZ0JBQWdCO2NBUDVCLFNBQVM7ZUFBQztnQkFDVCw4Q0FBOEM7Z0JBQzlDLFFBQVEsRUFBRSxPQUFPO2dCQUNqQixJQUFJLEVBQUU7b0JBQ0oseUJBQXlCLEVBQUUsa0JBQWtCO2lCQUM5QzthQUNGOztzQkFFYyxJQUFJOztzQkFBSSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3QsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE56VGFibGVDb21wb25lbnQgfSBmcm9tICcuL256LXRhYmxlLmNvbXBvbmVudCc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICd0Ym9keScsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtdGFibGUtdGJvZHldJzogJ256VGFibGVDb21wb25lbnQnXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpUYm9keURpcmVjdGl2ZSB7XHJcbiAgY29uc3RydWN0b3IoQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbnpUYWJsZUNvbXBvbmVudDogTnpUYWJsZUNvbXBvbmVudCkge31cclxufVxyXG4iXX0=