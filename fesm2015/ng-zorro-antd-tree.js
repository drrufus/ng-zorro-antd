import { NgClass, NgIf, NgTemplateOutlet, NgForOf, CommonModule } from '@angular/common';
import { ɵɵtemplate, ɵɵnextContext, ɵɵproperty, ɵɵpureFunction1, ɵɵelement, ɵɵclassProp, ɵɵelementContainerStart, ɵɵelementContainerEnd, ɵɵadvance, ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵelementEnd, ɵɵpipe, ɵɵpropertyInterpolate, ɵɵattribute, ɵɵpipeBind4, ɵɵsanitizeHtml, TemplateRef, ɵɵdirectiveInject, NgZone, Renderer2, ElementRef, ChangeDetectorRef, ɵɵdefineComponent, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵNgOnChangesFeature, ɵɵstyleProp, ɵsetClassMetadata, Component, ChangeDetectionStrategy, Host, Optional, ViewChild, Input, HostListener, ɵɵdefineInjectable, ɵɵgetInheritedFactory, Injectable, EventEmitter, ɵɵstaticContentQuery, ɵɵProvidersFeature, SkipSelf, forwardRef, ɵɵInheritDefinitionFeature, ContentChild, Output, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { warnDeprecation, NzTreeBaseService, NzNoAnimationDirective, NzHighlightPipe, treeCollapseMotion, InputBoolean, NzTreeBase, isNotNil, NzConfigService, NzTreeHigherOrderServiceToken, WithConfig, NzAddOnModule, NzNoAnimationModule, NzHighlightModule } from 'ng-zorro-antd/core';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { __decorate, __metadata } from 'tslib';
import { Subject, fromEvent, ReplaySubject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

const _c0 = ["dragElement"];
function NzTreeNodeComponent_ng_container_2_ng_container_2_ng_container_1_1_ng_template_0_Template(rf, ctx) { }
const _c1 = function (a0) { return { $implicit: a0 }; };
function NzTreeNodeComponent_ng_container_2_ng_container_2_ng_container_1_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, NzTreeNodeComponent_ng_container_2_ng_container_2_ng_container_1_1_ng_template_0_Template, 0, 0, "ng-template", 3);
} if (rf & 2) {
    const ctx_r982 = ɵɵnextContext(4);
    ɵɵproperty("ngTemplateOutlet", ctx_r982.nzExpandedIcon)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c1, ctx_r982.nzTreeNode));
} }
function NzTreeNodeComponent_ng_container_2_ng_container_2_ng_container_1_i_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 8);
} if (rf & 2) {
    const ctx_r983 = ɵɵnextContext(4);
    ɵɵclassProp("ant-select-switcher-icon", ctx_r983.nzSelectMode)("ant-tree-switcher-icon", !ctx_r983.nzSelectMode);
} }
function NzTreeNodeComponent_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzTreeNodeComponent_ng_container_2_ng_container_2_ng_container_1_1_Template, 1, 4, undefined, 2);
    ɵɵtemplate(2, NzTreeNodeComponent_ng_container_2_ng_container_2_ng_container_1_i_2_Template, 1, 2, "i", 7);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r980 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r980.isTemplateRef(ctx_r980.nzExpandedIcon));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r980.isTemplateRef(ctx_r980.nzExpandedIcon));
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
    const ctx_r978 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r978.nzTreeNode.isLoading);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r978.nzTreeNode.isLoading);
} }
function NzTreeNodeComponent_ng_container_2_ng_container_3_1_ng_template_0_Template(rf, ctx) { }
function NzTreeNodeComponent_ng_container_2_ng_container_3_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, NzTreeNodeComponent_ng_container_2_ng_container_3_1_ng_template_0_Template, 0, 0, "ng-template", 3);
} if (rf & 2) {
    const ctx_r985 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r985.nzExpandedIcon)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c1, ctx_r985.nzTreeNode));
} }
function NzTreeNodeComponent_ng_container_2_ng_container_3_ng_container_2_i_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 12);
} if (rf & 2) {
    const ctx_r988 = ɵɵnextContext(4);
    ɵɵproperty("nzType", ctx_r988.isSwitcherOpen ? "minus-square" : "plus-square");
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
    const ctx_r986 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r986.isShowLineIcon);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r986.isShowLineIcon);
} }
function NzTreeNodeComponent_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzTreeNodeComponent_ng_container_2_ng_container_3_1_Template, 1, 4, undefined, 2);
    ɵɵtemplate(2, NzTreeNodeComponent_ng_container_2_ng_container_3_ng_container_2_Template, 3, 2, "ng-container", 2);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r979 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r979.isTemplateRef(ctx_r979.nzExpandedIcon));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r979.isTemplateRef(ctx_r979.nzExpandedIcon));
} }
function NzTreeNodeComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r991 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 5);
    ɵɵlistener("click", function NzTreeNodeComponent_ng_container_2_Template_span_click_1_listener($event) { ɵɵrestoreView(_r991); const ctx_r990 = ɵɵnextContext(); return ctx_r990._clickExpand($event); });
    ɵɵtemplate(2, NzTreeNodeComponent_ng_container_2_ng_container_2_Template, 3, 2, "ng-container", 2);
    ɵɵtemplate(3, NzTreeNodeComponent_ng_container_2_ng_container_3_Template, 3, 2, "ng-container", 2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r973 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ctx_r973.nzNodeSwitcherClass);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r973.isShowSwitchIcon);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r973.nzShowLine);
} }
function NzTreeNodeComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r993 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 5);
    ɵɵlistener("click", function NzTreeNodeComponent_ng_container_3_Template_span_click_1_listener($event) { ɵɵrestoreView(_r993); const ctx_r992 = ɵɵnextContext(); return ctx_r992._clickCheckBox($event); });
    ɵɵelement(2, "span");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r974 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ctx_r974.nzNodeCheckboxClass);
    ɵɵadvance(1);
    ɵɵclassProp("ant-tree-checkbox-inner", !ctx_r974.nzSelectMode)("ant-select-tree-checkbox-inner", ctx_r974.nzSelectMode);
} }
function NzTreeNodeComponent_ng_container_4_span_2_i_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 19);
} if (rf & 2) {
    const ctx_r995 = ɵɵnextContext(3);
    ɵɵproperty("nzType", ctx_r995.nzIcon);
} }
function NzTreeNodeComponent_ng_container_4_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 17);
    ɵɵelementStart(1, "span", 17);
    ɵɵtemplate(2, NzTreeNodeComponent_ng_container_4_span_2_i_2_Template, 1, 1, "i", 18);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r994 = ɵɵnextContext(2);
    ɵɵclassProp("ant-tree-icon__open", ctx_r994.isSwitcherOpen)("ant-tree-icon__close", ctx_r994.isSwitcherClose)("ant-tree-icon_loading", ctx_r994.nzTreeNode.isLoading);
    ɵɵproperty("ngClass", ctx_r994.nzNodeContentLoadingClass);
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ctx_r994.nzNodeContentIconClass);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r994.nzIcon);
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
    const ctx_r975 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵclassProp("draggable", ctx_r975.canDraggable);
    ɵɵpropertyInterpolate("title", ctx_r975.nzTreeNode.title);
    ɵɵproperty("ngClass", ctx_r975.nzNodeContentClass);
    ɵɵattribute("draggable", ctx_r975.canDraggable)("aria-grabbed", ctx_r975.canDraggable);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r975.nzTreeNode.icon && ctx_r975.nzShowIcon);
    ɵɵadvance(1);
    ɵɵproperty("innerHTML", ɵɵpipeBind4(4, 7, ctx_r975.nzTreeNode.title, ctx_r975.nzSearchValue, "", "font-highlight"), ɵɵsanitizeHtml);
} }
function NzTreeNodeComponent_ng_template_5_Template(rf, ctx) { }
function NzTreeNodeComponent_ul_6_nz_tree_node_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "nz-tree-node", 22);
} if (rf & 2) {
    const node_r997 = ctx.$implicit;
    const ctx_r996 = ɵɵnextContext(2);
    ɵɵproperty("nzTreeNode", node_r997)("nzShowExpand", ctx_r996.nzShowExpand)("@.disabled", ctx_r996.noAnimation == null ? null : ctx_r996.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r996.noAnimation == null ? null : ctx_r996.noAnimation.nzNoAnimation)("nzSelectMode", ctx_r996.nzSelectMode)("nzShowLine", ctx_r996.nzShowLine)("nzExpandedIcon", ctx_r996.nzExpandedIcon)("nzDraggable", ctx_r996.nzDraggable)("nzCheckable", ctx_r996.nzCheckable)("nzAsyncData", ctx_r996.nzAsyncData)("nzExpandAll", ctx_r996.nzExpandAll)("nzShowIcon", ctx_r996.nzShowIcon)("nzSearchValue", ctx_r996.nzSearchValue)("nzHideUnMatched", ctx_r996.nzHideUnMatched)("nzBeforeDrop", ctx_r996.nzBeforeDrop)("nzTreeTemplate", ctx_r996.nzTreeTemplate);
} }
function NzTreeNodeComponent_ul_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "ul", 20);
    ɵɵtemplate(1, NzTreeNodeComponent_ul_6_nz_tree_node_1_Template, 1, 16, "nz-tree-node", 21);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r977 = ɵɵnextContext();
    ɵɵclassProp("ant-tree-child-tree-open", !ctx_r977.nzSelectMode || ctx_r977.nzTreeNode.isExpanded);
    ɵɵproperty("@.disabled", ctx_r977.noAnimation == null ? null : ctx_r977.noAnimation.nzNoAnimation)("@treeCollapseMotion", undefined);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r977.nzTreeNode.getChildren());
} }
class NzTreeNodeComponent {
    constructor(nzTreeService, ngZone, renderer, elRef, cdr, noAnimation) {
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
    set nzDraggable(value) {
        this._nzDraggable = value;
        this.handDragEvent();
    }
    get nzDraggable() {
        return this._nzDraggable;
    }
    /**
     * @deprecated use `nzExpandAll` instead.
     */
    set nzDefaultExpandAll(value) {
        warnDeprecation(`'nzDefaultExpandAll' is going to be removed in 9.0.0. Please use 'nzExpandAll' instead.`);
        this._nzExpandAll = value;
        if (value && this.nzTreeNode && !this.nzTreeNode.isLeaf) {
            this.nzTreeNode.isExpanded = true;
        }
    }
    get nzDefaultExpandAll() {
        return this._nzExpandAll;
    }
    // default set
    set nzExpandAll(value) {
        this._nzExpandAll = value;
        if (value && this.nzTreeNode && !this.nzTreeNode.isLeaf) {
            this.nzTreeNode.isExpanded = true;
        }
    }
    get nzExpandAll() {
        return this._nzExpandAll;
    }
    get nzIcon() {
        return this.nzTreeNode.icon;
    }
    get canDraggable() {
        return this.nzDraggable && !this.nzTreeNode.isDisabled ? true : null;
    }
    get isShowLineIcon() {
        return !this.nzTreeNode.isLeaf && this.nzShowLine;
    }
    get isShowSwitchIcon() {
        return !this.nzTreeNode.isLeaf && !this.nzShowLine;
    }
    get isSwitcherOpen() {
        return this.nzTreeNode.isExpanded && !this.nzTreeNode.isLeaf;
    }
    get isSwitcherClose() {
        return !this.nzTreeNode.isExpanded && !this.nzTreeNode.isLeaf;
    }
    get displayStyle() {
        // to hide unmatched nodes
        return this.nzSearchValue &&
            this.nzHideUnMatched &&
            !this.nzTreeNode.isMatched &&
            !this.nzTreeNode.isExpanded &&
            this.nzTreeNode.canHide
            ? 'none'
            : '';
    }
    /**
     * reset node class
     */
    setClassMap() {
        this.prefixCls = this.nzSelectMode ? 'ant-select-tree' : 'ant-tree';
        this.nzNodeClass = {
            [`${this.prefixCls}-treenode-disabled`]: this.nzTreeNode.isDisabled,
            [`${this.prefixCls}-treenode-switcher-open`]: this.isSwitcherOpen,
            [`${this.prefixCls}-treenode-switcher-close`]: this.isSwitcherClose,
            [`${this.prefixCls}-treenode-checkbox-checked`]: this.nzTreeNode.isChecked,
            [`${this.prefixCls}-treenode-checkbox-indeterminate`]: this.nzTreeNode.isHalfChecked,
            [`${this.prefixCls}-treenode-selected`]: this.nzTreeNode.isSelected,
            [`${this.prefixCls}-treenode-loading`]: this.nzTreeNode.isLoading
        };
        this.nzNodeSwitcherClass = {
            [`${this.prefixCls}-switcher`]: true,
            [`${this.prefixCls}-switcher-noop`]: this.nzTreeNode.isLeaf,
            [`${this.prefixCls}-switcher_open`]: this.isSwitcherOpen,
            [`${this.prefixCls}-switcher_close`]: this.isSwitcherClose
        };
        this.nzNodeCheckboxClass = {
            [`${this.prefixCls}-checkbox`]: true,
            [`${this.prefixCls}-checkbox-checked`]: this.nzTreeNode.isChecked,
            [`${this.prefixCls}-checkbox-indeterminate`]: this.nzTreeNode.isHalfChecked,
            [`${this.prefixCls}-checkbox-disabled`]: this.nzTreeNode.isDisabled || this.nzTreeNode.isDisableCheckbox
        };
        this.nzNodeContentClass = {
            [`${this.prefixCls}-node-content-wrapper`]: true,
            [`${this.prefixCls}-node-content-wrapper-open`]: this.isSwitcherOpen,
            [`${this.prefixCls}-node-content-wrapper-close`]: this.isSwitcherClose,
            [`${this.prefixCls}-node-selected`]: this.nzTreeNode.isSelected
        };
        this.nzNodeContentIconClass = {
            [`${this.prefixCls}-iconEle`]: true,
            [`${this.prefixCls}-icon__customize`]: true
        };
        this.nzNodeContentLoadingClass = {
            [`${this.prefixCls}-iconEle`]: true
        };
    }
    onMousedown(event) {
        if (this.nzSelectMode) {
            event.preventDefault();
        }
    }
    /**
     * click node to select, 200ms to dbl click
     */
    nzClick(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.nzTreeNode.isSelectable && !this.nzTreeNode.isDisabled) {
            this.nzTreeNode.isSelected = !this.nzTreeNode.isSelected;
        }
        const eventNext = this.nzTreeService.formatEvent('click', this.nzTreeNode, event);
        this.nzTreeService.triggerEventChange$.next(eventNext);
    }
    nzDblClick(event) {
        event.preventDefault();
        event.stopPropagation();
        const eventNext = this.nzTreeService.formatEvent('dblclick', this.nzTreeNode, event);
        this.nzTreeService.triggerEventChange$.next(eventNext);
    }
    /**
     * @param event
     */
    nzContextMenu(event) {
        event.preventDefault();
        event.stopPropagation();
        const eventNext = this.nzTreeService.formatEvent('contextmenu', this.nzTreeNode, event);
        this.nzTreeService.triggerEventChange$.next(eventNext);
    }
    /**
     * collapse node
     * @param event
     */
    _clickExpand(event) {
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
            const eventNext = this.nzTreeService.formatEvent('expand', this.nzTreeNode, event);
            this.nzTreeService.triggerEventChange$.next(eventNext);
        }
    }
    setDisplayForChildNodes(parentNode) {
        const { children } = parentNode;
        if (children.length > 0) {
            children.map(node => {
                const canHide = !node.isMatched;
                node.canHide = canHide;
                this.setDisplayForChildNodes(node);
            });
        }
    }
    setDisplayForParentNodes(targetNode) {
        const parentNode = targetNode.getParentNode();
        if (parentNode) {
            parentNode.canHide = false;
            this.setDisplayForParentNodes(parentNode);
        }
    }
    /**
     * check node
     * @param event
     */
    _clickCheckBox(event) {
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
        const eventNext = this.nzTreeService.formatEvent('check', this.nzTreeNode, event);
        this.nzTreeService.triggerEventChange$.next(eventNext);
    }
    /**
     * drag event
     * @param e
     */
    clearDragClass() {
        const dragClass = ['drag-over-gap-top', 'drag-over-gap-bottom', 'drag-over'];
        dragClass.forEach(e => {
            this.renderer.removeClass(this.dragElement.nativeElement, e);
        });
    }
    handleDragStart(e) {
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
        const eventNext = this.nzTreeService.formatEvent('dragstart', this.nzTreeNode, e);
        this.nzTreeService.triggerEventChange$.next(eventNext);
    }
    handleDragEnter(e) {
        e.preventDefault();
        e.stopPropagation();
        // reset position
        this.dragPos = 2;
        this.ngZone.run(() => {
            const node = this.nzTreeService.getSelectedNode();
            if (node && node.key !== this.nzTreeNode.key && !this.nzTreeNode.isExpanded && !this.nzTreeNode.isLeaf) {
                this.nzTreeNode.isExpanded = true;
            }
            const eventNext = this.nzTreeService.formatEvent('dragenter', this.nzTreeNode, e);
            this.nzTreeService.triggerEventChange$.next(eventNext);
        });
    }
    handleDragOver(e) {
        e.preventDefault();
        e.stopPropagation();
        const dropPosition = this.nzTreeService.calcDropPosition(e);
        if (this.dragPos !== dropPosition) {
            this.clearDragClass();
            this.dragPos = dropPosition;
            // leaf node will pass
            if (!(this.dragPos === 0 && this.nzTreeNode.isLeaf)) {
                this.renderer.addClass(this.dragElement.nativeElement, this.dragPosClass[this.dragPos]);
            }
        }
        const eventNext = this.nzTreeService.formatEvent('dragover', this.nzTreeNode, e);
        this.nzTreeService.triggerEventChange$.next(eventNext);
    }
    handleDragLeave(e) {
        e.stopPropagation();
        this.ngZone.run(() => {
            this.clearDragClass();
        });
        const eventNext = this.nzTreeService.formatEvent('dragleave', this.nzTreeNode, e);
        this.nzTreeService.triggerEventChange$.next(eventNext);
    }
    handleDragDrop(e) {
        e.preventDefault();
        e.stopPropagation();
        this.ngZone.run(() => {
            this.clearDragClass();
            const node = this.nzTreeService.getSelectedNode();
            if (!node || (node && node.key === this.nzTreeNode.key) || (this.dragPos === 0 && this.nzTreeNode.isLeaf)) {
                return;
            }
            // pass if node is leafNo
            const dropEvent = this.nzTreeService.formatEvent('drop', this.nzTreeNode, e);
            const dragEndEvent = this.nzTreeService.formatEvent('dragend', this.nzTreeNode, e);
            if (this.nzBeforeDrop) {
                this.nzBeforeDrop({
                    dragNode: this.nzTreeService.getSelectedNode(),
                    node: this.nzTreeNode,
                    pos: this.dragPos
                }).subscribe((canDrop) => {
                    if (canDrop) {
                        this.nzTreeService.dropAndApply(this.nzTreeNode, this.dragPos);
                    }
                    this.nzTreeService.triggerEventChange$.next(dropEvent);
                    this.nzTreeService.triggerEventChange$.next(dragEndEvent);
                });
            }
            else if (this.nzTreeNode) {
                this.nzTreeService.dropAndApply(this.nzTreeNode, this.dragPos);
                this.nzTreeService.triggerEventChange$.next(dropEvent);
            }
        });
    }
    handleDragEnd(e) {
        e.stopPropagation();
        this.ngZone.run(() => {
            // if user do not custom beforeDrop
            if (!this.nzBeforeDrop) {
                const eventNext = this.nzTreeService.formatEvent('dragend', this.nzTreeNode, e);
                this.nzTreeService.triggerEventChange$.next(eventNext);
            }
        });
    }
    /**
     * Listening to dragging events.
     */
    handDragEvent() {
        this.ngZone.runOutsideAngular(() => {
            if (this.nzDraggable) {
                this.destroy$ = new Subject();
                fromEvent(this.elRef.nativeElement, 'dragstart')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((e) => this.handleDragStart(e));
                fromEvent(this.elRef.nativeElement, 'dragenter')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((e) => this.handleDragEnter(e));
                fromEvent(this.elRef.nativeElement, 'dragover')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((e) => this.handleDragOver(e));
                fromEvent(this.elRef.nativeElement, 'dragleave')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((e) => this.handleDragLeave(e));
                fromEvent(this.elRef.nativeElement, 'drop')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((e) => this.handleDragDrop(e));
                fromEvent(this.elRef.nativeElement, 'dragend')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((e) => this.handleDragEnd(e));
            }
            else {
                this.destroy$.next();
                this.destroy$.complete();
            }
        });
    }
    isTemplateRef(value) {
        return value instanceof TemplateRef;
    }
    markForCheck() {
        this.cdr.markForCheck();
    }
    ngOnInit() {
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
            .pipe(filter(data => data.node.key === this.nzTreeNode.key), takeUntil(this.destroy$))
            .subscribe(() => {
            this.setClassMap();
            this.markForCheck();
        });
        this.setClassMap();
    }
    ngOnChanges() {
        this.setClassMap();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
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

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTreeService extends NzTreeBaseService {
}
/** @nocollapse */ NzTreeService.ɵfac = function NzTreeService_Factory(t) { return ɵNzTreeService_BaseFactory(t || NzTreeService); };
/** @nocollapse */ NzTreeService.ɵprov = ɵɵdefineInjectable({ token: NzTreeService, factory: NzTreeService.ɵfac });
const ɵNzTreeService_BaseFactory = ɵɵgetInheritedFactory(NzTreeService);
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzTreeService, [{
        type: Injectable
    }], null, null); })();

