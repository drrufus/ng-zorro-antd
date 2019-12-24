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
    var dir_r317 = ctx.$implicit;
    i0.ɵɵproperty("nzDirection", dir_r317);
} }
export var DEFAULT_RESIZE_DIRECTION = [
    'bottomRight',
    'topRight',
    'bottomLeft',
    'topLeft',
    'bottom',
    'right',
    'top',
    'left'
];
var NzResizeHandlesComponent = /** @class */ (function () {
    function NzResizeHandlesComponent() {
        this.nzDirections = DEFAULT_RESIZE_DIRECTION;
        this.directions = new Set(this.nzDirections);
    }
    NzResizeHandlesComponent.prototype.ngOnChanges = function (changes) {
        if (changes.nzDirections) {
            this.directions = new Set(changes.nzDirections.currentValue);
        }
    };
    /** @nocollapse */ NzResizeHandlesComponent.ɵfac = function NzResizeHandlesComponent_Factory(t) { return new (t || NzResizeHandlesComponent)(); };
    /** @nocollapse */ NzResizeHandlesComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzResizeHandlesComponent, selectors: [["nz-resize-handles"]], inputs: { nzDirections: "nzDirections" }, exportAs: ["nzResizeHandles"], features: [i0.ɵɵNgOnChangesFeature()], decls: 1, vars: 1, consts: [[3, "nzDirection", 4, "ngFor", "ngForOf"], [3, "nzDirection"]], template: function NzResizeHandlesComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, NzResizeHandlesComponent_nz_resize_handle_0_Template, 1, 1, "nz-resize-handle", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngForOf", ctx.directions);
        } }, directives: [i1.NgForOf, i2.NzResizeHandleComponent], encapsulation: 2, changeDetection: 0 });
    return NzResizeHandlesComponent;
}());
export { NzResizeHandlesComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmVzaXplLWhhbmRsZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9yZXNpemFibGUvIiwic291cmNlcyI6WyJuei1yZXNpemUtaGFuZGxlcy5jb21wb25lbnQudHMiLCJuei1yZXNpemUtaGFuZGxlcy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBNEIsTUFBTSxlQUFlLENBQUM7Ozs7O0lDUnBHLHNDQUF3Rjs7O0lBQXZDLHNDQUFtQjs7QURZcEUsTUFBTSxDQUFDLElBQU0sd0JBQXdCLEdBQXdCO0lBQzNELGFBQWE7SUFDYixVQUFVO0lBQ1YsWUFBWTtJQUNaLFNBQVM7SUFDVCxRQUFRO0lBQ1IsT0FBTztJQUNQLEtBQUs7SUFDTCxNQUFNO0NBQ1AsQ0FBQztBQUVGO0lBVUU7UUFIUyxpQkFBWSxHQUF3Qix3QkFBd0IsQ0FBQztRQUlwRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsOENBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLFlBQVksRUFBRTtZQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDOUQ7SUFDSCxDQUFDO29HQVpVLHdCQUF3QjtpRUFBeEIsd0JBQXdCO1lDN0JyQyxtR0FBcUU7O1lBQW5ELHdDQUE4Qjs7bUNEQWhEO0NBMENDLEFBbkJELElBbUJDO1NBYlksd0JBQXdCO2tEQUF4Qix3QkFBd0I7Y0FOcEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFdBQVcsRUFBRSxvQ0FBb0M7Z0JBQ2pELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOztrQkFFRSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOelJlc2l6ZURpcmVjdGlvbiB9IGZyb20gJy4vbnotcmVzaXplLWhhbmRsZS5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfUkVTSVpFX0RJUkVDVElPTjogTnpSZXNpemVEaXJlY3Rpb25bXSA9IFtcclxuICAnYm90dG9tUmlnaHQnLFxyXG4gICd0b3BSaWdodCcsXHJcbiAgJ2JvdHRvbUxlZnQnLFxyXG4gICd0b3BMZWZ0JyxcclxuICAnYm90dG9tJyxcclxuICAncmlnaHQnLFxyXG4gICd0b3AnLFxyXG4gICdsZWZ0J1xyXG5dO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei1yZXNpemUtaGFuZGxlcycsXHJcbiAgZXhwb3J0QXM6ICduelJlc2l6ZUhhbmRsZXMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1yZXNpemUtaGFuZGxlcy5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE56UmVzaXplSGFuZGxlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgbnpEaXJlY3Rpb25zOiBOelJlc2l6ZURpcmVjdGlvbltdID0gREVGQVVMVF9SRVNJWkVfRElSRUNUSU9OO1xyXG4gIGRpcmVjdGlvbnM6IFNldDxOelJlc2l6ZURpcmVjdGlvbj47XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5kaXJlY3Rpb25zID0gbmV3IFNldCh0aGlzLm56RGlyZWN0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5uekRpcmVjdGlvbnMpIHtcclxuICAgICAgdGhpcy5kaXJlY3Rpb25zID0gbmV3IFNldChjaGFuZ2VzLm56RGlyZWN0aW9ucy5jdXJyZW50VmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8bnotcmVzaXplLWhhbmRsZSAqbmdGb3I9XCJsZXQgZGlyIG9mIGRpcmVjdGlvbnNcIiBbbnpEaXJlY3Rpb25dPVwiZGlyXCI+PC9uei1yZXNpemUtaGFuZGxlPlxyXG4iXX0=