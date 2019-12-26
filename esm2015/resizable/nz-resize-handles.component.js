/**
 * @fileoverview added by tsickle
 * Generated from: nz-resize-handles.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
/** @type {?} */
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
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzDirections) {
            this.directions = new Set(changes.nzDirections.currentValue);
        }
    }
}
NzResizeHandlesComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-resize-handles',
                exportAs: 'nzResizeHandles',
                template: "<nz-resize-handle *ngFor=\"let dir of directions\" [nzDirection]=\"dir\"></nz-resize-handle>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
NzResizeHandlesComponent.ctorParameters = () => [];
NzResizeHandlesComponent.propDecorators = {
    nzDirections: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NzResizeHandlesComponent.prototype.nzDirections;
    /** @type {?} */
    NzResizeHandlesComponent.prototype.directions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmVzaXplLWhhbmRsZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9yZXNpemFibGUvIiwic291cmNlcyI6WyJuei1yZXNpemUtaGFuZGxlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLE1BQU0sZUFBZSxDQUFDOztBQUlwRyxNQUFNLE9BQU8sd0JBQXdCLEdBQXdCO0lBQzNELGFBQWE7SUFDYixVQUFVO0lBQ1YsWUFBWTtJQUNaLFNBQVM7SUFDVCxRQUFRO0lBQ1IsT0FBTztJQUNQLEtBQUs7SUFDTCxNQUFNO0NBQ1A7QUFRRCxNQUFNLE9BQU8sd0JBQXdCO0lBSW5DO1FBSFMsaUJBQVksR0FBd0Isd0JBQXdCLENBQUM7UUFJcEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsWUFBWSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUM5RDtJQUNILENBQUM7OztZQWxCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsNEdBQWlEO2dCQUNqRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7Ozs7MkJBRUUsS0FBSzs7OztJQUFOLGdEQUFzRTs7SUFDdEUsOENBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOelJlc2l6ZURpcmVjdGlvbiB9IGZyb20gJy4vbnotcmVzaXplLWhhbmRsZS5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfUkVTSVpFX0RJUkVDVElPTjogTnpSZXNpemVEaXJlY3Rpb25bXSA9IFtcclxuICAnYm90dG9tUmlnaHQnLFxyXG4gICd0b3BSaWdodCcsXHJcbiAgJ2JvdHRvbUxlZnQnLFxyXG4gICd0b3BMZWZ0JyxcclxuICAnYm90dG9tJyxcclxuICAncmlnaHQnLFxyXG4gICd0b3AnLFxyXG4gICdsZWZ0J1xyXG5dO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei1yZXNpemUtaGFuZGxlcycsXHJcbiAgZXhwb3J0QXM6ICduelJlc2l6ZUhhbmRsZXMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1yZXNpemUtaGFuZGxlcy5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE56UmVzaXplSGFuZGxlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgbnpEaXJlY3Rpb25zOiBOelJlc2l6ZURpcmVjdGlvbltdID0gREVGQVVMVF9SRVNJWkVfRElSRUNUSU9OO1xyXG4gIGRpcmVjdGlvbnM6IFNldDxOelJlc2l6ZURpcmVjdGlvbj47XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5kaXJlY3Rpb25zID0gbmV3IFNldCh0aGlzLm56RGlyZWN0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5uekRpcmVjdGlvbnMpIHtcclxuICAgICAgdGhpcy5kaXJlY3Rpb25zID0gbmV3IFNldChjaGFuZ2VzLm56RGlyZWN0aW9ucy5jdXJyZW50VmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=