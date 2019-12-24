import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { FocusTrapFactory } from '@angular/cdk/a11y';
import { ESCAPE } from '@angular/cdk/keycodes';
import { Overlay, OverlayKeyboardDispatcher, OverlayRef } from '@angular/cdk/overlay';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentFactoryResolver, ContentChild, ElementRef, EventEmitter, Inject, Injector, Input, Optional, Output, TemplateRef, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { getElementOffset, InputBoolean, isPromise, NzConfigService, warnDeprecation, WithConfig } from 'ng-zorro-antd/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { NZ_MODAL_CONFIG } from './nz-modal-config';
import { NzModalControlService } from './nz-modal-control.service';
import { NzModalFooterDirective } from './nz-modal-footer.directive';
import { NzModalRef } from './nz-modal-ref.class';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
import * as i2 from "@angular/cdk/overlay";
import * as i3 from "ng-zorro-antd/i18n";
import * as i4 from "./nz-modal-control.service";
import * as i5 from "@angular/cdk/a11y";
import * as i6 from "@angular/common";
import * as i7 from "ng-zorro-antd/icon";
import * as i8 from "ng-zorro-antd/button";
const _c0 = ["modalContainer"];
const _c1 = ["bodyContainer"];
const _c2 = ["autoFocusButtonOk"];
function NzModalComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
function NzModalComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 11);
} if (rf & 2) {
    const ctx_r1256 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("z-index", ctx_r1256.nzZIndex);
    i0.ɵɵclassProp("ant-modal-mask-hidden", ctx_r1256.hidden);
    i0.ɵɵproperty("ngClass", ctx_r1256.maskAnimationClassMap)("ngStyle", ctx_r1256.nzMaskStyle);
} }
function NzModalComponent_button_9_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "i", 15);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1264 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzType", ctx_r1264.nzCloseIcon);
} }
function NzModalComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r1266 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 12);
    i0.ɵɵlistener("click", function NzModalComponent_button_9_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r1266); const ctx_r1265 = i0.ɵɵnextContext(); return ctx_r1265.onClickCloseBtn(); });
    i0.ɵɵelementStart(1, "span", 13);
    i0.ɵɵtemplate(2, NzModalComponent_button_9_ng_container_2_Template, 2, 1, "ng-container", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1258 = i0.ɵɵnextContext();
    i0.ɵɵattribute("aria-label", ctx_r1258.nzAriaLabel);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r1258.nzCloseIcon);
} }
function NzModalComponent_ng_container_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 18);
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const _r1260 = i0.ɵɵreference(12);
    i0.ɵɵproperty("ngTemplateOutlet", _r1260);
} }
function NzModalComponent_ng_container_10_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 18);
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const _r1262 = i0.ɵɵreference(14);
    i0.ɵɵproperty("ngTemplateOutlet", _r1262);
} }
function NzModalComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 16);
    i0.ɵɵtemplate(1, NzModalComponent_ng_container_10_ng_container_1_Template, 1, 1, "ng-container", 17);
    i0.ɵɵtemplate(2, NzModalComponent_ng_container_10_ng_container_2_Template, 1, 1, "ng-container", 17);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1259 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngSwitch", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r1259.isModalType("default"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r1259.isModalType("confirm"));
} }
function NzModalComponent_ng_template_11_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 18);
} if (rf & 2) {
    const ctx_r1273 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1273.nzTitle);
} }
function NzModalComponent_ng_template_11_div_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 26);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1274 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", ctx_r1274.nzTitle, i0.ɵɵsanitizeHtml);
} }
function NzModalComponent_ng_template_11_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵelementStart(1, "div", 24);
    i0.ɵɵelementContainerStart(2, 16);
    i0.ɵɵtemplate(3, NzModalComponent_ng_template_11_div_0_ng_container_3_Template, 1, 1, "ng-container", 17);
    i0.ɵɵtemplate(4, NzModalComponent_ng_template_11_div_0_ng_container_4_Template, 2, 1, "ng-container", 25);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1269 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngSwitch", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r1269.isTemplateRef(ctx_r1269.nzTitle));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r1269.isNonEmptyString(ctx_r1269.nzTitle));
} }
function NzModalComponent_ng_template_11_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 18);
} if (rf & 2) {
    const ctx_r1275 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1275.nzContent);
} }
function NzModalComponent_ng_template_11_ng_container_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 26);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1276 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", ctx_r1276.nzContent, i0.ɵɵsanitizeHtml);
} }
function NzModalComponent_ng_template_11_ng_container_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 18);
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const _r1254 = i0.ɵɵreference(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r1254);
} }
function NzModalComponent_ng_template_11_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 16);
    i0.ɵɵtemplate(1, NzModalComponent_ng_template_11_ng_container_4_ng_container_1_Template, 1, 1, "ng-container", 17);
    i0.ɵɵtemplate(2, NzModalComponent_ng_template_11_ng_container_4_ng_container_2_Template, 2, 1, "ng-container", 25);
    i0.ɵɵtemplate(3, NzModalComponent_ng_template_11_ng_container_4_ng_container_3_Template, 1, 1, "ng-container", 27);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1271 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngSwitch", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r1271.isTemplateRef(ctx_r1271.nzContent));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r1271.isNonEmptyString(ctx_r1271.nzContent));
} }
function NzModalComponent_ng_template_11_div_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 18);
} if (rf & 2) {
    const ctx_r1278 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1278.nzFooter);
} }
function NzModalComponent_ng_template_11_div_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 26);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1279 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", ctx_r1279.nzFooter, i0.ɵɵsanitizeHtml);
} }
function NzModalComponent_ng_template_11_div_5_ng_container_4_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r1285 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 31);
    i0.ɵɵlistener("click", function NzModalComponent_ng_template_11_div_5_ng_container_4_button_1_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r1285); const button_r1283 = ctx.$implicit; const ctx_r1284 = i0.ɵɵnextContext(4); return ctx_r1284.onButtonClick(button_r1283); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const button_r1283 = ctx.$implicit;
    const ctx_r1282 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("hidden", !ctx_r1282.getButtonCallableProp(button_r1283, "show"))("nzLoading", ctx_r1282.getButtonCallableProp(button_r1283, "loading"))("disabled", ctx_r1282.getButtonCallableProp(button_r1283, "disabled"))("nzType", button_r1283.type)("nzShape", button_r1283.shape)("nzSize", button_r1283.size)("nzGhost", button_r1283.ghost);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", button_r1283.label, " ");
} }
function NzModalComponent_ng_template_11_div_5_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzModalComponent_ng_template_11_div_5_ng_container_4_button_1_Template, 2, 8, "button", 30);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1280 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1280.nzFooter);
} }
function NzModalComponent_ng_template_11_div_5_ng_container_5_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r1289 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 34);
    i0.ɵɵlistener("click", function NzModalComponent_ng_template_11_div_5_ng_container_5_button_1_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r1289); const ctx_r1288 = i0.ɵɵnextContext(4); return ctx_r1288.onClickOkCancel("cancel"); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1286 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("nzLoading", ctx_r1286.nzCancelLoading)("disabled", ctx_r1286.nzCancelDisabled);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1286.cancelText, " ");
} }
function NzModalComponent_ng_template_11_div_5_ng_container_5_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r1291 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 35);
    i0.ɵɵlistener("click", function NzModalComponent_ng_template_11_div_5_ng_container_5_button_2_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r1291); const ctx_r1290 = i0.ɵɵnextContext(4); return ctx_r1290.onClickOkCancel("ok"); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1287 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("nzType", ctx_r1287.nzOkType)("nzLoading", ctx_r1287.nzOkLoading)("disabled", ctx_r1287.nzOkDisabled);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1287.okText, " ");
} }
function NzModalComponent_ng_template_11_div_5_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzModalComponent_ng_template_11_div_5_ng_container_5_button_1_Template, 2, 3, "button", 32);
    i0.ɵɵtemplate(2, NzModalComponent_ng_template_11_div_5_ng_container_5_button_2_Template, 2, 4, "button", 33);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1281 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1281.nzCancelText !== null);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1281.nzOkText !== null);
} }
function NzModalComponent_ng_template_11_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵelementContainerStart(1, 16);
    i0.ɵɵtemplate(2, NzModalComponent_ng_template_11_div_5_ng_container_2_Template, 1, 1, "ng-container", 17);
    i0.ɵɵtemplate(3, NzModalComponent_ng_template_11_div_5_ng_container_3_Template, 2, 1, "ng-container", 25);
    i0.ɵɵtemplate(4, NzModalComponent_ng_template_11_div_5_ng_container_4_Template, 2, 1, "ng-container", 25);
    i0.ɵɵtemplate(5, NzModalComponent_ng_template_11_div_5_ng_container_5_Template, 3, 2, "ng-container", 29);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1272 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitch", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r1272.isTemplateRef(ctx_r1272.nzFooter));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r1272.isNonEmptyString(ctx_r1272.nzFooter));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r1272.isModalButtons(ctx_r1272.nzFooter));
} }
function NzModalComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NzModalComponent_ng_template_11_div_0_Template, 5, 3, "div", 19);
    i0.ɵɵelementStart(1, "div", 20);
    i0.ɵɵelementContainerStart(2, null, 21);
    i0.ɵɵtemplate(4, NzModalComponent_ng_template_11_ng_container_4_Template, 4, 3, "ng-container", 8);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, NzModalComponent_ng_template_11_div_5_Template, 6, 4, "div", 22);
} if (rf & 2) {
    const ctx_r1261 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r1261.nzTitle);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", ctx_r1261.nzBodyStyle);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r1261.isComponent(ctx_r1261.nzContent));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1261.nzFooter !== null);
} }
function NzModalComponent_ng_template_13_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 18);
} if (rf & 2) {
    const ctx_r1292 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1292.nzTitle);
} }
function NzModalComponent_ng_template_13_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "span", 26);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1293 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", ctx_r1293.nzTitle, i0.ɵɵsanitizeHtml);
} }
function NzModalComponent_ng_template_13_ng_container_11_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 18);
} if (rf & 2) {
    const ctx_r1298 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1298.nzContent);
} }
function NzModalComponent_ng_template_13_ng_container_11_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 26);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1299 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", ctx_r1299.nzContent, i0.ɵɵsanitizeHtml);
} }
function NzModalComponent_ng_template_13_ng_container_11_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 18);
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const _r1254 = i0.ɵɵreference(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r1254);
} }
function NzModalComponent_ng_template_13_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 16);
    i0.ɵɵtemplate(1, NzModalComponent_ng_template_13_ng_container_11_ng_container_1_Template, 1, 1, "ng-container", 17);
    i0.ɵɵtemplate(2, NzModalComponent_ng_template_13_ng_container_11_ng_container_2_Template, 2, 1, "ng-container", 25);
    i0.ɵɵtemplate(3, NzModalComponent_ng_template_13_ng_container_11_ng_container_3_Template, 1, 1, "ng-container", 27);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1295 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngSwitch", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r1295.isTemplateRef(ctx_r1295.nzContent));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r1295.isNonEmptyString(ctx_r1295.nzContent));
} }
function NzModalComponent_ng_template_13_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r1302 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 34);
    i0.ɵɵlistener("click", function NzModalComponent_ng_template_13_button_13_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r1302); const ctx_r1301 = i0.ɵɵnextContext(2); return ctx_r1301.onClickOkCancel("cancel"); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1296 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("nzLoading", ctx_r1296.nzCancelLoading)("disabled", ctx_r1296.nzCancelDisabled);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1296.cancelText, " ");
} }
function NzModalComponent_ng_template_13_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r1305 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 35, 42);
    i0.ɵɵlistener("click", function NzModalComponent_ng_template_13_button_14_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r1305); const ctx_r1304 = i0.ɵɵnextContext(2); return ctx_r1304.onClickOkCancel("ok"); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1297 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("nzType", ctx_r1297.nzOkType)("nzLoading", ctx_r1297.nzOkLoading)("disabled", ctx_r1297.nzOkDisabled);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1297.okText, " ");
} }
function NzModalComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelementStart(1, "div", 36);
    i0.ɵɵelementStart(2, "div", 37);
    i0.ɵɵelement(3, "i", 38);
    i0.ɵɵelementStart(4, "span", 39);
    i0.ɵɵelementContainerStart(5, 16);
    i0.ɵɵtemplate(6, NzModalComponent_ng_template_13_ng_container_6_Template, 1, 1, "ng-container", 17);
    i0.ɵɵtemplate(7, NzModalComponent_ng_template_13_ng_container_7_Template, 2, 1, "ng-container", 25);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 40);
    i0.ɵɵelementContainerStart(9, null, 21);
    i0.ɵɵtemplate(11, NzModalComponent_ng_template_13_ng_container_11_Template, 4, 3, "ng-container", 8);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 41);
    i0.ɵɵtemplate(13, NzModalComponent_ng_template_13_button_13_Template, 2, 3, "button", 32);
    i0.ɵɵtemplate(14, NzModalComponent_ng_template_13_button_14_Template, 3, 4, "button", 33);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1263 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngStyle", ctx_r1263.nzBodyStyle);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("nzType", ctx_r1263.nzIconType);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngSwitch", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r1263.isTemplateRef(ctx_r1263.nzTitle));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r1263.isNonEmptyString(ctx_r1263.nzTitle));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", !ctx_r1263.isComponent(ctx_r1263.nzContent));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1263.nzCancelText !== null);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1263.nzOkText !== null);
} }
const _c3 = ["*"];
export const MODAL_ANIMATE_DURATION = 200; // Duration when perform animations (ms)
export const WRAP_CLASS_NAME = 'ant-modal-wrap';
const NZ_CONFIG_COMPONENT_NAME = 'modal';
// tslint:disable-next-line:no-any
export class NzModalComponent extends NzModalRef {
    constructor(nzConfigService, overlay, overlayKeyboardDispatcher, i18n, cfr, elementRef, viewContainer, modalControl, focusTrapFactory, cdr, nzModalGlobalConfig, document // tslint:disable-line:no-any
    ) {
        super();
        this.nzConfigService = nzConfigService;
        this.overlay = overlay;
        this.overlayKeyboardDispatcher = overlayKeyboardDispatcher;
        this.i18n = i18n;
        this.cfr = cfr;
        this.elementRef = elementRef;
        this.viewContainer = viewContainer;
        this.modalControl = modalControl;
        this.focusTrapFactory = focusTrapFactory;
        this.cdr = cdr;
        this.nzModalGlobalConfig = nzModalGlobalConfig;
        this.document = document;
        this.nzVisible = false;
        this.nzClosable = true;
        this.nzOkLoading = false;
        this.nzOkDisabled = false;
        this.nzCancelDisabled = false;
        this.nzCancelLoading = false;
        this.nzKeyboard = true;
        this.nzNoAnimation = false;
        this.nzGetContainer = () => this.overlay.create(); // [STATIC]
        this.nzZIndex = 1000;
        this.nzWidth = 520;
        this.nzCloseIcon = 'close';
        this.nzOkType = 'primary';
        this.nzIconType = 'question-circle'; // Confirm Modal ONLY
        this.nzModalType = 'default';
        this.nzAriaLabel = 'Close';
        this.nzOnOk = new EventEmitter();
        this.nzOnCancel = new EventEmitter();
        this.nzAfterOpen = new EventEmitter(); // Trigger when modal open(visible) after animations
        this.nzAfterClose = new EventEmitter(); // Trigger when modal leave-animation over
        this.nzVisibleChange = new EventEmitter();
        this.locale = {};
        this.transformOrigin = '0px 0px 0px'; // The origin point that animation based on
        this.unsubscribe$ = new Subject();
        this.dialogMouseDown = false;
        this.scrollStrategy = this.overlay.scrollStrategies.block();
        if (this.nzModalGlobalConfig) {
            warnDeprecation('`NZ_MODAL_CONFIG` has been deprecated and will be removed in 9.0.0. Please use global config instead.');
        }
    }
    set modalFooter(value) {
        if (value && value.templateRef) {
            this.setFooterWithTemplate(value.templateRef);
        }
    }
    get afterOpen() {
        // Observable alias for nzAfterOpen
        return this.nzAfterOpen.asObservable();
    }
    get afterClose() {
        // Observable alias for nzAfterClose
        return this.nzAfterClose.asObservable();
    }
    get cancelText() {
        return this.nzCancelText || this.locale.cancelText;
    }
    get okText() {
        return this.nzOkText || this.locale.okText;
    }
    get hidden() {
        return !this.nzVisible && !this.animationState;
    } // Indicate whether this dialog should hidden
    /**
     * @description
     * The calculated highest weight of mask value
     *
     * Weight of different mask input:
     * component default value < global configuration < component input value
     */
    get mask() {
        if (this.nzMask != null) {
            return this.nzMask;
        }
        else if (this.nzModalGlobalConfig && this.nzModalGlobalConfig.nzMask != null) {
            return this.nzModalGlobalConfig.nzMask;
        }
        else {
            return true;
        }
    }
    /**
     * @description
     * The calculated highest weight of maskClosable value
     *
     * Weight of different maskClosable input:
     * component default value < global configuration < component input value
     */
    get maskClosable() {
        if (this.nzMaskClosable != null) {
            return this.nzMaskClosable;
        }
        else if (this.nzModalGlobalConfig && this.nzModalGlobalConfig.nzMaskClosable != null) {
            return this.nzModalGlobalConfig.nzMaskClosable;
        }
        else {
            return true;
        }
    }
    ngOnInit() {
        this.i18n.localeChange.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
            this.locale = this.i18n.getLocaleData('Modal');
        });
        if (this.isComponent(this.nzContent)) {
            this.createDynamicComponent(this.nzContent); // Create component along without View
        }
        if (this.isModalButtons(this.nzFooter)) {
            // Setup default button options
            this.nzFooter = this.formatModalButtons(this.nzFooter);
        }
        // Place the modal dom to elsewhere
        this.container = typeof this.nzGetContainer === 'function' ? this.nzGetContainer() : this.nzGetContainer;
        if (this.container instanceof HTMLElement) {
            this.container.appendChild(this.elementRef.nativeElement);
            fromEvent(this.document.body, 'keydown')
                .pipe(takeUntil(this.unsubscribe$))
                .subscribe(e => this.keydownListener(e));
        }
        else if (this.container instanceof OverlayRef) {
            // NOTE: only attach the dom to overlay, the view container is not changed actually
            this.setOverlayRef(this.container);
            this.container.overlayElement.appendChild(this.elementRef.nativeElement);
        }
        if (this.overlayRef) {
            this.overlayRef
                .keydownEvents()
                .pipe(takeUntil(this.unsubscribe$))
                .subscribe(e => this.keydownListener(e));
        }
        // Register modal when afterOpen/afterClose is stable
        this.modalControl.registerModal(this);
    }
    // [NOTE] NOT available when using by service!
    // Because ngOnChanges never be called when using by service,
    // here we can't support "nzContent"(Component) etc. as inputs that initialized dynamically.
    // BUT: User also can change "nzContent" dynamically to trigger UI changes (provided you don't use Component that needs initializations)
    ngOnChanges(changes) {
        if (changes.nzVisible) {
            this.handleVisibleStateChange(this.nzVisible, !changes.nzVisible.firstChange); // Do not trigger animation while initializing
        }
    }
    ngAfterViewInit() {
        // If using Component, it is the time to attach View while bodyContainer is ready
        if (this.contentComponentRef) {
            this.bodyContainer.insert(this.contentComponentRef.hostView);
        }
        if (this.autoFocusButtonOk) {
            this.autoFocusButtonOk.nativeElement.focus();
        }
    }
    ngOnDestroy() {
        // Close self before destructing
        this.changeVisibleFromInside(false).then(() => {
            this.modalControl.deregisterModal(this);
            if (this.container instanceof OverlayRef) {
                this.container.dispose();
            }
            this.unsubscribe$.next();
            this.unsubscribe$.complete();
        });
        clearTimeout(this.timeoutId);
    }
    setFooterWithTemplate(templateRef) {
        this.nzFooter = templateRef;
        this.cdr.markForCheck();
    }
    setOverlayRef(overlayRef) {
        this.overlayRef = overlayRef;
    }
    keydownListener(event) {
        if (event.keyCode === ESCAPE && this.nzKeyboard) {
            this.onClickOkCancel('cancel');
        }
    }
    open() {
        this.changeVisibleFromInside(true);
    }
    close(result) {
        this.changeVisibleFromInside(false, result);
    }
    destroy(result) {
        // Destroy equals Close
        this.close(result);
    }
    triggerOk() {
        this.onClickOkCancel('ok');
    }
    triggerCancel() {
        this.onClickOkCancel('cancel');
    }
    getInstance() {
        return this;
    }
    getContentComponentRef() {
        return this.contentComponentRef;
    }
    getContentComponent() {
        return this.contentComponentRef && this.contentComponentRef.instance;
    }
    getElement() {
        return this.elementRef && this.elementRef.nativeElement;
    }
    onMaskDialogDown() {
        this.dialogMouseDown = true;
    }
    onDialogUp() {
        if (this.dialogMouseDown) {
            this.timeoutId = setTimeout(() => {
                this.dialogMouseDown = false;
            }, 0);
        }
    }
    onClickMask($event) {
        if (this.mask &&
            this.maskClosable &&
            $event.target.classList.contains(WRAP_CLASS_NAME) &&
            this.nzVisible &&
            !this.dialogMouseDown) {
            this.onClickOkCancel('cancel');
        }
    }
    isModalType(type) {
        return this.nzModalType === type;
    }
    onClickCloseBtn() {
        if (this.nzVisible) {
            this.onClickOkCancel('cancel');
        }
    }
    onClickOkCancel(type) {
        const trigger = { ok: this.nzOnOk, cancel: this.nzOnCancel }[type];
        const loadingKey = { ok: 'nzOkLoading', cancel: 'nzCancelLoading' }[type];
        if (trigger instanceof EventEmitter) {
            trigger.emit(this.getContentComponent());
        }
        else if (typeof trigger === 'function') {
            const result = trigger(this.getContentComponent());
            const caseClose = (doClose) => doClose !== false && this.close(doClose); // Users can return "false" to prevent closing by default
            if (isPromise(result)) {
                this[loadingKey] = true;
                const handleThen = (doClose) => {
                    this[loadingKey] = false;
                    caseClose(doClose);
                };
                result.then(handleThen).catch(handleThen);
            }
            else {
                caseClose(result);
            }
        }
    }
    isNonEmptyString(value) {
        return typeof value === 'string' && value !== '';
    }
    isTemplateRef(value) {
        return value instanceof TemplateRef;
    }
    isComponent(value) {
        return value instanceof Type;
    }
    isModalButtons(value) {
        return Array.isArray(value) && value.length > 0;
    }
    // Do rest things when visible state changed
    handleVisibleStateChange(visible, animation = true, closeResult) {
        if (visible) {
            // Hide scrollbar at the first time when shown up
            this.scrollStrategy.enable();
            this.savePreviouslyFocusedElement();
            this.trapFocus();
            if (this.container instanceof OverlayRef) {
                this.overlayKeyboardDispatcher.add(this.overlayRef);
            }
        }
        else {
            if (this.container instanceof OverlayRef) {
                this.overlayKeyboardDispatcher.remove(this.overlayRef);
            }
        }
        return Promise.resolve(animation ? this.animateTo(visible) : undefined).then(() => {
            // Emit open/close event after animations over
            if (visible) {
                this.nzAfterOpen.emit();
            }
            else {
                this.nzAfterClose.emit(closeResult);
                this.restoreFocus();
                this.scrollStrategy.disable();
                // Mark the for check so it can react if the view container is using OnPush change detection.
                this.cdr.markForCheck();
            }
        });
    }
    // Lookup a button's property, if the prop is a function, call & then return the result, otherwise, return itself.
    getButtonCallableProp(options, prop) {
        const value = options[prop];
        const args = [];
        if (this.contentComponentRef) {
            args.push(this.contentComponentRef.instance);
        }
        return typeof value === 'function' ? value.apply(options, args) : value;
    }
    // On nzFooter's modal button click
    onButtonClick(button) {
        const result = this.getButtonCallableProp(button, 'onClick'); // Call onClick directly
        if (isPromise(result)) {
            button.loading = true;
            result.then(() => (button.loading = false)).catch(() => (button.loading = false));
        }
    }
    // Change nzVisible from inside
    changeVisibleFromInside(visible, closeResult) {
        if (this.nzVisible !== visible) {
            // Change nzVisible value immediately
            this.nzVisible = visible;
            this.nzVisibleChange.emit(visible);
            return this.handleVisibleStateChange(visible, true, closeResult);
        }
        return Promise.resolve();
    }
    changeAnimationState(state) {
        this.animationState = state;
        if (state) {
            this.maskAnimationClassMap = {
                [`fade-${state}`]: true,
                [`fade-${state}-active`]: true
            };
            this.modalAnimationClassMap = {
                [`zoom-${state}`]: true,
                [`zoom-${state}-active`]: true
            };
        }
        else {
            this.maskAnimationClassMap = this.modalAnimationClassMap = null;
        }
    }
    animateTo(isVisible) {
        if (isVisible) {
            // Figure out the lastest click position when shows up
            setTimeout(() => this.updateTransformOrigin()); // [NOTE] Using timeout due to the document.click event is fired later than visible change, so if not postponed to next event-loop, we can't get the lastest click position
        }
        this.changeAnimationState(isVisible ? 'enter' : 'leave');
        return new Promise(resolve => setTimeout(() => {
            // Return when animation is over
            this.changeAnimationState(null);
            resolve();
        }, this.nzNoAnimation ? 0 : MODAL_ANIMATE_DURATION));
    }
    formatModalButtons(buttons) {
        return buttons.map(button => {
            return Object.assign({
                type: 'default',
                size: 'default',
                autoLoading: true,
                show: true,
                loading: false,
                disabled: false
            }, button);
        });
    }
    /**
     * Create a component dynamically but not attach to any View (this action will be executed when bodyContainer is ready)
     * @param component Component class
     */
    createDynamicComponent(component) {
        const factory = this.cfr.resolveComponentFactory(component);
        const childInjector = Injector.create({
            providers: [{ provide: NzModalRef, useValue: this }],
            parent: this.viewContainer.parentInjector
        });
        this.contentComponentRef = factory.create(childInjector);
        if (this.nzComponentParams) {
            Object.assign(this.contentComponentRef.instance, this.nzComponentParams);
        }
        // Do the first change detection immediately (or we do detection at ngAfterViewInit, multi-changes error will be thrown)
        this.contentComponentRef.changeDetectorRef.detectChanges();
    }
    // Update transform-origin to the last click position on document
    updateTransformOrigin() {
        const modalElement = this.modalContainer.nativeElement;
        if (this.previouslyFocusedElement) {
            const previouslyDOMRect = this.previouslyFocusedElement.getBoundingClientRect();
            const lastPosition = getElementOffset(this.previouslyFocusedElement);
            const x = lastPosition.left + previouslyDOMRect.width / 2;
            const y = lastPosition.top + previouslyDOMRect.height / 2;
            this.transformOrigin = `${x - modalElement.offsetLeft}px ${y - modalElement.offsetTop}px 0px`;
        }
    }
    savePreviouslyFocusedElement() {
        if (this.document) {
            this.previouslyFocusedElement = this.document.activeElement;
        }
    }
    trapFocus() {
        if (!this.focusTrap) {
            this.focusTrap = this.focusTrapFactory.create(this.elementRef.nativeElement);
        }
        this.focusTrap.focusInitialElementWhenReady();
    }
    restoreFocus() {
        // We need the extra check, because IE can set the `activeElement` to null in some cases.
        if (this.previouslyFocusedElement && typeof this.previouslyFocusedElement.focus === 'function') {
            this.previouslyFocusedElement.focus();
        }
        if (this.focusTrap) {
            this.focusTrap.destroy();
        }
    }
}
/** @nocollapse */ NzModalComponent.ɵfac = function NzModalComponent_Factory(t) { return new (t || NzModalComponent)(i0.ɵɵdirectiveInject(i1.NzConfigService), i0.ɵɵdirectiveInject(i2.Overlay), i0.ɵɵdirectiveInject(i2.OverlayKeyboardDispatcher), i0.ɵɵdirectiveInject(i3.NzI18nService), i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i4.NzModalControlService), i0.ɵɵdirectiveInject(i5.FocusTrapFactory), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(NZ_MODAL_CONFIG, 8), i0.ɵɵdirectiveInject(DOCUMENT)); };
/** @nocollapse */ NzModalComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzModalComponent, selectors: [["nz-modal"]], contentQueries: function NzModalComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, NzModalFooterDirective, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.modalFooter = _t.first);
    } }, viewQuery: function NzModalComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true);
        i0.ɵɵviewQuery(_c1, true, ViewContainerRef);
        i0.ɵɵviewQuery(_c2, true, ElementRef);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.modalContainer = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.bodyContainer = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.autoFocusButtonOk = _t.first);
    } }, inputs: { nzVisible: "nzVisible", nzClosable: "nzClosable", nzOkLoading: "nzOkLoading", nzOkDisabled: "nzOkDisabled", nzCancelDisabled: "nzCancelDisabled", nzCancelLoading: "nzCancelLoading", nzKeyboard: "nzKeyboard", nzNoAnimation: "nzNoAnimation", nzMask: "nzMask", nzMaskClosable: "nzMaskClosable", nzContent: "nzContent", nzComponentParams: "nzComponentParams", nzFooter: "nzFooter", nzGetContainer: "nzGetContainer", nzZIndex: "nzZIndex", nzWidth: "nzWidth", nzWrapClassName: "nzWrapClassName", nzClassName: "nzClassName", nzStyle: "nzStyle", nzTitle: "nzTitle", nzCloseIcon: "nzCloseIcon", nzMaskStyle: "nzMaskStyle", nzBodyStyle: "nzBodyStyle", nzOkText: "nzOkText", nzCancelText: "nzCancelText", nzOkType: "nzOkType", nzIconType: "nzIconType", nzModalType: "nzModalType", nzAriaLabel: "nzAriaLabel", nzOnOk: "nzOnOk", nzOnCancel: "nzOnCancel" }, outputs: { nzOnOk: "nzOnOk", nzOnCancel: "nzOnCancel", nzAfterOpen: "nzAfterOpen", nzAfterClose: "nzAfterClose", nzVisibleChange: "nzVisibleChange" }, exportAs: ["nzModal"], features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature()], ngContentSelectors: _c3, decls: 15, vars: 18, consts: [["tplOriginContent", ""], [3, "nzNoAnimation"], ["class", "ant-modal-mask", 3, "ngClass", "ant-modal-mask-hidden", "ngStyle", "zIndex", 4, "ngIf"], ["tabindex", "-1", "role", "dialog", 3, "click", "mouseup"], ["role", "document", 3, "ngClass", "ngStyle", "mousedown"], ["modalContainer", ""], [1, "ant-modal-content"], ["class", "ant-modal-close", 3, "click", 4, "ngIf"], [3, "ngSwitch", 4, "ngIf"], ["tplContentDefault", ""], ["tplContentConfirm", ""], [1, "ant-modal-mask", 3, "ngClass", "ngStyle"], [1, "ant-modal-close", 3, "click"], [1, "ant-modal-close-x"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 1, "ant-modal-close-icon", 3, "nzType"], [3, "ngSwitch"], [3, "ngTemplateOutlet", 4, "ngSwitchCase"], [3, "ngTemplateOutlet"], ["class", "ant-modal-header", 4, "ngIf"], [1, "ant-modal-body", 3, "ngStyle"], ["bodyContainer", ""], ["class", "ant-modal-footer", 4, "ngIf"], [1, "ant-modal-header"], [1, "ant-modal-title"], [4, "ngSwitchCase"], [3, "innerHTML"], [3, "ngTemplateOutlet", 4, "ngSwitchDefault"], [1, "ant-modal-footer"], [4, "ngSwitchDefault"], ["nz-button", "", 3, "hidden", "nzLoading", "disabled", "nzType", "nzShape", "nzSize", "nzGhost", "click", 4, "ngFor", "ngForOf"], ["nz-button", "", 3, "hidden", "nzLoading", "disabled", "nzType", "nzShape", "nzSize", "nzGhost", "click"], ["nz-button", "", 3, "nzLoading", "disabled", "click", 4, "ngIf"], ["nz-button", "", 3, "nzType", "nzLoading", "disabled", "click", 4, "ngIf"], ["nz-button", "", 3, "nzLoading", "disabled", "click"], ["nz-button", "", 3, "nzType", "nzLoading", "disabled", "click"], [1, "ant-modal-confirm-body-wrapper"], [1, "ant-modal-confirm-body"], ["nz-icon", "", 3, "nzType"], [1, "ant-modal-confirm-title"], [1, "ant-modal-confirm-content"], [1, "ant-modal-confirm-btns"], ["autoFocusButtonOk", ""]], template: function NzModalComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, NzModalComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementStart(2, "div", 1);
        i0.ɵɵtemplate(3, NzModalComponent_div_3_Template, 1, 4, "div", 2);
        i0.ɵɵelementStart(4, "div", 3);
        i0.ɵɵlistener("click", function NzModalComponent_Template_div_click_4_listener($event) { return ctx.onClickMask($event); })("mouseup", function NzModalComponent_Template_div_mouseup_4_listener($event) { return ctx.onDialogUp(); });
        i0.ɵɵelementStart(5, "div", 4, 5);
        i0.ɵɵlistener("mousedown", function NzModalComponent_Template_div_mousedown_5_listener($event) { return ctx.onMaskDialogDown(); });
        i0.ɵɵpipe(7, "nzToCssUnit");
        i0.ɵɵelementStart(8, "div", 6);
        i0.ɵɵtemplate(9, NzModalComponent_button_9_Template, 3, 2, "button", 7);
        i0.ɵɵtemplate(10, NzModalComponent_ng_container_10_Template, 3, 3, "ng-container", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(11, NzModalComponent_ng_template_11_Template, 6, 4, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(13, NzModalComponent_ng_template_13_Template, 15, 8, "ng-template", null, 10, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("nzNoAnimation", ctx.nzNoAnimation);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.mask);
        i0.ɵɵadvance(1);
        i0.ɵɵclassMapInterpolate1("ant-modal-wrap ", ctx.nzWrapClassName, "");
        i0.ɵɵstyleProp("z-index", ctx.nzZIndex)("visibility", ctx.hidden ? "hidden" : null);
        i0.ɵɵadvance(1);
        i0.ɵɵclassMapInterpolate1("ant-modal ", ctx.nzClassName, "");
        i0.ɵɵstyleProp("width", i0.ɵɵpipeBind1(7, 16, ctx.nzWidth))("transform-origin", ctx.transformOrigin);
        i0.ɵɵproperty("ngClass", ctx.modalAnimationClassMap)("ngStyle", ctx.nzStyle);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", ctx.nzClosable);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.hidden);
    } }, directives: [i1.NzNoAnimationDirective, i6.NgIf, i6.NgClass, i6.NgStyle, i1.NzStringTemplateOutletDirective, i7.NzIconDirective, i6.NgSwitch, i6.NgSwitchCase, i6.NgTemplateOutlet, i6.NgSwitchDefault, i6.NgForOf, i8.NzButtonComponent], pipes: [i1.NzToCssUnitPipe], encapsulation: 2 });
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzModalComponent.prototype, "nzVisible", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzModalComponent.prototype, "nzClosable", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzModalComponent.prototype, "nzOkLoading", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzModalComponent.prototype, "nzOkDisabled", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzModalComponent.prototype, "nzCancelDisabled", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzModalComponent.prototype, "nzCancelLoading", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzModalComponent.prototype, "nzKeyboard", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzModalComponent.prototype, "nzNoAnimation", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME), InputBoolean(),
    __metadata("design:type", Boolean)
], NzModalComponent.prototype, "nzMask", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME), InputBoolean(),
    __metadata("design:type", Boolean)
], NzModalComponent.prototype, "nzMaskClosable", void 0);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzModalComponent, [{
        type: Component,
        args: [{
                selector: 'nz-modal',
                exportAs: 'nzModal',
                templateUrl: './nz-modal.component.html',
                // Using OnPush for modal caused footer can not to detect changes. we can fix it when 8.x.
                changeDetection: ChangeDetectionStrategy.Default
            }]
    }], function () { return [{ type: i1.NzConfigService }, { type: i2.Overlay }, { type: i2.OverlayKeyboardDispatcher }, { type: i3.NzI18nService }, { type: i0.ComponentFactoryResolver }, { type: i0.ElementRef }, { type: i0.ViewContainerRef }, { type: i4.NzModalControlService }, { type: i5.FocusTrapFactory }, { type: i0.ChangeDetectorRef }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [NZ_MODAL_CONFIG]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, { nzVisible: [{
            type: Input
        }], nzClosable: [{
            type: Input
        }], nzOkLoading: [{
            type: Input
        }], nzOkDisabled: [{
            type: Input
        }], nzCancelDisabled: [{
            type: Input
        }], nzCancelLoading: [{
            type: Input
        }], nzKeyboard: [{
            type: Input
        }], nzNoAnimation: [{
            type: Input
        }], nzMask: [{
            type: Input
        }], nzMaskClosable: [{
            type: Input
        }], nzContent: [{
            type: Input
        }], nzComponentParams: [{
            type: Input
        }], nzFooter: [{
            type: Input
        }], nzGetContainer: [{
            type: Input
        }], nzZIndex: [{
            type: Input
        }], nzWidth: [{
            type: Input
        }], nzWrapClassName: [{
            type: Input
        }], nzClassName: [{
            type: Input
        }], nzStyle: [{
            type: Input
        }], nzTitle: [{
            type: Input
        }], nzCloseIcon: [{
            type: Input
        }], nzMaskStyle: [{
            type: Input
        }], nzBodyStyle: [{
            type: Input
        }], nzOkText: [{
            type: Input
        }], nzCancelText: [{
            type: Input
        }], nzOkType: [{
            type: Input
        }], nzIconType: [{
            type: Input
        }], nzModalType: [{
            type: Input
        }], nzAriaLabel: [{
            type: Input
        }], nzOnOk: [{
            type: Input
        }, {
            type: Output
        }], nzOnCancel: [{
            type: Input
        }, {
            type: Output
        }], nzAfterOpen: [{
            type: Output
        }], nzAfterClose: [{
            type: Output
        }], nzVisibleChange: [{
            type: Output
        }], modalContainer: [{
            type: ViewChild,
            args: ['modalContainer', { static: true }]
        }], bodyContainer: [{
            type: ViewChild,
            args: ['bodyContainer', { static: false, read: ViewContainerRef }]
        }], autoFocusButtonOk: [{
            type: ViewChild,
            args: ['autoFocusButtonOk', { static: false, read: ElementRef }]
        }], modalFooter: [{
            type: ContentChild,
            args: [NzModalFooterDirective, { static: false }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9tb2RhbC8iLCJzb3VyY2VzIjpbIm56LW1vZGFsLmNvbXBvbmVudC50cyIsIm56LW1vZGFsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQWEsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVoRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDL0MsT0FBTyxFQUF1QixPQUFPLEVBQUUseUJBQXlCLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0csT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCx3QkFBd0IsRUFFeEIsWUFBWSxFQUNaLFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLFFBQVEsRUFDUixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFFTixXQUFXLEVBQ1gsSUFBSSxFQUNKLFNBQVMsRUFDVCxnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDN0gsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxlQUFlLEVBQWlCLE1BQU0sbUJBQW1CLENBQUM7QUFDbkUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRC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LEVBQUUsS0FBSyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBGb2N1c1RyYXAsIEZvY3VzVHJhcEZhY3RvcnkgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XHJcblxyXG5pbXBvcnQgeyBFU0NBUEUgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xyXG5pbXBvcnQgeyBCbG9ja1Njcm9sbFN0cmF0ZWd5LCBPdmVybGF5LCBPdmVybGF5S2V5Ym9hcmREaXNwYXRjaGVyLCBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gIENvbXBvbmVudFJlZixcclxuICBDb250ZW50Q2hpbGQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5qZWN0LFxyXG4gIEluamVjdG9yLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFR5cGUsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGZyb21FdmVudCwgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBnZXRFbGVtZW50T2Zmc2V0LCBJbnB1dEJvb2xlYW4sIGlzUHJvbWlzZSwgTnpDb25maWdTZXJ2aWNlLCB3YXJuRGVwcmVjYXRpb24sIFdpdGhDb25maWcgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuXHJcbmltcG9ydCB7IE5aX01PREFMX0NPTkZJRywgTnpNb2RhbENvbmZpZyB9IGZyb20gJy4vbnotbW9kYWwtY29uZmlnJztcclxuaW1wb3J0IHsgTnpNb2RhbENvbnRyb2xTZXJ2aWNlIH0gZnJvbSAnLi9uei1tb2RhbC1jb250cm9sLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOek1vZGFsRm9vdGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9uei1tb2RhbC1mb290ZXIuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTnpNb2RhbFJlZiB9IGZyb20gJy4vbnotbW9kYWwtcmVmLmNsYXNzJztcclxuaW1wb3J0IHsgTW9kYWxCdXR0b25PcHRpb25zLCBNb2RhbE9wdGlvbnMsIE1vZGFsVHlwZSwgT25DbGlja0NhbGxiYWNrIH0gZnJvbSAnLi9uei1tb2RhbC50eXBlJztcclxuXHJcbmV4cG9ydCBjb25zdCBNT0RBTF9BTklNQVRFX0RVUkFUSU9OID0gMjAwOyAvLyBEdXJhdGlvbiB3aGVuIHBlcmZvcm0gYW5pbWF0aW9ucyAobXMpXHJcbmV4cG9ydCBjb25zdCBXUkFQX0NMQVNTX05BTUUgPSAnYW50LW1vZGFsLXdyYXAnO1xyXG5cclxudHlwZSBBbmltYXRpb25TdGF0ZSA9ICdlbnRlcicgfCAnbGVhdmUnIHwgbnVsbDtcclxuXHJcbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdtb2RhbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LW1vZGFsJyxcclxuICBleHBvcnRBczogJ256TW9kYWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1tb2RhbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgLy8gVXNpbmcgT25QdXNoIGZvciBtb2RhbCBjYXVzZWQgZm9vdGVyIGNhbiBub3QgdG8gZGV0ZWN0IGNoYW5nZXMuIHdlIGNhbiBmaXggaXQgd2hlbiA4LnguXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5EZWZhdWx0XHJcbn0pXHJcblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbmV4cG9ydCBjbGFzcyBOek1vZGFsQ29tcG9uZW50PFQgPSBhbnksIFIgPSBhbnk+IGV4dGVuZHMgTnpNb2RhbFJlZjxULCBSPlxyXG4gIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgTW9kYWxPcHRpb25zPFQ+IHtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpWaXNpYmxlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q2xvc2FibGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuek9rTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuek9rRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDYW5jZWxEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekNhbmNlbExvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpLZXlib2FyZDogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Tm9BbmltYXRpb24gPSBmYWxzZTtcclxuXHJcbiAgLy8gVE9ETyhoc3Vhbnh5eik6IGFkZCBkZWZhdWx0IHZhbHVlIG9uY2Ugb2xkIEFQSSBpcyBkZXByZWNhdGVkLlxyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkgQElucHV0Qm9vbGVhbigpIG56TWFzazogYm9vbGVhbjtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpIEBJbnB1dEJvb2xlYW4oKSBuek1hc2tDbG9zYWJsZTogYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KCkgbnpDb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx7fT4gfCBUeXBlPFQ+OyAvLyBbU1RBVElDXSBJZiBub3Qgc3BlY2lmaWVkLCB3aWxsIHVzZSA8bmctY29udGVudD5cclxuICBASW5wdXQoKSBuekNvbXBvbmVudFBhcmFtczogVDsgLy8gW1NUQVRJQ10gT05MWSBhdmFsaWFibGUgd2hlbiBuekNvbnRlbnQgaXMgYSBjb21wb25lbnRcclxuICBASW5wdXQoKSBuekZvb3Rlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8e30+IHwgQXJyYXk8TW9kYWxCdXR0b25PcHRpb25zPFQ+PiB8IG51bGw7IC8vIFtTVEFUSUNdIERlZmF1bHQgTW9kYWwgT05MWVxyXG4gIEBJbnB1dCgpIG56R2V0Q29udGFpbmVyOiBIVE1MRWxlbWVudCB8IE92ZXJsYXlSZWYgfCAoKCkgPT4gSFRNTEVsZW1lbnQgfCBPdmVybGF5UmVmKSA9ICgpID0+IHRoaXMub3ZlcmxheS5jcmVhdGUoKTsgLy8gW1NUQVRJQ11cclxuICBASW5wdXQoKSBuelpJbmRleDogbnVtYmVyID0gMTAwMDtcclxuICBASW5wdXQoKSBueldpZHRoOiBudW1iZXIgfCBzdHJpbmcgPSA1MjA7XHJcbiAgQElucHV0KCkgbnpXcmFwQ2xhc3NOYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpDbGFzc05hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBuelN0eWxlOiBvYmplY3Q7XHJcbiAgQElucHV0KCkgbnpUaXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8e30+O1xyXG4gIEBJbnB1dCgpIG56Q2xvc2VJY29uOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiA9ICdjbG9zZSc7XHJcbiAgQElucHV0KCkgbnpNYXNrU3R5bGU6IG9iamVjdDtcclxuICBASW5wdXQoKSBuekJvZHlTdHlsZTogb2JqZWN0O1xyXG4gIEBJbnB1dCgpIG56T2tUZXh0OiBzdHJpbmcgfCBudWxsO1xyXG4gIEBJbnB1dCgpIG56Q2FuY2VsVGV4dDogc3RyaW5nIHwgbnVsbDtcclxuICBASW5wdXQoKSBuek9rVHlwZTogc3RyaW5nID0gJ3ByaW1hcnknO1xyXG4gIEBJbnB1dCgpIG56SWNvblR5cGU6IHN0cmluZyA9ICdxdWVzdGlvbi1jaXJjbGUnOyAvLyBDb25maXJtIE1vZGFsIE9OTFlcclxuICBASW5wdXQoKSBuek1vZGFsVHlwZTogTW9kYWxUeXBlID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIG56QXJpYUxhYmVsOiBzdHJpbmcgPSAnQ2xvc2UnO1xyXG5cclxuICBASW5wdXQoKSBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbk9rOiBFdmVudEVtaXR0ZXI8VD4gfCBPbkNsaWNrQ2FsbGJhY2s8VD4gPSBuZXcgRXZlbnRFbWl0dGVyPFQ+KCk7XHJcbiAgQElucHV0KCkgQE91dHB1dCgpIHJlYWRvbmx5IG56T25DYW5jZWw6IEV2ZW50RW1pdHRlcjxUPiB8IE9uQ2xpY2tDYWxsYmFjazxUPiA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56QWZ0ZXJPcGVuID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpOyAvLyBUcmlnZ2VyIHdoZW4gbW9kYWwgb3Blbih2aXNpYmxlKSBhZnRlciBhbmltYXRpb25zXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56QWZ0ZXJDbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8Uj4oKTsgLy8gVHJpZ2dlciB3aGVuIG1vZGFsIGxlYXZlLWFuaW1hdGlvbiBvdmVyXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56VmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgQFZpZXdDaGlsZCgnbW9kYWxDb250YWluZXInLCB7IHN0YXRpYzogdHJ1ZSB9KSBtb2RhbENvbnRhaW5lcjogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdib2R5Q29udGFpbmVyJywgeyBzdGF0aWM6IGZhbHNlLCByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pIGJvZHlDb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XHJcbiAgQFZpZXdDaGlsZCgnYXV0b0ZvY3VzQnV0dG9uT2snLCB7IHN0YXRpYzogZmFsc2UsIHJlYWQ6IEVsZW1lbnRSZWYgfSkgYXV0b0ZvY3VzQnV0dG9uT2s6IEVsZW1lbnRSZWY7IC8vIE9ubHkgYWltIHRvIGZvY3VzIHRoZSBvayBidXR0b24gdGhhdCBuZWVkcyB0byBiZSBhdXRvIGZvY3VzZWRcclxuXHJcbiAgQENvbnRlbnRDaGlsZChOek1vZGFsRm9vdGVyRGlyZWN0aXZlLCB7IHN0YXRpYzogZmFsc2UgfSlcclxuICBzZXQgbW9kYWxGb290ZXIodmFsdWU6IE56TW9kYWxGb290ZXJEaXJlY3RpdmUpIHtcclxuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS50ZW1wbGF0ZVJlZikge1xyXG4gICAgICB0aGlzLnNldEZvb3RlcldpdGhUZW1wbGF0ZSh2YWx1ZS50ZW1wbGF0ZVJlZik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgYWZ0ZXJPcGVuKCk6IE9ic2VydmFibGU8dm9pZD4ge1xyXG4gICAgLy8gT2JzZXJ2YWJsZSBhbGlhcyBmb3IgbnpBZnRlck9wZW5cclxuICAgIHJldHVybiB0aGlzLm56QWZ0ZXJPcGVuLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGFmdGVyQ2xvc2UoKTogT2JzZXJ2YWJsZTxSPiB7XHJcbiAgICAvLyBPYnNlcnZhYmxlIGFsaWFzIGZvciBuekFmdGVyQ2xvc2VcclxuICAgIHJldHVybiB0aGlzLm56QWZ0ZXJDbG9zZS5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIGdldCBjYW5jZWxUZXh0KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5uekNhbmNlbFRleHQgfHwgdGhpcy5sb2NhbGUuY2FuY2VsVGV4dCE7XHJcbiAgfVxyXG5cclxuICBnZXQgb2tUZXh0KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5uek9rVGV4dCB8fCB0aGlzLmxvY2FsZS5va1RleHQhO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGhpZGRlbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhdGhpcy5uelZpc2libGUgJiYgIXRoaXMuYW5pbWF0aW9uU3RhdGU7XHJcbiAgfSAvLyBJbmRpY2F0ZSB3aGV0aGVyIHRoaXMgZGlhbG9nIHNob3VsZCBoaWRkZW5cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICogVGhlIGNhbGN1bGF0ZWQgaGlnaGVzdCB3ZWlnaHQgb2YgbWFzayB2YWx1ZVxyXG4gICAqXHJcbiAgICogV2VpZ2h0IG9mIGRpZmZlcmVudCBtYXNrIGlucHV0OlxyXG4gICAqIGNvbXBvbmVudCBkZWZhdWx0IHZhbHVlIDwgZ2xvYmFsIGNvbmZpZ3VyYXRpb24gPCBjb21wb25lbnQgaW5wdXQgdmFsdWVcclxuICAgKi9cclxuICBnZXQgbWFzaygpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLm56TWFzayAhPSBudWxsKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm56TWFzaztcclxuICAgIH0gZWxzZSBpZiAodGhpcy5uek1vZGFsR2xvYmFsQ29uZmlnICYmIHRoaXMubnpNb2RhbEdsb2JhbENvbmZpZy5uek1hc2sgIT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5uek1vZGFsR2xvYmFsQ29uZmlnLm56TWFzaztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICogVGhlIGNhbGN1bGF0ZWQgaGlnaGVzdCB3ZWlnaHQgb2YgbWFza0Nsb3NhYmxlIHZhbHVlXHJcbiAgICpcclxuICAgKiBXZWlnaHQgb2YgZGlmZmVyZW50IG1hc2tDbG9zYWJsZSBpbnB1dDpcclxuICAgKiBjb21wb25lbnQgZGVmYXVsdCB2YWx1ZSA8IGdsb2JhbCBjb25maWd1cmF0aW9uIDwgY29tcG9uZW50IGlucHV0IHZhbHVlXHJcbiAgICovXHJcbiAgZ2V0IG1hc2tDbG9zYWJsZSgpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLm56TWFza0Nsb3NhYmxlICE9IG51bGwpIHtcclxuICAgICAgcmV0dXJuIHRoaXMubnpNYXNrQ2xvc2FibGU7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMubnpNb2RhbEdsb2JhbENvbmZpZyAmJiB0aGlzLm56TW9kYWxHbG9iYWxDb25maWcubnpNYXNrQ2xvc2FibGUgIT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5uek1vZGFsR2xvYmFsQ29uZmlnLm56TWFza0Nsb3NhYmxlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsb2NhbGU6IHsgb2tUZXh0Pzogc3RyaW5nOyBjYW5jZWxUZXh0Pzogc3RyaW5nIH0gPSB7fTtcclxuICBtYXNrQW5pbWF0aW9uQ2xhc3NNYXA6IG9iamVjdCB8IG51bGw7XHJcbiAgbW9kYWxBbmltYXRpb25DbGFzc01hcDogb2JqZWN0IHwgbnVsbDtcclxuICB0cmFuc2Zvcm1PcmlnaW4gPSAnMHB4IDBweCAwcHgnOyAvLyBUaGUgb3JpZ2luIHBvaW50IHRoYXQgYW5pbWF0aW9uIGJhc2VkIG9uXHJcblxyXG4gIHByaXZhdGUgY29udGVudENvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPFQ+OyAvLyBIYW5kbGUgdGhlIHJlZmVyZW5jZSB3aGVuIHVzaW5nIG56Q29udGVudCBhcyBDb21wb25lbnRcclxuICBwcml2YXRlIGFuaW1hdGlvblN0YXRlOiBBbmltYXRpb25TdGF0ZTsgLy8gQ3VycmVudCBhbmltYXRpb24gc3RhdGVcclxuICBwcml2YXRlIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQgfCBPdmVybGF5UmVmO1xyXG4gIHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBwcml2YXRlIHByZXZpb3VzbHlGb2N1c2VkRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBmb2N1c1RyYXA6IEZvY3VzVHJhcDtcclxuICBwcml2YXRlIHNjcm9sbFN0cmF0ZWd5OiBCbG9ja1Njcm9sbFN0cmF0ZWd5O1xyXG4gIHByaXZhdGUgb3ZlcmxheVJlZjogT3ZlcmxheVJlZjtcclxuICBwcml2YXRlIGRpYWxvZ01vdXNlRG93biA9IGZhbHNlO1xyXG4gIHByaXZhdGUgdGltZW91dElkOiBudW1iZXI7XHJcblxyXG4gIFtrZXk6IHN0cmluZ106IGFueTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksXHJcbiAgICBwcml2YXRlIG92ZXJsYXlLZXlib2FyZERpc3BhdGNoZXI6IE92ZXJsYXlLZXlib2FyZERpc3BhdGNoZXIsXHJcbiAgICBwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNmcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgcHJpdmF0ZSBtb2RhbENvbnRyb2w6IE56TW9kYWxDb250cm9sU2VydmljZSxcclxuICAgIHByaXZhdGUgZm9jdXNUcmFwRmFjdG9yeTogRm9jdXNUcmFwRmFjdG9yeSxcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTlpfTU9EQUxfQ09ORklHKSBwcml2YXRlIG56TW9kYWxHbG9iYWxDb25maWc6IE56TW9kYWxDb25maWcsXHJcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnkgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcclxuICApIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnNjcm9sbFN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMuYmxvY2soKTtcclxuXHJcbiAgICBpZiAodGhpcy5uek1vZGFsR2xvYmFsQ29uZmlnKSB7XHJcbiAgICAgIHdhcm5EZXByZWNhdGlvbignYE5aX01PREFMX0NPTkZJR2AgaGFzIGJlZW4gZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIDkuMC4wLiBQbGVhc2UgdXNlIGdsb2JhbCBjb25maWcgaW5zdGVhZC4nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldExvY2FsZURhdGEoJ01vZGFsJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAodGhpcy5pc0NvbXBvbmVudCh0aGlzLm56Q29udGVudCkpIHtcclxuICAgICAgdGhpcy5jcmVhdGVEeW5hbWljQ29tcG9uZW50KHRoaXMubnpDb250ZW50IGFzIFR5cGU8VD4pOyAvLyBDcmVhdGUgY29tcG9uZW50IGFsb25nIHdpdGhvdXQgVmlld1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmlzTW9kYWxCdXR0b25zKHRoaXMubnpGb290ZXIpKSB7XHJcbiAgICAgIC8vIFNldHVwIGRlZmF1bHQgYnV0dG9uIG9wdGlvbnNcclxuICAgICAgdGhpcy5uekZvb3RlciA9IHRoaXMuZm9ybWF0TW9kYWxCdXR0b25zKHRoaXMubnpGb290ZXIgYXMgQXJyYXk8TW9kYWxCdXR0b25PcHRpb25zPFQ+Pik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUGxhY2UgdGhlIG1vZGFsIGRvbSB0byBlbHNld2hlcmVcclxuICAgIHRoaXMuY29udGFpbmVyID0gdHlwZW9mIHRoaXMubnpHZXRDb250YWluZXIgPT09ICdmdW5jdGlvbicgPyB0aGlzLm56R2V0Q29udGFpbmVyKCkgOiB0aGlzLm56R2V0Q29udGFpbmVyO1xyXG4gICAgaWYgKHRoaXMuY29udGFpbmVyIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgICBmcm9tRXZlbnQ8S2V5Ym9hcmRFdmVudD4odGhpcy5kb2N1bWVudC5ib2R5LCAna2V5ZG93bicpXHJcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSlcclxuICAgICAgICAuc3Vic2NyaWJlKGUgPT4gdGhpcy5rZXlkb3duTGlzdGVuZXIoZSkpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbnRhaW5lciBpbnN0YW5jZW9mIE92ZXJsYXlSZWYpIHtcclxuICAgICAgLy8gTk9URTogb25seSBhdHRhY2ggdGhlIGRvbSB0byBvdmVybGF5LCB0aGUgdmlldyBjb250YWluZXIgaXMgbm90IGNoYW5nZWQgYWN0dWFsbHlcclxuICAgICAgdGhpcy5zZXRPdmVybGF5UmVmKHRoaXMuY29udGFpbmVyKTtcclxuICAgICAgdGhpcy5jb250YWluZXIub3ZlcmxheUVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYpIHtcclxuICAgICAgdGhpcy5vdmVybGF5UmVmXHJcbiAgICAgICAgLmtleWRvd25FdmVudHMoKVxyXG4gICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpXHJcbiAgICAgICAgLnN1YnNjcmliZShlID0+IHRoaXMua2V5ZG93bkxpc3RlbmVyKGUpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZWdpc3RlciBtb2RhbCB3aGVuIGFmdGVyT3Blbi9hZnRlckNsb3NlIGlzIHN0YWJsZVxyXG4gICAgdGhpcy5tb2RhbENvbnRyb2wucmVnaXN0ZXJNb2RhbCh0aGlzKTtcclxuICB9XHJcblxyXG4gIC8vIFtOT1RFXSBOT1QgYXZhaWxhYmxlIHdoZW4gdXNpbmcgYnkgc2VydmljZSFcclxuICAvLyBCZWNhdXNlIG5nT25DaGFuZ2VzIG5ldmVyIGJlIGNhbGxlZCB3aGVuIHVzaW5nIGJ5IHNlcnZpY2UsXHJcbiAgLy8gaGVyZSB3ZSBjYW4ndCBzdXBwb3J0IFwibnpDb250ZW50XCIoQ29tcG9uZW50KSBldGMuIGFzIGlucHV0cyB0aGF0IGluaXRpYWxpemVkIGR5bmFtaWNhbGx5LlxyXG4gIC8vIEJVVDogVXNlciBhbHNvIGNhbiBjaGFuZ2UgXCJuekNvbnRlbnRcIiBkeW5hbWljYWxseSB0byB0cmlnZ2VyIFVJIGNoYW5nZXMgKHByb3ZpZGVkIHlvdSBkb24ndCB1c2UgXGJDb21wb25lbnQgdGhhdCBuZWVkcyBpbml0aWFsaXphdGlvbnMpXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMubnpWaXNpYmxlKSB7XHJcbiAgICAgIHRoaXMuaGFuZGxlVmlzaWJsZVN0YXRlQ2hhbmdlKHRoaXMubnpWaXNpYmxlLCAhY2hhbmdlcy5uelZpc2libGUuZmlyc3RDaGFuZ2UpOyAvLyBEbyBub3QgdHJpZ2dlciBhbmltYXRpb24gd2hpbGUgaW5pdGlhbGl6aW5nXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICAvLyBJZiB1c2luZyBDb21wb25lbnQsIGl0IGlzIHRoZSB0aW1lIHRvIGF0dGFjaCBWaWV3IHdoaWxlIGJvZHlDb250YWluZXIgaXMgcmVhZHlcclxuICAgIGlmICh0aGlzLmNvbnRlbnRDb21wb25lbnRSZWYpIHtcclxuICAgICAgdGhpcy5ib2R5Q29udGFpbmVyLmluc2VydCh0aGlzLmNvbnRlbnRDb21wb25lbnRSZWYuaG9zdFZpZXcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmF1dG9Gb2N1c0J1dHRvbk9rKSB7XHJcbiAgICAgICh0aGlzLmF1dG9Gb2N1c0J1dHRvbk9rLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIC8vIENsb3NlIHNlbGYgYmVmb3JlIGRlc3RydWN0aW5nXHJcbiAgICB0aGlzLmNoYW5nZVZpc2libGVGcm9tSW5zaWRlKGZhbHNlKS50aGVuKCgpID0+IHtcclxuICAgICAgdGhpcy5tb2RhbENvbnRyb2wuZGVyZWdpc3Rlck1vZGFsKHRoaXMpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuY29udGFpbmVyIGluc3RhbmNlb2YgT3ZlcmxheVJlZikge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmRpc3Bvc2UoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xyXG4gICAgICB0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xyXG4gICAgfSk7XHJcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0SWQpO1xyXG4gIH1cclxuXHJcbiAgc2V0Rm9vdGVyV2l0aFRlbXBsYXRlKHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjx7fT4pOiB2b2lkIHtcclxuICAgIHRoaXMubnpGb290ZXIgPSB0ZW1wbGF0ZVJlZjtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgc2V0T3ZlcmxheVJlZihvdmVybGF5UmVmOiBPdmVybGF5UmVmKTogdm9pZCB7XHJcbiAgICB0aGlzLm92ZXJsYXlSZWYgPSBvdmVybGF5UmVmO1xyXG4gIH1cclxuXHJcbiAga2V5ZG93bkxpc3RlbmVyKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gRVNDQVBFICYmIHRoaXMubnpLZXlib2FyZCkge1xyXG4gICAgICB0aGlzLm9uQ2xpY2tPa0NhbmNlbCgnY2FuY2VsJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvcGVuKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jaGFuZ2VWaXNpYmxlRnJvbUluc2lkZSh0cnVlKTtcclxuICB9XHJcblxyXG4gIGNsb3NlKHJlc3VsdD86IFIpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hhbmdlVmlzaWJsZUZyb21JbnNpZGUoZmFsc2UsIHJlc3VsdCk7XHJcbiAgfVxyXG5cclxuICBkZXN0cm95KHJlc3VsdD86IFIpOiB2b2lkIHtcclxuICAgIC8vIERlc3Ryb3kgZXF1YWxzIENsb3NlXHJcbiAgICB0aGlzLmNsb3NlKHJlc3VsdCk7XHJcbiAgfVxyXG5cclxuICB0cmlnZ2VyT2soKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2xpY2tPa0NhbmNlbCgnb2snKTtcclxuICB9XHJcblxyXG4gIHRyaWdnZXJDYW5jZWwoKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2xpY2tPa0NhbmNlbCgnY2FuY2VsJyk7XHJcbiAgfVxyXG5cclxuICBnZXRJbnN0YW5jZSgpOiBOek1vZGFsQ29tcG9uZW50IHtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29udGVudENvbXBvbmVudFJlZigpOiBDb21wb25lbnRSZWY8VD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGVudENvbXBvbmVudFJlZjtcclxuICB9XHJcblxyXG4gIGdldENvbnRlbnRDb21wb25lbnQoKTogVCB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250ZW50Q29tcG9uZW50UmVmICYmIHRoaXMuY29udGVudENvbXBvbmVudFJlZi5pbnN0YW5jZTtcclxuICB9XHJcblxyXG4gIGdldEVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZiAmJiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICB9XHJcblxyXG4gIG9uTWFza0RpYWxvZ0Rvd24oKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpYWxvZ01vdXNlRG93biA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBvbkRpYWxvZ1VwKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZGlhbG9nTW91c2VEb3duKSB7XHJcbiAgICAgIHRoaXMudGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5kaWFsb2dNb3VzZURvd24gPSBmYWxzZTtcclxuICAgICAgfSwgMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrTWFzaygkZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5tYXNrICYmXHJcbiAgICAgIHRoaXMubWFza0Nsb3NhYmxlICYmXHJcbiAgICAgICgkZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuY29udGFpbnMoV1JBUF9DTEFTU19OQU1FKSAmJlxyXG4gICAgICB0aGlzLm56VmlzaWJsZSAmJlxyXG4gICAgICAhdGhpcy5kaWFsb2dNb3VzZURvd25cclxuICAgICkge1xyXG4gICAgICB0aGlzLm9uQ2xpY2tPa0NhbmNlbCgnY2FuY2VsJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc01vZGFsVHlwZSh0eXBlOiBNb2RhbFR5cGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm56TW9kYWxUeXBlID09PSB0eXBlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uQ2xpY2tDbG9zZUJ0bigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56VmlzaWJsZSkge1xyXG4gICAgICB0aGlzLm9uQ2xpY2tPa0NhbmNlbCgnY2FuY2VsJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25DbGlja09rQ2FuY2VsKHR5cGU6ICdvaycgfCAnY2FuY2VsJyk6IHZvaWQge1xyXG4gICAgY29uc3QgdHJpZ2dlciA9IHsgb2s6IHRoaXMubnpPbk9rLCBjYW5jZWw6IHRoaXMubnpPbkNhbmNlbCB9W3R5cGVdO1xyXG4gICAgY29uc3QgbG9hZGluZ0tleSA9IHsgb2s6ICduek9rTG9hZGluZycsIGNhbmNlbDogJ256Q2FuY2VsTG9hZGluZycgfVt0eXBlXTtcclxuICAgIGlmICh0cmlnZ2VyIGluc3RhbmNlb2YgRXZlbnRFbWl0dGVyKSB7XHJcbiAgICAgIHRyaWdnZXIuZW1pdCh0aGlzLmdldENvbnRlbnRDb21wb25lbnQoKSk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0cmlnZ2VyID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRyaWdnZXIodGhpcy5nZXRDb250ZW50Q29tcG9uZW50KCkpO1xyXG4gICAgICBjb25zdCBjYXNlQ2xvc2UgPSAoZG9DbG9zZTogYm9vbGVhbiB8IHZvaWQgfCB7fSkgPT4gZG9DbG9zZSAhPT0gZmFsc2UgJiYgdGhpcy5jbG9zZShkb0Nsb3NlIGFzIFIpOyAvLyBVc2VycyBjYW4gcmV0dXJuIFwiZmFsc2VcIiB0byBwcmV2ZW50IGNsb3NpbmcgYnkgZGVmYXVsdFxyXG4gICAgICBpZiAoaXNQcm9taXNlKHJlc3VsdCkpIHtcclxuICAgICAgICB0aGlzW2xvYWRpbmdLZXldID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCBoYW5kbGVUaGVuID0gKGRvQ2xvc2U6IGJvb2xlYW4gfCB2b2lkIHwge30pID0+IHtcclxuICAgICAgICAgIHRoaXNbbG9hZGluZ0tleV0gPSBmYWxzZTtcclxuICAgICAgICAgIGNhc2VDbG9zZShkb0Nsb3NlKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlc3VsdC50aGVuKGhhbmRsZVRoZW4pLmNhdGNoKGhhbmRsZVRoZW4pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNhc2VDbG9zZShyZXN1bHQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNOb25FbXB0eVN0cmluZyh2YWx1ZToge30pOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlICE9PSAnJztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc1RlbXBsYXRlUmVmKHZhbHVlOiB7fSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWY7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNDb21wb25lbnQodmFsdWU6IHt9KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBUeXBlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzTW9kYWxCdXR0b25zKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx7fT4gfCBBcnJheTxNb2RhbEJ1dHRvbk9wdGlvbnM8VD4+IHwgbnVsbCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA+IDA7XHJcbiAgfVxyXG5cclxuICAvLyBEbyByZXN0IHRoaW5ncyB3aGVuIHZpc2libGUgc3RhdGUgY2hhbmdlZFxyXG4gIHByaXZhdGUgaGFuZGxlVmlzaWJsZVN0YXRlQ2hhbmdlKHZpc2libGU6IGJvb2xlYW4sIGFuaW1hdGlvbjogYm9vbGVhbiA9IHRydWUsIGNsb3NlUmVzdWx0PzogUik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgaWYgKHZpc2libGUpIHtcclxuICAgICAgLy8gSGlkZSBzY3JvbGxiYXIgYXQgdGhlIGZpcnN0IHRpbWUgd2hlbiBzaG93biB1cFxyXG4gICAgICB0aGlzLnNjcm9sbFN0cmF0ZWd5LmVuYWJsZSgpO1xyXG4gICAgICB0aGlzLnNhdmVQcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQoKTtcclxuICAgICAgdGhpcy50cmFwRm9jdXMoKTtcclxuICAgICAgaWYgKHRoaXMuY29udGFpbmVyIGluc3RhbmNlb2YgT3ZlcmxheVJlZikge1xyXG4gICAgICAgIHRoaXMub3ZlcmxheUtleWJvYXJkRGlzcGF0Y2hlci5hZGQodGhpcy5vdmVybGF5UmVmKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMuY29udGFpbmVyIGluc3RhbmNlb2YgT3ZlcmxheVJlZikge1xyXG4gICAgICAgIHRoaXMub3ZlcmxheUtleWJvYXJkRGlzcGF0Y2hlci5yZW1vdmUodGhpcy5vdmVybGF5UmVmKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoYW5pbWF0aW9uID8gdGhpcy5hbmltYXRlVG8odmlzaWJsZSkgOiB1bmRlZmluZWQpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAvLyBFbWl0IG9wZW4vY2xvc2UgZXZlbnQgYWZ0ZXIgYW5pbWF0aW9ucyBvdmVyXHJcbiAgICAgIGlmICh2aXNpYmxlKSB7XHJcbiAgICAgICAgdGhpcy5uekFmdGVyT3Blbi5lbWl0KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5uekFmdGVyQ2xvc2UuZW1pdChjbG9zZVJlc3VsdCk7XHJcbiAgICAgICAgdGhpcy5yZXN0b3JlRm9jdXMoKTtcclxuICAgICAgICB0aGlzLnNjcm9sbFN0cmF0ZWd5LmRpc2FibGUoKTtcclxuICAgICAgICAvLyBNYXJrIHRoZSBmb3IgY2hlY2sgc28gaXQgY2FuIHJlYWN0IGlmIHRoZSB2aWV3IGNvbnRhaW5lciBpcyB1c2luZyBPblB1c2ggY2hhbmdlIGRldGVjdGlvbi5cclxuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBMb29rdXAgYSBidXR0b24ncyBwcm9wZXJ0eSwgaWYgdGhlIHByb3AgaXMgYSBmdW5jdGlvbiwgY2FsbCAmIHRoZW4gcmV0dXJuIHRoZSByZXN1bHQsIG90aGVyd2lzZSwgcmV0dXJuIGl0c2VsZi5cclxuICBwdWJsaWMgZ2V0QnV0dG9uQ2FsbGFibGVQcm9wKG9wdGlvbnM6IE1vZGFsQnV0dG9uT3B0aW9uczxUPiwgcHJvcDogc3RyaW5nKToge30ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBvcHRpb25zW3Byb3BdO1xyXG4gICAgY29uc3QgYXJnczogVFtdID0gW107XHJcbiAgICBpZiAodGhpcy5jb250ZW50Q29tcG9uZW50UmVmKSB7XHJcbiAgICAgIGFyZ3MucHVzaCh0aGlzLmNvbnRlbnRDb21wb25lbnRSZWYuaW5zdGFuY2UpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLmFwcGx5KG9wdGlvbnMsIGFyZ3MpIDogdmFsdWU7XHJcbiAgfVxyXG5cclxuICAvLyBPbiBuekZvb3RlcidzIG1vZGFsIGJ1dHRvbiBjbGlja1xyXG4gIHB1YmxpYyBvbkJ1dHRvbkNsaWNrKGJ1dHRvbjogTW9kYWxCdXR0b25PcHRpb25zPFQ+KTogdm9pZCB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmdldEJ1dHRvbkNhbGxhYmxlUHJvcChidXR0b24sICdvbkNsaWNrJyk7IC8vIENhbGwgb25DbGljayBkaXJlY3RseVxyXG4gICAgaWYgKGlzUHJvbWlzZShyZXN1bHQpKSB7XHJcbiAgICAgIGJ1dHRvbi5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgcmVzdWx0LnRoZW4oKCkgPT4gKGJ1dHRvbi5sb2FkaW5nID0gZmFsc2UpKS5jYXRjaCgoKSA9PiAoYnV0dG9uLmxvYWRpbmcgPSBmYWxzZSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQ2hhbmdlIG56VmlzaWJsZSBmcm9tIGluc2lkZVxyXG4gIHByaXZhdGUgY2hhbmdlVmlzaWJsZUZyb21JbnNpZGUodmlzaWJsZTogYm9vbGVhbiwgY2xvc2VSZXN1bHQ/OiBSKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBpZiAodGhpcy5uelZpc2libGUgIT09IHZpc2libGUpIHtcclxuICAgICAgLy8gQ2hhbmdlIG56VmlzaWJsZSB2YWx1ZSBpbW1lZGlhdGVseVxyXG4gICAgICB0aGlzLm56VmlzaWJsZSA9IHZpc2libGU7XHJcbiAgICAgIHRoaXMubnpWaXNpYmxlQ2hhbmdlLmVtaXQodmlzaWJsZSk7XHJcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVZpc2libGVTdGF0ZUNoYW5nZSh2aXNpYmxlLCB0cnVlLCBjbG9zZVJlc3VsdCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoYW5nZUFuaW1hdGlvblN0YXRlKHN0YXRlOiBBbmltYXRpb25TdGF0ZSk6IHZvaWQge1xyXG4gICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHN0YXRlO1xyXG4gICAgaWYgKHN0YXRlKSB7XHJcbiAgICAgIHRoaXMubWFza0FuaW1hdGlvbkNsYXNzTWFwID0ge1xyXG4gICAgICAgIFtgZmFkZS0ke3N0YXRlfWBdOiB0cnVlLFxyXG4gICAgICAgIFtgZmFkZS0ke3N0YXRlfS1hY3RpdmVgXTogdHJ1ZVxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLm1vZGFsQW5pbWF0aW9uQ2xhc3NNYXAgPSB7XHJcbiAgICAgICAgW2B6b29tLSR7c3RhdGV9YF06IHRydWUsXHJcbiAgICAgICAgW2B6b29tLSR7c3RhdGV9LWFjdGl2ZWBdOiB0cnVlXHJcbiAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm1hc2tBbmltYXRpb25DbGFzc01hcCA9IHRoaXMubW9kYWxBbmltYXRpb25DbGFzc01hcCA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFuaW1hdGVUbyhpc1Zpc2libGU6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGlmIChpc1Zpc2libGUpIHtcclxuICAgICAgLy8gRmlndXJlIG91dCB0aGUgbGFzdGVzdCBjbGljayBwb3NpdGlvbiB3aGVuIHNob3dzIHVwXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy51cGRhdGVUcmFuc2Zvcm1PcmlnaW4oKSk7IC8vIFtOT1RFXSBVc2luZyB0aW1lb3V0IGR1ZSB0byB0aGUgZG9jdW1lbnQuY2xpY2sgZXZlbnQgaXMgZmlyZWQgbGF0ZXIgdGhhbiB2aXNpYmxlIGNoYW5nZSwgc28gaWYgbm90IHBvc3Rwb25lZCB0byBuZXh0IGV2ZW50LWxvb3AsIHdlIGNhbid0IGdldCB0aGUgbGFzdGVzdCBjbGljayBwb3NpdGlvblxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2hhbmdlQW5pbWF0aW9uU3RhdGUoaXNWaXNpYmxlID8gJ2VudGVyJyA6ICdsZWF2ZScpO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT5cclxuICAgICAgc2V0VGltZW91dChcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAvLyBSZXR1cm4gd2hlbiBhbmltYXRpb24gaXMgb3ZlclxyXG4gICAgICAgICAgdGhpcy5jaGFuZ2VBbmltYXRpb25TdGF0ZShudWxsKTtcclxuICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRoaXMubnpOb0FuaW1hdGlvbiA/IDAgOiBNT0RBTF9BTklNQVRFX0RVUkFUSU9OXHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZvcm1hdE1vZGFsQnV0dG9ucyhidXR0b25zOiBBcnJheTxNb2RhbEJ1dHRvbk9wdGlvbnM8VD4+KTogQXJyYXk8TW9kYWxCdXR0b25PcHRpb25zPFQ+PiB7XHJcbiAgICByZXR1cm4gYnV0dG9ucy5tYXAoYnV0dG9uID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi57XHJcbiAgICAgICAgICB0eXBlOiAnZGVmYXVsdCcsXHJcbiAgICAgICAgICBzaXplOiAnZGVmYXVsdCcsXHJcbiAgICAgICAgICBhdXRvTG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGRpc2FibGVkOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLi4uYnV0dG9uXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIGNvbXBvbmVudCBkeW5hbWljYWxseSBidXQgbm90IGF0dGFjaCB0byBhbnkgVmlldyAodGhpcyBhY3Rpb24gd2lsbCBiZSBleGVjdXRlZCB3aGVuIGJvZHlDb250YWluZXIgaXMgcmVhZHkpXHJcbiAgICogQHBhcmFtIGNvbXBvbmVudCBDb21wb25lbnQgY2xhc3NcclxuICAgKi9cclxuICBwcml2YXRlIGNyZWF0ZUR5bmFtaWNDb21wb25lbnQoY29tcG9uZW50OiBUeXBlPFQ+KTogdm9pZCB7XHJcbiAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5jZnIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50KTtcclxuICAgIGNvbnN0IGNoaWxkSW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoe1xyXG4gICAgICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IE56TW9kYWxSZWYsIHVzZVZhbHVlOiB0aGlzIH1dLFxyXG4gICAgICBwYXJlbnQ6IHRoaXMudmlld0NvbnRhaW5lci5wYXJlbnRJbmplY3RvclxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNvbnRlbnRDb21wb25lbnRSZWYgPSBmYWN0b3J5LmNyZWF0ZShjaGlsZEluamVjdG9yKTtcclxuICAgIGlmICh0aGlzLm56Q29tcG9uZW50UGFyYW1zKSB7XHJcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5jb250ZW50Q29tcG9uZW50UmVmLmluc3RhbmNlLCB0aGlzLm56Q29tcG9uZW50UGFyYW1zKTtcclxuICAgIH1cclxuICAgIC8vIERvIHRoZSBmaXJzdCBjaGFuZ2UgZGV0ZWN0aW9uIGltbWVkaWF0ZWx5IChvciB3ZSBkbyBkZXRlY3Rpb24gYXQgbmdBZnRlclZpZXdJbml0LCBtdWx0aS1jaGFuZ2VzIGVycm9yIHdpbGwgYmUgdGhyb3duKVxyXG4gICAgdGhpcy5jb250ZW50Q29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIC8vIFVwZGF0ZSB0cmFuc2Zvcm0tb3JpZ2luIHRvIHRoZSBsYXN0IGNsaWNrIHBvc2l0aW9uIG9uIGRvY3VtZW50XHJcbiAgcHJpdmF0ZSB1cGRhdGVUcmFuc2Zvcm1PcmlnaW4oKTogdm9pZCB7XHJcbiAgICBjb25zdCBtb2RhbEVsZW1lbnQgPSB0aGlzLm1vZGFsQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBpZiAodGhpcy5wcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQpIHtcclxuICAgICAgY29uc3QgcHJldmlvdXNseURPTVJlY3QgPSB0aGlzLnByZXZpb3VzbHlGb2N1c2VkRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgY29uc3QgbGFzdFBvc2l0aW9uID0gZ2V0RWxlbWVudE9mZnNldCh0aGlzLnByZXZpb3VzbHlGb2N1c2VkRWxlbWVudCk7XHJcbiAgICAgIGNvbnN0IHggPSBsYXN0UG9zaXRpb24ubGVmdCArIHByZXZpb3VzbHlET01SZWN0LndpZHRoIC8gMjtcclxuICAgICAgY29uc3QgeSA9IGxhc3RQb3NpdGlvbi50b3AgKyBwcmV2aW91c2x5RE9NUmVjdC5oZWlnaHQgLyAyO1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybU9yaWdpbiA9IGAke3ggLSBtb2RhbEVsZW1lbnQub2Zmc2V0TGVmdH1weCAke3kgLSBtb2RhbEVsZW1lbnQub2Zmc2V0VG9wfXB4IDBweGA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNhdmVQcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kb2N1bWVudCkge1xyXG4gICAgICB0aGlzLnByZXZpb3VzbHlGb2N1c2VkRWxlbWVudCA9IHRoaXMuZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdHJhcEZvY3VzKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmZvY3VzVHJhcCkge1xyXG4gICAgICB0aGlzLmZvY3VzVHJhcCA9IHRoaXMuZm9jdXNUcmFwRmFjdG9yeS5jcmVhdGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5mb2N1c1RyYXAuZm9jdXNJbml0aWFsRWxlbWVudFdoZW5SZWFkeSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZXN0b3JlRm9jdXMoKTogdm9pZCB7XHJcbiAgICAvLyBXZSBuZWVkIHRoZSBleHRyYSBjaGVjaywgYmVjYXVzZSBJRSBjYW4gc2V0IHRoZSBgYWN0aXZlRWxlbWVudGAgdG8gbnVsbCBpbiBzb21lIGNhc2VzLlxyXG4gICAgaWYgKHRoaXMucHJldmlvdXNseUZvY3VzZWRFbGVtZW50ICYmIHR5cGVvZiB0aGlzLnByZXZpb3VzbHlGb2N1c2VkRWxlbWVudC5mb2N1cyA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICB0aGlzLnByZXZpb3VzbHlGb2N1c2VkRWxlbWVudC5mb2N1cygpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZm9jdXNUcmFwKSB7XHJcbiAgICAgIHRoaXMuZm9jdXNUcmFwLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPG5nLXRlbXBsYXRlICN0cGxPcmlnaW5Db250ZW50PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L25nLXRlbXBsYXRlPlxyXG48IS0tIENvbXBhdGlibGU6IHRoZSA8bmctY29udGVudD4gY2FuIGFwcGVhciBvbmx5IG9uY2UgLS0+XHJcblxyXG48ZGl2IFtuek5vQW5pbWF0aW9uXT1cIm56Tm9BbmltYXRpb25cIj5cclxuICA8ZGl2XHJcbiAgICAqbmdJZj1cIm1hc2tcIlxyXG4gICAgY2xhc3M9XCJhbnQtbW9kYWwtbWFza1wiXHJcbiAgICBbbmdDbGFzc109XCJtYXNrQW5pbWF0aW9uQ2xhc3NNYXBcIlxyXG4gICAgW2NsYXNzLmFudC1tb2RhbC1tYXNrLWhpZGRlbl09XCJoaWRkZW5cIlxyXG4gICAgW25nU3R5bGVdPVwibnpNYXNrU3R5bGVcIlxyXG4gICAgW3N0eWxlLnpJbmRleF09XCJuelpJbmRleFwiXHJcbiAgPjwvZGl2PlxyXG4gIDxkaXZcclxuICAgIChjbGljayk9XCJvbkNsaWNrTWFzaygkZXZlbnQpXCJcclxuICAgIChtb3VzZXVwKT1cIm9uRGlhbG9nVXAoKVwiXHJcbiAgICBjbGFzcz1cImFudC1tb2RhbC13cmFwIHt7IG56V3JhcENsYXNzTmFtZSB9fVwiXHJcbiAgICBbc3R5bGUuekluZGV4XT1cIm56WkluZGV4XCJcclxuICAgIFtzdHlsZS52aXNpYmlsaXR5XT1cImhpZGRlbiA/ICdoaWRkZW4nIDogbnVsbFwiXHJcbiAgICB0YWJpbmRleD1cIi0xXCJcclxuICAgIHJvbGU9XCJkaWFsb2dcIlxyXG4gID5cclxuICAgIDxkaXZcclxuICAgICAgI21vZGFsQ29udGFpbmVyXHJcbiAgICAgIGNsYXNzPVwiYW50LW1vZGFsIHt7IG56Q2xhc3NOYW1lIH19XCJcclxuICAgICAgKG1vdXNlZG93bik9XCJvbk1hc2tEaWFsb2dEb3duKClcIlxyXG4gICAgICBbbmdDbGFzc109XCJtb2RhbEFuaW1hdGlvbkNsYXNzTWFwXCJcclxuICAgICAgW25nU3R5bGVdPVwibnpTdHlsZVwiXHJcbiAgICAgIFtzdHlsZS53aWR0aF09XCJueldpZHRoIHwgbnpUb0Nzc1VuaXRcIlxyXG4gICAgICBbc3R5bGUudHJhbnNmb3JtLW9yaWdpbl09XCJ0cmFuc2Zvcm1PcmlnaW5cIlxyXG4gICAgICByb2xlPVwiZG9jdW1lbnRcIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LW1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAqbmdJZj1cIm56Q2xvc2FibGVcIlxyXG4gICAgICAgICAgKGNsaWNrKT1cIm9uQ2xpY2tDbG9zZUJ0bigpXCJcclxuICAgICAgICAgIGNsYXNzPVwiYW50LW1vZGFsLWNsb3NlXCJcclxuICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwibnpBcmlhTGFiZWxcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYW50LW1vZGFsLWNsb3NlLXhcIj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56Q2xvc2VJY29uXCI+XHJcbiAgICAgICAgICAgICAgPGkgbnotaWNvbiBbbnpUeXBlXT1cIm56Q2xvc2VJY29uXCIgY2xhc3M9XCJhbnQtbW9kYWwtY2xvc2UtaWNvblwiPjwvaT5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFoaWRkZW5cIiBbbmdTd2l0Y2hdPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAqbmdTd2l0Y2hDYXNlPVwiaXNNb2RhbFR5cGUoJ2RlZmF1bHQnKVwiXHJcbiAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRwbENvbnRlbnREZWZhdWx0XCJcclxuICAgICAgICAgID48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXJcclxuICAgICAgICAgICAgKm5nU3dpdGNoQ2FzZT1cImlzTW9kYWxUeXBlKCdjb25maXJtJylcIlxyXG4gICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJ0cGxDb250ZW50Q29uZmlybVwiXHJcbiAgICAgICAgICA+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuPCEtLSBbUHJlZGVmaW5lZF0gRGVmYXVsdCBNb2RhbCBDb250ZW50IC0tPlxyXG48bmctdGVtcGxhdGUgI3RwbENvbnRlbnREZWZhdWx0PlxyXG4gIDxkaXYgKm5nSWY9XCJuelRpdGxlXCIgY2xhc3M9XCJhbnQtbW9kYWwtaGVhZGVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYW50LW1vZGFsLXRpdGxlXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cInRydWVcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyXHJcbiAgICAgICAgICAqbmdTd2l0Y2hDYXNlPVwiaXNUZW1wbGF0ZVJlZihuelRpdGxlKVwiXHJcbiAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJuelRpdGxlXCJcclxuICAgICAgICA+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiaXNOb25FbXB0eVN0cmluZyhuelRpdGxlKVwiXHJcbiAgICAgICAgICA+PGRpdiBbaW5uZXJIVE1MXT1cIm56VGl0bGVcIj48L2RpdlxyXG4gICAgICAgID48L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiYW50LW1vZGFsLWJvZHlcIiBbbmdTdHlsZV09XCJuekJvZHlTdHlsZVwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAjYm9keUNvbnRhaW5lcj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpc0NvbXBvbmVudChuekNvbnRlbnQpXCIgW25nU3dpdGNoXT1cInRydWVcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyXHJcbiAgICAgICAgICAqbmdTd2l0Y2hDYXNlPVwiaXNUZW1wbGF0ZVJlZihuekNvbnRlbnQpXCJcclxuICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIm56Q29udGVudFwiXHJcbiAgICAgICAgPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzTm9uRW1wdHlTdHJpbmcobnpDb250ZW50KVwiXHJcbiAgICAgICAgICA+PGRpdiBbaW5uZXJIVE1MXT1cIm56Q29udGVudFwiPjwvZGl2XHJcbiAgICAgICAgPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoRGVmYXVsdCBbbmdUZW1wbGF0ZU91dGxldF09XCJ0cGxPcmlnaW5Db250ZW50XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiAqbmdJZj1cIm56Rm9vdGVyICE9PSBudWxsXCIgY2xhc3M9XCJhbnQtbW9kYWwtZm9vdGVyXCI+XHJcbiAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJ0cnVlXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXJcclxuICAgICAgICAqbmdTd2l0Y2hDYXNlPVwiaXNUZW1wbGF0ZVJlZihuekZvb3RlcilcIlxyXG4gICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIm56Rm9vdGVyXCJcclxuICAgICAgPjwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJpc05vbkVtcHR5U3RyaW5nKG56Rm9vdGVyKVwiXHJcbiAgICAgICAgPjxkaXYgW2lubmVySFRNTF09XCJuekZvb3RlclwiPjwvZGl2XHJcbiAgICAgID48L25nLWNvbnRhaW5lcj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiaXNNb2RhbEJ1dHRvbnMobnpGb290ZXIpXCI+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgKm5nRm9yPVwibGV0IGJ1dHRvbiBvZiBuekZvb3RlclwiXHJcbiAgICAgICAgICBuei1idXR0b25cclxuICAgICAgICAgIChjbGljayk9XCJvbkJ1dHRvbkNsaWNrKGJ1dHRvbilcIlxyXG4gICAgICAgICAgW2hpZGRlbl09XCIhZ2V0QnV0dG9uQ2FsbGFibGVQcm9wKGJ1dHRvbiwgJ3Nob3cnKVwiXHJcbiAgICAgICAgICBbbnpMb2FkaW5nXT1cImdldEJ1dHRvbkNhbGxhYmxlUHJvcChidXR0b24sICdsb2FkaW5nJylcIlxyXG4gICAgICAgICAgW2Rpc2FibGVkXT1cImdldEJ1dHRvbkNhbGxhYmxlUHJvcChidXR0b24sICdkaXNhYmxlZCcpXCJcclxuICAgICAgICAgIFtuelR5cGVdPVwiYnV0dG9uLnR5cGVcIlxyXG4gICAgICAgICAgW256U2hhcGVdPVwiYnV0dG9uLnNoYXBlXCJcclxuICAgICAgICAgIFtuelNpemVdPVwiYnV0dG9uLnNpemVcIlxyXG4gICAgICAgICAgW256R2hvc3RdPVwiYnV0dG9uLmdob3N0XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7eyBidXR0b24ubGFiZWwgfX1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoRGVmYXVsdD5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAqbmdJZj1cIm56Q2FuY2VsVGV4dCAhPT0gbnVsbFwiXHJcbiAgICAgICAgICBuei1idXR0b25cclxuICAgICAgICAgIChjbGljayk9XCJvbkNsaWNrT2tDYW5jZWwoJ2NhbmNlbCcpXCJcclxuICAgICAgICAgIFtuekxvYWRpbmddPVwibnpDYW5jZWxMb2FkaW5nXCJcclxuICAgICAgICAgIFtkaXNhYmxlZF09XCJuekNhbmNlbERpc2FibGVkXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7eyBjYW5jZWxUZXh0IH19XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgKm5nSWY9XCJuek9rVGV4dCAhPT0gbnVsbFwiXHJcbiAgICAgICAgICBuei1idXR0b25cclxuICAgICAgICAgIFtuelR5cGVdPVwibnpPa1R5cGVcIlxyXG4gICAgICAgICAgKGNsaWNrKT1cIm9uQ2xpY2tPa0NhbmNlbCgnb2snKVwiXHJcbiAgICAgICAgICBbbnpMb2FkaW5nXT1cIm56T2tMb2FkaW5nXCJcclxuICAgICAgICAgIFtkaXNhYmxlZF09XCJuek9rRGlzYWJsZWRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt7IG9rVGV4dCB9fVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIDwvZGl2PlxyXG48L25nLXRlbXBsYXRlPlxyXG48IS0tIC9bUHJlZGVmaW5lZF0gRGVmYXVsdCBNb2RhbCBDb250ZW50IC0tPlxyXG5cclxuPCEtLSBbUHJlZGVmaW5lZF0gQ29uZmlybSBNb2RhbCBDb250ZW50IC0tPlxyXG48bmctdGVtcGxhdGUgI3RwbENvbnRlbnRDb25maXJtPlxyXG4gIDxkaXYgY2xhc3M9XCJhbnQtbW9kYWwtYm9keVwiIFtuZ1N0eWxlXT1cIm56Qm9keVN0eWxlXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYW50LW1vZGFsLWNvbmZpcm0tYm9keS13cmFwcGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtbW9kYWwtY29uZmlybS1ib2R5XCI+XHJcbiAgICAgICAgPGkgbnotaWNvbiBbbnpUeXBlXT1cIm56SWNvblR5cGVcIj48L2k+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtbW9kYWwtY29uZmlybS10aXRsZVwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgKm5nU3dpdGNoQ2FzZT1cImlzVGVtcGxhdGVSZWYobnpUaXRsZSlcIlxyXG4gICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIm56VGl0bGVcIlxyXG4gICAgICAgICAgICA+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzTm9uRW1wdHlTdHJpbmcobnpUaXRsZSlcIlxyXG4gICAgICAgICAgICAgID48c3BhbiBbaW5uZXJIVE1MXT1cIm56VGl0bGVcIj48L3NwYW5cclxuICAgICAgICAgICAgPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtbW9kYWwtY29uZmlybS1jb250ZW50XCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICNib2R5Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWlzQ29tcG9uZW50KG56Q29udGVudClcIiBbbmdTd2l0Y2hdPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXJcclxuICAgICAgICAgICAgICAgICpuZ1N3aXRjaENhc2U9XCJpc1RlbXBsYXRlUmVmKG56Q29udGVudClcIlxyXG4gICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwibnpDb250ZW50XCJcclxuICAgICAgICAgICAgICA+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiaXNOb25FbXB0eVN0cmluZyhuekNvbnRlbnQpXCJcclxuICAgICAgICAgICAgICAgID48ZGl2IFtpbm5lckhUTUxdPVwibnpDb250ZW50XCI+PC9kaXZcclxuICAgICAgICAgICAgICA+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hEZWZhdWx0IFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRwbE9yaWdpbkNvbnRlbnRcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtbW9kYWwtY29uZmlybS1idG5zXCI+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgKm5nSWY9XCJuekNhbmNlbFRleHQgIT09IG51bGxcIlxyXG4gICAgICAgICAgbnotYnV0dG9uXHJcbiAgICAgICAgICAoY2xpY2spPVwib25DbGlja09rQ2FuY2VsKCdjYW5jZWwnKVwiXHJcbiAgICAgICAgICBbbnpMb2FkaW5nXT1cIm56Q2FuY2VsTG9hZGluZ1wiXHJcbiAgICAgICAgICBbZGlzYWJsZWRdPVwibnpDYW5jZWxEaXNhYmxlZFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3sgY2FuY2VsVGV4dCB9fVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgICNhdXRvRm9jdXNCdXR0b25Pa1xyXG4gICAgICAgICAgKm5nSWY9XCJuek9rVGV4dCAhPT0gbnVsbFwiXHJcbiAgICAgICAgICBuei1idXR0b25cclxuICAgICAgICAgIChjbGljayk9XCJvbkNsaWNrT2tDYW5jZWwoJ29rJylcIlxyXG4gICAgICAgICAgW256VHlwZV09XCJuek9rVHlwZVwiXHJcbiAgICAgICAgICBbbnpMb2FkaW5nXT1cIm56T2tMb2FkaW5nXCJcclxuICAgICAgICAgIFtkaXNhYmxlZF09XCJuek9rRGlzYWJsZWRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt7IG9rVGV4dCB9fVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPCEtLSAvLmFudC1tb2RhbC1jb25maXJtLWJvZHktd3JhcHBlciAtLT5cclxuICA8L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuPCEtLSAvW1ByZWRlZmluZWRdIENvbmZpcm0gTW9kYWwgQ29udGVudCAtLT5cclxuIl19