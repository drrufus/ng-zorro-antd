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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS1iYXNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsidHJlZS9uei10cmVlLWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFHakQsTUFBTSxPQUFPLFVBQVU7Ozs7SUFDckIsWUFBbUIsYUFBZ0M7UUFBaEMsa0JBQWEsR0FBYixhQUFhLENBQW1CO0lBQUcsQ0FBQzs7Ozs7O0lBS3ZELGVBQWU7SUFDYixrQ0FBa0M7SUFDbEMsS0FBWTs7WUFFUixLQUFLLEdBQWlCLEVBQUU7UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbEQsOEJBQThCO1lBQzlCLEtBQUssR0FBRyxLQUFLLENBQUMsR0FBRzs7OztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUMsQ0FBQztTQUMzRTthQUFNO1lBQ0wsS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHOzs7O1lBQUMsQ0FBQyxJQUFnQixFQUFFLEVBQUU7Z0JBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztnQkFDbEMsT0FBTyxJQUFJLENBQUM7WUFDZCxDQUFDLEVBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7OztJQUtELFlBQVk7UUFDVixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDO0lBQ3RDLENBQUM7Ozs7OztJQUtELGdCQUFnQixDQUFDLEdBQVc7OztjQUVwQixLQUFLLEdBQWlCLEVBQUU7O2NBQ3hCLE9BQU87Ozs7UUFBRyxDQUFDLElBQWdCLEVBQVEsRUFBRTtZQUN6QyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzdCLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNiLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFBO1FBQ0QsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLENBQUMsRUFBRTtZQUM5QixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDYixDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sS0FBSyxDQUFDLElBQUk7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFDLElBQUksSUFBSSxDQUFDO0lBQ2hELENBQUM7Ozs7O0lBS0Qsa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQ2pELENBQUM7Ozs7O0lBS0QsbUJBQW1CO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQ2xELENBQUM7Ozs7O0lBS0Qsc0JBQXNCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0lBQ3JELENBQUM7Ozs7O0lBS0QsbUJBQW1CO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQ2xELENBQUM7Ozs7O0lBS0Qsa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQ2pELENBQUM7Q0FDRjs7O0lBakZhLG1DQUF1QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgTnpUcmVlTm9kZSB9IGZyb20gJy4vbnotdHJlZS1iYXNlLW5vZGUnO1xyXG5pbXBvcnQgeyBOelRyZWVCYXNlU2VydmljZSB9IGZyb20gJy4vbnotdHJlZS1iYXNlLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE56VHJlZUJhc2Uge1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuelRyZWVTZXJ2aWNlOiBOelRyZWVCYXNlU2VydmljZSkge31cclxuXHJcbiAgLyoqXHJcbiAgICogQ29lcmNlcyBhIHZhbHVlKHtAbGluayBhbnlbXX0pIHRvIGEgVHJlZU5vZGVzKHtAbGluayBOelRyZWVOb2RlW119KVxyXG4gICAqL1xyXG4gIGNvZXJjZVRyZWVOb2RlcyhcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICAgIHZhbHVlOiBhbnlbXVxyXG4gICk6IE56VHJlZU5vZGVbXSB7XHJcbiAgICBsZXQgbm9kZXM6IE56VHJlZU5vZGVbXSA9IFtdO1xyXG4gICAgaWYgKCF0aGlzLm56VHJlZVNlcnZpY2UuaXNBcnJheU9mTnpUcmVlTm9kZSh2YWx1ZSkpIHtcclxuICAgICAgLy8gaGFzIG5vdCBiZWVuIG5ldyBOelRyZWVOb2RlXHJcbiAgICAgIG5vZGVzID0gdmFsdWUubWFwKGl0ZW0gPT4gbmV3IE56VHJlZU5vZGUoaXRlbSwgbnVsbCwgdGhpcy5uelRyZWVTZXJ2aWNlKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBub2RlcyA9IHZhbHVlLm1hcCgoaXRlbTogTnpUcmVlTm9kZSkgPT4ge1xyXG4gICAgICAgIGl0ZW0uc2VydmljZSA9IHRoaXMubnpUcmVlU2VydmljZTtcclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbm9kZXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgYWxsIG5vZGVzKHtAbGluayBOelRyZWVOb2RlfSlcclxuICAgKi9cclxuICBnZXRUcmVlTm9kZXMoKTogTnpUcmVlTm9kZVtdIHtcclxuICAgIHJldHVybiB0aGlzLm56VHJlZVNlcnZpY2Uucm9vdE5vZGVzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHtAbGluayBOelRyZWVOb2RlfSB3aXRoIGtleVxyXG4gICAqL1xyXG4gIGdldFRyZWVOb2RlQnlLZXkoa2V5OiBzdHJpbmcpOiBOelRyZWVOb2RlIHwgbnVsbCB7XHJcbiAgICAvLyBmbGF0IHRyZWUgbm9kZXNcclxuICAgIGNvbnN0IG5vZGVzOiBOelRyZWVOb2RlW10gPSBbXTtcclxuICAgIGNvbnN0IGdldE5vZGUgPSAobm9kZTogTnpUcmVlTm9kZSk6IHZvaWQgPT4ge1xyXG4gICAgICBub2Rlcy5wdXNoKG5vZGUpO1xyXG4gICAgICBub2RlLmdldENoaWxkcmVuKCkuZm9yRWFjaChuID0+IHtcclxuICAgICAgICBnZXROb2RlKG4pO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgICB0aGlzLmdldFRyZWVOb2RlcygpLmZvckVhY2gobiA9PiB7XHJcbiAgICAgIGdldE5vZGUobik7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBub2Rlcy5maW5kKG4gPT4gbi5rZXkgPT09IGtleSkgfHwgbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBjaGVja2VkIG5vZGVzKG1lcmdlZClcclxuICAgKi9cclxuICBnZXRDaGVja2VkTm9kZUxpc3QoKTogTnpUcmVlTm9kZVtdIHtcclxuICAgIHJldHVybiB0aGlzLm56VHJlZVNlcnZpY2UuZ2V0Q2hlY2tlZE5vZGVMaXN0KCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgc2VsZWN0ZWQgbm9kZXNcclxuICAgKi9cclxuICBnZXRTZWxlY3RlZE5vZGVMaXN0KCk6IE56VHJlZU5vZGVbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5uelRyZWVTZXJ2aWNlLmdldFNlbGVjdGVkTm9kZUxpc3QoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBoYWxmIGNoZWNrZWQgbm9kZXNcclxuICAgKi9cclxuICBnZXRIYWxmQ2hlY2tlZE5vZGVMaXN0KCk6IE56VHJlZU5vZGVbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5uelRyZWVTZXJ2aWNlLmdldEhhbGZDaGVja2VkTm9kZUxpc3QoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBleHBhbmRlZCBub2Rlc1xyXG4gICAqL1xyXG4gIGdldEV4cGFuZGVkTm9kZUxpc3QoKTogTnpUcmVlTm9kZVtdIHtcclxuICAgIHJldHVybiB0aGlzLm56VHJlZVNlcnZpY2UuZ2V0RXhwYW5kZWROb2RlTGlzdCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IG1hdGNoZWQgbm9kZXMoaWYgbnpTZWFyY2hWYWx1ZSBpcyBub3QgbnVsbClcclxuICAgKi9cclxuICBnZXRNYXRjaGVkTm9kZUxpc3QoKTogTnpUcmVlTm9kZVtdIHtcclxuICAgIHJldHVybiB0aGlzLm56VHJlZVNlcnZpY2UuZ2V0TWF0Y2hlZE5vZGVMaXN0KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==