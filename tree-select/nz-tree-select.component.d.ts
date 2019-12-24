import { CdkConnectedOverlay, CdkOverlayOrigin, ConnectedOverlayPositionChange } from '@angular/cdk/overlay';
import { ChangeDetectorRef, ElementRef, EventEmitter, Injector, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Subscription } from 'rxjs';
import { NzConfigService, NzFormatEmitEvent, NzNoAnimationDirective, NzSizeLDSType, NzTreeBase, NzTreeBaseService, NzTreeNode, NzTreeNodeOptions } from 'ng-zorro-antd/core';
import { NzTreeComponent } from 'ng-zorro-antd/tree';
import { NzTreeSelectService } from './nz-tree-select.service';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDef<NzTreeSelectComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NzTreeSelectComponent, "nz-tree-select", ["nzTreeSelect"], { 'nzAllowClear': "nzAllowClear", 'nzShowExpand': "nzShowExpand", 'nzShowLine': "nzShowLine", 'nzDropdownMatchSelectWidth': "nzDropdownMatchSelectWidth", 'nzCheckable': "nzCheckable", 'nzHideUnMatched': "nzHideUnMatched", 'nzShowIcon': "nzShowIcon", 'nzShowSearch': "nzShowSearch", 'nzDisabled': "nzDisabled", 'nzAsyncData': "nzAsyncData", 'nzMultiple': "nzMultiple", 'nzDefaultExpandAll': "nzDefaultExpandAll", 'nzCheckStrictly': "nzCheckStrictly", 'nzExpandedIcon': "nzExpandedIcon", 'nzNotFoundContent': "nzNotFoundContent", 'nzNodes': "nzNodes", 'nzOpen': "nzOpen", 'nzSize': "nzSize", 'nzPlaceHolder': "nzPlaceHolder", 'nzDropdownStyle': "nzDropdownStyle", 'nzDefaultExpandedKeys': "nzDefaultExpandedKeys", 'nzExpandedKeys': "nzExpandedKeys", 'nzDisplayWith': "nzDisplayWith", 'nzMaxTagCount': "nzMaxTagCount", 'nzMaxTagPlaceholder': "nzMaxTagPlaceholder", 'nzTreeTemplate': "nzTreeTemplate" }, { 'nzOpenChange': "nzOpenChange", 'nzCleared': "nzCleared", 'nzRemoved': "nzRemoved", 'nzExpandChange': "nzExpandChange", 'nzTreeClick': "nzTreeClick", 'nzTreeCheckBoxChange': "nzTreeCheckBoxChange" }, ["nzTreeTemplateChild"]>;
}
