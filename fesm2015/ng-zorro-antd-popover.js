import { Component, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef, Host, Optional, Input, ContentChild, ViewChild, Directive, ElementRef, ViewContainerRef, ComponentFactoryResolver, Renderer2, NgModule } from '@angular/core';
import { zoomBigMotion, NzNoAnimationDirective, NzAddOnModule, NzOverlayModule, NzNoAnimationModule } from 'ng-zorro-antd/core';
import { NzToolTipComponent, NzTooltipBaseComponentLegacy, NzTooltipBaseDirective, NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzPopoverComponent extends NzToolTipComponent {
    /**
     * @param {?} cdr
     * @param {?=} noAnimation
     */
    constructor(cdr, noAnimation) {
        super(cdr, noAnimation);
        this.noAnimation = noAnimation;
        this._prefix = 'ant-popover-placement';
        this.nzShowPopoverCloseButton = false;
        this.nzPopoverCloseButtonLabel = 'close';
        this.nzPopoverForceRestoreFocus = false;
    }
    /**
     * @return {?}
     */
    get simpleHeader() {
        return typeof (this.nzTitle) == 'string';
    }
    /**
     * @return {?}
     */
    focusOnHeader() {
        if (this.simpleHeader && this.focusableHeader != null) {
            this.focusableHeader.nativeElement.focus();
        }
    }
    /**
     * @return {?}
     */
    afterAppearing() {
        this.focusOnHeader();
    }
}
NzPopoverComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-popover',
                exportAs: 'nzPopoverComponent',
                animations: [zoomBigMotion],
                template: "<ng-content></ng-content>\r\n<ng-template\r\n  #overlay=\"cdkConnectedOverlay\"\r\n  cdkConnectedOverlay\r\n  nzConnectedOverlay\r\n  [cdkConnectedOverlayOrigin]=\"origin\"\r\n  [cdkConnectedOverlayHasBackdrop]=\"_hasBackdrop\"\r\n  (backdropClick)=\"hide()\"\r\n  (detach)=\"hide()\"\r\n  (positionChange)=\"onPositionChange($event)\"\r\n  [cdkConnectedOverlayPositions]=\"_positions\"\r\n  [cdkConnectedOverlayOpen]=\"_visible\">\r\n  <div class=\"ant-popover\"\r\n    [ngClass]=\"_classMap\"\r\n    [ngStyle]=\"nzOverlayStyle\"\r\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\r\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n    [@zoomBigMotion]=\"'active'\">\r\n    <div class=\"ant-popover-content\">\r\n      <div class=\"ant-popover-arrow\"></div>\r\n      <div class=\"ant-popover-inner\" role=\"tooltip\">\r\n        <div>\r\n          <div class=\"ant-popover-title\" *ngIf=\"title\">\r\n\r\n            <ng-container *ngIf=\"!simpleHeader\">\r\n              <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"simpleHeader\">\r\n              <h4 style=\"margin: 0;\" #focusableHeader tabindex=\"0\">{{ title }}</h4>\r\n            </ng-container>\r\n\r\n            <button *ngIf=\"nzShowPopoverCloseButton\" (click)=\"hide()\" class=\"ant-modal-close popover-close-button\" [attr.aria-label]=\"nzPopoverCloseButtonLabel\">\r\n              <span class=\"ant-modal-close-x\">\r\n                <i nz-icon nzType=\"close\" nzTheme=\"outline\" class=\"ant-modal-close-icon\"></i>\r\n              </span>\r\n            </button>\r\n\r\n          </div>\r\n          \r\n          <div class=\"ant-popover-inner-content\">\r\n            <ng-container *nzStringTemplateOutlet=\"content\">{{ content }}</ng-container>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                providers: [
                    {
                        provide: NzTooltipBaseComponentLegacy,
                        useExisting: NzPopoverComponent
                    }
                ],
                preserveWhitespaces: false,
                styles: [`
      .ant-popover {
        position: relative;
      }
    `]
            }] }
];
/** @nocollapse */
NzPopoverComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
NzPopoverComponent.propDecorators = {
    nzTitle: [{ type: Input }],
    nzTitleTemplate: [{ type: ContentChild, args: ['neverUsedTemplate', { static: true },] }],
    nzContent: [{ type: Input }],
    nzContentTemplate: [{ type: ContentChild, args: ['nzTemplate', { static: true },] }],
    nzShowPopoverCloseButton: [{ type: Input }],
    nzPopoverCloseButtonLabel: [{ type: Input }],
    nzPopoverForceRestoreFocus: [{ type: Input }],
    focusableHeader: [{ type: ViewChild, args: ['focusableHeader', { static: false },] }]
};
if (false) {
    /** @type {?} */
    NzPopoverComponent.prototype._prefix;
    /**
     * Use `neverUsedTemplate` to force `nzTemplate` to be catched by `nzPopoverContent`.
     * @type {?}
     */
    NzPopoverComponent.prototype.nzTitle;
    /** @type {?} */
    NzPopoverComponent.prototype.nzTitleTemplate;
    /** @type {?} */
    NzPopoverComponent.prototype.nzContent;
    /** @type {?} */
    NzPopoverComponent.prototype.nzContentTemplate;
    /** @type {?} */
    NzPopoverComponent.prototype.nzShowPopoverCloseButton;
    /** @type {?} */
    NzPopoverComponent.prototype.nzPopoverCloseButtonLabel;
    /** @type {?} */
    NzPopoverComponent.prototype.nzPopoverForceRestoreFocus;
    /** @type {?} */
    NzPopoverComponent.prototype.focusableHeader;
    /** @type {?} */
    NzPopoverComponent.prototype.noAnimation;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzPopoverDirective extends NzTooltipBaseDirective {
    /**
     * @param {?} elementRef
     * @param {?} hostView
     * @param {?} resolver
     * @param {?} renderer
     * @param {?} tooltip
     * @param {?=} noAnimation
     */
    constructor(elementRef, hostView, resolver, renderer, tooltip, noAnimation) {
        super(elementRef, hostView, resolver, renderer, tooltip, noAnimation);
        this.noAnimation = noAnimation;
        this.showPopoverCloseButton = false;
        this.popoverCloseButtonLabel = 'сlose';
        this.popoverForceRestoreFocus = false;
        this.componentFactory = this.resolver.resolveComponentFactory(NzPopoverComponent);
    }
}
NzPopoverDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nz-popover]',
                exportAs: 'nzPopover',
                host: {
                    '[class.ant-popover-open]': 'isTooltipComponentVisible'
                }
            },] }
];
/** @nocollapse */
NzPopoverDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: ViewContainerRef },
    { type: ComponentFactoryResolver },
    { type: Renderer2 },
    { type: NzPopoverComponent, decorators: [{ type: Optional }] },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
