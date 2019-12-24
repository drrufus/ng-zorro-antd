import { __extends, __spread, __decorate, __metadata } from 'tslib';
import { BACKSPACE } from '@angular/cdk/keycodes';
import { CdkOverlayOrigin, CdkConnectedOverlay, OverlayModule } from '@angular/cdk/overlay';
import { ɵɵdefineInjectable, ɵɵgetInheritedFactory, ɵsetClassMetadata, Injectable, ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵelementEnd, ɵɵproperty, ɵɵelement, ɵɵadvance, ɵɵtemplate, ɵɵclassProp, ɵɵpureFunction0, ɵɵtext, ɵɵstyleProp, ɵɵtextInterpolate1, ɵɵattribute, ɵɵreference, ɵɵelementContainerStart, ɵɵelementContainerEnd, ɵɵtextInterpolate, ɵɵpipe, ɵɵpureFunction1, ɵɵpipeBind2, ɵɵpipeBind3, EventEmitter, ɵɵdirectiveInject, Renderer2, ChangeDetectorRef, ElementRef, ɵɵdefineComponent, ɵɵstaticContentQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵviewQuery, ɵɵstaticViewQuery, ɵɵallocHostVars, ɵɵProvidersFeature, Self, Injector, forwardRef, ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature, ɵɵtemplateRefExtractor, Component, Host, Optional, Input, Output, ViewChild, ContentChild, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, DefaultValueAccessor, NgControlStatus, NgModel, FormsModule } from '@angular/forms';
import { merge, of } from 'rxjs';
import { tap, filter } from 'rxjs/operators';
import { NzTreeBaseService, warnDeprecation, isNotNil, NzConfigService, NzNoAnimationDirective, NzTreeHigherOrderServiceToken, NzConnectedOverlayDirective, slideMotion, zoomMotion, InputBoolean, WithConfig, NzTreeBase, NzOverlayModule, NzNoAnimationModule } from 'ng-zorro-antd/core';
import { NzTreeComponent, NzTreeModule } from 'ng-zorro-antd/tree';
import { NgIf, NgStyle, NgTemplateOutlet, NgForOf, SlicePipe, CommonModule } from '@angular/common';
import { NzEmbedEmptyComponent, NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';

var NzTreeSelectService = /** @class */ (function (_super) {
    __extends(NzTreeSelectService, _super);
    function NzTreeSelectService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** @nocollapse */ NzTreeSelectService.ɵfac = function NzTreeSelectService_Factory(t) { return ɵNzTreeSelectService_BaseFactory(t || NzTreeSelectService); };
    /** @nocollapse */ NzTreeSelectService.ɵprov = ɵɵdefineInjectable({ token: NzTreeSelectService, factory: NzTreeSelectService.ɵfac });
    return NzTreeSelectService;
}(NzTreeBaseService));
var ɵNzTreeSelectService_BaseFactory = ɵɵgetInheritedFactory(NzTreeSelectService);
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzTreeSelectService, [{
        type: Injectable
    }], null, null); })();

