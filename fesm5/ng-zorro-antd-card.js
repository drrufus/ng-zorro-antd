import { __decorate, __metadata } from 'tslib';
import { Directive, ElementRef, Renderer2, Input, Component, ViewEncapsulation, ChangeDetectionStrategy, ViewChild, TemplateRef, ContentChild, ContentChildren, NgModule } from '@angular/core';
import { InputBoolean, NzConfigService, WithConfig, NzAddOnModule } from 'ng-zorro-antd/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: nz-card-grid.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzCardGridDirective = /** @class */ (function () {
    function NzCardGridDirective(elementRef, renderer) {
        this.nzHoverable = true;
        renderer.addClass(elementRef.nativeElement, 'ant-card-grid');
    }
    NzCardGridDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-card-grid]',
                    exportAs: 'nzCardGrid',
                    host: {
                        '[class.ant-card-hoverable]': 'nzHoverable'
                    }
                },] }
    ];
    /** @nocollapse */
    NzCardGridDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    NzCardGridDirective.propDecorators = {
        nzHoverable: [{ type: Input }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzCardGridDirective.prototype, "nzHoverable", void 0);
    return NzCardGridDirective;
}());
if (false) {
    /** @type {?} */
    NzCardGridDirective.prototype.nzHoverable;
}

/**
 * @fileoverview added by tsickle
 * Generated from: nz-card-tab.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzCardTabComponent = /** @class */ (function () {
    function NzCardTabComponent() {
    }
    NzCardTabComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-card-tab',
                    exportAs: 'nzCardTab',
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "<ng-template>\r\n  <ng-content></ng-content>\r\n</ng-template>"
                }] }
    ];
    NzCardTabComponent.propDecorators = {
        template: [{ type: ViewChild, args: [TemplateRef, { static: true },] }]
    };
    return NzCardTabComponent;
}());
if (false) {
    /** @type {?} */
    NzCardTabComponent.prototype.template;
}

