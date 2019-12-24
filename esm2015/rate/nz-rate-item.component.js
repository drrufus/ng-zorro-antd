import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/icon";
const _c0 = ["nz-rate-item", ""];
function NzRateItemComponent_ng_template_1_Template(rf, ctx) { }
function NzRateItemComponent_ng_template_3_Template(rf, ctx) { }
function NzRateItemComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 4);
} }
export class NzRateItemComponent {
    constructor() {
        this.allowHalf = false;
        this.itemHover = new EventEmitter();
        this.itemClick = new EventEmitter();
    }
    hoverRate(isHalf) {
        this.itemHover.next(isHalf && this.allowHalf);
    }
    clickRate(isHalf) {
        this.itemClick.next(isHalf && this.allowHalf);
    }
}
/** @nocollapse */ NzRateItemComponent.ɵfac = function NzRateItemComponent_Factory(t) { return new (t || NzRateItemComponent)(); };
/** @nocollapse */ NzRateItemComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzRateItemComponent, selectors: [["", "nz-rate-item", ""]], inputs: { character: "character", allowHalf: "allowHalf" }, outputs: { itemHover: "itemHover", itemClick: "itemClick" }, exportAs: ["nzRateItem"], attrs: _c0, decls: 6, vars: 2, consts: [[1, "ant-rate-star-second", 3, "mouseover", "click"], [3, "ngTemplateOutlet"], [1, "ant-rate-star-first", 3, "mouseover", "click"], ["defaultCharacter", ""], ["nz-icon", "", "nzType", "star", "nzTheme", "fill"]], template: function NzRateItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("mouseover", function NzRateItemComponent_Template_div_mouseover_0_listener($event) { ctx.hoverRate(false); return $event.stopPropagation(); })("click", function NzRateItemComponent_Template_div_click_0_listener($event) { return ctx.clickRate(false); });
        i0.ɵɵtemplate(1, NzRateItemComponent_ng_template_1_Template, 0, 0, "ng-template", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵlistener("mouseover", function NzRateItemComponent_Template_div_mouseover_2_listener($event) { ctx.hoverRate(true); return $event.stopPropagation(); })("click", function NzRateItemComponent_Template_div_click_2_listener($event) { return ctx.clickRate(true); });
        i0.ɵɵtemplate(3, NzRateItemComponent_ng_template_3_Template, 0, 0, "ng-template", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, NzRateItemComponent_ng_template_4_Template, 1, 0, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r691 = i0.ɵɵreference(5);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.character || _r691);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.character || _r691);
    } }, directives: [i1.NgTemplateOutlet, i2.NzIconDirective], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzRateItemComponent.prototype, "allowHalf", void 0);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzRateItemComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: '[nz-rate-item]',
                exportAs: 'nzRateItem',
                templateUrl: './nz-rate-item.component.html'
            }]
    }], null, { character: [{
            type: Input
        }], allowHalf: [{
            type: Input
        }], itemHover: [{
            type: Output
        }], itemClick: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmF0ZS1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvcmF0ZS8iLCJzb3VyY2VzIjpbIm56LXJhdGUtaXRlbS5jb21wb25lbnQudHMiLCJuei1yYXRlLWl0ZW0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hJLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7SUNPaEQsdUJBQTRDOztBREU5QyxNQUFNLE9BQU8sbUJBQW1CO0lBUGhDO1FBUzJCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDakMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDeEMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7S0FTNUQ7SUFQQyxTQUFTLENBQUMsTUFBZTtRQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxTQUFTLENBQUMsTUFBZTtRQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7O3NGQVpVLG1CQUFtQjt3REFBbkIsbUJBQW1CO1FDbEJoQyw4QkFLRTtRQUhBLG9HQUFhLGNBQVUsS0FBSyxDQUFDLFNBQUUsd0JBQXdCLElBQUMsc0ZBQy9DLGNBQVUsS0FBSyxDQUFDLElBRCtCO1FBR3hELG9GQUFnRTtRQUNsRSxpQkFBTTtRQUNOLDhCQUtFO1FBSEEsb0dBQWEsY0FBVSxJQUFJLENBQUMsU0FBRSx3QkFBd0IsSUFBQyxzRkFDOUMsY0FBVSxJQUFJLENBQUMsSUFEK0I7UUFHdkQsb0ZBQWdFO1FBQ2xFLGlCQUFNO1FBRU4scUhBQ0U7OztRQVhhLGVBQWtEO1FBQWxELHlEQUFrRDtRQU9sRCxlQUFrRDtRQUFsRCx5REFBa0Q7O0FEUXRDO0lBQWYsWUFBWSxFQUFFOztzREFBNEI7a0RBRnpDLG1CQUFtQjtjQVAvQixTQUFTO2VBQUM7Z0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUUsWUFBWTtnQkFDdEIsV0FBVyxFQUFFLCtCQUErQjthQUM3Qzs7a0JBRUUsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsTUFBTTs7a0JBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBUZW1wbGF0ZVJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc2VsZWN0b3I6ICdbbnotcmF0ZS1pdGVtXScsXHJcbiAgZXhwb3J0QXM6ICduelJhdGVJdGVtJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotcmF0ZS1pdGVtLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpSYXRlSXRlbUNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgY2hhcmFjdGVyOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYWxsb3dIYWxmOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGl0ZW1Ib3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgaXRlbUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBob3ZlclJhdGUoaXNIYWxmOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLml0ZW1Ib3Zlci5uZXh0KGlzSGFsZiAmJiB0aGlzLmFsbG93SGFsZik7XHJcbiAgfVxyXG5cclxuICBjbGlja1JhdGUoaXNIYWxmOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLml0ZW1DbGljay5uZXh0KGlzSGFsZiAmJiB0aGlzLmFsbG93SGFsZik7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXZcclxuICBjbGFzcz1cImFudC1yYXRlLXN0YXItc2Vjb25kXCJcclxuICAobW91c2VvdmVyKT1cImhvdmVyUmF0ZShmYWxzZSk7ICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiXHJcbiAgKGNsaWNrKT1cImNsaWNrUmF0ZShmYWxzZSlcIlxyXG4+XHJcbiAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNoYXJhY3RlciB8fCBkZWZhdWx0Q2hhcmFjdGVyXCI+PC9uZy10ZW1wbGF0ZT5cclxuPC9kaXY+XHJcbjxkaXZcclxuICBjbGFzcz1cImFudC1yYXRlLXN0YXItZmlyc3RcIlxyXG4gIChtb3VzZW92ZXIpPVwiaG92ZXJSYXRlKHRydWUpOyAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIlxyXG4gIChjbGljayk9XCJjbGlja1JhdGUodHJ1ZSlcIlxyXG4+XHJcbiAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNoYXJhY3RlciB8fCBkZWZhdWx0Q2hhcmFjdGVyXCI+PC9uZy10ZW1wbGF0ZT5cclxuPC9kaXY+XHJcblxyXG48bmctdGVtcGxhdGUgI2RlZmF1bHRDaGFyYWN0ZXI+XHJcbiAgPGkgbnotaWNvbiBuelR5cGU9XCJzdGFyXCIgbnpUaGVtZT1cImZpbGxcIj48L2k+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==