import { __decorate, __metadata } from "tslib";
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
const _c0 = ["nzTreeTemplate"];
const _c1 = ["inputElement"];
const _c2 = ["treeRef"];
function NzTreeSelectComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r1633 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 6, 7);
    i0.ɵɵlistener("compositionstart", function NzTreeSelectComponent_ng_template_0_Template_input_compositionstart_0_listener($event) { i0.ɵɵrestoreView(_r1633); const ctx_r1632 = i0.ɵɵnextContext(); return ctx_r1632.isComposing = true; })("compositionend", function NzTreeSelectComponent_ng_template_0_Template_input_compositionend_0_listener($event) { i0.ɵɵrestoreView(_r1633); const ctx_r1634 = i0.ɵɵnextContext(); return ctx_r1634.isComposing = false; })("keydown", function NzTreeSelectComponent_ng_template_0_Template_input_keydown_0_listener($event) { i0.ɵɵrestoreView(_r1633); const ctx_r1635 = i0.ɵɵnextContext(); return ctx_r1635.onKeyDownInput($event); })("ngModelChange", function NzTreeSelectComponent_ng_template_0_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r1633); const ctx_r1636 = i0.ɵɵnextContext(); return ctx_r1636.setInputValue($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1625 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngModel", ctx_r1625.inputValue)("disabled", ctx_r1625.nzDisabled);
} }
function NzTreeSelectComponent_ng_template_2_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 12);
    i0.ɵɵelement(1, "nz-embed-empty", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1638 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzComponentName", "tree-select")("specificContent", ctx_r1638.nzNotFoundContent);
} }
const _c3 = function () { return []; };
function NzTreeSelectComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r1640 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelementStart(1, "nz-tree", 9, 10);
    i0.ɵɵlistener("nzExpandChange", function NzTreeSelectComponent_ng_template_2_Template_nz_tree_nzExpandChange_1_listener($event) { i0.ɵɵrestoreView(_r1640); const ctx_r1639 = i0.ɵɵnextContext(); return ctx_r1639.onExpandedKeysChange($event); })("nzClick", function NzTreeSelectComponent_ng_template_2_Template_nz_tree_nzClick_1_listener($event) { i0.ɵɵrestoreView(_r1640); const ctx_r1641 = i0.ɵɵnextContext(); return ctx_r1641.nzTreeClick.emit($event); })("nzCheckedKeysChange", function NzTreeSelectComponent_ng_template_2_Template_nz_tree_nzCheckedKeysChange_1_listener($event) { i0.ɵɵrestoreView(_r1640); const ctx_r1642 = i0.ɵɵnextContext(); return ctx_r1642.updateSelectedNodes(); })("nzSelectedKeysChange", function NzTreeSelectComponent_ng_template_2_Template_nz_tree_nzSelectedKeysChange_1_listener($event) { i0.ɵɵrestoreView(_r1640); const ctx_r1643 = i0.ɵɵnextContext(); return ctx_r1643.updateSelectedNodes(); })("nzCheckBoxChange", function NzTreeSelectComponent_ng_template_2_Template_nz_tree_nzCheckBoxChange_1_listener($event) { i0.ɵɵrestoreView(_r1640); const ctx_r1644 = i0.ɵɵnextContext(); return ctx_r1644.nzTreeCheckBoxChange.emit($event); })("nzSearchValueChange", function NzTreeSelectComponent_ng_template_2_Template_nz_tree_nzSearchValueChange_1_listener($event) { i0.ɵɵrestoreView(_r1640); const ctx_r1645 = i0.ɵɵnextContext(); return ctx_r1645.setSearchValues($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, NzTreeSelectComponent_ng_template_2_span_3_Template, 2, 2, "span", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1626 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("ant-select-dropdown--single", !ctx_r1626.nzMultiple)("ant-select-dropdown--multiple", ctx_r1626.nzMultiple)("ant-select-dropdown-placement-bottomLeft", ctx_r1626.dropDownPosition === "bottom")("ant-select-dropdown-placement-topLeft", ctx_r1626.dropDownPosition === "top");
    i0.ɵɵproperty("@slideMotion", ctx_r1626.nzOpen ? ctx_r1626.dropDownPosition : "void")("@.disabled", ctx_r1626.noAnimation == null ? null : ctx_r1626.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r1626.noAnimation == null ? null : ctx_r1626.noAnimation.nzNoAnimation)("ngStyle", ctx_r1626.nzDropdownStyle);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("hidden", ctx_r1626.isNotFound)("nzData", ctx_r1626.nzNodes)("nzMultiple", ctx_r1626.nzMultiple)("nzSearchValue", ctx_r1626.inputValue)("nzHideUnMatched", ctx_r1626.nzHideUnMatched)("nzShowIcon", ctx_r1626.nzShowIcon)("nzCheckable", ctx_r1626.nzCheckable)("nzAsyncData", ctx_r1626.nzAsyncData)("nzShowExpand", ctx_r1626.nzShowExpand)("nzShowLine", ctx_r1626.nzShowLine)("nzExpandedIcon", ctx_r1626.nzExpandedIcon)("nzExpandAll", ctx_r1626.nzDefaultExpandAll)("nzExpandedKeys", ctx_r1626.expandedKeys)("nzCheckedKeys", ctx_r1626.nzCheckable ? ctx_r1626.value : i0.ɵɵpureFunction0(26, _c3))("nzSelectedKeys", !ctx_r1626.nzCheckable ? ctx_r1626.value : i0.ɵɵpureFunction0(27, _c3))("nzTreeTemplate", ctx_r1626.treeTemplate)("nzCheckStrictly", ctx_r1626.nzCheckStrictly);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1626.nzNodes.length === 0 || ctx_r1626.isNotFound);
} }
function NzTreeSelectComponent_ng_container_4_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1646 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("display", ctx_r1646.placeHolderDisplay);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1646.nzPlaceHolder, " ");
} }
function NzTreeSelectComponent_ng_container_4_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1647 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngStyle", ctx_r1647.selectedValueDisplay);
    i0.ɵɵattribute("title", ctx_r1647.nzDisplayWith(ctx_r1647.selectedNodes[0]));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1647.nzDisplayWith(ctx_r1647.selectedNodes[0]), " ");
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
    const ctx_r1648 = i0.ɵɵnextContext(2);
    const _r1624 = i0.ɵɵreference(1);
    i0.ɵɵstyleProp("display", ctx_r1648.searchDisplay);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", _r1624);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r1648.inputValue, "\u00A0");
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
    const ctx_r1627 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1627.nzPlaceHolder && ctx_r1627.selectedNodes.length === 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1627.selectedNodes.length === 1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1627.nzShowSearch);
} }
function NzTreeSelectComponent_ng_container_5_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1650 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("display", ctx_r1650.placeHolderDisplay);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1650.nzPlaceHolder, " ");
} }
function NzTreeSelectComponent_ng_container_5_ng_container_3_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r1657 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 29);
    i0.ɵɵlistener("mousedown", function NzTreeSelectComponent_ng_container_5_ng_container_3_span_2_Template_span_mousedown_0_listener($event) { i0.ɵɵrestoreView(_r1657); return $event.preventDefault(); })("click", function NzTreeSelectComponent_ng_container_5_ng_container_3_span_2_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r1657); const node_r1654 = i0.ɵɵnextContext().$implicit; const ctx_r1658 = i0.ɵɵnextContext(2); return ctx_r1658.removeSelected(node_r1654, true, $event); });
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
    const node_r1654 = ctx.$implicit;
    const ctx_r1651 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ant-select-selection__choice__disabled", node_r1654.isDisabled);
    i0.ɵɵproperty("@zoomMotion", undefined)("@.disabled", ctx_r1651.noAnimation == null ? null : ctx_r1651.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r1651.noAnimation == null ? null : ctx_r1651.noAnimation.nzNoAnimation);
    i0.ɵɵattribute("title", ctx_r1651.nzDisplayWith(node_r1654));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !node_r1654.isDisabled);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1651.nzDisplayWith(node_r1654));
} }
function NzTreeSelectComponent_ng_container_5_li_5_ng_container_2_ng_template_1_Template(rf, ctx) { }
const _c4 = function (a0) { return { $implicit: a0 }; };
function NzTreeSelectComponent_ng_container_5_li_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzTreeSelectComponent_ng_container_5_li_5_ng_container_2_ng_template_1_Template, 0, 0, "ng-template", 32);
    i0.ɵɵpipe(2, "slice");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1660 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1660.nzMaxTagPlaceholder)("ngTemplateOutletContext", i0.ɵɵpureFunction1(5, _c4, i0.ɵɵpipeBind2(2, 2, ctx_r1660.selectedNodes, ctx_r1660.nzMaxTagCount)));
} }
function NzTreeSelectComponent_ng_container_5_li_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1661 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" + ", ctx_r1661.selectedNodes.length - ctx_r1661.nzMaxTagCount, " ... ");
} }
function NzTreeSelectComponent_ng_container_5_li_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 31);
    i0.ɵɵelementStart(1, "div", 28);
    i0.ɵɵtemplate(2, NzTreeSelectComponent_ng_container_5_li_5_ng_container_2_Template, 3, 7, "ng-container", 3);
    i0.ɵɵtemplate(3, NzTreeSelectComponent_ng_container_5_li_5_ng_container_3_Template, 2, 1, "ng-container", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1652 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("@zoomMotion", undefined);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1652.nzMaxTagPlaceholder);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1652.nzMaxTagPlaceholder);
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
    const ctx_r1628 = i0.ɵɵnextContext();
    const _r1624 = i0.ɵɵreference(1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1628.nzPlaceHolder && ctx_r1628.selectedNodes.length === 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind3(4, 5, ctx_r1628.selectedNodes, 0, ctx_r1628.nzMaxTagCount))("ngForTrackBy", ctx_r1628.trackValue);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1628.selectedNodes.length > ctx_r1628.nzMaxTagCount);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", _r1624);
} }
function NzTreeSelectComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r1664 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 33);
    i0.ɵɵlistener("mousedown", function NzTreeSelectComponent_span_6_Template_span_mousedown_0_listener($event) { i0.ɵɵrestoreView(_r1664); return $event.preventDefault(); })("click", function NzTreeSelectComponent_span_6_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r1664); const ctx_r1665 = i0.ɵɵnextContext(); return ctx_r1665.onClearSelection($event); });
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
const NZ_CONFIG_COMPONENT_NAME = 'treeSelect';
export class NzTreeSelectComponent extends NzTreeBase {
    constructor(nzTreeService, nzConfigService, renderer, cdr, elementRef, noAnimation) {
        super(nzTreeService);
        this.nzConfigService = nzConfigService;
        this.renderer = renderer;
        this.cdr = cdr;
        this.elementRef = elementRef;
        this.noAnimation = noAnimation;
        this.nzAllowClear = true;
        this.nzShowExpand = true;
        this.nzShowLine = false;
        this.nzCheckable = false;
        this.nzShowSearch = false;
        this.nzDisabled = false;
        this.nzAsyncData = false;
        this.nzMultiple = false;
        this.nzDefaultExpandAll = false;
        this.nzCheckStrictly = false;
        this.nzNodes = [];
        this.nzOpen = false;
        this.nzPlaceHolder = '';
        this.nzDisplayWith = (node) => node.title;
        this.nzOpenChange = new EventEmitter();
        this.nzCleared = new EventEmitter();
        this.nzRemoved = new EventEmitter();
        this.nzExpandChange = new EventEmitter();
        this.nzTreeClick = new EventEmitter();
        this.nzTreeCheckBoxChange = new EventEmitter();
        this.isComposing = false;
        this.isDestroy = true;
        this.isNotFound = false;
        this.inputValue = '';
        this.dropDownPosition = 'bottom';
        this.selectedNodes = [];
        this.expandedKeys = [];
        this.value = [];
        this.onTouched = () => null;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-select');
    }
    /**
     * @deprecated 9.0.0 - use `nzExpandedKeys` instead.
     */
    set nzDefaultExpandedKeys(value) {
        warnDeprecation(`'nzDefaultExpandedKeys' would be removed in 9.0.0. Please use 'nzExpandedKeys' instead.`);
        this.expandedKeys = value;
    }
    get nzDefaultExpandedKeys() {
        return this.expandedKeys;
    }
    set nzExpandedKeys(value) {
        this.expandedKeys = value;
    }
    get nzExpandedKeys() {
        return this.expandedKeys;
    }
    get treeTemplate() {
        return this.nzTreeTemplate || this.nzTreeTemplateChild;
    }
    get placeHolderDisplay() {
        return this.inputValue || this.isComposing || this.selectedNodes.length ? 'none' : 'block';
    }
    get searchDisplay() {
        return this.nzOpen ? 'block' : 'none';
    }
    get isMultiple() {
        return this.nzMultiple || this.nzCheckable;
    }
    get selectedValueDisplay() {
        let showSelectedValue = false;
        let opacity = 1;
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
            opacity: `${opacity}`
        };
    }
    ngOnInit() {
        this.isDestroy = false;
        this.selectionChangeSubscription = this.subscribeSelectionChange();
    }
    ngOnDestroy() {
        this.isDestroy = true;
        this.closeDropDown();
        this.selectionChangeSubscription.unsubscribe();
    }
    setDisabledState(isDisabled) {
        this.nzDisabled = isDisabled;
        this.closeDropDown();
    }
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('nzNodes')) {
            this.updateSelectedNodes(true);
        }
    }
    writeValue(value) {
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
            this.selectedNodes.forEach(node => {
                this.removeSelected(node, false);
            });
            this.selectedNodes = [];
        }
        this.cdr.markForCheck();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    trigger() {
        if (this.nzDisabled || (!this.nzDisabled && this.nzOpen)) {
            this.closeDropDown();
        }
        else {
            this.openDropdown();
            if (this.nzShowSearch || this.isMultiple) {
                this.focusOnInput();
            }
        }
    }
    openDropdown() {
        if (!this.nzDisabled) {
            this.nzOpen = true;
            this.nzOpenChange.emit(this.nzOpen);
            this.updateCdkConnectedOverlayStatus();
            this.updatePosition();
        }
    }
    closeDropDown() {
        this.onTouched();
        this.nzOpen = false;
        this.nzOpenChange.emit(this.nzOpen);
        this.cdr.markForCheck();
    }
    onKeyDownInput(e) {
        const keyCode = e.keyCode;
        const eventTarget = e.target;
        if (this.isMultiple && !eventTarget.value && keyCode === BACKSPACE) {
            e.preventDefault();
            if (this.selectedNodes.length) {
                const removeNode = this.selectedNodes[this.selectedNodes.length - 1];
                this.removeSelected(removeNode);
                this.nzTreeService.triggerEventChange$.next({
                    eventName: 'removeSelect',
                    node: removeNode
                });
            }
        }
    }
    onExpandedKeysChange(value) {
        this.nzExpandChange.emit(value);
        this.expandedKeys = [...value.keys];
    }
    setInputValue(value) {
        this.inputValue = value;
        this.updateInputWidth();
        this.updatePosition();
    }
    removeSelected(node, emit = true, event) {
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
    }
    focusOnInput() {
        setTimeout(() => {
            if (this.inputElement) {
                this.inputElement.nativeElement.focus();
            }
        });
    }
    subscribeSelectionChange() {
        return merge(this.nzTreeClick.pipe(tap((event) => {
            const node = event.node;
            if (this.nzCheckable && !node.isDisabled && !node.isDisableCheckbox) {
                node.isChecked = !node.isChecked;
                node.isHalfChecked = false;
                if (!this.nzCheckStrictly) {
                    this.nzTreeService.conduct(node);
                }
            }
            if (this.nzCheckable) {
                node.isSelected = false;
            }
        }), filter((event) => {
            const node = event.node;
            return this.nzCheckable ? !node.isDisabled && !node.isDisableCheckbox : !node.isDisabled && node.isSelectable;
        })), this.nzCheckable ? this.nzTreeCheckBoxChange : observableOf(), this.nzCleared, this.nzRemoved).subscribe(() => {
            this.updateSelectedNodes();
            const value = this.selectedNodes.map(node => node.key);
            this.value = [...value];
            if (this.nzShowSearch || this.isMultiple) {
                this.inputValue = '';
                this.isNotFound = false;
            }
            if (this.isMultiple) {
                this.onChange(value);
                this.focusOnInput();
                this.updatePosition();
            }
            else {
                this.closeDropDown();
                this.onChange(value.length ? value[0] : null);
            }
        });
    }
    updateSelectedNodes(init = false) {
        if (init) {
            const nodes = this.coerceTreeNodes(this.nzNodes);
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
        this.selectedNodes = [...(this.nzCheckable ? this.getCheckedNodeList() : this.getSelectedNodeList())];
    }
    updatePosition() {
        setTimeout(() => {
            if (this.cdkConnectedOverlay && this.cdkConnectedOverlay.overlayRef) {
                this.cdkConnectedOverlay.overlayRef.updatePosition();
            }
        });
    }
    onPositionChange(position) {
        this.dropDownPosition = position.connectionPair.originY;
    }
    updateInputWidth() {
        if (this.isMultiple && this.inputElement) {
            if (this.inputValue || this.isComposing) {
                this.renderer.setStyle(this.inputElement.nativeElement, 'width', `${this.inputElement.nativeElement.scrollWidth}px`);
            }
            else {
                this.renderer.removeStyle(this.inputElement.nativeElement, 'width');
            }
        }
    }
    onClearSelection($event) {
        $event.stopPropagation();
        $event.preventDefault();
        this.selectedNodes.forEach(node => {
            this.removeSelected(node, false);
        });
        this.nzCleared.emit();
    }
    setSearchValues($event) {
        Promise.resolve().then(() => {
            this.isNotFound = (this.nzShowSearch || this.isMultiple) && !!this.inputValue && $event.matchedKeys.length === 0;
        });
    }
    updateCdkConnectedOverlayStatus() {
        this.triggerWidth = this.cdkOverlayOrigin.elementRef.nativeElement.getBoundingClientRect().width;
    }
    trackValue(_index, option) {
        return option.key;
    }
}
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
                useExisting: forwardRef((() => NzTreeSelectComponent)),
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
                        useExisting: forwardRef((() => NzTreeSelectComponent)),
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
                    `
      .ant-select-dropdown {
        top: 100%;
        left: 0;
        position: relative;
        width: 100%;
        margin-top: 4px;
        margin-bottom: 4px;
        overflow: auto;
      }
    `
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90cmVlLXNlbGVjdC8iLCJzb3VyY2VzIjpbIm56LXRyZWUtc2VsZWN0LmNvbXBvbmVudC50cyIsIm56LXRyZWUtc2VsZWN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGdCQUFnQixFQUFrQyxNQUFNLHNCQUFzQixDQUFDO0FBQzdHLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixJQUFJLEVBQ0osUUFBUSxFQUNSLEtBQUssRUFJTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFDVCxJQUFJLEVBRUosV0FBVyxFQUNYLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLElBQUksWUFBWSxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUMvRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFDTCxZQUFZLEVBQ1osUUFBUSxFQUNSLGVBQWUsRUFFZixzQkFBc0IsRUFFdEIsVUFBVSxFQUVWLDZCQUE2QixFQUc3QixXQUFXLEVBQ1gsZUFBZSxFQUNmLFVBQVUsRUFDVixVQUFVLEVBQ1gsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFckQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7Ozs7Ozs7OztJQ3RE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QUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFFTixTQUFTO21CQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O2tCQUMzQyxTQUFTO21CQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O2tCQUN0QyxTQUFTO21CQUFDLGdCQUFnQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7a0JBQzVDLFNBQVM7bUJBQUMsbUJBQW1CLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOztrQkFFaEQsS0FBSzs7a0JBQ0wsWUFBWTttQkFBQyxnQkFBZ0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEJBQ0tTUEFDRSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XHJcbmltcG9ydCB7IENka0Nvbm5lY3RlZE92ZXJsYXksIENka092ZXJsYXlPcmlnaW4sIENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgSG9zdCxcclxuICBJbmplY3RvcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNlbGYsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgbWVyZ2UsIG9mIGFzIG9ic2VydmFibGVPZiwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpbHRlciwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBJbnB1dEJvb2xlYW4sXHJcbiAgaXNOb3ROaWwsXHJcbiAgTnpDb25maWdTZXJ2aWNlLFxyXG4gIE56Rm9ybWF0RW1pdEV2ZW50LFxyXG4gIE56Tm9BbmltYXRpb25EaXJlY3RpdmUsXHJcbiAgTnpTaXplTERTVHlwZSxcclxuICBOelRyZWVCYXNlLFxyXG4gIE56VHJlZUJhc2VTZXJ2aWNlLFxyXG4gIE56VHJlZUhpZ2hlck9yZGVyU2VydmljZVRva2VuLFxyXG4gIE56VHJlZU5vZGUsXHJcbiAgTnpUcmVlTm9kZU9wdGlvbnMsXHJcbiAgc2xpZGVNb3Rpb24sXHJcbiAgd2FybkRlcHJlY2F0aW9uLFxyXG4gIFdpdGhDb25maWcsXHJcbiAgem9vbU1vdGlvblxyXG59IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56VHJlZUNvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvdHJlZSc7XHJcblxyXG5pbXBvcnQgeyBOelRyZWVTZWxlY3RTZXJ2aWNlIH0gZnJvbSAnLi9uei10cmVlLXNlbGVjdC5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoaWdoZXJPcmRlclNlcnZpY2VGYWN0b3J5KGluamVjdG9yOiBJbmplY3Rvcik6IE56VHJlZUJhc2VTZXJ2aWNlIHtcclxuICByZXR1cm4gaW5qZWN0b3IuZ2V0KE56VHJlZVNlbGVjdFNlcnZpY2UpO1xyXG59XHJcblxyXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAndHJlZVNlbGVjdCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LXRyZWUtc2VsZWN0JyxcclxuICBleHBvcnRBczogJ256VHJlZVNlbGVjdCcsXHJcbiAgYW5pbWF0aW9uczogW3NsaWRlTW90aW9uLCB6b29tTW90aW9uXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotdHJlZS1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgTnpUcmVlU2VsZWN0U2VydmljZSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTnpUcmVlSGlnaGVyT3JkZXJTZXJ2aWNlVG9rZW4sXHJcbiAgICAgIHVzZUZhY3Rvcnk6IGhpZ2hlck9yZGVyU2VydmljZUZhY3RvcnksXHJcbiAgICAgIGRlcHM6IFtbbmV3IFNlbGYoKSwgSW5qZWN0b3JdXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE56VHJlZVNlbGVjdENvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXSxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtbGddJzogJ256U2l6ZT09PVwibGFyZ2VcIicsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3Qtc21dJzogJ256U2l6ZT09PVwic21hbGxcIicsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtZW5hYmxlZF0nOiAnIW56RGlzYWJsZWQnLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWRpc2FibGVkXSc6ICduekRpc2FibGVkJyxcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1hbGxvdy1jbGVhcl0nOiAnbnpBbGxvd0NsZWFyJyxcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1vcGVuXSc6ICduek9wZW4nLFxyXG4gICAgJyhjbGljayknOiAndHJpZ2dlcigpJ1xyXG4gIH0sXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIC5hbnQtc2VsZWN0LWRyb3Bkb3duIHtcclxuICAgICAgICB0b3A6IDEwMCU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56VHJlZVNlbGVjdENvbXBvbmVudCBleHRlbmRzIE56VHJlZUJhc2UgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QWxsb3dDbGVhcjogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd0V4cGFuZDogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd0xpbmU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCB0cnVlKSBuekRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDaGVja2FibGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCBmYWxzZSkgbnpIaWRlVW5NYXRjaGVkOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIGZhbHNlKSBuelNob3dJY29uOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dTZWFyY2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekFzeW5jRGF0YSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuek11bHRpcGxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGVmYXVsdEV4cGFuZEFsbCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekNoZWNrU3RyaWN0bHkgPSBmYWxzZTtcclxuICBASW5wdXQoKSBuekV4cGFuZGVkSWNvbjogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56VHJlZU5vZGUgfT47XHJcbiAgQElucHV0KCkgbnpOb3RGb3VuZENvbnRlbnQ6IHN0cmluZztcclxuICBASW5wdXQoKSBuek5vZGVzOiBBcnJheTxOelRyZWVOb2RlIHwgTnpUcmVlTm9kZU9wdGlvbnM+ID0gW107XHJcbiAgQElucHV0KCkgbnpPcGVuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCAnZGVmYXVsdCcpIG56U2l6ZTogTnpTaXplTERTVHlwZTtcclxuICBASW5wdXQoKSBuelBsYWNlSG9sZGVyID0gJyc7XHJcbiAgQElucHV0KCkgbnpEcm9wZG93blN0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xyXG4gIC8qKlxyXG4gICAqIEBkZXByZWNhdGVkIDkuMC4wIC0gdXNlIGBuekV4cGFuZGVkS2V5c2AgaW5zdGVhZC5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekRlZmF1bHRFeHBhbmRlZEtleXModmFsdWU6IHN0cmluZ1tdKSB7XHJcbiAgICB3YXJuRGVwcmVjYXRpb24oYCduekRlZmF1bHRFeHBhbmRlZEtleXMnIHdvdWxkIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFBsZWFzZSB1c2UgJ256RXhwYW5kZWRLZXlzJyBpbnN0ZWFkLmApO1xyXG4gICAgdGhpcy5leHBhbmRlZEtleXMgPSB2YWx1ZTtcclxuICB9XHJcbiAgZ2V0IG56RGVmYXVsdEV4cGFuZGVkS2V5cygpOiBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5leHBhbmRlZEtleXM7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekV4cGFuZGVkS2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcclxuICAgIHRoaXMuZXhwYW5kZWRLZXlzID0gdmFsdWU7XHJcbiAgfVxyXG4gIGdldCBuekV4cGFuZGVkS2V5cygpOiBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5leHBhbmRlZEtleXM7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBuekRpc3BsYXlXaXRoOiAobm9kZTogTnpUcmVlTm9kZSkgPT4gc3RyaW5nIHwgdW5kZWZpbmVkID0gKG5vZGU6IE56VHJlZU5vZGUpID0+IG5vZGUudGl0bGU7XHJcbiAgQElucHV0KCkgbnpNYXhUYWdDb3VudDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIG56TWF4VGFnUGxhY2Vob2xkZXI6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelRyZWVOb2RlW10gfT47XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T3BlbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDbGVhcmVkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelJlbW92ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPE56VHJlZU5vZGU+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56RXhwYW5kQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpUcmVlQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelRyZWVDaGVja0JveENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2lucHV0RWxlbWVudCcsIHsgc3RhdGljOiBmYWxzZSB9KSBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XHJcbiAgQFZpZXdDaGlsZCgndHJlZVJlZicsIHsgc3RhdGljOiBmYWxzZSB9KSB0cmVlUmVmOiBOelRyZWVDb21wb25lbnQ7XHJcbiAgQFZpZXdDaGlsZChDZGtPdmVybGF5T3JpZ2luLCB7IHN0YXRpYzogdHJ1ZSB9KSBjZGtPdmVybGF5T3JpZ2luOiBDZGtPdmVybGF5T3JpZ2luO1xyXG4gIEBWaWV3Q2hpbGQoQ2RrQ29ubmVjdGVkT3ZlcmxheSwgeyBzdGF0aWM6IGZhbHNlIH0pIGNka0Nvbm5lY3RlZE92ZXJsYXk6IENka0Nvbm5lY3RlZE92ZXJsYXk7XHJcblxyXG4gIEBJbnB1dCgpIG56VHJlZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpUcmVlTm9kZSB9PjtcclxuICBAQ29udGVudENoaWxkKCduelRyZWVUZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pIG56VHJlZVRlbXBsYXRlQ2hpbGQ6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelRyZWVOb2RlIH0+O1xyXG4gIGdldCB0cmVlVGVtcGxhdGUoKTogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56VHJlZU5vZGUgfT4ge1xyXG4gICAgcmV0dXJuIHRoaXMubnpUcmVlVGVtcGxhdGUgfHwgdGhpcy5uelRyZWVUZW1wbGF0ZUNoaWxkO1xyXG4gIH1cclxuXHJcbiAgdHJpZ2dlcldpZHRoOiBudW1iZXI7XHJcbiAgaXNDb21wb3NpbmcgPSBmYWxzZTtcclxuICBpc0Rlc3Ryb3kgPSB0cnVlO1xyXG4gIGlzTm90Rm91bmQgPSBmYWxzZTtcclxuICBpbnB1dFZhbHVlID0gJyc7XHJcbiAgZHJvcERvd25Qb3NpdGlvbjogJ3RvcCcgfCAnY2VudGVyJyB8ICdib3R0b20nID0gJ2JvdHRvbSc7XHJcbiAgc2VsZWN0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgc2VsZWN0ZWROb2RlczogTnpUcmVlTm9kZVtdID0gW107XHJcbiAgZXhwYW5kZWRLZXlzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIHZhbHVlOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICBvbkNoYW5nZTogKHZhbHVlOiBzdHJpbmdbXSB8IHN0cmluZyB8IG51bGwpID0+IHZvaWQ7XHJcbiAgb25Ub3VjaGVkOiAoKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcclxuXHJcbiAgZ2V0IHBsYWNlSG9sZGVyRGlzcGxheSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5wdXRWYWx1ZSB8fCB0aGlzLmlzQ29tcG9zaW5nIHx8IHRoaXMuc2VsZWN0ZWROb2Rlcy5sZW5ndGggPyAnbm9uZScgOiAnYmxvY2snO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNlYXJjaERpc3BsYXkoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLm56T3BlbiA/ICdibG9jaycgOiAnbm9uZSc7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNNdWx0aXBsZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm56TXVsdGlwbGUgfHwgdGhpcy5uekNoZWNrYWJsZTtcclxuICB9XHJcblxyXG4gIGdldCBzZWxlY3RlZFZhbHVlRGlzcGxheSgpOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcclxuICAgIGxldCBzaG93U2VsZWN0ZWRWYWx1ZSA9IGZhbHNlO1xyXG4gICAgbGV0IG9wYWNpdHkgPSAxO1xyXG4gICAgaWYgKCF0aGlzLm56U2hvd1NlYXJjaCkge1xyXG4gICAgICBzaG93U2VsZWN0ZWRWYWx1ZSA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5uek9wZW4pIHtcclxuICAgICAgICBzaG93U2VsZWN0ZWRWYWx1ZSA9ICEodGhpcy5pbnB1dFZhbHVlIHx8IHRoaXMuaXNDb21wb3NpbmcpO1xyXG4gICAgICAgIGlmIChzaG93U2VsZWN0ZWRWYWx1ZSkge1xyXG4gICAgICAgICAgb3BhY2l0eSA9IDAuNDtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2hvd1NlbGVjdGVkVmFsdWUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkaXNwbGF5OiBzaG93U2VsZWN0ZWRWYWx1ZSA/ICdibG9jaycgOiAnbm9uZScsXHJcbiAgICAgIG9wYWNpdHk6IGAke29wYWNpdHl9YFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgbnpUcmVlU2VydmljZTogTnpUcmVlU2VsZWN0U2VydmljZSxcclxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG4gICkge1xyXG4gICAgc3VwZXIobnpUcmVlU2VydmljZSk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LXNlbGVjdCcpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzRGVzdHJveSA9IGZhbHNlO1xyXG4gICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2VTdWJzY3JpcHRpb24gPSB0aGlzLnN1YnNjcmliZVNlbGVjdGlvbkNoYW5nZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzRGVzdHJveSA9IHRydWU7XHJcbiAgICB0aGlzLmNsb3NlRHJvcERvd24oKTtcclxuICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMubnpEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgICB0aGlzLmNsb3NlRHJvcERvd24oKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCduek5vZGVzJykpIHtcclxuICAgICAgdGhpcy51cGRhdGVTZWxlY3RlZE5vZGVzKHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogc3RyaW5nW10gfCBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcclxuICAgICAgaWYgKHRoaXMuaXNNdWx0aXBsZSAmJiBBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gW3ZhbHVlIGFzIHN0cmluZ107XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy51cGRhdGVTZWxlY3RlZE5vZGVzKHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IFtdO1xyXG4gICAgICB0aGlzLnNlbGVjdGVkTm9kZXMuZm9yRWFjaChub2RlID0+IHtcclxuICAgICAgICB0aGlzLnJlbW92ZVNlbGVjdGVkKG5vZGUsIGZhbHNlKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWROb2RlcyA9IFtdO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogc3RyaW5nW10gfCBzdHJpbmcgfCBudWxsKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIHRyaWdnZXIoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uekRpc2FibGVkIHx8ICghdGhpcy5uekRpc2FibGVkICYmIHRoaXMubnpPcGVuKSkge1xyXG4gICAgICB0aGlzLmNsb3NlRHJvcERvd24oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMub3BlbkRyb3Bkb3duKCk7XHJcbiAgICAgIGlmICh0aGlzLm56U2hvd1NlYXJjaCB8fCB0aGlzLmlzTXVsdGlwbGUpIHtcclxuICAgICAgICB0aGlzLmZvY3VzT25JbnB1dCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvcGVuRHJvcGRvd24oKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMubnpEaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLm56T3BlbiA9IHRydWU7XHJcbiAgICAgIHRoaXMubnpPcGVuQ2hhbmdlLmVtaXQodGhpcy5uek9wZW4pO1xyXG4gICAgICB0aGlzLnVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlTdGF0dXMoKTtcclxuICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xvc2VEcm9wRG93bigpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkKCk7XHJcbiAgICB0aGlzLm56T3BlbiA9IGZhbHNlO1xyXG4gICAgdGhpcy5uek9wZW5DaGFuZ2UuZW1pdCh0aGlzLm56T3Blbik7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIG9uS2V5RG93bklucHV0KGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IGtleUNvZGUgPSBlLmtleUNvZGU7XHJcbiAgICBjb25zdCBldmVudFRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBpZiAodGhpcy5pc011bHRpcGxlICYmICFldmVudFRhcmdldC52YWx1ZSAmJiBrZXlDb2RlID09PSBCQUNLU1BBQ0UpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBpZiAodGhpcy5zZWxlY3RlZE5vZGVzLmxlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IHJlbW92ZU5vZGUgPSB0aGlzLnNlbGVjdGVkTm9kZXNbdGhpcy5zZWxlY3RlZE5vZGVzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlU2VsZWN0ZWQocmVtb3ZlTm9kZSk7XHJcbiAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlIS50cmlnZ2VyRXZlbnRDaGFuZ2UkIS5uZXh0KHtcclxuICAgICAgICAgIGV2ZW50TmFtZTogJ3JlbW92ZVNlbGVjdCcsXHJcbiAgICAgICAgICBub2RlOiByZW1vdmVOb2RlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uRXhwYW5kZWRLZXlzQ2hhbmdlKHZhbHVlOiBOekZvcm1hdEVtaXRFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5uekV4cGFuZENoYW5nZS5lbWl0KHZhbHVlKTtcclxuICAgIHRoaXMuZXhwYW5kZWRLZXlzID0gWy4uLnZhbHVlLmtleXMhXTtcclxuICB9XHJcblxyXG4gIHNldElucHV0VmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5pbnB1dFZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLnVwZGF0ZUlucHV0V2lkdGgoKTtcclxuICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZVNlbGVjdGVkKG5vZGU6IE56VHJlZU5vZGUsIGVtaXQ6IGJvb2xlYW4gPSB0cnVlLCBldmVudD86IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIG5vZGUuaXNTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgbm9kZS5pc0NoZWNrZWQgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLm56Q2hlY2thYmxlKSB7XHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jb25kdWN0KG5vZGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLnNldFNlbGVjdGVkTm9kZUxpc3Qobm9kZSwgdGhpcy5uek11bHRpcGxlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZW1pdCkge1xyXG4gICAgICB0aGlzLm56UmVtb3ZlZC5lbWl0KG5vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERvIG5vdCB0cmlnZ2VyIHRoZSBwb3B1cFxyXG4gICAgaWYgKGV2ZW50ICYmIGV2ZW50LnN0b3BQcm9wYWdhdGlvbikge1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvY3VzT25JbnB1dCgpOiB2b2lkIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3Vic2NyaWJlU2VsZWN0aW9uQ2hhbmdlKCk6IFN1YnNjcmlwdGlvbiB7XHJcbiAgICByZXR1cm4gbWVyZ2UoXHJcbiAgICAgIHRoaXMubnpUcmVlQ2xpY2sucGlwZShcclxuICAgICAgICB0YXAoKGV2ZW50OiBOekZvcm1hdEVtaXRFdmVudCkgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgbm9kZSA9IGV2ZW50Lm5vZGUhO1xyXG4gICAgICAgICAgaWYgKHRoaXMubnpDaGVja2FibGUgJiYgIW5vZGUuaXNEaXNhYmxlZCAmJiAhbm9kZS5pc0Rpc2FibGVDaGVja2JveCkge1xyXG4gICAgICAgICAgICBub2RlLmlzQ2hlY2tlZCA9ICFub2RlLmlzQ2hlY2tlZDtcclxuICAgICAgICAgICAgbm9kZS5pc0hhbGZDaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5uekNoZWNrU3RyaWN0bHkpIHtcclxuICAgICAgICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UuY29uZHVjdChub2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHRoaXMubnpDaGVja2FibGUpIHtcclxuICAgICAgICAgICAgbm9kZS5pc1NlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgZmlsdGVyKChldmVudDogTnpGb3JtYXRFbWl0RXZlbnQpID0+IHtcclxuICAgICAgICAgIGNvbnN0IG5vZGUgPSBldmVudC5ub2RlITtcclxuICAgICAgICAgIHJldHVybiB0aGlzLm56Q2hlY2thYmxlID8gIW5vZGUuaXNEaXNhYmxlZCAmJiAhbm9kZS5pc0Rpc2FibGVDaGVja2JveCA6ICFub2RlLmlzRGlzYWJsZWQgJiYgbm9kZS5pc1NlbGVjdGFibGU7XHJcbiAgICAgICAgfSlcclxuICAgICAgKSxcclxuICAgICAgdGhpcy5uekNoZWNrYWJsZSA/IHRoaXMubnpUcmVlQ2hlY2tCb3hDaGFuZ2UgOiBvYnNlcnZhYmxlT2YoKSxcclxuICAgICAgdGhpcy5uekNsZWFyZWQsXHJcbiAgICAgIHRoaXMubnpSZW1vdmVkXHJcbiAgICApLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMudXBkYXRlU2VsZWN0ZWROb2RlcygpO1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2VsZWN0ZWROb2Rlcy5tYXAobm9kZSA9PiBub2RlLmtleSEpO1xyXG4gICAgICB0aGlzLnZhbHVlID0gWy4uLnZhbHVlXTtcclxuICAgICAgaWYgKHRoaXMubnpTaG93U2VhcmNoIHx8IHRoaXMuaXNNdWx0aXBsZSkge1xyXG4gICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuaXNOb3RGb3VuZCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmlzTXVsdGlwbGUpIHtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcclxuICAgICAgICB0aGlzLmZvY3VzT25JbnB1dCgpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNsb3NlRHJvcERvd24oKTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlLmxlbmd0aCA/IHZhbHVlWzBdIDogbnVsbCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlU2VsZWN0ZWROb2Rlcyhpbml0OiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgIGlmIChpbml0KSB7XHJcbiAgICAgIGNvbnN0IG5vZGVzID0gdGhpcy5jb2VyY2VUcmVlTm9kZXModGhpcy5uek5vZGVzKTtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmlzTXVsdGlwbGUgPSB0aGlzLmlzTXVsdGlwbGU7XHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5pc0NoZWNrU3RyaWN0bHkgPSB0aGlzLm56Q2hlY2tTdHJpY3RseTtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmluaXRUcmVlKG5vZGVzKTtcclxuICAgICAgaWYgKHRoaXMubnpDaGVja2FibGUpIHtcclxuICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UuY2FsY0NoZWNrZWRLZXlzKHRoaXMudmFsdWUsIG5vZGVzLCB0aGlzLm56Q2hlY2tTdHJpY3RseSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNhbGNTZWxlY3RlZEtleXModGhpcy52YWx1ZSwgbm9kZXMsIHRoaXMuaXNNdWx0aXBsZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNlbGVjdGVkTm9kZXMgPSBbLi4uKHRoaXMubnpDaGVja2FibGUgPyB0aGlzLmdldENoZWNrZWROb2RlTGlzdCgpIDogdGhpcy5nZXRTZWxlY3RlZE5vZGVMaXN0KCkpXTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVBvc2l0aW9uKCk6IHZvaWQge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkgJiYgdGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Lm92ZXJsYXlSZWYpIHtcclxuICAgICAgICB0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkub3ZlcmxheVJlZi51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uUG9zaXRpb25DaGFuZ2UocG9zaXRpb246IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSk6IHZvaWQge1xyXG4gICAgdGhpcy5kcm9wRG93blBvc2l0aW9uID0gcG9zaXRpb24uY29ubmVjdGlvblBhaXIub3JpZ2luWTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUlucHV0V2lkdGgoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc011bHRpcGxlICYmIHRoaXMuaW5wdXRFbGVtZW50KSB7XHJcbiAgICAgIGlmICh0aGlzLmlucHV0VmFsdWUgfHwgdGhpcy5pc0NvbXBvc2luZykge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3dpZHRoJywgYCR7dGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxXaWR0aH1weGApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3dpZHRoJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ2xlYXJTZWxlY3Rpb24oJGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuc2VsZWN0ZWROb2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xyXG4gICAgICB0aGlzLnJlbW92ZVNlbGVjdGVkKG5vZGUsIGZhbHNlKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5uekNsZWFyZWQuZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgc2V0U2VhcmNoVmFsdWVzKCRldmVudDogTnpGb3JtYXRFbWl0RXZlbnQpOiB2b2lkIHtcclxuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICB0aGlzLmlzTm90Rm91bmQgPSAodGhpcy5uelNob3dTZWFyY2ggfHwgdGhpcy5pc011bHRpcGxlKSAmJiAhIXRoaXMuaW5wdXRWYWx1ZSAmJiAkZXZlbnQubWF0Y2hlZEtleXMhLmxlbmd0aCA9PT0gMDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVN0YXR1cygpOiB2b2lkIHtcclxuICAgIHRoaXMudHJpZ2dlcldpZHRoID0gdGhpcy5jZGtPdmVybGF5T3JpZ2luLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcclxuICB9XHJcblxyXG4gIHRyYWNrVmFsdWUoX2luZGV4OiBudW1iZXIsIG9wdGlvbjogTnpUcmVlTm9kZSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gb3B0aW9uLmtleSE7XHJcbiAgfVxyXG59XHJcbiIsIjxuZy10ZW1wbGF0ZSAjaW5wdXRUZW1wbGF0ZT5cclxuICA8aW5wdXRcclxuICAgICNpbnB1dEVsZW1lbnRcclxuICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXHJcbiAgICBjbGFzcz1cImFudC1zZWxlY3Qtc2VhcmNoX19maWVsZFwiXHJcbiAgICAoY29tcG9zaXRpb25zdGFydCk9XCJpc0NvbXBvc2luZyA9IHRydWVcIlxyXG4gICAgKGNvbXBvc2l0aW9uZW5kKT1cImlzQ29tcG9zaW5nID0gZmFsc2VcIlxyXG4gICAgKGtleWRvd24pPVwib25LZXlEb3duSW5wdXQoJGV2ZW50KVwiXHJcbiAgICBbbmdNb2RlbF09XCJpbnB1dFZhbHVlXCJcclxuICAgIChuZ01vZGVsQ2hhbmdlKT1cInNldElucHV0VmFsdWUoJGV2ZW50KVwiXHJcbiAgICBbZGlzYWJsZWRdPVwibnpEaXNhYmxlZFwiXHJcbiAgLz5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjxuZy10ZW1wbGF0ZVxyXG4gIGNka0Nvbm5lY3RlZE92ZXJsYXlcclxuICBuekNvbm5lY3RlZE92ZXJsYXlcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9yaWdpbl09XCJjZGtPdmVybGF5T3JpZ2luXCJcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9wZW5dPVwibnpPcGVuXCJcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheUhhc0JhY2tkcm9wXT1cInRydWVcIlxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5TWluV2lkdGhdPVwibnpEcm9wZG93bk1hdGNoU2VsZWN0V2lkdGggPyBudWxsIDogdHJpZ2dlcldpZHRoXCJcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheVdpZHRoXT1cIm56RHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoID8gdHJpZ2dlcldpZHRoIDogbnVsbFwiXHJcbiAgKGJhY2tkcm9wQ2xpY2spPVwiY2xvc2VEcm9wRG93bigpXCJcclxuICAoZGV0YWNoKT1cImNsb3NlRHJvcERvd24oKVwiXHJcbiAgKHBvc2l0aW9uQ2hhbmdlKT1cIm9uUG9zaXRpb25DaGFuZ2UoJGV2ZW50KVwiXHJcbj5cclxuICA8ZGl2XHJcbiAgICBjbGFzcz1cImFudC1zZWxlY3QtZHJvcGRvd24gYW50LXNlbGVjdC10cmVlLWRyb3Bkb3duXCJcclxuICAgIFtAc2xpZGVNb3Rpb25dPVwibnpPcGVuID8gZHJvcERvd25Qb3NpdGlvbiA6ICd2b2lkJ1wiXHJcbiAgICBbQC5kaXNhYmxlZF09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXHJcbiAgICBbbnpOb0FuaW1hdGlvbl09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXHJcbiAgICBbY2xhc3MuYW50LXNlbGVjdC1kcm9wZG93bi0tc2luZ2xlXT1cIiFuek11bHRpcGxlXCJcclxuICAgIFtjbGFzcy5hbnQtc2VsZWN0LWRyb3Bkb3duLS1tdWx0aXBsZV09XCJuek11bHRpcGxlXCJcclxuICAgIFtjbGFzcy5hbnQtc2VsZWN0LWRyb3Bkb3duLXBsYWNlbWVudC1ib3R0b21MZWZ0XT1cImRyb3BEb3duUG9zaXRpb24gPT09ICdib3R0b20nXCJcclxuICAgIFtjbGFzcy5hbnQtc2VsZWN0LWRyb3Bkb3duLXBsYWNlbWVudC10b3BMZWZ0XT1cImRyb3BEb3duUG9zaXRpb24gPT09ICd0b3AnXCJcclxuICAgIFtuZ1N0eWxlXT1cIm56RHJvcGRvd25TdHlsZVwiXHJcbiAgPlxyXG4gICAgPG56LXRyZWVcclxuICAgICAgI3RyZWVSZWZcclxuICAgICAgW2hpZGRlbl09XCJpc05vdEZvdW5kXCJcclxuICAgICAgbnpOb0FuaW1hdGlvblxyXG4gICAgICBuelNlbGVjdE1vZGVcclxuICAgICAgW256RGF0YV09XCJuek5vZGVzXCJcclxuICAgICAgW256TXVsdGlwbGVdPVwibnpNdWx0aXBsZVwiXHJcbiAgICAgIFtuelNlYXJjaFZhbHVlXT1cImlucHV0VmFsdWVcIlxyXG4gICAgICBbbnpIaWRlVW5NYXRjaGVkXT1cIm56SGlkZVVuTWF0Y2hlZFwiXHJcbiAgICAgIFtuelNob3dJY29uXT1cIm56U2hvd0ljb25cIlxyXG4gICAgICBbbnpDaGVja2FibGVdPVwibnpDaGVja2FibGVcIlxyXG4gICAgICBbbnpBc3luY0RhdGFdPVwibnpBc3luY0RhdGFcIlxyXG4gICAgICBbbnpTaG93RXhwYW5kXT1cIm56U2hvd0V4cGFuZFwiXHJcbiAgICAgIFtuelNob3dMaW5lXT1cIm56U2hvd0xpbmVcIlxyXG4gICAgICBbbnpFeHBhbmRlZEljb25dPVwibnpFeHBhbmRlZEljb25cIlxyXG4gICAgICBbbnpFeHBhbmRBbGxdPVwibnpEZWZhdWx0RXhwYW5kQWxsXCJcclxuICAgICAgW256RXhwYW5kZWRLZXlzXT1cImV4cGFuZGVkS2V5c1wiXHJcbiAgICAgIFtuekNoZWNrZWRLZXlzXT1cIm56Q2hlY2thYmxlID8gdmFsdWUgOiBbXVwiXHJcbiAgICAgIFtuelNlbGVjdGVkS2V5c109XCIhbnpDaGVja2FibGUgPyB2YWx1ZSA6IFtdXCJcclxuICAgICAgW256VHJlZVRlbXBsYXRlXT1cInRyZWVUZW1wbGF0ZVwiXHJcbiAgICAgIFtuekNoZWNrU3RyaWN0bHldPVwibnpDaGVja1N0cmljdGx5XCJcclxuICAgICAgKG56RXhwYW5kQ2hhbmdlKT1cIm9uRXhwYW5kZWRLZXlzQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICAobnpDbGljayk9XCJuelRyZWVDbGljay5lbWl0KCRldmVudClcIlxyXG4gICAgICAobnpDaGVja2VkS2V5c0NoYW5nZSk9XCJ1cGRhdGVTZWxlY3RlZE5vZGVzKClcIlxyXG4gICAgICAobnpTZWxlY3RlZEtleXNDaGFuZ2UpPVwidXBkYXRlU2VsZWN0ZWROb2RlcygpXCJcclxuICAgICAgKG56Q2hlY2tCb3hDaGFuZ2UpPVwibnpUcmVlQ2hlY2tCb3hDaGFuZ2UuZW1pdCgkZXZlbnQpXCJcclxuICAgICAgKG56U2VhcmNoVmFsdWVDaGFuZ2UpPVwic2V0U2VhcmNoVmFsdWVzKCRldmVudClcIlxyXG4gICAgPlxyXG4gICAgPC9uei10cmVlPlxyXG4gICAgPHNwYW4gKm5nSWY9XCJuek5vZGVzLmxlbmd0aCA9PT0gMCB8fCBpc05vdEZvdW5kXCIgY2xhc3M9XCJhbnQtc2VsZWN0LW5vdC1mb3VuZFwiPlxyXG4gICAgICA8bnotZW1iZWQtZW1wdHlcclxuICAgICAgICBbbnpDb21wb25lbnROYW1lXT1cIid0cmVlLXNlbGVjdCdcIlxyXG4gICAgICAgIFtzcGVjaWZpY0NvbnRlbnRdPVwibnpOb3RGb3VuZENvbnRlbnRcIlxyXG4gICAgICA+PC9uei1lbWJlZC1lbXB0eT5cclxuICAgIDwvc3Bhbj5cclxuICA8L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjxkaXZcclxuICBjZGtPdmVybGF5T3JpZ2luXHJcbiAgY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGlvblwiXHJcbiAgW2NsYXNzLmFudC1zZWxlY3Qtc2VsZWN0aW9uLS1zaW5nbGVdPVwiIWlzTXVsdGlwbGVcIlxyXG4gIFtjbGFzcy5hbnQtc2VsZWN0LXNlbGVjdGlvbi0tbXVsdGlwbGVdPVwiaXNNdWx0aXBsZVwiXHJcbiAgdGFiaW5kZXg9XCIwXCJcclxuPlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXNNdWx0aXBsZVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uX19yZW5kZXJlZFwiPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgKm5nSWY9XCJuelBsYWNlSG9sZGVyICYmIHNlbGVjdGVkTm9kZXMubGVuZ3RoID09PSAwXCJcclxuICAgICAgICBbc3R5bGUuZGlzcGxheV09XCJwbGFjZUhvbGRlckRpc3BsYXlcIlxyXG4gICAgICAgIGNsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3Rpb25fX3BsYWNlaG9sZGVyXCJcclxuICAgICAgPlxyXG4gICAgICAgIHt7IG56UGxhY2VIb2xkZXIgfX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgKm5nSWY9XCJzZWxlY3RlZE5vZGVzLmxlbmd0aCA9PT0gMVwiXHJcbiAgICAgICAgY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGlvbi1zZWxlY3RlZC12YWx1ZVwiXHJcbiAgICAgICAgW2F0dHIudGl0bGVdPVwibnpEaXNwbGF5V2l0aChzZWxlY3RlZE5vZGVzWzBdKVwiXHJcbiAgICAgICAgW25nU3R5bGVdPVwic2VsZWN0ZWRWYWx1ZURpc3BsYXlcIlxyXG4gICAgICA+XHJcbiAgICAgICAge3sgbnpEaXNwbGF5V2l0aChzZWxlY3RlZE5vZGVzWzBdKSB9fVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXZcclxuICAgICAgICAqbmdJZj1cIm56U2hvd1NlYXJjaFwiXHJcbiAgICAgICAgW3N0eWxlLmRpc3BsYXldPVwic2VhcmNoRGlzcGxheVwiXHJcbiAgICAgICAgY2xhc3M9XCJhbnQtc2VsZWN0LXNlYXJjaCBhbnQtc2VsZWN0LXNlYXJjaC0taW5saW5lXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtc2VsZWN0LXNlYXJjaF9fZmllbGRfX3dyYXBcIj5cclxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJpbnB1dFRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYW50LXNlbGVjdC1zZWFyY2hfX2ZpZWxkX19taXJyb3JcIj57eyBpbnB1dFZhbHVlIH19Jm5ic3A7PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc011bHRpcGxlXCI+XHJcbiAgICA8dWwgY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGlvbl9fcmVuZGVyZWRcIj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgICpuZ0lmPVwibnpQbGFjZUhvbGRlciAmJiBzZWxlY3RlZE5vZGVzLmxlbmd0aCA9PT0gMFwiXHJcbiAgICAgICAgW3N0eWxlLmRpc3BsYXldPVwicGxhY2VIb2xkZXJEaXNwbGF5XCJcclxuICAgICAgICBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uX19wbGFjZWhvbGRlclwiXHJcbiAgICAgID5cclxuICAgICAgICB7eyBuelBsYWNlSG9sZGVyIH19XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8bmctY29udGFpbmVyXHJcbiAgICAgICAgKm5nRm9yPVwibGV0IG5vZGUgb2Ygc2VsZWN0ZWROb2RlcyB8IHNsaWNlOiAwOm56TWF4VGFnQ291bnQ7IHRyYWNrQnk6IHRyYWNrVmFsdWVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGxpXHJcbiAgICAgICAgICBbQHpvb21Nb3Rpb25dXHJcbiAgICAgICAgICBbQC5kaXNhYmxlZF09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXHJcbiAgICAgICAgICBbbnpOb0FuaW1hdGlvbl09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXHJcbiAgICAgICAgICBbYXR0ci50aXRsZV09XCJuekRpc3BsYXlXaXRoKG5vZGUpXCJcclxuICAgICAgICAgIFtjbGFzcy5hbnQtc2VsZWN0LXNlbGVjdGlvbl9fY2hvaWNlX19kaXNhYmxlZF09XCJub2RlLmlzRGlzYWJsZWRcIlxyXG4gICAgICAgICAgY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGlvbl9fY2hvaWNlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAqbmdJZj1cIiFub2RlLmlzRGlzYWJsZWRcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uX19jaG9pY2VfX3JlbW92ZVwiXHJcbiAgICAgICAgICAgIChtb3VzZWRvd24pPVwiJGV2ZW50LnByZXZlbnREZWZhdWx0KClcIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwicmVtb3ZlU2VsZWN0ZWQobm9kZSwgdHJ1ZSwgJGV2ZW50KVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwiY2xvc2VcIiBjbGFzcz1cImFudC1zZWxlY3QtcmVtb3ZlLWljb25cIj48L2k+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uX19jaG9pY2VfX2NvbnRlbnRcIj57eyBuekRpc3BsYXlXaXRoKG5vZGUpIH19PC9zcGFuPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bGlcclxuICAgICAgICBbQHpvb21Nb3Rpb25dXHJcbiAgICAgICAgKm5nSWY9XCJzZWxlY3RlZE5vZGVzLmxlbmd0aCA+IG56TWF4VGFnQ291bnRcIlxyXG4gICAgICAgIGNsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3Rpb25fX2Nob2ljZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3Rpb25fX2Nob2ljZV9fY29udGVudFwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm56TWF4VGFnUGxhY2Vob2xkZXJcIj5cclxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlXHJcbiAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwibnpNYXhUYWdQbGFjZWhvbGRlclwiXHJcbiAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBzZWxlY3RlZE5vZGVzIHwgc2xpY2U6IG56TWF4VGFnQ291bnQgfVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFuek1heFRhZ1BsYWNlaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICsge3sgc2VsZWN0ZWROb2Rlcy5sZW5ndGggLSBuek1heFRhZ0NvdW50IH19IC4uLlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaSBjbGFzcz1cImFudC1zZWxlY3Qtc2VhcmNoIGFudC1zZWxlY3Qtc2VhcmNoLS1pbmxpbmVcIj5cclxuICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiaW5wdXRUZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L3VsPlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG4gIDxzcGFuXHJcbiAgICAqbmdJZj1cIm56QWxsb3dDbGVhclwiXHJcbiAgICBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uX19jbGVhclwiXHJcbiAgICAobW91c2Vkb3duKT1cIiRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCJcclxuICAgIChjbGljayk9XCJvbkNsZWFyU2VsZWN0aW9uKCRldmVudClcIlxyXG4gID5cclxuICAgIDxpIG56LWljb24gbnpUeXBlPVwiY2xvc2UtY2lyY2xlXCIgY2xhc3M9XCJhbnQtc2VsZWN0LWNsZWFyLWljb25cIiBuelRoZW1lPVwiZmlsbFwiPjwvaT5cclxuICA8L3NwYW4+XHJcbiAgPHNwYW4gKm5nSWY9XCIhaXNNdWx0aXBsZVwiIGNsYXNzPVwiYW50LXNlbGVjdC1hcnJvd1wiPlxyXG4gICAgPGkgbnotaWNvbiBuelR5cGU9XCJkb3duXCIgY2xhc3M9XCJhbnQtc2VsZWN0LWFycm93LWljb25cIj48L2k+XHJcbiAgPC9zcGFuPlxyXG48L2Rpdj5cclxuIl19