import { EventEmitter, Input, Output } from '@angular/core';
import { warnDeprecation } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
var NzTooltipBaseDirective = /** @class */ (function () {
    function NzTooltipBaseDirective(elementRef, hostView, resolver, renderer, noAnimation) {
        this.elementRef = elementRef;
        this.hostView = hostView;
        this.resolver = resolver;
        this.renderer = renderer;
        this.noAnimation = noAnimation;
        /**
         * @deprecated 10.0.0. This is deprecated and going to be removed in 10.0.0.
         * Please use a more specific API. Like `nzTooltipTrigger`.
         */
        this.nzTrigger = 'hover';
        /**
         * @deprecated 10.0.0. This is deprecated and going to be removed in 10.0.0.
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
        this.$destroy = new Subject();
        this.triggerDisposables = [];
    }
    Object.defineProperty(NzTooltipBaseDirective.prototype, "title", {
        /**
         * This true title that would be used in other parts on this component.
         */
        get: function () {
            return this.specificTitle || this.directiveNameTitle || this.nzTitle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTooltipBaseDirective.prototype, "content", {
        get: function () {
            return this.specificContent || this.directiveNameContent || this.nzContent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTooltipBaseDirective.prototype, "placement", {
        get: function () {
            return this.specificPlacement || this.nzPlacement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTooltipBaseDirective.prototype, "trigger", {
        get: function () {
            // NzTooltipTrigger can be null.
            return typeof this.specificTrigger !== 'undefined' ? this.specificTrigger : this.nzTrigger;
        },
        enumerable: true,
        configurable: true
    });
    NzTooltipBaseDirective.prototype.ngOnChanges = function (changes) {
        var nzTrigger = changes.nzTrigger, specificTrigger = changes.specificTrigger;
        var trigger = specificTrigger || nzTrigger;
        if (trigger && !trigger.isFirstChange()) {
            this.registerTriggers();
        }
        if (this.tooltip) {
            this.updateChangedProperties(changes);
        }
        if (changes.nzTitle) {
            warnDeprecation("'nzTitle' of 'nz-tooltip' is deprecated and will be removed in 10.0.0.\nPlease use 'nzTooltipTitle' instead. The same with 'nz-popover' and 'nz-popconfirm'.");
        }
        if (changes.nzContent) {
            warnDeprecation("'nzContent' of 'nz-popover' is deprecated and will be removed in 10.0.0.\nPlease use 'nzPopoverContent' instead.");
        }
        if (changes.nzPlacement) {
            warnDeprecation("'nzPlacement' of 'nz-tooltip' is deprecated and will be removed in 10.0.0.\nPlease use 'nzTooltipContent' instead. The same with 'nz-popover' and 'nz-popconfirm'.");
        }
        if (changes.nzTrigger) {
            warnDeprecation("'nzTrigger' of 'nz-tooltip' is deprecated and will be removed in 10.0.0.\nPlease use 'nzTooltipTrigger' instead. The same with 'nz-popover' and 'nz-popconfirm'.");
        }
    };
    NzTooltipBaseDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.createTooltipComponent();
        this.tooltip.nzVisibleChange.pipe(distinctUntilChanged(), takeUntil(this.$destroy)).subscribe(function (visible) {
            _this.isTooltipComponentVisible = visible;
            _this.nzVisibleChange.emit(visible);
        });
    };
    NzTooltipBaseDirective.prototype.ngAfterViewInit = function () {
        this.registerTriggers();
    };
    NzTooltipBaseDirective.prototype.ngOnDestroy = function () {
        this.$destroy.next();
        this.$destroy.complete();
        // Clear toggling timer. Issue #3875 #4317 #4386
        this.clearTogglingTimer();
        this.removeTriggerListeners();
    };
    NzTooltipBaseDirective.prototype.show = function () {
        this.tooltip.show();
    };
    NzTooltipBaseDirective.prototype.hide = function () {
        this.tooltip.hide();
    };
    /**
     * Force the component to update its position.
     */
    NzTooltipBaseDirective.prototype.updatePosition = function () {
        if (this.tooltip) {
            this.tooltip.updatePosition();
        }
    };
    /**
     * Create a dynamic tooltip component. This method can be override.
     */
    NzTooltipBaseDirective.prototype.createTooltipComponent = function () {
        var tooltipRef = this.hostView.createComponent(this.componentFactory);
        this.tooltip = tooltipRef.instance;
        // Remove the component's DOM because it should be in the overlay container.
        this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), tooltipRef.location.nativeElement);
        this.tooltip.setOverlayOrigin(this);
        this.updateChangedProperties(this.needProxyProperties);
    };
    NzTooltipBaseDirective.prototype.registerTriggers = function () {
        var _this = this;
        // When the method gets invoked, all properties has been synced to the dynamic component.
        // After removing the old API, we can just check the directive's own `nzTrigger`.
        var el = this.elementRef.nativeElement;
        var trigger = this.trigger;
        this.removeTriggerListeners();
        if (trigger === 'hover') {
            var overlayElement_1;
            this.triggerDisposables.push(this.renderer.listen(el, 'mouseenter', function () {
                _this.delayEnterLeave(true, true, _this.tooltip.nzMouseEnterDelay);
            }));
            this.triggerDisposables.push(this.renderer.listen(el, 'mouseleave', function () {
                _this.delayEnterLeave(true, false, _this.tooltip.nzMouseLeaveDelay);
                if (_this.tooltip.overlay.overlayRef && !overlayElement_1) {
                    overlayElement_1 = _this.tooltip.overlay.overlayRef.overlayElement;
                    _this.triggerDisposables.push(_this.renderer.listen(overlayElement_1, 'mouseenter', function () {
                        _this.delayEnterLeave(false, true);
                    }));
                    _this.triggerDisposables.push(_this.renderer.listen(overlayElement_1, 'mouseleave', function () {
                        _this.delayEnterLeave(false, false);
                    }));
                }
            }));
        }
        else if (trigger === 'focus') {
            this.triggerDisposables.push(this.renderer.listen(el, 'focus', function () { return _this.show(); }));
            this.triggerDisposables.push(this.renderer.listen(el, 'blur', function () { return _this.hide(); }));
        }
        else if (trigger === 'click') {
            this.triggerDisposables.push(this.renderer.listen(el, 'click', function (e) {
                e.preventDefault();
                _this.show();
            }));
        } // Else do nothing because user wants to control the visibility programmatically.
    };
    /**
     * Sync changed properties to the component and trigger change detection in that component.
     */
    NzTooltipBaseDirective.prototype.updateChangedProperties = function (propertiesOrChanges) {
        var _this = this;
        var isArray = Array.isArray(propertiesOrChanges);
        var keys = isArray ? propertiesOrChanges : Object.keys(propertiesOrChanges);
        // tslint:disable-next-line no-any
        keys.forEach(function (property) {
            if (_this.needProxyProperties.indexOf(property) !== -1) {
                // @ts-ignore
                _this.updateComponentValue(property, _this[property]);
            }
        });
        if (isArray) {
            this.updateComponentValue('nzTitle', this.title);
            this.updateComponentValue('nzContent', this.content);
            this.updateComponentValue('nzPlacement', this.placement);
            this.updateComponentValue('nzTrigger', this.trigger);
        }
        else {
            var c = propertiesOrChanges;
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
    };
    // tslint:disable-next-line no-any
    NzTooltipBaseDirective.prototype.updateComponentValue = function (key, value) {
        if (typeof value !== 'undefined') {
            // @ts-ignore
            this.tooltip[key] = value;
        }
    };
    NzTooltipBaseDirective.prototype.delayEnterLeave = function (isOrigin, isEnter, delay) {
        var _this = this;
        if (delay === void 0) { delay = -1; }
        if (this.delayTimer) {
            this.clearTogglingTimer();
        }
        else if (delay > 0) {
            this.delayTimer = setTimeout(function () {
                _this.delayTimer = undefined;
                isEnter ? _this.show() : _this.hide();
            }, delay * 1000);
        }
        else {
            // `isOrigin` is used due to the tooltip will not hide immediately
            // (may caused by the fade-out animation).
            isEnter && isOrigin ? this.show() : this.hide();
        }
    };
    NzTooltipBaseDirective.prototype.removeTriggerListeners = function () {
        this.triggerDisposables.forEach(function (dispose) { return dispose(); });
        this.triggerDisposables.length = 0;
    };
    NzTooltipBaseDirective.prototype.clearTogglingTimer = function () {
        if (this.delayTimer) {
            clearTimeout(this.delayTimer);
            this.delayTimer = undefined;
        }
    };
    /** @nocollapse */ NzTooltipBaseDirective.ɵfac = function NzTooltipBaseDirective_Factory(t) { return new (t || NzTooltipBaseDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.NzNoAnimationDirective)); };
    /** @nocollapse */ NzTooltipBaseDirective.ɵdir = i0.ɵɵdefineDirective({ type: NzTooltipBaseDirective, inputs: { nzTitle: "nzTitle", nzContent: "nzContent", nzTrigger: "nzTrigger", nzPlacement: "nzPlacement", nzMouseEnterDelay: "nzMouseEnterDelay", nzMouseLeaveDelay: "nzMouseLeaveDelay", nzOverlayClassName: "nzOverlayClassName", nzOverlayStyle: "nzOverlayStyle", nzVisible: "nzVisible" }, outputs: { nzVisibleChange: "nzVisibleChange" }, features: [i0.ɵɵNgOnChangesFeature()] });
    return NzTooltipBaseDirective;
}());
export { NzTooltipBaseDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdG9vbHRpcC1iYXNlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdG9vbHRpcC8iLCJzb3VyY2VzIjpbIm56LXRvb2x0aXAtYmFzZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0EsT0FBTyxFQUtMLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUlQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBc0QsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDekcsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUtqRTtJQWtGRSxnQ0FDUyxVQUFzQixFQUNuQixRQUEwQixFQUMxQixRQUFrQyxFQUNsQyxRQUFtQixFQUNuQixXQUFvQztRQUp2QyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ25CLGFBQVEsR0FBUixRQUFRLENBQWtCO1FBQzFCLGFBQVEsR0FBUixRQUFRLENBQTBCO1FBQ2xDLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsZ0JBQVcsR0FBWCxXQUFXLENBQXlCO1FBbkVoRDs7O1dBR0c7UUFDTSxjQUFTLEdBQXFCLE9BQU8sQ0FBQztRQUUvQzs7O1dBR0c7UUFDTSxnQkFBVyxHQUFXLEtBQUssQ0FBQztRQWlDM0Isd0JBQW1CLEdBQUc7WUFDOUIsb0JBQW9CO1lBQ3BCLGdCQUFnQjtZQUNoQixtQkFBbUI7WUFDbkIsbUJBQW1CO1lBQ25CLFdBQVc7WUFDWCxhQUFhO1NBQ2QsQ0FBQztRQUVpQixvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFFakUsOEJBQXlCLEdBQUcsS0FBSyxDQUFDO1FBR2YsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFDL0IsdUJBQWtCLEdBQXNCLEVBQUUsQ0FBQztJQVUzRCxDQUFDO0lBMUNKLHNCQUFj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QXNCOytEQUF0QixzQkFBc0I7aUNBL0I1QztDQThVQyxBQS9TRCxJQStTQztTQS9TcUIsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBDZGtPdmVybGF5T3JpZ2luIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ29tcG9uZW50RmFjdG9yeSxcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdTdHlsZUludGVyZmFjZSwgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSwgTnpUU1R5cGUsIHdhcm5EZXByZWNhdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IE56VG9vbHRpcEJhc2VDb21wb25lbnQgfSBmcm9tICcuL256LXRvb2x0aXAtYmFzZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOelRvb2x0aXBUcmlnZ2VyIH0gZnJvbSAnLi9uei10b29sdGlwLmRlZmluaXRpb25zJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBOelRvb2x0aXBCYXNlRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgZGlyZWN0aXZlTmFtZVRpdGxlPzogTnpUU1R5cGUgfCBudWxsO1xyXG4gIHNwZWNpZmljVGl0bGU/OiBOelRTVHlwZSB8IG51bGw7XHJcbiAgZGlyZWN0aXZlTmFtZUNvbnRlbnQ/OiBOelRTVHlwZSB8IG51bGw7XHJcbiAgc3BlY2lmaWNDb250ZW50PzogTnpUU1R5cGUgfCBudWxsO1xyXG4gIHNwZWNpZmljVHJpZ2dlcj86IE56VG9vbHRpcFRyaWdnZXI7XHJcbiAgc3BlY2lmaWNQbGFjZW1lbnQ/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXByZWNhdGVkIDEwLjAuMC4gVGhpcyBpcyBkZXByZWNhdGVkIGFuZCBnb2luZyB0byBiZSByZW1vdmVkIGluIDEwLjAuMC5cclxuICAgKiBQbGVhc2UgdXNlIGEgbW9yZSBzcGVjaWZpYyBBUEkuIExpa2UgYG56VG9vbHRpcFRpdGxlYC5cclxuICAgKi9cclxuICBASW5wdXQoKSBuelRpdGxlOiBOelRTVHlwZSB8IG51bGw7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXByZWNhdGVkIDEwLjAuMC4gVGhpcyBpcyBkZXByZWNhdGVkIGFuZCBnb2luZyB0byBiZSByZW1vdmVkIGluIDEwLjAuMC5cclxuICAgKiBQbGVhc2UgdXNlIGEgbW9yZSBzcGVjaWZpYyBBUEkuIExpa2UgYG56UG9wb3ZlckNvbnRlbnRgLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIG56Q29udGVudDogTnpUU1R5cGUgfCBudWxsO1xyXG5cclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCAxMC4wLjAuIFRoaXMgaXMgZGVwcmVjYXRlZCBhbmQgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiAxMC4wLjAuXHJcbiAgICogUGxlYXNlIHVzZSBhIG1vcmUgc3BlY2lmaWMgQVBJLiBMaWtlIGBuelRvb2x0aXBUcmlnZ2VyYC5cclxuICAgKi9cclxuICBASW5wdXQoKSBuelRyaWdnZXI6IE56VG9vbHRpcFRyaWdnZXIgPSAnaG92ZXInO1xyXG5cclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCAxMC4wLjAuIFRoaXMgaXMgZGVwcmVjYXRlZCBhbmQgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiAxMC4wLjAuXHJcbiAgICogUGxlYXNlIHVzZSBhIG1vcmUgc3BlY2lmaWMgQVBJLiBMaWtlIGBuelRvb2x0aXBQbGFjZW1lbnRgLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIG56UGxhY2VtZW50OiBzdHJpbmcgPSAndG9wJztcclxuXHJcbiAgQElucHV0KCkgbnpNb3VzZUVudGVyRGVsYXk6IG51bWJlcjtcclxuICBASW5wdXQoKSBuek1vdXNlTGVhdmVEZWxheTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIG56T3ZlcmxheUNsYXNzTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56T3ZlcmxheVN0eWxlOiBOZ1N0eWxlSW50ZXJmYWNlO1xyXG4gIEBJbnB1dCgpIG56VmlzaWJsZTogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogRm9yIGNyZWF0ZSB0b29sdGlwIGR5bmFtaWNhbGx5LiBUaGlzIHNob3VsZCBiZSBvdmVycmlkZSBmb3IgZWFjaCBkaWZmZXJlbnQgY29tcG9uZW50LlxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBjb21wb25lbnRGYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PE56VG9vbHRpcEJhc2VDb21wb25lbnQ+O1xyXG5cclxuICAvKipcclxuICAgKiBUaGlzIHRydWUgdGl0bGUgdGhhdCB3b3VsZCBiZSB1c2VkIGluIG90aGVyIHBhcnRzIG9uIHRoaXMgY29tcG9uZW50LlxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBnZXQgdGl0bGUoKTogTnpUU1R5cGUgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLnNwZWNpZmljVGl0bGUgfHwgdGhpcy5kaXJlY3RpdmVOYW1lVGl0bGUgfHwgdGhpcy5uelRpdGxlO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGdldCBjb250ZW50KCk6IE56VFNUeXBlIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5zcGVjaWZpY0NvbnRlbnQgfHwgdGhpcy5kaXJlY3RpdmVOYW1lQ29udGVudCB8fCB0aGlzLm56Q29udGVudDtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBnZXQgcGxhY2VtZW50KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5zcGVjaWZpY1BsYWNlbWVudCB8fCB0aGlzLm56UGxhY2VtZW50O1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGdldCB0cmlnZ2VyKCk6IE56VG9vbHRpcFRyaWdnZXIge1xyXG4gICAgLy8gTnpUb29sdGlwVHJpZ2dlciBjYW4gYmUgbnVsbC5cclxuICAgIHJldHVybiB0eXBlb2YgdGhpcy5zcGVjaWZpY1RyaWdnZXIgIT09ICd1bmRlZmluZWQnID8gdGhpcy5zcGVjaWZpY1RyaWdnZXIgOiB0aGlzLm56VHJpZ2dlcjtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBuZWVkUHJveHlQcm9wZXJ0aWVzID0gW1xyXG4gICAgJ256T3ZlcmxheUNsYXNzTmFtZScsXHJcbiAgICAnbnpPdmVybGF5U3R5bGUnLFxyXG4gICAgJ256TW91c2VFbnRlckRlbGF5JyxcclxuICAgICduek1vdXNlTGVhdmVEZWxheScsXHJcbiAgICAnbnpWaXNpYmxlJyxcclxuICAgICdub0FuaW1hdGlvbidcclxuICBdO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpWaXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBpc1Rvb2x0aXBDb21wb25lbnRWaXNpYmxlID0gZmFsc2U7XHJcbiAgdG9vbHRpcDogTnpUb29sdGlwQmFzZUNvbXBvbmVudDtcclxuXHJcbiAgcHJvdGVjdGVkIHJlYWRvbmx5ICRkZXN0cm95ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgdHJpZ2dlckRpc3Bvc2FibGVzOiBBcnJheTwoKSA9PiB2b2lkPiA9IFtdO1xyXG5cclxuICBwcml2YXRlIGRlbGF5VGltZXI/OiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcm90ZWN0ZWQgaG9zdFZpZXc6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBwcm90ZWN0ZWQgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJvdGVjdGVkIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG4gICkge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3QgeyBuelRyaWdnZXIsIHNwZWNpZmljVHJpZ2dlciB9ID0gY2hhbmdlcztcclxuICAgIGNvbnN0IHRyaWdnZXIgPSBzcGVjaWZpY1RyaWdnZXIgfHwgbnpUcmlnZ2VyO1xyXG5cclxuICAgIGlmICh0cmlnZ2VyICYmICF0cmlnZ2VyLmlzRmlyc3RDaGFuZ2UoKSkge1xyXG4gICAgICB0aGlzLnJlZ2lzdGVyVHJpZ2dlcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy50b29sdGlwKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlQ2hhbmdlZFByb3BlcnRpZXMoY2hhbmdlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZXMubnpUaXRsZSkge1xyXG4gICAgICB3YXJuRGVwcmVjYXRpb24oXHJcbiAgICAgICAgYCduelRpdGxlJyBvZiAnbnotdG9vbHRpcCcgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIDEwLjAuMC5cclxuUGxlYXNlIHVzZSAnbnpUb29sdGlwVGl0bGUnIGluc3RlYWQuIFRoZSBzYW1lIHdpdGggJ256LXBvcG92ZXInIGFuZCAnbnotcG9wY29uZmlybScuYFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VzLm56Q29udGVudCkge1xyXG4gICAgICB3YXJuRGVwcmVjYXRpb24oXHJcbiAgICAgICAgYCduekNvbnRlbnQnIG9mICduei1wb3BvdmVyJyBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gMTAuMC4wLlxyXG5QbGVhc2UgdXNlICduelBvcG92ZXJDb250ZW50JyBpbnN0ZWFkLmBcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2hhbmdlcy5uelBsYWNlbWVudCkge1xyXG4gICAgICB3YXJuRGVwcmVjYXRpb24oXHJcbiAgICAgICAgYCduelBsYWNlbWVudCcgb2YgJ256LXRvb2x0aXAnIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAxMC4wLjAuXHJcblBsZWFzZSB1c2UgJ256VG9vbHRpcENvbnRlbnQnIGluc3RlYWQuIFRoZSBzYW1lIHdpdGggJ256LXBvcG92ZXInIGFuZCAnbnotcG9wY29uZmlybScuYFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VzLm56VHJpZ2dlcikge1xyXG4gICAgICB3YXJuRGVwcmVjYXRpb24oXHJcbiAgICAgICAgYCduelRyaWdnZXInIG9mICduei10b29sdGlwJyBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gMTAuMC4wLlxyXG5QbGVhc2UgdXNlICduelRvb2x0aXBUcmlnZ2VyJyBpbnN0ZWFkLiBUaGUgc2FtZSB3aXRoICduei1wb3BvdmVyJyBhbmQgJ256LXBvcGNvbmZpcm0nLmBcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jcmVhdGVUb29sdGlwQ29tcG9uZW50KCk7XHJcbiAgICB0aGlzLnRvb2x0aXAubnpWaXNpYmxlQ2hhbmdlLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSwgdGFrZVVudGlsKHRoaXMuJGRlc3Ryb3kpKS5zdWJzY3JpYmUoKHZpc2libGU6IGJvb2xlYW4pID0+IHtcclxuICAgICAgdGhpcy5pc1Rvb2x0aXBDb21wb25lbnRWaXNpYmxlID0gdmlzaWJsZTtcclxuICAgICAgdGhpcy5uelZpc2libGVDaGFuZ2UuZW1pdCh2aXNpYmxlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZWdpc3RlclRyaWdnZXJzKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuJGRlc3Ryb3kubmV4dCgpO1xyXG4gICAgdGhpcy4kZGVzdHJveS5jb21wbGV0ZSgpO1xyXG5cclxuICAgIC8vIENsZWFyIHRvZ2dsaW5nIHRpbWVyLiBJc3N1ZSAjMzg3NSAjNDMxNyAjNDM4NlxyXG4gICAgdGhpcy5jbGVhclRvZ2dsaW5nVGltZXIoKTtcclxuICAgIHRoaXMucmVtb3ZlVHJpZ2dlckxpc3RlbmVycygpO1xyXG4gIH1cclxuXHJcbiAgc2hvdygpOiB2b2lkIHtcclxuICAgIHRoaXMudG9vbHRpcC5zaG93KCk7XHJcbiAgfVxyXG5cclxuICBoaWRlKCk6IHZvaWQge1xyXG4gICAgdGhpcy50b29sdGlwLmhpZGUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZvcmNlIHRoZSBjb21wb25lbnQgdG8gdXBkYXRlIGl0cyBwb3NpdGlvbi5cclxuICAgKi9cclxuICB1cGRhdGVQb3NpdGlvbigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnRvb2x0aXApIHtcclxuICAgICAgdGhpcy50b29sdGlwLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYSBkeW5hbWljIHRvb2x0aXAgY29tcG9uZW50LiBUaGlzIG1ldGhvZCBjYW4gYmUgb3ZlcnJpZGUuXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIGNyZWF0ZVRvb2x0aXBDb21wb25lbnQoKTogdm9pZCB7XHJcbiAgICBjb25zdCB0b29sdGlwUmVmID0gdGhpcy5ob3N0Vmlldy5jcmVhdGVDb21wb25lbnQodGhpcy5jb21wb25lbnRGYWN0b3J5KTtcclxuXHJcbiAgICB0aGlzLnRvb2x0aXAgPSB0b29sdGlwUmVmLmluc3RhbmNlO1xyXG5cclxuICAgIC8vIFJlbW92ZSB0aGUgY29tcG9uZW50J3MgRE9NIGJlY2F1c2UgaXQgc2hvdWxkIGJlIGluIHRoZSBvdmVybGF5IGNvbnRhaW5lci5cclxuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy5yZW5kZXJlci5wYXJlbnROb2RlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSwgdG9vbHRpcFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50KTtcclxuICAgIHRoaXMudG9vbHRpcC5zZXRPdmVybGF5T3JpZ2luKHRoaXMgYXMgQ2RrT3ZlcmxheU9yaWdpbik7XHJcblxyXG4gICAgdGhpcy51cGRhdGVDaGFuZ2VkUHJvcGVydGllcyh0aGlzLm5lZWRQcm94eVByb3BlcnRpZXMpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHJlZ2lzdGVyVHJpZ2dlcnMoKTogdm9pZCB7XHJcbiAgICAvLyBXaGVuIHRoZSBtZXRob2QgZ2V0cyBpbnZva2VkLCBhbGwgcHJvcGVydGllcyBoYXMgYmVlbiBzeW5jZWQgdG8gdGhlIGR5bmFtaWMgY29tcG9uZW50LlxyXG4gICAgLy8gQWZ0ZXIgcmVtb3ZpbmcgdGhlIG9sZCBBUEksIHdlIGNhbiBqdXN0IGNoZWNrIHRoZSBkaXJlY3RpdmUncyBvd24gYG56VHJpZ2dlcmAuXHJcbiAgICBjb25zdCBlbCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgY29uc3QgdHJpZ2dlciA9IHRoaXMudHJpZ2dlcjtcclxuXHJcbiAgICB0aGlzLnJlbW92ZVRyaWdnZXJMaXN0ZW5lcnMoKTtcclxuXHJcbiAgICBpZiAodHJpZ2dlciA9PT0gJ2hvdmVyJykge1xyXG4gICAgICBsZXQgb3ZlcmxheUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgICB0aGlzLnRyaWdnZXJEaXNwb3NhYmxlcy5wdXNoKFxyXG4gICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKGVsLCAnbW91c2VlbnRlcicsICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZGVsYXlFbnRlckxlYXZlKHRydWUsIHRydWUsIHRoaXMudG9vbHRpcC5uek1vdXNlRW50ZXJEZWxheSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgICAgdGhpcy50cmlnZ2VyRGlzcG9zYWJsZXMucHVzaChcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbihlbCwgJ21vdXNlbGVhdmUnLCAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmRlbGF5RW50ZXJMZWF2ZSh0cnVlLCBmYWxzZSwgdGhpcy50b29sdGlwLm56TW91c2VMZWF2ZURlbGF5KTtcclxuICAgICAgICAgIGlmICh0aGlzLnRvb2x0aXAub3ZlcmxheS5vdmVybGF5UmVmICYmICFvdmVybGF5RWxlbWVudCkge1xyXG4gICAgICAgICAgICBvdmVybGF5RWxlbWVudCA9IHRoaXMudG9vbHRpcC5vdmVybGF5Lm92ZXJsYXlSZWYub3ZlcmxheUVsZW1lbnQ7XHJcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlckRpc3Bvc2FibGVzLnB1c2goXHJcbiAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4ob3ZlcmxheUVsZW1lbnQsICdtb3VzZWVudGVyJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWxheUVudGVyTGVhdmUoZmFsc2UsIHRydWUpO1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlckRpc3Bvc2FibGVzLnB1c2goXHJcbiAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4ob3ZlcmxheUVsZW1lbnQsICdtb3VzZWxlYXZlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWxheUVudGVyTGVhdmUoZmFsc2UsIGZhbHNlKTtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2UgaWYgKHRyaWdnZXIgPT09ICdmb2N1cycpIHtcclxuICAgICAgdGhpcy50cmlnZ2VyRGlzcG9zYWJsZXMucHVzaCh0aGlzLnJlbmRlcmVyLmxpc3RlbihlbCwgJ2ZvY3VzJywgKCkgPT4gdGhpcy5zaG93KCkpKTtcclxuICAgICAgdGhpcy50cmlnZ2VyRGlzcG9zYWJsZXMucHVzaCh0aGlzLnJlbmRlcmVyLmxpc3RlbihlbCwgJ2JsdXInLCAoKSA9PiB0aGlzLmhpZGUoKSkpO1xyXG4gICAgfSBlbHNlIGlmICh0cmlnZ2VyID09PSAnY2xpY2snKSB7XHJcbiAgICAgIHRoaXMudHJpZ2dlckRpc3Bvc2FibGVzLnB1c2goXHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4oZWwsICdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH0gLy8gRWxzZSBkbyBub3RoaW5nIGJlY2F1c2UgdXNlciB3YW50cyB0byBjb250cm9sIHRoZSB2aXNpYmlsaXR5IHByb2dyYW1tYXRpY2FsbHkuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTeW5jIGNoYW5nZWQgcHJvcGVydGllcyB0byB0aGUgY29tcG9uZW50IGFuZCB0cmlnZ2VyIGNoYW5nZSBkZXRlY3Rpb24gaW4gdGhhdCBjb21wb25lbnQuXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIHVwZGF0ZUNoYW5nZWRQcm9wZXJ0aWVzKHByb3BlcnRpZXNPckNoYW5nZXM6IHN0cmluZ1tdIHwgU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkocHJvcGVydGllc09yQ2hhbmdlcyk7XHJcbiAgICBjb25zdCBrZXlzID0gaXNBcnJheSA/IChwcm9wZXJ0aWVzT3JDaGFuZ2VzIGFzIHN0cmluZ1tdKSA6IE9iamVjdC5rZXlzKHByb3BlcnRpZXNPckNoYW5nZXMpO1xyXG5cclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1hbnlcclxuICAgIGtleXMuZm9yRWFjaCgocHJvcGVydHk6IGFueSkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5uZWVkUHJveHlQcm9wZXJ0aWVzLmluZGV4T2YocHJvcGVydHkpICE9PSAtMSkge1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudFZhbHVlKHByb3BlcnR5LCB0aGlzW3Byb3BlcnR5XSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChpc0FycmF5KSB7XHJcbiAgICAgIHRoaXMudXBkYXRlQ29tcG9uZW50VmFsdWUoJ256VGl0bGUnLCB0aGlzLnRpdGxlKTtcclxuICAgICAgdGhpcy51cGRhdGVDb21wb25lbnRWYWx1ZSgnbnpDb250ZW50JywgdGhpcy5jb250ZW50KTtcclxuICAgICAgdGhpcy51cGRhdGVDb21wb25lbnRWYWx1ZSgnbnpQbGFjZW1lbnQnLCB0aGlzLnBsYWNlbWVudCk7XHJcbiAgICAgIHRoaXMudXBkYXRlQ29tcG9uZW50VmFsdWUoJ256VHJpZ2dlcicsIHRoaXMudHJpZ2dlcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBjID0gcHJvcGVydGllc09yQ2hhbmdlcyBhcyBTaW1wbGVDaGFuZ2VzO1xyXG4gICAgICBpZiAoYy5zcGVjaWZpY1RpdGxlIHx8IGMuZGlyZWN0aXZlTmFtZVRpdGxlIHx8IGMubnpUaXRsZSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ29tcG9uZW50VmFsdWUoJ256VGl0bGUnLCB0aGlzLnRpdGxlKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoYy5zcGVjaWZpY0NvbnRlbnQgfHwgYy5kaXJlY3RpdmVOYW1lQ29udGVudCB8fCBjLm56Q29udGVudCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ29tcG9uZW50VmFsdWUoJ256Q29udGVudCcsIHRoaXMuY29udGVudCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGMuc3BlY2lmaWNUcmlnZ2VyIHx8IGMubnpUcmlnZ2VyKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDb21wb25lbnRWYWx1ZSgnbnpUcmlnZ2VyJywgdGhpcy50cmlnZ2VyKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoYy5zcGVjaWZpY1BsYWNlbWVudCB8fCBjLm56UGxhY2VtZW50KSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDb21wb25lbnRWYWx1ZSgnbnpQbGFjZW1lbnQnLCB0aGlzLnBsYWNlbWVudCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnRvb2x0aXAudXBkYXRlQnlEaXJlY3RpdmUoKTtcclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1hbnlcclxuICBwcml2YXRlIHVwZGF0ZUNvbXBvbmVudFZhbHVlKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgIHRoaXMudG9vbHRpcFtrZXldID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRlbGF5RW50ZXJMZWF2ZShpc09yaWdpbjogYm9vbGVhbiwgaXNFbnRlcjogYm9vbGVhbiwgZGVsYXk6IG51bWJlciA9IC0xKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kZWxheVRpbWVyKSB7XHJcbiAgICAgIHRoaXMuY2xlYXJUb2dnbGluZ1RpbWVyKCk7XHJcbiAgICB9IGVsc2UgaWYgKGRlbGF5ID4gMCkge1xyXG4gICAgICB0aGlzLmRlbGF5VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLmRlbGF5VGltZXIgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgaXNFbnRlciA/IHRoaXMuc2hvdygpIDogdGhpcy5oaWRlKCk7XHJcbiAgICAgIH0sIGRlbGF5ICogMTAwMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBgaXNPcmlnaW5gIGlzIHVzZWQgZHVlIHRvIHRoZSB0b29sdGlwIHdpbGwgbm90IGhpZGUgaW1tZWRpYXRlbHlcclxuICAgICAgLy8gKG1heSBjYXVzZWQgYnkgdGhlIGZhZGUtb3V0IGFuaW1hdGlvbikuXHJcbiAgICAgIGlzRW50ZXIgJiYgaXNPcmlnaW4gPyB0aGlzLnNob3coKSA6IHRoaXMuaGlkZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVUcmlnZ2VyTGlzdGVuZXJzKCk6IHZvaWQge1xyXG4gICAgdGhpcy50cmlnZ2VyRGlzcG9zYWJsZXMuZm9yRWFjaChkaXNwb3NlID0+IGRpc3Bvc2UoKSk7XHJcbiAgICB0aGlzLnRyaWdnZXJEaXNwb3NhYmxlcy5sZW5ndGggPSAwO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGVhclRvZ2dsaW5nVGltZXIoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kZWxheVRpbWVyKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRlbGF5VGltZXIpO1xyXG4gICAgICB0aGlzLmRlbGF5VGltZXIgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==