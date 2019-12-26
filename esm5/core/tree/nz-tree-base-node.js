/**
 * @fileoverview added by tsickle
 * Generated from: tree/nz-tree-base-node.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS1iYXNlLW5vZGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJ0cmVlL256LXRyZWUtYmFzZS1ub2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7OztBQUluRCx1Q0FlQzs7O0lBZEMsa0NBQWM7O0lBQ2QsZ0NBQVk7O0lBQ1osaUNBQWM7O0lBQ2QsbUNBQWlCOztJQUNqQixvQ0FBa0I7O0lBQ2xCLHFDQUFtQjs7SUFDbkIsdUNBQXFCOztJQUNyQixxQ0FBbUI7O0lBQ25CLDRDQUEwQjs7SUFDMUIscUNBQW1COztJQUNuQixxQ0FBK0I7OztBQU1qQztJQWdDRSxvQkFDRSxNQUFzQyxFQUN0QyxNQUFnQyxFQUNoQyxPQUF3QztRQUgxQyxpQkFtREM7UUFqREMsdUJBQUEsRUFBQSxhQUFnQztRQUNoQyx3QkFBQSxFQUFBLGNBQXdDO1FBaEMxQyxVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBa0NoQixJQUFJLE1BQU0sWUFBWSxVQUFVLEVBQUU7WUFDaEMsT0FBTyxNQUFNLENBQUM7U0FDZjtRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxJQUFJLElBQUksQ0FBQztRQUMvQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQztRQUNwQyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUM7UUFDdEMsSUFBSSxD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TUFBTTtnQkFDUixLQUFLLFFBQVE7b0JBQ1gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUNyQyxNQUFNO2FBQ1Q7U0FDRjtRQUNELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7O0lBRU0sMkJBQU07OztJQUFiO1FBQ0UsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUMvQjtJQUNILENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQUF0VkQsSUFzVkM7Ozs7Ozs7SUFyVkMsNEJBQXVCOztJQUN2Qix5QkFBWTs7SUFDWiwyQkFBa0I7O0lBQ2xCLDRCQUEwQjs7SUFFMUIsZ0NBQThCOzs7OztJQUM5QiwyQkFBc0I7Ozs7O0lBQ3RCLCtCQUFnQzs7Ozs7SUFDaEMsNkJBQXlCOzs7OztJQUN6QixnQ0FBNEI7Ozs7OztJQUk1QixtQ0FBK0I7Ozs7O0lBQy9CLG1DQUErQjs7Ozs7SUFDL0IsaUNBQTZCOzs7OztJQUM3Qix3Q0FBb0M7Ozs7O0lBQ3BDLGlDQUE2Qjs7Ozs7SUFDN0Isb0NBQWdDOzs7OztJQUNoQyxpQ0FBNkI7Ozs7O0lBQzdCLGdDQUE0Qjs7SUFDNUIsNkJBQWlCOztJQUNqQiwrQkFBbUI7O0lBRW5CLDZCQUFrQzs7SUFDbEMsK0JBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyB3YXJuRGVwcmVjYXRpb24gfSBmcm9tICcuLi9sb2dnZXIvbG9nZ2VyJztcclxuaW1wb3J0IHsgTnpUcmVlTm9kZUJhc2VDb21wb25lbnQgfSBmcm9tICcuL256LXRyZWUtYmFzZS5kZWZpbml0aW9ucyc7XHJcbmltcG9ydCB7IE56VHJlZUJhc2VTZXJ2aWNlIH0gZnJvbSAnLi9uei10cmVlLWJhc2Uuc2VydmljZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE56VHJlZU5vZGVPcHRpb25zIHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGtleTogc3RyaW5nO1xyXG4gIGljb24/OiBzdHJpbmc7XHJcbiAgaXNMZWFmPzogYm9vbGVhbjtcclxuICBjaGVja2VkPzogYm9vbGVhbjtcclxuICBzZWxlY3RlZD86IGJvb2xlYW47XHJcbiAgc2VsZWN0YWJsZT86IGJvb2xlYW47XHJcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gIGRpc2FibGVDaGVja2JveD86IGJvb2xlYW47XHJcbiAgZXhwYW5kZWQ/OiBib29sZWFuO1xyXG4gIGNoaWxkcmVuPzogTnpUcmVlTm9kZU9wdGlvbnNbXTtcclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE56VHJlZU5vZGUge1xyXG4gIHByaXZhdGUgX3RpdGxlOiBzdHJpbmc7XHJcbiAga2V5OiBzdHJpbmc7XHJcbiAgbGV2ZWw6IG51bWJlciA9IDA7XHJcbiAgb3JpZ2luOiBOelRyZWVOb2RlT3B0aW9ucztcclxuICAvLyBQYXJlbnQgTm9kZVxyXG4gIHBhcmVudE5vZGU6IE56VHJlZU5vZGUgfCBudWxsO1xyXG4gIHByaXZhdGUgX2ljb246IHN0cmluZztcclxuICBwcml2YXRlIF9jaGlsZHJlbjogTnpUcmVlTm9kZVtdO1xyXG4gIHByaXZhdGUgX2lzTGVhZjogYm9vbGVhbjtcclxuICBwcml2YXRlIF9pc0NoZWNrZWQ6IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgTWF5YmUgcmVtb3ZlZCBpbiBuZXh0IG1ham9yIHZlcnNpb24sIHVzZSBpc0NoZWNrZWQgaW5zdGVhZFxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2lzQWxsQ2hlY2tlZDogYm9vbGVhbjtcclxuICBwcml2YXRlIF9pc1NlbGVjdGFibGU6IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSBfaXNEaXNhYmxlZDogYm9vbGVhbjtcclxuICBwcml2YXRlIF9pc0Rpc2FibGVDaGVja2JveDogYm9vbGVhbjtcclxuICBwcml2YXRlIF9pc0V4cGFuZGVkOiBib29sZWFuO1xyXG4gIHByaXZhdGUgX2lzSGFsZkNoZWNrZWQ6IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSBfaXNTZWxlY3RlZDogYm9vbGVhbjtcclxuICBwcml2YXRlIF9pc0xvYWRpbmc6IGJvb2xlYW47XHJcbiAgY2FuSGlkZTogYm9vbGVhbjtcclxuICBpc01hdGNoZWQ6IGJvb2xlYW47XHJcblxyXG4gIHNlcnZpY2U6IE56VHJlZUJhc2VTZXJ2aWNlIHwgbnVsbDtcclxuICBjb21wb25lbnQ6IE56VHJlZU5vZGVCYXNlQ29tcG9uZW50O1xyXG5cclxuICBnZXQgdHJlZVNlcnZpY2UoKTogTnpUcmVlQmFzZVNlcnZpY2UgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLnNlcnZpY2UgfHwgKHRoaXMucGFyZW50Tm9kZSAmJiB0aGlzLnBhcmVudE5vZGUudHJlZVNlcnZpY2UpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBvcHRpb246IE56VHJlZU5vZGVPcHRpb25zIHwgTnpUcmVlTm9kZSxcclxuICAgIHBhcmVudDogTnpUcmVlTm9kZSB8IG51bGwgPSBudWxsLFxyXG4gICAgc2VydmljZTogTnpUcmVlQmFzZVNlcnZpY2UgfCBudWxsID0gbnVsbFxyXG4gICkge1xyXG4gICAgaWYgKG9wdGlvbiBpbnN0YW5jZW9mIE56VHJlZU5vZGUpIHtcclxuICAgICAgcmV0dXJuIG9wdGlvbjtcclxuICAgIH1cclxuICAgIHRoaXMuc2VydmljZSA9IHNlcnZpY2UgfHwgbnVsbDtcclxuICAgIHRoaXMub3JpZ2luID0gb3B0aW9uO1xyXG4gICAgdGhpcy5rZXkgPSBvcHRpb24ua2V5O1xyXG4gICAgdGhpcy5wYXJlbnROb2RlID0gcGFyZW50O1xyXG4gICAgdGhpcy5fdGl0bGUgPSBvcHRpb24udGl0bGUgfHwgJy0tLSc7XHJcbiAgICB0aGlzLl9pY29uID0gb3B0aW9uLmljb24gfHwgJyc7XHJcbiAgICB0aGlzLl9pc0xlYWYgPSBvcHRpb24uaXNMZWFmIHx8IGZhbHNlO1xyXG4gICAgdGhpcy5fY2hpbGRyZW4gPSBbXTtcclxuICAgIC8vIG9wdGlvbiBwYXJhbXNcclxuICAgIHRoaXMuX2lzQ2hlY2tlZCA9IG9wdGlvbi5jaGVja2VkIHx8IGZhbHNlO1xyXG4gICAgdGhpcy5faXNTZWxlY3RhYmxlID0gb3B0aW9uLmRpc2FibGVkIHx8IG9wdGlvbi5zZWxlY3RhYmxlICE9PSBmYWxzZTtcclxuICAgIHRoaXMuX2lzRGlzYWJsZWQgPSBvcHRpb24uZGlzYWJsZWQgfHwgZmFsc2U7XHJcbiAgICB0aGlzLl9pc0Rpc2FibGVDaGVja2JveCA9IG9wdGlvbi5kaXNhYmxlQ2hlY2tib3ggfHwgZmFsc2U7XHJcbiAgICB0aGlzLl9pc0V4cGFuZGVkID0gb3B0aW9uLmlzTGVhZiA/IGZhbHNlIDogb3B0aW9uLmV4cGFuZGVkIHx8IGZhbHNlO1xyXG4gICAgdGhpcy5faXNIYWxmQ2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5faXNTZWxlY3RlZCA9ICghb3B0aW9uLmRpc2FibGVkICYmIG9wdGlvbi5zZWxlY3RlZCkgfHwgZmFsc2U7XHJcbiAgICB0aGlzLl9pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgIHRoaXMuaXNNYXRjaGVkID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBwYXJlbnQncyBjaGVja2VkIHN0YXR1cyB3aWxsIGFmZmVjdCBjaGlsZHJlbiB3aGlsZSBpbml0aWFsaXppbmdcclxuICAgICAqL1xyXG4gICAgaWYgKHBhcmVudCkge1xyXG4gICAgICB0aGlzLmxldmVsID0gcGFyZW50LmxldmVsICsgMTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubGV2ZWwgPSAwO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBvcHRpb24uY2hpbGRyZW4gIT09ICd1bmRlZmluZWQnICYmIG9wdGlvbi5jaGlsZHJlbiAhPT0gbnVsbCkge1xyXG4gICAgICBvcHRpb24uY2hpbGRyZW4uZm9yRWFjaChub2RlT3B0aW9ucyA9PiB7XHJcbiAgICAgICAgY29uc3QgcyA9IHRoaXMudHJlZVNlcnZpY2U7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgcyAmJlxyXG4gICAgICAgICAgIXMuaXNDaGVja1N0cmljdGx5ICYmXHJcbiAgICAgICAgICBvcHRpb24uY2hlY2tlZCAmJlxyXG4gICAgICAgICAgIW9wdGlvbi5kaXNhYmxlZCAmJlxyXG4gICAgICAgICAgIW5vZGVPcHRpb25zLmRpc2FibGVkICYmXHJcbiAgICAgICAgICAhbm9kZU9wdGlvbnMuZGlzYWJsZUNoZWNrYm94XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBub2RlT3B0aW9ucy5jaGVja2VkID0gb3B0aW9uLmNoZWNrZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2NoaWxkcmVuLnB1c2gobmV3IE56VHJlZU5vZGUobm9kZU9wdGlvbnMsIHRoaXMpKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBhdXRvIGdlbmVyYXRlXHJcbiAgICogZ2V0XHJcbiAgICogc2V0XHJcbiAgICovXHJcbiAgZ2V0IHRpdGxlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fdGl0bGU7XHJcbiAgfVxyXG5cclxuICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgaWNvbigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2ljb247XHJcbiAgfVxyXG5cclxuICBzZXQgaWNvbih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9pY29uID0gdmFsdWU7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNoaWxkcmVuKCk6IE56VHJlZU5vZGVbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY2hpbGRyZW47XHJcbiAgfVxyXG5cclxuICBzZXQgY2hpbGRyZW4odmFsdWU6IE56VHJlZU5vZGVbXSkge1xyXG4gICAgdGhpcy5fY2hpbGRyZW4gPSB2YWx1ZTtcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNMZWFmKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lzTGVhZjtcclxuICB9XHJcblxyXG4gIHNldCBpc0xlYWYodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2lzTGVhZiA9IHZhbHVlO1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9XHJcblxyXG4gIGdldCBpc0NoZWNrZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5faXNDaGVja2VkO1xyXG4gIH1cclxuXHJcbiAgc2V0IGlzQ2hlY2tlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5faXNDaGVja2VkID0gdmFsdWU7XHJcbiAgICB0aGlzLl9pc0FsbENoZWNrZWQgPSB2YWx1ZTtcclxuICAgIHRoaXMub3JpZ2luLmNoZWNrZWQgPSB2YWx1ZTtcclxuICAgIHRoaXMuYWZ0ZXJWYWx1ZUNoYW5nZSgnaXNDaGVja2VkJyk7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNBbGxDaGVja2VkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lzQWxsQ2hlY2tlZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXByZWNhdGVkIE1heWJlIHJlbW92ZWQgaW4gbmV4dCBtYWpvciB2ZXJzaW9uLCB1c2UgYGlzQ2hlY2tlZGAgaW5zdGVhZC5cclxuICAgKi9cclxuICBzZXQgaXNBbGxDaGVja2VkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB3YXJuRGVwcmVjYXRpb24oYCdpc0FsbENoZWNrZWQnIGlzIGdvaW5nIHRvIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFBsZWFzZSB1c2UgJ2lzQ2hlY2tlZCcgaW5zdGVhZC5gKTtcclxuICAgIHRoaXMuX2lzQWxsQ2hlY2tlZCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzSGFsZkNoZWNrZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5faXNIYWxmQ2hlY2tlZDtcclxuICB9XHJcblxyXG4gIHNldCBpc0hhbGZDaGVja2VkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9pc0hhbGZDaGVja2VkID0gdmFsdWU7XHJcbiAgICB0aGlzLmFmdGVyVmFsdWVDaGFuZ2UoJ2lzSGFsZkNoZWNrZWQnKTtcclxuICB9XHJcblxyXG4gIGdldCBpc1NlbGVjdGFibGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5faXNTZWxlY3RhYmxlO1xyXG4gIH1cclxuXHJcbiAgc2V0IGlzU2VsZWN0YWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5faXNTZWxlY3RhYmxlID0gdmFsdWU7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzRGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5faXNEaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIHNldCBpc0Rpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9pc0Rpc2FibGVkID0gdmFsdWU7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzRGlzYWJsZUNoZWNrYm94KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lzRGlzYWJsZUNoZWNrYm94O1xyXG4gIH1cclxuXHJcbiAgc2V0IGlzRGlzYWJsZUNoZWNrYm94KHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9pc0Rpc2FibGVDaGVja2JveCA9IHZhbHVlO1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9XHJcblxyXG4gIGdldCBpc0V4cGFuZGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lzRXhwYW5kZWQ7XHJcbiAgfVxyXG5cclxuICBzZXQgaXNFeHBhbmRlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5faXNFeHBhbmRlZCA9IHZhbHVlO1xyXG4gICAgdGhpcy5vcmlnaW4uZXhwYW5kZWQgPSB2YWx1ZTtcclxuICAgIHRoaXMuYWZ0ZXJWYWx1ZUNoYW5nZSgnaXNFeHBhbmRlZCcpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzU2VsZWN0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5faXNTZWxlY3RlZDtcclxuICB9XHJcblxyXG4gIHNldCBpc1NlbGVjdGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9pc1NlbGVjdGVkID0gdmFsdWU7XHJcbiAgICB0aGlzLm9yaWdpbi5zZWxlY3RlZCA9IHZhbHVlO1xyXG4gICAgdGhpcy5hZnRlclZhbHVlQ2hhbmdlKCdpc1NlbGVjdGVkJyk7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNMb2FkaW5nKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lzTG9hZGluZztcclxuICB9XHJcblxyXG4gIHNldCBpc0xvYWRpbmcodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2lzTG9hZGluZyA9IHZhbHVlO1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRTeW5jQ2hlY2tlZChjaGVja2VkOiBib29sZWFuID0gZmFsc2UsIGhhbGZDaGVja2VkOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0Q2hlY2tlZChjaGVja2VkLCBoYWxmQ2hlY2tlZCk7XHJcbiAgICBpZiAodGhpcy50cmVlU2VydmljZSAmJiAhdGhpcy50cmVlU2VydmljZS5pc0NoZWNrU3RyaWN0bHkpIHtcclxuICAgICAgdGhpcy50cmVlU2VydmljZS5jb25kdWN0KHRoaXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgTWF5YmUgcmVtb3ZlZCBpbiBuZXh0IG1ham9yIHZlcnNpb24sIHVzZSBgaXNDaGVja2VkYCBpbnN0ZWFkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzZXRDaGVja2VkKGNoZWNrZWQ6IGJvb2xlYW4gPSBmYWxzZSwgaGFsZkNoZWNrZWQ6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgd2FybkRlcHJlY2F0aW9uKGAnc2V0Q2hlY2tlZCcgaXMgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiA5LjAuMC4gUGxlYXNlIHVzZSAnaXNDaGVja2VkJyBpbnN0ZWFkLmApO1xyXG4gICAgdGhpcy5vcmlnaW4uY2hlY2tlZCA9IGNoZWNrZWQ7XHJcbiAgICB0aGlzLmlzQ2hlY2tlZCA9IGNoZWNrZWQ7XHJcbiAgICB0aGlzLmlzQWxsQ2hlY2tlZCA9IGNoZWNrZWQ7XHJcbiAgICB0aGlzLmlzSGFsZkNoZWNrZWQgPSBoYWxmQ2hlY2tlZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXByZWNhdGVkIE1heWJlIHJlbW92ZWQgaW4gbmV4dCBtYWpvciB2ZXJzaW9uLCB1c2UgYGlzRXhwYW5kZWRgIGluc3RlYWQuXHJcbiAgICovXHJcbiAgcHVibGljIHNldEV4cGFuZGVkKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB3YXJuRGVwcmVjYXRpb24oYCdzZXRFeHBhbmRlZCcgaXMgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiA5LjAuMC4gUGxlYXNlIHVzZSAnaXNFeHBhbmRlZCcgaW5zdGVhZC5gKTtcclxuICAgIHRoaXMuaXNFeHBhbmRlZCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgTWF5YmUgcmVtb3ZlZCBpbiBuZXh0IG1ham9yIHZlcnNpb24sIHVzZSBgaXNTZWxlY3RlZGAgaW5zdGVhZC5cclxuICAgKi9cclxuICBwdWJsaWMgc2V0U2VsZWN0ZWQodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHdhcm5EZXByZWNhdGlvbihgJ3NldFNlbGVjdGVkJyBpcyBnb2luZyB0byBiZSByZW1vdmVkIGluIDkuMC4wLiBQbGVhc2UgdXNlICdpc0V4cGFuZGVkJyBpc1NlbGVjdGVkLmApO1xyXG4gICAgaWYgKHRoaXMuaXNEaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmlzU2VsZWN0ZWQgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRQYXJlbnROb2RlKCk6IE56VHJlZU5vZGUgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLnBhcmVudE5vZGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Q2hpbGRyZW4oKTogTnpUcmVlTm9kZVtdIHtcclxuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3VwcG9ydCBhcHBlbmRpbmcgY2hpbGQgbm9kZXMgYnkgcG9zaXRpb24uIExlYWYgbm9kZSBjYW5ub3QgYmUgYXBwZW5kZWQuXHJcbiAgICovXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHB1YmxpYyBhZGRDaGlsZHJlbihjaGlsZHJlbjogYW55W10sIGNoaWxkUG9zOiBudW1iZXIgPSAtMSk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmlzTGVhZikge1xyXG4gICAgICBjaGlsZHJlbi5mb3JFYWNoKG5vZGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlZnJlc2hMZXZlbCA9IChuOiBOelRyZWVOb2RlKSA9PiB7XHJcbiAgICAgICAgICBuLmdldENoaWxkcmVuKCkuZm9yRWFjaChjID0+IHtcclxuICAgICAgICAgICAgYy5sZXZlbCA9IGMuZ2V0UGFyZW50Tm9kZSgpIS5sZXZlbCArIDE7XHJcbiAgICAgICAgICAgIC8vIGZsdXNoIG9yaWdpblxyXG4gICAgICAgICAgICBjLm9yaWdpbi5sZXZlbCA9IGMubGV2ZWw7XHJcbiAgICAgICAgICAgIHJlZnJlc2hMZXZlbChjKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgbGV0IGNoaWxkID0gbm9kZTtcclxuICAgICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBOelRyZWVOb2RlKSB7XHJcbiAgICAgICAgICBjaGlsZC5wYXJlbnROb2RlID0gdGhpcztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY2hpbGQgPSBuZXcgTnpUcmVlTm9kZShub2RlLCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2hpbGQubGV2ZWwgPSB0aGlzLmxldmVsICsgMTtcclxuICAgICAgICBjaGlsZC5vcmlnaW4ubGV2ZWwgPSBjaGlsZC5sZXZlbDtcclxuICAgICAgICByZWZyZXNoTGV2ZWwoY2hpbGQpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjaGlsZFBvcyA9PT0gLTEgPyB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpIDogdGhpcy5jaGlsZHJlbi5zcGxpY2UoY2hpbGRQb3MsIDAsIGNoaWxkKTtcclxuICAgICAgICAgIC8vIGZsdXNoIG9yaWdpblxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLm9yaWdpbi5jaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW4oKS5tYXAodiA9PiB2Lm9yaWdpbik7XHJcbiAgICAgIC8vIHJlbW92ZSBsb2FkaW5nIHN0YXRlXHJcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xlYXJDaGlsZHJlbigpOiB2b2lkIHtcclxuICAgIC8vIHJlZnJlc2ggY2hlY2tlZCBzdGF0ZVxyXG4gICAgdGhpcy5hZnRlclZhbHVlQ2hhbmdlKCdjbGVhckNoaWxkcmVuJyk7XHJcbiAgICB0aGlzLmNoaWxkcmVuID0gW107XHJcbiAgICB0aGlzLm9yaWdpbi5jaGlsZHJlbiA9IFtdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZSgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHBhcmVudE5vZGUgPSB0aGlzLmdldFBhcmVudE5vZGUoKTtcclxuICAgIGlmIChwYXJlbnROb2RlKSB7XHJcbiAgICAgIHBhcmVudE5vZGUuY2hpbGRyZW4gPSBwYXJlbnROb2RlLmdldENoaWxkcmVuKCkuZmlsdGVyKHYgPT4gdi5rZXkgIT09IHRoaXMua2V5KTtcclxuICAgICAgcGFyZW50Tm9kZS5vcmlnaW4uY2hpbGRyZW4gPSBwYXJlbnROb2RlLm9yaWdpbi5jaGlsZHJlbiEuZmlsdGVyKHYgPT4gdi5rZXkgIT09IHRoaXMua2V5KTtcclxuICAgICAgdGhpcy5hZnRlclZhbHVlQ2hhbmdlKCdyZW1vdmUnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBhZnRlclZhbHVlQ2hhbmdlKGtleTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy50cmVlU2VydmljZSkge1xyXG4gICAgICBzd2l0Y2ggKGtleSkge1xyXG4gICAgICAgIGNhc2UgJ2lzQ2hlY2tlZCc6XHJcbiAgICAgICAgICB0aGlzLnRyZWVTZXJ2aWNlLnNldENoZWNrZWROb2RlTGlzdCh0aGlzKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2lzSGFsZkNoZWNrZWQnOlxyXG4gICAgICAgICAgdGhpcy50cmVlU2VydmljZS5zZXRIYWxmQ2hlY2tlZE5vZGVMaXN0KHRoaXMpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnaXNFeHBhbmRlZCc6XHJcbiAgICAgICAgICB0aGlzLnRyZWVTZXJ2aWNlLnNldEV4cGFuZGVkTm9kZUxpc3QodGhpcyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdpc1NlbGVjdGVkJzpcclxuICAgICAgICAgIHRoaXMudHJlZVNlcnZpY2Uuc2V0Tm9kZUFjdGl2ZSh0aGlzKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2NsZWFyQ2hpbGRyZW4nOlxyXG4gICAgICAgICAgdGhpcy50cmVlU2VydmljZS5hZnRlclJlbW92ZSh0aGlzLmdldENoaWxkcmVuKCkpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAncmVtb3ZlJzpcclxuICAgICAgICAgIHRoaXMudHJlZVNlcnZpY2UuYWZ0ZXJSZW1vdmUoW3RoaXNdKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmNvbXBvbmVudCkge1xyXG4gICAgICB0aGlzLmNvbXBvbmVudC5zZXRDbGFzc01hcCgpO1xyXG4gICAgICB0aGlzLmNvbXBvbmVudC5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19