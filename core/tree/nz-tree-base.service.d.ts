/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { NzTreeNode } from './nz-tree-base-node';
import { NzFormatEmitEvent } from './nz-tree-base.definitions';
import * as ɵngcc0 from '@angular/core';
export declare class NzTreeBaseService implements OnDestroy {
    DRAG_SIDE_RANGE: number;
    DRAG_MIN_GAP: number;
    isCheckStrictly: boolean;
    isMultiple: boolean;
    selectedNode: NzTreeNode;
    rootNodes: NzTreeNode[];
    selectedNodeList: NzTreeNode[];
    expandedNodeList: NzTreeNode[];
    checkedNodeList: NzTreeNode[];
    halfCheckedNodeList: NzTreeNode[];
    matchedNodeList: NzTreeNode[];
    triggerEventChange$: Subject<NzFormatEmitEvent>;
    /**
     * trigger event
     */
    eventTriggerChanged(): Observable<NzFormatEmitEvent>;
    /**
     * reset tree nodes will clear default node list
     */
    initTree(nzNodes: NzTreeNode[]): void;
    getSelectedNode(): NzTreeNode | null;
    /**
     * get some list
     */
    getSelectedNodeList(): NzTreeNode[];
    /**
     * return checked nodes
     */
    getCheckedNodeList(): NzTreeNode[];
    getHalfCheckedNodeList(): NzTreeNode[];
    /**
     * return expanded nodes
     */
    getExpandedNodeList(): NzTreeNode[];
    /**
     * return search matched nodes
     */
    getMatchedNodeList(): NzTreeNode[];
    isArrayOfNzTreeNode(value: any[]): boolean;
    /**
     * reset selectedNodeList
     */
    calcSelectedKeys(selectedKeys: string[], nzNodes: NzTreeNode[], isMulti?: boolean): void;
    /**
     * reset expandedNodeList
     */
    calcExpandedKeys(expandedKeys: string[], nzNodes: NzTreeNode[]): void;
    /**
     * reset checkedNodeList
     */
    calcCheckedKeys(checkedKeys: string[], nzNodes: NzTreeNode[], isCheckStrictly?: boolean): void;
    /**
     * set drag node
     */
    setSelectedNode(node: NzTreeNode): void;
    /**
     * set node selected status
     */
    setNodeActive(node: NzTreeNode): void;
    /**
     * add or remove node to selectedNodeList
     */
    setSelectedNodeList(node: NzTreeNode, isMultiple?: boolean): void;
    /**
     * merge checked nodes
     */
    setHalfCheckedNodeList(node: NzTreeNode): void;
    setCheckedNodeList(node: NzTreeNode): void;
    /**
     * conduct checked/selected/expanded keys
     */
    conductNodeState(type?: string): NzTreeNode[];
    /**
     * set expanded nodes
     */
    setExpandedNodeList(node: NzTreeNode): void;
    /**
     * check state
     * @param isCheckStrictly
     */
    refreshCheckState(isCheckStrictly?: boolean): void;
    conduct(node: NzTreeNode): void;
    /**
     * 1、children half checked
     * 2、children all checked, parent checked
     * 3、no children checked
     */
    conductUp(node: NzTreeNode): void;
    /**
     * reset child check state
     */
    conductDown(node: NzTreeNode, value: boolean): void;
    /**
     * search value & expand node
     * should add expandlist
     */
    searchExpand(value: string): void;
    /**
     * flush after delete node
     */
    afterRemove(nodes: NzTreeNode[]): void;
    /**
     * drag event
     */
    refreshDragNode(node: NzTreeNode): void;
    resetNodeLevel(node: NzTreeNode): void;
    calcDropPosition(event: DragEvent): number;
    /**
     * drop
     * 0: inner -1: pre 1: next
     */
    dropAndApply(targetNode: NzTreeNode, dragPos?: number): void;
    /**
     * emit Structure
     * eventName
     * node
     * event: MouseEvent / DragEvent
     * dragNode
     */
    formatEvent(eventName: string, node: NzTreeNode | null, event: MouseEvent | DragEvent | null): NzFormatEmitEvent;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzTreeBaseService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NzTreeBaseService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS1iYXNlLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsibnotdHJlZS1iYXNlLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwSEEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTnpUcmVlTm9kZSB9IGZyb20gJy4vbnotdHJlZS1iYXNlLW5vZGUnO1xyXG5pbXBvcnQgeyBOekZvcm1hdEVtaXRFdmVudCB9IGZyb20gJy4vbnotdHJlZS1iYXNlLmRlZmluaXRpb25zJztcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTnpUcmVlQmFzZVNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gICAgRFJBR19TSURFX1JBTkdFOiBudW1iZXI7XHJcbiAgICBEUkFHX01JTl9HQVA6IG51bWJlcjtcclxuICAgIGlzQ2hlY2tTdHJpY3RseTogYm9vbGVhbjtcclxuICAgIGlzTXVsdGlwbGU6IGJvb2xlYW47XHJcbiAgICBzZWxlY3RlZE5vZGU6IE56VHJlZU5vZGU7XHJcbiAgICByb290Tm9kZXM6IE56VHJlZU5vZGVbXTtcclxuICAgIHNlbGVjdGVkTm9kZUxpc3Q6IE56VHJlZU5vZGVbXTtcclxuICAgIGV4cGFuZGVkTm9kZUxpc3Q6IE56VHJlZU5vZGVbXTtcclxuICAgIGNoZWNrZWROb2RlTGlzdDogTnpUcmVlTm9kZVtdO1xyXG4gICAgaGFsZkNoZWNrZWROb2RlTGlzdDogTnpUcmVlTm9kZVtdO1xyXG4gICAgbWF0Y2hlZE5vZGVMaXN0OiBOelRyZWVOb2RlW107XHJcbiAgICB0cmlnZ2VyRXZlbnRDaGFuZ2UkOiBTdWJqZWN0PE56Rm9ybWF0RW1pdEV2ZW50PjtcclxuICAgIC8qKlxyXG4gICAgICogdHJpZ2dlciBldmVudFxyXG4gICAgICovXHJcbiAgICBldmVudFRyaWdnZXJDaGFuZ2VkKCk6IE9ic2VydmFibGU8TnpGb3JtYXRFbWl0RXZlbnQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiByZXNldCB0cmVlIG5vZGVzIHdpbGwgY2xlYXIgZGVmYXVsdCBub2RlIGxpc3RcclxuICAgICAqL1xyXG4gICAgaW5pdFRyZWUobnpOb2RlczogTnpUcmVlTm9kZVtdKTogdm9pZDtcclxuICAgIGdldFNlbGVjdGVkTm9kZSgpOiBOelRyZWVOb2RlIHwgbnVsbDtcclxuICAgIC8qKlxyXG4gICAgICogZ2V0IHNvbWUgbGlzdFxyXG4gICAgICovXHJcbiAgICBnZXRTZWxlY3RlZE5vZGVMaXN0KCk6IE56VHJlZU5vZGVbXTtcclxuICAgIC8qKlxyXG4gICAgICogcmV0dXJuIGNoZWNrZWQgbm9kZXNcclxuICAgICAqL1xyXG4gICAgZ2V0Q2hlY2tlZE5vZGVMaXN0KCk6IE56VHJlZU5vZGVbXTtcclxuICAgIGdldEhhbGZDaGVja2VkTm9kZUxpc3QoKTogTnpUcmVlTm9kZVtdO1xyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm4gZXhwYW5kZWQgbm9kZXNcclxuICAgICAqL1xyXG4gICAgZ2V0RXhwYW5kZWROb2RlTGlzdCgpOiBOelRyZWVOb2RlW107XHJcbiAgICAvKipcclxuICAgICAqIHJldHVybiBzZWFyY2ggbWF0Y2hlZCBub2Rlc1xyXG4gICAgICovXHJcbiAgICBnZXRNYXRjaGVkTm9kZUxpc3QoKTogTnpUcmVlTm9kZVtdO1xyXG4gICAgaXNBcnJheU9mTnpUcmVlTm9kZSh2YWx1ZTogYW55W10pOiBib29sZWFuO1xyXG4gICAgLyoqXHJcbiAgICAgKiByZXNldCBzZWxlY3RlZE5vZGVMaXN0XHJcbiAgICAgKi9cclxuICAgIGNhbGNTZWxlY3RlZEtleXMoc2VsZWN0ZWRLZXlzOiBzdHJpbmdbXSwgbnpOb2RlczogTnpUcmVlTm9kZVtdLCBpc011bHRpPzogYm9vbGVhbik6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIHJlc2V0IGV4cGFuZGVkTm9kZUxpc3RcclxuICAgICAqL1xyXG4gICAgY2FsY0V4cGFuZGVkS2V5cyhleHBhbmRlZEtleXM6IHN0cmluZ1tdLCBuek5vZGVzOiBOelRyZWVOb2RlW10pOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiByZXNldCBjaGVja2VkTm9kZUxpc3RcclxuICAgICAqL1xyXG4gICAgY2FsY0NoZWNrZWRLZXlzKGNoZWNrZWRLZXlzOiBzdHJpbmdbXSwgbnpOb2RlczogTnpUcmVlTm9kZVtdLCBpc0NoZWNrU3RyaWN0bHk/OiBib29sZWFuKTogdm9pZDtcclxuICAgIC8qKlxyXG4gICAgICogc2V0IGRyYWcgbm9kZVxyXG4gICAgICovXHJcbiAgICBzZXRTZWxlY3RlZE5vZGUobm9kZTogTnpUcmVlTm9kZSk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIHNldCBub2RlIHNlbGVjdGVkIHN0YXR1c1xyXG4gICAgICovXHJcbiAgICBzZXROb2RlQWN0aXZlKG5vZGU6IE56VHJlZU5vZGUpOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBhZGQgb3IgcmVtb3ZlIG5vZGUgdG8gc2VsZWN0ZWROb2RlTGlzdFxyXG4gICAgICovXHJcbiAgICBzZXRTZWxlY3RlZE5vZGVMaXN0KG5vZGU6IE56VHJlZU5vZGUsIGlzTXVsdGlwbGU/OiBib29sZWFuKTogdm9pZDtcclxuICAgIC8qKlxyXG4gICAgICogbWVyZ2UgY2hlY2tlZCBub2Rlc1xyXG4gICAgICovXHJcbiAgICBzZXRIYWxmQ2hlY2tlZE5vZGVMaXN0KG5vZGU6IE56VHJlZU5vZGUpOiB2b2lkO1xyXG4gICAgc2V0Q2hlY2tlZE5vZGVMaXN0KG5vZGU6IE56VHJlZU5vZGUpOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBjb25kdWN0IGNoZWNrZWQvc2VsZWN0ZWQvZXhwYW5kZWQga2V5c1xyXG4gICAgICovXHJcbiAgICBjb25kdWN0Tm9kZVN0YXRlKHR5cGU/OiBzdHJpbmcpOiBOelRyZWVOb2RlW107XHJcbiAgICAvKipcclxuICAgICAqIHNldCBleHBhbmRlZCBub2Rlc1xyXG4gICAgICovXHJcbiAgICBzZXRFeHBhbmRlZE5vZGVMaXN0KG5vZGU6IE56VHJlZU5vZGUpOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBjaGVjayBzdGF0ZVxyXG4gICAgICogQHBhcmFtIGlzQ2hlY2tTdHJpY3RseVxyXG4gICAgICovXHJcbiAgICByZWZyZXNoQ2hlY2tTdGF0ZShpc0NoZWNrU3RyaWN0bHk/OiBib29sZWFuKTogdm9pZDtcclxuICAgIGNvbmR1Y3Qobm9kZTogTnpUcmVlTm9kZSk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIDHjgIFjaGlsZHJlbiBoYWxmIGNoZWNrZWRcclxuICAgICAqIDLjgIFjaGlsZHJlbiBhbGwgY2hlY2tlZCwgcGFyZW50IGNoZWNrZWRcclxuICAgICAqIDPjgIFubyBjaGlsZHJlbiBjaGVja2VkXHJcbiAgICAgKi9cclxuICAgIGNvbmR1Y3RVcChub2RlOiBOelRyZWVOb2RlKTogdm9pZDtcclxuICAgIC8qKlxyXG4gICAgICogcmVzZXQgY2hpbGQgY2hlY2sgc3RhdGVcclxuICAgICAqL1xyXG4gICAgY29uZHVjdERvd24obm9kZTogTnpUcmVlTm9kZSwgdmFsdWU6IGJvb2xlYW4pOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBzZWFyY2ggdmFsdWUgJiBleHBhbmQgbm9kZVxyXG4gICAgICogc2hvdWxkIGFkZCBleHBhbmRsaXN0XHJcbiAgICAgKi9cclxuICAgIHNlYXJjaEV4cGFuZCh2YWx1ZTogc3RyaW5nKTogdm9pZDtcclxuICAgIC8qKlxyXG4gICAgICogZmx1c2ggYWZ0ZXIgZGVsZXRlIG5vZGVcclxuICAgICAqL1xyXG4gICAgYWZ0ZXJSZW1vdmUobm9kZXM6IE56VHJlZU5vZGVbXSk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIGRyYWcgZXZlbnRcclxuICAgICAqL1xyXG4gICAgcmVmcmVzaERyYWdOb2RlKG5vZGU6IE56VHJlZU5vZGUpOiB2b2lkO1xyXG4gICAgcmVzZXROb2RlTGV2ZWwobm9kZTogTnpUcmVlTm9kZSk6IHZvaWQ7XHJcbiAgICBjYWxjRHJvcFBvc2l0aW9uKGV2ZW50OiBEcmFnRXZlbnQpOiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIGRyb3BcclxuICAgICAqIDA6IGlubmVyIC0xOiBwcmUgMTogbmV4dFxyXG4gICAgICovXHJcbiAgICBkcm9wQW5kQXBwbHkodGFyZ2V0Tm9kZTogTnpUcmVlTm9kZSwgZHJhZ1Bvcz86IG51bWJlcik6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIGVtaXQgU3RydWN0dXJlXHJcbiAgICAgKiBldmVudE5hbWVcclxuICAgICAqIG5vZGVcclxuICAgICAqIGV2ZW50OiBNb3VzZUV2ZW50IC8gRHJhZ0V2ZW50XHJcbiAgICAgKiBkcmFnTm9kZVxyXG4gICAgICovXHJcbiAgICBmb3JtYXRFdmVudChldmVudE5hbWU6IHN0cmluZywgbm9kZTogTnpUcmVlTm9kZSB8IG51bGwsIGV2ZW50OiBNb3VzZUV2ZW50IHwgRHJhZ0V2ZW50IHwgbnVsbCk6IE56Rm9ybWF0RW1pdEV2ZW50O1xyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcclxufVxyXG4iXX0=