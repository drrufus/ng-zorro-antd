/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { warnDeprecation } from '../logger/logger';
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
            option.children.forEach(function (nodeOptions) {
                var s = _this.treeService;
                if (s && !s.isCheckStrictly && option.checked && !option.disabled && !nodeOptions.disabled && !nodeOptions.disableCheckbox) {
                    nodeOptions.checked = option.checked;
                }
                _this._children.push(new NzTreeNode(nodeOptions, _this));
            });
        }
    }
    Object.defineProperty(NzTreeNode.prototype, "treeService", {
        get: function () {
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
        get: function () {
            return this._title;
        },
        set: function (value) {
            this._title = value;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNode.prototype, "icon", {
        get: function () {
            return this._icon;
        },
        set: function (value) {
            this._icon = value;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNode.prototype, "children", {
        get: function () {
            return this._children;
        },
        set: function (value) {
            this._children = value;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNode.prototype, "isLeaf", {
        get: function () {
            return this._isLeaf;
        },
        set: function (value) {
            this._isLeaf = value;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNode.prototype, "isChecked", {
        get: function () {
            return this._isChecked;
        },
        set: function (value) {
            this._isChecked = value;
            this._isAllChecked = value;
            this.origin.checked = value;
            this.afterValueChange('isChecked');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNode.prototype, "isAllChecked", {
        get: function () {
            return this._isAllChecked;
        },
        /**
         * @deprecated Maybe removed in next major version, use `isChecked` instead.
         */
        set: function (value) {
            warnDeprecation("'isAllChecked' is going to be removed in 9.0.0. Please use 'isChecked' instead.");
            this._isAllChecked = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNode.prototype, "isHalfChecked", {
        get: function () {
            return this._isHalfChecked;
        },
        set: function (value) {
            this._isHalfChecked = value;
            this.afterValueChange('isHalfChecked');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNode.prototype, "isSelectable", {
        get: function () {
            return this._isSelectable;
        },
        set: function (value) {
            this._isSelectable = value;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNode.prototype, "isDisabled", {
        get: function () {
            return this._isDisabled;
        },
        set: function (value) {
            this._isDisabled = value;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNode.prototype, "isDisableCheckbox", {
        get: function () {
            return this._isDisableCheckbox;
        },
        set: function (value) {
            this._isDisableCheckbox = value;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNode.prototype, "isExpanded", {
        get: function () {
            return this._isExpanded;
        },
        set: function (value) {
            this._isExpanded = value;
            this.origin.expanded = value;
            this.afterValueChange('isExpanded');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNode.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        set: function (value) {
            this._isSelected = value;
            this.origin.selected = value;
            this.afterValueChange('isSelected');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNode.prototype, "isLoading", {
        get: function () {
            return this._isLoading;
        },
        set: function (value) {
            this._isLoading = value;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    NzTreeNode.prototype.setSyncChecked = function (checked, halfChecked) {
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
    NzTreeNode.prototype.setChecked = function (checked, halfChecked) {
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
    NzTreeNode.prototype.setExpanded = function (value) {
        warnDeprecation("'setExpanded' is going to be removed in 9.0.0. Please use 'isExpanded' instead.");
        this.isExpanded = value;
    };
    /**
     * @deprecated Maybe removed in next major version, use `isSelected` instead.
     */
    NzTreeNode.prototype.setSelected = function (value) {
        warnDeprecation("'setSelected' is going to be removed in 9.0.0. Please use 'isExpanded' isSelected.");
        if (this.isDisabled) {
            return;
        }
        this.isSelected = value;
    };
    NzTreeNode.prototype.getParentNode = function () {
        return this.parentNode;
    };
    NzTreeNode.prototype.getChildren = function () {
        return this.children;
    };
    /**
     * Support appending child nodes by position. Leaf node cannot be appended.
     */
    // tslint:disable-next-line:no-any
    NzTreeNode.prototype.addChildren = function (children, childPos) {
        var _this = this;
        if (childPos === void 0) { childPos = -1; }
        if (!this.isLeaf) {
            children.forEach(function (node) {
                var refreshLevel = function (n) {
                    n.getChildren().forEach(function (c) {
                        c.level = c.getParentNode().level + 1;
                        // flush origin
                        c.origin.level = c.level;
                        refreshLevel(c);
                    });
                };
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
            });
            this.origin.children = this.getChildren().map(function (v) { return v.origin; });
            // remove loading state
            this.isLoading = false;
        }
    };
    NzTreeNode.prototype.clearChildren = function () {
        // refresh checked state
        this.afterValueChange('clearChildren');
        this.children = [];
        this.origin.children = [];
    };
    NzTreeNode.prototype.remove = function () {
        var _this = this;
        var parentNode = this.getParentNode();
        if (parentNode) {
            parentNode.children = parentNode.getChildren().filter(function (v) { return v.key !== _this.key; });
            parentNode.origin.children = parentNode.origin.children.filter(function (v) { return v.key !== _this.key; });
            this.afterValueChange('remove');
        }
    };
    NzTreeNode.prototype.afterValueChange = function (key) {
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
    NzTreeNode.prototype.update = function () {
        if (this.component) {
            this.component.setClassMap();
            this.component.markForCheck();
        }
    };
    return NzTreeNode;
}());
export { NzTreeNode };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS1iYXNlLW5vZGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJ0cmVlL256LXRyZWUtYmFzZS1ub2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQXFCbkQ7SUFnQ0Usb0JBQVksTUFBc0MsRUFBRSxNQUFnQyxFQUFFLE9BQXdDO1FBQTlILGlCQXdDQztRQXhDbUQsdUJBQUEsRUFBQSxhQUFnQztRQUFFLHdCQUFBLEVBQUEsY0FBd0M7UUE3QjlILFVBQUssR0FBVyxDQUFDLENBQUM7UUE4QmhCLElBQUksTUFBTSxZQUFZLFVBQVUsRUFBRTtZQUNoQyxPQUFPLE1BQU0sQ0FBQztTQUNmO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLElBQUksSUFBSSxDQUFDO1FBQy9CLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQztRQUN0QyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNwQixnQkFBZ0I7UUFDaEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQztRQUMxQyxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxRQUFRLElBQUksTUFBTSxDQUFDLFVBQVUsS0FBSyxLQUFL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XHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyB3YXJuRGVwcmVjYXRpb24gfSBmcm9tICcuLi9sb2dnZXIvbG9nZ2VyJztcclxuaW1wb3J0IHsgTnpUcmVlTm9kZUJhc2VDb21wb25lbnQgfSBmcm9tICcuL256LXRyZWUtYmFzZS5kZWZpbml0aW9ucyc7XHJcbmltcG9ydCB7IE56VHJlZUJhc2VTZXJ2aWNlIH0gZnJvbSAnLi9uei10cmVlLWJhc2Uuc2VydmljZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE56VHJlZU5vZGVPcHRpb25zIHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGtleTogc3RyaW5nO1xyXG4gIGljb24/OiBzdHJpbmc7XHJcbiAgaXNMZWFmPzogYm9vbGVhbjtcclxuICBjaGVja2VkPzogYm9vbGVhbjtcclxuICBzZWxlY3RlZD86IGJvb2xlYW47XHJcbiAgc2VsZWN0YWJsZT86IGJvb2xlYW47XHJcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gIGRpc2FibGVDaGVja2JveD86IGJvb2xlYW47XHJcbiAgZXhwYW5kZWQ/OiBib29sZWFuO1xyXG4gIGNoaWxkcmVuPzogTnpUcmVlTm9kZU9wdGlvbnNbXTtcclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE56VHJlZU5vZGUge1xyXG4gIHByaXZhdGUgX3RpdGxlOiBzdHJpbmc7XHJcbiAga2V5OiBzdHJpbmc7XHJcbiAgbGV2ZWw6IG51bWJlciA9IDA7XHJcbiAgb3JpZ2luOiBOelRyZWVOb2RlT3B0aW9ucztcclxuICAvLyBQYXJlbnQgTm9kZVxyXG4gIHBhcmVudE5vZGU6IE56VHJlZU5vZGUgfCBudWxsO1xyXG4gIHByaXZhdGUgX2ljb246IHN0cmluZztcclxuICBwcml2YXRlIF9jaGlsZHJlbjogTnpUcmVlTm9kZVtdO1xyXG4gIHByaXZhdGUgX2lzTGVhZjogYm9vbGVhbjtcclxuICBwcml2YXRlIF9pc0NoZWNrZWQ6IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgTWF5YmUgcmVtb3ZlZCBpbiBuZXh0IG1ham9yIHZlcnNpb24sIHVzZSBpc0NoZWNrZWQgaW5zdGVhZFxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2lzQWxsQ2hlY2tlZDogYm9vbGVhbjtcclxuICBwcml2YXRlIF9pc1NlbGVjdGFibGU6IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSBfaXNEaXNhYmxlZDogYm9vbGVhbjtcclxuICBwcml2YXRlIF9pc0Rpc2FibGVDaGVja2JveDogYm9vbGVhbjtcclxuICBwcml2YXRlIF9pc0V4cGFuZGVkOiBib29sZWFuO1xyXG4gIHByaXZhdGUgX2lzSGFsZkNoZWNrZWQ6IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSBfaXNTZWxlY3RlZDogYm9vbGVhbjtcclxuICBwcml2YXRlIF9pc0xvYWRpbmc6IGJvb2xlYW47XHJcbiAgY2FuSGlkZTogYm9vbGVhbjtcclxuICBpc01hdGNoZWQ6IGJvb2xlYW47XHJcblxyXG4gIHNlcnZpY2U6IE56VHJlZUJhc2VTZXJ2aWNlIHwgbnVsbDtcclxuICBjb21wb25lbnQ6IE56VHJlZU5vZGVCYXNlQ29tcG9uZW50O1xyXG5cclxuICBnZXQgdHJlZVNlcnZpY2UoKTogTnpUcmVlQmFzZVNlcnZpY2UgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLnNlcnZpY2UgfHwgKHRoaXMucGFyZW50Tm9kZSAmJiB0aGlzLnBhcmVudE5vZGUudHJlZVNlcnZpY2UpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3Iob3B0aW9uOiBOelRyZWVOb2RlT3B0aW9ucyB8IE56VHJlZU5vZGUsIHBhcmVudDogTnpUcmVlTm9kZSB8IG51bGwgPSBudWxsLCBzZXJ2aWNlOiBOelRyZWVCYXNlU2VydmljZSB8IG51bGwgPSBudWxsKSB7XHJcbiAgICBpZiAob3B0aW9uIGluc3RhbmNlb2YgTnpUcmVlTm9kZSkge1xyXG4gICAgICByZXR1cm4gb3B0aW9uO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXJ2aWNlID0gc2VydmljZSB8fCBudWxsO1xyXG4gICAgdGhpcy5vcmlnaW4gPSBvcHRpb247XHJcbiAgICB0aGlzLmtleSA9IG9wdGlvbi5rZXk7XHJcbiAgICB0aGlzLnBhcmVudE5vZGUgPSBwYXJlbnQ7XHJcbiAgICB0aGlzLl90aXRsZSA9IG9wdGlvbi50aXRsZSB8fCAnLS0tJztcclxuICAgIHRoaXMuX2ljb24gPSBvcHRpb24uaWNvbiB8fCAnJztcclxuICAgIHRoaXMuX2lzTGVhZiA9IG9wdGlvbi5pc0xlYWYgfHwgZmFsc2U7XHJcbiAgICB0aGlzLl9jaGlsZHJlbiA9IFtdO1xyXG4gICAgLy8gb3B0aW9uIHBhcmFtc1xyXG4gICAgdGhpcy5faXNDaGVja2VkID0gb3B0aW9uLmNoZWNrZWQgfHwgZmFsc2U7XHJcbiAgICB0aGlzLl9pc1NlbGVjdGFibGUgPSBvcHRpb24uZGlzYWJsZWQgfHwgb3B0aW9uLnNlbGVjdGFibGUgIT09IGZhbHNlO1xyXG4gICAgdGhpcy5faXNEaXNhYmxlZCA9IG9wdGlvbi5kaXNhYmxlZCB8fCBmYWxzZTtcclxuICAgIHRoaXMuX2lzRGlzYWJsZUNoZWNrYm94ID0gb3B0aW9uLmRpc2FibGVDaGVja2JveCB8fCBmYWxzZTtcclxuICAgIHRoaXMuX2lzRXhwYW5kZWQgPSBvcHRpb24uaXNMZWFmID8gZmFsc2UgOiBvcHRpb24uZXhwYW5kZWQgfHwgZmFsc2U7XHJcbiAgICB0aGlzLl9pc0hhbGZDaGVja2VkID0gZmFsc2U7XHJcbiAgICB0aGlzLl9pc1NlbGVjdGVkID0gKCFvcHRpb24uZGlzYWJsZWQgJiYgb3B0aW9uLnNlbGVjdGVkKSB8fCBmYWxzZTtcclxuICAgIHRoaXMuX2lzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc01hdGNoZWQgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIHBhcmVudCdzIGNoZWNrZWQgc3RhdHVzIHdpbGwgYWZmZWN0IGNoaWxkcmVuIHdoaWxlIGluaXRpYWxpemluZ1xyXG4gICAgICovXHJcbiAgICBpZiAocGFyZW50KSB7XHJcbiAgICAgIHRoaXMubGV2ZWwgPSBwYXJlbnQubGV2ZWwgKyAxO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5sZXZlbCA9IDA7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIG9wdGlvbi5jaGlsZHJlbiAhPT0gJ3VuZGVmaW5lZCcgJiYgb3B0aW9uLmNoaWxkcmVuICE9PSBudWxsKSB7XHJcbiAgICAgIG9wdGlvbi5jaGlsZHJlbi5mb3JFYWNoKG5vZGVPcHRpb25zID0+IHtcclxuICAgICAgICBjb25zdCBzID0gdGhpcy50cmVlU2VydmljZTtcclxuICAgICAgICBpZiAocyAmJiAhcy5pc0NoZWNrU3RyaWN0bHkgJiYgb3B0aW9uLmNoZWNrZWQgJiYgIW9wdGlvbi5kaXNhYmxlZCAmJiAhbm9kZU9wdGlvbnMuZGlzYWJsZWQgJiYgIW5vZGVPcHRpb25zLmRpc2FibGVDaGVja2JveCkge1xyXG4gICAgICAgICAgbm9kZU9wdGlvbnMuY2hlY2tlZCA9IG9wdGlvbi5jaGVja2VkO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jaGlsZHJlbi5wdXNoKG5ldyBOelRyZWVOb2RlKG5vZGVPcHRpb25zLCB0aGlzKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogYXV0byBnZW5lcmF0ZVxyXG4gICAqIGdldFxyXG4gICAqIHNldFxyXG4gICAqL1xyXG4gIGdldCB0aXRsZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xyXG4gIH1cclxuXHJcbiAgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGljb24oKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9pY29uO1xyXG4gIH1cclxuXHJcbiAgc2V0IGljb24odmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5faWNvbiA9IHZhbHVlO1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9XHJcblxyXG4gIGdldCBjaGlsZHJlbigpOiBOelRyZWVOb2RlW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NoaWxkcmVuO1xyXG4gIH1cclxuXHJcbiAgc2V0IGNoaWxkcmVuKHZhbHVlOiBOelRyZWVOb2RlW10pIHtcclxuICAgIHRoaXMuX2NoaWxkcmVuID0gdmFsdWU7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzTGVhZigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pc0xlYWY7XHJcbiAgfVxyXG5cclxuICBzZXQgaXNMZWFmKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9pc0xlYWYgPSB2YWx1ZTtcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNDaGVja2VkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lzQ2hlY2tlZDtcclxuICB9XHJcblxyXG4gIHNldCBpc0NoZWNrZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2lzQ2hlY2tlZCA9IHZhbHVlO1xyXG4gICAgdGhpcy5faXNBbGxDaGVja2VkID0gdmFsdWU7XHJcbiAgICB0aGlzLm9yaWdpbi5jaGVja2VkID0gdmFsdWU7XHJcbiAgICB0aGlzLmFmdGVyVmFsdWVDaGFuZ2UoJ2lzQ2hlY2tlZCcpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzQWxsQ2hlY2tlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pc0FsbENoZWNrZWQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCBNYXliZSByZW1vdmVkIGluIG5leHQgbWFqb3IgdmVyc2lvbiwgdXNlIGBpc0NoZWNrZWRgIGluc3RlYWQuXHJcbiAgICovXHJcbiAgc2V0IGlzQWxsQ2hlY2tlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgd2FybkRlcHJlY2F0aW9uKGAnaXNBbGxDaGVja2VkJyBpcyBnb2luZyB0byBiZSByZW1vdmVkIGluIDkuMC4wLiBQbGVhc2UgdXNlICdpc0NoZWNrZWQnIGluc3RlYWQuYCk7XHJcbiAgICB0aGlzLl9pc0FsbENoZWNrZWQgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCBpc0hhbGZDaGVja2VkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lzSGFsZkNoZWNrZWQ7XHJcbiAgfVxyXG5cclxuICBzZXQgaXNIYWxmQ2hlY2tlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5faXNIYWxmQ2hlY2tlZCA9IHZhbHVlO1xyXG4gICAgdGhpcy5hZnRlclZhbHVlQ2hhbmdlKCdpc0hhbGZDaGVja2VkJyk7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNTZWxlY3RhYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lzU2VsZWN0YWJsZTtcclxuICB9XHJcblxyXG4gIHNldCBpc1NlbGVjdGFibGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2lzU2VsZWN0YWJsZSA9IHZhbHVlO1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9XHJcblxyXG4gIGdldCBpc0Rpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lzRGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBzZXQgaXNEaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5faXNEaXNhYmxlZCA9IHZhbHVlO1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9XHJcblxyXG4gIGdldCBpc0Rpc2FibGVDaGVja2JveCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pc0Rpc2FibGVDaGVja2JveDtcclxuICB9XHJcblxyXG4gIHNldCBpc0Rpc2FibGVDaGVja2JveCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5faXNEaXNhYmxlQ2hlY2tib3ggPSB2YWx1ZTtcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNFeHBhbmRlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pc0V4cGFuZGVkO1xyXG4gIH1cclxuXHJcbiAgc2V0IGlzRXhwYW5kZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2lzRXhwYW5kZWQgPSB2YWx1ZTtcclxuICAgIHRoaXMub3JpZ2luLmV4cGFuZGVkID0gdmFsdWU7XHJcbiAgICB0aGlzLmFmdGVyVmFsdWVDaGFuZ2UoJ2lzRXhwYW5kZWQnKTtcclxuICB9XHJcblxyXG4gIGdldCBpc1NlbGVjdGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lzU2VsZWN0ZWQ7XHJcbiAgfVxyXG5cclxuICBzZXQgaXNTZWxlY3RlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5faXNTZWxlY3RlZCA9IHZhbHVlO1xyXG4gICAgdGhpcy5vcmlnaW4uc2VsZWN0ZWQgPSB2YWx1ZTtcclxuICAgIHRoaXMuYWZ0ZXJWYWx1ZUNoYW5nZSgnaXNTZWxlY3RlZCcpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzTG9hZGluZygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pc0xvYWRpbmc7XHJcbiAgfVxyXG5cclxuICBzZXQgaXNMb2FkaW5nKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9pc0xvYWRpbmcgPSB2YWx1ZTtcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0U3luY0NoZWNrZWQoY2hlY2tlZDogYm9vbGVhbiA9IGZhbHNlLCBoYWxmQ2hlY2tlZDogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldENoZWNrZWQoY2hlY2tlZCwgaGFsZkNoZWNrZWQpO1xyXG4gICAgaWYgKHRoaXMudHJlZVNlcnZpY2UgJiYgIXRoaXMudHJlZVNlcnZpY2UuaXNDaGVja1N0cmljdGx5KSB7XHJcbiAgICAgIHRoaXMudHJlZVNlcnZpY2UuY29uZHVjdCh0aGlzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXByZWNhdGVkIE1heWJlIHJlbW92ZWQgaW4gbmV4dCBtYWpvciB2ZXJzaW9uLCB1c2UgYGlzQ2hlY2tlZGAgaW5zdGVhZC5cclxuICAgKi9cclxuICBwdWJsaWMgc2V0Q2hlY2tlZChjaGVja2VkOiBib29sZWFuID0gZmFsc2UsIGhhbGZDaGVja2VkOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgIHdhcm5EZXByZWNhdGlvbihgJ3NldENoZWNrZWQnIGlzIGdvaW5nIHRvIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFBsZWFzZSB1c2UgJ2lzQ2hlY2tlZCcgaW5zdGVhZC5gKTtcclxuICAgIHRoaXMub3JpZ2luLmNoZWNrZWQgPSBjaGVja2VkO1xyXG4gICAgdGhpcy5pc0NoZWNrZWQgPSBjaGVja2VkO1xyXG4gICAgdGhpcy5pc0FsbENoZWNrZWQgPSBjaGVja2VkO1xyXG4gICAgdGhpcy5pc0hhbGZDaGVja2VkID0gaGFsZkNoZWNrZWQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCBNYXliZSByZW1vdmVkIGluIG5leHQgbWFqb3IgdmVyc2lvbiwgdXNlIGBpc0V4cGFuZGVkYCBpbnN0ZWFkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzZXRFeHBhbmRlZCh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgd2FybkRlcHJlY2F0aW9uKGAnc2V0RXhwYW5kZWQnIGlzIGdvaW5nIHRvIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFBsZWFzZSB1c2UgJ2lzRXhwYW5kZWQnIGluc3RlYWQuYCk7XHJcbiAgICB0aGlzLmlzRXhwYW5kZWQgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXByZWNhdGVkIE1heWJlIHJlbW92ZWQgaW4gbmV4dCBtYWpvciB2ZXJzaW9uLCB1c2UgYGlzU2VsZWN0ZWRgIGluc3RlYWQuXHJcbiAgICovXHJcbiAgcHVibGljIHNldFNlbGVjdGVkKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB3YXJuRGVwcmVjYXRpb24oYCdzZXRTZWxlY3RlZCcgaXMgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiA5LjAuMC4gUGxlYXNlIHVzZSAnaXNFeHBhbmRlZCcgaXNTZWxlY3RlZC5gKTtcclxuICAgIGlmICh0aGlzLmlzRGlzYWJsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pc1NlbGVjdGVkID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0UGFyZW50Tm9kZSgpOiBOelRyZWVOb2RlIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5wYXJlbnROb2RlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldENoaWxkcmVuKCk6IE56VHJlZU5vZGVbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN1cHBvcnQgYXBwZW5kaW5nIGNoaWxkIG5vZGVzIGJ5IHBvc2l0aW9uLiBMZWFmIG5vZGUgY2Fubm90IGJlIGFwcGVuZGVkLlxyXG4gICAqL1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBwdWJsaWMgYWRkQ2hpbGRyZW4oY2hpbGRyZW46IGFueVtdLCBjaGlsZFBvczogbnVtYmVyID0gLTEpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5pc0xlYWYpIHtcclxuICAgICAgY2hpbGRyZW4uZm9yRWFjaChub2RlID0+IHtcclxuICAgICAgICBjb25zdCByZWZyZXNoTGV2ZWwgPSAobjogTnpUcmVlTm9kZSkgPT4ge1xyXG4gICAgICAgICAgbi5nZXRDaGlsZHJlbigpLmZvckVhY2goYyA9PiB7XHJcbiAgICAgICAgICAgIGMubGV2ZWwgPSBjLmdldFBhcmVudE5vZGUoKSEubGV2ZWwgKyAxO1xyXG4gICAgICAgICAgICAvLyBmbHVzaCBvcmlnaW5cclxuICAgICAgICAgICAgYy5vcmlnaW4ubGV2ZWwgPSBjLmxldmVsO1xyXG4gICAgICAgICAgICByZWZyZXNoTGV2ZWwoYyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGxldCBjaGlsZCA9IG5vZGU7XHJcbiAgICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgTnpUcmVlTm9kZSkge1xyXG4gICAgICAgICAgY2hpbGQucGFyZW50Tm9kZSA9IHRoaXM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNoaWxkID0gbmV3IE56VHJlZU5vZGUobm9kZSwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNoaWxkLmxldmVsID0gdGhpcy5sZXZlbCArIDE7XHJcbiAgICAgICAgY2hpbGQub3JpZ2luLmxldmVsID0gY2hpbGQubGV2ZWw7XHJcbiAgICAgICAgcmVmcmVzaExldmVsKGNoaWxkKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY2hpbGRQb3MgPT09IC0xID8gdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKSA6IHRoaXMuY2hpbGRyZW4uc3BsaWNlKGNoaWxkUG9zLCAwLCBjaGlsZCk7XHJcbiAgICAgICAgICAvLyBmbHVzaCBvcmlnaW5cclxuICAgICAgICB9IGNhdGNoIChlKSB7fVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5vcmlnaW4uY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKCkubWFwKHYgPT4gdi5vcmlnaW4pO1xyXG4gICAgICAvLyByZW1vdmUgbG9hZGluZyBzdGF0ZVxyXG4gICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsZWFyQ2hpbGRyZW4oKTogdm9pZCB7XHJcbiAgICAvLyByZWZyZXNoIGNoZWNrZWQgc3RhdGVcclxuICAgIHRoaXMuYWZ0ZXJWYWx1ZUNoYW5nZSgnY2xlYXJDaGlsZHJlbicpO1xyXG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xyXG4gICAgdGhpcy5vcmlnaW4uY2hpbGRyZW4gPSBbXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmUoKTogdm9pZCB7XHJcbiAgICBjb25zdCBwYXJlbnROb2RlID0gdGhpcy5nZXRQYXJlbnROb2RlKCk7XHJcbiAgICBpZiAocGFyZW50Tm9kZSkge1xyXG4gICAgICBwYXJlbnROb2RlLmNoaWxkcmVuID0gcGFyZW50Tm9kZS5nZXRDaGlsZHJlbigpLmZpbHRlcih2ID0+IHYua2V5ICE9PSB0aGlzLmtleSk7XHJcbiAgICAgIHBhcmVudE5vZGUub3JpZ2luLmNoaWxkcmVuID0gcGFyZW50Tm9kZS5vcmlnaW4uY2hpbGRyZW4hLmZpbHRlcih2ID0+IHYua2V5ICE9PSB0aGlzLmtleSk7XHJcbiAgICAgIHRoaXMuYWZ0ZXJWYWx1ZUNoYW5nZSgncmVtb3ZlJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWZ0ZXJWYWx1ZUNoYW5nZShrZXk6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudHJlZVNlcnZpY2UpIHtcclxuICAgICAgc3dpdGNoIChrZXkpIHtcclxuICAgICAgICBjYXNlICdpc0NoZWNrZWQnOlxyXG4gICAgICAgICAgdGhpcy50cmVlU2VydmljZS5zZXRDaGVja2VkTm9kZUxpc3QodGhpcyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdpc0hhbGZDaGVja2VkJzpcclxuICAgICAgICAgIHRoaXMudHJlZVNlcnZpY2Uuc2V0SGFsZkNoZWNrZWROb2RlTGlzdCh0aGlzKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2lzRXhwYW5kZWQnOlxyXG4gICAgICAgICAgdGhpcy50cmVlU2VydmljZS5zZXRFeHBhbmRlZE5vZGVMaXN0KHRoaXMpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnaXNTZWxlY3RlZCc6XHJcbiAgICAgICAgICB0aGlzLnRyZWVTZXJ2aWNlLnNldE5vZGVBY3RpdmUodGhpcyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdjbGVhckNoaWxkcmVuJzpcclxuICAgICAgICAgIHRoaXMudHJlZVNlcnZpY2UuYWZ0ZXJSZW1vdmUodGhpcy5nZXRDaGlsZHJlbigpKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3JlbW92ZSc6XHJcbiAgICAgICAgICB0aGlzLnRyZWVTZXJ2aWNlLmFmdGVyUmVtb3ZlKFt0aGlzXSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5jb21wb25lbnQpIHtcclxuICAgICAgdGhpcy5jb21wb25lbnQuc2V0Q2xhc3NNYXAoKTtcclxuICAgICAgdGhpcy5jb21wb25lbnQubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==