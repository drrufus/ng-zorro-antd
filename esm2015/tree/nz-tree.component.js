import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, EventEmitter, forwardRef, Host, Input, Optional, Output, SkipSelf, TemplateRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InputBoolean, isNotNil, NzConfigService, NzNoAnimationDirective, NzTreeBase, NzTreeBaseService, NzTreeHigherOrderServiceToken, warnDeprecation, WithConfig } from 'ng-zorro-antd/core';
import { NzTreeService } from './nz-tree.service';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
import * as i2 from "@angular/common";
import * as i3 from "./nz-tree-node.component";
const _c0 = ["nzTreeTemplate"];
function NzTreeComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "nz-tree-node", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const node_r999 = ctx.$implicit;
    const ctx_r998 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzTreeNode", node_r999)("nzSelectMode", ctx_r998.nzSelectMode)("nzShowLine", ctx_r998.nzShowLine)("nzExpandedIcon", ctx_r998.nzExpandedIcon)("nzDraggable", ctx_r998.nzDraggable)("nzCheckable", ctx_r998.nzCheckable)("nzShowExpand", ctx_r998.nzShowExpand)("nzAsyncData", ctx_r998.nzAsyncData)("nzSearchValue", ctx_r998.nzSearchValue)("nzHideUnMatched", ctx_r998.nzHideUnMatched)("nzBeforeDrop", ctx_r998.nzBeforeDrop)("nzExpandAll", ctx_r998.nzExpandAll)("nzShowIcon", ctx_r998.nzShowIcon)("nzTreeTemplate", ctx_r998.treeTemplate)("@.disabled", ctx_r998.noAnimation == null ? null : ctx_r998.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r998.noAnimation == null ? null : ctx_r998.noAnimation.nzNoAnimation);
} }
export function NzTreeServiceFactory(higherOrderService, treeService) {
    return higherOrderService ? higherOrderService : treeService;
}
const NZ_CONFIG_COMPONENT_NAME = 'tree';
export class NzTreeComponent extends NzTreeBase {
    constructor(nzTreeService, nzConfigService, cdr, noAnimation) {
        super(nzTreeService);
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.noAnimation = noAnimation;
        this.nzShowExpand = true;
        this.nzShowLine = false;
        this.nzCheckable = false;
        this.nzAsyncData = false;
        this.nzDraggable = false;
        this.nzSelectMode = false;
        this.nzCheckStrictly = false;
        this.nzExpandAll = false;
        this._nzDefaultExpandAll = false;
        this.nzMultiple = false;
        this.nzExpandedKeysChange = new EventEmitter();
        this.nzSelectedKeysChange = new EventEmitter();
        this.nzCheckedKeysChange = new EventEmitter();
        this.nzSearchValueChange = new EventEmitter();
        /**
         * @deprecated use `nzSearchValueChange` instead.
         */
        this.nzOnSearchNode = new EventEmitter();
        this.nzClick = new EventEmitter();
        this.nzDblClick = new EventEmitter();
        this.nzContextMenu = new EventEmitter();
        this.nzCheckBoxChange = new EventEmitter();
        this.nzExpandChange = new EventEmitter();
        this.nzOnDragStart = new EventEmitter();
        this.nzOnDragEnter = new EventEmitter();
        this.nzOnDragOver = new EventEmitter();
        this.nzOnDragLeave = new EventEmitter();
        this.nzOnDrop = new EventEmitter();
        this.nzOnDragEnd = new EventEmitter();
        this.nzDefaultSubject = new ReplaySubject(6);
        this.destroy$ = new Subject();
        this.prefixCls = 'ant-tree';
        this.classMap = {};
        this.onChange = () => null;
        this.onTouched = () => null;
    }
    get treeTemplate() {
        return this.nzTreeTemplate || this.nzTreeTemplateChild;
    }
    /**
     * @deprecated 9.0.0 use `nzExpandAll` instead.
     */
    set nzDefaultExpandAll(value) {
        warnDeprecation(`'nzDefaultExpandAll' would be removed in 9.0.0. Please use 'nzExpandAll' instead.`);
        this.nzExpandAll = value;
        this._nzDefaultExpandAll = value;
    }
    get nzDefaultExpandAll() {
        return this._nzDefaultExpandAll;
    }
    set nzData(value) {
        this.initNzData(value);
    }
    /**
     * @deprecated 9.0.0 - use `nzExpandedKeys` instead.
     */
    set nzDefaultExpandedKeys(value) {
        warnDeprecation(`'nzDefaultExpandedKeys' would be removed in 9.0.0. Please use 'nzExpandedKeys' instead.`);
        this.nzDefaultSubject.next({ type: 'nzExpandedKeys', keys: value });
    }
    /**
     * @deprecated 9.0.0 - use `nzSelectedKeys` instead.
     */
    set nzDefaultSelectedKeys(value) {
        warnDeprecation(`'nzDefaultSelectedKeys' would be removed in 9.0.0. Please use 'nzSelectedKeys' instead.`);
        this.nzDefaultSubject.next({ type: 'nzSelectedKeys', keys: value });
    }
    /**
     * @deprecated 9.0.0 - use `nzCheckedKeys` instead.
     */
    set nzDefaultCheckedKeys(value) {
        warnDeprecation(`'nzDefaultCheckedKeys' would be removed in 9.0.0. Please use 'nzCheckedKeys' instead.`);
        this.nzDefaultSubject.next({ type: 'nzCheckedKeys', keys: value });
    }
    set nzExpandedKeys(value) {
        this.nzDefaultSubject.next({ type: 'nzExpandedKeys', keys: value });
    }
    set nzSelectedKeys(value) {
        this.nzDefaultSubject.next({ type: 'nzSelectedKeys', keys: value });
    }
    set nzCheckedKeys(value) {
        this.nzDefaultSubject.next({ type: 'nzCheckedKeys', keys: value });
    }
    set nzSearchValue(value) {
        this._searchValue = value;
        this.nzTreeService.searchExpand(value);
        if (isNotNil(value)) {
            this.nzSearchValueChange.emit(this.nzTreeService.formatEvent('search', null, null));
            /**
             * @deprecated 9.0.0 - use `nzOnSearchNode` instead.
             * Hide warning, need remove next version
             */
            this.nzOnSearchNode.emit(this.nzTreeService.formatEvent('search', null, null));
        }
    }
    get nzSearchValue() {
        return this._searchValue;
    }
    /**
     * To render nodes if root is changed.
     */
    get nzNodes() {
        return this.nzTreeService.rootNodes;
    }
    setClassMap() {
        this.classMap = {
            [this.prefixCls]: true,
            [this.prefixCls + '-show-line']: this.nzShowLine,
            [`${this.prefixCls}-icon-hide`]: !this.nzShowIcon,
            [`${this.prefixCls}-block-node`]: this.nzBlockNode,
            ['draggable-tree']: this.nzDraggable,
            ['ant-select-tree']: this.nzSelectMode
        };
    }
    writeValue(value) {
        this.initNzData(value);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    // tslint:disable-next-line:no-any
    initNzData(value) {
        if (Array.isArray(value)) {
            this.nzTreeService.isCheckStrictly = this.nzCheckStrictly;
            this.nzTreeService.isMultiple = this.nzMultiple;
            this.nzTreeService.initTree(this.coerceTreeNodes(value));
        }
    }
    ngOnInit() {
        this.setClassMap();
        this.nzDefaultSubject.pipe(takeUntil(this.destroy$)).subscribe((data) => {
            if (!data || !data.keys) {
                return;
            }
            switch (data.type) {
                case 'nzExpandedKeys':
                    this.nzTreeService.calcExpandedKeys(data.keys, this.nzNodes);
                    this.nzExpandedKeysChange.emit(data.keys);
                    break;
                case 'nzSelectedKeys':
                    this.nzTreeService.calcSelectedKeys(data.keys, this.nzNodes, this.nzMultiple);
                    this.nzSelectedKeysChange.emit(data.keys);
                    break;
                case 'nzCheckedKeys':
                    this.nzTreeService.calcCheckedKeys(data.keys, this.nzNodes, this.nzCheckStrictly);
                    this.nzCheckedKeysChange.emit(data.keys);
                    break;
            }
            this.cdr.markForCheck();
        });
        this.nzTreeService
            .eventTriggerChanged()
            .pipe(takeUntil(this.destroy$))
            .subscribe(data => {
            switch (data.eventName) {
                case 'expand':
                    this.nzExpandChange.emit(data);
                    break;
                case 'click':
                    this.nzClick.emit(data);
                    break;
                case 'check':
                    this.nzCheckBoxChange.emit(data);
                    break;
                case 'dblclick':
                    this.nzDblClick.emit(data);
                    break;
                case 'contextmenu':
                    this.nzContextMenu.emit(data);
                    break;
                // drag drop
                case 'dragstart':
                    this.nzOnDragStart.emit(data);
                    break;
                case 'dragenter':
                    this.nzOnDragEnter.emit(data);
                    break;
                case 'dragover':
                    this.nzOnDragOver.emit(data);
                    break;
                case 'dragleave':
                    this.nzOnDragLeave.emit(data);
                    break;
                case 'drop':
                    this.nzOnDrop.emit(data);
                    break;
                case 'dragend':
                    this.nzOnDragEnd.emit(data);
                    break;
            }
        });
    }
    ngOnChanges(changes) {
        if (changes.nzCheckStrictly) {
            this.nzTreeService.isCheckStrictly = this.nzCheckStrictly;
        }
        if (changes.nzMultiple) {
            this.nzTreeService.isMultiple = this.nzMultiple;
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
/** @nocollapse */ NzTreeComponent.ɵfac = function NzTreeComponent_Factory(t) { return new (t || NzTreeComponent)(i0.ɵɵdirectiveInject(i1.NzTreeBaseService), i0.ɵɵdirectiveInject(i1.NzConfigService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.NzNoAnimationDirective, 9)); };
/** @nocollapse */ NzTreeComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzTreeComponent, selectors: [["nz-tree"]], contentQueries: function NzTreeComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵstaticContentQuery(dirIndex, _c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.nzTreeTemplateChild = _t.first);
    } }, inputs: { nzShowIcon: "nzShowIcon", nzShowExpand: "nzShowExpand", nzShowLine: "nzShowLine", nzExpandedIcon: "nzExpandedIcon", nzCheckable: "nzCheckable", nzAsyncData: "nzAsyncData", nzDraggable: "nzDraggable", nzHideUnMatched: "nzHideUnMatched", nzSelectMode: "nzSelectMode", nzCheckStrictly: "nzCheckStrictly", nzBlockNode: "nzBlockNode", nzExpandAll: "nzExpandAll", nzTreeTemplate: "nzTreeTemplate", nzDefaultExpandAll: "nzDefaultExpandAll", nzBeforeDrop: "nzBeforeDrop", nzMultiple: "nzMultiple", nzData: "nzData", nzDefaultExpandedKeys: "nzDefaultExpandedKeys", nzDefaultSelectedKeys: "nzDefaultSelectedKeys", nzDefaultCheckedKeys: "nzDefaultCheckedKeys", nzExpandedKeys: "nzExpandedKeys", nzSelectedKeys: "nzSelectedKeys", nzCheckedKeys: "nzCheckedKeys", nzSearchValue: "nzSearchValue" }, outputs: { nzExpandedKeysChange: "nzExpandedKeysChange", nzSelectedKeysChange: "nzSelectedKeysChange", nzCheckedKeysChange: "nzCheckedKeysChange", nzSearchValueChange: "nzSearchValueChange", nzOnSearchNode: "nzOnSearchNode", nzClick: "nzClick", nzDblClick: "nzDblClick", nzContextMenu: "nzContextMenu", nzCheckBoxChange: "nzCheckBoxChange", nzExpandChange: "nzExpandChange", nzOnDragStart: "nzOnDragStart", nzOnDragEnter: "nzOnDragEnter", nzOnDragOver: "nzOnDragOver", nzOnDragLeave: "nzOnDragLeave", nzOnDrop: "nzOnDrop", nzOnDragEnd: "nzOnDragEnd" }, exportAs: ["nzTree"], features: [i0.ɵɵProvidersFeature([
            NzTreeService,
            {
                provide: NzTreeBaseService,
                useFactory: NzTreeServiceFactory,
                deps: [[new SkipSelf(), new Optional(), NzTreeHigherOrderServiceToken], NzTreeService]
            },
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef((() => NzTreeComponent)),
                multi: true
            }
        ]), i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature()], decls: 2, vars: 2, consts: [["role", "tree", "unselectable", "on", 3, "ngClass"], [4, "ngFor", "ngForOf"], [3, "nzTreeNode", "nzSelectMode", "nzShowLine", "nzExpandedIcon", "nzDraggable", "nzCheckable", "nzShowExpand", "nzAsyncData", "nzSearchValue", "nzHideUnMatched", "nzBeforeDrop", "nzExpandAll", "nzShowIcon", "nzTreeTemplate", "nzNoAnimation"]], template: function NzTreeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "ul", 0);
        i0.ɵɵtemplate(1, NzTreeComponent_ng_container_1_Template, 2, 16, "ng-container", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.classMap);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.nzNodes);
    } }, directives: [i2.NgClass, i2.NgForOf, i3.NzTreeNodeComponent, i1.NzNoAnimationDirective], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean(), WithConfig(NZ_CONFIG_COMPONENT_NAME, false),
    __metadata("design:type", Boolean)
], NzTreeComponent.prototype, "nzShowIcon", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzTreeComponent.prototype, "nzShowExpand", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTreeComponent.prototype, "nzShowLine", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTreeComponent.prototype, "nzCheckable", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTreeComponent.prototype, "nzAsyncData", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzTreeComponent.prototype, "nzDraggable", void 0);
__decorate([
    InputBoolean(), WithConfig(NZ_CONFIG_COMPONENT_NAME, false),
    __metadata("design:type", Boolean)
], NzTreeComponent.prototype, "nzHideUnMatched", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTreeComponent.prototype, "nzSelectMode", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTreeComponent.prototype, "nzCheckStrictly", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
    __metadata("design:type", Boolean)
], NzTreeComponent.prototype, "nzBlockNode", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTreeComponent.prototype, "nzExpandAll", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], NzTreeComponent.prototype, "nzDefaultExpandAll", null);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTreeComponent.prototype, "nzMultiple", void 0);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzTreeComponent, [{
        type: Component,
        args: [{
                selector: 'nz-tree',
                exportAs: 'nzTree',
                templateUrl: './nz-tree.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    NzTreeService,
                    {
                        provide: NzTreeBaseService,
                        useFactory: NzTreeServiceFactory,
                        deps: [[new SkipSelf(), new Optional(), NzTreeHigherOrderServiceToken], NzTreeService]
                    },
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((() => NzTreeComponent)),
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: i1.NzTreeBaseService }, { type: i1.NzConfigService }, { type: i0.ChangeDetectorRef }, { type: i1.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { nzShowIcon: [{
            type: Input
        }], nzShowExpand: [{
            type: Input
        }], nzShowLine: [{
            type: Input
        }], nzExpandedIcon: [{
            type: Input
        }], nzCheckable: [{
            type: Input
        }], nzAsyncData: [{
            type: Input
        }], nzDraggable: [{
            type: Input
        }], nzHideUnMatched: [{
            type: Input
        }], nzSelectMode: [{
            type: Input
        }], nzCheckStrictly: [{
            type: Input
        }], nzBlockNode: [{
            type: Input
        }], nzExpandAll: [{
            type: Input
        }], nzTreeTemplate: [{
            type: Input
        }], nzTreeTemplateChild: [{
            type: ContentChild,
            args: ['nzTreeTemplate', { static: true }]
        }], nzDefaultExpandAll: [{
            type: Input
        }], nzBeforeDrop: [{
            type: Input
        }], nzMultiple: [{
            type: Input
        }], nzData: [{
            type: Input
        }], nzDefaultExpandedKeys: [{
            type: Input
        }], nzDefaultSelectedKeys: [{
            type: Input
        }], nzDefaultCheckedKeys: [{
            type: Input
        }], nzExpandedKeys: [{
            type: Input
        }], nzSelectedKeys: [{
            type: Input
        }], nzCheckedKeys: [{
            type: Input
        }], nzSearchValue: [{
            type: Input
        }], nzExpandedKeysChange: [{
            type: Output
        }], nzSelectedKeysChange: [{
            type: Output
        }], nzCheckedKeysChange: [{
            type: Output
        }], nzSearchValueChange: [{
            type: Output
        }], nzOnSearchNode: [{
            type: Output
        }], nzClick: [{
            type: Output
        }], nzDblClick: [{
            type: Output
        }], nzContextMenu: [{
            type: Output
        }], nzCheckBoxChange: [{
            type: Output
        }], nzExpandChange: [{
            type: Output
        }], nzOnDragStart: [{
            type: Output
        }], nzOnDragEnter: [{
            type: Output
        }], nzOnDragOver: [{
            type: Output
        }], nzOnDragLeave: [{
            type: Output
        }], nzOnDrop: [{
            type: Output
        }], nzOnDragEnd: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3RyZWUvIiwic291cmNlcyI6WyJuei10cmVlLmNvbXBvbmVudC50cyIsIm56LXRyZWUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osWUFBWSxFQUNaLFVBQVUsRUFDVixJQUFJLEVBQ0osS0FBSyxFQUlMLFFBQVEsRUFDUixNQUFNLEVBRU4sUUFBUSxFQUNSLFdBQVcsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFjLGFBQWEsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFDTCxZQUFZLEVBQ1osUUFBUSxFQUNSLGVBQWUsRUFHZixzQkFBc0IsRUFDdEIsVUFBVSxFQUNWLGlCQUFpQixFQUNqQiw2QkFBNkIsRUFFN0IsZUFBZSxFQUNmLFVBQVUsRUFDWCxNQUFNLG9CQUFvQixDQUFDO0FBRTVCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7OztJQzVDaEQsNkJBQ0U7SUFBQSxrQ0FrQmU7SUFDakIsMEJBQWU7Ozs7SUFsQlgsZUFBbUI7SUFBbkIsc0NBQW1CLHVDQUFBLG1DQUFBLDJDQUFBLHFDQUFBLHFDQUFBLHVDQUFBLHFDQUFBLHlDQUFBLDZDQUFBLHVDQUFBLHFDQUFBLG1DQUFBLHlDQUFBLHdGQUFBLDJGQUFBOztBRDRDekIsTUFBTSxVQUFVLG9CQUFvQixDQUFDLGtCQUFxQyxFQUFFLFdBQTBCO0lBQ3BHLE9BQU8sa0JBQWtCLENBQUMsQ0FBQyxDQUFDLGtCQUFr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a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBRU4sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBmb3J3YXJkUmVmLFxyXG4gIEhvc3QsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZSxcclxuICBTa2lwU2VsZixcclxuICBUZW1wbGF0ZVJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBJbnB1dEJvb2xlYW4sXHJcbiAgaXNOb3ROaWwsXHJcbiAgTnpDb25maWdTZXJ2aWNlLFxyXG4gIE56Rm9ybWF0QmVmb3JlRHJvcEV2ZW50LFxyXG4gIE56Rm9ybWF0RW1pdEV2ZW50LFxyXG4gIE56Tm9BbmltYXRpb25EaXJlY3RpdmUsXHJcbiAgTnpUcmVlQmFzZSxcclxuICBOelRyZWVCYXNlU2VydmljZSxcclxuICBOelRyZWVIaWdoZXJPcmRlclNlcnZpY2VUb2tlbixcclxuICBOelRyZWVOb2RlLFxyXG4gIHdhcm5EZXByZWNhdGlvbixcclxuICBXaXRoQ29uZmlnXHJcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56VHJlZVNlcnZpY2UgfSBmcm9tICcuL256LXRyZWUuc2VydmljZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTnpUcmVlU2VydmljZUZhY3RvcnkoaGlnaGVyT3JkZXJTZXJ2aWNlOiBOelRyZWVCYXNlU2VydmljZSwgdHJlZVNlcnZpY2U6IE56VHJlZVNlcnZpY2UpOiBOelRyZWVCYXNlU2VydmljZSB7XHJcbiAgcmV0dXJuIGhpZ2hlck9yZGVyU2VydmljZSA/IGhpZ2hlck9yZGVyU2VydmljZSA6IHRyZWVTZXJ2aWNlO1xyXG59XHJcblxyXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAndHJlZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LXRyZWUnLFxyXG4gIGV4cG9ydEFzOiAnbnpUcmVlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotdHJlZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBOelRyZWVTZXJ2aWNlLFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOelRyZWVCYXNlU2VydmljZSxcclxuICAgICAgdXNlRmFjdG9yeTogTnpUcmVlU2VydmljZUZhY3RvcnksXHJcbiAgICAgIGRlcHM6IFtbbmV3IFNraXBTZWxmKCksIG5ldyBPcHRpb25hbCgpLCBOelRyZWVIaWdoZXJPcmRlclNlcnZpY2VUb2tlbl0sIE56VHJlZVNlcnZpY2VdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnpUcmVlQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelRyZWVDb21wb25lbnQgZXh0ZW5kcyBOelRyZWVCYXNlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIGZhbHNlKSBuelNob3dJY29uOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dFeHBhbmQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dMaW5lID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpFeHBhbmRlZEljb246IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelRyZWVOb2RlIH0+O1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekNoZWNrYWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekFzeW5jRGF0YSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRyYWdnYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCBmYWxzZSkgbnpIaWRlVW5NYXRjaGVkOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNlbGVjdE1vZGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDaGVja1N0cmljdGx5ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCBmYWxzZSkgQElucHV0Qm9vbGVhbigpIG56QmxvY2tOb2RlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekV4cGFuZEFsbCA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKSBuelRyZWVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56VHJlZU5vZGUgfT47XHJcbiAgQENvbnRlbnRDaGlsZCgnbnpUcmVlVGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBuelRyZWVUZW1wbGF0ZUNoaWxkOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpUcmVlTm9kZSB9PjtcclxuICBnZXQgdHJlZVRlbXBsYXRlKCk6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelRyZWVOb2RlIH0+IHtcclxuICAgIHJldHVybiB0aGlzLm56VHJlZVRlbXBsYXRlIHx8IHRoaXMubnpUcmVlVGVtcGxhdGVDaGlsZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXByZWNhdGVkIDkuMC4wIHVzZSBgbnpFeHBhbmRBbGxgIGluc3RlYWQuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBASW5wdXRCb29sZWFuKClcclxuICBzZXQgbnpEZWZhdWx0RXhwYW5kQWxsKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB3YXJuRGVwcmVjYXRpb24oYCduekRlZmF1bHRFeHBhbmRBbGwnIHdvdWxkIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFBsZWFzZSB1c2UgJ256RXhwYW5kQWxsJyBpbnN0ZWFkLmApO1xyXG4gICAgdGhpcy5uekV4cGFuZEFsbCA9IHZhbHVlO1xyXG4gICAgdGhpcy5fbnpEZWZhdWx0RXhwYW5kQWxsID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpEZWZhdWx0RXhwYW5kQWxsKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX256RGVmYXVsdEV4cGFuZEFsbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX256RGVmYXVsdEV4cGFuZEFsbCA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKSBuekJlZm9yZURyb3A6IChjb25maXJtOiBOekZvcm1hdEJlZm9yZURyb3BFdmVudCkgPT4gT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56TXVsdGlwbGUgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KClcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgc2V0IG56RGF0YSh2YWx1ZTogYW55W10pIHtcclxuICAgIHRoaXMuaW5pdE56RGF0YSh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCA5LjAuMCAtIHVzZSBgbnpFeHBhbmRlZEtleXNgIGluc3RlYWQuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpEZWZhdWx0RXhwYW5kZWRLZXlzKHZhbHVlOiBzdHJpbmdbXSkge1xyXG4gICAgd2FybkRlcHJlY2F0aW9uKGAnbnpEZWZhdWx0RXhwYW5kZWRLZXlzJyB3b3VsZCBiZSByZW1vdmVkIGluIDkuMC4wLiBQbGVhc2UgdXNlICduekV4cGFuZGVkS2V5cycgaW5zdGVhZC5gKTtcclxuICAgIHRoaXMubnpEZWZhdWx0U3ViamVjdC5uZXh0KHsgdHlwZTogJ256RXhwYW5kZWRLZXlzJywga2V5czogdmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCA5LjAuMCAtIHVzZSBgbnpTZWxlY3RlZEtleXNgIGluc3RlYWQuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpEZWZhdWx0U2VsZWN0ZWRLZXlzKHZhbHVlOiBzdHJpbmdbXSkge1xyXG4gICAgd2FybkRlcHJlY2F0aW9uKGAnbnpEZWZhdWx0U2VsZWN0ZWRLZXlzJyB3b3VsZCBiZSByZW1vdmVkIGluIDkuMC4wLiBQbGVhc2UgdXNlICduelNlbGVjdGVkS2V5cycgaW5zdGVhZC5gKTtcclxuICAgIHRoaXMubnpEZWZhdWx0U3ViamVjdC5uZXh0KHsgdHlwZTogJ256U2VsZWN0ZWRLZXlzJywga2V5czogdmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCA5LjAuMCAtIHVzZSBgbnpDaGVja2VkS2V5c2AgaW5zdGVhZC5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekRlZmF1bHRDaGVja2VkS2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcclxuICAgIHdhcm5EZXByZWNhdGlvbihgJ256RGVmYXVsdENoZWNrZWRLZXlzJyB3b3VsZCBiZSByZW1vdmVkIGluIDkuMC4wLiBQbGVhc2UgdXNlICduekNoZWNrZWRLZXlzJyBpbnN0ZWFkLmApO1xyXG4gICAgdGhpcy5uekRlZmF1bHRTdWJqZWN0Lm5leHQoeyB0eXBlOiAnbnpDaGVja2VkS2V5cycsIGtleXM6IHZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpFeHBhbmRlZEtleXModmFsdWU6IHN0cmluZ1tdKSB7XHJcbiAgICB0aGlzLm56RGVmYXVsdFN1YmplY3QubmV4dCh7IHR5cGU6ICduekV4cGFuZGVkS2V5cycsIGtleXM6IHZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpTZWxlY3RlZEtleXModmFsdWU6IHN0cmluZ1tdKSB7XHJcbiAgICB0aGlzLm56RGVmYXVsdFN1YmplY3QubmV4dCh7IHR5cGU6ICduelNlbGVjdGVkS2V5cycsIGtleXM6IHZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpDaGVja2VkS2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcclxuICAgIHRoaXMubnpEZWZhdWx0U3ViamVjdC5uZXh0KHsgdHlwZTogJ256Q2hlY2tlZEtleXMnLCBrZXlzOiB2YWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56U2VhcmNoVmFsdWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fc2VhcmNoVmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMubnpUcmVlU2VydmljZS5zZWFyY2hFeHBhbmQodmFsdWUpO1xyXG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xyXG4gICAgICB0aGlzLm56U2VhcmNoVmFsdWVDaGFuZ2UuZW1pdCh0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ3NlYXJjaCcsIG51bGwsIG51bGwpKTtcclxuICAgICAgLyoqXHJcbiAgICAgICAqIEBkZXByZWNhdGVkIDkuMC4wIC0gdXNlIGBuek9uU2VhcmNoTm9kZWAgaW5zdGVhZC5cclxuICAgICAgICogSGlkZSB3YXJuaW5nLCBuZWVkIHJlbW92ZSBuZXh0IHZlcnNpb25cclxuICAgICAgICovXHJcbiAgICAgIHRoaXMubnpPblNlYXJjaE5vZGUuZW1pdCh0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ3NlYXJjaCcsIG51bGwsIG51bGwpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBuelNlYXJjaFZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2VhcmNoVmFsdWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUbyByZW5kZXIgbm9kZXMgaWYgcm9vdCBpcyBjaGFuZ2VkLlxyXG4gICAqL1xyXG4gIGdldCBuek5vZGVzKCk6IE56VHJlZU5vZGVbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5uelRyZWVTZXJ2aWNlLnJvb3ROb2RlcztcclxuICB9XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekV4cGFuZGVkS2V5c0NoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZ1tdPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nW10+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56U2VsZWN0ZWRLZXlzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDaGVja2VkS2V5c0NoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZ1tdPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nW10+KCk7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNlYXJjaFZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgdXNlIGBuelNlYXJjaFZhbHVlQ2hhbmdlYCBpbnN0ZWFkLlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uU2VhcmNoTm9kZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpEYmxDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q29udGV4dE1lbnUgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNoZWNrQm94Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpFeHBhbmRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkRyYWdTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25EcmFnRW50ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uRHJhZ092ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uRHJhZ0xlYXZlID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkRyb3AgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uRHJhZ0VuZCA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XHJcblxyXG4gIF9zZWFyY2hWYWx1ZTogc3RyaW5nO1xyXG4gIG56RGVmYXVsdFN1YmplY3QgPSBuZXcgUmVwbGF5U3ViamVjdDx7IHR5cGU6IHN0cmluZzsga2V5czogc3RyaW5nW10gfT4oNik7XHJcbiAgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xyXG4gIHByZWZpeENscyA9ICdhbnQtdHJlZSc7XHJcbiAgY2xhc3NNYXAgPSB7fTtcclxuXHJcbiAgb25DaGFuZ2U6ICh2YWx1ZTogTnpUcmVlTm9kZVtdKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcclxuICBvblRvdWNoZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xyXG5cclxuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xhc3NNYXAgPSB7XHJcbiAgICAgIFt0aGlzLnByZWZpeENsc106IHRydWUsXHJcbiAgICAgIFt0aGlzLnByZWZpeENscyArICctc2hvdy1saW5lJ106IHRoaXMubnpTaG93TGluZSxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1pY29uLWhpZGVgXTogIXRoaXMubnpTaG93SWNvbixcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1ibG9jay1ub2RlYF06IHRoaXMubnpCbG9ja05vZGUsXHJcbiAgICAgIFsnZHJhZ2dhYmxlLXRyZWUnXTogdGhpcy5uekRyYWdnYWJsZSxcclxuICAgICAgWydhbnQtc2VsZWN0LXRyZWUnXTogdGhpcy5uelNlbGVjdE1vZGVcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBOelRyZWVOb2RlW10pOiB2b2lkIHtcclxuICAgIHRoaXMuaW5pdE56RGF0YSh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogTnpUcmVlTm9kZVtdKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBpbml0TnpEYXRhKHZhbHVlOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5pc0NoZWNrU3RyaWN0bHkgPSB0aGlzLm56Q2hlY2tTdHJpY3RseTtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmlzTXVsdGlwbGUgPSB0aGlzLm56TXVsdGlwbGU7XHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5pbml0VHJlZSh0aGlzLmNvZXJjZVRyZWVOb2Rlcyh2YWx1ZSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBuelRyZWVTZXJ2aWNlOiBOelRyZWVCYXNlU2VydmljZSxcclxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG4gICkge1xyXG4gICAgc3VwZXIobnpUcmVlU2VydmljZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICAgIHRoaXMubnpEZWZhdWx0U3ViamVjdC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkYXRhOiB7IHR5cGU6IHN0cmluZzsga2V5czogc3RyaW5nW10gfSkgPT4ge1xyXG4gICAgICBpZiAoIWRhdGEgfHwgIWRhdGEua2V5cykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBzd2l0Y2ggKGRhdGEudHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ256RXhwYW5kZWRLZXlzJzpcclxuICAgICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jYWxjRXhwYW5kZWRLZXlzKGRhdGEua2V5cywgdGhpcy5uek5vZGVzKTtcclxuICAgICAgICAgIHRoaXMubnpFeHBhbmRlZEtleXNDaGFuZ2UuZW1pdChkYXRhLmtleXMpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbnpTZWxlY3RlZEtleXMnOlxyXG4gICAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNhbGNTZWxlY3RlZEtleXMoZGF0YS5rZXlzLCB0aGlzLm56Tm9kZXMsIHRoaXMubnpNdWx0aXBsZSk7XHJcbiAgICAgICAgICB0aGlzLm56U2VsZWN0ZWRLZXlzQ2hhbmdlLmVtaXQoZGF0YS5rZXlzKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ256Q2hlY2tlZEtleXMnOlxyXG4gICAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNhbGNDaGVja2VkS2V5cyhkYXRhLmtleXMsIHRoaXMubnpOb2RlcywgdGhpcy5uekNoZWNrU3RyaWN0bHkpO1xyXG4gICAgICAgICAgdGhpcy5uekNoZWNrZWRLZXlzQ2hhbmdlLmVtaXQoZGF0YS5rZXlzKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLm56VHJlZVNlcnZpY2VcclxuICAgICAgLmV2ZW50VHJpZ2dlckNoYW5nZWQoKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChkYXRhLmV2ZW50TmFtZSkge1xyXG4gICAgICAgICAgY2FzZSAnZXhwYW5kJzpcclxuICAgICAgICAgICAgdGhpcy5uekV4cGFuZENoYW5nZS5lbWl0KGRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2NsaWNrJzpcclxuICAgICAgICAgICAgdGhpcy5uekNsaWNrLmVtaXQoZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnY2hlY2snOlxyXG4gICAgICAgICAgICB0aGlzLm56Q2hlY2tCb3hDaGFuZ2UuZW1pdChkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdkYmxjbGljayc6XHJcbiAgICAgICAgICAgIHRoaXMubnpEYmxDbGljay5lbWl0KGRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2NvbnRleHRtZW51JzpcclxuICAgICAgICAgICAgdGhpcy5uekNvbnRleHRNZW51LmVtaXQoZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgLy8gZHJhZyBkcm9wXHJcbiAgICAgICAgICBjYXNlICdkcmFnc3RhcnQnOlxyXG4gICAgICAgICAgICB0aGlzLm56T25EcmFnU3RhcnQuZW1pdChkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdkcmFnZW50ZXInOlxyXG4gICAgICAgICAgICB0aGlzLm56T25EcmFnRW50ZXIuZW1pdChkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdkcmFnb3Zlcic6XHJcbiAgICAgICAgICAgIHRoaXMubnpPbkRyYWdPdmVyLmVtaXQoZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnZHJhZ2xlYXZlJzpcclxuICAgICAgICAgICAgdGhpcy5uek9uRHJhZ0xlYXZlLmVtaXQoZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnZHJvcCc6XHJcbiAgICAgICAgICAgIHRoaXMubnpPbkRyb3AuZW1pdChkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdkcmFnZW5kJzpcclxuICAgICAgICAgICAgdGhpcy5uek9uRHJhZ0VuZC5lbWl0KGRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbcHJvcGVydHlOYW1lOiBzdHJpbmddOiBTaW1wbGVDaGFuZ2UgfSk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMubnpDaGVja1N0cmljdGx5KSB7XHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5pc0NoZWNrU3RyaWN0bHkgPSB0aGlzLm56Q2hlY2tTdHJpY3RseTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLm56TXVsdGlwbGUpIHtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmlzTXVsdGlwbGUgPSB0aGlzLm56TXVsdGlwbGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG4iLCI8dWwgcm9sZT1cInRyZWVcIiB1bnNlbGVjdGFibGU9XCJvblwiIFtuZ0NsYXNzXT1cImNsYXNzTWFwXCI+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgbm9kZSBvZiBuek5vZGVzXCI+XHJcbiAgICA8bnotdHJlZS1ub2RlXHJcbiAgICAgIFtuelRyZWVOb2RlXT1cIm5vZGVcIlxyXG4gICAgICBbbnpTZWxlY3RNb2RlXT1cIm56U2VsZWN0TW9kZVwiXHJcbiAgICAgIFtuelNob3dMaW5lXT1cIm56U2hvd0xpbmVcIlxyXG4gICAgICBbbnpFeHBhbmRlZEljb25dPVwibnpFeHBhbmRlZEljb25cIlxyXG4gICAgICBbbnpEcmFnZ2FibGVdPVwibnpEcmFnZ2FibGVcIlxyXG4gICAgICBbbnpDaGVja2FibGVdPVwibnpDaGVja2FibGVcIlxyXG4gICAgICBbbnpTaG93RXhwYW5kXT1cIm56U2hvd0V4cGFuZFwiXHJcbiAgICAgIFtuekFzeW5jRGF0YV09XCJuekFzeW5jRGF0YVwiXHJcbiAgICAgIFtuelNlYXJjaFZhbHVlXT1cIm56U2VhcmNoVmFsdWVcIlxyXG4gICAgICBbbnpIaWRlVW5NYXRjaGVkXT1cIm56SGlkZVVuTWF0Y2hlZFwiXHJcbiAgICAgIFtuekJlZm9yZURyb3BdPVwibnpCZWZvcmVEcm9wXCJcclxuICAgICAgW256RXhwYW5kQWxsXT1cIm56RXhwYW5kQWxsXCJcclxuICAgICAgW256U2hvd0ljb25dPVwibnpTaG93SWNvblwiXHJcbiAgICAgIFtuelRyZWVUZW1wbGF0ZV09XCJ0cmVlVGVtcGxhdGVcIlxyXG4gICAgICBbQC5kaXNhYmxlZF09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXHJcbiAgICAgIFtuek5vQW5pbWF0aW9uXT1cIm5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCJcclxuICAgID5cclxuICAgIDwvbnotdHJlZS1ub2RlPlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG48L3VsPlxyXG4iXX0=