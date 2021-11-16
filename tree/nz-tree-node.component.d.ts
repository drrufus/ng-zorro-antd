/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, ElementRef, NgZone, OnChanges, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { NzFormatBeforeDropEvent, NzNoAnimationDirective, NzTreeBaseService, NzTreeNode } from 'ng-zorro-antd/core';
import * as ɵngcc0 from '@angular/core';
export declare class NzTreeNodeComponent implements OnInit, OnChanges, OnDestroy {
    nzTreeService: NzTreeBaseService;
    private ngZone;
    private renderer;
    private elRef;
    private cdr;
    noAnimation?: NzNoAnimationDirective | undefined;
    dragElement: ElementRef;
    /**
     * for global property
     */
    nzTreeNode: NzTreeNode;
    nzShowLine: boolean;
    nzShowExpand: boolean;
    nzCheckable: boolean;
    nzAsyncData: boolean;
    nzHideUnMatched: boolean;
    nzNoAnimation: boolean;
    nzSelectMode: boolean;
    nzShowIcon: boolean;
    nzExpandedIcon: TemplateRef<{
        $implicit: NzTreeNode;
    }>;
    nzTreeTemplate: TemplateRef<{
        $implicit: NzTreeNode;
    }>;
    nzBeforeDrop: (confirm: NzFormatBeforeDropEvent) => Observable<boolean>;
    nzSearchValue: string;
    nzDraggable: boolean;
    /**
     * @deprecated use `nzExpandAll` instead.
     */
    nzDefaultExpandAll: boolean;
    nzExpandAll: boolean;
    prefixCls: string;
    nzNodeClass: {};
    nzNodeSwitcherClass: {};
    nzNodeContentClass: {};
    nzNodeCheckboxClass: {};
    nzNodeContentIconClass: {};
    nzNodeContentLoadingClass: {};
    /**
     * drag var
     */
    destroy$: Subject<unknown>;
    dragPos: number;
    dragPosClass: {
        [key: string]: string;
    };
    /**
     * default set
     */
    _nzDraggable: boolean;
    _nzExpandAll: boolean;
    readonly nzIcon: string;
    readonly canDraggable: boolean | null;
    readonly isShowLineIcon: boolean;
    readonly isShowSwitchIcon: boolean;
    readonly isSwitcherOpen: boolean;
    readonly isSwitcherClose: boolean;
    readonly displayStyle: string;
    /**
     * reset node class
     */
    setClassMap(): void;
    onMousedown(event: MouseEvent): void;
    /**
     * click node to select, 200ms to dbl click
     */
    nzClick(event: MouseEvent): void;
    nzDblClick(event: MouseEvent): void;
    /**
     * @param event
     */
    nzContextMenu(event: MouseEvent): void;
    /**
     * collapse node
     * @param event
     */
    _clickExpand(event: MouseEvent): void;
    private setDisplayForChildNodes;
    private setDisplayForParentNodes;
    /**
     * check node
     * @param event
     */
    _clickCheckBox(event: MouseEvent): void;
    /**
     * drag event
     * @param e
     */
    clearDragClass(): void;
    handleDragStart(e: DragEvent): void;
    handleDragEnter(e: DragEvent): void;
    handleDragOver(e: DragEvent): void;
    handleDragLeave(e: DragEvent): void;
    handleDragDrop(e: DragEvent): void;
    handleDragEnd(e: DragEvent): void;
    /**
     * Listening to dragging events.
     */
    handDragEvent(): void;
    isTemplateRef(value: {}): boolean;
    markForCheck(): void;
    constructor(nzTreeService: NzTreeBaseService, ngZone: NgZone, renderer: Renderer2, elRef: ElementRef, cdr: ChangeDetectorRef, noAnimation?: NzNoAnimationDirective | undefined);
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzTreeNodeComponent, [null, null, null, null, null, { optional: true; host: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzTreeNodeComponent, "nz-tree-node", ["nzTreeNode"], { "nzHideUnMatched": "nzHideUnMatched"; "nzNoAnimation": "nzNoAnimation"; "nzSelectMode": "nzSelectMode"; "nzShowIcon": "nzShowIcon"; "nzSearchValue": "nzSearchValue"; "nzDraggable": "nzDraggable"; "nzDefaultExpandAll": "nzDefaultExpandAll"; "nzExpandAll": "nzExpandAll"; "nzTreeNode": "nzTreeNode"; "nzShowLine": "nzShowLine"; "nzShowExpand": "nzShowExpand"; "nzCheckable": "nzCheckable"; "nzAsyncData": "nzAsyncData"; "nzExpandedIcon": "nzExpandedIcon"; "nzTreeTemplate": "nzTreeTemplate"; "nzBeforeDrop": "nzBeforeDrop"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS1ub2RlLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJuei10cmVlLW5vZGUuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0FBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEdBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBFbGVtZW50UmVmLCBOZ1pvbmUsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIFJlbmRlcmVyMiwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBOekZvcm1hdEJlZm9yZURyb3BFdmVudCwgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSwgTnpUcmVlQmFzZVNlcnZpY2UsIE56VHJlZU5vZGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOelRyZWVOb2RlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgICBuelRyZWVTZXJ2aWNlOiBOelRyZWVCYXNlU2VydmljZTtcclxuICAgIHByaXZhdGUgbmdab25lO1xyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjtcclxuICAgIHByaXZhdGUgZWxSZWY7XHJcbiAgICBwcml2YXRlIGNkcjtcclxuICAgIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSB8IHVuZGVmaW5lZDtcclxuICAgIGRyYWdFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gICAgLyoqXHJcbiAgICAgKiBmb3IgZ2xvYmFsIHByb3BlcnR5XHJcbiAgICAgKi9cclxuICAgIG56VHJlZU5vZGU6IE56VHJlZU5vZGU7XHJcbiAgICBuelNob3dMaW5lOiBib29sZWFuO1xyXG4gICAgbnpTaG93RXhwYW5kOiBib29sZWFuO1xyXG4gICAgbnpDaGVja2FibGU6IGJvb2xlYW47XHJcbiAgICBuekFzeW5jRGF0YTogYm9vbGVhbjtcclxuICAgIG56SGlkZVVuTWF0Y2hlZDogYm9vbGVhbjtcclxuICAgIG56Tm9BbmltYXRpb246IGJvb2xlYW47XHJcbiAgICBuelNlbGVjdE1vZGU6IGJvb2xlYW47XHJcbiAgICBuelNob3dJY29uOiBib29sZWFuO1xyXG4gICAgbnpFeHBhbmRlZEljb246IFRlbXBsYXRlUmVmPHtcclxuICAgICAgICAkaW1wbGljaXQ6IE56VHJlZU5vZGU7XHJcbiAgICB9PjtcclxuICAgIG56VHJlZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx7XHJcbiAgICAgICAgJGltcGxpY2l0OiBOelRyZWVOb2RlO1xyXG4gICAgfT47XHJcbiAgICBuekJlZm9yZURyb3A6IChjb25maXJtOiBOekZvcm1hdEJlZm9yZURyb3BFdmVudCkgPT4gT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuICAgIG56U2VhcmNoVmFsdWU6IHN0cmluZztcclxuICAgIG56RHJhZ2dhYmxlOiBib29sZWFuO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVwcmVjYXRlZCB1c2UgYG56RXhwYW5kQWxsYCBpbnN0ZWFkLlxyXG4gICAgICovXHJcbiAgICBuekRlZmF1bHRFeHBhbmRBbGw6IGJvb2xlYW47XHJcbiAgICBuekV4cGFuZEFsbDogYm9vbGVhbjtcclxuICAgIHByZWZpeENsczogc3RyaW5nO1xyXG4gICAgbnpOb2RlQ2xhc3M6IHt9O1xyXG4gICAgbnpOb2RlU3dpdGNoZXJDbGFzczoge307XHJcbiAgICBuek5vZGVDb250ZW50Q2xhc3M6IHt9O1xyXG4gICAgbnpOb2RlQ2hlY2tib3hDbGFzczoge307XHJcbiAgICBuek5vZGVDb250ZW50SWNvbkNsYXNzOiB7fTtcclxuICAgIG56Tm9kZUNvbnRlbnRMb2FkaW5nQ2xhc3M6IHt9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBkcmFnIHZhclxyXG4gICAgICovXHJcbiAgICBkZXN0cm95JDogU3ViamVjdDx1bmtub3duPjtcclxuICAgIGRyYWdQb3M6IG51bWJlcjtcclxuICAgIGRyYWdQb3NDbGFzczoge1xyXG4gICAgICAgIFtrZXk6IHN0cmluZ106IHN0cmluZztcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIGRlZmF1bHQgc2V0XHJcbiAgICAgKi9cclxuICAgIF9uekRyYWdnYWJsZTogYm9vbGVhbjtcclxuICAgIF9uekV4cGFuZEFsbDogYm9vbGVhbjtcclxuICAgIHJlYWRvbmx5IG56SWNvbjogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgY2FuRHJhZ2dhYmxlOiBib29sZWFuIHwgbnVsbDtcclxuICAgIHJlYWRvbmx5IGlzU2hvd0xpbmVJY29uOiBib29sZWFuO1xyXG4gICAgcmVhZG9ubHkgaXNTaG93U3dpdGNoSWNvbjogYm9vbGVhbjtcclxuICAgIHJlYWRvbmx5IGlzU3dpdGNoZXJPcGVuOiBib29sZWFuO1xyXG4gICAgcmVhZG9ubHkgaXNTd2l0Y2hlckNsb3NlOiBib29sZWFuO1xyXG4gICAgcmVhZG9ubHkgZGlzcGxheVN0eWxlOiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIHJlc2V0IG5vZGUgY2xhc3NcclxuICAgICAqL1xyXG4gICAgc2V0Q2xhc3NNYXAoKTogdm9pZDtcclxuICAgIG9uTW91c2Vkb3duKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZDtcclxuICAgIC8qKlxyXG4gICAgICogY2xpY2sgbm9kZSB0byBzZWxlY3QsIDIwMG1zIHRvIGRibCBjbGlja1xyXG4gICAgICovXHJcbiAgICBuekNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZDtcclxuICAgIG56RGJsQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gZXZlbnRcclxuICAgICAqL1xyXG4gICAgbnpDb250ZXh0TWVudShldmVudDogTW91c2VFdmVudCk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIGNvbGxhcHNlIG5vZGVcclxuICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICovXHJcbiAgICBfY2xpY2tFeHBhbmQoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkO1xyXG4gICAgcHJpdmF0ZSBzZXREaXNwbGF5Rm9yQ2hpbGROb2RlcztcclxuICAgIHByaXZhdGUgc2V0RGlzcGxheUZvclBhcmVudE5vZGVzO1xyXG4gICAgLyoqXHJcbiAgICAgKiBjaGVjayBub2RlXHJcbiAgICAgKiBAcGFyYW0gZXZlbnRcclxuICAgICAqL1xyXG4gICAgX2NsaWNrQ2hlY2tCb3goZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBkcmFnIGV2ZW50XHJcbiAgICAgKiBAcGFyYW0gZVxyXG4gICAgICovXHJcbiAgICBjbGVhckRyYWdDbGFzcygpOiB2b2lkO1xyXG4gICAgaGFuZGxlRHJhZ1N0YXJ0KGU6IERyYWdFdmVudCk6IHZvaWQ7XHJcbiAgICBoYW5kbGVEcmFnRW50ZXIoZTogRHJhZ0V2ZW50KTogdm9pZDtcclxuICAgIGhhbmRsZURyYWdPdmVyKGU6IERyYWdFdmVudCk6IHZvaWQ7XHJcbiAgICBoYW5kbGVEcmFnTGVhdmUoZTogRHJhZ0V2ZW50KTogdm9pZDtcclxuICAgIGhhbmRsZURyYWdEcm9wKGU6IERyYWdFdmVudCk6IHZvaWQ7XHJcbiAgICBoYW5kbGVEcmFnRW5kKGU6IERyYWdFdmVudCk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIExpc3RlbmluZyB0byBkcmFnZ2luZyBldmVudHMuXHJcbiAgICAgKi9cclxuICAgIGhhbmREcmFnRXZlbnQoKTogdm9pZDtcclxuICAgIGlzVGVtcGxhdGVSZWYodmFsdWU6IHt9KTogYm9vbGVhbjtcclxuICAgIG1hcmtGb3JDaGVjaygpOiB2b2lkO1xyXG4gICAgY29uc3RydWN0b3IobnpUcmVlU2VydmljZTogTnpUcmVlQmFzZVNlcnZpY2UsIG5nWm9uZTogTmdab25lLCByZW5kZXJlcjogUmVuZGVyZXIyLCBlbFJlZjogRWxlbWVudFJlZiwgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIHwgdW5kZWZpbmVkKTtcclxuICAgIG5nT25Jbml0KCk6IHZvaWQ7XHJcbiAgICBuZ09uQ2hhbmdlcygpOiB2b2lkO1xyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcclxufVxyXG4iXX0=