import { Platform, PlatformModule } from '@angular/cdk/platform';
import { NgIf, NgForOf, NgTemplateOutlet, CommonModule } from '@angular/common';
import { ɵɵprojection, ɵɵdefineComponent, ɵɵstaticViewQuery, TemplateRef, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵNgOnChangesFeature, ɵɵprojectionDef, ɵɵtemplate, ɵsetClassMetadata, Component, ChangeDetectionStrategy, ViewEncapsulation, ViewChild, Input, ɵɵelementContainerStart, ɵɵtext, ɵɵelementContainerEnd, ɵɵnextContext, ɵɵadvance, ɵɵtextInterpolate, ɵɵelementStart, ɵɵelementEnd, ɵɵproperty, ɵɵclassProp, ɵɵtextInterpolate1, ɵɵdirectiveInject, ChangeDetectorRef, ɵɵcontentQuery, ɵɵallocHostVars, ɵɵelementHostAttrs, ContentChildren, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { InputNumber, warn, NzBreakpoint, responsiveMap, NzConfigService, NzDomEventService, NzStringTemplateOutletDirective, InputBoolean, WithConfig, NzAddOnModule } from 'ng-zorro-antd/core';
import { __decorate, __metadata, __spread } from 'tslib';
import { Subject, merge } from 'rxjs';
import { MediaMatcher } from '@angular/cdk/layout';
import { startWith, takeUntil, switchMap, auditTime, finalize } from 'rxjs/operators';

function NzDescriptionsItemComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵprojection(0);
} }
var _c0 = ["*"];
var NzDescriptionsItemComponent = /** @class */ (function () {
    function NzDescriptionsItemComponent() {
        this.nzSpan = 1;
        this.nzTitle = '';
        this.inputChange$ = new Subject();
    }
    NzDescriptionsItemComponent.prototype.ngOnChanges = function () {
        this.inputChange$.next();
    };
    NzDescriptionsItemComponent.prototype.ngOnDestroy = function () {
        this.inputChange$.complete();
    };
    /** @nocollapse */ NzDescriptionsItemComponent.ɵfac = function NzDescriptionsItemComponent_Factory(t) { return new (t || NzDescriptionsItemComponent)(); };
    /** @nocollapse */ NzDescriptionsItemComponent.ɵcmp = ɵɵdefineComponent({ type: NzDescriptionsItemComponent, selectors: [["nz-descriptions-item"]], viewQuery: function NzDescriptionsItemComponent_Query(rf, ctx) { if (rf & 1) {
            ɵɵstaticViewQuery(TemplateRef, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.content = _t.first);
        } }, inputs: { nzSpan: "nzSpan", nzTitle: "nzTitle" }, exportAs: ["nzDescriptionsItem"], features: [ɵɵNgOnChangesFeature()], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzDescriptionsItemComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵtemplate(0, NzDescriptionsItemComponent_ng_template_0_Template, 1, 0, "ng-template");
        } }, encapsulation: 2, changeDetection: 0 });
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], NzDescriptionsItemComponent.prototype, "nzSpan", void 0);
    return NzDescriptionsItemComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzDescriptionsItemComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-descriptions-item',
                templateUrl: './nz-descriptions-item.component.html',
                exportAs: 'nzDescriptionsItem',
                preserveWhitespaces: false
            }]
    }], null, { content: [{
            type: ViewChild,
            args: [TemplateRef, { static: true }]
        }], nzSpan: [{
            type: Input
        }], nzTitle: [{
            type: Input
        }] }); })();

