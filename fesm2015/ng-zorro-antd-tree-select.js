import { __decorate, __metadata } from 'tslib';
import { BACKSPACE } from '@angular/cdk/keycodes';
import { CdkOverlayOrigin, CdkConnectedOverlay, OverlayModule } from '@angular/cdk/overlay';
import { ɵɵdefineInjectable, ɵɵgetInheritedFactory, ɵsetClassMetadata, Injectable, ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵelementEnd, ɵɵproperty, ɵɵelement, ɵɵadvance, ɵɵtemplate, ɵɵclassProp, ɵɵpureFunction0, ɵɵtext, ɵɵstyleProp, ɵɵtextInterpolate1, ɵɵattribute, ɵɵreference, ɵɵelementContainerStart, ɵɵelementContainerEnd, ɵɵtextInterpolate, ɵɵpipe, ɵɵpureFunction1, ɵɵpipeBind2, ɵɵpipeBind3, EventEmitter, ɵɵdirectiveInject, Renderer2, ChangeDetectorRef, ElementRef, ɵɵdefineComponent, ɵɵstaticContentQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵviewQuery, ɵɵstaticViewQuery, ɵɵallocHostVars, ɵɵProvidersFeature, Self, Injector, forwardRef, ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature, ɵɵtemplateRefExtractor, Component, Host, Optional, Input, Output, ViewChild, ContentChild, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, DefaultValueAccessor, NgControlStatus, NgModel, FormsModule } from '@angular/forms';
import { merge, of } from 'rxjs';
import { tap, filter } from 'rxjs/operators';
import { NzTreeBaseService, NzTreeBase, warnDeprecation, isNotNil, NzConfigService, NzNoAnimationDirective, NzTreeHigherOrderServiceToken, NzConnectedOverlayDirective, slideMotion, zoomMotion, InputBoolean, WithConfig, NzOverlayModule, NzNoAnimationModule } from 'ng-zorro-antd/core';
import { NzTreeComponent, NzTreeModule } from 'ng-zorro-antd/tree';
import { NgIf, NgStyle, NgTemplateOutlet, NgForOf, SlicePipe, CommonModule } from '@angular/common';
import { NzEmbedEmptyComponent, NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTreeSelectService extends NzTreeBaseService {
}
/** @nocollapse */ NzTreeSelectService.ɵfac = function NzTreeSelectService_Factory(t) { return ɵNzTreeSelectService_BaseFactory(t || NzTreeSelectService); };
/** @nocollapse */ NzTreeSelectService.ɵprov = ɵɵdefineInjectable({ token: NzTreeSelectService, factory: NzTreeSelectService.ɵfac });
const ɵNzTreeSelectService_BaseFactory = ɵɵgetInheritedFactory(NzTreeSelectService);
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzTreeSelectService, [{
        type: Injectable
    }], null, null); })();

