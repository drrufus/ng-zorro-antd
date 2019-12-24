import { __read } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, NgZone, Output, QueryList, TemplateRef, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { filter, map, pairwise, takeUntil } from 'rxjs/operators';
import { NzOptionLiComponent } from './nz-option-li.component';
import { NzSelectService } from './nz-select.service';
import * as i0 from "@angular/core";
import * as i1 from "./nz-select.service";
import * as i2 from "@angular/common";
import * as i3 from "./nz-select-unselectable.directive";
import * as i4 from "ng-zorro-antd/empty";
import * as i5 from "./nz-option-li.component";
import * as i6 from "ng-zorro-antd/core";
import * as i7 from "./nz-option.pipe";
var _c0 = ["dropdownUl"];
var _c1 = ["nz-option-container", ""];
function NzOptionContainerComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 7);
    i0.ɵɵelement(1, "nz-embed-empty", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1483 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzComponentName", "select")("specificContent", ctx_r1483.nzNotFoundContent);
} }
function NzOptionContainerComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "li", 9);
} if (rf & 2) {
    var ctx_r1484 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nzMenuItemSelectedIcon", ctx_r1484.nzMenuItemSelectedIcon)("nzOption", ctx_r1484.nzSelectService.addedTagOption);
} }
function NzOptionContainerComponent_ng_container_4_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "li", 9);
} if (rf & 2) {
    var option_r1488 = i0.ɵɵnextContext().$implicit;
    var ctx_r1489 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nzMenuItemSelectedIcon", ctx_r1489.nzMenuItemSelectedIcon)("nzOption", option_r1488);
} }
function NzOptionContainerComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzOptionContainerComponent_ng_container_4_li_1_Template, 1, 2, "li", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var option_r1488 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !option_r1488.nzHide);
} }
function NzOptionContainerComponent_li_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var group_r1491 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", group_r1491.nzLabel, " ");
} }
function NzOptionContainerComponent_li_6_ng_container_4_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "li", 9);
} if (rf & 2) {
    var option_r1495 = i0.ɵɵnextContext().$implicit;
    var ctx_r1496 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("nzMenuItemSelectedIcon", ctx_r1496.nzMenuItemSelectedIcon)("nzOption", option_r1495);
} }
function NzOptionContainerComponent_li_6_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzOptionContainerComponent_li_6_ng_container_4_li_1_Template, 1, 2, "li", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var option_r1495 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !option_r1495.nzHide);
} }
function NzOptionContainerComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 10);
    i0.ɵɵelementStart(1, "div", 11);
    i0.ɵɵtemplate(2, NzOptionContainerComponent_li_6_ng_container_2_Template, 2, 1, "ng-container", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ul", 13);
    i0.ɵɵtemplate(4, NzOptionContainerComponent_li_6_ng_container_4_Template, 2, 1, "ng-container", 4);
    i0.ɵɵpipe(5, "nzFilterOption");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var group_r1491 = ctx.$implicit;
    var ctx_r1486 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("title", group_r1491.isLabelString ? group_r1491.nzLabel : "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", group_r1491.nzLabel);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind4(5, 4, group_r1491.listOfNzOptionComponent, ctx_r1486.nzSelectService.searchValue, ctx_r1486.nzSelectService.filterOption, ctx_r1486.nzSelectService.serverSearch))("ngForTrackBy", ctx_r1486.trackValue);
} }
function NzOptionContainerComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "li", 9);
} if (rf & 2) {
    var option_r1498 = ctx.$implicit;
    var ctx_r1487 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nzMenuItemSelectedIcon", ctx_r1487.nzMenuItemSelectedIcon)("nzOption", option_r1498);
} }
var NzOptionContainerComponent = /** @class */ (function () {
    function NzOptionContainerComponent(nzSelectService, cdr, ngZone) {
        this.nzSelectService = nzSelectService;
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.destroy$ = new Subject();
        this.lastScrollTop = 0;
        this.nzScrollToBottom = new EventEmitter();
    }
    NzOptionContainerComponent.prototype.scrollIntoViewIfNeeded = function (option) {
        var _this = this;
        // delay after open
        setTimeout(function () {
            if (_this.listOfNzOptionLiComponent && _this.listOfNzOptionLiComponent.length && option) {
                var targetOption = _this.listOfNzOptionLiComponent.find(function (o) { return _this.nzSelectService.compareWith(o.nzOption.nzValue, option.nzValue); });
                // tslint:disable:no-any
                if (targetOption && targetOption.el && targetOption.el.scrollIntoViewIfNeeded) {
                    targetOption.el.scrollIntoViewIfNeeded(false);
                }
            }
        });
    };
    NzOptionContainerComponent.prototype.trackLabel = function (_index, option) {
        return option.nzLabel;
    };
    // tslint:disable-next-line:no-any
    NzOptionContainerComponent.prototype.trackValue = function (_index, option) {
        return option.nzValue;
    };
    NzOptionContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nzSelectService.activatedOption$.pipe(takeUntil(this.destroy$)).subscribe(function (option) {
            _this.scrollIntoViewIfNeeded(option);
        });
        this.nzSelectService.check$.pipe(takeUntil(this.destroy$)).subscribe(function () {
            _this.cdr.markForCheck();
        });
        this.ngZone.runOutsideAngular(function () {
            var ul = _this.dropdownUl.nativeElement;
            fromEvent(ul, 'scroll')
                .pipe(takeUntil(_this.destroy$))
                .subscribe(function (e) {
                e.preventDefault();
                e.stopPropagation();
                if (ul && ul.scrollTop > _this.lastScrollTop && ul.scrollHeight < ul.clientHeight + ul.scrollTop + 10) {
                    _this.lastScrollTop = ul.scrollTop;
                    _this.ngZone.run(function () {
                        _this.nzScrollToBottom.emit();
                    });
                }
            });
        });
    };
    NzOptionContainerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.listOfNzOptionLiComponent.changes
            .pipe(map(function (list) { return list.length; }), pairwise(), filter(function (_a) {
            var _b = __read(_a, 2), before = _b[0], after = _b[1];
            return after < before;
        }), takeUntil(this.destroy$))
            .subscribe(function () { return (_this.lastScrollTop = 0); });
    };
    NzOptionContainerComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /** @nocollapse */ NzOptionContainerComponent.ɵfac = function NzOptionContainerComponent_Factory(t) { return new (t || NzOptionContainerComponent)(i0.ɵɵdirectiveInject(i1.NzSelectService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    /** @nocollapse */ NzOptionContainerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzOptionContainerComponent, selectors: [["", "nz-option-container", ""]], viewQuery: function NzOptionContainerComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵstaticViewQuery(_c0, true);
            i0.ɵɵviewQuery(NzOptionLiComponent, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dropdownUl = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listOfNzOptionLiComponent = _t);
        } }, inputs: { nzNotFoundContent: "nzNotFoundContent", nzMenuItemSelectedIcon: "nzMenuItemSelectedIcon" }, outputs: { nzScrollToBottom: "nzScrollToBottom" }, exportAs: ["nzOptionContainer"], attrs: _c1, decls: 10, vars: 23, consts: [["role", "menu", "tabindex", "0", 1, "ant-select-dropdown-menu", "ant-select-dropdown-menu-root", "ant-select-dropdown-menu-vertical"], ["dropdownUl", ""], ["nz-select-unselectable", "", "class", "ant-select-dropdown-menu-item ant-select-dropdown-menu-item-disabled", 4, "ngIf"], ["nz-option-li", "", 3, "nzMenuItemSelectedIcon", "nzOption", 4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "ant-select-dropdown-menu-item-group", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["nz-option-li", "", 3, "nzMenuItemSelectedIcon", "nzOption", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["nz-select-unselectable", "", 1, "ant-select-dropdown-menu-item", "ant-select-dropdown-menu-item-disabled"], [3, "nzComponentName", "specificContent"], ["nz-option-li", "", 3, "nzMenuItemSelectedIcon", "nzOption"], [1, "ant-select-dropdown-menu-item-group"], [1, "ant-select-dropdown-menu-item-group-title"], [4, "nzStringTemplateOutlet"], [1, "ant-select-dropdown-menu-item-group-list"]], template: function NzOptionContainerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "ul", 0, 1);
            i0.ɵɵtemplate(2, NzOptionContainerComponent_li_2_Template, 2, 2, "li", 2);
            i0.ɵɵtemplate(3, NzOptionContainerComponent_li_3_Template, 1, 2, "li", 3);
            i0.ɵɵtemplate(4, NzOptionContainerComponent_ng_container_4_Template, 2, 1, "ng-container", 4);
            i0.ɵɵpipe(5, "nzFilterOption");
            i0.ɵɵtemplate(6, NzOptionContainerComponent_li_6_Template, 6, 9, "li", 5);
            i0.ɵɵpipe(7, "nzFilterGroupOption");
            i0.ɵɵtemplate(8, NzOptionContainerComponent_li_8_Template, 1, 2, "li", 6);
            i0.ɵɵpipe(9, "nzFilterOption");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.nzSelectService.isShowNotFound);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.nzSelectService.addedTagOption);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind4(5, 8, ctx.nzSelectService.listOfNzOptionComponent, ctx.nzSelectService.searchValue, ctx.nzSelectService.filterOption, ctx.nzSelectService.serverSearch))("ngForTrackBy", ctx.trackValue);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind4(7, 13, ctx.nzSelectService.listOfNzOptionGroupComponent, ctx.nzSelectService.searchValue, ctx.nzSelectService.filterOption, ctx.nzSelectService.serverSearch))("ngForTrackBy", ctx.trackLabel);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind4(9, 18, ctx.nzSelectService.listOfTagOption, ctx.nzSelectService.searchValue, ctx.nzSelectService.filterOption, ctx.nzSelectService.serverSearch))("ngForTrackBy", ctx.trackValue);
        } }, directives: [i2.NgIf, i2.NgForOf, i3.NzSelectUnselectableDirective, i4.NzEmbedEmptyComponent, i5.NzOptionLiComponent, i6.NzStringTemplateOutletDirective], pipes: [i7.NzFilterOptionPipe, i7.NzFilterGroupOptionPipe], encapsulation: 2, changeDetection: 0 });
    return NzOptionContainerComponent;
}());
export { NzOptionContainerComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzOptionContainerComponent, [{
        type: Component,
        args: [{
                selector: '[nz-option-container]',
                exportAs: 'nzOptionContainer',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                templateUrl: './nz-option-container.component.html'
            }]
    }], function () { return [{ type: i1.NzSelectService }, { type: i0.ChangeDetectorRef }, { type: i0.NgZone }]; }, { listOfNzOptionLiComponent: [{
            type: ViewChildren,
            args: [NzOptionLiComponent]
        }], dropdownUl: [{
            type: ViewChild,
            args: ['dropdownUl', { static: true }]
        }], nzNotFoundContent: [{
            type: Input
        }], nzMenuItemSelectedIcon: [{
            type: Input
        }], nzScrollToBottom: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotb3B0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3NlbGVjdC8iLCJzb3VyY2VzIjpbIm56LW9wdGlvbi1jb250YWluZXIuY29tcG9uZW50LnRzIiwibnotb3B0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFHTixNQUFNLEVBQ04sU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1QsWUFBWSxFQUNaLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFL0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7Ozs7Ozs7SUN6QnBELDZCQUtFO0lBQUEsb0NBR2tCO0lBQ3BCLGlCQUFLOzs7SUFIRCxlQUE0QjtJQUE1QiwwQ0FBNEIsZ0RBQUE7OztJQUloQyx3QkFLTTs7O0lBRkoseUVBQWlELHNEQUFBOzs7SUFhakQsd0JBS007Ozs7SUFGSix5RUFBaUQsMEJBQUE7OztJQWJyRCw2QkFVRTtJQUFBLHdGQUtDO0lBQ0gsMEJBQWU7OztJQUpYLGVBQXNCO0lBQXRCLDJDQUFzQjs7O0lBb0J0Qiw2QkFBdUQ7SUFBQSxZQUFvQjtJQUFBLDBCQUFlOzs7SUFBbkMsZUFBb0I7SUFBcEIsb0RBQW9COzs7SUFhekUsd0JBS007Ozs7SUFGSix5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WUM1Q25DLGdDQU1FO1lBQUEseUVBS0U7WUFLRix5RUFLQztZQUNELDZGQVVFOztZQU9GLHlFQVdFOztZQTBCRix5RUFZQzs7WUFDSCxpQkFBSzs7WUFsRkQsZUFBc0M7WUFBdEMseURBQXNDO1lBV3RDLGVBQXNDO1lBQXRDLHlEQUFzQztZQUt0QyxlQU9DO1lBUEQsZ01BT0MsZ0NBQUE7WUFXRCxlQU9DO1lBUEQsc01BT0MsZ0NBQUE7WUE4QkQsZUFPQztZQVBELHlMQU9DLGdDQUFBOztxQ0RyRkw7Q0FpSEMsQUFoRkQsSUFnRkM7U0F4RVksMEJBQTBCO2tEQUExQiwwQkFBMEI7Y0FSdEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsV0FBVyxFQUFFLHNDQUFzQzthQUNwRDs7a0JBSUUsWUFBWTttQkFBQyxtQkFBbUI7O2tCQUNoQyxTQUFTO21CQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O2tCQUN4QyxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE5nWm9uZSxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBRdWVyeUxpc3QsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdDaGlsZHJlbixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHBhaXJ3aXNlLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE56T3B0aW9uR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL256LW9wdGlvbi1ncm91cC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOek9wdGlvbkxpQ29tcG9uZW50IH0gZnJvbSAnLi9uei1vcHRpb24tbGkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL256LW9wdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOelNlbGVjdFNlcnZpY2UgfSBmcm9tICcuL256LXNlbGVjdC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnW256LW9wdGlvbi1jb250YWluZXJdJyxcclxuICBleHBvcnRBczogJ256T3B0aW9uQ29udGFpbmVyJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1vcHRpb24tY29udGFpbmVyLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpPcHRpb25Db250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJpdmF0ZSBsYXN0U2Nyb2xsVG9wID0gMDtcclxuICBAVmlld0NoaWxkcmVuKE56T3B0aW9uTGlDb21wb25lbnQpIGxpc3RPZk56T3B0aW9uTGlDb21wb25lbnQ6IFF1ZXJ5TGlzdDxOek9wdGlvbkxpQ29tcG9uZW50PjtcclxuICBAVmlld0NoaWxkKCdkcm9wZG93blVsJywgeyBzdGF0aWM6IHRydWUgfSkgZHJvcGRvd25VbDogRWxlbWVudFJlZjxIVE1MVUxpc3RFbGVtZW50PjtcclxuICBASW5wdXQoKSBuek5vdEZvdW5kQ29udGVudDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56TWVudUl0ZW1TZWxlY3RlZEljb246IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNjcm9sbFRvQm90dG9tID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBzY3JvbGxJbnRvVmlld0lmTmVlZGVkKG9wdGlvbjogTnpPcHRpb25Db21wb25lbnQpOiB2b2lkIHtcclxuICAgIC8vIGRlbGF5IGFmdGVyIG9wZW5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5saXN0T2ZOek9wdGlvbkxpQ29tcG9uZW50ICYmIHRoaXMubGlzdE9mTnpPcHRpb25MaUNvbXBvbmVudC5sZW5ndGggJiYgb3B0aW9uKSB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0T3B0aW9uID0gdGhpcy5saXN0T2ZOek9wdGlvbkxpQ29tcG9uZW50LmZpbmQobyA9PiB0aGlzLm56U2VsZWN0U2VydmljZS5jb21wYXJlV2l0aChvLm56T3B0aW9uLm56VmFsdWUsIG9wdGlvbi5uelZhbHVlKSk7XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGU6bm8tYW55XHJcbiAgICAgICAgaWYgKHRhcmdldE9wdGlvbiAmJiB0YXJnZXRPcHRpb24uZWwgJiYgKHRhcmdldE9wdGlvbi5lbCBhcyBhbnkpLnNjcm9sbEludG9WaWV3SWZOZWVkZWQpIHtcclxuICAgICAgICAgICh0YXJnZXRPcHRpb24uZWwgYXMgYW55KS5zY3JvbGxJbnRvVmlld0lmTmVlZGVkKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdHJhY2tMYWJlbChfaW5kZXg6IG51bWJlciwgb3B0aW9uOiBOek9wdGlvbkdyb3VwQ29tcG9uZW50KTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4ge1xyXG4gICAgcmV0dXJuIG9wdGlvbi5uekxhYmVsO1xyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHRyYWNrVmFsdWUoX2luZGV4OiBudW1iZXIsIG9wdGlvbjogTnpPcHRpb25Db21wb25lbnQpOiBhbnkge1xyXG4gICAgcmV0dXJuIG9wdGlvbi5uelZhbHVlO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIG56U2VsZWN0U2VydmljZTogTnpTZWxlY3RTZXJ2aWNlLCBwdWJsaWMgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5hY3RpdmF0ZWRPcHRpb24kLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUob3B0aW9uID0+IHtcclxuICAgICAgdGhpcy5zY3JvbGxJbnRvVmlld0lmTmVlZGVkKG9wdGlvbiEpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5jaGVjayQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHVsID0gdGhpcy5kcm9wZG93blVsLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgIGZyb21FdmVudDxNb3VzZUV2ZW50Pih1bCwgJ3Njcm9sbCcpXHJcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoZSA9PiB7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgaWYgKHVsICYmIHVsLnNjcm9sbFRvcCA+IHRoaXMubGFzdFNjcm9sbFRvcCAmJiB1bC5zY3JvbGxIZWlnaHQgPCB1bC5jbGllbnRIZWlnaHQgKyB1bC5zY3JvbGxUb3AgKyAxMCkge1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RTY3JvbGxUb3AgPSB1bC5zY3JvbGxUb3A7XHJcbiAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5uelNjcm9sbFRvQm90dG9tLmVtaXQoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMubGlzdE9mTnpPcHRpb25MaUNvbXBvbmVudC5jaGFuZ2VzXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIG1hcChsaXN0ID0+IGxpc3QubGVuZ3RoKSxcclxuICAgICAgICBwYWlyd2lzZSgpLFxyXG4gICAgICAgIGZpbHRlcigoW2JlZm9yZSwgYWZ0ZXJdKSA9PiBhZnRlciA8IGJlZm9yZSksXHJcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiAodGhpcy5sYXN0U2Nyb2xsVG9wID0gMCkpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcbn1cclxuIiwiPHVsXHJcbiAgI2Ryb3Bkb3duVWxcclxuICBjbGFzcz1cImFudC1zZWxlY3QtZHJvcGRvd24tbWVudSBhbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtcm9vdCBhbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtdmVydGljYWxcIlxyXG4gIHJvbGU9XCJtZW51XCJcclxuICB0YWJpbmRleD1cIjBcIlxyXG4+XHJcbiAgPGxpXHJcbiAgICAqbmdJZj1cIm56U2VsZWN0U2VydmljZS5pc1Nob3dOb3RGb3VuZFwiXHJcbiAgICBuei1zZWxlY3QtdW5zZWxlY3RhYmxlXHJcbiAgICBjbGFzcz1cImFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtIGFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtLWRpc2FibGVkXCJcclxuICA+XHJcbiAgICA8bnotZW1iZWQtZW1wdHlcclxuICAgICAgW256Q29tcG9uZW50TmFtZV09XCInc2VsZWN0J1wiXHJcbiAgICAgIFtzcGVjaWZpY0NvbnRlbnRdPVwibnpOb3RGb3VuZENvbnRlbnRcIlxyXG4gICAgPjwvbnotZW1iZWQtZW1wdHk+XHJcbiAgPC9saT5cclxuICA8bGlcclxuICAgIG56LW9wdGlvbi1saVxyXG4gICAgKm5nSWY9XCJuelNlbGVjdFNlcnZpY2UuYWRkZWRUYWdPcHRpb25cIlxyXG4gICAgW256TWVudUl0ZW1TZWxlY3RlZEljb25dPVwibnpNZW51SXRlbVNlbGVjdGVkSWNvblwiXHJcbiAgICBbbnpPcHRpb25dPVwibnpTZWxlY3RTZXJ2aWNlLmFkZGVkVGFnT3B0aW9uXCJcclxuICA+PC9saT5cclxuICA8bmctY29udGFpbmVyXHJcbiAgICAqbmdGb3I9XCJcclxuICAgICAgbGV0IG9wdGlvbiBvZiBuelNlbGVjdFNlcnZpY2UubGlzdE9mTnpPcHRpb25Db21wb25lbnRcclxuICAgICAgICB8IG56RmlsdGVyT3B0aW9uXHJcbiAgICAgICAgICA6IG56U2VsZWN0U2VydmljZS5zZWFyY2hWYWx1ZVxyXG4gICAgICAgICAgOiBuelNlbGVjdFNlcnZpY2UuZmlsdGVyT3B0aW9uXHJcbiAgICAgICAgICA6IG56U2VsZWN0U2VydmljZS5zZXJ2ZXJTZWFyY2g7XHJcbiAgICAgIHRyYWNrQnk6IHRyYWNrVmFsdWVcclxuICAgIFwiXHJcbiAgPlxyXG4gICAgPGxpXHJcbiAgICAgIG56LW9wdGlvbi1saVxyXG4gICAgICAqbmdJZj1cIiFvcHRpb24ubnpIaWRlXCJcclxuICAgICAgW256TWVudUl0ZW1TZWxlY3RlZEljb25dPVwibnpNZW51SXRlbVNlbGVjdGVkSWNvblwiXHJcbiAgICAgIFtuek9wdGlvbl09XCJvcHRpb25cIlxyXG4gICAgPjwvbGk+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbiAgPGxpXHJcbiAgICBjbGFzcz1cImFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtLWdyb3VwXCJcclxuICAgICpuZ0Zvcj1cIlxyXG4gICAgICBsZXQgZ3JvdXAgb2YgbnpTZWxlY3RTZXJ2aWNlLmxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnRcclxuICAgICAgICB8IG56RmlsdGVyR3JvdXBPcHRpb25cclxuICAgICAgICAgIDogbnpTZWxlY3RTZXJ2aWNlLnNlYXJjaFZhbHVlXHJcbiAgICAgICAgICA6IG56U2VsZWN0U2VydmljZS5maWx0ZXJPcHRpb25cclxuICAgICAgICAgIDogbnpTZWxlY3RTZXJ2aWNlLnNlcnZlclNlYXJjaDtcclxuICAgICAgdHJhY2tCeTogdHJhY2tMYWJlbFxyXG4gICAgXCJcclxuICA+XHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzPVwiYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0tZ3JvdXAtdGl0bGVcIlxyXG4gICAgICBbYXR0ci50aXRsZV09XCJncm91cC5pc0xhYmVsU3RyaW5nID8gZ3JvdXAubnpMYWJlbCA6ICcnXCJcclxuICAgID5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImdyb3VwLm56TGFiZWxcIj4ge3sgZ3JvdXAubnpMYWJlbCB9fSA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gICAgPHVsIGNsYXNzPVwiYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0tZ3JvdXAtbGlzdFwiPlxyXG4gICAgICA8bmctY29udGFpbmVyXHJcbiAgICAgICAgKm5nRm9yPVwiXHJcbiAgICAgICAgICBsZXQgb3B0aW9uIG9mIGdyb3VwLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50XHJcbiAgICAgICAgICAgIHwgbnpGaWx0ZXJPcHRpb25cclxuICAgICAgICAgICAgICA6IG56U2VsZWN0U2VydmljZS5zZWFyY2hWYWx1ZVxyXG4gICAgICAgICAgICAgIDogbnpTZWxlY3RTZXJ2aWNlLmZpbHRlck9wdGlvblxyXG4gICAgICAgICAgICAgIDogbnpTZWxlY3RTZXJ2aWNlLnNlcnZlclNlYXJjaDtcclxuICAgICAgICAgIHRyYWNrQnk6IHRyYWNrVmFsdWVcclxuICAgICAgICBcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGxpXHJcbiAgICAgICAgICBuei1vcHRpb24tbGlcclxuICAgICAgICAgICpuZ0lmPVwiIW9wdGlvbi5uekhpZGVcIlxyXG4gICAgICAgICAgW256TWVudUl0ZW1TZWxlY3RlZEljb25dPVwibnpNZW51SXRlbVNlbGVjdGVkSWNvblwiXHJcbiAgICAgICAgICBbbnpPcHRpb25dPVwib3B0aW9uXCJcclxuICAgICAgICA+PC9saT5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L3VsPlxyXG4gIDwvbGk+XHJcbiAgPGxpXHJcbiAgICBuei1vcHRpb24tbGlcclxuICAgICpuZ0Zvcj1cIlxyXG4gICAgICBsZXQgb3B0aW9uIG9mIG56U2VsZWN0U2VydmljZS5saXN0T2ZUYWdPcHRpb25cclxuICAgICAgICB8IG56RmlsdGVyT3B0aW9uXHJcbiAgICAgICAgICA6IG56U2VsZWN0U2VydmljZS5zZWFyY2hWYWx1ZVxyXG4gICAgICAgICAgOiBuelNlbGVjdFNlcnZpY2UuZmlsdGVyT3B0aW9uXHJcbiAgICAgICAgICA6IG56U2VsZWN0U2VydmljZS5zZXJ2ZXJTZWFyY2g7XHJcbiAgICAgIHRyYWNrQnk6IHRyYWNrVmFsdWVcclxuICAgIFwiXHJcbiAgICBbbnpNZW51SXRlbVNlbGVjdGVkSWNvbl09XCJuek1lbnVJdGVtU2VsZWN0ZWRJY29uXCJcclxuICAgIFtuek9wdGlvbl09XCJvcHRpb25cIlxyXG4gID48L2xpPlxyXG48L3VsPlxyXG4iXX0=