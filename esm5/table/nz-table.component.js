import { __decorate, __metadata, __read, __spread } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ContentChildren, ElementRef, EventEmitter, Input, NgZone, Output, QueryList, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { EMPTY, fromEvent, merge, Subject } from 'rxjs';
import { flatMap, startWith, takeUntil } from 'rxjs/operators';
import { InputBoolean, InputNumber, measureScrollbar, NzConfigService, WithConfig } from 'ng-zorro-antd/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { NzThComponent } from './nz-th.component';
import { NzVirtualScrollDirective } from './nz-virtual-scroll.directive';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
import * as i2 from "ng-zorro-antd/i18n";
import * as i3 from "@angular/cdk/platform";
var _c0 = ["tableHeaderElement"];
var _c1 = ["tableBodyElement"];
var _c2 = ["tableMainElement"];
var _c3 = ["renderItemTemplate"];
function NzTableComponent_ng_template_0_a_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 13);
    i0.ɵɵelement(1, "i", 14);
    i0.ɵɵelementEnd();
} }
function NzTableComponent_ng_template_0_a_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 13);
    i0.ɵɵelement(1, "i", 15);
    i0.ɵɵelementEnd();
} }
function NzTableComponent_ng_template_0_a_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var page_r2678 = i0.ɵɵnextContext().page;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(page_r2678);
} }
function NzTableComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NzTableComponent_ng_template_0_a_0_Template, 2, 0, "a", 12);
    i0.ɵɵtemplate(1, NzTableComponent_ng_template_0_a_1_Template, 2, 0, "a", 12);
    i0.ɵɵtemplate(2, NzTableComponent_ng_template_0_a_2_Template, 2, 1, "a", 6);
} if (rf & 2) {
    var type_r2677 = ctx.$implicit;
    i0.ɵɵproperty("ngIf", type_r2677 === "pre");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", type_r2677 === "next");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", type_r2677 == "page");
} }
function NzTableComponent_ng_template_2_col_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "col");
} if (rf & 2) {
    var width_r2685 = ctx.$implicit;
    i0.ɵɵstyleProp("width", width_r2685)("min-width", width_r2685);
} }
function NzTableComponent_ng_template_2_ng_container_2_col_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "col");
} if (rf & 2) {
    var th_r2687 = ctx.$implicit;
    i0.ɵɵstyleProp("width", th_r2687.nzWidth)("min-width", th_r2687.nzWidth);
} }
function NzTableComponent_ng_template_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzTableComponent_ng_template_2_ng_container_2_col_1_Template, 1, 2, "col", 16);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r2684 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r2684.listOfNzThComponent);
} }
function NzTableComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "colgroup");
    i0.ɵɵtemplate(1, NzTableComponent_ng_template_2_col_1_Template, 1, 2, "col", 16);
    i0.ɵɵtemplate(2, NzTableComponent_ng_template_2_ng_container_2_Template, 2, 1, "ng-container", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2665 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r2665.nzWidthConfig);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2665.nzWidthConfig && !ctx_r2665.nzWidthConfig.length || !ctx_r2665.nzWidthConfig);
} }
function NzTableComponent_ng_template_4_ng_template_0_Template(rf, ctx) { }
function NzTableComponent_ng_template_4_thead_1_ng_template_1_Template(rf, ctx) { }
function NzTableComponent_ng_template_4_thead_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "thead", 19);
    i0.ɵɵtemplate(1, NzTableComponent_ng_template_4_thead_1_ng_template_1_Template, 0, 0, "ng-template", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2689 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r2689.nzTheadComponent == null ? null : ctx_r2689.nzTheadComponent.templateRef);
} }
function NzTableComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NzTableComponent_ng_template_4_ng_template_0_Template, 0, 0, "ng-template", 17);
    i0.ɵɵtemplate(1, NzTableComponent_ng_template_4_thead_1_Template, 2, 1, "thead", 18);
} if (rf & 2) {
    var ctx_r2667 = i0.ɵɵnextContext();
    var _r2664 = i0.ɵɵreference(3);
    i0.ɵɵproperty("ngTemplateOutlet", _r2664);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r2667.nzScroll.y);
} }
function NzTableComponent_ng_template_6_div_0_ng_template_3_Template(rf, ctx) { }
function NzTableComponent_ng_template_6_div_0_thead_4_ng_template_1_Template(rf, ctx) { }
function NzTableComponent_ng_template_6_div_0_thead_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "thead", 19);
    i0.ɵɵtemplate(1, NzTableComponent_ng_template_6_div_0_thead_4_ng_template_1_Template, 0, 0, "ng-template", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2699 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r2699.nzTheadComponent == null ? null : ctx_r2699.nzTheadComponent.templateRef);
} }
function NzTableComponent_ng_template_6_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25, 26);
    i0.ɵɵelementStart(2, "table");
    i0.ɵɵtemplate(3, NzTableComponent_ng_template_6_div_0_ng_template_3_Template, 0, 0, "ng-template", 17);
    i0.ɵɵtemplate(4, NzTableComponent_ng_template_6_div_0_thead_4_Template, 2, 1, "thead", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2691 = i0.ɵɵnextContext(2);
    var _r2664 = i0.ɵɵreference(3);
    i0.ɵɵproperty("ngStyle", ctx_r2691.headerBottomStyle);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", ctx_r2691.nzScroll.x);
    i0.ɵɵclassProp("ant-table-fixed", ctx_r2691.nzScroll.x);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r2664);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2691.nzScroll.y);
} }
function NzTableComponent_ng_template_6_div_1_ng_template_3_Template(rf, ctx) { }
function NzTableComponent_ng_template_6_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 27, 28);
    i0.ɵɵelementStart(2, "table");
    i0.ɵɵtemplate(3, NzTableComponent_ng_template_6_div_1_ng_template_3_Template, 0, 0, "ng-template", 29);
    i0.ɵɵprojection(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2692 = i0.ɵɵnextContext(2);
    var _r2666 = i0.ɵɵreference(5);
    i0.ɵɵstyleProp("max-height", ctx_r2692.nzScroll.y)("overflow-y", ctx_r2692.nzScroll.y ? "scroll" : "")("overflow-x", ctx_r2692.nzScroll.x ? "auto" : "");
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", ctx_r2692.nzScroll.x);
    i0.ɵɵclassProp("ant-table-fixed", ctx_r2692.nzScroll.x);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r2692.nzVirtualScroll)("ngTemplateOutlet", _r2666);
} }
function NzTableComponent_ng_template_6_ng_template_2_ng_template_2_Template(rf, ctx) { }
function NzTableComponent_ng_template_6_ng_template_2_ng_container_4_ng_template_1_Template(rf, ctx) { }
var _c4 = function (a0, a1) { return { $implicit: a0, index: a1 }; };
function NzTableComponent_ng_template_6_ng_template_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzTableComponent_ng_template_6_ng_template_2_ng_container_4_ng_template_1_Template, 0, 0, "ng-template", 32);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var item_r2705 = ctx.$implicit;
    var i_r2706 = ctx.index;
    var ctx_r2704 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r2704.nzVirtualScrollDirective == null ? null : ctx_r2704.nzVirtualScrollDirective.templateRef)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c4, item_r2705, i_r2706));
} }
function NzTableComponent_ng_template_6_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 30);
    i0.ɵɵelementStart(1, "table");
    i0.ɵɵtemplate(2, NzTableComponent_ng_template_6_ng_template_2_ng_template_2_Template, 0, 0, "ng-template", 29);
    i0.ɵɵelementStart(3, "tbody");
    i0.ɵɵtemplate(4, NzTableComponent_ng_template_6_ng_template_2_ng_container_4_Template, 2, 5, "ng-container", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2694 = i0.ɵɵnextContext(2);
    var _r2666 = i0.ɵɵreference(5);
    i0.ɵɵstyleProp("height", ctx_r2694.nzScroll.y);
    i0.ɵɵproperty("hidden", !ctx_r2694.data.length)("itemSize", ctx_r2694.nzVirtualItemSize)("maxBufferPx", ctx_r2694.nzVirtualMaxBufferPx)("minBufferPx", ctx_r2694.nzVirtualMinBufferPx);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("width", ctx_r2694.nzScroll.x);
    i0.ɵɵclassProp("ant-table-fixed", ctx_r2694.nzScroll.x);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2694.nzVirtualScroll)("ngTemplateOutlet", _r2666);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("cdkVirtualForOf", ctx_r2694.data)("cdkVirtualForTrackBy", ctx_r2694.nzVirtualForTrackBy);
} }
function NzTableComponent_ng_template_6_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 33);
    i0.ɵɵelement(1, "nz-embed-empty", 34);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2695 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzComponentName", "table")("specificContent", ctx_r2695.nzNoResult);
} }
function NzTableComponent_ng_template_6_div_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r2708 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r2708.nzFooter);
} }
function NzTableComponent_ng_template_6_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 35);
    i0.ɵɵtemplate(1, NzTableComponent_ng_template_6_div_5_ng_container_1_Template, 2, 1, "ng-container", 36);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2696 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r2696.nzFooter);
} }
function NzTableComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NzTableComponent_ng_template_6_div_0_Template, 5, 5, "div", 20);
    i0.ɵɵtemplate(1, NzTableComponent_ng_template_6_div_1_Template, 5, 7, "div", 21);
    i0.ɵɵtemplate(2, NzTableComponent_ng_template_6_ng_template_2_Template, 5, 11, "ng-template", null, 22, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(4, NzTableComponent_ng_template_6_div_4_Template, 2, 2, "div", 23);
    i0.ɵɵtemplate(5, NzTableComponent_ng_template_6_div_5_Template, 2, 1, "div", 24);
} if (rf & 2) {
    var _r2693 = i0.ɵɵreference(3);
    var ctx_r2669 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r2669.nzScroll.y);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r2669.nzVirtualScroll)("ngIfElse", _r2693);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r2669.data.length === 0 && !ctx_r2669.nzLoading && !ctx_r2669.nzTemplateMode);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2669.nzFooter);
} }
function NzTableComponent_ng_template_8_nz_pagination_0_Template(rf, ctx) { if (rf & 1) {
    var _r2711 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nz-pagination", 38);
    i0.ɵɵlistener("nzPageSizeChange", function NzTableComponent_ng_template_8_nz_pagination_0_Template_nz_pagination_nzPageSizeChange_0_listener($event) { i0.ɵɵrestoreView(_r2711); var ctx_r2710 = i0.ɵɵnextContext(2); return ctx_r2710.emitPageSizeOrIndex($event, ctx_r2710.nzPageIndex); })("nzPageIndexChange", function NzTableComponent_ng_template_8_nz_pagination_0_Template_nz_pagination_nzPageIndexChange_0_listener($event) { i0.ɵɵrestoreView(_r2711); var ctx_r2712 = i0.ɵɵnextContext(2); return ctx_r2712.emitPageSizeOrIndex(ctx_r2712.nzPageSize, $event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2709 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("nzInTable", true)("nzShowSizeChanger", ctx_r2709.nzShowSizeChanger)("nzPageSizeOptions", ctx_r2709.nzPageSizeOptions)("nzItemRender", ctx_r2709.itemRender)("nzShowQuickJumper", ctx_r2709.nzShowQuickJumper)("nzHideOnSinglePage", ctx_r2709.nzHideOnSinglePage)("nzShowTotal", ctx_r2709.nzShowTotal)("nzSize", ctx_r2709.nzSize === "default" ? "default" : "small")("nzPageSize", ctx_r2709.nzPageSize)("nzTotal", ctx_r2709.nzTotal)("nzSimple", ctx_r2709.nzSimple)("nzPageIndex", ctx_r2709.nzPageIndex);
} }
function NzTableComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NzTableComponent_ng_template_8_nz_pagination_0_Template, 1, 12, "nz-pagination", 37);
} if (rf & 2) {
    var ctx_r2671 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r2671.nzShowPagination && ctx_r2671.data.length);
} }
function NzTableComponent_ng_container_11_ng_template_1_Template(rf, ctx) { }
function NzTableComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzTableComponent_ng_container_11_ng_template_1_Template, 0, 0, "ng-template", 17);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    var _r2670 = i0.ɵɵreference(9);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r2670);
} }
function NzTableComponent_div_14_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r2714 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r2714.nzTitle);
} }
function NzTableComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 39);
    i0.ɵɵtemplate(1, NzTableComponent_div_14_ng_container_1_Template, 2, 1, "ng-container", 36);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2674 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r2674.nzTitle);
} }
function NzTableComponent_ng_container_16_ng_template_2_Template(rf, ctx) { }
function NzTableComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 40);
    i0.ɵɵtemplate(2, NzTableComponent_ng_container_16_ng_template_2_Template, 0, 0, "ng-template", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    var _r2668 = i0.ɵɵreference(7);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", _r2668);
} }
function NzTableComponent_ng_container_17_ng_template_1_Template(rf, ctx) { }
function NzTableComponent_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzTableComponent_ng_container_17_ng_template_1_Template, 0, 0, "ng-template", 17);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    var _r2670 = i0.ɵɵreference(9);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r2670);
} }
var _c5 = ["*"];
var NZ_CONFIG_COMPONENT_NAME = 'table';
var NzTableComponent = /** @class */ (function () {
    function NzTableComponent(nzConfigService, renderer, ngZone, cdr, i18n, platform, elementRef) {
        this.nzConfigService = nzConfigService;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.cdr = cdr;
        this.i18n = i18n;
        this.platform = platform;
        /** public data for ngFor tr */
        this.data = [];
        this.locale = {}; // tslint:disable-line:no-any
        this.lastScrollLeft = 0;
        this.headerBottomStyle = {};
        this.destroy$ = new Subject();
        this.nzPageSizeOptions = [10, 20, 30, 40, 50];
        this.nzVirtualScroll = false;
        this.nzVirtualItemSize = 0;
        this.nzVirtualMaxBufferPx = 200;
        this.nzVirtualMinBufferPx = 100;
        this.nzLoadingDelay = 0;
        this.nzTotal = 0;
        this.nzWidthConfig = [];
        this.nzPageIndex = 1;
        this.nzPageSize = 10;
        this.nzData = [];
        this.nzPaginationPosition = 'bottom';
        this.nzScroll = { x: null, y: null };
        this.nzFrontPagination = true;
        this.nzTemplateMode = false;
        this.nzShowPagination = true;
        this.nzLoading = false;
        this.nzPageSizeChange = new EventEmitter();
        this.nzPageIndexChange = new EventEmitter();
        /* tslint:disable-next-line:no-any */
        this.nzCurrentPageDataChange = new EventEmitter();
        renderer.addClass(elementRef.nativeElement, 'ant-table-wrapper');
    }
    Object.defineProperty(NzTableComponent.prototype, "itemRender", {
        get: function () {
            return this.nzItemRender || this.itemRenderChild;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTableComponent.prototype, "tableBodyNativeElement", {
        get: function () {
            return this.tableBodyElement && this.tableBodyElement.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTableComponent.prototype, "tableHeaderNativeElement", {
        get: function () {
            return this.tableHeaderElement && this.tableHeaderElement.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTableComponent.prototype, "cdkVirtualScrollNativeElement", {
        get: function () {
            return this.cdkVirtualScrollElement && this.cdkVirtualScrollElement.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTableComponent.prototype, "mixTableBodyNativeElement", {
        get: function () {
            return this.tableBodyNativeElement || this.cdkVirtualScrollNativeElement;
        },
        enumerable: true,
        configurable: true
    });
    NzTableComponent.prototype.emitPageSizeOrIndex = function (size, index) {
        if (this.nzPageSize !== size || this.nzPageIndex !== index) {
            if (this.nzPageSize !== size) {
                this.nzPageSize = size;
                this.nzPageSizeChange.emit(this.nzPageSize);
            }
            if (this.nzPageIndex !== index) {
                this.nzPageIndex = index;
                this.nzPageIndexChange.emit(this.nzPageIndex);
            }
            this.updateFrontPaginationDataIfNeeded(this.nzPageSize !== size);
        }
    };
    NzTableComponent.prototype.syncScrollTable = function (e) {
        if (e.currentTarget === e.target) {
            var target = e.target;
            if (target.scrollLeft !== this.lastScrollLeft && this.nzScroll && this.nzScroll.x) {
                if (target === this.mixTableBodyNativeElement && this.tableHeaderNativeElement) {
                    this.tableHeaderNativeElement.scrollLeft = target.scrollLeft;
                }
                else if (target === this.tableHeaderNativeElement && this.mixTableBodyNativeElement) {
                    this.mixTableBodyNativeElement.scrollLeft = target.scrollLeft;
                }
                this.setScrollPositionClassName();
            }
            this.lastScrollLeft = target.scrollLeft;
        }
    };
    NzTableComponent.prototype.setScrollPositionClassName = function () {
        if (this.mixTableBodyNativeElement && this.nzScroll && this.nzScroll.x) {
            if (this.mixTableBodyNativeElement.scrollWidth === this.mixTableBodyNativeElement.clientWidth &&
                this.mixTableBodyNativeElement.scrollWidth !== 0) {
                this.setScrollName();
            }
            else if (this.mixTableBodyNativeElement.scrollLeft === 0) {
                this.setScrollName('left');
            }
            else if (this.mixTableBodyNativeElement.scrollWidth ===
                this.mixTableBodyNativeElement.scrollLeft + this.mixTableBodyNativeElement.clientWidth) {
                this.setScrollName('right');
            }
            else {
                this.setScrollName('middle');
            }
        }
    };
    NzTableComponent.prototype.setScrollName = function (position) {
        var _this = this;
        var prefix = 'ant-table-scroll-position';
        var classList = ['left', 'right', 'middle'];
        classList.forEach(function (name) {
            _this.renderer.removeClass(_this.tableMainElement.nativeElement, prefix + "-" + name);
        });
        if (position) {
            this.renderer.addClass(this.tableMainElement.nativeElement, prefix + "-" + position);
        }
    };
    NzTableComponent.prototype.fitScrollBar = function () {
        if (this.nzScroll.y) {
            var scrollbarWidth = measureScrollbar('vertical');
            var scrollbarWidthOfHeader = measureScrollbar('horizontal', 'ant-table');
            // Add negative margin bottom for scroll bar overflow bug
            if (scrollbarWidthOfHeader > 0) {
                this.headerBottomStyle = {
                    marginBottom: "-" + scrollbarWidthOfHeader + "px",
                    paddingBottom: '0px',
                    overflowX: 'scroll',
                    overflowY: "" + (scrollbarWidth === 0 ? 'hidden' : 'scroll')
                };
                this.cdr.markForCheck();
            }
        }
    };
    NzTableComponent.prototype.updateFrontPaginationDataIfNeeded = function (isPageSizeOrDataChange) {
        var _this = this;
        if (isPageSizeOrDataChange === void 0) { isPageSizeOrDataChange = false; }
        var data = this.nzData || [];
        if (this.nzFrontPagination) {
            this.nzTotal = data.length;
            if (isPageSizeOrDataChange) {
                var maxPageIndex = Math.ceil(data.length / this.nzPageSize) || 1;
                var pageIndex_1 = this.nzPageIndex > maxPageIndex ? maxPageIndex : this.nzPageIndex;
                if (pageIndex_1 !== this.nzPageIndex) {
                    this.nzPageIndex = pageIndex_1;
                    Promise.resolve().then(function () { return _this.nzPageIndexChange.emit(pageIndex_1); });
                }
            }
            data = data.slice((this.nzPageIndex - 1) * this.nzPageSize, this.nzPageIndex * this.nzPageSize);
        }
        this.data = __spread(data);
        this.nzCurrentPageDataChange.emit(this.data);
    };
    NzTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(function () {
            _this.locale = _this.i18n.getLocaleData('Table');
            _this.cdr.markForCheck();
        });
    };
    NzTableComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.nzScroll) {
            if (changes.nzScroll.currentValue) {
                this.nzScroll = changes.nzScroll.currentValue;
            }
            else {
                this.nzScroll = { x: null, y: null };
            }
            this.fitScrollBar();
            this.setScrollPositionClassName();
        }
        if (changes.nzData) {
            if (this.platform.isBrowser) {
                setTimeout(function () { return _this.setScrollPositionClassName(); });
            }
        }
        if (changes.nzPageIndex || changes.nzPageSize || changes.nzFrontPagination || changes.nzData) {
            this.updateFrontPaginationDataIfNeeded(!!(changes.nzPageSize || changes.nzData));
        }
    };
    NzTableComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (!this.platform.isBrowser) {
            return;
        }
        setTimeout(function () { return _this.setScrollPositionClassName(); });
        this.ngZone.runOutsideAngular(function () {
            merge(_this.tableHeaderNativeElement ? fromEvent(_this.tableHeaderNativeElement, 'scroll') : EMPTY, _this.mixTableBodyNativeElement ? fromEvent(_this.mixTableBodyNativeElement, 'scroll') : EMPTY)
                .pipe(takeUntil(_this.destroy$))
                .subscribe(function (data) {
                _this.syncScrollTable(data);
            });
            fromEvent(window, 'resize')
                .pipe(startWith(true), takeUntil(_this.destroy$))
                .subscribe(function () {
                _this.fitScrollBar();
                _this.setScrollPositionClassName();
            });
        });
    };
    NzTableComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.listOfNzThComponent.changes
            .pipe(startWith(true), flatMap(function () { return merge.apply(void 0, __spread([_this.listOfNzThComponent.changes], _this.listOfNzThComponent.map(function (th) { return th.nzWidthChange$; }))); }), takeUntil(this.destroy$))
            .subscribe(function () {
            _this.cdr.markForCheck();
        });
    };
    NzTableComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /** @nocollapse */ NzTableComponent.ɵfac = function NzTableComponent_Factory(t) { return new (t || NzTableComponent)(i0.ɵɵdirectiveInject(i1.NzConfigService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.NzI18nService), i0.ɵɵdirectiveInject(i3.Platform), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    /** @nocollapse */ NzTableComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzTableComponent, selectors: [["nz-table"]], contentQueries: function NzTableComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, NzVirtualScrollDirective, true);
            i0.ɵɵcontentQuery(dirIndex, NzThComponent, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.nzVirtualScrollDirective = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listOfNzThComponent = _t);
        } }, viewQuery: function NzTableComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, true, ElementRef);
            i0.ɵɵviewQuery(_c1, true, ElementRef);
            i0.ɵɵviewQuery(_c2, true, ElementRef);
            i0.ɵɵviewQuery(CdkVirtualScrollViewport, true, ElementRef);
            i0.ɵɵviewQuery(CdkVirtualScrollViewport, true, CdkVirtualScrollViewport);
            i0.ɵɵstaticViewQuery(_c3, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tableHeaderElement = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tableBodyElement = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tableMainElement = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.cdkVirtualScrollElement = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.cdkVirtualScrollViewport = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.itemRenderChild = _t.first);
        } }, hostBindings: function NzTableComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            i0.ɵɵallocHostVars(1);
        } if (rf & 2) {
            i0.ɵɵclassProp("ant-table-empty", ctx.data.length === 0 && !ctx.nzTemplateMode);
        } }, inputs: { nzSize: "nzSize", nzShowTotal: "nzShowTotal", nzPageSizeOptions: "nzPageSizeOptions", nzVirtualScroll: "nzVirtualScroll", nzVirtualItemSize: "nzVirtualItemSize", nzVirtualMaxBufferPx: "nzVirtualMaxBufferPx", nzVirtualMinBufferPx: "nzVirtualMinBufferPx", nzVirtualForTrackBy: "nzVirtualForTrackBy", nzLoadingDelay: "nzLoadingDelay", nzLoadingIndicator: "nzLoadingIndicator", nzTotal: "nzTotal", nzTitle: "nzTitle", nzFooter: "nzFooter", nzNoResult: "nzNoResult", nzWidthConfig: "nzWidthConfig", nzPageIndex: "nzPageIndex", nzPageSize: "nzPageSize", nzData: "nzData", nzPaginationPosition: "nzPaginationPosition", nzScroll: "nzScroll", nzItemRender: "nzItemRender", nzFrontPagination: "nzFrontPagination", nzTemplateMode: "nzTemplateMode", nzBordered: "nzBordered", nzShowPagination: "nzShowPagination", nzLoading: "nzLoading", nzShowSizeChanger: "nzShowSizeChanger", nzHideOnSinglePage: "nzHideOnSinglePage", nzShowQuickJumper: "nzShowQuickJumper", nzSimple: "nzSimple" }, outputs: { nzPageSizeChange: "nzPageSizeChange", nzPageIndexChange: "nzPageIndexChange", nzCurrentPageDataChange: "nzCurrentPageDataChange" }, exportAs: ["nzTable"], features: [i0.ɵɵNgOnChangesFeature()], ngContentSelectors: _c5, decls: 18, vars: 13, consts: [["renderItemTemplate", ""], ["colGroupTemplate", ""], ["headerTemplate", ""], ["tableInnerTemplate", ""], ["paginationTemplate", ""], [3, "nzDelay", "nzSpinning", "nzIndicator"], [4, "ngIf"], [1, "ant-table"], ["tableMainElement", ""], ["class", "ant-table-title", 4, "ngIf"], [1, "ant-table-content"], [4, "ngIf", "ngIfElse"], ["class", "ant-pagination-item-link", 4, "ngIf"], [1, "ant-pagination-item-link"], ["nz-icon", "", "nzType", "left"], ["nz-icon", "", "nzType", "right"], [3, "width", "minWidth", 4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet"], ["class", "ant-table-thead", 4, "ngIf"], [1, "ant-table-thead"], ["class", "ant-table-header ant-table-hide-scrollbar", 3, "ngStyle", 4, "ngIf"], ["class", "ant-table-body", 3, "maxHeight", "overflow-y", "overflow-x", 4, "ngIf", "ngIfElse"], ["scrollViewTpl", ""], ["class", "ant-table-placeholder", 4, "ngIf"], ["class", "ant-table-footer", 4, "ngIf"], [1, "ant-table-header", "ant-table-hide-scrollbar", 3, "ngStyle"], ["tableHeaderElement", ""], [1, "ant-table-body"], ["tableBodyElement", ""], [3, "ngIf", "ngTemplateOutlet"], [1, "ant-table-body", 3, "hidden", "itemSize", "maxBufferPx", "minBufferPx"], [4, "cdkVirtualFor", "cdkVirtualForOf", "cdkVirtualForTrackBy"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-table-placeholder"], [3, "nzComponentName", "specificContent"], [1, "ant-table-footer"], [4, "nzStringTemplateOutlet"], [3, "nzInTable", "nzShowSizeChanger", "nzPageSizeOptions", "nzItemRender", "nzShowQuickJumper", "nzHideOnSinglePage", "nzShowTotal", "nzSize", "nzPageSize", "nzTotal", "nzSimple", "nzPageIndex", "nzPageSizeChange", "nzPageIndexChange", 4, "ngIf"], [3, "nzInTable", "nzShowSizeChanger", "nzPageSizeOptions", "nzItemRender", "nzShowQuickJumper", "nzHideOnSinglePage", "nzShowTotal", "nzSize", "nzPageSize", "nzTotal", "nzSimple", "nzPageIndex", "nzPageSizeChange", "nzPageIndexChange"], [1, "ant-table-title"], [1, "ant-table-scroll"]], template: function NzTableComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, NzTableComponent_ng_template_0_Template, 3, 3, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(2, NzTableComponent_ng_template_2_Template, 3, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(4, NzTableComponent_ng_template_4_Template, 2, 2, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(6, NzTableComponent_ng_template_6_Template, 6, 5, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(8, NzTableComponent_ng_template_8_Template, 1, 1, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementStart(10, "nz-spin", 5);
            i0.ɵɵtemplate(11, NzTableComponent_ng_container_11_Template, 2, 1, "ng-container", 6);
            i0.ɵɵelementStart(12, "div", 7, 8);
            i0.ɵɵtemplate(14, NzTableComponent_div_14_Template, 2, 1, "div", 9);
            i0.ɵɵelementStart(15, "div", 10);
            i0.ɵɵtemplate(16, NzTableComponent_ng_container_16_Template, 3, 1, "ng-container", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(17, NzTableComponent_ng_container_17_Template, 2, 1, "ng-container", 6);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r2668 = i0.ɵɵreference(7);
            i0.ɵɵadvance(10);
            i0.ɵɵproperty("nzDelay", ctx.nzLoadingDelay)("nzSpinning", ctx.nzLoading)("nzIndicator", ctx.nzLoadingIndicator);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.nzPaginationPosition === "both" || ctx.nzPaginationPosition === "top");
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("ant-table-fixed-header", ctx.nzScroll.x || ctx.nzScroll.y)("ant-table-bordered", ctx.nzBordered)("ant-table-default", ctx.nzSize === "default")("ant-table-middle", ctx.nzSize === "middle")("ant-table-small", ctx.nzSize === "small");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.nzTitle);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.nzScroll.x || ctx.nzScroll.y)("ngIfElse", _r2668);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.nzPaginationPosition === "both" || ctx.nzPaginationPosition === "bottom");
        } }, styles: ["\n      nz-table {\n        display: block;\n      }\n\n      cdk-virtual-scroll-viewport.ant-table-body {\n        overflow-y: scroll;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default'),
        __metadata("design:type", String)
    ], NzTableComponent.prototype, "nzSize", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTableComponent.prototype, "nzVirtualScroll", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], NzTableComponent.prototype, "nzVirtualItemSize", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], NzTableComponent.prototype, "nzVirtualMaxBufferPx", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], NzTableComponent.prototype, "nzVirtualMinBufferPx", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTableComponent.prototype, "nzFrontPagination", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTableComponent.prototype, "nzTemplateMode", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzTableComponent.prototype, "nzBordered", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTableComponent.prototype, "nzShowPagination", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTableComponent.prototype, "nzLoading", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzTableComponent.prototype, "nzShowSizeChanger", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzTableComponent.prototype, "nzHideOnSinglePage", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzTableComponent.prototype, "nzShowQuickJumper", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzTableComponent.prototype, "nzSimple", void 0);
    return NzTableComponent;
}());
export { NzTableComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzTableComponent, [{
        type: Component,
        args: [{
                selector: 'nz-table',
                exportAs: 'nzTable',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                templateUrl: './nz-table.component.html',
                host: {
                    '[class.ant-table-empty]': 'data.length === 0 && !nzTemplateMode'
                },
                styles: [
                    "\n      nz-table {\n        display: block;\n      }\n\n      cdk-virtual-scroll-viewport.ant-table-body {\n        overflow-y: scroll;\n      }\n    "
                ]
            }]
    }], function () { return [{ type: i1.NzConfigService }, { type: i0.Renderer2 }, { type: i0.NgZone }, { type: i0.ChangeDetectorRef }, { type: i2.NzI18nService }, { type: i3.Platform }, { type: i0.ElementRef }]; }, { listOfNzThComponent: [{
            type: ContentChildren,
            args: [NzThComponent, { descendants: true }]
        }], tableHeaderElement: [{
            type: ViewChild,
            args: ['tableHeaderElement', { static: false, read: ElementRef }]
        }], tableBodyElement: [{
            type: ViewChild,
            args: ['tableBodyElement', { static: false, read: ElementRef }]
        }], tableMainElement: [{
            type: ViewChild,
            args: ['tableMainElement', { static: false, read: ElementRef }]
        }], cdkVirtualScrollElement: [{
            type: ViewChild,
            args: [CdkVirtualScrollViewport, { static: false, read: ElementRef }]
        }], cdkVirtualScrollViewport: [{
            type: ViewChild,
            args: [CdkVirtualScrollViewport, { static: false, read: CdkVirtualScrollViewport }]
        }], nzVirtualScrollDirective: [{
            type: ContentChild,
            args: [NzVirtualScrollDirective, { static: false }]
        }], nzSize: [{
            type: Input
        }], nzShowTotal: [{
            type: Input
        }], nzPageSizeOptions: [{
            type: Input
        }], nzVirtualScroll: [{
            type: Input
        }], nzVirtualItemSize: [{
            type: Input
        }], nzVirtualMaxBufferPx: [{
            type: Input
        }], nzVirtualMinBufferPx: [{
            type: Input
        }], nzVirtualForTrackBy: [{
            type: Input
        }], nzLoadingDelay: [{
            type: Input
        }], nzLoadingIndicator: [{
            type: Input
        }], nzTotal: [{
            type: Input
        }], nzTitle: [{
            type: Input
        }], nzFooter: [{
            type: Input
        }], nzNoResult: [{
            type: Input
        }], nzWidthConfig: [{
            type: Input
        }], nzPageIndex: [{
            type: Input
        }], nzPageSize: [{
            type: Input
        }], nzData: [{
            type: Input
        }], nzPaginationPosition: [{
            type: Input
        }], nzScroll: [{
            type: Input
        }], nzItemRender: [{
            type: Input
        }], itemRenderChild: [{
            type: ViewChild,
            args: ['renderItemTemplate', { static: true }]
        }], nzFrontPagination: [{
            type: Input
        }], nzTemplateMode: [{
            type: Input
        }], nzBordered: [{
            type: Input
        }], nzShowPagination: [{
            type: Input
        }], nzLoading: [{
            type: Input
        }], nzShowSizeChanger: [{
            type: Input
        }], nzHideOnSinglePage: [{
            type: Input
        }], nzShowQuickJumper: [{
            type: Input
        }], nzSimple: [{
            type: Input
        }], nzPageSizeChange: [{
            type: Output
        }], nzPageIndexChange: [{
            type: Output
        }], nzCurrentPageDataChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90YWJsZS8iLCJzb3VyY2VzIjpbIm56LXRhYmxlLmNvbXBvbmVudC50cyIsIm56LXRhYmxlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDbEUsT0FBTyxFQUdMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixlQUFlLEVBQ2YsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUlOLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUVULFdBQVcsRUFFWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDeEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFL0QsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFpQixVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM3SCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWxELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7Ozs7Ozs7O0lDMUN2RSw2QkFBMkQ7SUFBQSx3QkFBNkI7SUFBQSxpQkFBSTs7O0lBQzVGLDZCQUE0RDtJQUFBLHdCQUE4QjtJQUFBLGlCQUFJOzs7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U0FBUzttQkFBQyxvQkFBb0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O2tCQU1oRCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxNQUFNOztrQkFDTixNQUFNOztrQkFFTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7IENka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBUcmFja0J5RnVuY3Rpb24sXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEVNUFRZLCBmcm9tRXZlbnQsIG1lcmdlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZsYXRNYXAsIHN0YXJ0V2l0aCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciwgbWVhc3VyZVNjcm9sbGJhciwgTnpDb25maWdTZXJ2aWNlLCBOelNpemVNRFNUeXBlLCBXaXRoQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcbmltcG9ydCB7IFBhZ2luYXRpb25JdGVtUmVuZGVyQ29udGV4dCB9IGZyb20gJ25nLXpvcnJvLWFudGQvcGFnaW5hdGlvbic7XHJcblxyXG5pbXBvcnQgeyBOelRoQ29tcG9uZW50IH0gZnJvbSAnLi9uei10aC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOelRoZWFkQ29tcG9uZW50IH0gZnJvbSAnLi9uei10aGVhZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOelZpcnR1YWxTY3JvbGxEaXJlY3RpdmUgfSBmcm9tICcuL256LXZpcnR1YWwtc2Nyb2xsLmRpcmVjdGl2ZSc7XHJcblxyXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAndGFibGUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei10YWJsZScsXHJcbiAgZXhwb3J0QXM6ICduelRhYmxlJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei10YWJsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtdGFibGUtZW1wdHldJzogJ2RhdGEubGVuZ3RoID09PSAwICYmICFuelRlbXBsYXRlTW9kZSdcclxuICB9LFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBuei10YWJsZSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydC5hbnQtdGFibGUtYm9keSB7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tYW55XHJcbmV4cG9ydCBjbGFzcyBOelRhYmxlQ29tcG9uZW50PFQgPSBhbnk+IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgQWZ0ZXJDb250ZW50SW5pdCB7XHJcbiAgLyoqIHB1YmxpYyBkYXRhIGZvciBuZ0ZvciB0ciAqL1xyXG4gIGRhdGE6IFRbXSA9IFtdO1xyXG4gIGxvY2FsZTogYW55ID0ge307IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcbiAgbnpUaGVhZENvbXBvbmVudDogTnpUaGVhZENvbXBvbmVudDtcclxuICBsYXN0U2Nyb2xsTGVmdCA9IDA7XHJcbiAgaGVhZGVyQm90dG9tU3R5bGUgPSB7fTtcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBAQ29udGVudENoaWxkcmVuKE56VGhDb21wb25lbnQsIHsgZGVzY2VuZGFudHM6IHRydWUgfSkgbGlzdE9mTnpUaENvbXBvbmVudDogUXVlcnlMaXN0PE56VGhDb21wb25lbnQ+O1xyXG4gIEBWaWV3Q2hpbGQoJ3RhYmxlSGVhZGVyRWxlbWVudCcsIHsgc3RhdGljOiBmYWxzZSwgcmVhZDogRWxlbWVudFJlZiB9KSB0YWJsZUhlYWRlckVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgndGFibGVCb2R5RWxlbWVudCcsIHsgc3RhdGljOiBmYWxzZSwgcmVhZDogRWxlbWVudFJlZiB9KSB0YWJsZUJvZHlFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ3RhYmxlTWFpbkVsZW1lbnQnLCB7IHN0YXRpYzogZmFsc2UsIHJlYWQ6IEVsZW1lbnRSZWYgfSkgdGFibGVNYWluRWxlbWVudDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKENka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydCwgeyBzdGF0aWM6IGZhbHNlLCByZWFkOiBFbGVtZW50UmVmIH0pIGNka1ZpcnR1YWxTY3JvbGxFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoQ2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0LCB7IHN0YXRpYzogZmFsc2UsIHJlYWQ6IENka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydCB9KVxyXG4gIGNka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydDogQ2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0O1xyXG4gIEBDb250ZW50Q2hpbGQoTnpWaXJ0dWFsU2Nyb2xsRGlyZWN0aXZlLCB7IHN0YXRpYzogZmFsc2UgfSkgbnpWaXJ0dWFsU2Nyb2xsRGlyZWN0aXZlOiBOelZpcnR1YWxTY3JvbGxEaXJlY3RpdmU7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCAnZGVmYXVsdCcpIG56U2l6ZTogTnpTaXplTURTVHlwZTtcclxuICBASW5wdXQoKSBuelNob3dUb3RhbDogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IG51bWJlcjsgcmFuZ2U6IFtudW1iZXIsIG51bWJlcl0gfT47XHJcbiAgQElucHV0KCkgbnpQYWdlU2l6ZU9wdGlvbnMgPSBbMTAsIDIwLCAzMCwgNDAsIDUwXTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpWaXJ0dWFsU2Nyb2xsID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbnpWaXJ0dWFsSXRlbVNpemUgPSAwO1xyXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG56VmlydHVhbE1heEJ1ZmZlclB4ID0gMjAwO1xyXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG56VmlydHVhbE1pbkJ1ZmZlclB4ID0gMTAwO1xyXG4gIEBJbnB1dCgpIG56VmlydHVhbEZvclRyYWNrQnk6IFRyYWNrQnlGdW5jdGlvbjxUPiB8IHVuZGVmaW5lZDtcclxuICBASW5wdXQoKSBuekxvYWRpbmdEZWxheSA9IDA7XHJcbiAgQElucHV0KCkgbnpMb2FkaW5nSW5kaWNhdG9yOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuelRvdGFsID0gMDtcclxuICBASW5wdXQoKSBuelRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuekZvb3Rlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpOb1Jlc3VsdDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpXaWR0aENvbmZpZzogc3RyaW5nW10gPSBbXTtcclxuICBASW5wdXQoKSBuelBhZ2VJbmRleCA9IDE7XHJcbiAgQElucHV0KCkgbnpQYWdlU2l6ZSA9IDEwO1xyXG4gIEBJbnB1dCgpIG56RGF0YTogVFtdID0gW107XHJcbiAgQElucHV0KCkgbnpQYWdpbmF0aW9uUG9zaXRpb246ICd0b3AnIHwgJ2JvdHRvbScgfCAnYm90aCcgPSAnYm90dG9tJztcclxuICBASW5wdXQoKSBuelNjcm9sbDogeyB4Pzogc3RyaW5nIHwgbnVsbDsgeT86IHN0cmluZyB8IG51bGwgfSA9IHsgeDogbnVsbCwgeTogbnVsbCB9O1xyXG5cclxuICBASW5wdXQoKSBuekl0ZW1SZW5kZXI6IFRlbXBsYXRlUmVmPFBhZ2luYXRpb25JdGVtUmVuZGVyQ29udGV4dD47XHJcbiAgQFZpZXdDaGlsZCgncmVuZGVySXRlbVRlbXBsYXRlJywgeyBzdGF0aWM6IHRydWUgfSkgaXRlbVJlbmRlckNoaWxkOiBUZW1wbGF0ZVJlZjxQYWdpbmF0aW9uSXRlbVJlbmRlckNvbnRleHQ+O1xyXG5cclxuICBnZXQgaXRlbVJlbmRlcigpOiBUZW1wbGF0ZVJlZjxQYWdpbmF0aW9uSXRlbVJlbmRlckNvbnRleHQ+IHtcclxuICAgIHJldHVybiB0aGlzLm56SXRlbVJlbmRlciB8fCB0aGlzLml0ZW1SZW5kZXJDaGlsZDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekZyb250UGFnaW5hdGlvbiA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56VGVtcGxhdGVNb2RlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCBmYWxzZSkgQElucHV0Qm9vbGVhbigpIG56Qm9yZGVyZWQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd1BhZ2luYXRpb24gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekxvYWRpbmcgPSBmYWxzZTtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIGZhbHNlKSBASW5wdXRCb29sZWFuKCkgbnpTaG93U2l6ZUNoYW5nZXI6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCBmYWxzZSkgQElucHV0Qm9vbGVhbigpIG56SGlkZU9uU2luZ2xlUGFnZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIGZhbHNlKSBASW5wdXRCb29sZWFuKCkgbnpTaG93UXVpY2tKdW1wZXI6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCBmYWxzZSkgQElucHV0Qm9vbGVhbigpIG56U2ltcGxlOiBib29sZWFuO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelBhZ2VTaXplQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpQYWdlSW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDdXJyZW50UGFnZURhdGFDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnlbXT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGdldCB0YWJsZUJvZHlOYXRpdmVFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcclxuICAgIHJldHVybiB0aGlzLnRhYmxlQm9keUVsZW1lbnQgJiYgdGhpcy50YWJsZUJvZHlFbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBnZXQgdGFibGVIZWFkZXJOYXRpdmVFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcclxuICAgIHJldHVybiB0aGlzLnRhYmxlSGVhZGVyRWxlbWVudCAmJiB0aGlzLnRhYmxlSGVhZGVyRWxlbWVudC5uYXRpdmVFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNka1ZpcnR1YWxTY3JvbGxOYXRpdmVFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcclxuICAgIHJldHVybiB0aGlzLmNka1ZpcnR1YWxTY3JvbGxFbGVtZW50ICYmIHRoaXMuY2RrVmlydHVhbFNjcm9sbEVsZW1lbnQubmF0aXZlRWxlbWVudDtcclxuICB9XHJcblxyXG4gIGdldCBtaXhUYWJsZUJvZHlOYXRpdmVFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcclxuICAgIHJldHVybiB0aGlzLnRhYmxlQm9keU5hdGl2ZUVsZW1lbnQgfHwgdGhpcy5jZGtWaXJ0dWFsU2Nyb2xsTmF0aXZlRWxlbWVudDtcclxuICB9XHJcblxyXG4gIGVtaXRQYWdlU2l6ZU9ySW5kZXgoc2l6ZTogbnVtYmVyLCBpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uelBhZ2VTaXplICE9PSBzaXplIHx8IHRoaXMubnpQYWdlSW5kZXggIT09IGluZGV4KSB7XHJcbiAgICAgIGlmICh0aGlzLm56UGFnZVNpemUgIT09IHNpemUpIHtcclxuICAgICAgICB0aGlzLm56UGFnZVNpemUgPSBzaXplO1xyXG4gICAgICAgIHRoaXMubnpQYWdlU2l6ZUNoYW5nZS5lbWl0KHRoaXMubnpQYWdlU2l6ZSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMubnpQYWdlSW5kZXggIT09IGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5uelBhZ2VJbmRleCA9IGluZGV4O1xyXG4gICAgICAgIHRoaXMubnpQYWdlSW5kZXhDaGFuZ2UuZW1pdCh0aGlzLm56UGFnZUluZGV4KTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnVwZGF0ZUZyb250UGFnaW5hdGlvbkRhdGFJZk5lZWRlZCh0aGlzLm56UGFnZVNpemUgIT09IHNpemUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3luY1Njcm9sbFRhYmxlKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChlLmN1cnJlbnRUYXJnZXQgPT09IGUudGFyZ2V0KSB7XHJcbiAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICBpZiAodGFyZ2V0LnNjcm9sbExlZnQgIT09IHRoaXMubGFzdFNjcm9sbExlZnQgJiYgdGhpcy5uelNjcm9sbCAmJiB0aGlzLm56U2Nyb2xsLngpIHtcclxuICAgICAgICBpZiAodGFyZ2V0ID09PSB0aGlzLm1peFRhYmxlQm9keU5hdGl2ZUVsZW1lbnQgJiYgdGhpcy50YWJsZUhlYWRlck5hdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgICAgIHRoaXMudGFibGVIZWFkZXJOYXRpdmVFbGVtZW50LnNjcm9sbExlZnQgPSB0YXJnZXQuc2Nyb2xsTGVmdDtcclxuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldCA9PT0gdGhpcy50YWJsZUhlYWRlck5hdGl2ZUVsZW1lbnQgJiYgdGhpcy5taXhUYWJsZUJvZHlOYXRpdmVFbGVtZW50KSB7XHJcbiAgICAgICAgICB0aGlzLm1peFRhYmxlQm9keU5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdCA9IHRhcmdldC5zY3JvbGxMZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFNjcm9sbFBvc2l0aW9uQ2xhc3NOYW1lKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5sYXN0U2Nyb2xsTGVmdCA9IHRhcmdldC5zY3JvbGxMZWZ0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0U2Nyb2xsUG9zaXRpb25DbGFzc05hbWUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5taXhUYWJsZUJvZHlOYXRpdmVFbGVtZW50ICYmIHRoaXMubnpTY3JvbGwgJiYgdGhpcy5uelNjcm9sbC54KSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLm1peFRhYmxlQm9keU5hdGl2ZUVsZW1lbnQuc2Nyb2xsV2lkdGggPT09IHRoaXMubWl4VGFibGVCb2R5TmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCAmJlxyXG4gICAgICAgIHRoaXMubWl4VGFibGVCb2R5TmF0aXZlRWxlbWVudC5zY3JvbGxXaWR0aCAhPT0gMFxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLnNldFNjcm9sbE5hbWUoKTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLm1peFRhYmxlQm9keU5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdCA9PT0gMCkge1xyXG4gICAgICAgIHRoaXMuc2V0U2Nyb2xsTmFtZSgnbGVmdCcpO1xyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIHRoaXMubWl4VGFibGVCb2R5TmF0aXZlRWxlbWVudC5zY3JvbGxXaWR0aCA9PT1cclxuICAgICAgICB0aGlzLm1peFRhYmxlQm9keU5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdCArIHRoaXMubWl4VGFibGVCb2R5TmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aFxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLnNldFNjcm9sbE5hbWUoJ3JpZ2h0Jyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZXRTY3JvbGxOYW1lKCdtaWRkbGUnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0U2Nyb2xsTmFtZShwb3NpdGlvbj86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3QgcHJlZml4ID0gJ2FudC10YWJsZS1zY3JvbGwtcG9zaXRpb24nO1xyXG4gICAgY29uc3QgY2xhc3NMaXN0ID0gWydsZWZ0JywgJ3JpZ2h0JywgJ21pZGRsZSddO1xyXG4gICAgY2xhc3NMaXN0LmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy50YWJsZU1haW5FbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIGAke3ByZWZpeH0tJHtuYW1lfWApO1xyXG4gICAgfSk7XHJcbiAgICBpZiAocG9zaXRpb24pIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnRhYmxlTWFpbkVsZW1lbnQubmF0aXZlRWxlbWVudCwgYCR7cHJlZml4fS0ke3Bvc2l0aW9ufWApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZml0U2Nyb2xsQmFyKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpTY3JvbGwueSkge1xyXG4gICAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IG1lYXN1cmVTY3JvbGxiYXIoJ3ZlcnRpY2FsJyk7XHJcbiAgICAgIGNvbnN0IHNjcm9sbGJhcldpZHRoT2ZIZWFkZXIgPSBtZWFzdXJlU2Nyb2xsYmFyKCdob3Jpem9udGFsJywgJ2FudC10YWJsZScpO1xyXG4gICAgICAvLyBBZGQgbmVnYXRpdmUgbWFyZ2luIGJvdHRvbSBmb3Igc2Nyb2xsIGJhciBvdmVyZmxvdyBidWdcclxuICAgICAgaWYgKHNjcm9sbGJhcldpZHRoT2ZIZWFkZXIgPiAwKSB7XHJcbiAgICAgICAgdGhpcy5oZWFkZXJCb3R0b21TdHlsZSA9IHtcclxuICAgICAgICAgIG1hcmdpbkJvdHRvbTogYC0ke3Njcm9sbGJhcldpZHRoT2ZIZWFkZXJ9cHhgLFxyXG4gICAgICAgICAgcGFkZGluZ0JvdHRvbTogJzBweCcsXHJcbiAgICAgICAgICBvdmVyZmxvd1g6ICdzY3JvbGwnLFxyXG4gICAgICAgICAgb3ZlcmZsb3dZOiBgJHtzY3JvbGxiYXJXaWR0aCA9PT0gMCA/ICdoaWRkZW4nIDogJ3Njcm9sbCd9YFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZUZyb250UGFnaW5hdGlvbkRhdGFJZk5lZWRlZChpc1BhZ2VTaXplT3JEYXRhQ2hhbmdlOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgIGxldCBkYXRhID0gdGhpcy5uekRhdGEgfHwgW107XHJcbiAgICBpZiAodGhpcy5uekZyb250UGFnaW5hdGlvbikge1xyXG4gICAgICB0aGlzLm56VG90YWwgPSBkYXRhLmxlbmd0aDtcclxuICAgICAgaWYgKGlzUGFnZVNpemVPckRhdGFDaGFuZ2UpIHtcclxuICAgICAgICBjb25zdCBtYXhQYWdlSW5kZXggPSBNYXRoLmNlaWwoZGF0YS5sZW5ndGggLyB0aGlzLm56UGFnZVNpemUpIHx8IDE7XHJcbiAgICAgICAgY29uc3QgcGFnZUluZGV4ID0gdGhpcy5uelBhZ2VJbmRleCA+IG1heFBhZ2VJbmRleCA/IG1heFBhZ2VJbmRleCA6IHRoaXMubnpQYWdlSW5kZXg7XHJcbiAgICAgICAgaWYgKHBhZ2VJbmRleCAhPT0gdGhpcy5uelBhZ2VJbmRleCkge1xyXG4gICAgICAgICAgdGhpcy5uelBhZ2VJbmRleCA9IHBhZ2VJbmRleDtcclxuICAgICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy5uelBhZ2VJbmRleENoYW5nZS5lbWl0KHBhZ2VJbmRleCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBkYXRhID0gZGF0YS5zbGljZSgodGhpcy5uelBhZ2VJbmRleCAtIDEpICogdGhpcy5uelBhZ2VTaXplLCB0aGlzLm56UGFnZUluZGV4ICogdGhpcy5uelBhZ2VTaXplKTtcclxuICAgIH1cclxuICAgIHRoaXMuZGF0YSA9IFsuLi5kYXRhXTtcclxuICAgIHRoaXMubnpDdXJyZW50UGFnZURhdGFDaGFuZ2UuZW1pdCh0aGlzLmRhdGEpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sXHJcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmXHJcbiAgKSB7XHJcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtdGFibGUtd3JhcHBlcicpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXRMb2NhbGVEYXRhKCdUYWJsZScpO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMubnpTY3JvbGwpIHtcclxuICAgICAgaWYgKGNoYW5nZXMubnpTY3JvbGwuY3VycmVudFZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5uelNjcm9sbCA9IGNoYW5nZXMubnpTY3JvbGwuY3VycmVudFZhbHVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMubnpTY3JvbGwgPSB7IHg6IG51bGwsIHk6IG51bGwgfTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmZpdFNjcm9sbEJhcigpO1xyXG4gICAgICB0aGlzLnNldFNjcm9sbFBvc2l0aW9uQ2xhc3NOYW1lKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5uekRhdGEpIHtcclxuICAgICAgaWYgKHRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNldFNjcm9sbFBvc2l0aW9uQ2xhc3NOYW1lKCkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5uelBhZ2VJbmRleCB8fCBjaGFuZ2VzLm56UGFnZVNpemUgfHwgY2hhbmdlcy5uekZyb250UGFnaW5hdGlvbiB8fCBjaGFuZ2VzLm56RGF0YSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUZyb250UGFnaW5hdGlvbkRhdGFJZk5lZWRlZCghIShjaGFuZ2VzLm56UGFnZVNpemUgfHwgY2hhbmdlcy5uekRhdGEpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNldFNjcm9sbFBvc2l0aW9uQ2xhc3NOYW1lKCkpO1xyXG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICBtZXJnZTxNb3VzZUV2ZW50PihcclxuICAgICAgICB0aGlzLnRhYmxlSGVhZGVyTmF0aXZlRWxlbWVudCA/IGZyb21FdmVudDxNb3VzZUV2ZW50Pih0aGlzLnRhYmxlSGVhZGVyTmF0aXZlRWxlbWVudCwgJ3Njcm9sbCcpIDogRU1QVFksXHJcbiAgICAgICAgdGhpcy5taXhUYWJsZUJvZHlOYXRpdmVFbGVtZW50ID8gZnJvbUV2ZW50PE1vdXNlRXZlbnQ+KHRoaXMubWl4VGFibGVCb2R5TmF0aXZlRWxlbWVudCwgJ3Njcm9sbCcpIDogRU1QVFlcclxuICAgICAgKVxyXG4gICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnN5bmNTY3JvbGxUYWJsZShkYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgICAgZnJvbUV2ZW50PFVJRXZlbnQ+KHdpbmRvdywgJ3Jlc2l6ZScpXHJcbiAgICAgICAgLnBpcGUoc3RhcnRXaXRoKHRydWUpLCB0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmZpdFNjcm9sbEJhcigpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTY3JvbGxQb3NpdGlvbkNsYXNzTmFtZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmxpc3RPZk56VGhDb21wb25lbnQuY2hhbmdlc1xyXG4gICAgICAucGlwZShcclxuICAgICAgICBzdGFydFdpdGgodHJ1ZSksXHJcbiAgICAgICAgZmxhdE1hcCgoKSA9PiBtZXJnZSh0aGlzLmxpc3RPZk56VGhDb21wb25lbnQuY2hhbmdlcywgLi4udGhpcy5saXN0T2ZOelRoQ29tcG9uZW50Lm1hcCh0aCA9PiB0aC5ueldpZHRoQ2hhbmdlJCkpKSxcclxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG4iLCI8bmctdGVtcGxhdGUgI3JlbmRlckl0ZW1UZW1wbGF0ZSBsZXQtdHlwZSBsZXQtcGFnZT1cInBhZ2VcIj5cclxuICA8YSBjbGFzcz1cImFudC1wYWdpbmF0aW9uLWl0ZW0tbGlua1wiICpuZ0lmPVwidHlwZSA9PT0gJ3ByZSdcIj48aSBuei1pY29uIG56VHlwZT1cImxlZnRcIj48L2k+PC9hPlxyXG4gIDxhIGNsYXNzPVwiYW50LXBhZ2luYXRpb24taXRlbS1saW5rXCIgKm5nSWY9XCJ0eXBlID09PSAnbmV4dCdcIj48aSBuei1pY29uIG56VHlwZT1cInJpZ2h0XCI+PC9pPjwvYT5cclxuICA8YSAqbmdJZj1cInR5cGUgPT0gJ3BhZ2UnXCI+e3sgcGFnZSB9fTwvYT5cclxuPC9uZy10ZW1wbGF0ZT5cclxuPG5nLXRlbXBsYXRlICNjb2xHcm91cFRlbXBsYXRlPlxyXG4gIDxjb2xncm91cD5cclxuICAgIDxjb2wgW3N0eWxlLndpZHRoXT1cIndpZHRoXCIgW3N0eWxlLm1pbldpZHRoXT1cIndpZHRoXCIgKm5nRm9yPVwibGV0IHdpZHRoIG9mIG56V2lkdGhDb25maWdcIiAvPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIihueldpZHRoQ29uZmlnICYmICFueldpZHRoQ29uZmlnLmxlbmd0aCkgfHwgIW56V2lkdGhDb25maWdcIj5cclxuICAgICAgPGNvbFxyXG4gICAgICAgIFtzdHlsZS53aWR0aF09XCJ0aC5ueldpZHRoXCJcclxuICAgICAgICBbc3R5bGUubWluV2lkdGhdPVwidGgubnpXaWR0aFwiXHJcbiAgICAgICAgKm5nRm9yPVwibGV0IHRoIG9mIGxpc3RPZk56VGhDb21wb25lbnRcIlxyXG4gICAgICAvPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgPC9jb2xncm91cD5cclxuPC9uZy10ZW1wbGF0ZT5cclxuPG5nLXRlbXBsYXRlICNoZWFkZXJUZW1wbGF0ZT5cclxuICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29sR3JvdXBUZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XHJcbiAgPHRoZWFkIGNsYXNzPVwiYW50LXRhYmxlLXRoZWFkXCIgKm5nSWY9XCIhbnpTY3JvbGwueVwiPlxyXG4gICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIm56VGhlYWRDb21wb25lbnQ/LnRlbXBsYXRlUmVmXCI+PC9uZy10ZW1wbGF0ZT5cclxuICA8L3RoZWFkPlxyXG48L25nLXRlbXBsYXRlPlxyXG48bmctdGVtcGxhdGUgI3RhYmxlSW5uZXJUZW1wbGF0ZT5cclxuICA8ZGl2XHJcbiAgICAjdGFibGVIZWFkZXJFbGVtZW50XHJcbiAgICAqbmdJZj1cIm56U2Nyb2xsLnlcIlxyXG4gICAgW25nU3R5bGVdPVwiaGVhZGVyQm90dG9tU3R5bGVcIlxyXG4gICAgY2xhc3M9XCJhbnQtdGFibGUtaGVhZGVyIGFudC10YWJsZS1oaWRlLXNjcm9sbGJhclwiXHJcbiAgPlxyXG4gICAgPHRhYmxlIFtjbGFzcy5hbnQtdGFibGUtZml4ZWRdPVwibnpTY3JvbGwueFwiIFtzdHlsZS53aWR0aF09XCJuelNjcm9sbC54XCI+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJjb2xHcm91cFRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgPHRoZWFkIGNsYXNzPVwiYW50LXRhYmxlLXRoZWFkXCIgKm5nSWY9XCJuelNjcm9sbC55XCI+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIm56VGhlYWRDb21wb25lbnQ/LnRlbXBsYXRlUmVmXCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgPC90aGVhZD5cclxuICAgIDwvdGFibGU+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdlxyXG4gICAgI3RhYmxlQm9keUVsZW1lbnRcclxuICAgICpuZ0lmPVwiIW56VmlydHVhbFNjcm9sbDsgZWxzZSBzY3JvbGxWaWV3VHBsXCJcclxuICAgIGNsYXNzPVwiYW50LXRhYmxlLWJvZHlcIlxyXG4gICAgW3N0eWxlLm1heEhlaWdodF09XCJuelNjcm9sbC55XCJcclxuICAgIFtzdHlsZS5vdmVyZmxvdy15XT1cIm56U2Nyb2xsLnkgPyAnc2Nyb2xsJyA6ICcnXCJcclxuICAgIFtzdHlsZS5vdmVyZmxvdy14XT1cIm56U2Nyb2xsLnggPyAnYXV0bycgOiAnJ1wiXHJcbiAgPlxyXG4gICAgPHRhYmxlIFtjbGFzcy5hbnQtdGFibGUtZml4ZWRdPVwibnpTY3JvbGwueFwiIFtzdHlsZS53aWR0aF09XCJuelNjcm9sbC54XCI+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdJZl09XCIhbnpWaXJ0dWFsU2Nyb2xsXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwiaGVhZGVyVGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxyXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8L3RhYmxlPlxyXG4gIDwvZGl2PlxyXG4gIDxuZy10ZW1wbGF0ZSAjc2Nyb2xsVmlld1RwbD5cclxuICAgIDxjZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnRcclxuICAgICAgY2xhc3M9XCJhbnQtdGFibGUtYm9keVwiXHJcbiAgICAgIFtoaWRkZW5dPVwiIWRhdGEubGVuZ3RoXCJcclxuICAgICAgW2l0ZW1TaXplXT1cIm56VmlydHVhbEl0ZW1TaXplXCJcclxuICAgICAgW21heEJ1ZmZlclB4XT1cIm56VmlydHVhbE1heEJ1ZmZlclB4XCJcclxuICAgICAgW21pbkJ1ZmZlclB4XT1cIm56VmlydHVhbE1pbkJ1ZmZlclB4XCJcclxuICAgICAgW3N0eWxlLmhlaWdodF09XCJuelNjcm9sbC55XCJcclxuICAgID5cclxuICAgICAgPHRhYmxlIFtjbGFzcy5hbnQtdGFibGUtZml4ZWRdPVwibnpTY3JvbGwueFwiIFtzdHlsZS53aWR0aF09XCJuelNjcm9sbC54XCI+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ0lmXT1cIm56VmlydHVhbFNjcm9sbFwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImhlYWRlclRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyXHJcbiAgICAgICAgICAgICpjZGtWaXJ0dWFsRm9yPVwibGV0IGl0ZW0gb2YgZGF0YTsgbGV0IGkgPSBpbmRleDsgdHJhY2tCeTogbnpWaXJ0dWFsRm9yVHJhY2tCeVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZVxyXG4gICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIm56VmlydHVhbFNjcm9sbERpcmVjdGl2ZT8udGVtcGxhdGVSZWZcIlxyXG4gICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogaXRlbSwgaW5kZXg6IGkgfVwiXHJcbiAgICAgICAgICAgID48L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC90YWJsZT5cclxuICAgIDwvY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0PlxyXG4gIDwvbmctdGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImFudC10YWJsZS1wbGFjZWhvbGRlclwiICpuZ0lmPVwiZGF0YS5sZW5ndGggPT09IDAgJiYgIW56TG9hZGluZyAmJiAhbnpUZW1wbGF0ZU1vZGVcIj5cclxuICAgIDxuei1lbWJlZC1lbXB0eSBbbnpDb21wb25lbnROYW1lXT1cIid0YWJsZSdcIiBbc3BlY2lmaWNDb250ZW50XT1cIm56Tm9SZXN1bHRcIj48L256LWVtYmVkLWVtcHR5PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJhbnQtdGFibGUtZm9vdGVyXCIgKm5nSWY9XCJuekZvb3RlclwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56Rm9vdGVyXCI+e3sgbnpGb290ZXIgfX08L25nLWNvbnRhaW5lcj5cclxuICA8L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuPG5nLXRlbXBsYXRlICNwYWdpbmF0aW9uVGVtcGxhdGU+XHJcbiAgPG56LXBhZ2luYXRpb25cclxuICAgICpuZ0lmPVwibnpTaG93UGFnaW5hdGlvbiAmJiBkYXRhLmxlbmd0aFwiXHJcbiAgICBbbnpJblRhYmxlXT1cInRydWVcIlxyXG4gICAgW256U2hvd1NpemVDaGFuZ2VyXT1cIm56U2hvd1NpemVDaGFuZ2VyXCJcclxuICAgIFtuelBhZ2VTaXplT3B0aW9uc109XCJuelBhZ2VTaXplT3B0aW9uc1wiXHJcbiAgICBbbnpJdGVtUmVuZGVyXT1cIml0ZW1SZW5kZXJcIlxyXG4gICAgW256U2hvd1F1aWNrSnVtcGVyXT1cIm56U2hvd1F1aWNrSnVtcGVyXCJcclxuICAgIFtuekhpZGVPblNpbmdsZVBhZ2VdPVwibnpIaWRlT25TaW5nbGVQYWdlXCJcclxuICAgIFtuelNob3dUb3RhbF09XCJuelNob3dUb3RhbFwiXHJcbiAgICBbbnpTaXplXT1cIm56U2l6ZSA9PT0gJ2RlZmF1bHQnID8gJ2RlZmF1bHQnIDogJ3NtYWxsJ1wiXHJcbiAgICBbbnpQYWdlU2l6ZV09XCJuelBhZ2VTaXplXCJcclxuICAgIFtuelRvdGFsXT1cIm56VG90YWxcIlxyXG4gICAgW256U2ltcGxlXT1cIm56U2ltcGxlXCJcclxuICAgIFtuelBhZ2VJbmRleF09XCJuelBhZ2VJbmRleFwiXHJcbiAgICAobnpQYWdlU2l6ZUNoYW5nZSk9XCJlbWl0UGFnZVNpemVPckluZGV4KCRldmVudCwgbnpQYWdlSW5kZXgpXCJcclxuICAgIChuelBhZ2VJbmRleENoYW5nZSk9XCJlbWl0UGFnZVNpemVPckluZGV4KG56UGFnZVNpemUsICRldmVudClcIlxyXG4gID5cclxuICA8L256LXBhZ2luYXRpb24+XHJcbjwvbmctdGVtcGxhdGU+XHJcbjxuei1zcGluIFtuekRlbGF5XT1cIm56TG9hZGluZ0RlbGF5XCIgW256U3Bpbm5pbmddPVwibnpMb2FkaW5nXCIgW256SW5kaWNhdG9yXT1cIm56TG9hZGluZ0luZGljYXRvclwiPlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJuelBhZ2luYXRpb25Qb3NpdGlvbiA9PT0gJ2JvdGgnIHx8IG56UGFnaW5hdGlvblBvc2l0aW9uID09PSAndG9wJ1wiPlxyXG4gICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInBhZ2luYXRpb25UZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbiAgPGRpdlxyXG4gICAgI3RhYmxlTWFpbkVsZW1lbnRcclxuICAgIGNsYXNzPVwiYW50LXRhYmxlXCJcclxuICAgIFtjbGFzcy5hbnQtdGFibGUtZml4ZWQtaGVhZGVyXT1cIm56U2Nyb2xsLnggfHwgbnpTY3JvbGwueVwiXHJcbiAgICBbY2xhc3MuYW50LXRhYmxlLWJvcmRlcmVkXT1cIm56Qm9yZGVyZWRcIlxyXG4gICAgW2NsYXNzLmFudC10YWJsZS1kZWZhdWx0XT1cIm56U2l6ZSA9PT0gJ2RlZmF1bHQnXCJcclxuICAgIFtjbGFzcy5hbnQtdGFibGUtbWlkZGxlXT1cIm56U2l6ZSA9PT0gJ21pZGRsZSdcIlxyXG4gICAgW2NsYXNzLmFudC10YWJsZS1zbWFsbF09XCJuelNpemUgPT09ICdzbWFsbCdcIlxyXG4gID5cclxuICAgIDxkaXYgY2xhc3M9XCJhbnQtdGFibGUtdGl0bGVcIiAqbmdJZj1cIm56VGl0bGVcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56VGl0bGVcIj57eyBuelRpdGxlIH19PC9uZy1jb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJhbnQtdGFibGUtY29udGVudFwiPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibnpTY3JvbGwueCB8fCBuelNjcm9sbC55OyBlbHNlIHRhYmxlSW5uZXJUZW1wbGF0ZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtdGFibGUtc2Nyb2xsXCI+XHJcbiAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwidGFibGVJbm5lclRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwibnpQYWdpbmF0aW9uUG9zaXRpb24gPT09ICdib3RoJyB8fCBuelBhZ2luYXRpb25Qb3NpdGlvbiA9PT0gJ2JvdHRvbSdcIj5cclxuICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJwYWdpbmF0aW9uVGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG48L256LXNwaW4+XHJcbiJdfQ==