/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CdkPortalOutlet, TemplatePortal } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, Component, ComponentFactoryResolver, Directive, Input, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import * as ɵngcc0 from '@angular/core';

function NzCommentActionComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0);
} }
var _c0 = ["*"];
var NzCommentAvatarDirective = /** @class */ (function () {
    function NzCommentAvatarDirective() {
    }
NzCommentAvatarDirective.ɵfac = function NzCommentAvatarDirective_Factory(t) { return new (t || NzCommentAvatarDirective)(); };
NzCommentAvatarDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzCommentAvatarDirective, selectors: [["nz-avatar", "nz-comment-avatar", ""]], exportAs: ["nzCommentAvatar"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCommentAvatarDirective, [{
        type: Directive,
        args: [{
                selector: 'nz-avatar[nz-comment-avatar]',
                exportAs: 'nzCommentAvatar'
            }]
    }], function () { return []; }, null); })();
    return NzCommentAvatarDirective;
}());
export { NzCommentAvatarDirective };
var NzCommentContentDirective = /** @class */ (function () {
    function NzCommentContentDirective() {
    }
NzCommentContentDirective.ɵfac = function NzCommentContentDirective_Factory(t) { return new (t || NzCommentContentDirective)(); };
NzCommentContentDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzCommentContentDirective, selectors: [["nz-comment-content"], ["", "nz-comment-content", ""]], hostAttrs: [1, "ant-comment-content-detail"], exportAs: ["nzCommentContent"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCommentContentDirective, [{
        type: Directive,
        args: [{
                selector: 'nz-comment-content, [nz-comment-content]',
                exportAs: 'nzCommentContent',
                host: { class: 'ant-comment-content-detail' }
            }]
    }], function () { return []; }, null); })();
    return NzCommentContentDirective;
}());
export { NzCommentContentDirective };
var NzCommentActionHostDirective = /** @class */ (function (_super) {
    tslib_1.__extends(NzCommentActionHostDirective, _super);
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
    /** @nocollapse */
    NzCommentActionHostDirective.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ViewContainerRef }
    ]; };
    NzCommentActionHostDirective.propDecorators = {
        nzCommentActionHost: [{ type: Input }]
    };
NzCommentActionHostDirective.ɵfac = function NzCommentActionHostDirective_Factory(t) { return new (t || NzCommentActionHostDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ComponentFactoryResolver), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef)); };
NzCommentActionHostDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzCommentActionHostDirective, selectors: [["", "nzCommentActionHost", ""]], inputs: { nzCommentActionHost: "nzCommentActionHost" }, exportAs: ["nzCommentActionHost"], features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCommentActionHostDirective, [{
        type: Directive,
        args: [{
                selector: '[nzCommentActionHost]',
                exportAs: 'nzCommentActionHost'
            }]
    }], function () { return [{ type: ɵngcc0.ComponentFactoryResolver }, { type: ɵngcc0.ViewContainerRef }]; }, { nzCommentActionHost: [{
            type: Input
        }] }); })();
    return NzCommentActionHostDirective;
}(CdkPortalOutlet));
export { NzCommentActionHostDirective };
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
    /** @nocollapse */
    NzCommentActionComponent.ctorParameters = function () { return [
        { type: ViewContainerRef }
    ]; };
    NzCommentActionComponent.propDecorators = {
        implicitContent: [{ type: ViewChild, args: [TemplateRef, { static: true },] }]
    };
