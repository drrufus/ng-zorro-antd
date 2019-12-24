import { __assign, __decorate, __extends, __metadata } from "tslib";
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
var _c0 = ["modalContainer"];
var _c1 = ["bodyContainer"];
var _c2 = ["autoFocusButtonOk"];
function NzModalComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
function NzModalComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 11);
} if (rf & 2) {
    var ctx_r1308 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("z-index", ctx_r1308.nzZIndex);
    i0.ɵɵclassProp("ant-modal-mask-hidden", ctx_r1308.hidden);
    i0.ɵɵproperty("ngClass", ctx_r1308.maskAnimationClassMap)("ngStyle", ctx_r1308.nzMaskStyle);
} }
function NzModalComponent_button_9_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "i", 15);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1316 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzType", ctx_r1316.nzCloseIcon);
} }
function NzModalComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    var _r1318 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 12);
    i0.ɵɵlistener("click", function NzModalComponent_button_9_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r1318); var ctx_r1317 = i0.ɵɵnextContext(); return ctx_r1317.onClickCloseBtn(); });
    i0.ɵɵelementStart(1, "span", 13);
    i0.ɵɵtemplate(2, NzModalComponent_button_9_ng_container_2_Template, 2, 1, "ng-container", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1310 = i0.ɵɵnextContext();
    i0.ɵɵattribute("aria-label", ctx_r1310.nzAriaLabel);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r1310.nzCloseIcon);
} }
function NzModalComponent_ng_container_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 18);
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    var _r1312 = i0.ɵɵreference(12);
    i0.ɵɵproperty("ngTemplateOutlet", _r1312);
} }
function NzModalComponent_ng_container_10_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 18);
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    var _r1314 = i0.ɵɵreference(14);
    i0.ɵɵproperty("ngTemplateOutlet", _r1314);
} }
function NzModalComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 16);
    i0.ɵɵtemplate(1, NzModalComponent_ng_container_10_ng_container_1_Template, 1, 1, "ng-container", 17);
    i0.ɵɵtemplate(2, NzModalComponent_ng_container_10_ng_container_2_Template, 1, 1, "ng-container", 17);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1311 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngSwitch", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r1311.isModalType("default"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r1311.isModalType("confirm"));
} }
function NzModalComponent_ng_template_11_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 18);
} if (rf & 2) {
    var ctx_r1325 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1325.nzTitle);
} }
function NzModalComponent_ng_template_11_div_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 26);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1326 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", ctx_r1326.nzTitle, i0.ɵɵsanitizeHtml);
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
    var ctx_r1321 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngSwitch", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r1321.isTemplateRef(ctx_r1321.nzTitle));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r1321.isNonEmptyString(ctx_r1321.nzTitle));
} }
function NzModalComponent_ng_template_11_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 18);
} if (rf & 2) {
    var ctx_r1327 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1327.nzContent);
} }
function NzModalComponent_ng_template_11_ng_container_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 26);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1328 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", ctx_r1328.nzContent, i0.ɵɵsanitizeHtml);
} }
function NzModalComponent_ng_template_11_ng_container_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 18);
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    var _r1306 = i0.ɵɵreference(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r1306);
} }
function NzModalComponent_ng_template_11_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 16);
    i0.ɵɵtemplate(1, NzModalComponent_ng_template_11_ng_container_4_ng_container_1_Template, 1, 1, "ng-container", 17);
    i0.ɵɵtemplate(2, NzModalComponent_ng_template_11_ng_container_4_ng_container_2_Template, 2, 1, "ng-container", 25);
    i0.ɵɵtemplate(3, NzModalComponent_ng_template_11_ng_container_4_ng_container_3_Template, 1, 1, "ng-container", 27);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1323 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngSwitch", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r1323.isTemplateRef(ctx_r1323.nzContent));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r1323.isNonEmptyString(ctx_r1323.nzContent));
} }
function NzModalComponent_ng_template_11_div_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 18);
} if (rf & 2) {
    var ctx_r1330 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1330.nzFooter);
} }
function NzModalComponent_ng_template_11_div_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 26);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1331 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", ctx_r1331.nzFooter, i0.ɵɵsanitizeHtml);
} }
function NzModalComponent_ng_template_11_div_5_ng_container_4_button_1_Template(rf, ctx) { if (rf & 1) {
    var _r1337 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 31);
    i0.ɵɵlistener("click", function NzModalComponent_ng_template_11_div_5_ng_container_4_button_1_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r1337); var button_r1335 = ctx.$implicit; var ctx_r1336 = i0.ɵɵnextContext(4); return ctx_r1336.onButtonClick(button_r1335); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var button_r1335 = ctx.$implicit;
    var ctx_r1334 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("hidden", !ctx_r1334.getButtonCallableProp(button_r1335, "show"))("nzLoading", ctx_r1334.getButtonCallableProp(button_r1335, "loading"))("disabled", ctx_r1334.getButtonCallableProp(button_r1335, "disabled"))("nzType", button_r1335.type)("nzShape", button_r1335.shape)("nzSize", button_r1335.size)("nzGhost", button_r1335.ghost);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", button_r1335.label, " ");
} }
function NzModalComponent_ng_template_11_div_5_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzModalComponent_ng_template_11_div_5_ng_container_4_button_1_Template, 2, 8, "button", 30);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1332 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1332.nzFooter);
} }
function NzModalComponent_ng_template_11_div_5_ng_container_5_button_1_Template(rf, ctx) { if (rf & 1) {
    var _r1341 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 34);
    i0.ɵɵlistener("click", function NzModalComponent_ng_template_11_div_5_ng_container_5_button_1_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r1341); var ctx_r1340 = i0.ɵɵnextContext(4); return ctx_r1340.onClickOkCancel("cancel"); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1338 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("nzLoading", ctx_r1338.nzCancelLoading)("disabled", ctx_r1338.nzCancelDisabled);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1338.cancelText, " ");
} }
function NzModalComponent_ng_template_11_div_5_ng_container_5_button_2_Template(rf, ctx) { if (rf & 1) {
    var _r1343 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 35);
    i0.ɵɵlistener("click", function NzModalComponent_ng_template_11_div_5_ng_container_5_button_2_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r1343); var ctx_r1342 = i0.ɵɵnextContext(4); return ctx_r1342.onClickOkCancel("ok"); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1339 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("nzType", ctx_r1339.nzOkType)("nzLoading", ctx_r1339.nzOkLoading)("disabled", ctx_r1339.nzOkDisabled);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1339.okText, " ");
} }
function NzModalComponent_ng_template_11_div_5_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzModalComponent_ng_template_11_div_5_ng_container_5_button_1_Template, 2, 3, "button", 32);
    i0.ɵɵtemplate(2, NzModalComponent_ng_template_11_div_5_ng_container_5_button_2_Template, 2, 4, "button", 33);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1333 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1333.nzCancelText !== null);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1333.nzOkText !== null);
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
    var ctx_r1324 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitch", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r1324.isTemplateRef(ctx_r1324.nzFooter));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r1324.isNonEmptyString(ctx_r1324.nzFooter));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r1324.isModalButtons(ctx_r1324.nzFooter));
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
    var ctx_r1313 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r1313.nzTitle);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", ctx_r1313.nzBodyStyle);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r1313.isComponent(ctx_r1313.nzContent));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1313.nzFooter !== null);
} }
function NzModalComponent_ng_template_13_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 18);
} if (rf & 2) {
    var ctx_r1344 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1344.nzTitle);
} }
function NzModalComponent_ng_template_13_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "span", 26);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1345 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", ctx_r1345.nzTitle, i0.ɵɵsanitizeHtml);
} }
function NzModalComponent_ng_template_13_ng_container_11_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 18);
} if (rf & 2) {
    var ctx_r1350 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1350.nzContent);
} }
function NzModalComponent_ng_template_13_ng_container_11_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 26);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1351 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", ctx_r1351.nzContent, i0.ɵɵsanitizeHtml);
} }
function NzModalComponent_ng_template_13_ng_container_11_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 18);
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    var _r1306 = i0.ɵɵreference(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r1306);
} }
function NzModalComponent_ng_template_13_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 16);
    i0.ɵɵtemplate(1, NzModalComponent_ng_template_13_ng_container_11_ng_container_1_Template, 1, 1, "ng-container", 17);
    i0.ɵɵtemplate(2, NzModalComponent_ng_template_13_ng_container_11_ng_container_2_Template, 2, 1, "ng-container", 25);
    i0.ɵɵtemplate(3, NzModalComponent_ng_template_13_ng_container_11_ng_container_3_Template, 1, 1, "ng-container", 27);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1347 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngSwitch", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r1347.isTemplateRef(ctx_r1347.nzContent));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r1347.isNonEmptyString(ctx_r1347.nzContent));
} }
function NzModalComponent_ng_template_13_button_13_Template(rf, ctx) { if (rf & 1) {
    var _r1354 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 34);
    i0.ɵɵlistener("click", function NzModalComponent_ng_template_13_button_13_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r1354); var ctx_r1353 = i0.ɵɵnextContext(2); return ctx_r1353.onClickOkCancel("cancel"); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1348 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("nzLoading", ctx_r1348.nzCancelLoading)("disabled", ctx_r1348.nzCancelDisabled);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1348.cancelText, " ");
} }
function NzModalComponent_ng_template_13_button_14_Template(rf, ctx) { if (rf & 1) {
    var _r1357 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 35, 42);
    i0.ɵɵlistener("click", function NzModalComponent_ng_template_13_button_14_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r1357); var ctx_r1356 = i0.ɵɵnextContext(2); return ctx_r1356.onClickOkCancel("ok"); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1349 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("nzType", ctx_r1349.nzOkType)("nzLoading", ctx_r1349.nzOkLoading)("disabled", ctx_r1349.nzOkDisabled);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1349.okText, " ");
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
    var ctx_r1315 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngStyle", ctx_r1315.nzBodyStyle);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("nzType", ctx_r1315.nzIconType);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngSwitch", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r1315.isTemplateRef(ctx_r1315.nzTitle));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r1315.isNonEmptyString(ctx_r1315.nzTitle));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", !ctx_r1315.isComponent(ctx_r1315.nzContent));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1315.nzCancelText !== null);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1315.nzOkText !== null);
} }
var _c3 = ["*"];
export var MODAL_ANIMATE_DURATION = 200; // Duration when perform animations (ms)
export var WRAP_CLASS_NAME = 'ant-modal-wrap';
var NZ_CONFIG_COMPONENT_NAME = 'modal';
var NzModalComponent = /** @class */ (function (_super) {
    __extends(NzModalComponent, _super);
    function NzModalComponent(nzConfigService, overlay, overlayKeyboardDispatcher, i18n, cfr, elementRef, viewContainer, modalControl, focusTrapFactory, cdr, nzModalGlobalConfig, document // tslint:disable-line:no-any
    ) {
        var _this = _super.call(this) || this;
        _this.nzConfigService = nzConfigService;
        _this.overlay = overlay;
        _this.overlayKeyboardDispatcher = overlayKeyboardDispatcher;
        _this.i18n = i18n;
        _this.cfr = cfr;
        _this.elementRef = elementRef;
        _this.viewContainer = viewContainer;
        _this.modalControl = modalControl;
        _this.focusTrapFactory = focusTrapFactory;
        _this.cdr = cdr;
        _this.nzModalGlobalConfig = nzModalGlobalConfig;
        _this.document = document;
        _this.nzVisible = false;
        _this.nzClosable = true;
        _this.nzOkLoading = false;
        _this.nzOkDisabled = false;
        _this.nzCancelDisabled = false;
        _this.nzCancelLoading = false;
        _this.nzKeyboard = true;
        _this.nzNoAnimation = false;
        _this.nzGetContainer = function () { return _this.overlay.create(); }; // [STATIC]
        _this.nzZIndex = 1000;
        _this.nzWidth = 520;
        _this.nzCloseIcon = 'close';
        _this.nzOkType = 'primary';
        _this.nzIconType = 'question-circle'; // Confirm Modal ONLY
        _this.nzModalType = 'default';
        _this.nzAriaLabel = 'Close';
        _this.nzOnOk = new EventEmitter();
        _this.nzOnCancel = new EventEmitter();
        _this.nzAfterOpen = new EventEmitter(); // Trigger when modal open(visible) after animations
        _this.nzAfterClose = new EventEmitter(); // Trigger when modal leave-animation over
        _this.nzVisibleChange = new EventEmitter();
        _this.locale = {};
        _this.transformOrigin = '0px 0px 0px'; // The origin point that animation based on
        _this.unsubscribe$ = new Subject();
        _this.dialogMouseDown = false;
        _this.scrollStrategy = _this.overlay.scrollStrategies.block();
        if (_this.nzModalGlobalConfig) {
            warnDeprecation('`NZ_MODAL_CONFIG` has been deprecated and will be removed in 9.0.0. Please use global config instead.');
        }
        return _this;
    }
    Object.defineProperty(NzModalComponent.prototype, "modalFooter", {
        set: function (value) {
            if (value && value.templateRef) {
                this.setFooterWithTemplate(value.templateRef);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzModalComponent.prototype, "afterOpen", {
        get: function () {
            // Observable alias for nzAfterOpen
            return this.nzAfterOpen.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzModalComponent.prototype, "afterClose", {
        get: function () {
            // Observable alias for nzAfterClose
            return this.nzAfterClose.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzModalComponent.prototype, "cancelText", {
        get: function () {
            return this.nzCancelText || this.locale.cancelText;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzModalComponent.prototype, "okText", {
        get: function () {
            return this.nzOkText || this.locale.okText;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzModalComponent.prototype, "hidden", {
        get: function () {
            return !this.nzVisible && !this.animationState;
        } // Indicate whether this dialog should hidden
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzModalComponent.prototype, "mask", {
        /**
         * @description
         * The calculated highest weight of mask value
         *
         * Weight of different mask input:
         * component default value < global configuration < component input value
         */
        get: function () {
            if (this.nzMask != null) {
                return this.nzMask;
            }
            else if (this.nzModalGlobalConfig && this.nzModalGlobalConfig.nzMask != null) {
                return this.nzModalGlobalConfig.nzMask;
            }
            else {
                return true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzModalComponent.prototype, "maskClosable", {
        /**
         * @description
         * The calculated highest weight of maskClosable value
         *
         * Weight of different maskClosable input:
         * component default value < global configuration < component input value
         */
        get: function () {
            if (this.nzMaskClosable != null) {
                return this.nzMaskClosable;
            }
            else if (this.nzModalGlobalConfig && this.nzModalGlobalConfig.nzMaskClosable != null) {
                return this.nzModalGlobalConfig.nzMaskClosable;
            }
            else {
                return true;
            }
        },
        enumerable: true,
        configurable: true
    });
    NzModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.i18n.localeChange.pipe(takeUntil(this.unsubscribe$)).subscribe(function () {
            _this.locale = _this.i18n.getLocaleData('Modal');
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
                .subscribe(function (e) { return _this.keydownListener(e); });
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
                .subscribe(function (e) { return _this.keydownListener(e); });
        }
        // Register modal when afterOpen/afterClose is stable
        this.modalControl.registerModal(this);
    };
    // [NOTE] NOT available when using by service!
    // Because ngOnChanges never be called when using by service,
    // here we can't support "nzContent"(Component) etc. as inputs that initialized dynamically.
    // BUT: User also can change "nzContent" dynamically to trigger UI changes (provided you don't use Component that needs initializations)
    NzModalComponent.prototype.ngOnChanges = function (changes) {
        if (changes.nzVisible) {
            this.handleVisibleStateChange(this.nzVisible, !changes.nzVisible.firstChange); // Do not trigger animation while initializing
        }
    };
    NzModalComponent.prototype.ngAfterViewInit = function () {
        // If using Component, it is the time to attach View while bodyContainer is ready
        if (this.contentComponentRef) {
            this.bodyContainer.insert(this.contentComponentRef.hostView);
        }
        if (this.autoFocusButtonOk) {
            this.autoFocusButtonOk.nativeElement.focus();
        }
    };
    NzModalComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        // Close self before destructing
        this.changeVisibleFromInside(false).then(function () {
            _this.modalControl.deregisterModal(_this);
            if (_this.container instanceof OverlayRef) {
                _this.container.dispose();
            }
            _this.unsubscribe$.next();
            _this.unsubscribe$.complete();
        });
        clearTimeout(this.timeoutId);
    };
    NzModalComponent.prototype.setFooterWithTemplate = function (templateRef) {
        this.nzFooter = templateRef;
        this.cdr.markForCheck();
    };
    NzModalComponent.prototype.setOverlayRef = function (overlayRef) {
        this.overlayRef = overlayRef;
    };
    NzModalComponent.prototype.keydownListener = function (event) {
        if (event.keyCode === ESCAPE && this.nzKeyboard) {
            this.onClickOkCancel('cancel');
        }
    };
    NzModalComponent.prototype.open = function () {
        this.changeVisibleFromInside(true);
    };
    NzModalComponent.prototype.close = function (result) {
        this.changeVisibleFromInside(false, result);
    };
    NzModalComponent.prototype.destroy = function (result) {
        // Destroy equals Close
        this.close(result);
    };
    NzModalComponent.prototype.triggerOk = function () {
        this.onClickOkCancel('ok');
    };
    NzModalComponent.prototype.triggerCancel = function () {
        this.onClickOkCancel('cancel');
    };
    NzModalComponent.prototype.getInstance = function () {
        return this;
    };
    NzModalComponent.prototype.getContentComponentRef = function () {
        return this.contentComponentRef;
    };
    NzModalComponent.prototype.getContentComponent = function () {
        return this.contentComponentRef && this.contentComponentRef.instance;
    };
    NzModalComponent.prototype.getElement = function () {
        return this.elementRef && this.elementRef.nativeElement;
    };
    NzModalComponent.prototype.onMaskDialogDown = function () {
        this.dialogMouseDown = true;
    };
    NzModalComponent.prototype.onDialogUp = function () {
        var _this = this;
        if (this.dialogMouseDown) {
            this.timeoutId = setTimeout(function () {
                _this.dialogMouseDown = false;
            }, 0);
        }
    };
    NzModalComponent.prototype.onClickMask = function ($event) {
        if (this.mask &&
            this.maskClosable &&
            $event.target.classList.contains(WRAP_CLASS_NAME) &&
            this.nzVisible &&
            !this.dialogMouseDown) {
            this.onClickOkCancel('cancel');
        }
    };
    NzModalComponent.prototype.isModalType = function (type) {
        return this.nzModalType === type;
    };
    NzModalComponent.prototype.onClickCloseBtn = function () {
        if (this.nzVisible) {
            this.onClickOkCancel('cancel');
        }
    };
    NzModalComponent.prototype.onClickOkCancel = function (type) {
        var _this = this;
        var trigger = { ok: this.nzOnOk, cancel: this.nzOnCancel }[type];
        var loadingKey = { ok: 'nzOkLoading', cancel: 'nzCancelLoading' }[type];
        if (trigger instanceof EventEmitter) {
            trigger.emit(this.getContentComponent());
        }
        else if (typeof trigger === 'function') {
            var result = trigger(this.getContentComponent());
            var caseClose_1 = function (doClose) { return doClose !== false && _this.close(doClose); }; // Users can return "false" to prevent closing by default
            if (isPromise(result)) {
                this[loadingKey] = true;
                var handleThen = function (doClose) {
                    _this[loadingKey] = false;
                    caseClose_1(doClose);
                };
                result.then(handleThen).catch(handleThen);
            }
            else {
                caseClose_1(result);
            }
        }
    };
    NzModalComponent.prototype.isNonEmptyString = function (value) {
        return typeof value === 'string' && value !== '';
    };
    NzModalComponent.prototype.isTemplateRef = function (value) {
        return value instanceof TemplateRef;
    };
    NzModalComponent.prototype.isComponent = function (value) {
        return value instanceof Type;
    };
    NzModalComponent.prototype.isModalButtons = function (value) {
        return Array.isArray(value) && value.length > 0;
    };
    // Do rest things when visible state changed
    NzModalComponent.prototype.handleVisibleStateChange = function (visible, animation, closeResult) {
        var _this = this;
        if (animation === void 0) { animation = true; }
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
        return Promise.resolve(animation ? this.animateTo(visible) : undefined).then(function () {
            // Emit open/close event after animations over
            if (visible) {
                _this.nzAfterOpen.emit();
            }
            else {
                _this.nzAfterClose.emit(closeResult);
                _this.restoreFocus();
                _this.scrollStrategy.disable();
                // Mark the for check so it can react if the view container is using OnPush change detection.
                _this.cdr.markForCheck();
            }
        });
    };
    // Lookup a button's property, if the prop is a function, call & then return the result, otherwise, return itself.
    NzModalComponent.prototype.getButtonCallableProp = function (options, prop) {
        var value = options[prop];
        var args = [];
        if (this.contentComponentRef) {
            args.push(this.contentComponentRef.instance);
        }
        return typeof value === 'function' ? value.apply(options, args) : value;
    };
    // On nzFooter's modal button click
    NzModalComponent.prototype.onButtonClick = function (button) {
        var result = this.getButtonCallableProp(button, 'onClick'); // Call onClick directly
        if (isPromise(result)) {
            button.loading = true;
            result.then(function () { return (button.loading = false); }).catch(function () { return (button.loading = false); });
        }
    };
    // Change nzVisible from inside
    NzModalComponent.prototype.changeVisibleFromInside = function (visible, closeResult) {
        if (this.nzVisible !== visible) {
            // Change nzVisible value immediately
            this.nzVisible = visible;
            this.nzVisibleChange.emit(visible);
            return this.handleVisibleStateChange(visible, true, closeResult);
        }
        return Promise.resolve();
    };
    NzModalComponent.prototype.changeAnimationState = function (state) {
        var _a, _b;
        this.animationState = state;
        if (state) {
            this.maskAnimationClassMap = (_a = {},
                _a["fade-" + state] = true,
                _a["fade-" + state + "-active"] = true,
                _a);
            this.modalAnimationClassMap = (_b = {},
                _b["zoom-" + state] = true,
                _b["zoom-" + state + "-active"] = true,
                _b);
        }
        else {
            this.maskAnimationClassMap = this.modalAnimationClassMap = null;
        }
    };
    NzModalComponent.prototype.animateTo = function (isVisible) {
        var _this = this;
        if (isVisible) {
            // Figure out the lastest click position when shows up
            setTimeout(function () { return _this.updateTransformOrigin(); }); // [NOTE] Using timeout due to the document.click event is fired later than visible change, so if not postponed to next event-loop, we can't get the lastest click position
        }
        this.changeAnimationState(isVisible ? 'enter' : 'leave');
        return new Promise(function (resolve) {
            return setTimeout(function () {
                // Return when animation is over
                _this.changeAnimationState(null);
                resolve();
            }, _this.nzNoAnimation ? 0 : MODAL_ANIMATE_DURATION);
        });
    };
    NzModalComponent.prototype.formatModalButtons = function (buttons) {
        return buttons.map(function (button) {
            return __assign({
                type: 'default',
                size: 'default',
                autoLoading: true,
                show: true,
                loading: false,
                disabled: false
            }, button);
        });
    };
    /**
     * Create a component dynamically but not attach to any View (this action will be executed when bodyContainer is ready)
     * @param component Component class
     */
    NzModalComponent.prototype.createDynamicComponent = function (component) {
        var factory = this.cfr.resolveComponentFactory(component);
        var childInjector = Injector.create({
            providers: [{ provide: NzModalRef, useValue: this }],
            parent: this.viewContainer.parentInjector
        });
        this.contentComponentRef = factory.create(childInjector);
        if (this.nzComponentParams) {
            Object.assign(this.contentComponentRef.instance, this.nzComponentParams);
        }
        // Do the first change detection immediately (or we do detection at ngAfterViewInit, multi-changes error will be thrown)
        this.contentComponentRef.changeDetectorRef.detectChanges();
    };
    // Update transform-origin to the last click position on document
    NzModalComponent.prototype.updateTransformOrigin = function () {
        var modalElement = this.modalContainer.nativeElement;
        if (this.previouslyFocusedElement) {
            var previouslyDOMRect = this.previouslyFocusedElement.getBoundingClientRect();
            var lastPosition = getElementOffset(this.previouslyFocusedElement);
            var x = lastPosition.left + previouslyDOMRect.width / 2;
            var y = lastPosition.top + previouslyDOMRect.height / 2;
            this.transformOrigin = x - modalElement.offsetLeft + "px " + (y - modalElement.offsetTop) + "px 0px";
        }
    };
    NzModalComponent.prototype.savePreviouslyFocusedElement = function () {
        if (this.document) {
            this.previouslyFocusedElement = this.document.activeElement;
        }
    };
    NzModalComponent.prototype.trapFocus = function () {
        if (!this.focusTrap) {
            this.focusTrap = this.focusTrapFactory.create(this.elementRef.nativeElement);
        }
        this.focusTrap.focusInitialElementWhenReady();
    };
    NzModalComponent.prototype.restoreFocus = function () {
        // We need the extra check, because IE can set the `activeElement` to null in some cases.
        if (this.previouslyFocusedElement && typeof this.previouslyFocusedElement.focus === 'function') {
            this.previouslyFocusedElement.focus();
        }
        if (this.focusTrap) {
            this.focusTrap.destroy();
        }
    };
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
    return NzModalComponent;
}(NzModalRef));
export { NzModalComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9tb2RhbC8iLCJzb3VyY2VzIjpbIm56LW1vZGFsLmNvbXBvbmVudC50cyIsIm56LW1vZGFsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQWEsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVoRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDL0MsT0FBTyxFQUF1QixPQUFPLEVBQUUseUJBQXlCLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0csT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCx3QkFBd0IsRUFFeEIsWUFBWSxFQUNaLFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLFFBQVEsRUFDUixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFFTixXQUFXLEVBQ1gsSUFBSSxFQUNKLFNBQVMsRUFDVCxnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDN0gsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxlQUFlLEVBQWlCLE1BQU0sbUJBQW1CLENBQUM7QUFDbkUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRC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OztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFFTCxLQUFLOztrQkFBSSxNQUFNOztrQkFDZixLQUFLOztrQkFBSSxNQUFNOztrQkFFZixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFFTixTQUFTO21CQUFDLGdCQUFnQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7a0JBQzVDLFNBQVM7bUJBQUMsZUFBZSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7O2tCQUNwRSxTQUFTO21CQUFDLG1CQUFtQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFOztrQkFFbEUsWUFBWTttQkFBQyxzQkFBc0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEZvY3VzVHJhcCwgRm9jdXNUcmFwRmFjdG9yeSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcclxuXHJcbmltcG9ydCB7IEVTQ0FQRSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XHJcbmltcG9ydCB7IEJsb2NrU2Nyb2xsU3RyYXRlZ3ksIE92ZXJsYXksIE92ZXJsYXlLZXlib2FyZERpc3BhdGNoZXIsIE92ZXJsYXlSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgQ29tcG9uZW50UmVmLFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbmplY3QsXHJcbiAgSW5qZWN0b3IsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVHlwZSxcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0NvbnRhaW5lclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IGdldEVsZW1lbnRPZmZzZXQsIElucHV0Qm9vbGVhbiwgaXNQcm9taXNlLCBOekNvbmZpZ1NlcnZpY2UsIHdhcm5EZXByZWNhdGlvbiwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5cclxuaW1wb3J0IHsgTlpfTU9EQUxfQ09ORklHLCBOek1vZGFsQ29uZmlnIH0gZnJvbSAnLi9uei1tb2RhbC1jb25maWcnO1xyXG5pbXBvcnQgeyBOek1vZGFsQ29udHJvbFNlcnZpY2UgfSBmcm9tICcuL256LW1vZGFsLWNvbnRyb2wuc2VydmljZSc7XHJcbmltcG9ydCB7IE56TW9kYWxGb290ZXJEaXJlY3RpdmUgfSBmcm9tICcuL256LW1vZGFsLWZvb3Rlci5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBOek1vZGFsUmVmIH0gZnJvbSAnLi9uei1tb2RhbC1yZWYuY2xhc3MnO1xyXG5pbXBvcnQgeyBNb2RhbEJ1dHRvbk9wdGlvbnMsIE1vZGFsT3B0aW9ucywgTW9kYWxUeXBlLCBPbkNsaWNrQ2FsbGJhY2sgfSBmcm9tICcuL256LW1vZGFsLnR5cGUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1PREFMX0FOSU1BVEVfRFVSQVRJT04gPSAyMDA7IC8vIER1cmF0aW9uIHdoZW4gcGVyZm9ybSBhbmltYXRpb25zIChtcylcclxuZXhwb3J0IGNvbnN0IFdSQVBfQ0xBU1NfTkFNRSA9ICdhbnQtbW9kYWwtd3JhcCc7XHJcblxyXG50eXBlIEFuaW1hdGlvblN0YXRlID0gJ2VudGVyJyB8ICdsZWF2ZScgfCBudWxsO1xyXG5cclxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ21vZGFsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotbW9kYWwnLFxyXG4gIGV4cG9ydEFzOiAnbnpNb2RhbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LW1vZGFsLmNvbXBvbmVudC5odG1sJyxcclxuICAvLyBVc2luZyBPblB1c2ggZm9yIG1vZGFsIGNhdXNlZCBmb290ZXIgY2FuIG5vdCB0byBkZXRlY3QgY2hhbmdlcy4gd2UgY2FuIGZpeCBpdCB3aGVuIDgueC5cclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LkRlZmF1bHRcclxufSlcclxuXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuZXhwb3J0IGNsYXNzIE56TW9kYWxDb21wb25lbnQ8VCA9IGFueSwgUiA9IGFueT4gZXh0ZW5kcyBOek1vZGFsUmVmPFQsIFI+XHJcbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBNb2RhbE9wdGlvbnM8VD4ge1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelZpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDbG9zYWJsZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56T2tMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56T2tEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekNhbmNlbERpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q2FuY2VsTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuektleWJvYXJkOiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpOb0FuaW1hdGlvbiA9IGZhbHNlO1xyXG5cclxuICAvLyBUT0RPKGhzdWFueHl6KTogYWRkIGRlZmF1bHQgdmFsdWUgb25jZSBvbGQgQVBJIGlzIGRlcHJlY2F0ZWQuXHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKSBASW5wdXRCb29sZWFuKCkgbnpNYXNrOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkgQElucHV0Qm9vbGVhbigpIG56TWFza0Nsb3NhYmxlOiBib29sZWFuO1xyXG5cclxuICBASW5wdXQoKSBuekNvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHt9PiB8IFR5cGU8VD47IC8vIFtTVEFUSUNdIElmIG5vdCBzcGVjaWZpZWQsIHdpbGwgdXNlIDxuZy1jb250ZW50PlxyXG4gIEBJbnB1dCgpIG56Q29tcG9uZW50UGFyYW1zOiBUOyAvLyBbU1RBVElDXSBPTkxZIGF2YWxpYWJsZSB3aGVuIG56Q29udGVudCBpcyBhIGNvbXBvbmVudFxyXG4gIEBJbnB1dCgpIG56Rm9vdGVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx7fT4gfCBBcnJheTxNb2RhbEJ1dHRvbk9wdGlvbnM8VD4+IHwgbnVsbDsgLy8gW1NUQVRJQ10gRGVmYXVsdCBNb2RhbCBPTkxZXHJcbiAgQElucHV0KCkgbnpHZXRDb250YWluZXI6IEhUTUxFbGVtZW50IHwgT3ZlcmxheVJlZiB8ICgoKSA9PiBIVE1MRWxlbWVudCB8IE92ZXJsYXlSZWYpID0gKCkgPT4gdGhpcy5vdmVybGF5LmNyZWF0ZSgpOyAvLyBbU1RBVElDXVxyXG4gIEBJbnB1dCgpIG56WkluZGV4OiBudW1iZXIgPSAxMDAwO1xyXG4gIEBJbnB1dCgpIG56V2lkdGg6IG51bWJlciB8IHN0cmluZyA9IDUyMDtcclxuICBASW5wdXQoKSBueldyYXBDbGFzc05hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBuekNsYXNzTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56U3R5bGU6IG9iamVjdDtcclxuICBASW5wdXQoKSBuelRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx7fT47XHJcbiAgQElucHV0KCkgbnpDbG9zZUljb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+ID0gJ2Nsb3NlJztcclxuICBASW5wdXQoKSBuek1hc2tTdHlsZTogb2JqZWN0O1xyXG4gIEBJbnB1dCgpIG56Qm9keVN0eWxlOiBvYmplY3Q7XHJcbiAgQElucHV0KCkgbnpPa1RleHQ6IHN0cmluZyB8IG51bGw7XHJcbiAgQElucHV0KCkgbnpDYW5jZWxUZXh0OiBzdHJpbmcgfCBudWxsO1xyXG4gIEBJbnB1dCgpIG56T2tUeXBlOiBzdHJpbmcgPSAncHJpbWFyeSc7XHJcbiAgQElucHV0KCkgbnpJY29uVHlwZTogc3RyaW5nID0gJ3F1ZXN0aW9uLWNpcmNsZSc7IC8vIENvbmZpcm0gTW9kYWwgT05MWVxyXG4gIEBJbnB1dCgpIG56TW9kYWxUeXBlOiBNb2RhbFR5cGUgPSAnZGVmYXVsdCc7XHJcbiAgQElucHV0KCkgbnpBcmlhTGFiZWw6IHN0cmluZyA9ICdDbG9zZSc7XHJcblxyXG4gIEBJbnB1dCgpIEBPdXRwdXQoKSByZWFkb25seSBuek9uT2s6IEV2ZW50RW1pdHRlcjxUPiB8IE9uQ2xpY2tDYWxsYmFjazxUPiA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcclxuICBASW5wdXQoKSBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkNhbmNlbDogRXZlbnRFbWl0dGVyPFQ+IHwgT25DbGlja0NhbGxiYWNrPFQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpBZnRlck9wZW4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7IC8vIFRyaWdnZXIgd2hlbiBtb2RhbCBvcGVuKHZpc2libGUpIGFmdGVyIGFuaW1hdGlvbnNcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpBZnRlckNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxSPigpOyAvLyBUcmlnZ2VyIHdoZW4gbW9kYWwgbGVhdmUtYW5pbWF0aW9uIG92ZXJcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpWaXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBAVmlld0NoaWxkKCdtb2RhbENvbnRhaW5lcicsIHsgc3RhdGljOiB0cnVlIH0pIG1vZGFsQ29udGFpbmVyOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2JvZHlDb250YWluZXInLCB7IHN0YXRpYzogZmFsc2UsIHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSkgYm9keUNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcclxuICBAVmlld0NoaWxkKCdhdXRvRm9jdXNCdXR0b25PaycsIHsgc3RhdGljOiBmYWxzZSwgcmVhZDogRWxlbWVudFJlZiB9KSBhdXRvRm9jdXNCdXR0b25PazogRWxlbWVudFJlZjsgLy8gT25seSBhaW0gdG8gZm9jdXMgdGhlIG9rIGJ1dHRvbiB0aGF0IG5lZWRzIHRvIGJlIGF1dG8gZm9jdXNlZFxyXG5cclxuICBAQ29udGVudENoaWxkKE56TW9kYWxGb290ZXJEaXJlY3RpdmUsIHsgc3RhdGljOiBmYWxzZSB9KVxyXG4gIHNldCBtb2RhbEZvb3Rlcih2YWx1ZTogTnpNb2RhbEZvb3RlckRpcmVjdGl2ZSkge1xyXG4gICAgaWYgKHZhbHVlICYmIHZhbHVlLnRlbXBsYXRlUmVmKSB7XHJcbiAgICAgIHRoaXMuc2V0Rm9vdGVyV2l0aFRlbXBsYXRlKHZhbHVlLnRlbXBsYXRlUmVmKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBhZnRlck9wZW4oKTogT2JzZXJ2YWJsZTx2b2lkPiB7XHJcbiAgICAvLyBPYnNlcnZhYmxlIGFsaWFzIGZvciBuekFmdGVyT3BlblxyXG4gICAgcmV0dXJuIHRoaXMubnpBZnRlck9wZW4uYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgYWZ0ZXJDbG9zZSgpOiBPYnNlcnZhYmxlPFI+IHtcclxuICAgIC8vIE9ic2VydmFibGUgYWxpYXMgZm9yIG56QWZ0ZXJDbG9zZVxyXG4gICAgcmV0dXJuIHRoaXMubnpBZnRlckNsb3NlLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNhbmNlbFRleHQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLm56Q2FuY2VsVGV4dCB8fCB0aGlzLmxvY2FsZS5jYW5jZWxUZXh0ITtcclxuICB9XHJcblxyXG4gIGdldCBva1RleHQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLm56T2tUZXh0IHx8IHRoaXMubG9jYWxlLm9rVGV4dCE7XHJcbiAgfVxyXG5cclxuICBnZXQgaGlkZGVuKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICF0aGlzLm56VmlzaWJsZSAmJiAhdGhpcy5hbmltYXRpb25TdGF0ZTtcclxuICB9IC8vIEluZGljYXRlIHdoZXRoZXIgdGhpcyBkaWFsb2cgc2hvdWxkIGhpZGRlblxyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKiBUaGUgY2FsY3VsYXRlZCBoaWdoZXN0IHdlaWdodCBvZiBtYXNrIHZhbHVlXHJcbiAgICpcclxuICAgKiBXZWlnaHQgb2YgZGlmZmVyZW50IG1hc2sgaW5wdXQ6XHJcbiAgICogY29tcG9uZW50IGRlZmF1bHQgdmFsdWUgPCBnbG9iYWwgY29uZmlndXJhdGlvbiA8IGNvbXBvbmVudCBpbnB1dCB2YWx1ZVxyXG4gICAqL1xyXG4gIGdldCBtYXNrKCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMubnpNYXNrICE9IG51bGwpIHtcclxuICAgICAgcmV0dXJuIHRoaXMubnpNYXNrO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLm56TW9kYWxHbG9iYWxDb25maWcgJiYgdGhpcy5uek1vZGFsR2xvYmFsQ29uZmlnLm56TWFzayAhPSBudWxsKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm56TW9kYWxHbG9iYWxDb25maWcubnpNYXNrO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKiBUaGUgY2FsY3VsYXRlZCBoaWdoZXN0IHdlaWdodCBvZiBtYXNrQ2xvc2FibGUgdmFsdWVcclxuICAgKlxyXG4gICAqIFdlaWdodCBvZiBkaWZmZXJlbnQgbWFza0Nsb3NhYmxlIGlucHV0OlxyXG4gICAqIGNvbXBvbmVudCBkZWZhdWx0IHZhbHVlIDwgZ2xvYmFsIGNvbmZpZ3VyYXRpb24gPCBjb21wb25lbnQgaW5wdXQgdmFsdWVcclxuICAgKi9cclxuICBnZXQgbWFza0Nsb3NhYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMubnpNYXNrQ2xvc2FibGUgIT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5uek1hc2tDbG9zYWJsZTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5uek1vZGFsR2xvYmFsQ29uZmlnICYmIHRoaXMubnpNb2RhbEdsb2JhbENvbmZpZy5uek1hc2tDbG9zYWJsZSAhPSBudWxsKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm56TW9kYWxHbG9iYWxDb25maWcubnpNYXNrQ2xvc2FibGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxvY2FsZTogeyBva1RleHQ/OiBzdHJpbmc7IGNhbmNlbFRleHQ/OiBzdHJpbmcgfSA9IHt9O1xyXG4gIG1hc2tBbmltYXRpb25DbGFzc01hcDogb2JqZWN0IHwgbnVsbDtcclxuICBtb2RhbEFuaW1hdGlvbkNsYXNzTWFwOiBvYmplY3QgfCBudWxsO1xyXG4gIHRyYW5zZm9ybU9yaWdpbiA9ICcwcHggMHB4IDBweCc7IC8vIFRoZSBvcmlnaW4gcG9pbnQgdGhhdCBhbmltYXRpb24gYmFzZWQgb25cclxuXHJcbiAgcHJpdmF0ZSBjb250ZW50Q29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8VD47IC8vIEhhbmRsZSB0aGUgcmVmZXJlbmNlIHdoZW4gdXNpbmcgbnpDb250ZW50IGFzIENvbXBvbmVudFxyXG4gIHByaXZhdGUgYW5pbWF0aW9uU3RhdGU6IEFuaW1hdGlvblN0YXRlOyAvLyBDdXJyZW50IGFuaW1hdGlvbiBzdGF0ZVxyXG4gIHByaXZhdGUgY29udGFpbmVyOiBIVE1MRWxlbWVudCB8IE92ZXJsYXlSZWY7XHJcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIHByaXZhdGUgcHJldmlvdXNseUZvY3VzZWRFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICBwcml2YXRlIGZvY3VzVHJhcDogRm9jdXNUcmFwO1xyXG4gIHByaXZhdGUgc2Nyb2xsU3RyYXRlZ3k6IEJsb2NrU2Nyb2xsU3RyYXRlZ3k7XHJcbiAgcHJpdmF0ZSBvdmVybGF5UmVmOiBPdmVybGF5UmVmO1xyXG4gIHByaXZhdGUgZGlhbG9nTW91c2VEb3duID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSB0aW1lb3V0SWQ6IG51bWJlcjtcclxuXHJcbiAgW2tleTogc3RyaW5nXTogYW55OyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcclxuICAgIHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSxcclxuICAgIHByaXZhdGUgb3ZlcmxheUtleWJvYXJkRGlzcGF0Y2hlcjogT3ZlcmxheUtleWJvYXJkRGlzcGF0Y2hlcixcclxuICAgIHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZSxcclxuICAgIHByaXZhdGUgY2ZyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBwcml2YXRlIG1vZGFsQ29udHJvbDogTnpNb2RhbENvbnRyb2xTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBmb2N1c1RyYXBGYWN0b3J5OiBGb2N1c1RyYXBGYWN0b3J5LFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChOWl9NT0RBTF9DT05GSUcpIHByaXZhdGUgbnpNb2RhbEdsb2JhbENvbmZpZzogTnpNb2RhbENvbmZpZyxcclxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc2Nyb2xsU3RyYXRlZ3kgPSB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5ibG9jaygpO1xyXG5cclxuICAgIGlmICh0aGlzLm56TW9kYWxHbG9iYWxDb25maWcpIHtcclxuICAgICAgd2FybkRlcHJlY2F0aW9uKCdgTlpfTU9EQUxfQ09ORklHYCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFBsZWFzZSB1c2UgZ2xvYmFsIGNvbmZpZyBpbnN0ZWFkLicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnTW9kYWwnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICh0aGlzLmlzQ29tcG9uZW50KHRoaXMubnpDb250ZW50KSkge1xyXG4gICAgICB0aGlzLmNyZWF0ZUR5bmFtaWNDb21wb25lbnQodGhpcy5uekNvbnRlbnQgYXMgVHlwZTxUPik7IC8vIENyZWF0ZSBjb21wb25lbnQgYWxvbmcgd2l0aG91dCBWaWV3XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaXNNb2RhbEJ1dHRvbnModGhpcy5uekZvb3RlcikpIHtcclxuICAgICAgLy8gU2V0dXAgZGVmYXVsdCBidXR0b24gb3B0aW9uc1xyXG4gICAgICB0aGlzLm56Rm9vdGVyID0gdGhpcy5mb3JtYXRNb2RhbEJ1dHRvbnModGhpcy5uekZvb3RlciBhcyBBcnJheTxNb2RhbEJ1dHRvbk9wdGlvbnM8VD4+KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQbGFjZSB0aGUgbW9kYWwgZG9tIHRvIGVsc2V3aGVyZVxyXG4gICAgdGhpcy5jb250YWluZXIgPSB0eXBlb2YgdGhpcy5uekdldENvbnRhaW5lciA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMubnpHZXRDb250YWluZXIoKSA6IHRoaXMubnpHZXRDb250YWluZXI7XHJcbiAgICBpZiAodGhpcy5jb250YWluZXIgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xyXG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgICAgIGZyb21FdmVudDxLZXlib2FyZEV2ZW50Pih0aGlzLmRvY3VtZW50LmJvZHksICdrZXlkb3duJylcclxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoZSA9PiB0aGlzLmtleWRvd25MaXN0ZW5lcihlKSk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29udGFpbmVyIGluc3RhbmNlb2YgT3ZlcmxheVJlZikge1xyXG4gICAgICAvLyBOT1RFOiBvbmx5IGF0dGFjaCB0aGUgZG9tIHRvIG92ZXJsYXksIHRoZSB2aWV3IGNvbnRhaW5lciBpcyBub3QgY2hhbmdlZCBhY3R1YWxseVxyXG4gICAgICB0aGlzLnNldE92ZXJsYXlSZWYodGhpcy5jb250YWluZXIpO1xyXG4gICAgICB0aGlzLmNvbnRhaW5lci5vdmVybGF5RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZikge1xyXG4gICAgICB0aGlzLm92ZXJsYXlSZWZcclxuICAgICAgICAua2V5ZG93bkV2ZW50cygpXHJcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSlcclxuICAgICAgICAuc3Vic2NyaWJlKGUgPT4gdGhpcy5rZXlkb3duTGlzdGVuZXIoZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlZ2lzdGVyIG1vZGFsIHdoZW4gYWZ0ZXJPcGVuL2FmdGVyQ2xvc2UgaXMgc3RhYmxlXHJcbiAgICB0aGlzLm1vZGFsQ29udHJvbC5yZWdpc3Rlck1vZGFsKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgLy8gW05PVEVdIE5PVCBhdmFpbGFibGUgd2hlbiB1c2luZyBieSBzZXJ2aWNlIVxyXG4gIC8vIEJlY2F1c2UgbmdPbkNoYW5nZXMgbmV2ZXIgYmUgY2FsbGVkIHdoZW4gdXNpbmcgYnkgc2VydmljZSxcclxuICAvLyBoZXJlIHdlIGNhbid0IHN1cHBvcnQgXCJuekNvbnRlbnRcIihDb21wb25lbnQpIGV0Yy4gYXMgaW5wdXRzIHRoYXQgaW5pdGlhbGl6ZWQgZHluYW1pY2FsbHkuXHJcbiAgLy8gQlVUOiBVc2VyIGFsc28gY2FuIGNoYW5nZSBcIm56Q29udGVudFwiIGR5bmFtaWNhbGx5IHRvIHRyaWdnZXIgVUkgY2hhbmdlcyAocHJvdmlkZWQgeW91IGRvbid0IHVzZSBcYkNvbXBvbmVudCB0aGF0IG5lZWRzIGluaXRpYWxpemF0aW9ucylcclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5uelZpc2libGUpIHtcclxuICAgICAgdGhpcy5oYW5kbGVWaXNpYmxlU3RhdGVDaGFuZ2UodGhpcy5uelZpc2libGUsICFjaGFuZ2VzLm56VmlzaWJsZS5maXJzdENoYW5nZSk7IC8vIERvIG5vdCB0cmlnZ2VyIGFuaW1hdGlvbiB3aGlsZSBpbml0aWFsaXppbmdcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIElmIHVzaW5nIENvbXBvbmVudCwgaXQgaXMgdGhlIHRpbWUgdG8gYXR0YWNoIFZpZXcgd2hpbGUgYm9keUNvbnRhaW5lciBpcyByZWFkeVxyXG4gICAgaWYgKHRoaXMuY29udGVudENvbXBvbmVudFJlZikge1xyXG4gICAgICB0aGlzLmJvZHlDb250YWluZXIuaW5zZXJ0KHRoaXMuY29udGVudENvbXBvbmVudFJlZi5ob3N0Vmlldyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuYXV0b0ZvY3VzQnV0dG9uT2spIHtcclxuICAgICAgKHRoaXMuYXV0b0ZvY3VzQnV0dG9uT2submF0aXZlRWxlbWVudCBhcyBIVE1MQnV0dG9uRWxlbWVudCkuZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgLy8gQ2xvc2Ugc2VsZiBiZWZvcmUgZGVzdHJ1Y3RpbmdcclxuICAgIHRoaXMuY2hhbmdlVmlzaWJsZUZyb21JbnNpZGUoZmFsc2UpLnRoZW4oKCkgPT4ge1xyXG4gICAgICB0aGlzLm1vZGFsQ29udHJvbC5kZXJlZ2lzdGVyTW9kYWwodGhpcyk7XHJcblxyXG4gICAgICBpZiAodGhpcy5jb250YWluZXIgaW5zdGFuY2VvZiBPdmVybGF5UmVmKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuZGlzcG9zZSgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XHJcbiAgICAgIHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XHJcbiAgICB9KTtcclxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRJZCk7XHJcbiAgfVxyXG5cclxuICBzZXRGb290ZXJXaXRoVGVtcGxhdGUodGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPHt9Pik6IHZvaWQge1xyXG4gICAgdGhpcy5uekZvb3RlciA9IHRlbXBsYXRlUmVmO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBzZXRPdmVybGF5UmVmKG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYpOiB2b2lkIHtcclxuICAgIHRoaXMub3ZlcmxheVJlZiA9IG92ZXJsYXlSZWY7XHJcbiAgfVxyXG5cclxuICBrZXlkb3duTGlzdGVuZXIoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChldmVudC5rZXlDb2RlID09PSBFU0NBUEUgJiYgdGhpcy5uektleWJvYXJkKSB7XHJcbiAgICAgIHRoaXMub25DbGlja09rQ2FuY2VsKCdjYW5jZWwnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9wZW4oKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoYW5nZVZpc2libGVGcm9tSW5zaWRlKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UocmVzdWx0PzogUik6IHZvaWQge1xyXG4gICAgdGhpcy5jaGFuZ2VWaXNpYmxlRnJvbUluc2lkZShmYWxzZSwgcmVzdWx0KTtcclxuICB9XHJcblxyXG4gIGRlc3Ryb3kocmVzdWx0PzogUik6IHZvaWQge1xyXG4gICAgLy8gRGVzdHJveSBlcXVhbHMgQ2xvc2VcclxuICAgIHRoaXMuY2xvc2UocmVzdWx0KTtcclxuICB9XHJcblxyXG4gIHRyaWdnZXJPaygpOiB2b2lkIHtcclxuICAgIHRoaXMub25DbGlja09rQ2FuY2VsKCdvaycpO1xyXG4gIH1cclxuXHJcbiAgdHJpZ2dlckNhbmNlbCgpOiB2b2lkIHtcclxuICAgIHRoaXMub25DbGlja09rQ2FuY2VsKCdjYW5jZWwnKTtcclxuICB9XHJcblxyXG4gIGdldEluc3RhbmNlKCk6IE56TW9kYWxDb21wb25lbnQge1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBnZXRDb250ZW50Q29tcG9uZW50UmVmKCk6IENvbXBvbmVudFJlZjxUPiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250ZW50Q29tcG9uZW50UmVmO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29udGVudENvbXBvbmVudCgpOiBUIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRlbnRDb21wb25lbnRSZWYgJiYgdGhpcy5jb250ZW50Q29tcG9uZW50UmVmLmluc3RhbmNlO1xyXG4gIH1cclxuXHJcbiAgZ2V0RWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmICYmIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgb25NYXNrRGlhbG9nRG93bigpOiB2b2lkIHtcclxuICAgIHRoaXMuZGlhbG9nTW91c2VEb3duID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIG9uRGlhbG9nVXAoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kaWFsb2dNb3VzZURvd24pIHtcclxuICAgICAgdGhpcy50aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLmRpYWxvZ01vdXNlRG93biA9IGZhbHNlO1xyXG4gICAgICB9LCAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ2xpY2tNYXNrKCRldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLm1hc2sgJiZcclxuICAgICAgdGhpcy5tYXNrQ2xvc2FibGUgJiZcclxuICAgICAgKCRldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5jb250YWlucyhXUkFQX0NMQVNTX05BTUUpICYmXHJcbiAgICAgIHRoaXMubnpWaXNpYmxlICYmXHJcbiAgICAgICF0aGlzLmRpYWxvZ01vdXNlRG93blxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMub25DbGlja09rQ2FuY2VsKCdjYW5jZWwnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzTW9kYWxUeXBlKHR5cGU6IE1vZGFsVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubnpNb2RhbFR5cGUgPT09IHR5cGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25DbGlja0Nsb3NlQnRuKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpWaXNpYmxlKSB7XHJcbiAgICAgIHRoaXMub25DbGlja09rQ2FuY2VsKCdjYW5jZWwnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbkNsaWNrT2tDYW5jZWwodHlwZTogJ29rJyB8ICdjYW5jZWwnKTogdm9pZCB7XHJcbiAgICBjb25zdCB0cmlnZ2VyID0geyBvazogdGhpcy5uek9uT2ssIGNhbmNlbDogdGhpcy5uek9uQ2FuY2VsIH1bdHlwZV07XHJcbiAgICBjb25zdCBsb2FkaW5nS2V5ID0geyBvazogJ256T2tMb2FkaW5nJywgY2FuY2VsOiAnbnpDYW5jZWxMb2FkaW5nJyB9W3R5cGVdO1xyXG4gICAgaWYgKHRyaWdnZXIgaW5zdGFuY2VvZiBFdmVudEVtaXR0ZXIpIHtcclxuICAgICAgdHJpZ2dlci5lbWl0KHRoaXMuZ2V0Q29udGVudENvbXBvbmVudCgpKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHRyaWdnZXIgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gdHJpZ2dlcih0aGlzLmdldENvbnRlbnRDb21wb25lbnQoKSk7XHJcbiAgICAgIGNvbnN0IGNhc2VDbG9zZSA9IChkb0Nsb3NlOiBib29sZWFuIHwgdm9pZCB8IHt9KSA9PiBkb0Nsb3NlICE9PSBmYWxzZSAmJiB0aGlzLmNsb3NlKGRvQ2xvc2UgYXMgUik7IC8vIFVzZXJzIGNhbiByZXR1cm4gXCJmYWxzZVwiIHRvIHByZXZlbnQgY2xvc2luZyBieSBkZWZhdWx0XHJcbiAgICAgIGlmIChpc1Byb21pc2UocmVzdWx0KSkge1xyXG4gICAgICAgIHRoaXNbbG9hZGluZ0tleV0gPSB0cnVlO1xyXG4gICAgICAgIGNvbnN0IGhhbmRsZVRoZW4gPSAoZG9DbG9zZTogYm9vbGVhbiB8IHZvaWQgfCB7fSkgPT4ge1xyXG4gICAgICAgICAgdGhpc1tsb2FkaW5nS2V5XSA9IGZhbHNlO1xyXG4gICAgICAgICAgY2FzZUNsb3NlKGRvQ2xvc2UpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVzdWx0LnRoZW4oaGFuZGxlVGhlbikuY2F0Y2goaGFuZGxlVGhlbik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2FzZUNsb3NlKHJlc3VsdCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc05vbkVtcHR5U3RyaW5nKHZhbHVlOiB7fSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUgIT09ICcnO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzVGVtcGxhdGVSZWYodmFsdWU6IHt9KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc0NvbXBvbmVudCh2YWx1ZToge30pOiBib29sZWFuIHtcclxuICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFR5cGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNNb2RhbEJ1dHRvbnModmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHt9PiB8IEFycmF5PE1vZGFsQnV0dG9uT3B0aW9uczxUPj4gfCBudWxsKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID4gMDtcclxuICB9XHJcblxyXG4gIC8vIERvIHJlc3QgdGhpbmdzIHdoZW4gdmlzaWJsZSBzdGF0ZSBjaGFuZ2VkXHJcbiAgcHJpdmF0ZSBoYW5kbGVWaXNpYmxlU3RhdGVDaGFuZ2UodmlzaWJsZTogYm9vbGVhbiwgYW5pbWF0aW9uOiBib29sZWFuID0gdHJ1ZSwgY2xvc2VSZXN1bHQ/OiBSKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBpZiAodmlzaWJsZSkge1xyXG4gICAgICAvLyBIaWRlIHNjcm9sbGJhciBhdCB0aGUgZmlyc3QgdGltZSB3aGVuIHNob3duIHVwXHJcbiAgICAgIHRoaXMuc2Nyb2xsU3RyYXRlZ3kuZW5hYmxlKCk7XHJcbiAgICAgIHRoaXMuc2F2ZVByZXZpb3VzbHlGb2N1c2VkRWxlbWVudCgpO1xyXG4gICAgICB0aGlzLnRyYXBGb2N1cygpO1xyXG4gICAgICBpZiAodGhpcy5jb250YWluZXIgaW5zdGFuY2VvZiBPdmVybGF5UmVmKSB7XHJcbiAgICAgICAgdGhpcy5vdmVybGF5S2V5Ym9hcmREaXNwYXRjaGVyLmFkZCh0aGlzLm92ZXJsYXlSZWYpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5jb250YWluZXIgaW5zdGFuY2VvZiBPdmVybGF5UmVmKSB7XHJcbiAgICAgICAgdGhpcy5vdmVybGF5S2V5Ym9hcmREaXNwYXRjaGVyLnJlbW92ZSh0aGlzLm92ZXJsYXlSZWYpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShhbmltYXRpb24gPyB0aGlzLmFuaW1hdGVUbyh2aXNpYmxlKSA6IHVuZGVmaW5lZCkudGhlbigoKSA9PiB7XHJcbiAgICAgIC8vIEVtaXQgb3Blbi9jbG9zZSBldmVudCBhZnRlciBhbmltYXRpb25zIG92ZXJcclxuICAgICAgaWYgKHZpc2libGUpIHtcclxuICAgICAgICB0aGlzLm56QWZ0ZXJPcGVuLmVtaXQoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLm56QWZ0ZXJDbG9zZS5lbWl0KGNsb3NlUmVzdWx0KTtcclxuICAgICAgICB0aGlzLnJlc3RvcmVGb2N1cygpO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsU3RyYXRlZ3kuZGlzYWJsZSgpO1xyXG4gICAgICAgIC8vIE1hcmsgdGhlIGZvciBjaGVjayBzbyBpdCBjYW4gcmVhY3QgaWYgdGhlIHZpZXcgY29udGFpbmVyIGlzIHVzaW5nIE9uUHVzaCBjaGFuZ2UgZGV0ZWN0aW9uLlxyXG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIExvb2t1cCBhIGJ1dHRvbidzIHByb3BlcnR5LCBpZiB0aGUgcHJvcCBpcyBhIGZ1bmN0aW9uLCBjYWxsICYgdGhlbiByZXR1cm4gdGhlIHJlc3VsdCwgb3RoZXJ3aXNlLCByZXR1cm4gaXRzZWxmLlxyXG4gIHB1YmxpYyBnZXRCdXR0b25DYWxsYWJsZVByb3Aob3B0aW9uczogTW9kYWxCdXR0b25PcHRpb25zPFQ+LCBwcm9wOiBzdHJpbmcpOiB7fSB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IG9wdGlvbnNbcHJvcF07XHJcbiAgICBjb25zdCBhcmdzOiBUW10gPSBbXTtcclxuICAgIGlmICh0aGlzLmNvbnRlbnRDb21wb25lbnRSZWYpIHtcclxuICAgICAgYXJncy5wdXNoKHRoaXMuY29udGVudENvbXBvbmVudFJlZi5pbnN0YW5jZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nID8gdmFsdWUuYXBwbHkob3B0aW9ucywgYXJncykgOiB2YWx1ZTtcclxuICB9XHJcblxyXG4gIC8vIE9uIG56Rm9vdGVyJ3MgbW9kYWwgYnV0dG9uIGNsaWNrXHJcbiAgcHVibGljIG9uQnV0dG9uQ2xpY2soYnV0dG9uOiBNb2RhbEJ1dHRvbk9wdGlvbnM8VD4pOiB2b2lkIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZ2V0QnV0dG9uQ2FsbGFibGVQcm9wKGJ1dHRvbiwgJ29uQ2xpY2snKTsgLy8gQ2FsbCBvbkNsaWNrIGRpcmVjdGx5XHJcbiAgICBpZiAoaXNQcm9taXNlKHJlc3VsdCkpIHtcclxuICAgICAgYnV0dG9uLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICByZXN1bHQudGhlbigoKSA9PiAoYnV0dG9uLmxvYWRpbmcgPSBmYWxzZSkpLmNhdGNoKCgpID0+IChidXR0b24ubG9hZGluZyA9IGZhbHNlKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBDaGFuZ2UgbnpWaXNpYmxlIGZyb20gaW5zaWRlXHJcbiAgcHJpdmF0ZSBjaGFuZ2VWaXNpYmxlRnJvbUluc2lkZSh2aXNpYmxlOiBib29sZWFuLCBjbG9zZVJlc3VsdD86IFIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGlmICh0aGlzLm56VmlzaWJsZSAhPT0gdmlzaWJsZSkge1xyXG4gICAgICAvLyBDaGFuZ2UgbnpWaXNpYmxlIHZhbHVlIGltbWVkaWF0ZWx5XHJcbiAgICAgIHRoaXMubnpWaXNpYmxlID0gdmlzaWJsZTtcclxuICAgICAgdGhpcy5uelZpc2libGVDaGFuZ2UuZW1pdCh2aXNpYmxlKTtcclxuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlVmlzaWJsZVN0YXRlQ2hhbmdlKHZpc2libGUsIHRydWUsIGNsb3NlUmVzdWx0KTtcclxuICAgIH1cclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hhbmdlQW5pbWF0aW9uU3RhdGUoc3RhdGU6IEFuaW1hdGlvblN0YXRlKTogdm9pZCB7XHJcbiAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gc3RhdGU7XHJcbiAgICBpZiAoc3RhdGUpIHtcclxuICAgICAgdGhpcy5tYXNrQW5pbWF0aW9uQ2xhc3NNYXAgPSB7XHJcbiAgICAgICAgW2BmYWRlLSR7c3RhdGV9YF06IHRydWUsXHJcbiAgICAgICAgW2BmYWRlLSR7c3RhdGV9LWFjdGl2ZWBdOiB0cnVlXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMubW9kYWxBbmltYXRpb25DbGFzc01hcCA9IHtcclxuICAgICAgICBbYHpvb20tJHtzdGF0ZX1gXTogdHJ1ZSxcclxuICAgICAgICBbYHpvb20tJHtzdGF0ZX0tYWN0aXZlYF06IHRydWVcclxuICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubWFza0FuaW1hdGlvbkNsYXNzTWFwID0gdGhpcy5tb2RhbEFuaW1hdGlvbkNsYXNzTWFwID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYW5pbWF0ZVRvKGlzVmlzaWJsZTogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgaWYgKGlzVmlzaWJsZSkge1xyXG4gICAgICAvLyBGaWd1cmUgb3V0IHRoZSBsYXN0ZXN0IGNsaWNrIHBvc2l0aW9uIHdoZW4gc2hvd3MgdXBcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnVwZGF0ZVRyYW5zZm9ybU9yaWdpbigpKTsgLy8gW05PVEVdIFVzaW5nIHRpbWVvdXQgZHVlIHRvIHRoZSBkb2N1bWVudC5jbGljayBldmVudCBpcyBmaXJlZCBsYXRlciB0aGFuIHZpc2libGUgY2hhbmdlLCBzbyBpZiBub3QgcG9zdHBvbmVkIHRvIG5leHQgZXZlbnQtbG9vcCwgd2UgY2FuJ3QgZ2V0IHRoZSBsYXN0ZXN0IGNsaWNrIHBvc2l0aW9uXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jaGFuZ2VBbmltYXRpb25TdGF0ZShpc1Zpc2libGUgPyAnZW50ZXInIDogJ2xlYXZlJyk7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PlxyXG4gICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIC8vIFJldHVybiB3aGVuIGFuaW1hdGlvbiBpcyBvdmVyXHJcbiAgICAgICAgICB0aGlzLmNoYW5nZUFuaW1hdGlvblN0YXRlKG51bGwpO1xyXG4gICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGhpcy5uek5vQW5pbWF0aW9uID8gMCA6IE1PREFMX0FOSU1BVEVfRFVSQVRJT05cclxuICAgICAgKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZm9ybWF0TW9kYWxCdXR0b25zKGJ1dHRvbnM6IEFycmF5PE1vZGFsQnV0dG9uT3B0aW9uczxUPj4pOiBBcnJheTxNb2RhbEJ1dHRvbk9wdGlvbnM8VD4+IHtcclxuICAgIHJldHVybiBidXR0b25zLm1hcChidXR0b24gPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLntcclxuICAgICAgICAgIHR5cGU6ICdkZWZhdWx0JyxcclxuICAgICAgICAgIHNpemU6ICdkZWZhdWx0JyxcclxuICAgICAgICAgIGF1dG9Mb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICAuLi5idXR0b25cclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgY29tcG9uZW50IGR5bmFtaWNhbGx5IGJ1dCBub3QgYXR0YWNoIHRvIGFueSBWaWV3ICh0aGlzIGFjdGlvbiB3aWxsIGJlIGV4ZWN1dGVkIHdoZW4gYm9keUNvbnRhaW5lciBpcyByZWFkeSlcclxuICAgKiBAcGFyYW0gY29tcG9uZW50IENvbXBvbmVudCBjbGFzc1xyXG4gICAqL1xyXG4gIHByaXZhdGUgY3JlYXRlRHluYW1pY0NvbXBvbmVudChjb21wb25lbnQ6IFR5cGU8VD4pOiB2b2lkIHtcclxuICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLmNmci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnQpO1xyXG4gICAgY29uc3QgY2hpbGRJbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7XHJcbiAgICAgIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTnpNb2RhbFJlZiwgdXNlVmFsdWU6IHRoaXMgfV0sXHJcbiAgICAgIHBhcmVudDogdGhpcy52aWV3Q29udGFpbmVyLnBhcmVudEluamVjdG9yXHJcbiAgICB9KTtcclxuICAgIHRoaXMuY29udGVudENvbXBvbmVudFJlZiA9IGZhY3RvcnkuY3JlYXRlKGNoaWxkSW5qZWN0b3IpO1xyXG4gICAgaWYgKHRoaXMubnpDb21wb25lbnRQYXJhbXMpIHtcclxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmNvbnRlbnRDb21wb25lbnRSZWYuaW5zdGFuY2UsIHRoaXMubnpDb21wb25lbnRQYXJhbXMpO1xyXG4gICAgfVxyXG4gICAgLy8gRG8gdGhlIGZpcnN0IGNoYW5nZSBkZXRlY3Rpb24gaW1tZWRpYXRlbHkgKG9yIHdlIGRvIGRldGVjdGlvbiBhdCBuZ0FmdGVyVmlld0luaXQsIG11bHRpLWNoYW5nZXMgZXJyb3Igd2lsbCBiZSB0aHJvd24pXHJcbiAgICB0aGlzLmNvbnRlbnRDb21wb25lbnRSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgLy8gVXBkYXRlIHRyYW5zZm9ybS1vcmlnaW4gdG8gdGhlIGxhc3QgY2xpY2sgcG9zaXRpb24gb24gZG9jdW1lbnRcclxuICBwcml2YXRlIHVwZGF0ZVRyYW5zZm9ybU9yaWdpbigpOiB2b2lkIHtcclxuICAgIGNvbnN0IG1vZGFsRWxlbWVudCA9IHRoaXMubW9kYWxDb250YWluZXIubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcclxuICAgIGlmICh0aGlzLnByZXZpb3VzbHlGb2N1c2VkRWxlbWVudCkge1xyXG4gICAgICBjb25zdCBwcmV2aW91c2x5RE9NUmVjdCA9IHRoaXMucHJldmlvdXNseUZvY3VzZWRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICBjb25zdCBsYXN0UG9zaXRpb24gPSBnZXRFbGVtZW50T2Zmc2V0KHRoaXMucHJldmlvdXNseUZvY3VzZWRFbGVtZW50KTtcclxuICAgICAgY29uc3QgeCA9IGxhc3RQb3NpdGlvbi5sZWZ0ICsgcHJldmlvdXNseURPTVJlY3Qud2lkdGggLyAyO1xyXG4gICAgICBjb25zdCB5ID0gbGFzdFBvc2l0aW9uLnRvcCArIHByZXZpb3VzbHlET01SZWN0LmhlaWdodCAvIDI7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtT3JpZ2luID0gYCR7eCAtIG1vZGFsRWxlbWVudC5vZmZzZXRMZWZ0fXB4ICR7eSAtIG1vZGFsRWxlbWVudC5vZmZzZXRUb3B9cHggMHB4YDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2F2ZVByZXZpb3VzbHlGb2N1c2VkRWxlbWVudCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRvY3VtZW50KSB7XHJcbiAgICAgIHRoaXMucHJldmlvdXNseUZvY3VzZWRFbGVtZW50ID0gdGhpcy5kb2N1bWVudC5hY3RpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0cmFwRm9jdXMoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuZm9jdXNUcmFwKSB7XHJcbiAgICAgIHRoaXMuZm9jdXNUcmFwID0gdGhpcy5mb2N1c1RyYXBGYWN0b3J5LmNyZWF0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmZvY3VzVHJhcC5mb2N1c0luaXRpYWxFbGVtZW50V2hlblJlYWR5KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlc3RvcmVGb2N1cygpOiB2b2lkIHtcclxuICAgIC8vIFdlIG5lZWQgdGhlIGV4dHJhIGNoZWNrLCBiZWNhdXNlIElFIGNhbiBzZXQgdGhlIGBhY3RpdmVFbGVtZW50YCB0byBudWxsIGluIHNvbWUgY2FzZXMuXHJcbiAgICBpZiAodGhpcy5wcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQgJiYgdHlwZW9mIHRoaXMucHJldmlvdXNseUZvY3VzZWRFbGVtZW50LmZvY3VzID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIHRoaXMucHJldmlvdXNseUZvY3VzZWRFbGVtZW50LmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5mb2N1c1RyYXApIHtcclxuICAgICAgdGhpcy5mb2N1c1RyYXAuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8bmctdGVtcGxhdGUgI3RwbE9yaWdpbkNvbnRlbnQ+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvbmctdGVtcGxhdGU+XHJcbjwhLS0gQ29tcGF0aWJsZTogdGhlIDxuZy1jb250ZW50PiBjYW4gYXBwZWFyIG9ubHkgb25jZSAtLT5cclxuXHJcbjxkaXYgW256Tm9BbmltYXRpb25dPVwibnpOb0FuaW1hdGlvblwiPlxyXG4gIDxkaXZcclxuICAgICpuZ0lmPVwibWFza1wiXHJcbiAgICBjbGFzcz1cImFudC1tb2RhbC1tYXNrXCJcclxuICAgIFtuZ0NsYXNzXT1cIm1hc2tBbmltYXRpb25DbGFzc01hcFwiXHJcbiAgICBbY2xhc3MuYW50LW1vZGFsLW1hc2staGlkZGVuXT1cImhpZGRlblwiXHJcbiAgICBbbmdTdHlsZV09XCJuek1hc2tTdHlsZVwiXHJcbiAgICBbc3R5bGUuekluZGV4XT1cIm56WkluZGV4XCJcclxuICA+PC9kaXY+XHJcbiAgPGRpdlxyXG4gICAgKGNsaWNrKT1cIm9uQ2xpY2tNYXNrKCRldmVudClcIlxyXG4gICAgKG1vdXNldXApPVwib25EaWFsb2dVcCgpXCJcclxuICAgIGNsYXNzPVwiYW50LW1vZGFsLXdyYXAge3sgbnpXcmFwQ2xhc3NOYW1lIH19XCJcclxuICAgIFtzdHlsZS56SW5kZXhdPVwibnpaSW5kZXhcIlxyXG4gICAgW3N0eWxlLnZpc2liaWxpdHldPVwiaGlkZGVuID8gJ2hpZGRlbicgOiBudWxsXCJcclxuICAgIHRhYmluZGV4PVwiLTFcIlxyXG4gICAgcm9sZT1cImRpYWxvZ1wiXHJcbiAgPlxyXG4gICAgPGRpdlxyXG4gICAgICAjbW9kYWxDb250YWluZXJcclxuICAgICAgY2xhc3M9XCJhbnQtbW9kYWwge3sgbnpDbGFzc05hbWUgfX1cIlxyXG4gICAgICAobW91c2Vkb3duKT1cIm9uTWFza0RpYWxvZ0Rvd24oKVwiXHJcbiAgICAgIFtuZ0NsYXNzXT1cIm1vZGFsQW5pbWF0aW9uQ2xhc3NNYXBcIlxyXG4gICAgICBbbmdTdHlsZV09XCJuelN0eWxlXCJcclxuICAgICAgW3N0eWxlLndpZHRoXT1cIm56V2lkdGggfCBuelRvQ3NzVW5pdFwiXHJcbiAgICAgIFtzdHlsZS50cmFuc2Zvcm0tb3JpZ2luXT1cInRyYW5zZm9ybU9yaWdpblwiXHJcbiAgICAgIHJvbGU9XCJkb2N1bWVudFwiXHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtbW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgICpuZ0lmPVwibnpDbG9zYWJsZVwiXHJcbiAgICAgICAgICAoY2xpY2spPVwib25DbGlja0Nsb3NlQnRuKClcIlxyXG4gICAgICAgICAgY2xhc3M9XCJhbnQtbW9kYWwtY2xvc2VcIlxyXG4gICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJuekFyaWFMYWJlbFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtbW9kYWwtY2xvc2UteFwiPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpDbG9zZUljb25cIj5cclxuICAgICAgICAgICAgICA8aSBuei1pY29uIFtuelR5cGVdPVwibnpDbG9zZUljb25cIiBjbGFzcz1cImFudC1tb2RhbC1jbG9zZS1pY29uXCI+PC9pPlxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWhpZGRlblwiIFtuZ1N3aXRjaF09XCJ0cnVlXCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyXHJcbiAgICAgICAgICAgICpuZ1N3aXRjaENhc2U9XCJpc01vZGFsVHlwZSgnZGVmYXVsdCcpXCJcclxuICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwidHBsQ29udGVudERlZmF1bHRcIlxyXG4gICAgICAgICAgPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAqbmdTd2l0Y2hDYXNlPVwiaXNNb2RhbFR5cGUoJ2NvbmZpcm0nKVwiXHJcbiAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRwbENvbnRlbnRDb25maXJtXCJcclxuICAgICAgICAgID48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48IS0tIFtQcmVkZWZpbmVkXSBEZWZhdWx0IE1vZGFsIENvbnRlbnQgLS0+XHJcbjxuZy10ZW1wbGF0ZSAjdHBsQ29udGVudERlZmF1bHQ+XHJcbiAgPGRpdiAqbmdJZj1cIm56VGl0bGVcIiBjbGFzcz1cImFudC1tb2RhbC1oZWFkZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJhbnQtbW9kYWwtdGl0bGVcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwidHJ1ZVwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXJcclxuICAgICAgICAgICpuZ1N3aXRjaENhc2U9XCJpc1RlbXBsYXRlUmVmKG56VGl0bGUpXCJcclxuICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIm56VGl0bGVcIlxyXG4gICAgICAgID48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJpc05vbkVtcHR5U3RyaW5nKG56VGl0bGUpXCJcclxuICAgICAgICAgID48ZGl2IFtpbm5lckhUTUxdPVwibnpUaXRsZVwiPjwvZGl2XHJcbiAgICAgICAgPjwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJhbnQtbW9kYWwtYm9keVwiIFtuZ1N0eWxlXT1cIm56Qm9keVN0eWxlXCI+XHJcbiAgICA8bmctY29udGFpbmVyICNib2R5Q29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWlzQ29tcG9uZW50KG56Q29udGVudClcIiBbbmdTd2l0Y2hdPVwidHJ1ZVwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXJcclxuICAgICAgICAgICpuZ1N3aXRjaENhc2U9XCJpc1RlbXBsYXRlUmVmKG56Q29udGVudClcIlxyXG4gICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwibnpDb250ZW50XCJcclxuICAgICAgICA+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiaXNOb25FbXB0eVN0cmluZyhuekNvbnRlbnQpXCJcclxuICAgICAgICAgID48ZGl2IFtpbm5lckhUTUxdPVwibnpDb250ZW50XCI+PC9kaXZcclxuICAgICAgICA+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hEZWZhdWx0IFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRwbE9yaWdpbkNvbnRlbnRcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICA8L2Rpdj5cclxuICA8ZGl2ICpuZ0lmPVwibnpGb290ZXIgIT09IG51bGxcIiBjbGFzcz1cImFudC1tb2RhbC1mb290ZXJcIj5cclxuICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cInRydWVcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lclxyXG4gICAgICAgICpuZ1N3aXRjaENhc2U9XCJpc1RlbXBsYXRlUmVmKG56Rm9vdGVyKVwiXHJcbiAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwibnpGb290ZXJcIlxyXG4gICAgICA+PC9uZy1jb250YWluZXI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzTm9uRW1wdHlTdHJpbmcobnpGb290ZXIpXCJcclxuICAgICAgICA+PGRpdiBbaW5uZXJIVE1MXT1cIm56Rm9vdGVyXCI+PC9kaXZcclxuICAgICAgPjwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJpc01vZGFsQnV0dG9ucyhuekZvb3RlcilcIj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgYnV0dG9uIG9mIG56Rm9vdGVyXCJcclxuICAgICAgICAgIG56LWJ1dHRvblxyXG4gICAgICAgICAgKGNsaWNrKT1cIm9uQnV0dG9uQ2xpY2soYnV0dG9uKVwiXHJcbiAgICAgICAgICBbaGlkZGVuXT1cIiFnZXRCdXR0b25DYWxsYWJsZVByb3AoYnV0dG9uLCAnc2hvdycpXCJcclxuICAgICAgICAgIFtuekxvYWRpbmddPVwiZ2V0QnV0dG9uQ2FsbGFibGVQcm9wKGJ1dHRvbiwgJ2xvYWRpbmcnKVwiXHJcbiAgICAgICAgICBbZGlzYWJsZWRdPVwiZ2V0QnV0dG9uQ2FsbGFibGVQcm9wKGJ1dHRvbiwgJ2Rpc2FibGVkJylcIlxyXG4gICAgICAgICAgW256VHlwZV09XCJidXR0b24udHlwZVwiXHJcbiAgICAgICAgICBbbnpTaGFwZV09XCJidXR0b24uc2hhcGVcIlxyXG4gICAgICAgICAgW256U2l6ZV09XCJidXR0b24uc2l6ZVwiXHJcbiAgICAgICAgICBbbnpHaG9zdF09XCJidXR0b24uZ2hvc3RcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt7IGJ1dHRvbi5sYWJlbCB9fVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hEZWZhdWx0PlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgICpuZ0lmPVwibnpDYW5jZWxUZXh0ICE9PSBudWxsXCJcclxuICAgICAgICAgIG56LWJ1dHRvblxyXG4gICAgICAgICAgKGNsaWNrKT1cIm9uQ2xpY2tPa0NhbmNlbCgnY2FuY2VsJylcIlxyXG4gICAgICAgICAgW256TG9hZGluZ109XCJuekNhbmNlbExvYWRpbmdcIlxyXG4gICAgICAgICAgW2Rpc2FibGVkXT1cIm56Q2FuY2VsRGlzYWJsZWRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt7IGNhbmNlbFRleHQgfX1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAqbmdJZj1cIm56T2tUZXh0ICE9PSBudWxsXCJcclxuICAgICAgICAgIG56LWJ1dHRvblxyXG4gICAgICAgICAgW256VHlwZV09XCJuek9rVHlwZVwiXHJcbiAgICAgICAgICAoY2xpY2spPVwib25DbGlja09rQ2FuY2VsKCdvaycpXCJcclxuICAgICAgICAgIFtuekxvYWRpbmddPVwibnpPa0xvYWRpbmdcIlxyXG4gICAgICAgICAgW2Rpc2FibGVkXT1cIm56T2tEaXNhYmxlZFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3sgb2tUZXh0IH19XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+XHJcbjwhLS0gL1tQcmVkZWZpbmVkXSBEZWZhdWx0IE1vZGFsIENvbnRlbnQgLS0+XHJcblxyXG48IS0tIFtQcmVkZWZpbmVkXSBDb25maXJtIE1vZGFsIENvbnRlbnQgLS0+XHJcbjxuZy10ZW1wbGF0ZSAjdHBsQ29udGVudENvbmZpcm0+XHJcbiAgPGRpdiBjbGFzcz1cImFudC1tb2RhbC1ib2R5XCIgW25nU3R5bGVdPVwibnpCb2R5U3R5bGVcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJhbnQtbW9kYWwtY29uZmlybS1ib2R5LXdyYXBwZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImFudC1tb2RhbC1jb25maXJtLWJvZHlcIj5cclxuICAgICAgICA8aSBuei1pY29uIFtuelR5cGVdPVwibnpJY29uVHlwZVwiPjwvaT5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImFudC1tb2RhbC1jb25maXJtLXRpdGxlXCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXJcclxuICAgICAgICAgICAgICAqbmdTd2l0Y2hDYXNlPVwiaXNUZW1wbGF0ZVJlZihuelRpdGxlKVwiXHJcbiAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwibnpUaXRsZVwiXHJcbiAgICAgICAgICAgID48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiaXNOb25FbXB0eVN0cmluZyhuelRpdGxlKVwiXHJcbiAgICAgICAgICAgICAgPjxzcGFuIFtpbm5lckhUTUxdPVwibnpUaXRsZVwiPjwvc3BhblxyXG4gICAgICAgICAgICA+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImFudC1tb2RhbC1jb25maXJtLWNvbnRlbnRcIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgI2JvZHlDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXNDb21wb25lbnQobnpDb250ZW50KVwiIFtuZ1N3aXRjaF09XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgKm5nU3dpdGNoQ2FzZT1cImlzVGVtcGxhdGVSZWYobnpDb250ZW50KVwiXHJcbiAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJuekNvbnRlbnRcIlxyXG4gICAgICAgICAgICAgID48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJpc05vbkVtcHR5U3RyaW5nKG56Q29udGVudClcIlxyXG4gICAgICAgICAgICAgICAgPjxkaXYgW2lubmVySFRNTF09XCJuekNvbnRlbnRcIj48L2RpdlxyXG4gICAgICAgICAgICAgID48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaERlZmF1bHQgW25nVGVtcGxhdGVPdXRsZXRdPVwidHBsT3JpZ2luQ29udGVudFwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImFudC1tb2RhbC1jb25maXJtLWJ0bnNcIj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAqbmdJZj1cIm56Q2FuY2VsVGV4dCAhPT0gbnVsbFwiXHJcbiAgICAgICAgICBuei1idXR0b25cclxuICAgICAgICAgIChjbGljayk9XCJvbkNsaWNrT2tDYW5jZWwoJ2NhbmNlbCcpXCJcclxuICAgICAgICAgIFtuekxvYWRpbmddPVwibnpDYW5jZWxMb2FkaW5nXCJcclxuICAgICAgICAgIFtkaXNhYmxlZF09XCJuekNhbmNlbERpc2FibGVkXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7eyBjYW5jZWxUZXh0IH19XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgI2F1dG9Gb2N1c0J1dHRvbk9rXHJcbiAgICAgICAgICAqbmdJZj1cIm56T2tUZXh0ICE9PSBudWxsXCJcclxuICAgICAgICAgIG56LWJ1dHRvblxyXG4gICAgICAgICAgKGNsaWNrKT1cIm9uQ2xpY2tPa0NhbmNlbCgnb2snKVwiXHJcbiAgICAgICAgICBbbnpUeXBlXT1cIm56T2tUeXBlXCJcclxuICAgICAgICAgIFtuekxvYWRpbmddPVwibnpPa0xvYWRpbmdcIlxyXG4gICAgICAgICAgW2Rpc2FibGVkXT1cIm56T2tEaXNhYmxlZFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3sgb2tUZXh0IH19XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8IS0tIC8uYW50LW1vZGFsLWNvbmZpcm0tYm9keS13cmFwcGVyIC0tPlxyXG4gIDwvZGl2PlxyXG48L25nLXRlbXBsYXRlPlxyXG48IS0tIC9bUHJlZGVmaW5lZF0gQ29uZmlybSBNb2RhbCBDb250ZW50IC0tPlxyXG4iXX0=