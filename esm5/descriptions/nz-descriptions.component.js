import { __decorate, __metadata, __read, __spread } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { MediaMatcher } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, Input, QueryList, ViewEncapsulation } from '@angular/core';
import { merge, Subject } from 'rxjs';
import { auditTime, finalize, startWith, switchMap, takeUntil } from 'rxjs/operators';
import { InputBoolean, NzBreakpoint, NzConfigService, NzDomEventService, responsiveMap, warn, WithConfig } from 'ng-zorro-antd/core';
import { NzDescriptionsItemComponent } from './nz-descriptions-item.component';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
import * as i2 from "@angular/cdk/layout";
import * as i3 from "@angular/cdk/platform";
import * as i4 from "@angular/common";
var _c0 = [1, "ant-descriptions"];
function NzDescriptionsComponent_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r213 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r213.nzTitle);
} }
function NzDescriptionsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtemplate(1, NzDescriptionsComponent_div_0_ng_container_1_Template, 2, 1, "ng-container", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r210 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r210.nzTitle);
} }
function NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_1_ng_template_5_Template(rf, ctx) { }
function NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "td", 8);
    i0.ɵɵelementStart(2, "span", 9);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 10);
    i0.ɵɵtemplate(5, NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_1_ng_template_5_Template, 0, 0, "ng-template", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var item_r218 = i0.ɵɵnextContext().$implicit;
    var ctx_r220 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("colSpan", item_r218.span);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ant-descriptions-item-colon", ctx_r220.nzColon);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r218.title);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", item_r218.content);
} }
function NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_2_td_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r218 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r218.title, " ");
} }
function NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_2_ng_template_3_Template(rf, ctx) { }
function NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_2_td_1_Template, 2, 1, "td", 12);
    i0.ɵɵelementStart(2, "td", 13);
    i0.ɵɵtemplate(3, NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_2_ng_template_3_Template, 0, 0, "ng-template", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var item_r218 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", item_r218.title);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("colSpan", item_r218.span * 2 - 1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", item_r218.content);
} }
function NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_1_Template, 6, 4, "ng-container", 2);
    i0.ɵɵtemplate(2, NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_2_Template, 4, 3, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r217 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r217.nzBordered);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r217.nzBordered);
} }
function NzDescriptionsComponent_ng_container_4_tr_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 6);
    i0.ɵɵtemplate(1, NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_Template, 3, 2, "ng-container", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var row_r215 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", row_r215);
} }
function NzDescriptionsComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzDescriptionsComponent_ng_container_4_tr_1_Template, 2, 1, "tr", 5);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r211 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r211.itemMatrix);
} }
function NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "td", 8);
    i0.ɵɵelementStart(2, "span", 9);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var item_r235 = ctx.$implicit;
    var ctx_r233 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("colSpan", item_r235.span);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ant-descriptions-item-colon", ctx_r233.nzColon);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r235.title);
} }
function NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_ng_container_4_ng_template_3_Template(rf, ctx) { }
function NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "td", 8);
    i0.ɵɵelementStart(2, "span", 10);
    i0.ɵɵtemplate(3, NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_ng_container_4_ng_template_3_Template, 0, 0, "ng-template", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var item_r237 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("colSpan", item_r237.span);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", item_r237.content);
} }
function NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "tr", 6);
    i0.ɵɵtemplate(2, NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_ng_container_2_Template, 4, 3, "ng-container", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "tr", 6);
    i0.ɵɵtemplate(4, NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_ng_container_4_Template, 4, 2, "ng-container", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var row_r231 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", row_r231);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", row_r231);
} }
function NzDescriptionsComponent_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_Template, 5, 2, "ng-container", 7);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r228 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r228.itemMatrix);
} }
function NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "td", 14);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var item_r245 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("colSpan", item_r245.span);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r245.title, " ");
} }
function NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_ng_container_4_ng_template_2_Template(rf, ctx) { }
function NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "td", 13);
    i0.ɵɵtemplate(2, NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_ng_container_4_ng_template_2_Template, 0, 0, "ng-template", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var item_r247 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("colSpan", item_r247.span);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", item_r247.content);
} }
function NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "tr", 6);
    i0.ɵɵtemplate(2, NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_ng_container_2_Template, 3, 2, "ng-container", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "tr", 6);
    i0.ɵɵtemplate(4, NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_ng_container_4_Template, 3, 2, "ng-container", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var row_r241 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", row_r241);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", row_r241);
} }
function NzDescriptionsComponent_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_Template, 5, 2, "ng-container", 7);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r229 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r229.itemMatrix);
} }
function NzDescriptionsComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzDescriptionsComponent_ng_container_5_ng_container_1_Template, 2, 1, "ng-container", 2);
    i0.ɵɵtemplate(2, NzDescriptionsComponent_ng_container_5_ng_container_2_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r212 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r212.nzBordered);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r212.nzBordered);
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
    /** @nocollapse */ NzDescriptionsComponent.ɵfac = function NzDescriptionsComponent_Factory(t) { return new (t || NzDescriptionsComponent)(i0.ɵɵdirectiveInject(i1.NzConfigService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.MediaMatcher), i0.ɵɵdirectiveInject(i3.Platform), i0.ɵɵdirectiveInject(i1.NzDomEventService)); };
    /** @nocollapse */ NzDescriptionsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzDescriptionsComponent, selectors: [["nz-descriptions"]], contentQueries: function NzDescriptionsComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, NzDescriptionsItemComponent, false);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.items = _t);
        } }, hostBindings: function NzDescriptionsComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            i0.ɵɵallocHostVars(3);
            i0.ɵɵelementHostAttrs(_c0);
        } if (rf & 2) {
            i0.ɵɵclassProp("ant-descriptions-bordered", ctx.nzBordered)("ant-descriptions-middle", ctx.nzSize === "middle")("ant-descriptions-small", ctx.nzSize === "small");
        } }, inputs: { nzBordered: "nzBordered", nzLayout: "nzLayout", nzColumn: "nzColumn", nzSize: "nzSize", nzTitle: "nzTitle", nzColon: "nzColon" }, exportAs: ["nzDescriptions"], features: [i0.ɵɵNgOnChangesFeature()], decls: 6, vars: 3, consts: [["class", "ant-descriptions-title", 4, "ngIf"], [1, "ant-descriptions-view"], [4, "ngIf"], [1, "ant-descriptions-title"], [4, "nzStringTemplateOutlet"], ["class", "ant-descriptions-row", 4, "ngFor", "ngForOf"], [1, "ant-descriptions-row"], [4, "ngFor", "ngForOf"], [1, "ant-descriptions-item", 3, "colSpan"], [1, "ant-descriptions-item-label"], [1, "ant-descriptions-item-content"], [3, "ngTemplateOutlet"], ["class", "ant-descriptions-item-label", 4, "nzStringTemplateOutlet"], [1, "ant-descriptions-item-content", 3, "colSpan"], [1, "ant-descriptions-item-label", 3, "colSpan"]], template: function NzDescriptionsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, NzDescriptionsComponent_div_0_Template, 2, 1, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelementStart(2, "table");
            i0.ɵɵelementStart(3, "tbody");
            i0.ɵɵtemplate(4, NzDescriptionsComponent_ng_container_4_Template, 2, 1, "ng-container", 2);
            i0.ɵɵtemplate(5, NzDescriptionsComponent_ng_container_5_Template, 3, 2, "ng-container", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.nzTitle);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.nzLayout === "horizontal");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.nzLayout === "vertical");
        } }, directives: [i4.NgIf, i1.NzStringTemplateOutletDirective, i4.NgForOf, i4.NgTemplateOutlet], styles: ["\n      nz-descriptions {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
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
export { NzDescriptionsComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzDescriptionsComponent, [{
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
    }], function () { return [{ type: i1.NzConfigService }, { type: i0.ChangeDetectorRef }, { type: i2.MediaMatcher }, { type: i3.Platform }, { type: i1.NzDomEventService }]; }, { items: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZGVzY3JpcHRpb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZGVzY3JpcHRpb25zLyIsInNvdXJjZXMiOlsibnotZGVzY3JpcHRpb25zLmNvbXBvbmVudC50cyIsIm56LWRlc2NyaXB0aW9ucy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLEtBQUssRUFHTCxTQUFTLEVBR1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEYsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFckksT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7Ozs7Ozs7O0lDNUI3RSw2QkFBZ0Q7SUFBQSxZQUFhO0lBQUEsMEJBQWU7OztJQUE1QixlQUFhO0lBQWIsc0NBQWE7OztJQUQvRCw4QkFDRTtJQUFBLGdHQUFnRDtJQUNsRCxpQkFBTTs7O0lBRFUsZUFBaUM7SUFBakMseURBQWlDOzs7O0lBU3JDLDZCQUNFO0lBQUEsNkJBQ0U7SUFBQSwrQkFHRztJQUFBLFlBQWdCO0lBQUEsaUJBQ2xCO0lBQ0QsZ0NBQ0U7SUFBQSwy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QXFCO0lBRXpCO1FBQXZELFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxnQkFBZ0IsQ0FBQzs7NkRBQXNEO0lBQzVEO1FBQWhELFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxTQUFTLENBQUM7OzJEQUE0QjtJQUVoQjtRQUEzRCxVQUFVLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLEVBQUUsWUFBWSxFQUFFOzs0REFBa0I7a0NBdEV4RjtDQTRMQyxBQW5KRCxJQW1KQztTQTlIWSx1QkFBdUI7a0RBQXZCLHVCQUF1QjtjQXJCbkMsU0FBUztlQUFDO2dCQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsV0FBVyxFQUFFLGtDQUFrQztnQkFDL0MsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxrQkFBa0I7b0JBQ3pCLG1DQUFtQyxFQUFFLFlBQVk7b0JBQ2pELGlDQUFpQyxFQUFFLHFCQUFxQjtvQkFDeEQsZ0NBQWdDLEVBQUUsb0JBQW9CO2lCQUN2RDtnQkFDRCxNQUFNLEVBQUU7b0JBQ04sbUVBSUM7aUJBQ0Y7YUFDRjs7a0JBRUUsZUFBZTttQkFBQywyQkFBMkI7O2tCQUUzQyxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBNZWRpYU1hdGNoZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvbGF5b3V0JztcclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IG1lcmdlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGF1ZGl0VGltZSwgZmluYWxpemUsIHN0YXJ0V2l0aCwgc3dpdGNoTWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIE56QnJlYWtwb2ludCwgTnpDb25maWdTZXJ2aWNlLCBOekRvbUV2ZW50U2VydmljZSwgcmVzcG9uc2l2ZU1hcCwgd2FybiwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56RGVzY3JpcHRpb25zSXRlbVJlbmRlclByb3BzLCBOekRlc2NyaXB0aW9uc0xheW91dCwgTnpEZXNjcmlwdGlvbnNTaXplIH0gZnJvbSAnLi9uei1kZXNjcmlwdGlvbnMtZGVmaW5pdGlvbnMnO1xyXG5pbXBvcnQgeyBOekRlc2NyaXB0aW9uc0l0ZW1Db21wb25lbnQgfSBmcm9tICcuL256LWRlc2NyaXB0aW9ucy1pdGVtLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAnZGVzY3JpcHRpb25zJztcclxuY29uc3QgZGVmYXVsdENvbHVtbk1hcDogeyBba2V5IGluIE56QnJlYWtwb2ludF06IG51bWJlciB9ID0ge1xyXG4gIHh4bDogMyxcclxuICB4bDogMyxcclxuICBsZzogMyxcclxuICBtZDogMyxcclxuICBzbTogMixcclxuICB4czogMVxyXG59O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzZWxlY3RvcjogJ256LWRlc2NyaXB0aW9ucycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LWRlc2NyaXB0aW9ucy5jb21wb25lbnQuaHRtbCcsXHJcbiAgZXhwb3J0QXM6ICduekRlc2NyaXB0aW9ucycsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICdhbnQtZGVzY3JpcHRpb25zJyxcclxuICAgICdbY2xhc3MuYW50LWRlc2NyaXB0aW9ucy1ib3JkZXJlZF0nOiAnbnpCb3JkZXJlZCcsXHJcbiAgICAnW2NsYXNzLmFudC1kZXNjcmlwdGlvbnMtbWlkZGxlXSc6ICduelNpemUgPT09IFwibWlkZGxlXCInLFxyXG4gICAgJ1tjbGFzcy5hbnQtZGVzY3JpcHRpb25zLXNtYWxsXSc6ICduelNpemUgPT09IFwic21hbGxcIidcclxuICB9LFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBuei1kZXNjcmlwdGlvbnMge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpEZXNjcmlwdGlvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCB7XHJcbiAgQENvbnRlbnRDaGlsZHJlbihOekRlc2NyaXB0aW9uc0l0ZW1Db21wb25lbnQpIGl0ZW1zOiBRdWVyeUxpc3Q8TnpEZXNjcmlwdGlvbnNJdGVtQ29tcG9uZW50PjtcclxuXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgZmFsc2UpIG56Qm9yZGVyZWQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgbnpMYXlvdXQ6IE56RGVzY3JpcHRpb25zTGF5b3V0ID0gJ2hvcml6b250YWwnO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgZGVmYXVsdENvbHVtbk1hcCkgbnpDb2x1bW46IG51bWJlciB8IHsgW2tleSBpbiBOekJyZWFrcG9pbnRdOiBudW1iZXIgfTtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsICdkZWZhdWx0JykgbnpTaXplOiBOekRlc2NyaXB0aW9uc1NpemU7XHJcbiAgQElucHV0KCkgbnpUaXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gPSAnJztcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIHRydWUpIEBJbnB1dEJvb2xlYW4oKSBuekNvbG9uOiBib29sZWFuO1xyXG5cclxuICBpdGVtTWF0cml4OiBOekRlc2NyaXB0aW9uc0l0ZW1SZW5kZXJQcm9wc1tdW10gPSBbXTtcclxuXHJcbiAgcmVhbENvbHVtbiA9IDM7XHJcblxyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIHByaXZhdGUgcmVzaXplJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBtZWRpYU1hdGNoZXI6IE1lZGlhTWF0Y2hlcixcclxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxyXG4gICAgcHJpdmF0ZSBuekRvbUV2ZW50U2VydmljZTogTnpEb21FdmVudFNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLm56Q29sdW1uKSB7XHJcbiAgICAgIHRoaXMucmVzaXplJC5uZXh0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBjb250ZW50Q2hhbmdlJCA9IHRoaXMuaXRlbXMuY2hhbmdlcy5waXBlKHN0YXJ0V2l0aCh0aGlzLml0ZW1zKSwgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKTtcclxuXHJcbiAgICBtZXJnZShcclxuICAgICAgY29udGVudENoYW5nZSQsXHJcbiAgICAgIGNvbnRlbnRDaGFuZ2UkLnBpcGUoc3dpdGNoTWFwKCgpID0+IG1lcmdlKC4uLnRoaXMuaXRlbXMubWFwKGkgPT4gaS5pbnB1dENoYW5nZSQpKS5waXBlKGF1ZGl0VGltZSgxNikpKSksXHJcbiAgICAgIHRoaXMucmVzaXplJFxyXG4gICAgKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJlcGFyZU1hdHJpeCgpO1xyXG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgdGhpcy5uekRvbUV2ZW50U2VydmljZVxyXG4gICAgICAgIC5yZWdpc3RlclJlc2l6ZUxpc3RlbmVyKClcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcclxuICAgICAgICAgIGZpbmFsaXplKCgpID0+IHRoaXMubnpEb21FdmVudFNlcnZpY2UudW5yZWdpc3RlclJlc2l6ZUxpc3RlbmVyKCkpXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZXNpemUkLm5leHQoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gICAgdGhpcy5yZXNpemUkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQcmVwYXJlIHRoZSByZW5kZXIgbWF0cml4IGFjY29yZGluZyB0byBkZXNjcmlwdGlvbiBpdGVtcycgc3BhbnMuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBwcmVwYXJlTWF0cml4KCk6IHZvaWQge1xyXG4gICAgbGV0IGN1cnJlbnRSb3c6IE56RGVzY3JpcHRpb25zSXRlbVJlbmRlclByb3BzW10gPSBbXTtcclxuICAgIGxldCB3aWR0aCA9IDA7XHJcblxyXG4gICAgY29uc3QgY29sdW1uID0gKHRoaXMucmVhbENvbHVtbiA9IHRoaXMuZ2V0Q29sdW1uKCkpO1xyXG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLml0ZW1zLnRvQXJyYXkoKTtcclxuICAgIGNvbnN0IGxlbmd0aCA9IGl0ZW1zLmxlbmd0aDtcclxuICAgIGNvbnN0IG1hdHJpeDogTnpEZXNjcmlwdGlvbnNJdGVtUmVuZGVyUHJvcHNbXVtdID0gW107XHJcbiAgICBjb25zdCBmbHVzaFJvdyA9ICgpID0+IHtcclxuICAgICAgbWF0cml4LnB1c2goY3VycmVudFJvdyk7XHJcbiAgICAgIGN1cnJlbnRSb3cgPSBbXTtcclxuICAgICAgd2lkdGggPSAwO1xyXG4gICAgfTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtc1tpXTtcclxuICAgICAgY29uc3QgeyBuelRpdGxlOiB0aXRsZSwgY29udGVudCwgbnpTcGFuOiBzcGFuIH0gPSBpdGVtO1xyXG5cclxuICAgICAgd2lkdGggKz0gc3BhbjtcclxuXHJcbiAgICAgIC8vIElmIHRoZSBsYXN0IGl0ZW0gbWFrZSB0aGUgcm93J3MgbGVuZ3RoIGV4Y2VlZHMgYG56Q29sdW1uYCwgdGhlIGxhc3RcclxuICAgICAgLy8gaXRlbSBzaG91bGQgdGFrZSBhbGwgdGhlIHNwYWNlIGxlZnQuIFRoaXMgbG9naWMgaXMgaW1wbGVtZW50ZWQgaW4gdGhlIHRlbXBsYXRlLlxyXG4gICAgICAvLyBXYXJuIHVzZXIgYWJvdXQgdGhhdC5cclxuICAgICAgaWYgKHdpZHRoID49IGNvbHVtbikge1xyXG4gICAgICAgIGlmICh3aWR0aCA+IGNvbHVtbikge1xyXG4gICAgICAgICAgd2FybihgXCJuekNvbHVtblwiIGlzICR7Y29sdW1ufSBidXQgd2UgaGF2ZSByb3cgbGVuZ3RoICR7d2lkdGh9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN1cnJlbnRSb3cucHVzaCh7IHRpdGxlLCBjb250ZW50LCBzcGFuOiBjb2x1bW4gLSAod2lkdGggLSBzcGFuKSB9KTtcclxuICAgICAgICBmbHVzaFJvdygpO1xyXG4gICAgICB9IGVsc2UgaWYgKGkgPT09IGxlbmd0aCAtIDEpIHtcclxuICAgICAgICBjdXJyZW50Um93LnB1c2goeyB0aXRsZSwgY29udGVudCwgc3BhbjogY29sdW1uIC0gKHdpZHRoIC0gc3BhbikgfSk7XHJcbiAgICAgICAgZmx1c2hSb3coKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjdXJyZW50Um93LnB1c2goeyB0aXRsZSwgY29udGVudCwgc3BhbiB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaXRlbU1hdHJpeCA9IG1hdHJpeDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbWF0Y2hNZWRpYSgpOiBOekJyZWFrcG9pbnQge1xyXG4gICAgbGV0IGJwOiBOekJyZWFrcG9pbnQgPSBOekJyZWFrcG9pbnQubWQ7XHJcblxyXG4gICAgT2JqZWN0LmtleXMocmVzcG9uc2l2ZU1hcCkubWFwKChicmVha3BvaW50OiBzdHJpbmcpID0+IHtcclxuICAgICAgY29uc3QgY2FzdEJQID0gYnJlYWtwb2ludCBhcyBOekJyZWFrcG9pbnQ7XHJcbiAgICAgIGNvbnN0IG1hdGNoQmVsb3cgPSB0aGlzLm1lZGlhTWF0Y2hlci5tYXRjaE1lZGlhKHJlc3BvbnNpdmVNYXBbY2FzdEJQXSkubWF0Y2hlcztcclxuICAgICAgaWYgKG1hdGNoQmVsb3cpIHtcclxuICAgICAgICBicCA9IGNhc3RCUDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGJwO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRDb2x1bW4oKTogbnVtYmVyIHtcclxuICAgIGlmICh0eXBlb2YgdGhpcy5uekNvbHVtbiAhPT0gJ251bWJlcicpIHtcclxuICAgICAgcmV0dXJuIHRoaXMubnpDb2x1bW5bdGhpcy5tYXRjaE1lZGlhKCldO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLm56Q29sdW1uO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2ICpuZ0lmPVwibnpUaXRsZVwiIGNsYXNzPVwiYW50LWRlc2NyaXB0aW9ucy10aXRsZVwiPlxyXG4gIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJuelRpdGxlXCI+e3sgbnpUaXRsZSB9fTwvbmctY29udGFpbmVyPlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cImFudC1kZXNjcmlwdGlvbnMtdmlld1wiPlxyXG4gIDx0YWJsZT5cclxuICAgIDx0Ym9keT5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm56TGF5b3V0ID09PSAnaG9yaXpvbnRhbCdcIj5cclxuICAgICAgICA8dHIgY2xhc3M9XCJhbnQtZGVzY3JpcHRpb25zLXJvd1wiICpuZ0Zvcj1cImxldCByb3cgb2YgaXRlbU1hdHJpeDsgbGV0IGkgPSBpbmRleFwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiByb3c7IGxldCBpc0xhc3QgPSBsYXN0XCI+XHJcbiAgICAgICAgICAgIDwhLS0gSG9yaXpvbnRhbCAmIE5PVCBCb3JkZXJlZCAtLT5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFuekJvcmRlcmVkXCI+XHJcbiAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYW50LWRlc2NyaXB0aW9ucy1pdGVtXCIgW2NvbFNwYW5dPVwiaXRlbS5zcGFuXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImFudC1kZXNjcmlwdGlvbnMtaXRlbS1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgIFtjbGFzcy5hbnQtZGVzY3JpcHRpb25zLWl0ZW0tY29sb25dPVwibnpDb2xvblwiXHJcbiAgICAgICAgICAgICAgICAgID57eyBpdGVtLnRpdGxlIH19PC9zcGFuXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFudC1kZXNjcmlwdGlvbnMtaXRlbS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJpdGVtLmNvbnRlbnRcIj48L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8IS0tIEhvcml6b250YWwgJiBCb3JkZXJlZCAtLT5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm56Qm9yZGVyZWRcIj5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJhbnQtZGVzY3JpcHRpb25zLWl0ZW0tbGFiZWxcIiAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIml0ZW0udGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIHt7IGl0ZW0udGl0bGUgfX1cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImFudC1kZXNjcmlwdGlvbnMtaXRlbS1jb250ZW50XCIgW2NvbFNwYW5dPVwiaXRlbS5zcGFuICogMiAtIDFcIj5cclxuICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJpdGVtLmNvbnRlbnRcIj48L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibnpMYXlvdXQgPT09ICd2ZXJ0aWNhbCdcIj5cclxuICAgICAgICA8IS0tIFZlcnRpY2FsICYgTk9UIEJvcmRlcmVkIC0tPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhbnpCb3JkZXJlZFwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgcm93IG9mIGl0ZW1NYXRyaXg7IGxldCBpID0gaW5kZXhcIj5cclxuICAgICAgICAgICAgPHRyIGNsYXNzPVwiYW50LWRlc2NyaXB0aW9ucy1yb3dcIj5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIHJvdzsgbGV0IGlzTGFzdCA9IGxhc3RcIj5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImFudC1kZXNjcmlwdGlvbnMtaXRlbVwiIFtjb2xTcGFuXT1cIml0ZW0uc3BhblwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYW50LWRlc2NyaXB0aW9ucy1pdGVtLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICBbY2xhc3MuYW50LWRlc2NyaXB0aW9ucy1pdGVtLWNvbG9uXT1cIm56Q29sb25cIlxyXG4gICAgICAgICAgICAgICAgICAgID57eyBpdGVtLnRpdGxlIH19PC9zcGFuXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDx0ciBjbGFzcz1cImFudC1kZXNjcmlwdGlvbnMtcm93XCI+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiByb3c7IGxldCBpc0xhc3QgPSBsYXN0XCI+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJhbnQtZGVzY3JpcHRpb25zLWl0ZW1cIiBbY29sU3Bhbl09XCJpdGVtLnNwYW5cIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtZGVzY3JpcHRpb25zLWl0ZW0tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJpdGVtLmNvbnRlbnRcIj48L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPCEtLSBWZXJ0aWNhbCAmIEJvcmRlcmVkIC0tPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJuekJvcmRlcmVkXCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCByb3cgb2YgaXRlbU1hdHJpeDsgbGV0IGkgPSBpbmRleFwiPlxyXG4gICAgICAgICAgICA8dHIgY2xhc3M9XCJhbnQtZGVzY3JpcHRpb25zLXJvd1wiPlxyXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0ZW0gb2Ygcm93OyBsZXQgaXNMYXN0ID0gbGFzdFwiPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYW50LWRlc2NyaXB0aW9ucy1pdGVtLWxhYmVsXCIgW2NvbFNwYW5dPVwiaXRlbS5zcGFuXCI+XHJcbiAgICAgICAgICAgICAgICAgIHt7IGl0ZW0udGl0bGUgfX1cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDx0ciBjbGFzcz1cImFudC1kZXNjcmlwdGlvbnMtcm93XCI+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiByb3c7IGxldCBpc0xhc3QgPSBsYXN0XCI+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJhbnQtZGVzY3JpcHRpb25zLWl0ZW0tY29udGVudFwiIFtjb2xTcGFuXT1cIml0ZW0uc3BhblwiPlxyXG4gICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiaXRlbS5jb250ZW50XCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L3Rib2R5PlxyXG4gIDwvdGFibGU+XHJcbjwvZGl2PlxyXG4iXX0=