/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { warnDeprecation } from '../logger/logger';
export class NzTreeNode {
    constructor(option, parent = null, service = null) {
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
            option.children.forEach(nodeOptions => {
                const s = this.treeService;
                if (s && !s.isCheckStrictly && option.checked && !option.disabled && !nodeOptions.disabled && !nodeOptions.disableCheckbox) {
                    nodeOptions.checked = option.checked;
                }
                this._children.push(new NzTreeNode(nodeOptions, this));
            });
        }
    }
    get treeService() {
        return this.service || (this.parentNode && this.parentNode.treeService);
    }
    /**
     * auto generate
     * get
     * set
     */
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
        this.update();
    }
    get icon() {
        return this._icon;
    }
    set icon(value) {
        this._icon = value;
        this.update();
    }
    get children() {
        return this._children;
    }
    set children(value) {
        this._children = value;
        this.update();
    }
    get isLeaf() {
        return this._isLeaf;
    }
    set isLeaf(value) {
        this._isLeaf = value;
        this.update();
    }
    get isChecked() {
        return this._isChecked;
    }
    set isChecked(value) {
        this._isChecked = value;
        this._isAllChecked = value;
        this.origin.checked = value;
        this.afterValueChange('isChecked');
    }
    get isAllChecked() {
        return this._isAllChecked;
    }
    /**
     * @deprecated Maybe removed in next major version, use `isChecked` instead.
     */
    set isAllChecked(value) {
        warnDeprecation(`'isAllChecked' is going to be removed in 9.0.0. Please use 'isChecked' instead.`);
        this._isAllChecked = value;
    }
    get isHalfChecked() {
        return this._isHalfChecked;
    }
    set isHalfChecked(value) {
        this._isHalfChecked = value;
        this.afterValueChange('isHalfChecked');
    }
    get isSelectable() {
        return this._isSelectable;
    }
    set isSelectable(value) {
        this._isSelectable = value;
        this.update();
    }
    get isDisabled() {
        return this._isDisabled;
    }
    set isDisabled(value) {
        this._isDisabled = value;
        this.update();
    }
    get isDisableCheckbox() {
        return this._isDisableCheckbox;
    }
    set isDisableCheckbox(value) {
        this._isDisableCheckbox = value;
        this.update();
    }
    get isExpanded() {
        return this._isExpanded;
    }
    set isExpanded(value) {
        this._isExpanded = value;
        this.origin.expanded = value;
        this.afterValueChange('isExpanded');
    }
    get isSelected() {
        return this._isSelected;
    }
    set isSelected(value) {
        this._isSelected = value;
        this.origin.selected = value;
        this.afterValueChange('isSelected');
    }
    get isLoading() {
        return this._isLoading;
    }
    set isLoading(value) {
        this._isLoading = value;
        this.update();
    }
    setSyncChecked(checked = false, halfChecked = false) {
        this.setChecked(checked, halfChecked);
        if (this.treeService && !this.treeService.isCheckStrictly) {
            this.treeService.conduct(this);
        }
    }
    /**
     * @deprecated Maybe removed in next major version, use `isChecked` instead.
     */
    setChecked(checked = false, halfChecked = false) {
        warnDeprecation(`'setChecked' is going to be removed in 9.0.0. Please use 'isChecked' instead.`);
        this.origin.checked = checked;
        this.isChecked = checked;
        this.isAllChecked = checked;
        this.isHalfChecked = halfChecked;
    }
    /**
     * @deprecated Maybe removed in next major version, use `isExpanded` instead.
     */
    setExpanded(value) {
        warnDeprecation(`'setExpanded' is going to be removed in 9.0.0. Please use 'isExpanded' instead.`);
        this.isExpanded = value;
    }
    /**
     * @deprecated Maybe removed in next major version, use `isSelected` instead.
     */
    setSelected(value) {
        warnDeprecation(`'setSelected' is going to be removed in 9.0.0. Please use 'isExpanded' isSelected.`);
        if (this.isDisabled) {
            return;
        }
        this.isSelected = value;
    }
    getParentNode() {
        return this.parentNode;
    }
    getChildren() {
        return this.children;
    }
    /**
     * Support appending child nodes by position. Leaf node cannot be appended.
     */
    // tslint:disable-next-line:no-any
    addChildren(children, childPos = -1) {
        if (!this.isLeaf) {
            children.forEach(node => {
                const refreshLevel = (n) => {
                    n.getChildren().forEach(c => {
                        c.level = c.getParentNode().level + 1;
                        // flush origin
                        c.origin.level = c.level;
                        refreshLevel(c);
                    });
                };
                let child = node;
                if (child instanceof NzTreeNode) {
                    child.parentNode = this;
                }
                else {
                    child = new NzTreeNode(node, this);
                }
                child.level = this.level + 1;
                child.origin.level = child.level;
                refreshLevel(child);
                try {
                    childPos === -1 ? this.children.push(child) : this.children.splice(childPos, 0, child);
                    // flush origin
                }
                catch (e) { }
            });
            this.origin.children = this.getChildren().map(v => v.origin);
            // remove loading state
            this.isLoading = false;
        }
    }
    clearChildren() {
        // refresh checked state
        this.afterValueChange('clearChildren');
        this.children = [];
        this.origin.children = [];
    }
    remove() {
        const parentNode = this.getParentNode();
        if (parentNode) {
            parentNode.children = parentNode.getChildren().filter(v => v.key !== this.key);
            parentNode.origin.children = parentNode.origin.children.filter(v => v.key !== this.key);
            this.afterValueChange('remove');
        }
    }
    afterValueChange(key) {
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
    }
    update() {
        if (this.component) {
            this.component.setClassMap();
            this.component.markForCheck();
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS1iYXNlLW5vZGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJ0cmVlL256LXRyZWUtYmFzZS1ub2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQXFCbkQsTUFBTSxPQUFPLFVBQVU7SUFnQ3JCLFlBQVksTUFBc0MsRUFBRSxTQUE0QixJQUFJLEVBQUUsVUFBb0MsSUFBSTtRQTdCOUgsVUFBSyxHQUFXLENBQUMsQ0FBQztRQThCaEIsSUFBSSxNQUFNLFlBQVksVUFBVSxFQUFFO1lBQ2hDLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sSUFBSSxJQUFJLENBQUM7UUFDL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUM7UUFDcEMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLGdCQUFnQjtRQUNoQixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDO1FBQzFDLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLFFBQVEsSUFBSSxNQUFNLENBQUMsVUFBVSxLQUFLLEtBQUssQ0FBQztRQUNwRSxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDO1FBQzVDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsZUFBZSxJQUFJLEtBQUssQ0FBQztRQUMxRCxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUM7UUFDcEUsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBRXZCOztXQUVHO1FBQ0gsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1NBQy9CO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztTQUNoQjtRQUNELElBQUksT0FBTyxNQUFNLENBQUMsUUFBUSxLQUFLLFdBQVcsSUFBSSxNQUFNLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRTtZQUN0RSxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRTtnQkFDcEMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsZUFBZSxJQUFJLE1BQU0sQ0FBQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUU7b0JBQzFILFdBQVcsQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztpQkFDdEM7Z0JBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxVQUFVLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDekQsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUE1Q0QsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUE0Q0Q7Ozs7T0FJRztJQUNILElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBRUQsSUFBSSxLQUFLLENBQUMsS0FBYTtRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRUQsSUFBSSxJQUFJLENBQUMsS0FBYTtRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFBSSxRQUFRLENBQUMsS0FBbUI7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUVELElBQUksTUFBTSxDQUFDLEtBQWM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUVELElBQUksU0FBUyxDQUFDLEtBQWM7UUFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7SUFFRDs7T0FFRztJQUNILElBQUksWUFBWSxDQUFDLEtBQWM7UUFDN0IsZUFBZSxDQUFDLGlGQUFpRixDQUFDLENBQUM7UUFDbkcsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUVELElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDO0lBRUQsSUFBSSxhQUFhLENBQUMsS0FBYztRQUM5QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0lBRUQsSUFBSSxZQUFZLENBQUMsS0FBYztRQUM3QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBRUQsSUFBSSxVQUFVLENBQUMsS0FBYztRQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELElBQUksaUJBQWlCO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ2pDLENBQUM7SUFFRCxJQUFJLGlCQUFpQixDQUFDLEtBQWM7UUFDbEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBRUQsSUFBSSxVQUFVLENBQUMsS0FBYztRQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUVELElBQUksVUFBVSxDQUFDLEtBQWM7UUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQzdCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxJQUFJLFNBQVMsQ0FBQyxLQUFjO1FBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRU0sY0FBYyxDQUFDLFVBQW1CLEtBQUssRUFBRSxjQUF1QixLQUFLO1FBQzFFLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3RDLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFO1lBQ3pELElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0ksVUFBVSxDQUFDLFVBQW1CLEtBQUssRUFBRSxjQUF1QixLQUFLO1FBQ3RFLGVBQWUsQ0FBQywrRUFBK0UsQ0FBQyxDQUFDO1FBQ2pHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQztRQUM1QixJQUFJLENBQUMsYUFBYSxHQUFHLFdBQVcsQ0FBQztJQUNuQyxDQUFDO0lBRUQ7O09BRUc7SUFDSSxXQUFXLENBQUMsS0FBYztRQUMvQixlQUFlLENBQUMsaUZBQWlGLENBQUMsQ0FBQztRQUNuRyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBRUQ7O09BRUc7SUFDSSxXQUFXLENBQUMsS0FBYztRQUMvQixlQUFlLENBQUMsb0ZBQW9GLENBQUMsQ0FBQztRQUN0RyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUVNLGFBQWE7UUFDbEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFFTSxXQUFXO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxrQ0FBa0M7SUFDM0IsV0FBVyxDQUFDLFFBQWUsRUFBRSxXQUFtQixDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDdEIsTUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFhLEVBQUUsRUFBRTtvQkFDckMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTt3QkFDMUIsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsYUFBYSxFQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQzt3QkFDdkMsZUFBZTt3QkFDZixDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO3dCQUN6QixZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2xCLENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUMsQ0FBQztnQkFDRixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQ2pCLElBQUksS0FBSyxZQUFZLFVBQVUsRUFBRTtvQkFDL0IsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7aUJBQ3pCO3FCQUFNO29CQUNMLEtBQUssR0FBRyxJQUFJLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7aUJBQ3BDO2dCQUNELEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7Z0JBQzdCLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7Z0JBQ2pDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDcEIsSUFBSTtvQkFDRixRQUFRLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUN2RixlQUFlO2lCQUNoQjtnQkFBQyxPQUFPLENBQUMsRUFBRSxHQUFFO1lBQ2hCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM3RCx1QkFBdUI7WUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDeEI7SUFDSCxDQUFDO0lBRU0sYUFBYTtRQUNsQix3QkFBd0I7UUFDeEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRU0sTUFBTTtRQUNYLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxJQUFJLFVBQVUsRUFBRTtZQUNkLFVBQVUsQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQy9FLFVBQVUsQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsUUFBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3pGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7SUFFTSxnQkFBZ0IsQ0FBQyxHQUFXO1FBQ2pDLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixRQUFRLEdBQUcsRUFBRTtnQkFDWCxLQUFLLFdBQVc7b0JBQ2QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDMUMsTUFBTTtnQkFDUixLQUFLLGVBQWU7b0JBQ2xCLElBQUksQ0FBQyxXQUFXLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzlDLE1BQU07Z0JBQ1IsS0FBSyxZQUFZO29CQUNmLElBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzNDLE1BQU07Z0JBQ1IsS0FBSyxZQUFZO29CQUNmLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNyQyxNQUFNO2dCQUNSLEtBQUssZUFBZTtvQkFDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7b0JBQ2pELE1BQU07Z0JBQ1IsS0FBSyxRQUFRO29CQUNYLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDckMsTUFBTTthQUNUO1NBQ0Y7UUFDRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVNLE1BQU07UUFDWCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQy9CO0lBQ0gsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyB3YXJuRGVwcmVjYXRpb24gfSBmcm9tICcuLi9sb2dnZXIvbG9nZ2VyJztcclxuaW1wb3J0IHsgTnpUcmVlTm9kZUJhc2VDb21wb25lbnQgfSBmcm9tICcuL256LXRyZWUtYmFzZS5kZWZpbml0aW9ucyc7XHJcbmltcG9ydCB7IE56VHJlZUJhc2VTZXJ2aWNlIH0gZnJvbSAnLi9uei10cmVlLWJhc2Uuc2VydmljZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE56VHJlZU5vZGVPcHRpb25zIHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGtleTogc3RyaW5nO1xyXG4gIGljb24/OiBzdHJpbmc7XHJcbiAgaXNMZWFmPzogYm9vbGVhbjtcclxuICBjaGVja2VkPzogYm9vbGVhbjtcclxuICBzZWxlY3RlZD86IGJvb2xlYW47XHJcbiAgc2VsZWN0YWJsZT86IGJvb2xlYW47XHJcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gIGRpc2FibGVDaGVja2JveD86IGJvb2xlYW47XHJcbiAgZXhwYW5kZWQ/OiBib29sZWFuO1xyXG4gIGNoaWxkcmVuPzogTnpUcmVlTm9kZU9wdGlvbnNbXTtcclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE56VHJlZU5vZGUge1xyXG4gIHByaXZhdGUgX3RpdGxlOiBzdHJpbmc7XHJcbiAga2V5OiBzdHJpbmc7XHJcbiAgbGV2ZWw6IG51bWJlciA9IDA7XHJcbiAgb3JpZ2luOiBOelRyZWVOb2RlT3B0aW9ucztcclxuICAvLyBQYXJlbnQgTm9kZVxyXG4gIHBhcmVudE5vZGU6IE56VHJlZU5vZGUgfCBudWxsO1xyXG4gIHByaXZhdGUgX2ljb246IHN0cmluZztcclxuICBwcml2YXRlIF9jaGlsZHJlbjogTnpUcmVlTm9kZVtdO1xyXG4gIHByaXZhdGUgX2lzTGVhZjogYm9vbGVhbjtcclxuICBwcml2YXRlIF9pc0NoZWNrZWQ6IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgTWF5YmUgcmVtb3ZlZCBpbiBuZXh0IG1ham9yIHZlcnNpb24sIHVzZSBpc0NoZWNrZWQgaW5zdGVhZFxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2lzQWxsQ2hlY2tlZDogYm9vbGVhbjtcclxuICBwcml2YXRlIF9pc1NlbGVjdGFibGU6IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSBfaXNEaXNhYmxlZDogYm9vbGVhbjtcclxuICBwcml2YXRlIF9pc0Rpc2FibGVDaGVja2JveDogYm9vbGVhbjtcclxuICBwcml2YXRlIF9pc0V4cGFuZGVkOiBib29sZWFuO1xyXG4gIHByaXZhdGUgX2lzSGFsZkNoZWNrZWQ6IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSBfaXNTZWxlY3RlZDogYm9vbGVhbjtcclxuICBwcml2YXRlIF9pc0xvYWRpbmc6IGJvb2xlYW47XHJcbiAgY2FuSGlkZTogYm9vbGVhbjtcclxuICBpc01hdGNoZWQ6IGJvb2xlYW47XHJcblxyXG4gIHNlcnZpY2U6IE56VHJlZUJhc2VTZXJ2aWNlIHwgbnVsbDtcclxuICBjb21wb25lbnQ6IE56VHJlZU5vZGVCYXNlQ29tcG9uZW50O1xyXG5cclxuICBnZXQgdHJlZVNlcnZpY2UoKTogTnpUcmVlQmFzZVNlcnZpY2UgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLnNlcnZpY2UgfHwgKHRoaXMucGFyZW50Tm9kZSAmJiB0aGlzLnBhcmVudE5vZGUudHJlZVNlcnZpY2UpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3Iob3B0aW9uOiBOelRyZWVOb2RlT3B0aW9ucyB8IE56VHJlZU5vZGUsIHBhcmVudDogTnpUcmVlTm9kZSB8IG51bGwgPSBudWxsLCBzZXJ2aWNlOiBOelRyZWVCYXNlU2VydmljZSB8IG51bGwgPSBudWxsKSB7XHJcbiAgICBpZiAob3B0aW9uIGluc3RhbmNlb2YgTnpUcmVlTm9kZSkge1xyXG4gICAgICByZXR1cm4gb3B0aW9uO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXJ2aWNlID0gc2VydmljZSB8fCBudWxsO1xyXG4gICAgdGhpcy5vcmlnaW4gPSBvcHRpb247XHJcbiAgICB0aGlzLmtleSA9IG9wdGlvbi5rZXk7XHJcbiAgICB0aGlzLnBhcmVudE5vZGUgPSBwYXJlbnQ7XHJcbiAgICB0aGlzLl90aXRsZSA9IG9wdGlvbi50aXRsZSB8fCAnLS0tJztcclxuICAgIHRoaXMuX2ljb24gPSBvcHRpb24uaWNvbiB8fCAnJztcclxuICAgIHRoaXMuX2lzTGVhZiA9IG9wdGlvbi5pc0xlYWYgfHwgZmFsc2U7XHJcbiAgICB0aGlzLl9jaGlsZHJlbiA9IFtdO1xyXG4gICAgLy8gb3B0aW9uIHBhcmFtc1xyXG4gICAgdGhpcy5faXNDaGVja2VkID0gb3B0aW9uLmNoZWNrZWQgfHwgZmFsc2U7XHJcbiAgICB0aGlzLl9pc1NlbGVjdGFibGUgPSBvcHRpb24uZGlzYWJsZWQgfHwgb3B0aW9uLnNlbGVjdGFibGUgIT09IGZhbHNlO1xyXG4gICAgdGhpcy5faXNEaXNhYmxlZCA9IG9wdGlvbi5kaXNhYmxlZCB8fCBmYWxzZTtcclxuICAgIHRoaXMuX2lzRGlzYWJsZUNoZWNrYm94ID0gb3B0aW9uLmRpc2FibGVDaGVja2JveCB8fCBmYWxzZTtcclxuICAgIHRoaXMuX2lzRXhwYW5kZWQgPSBvcHRpb24uaXNMZWFmID8gZmFsc2UgOiBvcHRpb24uZXhwYW5kZWQgfHwgZmFsc2U7XHJcbiAgICB0aGlzLl9pc0hhbGZDaGVja2VkID0gZmFsc2U7XHJcbiAgICB0aGlzLl9pc1NlbGVjdGVkID0gKCFvcHRpb24uZGlzYWJsZWQgJiYgb3B0aW9uLnNlbGVjdGVkKSB8fCBmYWxzZTtcclxuICAgIHRoaXMuX2lzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc01hdGNoZWQgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIHBhcmVudCdzIGNoZWNrZWQgc3RhdHVzIHdpbGwgYWZmZWN0IGNoaWxkcmVuIHdoaWxlIGluaXRpYWxpemluZ1xyXG4gICAgICovXHJcbiAgICBpZiAocGFyZW50KSB7XHJcbiAgICAgIHRoaXMubGV2ZWwgPSBwYXJlbnQubGV2ZWwgKyAxO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5sZXZlbCA9IDA7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIG9wdGlvbi5jaGlsZHJlbiAhPT0gJ3VuZGVmaW5lZCcgJiYgb3B0aW9uLmNoaWxkcmVuICE9PSBudWxsKSB7XHJcbiAgICAgIG9wdGlvbi5jaGlsZHJlbi5mb3JFYWNoKG5vZGVPcHRpb25zID0+IHtcclxuICAgICAgICBjb25zdCBzID0gdGhpcy50cmVlU2VydmljZTtcclxuICAgICAgICBpZiAocyAmJiAhcy5pc0NoZWNrU3RyaWN0bHkgJiYgb3B0aW9uLmNoZWNrZWQgJiYgIW9wdGlvbi5kaXNhYmxlZCAmJiAhbm9kZU9wdGlvbnMuZGlzYWJsZWQgJiYgIW5vZGVPcHRpb25zLmRpc2FibGVDaGVja2JveCkge1xyXG4gICAgICAgICAgbm9kZU9wdGlvbnMuY2hlY2tlZCA9IG9wdGlvbi5jaGVja2VkO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jaGlsZHJlbi5wdXNoKG5ldyBOelRyZWVOb2RlKG5vZGVPcHRpb25zLCB0aGlzKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogYXV0byBnZW5lcmF0ZVxyXG4gICAqIGdldFxyXG4gICAqIHNldFxyXG4gICAqL1xyXG4gIGdldCB0aXRsZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xyXG4gIH1cclxuXHJcbiAgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGljb24oKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9pY29uO1xyXG4gIH1cclxuXHJcbiAgc2V0IGljb24odmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5faWNvbiA9IHZhbHVlO1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9XHJcblxyXG4gIGdldCBjaGlsZHJlbigpOiBOelRyZWVOb2RlW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NoaWxkcmVuO1xyXG4gIH1cclxuXHJcbiAgc2V0IGNoaWxkcmVuKHZhbHVlOiBOelRyZWVOb2RlW10pIHtcclxuICAgIHRoaXMuX2NoaWxkcmVuID0gdmFsdWU7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzTGVhZigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pc0xlYWY7XHJcbiAgfVxyXG5cclxuICBzZXQgaXNMZWFmKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9pc0xlYWYgPSB2YWx1ZTtcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNDaGVja2VkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lzQ2hlY2tlZDtcclxuICB9XHJcblxyXG4gIHNldCBpc0NoZWNrZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2lzQ2hlY2tlZCA9IHZhbHVlO1xyXG4gICAgdGhpcy5faXNBbGxDaGVja2VkID0gdmFsdWU7XHJcbiAgICB0aGlzLm9yaWdpbi5jaGVja2VkID0gdmFsdWU7XHJcbiAgICB0aGlzLmFmdGVyVmFsdWVDaGFuZ2UoJ2lzQ2hlY2tlZCcpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzQWxsQ2hlY2tlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pc0FsbENoZWNrZWQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCBNYXliZSByZW1vdmVkIGluIG5leHQgbWFqb3IgdmVyc2lvbiwgdXNlIGBpc0NoZWNrZWRgIGluc3RlYWQuXHJcbiAgICovXHJcbiAgc2V0IGlzQWxsQ2hlY2tlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgd2FybkRlcHJlY2F0aW9uKGAnaXNBbGxDaGVja2VkJyBpcyBnb2luZyB0byBiZSByZW1vdmVkIGluIDkuMC4wLiBQbGVhc2UgdXNlICdpc0NoZWNrZWQnIGluc3RlYWQuYCk7XHJcbiAgICB0aGlzLl9pc0FsbENoZWNrZWQgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCBpc0hhbGZDaGVja2VkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lzSGFsZkNoZWNrZWQ7XHJcbiAgfVxyXG5cclxuICBzZXQgaXNIYWxmQ2hlY2tlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5faXNIYWxmQ2hlY2tlZCA9IHZhbHVlO1xyXG4gICAgdGhpcy5hZnRlclZhbHVlQ2hhbmdlKCdpc0hhbGZDaGVja2VkJyk7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNTZWxlY3RhYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lzU2VsZWN0YWJsZTtcclxuICB9XHJcblxyXG4gIHNldCBpc1NlbGVjdGFibGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2lzU2VsZWN0YWJsZSA9IHZhbHVlO1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9XHJcblxyXG4gIGdldCBpc0Rpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lzRGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBzZXQgaXNEaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5faXNEaXNhYmxlZCA9IHZhbHVlO1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9XHJcblxyXG4gIGdldCBpc0Rpc2FibGVDaGVja2JveCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pc0Rpc2FibGVDaGVja2JveDtcclxuICB9XHJcblxyXG4gIHNldCBpc0Rpc2FibGVDaGVja2JveCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5faXNEaXNhYmxlQ2hlY2tib3ggPSB2YWx1ZTtcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNFeHBhbmRlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pc0V4cGFuZGVkO1xyXG4gIH1cclxuXHJcbiAgc2V0IGlzRXhwYW5kZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2lzRXhwYW5kZWQgPSB2YWx1ZTtcclxuICAgIHRoaXMub3JpZ2luLmV4cGFuZGVkID0gdmFsdWU7XHJcbiAgICB0aGlzLmFmdGVyVmFsdWVDaGFuZ2UoJ2lzRXhwYW5kZWQnKTtcclxuICB9XHJcblxyXG4gIGdldCBpc1NlbGVjdGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lzU2VsZWN0ZWQ7XHJcbiAgfVxyXG5cclxuICBzZXQgaXNTZWxlY3RlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5faXNTZWxlY3RlZCA9IHZhbHVlO1xyXG4gICAgdGhpcy5vcmlnaW4uc2VsZWN0ZWQgPSB2YWx1ZTtcclxuICAgIHRoaXMuYWZ0ZXJWYWx1ZUNoYW5nZSgnaXNTZWxlY3RlZCcpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzTG9hZGluZygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pc0xvYWRpbmc7XHJcbiAgfVxyXG5cclxuICBzZXQgaXNMb2FkaW5nKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9pc0xvYWRpbmcgPSB2YWx1ZTtcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0U3luY0NoZWNrZWQoY2hlY2tlZDogYm9vbGVhbiA9IGZhbHNlLCBoYWxmQ2hlY2tlZDogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldENoZWNrZWQoY2hlY2tlZCwgaGFsZkNoZWNrZWQpO1xyXG4gICAgaWYgKHRoaXMudHJlZVNlcnZpY2UgJiYgIXRoaXMudHJlZVNlcnZpY2UuaXNDaGVja1N0cmljdGx5KSB7XHJcbiAgICAgIHRoaXMudHJlZVNlcnZpY2UuY29uZHVjdCh0aGlzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXByZWNhdGVkIE1heWJlIHJlbW92ZWQgaW4gbmV4dCBtYWpvciB2ZXJzaW9uLCB1c2UgYGlzQ2hlY2tlZGAgaW5zdGVhZC5cclxuICAgKi9cclxuICBwdWJsaWMgc2V0Q2hlY2tlZChjaGVja2VkOiBib29sZWFuID0gZmFsc2UsIGhhbGZDaGVja2VkOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgIHdhcm5EZXByZWNhdGlvbihgJ3NldENoZWNrZWQnIGlzIGdvaW5nIHRvIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFBsZWFzZSB1c2UgJ2lzQ2hlY2tlZCcgaW5zdGVhZC5gKTtcclxuICAgIHRoaXMub3JpZ2luLmNoZWNrZWQgPSBjaGVja2VkO1xyXG4gICAgdGhpcy5pc0NoZWNrZWQgPSBjaGVja2VkO1xyXG4gICAgdGhpcy5pc0FsbENoZWNrZWQgPSBjaGVja2VkO1xyXG4gICAgdGhpcy5pc0hhbGZDaGVja2VkID0gaGFsZkNoZWNrZWQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCBNYXliZSByZW1vdmVkIGluIG5leHQgbWFqb3IgdmVyc2lvbiwgdXNlIGBpc0V4cGFuZGVkYCBpbnN0ZWFkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzZXRFeHBhbmRlZCh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgd2FybkRlcHJlY2F0aW9uKGAnc2V0RXhwYW5kZWQnIGlzIGdvaW5nIHRvIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFBsZWFzZSB1c2UgJ2lzRXhwYW5kZWQnIGluc3RlYWQuYCk7XHJcbiAgICB0aGlzLmlzRXhwYW5kZWQgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXByZWNhdGVkIE1heWJlIHJlbW92ZWQgaW4gbmV4dCBtYWpvciB2ZXJzaW9uLCB1c2UgYGlzU2VsZWN0ZWRgIGluc3RlYWQuXHJcbiAgICovXHJcbiAgcHVibGljIHNldFNlbGVjdGVkKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB3YXJuRGVwcmVjYXRpb24oYCdzZXRTZWxlY3RlZCcgaXMgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiA5LjAuMC4gUGxlYXNlIHVzZSAnaXNFeHBhbmRlZCcgaXNTZWxlY3RlZC5gKTtcclxuICAgIGlmICh0aGlzLmlzRGlzYWJsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pc1NlbGVjdGVkID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0UGFyZW50Tm9kZSgpOiBOelRyZWVOb2RlIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5wYXJlbnROb2RlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldENoaWxkcmVuKCk6IE56VHJlZU5vZGVbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN1cHBvcnQgYXBwZW5kaW5nIGNoaWxkIG5vZGVzIGJ5IHBvc2l0aW9uLiBMZWFmIG5vZGUgY2Fubm90IGJlIGFwcGVuZGVkLlxyXG4gICAqL1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBwdWJsaWMgYWRkQ2hpbGRyZW4oY2hpbGRyZW46IGFueVtdLCBjaGlsZFBvczogbnVtYmVyID0gLTEpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5pc0xlYWYpIHtcclxuICAgICAgY2hpbGRyZW4uZm9yRWFjaChub2RlID0+IHtcclxuICAgICAgICBjb25zdCByZWZyZXNoTGV2ZWwgPSAobjogTnpUcmVlTm9kZSkgPT4ge1xyXG4gICAgICAgICAgbi5nZXRDaGlsZHJlbigpLmZvckVhY2goYyA9PiB7XHJcbiAgICAgICAgICAgIGMubGV2ZWwgPSBjLmdldFBhcmVudE5vZGUoKSEubGV2ZWwgKyAxO1xyXG4gICAgICAgICAgICAvLyBmbHVzaCBvcmlnaW5cclxuICAgICAgICAgICAgYy5vcmlnaW4ubGV2ZWwgPSBjLmxldmVsO1xyXG4gICAgICAgICAgICByZWZyZXNoTGV2ZWwoYyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGxldCBjaGlsZCA9IG5vZGU7XHJcbiAgICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgTnpUcmVlTm9kZSkge1xyXG4gICAgICAgICAgY2hpbGQucGFyZW50Tm9kZSA9IHRoaXM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNoaWxkID0gbmV3IE56VHJlZU5vZGUobm9kZSwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNoaWxkLmxldmVsID0gdGhpcy5sZXZlbCArIDE7XHJcbiAgICAgICAgY2hpbGQub3JpZ2luLmxldmVsID0gY2hpbGQubGV2ZWw7XHJcbiAgICAgICAgcmVmcmVzaExldmVsKGNoaWxkKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY2hpbGRQb3MgPT09IC0xID8gdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKSA6IHRoaXMuY2hpbGRyZW4uc3BsaWNlKGNoaWxkUG9zLCAwLCBjaGlsZCk7XHJcbiAgICAgICAgICAvLyBmbHVzaCBvcmlnaW5cclxuICAgICAgICB9IGNhdGNoIChlKSB7fVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5vcmlnaW4uY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKCkubWFwKHYgPT4gdi5vcmlnaW4pO1xyXG4gICAgICAvLyByZW1vdmUgbG9hZGluZyBzdGF0ZVxyXG4gICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsZWFyQ2hpbGRyZW4oKTogdm9pZCB7XHJcbiAgICAvLyByZWZyZXNoIGNoZWNrZWQgc3RhdGVcclxuICAgIHRoaXMuYWZ0ZXJWYWx1ZUNoYW5nZSgnY2xlYXJDaGlsZHJlbicpO1xyXG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xyXG4gICAgdGhpcy5vcmlnaW4uY2hpbGRyZW4gPSBbXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmUoKTogdm9pZCB7XHJcbiAgICBjb25zdCBwYXJlbnROb2RlID0gdGhpcy5nZXRQYXJlbnROb2RlKCk7XHJcbiAgICBpZiAocGFyZW50Tm9kZSkge1xyXG4gICAgICBwYXJlbnROb2RlLmNoaWxkcmVuID0gcGFyZW50Tm9kZS5nZXRDaGlsZHJlbigpLmZpbHRlcih2ID0+IHYua2V5ICE9PSB0aGlzLmtleSk7XHJcbiAgICAgIHBhcmVudE5vZGUub3JpZ2luLmNoaWxkcmVuID0gcGFyZW50Tm9kZS5vcmlnaW4uY2hpbGRyZW4hLmZpbHRlcih2ID0+IHYua2V5ICE9PSB0aGlzLmtleSk7XHJcbiAgICAgIHRoaXMuYWZ0ZXJWYWx1ZUNoYW5nZSgncmVtb3ZlJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWZ0ZXJWYWx1ZUNoYW5nZShrZXk6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudHJlZVNlcnZpY2UpIHtcclxuICAgICAgc3dpdGNoIChrZXkpIHtcclxuICAgICAgICBjYXNlICdpc0NoZWNrZWQnOlxyXG4gICAgICAgICAgdGhpcy50cmVlU2VydmljZS5zZXRDaGVja2VkTm9kZUxpc3QodGhpcyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdpc0hhbGZDaGVja2VkJzpcclxuICAgICAgICAgIHRoaXMudHJlZVNlcnZpY2Uuc2V0SGFsZkNoZWNrZWROb2RlTGlzdCh0aGlzKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2lzRXhwYW5kZWQnOlxyXG4gICAgICAgICAgdGhpcy50cmVlU2VydmljZS5zZXRFeHBhbmRlZE5vZGVMaXN0KHRoaXMpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnaXNTZWxlY3RlZCc6XHJcbiAgICAgICAgICB0aGlzLnRyZWVTZXJ2aWNlLnNldE5vZGVBY3RpdmUodGhpcyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdjbGVhckNoaWxkcmVuJzpcclxuICAgICAgICAgIHRoaXMudHJlZVNlcnZpY2UuYWZ0ZXJSZW1vdmUodGhpcy5nZXRDaGlsZHJlbigpKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3JlbW92ZSc6XHJcbiAgICAgICAgICB0aGlzLnRyZWVTZXJ2aWNlLmFmdGVyUmVtb3ZlKFt0aGlzXSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5jb21wb25lbnQpIHtcclxuICAgICAgdGhpcy5jb21wb25lbnQuc2V0Q2xhc3NNYXAoKTtcclxuICAgICAgdGhpcy5jb21wb25lbnQubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==