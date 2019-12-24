import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Host, HostListener, Input, NgZone, Optional, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { InputBoolean, NzNoAnimationDirective, NzTreeBaseService, NzTreeNode, treeCollapseMotion, warnDeprecation } from 'ng-zorro-antd/core';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/icon";
const _c0 = ["dragElement"];
function NzTreeNodeComponent_ng_container_2_ng_container_2_ng_container_1_1_ng_template_0_Template(rf, ctx) { }
const _c1 = function (a0) { return { $implicit: a0 }; };
function NzTreeNodeComponent_ng_container_2_ng_container_2_ng_container_1_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NzTreeNodeComponent_ng_container_2_ng_container_2_ng_container_1_1_ng_template_0_Template, 0, 0, "ng-template", 3);
} if (rf & 2) {
    const ctx_r982 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r982.nzExpandedIcon)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c1, ctx_r982.nzTreeNode));
} }
function NzTreeNodeComponent_ng_container_2_ng_container_2_ng_container_1_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 8);
} if (rf & 2) {
    const ctx_r983 = i0.ɵɵnextContext(4);
    i0.ɵɵclassProp("ant-select-switcher-icon", ctx_r983.nzSelectMode)("ant-tree-switcher-icon", !ctx_r983.nzSelectMode);
} }
function NzTreeNodeComponent_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzTreeNodeComponent_ng_container_2_ng_container_2_ng_container_1_1_Template, 1, 4, undefined, 2);
    i0.ɵɵtemplate(2, NzTreeNodeComponent_ng_container_2_ng_container_2_ng_container_1_i_2_Template, 1, 2, "i", 7);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r980 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r980.isTemplateRef(ctx_r980.nzExpandedIcon));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r980.isTemplateRef(ctx_r980.nzExpandedIcon));
} }
function NzTreeNodeComponent_ng_container_2_ng_container_2_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 9);
} if (rf & 2) {
    i0.ɵɵproperty("nzSpin", true);
} }
function NzTreeNodeComponent_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzTreeNodeComponent_ng_container_2_ng_container_2_ng_container_1_Template, 3, 2, "ng-container", 2);
    i0.ɵɵtemplate(2, NzTreeNodeComponent_ng_container_2_ng_container_2_i_2_Template, 1, 1, "i", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r978 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r978.nzTreeNode.isLoading);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r978.nzTreeNode.isLoading);
} }
function NzTreeNodeComponent_ng_container_2_ng_container_3_1_ng_template_0_Template(rf, ctx) { }
function NzTreeNodeComponent_ng_container_2_ng_container_3_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NzTreeNodeComponent_ng_container_2_ng_container_3_1_ng_template_0_Template, 0, 0, "ng-template", 3);
} if (rf & 2) {
    const ctx_r985 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r985.nzExpandedIcon)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c1, ctx_r985.nzTreeNode));
} }
function NzTreeNodeComponent_ng_container_2_ng_container_3_ng_container_2_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 12);
} if (rf & 2) {
    const ctx_r988 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("nzType", ctx_r988.isSwitcherOpen ? "minus-square" : "plus-square");
} }
function NzTreeNodeComponent_ng_container_2_ng_container_3_ng_container_2_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 13);
} }
function NzTreeNodeComponent_ng_container_2_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzTreeNodeComponent_ng_container_2_ng_container_3_ng_container_2_i_1_Template, 1, 1, "i", 10);
    i0.ɵɵtemplate(2, NzTreeNodeComponent_ng_container_2_ng_container_3_ng_container_2_i_2_Template, 1, 0, "i", 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r986 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r986.isShowLineIcon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r986.isShowLineIcon);
} }
function NzTreeNodeComponent_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzTreeNodeComponent_ng_container_2_ng_container_3_1_Template, 1, 4, undefined, 2);
    i0.ɵɵtemplate(2, NzTreeNodeComponent_ng_container_2_ng_container_3_ng_container_2_Template, 3, 2, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r979 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r979.isTemplateRef(ctx_r979.nzExpandedIcon));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r979.isTemplateRef(ctx_r979.nzExpandedIcon));
} }
function NzTreeNodeComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r991 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 5);
    i0.ɵɵlistener("click", function NzTreeNodeComponent_ng_container_2_Template_span_click_1_listener($event) { i0.ɵɵrestoreView(_r991); const ctx_r990 = i0.ɵɵnextContext(); return ctx_r990._clickExpand($event); });
    i0.ɵɵtemplate(2, NzTreeNodeComponent_ng_container_2_ng_container_2_Template, 3, 2, "ng-container", 2);
    i0.ɵɵtemplate(3, NzTreeNodeComponent_ng_container_2_ng_container_3_Template, 3, 2, "ng-container", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r973 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r973.nzNodeSwitcherClass);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r973.isShowSwitchIcon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r973.nzShowLine);
} }
function NzTreeNodeComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r993 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 5);
    i0.ɵɵlistener("click", function NzTreeNodeComponent_ng_container_3_Template_span_click_1_listener($event) { i0.ɵɵrestoreView(_r993); const ctx_r992 = i0.ɵɵnextContext(); return ctx_r992._clickCheckBox($event); });
    i0.ɵɵelement(2, "span");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r974 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r974.nzNodeCheckboxClass);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ant-tree-checkbox-inner", !ctx_r974.nzSelectMode)("ant-select-tree-checkbox-inner", ctx_r974.nzSelectMode);
} }
function NzTreeNodeComponent_ng_container_4_span_2_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 19);
} if (rf & 2) {
    const ctx_r995 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("nzType", ctx_r995.nzIcon);
} }
function NzTreeNodeComponent_ng_container_4_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 17);
    i0.ɵɵelementStart(1, "span", 17);
    i0.ɵɵtemplate(2, NzTreeNodeComponent_ng_container_4_span_2_i_2_Template, 1, 1, "i", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r994 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("ant-tree-icon__open", ctx_r994.isSwitcherOpen)("ant-tree-icon__close", ctx_r994.isSwitcherClose)("ant-tree-icon_loading", ctx_r994.nzTreeNode.isLoading);
    i0.ɵɵproperty("ngClass", ctx_r994.nzNodeContentLoadingClass);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r994.nzNodeContentIconClass);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r994.nzIcon);
} }
function NzTreeNodeComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 14);
    i0.ɵɵtemplate(2, NzTreeNodeComponent_ng_container_4_span_2_Template, 3, 6, "span", 15);
    i0.ɵɵelement(3, "span", 16);
    i0.ɵɵpipe(4, "nzHighlight");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r975 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("draggable", ctx_r975.canDraggable);
    i0.ɵɵpropertyInterpolate("title", ctx_r975.nzTreeNode.title);
    i0.ɵɵproperty("ngClass", ctx_r975.nzNodeContentClass);
    i0.ɵɵattribute("draggable", ctx_r975.canDraggable)("aria-grabbed", ctx_r975.canDraggable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r975.nzTreeNode.icon && ctx_r975.nzShowIcon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind4(4, 7, ctx_r975.nzTreeNode.title, ctx_r975.nzSearchValue, "", "font-highlight"), i0.ɵɵsanitizeHtml);
} }
function NzTreeNodeComponent_ng_template_5_Template(rf, ctx) { }
function NzTreeNodeComponent_ul_6_nz_tree_node_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nz-tree-node", 22);
} if (rf & 2) {
    const node_r997 = ctx.$implicit;
    const ctx_r996 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("nzTreeNode", node_r997)("nzShowExpand", ctx_r996.nzShowExpand)("@.disabled", ctx_r996.noAnimation == null ? null : ctx_r996.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r996.noAnimation == null ? null : ctx_r996.noAnimation.nzNoAnimation)("nzSelectMode", ctx_r996.nzSelectMode)("nzShowLine", ctx_r996.nzShowLine)("nzExpandedIcon", ctx_r996.nzExpandedIcon)("nzDraggable", ctx_r996.nzDraggable)("nzCheckable", ctx_r996.nzCheckable)("nzAsyncData", ctx_r996.nzAsyncData)("nzExpandAll", ctx_r996.nzExpandAll)("nzShowIcon", ctx_r996.nzShowIcon)("nzSearchValue", ctx_r996.nzSearchValue)("nzHideUnMatched", ctx_r996.nzHideUnMatched)("nzBeforeDrop", ctx_r996.nzBeforeDrop)("nzTreeTemplate", ctx_r996.nzTreeTemplate);
} }
function NzTreeNodeComponent_ul_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 20);
    i0.ɵɵtemplate(1, NzTreeNodeComponent_ul_6_nz_tree_node_1_Template, 1, 16, "nz-tree-node", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r977 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("ant-tree-child-tree-open", !ctx_r977.nzSelectMode || ctx_r977.nzTreeNode.isExpanded);
    i0.ɵɵproperty("@.disabled", ctx_r977.noAnimation == null ? null : ctx_r977.noAnimation.nzNoAnimation)("@treeCollapseMotion", undefined);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r977.nzTreeNode.getChildren());
} }
export class NzTreeNodeComponent {
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
/** @nocollapse */ NzTreeNodeComponent.ɵfac = function NzTreeNodeComponent_Factory(t) { return new (t || NzTreeNodeComponent)(i0.ɵɵdirectiveInject(i1.NzTreeBaseService), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.NzNoAnimationDirective, 9)); };
/** @nocollapse */ NzTreeNodeComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzTreeNodeComponent, selectors: [["nz-tree-node"]], viewQuery: function NzTreeNodeComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dragElement = _t.first);
    } }, hostBindings: function NzTreeNodeComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        i0.ɵɵlistener("mousedown", function NzTreeNodeComponent_mousedown_HostBindingHandler($event) { return ctx.onMousedown($event); })("click", function NzTreeNodeComponent_click_HostBindingHandler($event) { return ctx.nzClick($event); })("dblclick", function NzTreeNodeComponent_dblclick_HostBindingHandler($event) { return ctx.nzDblClick($event); })("contextmenu", function NzTreeNodeComponent_contextmenu_HostBindingHandler($event) { return ctx.nzContextMenu($event); });
    } }, inputs: { nzTreeNode: "nzTreeNode", nzShowLine: "nzShowLine", nzShowExpand: "nzShowExpand", nzCheckable: "nzCheckable", nzAsyncData: "nzAsyncData", nzHideUnMatched: "nzHideUnMatched", nzNoAnimation: "nzNoAnimation", nzSelectMode: "nzSelectMode", nzShowIcon: "nzShowIcon", nzExpandedIcon: "nzExpandedIcon", nzTreeTemplate: "nzTreeTemplate", nzBeforeDrop: "nzBeforeDrop", nzSearchValue: "nzSearchValue", nzDraggable: "nzDraggable", nzDefaultExpandAll: "nzDefaultExpandAll", nzExpandAll: "nzExpandAll" }, exportAs: ["nzTreeNode"], features: [i0.ɵɵNgOnChangesFeature()], decls: 7, vars: 10, consts: [["role", "treeitem", 3, "ngClass"], ["dragElement", ""], [4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "group", "class", "ant-tree-child-tree", "data-expanded", "true", 3, "ant-tree-child-tree-open", 4, "ngIf"], [3, "ngClass", "click"], ["nz-icon", "", "nzType", "loading", "class", "ant-tree-switcher-loading-icon", 3, "nzSpin", 4, "ngIf"], ["nz-icon", "", "nzType", "caret-down", 3, "ant-select-switcher-icon", "ant-tree-switcher-icon", 4, "ngIf"], ["nz-icon", "", "nzType", "caret-down"], ["nz-icon", "", "nzType", "loading", 1, "ant-tree-switcher-loading-icon", 3, "nzSpin"], ["nz-icon", "", "class", "ant-tree-switcher-line-icon", 3, "nzType", 4, "ngIf"], ["nz-icon", "", "nzType", "file", "class", "ant-tree-switcher-line-icon", 4, "ngIf"], ["nz-icon", "", 1, "ant-tree-switcher-line-icon", 3, "nzType"], ["nz-icon", "", "nzType", "file", 1, "ant-tree-switcher-line-icon"], [3, "title", "ngClass"], [3, "ant-tree-icon__open", "ant-tree-icon__close", "ant-tree-icon_loading", "ngClass", 4, "ngIf"], [1, "ant-tree-title", 3, "innerHTML"], [3, "ngClass"], ["nz-icon", "", 3, "nzType", 4, "ngIf"], ["nz-icon", "", 3, "nzType"], ["role", "group", "data-expanded", "true", 1, "ant-tree-child-tree"], [3, "nzTreeNode", "nzShowExpand", "nzNoAnimation", "nzSelectMode", "nzShowLine", "nzExpandedIcon", "nzDraggable", "nzCheckable", "nzAsyncData", "nzExpandAll", "nzShowIcon", "nzSearchValue", "nzHideUnMatched", "nzBeforeDrop", "nzTreeTemplate", 4, "ngFor", "ngForOf"], [3, "nzTreeNode", "nzShowExpand", "nzNoAnimation", "nzSelectMode", "nzShowLine", "nzExpandedIcon", "nzDraggable", "nzCheckable", "nzAsyncData", "nzExpandAll", "nzShowIcon", "nzSearchValue", "nzHideUnMatched", "nzBeforeDrop", "nzTreeTemplate"]], template: function NzTreeNodeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "li", 0, 1);
        i0.ɵɵtemplate(2, NzTreeNodeComponent_ng_container_2_Template, 4, 3, "ng-container", 2);
        i0.ɵɵtemplate(3, NzTreeNodeComponent_ng_container_3_Template, 3, 3, "ng-container", 2);
        i0.ɵɵtemplate(4, NzTreeNodeComponent_ng_container_4_Template, 5, 12, "ng-container", 2);
        i0.ɵɵtemplate(5, NzTreeNodeComponent_ng_template_5_Template, 0, 0, "ng-template", 3);
        i0.ɵɵtemplate(6, NzTreeNodeComponent_ul_6_Template, 2, 4, "ul", 4);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleProp("display", ctx.displayStyle);
        i0.ɵɵproperty("ngClass", ctx.nzNodeClass);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.nzShowExpand);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.nzCheckable);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.nzTreeTemplate);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.nzTreeTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction1(8, _c1, ctx.nzTreeNode));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.nzTreeNode.isExpanded);
    } }, directives: [i2.NgClass, i2.NgIf, i2.NgTemplateOutlet, i3.NzIconDirective, i2.NgForOf, NzTreeNodeComponent, i1.NzNoAnimationDirective], pipes: [i1.NzHighlightPipe], encapsulation: 2, data: { animation: [treeCollapseMotion] }, changeDetection: 0 });
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzTreeNodeComponent, [{
        type: Component,
        args: [{
                selector: 'nz-tree-node',
                exportAs: 'nzTreeNode',
                templateUrl: './nz-tree-node.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                animations: [treeCollapseMotion]
            }]
    }], function () { return [{ type: i1.NzTreeBaseService }, { type: i0.NgZone }, { type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i1.NzNoAnimationDirective, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS1ub2RlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdHJlZS8iLCJzb3VyY2VzIjpbIm56LXRyZWUtbm9kZS5jb21wb25lbnQudHMiLCJuei10cmVlLW5vZGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsSUFBSSxFQUNKLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUlOLFFBQVEsRUFDUixTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0RCxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5ELE9BQU8sRUFDTCxZQUFZLEVBRVosc0JBQXNCLEVBQ3RCLGlCQUFpQixFQUNqQixVQUFVLEVBQ1Ysa0JBQWtCLEVBQ2xCLGVBQWUsRUFDaEIsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7O0lDL0JsQixtSUFLQTs7O0lBSEUsMERBQW1DLDRFQUFBOzs7SUFJckMsdUJBT0k7OztJQUhGLGlFQUErQyxrREFBQTs7O0lBWG5ELDZCQUNFO0lBQUEsaUhBS0E7SUFDQSw2R0FPQTtJQUNGLDBCQUFlOzs7SUFiWCxlQUFxQztJQUFyQyxzRUFBcUM7SUFNckMsZUFBc0M7SUFBdEMsdUVBQXNDOzs7SUFRMUMsdUJBTUs7O0lBRkgsNkJBQWU7OztJQXJCbkIsNkJBQ0U7SUFBQSxvSEFDRTtJQWVGLDhGQU1DO0lBQ0gsMEJBQWU7OztJQXZCQyxlQUE2QjtJQUE3QixxREFBNkI7SUFpQnpDLGVBQTRCO0lBQTVCLG9EQUE0Qjs7OztJQVE5QixvSEFLQTs7O0lBSEUsMERBQW1DLDRFQUFBOzs7SUFLbkMsd0JBS0s7OztJQUZILGlGQUEwRDs7O0lBRzVELHdCQUF5Rjs7O0lBUDNGLDZCQUNFO0lBQUEsOEdBS0M7SUFDRCw4R0FBcUY7SUFDdkYsMEJBQWU7OztJQU5YLGVBQXNCO0lBQXRCLDhDQUFzQjtJQUtyQixlQUF1QjtJQUF2QiwrQ0FBdUI7OztJQWQ5Qiw2QkFDRTtJQUFBLGtHQUtBO0lBQ0Esb0hBQ0U7SUFRSiwwQkFBZTs7O0lBZFgsZUFBcUM7SUFBckMsc0VBQXFDO0lBS3pCLGVBQXNDO0lBQXRDLHVFQUFzQzs7OztJQWxDMUQsNkJBQ0U7SUFBQSwrQkFDRTtJQURvQyxrTkFBOEI7SUFDbEUscUdBQ0U7SUF3QkYscUdBQ0U7SUFnQkosaUJBQU87SUFDVCwwQkFBZTs7O0lBNUNQLGVBQStCO0lBQS9CLHNEQUErQjtJQUNyQixlQUF3QjtJQUF4QixnREFBd0I7SUF5QnhCLGVBQWtCO0lBQWxCLDBDQUFrQjs7OztJQW1CcEMsNkJBQ0U7SUFBQSwrQkFDRTtJQURvQyxvTkFBZ0M7SUFDcEUsdUJBR1E7SUFDVixpQkFBTztJQUNULDBCQUFlOzs7SUFOUCxlQUErQjtJQUEvQixzREFBK0I7SUFFakMsZUFBK0M7SUFBL0MsaUVBQStDLHlEQUFBOzs7SUFxQjdDLHdCQUFnRDs7O0lBQXRCLHdDQUFpQjs7O0lBUi9DLGdDQU9FO0lBQUEsZ0NBQ0U7SUFBQSx1RkFBNEM7SUFDOUMsaUJBQU87SUFDVCxpQkFBTzs7O0lBUkwsOERBQTRDLGtEQUFBLHdEQUFBO0lBRzVDLDREQUFxQztJQUUvQixlQUFrQztJQUFsQyx5REFBa0M7SUFDM0IsZUFBYztJQUFkLHNDQUFjOzs7SUFoQmpDLDZCQUNFO0lBQUEsZ0NBT0U7SUFBQSxzRkFPRTtJQUlGLDJCQUlPOztJQUNULGlCQUFPO0lBQ1QsMEJBQWU7OztJQW5CWCxlQUFnQztJQUFoQyxrREFBZ0M7SUFKaEMsNERBQThCO0lBRzlCLHFEQUE4QjtJQUY5QixrREFBK0IsdUNBQUE7SUFNN0IsZUFBcUM7SUFBckMsc0VBQXFDO0lBWXJDLGVBQStFO0lBQS9FLDRJQUErRTs7OztJQW9CbkYsbUNBbUJlOzs7O0lBakJiLHNDQUFtQix1Q0FBQSx3RkFBQSwyRkFBQSx1Q0FBQSxtQ0FBQSwyQ0FBQSxxQ0FBQSxxQ0FBQSxxQ0FBQSxxQ0FBQSxtQ0FBQSx5Q0FBQSw2Q0FBQSx1Q0FBQSwyQ0FBQTs7O0lBWHZCLDhCQVNFO0lBQUEsNkZBbUJBO0lBQ0YsaUJBQUs7OztJQXpCSCxvR0FBeUU7SUFFekUscUdBQXlDLGtDQUFBO0lBSXZDLGVBQTZDO0lBQTdDLDJEQUE2Qzs7QURuRG5ELE1BQU0sT0FBTyxtQkFBbUI7SUE0WjlCLFlBQ1MsYUFBZ0MsRUFDL0IsTUFBYyxFQUNkLFFBQW1CLEVBQ25CLEtBQWlCLEVBQ2pCLEdBQXNCLEVBQ0gsV0FBb0M7UUFMeEQsa0JBQWEsR0FBYixhQUFhLENBQW1CO1FBQy9CLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDSCxnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUF2WnhDLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFJbkMsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUF5QzVCLGNBQWM7UUFDZCxjQUFTLEdBQUcsVUFBVSxDQUFDO1FBQ3ZCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLHdCQUFtQixHQUFHLEVBQUUsQ0FBQztRQUN6Qix1QkFBa0IsR0FBRyxFQUFFLENBQUM7UUFDeEIsd0JBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLDJCQUFzQixHQUFHLEVBQUUsQ0FBQztRQUM1Qiw4QkFBeUIsR0FBRyxFQUFFLENBQUM7UUFFL0I7O1dBRUc7UUFDSCxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUN6QixZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osaUJBQVksR0FBOEI7WUFDeEMsR0FBRyxFQUFFLFdBQVc7WUFDaEIsR0FBRyxFQUFFLHNCQUFzQjtZQUMzQixJQUFJLEVBQUUsbUJBQW1CO1NBQzFCLENBQUM7UUFFRjs7V0FFRztRQUNILGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO0lBZ1ZsQixDQUFDO0lBL1lKLElBQ0ksV0FBVyxDQUFDLEtBQWM7UUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFDSSxrQkFBa0IsQ0FBQyxLQUFjO1FBQ25DLGVBQWUsQ0FBQyx5RkFBeUYsQ0FBQyxDQUFDO1FBQzNHLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRTtZQUN2RCxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7U0FDbkM7SUFDSCxDQUFDO0lBRUQsSUFBSSxrQkFBa0I7UUFDcEIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7SUFFRCxjQUFjO0lBQ2QsSUFDSSxXQUFXLENBQUMsS0FBYztRQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7WUFDdkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1NBQ25DO0lBQ0gsQ0FBQztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBNEJELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7SUFDOUIsQ0FBQztJQUVELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN2RSxDQUFDO0lBRUQsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3BELENBQUM7SUFFRCxJQUFJLGdCQUFnQjtRQUNsQixPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3JELENBQUM7SUFFRCxJQUFJLGNBQWM7UUFDaEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO0lBQy9ELENBQUM7SUFFRCxJQUFJLGVBQWU7UUFDakIsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7SUFDaEUsQ0FBQztJQUVELElBQUksWUFBWTtRQUNkLDBCQUEwQjtRQUMxQixPQUFPLElBQUksQ0FBQyxhQUFhO1lBQ3ZCLElBQUksQ0FBQyxlQUFlO1lBQ3BCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTO1lBQzFCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVO1lBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTztZQUN2QixDQUFDLENBQUMsTUFBTTtZQUNSLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDVCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO1FBQ3BFLElBQUksQ0FBQyxXQUFXLEdBQUc7WUFDakIsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLG9CQUFvQixDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVO1lBQ25FLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyx5QkFBeUIsQ0FBQyxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ2pFLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUywwQkFBMEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ25FLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyw0QkFBNEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUztZQUMxRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsa0NBQWtDLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWE7WUFDcEYsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLG9CQUFvQixDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVO1lBQ25FLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxtQkFBbUIsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUztTQUNsRSxDQUFDO1FBQ0YsSUFBSSxDQUFDLG1CQUFtQixHQUFHO1lBQ3pCLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxXQUFXLENBQUMsRUFBRSxJQUFJO1lBQ3BDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxnQkFBZ0IsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTTtZQUMzRCxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsZ0JBQWdCLENBQUMsRUFBRSxJQUFJLENBQUMsY0FBYztZQUN4RCxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLENBQUMsZUFBZTtTQUMzRCxDQUFDO1FBRUYsSUFBSSxDQUFDLG1CQUFtQixHQUFHO1lBQ3pCLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxXQUFXLENBQUMsRUFBRSxJQUFJO1lBQ3BDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxtQkFBbUIsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUztZQUNqRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMseUJBQXlCLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWE7WUFDM0UsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLG9CQUFvQixDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUI7U0FDekcsQ0FBQztRQUVGLElBQUksQ0FBQyxrQkFBa0IsR0FBRztZQUN4QixDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsdUJBQXVCLENBQUMsRUFBRSxJQUFJO1lBQ2hELENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyw0QkFBNEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ3BFLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyw2QkFBNkIsQ0FBQyxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ3RFLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxnQkFBZ0IsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVTtTQUNoRSxDQUFDO1FBQ0YsSUFBSSxDQUFDLHNCQUFzQixHQUFHO1lBQzVCLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxVQUFVLENBQUMsRUFBRSxJQUFJO1lBQ25DLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxrQkFBa0IsQ0FBQyxFQUFFLElBQUk7U0FDNUMsQ0FBQztRQUNGLElBQUksQ0FBQyx5QkFBeUIsR0FBRztZQUMvQixDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsVUFBVSxDQUFDLEVBQUUsSUFBSTtTQUNwQyxDQUFDO0lBQ0osQ0FBQztJQUdELFdBQVcsQ0FBQyxLQUFpQjtRQUMzQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBRUgsT0FBTyxDQUFDLEtBQWlCO1FBQ3ZCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFO1lBQy9ELElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7U0FDMUQ7UUFDRCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNsRixJQUFJLENBQUMsYUFBYyxDQUFDLG1CQUFvQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBR0QsVUFBVSxDQUFDLEtBQWlCO1FBQzFCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDckYsSUFBSSxDQUFDLGFBQWMsQ0FBQyxtQkFBb0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVEOztPQUVHO0lBRUgsYUFBYSxDQUFDLEtBQWlCO1FBQzdCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEYsSUFBSSxDQUFDLGFBQWMsQ0FBQyxtQkFBb0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVEOzs7T0FHRztJQUNILFlBQVksQ0FBQyxLQUFpQjtRQUM1QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFO1lBQ3pELGtCQUFrQjtZQUNsQixJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFO2dCQUM1RixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7YUFDbEM7WUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO1lBQ3pELElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDaEQ7WUFDRCxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzlDLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ25GLElBQUksQ0FBQyxhQUFjLENBQUMsbUJBQW9CLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzFEO0lBQ0gsQ0FBQztJQUVPLHVCQUF1QixDQUFDLFVBQXNCO1FBQ3BELE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxVQUFVLENBQUM7UUFDaEMsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN2QixRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNsQixNQUFNLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO2dCQUN2QixJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckMsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFTyx3QkFBd0IsQ0FBQyxVQUFzQjtRQUNyRCxNQUFNLFVBQVUsR0FBRyxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDOUMsSUFBSSxVQUFVLEVBQUU7WUFDZCxVQUFVLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsd0JBQXdCLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDM0M7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsY0FBYyxDQUFDLEtBQWlCO1FBQzlCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsNkJBQTZCO1FBQzdCLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRTtZQUNuRSxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEVBQUU7WUFDdkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzdDO1FBQ0QsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbEYsSUFBSSxDQUFDLGFBQWMsQ0FBQyxtQkFBb0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVEOzs7T0FHRztJQUNILGNBQWM7UUFDWixNQUFNLFNBQVMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLHNCQUFzQixFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQzdFLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0QsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsZUFBZSxDQUFDLENBQVk7UUFDMUIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3BCLElBQUk7WUFDRixpQkFBaUI7WUFDakIsa0JBQWtCO1lBQ2xCLENBQUMsQ0FBQyxZQUFhLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUksQ0FBQyxDQUFDO1NBQzdEO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxRQUFRO1NBQ1Q7UUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25DLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xGLElBQUksQ0FBQyxhQUFjLENBQUMsbUJBQW9CLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCxlQUFlLENBQUMsQ0FBWTtRQUMxQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3BCLGlCQUFpQjtRQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7WUFDbkIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUNsRCxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRTtnQkFDdEcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2FBQ25DO1lBQ0QsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbEYsSUFBSSxDQUFDLGFBQWMsQ0FBQyxtQkFBb0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0QsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsY0FBYyxDQUFDLENBQVk7UUFDekIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNwQixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVELElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxZQUFZLEVBQUU7WUFDakMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDO1lBQzVCLHNCQUFzQjtZQUN0QixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNuRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQ3pGO1NBQ0Y7UUFDRCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsYUFBYyxDQUFDLG1CQUFvQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsZUFBZSxDQUFDLENBQVk7UUFDMUIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRTtZQUNuQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNsRixJQUFJLENBQUMsYUFBYyxDQUFDLG1CQUFvQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsY0FBYyxDQUFDLENBQVk7UUFDekIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7WUFDbkIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3RCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDbEQsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUN6RyxPQUFPO2FBQ1I7WUFDRCx5QkFBeUI7WUFDekIsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDN0UsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbkYsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDO29CQUNoQixRQUFRLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEVBQUc7b0JBQy9DLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVTtvQkFDckIsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPO2lCQUNsQixDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBZ0IsRUFBRSxFQUFFO29CQUNoQyxJQUFJLE9BQU8sRUFBRTt3QkFDWCxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztxQkFDaEU7b0JBQ0QsSUFBSSxDQUFDLGFBQWMsQ0FBQyxtQkFBb0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQ3pELElBQUksQ0FBQyxhQUFjLENBQUMsbUJBQW9CLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUM5RCxDQUFDLENBQUMsQ0FBQzthQUNKO2lCQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQy9ELElBQUksQ0FBQyxhQUFjLENBQUMsbUJBQW9CLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQzFEO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsYUFBYSxDQUFDLENBQVk7UUFDeEIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRTtZQUNuQixtQ0FBbUM7WUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3RCLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNoRixJQUFJLENBQUMsYUFBYyxDQUFDLG1CQUFvQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUMxRDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0gsYUFBYTtRQUNYLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFO1lBQ2pDLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO2dCQUM5QixTQUFTLENBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDO3FCQUN4RCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztxQkFDOUIsU0FBUyxDQUFDLENBQUMsQ0FBWSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hELFNBQVMsQ0FBWSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUM7cUJBQ3hELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3FCQUM5QixTQUFTLENBQUMsQ0FBQyxDQUFZLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEQsU0FBUyxDQUFZLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQztxQkFDdkQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7cUJBQzlCLFNBQVMsQ0FBQyxDQUFDLENBQVksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2RCxTQUFTLENBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDO3FCQUN4RCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztxQkFDOUIsU0FBUyxDQUFDLENBQUMsQ0FBWSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hELFNBQVMsQ0FBWSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUM7cUJBQ25ELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3FCQUM5QixTQUFTLENBQUMsQ0FBQyxDQUFZLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkQsU0FBUyxDQUFZLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQztxQkFDdEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7cUJBQzlCLFNBQVMsQ0FBQyxDQUFDLENBQVksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3ZEO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDMUI7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxhQUFhLENBQUMsS0FBUztRQUNyQixPQUFPLEtBQUssWUFBWSxXQUFXLENBQUM7SUFDdEMsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFXRCxRQUFRO1FBQ04sMENBQTBDO1FBQzFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUU7WUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ25EO1FBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRTtZQUM5QixJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUN6RDtRQUNELElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUU7WUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDeEQ7UUFDRCxPQUFPO1FBQ1AsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxhQUFhO2FBQ2YsbUJBQW1CLEVBQUU7YUFDckIsSUFBSSxDQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFLLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQ3RELFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQ3pCO2FBQ0EsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7UUFDTCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7c0ZBdGNVLG1CQUFtQjt3REFBbkIsbUJBQW1COzs7Ozs7OztRQzlDaEMsZ0NBQ0U7UUFBQSxzRkFDRTtRQTZDRixzRkFDRTtRQU9GLHVGQUNFO1FBeUJGLG9GQUlBO1FBRUEsa0VBU0U7UUFxQkosaUJBQUs7O1FBckg0QiwyQ0FBOEI7UUFBQyx5Q0FBdUI7UUFDdkUsZUFBb0I7UUFBcEIsdUNBQW9CO1FBOENwQixlQUFtQjtRQUFuQixzQ0FBbUI7UUFRbkIsZUFBdUI7UUFBdkIsMENBQXVCO1FBMkJuQyxlQUFtQztRQUFuQyxxREFBbUMsdUVBQUE7UUFNbkMsZUFBNkI7UUFBN0IsZ0RBQTZCO2dHRDFDcEIsbUJBQW1CLGdHQUZsQixDQUFDLGtCQUFrQixDQUFDO0FBU1A7SUFBZixZQUFZLEVBQUU7O3VEQUFxQjtBQUNwQjtJQUFmLFlBQVksRUFBRTs7eURBQXVCO0FBQ3RCO0lBQWYsWUFBWSxFQUFFOzt3REFBc0I7QUFDckI7SUFBZixZQUFZLEVBQUU7O3dEQUFzQjtBQUNyQjtJQUFmLFlBQVksRUFBRTs7NERBQXlCO0FBQ3hCO0lBQWYsWUFBWSxFQUFFOzswREFBdUI7QUFDdEI7SUFBZixZQUFZLEVBQUU7O3lEQUFzQjtBQUNyQjtJQUFmLFlBQVksRUFBRTs7dURBQW9CO2tEQWRqQyxtQkFBbUI7Y0FSL0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUUsWUFBWTtnQkFDdEIsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLFVBQVUsRUFBRSxDQUFDLGtCQUFrQixDQUFDO2FBQ2pDOztzQkFtYUksSUFBSTs7c0JBQUksUUFBUTs7a0JBamFsQixTQUFTO21CQUFDLGFBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O2tCQUsxQyxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFFTCxLQUFLOztrQkFhTCxLQUFLOztrQkFjTCxLQUFLOztrQkFvSEwsWUFBWTttQkFBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7O2tCQVVwQyxZQUFZO21CQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7a0JBV2hDLFlBQVk7bUJBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDOztrQkFXbkMsWUFBWTttQkFBQyxhQUFhLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSG9zdCxcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIFJlbmRlcmVyMixcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBJbnB1dEJvb2xlYW4sXHJcbiAgTnpGb3JtYXRCZWZvcmVEcm9wRXZlbnQsXHJcbiAgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSxcclxuICBOelRyZWVCYXNlU2VydmljZSxcclxuICBOelRyZWVOb2RlLFxyXG4gIHRyZWVDb2xsYXBzZU1vdGlvbixcclxuICB3YXJuRGVwcmVjYXRpb25cclxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei10cmVlLW5vZGUnLFxyXG4gIGV4cG9ydEFzOiAnbnpUcmVlTm9kZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXRyZWUtbm9kZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgYW5pbWF0aW9uczogW3RyZWVDb2xsYXBzZU1vdGlvbl1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56VHJlZU5vZGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICBAVmlld0NoaWxkKCdkcmFnRWxlbWVudCcsIHsgc3RhdGljOiBmYWxzZSB9KSBkcmFnRWxlbWVudDogRWxlbWVudFJlZjtcclxuXHJcbiAgLyoqXHJcbiAgICogZm9yIGdsb2JhbCBwcm9wZXJ0eVxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIG56VHJlZU5vZGU6IE56VHJlZU5vZGU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd0xpbmU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd0V4cGFuZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDaGVja2FibGU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QXN5bmNEYXRhOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekhpZGVVbk1hdGNoZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpOb0FuaW1hdGlvbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNlbGVjdE1vZGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93SWNvbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56RXhwYW5kZWRJY29uOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpUcmVlTm9kZSB9PjtcclxuICBASW5wdXQoKSBuelRyZWVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56VHJlZU5vZGUgfT47XHJcbiAgQElucHV0KCkgbnpCZWZvcmVEcm9wOiAoY29uZmlybTogTnpGb3JtYXRCZWZvcmVEcm9wRXZlbnQpID0+IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcbiAgQElucHV0KCkgbnpTZWFyY2hWYWx1ZSA9ICcnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekRyYWdnYWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fbnpEcmFnZ2FibGUgPSB2YWx1ZTtcclxuICAgIHRoaXMuaGFuZERyYWdFdmVudCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56RHJhZ2dhYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX256RHJhZ2dhYmxlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgdXNlIGBuekV4cGFuZEFsbGAgaW5zdGVhZC5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekRlZmF1bHRFeHBhbmRBbGwodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHdhcm5EZXByZWNhdGlvbihgJ256RGVmYXVsdEV4cGFuZEFsbCcgaXMgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiA5LjAuMC4gUGxlYXNlIHVzZSAnbnpFeHBhbmRBbGwnIGluc3RlYWQuYCk7XHJcbiAgICB0aGlzLl9uekV4cGFuZEFsbCA9IHZhbHVlO1xyXG4gICAgaWYgKHZhbHVlICYmIHRoaXMubnpUcmVlTm9kZSAmJiAhdGhpcy5uelRyZWVOb2RlLmlzTGVhZikge1xyXG4gICAgICB0aGlzLm56VHJlZU5vZGUuaXNFeHBhbmRlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbnpEZWZhdWx0RXhwYW5kQWxsKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX256RXhwYW5kQWxsO1xyXG4gIH1cclxuXHJcbiAgLy8gZGVmYXVsdCBzZXRcclxuICBASW5wdXQoKVxyXG4gIHNldCBuekV4cGFuZEFsbCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fbnpFeHBhbmRBbGwgPSB2YWx1ZTtcclxuICAgIGlmICh2YWx1ZSAmJiB0aGlzLm56VHJlZU5vZGUgJiYgIXRoaXMubnpUcmVlTm9kZS5pc0xlYWYpIHtcclxuICAgICAgdGhpcy5uelRyZWVOb2RlLmlzRXhwYW5kZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG56RXhwYW5kQWxsKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX256RXhwYW5kQWxsO1xyXG4gIH1cclxuXHJcbiAgLy8gZGVmYXVsdCB2YXJcclxuICBwcmVmaXhDbHMgPSAnYW50LXRyZWUnO1xyXG4gIG56Tm9kZUNsYXNzID0ge307XHJcbiAgbnpOb2RlU3dpdGNoZXJDbGFzcyA9IHt9O1xyXG4gIG56Tm9kZUNvbnRlbnRDbGFzcyA9IHt9O1xyXG4gIG56Tm9kZUNoZWNrYm94Q2xhc3MgPSB7fTtcclxuICBuek5vZGVDb250ZW50SWNvbkNsYXNzID0ge307XHJcbiAgbnpOb2RlQ29udGVudExvYWRpbmdDbGFzcyA9IHt9O1xyXG5cclxuICAvKipcclxuICAgKiBkcmFnIHZhclxyXG4gICAqL1xyXG4gIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuICBkcmFnUG9zID0gMjtcclxuICBkcmFnUG9zQ2xhc3M6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7XHJcbiAgICAnMCc6ICdkcmFnLW92ZXInLFxyXG4gICAgJzEnOiAnZHJhZy1vdmVyLWdhcC1ib3R0b20nLFxyXG4gICAgJy0xJzogJ2RyYWctb3Zlci1nYXAtdG9wJ1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIGRlZmF1bHQgc2V0XHJcbiAgICovXHJcbiAgX256RHJhZ2dhYmxlID0gZmFsc2U7XHJcbiAgX256RXhwYW5kQWxsID0gZmFsc2U7XHJcblxyXG4gIGdldCBuekljb24oKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLm56VHJlZU5vZGUuaWNvbjtcclxuICB9XHJcblxyXG4gIGdldCBjYW5EcmFnZ2FibGUoKTogYm9vbGVhbiB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMubnpEcmFnZ2FibGUgJiYgIXRoaXMubnpUcmVlTm9kZS5pc0Rpc2FibGVkID8gdHJ1ZSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNTaG93TGluZUljb24oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gIXRoaXMubnpUcmVlTm9kZS5pc0xlYWYgJiYgdGhpcy5uelNob3dMaW5lO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzU2hvd1N3aXRjaEljb24oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gIXRoaXMubnpUcmVlTm9kZS5pc0xlYWYgJiYgIXRoaXMubnpTaG93TGluZTtcclxuICB9XHJcblxyXG4gIGdldCBpc1N3aXRjaGVyT3BlbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm56VHJlZU5vZGUuaXNFeHBhbmRlZCAmJiAhdGhpcy5uelRyZWVOb2RlLmlzTGVhZjtcclxuICB9XHJcblxyXG4gIGdldCBpc1N3aXRjaGVyQ2xvc2UoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gIXRoaXMubnpUcmVlTm9kZS5pc0V4cGFuZGVkICYmICF0aGlzLm56VHJlZU5vZGUuaXNMZWFmO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRpc3BsYXlTdHlsZSgpOiBzdHJpbmcge1xyXG4gICAgLy8gdG8gaGlkZSB1bm1hdGNoZWQgbm9kZXNcclxuICAgIHJldHVybiB0aGlzLm56U2VhcmNoVmFsdWUgJiZcclxuICAgICAgdGhpcy5uekhpZGVVbk1hdGNoZWQgJiZcclxuICAgICAgIXRoaXMubnpUcmVlTm9kZS5pc01hdGNoZWQgJiZcclxuICAgICAgIXRoaXMubnpUcmVlTm9kZS5pc0V4cGFuZGVkICYmXHJcbiAgICAgIHRoaXMubnpUcmVlTm9kZS5jYW5IaWRlXHJcbiAgICAgID8gJ25vbmUnXHJcbiAgICAgIDogJyc7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiByZXNldCBub2RlIGNsYXNzXHJcbiAgICovXHJcbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICB0aGlzLnByZWZpeENscyA9IHRoaXMubnpTZWxlY3RNb2RlID8gJ2FudC1zZWxlY3QtdHJlZScgOiAnYW50LXRyZWUnO1xyXG4gICAgdGhpcy5uek5vZGVDbGFzcyA9IHtcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS10cmVlbm9kZS1kaXNhYmxlZGBdOiB0aGlzLm56VHJlZU5vZGUuaXNEaXNhYmxlZCxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS10cmVlbm9kZS1zd2l0Y2hlci1vcGVuYF06IHRoaXMuaXNTd2l0Y2hlck9wZW4sXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tdHJlZW5vZGUtc3dpdGNoZXItY2xvc2VgXTogdGhpcy5pc1N3aXRjaGVyQ2xvc2UsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tdHJlZW5vZGUtY2hlY2tib3gtY2hlY2tlZGBdOiB0aGlzLm56VHJlZU5vZGUuaXNDaGVja2VkLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXRyZWVub2RlLWNoZWNrYm94LWluZGV0ZXJtaW5hdGVgXTogdGhpcy5uelRyZWVOb2RlLmlzSGFsZkNoZWNrZWQsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tdHJlZW5vZGUtc2VsZWN0ZWRgXTogdGhpcy5uelRyZWVOb2RlLmlzU2VsZWN0ZWQsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tdHJlZW5vZGUtbG9hZGluZ2BdOiB0aGlzLm56VHJlZU5vZGUuaXNMb2FkaW5nXHJcbiAgICB9O1xyXG4gICAgdGhpcy5uek5vZGVTd2l0Y2hlckNsYXNzID0ge1xyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXN3aXRjaGVyYF06IHRydWUsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tc3dpdGNoZXItbm9vcGBdOiB0aGlzLm56VHJlZU5vZGUuaXNMZWFmLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXN3aXRjaGVyX29wZW5gXTogdGhpcy5pc1N3aXRjaGVyT3BlbixcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1zd2l0Y2hlcl9jbG9zZWBdOiB0aGlzLmlzU3dpdGNoZXJDbG9zZVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLm56Tm9kZUNoZWNrYm94Q2xhc3MgPSB7XHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tY2hlY2tib3hgXTogdHJ1ZSxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1jaGVja2JveC1jaGVja2VkYF06IHRoaXMubnpUcmVlTm9kZS5pc0NoZWNrZWQsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZWBdOiB0aGlzLm56VHJlZU5vZGUuaXNIYWxmQ2hlY2tlZCxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1jaGVja2JveC1kaXNhYmxlZGBdOiB0aGlzLm56VHJlZU5vZGUuaXNEaXNhYmxlZCB8fCB0aGlzLm56VHJlZU5vZGUuaXNEaXNhYmxlQ2hlY2tib3hcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5uek5vZGVDb250ZW50Q2xhc3MgPSB7XHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbm9kZS1jb250ZW50LXdyYXBwZXJgXTogdHJ1ZSxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1ub2RlLWNvbnRlbnQtd3JhcHBlci1vcGVuYF06IHRoaXMuaXNTd2l0Y2hlck9wZW4sXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbm9kZS1jb250ZW50LXdyYXBwZXItY2xvc2VgXTogdGhpcy5pc1N3aXRjaGVyQ2xvc2UsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbm9kZS1zZWxlY3RlZGBdOiB0aGlzLm56VHJlZU5vZGUuaXNTZWxlY3RlZFxyXG4gICAgfTtcclxuICAgIHRoaXMubnpOb2RlQ29udGVudEljb25DbGFzcyA9IHtcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1pY29uRWxlYF06IHRydWUsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30taWNvbl9fY3VzdG9taXplYF06IHRydWVcclxuICAgIH07XHJcbiAgICB0aGlzLm56Tm9kZUNvbnRlbnRMb2FkaW5nQ2xhc3MgPSB7XHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30taWNvbkVsZWBdOiB0cnVlXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignbW91c2Vkb3duJywgWyckZXZlbnQnXSlcclxuICBvbk1vdXNlZG93bihldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpTZWxlY3RNb2RlKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBjbGljayBub2RlIHRvIHNlbGVjdCwgMjAwbXMgdG8gZGJsIGNsaWNrXHJcbiAgICovXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxyXG4gIG56Q2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGlmICh0aGlzLm56VHJlZU5vZGUuaXNTZWxlY3RhYmxlICYmICF0aGlzLm56VHJlZU5vZGUuaXNEaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLm56VHJlZU5vZGUuaXNTZWxlY3RlZCA9ICF0aGlzLm56VHJlZU5vZGUuaXNTZWxlY3RlZDtcclxuICAgIH1cclxuICAgIGNvbnN0IGV2ZW50TmV4dCA9IHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnY2xpY2snLCB0aGlzLm56VHJlZU5vZGUsIGV2ZW50KTtcclxuICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dChldmVudE5leHQpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZGJsY2xpY2snLCBbJyRldmVudCddKVxyXG4gIG56RGJsQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGNvbnN0IGV2ZW50TmV4dCA9IHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnZGJsY2xpY2snLCB0aGlzLm56VHJlZU5vZGUsIGV2ZW50KTtcclxuICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dChldmVudE5leHQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIGV2ZW50XHJcbiAgICovXHJcbiAgQEhvc3RMaXN0ZW5lcignY29udGV4dG1lbnUnLCBbJyRldmVudCddKVxyXG4gIG56Q29udGV4dE1lbnUoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGNvbnN0IGV2ZW50TmV4dCA9IHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnY29udGV4dG1lbnUnLCB0aGlzLm56VHJlZU5vZGUsIGV2ZW50KTtcclxuICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dChldmVudE5leHQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogY29sbGFwc2Ugbm9kZVxyXG4gICAqIEBwYXJhbSBldmVudFxyXG4gICAqL1xyXG4gIF9jbGlja0V4cGFuZChldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgaWYgKCF0aGlzLm56VHJlZU5vZGUuaXNMb2FkaW5nICYmICF0aGlzLm56VHJlZU5vZGUuaXNMZWFmKSB7XHJcbiAgICAgIC8vIHNldCBhc3luYyBzdGF0ZVxyXG4gICAgICBpZiAodGhpcy5uekFzeW5jRGF0YSAmJiB0aGlzLm56VHJlZU5vZGUuY2hpbGRyZW4ubGVuZ3RoID09PSAwICYmICF0aGlzLm56VHJlZU5vZGUuaXNFeHBhbmRlZCkge1xyXG4gICAgICAgIHRoaXMubnpUcmVlTm9kZS5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubnpUcmVlTm9kZS5pc0V4cGFuZGVkID0gIXRoaXMubnpUcmVlTm9kZS5pc0V4cGFuZGVkO1xyXG4gICAgICBpZiAodGhpcy5uelRyZWVOb2RlLmlzTWF0Y2hlZCkge1xyXG4gICAgICAgIHRoaXMuc2V0RGlzcGxheUZvclBhcmVudE5vZGVzKHRoaXMubnpUcmVlTm9kZSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXREaXNwbGF5Rm9yQ2hpbGROb2Rlcyh0aGlzLm56VHJlZU5vZGUpO1xyXG4gICAgICBjb25zdCBldmVudE5leHQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2V4cGFuZCcsIHRoaXMubnpUcmVlTm9kZSwgZXZlbnQpO1xyXG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2UhLnRyaWdnZXJFdmVudENoYW5nZSQhLm5leHQoZXZlbnROZXh0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0RGlzcGxheUZvckNoaWxkTm9kZXMocGFyZW50Tm9kZTogTnpUcmVlTm9kZSk6IHZvaWQge1xyXG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gcGFyZW50Tm9kZTtcclxuICAgIGlmIChjaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNoaWxkcmVuLm1hcChub2RlID0+IHtcclxuICAgICAgICBjb25zdCBjYW5IaWRlID0gIW5vZGUuaXNNYXRjaGVkO1xyXG4gICAgICAgIG5vZGUuY2FuSGlkZSA9IGNhbkhpZGU7XHJcbiAgICAgICAgdGhpcy5zZXREaXNwbGF5Rm9yQ2hpbGROb2Rlcyhub2RlKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldERpc3BsYXlGb3JQYXJlbnROb2Rlcyh0YXJnZXROb2RlOiBOelRyZWVOb2RlKTogdm9pZCB7XHJcbiAgICBjb25zdCBwYXJlbnROb2RlID0gdGFyZ2V0Tm9kZS5nZXRQYXJlbnROb2RlKCk7XHJcbiAgICBpZiAocGFyZW50Tm9kZSkge1xyXG4gICAgICBwYXJlbnROb2RlLmNhbkhpZGUgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zZXREaXNwbGF5Rm9yUGFyZW50Tm9kZXMocGFyZW50Tm9kZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBjaGVjayBub2RlXHJcbiAgICogQHBhcmFtIGV2ZW50XHJcbiAgICovXHJcbiAgX2NsaWNrQ2hlY2tCb3goZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIC8vIHJldHVybiBpZiBub2RlIGlzIGRpc2FibGVkXHJcbiAgICBpZiAodGhpcy5uelRyZWVOb2RlLmlzRGlzYWJsZWQgfHwgdGhpcy5uelRyZWVOb2RlLmlzRGlzYWJsZUNoZWNrYm94KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMubnpUcmVlTm9kZS5pc0NoZWNrZWQgPSAhdGhpcy5uelRyZWVOb2RlLmlzQ2hlY2tlZDtcclxuICAgIHRoaXMubnpUcmVlTm9kZS5pc0hhbGZDaGVja2VkID0gZmFsc2U7XHJcbiAgICBpZiAoIXRoaXMubnpUcmVlU2VydmljZS5pc0NoZWNrU3RyaWN0bHkpIHtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNvbmR1Y3QodGhpcy5uelRyZWVOb2RlKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGV2ZW50TmV4dCA9IHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnY2hlY2snLCB0aGlzLm56VHJlZU5vZGUsIGV2ZW50KTtcclxuICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dChldmVudE5leHQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogZHJhZyBldmVudFxyXG4gICAqIEBwYXJhbSBlXHJcbiAgICovXHJcbiAgY2xlYXJEcmFnQ2xhc3MoKTogdm9pZCB7XHJcbiAgICBjb25zdCBkcmFnQ2xhc3MgPSBbJ2RyYWctb3Zlci1nYXAtdG9wJywgJ2RyYWctb3Zlci1nYXAtYm90dG9tJywgJ2RyYWctb3ZlciddO1xyXG4gICAgZHJhZ0NsYXNzLmZvckVhY2goZSA9PiB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5kcmFnRWxlbWVudC5uYXRpdmVFbGVtZW50LCBlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRHJhZ1N0YXJ0KGU6IERyYWdFdmVudCk6IHZvaWQge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIGllIHRocm93IGVycm9yXHJcbiAgICAgIC8vIGZpcmVmb3gtbmVlZC1pdFxyXG4gICAgICBlLmRhdGFUcmFuc2ZlciEuc2V0RGF0YSgndGV4dC9wbGFpbicsIHRoaXMubnpUcmVlTm9kZS5rZXkhKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIC8vIGVtcHR5XHJcbiAgICB9XHJcbiAgICB0aGlzLm56VHJlZVNlcnZpY2Uuc2V0U2VsZWN0ZWROb2RlKHRoaXMubnpUcmVlTm9kZSk7XHJcbiAgICB0aGlzLm56VHJlZU5vZGUuaXNFeHBhbmRlZCA9IGZhbHNlO1xyXG4gICAgY29uc3QgZXZlbnROZXh0ID0gdGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdkcmFnc3RhcnQnLCB0aGlzLm56VHJlZU5vZGUsIGUpO1xyXG4gICAgdGhpcy5uelRyZWVTZXJ2aWNlIS50cmlnZ2VyRXZlbnRDaGFuZ2UkIS5uZXh0KGV2ZW50TmV4dCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEcmFnRW50ZXIoZTogRHJhZ0V2ZW50KTogdm9pZCB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgLy8gcmVzZXQgcG9zaXRpb25cclxuICAgIHRoaXMuZHJhZ1BvcyA9IDI7XHJcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICBjb25zdCBub2RlID0gdGhpcy5uelRyZWVTZXJ2aWNlLmdldFNlbGVjdGVkTm9kZSgpO1xyXG4gICAgICBpZiAobm9kZSAmJiBub2RlLmtleSAhPT0gdGhpcy5uelRyZWVOb2RlLmtleSAmJiAhdGhpcy5uelRyZWVOb2RlLmlzRXhwYW5kZWQgJiYgIXRoaXMubnpUcmVlTm9kZS5pc0xlYWYpIHtcclxuICAgICAgICB0aGlzLm56VHJlZU5vZGUuaXNFeHBhbmRlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZXZlbnROZXh0ID0gdGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdkcmFnZW50ZXInLCB0aGlzLm56VHJlZU5vZGUsIGUpO1xyXG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2UhLnRyaWdnZXJFdmVudENoYW5nZSQhLm5leHQoZXZlbnROZXh0KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRHJhZ092ZXIoZTogRHJhZ0V2ZW50KTogdm9pZCB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgY29uc3QgZHJvcFBvc2l0aW9uID0gdGhpcy5uelRyZWVTZXJ2aWNlLmNhbGNEcm9wUG9zaXRpb24oZSk7XHJcbiAgICBpZiAodGhpcy5kcmFnUG9zICE9PSBkcm9wUG9zaXRpb24pIHtcclxuICAgICAgdGhpcy5jbGVhckRyYWdDbGFzcygpO1xyXG4gICAgICB0aGlzLmRyYWdQb3MgPSBkcm9wUG9zaXRpb247XHJcbiAgICAgIC8vIGxlYWYgbm9kZSB3aWxsIHBhc3NcclxuICAgICAgaWYgKCEodGhpcy5kcmFnUG9zID09PSAwICYmIHRoaXMubnpUcmVlTm9kZS5pc0xlYWYpKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmRyYWdFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMuZHJhZ1Bvc0NsYXNzW3RoaXMuZHJhZ1Bvc10pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBldmVudE5leHQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2RyYWdvdmVyJywgdGhpcy5uelRyZWVOb2RlLCBlKTtcclxuICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dChldmVudE5leHQpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRHJhZ0xlYXZlKGU6IERyYWdFdmVudCk6IHZvaWQge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgIHRoaXMuY2xlYXJEcmFnQ2xhc3MoKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZXZlbnROZXh0ID0gdGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdkcmFnbGVhdmUnLCB0aGlzLm56VHJlZU5vZGUsIGUpO1xyXG4gICAgdGhpcy5uelRyZWVTZXJ2aWNlIS50cmlnZ2VyRXZlbnRDaGFuZ2UkIS5uZXh0KGV2ZW50TmV4dCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEcmFnRHJvcChlOiBEcmFnRXZlbnQpOiB2b2lkIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICB0aGlzLmNsZWFyRHJhZ0NsYXNzKCk7XHJcbiAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLm56VHJlZVNlcnZpY2UuZ2V0U2VsZWN0ZWROb2RlKCk7XHJcbiAgICAgIGlmICghbm9kZSB8fCAobm9kZSAmJiBub2RlLmtleSA9PT0gdGhpcy5uelRyZWVOb2RlLmtleSkgfHwgKHRoaXMuZHJhZ1BvcyA9PT0gMCAmJiB0aGlzLm56VHJlZU5vZGUuaXNMZWFmKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICAvLyBwYXNzIGlmIG5vZGUgaXMgbGVhZk5vXHJcbiAgICAgIGNvbnN0IGRyb3BFdmVudCA9IHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnZHJvcCcsIHRoaXMubnpUcmVlTm9kZSwgZSk7XHJcbiAgICAgIGNvbnN0IGRyYWdFbmRFdmVudCA9IHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnZHJhZ2VuZCcsIHRoaXMubnpUcmVlTm9kZSwgZSk7XHJcbiAgICAgIGlmICh0aGlzLm56QmVmb3JlRHJvcCkge1xyXG4gICAgICAgIHRoaXMubnpCZWZvcmVEcm9wKHtcclxuICAgICAgICAgIGRyYWdOb2RlOiB0aGlzLm56VHJlZVNlcnZpY2UuZ2V0U2VsZWN0ZWROb2RlKCkhLFxyXG4gICAgICAgICAgbm9kZTogdGhpcy5uelRyZWVOb2RlLFxyXG4gICAgICAgICAgcG9zOiB0aGlzLmRyYWdQb3NcclxuICAgICAgICB9KS5zdWJzY3JpYmUoKGNhbkRyb3A6IGJvb2xlYW4pID0+IHtcclxuICAgICAgICAgIGlmIChjYW5Ecm9wKSB7XHJcbiAgICAgICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5kcm9wQW5kQXBwbHkodGhpcy5uelRyZWVOb2RlLCB0aGlzLmRyYWdQb3MpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlIS50cmlnZ2VyRXZlbnRDaGFuZ2UkIS5uZXh0KGRyb3BFdmVudCk7XHJcbiAgICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UhLnRyaWdnZXJFdmVudENoYW5nZSQhLm5leHQoZHJhZ0VuZEV2ZW50KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLm56VHJlZU5vZGUpIHtcclxuICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UuZHJvcEFuZEFwcGx5KHRoaXMubnpUcmVlTm9kZSwgdGhpcy5kcmFnUG9zKTtcclxuICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UhLnRyaWdnZXJFdmVudENoYW5nZSQhLm5leHQoZHJvcEV2ZW50KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEcmFnRW5kKGU6IERyYWdFdmVudCk6IHZvaWQge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgIC8vIGlmIHVzZXIgZG8gbm90IGN1c3RvbSBiZWZvcmVEcm9wXHJcbiAgICAgIGlmICghdGhpcy5uekJlZm9yZURyb3ApIHtcclxuICAgICAgICBjb25zdCBldmVudE5leHQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2RyYWdlbmQnLCB0aGlzLm56VHJlZU5vZGUsIGUpO1xyXG4gICAgICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dChldmVudE5leHQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExpc3RlbmluZyB0byBkcmFnZ2luZyBldmVudHMuXHJcbiAgICovXHJcbiAgaGFuZERyYWdFdmVudCgpOiB2b2lkIHtcclxuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgaWYgKHRoaXMubnpEcmFnZ2FibGUpIHtcclxuICAgICAgICB0aGlzLmRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuICAgICAgICBmcm9tRXZlbnQ8RHJhZ0V2ZW50Pih0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsICdkcmFnc3RhcnQnKVxyXG4gICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAgICAgLnN1YnNjcmliZSgoZTogRHJhZ0V2ZW50KSA9PiB0aGlzLmhhbmRsZURyYWdTdGFydChlKSk7XHJcbiAgICAgICAgZnJvbUV2ZW50PERyYWdFdmVudD4odGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCAnZHJhZ2VudGVyJylcclxuICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgICAgIC5zdWJzY3JpYmUoKGU6IERyYWdFdmVudCkgPT4gdGhpcy5oYW5kbGVEcmFnRW50ZXIoZSkpO1xyXG4gICAgICAgIGZyb21FdmVudDxEcmFnRXZlbnQ+KHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgJ2RyYWdvdmVyJylcclxuICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgICAgIC5zdWJzY3JpYmUoKGU6IERyYWdFdmVudCkgPT4gdGhpcy5oYW5kbGVEcmFnT3ZlcihlKSk7XHJcbiAgICAgICAgZnJvbUV2ZW50PERyYWdFdmVudD4odGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCAnZHJhZ2xlYXZlJylcclxuICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgICAgIC5zdWJzY3JpYmUoKGU6IERyYWdFdmVudCkgPT4gdGhpcy5oYW5kbGVEcmFnTGVhdmUoZSkpO1xyXG4gICAgICAgIGZyb21FdmVudDxEcmFnRXZlbnQ+KHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgJ2Ryb3AnKVxyXG4gICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAgICAgLnN1YnNjcmliZSgoZTogRHJhZ0V2ZW50KSA9PiB0aGlzLmhhbmRsZURyYWdEcm9wKGUpKTtcclxuICAgICAgICBmcm9tRXZlbnQ8RHJhZ0V2ZW50Pih0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsICdkcmFnZW5kJylcclxuICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgICAgIC5zdWJzY3JpYmUoKGU6IERyYWdFdmVudCkgPT4gdGhpcy5oYW5kbGVEcmFnRW5kKGUpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgICAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaXNUZW1wbGF0ZVJlZih2YWx1ZToge30pOiBib29sZWFuIHtcclxuICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmO1xyXG4gIH1cclxuXHJcbiAgbWFya0ZvckNoZWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBuelRyZWVTZXJ2aWNlOiBOelRyZWVCYXNlU2VydmljZSxcclxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIGluaXQgZXhwYW5kZWQgLyBzZWxlY3RlZCAvIGNoZWNrZWQgbGlzdFxyXG4gICAgaWYgKHRoaXMubnpUcmVlTm9kZS5pc1NlbGVjdGVkKSB7XHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5zZXROb2RlQWN0aXZlKHRoaXMubnpUcmVlTm9kZSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5uelRyZWVOb2RlLmlzRXhwYW5kZWQpIHtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLnNldEV4cGFuZGVkTm9kZUxpc3QodGhpcy5uelRyZWVOb2RlKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm56VHJlZU5vZGUuaXNDaGVja2VkKSB7XHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5zZXRDaGVja2VkTm9kZUxpc3QodGhpcy5uelRyZWVOb2RlKTtcclxuICAgIH1cclxuICAgIC8vIFRPRE9cclxuICAgIHRoaXMubnpUcmVlTm9kZS5jb21wb25lbnQgPSB0aGlzO1xyXG4gICAgdGhpcy5uelRyZWVTZXJ2aWNlXHJcbiAgICAgIC5ldmVudFRyaWdnZXJDaGFuZ2VkKClcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgZmlsdGVyKGRhdGEgPT4gZGF0YS5ub2RlIS5rZXkgPT09IHRoaXMubnpUcmVlTm9kZS5rZXkpLFxyXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICAgICAgICB0aGlzLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB9KTtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcbn1cclxuIiwiPGxpICNkcmFnRWxlbWVudCByb2xlPVwidHJlZWl0ZW1cIiBbc3R5bGUuZGlzcGxheV09XCJkaXNwbGF5U3R5bGVcIiBbbmdDbGFzc109XCJuek5vZGVDbGFzc1wiPlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJuelNob3dFeHBhbmRcIj5cclxuICAgIDxzcGFuIFtuZ0NsYXNzXT1cIm56Tm9kZVN3aXRjaGVyQ2xhc3NcIiAoY2xpY2spPVwiX2NsaWNrRXhwYW5kKCRldmVudClcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzU2hvd1N3aXRjaEljb25cIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIW56VHJlZU5vZGUuaXNMb2FkaW5nXCI+XHJcbiAgICAgICAgICA8bmctdGVtcGxhdGVcclxuICAgICAgICAgICAgKm5nSWY9XCJpc1RlbXBsYXRlUmVmKG56RXhwYW5kZWRJY29uKVwiXHJcbiAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIm56RXhwYW5kZWRJY29uXCJcclxuICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBuelRyZWVOb2RlIH1cIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICpuZ0lmPVwiIWlzVGVtcGxhdGVSZWYobnpFeHBhbmRlZEljb24pXCJcclxuICAgICAgICAgICAgbnotaWNvblxyXG4gICAgICAgICAgICBuelR5cGU9XCJjYXJldC1kb3duXCJcclxuICAgICAgICAgICAgW2NsYXNzLmFudC1zZWxlY3Qtc3dpdGNoZXItaWNvbl09XCJuelNlbGVjdE1vZGVcIlxyXG4gICAgICAgICAgICBbY2xhc3MuYW50LXRyZWUtc3dpdGNoZXItaWNvbl09XCIhbnpTZWxlY3RNb2RlXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgIDwvaT5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8aVxyXG4gICAgICAgICAgKm5nSWY9XCJuelRyZWVOb2RlLmlzTG9hZGluZ1wiXHJcbiAgICAgICAgICBuei1pY29uXHJcbiAgICAgICAgICBuelR5cGU9XCJsb2FkaW5nXCJcclxuICAgICAgICAgIFtuelNwaW5dPVwidHJ1ZVwiXHJcbiAgICAgICAgICBjbGFzcz1cImFudC10cmVlLXN3aXRjaGVyLWxvYWRpbmctaWNvblwiXHJcbiAgICAgICAgPjwvaT5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJuelNob3dMaW5lXCI+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlXHJcbiAgICAgICAgICAqbmdJZj1cImlzVGVtcGxhdGVSZWYobnpFeHBhbmRlZEljb24pXCJcclxuICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIm56RXhwYW5kZWRJY29uXCJcclxuICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogbnpUcmVlTm9kZSB9XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWlzVGVtcGxhdGVSZWYobnpFeHBhbmRlZEljb24pXCI+XHJcbiAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAqbmdJZj1cImlzU2hvd0xpbmVJY29uXCJcclxuICAgICAgICAgICAgbnotaWNvblxyXG4gICAgICAgICAgICBbbnpUeXBlXT1cImlzU3dpdGNoZXJPcGVuID8gJ21pbnVzLXNxdWFyZScgOiAncGx1cy1zcXVhcmUnXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJhbnQtdHJlZS1zd2l0Y2hlci1saW5lLWljb25cIlxyXG4gICAgICAgICAgPjwvaT5cclxuICAgICAgICAgIDxpICpuZ0lmPVwiIWlzU2hvd0xpbmVJY29uXCIgbnotaWNvbiBuelR5cGU9XCJmaWxlXCIgY2xhc3M9XCJhbnQtdHJlZS1zd2l0Y2hlci1saW5lLWljb25cIj48L2k+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9zcGFuPlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJuekNoZWNrYWJsZVwiPlxyXG4gICAgPHNwYW4gW25nQ2xhc3NdPVwibnpOb2RlQ2hlY2tib3hDbGFzc1wiIChjbGljayk9XCJfY2xpY2tDaGVja0JveCgkZXZlbnQpXCI+XHJcbiAgICAgIDxzcGFuXHJcbiAgICAgICAgW2NsYXNzLmFudC10cmVlLWNoZWNrYm94LWlubmVyXT1cIiFuelNlbGVjdE1vZGVcIlxyXG4gICAgICAgIFtjbGFzcy5hbnQtc2VsZWN0LXRyZWUtY2hlY2tib3gtaW5uZXJdPVwibnpTZWxlY3RNb2RlXCJcclxuICAgICAgPjwvc3Bhbj5cclxuICAgIDwvc3Bhbj5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiIW56VHJlZVRlbXBsYXRlXCI+XHJcbiAgICA8c3BhblxyXG4gICAgICB0aXRsZT1cInt7IG56VHJlZU5vZGUudGl0bGUgfX1cIlxyXG4gICAgICBbYXR0ci5kcmFnZ2FibGVdPVwiY2FuRHJhZ2dhYmxlXCJcclxuICAgICAgW2F0dHIuYXJpYS1ncmFiYmVkXT1cImNhbkRyYWdnYWJsZVwiXHJcbiAgICAgIFtuZ0NsYXNzXT1cIm56Tm9kZUNvbnRlbnRDbGFzc1wiXHJcbiAgICAgIFtjbGFzcy5kcmFnZ2FibGVdPVwiY2FuRHJhZ2dhYmxlXCJcclxuICAgID5cclxuICAgICAgPHNwYW5cclxuICAgICAgICAqbmdJZj1cIm56VHJlZU5vZGUuaWNvbiAmJiBuelNob3dJY29uXCJcclxuICAgICAgICBbY2xhc3MuYW50LXRyZWUtaWNvbl9fb3Blbl09XCJpc1N3aXRjaGVyT3BlblwiXHJcbiAgICAgICAgW2NsYXNzLmFudC10cmVlLWljb25fX2Nsb3NlXT1cImlzU3dpdGNoZXJDbG9zZVwiXHJcbiAgICAgICAgW2NsYXNzLmFudC10cmVlLWljb25fbG9hZGluZ109XCJuelRyZWVOb2RlLmlzTG9hZGluZ1wiXHJcbiAgICAgICAgW25nQ2xhc3NdPVwibnpOb2RlQ29udGVudExvYWRpbmdDbGFzc1wiXHJcbiAgICAgID5cclxuICAgICAgICA8c3BhbiBbbmdDbGFzc109XCJuek5vZGVDb250ZW50SWNvbkNsYXNzXCI+XHJcbiAgICAgICAgICA8aSBuei1pY29uICpuZ0lmPVwibnpJY29uXCIgW256VHlwZV09XCJuekljb25cIj48L2k+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgIDxzcGFuXHJcbiAgICAgICAgY2xhc3M9XCJhbnQtdHJlZS10aXRsZVwiXHJcbiAgICAgICAgW2lubmVySFRNTF09XCJuelRyZWVOb2RlLnRpdGxlIHwgbnpIaWdobGlnaHQ6IG56U2VhcmNoVmFsdWU6Jyc6J2ZvbnQtaGlnaGxpZ2h0J1wiXHJcbiAgICAgID5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9zcGFuPlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG4gIDxuZy10ZW1wbGF0ZVxyXG4gICAgW25nVGVtcGxhdGVPdXRsZXRdPVwibnpUcmVlVGVtcGxhdGVcIlxyXG4gICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBuelRyZWVOb2RlIH1cIlxyXG4gID5cclxuICA8L25nLXRlbXBsYXRlPlxyXG5cclxuICA8dWxcclxuICAgICpuZ0lmPVwibnpUcmVlTm9kZS5pc0V4cGFuZGVkXCJcclxuICAgIHJvbGU9XCJncm91cFwiXHJcbiAgICBjbGFzcz1cImFudC10cmVlLWNoaWxkLXRyZWVcIlxyXG4gICAgW2NsYXNzLmFudC10cmVlLWNoaWxkLXRyZWUtb3Blbl09XCIhbnpTZWxlY3RNb2RlIHx8IG56VHJlZU5vZGUuaXNFeHBhbmRlZFwiXHJcbiAgICBkYXRhLWV4cGFuZGVkPVwidHJ1ZVwiXHJcbiAgICBbQC5kaXNhYmxlZF09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXHJcbiAgICBAdHJlZUNvbGxhcHNlTW90aW9uXHJcbiAgPlxyXG4gICAgPG56LXRyZWUtbm9kZVxyXG4gICAgICAqbmdGb3I9XCJsZXQgbm9kZSBvZiBuelRyZWVOb2RlLmdldENoaWxkcmVuKClcIlxyXG4gICAgICBbbnpUcmVlTm9kZV09XCJub2RlXCJcclxuICAgICAgW256U2hvd0V4cGFuZF09XCJuelNob3dFeHBhbmRcIlxyXG4gICAgICBbQC5kaXNhYmxlZF09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXHJcbiAgICAgIFtuek5vQW5pbWF0aW9uXT1cIm5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCJcclxuICAgICAgW256U2VsZWN0TW9kZV09XCJuelNlbGVjdE1vZGVcIlxyXG4gICAgICBbbnpTaG93TGluZV09XCJuelNob3dMaW5lXCJcclxuICAgICAgW256RXhwYW5kZWRJY29uXT1cIm56RXhwYW5kZWRJY29uXCJcclxuICAgICAgW256RHJhZ2dhYmxlXT1cIm56RHJhZ2dhYmxlXCJcclxuICAgICAgW256Q2hlY2thYmxlXT1cIm56Q2hlY2thYmxlXCJcclxuICAgICAgW256QXN5bmNEYXRhXT1cIm56QXN5bmNEYXRhXCJcclxuICAgICAgW256RXhwYW5kQWxsXT1cIm56RXhwYW5kQWxsXCJcclxuICAgICAgW256U2hvd0ljb25dPVwibnpTaG93SWNvblwiXHJcbiAgICAgIFtuelNlYXJjaFZhbHVlXT1cIm56U2VhcmNoVmFsdWVcIlxyXG4gICAgICBbbnpIaWRlVW5NYXRjaGVkXT1cIm56SGlkZVVuTWF0Y2hlZFwiXHJcbiAgICAgIFtuekJlZm9yZURyb3BdPVwibnpCZWZvcmVEcm9wXCJcclxuICAgICAgW256VHJlZVRlbXBsYXRlXT1cIm56VHJlZVRlbXBsYXRlXCJcclxuICAgID5cclxuICAgIDwvbnotdHJlZS1ub2RlPlxyXG4gIDwvdWw+XHJcbjwvbGk+XHJcbiJdfQ==