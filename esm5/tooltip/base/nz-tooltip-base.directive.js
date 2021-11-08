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
import * as ɵngcc0 from '@angular/core';
var NzTooltipBaseDirective = /** @class */ (function () {
    function NzTooltipBaseDirective(elementRef, hostView, resolver, renderer, _tooltip, noAnimation) {
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
    Object.defineProperty(NzTooltipBaseDirective.prototype, "title", {
        /**
         * This true title that would be used in other parts on this component.
         */
        get: /**
         * This true title that would be used in other parts on this component.
         * @protected
         * @return {?}
         */
        function () {
            return this.specificTitle || this.directiveNameTitle || this.nzTitle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTooltipBaseDirective.prototype, "content", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            return this.specificContent || this.directiveNameContent || this.nzContent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTooltipBaseDirective.prototype, "placement", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            return this.specificPlacement || this.nzPlacement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTooltipBaseDirective.prototype, "trigger", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            return this.specificTrigger || this.nzTrigger;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    NzTooltipBaseDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzTrigger = changes.nzTrigger, specificTrigger = changes.specificTrigger;
        /** @type {?} */
        var trigger = specificTrigger || nzTrigger;
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
    };
    /**
     * @return {?}
     */
    NzTooltipBaseDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._tooltip) {
            this.createDynamicTooltipComponent();
        }
        else {
            warnDeprecation("'<nz-tooltip></nz-tooltip>', '<nz-popover></nz-popover>' and '<nz-popconfirm></nz-popconfirm>' is deprecated and will be removed in 9.0.0. Refer: https://ng.ant.design/components/tooltip/zh .");
            this.tooltip = this._tooltip;
            this.tooltip.setOverlayOrigin((/** @type {?} */ (this)));
        }
        this.tooltip.nzVisibleChange
            .pipe(distinctUntilChanged(), takeUntil(this.$destroy))
            .subscribe((/**
         * @param {?} visible
         * @return {?}
         */
        function (visible) {
            _this.isTooltipComponentVisible = visible;
            _this.nzVisibleChange.emit(visible);
        }));
    };
    /**
     * @return {?}
     */
    NzTooltipBaseDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.registerTriggers();
    };
    /**
     * @return {?}
     */
    NzTooltipBaseDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.$destroy.next();
        this.$destroy.complete();
        // Clear toggling timer. Issue #3875 #4317 #4386
        this.clearTogglingTimer();
        this.removeTriggerListeners();
        if (this.tooltipRef) {
            this.tooltipRef.destroy();
        }
    };
    /**
     * @return {?}
     */
    NzTooltipBaseDirective.prototype.show = /**
     * @return {?}
     */
    function () {
        this.tooltip.show();
    };
    /**
     * @return {?}
     */
    NzTooltipBaseDirective.prototype.hide = /**
     * @return {?}
     */
    function () {
        this.tooltip.hide();
    };
    /**
     * Force the component to update its position.
     */
    /**
     * Force the component to update its position.
     * @return {?}
     */
    NzTooltipBaseDirective.prototype.updatePosition = /**
     * Force the component to update its position.
     * @return {?}
     */
    function () {
        if (this.tooltip && this.isDynamicTooltip) {
            this.tooltip.updatePosition();
        }
    };
    /**
     * Create a dynamic tooltip component. This method can be override.
     */
    /**
     * Create a dynamic tooltip component. This method can be override.
     * @protected
     * @return {?}
     */
    NzTooltipBaseDirective.prototype.createDynamicTooltipComponent = /**
     * Create a dynamic tooltip component. This method can be override.
     * @protected
     * @return {?}
     */
    function () {
        this.isDynamicTooltip = true;
        this.tooltipRef = this.hostView.createComponent(this.componentFactory);
        this.tooltip = this.tooltipRef.instance;
        this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.tooltipRef.location.nativeElement); // Remove the component's DOM because it should be in the overlay container.
        // If the tooltip component is dynamically created, we should set its origin before updating properties to
        // the component.
        this.tooltip.setOverlayOrigin((/** @type {?} */ (this)));
        // Update all properties to the component.
        this.updateChangedProperties(this.needProxyProperties);
    };
    /**
     * @protected
     * @return {?}
     */
    NzTooltipBaseDirective.prototype.registerTriggers = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        // When the method gets invoked, all properties has been synced to the dynamic component.
        // After removing the old API, we can just check the directive's own `nzTrigger`.
        /** @type {?} */
        var el = this.elementRef.nativeElement;
        /** @type {?} */
        var trigger = this.isDynamicTooltip ? this.trigger : this.tooltip.nzTrigger;
        this.removeTriggerListeners();
        if (trigger === 'click') {
            this.triggerUnlisteners.push(this.renderer.listen(el, 'click', (/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                e.preventDefault();
                _this.show();
            })));
        }
        else {
            if (trigger === 'hover' || trigger === 'combined') {
                /** @type {?} */
                var overlayElement_1;
                this.triggerUnlisteners.push(this.renderer.listen(el, 'mouseenter', (/**
                 * @return {?}
                 */
                function () {
                    _this.delayEnterLeave(true, true, _this.tooltip.nzMouseEnterDelay);
                })));
                this.triggerUnlisteners.push(this.renderer.listen(el, 'mouseleave', (/**
                 * @return {?}
                 */
                function () {
                    _this.delayEnterLeave(true, false, _this.tooltip.nzMouseLeaveDelay);
                    if (_this.tooltip.overlay.overlayRef && !overlayElement_1) {
                        overlayElement_1 = _this.tooltip.overlay.overlayRef.overlayElement;
                        _this.triggerUnlisteners.push(_this.renderer.listen(overlayElement_1, 'mouseenter', (/**
                         * @return {?}
                         */
                        function () {
                            _this.delayEnterLeave(false, true);
                        })));
                        _this.triggerUnlisteners.push(_this.renderer.listen(overlayElement_1, 'mouseleave', (/**
                         * @return {?}
                         */
                        function () {
                            _this.delayEnterLeave(false, false);
                        })));
                    }
                })));
            }
            if (trigger === 'focus' || trigger === 'combined') {
                this.triggerUnlisteners.push(this.renderer.listen(el, 'focus', (/**
                 * @return {?}
                 */
                function () { return _this.show(); })));
                this.triggerUnlisteners.push(this.renderer.listen(el, 'blur', (/**
                 * @return {?}
                 */
                function () { return _this.hide(); })));
            }
        }
        // Else do nothing because user wants to control the visibility programmatically.
    };
    /**
     * Sync changed properties to the component and trigger change detection in that component.
     */
    /**
     * Sync changed properties to the component and trigger change detection in that component.
     * @protected
     * @param {?} propertiesOrChanges
     * @return {?}
     */
    NzTooltipBaseDirective.prototype.updateChangedProperties = /**
     * Sync changed properties to the component and trigger change detection in that component.
     * @protected
     * @param {?} propertiesOrChanges
     * @return {?}
     */
    function (propertiesOrChanges) {
        var _this = this;
        /** @type {?} */
        var isArray = Array.isArray(propertiesOrChanges);
        /** @type {?} */
        var keys_ = isArray ? ((/** @type {?} */ (propertiesOrChanges))) : Object.keys(propertiesOrChanges);
        // tslint:disable-next-line no-any
        keys_.forEach((/**
         * @param {?} property
         * @return {?}
         */
        function (property) {
            if (_this.needProxyProperties.indexOf(property) !== -1) {
                // @ts-ignore
                _this.updateComponentValue(property, _this[property]);
            }
        }));
        if (isArray) {
            this.updateComponentValue('nzTitle', this.title);
            this.updateComponentValue('nzContent', this.content);
            this.updateComponentValue('nzPlacement', this.placement);
            this.updateComponentValue('nzTrigger', this.trigger);
            this.updateComponentValue('nzShowPopoverCloseButton', this.showPopoverCloseButton);
            this.updateComponentValue('nzPopoverCloseButtonLabel', this.popoverCloseButtonLabel);
            this.updateComponentValue('nzPopoverForceRestoreFocus', this.popoverForceRestoreFocus);
        }
        else {
            /** @type {?} */
            var c = (/** @type {?} */ (propertiesOrChanges));
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
            if (c.popoverForceRestoreFocus) {
                this.updateComponentValue('nzPopoverForceRestoreFocus', this.popoverForceRestoreFocus);
            }
        }
        this.tooltip.updateByDirective();
    };
    // tslint:disable-next-line no-any
    // tslint:disable-next-line no-any
    /**
     * @private
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    NzTooltipBaseDirective.prototype.updateComponentValue = 
    // tslint:disable-next-line no-any
    /**
     * @private
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        if (typeof value !== 'undefined') {
            // @ts-ignore
            this.tooltip[key] = value;
        }
    };
    /**
     * @private
     * @param {?} isOrigin
     * @param {?} isEnter
     * @param {?=} delay
     * @return {?}
     */
    NzTooltipBaseDirective.prototype.delayEnterLeave = /**
     * @private
     * @param {?} isOrigin
     * @param {?} isEnter
     * @param {?=} delay
     * @return {?}
     */
    function (isOrigin, isEnter, delay) {
        var _this = this;
        if (delay === void 0) { delay = -1; }
        if (this.delayTimer) {
            this.clearTogglingTimer();
        }
        else if (delay > 0) {
            this.delayTimer = setTimeout((/**
             * @return {?}
             */
            function () {
                _this.delayTimer = undefined;
                isEnter ? _this.show() : _this.hide();
            }), delay * 1000);
        }
        else {
            // `isOrigin` is used due to the tooltip will not hide immediately
            // (may caused by the fade-out animation).
            isEnter && isOrigin ? this.show() : this.hide();
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzTooltipBaseDirective.prototype.removeTriggerListeners = /**
     * @private
     * @return {?}
     */
    function () {
        this.triggerUnlisteners.forEach((/**
         * @param {?} cancel
         * @return {?}
         */
        function (cancel) { return cancel(); }));
        this.triggerUnlisteners.length = 0;
    };
    /**
     * @private
     * @return {?}
     */
    NzTooltipBaseDirective.prototype.clearTogglingTimer = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.delayTimer) {
            clearTimeout(this.delayTimer);
            this.delayTimer = undefined;
        }
    };
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
        nzPopoverForceRestoreFocus: [{ type: Input }],
        nzVisibleChange: [{ type: Output }]
    };
