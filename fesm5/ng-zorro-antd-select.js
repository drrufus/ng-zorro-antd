import { Component, ViewEncapsulation, ChangeDetectionStrategy, ViewChild, TemplateRef, Input, ContentChildren, Pipe, Injectable, ElementRef, ChangeDetectorRef, Renderer2, EventEmitter, NgZone, ViewChildren, Output, Host, Optional, forwardRef, Directive, NgModule } from '@angular/core';
import { __decorate, __metadata, __read, __spread } from 'tslib';
import { InputBoolean, isNotNil, isNil, zoomMotion, NzNoAnimationDirective, toBoolean, slideMotion, NzAddOnModule, NzOverlayModule, NzNoAnimationModule } from 'ng-zorro-antd/core';
import { Subject, BehaviorSubject, ReplaySubject, combineLatest, merge, fromEvent, EMPTY } from 'rxjs';
import { distinctUntilChanged, map, filter, skip, share, tap, takeUntil, pairwise, startWith, flatMap } from 'rxjs/operators';
import { TAB, SPACE, BACKSPACE, ENTER, DOWN_ARROW, UP_ARROW } from '@angular/cdk/keycodes';
import { CdkOverlayOrigin, CdkConnectedOverlay, OverlayModule } from '@angular/cdk/overlay';
import { Platform, PlatformModule } from '@angular/cdk/platform';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'ng-zorro-antd/icon';
import * as ɵngcc3 from 'ng-zorro-antd/empty';
import * as ɵngcc4 from 'ng-zorro-antd/core';
import * as ɵngcc5 from '@angular/forms';
import * as ɵngcc6 from '@angular/cdk/platform';
import * as ɵngcc7 from '@angular/cdk/overlay';

function NzOptionComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0);
} }
var _c0 = ["*"];
var _c1 = ["nz-option-li", ""];
function NzOptionLiComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r0.nzOption.nzLabel, "\n");
} }
function NzOptionLiComponent_ng_container_1_i_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 3);
} }
function NzOptionLiComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzOptionLiComponent_ng_container_1_i_1_Template, 1, 0, "i", 2);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r1.nzMenuItemSelectedIcon)("ngIfElse", ctx_r1.nzMenuItemSelectedIcon);
} }
var _c2 = ["dropdownUl"];
var _c3 = ["nz-option-container", ""];
function NzOptionContainerComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 7);
    ɵngcc0.ɵɵelement(1, "nz-embed-empty", 8);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzComponentName", "select")("specificContent", ctx_r1.nzNotFoundContent);
} }
function NzOptionContainerComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "li", 9);
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("nzMenuItemSelectedIcon", ctx_r2.nzMenuItemSelectedIcon)("nzOption", ctx_r2.nzSelectService.addedTagOption);
} }
function NzOptionContainerComponent_ng_container_4_li_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "li", 9);
} if (rf & 2) {
    var option_r6 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r7 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("nzMenuItemSelectedIcon", ctx_r7.nzMenuItemSelectedIcon)("nzOption", option_r6);
} }
function NzOptionContainerComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzOptionContainerComponent_ng_container_4_li_1_Template, 1, 2, "li", 3);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var option_r6 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !option_r6.nzHide);
} }
function NzOptionContainerComponent_li_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var group_r9 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", group_r9.nzLabel, " ");
} }
function NzOptionContainerComponent_li_6_ng_container_4_li_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "li", 9);
} if (rf & 2) {
    var option_r13 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r14 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("nzMenuItemSelectedIcon", ctx_r14.nzMenuItemSelectedIcon)("nzOption", option_r13);
} }
function NzOptionContainerComponent_li_6_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzOptionContainerComponent_li_6_ng_container_4_li_1_Template, 1, 2, "li", 3);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var option_r13 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !option_r13.nzHide);
} }
function NzOptionContainerComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 10);
    ɵngcc0.ɵɵelementStart(1, "div", 11);
    ɵngcc0.ɵɵtemplate(2, NzOptionContainerComponent_li_6_ng_container_2_Template, 2, 1, "ng-container", 12);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "ul", 13);
    ɵngcc0.ɵɵtemplate(4, NzOptionContainerComponent_li_6_ng_container_4_Template, 2, 1, "ng-container", 4);
    ɵngcc0.ɵɵpipe(5, "nzFilterOption");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var group_r9 = ctx.$implicit;
    var ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵattribute("title", group_r9.isLabelString ? group_r9.nzLabel : "");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", group_r9.nzLabel);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", ɵngcc0.ɵɵpipeBind4(5, 4, group_r9.listOfNzOptionComponent, ctx_r4.nzSelectService.searchValue, ctx_r4.nzSelectService.filterOption, ctx_r4.nzSelectService.serverSearch))("ngForTrackBy", ctx_r4.trackValue);
} }
function NzOptionContainerComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "li", 9);
} if (rf & 2) {
    var option_r16 = ctx.$implicit;
    var ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("nzMenuItemSelectedIcon", ctx_r5.nzMenuItemSelectedIcon)("nzOption", option_r16);
} }
var _c4 = ["inputElement"];
var _c5 = ["mirrorElement"];
var _c6 = ["nz-select-top-control", ""];
function NzSelectTopControlComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    var _r10 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "input", 6, 7);
    ɵngcc0.ɵɵlistener("compositionstart", function NzSelectTopControlComponent_ng_template_0_Template_input_compositionstart_0_listener() { ɵngcc0.ɵɵrestoreView(_r10); var ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.isComposing = true; })("compositionend", function NzSelectTopControlComponent_ng_template_0_Template_input_compositionend_0_listener() { ɵngcc0.ɵɵrestoreView(_r10); var ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.isComposing = false; })("ngModelChange", function NzSelectTopControlComponent_ng_template_0_Template_input_ngModelChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r10); var ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.setInputValue($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(2, "span", 8, 9);
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngModel", ctx_r1.inputValue)("disabled", ctx_r1.nzSelectService.disabled);
} }
function NzSelectTopControlComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 10);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("display", ctx_r2.placeHolderDisplay);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r2.nzPlaceHolder);
} }
function NzSelectTopControlComponent_ng_container_4_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementContainerStart(1);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementContainerEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r15 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r15.nzSelectService.listOfCachedSelectedOption[0] == null ? null : ctx_r15.nzSelectService.listOfCachedSelectedOption[0].nzLabel);
} }
var _c7 = function (a0) { return { $implicit: a0 }; };
function NzSelectTopControlComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 13);
    ɵngcc0.ɵɵtemplate(1, NzSelectTopControlComponent_ng_container_4_div_1_ng_container_1_Template, 3, 1, "ng-container", 14);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r13 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r13.selectedValueStyle);
    ɵngcc0.ɵɵattribute("title", ctx_r13.nzSelectService.listOfCachedSelectedOption[0] == null ? null : ctx_r13.nzSelectService.listOfCachedSelectedOption[0].nzLabel);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r13.nzCustomTemplate)("nzStringTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(4, _c7, ctx_r13.nzSelectService.listOfCachedSelectedOption[0]));
} }
function NzSelectTopControlComponent_ng_container_4_div_2_ng_template_2_Template(rf, ctx) { }
function NzSelectTopControlComponent_ng_container_4_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 15);
    ɵngcc0.ɵɵelementStart(1, "div", 16);
    ɵngcc0.ɵɵtemplate(2, NzSelectTopControlComponent_ng_container_4_div_2_ng_template_2_Template, 0, 0, "ng-template", 17);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r14 = ɵngcc0.ɵɵnextContext(2);
    var _r0 = ɵngcc0.ɵɵreference(1);
    ɵngcc0.ɵɵstyleProp("display", ctx_r14.nzOpen ? "block" : "none");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
function NzSelectTopControlComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzSelectTopControlComponent_ng_container_4_div_1_Template, 2, 6, "div", 11);
    ɵngcc0.ɵɵtemplate(2, NzSelectTopControlComponent_ng_container_4_div_2_Template, 3, 3, "div", 12);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.nzSelectService.listOfCachedSelectedOption.length && ctx_r3.nzSelectService.listOfSelectedValue.length);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.nzShowSearch);
} }
function NzSelectTopControlComponent_ul_5_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "div", 22);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var option_r20 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(option_r20.nzLabel);
} }
function NzSelectTopControlComponent_ul_5_ng_container_1_span_3_i_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 25);
} }
function NzSelectTopControlComponent_ul_5_ng_container_1_span_3_Template(rf, ctx) { if (rf & 1) {
    var _r27 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 23);
    ɵngcc0.ɵɵlistener("mousedown", function NzSelectTopControlComponent_ul_5_ng_container_1_span_3_Template_span_mousedown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r27); return $event.preventDefault(); })("click", function NzSelectTopControlComponent_ul_5_ng_container_1_span_3_Template_span_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r27); var option_r20 = ɵngcc0.ɵɵnextContext().$implicit; var ctx_r28 = ɵngcc0.ɵɵnextContext(2); return ctx_r28.removeSelectedValue(option_r20, $event); });
    ɵngcc0.ɵɵtemplate(1, NzSelectTopControlComponent_ul_5_ng_container_1_span_3_i_1_Template, 1, 0, "i", 24);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r23 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r23.nzRemoveIcon)("ngIfElse", ctx_r23.nzRemoveIcon);
} }
function NzSelectTopControlComponent_ul_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    var _r31 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "li", 20);
    ɵngcc0.ɵɵlistener("@zoomMotion.done", function NzSelectTopControlComponent_ul_5_ng_container_1_Template_li_animation_zoomMotion_done_1_listener() { ɵngcc0.ɵɵrestoreView(_r31); var ctx_r30 = ɵngcc0.ɵɵnextContext(2); return ctx_r30.animationEnd(); });
    ɵngcc0.ɵɵtemplate(2, NzSelectTopControlComponent_ul_5_ng_container_1_ng_container_2_Template, 3, 1, "ng-container", 14);
    ɵngcc0.ɵɵtemplate(3, NzSelectTopControlComponent_ul_5_ng_container_1_span_3_Template, 2, 2, "span", 21);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var option_r20 = ctx.$implicit;
    var index_r21 = ctx.index;
    var ctx_r17 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("ant-select-selection__choice__disabled", option_r20.nzDisabled);
    ɵngcc0.ɵɵproperty("@zoomMotion", undefined)("@.disabled", ctx_r17.noAnimation == null ? null : ctx_r17.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r17.noAnimation == null ? null : ctx_r17.noAnimation.nzNoAnimation);
    ɵngcc0.ɵɵattribute("title", option_r20.nzLabel);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r17.nzCustomTemplate)("nzStringTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(9, _c7, ctx_r17.nzSelectService.listOfCachedSelectedOption[index_r21]));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !option_r20.nzDisabled);
} }
function NzSelectTopControlComponent_ul_5_li_3_ng_container_2_ng_template_1_Template(rf, ctx) { }
function NzSelectTopControlComponent_ul_5_li_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzSelectTopControlComponent_ul_5_li_3_ng_container_2_ng_template_1_Template, 0, 0, "ng-template", 26);
    ɵngcc0.ɵɵpipe(2, "slice");
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r32 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r32.nzMaxTagPlaceholder)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(5, _c7, ɵngcc0.ɵɵpipeBind2(2, 2, ctx_r32.nzSelectService.listOfSelectedValue, ctx_r32.nzMaxTagCount)));
} }
function NzSelectTopControlComponent_ul_5_li_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r33 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" + ", ctx_r33.nzSelectService.listOfCachedSelectedOption.length - ctx_r33.nzMaxTagCount, " ... ");
} }
function NzSelectTopControlComponent_ul_5_li_3_Template(rf, ctx) { if (rf & 1) {
    var _r36 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 20);
    ɵngcc0.ɵɵlistener("@zoomMotion.done", function NzSelectTopControlComponent_ul_5_li_3_Template_li_animation_zoomMotion_done_0_listener() { ɵngcc0.ɵɵrestoreView(_r36); var ctx_r35 = ɵngcc0.ɵɵnextContext(2); return ctx_r35.animationEnd(); });
    ɵngcc0.ɵɵelementStart(1, "div", 22);
    ɵngcc0.ɵɵtemplate(2, NzSelectTopControlComponent_ul_5_li_3_ng_container_2_Template, 3, 7, "ng-container", 3);
    ɵngcc0.ɵɵtemplate(3, NzSelectTopControlComponent_ul_5_li_3_ng_container_3_Template, 2, 1, "ng-container", 3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r18 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("@zoomMotion", undefined)("@.disabled", ctx_r18.noAnimation == null ? null : ctx_r18.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r18.noAnimation == null ? null : ctx_r18.noAnimation.nzNoAnimation);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r18.nzMaxTagPlaceholder);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r18.nzMaxTagPlaceholder);
} }
function NzSelectTopControlComponent_ul_5_ng_template_5_Template(rf, ctx) { }
function NzSelectTopControlComponent_ul_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "ul");
    ɵngcc0.ɵɵtemplate(1, NzSelectTopControlComponent_ul_5_ng_container_1_Template, 4, 11, "ng-container", 18);
    ɵngcc0.ɵɵpipe(2, "slice");
    ɵngcc0.ɵɵtemplate(3, NzSelectTopControlComponent_ul_5_li_3_Template, 4, 5, "li", 19);
    ɵngcc0.ɵɵelementStart(4, "li", 15);
    ɵngcc0.ɵɵtemplate(5, NzSelectTopControlComponent_ul_5_ng_template_5_Template, 0, 0, "ng-template", 17);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext();
    var _r0 = ɵngcc0.ɵɵreference(1);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ɵngcc0.ɵɵpipeBind3(2, 4, ctx_r4.nzSelectService.listOfCachedSelectedOption, 0, ctx_r4.nzMaxTagCount))("ngForTrackBy", ctx_r4.trackValue);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.nzSelectService.listOfCachedSelectedOption.length > ctx_r4.nzMaxTagCount);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
