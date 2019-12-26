/**
 * @fileoverview added by tsickle
 * Generated from: base/nz-tooltip-base.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        if (trigger === 'hover') {
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
        else if (trigger === 'focus') {
            this.triggerUnlisteners.push(this.renderer.listen(el, 'focus', (/**
             * @return {?}
             */
            () => this.show())));
            this.triggerUnlisteners.push(this.renderer.listen(el, 'blur', (/**
             * @return {?}
             */
            () => this.hide())));
        }
        else if (trigger === 'click') {
            this.triggerUnlisteners.push(this.renderer.listen(el, 'click', (/**
             * @param {?} e
             * @return {?}
             */
            e => {
                e.preventDefault();
                this.show();
            })));
        } // Else do nothing because user wants to control the visibility programmatically.
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdG9vbHRpcC1iYXNlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdG9vbHRpcC8iLCJzb3VyY2VzIjpbImJhc2UvbnotdG9vbHRpcC1iYXNlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFTQSxPQUFPLEVBTUwsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBSVAsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBc0QsTUFBTSxvQkFBb0IsQ0FBQztBQUN6RyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQU1qRSxNQUFNLE9BQWdCLHNCQUFzQjs7Ozs7Ozs7O0lBeUYxQyxZQUNTLFVBQXNCLEVBQ25CLFFBQTBCLEVBQzFCLFFBQWtDLEVBQ2xDLFFBQW1CLEVBSW5CLFFBQXVDLEVBQ3ZDLFdBQW9DO1FBUnZDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDbkIsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7UUFDMUIsYUFBUSxHQUFSLFFBQVEsQ0FBMEI7UUFDbEMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUluQixhQUFRLEdBQVIsUUFBUSxDQUErQjtRQUN2QyxnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7Ozs7O1FBekV2QyxjQUFTLEdBQXFCLE9BQU8sQ0FBQzs7Ozs7UUFNdEMsZ0JBQVcsR0FBVyxLQUFLLENBQUM7UUFnQzNCLHdCQUFtQixHQUFHO1lBQzlCLG9CQUFvQjtZQUNwQixnQkFBZ0I7WUFDaEIsbUJBQW1CO1lBQ25CLG1CQUFtQjtZQUNuQixXQUFXO1lBQ1gsYUFBYTtTQUNkLENBQUM7UUFFaUIsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBSWpFLDhCQUF5QixHQUFHLEtBQUssQ0FBQzs7OztRQUt4QixxQkFBZ0IsR0FB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QUM1QywwQ0FBNkI7Ozs7OztJQUk3QiwwQ0FBaUQ7Ozs7O0lBQ2pELDZDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ2RrT3ZlcmxheU9yaWdpbiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENvbXBvbmVudEZhY3RvcnksXHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gIENvbXBvbmVudFJlZixcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVmlld0NvbnRhaW5lclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB3YXJuRGVwcmVjYXRpb24sIE5nU3R5bGVJbnRlcmZhY2UsIE56Tm9BbmltYXRpb25EaXJlY3RpdmUsIE56VFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgTnpUb29sdGlwVHJpZ2dlciB9IGZyb20gJy4uL256LXRvb2x0aXAuZGVmaW5pdGlvbnMnO1xyXG5pbXBvcnQgeyBOelRvb2x0aXBCYXNlQ29tcG9uZW50TGVnYWN5IH0gZnJvbSAnLi9uei10b29sdGlwLWJhc2UtbGVnYWN5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56VG9vbHRpcEJhc2VDb21wb25lbnQgfSBmcm9tICcuL256LXRvb2x0aXAtYmFzZS5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE56VG9vbHRpcEJhc2VEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcclxuICBkaXJlY3RpdmVOYW1lVGl0bGU/OiBOelRTVHlwZSB8IG51bGw7XHJcbiAgc3BlY2lmaWNUaXRsZT86IE56VFNUeXBlIHwgbnVsbDtcclxuICBkaXJlY3RpdmVOYW1lQ29udGVudD86IE56VFNUeXBlIHwgbnVsbDtcclxuICBzcGVjaWZpY0NvbnRlbnQ/OiBOelRTVHlwZSB8IG51bGw7XHJcbiAgc3BlY2lmaWNUcmlnZ2VyPzogTnpUb29sdGlwVHJpZ2dlcjtcclxuICBzcGVjaWZpY1BsYWNlbWVudD86IHN0cmluZztcclxuICB0b29sdGlwUmVmOiBDb21wb25lbnRSZWY8TnpUb29sdGlwQmFzZUNvbXBvbmVudD47XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXByZWNhdGVkIDkuMC4wLiBUaGlzIGlzIGRlcHJlY2F0ZWQgYW5kIGdvaW5nIHRvIGJlIHJlbW92ZWQgaW4gOS4wLjAuXHJcbiAgICogUGxlYXNlIHVzZSBhIG1vcmUgc3BlY2lmaWMgQVBJLiBMaWtlIGBuelRvb2x0aXBUaXRsZWAuXHJcbiAgICovXHJcbiAgQElucHV0KCkgbnpUaXRsZTogTnpUU1R5cGUgfCBudWxsO1xyXG5cclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCA5LjAuMC4gVGhpcyBpcyBkZXByZWNhdGVkIGFuZCBnb2luZyB0byBiZSByZW1vdmVkIGluIDkuMC4wLlxyXG4gICAqIFBsZWFzZSB1c2UgYSBtb3JlIHNwZWNpZmljIEFQSS4gTGlrZSBgbnpQb3BvdmVyQ29udGVudGAuXHJcbiAgICovXHJcbiAgQElucHV0KCkgbnpDb250ZW50OiBOelRTVHlwZSB8IG51bGw7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXByZWNhdGVkIDkuMC4wLiBUaGlzIGlzIGRlcHJlY2F0ZWQgYW5kIGdvaW5nIHRvIGJlIHJlbW92ZWQgaW4gOS4wLjAuXHJcbiAgICogUGxlYXNlIHVzZSBhIG1vcmUgc3BlY2lmaWMgQVBJLiBMaWtlIGBuelRvb2x0aXBUcmlnZ2VyYC5cclxuICAgKi9cclxuICBASW5wdXQoKSBuelRyaWdnZXI6IE56VG9vbHRpcFRyaWdnZXIgPSAnaG92ZXInO1xyXG5cclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCA5LjAuMC4gVGhpcyBpcyBkZXByZWNhdGVkIGFuZCBnb2luZyB0byBiZSByZW1vdmVkIGluIDkuMC4wLlxyXG4gICAqIFBsZWFzZSB1c2UgYSBtb3JlIHNwZWNpZmljIEFQSS4gTGlrZSBgbnpUb29sdGlwUGxhY2VtZW50YC5cclxuICAgKi9cclxuICBASW5wdXQoKSBuelBsYWNlbWVudDogc3RyaW5nID0gJ3RvcCc7XHJcblxyXG4gIEBJbnB1dCgpIG56TW91c2VFbnRlckRlbGF5OiBudW1iZXI7XHJcbiAgQElucHV0KCkgbnpNb3VzZUxlYXZlRGVsYXk6IG51bWJlcjtcclxuICBASW5wdXQoKSBuek92ZXJsYXlDbGFzc05hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBuek92ZXJsYXlTdHlsZTogTmdTdHlsZUludGVyZmFjZTtcclxuICBASW5wdXQoKSBuelZpc2libGU6IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIEZvciBjcmVhdGUgdG9vbHRpcCBkeW5hbWljYWxseS4gVGhpcyBzaG91bGQgYmUgb3ZlcnJpZGUgZm9yIGVhY2ggZGlmZmVyZW50IGNvbXBvbmVudC5cclxuICAgKi9cclxuICBwcm90ZWN0ZWQgY29tcG9uZW50RmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxOelRvb2x0aXBCYXNlQ29tcG9uZW50PjtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyB0cnVlIHRpdGxlIHRoYXQgd291bGQgYmUgdXNlZCBpbiBvdGhlciBwYXJ0cyBvbiB0aGlzIGNvbXBvbmVudC5cclxuICAgKi9cclxuICBwcm90ZWN0ZWQgZ2V0IHRpdGxlKCk6IE56VFNUeXBlIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5zcGVjaWZpY1RpdGxlIHx8IHRoaXMuZGlyZWN0aXZlTmFtZVRpdGxlIHx8IHRoaXMubnpUaXRsZTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBnZXQgY29udGVudCgpOiBOelRTVHlwZSB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuc3BlY2lmaWNDb250ZW50IHx8IHRoaXMuZGlyZWN0aXZlTmFtZUNvbnRlbnQgfHwgdGhpcy5uekNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0IHBsYWNlbWVudCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuc3BlY2lmaWNQbGFjZW1lbnQgfHwgdGhpcy5uelBsYWNlbWVudDtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBnZXQgdHJpZ2dlcigpOiBOelRvb2x0aXBUcmlnZ2VyIHtcclxuICAgIHJldHVybiB0aGlzLnNwZWNpZmljVHJpZ2dlciB8fCB0aGlzLm56VHJpZ2dlcjtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBuZWVkUHJveHlQcm9wZXJ0aWVzID0gW1xyXG4gICAgJ256T3ZlcmxheUNsYXNzTmFtZScsXHJcbiAgICAnbnpPdmVybGF5U3R5bGUnLFxyXG4gICAgJ256TW91c2VFbnRlckRlbGF5JyxcclxuICAgICduek1vdXNlTGVhdmVEZWxheScsXHJcbiAgICAnbnpWaXNpYmxlJyxcclxuICAgICdub0FuaW1hdGlvbidcclxuICBdO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpWaXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICB0b29sdGlwOiBOelRvb2x0aXBCYXNlQ29tcG9uZW50O1xyXG5cclxuICBpc1Rvb2x0aXBDb21wb25lbnRWaXNpYmxlID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXByZWNhdGVkIDkuMC4wLiBUb29sdGlwcyB3b3VsZCBhbHdheXMgYmUgZHluYW1pYyBpbiA5LjAuMC5cclxuICAgKi9cclxuICBwcm90ZWN0ZWQgaXNEeW5hbWljVG9vbHRpcCA9IGZhbHNlO1xyXG5cclxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgdHJpZ2dlclVubGlzdGVuZXJzOiBBcnJheTwoKSA9PiB2b2lkPiA9IFtdO1xyXG5cclxuICBwcm90ZWN0ZWQgJGRlc3Ryb3kgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cclxuICBwcml2YXRlIGRlbGF5VGltZXI/OiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcm90ZWN0ZWQgaG9zdFZpZXc6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBwcm90ZWN0ZWQgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVwcmVjYXRlZCA5LjAuMC4gVGhpcyB3aWxsIGFsd2F5cyBiZSBgbnVsbGAuXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfdG9vbHRpcD86IE56VG9vbHRpcEJhc2VDb21wb25lbnRMZWdhY3ksXHJcbiAgICBwcm90ZWN0ZWQgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBjb25zdCB7IG56VHJpZ2dlciwgc3BlY2lmaWNUcmlnZ2VyIH0gPSBjaGFuZ2VzO1xyXG4gICAgY29uc3QgdHJpZ2dlciA9IHNwZWNpZmljVHJpZ2dlciB8fCBuelRyaWdnZXI7XHJcblxyXG4gICAgaWYgKHRyaWdnZXIgJiYgIXRyaWdnZXIuaXNGaXJzdENoYW5nZSgpKSB7XHJcbiAgICAgIHRoaXMucmVnaXN0ZXJUcmlnZ2VycygpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnRvb2x0aXAgJiYgdGhpcy5pc0R5bmFtaWNUb29sdGlwKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlQ2hhbmdlZFByb3BlcnRpZXMoY2hhbmdlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVE9ETzogZW5hYmxlIHRoZXNlIHdhcm5pbmcgaW4gOS4wLjAuXHJcbiAgICAvLyBpZiAoY2hhbmdlcy5uelRpdGxlKSB7XHJcbiAgICAvLyAgIHdhcm5EZXByZWNhdGlvbihcclxuICAgIC8vICAgICBgJ256VGl0bGUnIG9mICduei10b29sdGlwJyBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gMTAuMC4wLiBQbGVhc2UgdXNlICduelRvb2x0aXBUaXRsZScgaW5zdGVhZC4gVGhlIHNhbWUgd2l0aCAnbnotcG9wb3ZlcicgYW5kICduei1wb3Bjb25maXJtJy5gXHJcbiAgICAvLyAgICk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gaWYgKGNoYW5nZXMubnpDb250ZW50KSB7XHJcbiAgICAvLyAgIHdhcm5EZXByZWNhdGlvbihcclxuICAgIC8vICAgICBgJ256Q29udGVudCcgb2YgJ256LXBvcG92ZXInIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAxMC4wLjAuIFBsZWFzZSB1c2UgJ256UG9wb3ZlckNvbnRlbnQnIGluc3RlYWQuYFxyXG4gICAgLy8gICApO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGlmIChjaGFuZ2VzLm56UGxhY2VtZW50KSB7XHJcbiAgICAvLyAgIHdhcm5EZXByZWNhdGlvbihcclxuICAgIC8vICAgICBgJ256UGxhY2VtZW50JyBvZiAnbnotdG9vbHRpcCcgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIDEwLjAuMC4gUGxlYXNlIHVzZSAnbnpUb29sdGlwQ29udGVudCcgaW5zdGVhZC4gVGhlIHNhbWUgd2l0aCAnbnotcG9wb3ZlcicgYW5kICduei1wb3Bjb25maXJtJy5gXHJcbiAgICAvLyAgICk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gaWYgKGNoYW5nZXMubnpUcmlnZ2VyKSB7XHJcbiAgICAvLyAgIHdhcm5EZXByZWNhdGlvbihcclxuICAgIC8vICAgICBgJ256VHJpZ2dlcicgb2YgJ256LXRvb2x0aXAnIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAxMC4wLjAuIFBsZWFzZSB1c2UgJ256VG9vbHRpcFRyaWdnZXInIGluc3RlYWQuIFRoZSBzYW1lIHdpdGggJ256LXBvcG92ZXInIGFuZCAnbnotcG9wY29uZmlybScuYFxyXG4gICAgLy8gICApO1xyXG4gICAgLy8gfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuX3Rvb2x0aXApIHtcclxuICAgICAgdGhpcy5jcmVhdGVEeW5hbWljVG9vbHRpcENvbXBvbmVudCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgd2FybkRlcHJlY2F0aW9uKFxyXG4gICAgICAgIGAnPG56LXRvb2x0aXA+PC9uei10b29sdGlwPicsICc8bnotcG9wb3Zlcj48L256LXBvcG92ZXI+JyBhbmQgJzxuei1wb3Bjb25maXJtPjwvbnotcG9wY29uZmlybT4nIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiA5LjAuMC4gUmVmZXI6IGh0dHBzOi8vbmcuYW50LmRlc2lnbi9jb21wb25lbnRzL3Rvb2x0aXAvemggLmBcclxuICAgICAgKTtcclxuICAgICAgdGhpcy50b29sdGlwID0gdGhpcy5fdG9vbHRpcDtcclxuICAgICAgdGhpcy50b29sdGlwLnNldE92ZXJsYXlPcmlnaW4odGhpcyBhcyBDZGtPdmVybGF5T3JpZ2luKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnRvb2x0aXAubnpWaXNpYmxlQ2hhbmdlXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXHJcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuJGRlc3Ryb3kpXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZSgodmlzaWJsZTogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgIHRoaXMuaXNUb29sdGlwQ29tcG9uZW50VmlzaWJsZSA9IHZpc2libGU7XHJcbiAgICAgICAgdGhpcy5uelZpc2libGVDaGFuZ2UuZW1pdCh2aXNpYmxlKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlZ2lzdGVyVHJpZ2dlcnMoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy4kZGVzdHJveS5uZXh0KCk7XHJcbiAgICB0aGlzLiRkZXN0cm95LmNvbXBsZXRlKCk7XHJcblxyXG4gICAgLy8gQ2xlYXIgdG9nZ2xpbmcgdGltZXIuIElzc3VlICMzODc1ICM0MzE3ICM0Mzg2XHJcbiAgICB0aGlzLmNsZWFyVG9nZ2xpbmdUaW1lcigpO1xyXG4gICAgdGhpcy5yZW1vdmVUcmlnZ2VyTGlzdGVuZXJzKCk7XHJcblxyXG4gICAgaWYgKHRoaXMudG9vbHRpcFJlZikge1xyXG4gICAgICB0aGlzLnRvb2x0aXBSZWYuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2hvdygpOiB2b2lkIHtcclxuICAgIHRoaXMudG9vbHRpcC5zaG93KCk7XHJcbiAgfVxyXG5cclxuICBoaWRlKCk6IHZvaWQge1xyXG4gICAgdGhpcy50b29sdGlwLmhpZGUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZvcmNlIHRoZSBjb21wb25lbnQgdG8gdXBkYXRlIGl0cyBwb3NpdGlvbi5cclxuICAgKi9cclxuICB1cGRhdGVQb3NpdGlvbigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnRvb2x0aXAgJiYgdGhpcy5pc0R5bmFtaWNUb29sdGlwKSB7XHJcbiAgICAgIHRoaXMudG9vbHRpcC51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgZHluYW1pYyB0b29sdGlwIGNvbXBvbmVudC4gVGhpcyBtZXRob2QgY2FuIGJlIG92ZXJyaWRlLlxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBjcmVhdGVEeW5hbWljVG9vbHRpcENvbXBvbmVudCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNEeW5hbWljVG9vbHRpcCA9IHRydWU7XHJcblxyXG4gICAgdGhpcy50b29sdGlwUmVmID0gdGhpcy5ob3N0Vmlldy5jcmVhdGVDb21wb25lbnQodGhpcy5jb21wb25lbnRGYWN0b3J5KTtcclxuXHJcbiAgICB0aGlzLnRvb2x0aXAgPSB0aGlzLnRvb2x0aXBSZWYuaW5zdGFuY2U7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKFxyXG4gICAgICB0aGlzLnJlbmRlcmVyLnBhcmVudE5vZGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLFxyXG4gICAgICB0aGlzLnRvb2x0aXBSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudFxyXG4gICAgKTsgLy8gUmVtb3ZlIHRoZSBjb21wb25lbnQncyBET00gYmVjYXVzZSBpdCBzaG91bGQgYmUgaW4gdGhlIG92ZXJsYXkgY29udGFpbmVyLlxyXG5cclxuICAgIC8vIElmIHRoZSB0b29sdGlwIGNvbXBvbmVudCBpcyBkeW5hbWljYWxseSBjcmVhdGVkLCB3ZSBzaG91bGQgc2V0IGl0cyBvcmlnaW4gYmVmb3JlIHVwZGF0aW5nIHByb3BlcnRpZXMgdG9cclxuICAgIC8vIHRoZSBjb21wb25lbnQuXHJcbiAgICB0aGlzLnRvb2x0aXAuc2V0T3ZlcmxheU9yaWdpbih0aGlzIGFzIENka092ZXJsYXlPcmlnaW4pO1xyXG4gICAgLy8gVXBkYXRlIGFsbCBwcm9wZXJ0aWVzIHRvIHRoZSBjb21wb25lbnQuXHJcbiAgICB0aGlzLnVwZGF0ZUNoYW5nZWRQcm9wZXJ0aWVzKHRoaXMubmVlZFByb3h5UHJvcGVydGllcyk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgcmVnaXN0ZXJUcmlnZ2VycygpOiB2b2lkIHtcclxuICAgIC8vIFdoZW4gdGhlIG1ldGhvZCBnZXRzIGludm9rZWQsIGFsbCBwcm9wZXJ0aWVzIGhhcyBiZWVuIHN5bmNlZCB0byB0aGUgZHluYW1pYyBjb21wb25lbnQuXHJcbiAgICAvLyBBZnRlciByZW1vdmluZyB0aGUgb2xkIEFQSSwgd2UgY2FuIGp1c3QgY2hlY2sgdGhlIGRpcmVjdGl2ZSdzIG93biBgbnpUcmlnZ2VyYC5cclxuICAgIGNvbnN0IGVsID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBjb25zdCB0cmlnZ2VyID0gdGhpcy5pc0R5bmFtaWNUb29sdGlwID8gdGhpcy50cmlnZ2VyIDogdGhpcy50b29sdGlwLm56VHJpZ2dlcjtcclxuXHJcbiAgICB0aGlzLnJlbW92ZVRyaWdnZXJMaXN0ZW5lcnMoKTtcclxuXHJcbiAgICBpZiAodHJpZ2dlciA9PT0gJ2hvdmVyJykge1xyXG4gICAgICBsZXQgb3ZlcmxheUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgICB0aGlzLnRyaWdnZXJVbmxpc3RlbmVycy5wdXNoKFxyXG4gICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKGVsLCAnbW91c2VlbnRlcicsICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZGVsYXlFbnRlckxlYXZlKHRydWUsIHRydWUsIHRoaXMudG9vbHRpcC5uek1vdXNlRW50ZXJEZWxheSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgICAgdGhpcy50cmlnZ2VyVW5saXN0ZW5lcnMucHVzaChcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbihlbCwgJ21vdXNlbGVhdmUnLCAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmRlbGF5RW50ZXJMZWF2ZSh0cnVlLCBmYWxzZSwgdGhpcy50b29sdGlwLm56TW91c2VMZWF2ZURlbGF5KTtcclxuICAgICAgICAgIGlmICh0aGlzLnRvb2x0aXAub3ZlcmxheS5vdmVybGF5UmVmICYmICFvdmVybGF5RWxlbWVudCkge1xyXG4gICAgICAgICAgICBvdmVybGF5RWxlbWVudCA9IHRoaXMudG9vbHRpcC5vdmVybGF5Lm92ZXJsYXlSZWYub3ZlcmxheUVsZW1lbnQ7XHJcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlclVubGlzdGVuZXJzLnB1c2goXHJcbiAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4ob3ZlcmxheUVsZW1lbnQsICdtb3VzZWVudGVyJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWxheUVudGVyTGVhdmUoZmFsc2UsIHRydWUpO1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlclVubGlzdGVuZXJzLnB1c2goXHJcbiAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4ob3ZlcmxheUVsZW1lbnQsICdtb3VzZWxlYXZlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWxheUVudGVyTGVhdmUoZmFsc2UsIGZhbHNlKTtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2UgaWYgKHRyaWdnZXIgPT09ICdmb2N1cycpIHtcclxuICAgICAgdGhpcy50cmlnZ2VyVW5saXN0ZW5lcnMucHVzaCh0aGlzLnJlbmRlcmVyLmxpc3RlbihlbCwgJ2ZvY3VzJywgKCkgPT4gdGhpcy5zaG93KCkpKTtcclxuICAgICAgdGhpcy50cmlnZ2VyVW5saXN0ZW5lcnMucHVzaCh0aGlzLnJlbmRlcmVyLmxpc3RlbihlbCwgJ2JsdXInLCAoKSA9PiB0aGlzLmhpZGUoKSkpO1xyXG4gICAgfSBlbHNlIGlmICh0cmlnZ2VyID09PSAnY2xpY2snKSB7XHJcbiAgICAgIHRoaXMudHJpZ2dlclVubGlzdGVuZXJzLnB1c2goXHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4oZWwsICdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH0gLy8gRWxzZSBkbyBub3RoaW5nIGJlY2F1c2UgdXNlciB3YW50cyB0byBjb250cm9sIHRoZSB2aXNpYmlsaXR5IHByb2dyYW1tYXRpY2FsbHkuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTeW5jIGNoYW5nZWQgcHJvcGVydGllcyB0byB0aGUgY29tcG9uZW50IGFuZCB0cmlnZ2VyIGNoYW5nZSBkZXRlY3Rpb24gaW4gdGhhdCBjb21wb25lbnQuXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIHVwZGF0ZUNoYW5nZWRQcm9wZXJ0aWVzKHByb3BlcnRpZXNPckNoYW5nZXM6IHN0cmluZ1tdIHwgU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkocHJvcGVydGllc09yQ2hhbmdlcyk7XHJcbiAgICBjb25zdCBrZXlzXyA9IGlzQXJyYXkgPyAocHJvcGVydGllc09yQ2hhbmdlcyBhcyBzdHJpbmdbXSkgOiBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzT3JDaGFuZ2VzKTtcclxuXHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tYW55XHJcbiAgICBrZXlzXy5mb3JFYWNoKChwcm9wZXJ0eTogYW55KSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLm5lZWRQcm94eVByb3BlcnRpZXMuaW5kZXhPZihwcm9wZXJ0eSkgIT09IC0xKSB7XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIHRoaXMudXBkYXRlQ29tcG9uZW50VmFsdWUocHJvcGVydHksIHRoaXNbcHJvcGVydHldKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGlzQXJyYXkpIHtcclxuICAgICAgdGhpcy51cGRhdGVDb21wb25lbnRWYWx1ZSgnbnpUaXRsZScsIHRoaXMudGl0bGUpO1xyXG4gICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudFZhbHVlKCduekNvbnRlbnQnLCB0aGlzLmNvbnRlbnQpO1xyXG4gICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudFZhbHVlKCduelBsYWNlbWVudCcsIHRoaXMucGxhY2VtZW50KTtcclxuICAgICAgdGhpcy51cGRhdGVDb21wb25lbnRWYWx1ZSgnbnpUcmlnZ2VyJywgdGhpcy50cmlnZ2VyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGMgPSBwcm9wZXJ0aWVzT3JDaGFuZ2VzIGFzIFNpbXBsZUNoYW5nZXM7XHJcbiAgICAgIGlmIChjLnNwZWNpZmljVGl0bGUgfHwgYy5kaXJlY3RpdmVOYW1lVGl0bGUgfHwgYy5uelRpdGxlKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDb21wb25lbnRWYWx1ZSgnbnpUaXRsZScsIHRoaXMudGl0bGUpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjLnNwZWNpZmljQ29udGVudCB8fCBjLmRpcmVjdGl2ZU5hbWVDb250ZW50IHx8IGMubnpDb250ZW50KSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDb21wb25lbnRWYWx1ZSgnbnpDb250ZW50JywgdGhpcy5jb250ZW50KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoYy5zcGVjaWZpY1RyaWdnZXIgfHwgYy5uelRyaWdnZXIpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudFZhbHVlKCduelRyaWdnZXInLCB0aGlzLnRyaWdnZXIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjLnNwZWNpZmljUGxhY2VtZW50IHx8IGMubnpQbGFjZW1lbnQpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudFZhbHVlKCduelBsYWNlbWVudCcsIHRoaXMucGxhY2VtZW50KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudG9vbHRpcC51cGRhdGVCeURpcmVjdGl2ZSgpO1xyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWFueVxyXG4gIHByaXZhdGUgdXBkYXRlQ29tcG9uZW50VmFsdWUoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgdGhpcy50b29sdGlwW2tleV0gPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGVsYXlFbnRlckxlYXZlKGlzT3JpZ2luOiBib29sZWFuLCBpc0VudGVyOiBib29sZWFuLCBkZWxheTogbnVtYmVyID0gLTEpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRlbGF5VGltZXIpIHtcclxuICAgICAgdGhpcy5jbGVhclRvZ2dsaW5nVGltZXIoKTtcclxuICAgIH0gZWxzZSBpZiAoZGVsYXkgPiAwKSB7XHJcbiAgICAgIHRoaXMuZGVsYXlUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZGVsYXlUaW1lciA9IHVuZGVmaW5lZDtcclxuICAgICAgICBpc0VudGVyID8gdGhpcy5zaG93KCkgOiB0aGlzLmhpZGUoKTtcclxuICAgICAgfSwgZGVsYXkgKiAxMDAwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGBpc09yaWdpbmAgaXMgdXNlZCBkdWUgdG8gdGhlIHRvb2x0aXAgd2lsbCBub3QgaGlkZSBpbW1lZGlhdGVseVxyXG4gICAgICAvLyAobWF5IGNhdXNlZCBieSB0aGUgZmFkZS1vdXQgYW5pbWF0aW9uKS5cclxuICAgICAgaXNFbnRlciAmJiBpc09yaWdpbiA/IHRoaXMuc2hvdygpIDogdGhpcy5oaWRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbW92ZVRyaWdnZXJMaXN0ZW5lcnMoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRyaWdnZXJVbmxpc3RlbmVycy5mb3JFYWNoKGNhbmNlbCA9PiBjYW5jZWwoKSk7XHJcbiAgICB0aGlzLnRyaWdnZXJVbmxpc3RlbmVycy5sZW5ndGggPSAwO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGVhclRvZ2dsaW5nVGltZXIoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kZWxheVRpbWVyKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRlbGF5VGltZXIpO1xyXG4gICAgICB0aGlzLmRlbGF5VGltZXIgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==