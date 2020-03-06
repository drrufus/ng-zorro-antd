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
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { EventEmitter, Input, Output } from '@angular/core';
import { warnDeprecation } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
/**
 * @abstract
 */
export class NzTooltipBaseDirective {
    /**
     * @param {?} elementRef
     * @param {?} hostView
     * @param {?} resolver
     * @param {?} renderer
     * @param {?=} _tooltip
     * @param {?=} noAnimation
     */
    constructor(elementRef, hostView, resolver, renderer, _tooltip, noAnimation) {
        this.elementRef = elementRef;
        this.hostView = hostView;
        this.resolver = resolver;
        this.renderer = renderer;
        this._tooltip = _tooltip;
        this.noAnimation = noAnimation;
        /**
         * @deprecated 9.0.0. This is deprecated and going to be removed in 9.0.0.
         * Please use a more specific API. Like `nzTooltipTrigger`.
         */
        this.nzTrigger = 'hover';
        /**
         * @deprecated 9.0.0. This is deprecated and going to be removed in 9.0.0.
         * Please use a more specific API. Like `nzTooltipPlacement`.
         */
        this.nzPlacement = 'top';
        this.needProxyProperties = [
            'nzOverlayClassName',
            'nzOverlayStyle',
            'nzMouseEnterDelay',
            'nzMouseLeaveDelay',
            'nzVisible',
            'noAnimation'
        ];
        this.nzVisibleChange = new EventEmitter();
        this.isTooltipComponentVisible = false;
        /**
         * @deprecated 9.0.0. Tooltips would always be dynamic in 9.0.0.
         */
        this.isDynamicTooltip = false;
        this.triggerUnlisteners = [];
        this.$destroy = new Subject();
    }
    /**
     * This true title that would be used in other parts on this component.
     * @protected
     * @return {?}
     */
    get title() {
        return this.specificTitle || this.directiveNameTitle || this.nzTitle;
    }
    /**
     * @protected
     * @return {?}
     */
    get content() {
        return this.specificContent || this.directiveNameContent || this.nzContent;
    }
    /**
     * @protected
     * @return {?}
     */
    get placement() {
        return this.specificPlacement || this.nzPlacement;
    }
    /**
     * @protected
     * @return {?}
     */
    get trigger() {
        return this.specificTrigger || this.nzTrigger;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzTrigger, specificTrigger } = changes;
        /** @type {?} */
        const trigger = specificTrigger || nzTrigger;
        if (trigger && !trigger.isFirstChange()) {
            this.registerTriggers();
        }
        if (this.tooltip && this.isDynamicTooltip) {
            this.updateChangedProperties(changes);
        }
        // TODO: enable these warning in 9.0.0.
        // if (changes.nzTitle) {
        //   warnDeprecation(
        //     `'nzTitle' of 'nz-tooltip' is deprecated and will be removed in 10.0.0. Please use 'nzTooltipTitle' instead. The same with 'nz-popover' and 'nz-popconfirm'.`
        //   );
        // }
        // if (changes.nzContent) {
        //   warnDeprecation(
        //     `'nzContent' of 'nz-popover' is deprecated and will be removed in 10.0.0. Please use 'nzPopoverContent' instead.`
        //   );
        // }
        // if (changes.nzPlacement) {
        //   warnDeprecation(
        //     `'nzPlacement' of 'nz-tooltip' is deprecated and will be removed in 10.0.0. Please use 'nzTooltipContent' instead. The same with 'nz-popover' and 'nz-popconfirm'.`
        //   );
        // }
        // if (changes.nzTrigger) {
        //   warnDeprecation(
        //     `'nzTrigger' of 'nz-tooltip' is deprecated and will be removed in 10.0.0. Please use 'nzTooltipTrigger' instead. The same with 'nz-popover' and 'nz-popconfirm'.`
        //   );
        // }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this._tooltip) {
            this.createDynamicTooltipComponent();
        }
        else {
            warnDeprecation(`'<nz-tooltip></nz-tooltip>', '<nz-popover></nz-popover>' and '<nz-popconfirm></nz-popconfirm>' is deprecated and will be removed in 9.0.0. Refer: https://ng.ant.design/components/tooltip/zh .`);
            this.tooltip = this._tooltip;
            this.tooltip.setOverlayOrigin((/** @type {?} */ (this)));
        }
        this.tooltip.nzVisibleChange
            .pipe(distinctUntilChanged(), takeUntil(this.$destroy))
            .subscribe((/**
         * @param {?} visible
         * @return {?}
         */
        (visible) => {
            this.isTooltipComponentVisible = visible;
            this.nzVisibleChange.emit(visible);
        }));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.registerTriggers();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.$destroy.next();
        this.$destroy.complete();
        // Clear toggling timer. Issue #3875 #4317 #4386
        this.clearTogglingTimer();
        this.removeTriggerListeners();
        if (this.tooltipRef) {
            this.tooltipRef.destroy();
        }
    }
    /**
     * @return {?}
     */
    show() {
        this.tooltip.show();
    }
    /**
     * @return {?}
     */
    hide() {
        this.tooltip.hide();
    }
    /**
     * Force the component to update its position.
     * @return {?}
     */
    updatePosition() {
        if (this.tooltip && this.isDynamicTooltip) {
            this.tooltip.updatePosition();
        }
    }
    /**
     * Create a dynamic tooltip component. This method can be override.
     * @protected
     * @return {?}
     */
    createDynamicTooltipComponent() {
        this.isDynamicTooltip = true;
        this.tooltipRef = this.hostView.createComponent(this.componentFactory);
        this.tooltip = this.tooltipRef.instance;
        this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.tooltipRef.location.nativeElement); // Remove the component's DOM because it should be in the overlay container.
        // If the tooltip component is dynamically created, we should set its origin before updating properties to
        // the component.
        this.tooltip.setOverlayOrigin((/** @type {?} */ (this)));
        // Update all properties to the component.
        this.updateChangedProperties(this.needProxyProperties);
    }
    /**
     * @protected
     * @return {?}
     */
    registerTriggers() {
        // When the method gets invoked, all properties has been synced to the dynamic component.
        // After removing the old API, we can just check the directive's own `nzTrigger`.
        /** @type {?} */
        const el = this.elementRef.nativeElement;
        /** @type {?} */
        const trigger = this.isDynamicTooltip ? this.trigger : this.tooltip.nzTrigger;
        this.removeTriggerListeners();
        if (trigger === 'click') {
            this.triggerUnlisteners.push(this.renderer.listen(el, 'click', (/**
             * @param {?} e
             * @return {?}
             */
            e => {
                e.preventDefault();
                this.show();
            })));
        }
        else {
            if (trigger === 'hover' || trigger === 'combined') {
                /** @type {?} */
                let overlayElement;
                this.triggerUnlisteners.push(this.renderer.listen(el, 'mouseenter', (/**
                 * @return {?}
                 */
                () => {
                    this.delayEnterLeave(true, true, this.tooltip.nzMouseEnterDelay);
                })));
                this.triggerUnlisteners.push(this.renderer.listen(el, 'mouseleave', (/**
                 * @return {?}
                 */
                () => {
                    this.delayEnterLeave(true, false, this.tooltip.nzMouseLeaveDelay);
                    if (this.tooltip.overlay.overlayRef && !overlayElement) {
                        overlayElement = this.tooltip.overlay.overlayRef.overlayElement;
                        this.triggerUnlisteners.push(this.renderer.listen(overlayElement, 'mouseenter', (/**
                         * @return {?}
                         */
                        () => {
                            this.delayEnterLeave(false, true);
                        })));
                        this.triggerUnlisteners.push(this.renderer.listen(overlayElement, 'mouseleave', (/**
                         * @return {?}
                         */
                        () => {
                            this.delayEnterLeave(false, false);
                        })));
                    }
                })));
            }
            if (trigger === 'focus' || trigger === 'combined') {
                this.triggerUnlisteners.push(this.renderer.listen(el, 'focus', (/**
                 * @return {?}
                 */
                () => this.show())));
                this.triggerUnlisteners.push(this.renderer.listen(el, 'blur', (/**
                 * @return {?}
                 */
                () => this.hide())));
            }
        }
        // Else do nothing because user wants to control the visibility programmatically.
    }
    /**
     * Sync changed properties to the component and trigger change detection in that component.
     * @protected
     * @param {?} propertiesOrChanges
     * @return {?}
     */
    updateChangedProperties(propertiesOrChanges) {
        /** @type {?} */
        const isArray = Array.isArray(propertiesOrChanges);
        /** @type {?} */
        const keys_ = isArray ? ((/** @type {?} */ (propertiesOrChanges))) : Object.keys(propertiesOrChanges);
        // tslint:disable-next-line no-any
        keys_.forEach((/**
         * @param {?} property
         * @return {?}
         */
        (property) => {
            if (this.needProxyProperties.indexOf(property) !== -1) {
                // @ts-ignore
                this.updateComponentValue(property, this[property]);
            }
        }));
        if (isArray) {
            this.updateComponentValue('nzTitle', this.title);
            this.updateComponentValue('nzContent', this.content);
            this.updateComponentValue('nzPlacement', this.placement);
            this.updateComponentValue('nzTrigger', this.trigger);
            this.updateComponentValue('nzShowPopoverCloseButton', this.showPopoverCloseButton);
            this.updateComponentValue('nzPopoverCloseButtonLabel', this.popoverCloseButtonLabel);
        }
        else {
            /** @type {?} */
            const c = (/** @type {?} */ (propertiesOrChanges));
            if (c.specificTitle || c.directiveNameTitle || c.nzTitle) {
                this.updateComponentValue('nzTitle', this.title);
            }
            if (c.specificContent || c.directiveNameContent || c.nzContent) {
                this.updateComponentValue('nzContent', this.content);
            }
            if (c.specificTrigger || c.nzTrigger) {
                this.updateComponentValue('nzTrigger', this.trigger);
            }
            if (c.specificPlacement || c.nzPlacement) {
                this.updateComponentValue('nzPlacement', this.placement);
            }
            if (c.showCloseButton) {
                this.updateComponentValue('nzShowPopoverCloseButton', this.showPopoverCloseButton);
            }
            if (c.popoverCloseButtonLabel) {
                this.updateComponentValue('nzPopoverCloseButtonLabel', this.popoverCloseButtonLabel);
            }
        }
        this.tooltip.updateByDirective();
    }
    // tslint:disable-next-line no-any
    /**
     * @private
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    updateComponentValue(key, value) {
        if (typeof value !== 'undefined') {
            // @ts-ignore
            this.tooltip[key] = value;
        }
    }
    /**
     * @private
     * @param {?} isOrigin
     * @param {?} isEnter
     * @param {?=} delay
     * @return {?}
     */
    delayEnterLeave(isOrigin, isEnter, delay = -1) {
        if (this.delayTimer) {
            this.clearTogglingTimer();
        }
        else if (delay > 0) {
            this.delayTimer = setTimeout((/**
             * @return {?}
             */
            () => {
                this.delayTimer = undefined;
                isEnter ? this.show() : this.hide();
            }), delay * 1000);
        }
        else {
            // `isOrigin` is used due to the tooltip will not hide immediately
            // (may caused by the fade-out animation).
            isEnter && isOrigin ? this.show() : this.hide();
        }
    }
    /**
     * @private
     * @return {?}
     */
    removeTriggerListeners() {
        this.triggerUnlisteners.forEach((/**
         * @param {?} cancel
         * @return {?}
         */
        cancel => cancel()));
        this.triggerUnlisteners.length = 0;
    }
    /**
     * @private
     * @return {?}
     */
    clearTogglingTimer() {
        if (this.delayTimer) {
            clearTimeout(this.delayTimer);
            this.delayTimer = undefined;
        }
    }
}
NzTooltipBaseDirective.propDecorators = {
    nzTitle: [{ type: Input }],
    nzContent: [{ type: Input }],
    nzTrigger: [{ type: Input }],
    nzPlacement: [{ type: Input }],
    nzMouseEnterDelay: [{ type: Input }],
    nzMouseLeaveDelay: [{ type: Input }],
    nzOverlayClassName: [{ type: Input }],
    nzOverlayStyle: [{ type: Input }],
    nzVisible: [{ type: Input }],
    nzShowPopoverCloseButton: [{ type: Input }],
    nzPopoverCloseButtonLabel: [{ type: Input }],
    nzVisibleChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NzTooltipBaseDirective.prototype.directiveNameTitle;
    /** @type {?} */
    NzTooltipBaseDirective.prototype.specificTitle;
    /** @type {?} */
    NzTooltipBaseDirective.prototype.directiveNameContent;
    /** @type {?} */
    NzTooltipBaseDirective.prototype.specificContent;
    /** @type {?} */
    NzTooltipBaseDirective.prototype.specificTrigger;
    /** @type {?} */
    NzTooltipBaseDirective.prototype.specificPlacement;
    /** @type {?} */
    NzTooltipBaseDirective.prototype.showPopoverCloseButton;
    /** @type {?} */
    NzTooltipBaseDirective.prototype.popoverCloseButtonLabel;
    /** @type {?} */
    NzTooltipBaseDirective.prototype.tooltipRef;
    /**
     * @deprecated 9.0.0. This is deprecated and going to be removed in 9.0.0.
     * Please use a more specific API. Like `nzTooltipTitle`.
     * @type {?}
     */
    NzTooltipBaseDirective.prototype.nzTitle;
    /**
     * @deprecated 9.0.0. This is deprecated and going to be removed in 9.0.0.
     * Please use a more specific API. Like `nzPopoverContent`.
     * @type {?}
     */
    NzTooltipBaseDirective.prototype.nzContent;
    /**
     * @deprecated 9.0.0. This is deprecated and going to be removed in 9.0.0.
     * Please use a more specific API. Like `nzTooltipTrigger`.
     * @type {?}
     */
    NzTooltipBaseDirective.prototype.nzTrigger;
    /**
     * @deprecated 9.0.0. This is deprecated and going to be removed in 9.0.0.
     * Please use a more specific API. Like `nzTooltipPlacement`.
     * @type {?}
     */
    NzTooltipBaseDirective.prototype.nzPlacement;
    /** @type {?} */
    NzTooltipBaseDirective.prototype.nzMouseEnterDelay;
    /** @type {?} */
    NzTooltipBaseDirective.prototype.nzMouseLeaveDelay;
    /** @type {?} */
    NzTooltipBaseDirective.prototype.nzOverlayClassName;
    /** @type {?} */
    NzTooltipBaseDirective.prototype.nzOverlayStyle;
    /** @type {?} */
    NzTooltipBaseDirective.prototype.nzVisible;
    /** @type {?} */
    NzTooltipBaseDirective.prototype.nzShowPopoverCloseButton;
    /** @type {?} */
    NzTooltipBaseDirective.prototype.nzPopoverCloseButtonLabel;
    /**
     * For create tooltip dynamically. This should be override for each different component.
     * @type {?}
     * @protected
     */
    NzTooltipBaseDirective.prototype.componentFactory;
    /**
     * @type {?}
     * @protected
     */
    NzTooltipBaseDirective.prototype.needProxyProperties;
    /** @type {?} */
    NzTooltipBaseDirective.prototype.nzVisibleChange;
    /** @type {?} */
    NzTooltipBaseDirective.prototype.tooltip;
    /** @type {?} */
    NzTooltipBaseDirective.prototype.isTooltipComponentVisible;
    /**
     * @deprecated 9.0.0. Tooltips would always be dynamic in 9.0.0.
     * @type {?}
     * @protected
     */
    NzTooltipBaseDirective.prototype.isDynamicTooltip;
    /**
     * @type {?}
     * @protected
     */
    NzTooltipBaseDirective.prototype.triggerUnlisteners;
    /**
     * @type {?}
     * @protected
     */
    NzTooltipBaseDirective.prototype.$destroy;
    /**
     * @type {?}
     * @private
     */
    NzTooltipBaseDirective.prototype.delayTimer;
    /** @type {?} */
    NzTooltipBaseDirective.prototype.elementRef;
    /**
     * @type {?}
     * @protected
     */
    NzTooltipBaseDirective.prototype.hostView;
    /**
     * @type {?}
     * @protected
     */
    NzTooltipBaseDirective.prototype.resolver;
    /**
     * @type {?}
     * @protected
     */
    NzTooltipBaseDirective.prototype.renderer;
    /**
     * @deprecated 9.0.0. This will always be `null`.
     * @type {?}
     * @protected
     */
    NzTooltipBaseDirective.prototype._tooltip;
    /**
     * @type {?}
     * @protected
     */
    NzTooltipBaseDirective.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdG9vbHRpcC1iYXNlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdG9vbHRpcC8iLCJzb3VyY2VzIjpbImJhc2UvbnotdG9vbHRpcC1iYXNlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkEsT0FBTyxFQU1MLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUlQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQXNELE1BQU0sb0JBQW9CLENBQUM7QUFDekcsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFNakUsTUFBTSxPQUFnQixzQkFBc0I7Ozs7Ozs7OztJQTZGMUMsWUFDUyxVQUFzQixFQUNuQixRQUEwQixFQUMxQixRQUFrQyxFQUNsQyxRQUFtQixFQUluQixRQUF1QyxFQUN2QyxXQUFvQztRQVJ2QyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ25CLGFBQVEsR0FBUixRQUFRLENBQWtCO1FBQzFCLGFBQVEsR0FBUixRQUFRLENBQTBCO1FBQ2xDLGFBQVEsR0FBUixRQUFRLENBQVc7UUFJbkIsYUFBUSxHQUFSLFFBQVEsQ0FBK0I7UUFDdkMsZ0JBQVcsR0FBWCxXQUFXLENBQXlCOzs7OztRQTNFdkMsY0FBUyxHQUFxQixPQUFPLENBQUM7Ozs7O1FBTXRDLGdCQUFXLEdBQVcsS0FBSyxDQUFDO1FBa0MzQix3QkFBbUIsR0FBRztZQUM5QixvQkFBb0I7WUFDcEIsZ0JBQWdCO1lBQ2hCLG1CQUFtQjtZQUNuQixtQkFBbUI7WUFDbkIsV0FBVztZQUNYLGFBQWE7U0FDZCxDQUFDO1FBRWlCLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUlqRSw4QkFBeUIsR0FBRyxLQUFLLENBQUM7Ozs7UUFLeEIscUJB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UCxvREFBcUM7O0lBQ3JDLCtDQUFnQzs7SUFDaEMsc0RBQXVDOztJQUN2QyxpREFBa0M7O0lBQ2xDLGlEQUFtQzs7SUFDbkMsbURBQTJCOztJQUMzQix3REFBaUM7O0lBQ2pDLHlEQUFpQzs7SUFDakMsNENBQWlEOzs7Ozs7SUFNakQseUNBQWtDOzs7Ozs7SUFNbEMsMkNBQW9DOzs7Ozs7SUFNcEMsMkNBQStDOzs7Ozs7SUFNL0MsNkNBQXFDOztJQUVyQyxtREFBbUM7O0lBQ25DLG1EQUFtQzs7SUFDbkMsb0RBQW9DOztJQUNwQyxnREFBMEM7O0lBQzFDLDJDQUE0Qjs7SUFDNUIsMERBQTJDOztJQUMzQywyREFBMkM7Ozs7OztJQUszQyxrREFBcUU7Ozs7O0lBcUJyRSxxREFPRTs7SUFFRixpREFBaUU7O0lBRWpFLHlDQUFnQzs7SUFFaEMsMkRBQWtDOzs7Ozs7SUFLbEMsa0RBQW1DOzs7OztJQUVuQyxvREFBOEQ7Ozs7O0lBRTlELDBDQUF5Qzs7Ozs7SUFFekMsNENBQTRCOztJQUcxQiw0Q0FBNkI7Ozs7O0lBQzdCLDBDQUFvQzs7Ozs7SUFDcEMsMENBQTRDOzs7OztJQUM1QywwQ0FBNkI7Ozs7OztJQUk3QiwwQ0FBaUQ7Ozs7O0lBQ2pELDZDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBDZGtPdmVybGF5T3JpZ2luIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ29tcG9uZW50RmFjdG9yeSxcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgQ29tcG9uZW50UmVmLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHdhcm5EZXByZWNhdGlvbiwgTmdTdHlsZUludGVyZmFjZSwgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSwgTnpUU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBOelRvb2x0aXBUcmlnZ2VyIH0gZnJvbSAnLi4vbnotdG9vbHRpcC5kZWZpbml0aW9ucyc7XHJcbmltcG9ydCB7IE56VG9vbHRpcEJhc2VDb21wb25lbnRMZWdhY3kgfSBmcm9tICcuL256LXRvb2x0aXAtYmFzZS1sZWdhY3kuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpUb29sdGlwQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vbnotdG9vbHRpcC1iYXNlLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTnpUb29sdGlwQmFzZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xyXG4gIGRpcmVjdGl2ZU5hbWVUaXRsZT86IE56VFNUeXBlIHwgbnVsbDtcclxuICBzcGVjaWZpY1RpdGxlPzogTnpUU1R5cGUgfCBudWxsO1xyXG4gIGRpcmVjdGl2ZU5hbWVDb250ZW50PzogTnpUU1R5cGUgfCBudWxsO1xyXG4gIHNwZWNpZmljQ29udGVudD86IE56VFNUeXBlIHwgbnVsbDtcclxuICBzcGVjaWZpY1RyaWdnZXI/OiBOelRvb2x0aXBUcmlnZ2VyO1xyXG4gIHNwZWNpZmljUGxhY2VtZW50Pzogc3RyaW5nO1xyXG4gIHNob3dQb3BvdmVyQ2xvc2VCdXR0b24/OiBib29sZWFuO1xyXG4gIHBvcG92ZXJDbG9zZUJ1dHRvbkxhYmVsPzogc3RyaW5nO1xyXG4gIHRvb2x0aXBSZWY6IENvbXBvbmVudFJlZjxOelRvb2x0aXBCYXNlQ29tcG9uZW50PjtcclxuXHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgOS4wLjAuIFRoaXMgaXMgZGVwcmVjYXRlZCBhbmQgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiA5LjAuMC5cclxuICAgKiBQbGVhc2UgdXNlIGEgbW9yZSBzcGVjaWZpYyBBUEkuIExpa2UgYG56VG9vbHRpcFRpdGxlYC5cclxuICAgKi9cclxuICBASW5wdXQoKSBuelRpdGxlOiBOelRTVHlwZSB8IG51bGw7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXByZWNhdGVkIDkuMC4wLiBUaGlzIGlzIGRlcHJlY2F0ZWQgYW5kIGdvaW5nIHRvIGJlIHJlbW92ZWQgaW4gOS4wLjAuXHJcbiAgICogUGxlYXNlIHVzZSBhIG1vcmUgc3BlY2lmaWMgQVBJLiBMaWtlIGBuelBvcG92ZXJDb250ZW50YC5cclxuICAgKi9cclxuICBASW5wdXQoKSBuekNvbnRlbnQ6IE56VFNUeXBlIHwgbnVsbDtcclxuXHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgOS4wLjAuIFRoaXMgaXMgZGVwcmVjYXRlZCBhbmQgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiA5LjAuMC5cclxuICAgKiBQbGVhc2UgdXNlIGEgbW9yZSBzcGVjaWZpYyBBUEkuIExpa2UgYG56VG9vbHRpcFRyaWdnZXJgLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIG56VHJpZ2dlcjogTnpUb29sdGlwVHJpZ2dlciA9ICdob3Zlcic7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXByZWNhdGVkIDkuMC4wLiBUaGlzIGlzIGRlcHJlY2F0ZWQgYW5kIGdvaW5nIHRvIGJlIHJlbW92ZWQgaW4gOS4wLjAuXHJcbiAgICogUGxlYXNlIHVzZSBhIG1vcmUgc3BlY2lmaWMgQVBJLiBMaWtlIGBuelRvb2x0aXBQbGFjZW1lbnRgLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIG56UGxhY2VtZW50OiBzdHJpbmcgPSAndG9wJztcclxuXHJcbiAgQElucHV0KCkgbnpNb3VzZUVudGVyRGVsYXk6IG51bWJlcjtcclxuICBASW5wdXQoKSBuek1vdXNlTGVhdmVEZWxheTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIG56T3ZlcmxheUNsYXNzTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56T3ZlcmxheVN0eWxlOiBOZ1N0eWxlSW50ZXJmYWNlO1xyXG4gIEBJbnB1dCgpIG56VmlzaWJsZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBuelNob3dQb3BvdmVyQ2xvc2VCdXR0b246IGJvb2xlYW47XHJcbiAgQElucHV0KCkgbnpQb3BvdmVyQ2xvc2VCdXR0b25MYWJlbDogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBGb3IgY3JlYXRlIHRvb2x0aXAgZHluYW1pY2FsbHkuIFRoaXMgc2hvdWxkIGJlIG92ZXJyaWRlIGZvciBlYWNoIGRpZmZlcmVudCBjb21wb25lbnQuXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIGNvbXBvbmVudEZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8TnpUb29sdGlwQmFzZUNvbXBvbmVudD47XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgdHJ1ZSB0aXRsZSB0aGF0IHdvdWxkIGJlIHVzZWQgaW4gb3RoZXIgcGFydHMgb24gdGhpcyBjb21wb25lbnQuXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIGdldCB0aXRsZSgpOiBOelRTVHlwZSB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuc3BlY2lmaWNUaXRsZSB8fCB0aGlzLmRpcmVjdGl2ZU5hbWVUaXRsZSB8fCB0aGlzLm56VGl0bGU7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0IGNvbnRlbnQoKTogTnpUU1R5cGUgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLnNwZWNpZmljQ29udGVudCB8fCB0aGlzLmRpcmVjdGl2ZU5hbWVDb250ZW50IHx8IHRoaXMubnpDb250ZW50O1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGdldCBwbGFjZW1lbnQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLnNwZWNpZmljUGxhY2VtZW50IHx8IHRoaXMubnpQbGFjZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0IHRyaWdnZXIoKTogTnpUb29sdGlwVHJpZ2dlciB7XHJcbiAgICByZXR1cm4gdGhpcy5zcGVjaWZpY1RyaWdnZXIgfHwgdGhpcy5uelRyaWdnZXI7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgbmVlZFByb3h5UHJvcGVydGllcyA9IFtcclxuICAgICduek92ZXJsYXlDbGFzc05hbWUnLFxyXG4gICAgJ256T3ZlcmxheVN0eWxlJyxcclxuICAgICduek1vdXNlRW50ZXJEZWxheScsXHJcbiAgICAnbnpNb3VzZUxlYXZlRGVsYXknLFxyXG4gICAgJ256VmlzaWJsZScsXHJcbiAgICAnbm9BbmltYXRpb24nXHJcbiAgXTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56VmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgdG9vbHRpcDogTnpUb29sdGlwQmFzZUNvbXBvbmVudDtcclxuXHJcbiAgaXNUb29sdGlwQ29tcG9uZW50VmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCA5LjAuMC4gVG9vbHRpcHMgd291bGQgYWx3YXlzIGJlIGR5bmFtaWMgaW4gOS4wLjAuXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIGlzRHluYW1pY1Rvb2x0aXAgPSBmYWxzZTtcclxuXHJcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IHRyaWdnZXJVbmxpc3RlbmVyczogQXJyYXk8KCkgPT4gdm9pZD4gPSBbXTtcclxuXHJcbiAgcHJvdGVjdGVkICRkZXN0cm95ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgcHJpdmF0ZSBkZWxheVRpbWVyPzogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJvdGVjdGVkIGhvc3RWaWV3OiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgcHJvdGVjdGVkIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICBwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIC8qKlxyXG4gICAgICogQGRlcHJlY2F0ZWQgOS4wLjAuIFRoaXMgd2lsbCBhbHdheXMgYmUgYG51bGxgLlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX3Rvb2x0aXA/OiBOelRvb2x0aXBCYXNlQ29tcG9uZW50TGVnYWN5LFxyXG4gICAgcHJvdGVjdGVkIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgbnpUcmlnZ2VyLCBzcGVjaWZpY1RyaWdnZXIgfSA9IGNoYW5nZXM7XHJcbiAgICBjb25zdCB0cmlnZ2VyID0gc3BlY2lmaWNUcmlnZ2VyIHx8IG56VHJpZ2dlcjtcclxuXHJcbiAgICBpZiAodHJpZ2dlciAmJiAhdHJpZ2dlci5pc0ZpcnN0Q2hhbmdlKCkpIHtcclxuICAgICAgdGhpcy5yZWdpc3RlclRyaWdnZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMudG9vbHRpcCAmJiB0aGlzLmlzRHluYW1pY1Rvb2x0aXApIHtcclxuICAgICAgdGhpcy51cGRhdGVDaGFuZ2VkUHJvcGVydGllcyhjaGFuZ2VzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUT0RPOiBlbmFibGUgdGhlc2Ugd2FybmluZyBpbiA5LjAuMC5cclxuICAgIC8vIGlmIChjaGFuZ2VzLm56VGl0bGUpIHtcclxuICAgIC8vICAgd2FybkRlcHJlY2F0aW9uKFxyXG4gICAgLy8gICAgIGAnbnpUaXRsZScgb2YgJ256LXRvb2x0aXAnIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAxMC4wLjAuIFBsZWFzZSB1c2UgJ256VG9vbHRpcFRpdGxlJyBpbnN0ZWFkLiBUaGUgc2FtZSB3aXRoICduei1wb3BvdmVyJyBhbmQgJ256LXBvcGNvbmZpcm0nLmBcclxuICAgIC8vICAgKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBpZiAoY2hhbmdlcy5uekNvbnRlbnQpIHtcclxuICAgIC8vICAgd2FybkRlcHJlY2F0aW9uKFxyXG4gICAgLy8gICAgIGAnbnpDb250ZW50JyBvZiAnbnotcG9wb3ZlcicgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIDEwLjAuMC4gUGxlYXNlIHVzZSAnbnpQb3BvdmVyQ29udGVudCcgaW5zdGVhZC5gXHJcbiAgICAvLyAgICk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gaWYgKGNoYW5nZXMubnpQbGFjZW1lbnQpIHtcclxuICAgIC8vICAgd2FybkRlcHJlY2F0aW9uKFxyXG4gICAgLy8gICAgIGAnbnpQbGFjZW1lbnQnIG9mICduei10b29sdGlwJyBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gMTAuMC4wLiBQbGVhc2UgdXNlICduelRvb2x0aXBDb250ZW50JyBpbnN0ZWFkLiBUaGUgc2FtZSB3aXRoICduei1wb3BvdmVyJyBhbmQgJ256LXBvcGNvbmZpcm0nLmBcclxuICAgIC8vICAgKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBpZiAoY2hhbmdlcy5uelRyaWdnZXIpIHtcclxuICAgIC8vICAgd2FybkRlcHJlY2F0aW9uKFxyXG4gICAgLy8gICAgIGAnbnpUcmlnZ2VyJyBvZiAnbnotdG9vbHRpcCcgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIDEwLjAuMC4gUGxlYXNlIHVzZSAnbnpUb29sdGlwVHJpZ2dlcicgaW5zdGVhZC4gVGhlIHNhbWUgd2l0aCAnbnotcG9wb3ZlcicgYW5kICduei1wb3Bjb25maXJtJy5gXHJcbiAgICAvLyAgICk7XHJcbiAgICAvLyB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5fdG9vbHRpcCkge1xyXG4gICAgICB0aGlzLmNyZWF0ZUR5bmFtaWNUb29sdGlwQ29tcG9uZW50KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB3YXJuRGVwcmVjYXRpb24oXHJcbiAgICAgICAgYCc8bnotdG9vbHRpcD48L256LXRvb2x0aXA+JywgJzxuei1wb3BvdmVyPjwvbnotcG9wb3Zlcj4nIGFuZCAnPG56LXBvcGNvbmZpcm0+PC9uei1wb3Bjb25maXJtPicgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIDkuMC4wLiBSZWZlcjogaHR0cHM6Ly9uZy5hbnQuZGVzaWduL2NvbXBvbmVudHMvdG9vbHRpcC96aCAuYFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnRvb2x0aXAgPSB0aGlzLl90b29sdGlwO1xyXG4gICAgICB0aGlzLnRvb2x0aXAuc2V0T3ZlcmxheU9yaWdpbih0aGlzIGFzIENka092ZXJsYXlPcmlnaW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudG9vbHRpcC5uelZpc2libGVDaGFuZ2VcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcclxuICAgICAgICB0YWtlVW50aWwodGhpcy4kZGVzdHJveSlcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKCh2aXNpYmxlOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pc1Rvb2x0aXBDb21wb25lbnRWaXNpYmxlID0gdmlzaWJsZTtcclxuICAgICAgICB0aGlzLm56VmlzaWJsZUNoYW5nZS5lbWl0KHZpc2libGUpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVnaXN0ZXJUcmlnZ2VycygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLiRkZXN0cm95Lm5leHQoKTtcclxuICAgIHRoaXMuJGRlc3Ryb3kuY29tcGxldGUoKTtcclxuXHJcbiAgICAvLyBDbGVhciB0b2dnbGluZyB0aW1lci4gSXNzdWUgIzM4NzUgIzQzMTcgIzQzODZcclxuICAgIHRoaXMuY2xlYXJUb2dnbGluZ1RpbWVyKCk7XHJcbiAgICB0aGlzLnJlbW92ZVRyaWdnZXJMaXN0ZW5lcnMoKTtcclxuXHJcbiAgICBpZiAodGhpcy50b29sdGlwUmVmKSB7XHJcbiAgICAgIHRoaXMudG9vbHRpcFJlZi5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzaG93KCk6IHZvaWQge1xyXG4gICAgdGhpcy50b29sdGlwLnNob3coKTtcclxuICB9XHJcblxyXG4gIGhpZGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRvb2x0aXAuaGlkZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRm9yY2UgdGhlIGNvbXBvbmVudCB0byB1cGRhdGUgaXRzIHBvc2l0aW9uLlxyXG4gICAqL1xyXG4gIHVwZGF0ZVBvc2l0aW9uKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudG9vbHRpcCAmJiB0aGlzLmlzRHluYW1pY1Rvb2x0aXApIHtcclxuICAgICAgdGhpcy50b29sdGlwLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYSBkeW5hbWljIHRvb2x0aXAgY29tcG9uZW50LiBUaGlzIG1ldGhvZCBjYW4gYmUgb3ZlcnJpZGUuXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIGNyZWF0ZUR5bmFtaWNUb29sdGlwQ29tcG9uZW50KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0R5bmFtaWNUb29sdGlwID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLnRvb2x0aXBSZWYgPSB0aGlzLmhvc3RWaWV3LmNyZWF0ZUNvbXBvbmVudCh0aGlzLmNvbXBvbmVudEZhY3RvcnkpO1xyXG5cclxuICAgIHRoaXMudG9vbHRpcCA9IHRoaXMudG9vbHRpcFJlZi5pbnN0YW5jZTtcclxuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQoXHJcbiAgICAgIHRoaXMucmVuZGVyZXIucGFyZW50Tm9kZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCksXHJcbiAgICAgIHRoaXMudG9vbHRpcFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50XHJcbiAgICApOyAvLyBSZW1vdmUgdGhlIGNvbXBvbmVudCdzIERPTSBiZWNhdXNlIGl0IHNob3VsZCBiZSBpbiB0aGUgb3ZlcmxheSBjb250YWluZXIuXHJcblxyXG4gICAgLy8gSWYgdGhlIHRvb2x0aXAgY29tcG9uZW50IGlzIGR5bmFtaWNhbGx5IGNyZWF0ZWQsIHdlIHNob3VsZCBzZXQgaXRzIG9yaWdpbiBiZWZvcmUgdXBkYXRpbmcgcHJvcGVydGllcyB0b1xyXG4gICAgLy8gdGhlIGNvbXBvbmVudC5cclxuICAgIHRoaXMudG9vbHRpcC5zZXRPdmVybGF5T3JpZ2luKHRoaXMgYXMgQ2RrT3ZlcmxheU9yaWdpbik7XHJcbiAgICAvLyBVcGRhdGUgYWxsIHByb3BlcnRpZXMgdG8gdGhlIGNvbXBvbmVudC5cclxuICAgIHRoaXMudXBkYXRlQ2hhbmdlZFByb3BlcnRpZXModGhpcy5uZWVkUHJveHlQcm9wZXJ0aWVzKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCByZWdpc3RlclRyaWdnZXJzKCk6IHZvaWQge1xyXG4gICAgLy8gV2hlbiB0aGUgbWV0aG9kIGdldHMgaW52b2tlZCwgYWxsIHByb3BlcnRpZXMgaGFzIGJlZW4gc3luY2VkIHRvIHRoZSBkeW5hbWljIGNvbXBvbmVudC5cclxuICAgIC8vIEFmdGVyIHJlbW92aW5nIHRoZSBvbGQgQVBJLCB3ZSBjYW4ganVzdCBjaGVjayB0aGUgZGlyZWN0aXZlJ3Mgb3duIGBuelRyaWdnZXJgLlxyXG4gICAgY29uc3QgZWwgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICAgIGNvbnN0IHRyaWdnZXIgPSB0aGlzLmlzRHluYW1pY1Rvb2x0aXAgPyB0aGlzLnRyaWdnZXIgOiB0aGlzLnRvb2x0aXAubnpUcmlnZ2VyO1xyXG5cclxuICAgIHRoaXMucmVtb3ZlVHJpZ2dlckxpc3RlbmVycygpO1xyXG5cclxuICAgIGlmICh0cmlnZ2VyID09PSAnY2xpY2snKSB7XHJcbiAgICAgIHRoaXMudHJpZ2dlclVubGlzdGVuZXJzLnB1c2goXHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4oZWwsICdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0cmlnZ2VyID09PSAnaG92ZXInIHx8IHRyaWdnZXIgPT09ICdjb21iaW5lZCcpIHtcclxuICAgICAgICBsZXQgb3ZlcmxheUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgICAgIHRoaXMudHJpZ2dlclVubGlzdGVuZXJzLnB1c2goXHJcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbihlbCwgJ21vdXNlZW50ZXInLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVsYXlFbnRlckxlYXZlKHRydWUsIHRydWUsIHRoaXMudG9vbHRpcC5uek1vdXNlRW50ZXJEZWxheSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyVW5saXN0ZW5lcnMucHVzaChcclxuICAgICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKGVsLCAnbW91c2VsZWF2ZScsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5kZWxheUVudGVyTGVhdmUodHJ1ZSwgZmFsc2UsIHRoaXMudG9vbHRpcC5uek1vdXNlTGVhdmVEZWxheSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRvb2x0aXAub3ZlcmxheS5vdmVybGF5UmVmICYmICFvdmVybGF5RWxlbWVudCkge1xyXG4gICAgICAgICAgICAgIG92ZXJsYXlFbGVtZW50ID0gdGhpcy50b29sdGlwLm92ZXJsYXkub3ZlcmxheVJlZi5vdmVybGF5RWxlbWVudDtcclxuICAgICAgICAgICAgICB0aGlzLnRyaWdnZXJVbmxpc3RlbmVycy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4ob3ZlcmxheUVsZW1lbnQsICdtb3VzZWVudGVyJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmRlbGF5RW50ZXJMZWF2ZShmYWxzZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyVW5saXN0ZW5lcnMucHVzaChcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKG92ZXJsYXlFbGVtZW50LCAnbW91c2VsZWF2ZScsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5kZWxheUVudGVyTGVhdmUoZmFsc2UsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0cmlnZ2VyID09PSAnZm9jdXMnIHx8IHRyaWdnZXIgPT09ICdjb21iaW5lZCcpIHtcclxuICAgICAgICB0aGlzLnRyaWdnZXJVbmxpc3RlbmVycy5wdXNoKHRoaXMucmVuZGVyZXIubGlzdGVuKGVsLCAnZm9jdXMnLCAoKSA9PiB0aGlzLnNob3coKSkpO1xyXG4gICAgICAgIHRoaXMudHJpZ2dlclVubGlzdGVuZXJzLnB1c2godGhpcy5yZW5kZXJlci5saXN0ZW4oZWwsICdibHVyJywgKCkgPT4gdGhpcy5oaWRlKCkpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gRWxzZSBkbyBub3RoaW5nIGJlY2F1c2UgdXNlciB3YW50cyB0byBjb250cm9sIHRoZSB2aXNpYmlsaXR5IHByb2dyYW1tYXRpY2FsbHkuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTeW5jIGNoYW5nZWQgcHJvcGVydGllcyB0byB0aGUgY29tcG9uZW50IGFuZCB0cmlnZ2VyIGNoYW5nZSBkZXRlY3Rpb24gaW4gdGhhdCBjb21wb25lbnQuXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIHVwZGF0ZUNoYW5nZWRQcm9wZXJ0aWVzKHByb3BlcnRpZXNPckNoYW5nZXM6IHN0cmluZ1tdIHwgU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkocHJvcGVydGllc09yQ2hhbmdlcyk7XHJcbiAgICBjb25zdCBrZXlzXyA9IGlzQXJyYXkgPyAocHJvcGVydGllc09yQ2hhbmdlcyBhcyBzdHJpbmdbXSkgOiBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzT3JDaGFuZ2VzKTtcclxuXHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tYW55XHJcbiAgICBrZXlzXy5mb3JFYWNoKChwcm9wZXJ0eTogYW55KSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLm5lZWRQcm94eVByb3BlcnRpZXMuaW5kZXhPZihwcm9wZXJ0eSkgIT09IC0xKSB7XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIHRoaXMudXBkYXRlQ29tcG9uZW50VmFsdWUocHJvcGVydHksIHRoaXNbcHJvcGVydHldKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGlzQXJyYXkpIHtcclxuICAgICAgdGhpcy51cGRhdGVDb21wb25lbnRWYWx1ZSgnbnpUaXRsZScsIHRoaXMudGl0bGUpO1xyXG4gICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudFZhbHVlKCduekNvbnRlbnQnLCB0aGlzLmNvbnRlbnQpO1xyXG4gICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudFZhbHVlKCduelBsYWNlbWVudCcsIHRoaXMucGxhY2VtZW50KTtcclxuICAgICAgdGhpcy51cGRhdGVDb21wb25lbnRWYWx1ZSgnbnpUcmlnZ2VyJywgdGhpcy50cmlnZ2VyKTtcclxuICAgICAgdGhpcy51cGRhdGVDb21wb25lbnRWYWx1ZSgnbnpTaG93UG9wb3ZlckNsb3NlQnV0dG9uJywgdGhpcy5zaG93UG9wb3ZlckNsb3NlQnV0dG9uKTtcclxuICAgICAgdGhpcy51cGRhdGVDb21wb25lbnRWYWx1ZSgnbnpQb3BvdmVyQ2xvc2VCdXR0b25MYWJlbCcsIHRoaXMucG9wb3ZlckNsb3NlQnV0dG9uTGFiZWwpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgYyA9IHByb3BlcnRpZXNPckNoYW5nZXMgYXMgU2ltcGxlQ2hhbmdlcztcclxuICAgICAgaWYgKGMuc3BlY2lmaWNUaXRsZSB8fCBjLmRpcmVjdGl2ZU5hbWVUaXRsZSB8fCBjLm56VGl0bGUpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudFZhbHVlKCduelRpdGxlJywgdGhpcy50aXRsZSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGMuc3BlY2lmaWNDb250ZW50IHx8IGMuZGlyZWN0aXZlTmFtZUNvbnRlbnQgfHwgYy5uekNvbnRlbnQpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudFZhbHVlKCduekNvbnRlbnQnLCB0aGlzLmNvbnRlbnQpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjLnNwZWNpZmljVHJpZ2dlciB8fCBjLm56VHJpZ2dlcikge1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ29tcG9uZW50VmFsdWUoJ256VHJpZ2dlcicsIHRoaXMudHJpZ2dlcik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGMuc3BlY2lmaWNQbGFjZW1lbnQgfHwgYy5uelBsYWNlbWVudCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ29tcG9uZW50VmFsdWUoJ256UGxhY2VtZW50JywgdGhpcy5wbGFjZW1lbnQpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjLnNob3dDbG9zZUJ1dHRvbikge1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ29tcG9uZW50VmFsdWUoJ256U2hvd1BvcG92ZXJDbG9zZUJ1dHRvbicsIHRoaXMuc2hvd1BvcG92ZXJDbG9zZUJ1dHRvbik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGMucG9wb3ZlckNsb3NlQnV0dG9uTGFiZWwpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudFZhbHVlKCduelBvcG92ZXJDbG9zZUJ1dHRvbkxhYmVsJywgdGhpcy5wb3BvdmVyQ2xvc2VCdXR0b25MYWJlbCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnRvb2x0aXAudXBkYXRlQnlEaXJlY3RpdmUoKTtcclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1hbnlcclxuICBwcml2YXRlIHVwZGF0ZUNvbXBvbmVudFZhbHVlKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgIHRoaXMudG9vbHRpcFtrZXldID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRlbGF5RW50ZXJMZWF2ZShpc09yaWdpbjogYm9vbGVhbiwgaXNFbnRlcjogYm9vbGVhbiwgZGVsYXk6IG51bWJlciA9IC0xKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kZWxheVRpbWVyKSB7XHJcbiAgICAgIHRoaXMuY2xlYXJUb2dnbGluZ1RpbWVyKCk7XHJcbiAgICB9IGVsc2UgaWYgKGRlbGF5ID4gMCkge1xyXG4gICAgICB0aGlzLmRlbGF5VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLmRlbGF5VGltZXIgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgaXNFbnRlciA/IHRoaXMuc2hvdygpIDogdGhpcy5oaWRlKCk7XHJcbiAgICAgIH0sIGRlbGF5ICogMTAwMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBgaXNPcmlnaW5gIGlzIHVzZWQgZHVlIHRvIHRoZSB0b29sdGlwIHdpbGwgbm90IGhpZGUgaW1tZWRpYXRlbHlcclxuICAgICAgLy8gKG1heSBjYXVzZWQgYnkgdGhlIGZhZGUtb3V0IGFuaW1hdGlvbikuXHJcbiAgICAgIGlzRW50ZXIgJiYgaXNPcmlnaW4gPyB0aGlzLnNob3coKSA6IHRoaXMuaGlkZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVUcmlnZ2VyTGlzdGVuZXJzKCk6IHZvaWQge1xyXG4gICAgdGhpcy50cmlnZ2VyVW5saXN0ZW5lcnMuZm9yRWFjaChjYW5jZWwgPT4gY2FuY2VsKCkpO1xyXG4gICAgdGhpcy50cmlnZ2VyVW5saXN0ZW5lcnMubGVuZ3RoID0gMDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xlYXJUb2dnbGluZ1RpbWVyKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZGVsYXlUaW1lcikge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5kZWxheVRpbWVyKTtcclxuICAgICAgdGhpcy5kZWxheVRpbWVyID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=