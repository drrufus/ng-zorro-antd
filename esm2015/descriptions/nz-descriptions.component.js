import { __decorate, __metadata } from "tslib";
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
const _c0 = [1, "ant-descriptions"];
function NzDescriptionsComponent_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r172 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r172.nzTitle);
} }
function NzDescriptionsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtemplate(1, NzDescriptionsComponent_div_0_ng_container_1_Template, 2, 1, "ng-container", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r169 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r169.nzTitle);
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
    const item_r177 = i0.ɵɵnextContext().$implicit;
    const ctx_r179 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("colSpan", item_r177.span);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ant-descriptions-item-colon", ctx_r179.nzColon);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r177.title);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", item_r177.content);
} }
function NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_2_td_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r177 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r177.title, " ");
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
    const item_r177 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", item_r177.title);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("colSpan", item_r177.span * 2 - 1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", item_r177.content);
} }
function NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_1_Template, 6, 4, "ng-container", 2);
    i0.ɵɵtemplate(2, NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_2_Template, 4, 3, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r176 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r176.nzBordered);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r176.nzBordered);
} }
function NzDescriptionsComponent_ng_container_4_tr_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 6);
    i0.ɵɵtemplate(1, NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_Template, 3, 2, "ng-container", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r174 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", row_r174);
} }
function NzDescriptionsComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzDescriptionsComponent_ng_container_4_tr_1_Template, 2, 1, "tr", 5);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r170 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r170.itemMatrix);
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
    const item_r194 = ctx.$implicit;
    const ctx_r192 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("colSpan", item_r194.span);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ant-descriptions-item-colon", ctx_r192.nzColon);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r194.title);
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
    const item_r196 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("colSpan", item_r196.span);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", item_r196.content);
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
    const row_r190 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", row_r190);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", row_r190);
} }
function NzDescriptionsComponent_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_Template, 5, 2, "ng-container", 7);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r187 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r187.itemMatrix);
} }
function NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "td", 14);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r204 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("colSpan", item_r204.span);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r204.title, " ");
} }
function NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_ng_container_4_ng_template_2_Template(rf, ctx) { }
function NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "td", 13);
    i0.ɵɵtemplate(2, NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_ng_container_4_ng_template_2_Template, 0, 0, "ng-template", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r206 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("colSpan", item_r206.span);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", item_r206.content);
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
    const row_r200 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", row_r200);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", row_r200);
} }
function NzDescriptionsComponent_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_Template, 5, 2, "ng-container", 7);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r188 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r188.itemMatrix);
} }
function NzDescriptionsComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzDescriptionsComponent_ng_container_5_ng_container_1_Template, 2, 1, "ng-container", 2);
    i0.ɵɵtemplate(2, NzDescriptionsComponent_ng_container_5_ng_container_2_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r171 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r171.nzBordered);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r171.nzBordered);
} }
const NZ_CONFIG_COMPONENT_NAME = 'descriptions';
const defaultColumnMap = {
    xxl: 3,
    xl: 3,
    lg: 3,
    md: 3,
    sm: 2,
    xs: 1
};
export class NzDescriptionsComponent {
    constructor(nzConfigService, cdr, mediaMatcher, platform, nzDomEventService) {
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
    ngOnChanges(changes) {
        if (changes.nzColumn) {
            this.resize$.next();
        }
    }
    ngAfterContentInit() {
        const contentChange$ = this.items.changes.pipe(startWith(this.items), takeUntil(this.destroy$));
        merge(contentChange$, contentChange$.pipe(switchMap(() => merge(...this.items.map(i => i.inputChange$)).pipe(auditTime(16)))), this.resize$)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            this.prepareMatrix();
            this.cdr.markForCheck();
        });
        if (this.platform.isBrowser) {
            this.nzDomEventService
                .registerResizeListener()
                .pipe(takeUntil(this.destroy$), finalize(() => this.nzDomEventService.unregisterResizeListener()))
                .subscribe(() => this.resize$.next());
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.resize$.complete();
    }
    /**
     * Prepare the render matrix according to description items' spans.
     */
    prepareMatrix() {
        let currentRow = [];
        let width = 0;
        const column = (this.realColumn = this.getColumn());
        const items = this.items.toArray();
        const length = items.length;
        const matrix = [];
        const flushRow = () => {
            matrix.push(currentRow);
            currentRow = [];
            width = 0;
        };
        for (let i = 0; i < length; i++) {
            const item = items[i];
            const { nzTitle: title, content, nzSpan: span } = item;
            width += span;
            // If the last item make the row's length exceeds `nzColumn`, the last
            // item should take all the space left. This logic is implemented in the template.
            // Warn user about that.
            if (width >= column) {
                if (width > column) {
                    warn(`"nzColumn" is ${column} but we have row length ${width}`);
                }
                currentRow.push({ title, content, span: column - (width - span) });
                flushRow();
            }
            else if (i === length - 1) {
                currentRow.push({ title, content, span: column - (width - span) });
                flushRow();
            }
            else {
                currentRow.push({ title, content, span });
            }
        }
        this.itemMatrix = matrix;
    }
    matchMedia() {
        let bp = NzBreakpoint.md;
        Object.keys(responsiveMap).map((breakpoint) => {
            const castBP = breakpoint;
            const matchBelow = this.mediaMatcher.matchMedia(responsiveMap[castBP]).matches;
            if (matchBelow) {
                bp = castBP;
            }
        });
        return bp;
    }
    getColumn() {
        if (typeof this.nzColumn !== 'number') {
            return this.nzColumn[this.matchMedia()];
        }
        return this.nzColumn;
    }
}
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
                    `
      nz-descriptions {
        display: block;
      }
    `
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZGVzY3JpcHRpb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZGVzY3JpcHRpb25zLyIsInNvdXJjZXMiOlsibnotZGVzY3JpcHRpb25zLmNvbXBvbmVudC50cyIsIm56LWRlc2NyaXB0aW9ucy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLEtBQUssRUFHTCxTQUFTLEVBR1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEYsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFckksT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7Ozs7Ozs7O0lDNUI3RSw2QkFBZ0Q7SUFBQSxZQUFhO0lBQUEsMEJBQWU7OztJQUE1QixlQUFhO0lBQWIsc0NBQWE7OztJQUQvRCw4QkFDRTtJQUFBLGdHQUFnRDtJQUNsRCxpQkFBTTs7O0lBRFUsZUFBaUM7SUFBakMseURBQWlDOzs7O0lBU3JDLDZCQUNFO0lBQUEsNkJBQ0U7SUFBQSwrQkFHRztJQUFBLFlBQWdCO0lBQUEsaUJBQ2xCO0lBQ0QsZ0NBQ0U7SUFBQSwy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Qyx3QkFBd0IsRUFBRSxnQkFBZ0IsQ0FBQzs7eURBQXNEO0FBQzVEO0lBQWhELFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxTQUFTLENBQUM7O3VEQUE0QjtBQUVoQjtJQUEzRCxVQUFVLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLEVBQUUsWUFBWSxFQUFFOzt3REFBa0I7a0RBUjNFLHVCQUF1QjtjQXJCbkMsU0FBUztlQUFDO2dCQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsV0FBVyxFQUFFLGtDQUFrQztnQkFDL0MsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxrQkFBa0I7b0JBQ3pCLG1DQUFtQyxFQUFFLFlBQVk7b0JBQ2pELGlDQUFpQyxFQUFFLHFCQUFxQjtvQkFDeEQsZ0NBQWdDLEVBQUUsb0JBQW9CO2lCQUN2RDtnQkFDRCxNQUFNLEVBQUU7b0JBQ047Ozs7S0FJQztpQkFDRjthQUNGOztrQkFFRSxlQUFlO21CQUFDLDJCQUEyQjs7a0JBRTNDLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IE1lZGlhTWF0Y2hlciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9sYXlvdXQnO1xyXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgbWVyZ2UsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgYXVkaXRUaW1lLCBmaW5hbGl6ZSwgc3RhcnRXaXRoLCBzd2l0Y2hNYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgTnpCcmVha3BvaW50LCBOekNvbmZpZ1NlcnZpY2UsIE56RG9tRXZlbnRTZXJ2aWNlLCByZXNwb25zaXZlTWFwLCB3YXJuLCBXaXRoQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpEZXNjcmlwdGlvbnNJdGVtUmVuZGVyUHJvcHMsIE56RGVzY3JpcHRpb25zTGF5b3V0LCBOekRlc2NyaXB0aW9uc1NpemUgfSBmcm9tICcuL256LWRlc2NyaXB0aW9ucy1kZWZpbml0aW9ucyc7XHJcbmltcG9ydCB7IE56RGVzY3JpcHRpb25zSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vbnotZGVzY3JpcHRpb25zLWl0ZW0uY29tcG9uZW50JztcclxuXHJcbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdkZXNjcmlwdGlvbnMnO1xyXG5jb25zdCBkZWZhdWx0Q29sdW1uTWFwOiB7IFtrZXkgaW4gTnpCcmVha3BvaW50XTogbnVtYmVyIH0gPSB7XHJcbiAgeHhsOiAzLFxyXG4gIHhsOiAzLFxyXG4gIGxnOiAzLFxyXG4gIG1kOiAzLFxyXG4gIHNtOiAyLFxyXG4gIHhzOiAxXHJcbn07XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHNlbGVjdG9yOiAnbnotZGVzY3JpcHRpb25zJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotZGVzY3JpcHRpb25zLmNvbXBvbmVudC5odG1sJyxcclxuICBleHBvcnRBczogJ256RGVzY3JpcHRpb25zJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBob3N0OiB7XHJcbiAgICBjbGFzczogJ2FudC1kZXNjcmlwdGlvbnMnLFxyXG4gICAgJ1tjbGFzcy5hbnQtZGVzY3JpcHRpb25zLWJvcmRlcmVkXSc6ICduekJvcmRlcmVkJyxcclxuICAgICdbY2xhc3MuYW50LWRlc2NyaXB0aW9ucy1taWRkbGVdJzogJ256U2l6ZSA9PT0gXCJtaWRkbGVcIicsXHJcbiAgICAnW2NsYXNzLmFudC1kZXNjcmlwdGlvbnMtc21hbGxdJzogJ256U2l6ZSA9PT0gXCJzbWFsbFwiJ1xyXG4gIH0sXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIG56LWRlc2NyaXB0aW9ucyB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekRlc2NyaXB0aW9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95LCBBZnRlckNvbnRlbnRJbml0IHtcclxuICBAQ29udGVudENoaWxkcmVuKE56RGVzY3JpcHRpb25zSXRlbUNvbXBvbmVudCkgaXRlbXM6IFF1ZXJ5TGlzdDxOekRlc2NyaXB0aW9uc0l0ZW1Db21wb25lbnQ+O1xyXG5cclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCBmYWxzZSkgbnpCb3JkZXJlZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBuekxheW91dDogTnpEZXNjcmlwdGlvbnNMYXlvdXQgPSAnaG9yaXpvbnRhbCc7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCBkZWZhdWx0Q29sdW1uTWFwKSBuekNvbHVtbjogbnVtYmVyIHwgeyBba2V5IGluIE56QnJlYWtwb2ludF06IG51bWJlciB9O1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgJ2RlZmF1bHQnKSBuelNpemU6IE56RGVzY3JpcHRpb25zU2l6ZTtcclxuICBASW5wdXQoKSBuelRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiA9ICcnO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgdHJ1ZSkgQElucHV0Qm9vbGVhbigpIG56Q29sb246IGJvb2xlYW47XHJcblxyXG4gIGl0ZW1NYXRyaXg6IE56RGVzY3JpcHRpb25zSXRlbVJlbmRlclByb3BzW11bXSA9IFtdO1xyXG5cclxuICByZWFsQ29sdW1uID0gMztcclxuXHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgcHJpdmF0ZSByZXNpemUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIG1lZGlhTWF0Y2hlcjogTWVkaWFNYXRjaGVyLFxyXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sXHJcbiAgICBwcml2YXRlIG56RG9tRXZlbnRTZXJ2aWNlOiBOekRvbUV2ZW50U2VydmljZVxyXG4gICkge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMubnpDb2x1bW4pIHtcclxuICAgICAgdGhpcy5yZXNpemUkLm5leHQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNvbnRlbnRDaGFuZ2UkID0gdGhpcy5pdGVtcy5jaGFuZ2VzLnBpcGUoc3RhcnRXaXRoKHRoaXMuaXRlbXMpLCB0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpO1xyXG5cclxuICAgIG1lcmdlKFxyXG4gICAgICBjb250ZW50Q2hhbmdlJCxcclxuICAgICAgY29udGVudENoYW5nZSQucGlwZShzd2l0Y2hNYXAoKCkgPT4gbWVyZ2UoLi4udGhpcy5pdGVtcy5tYXAoaSA9PiBpLmlucHV0Q2hhbmdlJCkpLnBpcGUoYXVkaXRUaW1lKDE2KSkpKSxcclxuICAgICAgdGhpcy5yZXNpemUkXHJcbiAgICApXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcmVwYXJlTWF0cml4KCk7XHJcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xyXG4gICAgICB0aGlzLm56RG9tRXZlbnRTZXJ2aWNlXHJcbiAgICAgICAgLnJlZ2lzdGVyUmVzaXplTGlzdGVuZXIoKVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxyXG4gICAgICAgICAgZmluYWxpemUoKCkgPT4gdGhpcy5uekRvbUV2ZW50U2VydmljZS51bnJlZ2lzdGVyUmVzaXplTGlzdGVuZXIoKSlcclxuICAgICAgICApXHJcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlc2l6ZSQubmV4dCgpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgICB0aGlzLnJlc2l6ZSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFByZXBhcmUgdGhlIHJlbmRlciBtYXRyaXggYWNjb3JkaW5nIHRvIGRlc2NyaXB0aW9uIGl0ZW1zJyBzcGFucy5cclxuICAgKi9cclxuICBwcml2YXRlIHByZXBhcmVNYXRyaXgoKTogdm9pZCB7XHJcbiAgICBsZXQgY3VycmVudFJvdzogTnpEZXNjcmlwdGlvbnNJdGVtUmVuZGVyUHJvcHNbXSA9IFtdO1xyXG4gICAgbGV0IHdpZHRoID0gMDtcclxuXHJcbiAgICBjb25zdCBjb2x1bW4gPSAodGhpcy5yZWFsQ29sdW1uID0gdGhpcy5nZXRDb2x1bW4oKSk7XHJcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMuaXRlbXMudG9BcnJheSgpO1xyXG4gICAgY29uc3QgbGVuZ3RoID0gaXRlbXMubGVuZ3RoO1xyXG4gICAgY29uc3QgbWF0cml4OiBOekRlc2NyaXB0aW9uc0l0ZW1SZW5kZXJQcm9wc1tdW10gPSBbXTtcclxuICAgIGNvbnN0IGZsdXNoUm93ID0gKCkgPT4ge1xyXG4gICAgICBtYXRyaXgucHVzaChjdXJyZW50Um93KTtcclxuICAgICAgY3VycmVudFJvdyA9IFtdO1xyXG4gICAgICB3aWR0aCA9IDA7XHJcbiAgICB9O1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgaXRlbSA9IGl0ZW1zW2ldO1xyXG4gICAgICBjb25zdCB7IG56VGl0bGU6IHRpdGxlLCBjb250ZW50LCBuelNwYW46IHNwYW4gfSA9IGl0ZW07XHJcblxyXG4gICAgICB3aWR0aCArPSBzcGFuO1xyXG5cclxuICAgICAgLy8gSWYgdGhlIGxhc3QgaXRlbSBtYWtlIHRoZSByb3cncyBsZW5ndGggZXhjZWVkcyBgbnpDb2x1bW5gLCB0aGUgbGFzdFxyXG4gICAgICAvLyBpdGVtIHNob3VsZCB0YWtlIGFsbCB0aGUgc3BhY2UgbGVmdC4gVGhpcyBsb2dpYyBpcyBpbXBsZW1lbnRlZCBpbiB0aGUgdGVtcGxhdGUuXHJcbiAgICAgIC8vIFdhcm4gdXNlciBhYm91dCB0aGF0LlxyXG4gICAgICBpZiAod2lkdGggPj0gY29sdW1uKSB7XHJcbiAgICAgICAgaWYgKHdpZHRoID4gY29sdW1uKSB7XHJcbiAgICAgICAgICB3YXJuKGBcIm56Q29sdW1uXCIgaXMgJHtjb2x1bW59IGJ1dCB3ZSBoYXZlIHJvdyBsZW5ndGggJHt3aWR0aH1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3VycmVudFJvdy5wdXNoKHsgdGl0bGUsIGNvbnRlbnQsIHNwYW46IGNvbHVtbiAtICh3aWR0aCAtIHNwYW4pIH0pO1xyXG4gICAgICAgIGZsdXNoUm93KCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoaSA9PT0gbGVuZ3RoIC0gMSkge1xyXG4gICAgICAgIGN1cnJlbnRSb3cucHVzaCh7IHRpdGxlLCBjb250ZW50LCBzcGFuOiBjb2x1bW4gLSAod2lkdGggLSBzcGFuKSB9KTtcclxuICAgICAgICBmbHVzaFJvdygpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGN1cnJlbnRSb3cucHVzaCh7IHRpdGxlLCBjb250ZW50LCBzcGFuIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pdGVtTWF0cml4ID0gbWF0cml4O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtYXRjaE1lZGlhKCk6IE56QnJlYWtwb2ludCB7XHJcbiAgICBsZXQgYnA6IE56QnJlYWtwb2ludCA9IE56QnJlYWtwb2ludC5tZDtcclxuXHJcbiAgICBPYmplY3Qua2V5cyhyZXNwb25zaXZlTWFwKS5tYXAoKGJyZWFrcG9pbnQ6IHN0cmluZykgPT4ge1xyXG4gICAgICBjb25zdCBjYXN0QlAgPSBicmVha3BvaW50IGFzIE56QnJlYWtwb2ludDtcclxuICAgICAgY29uc3QgbWF0Y2hCZWxvdyA9IHRoaXMubWVkaWFNYXRjaGVyLm1hdGNoTWVkaWEocmVzcG9uc2l2ZU1hcFtjYXN0QlBdKS5tYXRjaGVzO1xyXG4gICAgICBpZiAobWF0Y2hCZWxvdykge1xyXG4gICAgICAgIGJwID0gY2FzdEJQO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gYnA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldENvbHVtbigpOiBudW1iZXIge1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLm56Q29sdW1uICE9PSAnbnVtYmVyJykge1xyXG4gICAgICByZXR1cm4gdGhpcy5uekNvbHVtblt0aGlzLm1hdGNoTWVkaWEoKV07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMubnpDb2x1bW47XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgKm5nSWY9XCJuelRpdGxlXCIgY2xhc3M9XCJhbnQtZGVzY3JpcHRpb25zLXRpdGxlXCI+XHJcbiAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56VGl0bGVcIj57eyBuelRpdGxlIH19PC9uZy1jb250YWluZXI+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwiYW50LWRlc2NyaXB0aW9ucy12aWV3XCI+XHJcbiAgPHRhYmxlPlxyXG4gICAgPHRib2R5PlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibnpMYXlvdXQgPT09ICdob3Jpem9udGFsJ1wiPlxyXG4gICAgICAgIDx0ciBjbGFzcz1cImFudC1kZXNjcmlwdGlvbnMtcm93XCIgKm5nRm9yPVwibGV0IHJvdyBvZiBpdGVtTWF0cml4OyBsZXQgaSA9IGluZGV4XCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIHJvdzsgbGV0IGlzTGFzdCA9IGxhc3RcIj5cclxuICAgICAgICAgICAgPCEtLSBIb3Jpem9udGFsICYgTk9UIEJvcmRlcmVkIC0tPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIW56Qm9yZGVyZWRcIj5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJhbnQtZGVzY3JpcHRpb25zLWl0ZW1cIiBbY29sU3Bhbl09XCJpdGVtLnNwYW5cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYW50LWRlc2NyaXB0aW9ucy1pdGVtLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgW2NsYXNzLmFudC1kZXNjcmlwdGlvbnMtaXRlbS1jb2xvbl09XCJuekNvbG9uXCJcclxuICAgICAgICAgICAgICAgICAgPnt7IGl0ZW0udGl0bGUgfX08L3NwYW5cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYW50LWRlc2NyaXB0aW9ucy1pdGVtLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIml0ZW0uY29udGVudFwiPjwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDwhLS0gSG9yaXpvbnRhbCAmIEJvcmRlcmVkIC0tPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibnpCb3JkZXJlZFwiPlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImFudC1kZXNjcmlwdGlvbnMtaXRlbS1sYWJlbFwiICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiaXRlbS50aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAge3sgaXRlbS50aXRsZSB9fVxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYW50LWRlc2NyaXB0aW9ucy1pdGVtLWNvbnRlbnRcIiBbY29sU3Bhbl09XCJpdGVtLnNwYW4gKiAyIC0gMVwiPlxyXG4gICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIml0ZW0uY29udGVudFwiPjwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJuekxheW91dCA9PT0gJ3ZlcnRpY2FsJ1wiPlxyXG4gICAgICAgIDwhLS0gVmVydGljYWwgJiBOT1QgQm9yZGVyZWQgLS0+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFuekJvcmRlcmVkXCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCByb3cgb2YgaXRlbU1hdHJpeDsgbGV0IGkgPSBpbmRleFwiPlxyXG4gICAgICAgICAgICA8dHIgY2xhc3M9XCJhbnQtZGVzY3JpcHRpb25zLXJvd1wiPlxyXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0ZW0gb2Ygcm93OyBsZXQgaXNMYXN0ID0gbGFzdFwiPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYW50LWRlc2NyaXB0aW9ucy1pdGVtXCIgW2NvbFNwYW5dPVwiaXRlbS5zcGFuXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJhbnQtZGVzY3JpcHRpb25zLWl0ZW0tbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzcy5hbnQtZGVzY3JpcHRpb25zLWl0ZW0tY29sb25dPVwibnpDb2xvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgPnt7IGl0ZW0udGl0bGUgfX08L3NwYW5cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPHRyIGNsYXNzPVwiYW50LWRlc2NyaXB0aW9ucy1yb3dcIj5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIHJvdzsgbGV0IGlzTGFzdCA9IGxhc3RcIj5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImFudC1kZXNjcmlwdGlvbnMtaXRlbVwiIFtjb2xTcGFuXT1cIml0ZW0uc3BhblwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFudC1kZXNjcmlwdGlvbnMtaXRlbS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIml0ZW0uY29udGVudFwiPjwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8IS0tIFZlcnRpY2FsICYgQm9yZGVyZWQgLS0+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm56Qm9yZGVyZWRcIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHJvdyBvZiBpdGVtTWF0cml4OyBsZXQgaSA9IGluZGV4XCI+XHJcbiAgICAgICAgICAgIDx0ciBjbGFzcz1cImFudC1kZXNjcmlwdGlvbnMtcm93XCI+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiByb3c7IGxldCBpc0xhc3QgPSBsYXN0XCI+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJhbnQtZGVzY3JpcHRpb25zLWl0ZW0tbGFiZWxcIiBbY29sU3Bhbl09XCJpdGVtLnNwYW5cIj5cclxuICAgICAgICAgICAgICAgICAge3sgaXRlbS50aXRsZSB9fVxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPHRyIGNsYXNzPVwiYW50LWRlc2NyaXB0aW9ucy1yb3dcIj5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIHJvdzsgbGV0IGlzTGFzdCA9IGxhc3RcIj5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImFudC1kZXNjcmlwdGlvbnMtaXRlbS1jb250ZW50XCIgW2NvbFNwYW5dPVwiaXRlbS5zcGFuXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJpdGVtLmNvbnRlbnRcIj48L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvdGJvZHk+XHJcbiAgPC90YWJsZT5cclxuPC9kaXY+XHJcbiJdfQ==