function NzSelectTopControlComponent_span_6_i_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 29);
} }
function NzSelectTopControlComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    var _r39 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 27);
    ɵngcc0.ɵɵlistener("mousedown", function NzSelectTopControlComponent_span_6_Template_span_mousedown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r39); return $event.preventDefault(); })("click", function NzSelectTopControlComponent_span_6_Template_span_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r39); var ctx_r40 = ɵngcc0.ɵɵnextContext(); return ctx_r40.onClearSelection($event); });
    ɵngcc0.ɵɵtemplate(1, NzSelectTopControlComponent_span_6_i_1_Template, 1, 0, "i", 28);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r5.nzClearIcon)("ngIfElse", ctx_r5.nzClearIcon);
} }
function NzSelectTopControlComponent_span_7_i_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 33);
} }
function NzSelectTopControlComponent_span_7_ng_template_2_i_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 35);
} }
function NzSelectTopControlComponent_span_7_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NzSelectTopControlComponent_span_7_ng_template_2_i_0_Template, 1, 0, "i", 34);
} if (rf & 2) {
    var ctx_r43 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r43.nzSuffixIcon)("ngIfElse", ctx_r43.nzSuffixIcon);
} }
function NzSelectTopControlComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 30);
    ɵngcc0.ɵɵtemplate(1, NzSelectTopControlComponent_span_7_i_1_Template, 1, 0, "i", 31);
    ɵngcc0.ɵɵtemplate(2, NzSelectTopControlComponent_span_7_ng_template_2_Template, 1, 2, "ng-template", null, 32, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var _r42 = ɵngcc0.ɵɵreference(3);
    var ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r6.nzLoading)("ngIfElse", _r42);
} }
function NzSelectComponent_ng_template_1_ng_template_2_Template(rf, ctx) { }
var _c8 = function (a0) { return [a0]; };
function NzSelectComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    var _r4 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵelementStart(1, "div", 3);
    ɵngcc0.ɵɵlistener("keydown", function NzSelectComponent_ng_template_1_Template_div_keydown_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r4); var ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3.onKeyDown($event); })("nzScrollToBottom", function NzSelectComponent_ng_template_1_Template_div_nzScrollToBottom_1_listener() { ɵngcc0.ɵɵrestoreView(_r4); var ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.nzScrollToBottom.emit(); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(2, NzSelectComponent_ng_template_1_ng_template_2_Template, 0, 0, "ng-template", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("ant-select-dropdown--single", ctx_r0.nzSelectService.isSingleMode)("ant-select-dropdown--multiple", ctx_r0.nzSelectService.isMultipleOrTags)("ant-select-dropdown-placement-bottomLeft", ctx_r0.dropDownPosition === "bottom")("ant-select-dropdown-placement-topLeft", ctx_r0.dropDownPosition === "top");
    ɵngcc0.ɵɵproperty("nzClassListAdd", ɵngcc0.ɵɵpureFunction1(16, _c8, ctx_r0.nzDropdownClassName))("@slideMotion", ctx_r0.dropDownPosition)("@.disabled", ctx_r0.noAnimation == null ? null : ctx_r0.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r0.noAnimation == null ? null : ctx_r0.noAnimation.nzNoAnimation)("ngStyle", ctx_r0.nzDropdownStyle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzMenuItemSelectedIcon", ctx_r0.nzMenuItemSelectedIcon)("nzNotFoundContent", ctx_r0.nzNotFoundContent);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.nzDropdownRender);
} }
function NzSelectComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0);
} }
var NzOptionComponent = /** @class */ (function () {
    function NzOptionComponent() {
        this.changes = new Subject();
        this.nzDisabled = false;
        this.nzHide = false;
        this.nzCustomContent = false;
    }
    /**
     * @return {?}
     */
    NzOptionComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.changes.next();
    };
    NzOptionComponent.propDecorators = {
        template: [{ type: ViewChild, args: [TemplateRef, { static: false },] }],
        nzLabel: [{ type: Input }],
        nzValue: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzHide: [{ type: Input }],
        nzCustomContent: [{ type: Input }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzOptionComponent.prototype, "nzDisabled", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzOptionComponent.prototype, "nzHide", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzOptionComponent.prototype, "nzCustomContent", void 0);
NzOptionComponent.ɵfac = function NzOptionComponent_Factory(t) { return new (t || NzOptionComponent)(); };
NzOptionComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzOptionComponent, selectors: [["nz-option"]], viewQuery: function NzOptionComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(TemplateRef, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.template = _t.first);
    } }, inputs: { nzDisabled: "nzDisabled", nzHide: "nzHide", nzCustomContent: "nzCustomContent", nzLabel: "nzLabel", nzValue: "nzValue" }, exportAs: ["nzOption"], features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzOptionComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, NzOptionComponent_ng_template_0_Template, 1, 0, "ng-template");
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzOptionComponent, [{
        type: Component,
        args: [{
                selector: 'nz-option',
                exportAs: 'nzOption',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "<ng-template>\r\n  <ng-content></ng-content>\r\n</ng-template>"
            }]
    }], function () { return []; }, { nzDisabled: [{
            type: Input
        }], nzHide: [{
            type: Input
        }], nzCustomContent: [{
            type: Input
        }], template: [{
            type: ViewChild,
            args: [TemplateRef, { static: false }]
        }], nzLabel: [{
            type: Input
        }], nzValue: [{
            type: Input
        }] }); })();
    return NzOptionComponent;
}());
if (false) {
    /** @type {?} */
    NzOptionComponent.prototype.changes;
    /** @type {?} */
    NzOptionComponent.prototype.template;
    /** @type {?} */
    NzOptionComponent.prototype.nzLabel;
    /** @type {?} */
    NzOptionComponent.prototype.nzValue;
    /** @type {?} */
    NzOptionComponent.prototype.nzDisabled;
    /** @type {?} */
    NzOptionComponent.prototype.nzHide;
    /** @type {?} */
    NzOptionComponent.prototype.nzCustomContent;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzOptionGroupComponent = /** @class */ (function () {
    function NzOptionGroupComponent() {
        this.isLabelString = false;
    }
    Object.defineProperty(NzOptionGroupComponent.prototype, "nzLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return this.label;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.label = value;
            this.isLabelString = !(this.nzLabel instanceof TemplateRef);
        },
        enumerable: true,
        configurable: true
    });
    NzOptionGroupComponent.propDecorators = {
        listOfNzOptionComponent: [{ type: ContentChildren, args: [NzOptionComponent,] }],
        nzLabel: [{ type: Input }]
    };
NzOptionGroupComponent.ɵfac = function NzOptionGroupComponent_Factory(t) { return new (t || NzOptionGroupComponent)(); };
NzOptionGroupComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzOptionGroupComponent, selectors: [["nz-option-group"]], contentQueries: function NzOptionGroupComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzOptionComponent, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.listOfNzOptionComponent = _t);
    } }, inputs: { nzLabel: "nzLabel" }, exportAs: ["nzOptionGroup"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzOptionGroupComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzOptionGroupComponent, [{
        type: Component,
        args: [{
                selector: 'nz-option-group',
                exportAs: 'nzOptionGroup',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "<ng-content></ng-content>"
            }]
    }], function () { return []; }, { nzLabel: [{
            type: Input
        }], listOfNzOptionComponent: [{
            type: ContentChildren,
            args: [NzOptionComponent]
        }] }); })();
    return NzOptionGroupComponent;
}());
if (false) {
    /** @type {?} */
    NzOptionGroupComponent.prototype.isLabelString;
    /** @type {?} */
    NzOptionGroupComponent.prototype.label;
    /** @type {?} */
    NzOptionGroupComponent.prototype.listOfNzOptionComponent;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzFilterOptionPipe = /** @class */ (function () {
    function NzFilterOptionPipe() {
    }
    /**
     * @param {?} options
     * @param {?} searchValue
     * @param {?} filterOption
     * @param {?} serverSearch
     * @return {?}
     */
    NzFilterOptionPipe.prototype.transform = /**
     * @param {?} options
     * @param {?} searchValue
     * @param {?} filterOption
     * @param {?} serverSearch
     * @return {?}
     */
    function (options, searchValue, filterOption, serverSearch) {
        if (serverSearch || !searchValue) {
            return (/** @type {?} */ (options));
        }
        else {
            return ((/** @type {?} */ (options))).filter((/**
             * @param {?} o
             * @return {?}
             */
            function (o) { return filterOption(searchValue, o); }));
        }
    };
NzFilterOptionPipe.ɵfac = function NzFilterOptionPipe_Factory(t) { return new (t || NzFilterOptionPipe)(); };
NzFilterOptionPipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "nzFilterOption", type: NzFilterOptionPipe, pure: true });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzFilterOptionPipe, [{
        type: Pipe,
        args: [{ name: 'nzFilterOption' }]
    }], function () { return []; }, null); })();
    return NzFilterOptionPipe;
}());
var NzFilterGroupOptionPipe = /** @class */ (function () {
    function NzFilterGroupOptionPipe() {
    }
    /**
     * @param {?} groups
     * @param {?} searchValue
     * @param {?} filterOption
     * @param {?} serverSearch
     * @return {?}
     */
    NzFilterGroupOptionPipe.prototype.transform = /**
     * @param {?} groups
     * @param {?} searchValue
     * @param {?} filterOption
     * @param {?} serverSearch
     * @return {?}
     */
    function (groups, searchValue, filterOption, serverSearch) {
        if (serverSearch || !searchValue) {
            return groups;
        }
        else {
            return ((/** @type {?} */ (groups))).filter((/**
             * @param {?} g
             * @return {?}
             */
            function (g) {
                return g.listOfNzOptionComponent.some((/**
                 * @param {?} o
                 * @return {?}
                 */
                function (o) { return filterOption(searchValue, o); }));
            }));
        }
    };
NzFilterGroupOptionPipe.ɵfac = function NzFilterGroupOptionPipe_Factory(t) { return new (t || NzFilterGroupOptionPipe)(); };
NzFilterGroupOptionPipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "nzFilterGroupOption", type: NzFilterGroupOptionPipe, pure: true });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzFilterGroupOptionPipe, [{
        type: Pipe,
        args: [{ name: 'nzFilterGroupOption' }]
    }], function () { return []; }, null); })();
    return NzFilterGroupOptionPipe;
}());
/**
 * @param {?} searchValue
 * @param {?} option
 * @return {?}
 */
