/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
import { responsiveMap, warn, InputBoolean, NzBreakpoint, NzConfigService, NzDomEventService, WithConfig } from 'ng-zorro-antd/core';
import { NzDescriptionsItemComponent } from './nz-descriptions-item.component';
/** @type {?} */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core';
import * as ɵngcc2 from '@angular/cdk/layout';
import * as ɵngcc3 from '@angular/cdk/platform';
import * as ɵngcc4 from '@angular/common';

function NzDescriptionsComponent_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r3.nzTitle);
} }
function NzDescriptionsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 3);
    ɵngcc0.ɵɵtemplate(1, NzDescriptionsComponent_div_0_ng_container_1_Template, 2, 1, "ng-container", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r0.nzTitle);
} }
function NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_1_ng_template_5_Template(rf, ctx) { }
function NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "td", 8);
    ɵngcc0.ɵɵelementStart(2, "span", 9);
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "span", 10);
    ɵngcc0.ɵɵtemplate(5, NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_1_ng_template_5_Template, 0, 0, "ng-template", 11);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var item_r8 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r10 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("colSpan", item_r8.span);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("ant-descriptions-item-colon", ctx_r10.nzColon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(item_r8.title);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", item_r8.content);
} }
function NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_2_td_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "td", 9);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r8 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(item_r8.title);
} }
function NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_2_ng_template_3_Template(rf, ctx) { }
function NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_2_td_1_Template, 2, 1, "td", 12);
    ɵngcc0.ɵɵelementStart(2, "td", 13);
    ɵngcc0.ɵɵtemplate(3, NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_2_ng_template_3_Template, 0, 0, "ng-template", 11);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var item_r8 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", item_r8.title);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("colSpan", item_r8.span * 2 - 1);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", item_r8.content);
} }
function NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_1_Template, 6, 5, "ng-container", 2);
    ɵngcc0.ɵɵtemplate(2, NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_2_Template, 4, 3, "ng-container", 2);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r7 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r7.nzBordered);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r7.nzBordered);
} }
function NzDescriptionsComponent_ng_container_4_tr_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "tr", 6);
    ɵngcc0.ɵɵtemplate(1, NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_Template, 3, 2, "ng-container", 7);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var row_r5 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", row_r5);
} }
function NzDescriptionsComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzDescriptionsComponent_ng_container_4_tr_1_Template, 2, 1, "tr", 5);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r1.itemMatrix);
} }
function NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "td", 8);
    ɵngcc0.ɵɵelementStart(2, "span", 9);
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var item_r25 = ctx.$implicit;
    var ctx_r23 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("colSpan", item_r25.span);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("ant-descriptions-item-colon", ctx_r23.nzColon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(item_r25.title);
} }
function NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_ng_container_4_ng_template_3_Template(rf, ctx) { }
function NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "td", 8);
    ɵngcc0.ɵɵelementStart(2, "span", 10);
    ɵngcc0.ɵɵtemplate(3, NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_ng_container_4_ng_template_3_Template, 0, 0, "ng-template", 11);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var item_r27 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("colSpan", item_r27.span);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", item_r27.content);
} }
function NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "tr", 6);
    ɵngcc0.ɵɵtemplate(2, NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_ng_container_2_Template, 4, 4, "ng-container", 7);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "tr", 6);
    ɵngcc0.ɵɵtemplate(4, NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_ng_container_4_Template, 4, 2, "ng-container", 7);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var row_r21 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", row_r21);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", row_r21);
} }
function NzDescriptionsComponent_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_Template, 5, 2, "ng-container", 7);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r18 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r18.itemMatrix);
} }
function NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "td", 14);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var item_r35 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("colSpan", item_r35.span);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", item_r35.title, " ");
} }
function NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_ng_container_4_ng_template_2_Template(rf, ctx) { }
function NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "td", 13);
    ɵngcc0.ɵɵtemplate(2, NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_ng_container_4_ng_template_2_Template, 0, 0, "ng-template", 11);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var item_r37 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("colSpan", item_r37.span);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", item_r37.content);
} }
function NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "tr", 6);
    ɵngcc0.ɵɵtemplate(2, NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_ng_container_2_Template, 3, 2, "ng-container", 7);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "tr", 6);
    ɵngcc0.ɵɵtemplate(4, NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_ng_container_4_Template, 3, 2, "ng-container", 7);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var row_r31 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", row_r31);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", row_r31);
} }
function NzDescriptionsComponent_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_Template, 5, 2, "ng-container", 7);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r19 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r19.itemMatrix);
} }
function NzDescriptionsComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzDescriptionsComponent_ng_container_5_ng_container_1_Template, 2, 1, "ng-container", 2);
    ɵngcc0.ɵɵtemplate(2, NzDescriptionsComponent_ng_container_5_ng_container_2_Template, 2, 1, "ng-container", 2);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r2.nzBordered);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.nzBordered);
} }
var NZ_CONFIG_COMPONENT_NAME = 'descriptions';
/** @type {?} */
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
    /**
     * @param {?} changes
     * @return {?}
     */
    NzDescriptionsComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzColumn) {
            this.resize$.next();
        }
    };
    /**
     * @return {?}
     */
    NzDescriptionsComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var contentChange$ = this.items.changes.pipe(startWith(this.items), takeUntil(this.destroy$));
        merge(contentChange$, contentChange$.pipe(switchMap((/**
         * @return {?}
         */
        function () { return merge.apply(void 0, tslib_1.__spread(_this.items.map((/**
         * @param {?} i
         * @return {?}
         */
        function (i) { return i.inputChange$; })))).pipe(auditTime(16)); }))), this.resize$)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.prepareMatrix();
            _this.cdr.markForCheck();
        }));
        if (this.platform.isBrowser) {
            this.nzDomEventService
                .registerResizeListener()
                .pipe(takeUntil(this.destroy$), finalize((/**
             * @return {?}
             */
            function () { return _this.nzDomEventService.unregisterResizeListener(); })))
                .subscribe((/**
             * @return {?}
             */
            function () { return _this.resize$.next(); }));
        }
    };
    /**
     * @return {?}
     */
    NzDescriptionsComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
        this.resize$.complete();
    };
    /**
     * Prepare the render matrix according to description items' spans.
     */
    /**
     * Prepare the render matrix according to description items' spans.
     * @private
     * @return {?}
     */
    NzDescriptionsComponent.prototype.prepareMatrix = /**
     * Prepare the render matrix according to description items' spans.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var currentRow = [];
        /** @type {?} */
        var width = 0;
        /** @type {?} */
        var column = (this.realColumn = this.getColumn());
        /** @type {?} */
        var items = this.items.toArray();
        /** @type {?} */
        var length = items.length;
        /** @type {?} */
        var matrix = [];
        /** @type {?} */
        var flushRow = (/**
         * @return {?}
         */
        function () {
            matrix.push(currentRow);
            currentRow = [];
            width = 0;
        });
        for (var i = 0; i < length; i++) {
            /** @type {?} */
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
    /**
     * @private
     * @return {?}
     */
    NzDescriptionsComponent.prototype.matchMedia = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var bp = NzBreakpoint.md;
        Object.keys(responsiveMap).map((/**
         * @param {?} breakpoint
         * @return {?}
         */
        function (breakpoint) {
            /** @type {?} */
            var castBP = (/** @type {?} */ (breakpoint));
            /** @type {?} */
            var matchBelow = _this.mediaMatcher.matchMedia(responsiveMap[castBP]).matches;
            if (matchBelow) {
                bp = castBP;
            }
        }));
        return bp;
    };
    /**
     * @private
     * @return {?}
     */
    NzDescriptionsComponent.prototype.getColumn = /**
     * @private
     * @return {?}
     */
    function () {
        if (typeof this.nzColumn !== 'number') {
            return this.nzColumn[this.matchMedia()];
        }
        return this.nzColumn;
    };
    /** @nocollapse */
    NzDescriptionsComponent.ctorParameters = function () { return [
        { type: NzConfigService },
        { type: ChangeDetectorRef },
        { type: MediaMatcher },
        { type: Platform },
        { type: NzDomEventService }
    ]; };
    NzDescriptionsComponent.propDecorators = {
        items: [{ type: ContentChildren, args: [NzDescriptionsItemComponent,] }],
        nzBordered: [{ type: Input }],
        nzLayout: [{ type: Input }],
        nzColumn: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzTitle: [{ type: Input }],
        nzColon: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(), WithConfig(NZ_CONFIG_COMPONENT_NAME, false),
        tslib_1.__metadata("design:type", Boolean)
    ], NzDescriptionsComponent.prototype, "nzBordered", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, defaultColumnMap),
        tslib_1.__metadata("design:type", Object)
    ], NzDescriptionsComponent.prototype, "nzColumn", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default'),
        tslib_1.__metadata("design:type", String)
    ], NzDescriptionsComponent.prototype, "nzSize", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, true), InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzDescriptionsComponent.prototype, "nzColon", void 0);
