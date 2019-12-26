/**
 * @fileoverview added by tsickle
 * Generated from: nz-rate-item.component.ts
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
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core';
export class NzRateItemComponent {
    constructor() {
        this.allowHalf = false;
        this.itemHover = new EventEmitter();
        this.itemClick = new EventEmitter();
    }
    /**
     * @param {?} isHalf
     * @return {?}
     */
    hoverRate(isHalf) {
        this.itemHover.next(isHalf && this.allowHalf);
    }
    /**
     * @param {?} isHalf
     * @return {?}
     */
    clickRate(isHalf) {
        this.itemClick.next(isHalf && this.allowHalf);
    }
}
NzRateItemComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: '[nz-rate-item]',
                exportAs: 'nzRateItem',
                template: "<div class=\"ant-rate-star-second\"\r\n  (mouseover)=\"hoverRate(false); $event.stopPropagation();\"\r\n  (click)=\"clickRate(false);\">\r\n  <ng-template [ngTemplateOutlet]=\"character || defaultCharacter\"></ng-template>\r\n</div>\r\n<div class=\"ant-rate-star-first\"\r\n  (mouseover)=\"hoverRate(true); $event.stopPropagation();\"\r\n  (click)=\"clickRate(true);\">\r\n  <ng-template [ngTemplateOutlet]=\"character || defaultCharacter\"></ng-template>\r\n</div>\r\n\r\n<ng-template #defaultCharacter>\r\n  <i nz-icon\r\n    nzType=\"star\"\r\n    nzTheme=\"fill\"></i>\r\n</ng-template>\r\n"
            }] }
];
NzRateItemComponent.propDecorators = {
    character: [{ type: Input }],
    allowHalf: [{ type: Input }],
    itemHover: [{ type: Output }],
    itemClick: [{ type: Output }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzRateItemComponent.prototype, "allowHalf", void 0);
if (false) {
    /** @type {?} */
    NzRateItemComponent.prototype.character;
    /** @type {?} */
    NzRateItemComponent.prototype.allowHalf;
    /** @type {?} */
    NzRateItemComponent.prototype.itemHover;
    /** @type {?} */
    NzRateItemComponent.prototype.itemClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmF0ZS1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvcmF0ZS8iLCJzb3VyY2VzIjpbIm56LXJhdGUtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBU2xELE1BQU0sT0FBTyxtQkFBbUI7SUFQaEM7UUFTMkIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUNqQyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUN4QyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQVM3RCxDQUFDOzs7OztJQVBDLFNBQVMsQ0FBQyxNQUFlO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsTUFBZTtRQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7OztZQW5CRixTQUFTLFNBQUM7Z0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUUsWUFBWTtnQkFDdEIsOGxCQUE0QzthQUM3Qzs7O3dCQUVFLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxNQUFNO3dCQUNOLE1BQU07O0FBRmtCO0lBQWYsWUFBWSxFQUFFOztzREFBNEI7OztJQURwRCx3Q0FBc0M7O0lBQ3RDLHdDQUFvRDs7SUFDcEQsd0NBQTJEOztJQUMzRCx3Q0FBMkQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc2VsZWN0b3I6ICdbbnotcmF0ZS1pdGVtXScsXHJcbiAgZXhwb3J0QXM6ICduelJhdGVJdGVtJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotcmF0ZS1pdGVtLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpSYXRlSXRlbUNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgY2hhcmFjdGVyOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYWxsb3dIYWxmOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGl0ZW1Ib3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgaXRlbUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBob3ZlclJhdGUoaXNIYWxmOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLml0ZW1Ib3Zlci5uZXh0KGlzSGFsZiAmJiB0aGlzLmFsbG93SGFsZik7XHJcbiAgfVxyXG5cclxuICBjbGlja1JhdGUoaXNIYWxmOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLml0ZW1DbGljay5uZXh0KGlzSGFsZiAmJiB0aGlzLmFsbG93SGFsZik7XHJcbiAgfVxyXG59XHJcbiJdfQ==