function defaultFilterOption(searchValue, option) {
    if (option && option.nzLabel) {
        return option.nzLabel.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
    }
    else {
        return false;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzSelectService = /** @class */ (function () {
    function NzSelectService() {
        var _this = this;
        /**
         * Input params *
         */
        this.autoClearSearchValue = true;
        this.serverSearch = false;
        this.filterOption = defaultFilterOption;
        this.mode = 'default';
        this.maxMultipleCount = Infinity;
        this.disabled = false;
        // tslint:disable-next-line:no-any
        this.compareWith = (/**
         * @param {?} o1
         * @param {?} o2
         * @return {?}
         */
        function (o1, o2) { return o1 === o2; });
        /**
         * selectedValueChanged should emit ngModelChange or not *
         */
        // tslint:disable-next-line:no-any
        this.listOfSelectedValueWithEmit$ = new BehaviorSubject({
            value: [],
            emit: false
        });
        /**
         * ContentChildren Change *
         */
        this.mapOfTemplateOption$ = new BehaviorSubject({
            listOfNzOptionComponent: [],
            listOfNzOptionGroupComponent: []
        });
        /**
         * searchValue Change *
         */
        this.searchValueRaw$ = new BehaviorSubject('');
        this.listOfFilteredOption = [];
        this.openRaw$ = new Subject();
        this.checkRaw$ = new Subject();
        this.open = false;
        this.clearInput$ = new Subject();
        this.searchValue = '';
        this.isShowNotFound = false;
        /**
         * animation event *
         */
        this.animationEvent$ = new Subject();
        /**
         * open event *
         */
        this.open$ = this.openRaw$.pipe(distinctUntilChanged());
        this.activatedOption$ = new ReplaySubject(1);
        this.listOfSelectedValue$ = this.listOfSelectedValueWithEmit$.pipe(map((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return data.value; })));
        this.modelChange$ = this.listOfSelectedValueWithEmit$.pipe(filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.emit; })), map((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            /** @type {?} */
            var selectedList = data.value;
            /** @type {?} */
            var modelValue = null;
            if (_this.isSingleMode) {
                if (selectedList.length) {
                    modelValue = selectedList[0];
                }
            }
            else {
                modelValue = selectedList;
            }
            return modelValue;
        })));
        this.searchValue$ = this.searchValueRaw$.pipe(distinctUntilChanged(), skip(1), share(), tap((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.searchValue = value;
            if (value) {
                _this.updateActivatedOption(_this.listOfFilteredOption[0]);
            }
            _this.updateListOfFilteredOption();
        })));
        // tslint:disable-next-line:no-any
        this.listOfSelectedValue = [];
        /**
         * flat ViewChildren *
         */
        this.listOfTemplateOption = [];
        /**
         * tag option *
         */
        this.listOfTagOption = [];
        /**
         * tag option concat template option *
         */
        this.listOfTagAndTemplateOption = [];
        /**
         * ViewChildren *
         */
        this.listOfNzOptionComponent = [];
        this.listOfNzOptionGroupComponent = [];
        /**
         * display in top control *
         */
        this.listOfCachedSelectedOption = [];
        /**
         * selected value or ViewChildren change *
         */
        this.valueOrOption$ = combineLatest([this.listOfSelectedValue$, this.mapOfTemplateOption$]).pipe(tap((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            var _a = __read(data, 2), listOfSelectedValue = _a[0], mapOfTemplateOption = _a[1];
            _this.listOfSelectedValue = listOfSelectedValue;
            _this.listOfNzOptionComponent = mapOfTemplateOption.listOfNzOptionComponent;
            _this.listOfNzOptionGroupComponent = mapOfTemplateOption.listOfNzOptionGroupComponent;
            _this.listOfTemplateOption = _this.listOfNzOptionComponent.concat(_this.listOfNzOptionGroupComponent.reduce((/**
             * @param {?} pre
             * @param {?} cur
             * @return {?}
             */
            function (pre, cur) { return __spread(pre, cur.listOfNzOptionComponent.toArray()); }), (/** @type {?} */ ([]))));
            _this.updateListOfTagOption();
            _this.updateListOfFilteredOption();
            _this.resetActivatedOptionIfNeeded();
            _this.updateListOfCachedOption();
        })), share());
        this.check$ = merge(this.checkRaw$, this.valueOrOption$, this.searchValue$, this.activatedOption$, this.open$, this.modelChange$).pipe(share());
    }
    /**
     * @param {?} option
     * @return {?}
     */
    NzSelectService.prototype.clickOption = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        var _this = this;
        /** update listOfSelectedOption -> update listOfSelectedValue -> next listOfSelectedValue$ **/
        if (!option.nzDisabled) {
            this.updateActivatedOption(option);
            /** @type {?} */
            var listOfSelectedValue = __spread(this.listOfSelectedValue);
            if (this.isMultipleOrTags) {
                /** @type {?} */
                var targetValue = listOfSelectedValue.find((/**
                 * @param {?} o
                 * @return {?}
                 */
                function (o) { return _this.compareWith(o, option.nzValue); }));
                if (isNotNil(targetValue)) {
                    listOfSelectedValue.splice(listOfSelectedValue.indexOf(targetValue), 1);
                    this.updateListOfSelectedValue(listOfSelectedValue, true);
                }
                else if (listOfSelectedValue.length < this.maxMultipleCount) {
                    listOfSelectedValue.push(option.nzValue);
                    this.updateListOfSelectedValue(listOfSelectedValue, true);
                }
            }
            else if (!this.compareWith(listOfSelectedValue[0], option.nzValue)) {
                listOfSelectedValue = [option.nzValue];
                this.updateListOfSelectedValue(listOfSelectedValue, true);
            }
            if (this.isSingleMode) {
                this.setOpenState(false);
            }
            else if (this.autoClearSearchValue) {
                this.clearInput();
            }
        }
    };
    /**
     * @return {?}
     */
    NzSelectService.prototype.updateListOfCachedOption = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isSingleMode) {
            /** @type {?} */
            var selectedOption = this.listOfTemplateOption.find((/**
             * @param {?} o
             * @return {?}
             */
            function (o) {
                return _this.compareWith(o.nzValue, _this.listOfSelectedValue[0]);
            }));
            if (!isNil(selectedOption)) {
                this.listOfCachedSelectedOption = [selectedOption];
            }
        }
        else {
            /** @type {?} */
            var listOfCachedSelectedOption_1 = [];
            this.listOfSelectedValue.forEach((/**
             * @param {?} v
             * @return {?}
             */
            function (v) {
                /** @type {?} */
                var listOfMixedOption = __spread(_this.listOfTagAndTemplateOption, _this.listOfCachedSelectedOption);
                /** @type {?} */
                var option = listOfMixedOption.find((/**
                 * @param {?} o
                 * @return {?}
                 */
                function (o) { return _this.compareWith(o.nzValue, v); }));
                if (option) {
                    listOfCachedSelectedOption_1.push(option);
                }
            }));
            this.listOfCachedSelectedOption = listOfCachedSelectedOption_1;
        }
    };
    /**
     * @return {?}
     */
    NzSelectService.prototype.updateListOfTagOption = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isTagsMode) {
            /** @type {?} */
            var listOfMissValue = this.listOfSelectedValue.filter((/**
             * @param {?} value
             * @return {?}
             */
            function (value) { return !_this.listOfTemplateOption.find((/**
             * @param {?} o
             * @return {?}
             */
            function (o) { return _this.compareWith(o.nzValue, value); })); }));
            this.listOfTagOption = listOfMissValue.map((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                /** @type {?} */
                var cachedOption = _this.listOfCachedSelectedOption.find((/**
                 * @param {?} o
                 * @return {?}
                 */
                function (o) { return _this.compareWith(o.nzValue, value); }));
                if (cachedOption) {
                    return cachedOption;
                }
                else {
                    /** @type {?} */
                    var nzOptionComponent = new NzOptionComponent();
                    nzOptionComponent.nzValue = value;
                    nzOptionComponent.nzLabel = value;
                    return nzOptionComponent;
                }
            }));
            this.listOfTagAndTemplateOption = __spread(this.listOfTemplateOption.concat(this.listOfTagOption));
        }
        else {
            this.listOfTagAndTemplateOption = __spread(this.listOfTemplateOption);
        }
    };
    /**
     * @return {?}
     */
    NzSelectService.prototype.updateAddTagOption = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var isMatch = this.listOfTagAndTemplateOption.find((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.nzLabel === _this.searchValue; }));
        if (this.isTagsMode && this.searchValue && !isMatch) {
            /** @type {?} */
            var option = new NzOptionComponent();
            option.nzValue = this.searchValue;
            option.nzLabel = this.searchValue;
            this.addedTagOption = option;
            this.updateActivatedOption(option);
        }
        else {
            this.addedTagOption = null;
        }
    };
    /**
     * @return {?}
     */
    NzSelectService.prototype.updateListOfFilteredOption = /**
     * @return {?}
     */
    function () {
        this.updateAddTagOption();
        /** @type {?} */
        var listOfFilteredOption = new NzFilterOptionPipe().transform(this.listOfTagAndTemplateOption, this.searchValue, this.filterOption, this.serverSearch);
        this.listOfFilteredOption = this.addedTagOption
            ? __spread([this.addedTagOption], listOfFilteredOption) : __spread(listOfFilteredOption);
        this.isShowNotFound = !this.isTagsMode && !this.listOfFilteredOption.length;
    };
    /**
     * @return {?}
     */
    NzSelectService.prototype.clearInput = /**
     * @return {?}
     */
    function () {
        this.clearInput$.next();
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    NzSelectService.prototype.updateListOfSelectedValue = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    function (value, emit) {
        this.listOfSelectedValueWithEmit$.next({ value: value, emit: emit });
    };
    /**
     * @param {?} option
     * @return {?}
     */
    NzSelectService.prototype.updateActivatedOption = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.activatedOption$.next(option);
        this.activatedOption = option;
    };
    /**
     * @param {?} inputValue
     * @param {?} tokenSeparators
     * @return {?}
     */
    NzSelectService.prototype.tokenSeparate = /**
     * @param {?} inputValue
     * @param {?} tokenSeparators
     * @return {?}
     */
    function (inputValue, tokenSeparators) {
        /** auto tokenSeparators **/
        if (inputValue &&
            inputValue.length &&
            tokenSeparators.length &&
            this.isMultipleOrTags &&
            this.includesSeparators(inputValue, tokenSeparators)) {
            /** @type {?} */
            var listOfLabel = this.splitBySeparators(inputValue, tokenSeparators);
            this.updateSelectedValueByLabelList(listOfLabel);
            this.clearInput();
        }
    };
    /**
     * @param {?} str
     * @param {?} separators
     * @return {?}
     */
    NzSelectService.prototype.includesSeparators = /**
     * @param {?} str
     * @param {?} separators
     * @return {?}
     */
    function (str, separators) {
        // tslint:disable-next-line:prefer-for-of
        for (var i = 0; i < separators.length; ++i) {
            if (str.lastIndexOf(separators[i]) > 0) {
                return true;
            }
        }
        return false;
    };
    /**
     * @param {?} str
     * @param {?} separators
     * @return {?}
     */
    NzSelectService.prototype.splitBySeparators = /**
     * @param {?} str
     * @param {?} separators
     * @return {?}
     */
    function (str, separators) {
        /** @type {?} */
        var reg = new RegExp("[" + separators.join() + "]");
        /** @type {?} */
        var array = ((/** @type {?} */ (str))).split(reg).filter((/**
         * @param {?} token
         * @return {?}
         */
        function (token) { return token; }));
        return Array.from(new Set(array));
    };
    /**
     * @return {?}
     */
    NzSelectService.prototype.resetActivatedOptionIfNeeded = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var resetActivatedOption = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var activatedOption = _this.listOfFilteredOption.find((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                return _this.compareWith(item.nzValue, _this.listOfSelectedValue[0]);
            }));
            _this.updateActivatedOption(activatedOption || null);
        });
        if (this.activatedOption) {
            if (!this.listOfFilteredOption.find((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return _this.compareWith(item.nzValue, (/** @type {?} */ (_this.activatedOption)).nzValue); })) ||
                !this.listOfSelectedValue.find((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return _this.compareWith(item, (/** @type {?} */ (_this.activatedOption)).nzValue); }))) {
                resetActivatedOption();
            }
        }
        else {
            resetActivatedOption();
        }
    };
    /**
     * @param {?} listOfNzOptionComponent
     * @param {?} listOfNzOptionGroupComponent
     * @return {?}
     */
    NzSelectService.prototype.updateTemplateOption = /**
     * @param {?} listOfNzOptionComponent
     * @param {?} listOfNzOptionGroupComponent
     * @return {?}
     */
    function (listOfNzOptionComponent, listOfNzOptionGroupComponent) {
        this.mapOfTemplateOption$.next({ listOfNzOptionComponent: listOfNzOptionComponent, listOfNzOptionGroupComponent: listOfNzOptionGroupComponent });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzSelectService.prototype.updateSearchValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.searchValueRaw$.next(value);
    };
    /**
     * @param {?} listOfLabel
     * @return {?}
     */
    NzSelectService.prototype.updateSelectedValueByLabelList = /**
     * @param {?} listOfLabel
     * @return {?}
     */
    function (listOfLabel) {
        var _this = this;
        /** @type {?} */
        var listOfSelectedValue = __spread(this.listOfSelectedValue);
        /** @type {?} */
        var listOfMatchOptionValue = this.listOfTagAndTemplateOption
            .filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return listOfLabel.indexOf(item.nzLabel) !== -1; }))
            .map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.nzValue; }))
            .filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return !isNotNil(_this.listOfSelectedValue.find((/**
         * @param {?} v
         * @return {?}
         */
        function (v) { return _this.compareWith(v, item); }))); }));
        if (this.isMultipleMode) {
            this.updateListOfSelectedValue(__spread(listOfSelectedValue, listOfMatchOptionValue), true);
        }
        else {
            /** @type {?} */
            var listOfUnMatchOptionValue = listOfLabel.filter((/**
             * @param {?} label
             * @return {?}
             */
            function (label) { return _this.listOfTagAndTemplateOption.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.nzLabel; })).indexOf(label) === -1; }));
            this.updateListOfSelectedValue(__spread(listOfSelectedValue, listOfMatchOptionValue, listOfUnMatchOptionValue), true);
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzSelectService.prototype.onKeyDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        if (this.disabled) {
            return;
        }
        /** @type {?} */
        var keyCode = e.keyCode;
        /** @type {?} */
        var eventTarget = (/** @type {?} */ (e.target));
        /** @type {?} */
        var listOfFilteredOptionWithoutDisabledOrHidden = this.listOfFilteredOption.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return !item.nzDisabled && !item.nzHide; }));
        /** @type {?} */
        var activatedIndex = listOfFilteredOptionWithoutDisabledOrHidden.findIndex((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item === _this.activatedOption; }));
        switch (keyCode) {
            case UP_ARROW:
                e.preventDefault();
                /** @type {?} */
                var preIndex = activatedIndex > 0 ? activatedIndex - 1 : listOfFilteredOptionWithoutDisabledOrHidden.length - 1;
                this.updateActivatedOption(listOfFilteredOptionWithoutDisabledOrHidden[preIndex]);
                break;
            case DOWN_ARROW:
                e.preventDefault();
                /** @type {?} */
                var nextIndex = activatedIndex < listOfFilteredOptionWithoutDisabledOrHidden.length - 1 ? activatedIndex + 1 : 0;
                this.updateActivatedOption(listOfFilteredOptionWithoutDisabledOrHidden[nextIndex]);
                if (!this.disabled && !this.open) {
                    this.setOpenState(true);
                }
                break;
            case ENTER:
                e.preventDefault();
                if (this.open) {
                    if (this.activatedOption && !this.activatedOption.nzDisabled) {
                        this.clickOption(this.activatedOption);
                    }
                }
                else {
                    this.setOpenState(true);
                }
                break;
            case BACKSPACE:
                if (this.isMultipleOrTags && !eventTarget.value && this.listOfCachedSelectedOption.length) {
                    e.preventDefault();
                    this.removeValueFormSelected(this.listOfCachedSelectedOption[this.listOfCachedSelectedOption.length - 1]);
                }
                break;
            case SPACE:
                if (!this.disabled && !this.open) {
                    this.setOpenState(true);
                    e.preventDefault();
                }
                break;
            case TAB:
                this.setOpenState(false);
                break;
        }
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} option
     * @return {?}
     */
    NzSelectService.prototype.removeValueFormSelected = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        var _this = this;
        if (this.disabled || option.nzDisabled) {
            return;
        }
        /** @type {?} */
        var listOfSelectedValue = this.listOfSelectedValue.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return !_this.compareWith(item, option.nzValue); }));
        this.updateListOfSelectedValue(listOfSelectedValue, true);
        this.clearInput();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzSelectService.prototype.setOpenState = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.openRaw$.next(value);
        this.open = value;
    };
    /**
     * @return {?}
     */
    NzSelectService.prototype.check = /**
     * @return {?}
     */
    function () {
        this.checkRaw$.next();
    };
    Object.defineProperty(NzSelectService.prototype, "isSingleMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this.mode === 'default';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectService.prototype, "isTagsMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this.mode === 'tags';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectService.prototype, "isMultipleMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this.mode === 'multiple';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectService.prototype, "isMultipleOrTags", {
        get: /**
         * @return {?}
         */
        function () {
            return this.mode === 'tags' || this.mode === 'multiple';
        },
        enumerable: true,
        configurable: true
    });
