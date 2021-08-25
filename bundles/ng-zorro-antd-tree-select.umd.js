(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('ng-zorro-antd/core'),require('@angular/cdk/overlay'),require('@angular/common'),require('@angular/forms'),require('ng-zorro-antd/tree'),require('ng-zorro-antd/empty'),require('ng-zorro-antd/icon'),exports, require('@angular/cdk/keycodes'), require('@angular/cdk/overlay'), require('@angular/core'), require('@angular/forms'), require('rxjs'), require('rxjs/operators'), require('ng-zorro-antd/core'), require('ng-zorro-antd/tree'), require('@angular/common'), require('ng-zorro-antd/empty'), require('ng-zorro-antd/icon')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/tree-select', ['@angular/core','ng-zorro-antd/core','@angular/cdk/overlay','@angular/common','@angular/forms','ng-zorro-antd/tree','ng-zorro-antd/empty','ng-zorro-antd/icon','exports', '@angular/cdk/keycodes', '@angular/cdk/overlay', '@angular/core', '@angular/forms', 'rxjs', 'rxjs/operators', 'ng-zorro-antd/core', 'ng-zorro-antd/tree', '@angular/common', 'ng-zorro-antd/empty', 'ng-zorro-antd/icon'], factory) :
    (global = global || self, factory(global.ng.core,global.ngZorroAntd.core,global.ng.cdk.overlay,global.ng.common,global.ng.forms,global.ngZorroAntd.tree,global.ngZorroAntd.empty,global.ngZorroAntd.icon,(global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd']['tree-select'] = {}), global.ng.cdk.keycodes, global.ng.cdk.overlay, global.ng.core, global.ng.forms, global.rxjs, global.rxjs.operators, global['ng-zorro-antd'].core, global['ng-zorro-antd'].tree, global.ng.common, global['ng-zorro-antd'].empty, global['ng-zorro-antd'].icon));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,ɵngcc4,ɵngcc5,ɵngcc6,ɵngcc7,exports, keycodes, overlay, core, forms, rxjs, operators, core$1, tree, common, empty, icon) { 
var _c0 = ["nzTreeTemplate"];
var _c1 = ["inputElement"];
var _c2 = ["treeRef"];
function NzTreeSelectComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    var _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "input", 6, 7);
    ɵngcc0.ɵɵlistener("compositionstart", function NzTreeSelectComponent_ng_template_0_Template_input_compositionstart_0_listener() { ɵngcc0.ɵɵrestoreView(_r9); var ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.isComposing = true; })("compositionend", function NzTreeSelectComponent_ng_template_0_Template_input_compositionend_0_listener() { ɵngcc0.ɵɵrestoreView(_r9); var ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.isComposing = false; })("keydown", function NzTreeSelectComponent_ng_template_0_Template_input_keydown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); var ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.onKeyDownInput($event); })("ngModelChange", function NzTreeSelectComponent_ng_template_0_Template_input_ngModelChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); var ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.setInputValue($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngModel", ctx_r1.inputValue)("disabled", ctx_r1.nzDisabled);
} }
function NzTreeSelectComponent_ng_template_2_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 12);
    ɵngcc0.ɵɵelement(1, "nz-embed-empty", 13);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r14 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzComponentName", "tree-select")("specificContent", ctx_r14.nzNotFoundContent);
} }
var _c3 = function () { return []; };
function NzTreeSelectComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    var _r16 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 8);
    ɵngcc0.ɵɵelementStart(1, "nz-tree", 9, 10);
    ɵngcc0.ɵɵlistener("nzExpandChange", function NzTreeSelectComponent_ng_template_2_Template_nz_tree_nzExpandChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r16); var ctx_r15 = ɵngcc0.ɵɵnextContext(); return ctx_r15.onExpandedKeysChange($event); })("nzClick", function NzTreeSelectComponent_ng_template_2_Template_nz_tree_nzClick_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r16); var ctx_r17 = ɵngcc0.ɵɵnextContext(); return ctx_r17.nzTreeClick.emit($event); })("nzCheckedKeysChange", function NzTreeSelectComponent_ng_template_2_Template_nz_tree_nzCheckedKeysChange_1_listener() { ɵngcc0.ɵɵrestoreView(_r16); var ctx_r18 = ɵngcc0.ɵɵnextContext(); return ctx_r18.updateSelectedNodes(); })("nzSelectedKeysChange", function NzTreeSelectComponent_ng_template_2_Template_nz_tree_nzSelectedKeysChange_1_listener() { ɵngcc0.ɵɵrestoreView(_r16); var ctx_r19 = ɵngcc0.ɵɵnextContext(); return ctx_r19.updateSelectedNodes(); })("nzCheckBoxChange", function NzTreeSelectComponent_ng_template_2_Template_nz_tree_nzCheckBoxChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r16); var ctx_r20 = ɵngcc0.ɵɵnextContext(); return ctx_r20.nzTreeCheckBoxChange.emit($event); })("nzSearchValueChange", function NzTreeSelectComponent_ng_template_2_Template_nz_tree_nzSearchValueChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r16); var ctx_r21 = ɵngcc0.ɵɵnextContext(); return ctx_r21.setSearchValues($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(3, NzTreeSelectComponent_ng_template_2_span_3_Template, 2, 2, "span", 11);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("ant-select-dropdown--single", !ctx_r2.nzMultiple)("ant-select-dropdown--multiple", ctx_r2.nzMultiple)("ant-select-dropdown-placement-bottomLeft", ctx_r2.dropDownPosition === "bottom")("ant-select-dropdown-placement-topLeft", ctx_r2.dropDownPosition === "top");
    ɵngcc0.ɵɵproperty("@slideMotion", ctx_r2.nzOpen ? ctx_r2.dropDownPosition : "void")("@.disabled", ctx_r2.noAnimation == null ? null : ctx_r2.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r2.noAnimation == null ? null : ctx_r2.noAnimation.nzNoAnimation)("ngStyle", ctx_r2.nzDropdownStyle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("hidden", ctx_r2.isNotFound)("nzData", ctx_r2.nzNodes)("nzMultiple", ctx_r2.nzMultiple)("nzSearchValue", ctx_r2.inputValue)("nzHideUnMatched", ctx_r2.nzHideUnMatched)("nzShowIcon", ctx_r2.nzShowIcon)("nzCheckable", ctx_r2.nzCheckable)("nzAsyncData", ctx_r2.nzAsyncData)("nzShowExpand", ctx_r2.nzShowExpand)("nzShowLine", ctx_r2.nzShowLine)("nzExpandedIcon", ctx_r2.nzExpandedIcon)("nzExpandAll", ctx_r2.nzDefaultExpandAll)("nzExpandedKeys", ctx_r2.expandedKeys)("nzCheckedKeys", ctx_r2.nzCheckable ? ctx_r2.value : ɵngcc0.ɵɵpureFunction0(30, _c3))("nzSelectedKeys", !ctx_r2.nzCheckable ? ctx_r2.value : ɵngcc0.ɵɵpureFunction0(31, _c3))("nzTreeTemplate", ctx_r2.treeTemplate)("nzCheckStrictly", ctx_r2.nzCheckStrictly);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.nzNodes.length === 0 || ctx_r2.isNotFound);
} }
function NzTreeSelectComponent_ng_container_4_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 18);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r22 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵstyleProp("display", ctx_r22.placeHolderDisplay);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r22.nzPlaceHolder, " ");
} }
function NzTreeSelectComponent_ng_container_4_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 19);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r23 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r23.selectedValueDisplay);
    ɵngcc0.ɵɵattribute("title", ctx_r23.nzDisplayWith(ctx_r23.selectedNodes[0]));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r23.nzDisplayWith(ctx_r23.selectedNodes[0]), " ");
} }
function NzTreeSelectComponent_ng_container_4_div_4_ng_template_2_Template(rf, ctx) { }
function NzTreeSelectComponent_ng_container_4_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 20);
    ɵngcc0.ɵɵelementStart(1, "div", 21);
    ɵngcc0.ɵɵtemplate(2, NzTreeSelectComponent_ng_container_4_div_4_ng_template_2_Template, 0, 0, "ng-template", 22);
    ɵngcc0.ɵɵelementStart(3, "span", 23);
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r24 = ɵngcc0.ɵɵnextContext(2);
    var _r0 = ɵngcc0.ɵɵreference(1);
    ɵngcc0.ɵɵstyleProp("display", ctx_r24.searchDisplay);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r0);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1("", ctx_r24.inputValue, "\u00A0");
} }
function NzTreeSelectComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "div", 14);
    ɵngcc0.ɵɵtemplate(2, NzTreeSelectComponent_ng_container_4_div_2_Template, 2, 3, "div", 15);
    ɵngcc0.ɵɵtemplate(3, NzTreeSelectComponent_ng_container_4_div_3_Template, 2, 3, "div", 16);
    ɵngcc0.ɵɵtemplate(4, NzTreeSelectComponent_ng_container_4_div_4_Template, 5, 4, "div", 17);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.nzPlaceHolder && ctx_r3.selectedNodes.length === 0);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.selectedNodes.length === 1);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.nzShowSearch);
} }
function NzTreeSelectComponent_ng_container_5_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 18);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r26 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵstyleProp("display", ctx_r26.placeHolderDisplay);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r26.nzPlaceHolder, " ");
} }
function NzTreeSelectComponent_ng_container_5_ng_container_3_span_2_Template(rf, ctx) { if (rf & 1) {
    var _r33 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 29);
    ɵngcc0.ɵɵlistener("mousedown", function NzTreeSelectComponent_ng_container_5_ng_container_3_span_2_Template_span_mousedown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r33); return $event.preventDefault(); })("click", function NzTreeSelectComponent_ng_container_5_ng_container_3_span_2_Template_span_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r33); var node_r30 = ɵngcc0.ɵɵnextContext().$implicit; var ctx_r34 = ɵngcc0.ɵɵnextContext(2); return ctx_r34.removeSelected(node_r30, true, $event); });
    ɵngcc0.ɵɵelement(1, "i", 30);
    ɵngcc0.ɵɵelementEnd();
} }
function NzTreeSelectComponent_ng_container_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "li", 26);
    ɵngcc0.ɵɵtemplate(2, NzTreeSelectComponent_ng_container_5_ng_container_3_span_2_Template, 2, 0, "span", 27);
    ɵngcc0.ɵɵelementStart(3, "span", 28);
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var node_r30 = ctx.$implicit;
    var ctx_r27 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("ant-select-selection__choice__disabled", node_r30.isDisabled);
    ɵngcc0.ɵɵproperty("@zoomMotion", undefined)("@.disabled", ctx_r27.noAnimation == null ? null : ctx_r27.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r27.noAnimation == null ? null : ctx_r27.noAnimation.nzNoAnimation);
    ɵngcc0.ɵɵattribute("title", ctx_r27.nzDisplayWith(node_r30));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !node_r30.isDisabled);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r27.nzDisplayWith(node_r30));
} }
function NzTreeSelectComponent_ng_container_5_li_5_ng_container_2_ng_template_1_Template(rf, ctx) { }
var _c4 = function (a0) { return { $implicit: a0 }; };
function NzTreeSelectComponent_ng_container_5_li_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzTreeSelectComponent_ng_container_5_li_5_ng_container_2_ng_template_1_Template, 0, 0, "ng-template", 32);
    ɵngcc0.ɵɵpipe(2, "slice");
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r36 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r36.nzMaxTagPlaceholder)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(5, _c4, ɵngcc0.ɵɵpipeBind2(2, 2, ctx_r36.selectedNodes, ctx_r36.nzMaxTagCount)));
} }
function NzTreeSelectComponent_ng_container_5_li_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r37 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" + ", ctx_r37.selectedNodes.length - ctx_r37.nzMaxTagCount, " ... ");
} }
function NzTreeSelectComponent_ng_container_5_li_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 31);
    ɵngcc0.ɵɵelementStart(1, "div", 28);
    ɵngcc0.ɵɵtemplate(2, NzTreeSelectComponent_ng_container_5_li_5_ng_container_2_Template, 3, 7, "ng-container", 3);
    ɵngcc0.ɵɵtemplate(3, NzTreeSelectComponent_ng_container_5_li_5_ng_container_3_Template, 2, 1, "ng-container", 3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r28 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("@zoomMotion", undefined);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r28.nzMaxTagPlaceholder);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r28.nzMaxTagPlaceholder);
} }
function NzTreeSelectComponent_ng_container_5_ng_template_7_Template(rf, ctx) { }
function NzTreeSelectComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "ul", 14);
    ɵngcc0.ɵɵtemplate(2, NzTreeSelectComponent_ng_container_5_div_2_Template, 2, 3, "div", 15);
    ɵngcc0.ɵɵtemplate(3, NzTreeSelectComponent_ng_container_5_ng_container_3_Template, 5, 8, "ng-container", 24);
    ɵngcc0.ɵɵpipe(4, "slice");
    ɵngcc0.ɵɵtemplate(5, NzTreeSelectComponent_ng_container_5_li_5_Template, 4, 3, "li", 25);
    ɵngcc0.ɵɵelementStart(6, "li", 20);
    ɵngcc0.ɵɵtemplate(7, NzTreeSelectComponent_ng_container_5_ng_template_7_Template, 0, 0, "ng-template", 22);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext();
    var _r0 = ɵngcc0.ɵɵreference(1);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.nzPlaceHolder && ctx_r4.selectedNodes.length === 0);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ɵngcc0.ɵɵpipeBind3(4, 5, ctx_r4.selectedNodes, 0, ctx_r4.nzMaxTagCount))("ngForTrackBy", ctx_r4.trackValue);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.selectedNodes.length > ctx_r4.nzMaxTagCount);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
function NzTreeSelectComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    var _r40 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 33);
    ɵngcc0.ɵɵlistener("mousedown", function NzTreeSelectComponent_span_6_Template_span_mousedown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r40); return $event.preventDefault(); })("click", function NzTreeSelectComponent_span_6_Template_span_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r40); var ctx_r41 = ɵngcc0.ɵɵnextContext(); return ctx_r41.onClearSelection($event); });
    ɵngcc0.ɵɵelement(1, "i", 34);
    ɵngcc0.ɵɵelementEnd();
} }
function NzTreeSelectComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 35);
    ɵngcc0.ɵɵelement(1, "i", 36);
    ɵngcc0.ɵɵelementEnd();
} }
'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzTreeSelectService = /** @class */ (function (_super) {
        __extends(NzTreeSelectService, _super);
        function NzTreeSelectService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
NzTreeSelectService.ɵfac = function NzTreeSelectService_Factory(t) { return ɵNzTreeSelectService_BaseFactory(t || NzTreeSelectService); };
NzTreeSelectService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: NzTreeSelectService, factory: function (t) { return NzTreeSelectService.ɵfac(t); } });
var ɵNzTreeSelectService_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(NzTreeSelectService);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTreeSelectService, [{
        type: core.Injectable
    }], null, null); })();
        return NzTreeSelectService;
    }(core$1.NzTreeBaseService));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} injector
     * @return {?}
     */
    function higherOrderServiceFactory(injector) {
        return injector.get(NzTreeSelectService);
    }
    /** @type {?} */
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
            _this.nzDisplayWith = (/**
             * @param {?} node
             * @return {?}
             */
            function (node) { return node.title; });
            _this.nzOpenChange = new core.EventEmitter();
            _this.nzCleared = new core.EventEmitter();
            _this.nzRemoved = new core.EventEmitter();
            _this.nzExpandChange = new core.EventEmitter();
            _this.nzTreeClick = new core.EventEmitter();
            _this.nzTreeCheckBoxChange = new core.EventEmitter();
            _this.isComposing = false;
            _this.isDestroy = true;
            _this.isNotFound = false;
            _this.inputValue = '';
            _this.dropDownPosition = 'bottom';
            _this.selectedNodes = [];
            _this.expandedKeys = [];
            _this.value = [];
            _this.onTouched = (/**
             * @return {?}
             */
            function () { return null; });
            _this.renderer.addClass(_this.elementRef.nativeElement, 'ant-select');
            return _this;
        }
        Object.defineProperty(NzTreeSelectComponent.prototype, "nzDefaultExpandedKeys", {
            get: /**
             * @return {?}
             */
            function () {
                return this.expandedKeys;
            },
            /**
             * @deprecated 9.0.0 - use `nzExpandedKeys` instead.
             */
            set: /**
             * @deprecated 9.0.0 - use `nzExpandedKeys` instead.
             * @param {?} value
             * @return {?}
             */
            function (value) {
                core$1.warnDeprecation("'nzDefaultExpandedKeys' would be removed in 9.0.0. Please use 'nzExpandedKeys' instead.");
                this.expandedKeys = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeSelectComponent.prototype, "nzExpandedKeys", {
            get: /**
             * @return {?}
             */
            function () {
                return this.expandedKeys;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.expandedKeys = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeSelectComponent.prototype, "treeTemplate", {
            get: /**
             * @return {?}
             */
            function () {
                return this.nzTreeTemplate || this.nzTreeTemplateChild;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeSelectComponent.prototype, "placeHolderDisplay", {
            get: /**
             * @return {?}
             */
            function () {
                return this.inputValue || this.isComposing || this.selectedNodes.length ? 'none' : 'block';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeSelectComponent.prototype, "searchDisplay", {
            get: /**
             * @return {?}
             */
            function () {
                return this.nzOpen ? 'block' : 'none';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeSelectComponent.prototype, "isMultiple", {
            get: /**
             * @return {?}
             */
            function () {
                return this.nzMultiple || this.nzCheckable;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeSelectComponent.prototype, "selectedValueDisplay", {
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
        /**
         * @return {?}
         */
        NzTreeSelectComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.isDestroy = false;
            this.selectionChangeSubscription = this.subscribeSelectionChange();
        };
        /**
         * @return {?}
         */
        NzTreeSelectComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.isDestroy = true;
            this.closeDropDown();
            this.selectionChangeSubscription.unsubscribe();
        };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        NzTreeSelectComponent.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
        function (isDisabled) {
            this.nzDisabled = isDisabled;
            this.closeDropDown();
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        NzTreeSelectComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.hasOwnProperty('nzNodes')) {
                this.updateSelectedNodes(true);
            }
        };
        /**
         * @param {?} value
         * @return {?}
         */
        NzTreeSelectComponent.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            if (core$1.isNotNil(value)) {
                if (this.isMultiple && Array.isArray(value)) {
                    this.value = value;
                }
                else {
                    this.value = [(/** @type {?} */ (value))];
                }
                this.updateSelectedNodes(true);
            }
            else {
                this.value = [];
                this.selectedNodes.forEach((/**
                 * @param {?} node
                 * @return {?}
                 */
                function (node) {
                    _this.removeSelected(node, false);
                }));
                this.selectedNodes = [];
            }
            this.cdr.markForCheck();
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        NzTreeSelectComponent.prototype.registerOnChange = /**
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
        NzTreeSelectComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onTouched = fn;
        };
        /**
         * @return {?}
         */
        NzTreeSelectComponent.prototype.trigger = /**
         * @return {?}
         */
        function () {
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
        /**
         * @return {?}
         */
        NzTreeSelectComponent.prototype.openDropdown = /**
         * @return {?}
         */
        function () {
            if (!this.nzDisabled) {
                this.nzOpen = true;
                this.nzOpenChange.emit(this.nzOpen);
                this.updateCdkConnectedOverlayStatus();
                this.updatePosition();
            }
        };
        /**
         * @return {?}
         */
        NzTreeSelectComponent.prototype.closeDropDown = /**
         * @return {?}
         */
        function () {
            this.onTouched();
            this.nzOpen = false;
            this.nzOpenChange.emit(this.nzOpen);
            this.cdr.markForCheck();
        };
        /**
         * @param {?} e
         * @return {?}
         */
        NzTreeSelectComponent.prototype.onKeyDownInput = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            /** @type {?} */
            var keyCode = e.keyCode;
            /** @type {?} */
            var eventTarget = (/** @type {?} */ (e.target));
            if (this.isMultiple && !eventTarget.value && keyCode === keycodes.BACKSPACE) {
                e.preventDefault();
                if (this.selectedNodes.length) {
                    /** @type {?} */
                    var removeNode = this.selectedNodes[this.selectedNodes.length - 1];
                    this.removeSelected(removeNode);
                    (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next({
                        eventName: 'removeSelect',
                        node: removeNode
                    });
                }
            }
        };
        /**
         * @param {?} value
         * @return {?}
         */
        NzTreeSelectComponent.prototype.onExpandedKeysChange = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.nzExpandChange.emit(value);
            this.expandedKeys = __spread((/** @type {?} */ (value.keys)));
        };
        /**
         * @param {?} value
         * @return {?}
         */
        NzTreeSelectComponent.prototype.setInputValue = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.inputValue = value;
            this.updateInputWidth();
            this.updatePosition();
        };
        /**
         * @param {?} node
         * @param {?=} emit
         * @param {?=} event
         * @return {?}
         */
        NzTreeSelectComponent.prototype.removeSelected = /**
         * @param {?} node
         * @param {?=} emit
         * @param {?=} event
         * @return {?}
         */
        function (node, emit, event) {
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
        /**
         * @return {?}
         */
        NzTreeSelectComponent.prototype.focusOnInput = /**
         * @return {?}
         */
        function () {
            var _this = this;
            setTimeout((/**
             * @return {?}
             */
            function () {
                if (_this.inputElement) {
                    _this.inputElement.nativeElement.focus();
                }
            }));
        };
        /**
         * @return {?}
         */
        NzTreeSelectComponent.prototype.subscribeSelectionChange = /**
         * @return {?}
         */
        function () {
            var _this = this;
            return rxjs.merge(this.nzTreeClick.pipe(operators.tap((/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                /** @type {?} */
                var node = (/** @type {?} */ (event.node));
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
            })), operators.filter((/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                /** @type {?} */
                var node = (/** @type {?} */ (event.node));
                return _this.nzCheckable ? !node.isDisabled && !node.isDisableCheckbox : !node.isDisabled && node.isSelectable;
            }))), this.nzCheckable ? this.nzTreeCheckBoxChange : rxjs.of(), this.nzCleared, this.nzRemoved).subscribe((/**
             * @return {?}
             */
            function () {
                _this.updateSelectedNodes();
                /** @type {?} */
                var value = _this.selectedNodes.map((/**
                 * @param {?} node
                 * @return {?}
                 */
                function (node) { return (/** @type {?} */ (node.key)); }));
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
            }));
        };
        /**
         * @param {?=} init
         * @return {?}
         */
        NzTreeSelectComponent.prototype.updateSelectedNodes = /**
         * @param {?=} init
         * @return {?}
         */
        function (init) {
            if (init === void 0) { init = false; }
            if (init) {
                /** @type {?} */
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
        /**
         * @return {?}
         */
        NzTreeSelectComponent.prototype.updatePosition = /**
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
        /**
         * @param {?} position
         * @return {?}
         */
        NzTreeSelectComponent.prototype.onPositionChange = /**
         * @param {?} position
         * @return {?}
         */
        function (position) {
            this.dropDownPosition = position.connectionPair.originY;
        };
        /**
         * @return {?}
         */
        NzTreeSelectComponent.prototype.updateInputWidth = /**
         * @return {?}
         */
        function () {
            if (this.isMultiple && this.inputElement) {
                if (this.inputValue || this.isComposing) {
                    this.renderer.setStyle(this.inputElement.nativeElement, 'width', this.inputElement.nativeElement.scrollWidth + "px");
                }
                else {
                    this.renderer.removeStyle(this.inputElement.nativeElement, 'width');
                }
            }
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        NzTreeSelectComponent.prototype.onClearSelection = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            var _this = this;
            $event.stopPropagation();
            $event.preventDefault();
            this.selectedNodes.forEach((/**
             * @param {?} node
             * @return {?}
             */
            function (node) {
                _this.removeSelected(node, false);
            }));
            this.nzCleared.emit();
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        NzTreeSelectComponent.prototype.setSearchValues = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            var _this = this;
            Promise.resolve().then((/**
             * @return {?}
             */
            function () {
                _this.isNotFound = (_this.nzShowSearch || _this.isMultiple) && !!_this.inputValue && (/** @type {?} */ ($event.matchedKeys)).length === 0;
            }));
        };
        /**
         * @return {?}
         */
        NzTreeSelectComponent.prototype.updateCdkConnectedOverlayStatus = /**
         * @return {?}
         */
        function () {
            this.triggerWidth = this.cdkOverlayOrigin.elementRef.nativeElement.getBoundingClientRect().width;
        };
        /**
         * @param {?} _index
         * @param {?} option
         * @return {?}
         */
        NzTreeSelectComponent.prototype.trackValue = /**
         * @param {?} _index
         * @param {?} option
         * @return {?}
         */
        function (_index, option) {
            return (/** @type {?} */ (option.key));
        };
        /** @nocollapse */
        NzTreeSelectComponent.ctorParameters = function () { return [
            { type: NzTreeSelectService },
            { type: core$1.NzConfigService },
            { type: core.Renderer2 },
            { type: core.ChangeDetectorRef },
            { type: core.ElementRef },
            { type: core$1.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
        ]; };
        NzTreeSelectComponent.propDecorators = {
            nzAllowClear: [{ type: core.Input }],
            nzShowExpand: [{ type: core.Input }],
            nzShowLine: [{ type: core.Input }],
            nzDropdownMatchSelectWidth: [{ type: core.Input }],
            nzCheckable: [{ type: core.Input }],
            nzHideUnMatched: [{ type: core.Input }],
            nzShowIcon: [{ type: core.Input }],
            nzShowSearch: [{ type: core.Input }],
            nzDisabled: [{ type: core.Input }],
            nzAsyncData: [{ type: core.Input }],
            nzMultiple: [{ type: core.Input }],
            nzDefaultExpandAll: [{ type: core.Input }],
            nzCheckStrictly: [{ type: core.Input }],
            nzExpandedIcon: [{ type: core.Input }],
            nzNotFoundContent: [{ type: core.Input }],
            nzNodes: [{ type: core.Input }],
            nzOpen: [{ type: core.Input }],
            nzSize: [{ type: core.Input }],
            nzPlaceHolder: [{ type: core.Input }],
            nzDropdownStyle: [{ type: core.Input }],
            nzDefaultExpandedKeys: [{ type: core.Input }],
            nzExpandedKeys: [{ type: core.Input }],
            nzDisplayWith: [{ type: core.Input }],
            nzMaxTagCount: [{ type: core.Input }],
            nzMaxTagPlaceholder: [{ type: core.Input }],
            nzOpenChange: [{ type: core.Output }],
            nzCleared: [{ type: core.Output }],
            nzRemoved: [{ type: core.Output }],
            nzExpandChange: [{ type: core.Output }],
            nzTreeClick: [{ type: core.Output }],
            nzTreeCheckBoxChange: [{ type: core.Output }],
            inputElement: [{ type: core.ViewChild, args: ['inputElement', { static: false },] }],
            treeRef: [{ type: core.ViewChild, args: ['treeRef', { static: false },] }],
            cdkOverlayOrigin: [{ type: core.ViewChild, args: [overlay.CdkOverlayOrigin, { static: true },] }],
            cdkConnectedOverlay: [{ type: core.ViewChild, args: [overlay.CdkConnectedOverlay, { static: false },] }],
            nzTreeTemplate: [{ type: core.Input }],
            nzTreeTemplateChild: [{ type: core.ContentChild, args: ['nzTreeTemplate', { static: true },] }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzTreeSelectComponent.prototype, "nzAllowClear", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzTreeSelectComponent.prototype, "nzShowExpand", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzTreeSelectComponent.prototype, "nzShowLine", void 0);
        __decorate([
            core$1.InputBoolean(), core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, true),
            __metadata("design:type", Boolean)
        ], NzTreeSelectComponent.prototype, "nzDropdownMatchSelectWidth", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzTreeSelectComponent.prototype, "nzCheckable", void 0);
        __decorate([
            core$1.InputBoolean(), core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, false),
            __metadata("design:type", Boolean)
        ], NzTreeSelectComponent.prototype, "nzHideUnMatched", void 0);
        __decorate([
            core$1.InputBoolean(), core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, false),
            __metadata("design:type", Boolean)
        ], NzTreeSelectComponent.prototype, "nzShowIcon", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzTreeSelectComponent.prototype, "nzShowSearch", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTreeSelectComponent.prototype, "nzDisabled", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTreeSelectComponent.prototype, "nzAsyncData", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTreeSelectComponent.prototype, "nzMultiple", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTreeSelectComponent.prototype, "nzDefaultExpandAll", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTreeSelectComponent.prototype, "nzCheckStrictly", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default'),
            __metadata("design:type", String)
        ], NzTreeSelectComponent.prototype, "nzSize", void 0);
NzTreeSelectComponent.ɵfac = function NzTreeSelectComponent_Factory(t) { return new (t || NzTreeSelectComponent)(ɵngcc0.ɵɵdirectiveInject(NzTreeSelectService), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzConfigService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzNoAnimationDirective, 9)); };
NzTreeSelectComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTreeSelectComponent, selectors: [["nz-tree-select"]], contentQueries: function NzTreeSelectComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵstaticContentQuery(dirIndex, _c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nzTreeTemplateChild = _t.first);
    } }, viewQuery: function NzTreeSelectComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c1, true);
        ɵngcc0.ɵɵviewQuery(_c2, true);
        ɵngcc0.ɵɵstaticViewQuery(overlay.CdkOverlayOrigin, true);
        ɵngcc0.ɵɵviewQuery(overlay.CdkConnectedOverlay, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.treeRef = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.cdkOverlayOrigin = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.cdkConnectedOverlay = _t.first);
    } }, hostVars: 12, hostBindings: function NzTreeSelectComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function NzTreeSelectComponent_click_HostBindingHandler() { return ctx.trigger(); });
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-select-lg", ctx.nzSize === "large")("ant-select-sm", ctx.nzSize === "small")("ant-select-enabled", !ctx.nzDisabled)("ant-select-disabled", ctx.nzDisabled)("ant-select-allow-clear", ctx.nzAllowClear)("ant-select-open", ctx.nzOpen);
    } }, inputs: { nzDefaultExpandedKeys: "nzDefaultExpandedKeys", nzExpandedKeys: "nzExpandedKeys", nzDisabled: "nzDisabled", nzOpen: "nzOpen", nzAllowClear: "nzAllowClear", nzShowExpand: "nzShowExpand", nzShowLine: "nzShowLine", nzDropdownMatchSelectWidth: "nzDropdownMatchSelectWidth", nzCheckable: "nzCheckable", nzHideUnMatched: "nzHideUnMatched", nzShowIcon: "nzShowIcon", nzShowSearch: "nzShowSearch", nzAsyncData: "nzAsyncData", nzMultiple: "nzMultiple", nzDefaultExpandAll: "nzDefaultExpandAll", nzCheckStrictly: "nzCheckStrictly", nzExpandedIcon: "nzExpandedIcon", nzNotFoundContent: "nzNotFoundContent", nzNodes: "nzNodes", nzSize: "nzSize", nzPlaceHolder: "nzPlaceHolder", nzDropdownStyle: "nzDropdownStyle", nzDisplayWith: "nzDisplayWith", nzMaxTagCount: "nzMaxTagCount", nzMaxTagPlaceholder: "nzMaxTagPlaceholder", nzTreeTemplate: "nzTreeTemplate" }, outputs: { nzOpenChange: "nzOpenChange", nzCleared: "nzCleared", nzRemoved: "nzRemoved", nzExpandChange: "nzExpandChange", nzTreeClick: "nzTreeClick", nzTreeCheckBoxChange: "nzTreeCheckBoxChange" }, exportAs: ["nzTreeSelect"], features: [ɵngcc0.ɵɵProvidersFeature([
            NzTreeSelectService,
            {
                provide: core$1.NzTreeHigherOrderServiceToken,
                useFactory: higherOrderServiceFactory,
                deps: [[new core.Self(), core.Injector]]
            },
            {
                provide: forms.NG_VALUE_ACCESSOR,
                useExisting: core.forwardRef(( /**
                 * @return {?}
                 */function () { return NzTreeSelectComponent; })),
                multi: true
            }
        ]), ɵngcc0.ɵɵInheritDefinitionFeature, ɵngcc0.ɵɵNgOnChangesFeature], decls: 8, vars: 13, consts: [["inputTemplate", ""], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayWidth", "backdropClick", "detach", "positionChange"], ["cdkOverlayOrigin", "", "tabindex", "0", 1, "ant-select-selection"], [4, "ngIf"], ["class", "ant-select-selection__clear", 3, "mousedown", "click", 4, "ngIf"], ["class", "ant-select-arrow", 4, "ngIf"], ["autocomplete", "off", 1, "ant-select-search__field", 3, "ngModel", "disabled", "compositionstart", "compositionend", "keydown", "ngModelChange"], ["inputElement", ""], [1, "ant-select-dropdown", "ant-select-tree-dropdown", 3, "nzNoAnimation", "ngStyle"], ["nzNoAnimation", "", "nzSelectMode", "", 3, "hidden", "nzData", "nzMultiple", "nzSearchValue", "nzHideUnMatched", "nzShowIcon", "nzCheckable", "nzAsyncData", "nzShowExpand", "nzShowLine", "nzExpandedIcon", "nzExpandAll", "nzExpandedKeys", "nzCheckedKeys", "nzSelectedKeys", "nzTreeTemplate", "nzCheckStrictly", "nzExpandChange", "nzClick", "nzCheckedKeysChange", "nzSelectedKeysChange", "nzCheckBoxChange", "nzSearchValueChange"], ["treeRef", ""], ["class", "ant-select-not-found", 4, "ngIf"], [1, "ant-select-not-found"], [3, "nzComponentName", "specificContent"], [1, "ant-select-selection__rendered"], ["class", "ant-select-selection__placeholder", 3, "display", 4, "ngIf"], ["class", "ant-select-selection-selected-value", 3, "ngStyle", 4, "ngIf"], ["class", "ant-select-search ant-select-search--inline", 3, "display", 4, "ngIf"], [1, "ant-select-selection__placeholder"], [1, "ant-select-selection-selected-value", 3, "ngStyle"], [1, "ant-select-search", "ant-select-search--inline"], [1, "ant-select-search__field__wrap"], [3, "ngTemplateOutlet"], [1, "ant-select-search__field__mirror"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "ant-select-selection__choice", 4, "ngIf"], [1, "ant-select-selection__choice", 3, "nzNoAnimation"], ["class", "ant-select-selection__choice__remove", 3, "mousedown", "click", 4, "ngIf"], [1, "ant-select-selection__choice__content"], [1, "ant-select-selection__choice__remove", 3, "mousedown", "click"], ["nz-icon", "", "nzType", "close", 1, "ant-select-remove-icon"], [1, "ant-select-selection__choice"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-select-selection__clear", 3, "mousedown", "click"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", 1, "ant-select-clear-icon"], [1, "ant-select-arrow"], ["nz-icon", "", "nzType", "down", 1, "ant-select-arrow-icon"]], template: function NzTreeSelectComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzTreeSelectComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(2, NzTreeSelectComponent_ng_template_2_Template, 4, 32, "ng-template", 1);
        ɵngcc0.ɵɵlistener("backdropClick", function NzTreeSelectComponent_Template_ng_template_backdropClick_2_listener() { return ctx.closeDropDown(); })("detach", function NzTreeSelectComponent_Template_ng_template_detach_2_listener() { return ctx.closeDropDown(); })("positionChange", function NzTreeSelectComponent_Template_ng_template_positionChange_2_listener($event) { return ctx.onPositionChange($event); });
        ɵngcc0.ɵɵelementStart(3, "div", 2);
        ɵngcc0.ɵɵtemplate(4, NzTreeSelectComponent_ng_container_4_Template, 5, 3, "ng-container", 3);
        ɵngcc0.ɵɵtemplate(5, NzTreeSelectComponent_ng_container_5_Template, 8, 9, "ng-container", 3);
        ɵngcc0.ɵɵtemplate(6, NzTreeSelectComponent_span_6_Template, 2, 0, "span", 4);
        ɵngcc0.ɵɵtemplate(7, NzTreeSelectComponent_span_7_Template, 2, 0, "span", 5);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("cdkConnectedOverlayOrigin", ctx.cdkOverlayOrigin)("cdkConnectedOverlayOpen", ctx.nzOpen)("cdkConnectedOverlayHasBackdrop", true)("cdkConnectedOverlayMinWidth", ctx.nzDropdownMatchSelectWidth ? null : ctx.triggerWidth)("cdkConnectedOverlayWidth", ctx.nzDropdownMatchSelectWidth ? ctx.triggerWidth : null);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("ant-select-selection--single", !ctx.isMultiple)("ant-select-selection--multiple", ctx.isMultiple);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.isMultiple);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.isMultiple);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzAllowClear);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.isMultiple);
    } }, directives: [ɵngcc2.CdkConnectedOverlay, ɵngcc1.NzConnectedOverlayDirective, ɵngcc2.CdkOverlayOrigin, ɵngcc3.NgIf, ɵngcc4.DefaultValueAccessor, ɵngcc4.NgControlStatus, ɵngcc4.NgModel, ɵngcc1.NzNoAnimationDirective, ɵngcc3.NgStyle, ɵngcc5.NzTreeComponent, ɵngcc6.NzEmbedEmptyComponent, ɵngcc3.NgTemplateOutlet, ɵngcc3.NgForOf, ɵngcc7.NzIconDirective], pipes: [ɵngcc3.SlicePipe], styles: [".ant-select-dropdown[_ngcontent-%COMP%] {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n        overflow: auto;\n      }"], data: { animation: [core$1.slideMotion, core$1.zoomMotion] } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTreeSelectComponent, [{
        type: core.Component,
        args: [{
                selector: 'nz-tree-select',
                exportAs: 'nzTreeSelect',
                animations: [core$1.slideMotion, core$1.zoomMotion],
                template: "<ng-template #inputTemplate>\r\n  <input\r\n    #inputElement\r\n    autocomplete=\"off\"\r\n    class=\"ant-select-search__field\"\r\n    (compositionstart)=\"isComposing = true\"\r\n    (compositionend)=\"isComposing = false\"\r\n    (keydown)=\"onKeyDownInput($event)\"\r\n    [ngModel]=\"inputValue\"\r\n    (ngModelChange)=\"setInputValue($event)\"\r\n    [disabled]=\"nzDisabled\">\r\n</ng-template>\r\n\r\n<ng-template\r\n  cdkConnectedOverlay\r\n  nzConnectedOverlay\r\n  [cdkConnectedOverlayOrigin]=\"cdkOverlayOrigin\"\r\n  [cdkConnectedOverlayOpen]=\"nzOpen\"\r\n  [cdkConnectedOverlayHasBackdrop]=\"true\"\r\n  [cdkConnectedOverlayMinWidth]=\"nzDropdownMatchSelectWidth? null : triggerWidth\"\r\n  [cdkConnectedOverlayWidth]=\"nzDropdownMatchSelectWidth? triggerWidth : null\"\r\n  (backdropClick)=\"closeDropDown()\"\r\n  (detach)=\"closeDropDown()\"\r\n  (positionChange)=\"onPositionChange($event)\">\r\n  <div class=\"ant-select-dropdown ant-select-tree-dropdown\"\r\n    [@slideMotion]=\"nzOpen ? dropDownPosition : 'void'\"\r\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\r\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n    [class.ant-select-dropdown--single]=\"!nzMultiple\"\r\n    [class.ant-select-dropdown--multiple]=\"nzMultiple\"\r\n    [class.ant-select-dropdown-placement-bottomLeft]=\"dropDownPosition === 'bottom'\"\r\n    [class.ant-select-dropdown-placement-topLeft]=\"dropDownPosition === 'top'\"\r\n    [ngStyle]=\"nzDropdownStyle\">\r\n    <nz-tree\r\n      #treeRef\r\n      [hidden]=\"isNotFound\"\r\n      nzNoAnimation\r\n      nzSelectMode\r\n      [nzData]=\"nzNodes\"\r\n      [nzMultiple]=\"nzMultiple\"\r\n      [nzSearchValue]=\"inputValue\"\r\n      [nzHideUnMatched]=\"nzHideUnMatched\"\r\n      [nzShowIcon]=\"nzShowIcon\"\r\n      [nzCheckable]=\"nzCheckable\"\r\n      [nzAsyncData]=\"nzAsyncData\"\r\n      [nzShowExpand]=\"nzShowExpand\"\r\n      [nzShowLine]=\"nzShowLine\"\r\n      [nzExpandedIcon]=\"nzExpandedIcon\"\r\n      [nzExpandAll]=\"nzDefaultExpandAll\"\r\n      [nzExpandedKeys]=\"expandedKeys\"\r\n      [nzCheckedKeys]=\"nzCheckable ? value : []\"\r\n      [nzSelectedKeys]=\"!nzCheckable ? value : []\"\r\n      [nzTreeTemplate]=\"treeTemplate\"\r\n      [nzCheckStrictly]=\"nzCheckStrictly\"\r\n      (nzExpandChange)=\"onExpandedKeysChange($event)\"\r\n      (nzClick)=\"nzTreeClick.emit($event)\"\r\n      (nzCheckedKeysChange)=\"updateSelectedNodes()\"\r\n      (nzSelectedKeysChange)=\"updateSelectedNodes()\"\r\n      (nzCheckBoxChange)=\"nzTreeCheckBoxChange.emit($event)\"\r\n      (nzSearchValueChange)=\"setSearchValues($event)\">\r\n    </nz-tree>\r\n    <span *ngIf=\"nzNodes.length === 0 || isNotFound\" class=\"ant-select-not-found\">\r\n      <nz-embed-empty [nzComponentName]=\"'tree-select'\" [specificContent]=\"nzNotFoundContent\"></nz-embed-empty>\r\n    </span>\r\n  </div>\r\n</ng-template>\r\n\r\n<div\r\n  cdkOverlayOrigin\r\n  class=\"ant-select-selection\"\r\n  [class.ant-select-selection--single]=\"!isMultiple\"\r\n  [class.ant-select-selection--multiple]=\"isMultiple\"\r\n  tabindex=\"0\">\r\n  <ng-container *ngIf=\"!isMultiple\">\r\n    <div class=\"ant-select-selection__rendered\">\r\n      <div\r\n        *ngIf=\"nzPlaceHolder && selectedNodes.length === 0\"\r\n        [style.display]=\"placeHolderDisplay\"\r\n        class=\"ant-select-selection__placeholder\">\r\n        {{ nzPlaceHolder }}\r\n      </div>\r\n\r\n      <div\r\n        *ngIf=\"selectedNodes.length === 1\"\r\n        class=\"ant-select-selection-selected-value\"\r\n        [attr.title]=\"nzDisplayWith(selectedNodes[0])\"\r\n        [ngStyle]=\"selectedValueDisplay\">\r\n        {{ nzDisplayWith(selectedNodes[0]) }}\r\n      </div>\r\n\r\n      <div\r\n        *ngIf=\"nzShowSearch\"\r\n        [style.display]=\"searchDisplay\"\r\n        class=\"ant-select-search ant-select-search--inline\">\r\n        <div class=\"ant-select-search__field__wrap\">\r\n          <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\r\n          <span class=\"ant-select-search__field__mirror\">{{inputValue}}&nbsp;</span>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"isMultiple\">\r\n    <ul class=\"ant-select-selection__rendered\">\r\n      <div\r\n        *ngIf=\"nzPlaceHolder && selectedNodes.length === 0\"\r\n        [style.display]=\"placeHolderDisplay\"\r\n        class=\"ant-select-selection__placeholder\">\r\n        {{ nzPlaceHolder }}\r\n      </div>\r\n      <ng-container *ngFor=\"let node of selectedNodes | slice: 0 : nzMaxTagCount; trackBy:trackValue\">\r\n        <li\r\n          [@zoomMotion]\r\n          [@.disabled]=\"noAnimation?.nzNoAnimation\"\r\n          [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n          [attr.title]=\"nzDisplayWith(node)\"\r\n          [class.ant-select-selection__choice__disabled]=\"node.isDisabled\"\r\n          class=\"ant-select-selection__choice\">\r\n               <span *ngIf=\"!node.isDisabled\" class=\"ant-select-selection__choice__remove\"\r\n                 (mousedown)=\"$event.preventDefault()\"\r\n                 (click)=\"removeSelected(node, true, $event)\">\r\n                 <i nz-icon nzType=\"close\" class=\"ant-select-remove-icon\"></i>\r\n               </span>\r\n          <span class=\"ant-select-selection__choice__content\">{{ nzDisplayWith(node) }}</span>\r\n        </li>\r\n      </ng-container>\r\n      <li [@zoomMotion]\r\n        *ngIf=\"selectedNodes.length > nzMaxTagCount\"\r\n        class=\"ant-select-selection__choice\">\r\n        <div class=\"ant-select-selection__choice__content\">\r\n          <ng-container *ngIf=\"nzMaxTagPlaceholder\">\r\n            <ng-template\r\n              [ngTemplateOutlet]=\"nzMaxTagPlaceholder\"\r\n              [ngTemplateOutletContext]=\"{ $implicit: selectedNodes | slice: nzMaxTagCount}\">\r\n            </ng-template>\r\n          </ng-container>\r\n          <ng-container *ngIf=\"!nzMaxTagPlaceholder\">\r\n            + {{ selectedNodes.length - nzMaxTagCount }} ...\r\n          </ng-container>\r\n        </div>\r\n      </li>\r\n      <li class=\"ant-select-search ant-select-search--inline\">\r\n        <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\r\n      </li>\r\n    </ul>\r\n  </ng-container>\r\n  <span *ngIf=\"nzAllowClear\" class=\"ant-select-selection__clear\"\r\n    (mousedown)=\"$event.preventDefault()\"\r\n    (click)=\"onClearSelection($event)\">\r\n    <i nz-icon nzType=\"close-circle\" class=\"ant-select-clear-icon\" nzTheme=\"fill\"></i>\r\n  </span>\r\n  <span *ngIf=\"!isMultiple\" class=\"ant-select-arrow\">\r\n    <i nz-icon nzType=\"down\" class=\"ant-select-arrow-icon\"></i>\r\n  </span>\r\n</div>",
                providers: [
                    NzTreeSelectService,
                    {
                        provide: core$1.NzTreeHigherOrderServiceToken,
                        useFactory: higherOrderServiceFactory,
                        deps: [[new core.Self(), core.Injector]]
                    },
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(( /**
                         * @return {?}
                         */function () { return NzTreeSelectComponent; })),
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
                styles: ["\n      .ant-select-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n        overflow: auto;\n      }\n    "]
            }]
    }], function () { return [{ type: NzTreeSelectService }, { type: ɵngcc1.NzConfigService }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.ElementRef }, { type: ɵngcc1.NzNoAnimationDirective, decorators: [{
                type: core.Host
            }, {
                type: core.Optional
            }] }]; }, { nzDefaultExpandedKeys: [{
            type: core.Input
        }], nzExpandedKeys: [{
            type: core.Input
        }], nzDisabled: [{
            type: core.Input
        }], nzOpen: [{
            type: core.Input
        }], nzAllowClear: [{
            type: core.Input
        }], nzShowExpand: [{
            type: core.Input
        }], nzShowLine: [{
            type: core.Input
        }], nzDropdownMatchSelectWidth: [{
            type: core.Input
        }], nzCheckable: [{
            type: core.Input
        }], nzHideUnMatched: [{
            type: core.Input
        }], nzShowIcon: [{
            type: core.Input
        }], nzShowSearch: [{
            type: core.Input
        }], nzAsyncData: [{
            type: core.Input
        }], nzMultiple: [{
            type: core.Input
        }], nzDefaultExpandAll: [{
            type: core.Input
        }], nzCheckStrictly: [{
            type: core.Input
        }], nzExpandedIcon: [{
            type: core.Input
        }], nzNotFoundContent: [{
            type: core.Input
        }], nzNodes: [{
            type: core.Input
        }], nzSize: [{
            type: core.Input
        }], nzPlaceHolder: [{
            type: core.Input
        }], nzDropdownStyle: [{
            type: core.Input
        }], nzDisplayWith: [{
            type: core.Input
        }], nzMaxTagCount: [{
            type: core.Input
        }], nzMaxTagPlaceholder: [{
            type: core.Input
        }], nzOpenChange: [{
            type: core.Output
        }], nzCleared: [{
            type: core.Output
        }], nzRemoved: [{
            type: core.Output
        }], nzExpandChange: [{
            type: core.Output
        }], nzTreeClick: [{
            type: core.Output
        }], nzTreeCheckBoxChange: [{
            type: core.Output
        }], inputElement: [{
            type: core.ViewChild,
            args: ['inputElement', { static: false }]
        }], treeRef: [{
            type: core.ViewChild,
            args: ['treeRef', { static: false }]
        }], cdkOverlayOrigin: [{
            type: core.ViewChild,
            args: [overlay.CdkOverlayOrigin, { static: true }]
        }], cdkConnectedOverlay: [{
            type: core.ViewChild,
            args: [overlay.CdkConnectedOverlay, { static: false }]
        }], nzTreeTemplate: [{
            type: core.Input
        }], nzTreeTemplateChild: [{
            type: core.ContentChild,
            args: ['nzTreeTemplate', { static: true }]
        }] }); })();
        return NzTreeSelectComponent;
    }(core$1.NzTreeBase));
    if (false) {
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzAllowClear;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzShowExpand;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzShowLine;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzDropdownMatchSelectWidth;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzCheckable;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzHideUnMatched;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzShowIcon;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzShowSearch;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzDisabled;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzAsyncData;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzMultiple;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzDefaultExpandAll;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzCheckStrictly;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzExpandedIcon;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzNotFoundContent;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzNodes;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzOpen;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzSize;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzPlaceHolder;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzDropdownStyle;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzDisplayWith;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzMaxTagCount;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzMaxTagPlaceholder;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzOpenChange;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzCleared;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzRemoved;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzExpandChange;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzTreeClick;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzTreeCheckBoxChange;
        /** @type {?} */
        NzTreeSelectComponent.prototype.inputElement;
        /** @type {?} */
        NzTreeSelectComponent.prototype.treeRef;
        /** @type {?} */
        NzTreeSelectComponent.prototype.cdkOverlayOrigin;
        /** @type {?} */
        NzTreeSelectComponent.prototype.cdkConnectedOverlay;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzTreeTemplate;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzTreeTemplateChild;
        /** @type {?} */
        NzTreeSelectComponent.prototype.triggerWidth;
        /** @type {?} */
        NzTreeSelectComponent.prototype.isComposing;
        /** @type {?} */
        NzTreeSelectComponent.prototype.isDestroy;
        /** @type {?} */
        NzTreeSelectComponent.prototype.isNotFound;
        /** @type {?} */
        NzTreeSelectComponent.prototype.inputValue;
        /** @type {?} */
        NzTreeSelectComponent.prototype.dropDownPosition;
        /** @type {?} */
        NzTreeSelectComponent.prototype.selectionChangeSubscription;
        /** @type {?} */
        NzTreeSelectComponent.prototype.selectedNodes;
        /** @type {?} */
        NzTreeSelectComponent.prototype.expandedKeys;
        /** @type {?} */
        NzTreeSelectComponent.prototype.value;
        /** @type {?} */
        NzTreeSelectComponent.prototype.onChange;
        /** @type {?} */
        NzTreeSelectComponent.prototype.onTouched;
        /** @type {?} */
        NzTreeSelectComponent.prototype.nzConfigService;
        /**
         * @type {?}
         * @private
         */
        NzTreeSelectComponent.prototype.renderer;
        /**
         * @type {?}
         * @private
         */
        NzTreeSelectComponent.prototype.cdr;
        /**
         * @type {?}
         * @private
         */
        NzTreeSelectComponent.prototype.elementRef;
        /** @type {?} */
        NzTreeSelectComponent.prototype.noAnimation;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzTreeSelectModule = /** @class */ (function () {
        function NzTreeSelectModule() {
        }
NzTreeSelectModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzTreeSelectModule });
NzTreeSelectModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzTreeSelectModule_Factory(t) { return new (t || NzTreeSelectModule)(); }, imports: [[
            common.CommonModule,
            overlay.OverlayModule,
            forms.FormsModule,
            tree.NzTreeModule,
            icon.NzIconModule,
            empty.NzEmptyModule,
            core$1.NzOverlayModule,
            core$1.NzNoAnimationModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzTreeSelectModule, { declarations: [NzTreeSelectComponent], imports: [ɵngcc3.CommonModule, ɵngcc2.OverlayModule, ɵngcc4.FormsModule, ɵngcc5.NzTreeModule, ɵngcc7.NzIconModule, ɵngcc6.NzEmptyModule, ɵngcc1.NzOverlayModule, ɵngcc1.NzNoAnimationModule], exports: [NzTreeSelectComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTreeSelectModule, [{
        type: core.NgModule,
        args: [{
                imports: [
                    common.CommonModule,
                    overlay.OverlayModule,
                    forms.FormsModule,
                    tree.NzTreeModule,
                    icon.NzIconModule,
                    empty.NzEmptyModule,
                    core$1.NzOverlayModule,
                    core$1.NzNoAnimationModule
                ],
                declarations: [NzTreeSelectComponent],
                exports: [NzTreeSelectComponent]
            }]
    }], function () { return []; }, null); })();
        return NzTreeSelectModule;
    }());

    exports.NzTreeSelectComponent = NzTreeSelectComponent;
    exports.NzTreeSelectModule = NzTreeSelectModule;
    exports.NzTreeSelectService = NzTreeSelectService;
    exports.higherOrderServiceFactory = higherOrderServiceFactory;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-zorro-antd-tree-select.umd.js.map