NzDescriptionsComponent.ɵfac = function NzDescriptionsComponent_Factory(t) { return new (t || NzDescriptionsComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzConfigService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.MediaMatcher), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.Platform), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzDomEventService)); };
NzDescriptionsComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzDescriptionsComponent, selectors: [["nz-descriptions"]], contentQueries: function NzDescriptionsComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzDescriptionsItemComponent, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.items = _t);
    } }, hostAttrs: [1, "ant-descriptions"], hostVars: 6, hostBindings: function NzDescriptionsComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-descriptions-bordered", ctx.nzBordered)("ant-descriptions-middle", ctx.nzSize === "middle")("ant-descriptions-small", ctx.nzSize === "small");
    } }, inputs: { nzLayout: "nzLayout", nzTitle: "nzTitle", nzBordered: "nzBordered", nzColumn: "nzColumn", nzSize: "nzSize", nzColon: "nzColon" }, exportAs: ["nzDescriptions"], features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 6, vars: 3, consts: [["class", "ant-descriptions-title", 4, "ngIf"], [1, "ant-descriptions-view"], [4, "ngIf"], [1, "ant-descriptions-title"], [4, "nzStringTemplateOutlet"], ["class", "ant-descriptions-row", 4, "ngFor", "ngForOf"], [1, "ant-descriptions-row"], [4, "ngFor", "ngForOf"], [1, "ant-descriptions-item", 3, "colSpan"], [1, "ant-descriptions-item-label"], [1, "ant-descriptions-item-content"], [3, "ngTemplateOutlet"], ["class", "ant-descriptions-item-label", 4, "nzStringTemplateOutlet"], [1, "ant-descriptions-item-content", 3, "colSpan"], [1, "ant-descriptions-item-label", 3, "colSpan"]], template: function NzDescriptionsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzDescriptionsComponent_div_0_Template, 2, 1, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "table");
        ɵngcc0.ɵɵelementStart(3, "tbody");
        ɵngcc0.ɵɵtemplate(4, NzDescriptionsComponent_ng_container_4_Template, 2, 1, "ng-container", 2);
        ɵngcc0.ɵɵtemplate(5, NzDescriptionsComponent_ng_container_5_Template, 3, 2, "ng-container", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzTitle);
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzLayout === "horizontal");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzLayout === "vertical");
    } }, directives: [ɵngcc4.NgIf, ɵngcc1.NzStringTemplateOutletDirective, ɵngcc4.NgForOf, ɵngcc4.NgTemplateOutlet], styles: ["\n      nz-descriptions {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzDescriptionsComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-descriptions',
                template: "<div *ngIf=\"nzTitle\"\r\n     class=\"ant-descriptions-title\">\r\n  <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\r\n</div>\r\n<div class=\"ant-descriptions-view\">\r\n  <table>\r\n    <tbody>\r\n      <ng-container *ngIf=\"nzLayout === 'horizontal'\">\r\n        <tr class=\"ant-descriptions-row\"\r\n            *ngFor=\"let row of itemMatrix; let i = index\">\r\n          <ng-container *ngFor=\"let item of row; let isLast = last\">\r\n            <!-- Horizontal & NOT Bordered -->\r\n            <ng-container *ngIf=\"!nzBordered\">\r\n              <td class=\"ant-descriptions-item\"\r\n                  [colSpan]=\"item.span\">\r\n                <span class=\"ant-descriptions-item-label\"\r\n                      [class.ant-descriptions-item-colon]=\"nzColon\">{{ item.title }}</span>\r\n                <span class=\"ant-descriptions-item-content\">\r\n                  <ng-template [ngTemplateOutlet]=\"item.content\"></ng-template>\r\n                </span>\r\n              </td>\r\n            </ng-container>\r\n            <!-- Horizontal & Bordered -->\r\n            <ng-container *ngIf=\"nzBordered\">\r\n              <td class=\"ant-descriptions-item-label\"\r\n                  *nzStringTemplateOutlet=\"item.title\">{{ item.title }}</td>\r\n              <td class=\"ant-descriptions-item-content\"\r\n                  [colSpan]=\"item.span * 2 - 1\">\r\n                <ng-template [ngTemplateOutlet]=\"item.content\"></ng-template>\r\n              </td>\r\n            </ng-container>\r\n          </ng-container>\r\n        </tr>\r\n      </ng-container>\r\n\r\n      <ng-container *ngIf=\"nzLayout === 'vertical'\">\r\n        <!-- Vertical & NOT Bordered -->\r\n        <ng-container *ngIf=\"!nzBordered\">\r\n          <ng-container *ngFor=\"let row of itemMatrix; let i = index\">\r\n            <tr class=\"ant-descriptions-row\">\r\n              <ng-container *ngFor=\"let item of row; let isLast = last\">\r\n                <td class=\"ant-descriptions-item\"\r\n                    [colSpan]=\"item.span\">\r\n                  <span class=\"ant-descriptions-item-label\"\r\n                        [class.ant-descriptions-item-colon]=\"nzColon\">{{ item.title }}</span>\r\n                </td>\r\n              </ng-container>\r\n            </tr>\r\n            <tr class=\"ant-descriptions-row\">\r\n              <ng-container *ngFor=\"let item of row; let isLast = last\">\r\n                <td class=\"ant-descriptions-item\"\r\n                    [colSpan]=\"item.span\">\r\n                  <span class=\"ant-descriptions-item-content\">\r\n                    <ng-template [ngTemplateOutlet]=\"item.content\"></ng-template>\r\n                  </span>\r\n                </td>\r\n              </ng-container>\r\n            </tr>\r\n          </ng-container>\r\n        </ng-container>\r\n        <!-- Vertical & Bordered -->\r\n        <ng-container *ngIf=\"nzBordered\">\r\n          <ng-container *ngFor=\"let row of itemMatrix; let i = index\">\r\n            <tr class=\"ant-descriptions-row\">\r\n              <ng-container *ngFor=\"let item of row; let isLast = last\">\r\n                <td class=\"ant-descriptions-item-label\"\r\n                    [colSpan]=\"item.span\">\r\n                  {{ item.title }}\r\n                </td>\r\n              </ng-container>\r\n            </tr>\r\n            <tr class=\"ant-descriptions-row\">\r\n              <ng-container *ngFor=\"let item of row; let isLast = last\">\r\n                <td class=\"ant-descriptions-item-content\"\r\n                    [colSpan]=\"item.span\">\r\n                  <ng-template [ngTemplateOutlet]=\"item.content\"></ng-template>\r\n                </td>\r\n              </ng-container>\r\n            </tr>\r\n          </ng-container>\r\n        </ng-container>\r\n      </ng-container>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n",
                exportAs: 'nzDescriptions',
                preserveWhitespaces: false,
                host: {
                    class: 'ant-descriptions',
                    '[class.ant-descriptions-bordered]': 'nzBordered',
                    '[class.ant-descriptions-middle]': 'nzSize === "middle"',
                    '[class.ant-descriptions-small]': 'nzSize === "small"'
                },
                styles: ["\n      nz-descriptions {\n        display: block;\n      }\n    "]
            }]
    }], function () { return [{ type: ɵngcc1.NzConfigService }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc2.MediaMatcher }, { type: ɵngcc3.Platform }, { type: ɵngcc1.NzDomEventService }]; }, { nzLayout: [{
            type: Input
        }], nzTitle: [{
            type: Input
        }], items: [{
            type: ContentChildren,
            args: [NzDescriptionsItemComponent]
        }], nzBordered: [{
            type: Input
        }], nzColumn: [{
            type: Input
        }], nzSize: [{
            type: Input
        }], nzColon: [{
            type: Input
        }] }); })();
    return NzDescriptionsComponent;
}());
export { NzDescriptionsComponent };
if (false) {
    /** @type {?} */
    NzDescriptionsComponent.prototype.items;
    /** @type {?} */
    NzDescriptionsComponent.prototype.nzBordered;
    /** @type {?} */
    NzDescriptionsComponent.prototype.nzLayout;
    /** @type {?} */
    NzDescriptionsComponent.prototype.nzColumn;
    /** @type {?} */
    NzDescriptionsComponent.prototype.nzSize;
    /** @type {?} */
    NzDescriptionsComponent.prototype.nzTitle;
    /** @type {?} */
    NzDescriptionsComponent.prototype.nzColon;
    /** @type {?} */
    NzDescriptionsComponent.prototype.itemMatrix;
    /** @type {?} */
    NzDescriptionsComponent.prototype.realColumn;
    /**
     * @type {?}
     * @private
     */
    NzDescriptionsComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzDescriptionsComponent.prototype.resize$;
    /** @type {?} */
    NzDescriptionsComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzDescriptionsComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzDescriptionsComponent.prototype.mediaMatcher;
    /**
     * @type {?}
     * @private
     */
    NzDescriptionsComponent.prototype.platform;
    /**
     * @type {?}
     * @private
     */
    NzDescriptionsComponent.prototype.nzDomEventService;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZGVzY3JpcHRpb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsibmc6L25nLXpvcnJvLWFudGQvZGVzY3JpcHRpb25zL256LWRlc2NyaXB0aW9ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLEtBQUssRUFHTCxTQUFTLEVBR1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEYsT0FBTyxFQUNMLGFBQWEsRUFDYixJQUFJLEVBQ0osWUFBWSxFQUNaLFlBQVksRUFDWixlQUFlLEVBQ2YsaUJBQWlCLEVBQ2pCLFVBQVUsRUFDWCxNQUFNLG9CQUFvQixDQUFDO0FBRTVCLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9ELElBQVYsd0JBQXdCLEdBQUcsY0FBYzs7SUFD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KlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgTWVkaWFNYXRjaGVyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2xheW91dCc7XHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBRdWVyeUxpc3QsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBtZXJnZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBhdWRpdFRpbWUsIGZpbmFsaXplLCBzdGFydFdpdGgsIHN3aXRjaE1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHtcclxuICByZXNwb25zaXZlTWFwLFxyXG4gIHdhcm4sXHJcbiAgSW5wdXRCb29sZWFuLFxyXG4gIE56QnJlYWtwb2ludCxcclxuICBOekNvbmZpZ1NlcnZpY2UsXHJcbiAgTnpEb21FdmVudFNlcnZpY2UsXHJcbiAgV2l0aENvbmZpZ1xyXG59IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56RGVzY3JpcHRpb25zSXRlbVJlbmRlclByb3BzLCBOekRlc2NyaXB0aW9uc0xheW91dCwgTnpEZXNjcmlwdGlvbnNTaXplIH0gZnJvbSAnLi9uei1kZXNjcmlwdGlvbnMtZGVmaW5pdGlvbnMnO1xyXG5pbXBvcnQgeyBOekRlc2NyaXB0aW9uc0l0ZW1Db21wb25lbnQgfSBmcm9tICcuL256LWRlc2NyaXB0aW9ucy1pdGVtLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAnZGVzY3JpcHRpb25zJztcclxuY29uc3QgZGVmYXVsdENvbHVtbk1hcDogeyBba2V5IGluIE56QnJlYWtwb2ludF06IG51bWJlciB9ID0ge1xyXG4gIHh4bDogMyxcclxuICB4bDogMyxcclxuICBsZzogMyxcclxuICBtZDogMyxcclxuICBzbTogMixcclxuICB4czogMVxyXG59O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzZWxlY3RvcjogJ256LWRlc2NyaXB0aW9ucycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LWRlc2NyaXB0aW9ucy5jb21wb25lbnQuaHRtbCcsXHJcbiAgZXhwb3J0QXM6ICduekRlc2NyaXB0aW9ucycsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICdhbnQtZGVzY3JpcHRpb25zJyxcclxuICAgICdbY2xhc3MuYW50LWRlc2NyaXB0aW9ucy1ib3JkZXJlZF0nOiAnbnpCb3JkZXJlZCcsXHJcbiAgICAnW2NsYXNzLmFudC1kZXNjcmlwdGlvbnMtbWlkZGxlXSc6ICduelNpemUgPT09IFwibWlkZGxlXCInLFxyXG4gICAgJ1tjbGFzcy5hbnQtZGVzY3JpcHRpb25zLXNtYWxsXSc6ICduelNpemUgPT09IFwic21hbGxcIidcclxuICB9LFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBuei1kZXNjcmlwdGlvbnMge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpEZXNjcmlwdGlvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCB7XHJcbiAgQENvbnRlbnRDaGlsZHJlbihOekRlc2NyaXB0aW9uc0l0ZW1Db21wb25lbnQpIGl0ZW1zOiBRdWVyeUxpc3Q8TnpEZXNjcmlwdGlvbnNJdGVtQ29tcG9uZW50PjtcclxuXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgZmFsc2UpIG56Qm9yZGVyZWQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgbnpMYXlvdXQ6IE56RGVzY3JpcHRpb25zTGF5b3V0ID0gJ2hvcml6b250YWwnO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgZGVmYXVsdENvbHVtbk1hcCkgbnpDb2x1bW46IG51bWJlciB8IHsgW2tleSBpbiBOekJyZWFrcG9pbnRdOiBudW1iZXIgfTtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsICdkZWZhdWx0JykgbnpTaXplOiBOekRlc2NyaXB0aW9uc1NpemU7XHJcbiAgQElucHV0KCkgbnpUaXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gPSAnJztcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIHRydWUpIEBJbnB1dEJvb2xlYW4oKSBuekNvbG9uOiBib29sZWFuO1xyXG5cclxuICBpdGVtTWF0cml4OiBOekRlc2NyaXB0aW9uc0l0ZW1SZW5kZXJQcm9wc1tdW10gPSBbXTtcclxuXHJcbiAgcmVhbENvbHVtbiA9IDM7XHJcblxyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIHByaXZhdGUgcmVzaXplJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBtZWRpYU1hdGNoZXI6IE1lZGlhTWF0Y2hlcixcclxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxyXG4gICAgcHJpdmF0ZSBuekRvbUV2ZW50U2VydmljZTogTnpEb21FdmVudFNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLm56Q29sdW1uKSB7XHJcbiAgICAgIHRoaXMucmVzaXplJC5uZXh0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBjb250ZW50Q2hhbmdlJCA9IHRoaXMuaXRlbXMuY2hhbmdlcy5waXBlKFxyXG4gICAgICBzdGFydFdpdGgodGhpcy5pdGVtcyksXHJcbiAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxyXG4gICAgKTtcclxuXHJcbiAgICBtZXJnZShcclxuICAgICAgY29udGVudENoYW5nZSQsXHJcbiAgICAgIGNvbnRlbnRDaGFuZ2UkLnBpcGUoc3dpdGNoTWFwKCgpID0+IG1lcmdlKC4uLnRoaXMuaXRlbXMubWFwKGkgPT4gaS5pbnB1dENoYW5nZSQpKS5waXBlKGF1ZGl0VGltZSgxNikpKSksXHJcbiAgICAgIHRoaXMucmVzaXplJFxyXG4gICAgKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJlcGFyZU1hdHJpeCgpO1xyXG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgdGhpcy5uekRvbUV2ZW50U2VydmljZVxyXG4gICAgICAgIC5yZWdpc3RlclJlc2l6ZUxpc3RlbmVyKClcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcclxuICAgICAgICAgIGZpbmFsaXplKCgpID0+IHRoaXMubnpEb21FdmVudFNlcnZpY2UudW5yZWdpc3RlclJlc2l6ZUxpc3RlbmVyKCkpXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZXNpemUkLm5leHQoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gICAgdGhpcy5yZXNpemUkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQcmVwYXJlIHRoZSByZW5kZXIgbWF0cml4IGFjY29yZGluZyB0byBkZXNjcmlwdGlvbiBpdGVtcycgc3BhbnMuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBwcmVwYXJlTWF0cml4KCk6IHZvaWQge1xyXG4gICAgbGV0IGN1cnJlbnRSb3c6IE56RGVzY3JpcHRpb25zSXRlbVJlbmRlclByb3BzW10gPSBbXTtcclxuICAgIGxldCB3aWR0aCA9IDA7XHJcblxyXG4gICAgY29uc3QgY29sdW1uID0gKHRoaXMucmVhbENvbHVtbiA9IHRoaXMuZ2V0Q29sdW1uKCkpO1xyXG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLml0ZW1zLnRvQXJyYXkoKTtcclxuICAgIGNvbnN0IGxlbmd0aCA9IGl0ZW1zLmxlbmd0aDtcclxuICAgIGNvbnN0IG1hdHJpeDogTnpEZXNjcmlwdGlvbnNJdGVtUmVuZGVyUHJvcHNbXVtdID0gW107XHJcbiAgICBjb25zdCBmbHVzaFJvdyA9ICgpID0+IHtcclxuICAgICAgbWF0cml4LnB1c2goY3VycmVudFJvdyk7XHJcbiAgICAgIGN1cnJlbnRSb3cgPSBbXTtcclxuICAgICAgd2lkdGggPSAwO1xyXG4gICAgfTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtc1tpXTtcclxuICAgICAgY29uc3QgeyBuelRpdGxlOiB0aXRsZSwgY29udGVudCwgbnpTcGFuOiBzcGFuIH0gPSBpdGVtO1xyXG5cclxuICAgICAgd2lkdGggKz0gc3BhbjtcclxuXHJcbiAgICAgIC8vIElmIHRoZSBsYXN0IGl0ZW0gbWFrZSB0aGUgcm93J3MgbGVuZ3RoIGV4Y2VlZHMgYG56Q29sdW1uYCwgdGhlIGxhc3RcclxuICAgICAgLy8gaXRlbSBzaG91bGQgdGFrZSBhbGwgdGhlIHNwYWNlIGxlZnQuIFRoaXMgbG9naWMgaXMgaW1wbGVtZW50ZWQgaW4gdGhlIHRlbXBsYXRlLlxyXG4gICAgICAvLyBXYXJuIHVzZXIgYWJvdXQgdGhhdC5cclxuICAgICAgaWYgKHdpZHRoID49IGNvbHVtbikge1xyXG4gICAgICAgIGlmICh3aWR0aCA+IGNvbHVtbikge1xyXG4gICAgICAgICAgd2FybihgXCJuekNvbHVtblwiIGlzICR7Y29sdW1ufSBidXQgd2UgaGF2ZSByb3cgbGVuZ3RoICR7d2lkdGh9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN1cnJlbnRSb3cucHVzaCh7IHRpdGxlLCBjb250ZW50LCBzcGFuOiBjb2x1bW4gLSAod2lkdGggLSBzcGFuKSB9KTtcclxuICAgICAgICBmbHVzaFJvdygpO1xyXG4gICAgICB9IGVsc2UgaWYgKGkgPT09IGxlbmd0aCAtIDEpIHtcclxuICAgICAgICBjdXJyZW50Um93LnB1c2goeyB0aXRsZSwgY29udGVudCwgc3BhbjogY29sdW1uIC0gKHdpZHRoIC0gc3BhbikgfSk7XHJcbiAgICAgICAgZmx1c2hSb3coKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjdXJyZW50Um93LnB1c2goeyB0aXRsZSwgY29udGVudCwgc3BhbiB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaXRlbU1hdHJpeCA9IG1hdHJpeDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbWF0Y2hNZWRpYSgpOiBOekJyZWFrcG9pbnQge1xyXG4gICAgbGV0IGJwOiBOekJyZWFrcG9pbnQgPSBOekJyZWFrcG9pbnQubWQ7XHJcblxyXG4gICAgT2JqZWN0LmtleXMocmVzcG9uc2l2ZU1hcCkubWFwKChicmVha3BvaW50OiBzdHJpbmcpID0+IHtcclxuICAgICAgY29uc3QgY2FzdEJQID0gYnJlYWtwb2ludCBhcyBOekJyZWFrcG9pbnQ7XHJcbiAgICAgIGNvbnN0IG1hdGNoQmVsb3cgPSB0aGlzLm1lZGlhTWF0Y2hlci5tYXRjaE1lZGlhKHJlc3BvbnNpdmVNYXBbY2FzdEJQXSkubWF0Y2hlcztcclxuICAgICAgaWYgKG1hdGNoQmVsb3cpIHtcclxuICAgICAgICBicCA9IGNhc3RCUDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGJwO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRDb2x1bW4oKTogbnVtYmVyIHtcclxuICAgIGlmICh0eXBlb2YgdGhpcy5uekNvbHVtbiAhPT0gJ251bWJlcicpIHtcclxuICAgICAgcmV0dXJuIHRoaXMubnpDb2x1bW5bdGhpcy5tYXRjaE1lZGlhKCldO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLm56Q29sdW1uO1xyXG4gIH1cclxufVxyXG4iXX0=