NzSelectService.ɵfac = function NzSelectService_Factory(t) { return new (t || NzSelectService)(); };
NzSelectService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: NzSelectService, factory: function (t) { return NzSelectService.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzSelectService, [{
        type: Injectable
    }], function () { return []; }, null); })();
    return NzSelectService;
}());
if (false) {
    /**
     * Input params *
     * @type {?}
     */
    NzSelectService.prototype.autoClearSearchValue;
    /** @type {?} */
    NzSelectService.prototype.serverSearch;
    /** @type {?} */
    NzSelectService.prototype.filterOption;
    /** @type {?} */
    NzSelectService.prototype.mode;
    /** @type {?} */
    NzSelectService.prototype.maxMultipleCount;
    /** @type {?} */
    NzSelectService.prototype.disabled;
    /** @type {?} */
    NzSelectService.prototype.compareWith;
    /**
     * selectedValueChanged should emit ngModelChange or not *
     * @type {?}
     * @private
     */
    NzSelectService.prototype.listOfSelectedValueWithEmit$;
    /**
     * ContentChildren Change *
     * @type {?}
     * @private
     */
    NzSelectService.prototype.mapOfTemplateOption$;
    /**
     * searchValue Change *
     * @type {?}
     * @private
     */
    NzSelectService.prototype.searchValueRaw$;
    /**
     * @type {?}
     * @private
     */
    NzSelectService.prototype.listOfFilteredOption;
    /**
     * @type {?}
     * @private
     */
    NzSelectService.prototype.openRaw$;
    /**
     * @type {?}
     * @private
     */
    NzSelectService.prototype.checkRaw$;
    /**
     * @type {?}
     * @private
     */
    NzSelectService.prototype.open;
    /** @type {?} */
    NzSelectService.prototype.clearInput$;
    /** @type {?} */
    NzSelectService.prototype.searchValue;
    /** @type {?} */
    NzSelectService.prototype.isShowNotFound;
    /**
     * animation event *
     * @type {?}
     */
    NzSelectService.prototype.animationEvent$;
    /**
     * open event *
     * @type {?}
     */
    NzSelectService.prototype.open$;
    /** @type {?} */
    NzSelectService.prototype.activatedOption;
    /** @type {?} */
    NzSelectService.prototype.activatedOption$;
    /** @type {?} */
    NzSelectService.prototype.listOfSelectedValue$;
    /** @type {?} */
    NzSelectService.prototype.modelChange$;
    /** @type {?} */
    NzSelectService.prototype.searchValue$;
    /** @type {?} */
    NzSelectService.prototype.listOfSelectedValue;
    /**
     * flat ViewChildren *
     * @type {?}
     */
    NzSelectService.prototype.listOfTemplateOption;
    /**
     * tag option *
     * @type {?}
     */
    NzSelectService.prototype.listOfTagOption;
    /**
     * tag option concat template option *
     * @type {?}
     */
    NzSelectService.prototype.listOfTagAndTemplateOption;
    /**
     * ViewChildren *
     * @type {?}
     */
    NzSelectService.prototype.listOfNzOptionComponent;
    /** @type {?} */
    NzSelectService.prototype.listOfNzOptionGroupComponent;
    /**
     * click or enter add tag option *
     * @type {?}
     */
    NzSelectService.prototype.addedTagOption;
    /**
     * display in top control *
     * @type {?}
     */
    NzSelectService.prototype.listOfCachedSelectedOption;
    /**
     * selected value or ViewChildren change *
     * @type {?}
     */
    NzSelectService.prototype.valueOrOption$;
    /** @type {?} */
    NzSelectService.prototype.check$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzOptionLiComponent = /** @class */ (function () {
    function NzOptionLiComponent(elementRef, nzSelectService, cdr, renderer) {
        this.elementRef = elementRef;
        this.nzSelectService = nzSelectService;
        this.cdr = cdr;
        this.el = this.elementRef.nativeElement;
        this.selected = false;
        this.active = false;
        this.destroy$ = new Subject();
        renderer.addClass(elementRef.nativeElement, 'ant-select-dropdown-menu-item');
    }
    /**
     * @return {?}
     */
    NzOptionLiComponent.prototype.clickOption = /**
     * @return {?}
     */
    function () {
        this.nzSelectService.clickOption(this.nzOption);
    };
    /**
     * @return {?}
     */
    NzOptionLiComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.nzSelectService.listOfSelectedValue$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} list
         * @return {?}
         */
        function (list) {
            _this.selected = isNotNil(list.find((/**
             * @param {?} v
             * @return {?}
             */
            function (v) { return _this.nzSelectService.compareWith(v, _this.nzOption.nzValue); })));
            _this.cdr.markForCheck();
        }));
        this.nzSelectService.activatedOption$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            if (option) {
                _this.active = _this.nzSelectService.compareWith(option.nzValue, _this.nzOption.nzValue);
            }
            else {
                _this.active = false;
            }
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @return {?}
     */
    NzOptionLiComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /** @nocollapse */
    NzOptionLiComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NzSelectService },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    NzOptionLiComponent.propDecorators = {
        nzOption: [{ type: Input }],
        nzMenuItemSelectedIcon: [{ type: Input }]
    };
NzOptionLiComponent.ɵfac = function NzOptionLiComponent_Factory(t) { return new (t || NzOptionLiComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(NzSelectService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2)); };
NzOptionLiComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzOptionLiComponent, selectors: [["", "nz-option-li", ""]], hostVars: 9, hostBindings: function NzOptionLiComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function NzOptionLiComponent_click_HostBindingHandler() { return ctx.clickOption(); })("mousedown", function NzOptionLiComponent_mousedown_HostBindingHandler($event) { return $event.preventDefault(); });
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("unselectable", "unselectable");
        ɵngcc0.ɵɵstyleProp("user-select", "none");
        ɵngcc0.ɵɵclassProp("ant-select-dropdown-menu-item-selected", ctx.selected && !ctx.nzOption.nzDisabled)("ant-select-dropdown-menu-item-disabled", ctx.nzOption.nzDisabled)("ant-select-dropdown-menu-item-active", ctx.active && !ctx.nzOption.nzDisabled);
    } }, inputs: { nzOption: "nzOption", nzMenuItemSelectedIcon: "nzMenuItemSelectedIcon" }, exportAs: ["nzOptionLi"], attrs: _c1, decls: 2, vars: 3, consts: [[4, "ngIf", "ngIfElse"], [4, "ngIf"], ["nz-icon", "", "nzType", "check", "class", "ant-select-selected-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "check", 1, "ant-select-selected-icon"]], template: function NzOptionLiComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzOptionLiComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        ɵngcc0.ɵɵtemplate(1, NzOptionLiComponent_ng_container_1_Template, 2, 2, "ng-container", 1);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", !ctx.nzOption.nzCustomContent)("ngIfElse", ctx.nzOption.template);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzSelectService.isMultipleOrTags);
    } }, directives: [ɵngcc1.NgIf, ɵngcc2.NzIconDirective], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzOptionLiComponent, [{
        type: Component,
        args: [{
                selector: '[nz-option-li]',
                exportAs: 'nzOptionLi',
                template: "<ng-container *ngIf=\"!nzOption.nzCustomContent; else nzOption.template\">\r\n  {{nzOption.nzLabel}}\r\n</ng-container>\r\n<ng-container *ngIf=\"nzSelectService.isMultipleOrTags\">\r\n  <i nz-icon nzType=\"check\" class=\"ant-select-selected-icon\" *ngIf=\"!nzMenuItemSelectedIcon; else nzMenuItemSelectedIcon\"></i>\r\n</ng-container>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.ant-select-dropdown-menu-item-selected]': 'selected && !nzOption.nzDisabled',
                    '[class.ant-select-dropdown-menu-item-disabled]': 'nzOption.nzDisabled',
                    '[class.ant-select-dropdown-menu-item-active]': 'active && !nzOption.nzDisabled',
                    '[attr.unselectable]': '"unselectable"',
                    '[style.user-select]': '"none"',
                    '(click)': 'clickOption()',
                    '(mousedown)': '$event.preventDefault()'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: NzSelectService }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.Renderer2 }]; }, { nzOption: [{
            type: Input
        }], nzMenuItemSelectedIcon: [{
            type: Input
        }] }); })();
    return NzOptionLiComponent;
}());
if (false) {
    /** @type {?} */
    NzOptionLiComponent.prototype.el;
    /** @type {?} */
    NzOptionLiComponent.prototype.selected;
    /** @type {?} */
    NzOptionLiComponent.prototype.active;
    /** @type {?} */
    NzOptionLiComponent.prototype.destroy$;
    /** @type {?} */
    NzOptionLiComponent.prototype.nzOption;
    /** @type {?} */
    NzOptionLiComponent.prototype.nzMenuItemSelectedIcon;
    /**
     * @type {?}
     * @private
     */
    NzOptionLiComponent.prototype.elementRef;
    /** @type {?} */
    NzOptionLiComponent.prototype.nzSelectService;
    /**
     * @type {?}
     * @private
     */
    NzOptionLiComponent.prototype.cdr;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzOptionContainerComponent = /** @class */ (function () {
    function NzOptionContainerComponent(nzSelectService, cdr, ngZone) {
        this.nzSelectService = nzSelectService;
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.destroy$ = new Subject();
        this.lastScrollTop = 0;
        this.nzScrollToBottom = new EventEmitter();
    }
    /**
     * @param {?} option
     * @return {?}
     */
    NzOptionContainerComponent.prototype.scrollIntoViewIfNeeded = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        var _this = this;
        // delay after open
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (_this.listOfNzOptionLiComponent && _this.listOfNzOptionLiComponent.length && option) {
                /** @type {?} */
                var targetOption = _this.listOfNzOptionLiComponent.find((/**
                 * @param {?} o
                 * @return {?}
                 */
                function (o) {
                    return _this.nzSelectService.compareWith(o.nzOption.nzValue, option.nzValue);
                }));
                // tslint:disable:no-any
                if (targetOption && targetOption.el && ((/** @type {?} */ (targetOption.el))).scrollIntoViewIfNeeded) {
                    ((/** @type {?} */ (targetOption.el))).scrollIntoViewIfNeeded(false);
                }
            }
        }));
    };
    /**
     * @param {?} _index
     * @param {?} option
     * @return {?}
     */
    NzOptionContainerComponent.prototype.trackLabel = /**
     * @param {?} _index
     * @param {?} option
     * @return {?}
     */
    function (_index, option) {
        return option.nzLabel;
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} _index
     * @param {?} option
     * @return {?}
     */
    NzOptionContainerComponent.prototype.trackValue = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} _index
     * @param {?} option
     * @return {?}
     */
    function (_index, option) {
        return option.nzValue;
    };
    /**
     * @return {?}
     */
    NzOptionContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.nzSelectService.activatedOption$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            _this.scrollIntoViewIfNeeded((/** @type {?} */ (option)));
        }));
        this.nzSelectService.check$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.cdr.markForCheck();
        }));
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var ul = _this.dropdownUl.nativeElement;
            fromEvent(ul, 'scroll')
                .pipe(takeUntil(_this.destroy$))
                .subscribe((/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                e.preventDefault();
                e.stopPropagation();
                if (ul && ul.scrollTop > _this.lastScrollTop && ul.scrollHeight < ul.clientHeight + ul.scrollTop + 10) {
                    _this.lastScrollTop = ul.scrollTop;
                    _this.ngZone.run((/**
                     * @return {?}
                     */
                    function () {
                        _this.nzScrollToBottom.emit();
                    }));
                }
            }));
        }));
    };
    /**
     * @return {?}
     */
    NzOptionContainerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.listOfNzOptionLiComponent.changes
            .pipe(map((/**
         * @param {?} list
         * @return {?}
         */
        function (list) { return list.length; })), pairwise(), filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 2), before = _b[0], after = _b[1];
            return after < before;
        })), takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () { return (_this.lastScrollTop = 0); }));
    };
    /**
     * @return {?}
     */
    NzOptionContainerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /** @nocollapse */
    NzOptionContainerComponent.ctorParameters = function () { return [
        { type: NzSelectService },
        { type: ChangeDetectorRef },
        { type: NgZone }
    ]; };
    NzOptionContainerComponent.propDecorators = {
        listOfNzOptionLiComponent: [{ type: ViewChildren, args: [NzOptionLiComponent,] }],
        dropdownUl: [{ type: ViewChild, args: ['dropdownUl', { static: true },] }],
        nzNotFoundContent: [{ type: Input }],
        nzMenuItemSelectedIcon: [{ type: Input }],
        nzScrollToBottom: [{ type: Output }]
    };
