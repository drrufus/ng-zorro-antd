import { __decorate, __extends, __metadata } from "tslib";
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
var _c0 = ["nzTreeTemplate"];
function NzTreeComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "nz-tree-node", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var node_r1027 = ctx.$implicit;
    var ctx_r1026 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzTreeNode", node_r1027)("nzSelectMode", ctx_r1026.nzSelectMode)("nzShowLine", ctx_r1026.nzShowLine)("nzExpandedIcon", ctx_r1026.nzExpandedIcon)("nzDraggable", ctx_r1026.nzDraggable)("nzCheckable", ctx_r1026.nzCheckable)("nzShowExpand", ctx_r1026.nzShowExpand)("nzAsyncData", ctx_r1026.nzAsyncData)("nzSearchValue", ctx_r1026.nzSearchValue)("nzHideUnMatched", ctx_r1026.nzHideUnMatched)("nzBeforeDrop", ctx_r1026.nzBeforeDrop)("nzExpandAll", ctx_r1026.nzExpandAll)("nzShowIcon", ctx_r1026.nzShowIcon)("nzTreeTemplate", ctx_r1026.treeTemplate)("@.disabled", ctx_r1026.noAnimation == null ? null : ctx_r1026.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r1026.noAnimation == null ? null : ctx_r1026.noAnimation.nzNoAnimation);
} }
export function NzTreeServiceFactory(higherOrderService, treeService) {
    return higherOrderService ? higherOrderService : treeService;
}
var NZ_CONFIG_COMPONENT_NAME = 'tree';
var NzTreeComponent = /** @class */ (function (_super) {
    __extends(NzTreeComponent, _super);
    function NzTreeComponent(nzTreeService, nzConfigService, cdr, noAnimation) {
        var _this = _super.call(this, nzTreeService) || this;
        _this.nzConfigService = nzConfigService;
        _this.cdr = cdr;
        _this.noAnimation = noAnimation;
        _this.nzShowExpand = true;
        _this.nzShowLine = false;
        _this.nzCheckable = false;
        _this.nzAsyncData = false;
        _this.nzDraggable = false;
        _this.nzSelectMode = false;
        _this.nzCheckStrictly = false;
        _this.nzExpandAll = false;
        _this._nzDefaultExpandAll = false;
        _this.nzMultiple = false;
        _this.nzExpandedKeysChange = new EventEmitter();
        _this.nzSelectedKeysChange = new EventEmitter();
        _this.nzCheckedKeysChange = new EventEmitter();
        _this.nzSearchValueChange = new EventEmitter();
        /**
         * @deprecated use `nzSearchValueChange` instead.
         */
        _this.nzOnSearchNode = new EventEmitter();
        _this.nzClick = new EventEmitter();
        _this.nzDblClick = new EventEmitter();
        _this.nzContextMenu = new EventEmitter();
        _this.nzCheckBoxChange = new EventEmitter();
        _this.nzExpandChange = new EventEmitter();
        _this.nzOnDragStart = new EventEmitter();
        _this.nzOnDragEnter = new EventEmitter();
        _this.nzOnDragOver = new EventEmitter();
        _this.nzOnDragLeave = new EventEmitter();
        _this.nzOnDrop = new EventEmitter();
        _this.nzOnDragEnd = new EventEmitter();
        _this.nzDefaultSubject = new ReplaySubject(6);
        _this.destroy$ = new Subject();
        _this.prefixCls = 'ant-tree';
        _this.classMap = {};
        _this.onChange = function () { return null; };
        _this.onTouched = function () { return null; };
        return _this;
    }
    Object.defineProperty(NzTreeComponent.prototype, "treeTemplate", {
        get: function () {
            return this.nzTreeTemplate || this.nzTreeTemplateChild;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeComponent.prototype, "nzDefaultExpandAll", {
        get: function () {
            return this._nzDefaultExpandAll;
        },
        /**
         * @deprecated 9.0.0 use `nzExpandAll` instead.
         */
        set: function (value) {
            warnDeprecation("'nzDefaultExpandAll' would be removed in 9.0.0. Please use 'nzExpandAll' instead.");
            this.nzExpandAll = value;
            this._nzDefaultExpandAll = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeComponent.prototype, "nzData", {
        set: function (value) {
            this.initNzData(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeComponent.prototype, "nzDefaultExpandedKeys", {
        /**
         * @deprecated 9.0.0 - use `nzExpandedKeys` instead.
         */
        set: function (value) {
            warnDeprecation("'nzDefaultExpandedKeys' would be removed in 9.0.0. Please use 'nzExpandedKeys' instead.");
            this.nzDefaultSubject.next({ type: 'nzExpandedKeys', keys: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeComponent.prototype, "nzDefaultSelectedKeys", {
        /**
         * @deprecated 9.0.0 - use `nzSelectedKeys` instead.
         */
        set: function (value) {
            warnDeprecation("'nzDefaultSelectedKeys' would be removed in 9.0.0. Please use 'nzSelectedKeys' instead.");
            this.nzDefaultSubject.next({ type: 'nzSelectedKeys', keys: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeComponent.prototype, "nzDefaultCheckedKeys", {
        /**
         * @deprecated 9.0.0 - use `nzCheckedKeys` instead.
         */
        set: function (value) {
            warnDeprecation("'nzDefaultCheckedKeys' would be removed in 9.0.0. Please use 'nzCheckedKeys' instead.");
            this.nzDefaultSubject.next({ type: 'nzCheckedKeys', keys: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeComponent.prototype, "nzExpandedKeys", {
        set: function (value) {
            this.nzDefaultSubject.next({ type: 'nzExpandedKeys', keys: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeComponent.prototype, "nzSelectedKeys", {
        set: function (value) {
            this.nzDefaultSubject.next({ type: 'nzSelectedKeys', keys: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeComponent.prototype, "nzCheckedKeys", {
        set: function (value) {
            this.nzDefaultSubject.next({ type: 'nzCheckedKeys', keys: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeComponent.prototype, "nzSearchValue", {
        get: function () {
            return this._searchValue;
        },
        set: function (value) {
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeComponent.prototype, "nzNodes", {
        /**
         * To render nodes if root is changed.
         */
        get: function () {
            return this.nzTreeService.rootNodes;
        },
        enumerable: true,
        configurable: true
    });
    NzTreeComponent.prototype.setClassMap = function () {
        var _a;
        this.classMap = (_a = {},
            _a[this.prefixCls] = true,
            _a[this.prefixCls + '-show-line'] = this.nzShowLine,
            _a[this.prefixCls + "-icon-hide"] = !this.nzShowIcon,
            _a[this.prefixCls + "-block-node"] = this.nzBlockNode,
            _a['draggable-tree'] = this.nzDraggable,
            _a['ant-select-tree'] = this.nzSelectMode,
            _a);
    };
    NzTreeComponent.prototype.writeValue = function (value) {
        this.initNzData(value);
    };
    NzTreeComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    NzTreeComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    // tslint:disable-next-line:no-any
    NzTreeComponent.prototype.initNzData = function (value) {
        if (Array.isArray(value)) {
            this.nzTreeService.isCheckStrictly = this.nzCheckStrictly;
            this.nzTreeService.isMultiple = this.nzMultiple;
            this.nzTreeService.initTree(this.coerceTreeNodes(value));
        }
    };
    NzTreeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setClassMap();
        this.nzDefaultSubject.pipe(takeUntil(this.destroy$)).subscribe(function (data) {
            if (!data || !data.keys) {
                return;
            }
            switch (data.type) {
                case 'nzExpandedKeys':
                    _this.nzTreeService.calcExpandedKeys(data.keys, _this.nzNodes);
                    _this.nzExpandedKeysChange.emit(data.keys);
                    break;
                case 'nzSelectedKeys':
                    _this.nzTreeService.calcSelectedKeys(data.keys, _this.nzNodes, _this.nzMultiple);
                    _this.nzSelectedKeysChange.emit(data.keys);
                    break;
                case 'nzCheckedKeys':
                    _this.nzTreeService.calcCheckedKeys(data.keys, _this.nzNodes, _this.nzCheckStrictly);
                    _this.nzCheckedKeysChange.emit(data.keys);
                    break;
            }
            _this.cdr.markForCheck();
        });
        this.nzTreeService
            .eventTriggerChanged()
            .pipe(takeUntil(this.destroy$))
            .subscribe(function (data) {
            switch (data.eventName) {
                case 'expand':
                    _this.nzExpandChange.emit(data);
                    break;
                case 'click':
                    _this.nzClick.emit(data);
                    break;
                case 'check':
                    _this.nzCheckBoxChange.emit(data);
                    break;
                case 'dblclick':
                    _this.nzDblClick.emit(data);
                    break;
                case 'contextmenu':
                    _this.nzContextMenu.emit(data);
                    break;
                // drag drop
                case 'dragstart':
                    _this.nzOnDragStart.emit(data);
                    break;
                case 'dragenter':
                    _this.nzOnDragEnter.emit(data);
                    break;
                case 'dragover':
                    _this.nzOnDragOver.emit(data);
                    break;
                case 'dragleave':
                    _this.nzOnDragLeave.emit(data);
                    break;
                case 'drop':
                    _this.nzOnDrop.emit(data);
                    break;
                case 'dragend':
                    _this.nzOnDragEnd.emit(data);
                    break;
            }
        });
    };
    NzTreeComponent.prototype.ngOnChanges = function (changes) {
        if (changes.nzCheckStrictly) {
            this.nzTreeService.isCheckStrictly = this.nzCheckStrictly;
        }
        if (changes.nzMultiple) {
            this.nzTreeService.isMultiple = this.nzMultiple;
        }
    };
    NzTreeComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
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
                    useExisting: forwardRef((function () { return NzTreeComponent; })),
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
    return NzTreeComponent;
}(NzTreeBase));
export { NzTreeComponent };
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
                        useExisting: forwardRef((function () { return NzTreeComponent; })),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3RyZWUvIiwic291cmNlcyI6WyJuei10cmVlLmNvbXBvbmVudC50cyIsIm56LXRyZWUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osWUFBWSxFQUNaLFVBQVUsRUFDVixJQUFJLEVBQ0osS0FBSyxFQUlMLFFBQVEsRUFDUixNQUFNLEVBRU4sUUFBUSxFQUNSLFdBQVcsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFjLGFBQWEsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFDTCxZQUFZLEVBQ1osUUFBUSxFQUNSLGVBQWUsRUFHZixzQkFBc0IsRUFDdEIsVUFBVSxFQUNWLGlCQUFpQixFQUNqQiw2QkFBNkIsRUFFN0IsZUFBZSxFQUNmLFVBQVUsRUFDWCxNQUFNLG9CQUFvQixDQUFDO0FBRTVCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7OztJQzVDaEQsNkJBQ0U7SUFBQSxrQ0FrQmU7SUFDakIsMEJBQWU7Ozs7SUFsQlgsZUFBbUI7SUFBbkIsdUNBQW1CLHdDQUFBLG9DQUFBLDRDQUFBLHNDQUFBLHNDQUFBLHdDQUFBLHNDQUFBLDBDQUFBLDhDQUFBLHdDQUFBLHNDQUFBLG9DQUFBLDBDQUFBLDBGQUFBLDZGQUFBOztBRDRDekIsTUFBTSxVQUFVLG9CQUFvQixDQUFDLGtCQUFxQyxFQUFFLFdBQTBCO0lBQ3BHLE9BQU8sa0JBQWtCLENBQUMsQ0FBQyxDQUFDLGtCQUFr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LElBQUksRUFBRTs7a0JBUS9DLEtBQUs7O2tCQWNMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQVNMLEtBQUs7O2tCQVNMLEtBQUs7O2tCQVNMLEtBQUs7O2tCQU1MLEtBQUs7O2tCQUtMLEtBQUs7O2tCQUtMLEtBQUs7O2tCQUtMLEtBQUs7O2tCQXlCTCxNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFFTixNQUFNOztrQkFLTixNQUFNOztrQkFFTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFFTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgSG9zdCxcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlLFxyXG4gIFNraXBTZWxmLFxyXG4gIFRlbXBsYXRlUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIElucHV0Qm9vbGVhbixcclxuICBpc05vdE5pbCxcclxuICBOekNvbmZpZ1NlcnZpY2UsXHJcbiAgTnpGb3JtYXRCZWZvcmVEcm9wRXZlbnQsXHJcbiAgTnpGb3JtYXRFbWl0RXZlbnQsXHJcbiAgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSxcclxuICBOelRyZWVCYXNlLFxyXG4gIE56VHJlZUJhc2VTZXJ2aWNlLFxyXG4gIE56VHJlZUhpZ2hlck9yZGVyU2VydmljZVRva2VuLFxyXG4gIE56VHJlZU5vZGUsXHJcbiAgd2FybkRlcHJlY2F0aW9uLFxyXG4gIFdpdGhDb25maWdcclxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpUcmVlU2VydmljZSB9IGZyb20gJy4vbnotdHJlZS5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBOelRyZWVTZXJ2aWNlRmFjdG9yeShoaWdoZXJPcmRlclNlcnZpY2U6IE56VHJlZUJhc2VTZXJ2aWNlLCB0cmVlU2VydmljZTogTnpUcmVlU2VydmljZSk6IE56VHJlZUJhc2VTZXJ2aWNlIHtcclxuICByZXR1cm4gaGlnaGVyT3JkZXJTZXJ2aWNlID8gaGlnaGVyT3JkZXJTZXJ2aWNlIDogdHJlZVNlcnZpY2U7XHJcbn1cclxuXHJcbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICd0cmVlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotdHJlZScsXHJcbiAgZXhwb3J0QXM6ICduelRyZWUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei10cmVlLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIE56VHJlZVNlcnZpY2UsXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE56VHJlZUJhc2VTZXJ2aWNlLFxyXG4gICAgICB1c2VGYWN0b3J5OiBOelRyZWVTZXJ2aWNlRmFjdG9yeSxcclxuICAgICAgZGVwczogW1tuZXcgU2tpcFNlbGYoKSwgbmV3IE9wdGlvbmFsKCksIE56VHJlZUhpZ2hlck9yZGVyU2VydmljZVRva2VuXSwgTnpUcmVlU2VydmljZV1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOelRyZWVDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56VHJlZUNvbXBvbmVudCBleHRlbmRzIE56VHJlZUJhc2UgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgZmFsc2UpIG56U2hvd0ljb246IGJvb2xlYW47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd0V4cGFuZDogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd0xpbmUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBuekV4cGFuZGVkSWNvbjogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56VHJlZU5vZGUgfT47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q2hlY2thYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QXN5bmNEYXRhID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RHJhZ2dhYmxlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIGZhbHNlKSBuekhpZGVVbk1hdGNoZWQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2VsZWN0TW9kZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekNoZWNrU3RyaWN0bHkgPSBmYWxzZTtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIGZhbHNlKSBASW5wdXRCb29sZWFuKCkgbnpCbG9ja05vZGU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RXhwYW5kQWxsID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIG56VHJlZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpUcmVlTm9kZSB9PjtcclxuICBAQ29udGVudENoaWxkKCduelRyZWVUZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pIG56VHJlZVRlbXBsYXRlQ2hpbGQ6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelRyZWVOb2RlIH0+O1xyXG4gIGdldCB0cmVlVGVtcGxhdGUoKTogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56VHJlZU5vZGUgfT4ge1xyXG4gICAgcmV0dXJuIHRoaXMubnpUcmVlVGVtcGxhdGUgfHwgdGhpcy5uelRyZWVUZW1wbGF0ZUNoaWxkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgOS4wLjAgdXNlIGBuekV4cGFuZEFsbGAgaW5zdGVhZC5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dEJvb2xlYW4oKVxyXG4gIHNldCBuekRlZmF1bHRFeHBhbmRBbGwodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHdhcm5EZXByZWNhdGlvbihgJ256RGVmYXVsdEV4cGFuZEFsbCcgd291bGQgYmUgcmVtb3ZlZCBpbiA5LjAuMC4gUGxlYXNlIHVzZSAnbnpFeHBhbmRBbGwnIGluc3RlYWQuYCk7XHJcbiAgICB0aGlzLm56RXhwYW5kQWxsID0gdmFsdWU7XHJcbiAgICB0aGlzLl9uekRlZmF1bHRFeHBhbmRBbGwgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCBuekRlZmF1bHRFeHBhbmRBbGwoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbnpEZWZhdWx0RXhwYW5kQWxsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfbnpEZWZhdWx0RXhwYW5kQWxsID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIG56QmVmb3JlRHJvcDogKGNvbmZpcm06IE56Rm9ybWF0QmVmb3JlRHJvcEV2ZW50KSA9PiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpNdWx0aXBsZSA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBzZXQgbnpEYXRhKHZhbHVlOiBhbnlbXSkge1xyXG4gICAgdGhpcy5pbml0TnpEYXRhKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXByZWNhdGVkIDkuMC4wIC0gdXNlIGBuekV4cGFuZGVkS2V5c2AgaW5zdGVhZC5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekRlZmF1bHRFeHBhbmRlZEtleXModmFsdWU6IHN0cmluZ1tdKSB7XHJcbiAgICB3YXJuRGVwcmVjYXRpb24oYCduekRlZmF1bHRFeHBhbmRlZEtleXMnIHdvdWxkIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFBsZWFzZSB1c2UgJ256RXhwYW5kZWRLZXlzJyBpbnN0ZWFkLmApO1xyXG4gICAgdGhpcy5uekRlZmF1bHRTdWJqZWN0Lm5leHQoeyB0eXBlOiAnbnpFeHBhbmRlZEtleXMnLCBrZXlzOiB2YWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXByZWNhdGVkIDkuMC4wIC0gdXNlIGBuelNlbGVjdGVkS2V5c2AgaW5zdGVhZC5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekRlZmF1bHRTZWxlY3RlZEtleXModmFsdWU6IHN0cmluZ1tdKSB7XHJcbiAgICB3YXJuRGVwcmVjYXRpb24oYCduekRlZmF1bHRTZWxlY3RlZEtleXMnIHdvdWxkIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFBsZWFzZSB1c2UgJ256U2VsZWN0ZWRLZXlzJyBpbnN0ZWFkLmApO1xyXG4gICAgdGhpcy5uekRlZmF1bHRTdWJqZWN0Lm5leHQoeyB0eXBlOiAnbnpTZWxlY3RlZEtleXMnLCBrZXlzOiB2YWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXByZWNhdGVkIDkuMC4wIC0gdXNlIGBuekNoZWNrZWRLZXlzYCBpbnN0ZWFkLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56RGVmYXVsdENoZWNrZWRLZXlzKHZhbHVlOiBzdHJpbmdbXSkge1xyXG4gICAgd2FybkRlcHJlY2F0aW9uKGAnbnpEZWZhdWx0Q2hlY2tlZEtleXMnIHdvdWxkIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFBsZWFzZSB1c2UgJ256Q2hlY2tlZEtleXMnIGluc3RlYWQuYCk7XHJcbiAgICB0aGlzLm56RGVmYXVsdFN1YmplY3QubmV4dCh7IHR5cGU6ICduekNoZWNrZWRLZXlzJywga2V5czogdmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekV4cGFuZGVkS2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcclxuICAgIHRoaXMubnpEZWZhdWx0U3ViamVjdC5uZXh0KHsgdHlwZTogJ256RXhwYW5kZWRLZXlzJywga2V5czogdmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelNlbGVjdGVkS2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcclxuICAgIHRoaXMubnpEZWZhdWx0U3ViamVjdC5uZXh0KHsgdHlwZTogJ256U2VsZWN0ZWRLZXlzJywga2V5czogdmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekNoZWNrZWRLZXlzKHZhbHVlOiBzdHJpbmdbXSkge1xyXG4gICAgdGhpcy5uekRlZmF1bHRTdWJqZWN0Lm5leHQoeyB0eXBlOiAnbnpDaGVja2VkS2V5cycsIGtleXM6IHZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpTZWFyY2hWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9zZWFyY2hWYWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5uelRyZWVTZXJ2aWNlLnNlYXJjaEV4cGFuZCh2YWx1ZSk7XHJcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XHJcbiAgICAgIHRoaXMubnpTZWFyY2hWYWx1ZUNoYW5nZS5lbWl0KHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnc2VhcmNoJywgbnVsbCwgbnVsbCkpO1xyXG4gICAgICAvKipcclxuICAgICAgICogQGRlcHJlY2F0ZWQgOS4wLjAgLSB1c2UgYG56T25TZWFyY2hOb2RlYCBpbnN0ZWFkLlxyXG4gICAgICAgKiBIaWRlIHdhcm5pbmcsIG5lZWQgcmVtb3ZlIG5leHQgdmVyc2lvblxyXG4gICAgICAgKi9cclxuICAgICAgdGhpcy5uek9uU2VhcmNoTm9kZS5lbWl0KHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnc2VhcmNoJywgbnVsbCwgbnVsbCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG56U2VhcmNoVmFsdWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWFyY2hWYWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRvIHJlbmRlciBub2RlcyBpZiByb290IGlzIGNoYW5nZWQuXHJcbiAgICovXHJcbiAgZ2V0IG56Tm9kZXMoKTogTnpUcmVlTm9kZVtdIHtcclxuICAgIHJldHVybiB0aGlzLm56VHJlZVNlcnZpY2Uucm9vdE5vZGVzO1xyXG4gIH1cclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56RXhwYW5kZWRLZXlzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpTZWxlY3RlZEtleXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZ1tdPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNoZWNrZWRLZXlzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4oKTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56U2VhcmNoVmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xyXG5cclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCB1c2UgYG56U2VhcmNoVmFsdWVDaGFuZ2VgIGluc3RlYWQuXHJcbiAgICovXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25TZWFyY2hOb2RlID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekRibENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDb250ZXh0TWVudSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2hlY2tCb3hDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekV4cGFuZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uRHJhZ1N0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkRyYWdFbnRlciA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25EcmFnT3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25EcmFnTGVhdmUgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uRHJvcCA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25EcmFnRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcclxuXHJcbiAgX3NlYXJjaFZhbHVlOiBzdHJpbmc7XHJcbiAgbnpEZWZhdWx0U3ViamVjdCA9IG5ldyBSZXBsYXlTdWJqZWN0PHsgdHlwZTogc3RyaW5nOyBrZXlzOiBzdHJpbmdbXSB9Pig2KTtcclxuICBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJlZml4Q2xzID0gJ2FudC10cmVlJztcclxuICBjbGFzc01hcCA9IHt9O1xyXG5cclxuICBvbkNoYW5nZTogKHZhbHVlOiBOelRyZWVOb2RlW10pID0+IHZvaWQgPSAoKSA9PiBudWxsO1xyXG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IG51bGw7XHJcblxyXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jbGFzc01hcCA9IHtcclxuICAgICAgW3RoaXMucHJlZml4Q2xzXTogdHJ1ZSxcclxuICAgICAgW3RoaXMucHJlZml4Q2xzICsgJy1zaG93LWxpbmUnXTogdGhpcy5uelNob3dMaW5lLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWljb24taGlkZWBdOiAhdGhpcy5uelNob3dJY29uLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWJsb2NrLW5vZGVgXTogdGhpcy5uekJsb2NrTm9kZSxcclxuICAgICAgWydkcmFnZ2FibGUtdHJlZSddOiB0aGlzLm56RHJhZ2dhYmxlLFxyXG4gICAgICBbJ2FudC1zZWxlY3QtdHJlZSddOiB0aGlzLm56U2VsZWN0TW9kZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IE56VHJlZU5vZGVbXSk6IHZvaWQge1xyXG4gICAgdGhpcy5pbml0TnpEYXRhKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBOelRyZWVOb2RlW10pID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIGluaXROekRhdGEodmFsdWU6IGFueVtdKTogdm9pZCB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmlzQ2hlY2tTdHJpY3RseSA9IHRoaXMubnpDaGVja1N0cmljdGx5O1xyXG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2UuaXNNdWx0aXBsZSA9IHRoaXMubnpNdWx0aXBsZTtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmluaXRUcmVlKHRoaXMuY29lcmNlVHJlZU5vZGVzKHZhbHVlKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIG56VHJlZVNlcnZpY2U6IE56VHJlZUJhc2VTZXJ2aWNlLFxyXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXHJcbiAgKSB7XHJcbiAgICBzdXBlcihuelRyZWVTZXJ2aWNlKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgdGhpcy5uekRlZmF1bHRTdWJqZWN0LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRhdGE6IHsgdHlwZTogc3RyaW5nOyBrZXlzOiBzdHJpbmdbXSB9KSA9PiB7XHJcbiAgICAgIGlmICghZGF0YSB8fCAhZGF0YS5rZXlzKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHN3aXRjaCAoZGF0YS50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnbnpFeHBhbmRlZEtleXMnOlxyXG4gICAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNhbGNFeHBhbmRlZEtleXMoZGF0YS5rZXlzLCB0aGlzLm56Tm9kZXMpO1xyXG4gICAgICAgICAgdGhpcy5uekV4cGFuZGVkS2V5c0NoYW5nZS5lbWl0KGRhdGEua2V5cyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICduelNlbGVjdGVkS2V5cyc6XHJcbiAgICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UuY2FsY1NlbGVjdGVkS2V5cyhkYXRhLmtleXMsIHRoaXMubnpOb2RlcywgdGhpcy5uek11bHRpcGxlKTtcclxuICAgICAgICAgIHRoaXMubnpTZWxlY3RlZEtleXNDaGFuZ2UuZW1pdChkYXRhLmtleXMpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbnpDaGVja2VkS2V5cyc6XHJcbiAgICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UuY2FsY0NoZWNrZWRLZXlzKGRhdGEua2V5cywgdGhpcy5uek5vZGVzLCB0aGlzLm56Q2hlY2tTdHJpY3RseSk7XHJcbiAgICAgICAgICB0aGlzLm56Q2hlY2tlZEtleXNDaGFuZ2UuZW1pdChkYXRhLmtleXMpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMubnpUcmVlU2VydmljZVxyXG4gICAgICAuZXZlbnRUcmlnZ2VyQ2hhbmdlZCgpXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGRhdGEuZXZlbnROYW1lKSB7XHJcbiAgICAgICAgICBjYXNlICdleHBhbmQnOlxyXG4gICAgICAgICAgICB0aGlzLm56RXhwYW5kQ2hhbmdlLmVtaXQoZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnY2xpY2snOlxyXG4gICAgICAgICAgICB0aGlzLm56Q2xpY2suZW1pdChkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdjaGVjayc6XHJcbiAgICAgICAgICAgIHRoaXMubnpDaGVja0JveENoYW5nZS5lbWl0KGRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2RibGNsaWNrJzpcclxuICAgICAgICAgICAgdGhpcy5uekRibENsaWNrLmVtaXQoZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnY29udGV4dG1lbnUnOlxyXG4gICAgICAgICAgICB0aGlzLm56Q29udGV4dE1lbnUuZW1pdChkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAvLyBkcmFnIGRyb3BcclxuICAgICAgICAgIGNhc2UgJ2RyYWdzdGFydCc6XHJcbiAgICAgICAgICAgIHRoaXMubnpPbkRyYWdTdGFydC5lbWl0KGRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2RyYWdlbnRlcic6XHJcbiAgICAgICAgICAgIHRoaXMubnpPbkRyYWdFbnRlci5lbWl0KGRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2RyYWdvdmVyJzpcclxuICAgICAgICAgICAgdGhpcy5uek9uRHJhZ092ZXIuZW1pdChkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdkcmFnbGVhdmUnOlxyXG4gICAgICAgICAgICB0aGlzLm56T25EcmFnTGVhdmUuZW1pdChkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdkcm9wJzpcclxuICAgICAgICAgICAgdGhpcy5uek9uRHJvcC5lbWl0KGRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2RyYWdlbmQnOlxyXG4gICAgICAgICAgICB0aGlzLm56T25EcmFnRW5kLmVtaXQoZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtwcm9wZXJ0eU5hbWU6IHN0cmluZ106IFNpbXBsZUNoYW5nZSB9KTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5uekNoZWNrU3RyaWN0bHkpIHtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmlzQ2hlY2tTdHJpY3RseSA9IHRoaXMubnpDaGVja1N0cmljdGx5O1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMubnpNdWx0aXBsZSkge1xyXG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2UuaXNNdWx0aXBsZSA9IHRoaXMubnpNdWx0aXBsZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG59XHJcbiIsIjx1bCByb2xlPVwidHJlZVwiIHVuc2VsZWN0YWJsZT1cIm9uXCIgW25nQ2xhc3NdPVwiY2xhc3NNYXBcIj5cclxuICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBub2RlIG9mIG56Tm9kZXNcIj5cclxuICAgIDxuei10cmVlLW5vZGVcclxuICAgICAgW256VHJlZU5vZGVdPVwibm9kZVwiXHJcbiAgICAgIFtuelNlbGVjdE1vZGVdPVwibnpTZWxlY3RNb2RlXCJcclxuICAgICAgW256U2hvd0xpbmVdPVwibnpTaG93TGluZVwiXHJcbiAgICAgIFtuekV4cGFuZGVkSWNvbl09XCJuekV4cGFuZGVkSWNvblwiXHJcbiAgICAgIFtuekRyYWdnYWJsZV09XCJuekRyYWdnYWJsZVwiXHJcbiAgICAgIFtuekNoZWNrYWJsZV09XCJuekNoZWNrYWJsZVwiXHJcbiAgICAgIFtuelNob3dFeHBhbmRdPVwibnpTaG93RXhwYW5kXCJcclxuICAgICAgW256QXN5bmNEYXRhXT1cIm56QXN5bmNEYXRhXCJcclxuICAgICAgW256U2VhcmNoVmFsdWVdPVwibnpTZWFyY2hWYWx1ZVwiXHJcbiAgICAgIFtuekhpZGVVbk1hdGNoZWRdPVwibnpIaWRlVW5NYXRjaGVkXCJcclxuICAgICAgW256QmVmb3JlRHJvcF09XCJuekJlZm9yZURyb3BcIlxyXG4gICAgICBbbnpFeHBhbmRBbGxdPVwibnpFeHBhbmRBbGxcIlxyXG4gICAgICBbbnpTaG93SWNvbl09XCJuelNob3dJY29uXCJcclxuICAgICAgW256VHJlZVRlbXBsYXRlXT1cInRyZWVUZW1wbGF0ZVwiXHJcbiAgICAgIFtALmRpc2FibGVkXT1cIm5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCJcclxuICAgICAgW256Tm9BbmltYXRpb25dPVwibm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIlxyXG4gICAgPlxyXG4gICAgPC9uei10cmVlLW5vZGU+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbjwvdWw+XHJcbiJdfQ==