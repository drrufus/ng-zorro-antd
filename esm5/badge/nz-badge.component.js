import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ContentObserver } from '@angular/cdk/observers';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, NgZone, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { InputBoolean, isEmpty, NzConfigService, WithConfig, zoomBadgeMotion } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import { startWith, take, takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
import * as i2 from "@angular/cdk/observers";
import * as i3 from "@angular/common";
var _c0 = ["contentElement"];
function NzBadgeComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 4);
} if (rf & 2) {
    var ctx_r52 = i0.ɵɵnextContext();
    i0.ɵɵstyleSanitizer(i0.ɵɵdefaultStyleSanitizer);
    i0.ɵɵclassMapInterpolate1("ant-badge-status-dot ant-badge-status-", ctx_r52.nzStatus || ctx_r52.presetColor, "");
    i0.ɵɵstyleProp("background", !ctx_r52.presetColor && ctx_r52.nzColor);
    i0.ɵɵproperty("ngStyle", ctx_r52.nzStyle);
} }
function NzBadgeComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r53 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r53.nzText);
} }
function NzBadgeComponent_ng_container_5_sup_1_ng_container_1_span_1_ng_container_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var p_r63 = ctx.$implicit;
    var i_r59 = i0.ɵɵnextContext(3).index;
    var ctx_r62 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("current", p_r63 === ctx_r62.countArray[i_r59]);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(p_r63);
} }
function NzBadgeComponent_ng_container_5_sup_1_ng_container_1_span_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzBadgeComponent_ng_container_5_sup_1_ng_container_1_span_1_ng_container_1_p_1_Template, 2, 2, "p", 12);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r61 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r61.countSingleArray);
} }
function NzBadgeComponent_ng_container_5_sup_1_ng_container_1_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 11);
    i0.ɵɵtemplate(1, NzBadgeComponent_ng_container_5_sup_1_ng_container_1_span_1_ng_container_1_Template, 2, 1, "ng-container", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var i_r59 = i0.ɵɵnextContext().index;
    var ctx_r60 = i0.ɵɵnextContext(3);
    i0.ɵɵstyleProp("transform", "translateY(" + (0 - ctx_r60.countArray[i_r59]) * 100 + "%)");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r60.nzDot && ctx_r60.countArray[i_r59] !== undefined);
} }
function NzBadgeComponent_ng_container_5_sup_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzBadgeComponent_ng_container_5_sup_1_ng_container_1_span_1_Template, 2, 2, "span", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r56 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r56.count <= ctx_r56.nzOverflowCount);
} }
function NzBadgeComponent_ng_container_5_sup_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r57 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r57.nzOverflowCount, "+");
} }
function NzBadgeComponent_ng_container_5_sup_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "sup", 7);
    i0.ɵɵtemplate(1, NzBadgeComponent_ng_container_5_sup_1_ng_container_1_Template, 2, 1, "ng-container", 8);
    i0.ɵɵtemplate(2, NzBadgeComponent_ng_container_5_sup_1_ng_container_2_Template, 2, 1, "ng-container", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r55 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("right", ctx_r55.nzOffset && ctx_r55.nzOffset[0] ? 0 - ctx_r55.nzOffset[0] : null, "px")("margin-top", ctx_r55.nzOffset && ctx_r55.nzOffset[1] ? ctx_r55.nzOffset[1] : null, "px");
    i0.ɵɵclassProp("ant-badge-count", !ctx_r55.nzDot)("ant-badge-dot", ctx_r55.nzDot)("ant-badge-multiple-words", ctx_r55.countArray.length >= 2);
    i0.ɵɵproperty("@.disabled", ctx_r55.notWrapper)("@zoomBadgeMotion", undefined)("ngStyle", ctx_r55.nzStyle);
    i0.ɵɵattribute("title", ctx_r55.nzTitle || ctx_r55.nzCount);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r55.maxNumberArray);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r55.count > ctx_r55.nzOverflowCount);
} }
function NzBadgeComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzBadgeComponent_ng_container_5_sup_1_Template, 3, 11, "sup", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r54 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r54.showSup && ctx_r54.viewInit);
} }
var _c1 = ["*"];
var NZ_CONFIG_COMPONENT_NAME = 'backTop';
var NzBadgeComponent = /** @class */ (function () {
    function NzBadgeComponent(nzConfigService, renderer, elementRef, contentObserver, cdr, ngZone) {
        this.nzConfigService = nzConfigService;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.contentObserver = contentObserver;
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.destroy$ = new Subject();
        this.notWrapper = true;
        this.viewInit = false;
        this.maxNumberArray = [];
        this.countArray = [];
        this.countSingleArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.colorArray = ['pink', 'red', 'yellow', 'orange', 'cyan', 'green', 'blue', 'purple', 'geekblue', 'magenta', 'volcano', 'gold', 'lime'];
        this.presetColor = null;
        this.nzShowZero = false;
        this.nzShowDot = true;
        this.nzDot = false;
        renderer.addClass(elementRef.nativeElement, 'ant-badge');
    }
    NzBadgeComponent.prototype.checkContent = function () {
        this.notWrapper = isEmpty(this.contentElement.nativeElement);
        if (this.notWrapper) {
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-badge-not-a-wrapper');
        }
        else {
            this.renderer.removeClass(this.elementRef.nativeElement, 'ant-badge-not-a-wrapper');
        }
    };
    Object.defineProperty(NzBadgeComponent.prototype, "showSup", {
        get: function () {
            return (this.nzShowDot && this.nzDot) || this.count > 0 || (this.count === 0 && this.nzShowZero);
        },
        enumerable: true,
        configurable: true
    });
    NzBadgeComponent.prototype.generateMaxNumberArray = function () {
        this.maxNumberArray = this.nzOverflowCount.toString().split('');
    };
    NzBadgeComponent.prototype.ngOnInit = function () {
        this.generateMaxNumberArray();
    };
    NzBadgeComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.ngZone.onStable.pipe(take(1)).subscribe(function () {
            _this.viewInit = true;
            _this.cdr.markForCheck();
        });
        this.contentObserver
            .observe(this.contentElement)
            .pipe(startWith(true), takeUntil(this.destroy$))
            .subscribe(function () {
            _this.checkContent();
        });
    };
    NzBadgeComponent.prototype.ngOnChanges = function (changes) {
        var nzOverflowCount = changes.nzOverflowCount, nzCount = changes.nzCount, nzColor = changes.nzColor;
        if (nzCount && !(nzCount.currentValue instanceof TemplateRef)) {
            this.count = Math.max(0, nzCount.currentValue);
            this.countArray = this.count
                .toString()
                .split('')
                .map(function (item) { return +item; });
        }
        if (nzOverflowCount) {
            this.generateMaxNumberArray();
        }
        if (nzColor) {
            this.presetColor = this.colorArray.indexOf(this.nzColor) !== -1 ? this.nzColor : null;
        }
    };
    NzBadgeComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /** @nocollapse */ NzBadgeComponent.ɵfac = function NzBadgeComponent_Factory(t) { return new (t || NzBadgeComponent)(i0.ɵɵdirectiveInject(i1.NzConfigService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i2.ContentObserver), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    /** @nocollapse */ NzBadgeComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzBadgeComponent, selectors: [["nz-badge"]], viewQuery: function NzBadgeComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.contentElement = _t.first);
        } }, hostBindings: function NzBadgeComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            i0.ɵɵallocHostVars(1);
        } if (rf & 2) {
            i0.ɵɵclassProp("ant-badge-status", ctx.nzStatus);
        } }, inputs: { nzShowZero: "nzShowZero", nzShowDot: "nzShowDot", nzDot: "nzDot", nzOverflowCount: "nzOverflowCount", nzText: "nzText", nzColor: "nzColor", nzTitle: "nzTitle", nzStyle: "nzStyle", nzStatus: "nzStatus", nzCount: "nzCount", nzOffset: "nzOffset" }, exportAs: ["nzBadge"], features: [i0.ɵɵNgOnChangesFeature()], ngContentSelectors: _c1, decls: 6, vars: 3, consts: [["contentElement", ""], [3, "class", "background", "ngStyle", 4, "ngIf"], ["class", "ant-badge-status-text", 4, "ngIf"], [4, "nzStringTemplateOutlet"], [3, "ngStyle"], [1, "ant-badge-status-text"], ["class", "ant-scroll-number", 3, "ngStyle", "right", "marginTop", "ant-badge-count", "ant-badge-dot", "ant-badge-multiple-words", 4, "ngIf"], [1, "ant-scroll-number", 3, "ngStyle"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "ant-scroll-number-only", 3, "transform", 4, "ngIf"], [1, "ant-scroll-number-only"], [3, "current", 4, "ngFor", "ngForOf"]], template: function NzBadgeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "span", null, 0);
            i0.ɵɵprojection(2);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, NzBadgeComponent_span_3_Template, 1, 5, "span", 1);
            i0.ɵɵtemplate(4, NzBadgeComponent_span_4_Template, 2, 1, "span", 2);
            i0.ɵɵtemplate(5, NzBadgeComponent_ng_container_5_Template, 2, 1, "ng-container", 3);
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.nzStatus || ctx.nzColor);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.nzStatus || ctx.nzColor);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzStringTemplateOutlet", ctx.nzCount);
        } }, directives: [i3.NgIf, i1.NzStringTemplateOutletDirective, i3.NgStyle, i3.NgForOf], encapsulation: 2, data: { animation: [zoomBadgeMotion] }, changeDetection: 0 });
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzBadgeComponent.prototype, "nzShowZero", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzBadgeComponent.prototype, "nzShowDot", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzBadgeComponent.prototype, "nzDot", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, 99),
        __metadata("design:type", Number)
    ], NzBadgeComponent.prototype, "nzOverflowCount", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", String)
    ], NzBadgeComponent.prototype, "nzColor", void 0);
    return NzBadgeComponent;
}());
export { NzBadgeComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzBadgeComponent, [{
        type: Component,
        args: [{
                selector: 'nz-badge',
                exportAs: 'nzBadge',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [zoomBadgeMotion],
                templateUrl: './nz-badge.component.html',
                host: {
                    '[class.ant-badge-status]': 'nzStatus'
                }
            }]
    }], function () { return [{ type: i1.NzConfigService }, { type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i2.ContentObserver }, { type: i0.ChangeDetectorRef }, { type: i0.NgZone }]; }, { contentElement: [{
            type: ViewChild,
            args: ['contentElement', { static: false }]
        }], nzShowZero: [{
            type: Input
        }], nzShowDot: [{
            type: Input
        }], nzDot: [{
            type: Input
        }], nzOverflowCount: [{
            type: Input
        }], nzText: [{
            type: Input
        }], nzColor: [{
            type: Input
        }], nzTitle: [{
            type: Input
        }], nzStyle: [{
            type: Input
        }], nzStatus: [{
            type: Input
        }], nzCount: [{
            type: Input
        }], nzOffset: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYmFkZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9iYWRnZS8iLCJzb3VyY2VzIjpbIm56LWJhZGdlLmNvbXBvbmVudC50cyIsIm56LWJhZGdlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUlOLFNBQVMsRUFFVCxXQUFXLEVBQ1gsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3pHLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7SUMzQjVELDBCQUtROzs7SUFKTiwrQ0FBMkU7SUFBM0UsZ0hBQTJFO0lBQzNFLHFFQUE0QztJQUU1Qyx5Q0FBbUI7OztJQUVyQiwrQkFBZ0U7SUFBQSxZQUFZO0lBQUEsaUJBQU87OztJQUFuQixlQUFZO0lBQVosb0NBQVk7OztJQXNCbEUseUJBQTRFO0lBQUEsWUFBTztJQUFBLGlCQUFJOzs7OztJQUFqRCw4REFBcUM7SUFBQyxlQUFPO0lBQVAsMkJBQU87OztJQURyRiw2QkFDRTtJQUFBLHdIQUE0RTtJQUM5RSwwQkFBZTs7O0lBRFYsZUFBa0M7SUFBbEMsa0RBQWtDOzs7SUFOekMsZ0NBS0U7SUFBQSw4SEFDRTtJQUVKLGlCQUFPOzs7O0lBTEwseUZBQStEO0lBRWpELGVBQTZDO0lBQTdDLGdGQUE2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QixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFVBQVUsRUFBRSxDQUFDLGVBQWUsQ0FBQztnQkFDN0IsV0FBVyxFQUFFLDJCQUEyQjtnQkFDeEMsSUFBSSxFQUFFO29CQUNKLDBCQUEwQixFQUFFLFVBQVU7aUJBQ3ZDO2FBQ0Y7O2tCQVdFLFNBQVM7bUJBQUMsZ0JBQWdCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOztrQkFDN0MsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ29udGVudE9ic2VydmVyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL29ic2VydmVycyc7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgaXNFbXB0eSwgTnpDb25maWdTZXJ2aWNlLCBXaXRoQ29uZmlnLCB6b29tQmFkZ2VNb3Rpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHN0YXJ0V2l0aCwgdGFrZSwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuZXhwb3J0IHR5cGUgTnpCYWRnZVN0YXR1c1R5cGUgPSAnc3VjY2VzcycgfCAncHJvY2Vzc2luZycgfCAnZGVmYXVsdCcgfCAnZXJyb3InIHwgJ3dhcm5pbmcnO1xyXG5cclxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ2JhY2tUb3AnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei1iYWRnZScsXHJcbiAgZXhwb3J0QXM6ICduekJhZGdlJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGFuaW1hdGlvbnM6IFt6b29tQmFkZ2VNb3Rpb25dLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1iYWRnZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtYmFkZ2Utc3RhdHVzXSc6ICduelN0YXR1cydcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekJhZGdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgbm90V3JhcHBlciA9IHRydWU7XHJcbiAgdmlld0luaXQgPSBmYWxzZTtcclxuICBtYXhOdW1iZXJBcnJheTogc3RyaW5nW10gPSBbXTtcclxuICBjb3VudEFycmF5OiBudW1iZXJbXSA9IFtdO1xyXG4gIGNvdW50U2luZ2xlQXJyYXkgPSBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOV07XHJcbiAgY29sb3JBcnJheSA9IFsncGluaycsICdyZWQnLCAneWVsbG93JywgJ29yYW5nZScsICdjeWFuJywgJ2dyZWVuJywgJ2JsdWUnLCAncHVycGxlJywgJ2dlZWtibHVlJywgJ21hZ2VudGEnLCAndm9sY2FubycsICdnb2xkJywgJ2xpbWUnXTtcclxuICBwcmVzZXRDb2xvcjogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgY291bnQ6IG51bWJlcjtcclxuICBAVmlld0NoaWxkKCdjb250ZW50RWxlbWVudCcsIHsgc3RhdGljOiBmYWxzZSB9KSBjb250ZW50RWxlbWVudDogRWxlbWVudFJlZjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93WmVybzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dEb3QgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRvdCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgOTkpIG56T3ZlcmZsb3dDb3VudDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIG56VGV4dDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkgbnpDb2xvcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56VGl0bGU6IHN0cmluZztcclxuICBASW5wdXQoKSBuelN0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xyXG4gIEBJbnB1dCgpIG56U3RhdHVzOiBOekJhZGdlU3RhdHVzVHlwZTtcclxuICBASW5wdXQoKSBuekNvdW50OiBudW1iZXIgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuek9mZnNldDogW251bWJlciwgbnVtYmVyXTtcclxuXHJcbiAgY2hlY2tDb250ZW50KCk6IHZvaWQge1xyXG4gICAgdGhpcy5ub3RXcmFwcGVyID0gaXNFbXB0eSh0aGlzLmNvbnRlbnRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgaWYgKHRoaXMubm90V3JhcHBlcikge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWJhZGdlLW5vdC1hLXdyYXBwZXInKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtYmFkZ2Utbm90LWEtd3JhcHBlcicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IHNob3dTdXAoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKHRoaXMubnpTaG93RG90ICYmIHRoaXMubnpEb3QpIHx8IHRoaXMuY291bnQgPiAwIHx8ICh0aGlzLmNvdW50ID09PSAwICYmIHRoaXMubnpTaG93WmVybyk7XHJcbiAgfVxyXG5cclxuICBnZW5lcmF0ZU1heE51bWJlckFycmF5KCk6IHZvaWQge1xyXG4gICAgdGhpcy5tYXhOdW1iZXJBcnJheSA9IHRoaXMubnpPdmVyZmxvd0NvdW50LnRvU3RyaW5nKCkuc3BsaXQoJycpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIGNvbnRlbnRPYnNlcnZlcjogQ29udGVudE9ic2VydmVyLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZVxyXG4gICkge1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWJhZGdlJyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZ2VuZXJhdGVNYXhOdW1iZXJBcnJheSgpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5uZ1pvbmUub25TdGFibGUucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLnZpZXdJbml0ID0gdHJ1ZTtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmNvbnRlbnRPYnNlcnZlclxyXG4gICAgICAub2JzZXJ2ZSh0aGlzLmNvbnRlbnRFbGVtZW50KVxyXG4gICAgICAucGlwZShzdGFydFdpdGgodHJ1ZSksIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jaGVja0NvbnRlbnQoKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBjb25zdCB7IG56T3ZlcmZsb3dDb3VudCwgbnpDb3VudCwgbnpDb2xvciB9ID0gY2hhbmdlcztcclxuICAgIGlmIChuekNvdW50ICYmICEobnpDb3VudC5jdXJyZW50VmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikpIHtcclxuICAgICAgdGhpcy5jb3VudCA9IE1hdGgubWF4KDAsIG56Q291bnQuY3VycmVudFZhbHVlKTtcclxuICAgICAgdGhpcy5jb3VudEFycmF5ID0gdGhpcy5jb3VudFxyXG4gICAgICAgIC50b1N0cmluZygpXHJcbiAgICAgICAgLnNwbGl0KCcnKVxyXG4gICAgICAgIC5tYXAoaXRlbSA9PiAraXRlbSk7XHJcbiAgICB9XHJcbiAgICBpZiAobnpPdmVyZmxvd0NvdW50KSB7XHJcbiAgICAgIHRoaXMuZ2VuZXJhdGVNYXhOdW1iZXJBcnJheSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKG56Q29sb3IpIHtcclxuICAgICAgdGhpcy5wcmVzZXRDb2xvciA9IHRoaXMuY29sb3JBcnJheS5pbmRleE9mKHRoaXMubnpDb2xvcikgIT09IC0xID8gdGhpcy5uekNvbG9yIDogbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG59XHJcbiIsIjxzcGFuICNjb250ZW50RWxlbWVudD48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9zcGFuPlxyXG48c3BhblxyXG4gIGNsYXNzPVwiYW50LWJhZGdlLXN0YXR1cy1kb3QgYW50LWJhZGdlLXN0YXR1cy17eyBuelN0YXR1cyB8fCBwcmVzZXRDb2xvciB9fVwiXHJcbiAgW3N0eWxlLmJhY2tncm91bmRdPVwiIXByZXNldENvbG9yICYmIG56Q29sb3JcIlxyXG4gICpuZ0lmPVwibnpTdGF0dXMgfHwgbnpDb2xvclwiXHJcbiAgW25nU3R5bGVdPVwibnpTdHlsZVwiXHJcbj48L3NwYW4+XHJcbjxzcGFuIGNsYXNzPVwiYW50LWJhZGdlLXN0YXR1cy10ZXh0XCIgKm5nSWY9XCJuelN0YXR1cyB8fCBuekNvbG9yXCI+e3sgbnpUZXh0IH19PC9zcGFuPlxyXG48bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpDb3VudFwiPlxyXG4gIDxzdXBcclxuICAgIGNsYXNzPVwiYW50LXNjcm9sbC1udW1iZXJcIlxyXG4gICAgKm5nSWY9XCJzaG93U3VwICYmIHZpZXdJbml0XCJcclxuICAgIFtALmRpc2FibGVkXT1cIm5vdFdyYXBwZXJcIlxyXG4gICAgW0B6b29tQmFkZ2VNb3Rpb25dXHJcbiAgICBbbmdTdHlsZV09XCJuelN0eWxlXCJcclxuICAgIFthdHRyLnRpdGxlXT1cIm56VGl0bGUgfHwgbnpDb3VudFwiXHJcbiAgICBbc3R5bGUucmlnaHQucHhdPVwibnpPZmZzZXQgJiYgbnpPZmZzZXRbMF0gPyAtbnpPZmZzZXRbMF0gOiBudWxsXCJcclxuICAgIFtzdHlsZS5tYXJnaW5Ub3AucHhdPVwibnpPZmZzZXQgJiYgbnpPZmZzZXRbMV0gPyBuek9mZnNldFsxXSA6IG51bGxcIlxyXG4gICAgW2NsYXNzLmFudC1iYWRnZS1jb3VudF09XCIhbnpEb3RcIlxyXG4gICAgW2NsYXNzLmFudC1iYWRnZS1kb3RdPVwibnpEb3RcIlxyXG4gICAgW2NsYXNzLmFudC1iYWRnZS1tdWx0aXBsZS13b3Jkc109XCJjb3VudEFycmF5Lmxlbmd0aCA+PSAyXCJcclxuICA+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBuIG9mIG1heE51bWJlckFycmF5OyBsZXQgaSA9IGluZGV4XCI+XHJcbiAgICAgIDxzcGFuXHJcbiAgICAgICAgY2xhc3M9XCJhbnQtc2Nyb2xsLW51bWJlci1vbmx5XCJcclxuICAgICAgICAqbmdJZj1cImNvdW50IDw9IG56T3ZlcmZsb3dDb3VudFwiXHJcbiAgICAgICAgW3N0eWxlLnRyYW5zZm9ybV09XCIndHJhbnNsYXRlWSgnICsgLWNvdW50QXJyYXlbaV0gKiAxMDAgKyAnJSknXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhbnpEb3QgJiYgY291bnRBcnJheVtpXSAhPT0gdW5kZWZpbmVkXCI+XHJcbiAgICAgICAgICA8cCAqbmdGb3I9XCJsZXQgcCBvZiBjb3VudFNpbmdsZUFycmF5XCIgW2NsYXNzLmN1cnJlbnRdPVwicCA9PT0gY291bnRBcnJheVtpXVwiPnt7IHAgfX08L3A+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvdW50ID4gbnpPdmVyZmxvd0NvdW50XCI+e3sgbnpPdmVyZmxvd0NvdW50IH19KzwvbmctY29udGFpbmVyPlxyXG4gIDwvc3VwPlxyXG48L25nLWNvbnRhaW5lcj5cclxuIl19