NzOptionContainerComponent.ɵfac = function NzOptionContainerComponent_Factory(t) { return new (t || NzOptionContainerComponent)(ɵngcc0.ɵɵdirectiveInject(NzSelectService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
NzOptionContainerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzOptionContainerComponent, selectors: [["", "nz-option-container", ""]], viewQuery: function NzOptionContainerComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c2, true);
        ɵngcc0.ɵɵviewQuery(NzOptionLiComponent, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.dropdownUl = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.listOfNzOptionLiComponent = _t);
    } }, inputs: { nzNotFoundContent: "nzNotFoundContent", nzMenuItemSelectedIcon: "nzMenuItemSelectedIcon" }, outputs: { nzScrollToBottom: "nzScrollToBottom" }, exportAs: ["nzOptionContainer"], attrs: _c3, decls: 10, vars: 23, consts: [["role", "menu", "tabindex", "0", 1, "ant-select-dropdown-menu", "ant-select-dropdown-menu-root", "ant-select-dropdown-menu-vertical"], ["dropdownUl", ""], ["nz-select-unselectable", "", "class", "ant-select-dropdown-menu-item ant-select-dropdown-menu-item-disabled", 4, "ngIf"], ["nz-option-li", "", 3, "nzMenuItemSelectedIcon", "nzOption", 4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "ant-select-dropdown-menu-item-group", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["nz-option-li", "", 3, "nzMenuItemSelectedIcon", "nzOption", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["nz-select-unselectable", "", 1, "ant-select-dropdown-menu-item", "ant-select-dropdown-menu-item-disabled"], [3, "nzComponentName", "specificContent"], ["nz-option-li", "", 3, "nzMenuItemSelectedIcon", "nzOption"], [1, "ant-select-dropdown-menu-item-group"], [1, "ant-select-dropdown-menu-item-group-title"], [4, "nzStringTemplateOutlet"], [1, "ant-select-dropdown-menu-item-group-list"]], template: function NzOptionContainerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ul", 0, 1);
        ɵngcc0.ɵɵtemplate(2, NzOptionContainerComponent_li_2_Template, 2, 2, "li", 2);
        ɵngcc0.ɵɵtemplate(3, NzOptionContainerComponent_li_3_Template, 1, 2, "li", 3);
        ɵngcc0.ɵɵtemplate(4, NzOptionContainerComponent_ng_container_4_Template, 2, 1, "ng-container", 4);
        ɵngcc0.ɵɵpipe(5, "nzFilterOption");
        ɵngcc0.ɵɵtemplate(6, NzOptionContainerComponent_li_6_Template, 6, 9, "li", 5);
        ɵngcc0.ɵɵpipe(7, "nzFilterGroupOption");
        ɵngcc0.ɵɵtemplate(8, NzOptionContainerComponent_li_8_Template, 1, 2, "li", 6);
        ɵngcc0.ɵɵpipe(9, "nzFilterOption");
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzSelectService.isShowNotFound);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzSelectService.addedTagOption);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ɵngcc0.ɵɵpipeBind4(5, 8, ctx.nzSelectService.listOfNzOptionComponent, ctx.nzSelectService.searchValue, ctx.nzSelectService.filterOption, ctx.nzSelectService.serverSearch))("ngForTrackBy", ctx.trackValue);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ɵngcc0.ɵɵpipeBind4(7, 13, ctx.nzSelectService.listOfNzOptionGroupComponent, ctx.nzSelectService.searchValue, ctx.nzSelectService.filterOption, ctx.nzSelectService.serverSearch))("ngForTrackBy", ctx.trackLabel);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ɵngcc0.ɵɵpipeBind4(9, 18, ctx.nzSelectService.listOfTagOption, ctx.nzSelectService.searchValue, ctx.nzSelectService.filterOption, ctx.nzSelectService.serverSearch))("ngForTrackBy", ctx.trackValue);
    } }, directives: function () { return [ɵngcc1.NgIf, ɵngcc1.NgForOf, NzSelectUnselectableDirective, ɵngcc3.NzEmbedEmptyComponent, NzOptionLiComponent, ɵngcc4.NzStringTemplateOutletDirective]; }, pipes: function () { return [NzFilterOptionPipe,
        NzFilterGroupOptionPipe]; }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzOptionContainerComponent, [{
        type: Component,
        args: [{
                selector: '[nz-option-container]',
                exportAs: 'nzOptionContainer',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                template: "<ul #dropdownUl\r\n  class=\"ant-select-dropdown-menu ant-select-dropdown-menu-root ant-select-dropdown-menu-vertical\"\r\n  role=\"menu\"\r\n  tabindex=\"0\">\r\n  <li *ngIf=\"nzSelectService.isShowNotFound\"\r\n    nz-select-unselectable\r\n    class=\"ant-select-dropdown-menu-item ant-select-dropdown-menu-item-disabled\">\r\n    <nz-embed-empty [nzComponentName]=\"'select'\" [specificContent]=\"nzNotFoundContent\"></nz-embed-empty>\r\n  </li>\r\n  <li nz-option-li\r\n    *ngIf=\"nzSelectService.addedTagOption\"\r\n    [nzMenuItemSelectedIcon]=\"nzMenuItemSelectedIcon\"\r\n    [nzOption]=\"nzSelectService.addedTagOption\">\r\n  </li>\r\n  <ng-container *ngFor=\"let option of nzSelectService.listOfNzOptionComponent | nzFilterOption : nzSelectService.searchValue : nzSelectService.filterOption : nzSelectService.serverSearch; trackBy: trackValue\">\r\n    <li nz-option-li\r\n      *ngIf=\"!option.nzHide\"\r\n      [nzMenuItemSelectedIcon]=\"nzMenuItemSelectedIcon\"\r\n      [nzOption]=\"option\">\r\n    </li>\r\n  </ng-container>\r\n  <li class=\"ant-select-dropdown-menu-item-group\"\r\n    *ngFor=\"let group of nzSelectService.listOfNzOptionGroupComponent | nzFilterGroupOption : nzSelectService.searchValue : nzSelectService.filterOption :nzSelectService.serverSearch; trackBy: trackLabel\">\r\n    <div class=\"ant-select-dropdown-menu-item-group-title\"\r\n      [attr.title]=\"group.isLabelString ? group.nzLabel : ''\">\r\n      <ng-container *nzStringTemplateOutlet=\"group.nzLabel\"> {{group.nzLabel}} </ng-container>\r\n    </div>\r\n    <ul class=\"ant-select-dropdown-menu-item-group-list\">\r\n      <ng-container *ngFor=\"let option of group.listOfNzOptionComponent | nzFilterOption : nzSelectService.searchValue : nzSelectService.filterOption :nzSelectService.serverSearch; trackBy: trackValue\">\r\n        <li nz-option-li\r\n          *ngIf=\"!option.nzHide\"\r\n          [nzMenuItemSelectedIcon]=\"nzMenuItemSelectedIcon\"\r\n          [nzOption]=\"option\">\r\n        </li>\r\n      </ng-container>\r\n    </ul>\r\n  </li>\r\n  <li nz-option-li\r\n    *ngFor=\"let option of nzSelectService.listOfTagOption | nzFilterOption : nzSelectService.searchValue : nzSelectService.filterOption : nzSelectService.serverSearch; trackBy: trackValue \"\r\n    [nzMenuItemSelectedIcon]=\"nzMenuItemSelectedIcon\"\r\n    [nzOption]=\"option\">\r\n  </li>\r\n</ul>\r\n"
            }]
    }], function () { return [{ type: NzSelectService }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.NgZone }]; }, { nzScrollToBottom: [{
            type: Output
        }], listOfNzOptionLiComponent: [{
            type: ViewChildren,
            args: [NzOptionLiComponent]
        }], dropdownUl: [{
            type: ViewChild,
            args: ['dropdownUl', { static: true }]
        }], nzNotFoundContent: [{
            type: Input
        }], nzMenuItemSelectedIcon: [{
            type: Input
        }] }); })();
    return NzOptionContainerComponent;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzOptionContainerComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzOptionContainerComponent.prototype.lastScrollTop;
    /** @type {?} */
    NzOptionContainerComponent.prototype.listOfNzOptionLiComponent;
    /** @type {?} */
    NzOptionContainerComponent.prototype.dropdownUl;
    /** @type {?} */
    NzOptionContainerComponent.prototype.nzNotFoundContent;
    /** @type {?} */
    NzOptionContainerComponent.prototype.nzMenuItemSelectedIcon;
    /** @type {?} */
    NzOptionContainerComponent.prototype.nzScrollToBottom;
    /** @type {?} */
    NzOptionContainerComponent.prototype.nzSelectService;
    /**
     * @type {?}
     * @private
     */
    NzOptionContainerComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzOptionContainerComponent.prototype.ngZone;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzSelectTopControlComponent = /** @class */ (function () {
    function NzSelectTopControlComponent(renderer, nzSelectService, cdr, noAnimation) {
        this.renderer = renderer;
        this.nzSelectService = nzSelectService;
        this.cdr = cdr;
        this.noAnimation = noAnimation;
        this.isComposing = false;
        this.destroy$ = new Subject();
        this.nzShowSearch = false;
        this.nzOpen = false;
        this.nzAllowClear = false;
        this.nzShowArrow = true;
        this.nzLoading = false;
        this.nzTokenSeparators = [];
    }
    /**
     * @param {?} e
     * @return {?}
     */
    NzSelectTopControlComponent.prototype.onClearSelection = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.stopPropagation();
        this.nzSelectService.updateListOfSelectedValue([], true);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzSelectTopControlComponent.prototype.setInputValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** fix clear value https://github.com/NG-ZORRO/ng-zorro-antd/issues/3825 **/
        if (this.inputDOM && !value) {
            this.inputDOM.value = value;
        }
        this.inputValue = value;
        this.updateWidth();
        this.nzSelectService.updateSearchValue(value);
        this.nzSelectService.tokenSeparate(this.inputValue, this.nzTokenSeparators);
    };
    Object.defineProperty(NzSelectTopControlComponent.prototype, "mirrorDOM", {
        get: /**
         * @return {?}
         */
        function () {
            return this.mirrorElement && this.mirrorElement.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectTopControlComponent.prototype, "inputDOM", {
        get: /**
         * @return {?}
         */
        function () {
            return this.inputElement && this.inputElement.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectTopControlComponent.prototype, "placeHolderDisplay", {
        get: /**
         * @return {?}
         */
        function () {
            return this.inputValue || this.isComposing || this.nzSelectService.listOfSelectedValue.length ? 'none' : 'block';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectTopControlComponent.prototype, "selectedValueStyle", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var showSelectedValue = false;
            /** @type {?} */
            var opacity = 1;
            if (!this.nzShowSearch) {
                showSelectedValue = true;
            }
            else {
                if (this.nzOpen) {
                    showSelectedValue = !(this.inputValue || this.isComposing);
                    if (showSelectedValue) {
                        opacity = 0.4;
                    }
                }
                else {
                    showSelectedValue = true;
                }
            }
            return {
                display: showSelectedValue ? 'block' : 'none',
                opacity: "" + opacity
            };
        },
        enumerable: true,
        configurable: true
    });
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} _index
     * @param {?} option
     * @return {?}
     */
    NzSelectTopControlComponent.prototype.trackValue = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} _index
     * @param {?} option
     * @return {?}
     */
    function (_index, option) {
        return option.nzValue;
    };
    /**
     * @return {?}
     */
    NzSelectTopControlComponent.prototype.updateWidth = /**
     * @return {?}
     */
    function () {
        if (this.mirrorDOM && this.inputDOM && this.inputDOM.value) {
            this.mirrorDOM.innerText = this.inputDOM.value + "&nbsp;";
            this.renderer.removeStyle(this.inputDOM, 'width');
            this.renderer.setStyle(this.inputDOM, 'width', this.mirrorDOM.clientWidth + "px");
        }
        else if (this.inputDOM) {
            this.renderer.removeStyle(this.inputDOM, 'width');
            this.mirrorDOM.innerText = '';
        }
    };
    /**
     * @param {?} option
     * @param {?} e
     * @return {?}
     */
    NzSelectTopControlComponent.prototype.removeSelectedValue = /**
     * @param {?} option
     * @param {?} e
     * @return {?}
     */
    function (option, e) {
        this.nzSelectService.removeValueFormSelected(option);
        e.stopPropagation();
    };
    /**
     * @return {?}
     */
    NzSelectTopControlComponent.prototype.animationEnd = /**
     * @return {?}
     */
    function () {
        this.nzSelectService.animationEvent$.next();
    };
    /**
     * @return {?}
     */
    NzSelectTopControlComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.nzSelectService.open$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} open
         * @return {?}
         */
        function (open) {
            if (_this.inputElement && open) {
                setTimeout((/**
                 * @return {?}
                 */
                function () { return _this.inputDOM.focus(); }));
            }
        }));
        this.nzSelectService.clearInput$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.setInputValue('');
        }));
        this.nzSelectService.check$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @return {?}
     */
    NzSelectTopControlComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /** @nocollapse */
    NzSelectTopControlComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: NzSelectService },
        { type: ChangeDetectorRef },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    NzSelectTopControlComponent.propDecorators = {
        inputElement: [{ type: ViewChild, args: ['inputElement', { static: false },] }],
        mirrorElement: [{ type: ViewChild, args: ['mirrorElement', { static: false },] }],
        nzShowSearch: [{ type: Input }],
        nzPlaceHolder: [{ type: Input }],
        nzOpen: [{ type: Input }],
        nzMaxTagCount: [{ type: Input }],
        nzAllowClear: [{ type: Input }],
        nzShowArrow: [{ type: Input }],
        nzLoading: [{ type: Input }],
        nzCustomTemplate: [{ type: Input }],
        nzSuffixIcon: [{ type: Input }],
        nzClearIcon: [{ type: Input }],
        nzRemoveIcon: [{ type: Input }],
        nzMaxTagPlaceholder: [{ type: Input }],
        nzTokenSeparators: [{ type: Input }]
    };