NzPopoverDirective.propDecorators = {
    specificTitle: [{ type: Input, args: ['nzPopoverTitle',] }],
    specificContent: [{ type: Input, args: ['nzPopoverContent',] }],
    directiveNameTitle: [{ type: Input, args: ['nz-popover',] }],
    specificTrigger: [{ type: Input, args: ['nzPopoverTrigger',] }],
    specificPlacement: [{ type: Input, args: ['nzPopoverPlacement',] }],
    showPopoverCloseButton: [{ type: Input, args: ['nzShowPopoverCloseButton',] }],
    popoverCloseButtonLabel: [{ type: Input, args: ['nzPopoverCloseButtonLabel',] }],
    popoverForceRestoreFocus: [{ type: Input, args: ['nzPopoverForceRestoreFocus',] }]
};
if (false) {
    /** @type {?} */
    NzPopoverDirective.prototype.specificTitle;
    /** @type {?} */
    NzPopoverDirective.prototype.specificContent;
    /** @type {?} */
    NzPopoverDirective.prototype.directiveNameTitle;
    /** @type {?} */
    NzPopoverDirective.prototype.specificTrigger;
    /** @type {?} */
    NzPopoverDirective.prototype.specificPlacement;
    /** @type {?} */
    NzPopoverDirective.prototype.showPopoverCloseButton;
    /** @type {?} */
    NzPopoverDirective.prototype.popoverCloseButtonLabel;
    /** @type {?} */
    NzPopoverDirective.prototype.popoverForceRestoreFocus;
    /** @type {?} */
    NzPopoverDirective.prototype.componentFactory;
    /** @type {?} */
    NzPopoverDirective.prototype.noAnimation;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzPopoverModule {
}
NzPopoverModule.decorators = [
    { type: NgModule, args: [{
                entryComponents: [NzPopoverComponent],
                exports: [NzPopoverDirective, NzPopoverComponent],
                declarations: [NzPopoverDirective, NzPopoverComponent],
                imports: [CommonModule, OverlayModule, NzAddOnModule, NzOverlayModule, NzNoAnimationModule, NzToolTipModule, NzIconModule]
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

export { NzPopoverComponent, NzPopoverDirective, NzPopoverModule };
//# sourceMappingURL=ng-zorro-antd-popover.js.map
