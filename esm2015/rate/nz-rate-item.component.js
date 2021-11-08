/**
 * @fileoverview added by tsickle
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
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'ng-zorro-antd/icon';

const _c0 = ["nz-rate-item", ""];
function NzRateItemComponent_ng_template_1_Template(rf, ctx) { }
function NzRateItemComponent_ng_template_3_Template(rf, ctx) { }
function NzRateItemComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 4);
} }
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
NzRateItemComponent.ɵfac = function NzRateItemComponent_Factory(t) { return new (t || NzRateItemComponent)(); };
NzRateItemComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzRateItemComponent, selectors: [["", "nz-rate-item", ""]], inputs: { allowHalf: "allowHalf", character: "character" }, outputs: { itemHover: "itemHover", itemClick: "itemClick" }, exportAs: ["nzRateItem"], attrs: _c0, decls: 6, vars: 2, consts: [[1, "ant-rate-star-second", 3, "mouseover", "click"], [3, "ngTemplateOutlet"], [1, "ant-rate-star-first", 3, "mouseover", "click"], ["defaultCharacter", ""], ["nz-icon", "", "nzType", "star", "nzTheme", "fill"]], template: function NzRateItemComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵlistener("mouseover", function NzRateItemComponent_Template_div_mouseover_0_listener($event) { ctx.hoverRate(false); return $event.stopPropagation(); })("click", function NzRateItemComponent_Template_div_click_0_listener() { return ctx.clickRate(false); });
        ɵngcc0.ɵɵtemplate(1, NzRateItemComponent_ng_template_1_Template, 0, 0, "ng-template", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵlistener("mouseover", function NzRateItemComponent_Template_div_mouseover_2_listener($event) { ctx.hoverRate(true); return $event.stopPropagation(); })("click", function NzRateItemComponent_Template_div_click_2_listener() { return ctx.clickRate(true); });
        ɵngcc0.ɵɵtemplate(3, NzRateItemComponent_ng_template_3_Template, 0, 0, "ng-template", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(4, NzRateItemComponent_ng_template_4_Template, 1, 0, "ng-template", null, 3, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r2 = ɵngcc0.ɵɵreference(5);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.character || _r2);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.character || _r2);
    } }, directives: [ɵngcc1.NgTemplateOutlet, ɵngcc2.NzIconDirective], encapsulation: 2, changeDetection: 0 });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzRateItemComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: '[nz-rate-item]',
                exportAs: 'nzRateItem',
                template: "<div class=\"ant-rate-star-second\"\r\n  (mouseover)=\"hoverRate(false); $event.stopPropagation();\"\r\n  (click)=\"clickRate(false);\">\r\n  <ng-template [ngTemplateOutlet]=\"character || defaultCharacter\"></ng-template>\r\n</div>\r\n<div class=\"ant-rate-star-first\"\r\n  (mouseover)=\"hoverRate(true); $event.stopPropagation();\"\r\n  (click)=\"clickRate(true);\">\r\n  <ng-template [ngTemplateOutlet]=\"character || defaultCharacter\"></ng-template>\r\n</div>\r\n\r\n<ng-template #defaultCharacter>\r\n  <i nz-icon\r\n    nzType=\"star\"\r\n    nzTheme=\"fill\"></i>\r\n</ng-template>\r\n"
            }]
    }], function () { return []; }, { allowHalf: [{
            type: Input
        }], itemHover: [{
            type: Output
        }], itemClick: [{
            type: Output
        }], character: [{
            type: Input
        }] }); })();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmF0ZS1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsibmc6L25nLXpvcnJvLWFudGQvcmF0ZS9uei1yYXRlLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7OztBQVNsRCxNQUFNLE9BQU8sbUJBQW1CO0lBUGhDO1FBUzJCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDakMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDeEMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7SUFTN0QsQ0FBQzs7Ozs7SUFQQyxTQUFTLENBQUMsTUFBZTtRQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLE1BQWU7UUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0YsZ0RBcEJBLFNBQVMsU0FBQyxrQkFDVCxlQUFlLEVBQUUsVUFNZjtZQU5zQyxDQUFDLE1BQU0sa0JBQy9DO1dBQWEsRUFBRSxpQkFBaUIsQ0FBQyxQQU1oQyxLQUFLO0NBTitCLGtCQUNyQyxRQUFRLEVBQUUsTEFNVCxLQUFLO1dBTm9CLGtCQUMxQixMQU1DLE1BQU07RUFOQyxFQUFFLFlBQVksUUFPckIsTUFBTTtBQU5QO0FBSXlCO0lBQWYsWUFBWSxFQUFFOztzREFBNEI7Ozs7Ozs7O3VJQUpSLGNBQzdDOzs7Ozs7Ozs7O29CQUlEOzs7SUFGRSx3Q0FBc0M7O0lBQ3RDLHdDQUFvRDs7SUFDcEQsd0NBQTJEOztJQUMzRCx3Q0FBMkQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc2VsZWN0b3I6ICdbbnotcmF0ZS1pdGVtXScsXHJcbiAgZXhwb3J0QXM6ICduelJhdGVJdGVtJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotcmF0ZS1pdGVtLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpSYXRlSXRlbUNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgY2hhcmFjdGVyOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYWxsb3dIYWxmOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGl0ZW1Ib3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgaXRlbUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBob3ZlclJhdGUoaXNIYWxmOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLml0ZW1Ib3Zlci5uZXh0KGlzSGFsZiAmJiB0aGlzLmFsbG93SGFsZik7XHJcbiAgfVxyXG5cclxuICBjbGlja1JhdGUoaXNIYWxmOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLml0ZW1DbGljay5uZXh0KGlzSGFsZiAmJiB0aGlzLmFsbG93SGFsZik7XHJcbiAgfVxyXG59XHJcbiJdfQ==