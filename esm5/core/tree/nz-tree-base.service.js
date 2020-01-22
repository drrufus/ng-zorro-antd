/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { isNotNil } from '../util';
import { NzTreeNode } from './nz-tree-base-node';
import { isCheckDisabled, isInArray } from './nz-tree-base-util';
var NzTreeBaseService = /** @class */ (function () {
    function NzTreeBaseService() {
        this.DRAG_SIDE_RANGE = 0.25;
        this.DRAG_MIN_GAP = 2;
        this.isCheckStrictly = false;
        this.isMultiple = false;
        this.rootNodes = [];
        this.selectedNodeList = [];
        this.expandedNodeList = [];
        this.checkedNodeList = [];
        this.halfCheckedNodeList = [];
        this.matchedNodeList = [];
        this.triggerEventChange$ = new Subject();
    }
    /**
     * trigger event
     */
    /**
     * trigger event
     * @return {?}
     */
    NzTreeBaseService.prototype.eventTriggerChanged = /**
     * trigger event
     * @return {?}
     */
    function () {
        return this.triggerEventChange$.asObservable();
    };
    /**
     * reset tree nodes will clear default node list
     */
    /**
     * reset tree nodes will clear default node list
     * @param {?} nzNodes
     * @return {?}
     */
    NzTreeBaseService.prototype.initTree = /**
     * reset tree nodes will clear default node list
     * @param {?} nzNodes
     * @return {?}
     */
    function (nzNodes) {
        var _this = this;
        this.rootNodes = nzNodes;
        this.expandedNodeList = [];
        this.selectedNodeList = [];
        this.halfCheckedNodeList = [];
        this.checkedNodeList = [];
        this.matchedNodeList = [];
        // refresh node checked state
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.refreshCheckState(_this.isCheckStrictly);
        }));
    };
    /**
     * @return {?}
     */
    NzTreeBaseService.prototype.getSelectedNode = /**
     * @return {?}
     */
    function () {
        return this.selectedNode;
    };
    /**
     * get some list
     */
    /**
     * get some list
     * @return {?}
     */
    NzTreeBaseService.prototype.getSelectedNodeList = /**
     * get some list
     * @return {?}
     */
    function () {
        return this.conductNodeState('select');
    };
    /**
     * return checked nodes
     */
    /**
     * return checked nodes
     * @return {?}
     */
    NzTreeBaseService.prototype.getCheckedNodeList = /**
     * return checked nodes
     * @return {?}
     */
    function () {
        return this.conductNodeState('check');
    };
    /**
     * @return {?}
     */
    NzTreeBaseService.prototype.getHalfCheckedNodeList = /**
     * @return {?}
     */
    function () {
        return this.conductNodeState('halfCheck');
    };
    /**
     * return expanded nodes
     */
    /**
     * return expanded nodes
     * @return {?}
     */
    NzTreeBaseService.prototype.getExpandedNodeList = /**
     * return expanded nodes
     * @return {?}
     */
    function () {
        return this.conductNodeState('expand');
    };
    /**
     * return search matched nodes
     */
    /**
     * return search matched nodes
     * @return {?}
     */
    NzTreeBaseService.prototype.getMatchedNodeList = /**
     * return search matched nodes
     * @return {?}
     */
    function () {
        return this.conductNodeState('match');
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @return {?}
     */
    NzTreeBaseService.prototype.isArrayOfNzTreeNode = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value.every((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item instanceof NzTreeNode; }));
    };
    /**
     * reset selectedNodeList
     */
    /**
     * reset selectedNodeList
     * @param {?} selectedKeys
     * @param {?} nzNodes
     * @param {?=} isMulti
     * @return {?}
     */
    NzTreeBaseService.prototype.calcSelectedKeys = /**
     * reset selectedNodeList
     * @param {?} selectedKeys
     * @param {?} nzNodes
     * @param {?=} isMulti
     * @return {?}
     */
    function (selectedKeys, nzNodes, isMulti) {
        if (isMulti === void 0) { isMulti = false; }
        /** @type {?} */
        var calc = (/**
         * @param {?} nodes
         * @return {?}
         */
        function (nodes) {
            return nodes.every((/**
             * @param {?} node
             * @return {?}
             */
            function (node) {
                if (isInArray(node.key, selectedKeys)) {
                    node.isSelected = true;
                    if (!isMulti) {
                        // if not support multi select
                        return false;
                    }
                }
                else {
                    node.isSelected = false;
                }
                if (node.children.length > 0) {
                    // Recursion
                    return calc(node.children);
                }
                return true;
            }));
        });
        calc(nzNodes);
    };
    /**
     * reset expandedNodeList
     */
    /**
     * reset expandedNodeList
     * @param {?} expandedKeys
     * @param {?} nzNodes
     * @return {?}
     */
    NzTreeBaseService.prototype.calcExpandedKeys = /**
     * reset expandedNodeList
     * @param {?} expandedKeys
     * @param {?} nzNodes
     * @return {?}
     */
    function (expandedKeys, nzNodes) {
        this.expandedNodeList = [];
        /** @type {?} */
        var calc = (/**
         * @param {?} nodes
         * @return {?}
         */
        function (nodes) {
            nodes.forEach((/**
             * @param {?} node
             * @return {?}
             */
            function (node) {
                node.isExpanded = isInArray(node.key, expandedKeys);
                if (node.children.length > 0) {
                    calc(node.children);
                }
            }));
        });
        calc(nzNodes);
    };
    /**
     * reset checkedNodeList
     */
    /**
     * reset checkedNodeList
     * @param {?} checkedKeys
     * @param {?} nzNodes
     * @param {?=} isCheckStrictly
     * @return {?}
     */
    NzTreeBaseService.prototype.calcCheckedKeys = /**
     * reset checkedNodeList
     * @param {?} checkedKeys
     * @param {?} nzNodes
     * @param {?=} isCheckStrictly
     * @return {?}
     */
    function (checkedKeys, nzNodes, isCheckStrictly) {
        if (isCheckStrictly === void 0) { isCheckStrictly = false; }
        this.checkedNodeList = [];
        this.halfCheckedNodeList = [];
        /** @type {?} */
        var calc = (/**
         * @param {?} nodes
         * @return {?}
         */
        function (nodes) {
            nodes.forEach((/**
             * @param {?} node
             * @return {?}
             */
            function (node) {
                if (isInArray(node.key, checkedKeys)) {
                    node.isChecked = true;
                    node.isHalfChecked = false;
                }
                else {
                    node.isChecked = false;
                    node.isHalfChecked = false;
                }
                if (node.children.length > 0) {
                    calc(node.children);
                }
            }));
        });
        calc(nzNodes);
        // controlled state
        this.refreshCheckState(isCheckStrictly);
    };
    /**
     * set drag node
     */
    /**
     * set drag node
     * @param {?} node
     * @return {?}
     */
    NzTreeBaseService.prototype.setSelectedNode = /**
     * set drag node
     * @param {?} node
     * @return {?}
     */
    function (node) {
        this.selectedNode = node;
    };
    /**
     * set node selected status
     */
    /**
     * set node selected status
     * @param {?} node
     * @return {?}
     */
    NzTreeBaseService.prototype.setNodeActive = /**
     * set node selected status
     * @param {?} node
     * @return {?}
     */
    function (node) {
        if (!this.isMultiple && node.isSelected) {
            this.selectedNodeList.forEach((/**
             * @param {?} n
             * @return {?}
             */
            function (n) {
                if (node.key !== n.key) {
                    // reset other nodes
                    n.isSelected = false;
                }
            }));
            // single mode: remove pre node
            this.selectedNodeList = [];
        }
        this.setSelectedNodeList(node, this.isMultiple);
    };
    /**
     * add or remove node to selectedNodeList
     */
    /**
     * add or remove node to selectedNodeList
     * @param {?} node
     * @param {?=} isMultiple
     * @return {?}
     */
    NzTreeBaseService.prototype.setSelectedNodeList = /**
     * add or remove node to selectedNodeList
     * @param {?} node
     * @param {?=} isMultiple
     * @return {?}
     */
    function (node, isMultiple) {
        if (isMultiple === void 0) { isMultiple = false; }
        /** @type {?} */
        var index = this.selectedNodeList.findIndex((/**
         * @param {?} n
         * @return {?}
         */
        function (n) { return node.key === n.key; }));
        if (isMultiple) {
            if (node.isSelected && index === -1) {
                this.selectedNodeList.push(node);
            }
        }
        else {
            if (node.isSelected && index === -1) {
                this.selectedNodeList = [node];
            }
        }
        if (!node.isSelected) {
            this.selectedNodeList = this.selectedNodeList.filter((/**
             * @param {?} n
             * @return {?}
             */
            function (n) { return n.key !== node.key; }));
        }
    };
    /**
     * merge checked nodes
     */
    /**
     * merge checked nodes
     * @param {?} node
     * @return {?}
     */
    NzTreeBaseService.prototype.setHalfCheckedNodeList = /**
     * merge checked nodes
     * @param {?} node
     * @return {?}
     */
    function (node) {
        /** @type {?} */
        var index = this.halfCheckedNodeList.findIndex((/**
         * @param {?} n
         * @return {?}
         */
        function (n) { return node.key === n.key; }));
        if (node.isHalfChecked && index === -1) {
            this.halfCheckedNodeList.push(node);
        }
        else if (!node.isHalfChecked && index > -1) {
            this.halfCheckedNodeList = this.halfCheckedNodeList.filter((/**
             * @param {?} n
             * @return {?}
             */
            function (n) { return node.key !== n.key; }));
        }
    };
    /**
     * @param {?} node
     * @return {?}
     */
    NzTreeBaseService.prototype.setCheckedNodeList = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        /** @type {?} */
        var index = this.checkedNodeList.findIndex((/**
         * @param {?} n
         * @return {?}
         */
        function (n) { return node.key === n.key; }));
        if (node.isChecked && index === -1) {
            this.checkedNodeList.push(node);
        }
        else if (!node.isChecked && index > -1) {
            this.checkedNodeList = this.checkedNodeList.filter((/**
             * @param {?} n
             * @return {?}
             */
            function (n) { return node.key !== n.key; }));
        }
    };
    /**
     * conduct checked/selected/expanded keys
     */
    /**
     * conduct checked/selected/expanded keys
     * @param {?=} type
     * @return {?}
     */
    NzTreeBaseService.prototype.conductNodeState = /**
     * conduct checked/selected/expanded keys
     * @param {?=} type
     * @return {?}
     */
    function (type) {
        var _this = this;
        if (type === void 0) { type = 'check'; }
        /** @type {?} */
        var resultNodesList = [];
        switch (type) {
            case 'select':
                resultNodesList = this.selectedNodeList;
                break;
            case 'expand':
                resultNodesList = this.expandedNodeList;
                break;
            case 'match':
                resultNodesList = this.matchedNodeList;
                break;
            case 'check':
                resultNodesList = this.checkedNodeList;
                /** @type {?} */
                var isIgnore_1 = (/**
                 * @param {?} node
                 * @return {?}
                 */
                function (node) {
                    /** @type {?} */
                    var parentNode = node.getParentNode();
                    if (parentNode) {
                        if (_this.checkedNodeList.findIndex((/**
                         * @param {?} n
                         * @return {?}
                         */
                        function (n) { return n.key === parentNode.key; })) > -1) {
                            return true;
                        }
                        else {
                            return isIgnore_1(parentNode);
                        }
                    }
                    return false;
                });
                // merge checked
                if (!this.isCheckStrictly) {
                    resultNodesList = this.checkedNodeList.filter((/**
                     * @param {?} n
                     * @return {?}
                     */
                    function (n) { return !isIgnore_1(n); }));
                }
                break;
            case 'halfCheck':
                if (!this.isCheckStrictly) {
                    resultNodesList = this.halfCheckedNodeList;
                }
                break;
        }
        return resultNodesList;
    };
    /**
     * set expanded nodes
     */
    /**
     * set expanded nodes
     * @param {?} node
     * @return {?}
     */
    NzTreeBaseService.prototype.setExpandedNodeList = /**
     * set expanded nodes
     * @param {?} node
     * @return {?}
     */
    function (node) {
        if (node.isLeaf) {
            return;
        }
        /** @type {?} */
        var index = this.expandedNodeList.findIndex((/**
         * @param {?} n
         * @return {?}
         */
        function (n) { return node.key === n.key; }));
        if (node.isExpanded && index === -1) {
            this.expandedNodeList.push(node);
        }
        else if (!node.isExpanded && index > -1) {
            this.expandedNodeList = this.expandedNodeList.filter((/**
             * @param {?} n
             * @return {?}
             */
            function (n) { return node.key !== n.key; }));
        }
    };
    /**
     * check state
     * @param isCheckStrictly
     */
    /**
     * check state
     * @param {?=} isCheckStrictly
     * @return {?}
     */
    NzTreeBaseService.prototype.refreshCheckState = /**
     * check state
     * @param {?=} isCheckStrictly
     * @return {?}
     */
    function (isCheckStrictly) {
        var _this = this;
        if (isCheckStrictly === void 0) { isCheckStrictly = false; }
        if (isCheckStrictly) {
            return;
        }
        this.checkedNodeList.forEach((/**
         * @param {?} node
         * @return {?}
         */
        function (node) {
            _this.conduct(node);
        }));
    };
    // reset other node checked state based current node
    // reset other node checked state based current node
    /**
     * @param {?} node
     * @return {?}
     */
    NzTreeBaseService.prototype.conduct = 
    // reset other node checked state based current node
    /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        /** @type {?} */
        var isChecked = node.isChecked;
        if (node) {
            this.conductUp(node);
            this.conductDown(node, isChecked);
        }
    };
    /**
     * 1、children half checked
     * 2、children all checked, parent checked
     * 3、no children checked
     */
    /**
     * 1、children half checked
     * 2、children all checked, parent checked
     * 3、no children checked
     * @param {?} node
     * @return {?}
     */
    NzTreeBaseService.prototype.conductUp = /**
     * 1、children half checked
     * 2、children all checked, parent checked
     * 3、no children checked
     * @param {?} node
     * @return {?}
     */
    function (node) {
        /** @type {?} */
        var parentNode = node.getParentNode();
        if (parentNode) {
            if (!isCheckDisabled(parentNode)) {
                if (parentNode.children.every((/**
                 * @param {?} child
                 * @return {?}
                 */
                function (child) { return isCheckDisabled(child) || (!child.isHalfChecked && child.isChecked); }))) {
                    parentNode.isChecked = true;
                    parentNode.isHalfChecked = false;
                }
                else if (parentNode.children.some((/**
                 * @param {?} child
                 * @return {?}
                 */
                function (child) { return child.isHalfChecked || child.isChecked; }))) {
                    parentNode.isChecked = false;
                    parentNode.isHalfChecked = true;
                }
                else {
                    parentNode.isChecked = false;
                    parentNode.isHalfChecked = false;
                }
            }
            this.setCheckedNodeList(parentNode);
            this.setHalfCheckedNodeList(parentNode);
            this.conductUp(parentNode);
        }
    };
    /**
     * reset child check state
     */
    /**
     * reset child check state
     * @param {?} node
     * @param {?} value
     * @return {?}
     */
    NzTreeBaseService.prototype.conductDown = /**
     * reset child check state
     * @param {?} node
     * @param {?} value
     * @return {?}
     */
    function (node, value) {
        var _this = this;
        if (!isCheckDisabled(node)) {
            node.isChecked = value;
            node.isHalfChecked = false;
            this.setCheckedNodeList(node);
            this.setHalfCheckedNodeList(node);
            node.children.forEach((/**
             * @param {?} n
             * @return {?}
             */
            function (n) {
                _this.conductDown(n, value);
            }));
        }
    };
    /**
     * search value & expand node
     * should add expandlist
     */
    /**
     * search value & expand node
     * should add expandlist
     * @param {?} value
     * @return {?}
     */
    NzTreeBaseService.prototype.searchExpand = /**
     * search value & expand node
     * should add expandlist
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        this.matchedNodeList = [];
        /** @type {?} */
        var expandedKeys = [];
        if (!isNotNil(value)) {
            return;
        }
        // to reset expandedNodeList
        /** @type {?} */
        var expandParent = (/**
         * @param {?} n
         * @return {?}
         */
        function (n) {
            // expand parent node
            /** @type {?} */
            var parentNode = n.getParentNode();
            if (parentNode) {
                expandedKeys.push(parentNode.key);
                expandParent(parentNode);
            }
        });
        /** @type {?} */
        var searchChild = (/**
         * @param {?} n
         * @return {?}
         */
        function (n) {
            if (value && n.title.includes(value)) {
                // match the node
                n.isMatched = true;
                _this.matchedNodeList.push(n);
                // expand parentNode
                expandParent(n);
            }
            else {
                n.isMatched = false;
            }
            n.canHide = !n.isMatched;
            n.children.forEach((/**
             * @param {?} child
             * @return {?}
             */
            function (child) {
                searchChild(child);
            }));
        });
        this.rootNodes.forEach((/**
         * @param {?} child
         * @return {?}
         */
        function (child) {
            searchChild(child);
        }));
        // expand matched keys
        this.calcExpandedKeys(expandedKeys, this.rootNodes);
    };
    /**
     * flush after delete node
     */
    /**
     * flush after delete node
     * @param {?} nodes
     * @return {?}
     */
    NzTreeBaseService.prototype.afterRemove = /**
     * flush after delete node
     * @param {?} nodes
     * @return {?}
     */
    function (nodes) {
        var _this = this;
        // to reset selectedNodeList & expandedNodeList
        /** @type {?} */
        var loopNode = (/**
         * @param {?} node
         * @return {?}
         */
        function (node) {
            // remove selected node
            _this.selectedNodeList = _this.selectedNodeList.filter((/**
             * @param {?} n
             * @return {?}
             */
            function (n) { return n.key !== node.key; }));
            // remove expanded node
            _this.expandedNodeList = _this.expandedNodeList.filter((/**
             * @param {?} n
             * @return {?}
             */
            function (n) { return n.key !== node.key; }));
            // remove checked node
            _this.checkedNodeList = _this.checkedNodeList.filter((/**
             * @param {?} n
             * @return {?}
             */
            function (n) { return n.key !== node.key; }));
            if (node.children) {
                node.children.forEach((/**
                 * @param {?} child
                 * @return {?}
                 */
                function (child) {
                    loopNode(child);
                }));
            }
        });
        nodes.forEach((/**
         * @param {?} n
         * @return {?}
         */
        function (n) {
            loopNode(n);
        }));
        this.refreshCheckState(this.isCheckStrictly);
    };
    /**
     * drag event
     */
    /**
     * drag event
     * @param {?} node
     * @return {?}
     */
    NzTreeBaseService.prototype.refreshDragNode = /**
     * drag event
     * @param {?} node
     * @return {?}
     */
    function (node) {
        var _this = this;
        if (node.children.length === 0) {
            // until root
            this.conductUp(node);
        }
        else {
            node.children.forEach((/**
             * @param {?} child
             * @return {?}
             */
            function (child) {
                _this.refreshDragNode(child);
            }));
        }
    };
    // reset node level
    // reset node level
    /**
     * @param {?} node
     * @return {?}
     */
    NzTreeBaseService.prototype.resetNodeLevel = 
    // reset node level
    /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        var e_1, _a;
        /** @type {?} */
        var parentNode = node.getParentNode();
        if (parentNode) {
            node.level = parentNode.level + 1;
        }
        else {
            node.level = 0;
        }
        try {
            for (var _b = tslib_1.__values(node.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                var child = _c.value;
                this.resetNodeLevel(child);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzTreeBaseService.prototype.calcDropPosition = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var clientY = event.clientY;
        // to fix firefox undefined
        var _a = event.srcElement
            ? ((/** @type {?} */ (event.srcElement))).getBoundingClientRect()
            : ((/** @type {?} */ (event.target))).getBoundingClientRect(), top = _a.top, bottom = _a.bottom, height = _a.height;
        /** @type {?} */
        var des = Math.max(height * this.DRAG_SIDE_RANGE, this.DRAG_MIN_GAP);
        if (clientY <= top + des) {
            return -1;
        }
        else if (clientY >= bottom - des) {
            return 1;
        }
        return 0;
    };
    /**
     * drop
     * 0: inner -1: pre 1: next
     */
    /**
     * drop
     * 0: inner -1: pre 1: next
     * @param {?} targetNode
     * @param {?=} dragPos
     * @return {?}
     */
    NzTreeBaseService.prototype.dropAndApply = /**
     * drop
     * 0: inner -1: pre 1: next
     * @param {?} targetNode
     * @param {?=} dragPos
     * @return {?}
     */
    function (targetNode, dragPos) {
        var _this = this;
        if (dragPos === void 0) { dragPos = -1; }
        if (!targetNode || dragPos > 1) {
            return;
        }
        /** @type {?} */
        var treeService = targetNode.treeService;
        /** @type {?} */
        var targetParent = targetNode.getParentNode();
        /** @type {?} */
        var isSelectedRootNode = this.selectedNode.getParentNode();
        // remove the dragNode
        if (isSelectedRootNode) {
            isSelectedRootNode.children = isSelectedRootNode.children.filter((/**
             * @param {?} n
             * @return {?}
             */
            function (n) { return n.key !== _this.selectedNode.key; }));
        }
        else {
            this.rootNodes = this.rootNodes.filter((/**
             * @param {?} n
             * @return {?}
             */
            function (n) { return n.key !== _this.selectedNode.key; }));
        }
        switch (dragPos) {
            case 0:
                targetNode.addChildren([this.selectedNode]);
                this.resetNodeLevel(targetNode);
                break;
            case -1:
            case 1:
                /** @type {?} */
                var tIndex = dragPos === 1 ? 1 : 0;
                if (targetParent) {
                    targetParent.addChildren([this.selectedNode], targetParent.children.indexOf(targetNode) + tIndex);
                    /** @type {?} */
                    var parentNode = this.selectedNode.getParentNode();
                    if (parentNode) {
                        this.resetNodeLevel(parentNode);
                    }
                }
                else {
                    /** @type {?} */
                    var targetIndex = this.rootNodes.indexOf(targetNode) + tIndex;
                    // Insert root node.
                    this.rootNodes.splice(targetIndex, 0, this.selectedNode);
                    this.rootNodes[targetIndex].parentNode = null;
                    this.rootNodes[targetIndex].level = 0;
                }
                break;
        }
        // flush all nodes
        this.rootNodes.forEach((/**
         * @param {?} child
         * @return {?}
         */
        function (child) {
            if (!child.treeService) {
                child.service = treeService;
            }
            _this.refreshDragNode(child);
        }));
    };
    /**
     * emit Structure
     * eventName
     * node
     * event: MouseEvent / DragEvent
     * dragNode
     */
    /**
     * emit Structure
     * eventName
     * node
     * event: MouseEvent / DragEvent
     * dragNode
     * @param {?} eventName
     * @param {?} node
     * @param {?} event
     * @return {?}
     */
    NzTreeBaseService.prototype.formatEvent = /**
     * emit Structure
     * eventName
     * node
     * event: MouseEvent / DragEvent
     * dragNode
     * @param {?} eventName
     * @param {?} node
     * @param {?} event
     * @return {?}
     */
    function (eventName, node, event) {
        /** @type {?} */
        var emitStructure = {
            eventName: eventName,
            node: node,
            event: event
        };
        switch (eventName) {
            case 'dragstart':
            case 'dragenter':
            case 'dragover':
            case 'dragleave':
            case 'drop':
            case 'dragend':
                Object.assign(emitStructure, { dragNode: this.getSelectedNode() });
                break;
            case 'click':
            case 'dblclick':
                Object.assign(emitStructure, { selectedKeys: this.selectedNodeList });
                Object.assign(emitStructure, { nodes: this.selectedNodeList });
                Object.assign(emitStructure, { keys: this.selectedNodeList.map((/**
                     * @param {?} n
                     * @return {?}
                     */
                    function (n) { return n.key; })) });
                break;
            case 'check':
                /** @type {?} */
                var checkedNodeList = this.getCheckedNodeList();
                Object.assign(emitStructure, { checkedKeys: checkedNodeList });
                Object.assign(emitStructure, { nodes: checkedNodeList });
                Object.assign(emitStructure, { keys: checkedNodeList.map((/**
                     * @param {?} n
                     * @return {?}
                     */
                    function (n) { return n.key; })) });
                break;
            case 'search':
                Object.assign(emitStructure, { matchedKeys: this.getMatchedNodeList() });
                Object.assign(emitStructure, { nodes: this.getMatchedNodeList() });
                Object.assign(emitStructure, { keys: this.getMatchedNodeList().map((/**
                     * @param {?} n
                     * @return {?}
                     */
                    function (n) { return n.key; })) });
                break;
            case 'expand':
                Object.assign(emitStructure, { nodes: this.expandedNodeList });
                Object.assign(emitStructure, { keys: this.expandedNodeList.map((/**
                     * @param {?} n
                     * @return {?}
                     */
                    function (n) { return n.key; })) });
                break;
        }
        return emitStructure;
    };
    /**
     * @return {?}
     */
    NzTreeBaseService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.triggerEventChange$.complete();
    };
    NzTreeBaseService.decorators = [
        { type: Injectable }
    ];
    return NzTreeBaseService;
}());
export { NzTreeBaseService };
if (false) {
    /** @type {?} */
    NzTreeBaseService.prototype.DRAG_SIDE_RANGE;
    /** @type {?} */
    NzTreeBaseService.prototype.DRAG_MIN_GAP;
    /** @type {?} */
    NzTreeBaseService.prototype.isCheckStrictly;
    /** @type {?} */
    NzTreeBaseService.prototype.isMultiple;
    /** @type {?} */
    NzTreeBaseService.prototype.selectedNode;
    /** @type {?} */
    NzTreeBaseService.prototype.rootNodes;
    /** @type {?} */
    NzTreeBaseService.prototype.selectedNodeList;
    /** @type {?} */
    NzTreeBaseService.prototype.expandedNodeList;
    /** @type {?} */
    NzTreeBaseService.prototype.checkedNodeList;
    /** @type {?} */
    NzTreeBaseService.prototype.halfCheckedNodeList;
    /** @type {?} */
    NzTreeBaseService.prototype.matchedNodeList;
    /** @type {?} */
    NzTreeBaseService.prototype.triggerEventChange$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS1iYXNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJ0cmVlL256LXRyZWUtYmFzZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBRW5DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBR2pFO0lBQUE7UUFFRSxvQkFBZSxHQUFHLElBQUksQ0FBQztRQUN2QixpQkFBWSxHQUFHLENBQUMsQ0FBQztRQUVqQixvQkFBZSxHQUFZLEtBQUssQ0FBQztRQUNqQyxlQUFVLEdBQVksS0FBSyxDQUFDO1FBRTVCLGNBQVMsR0FBaUIsRUFBRSxDQUFDO1FBQzdCLHFCQUFnQixHQUFpQixFQUFFLENBQUM7UUFDcEMscUJBQWdCLEdBQWlCLEVBQUUsQ0FBQztRQUNwQyxvQkFBZSxHQUFpQixFQUFFLENBQUM7UUFDbkMsd0JBQW1CLEdBQWlCLEVBQUUsQ0FBQztRQUN2QyxvQkFBZSxHQUFpQixFQUFFLENBQUM7UUFDbkMsd0JBQW1CLEdBQUcsSUFBSSxPQUFPLEVBQXFCLENBQUM7SUE2Z0J6RCxDQUFDO0lBM2dCQzs7T0FFRzs7Ozs7SUFDSCwrQ0FBbUI7Ozs7SUFBbkI7UUFDRSxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUNILG9DQUFROzs7OztJQUFSLFVBQVMsT0FBcUI7UUFBOUIsaUJBV0M7UUFWQyxJQUFJLENBQUMsU0FBUyxHQUFH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QyxHQUFHOzs7O29CQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEdBQUcsRUFBTCxDQUFLLEVBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQzlFLE1BQU07U0FDVDtRQUNELE9BQU8sYUFBYSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCx1Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDdEMsQ0FBQzs7Z0JBMWhCRixVQUFVOztJQTJoQlgsd0JBQUM7Q0FBQSxBQTNoQkQsSUEyaEJDO1NBMWhCWSxpQkFBaUI7OztJQUM1Qiw0Q0FBdUI7O0lBQ3ZCLHlDQUFpQjs7SUFFakIsNENBQWlDOztJQUNqQyx1Q0FBNEI7O0lBQzVCLHlDQUF5Qjs7SUFDekIsc0NBQTZCOztJQUM3Qiw2Q0FBb0M7O0lBQ3BDLDZDQUFvQzs7SUFDcEMsNENBQW1DOztJQUNuQyxnREFBdUM7O0lBQ3ZDLDRDQUFtQzs7SUFDbkMsZ0RBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICcuLi91dGlsJztcclxuXHJcbmltcG9ydCB7IE56VHJlZU5vZGUgfSBmcm9tICcuL256LXRyZWUtYmFzZS1ub2RlJztcclxuaW1wb3J0IHsgaXNDaGVja0Rpc2FibGVkLCBpc0luQXJyYXkgfSBmcm9tICcuL256LXRyZWUtYmFzZS11dGlsJztcclxuaW1wb3J0IHsgTnpGb3JtYXRFbWl0RXZlbnQgfSBmcm9tICcuL256LXRyZWUtYmFzZS5kZWZpbml0aW9ucyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOelRyZWVCYXNlU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgRFJBR19TSURFX1JBTkdFID0gMC4yNTtcclxuICBEUkFHX01JTl9HQVAgPSAyO1xyXG5cclxuICBpc0NoZWNrU3RyaWN0bHk6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBpc011bHRpcGxlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgc2VsZWN0ZWROb2RlOiBOelRyZWVOb2RlO1xyXG4gIHJvb3ROb2RlczogTnpUcmVlTm9kZVtdID0gW107XHJcbiAgc2VsZWN0ZWROb2RlTGlzdDogTnpUcmVlTm9kZVtdID0gW107XHJcbiAgZXhwYW5kZWROb2RlTGlzdDogTnpUcmVlTm9kZVtdID0gW107XHJcbiAgY2hlY2tlZE5vZGVMaXN0OiBOelRyZWVOb2RlW10gPSBbXTtcclxuICBoYWxmQ2hlY2tlZE5vZGVMaXN0OiBOelRyZWVOb2RlW10gPSBbXTtcclxuICBtYXRjaGVkTm9kZUxpc3Q6IE56VHJlZU5vZGVbXSA9IFtdO1xyXG4gIHRyaWdnZXJFdmVudENoYW5nZSQgPSBuZXcgU3ViamVjdDxOekZvcm1hdEVtaXRFdmVudD4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogdHJpZ2dlciBldmVudFxyXG4gICAqL1xyXG4gIGV2ZW50VHJpZ2dlckNoYW5nZWQoKTogT2JzZXJ2YWJsZTxOekZvcm1hdEVtaXRFdmVudD4ge1xyXG4gICAgcmV0dXJuIHRoaXMudHJpZ2dlckV2ZW50Q2hhbmdlJC5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHJlc2V0IHRyZWUgbm9kZXMgd2lsbCBjbGVhciBkZWZhdWx0IG5vZGUgbGlzdFxyXG4gICAqL1xyXG4gIGluaXRUcmVlKG56Tm9kZXM6IE56VHJlZU5vZGVbXSk6IHZvaWQge1xyXG4gICAgdGhpcy5yb290Tm9kZXMgPSBuek5vZGVzO1xyXG4gICAgdGhpcy5leHBhbmRlZE5vZGVMaXN0ID0gW107XHJcbiAgICB0aGlzLnNlbGVjdGVkTm9kZUxpc3QgPSBbXTtcclxuICAgIHRoaXMuaGFsZkNoZWNrZWROb2RlTGlzdCA9IFtdO1xyXG4gICAgdGhpcy5jaGVja2VkTm9kZUxpc3QgPSBbXTtcclxuICAgIHRoaXMubWF0Y2hlZE5vZGVMaXN0ID0gW107XHJcbiAgICAvLyByZWZyZXNoIG5vZGUgY2hlY2tlZCBzdGF0ZVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMucmVmcmVzaENoZWNrU3RhdGUodGhpcy5pc0NoZWNrU3RyaWN0bHkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRTZWxlY3RlZE5vZGUoKTogTnpUcmVlTm9kZSB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWROb2RlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogZ2V0IHNvbWUgbGlzdFxyXG4gICAqL1xyXG4gIGdldFNlbGVjdGVkTm9kZUxpc3QoKTogTnpUcmVlTm9kZVtdIHtcclxuICAgIHJldHVybiB0aGlzLmNvbmR1Y3ROb2RlU3RhdGUoJ3NlbGVjdCcpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogcmV0dXJuIGNoZWNrZWQgbm9kZXNcclxuICAgKi9cclxuICBnZXRDaGVja2VkTm9kZUxpc3QoKTogTnpUcmVlTm9kZVtdIHtcclxuICAgIHJldHVybiB0aGlzLmNvbmR1Y3ROb2RlU3RhdGUoJ2NoZWNrJyk7XHJcbiAgfVxyXG5cclxuICBnZXRIYWxmQ2hlY2tlZE5vZGVMaXN0KCk6IE56VHJlZU5vZGVbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25kdWN0Tm9kZVN0YXRlKCdoYWxmQ2hlY2snKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHJldHVybiBleHBhbmRlZCBub2Rlc1xyXG4gICAqL1xyXG4gIGdldEV4cGFuZGVkTm9kZUxpc3QoKTogTnpUcmVlTm9kZVtdIHtcclxuICAgIHJldHVybiB0aGlzLmNvbmR1Y3ROb2RlU3RhdGUoJ2V4cGFuZCcpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogcmV0dXJuIHNlYXJjaCBtYXRjaGVkIG5vZGVzXHJcbiAgICovXHJcbiAgZ2V0TWF0Y2hlZE5vZGVMaXN0KCk6IE56VHJlZU5vZGVbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25kdWN0Tm9kZVN0YXRlKCdtYXRjaCcpO1xyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIGlzQXJyYXlPZk56VHJlZU5vZGUodmFsdWU6IGFueVtdKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdmFsdWUuZXZlcnkoaXRlbSA9PiBpdGVtIGluc3RhbmNlb2YgTnpUcmVlTm9kZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiByZXNldCBzZWxlY3RlZE5vZGVMaXN0XHJcbiAgICovXHJcbiAgY2FsY1NlbGVjdGVkS2V5cyhzZWxlY3RlZEtleXM6IHN0cmluZ1tdLCBuek5vZGVzOiBOelRyZWVOb2RlW10sIGlzTXVsdGk6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgY29uc3QgY2FsYyA9IChub2RlczogTnpUcmVlTm9kZVtdKTogYm9vbGVhbiA9PiB7XHJcbiAgICAgIHJldHVybiBub2Rlcy5ldmVyeShub2RlID0+IHtcclxuICAgICAgICBpZiAoaXNJbkFycmF5KG5vZGUua2V5LCBzZWxlY3RlZEtleXMpKSB7XHJcbiAgICAgICAgICBub2RlLmlzU2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgaWYgKCFpc011bHRpKSB7XHJcbiAgICAgICAgICAgIC8vIGlmIG5vdCBzdXBwb3J0IG11bHRpIHNlbGVjdFxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG5vZGUuaXNTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAvLyBSZWN1cnNpb25cclxuICAgICAgICAgIHJldHVybiBjYWxjKG5vZGUuY2hpbGRyZW4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgY2FsYyhuek5vZGVzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHJlc2V0IGV4cGFuZGVkTm9kZUxpc3RcclxuICAgKi9cclxuICBjYWxjRXhwYW5kZWRLZXlzKGV4cGFuZGVkS2V5czogc3RyaW5nW10sIG56Tm9kZXM6IE56VHJlZU5vZGVbXSk6IHZvaWQge1xyXG4gICAgdGhpcy5leHBhbmRlZE5vZGVMaXN0ID0gW107XHJcbiAgICBjb25zdCBjYWxjID0gKG5vZGVzOiBOelRyZWVOb2RlW10pID0+IHtcclxuICAgICAgbm9kZXMuZm9yRWFjaChub2RlID0+IHtcclxuICAgICAgICBub2RlLmlzRXhwYW5kZWQgPSBpc0luQXJyYXkobm9kZS5rZXksIGV4cGFuZGVkS2V5cyk7XHJcbiAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgY2FsYyhub2RlLmNoaWxkcmVuKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGNhbGMobnpOb2Rlcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiByZXNldCBjaGVja2VkTm9kZUxpc3RcclxuICAgKi9cclxuICBjYWxjQ2hlY2tlZEtleXMoY2hlY2tlZEtleXM6IHN0cmluZ1tdLCBuek5vZGVzOiBOelRyZWVOb2RlW10sIGlzQ2hlY2tTdHJpY3RseTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoZWNrZWROb2RlTGlzdCA9IFtdO1xyXG4gICAgdGhpcy5oYWxmQ2hlY2tlZE5vZGVMaXN0ID0gW107XHJcbiAgICBjb25zdCBjYWxjID0gKG5vZGVzOiBOelRyZWVOb2RlW10pID0+IHtcclxuICAgICAgbm9kZXMuZm9yRWFjaChub2RlID0+IHtcclxuICAgICAgICBpZiAoaXNJbkFycmF5KG5vZGUua2V5LCBjaGVja2VkS2V5cykpIHtcclxuICAgICAgICAgIG5vZGUuaXNDaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgIG5vZGUuaXNIYWxmQ2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBub2RlLmlzQ2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgbm9kZS5pc0hhbGZDaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGNhbGMobm9kZS5jaGlsZHJlbik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgICBjYWxjKG56Tm9kZXMpO1xyXG4gICAgLy8gY29udHJvbGxlZCBzdGF0ZVxyXG4gICAgdGhpcy5yZWZyZXNoQ2hlY2tTdGF0ZShpc0NoZWNrU3RyaWN0bHkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogc2V0IGRyYWcgbm9kZVxyXG4gICAqL1xyXG4gIHNldFNlbGVjdGVkTm9kZShub2RlOiBOelRyZWVOb2RlKTogdm9pZCB7XHJcbiAgICB0aGlzLnNlbGVjdGVkTm9kZSA9IG5vZGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBzZXQgbm9kZSBzZWxlY3RlZCBzdGF0dXNcclxuICAgKi9cclxuICBzZXROb2RlQWN0aXZlKG5vZGU6IE56VHJlZU5vZGUpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5pc011bHRpcGxlICYmIG5vZGUuaXNTZWxlY3RlZCkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkTm9kZUxpc3QuZm9yRWFjaChuID0+IHtcclxuICAgICAgICBpZiAobm9kZS5rZXkgIT09IG4ua2V5KSB7XHJcbiAgICAgICAgICAvLyByZXNldCBvdGhlciBub2Rlc1xyXG4gICAgICAgICAgbi5pc1NlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgLy8gc2luZ2xlIG1vZGU6IHJlbW92ZSBwcmUgbm9kZVxyXG4gICAgICB0aGlzLnNlbGVjdGVkTm9kZUxpc3QgPSBbXTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U2VsZWN0ZWROb2RlTGlzdChub2RlLCB0aGlzLmlzTXVsdGlwbGUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogYWRkIG9yIHJlbW92ZSBub2RlIHRvIHNlbGVjdGVkTm9kZUxpc3RcclxuICAgKi9cclxuICBzZXRTZWxlY3RlZE5vZGVMaXN0KG5vZGU6IE56VHJlZU5vZGUsIGlzTXVsdGlwbGU6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnNlbGVjdGVkTm9kZUxpc3QuZmluZEluZGV4KG4gPT4gbm9kZS5rZXkgPT09IG4ua2V5KTtcclxuICAgIGlmIChpc011bHRpcGxlKSB7XHJcbiAgICAgIGlmIChub2RlLmlzU2VsZWN0ZWQgJiYgaW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZE5vZGVMaXN0LnB1c2gobm9kZSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChub2RlLmlzU2VsZWN0ZWQgJiYgaW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZE5vZGVMaXN0ID0gW25vZGVdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoIW5vZGUuaXNTZWxlY3RlZCkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkTm9kZUxpc3QgPSB0aGlzLnNlbGVjdGVkTm9kZUxpc3QuZmlsdGVyKG4gPT4gbi5rZXkgIT09IG5vZGUua2V5KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1lcmdlIGNoZWNrZWQgbm9kZXNcclxuICAgKi9cclxuICBzZXRIYWxmQ2hlY2tlZE5vZGVMaXN0KG5vZGU6IE56VHJlZU5vZGUpOiB2b2lkIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5oYWxmQ2hlY2tlZE5vZGVMaXN0LmZpbmRJbmRleChuID0+IG5vZGUua2V5ID09PSBuLmtleSk7XHJcbiAgICBpZiAobm9kZS5pc0hhbGZDaGVja2VkICYmIGluZGV4ID09PSAtMSkge1xyXG4gICAgICB0aGlzLmhhbGZDaGVja2VkTm9kZUxpc3QucHVzaChub2RlKTtcclxuICAgIH0gZWxzZSBpZiAoIW5vZGUuaXNIYWxmQ2hlY2tlZCAmJiBpbmRleCA+IC0xKSB7XHJcbiAgICAgIHRoaXMuaGFsZkNoZWNrZWROb2RlTGlzdCA9IHRoaXMuaGFsZkNoZWNrZWROb2RlTGlzdC5maWx0ZXIobiA9PiBub2RlLmtleSAhPT0gbi5rZXkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0Q2hlY2tlZE5vZGVMaXN0KG5vZGU6IE56VHJlZU5vZGUpOiB2b2lkIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jaGVja2VkTm9kZUxpc3QuZmluZEluZGV4KG4gPT4gbm9kZS5rZXkgPT09IG4ua2V5KTtcclxuICAgIGlmIChub2RlLmlzQ2hlY2tlZCAmJiBpbmRleCA9PT0gLTEpIHtcclxuICAgICAgdGhpcy5jaGVja2VkTm9kZUxpc3QucHVzaChub2RlKTtcclxuICAgIH0gZWxzZSBpZiAoIW5vZGUuaXNDaGVja2VkICYmIGluZGV4ID4gLTEpIHtcclxuICAgICAgdGhpcy5jaGVja2VkTm9kZUxpc3QgPSB0aGlzLmNoZWNrZWROb2RlTGlzdC5maWx0ZXIobiA9PiBub2RlLmtleSAhPT0gbi5rZXkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogY29uZHVjdCBjaGVja2VkL3NlbGVjdGVkL2V4cGFuZGVkIGtleXNcclxuICAgKi9cclxuICBjb25kdWN0Tm9kZVN0YXRlKHR5cGU6IHN0cmluZyA9ICdjaGVjaycpOiBOelRyZWVOb2RlW10ge1xyXG4gICAgbGV0IHJlc3VsdE5vZGVzTGlzdDogTnpUcmVlTm9kZVtdID0gW107XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSAnc2VsZWN0JzpcclxuICAgICAgICByZXN1bHROb2Rlc0xpc3QgPSB0aGlzLnNlbGVjdGVkTm9kZUxpc3Q7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2V4cGFuZCc6XHJcbiAgICAgICAgcmVzdWx0Tm9kZXNMaXN0ID0gdGhpcy5leHBhbmRlZE5vZGVMaXN0O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdtYXRjaCc6XHJcbiAgICAgICAgcmVzdWx0Tm9kZXNMaXN0ID0gdGhpcy5tYXRjaGVkTm9kZUxpc3Q7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2NoZWNrJzpcclxuICAgICAgICByZXN1bHROb2Rlc0xpc3QgPSB0aGlzLmNoZWNrZWROb2RlTGlzdDtcclxuICAgICAgICBjb25zdCBpc0lnbm9yZSA9IChub2RlOiBOelRyZWVOb2RlKTogYm9vbGVhbiA9PiB7XHJcbiAgICAgICAgICBjb25zdCBwYXJlbnROb2RlID0gbm9kZS5nZXRQYXJlbnROb2RlKCk7XHJcbiAgICAgICAgICBpZiAocGFyZW50Tm9kZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja2VkTm9kZUxpc3QuZmluZEluZGV4KG4gPT4gbi5rZXkgPT09IHBhcmVudE5vZGUua2V5KSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGlzSWdub3JlKHBhcmVudE5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBtZXJnZSBjaGVja2VkXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQ2hlY2tTdHJpY3RseSkge1xyXG4gICAgICAgICAgcmVzdWx0Tm9kZXNMaXN0ID0gdGhpcy5jaGVja2VkTm9kZUxpc3QuZmlsdGVyKG4gPT4gIWlzSWdub3JlKG4pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2hhbGZDaGVjayc6XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQ2hlY2tTdHJpY3RseSkge1xyXG4gICAgICAgICAgcmVzdWx0Tm9kZXNMaXN0ID0gdGhpcy5oYWxmQ2hlY2tlZE5vZGVMaXN0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHROb2Rlc0xpc3Q7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBzZXQgZXhwYW5kZWQgbm9kZXNcclxuICAgKi9cclxuICBzZXRFeHBhbmRlZE5vZGVMaXN0KG5vZGU6IE56VHJlZU5vZGUpOiB2b2lkIHtcclxuICAgIGlmIChub2RlLmlzTGVhZikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZXhwYW5kZWROb2RlTGlzdC5maW5kSW5kZXgobiA9PiBub2RlLmtleSA9PT0gbi5rZXkpO1xyXG4gICAgaWYgKG5vZGUuaXNFeHBhbmRlZCAmJiBpbmRleCA9PT0gLTEpIHtcclxuICAgICAgdGhpcy5leHBhbmRlZE5vZGVMaXN0LnB1c2gobm9kZSk7XHJcbiAgICB9IGVsc2UgaWYgKCFub2RlLmlzRXhwYW5kZWQgJiYgaW5kZXggPiAtMSkge1xyXG4gICAgICB0aGlzLmV4cGFuZGVkTm9kZUxpc3QgPSB0aGlzLmV4cGFuZGVkTm9kZUxpc3QuZmlsdGVyKG4gPT4gbm9kZS5rZXkgIT09IG4ua2V5KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGNoZWNrIHN0YXRlXHJcbiAgICogQHBhcmFtIGlzQ2hlY2tTdHJpY3RseVxyXG4gICAqL1xyXG4gIHJlZnJlc2hDaGVja1N0YXRlKGlzQ2hlY2tTdHJpY3RseTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICBpZiAoaXNDaGVja1N0cmljdGx5KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuY2hlY2tlZE5vZGVMaXN0LmZvckVhY2gobm9kZSA9PiB7XHJcbiAgICAgIHRoaXMuY29uZHVjdChub2RlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gcmVzZXQgb3RoZXIgbm9kZSBjaGVja2VkIHN0YXRlIGJhc2VkIGN1cnJlbnQgbm9kZVxyXG4gIGNvbmR1Y3Qobm9kZTogTnpUcmVlTm9kZSk6IHZvaWQge1xyXG4gICAgY29uc3QgaXNDaGVja2VkID0gbm9kZS5pc0NoZWNrZWQ7XHJcbiAgICBpZiAobm9kZSkge1xyXG4gICAgICB0aGlzLmNvbmR1Y3RVcChub2RlKTtcclxuICAgICAgdGhpcy5jb25kdWN0RG93bihub2RlLCBpc0NoZWNrZWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogMeOAgWNoaWxkcmVuIGhhbGYgY2hlY2tlZFxyXG4gICAqIDLjgIFjaGlsZHJlbiBhbGwgY2hlY2tlZCwgcGFyZW50IGNoZWNrZWRcclxuICAgKiAz44CBbm8gY2hpbGRyZW4gY2hlY2tlZFxyXG4gICAqL1xyXG4gIGNvbmR1Y3RVcChub2RlOiBOelRyZWVOb2RlKTogdm9pZCB7XHJcbiAgICBjb25zdCBwYXJlbnROb2RlID0gbm9kZS5nZXRQYXJlbnROb2RlKCk7XHJcbiAgICBpZiAocGFyZW50Tm9kZSkge1xyXG4gICAgICBpZiAoIWlzQ2hlY2tEaXNhYmxlZChwYXJlbnROb2RlKSkge1xyXG4gICAgICAgIGlmIChwYXJlbnROb2RlLmNoaWxkcmVuLmV2ZXJ5KGNoaWxkID0+IGlzQ2hlY2tEaXNhYmxlZChjaGlsZCkgfHwgKCFjaGlsZC5pc0hhbGZDaGVja2VkICYmIGNoaWxkLmlzQ2hlY2tlZCkpKSB7XHJcbiAgICAgICAgICBwYXJlbnROb2RlLmlzQ2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICBwYXJlbnROb2RlLmlzSGFsZkNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHBhcmVudE5vZGUuY2hpbGRyZW4uc29tZShjaGlsZCA9PiBjaGlsZC5pc0hhbGZDaGVja2VkIHx8IGNoaWxkLmlzQ2hlY2tlZCkpIHtcclxuICAgICAgICAgIHBhcmVudE5vZGUuaXNDaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICBwYXJlbnROb2RlLmlzSGFsZkNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBwYXJlbnROb2RlLmlzQ2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgcGFyZW50Tm9kZS5pc0hhbGZDaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2V0Q2hlY2tlZE5vZGVMaXN0KHBhcmVudE5vZGUpO1xyXG4gICAgICB0aGlzLnNldEhhbGZDaGVja2VkTm9kZUxpc3QocGFyZW50Tm9kZSk7XHJcbiAgICAgIHRoaXMuY29uZHVjdFVwKHBhcmVudE5vZGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogcmVzZXQgY2hpbGQgY2hlY2sgc3RhdGVcclxuICAgKi9cclxuICBjb25kdWN0RG93bihub2RlOiBOelRyZWVOb2RlLCB2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKCFpc0NoZWNrRGlzYWJsZWQobm9kZSkpIHtcclxuICAgICAgbm9kZS5pc0NoZWNrZWQgPSB2YWx1ZTtcclxuICAgICAgbm9kZS5pc0hhbGZDaGVja2VkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2V0Q2hlY2tlZE5vZGVMaXN0KG5vZGUpO1xyXG4gICAgICB0aGlzLnNldEhhbGZDaGVja2VkTm9kZUxpc3Qobm9kZSk7XHJcbiAgICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaChuID0+IHtcclxuICAgICAgICB0aGlzLmNvbmR1Y3REb3duKG4sIHZhbHVlKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBzZWFyY2ggdmFsdWUgJiBleHBhbmQgbm9kZVxyXG4gICAqIHNob3VsZCBhZGQgZXhwYW5kbGlzdFxyXG4gICAqL1xyXG4gIHNlYXJjaEV4cGFuZCh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLm1hdGNoZWROb2RlTGlzdCA9IFtdO1xyXG4gICAgY29uc3QgZXhwYW5kZWRLZXlzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgaWYgKCFpc05vdE5pbCh2YWx1ZSkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8gdG8gcmVzZXQgZXhwYW5kZWROb2RlTGlzdFxyXG4gICAgY29uc3QgZXhwYW5kUGFyZW50ID0gKG46IE56VHJlZU5vZGUpID0+IHtcclxuICAgICAgLy8gZXhwYW5kIHBhcmVudCBub2RlXHJcbiAgICAgIGNvbnN0IHBhcmVudE5vZGUgPSBuLmdldFBhcmVudE5vZGUoKTtcclxuICAgICAgaWYgKHBhcmVudE5vZGUpIHtcclxuICAgICAgICBleHBhbmRlZEtleXMucHVzaChwYXJlbnROb2RlLmtleSk7XHJcbiAgICAgICAgZXhwYW5kUGFyZW50KHBhcmVudE5vZGUpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgc2VhcmNoQ2hpbGQgPSAobjogTnpUcmVlTm9kZSkgPT4ge1xyXG4gICAgICBpZiAodmFsdWUgJiYgbi50aXRsZS5pbmNsdWRlcyh2YWx1ZSkpIHtcclxuICAgICAgICAvLyBtYXRjaCB0aGUgbm9kZVxyXG4gICAgICAgIG4uaXNNYXRjaGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm1hdGNoZWROb2RlTGlzdC5wdXNoKG4pO1xyXG4gICAgICAgIC8vIGV4cGFuZCBwYXJlbnROb2RlXHJcbiAgICAgICAgZXhwYW5kUGFyZW50KG4pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG4uaXNNYXRjaGVkID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgbi5jYW5IaWRlID0gIW4uaXNNYXRjaGVkO1xyXG4gICAgICBuLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgIHNlYXJjaENoaWxkKGNoaWxkKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5yb290Tm9kZXMuZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgIHNlYXJjaENoaWxkKGNoaWxkKTtcclxuICAgIH0pO1xyXG4gICAgLy8gZXhwYW5kIG1hdGNoZWQga2V5c1xyXG4gICAgdGhpcy5jYWxjRXhwYW5kZWRLZXlzKGV4cGFuZGVkS2V5cywgdGhpcy5yb290Tm9kZXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogZmx1c2ggYWZ0ZXIgZGVsZXRlIG5vZGVcclxuICAgKi9cclxuICBhZnRlclJlbW92ZShub2RlczogTnpUcmVlTm9kZVtdKTogdm9pZCB7XHJcbiAgICAvLyB0byByZXNldCBzZWxlY3RlZE5vZGVMaXN0ICYgZXhwYW5kZWROb2RlTGlzdFxyXG4gICAgY29uc3QgbG9vcE5vZGUgPSAobm9kZTogTnpUcmVlTm9kZSkgPT4ge1xyXG4gICAgICAvLyByZW1vdmUgc2VsZWN0ZWQgbm9kZVxyXG4gICAgICB0aGlzLnNlbGVjdGVkTm9kZUxpc3QgPSB0aGlzLnNlbGVjdGVkTm9kZUxpc3QuZmlsdGVyKG4gPT4gbi5rZXkgIT09IG5vZGUua2V5KTtcclxuICAgICAgLy8gcmVtb3ZlIGV4cGFuZGVkIG5vZGVcclxuICAgICAgdGhpcy5leHBhbmRlZE5vZGVMaXN0ID0gdGhpcy5leHBhbmRlZE5vZGVMaXN0LmZpbHRlcihuID0+IG4ua2V5ICE9PSBub2RlLmtleSk7XHJcbiAgICAgIC8vIHJlbW92ZSBjaGVja2VkIG5vZGVcclxuICAgICAgdGhpcy5jaGVja2VkTm9kZUxpc3QgPSB0aGlzLmNoZWNrZWROb2RlTGlzdC5maWx0ZXIobiA9PiBuLmtleSAhPT0gbm9kZS5rZXkpO1xyXG4gICAgICBpZiAobm9kZS5jaGlsZHJlbikge1xyXG4gICAgICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgICBsb29wTm9kZShjaGlsZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBub2Rlcy5mb3JFYWNoKG4gPT4ge1xyXG4gICAgICBsb29wTm9kZShuKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5yZWZyZXNoQ2hlY2tTdGF0ZSh0aGlzLmlzQ2hlY2tTdHJpY3RseSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBkcmFnIGV2ZW50XHJcbiAgICovXHJcbiAgcmVmcmVzaERyYWdOb2RlKG5vZGU6IE56VHJlZU5vZGUpOiB2b2lkIHtcclxuICAgIGlmIChub2RlLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAvLyB1bnRpbCByb290XHJcbiAgICAgIHRoaXMuY29uZHVjdFVwKG5vZGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICB0aGlzLnJlZnJlc2hEcmFnTm9kZShjaGlsZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gcmVzZXQgbm9kZSBsZXZlbFxyXG4gIHJlc2V0Tm9kZUxldmVsKG5vZGU6IE56VHJlZU5vZGUpOiB2b2lkIHtcclxuICAgIGNvbnN0IHBhcmVudE5vZGUgPSBub2RlLmdldFBhcmVudE5vZGUoKTtcclxuICAgIGlmIChwYXJlbnROb2RlKSB7XHJcbiAgICAgIG5vZGUubGV2ZWwgPSBwYXJlbnROb2RlLmxldmVsICsgMTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5vZGUubGV2ZWwgPSAwO1xyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKSB7XHJcbiAgICAgIHRoaXMucmVzZXROb2RlTGV2ZWwoY2hpbGQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2FsY0Ryb3BQb3NpdGlvbihldmVudDogRHJhZ0V2ZW50KTogbnVtYmVyIHtcclxuICAgIGNvbnN0IHsgY2xpZW50WSB9ID0gZXZlbnQ7XHJcbiAgICAvLyB0byBmaXggZmlyZWZveCB1bmRlZmluZWRcclxuICAgIGNvbnN0IHsgdG9wLCBib3R0b20sIGhlaWdodCB9ID0gZXZlbnQuc3JjRWxlbWVudFxyXG4gICAgICA/IChldmVudC5zcmNFbGVtZW50IGFzIEVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcbiAgICAgIDogKGV2ZW50LnRhcmdldCBhcyBFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IGRlcyA9IE1hdGgubWF4KGhlaWdodCAqIHRoaXMuRFJBR19TSURFX1JBTkdFLCB0aGlzLkRSQUdfTUlOX0dBUCk7XHJcblxyXG4gICAgaWYgKGNsaWVudFkgPD0gdG9wICsgZGVzKSB7XHJcbiAgICAgIHJldHVybiAtMTtcclxuICAgIH0gZWxzZSBpZiAoY2xpZW50WSA+PSBib3R0b20gLSBkZXMpIHtcclxuICAgICAgcmV0dXJuIDE7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBkcm9wXHJcbiAgICogMDogaW5uZXIgLTE6IHByZSAxOiBuZXh0XHJcbiAgICovXHJcbiAgZHJvcEFuZEFwcGx5KHRhcmdldE5vZGU6IE56VHJlZU5vZGUsIGRyYWdQb3M6IG51bWJlciA9IC0xKTogdm9pZCB7XHJcbiAgICBpZiAoIXRhcmdldE5vZGUgfHwgZHJhZ1BvcyA+IDEpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdHJlZVNlcnZpY2UgPSB0YXJnZXROb2RlLnRyZWVTZXJ2aWNlO1xyXG4gICAgY29uc3QgdGFyZ2V0UGFyZW50ID0gdGFyZ2V0Tm9kZS5nZXRQYXJlbnROb2RlKCk7XHJcbiAgICBjb25zdCBpc1NlbGVjdGVkUm9vdE5vZGUgPSB0aGlzLnNlbGVjdGVkTm9kZS5nZXRQYXJlbnROb2RlKCk7XHJcbiAgICAvLyByZW1vdmUgdGhlIGRyYWdOb2RlXHJcbiAgICBpZiAoaXNTZWxlY3RlZFJvb3ROb2RlKSB7XHJcbiAgICAgIGlzU2VsZWN0ZWRSb290Tm9kZS5jaGlsZHJlbiA9IGlzU2VsZWN0ZWRSb290Tm9kZS5jaGlsZHJlbi5maWx0ZXIobiA9PiBuLmtleSAhPT0gdGhpcy5zZWxlY3RlZE5vZGUua2V5KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucm9vdE5vZGVzID0gdGhpcy5yb290Tm9kZXMuZmlsdGVyKG4gPT4gbi5rZXkgIT09IHRoaXMuc2VsZWN0ZWROb2RlLmtleSk7XHJcbiAgICB9XHJcbiAgICBzd2l0Y2ggKGRyYWdQb3MpIHtcclxuICAgICAgY2FzZSAwOlxyXG4gICAgICAgIHRhcmdldE5vZGUuYWRkQ2hpbGRyZW4oW3RoaXMuc2VsZWN0ZWROb2RlXSk7XHJcbiAgICAgICAgdGhpcy5yZXNldE5vZGVMZXZlbCh0YXJnZXROb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAtMTpcclxuICAgICAgY2FzZSAxOlxyXG4gICAgICAgIGNvbnN0IHRJbmRleCA9IGRyYWdQb3MgPT09IDEgPyAxIDogMDtcclxuICAgICAgICBpZiAodGFyZ2V0UGFyZW50KSB7XHJcbiAgICAgICAgICB0YXJnZXRQYXJlbnQuYWRkQ2hpbGRyZW4oW3RoaXMuc2VsZWN0ZWROb2RlXSwgdGFyZ2V0UGFyZW50LmNoaWxkcmVuLmluZGV4T2YodGFyZ2V0Tm9kZSkgKyB0SW5kZXgpO1xyXG4gICAgICAgICAgY29uc3QgcGFyZW50Tm9kZSA9IHRoaXMuc2VsZWN0ZWROb2RlLmdldFBhcmVudE5vZGUoKTtcclxuICAgICAgICAgIGlmIChwYXJlbnROb2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXROb2RlTGV2ZWwocGFyZW50Tm9kZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gdGhpcy5yb290Tm9kZXMuaW5kZXhPZih0YXJnZXROb2RlKSArIHRJbmRleDtcclxuICAgICAgICAgIC8vIEluc2VydCByb290IG5vZGUuXHJcbiAgICAgICAgICB0aGlzLnJvb3ROb2Rlcy5zcGxpY2UodGFyZ2V0SW5kZXgsIDAsIHRoaXMuc2VsZWN0ZWROb2RlKTtcclxuICAgICAgICAgIHRoaXMucm9vdE5vZGVzW3RhcmdldEluZGV4XS5wYXJlbnROb2RlID0gbnVsbDtcclxuICAgICAgICAgIHRoaXMucm9vdE5vZGVzW3RhcmdldEluZGV4XS5sZXZlbCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgLy8gZmx1c2ggYWxsIG5vZGVzXHJcbiAgICB0aGlzLnJvb3ROb2Rlcy5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgaWYgKCFjaGlsZC50cmVlU2VydmljZSkge1xyXG4gICAgICAgIGNoaWxkLnNlcnZpY2UgPSB0cmVlU2VydmljZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnJlZnJlc2hEcmFnTm9kZShjaGlsZCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGVtaXQgU3RydWN0dXJlXHJcbiAgICogZXZlbnROYW1lXHJcbiAgICogbm9kZVxyXG4gICAqIGV2ZW50OiBNb3VzZUV2ZW50IC8gRHJhZ0V2ZW50XHJcbiAgICogZHJhZ05vZGVcclxuICAgKi9cclxuICBmb3JtYXRFdmVudChldmVudE5hbWU6IHN0cmluZywgbm9kZTogTnpUcmVlTm9kZSB8IG51bGwsIGV2ZW50OiBNb3VzZUV2ZW50IHwgRHJhZ0V2ZW50IHwgbnVsbCk6IE56Rm9ybWF0RW1pdEV2ZW50IHtcclxuICAgIGNvbnN0IGVtaXRTdHJ1Y3R1cmU6IE56Rm9ybWF0RW1pdEV2ZW50ID0ge1xyXG4gICAgICBldmVudE5hbWU6IGV2ZW50TmFtZSxcclxuICAgICAgbm9kZTogbm9kZSxcclxuICAgICAgZXZlbnQ6IGV2ZW50XHJcbiAgICB9O1xyXG4gICAgc3dpdGNoIChldmVudE5hbWUpIHtcclxuICAgICAgY2FzZSAnZHJhZ3N0YXJ0JzpcclxuICAgICAgY2FzZSAnZHJhZ2VudGVyJzpcclxuICAgICAgY2FzZSAnZHJhZ292ZXInOlxyXG4gICAgICBjYXNlICdkcmFnbGVhdmUnOlxyXG4gICAgICBjYXNlICdkcm9wJzpcclxuICAgICAgY2FzZSAnZHJhZ2VuZCc6XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbWl0U3RydWN0dXJlLCB7IGRyYWdOb2RlOiB0aGlzLmdldFNlbGVjdGVkTm9kZSgpIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdjbGljayc6XHJcbiAgICAgIGNhc2UgJ2RibGNsaWNrJzpcclxuICAgICAgICBPYmplY3QuYXNzaWduKGVtaXRTdHJ1Y3R1cmUsIHsgc2VsZWN0ZWRLZXlzOiB0aGlzLnNlbGVjdGVkTm9kZUxpc3QgfSk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbWl0U3RydWN0dXJlLCB7IG5vZGVzOiB0aGlzLnNlbGVjdGVkTm9kZUxpc3QgfSk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbWl0U3RydWN0dXJlLCB7IGtleXM6IHRoaXMuc2VsZWN0ZWROb2RlTGlzdC5tYXAobiA9PiBuLmtleSkgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2NoZWNrJzpcclxuICAgICAgICBjb25zdCBjaGVja2VkTm9kZUxpc3QgPSB0aGlzLmdldENoZWNrZWROb2RlTGlzdCgpO1xyXG5cclxuICAgICAgICBPYmplY3QuYXNzaWduKGVtaXRTdHJ1Y3R1cmUsIHsgY2hlY2tlZEtleXM6IGNoZWNrZWROb2RlTGlzdCB9KTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKGVtaXRTdHJ1Y3R1cmUsIHsgbm9kZXM6IGNoZWNrZWROb2RlTGlzdCB9KTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKGVtaXRTdHJ1Y3R1cmUsIHsga2V5czogY2hlY2tlZE5vZGVMaXN0Lm1hcChuID0+IG4ua2V5KSB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnc2VhcmNoJzpcclxuICAgICAgICBPYmplY3QuYXNzaWduKGVtaXRTdHJ1Y3R1cmUsIHsgbWF0Y2hlZEtleXM6IHRoaXMuZ2V0TWF0Y2hlZE5vZGVMaXN0KCkgfSk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbWl0U3RydWN0dXJlLCB7IG5vZGVzOiB0aGlzLmdldE1hdGNoZWROb2RlTGlzdCgpIH0pO1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oZW1pdFN0cnVjdHVyZSwgeyBrZXlzOiB0aGlzLmdldE1hdGNoZWROb2RlTGlzdCgpLm1hcChuID0+IG4ua2V5KSB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnZXhwYW5kJzpcclxuICAgICAgICBPYmplY3QuYXNzaWduKGVtaXRTdHJ1Y3R1cmUsIHsgbm9kZXM6IHRoaXMuZXhwYW5kZWROb2RlTGlzdCB9KTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKGVtaXRTdHJ1Y3R1cmUsIHsga2V5czogdGhpcy5leHBhbmRlZE5vZGVMaXN0Lm1hcChuID0+IG4ua2V5KSB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHJldHVybiBlbWl0U3RydWN0dXJlO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLnRyaWdnZXJFdmVudENoYW5nZSQuY29tcGxldGUoKTtcclxuICB9XHJcbn1cclxuIl19