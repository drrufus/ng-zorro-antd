/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./nz-resize-handle.component";
function NzResizeHandlesComponent_nz_resize_handle_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nz-resize-handle", 1);
} if (rf & 2) {
    const dir_r315 = ctx.$implicit;
    i0.ɵɵproperty("nzDirection", dir_r315);
} }
export const DEFAULT_RESIZE_DIRECTION = [
    'bottomRight',
    'topRight',
    'bottomLeft',
    'topLeft',
    'bottom',
    'right',
    'top',
    'left'
];
export class NzResizeHandlesComponent {
    constructor() {
        this.nzDirections = DEFAULT_RESIZE_DIRECTION;
        this.directions = new Set(this.nzDirections);
    }
    ngOnChanges(changes) {
        if (changes.nzDirections) {
            this.directions = new Set(changes.nzDirections.currentValue);
        }
    }
}
/** @nocollapse */ NzResizeHandlesComponent.ɵfac = function NzResizeHandlesComponent_Factory(t) { return new (t || NzResizeHandlesComponent)(); };
/** @nocollapse */ NzResizeHandlesComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzResizeHandlesComponent, selectors: [["nz-resize-handles"]], inputs: { nzDirections: "nzDirections" }, exportAs: ["nzResizeHandles"], features: [i0.ɵɵNgOnChangesFeature()], decls: 1, vars: 1, consts: [[3, "nzDirection", 4, "ngFor", "ngForOf"], [3, "nzDirection"]], template: function NzResizeHandlesComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, NzResizeHandlesComponent_nz_resize_handle_0_Template, 1, 1, "nz-resize-handle", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", ctx.directions);
    } }, directives: [i1.NgForOf, i2.NzResizeHandleComponent], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzResizeHandlesComponent, [{
        type: Component,
        args: [{
                selector: 'nz-resize-handles',
                exportAs: 'nzResizeHandles',
                templateUrl: './nz-resize-handles.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { nzDirections: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmVzaXplLWhhbmRsZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9yZXNpemFibGUvIiwic291cmNlcyI6WyJuei1yZXNpemUtaGFuZGxlcy5jb21wb25lbnQudHMiLCJuei1yZXNpemUtaGFuZGxlcy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBNEIsTUFBTSxlQUFlLENBQUM7Ozs7O0lDUnBHLHNDQUF3Rjs7O0lBQXZDLHNDQUFtQjs7QURZcEUsTUFBTSxDQUFDLE1BQU0sd0JBQXdCLEdBQXdCO0lBQzNELGFBQWE7SUFDYixVQUFVO0lBQ1YsWUFBWTtJQUNaLFNBQVM7SUFDVCxRQUFRO0lBQ1IsT0FBTztJQUNQLEtBQUs7SUFDTCxNQUFNO0NBQ1AsQ0FBQztBQVFGLE1BQU0sT0FBTyx3QkFBd0I7SUFJbkM7UUFIUyxpQkFBWSxHQUF3Qix3QkFBd0IsQ0FBQztRQUlwRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLFlBQVksRUFBRTtZQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDOUQ7SUFDSCxDQUFDOztnR0FaVSx3QkFBd0I7NkRBQXhCLHdCQUF3QjtRQzdCckMsbUdBQXFFOztRQUFuRCx3Q0FBOEI7O2tERDZCbkMsd0JBQXdCO2NBTnBDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixXQUFXLEVBQUUsb0NBQW9DO2dCQUNqRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7a0JBRUUsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpSZXNpemVEaXJlY3Rpb24gfSBmcm9tICcuL256LXJlc2l6ZS1oYW5kbGUuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX1JFU0laRV9ESVJFQ1RJT046IE56UmVzaXplRGlyZWN0aW9uW10gPSBbXHJcbiAgJ2JvdHRvbVJpZ2h0JyxcclxuICAndG9wUmlnaHQnLFxyXG4gICdib3R0b21MZWZ0JyxcclxuICAndG9wTGVmdCcsXHJcbiAgJ2JvdHRvbScsXHJcbiAgJ3JpZ2h0JyxcclxuICAndG9wJyxcclxuICAnbGVmdCdcclxuXTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotcmVzaXplLWhhbmRsZXMnLFxyXG4gIGV4cG9ydEFzOiAnbnpSZXNpemVIYW5kbGVzJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotcmVzaXplLWhhbmRsZXMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelJlc2l6ZUhhbmRsZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIG56RGlyZWN0aW9uczogTnpSZXNpemVEaXJlY3Rpb25bXSA9IERFRkFVTFRfUkVTSVpFX0RJUkVDVElPTjtcclxuICBkaXJlY3Rpb25zOiBTZXQ8TnpSZXNpemVEaXJlY3Rpb24+O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuZGlyZWN0aW9ucyA9IG5ldyBTZXQodGhpcy5uekRpcmVjdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMubnpEaXJlY3Rpb25zKSB7XHJcbiAgICAgIHRoaXMuZGlyZWN0aW9ucyA9IG5ldyBTZXQoY2hhbmdlcy5uekRpcmVjdGlvbnMuY3VycmVudFZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPG56LXJlc2l6ZS1oYW5kbGUgKm5nRm9yPVwibGV0IGRpciBvZiBkaXJlY3Rpb25zXCIgW256RGlyZWN0aW9uXT1cImRpclwiPjwvbnotcmVzaXplLWhhbmRsZT5cclxuIl19