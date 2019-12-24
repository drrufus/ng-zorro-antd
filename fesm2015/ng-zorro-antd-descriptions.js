import { Platform, PlatformModule } from '@angular/cdk/platform';
import { NgIf, NgForOf, NgTemplateOutlet, CommonModule } from '@angular/common';
import { ɵɵprojection, ɵɵdefineComponent, ɵɵstaticViewQuery, TemplateRef, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵNgOnChangesFeature, ɵɵprojectionDef, ɵɵtemplate, ɵsetClassMetadata, Component, ChangeDetectionStrategy, ViewEncapsulation, ViewChild, Input, ɵɵelementContainerStart, ɵɵtext, ɵɵelementContainerEnd, ɵɵnextContext, ɵɵadvance, ɵɵtextInterpolate, ɵɵelementStart, ɵɵelementEnd, ɵɵproperty, ɵɵclassProp, ɵɵtextInterpolate1, ɵɵdirectiveInject, ChangeDetectorRef, ɵɵcontentQuery, ɵɵallocHostVars, ɵɵelementHostAttrs, ContentChildren, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { InputNumber, warn, NzBreakpoint, responsiveMap, NzConfigService, NzDomEventService, NzStringTemplateOutletDirective, InputBoolean, WithConfig, NzAddOnModule } from 'ng-zorro-antd/core';
import { __decorate, __metadata } from 'tslib';
import { Subject, merge } from 'rxjs';
import { MediaMatcher } from '@angular/cdk/layout';
import { startWith, takeUntil, switchMap, auditTime, finalize } from 'rxjs/operators';

function NzDescriptionsItemComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵprojection(0);
} }
const _c0 = ["*"];
class NzDescriptionsItemComponent {
    constructor() {
        this.nzSpan = 1;
        this.nzTitle = '';
        this.inputChange$ = new Subject();
    }
    ngOnChanges() {
        this.inputChange$.next();
    }
    ngOnDestroy() {
        this.inputChange$.complete();
    }
}
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

const _c0$1 = [1, "ant-descriptions"];
function NzDescriptionsComponent_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r172 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r172.nzTitle);
} }
function NzDescriptionsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵtemplate(1, NzDescriptionsComponent_div_0_ng_container_1_Template, 2, 1, "ng-container", 4);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r169 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r169.nzTitle);
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
    const item_r177 = ɵɵnextContext().$implicit;
    const ctx_r179 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("colSpan", item_r177.span);
    ɵɵadvance(1);
    ɵɵclassProp("ant-descriptions-item-colon", ctx_r179.nzColon);
    ɵɵadvance(1);
    ɵɵtextInterpolate(item_r177.title);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", item_r177.content);
} }
function NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_2_td_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 9);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r177 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", item_r177.title, " ");
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
    const item_r177 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", item_r177.title);
    ɵɵadvance(1);
    ɵɵproperty("colSpan", item_r177.span * 2 - 1);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", item_r177.content);
} }
function NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_1_Template, 6, 4, "ng-container", 2);
    ɵɵtemplate(2, NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_2_Template, 4, 3, "ng-container", 2);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r176 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r176.nzBordered);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r176.nzBordered);
} }
function NzDescriptionsComponent_ng_container_4_tr_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "tr", 6);
    ɵɵtemplate(1, NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_Template, 3, 2, "ng-container", 7);
    ɵɵelementEnd();
} if (rf & 2) {
    const row_r174 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", row_r174);
} }
function NzDescriptionsComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzDescriptionsComponent_ng_container_4_tr_1_Template, 2, 1, "tr", 5);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r170 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r170.itemMatrix);
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
    const item_r194 = ctx.$implicit;
    const ctx_r192 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵproperty("colSpan", item_r194.span);
    ɵɵadvance(1);
    ɵɵclassProp("ant-descriptions-item-colon", ctx_r192.nzColon);
    ɵɵadvance(1);
    ɵɵtextInterpolate(item_r194.title);
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
    const item_r196 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("colSpan", item_r196.span);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", item_r196.content);
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
    const row_r190 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", row_r190);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", row_r190);
} }
function NzDescriptionsComponent_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_Template, 5, 2, "ng-container", 7);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r187 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r187.itemMatrix);
} }
function NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "td", 14);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r204 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("colSpan", item_r204.span);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", item_r204.title, " ");
} }
function NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_ng_container_4_ng_template_2_Template(rf, ctx) { }
function NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "td", 13);
    ɵɵtemplate(2, NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_ng_container_4_ng_template_2_Template, 0, 0, "ng-template", 11);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r206 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("colSpan", item_r206.span);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", item_r206.content);
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
    const row_r200 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", row_r200);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", row_r200);
} }
function NzDescriptionsComponent_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_Template, 5, 2, "ng-container", 7);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r188 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r188.itemMatrix);
} }
function NzDescriptionsComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzDescriptionsComponent_ng_container_5_ng_container_1_Template, 2, 1, "ng-container", 2);
    ɵɵtemplate(2, NzDescriptionsComponent_ng_container_5_ng_container_2_Template, 2, 1, "ng-container", 2);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r171 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r171.nzBordered);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r171.nzBordered);
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
class NzDescriptionsComponent {
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
                    `
      nz-descriptions {
        display: block;
      }
    `
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
class NzDescriptionsModule {
}
/** @nocollapse */ NzDescriptionsModule.ɵmod = ɵɵdefineNgModule({ type: NzDescriptionsModule });
/** @nocollapse */ NzDescriptionsModule.ɵinj = ɵɵdefineInjector({ factory: function NzDescriptionsModule_Factory(t) { return new (t || NzDescriptionsModule)(); }, imports: [[CommonModule, NzAddOnModule, PlatformModule]] });
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
