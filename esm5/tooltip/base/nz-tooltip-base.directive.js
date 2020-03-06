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
        nzVisibleChange: [{ type: Output }]
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdG9vbHRpcC1iYXNlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdG9vbHRpcC8iLCJzb3VyY2VzIjpbImJhc2UvbnotdG9vbHRpcC1iYXNlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkEsT0FBTyxFQU1MLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUlQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQXNELE1BQU0sb0JBQW9CLENBQUM7QUFDekcsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFNakU7SUE2RkUsZ0NBQ1MsVUFBc0IsRUFDbkIsUUFBMEIsRUFDMUIsUUFBa0MsRUFDbEMsUUFBbUIsRUFJbkIsUUFBdUMsRUFDdkMsV0FBb0M7UUFSdkMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNuQixhQUFRLEdBQVIsUUFBUSxDQUFrQjtRQUMxQixhQUFRLEdBQVIsUUFBUSxDQUEwQjtRQUNsQyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBSW5CLGFBQVEsR0FBUixRQUFRLENBQStCO1FBQ3ZDLGdCQUFXLEdBQVgsV0FBVyxDQUF5Qjs7Ozs7UUEzRXZDLGNBQVMsR0FBcUIsT0FBTyxDQUFDOzs7OztRQU10QyxnQkFBVyxHQUFXLEtBQUssQ0FBQztRQWtDM0Isd0JBQW1CLEdBQUc7WUFDOUIsb0JBQW9CO1lBQ3BCLGdCQUFnQjtZQUNoQixtQkFBbUI7WUFDbkIsbUJBQW1CO1lBQ25CLFdBQVc7WUFDWCxhQUFhO1NBQ2QsQ0FBQztRQUVpQixvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFJakUsOEJBQXlCLEdBQUcsS0FBSyxDQUFDOzs7O1FBS3hCLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUVoQix1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QUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztTQUM3QjtJQUNILENBQUM7OzBCQS9VQSxLQUFLOzRCQU1MLEtBQUs7NEJBTUwsS0FBSzs4QkFNTCxLQUFLO29DQUVMLEtBQUs7b0NBQ0wsS0FBSztxQ0FDTCxLQUFLO2lDQUNMLEtBQUs7NEJBQ0wsS0FBSzsyQ0FDTCxLQUFLOzRDQUNMLEtBQUs7a0NBbUNMLE1BQU07O0lBbVJULDZCQUFDO0NBQUEsQUEvVkQsSUErVkM7U0EvVnFCLHNCQUFzQjs7O0lBQzFDLG9EQUFxQzs7SUFDckMsK0NBQWdDOztJQUNoQyxzREFBdUM7O0lBQ3ZDLGlEQUFrQzs7SUFDbEMsaURBQW1DOztJQUNuQyxtREFBMkI7O0lBQzNCLHdEQUFpQzs7SUFDakMseURBQWlDOztJQUNqQyw0Q0FBaUQ7Ozs7OztJQU1qRCx5Q0FBa0M7Ozs7OztJQU1sQywyQ0FBb0M7Ozs7OztJQU1wQywyQ0FBK0M7Ozs7OztJQU0vQyw2Q0FBcUM7O0lBRXJDLG1EQUFtQzs7SUFDbkMsbURBQW1DOztJQUNuQyxvREFBb0M7O0lBQ3BDLGdEQUEwQzs7SUFDMUMsMkNBQTRCOztJQUM1QiwwREFBMkM7O0lBQzNDLDJEQUEyQzs7Ozs7O0lBSzNDLGtEQUFxRTs7Ozs7SUFxQnJFLHFEQU9FOztJQUVGLGlEQUFpRTs7SUFFakUseUNBQWdDOztJQUVoQywyREFBa0M7Ozs7OztJQUtsQyxrREFBbUM7Ozs7O0lBRW5DLG9EQUE4RDs7Ozs7SUFFOUQsMENBQXlDOzs7OztJQUV6Qyw0Q0FBNEI7O0lBRzFCLDRDQUE2Qjs7Ozs7SUFDN0IsMENBQW9DOzs7OztJQUNwQywwQ0FBNEM7Ozs7O0lBQzVDLDBDQUE2Qjs7Ozs7O0lBSTdCLDBDQUFpRDs7Ozs7SUFDakQsNkNBQThDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENka092ZXJsYXlPcmlnaW4gfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDb21wb25lbnRGYWN0b3J5LFxyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICBDb21wb25lbnRSZWYsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgd2FybkRlcHJlY2F0aW9uLCBOZ1N0eWxlSW50ZXJmYWNlLCBOek5vQW5pbWF0aW9uRGlyZWN0aXZlLCBOelRTVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IE56VG9vbHRpcFRyaWdnZXIgfSBmcm9tICcuLi9uei10b29sdGlwLmRlZmluaXRpb25zJztcclxuaW1wb3J0IHsgTnpUb29sdGlwQmFzZUNvbXBvbmVudExlZ2FjeSB9IGZyb20gJy4vbnotdG9vbHRpcC1iYXNlLWxlZ2FjeS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOelRvb2x0aXBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9uei10b29sdGlwLWJhc2UuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBOelRvb2x0aXBCYXNlRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgZGlyZWN0aXZlTmFtZVRpdGxlPzogTnpUU1R5cGUgfCBudWxsO1xyXG4gIHNwZWNpZmljVGl0bGU/OiBOelRTVHlwZSB8IG51bGw7XHJcbiAgZGlyZWN0aXZlTmFtZUNvbnRlbnQ/OiBOelRTVHlwZSB8IG51bGw7XHJcbiAgc3BlY2lmaWNDb250ZW50PzogTnpUU1R5cGUgfCBudWxsO1xyXG4gIHNwZWNpZmljVHJpZ2dlcj86IE56VG9vbHRpcFRyaWdnZXI7XHJcbiAgc3BlY2lmaWNQbGFjZW1lbnQ/OiBzdHJpbmc7XHJcbiAgc2hvd1BvcG92ZXJDbG9zZUJ1dHRvbj86IGJvb2xlYW47XHJcbiAgcG9wb3ZlckNsb3NlQnV0dG9uTGFiZWw/OiBzdHJpbmc7XHJcbiAgdG9vbHRpcFJlZjogQ29tcG9uZW50UmVmPE56VG9vbHRpcEJhc2VDb21wb25lbnQ+O1xyXG5cclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCA5LjAuMC4gVGhpcyBpcyBkZXByZWNhdGVkIGFuZCBnb2luZyB0byBiZSByZW1vdmVkIGluIDkuMC4wLlxyXG4gICAqIFBsZWFzZSB1c2UgYSBtb3JlIHNwZWNpZmljIEFQSS4gTGlrZSBgbnpUb29sdGlwVGl0bGVgLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIG56VGl0bGU6IE56VFNUeXBlIHwgbnVsbDtcclxuXHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgOS4wLjAuIFRoaXMgaXMgZGVwcmVjYXRlZCBhbmQgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiA5LjAuMC5cclxuICAgKiBQbGVhc2UgdXNlIGEgbW9yZSBzcGVjaWZpYyBBUEkuIExpa2UgYG56UG9wb3ZlckNvbnRlbnRgLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIG56Q29udGVudDogTnpUU1R5cGUgfCBudWxsO1xyXG5cclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCA5LjAuMC4gVGhpcyBpcyBkZXByZWNhdGVkIGFuZCBnb2luZyB0byBiZSByZW1vdmVkIGluIDkuMC4wLlxyXG4gICAqIFBsZWFzZSB1c2UgYSBtb3JlIHNwZWNpZmljIEFQSS4gTGlrZSBgbnpUb29sdGlwVHJpZ2dlcmAuXHJcbiAgICovXHJcbiAgQElucHV0KCkgbnpUcmlnZ2VyOiBOelRvb2x0aXBUcmlnZ2VyID0gJ2hvdmVyJztcclxuXHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgOS4wLjAuIFRoaXMgaXMgZGVwcmVjYXRlZCBhbmQgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiA5LjAuMC5cclxuICAgKiBQbGVhc2UgdXNlIGEgbW9yZSBzcGVjaWZpYyBBUEkuIExpa2UgYG56VG9vbHRpcFBsYWNlbWVudGAuXHJcbiAgICovXHJcbiAgQElucHV0KCkgbnpQbGFjZW1lbnQ6IHN0cmluZyA9ICd0b3AnO1xyXG5cclxuICBASW5wdXQoKSBuek1vdXNlRW50ZXJEZWxheTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIG56TW91c2VMZWF2ZURlbGF5OiBudW1iZXI7XHJcbiAgQElucHV0KCkgbnpPdmVybGF5Q2xhc3NOYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpPdmVybGF5U3R5bGU6IE5nU3R5bGVJbnRlcmZhY2U7XHJcbiAgQElucHV0KCkgbnpWaXNpYmxlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIG56U2hvd1BvcG92ZXJDbG9zZUJ1dHRvbjogYm9vbGVhbjtcclxuICBASW5wdXQoKSBuelBvcG92ZXJDbG9zZUJ1dHRvbkxhYmVsOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEZvciBjcmVhdGUgdG9vbHRpcCBkeW5hbWljYWxseS4gVGhpcyBzaG91bGQgYmUgb3ZlcnJpZGUgZm9yIGVhY2ggZGlmZmVyZW50IGNvbXBvbmVudC5cclxuICAgKi9cclxuICBwcm90ZWN0ZWQgY29tcG9uZW50RmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxOelRvb2x0aXBCYXNlQ29tcG9uZW50PjtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyB0cnVlIHRpdGxlIHRoYXQgd291bGQgYmUgdXNlZCBpbiBvdGhlciBwYXJ0cyBvbiB0aGlzIGNvbXBvbmVudC5cclxuICAgKi9cclxuICBwcm90ZWN0ZWQgZ2V0IHRpdGxlKCk6IE56VFNUeXBlIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5zcGVjaWZpY1RpdGxlIHx8IHRoaXMuZGlyZWN0aXZlTmFtZVRpdGxlIHx8IHRoaXMubnpUaXRsZTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBnZXQgY29udGVudCgpOiBOelRTVHlwZSB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuc3BlY2lmaWNDb250ZW50IHx8IHRoaXMuZGlyZWN0aXZlTmFtZUNvbnRlbnQgfHwgdGhpcy5uekNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0IHBsYWNlbWVudCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuc3BlY2lmaWNQbGFjZW1lbnQgfHwgdGhpcy5uelBsYWNlbWVudDtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBnZXQgdHJpZ2dlcigpOiBOelRvb2x0aXBUcmlnZ2VyIHtcclxuICAgIHJldHVybiB0aGlzLnNwZWNpZmljVHJpZ2dlciB8fCB0aGlzLm56VHJpZ2dlcjtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBuZWVkUHJveHlQcm9wZXJ0aWVzID0gW1xyXG4gICAgJ256T3ZlcmxheUNsYXNzTmFtZScsXHJcbiAgICAnbnpPdmVybGF5U3R5bGUnLFxyXG4gICAgJ256TW91c2VFbnRlckRlbGF5JyxcclxuICAgICduek1vdXNlTGVhdmVEZWxheScsXHJcbiAgICAnbnpWaXNpYmxlJyxcclxuICAgICdub0FuaW1hdGlvbidcclxuICBdO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpWaXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICB0b29sdGlwOiBOelRvb2x0aXBCYXNlQ29tcG9uZW50O1xyXG5cclxuICBpc1Rvb2x0aXBDb21wb25lbnRWaXNpYmxlID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXByZWNhdGVkIDkuMC4wLiBUb29sdGlwcyB3b3VsZCBhbHdheXMgYmUgZHluYW1pYyBpbiA5LjAuMC5cclxuICAgKi9cclxuICBwcm90ZWN0ZWQgaXNEeW5hbWljVG9vbHRpcCA9IGZhbHNlO1xyXG5cclxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgdHJpZ2dlclVubGlzdGVuZXJzOiBBcnJheTwoKSA9PiB2b2lkPiA9IFtdO1xyXG5cclxuICBwcm90ZWN0ZWQgJGRlc3Ryb3kgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cclxuICBwcml2YXRlIGRlbGF5VGltZXI/OiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcm90ZWN0ZWQgaG9zdFZpZXc6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBwcm90ZWN0ZWQgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVwcmVjYXRlZCA5LjAuMC4gVGhpcyB3aWxsIGFsd2F5cyBiZSBgbnVsbGAuXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfdG9vbHRpcD86IE56VG9vbHRpcEJhc2VDb21wb25lbnRMZWdhY3ksXHJcbiAgICBwcm90ZWN0ZWQgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3QgeyBuelRyaWdnZXIsIHNwZWNpZmljVHJpZ2dlciB9ID0gY2hhbmdlcztcclxuICAgIGNvbnN0IHRyaWdnZXIgPSBzcGVjaWZpY1RyaWdnZXIgfHwgbnpUcmlnZ2VyO1xyXG5cclxuICAgIGlmICh0cmlnZ2VyICYmICF0cmlnZ2VyLmlzRmlyc3RDaGFuZ2UoKSkge1xyXG4gICAgICB0aGlzLnJlZ2lzdGVyVHJpZ2dlcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy50b29sdGlwICYmIHRoaXMuaXNEeW5hbWljVG9vbHRpcCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUNoYW5nZWRQcm9wZXJ0aWVzKGNoYW5nZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRPRE86IGVuYWJsZSB0aGVzZSB3YXJuaW5nIGluIDkuMC4wLlxyXG4gICAgLy8gaWYgKGNoYW5nZXMubnpUaXRsZSkge1xyXG4gICAgLy8gICB3YXJuRGVwcmVjYXRpb24oXHJcbiAgICAvLyAgICAgYCduelRpdGxlJyBvZiAnbnotdG9vbHRpcCcgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIDEwLjAuMC4gUGxlYXNlIHVzZSAnbnpUb29sdGlwVGl0bGUnIGluc3RlYWQuIFRoZSBzYW1lIHdpdGggJ256LXBvcG92ZXInIGFuZCAnbnotcG9wY29uZmlybScuYFxyXG4gICAgLy8gICApO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGlmIChjaGFuZ2VzLm56Q29udGVudCkge1xyXG4gICAgLy8gICB3YXJuRGVwcmVjYXRpb24oXHJcbiAgICAvLyAgICAgYCduekNvbnRlbnQnIG9mICduei1wb3BvdmVyJyBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gMTAuMC4wLiBQbGVhc2UgdXNlICduelBvcG92ZXJDb250ZW50JyBpbnN0ZWFkLmBcclxuICAgIC8vICAgKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBpZiAoY2hhbmdlcy5uelBsYWNlbWVudCkge1xyXG4gICAgLy8gICB3YXJuRGVwcmVjYXRpb24oXHJcbiAgICAvLyAgICAgYCduelBsYWNlbWVudCcgb2YgJ256LXRvb2x0aXAnIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAxMC4wLjAuIFBsZWFzZSB1c2UgJ256VG9vbHRpcENvbnRlbnQnIGluc3RlYWQuIFRoZSBzYW1lIHdpdGggJ256LXBvcG92ZXInIGFuZCAnbnotcG9wY29uZmlybScuYFxyXG4gICAgLy8gICApO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGlmIChjaGFuZ2VzLm56VHJpZ2dlcikge1xyXG4gICAgLy8gICB3YXJuRGVwcmVjYXRpb24oXHJcbiAgICAvLyAgICAgYCduelRyaWdnZXInIG9mICduei10b29sdGlwJyBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gMTAuMC4wLiBQbGVhc2UgdXNlICduelRvb2x0aXBUcmlnZ2VyJyBpbnN0ZWFkLiBUaGUgc2FtZSB3aXRoICduei1wb3BvdmVyJyBhbmQgJ256LXBvcGNvbmZpcm0nLmBcclxuICAgIC8vICAgKTtcclxuICAgIC8vIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLl90b29sdGlwKSB7XHJcbiAgICAgIHRoaXMuY3JlYXRlRHluYW1pY1Rvb2x0aXBDb21wb25lbnQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHdhcm5EZXByZWNhdGlvbihcclxuICAgICAgICBgJzxuei10b29sdGlwPjwvbnotdG9vbHRpcD4nLCAnPG56LXBvcG92ZXI+PC9uei1wb3BvdmVyPicgYW5kICc8bnotcG9wY29uZmlybT48L256LXBvcGNvbmZpcm0+JyBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFJlZmVyOiBodHRwczovL25nLmFudC5kZXNpZ24vY29tcG9uZW50cy90b29sdGlwL3poIC5gXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMudG9vbHRpcCA9IHRoaXMuX3Rvb2x0aXA7XHJcbiAgICAgIHRoaXMudG9vbHRpcC5zZXRPdmVybGF5T3JpZ2luKHRoaXMgYXMgQ2RrT3ZlcmxheU9yaWdpbik7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50b29sdGlwLm56VmlzaWJsZUNoYW5nZVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxyXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLiRkZXN0cm95KVxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoKHZpc2libGU6IGJvb2xlYW4pID0+IHtcclxuICAgICAgICB0aGlzLmlzVG9vbHRpcENvbXBvbmVudFZpc2libGUgPSB2aXNpYmxlO1xyXG4gICAgICAgIHRoaXMubnpWaXNpYmxlQ2hhbmdlLmVtaXQodmlzaWJsZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZWdpc3RlclRyaWdnZXJzKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuJGRlc3Ryb3kubmV4dCgpO1xyXG4gICAgdGhpcy4kZGVzdHJveS5jb21wbGV0ZSgpO1xyXG5cclxuICAgIC8vIENsZWFyIHRvZ2dsaW5nIHRpbWVyLiBJc3N1ZSAjMzg3NSAjNDMxNyAjNDM4NlxyXG4gICAgdGhpcy5jbGVhclRvZ2dsaW5nVGltZXIoKTtcclxuICAgIHRoaXMucmVtb3ZlVHJpZ2dlckxpc3RlbmVycygpO1xyXG5cclxuICAgIGlmICh0aGlzLnRvb2x0aXBSZWYpIHtcclxuICAgICAgdGhpcy50b29sdGlwUmVmLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNob3coKTogdm9pZCB7XHJcbiAgICB0aGlzLnRvb2x0aXAuc2hvdygpO1xyXG4gIH1cclxuXHJcbiAgaGlkZSgpOiB2b2lkIHtcclxuICAgIHRoaXMudG9vbHRpcC5oaWRlKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGb3JjZSB0aGUgY29tcG9uZW50IHRvIHVwZGF0ZSBpdHMgcG9zaXRpb24uXHJcbiAgICovXHJcbiAgdXBkYXRlUG9zaXRpb24oKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy50b29sdGlwICYmIHRoaXMuaXNEeW5hbWljVG9vbHRpcCkge1xyXG4gICAgICB0aGlzLnRvb2x0aXAudXBkYXRlUG9zaXRpb24oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIGR5bmFtaWMgdG9vbHRpcCBjb21wb25lbnQuIFRoaXMgbWV0aG9kIGNhbiBiZSBvdmVycmlkZS5cclxuICAgKi9cclxuICBwcm90ZWN0ZWQgY3JlYXRlRHluYW1pY1Rvb2x0aXBDb21wb25lbnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzRHluYW1pY1Rvb2x0aXAgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMudG9vbHRpcFJlZiA9IHRoaXMuaG9zdFZpZXcuY3JlYXRlQ29tcG9uZW50KHRoaXMuY29tcG9uZW50RmFjdG9yeSk7XHJcblxyXG4gICAgdGhpcy50b29sdGlwID0gdGhpcy50b29sdGlwUmVmLmluc3RhbmNlO1xyXG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZChcclxuICAgICAgdGhpcy5yZW5kZXJlci5wYXJlbnROb2RlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSxcclxuICAgICAgdGhpcy50b29sdGlwUmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnRcclxuICAgICk7IC8vIFJlbW92ZSB0aGUgY29tcG9uZW50J3MgRE9NIGJlY2F1c2UgaXQgc2hvdWxkIGJlIGluIHRoZSBvdmVybGF5IGNvbnRhaW5lci5cclxuXHJcbiAgICAvLyBJZiB0aGUgdG9vbHRpcCBjb21wb25lbnQgaXMgZHluYW1pY2FsbHkgY3JlYXRlZCwgd2Ugc2hvdWxkIHNldCBpdHMgb3JpZ2luIGJlZm9yZSB1cGRhdGluZyBwcm9wZXJ0aWVzIHRvXHJcbiAgICAvLyB0aGUgY29tcG9uZW50LlxyXG4gICAgdGhpcy50b29sdGlwLnNldE92ZXJsYXlPcmlnaW4odGhpcyBhcyBDZGtPdmVybGF5T3JpZ2luKTtcclxuICAgIC8vIFVwZGF0ZSBhbGwgcHJvcGVydGllcyB0byB0aGUgY29tcG9uZW50LlxyXG4gICAgdGhpcy51cGRhdGVDaGFuZ2VkUHJvcGVydGllcyh0aGlzLm5lZWRQcm94eVByb3BlcnRpZXMpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHJlZ2lzdGVyVHJpZ2dlcnMoKTogdm9pZCB7XHJcbiAgICAvLyBXaGVuIHRoZSBtZXRob2QgZ2V0cyBpbnZva2VkLCBhbGwgcHJvcGVydGllcyBoYXMgYmVlbiBzeW5jZWQgdG8gdGhlIGR5bmFtaWMgY29tcG9uZW50LlxyXG4gICAgLy8gQWZ0ZXIgcmVtb3ZpbmcgdGhlIG9sZCBBUEksIHdlIGNhbiBqdXN0IGNoZWNrIHRoZSBkaXJlY3RpdmUncyBvd24gYG56VHJpZ2dlcmAuXHJcbiAgICBjb25zdCBlbCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgY29uc3QgdHJpZ2dlciA9IHRoaXMuaXNEeW5hbWljVG9vbHRpcCA/IHRoaXMudHJpZ2dlciA6IHRoaXMudG9vbHRpcC5uelRyaWdnZXI7XHJcblxyXG4gICAgdGhpcy5yZW1vdmVUcmlnZ2VyTGlzdGVuZXJzKCk7XHJcblxyXG4gICAgaWYgKHRyaWdnZXIgPT09ICdjbGljaycpIHtcclxuICAgICAgdGhpcy50cmlnZ2VyVW5saXN0ZW5lcnMucHVzaChcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbihlbCwgJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICB0aGlzLnNob3coKTtcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRyaWdnZXIgPT09ICdob3ZlcicgfHwgdHJpZ2dlciA9PT0gJ2NvbWJpbmVkJykge1xyXG4gICAgICAgIGxldCBvdmVybGF5RWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyVW5saXN0ZW5lcnMucHVzaChcclxuICAgICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKGVsLCAnbW91c2VlbnRlcicsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5kZWxheUVudGVyTGVhdmUodHJ1ZSwgdHJ1ZSwgdGhpcy50b29sdGlwLm56TW91c2VFbnRlckRlbGF5KTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnRyaWdnZXJVbmxpc3RlbmVycy5wdXNoKFxyXG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4oZWwsICdtb3VzZWxlYXZlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRlbGF5RW50ZXJMZWF2ZSh0cnVlLCBmYWxzZSwgdGhpcy50b29sdGlwLm56TW91c2VMZWF2ZURlbGF5KTtcclxuICAgICAgICAgICAgaWYgKHRoaXMudG9vbHRpcC5vdmVybGF5Lm92ZXJsYXlSZWYgJiYgIW92ZXJsYXlFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgb3ZlcmxheUVsZW1lbnQgPSB0aGlzLnRvb2x0aXAub3ZlcmxheS5vdmVybGF5UmVmLm92ZXJsYXlFbGVtZW50O1xyXG4gICAgICAgICAgICAgIHRoaXMudHJpZ2dlclVubGlzdGVuZXJzLnB1c2goXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbihvdmVybGF5RWxlbWVudCwgJ21vdXNlZW50ZXInLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuZGVsYXlFbnRlckxlYXZlKGZhbHNlLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB0aGlzLnRyaWdnZXJVbmxpc3RlbmVycy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4ob3ZlcmxheUVsZW1lbnQsICdtb3VzZWxlYXZlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmRlbGF5RW50ZXJMZWF2ZShmYWxzZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRyaWdnZXIgPT09ICdmb2N1cycgfHwgdHJpZ2dlciA9PT0gJ2NvbWJpbmVkJykge1xyXG4gICAgICAgIHRoaXMudHJpZ2dlclVubGlzdGVuZXJzLnB1c2godGhpcy5yZW5kZXJlci5saXN0ZW4oZWwsICdmb2N1cycsICgpID0+IHRoaXMuc2hvdygpKSk7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyVW5saXN0ZW5lcnMucHVzaCh0aGlzLnJlbmRlcmVyLmxpc3RlbihlbCwgJ2JsdXInLCAoKSA9PiB0aGlzLmhpZGUoKSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBFbHNlIGRvIG5vdGhpbmcgYmVjYXVzZSB1c2VyIHdhbnRzIHRvIGNvbnRyb2wgdGhlIHZpc2liaWxpdHkgcHJvZ3JhbW1hdGljYWxseS5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN5bmMgY2hhbmdlZCBwcm9wZXJ0aWVzIHRvIHRoZSBjb21wb25lbnQgYW5kIHRyaWdnZXIgY2hhbmdlIGRldGVjdGlvbiBpbiB0aGF0IGNvbXBvbmVudC5cclxuICAgKi9cclxuICBwcm90ZWN0ZWQgdXBkYXRlQ2hhbmdlZFByb3BlcnRpZXMocHJvcGVydGllc09yQ2hhbmdlczogc3RyaW5nW10gfCBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzT3JDaGFuZ2VzKTtcclxuICAgIGNvbnN0IGtleXNfID0gaXNBcnJheSA/IChwcm9wZXJ0aWVzT3JDaGFuZ2VzIGFzIHN0cmluZ1tdKSA6IE9iamVjdC5rZXlzKHByb3BlcnRpZXNPckNoYW5nZXMpO1xyXG5cclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1hbnlcclxuICAgIGtleXNfLmZvckVhY2goKHByb3BlcnR5OiBhbnkpID0+IHtcclxuICAgICAgaWYgKHRoaXMubmVlZFByb3h5UHJvcGVydGllcy5pbmRleE9mKHByb3BlcnR5KSAhPT0gLTEpIHtcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgdGhpcy51cGRhdGVDb21wb25lbnRWYWx1ZShwcm9wZXJ0eSwgdGhpc1twcm9wZXJ0eV0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoaXNBcnJheSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudFZhbHVlKCduelRpdGxlJywgdGhpcy50aXRsZSk7XHJcbiAgICAgIHRoaXMudXBkYXRlQ29tcG9uZW50VmFsdWUoJ256Q29udGVudCcsIHRoaXMuY29udGVudCk7XHJcbiAgICAgIHRoaXMudXBkYXRlQ29tcG9uZW50VmFsdWUoJ256UGxhY2VtZW50JywgdGhpcy5wbGFjZW1lbnQpO1xyXG4gICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudFZhbHVlKCduelRyaWdnZXInLCB0aGlzLnRyaWdnZXIpO1xyXG4gICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudFZhbHVlKCduelNob3dQb3BvdmVyQ2xvc2VCdXR0b24nLCB0aGlzLnNob3dQb3BvdmVyQ2xvc2VCdXR0b24pO1xyXG4gICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudFZhbHVlKCduelBvcG92ZXJDbG9zZUJ1dHRvbkxhYmVsJywgdGhpcy5wb3BvdmVyQ2xvc2VCdXR0b25MYWJlbCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBjID0gcHJvcGVydGllc09yQ2hhbmdlcyBhcyBTaW1wbGVDaGFuZ2VzO1xyXG4gICAgICBpZiAoYy5zcGVjaWZpY1RpdGxlIHx8IGMuZGlyZWN0aXZlTmFtZVRpdGxlIHx8IGMubnpUaXRsZSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ29tcG9uZW50VmFsdWUoJ256VGl0bGUnLCB0aGlzLnRpdGxlKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoYy5zcGVjaWZpY0NvbnRlbnQgfHwgYy5kaXJlY3RpdmVOYW1lQ29udGVudCB8fCBjLm56Q29udGVudCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ29tcG9uZW50VmFsdWUoJ256Q29udGVudCcsIHRoaXMuY29udGVudCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGMuc3BlY2lmaWNUcmlnZ2VyIHx8IGMubnpUcmlnZ2VyKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDb21wb25lbnRWYWx1ZSgnbnpUcmlnZ2VyJywgdGhpcy50cmlnZ2VyKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoYy5zcGVjaWZpY1BsYWNlbWVudCB8fCBjLm56UGxhY2VtZW50KSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDb21wb25lbnRWYWx1ZSgnbnpQbGFjZW1lbnQnLCB0aGlzLnBsYWNlbWVudCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGMuc2hvd0Nsb3NlQnV0dG9uKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDb21wb25lbnRWYWx1ZSgnbnpTaG93UG9wb3ZlckNsb3NlQnV0dG9uJywgdGhpcy5zaG93UG9wb3ZlckNsb3NlQnV0dG9uKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoYy5wb3BvdmVyQ2xvc2VCdXR0b25MYWJlbCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ29tcG9uZW50VmFsdWUoJ256UG9wb3ZlckNsb3NlQnV0dG9uTGFiZWwnLCB0aGlzLnBvcG92ZXJDbG9zZUJ1dHRvbkxhYmVsKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudG9vbHRpcC51cGRhdGVCeURpcmVjdGl2ZSgpO1xyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWFueVxyXG4gIHByaXZhdGUgdXBkYXRlQ29tcG9uZW50VmFsdWUoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgdGhpcy50b29sdGlwW2tleV0gPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGVsYXlFbnRlckxlYXZlKGlzT3JpZ2luOiBib29sZWFuLCBpc0VudGVyOiBib29sZWFuLCBkZWxheTogbnVtYmVyID0gLTEpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRlbGF5VGltZXIpIHtcclxuICAgICAgdGhpcy5jbGVhclRvZ2dsaW5nVGltZXIoKTtcclxuICAgIH0gZWxzZSBpZiAoZGVsYXkgPiAwKSB7XHJcbiAgICAgIHRoaXMuZGVsYXlUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZGVsYXlUaW1lciA9IHVuZGVmaW5lZDtcclxuICAgICAgICBpc0VudGVyID8gdGhpcy5zaG93KCkgOiB0aGlzLmhpZGUoKTtcclxuICAgICAgfSwgZGVsYXkgKiAxMDAwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGBpc09yaWdpbmAgaXMgdXNlZCBkdWUgdG8gdGhlIHRvb2x0aXAgd2lsbCBub3QgaGlkZSBpbW1lZGlhdGVseVxyXG4gICAgICAvLyAobWF5IGNhdXNlZCBieSB0aGUgZmFkZS1vdXQgYW5pbWF0aW9uKS5cclxuICAgICAgaXNFbnRlciAmJiBpc09yaWdpbiA/IHRoaXMuc2hvdygpIDogdGhpcy5oaWRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbW92ZVRyaWdnZXJMaXN0ZW5lcnMoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRyaWdnZXJVbmxpc3RlbmVycy5mb3JFYWNoKGNhbmNlbCA9PiBjYW5jZWwoKSk7XHJcbiAgICB0aGlzLnRyaWdnZXJVbmxpc3RlbmVycy5sZW5ndGggPSAwO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGVhclRvZ2dsaW5nVGltZXIoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kZWxheVRpbWVyKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRlbGF5VGltZXIpO1xyXG4gICAgICB0aGlzLmRlbGF5VGltZXIgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==