NzTooltipBaseDirective.ɵfac = function NzTooltipBaseDirective_Factory(t) { ɵngcc0.ɵɵinvalidFactory(); };
NzTooltipBaseDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzTooltipBaseDirective, inputs: { nzTrigger: "nzTrigger", nzPlacement: "nzPlacement", nzTitle: "nzTitle", nzContent: "nzContent", nzMouseEnterDelay: "nzMouseEnterDelay", nzMouseLeaveDelay: "nzMouseLeaveDelay", nzOverlayClassName: "nzOverlayClassName", nzOverlayStyle: "nzOverlayStyle", nzVisible: "nzVisible", nzShowPopoverCloseButton: "nzShowPopoverCloseButton", nzPopoverCloseButtonLabel: "nzPopoverCloseButtonLabel", nzPopoverForceRestoreFocus: "nzPopoverForceRestoreFocus" }, outputs: { nzVisibleChange: "nzVisibleChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature] });

    return NzTooltipBaseDirective;
}());
export { NzTooltipBaseDirective };
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
    /** @type {?} */
    NzTooltipBaseDirective.prototype.popoverForceRestoreFocus;
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
    /** @type {?} */
    NzTooltipBaseDirective.prototype.nzPopoverForceRestoreFocus;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdG9vbHRpcC1iYXNlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXMiOlsibmc6L25nLXpvcnJvLWFudGQvdG9vbHRpcC9iYXNlL256LXRvb2x0aXAtYmFzZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBLE9BQU8sRUFNTCxZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFJUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFzRCxNQUFNLG9CQUFvQixDQUFDO0FBQ3pHLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7OztBQU1qRTtJQStGRSxnQ0FDUyxVQUFzQixFQUNuQixRQUEwQixFQUMxQixRQUFrQyxFQUNsQyxRQUFtQixFQUluQixRQUF1QyxFQUN2QyxXQUFvQztRQVJ2QyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ25CLGFBQVEsR0FBUixRQUFRLENBQWtCO1FBQzFCLGFBQVEsR0FBUixRQUFRLENBQTBCO1FBQ2xDLGFBQVEsR0FBUixRQUFRLENBQVc7UUFJbkIsYUFBUSxHQUFSLFFBQVEsQ0FBK0I7UUFDdkMsZ0JBQVcsR0FBWCxXQUFXLENBQXlCOzs7OztRQTVFdkMsY0FBUyxHQUFxQixPQUFPLENBQUM7Ozs7O1FBTXRDLGdCQUFXLEdBQVcsS0FBSyxDQUFDO1FBbUMzQix3QkFBbUIsR0FBRztZQUM5QixvQkFBb0I7WUFDcEIsZ0JBQWdCO1lBQ2hCLG1CQUFtQjtZQUNuQixtQkFBbUI7WUFDbkIsV0FBVztZQUNYLGFBQWE7U0FDZCxDQUFDO1FBRWlCLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUlqRSw4QkFBeUIsR0FBRyxLQUFLLENBQUM7Ozs7UUFLeEIscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBRWhCLHVCQUFrQixHQUFzQixFQUFF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Q0FBNEI7O0lBRzFCLDRDQUE2Qjs7Ozs7SUFDN0IsMENBQW9DOzs7OztJQUNwQywwQ0FBNEM7Ozs7O0lBQzVDLDBDQUE2Qjs7Ozs7O0lBSTdCLDBDQUFpRDs7Ozs7SUFDakQsNkNBQThDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENka092ZXJsYXlPcmlnaW4gfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDb21wb25lbnRGYWN0b3J5LFxyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICBDb21wb25lbnRSZWYsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgd2FybkRlcHJlY2F0aW9uLCBOZ1N0eWxlSW50ZXJmYWNlLCBOek5vQW5pbWF0aW9uRGlyZWN0aXZlLCBOelRTVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IE56VG9vbHRpcFRyaWdnZXIgfSBmcm9tICcuLi9uei10b29sdGlwLmRlZmluaXRpb25zJztcclxuaW1wb3J0IHsgTnpUb29sdGlwQmFzZUNvbXBvbmVudExlZ2FjeSB9IGZyb20gJy4vbnotdG9vbHRpcC1iYXNlLWxlZ2FjeS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOelRvb2x0aXBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9uei10b29sdGlwLWJhc2UuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBOelRvb2x0aXBCYXNlRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgZGlyZWN0aXZlTmFtZVRpdGxlPzogTnpUU1R5cGUgfCBudWxsO1xyXG4gIHNwZWNpZmljVGl0bGU/OiBOelRTVHlwZSB8IG51bGw7XHJcbiAgZGlyZWN0aXZlTmFtZUNvbnRlbnQ/OiBOelRTVHlwZSB8IG51bGw7XHJcbiAgc3BlY2lmaWNDb250ZW50PzogTnpUU1R5cGUgfCBudWxsO1xyXG4gIHNwZWNpZmljVHJpZ2dlcj86IE56VG9vbHRpcFRyaWdnZXI7XHJcbiAgc3BlY2lmaWNQbGFjZW1lbnQ/OiBzdHJpbmc7XHJcbiAgc2hvd1BvcG92ZXJDbG9zZUJ1dHRvbj86IGJvb2xlYW47XHJcbiAgcG9wb3ZlckNsb3NlQnV0dG9uTGFiZWw/OiBzdHJpbmc7XHJcbiAgdG9vbHRpcFJlZjogQ29tcG9uZW50UmVmPE56VG9vbHRpcEJhc2VDb21wb25lbnQ+O1xyXG4gIHBvcG92ZXJGb3JjZVJlc3RvcmVGb2N1czogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgOS4wLjAuIFRoaXMgaXMgZGVwcmVjYXRlZCBhbmQgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiA5LjAuMC5cclxuICAgKiBQbGVhc2UgdXNlIGEgbW9yZSBzcGVjaWZpYyBBUEkuIExpa2UgYG56VG9vbHRpcFRpdGxlYC5cclxuICAgKi9cclxuICBASW5wdXQoKSBuelRpdGxlOiBOelRTVHlwZSB8IG51bGw7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXByZWNhdGVkIDkuMC4wLiBUaGlzIGlzIGRlcHJlY2F0ZWQgYW5kIGdvaW5nIHRvIGJlIHJlbW92ZWQgaW4gOS4wLjAuXHJcbiAgICogUGxlYXNlIHVzZSBhIG1vcmUgc3BlY2lmaWMgQVBJLiBMaWtlIGBuelBvcG92ZXJDb250ZW50YC5cclxuICAgKi9cclxuICBASW5wdXQoKSBuekNvbnRlbnQ6IE56VFNUeXBlIHwgbnVsbDtcclxuXHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgOS4wLjAuIFRoaXMgaXMgZGVwcmVjYXRlZCBhbmQgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiA5LjAuMC5cclxuICAgKiBQbGVhc2UgdXNlIGEgbW9yZSBzcGVjaWZpYyBBUEkuIExpa2UgYG56VG9vbHRpcFRyaWdnZXJgLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIG56VHJpZ2dlcjogTnpUb29sdGlwVHJpZ2dlciA9ICdob3Zlcic7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXByZWNhdGVkIDkuMC4wLiBUaGlzIGlzIGRlcHJlY2F0ZWQgYW5kIGdvaW5nIHRvIGJlIHJlbW92ZWQgaW4gOS4wLjAuXHJcbiAgICogUGxlYXNlIHVzZSBhIG1vcmUgc3BlY2lmaWMgQVBJLiBMaWtlIGBuelRvb2x0aXBQbGFjZW1lbnRgLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIG56UGxhY2VtZW50OiBzdHJpbmcgPSAndG9wJztcclxuXHJcbiAgQElucHV0KCkgbnpNb3VzZUVudGVyRGVsYXk6IG51bWJlcjtcclxuICBASW5wdXQoKSBuek1vdXNlTGVhdmVEZWxheTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIG56T3ZlcmxheUNsYXNzTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56T3ZlcmxheVN0eWxlOiBOZ1N0eWxlSW50ZXJmYWNlO1xyXG4gIEBJbnB1dCgpIG56VmlzaWJsZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBuelNob3dQb3BvdmVyQ2xvc2VCdXR0b246IGJvb2xlYW47XHJcbiAgQElucHV0KCkgbnpQb3BvdmVyQ2xvc2VCdXR0b25MYWJlbDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56UG9wb3ZlckZvcmNlUmVzdG9yZUZvY3VzOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBGb3IgY3JlYXRlIHRvb2x0aXAgZHluYW1pY2FsbHkuIFRoaXMgc2hvdWxkIGJlIG92ZXJyaWRlIGZvciBlYWNoIGRpZmZlcmVudCBjb21wb25lbnQuXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIGNvbXBvbmVudEZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8TnpUb29sdGlwQmFzZUNvbXBvbmVudD47XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgdHJ1ZSB0aXRsZSB0aGF0IHdvdWxkIGJlIHVzZWQgaW4gb3RoZXIgcGFydHMgb24gdGhpcyBjb21wb25lbnQuXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIGdldCB0aXRsZSgpOiBOelRTVHlwZSB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuc3BlY2lmaWNUaXRsZSB8fCB0aGlzLmRpcmVjdGl2ZU5hbWVUaXRsZSB8fCB0aGlzLm56VGl0bGU7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0IGNvbnRlbnQoKTogTnpUU1R5cGUgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLnNwZWNpZmljQ29udGVudCB8fCB0aGlzLmRpcmVjdGl2ZU5hbWVDb250ZW50IHx8IHRoaXMubnpDb250ZW50O1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGdldCBwbGFjZW1lbnQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLnNwZWNpZmljUGxhY2VtZW50IHx8IHRoaXMubnpQbGFjZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0IHRyaWdnZXIoKTogTnpUb29sdGlwVHJpZ2dlciB7XHJcbiAgICByZXR1cm4gdGhpcy5zcGVjaWZpY1RyaWdnZXIgfHwgdGhpcy5uelRyaWdnZXI7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgbmVlZFByb3h5UHJvcGVydGllcyA9IFtcclxuICAgICduek92ZXJsYXlDbGFzc05hbWUnLFxyXG4gICAgJ256T3ZlcmxheVN0eWxlJyxcclxuICAgICduek1vdXNlRW50ZXJEZWxheScsXHJcbiAgICAnbnpNb3VzZUxlYXZlRGVsYXknLFxyXG4gICAgJ256VmlzaWJsZScsXHJcbiAgICAnbm9BbmltYXRpb24nXHJcbiAgXTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56VmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgdG9vbHRpcDogTnpUb29sdGlwQmFzZUNvbXBvbmVudDtcclxuXHJcbiAgaXNUb29sdGlwQ29tcG9uZW50VmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCA5LjAuMC4gVG9vbHRpcHMgd291bGQgYWx3YXlzIGJlIGR5bmFtaWMgaW4gOS4wLjAuXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIGlzRHluYW1pY1Rvb2x0aXAgPSBmYWxzZTtcclxuXHJcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IHRyaWdnZXJVbmxpc3RlbmVyczogQXJyYXk8KCkgPT4gdm9pZD4gPSBbXTtcclxuXHJcbiAgcHJvdGVjdGVkICRkZXN0cm95ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgcHJpdmF0ZSBkZWxheVRpbWVyPzogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJvdGVjdGVkIGhvc3RWaWV3OiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgcHJvdGVjdGVkIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICBwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIC8qKlxyXG4gICAgICogQGRlcHJlY2F0ZWQgOS4wLjAuIFRoaXMgd2lsbCBhbHdheXMgYmUgYG51bGxgLlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX3Rvb2x0aXA/OiBOelRvb2x0aXBCYXNlQ29tcG9uZW50TGVnYWN5LFxyXG4gICAgcHJvdGVjdGVkIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgbnpUcmlnZ2VyLCBzcGVjaWZpY1RyaWdnZXIgfSA9IGNoYW5nZXM7XHJcbiAgICBjb25zdCB0cmlnZ2VyID0gc3BlY2lmaWNUcmlnZ2VyIHx8IG56VHJpZ2dlcjtcclxuXHJcbiAgICBpZiAodHJpZ2dlciAmJiAhdHJpZ2dlci5pc0ZpcnN0Q2hhbmdlKCkpIHtcclxuICAgICAgdGhpcy5yZWdpc3RlclRyaWdnZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMudG9vbHRpcCAmJiB0aGlzLmlzRHluYW1pY1Rvb2x0aXApIHtcclxuICAgICAgdGhpcy51cGRhdGVDaGFuZ2VkUHJvcGVydGllcyhjaGFuZ2VzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUT0RPOiBlbmFibGUgdGhlc2Ugd2FybmluZyBpbiA5LjAuMC5cclxuICAgIC8vIGlmIChjaGFuZ2VzLm56VGl0bGUpIHtcclxuICAgIC8vICAgd2FybkRlcHJlY2F0aW9uKFxyXG4gICAgLy8gICAgIGAnbnpUaXRsZScgb2YgJ256LXRvb2x0aXAnIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAxMC4wLjAuIFBsZWFzZSB1c2UgJ256VG9vbHRpcFRpdGxlJyBpbnN0ZWFkLiBUaGUgc2FtZSB3aXRoICduei1wb3BvdmVyJyBhbmQgJ256LXBvcGNvbmZpcm0nLmBcclxuICAgIC8vICAgKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBpZiAoY2hhbmdlcy5uekNvbnRlbnQpIHtcclxuICAgIC8vICAgd2FybkRlcHJlY2F0aW9uKFxyXG4gICAgLy8gICAgIGAnbnpDb250ZW50JyBvZiAnbnotcG9wb3ZlcicgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIDEwLjAuMC4gUGxlYXNlIHVzZSAnbnpQb3BvdmVyQ29udGVudCcgaW5zdGVhZC5gXHJcbiAgICAvLyAgICk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gaWYgKGNoYW5nZXMubnpQbGFjZW1lbnQpIHtcclxuICAgIC8vICAgd2FybkRlcHJlY2F0aW9uKFxyXG4gICAgLy8gICAgIGAnbnpQbGFjZW1lbnQnIG9mICduei10b29sdGlwJyBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gMTAuMC4wLiBQbGVhc2UgdXNlICduelRvb2x0aXBDb250ZW50JyBpbnN0ZWFkLiBUaGUgc2FtZSB3aXRoICduei1wb3BvdmVyJyBhbmQgJ256LXBvcGNvbmZpcm0nLmBcclxuICAgIC8vICAgKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBpZiAoY2hhbmdlcy5uelRyaWdnZXIpIHtcclxuICAgIC8vICAgd2FybkRlcHJlY2F0aW9uKFxyXG4gICAgLy8gICAgIGAnbnpUcmlnZ2VyJyBvZiAnbnotdG9vbHRpcCcgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIDEwLjAuMC4gUGxlYXNlIHVzZSAnbnpUb29sdGlwVHJpZ2dlcicgaW5zdGVhZC4gVGhlIHNhbWUgd2l0aCAnbnotcG9wb3ZlcicgYW5kICduei1wb3Bjb25maXJtJy5gXHJcbiAgICAvLyAgICk7XHJcbiAgICAvLyB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5fdG9vbHRpcCkge1xyXG4gICAgICB0aGlzLmNyZWF0ZUR5bmFtaWNUb29sdGlwQ29tcG9uZW50KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB3YXJuRGVwcmVjYXRpb24oXHJcbiAgICAgICAgYCc8bnotdG9vbHRpcD48L256LXRvb2x0aXA+JywgJzxuei1wb3BvdmVyPjwvbnotcG9wb3Zlcj4nIGFuZCAnPG56LXBvcGNvbmZpcm0+PC9uei1wb3Bjb25maXJtPicgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIDkuMC4wLiBSZWZlcjogaHR0cHM6Ly9uZy5hbnQuZGVzaWduL2NvbXBvbmVudHMvdG9vbHRpcC96aCAuYFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnRvb2x0aXAgPSB0aGlzLl90b29sdGlwO1xyXG4gICAgICB0aGlzLnRvb2x0aXAuc2V0T3ZlcmxheU9yaWdpbih0aGlzIGFzIENka092ZXJsYXlPcmlnaW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudG9vbHRpcC5uelZpc2libGVDaGFuZ2VcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcclxuICAgICAgICB0YWtlVW50aWwodGhpcy4kZGVzdHJveSlcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKCh2aXNpYmxlOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pc1Rvb2x0aXBDb21wb25lbnRWaXNpYmxlID0gdmlzaWJsZTtcclxuICAgICAgICB0aGlzLm56VmlzaWJsZUNoYW5nZS5lbWl0KHZpc2libGUpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVnaXN0ZXJUcmlnZ2VycygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLiRkZXN0cm95Lm5leHQoKTtcclxuICAgIHRoaXMuJGRlc3Ryb3kuY29tcGxldGUoKTtcclxuXHJcbiAgICAvLyBDbGVhciB0b2dnbGluZyB0aW1lci4gSXNzdWUgIzM4NzUgIzQzMTcgIzQzODZcclxuICAgIHRoaXMuY2xlYXJUb2dnbGluZ1RpbWVyKCk7XHJcbiAgICB0aGlzLnJlbW92ZVRyaWdnZXJMaXN0ZW5lcnMoKTtcclxuXHJcbiAgICBpZiAodGhpcy50b29sdGlwUmVmKSB7XHJcbiAgICAgIHRoaXMudG9vbHRpcFJlZi5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzaG93KCk6IHZvaWQge1xyXG4gICAgdGhpcy50b29sdGlwLnNob3coKTtcclxuICB9XHJcblxyXG4gIGhpZGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRvb2x0aXAuaGlkZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRm9yY2UgdGhlIGNvbXBvbmVudCB0byB1cGRhdGUgaXRzIHBvc2l0aW9uLlxyXG4gICAqL1xyXG4gIHVwZGF0ZVBvc2l0aW9uKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudG9vbHRpcCAmJiB0aGlzLmlzRHluYW1pY1Rvb2x0aXApIHtcclxuICAgICAgdGhpcy50b29sdGlwLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYSBkeW5hbWljIHRvb2x0aXAgY29tcG9uZW50LiBUaGlzIG1ldGhvZCBjYW4gYmUgb3ZlcnJpZGUuXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIGNyZWF0ZUR5bmFtaWNUb29sdGlwQ29tcG9uZW50KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0R5bmFtaWNUb29sdGlwID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLnRvb2x0aXBSZWYgPSB0aGlzLmhvc3RWaWV3LmNyZWF0ZUNvbXBvbmVudCh0aGlzLmNvbXBvbmVudEZhY3RvcnkpO1xyXG5cclxuICAgIHRoaXMudG9vbHRpcCA9IHRoaXMudG9vbHRpcFJlZi5pbnN0YW5jZTtcclxuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQoXHJcbiAgICAgIHRoaXMucmVuZGVyZXIucGFyZW50Tm9kZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCksXHJcbiAgICAgIHRoaXMudG9vbHRpcFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50XHJcbiAgICApOyAvLyBSZW1vdmUgdGhlIGNvbXBvbmVudCdzIERPTSBiZWNhdXNlIGl0IHNob3VsZCBiZSBpbiB0aGUgb3ZlcmxheSBjb250YWluZXIuXHJcblxyXG4gICAgLy8gSWYgdGhlIHRvb2x0aXAgY29tcG9uZW50IGlzIGR5bmFtaWNhbGx5IGNyZWF0ZWQsIHdlIHNob3VsZCBzZXQgaXRzIG9yaWdpbiBiZWZvcmUgdXBkYXRpbmcgcHJvcGVydGllcyB0b1xyXG4gICAgLy8gdGhlIGNvbXBvbmVudC5cclxuICAgIHRoaXMudG9vbHRpcC5zZXRPdmVybGF5T3JpZ2luKHRoaXMgYXMgQ2RrT3ZlcmxheU9yaWdpbik7XHJcbiAgICAvLyBVcGRhdGUgYWxsIHByb3BlcnRpZXMgdG8gdGhlIGNvbXBvbmVudC5cclxuICAgIHRoaXMudXBkYXRlQ2hhbmdlZFByb3BlcnRpZXModGhpcy5uZWVkUHJveHlQcm9wZXJ0aWVzKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCByZWdpc3RlclRyaWdnZXJzKCk6IHZvaWQge1xyXG4gICAgLy8gV2hlbiB0aGUgbWV0aG9kIGdldHMgaW52b2tlZCwgYWxsIHByb3BlcnRpZXMgaGFzIGJlZW4gc3luY2VkIHRvIHRoZSBkeW5hbWljIGNvbXBvbmVudC5cclxuICAgIC8vIEFmdGVyIHJlbW92aW5nIHRoZSBvbGQgQVBJLCB3ZSBjYW4ganVzdCBjaGVjayB0aGUgZGlyZWN0aXZlJ3Mgb3duIGBuelRyaWdnZXJgLlxyXG4gICAgY29uc3QgZWwgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICAgIGNvbnN0IHRyaWdnZXIgPSB0aGlzLmlzRHluYW1pY1Rvb2x0aXAgPyB0aGlzLnRyaWdnZXIgOiB0aGlzLnRvb2x0aXAubnpUcmlnZ2VyO1xyXG5cclxuICAgIHRoaXMucmVtb3ZlVHJpZ2dlckxpc3RlbmVycygpO1xyXG5cclxuICAgIGlmICh0cmlnZ2VyID09PSAnY2xpY2snKSB7XHJcbiAgICAgIHRoaXMudHJpZ2dlclVubGlzdGVuZXJzLnB1c2goXHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4oZWwsICdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0cmlnZ2VyID09PSAnaG92ZXInIHx8IHRyaWdnZXIgPT09ICdjb21iaW5lZCcpIHtcclxuICAgICAgICBsZXQgb3ZlcmxheUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgICAgIHRoaXMudHJpZ2dlclVubGlzdGVuZXJzLnB1c2goXHJcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbihlbCwgJ21vdXNlZW50ZXInLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVsYXlFbnRlckxlYXZlKHRydWUsIHRydWUsIHRoaXMudG9vbHRpcC5uek1vdXNlRW50ZXJEZWxheSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyVW5saXN0ZW5lcnMucHVzaChcclxuICAgICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKGVsLCAnbW91c2VsZWF2ZScsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5kZWxheUVudGVyTGVhdmUodHJ1ZSwgZmFsc2UsIHRoaXMudG9vbHRpcC5uek1vdXNlTGVhdmVEZWxheSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRvb2x0aXAub3ZlcmxheS5vdmVybGF5UmVmICYmICFvdmVybGF5RWxlbWVudCkge1xyXG4gICAgICAgICAgICAgIG92ZXJsYXlFbGVtZW50ID0gdGhpcy50b29sdGlwLm92ZXJsYXkub3ZlcmxheVJlZi5vdmVybGF5RWxlbWVudDtcclxuICAgICAgICAgICAgICB0aGlzLnRyaWdnZXJVbmxpc3RlbmVycy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4ob3ZlcmxheUVsZW1lbnQsICdtb3VzZWVudGVyJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmRlbGF5RW50ZXJMZWF2ZShmYWxzZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyVW5saXN0ZW5lcnMucHVzaChcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKG92ZXJsYXlFbGVtZW50LCAnbW91c2VsZWF2ZScsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5kZWxheUVudGVyTGVhdmUoZmFsc2UsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0cmlnZ2VyID09PSAnZm9jdXMnIHx8IHRyaWdnZXIgPT09ICdjb21iaW5lZCcpIHtcclxuICAgICAgICB0aGlzLnRyaWdnZXJVbmxpc3RlbmVycy5wdXNoKHRoaXMucmVuZGVyZXIubGlzdGVuKGVsLCAnZm9jdXMnLCAoKSA9PiB0aGlzLnNob3coKSkpO1xyXG4gICAgICAgIHRoaXMudHJpZ2dlclVubGlzdGVuZXJzLnB1c2godGhpcy5yZW5kZXJlci5saXN0ZW4oZWwsICdibHVyJywgKCkgPT4gdGhpcy5oaWRlKCkpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gRWxzZSBkbyBub3RoaW5nIGJlY2F1c2UgdXNlciB3YW50cyB0byBjb250cm9sIHRoZSB2aXNpYmlsaXR5IHByb2dyYW1tYXRpY2FsbHkuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTeW5jIGNoYW5nZWQgcHJvcGVydGllcyB0byB0aGUgY29tcG9uZW50IGFuZCB0cmlnZ2VyIGNoYW5nZSBkZXRlY3Rpb24gaW4gdGhhdCBjb21wb25lbnQuXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIHVwZGF0ZUNoYW5nZWRQcm9wZXJ0aWVzKHByb3BlcnRpZXNPckNoYW5nZXM6IHN0cmluZ1tdIHwgU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkocHJvcGVydGllc09yQ2hhbmdlcyk7XHJcbiAgICBjb25zdCBrZXlzXyA9IGlzQXJyYXkgPyAocHJvcGVydGllc09yQ2hhbmdlcyBhcyBzdHJpbmdbXSkgOiBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzT3JDaGFuZ2VzKTtcclxuXHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tYW55XHJcbiAgICBrZXlzXy5mb3JFYWNoKChwcm9wZXJ0eTogYW55KSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLm5lZWRQcm94eVByb3BlcnRpZXMuaW5kZXhPZihwcm9wZXJ0eSkgIT09IC0xKSB7XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIHRoaXMudXBkYXRlQ29tcG9uZW50VmFsdWUocHJvcGVydHksIHRoaXNbcHJvcGVydHldKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGlzQXJyYXkpIHtcclxuICAgICAgdGhpcy51cGRhdGVDb21wb25lbnRWYWx1ZSgnbnpUaXRsZScsIHRoaXMudGl0bGUpO1xyXG4gICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudFZhbHVlKCduekNvbnRlbnQnLCB0aGlzLmNvbnRlbnQpO1xyXG4gICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudFZhbHVlKCduelBsYWNlbWVudCcsIHRoaXMucGxhY2VtZW50KTtcclxuICAgICAgdGhpcy51cGRhdGVDb21wb25lbnRWYWx1ZSgnbnpUcmlnZ2VyJywgdGhpcy50cmlnZ2VyKTtcclxuICAgICAgdGhpcy51cGRhdGVDb21wb25lbnRWYWx1ZSgnbnpTaG93UG9wb3ZlckNsb3NlQnV0dG9uJywgdGhpcy5zaG93UG9wb3ZlckNsb3NlQnV0dG9uKTtcclxuICAgICAgdGhpcy51cGRhdGVDb21wb25lbnRWYWx1ZSgnbnpQb3BvdmVyQ2xvc2VCdXR0b25MYWJlbCcsIHRoaXMucG9wb3ZlckNsb3NlQnV0dG9uTGFiZWwpO1xyXG4gICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudFZhbHVlKCduelBvcG92ZXJGb3JjZVJlc3RvcmVGb2N1cycsIHRoaXMucG9wb3ZlckZvcmNlUmVzdG9yZUZvY3VzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGMgPSBwcm9wZXJ0aWVzT3JDaGFuZ2VzIGFzIFNpbXBsZUNoYW5nZXM7XHJcbiAgICAgIGlmIChjLnNwZWNpZmljVGl0bGUgfHwgYy5kaXJlY3RpdmVOYW1lVGl0bGUgfHwgYy5uelRpdGxlKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDb21wb25lbnRWYWx1ZSgnbnpUaXRsZScsIHRoaXMudGl0bGUpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjLnNwZWNpZmljQ29udGVudCB8fCBjLmRpcmVjdGl2ZU5hbWVDb250ZW50IHx8IGMubnpDb250ZW50KSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDb21wb25lbnRWYWx1ZSgnbnpDb250ZW50JywgdGhpcy5jb250ZW50KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoYy5zcGVjaWZpY1RyaWdnZXIgfHwgYy5uelRyaWdnZXIpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudFZhbHVlKCduelRyaWdnZXInLCB0aGlzLnRyaWdnZXIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjLnNwZWNpZmljUGxhY2VtZW50IHx8IGMubnpQbGFjZW1lbnQpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudFZhbHVlKCduelBsYWNlbWVudCcsIHRoaXMucGxhY2VtZW50KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoYy5zaG93Q2xvc2VCdXR0b24pIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudFZhbHVlKCduelNob3dQb3BvdmVyQ2xvc2VCdXR0b24nLCB0aGlzLnNob3dQb3BvdmVyQ2xvc2VCdXR0b24pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjLnBvcG92ZXJDbG9zZUJ1dHRvbkxhYmVsKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDb21wb25lbnRWYWx1ZSgnbnpQb3BvdmVyQ2xvc2VCdXR0b25MYWJlbCcsIHRoaXMucG9wb3ZlckNsb3NlQnV0dG9uTGFiZWwpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjLnBvcG92ZXJGb3JjZVJlc3RvcmVGb2N1cykge1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ29tcG9uZW50VmFsdWUoJ256UG9wb3ZlckZvcmNlUmVzdG9yZUZvY3VzJywgdGhpcy5wb3BvdmVyRm9yY2VSZXN0b3JlRm9jdXMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50b29sdGlwLnVwZGF0ZUJ5RGlyZWN0aXZlKCk7XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tYW55XHJcbiAgcHJpdmF0ZSB1cGRhdGVDb21wb25lbnRWYWx1ZShrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICB0aGlzLnRvb2x0aXBba2V5XSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkZWxheUVudGVyTGVhdmUoaXNPcmlnaW46IGJvb2xlYW4sIGlzRW50ZXI6IGJvb2xlYW4sIGRlbGF5OiBudW1iZXIgPSAtMSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZGVsYXlUaW1lcikge1xyXG4gICAgICB0aGlzLmNsZWFyVG9nZ2xpbmdUaW1lcigpO1xyXG4gICAgfSBlbHNlIGlmIChkZWxheSA+IDApIHtcclxuICAgICAgdGhpcy5kZWxheVRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5kZWxheVRpbWVyID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGlzRW50ZXIgPyB0aGlzLnNob3coKSA6IHRoaXMuaGlkZSgpO1xyXG4gICAgICB9LCBkZWxheSAqIDEwMDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gYGlzT3JpZ2luYCBpcyB1c2VkIGR1ZSB0byB0aGUgdG9vbHRpcCB3aWxsIG5vdCBoaWRlIGltbWVkaWF0ZWx5XHJcbiAgICAgIC8vIChtYXkgY2F1c2VkIGJ5IHRoZSBmYWRlLW91dCBhbmltYXRpb24pLlxyXG4gICAgICBpc0VudGVyICYmIGlzT3JpZ2luID8gdGhpcy5zaG93KCkgOiB0aGlzLmhpZGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVtb3ZlVHJpZ2dlckxpc3RlbmVycygpOiB2b2lkIHtcclxuICAgIHRoaXMudHJpZ2dlclVubGlzdGVuZXJzLmZvckVhY2goY2FuY2VsID0+IGNhbmNlbCgpKTtcclxuICAgIHRoaXMudHJpZ2dlclVubGlzdGVuZXJzLmxlbmd0aCA9IDA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsZWFyVG9nZ2xpbmdUaW1lcigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRlbGF5VGltZXIpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGVsYXlUaW1lcik7XHJcbiAgICAgIHRoaXMuZGVsYXlUaW1lciA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19