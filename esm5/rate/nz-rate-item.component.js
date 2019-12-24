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
var _c0 = ["nz-rate-item", ""];
function NzRateItemComponent_ng_template_1_Template(rf, ctx) { }
function NzRateItemComponent_ng_template_3_Template(rf, ctx) { }
function NzRateItemComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 4);
} }
var NzRateItemComponent = /** @class */ (function () {
    function NzRateItemComponent() {
        this.allowHalf = false;
        this.itemHover = new EventEmitter();
        this.itemClick = new EventEmitter();
    }
    NzRateItemComponent.prototype.hoverRate = function (isHalf) {
        this.itemHover.next(isHalf && this.allowHalf);
    };
    NzRateItemComponent.prototype.clickRate = function (isHalf) {
        this.itemClick.next(isHalf && this.allowHalf);
    };
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
            var _r702 = i0.ɵɵreference(5);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", ctx.character || _r702);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngTemplateOutlet", ctx.character || _r702);
        } }, directives: [i1.NgTemplateOutlet, i2.NzIconDirective], encapsulation: 2, changeDetection: 0 });
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzRateItemComponent.prototype, "allowHalf", void 0);
    return NzRateItemComponent;
}());
export { NzRateItemComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmF0ZS1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvcmF0ZS8iLCJzb3VyY2VzIjpbIm56LXJhdGUtaXRlbS5jb21wb25lbnQudHMiLCJuei1yYXRlLWl0ZW0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hJLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7SUNPaEQsdUJBQTRDOztBREw5QztJQUFBO1FBUzJCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDakMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDeEMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7S0FTNUQ7SUFQQyx1Q0FBUyxHQUFULFVBQVUsTUFBZTtRQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCx1Q0FBUyxHQUFULFVBQVUsTUFBZTtRQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7MEZBWlUsbUJBQW1COzREQUFuQixtQkFBbUI7WUNsQmhDLDhCQUtFO1lBSEEsb0dBQWEsY0FBVSxLQUFLLENBQUMsU0FBRSx3QkFBd0IsSUFBQyxzRkFDL0MsY0FBVSxLQUFLLENBQUMsSUFEK0I7WUFHeEQsb0ZBQWdFO1lBQ2xFLGlCQUFNO1lBQ04sOEJBS0U7WUFIQSxvR0FBYSxjQUFVLElBQUksQ0FBQyxTQUFFLHdCQUF3QixJQUFDLHNGQUM5QyxjQUFVLElBQUksQ0FBQyxJQUQrQjtZQUd2RCxvRkFBZ0U7WUFDbEUsaUJBQU07WUFFTixxSEFDRTs7O1lBWGEsZUFBa0Q7WUFBbEQseURBQWtEO1lBT2xELGVBQWtEO1lBQWxELHlEQUFrRDs7SURRdEM7UUFBZixZQUFZLEVBQUU7OzBEQUE0Qjs4QkFwQnREO0NBK0JDLEFBcEJELElBb0JDO1NBYlksbUJBQW1CO2tEQUFuQixtQkFBbUI7Y0FQL0IsU0FBUztlQUFDO2dCQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFdBQVcsRUFBRSwrQkFBK0I7YUFDN0M7O2tCQUVFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLE1BQU07O2tCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVGVtcGxhdGVSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHNlbGVjdG9yOiAnW256LXJhdGUtaXRlbV0nLFxyXG4gIGV4cG9ydEFzOiAnbnpSYXRlSXRlbScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXJhdGUtaXRlbS5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE56UmF0ZUl0ZW1Db21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGNoYXJhY3RlcjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGFsbG93SGFsZjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBpdGVtSG92ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGl0ZW1DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgaG92ZXJSYXRlKGlzSGFsZjogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5pdGVtSG92ZXIubmV4dChpc0hhbGYgJiYgdGhpcy5hbGxvd0hhbGYpO1xyXG4gIH1cclxuXHJcbiAgY2xpY2tSYXRlKGlzSGFsZjogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5pdGVtQ2xpY2submV4dChpc0hhbGYgJiYgdGhpcy5hbGxvd0hhbGYpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2XHJcbiAgY2xhc3M9XCJhbnQtcmF0ZS1zdGFyLXNlY29uZFwiXHJcbiAgKG1vdXNlb3Zlcik9XCJob3ZlclJhdGUoZmFsc2UpOyAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIlxyXG4gIChjbGljayk9XCJjbGlja1JhdGUoZmFsc2UpXCJcclxuPlxyXG4gIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJjaGFyYWN0ZXIgfHwgZGVmYXVsdENoYXJhY3RlclwiPjwvbmctdGVtcGxhdGU+XHJcbjwvZGl2PlxyXG48ZGl2XHJcbiAgY2xhc3M9XCJhbnQtcmF0ZS1zdGFyLWZpcnN0XCJcclxuICAobW91c2VvdmVyKT1cImhvdmVyUmF0ZSh0cnVlKTsgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCJcclxuICAoY2xpY2spPVwiY2xpY2tSYXRlKHRydWUpXCJcclxuPlxyXG4gIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJjaGFyYWN0ZXIgfHwgZGVmYXVsdENoYXJhY3RlclwiPjwvbmctdGVtcGxhdGU+XHJcbjwvZGl2PlxyXG5cclxuPG5nLXRlbXBsYXRlICNkZWZhdWx0Q2hhcmFjdGVyPlxyXG4gIDxpIG56LWljb24gbnpUeXBlPVwic3RhclwiIG56VGhlbWU9XCJmaWxsXCI+PC9pPlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=