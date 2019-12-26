/**
 * @fileoverview added by tsickle
 * Generated from: tree/nz-tree-base.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { NzTreeNode } from './nz-tree-base-node';
export class NzTreeBase {
    /**
     * @param {?} nzTreeService
     */
    constructor(nzTreeService) {
        this.nzTreeService = nzTreeService;
    }
    /**
     * Coerces a value({\@link any[]}) to a TreeNodes({\@link NzTreeNode[]})
     * @param {?} value
     * @return {?}
     */
    coerceTreeNodes(
    // tslint:disable-next-line:no-any
    value) {
        /** @type {?} */
        let nodes = [];
        if (!this.nzTreeService.isArrayOfNzTreeNode(value)) {
            // has not been new NzTreeNode
            nodes = value.map((/**
             * @param {?} item
             * @return {?}
             */
            item => new NzTreeNode(item, null, this.nzTreeService)));
        }
        else {
            nodes = value.map((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                item.service = this.nzTreeService;
                return item;
            }));
        }
        return nodes;
    }
    /**
     * Get all nodes({\@link NzTreeNode})
     * @return {?}
     */
    getTreeNodes() {
        return this.nzTreeService.rootNodes;
    }
    /**
     * Get {\@link NzTreeNode} with key
     * @param {?} key
     * @return {?}
     */
    getTreeNodeByKey(key) {
        // flat tree nodes
        /** @type {?} */
        const nodes = [];
        /** @type {?} */
        const getNode = (/**
         * @param {?} node
         * @return {?}
         */
        (node) => {
            nodes.push(node);
            node.getChildren().forEach((/**
             * @param {?} n
             * @return {?}
             */
            n => {
                getNode(n);
            }));
        });
        this.getTreeNodes().forEach((/**
         * @param {?} n
         * @return {?}
         */
        n => {
            getNode(n);
        }));
        return nodes.find((/**
         * @param {?} n
         * @return {?}
         */
        n => n.key === key)) || null;
    }
    /**
     * Get checked nodes(merged)
     * @return {?}
     */
    getCheckedNodeList() {
        return this.nzTreeService.getCheckedNodeList();
    }
    /**
     * Get selected nodes
     * @return {?}
     */
    getSelectedNodeList() {
        return this.nzTreeService.getSelectedNodeList();
    }
    /**
     * Get half checked nodes
     * @return {?}
     */
    getHalfCheckedNodeList() {
        return this.nzTreeService.getHalfCheckedNodeList();
    }
    /**
     * Get expanded nodes
     * @return {?}
     */
    getExpandedNodeList() {
        return this.nzTreeService.getExpandedNodeList();
    }
    /**
     * Get matched nodes(if nzSearchValue is not null)
     * @return {?}
     */
    getMatchedNodeList() {
        return this.nzTreeService.getMatchedNodeList();
    }
}
if (false) {
    /** @type {?} */
    NzTreeBase.prototype.nzTreeService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS1iYXNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsidHJlZS9uei10cmVlLWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBR2pELE1BQU0sT0FBTyxVQUFVOzs7O0lBQ3JCLFlBQW1CLGFBQWdDO1FBQWhDLGtCQUFhLEdBQWIsYUFBYSxDQUFtQjtJQUFHLENBQUM7Ozs7OztJQUt2RCxlQUFlO0lBQ2Isa0NBQWtDO0lBQ2xDLEtBQVk7O1lBRVIsS0FBSyxHQUFpQixFQUFFO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2xELDhCQUE4QjtZQUM5QixLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUc7Ozs7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFDLENBQUM7U0FDM0U7YUFBTTtZQUNMLEtBQUssR0FBRyxLQUFLLENBQUMsR0FBRzs7OztZQUFDLENBQUMsSUFBZ0IsRUFBRSxFQUFFO2dCQUNyQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7Z0JBQ2xDLE9BQU8sSUFBSSxDQUFDO1lBQ2QsQ0FBQyxFQUFDLENBQUM7U0FDSjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7SUFLRCxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztJQUN0QyxDQUFDOzs7Ozs7SUFLRCxnQkFBZ0IsQ0FBQyxHQUFXOzs7Y0FFcEIsS0FBSyxHQUFpQixFQUFFOztjQUN4QixPQUFPOzs7O1FBQUcsQ0FBQyxJQUFnQixFQUFRLEVBQUU7WUFDekMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTzs7OztZQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUM3QixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDYixDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQTtRQUNELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDOUIsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2IsQ0FBQyxFQUFDLENBQUM7UUFDSCxPQUFPLEtBQUssQ0FBQyxJQUFJOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBQyxJQUFJLElBQUksQ0FBQztJQUNoRCxDQUFDOzs7OztJQUtELGtCQUFrQjtRQUNoQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUNqRCxDQUFDOzs7OztJQUtELG1CQUFtQjtRQUNqQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUNsRCxDQUFDOzs7OztJQUtELHNCQUFzQjtRQUNwQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUNyRCxDQUFDOzs7OztJQUtELG1CQUFtQjtRQUNqQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUNsRCxDQUFDOzs7OztJQUtELGtCQUFrQjtRQUNoQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0NBQ0Y7OztJQWpGYSxtQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IE56VHJlZU5vZGUgfSBmcm9tICcuL256LXRyZWUtYmFzZS1ub2RlJztcclxuaW1wb3J0IHsgTnpUcmVlQmFzZVNlcnZpY2UgfSBmcm9tICcuL256LXRyZWUtYmFzZS5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBOelRyZWVCYXNlIHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbnpUcmVlU2VydmljZTogTnpUcmVlQmFzZVNlcnZpY2UpIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvZXJjZXMgYSB2YWx1ZSh7QGxpbmsgYW55W119KSB0byBhIFRyZWVOb2Rlcyh7QGxpbmsgTnpUcmVlTm9kZVtdfSlcclxuICAgKi9cclxuICBjb2VyY2VUcmVlTm9kZXMoXHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgICB2YWx1ZTogYW55W11cclxuICApOiBOelRyZWVOb2RlW10ge1xyXG4gICAgbGV0IG5vZGVzOiBOelRyZWVOb2RlW10gPSBbXTtcclxuICAgIGlmICghdGhpcy5uelRyZWVTZXJ2aWNlLmlzQXJyYXlPZk56VHJlZU5vZGUodmFsdWUpKSB7XHJcbiAgICAgIC8vIGhhcyBub3QgYmVlbiBuZXcgTnpUcmVlTm9kZVxyXG4gICAgICBub2RlcyA9IHZhbHVlLm1hcChpdGVtID0+IG5ldyBOelRyZWVOb2RlKGl0ZW0sIG51bGwsIHRoaXMubnpUcmVlU2VydmljZSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbm9kZXMgPSB2YWx1ZS5tYXAoKGl0ZW06IE56VHJlZU5vZGUpID0+IHtcclxuICAgICAgICBpdGVtLnNlcnZpY2UgPSB0aGlzLm56VHJlZVNlcnZpY2U7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5vZGVzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGFsbCBub2Rlcyh7QGxpbmsgTnpUcmVlTm9kZX0pXHJcbiAgICovXHJcbiAgZ2V0VHJlZU5vZGVzKCk6IE56VHJlZU5vZGVbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5uelRyZWVTZXJ2aWNlLnJvb3ROb2RlcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCB7QGxpbmsgTnpUcmVlTm9kZX0gd2l0aCBrZXlcclxuICAgKi9cclxuICBnZXRUcmVlTm9kZUJ5S2V5KGtleTogc3RyaW5nKTogTnpUcmVlTm9kZSB8IG51bGwge1xyXG4gICAgLy8gZmxhdCB0cmVlIG5vZGVzXHJcbiAgICBjb25zdCBub2RlczogTnpUcmVlTm9kZVtdID0gW107XHJcbiAgICBjb25zdCBnZXROb2RlID0gKG5vZGU6IE56VHJlZU5vZGUpOiB2b2lkID0+IHtcclxuICAgICAgbm9kZXMucHVzaChub2RlKTtcclxuICAgICAgbm9kZS5nZXRDaGlsZHJlbigpLmZvckVhY2gobiA9PiB7XHJcbiAgICAgICAgZ2V0Tm9kZShuKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5nZXRUcmVlTm9kZXMoKS5mb3JFYWNoKG4gPT4ge1xyXG4gICAgICBnZXROb2RlKG4pO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gbm9kZXMuZmluZChuID0+IG4ua2V5ID09PSBrZXkpIHx8IG51bGw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgY2hlY2tlZCBub2RlcyhtZXJnZWQpXHJcbiAgICovXHJcbiAgZ2V0Q2hlY2tlZE5vZGVMaXN0KCk6IE56VHJlZU5vZGVbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5uelRyZWVTZXJ2aWNlLmdldENoZWNrZWROb2RlTGlzdCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHNlbGVjdGVkIG5vZGVzXHJcbiAgICovXHJcbiAgZ2V0U2VsZWN0ZWROb2RlTGlzdCgpOiBOelRyZWVOb2RlW10ge1xyXG4gICAgcmV0dXJuIHRoaXMubnpUcmVlU2VydmljZS5nZXRTZWxlY3RlZE5vZGVMaXN0KCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgaGFsZiBjaGVja2VkIG5vZGVzXHJcbiAgICovXHJcbiAgZ2V0SGFsZkNoZWNrZWROb2RlTGlzdCgpOiBOelRyZWVOb2RlW10ge1xyXG4gICAgcmV0dXJuIHRoaXMubnpUcmVlU2VydmljZS5nZXRIYWxmQ2hlY2tlZE5vZGVMaXN0KCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgZXhwYW5kZWQgbm9kZXNcclxuICAgKi9cclxuICBnZXRFeHBhbmRlZE5vZGVMaXN0KCk6IE56VHJlZU5vZGVbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5uelRyZWVTZXJ2aWNlLmdldEV4cGFuZGVkTm9kZUxpc3QoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBtYXRjaGVkIG5vZGVzKGlmIG56U2VhcmNoVmFsdWUgaXMgbm90IG51bGwpXHJcbiAgICovXHJcbiAgZ2V0TWF0Y2hlZE5vZGVMaXN0KCk6IE56VHJlZU5vZGVbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5uelRyZWVTZXJ2aWNlLmdldE1hdGNoZWROb2RlTGlzdCgpO1xyXG4gIH1cclxufVxyXG4iXX0=