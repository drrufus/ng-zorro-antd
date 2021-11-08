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

var _c0 = ["nz-rate-item", ""];
function NzRateItemComponent_ng_template_1_Template(rf, ctx) { }
function NzRateItemComponent_ng_template_3_Template(rf, ctx) { }
function NzRateItemComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 4);
} }
var NzRateItemComponent = /** @class */ (function () {
    function NzRateItemComponent() {
        this.allowHalf = false;
        this.itemHover = new EventEmitter();
        this.itemClick = new EventEmitter();
    }
    /**
     * @param {?} isHalf
     * @return {?}
     */
    NzRateItemComponent.prototype.hoverRate = /**
     * @param {?} isHalf
     * @return {?}
     */
    function (isHalf) {
        this.itemHover.next(isHalf && this.allowHalf);
    };
    /**
     * @param {?} isHalf
     * @return {?}
     */
    NzRateItemComponent.prototype.clickRate = /**
     * @param {?} isHalf
     * @return {?}
     */
    function (isHalf) {
        this.itemClick.next(isHalf && this.allowHalf);
    };
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
        var _r2 = ɵngcc0.ɵɵreference(5);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.character || _r2);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.character || _r2);
    } }, directives: [ɵngcc1.NgTemplateOutlet, ɵngcc2.NzIconDirective], encapsulation: 2, changeDetection: 0 });
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
    return NzRateItemComponent;
}());
export { NzRateItemComponent };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmF0ZS1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsibmc6L25nLXpvcnJvLWFudGQvcmF0ZS9uei1yYXRlLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7OztBQUVsRDtJQUFBO1FBUzJCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDakMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDeEMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7SUFTN0QsQ0FBQzs7Ozs7SUFQQyx1Q0FBUzs7OztJQUFULFVBQVUsTUFBZTtRQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7Ozs7O0lBRUQsdUNBQVM7Ozs7SUFBVCxVQUFVLE1BQWU7UUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoRCxDQUFDLENBQ0gsQUFiUTs7WUFQUCxTQUFTLFNBQUMsRkFRUixLQUFLO2NBUE4sZUFBZSxFQUFFLEhBUWhCLEtBQUs7Z0JBUmtDLENBQUMsTUFBTSxLQVM5QyxNQUFNO01BUlAsYUFBYSxFQUFFLE9BU2QsTUFBTTtBQVR5QixDQUFDLElBQUk7b0JBQ3JDLGhCQU15QjtHQU5qQixFQUFFLGdCQUFnQixiQU1oQixZQUFZLEVBQUU7bUJBTHhCLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLDhDQUlvRDs7NmJBSlIsa0JBQzdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUlEO0lBVUEsMEJBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQWJZLG1CQUFtQjs7O0lBQzlCLHdDQUFzQzs7SUFDdEMsd0NBQW9EOztJQUNwRCx3Q0FBMkQ7O0lBQzNELHdDQUEyRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzZWxlY3RvcjogJ1tuei1yYXRlLWl0ZW1dJyxcclxuICBleHBvcnRBczogJ256UmF0ZUl0ZW0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1yYXRlLWl0ZW0uY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelJhdGVJdGVtQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBjaGFyYWN0ZXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhbGxvd0hhbGY6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgaXRlbUhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBpdGVtQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIGhvdmVyUmF0ZShpc0hhbGY6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuaXRlbUhvdmVyLm5leHQoaXNIYWxmICYmIHRoaXMuYWxsb3dIYWxmKTtcclxuICB9XHJcblxyXG4gIGNsaWNrUmF0ZShpc0hhbGY6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuaXRlbUNsaWNrLm5leHQoaXNIYWxmICYmIHRoaXMuYWxsb3dIYWxmKTtcclxuICB9XHJcbn1cclxuIl19