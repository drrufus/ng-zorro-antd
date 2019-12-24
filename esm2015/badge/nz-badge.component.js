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
const _c0 = ["contentElement"];
function NzBadgeComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 4);
} if (rf & 2) {
    const ctx_r37 = i0.ɵɵnextContext();
    i0.ɵɵstyleSanitizer(i0.ɵɵdefaultStyleSanitizer);
    i0.ɵɵclassMapInterpolate1("ant-badge-status-dot ant-badge-status-", ctx_r37.nzStatus || ctx_r37.presetColor, "");
    i0.ɵɵstyleProp("background", !ctx_r37.presetColor && ctx_r37.nzColor);
    i0.ɵɵproperty("ngStyle", ctx_r37.nzStyle);
} }
function NzBadgeComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r38 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r38.nzText);
} }
function NzBadgeComponent_ng_container_5_sup_1_ng_container_1_span_1_ng_container_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const p_r48 = ctx.$implicit;
    const i_r44 = i0.ɵɵnextContext(3).index;
    const ctx_r47 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("current", p_r48 === ctx_r47.countArray[i_r44]);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(p_r48);
} }
function NzBadgeComponent_ng_container_5_sup_1_ng_container_1_span_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzBadgeComponent_ng_container_5_sup_1_ng_container_1_span_1_ng_container_1_p_1_Template, 2, 2, "p", 12);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r46 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r46.countSingleArray);
} }
function NzBadgeComponent_ng_container_5_sup_1_ng_container_1_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 11);
    i0.ɵɵtemplate(1, NzBadgeComponent_ng_container_5_sup_1_ng_container_1_span_1_ng_container_1_Template, 2, 1, "ng-container", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r44 = i0.ɵɵnextContext().index;
    const ctx_r45 = i0.ɵɵnextContext(3);
    i0.ɵɵstyleProp("transform", "translateY(" + (0 - ctx_r45.countArray[i_r44]) * 100 + "%)");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r45.nzDot && ctx_r45.countArray[i_r44] !== undefined);
} }
function NzBadgeComponent_ng_container_5_sup_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzBadgeComponent_ng_container_5_sup_1_ng_container_1_span_1_Template, 2, 2, "span", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r41 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r41.count <= ctx_r41.nzOverflowCount);
} }
function NzBadgeComponent_ng_container_5_sup_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r42 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r42.nzOverflowCount, "+");
} }
function NzBadgeComponent_ng_container_5_sup_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "sup", 7);
    i0.ɵɵtemplate(1, NzBadgeComponent_ng_container_5_sup_1_ng_container_1_Template, 2, 1, "ng-container", 8);
    i0.ɵɵtemplate(2, NzBadgeComponent_ng_container_5_sup_1_ng_container_2_Template, 2, 1, "ng-container", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r40 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("right", ctx_r40.nzOffset && ctx_r40.nzOffset[0] ? 0 - ctx_r40.nzOffset[0] : null, "px")("margin-top", ctx_r40.nzOffset && ctx_r40.nzOffset[1] ? ctx_r40.nzOffset[1] : null, "px");
    i0.ɵɵclassProp("ant-badge-count", !ctx_r40.nzDot)("ant-badge-dot", ctx_r40.nzDot)("ant-badge-multiple-words", ctx_r40.countArray.length >= 2);
    i0.ɵɵproperty("@.disabled", ctx_r40.notWrapper)("@zoomBadgeMotion", undefined)("ngStyle", ctx_r40.nzStyle);
    i0.ɵɵattribute("title", ctx_r40.nzTitle || ctx_r40.nzCount);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r40.maxNumberArray);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r40.count > ctx_r40.nzOverflowCount);
} }
function NzBadgeComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzBadgeComponent_ng_container_5_sup_1_Template, 3, 11, "sup", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r39 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r39.showSup && ctx_r39.viewInit);
} }
const _c1 = ["*"];
const NZ_CONFIG_COMPONENT_NAME = 'backTop';
export class NzBadgeComponent {
    constructor(nzConfigService, renderer, elementRef, contentObserver, cdr, ngZone) {
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
    checkContent() {
        this.notWrapper = isEmpty(this.contentElement.nativeElement);
        if (this.notWrapper) {
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-badge-not-a-wrapper');
        }
        else {
            this.renderer.removeClass(this.elementRef.nativeElement, 'ant-badge-not-a-wrapper');
        }
    }
    get showSup() {
        return (this.nzShowDot && this.nzDot) || this.count > 0 || (this.count === 0 && this.nzShowZero);
    }
    generateMaxNumberArray() {
        this.maxNumberArray = this.nzOverflowCount.toString().split('');
    }
    ngOnInit() {
        this.generateMaxNumberArray();
    }
    ngAfterViewInit() {
        this.ngZone.onStable.pipe(take(1)).subscribe(() => {
            this.viewInit = true;
            this.cdr.markForCheck();
        });
        this.contentObserver
            .observe(this.contentElement)
            .pipe(startWith(true), takeUntil(this.destroy$))
            .subscribe(() => {
            this.checkContent();
        });
    }
    ngOnChanges(changes) {
        const { nzOverflowCount, nzCount, nzColor } = changes;
        if (nzCount && !(nzCount.currentValue instanceof TemplateRef)) {
            this.count = Math.max(0, nzCount.currentValue);
            this.countArray = this.count
                .toString()
                .split('')
                .map(item => +item);
        }
        if (nzOverflowCount) {
            this.generateMaxNumberArray();
        }
        if (nzColor) {
            this.presetColor = this.colorArray.indexOf(this.nzColor) !== -1 ? this.nzColor : null;
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYmFkZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9iYWRnZS8iLCJzb3VyY2VzIjpbIm56LWJhZGdlLmNvbXBvbmVudC50cyIsIm56LWJhZGdlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUlOLFNBQVMsRUFFVCxXQUFXLEVBQ1gsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3pHLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7SUMzQjVELDBCQUtROzs7SUFKTiwrQ0FBMkU7SUFBM0UsZ0hBQTJFO0lBQzNFLHFFQUE0QztJQUU1Qyx5Q0FBbUI7OztJQUVyQiwrQkFBZ0U7SUFBQSxZQUFZO0lBQUEsaUJBQU87OztJQUFuQixlQUFZO0lBQVosb0NBQVk7OztJQXNCbEUseUJBQTRFO0lBQUEsWUFBTztJQUFBLGlCQUFJOzs7OztJQUFqRCw4REFBcUM7SUFBQyxlQUFPO0lBQVAsMkJBQU87OztJQURyRiw2QkFDRTtJQUFBLHdIQUE0RTtJQUM5RSwwQkFBZTs7O0lBRFYsZUFBa0M7SUFBbEMsa0RBQWtDOzs7SUFOekMsZ0NBS0U7SUFBQSw4SEFDRTtJQUVKLGlCQUFPOzs7O0lBTEwseUZBQStEO0lBRWpELGVBQTZDO0lBQTdDLGdGQUE2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Q0FBQyxNQUFNO2dCQUMvQyxVQUFVLEVBQUUsQ0FBQyxlQUFlLENBQUM7Z0JBQzdCLFdBQVcsRUFBRSwyQkFBMkI7Z0JBQ3hDLElBQUksRUFBRTtvQkFDSiwwQkFBMEIsRUFBRSxVQUFVO2lCQUN2QzthQUNGOztrQkFXRSxTQUFTO21CQUFDLGdCQUFnQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7a0JBQzdDLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENvbnRlbnRPYnNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vYnNlcnZlcnMnO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIGlzRW1wdHksIE56Q29uZmlnU2VydmljZSwgV2l0aENvbmZpZywgem9vbUJhZGdlTW90aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBzdGFydFdpdGgsIHRha2UsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmV4cG9ydCB0eXBlIE56QmFkZ2VTdGF0dXNUeXBlID0gJ3N1Y2Nlc3MnIHwgJ3Byb2Nlc3NpbmcnIHwgJ2RlZmF1bHQnIHwgJ2Vycm9yJyB8ICd3YXJuaW5nJztcclxuXHJcbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdiYWNrVG9wJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotYmFkZ2UnLFxyXG4gIGV4cG9ydEFzOiAnbnpCYWRnZScsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBhbmltYXRpb25zOiBbem9vbUJhZGdlTW90aW9uXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotYmFkZ2UuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LWJhZGdlLXN0YXR1c10nOiAnbnpTdGF0dXMnXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpCYWRnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xyXG4gIG5vdFdyYXBwZXIgPSB0cnVlO1xyXG4gIHZpZXdJbml0ID0gZmFsc2U7XHJcbiAgbWF4TnVtYmVyQXJyYXk6IHN0cmluZ1tdID0gW107XHJcbiAgY291bnRBcnJheTogbnVtYmVyW10gPSBbXTtcclxuICBjb3VudFNpbmdsZUFycmF5ID0gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDldO1xyXG4gIGNvbG9yQXJyYXkgPSBbJ3BpbmsnLCAncmVkJywgJ3llbGxvdycsICdvcmFuZ2UnLCAnY3lhbicsICdncmVlbicsICdibHVlJywgJ3B1cnBsZScsICdnZWVrYmx1ZScsICdtYWdlbnRhJywgJ3ZvbGNhbm8nLCAnZ29sZCcsICdsaW1lJ107XHJcbiAgcHJlc2V0Q29sb3I6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gIGNvdW50OiBudW1iZXI7XHJcbiAgQFZpZXdDaGlsZCgnY29udGVudEVsZW1lbnQnLCB7IHN0YXRpYzogZmFsc2UgfSkgY29udGVudEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd1plcm86IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93RG90ID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEb3QgPSBmYWxzZTtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIDk5KSBuek92ZXJmbG93Q291bnQ6IG51bWJlcjtcclxuICBASW5wdXQoKSBuelRleHQ6IHN0cmluZztcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpIG56Q29sb3I6IHN0cmluZztcclxuICBASW5wdXQoKSBuelRpdGxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpTdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuICBASW5wdXQoKSBuelN0YXR1czogTnpCYWRnZVN0YXR1c1R5cGU7XHJcbiAgQElucHV0KCkgbnpDb3VudDogbnVtYmVyIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpPZmZzZXQ6IFtudW1iZXIsIG51bWJlcl07XHJcblxyXG4gIGNoZWNrQ29udGVudCgpOiB2b2lkIHtcclxuICAgIHRoaXMubm90V3JhcHBlciA9IGlzRW1wdHkodGhpcy5jb250ZW50RWxlbWVudC5uYXRpdmVFbGVtZW50KTtcclxuICAgIGlmICh0aGlzLm5vdFdyYXBwZXIpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1iYWRnZS1ub3QtYS13cmFwcGVyJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWJhZGdlLW5vdC1hLXdyYXBwZXInKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBzaG93U3VwKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICh0aGlzLm56U2hvd0RvdCAmJiB0aGlzLm56RG90KSB8fCB0aGlzLmNvdW50ID4gMCB8fCAodGhpcy5jb3VudCA9PT0gMCAmJiB0aGlzLm56U2hvd1plcm8pO1xyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVNYXhOdW1iZXJBcnJheSgpOiB2b2lkIHtcclxuICAgIHRoaXMubWF4TnVtYmVyQXJyYXkgPSB0aGlzLm56T3ZlcmZsb3dDb3VudC50b1N0cmluZygpLnNwbGl0KCcnKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBjb250ZW50T2JzZXJ2ZXI6IENvbnRlbnRPYnNlcnZlcixcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmVcclxuICApIHtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1iYWRnZScpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmdlbmVyYXRlTWF4TnVtYmVyQXJyYXkoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMubmdab25lLm9uU3RhYmxlLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy52aWV3SW5pdCA9IHRydWU7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jb250ZW50T2JzZXJ2ZXJcclxuICAgICAgLm9ic2VydmUodGhpcy5jb250ZW50RWxlbWVudClcclxuICAgICAgLnBpcGUoc3RhcnRXaXRoKHRydWUpLCB0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2hlY2tDb250ZW50KCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3QgeyBuek92ZXJmbG93Q291bnQsIG56Q291bnQsIG56Q29sb3IgfSA9IGNoYW5nZXM7XHJcbiAgICBpZiAobnpDb3VudCAmJiAhKG56Q291bnQuY3VycmVudFZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpKSB7XHJcbiAgICAgIHRoaXMuY291bnQgPSBNYXRoLm1heCgwLCBuekNvdW50LmN1cnJlbnRWYWx1ZSk7XHJcbiAgICAgIHRoaXMuY291bnRBcnJheSA9IHRoaXMuY291bnRcclxuICAgICAgICAudG9TdHJpbmcoKVxyXG4gICAgICAgIC5zcGxpdCgnJylcclxuICAgICAgICAubWFwKGl0ZW0gPT4gK2l0ZW0pO1xyXG4gICAgfVxyXG4gICAgaWYgKG56T3ZlcmZsb3dDb3VudCkge1xyXG4gICAgICB0aGlzLmdlbmVyYXRlTWF4TnVtYmVyQXJyYXkoKTtcclxuICAgIH1cclxuICAgIGlmIChuekNvbG9yKSB7XHJcbiAgICAgIHRoaXMucHJlc2V0Q29sb3IgPSB0aGlzLmNvbG9yQXJyYXkuaW5kZXhPZih0aGlzLm56Q29sb3IpICE9PSAtMSA/IHRoaXMubnpDb2xvciA6IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG4iLCI8c3BhbiAjY29udGVudEVsZW1lbnQ+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50Pjwvc3Bhbj5cclxuPHNwYW5cclxuICBjbGFzcz1cImFudC1iYWRnZS1zdGF0dXMtZG90IGFudC1iYWRnZS1zdGF0dXMte3sgbnpTdGF0dXMgfHwgcHJlc2V0Q29sb3IgfX1cIlxyXG4gIFtzdHlsZS5iYWNrZ3JvdW5kXT1cIiFwcmVzZXRDb2xvciAmJiBuekNvbG9yXCJcclxuICAqbmdJZj1cIm56U3RhdHVzIHx8IG56Q29sb3JcIlxyXG4gIFtuZ1N0eWxlXT1cIm56U3R5bGVcIlxyXG4+PC9zcGFuPlxyXG48c3BhbiBjbGFzcz1cImFudC1iYWRnZS1zdGF0dXMtdGV4dFwiICpuZ0lmPVwibnpTdGF0dXMgfHwgbnpDb2xvclwiPnt7IG56VGV4dCB9fTwvc3Bhbj5cclxuPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56Q291bnRcIj5cclxuICA8c3VwXHJcbiAgICBjbGFzcz1cImFudC1zY3JvbGwtbnVtYmVyXCJcclxuICAgICpuZ0lmPVwic2hvd1N1cCAmJiB2aWV3SW5pdFwiXHJcbiAgICBbQC5kaXNhYmxlZF09XCJub3RXcmFwcGVyXCJcclxuICAgIFtAem9vbUJhZGdlTW90aW9uXVxyXG4gICAgW25nU3R5bGVdPVwibnpTdHlsZVwiXHJcbiAgICBbYXR0ci50aXRsZV09XCJuelRpdGxlIHx8IG56Q291bnRcIlxyXG4gICAgW3N0eWxlLnJpZ2h0LnB4XT1cIm56T2Zmc2V0ICYmIG56T2Zmc2V0WzBdID8gLW56T2Zmc2V0WzBdIDogbnVsbFwiXHJcbiAgICBbc3R5bGUubWFyZ2luVG9wLnB4XT1cIm56T2Zmc2V0ICYmIG56T2Zmc2V0WzFdID8gbnpPZmZzZXRbMV0gOiBudWxsXCJcclxuICAgIFtjbGFzcy5hbnQtYmFkZ2UtY291bnRdPVwiIW56RG90XCJcclxuICAgIFtjbGFzcy5hbnQtYmFkZ2UtZG90XT1cIm56RG90XCJcclxuICAgIFtjbGFzcy5hbnQtYmFkZ2UtbXVsdGlwbGUtd29yZHNdPVwiY291bnRBcnJheS5sZW5ndGggPj0gMlwiXHJcbiAgPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgbiBvZiBtYXhOdW1iZXJBcnJheTsgbGV0IGkgPSBpbmRleFwiPlxyXG4gICAgICA8c3BhblxyXG4gICAgICAgIGNsYXNzPVwiYW50LXNjcm9sbC1udW1iZXItb25seVwiXHJcbiAgICAgICAgKm5nSWY9XCJjb3VudCA8PSBuek92ZXJmbG93Q291bnRcIlxyXG4gICAgICAgIFtzdHlsZS50cmFuc2Zvcm1dPVwiJ3RyYW5zbGF0ZVkoJyArIC1jb3VudEFycmF5W2ldICogMTAwICsgJyUpJ1wiXHJcbiAgICAgID5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIW56RG90ICYmIGNvdW50QXJyYXlbaV0gIT09IHVuZGVmaW5lZFwiPlxyXG4gICAgICAgICAgPHAgKm5nRm9yPVwibGV0IHAgb2YgY291bnRTaW5nbGVBcnJheVwiIFtjbGFzcy5jdXJyZW50XT1cInAgPT09IGNvdW50QXJyYXlbaV1cIj57eyBwIH19PC9wPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb3VudCA+IG56T3ZlcmZsb3dDb3VudFwiPnt7IG56T3ZlcmZsb3dDb3VudCB9fSs8L25nLWNvbnRhaW5lcj5cclxuICA8L3N1cD5cclxuPC9uZy1jb250YWluZXI+XHJcbiJdfQ==