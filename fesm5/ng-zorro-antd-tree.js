import { NgClass, NgIf, NgTemplateOutlet, NgForOf, CommonModule } from '@angular/common';
import { ɵɵtemplate, ɵɵnextContext, ɵɵproperty, ɵɵpureFunction1, ɵɵelement, ɵɵclassProp, ɵɵelementContainerStart, ɵɵelementContainerEnd, ɵɵadvance, ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵelementEnd, ɵɵpipe, ɵɵpropertyInterpolate, ɵɵattribute, ɵɵpipeBind4, ɵɵsanitizeHtml, TemplateRef, ɵɵdirectiveInject, NgZone, Renderer2, ElementRef, ChangeDetectorRef, ɵɵdefineComponent, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵNgOnChangesFeature, ɵɵstyleProp, ɵsetClassMetadata, Component, ChangeDetectionStrategy, Host, Optional, ViewChild, Input, HostListener, ɵɵdefineInjectable, ɵɵgetInheritedFactory, Injectable, EventEmitter, ɵɵstaticContentQuery, ɵɵProvidersFeature, SkipSelf, forwardRef, ɵɵInheritDefinitionFeature, ContentChild, Output, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { warnDeprecation, NzTreeBaseService, NzNoAnimationDirective, NzHighlightPipe, treeCollapseMotion, InputBoolean, isNotNil, NzConfigService, NzTreeHigherOrderServiceToken, WithConfig, NzTreeBase, NzAddOnModule, NzNoAnimationModule, NzHighlightModule } from 'ng-zorro-antd/core';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { __decorate, __metadata, __extends } from 'tslib';
import { Subject, fromEvent, ReplaySubject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

var _c0 = ["dragElement"];
function NzTreeNodeComponent_ng_container_2_ng_container_2_ng_container_1_1_ng_template_0_Template(rf, ctx) { }
var _c1 = function (a0) { return { $implicit: a0 }; };
function NzTreeNodeComponent_ng_container_2_ng_container_2_ng_container_1_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, NzTreeNodeComponent_ng_container_2_ng_container_2_ng_container_1_1_ng_template_0_Template, 0, 0, "ng-template", 3);
} if (rf & 2) {
    var ctx_r1010 = ɵɵnextContext(4);
    ɵɵproperty("ngTemplateOutlet", ctx_r1010.nzExpandedIcon)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c1, ctx_r1010.nzTreeNode));
} }
function NzTreeNodeComponent_ng_container_2_ng_container_2_ng_container_1_i_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 8);
} if (rf & 2) {
    var ctx_r1011 = ɵɵnextContext(4);
    ɵɵclassProp("ant-select-switcher-icon", ctx_r1011.nzSelectMode)("ant-tree-switcher-icon", !ctx_r1011.nzSelectMode);
} }
function NzTreeNodeComponent_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzTreeNodeComponent_ng_container_2_ng_container_2_ng_container_1_1_Template, 1, 4, undefined, 2);
    ɵɵtemplate(2, NzTreeNodeComponent_ng_container_2_ng_container_2_ng_container_1_i_2_Template, 1, 2, "i", 7);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1008 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1008.isTemplateRef(ctx_r1008.nzExpandedIcon));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r1008.isTemplateRef(ctx_r1008.nzExpandedIcon));
} }
function NzTreeNodeComponent_ng_container_2_ng_container_2_i_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 9);
} if (rf & 2) {
    ɵɵproperty("nzSpin", true);
} }
function NzTreeNodeComponent_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzTreeNodeComponent_ng_container_2_ng_container_2_ng_container_1_Template, 3, 2, "ng-container", 2);
    ɵɵtemplate(2, NzTreeNodeComponent_ng_container_2_ng_container_2_i_2_Template, 1, 1, "i", 6);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1006 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r1006.nzTreeNode.isLoading);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1006.nzTreeNode.isLoading);
} }
function NzTreeNodeComponent_ng_container_2_ng_container_3_1_ng_template_0_Template(rf, ctx) { }
function NzTreeNodeComponent_ng_container_2_ng_container_3_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, NzTreeNodeComponent_ng_container_2_ng_container_3_1_ng_template_0_Template, 0, 0, "ng-template", 3);
} if (rf & 2) {
    var ctx_r1013 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r1013.nzExpandedIcon)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c1, ctx_r1013.nzTreeNode));
} }
function NzTreeNodeComponent_ng_container_2_ng_container_3_ng_container_2_i_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 12);
} if (rf & 2) {
    var ctx_r1016 = ɵɵnextContext(4);
    ɵɵproperty("nzType", ctx_r1016.isSwitcherOpen ? "minus-square" : "plus-square");
} }
function NzTreeNodeComponent_ng_container_2_ng_container_3_ng_container_2_i_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 13);
} }
function NzTreeNodeComponent_ng_container_2_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzTreeNodeComponent_ng_container_2_ng_container_3_ng_container_2_i_1_Template, 1, 1, "i", 10);
    ɵɵtemplate(2, NzTreeNodeComponent_ng_container_2_ng_container_3_ng_container_2_i_2_Template, 1, 0, "i", 11);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1014 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1014.isShowLineIcon);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r1014.isShowLineIcon);
} }
function NzTreeNodeComponent_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzTreeNodeComponent_ng_container_2_ng_container_3_1_Template, 1, 4, undefined, 2);
    ɵɵtemplate(2, NzTreeNodeComponent_ng_container_2_ng_container_3_ng_container_2_Template, 3, 2, "ng-container", 2);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1007 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1007.isTemplateRef(ctx_r1007.nzExpandedIcon));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r1007.isTemplateRef(ctx_r1007.nzExpandedIcon));
} }
function NzTreeNodeComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    var _r1019 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 5);
    ɵɵlistener("click", function NzTreeNodeComponent_ng_container_2_Template_span_click_1_listener($event) { ɵɵrestoreView(_r1019); var ctx_r1018 = ɵɵnextContext(); return ctx_r1018._clickExpand($event); });
    ɵɵtemplate(2, NzTreeNodeComponent_ng_container_2_ng_container_2_Template, 3, 2, "ng-container", 2);
    ɵɵtemplate(3, NzTreeNodeComponent_ng_container_2_ng_container_3_Template, 3, 2, "ng-container", 2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1001 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ctx_r1001.nzNodeSwitcherClass);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1001.isShowSwitchIcon);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1001.nzShowLine);
} }
function NzTreeNodeComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    var _r1021 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 5);
    ɵɵlistener("click", function NzTreeNodeComponent_ng_container_3_Template_span_click_1_listener($event) { ɵɵrestoreView(_r1021); var ctx_r1020 = ɵɵnextContext(); return ctx_r1020._clickCheckBox($event); });
    ɵɵelement(2, "span");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1002 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ctx_r1002.nzNodeCheckboxClass);
    ɵɵadvance(1);
    ɵɵclassProp("ant-tree-checkbox-inner", !ctx_r1002.nzSelectMode)("ant-select-tree-checkbox-inner", ctx_r1002.nzSelectMode);
} }
function NzTreeNodeComponent_ng_container_4_span_2_i_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 19);
} if (rf & 2) {
    var ctx_r1023 = ɵɵnextContext(3);
    ɵɵproperty("nzType", ctx_r1023.nzIcon);
} }
function NzTreeNodeComponent_ng_container_4_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 17);
    ɵɵelementStart(1, "span", 17);
    ɵɵtemplate(2, NzTreeNodeComponent_ng_container_4_span_2_i_2_Template, 1, 1, "i", 18);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1022 = ɵɵnextContext(2);
    ɵɵclassProp("ant-tree-icon__open", ctx_r1022.isSwitcherOpen)("ant-tree-icon__close", ctx_r1022.isSwitcherClose)("ant-tree-icon_loading", ctx_r1022.nzTreeNode.isLoading);
    ɵɵproperty("ngClass", ctx_r1022.nzNodeContentLoadingClass);
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ctx_r1022.nzNodeContentIconClass);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1022.nzIcon);
} }
function NzTreeNodeComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 14);
    ɵɵtemplate(2, NzTreeNodeComponent_ng_container_4_span_2_Template, 3, 6, "span", 15);
    ɵɵelement(3, "span", 16);
    ɵɵpipe(4, "nzHighlight");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1003 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵclassProp("draggable", ctx_r1003.canDraggable);
    ɵɵpropertyInterpolate("title", ctx_r1003.nzTreeNode.title);
    ɵɵproperty("ngClass", ctx_r1003.nzNodeContentClass);
    ɵɵattribute("draggable", ctx_r1003.canDraggable)("aria-grabbed", ctx_r1003.canDraggable);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1003.nzTreeNode.icon && ctx_r1003.nzShowIcon);
    ɵɵadvance(1);
    ɵɵproperty("innerHTML", ɵɵpipeBind4(4, 7, ctx_r1003.nzTreeNode.title, ctx_r1003.nzSearchValue, "", "font-highlight"), ɵɵsanitizeHtml);
} }
function NzTreeNodeComponent_ng_template_5_Template(rf, ctx) { }
function NzTreeNodeComponent_ul_6_nz_tree_node_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "nz-tree-node", 22);
} if (rf & 2) {
    var node_r1025 = ctx.$implicit;
    var ctx_r1024 = ɵɵnextContext(2);
    ɵɵproperty("nzTreeNode", node_r1025)("nzShowExpand", ctx_r1024.nzShowExpand)("@.disabled", ctx_r1024.noAnimation == null ? null : ctx_r1024.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r1024.noAnimation == null ? null : ctx_r1024.noAnimation.nzNoAnimation)("nzSelectMode", ctx_r1024.nzSelectMode)("nzShowLine", ctx_r1024.nzShowLine)("nzExpandedIcon", ctx_r1024.nzExpandedIcon)("nzDraggable", ctx_r1024.nzDraggable)("nzCheckable", ctx_r1024.nzCheckable)("nzAsyncData", ctx_r1024.nzAsyncData)("nzExpandAll", ctx_r1024.nzExpandAll)("nzShowIcon", ctx_r1024.nzShowIcon)("nzSearchValue", ctx_r1024.nzSearchValue)("nzHideUnMatched", ctx_r1024.nzHideUnMatched)("nzBeforeDrop", ctx_r1024.nzBeforeDrop)("nzTreeTemplate", ctx_r1024.nzTreeTemplate);
} }
function NzTreeNodeComponent_ul_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "ul", 20);
    ɵɵtemplate(1, NzTreeNodeComponent_ul_6_nz_tree_node_1_Template, 1, 16, "nz-tree-node", 21);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1005 = ɵɵnextContext();
    ɵɵclassProp("ant-tree-child-tree-open", !ctx_r1005.nzSelectMode || ctx_r1005.nzTreeNode.isExpanded);
    ɵɵproperty("@.disabled", ctx_r1005.noAnimation == null ? null : ctx_r1005.noAnimation.nzNoAnimation)("@treeCollapseMotion", undefined);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r1005.nzTreeNode.getChildren());
} }
var NzTreeNodeComponent = /** @class */ (function () {
    function NzTreeNodeComponent(nzTreeService, ngZone, renderer, elRef, cdr, noAnimation) {
        this.nzTreeService = nzTreeService;
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.elRef = elRef;
        this.cdr = cdr;
        this.noAnimation = noAnimation;
        this.nzHideUnMatched = false;
        this.nzNoAnimation = false;
        this.nzSelectMode = false;
        this.nzShowIcon = false;
        this.nzSearchValue = '';
        // default var
        this.prefixCls = 'ant-tree';
        this.nzNodeClass = {};
        this.nzNodeSwitcherClass = {};
        this.nzNodeContentClass = {};
        this.nzNodeCheckboxClass = {};
        this.nzNodeContentIconClass = {};
        this.nzNodeContentLoadingClass = {};
        /**
         * drag var
         */
        this.destroy$ = new Subject();
        this.dragPos = 2;
        this.dragPosClass = {
            '0': 'drag-over',
            '1': 'drag-over-gap-bottom',
            '-1': 'drag-over-gap-top'
        };
        /**
         * default set
         */
        this._nzDraggable = false;
        this._nzExpandAll = false;
    }
    Object.defineProperty(NzTreeNodeComponent.prototype, "nzDraggable", {
        get: function () {
            return this._nzDraggable;
        },
        set: function (value) {
            this._nzDraggable = value;
            this.handDragEvent();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNodeComponent.prototype, "nzDefaultExpandAll", {
        get: function () {
            return this._nzExpandAll;
        },
        /**
         * @deprecated use `nzExpandAll` instead.
         */
        set: function (value) {
            warnDeprecation("'nzDefaultExpandAll' is going to be removed in 9.0.0. Please use 'nzExpandAll' instead.");
            this._nzExpandAll = value;
            if (value && this.nzTreeNode && !this.nzTreeNode.isLeaf) {
                this.nzTreeNode.isExpanded = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNodeComponent.prototype, "nzExpandAll", {
        get: function () {
            return this._nzExpandAll;
        },
        // default set
        set: function (value) {
            this._nzExpandAll = value;
            if (value && this.nzTreeNode && !this.nzTreeNode.isLeaf) {
                this.nzTreeNode.isExpanded = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNodeComponent.prototype, "nzIcon", {
        get: function () {
            return this.nzTreeNode.icon;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNodeComponent.prototype, "canDraggable", {
        get: function () {
            return this.nzDraggable && !this.nzTreeNode.isDisabled ? true : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNodeComponent.prototype, "isShowLineIcon", {
        get: function () {
            return !this.nzTreeNode.isLeaf && this.nzShowLine;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNodeComponent.prototype, "isShowSwitchIcon", {
        get: function () {
            return !this.nzTreeNode.isLeaf && !this.nzShowLine;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNodeComponent.prototype, "isSwitcherOpen", {
        get: function () {
            return this.nzTreeNode.isExpanded && !this.nzTreeNode.isLeaf;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNodeComponent.prototype, "isSwitcherClose", {
        get: function () {
            return !this.nzTreeNode.isExpanded && !this.nzTreeNode.isLeaf;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNodeComponent.prototype, "displayStyle", {
        get: function () {
            // to hide unmatched nodes
            return this.nzSearchValue &&
                this.nzHideUnMatched &&
                !this.nzTreeNode.isMatched &&
                !this.nzTreeNode.isExpanded &&
                this.nzTreeNode.canHide
                ? 'none'
                : '';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * reset node class
     */
    NzTreeNodeComponent.prototype.setClassMap = function () {
        var _a, _b, _c, _d, _e, _f;
        this.prefixCls = this.nzSelectMode ? 'ant-select-tree' : 'ant-tree';
        this.nzNodeClass = (_a = {},
            _a[this.prefixCls + "-treenode-disabled"] = this.nzTreeNode.isDisabled,
            _a[this.prefixCls + "-treenode-switcher-open"] = this.isSwitcherOpen,
            _a[this.prefixCls + "-treenode-switcher-close"] = this.isSwitcherClose,
            _a[this.prefixCls + "-treenode-checkbox-checked"] = this.nzTreeNode.isChecked,
            _a[this.prefixCls + "-treenode-checkbox-indeterminate"] = this.nzTreeNode.isHalfChecked,
            _a[this.prefixCls + "-treenode-selected"] = this.nzTreeNode.isSelected,
            _a[this.prefixCls + "-treenode-loading"] = this.nzTreeNode.isLoading,
            _a);
        this.nzNodeSwitcherClass = (_b = {},
            _b[this.prefixCls + "-switcher"] = true,
            _b[this.prefixCls + "-switcher-noop"] = this.nzTreeNode.isLeaf,
            _b[this.prefixCls + "-switcher_open"] = this.isSwitcherOpen,
            _b[this.prefixCls + "-switcher_close"] = this.isSwitcherClose,
            _b);
        this.nzNodeCheckboxClass = (_c = {},
            _c[this.prefixCls + "-checkbox"] = true,
            _c[this.prefixCls + "-checkbox-checked"] = this.nzTreeNode.isChecked,
            _c[this.prefixCls + "-checkbox-indeterminate"] = this.nzTreeNode.isHalfChecked,
            _c[this.prefixCls + "-checkbox-disabled"] = this.nzTreeNode.isDisabled || this.nzTreeNode.isDisableCheckbox,
            _c);
        this.nzNodeContentClass = (_d = {},
            _d[this.prefixCls + "-node-content-wrapper"] = true,
            _d[this.prefixCls + "-node-content-wrapper-open"] = this.isSwitcherOpen,
            _d[this.prefixCls + "-node-content-wrapper-close"] = this.isSwitcherClose,
            _d[this.prefixCls + "-node-selected"] = this.nzTreeNode.isSelected,
            _d);
        this.nzNodeContentIconClass = (_e = {},
            _e[this.prefixCls + "-iconEle"] = true,
            _e[this.prefixCls + "-icon__customize"] = true,
            _e);
        this.nzNodeContentLoadingClass = (_f = {},
            _f[this.prefixCls + "-iconEle"] = true,
            _f);
    };
    NzTreeNodeComponent.prototype.onMousedown = function (event) {
        if (this.nzSelectMode) {
            event.preventDefault();
        }
    };
    /**
     * click node to select, 200ms to dbl click
     */
    NzTreeNodeComponent.prototype.nzClick = function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.nzTreeNode.isSelectable && !this.nzTreeNode.isDisabled) {
            this.nzTreeNode.isSelected = !this.nzTreeNode.isSelected;
        }
        var eventNext = this.nzTreeService.formatEvent('click', this.nzTreeNode, event);
        this.nzTreeService.triggerEventChange$.next(eventNext);
    };
    NzTreeNodeComponent.prototype.nzDblClick = function (event) {
        event.preventDefault();
        event.stopPropagation();
        var eventNext = this.nzTreeService.formatEvent('dblclick', this.nzTreeNode, event);
        this.nzTreeService.triggerEventChange$.next(eventNext);
    };
    /**
     * @param event
     */
    NzTreeNodeComponent.prototype.nzContextMenu = function (event) {
        event.preventDefault();
        event.stopPropagation();
        var eventNext = this.nzTreeService.formatEvent('contextmenu', this.nzTreeNode, event);
        this.nzTreeService.triggerEventChange$.next(eventNext);
    };
    /**
     * collapse node
     * @param event
     */
    NzTreeNodeComponent.prototype._clickExpand = function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (!this.nzTreeNode.isLoading && !this.nzTreeNode.isLeaf) {
            // set async state
            if (this.nzAsyncData && this.nzTreeNode.children.length === 0 && !this.nzTreeNode.isExpanded) {
                this.nzTreeNode.isLoading = true;
            }
            this.nzTreeNode.isExpanded = !this.nzTreeNode.isExpanded;
            if (this.nzTreeNode.isMatched) {
                this.setDisplayForParentNodes(this.nzTreeNode);
            }
            this.setDisplayForChildNodes(this.nzTreeNode);
            var eventNext = this.nzTreeService.formatEvent('expand', this.nzTreeNode, event);
            this.nzTreeService.triggerEventChange$.next(eventNext);
        }
    };
    NzTreeNodeComponent.prototype.setDisplayForChildNodes = function (parentNode) {
        var _this = this;
        var children = parentNode.children;
        if (children.length > 0) {
            children.map(function (node) {
                var canHide = !node.isMatched;
                node.canHide = canHide;
                _this.setDisplayForChildNodes(node);
            });
        }
    };
    NzTreeNodeComponent.prototype.setDisplayForParentNodes = function (targetNode) {
        var parentNode = targetNode.getParentNode();
        if (parentNode) {
            parentNode.canHide = false;
            this.setDisplayForParentNodes(parentNode);
        }
    };
    /**
     * check node
     * @param event
     */
    NzTreeNodeComponent.prototype._clickCheckBox = function (event) {
        event.preventDefault();
        event.stopPropagation();
        // return if node is disabled
        if (this.nzTreeNode.isDisabled || this.nzTreeNode.isDisableCheckbox) {
            return;
        }
        this.nzTreeNode.isChecked = !this.nzTreeNode.isChecked;
        this.nzTreeNode.isHalfChecked = false;
        if (!this.nzTreeService.isCheckStrictly) {
            this.nzTreeService.conduct(this.nzTreeNode);
        }
        var eventNext = this.nzTreeService.formatEvent('check', this.nzTreeNode, event);
        this.nzTreeService.triggerEventChange$.next(eventNext);
    };
    /**
     * drag event
     * @param e
     */
    NzTreeNodeComponent.prototype.clearDragClass = function () {
        var _this = this;
        var dragClass = ['drag-over-gap-top', 'drag-over-gap-bottom', 'drag-over'];
        dragClass.forEach(function (e) {
            _this.renderer.removeClass(_this.dragElement.nativeElement, e);
        });
    };
    NzTreeNodeComponent.prototype.handleDragStart = function (e) {
        e.stopPropagation();
        try {
            // ie throw error
            // firefox-need-it
            e.dataTransfer.setData('text/plain', this.nzTreeNode.key);
        }
        catch (error) {
            // empty
        }
        this.nzTreeService.setSelectedNode(this.nzTreeNode);
        this.nzTreeNode.isExpanded = false;
        var eventNext = this.nzTreeService.formatEvent('dragstart', this.nzTreeNode, e);
        this.nzTreeService.triggerEventChange$.next(eventNext);
    };
    NzTreeNodeComponent.prototype.handleDragEnter = function (e) {
        var _this = this;
        e.preventDefault();
        e.stopPropagation();
        // reset position
        this.dragPos = 2;
        this.ngZone.run(function () {
            var node = _this.nzTreeService.getSelectedNode();
            if (node && node.key !== _this.nzTreeNode.key && !_this.nzTreeNode.isExpanded && !_this.nzTreeNode.isLeaf) {
                _this.nzTreeNode.isExpanded = true;
            }
            var eventNext = _this.nzTreeService.formatEvent('dragenter', _this.nzTreeNode, e);
            _this.nzTreeService.triggerEventChange$.next(eventNext);
        });
    };
    NzTreeNodeComponent.prototype.handleDragOver = function (e) {
        e.preventDefault();
        e.stopPropagation();
        var dropPosition = this.nzTreeService.calcDropPosition(e);
        if (this.dragPos !== dropPosition) {
            this.clearDragClass();
            this.dragPos = dropPosition;
            // leaf node will pass
            if (!(this.dragPos === 0 && this.nzTreeNode.isLeaf)) {
                this.renderer.addClass(this.dragElement.nativeElement, this.dragPosClass[this.dragPos]);
            }
        }
        var eventNext = this.nzTreeService.formatEvent('dragover', this.nzTreeNode, e);
        this.nzTreeService.triggerEventChange$.next(eventNext);
    };
    NzTreeNodeComponent.prototype.handleDragLeave = function (e) {
        var _this = this;
        e.stopPropagation();
        this.ngZone.run(function () {
            _this.clearDragClass();
        });
        var eventNext = this.nzTreeService.formatEvent('dragleave', this.nzTreeNode, e);
        this.nzTreeService.triggerEventChange$.next(eventNext);
    };
    NzTreeNodeComponent.prototype.handleDragDrop = function (e) {
        var _this = this;
        e.preventDefault();
        e.stopPropagation();
        this.ngZone.run(function () {
            _this.clearDragClass();
            var node = _this.nzTreeService.getSelectedNode();
            if (!node || (node && node.key === _this.nzTreeNode.key) || (_this.dragPos === 0 && _this.nzTreeNode.isLeaf)) {
                return;
            }
            // pass if node is leafNo
            var dropEvent = _this.nzTreeService.formatEvent('drop', _this.nzTreeNode, e);
            var dragEndEvent = _this.nzTreeService.formatEvent('dragend', _this.nzTreeNode, e);
            if (_this.nzBeforeDrop) {
                _this.nzBeforeDrop({
                    dragNode: _this.nzTreeService.getSelectedNode(),
                    node: _this.nzTreeNode,
                    pos: _this.dragPos
                }).subscribe(function (canDrop) {
                    if (canDrop) {
                        _this.nzTreeService.dropAndApply(_this.nzTreeNode, _this.dragPos);
                    }
                    _this.nzTreeService.triggerEventChange$.next(dropEvent);
                    _this.nzTreeService.triggerEventChange$.next(dragEndEvent);
                });
            }
            else if (_this.nzTreeNode) {
                _this.nzTreeService.dropAndApply(_this.nzTreeNode, _this.dragPos);
                _this.nzTreeService.triggerEventChange$.next(dropEvent);
            }
        });
    };
    NzTreeNodeComponent.prototype.handleDragEnd = function (e) {
        var _this = this;
        e.stopPropagation();
        this.ngZone.run(function () {
            // if user do not custom beforeDrop
            if (!_this.nzBeforeDrop) {
                var eventNext = _this.nzTreeService.formatEvent('dragend', _this.nzTreeNode, e);
                _this.nzTreeService.triggerEventChange$.next(eventNext);
            }
        });
    };
    /**
     * Listening to dragging events.
     */
    NzTreeNodeComponent.prototype.handDragEvent = function () {
        var _this = this;
        this.ngZone.runOutsideAngular(function () {
            if (_this.nzDraggable) {
                _this.destroy$ = new Subject();
                fromEvent(_this.elRef.nativeElement, 'dragstart')
                    .pipe(takeUntil(_this.destroy$))
                    .subscribe(function (e) { return _this.handleDragStart(e); });
                fromEvent(_this.elRef.nativeElement, 'dragenter')
                    .pipe(takeUntil(_this.destroy$))
                    .subscribe(function (e) { return _this.handleDragEnter(e); });
                fromEvent(_this.elRef.nativeElement, 'dragover')
                    .pipe(takeUntil(_this.destroy$))
                    .subscribe(function (e) { return _this.handleDragOver(e); });
                fromEvent(_this.elRef.nativeElement, 'dragleave')
                    .pipe(takeUntil(_this.destroy$))
                    .subscribe(function (e) { return _this.handleDragLeave(e); });
                fromEvent(_this.elRef.nativeElement, 'drop')
                    .pipe(takeUntil(_this.destroy$))
                    .subscribe(function (e) { return _this.handleDragDrop(e); });
                fromEvent(_this.elRef.nativeElement, 'dragend')
                    .pipe(takeUntil(_this.destroy$))
                    .subscribe(function (e) { return _this.handleDragEnd(e); });
            }
            else {
                _this.destroy$.next();
                _this.destroy$.complete();
            }
        });
    };
    NzTreeNodeComponent.prototype.isTemplateRef = function (value) {
        return value instanceof TemplateRef;
    };
    NzTreeNodeComponent.prototype.markForCheck = function () {
        this.cdr.markForCheck();
    };
    NzTreeNodeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // init expanded / selected / checked list
        if (this.nzTreeNode.isSelected) {
            this.nzTreeService.setNodeActive(this.nzTreeNode);
        }
        if (this.nzTreeNode.isExpanded) {
            this.nzTreeService.setExpandedNodeList(this.nzTreeNode);
        }
        if (this.nzTreeNode.isChecked) {
            this.nzTreeService.setCheckedNodeList(this.nzTreeNode);
        }
        // TODO
        this.nzTreeNode.component = this;
        this.nzTreeService
            .eventTriggerChanged()
            .pipe(filter(function (data) { return data.node.key === _this.nzTreeNode.key; }), takeUntil(this.destroy$))
            .subscribe(function () {
            _this.setClassMap();
            _this.markForCheck();
        });
        this.setClassMap();
    };
    NzTreeNodeComponent.prototype.ngOnChanges = function () {
        this.setClassMap();
    };
    NzTreeNodeComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /** @nocollapse */ NzTreeNodeComponent.ɵfac = function NzTreeNodeComponent_Factory(t) { return new (t || NzTreeNodeComponent)(ɵɵdirectiveInject(NzTreeBaseService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzNoAnimationDirective, 9)); };
    /** @nocollapse */ NzTreeNodeComponent.ɵcmp = ɵɵdefineComponent({ type: NzTreeNodeComponent, selectors: [["nz-tree-node"]], viewQuery: function NzTreeNodeComponent_Query(rf, ctx) { if (rf & 1) {
            ɵɵviewQuery(_c0, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dragElement = _t.first);
        } }, hostBindings: function NzTreeNodeComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            ɵɵlistener("mousedown", function NzTreeNodeComponent_mousedown_HostBindingHandler($event) { return ctx.onMousedown($event); })("click", function NzTreeNodeComponent_click_HostBindingHandler($event) { return ctx.nzClick($event); })("dblclick", function NzTreeNodeComponent_dblclick_HostBindingHandler($event) { return ctx.nzDblClick($event); })("contextmenu", function NzTreeNodeComponent_contextmenu_HostBindingHandler($event) { return ctx.nzContextMenu($event); });
        } }, inputs: { nzTreeNode: "nzTreeNode", nzShowLine: "nzShowLine", nzShowExpand: "nzShowExpand", nzCheckable: "nzCheckable", nzAsyncData: "nzAsyncData", nzHideUnMatched: "nzHideUnMatched", nzNoAnimation: "nzNoAnimation", nzSelectMode: "nzSelectMode", nzShowIcon: "nzShowIcon", nzExpandedIcon: "nzExpandedIcon", nzTreeTemplate: "nzTreeTemplate", nzBeforeDrop: "nzBeforeDrop", nzSearchValue: "nzSearchValue", nzDraggable: "nzDraggable", nzDefaultExpandAll: "nzDefaultExpandAll", nzExpandAll: "nzExpandAll" }, exportAs: ["nzTreeNode"], features: [ɵɵNgOnChangesFeature()], decls: 7, vars: 10, consts: [["role", "treeitem", 3, "ngClass"], ["dragElement", ""], [4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "group", "class", "ant-tree-child-tree", "data-expanded", "true", 3, "ant-tree-child-tree-open", 4, "ngIf"], [3, "ngClass", "click"], ["nz-icon", "", "nzType", "loading", "class", "ant-tree-switcher-loading-icon", 3, "nzSpin", 4, "ngIf"], ["nz-icon", "", "nzType", "caret-down", 3, "ant-select-switcher-icon", "ant-tree-switcher-icon", 4, "ngIf"], ["nz-icon", "", "nzType", "caret-down"], ["nz-icon", "", "nzType", "loading", 1, "ant-tree-switcher-loading-icon", 3, "nzSpin"], ["nz-icon", "", "class", "ant-tree-switcher-line-icon", 3, "nzType", 4, "ngIf"], ["nz-icon", "", "nzType", "file", "class", "ant-tree-switcher-line-icon", 4, "ngIf"], ["nz-icon", "", 1, "ant-tree-switcher-line-icon", 3, "nzType"], ["nz-icon", "", "nzType", "file", 1, "ant-tree-switcher-line-icon"], [3, "title", "ngClass"], [3, "ant-tree-icon__open", "ant-tree-icon__close", "ant-tree-icon_loading", "ngClass", 4, "ngIf"], [1, "ant-tree-title", 3, "innerHTML"], [3, "ngClass"], ["nz-icon", "", 3, "nzType", 4, "ngIf"], ["nz-icon", "", 3, "nzType"], ["role", "group", "data-expanded", "true", 1, "ant-tree-child-tree"], [3, "nzTreeNode", "nzShowExpand", "nzNoAnimation", "nzSelectMode", "nzShowLine", "nzExpandedIcon", "nzDraggable", "nzCheckable", "nzAsyncData", "nzExpandAll", "nzShowIcon", "nzSearchValue", "nzHideUnMatched", "nzBeforeDrop", "nzTreeTemplate", 4, "ngFor", "ngForOf"], [3, "nzTreeNode", "nzShowExpand", "nzNoAnimation", "nzSelectMode", "nzShowLine", "nzExpandedIcon", "nzDraggable", "nzCheckable", "nzAsyncData", "nzExpandAll", "nzShowIcon", "nzSearchValue", "nzHideUnMatched", "nzBeforeDrop", "nzTreeTemplate"]], template: function NzTreeNodeComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "li", 0, 1);
            ɵɵtemplate(2, NzTreeNodeComponent_ng_container_2_Template, 4, 3, "ng-container", 2);
            ɵɵtemplate(3, NzTreeNodeComponent_ng_container_3_Template, 3, 3, "ng-container", 2);
            ɵɵtemplate(4, NzTreeNodeComponent_ng_container_4_Template, 5, 12, "ng-container", 2);
            ɵɵtemplate(5, NzTreeNodeComponent_ng_template_5_Template, 0, 0, "ng-template", 3);
            ɵɵtemplate(6, NzTreeNodeComponent_ul_6_Template, 2, 4, "ul", 4);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵstyleProp("display", ctx.displayStyle);
            ɵɵproperty("ngClass", ctx.nzNodeClass);
            ɵɵadvance(2);
            ɵɵproperty("ngIf", ctx.nzShowExpand);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.nzCheckable);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", !ctx.nzTreeTemplate);
            ɵɵadvance(1);
            ɵɵproperty("ngTemplateOutlet", ctx.nzTreeTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(8, _c1, ctx.nzTreeNode));
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.nzTreeNode.isExpanded);
        } }, directives: [NgClass, NgIf, NgTemplateOutlet, NzIconDirective, NgForOf, NzTreeNodeComponent, NzNoAnimationDirective], pipes: [NzHighlightPipe], encapsulation: 2, data: { animation: [treeCollapseMotion] }, changeDetection: 0 });
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzTreeNodeComponent.prototype, "nzShowLine", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzTreeNodeComponent.prototype, "nzShowExpand", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzTreeNodeComponent.prototype, "nzCheckable", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzTreeNodeComponent.prototype, "nzAsyncData", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTreeNodeComponent.prototype, "nzHideUnMatched", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTreeNodeComponent.prototype, "nzNoAnimation", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTreeNodeComponent.prototype, "nzSelectMode", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTreeNodeComponent.prototype, "nzShowIcon", void 0);
    return NzTreeNodeComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzTreeNodeComponent, [{
        type: Component,
        args: [{
                selector: 'nz-tree-node',
                exportAs: 'nzTreeNode',
                templateUrl: './nz-tree-node.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                animations: [treeCollapseMotion]
            }]
    }], function () { return [{ type: NzTreeBaseService }, { type: NgZone }, { type: Renderer2 }, { type: ElementRef }, { type: ChangeDetectorRef }, { type: NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { dragElement: [{
            type: ViewChild,
            args: ['dragElement', { static: false }]
        }], nzTreeNode: [{
            type: Input
        }], nzShowLine: [{
            type: Input
        }], nzShowExpand: [{
            type: Input
        }], nzCheckable: [{
            type: Input
        }], nzAsyncData: [{
            type: Input
        }], nzHideUnMatched: [{
            type: Input
        }], nzNoAnimation: [{
            type: Input
        }], nzSelectMode: [{
            type: Input
        }], nzShowIcon: [{
            type: Input
        }], nzExpandedIcon: [{
            type: Input
        }], nzTreeTemplate: [{
            type: Input
        }], nzBeforeDrop: [{
            type: Input
        }], nzSearchValue: [{
            type: Input
        }], nzDraggable: [{
            type: Input
        }], nzDefaultExpandAll: [{
            type: Input
        }], nzExpandAll: [{
            type: Input
        }], onMousedown: [{
            type: HostListener,
            args: ['mousedown', ['$event']]
        }], nzClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }], nzDblClick: [{
            type: HostListener,
            args: ['dblclick', ['$event']]
        }], nzContextMenu: [{
            type: HostListener,
            args: ['contextmenu', ['$event']]
        }] }); })();

var NzTreeService = /** @class */ (function (_super) {
    __extends(NzTreeService, _super);
    function NzTreeService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** @nocollapse */ NzTreeService.ɵfac = function NzTreeService_Factory(t) { return ɵNzTreeService_BaseFactory(t || NzTreeService); };
    /** @nocollapse */ NzTreeService.ɵprov = ɵɵdefineInjectable({ token: NzTreeService, factory: NzTreeService.ɵfac });
    return NzTreeService;
}(NzTreeBaseService));
var ɵNzTreeService_BaseFactory = ɵɵgetInheritedFactory(NzTreeService);
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzTreeService, [{
        type: Injectable
    }], null, null); })();

var _c0$1 = ["nzTreeTemplate"];
function NzTreeComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "nz-tree-node", 2);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var node_r1027 = ctx.$implicit;
    var ctx_r1026 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("nzTreeNode", node_r1027)("nzSelectMode", ctx_r1026.nzSelectMode)("nzShowLine", ctx_r1026.nzShowLine)("nzExpandedIcon", ctx_r1026.nzExpandedIcon)("nzDraggable", ctx_r1026.nzDraggable)("nzCheckable", ctx_r1026.nzCheckable)("nzShowExpand", ctx_r1026.nzShowExpand)("nzAsyncData", ctx_r1026.nzAsyncData)("nzSearchValue", ctx_r1026.nzSearchValue)("nzHideUnMatched", ctx_r1026.nzHideUnMatched)("nzBeforeDrop", ctx_r1026.nzBeforeDrop)("nzExpandAll", ctx_r1026.nzExpandAll)("nzShowIcon", ctx_r1026.nzShowIcon)("nzTreeTemplate", ctx_r1026.treeTemplate)("@.disabled", ctx_r1026.noAnimation == null ? null : ctx_r1026.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r1026.noAnimation == null ? null : ctx_r1026.noAnimation.nzNoAnimation);
} }
function NzTreeServiceFactory(higherOrderService, treeService) {
    return higherOrderService ? higherOrderService : treeService;
}
var NZ_CONFIG_COMPONENT_NAME = 'tree';
var NzTreeComponent = /** @class */ (function (_super) {
    __extends(NzTreeComponent, _super);
    function NzTreeComponent(nzTreeService, nzConfigService, cdr, noAnimation) {
        var _this = _super.call(this, nzTreeService) || this;
        _this.nzConfigService = nzConfigService;
        _this.cdr = cdr;
        _this.noAnimation = noAnimation;
        _this.nzShowExpand = true;
        _this.nzShowLine = false;
        _this.nzCheckable = false;
        _this.nzAsyncData = false;
        _this.nzDraggable = false;
        _this.nzSelectMode = false;
        _this.nzCheckStrictly = false;
        _this.nzExpandAll = false;
        _this._nzDefaultExpandAll = false;
        _this.nzMultiple = false;
        _this.nzExpandedKeysChange = new EventEmitter();
        _this.nzSelectedKeysChange = new EventEmitter();
        _this.nzCheckedKeysChange = new EventEmitter();
        _this.nzSearchValueChange = new EventEmitter();
        /**
         * @deprecated use `nzSearchValueChange` instead.
         */
        _this.nzOnSearchNode = new EventEmitter();
        _this.nzClick = new EventEmitter();
        _this.nzDblClick = new EventEmitter();
        _this.nzContextMenu = new EventEmitter();
        _this.nzCheckBoxChange = new EventEmitter();
        _this.nzExpandChange = new EventEmitter();
        _this.nzOnDragStart = new EventEmitter();
        _this.nzOnDragEnter = new EventEmitter();
        _this.nzOnDragOver = new EventEmitter();
        _this.nzOnDragLeave = new EventEmitter();
        _this.nzOnDrop = new EventEmitter();
        _this.nzOnDragEnd = new EventEmitter();
        _this.nzDefaultSubject = new ReplaySubject(6);
        _this.destroy$ = new Subject();
        _this.prefixCls = 'ant-tree';
        _this.classMap = {};
        _this.onChange = function () { return null; };
        _this.onTouched = function () { return null; };
        return _this;
    }
    Object.defineProperty(NzTreeComponent.prototype, "treeTemplate", {
        get: function () {
            return this.nzTreeTemplate || this.nzTreeTemplateChild;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeComponent.prototype, "nzDefaultExpandAll", {
        get: function () {
            return this._nzDefaultExpandAll;
        },
        /**
         * @deprecated 9.0.0 use `nzExpandAll` instead.
         */
        set: function (value) {
            warnDeprecation("'nzDefaultExpandAll' would be removed in 9.0.0. Please use 'nzExpandAll' instead.");
            this.nzExpandAll = value;
            this._nzDefaultExpandAll = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeComponent.prototype, "nzData", {
        set: function (value) {
            this.initNzData(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeComponent.prototype, "nzDefaultExpandedKeys", {
        /**
         * @deprecated 9.0.0 - use `nzExpandedKeys` instead.
         */
        set: function (value) {
            warnDeprecation("'nzDefaultExpandedKeys' would be removed in 9.0.0. Please use 'nzExpandedKeys' instead.");
            this.nzDefaultSubject.next({ type: 'nzExpandedKeys', keys: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeComponent.prototype, "nzDefaultSelectedKeys", {
        /**
         * @deprecated 9.0.0 - use `nzSelectedKeys` instead.
         */
        set: function (value) {
            warnDeprecation("'nzDefaultSelectedKeys' would be removed in 9.0.0. Please use 'nzSelectedKeys' instead.");
            this.nzDefaultSubject.next({ type: 'nzSelectedKeys', keys: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeComponent.prototype, "nzDefaultCheckedKeys", {
        /**
         * @deprecated 9.0.0 - use `nzCheckedKeys` instead.
         */
        set: function (value) {
            warnDeprecation("'nzDefaultCheckedKeys' would be removed in 9.0.0. Please use 'nzCheckedKeys' instead.");
            this.nzDefaultSubject.next({ type: 'nzCheckedKeys', keys: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeComponent.prototype, "nzExpandedKeys", {
        set: function (value) {
            this.nzDefaultSubject.next({ type: 'nzExpandedKeys', keys: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeComponent.prototype, "nzSelectedKeys", {
        set: function (value) {
            this.nzDefaultSubject.next({ type: 'nzSelectedKeys', keys: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeComponent.prototype, "nzCheckedKeys", {
        set: function (value) {
            this.nzDefaultSubject.next({ type: 'nzCheckedKeys', keys: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeComponent.prototype, "nzSearchValue", {
        get: function () {
            return this._searchValue;
        },
        set: function (value) {
            this._searchValue = value;
            this.nzTreeService.searchExpand(value);
            if (isNotNil(value)) {
                this.nzSearchValueChange.emit(this.nzTreeService.formatEvent('search', null, null));
                /**
                 * @deprecated 9.0.0 - use `nzOnSearchNode` instead.
                 * Hide warning, need remove next version
                 */
                this.nzOnSearchNode.emit(this.nzTreeService.formatEvent('search', null, null));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeComponent.prototype, "nzNodes", {
        /**
         * To render nodes if root is changed.
         */
        get: function () {
            return this.nzTreeService.rootNodes;
        },
        enumerable: true,
        configurable: true
    });
    NzTreeComponent.prototype.setClassMap = function () {
        var _a;
        this.classMap = (_a = {},
            _a[this.prefixCls] = true,
            _a[this.prefixCls + '-show-line'] = this.nzShowLine,
            _a[this.prefixCls + "-icon-hide"] = !this.nzShowIcon,
            _a[this.prefixCls + "-block-node"] = this.nzBlockNode,
            _a['draggable-tree'] = this.nzDraggable,
            _a['ant-select-tree'] = this.nzSelectMode,
            _a);
    };
    NzTreeComponent.prototype.writeValue = function (value) {
        this.initNzData(value);
    };
    NzTreeComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    NzTreeComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    // tslint:disable-next-line:no-any
    NzTreeComponent.prototype.initNzData = function (value) {
        if (Array.isArray(value)) {
            this.nzTreeService.isCheckStrictly = this.nzCheckStrictly;
            this.nzTreeService.isMultiple = this.nzMultiple;
            this.nzTreeService.initTree(this.coerceTreeNodes(value));
        }
    };
    NzTreeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setClassMap();
        this.nzDefaultSubject.pipe(takeUntil(this.destroy$)).subscribe(function (data) {
            if (!data || !data.keys) {
                return;
            }
            switch (data.type) {
                case 'nzExpandedKeys':
                    _this.nzTreeService.calcExpandedKeys(data.keys, _this.nzNodes);
                    _this.nzExpandedKeysChange.emit(data.keys);
                    break;
                case 'nzSelectedKeys':
                    _this.nzTreeService.calcSelectedKeys(data.keys, _this.nzNodes, _this.nzMultiple);
                    _this.nzSelectedKeysChange.emit(data.keys);
                    break;
                case 'nzCheckedKeys':
                    _this.nzTreeService.calcCheckedKeys(data.keys, _this.nzNodes, _this.nzCheckStrictly);
                    _this.nzCheckedKeysChange.emit(data.keys);
                    break;
            }
            _this.cdr.markForCheck();
        });
        this.nzTreeService
            .eventTriggerChanged()
            .pipe(takeUntil(this.destroy$))
            .subscribe(function (data) {
            switch (data.eventName) {
                case 'expand':
                    _this.nzExpandChange.emit(data);
                    break;
                case 'click':
                    _this.nzClick.emit(data);
                    break;
                case 'check':
                    _this.nzCheckBoxChange.emit(data);
                    break;
                case 'dblclick':
                    _this.nzDblClick.emit(data);
                    break;
                case 'contextmenu':
                    _this.nzContextMenu.emit(data);
                    break;
                // drag drop
                case 'dragstart':
                    _this.nzOnDragStart.emit(data);
                    break;
                case 'dragenter':
                    _this.nzOnDragEnter.emit(data);
                    break;
                case 'dragover':
                    _this.nzOnDragOver.emit(data);
                    break;
                case 'dragleave':
                    _this.nzOnDragLeave.emit(data);
                    break;
                case 'drop':
                    _this.nzOnDrop.emit(data);
                    break;
                case 'dragend':
                    _this.nzOnDragEnd.emit(data);
                    break;
            }
        });
    };
    NzTreeComponent.prototype.ngOnChanges = function (changes) {
        if (changes.nzCheckStrictly) {
            this.nzTreeService.isCheckStrictly = this.nzCheckStrictly;
        }
        if (changes.nzMultiple) {
            this.nzTreeService.isMultiple = this.nzMultiple;
        }
    };
    NzTreeComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /** @nocollapse */ NzTreeComponent.ɵfac = function NzTreeComponent_Factory(t) { return new (t || NzTreeComponent)(ɵɵdirectiveInject(NzTreeBaseService), ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzNoAnimationDirective, 9)); };
    /** @nocollapse */ NzTreeComponent.ɵcmp = ɵɵdefineComponent({ type: NzTreeComponent, selectors: [["nz-tree"]], contentQueries: function NzTreeComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            ɵɵstaticContentQuery(dirIndex, _c0$1, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzTreeTemplateChild = _t.first);
        } }, inputs: { nzShowIcon: "nzShowIcon", nzShowExpand: "nzShowExpand", nzShowLine: "nzShowLine", nzExpandedIcon: "nzExpandedIcon", nzCheckable: "nzCheckable", nzAsyncData: "nzAsyncData", nzDraggable: "nzDraggable", nzHideUnMatched: "nzHideUnMatched", nzSelectMode: "nzSelectMode", nzCheckStrictly: "nzCheckStrictly", nzBlockNode: "nzBlockNode", nzExpandAll: "nzExpandAll", nzTreeTemplate: "nzTreeTemplate", nzDefaultExpandAll: "nzDefaultExpandAll", nzBeforeDrop: "nzBeforeDrop", nzMultiple: "nzMultiple", nzData: "nzData", nzDefaultExpandedKeys: "nzDefaultExpandedKeys", nzDefaultSelectedKeys: "nzDefaultSelectedKeys", nzDefaultCheckedKeys: "nzDefaultCheckedKeys", nzExpandedKeys: "nzExpandedKeys", nzSelectedKeys: "nzSelectedKeys", nzCheckedKeys: "nzCheckedKeys", nzSearchValue: "nzSearchValue" }, outputs: { nzExpandedKeysChange: "nzExpandedKeysChange", nzSelectedKeysChange: "nzSelectedKeysChange", nzCheckedKeysChange: "nzCheckedKeysChange", nzSearchValueChange: "nzSearchValueChange", nzOnSearchNode: "nzOnSearchNode", nzClick: "nzClick", nzDblClick: "nzDblClick", nzContextMenu: "nzContextMenu", nzCheckBoxChange: "nzCheckBoxChange", nzExpandChange: "nzExpandChange", nzOnDragStart: "nzOnDragStart", nzOnDragEnter: "nzOnDragEnter", nzOnDragOver: "nzOnDragOver", nzOnDragLeave: "nzOnDragLeave", nzOnDrop: "nzOnDrop", nzOnDragEnd: "nzOnDragEnd" }, exportAs: ["nzTree"], features: [ɵɵProvidersFeature([
                NzTreeService,
                {
                    provide: NzTreeBaseService,
                    useFactory: NzTreeServiceFactory,
                    deps: [[new SkipSelf(), new Optional(), NzTreeHigherOrderServiceToken], NzTreeService]
                },
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef((function () { return NzTreeComponent; })),
                    multi: true
                }
            ]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature()], decls: 2, vars: 2, consts: [["role", "tree", "unselectable", "on", 3, "ngClass"], [4, "ngFor", "ngForOf"], [3, "nzTreeNode", "nzSelectMode", "nzShowLine", "nzExpandedIcon", "nzDraggable", "nzCheckable", "nzShowExpand", "nzAsyncData", "nzSearchValue", "nzHideUnMatched", "nzBeforeDrop", "nzExpandAll", "nzShowIcon", "nzTreeTemplate", "nzNoAnimation"]], template: function NzTreeComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "ul", 0);
            ɵɵtemplate(1, NzTreeComponent_ng_container_1_Template, 2, 16, "ng-container", 1);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵproperty("ngClass", ctx.classMap);
            ɵɵadvance(1);
            ɵɵproperty("ngForOf", ctx.nzNodes);
        } }, directives: [NgClass, NgForOf, NzTreeNodeComponent, NzNoAnimationDirective], encapsulation: 2, changeDetection: 0 });
    __decorate([
        InputBoolean(), WithConfig(NZ_CONFIG_COMPONENT_NAME, false),
        __metadata("design:type", Boolean)
    ], NzTreeComponent.prototype, "nzShowIcon", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzTreeComponent.prototype, "nzShowExpand", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTreeComponent.prototype, "nzShowLine", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTreeComponent.prototype, "nzCheckable", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTreeComponent.prototype, "nzAsyncData", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzTreeComponent.prototype, "nzDraggable", void 0);
    __decorate([
        InputBoolean(), WithConfig(NZ_CONFIG_COMPONENT_NAME, false),
        __metadata("design:type", Boolean)
    ], NzTreeComponent.prototype, "nzHideUnMatched", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTreeComponent.prototype, "nzSelectMode", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTreeComponent.prototype, "nzCheckStrictly", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzTreeComponent.prototype, "nzBlockNode", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTreeComponent.prototype, "nzExpandAll", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], NzTreeComponent.prototype, "nzDefaultExpandAll", null);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTreeComponent.prototype, "nzMultiple", void 0);
    return NzTreeComponent;
}(NzTreeBase));
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzTreeComponent, [{
        type: Component,
        args: [{
                selector: 'nz-tree',
                exportAs: 'nzTree',
                templateUrl: './nz-tree.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    NzTreeService,
                    {
                        provide: NzTreeBaseService,
                        useFactory: NzTreeServiceFactory,
                        deps: [[new SkipSelf(), new Optional(), NzTreeHigherOrderServiceToken], NzTreeService]
                    },
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((function () { return NzTreeComponent; })),
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: NzTreeBaseService }, { type: NzConfigService }, { type: ChangeDetectorRef }, { type: NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { nzShowIcon: [{
            type: Input
        }], nzShowExpand: [{
            type: Input
        }], nzShowLine: [{
            type: Input
        }], nzExpandedIcon: [{
            type: Input
        }], nzCheckable: [{
            type: Input
        }], nzAsyncData: [{
            type: Input
        }], nzDraggable: [{
            type: Input
        }], nzHideUnMatched: [{
            type: Input
        }], nzSelectMode: [{
            type: Input
        }], nzCheckStrictly: [{
            type: Input
        }], nzBlockNode: [{
            type: Input
        }], nzExpandAll: [{
            type: Input
        }], nzTreeTemplate: [{
            type: Input
        }], nzTreeTemplateChild: [{
            type: ContentChild,
            args: ['nzTreeTemplate', { static: true }]
        }], nzDefaultExpandAll: [{
            type: Input
        }], nzBeforeDrop: [{
            type: Input
        }], nzMultiple: [{
            type: Input
        }], nzData: [{
            type: Input
        }], nzDefaultExpandedKeys: [{
            type: Input
        }], nzDefaultSelectedKeys: [{
            type: Input
        }], nzDefaultCheckedKeys: [{
            type: Input
        }], nzExpandedKeys: [{
            type: Input
        }], nzSelectedKeys: [{
            type: Input
        }], nzCheckedKeys: [{
            type: Input
        }], nzSearchValue: [{
            type: Input
        }], nzExpandedKeysChange: [{
            type: Output
        }], nzSelectedKeysChange: [{
            type: Output
        }], nzCheckedKeysChange: [{
            type: Output
        }], nzSearchValueChange: [{
            type: Output
        }], nzOnSearchNode: [{
            type: Output
        }], nzClick: [{
            type: Output
        }], nzDblClick: [{
            type: Output
        }], nzContextMenu: [{
            type: Output
        }], nzCheckBoxChange: [{
            type: Output
        }], nzExpandChange: [{
            type: Output
        }], nzOnDragStart: [{
            type: Output
        }], nzOnDragEnter: [{
            type: Output
        }], nzOnDragOver: [{
            type: Output
        }], nzOnDragLeave: [{
            type: Output
        }], nzOnDrop: [{
            type: Output
        }], nzOnDragEnd: [{
            type: Output
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzTreeModule = /** @class */ (function () {
    function NzTreeModule() {
    }
    /** @nocollapse */ NzTreeModule.ɵmod = ɵɵdefineNgModule({ type: NzTreeModule });
    /** @nocollapse */ NzTreeModule.ɵinj = ɵɵdefineInjector({ factory: function NzTreeModule_Factory(t) { return new (t || NzTreeModule)(); }, imports: [[CommonModule, NzAddOnModule, NzIconModule, NzNoAnimationModule, NzHighlightModule]] });
    return NzTreeModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzTreeModule, { declarations: [NzTreeComponent, NzTreeNodeComponent], imports: [CommonModule, NzAddOnModule, NzIconModule, NzNoAnimationModule, NzHighlightModule], exports: [NzTreeComponent, NzTreeNodeComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzTreeModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NzAddOnModule, NzIconModule, NzNoAnimationModule, NzHighlightModule],
                declarations: [NzTreeComponent, NzTreeNodeComponent],
                exports: [NzTreeComponent, NzTreeNodeComponent]
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

export { NzTreeComponent, NzTreeModule, NzTreeNodeComponent, NzTreeService, NzTreeServiceFactory };
//# sourceMappingURL=ng-zorro-antd-tree.js.map
