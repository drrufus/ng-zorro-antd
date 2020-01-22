/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { warnDeprecation } from '../logger/logger';
/**
 * @record
 */
export function NzTreeNodeOptions() { }
if (false) {
    /** @type {?} */
    NzTreeNodeOptions.prototype.title;
    /** @type {?} */
    NzTreeNodeOptions.prototype.key;
    /** @type {?|undefined} */
    NzTreeNodeOptions.prototype.icon;
    /** @type {?|undefined} */
    NzTreeNodeOptions.prototype.isLeaf;
    /** @type {?|undefined} */
    NzTreeNodeOptions.prototype.checked;
    /** @type {?|undefined} */
    NzTreeNodeOptions.prototype.selected;
    /** @type {?|undefined} */
    NzTreeNodeOptions.prototype.selectable;
    /** @type {?|undefined} */
    NzTreeNodeOptions.prototype.disabled;
    /** @type {?|undefined} */
    NzTreeNodeOptions.prototype.disableCheckbox;
    /** @type {?|undefined} */
    NzTreeNodeOptions.prototype.expanded;
    /** @type {?|undefined} */
    NzTreeNodeOptions.prototype.children;
    /* Skipping unhandled member: [key: string]: any;*/
}
var NzTreeNode = /** @class */ (function () {
    function NzTreeNode(option, parent, service) {
        var _this = this;
        if (parent === void 0) { parent = null; }
        if (service === void 0) { service = null; }
        this.level = 0;
        if (option instanceof NzTreeNode) {
            return option;
        }
        this.service = service || null;
        this.origin = option;
        this.key = option.key;
        this.parentNode = parent;
        this._title = option.title || '---';
        this._icon = option.icon || '';
        this._isLeaf = option.isLeaf || false;
        this._children = [];
        // option params
        this._isChecked = option.checked || false;
        this._isSelectable = option.disabled || option.selectable !== false;
        this._isDisabled = option.disabled || false;
        this._isDisableCheckbox = option.disableCheckbox || false;
        this._isExpanded = option.isLeaf ? false : option.expanded || false;
        this._isHalfChecked = false;
        this._isSelected = (!option.disabled && option.selected) || false;
        this._isLoading = false;
        this.isMatched = false;
        /**
         * parent's checked status will affect children while initializing
         */
        if (parent) {
            this.level = parent.level + 1;
        }
        else {
            this.level = 0;
        }
        if (typeof option.children !== 'undefined' && option.children !== null) {
            option.children.forEach((/**
             * @param {?} nodeOptions
             * @return {?}
             */
            function (nodeOptions) {
                /** @type {?} */
                var s = _this.treeService;
                if (s &&
                    !s.isCheckStrictly &&
                    option.checked &&
                    !option.disabled &&
                    !nodeOptions.disabled &&
                    !nodeOptions.disableCheckbox) {
                    nodeOptions.checked = option.checked;
                }
                _this._children.push(new NzTreeNode(nodeOptions, _this));
            }));
        }
    }
    Object.defineProperty(NzTreeNode.prototype, "treeService", {
        get: /**
         * @return {?}
         */
        function () {
            return this.service || (this.parentNode && this.parentNode.treeService);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNode.prototype, "title", {
        /**
         * auto generate
         * get
         * set
         */
        get: /**
         * auto generate
         * get
         * set
         * @return {?}
         */
        function () {
            return this._title;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._title = value;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNode.prototype, "icon", {
        get: /**
         * @return {?}
         */
        function () {
            return this._icon;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._icon = value;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNode.prototype, "children", {
        get: /**
         * @return {?}
         */
        function () {
            return this._children;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._children = value;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNode.prototype, "isLeaf", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isLeaf;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isLeaf = value;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNode.prototype, "isChecked", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isChecked;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isChecked = value;
            this._isAllChecked = value;
            this.origin.checked = value;
            this.afterValueChange('isChecked');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNode.prototype, "isAllChecked", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isAllChecked;
        },
        /**
         * @deprecated Maybe removed in next major version, use `isChecked` instead.
         */
        set: /**
         * @deprecated Maybe removed in next major version, use `isChecked` instead.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            warnDeprecation("'isAllChecked' is going to be removed in 9.0.0. Please use 'isChecked' instead.");
            this._isAllChecked = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNode.prototype, "isHalfChecked", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isHalfChecked;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isHalfChecked = value;
            this.afterValueChange('isHalfChecked');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNode.prototype, "isSelectable", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isSelectable;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isSelectable = value;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNode.prototype, "isDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isDisabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isDisabled = value;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNode.prototype, "isDisableCheckbox", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isDisableCheckbox;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isDisableCheckbox = value;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNode.prototype, "isExpanded", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isExpanded;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isExpanded = value;
            this.origin.expanded = value;
            this.afterValueChange('isExpanded');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNode.prototype, "isSelected", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isSelected;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isSelected = value;
            this.origin.selected = value;
            this.afterValueChange('isSelected');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNode.prototype, "isLoading", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isLoading;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isLoading = value;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} checked
     * @param {?=} halfChecked
     * @return {?}
     */
    NzTreeNode.prototype.setSyncChecked = /**
     * @param {?=} checked
     * @param {?=} halfChecked
     * @return {?}
     */
    function (checked, halfChecked) {
        if (checked === void 0) { checked = false; }
        if (halfChecked === void 0) { halfChecked = false; }
        this.setChecked(checked, halfChecked);
        if (this.treeService && !this.treeService.isCheckStrictly) {
            this.treeService.conduct(this);
        }
    };
    /**
     * @deprecated Maybe removed in next major version, use `isChecked` instead.
     */
    /**
     * @deprecated Maybe removed in next major version, use `isChecked` instead.
     * @param {?=} checked
     * @param {?=} halfChecked
     * @return {?}
     */
    NzTreeNode.prototype.setChecked = /**
     * @deprecated Maybe removed in next major version, use `isChecked` instead.
     * @param {?=} checked
     * @param {?=} halfChecked
     * @return {?}
     */
    function (checked, halfChecked) {
        if (checked === void 0) { checked = false; }
        if (halfChecked === void 0) { halfChecked = false; }
        warnDeprecation("'setChecked' is going to be removed in 9.0.0. Please use 'isChecked' instead.");
        this.origin.checked = checked;
        this.isChecked = checked;
        this.isAllChecked = checked;
        this.isHalfChecked = halfChecked;
    };
    /**
     * @deprecated Maybe removed in next major version, use `isExpanded` instead.
     */
    /**
     * @deprecated Maybe removed in next major version, use `isExpanded` instead.
     * @param {?} value
     * @return {?}
     */
    NzTreeNode.prototype.setExpanded = /**
     * @deprecated Maybe removed in next major version, use `isExpanded` instead.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        warnDeprecation("'setExpanded' is going to be removed in 9.0.0. Please use 'isExpanded' instead.");
        this.isExpanded = value;
    };
    /**
     * @deprecated Maybe removed in next major version, use `isSelected` instead.
     */
    /**
     * @deprecated Maybe removed in next major version, use `isSelected` instead.
     * @param {?} value
     * @return {?}
     */
    NzTreeNode.prototype.setSelected = /**
     * @deprecated Maybe removed in next major version, use `isSelected` instead.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        warnDeprecation("'setSelected' is going to be removed in 9.0.0. Please use 'isExpanded' isSelected.");
        if (this.isDisabled) {
            return;
        }
        this.isSelected = value;
    };
    /**
     * @return {?}
     */
    NzTreeNode.prototype.getParentNode = /**
     * @return {?}
     */
    function () {
        return this.parentNode;
    };
    /**
     * @return {?}
     */
    NzTreeNode.prototype.getChildren = /**
     * @return {?}
     */
    function () {
        return this.children;
    };
    /**
     * Support appending child nodes by position. Leaf node cannot be appended.
     */
    // tslint:disable-next-line:no-any
    /**
     * Support appending child nodes by position. Leaf node cannot be appended.
     * @param {?} children
     * @param {?=} childPos
     * @return {?}
     */
    // tslint:disable-next-line:no-any
    NzTreeNode.prototype.addChildren = /**
     * Support appending child nodes by position. Leaf node cannot be appended.
     * @param {?} children
     * @param {?=} childPos
     * @return {?}
     */
    // tslint:disable-next-line:no-any
    function (children, childPos) {
        var _this = this;
        if (childPos === void 0) { childPos = -1; }
        if (!this.isLeaf) {
            children.forEach((/**
             * @param {?} node
             * @return {?}
             */
            function (node) {
                /** @type {?} */
                var refreshLevel = (/**
                 * @param {?} n
                 * @return {?}
                 */
                function (n) {
                    n.getChildren().forEach((/**
                     * @param {?} c
                     * @return {?}
                     */
                    function (c) {
                        c.level = (/** @type {?} */ (c.getParentNode())).level + 1;
                        // flush origin
                        c.origin.level = c.level;
                        refreshLevel(c);
                    }));
                });
                /** @type {?} */
                var child = node;
                if (child instanceof NzTreeNode) {
                    child.parentNode = _this;
                }
                else {
                    child = new NzTreeNode(node, _this);
                }
                child.level = _this.level + 1;
                child.origin.level = child.level;
                refreshLevel(child);
                try {
                    childPos === -1 ? _this.children.push(child) : _this.children.splice(childPos, 0, child);
                    // flush origin
                }
                catch (e) { }
            }));
            this.origin.children = this.getChildren().map((/**
             * @param {?} v
             * @return {?}
             */
            function (v) { return v.origin; }));
            // remove loading state
            this.isLoading = false;
        }
    };
    /**
     * @return {?}
     */
    NzTreeNode.prototype.clearChildren = /**
     * @return {?}
     */
    function () {
        // refresh checked state
        this.afterValueChange('clearChildren');
        this.children = [];
        this.origin.children = [];
    };
    /**
     * @return {?}
     */
    NzTreeNode.prototype.remove = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var parentNode = this.getParentNode();
        if (parentNode) {
            parentNode.children = parentNode.getChildren().filter((/**
             * @param {?} v
             * @return {?}
             */
            function (v) { return v.key !== _this.key; }));
            parentNode.origin.children = (/** @type {?} */ (parentNode.origin.children)).filter((/**
             * @param {?} v
             * @return {?}
             */
            function (v) { return v.key !== _this.key; }));
            this.afterValueChange('remove');
        }
    };
    /**
     * @param {?} key
     * @return {?}
     */
    NzTreeNode.prototype.afterValueChange = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        if (this.treeService) {
            switch (key) {
                case 'isChecked':
                    this.treeService.setCheckedNodeList(this);
                    break;
                case 'isHalfChecked':
                    this.treeService.setHalfCheckedNodeList(this);
                    break;
                case 'isExpanded':
                    this.treeService.setExpandedNodeList(this);
                    break;
                case 'isSelected':
                    this.treeService.setNodeActive(this);
                    break;
                case 'clearChildren':
                    this.treeService.afterRemove(this.getChildren());
                    break;
                case 'remove':
                    this.treeService.afterRemove([this]);
                    break;
            }
        }
        this.update();
    };
    /**
     * @return {?}
     */
    NzTreeNode.prototype.update = /**
     * @return {?}
     */
    function () {
        if (this.component) {
            this.component.setClassMap();
            this.component.markForCheck();
        }
    };
    return NzTreeNode;
}());
export { NzTreeNode };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzTreeNode.prototype._title;
    /** @type {?} */
    NzTreeNode.prototype.key;
    /** @type {?} */
    NzTreeNode.prototype.level;
    /** @type {?} */
    NzTreeNode.prototype.origin;
    /** @type {?} */
    NzTreeNode.prototype.parentNode;
    /**
     * @type {?}
     * @private
     */
    NzTreeNode.prototype._icon;
    /**
     * @type {?}
     * @private
     */
    NzTreeNode.prototype._children;
    /**
     * @type {?}
     * @private
     */
    NzTreeNode.prototype._isLeaf;
    /**
     * @type {?}
     * @private
     */
    NzTreeNode.prototype._isChecked;
    /**
     * @deprecated Maybe removed in next major version, use isChecked instead
     * @type {?}
     * @private
     */
    NzTreeNode.prototype._isAllChecked;
    /**
     * @type {?}
     * @private
     */
    NzTreeNode.prototype._isSelectable;
    /**
     * @type {?}
     * @private
     */
    NzTreeNode.prototype._isDisabled;
    /**
     * @type {?}
     * @private
     */
    NzTreeNode.prototype._isDisableCheckbox;
    /**
     * @type {?}
     * @private
     */
    NzTreeNode.prototype._isExpanded;
    /**
     * @type {?}
     * @private
     */
    NzTreeNode.prototype._isHalfChecked;
    /**
     * @type {?}
     * @private
     */
    NzTreeNode.prototype._isSelected;
    /**
     * @type {?}
     * @private
     */
    NzTreeNode.prototype._isLoading;
    /** @type {?} */
    NzTreeNode.prototype.canHide;
    /** @type {?} */
    NzTreeNode.prototype.isMatched;
    /** @type {?} */
    NzTreeNode.prototype.service;
    /** @type {?} */
    NzTreeNode.prototype.component;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS1iYXNlLW5vZGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJ0cmVlL256LXRyZWUtYmFzZS1ub2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7O0FBSW5ELHVDQWVDOzs7SUFkQyxrQ0FBYzs7SUFDZCxnQ0FBWTs7SUFDWixpQ0FBYzs7SUFDZCxtQ0FBaUI7O0lBQ2pCLG9DQUFrQjs7SUFDbEIscUNBQW1COztJQUNuQix1Q0FBcUI7O0lBQ3JCLHFDQUFtQjs7SUFDbkIsNENBQTBCOztJQUMxQixxQ0FBbUI7O0lBQ25CLHFDQUErQjs7O0FBTWpDO0lBZ0NFLG9CQUNFLE1BQXNDLEVBQ3RDLE1BQWdDLEVBQ2hDLE9BQXdDO1FBSDFDLGlCQW1EQztRQWpEQyx1QkFBQSxFQUFBLGFBQWdDO1FBQ2hDLHdCQUFBLEVBQUEsY0FBd0M7UUFoQzFDLFVBQUssR0FBVyxDQUFDLENBQUM7UUFrQ2hCLElBQUksTUFBTSxZQUFZLFVBQVUsRUFBRTtZQUNoQyxPQUFPLE1BQU0sQ0FBQztTQUNmO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLElBQUksSUFBSSxDQUFDO1FBQy9CLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQztRQUN0QyxJQUFJLENB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QUFNO2dCQUNSLEtBQUssUUFBUTtvQkFDWCxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQ3JDLE1BQU07YUFDVDtTQUNGO1FBQ0QsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFFTSwyQkFBTTs7O0lBQWI7UUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQy9CO0lBQ0gsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQyxBQXRWRCxJQXNWQzs7Ozs7OztJQXJWQyw0QkFBdUI7O0lBQ3ZCLHlCQUFZOztJQUNaLDJCQUFrQjs7SUFDbEIsNEJBQTBCOztJQUUxQixnQ0FBOEI7Ozs7O0lBQzlCLDJCQUFzQjs7Ozs7SUFDdEIsK0JBQWdDOzs7OztJQUNoQyw2QkFBeUI7Ozs7O0lBQ3pCLGdDQUE0Qjs7Ozs7O0lBSTVCLG1DQUErQjs7Ozs7SUFDL0IsbUNBQStCOzs7OztJQUMvQixpQ0FBNkI7Ozs7O0lBQzdCLHdDQUFvQzs7Ozs7SUFDcEMsaUNBQTZCOzs7OztJQUM3QixvQ0FBZ0M7Ozs7O0lBQ2hDLGlDQUE2Qjs7Ozs7SUFDN0IsZ0NBQTRCOztJQUM1Qiw2QkFBaUI7O0lBQ2pCLCtCQUFtQjs7SUFFbkIsNkJBQWtDOztJQUNsQywrQkFBbUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IHdhcm5EZXByZWNhdGlvbiB9IGZyb20gJy4uL2xvZ2dlci9sb2dnZXInO1xyXG5pbXBvcnQgeyBOelRyZWVOb2RlQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vbnotdHJlZS1iYXNlLmRlZmluaXRpb25zJztcclxuaW1wb3J0IHsgTnpUcmVlQmFzZVNlcnZpY2UgfSBmcm9tICcuL256LXRyZWUtYmFzZS5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTnpUcmVlTm9kZU9wdGlvbnMge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAga2V5OiBzdHJpbmc7XHJcbiAgaWNvbj86IHN0cmluZztcclxuICBpc0xlYWY/OiBib29sZWFuO1xyXG4gIGNoZWNrZWQ/OiBib29sZWFuO1xyXG4gIHNlbGVjdGVkPzogYm9vbGVhbjtcclxuICBzZWxlY3RhYmxlPzogYm9vbGVhbjtcclxuICBkaXNhYmxlZD86IGJvb2xlYW47XHJcbiAgZGlzYWJsZUNoZWNrYm94PzogYm9vbGVhbjtcclxuICBleHBhbmRlZD86IGJvb2xlYW47XHJcbiAgY2hpbGRyZW4/OiBOelRyZWVOb2RlT3B0aW9uc1tdO1xyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgW2tleTogc3RyaW5nXTogYW55O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTnpUcmVlTm9kZSB7XHJcbiAgcHJpdmF0ZSBfdGl0bGU6IHN0cmluZztcclxuICBrZXk6IHN0cmluZztcclxuICBsZXZlbDogbnVtYmVyID0gMDtcclxuICBvcmlnaW46IE56VHJlZU5vZGVPcHRpb25zO1xyXG4gIC8vIFBhcmVudCBOb2RlXHJcbiAgcGFyZW50Tm9kZTogTnpUcmVlTm9kZSB8IG51bGw7XHJcbiAgcHJpdmF0ZSBfaWNvbjogc3RyaW5nO1xyXG4gIHByaXZhdGUgX2NoaWxkcmVuOiBOelRyZWVOb2RlW107XHJcbiAgcHJpdmF0ZSBfaXNMZWFmOiBib29sZWFuO1xyXG4gIHByaXZhdGUgX2lzQ2hlY2tlZDogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCBNYXliZSByZW1vdmVkIGluIG5leHQgbWFqb3IgdmVyc2lvbiwgdXNlIGlzQ2hlY2tlZCBpbnN0ZWFkXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfaXNBbGxDaGVja2VkOiBib29sZWFuO1xyXG4gIHByaXZhdGUgX2lzU2VsZWN0YWJsZTogYm9vbGVhbjtcclxuICBwcml2YXRlIF9pc0Rpc2FibGVkOiBib29sZWFuO1xyXG4gIHByaXZhdGUgX2lzRGlzYWJsZUNoZWNrYm94OiBib29sZWFuO1xyXG4gIHByaXZhdGUgX2lzRXhwYW5kZWQ6IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSBfaXNIYWxmQ2hlY2tlZDogYm9vbGVhbjtcclxuICBwcml2YXRlIF9pc1NlbGVjdGVkOiBib29sZWFuO1xyXG4gIHByaXZhdGUgX2lzTG9hZGluZzogYm9vbGVhbjtcclxuICBjYW5IaWRlOiBib29sZWFuO1xyXG4gIGlzTWF0Y2hlZDogYm9vbGVhbjtcclxuXHJcbiAgc2VydmljZTogTnpUcmVlQmFzZVNlcnZpY2UgfCBudWxsO1xyXG4gIGNvbXBvbmVudDogTnpUcmVlTm9kZUJhc2VDb21wb25lbnQ7XHJcblxyXG4gIGdldCB0cmVlU2VydmljZSgpOiBOelRyZWVCYXNlU2VydmljZSB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VydmljZSB8fCAodGhpcy5wYXJlbnROb2RlICYmIHRoaXMucGFyZW50Tm9kZS50cmVlU2VydmljZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIG9wdGlvbjogTnpUcmVlTm9kZU9wdGlvbnMgfCBOelRyZWVOb2RlLFxyXG4gICAgcGFyZW50OiBOelRyZWVOb2RlIHwgbnVsbCA9IG51bGwsXHJcbiAgICBzZXJ2aWNlOiBOelRyZWVCYXNlU2VydmljZSB8IG51bGwgPSBudWxsXHJcbiAgKSB7XHJcbiAgICBpZiAob3B0aW9uIGluc3RhbmNlb2YgTnpUcmVlTm9kZSkge1xyXG4gICAgICByZXR1cm4gb3B0aW9uO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXJ2aWNlID0gc2VydmljZSB8fCBudWxsO1xyXG4gICAgdGhpcy5vcmlnaW4gPSBvcHRpb247XHJcbiAgICB0aGlzLmtleSA9IG9wdGlvbi5rZXk7XHJcbiAgICB0aGlzLnBhcmVudE5vZGUgPSBwYXJlbnQ7XHJcbiAgICB0aGlzLl90aXRsZSA9IG9wdGlvbi50aXRsZSB8fCAnLS0tJztcclxuICAgIHRoaXMuX2ljb24gPSBvcHRpb24uaWNvbiB8fCAnJztcclxuICAgIHRoaXMuX2lzTGVhZiA9IG9wdGlvbi5pc0xlYWYgfHwgZmFsc2U7XHJcbiAgICB0aGlzLl9jaGlsZHJlbiA9IFtdO1xyXG4gICAgLy8gb3B0aW9uIHBhcmFtc1xyXG4gICAgdGhpcy5faXNDaGVja2VkID0gb3B0aW9uLmNoZWNrZWQgfHwgZmFsc2U7XHJcbiAgICB0aGlzLl9pc1NlbGVjdGFibGUgPSBvcHRpb24uZGlzYWJsZWQgfHwgb3B0aW9uLnNlbGVjdGFibGUgIT09IGZhbHNlO1xyXG4gICAgdGhpcy5faXNEaXNhYmxlZCA9IG9wdGlvbi5kaXNhYmxlZCB8fCBmYWxzZTtcclxuICAgIHRoaXMuX2lzRGlzYWJsZUNoZWNrYm94ID0gb3B0aW9uLmRpc2FibGVDaGVja2JveCB8fCBmYWxzZTtcclxuICAgIHRoaXMuX2lzRXhwYW5kZWQgPSBvcHRpb24uaXNMZWFmID8gZmFsc2UgOiBvcHRpb24uZXhwYW5kZWQgfHwgZmFsc2U7XHJcbiAgICB0aGlzLl9pc0hhbGZDaGVja2VkID0gZmFsc2U7XHJcbiAgICB0aGlzLl9pc1NlbGVjdGVkID0gKCFvcHRpb24uZGlzYWJsZWQgJiYgb3B0aW9uLnNlbGVjdGVkKSB8fCBmYWxzZTtcclxuICAgIHRoaXMuX2lzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc01hdGNoZWQgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIHBhcmVudCdzIGNoZWNrZWQgc3RhdHVzIHdpbGwgYWZmZWN0IGNoaWxkcmVuIHdoaWxlIGluaXRpYWxpemluZ1xyXG4gICAgICovXHJcbiAgICBpZiAocGFyZW50KSB7XHJcbiAgICAgIHRoaXMubGV2ZWwgPSBwYXJlbnQubGV2ZWwgKyAxO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5sZXZlbCA9IDA7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIG9wdGlvbi5jaGlsZHJlbiAhPT0gJ3VuZGVmaW5lZCcgJiYgb3B0aW9uLmNoaWxkcmVuICE9PSBudWxsKSB7XHJcbiAgICAgIG9wdGlvbi5jaGlsZHJlbi5mb3JFYWNoKG5vZGVPcHRpb25zID0+IHtcclxuICAgICAgICBjb25zdCBzID0gdGhpcy50cmVlU2VydmljZTtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBzICYmXHJcbiAgICAgICAgICAhcy5pc0NoZWNrU3RyaWN0bHkgJiZcclxuICAgICAgICAgIG9wdGlvbi5jaGVja2VkICYmXHJcbiAgICAgICAgICAhb3B0aW9uLmRpc2FibGVkICYmXHJcbiAgICAgICAgICAhbm9kZU9wdGlvbnMuZGlzYWJsZWQgJiZcclxuICAgICAgICAgICFub2RlT3B0aW9ucy5kaXNhYmxlQ2hlY2tib3hcclxuICAgICAgICApIHtcclxuICAgICAgICAgIG5vZGVPcHRpb25zLmNoZWNrZWQgPSBvcHRpb24uY2hlY2tlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fY2hpbGRyZW4ucHVzaChuZXcgTnpUcmVlTm9kZShub2RlT3B0aW9ucywgdGhpcykpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGF1dG8gZ2VuZXJhdGVcclxuICAgKiBnZXRcclxuICAgKiBzZXRcclxuICAgKi9cclxuICBnZXQgdGl0bGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl90aXRsZTtcclxuICB9XHJcblxyXG4gIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9XHJcblxyXG4gIGdldCBpY29uKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5faWNvbjtcclxuICB9XHJcblxyXG4gIHNldCBpY29uKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2ljb24gPSB2YWx1ZTtcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgY2hpbGRyZW4oKTogTnpUcmVlTm9kZVtdIHtcclxuICAgIHJldHVybiB0aGlzLl9jaGlsZHJlbjtcclxuICB9XHJcblxyXG4gIHNldCBjaGlsZHJlbih2YWx1ZTogTnpUcmVlTm9kZVtdKSB7XHJcbiAgICB0aGlzLl9jaGlsZHJlbiA9IHZhbHVlO1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9XHJcblxyXG4gIGdldCBpc0xlYWYoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5faXNMZWFmO1xyXG4gIH1cclxuXHJcbiAgc2V0IGlzTGVhZih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5faXNMZWFmID0gdmFsdWU7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzQ2hlY2tlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pc0NoZWNrZWQ7XHJcbiAgfVxyXG5cclxuICBzZXQgaXNDaGVja2VkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9pc0NoZWNrZWQgPSB2YWx1ZTtcclxuICAgIHRoaXMuX2lzQWxsQ2hlY2tlZCA9IHZhbHVlO1xyXG4gICAgdGhpcy5vcmlnaW4uY2hlY2tlZCA9IHZhbHVlO1xyXG4gICAgdGhpcy5hZnRlclZhbHVlQ2hhbmdlKCdpc0NoZWNrZWQnKTtcclxuICB9XHJcblxyXG4gIGdldCBpc0FsbENoZWNrZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5faXNBbGxDaGVja2VkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgTWF5YmUgcmVtb3ZlZCBpbiBuZXh0IG1ham9yIHZlcnNpb24sIHVzZSBgaXNDaGVja2VkYCBpbnN0ZWFkLlxyXG4gICAqL1xyXG4gIHNldCBpc0FsbENoZWNrZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHdhcm5EZXByZWNhdGlvbihgJ2lzQWxsQ2hlY2tlZCcgaXMgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiA5LjAuMC4gUGxlYXNlIHVzZSAnaXNDaGVja2VkJyBpbnN0ZWFkLmApO1xyXG4gICAgdGhpcy5faXNBbGxDaGVja2VkID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNIYWxmQ2hlY2tlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pc0hhbGZDaGVja2VkO1xyXG4gIH1cclxuXHJcbiAgc2V0IGlzSGFsZkNoZWNrZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2lzSGFsZkNoZWNrZWQgPSB2YWx1ZTtcclxuICAgIHRoaXMuYWZ0ZXJWYWx1ZUNoYW5nZSgnaXNIYWxmQ2hlY2tlZCcpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzU2VsZWN0YWJsZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pc1NlbGVjdGFibGU7XHJcbiAgfVxyXG5cclxuICBzZXQgaXNTZWxlY3RhYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9pc1NlbGVjdGFibGUgPSB2YWx1ZTtcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNEaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pc0Rpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgc2V0IGlzRGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2lzRGlzYWJsZWQgPSB2YWx1ZTtcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNEaXNhYmxlQ2hlY2tib3goKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5faXNEaXNhYmxlQ2hlY2tib3g7XHJcbiAgfVxyXG5cclxuICBzZXQgaXNEaXNhYmxlQ2hlY2tib3godmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2lzRGlzYWJsZUNoZWNrYm94ID0gdmFsdWU7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzRXhwYW5kZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5faXNFeHBhbmRlZDtcclxuICB9XHJcblxyXG4gIHNldCBpc0V4cGFuZGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9pc0V4cGFuZGVkID0gdmFsdWU7XHJcbiAgICB0aGlzLm9yaWdpbi5leHBhbmRlZCA9IHZhbHVlO1xyXG4gICAgdGhpcy5hZnRlclZhbHVlQ2hhbmdlKCdpc0V4cGFuZGVkJyk7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNTZWxlY3RlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pc1NlbGVjdGVkO1xyXG4gIH1cclxuXHJcbiAgc2V0IGlzU2VsZWN0ZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2lzU2VsZWN0ZWQgPSB2YWx1ZTtcclxuICAgIHRoaXMub3JpZ2luLnNlbGVjdGVkID0gdmFsdWU7XHJcbiAgICB0aGlzLmFmdGVyVmFsdWVDaGFuZ2UoJ2lzU2VsZWN0ZWQnKTtcclxuICB9XHJcblxyXG4gIGdldCBpc0xvYWRpbmcoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5faXNMb2FkaW5nO1xyXG4gIH1cclxuXHJcbiAgc2V0IGlzTG9hZGluZyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5faXNMb2FkaW5nID0gdmFsdWU7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldFN5bmNDaGVja2VkKGNoZWNrZWQ6IGJvb2xlYW4gPSBmYWxzZSwgaGFsZkNoZWNrZWQ6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDaGVja2VkKGNoZWNrZWQsIGhhbGZDaGVja2VkKTtcclxuICAgIGlmICh0aGlzLnRyZWVTZXJ2aWNlICYmICF0aGlzLnRyZWVTZXJ2aWNlLmlzQ2hlY2tTdHJpY3RseSkge1xyXG4gICAgICB0aGlzLnRyZWVTZXJ2aWNlLmNvbmR1Y3QodGhpcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCBNYXliZSByZW1vdmVkIGluIG5leHQgbWFqb3IgdmVyc2lvbiwgdXNlIGBpc0NoZWNrZWRgIGluc3RlYWQuXHJcbiAgICovXHJcbiAgcHVibGljIHNldENoZWNrZWQoY2hlY2tlZDogYm9vbGVhbiA9IGZhbHNlLCBoYWxmQ2hlY2tlZDogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICB3YXJuRGVwcmVjYXRpb24oYCdzZXRDaGVja2VkJyBpcyBnb2luZyB0byBiZSByZW1vdmVkIGluIDkuMC4wLiBQbGVhc2UgdXNlICdpc0NoZWNrZWQnIGluc3RlYWQuYCk7XHJcbiAgICB0aGlzLm9yaWdpbi5jaGVja2VkID0gY2hlY2tlZDtcclxuICAgIHRoaXMuaXNDaGVja2VkID0gY2hlY2tlZDtcclxuICAgIHRoaXMuaXNBbGxDaGVja2VkID0gY2hlY2tlZDtcclxuICAgIHRoaXMuaXNIYWxmQ2hlY2tlZCA9IGhhbGZDaGVja2VkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgTWF5YmUgcmVtb3ZlZCBpbiBuZXh0IG1ham9yIHZlcnNpb24sIHVzZSBgaXNFeHBhbmRlZGAgaW5zdGVhZC5cclxuICAgKi9cclxuICBwdWJsaWMgc2V0RXhwYW5kZWQodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHdhcm5EZXByZWNhdGlvbihgJ3NldEV4cGFuZGVkJyBpcyBnb2luZyB0byBiZSByZW1vdmVkIGluIDkuMC4wLiBQbGVhc2UgdXNlICdpc0V4cGFuZGVkJyBpbnN0ZWFkLmApO1xyXG4gICAgdGhpcy5pc0V4cGFuZGVkID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCBNYXliZSByZW1vdmVkIGluIG5leHQgbWFqb3IgdmVyc2lvbiwgdXNlIGBpc1NlbGVjdGVkYCBpbnN0ZWFkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzZXRTZWxlY3RlZCh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgd2FybkRlcHJlY2F0aW9uKGAnc2V0U2VsZWN0ZWQnIGlzIGdvaW5nIHRvIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFBsZWFzZSB1c2UgJ2lzRXhwYW5kZWQnIGlzU2VsZWN0ZWQuYCk7XHJcbiAgICBpZiAodGhpcy5pc0Rpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuaXNTZWxlY3RlZCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFBhcmVudE5vZGUoKTogTnpUcmVlTm9kZSB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMucGFyZW50Tm9kZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRDaGlsZHJlbigpOiBOelRyZWVOb2RlW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdXBwb3J0IGFwcGVuZGluZyBjaGlsZCBub2RlcyBieSBwb3NpdGlvbi4gTGVhZiBub2RlIGNhbm5vdCBiZSBhcHBlbmRlZC5cclxuICAgKi9cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgcHVibGljIGFkZENoaWxkcmVuKGNoaWxkcmVuOiBhbnlbXSwgY2hpbGRQb3M6IG51bWJlciA9IC0xKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuaXNMZWFmKSB7XHJcbiAgICAgIGNoaWxkcmVuLmZvckVhY2gobm9kZSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVmcmVzaExldmVsID0gKG46IE56VHJlZU5vZGUpID0+IHtcclxuICAgICAgICAgIG4uZ2V0Q2hpbGRyZW4oKS5mb3JFYWNoKGMgPT4ge1xyXG4gICAgICAgICAgICBjLmxldmVsID0gYy5nZXRQYXJlbnROb2RlKCkhLmxldmVsICsgMTtcclxuICAgICAgICAgICAgLy8gZmx1c2ggb3JpZ2luXHJcbiAgICAgICAgICAgIGMub3JpZ2luLmxldmVsID0gYy5sZXZlbDtcclxuICAgICAgICAgICAgcmVmcmVzaExldmVsKGMpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBsZXQgY2hpbGQgPSBub2RlO1xyXG4gICAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIE56VHJlZU5vZGUpIHtcclxuICAgICAgICAgIGNoaWxkLnBhcmVudE5vZGUgPSB0aGlzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjaGlsZCA9IG5ldyBOelRyZWVOb2RlKG5vZGUsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjaGlsZC5sZXZlbCA9IHRoaXMubGV2ZWwgKyAxO1xyXG4gICAgICAgIGNoaWxkLm9yaWdpbi5sZXZlbCA9IGNoaWxkLmxldmVsO1xyXG4gICAgICAgIHJlZnJlc2hMZXZlbChjaGlsZCk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNoaWxkUG9zID09PSAtMSA/IHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZCkgOiB0aGlzLmNoaWxkcmVuLnNwbGljZShjaGlsZFBvcywgMCwgY2hpbGQpO1xyXG4gICAgICAgICAgLy8gZmx1c2ggb3JpZ2luXHJcbiAgICAgICAgfSBjYXRjaCAoZSkge31cclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMub3JpZ2luLmNoaWxkcmVuID0gdGhpcy5nZXRDaGlsZHJlbigpLm1hcCh2ID0+IHYub3JpZ2luKTtcclxuICAgICAgLy8gcmVtb3ZlIGxvYWRpbmcgc3RhdGVcclxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbGVhckNoaWxkcmVuKCk6IHZvaWQge1xyXG4gICAgLy8gcmVmcmVzaCBjaGVja2VkIHN0YXRlXHJcbiAgICB0aGlzLmFmdGVyVmFsdWVDaGFuZ2UoJ2NsZWFyQ2hpbGRyZW4nKTtcclxuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcclxuICAgIHRoaXMub3JpZ2luLmNoaWxkcmVuID0gW107XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlKCk6IHZvaWQge1xyXG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IHRoaXMuZ2V0UGFyZW50Tm9kZSgpO1xyXG4gICAgaWYgKHBhcmVudE5vZGUpIHtcclxuICAgICAgcGFyZW50Tm9kZS5jaGlsZHJlbiA9IHBhcmVudE5vZGUuZ2V0Q2hpbGRyZW4oKS5maWx0ZXIodiA9PiB2LmtleSAhPT0gdGhpcy5rZXkpO1xyXG4gICAgICBwYXJlbnROb2RlLm9yaWdpbi5jaGlsZHJlbiA9IHBhcmVudE5vZGUub3JpZ2luLmNoaWxkcmVuIS5maWx0ZXIodiA9PiB2LmtleSAhPT0gdGhpcy5rZXkpO1xyXG4gICAgICB0aGlzLmFmdGVyVmFsdWVDaGFuZ2UoJ3JlbW92ZScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGFmdGVyVmFsdWVDaGFuZ2Uoa2V5OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnRyZWVTZXJ2aWNlKSB7XHJcbiAgICAgIHN3aXRjaCAoa2V5KSB7XHJcbiAgICAgICAgY2FzZSAnaXNDaGVja2VkJzpcclxuICAgICAgICAgIHRoaXMudHJlZVNlcnZpY2Uuc2V0Q2hlY2tlZE5vZGVMaXN0KHRoaXMpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnaXNIYWxmQ2hlY2tlZCc6XHJcbiAgICAgICAgICB0aGlzLnRyZWVTZXJ2aWNlLnNldEhhbGZDaGVja2VkTm9kZUxpc3QodGhpcyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdpc0V4cGFuZGVkJzpcclxuICAgICAgICAgIHRoaXMudHJlZVNlcnZpY2Uuc2V0RXhwYW5kZWROb2RlTGlzdCh0aGlzKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2lzU2VsZWN0ZWQnOlxyXG4gICAgICAgICAgdGhpcy50cmVlU2VydmljZS5zZXROb2RlQWN0aXZlKHRoaXMpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnY2xlYXJDaGlsZHJlbic6XHJcbiAgICAgICAgICB0aGlzLnRyZWVTZXJ2aWNlLmFmdGVyUmVtb3ZlKHRoaXMuZ2V0Q2hpbGRyZW4oKSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdyZW1vdmUnOlxyXG4gICAgICAgICAgdGhpcy50cmVlU2VydmljZS5hZnRlclJlbW92ZShbdGhpc10pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuY29tcG9uZW50KSB7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50LnNldENsYXNzTWFwKCk7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50Lm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=