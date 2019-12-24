/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
var NzToCssUnitPipe = /** @class */ (function () {
    function NzToCssUnitPipe() {
    }
    NzToCssUnitPipe.prototype.transform = function (value, defaultUnit) {
        if (defaultUnit === void 0) { defaultUnit = 'px'; }
        var formatted = +value; // force convert
        return isNaN(formatted) ? "" + value : "" + formatted + defaultUnit;
    };
    /** @nocollapse */ NzToCssUnitPipe.ɵfac = function NzToCssUnitPipe_Factory(t) { return new (t || NzToCssUnitPipe)(); };
    /** @nocollapse */ NzToCssUnitPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "nzToCssUnit", type: NzToCssUnitPipe, pure: true });
    return NzToCssUnitPipe;
}());
export { NzToCssUnitPipe };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzToCssUnitPipe, [{
        type: Pipe,
        args: [{
                name: 'nzToCssUnit'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY3NzLXVuaXQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbInBpcGUvbnotY3NzLXVuaXQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFFcEQ7SUFBQTtLQVFDO0lBSkMsbUNBQVMsR0FBVCxVQUFVLEtBQXNCLEVBQUUsV0FBMEI7UUFBMUIsNEJBQUEsRUFBQSxrQkFBMEI7UUFDMUQsSUFBTSxTQUFTLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxnQkFBZ0I7UUFDMUMsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUcsS0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFHLFNBQVMsR0FBRyxXQUFhLENBQUM7SUFDdEUsQ0FBQztrRkFKVSxlQUFlO3lFQUFmLGVBQWU7MEJBYjVCO0NBa0JDLEFBUkQsSUFRQztTQUxZLGVBQWU7a0RBQWYsZUFBZTtjQUgzQixJQUFJO2VBQUM7Z0JBQ0osSUFBSSxFQUFFLGFBQWE7YUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnbnpUb0Nzc1VuaXQnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelRvQ3NzVW5pdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0odmFsdWU6IG51bWJlciB8IHN0cmluZywgZGVmYXVsdFVuaXQ6IHN0cmluZyA9ICdweCcpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgZm9ybWF0dGVkID0gK3ZhbHVlOyAvLyBmb3JjZSBjb252ZXJ0XHJcbiAgICByZXR1cm4gaXNOYU4oZm9ybWF0dGVkKSA/IGAke3ZhbHVlfWAgOiBgJHtmb3JtYXR0ZWR9JHtkZWZhdWx0VW5pdH1gO1xyXG4gIH1cclxufVxyXG4iXX0=