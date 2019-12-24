/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class NzToCssUnitPipe {
    transform(value, defaultUnit = 'px') {
        const formatted = +value; // force convert
        return isNaN(formatted) ? `${value}` : `${formatted}${defaultUnit}`;
    }
}
/** @nocollapse */ NzToCssUnitPipe.ɵfac = function NzToCssUnitPipe_Factory(t) { return new (t || NzToCssUnitPipe)(); };
/** @nocollapse */ NzToCssUnitPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "nzToCssUnit", type: NzToCssUnitPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzToCssUnitPipe, [{
        type: Pipe,
        args: [{
                name: 'nzToCssUnit'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY3NzLXVuaXQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbInBpcGUvbnotY3NzLXVuaXQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFLcEQsTUFBTSxPQUFPLGVBQWU7SUFDMUIsU0FBUyxDQUFDLEtBQXNCLEVBQUUsY0FBc0IsSUFBSTtRQUMxRCxNQUFNLFNBQVMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLGdCQUFnQjtRQUMxQyxPQUFPLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsV0FBVyxFQUFFLENBQUM7SUFDdEUsQ0FBQzs7OEVBSlUsZUFBZTtxRUFBZixlQUFlO2tEQUFmLGVBQWU7Y0FIM0IsSUFBSTtlQUFDO2dCQUNKLElBQUksRUFBRSxhQUFhO2FBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ256VG9Dc3NVbml0J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpUb0Nzc1VuaXRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcsIGRlZmF1bHRVbml0OiBzdHJpbmcgPSAncHgnKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGZvcm1hdHRlZCA9ICt2YWx1ZTsgLy8gZm9yY2UgY29udmVydFxyXG4gICAgcmV0dXJuIGlzTmFOKGZvcm1hdHRlZCkgPyBgJHt2YWx1ZX1gIDogYCR7Zm9ybWF0dGVkfSR7ZGVmYXVsdFVuaXR9YDtcclxuICB9XHJcbn1cclxuIl19