const _c0$1 = ["nzTreeTemplate"];
function NzTreeComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "nz-tree-node", 2);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const node_r999 = ctx.$implicit;
    const ctx_r998 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("nzTreeNode", node_r999)("nzSelectMode", ctx_r998.nzSelectMode)("nzShowLine", ctx_r998.nzShowLine)("nzExpandedIcon", ctx_r998.nzExpandedIcon)("nzDraggable", ctx_r998.nzDraggable)("nzCheckable", ctx_r998.nzCheckable)("nzShowExpand", ctx_r998.nzShowExpand)("nzAsyncData", ctx_r998.nzAsyncData)("nzSearchValue", ctx_r998.nzSearchValue)("nzHideUnMatched", ctx_r998.nzHideUnMatched)("nzBeforeDrop", ctx_r998.nzBeforeDrop)("nzExpandAll", ctx_r998.nzExpandAll)("nzShowIcon", ctx_r998.nzShowIcon)("nzTreeTemplate", ctx_r998.treeTemplate)("@.disabled", ctx_r998.noAnimation == null ? null : ctx_r998.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r998.noAnimation == null ? null : ctx_r998.noAnimation.nzNoAnimation);
} }
function NzTreeServiceFactory(higherOrderService, treeService) {
    return higherOrderService ? higherOrderService : treeService;
}
const NZ_CONFIG_COMPONENT_NAME = 'tree';
class NzTreeComponent extends NzTreeBase {
    constructor(nzTreeService, nzConfigService, cdr, noAnimation) {
        super(nzTreeService);
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.noAnimation = noAnimation;
        this.nzShowExpand = true;
        this.nzShowLine = false;
        this.nzCheckable = false;
        this.nzAsyncData = false;
        this.nzDraggable = false;
        this.nzSelectMode = false;
        this.nzCheckStrictly = false;
        this.nzExpandAll = false;
        this._nzDefaultExpandAll = false;
        this.nzMultiple = false;
        this.nzExpandedKeysChange = new EventEmitter();
        this.nzSelectedKeysChange = new EventEmitter();
        this.nzCheckedKeysChange = new EventEmitter();
        this.nzSearchValueChange = new EventEmitter();
        /**
         * @deprecated use `nzSearchValueChange` instead.
         */
        this.nzOnSearchNode = new EventEmitter();
        this.nzClick = new EventEmitter();
        this.nzDblClick = new EventEmitter();
        this.nzContextMenu = new EventEmitter();
        this.nzCheckBoxChange = new EventEmitter();
        this.nzExpandChange = new EventEmitter();
        this.nzOnDragStart = new EventEmitter();
        this.nzOnDragEnter = new EventEmitter();
        this.nzOnDragOver = new EventEmitter();
        this.nzOnDragLeave = new EventEmitter();
        this.nzOnDrop = new EventEmitter();
        this.nzOnDragEnd = new EventEmitter();
        this.nzDefaultSubject = new ReplaySubject(6);
        this.destroy$ = new Subject();
        this.prefixCls = 'ant-tree';
        this.classMap = {};
        this.onChange = () => null;
        this.onTouched = () => null;
    }
    get treeTemplate() {
        return this.nzTreeTemplate || this.nzTreeTemplateChild;
    }
    /**
     * @deprecated 9.0.0 use `nzExpandAll` instead.
     */
    set nzDefaultExpandAll(value) {
        warnDeprecation(`'nzDefaultExpandAll' would be removed in 9.0.0. Please use 'nzExpandAll' instead.`);
        this.nzExpandAll = value;
        this._nzDefaultExpandAll = value;
    }
    get nzDefaultExpandAll() {
        return this._nzDefaultExpandAll;
    }
    set nzData(value) {
        this.initNzData(value);
    }
    /**
     * @deprecated 9.0.0 - use `nzExpandedKeys` instead.
     */
    set nzDefaultExpandedKeys(value) {
        warnDeprecation(`'nzDefaultExpandedKeys' would be removed in 9.0.0. Please use 'nzExpandedKeys' instead.`);
        this.nzDefaultSubject.next({ type: 'nzExpandedKeys', keys: value });
    }
    /**
     * @deprecated 9.0.0 - use `nzSelectedKeys` instead.
     */
    set nzDefaultSelectedKeys(value) {
        warnDeprecation(`'nzDefaultSelectedKeys' would be removed in 9.0.0. Please use 'nzSelectedKeys' instead.`);
        this.nzDefaultSubject.next({ type: 'nzSelectedKeys', keys: value });
    }
    /**
     * @deprecated 9.0.0 - use `nzCheckedKeys` instead.
     */
    set nzDefaultCheckedKeys(value) {
        warnDeprecation(`'nzDefaultCheckedKeys' would be removed in 9.0.0. Please use 'nzCheckedKeys' instead.`);
        this.nzDefaultSubject.next({ type: 'nzCheckedKeys', keys: value });
    }
    set nzExpandedKeys(value) {
        this.nzDefaultSubject.next({ type: 'nzExpandedKeys', keys: value });
    }
    set nzSelectedKeys(value) {
        this.nzDefaultSubject.next({ type: 'nzSelectedKeys', keys: value });
    }
    set nzCheckedKeys(value) {
        this.nzDefaultSubject.next({ type: 'nzCheckedKeys', keys: value });
    }
    set nzSearchValue(value) {
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
    }
    get nzSearchValue() {
        return this._searchValue;
    }
    /**
     * To render nodes if root is changed.
     */
    get nzNodes() {
        return this.nzTreeService.rootNodes;
    }
    setClassMap() {
        this.classMap = {
            [this.prefixCls]: true,
            [this.prefixCls + '-show-line']: this.nzShowLine,
            [`${this.prefixCls}-icon-hide`]: !this.nzShowIcon,
            [`${this.prefixCls}-block-node`]: this.nzBlockNode,
            ['draggable-tree']: this.nzDraggable,
            ['ant-select-tree']: this.nzSelectMode
        };
    }
    writeValue(value) {
        this.initNzData(value);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    // tslint:disable-next-line:no-any
    initNzData(value) {
        if (Array.isArray(value)) {
            this.nzTreeService.isCheckStrictly = this.nzCheckStrictly;
            this.nzTreeService.isMultiple = this.nzMultiple;
            this.nzTreeService.initTree(this.coerceTreeNodes(value));
        }
    }
    ngOnInit() {
        this.setClassMap();
        this.nzDefaultSubject.pipe(takeUntil(this.destroy$)).subscribe((data) => {
            if (!data || !data.keys) {
                return;
            }
            switch (data.type) {
                case 'nzExpandedKeys':
                    this.nzTreeService.calcExpandedKeys(data.keys, this.nzNodes);
                    this.nzExpandedKeysChange.emit(data.keys);
                    break;
                case 'nzSelectedKeys':
                    this.nzTreeService.calcSelectedKeys(data.keys, this.nzNodes, this.nzMultiple);
                    this.nzSelectedKeysChange.emit(data.keys);
                    break;
                case 'nzCheckedKeys':
                    this.nzTreeService.calcCheckedKeys(data.keys, this.nzNodes, this.nzCheckStrictly);
                    this.nzCheckedKeysChange.emit(data.keys);
                    break;
            }
            this.cdr.markForCheck();
        });
        this.nzTreeService
            .eventTriggerChanged()
            .pipe(takeUntil(this.destroy$))
            .subscribe(data => {
            switch (data.eventName) {
                case 'expand':
                    this.nzExpandChange.emit(data);
                    break;
                case 'click':
                    this.nzClick.emit(data);
                    break;
                case 'check':
                    this.nzCheckBoxChange.emit(data);
                    break;
                case 'dblclick':
                    this.nzDblClick.emit(data);
                    break;
                case 'contextmenu':
                    this.nzContextMenu.emit(data);
                    break;
                // drag drop
                case 'dragstart':
                    this.nzOnDragStart.emit(data);
                    break;
                case 'dragenter':
                    this.nzOnDragEnter.emit(data);
                    break;
                case 'dragover':
                    this.nzOnDragOver.emit(data);
                    break;
                case 'dragleave':
                    this.nzOnDragLeave.emit(data);
                    break;
                case 'drop':
                    this.nzOnDrop.emit(data);
                    break;
                case 'dragend':
                    this.nzOnDragEnd.emit(data);
                    break;
            }
        });
    }
    ngOnChanges(changes) {
        if (changes.nzCheckStrictly) {
            this.nzTreeService.isCheckStrictly = this.nzCheckStrictly;
        }
        if (changes.nzMultiple) {
            this.nzTreeService.isMultiple = this.nzMultiple;
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
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
                useExisting: forwardRef((() => NzTreeComponent)),
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
                        useExisting: forwardRef((() => NzTreeComponent)),
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
class NzTreeModule {
}
/** @nocollapse */ NzTreeModule.ɵmod = ɵɵdefineNgModule({ type: NzTreeModule });
/** @nocollapse */ NzTreeModule.ɵinj = ɵɵdefineInjector({ factory: function NzTreeModule_Factory(t) { return new (t || NzTreeModule)(); }, imports: [[CommonModule, NzAddOnModule, NzIconModule, NzNoAnimationModule, NzHighlightModule]] });
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
