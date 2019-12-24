import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { InputBoolean, NzConfigService, WithConfig } from 'ng-zorro-antd/core';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
const _c0 = ["*"];
const NZ_CONFIG_COMPONENT_NAME = 'collapse';
export class NzCollapseComponent {
    constructor(nzConfigService) {
        this.nzConfigService = nzConfigService;
        this.listOfNzCollapsePanelComponent = [];
    }
    addPanel(value) {
        this.listOfNzCollapsePanelComponent.push(value);
    }
    removePanel(value) {
        this.listOfNzCollapsePanelComponent.splice(this.listOfNzCollapsePanelComponent.indexOf(value), 1);
    }
    click(collapse) {
        if (this.nzAccordion && !collapse.nzActive) {
            this.listOfNzCollapsePanelComponent
                .filter(item => item !== collapse)
                .forEach(item => {
                if (item.nzActive) {
                    item.nzActive = false;
                    item.nzActiveChange.emit(item.nzActive);
                    item.markForCheck();
                }
            });
        }
        collapse.nzActive = !collapse.nzActive;
        collapse.nzActiveChange.emit(collapse.nzActive);
    }
}
/** @nocollapse */ NzCollapseComponent.ɵfac = function NzCollapseComponent_Factory(t) { return new (t || NzCollapseComponent)(i0.ɵɵdirectiveInject(i1.NzConfigService)); };
/** @nocollapse */ NzCollapseComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzCollapseComponent, selectors: [["nz-collapse"]], inputs: { nzAccordion: "nzAccordion", nzBordered: "nzBordered" }, exportAs: ["nzCollapse"], ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[1, "ant-collapse"]], template: function NzCollapseComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵprojection(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassProp("ant-collapse-borderless", !ctx.nzBordered);
    } }, styles: ["\n      nz-collapse {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
    __metadata("design:type", Boolean)
], NzCollapseComponent.prototype, "nzAccordion", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, true), InputBoolean(),
    __metadata("design:type", Boolean)
], NzCollapseComponent.prototype, "nzBordered", void 0);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzCollapseComponent, [{
        type: Component,
        args: [{
                selector: 'nz-collapse',
                exportAs: 'nzCollapse',
                templateUrl: './nz-collapse.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [
                    `
      nz-collapse {
        display: block;
      }
    `
                ]
            }]
    }], function () { return [{ type: i1.NzConfigService }]; }, { nzAccordion: [{
            type: Input
        }], nzBordered: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29sbGFwc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb2xsYXBzZS8iLCJzb3VyY2VzIjpbIm56LWNvbGxhcHNlLmNvbXBvbmVudC50cyIsIm56LWNvbGxhcHNlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RixPQUFPLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7OztBQUkvRSxNQUFNLHdCQUF3QixHQUFHLFVBQVUsQ0FBQztBQWdCNUMsTUFBTSxPQUFPLG1CQUFtQjtJQUs5QixZQUFtQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFKM0MsbUNBQThCLEdBQStCLEVBQUUsQ0FBQztJQUlsQixDQUFDO0lBRXZELFFBQVEsQ0FBQyxLQUErQjtRQUN0QyxJQUFJLENBQUMsOEJBQThCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxXQUFXLENBQUMsS0FBK0I7UUFDekMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsOEJBQThCLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3BHLENBQUM7SUFFRCxLQUFLLENBQUMsUUFBa0M7UUFDdEMsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRTtZQUMxQyxJQUFJLENBQUMsOEJBQThCO2lCQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDO2lCQUNqQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2QsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztvQkFDdEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUN4QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7aUJBQ3JCO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDTjtRQUNELFFBQVEsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBQ3ZDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsRCxDQUFDOztzRkE3QlUsbUJBQW1CO3dEQUFuQixtQkFBbUI7O1FDOUJoQyw4QkFDRTtRQUFBLGtCQUFZO1FBQ2QsaUJBQU07O1FBRm9CLDBEQUE2Qzs7QURnQ0M7SUFBNUQsVUFBVSxDQUFDLHdCQUF3QixFQUFFLEtBQUssQ0FBQyxFQUFFLFlBQVksRUFBRTs7d0RBQXNCO0FBQ3RCO0lBQTNELFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLENBQUMsRUFBRSxZQUFZLEVBQUU7O3VEQUFxQjtrREFIOUUsbUJBQW1CO2NBZC9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsTUFBTSxFQUFFO29CQUNOOzs7O0tBSUM7aUJBQ0Y7YUFDRjs7a0JBR0UsS0FBSzs7a0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIE56Q29uZmlnU2VydmljZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOekNvbGxhcHNlUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL256LWNvbGxhcHNlLXBhbmVsLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAnY29sbGFwc2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei1jb2xsYXBzZScsXHJcbiAgZXhwb3J0QXM6ICduekNvbGxhcHNlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotY29sbGFwc2UuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIG56LWNvbGxhcHNlIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56Q29sbGFwc2VDb21wb25lbnQge1xyXG4gIHByaXZhdGUgbGlzdE9mTnpDb2xsYXBzZVBhbmVsQ29tcG9uZW50OiBOekNvbGxhcHNlUGFuZWxDb21wb25lbnRbXSA9IFtdO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgZmFsc2UpIEBJbnB1dEJvb2xlYW4oKSBuekFjY29yZGlvbjogYm9vbGVhbjtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIHRydWUpIEBJbnB1dEJvb2xlYW4oKSBuekJvcmRlcmVkOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UpIHt9XHJcblxyXG4gIGFkZFBhbmVsKHZhbHVlOiBOekNvbGxhcHNlUGFuZWxDb21wb25lbnQpOiB2b2lkIHtcclxuICAgIHRoaXMubGlzdE9mTnpDb2xsYXBzZVBhbmVsQ29tcG9uZW50LnB1c2godmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlUGFuZWwodmFsdWU6IE56Q29sbGFwc2VQYW5lbENvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5saXN0T2ZOekNvbGxhcHNlUGFuZWxDb21wb25lbnQuc3BsaWNlKHRoaXMubGlzdE9mTnpDb2xsYXBzZVBhbmVsQ29tcG9uZW50LmluZGV4T2YodmFsdWUpLCAxKTtcclxuICB9XHJcblxyXG4gIGNsaWNrKGNvbGxhcHNlOiBOekNvbGxhcHNlUGFuZWxDb21wb25lbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56QWNjb3JkaW9uICYmICFjb2xsYXBzZS5uekFjdGl2ZSkge1xyXG4gICAgICB0aGlzLmxpc3RPZk56Q29sbGFwc2VQYW5lbENvbXBvbmVudFxyXG4gICAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSBjb2xsYXBzZSlcclxuICAgICAgICAuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgIGlmIChpdGVtLm56QWN0aXZlKSB7XHJcbiAgICAgICAgICAgIGl0ZW0ubnpBY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgaXRlbS5uekFjdGl2ZUNoYW5nZS5lbWl0KGl0ZW0ubnpBY3RpdmUpO1xyXG4gICAgICAgICAgICBpdGVtLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29sbGFwc2UubnpBY3RpdmUgPSAhY29sbGFwc2UubnpBY3RpdmU7XHJcbiAgICBjb2xsYXBzZS5uekFjdGl2ZUNoYW5nZS5lbWl0KGNvbGxhcHNlLm56QWN0aXZlKTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImFudC1jb2xsYXBzZVwiIFtjbGFzcy5hbnQtY29sbGFwc2UtYm9yZGVybGVzc109XCIhbnpCb3JkZXJlZFwiPlxyXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC9kaXY+XHJcbiJdfQ==