import { __decorate, __extends, __metadata, __read, __spread } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { BACKSPACE } from '@angular/cdk/keycodes';
import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { ChangeDetectorRef, Component, ContentChild, ElementRef, EventEmitter, forwardRef, Host, Injector, Input, Optional, Output, Renderer2, Self, TemplateRef, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { merge, of as observableOf } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { InputBoolean, isNotNil, NzConfigService, NzNoAnimationDirective, NzTreeBase, NzTreeHigherOrderServiceToken, slideMotion, warnDeprecation, WithConfig, zoomMotion } from 'ng-zorro-antd/core';
import { NzTreeComponent } from 'ng-zorro-antd/tree';
import { NzTreeSelectService } from './nz-tree-select.service';
import * as i0 from "@angular/core";
import * as i1 from "./nz-tree-select.service";
import * as i2 from "ng-zorro-antd/core";
import * as i3 from "@angular/cdk/overlay";
import * as i4 from "@angular/common";
import * as i5 from "@angular/forms";
import * as i6 from "ng-zorro-antd/tree";
import * as i7 from "ng-zorro-antd/empty";
import * as i8 from "ng-zorro-antd/icon";
var _c0 = ["nzTreeTemplate"];
var _c1 = ["inputElement"];
var _c2 = ["treeRef"];
function NzTreeSelectComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    var _r1675 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 6, 7);
    i0.ɵɵlistener("compositionstart", function NzTreeSelectComponent_ng_template_0_Template_input_compositionstart_0_listener($event) { i0.ɵɵrestoreView(_r1675); var ctx_r1674 = i0.ɵɵnextContext(); return ctx_r1674.isComposing = true; })("compositionend", function NzTreeSelectComponent_ng_template_0_Template_input_compositionend_0_listener($event) { i0.ɵɵrestoreView(_r1675); var ctx_r1676 = i0.ɵɵnextContext(); return ctx_r1676.isComposing = false; })("keydown", function NzTreeSelectComponent_ng_template_0_Template_input_keydown_0_listener($event) { i0.ɵɵrestoreView(_r1675); var ctx_r1677 = i0.ɵɵnextContext(); return ctx_r1677.onKeyDownInput($event); })("ngModelChange", function NzTreeSelectComponent_ng_template_0_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r1675); var ctx_r1678 = i0.ɵɵnextContext(); return ctx_r1678.setInputValue($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1667 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngModel", ctx_r1667.inputValue)("disabled", ctx_r1667.nzDisabled);
} }
function NzTreeSelectComponent_ng_template_2_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 12);
    i0.ɵɵelement(1, "nz-embed-empty", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1680 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzComponentName", "tree-select")("specificContent", ctx_r1680.nzNotFoundContent);
} }
var _c3 = function () { return []; };
function NzTreeSelectComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    var _r1682 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelementStart(1, "nz-tree", 9, 10);
    i0.ɵɵlistener("nzExpandChange", function NzTreeSelectComponent_ng_template_2_Template_nz_tree_nzExpandChange_1_listener($event) { i0.ɵɵrestoreView(_r1682); var ctx_r1681 = i0.ɵɵnextContext(); return ctx_r1681.onExpandedKeysChange($event); })("nzClick", function NzTreeSelectComponent_ng_template_2_Template_nz_tree_nzClick_1_listener($event) { i0.ɵɵrestoreView(_r1682); var ctx_r1683 = i0.ɵɵnextContext(); return ctx_r1683.nzTreeClick.emit($event); })("nzCheckedKeysChange", function NzTreeSelectComponent_ng_template_2_Template_nz_tree_nzCheckedKeysChange_1_listener($event) { i0.ɵɵrestoreView(_r1682); var ctx_r1684 = i0.ɵɵnextContext(); return ctx_r1684.updateSelectedNodes(); })("nzSelectedKeysChange", function NzTreeSelectComponent_ng_template_2_Template_nz_tree_nzSelectedKeysChange_1_listener($event) { i0.ɵɵrestoreView(_r1682); var ctx_r1685 = i0.ɵɵnextContext(); return ctx_r1685.updateSelectedNodes(); })("nzCheckBoxChange", function NzTreeSelectComponent_ng_template_2_Template_nz_tree_nzCheckBoxChange_1_listener($event) { i0.ɵɵrestoreView(_r1682); var ctx_r1686 = i0.ɵɵnextContext(); return ctx_r1686.nzTreeCheckBoxChange.emit($event); })("nzSearchValueChange", function NzTreeSelectComponent_ng_template_2_Template_nz_tree_nzSearchValueChange_1_listener($event) { i0.ɵɵrestoreView(_r1682); var ctx_r1687 = i0.ɵɵnextContext(); return ctx_r1687.setSearchValues($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, NzTreeSelectComponent_ng_template_2_span_3_Template, 2, 2, "span", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1668 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("ant-select-dropdown--single", !ctx_r1668.nzMultiple)("ant-select-dropdown--multiple", ctx_r1668.nzMultiple)("ant-select-dropdown-placement-bottomLeft", ctx_r1668.dropDownPosition === "bottom")("ant-select-dropdown-placement-topLeft", ctx_r1668.dropDownPosition === "top");
    i0.ɵɵproperty("@slideMotion", ctx_r1668.nzOpen ? ctx_r1668.dropDownPosition : "void")("@.disabled", ctx_r1668.noAnimation == null ? null : ctx_r1668.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r1668.noAnimation == null ? null : ctx_r1668.noAnimation.nzNoAnimation)("ngStyle", ctx_r1668.nzDropdownStyle);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("hidden", ctx_r1668.isNotFound)("nzData", ctx_r1668.nzNodes)("nzMultiple", ctx_r1668.nzMultiple)("nzSearchValue", ctx_r1668.inputValue)("nzHideUnMatched", ctx_r1668.nzHideUnMatched)("nzShowIcon", ctx_r1668.nzShowIcon)("nzCheckable", ctx_r1668.nzCheckable)("nzAsyncData", ctx_r1668.nzAsyncData)("nzShowExpand", ctx_r1668.nzShowExpand)("nzShowLine", ctx_r1668.nzShowLine)("nzExpandedIcon", ctx_r1668.nzExpandedIcon)("nzExpandAll", ctx_r1668.nzDefaultExpandAll)("nzExpandedKeys", ctx_r1668.expandedKeys)("nzCheckedKeys", ctx_r1668.nzCheckable ? ctx_r1668.value : i0.ɵɵpureFunction0(26, _c3))("nzSelectedKeys", !ctx_r1668.nzCheckable ? ctx_r1668.value : i0.ɵɵpureFunction0(27, _c3))("nzTreeTemplate", ctx_r1668.treeTemplate)("nzCheckStrictly", ctx_r1668.nzCheckStrictly);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1668.nzNodes.length === 0 || ctx_r1668.isNotFound);
} }
function NzTreeSelectComponent_ng_container_4_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1688 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("display", ctx_r1688.placeHolderDisplay);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1688.nzPlaceHolder, " ");
} }
function NzTreeSelectComponent_ng_container_4_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1689 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngStyle", ctx_r1689.selectedValueDisplay);
    i0.ɵɵattribute("title", ctx_r1689.nzDisplayWith(ctx_r1689.selectedNodes[0]));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1689.nzDisplayWith(ctx_r1689.selectedNodes[0]), " ");
} }
function NzTreeSelectComponent_ng_container_4_div_4_ng_template_2_Template(rf, ctx) { }
function NzTreeSelectComponent_ng_container_4_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelementStart(1, "div", 21);
    i0.ɵɵtemplate(2, NzTreeSelectComponent_ng_container_4_div_4_ng_template_2_Template, 0, 0, "ng-template", 22);
    i0.ɵɵelementStart(3, "span", 23);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1690 = i0.ɵɵnextContext(2);
    var _r1666 = i0.ɵɵreference(1);
    i0.ɵɵstyleProp("display", ctx_r1690.searchDisplay);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", _r1666);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r1690.inputValue, "\u00A0");
} }
function NzTreeSelectComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 14);
    i0.ɵɵtemplate(2, NzTreeSelectComponent_ng_container_4_div_2_Template, 2, 2, "div", 15);
    i0.ɵɵtemplate(3, NzTreeSelectComponent_ng_container_4_div_3_Template, 2, 3, "div", 16);
    i0.ɵɵtemplate(4, NzTreeSelectComponent_ng_container_4_div_4_Template, 5, 3, "div", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1669 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1669.nzPlaceHolder && ctx_r1669.selectedNodes.length === 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1669.selectedNodes.length === 1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1669.nzShowSearch);
} }
function NzTreeSelectComponent_ng_container_5_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1692 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("display", ctx_r1692.placeHolderDisplay);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1692.nzPlaceHolder, " ");
} }
function NzTreeSelectComponent_ng_container_5_ng_container_3_span_2_Template(rf, ctx) { if (rf & 1) {
    var _r1699 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 29);
    i0.ɵɵlistener("mousedown", function NzTreeSelectComponent_ng_container_5_ng_container_3_span_2_Template_span_mousedown_0_listener($event) { i0.ɵɵrestoreView(_r1699); return $event.preventDefault(); })("click", function NzTreeSelectComponent_ng_container_5_ng_container_3_span_2_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r1699); var node_r1696 = i0.ɵɵnextContext().$implicit; var ctx_r1700 = i0.ɵɵnextContext(2); return ctx_r1700.removeSelected(node_r1696, true, $event); });
    i0.ɵɵelement(1, "i", 30);
    i0.ɵɵelementEnd();
} }
function NzTreeSelectComponent_ng_container_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "li", 26);
    i0.ɵɵtemplate(2, NzTreeSelectComponent_ng_container_5_ng_container_3_span_2_Template, 2, 0, "span", 27);
    i0.ɵɵelementStart(3, "span", 28);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var node_r1696 = ctx.$implicit;
    var ctx_r1693 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ant-select-selection__choice__disabled", node_r1696.isDisabled);
    i0.ɵɵproperty("@zoomMotion", undefined)("@.disabled", ctx_r1693.noAnimation == null ? null : ctx_r1693.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r1693.noAnimation == null ? null : ctx_r1693.noAnimation.nzNoAnimation);
    i0.ɵɵattribute("title", ctx_r1693.nzDisplayWith(node_r1696));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !node_r1696.isDisabled);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1693.nzDisplayWith(node_r1696));
} }
function NzTreeSelectComponent_ng_container_5_li_5_ng_container_2_ng_template_1_Template(rf, ctx) { }
var _c4 = function (a0) { return { $implicit: a0 }; };
function NzTreeSelectComponent_ng_container_5_li_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzTreeSelectComponent_ng_container_5_li_5_ng_container_2_ng_template_1_Template, 0, 0, "ng-template", 32);
    i0.ɵɵpipe(2, "slice");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1702 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1702.nzMaxTagPlaceholder)("ngTemplateOutletContext", i0.ɵɵpureFunction1(5, _c4, i0.ɵɵpipeBind2(2, 2, ctx_r1702.selectedNodes, ctx_r1702.nzMaxTagCount)));
} }
function NzTreeSelectComponent_ng_container_5_li_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1703 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" + ", ctx_r1703.selectedNodes.length - ctx_r1703.nzMaxTagCount, " ... ");
} }
function NzTreeSelectComponent_ng_container_5_li_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 31);
    i0.ɵɵelementStart(1, "div", 28);
    i0.ɵɵtemplate(2, NzTreeSelectComponent_ng_container_5_li_5_ng_container_2_Template, 3, 7, "ng-container", 3);
    i0.ɵɵtemplate(3, NzTreeSelectComponent_ng_container_5_li_5_ng_container_3_Template, 2, 1, "ng-container", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1694 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("@zoomMotion", undefined);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1694.nzMaxTagPlaceholder);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1694.nzMaxTagPlaceholder);
} }
function NzTreeSelectComponent_ng_container_5_ng_template_7_Template(rf, ctx) { }
function NzTreeSelectComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "ul", 14);
    i0.ɵɵtemplate(2, NzTreeSelectComponent_ng_container_5_div_2_Template, 2, 2, "div", 15);
    i0.ɵɵtemplate(3, NzTreeSelectComponent_ng_container_5_ng_container_3_Template, 5, 7, "ng-container", 24);
    i0.ɵɵpipe(4, "slice");
    i0.ɵɵtemplate(5, NzTreeSelectComponent_ng_container_5_li_5_Template, 4, 3, "li", 25);
    i0.ɵɵelementStart(6, "li", 20);
    i0.ɵɵtemplate(7, NzTreeSelectComponent_ng_container_5_ng_template_7_Template, 0, 0, "ng-template", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1670 = i0.ɵɵnextContext();
    var _r1666 = i0.ɵɵreference(1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1670.nzPlaceHolder && ctx_r1670.selectedNodes.length === 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind3(4, 5, ctx_r1670.selectedNodes, 0, ctx_r1670.nzMaxTagCount))("ngForTrackBy", ctx_r1670.trackValue);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1670.selectedNodes.length > ctx_r1670.nzMaxTagCount);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", _r1666);
} }
function NzTreeSelectComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    var _r1706 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 33);
    i0.ɵɵlistener("mousedown", function NzTreeSelectComponent_span_6_Template_span_mousedown_0_listener($event) { i0.ɵɵrestoreView(_r1706); return $event.preventDefault(); })("click", function NzTreeSelectComponent_span_6_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r1706); var ctx_r1707 = i0.ɵɵnextContext(); return ctx_r1707.onClearSelection($event); });
    i0.ɵɵelement(1, "i", 34);
    i0.ɵɵelementEnd();
} }
function NzTreeSelectComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 35);
    i0.ɵɵelement(1, "i", 36);
    i0.ɵɵelementEnd();
} }
export function higherOrderServiceFactory(injector) {
    return injector.get(NzTreeSelectService);
}
var NZ_CONFIG_COMPONENT_NAME = 'treeSelect';
var NzTreeSelectComponent = /** @class */ (function (_super) {
    __extends(NzTreeSelectComponent, _super);
    function NzTreeSelectComponent(nzTreeService, nzConfigService, renderer, cdr, elementRef, noAnimation) {
        var _this = _super.call(this, nzTreeService) || this;
        _this.nzConfigService = nzConfigService;
        _this.renderer = renderer;
        _this.cdr = cdr;
        _this.elementRef = elementRef;
        _this.noAnimation = noAnimation;
        _this.nzAllowClear = true;
        _this.nzShowExpand = true;
        _this.nzShowLine = false;
        _this.nzCheckable = false;
        _this.nzShowSearch = false;
        _this.nzDisabled = false;
        _this.nzAsyncData = false;
        _this.nzMultiple = false;
        _this.nzDefaultExpandAll = false;
        _this.nzCheckStrictly = false;
        _this.nzNodes = [];
        _this.nzOpen = false;
        _this.nzPlaceHolder = '';
        _this.nzDisplayWith = function (node) { return node.title; };
        _this.nzOpenChange = new EventEmitter();
        _this.nzCleared = new EventEmitter();
        _this.nzRemoved = new EventEmitter();
        _this.nzExpandChange = new EventEmitter();
        _this.nzTreeClick = new EventEmitter();
        _this.nzTreeCheckBoxChange = new EventEmitter();
        _this.isComposing = false;
        _this.isDestroy = true;
        _this.isNotFound = false;
        _this.inputValue = '';
        _this.dropDownPosition = 'bottom';
        _this.selectedNodes = [];
        _this.expandedKeys = [];
        _this.value = [];
        _this.onTouched = function () { return null; };
        _this.renderer.addClass(_this.elementRef.nativeElement, 'ant-select');
        return _this;
    }
    Object.defineProperty(NzTreeSelectComponent.prototype, "nzDefaultExpandedKeys", {
        get: function () {
            return this.expandedKeys;
        },
        /**
         * @deprecated 9.0.0 - use `nzExpandedKeys` instead.
         */
        set: function (value) {
            warnDeprecation("'nzDefaultExpandedKeys' would be removed in 9.0.0. Please use 'nzExpandedKeys' instead.");
            this.expandedKeys = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeSelectComponent.prototype, "nzExpandedKeys", {
        get: function () {
            return this.expandedKeys;
        },
        set: function (value) {
            this.expandedKeys = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeSelectComponent.prototype, "treeTemplate", {
        get: function () {
            return this.nzTreeTemplate || this.nzTreeTemplateChild;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeSelectComponent.prototype, "placeHolderDisplay", {
        get: function () {
            return this.inputValue || this.isComposing || this.selectedNodes.length ? 'none' : 'block';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeSelectComponent.prototype, "searchDisplay", {
        get: function () {
            return this.nzOpen ? 'block' : 'none';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeSelectComponent.prototype, "isMultiple", {
        get: function () {
            return this.nzMultiple || this.nzCheckable;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeSelectComponent.prototype, "selectedValueDisplay", {
        get: function () {
            var showSelectedValue = false;
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
    NzTreeSelectComponent.prototype.ngOnInit = function () {
        this.isDestroy = false;
        this.selectionChangeSubscription = this.subscribeSelectionChange();
    };
    NzTreeSelectComponent.prototype.ngOnDestroy = function () {
        this.isDestroy = true;
        this.closeDropDown();
        this.selectionChangeSubscription.unsubscribe();
    };
    NzTreeSelectComponent.prototype.setDisabledState = function (isDisabled) {
        this.nzDisabled = isDisabled;
        this.closeDropDown();
    };
    NzTreeSelectComponent.prototype.ngOnChanges = function (changes) {
        if (changes.hasOwnProperty('nzNodes')) {
            this.updateSelectedNodes(true);
        }
    };
    NzTreeSelectComponent.prototype.writeValue = function (value) {
        var _this = this;
        if (isNotNil(value)) {
            if (this.isMultiple && Array.isArray(value)) {
                this.value = value;
            }
            else {
                this.value = [value];
            }
            this.updateSelectedNodes(true);
        }
        else {
            this.value = [];
            this.selectedNodes.forEach(function (node) {
                _this.removeSelected(node, false);
            });
            this.selectedNodes = [];
        }
        this.cdr.markForCheck();
    };
    NzTreeSelectComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    NzTreeSelectComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    NzTreeSelectComponent.prototype.trigger = function () {
        if (this.nzDisabled || (!this.nzDisabled && this.nzOpen)) {
            this.closeDropDown();
        }
        else {
            this.openDropdown();
            if (this.nzShowSearch || this.isMultiple) {
                this.focusOnInput();
            }
        }
    };
    NzTreeSelectComponent.prototype.openDropdown = function () {
        if (!this.nzDisabled) {
            this.nzOpen = true;
            this.nzOpenChange.emit(this.nzOpen);
            this.updateCdkConnectedOverlayStatus();
            this.updatePosition();
        }
    };
    NzTreeSelectComponent.prototype.closeDropDown = function () {
        this.onTouched();
        this.nzOpen = false;
        this.nzOpenChange.emit(this.nzOpen);
        this.cdr.markForCheck();
    };
    NzTreeSelectComponent.prototype.onKeyDownInput = function (e) {
        var keyCode = e.keyCode;
        var eventTarget = e.target;
        if (this.isMultiple && !eventTarget.value && keyCode === BACKSPACE) {
            e.preventDefault();
            if (this.selectedNodes.length) {
                var removeNode = this.selectedNodes[this.selectedNodes.length - 1];
                this.removeSelected(removeNode);
                this.nzTreeService.triggerEventChange$.next({
                    eventName: 'removeSelect',
                    node: removeNode
                });
            }
        }
    };
    NzTreeSelectComponent.prototype.onExpandedKeysChange = function (value) {
        this.nzExpandChange.emit(value);
        this.expandedKeys = __spread(value.keys);
    };
    NzTreeSelectComponent.prototype.setInputValue = function (value) {
        this.inputValue = value;
        this.updateInputWidth();
        this.updatePosition();
    };
    NzTreeSelectComponent.prototype.removeSelected = function (node, emit, event) {
        if (emit === void 0) { emit = true; }
        node.isSelected = false;
        node.isChecked = false;
        if (this.nzCheckable) {
            this.nzTreeService.conduct(node);
        }
        else {
            this.nzTreeService.setSelectedNodeList(node, this.nzMultiple);
        }
        if (emit) {
            this.nzRemoved.emit(node);
        }
        // Do not trigger the popup
        if (event && event.stopPropagation) {
            event.stopPropagation();
        }
    };
    NzTreeSelectComponent.prototype.focusOnInput = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.inputElement) {
                _this.inputElement.nativeElement.focus();
            }
        });
    };
    NzTreeSelectComponent.prototype.subscribeSelectionChange = function () {
        var _this = this;
        return merge(this.nzTreeClick.pipe(tap(function (event) {
            var node = event.node;
            if (_this.nzCheckable && !node.isDisabled && !node.isDisableCheckbox) {
                node.isChecked = !node.isChecked;
                node.isHalfChecked = false;
                if (!_this.nzCheckStrictly) {
                    _this.nzTreeService.conduct(node);
                }
            }
            if (_this.nzCheckable) {
                node.isSelected = false;
            }
        }), filter(function (event) {
            var node = event.node;
            return _this.nzCheckable ? !node.isDisabled && !node.isDisableCheckbox : !node.isDisabled && node.isSelectable;
        })), this.nzCheckable ? this.nzTreeCheckBoxChange : observableOf(), this.nzCleared, this.nzRemoved).subscribe(function () {
            _this.updateSelectedNodes();
            var value = _this.selectedNodes.map(function (node) { return node.key; });
            _this.value = __spread(value);
            if (_this.nzShowSearch || _this.isMultiple) {
                _this.inputValue = '';
                _this.isNotFound = false;
            }
            if (_this.isMultiple) {
                _this.onChange(value);
                _this.focusOnInput();
                _this.updatePosition();
            }
            else {
                _this.closeDropDown();
                _this.onChange(value.length ? value[0] : null);
            }
        });
    };
    NzTreeSelectComponent.prototype.updateSelectedNodes = function (init) {
        if (init === void 0) { init = false; }
        if (init) {
            var nodes = this.coerceTreeNodes(this.nzNodes);
            this.nzTreeService.isMultiple = this.isMultiple;
            this.nzTreeService.isCheckStrictly = this.nzCheckStrictly;
            this.nzTreeService.initTree(nodes);
            if (this.nzCheckable) {
                this.nzTreeService.calcCheckedKeys(this.value, nodes, this.nzCheckStrictly);
            }
            else {
                this.nzTreeService.calcSelectedKeys(this.value, nodes, this.isMultiple);
            }
        }
        this.selectedNodes = __spread((this.nzCheckable ? this.getCheckedNodeList() : this.getSelectedNodeList()));
    };
    NzTreeSelectComponent.prototype.updatePosition = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.cdkConnectedOverlay && _this.cdkConnectedOverlay.overlayRef) {
                _this.cdkConnectedOverlay.overlayRef.updatePosition();
            }
        });
    };
    NzTreeSelectComponent.prototype.onPositionChange = function (position) {
        this.dropDownPosition = position.connectionPair.originY;
    };
    NzTreeSelectComponent.prototype.updateInputWidth = function () {
        if (this.isMultiple && this.inputElement) {
            if (this.inputValue || this.isComposing) {
                this.renderer.setStyle(this.inputElement.nativeElement, 'width', this.inputElement.nativeElement.scrollWidth + "px");
            }
            else {
                this.renderer.removeStyle(this.inputElement.nativeElement, 'width');
            }
        }
    };
    NzTreeSelectComponent.prototype.onClearSelection = function ($event) {
        var _this = this;
        $event.stopPropagation();
        $event.preventDefault();
        this.selectedNodes.forEach(function (node) {
            _this.removeSelected(node, false);
        });
        this.nzCleared.emit();
    };
    NzTreeSelectComponent.prototype.setSearchValues = function ($event) {
        var _this = this;
        Promise.resolve().then(function () {
            _this.isNotFound = (_this.nzShowSearch || _this.isMultiple) && !!_this.inputValue && $event.matchedKeys.length === 0;
        });
    };
    NzTreeSelectComponent.prototype.updateCdkConnectedOverlayStatus = function () {
        this.triggerWidth = this.cdkOverlayOrigin.elementRef.nativeElement.getBoundingClientRect().width;
    };
    NzTreeSelectComponent.prototype.trackValue = function (_index, option) {
        return option.key;
    };
    /** @nocollapse */ NzTreeSelectComponent.ɵfac = function NzTreeSelectComponent_Factory(t) { return new (t || NzTreeSelectComponent)(i0.ɵɵdirectiveInject(i1.NzTreeSelectService), i0.ɵɵdirectiveInject(i2.NzConfigService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i2.NzNoAnimationDirective, 9)); };
    /** @nocollapse */ NzTreeSelectComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzTreeSelectComponent, selectors: [["nz-tree-select"]], contentQueries: function NzTreeSelectComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵstaticContentQuery(dirIndex, _c0, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.nzTreeTemplateChild = _t.first);
        } }, viewQuery: function NzTreeSelectComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c1, true);
            i0.ɵɵviewQuery(_c2, true);
            i0.ɵɵstaticViewQuery(CdkOverlayOrigin, true);
            i0.ɵɵviewQuery(CdkConnectedOverlay, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.treeRef = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.cdkOverlayOrigin = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.cdkConnectedOverlay = _t.first);
        } }, hostBindings: function NzTreeSelectComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            i0.ɵɵallocHostVars(6);
            i0.ɵɵlistener("click", function NzTreeSelectComponent_click_HostBindingHandler($event) { return ctx.trigger(); });
        } if (rf & 2) {
            i0.ɵɵclassProp("ant-select-lg", ctx.nzSize === "large")("ant-select-sm", ctx.nzSize === "small")("ant-select-enabled", !ctx.nzDisabled)("ant-select-disabled", ctx.nzDisabled)("ant-select-allow-clear", ctx.nzAllowClear)("ant-select-open", ctx.nzOpen);
        } }, inputs: { nzAllowClear: "nzAllowClear", nzShowExpand: "nzShowExpand", nzShowLine: "nzShowLine", nzDropdownMatchSelectWidth: "nzDropdownMatchSelectWidth", nzCheckable: "nzCheckable", nzHideUnMatched: "nzHideUnMatched", nzShowIcon: "nzShowIcon", nzShowSearch: "nzShowSearch", nzDisabled: "nzDisabled", nzAsyncData: "nzAsyncData", nzMultiple: "nzMultiple", nzDefaultExpandAll: "nzDefaultExpandAll", nzCheckStrictly: "nzCheckStrictly", nzExpandedIcon: "nzExpandedIcon", nzNotFoundContent: "nzNotFoundContent", nzNodes: "nzNodes", nzOpen: "nzOpen", nzSize: "nzSize", nzPlaceHolder: "nzPlaceHolder", nzDropdownStyle: "nzDropdownStyle", nzDefaultExpandedKeys: "nzDefaultExpandedKeys", nzExpandedKeys: "nzExpandedKeys", nzDisplayWith: "nzDisplayWith", nzMaxTagCount: "nzMaxTagCount", nzMaxTagPlaceholder: "nzMaxTagPlaceholder", nzTreeTemplate: "nzTreeTemplate" }, outputs: { nzOpenChange: "nzOpenChange", nzCleared: "nzCleared", nzRemoved: "nzRemoved", nzExpandChange: "nzExpandChange", nzTreeClick: "nzTreeClick", nzTreeCheckBoxChange: "nzTreeCheckBoxChange" }, exportAs: ["nzTreeSelect"], features: [i0.ɵɵProvidersFeature([
                NzTreeSelectService,
                {
                    provide: NzTreeHigherOrderServiceToken,
                    useFactory: higherOrderServiceFactory,
                    deps: [[new Self(), Injector]]
                },
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef((function () { return NzTreeSelectComponent; })),
                    multi: true
                }
            ]), i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature()], decls: 8, vars: 11, consts: [["inputTemplate", ""], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayWidth", "backdropClick", "detach", "positionChange"], ["cdkOverlayOrigin", "", "tabindex", "0", 1, "ant-select-selection"], [4, "ngIf"], ["class", "ant-select-selection__clear", 3, "mousedown", "click", 4, "ngIf"], ["class", "ant-select-arrow", 4, "ngIf"], ["autocomplete", "off", 1, "ant-select-search__field", 3, "ngModel", "disabled", "compositionstart", "compositionend", "keydown", "ngModelChange"], ["inputElement", ""], [1, "ant-select-dropdown", "ant-select-tree-dropdown", 3, "nzNoAnimation", "ngStyle"], ["nzNoAnimation", "", "nzSelectMode", "", 3, "hidden", "nzData", "nzMultiple", "nzSearchValue", "nzHideUnMatched", "nzShowIcon", "nzCheckable", "nzAsyncData", "nzShowExpand", "nzShowLine", "nzExpandedIcon", "nzExpandAll", "nzExpandedKeys", "nzCheckedKeys", "nzSelectedKeys", "nzTreeTemplate", "nzCheckStrictly", "nzExpandChange", "nzClick", "nzCheckedKeysChange", "nzSelectedKeysChange", "nzCheckBoxChange", "nzSearchValueChange"], ["treeRef", ""], ["class", "ant-select-not-found", 4, "ngIf"], [1, "ant-select-not-found"], [3, "nzComponentName", "specificContent"], [1, "ant-select-selection__rendered"], ["class", "ant-select-selection__placeholder", 3, "display", 4, "ngIf"], ["class", "ant-select-selection-selected-value", 3, "ngStyle", 4, "ngIf"], ["class", "ant-select-search ant-select-search--inline", 3, "display", 4, "ngIf"], [1, "ant-select-selection__placeholder"], [1, "ant-select-selection-selected-value", 3, "ngStyle"], [1, "ant-select-search", "ant-select-search--inline"], [1, "ant-select-search__field__wrap"], [3, "ngTemplateOutlet"], [1, "ant-select-search__field__mirror"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "ant-select-selection__choice", 4, "ngIf"], [1, "ant-select-selection__choice", 3, "nzNoAnimation"], ["class", "ant-select-selection__choice__remove", 3, "mousedown", "click", 4, "ngIf"], [1, "ant-select-selection__choice__content"], [1, "ant-select-selection__choice__remove", 3, "mousedown", "click"], ["nz-icon", "", "nzType", "close", 1, "ant-select-remove-icon"], [1, "ant-select-selection__choice"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-select-selection__clear", 3, "mousedown", "click"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", 1, "ant-select-clear-icon"], [1, "ant-select-arrow"], ["nz-icon", "", "nzType", "down", 1, "ant-select-arrow-icon"]], template: function NzTreeSelectComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, NzTreeSelectComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(2, NzTreeSelectComponent_ng_template_2_Template, 4, 28, "ng-template", 1);
            i0.ɵɵlistener("backdropClick", function NzTreeSelectComponent_Template_ng_template_backdropClick_2_listener($event) { return ctx.closeDropDown(); })("detach", function NzTreeSelectComponent_Template_ng_template_detach_2_listener($event) { return ctx.closeDropDown(); })("positionChange", function NzTreeSelectComponent_Template_ng_template_positionChange_2_listener($event) { return ctx.onPositionChange($event); });
            i0.ɵɵelementStart(3, "div", 2);
            i0.ɵɵtemplate(4, NzTreeSelectComponent_ng_container_4_Template, 5, 3, "ng-container", 3);
            i0.ɵɵtemplate(5, NzTreeSelectComponent_ng_container_5_Template, 8, 9, "ng-container", 3);
            i0.ɵɵtemplate(6, NzTreeSelectComponent_span_6_Template, 2, 0, "span", 4);
            i0.ɵɵtemplate(7, NzTreeSelectComponent_span_7_Template, 2, 0, "span", 5);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("cdkConnectedOverlayOrigin", ctx.cdkOverlayOrigin)("cdkConnectedOverlayOpen", ctx.nzOpen)("cdkConnectedOverlayHasBackdrop", true)("cdkConnectedOverlayMinWidth", ctx.nzDropdownMatchSelectWidth ? null : ctx.triggerWidth)("cdkConnectedOverlayWidth", ctx.nzDropdownMatchSelectWidth ? ctx.triggerWidth : null);
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("ant-select-selection--single", !ctx.isMultiple)("ant-select-selection--multiple", ctx.isMultiple);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.isMultiple);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.isMultiple);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.nzAllowClear);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.isMultiple);
        } }, directives: [i3.CdkConnectedOverlay, i2.NzConnectedOverlayDirective, i3.CdkOverlayOrigin, i4.NgIf, i5.DefaultValueAccessor, i5.NgControlStatus, i5.NgModel, i2.NzNoAnimationDirective, i4.NgStyle, i6.NzTreeComponent, i7.NzEmbedEmptyComponent, i4.NgTemplateOutlet, i4.NgForOf, i8.NzIconDirective], pipes: [i4.SlicePipe], styles: [".ant-select-dropdown[_ngcontent-%COMP%] {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n        overflow: auto;\n      }"], data: { animation: [slideMotion, zoomMotion] } });
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzTreeSelectComponent.prototype, "nzAllowClear", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzTreeSelectComponent.prototype, "nzShowExpand", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzTreeSelectComponent.prototype, "nzShowLine", void 0);
    __decorate([
        InputBoolean(), WithConfig(NZ_CONFIG_COMPONENT_NAME, true),
        __metadata("design:type", Boolean)
    ], NzTreeSelectComponent.prototype, "nzDropdownMatchSelectWidth", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzTreeSelectComponent.prototype, "nzCheckable", void 0);
    __decorate([
        InputBoolean(), WithConfig(NZ_CONFIG_COMPONENT_NAME, false),
        __metadata("design:type", Boolean)
    ], NzTreeSelectComponent.prototype, "nzHideUnMatched", void 0);
    __decorate([
        InputBoolean(), WithConfig(NZ_CONFIG_COMPONENT_NAME, false),
        __metadata("design:type", Boolean)
    ], NzTreeSelectComponent.prototype, "nzShowIcon", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzTreeSelectComponent.prototype, "nzShowSearch", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTreeSelectComponent.prototype, "nzDisabled", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTreeSelectComponent.prototype, "nzAsyncData", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTreeSelectComponent.prototype, "nzMultiple", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTreeSelectComponent.prototype, "nzDefaultExpandAll", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTreeSelectComponent.prototype, "nzCheckStrictly", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default'),
        __metadata("design:type", String)
    ], NzTreeSelectComponent.prototype, "nzSize", void 0);
    return NzTreeSelectComponent;
}(NzTreeBase));
export { NzTreeSelectComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzTreeSelectComponent, [{
        type: Component,
        args: [{
                selector: 'nz-tree-select',
                exportAs: 'nzTreeSelect',
                animations: [slideMotion, zoomMotion],
                templateUrl: './nz-tree-select.component.html',
                providers: [
                    NzTreeSelectService,
                    {
                        provide: NzTreeHigherOrderServiceToken,
                        useFactory: higherOrderServiceFactory,
                        deps: [[new Self(), Injector]]
                    },
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((function () { return NzTreeSelectComponent; })),
                        multi: true
                    }
                ],
                host: {
                    '[class.ant-select-lg]': 'nzSize==="large"',
                    '[class.ant-select-sm]': 'nzSize==="small"',
                    '[class.ant-select-enabled]': '!nzDisabled',
                    '[class.ant-select-disabled]': 'nzDisabled',
                    '[class.ant-select-allow-clear]': 'nzAllowClear',
                    '[class.ant-select-open]': 'nzOpen',
                    '(click)': 'trigger()'
                },
                styles: [
                    "\n      .ant-select-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n        overflow: auto;\n      }\n    "
                ]
            }]
    }], function () { return [{ type: i1.NzTreeSelectService }, { type: i2.NzConfigService }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i2.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { nzAllowClear: [{
            type: Input
        }], nzShowExpand: [{
            type: Input
        }], nzShowLine: [{
            type: Input
        }], nzDropdownMatchSelectWidth: [{
            type: Input
        }], nzCheckable: [{
            type: Input
        }], nzHideUnMatched: [{
            type: Input
        }], nzShowIcon: [{
            type: Input
        }], nzShowSearch: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }], nzAsyncData: [{
            type: Input
        }], nzMultiple: [{
            type: Input
        }], nzDefaultExpandAll: [{
            type: Input
        }], nzCheckStrictly: [{
            type: Input
        }], nzExpandedIcon: [{
            type: Input
        }], nzNotFoundContent: [{
            type: Input
        }], nzNodes: [{
            type: Input
        }], nzOpen: [{
            type: Input
        }], nzSize: [{
            type: Input
        }], nzPlaceHolder: [{
            type: Input
        }], nzDropdownStyle: [{
            type: Input
        }], nzDefaultExpandedKeys: [{
            type: Input
        }], nzExpandedKeys: [{
            type: Input
        }], nzDisplayWith: [{
            type: Input
        }], nzMaxTagCount: [{
            type: Input
        }], nzMaxTagPlaceholder: [{
            type: Input
        }], nzOpenChange: [{
            type: Output
        }], nzCleared: [{
            type: Output
        }], nzRemoved: [{
            type: Output
        }], nzExpandChange: [{
            type: Output
        }], nzTreeClick: [{
            type: Output
        }], nzTreeCheckBoxChange: [{
            type: Output
        }], inputElement: [{
            type: ViewChild,
            args: ['inputElement', { static: false }]
        }], treeRef: [{
            type: ViewChild,
            args: ['treeRef', { static: false }]
        }], cdkOverlayOrigin: [{
            type: ViewChild,
            args: [CdkOverlayOrigin, { static: true }]
        }], cdkConnectedOverlay: [{
            type: ViewChild,
            args: [CdkConnectedOverlay, { static: false }]
        }], nzTreeTemplate: [{
            type: Input
        }], nzTreeTemplateChild: [{
            type: ContentChild,
            args: ['nzTreeTemplate', { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90cmVlLXNlbGVjdC8iLCJzb3VyY2VzIjpbIm56LXRyZWUtc2VsZWN0LmNvbXBvbmVudC50cyIsIm56LXRyZWUtc2VsZWN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGdCQUFnQixFQUFrQyxNQUFNLHNCQUFzQixDQUFDO0FBQzdHLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixJQUFJLEVBQ0osUUFBUSxFQUNSLEtBQUssRUFJTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFDVCxJQUFJLEVBRUosV0FBVyxFQUNYLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLElBQUksWUFBWSxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUMvRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFDTCxZQUFZLEVBQ1osUUFBUSxFQUNSLGVBQWUsRUFFZixzQkFBc0IsRUFFdEIsVUFBVSxFQUVWLDZCQUE2QixFQUc3QixXQUFXLEVBQ1gsZUFBZSxFQUNmLFVBQVUsRUFDVixVQUFVLEVBQ1gsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFckQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7Ozs7Ozs7OztJQ3REN0QsbUNBV0Y7SUFQSSxpT0FBa0MsSUFBSSxJQUFDLGdOQUNQLEtBQUssSUFERSw4TUFBQSx5TkFBQTtJQUp6QyxpQkFXRjs7O0lBSkksOENBQXNCLGtDQUFBOzs7SUEwRHRCLGdDQUNFO0lBQUEscUNBR2tCO0lBQ3BCLGlCQUFPOzs7SUFISCxlQUFpQztJQUFqQywrQ0FBaUMsZ0RBQUE7Ozs7O0lBMUN2Qyw4QkFXRTtJQUFBLHNDQTRCVTtJQVBSLGlQQUErQyw0S0FDcEMsa0NBQXdCLElBRFksdU9BQUEseU9BQUEsOExBSTNCLDJDQUFpQyxJQUpOLHlPQUFBO0lBT2pELGlCQUFVO0lBQ1YsdUZBQ0U7SUFLSixpQkFBTTs7O0lBekNKLG9FQUFpRCx1REFBQSxxRkFBQSwrRUFBQTtJQUhqRCxxRkFBbUQsMEZBQUEsNkZBQUEsc0NBQUE7SUFXakQsZUFBcUI7SUFBckIsNkNBQXFCLDZCQUFBLG9DQUFBLHVDQUFBLDhDQUFBLG9DQUFBLHNDQUFBLHNDQUFBLHdDQUFBLG9DQUFBLDRDQUFBLDZDQUFBLDBDQUFBLHdGQUFBLDBGQUFBLDBDQUFBLDhDQUFBO0lBMkJqQixlQUEwQztJQUExQyw2RUFBMEM7OztJQWtCOUMsK0JBS0U7SUFBQSxZQUNGO0lBQUEsaUJBQU07OztJQUpKLHVEQUFvQztJQUdwQyxlQUNGO0lBREUsd0RBQ0Y7OztJQUVBLCtCQU1FO0lBQUEsWUFDRjtJQUFBLGlCQUFNOzs7SUFISix3REFBZ0M7SUFEaEMsNEVBQThDO0lBRzlDLGVBQ0Y7SUFERSxvRkFDRjs7OztJQUVBLCtCQUtFO0lBQUEsK0JBQ0U7SUFBQSw0R0FBZ0Q7SUFDaEQsZ0NBQStDO0lBQUEsWUFBc0I7SUFBQSxpQkFBTztJQUM5RSxpQkFBTTtJQUNSLGlCQUFNOzs7O0lBUEosa0RBQStCO0lBSWhCLGVBQWtDO0lBQWxDLHlDQUFrQztJQUNBLGVBQXNCO0lBQXRCLHlEQUFzQjs7O0lBMUI3RSw2QkFDRTtJQUFBLCtCQUNFO0lBQUEsc0ZBS0U7SUFHRixzRkFNRTtJQUdGLHNGQUtFO0lBS0osaUJBQU07SUFDUiwwQkFBZTs7O0lBM0JULGVBQW1EO0lBQW5ELHNGQUFtRDtJQVFuRCxlQUFrQztJQUFsQywyREFBa0M7SUFTbEMsZUFBb0I7SUFBcEIsNkNBQW9COzs7SUFhdEIsK0JBS0U7SUFBQSxZQUNGO0lBQUEsaUJBQU07OztJQUpKLHVEQUFvQztJQUdwQyxlQUNGO0lBREUsd0RBQ0Y7Ozs7SUFZSSxnQ0FNRTtJQUhBLDZLQUFhLHVCQUF1QixJQUFDLGlSQUNQLElBQUksYUFERztJQUdyQyx3QkFBNkQ7SUFDL0QsaUJBQU87OztJQWxCWCw2QkFHRTtJQUFBLDhCQVFFO0lBQUEsdUdBTUU7SUFFRixnQ0FBb0Q7SUFBQSxZQUF5QjtJQUFBLGlCQUFPO0lBQ3RGLGlCQUFLO0lBQ1AsMEJBQWU7Ozs7SUFiWCxlQUFnRTtJQUFoRSwrRUFBZ0U7SUFKaEUsdUNBQWEsMEZBQUEsNkZBQUE7SUFHYiw0REFBa0M7SUFLaEMsZUFBd0I7SUFBeEIsNkNBQXdCO0lBTzBCLGVBQXlCO0lBQXpCLHlEQUF5Qjs7Ozs7SUFTN0UsNkJBQ0U7SUFBQSwwSEFJQTs7SUFDRiwwQkFBZTs7O0lBSlgsZUFBd0M7SUFBeEMsZ0VBQXdDLCtIQUFBOzs7SUFLNUMsNkJBQ0U7SUFBQSxZQUNGO0lBQUEsMEJBQWU7OztJQURiLGVBQ0Y7SUFERSwrRkFDRjs7O0lBZkosOEJBS0U7SUFBQSwrQkFDRTtJQUFBLDRHQUNFO0lBTUYsNEdBQ0U7SUFFSixpQkFBTTtJQUNSLGlCQUFLOzs7SUFoQkgsdUNBQWE7SUFLRyxlQUEyQjtJQUEzQixvREFBMkI7SUFPM0IsZUFBNEI7SUFBNUIscURBQTRCOzs7O0lBNUNsRCw2QkFDRTtJQUFBLDhCQUNFO0lBQUEsc0ZBS0U7SUFFRix3R0FHRTs7SUFtQkYsb0ZBS0U7SUFhRiw4QkFDRTtJQUFBLHNHQUFnRDtJQUNsRCxpQkFBSztJQUNQLGlCQUFLO0lBQ1AsMEJBQWU7Ozs7SUFsRFQsZUFBbUQ7SUFBbkQsc0ZBQW1EO0lBT25ELGVBQWdGO0lBQWhGLG1HQUFnRixzQ0FBQTtJQXVCaEYsZUFBNEM7SUFBNUMsK0VBQTRDO0lBaUIvQixlQUFrQztJQUFsQyx5Q0FBa0M7Ozs7SUFJckQsZ0NBTUU7SUFIQSwrSUFBYSx1QkFBdUIsSUFBQyxvTUFBQTtJQUdyQyx3QkFBa0Y7SUFDcEYsaUJBQU87OztJQUNQLGdDQUNFO0lBQUEsd0JBQTJEO0lBQzdELGlCQUFPOztBRHhIVCxNQUFNLFVBQVUseUJBQXlCLENBQUMsUUFBa0I7SUFDMUQsT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDM0MsQ0FBQztBQUVELElBQU0sd0JBQXdCLEdBQUcsWUFBWSxDQUFDO0FBRTlDO0lBeUMyQyx5Q0FBVTtJQTZHbkQsK0JBQ0UsYUFBa0MsRUFDM0IsZUFBZ0MsRUFDL0IsUUFBbUIsRUFDbkIsR0FBc0IsRUFDdEIsVUFBc0IsRUFDSCxXQUFvQztRQU5qRSxZQVFFLGtCQUFNLGFBQWEsQ0FBQyxTQUVyQjtRQVJRLHFCQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUMvQixjQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLFNBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLGdCQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ0gsaUJBQVcsR0FBWCxXQUFXLENBQXlCO1FBbEh4QyxrQkFBWSxHQUFZLElBQUksQ0FBQztRQUM3QixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUM3QixnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUU1QixpQkFBVyxHQUFZLEtBQUssQ0FBQztRQUc3QixrQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixnQkFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixpQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixnQkFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQix3QkFBa0IsR0FBRyxLQUFLLENBQUM7UUFDM0IscUJBQWUsR0FBRyxLQUFLLENBQUM7UUFHeEMsYUFBTyxHQUEwQyxFQUFFLENBQUM7UUFDcEQsWUFBTSxHQUFHLEtBQUssQ0FBQztRQUVmLG1CQUFhLEdBQUcsRUFBRSxDQUFDO1FBc0JuQixtQkFBYSxHQUE2QyxVQUFDLElBQWdCLElBQUssT0FBQSxJQUFJLENBQUMsS0FBSyxFQUFWLENBQVUsQ0FBQztRQUdqRixrQkFBWSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDM0MsZUFBUyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDckMsZUFBUyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDM0Msb0JBQWMsR0FBRyxJQUFJLFlBQVksRUFBcUIsQ0FBQztRQUN2RCxpQkFBVyxHQUFHLElBQUksWUFBWSxFQUFxQixDQUFDO1FBQ3BELDBCQUFvQixHQUFHLElBQUksWUFBWSxFQUFxQixDQUFDO1FBY2hGLGlCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGVBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsZ0JBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsZ0JBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsc0JBQWdCLEdBQWdDLFFBQVEsQ0FBQztRQUV6RCxtQkFBYSxHQUFpQixFQUFFLENBQUM7UUFDakMsa0JBQVksR0FBYSxFQUFFLENBQUM7UUFDNUIsV0FBSyxHQUFhLEVBQUUsQ0FBQztRQUdyQixlQUFTLEdBQWUsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLENBQUM7UUE0Q2pDLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFlBQVksQ0FBQyxDQUFDOztJQUN0RSxDQUFDO0lBL0ZELHNCQUNJLHdEQUFxQjthQUl6QjtZQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUMzQixDQUFDO1FBVkQ7O1dBRUc7YUFDSCxVQUMwQixLQUFlO1lBQ3ZDLGVBQWUsQ0FBQyx5RkFBeUYsQ0FBQyxDQUFDO1lBQzNHLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzVCLENBQUM7OztPQUFBO0lBS0Qsc0JBQ0ksaURBQWM7YUFHbEI7WUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDM0IsQ0FBQzthQU5ELFVBQ21CLEtBQWU7WUFDaEMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7SUFzQkQsc0JBQUksK0NBQVk7YUFBaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDO1FBQ3pELENBQUM7OztPQUFBO0lBZ0JELHNCQUFJLHFEQUFrQjthQUF0QjtZQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUM3RixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGdEQUFhO2FBQWpCO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUN4QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDZDQUFVO2FBQWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM3QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHVEQUFvQjthQUF4QjtZQUNFLElBQUksaUJBQWlCLEdBQUcsS0FBSyxDQUFDO1lBQzlCLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDdEIsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO2FBQzFCO2lCQUFNO2dCQUNMLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtvQkFDZixpQkFBaUIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQzNELElBQUksaUJBQWlCLEVBQUU7d0JBQ3JCLE9BQU8sR0FBRyxHQUFHLENBQUM7cUJBQ2Y7aUJBQ0Y7cUJBQU07b0JBQ0wsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO2lCQUMxQjthQUNGO1lBQ0QsT0FBTztnQkFDTCxPQUFPLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTTtnQkFDN0MsT0FBTyxFQUFFLEtBQUcsT0FBUzthQUN0QixDQUFDO1FBQ0osQ0FBQzs7O09BQUE7SUFjRCx3Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLDJCQUEyQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0lBQ3JFLENBQUM7SUFFRCwyQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBRUQsZ0RBQWdCLEdBQWhCLFVBQWlCLFVBQW1CO1FBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsMkNBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNyQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEM7SUFDSCxDQUFDO0lBRUQsMENBQVUsR0FBVixVQUFXLEtBQXdCO1FBQW5DLGlCQWdCQztRQWZDLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ25CLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzthQUNwQjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBZSxDQUFDLENBQUM7YUFDaEM7WUFDRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEM7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtnQkFDN0IsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDbkMsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztTQUN6QjtRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELGdEQUFnQixHQUFoQixVQUFpQixFQUF5QztRQUN4RCxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsaURBQWlCLEdBQWpCLFVBQWtCLEVBQWM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELHVDQUFPLEdBQVA7UUFDRSxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3hELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN0QjthQUFNO1lBQ0wsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3BCLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUN4QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDckI7U0FDRjtJQUNILENBQUM7SUFFRCw0Q0FBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQywrQkFBK0IsRUFBRSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN2QjtJQUNILENBQUM7SUFFRCw2Q0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCw4Q0FBYyxHQUFkLFVBQWUsQ0FBZ0I7UUFDN0IsSUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUMxQixJQUFNLFdBQVcsR0FBRyxDQUFDLENBQUMsTUFBMEIsQ0FBQztRQUNqRCxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxJQUFJLE9BQU8sS0FBSyxTQUFTLEVBQUU7WUFDbEUsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ25CLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7Z0JBQzdCLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JFLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxhQUFjLENBQUMsbUJBQW9CLENBQUMsSUFBSSxDQUFDO29CQUM1QyxTQUFTLEVBQUUsY0FBYztvQkFDekIsSUFBSSxFQUFFLFVBQVU7aUJBQ2pCLENBQUMsQ0FBQzthQUNKO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsb0RBQW9CLEdBQXBCLFVBQXFCLEtBQXdCO1FBQzNDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxZQUFZLFlBQU8sS0FBSyxDQUFDLElBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCw2Q0FBYSxHQUFiLFVBQWMsS0FBYTtRQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELDhDQUFjLEdBQWQsVUFBZSxJQUFnQixFQUFFLElBQW9CLEVBQUUsS0FBa0I7UUFBeEMscUJBQUEsRUFBQSxXQUFvQjtRQUNuRCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbEM7YUFBTTtZQUNMLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUMvRDtRQUVELElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDM0I7UUFFRCwyQkFBMkI7UUFDM0IsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLGVBQWUsRUFBRTtZQUNsQyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBRUQsNENBQVksR0FBWjtRQUFBLGlCQU1DO1FBTEMsVUFBVSxDQUFDO1lBQ1QsSUFBSSxLQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNyQixLQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUN6QztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHdEQUF3QixHQUF4QjtRQUFBLGlCQXlDQztRQXhDQyxPQUFPLEtBQUssQ0FDVixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FDbkIsR0FBRyxDQUFDLFVBQUMsS0FBd0I7WUFDM0IsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUssQ0FBQztZQUN6QixJQUFJLEtBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFO2dCQUNuRSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxLQUFJLENBQUMsZUFBZSxFQUFFO29CQUN6QixLQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDbEM7YUFDRjtZQUNELElBQUksS0FBSSxDQUFDLFdBQVcsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7YUFDekI7UUFDSCxDQUFDLENBQUMsRUFDRixNQUFNLENBQUMsVUFBQyxLQUF3QjtZQUM5QixJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSyxDQUFDO1lBQ3pCLE9BQU8sS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQztRQUNoSCxDQUFDLENBQUMsQ0FDSCxFQUNELElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFLEVBQzdELElBQUksQ0FBQyxTQUFTLEVBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FDZixDQUFDLFNBQVMsQ0FBQztZQUNWLEtBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQzNCLElBQU0sS0FBSyxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLEdBQUksRUFBVCxDQUFTLENBQUMsQ0FBQztZQUN4RCxLQUFJLENBQUMsS0FBSyxZQUFPLEtBQUssQ0FBQyxDQUFDO1lBQ3hCLElBQUksS0FBSSxDQUFDLFlBQVksSUFBSSxLQUFJLENBQUMsVUFBVSxFQUFFO2dCQUN4QyxLQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztnQkFDckIsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7YUFDekI7WUFDRCxJQUFJLEtBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ25CLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3JCLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDcEIsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQ3ZCO2lCQUFNO2dCQUNMLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDckIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQy9DO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsbURBQW1CLEdBQW5CLFVBQW9CLElBQXFCO1FBQXJCLHFCQUFBLEVBQUEsWUFBcUI7UUFDdkMsSUFBSSxJQUFJLEVBQUU7WUFDUixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ2hELElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7WUFDMUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkMsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7YUFDN0U7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDekU7U0FDRjtRQUVELElBQUksQ0FBQyxhQUFhLFlBQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3hHLENBQUM7SUFFRCw4Q0FBYyxHQUFkO1FBQUEsaUJBTUM7UUFMQyxVQUFVLENBQUM7WUFDVCxJQUFJLEtBQUksQ0FBQyxtQkFBbUIsSUFBSSxLQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxFQUFFO2dCQUNuRSxLQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQ3REO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsZ0RBQWdCLEdBQWhCLFVBQWlCLFFBQXdDO1FBQ3ZELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztJQUMxRCxDQUFDO0lBRUQsZ0RBQWdCLEdBQWhCO1FBQ0UsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDeEMsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBSyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxXQUFXLE9BQUksQ0FBQyxDQUFDO2FBQ3RIO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQ3JFO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsZ0RBQWdCLEdBQWhCLFVBQWlCLE1BQWtCO1FBQW5DLGlCQU9DO1FBTkMsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3pCLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7WUFDN0IsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCwrQ0FBZSxHQUFmLFVBQWdCLE1BQXlCO1FBQXpDLGlCQUlDO1FBSEMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQztZQUNyQixLQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsS0FBSSxDQUFDLFlBQVksSUFBSSxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUksQ0FBQyxVQUFVLElBQUksTUFBTSxDQUFDLFdBQVksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1FBQ3BILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELCtEQUErQixHQUEvQjtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxLQUFLLENBQUM7SUFDbkcsQ0FBQztJQUVELDBDQUFVLEdBQVYsVUFBVyxNQUFjLEVBQUUsTUFBa0I7UUFDM0MsT0FBTyxNQUFNLENBQUMsR0FBSSxDQUFDO0lBQ3JCLENBQUM7OEZBaFdVLHFCQUFxQjs4REFBckIscUJBQXFCOzs7Ozs7OztpQ0FxRHJCLGdCQUFnQjsyQkFDaEIsbUJBQW1COzs7Ozs7Ozs7Ozs7eW1DQTFGbkI7Z0JBQ1QsbUJBQW1CO2dCQUNuQjtvQkFDRSxPQUFPLEVBQUUsNkJBQTZCO29CQUN0QyxVQUFVLEVBQUUseUJBQXlCO29CQUNyQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7aUJBQy9CO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxpQkFBaUI7b0JBQzFCLFdBQVcsRUFBRSxVQUFVLEVBQUMsY0FBTSxPQUFBLHFCQUFxQixFQUFyQixDQUFxQixFQUFDO29CQUNwRCxLQUFLLEVBQUUsSUFBSTtpQkFDWjthQUNGO1lDaEZILHVIQUNFO1lBYUYsdUZBWUU7WUFKQSw2SEFBaUIsbUJBQWUsSUFBQyxrR0FDdkIsbUJBQWUsSUFEUSxrSEFFZiw0QkFBd0IsSUFGVDtZQXFEbkMsOEJBT0U7WUFBQSx3RkFDRTtZQThCRix3RkFDRTtZQXFERix3RUFNRTtZQUVGLHdFQUNFO1lBRUosaUJBQU07O1lBaktKLGVBQThDO1lBQTlDLGdFQUE4Qyx1Q0FBQSx3Q0FBQSx5RkFBQSxzRkFBQTtZQTZEOUMsZUFBa0Q7WUFBbEQsK0RBQWtELGtEQUFBO1lBSXBDLGVBQW1CO1lBQW5CLHNDQUFtQjtZQStCbkIsZUFBa0I7WUFBbEIscUNBQWtCO1lBdUQ5QixlQUFvQjtZQUFwQix1Q0FBb0I7WUFPaEIsZUFBbUI7WUFBbkIsc0NBQW1CO3VrQkQ3R2IsQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDO0lBdUNaO1FBQWYsWUFBWSxFQUFFOzsrREFBOEI7SUFDN0I7UUFBZixZQUFZLEVBQUU7OytEQUE4QjtJQUM3QjtRQUFmLFlBQVksRUFBRTs7NkRBQTZCO0lBQ2dCO1FBQTNELFlBQVksRUFBRSxFQUFFLFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLENBQUM7OzZFQUFxQztJQUNoRjtRQUFmLFlBQVksRUFBRTs7OERBQThCO0lBQ2dCO1FBQTVELFlBQVksRUFBRSxFQUFFLFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxLQUFLLENBQUM7O2tFQUEwQjtJQUN6QjtRQUE1RCxZQUFZLEVBQUUsRUFBRSxVQUFVLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxDQUFDOzs2REFBcUI7SUFDakU7UUFBZixZQUFZLEVBQUU7OytEQUErQjtJQUM5QjtRQUFmLFlBQVksRUFBRTs7NkRBQW9CO0lBQ25CO1FBQWYsWUFBWSxFQUFFOzs4REFBcUI7SUFDcEI7UUFBZixZQUFZLEVBQUU7OzZEQUFvQjtJQUNuQjtRQUFmLFlBQVksRUFBRTs7cUVBQTRCO0lBQzNCO1FBQWYsWUFBWSxFQUFFOztrRUFBeUI7SUFLUztRQUFoRCxVQUFVLENBQUMsd0JBQXdCLEVBQUUsU0FBUyxDQUFDOzt5REFBdUI7Z0NBMUhsRjtDQXljQyxBQTFZRCxDQXlDMkMsVUFBVSxHQWlXcEQ7U0FqV1kscUJBQXFCO2tEQUFyQixxQkFBcUI7Y0F6Q2pDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUUsY0FBYztnQkFDeEIsVUFBVSxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQztnQkFDckMsV0FBVyxFQUFFLGlDQUFpQztnQkFDOUMsU0FBUyxFQUFFO29CQUNULG1CQUFtQjtvQkFDbkI7d0JBQ0UsT0FBTyxFQUFFLDZCQUE2Qjt3QkFDdEMsVUFBVSxFQUFFLHlCQUF5Qjt3QkFDckMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO3FCQUMvQjtvQkFDRDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVSxFQUFDLGNBQU0sT0FBQSxxQkFBcUIsRUFBckIsQ0FBcUIsRUFBQzt3QkFDcEQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7Z0JBQ0QsSUFBSSxFQUFFO29CQUNKLHVCQUF1QixFQUFFLGtCQUFrQjtvQkFDM0MsdUJBQXVCLEVBQUUsa0JBQWtCO29CQUMzQyw0QkFBNEIsRUFBRSxhQUFhO29CQUMzQyw2QkFBNkIsRUFBRSxZQUFZO29CQUMzQyxnQ0FBZ0MsRUFBRSxjQUFjO29CQUNoRCx5QkFBeUIsRUFBRSxRQUFRO29CQUNuQyxTQUFTLEVBQUUsV0FBVztpQkFDdkI7Z0JBQ0QsTUFBTSxFQUFFO29CQUNOLHdOQVVDO2lCQUNGO2FBQ0Y7O3NCQW9ISSxJQUFJOztzQkFBSSxRQUFROztrQkFsSGxCLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUlMLEtBQUs7O2tCQVNMLEtBQUs7O2tCQVFMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUVOLFNBQVM7bUJBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7a0JBQzNDLFNBQVM7bUJBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7a0JBQ3RDLFNBQVM7bUJBQUMsZ0JBQWdCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztrQkFDNUMsU0FBUzttQkFBQyxtQkFBbUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O2tCQUVoRCxLQUFLOztrQkFDTCxZQUFZO21CQUFDLGdCQUFnQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQkFDS1NQQUNFIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcclxuaW1wb3J0IHsgQ2RrQ29ubmVjdGVkT3ZlcmxheSwgQ2RrT3ZlcmxheU9yaWdpbiwgQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgZm9yd2FyZFJlZixcclxuICBIb3N0LFxyXG4gIEluamVjdG9yLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2VsZixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBtZXJnZSwgb2YgYXMgb2JzZXJ2YWJsZU9mLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlsdGVyLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIElucHV0Qm9vbGVhbixcclxuICBpc05vdE5pbCxcclxuICBOekNvbmZpZ1NlcnZpY2UsXHJcbiAgTnpGb3JtYXRFbWl0RXZlbnQsXHJcbiAgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSxcclxuICBOelNpemVMRFNUeXBlLFxyXG4gIE56VHJlZUJhc2UsXHJcbiAgTnpUcmVlQmFzZVNlcnZpY2UsXHJcbiAgTnpUcmVlSGlnaGVyT3JkZXJTZXJ2aWNlVG9rZW4sXHJcbiAgTnpUcmVlTm9kZSxcclxuICBOelRyZWVOb2RlT3B0aW9ucyxcclxuICBzbGlkZU1vdGlvbixcclxuICB3YXJuRGVwcmVjYXRpb24sXHJcbiAgV2l0aENvbmZpZyxcclxuICB6b29tTW90aW9uXHJcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpUcmVlQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC90cmVlJztcclxuXHJcbmltcG9ydCB7IE56VHJlZVNlbGVjdFNlcnZpY2UgfSBmcm9tICcuL256LXRyZWUtc2VsZWN0LnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhpZ2hlck9yZGVyU2VydmljZUZhY3RvcnkoaW5qZWN0b3I6IEluamVjdG9yKTogTnpUcmVlQmFzZVNlcnZpY2Uge1xyXG4gIHJldHVybiBpbmplY3Rvci5nZXQoTnpUcmVlU2VsZWN0U2VydmljZSk7XHJcbn1cclxuXHJcbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICd0cmVlU2VsZWN0JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotdHJlZS1zZWxlY3QnLFxyXG4gIGV4cG9ydEFzOiAnbnpUcmVlU2VsZWN0JyxcclxuICBhbmltYXRpb25zOiBbc2xpZGVNb3Rpb24sIHpvb21Nb3Rpb25dLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei10cmVlLXNlbGVjdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBOelRyZWVTZWxlY3RTZXJ2aWNlLFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOelRyZWVIaWdoZXJPcmRlclNlcnZpY2VUb2tlbixcclxuICAgICAgdXNlRmFjdG9yeTogaGlnaGVyT3JkZXJTZXJ2aWNlRmFjdG9yeSxcclxuICAgICAgZGVwczogW1tuZXcgU2VsZigpLCBJbmplY3Rvcl1dXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnpUcmVlU2VsZWN0Q29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1sZ10nOiAnbnpTaXplPT09XCJsYXJnZVwiJyxcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1zbV0nOiAnbnpTaXplPT09XCJzbWFsbFwiJyxcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1lbmFibGVkXSc6ICchbnpEaXNhYmxlZCcsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtZGlzYWJsZWRdJzogJ256RGlzYWJsZWQnLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWFsbG93LWNsZWFyXSc6ICduekFsbG93Q2xlYXInLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LW9wZW5dJzogJ256T3BlbicsXHJcbiAgICAnKGNsaWNrKSc6ICd0cmlnZ2VyKCknXHJcbiAgfSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgLmFudC1zZWxlY3QtZHJvcGRvd24ge1xyXG4gICAgICAgIHRvcDogMTAwJTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpUcmVlU2VsZWN0Q29tcG9uZW50IGV4dGVuZHMgTnpUcmVlQmFzZSBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpBbGxvd0NsZWFyOiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93RXhwYW5kOiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93TGluZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIHRydWUpIG56RHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekNoZWNrYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIGZhbHNlKSBuekhpZGVVbk1hdGNoZWQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgZmFsc2UpIG56U2hvd0ljb246IGJvb2xlYW47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd1NlYXJjaDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QXN5bmNEYXRhID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56TXVsdGlwbGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEZWZhdWx0RXhwYW5kQWxsID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q2hlY2tTdHJpY3RseSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56RXhwYW5kZWRJY29uOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpUcmVlTm9kZSB9PjtcclxuICBASW5wdXQoKSBuek5vdEZvdW5kQ29udGVudDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56Tm9kZXM6IEFycmF5PE56VHJlZU5vZGUgfCBOelRyZWVOb2RlT3B0aW9ucz4gPSBbXTtcclxuICBASW5wdXQoKSBuek9wZW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsICdkZWZhdWx0JykgbnpTaXplOiBOelNpemVMRFNUeXBlO1xyXG4gIEBJbnB1dCgpIG56UGxhY2VIb2xkZXIgPSAnJztcclxuICBASW5wdXQoKSBuekRyb3Bkb3duU3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgOS4wLjAgLSB1c2UgYG56RXhwYW5kZWRLZXlzYCBpbnN0ZWFkLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56RGVmYXVsdEV4cGFuZGVkS2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcclxuICAgIHdhcm5EZXByZWNhdGlvbihgJ256RGVmYXVsdEV4cGFuZGVkS2V5cycgd291bGQgYmUgcmVtb3ZlZCBpbiA5LjAuMC4gUGxlYXNlIHVzZSAnbnpFeHBhbmRlZEtleXMnIGluc3RlYWQuYCk7XHJcbiAgICB0aGlzLmV4cGFuZGVkS2V5cyA9IHZhbHVlO1xyXG4gIH1cclxuICBnZXQgbnpEZWZhdWx0RXhwYW5kZWRLZXlzKCk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiB0aGlzLmV4cGFuZGVkS2V5cztcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56RXhwYW5kZWRLZXlzKHZhbHVlOiBzdHJpbmdbXSkge1xyXG4gICAgdGhpcy5leHBhbmRlZEtleXMgPSB2YWx1ZTtcclxuICB9XHJcbiAgZ2V0IG56RXhwYW5kZWRLZXlzKCk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiB0aGlzLmV4cGFuZGVkS2V5cztcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIG56RGlzcGxheVdpdGg6IChub2RlOiBOelRyZWVOb2RlKSA9PiBzdHJpbmcgfCB1bmRlZmluZWQgPSAobm9kZTogTnpUcmVlTm9kZSkgPT4gbm9kZS50aXRsZTtcclxuICBASW5wdXQoKSBuek1heFRhZ0NvdW50OiBudW1iZXI7XHJcbiAgQElucHV0KCkgbnpNYXhUYWdQbGFjZWhvbGRlcjogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56VHJlZU5vZGVbXSB9PjtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNsZWFyZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56UmVtb3ZlZCA9IG5ldyBFdmVudEVtaXR0ZXI8TnpUcmVlTm9kZT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpFeHBhbmRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelRyZWVDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56VHJlZUNoZWNrQm94Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcclxuXHJcbiAgQFZpZXdDaGlsZCgnaW5wdXRFbGVtZW50JywgeyBzdGF0aWM6IGZhbHNlIH0pIGlucHV0RWxlbWVudDogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PjtcclxuICBAVmlld0NoaWxkKCd0cmVlUmVmJywgeyBzdGF0aWM6IGZhbHNlIH0pIHRyZWVSZWY6IE56VHJlZUNvbXBvbmVudDtcclxuICBAVmlld0NoaWxkKENka092ZXJsYXlPcmlnaW4sIHsgc3RhdGljOiB0cnVlIH0pIGNka092ZXJsYXlPcmlnaW46IENka092ZXJsYXlPcmlnaW47XHJcbiAgQFZpZXdDaGlsZChDZGtDb25uZWN0ZWRPdmVybGF5LCB7IHN0YXRpYzogZmFsc2UgfSkgY2RrQ29ubmVjdGVkT3ZlcmxheTogQ2RrQ29ubmVjdGVkT3ZlcmxheTtcclxuXHJcbiAgQElucHV0KCkgbnpUcmVlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelRyZWVOb2RlIH0+O1xyXG4gIEBDb250ZW50Q2hpbGQoJ256VHJlZVRlbXBsYXRlJywgeyBzdGF0aWM6IHRydWUgfSkgbnpUcmVlVGVtcGxhdGVDaGlsZDogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56VHJlZU5vZGUgfT47XHJcbiAgZ2V0IHRyZWVUZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpUcmVlTm9kZSB9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5uelRyZWVUZW1wbGF0ZSB8fCB0aGlzLm56VHJlZVRlbXBsYXRlQ2hpbGQ7XHJcbiAgfVxyXG5cclxuICB0cmlnZ2VyV2lkdGg6IG51bWJlcjtcclxuICBpc0NvbXBvc2luZyA9IGZhbHNlO1xyXG4gIGlzRGVzdHJveSA9IHRydWU7XHJcbiAgaXNOb3RGb3VuZCA9IGZhbHNlO1xyXG4gIGlucHV0VmFsdWUgPSAnJztcclxuICBkcm9wRG93blBvc2l0aW9uOiAndG9wJyB8ICdjZW50ZXInIHwgJ2JvdHRvbScgPSAnYm90dG9tJztcclxuICBzZWxlY3Rpb25DaGFuZ2VTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICBzZWxlY3RlZE5vZGVzOiBOelRyZWVOb2RlW10gPSBbXTtcclxuICBleHBhbmRlZEtleXM6IHN0cmluZ1tdID0gW107XHJcbiAgdmFsdWU6IHN0cmluZ1tdID0gW107XHJcblxyXG4gIG9uQ2hhbmdlOiAodmFsdWU6IHN0cmluZ1tdIHwgc3RyaW5nIHwgbnVsbCkgPT4gdm9pZDtcclxuICBvblRvdWNoZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xyXG5cclxuICBnZXQgcGxhY2VIb2xkZXJEaXNwbGF5KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5pbnB1dFZhbHVlIHx8IHRoaXMuaXNDb21wb3NpbmcgfHwgdGhpcy5zZWxlY3RlZE5vZGVzLmxlbmd0aCA/ICdub25lJyA6ICdibG9jayc7XHJcbiAgfVxyXG5cclxuICBnZXQgc2VhcmNoRGlzcGxheSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMubnpPcGVuID8gJ2Jsb2NrJyA6ICdub25lJztcclxuICB9XHJcblxyXG4gIGdldCBpc011bHRpcGxlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubnpNdWx0aXBsZSB8fCB0aGlzLm56Q2hlY2thYmxlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNlbGVjdGVkVmFsdWVEaXNwbGF5KCk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xyXG4gICAgbGV0IHNob3dTZWxlY3RlZFZhbHVlID0gZmFsc2U7XHJcbiAgICBsZXQgb3BhY2l0eSA9IDE7XHJcbiAgICBpZiAoIXRoaXMubnpTaG93U2VhcmNoKSB7XHJcbiAgICAgIHNob3dTZWxlY3RlZFZhbHVlID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLm56T3Blbikge1xyXG4gICAgICAgIHNob3dTZWxlY3RlZFZhbHVlID0gISh0aGlzLmlucHV0VmFsdWUgfHwgdGhpcy5pc0NvbXBvc2luZyk7XHJcbiAgICAgICAgaWYgKHNob3dTZWxlY3RlZFZhbHVlKSB7XHJcbiAgICAgICAgICBvcGFjaXR5ID0gMC40O1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzaG93U2VsZWN0ZWRWYWx1ZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRpc3BsYXk6IHNob3dTZWxlY3RlZFZhbHVlID8gJ2Jsb2NrJyA6ICdub25lJyxcclxuICAgICAgb3BhY2l0eTogYCR7b3BhY2l0eX1gXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBuelRyZWVTZXJ2aWNlOiBOelRyZWVTZWxlY3RTZXJ2aWNlLFxyXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXHJcbiAgKSB7XHJcbiAgICBzdXBlcihuelRyZWVTZXJ2aWNlKTtcclxuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtc2VsZWN0Jyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNEZXN0cm95ID0gZmFsc2U7XHJcbiAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZVN1YnNjcmlwdGlvbiA9IHRoaXMuc3Vic2NyaWJlU2VsZWN0aW9uQ2hhbmdlKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNEZXN0cm95ID0gdHJ1ZTtcclxuICAgIHRoaXMuY2xvc2VEcm9wRG93bigpO1xyXG4gICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5uekRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICAgIHRoaXMuY2xvc2VEcm9wRG93bigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ256Tm9kZXMnKSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkTm9kZXModHJ1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmdbXSB8IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xyXG4gICAgICBpZiAodGhpcy5pc011bHRpcGxlICYmIEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBbdmFsdWUgYXMgc3RyaW5nXTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkTm9kZXModHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnZhbHVlID0gW107XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWROb2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlU2VsZWN0ZWQobm9kZSwgZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5zZWxlY3RlZE5vZGVzID0gW107XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBzdHJpbmdbXSB8IHN0cmluZyB8IG51bGwpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgdHJpZ2dlcigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56RGlzYWJsZWQgfHwgKCF0aGlzLm56RGlzYWJsZWQgJiYgdGhpcy5uek9wZW4pKSB7XHJcbiAgICAgIHRoaXMuY2xvc2VEcm9wRG93bigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5vcGVuRHJvcGRvd24oKTtcclxuICAgICAgaWYgKHRoaXMubnpTaG93U2VhcmNoIHx8IHRoaXMuaXNNdWx0aXBsZSkge1xyXG4gICAgICAgIHRoaXMuZm9jdXNPbklucHV0KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9wZW5Ecm9wZG93bigpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5uekRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMubnpPcGVuID0gdHJ1ZTtcclxuICAgICAgdGhpcy5uek9wZW5DaGFuZ2UuZW1pdCh0aGlzLm56T3Blbik7XHJcbiAgICAgIHRoaXMudXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVN0YXR1cygpO1xyXG4gICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbG9zZURyb3BEb3duKCk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQoKTtcclxuICAgIHRoaXMubnpPcGVuID0gZmFsc2U7XHJcbiAgICB0aGlzLm56T3BlbkNoYW5nZS5lbWl0KHRoaXMubnpPcGVuKTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgb25LZXlEb3duSW5wdXQoZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgY29uc3Qga2V5Q29kZSA9IGUua2V5Q29kZTtcclxuICAgIGNvbnN0IGV2ZW50VGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGlmICh0aGlzLmlzTXVsdGlwbGUgJiYgIWV2ZW50VGFyZ2V0LnZhbHVlICYmIGtleUNvZGUgPT09IEJBQ0tTUEFDRSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkTm9kZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3QgcmVtb3ZlTm9kZSA9IHRoaXMuc2VsZWN0ZWROb2Rlc1t0aGlzLnNlbGVjdGVkTm9kZXMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgdGhpcy5yZW1vdmVTZWxlY3RlZChyZW1vdmVOb2RlKTtcclxuICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UhLnRyaWdnZXJFdmVudENoYW5nZSQhLm5leHQoe1xyXG4gICAgICAgICAgZXZlbnROYW1lOiAncmVtb3ZlU2VsZWN0JyxcclxuICAgICAgICAgIG5vZGU6IHJlbW92ZU5vZGVcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25FeHBhbmRlZEtleXNDaGFuZ2UodmFsdWU6IE56Rm9ybWF0RW1pdEV2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLm56RXhwYW5kQ2hhbmdlLmVtaXQodmFsdWUpO1xyXG4gICAgdGhpcy5leHBhbmRlZEtleXMgPSBbLi4udmFsdWUua2V5cyFdO1xyXG4gIH1cclxuXHJcbiAgc2V0SW5wdXRWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmlucHV0VmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMudXBkYXRlSW5wdXRXaWR0aCgpO1xyXG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlU2VsZWN0ZWQobm9kZTogTnpUcmVlTm9kZSwgZW1pdDogYm9vbGVhbiA9IHRydWUsIGV2ZW50PzogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgbm9kZS5pc1NlbGVjdGVkID0gZmFsc2U7XHJcbiAgICBub2RlLmlzQ2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgaWYgKHRoaXMubnpDaGVja2FibGUpIHtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNvbmR1Y3Qobm9kZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2Uuc2V0U2VsZWN0ZWROb2RlTGlzdChub2RlLCB0aGlzLm56TXVsdGlwbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlbWl0KSB7XHJcbiAgICAgIHRoaXMubnpSZW1vdmVkLmVtaXQobm9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRG8gbm90IHRyaWdnZXIgdGhlIHBvcHVwXHJcbiAgICBpZiAoZXZlbnQgJiYgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKSB7XHJcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9jdXNPbklucHV0KCk6IHZvaWQge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmlucHV0RWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdWJzY3JpYmVTZWxlY3Rpb25DaGFuZ2UoKTogU3Vic2NyaXB0aW9uIHtcclxuICAgIHJldHVybiBtZXJnZShcclxuICAgICAgdGhpcy5uelRyZWVDbGljay5waXBlKFxyXG4gICAgICAgIHRhcCgoZXZlbnQ6IE56Rm9ybWF0RW1pdEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBub2RlID0gZXZlbnQubm9kZSE7XHJcbiAgICAgICAgICBpZiAodGhpcy5uekNoZWNrYWJsZSAmJiAhbm9kZS5pc0Rpc2FibGVkICYmICFub2RlLmlzRGlzYWJsZUNoZWNrYm94KSB7XHJcbiAgICAgICAgICAgIG5vZGUuaXNDaGVja2VkID0gIW5vZGUuaXNDaGVja2VkO1xyXG4gICAgICAgICAgICBub2RlLmlzSGFsZkNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLm56Q2hlY2tTdHJpY3RseSkge1xyXG4gICAgICAgICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jb25kdWN0KG5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAodGhpcy5uekNoZWNrYWJsZSkge1xyXG4gICAgICAgICAgICBub2RlLmlzU2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgICBmaWx0ZXIoKGV2ZW50OiBOekZvcm1hdEVtaXRFdmVudCkgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgbm9kZSA9IGV2ZW50Lm5vZGUhO1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMubnpDaGVja2FibGUgPyAhbm9kZS5pc0Rpc2FibGVkICYmICFub2RlLmlzRGlzYWJsZUNoZWNrYm94IDogIW5vZGUuaXNEaXNhYmxlZCAmJiBub2RlLmlzU2VsZWN0YWJsZTtcclxuICAgICAgICB9KVxyXG4gICAgICApLFxyXG4gICAgICB0aGlzLm56Q2hlY2thYmxlID8gdGhpcy5uelRyZWVDaGVja0JveENoYW5nZSA6IG9ic2VydmFibGVPZigpLFxyXG4gICAgICB0aGlzLm56Q2xlYXJlZCxcclxuICAgICAgdGhpcy5uelJlbW92ZWRcclxuICAgICkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy51cGRhdGVTZWxlY3RlZE5vZGVzKCk7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zZWxlY3RlZE5vZGVzLm1hcChub2RlID0+IG5vZGUua2V5ISk7XHJcbiAgICAgIHRoaXMudmFsdWUgPSBbLi4udmFsdWVdO1xyXG4gICAgICBpZiAodGhpcy5uelNob3dTZWFyY2ggfHwgdGhpcy5pc011bHRpcGxlKSB7XHJcbiAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gJyc7XHJcbiAgICAgICAgdGhpcy5pc05vdEZvdW5kID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuaXNNdWx0aXBsZSkge1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xyXG4gICAgICAgIHRoaXMuZm9jdXNPbklucHV0KCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY2xvc2VEcm9wRG93bigpO1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUubGVuZ3RoID8gdmFsdWVbMF0gOiBudWxsKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVTZWxlY3RlZE5vZGVzKGluaXQ6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgaWYgKGluaXQpIHtcclxuICAgICAgY29uc3Qgbm9kZXMgPSB0aGlzLmNvZXJjZVRyZWVOb2Rlcyh0aGlzLm56Tm9kZXMpO1xyXG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2UuaXNNdWx0aXBsZSA9IHRoaXMuaXNNdWx0aXBsZTtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmlzQ2hlY2tTdHJpY3RseSA9IHRoaXMubnpDaGVja1N0cmljdGx5O1xyXG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2UuaW5pdFRyZWUobm9kZXMpO1xyXG4gICAgICBpZiAodGhpcy5uekNoZWNrYWJsZSkge1xyXG4gICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jYWxjQ2hlY2tlZEtleXModGhpcy52YWx1ZSwgbm9kZXMsIHRoaXMubnpDaGVja1N0cmljdGx5KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UuY2FsY1NlbGVjdGVkS2V5cyh0aGlzLnZhbHVlLCBub2RlcywgdGhpcy5pc011bHRpcGxlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2VsZWN0ZWROb2RlcyA9IFsuLi4odGhpcy5uekNoZWNrYWJsZSA/IHRoaXMuZ2V0Q2hlY2tlZE5vZGVMaXN0KCkgOiB0aGlzLmdldFNlbGVjdGVkTm9kZUxpc3QoKSldO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUG9zaXRpb24oKTogdm9pZCB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheSAmJiB0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkub3ZlcmxheVJlZikge1xyXG4gICAgICAgIHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheS5vdmVybGF5UmVmLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25Qb3NpdGlvbkNoYW5nZShwb3NpdGlvbjogQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlKTogdm9pZCB7XHJcbiAgICB0aGlzLmRyb3BEb3duUG9zaXRpb24gPSBwb3NpdGlvbi5jb25uZWN0aW9uUGFpci5vcmlnaW5ZO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlSW5wdXRXaWR0aCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzTXVsdGlwbGUgJiYgdGhpcy5pbnB1dEVsZW1lbnQpIHtcclxuICAgICAgaWYgKHRoaXMuaW5wdXRWYWx1ZSB8fCB0aGlzLmlzQ29tcG9zaW5nKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCBgJHt0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbFdpZHRofXB4YCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnd2lkdGgnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DbGVhclNlbGVjdGlvbigkZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5zZWxlY3RlZE5vZGVzLmZvckVhY2gobm9kZSA9PiB7XHJcbiAgICAgIHRoaXMucmVtb3ZlU2VsZWN0ZWQobm9kZSwgZmFsc2UpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLm56Q2xlYXJlZC5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBzZXRTZWFyY2hWYWx1ZXMoJGV2ZW50OiBOekZvcm1hdEVtaXRFdmVudCk6IHZvaWQge1xyXG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgIHRoaXMuaXNOb3RGb3VuZCA9ICh0aGlzLm56U2hvd1NlYXJjaCB8fCB0aGlzLmlzTXVsdGlwbGUpICYmICEhdGhpcy5pbnB1dFZhbHVlICYmICRldmVudC5tYXRjaGVkS2V5cyEubGVuZ3RoID09PSAwO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDZGtDb25uZWN0ZWRPdmVybGF5U3RhdHVzKCk6IHZvaWQge1xyXG4gICAgdGhpcy50cmlnZ2VyV2lkdGggPSB0aGlzLmNka092ZXJsYXlPcmlnaW4uZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG4gIH1cclxuXHJcbiAgdHJhY2tWYWx1ZShfaW5kZXg6IG51bWJlciwgb3B0aW9uOiBOelRyZWVOb2RlKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBvcHRpb24ua2V5ITtcclxuICB9XHJcbn1cclxuIiwiPG5nLXRlbXBsYXRlICNpbnB1dFRlbXBsYXRlPlxyXG4gIDxpbnB1dFxyXG4gICAgI2lucHV0RWxlbWVudFxyXG4gICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcclxuICAgIGNsYXNzPVwiYW50LXNlbGVjdC1zZWFyY2hfX2ZpZWxkXCJcclxuICAgIChjb21wb3NpdGlvbnN0YXJ0KT1cImlzQ29tcG9zaW5nID0gdHJ1ZVwiXHJcbiAgICAoY29tcG9zaXRpb25lbmQpPVwiaXNDb21wb3NpbmcgPSBmYWxzZVwiXHJcbiAgICAoa2V5ZG93bik9XCJvbktleURvd25JbnB1dCgkZXZlbnQpXCJcclxuICAgIFtuZ01vZGVsXT1cImlucHV0VmFsdWVcIlxyXG4gICAgKG5nTW9kZWxDaGFuZ2UpPVwic2V0SW5wdXRWYWx1ZSgkZXZlbnQpXCJcclxuICAgIFtkaXNhYmxlZF09XCJuekRpc2FibGVkXCJcclxuICAvPlxyXG48L25nLXRlbXBsYXRlPlxyXG5cclxuPG5nLXRlbXBsYXRlXHJcbiAgY2RrQ29ubmVjdGVkT3ZlcmxheVxyXG4gIG56Q29ubmVjdGVkT3ZlcmxheVxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5T3JpZ2luXT1cImNka092ZXJsYXlPcmlnaW5cIlxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5T3Blbl09XCJuek9wZW5cIlxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5SGFzQmFja2Ryb3BdPVwidHJ1ZVwiXHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlNaW5XaWR0aF09XCJuekRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aCA/IG51bGwgOiB0cmlnZ2VyV2lkdGhcIlxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5V2lkdGhdPVwibnpEcm9wZG93bk1hdGNoU2VsZWN0V2lkdGggPyB0cmlnZ2VyV2lkdGggOiBudWxsXCJcclxuICAoYmFja2Ryb3BDbGljayk9XCJjbG9zZURyb3BEb3duKClcIlxyXG4gIChkZXRhY2gpPVwiY2xvc2VEcm9wRG93bigpXCJcclxuICAocG9zaXRpb25DaGFuZ2UpPVwib25Qb3NpdGlvbkNoYW5nZSgkZXZlbnQpXCJcclxuPlxyXG4gIDxkaXZcclxuICAgIGNsYXNzPVwiYW50LXNlbGVjdC1kcm9wZG93biBhbnQtc2VsZWN0LXRyZWUtZHJvcGRvd25cIlxyXG4gICAgW0BzbGlkZU1vdGlvbl09XCJuek9wZW4gPyBkcm9wRG93blBvc2l0aW9uIDogJ3ZvaWQnXCJcclxuICAgIFtALmRpc2FibGVkXT1cIm5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCJcclxuICAgIFtuek5vQW5pbWF0aW9uXT1cIm5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCJcclxuICAgIFtjbGFzcy5hbnQtc2VsZWN0LWRyb3Bkb3duLS1zaW5nbGVdPVwiIW56TXVsdGlwbGVcIlxyXG4gICAgW2NsYXNzLmFudC1zZWxlY3QtZHJvcGRvd24tLW11bHRpcGxlXT1cIm56TXVsdGlwbGVcIlxyXG4gICAgW2NsYXNzLmFudC1zZWxlY3QtZHJvcGRvd24tcGxhY2VtZW50LWJvdHRvbUxlZnRdPVwiZHJvcERvd25Qb3NpdGlvbiA9PT0gJ2JvdHRvbSdcIlxyXG4gICAgW2NsYXNzLmFudC1zZWxlY3QtZHJvcGRvd24tcGxhY2VtZW50LXRvcExlZnRdPVwiZHJvcERvd25Qb3NpdGlvbiA9PT0gJ3RvcCdcIlxyXG4gICAgW25nU3R5bGVdPVwibnpEcm9wZG93blN0eWxlXCJcclxuICA+XHJcbiAgICA8bnotdHJlZVxyXG4gICAgICAjdHJlZVJlZlxyXG4gICAgICBbaGlkZGVuXT1cImlzTm90Rm91bmRcIlxyXG4gICAgICBuek5vQW5pbWF0aW9uXHJcbiAgICAgIG56U2VsZWN0TW9kZVxyXG4gICAgICBbbnpEYXRhXT1cIm56Tm9kZXNcIlxyXG4gICAgICBbbnpNdWx0aXBsZV09XCJuek11bHRpcGxlXCJcclxuICAgICAgW256U2VhcmNoVmFsdWVdPVwiaW5wdXRWYWx1ZVwiXHJcbiAgICAgIFtuekhpZGVVbk1hdGNoZWRdPVwibnpIaWRlVW5NYXRjaGVkXCJcclxuICAgICAgW256U2hvd0ljb25dPVwibnpTaG93SWNvblwiXHJcbiAgICAgIFtuekNoZWNrYWJsZV09XCJuekNoZWNrYWJsZVwiXHJcbiAgICAgIFtuekFzeW5jRGF0YV09XCJuekFzeW5jRGF0YVwiXHJcbiAgICAgIFtuelNob3dFeHBhbmRdPVwibnpTaG93RXhwYW5kXCJcclxuICAgICAgW256U2hvd0xpbmVdPVwibnpTaG93TGluZVwiXHJcbiAgICAgIFtuekV4cGFuZGVkSWNvbl09XCJuekV4cGFuZGVkSWNvblwiXHJcbiAgICAgIFtuekV4cGFuZEFsbF09XCJuekRlZmF1bHRFeHBhbmRBbGxcIlxyXG4gICAgICBbbnpFeHBhbmRlZEtleXNdPVwiZXhwYW5kZWRLZXlzXCJcclxuICAgICAgW256Q2hlY2tlZEtleXNdPVwibnpDaGVja2FibGUgPyB2YWx1ZSA6IFtdXCJcclxuICAgICAgW256U2VsZWN0ZWRLZXlzXT1cIiFuekNoZWNrYWJsZSA/IHZhbHVlIDogW11cIlxyXG4gICAgICBbbnpUcmVlVGVtcGxhdGVdPVwidHJlZVRlbXBsYXRlXCJcclxuICAgICAgW256Q2hlY2tTdHJpY3RseV09XCJuekNoZWNrU3RyaWN0bHlcIlxyXG4gICAgICAobnpFeHBhbmRDaGFuZ2UpPVwib25FeHBhbmRlZEtleXNDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgIChuekNsaWNrKT1cIm56VHJlZUNsaWNrLmVtaXQoJGV2ZW50KVwiXHJcbiAgICAgIChuekNoZWNrZWRLZXlzQ2hhbmdlKT1cInVwZGF0ZVNlbGVjdGVkTm9kZXMoKVwiXHJcbiAgICAgIChuelNlbGVjdGVkS2V5c0NoYW5nZSk9XCJ1cGRhdGVTZWxlY3RlZE5vZGVzKClcIlxyXG4gICAgICAobnpDaGVja0JveENoYW5nZSk9XCJuelRyZWVDaGVja0JveENoYW5nZS5lbWl0KCRldmVudClcIlxyXG4gICAgICAobnpTZWFyY2hWYWx1ZUNoYW5nZSk9XCJzZXRTZWFyY2hWYWx1ZXMoJGV2ZW50KVwiXHJcbiAgICA+XHJcbiAgICA8L256LXRyZWU+XHJcbiAgICA8c3BhbiAqbmdJZj1cIm56Tm9kZXMubGVuZ3RoID09PSAwIHx8IGlzTm90Rm91bmRcIiBjbGFzcz1cImFudC1zZWxlY3Qtbm90LWZvdW5kXCI+XHJcbiAgICAgIDxuei1lbWJlZC1lbXB0eVxyXG4gICAgICAgIFtuekNvbXBvbmVudE5hbWVdPVwiJ3RyZWUtc2VsZWN0J1wiXHJcbiAgICAgICAgW3NwZWNpZmljQ29udGVudF09XCJuek5vdEZvdW5kQ29udGVudFwiXHJcbiAgICAgID48L256LWVtYmVkLWVtcHR5PlxyXG4gICAgPC9zcGFuPlxyXG4gIDwvZGl2PlxyXG48L25nLXRlbXBsYXRlPlxyXG5cclxuPGRpdlxyXG4gIGNka092ZXJsYXlPcmlnaW5cclxuICBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uXCJcclxuICBbY2xhc3MuYW50LXNlbGVjdC1zZWxlY3Rpb24tLXNpbmdsZV09XCIhaXNNdWx0aXBsZVwiXHJcbiAgW2NsYXNzLmFudC1zZWxlY3Qtc2VsZWN0aW9uLS1tdWx0aXBsZV09XCJpc011bHRpcGxlXCJcclxuICB0YWJpbmRleD1cIjBcIlxyXG4+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpc011bHRpcGxlXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3Rpb25fX3JlbmRlcmVkXCI+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICAqbmdJZj1cIm56UGxhY2VIb2xkZXIgJiYgc2VsZWN0ZWROb2Rlcy5sZW5ndGggPT09IDBcIlxyXG4gICAgICAgIFtzdHlsZS5kaXNwbGF5XT1cInBsYWNlSG9sZGVyRGlzcGxheVwiXHJcbiAgICAgICAgY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGlvbl9fcGxhY2Vob2xkZXJcIlxyXG4gICAgICA+XHJcbiAgICAgICAge3sgbnpQbGFjZUhvbGRlciB9fVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXZcclxuICAgICAgICAqbmdJZj1cInNlbGVjdGVkTm9kZXMubGVuZ3RoID09PSAxXCJcclxuICAgICAgICBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uLXNlbGVjdGVkLXZhbHVlXCJcclxuICAgICAgICBbYXR0ci50aXRsZV09XCJuekRpc3BsYXlXaXRoKHNlbGVjdGVkTm9kZXNbMF0pXCJcclxuICAgICAgICBbbmdTdHlsZV09XCJzZWxlY3RlZFZhbHVlRGlzcGxheVwiXHJcbiAgICAgID5cclxuICAgICAgICB7eyBuekRpc3BsYXlXaXRoKHNlbGVjdGVkTm9kZXNbMF0pIH19XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdlxyXG4gICAgICAgICpuZ0lmPVwibnpTaG93U2VhcmNoXCJcclxuICAgICAgICBbc3R5bGUuZGlzcGxheV09XCJzZWFyY2hEaXNwbGF5XCJcclxuICAgICAgICBjbGFzcz1cImFudC1zZWxlY3Qtc2VhcmNoIGFudC1zZWxlY3Qtc2VhcmNoLS1pbmxpbmVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImFudC1zZWxlY3Qtc2VhcmNoX19maWVsZF9fd3JhcFwiPlxyXG4gICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImlucHV0VGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtc2VsZWN0LXNlYXJjaF9fZmllbGRfX21pcnJvclwiPnt7IGlucHV0VmFsdWUgfX0mbmJzcDs8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzTXVsdGlwbGVcIj5cclxuICAgIDx1bCBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uX19yZW5kZXJlZFwiPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgKm5nSWY9XCJuelBsYWNlSG9sZGVyICYmIHNlbGVjdGVkTm9kZXMubGVuZ3RoID09PSAwXCJcclxuICAgICAgICBbc3R5bGUuZGlzcGxheV09XCJwbGFjZUhvbGRlckRpc3BsYXlcIlxyXG4gICAgICAgIGNsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3Rpb25fX3BsYWNlaG9sZGVyXCJcclxuICAgICAgPlxyXG4gICAgICAgIHt7IG56UGxhY2VIb2xkZXIgfX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxuZy1jb250YWluZXJcclxuICAgICAgICAqbmdGb3I9XCJsZXQgbm9kZSBvZiBzZWxlY3RlZE5vZGVzIHwgc2xpY2U6IDA6bnpNYXhUYWdDb3VudDsgdHJhY2tCeTogdHJhY2tWYWx1ZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8bGlcclxuICAgICAgICAgIFtAem9vbU1vdGlvbl1cclxuICAgICAgICAgIFtALmRpc2FibGVkXT1cIm5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCJcclxuICAgICAgICAgIFtuek5vQW5pbWF0aW9uXT1cIm5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCJcclxuICAgICAgICAgIFthdHRyLnRpdGxlXT1cIm56RGlzcGxheVdpdGgobm9kZSlcIlxyXG4gICAgICAgICAgW2NsYXNzLmFudC1zZWxlY3Qtc2VsZWN0aW9uX19jaG9pY2VfX2Rpc2FibGVkXT1cIm5vZGUuaXNEaXNhYmxlZFwiXHJcbiAgICAgICAgICBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uX19jaG9pY2VcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICpuZ0lmPVwiIW5vZGUuaXNEaXNhYmxlZFwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3Rpb25fX2Nob2ljZV9fcmVtb3ZlXCJcclxuICAgICAgICAgICAgKG1vdXNlZG93bik9XCIkZXZlbnQucHJldmVudERlZmF1bHQoKVwiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJyZW1vdmVTZWxlY3RlZChub2RlLCB0cnVlLCAkZXZlbnQpXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGkgbnotaWNvbiBuelR5cGU9XCJjbG9zZVwiIGNsYXNzPVwiYW50LXNlbGVjdC1yZW1vdmUtaWNvblwiPjwvaT5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3Rpb25fX2Nob2ljZV9fY29udGVudFwiPnt7IG56RGlzcGxheVdpdGgobm9kZSkgfX08L3NwYW4+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDxsaVxyXG4gICAgICAgIFtAem9vbU1vdGlvbl1cclxuICAgICAgICAqbmdJZj1cInNlbGVjdGVkTm9kZXMubGVuZ3RoID4gbnpNYXhUYWdDb3VudFwiXHJcbiAgICAgICAgY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGlvbl9fY2hvaWNlXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGlvbl9fY2hvaWNlX19jb250ZW50XCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibnpNYXhUYWdQbGFjZWhvbGRlclwiPlxyXG4gICAgICAgICAgICA8bmctdGVtcGxhdGVcclxuICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJuek1heFRhZ1BsYWNlaG9sZGVyXCJcclxuICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IHNlbGVjdGVkTm9kZXMgfCBzbGljZTogbnpNYXhUYWdDb3VudCB9XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIW56TWF4VGFnUGxhY2Vob2xkZXJcIj5cclxuICAgICAgICAgICAgKyB7eyBzZWxlY3RlZE5vZGVzLmxlbmd0aCAtIG56TWF4VGFnQ291bnQgfX0gLi4uXHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9saT5cclxuICAgICAgPGxpIGNsYXNzPVwiYW50LXNlbGVjdC1zZWFyY2ggYW50LXNlbGVjdC1zZWFyY2gtLWlubGluZVwiPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJpbnB1dFRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbiAgPHNwYW5cclxuICAgICpuZ0lmPVwibnpBbGxvd0NsZWFyXCJcclxuICAgIGNsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3Rpb25fX2NsZWFyXCJcclxuICAgIChtb3VzZWRvd24pPVwiJGV2ZW50LnByZXZlbnREZWZhdWx0KClcIlxyXG4gICAgKGNsaWNrKT1cIm9uQ2xlYXJTZWxlY3Rpb24oJGV2ZW50KVwiXHJcbiAgPlxyXG4gICAgPGkgbnotaWNvbiBuelR5cGU9XCJjbG9zZS1jaXJjbGVcIiBjbGFzcz1cImFudC1zZWxlY3QtY2xlYXItaWNvblwiIG56VGhlbWU9XCJmaWxsXCI+PC9pPlxyXG4gIDwvc3Bhbj5cclxuICA8c3BhbiAqbmdJZj1cIiFpc011bHRpcGxlXCIgY2xhc3M9XCJhbnQtc2VsZWN0LWFycm93XCI+XHJcbiAgICA8aSBuei1pY29uIG56VHlwZT1cImRvd25cIiBjbGFzcz1cImFudC1zZWxlY3QtYXJyb3ctaWNvblwiPjwvaT5cclxuICA8L3NwYW4+XHJcbjwvZGl2PlxyXG4iXX0=