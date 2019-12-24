/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { NzTreeNode } from './nz-tree-base-node';
export class NzTreeBase {
    constructor(nzTreeService) {
        this.nzTreeService = nzTreeService;
    }
    /**
     * Coerces a value({@link any[]}) to a TreeNodes({@link NzTreeNode[]})
     */
    coerceTreeNodes(
    // tslint:disable-next-line:no-any
    value) {
        let nodes = [];
        if (!this.nzTreeService.isArrayOfNzTreeNode(value)) {
            // has not been new NzTreeNode
            nodes = value.map(item => new NzTreeNode(item, null, this.nzTreeService));
        }
        else {
            nodes = value.map((item) => {
                item.service = this.nzTreeService;
                return item;
            });
        }
        return nodes;
    }
    /**
     * Get all nodes({@link NzTreeNode})
     */
    getTreeNodes() {
        return this.nzTreeService.rootNodes;
    }
    /**
     * Get {@link NzTreeNode} with key
     */
    getTreeNodeByKey(key) {
        // flat tree nodes
        const nodes = [];
        const getNode = (node) => {
            nodes.push(node);
            node.getChildren().forEach(n => {
                getNode(n);
            });
        };
        this.getTreeNodes().forEach(n => {
            getNode(n);
        });
        return nodes.find(n => n.key === key) || null;
    }
    /**
     * Get checked nodes(merged)
     */
    getCheckedNodeList() {
        return this.nzTreeService.getCheckedNodeList();
    }
    /**
     * Get selected nodes
     */
    getSelectedNodeList() {
        return this.nzTreeService.getSelectedNodeList();
    }
    /**
     * Get half checked nodes
     */
    getHalfCheckedNodeList() {
        return this.nzTreeService.getHalfCheckedNodeList();
    }
    /**
     * Get expanded nodes
     */
    getExpandedNodeList() {
        return this.nzTreeService.getExpandedNodeList();
    }
    /**
     * Get matched nodes(if nzSearchValue is not null)
     */
    getMatchedNodeList() {
        return this.nzTreeService.getMatchedNodeList();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS1iYXNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsidHJlZS9uei10cmVlLWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBR2pELE1BQU0sT0FBTyxVQUFVO0lBQ3JCLFlBQW1CLGFBQWdDO1FBQWhDLGtCQUFhLEdBQWIsYUFBYSxDQUFtQjtJQUFHLENBQUM7SUFFdkQ7O09BRUc7SUFDSCxlQUFlO0lBQ2Isa0NBQWtDO0lBQ2xDLEtBQVk7UUFFWixJQUFJLEtBQUssR0FBaUIsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2xELDhCQUE4QjtZQUM5QixLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7U0FDM0U7YUFBTTtZQUNMLEtBQUssR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBZ0IsRUFBRSxFQUFFO2dCQUNyQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7Z0JBQ2xDLE9BQU8sSUFBSSxDQUFDO1lBQ2QsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVEOztPQUVHO0lBQ0gsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7SUFDdEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsZ0JBQWdCLENBQUMsR0FBVztRQUMxQixrQkFBa0I7UUFDbEIsTUFBTSxLQUFLLEdBQWlCLEVBQUUsQ0FBQztRQUMvQixNQUFNLE9BQU8sR0FBRyxDQUFDLElBQWdCLEVBQVEsRUFBRTtZQUN6QyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzdCLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNiLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUM5QixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDYixDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDO0lBQ2hELENBQUM7SUFFRDs7T0FFRztJQUNILGtCQUFrQjtRQUNoQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxtQkFBbUI7UUFDakIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDbEQsQ0FBQztJQUVEOztPQUVHO0lBQ0gsc0JBQXNCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0lBQ3JELENBQUM7SUFFRDs7T0FFRztJQUNILG1CQUFtQjtRQUNqQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUNsRCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxrQkFBa0I7UUFDaEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDakQsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBOelRyZWVOb2RlIH0gZnJvbSAnLi9uei10cmVlLWJhc2Utbm9kZSc7XHJcbmltcG9ydCB7IE56VHJlZUJhc2VTZXJ2aWNlIH0gZnJvbSAnLi9uei10cmVlLWJhc2Uuc2VydmljZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTnpUcmVlQmFzZSB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIG56VHJlZVNlcnZpY2U6IE56VHJlZUJhc2VTZXJ2aWNlKSB7fVxyXG5cclxuICAvKipcclxuICAgKiBDb2VyY2VzIGEgdmFsdWUoe0BsaW5rIGFueVtdfSkgdG8gYSBUcmVlTm9kZXMoe0BsaW5rIE56VHJlZU5vZGVbXX0pXHJcbiAgICovXHJcbiAgY29lcmNlVHJlZU5vZGVzKFxyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gICAgdmFsdWU6IGFueVtdXHJcbiAgKTogTnpUcmVlTm9kZVtdIHtcclxuICAgIGxldCBub2RlczogTnpUcmVlTm9kZVtdID0gW107XHJcbiAgICBpZiAoIXRoaXMubnpUcmVlU2VydmljZS5pc0FycmF5T2ZOelRyZWVOb2RlKHZhbHVlKSkge1xyXG4gICAgICAvLyBoYXMgbm90IGJlZW4gbmV3IE56VHJlZU5vZGVcclxuICAgICAgbm9kZXMgPSB2YWx1ZS5tYXAoaXRlbSA9PiBuZXcgTnpUcmVlTm9kZShpdGVtLCBudWxsLCB0aGlzLm56VHJlZVNlcnZpY2UpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5vZGVzID0gdmFsdWUubWFwKChpdGVtOiBOelRyZWVOb2RlKSA9PiB7XHJcbiAgICAgICAgaXRlbS5zZXJ2aWNlID0gdGhpcy5uelRyZWVTZXJ2aWNlO1xyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBub2RlcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBhbGwgbm9kZXMoe0BsaW5rIE56VHJlZU5vZGV9KVxyXG4gICAqL1xyXG4gIGdldFRyZWVOb2RlcygpOiBOelRyZWVOb2RlW10ge1xyXG4gICAgcmV0dXJuIHRoaXMubnpUcmVlU2VydmljZS5yb290Tm9kZXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQge0BsaW5rIE56VHJlZU5vZGV9IHdpdGgga2V5XHJcbiAgICovXHJcbiAgZ2V0VHJlZU5vZGVCeUtleShrZXk6IHN0cmluZyk6IE56VHJlZU5vZGUgfCBudWxsIHtcclxuICAgIC8vIGZsYXQgdHJlZSBub2Rlc1xyXG4gICAgY29uc3Qgbm9kZXM6IE56VHJlZU5vZGVbXSA9IFtdO1xyXG4gICAgY29uc3QgZ2V0Tm9kZSA9IChub2RlOiBOelRyZWVOb2RlKTogdm9pZCA9PiB7XHJcbiAgICAgIG5vZGVzLnB1c2gobm9kZSk7XHJcbiAgICAgIG5vZGUuZ2V0Q2hpbGRyZW4oKS5mb3JFYWNoKG4gPT4ge1xyXG4gICAgICAgIGdldE5vZGUobik7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHRoaXMuZ2V0VHJlZU5vZGVzKCkuZm9yRWFjaChuID0+IHtcclxuICAgICAgZ2V0Tm9kZShuKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG5vZGVzLmZpbmQobiA9PiBuLmtleSA9PT0ga2V5KSB8fCBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGNoZWNrZWQgbm9kZXMobWVyZ2VkKVxyXG4gICAqL1xyXG4gIGdldENoZWNrZWROb2RlTGlzdCgpOiBOelRyZWVOb2RlW10ge1xyXG4gICAgcmV0dXJuIHRoaXMubnpUcmVlU2VydmljZS5nZXRDaGVja2VkTm9kZUxpc3QoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBzZWxlY3RlZCBub2Rlc1xyXG4gICAqL1xyXG4gIGdldFNlbGVjdGVkTm9kZUxpc3QoKTogTnpUcmVlTm9kZVtdIHtcclxuICAgIHJldHVybiB0aGlzLm56VHJlZVNlcnZpY2UuZ2V0U2VsZWN0ZWROb2RlTGlzdCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGhhbGYgY2hlY2tlZCBub2Rlc1xyXG4gICAqL1xyXG4gIGdldEhhbGZDaGVja2VkTm9kZUxpc3QoKTogTnpUcmVlTm9kZVtdIHtcclxuICAgIHJldHVybiB0aGlzLm56VHJlZVNlcnZpY2UuZ2V0SGFsZkNoZWNrZWROb2RlTGlzdCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGV4cGFuZGVkIG5vZGVzXHJcbiAgICovXHJcbiAgZ2V0RXhwYW5kZWROb2RlTGlzdCgpOiBOelRyZWVOb2RlW10ge1xyXG4gICAgcmV0dXJuIHRoaXMubnpUcmVlU2VydmljZS5nZXRFeHBhbmRlZE5vZGVMaXN0KCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgbWF0Y2hlZCBub2RlcyhpZiBuelNlYXJjaFZhbHVlIGlzIG5vdCBudWxsKVxyXG4gICAqL1xyXG4gIGdldE1hdGNoZWROb2RlTGlzdCgpOiBOelRyZWVOb2RlW10ge1xyXG4gICAgcmV0dXJuIHRoaXMubnpUcmVlU2VydmljZS5nZXRNYXRjaGVkTm9kZUxpc3QoKTtcclxuICB9XHJcbn1cclxuIl19