NzSelectTopControlComponent.ɵfac = function NzSelectTopControlComponent_Factory(t) { return new (t || NzSelectTopControlComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(NzSelectService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc4.NzNoAnimationDirective, 9)); };
NzSelectTopControlComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzSelectTopControlComponent, selectors: [["", "nz-select-top-control", ""]], viewQuery: function NzSelectTopControlComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c4, true);
        ɵngcc0.ɵɵviewQuery(_c5, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.mirrorElement = _t.first);
    } }, inputs: { nzShowSearch: "nzShowSearch", nzOpen: "nzOpen", nzAllowClear: "nzAllowClear", nzShowArrow: "nzShowArrow", nzLoading: "nzLoading", nzTokenSeparators: "nzTokenSeparators", nzPlaceHolder: "nzPlaceHolder", nzMaxTagCount: "nzMaxTagCount", nzCustomTemplate: "nzCustomTemplate", nzSuffixIcon: "nzSuffixIcon", nzClearIcon: "nzClearIcon", nzRemoveIcon: "nzRemoveIcon", nzMaxTagPlaceholder: "nzMaxTagPlaceholder" }, exportAs: ["nzSelectTopControl"], attrs: _c6, decls: 8, vars: 5, consts: [["inputTemplate", ""], [1, "ant-select-selection__rendered"], ["nz-select-unselectable", "", "class", "ant-select-selection__placeholder", 3, "display", 4, "ngIf"], [4, "ngIf"], ["class", "ant-select-selection__clear", "nz-select-unselectable", "", 3, "mousedown", "click", 4, "ngIf"], ["class", "ant-select-arrow", "nz-select-unselectable", "", 4, "ngIf"], ["autocomplete", "something-new", 1, "ant-select-search__field", 3, "ngModel", "disabled", "compositionstart", "compositionend", "ngModelChange"], ["inputElement", ""], [1, "ant-select-search__field__mirror"], ["mirrorElement", ""], ["nz-select-unselectable", "", 1, "ant-select-selection__placeholder"], ["class", "ant-select-selection-selected-value", 3, "ngStyle", 4, "ngIf"], ["class", "ant-select-search ant-select-search--inline", 3, "display", 4, "ngIf"], [1, "ant-select-selection-selected-value", 3, "ngStyle"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], [1, "ant-select-search", "ant-select-search--inline"], [1, "ant-select-search__field__wrap"], [3, "ngTemplateOutlet"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "ant-select-selection__choice", 3, "nzNoAnimation", 4, "ngIf"], [1, "ant-select-selection__choice", 3, "nzNoAnimation"], ["class", "ant-select-selection__choice__remove", 3, "mousedown", "click", 4, "ngIf"], [1, "ant-select-selection__choice__content"], [1, "ant-select-selection__choice__remove", 3, "mousedown", "click"], ["nz-icon", "", "nzType", "close", "class", "ant-select-remove-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "close", 1, "ant-select-remove-icon"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["nz-select-unselectable", "", 1, "ant-select-selection__clear", 3, "mousedown", "click"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", "class", "ant-select-close-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", 1, "ant-select-close-icon"], ["nz-select-unselectable", "", 1, "ant-select-arrow"], ["nz-icon", "", "nzType", "loading", 4, "ngIf", "ngIfElse"], ["defaultArrow", ""], ["nz-icon", "", "nzType", "loading"], ["nz-icon", "", "nzType", "down", "class", "ant-select-arrow-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "down", 1, "ant-select-arrow-icon"]], template: function NzSelectTopControlComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzSelectTopControlComponent_ng_template_0_Template, 4, 2, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵelementStart(2, "div", 1);
        ɵngcc0.ɵɵtemplate(3, NzSelectTopControlComponent_div_3_Template, 2, 3, "div", 2);
        ɵngcc0.ɵɵtemplate(4, NzSelectTopControlComponent_ng_container_4_Template, 3, 2, "ng-container", 3);
        ɵngcc0.ɵɵtemplate(5, NzSelectTopControlComponent_ul_5_Template, 6, 8, "ul", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(6, NzSelectTopControlComponent_span_6_Template, 2, 2, "span", 4);
        ɵngcc0.ɵɵtemplate(7, NzSelectTopControlComponent_span_7_Template, 4, 2, "span", 5);
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzPlaceHolder);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzSelectService.isSingleMode);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzSelectService.isMultipleOrTags);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzAllowClear && ctx.nzSelectService.listOfSelectedValue.length);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzShowArrow);
    } }, directives: function () { return [ɵngcc1.NgIf, ɵngcc5.DefaultValueAccessor, ɵngcc5.NgControlStatus, ɵngcc5.NgModel, NzSelectUnselectableDirective, ɵngcc1.NgStyle, ɵngcc4.NzStringTemplateOutletDirective, ɵngcc1.NgTemplateOutlet, ɵngcc1.NgForOf, ɵngcc4.NzNoAnimationDirective, ɵngcc2.NzIconDirective]; }, pipes: function () { return [ɵngcc1.SlicePipe]; }, encapsulation: 2, data: { animation: [zoomMotion] }, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzSelectTopControlComponent, [{
        type: Component,
        args: [{
                selector: '[nz-select-top-control]',
                exportAs: 'nzSelectTopControl',
                preserveWhitespaces: false,
                animations: [zoomMotion],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: "<ng-template #inputTemplate>\r\n  <input #inputElement\r\n    autocomplete=\"something-new\"\r\n    class=\"ant-select-search__field\"\r\n    (compositionstart)=\"isComposing = true\"\r\n    (compositionend)=\"isComposing = false\"\r\n    [ngModel]=\"inputValue\"\r\n    (ngModelChange)=\"setInputValue($event)\"\r\n    [disabled]=\"nzSelectService.disabled\">\r\n  <span #mirrorElement class=\"ant-select-search__field__mirror\"></span>\r\n</ng-template>\r\n<div class=\"ant-select-selection__rendered\">\r\n  <div *ngIf=\"nzPlaceHolder\"\r\n    nz-select-unselectable\r\n    [style.display]=\"placeHolderDisplay\"\r\n    class=\"ant-select-selection__placeholder\">{{ nzPlaceHolder }}</div>\r\n  <!--single mode-->\r\n  <ng-container *ngIf=\"nzSelectService.isSingleMode\">\r\n    <!--selected label-->\r\n    <div *ngIf=\"nzSelectService.listOfCachedSelectedOption.length && nzSelectService.listOfSelectedValue.length\"\r\n      class=\"ant-select-selection-selected-value\"\r\n      [attr.title]=\"nzSelectService.listOfCachedSelectedOption[0]?.nzLabel\"\r\n      [ngStyle]=\"selectedValueStyle\">\r\n      <ng-container *nzStringTemplateOutlet=\"nzCustomTemplate; context: { $implicit: nzSelectService.listOfCachedSelectedOption[0] }\">\r\n        <ng-container>{{ nzSelectService.listOfCachedSelectedOption[0]?.nzLabel }}</ng-container>\r\n      </ng-container>\r\n    </div>\r\n    <!--show search-->\r\n    <div *ngIf=\"nzShowSearch\"\r\n      class=\"ant-select-search ant-select-search--inline\" [style.display]=\"nzOpen ? 'block' : 'none'\">\r\n      <div class=\"ant-select-search__field__wrap\">\r\n        <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n  <!--multiple or tags mode-->\r\n  <ul *ngIf=\"nzSelectService.isMultipleOrTags\">\r\n    <ng-container *ngFor=\"let option of nzSelectService.listOfCachedSelectedOption | slice: 0 : nzMaxTagCount;trackBy:trackValue; let index = index\">\r\n      <li [@zoomMotion]\r\n        [@.disabled]=\"noAnimation?.nzNoAnimation\"\r\n        [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n        [attr.title]=\"option.nzLabel\"\r\n        [class.ant-select-selection__choice__disabled]=\"option.nzDisabled\"\r\n        (@zoomMotion.done)=\"animationEnd()\"\r\n        class=\"ant-select-selection__choice\">\r\n        <ng-container *nzStringTemplateOutlet=\"nzCustomTemplate; context:{ $implicit: nzSelectService.listOfCachedSelectedOption[index] }\">\r\n          <div class=\"ant-select-selection__choice__content\">{{ option.nzLabel }}</div>\r\n        </ng-container>\r\n        <span *ngIf=\"!option.nzDisabled\"\r\n          class=\"ant-select-selection__choice__remove\"\r\n          (mousedown)=\"$event.preventDefault()\"\r\n          (click)=\"removeSelectedValue(option, $event)\">\r\n          <i nz-icon nzType=\"close\" class=\"ant-select-remove-icon\" *ngIf=\"!nzRemoveIcon; else nzRemoveIcon\"></i>\r\n        </span>\r\n      </li>\r\n    </ng-container>\r\n    <li *ngIf=\"nzSelectService.listOfCachedSelectedOption.length > nzMaxTagCount\"\r\n      [@zoomMotion]\r\n      [@.disabled]=\"noAnimation?.nzNoAnimation\"\r\n      [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n      (@zoomMotion.done)=\"animationEnd()\"\r\n      class=\"ant-select-selection__choice\">\r\n      <div class=\"ant-select-selection__choice__content\">\r\n        <ng-container *ngIf=\"nzMaxTagPlaceholder\">\r\n          <ng-template\r\n            [ngTemplateOutlet]=\"nzMaxTagPlaceholder\"\r\n            [ngTemplateOutletContext]=\"{ $implicit: nzSelectService.listOfSelectedValue | slice: nzMaxTagCount}\">\r\n          </ng-template>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"!nzMaxTagPlaceholder\">\r\n          + {{ nzSelectService.listOfCachedSelectedOption.length - nzMaxTagCount }} ...\r\n        </ng-container>\r\n      </div>\r\n    </li>\r\n    <li class=\"ant-select-search ant-select-search--inline\">\r\n      <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\r\n    </li>\r\n  </ul>\r\n</div>\r\n<span *ngIf=\"nzAllowClear && nzSelectService.listOfSelectedValue.length\"\r\n  class=\"ant-select-selection__clear\"\r\n  nz-select-unselectable\r\n  (mousedown)=\"$event.preventDefault()\"\r\n  (click)=\"onClearSelection($event)\">\r\n    <i nz-icon nzType=\"close-circle\" nzTheme=\"fill\" *ngIf=\"!nzClearIcon; else nzClearIcon\" class=\"ant-select-close-icon\"></i>\r\n  </span>\r\n<span class=\"ant-select-arrow\" nz-select-unselectable *ngIf=\"nzShowArrow\">\r\n  <i nz-icon nzType=\"loading\" *ngIf=\"nzLoading; else defaultArrow\"></i>\r\n  <ng-template #defaultArrow>\r\n    <i nz-icon nzType=\"down\" class=\"ant-select-arrow-icon\" *ngIf=\"!nzSuffixIcon; else nzSuffixIcon\"></i>\r\n  </ng-template>\r\n</span>"
            }]
    }], function () { return [{ type: ɵngcc0.Renderer2 }, { type: NzSelectService }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc4.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { nzShowSearch: [{
            type: Input
        }], nzOpen: [{
            type: Input
        }], nzAllowClear: [{
            type: Input
        }], nzShowArrow: [{
            type: Input
        }], nzLoading: [{
            type: Input
        }], nzTokenSeparators: [{
            type: Input
        }], inputElement: [{
            type: ViewChild,
            args: ['inputElement', { static: false }]
        }], mirrorElement: [{
            type: ViewChild,
            args: ['mirrorElement', { static: false }]
        }], nzPlaceHolder: [{
            type: Input
        }], nzMaxTagCount: [{
            type: Input
        }], nzCustomTemplate: [{
            type: Input
        }], nzSuffixIcon: [{
            type: Input
        }], nzClearIcon: [{
            type: Input
        }], nzRemoveIcon: [{
            type: Input
        }], nzMaxTagPlaceholder: [{
            type: Input
        }] }); })();
    return NzSelectTopControlComponent;
}());
if (false) {
    /** @type {?} */
    NzSelectTopControlComponent.prototype.inputValue;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.isComposing;
    /**
     * @type {?}
     * @private
     */
    NzSelectTopControlComponent.prototype.destroy$;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.inputElement;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.mirrorElement;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.nzShowSearch;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.nzPlaceHolder;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.nzOpen;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.nzMaxTagCount;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.nzAllowClear;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.nzShowArrow;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.nzLoading;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.nzCustomTemplate;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.nzSuffixIcon;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.nzClearIcon;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.nzRemoveIcon;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.nzMaxTagPlaceholder;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.nzTokenSeparators;
    /**
     * @type {?}
     * @private
     */
    NzSelectTopControlComponent.prototype.renderer;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.nzSelectService;
    /**
     * @type {?}
     * @private
     */
    NzSelectTopControlComponent.prototype.cdr;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.noAnimation;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzSelectComponent = /** @class */ (function () {
    function NzSelectComponent(renderer, nzSelectService, cdr, platform, elementRef, noAnimation) {
        this.nzSelectService = nzSelectService;
        this.cdr = cdr;
        this.platform = platform;
        this.noAnimation = noAnimation;
        this.open = false;
        this.onChange = (/**
         * @return {?}
         */
        function () { return null; });
        this.onTouched = (/**
         * @return {?}
         */
        function () { return null; });
        this.dropDownPosition = 'bottom';
        this._disabled = false;
        this.isInit = false;
        this.destroy$ = new Subject();
        this.nzOnSearch = new EventEmitter();
        this.nzScrollToBottom = new EventEmitter();
        this.nzOpenChange = new EventEmitter();
        this.nzBlur = new EventEmitter();
        this.nzFocus = new EventEmitter();
        this.nzSize = 'default';
        this.nzDropdownMatchSelectWidth = true;
        this.nzAllowClear = false;
        this.nzShowSearch = false;
        this.nzLoading = false;
        this.nzAutoFocus = false;
        this.nzShowArrow = true;
        this.nzTokenSeparators = [];
        this.nzAriaLabel = null;
        renderer.addClass(elementRef.nativeElement, 'ant-select');
    }
    Object.defineProperty(NzSelectComponent.prototype, "nzAutoClearSearchValue", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.nzSelectService.autoClearSearchValue = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectComponent.prototype, "nzMaxMultipleCount", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.nzSelectService.maxMultipleCount = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectComponent.prototype, "nzServerSearch", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.nzSelectService.serverSearch = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectComponent.prototype, "nzMode", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.nzSelectService.mode = value;
            this.nzSelectService.check();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectComponent.prototype, "nzFilterOption", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.nzSelectService.filterOption = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectComponent.prototype, "compareWith", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.nzSelectService.compareWith = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectComponent.prototype, "nzOpen", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.open = value;
            this.nzSelectService.setOpenState(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectComponent.prototype, "nzDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = toBoolean(value);
            this.nzSelectService.disabled = this._disabled;
            this.nzSelectService.check();
            if (this.nzDisabled && this.isInit) {
                this.closeDropDown();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectComponent.prototype, "nzSelectTopControlDOM", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzSelectTopControlElement && this.nzSelectTopControlElement.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.updateAutoFocus = /**
     * @return {?}
     */
    function () {
        if (this.nzSelectTopControlDOM && this.nzAutoFocus) {
            this.nzSelectTopControlDOM.focus();
        }
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        if (this.nzSelectTopControlDOM) {
            this.nzSelectTopControlDOM.focus();
        }
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        if (this.nzSelectTopControlDOM) {
            this.nzSelectTopControlDOM.blur();
        }
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.onFocus = /**
     * @return {?}
     */
    function () {
        this.nzFocus.emit();
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this.nzBlur.emit();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzSelectComponent.prototype.onKeyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.nzSelectService.onKeyDown(event);
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.toggleDropDown = /**
     * @return {?}
     */
    function () {
        if (!this.nzDisabled) {
            this.nzSelectService.setOpenState(!this.open);
        }
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.closeDropDown = /**
     * @return {?}
     */
    function () {
        this.nzSelectService.setOpenState(false);
    };
    /**
     * @param {?} position
     * @return {?}
     */
    NzSelectComponent.prototype.onPositionChange = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        this.dropDownPosition = position.connectionPair.originY;
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.updateCdkConnectedOverlayStatus = /**
     * @return {?}
     */
    function () {
        if (this.platform.isBrowser) {
            this.triggerWidth = this.cdkOverlayOrigin.elementRef.nativeElement.getBoundingClientRect().width;
        }
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.updateCdkConnectedOverlayPositions = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (_this.cdkConnectedOverlay && _this.cdkConnectedOverlay.overlayRef) {
                _this.cdkConnectedOverlay.overlayRef.updatePosition();
            }
        }));
    };
    /** update ngModel -> update listOfSelectedValue **/
    // tslint:disable-next-line:no-any
    /**
     * update ngModel -> update listOfSelectedValue *
     * @param {?} value
     * @return {?}
     */
    // tslint:disable-next-line:no-any
    NzSelectComponent.prototype.writeValue = /**
     * update ngModel -> update listOfSelectedValue *
     * @param {?} value
     * @return {?}
     */
    // tslint:disable-next-line:no-any
    function (value) {
        this.value = value;
        /** @type {?} */
        var listValue = [];
        if (isNotNil(value)) {
            if (this.nzSelectService.isMultipleOrTags) {
                listValue = value;
            }
            else {
                listValue = [value];
            }
        }
        this.nzSelectService.updateListOfSelectedValue(listValue, false);
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzSelectComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzSelectComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NzSelectComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.nzDisabled = isDisabled;
        this.cdr.markForCheck();
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.nzSelectService.animationEvent$
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.updateCdkConnectedOverlayPositions(); }));
        this.nzSelectService.searchValue$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.nzOnSearch.emit(data);
            _this.updateCdkConnectedOverlayPositions();
        }));
        this.nzSelectService.modelChange$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} modelValue
         * @return {?}
         */
        function (modelValue) {
            if (_this.value !== modelValue) {
                _this.value = modelValue;
                _this.onChange(_this.value);
            }
        }));
        this.nzSelectService.open$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (_this.open !== value) {
                _this.nzOpenChange.emit(value);
            }
            if (value) {
                _this.focus();
                _this.updateCdkConnectedOverlayStatus();
            }
            else {
                _this.blur();
                _this.onTouched();
            }
            _this.open = value;
            _this.nzSelectService.clearInput();
        }));
        this.nzSelectService.check$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.updateCdkConnectedOverlayStatus();
        this.updateAutoFocus();
        this.isInit = true;
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.listOfNzOptionGroupComponent.changes
            .pipe(startWith(true), flatMap((/**
         * @return {?}
         */
        function () {
            return merge.apply(void 0, __spread([_this.listOfNzOptionGroupComponent.changes,
                _this.listOfNzOptionComponent.changes], _this.listOfNzOptionComponent.map((/**
             * @param {?} option
             * @return {?}
             */
            function (option) { return option.changes; })), _this.listOfNzOptionGroupComponent.map((/**
             * @param {?} group
             * @return {?}
             */
            function (group) {
                return group.listOfNzOptionComponent ? group.listOfNzOptionComponent.changes : EMPTY;
            })))).pipe(startWith(true));
        })))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.nzSelectService.updateTemplateOption(_this.listOfNzOptionComponent.toArray(), _this.listOfNzOptionGroupComponent.toArray());
        }));
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /** @nocollapse */
    NzSelectComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: NzSelectService },
        { type: ChangeDetectorRef },
        { type: Platform },
        { type: ElementRef },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    NzSelectComponent.propDecorators = {
        cdkOverlayOrigin: [{ type: ViewChild, args: [CdkOverlayOrigin, { static: false },] }],
        cdkConnectedOverlay: [{ type: ViewChild, args: [CdkConnectedOverlay, { static: false },] }],
        nzSelectTopControlComponent: [{ type: ViewChild, args: [NzSelectTopControlComponent, { static: true },] }],
        nzSelectTopControlElement: [{ type: ViewChild, args: [NzSelectTopControlComponent, { static: true, read: ElementRef },] }],
        listOfNzOptionComponent: [{ type: ContentChildren, args: [NzOptionComponent,] }],
        listOfNzOptionGroupComponent: [{ type: ContentChildren, args: [NzOptionGroupComponent,] }],
        nzOnSearch: [{ type: Output }],
        nzScrollToBottom: [{ type: Output }],
        nzOpenChange: [{ type: Output }],
        nzBlur: [{ type: Output }],
        nzFocus: [{ type: Output }],
        nzSize: [{ type: Input }],
        nzDropdownClassName: [{ type: Input }],
        nzDropdownMatchSelectWidth: [{ type: Input }],
        nzDropdownStyle: [{ type: Input }],
        nzNotFoundContent: [{ type: Input }],
        nzAllowClear: [{ type: Input }],
        nzShowSearch: [{ type: Input }],
        nzLoading: [{ type: Input }],
        nzAutoFocus: [{ type: Input }],
        nzPlaceHolder: [{ type: Input }],
        nzMaxTagCount: [{ type: Input }],
        nzDropdownRender: [{ type: Input }],
        nzCustomTemplate: [{ type: Input }],
        nzSuffixIcon: [{ type: Input }],
        nzClearIcon: [{ type: Input }],
        nzRemoveIcon: [{ type: Input }],
        nzMenuItemSelectedIcon: [{ type: Input }],
        nzShowArrow: [{ type: Input }],
        nzTokenSeparators: [{ type: Input }],
        nzMaxTagPlaceholder: [{ type: Input }],
        nzAutoClearSearchValue: [{ type: Input }],
        nzMaxMultipleCount: [{ type: Input }],
        nzServerSearch: [{ type: Input }],
        nzMode: [{ type: Input }],
        nzFilterOption: [{ type: Input }],
        compareWith: [{ type: Input }],
        nzOpen: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzAriaLabel: [{ type: Input }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzSelectComponent.prototype, "nzAllowClear", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzSelectComponent.prototype, "nzShowSearch", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzSelectComponent.prototype, "nzLoading", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzSelectComponent.prototype, "nzAutoFocus", void 0);
NzSelectComponent.ɵfac = function NzSelectComponent_Factory(t) { return new (t || NzSelectComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(NzSelectService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc6.Platform), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc4.NzNoAnimationDirective, 9)); };
NzSelectComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzSelectComponent, selectors: [["nz-select"]], contentQueries: function NzSelectComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzOptionComponent, false);
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzOptionGroupComponent, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.listOfNzOptionComponent = _t);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.listOfNzOptionGroupComponent = _t);
    } }, viewQuery: function NzSelectComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(CdkOverlayOrigin, true);
        ɵngcc0.ɵɵviewQuery(CdkConnectedOverlay, true);
        ɵngcc0.ɵɵstaticViewQuery(NzSelectTopControlComponent, true);
        ɵngcc0.ɵɵstaticViewQuery(NzSelectTopControlComponent, true, ElementRef);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.cdkOverlayOrigin = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.cdkConnectedOverlay = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nzSelectTopControlComponent = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nzSelectTopControlElement = _t.first);
    } }, hostVars: 14, hostBindings: function NzSelectComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function NzSelectComponent_click_HostBindingHandler() { return ctx.toggleDropDown(); });
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-select-lg", ctx.nzSize === "large")("ant-select-sm", ctx.nzSize === "small")("ant-select-enabled", !ctx.nzDisabled)("ant-select-no-arrow", !ctx.nzShowArrow)("ant-select-disabled", ctx.nzDisabled)("ant-select-allow-clear", ctx.nzAllowClear)("ant-select-open", ctx.open);
    } }, inputs: { nzSize: "nzSize", nzDropdownMatchSelectWidth: "nzDropdownMatchSelectWidth", nzAllowClear: "nzAllowClear", nzShowSearch: "nzShowSearch", nzLoading: "nzLoading", nzAutoFocus: "nzAutoFocus", nzShowArrow: "nzShowArrow", nzTokenSeparators: "nzTokenSeparators", nzAriaLabel: "nzAriaLabel", nzAutoClearSearchValue: "nzAutoClearSearchValue", nzMaxMultipleCount: "nzMaxMultipleCount", nzServerSearch: "nzServerSearch", nzMode: "nzMode", nzFilterOption: "nzFilterOption", compareWith: "compareWith", nzOpen: "nzOpen", nzDisabled: "nzDisabled", nzDropdownClassName: "nzDropdownClassName", nzDropdownStyle: "nzDropdownStyle", nzNotFoundContent: "nzNotFoundContent", nzPlaceHolder: "nzPlaceHolder", nzMaxTagCount: "nzMaxTagCount", nzDropdownRender: "nzDropdownRender", nzCustomTemplate: "nzCustomTemplate", nzSuffixIcon: "nzSuffixIcon", nzClearIcon: "nzClearIcon", nzRemoveIcon: "nzRemoveIcon", nzMenuItemSelectedIcon: "nzMenuItemSelectedIcon", nzMaxTagPlaceholder: "nzMaxTagPlaceholder" }, outputs: { nzOnSearch: "nzOnSearch", nzScrollToBottom: "nzScrollToBottom", nzOpenChange: "nzOpenChange", nzBlur: "nzBlur", nzFocus: "nzFocus" }, exportAs: ["nzSelect"], features: [ɵngcc0.ɵɵProvidersFeature([
            NzSelectService,
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(( /**
                 * @return {?}
                 */function () { return NzSelectComponent; })),
                multi: true
            }
        ])], ngContentSelectors: _c0, decls: 3, vars: 25, consts: [["cdkOverlayOrigin", "", "nz-select-top-control", "", "tabindex", "0", 1, "ant-select-selection", 3, "nzOpen", "nzNoAnimation", "nzMaxTagPlaceholder", "nzPlaceHolder", "nzAllowClear", "nzMaxTagCount", "nzShowArrow", "nzLoading", "nzCustomTemplate", "nzSuffixIcon", "nzClearIcon", "nzRemoveIcon", "nzShowSearch", "nzTokenSeparators", "focus", "blur", "keydown"], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayWidth", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "backdropClick", "detach", "positionChange"], [1, "ant-select-dropdown", 3, "nzClassListAdd", "nzNoAnimation", "ngStyle"], ["nz-option-container", "", 2, "overflow", "auto", "transform", "translateZ(0px)", 3, "nzMenuItemSelectedIcon", "nzNotFoundContent", "keydown", "nzScrollToBottom"], [3, "ngTemplateOutlet"]], template: function NzSelectComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵlistener("focus", function NzSelectComponent_Template_div_focus_0_listener() { return ctx.onFocus(); })("blur", function NzSelectComponent_Template_div_blur_0_listener() { return ctx.onBlur(); })("keydown", function NzSelectComponent_Template_div_keydown_0_listener($event) { return ctx.onKeyDown($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(1, NzSelectComponent_ng_template_1_Template, 3, 18, "ng-template", 1);
        ɵngcc0.ɵɵlistener("backdropClick", function NzSelectComponent_Template_ng_template_backdropClick_1_listener() { return ctx.closeDropDown(); })("detach", function NzSelectComponent_Template_ng_template_detach_1_listener() { return ctx.closeDropDown(); })("positionChange", function NzSelectComponent_Template_ng_template_positionChange_1_listener($event) { return ctx.onPositionChange($event); });
        ɵngcc0.ɵɵtemplate(2, NzSelectComponent_ng_template_2_Template, 1, 0, "ng-template");
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-select-selection--single", ctx.nzSelectService.isSingleMode)("ant-select-selection--multiple", ctx.nzSelectService.isMultipleOrTags);
        ɵngcc0.ɵɵproperty("nzOpen", ctx.open)("@.disabled", ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation)("nzNoAnimation", ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation)("nzMaxTagPlaceholder", ctx.nzMaxTagPlaceholder)("nzPlaceHolder", ctx.nzPlaceHolder)("nzAllowClear", ctx.nzAllowClear)("nzMaxTagCount", ctx.nzMaxTagCount)("nzShowArrow", ctx.nzShowArrow)("nzLoading", ctx.nzLoading)("nzCustomTemplate", ctx.nzCustomTemplate)("nzSuffixIcon", ctx.nzSuffixIcon)("nzClearIcon", ctx.nzClearIcon)("nzRemoveIcon", ctx.nzRemoveIcon)("nzShowSearch", ctx.nzShowSearch)("nzTokenSeparators", ctx.nzTokenSeparators);
        ɵngcc0.ɵɵattribute("aria-label", ctx.nzAriaLabel);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("cdkConnectedOverlayHasBackdrop", true)("cdkConnectedOverlayMinWidth", ctx.nzDropdownMatchSelectWidth ? null : ctx.triggerWidth)("cdkConnectedOverlayWidth", ctx.nzDropdownMatchSelectWidth ? ctx.triggerWidth : null)("cdkConnectedOverlayOrigin", ctx.cdkOverlayOrigin)("cdkConnectedOverlayOpen", ctx.open);
    } }, directives: [ɵngcc7.CdkOverlayOrigin, NzSelectTopControlComponent, ɵngcc4.NzNoAnimationDirective, ɵngcc7.CdkConnectedOverlay, ɵngcc4.NzConnectedOverlayDirective, ɵngcc4.NzClassListAddDirective, ɵngcc1.NgStyle, NzOptionContainerComponent, ɵngcc1.NgTemplateOutlet], styles: ["\n      .ant-select-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "], encapsulation: 2, data: { animation: [slideMotion] }, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzSelectComponent, [{
        type: Component,
        args: [{
                selector: 'nz-select',
                exportAs: 'nzSelect',
                preserveWhitespaces: false,
                providers: [
                    NzSelectService,
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(( /**
                         * @return {?}
                         */function () { return NzSelectComponent; })),
                        multi: true
                    }
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                animations: [slideMotion],
                template: "<div cdkOverlayOrigin\r\n  nz-select-top-control\r\n  tabindex=\"0\"\r\n  class=\"ant-select-selection\"\r\n  [nzOpen]=\"open\"\r\n  [@.disabled]=\"noAnimation?.nzNoAnimation\"\r\n  [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n  [nzMaxTagPlaceholder]=\"nzMaxTagPlaceholder\"\r\n  [nzPlaceHolder]=\"nzPlaceHolder\"\r\n  [nzAllowClear]=\"nzAllowClear\"\r\n  [nzMaxTagCount]=\"nzMaxTagCount\"\r\n  [nzShowArrow]=\"nzShowArrow\"\r\n  [nzLoading]=\"nzLoading\"\r\n  [nzCustomTemplate]=\"nzCustomTemplate\"\r\n  [nzSuffixIcon]=\"nzSuffixIcon\"\r\n  [nzClearIcon]=\"nzClearIcon\"\r\n  [nzRemoveIcon]=\"nzRemoveIcon\"\r\n  [nzShowSearch]=\"nzShowSearch\"\r\n  [nzTokenSeparators]=\"nzTokenSeparators\"\r\n  [class.ant-select-selection--single]=\"nzSelectService.isSingleMode\"\r\n  [class.ant-select-selection--multiple]=\"nzSelectService.isMultipleOrTags\"\r\n  (focus)=\"onFocus()\"\r\n  (blur)=\"onBlur()\"\r\n  (keydown)=\"onKeyDown($event)\"\r\n  [attr.aria-label]=\"nzAriaLabel\">\r\n</div>\r\n<ng-template\r\n  cdkConnectedOverlay\r\n  nzConnectedOverlay\r\n  [cdkConnectedOverlayHasBackdrop]=\"true\"\r\n  [cdkConnectedOverlayMinWidth]=\"nzDropdownMatchSelectWidth? null : triggerWidth\"\r\n  [cdkConnectedOverlayWidth]=\"nzDropdownMatchSelectWidth? triggerWidth : null\"\r\n  [cdkConnectedOverlayOrigin]=\"cdkOverlayOrigin\"\r\n  (backdropClick)=\"closeDropDown()\"\r\n  (detach)=\"closeDropDown();\"\r\n  (positionChange)=\"onPositionChange($event)\"\r\n  [cdkConnectedOverlayOpen]=\"open\">\r\n  <div\r\n    class=\"ant-select-dropdown\"\r\n    [class.ant-select-dropdown--single]=\"nzSelectService.isSingleMode\"\r\n    [class.ant-select-dropdown--multiple]=\"nzSelectService.isMultipleOrTags\"\r\n    [class.ant-select-dropdown-placement-bottomLeft]=\"dropDownPosition === 'bottom'\"\r\n    [class.ant-select-dropdown-placement-topLeft]=\"dropDownPosition === 'top'\"\r\n    [nzClassListAdd]=\"[nzDropdownClassName]\"\r\n    [@slideMotion]=\"dropDownPosition\"\r\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\r\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n    [ngStyle]=\"nzDropdownStyle\">\r\n    <div nz-option-container\r\n      style=\"overflow: auto;transform: translateZ(0px);\"\r\n      (keydown)=\"onKeyDown($event)\"\r\n      [nzMenuItemSelectedIcon]=\"nzMenuItemSelectedIcon\"\r\n      [nzNotFoundContent]=\"nzNotFoundContent\"\r\n      (nzScrollToBottom)=\"nzScrollToBottom.emit()\">\r\n    </div>\r\n    <ng-template [ngTemplateOutlet]=\"nzDropdownRender\"></ng-template>\r\n  </div>\r\n</ng-template>\r\n<!--can not use ViewChild since it will match sub options in option group -->\r\n<ng-template>\r\n  <ng-content></ng-content>\r\n</ng-template>",
                host: {
                    '[class.ant-select-lg]': 'nzSize==="large"',
                    '[class.ant-select-sm]': 'nzSize==="small"',
                    '[class.ant-select-enabled]': '!nzDisabled',
                    '[class.ant-select-no-arrow]': '!nzShowArrow',
                    '[class.ant-select-disabled]': 'nzDisabled',
                    '[class.ant-select-allow-clear]': 'nzAllowClear',
                    '[class.ant-select-open]': 'open',
                    '(click)': 'toggleDropDown()'
                },
                styles: ["\n      .ant-select-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "]
            }]
    }], function () { return [{ type: ɵngcc0.Renderer2 }, { type: NzSelectService }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc6.Platform }, { type: ɵngcc0.ElementRef }, { type: ɵngcc4.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { nzOnSearch: [{
            type: Output
        }], nzScrollToBottom: [{
            type: Output
        }], nzOpenChange: [{
            type: Output
        }], nzBlur: [{
            type: Output
        }], nzFocus: [{
            type: Output
        }], nzSize: [{
            type: Input
        }], nzDropdownMatchSelectWidth: [{
            type: Input
        }], nzAllowClear: [{
            type: Input
        }], nzShowSearch: [{
            type: Input
        }], nzLoading: [{
            type: Input
        }], nzAutoFocus: [{
            type: Input
        }], nzShowArrow: [{
            type: Input
        }], nzTokenSeparators: [{
            type: Input
        }], nzAriaLabel: [{
            type: Input
        }], nzAutoClearSearchValue: [{
            type: Input
        }], nzMaxMultipleCount: [{
            type: Input
        }], nzServerSearch: [{
            type: Input
        }], nzMode: [{
            type: Input
        }], nzFilterOption: [{
            type: Input
        }], compareWith: [{
            type: Input
        }], nzOpen: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }], cdkOverlayOrigin: [{
            type: ViewChild,
            args: [CdkOverlayOrigin, { static: false }]
        }], cdkConnectedOverlay: [{
            type: ViewChild,
            args: [CdkConnectedOverlay, { static: false }]
        }], nzSelectTopControlComponent: [{
            type: ViewChild,
            args: [NzSelectTopControlComponent, { static: true }]
        }], nzSelectTopControlElement: [{
            type: ViewChild,
            args: [NzSelectTopControlComponent, { static: true, read: ElementRef }]
        }], listOfNzOptionComponent: [{
            type: ContentChildren,
            args: [NzOptionComponent]
        }], listOfNzOptionGroupComponent: [{
            type: ContentChildren,
            args: [NzOptionGroupComponent]
        }], nzDropdownClassName: [{
            type: Input
        }], nzDropdownStyle: [{
            type: Input
        }], nzNotFoundContent: [{
            type: Input
        }], nzPlaceHolder: [{
            type: Input
        }], nzMaxTagCount: [{
            type: Input
        }], nzDropdownRender: [{
            type: Input
        }], nzCustomTemplate: [{
            type: Input
        }], nzSuffixIcon: [{
            type: Input
        }], nzClearIcon: [{
            type: Input
        }], nzRemoveIcon: [{
            type: Input
        }], nzMenuItemSelectedIcon: [{
            type: Input
        }], nzMaxTagPlaceholder: [{
            type: Input
        }] }); })();
    return NzSelectComponent;
}());
if (false) {
    /** @type {?} */
    NzSelectComponent.prototype.open;
    /** @type {?} */
    NzSelectComponent.prototype.value;
    /** @type {?} */
    NzSelectComponent.prototype.onChange;
    /** @type {?} */
    NzSelectComponent.prototype.onTouched;
    /** @type {?} */
    NzSelectComponent.prototype.dropDownPosition;
    /** @type {?} */
    NzSelectComponent.prototype.triggerWidth;
    /**
     * @type {?}
     * @private
     */
    NzSelectComponent.prototype._disabled;
    /**
     * @type {?}
     * @private
     */
    NzSelectComponent.prototype.isInit;
    /**
     * @type {?}
     * @private
     */
    NzSelectComponent.prototype.destroy$;
    /** @type {?} */
    NzSelectComponent.prototype.cdkOverlayOrigin;
    /** @type {?} */
    NzSelectComponent.prototype.cdkConnectedOverlay;
    /** @type {?} */
    NzSelectComponent.prototype.nzSelectTopControlComponent;
    /** @type {?} */
    NzSelectComponent.prototype.nzSelectTopControlElement;
    /**
     * should move to nz-option-container when https://github.com/angular/angular/issues/20810 resolved *
     * @type {?}
     */
    NzSelectComponent.prototype.listOfNzOptionComponent;
    /** @type {?} */
    NzSelectComponent.prototype.listOfNzOptionGroupComponent;
    /** @type {?} */
    NzSelectComponent.prototype.nzOnSearch;
    /** @type {?} */
    NzSelectComponent.prototype.nzScrollToBottom;
    /** @type {?} */
    NzSelectComponent.prototype.nzOpenChange;
    /** @type {?} */
    NzSelectComponent.prototype.nzBlur;
    /** @type {?} */
    NzSelectComponent.prototype.nzFocus;
    /** @type {?} */
    NzSelectComponent.prototype.nzSize;
    /** @type {?} */
    NzSelectComponent.prototype.nzDropdownClassName;
    /** @type {?} */
    NzSelectComponent.prototype.nzDropdownMatchSelectWidth;
    /** @type {?} */
    NzSelectComponent.prototype.nzDropdownStyle;
    /** @type {?} */
    NzSelectComponent.prototype.nzNotFoundContent;
    /** @type {?} */
    NzSelectComponent.prototype.nzAllowClear;
    /** @type {?} */
    NzSelectComponent.prototype.nzShowSearch;
    /** @type {?} */
    NzSelectComponent.prototype.nzLoading;
    /** @type {?} */
    NzSelectComponent.prototype.nzAutoFocus;
    /** @type {?} */
    NzSelectComponent.prototype.nzPlaceHolder;
    /** @type {?} */
    NzSelectComponent.prototype.nzMaxTagCount;
    /** @type {?} */
    NzSelectComponent.prototype.nzDropdownRender;
    /** @type {?} */
    NzSelectComponent.prototype.nzCustomTemplate;
    /** @type {?} */
    NzSelectComponent.prototype.nzSuffixIcon;
    /** @type {?} */
    NzSelectComponent.prototype.nzClearIcon;
    /** @type {?} */
    NzSelectComponent.prototype.nzRemoveIcon;
    /** @type {?} */
    NzSelectComponent.prototype.nzMenuItemSelectedIcon;
    /** @type {?} */
    NzSelectComponent.prototype.nzShowArrow;
    /** @type {?} */
    NzSelectComponent.prototype.nzTokenSeparators;
    /** @type {?} */
    NzSelectComponent.prototype.nzMaxTagPlaceholder;
    /** @type {?} */
    NzSelectComponent.prototype.nzAriaLabel;
    /** @type {?} */
    NzSelectComponent.prototype.nzSelectService;
    /**
     * @type {?}
     * @private
     */
    NzSelectComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzSelectComponent.prototype.platform;
    /** @type {?} */
    NzSelectComponent.prototype.noAnimation;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzSelectUnselectableDirective = /** @class */ (function () {
    function NzSelectUnselectableDirective() {
    }
NzSelectUnselectableDirective.ɵfac = function NzSelectUnselectableDirective_Factory(t) { return new (t || NzSelectUnselectableDirective)(); };
NzSelectUnselectableDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzSelectUnselectableDirective, selectors: [["", "nz-select-unselectable", ""]], hostVars: 3, hostBindings: function NzSelectUnselectableDirective_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵattribute("unselectable", "unselectable");
        ɵngcc0.ɵɵstyleProp("user-select", "none");
    } }, exportAs: ["nzSelectUnselectable"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzSelectUnselectableDirective, [{
        type: Directive,
        args: [{
                selector: '[nz-select-unselectable]',
                exportAs: 'nzSelectUnselectable',
                host: {
                    '[attr.unselectable]': '"unselectable"',
                    '[style.user-select]': '"none"'
                }
            }]
    }], function () { return []; }, null); })();
    return NzSelectUnselectableDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzSelectModule = /** @class */ (function () {
    function NzSelectModule() {
    }
NzSelectModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzSelectModule });
NzSelectModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzSelectModule_Factory(t) { return new (t || NzSelectModule)(); }, imports: [[
            CommonModule,
            NzI18nModule,
            FormsModule,
            PlatformModule,
            OverlayModule,
            NzIconModule,
            NzAddOnModule,
            NzEmptyModule,
            NzOverlayModule,
            NzNoAnimationModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzSelectModule, { declarations: function () { return [NzFilterGroupOptionPipe,
        NzFilterOptionPipe,
        NzOptionComponent,
        NzSelectComponent,
        NzOptionContainerComponent,
        NzOptionGroupComponent,
        NzOptionLiComponent,
        NzSelectTopControlComponent,
        NzSelectUnselectableDirective]; }, imports: function () { return [CommonModule,
        NzI18nModule,
        FormsModule,
        PlatformModule,
        OverlayModule,
        NzIconModule,
        NzAddOnModule,
        NzEmptyModule,
        NzOverlayModule,
        NzNoAnimationModule]; }, exports: function () { return [NzOptionComponent,
        NzSelectComponent,
        NzOptionContainerComponent,
        NzOptionGroupComponent,
        NzSelectTopControlComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzSelectModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    NzI18nModule,
                    FormsModule,
                    PlatformModule,
                    OverlayModule,
                    NzIconModule,
                    NzAddOnModule,
                    NzEmptyModule,
                    NzOverlayModule,
                    NzNoAnimationModule
                ],
                declarations: [
                    NzFilterGroupOptionPipe,
                    NzFilterOptionPipe,
                    NzOptionComponent,
                    NzSelectComponent,
                    NzOptionContainerComponent,
                    NzOptionGroupComponent,
                    NzOptionLiComponent,
                    NzSelectTopControlComponent,
                    NzSelectUnselectableDirective
                ],
                exports: [
                    NzOptionComponent,
                    NzSelectComponent,
                    NzOptionContainerComponent,
                    NzOptionGroupComponent,
                    NzSelectTopControlComponent
                ]
            }]
    }], function () { return []; }, null); })();
    return NzSelectModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzFilterGroupOptionPipe, NzFilterOptionPipe, NzOptionComponent, NzOptionContainerComponent, NzOptionGroupComponent, NzOptionLiComponent, NzSelectComponent, NzSelectModule, NzSelectService, NzSelectTopControlComponent, NzSelectUnselectableDirective, defaultFilterOption };


//# sourceMappingURL=ng-zorro-antd-select.js.map