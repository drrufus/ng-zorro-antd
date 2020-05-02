/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CdkConnectedOverlay, CdkOverlayOrigin, ConnectedOverlayPositionChange } from '@angular/cdk/overlay';
import { ChangeDetectorRef, ElementRef, EventEmitter, Injector, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Subscription } from 'rxjs';
import { NzConfigService, NzFormatEmitEvent, NzNoAnimationDirective, NzSizeLDSType, NzTreeBase, NzTreeBaseService, NzTreeNode, NzTreeNodeOptions } from 'ng-zorro-antd/core';
import { NzTreeComponent } from 'ng-zorro-antd/tree';
import { NzTreeSelectService } from './nz-tree-select.service';
import * as ɵngcc0 from '@angular/core';
export declare function higherOrderServiceFactory(injector: Injector): NzTreeBaseService;
export declare class NzTreeSelectComponent extends NzTreeBase implements ControlValueAccessor, OnInit, OnDestroy, OnChanges {
    nzConfigService: NzConfigService;
    private renderer;
    private cdr;
    private elementRef;
    noAnimation?: NzNoAnimationDirective | undefined;
    nzAllowClear: boolean;
    nzShowExpand: boolean;
    nzShowLine: boolean;
    nzDropdownMatchSelectWidth: boolean;
    nzCheckable: boolean;
    nzHideUnMatched: boolean;
    nzShowIcon: boolean;
    nzShowSearch: boolean;
    nzDisabled: boolean;
    nzAsyncData: boolean;
    nzMultiple: boolean;
    nzDefaultExpandAll: boolean;
    nzCheckStrictly: boolean;
    nzExpandedIcon: TemplateRef<{
        $implicit: NzTreeNode;
    }>;
    nzNotFoundContent: string;
    nzNodes: Array<NzTreeNode | NzTreeNodeOptions>;
    nzOpen: boolean;
    nzSize: NzSizeLDSType;
    nzPlaceHolder: string;
    nzDropdownStyle: {
        [key: string]: string;
    };
    /**
     * @deprecated 9.0.0 - use `nzExpandedKeys` instead.
     */
    nzDefaultExpandedKeys: string[];
    nzExpandedKeys: string[];
    nzDisplayWith: (node: NzTreeNode) => string | undefined;
    nzMaxTagCount: number;
    nzMaxTagPlaceholder: TemplateRef<{
        $implicit: NzTreeNode[];
    }>;
    readonly nzOpenChange: EventEmitter<boolean>;
    readonly nzCleared: EventEmitter<void>;
    readonly nzRemoved: EventEmitter<NzTreeNode>;
    readonly nzExpandChange: EventEmitter<NzFormatEmitEvent>;
    readonly nzTreeClick: EventEmitter<NzFormatEmitEvent>;
    readonly nzTreeCheckBoxChange: EventEmitter<NzFormatEmitEvent>;
    inputElement: ElementRef<HTMLInputElement>;
    treeRef: NzTreeComponent;
    cdkOverlayOrigin: CdkOverlayOrigin;
    cdkConnectedOverlay: CdkConnectedOverlay;
    nzTreeTemplate: TemplateRef<{
        $implicit: NzTreeNode;
    }>;
    nzTreeTemplateChild: TemplateRef<{
        $implicit: NzTreeNode;
    }>;
    readonly treeTemplate: TemplateRef<{
        $implicit: NzTreeNode;
    }>;
    triggerWidth: number;
    isComposing: boolean;
    isDestroy: boolean;
    isNotFound: boolean;
    inputValue: string;
    dropDownPosition: 'top' | 'center' | 'bottom';
    selectionChangeSubscription: Subscription;
    selectedNodes: NzTreeNode[];
    expandedKeys: string[];
    value: string[];
    onChange: (value: string[] | string | null) => void;
    onTouched: () => void;
    readonly placeHolderDisplay: string;
    readonly searchDisplay: string;
    readonly isMultiple: boolean;
    readonly selectedValueDisplay: {
        [key: string]: string;
    };
    constructor(nzTreeService: NzTreeSelectService, nzConfigService: NzConfigService, renderer: Renderer2, cdr: ChangeDetectorRef, elementRef: ElementRef, noAnimation?: NzNoAnimationDirective | undefined);
    ngOnInit(): void;
    ngOnDestroy(): void;
    setDisabledState(isDisabled: boolean): void;
    ngOnChanges(changes: SimpleChanges): void;
    writeValue(value: string[] | string): void;
    registerOnChange(fn: (_: string[] | string | null) => void): void;
    registerOnTouched(fn: () => void): void;
    trigger(): void;
    openDropdown(): void;
    closeDropDown(): void;
    onKeyDownInput(e: KeyboardEvent): void;
    onExpandedKeysChange(value: NzFormatEmitEvent): void;
    setInputValue(value: string): void;
    removeSelected(node: NzTreeNode, emit?: boolean, event?: MouseEvent): void;
    focusOnInput(): void;
    subscribeSelectionChange(): Subscription;
    updateSelectedNodes(init?: boolean): void;
    updatePosition(): void;
    onPositionChange(position: ConnectedOverlayPositionChange): void;
    updateInputWidth(): void;
    onClearSelection($event: MouseEvent): void;
    setSearchValues($event: NzFormatEmitEvent): void;
    updateCdkConnectedOverlayStatus(): void;
    trackValue(_index: number, option: NzTreeNode): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzTreeSelectComponent, [null, null, null, null, null, { optional: true; host: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzTreeSelectComponent, "nz-tree-select", ["nzTreeSelect"], { "nzAllowClear": "nzAllowClear"; "nzShowExpand": "nzShowExpand"; "nzShowLine": "nzShowLine"; "nzCheckable": "nzCheckable"; "nzShowSearch": "nzShowSearch"; "nzDisabled": "nzDisabled"; "nzAsyncData": "nzAsyncData"; "nzMultiple": "nzMultiple"; "nzDefaultExpandAll": "nzDefaultExpandAll"; "nzCheckStrictly": "nzCheckStrictly"; "nzNodes": "nzNodes"; "nzOpen": "nzOpen"; "nzPlaceHolder": "nzPlaceHolder"; "nzDisplayWith": "nzDisplayWith"; "nzDefaultExpandedKeys": "nzDefaultExpandedKeys"; "nzExpandedKeys": "nzExpandedKeys"; "nzDropdownMatchSelectWidth": "nzDropdownMatchSelectWidth"; "nzHideUnMatched": "nzHideUnMatched"; "nzShowIcon": "nzShowIcon"; "nzExpandedIcon": "nzExpandedIcon"; "nzNotFoundContent": "nzNotFoundContent"; "nzSize": "nzSize"; "nzDropdownStyle": "nzDropdownStyle"; "nzMaxTagCount": "nzMaxTagCount"; "nzMaxTagPlaceholder": "nzMaxTagPlaceholder"; "nzTreeTemplate": "nzTreeTemplate"; }, { "nzOpenChange": "nzOpenChange"; "nzCleared": "nzCleared"; "nzRemoved": "nzRemoved"; "nzExpandChange": "nzExpandChange"; "nzTreeClick": "nzTreeClick"; "nzTreeCheckBoxChange": "nzTreeCheckBoxChange"; }, ["nzTreeTemplateChild"], never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS1zZWxlY3QuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbIm56LXRyZWUtc2VsZWN0LmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUFjQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUdBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcbmltcG9ydCB7IENka0Nvbm5lY3RlZE92ZXJsYXksIENka092ZXJsYXlPcmlnaW4sIENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5qZWN0b3IsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlcywgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBOekNvbmZpZ1NlcnZpY2UsIE56Rm9ybWF0RW1pdEV2ZW50LCBOek5vQW5pbWF0aW9uRGlyZWN0aXZlLCBOelNpemVMRFNUeXBlLCBOelRyZWVCYXNlLCBOelRyZWVCYXNlU2VydmljZSwgTnpUcmVlTm9kZSwgTnpUcmVlTm9kZU9wdGlvbnMgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOelRyZWVDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL3RyZWUnO1xyXG5pbXBvcnQgeyBOelRyZWVTZWxlY3RTZXJ2aWNlIH0gZnJvbSAnLi9uei10cmVlLXNlbGVjdC5zZXJ2aWNlJztcclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gaGlnaGVyT3JkZXJTZXJ2aWNlRmFjdG9yeShpbmplY3RvcjogSW5qZWN0b3IpOiBOelRyZWVCYXNlU2VydmljZTtcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTnpUcmVlU2VsZWN0Q29tcG9uZW50IGV4dGVuZHMgTnpUcmVlQmFzZSBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcclxuICAgIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjtcclxuICAgIHByaXZhdGUgY2RyO1xyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmO1xyXG4gICAgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xyXG4gICAgbnpBbGxvd0NsZWFyOiBib29sZWFuO1xyXG4gICAgbnpTaG93RXhwYW5kOiBib29sZWFuO1xyXG4gICAgbnpTaG93TGluZTogYm9vbGVhbjtcclxuICAgIG56RHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoOiBib29sZWFuO1xyXG4gICAgbnpDaGVja2FibGU6IGJvb2xlYW47XHJcbiAgICBuekhpZGVVbk1hdGNoZWQ6IGJvb2xlYW47XHJcbiAgICBuelNob3dJY29uOiBib29sZWFuO1xyXG4gICAgbnpTaG93U2VhcmNoOiBib29sZWFuO1xyXG4gICAgbnpEaXNhYmxlZDogYm9vbGVhbjtcclxuICAgIG56QXN5bmNEYXRhOiBib29sZWFuO1xyXG4gICAgbnpNdWx0aXBsZTogYm9vbGVhbjtcclxuICAgIG56RGVmYXVsdEV4cGFuZEFsbDogYm9vbGVhbjtcclxuICAgIG56Q2hlY2tTdHJpY3RseTogYm9vbGVhbjtcclxuICAgIG56RXhwYW5kZWRJY29uOiBUZW1wbGF0ZVJlZjx7XHJcbiAgICAgICAgJGltcGxpY2l0OiBOelRyZWVOb2RlO1xyXG4gICAgfT47XHJcbiAgICBuek5vdEZvdW5kQ29udGVudDogc3RyaW5nO1xyXG4gICAgbnpOb2RlczogQXJyYXk8TnpUcmVlTm9kZSB8IE56VHJlZU5vZGVPcHRpb25zPjtcclxuICAgIG56T3BlbjogYm9vbGVhbjtcclxuICAgIG56U2l6ZTogTnpTaXplTERTVHlwZTtcclxuICAgIG56UGxhY2VIb2xkZXI6IHN0cmluZztcclxuICAgIG56RHJvcGRvd25TdHlsZToge1xyXG4gICAgICAgIFtrZXk6IHN0cmluZ106IHN0cmluZztcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBkZXByZWNhdGVkIDkuMC4wIC0gdXNlIGBuekV4cGFuZGVkS2V5c2AgaW5zdGVhZC5cclxuICAgICAqL1xyXG4gICAgbnpEZWZhdWx0RXhwYW5kZWRLZXlzOiBzdHJpbmdbXTtcclxuICAgIG56RXhwYW5kZWRLZXlzOiBzdHJpbmdbXTtcclxuICAgIG56RGlzcGxheVdpdGg6IChub2RlOiBOelRyZWVOb2RlKSA9PiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgICBuek1heFRhZ0NvdW50OiBudW1iZXI7XHJcbiAgICBuek1heFRhZ1BsYWNlaG9sZGVyOiBUZW1wbGF0ZVJlZjx7XHJcbiAgICAgICAgJGltcGxpY2l0OiBOelRyZWVOb2RlW107XHJcbiAgICB9PjtcclxuICAgIHJlYWRvbmx5IG56T3BlbkNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG4gICAgcmVhZG9ubHkgbnpDbGVhcmVkOiBFdmVudEVtaXR0ZXI8dm9pZD47XHJcbiAgICByZWFkb25seSBuelJlbW92ZWQ6IEV2ZW50RW1pdHRlcjxOelRyZWVOb2RlPjtcclxuICAgIHJlYWRvbmx5IG56RXhwYW5kQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+O1xyXG4gICAgcmVhZG9ubHkgbnpUcmVlQ2xpY2s6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD47XHJcbiAgICByZWFkb25seSBuelRyZWVDaGVja0JveENoYW5nZTogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PjtcclxuICAgIGlucHV0RWxlbWVudDogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PjtcclxuICAgIHRyZWVSZWY6IE56VHJlZUNvbXBvbmVudDtcclxuICAgIGNka092ZXJsYXlPcmlnaW46IENka092ZXJsYXlPcmlnaW47XHJcbiAgICBjZGtDb25uZWN0ZWRPdmVybGF5OiBDZGtDb25uZWN0ZWRPdmVybGF5O1xyXG4gICAgbnpUcmVlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPHtcclxuICAgICAgICAkaW1wbGljaXQ6IE56VHJlZU5vZGU7XHJcbiAgICB9PjtcclxuICAgIG56VHJlZVRlbXBsYXRlQ2hpbGQ6IFRlbXBsYXRlUmVmPHtcclxuICAgICAgICAkaW1wbGljaXQ6IE56VHJlZU5vZGU7XHJcbiAgICB9PjtcclxuICAgIHJlYWRvbmx5IHRyZWVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8e1xyXG4gICAgICAgICRpbXBsaWNpdDogTnpUcmVlTm9kZTtcclxuICAgIH0+O1xyXG4gICAgdHJpZ2dlcldpZHRoOiBudW1iZXI7XHJcbiAgICBpc0NvbXBvc2luZzogYm9vbGVhbjtcclxuICAgIGlzRGVzdHJveTogYm9vbGVhbjtcclxuICAgIGlzTm90Rm91bmQ6IGJvb2xlYW47XHJcbiAgICBpbnB1dFZhbHVlOiBzdHJpbmc7XHJcbiAgICBkcm9wRG93blBvc2l0aW9uOiAndG9wJyB8ICdjZW50ZXInIHwgJ2JvdHRvbSc7XHJcbiAgICBzZWxlY3Rpb25DaGFuZ2VTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICAgIHNlbGVjdGVkTm9kZXM6IE56VHJlZU5vZGVbXTtcclxuICAgIGV4cGFuZGVkS2V5czogc3RyaW5nW107XHJcbiAgICB2YWx1ZTogc3RyaW5nW107XHJcbiAgICBvbkNoYW5nZTogKHZhbHVlOiBzdHJpbmdbXSB8IHN0cmluZyB8IG51bGwpID0+IHZvaWQ7XHJcbiAgICBvblRvdWNoZWQ6ICgpID0+IHZvaWQ7XHJcbiAgICByZWFkb25seSBwbGFjZUhvbGRlckRpc3BsYXk6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IHNlYXJjaERpc3BsYXk6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IGlzTXVsdGlwbGU6IGJvb2xlYW47XHJcbiAgICByZWFkb25seSBzZWxlY3RlZFZhbHVlRGlzcGxheToge1xyXG4gICAgICAgIFtrZXk6IHN0cmluZ106IHN0cmluZztcclxuICAgIH07XHJcbiAgICBjb25zdHJ1Y3RvcihuelRyZWVTZXJ2aWNlOiBOelRyZWVTZWxlY3RTZXJ2aWNlLCBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIHwgdW5kZWZpbmVkKTtcclxuICAgIG5nT25Jbml0KCk6IHZvaWQ7XHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xyXG4gICAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZDtcclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xyXG4gICAgd3JpdGVWYWx1ZSh2YWx1ZTogc3RyaW5nW10gfCBzdHJpbmcpOiB2b2lkO1xyXG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IHN0cmluZ1tdIHwgc3RyaW5nIHwgbnVsbCkgPT4gdm9pZCk6IHZvaWQ7XHJcbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQ7XHJcbiAgICB0cmlnZ2VyKCk6IHZvaWQ7XHJcbiAgICBvcGVuRHJvcGRvd24oKTogdm9pZDtcclxuICAgIGNsb3NlRHJvcERvd24oKTogdm9pZDtcclxuICAgIG9uS2V5RG93bklucHV0KGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkO1xyXG4gICAgb25FeHBhbmRlZEtleXNDaGFuZ2UodmFsdWU6IE56Rm9ybWF0RW1pdEV2ZW50KTogdm9pZDtcclxuICAgIHNldElucHV0VmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQ7XHJcbiAgICByZW1vdmVTZWxlY3RlZChub2RlOiBOelRyZWVOb2RlLCBlbWl0PzogYm9vbGVhbiwgZXZlbnQ/OiBNb3VzZUV2ZW50KTogdm9pZDtcclxuICAgIGZvY3VzT25JbnB1dCgpOiB2b2lkO1xyXG4gICAgc3Vic2NyaWJlU2VsZWN0aW9uQ2hhbmdlKCk6IFN1YnNjcmlwdGlvbjtcclxuICAgIHVwZGF0ZVNlbGVjdGVkTm9kZXMoaW5pdD86IGJvb2xlYW4pOiB2b2lkO1xyXG4gICAgdXBkYXRlUG9zaXRpb24oKTogdm9pZDtcclxuICAgIG9uUG9zaXRpb25DaGFuZ2UocG9zaXRpb246IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSk6IHZvaWQ7XHJcbiAgICB1cGRhdGVJbnB1dFdpZHRoKCk6IHZvaWQ7XHJcbiAgICBvbkNsZWFyU2VsZWN0aW9uKCRldmVudDogTW91c2VFdmVudCk6IHZvaWQ7XHJcbiAgICBzZXRTZWFyY2hWYWx1ZXMoJGV2ZW50OiBOekZvcm1hdEVtaXRFdmVudCk6IHZvaWQ7XHJcbiAgICB1cGRhdGVDZGtDb25uZWN0ZWRPdmVybGF5U3RhdHVzKCk6IHZvaWQ7XHJcbiAgICB0cmFja1ZhbHVlKF9pbmRleDogbnVtYmVyLCBvcHRpb246IE56VHJlZU5vZGUpOiBzdHJpbmc7XHJcbn1cclxuIl19