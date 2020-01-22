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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdG9vbHRpcC1iYXNlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdG9vbHRpcC8iLCJzb3VyY2VzIjpbImJhc2UvbnotdG9vbHRpcC1iYXNlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkEsT0FBTyxFQU1MLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUlQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQXNELE1BQU0sb0JBQW9CLENBQUM7QUFDekcsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFNakUsTUFBTSxPQUFnQixzQkFBc0I7Ozs7Ozs7OztJQXlGMUMsWUFDUyxVQUFzQixFQUNuQixRQUEwQixFQUMxQixRQUFrQyxFQUNsQyxRQUFtQixFQUluQixRQUF1QyxFQUN2QyxXQUFvQztRQVJ2QyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ25CLGFBQVEsR0FBUixRQUFRLENBQWtCO1FBQzFCLGFBQVEsR0FBUixRQUFRLENBQTBCO1FBQ2xDLGFBQVEsR0FBUixRQUFRLENBQVc7UUFJbkIsYUFBUSxHQUFSLFFBQVEsQ0FBK0I7UUFDdkMsZ0JBQVcsR0FBWCxXQUFXLENBQXlCOzs7OztRQXpFdkMsY0FBUyxHQUFxQixPQUFPLENBQUM7Ozs7O1FBTXRDLGdCQUFXLEdBQVcsS0FBSyxDQUFDO1FBZ0MzQix3QkFBbUIsR0FBRztZQUM5QixvQkFBb0I7WUFDcEIsZ0JBQWdCO1lBQ2hCLG1CQUFtQjtZQUNuQixtQkFBbUI7WUFDbkIsV0FBVztZQUNYLGFBQWE7U0FDZCxDQUFDO1FBRWlCLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUlqRSw4QkFBeUIsR0FBRyxLQUFLLENBQUM7Ozs7UUFLeEIscUJB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O0lBRXpDLDRDQUE0Qjs7SUFHMUIsNENBQTZCOzs7OztJQUM3QiwwQ0FBb0M7Ozs7O0lBQ3BDLDBDQUE0Qzs7Ozs7SUFDNUMsMENBQTZCOzs7Ozs7SUFJN0IsMENBQWlEOzs7OztJQUNqRCw2Q0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBDZGtPdmVybGF5T3JpZ2luIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ29tcG9uZW50RmFjdG9yeSxcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgQ29tcG9uZW50UmVmLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHdhcm5EZXByZWNhdGlvbiwgTmdTdHlsZUludGVyZmFjZSwgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSwgTnpUU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBOelRvb2x0aXBUcmlnZ2VyIH0gZnJvbSAnLi4vbnotdG9vbHRpcC5kZWZpbml0aW9ucyc7XHJcbmltcG9ydCB7IE56VG9vbHRpcEJhc2VDb21wb25lbnRMZWdhY3kgfSBmcm9tICcuL256LXRvb2x0aXAtYmFzZS1sZWdhY3kuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpUb29sdGlwQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vbnotdG9vbHRpcC1iYXNlLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTnpUb29sdGlwQmFzZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xyXG4gIGRpcmVjdGl2ZU5hbWVUaXRsZT86IE56VFNUeXBlIHwgbnVsbDtcclxuICBzcGVjaWZpY1RpdGxlPzogTnpUU1R5cGUgfCBudWxsO1xyXG4gIGRpcmVjdGl2ZU5hbWVDb250ZW50PzogTnpUU1R5cGUgfCBudWxsO1xyXG4gIHNwZWNpZmljQ29udGVudD86IE56VFNUeXBlIHwgbnVsbDtcclxuICBzcGVjaWZpY1RyaWdnZXI/OiBOelRvb2x0aXBUcmlnZ2VyO1xyXG4gIHNwZWNpZmljUGxhY2VtZW50Pzogc3RyaW5nO1xyXG4gIHRvb2x0aXBSZWY6IENvbXBvbmVudFJlZjxOelRvb2x0aXBCYXNlQ29tcG9uZW50PjtcclxuXHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgOS4wLjAuIFRoaXMgaXMgZGVwcmVjYXRlZCBhbmQgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiA5LjAuMC5cclxuICAgKiBQbGVhc2UgdXNlIGEgbW9yZSBzcGVjaWZpYyBBUEkuIExpa2UgYG56VG9vbHRpcFRpdGxlYC5cclxuICAgKi9cclxuICBASW5wdXQoKSBuelRpdGxlOiBOelRTVHlwZSB8IG51bGw7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXByZWNhdGVkIDkuMC4wLiBUaGlzIGlzIGRlcHJlY2F0ZWQgYW5kIGdvaW5nIHRvIGJlIHJlbW92ZWQgaW4gOS4wLjAuXHJcbiAgICogUGxlYXNlIHVzZSBhIG1vcmUgc3BlY2lmaWMgQVBJLiBMaWtlIGBuelBvcG92ZXJDb250ZW50YC5cclxuICAgKi9cclxuICBASW5wdXQoKSBuekNvbnRlbnQ6IE56VFNUeXBlIHwgbnVsbDtcclxuXHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgOS4wLjAuIFRoaXMgaXMgZGVwcmVjYXRlZCBhbmQgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiA5LjAuMC5cclxuICAgKiBQbGVhc2UgdXNlIGEgbW9yZSBzcGVjaWZpYyBBUEkuIExpa2UgYG56VG9vbHRpcFRyaWdnZXJgLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIG56VHJpZ2dlcjogTnpUb29sdGlwVHJpZ2dlciA9ICdob3Zlcic7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXByZWNhdGVkIDkuMC4wLiBUaGlzIGlzIGRlcHJlY2F0ZWQgYW5kIGdvaW5nIHRvIGJlIHJlbW92ZWQgaW4gOS4wLjAuXHJcbiAgICogUGxlYXNlIHVzZSBhIG1vcmUgc3BlY2lmaWMgQVBJLiBMaWtlIGBuelRvb2x0aXBQbGFjZW1lbnRgLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIG56UGxhY2VtZW50OiBzdHJpbmcgPSAndG9wJztcclxuXHJcbiAgQElucHV0KCkgbnpNb3VzZUVudGVyRGVsYXk6IG51bWJlcjtcclxuICBASW5wdXQoKSBuek1vdXNlTGVhdmVEZWxheTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIG56T3ZlcmxheUNsYXNzTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56T3ZlcmxheVN0eWxlOiBOZ1N0eWxlSW50ZXJmYWNlO1xyXG4gIEBJbnB1dCgpIG56VmlzaWJsZTogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogRm9yIGNyZWF0ZSB0b29sdGlwIGR5bmFtaWNhbGx5LiBUaGlzIHNob3VsZCBiZSBvdmVycmlkZSBmb3IgZWFjaCBkaWZmZXJlbnQgY29tcG9uZW50LlxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBjb21wb25lbnRGYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PE56VG9vbHRpcEJhc2VDb21wb25lbnQ+O1xyXG5cclxuICAvKipcclxuICAgKiBUaGlzIHRydWUgdGl0bGUgdGhhdCB3b3VsZCBiZSB1c2VkIGluIG90aGVyIHBhcnRzIG9uIHRoaXMgY29tcG9uZW50LlxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBnZXQgdGl0bGUoKTogTnpUU1R5cGUgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLnNwZWNpZmljVGl0bGUgfHwgdGhpcy5kaXJlY3RpdmVOYW1lVGl0bGUgfHwgdGhpcy5uelRpdGxlO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGdldCBjb250ZW50KCk6IE56VFNUeXBlIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5zcGVjaWZpY0NvbnRlbnQgfHwgdGhpcy5kaXJlY3RpdmVOYW1lQ29udGVudCB8fCB0aGlzLm56Q29udGVudDtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBnZXQgcGxhY2VtZW50KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5zcGVjaWZpY1BsYWNlbWVudCB8fCB0aGlzLm56UGxhY2VtZW50O1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGdldCB0cmlnZ2VyKCk6IE56VG9vbHRpcFRyaWdnZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuc3BlY2lmaWNUcmlnZ2VyIHx8IHRoaXMubnpUcmlnZ2VyO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIG5lZWRQcm94eVByb3BlcnRpZXMgPSBbXHJcbiAgICAnbnpPdmVybGF5Q2xhc3NOYW1lJyxcclxuICAgICduek92ZXJsYXlTdHlsZScsXHJcbiAgICAnbnpNb3VzZUVudGVyRGVsYXknLFxyXG4gICAgJ256TW91c2VMZWF2ZURlbGF5JyxcclxuICAgICduelZpc2libGUnLFxyXG4gICAgJ25vQW5pbWF0aW9uJ1xyXG4gIF07XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIHRvb2x0aXA6IE56VG9vbHRpcEJhc2VDb21wb25lbnQ7XHJcblxyXG4gIGlzVG9vbHRpcENvbXBvbmVudFZpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgOS4wLjAuIFRvb2x0aXBzIHdvdWxkIGFsd2F5cyBiZSBkeW5hbWljIGluIDkuMC4wLlxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBpc0R5bmFtaWNUb29sdGlwID0gZmFsc2U7XHJcblxyXG4gIHByb3RlY3RlZCByZWFkb25seSB0cmlnZ2VyVW5saXN0ZW5lcnM6IEFycmF5PCgpID0+IHZvaWQ+ID0gW107XHJcblxyXG4gIHByb3RlY3RlZCAkZGVzdHJveSA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gIHByaXZhdGUgZGVsYXlUaW1lcj86IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByb3RlY3RlZCBob3N0VmlldzogVmlld0NvbnRhaW5lclJlZixcclxuICAgIHByb3RlY3RlZCByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICAvKipcclxuICAgICAqIEBkZXByZWNhdGVkIDkuMC4wLiBUaGlzIHdpbGwgYWx3YXlzIGJlIGBudWxsYC5cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF90b29sdGlwPzogTnpUb29sdGlwQmFzZUNvbXBvbmVudExlZ2FjeSxcclxuICAgIHByb3RlY3RlZCBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxuICApIHsgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBjb25zdCB7IG56VHJpZ2dlciwgc3BlY2lmaWNUcmlnZ2VyIH0gPSBjaGFuZ2VzO1xyXG4gICAgY29uc3QgdHJpZ2dlciA9IHNwZWNpZmljVHJpZ2dlciB8fCBuelRyaWdnZXI7XHJcblxyXG4gICAgaWYgKHRyaWdnZXIgJiYgIXRyaWdnZXIuaXNGaXJzdENoYW5nZSgpKSB7XHJcbiAgICAgIHRoaXMucmVnaXN0ZXJUcmlnZ2VycygpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnRvb2x0aXAgJiYgdGhpcy5pc0R5bmFtaWNUb29sdGlwKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlQ2hhbmdlZFByb3BlcnRpZXMoY2hhbmdlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVE9ETzogZW5hYmxlIHRoZXNlIHdhcm5pbmcgaW4gOS4wLjAuXHJcbiAgICAvLyBpZiAoY2hhbmdlcy5uelRpdGxlKSB7XHJcbiAgICAvLyAgIHdhcm5EZXByZWNhdGlvbihcclxuICAgIC8vICAgICBgJ256VGl0bGUnIG9mICduei10b29sdGlwJyBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gMTAuMC4wLiBQbGVhc2UgdXNlICduelRvb2x0aXBUaXRsZScgaW5zdGVhZC4gVGhlIHNhbWUgd2l0aCAnbnotcG9wb3ZlcicgYW5kICduei1wb3Bjb25maXJtJy5gXHJcbiAgICAvLyAgICk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gaWYgKGNoYW5nZXMubnpDb250ZW50KSB7XHJcbiAgICAvLyAgIHdhcm5EZXByZWNhdGlvbihcclxuICAgIC8vICAgICBgJ256Q29udGVudCcgb2YgJ256LXBvcG92ZXInIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAxMC4wLjAuIFBsZWFzZSB1c2UgJ256UG9wb3ZlckNvbnRlbnQnIGluc3RlYWQuYFxyXG4gICAgLy8gICApO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGlmIChjaGFuZ2VzLm56UGxhY2VtZW50KSB7XHJcbiAgICAvLyAgIHdhcm5EZXByZWNhdGlvbihcclxuICAgIC8vICAgICBgJ256UGxhY2VtZW50JyBvZiAnbnotdG9vbHRpcCcgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIDEwLjAuMC4gUGxlYXNlIHVzZSAnbnpUb29sdGlwQ29udGVudCcgaW5zdGVhZC4gVGhlIHNhbWUgd2l0aCAnbnotcG9wb3ZlcicgYW5kICduei1wb3Bjb25maXJtJy5gXHJcbiAgICAvLyAgICk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gaWYgKGNoYW5nZXMubnpUcmlnZ2VyKSB7XHJcbiAgICAvLyAgIHdhcm5EZXByZWNhdGlvbihcclxuICAgIC8vICAgICBgJ256VHJpZ2dlcicgb2YgJ256LXRvb2x0aXAnIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAxMC4wLjAuIFBsZWFzZSB1c2UgJ256VG9vbHRpcFRyaWdnZXInIGluc3RlYWQuIFRoZSBzYW1lIHdpdGggJ256LXBvcG92ZXInIGFuZCAnbnotcG9wY29uZmlybScuYFxyXG4gICAgLy8gICApO1xyXG4gICAgLy8gfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuX3Rvb2x0aXApIHtcclxuICAgICAgdGhpcy5jcmVhdGVEeW5hbWljVG9vbHRpcENvbXBvbmVudCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgd2FybkRlcHJlY2F0aW9uKFxyXG4gICAgICAgIGAnPG56LXRvb2x0aXA+PC9uei10b29sdGlwPicsICc8bnotcG9wb3Zlcj48L256LXBvcG92ZXI+JyBhbmQgJzxuei1wb3Bjb25maXJtPjwvbnotcG9wY29uZmlybT4nIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiA5LjAuMC4gUmVmZXI6IGh0dHBzOi8vbmcuYW50LmRlc2lnbi9jb21wb25lbnRzL3Rvb2x0aXAvemggLmBcclxuICAgICAgKTtcclxuICAgICAgdGhpcy50b29sdGlwID0gdGhpcy5fdG9vbHRpcDtcclxuICAgICAgdGhpcy50b29sdGlwLnNldE92ZXJsYXlPcmlnaW4odGhpcyBhcyBDZGtPdmVybGF5T3JpZ2luKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnRvb2x0aXAubnpWaXNpYmxlQ2hhbmdlXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXHJcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuJGRlc3Ryb3kpXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZSgodmlzaWJsZTogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgIHRoaXMuaXNUb29sdGlwQ29tcG9uZW50VmlzaWJsZSA9IHZpc2libGU7XHJcbiAgICAgICAgdGhpcy5uelZpc2libGVDaGFuZ2UuZW1pdCh2aXNpYmxlKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlZ2lzdGVyVHJpZ2dlcnMoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy4kZGVzdHJveS5uZXh0KCk7XHJcbiAgICB0aGlzLiRkZXN0cm95LmNvbXBsZXRlKCk7XHJcblxyXG4gICAgLy8gQ2xlYXIgdG9nZ2xpbmcgdGltZXIuIElzc3VlICMzODc1ICM0MzE3ICM0Mzg2XHJcbiAgICB0aGlzLmNsZWFyVG9nZ2xpbmdUaW1lcigpO1xyXG4gICAgdGhpcy5yZW1vdmVUcmlnZ2VyTGlzdGVuZXJzKCk7XHJcblxyXG4gICAgaWYgKHRoaXMudG9vbHRpcFJlZikge1xyXG4gICAgICB0aGlzLnRvb2x0aXBSZWYuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2hvdygpOiB2b2lkIHtcclxuICAgIHRoaXMudG9vbHRpcC5zaG93KCk7XHJcbiAgfVxyXG5cclxuICBoaWRlKCk6IHZvaWQge1xyXG4gICAgdGhpcy50b29sdGlwLmhpZGUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZvcmNlIHRoZSBjb21wb25lbnQgdG8gdXBkYXRlIGl0cyBwb3NpdGlvbi5cclxuICAgKi9cclxuICB1cGRhdGVQb3NpdGlvbigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnRvb2x0aXAgJiYgdGhpcy5pc0R5bmFtaWNUb29sdGlwKSB7XHJcbiAgICAgIHRoaXMudG9vbHRpcC51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgZHluYW1pYyB0b29sdGlwIGNvbXBvbmVudC4gVGhpcyBtZXRob2QgY2FuIGJlIG92ZXJyaWRlLlxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBjcmVhdGVEeW5hbWljVG9vbHRpcENvbXBvbmVudCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNEeW5hbWljVG9vbHRpcCA9IHRydWU7XHJcblxyXG4gICAgdGhpcy50b29sdGlwUmVmID0gdGhpcy5ob3N0Vmlldy5jcmVhdGVDb21wb25lbnQodGhpcy5jb21wb25lbnRGYWN0b3J5KTtcclxuXHJcbiAgICB0aGlzLnRvb2x0aXAgPSB0aGlzLnRvb2x0aXBSZWYuaW5zdGFuY2U7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKFxyXG4gICAgICB0aGlzLnJlbmRlcmVyLnBhcmVudE5vZGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLFxyXG4gICAgICB0aGlzLnRvb2x0aXBSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudFxyXG4gICAgKTsgLy8gUmVtb3ZlIHRoZSBjb21wb25lbnQncyBET00gYmVjYXVzZSBpdCBzaG91bGQgYmUgaW4gdGhlIG92ZXJsYXkgY29udGFpbmVyLlxyXG5cclxuICAgIC8vIElmIHRoZSB0b29sdGlwIGNvbXBvbmVudCBpcyBkeW5hbWljYWxseSBjcmVhdGVkLCB3ZSBzaG91bGQgc2V0IGl0cyBvcmlnaW4gYmVmb3JlIHVwZGF0aW5nIHByb3BlcnRpZXMgdG9cclxuICAgIC8vIHRoZSBjb21wb25lbnQuXHJcbiAgICB0aGlzLnRvb2x0aXAuc2V0T3ZlcmxheU9yaWdpbih0aGlzIGFzIENka092ZXJsYXlPcmlnaW4pO1xyXG4gICAgLy8gVXBkYXRlIGFsbCBwcm9wZXJ0aWVzIHRvIHRoZSBjb21wb25lbnQuXHJcbiAgICB0aGlzLnVwZGF0ZUNoYW5nZWRQcm9wZXJ0aWVzKHRoaXMubmVlZFByb3h5UHJvcGVydGllcyk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgcmVnaXN0ZXJUcmlnZ2VycygpOiB2b2lkIHtcclxuICAgIC8vIFdoZW4gdGhlIG1ldGhvZCBnZXRzIGludm9rZWQsIGFsbCBwcm9wZXJ0aWVzIGhhcyBiZWVuIHN5bmNlZCB0byB0aGUgZHluYW1pYyBjb21wb25lbnQuXHJcbiAgICAvLyBBZnRlciByZW1vdmluZyB0aGUgb2xkIEFQSSwgd2UgY2FuIGp1c3QgY2hlY2sgdGhlIGRpcmVjdGl2ZSdzIG93biBgbnpUcmlnZ2VyYC5cclxuICAgIGNvbnN0IGVsID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBjb25zdCB0cmlnZ2VyID0gdGhpcy5pc0R5bmFtaWNUb29sdGlwID8gdGhpcy50cmlnZ2VyIDogdGhpcy50b29sdGlwLm56VHJpZ2dlcjtcclxuXHJcbiAgICB0aGlzLnJlbW92ZVRyaWdnZXJMaXN0ZW5lcnMoKTtcclxuXHJcbiAgICBpZiAodHJpZ2dlciA9PT0gJ2NsaWNrJykge1xyXG4gICAgICB0aGlzLnRyaWdnZXJVbmxpc3RlbmVycy5wdXNoKFxyXG4gICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKGVsLCAnY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIHRoaXMuc2hvdygpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodHJpZ2dlciA9PT0gJ2hvdmVyJyB8fCB0cmlnZ2VyID09PSAnY29tYmluZWQnKSB7XHJcbiAgICAgICAgbGV0IG92ZXJsYXlFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgICAgICB0aGlzLnRyaWdnZXJVbmxpc3RlbmVycy5wdXNoKFxyXG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4oZWwsICdtb3VzZWVudGVyJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRlbGF5RW50ZXJMZWF2ZSh0cnVlLCB0cnVlLCB0aGlzLnRvb2x0aXAubnpNb3VzZUVudGVyRGVsYXkpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMudHJpZ2dlclVubGlzdGVuZXJzLnB1c2goXHJcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbihlbCwgJ21vdXNlbGVhdmUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVsYXlFbnRlckxlYXZlKHRydWUsIGZhbHNlLCB0aGlzLnRvb2x0aXAubnpNb3VzZUxlYXZlRGVsYXkpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy50b29sdGlwLm92ZXJsYXkub3ZlcmxheVJlZiAmJiAhb3ZlcmxheUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICBvdmVybGF5RWxlbWVudCA9IHRoaXMudG9vbHRpcC5vdmVybGF5Lm92ZXJsYXlSZWYub3ZlcmxheUVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyVW5saXN0ZW5lcnMucHVzaChcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKG92ZXJsYXlFbGVtZW50LCAnbW91c2VlbnRlcicsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5kZWxheUVudGVyTGVhdmUoZmFsc2UsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIHRoaXMudHJpZ2dlclVubGlzdGVuZXJzLnB1c2goXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbihvdmVybGF5RWxlbWVudCwgJ21vdXNlbGVhdmUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuZGVsYXlFbnRlckxlYXZlKGZhbHNlLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodHJpZ2dlciA9PT0gJ2ZvY3VzJyB8fCB0cmlnZ2VyID09PSAnY29tYmluZWQnKSB7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyVW5saXN0ZW5lcnMucHVzaCh0aGlzLnJlbmRlcmVyLmxpc3RlbihlbCwgJ2ZvY3VzJywgKCkgPT4gdGhpcy5zaG93KCkpKTtcclxuICAgICAgICB0aGlzLnRyaWdnZXJVbmxpc3RlbmVycy5wdXNoKHRoaXMucmVuZGVyZXIubGlzdGVuKGVsLCAnYmx1cicsICgpID0+IHRoaXMuaGlkZSgpKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAvLyBFbHNlIGRvIG5vdGhpbmcgYmVjYXVzZSB1c2VyIHdhbnRzIHRvIGNvbnRyb2wgdGhlIHZpc2liaWxpdHkgcHJvZ3JhbW1hdGljYWxseS5cclxufVxyXG5cclxuICAvKipcclxuICAgKiBTeW5jIGNoYW5nZWQgcHJvcGVydGllcyB0byB0aGUgY29tcG9uZW50IGFuZCB0cmlnZ2VyIGNoYW5nZSBkZXRlY3Rpb24gaW4gdGhhdCBjb21wb25lbnQuXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIHVwZGF0ZUNoYW5nZWRQcm9wZXJ0aWVzKHByb3BlcnRpZXNPckNoYW5nZXM6IHN0cmluZ1tdIHwgU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gIGNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5KHByb3BlcnRpZXNPckNoYW5nZXMpO1xyXG4gIGNvbnN0IGtleXNfID0gaXNBcnJheSA/IChwcm9wZXJ0aWVzT3JDaGFuZ2VzIGFzIHN0cmluZ1tdKSA6IE9iamVjdC5rZXlzKHByb3BlcnRpZXNPckNoYW5nZXMpO1xyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tYW55XHJcbiAga2V5c18uZm9yRWFjaCgocHJvcGVydHk6IGFueSkgPT4ge1xyXG4gICAgaWYgKHRoaXMubmVlZFByb3h5UHJvcGVydGllcy5pbmRleE9mKHByb3BlcnR5KSAhPT0gLTEpIHtcclxuICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudFZhbHVlKHByb3BlcnR5LCB0aGlzW3Byb3BlcnR5XSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGlmIChpc0FycmF5KSB7XHJcbiAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudFZhbHVlKCduelRpdGxlJywgdGhpcy50aXRsZSk7XHJcbiAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudFZhbHVlKCduekNvbnRlbnQnLCB0aGlzLmNvbnRlbnQpO1xyXG4gICAgdGhpcy51cGRhdGVDb21wb25lbnRWYWx1ZSgnbnpQbGFjZW1lbnQnLCB0aGlzLnBsYWNlbWVudCk7XHJcbiAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudFZhbHVlKCduelRyaWdnZXInLCB0aGlzLnRyaWdnZXIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBjID0gcHJvcGVydGllc09yQ2hhbmdlcyBhcyBTaW1wbGVDaGFuZ2VzO1xyXG4gICAgaWYgKGMuc3BlY2lmaWNUaXRsZSB8fCBjLmRpcmVjdGl2ZU5hbWVUaXRsZSB8fCBjLm56VGl0bGUpIHtcclxuICB0aGlzLnVwZGF0ZUNvbXBvbmVudFZhbHVlKCduelRpdGxlJywgdGhpcy50aXRsZSk7XHJcbn1cclxuICAgIGlmIChjLnNwZWNpZmljQ29udGVudCB8fCBjLmRpcmVjdGl2ZU5hbWVDb250ZW50IHx8IGMubnpDb250ZW50KSB7XHJcbiAgdGhpcy51cGRhdGVDb21wb25lbnRWYWx1ZSgnbnpDb250ZW50JywgdGhpcy5jb250ZW50KTtcclxufVxyXG4gICAgaWYgKGMuc3BlY2lmaWNUcmlnZ2VyIHx8IGMubnpUcmlnZ2VyKSB7XHJcbiAgdGhpcy51cGRhdGVDb21wb25lbnRWYWx1ZSgnbnpUcmlnZ2VyJywgdGhpcy50cmlnZ2VyKTtcclxufVxyXG4gICAgaWYgKGMuc3BlY2lmaWNQbGFjZW1lbnQgfHwgYy5uelBsYWNlbWVudCkge1xyXG4gIHRoaXMudXBkYXRlQ29tcG9uZW50VmFsdWUoJ256UGxhY2VtZW50JywgdGhpcy5wbGFjZW1lbnQpO1xyXG59XHJcbiAgICB9XHJcblxyXG4gIHRoaXMudG9vbHRpcC51cGRhdGVCeURpcmVjdGl2ZSgpO1xyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWFueVxyXG4gIHByaXZhdGUgdXBkYXRlQ29tcG9uZW50VmFsdWUoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJykge1xyXG4gIC8vIEB0cy1pZ25vcmVcclxuICB0aGlzLnRvb2x0aXBba2V5XSA9IHZhbHVlO1xyXG59XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRlbGF5RW50ZXJMZWF2ZShpc09yaWdpbjogYm9vbGVhbiwgaXNFbnRlcjogYm9vbGVhbiwgZGVsYXk6IG51bWJlciA9IC0xKTogdm9pZCB7XHJcbiAgaWYgKHRoaXMuZGVsYXlUaW1lcikge1xyXG4gIHRoaXMuY2xlYXJUb2dnbGluZ1RpbWVyKCk7XHJcbn0gZWxzZSBpZiAoZGVsYXkgPiAwKSB7XHJcbiAgdGhpcy5kZWxheVRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICB0aGlzLmRlbGF5VGltZXIgPSB1bmRlZmluZWQ7XHJcbiAgICBpc0VudGVyID8gdGhpcy5zaG93KCkgOiB0aGlzLmhpZGUoKTtcclxuICB9LCBkZWxheSAqIDEwMDApO1xyXG59IGVsc2Uge1xyXG4gIC8vIGBpc09yaWdpbmAgaXMgdXNlZCBkdWUgdG8gdGhlIHRvb2x0aXAgd2lsbCBub3QgaGlkZSBpbW1lZGlhdGVseVxyXG4gIC8vIChtYXkgY2F1c2VkIGJ5IHRoZSBmYWRlLW91dCBhbmltYXRpb24pLlxyXG4gIGlzRW50ZXIgJiYgaXNPcmlnaW4gPyB0aGlzLnNob3coKSA6IHRoaXMuaGlkZSgpO1xyXG59XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbW92ZVRyaWdnZXJMaXN0ZW5lcnMoKTogdm9pZCB7XHJcbiAgdGhpcy50cmlnZ2VyVW5saXN0ZW5lcnMuZm9yRWFjaChjYW5jZWwgPT4gY2FuY2VsKCkpO1xyXG4gIHRoaXMudHJpZ2dlclVubGlzdGVuZXJzLmxlbmd0aCA9IDA7XHJcbn1cclxuXHJcbiAgcHJpdmF0ZSBjbGVhclRvZ2dsaW5nVGltZXIoKTogdm9pZCB7XHJcbiAgaWYgKHRoaXMuZGVsYXlUaW1lcikge1xyXG4gIGNsZWFyVGltZW91dCh0aGlzLmRlbGF5VGltZXIpO1xyXG4gIHRoaXMuZGVsYXlUaW1lciA9IHVuZGVmaW5lZDtcclxufVxyXG4gIH1cclxufVxyXG4iXX0=