/**
 * @fileoverview added by tsickle
 * Generated from: nz-embed-empty.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ComponentPortal, PortalInjector, TemplatePortal } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Injector, Input, TemplateRef, Type, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { simpleEmptyImage, NZ_EMPTY_COMPONENT_NAME } from './nz-empty-config';
import { NzEmptyService } from './nz-empty.service';
var NzEmbedEmptyComponent = /** @class */ (function () {
    function NzEmbedEmptyComponent(emptyService, sanitizer, viewContainerRef, cdr, injector) {
        this.emptyService = emptyService;
        this.sanitizer = sanitizer;
        this.viewContainerRef = viewContainerRef;
        this.cdr = cdr;
        this.injector = injector;
        this.contentType = 'string';
        // tslint:disable-line:no-any
        this.defaultSvg = this.sanitizer.bypassSecurityTrustResourceUrl(simpleEmptyImage);
        this.size = '';
        this.subs_ = new Subscription();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    NzEmbedEmptyComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzComponentName) {
            this.size = this.getEmptySize(changes.nzComponentName.currentValue);
        }
        if (changes.specificContent && !changes.specificContent.isFirstChange()) {
            this.content = changes.specificContent.currentValue;
            this.renderEmpty();
        }
    };
    /**
     * @return {?}
     */
    NzEmbedEmptyComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var userContent_ = this.emptyService.userDefaultContent$.subscribe((/**
         * @param {?} content
         * @return {?}
         */
        function (content) {
            _this.content = _this.specificContent || content;
            _this.renderEmpty();
        }));
        this.subs_.add(userContent_);
    };
    /**
     * @return {?}
     */
    NzEmbedEmptyComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subs_.unsubscribe();
    };
    /**
     * @private
     * @param {?} componentName
     * @return {?}
     */
    NzEmbedEmptyComponent.prototype.getEmptySize = /**
     * @private
     * @param {?} componentName
     * @return {?}
     */
    function (componentName) {
        switch (componentName) {
            case 'table':
            case 'list':
                return 'normal';
            case 'select':
            case 'tree-select':
            case 'cascader':
            case 'transfer':
                return 'small';
            default:
                return '';
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzEmbedEmptyComponent.prototype.renderEmpty = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var content = this.content;
        if (typeof content === 'string') {
            this.contentType = 'string';
        }
        else if (content instanceof TemplateRef) {
            /** @type {?} */
            var context = (/** @type {?} */ ({ $implicit: this.nzComponentName }));
            this.contentType = 'template';
            this.contentPortal = new TemplatePortal(content, this.viewContainerRef, context);
        }
        else if (content instanceof Type) {
            /** @type {?} */
            var context = new WeakMap([[NZ_EMPTY_COMPONENT_NAME, this.nzComponentName]]);
            /** @type {?} */
            var injector = new PortalInjector(this.injector, context);
            this.contentType = 'component';
            this.contentPortal = new ComponentPortal(content, this.viewContainerRef, injector);
        }
        else {
            this.contentType = 'string';
            this.contentPortal = undefined;
        }
        this.cdr.markForCheck();
    };
    NzEmbedEmptyComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-embed-empty',
                    exportAs: 'nzEmbedEmpty',
                    template: "<ng-container *ngIf=\"!content && specificContent !== null\" [ngSwitch]=\"size\">\r\n  <nz-empty *ngSwitchCase=\"'normal'\" class=\"ant-empty-normal\" [nzNotFoundImage]=\"defaultSvg\"></nz-empty>\r\n  <nz-empty *ngSwitchCase=\"'small'\" class=\"ant-empty-small\" [nzNotFoundImage]=\"defaultSvg\"></nz-empty>\r\n  <nz-empty *ngSwitchDefault></nz-empty>\r\n</ng-container>\r\n<ng-container *ngIf=\"content\">\r\n  <ng-template *ngIf=\"contentType !== 'string'\" [cdkPortalOutlet]=\"contentPortal\"></ng-template>\r\n  <ng-container *ngIf=\"contentType === 'string'\">\r\n    {{ content }}\r\n  </ng-container>\r\n</ng-container>\r\n"
                }] }
    ];
    /** @nocollapse */
    NzEmbedEmptyComponent.ctorParameters = function () { return [
        { type: NzEmptyService },
        { type: DomSanitizer },
        { type: ViewContainerRef },
        { type: ChangeDetectorRef },
        { type: Injector }
    ]; };
    NzEmbedEmptyComponent.propDecorators = {
        nzComponentName: [{ type: Input }],
        specificContent: [{ type: Input }]
    };
    return NzEmbedEmptyComponent;
}());
export { NzEmbedEmptyComponent };
if (false) {
    /** @type {?} */
    NzEmbedEmptyComponent.prototype.nzComponentName;
    /** @type {?} */
    NzEmbedEmptyComponent.prototype.specificContent;
    /** @type {?} */
    NzEmbedEmptyComponent.prototype.content;
    /** @type {?} */
    NzEmbedEmptyComponent.prototype.contentType;
    /** @type {?} */
    NzEmbedEmptyComponent.prototype.contentPortal;
    /** @type {?} */
    NzEmbedEmptyComponent.prototype.defaultSvg;
    /** @type {?} */
    NzEmbedEmptyComponent.prototype.size;
    /** @type {?} */
    NzEmbedEmptyComponent.prototype.subs_;
    /** @type {?} */
    NzEmbedEmptyComponent.prototype.emptyService;
    /**
     * @type {?}
     * @private
     */
    NzEmbedEmptyComponent.prototype.sanitizer;
    /**
     * @type {?}
     * @private
     */
    NzEmbedEmptyComponent.prototype.viewContainerRef;
    /**
     * @type {?}
     * @private
     */
    NzEmbedEmptyComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzEmbedEmptyComponent.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZW1iZWQtZW1wdHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9lbXB0eS8iLCJzb3VyY2VzIjpbIm56LWVtYmVkLWVtcHR5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsZUFBZSxFQUFVLGNBQWMsRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5RixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsUUFBUSxFQUNSLEtBQUssRUFLTCxXQUFXLEVBQ1gsSUFBSSxFQUNKLGdCQUFnQixFQUNoQixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFcEMsT0FBTyxFQUFFLGdCQUFnQixFQUFxQyx1QkFBdUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pILE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVwRDtJQWtCRSwrQkFDUyxZQUE0QixFQUMzQixTQUF1QixFQUN2QixnQkFBa0MsRUFDbEMsR0FBc0IsRUFDdEIsUUFBa0I7UUFKbkIsaUJBQVksR0FBWixZQUFZLENBQWdCO1FBQzNCLGNBQVMsR0FBVCxTQUFTLENBQWM7UUFDdkIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBWDVCLGdCQUFXLEdBQXdDLFFBQVEsQ0FBQzs7UUFFNUQsZUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsOEJBQThCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM3RSxTQUFJLEdBQWdCLEVBQUUsQ0FBQztRQUN2QixVQUFLLEdBQUcsSUFB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QUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLGtvQkFBOEM7aUJBQy9DOzs7O2dCQVJRLGNBQWM7Z0JBSmQsWUFBWTtnQkFIbkIsZ0JBQWdCO2dCQVZoQixpQkFBaUI7Z0JBRWpCLFFBQVE7OztrQ0F5QlAsS0FBSztrQ0FDTCxLQUFLOztJQTZFUiw0QkFBQztDQUFBLEFBdEZELElBc0ZDO1NBL0VZLHFCQUFxQjs7O0lBQ2hDLGdEQUFpQzs7SUFDakMsZ0RBQStDOztJQUUvQyx3Q0FBK0I7O0lBQy9CLDRDQUE0RDs7SUFDNUQsOENBQTRCOztJQUM1QiwyQ0FBNkU7O0lBQzdFLHFDQUF1Qjs7SUFDdkIsc0NBQTJCOztJQUd6Qiw2Q0FBbUM7Ozs7O0lBQ25DLDBDQUErQjs7Ozs7SUFDL0IsaURBQTBDOzs7OztJQUMxQyxvQ0FBOEI7Ozs7O0lBQzlCLHlDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsLCBQb3J0YWwsIFBvcnRhbEluamVjdG9yLCBUZW1wbGF0ZVBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBJbmplY3RvcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFR5cGUsXHJcbiAgVmlld0NvbnRhaW5lclJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBzaW1wbGVFbXB0eUltYWdlLCBOekVtcHR5Q3VzdG9tQ29udGVudCwgTnpFbXB0eVNpemUsIE5aX0VNUFRZX0NPTVBPTkVOVF9OQU1FIH0gZnJvbSAnLi9uei1lbXB0eS1jb25maWcnO1xyXG5pbXBvcnQgeyBOekVtcHR5U2VydmljZSB9IGZyb20gJy4vbnotZW1wdHkuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHNlbGVjdG9yOiAnbnotZW1iZWQtZW1wdHknLFxyXG4gIGV4cG9ydEFzOiAnbnpFbWJlZEVtcHR5JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotZW1iZWQtZW1wdHkuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekVtYmVkRW1wdHlDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBuekNvbXBvbmVudE5hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBzcGVjaWZpY0NvbnRlbnQ6IE56RW1wdHlDdXN0b21Db250ZW50O1xyXG5cclxuICBjb250ZW50PzogTnpFbXB0eUN1c3RvbUNvbnRlbnQ7XHJcbiAgY29udGVudFR5cGU6ICdjb21wb25lbnQnIHwgJ3RlbXBsYXRlJyB8ICdzdHJpbmcnID0gJ3N0cmluZyc7XHJcbiAgY29udGVudFBvcnRhbD86IFBvcnRhbDxhbnk+OyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxyXG4gIGRlZmF1bHRTdmcgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwoc2ltcGxlRW1wdHlJbWFnZSk7XHJcbiAgc2l6ZTogTnpFbXB0eVNpemUgPSAnJztcclxuICBzdWJzXyA9IG5ldyBTdWJzY3JpcHRpb24oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgZW1wdHlTZXJ2aWNlOiBOekVtcHR5U2VydmljZSxcclxuICAgIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXHJcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvclxyXG4gICkge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMubnpDb21wb25lbnROYW1lKSB7XHJcbiAgICAgIHRoaXMuc2l6ZSA9IHRoaXMuZ2V0RW1wdHlTaXplKGNoYW5nZXMubnpDb21wb25lbnROYW1lLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZXMuc3BlY2lmaWNDb250ZW50ICYmICFjaGFuZ2VzLnNwZWNpZmljQ29udGVudC5pc0ZpcnN0Q2hhbmdlKCkpIHtcclxuICAgICAgdGhpcy5jb250ZW50ID0gY2hhbmdlcy5zcGVjaWZpY0NvbnRlbnQuY3VycmVudFZhbHVlO1xyXG4gICAgICB0aGlzLnJlbmRlckVtcHR5KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHVzZXJDb250ZW50XyA9IHRoaXMuZW1wdHlTZXJ2aWNlLnVzZXJEZWZhdWx0Q29udGVudCQuc3Vic2NyaWJlKGNvbnRlbnQgPT4ge1xyXG4gICAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLnNwZWNpZmljQ29udGVudCB8fCBjb250ZW50O1xyXG4gICAgICB0aGlzLnJlbmRlckVtcHR5KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnN1YnNfLmFkZCh1c2VyQ29udGVudF8pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLnN1YnNfLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEVtcHR5U2l6ZShjb21wb25lbnROYW1lOiBzdHJpbmcpOiBOekVtcHR5U2l6ZSB7XHJcbiAgICBzd2l0Y2ggKGNvbXBvbmVudE5hbWUpIHtcclxuICAgICAgY2FzZSAndGFibGUnOlxyXG4gICAgICBjYXNlICdsaXN0JzpcclxuICAgICAgICByZXR1cm4gJ25vcm1hbCc7XHJcbiAgICAgIGNhc2UgJ3NlbGVjdCc6XHJcbiAgICAgIGNhc2UgJ3RyZWUtc2VsZWN0JzpcclxuICAgICAgY2FzZSAnY2FzY2FkZXInOlxyXG4gICAgICBjYXNlICd0cmFuc2Zlcic6XHJcbiAgICAgICAgcmV0dXJuICdzbWFsbCc7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXJFbXB0eSgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQ7XHJcblxyXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xyXG4gICAgICB0aGlzLmNvbnRlbnRUeXBlID0gJ3N0cmluZyc7XHJcbiAgICB9IGVsc2UgaWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xyXG4gICAgICBjb25zdCBjb250ZXh0ID0geyAkaW1wbGljaXQ6IHRoaXMubnpDb21wb25lbnROYW1lIH0gYXMgYW55OyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxyXG4gICAgICB0aGlzLmNvbnRlbnRUeXBlID0gJ3RlbXBsYXRlJztcclxuICAgICAgdGhpcy5jb250ZW50UG9ydGFsID0gbmV3IFRlbXBsYXRlUG9ydGFsKGNvbnRlbnQsIHRoaXMudmlld0NvbnRhaW5lclJlZiwgY29udGV4dCk7XHJcbiAgICB9IGVsc2UgaWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBUeXBlKSB7XHJcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBuZXcgV2Vha01hcChbW05aX0VNUFRZX0NPTVBPTkVOVF9OQU1FLCB0aGlzLm56Q29tcG9uZW50TmFtZV1dKTtcclxuICAgICAgY29uc3QgaW5qZWN0b3IgPSBuZXcgUG9ydGFsSW5qZWN0b3IodGhpcy5pbmplY3RvciwgY29udGV4dCk7XHJcbiAgICAgIHRoaXMuY29udGVudFR5cGUgPSAnY29tcG9uZW50JztcclxuICAgICAgdGhpcy5jb250ZW50UG9ydGFsID0gbmV3IENvbXBvbmVudFBvcnRhbChjb250ZW50LCB0aGlzLnZpZXdDb250YWluZXJSZWYsIGluamVjdG9yKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY29udGVudFR5cGUgPSAnc3RyaW5nJztcclxuICAgICAgdGhpcy5jb250ZW50UG9ydGFsID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxufVxyXG4iXX0=