NzCommentActionComponent.ɵfac = function NzCommentActionComponent_Factory(t) { return new (t || NzCommentActionComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef)); };
NzCommentActionComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzCommentActionComponent, selectors: [["nz-comment-action"]], viewQuery: function NzCommentActionComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(TemplateRef, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.implicitContent = _t.first);
    } }, exportAs: ["nzCommentAction"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzCommentActionComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, NzCommentActionComponent_ng_template_0_Template, 1, 0, "ng-template");
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCommentActionComponent, [{
        type: Component,
        args: [{
                selector: 'nz-comment-action',
                exportAs: 'nzCommentAction',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-template><ng-content></ng-content></ng-template>'
            }]
    }], function () { return [{ type: ɵngcc0.ViewContainerRef }]; }, { implicitContent: [{
            type: ViewChild,
            args: [TemplateRef, { static: true }]
        }] }); })();
    return NzCommentActionComponent;
}());
export { NzCommentActionComponent };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29tbWVudC1jZWxscy5qcyIsInNvdXJjZXMiOlsibmc6L25nLXpvcnJvLWFudGQvY29tbWVudC9uei1jb21tZW50LWNlbGxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEUsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1Qsd0JBQXdCLEVBQ3hCLFNBQVMsRUFDVCxLQUFLLEVBR0wsV0FBVyxFQUNYLFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0FBRXZCO0lBQUE7SUFJdUMsQ0FBQzs0REFKdkMsU0FBUyxTQUFDLHNCQUNULFFBQVEsRUFBRTtZQUE4QixzQkFDeEMsUUFBUSxFQUFFLGlCQUFpQixrQkFDNUI7Ozs7Ozs7Z0RBQ1E7SUFBOEIsK0JBQUM7Q0FBQSxBQUp4QyxJQUl3QztTQUEzQix3QkFBd0I7QUFFckM7SUFBQTtJQUt3QyxDQUFDOzZEQUx4QyxTQUFTLFNBQUMsc0JBQ1QsUUFBUSxFQUFFO3NCQUEwQyxzQkFDcEQsUUFBUSxFQUFFLGtCQUFrQixzQkFDNUIsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLDRCQUE0QixFQUFFLGtCQUM5Qzs7Ozs7Ozs7Z0RBQ1E7SUFBK0IsZ0NBQUM7Q0FBQSxBQUx6QyxJQUt5QztTQUE1Qix5QkFBeUI7QUFFdEM7SUFJa0Qsd0RBQWU7SUFHL0Qsc0NBQVksd0JBQWtELEVBQUUsZ0JBQWtDO2VBQ2hHLGtCQUFNLHdCQUF3QixFQUFFLGdCQUFnQixDQUFDO0lBQ25ELENBQUM7Ozs7SUFFRCwrQ0FBUTs7O0lBQVI7UUFDRSxpQkFBTSxRQUFRLFdBQUUsQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsa0RBQVc7OztJQUFYO1FBQ0UsaUJBQU0sV0FBVyxXQUFFLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELHNEQUFlOzs7SUFBZjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDeEMsQ0FBQyxDQUNILEFBbEJTOzt5Q0FKUixTQUFTLFNBQUM7UUFDVCxRQUFRLEVBQUUsdUJBQXVCLHpCQXpCakMsd0JBQXdCO21CQTBCeEIsUUFBUSxFQUFFLGJBbkJWLGdCQUFnQjs7S0FtQmUsa0JBQ2hDO3NDQUVFLEtBQUs7Ozs7Ozs7Ozs7OztvQkFBVTtJQWlCbEIsbUNBQUM7Q0FBQSxBQXRCRCxDQUlrRCxlQUFlLEdBa0JoRTtTQWxCWSw0QkFBNEI7OztJQUN2QywyREFBb0Q7O0FBbUJ0RDtJQWVFLGtDQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQU45QyxrQkFBYSxHQUEwQixJQUFJLENBQUM7SUFNSyxDQUFDO0lBSjFELHNCQUFJLDZDQUFPOzs7O1FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7Ozs7SUFJRCwyQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDdkYsQ0FBQyxDQUNILEFBYlE7O3FDQVBQLFNBQVMsU0FBQztRQUNULFFBQVEsRUFBRSxGQTFDVixnQkFBZ0I7RUEwQ2E7Y0FDN0IsUUFBUSxFQUFFLGlCQUFpQjtlQUMzQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxzQkFDckMseENBSUMsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7RUFKekIsRUFBRTtvQkFBdUIsQ0FBQyxNQUFNLHNCQUMvQyxRQUFRLEVBQUUsc0RBQXNELGtCQUNqRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFFcUQ7SUFZdEQsK0JBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQWJZLHdCQUF3Qjs7O0lBQ25DLG1EQUE2RTs7Ozs7SUFDN0UsaURBQW9EOzs7OztJQU14QyxvREFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENka1BvcnRhbE91dGxldCwgVGVtcGxhdGVQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcclxuaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdDb250YWluZXJSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnbnotYXZhdGFyW256LWNvbW1lbnQtYXZhdGFyXScsXHJcbiAgZXhwb3J0QXM6ICduekNvbW1lbnRBdmF0YXInXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekNvbW1lbnRBdmF0YXJEaXJlY3RpdmUge31cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnbnotY29tbWVudC1jb250ZW50LCBbbnotY29tbWVudC1jb250ZW50XScsXHJcbiAgZXhwb3J0QXM6ICduekNvbW1lbnRDb250ZW50JyxcclxuICBob3N0OiB7IGNsYXNzOiAnYW50LWNvbW1lbnQtY29udGVudC1kZXRhaWwnIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56Q29tbWVudENvbnRlbnREaXJlY3RpdmUge31cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW256Q29tbWVudEFjdGlvbkhvc3RdJyxcclxuICBleHBvcnRBczogJ256Q29tbWVudEFjdGlvbkhvc3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekNvbW1lbnRBY3Rpb25Ib3N0RGlyZWN0aXZlIGV4dGVuZHMgQ2RrUG9ydGFsT3V0bGV0IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xyXG4gIEBJbnB1dCgpIG56Q29tbWVudEFjdGlvbkhvc3Q6IFRlbXBsYXRlUG9ydGFsIHwgbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IoY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcclxuICAgIHN1cGVyKGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgdmlld0NvbnRhaW5lclJlZik7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHN1cGVyLm5nT25Jbml0KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHN1cGVyLm5nT25EZXN0cm95KCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmF0dGFjaCh0aGlzLm56Q29tbWVudEFjdGlvbkhvc3QpO1xyXG4gIH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei1jb21tZW50LWFjdGlvbicsXHJcbiAgZXhwb3J0QXM6ICduekNvbW1lbnRBY3Rpb24nLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvbmctdGVtcGxhdGU+J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpDb21tZW50QWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmLCB7IHN0YXRpYzogdHJ1ZSB9KSBpbXBsaWNpdENvbnRlbnQ6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIHByaXZhdGUgY29udGVudFBvcnRhbDogVGVtcGxhdGVQb3J0YWwgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgZ2V0IGNvbnRlbnQoKTogVGVtcGxhdGVQb3J0YWwgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRlbnRQb3J0YWw7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jb250ZW50UG9ydGFsID0gbmV3IFRlbXBsYXRlUG9ydGFsKHRoaXMuaW1wbGljaXRDb250ZW50LCB0aGlzLnZpZXdDb250YWluZXJSZWYpO1xyXG4gIH1cclxufVxyXG4iXX0=