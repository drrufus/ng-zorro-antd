import { __extends, __spread } from 'tslib';
import { CommonModule } from '@angular/common';
import { Directive, ComponentFactoryResolver, ViewContainerRef, Input, Component, ViewEncapsulation, ChangeDetectionStrategy, ViewChild, TemplateRef, ContentChildren, NgModule } from '@angular/core';
import { NzAddOnModule } from 'ng-zorro-antd/core';
import { CdkPortalOutlet, TemplatePortal } from '@angular/cdk/portal';

/**
 * @fileoverview added by tsickle
 * Generated from: nz-comment-cells.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzCommentAvatarDirective = /** @class */ (function () {
    function NzCommentAvatarDirective() {
    }
    NzCommentAvatarDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'nz-avatar[nz-comment-avatar]',
                    exportAs: 'nzCommentAvatar'
                },] }
    ];
    return NzCommentAvatarDirective;
}());
var NzCommentContentDirective = /** @class */ (function () {
    function NzCommentContentDirective() {
    }
    NzCommentContentDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'nz-comment-content, [nz-comment-content]',
                    exportAs: 'nzCommentContent',
                    host: { class: 'ant-comment-content-detail' }
                },] }
    ];
    return NzCommentContentDirective;
}());
var NzCommentActionHostDirective = /** @class */ (function (_super) {
    __extends(NzCommentActionHostDirective, _super);
    function NzCommentActionHostDirective(componentFactoryResolver, viewContainerRef) {
        return _super.call(this, componentFactoryResolver, viewContainerRef) || this;
    }
    /**
     * @return {?}
     */
    NzCommentActionHostDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnInit.call(this);
    };
    /**
     * @return {?}
     */
    NzCommentActionHostDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
    };
    /**
     * @return {?}
     */
    NzCommentActionHostDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.attach(this.nzCommentActionHost);
    };
    NzCommentActionHostDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nzCommentActionHost]',
                    exportAs: 'nzCommentActionHost'
                },] }
    ];
    /** @nocollapse */
    NzCommentActionHostDirective.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ViewContainerRef }
    ]; };
    NzCommentActionHostDirective.propDecorators = {
        nzCommentActionHost: [{ type: Input }]
    };
    return NzCommentActionHostDirective;
}(CdkPortalOutlet));
if (false) {
    /** @type {?} */
    NzCommentActionHostDirective.prototype.nzCommentActionHost;
}
var NzCommentActionComponent = /** @class */ (function () {
    function NzCommentActionComponent(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
        this.contentPortal = null;
    }
    Object.defineProperty(NzCommentActionComponent.prototype, "content", {
        get: /**
         * @return {?}
         */
        function () {
            return this.contentPortal;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzCommentActionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.contentPortal = new TemplatePortal(this.implicitContent, this.viewContainerRef);
    };
    NzCommentActionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-comment-action',
                    exportAs: 'nzCommentAction',
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-template><ng-content></ng-content></ng-template>'
                }] }
    ];
    /** @nocollapse */
    NzCommentActionComponent.ctorParameters = function () { return [
        { type: ViewContainerRef }
    ]; };
    NzCommentActionComponent.propDecorators = {
        implicitContent: [{ type: ViewChild, args: [TemplateRef, { static: true },] }]
    };
    return NzCommentActionComponent;
}());
if (false) {
    /** @type {?} */
    NzCommentActionComponent.prototype.implicitContent;
    /**
     * @type {?}
     * @private
     */
    NzCommentActionComponent.prototype.contentPortal;
    /**
     * @type {?}
     * @private
     */
    NzCommentActionComponent.prototype.viewContainerRef;
}

/**
 * @fileoverview added by tsickle
 * Generated from: nz-comment.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzCommentComponent = /** @class */ (function () {
    function NzCommentComponent() {
    }
    NzCommentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-comment',
                    exportAs: 'nzComment',
                    template: "<div class=\"ant-comment-inner\">\r\n  <div class=\"ant-comment-avatar\">\r\n    <ng-content select=\"nz-avatar[nz-comment-avatar]\"></ng-content>\r\n  </div>\r\n  <div class=\"ant-comment-content\">\r\n    <div class=\"ant-comment-content-author\">\r\n      <span *ngIf=\"nzAuthor\" class=\"ant-comment-content-author-name\">\r\n        <ng-container *nzStringTemplateOutlet=\"nzAuthor\">{{ nzAuthor }}</ng-container>\r\n      </span>\r\n      <span *ngIf=\"nzDatetime\" class=\"ant-comment-content-author-time\">\r\n        <ng-container *nzStringTemplateOutlet=\"nzDatetime\">{{ nzDatetime }}</ng-container>\r\n      </span>\r\n    </div>\r\n    <ng-content select=\"nz-comment-content\"></ng-content>\r\n    <ul class=\"ant-comment-actions\" *ngIf=\"actions?.length\">\r\n      <li *ngFor=\"let action of actions\">\r\n        <span><ng-template [nzCommentActionHost]=\"action.content\"></ng-template></span>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n<div class=\"ant-comment-nested\">\r\n  <ng-content></ng-content>\r\n</div>",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        class: 'ant-comment'
                    },
                    styles: ["\n      nz-comment {\n        display: block;\n      }\n\n      nz-comment-content {\n        display: block;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzCommentComponent.ctorParameters = function () { return []; };
    NzCommentComponent.propDecorators = {
        nzAuthor: [{ type: Input }],
        nzDatetime: [{ type: Input }],
        actions: [{ type: ContentChildren, args: [NzCommentActionComponent,] }]
    };
    return NzCommentComponent;
}());
if (false) {
    /** @type {?} */
    NzCommentComponent.prototype.nzAuthor;
    /** @type {?} */
    NzCommentComponent.prototype.nzDatetime;
    /** @type {?} */
    NzCommentComponent.prototype.actions;
}

/**
 * @fileoverview added by tsickle
 * Generated from: nz-comment.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var NZ_COMMENT_CELLS = [
    NzCommentAvatarDirective,
    NzCommentContentDirective,
    NzCommentActionComponent,
    NzCommentActionHostDirective
];
var NzCommentModule = /** @class */ (function () {
    function NzCommentModule() {
    }
    NzCommentModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, NzAddOnModule],
                    exports: __spread([NzCommentComponent], NZ_COMMENT_CELLS),
                    declarations: __spread([NzCommentComponent], NZ_COMMENT_CELLS)
                },] }
    ];
    return NzCommentModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-comment.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzCommentActionComponent, NzCommentActionHostDirective, NzCommentAvatarDirective, NzCommentComponent, NzCommentContentDirective, NzCommentModule };
//# sourceMappingURL=ng-zorro-antd-comment.js.map