const _c0 = ["nzTreeTemplate"];
const _c1 = ["inputElement"];
const _c2 = ["treeRef"];
function NzTreeSelectComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r1633 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 6, 7);
    ɵɵlistener("compositionstart", function NzTreeSelectComponent_ng_template_0_Template_input_compositionstart_0_listener($event) { ɵɵrestoreView(_r1633); const ctx_r1632 = ɵɵnextContext(); return ctx_r1632.isComposing = true; })("compositionend", function NzTreeSelectComponent_ng_template_0_Template_input_compositionend_0_listener($event) { ɵɵrestoreView(_r1633); const ctx_r1634 = ɵɵnextContext(); return ctx_r1634.isComposing = false; })("keydown", function NzTreeSelectComponent_ng_template_0_Template_input_keydown_0_listener($event) { ɵɵrestoreView(_r1633); const ctx_r1635 = ɵɵnextContext(); return ctx_r1635.onKeyDownInput($event); })("ngModelChange", function NzTreeSelectComponent_ng_template_0_Template_input_ngModelChange_0_listener($event) { ɵɵrestoreView(_r1633); const ctx_r1636 = ɵɵnextContext(); return ctx_r1636.setInputValue($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1625 = ɵɵnextContext();
    ɵɵproperty("ngModel", ctx_r1625.inputValue)("disabled", ctx_r1625.nzDisabled);
} }
function NzTreeSelectComponent_ng_template_2_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 12);
    ɵɵelement(1, "nz-embed-empty", 13);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1638 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("nzComponentName", "tree-select")("specificContent", ctx_r1638.nzNotFoundContent);
} }
const _c3 = function () { return []; };
function NzTreeSelectComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r1640 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 8);
    ɵɵelementStart(1, "nz-tree", 9, 10);
    ɵɵlistener("nzExpandChange", function NzTreeSelectComponent_ng_template_2_Template_nz_tree_nzExpandChange_1_listener($event) { ɵɵrestoreView(_r1640); const ctx_r1639 = ɵɵnextContext(); return ctx_r1639.onExpandedKeysChange($event); })("nzClick", function NzTreeSelectComponent_ng_template_2_Template_nz_tree_nzClick_1_listener($event) { ɵɵrestoreView(_r1640); const ctx_r1641 = ɵɵnextContext(); return ctx_r1641.nzTreeClick.emit($event); })("nzCheckedKeysChange", function NzTreeSelectComponent_ng_template_2_Template_nz_tree_nzCheckedKeysChange_1_listener($event) { ɵɵrestoreView(_r1640); const ctx_r1642 = ɵɵnextContext(); return ctx_r1642.updateSelectedNodes(); })("nzSelectedKeysChange", function NzTreeSelectComponent_ng_template_2_Template_nz_tree_nzSelectedKeysChange_1_listener($event) { ɵɵrestoreView(_r1640); const ctx_r1643 = ɵɵnextContext(); return ctx_r1643.updateSelectedNodes(); })("nzCheckBoxChange", function NzTreeSelectComponent_ng_template_2_Template_nz_tree_nzCheckBoxChange_1_listener($event) { ɵɵrestoreView(_r1640); const ctx_r1644 = ɵɵnextContext(); return ctx_r1644.nzTreeCheckBoxChange.emit($event); })("nzSearchValueChange", function NzTreeSelectComponent_ng_template_2_Template_nz_tree_nzSearchValueChange_1_listener($event) { ɵɵrestoreView(_r1640); const ctx_r1645 = ɵɵnextContext(); return ctx_r1645.setSearchValues($event); });
    ɵɵelementEnd();
    ɵɵtemplate(3, NzTreeSelectComponent_ng_template_2_span_3_Template, 2, 2, "span", 11);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1626 = ɵɵnextContext();
    ɵɵclassProp("ant-select-dropdown--single", !ctx_r1626.nzMultiple)("ant-select-dropdown--multiple", ctx_r1626.nzMultiple)("ant-select-dropdown-placement-bottomLeft", ctx_r1626.dropDownPosition === "bottom")("ant-select-dropdown-placement-topLeft", ctx_r1626.dropDownPosition === "top");
    ɵɵproperty("@slideMotion", ctx_r1626.nzOpen ? ctx_r1626.dropDownPosition : "void")("@.disabled", ctx_r1626.noAnimation == null ? null : ctx_r1626.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r1626.noAnimation == null ? null : ctx_r1626.noAnimation.nzNoAnimation)("ngStyle", ctx_r1626.nzDropdownStyle);
    ɵɵadvance(1);
    ɵɵproperty("hidden", ctx_r1626.isNotFound)("nzData", ctx_r1626.nzNodes)("nzMultiple", ctx_r1626.nzMultiple)("nzSearchValue", ctx_r1626.inputValue)("nzHideUnMatched", ctx_r1626.nzHideUnMatched)("nzShowIcon", ctx_r1626.nzShowIcon)("nzCheckable", ctx_r1626.nzCheckable)("nzAsyncData", ctx_r1626.nzAsyncData)("nzShowExpand", ctx_r1626.nzShowExpand)("nzShowLine", ctx_r1626.nzShowLine)("nzExpandedIcon", ctx_r1626.nzExpandedIcon)("nzExpandAll", ctx_r1626.nzDefaultExpandAll)("nzExpandedKeys", ctx_r1626.expandedKeys)("nzCheckedKeys", ctx_r1626.nzCheckable ? ctx_r1626.value : ɵɵpureFunction0(26, _c3))("nzSelectedKeys", !ctx_r1626.nzCheckable ? ctx_r1626.value : ɵɵpureFunction0(27, _c3))("nzTreeTemplate", ctx_r1626.treeTemplate)("nzCheckStrictly", ctx_r1626.nzCheckStrictly);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1626.nzNodes.length === 0 || ctx_r1626.isNotFound);
} }
function NzTreeSelectComponent_ng_container_4_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 18);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1646 = ɵɵnextContext(2);
    ɵɵstyleProp("display", ctx_r1646.placeHolderDisplay);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r1646.nzPlaceHolder, " ");
} }
function NzTreeSelectComponent_ng_container_4_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 19);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1647 = ɵɵnextContext(2);
    ɵɵproperty("ngStyle", ctx_r1647.selectedValueDisplay);
    ɵɵattribute("title", ctx_r1647.nzDisplayWith(ctx_r1647.selectedNodes[0]));
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r1647.nzDisplayWith(ctx_r1647.selectedNodes[0]), " ");
} }
function NzTreeSelectComponent_ng_container_4_div_4_ng_template_2_Template(rf, ctx) { }
function NzTreeSelectComponent_ng_container_4_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 20);
    ɵɵelementStart(1, "div", 21);
    ɵɵtemplate(2, NzTreeSelectComponent_ng_container_4_div_4_ng_template_2_Template, 0, 0, "ng-template", 22);
    ɵɵelementStart(3, "span", 23);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1648 = ɵɵnextContext(2);
    const _r1624 = ɵɵreference(1);
    ɵɵstyleProp("display", ctx_r1648.searchDisplay);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", _r1624);
    ɵɵadvance(2);
    ɵɵtextInterpolate1("", ctx_r1648.inputValue, "\u00A0");
} }
function NzTreeSelectComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 14);
    ɵɵtemplate(2, NzTreeSelectComponent_ng_container_4_div_2_Template, 2, 2, "div", 15);
    ɵɵtemplate(3, NzTreeSelectComponent_ng_container_4_div_3_Template, 2, 3, "div", 16);
    ɵɵtemplate(4, NzTreeSelectComponent_ng_container_4_div_4_Template, 5, 3, "div", 17);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1627 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1627.nzPlaceHolder && ctx_r1627.selectedNodes.length === 0);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1627.selectedNodes.length === 1);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1627.nzShowSearch);
} }
function NzTreeSelectComponent_ng_container_5_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 18);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1650 = ɵɵnextContext(2);
    ɵɵstyleProp("display", ctx_r1650.placeHolderDisplay);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r1650.nzPlaceHolder, " ");
} }
function NzTreeSelectComponent_ng_container_5_ng_container_3_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r1657 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 29);
    ɵɵlistener("mousedown", function NzTreeSelectComponent_ng_container_5_ng_container_3_span_2_Template_span_mousedown_0_listener($event) { ɵɵrestoreView(_r1657); return $event.preventDefault(); })("click", function NzTreeSelectComponent_ng_container_5_ng_container_3_span_2_Template_span_click_0_listener($event) { ɵɵrestoreView(_r1657); const node_r1654 = ɵɵnextContext().$implicit; const ctx_r1658 = ɵɵnextContext(2); return ctx_r1658.removeSelected(node_r1654, true, $event); });
    ɵɵelement(1, "i", 30);
    ɵɵelementEnd();
} }
function NzTreeSelectComponent_ng_container_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "li", 26);
    ɵɵtemplate(2, NzTreeSelectComponent_ng_container_5_ng_container_3_span_2_Template, 2, 0, "span", 27);
    ɵɵelementStart(3, "span", 28);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const node_r1654 = ctx.$implicit;
    const ctx_r1651 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵclassProp("ant-select-selection__choice__disabled", node_r1654.isDisabled);
    ɵɵproperty("@zoomMotion", undefined)("@.disabled", ctx_r1651.noAnimation == null ? null : ctx_r1651.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r1651.noAnimation == null ? null : ctx_r1651.noAnimation.nzNoAnimation);
    ɵɵattribute("title", ctx_r1651.nzDisplayWith(node_r1654));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !node_r1654.isDisabled);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1651.nzDisplayWith(node_r1654));
} }
function NzTreeSelectComponent_ng_container_5_li_5_ng_container_2_ng_template_1_Template(rf, ctx) { }
const _c4 = function (a0) { return { $implicit: a0 }; };
function NzTreeSelectComponent_ng_container_5_li_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzTreeSelectComponent_ng_container_5_li_5_ng_container_2_ng_template_1_Template, 0, 0, "ng-template", 32);
    ɵɵpipe(2, "slice");
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1660 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r1660.nzMaxTagPlaceholder)("ngTemplateOutletContext", ɵɵpureFunction1(5, _c4, ɵɵpipeBind2(2, 2, ctx_r1660.selectedNodes, ctx_r1660.nzMaxTagCount)));
} }
function NzTreeSelectComponent_ng_container_5_li_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1661 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" + ", ctx_r1661.selectedNodes.length - ctx_r1661.nzMaxTagCount, " ... ");
} }
function NzTreeSelectComponent_ng_container_5_li_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li", 31);
    ɵɵelementStart(1, "div", 28);
    ɵɵtemplate(2, NzTreeSelectComponent_ng_container_5_li_5_ng_container_2_Template, 3, 7, "ng-container", 3);
    ɵɵtemplate(3, NzTreeSelectComponent_ng_container_5_li_5_ng_container_3_Template, 2, 1, "ng-container", 3);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1652 = ɵɵnextContext(2);
    ɵɵproperty("@zoomMotion", undefined);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1652.nzMaxTagPlaceholder);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r1652.nzMaxTagPlaceholder);
} }
function NzTreeSelectComponent_ng_container_5_ng_template_7_Template(rf, ctx) { }
function NzTreeSelectComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "ul", 14);
    ɵɵtemplate(2, NzTreeSelectComponent_ng_container_5_div_2_Template, 2, 2, "div", 15);
    ɵɵtemplate(3, NzTreeSelectComponent_ng_container_5_ng_container_3_Template, 5, 7, "ng-container", 24);
    ɵɵpipe(4, "slice");
    ɵɵtemplate(5, NzTreeSelectComponent_ng_container_5_li_5_Template, 4, 3, "li", 25);
    ɵɵelementStart(6, "li", 20);
    ɵɵtemplate(7, NzTreeSelectComponent_ng_container_5_ng_template_7_Template, 0, 0, "ng-template", 22);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1628 = ɵɵnextContext();
    const _r1624 = ɵɵreference(1);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1628.nzPlaceHolder && ctx_r1628.selectedNodes.length === 0);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ɵɵpipeBind3(4, 5, ctx_r1628.selectedNodes, 0, ctx_r1628.nzMaxTagCount))("ngForTrackBy", ctx_r1628.trackValue);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1628.selectedNodes.length > ctx_r1628.nzMaxTagCount);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", _r1624);
} }
function NzTreeSelectComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r1664 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 33);
    ɵɵlistener("mousedown", function NzTreeSelectComponent_span_6_Template_span_mousedown_0_listener($event) { ɵɵrestoreView(_r1664); return $event.preventDefault(); })("click", function NzTreeSelectComponent_span_6_Template_span_click_0_listener($event) { ɵɵrestoreView(_r1664); const ctx_r1665 = ɵɵnextContext(); return ctx_r1665.onClearSelection($event); });
    ɵɵelement(1, "i", 34);
    ɵɵelementEnd();
} }
function NzTreeSelectComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 35);
    ɵɵelement(1, "i", 36);
    ɵɵelementEnd();
} }
function higherOrderServiceFactory(injector) {
    return injector.get(NzTreeSelectService);
}
const NZ_CONFIG_COMPONENT_NAME = 'treeSelect';
class NzTreeSelectComponent extends NzTreeBase {
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
        })), this.nzCheckable ? this.nzTreeCheckBoxChange : of(), this.nzCleared, this.nzRemoved).subscribe(() => {
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
/** @nocollapse */ NzTreeSelectComponent.ɵfac = function NzTreeSelectComponent_Factory(t) { return new (t || NzTreeSelectComponent)(ɵɵdirectiveInject(NzTreeSelectService), ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NzNoAnimationDirective, 9)); };
/** @nocollapse */ NzTreeSelectComponent.ɵcmp = ɵɵdefineComponent({ type: NzTreeSelectComponent, selectors: [["nz-tree-select"]], contentQueries: function NzTreeSelectComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵɵstaticContentQuery(dirIndex, _c0, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzTreeTemplateChild = _t.first);
    } }, viewQuery: function NzTreeSelectComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c1, true);
        ɵɵviewQuery(_c2, true);
        ɵɵstaticViewQuery(CdkOverlayOrigin, true);
        ɵɵviewQuery(CdkConnectedOverlay, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputElement = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.treeRef = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cdkOverlayOrigin = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cdkConnectedOverlay = _t.first);
    } }, hostBindings: function NzTreeSelectComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        ɵɵallocHostVars(6);
        ɵɵlistener("click", function NzTreeSelectComponent_click_HostBindingHandler($event) { return ctx.trigger(); });
    } if (rf & 2) {
        ɵɵclassProp("ant-select-lg", ctx.nzSize === "large")("ant-select-sm", ctx.nzSize === "small")("ant-select-enabled", !ctx.nzDisabled)("ant-select-disabled", ctx.nzDisabled)("ant-select-allow-clear", ctx.nzAllowClear)("ant-select-open", ctx.nzOpen);
    } }, inputs: { nzAllowClear: "nzAllowClear", nzShowExpand: "nzShowExpand", nzShowLine: "nzShowLine", nzDropdownMatchSelectWidth: "nzDropdownMatchSelectWidth", nzCheckable: "nzCheckable", nzHideUnMatched: "nzHideUnMatched", nzShowIcon: "nzShowIcon", nzShowSearch: "nzShowSearch", nzDisabled: "nzDisabled", nzAsyncData: "nzAsyncData", nzMultiple: "nzMultiple", nzDefaultExpandAll: "nzDefaultExpandAll", nzCheckStrictly: "nzCheckStrictly", nzExpandedIcon: "nzExpandedIcon", nzNotFoundContent: "nzNotFoundContent", nzNodes: "nzNodes", nzOpen: "nzOpen", nzSize: "nzSize", nzPlaceHolder: "nzPlaceHolder", nzDropdownStyle: "nzDropdownStyle", nzDefaultExpandedKeys: "nzDefaultExpandedKeys", nzExpandedKeys: "nzExpandedKeys", nzDisplayWith: "nzDisplayWith", nzMaxTagCount: "nzMaxTagCount", nzMaxTagPlaceholder: "nzMaxTagPlaceholder", nzTreeTemplate: "nzTreeTemplate" }, outputs: { nzOpenChange: "nzOpenChange", nzCleared: "nzCleared", nzRemoved: "nzRemoved", nzExpandChange: "nzExpandChange", nzTreeClick: "nzTreeClick", nzTreeCheckBoxChange: "nzTreeCheckBoxChange" }, exportAs: ["nzTreeSelect"], features: [ɵɵProvidersFeature([
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
        ]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature()], decls: 8, vars: 11, consts: [["inputTemplate", ""], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayWidth", "backdropClick", "detach", "positionChange"], ["cdkOverlayOrigin", "", "tabindex", "0", 1, "ant-select-selection"], [4, "ngIf"], ["class", "ant-select-selection__clear", 3, "mousedown", "click", 4, "ngIf"], ["class", "ant-select-arrow", 4, "ngIf"], ["autocomplete", "off", 1, "ant-select-search__field", 3, "ngModel", "disabled", "compositionstart", "compositionend", "keydown", "ngModelChange"], ["inputElement", ""], [1, "ant-select-dropdown", "ant-select-tree-dropdown", 3, "nzNoAnimation", "ngStyle"], ["nzNoAnimation", "", "nzSelectMode", "", 3, "hidden", "nzData", "nzMultiple", "nzSearchValue", "nzHideUnMatched", "nzShowIcon", "nzCheckable", "nzAsyncData", "nzShowExpand", "nzShowLine", "nzExpandedIcon", "nzExpandAll", "nzExpandedKeys", "nzCheckedKeys", "nzSelectedKeys", "nzTreeTemplate", "nzCheckStrictly", "nzExpandChange", "nzClick", "nzCheckedKeysChange", "nzSelectedKeysChange", "nzCheckBoxChange", "nzSearchValueChange"], ["treeRef", ""], ["class", "ant-select-not-found", 4, "ngIf"], [1, "ant-select-not-found"], [3, "nzComponentName", "specificContent"], [1, "ant-select-selection__rendered"], ["class", "ant-select-selection__placeholder", 3, "display", 4, "ngIf"], ["class", "ant-select-selection-selected-value", 3, "ngStyle", 4, "ngIf"], ["class", "ant-select-search ant-select-search--inline", 3, "display", 4, "ngIf"], [1, "ant-select-selection__placeholder"], [1, "ant-select-selection-selected-value", 3, "ngStyle"], [1, "ant-select-search", "ant-select-search--inline"], [1, "ant-select-search__field__wrap"], [3, "ngTemplateOutlet"], [1, "ant-select-search__field__mirror"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "ant-select-selection__choice", 4, "ngIf"], [1, "ant-select-selection__choice", 3, "nzNoAnimation"], ["class", "ant-select-selection__choice__remove", 3, "mousedown", "click", 4, "ngIf"], [1, "ant-select-selection__choice__content"], [1, "ant-select-selection__choice__remove", 3, "mousedown", "click"], ["nz-icon", "", "nzType", "close", 1, "ant-select-remove-icon"], [1, "ant-select-selection__choice"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-select-selection__clear", 3, "mousedown", "click"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", 1, "ant-select-clear-icon"], [1, "ant-select-arrow"], ["nz-icon", "", "nzType", "down", 1, "ant-select-arrow-icon"]], template: function NzTreeSelectComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, NzTreeSelectComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        ɵɵtemplate(2, NzTreeSelectComponent_ng_template_2_Template, 4, 28, "ng-template", 1);
        ɵɵlistener("backdropClick", function NzTreeSelectComponent_Template_ng_template_backdropClick_2_listener($event) { return ctx.closeDropDown(); })("detach", function NzTreeSelectComponent_Template_ng_template_detach_2_listener($event) { return ctx.closeDropDown(); })("positionChange", function NzTreeSelectComponent_Template_ng_template_positionChange_2_listener($event) { return ctx.onPositionChange($event); });
        ɵɵelementStart(3, "div", 2);
        ɵɵtemplate(4, NzTreeSelectComponent_ng_container_4_Template, 5, 3, "ng-container", 3);
        ɵɵtemplate(5, NzTreeSelectComponent_ng_container_5_Template, 8, 9, "ng-container", 3);
        ɵɵtemplate(6, NzTreeSelectComponent_span_6_Template, 2, 0, "span", 4);
        ɵɵtemplate(7, NzTreeSelectComponent_span_7_Template, 2, 0, "span", 5);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵproperty("cdkConnectedOverlayOrigin", ctx.cdkOverlayOrigin)("cdkConnectedOverlayOpen", ctx.nzOpen)("cdkConnectedOverlayHasBackdrop", true)("cdkConnectedOverlayMinWidth", ctx.nzDropdownMatchSelectWidth ? null : ctx.triggerWidth)("cdkConnectedOverlayWidth", ctx.nzDropdownMatchSelectWidth ? ctx.triggerWidth : null);
        ɵɵadvance(1);
        ɵɵclassProp("ant-select-selection--single", !ctx.isMultiple)("ant-select-selection--multiple", ctx.isMultiple);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.isMultiple);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.isMultiple);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.nzAllowClear);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.isMultiple);
    } }, directives: [CdkConnectedOverlay, NzConnectedOverlayDirective, CdkOverlayOrigin, NgIf, DefaultValueAccessor, NgControlStatus, NgModel, NzNoAnimationDirective, NgStyle, NzTreeComponent, NzEmbedEmptyComponent, NgTemplateOutlet, NgForOf, NzIconDirective], pipes: [SlicePipe], styles: [".ant-select-dropdown[_ngcontent-%COMP%] {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n        overflow: auto;\n      }"], data: { animation: [slideMotion, zoomMotion] } });
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
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzTreeSelectComponent, [{
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
    }], function () { return [{ type: NzTreeSelectService }, { type: NzConfigService }, { type: Renderer2 }, { type: ChangeDetectorRef }, { type: ElementRef }, { type: NzNoAnimationDirective, decorators: [{
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

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTreeSelectModule {
}
/** @nocollapse */ NzTreeSelectModule.ɵmod = ɵɵdefineNgModule({ type: NzTreeSelectModule });
/** @nocollapse */ NzTreeSelectModule.ɵinj = ɵɵdefineInjector({ factory: function NzTreeSelectModule_Factory(t) { return new (t || NzTreeSelectModule)(); }, imports: [[CommonModule, OverlayModule, FormsModule, NzTreeModule, NzIconModule, NzEmptyModule, NzOverlayModule, NzNoAnimationModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzTreeSelectModule, { declarations: [NzTreeSelectComponent], imports: [CommonModule, OverlayModule, FormsModule, NzTreeModule, NzIconModule, NzEmptyModule, NzOverlayModule, NzNoAnimationModule], exports: [NzTreeSelectComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzTreeSelectModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, OverlayModule, FormsModule, NzTreeModule, NzIconModule, NzEmptyModule, NzOverlayModule, NzNoAnimationModule],
                declarations: [NzTreeSelectComponent],
                exports: [NzTreeSelectComponent]
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

export { NzTreeSelectComponent, NzTreeSelectModule, NzTreeSelectService, higherOrderServiceFactory };
//# sourceMappingURL=ng-zorro-antd-tree-select.js.map
