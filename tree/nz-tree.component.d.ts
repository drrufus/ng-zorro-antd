/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChange, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { NzConfigService, NzFormatBeforeDropEvent, NzFormatEmitEvent, NzNoAnimationDirective, NzTreeBase, NzTreeBaseService, NzTreeNode } from 'ng-zorro-antd/core';
import { NzTreeService } from './nz-tree.service';
import * as ɵngcc0 from '@angular/core';
export declare function NzTreeServiceFactory(higherOrderService: NzTreeBaseService, treeService: NzTreeService): NzTreeBaseService;
export declare class NzTreeComponent extends NzTreeBase implements OnInit, OnDestroy, ControlValueAccessor, OnChanges {
    nzConfigService: NzConfigService;
    private cdr;
    noAnimation?: NzNoAnimationDirective | undefined;
    nzShowIcon: boolean;
    nzShowExpand: boolean;
    nzShowLine: boolean;
    nzExpandedIcon: TemplateRef<{
        $implicit: NzTreeNode;
    }>;
    nzCheckable: boolean;
    nzAsyncData: boolean;
    nzDraggable: boolean;
    nzHideUnMatched: boolean;
    nzSelectMode: boolean;
    nzCheckStrictly: boolean;
    nzBlockNode: boolean;
    nzExpandAll: boolean;
    nzTreeTemplate: TemplateRef<{
        $implicit: NzTreeNode;
    }>;
    nzTreeTemplateChild: TemplateRef<{
        $implicit: NzTreeNode;
    }>;
    readonly treeTemplate: TemplateRef<{
        $implicit: NzTreeNode;
    }>;
    /**
     * @deprecated 9.0.0 use `nzExpandAll` instead.
     */
    nzDefaultExpandAll: boolean;
    private _nzDefaultExpandAll;
    nzBeforeDrop: (confirm: NzFormatBeforeDropEvent) => Observable<boolean>;
    nzMultiple: boolean;
    nzData: any[];
    /**
     * @deprecated 9.0.0 - use `nzExpandedKeys` instead.
     */
    nzDefaultExpandedKeys: string[];
    /**
     * @deprecated 9.0.0 - use `nzSelectedKeys` instead.
     */
    nzDefaultSelectedKeys: string[];
    /**
     * @deprecated 9.0.0 - use `nzCheckedKeys` instead.
     */
    nzDefaultCheckedKeys: string[];
    nzExpandedKeys: string[];
    nzSelectedKeys: string[];
    nzCheckedKeys: string[];
    nzSearchValue: string;
    /**
     * To render nodes if root is changed.
     */
    readonly nzNodes: NzTreeNode[];
    readonly nzExpandedKeysChange: EventEmitter<string[]>;
    readonly nzSelectedKeysChange: EventEmitter<string[]>;
    readonly nzCheckedKeysChange: EventEmitter<string[]>;
    readonly nzSearchValueChange: EventEmitter<NzFormatEmitEvent>;
    /**
     * @deprecated use `nzSearchValueChange` instead.
     */
    readonly nzOnSearchNode: EventEmitter<NzFormatEmitEvent>;
    readonly nzClick: EventEmitter<NzFormatEmitEvent>;
    readonly nzDblClick: EventEmitter<NzFormatEmitEvent>;
    readonly nzContextMenu: EventEmitter<NzFormatEmitEvent>;
    readonly nzCheckBoxChange: EventEmitter<NzFormatEmitEvent>;
    readonly nzExpandChange: EventEmitter<NzFormatEmitEvent>;
    readonly nzOnDragStart: EventEmitter<NzFormatEmitEvent>;
    readonly nzOnDragEnter: EventEmitter<NzFormatEmitEvent>;
    readonly nzOnDragOver: EventEmitter<NzFormatEmitEvent>;
    readonly nzOnDragLeave: EventEmitter<NzFormatEmitEvent>;
    readonly nzOnDrop: EventEmitter<NzFormatEmitEvent>;
    readonly nzOnDragEnd: EventEmitter<NzFormatEmitEvent>;
    _searchValue: string;
    nzDefaultSubject: ReplaySubject<{
        type: string;
        keys: string[];
    }>;
    destroy$: Subject<unknown>;
    prefixCls: string;
    classMap: {};
    onChange: (value: NzTreeNode[]) => void;
    onTouched: () => void;
    setClassMap(): void;
    writeValue(value: NzTreeNode[]): void;
    registerOnChange(fn: (_: NzTreeNode[]) => void): void;
    registerOnTouched(fn: () => void): void;
    initNzData(value: any[]): void;
    constructor(nzTreeService: NzTreeBaseService, nzConfigService: NzConfigService, cdr: ChangeDetectorRef, noAnimation?: NzNoAnimationDirective | undefined);
    ngOnInit(): void;
    ngOnChanges(changes: {
        [propertyName: string]: SimpleChange;
    }): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzTreeComponent, [null, null, null, { optional: true; host: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzTreeComponent, "nz-tree", ["nzTree"], { "nzShowExpand": "nzShowExpand"; "nzShowLine": "nzShowLine"; "nzCheckable": "nzCheckable"; "nzAsyncData": "nzAsyncData"; "nzDraggable": "nzDraggable"; "nzSelectMode": "nzSelectMode"; "nzCheckStrictly": "nzCheckStrictly"; "nzExpandAll": "nzExpandAll"; "nzMultiple": "nzMultiple"; "nzDefaultExpandAll": "nzDefaultExpandAll"; "nzData": "nzData"; "nzDefaultExpandedKeys": "nzDefaultExpandedKeys"; "nzDefaultSelectedKeys": "nzDefaultSelectedKeys"; "nzDefaultCheckedKeys": "nzDefaultCheckedKeys"; "nzExpandedKeys": "nzExpandedKeys"; "nzSelectedKeys": "nzSelectedKeys"; "nzCheckedKeys": "nzCheckedKeys"; "nzSearchValue": "nzSearchValue"; "nzShowIcon": "nzShowIcon"; "nzExpandedIcon": "nzExpandedIcon"; "nzHideUnMatched": "nzHideUnMatched"; "nzBlockNode": "nzBlockNode"; "nzTreeTemplate": "nzTreeTemplate"; "nzBeforeDrop": "nzBeforeDrop"; }, { "nzExpandedKeysChange": "nzExpandedKeysChange"; "nzSelectedKeysChange": "nzSelectedKeysChange"; "nzCheckedKeysChange": "nzCheckedKeysChange"; "nzSearchValueChange": "nzSearchValueChange"; "nzOnSearchNode": "nzOnSearchNode"; "nzClick": "nzClick"; "nzDblClick": "nzDblClick"; "nzContextMenu": "nzContextMenu"; "nzCheckBoxChange": "nzCheckBoxChange"; "nzExpandChange": "nzExpandChange"; "nzOnDragStart": "nzOnDragStart"; "nzOnDragEnter": "nzOnDragEnter"; "nzOnDragOver": "nzOnDragOver"; "nzOnDragLeave": "nzOnDragLeave"; "nzOnDrop": "nzOnDrop"; "nzOnDragEnd": "nzOnDragEnd"; }, ["nzTreeTemplateChild"], never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsibnotdHJlZS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OztBQVlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdHQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBTaW1wbGVDaGFuZ2UsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE56Q29uZmlnU2VydmljZSwgTnpGb3JtYXRCZWZvcmVEcm9wRXZlbnQsIE56Rm9ybWF0RW1pdEV2ZW50LCBOek5vQW5pbWF0aW9uRGlyZWN0aXZlLCBOelRyZWVCYXNlLCBOelRyZWVCYXNlU2VydmljZSwgTnpUcmVlTm9kZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56VHJlZVNlcnZpY2UgfSBmcm9tICcuL256LXRyZWUuc2VydmljZSc7XHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIE56VHJlZVNlcnZpY2VGYWN0b3J5KGhpZ2hlck9yZGVyU2VydmljZTogTnpUcmVlQmFzZVNlcnZpY2UsIHRyZWVTZXJ2aWNlOiBOelRyZWVTZXJ2aWNlKTogTnpUcmVlQmFzZVNlcnZpY2U7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE56VHJlZUNvbXBvbmVudCBleHRlbmRzIE56VHJlZUJhc2UgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uQ2hhbmdlcyB7XHJcbiAgICBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZTtcclxuICAgIHByaXZhdGUgY2RyO1xyXG4gICAgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xyXG4gICAgbnpTaG93SWNvbjogYm9vbGVhbjtcclxuICAgIG56U2hvd0V4cGFuZDogYm9vbGVhbjtcclxuICAgIG56U2hvd0xpbmU6IGJvb2xlYW47XHJcbiAgICBuekV4cGFuZGVkSWNvbjogVGVtcGxhdGVSZWY8e1xyXG4gICAgICAgICRpbXBsaWNpdDogTnpUcmVlTm9kZTtcclxuICAgIH0+O1xyXG4gICAgbnpDaGVja2FibGU6IGJvb2xlYW47XHJcbiAgICBuekFzeW5jRGF0YTogYm9vbGVhbjtcclxuICAgIG56RHJhZ2dhYmxlOiBib29sZWFuO1xyXG4gICAgbnpIaWRlVW5NYXRjaGVkOiBib29sZWFuO1xyXG4gICAgbnpTZWxlY3RNb2RlOiBib29sZWFuO1xyXG4gICAgbnpDaGVja1N0cmljdGx5OiBib29sZWFuO1xyXG4gICAgbnpCbG9ja05vZGU6IGJvb2xlYW47XHJcbiAgICBuekV4cGFuZEFsbDogYm9vbGVhbjtcclxuICAgIG56VHJlZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx7XHJcbiAgICAgICAgJGltcGxpY2l0OiBOelRyZWVOb2RlO1xyXG4gICAgfT47XHJcbiAgICBuelRyZWVUZW1wbGF0ZUNoaWxkOiBUZW1wbGF0ZVJlZjx7XHJcbiAgICAgICAgJGltcGxpY2l0OiBOelRyZWVOb2RlO1xyXG4gICAgfT47XHJcbiAgICByZWFkb25seSB0cmVlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPHtcclxuICAgICAgICAkaW1wbGljaXQ6IE56VHJlZU5vZGU7XHJcbiAgICB9PjtcclxuICAgIC8qKlxyXG4gICAgICogQGRlcHJlY2F0ZWQgOS4wLjAgdXNlIGBuekV4cGFuZEFsbGAgaW5zdGVhZC5cclxuICAgICAqL1xyXG4gICAgbnpEZWZhdWx0RXhwYW5kQWxsOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBfbnpEZWZhdWx0RXhwYW5kQWxsO1xyXG4gICAgbnpCZWZvcmVEcm9wOiAoY29uZmlybTogTnpGb3JtYXRCZWZvcmVEcm9wRXZlbnQpID0+IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcbiAgICBuek11bHRpcGxlOiBib29sZWFuO1xyXG4gICAgbnpEYXRhOiBhbnlbXTtcclxuICAgIC8qKlxyXG4gICAgICogQGRlcHJlY2F0ZWQgOS4wLjAgLSB1c2UgYG56RXhwYW5kZWRLZXlzYCBpbnN0ZWFkLlxyXG4gICAgICovXHJcbiAgICBuekRlZmF1bHRFeHBhbmRlZEtleXM6IHN0cmluZ1tdO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVwcmVjYXRlZCA5LjAuMCAtIHVzZSBgbnpTZWxlY3RlZEtleXNgIGluc3RlYWQuXHJcbiAgICAgKi9cclxuICAgIG56RGVmYXVsdFNlbGVjdGVkS2V5czogc3RyaW5nW107XHJcbiAgICAvKipcclxuICAgICAqIEBkZXByZWNhdGVkIDkuMC4wIC0gdXNlIGBuekNoZWNrZWRLZXlzYCBpbnN0ZWFkLlxyXG4gICAgICovXHJcbiAgICBuekRlZmF1bHRDaGVja2VkS2V5czogc3RyaW5nW107XHJcbiAgICBuekV4cGFuZGVkS2V5czogc3RyaW5nW107XHJcbiAgICBuelNlbGVjdGVkS2V5czogc3RyaW5nW107XHJcbiAgICBuekNoZWNrZWRLZXlzOiBzdHJpbmdbXTtcclxuICAgIG56U2VhcmNoVmFsdWU6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogVG8gcmVuZGVyIG5vZGVzIGlmIHJvb3QgaXMgY2hhbmdlZC5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgbnpOb2RlczogTnpUcmVlTm9kZVtdO1xyXG4gICAgcmVhZG9ubHkgbnpFeHBhbmRlZEtleXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT47XHJcbiAgICByZWFkb25seSBuelNlbGVjdGVkS2V5c0NoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZ1tdPjtcclxuICAgIHJlYWRvbmx5IG56Q2hlY2tlZEtleXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT47XHJcbiAgICByZWFkb25seSBuelNlYXJjaFZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVwcmVjYXRlZCB1c2UgYG56U2VhcmNoVmFsdWVDaGFuZ2VgIGluc3RlYWQuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IG56T25TZWFyY2hOb2RlOiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+O1xyXG4gICAgcmVhZG9ubHkgbnpDbGljazogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PjtcclxuICAgIHJlYWRvbmx5IG56RGJsQ2xpY2s6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD47XHJcbiAgICByZWFkb25seSBuekNvbnRleHRNZW51OiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+O1xyXG4gICAgcmVhZG9ubHkgbnpDaGVja0JveENoYW5nZTogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PjtcclxuICAgIHJlYWRvbmx5IG56RXhwYW5kQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+O1xyXG4gICAgcmVhZG9ubHkgbnpPbkRyYWdTdGFydDogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PjtcclxuICAgIHJlYWRvbmx5IG56T25EcmFnRW50ZXI6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD47XHJcbiAgICByZWFkb25seSBuek9uRHJhZ092ZXI6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD47XHJcbiAgICByZWFkb25seSBuek9uRHJhZ0xlYXZlOiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+O1xyXG4gICAgcmVhZG9ubHkgbnpPbkRyb3A6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD47XHJcbiAgICByZWFkb25seSBuek9uRHJhZ0VuZDogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PjtcclxuICAgIF9zZWFyY2hWYWx1ZTogc3RyaW5nO1xyXG4gICAgbnpEZWZhdWx0U3ViamVjdDogUmVwbGF5U3ViamVjdDx7XHJcbiAgICAgICAgdHlwZTogc3RyaW5nO1xyXG4gICAgICAgIGtleXM6IHN0cmluZ1tdO1xyXG4gICAgfT47XHJcbiAgICBkZXN0cm95JDogU3ViamVjdDx1bmtub3duPjtcclxuICAgIHByZWZpeENsczogc3RyaW5nO1xyXG4gICAgY2xhc3NNYXA6IHt9O1xyXG4gICAgb25DaGFuZ2U6ICh2YWx1ZTogTnpUcmVlTm9kZVtdKSA9PiB2b2lkO1xyXG4gICAgb25Ub3VjaGVkOiAoKSA9PiB2b2lkO1xyXG4gICAgc2V0Q2xhc3NNYXAoKTogdm9pZDtcclxuICAgIHdyaXRlVmFsdWUodmFsdWU6IE56VHJlZU5vZGVbXSk6IHZvaWQ7XHJcbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogTnpUcmVlTm9kZVtdKSA9PiB2b2lkKTogdm9pZDtcclxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZDtcclxuICAgIGluaXROekRhdGEodmFsdWU6IGFueVtdKTogdm9pZDtcclxuICAgIGNvbnN0cnVjdG9yKG56VHJlZVNlcnZpY2U6IE56VHJlZUJhc2VTZXJ2aWNlLCBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSwgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIHwgdW5kZWZpbmVkKTtcclxuICAgIG5nT25Jbml0KCk6IHZvaWQ7XHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7XHJcbiAgICAgICAgW3Byb3BlcnR5TmFtZTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlO1xyXG4gICAgfSk6IHZvaWQ7XHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xyXG59XHJcbiJdfQ==