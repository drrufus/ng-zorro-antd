import { TemplateRef, Component, ChangeDetectionStrategy, ViewEncapsulation, ElementRef, Renderer2, Input, ChangeDetectorRef, ContentChildren, HostBinding, NgModule } from '@angular/core';
import { __decorate, __metadata } from 'tslib';
import { NzUpdateHostClassService, InputBoolean, NzAddOnModule } from 'ng-zorro-antd/core';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSpinModule } from 'ng-zorro-antd/spin';

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
/**
 * @record
 */
function NzListGrid() { }
if (false) {
    /** @type {?|undefined} */
    NzListGrid.prototype.gutter;
    /** @type {?|undefined} */
    NzListGrid.prototype.span;
    /** @type {?|undefined} */
    NzListGrid.prototype.column;
    /** @type {?|undefined} */
    NzListGrid.prototype.xs;
    /** @type {?|undefined} */
    NzListGrid.prototype.sm;
    /** @type {?|undefined} */
    NzListGrid.prototype.md;
    /** @type {?|undefined} */
    NzListGrid.prototype.lg;
    /** @type {?|undefined} */
    NzListGrid.prototype.xl;
    /** @type {?|undefined} */
    NzListGrid.prototype.xxl;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzListItemMetaComponent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.avatarStr = '';
        this.renderer.addClass(elementRef.nativeElement, 'ant-list-item-meta');
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzAvatar(value) {
        if (value instanceof TemplateRef) {
            this.avatarStr = '';
            this.avatarTpl = value;
        }
        else {
            this.avatarStr = value;
        }
    }
}
NzListItemMetaComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-list-item-meta, [nz-list-item-meta]',
                exportAs: 'nzListItemMeta',
                template: "<div *ngIf=\"avatarStr || avatarTpl\" class=\"ant-list-item-meta-avatar\">\r\n  <ng-container *ngIf=\"avatarStr; else avatarTpl\">\r\n    <nz-avatar [nzSrc]=\"avatarStr\"></nz-avatar>\r\n  </ng-container>\r\n</div>\r\n<div *ngIf=\"nzTitle || nzDescription\" class=\"ant-list-item-meta-content\">\r\n  <h4 *ngIf=\"nzTitle\" class=\"ant-list-item-meta-title\">\r\n    <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\r\n  </h4>\r\n  <div *ngIf=\"nzDescription\" class=\"ant-list-item-meta-description\">\r\n    <ng-container *nzStringTemplateOutlet=\"nzDescription\">{{ nzDescription }}</ng-container>\r\n  </div>\r\n</div>",
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
NzListItemMetaComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
NzListItemMetaComponent.propDecorators = {
    nzAvatar: [{ type: Input }],
    nzTitle: [{ type: Input }],
    nzDescription: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NzListItemMetaComponent.prototype.avatarStr;
    /** @type {?} */
    NzListItemMetaComponent.prototype.avatarTpl;
    /** @type {?} */
    NzListItemMetaComponent.prototype.nzTitle;
    /** @type {?} */
    NzListItemMetaComponent.prototype.nzDescription;
    /** @type {?} */
    NzListItemMetaComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzListItemMetaComponent.prototype.renderer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzListComponent {
    /**
     * @param {?} el
     * @param {?} updateHostClassService
     */
    constructor(el, updateHostClassService) {
        this.el = el;
        this.updateHostClassService = updateHostClassService;
        this.nzBordered = false;
        this.nzItemLayout = 'horizontal';
        this.nzLoading = false;
        this.nzSize = 'default';
        this.nzSplit = true;
        // #endregion
        // #region styles
        this.prefixCls = 'ant-list';
        // #endregion
        this.itemLayoutNotifySource = new BehaviorSubject(this.nzItemLayout);
    }
    /**
     * @private
     * @return {?}
     */
    _setClassMap() {
        /** @type {?} */
        const classMap = {
            [this.prefixCls]: true,
            [`${this.prefixCls}-vertical`]: this.nzItemLayout === 'vertical',
            [`${this.prefixCls}-lg`]: this.nzSize === 'large',
            [`${this.prefixCls}-sm`]: this.nzSize === 'small',
            [`${this.prefixCls}-split`]: this.nzSplit,
            [`${this.prefixCls}-bordered`]: this.nzBordered,
            [`${this.prefixCls}-loading`]: this.nzLoading,
            [`${this.prefixCls}-grid`]: this.nzGrid,
            [`${this.prefixCls}-something-after-last-item`]: !!(this.nzLoadMore || this.nzPagination || this.nzFooter)
        };
        this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
    }
    /**
     * @return {?}
     */
    get itemLayoutNotify$() {
        return this.itemLayoutNotifySource.asObservable();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._setClassMap();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this._setClassMap();
        if (changes.nzItemLayout) {
            this.itemLayoutNotifySource.next(this.nzItemLayout);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.itemLayoutNotifySource.unsubscribe();
    }
}
NzListComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-list, [nz-list]',
                exportAs: 'nzList',
                template: "<ng-template #itemsTpl>\r\n  <div class=\"ant-list-items\" *ngIf=\"nzDataSource.length > 0\">\r\n    <ng-container *ngFor=\"let item of nzDataSource; let index = index\">\r\n      <ng-template [ngTemplateOutlet]=\"nzRenderItem\" [ngTemplateOutletContext]=\"{ $implicit: item, index: index }\"></ng-template>\r\n    </ng-container>\r\n  </div>\r\n</ng-template>\r\n<div *ngIf=\"nzHeader\" class=\"ant-list-header\">\r\n  <ng-container *nzStringTemplateOutlet=\"nzHeader\">{{ nzHeader }}</ng-container>\r\n</div>\r\n<nz-spin [nzSpinning]=\"nzLoading\">\r\n  <ng-container *ngIf=\"nzDataSource\">\r\n    <div *ngIf=\"nzLoading && nzDataSource.length === 0\" [style.min-height.px]=\"53\"></div>\r\n    <div *ngIf=\"nzGrid; else itemsTpl\" nz-row [nzGutter]=\"nzGrid.gutter\">\r\n      <div nz-col [nzSpan]=\"nzGrid.span\" [nzXs]=\"nzGrid.xs\" [nzSm]=\"nzGrid.sm\" [nzMd]=\"nzGrid.md\" [nzLg]=\"nzGrid.lg\" [nzXl]=\"nzGrid.xl\"\r\n           [nzXXl]=\"nzGrid.xxl\" *ngFor=\"let item of nzDataSource; let index = index\">\r\n        <ng-template [ngTemplateOutlet]=\"nzRenderItem\" [ngTemplateOutletContext]=\"{ $implicit: item, index: index }\"></ng-template>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"!nzLoading && nzDataSource.length === 0\" class=\"ant-list-empty-text\">\r\n      <nz-embed-empty [nzComponentName]=\"'list'\" [specificContent]=\"nzNoResult\"></nz-embed-empty>\r\n    </div>\r\n  </ng-container>\r\n  <ng-content></ng-content>\r\n</nz-spin>\r\n<div *ngIf=\"nzFooter\" class=\"ant-list-footer\">\r\n  <ng-container *nzStringTemplateOutlet=\"nzFooter\">{{ nzFooter }}</ng-container>\r\n</div>\r\n<ng-template [ngTemplateOutlet]=\"nzLoadMore\"></ng-template>\r\n<div *ngIf=\"nzPagination\" class=\"ant-list-pagination\">\r\n  <ng-template [ngTemplateOutlet]=\"nzPagination\"></ng-template>\r\n</div>",
                providers: [NzUpdateHostClassService],
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [`
      nz-list,
      nz-list nz-spin {
        display: block;
      }
    `]
            }] }
];
/** @nocollapse */
NzListComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NzUpdateHostClassService }
];
NzListComponent.propDecorators = {
    nzDataSource: [{ type: Input }],
    nzBordered: [{ type: Input }],
    nzGrid: [{ type: Input }],
    nzHeader: [{ type: Input }],
    nzFooter: [{ type: Input }],
    nzItemLayout: [{ type: Input }],
    nzRenderItem: [{ type: Input }],
    nzLoading: [{ type: Input }],
    nzLoadMore: [{ type: Input }],
    nzPagination: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzSplit: [{ type: Input }],
    nzNoResult: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzListComponent.prototype, "nzBordered", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzListComponent.prototype, "nzLoading", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzListComponent.prototype, "nzSplit", void 0);