/**
 * @fileoverview added by tsickle
 * Generated from: nz-card.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'card';
var NzCardComponent = /** @class */ (function () {
    function NzCardComponent(nzConfigService, renderer, elementRef) {
        this.nzConfigService = nzConfigService;
        this.nzLoading = false;
        this.nzActions = [];
        renderer.addClass(elementRef.nativeElement, 'ant-card');
    }
    NzCardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-card',
                    exportAs: 'nzCard',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "<div class=\"ant-card-head\" *ngIf=\"nzTitle || nzExtra || tab\">\r\n  <div class=\"ant-card-head-wrapper\">\r\n    <div class=\"ant-card-head-title\" *ngIf=\"nzTitle\">\r\n      <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\r\n    </div>\r\n    <div class=\"ant-card-extra\" *ngIf=\"nzExtra\">\r\n      <ng-container *nzStringTemplateOutlet=\"nzExtra\">{{ nzExtra }}</ng-container>\r\n    </div>\r\n  </div>\r\n  <ng-container *ngIf=\"tab\">\r\n    <ng-template [ngTemplateOutlet]=\"tab.template\"></ng-template>\r\n  </ng-container>\r\n</div>\r\n<div class=\"ant-card-cover\" *ngIf=\"nzCover\">\r\n  <ng-template [ngTemplateOutlet]=\"nzCover\"></ng-template>\r\n</div>\r\n<div class=\"ant-card-body\" [ngStyle]=\"nzBodyStyle\">\r\n  <ng-container *ngIf=\"!nzLoading\">\r\n    <ng-content></ng-content>\r\n  </ng-container>\r\n  <nz-card-loading *ngIf=\"nzLoading\"></nz-card-loading>\r\n</div>\r\n<ul class=\"ant-card-actions\" *ngIf=\"nzActions.length\">\r\n  <li *ngFor=\"let action of nzActions\" [style.width.%]=\"100 / nzActions.length\">\r\n    <span><ng-template [ngTemplateOutlet]=\"action\"></ng-template></span>\r\n  </li>\r\n</ul>",
                    host: {
                        '[class.ant-card-loading]': 'nzLoading',
                        '[class.ant-card-bordered]': 'nzBordered',
                        '[class.ant-card-hoverable]': 'nzHoverable',
                        '[class.ant-card-small]': 'nzSize === "small"',
                        '[class.ant-card-contain-grid]': 'grids && grids.length',
                        '[class.ant-card-type-inner]': 'nzType === "inner"',
                        '[class.ant-card-contain-tabs]': '!!tab'
                    },
                    styles: ["\n      nz-card {\n        display: block;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzCardComponent.ctorParameters = function () { return [
        { type: NzConfigService },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    NzCardComponent.propDecorators = {
        nzBordered: [{ type: Input }],
        nzLoading: [{ type: Input }],
        nzHoverable: [{ type: Input }],
        nzBodyStyle: [{ type: Input }],
        nzCover: [{ type: Input }],
        nzActions: [{ type: Input }],
        nzType: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzTitle: [{ type: Input }],
        nzExtra: [{ type: Input }],
        tab: [{ type: ContentChild, args: [NzCardTabComponent, { static: false },] }],
        grids: [{ type: ContentChildren, args: [NzCardGridDirective,] }]
    };
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, true), InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzCardComponent.prototype, "nzBordered", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzCardComponent.prototype, "nzLoading", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzCardComponent.prototype, "nzHoverable", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default'),
        __metadata("design:type", String)
    ], NzCardComponent.prototype, "nzSize", void 0);
    return NzCardComponent;
}());
if (false) {
    /** @type {?} */
    NzCardComponent.prototype.nzBordered;
    /** @type {?} */
    NzCardComponent.prototype.nzLoading;
    /** @type {?} */
    NzCardComponent.prototype.nzHoverable;
    /** @type {?} */
    NzCardComponent.prototype.nzBodyStyle;
    /** @type {?} */
    NzCardComponent.prototype.nzCover;
    /** @type {?} */
    NzCardComponent.prototype.nzActions;
    /** @type {?} */
    NzCardComponent.prototype.nzType;
    /** @type {?} */
    NzCardComponent.prototype.nzSize;
    /** @type {?} */
    NzCardComponent.prototype.nzTitle;
    /** @type {?} */
    NzCardComponent.prototype.nzExtra;
    /** @type {?} */
    NzCardComponent.prototype.tab;
    /** @type {?} */
    NzCardComponent.prototype.grids;
    /** @type {?} */
    NzCardComponent.prototype.nzConfigService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: nz-card-loading.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzCardLoadingComponent = /** @class */ (function () {
    function NzCardLoadingComponent(elementRef, renderer) {
        renderer.addClass(elementRef.nativeElement, 'ant-card-loading-content');
    }
    NzCardLoadingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-card-loading',
                    exportAs: 'nzCardLoading',
                    template: "<div class=\"ant-card-loading-content\">\r\n  <div class=\"ant-row\" style=\"margin-left: -4px; margin-right: -4px;\">\r\n    <div class=\"ant-col-22\" style=\"padding-left: 4px; padding-right: 4px;\">\r\n      <div class=\"ant-card-loading-block\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ant-row\" style=\"margin-left: -4px; margin-right: -4px;\">\r\n    <div class=\"ant-col-8\" style=\"padding-left: 4px; padding-right: 4px;\">\r\n      <div class=\"ant-card-loading-block\"></div>\r\n    </div>\r\n    <div class=\"ant-col-15\" style=\"padding-left: 4px; padding-right: 4px;\">\r\n      <div class=\"ant-card-loading-block\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ant-row\" style=\"margin-left: -4px; margin-right: -4px;\">\r\n    <div class=\"ant-col-6\" style=\"padding-left: 4px; padding-right: 4px;\">\r\n      <div class=\"ant-card-loading-block\"></div>\r\n    </div>\r\n    <div class=\"ant-col-18\" style=\"padding-left: 4px; padding-right: 4px;\">\r\n      <div class=\"ant-card-loading-block\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ant-row\" style=\"margin-left: -4px; margin-right: -4px;\">\r\n    <div class=\"ant-col-13\" style=\"padding-left: 4px; padding-right: 4px;\">\r\n      <div class=\"ant-card-loading-block\"></div>\r\n    </div>\r\n    <div class=\"ant-col-9\" style=\"padding-left: 4px; padding-right: 4px;\">\r\n      <div class=\"ant-card-loading-block\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ant-row\" style=\"margin-left: -4px; margin-right: -4px;\">\r\n    <div class=\"ant-col-4\" style=\"padding-left: 4px; padding-right: 4px;\">\r\n      <div class=\"ant-card-loading-block\"></div>\r\n    </div>\r\n    <div class=\"ant-col-3\" style=\"padding-left: 4px; padding-right: 4px;\">\r\n      <div class=\"ant-card-loading-block\"></div>\r\n    </div>\r\n    <div class=\"ant-col-16\" style=\"padding-left: 4px; padding-right: 4px;\">\r\n      <div class=\"ant-card-loading-block\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ant-row\" style=\"margin-left: -4px; margin-right: -4px;\">\r\n    <div class=\"ant-col-8\" style=\"padding-left: 4px; padding-right: 4px;\">\r\n      <div class=\"ant-card-loading-block\"></div>\r\n    </div>\r\n    <div class=\"ant-col-6\" style=\"padding-left: 4px; padding-right: 4px;\">\r\n      <div class=\"ant-card-loading-block\"></div>\r\n    </div>\r\n    <div class=\"ant-col-8\" style=\"padding-left: 4px; padding-right: 4px;\">\r\n      <div class=\"ant-card-loading-block\"></div>\r\n    </div>\r\n  </div>\r\n</div>",
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    styles: ["\n      nz-card-loading {\n        display: block;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzCardLoadingComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    return NzCardLoadingComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: nz-card-meta.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzCardMetaComponent = /** @class */ (function () {
    function NzCardMetaComponent(elementRef, renderer) {
        renderer.addClass(elementRef.nativeElement, 'ant-card-meta');
    }
    NzCardMetaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-card-meta',
                    exportAs: 'nzCardMeta',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "<div class=\"ant-card-meta-avatar\" *ngIf=\"nzAvatar\">\r\n  <ng-template [ngTemplateOutlet]=\"nzAvatar\"></ng-template>\r\n</div>\r\n<div class=\"ant-card-meta-detail\" *ngIf=\"nzTitle || nzDescription\">\r\n  <div class=\"ant-card-meta-title\" *ngIf=\"nzTitle\">\r\n    <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\r\n  </div>\r\n  <div class=\"ant-card-meta-description\" *ngIf=\"nzDescription\">\r\n    <ng-container *nzStringTemplateOutlet=\"nzDescription\">{{ nzDescription }}</ng-container>\r\n  </div>\r\n</div>",
                    styles: ["\n      nz-card-meta {\n        display: block;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzCardMetaComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    NzCardMetaComponent.propDecorators = {
        nzTitle: [{ type: Input }],
        nzDescription: [{ type: Input }],
        nzAvatar: [{ type: Input }]
    };
    return NzCardMetaComponent;
}());
if (false) {
    /** @type {?} */
    NzCardMetaComponent.prototype.nzTitle;
    /** @type {?} */
    NzCardMetaComponent.prototype.nzDescription;
    /** @type {?} */
    NzCardMetaComponent.prototype.nzAvatar;
}

/**
 * @fileoverview added by tsickle
 * Generated from: nz-card.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzCardModule = /** @class */ (function () {
    function NzCardModule() {
    }
    NzCardModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, NzAddOnModule],
                    declarations: [NzCardComponent, NzCardGridDirective, NzCardMetaComponent, NzCardLoadingComponent, NzCardTabComponent],
                    exports: [NzCardComponent, NzCardGridDirective, NzCardMetaComponent, NzCardLoadingComponent, NzCardTabComponent]
                },] }
    ];
    return NzCardModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-card.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzCardComponent, NzCardGridDirective, NzCardLoadingComponent, NzCardMetaComponent, NzCardModule, NzCardTabComponent };
//# sourceMappingURL=ng-zorro-antd-card.js.map