var _c0 = ["nzTreeTemplate"];
var _c1 = ["inputElement"];
var _c2 = ["treeRef"];
function NzTreeSelectComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    var _r1675 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 6, 7);
    ɵɵlistener("compositionstart", function NzTreeSelectComponent_ng_template_0_Template_input_compositionstart_0_listener($event) { ɵɵrestoreView(_r1675); var ctx_r1674 = ɵɵnextContext(); return ctx_r1674.isComposing = true; })("compositionend", function NzTreeSelectComponent_ng_template_0_Template_input_compositionend_0_listener($event) { ɵɵrestoreView(_r1675); var ctx_r1676 = ɵɵnextContext(); return ctx_r1676.isComposing = false; })("keydown", function NzTreeSelectComponent_ng_template_0_Template_input_keydown_0_listener($event) { ɵɵrestoreView(_r1675); var ctx_r1677 = ɵɵnextContext(); return ctx_r1677.onKeyDownInput($event); })("ngModelChange", function NzTreeSelectComponent_ng_template_0_Template_input_ngModelChange_0_listener($event) { ɵɵrestoreView(_r1675); var ctx_r1678 = ɵɵnextContext(); return ctx_r1678.setInputValue($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1667 = ɵɵnextContext();
    ɵɵproperty("ngModel", ctx_r1667.inputValue)("disabled", ctx_r1667.nzDisabled);
} }
function NzTreeSelectComponent_ng_template_2_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 12);
    ɵɵelement(1, "nz-embed-empty", 13);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1680 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("nzComponentName", "tree-select")("specificContent", ctx_r1680.nzNotFoundContent);
} }
var _c3 = function () { return []; };
function NzTreeSelectComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    var _r1682 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 8);
    ɵɵelementStart(1, "nz-tree", 9, 10);
    ɵɵlistener("nzExpandChange", function NzTreeSelectComponent_ng_template_2_Template_nz_tree_nzExpandChange_1_listener($event) { ɵɵrestoreView(_r1682); var ctx_r1681 = ɵɵnextContext(); return ctx_r1681.onExpandedKeysChange($event); })("nzClick", function NzTreeSelectComponent_ng_template_2_Template_nz_tree_nzClick_1_listener($event) { ɵɵrestoreView(_r1682); var ctx_r1683 = ɵɵnextContext(); return ctx_r1683.nzTreeClick.emit($event); })("nzCheckedKeysChange", function NzTreeSelectComponent_ng_template_2_Template_nz_tree_nzCheckedKeysChange_1_listener($event) { ɵɵrestoreView(_r1682); var ctx_r1684 = ɵɵnextContext(); return ctx_r1684.updateSelectedNodes(); })("nzSelectedKeysChange", function NzTreeSelectComponent_ng_template_2_Template_nz_tree_nzSelectedKeysChange_1_listener($event) { ɵɵrestoreView(_r1682); var ctx_r1685 = ɵɵnextContext(); return ctx_r1685.updateSelectedNodes(); })("nzCheckBoxChange", function NzTreeSelectComponent_ng_template_2_Template_nz_tree_nzCheckBoxChange_1_listener($event) { ɵɵrestoreView(_r1682); var ctx_r1686 = ɵɵnextContext(); return ctx_r1686.nzTreeCheckBoxChange.emit($event); })("nzSearchValueChange", function NzTreeSelectComponent_ng_template_2_Template_nz_tree_nzSearchValueChange_1_listener($event) { ɵɵrestoreView(_r1682); var ctx_r1687 = ɵɵnextContext(); return ctx_r1687.setSearchValues($event); });
    ɵɵelementEnd();
    ɵɵtemplate(3, NzTreeSelectComponent_ng_template_2_span_3_Template, 2, 2, "span", 11);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1668 = ɵɵnextContext();
    ɵɵclassProp("ant-select-dropdown--single", !ctx_r1668.nzMultiple)("ant-select-dropdown--multiple", ctx_r1668.nzMultiple)("ant-select-dropdown-placement-bottomLeft", ctx_r1668.dropDownPosition === "bottom")("ant-select-dropdown-placement-topLeft", ctx_r1668.dropDownPosition === "top");
    ɵɵproperty("@slideMotion", ctx_r1668.nzOpen ? ctx_r1668.dropDownPosition : "void")("@.disabled", ctx_r1668.noAnimation == null ? null : ctx_r1668.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r1668.noAnimation == null ? null : ctx_r1668.noAnimation.nzNoAnimation)("ngStyle", ctx_r1668.nzDropdownStyle);
    ɵɵadvance(1);
    ɵɵproperty("hidden", ctx_r1668.isNotFound)("nzData", ctx_r1668.nzNodes)("nzMultiple", ctx_r1668.nzMultiple)("nzSearchValue", ctx_r1668.inputValue)("nzHideUnMatched", ctx_r1668.nzHideUnMatched)("nzShowIcon", ctx_r1668.nzShowIcon)("nzCheckable", ctx_r1668.nzCheckable)("nzAsyncData", ctx_r1668.nzAsyncData)("nzShowExpand", ctx_r1668.nzShowExpand)("nzShowLine", ctx_r1668.nzShowLine)("nzExpandedIcon", ctx_r1668.nzExpandedIcon)("nzExpandAll", ctx_r1668.nzDefaultExpandAll)("nzExpandedKeys", ctx_r1668.expandedKeys)("nzCheckedKeys", ctx_r1668.nzCheckable ? ctx_r1668.value : ɵɵpureFunction0(26, _c3))("nzSelectedKeys", !ctx_r1668.nzCheckable ? ctx_r1668.value : ɵɵpureFunction0(27, _c3))("nzTreeTemplate", ctx_r1668.treeTemplate)("nzCheckStrictly", ctx_r1668.nzCheckStrictly);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1668.nzNodes.length === 0 || ctx_r1668.isNotFound);
} }
function NzTreeSelectComponent_ng_container_4_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 18);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1688 = ɵɵnextContext(2);
    ɵɵstyleProp("display", ctx_r1688.placeHolderDisplay);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r1688.nzPlaceHolder, " ");
} }
function NzTreeSelectComponent_ng_container_4_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 19);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1689 = ɵɵnextContext(2);
    ɵɵproperty("ngStyle", ctx_r1689.selectedValueDisplay);
    ɵɵattribute("title", ctx_r1689.nzDisplayWith(ctx_r1689.selectedNodes[0]));
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r1689.nzDisplayWith(ctx_r1689.selectedNodes[0]), " ");
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
    var ctx_r1690 = ɵɵnextContext(2);
    var _r1666 = ɵɵreference(1);
    ɵɵstyleProp("display", ctx_r1690.searchDisplay);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", _r1666);
    ɵɵadvance(2);
    ɵɵtextInterpolate1("", ctx_r1690.inputValue, "\u00A0");
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
    var ctx_r1669 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1669.nzPlaceHolder && ctx_r1669.selectedNodes.length === 0);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1669.selectedNodes.length === 1);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1669.nzShowSearch);
} }
function NzTreeSelectComponent_ng_container_5_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 18);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1692 = ɵɵnextContext(2);
    ɵɵstyleProp("display", ctx_r1692.placeHolderDisplay);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r1692.nzPlaceHolder, " ");
} }
function NzTreeSelectComponent_ng_container_5_ng_container_3_span_2_Template(rf, ctx) { if (rf & 1) {
    var _r1699 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 29);
    ɵɵlistener("mousedown", function NzTreeSelectComponent_ng_container_5_ng_container_3_span_2_Template_span_mousedown_0_listener($event) { ɵɵrestoreView(_r1699); return $event.preventDefault(); })("click", function NzTreeSelectComponent_ng_container_5_ng_container_3_span_2_Template_span_click_0_listener($event) { ɵɵrestoreView(_r1699); var node_r1696 = ɵɵnextContext().$implicit; var ctx_r1700 = ɵɵnextContext(2); return ctx_r1700.removeSelected(node_r1696, true, $event); });
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
    var node_r1696 = ctx.$implicit;
    var ctx_r1693 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵclassProp("ant-select-selection__choice__disabled", node_r1696.isDisabled);
    ɵɵproperty("@zoomMotion", undefined)("@.disabled", ctx_r1693.noAnimation == null ? null : ctx_r1693.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r1693.noAnimation == null ? null : ctx_r1693.noAnimation.nzNoAnimation);
    ɵɵattribute("title", ctx_r1693.nzDisplayWith(node_r1696));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !node_r1696.isDisabled);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1693.nzDisplayWith(node_r1696));
} }
function NzTreeSelectComponent_ng_container_5_li_5_ng_container_2_ng_template_1_Template(rf, ctx) { }
var _c4 = function (a0) { return { $implicit: a0 }; };
function NzTreeSelectComponent_ng_container_5_li_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzTreeSelectComponent_ng_container_5_li_5_ng_container_2_ng_template_1_Template, 0, 0, "ng-template", 32);
    ɵɵpipe(2, "slice");
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1702 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r1702.nzMaxTagPlaceholder)("ngTemplateOutletContext", ɵɵpureFunction1(5, _c4, ɵɵpipeBind2(2, 2, ctx_r1702.selectedNodes, ctx_r1702.nzMaxTagCount)));
} }
function NzTreeSelectComponent_ng_container_5_li_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1703 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" + ", ctx_r1703.selectedNodes.length - ctx_r1703.nzMaxTagCount, " ... ");
} }
function NzTreeSelectComponent_ng_container_5_li_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li", 31);
    ɵɵelementStart(1, "div", 28);
    ɵɵtemplate(2, NzTreeSelectComponent_ng_container_5_li_5_ng_container_2_Template, 3, 7, "ng-container", 3);
    ɵɵtemplate(3, NzTreeSelectComponent_ng_container_5_li_5_ng_container_3_Template, 2, 1, "ng-container", 3);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1694 = ɵɵnextContext(2);
    ɵɵproperty("@zoomMotion", undefined);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1694.nzMaxTagPlaceholder);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r1694.nzMaxTagPlaceholder);
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
    var ctx_r1670 = ɵɵnextContext();
    var _r1666 = ɵɵreference(1);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1670.nzPlaceHolder && ctx_r1670.selectedNodes.length === 0);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ɵɵpipeBind3(4, 5, ctx_r1670.selectedNodes, 0, ctx_r1670.nzMaxTagCount))("ngForTrackBy", ctx_r1670.trackValue);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1670.selectedNodes.length > ctx_r1670.nzMaxTagCount);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", _r1666);
} }
function NzTreeSelectComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    var _r1706 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 33);
    ɵɵlistener("mousedown", function NzTreeSelectComponent_span_6_Template_span_mousedown_0_listener($event) { ɵɵrestoreView(_r1706); return $event.preventDefault(); })("click", function NzTreeSelectComponent_span_6_Template_span_click_0_listener($event) { ɵɵrestoreView(_r1706); var ctx_r1707 = ɵɵnextContext(); return ctx_r1707.onClearSelection($event); });
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
        })), this.nzCheckable ? this.nzTreeCheckBoxChange : of(), this.nzCleared, this.nzRemoved).subscribe(function () {
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
                    useExisting: forwardRef((function () { return NzTreeSelectComponent; })),
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
    return NzTreeSelectComponent;
}(NzTreeBase));
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
var NzTreeSelectModule = /** @class */ (function () {
    function NzTreeSelectModule() {
    }
    /** @nocollapse */ NzTreeSelectModule.ɵmod = ɵɵdefineNgModule({ type: NzTreeSelectModule });
    /** @nocollapse */ NzTreeSelectModule.ɵinj = ɵɵdefineInjector({ factory: function NzTreeSelectModule_Factory(t) { return new (t || NzTreeSelectModule)(); }, imports: [[CommonModule, OverlayModule, FormsModule, NzTreeModule, NzIconModule, NzEmptyModule, NzOverlayModule, NzNoAnimationModule]] });
    return NzTreeSelectModule;
}());
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