if (false) {
    /** @type {?} */
    NzListComponent.prototype.nzDataSource;
    /** @type {?} */
    NzListComponent.prototype.nzBordered;
    /** @type {?} */
    NzListComponent.prototype.nzGrid;
    /** @type {?} */
    NzListComponent.prototype.nzHeader;
    /** @type {?} */
    NzListComponent.prototype.nzFooter;
    /** @type {?} */
    NzListComponent.prototype.nzItemLayout;
    /** @type {?} */
    NzListComponent.prototype.nzRenderItem;
    /** @type {?} */
    NzListComponent.prototype.nzLoading;
    /** @type {?} */
    NzListComponent.prototype.nzLoadMore;
    /** @type {?} */
    NzListComponent.prototype.nzPagination;
    /** @type {?} */
    NzListComponent.prototype.nzSize;
    /** @type {?} */
    NzListComponent.prototype.nzSplit;
    /** @type {?} */
    NzListComponent.prototype.nzNoResult;
    /**
     * @type {?}
     * @private
     */
    NzListComponent.prototype.prefixCls;
    /**
     * @type {?}
     * @private
     */
    NzListComponent.prototype.itemLayoutNotifySource;
    /**
     * @type {?}
     * @private
     */
    NzListComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NzListComponent.prototype.updateHostClassService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzListItemComponent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} parentComp
     * @param {?} cdr
     */
    constructor(elementRef, renderer, parentComp, cdr) {
        this.parentComp = parentComp;
        this.cdr = cdr;
        this.nzActions = [];
        this.nzNoFlex = false;
        renderer.addClass(elementRef.nativeElement, 'ant-list-item');
    }
    /**
     * @return {?}
     */
    get isVerticalAndExtra() {
        return this.itemLayout === 'vertical' && !!this.nzExtra;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.itemLayout$ = this.parentComp.itemLayoutNotify$.subscribe((/**
         * @param {?} val
         * @return {?}
         */
        val => {
            this.itemLayout = val;
            this.cdr.detectChanges();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.itemLayout$) {
            this.itemLayout$.unsubscribe();
        }
    }
}
NzListItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-list-item, [nz-list-item]',
                exportAs: 'nzListItem',
                template: "<ng-template #actionsTpl>\r\n  <ul *ngIf=\"nzActions?.length > 0\" class=\"ant-list-item-action\">\r\n    <li *ngFor=\"let i of nzActions; let last=last;\">\r\n      <ng-template [ngTemplateOutlet]=\"i\"></ng-template>\r\n      <em *ngIf=\"!last\" class=\"ant-list-item-action-split\"></em>\r\n    </li>\r\n  </ul>\r\n</ng-template>\r\n<ng-template #contentTpl>\r\n  <ng-content></ng-content>\r\n  <ng-container *ngIf=\"nzContent\">\r\n    <ng-container *nzStringTemplateOutlet=\"nzContent\">{{ nzContent }}</ng-container>\r\n  </ng-container>\r\n</ng-template>\r\n<ng-template #simpleTpl>\r\n  <ng-template [ngTemplateOutlet]=\"contentTpl\"></ng-template>\r\n  <ng-template [ngTemplateOutlet]=\"nzExtra\"></ng-template>\r\n  <ng-template [ngTemplateOutlet]=\"actionsTpl\"></ng-template>\r\n</ng-template>\r\n<ng-container *ngIf=\"isVerticalAndExtra; else simpleTpl\">\r\n  <div class=\"ant-list-item-main\">\r\n    <ng-template [ngTemplateOutlet]=\"contentTpl\"></ng-template>\r\n    <ng-template [ngTemplateOutlet]=\"actionsTpl\"></ng-template>\r\n  </div>\r\n  <div class=\"ant-list-item-extra\">\r\n    <ng-template [ngTemplateOutlet]=\"nzExtra\"></ng-template>\r\n  </div>\r\n</ng-container>",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
NzListItemComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: NzListComponent },
    { type: ChangeDetectorRef }
];
NzListItemComponent.propDecorators = {
    metas: [{ type: ContentChildren, args: [NzListItemMetaComponent,] }],
    nzActions: [{ type: Input }],
    nzContent: [{ type: Input }],
    nzExtra: [{ type: Input }],
    nzNoFlex: [{ type: Input }, { type: HostBinding, args: ['class.ant-list-item-no-flex',] }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzListItemComponent.prototype, "nzNoFlex", void 0);
if (false) {
    /** @type {?} */
    NzListItemComponent.prototype.metas;
    /** @type {?} */
    NzListItemComponent.prototype.nzActions;
    /** @type {?} */
    NzListItemComponent.prototype.nzContent;
    /** @type {?} */
    NzListItemComponent.prototype.nzExtra;
    /** @type {?} */
    NzListItemComponent.prototype.nzNoFlex;
    /**
     * @type {?}
     * @private
     */
    NzListItemComponent.prototype.itemLayout;
    /**
     * @type {?}
     * @private
     */
    NzListItemComponent.prototype.itemLayout$;
    /**
     * @type {?}
     * @private
     */
    NzListItemComponent.prototype.parentComp;
    /**
     * @type {?}
     * @private
     */
    NzListItemComponent.prototype.cdr;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzListModule {
}
NzListModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, NzSpinModule, NzGridModule, NzAvatarModule, NzAddOnModule, NzEmptyModule],
                declarations: [NzListComponent, NzListItemComponent, NzListItemMetaComponent],
                exports: [NzListComponent, NzListItemComponent, NzListItemMetaComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzListComponent, NzListItemComponent, NzListItemMetaComponent, NzListModule };
//# sourceMappingURL=ng-zorro-antd-list.js.map
