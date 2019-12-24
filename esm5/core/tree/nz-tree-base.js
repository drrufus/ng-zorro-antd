/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { NzTreeNode } from './nz-tree-base-node';
var NzTreeBase = /** @class */ (function () {
    function NzTreeBase(nzTreeService) {
        this.nzTreeService = nzTreeService;
    }
    /**
     * Coerces a value({@link any[]}) to a TreeNodes({@link NzTreeNode[]})
     */
    NzTreeBase.prototype.coerceTreeNodes = function (
    // tslint:disable-next-line:no-any
    value) {
        var _this = this;
        var nodes = [];
        if (!this.nzTreeService.isArrayOfNzTreeNode(value)) {
            // has not been new NzTreeNode
            nodes = value.map(function (item) { return new NzTreeNode(item, null, _this.nzTreeService); });
        }
        else {
            nodes = value.map(function (item) {
                item.service = _this.nzTreeService;
                return item;
            });
        }
        return nodes;
    };
    /**
     * Get all nodes({@link NzTreeNode})
     */
    NzTreeBase.prototype.getTreeNodes = function () {
        return this.nzTreeService.rootNodes;
    };
    /**
     * Get {@link NzTreeNode} with key
     */
    NzTreeBase.prototype.getTreeNodeByKey = function (key) {
        // flat tree nodes
        var nodes = [];
        var getNode = function (node) {
            nodes.push(node);
            node.getChildren().forEach(function (n) {
                getNode(n);
            });
        };
        this.getTreeNodes().forEach(function (n) {
            getNode(n);
        });
        return nodes.find(function (n) { return n.key === key; }) || null;
    };
    /**
     * Get checked nodes(merged)
     */
    NzTreeBase.prototype.getCheckedNodeList = function () {
        return this.nzTreeService.getCheckedNodeList();
    };
    /**
     * Get selected nodes
     */
    NzTreeBase.prototype.getSelectedNodeList = function () {
        return this.nzTreeService.getSelectedNodeList();
    };
    /**
     * Get half checked nodes
     */
    NzTreeBase.prototype.getHalfCheckedNodeList = function () {
        return this.nzTreeService.getHalfCheckedNodeList();
    };
    /**
     * Get expanded nodes
     */
    NzTreeBase.prototype.getExpandedNodeList = function () {
        return this.nzTreeService.getExpandedNodeList();
    };
    /**
     * Get matched nodes(if nzSearchValue is not null)
     */
    NzTreeBase.prototype.getMatchedNodeList = function () {
        return this.nzTreeService.getMatchedNodeList();
    };
    return NzTreeBase;
}());
export { NzTreeBase };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS1iYXNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsidHJlZS9uei10cmVlLWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBR2pEO0lBQ0Usb0JBQW1CLGFBQWdDO1FBQWhDLGtCQUFhLEdBQWIsYUFBYSxDQUFtQjtJQUFHLENBQUM7SUFFdkQ7O09BRUc7SUFDSCxvQ0FBZSxHQUFmO0lBQ0Usa0NBQWtDO0lBQ2xDLEtBQVk7UUFGZCxpQkFlQztRQVhDLElBQUksS0FBSyxHQUFpQixFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbEQsOEJBQThCO1lBQzlCLEtBQUssR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFJLENBQUMsYUFBYSxDQUFDLEVBQTlDLENBQThDLENBQUMsQ0FBQztTQUMzRTthQUFNO1lBQ0wsS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFnQjtnQkFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDO2dCQUNsQyxPQUFPLElBQUksQ0FBQztZQUNkLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRDs7T0FFRztJQUNILGlDQUFZLEdBQVo7UUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDO0lBQ3RDLENBQUM7SUFFRDs7T0FFRztJQUNILHFDQUFnQixHQUFoQixVQUFpQixHQUFXO1FBQzFCLGtCQUFrQjtRQUNsQixJQUFNLEtBQUssR0FBaUIsRUFBRSxDQUFDO1FBQy9CLElBQU0sT0FBTyxHQUFHLFVBQUMsSUFBZ0I7WUFDL0IsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztnQkFDMUIsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2IsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUM7UUFDRixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztZQUMzQixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDYixDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFiLENBQWEsQ0FBQyxJQUFJLElBQUksQ0FBQztJQUNoRCxDQUFDO0lBRUQ7O09BRUc7SUFDSCx1Q0FBa0IsR0FBbEI7UUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBRUQ7O09BRUc7SUFDSCx3Q0FBbUIsR0FBbkI7UUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUNsRCxDQUFDO0lBRUQ7O09BRUc7SUFDSCwyQ0FBc0IsR0FBdEI7UUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUNyRCxDQUFDO0lBRUQ7O09BRUc7SUFDSCx3Q0FBbUIsR0FBbkI7UUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUNsRCxDQUFDO0lBRUQ7O09BRUc7SUFDSCx1Q0FBa0IsR0FBbEI7UUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDLEFBbEZELElBa0ZDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBOelRyZWVOb2RlIH0gZnJvbSAnLi9uei10cmVlLWJhc2Utbm9kZSc7XHJcbmltcG9ydCB7IE56VHJlZUJhc2VTZXJ2aWNlIH0gZnJvbSAnLi9uei10cmVlLWJhc2Uuc2VydmljZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTnpUcmVlQmFzZSB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIG56VHJlZVNlcnZpY2U6IE56VHJlZUJhc2VTZXJ2aWNlKSB7fVxyXG5cclxuICAvKipcclxuICAgKiBDb2VyY2VzIGEgdmFsdWUoe0BsaW5rIGFueVtdfSkgdG8gYSBUcmVlTm9kZXMoe0BsaW5rIE56VHJlZU5vZGVbXX0pXHJcbiAgICovXHJcbiAgY29lcmNlVHJlZU5vZGVzKFxyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gICAgdmFsdWU6IGFueVtdXHJcbiAgKTogTnpUcmVlTm9kZVtdIHtcclxuICAgIGxldCBub2RlczogTnpUcmVlTm9kZVtdID0gW107XHJcbiAgICBpZiAoIXRoaXMubnpUcmVlU2VydmljZS5pc0FycmF5T2ZOelRyZWVOb2RlKHZhbHVlKSkge1xyXG4gICAgICAvLyBoYXMgbm90IGJlZW4gbmV3IE56VHJlZU5vZGVcclxuICAgICAgbm9kZXMgPSB2YWx1ZS5tYXAoaXRlbSA9PiBuZXcgTnpUcmVlTm9kZShpdGVtLCBudWxsLCB0aGlzLm56VHJlZVNlcnZpY2UpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5vZGVzID0gdmFsdWUubWFwKChpdGVtOiBOelRyZWVOb2RlKSA9PiB7XHJcbiAgICAgICAgaXRlbS5zZXJ2aWNlID0gdGhpcy5uelRyZWVTZXJ2aWNlO1xyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBub2RlcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBhbGwgbm9kZXMoe0BsaW5rIE56VHJlZU5vZGV9KVxyXG4gICAqL1xyXG4gIGdldFRyZWVOb2RlcygpOiBOelRyZWVOb2RlW10ge1xyXG4gICAgcmV0dXJuIHRoaXMubnpUcmVlU2VydmljZS5yb290Tm9kZXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQge0BsaW5rIE56VHJlZU5vZGV9IHdpdGgga2V5XHJcbiAgICovXHJcbiAgZ2V0VHJlZU5vZGVCeUtleShrZXk6IHN0cmluZyk6IE56VHJlZU5vZGUgfCBudWxsIHtcclxuICAgIC8vIGZsYXQgdHJlZSBub2Rlc1xyXG4gICAgY29uc3Qgbm9kZXM6IE56VHJlZU5vZGVbXSA9IFtdO1xyXG4gICAgY29uc3QgZ2V0Tm9kZSA9IChub2RlOiBOelRyZWVOb2RlKTogdm9pZCA9PiB7XHJcbiAgICAgIG5vZGVzLnB1c2gobm9kZSk7XHJcbiAgICAgIG5vZGUuZ2V0Q2hpbGRyZW4oKS5mb3JFYWNoKG4gPT4ge1xyXG4gICAgICAgIGdldE5vZGUobik7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHRoaXMuZ2V0VHJlZU5vZGVzKCkuZm9yRWFjaChuID0+IHtcclxuICAgICAgZ2V0Tm9kZShuKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG5vZGVzLmZpbmQobiA9PiBuLmtleSA9PT0ga2V5KSB8fCBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGNoZWNrZWQgbm9kZXMobWVyZ2VkKVxyXG4gICAqL1xyXG4gIGdldENoZWNrZWROb2RlTGlzdCgpOiBOelRyZWVOb2RlW10ge1xyXG4gICAgcmV0dXJuIHRoaXMubnpUcmVlU2VydmljZS5nZXRDaGVja2VkTm9kZUxpc3QoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBzZWxlY3RlZCBub2Rlc1xyXG4gICAqL1xyXG4gIGdldFNlbGVjdGVkTm9kZUxpc3QoKTogTnpUcmVlTm9kZVtdIHtcclxuICAgIHJldHVybiB0aGlzLm56VHJlZVNlcnZpY2UuZ2V0U2VsZWN0ZWROb2RlTGlzdCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGhhbGYgY2hlY2tlZCBub2Rlc1xyXG4gICAqL1xyXG4gIGdldEhhbGZDaGVja2VkTm9kZUxpc3QoKTogTnpUcmVlTm9kZVtdIHtcclxuICAgIHJldHVybiB0aGlzLm56VHJlZVNlcnZpY2UuZ2V0SGFsZkNoZWNrZWROb2RlTGlzdCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGV4cGFuZGVkIG5vZGVzXHJcbiAgICovXHJcbiAgZ2V0RXhwYW5kZWROb2RlTGlzdCgpOiBOelRyZWVOb2RlW10ge1xyXG4gICAgcmV0dXJuIHRoaXMubnpUcmVlU2VydmljZS5nZXRFeHBhbmRlZE5vZGVMaXN0KCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgbWF0Y2hlZCBub2RlcyhpZiBuelNlYXJjaFZhbHVlIGlzIG5vdCBudWxsKVxyXG4gICAqL1xyXG4gIGdldE1hdGNoZWROb2RlTGlzdCgpOiBOelRyZWVOb2RlW10ge1xyXG4gICAgcmV0dXJuIHRoaXMubnpUcmVlU2VydmljZS5nZXRNYXRjaGVkTm9kZUxpc3QoKTtcclxuICB9XHJcbn1cclxuIl19