var _c0$1 = [1, "ant-descriptions"];
function NzDescriptionsComponent_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r213 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r213.nzTitle);
} }
function NzDescriptionsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵtemplate(1, NzDescriptionsComponent_div_0_ng_container_1_Template, 2, 1, "ng-container", 4);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r210 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r210.nzTitle);
} }
function NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_1_ng_template_5_Template(rf, ctx) { }
function NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "td", 8);
    ɵɵelementStart(2, "span", 9);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementStart(4, "span", 10);
    ɵɵtemplate(5, NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_1_ng_template_5_Template, 0, 0, "ng-template", 11);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var item_r218 = ɵɵnextContext().$implicit;
    var ctx_r220 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("colSpan", item_r218.span);
    ɵɵadvance(1);
    ɵɵclassProp("ant-descriptions-item-colon", ctx_r220.nzColon);
    ɵɵadvance(1);
    ɵɵtextInterpolate(item_r218.title);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", item_r218.content);
} }
function NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_2_td_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 9);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var item_r218 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", item_r218.title, " ");
} }
function NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_2_ng_template_3_Template(rf, ctx) { }
function NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_2_td_1_Template, 2, 1, "td", 12);
    ɵɵelementStart(2, "td", 13);
    ɵɵtemplate(3, NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_2_ng_template_3_Template, 0, 0, "ng-template", 11);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var item_r218 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", item_r218.title);
    ɵɵadvance(1);
    ɵɵproperty("colSpan", item_r218.span * 2 - 1);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", item_r218.content);
} }
function NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_1_Template, 6, 4, "ng-container", 2);
    ɵɵtemplate(2, NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_2_Template, 4, 3, "ng-container", 2);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r217 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r217.nzBordered);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r217.nzBordered);
} }
function NzDescriptionsComponent_ng_container_4_tr_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "tr", 6);
    ɵɵtemplate(1, NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_Template, 3, 2, "ng-container", 7);
    ɵɵelementEnd();
} if (rf & 2) {
    var row_r215 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", row_r215);
} }
function NzDescriptionsComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzDescriptionsComponent_ng_container_4_tr_1_Template, 2, 1, "tr", 5);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r211 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r211.itemMatrix);
} }
function NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "td", 8);
    ɵɵelementStart(2, "span", 9);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var item_r235 = ctx.$implicit;
    var ctx_r233 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵproperty("colSpan", item_r235.span);
    ɵɵadvance(1);
    ɵɵclassProp("ant-descriptions-item-colon", ctx_r233.nzColon);
    ɵɵadvance(1);
    ɵɵtextInterpolate(item_r235.title);
} }
function NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_ng_container_4_ng_template_3_Template(rf, ctx) { }
function NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "td", 8);
    ɵɵelementStart(2, "span", 10);
    ɵɵtemplate(3, NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_ng_container_4_ng_template_3_Template, 0, 0, "ng-template", 11);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var item_r237 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("colSpan", item_r237.span);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", item_r237.content);
} }
function NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "tr", 6);
    ɵɵtemplate(2, NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_ng_container_2_Template, 4, 3, "ng-container", 7);
    ɵɵelementEnd();
    ɵɵelementStart(3, "tr", 6);
    ɵɵtemplate(4, NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_ng_container_4_Template, 4, 2, "ng-container", 7);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var row_r231 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", row_r231);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", row_r231);
} }
function NzDescriptionsComponent_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_Template, 5, 2, "ng-container", 7);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r228 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r228.itemMatrix);
} }
function NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "td", 14);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var item_r245 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("colSpan", item_r245.span);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", item_r245.title, " ");
} }
function NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_ng_container_4_ng_template_2_Template(rf, ctx) { }
function NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "td", 13);
    ɵɵtemplate(2, NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_ng_container_4_ng_template_2_Template, 0, 0, "ng-template", 11);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var item_r247 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("colSpan", item_r247.span);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", item_r247.content);
} }
function NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "tr", 6);
    ɵɵtemplate(2, NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_ng_container_2_Template, 3, 2, "ng-container", 7);
    ɵɵelementEnd();
    ɵɵelementStart(3, "tr", 6);
    ɵɵtemplate(4, NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_ng_container_4_Template, 3, 2, "ng-container", 7);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var row_r241 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", row_r241);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", row_r241);
} }
function NzDescriptionsComponent_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_Template, 5, 2, "ng-container", 7);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r229 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r229.itemMatrix);
} }
function NzDescriptionsComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzDescriptionsComponent_ng_container_5_ng_container_1_Template, 2, 1, "ng-container", 2);
    ɵɵtemplate(2, NzDescriptionsComponent_ng_container_5_ng_container_2_Template, 2, 1, "ng-container", 2);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r212 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r212.nzBordered);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r212.nzBordered);
} }
var NZ_CONFIG_COMPONENT_NAME = 'descriptions';
var defaultColumnMap = {
    xxl: 3,
    xl: 3,
    lg: 3,
    md: 3,
    sm: 2,
    xs: 1
};
var NzDescriptionsComponent = /** @class */ (function () {
    function NzDescriptionsComponent(nzConfigService, cdr, mediaMatcher, platform, nzDomEventService) {
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.mediaMatcher = mediaMatcher;
        this.platform = platform;
        this.nzDomEventService = nzDomEventService;
        this.nzLayout = 'horizontal';
        this.nzTitle = '';
        this.itemMatrix = [];
        this.realColumn = 3;
        this.destroy$ = new Subject();
        this.resize$ = new Subject();
    }
    NzDescriptionsComponent.prototype.ngOnChanges = function (changes) {
        if (changes.nzColumn) {
            this.resize$.next();
        }
    };
    NzDescriptionsComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        var contentChange$ = this.items.changes.pipe(startWith(this.items), takeUntil(this.destroy$));
        merge(contentChange$, contentChange$.pipe(switchMap(function () { return merge.apply(void 0, __spread(_this.items.map(function (i) { return i.inputChange$; }))).pipe(auditTime(16)); })), this.resize$)
            .pipe(takeUntil(this.destroy$))
            .subscribe(function () {
            _this.prepareMatrix();
            _this.cdr.markForCheck();
        });
        if (this.platform.isBrowser) {
            this.nzDomEventService
                .registerResizeListener()
                .pipe(takeUntil(this.destroy$), finalize(function () { return _this.nzDomEventService.unregisterResizeListener(); }))
                .subscribe(function () { return _this.resize$.next(); });
        }
    };
    NzDescriptionsComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
        this.resize$.complete();
    };
    /**
     * Prepare the render matrix according to description items' spans.
     */
    NzDescriptionsComponent.prototype.prepareMatrix = function () {
        var currentRow = [];
        var width = 0;
        var column = (this.realColumn = this.getColumn());
        var items = this.items.toArray();
        var length = items.length;
        var matrix = [];
        var flushRow = function () {
            matrix.push(currentRow);
            currentRow = [];
            width = 0;
        };
        for (var i = 0; i < length; i++) {
            var item = items[i];
            var title = item.nzTitle, content = item.content, span = item.nzSpan;
            width += span;
            // If the last item make the row's length exceeds `nzColumn`, the last
            // item should take all the space left. This logic is implemented in the template.
            // Warn user about that.
            if (width >= column) {
                if (width > column) {
                    warn("\"nzColumn\" is " + column + " but we have row length " + width);
                }
                currentRow.push({ title: title, content: content, span: column - (width - span) });
                flushRow();
            }
            else if (i === length - 1) {
                currentRow.push({ title: title, content: content, span: column - (width - span) });
                flushRow();
            }
            else {
                currentRow.push({ title: title, content: content, span: span });
            }
        }
        this.itemMatrix = matrix;
    };
    NzDescriptionsComponent.prototype.matchMedia = function () {
        var _this = this;
        var bp = NzBreakpoint.md;
        Object.keys(responsiveMap).map(function (breakpoint) {
            var castBP = breakpoint;
            var matchBelow = _this.mediaMatcher.matchMedia(responsiveMap[castBP]).matches;
            if (matchBelow) {
                bp = castBP;
            }
        });
        return bp;
    };
    NzDescriptionsComponent.prototype.getColumn = function () {
        if (typeof this.nzColumn !== 'number') {
            return this.nzColumn[this.matchMedia()];
        }
        return this.nzColumn;
    };
    /** @nocollapse */ NzDescriptionsComponent.ɵfac = function NzDescriptionsComponent_Factory(t) { return new (t || NzDescriptionsComponent)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(MediaMatcher), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(NzDomEventService)); };
    /** @nocollapse */ NzDescriptionsComponent.ɵcmp = ɵɵdefineComponent({ type: NzDescriptionsComponent, selectors: [["nz-descriptions"]], contentQueries: function NzDescriptionsComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            ɵɵcontentQuery(dirIndex, NzDescriptionsItemComponent, false);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.items = _t);
        } }, hostBindings: function NzDescriptionsComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            ɵɵallocHostVars(3);
            ɵɵelementHostAttrs(_c0$1);
        } if (rf & 2) {
            ɵɵclassProp("ant-descriptions-bordered", ctx.nzBordered)("ant-descriptions-middle", ctx.nzSize === "middle")("ant-descriptions-small", ctx.nzSize === "small");
        } }, inputs: { nzBordered: "nzBordered", nzLayout: "nzLayout", nzColumn: "nzColumn", nzSize: "nzSize", nzTitle: "nzTitle", nzColon: "nzColon" }, exportAs: ["nzDescriptions"], features: [ɵɵNgOnChangesFeature()], decls: 6, vars: 3, consts: [["class", "ant-descriptions-title", 4, "ngIf"], [1, "ant-descriptions-view"], [4, "ngIf"], [1, "ant-descriptions-title"], [4, "nzStringTemplateOutlet"], ["class", "ant-descriptions-row", 4, "ngFor", "ngForOf"], [1, "ant-descriptions-row"], [4, "ngFor", "ngForOf"], [1, "ant-descriptions-item", 3, "colSpan"], [1, "ant-descriptions-item-label"], [1, "ant-descriptions-item-content"], [3, "ngTemplateOutlet"], ["class", "ant-descriptions-item-label", 4, "nzStringTemplateOutlet"], [1, "ant-descriptions-item-content", 3, "colSpan"], [1, "ant-descriptions-item-label", 3, "colSpan"]], template: function NzDescriptionsComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵtemplate(0, NzDescriptionsComponent_div_0_Template, 2, 1, "div", 0);
            ɵɵelementStart(1, "div", 1);
            ɵɵelementStart(2, "table");
            ɵɵelementStart(3, "tbody");
            ɵɵtemplate(4, NzDescriptionsComponent_ng_container_4_Template, 2, 1, "ng-container", 2);
            ɵɵtemplate(5, NzDescriptionsComponent_ng_container_5_Template, 3, 2, "ng-container", 2);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵproperty("ngIf", ctx.nzTitle);
            ɵɵadvance(4);
            ɵɵproperty("ngIf", ctx.nzLayout === "horizontal");
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.nzLayout === "vertical");
        } }, directives: [NgIf, NzStringTemplateOutletDirective, NgForOf, NgTemplateOutlet], styles: ["\n      nz-descriptions {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
    __decorate([
        InputBoolean(), WithConfig(NZ_CONFIG_COMPONENT_NAME, false),
        __metadata("design:type", Boolean)
    ], NzDescriptionsComponent.prototype, "nzBordered", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, defaultColumnMap),
        __metadata("design:type", Object)
    ], NzDescriptionsComponent.prototype, "nzColumn", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default'),
        __metadata("design:type", String)
    ], NzDescriptionsComponent.prototype, "nzSize", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, true), InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzDescriptionsComponent.prototype, "nzColon", void 0);
    return NzDescriptionsComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzDescriptionsComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-descriptions',
                templateUrl: './nz-descriptions.component.html',
                exportAs: 'nzDescriptions',
                preserveWhitespaces: false,
                host: {
                    class: 'ant-descriptions',
                    '[class.ant-descriptions-bordered]': 'nzBordered',
                    '[class.ant-descriptions-middle]': 'nzSize === "middle"',
                    '[class.ant-descriptions-small]': 'nzSize === "small"'
                },
                styles: [
                    "\n      nz-descriptions {\n        display: block;\n      }\n    "
                ]
            }]
    }], function () { return [{ type: NzConfigService }, { type: ChangeDetectorRef }, { type: MediaMatcher }, { type: Platform }, { type: NzDomEventService }]; }, { items: [{
            type: ContentChildren,
            args: [NzDescriptionsItemComponent]
        }], nzBordered: [{
            type: Input
        }], nzLayout: [{
            type: Input
        }], nzColumn: [{
            type: Input
        }], nzSize: [{
            type: Input
        }], nzTitle: [{
            type: Input
        }], nzColon: [{
            type: Input
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzDescriptionsModule = /** @class */ (function () {
    function NzDescriptionsModule() {
    }
    /** @nocollapse */ NzDescriptionsModule.ɵmod = ɵɵdefineNgModule({ type: NzDescriptionsModule });
    /** @nocollapse */ NzDescriptionsModule.ɵinj = ɵɵdefineInjector({ factory: function NzDescriptionsModule_Factory(t) { return new (t || NzDescriptionsModule)(); }, imports: [[CommonModule, NzAddOnModule, PlatformModule]] });
    return NzDescriptionsModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzDescriptionsModule, { declarations: [NzDescriptionsComponent, NzDescriptionsItemComponent], imports: [CommonModule, NzAddOnModule, PlatformModule], exports: [NzDescriptionsComponent, NzDescriptionsItemComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzDescriptionsModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NzAddOnModule, PlatformModule],
                declarations: [NzDescriptionsComponent, NzDescriptionsItemComponent],
                exports: [NzDescriptionsComponent, NzDescriptionsItemComponent]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NzDescriptionsComponent, NzDescriptionsItemComponent, NzDescriptionsModule };
//# sourceMappingURL=ng-zorro-antd-descriptions.js.map
