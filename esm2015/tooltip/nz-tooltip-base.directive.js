import { EventEmitter, Input, Output } from '@angular/core';
import { warnDeprecation } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
export class NzTooltipBaseDirective {
    constructor(elementRef, hostView, resolver, renderer, noAnimation) {
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
    /**
     * This true title that would be used in other parts on this component.
     */
    get title() {
        return this.specificTitle || this.directiveNameTitle || this.nzTitle;
    }
    get content() {
        return this.specificContent || this.directiveNameContent || this.nzContent;
    }
    get placement() {
        return this.specificPlacement || this.nzPlacement;
    }
    get trigger() {
        // NzTooltipTrigger can be null.
        return typeof this.specificTrigger !== 'undefined' ? this.specificTrigger : this.nzTrigger;
    }
    ngOnChanges(changes) {
        const { nzTrigger, specificTrigger } = changes;
        const trigger = specificTrigger || nzTrigger;
        if (trigger && !trigger.isFirstChange()) {
            this.registerTriggers();
        }
        if (this.tooltip) {
            this.updateChangedProperties(changes);
        }
        if (changes.nzTitle) {
            warnDeprecation(`'nzTitle' of 'nz-tooltip' is deprecated and will be removed in 10.0.0.
Please use 'nzTooltipTitle' instead. The same with 'nz-popover' and 'nz-popconfirm'.`);
        }
        if (changes.nzContent) {
            warnDeprecation(`'nzContent' of 'nz-popover' is deprecated and will be removed in 10.0.0.
Please use 'nzPopoverContent' instead.`);
        }
        if (changes.nzPlacement) {
            warnDeprecation(`'nzPlacement' of 'nz-tooltip' is deprecated and will be removed in 10.0.0.
Please use 'nzTooltipContent' instead. The same with 'nz-popover' and 'nz-popconfirm'.`);
        }
        if (changes.nzTrigger) {
            warnDeprecation(`'nzTrigger' of 'nz-tooltip' is deprecated and will be removed in 10.0.0.
Please use 'nzTooltipTrigger' instead. The same with 'nz-popover' and 'nz-popconfirm'.`);
        }
    }
    ngOnInit() {
        this.createTooltipComponent();
        this.tooltip.nzVisibleChange.pipe(distinctUntilChanged(), takeUntil(this.$destroy)).subscribe((visible) => {
            this.isTooltipComponentVisible = visible;
            this.nzVisibleChange.emit(visible);
        });
    }
    ngAfterViewInit() {
        this.registerTriggers();
    }
    ngOnDestroy() {
        this.$destroy.next();
        this.$destroy.complete();
        // Clear toggling timer. Issue #3875 #4317 #4386
        this.clearTogglingTimer();
        this.removeTriggerListeners();
    }
    show() {
        this.tooltip.show();
    }
    hide() {
        this.tooltip.hide();
    }
    /**
     * Force the component to update its position.
     */
    updatePosition() {
        if (this.tooltip) {
            this.tooltip.updatePosition();
        }
    }
    /**
     * Create a dynamic tooltip component. This method can be override.
     */
    createTooltipComponent() {
        const tooltipRef = this.hostView.createComponent(this.componentFactory);
        this.tooltip = tooltipRef.instance;
        // Remove the component's DOM because it should be in the overlay container.
        this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), tooltipRef.location.nativeElement);
        this.tooltip.setOverlayOrigin(this);
        this.updateChangedProperties(this.needProxyProperties);
    }
    registerTriggers() {
        // When the method gets invoked, all properties has been synced to the dynamic component.
        // After removing the old API, we can just check the directive's own `nzTrigger`.
        const el = this.elementRef.nativeElement;
        const trigger = this.trigger;
        this.removeTriggerListeners();
        if (trigger === 'hover') {
            let overlayElement;
            this.triggerDisposables.push(this.renderer.listen(el, 'mouseenter', () => {
                this.delayEnterLeave(true, true, this.tooltip.nzMouseEnterDelay);
            }));
            this.triggerDisposables.push(this.renderer.listen(el, 'mouseleave', () => {
                this.delayEnterLeave(true, false, this.tooltip.nzMouseLeaveDelay);
                if (this.tooltip.overlay.overlayRef && !overlayElement) {
                    overlayElement = this.tooltip.overlay.overlayRef.overlayElement;
                    this.triggerDisposables.push(this.renderer.listen(overlayElement, 'mouseenter', () => {
                        this.delayEnterLeave(false, true);
                    }));
                    this.triggerDisposables.push(this.renderer.listen(overlayElement, 'mouseleave', () => {
                        this.delayEnterLeave(false, false);
                    }));
                }
            }));
        }
        else if (trigger === 'focus') {
            this.triggerDisposables.push(this.renderer.listen(el, 'focus', () => this.show()));
            this.triggerDisposables.push(this.renderer.listen(el, 'blur', () => this.hide()));
        }
        else if (trigger === 'click') {
            this.triggerDisposables.push(this.renderer.listen(el, 'click', e => {
                e.preventDefault();
                this.show();
            }));
        } // Else do nothing because user wants to control the visibility programmatically.
    }
    /**
     * Sync changed properties to the component and trigger change detection in that component.
     */
    updateChangedProperties(propertiesOrChanges) {
        const isArray = Array.isArray(propertiesOrChanges);
        const keys = isArray ? propertiesOrChanges : Object.keys(propertiesOrChanges);
        // tslint:disable-next-line no-any
        keys.forEach((property) => {
            if (this.needProxyProperties.indexOf(property) !== -1) {
                // @ts-ignore
                this.updateComponentValue(property, this[property]);
            }
        });
        if (isArray) {
            this.updateComponentValue('nzTitle', this.title);
            this.updateComponentValue('nzContent', this.content);
            this.updateComponentValue('nzPlacement', this.placement);
            this.updateComponentValue('nzTrigger', this.trigger);
        }
        else {
            const c = propertiesOrChanges;
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
    updateComponentValue(key, value) {
        if (typeof value !== 'undefined') {
            // @ts-ignore
            this.tooltip[key] = value;
        }
    }
    delayEnterLeave(isOrigin, isEnter, delay = -1) {
        if (this.delayTimer) {
            this.clearTogglingTimer();
        }
        else if (delay > 0) {
            this.delayTimer = setTimeout(() => {
                this.delayTimer = undefined;
                isEnter ? this.show() : this.hide();
            }, delay * 1000);
        }
        else {
            // `isOrigin` is used due to the tooltip will not hide immediately
            // (may caused by the fade-out animation).
            isEnter && isOrigin ? this.show() : this.hide();
        }
    }
    removeTriggerListeners() {
        this.triggerDisposables.forEach(dispose => dispose());
        this.triggerDisposables.length = 0;
    }
    clearTogglingTimer() {
        if (this.delayTimer) {
            clearTimeout(this.delayTimer);
            this.delayTimer = undefined;
        }
    }
}
/** @nocollapse */ NzTooltipBaseDirective.ɵfac = function NzTooltipBaseDirective_Factory(t) { return new (t || NzTooltipBaseDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.NzNoAnimationDirective)); };
/** @nocollapse */ NzTooltipBaseDirective.ɵdir = i0.ɵɵdefineDirective({ type: NzTooltipBaseDirective, inputs: { nzTitle: "nzTitle", nzContent: "nzContent", nzTrigger: "nzTrigger", nzPlacement: "nzPlacement", nzMouseEnterDelay: "nzMouseEnterDelay", nzMouseLeaveDelay: "nzMouseLeaveDelay", nzOverlayClassName: "nzOverlayClassName", nzOverlayStyle: "nzOverlayStyle", nzVisible: "nzVisible" }, outputs: { nzVisibleChange: "nzVisibleChange" }, features: [i0.ɵɵNgOnChangesFeature()] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdG9vbHRpcC1iYXNlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdG9vbHRpcC8iLCJzb3VyY2VzIjpbIm56LXRvb2x0aXAtYmFzZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0EsT0FBTyxFQUtMLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUlQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBc0QsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDekcsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUtqRSxNQUFNLE9BQWdCLHNCQUFzQjtJQWtGMUMsWUFDUyxVQUFzQixFQUNuQixRQUEwQixFQUMxQixRQUFrQyxFQUNsQyxRQUFtQixFQUNuQixXQUFvQztRQUp2QyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ25CLGFBQVEsR0FBUixRQUFRLENBQWtCO1FBQzFCLGFBQVEsR0FBUixRQUFRLENBQTBCO1FBQ2xDLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsZ0JBQVcsR0FBWCxXQUFXLENBQXlCO1FBbkVoRDs7O1dBR0c7UUFDTSxjQUFTLEdBQXFCLE9BQU8sQ0FBQztRQUUvQzs7O1dBR0c7UUFDTSxnQkFBVyxHQUFXLEtBQUssQ0FBQztRQWlDM0Isd0JBQW1CLEdBQUc7WUFDOUIsb0JBQW9CO1lBQ3BCLGdCQUFnQjtZQUNoQixtQkFBbUI7WUFDbkIsbUJBQW1CO1lBQ25CLFdBQVc7WUFDWCxhQUFhO1NBQ2QsQ0FBQztRQUVpQixvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFFakUsOEJBQXlCLEdBQUcsS0FBSyxDQUFDO1FBR2YsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFDL0IsdUJBQWtCLEdBQXNCLEVBQUUsQ0FBQztJQVUz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Z0IsRUFBRSxRQUFnQixDQUFDLENBQUM7UUFDN0UsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQzNCO2FBQU0sSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7Z0JBQzVCLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDdEMsQ0FBQyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQztTQUNsQjthQUFNO1lBQ0wsa0VBQWtFO1lBQ2xFLDBDQUEwQztZQUMxQyxPQUFPLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNqRDtJQUNILENBQUM7SUFFTyxzQkFBc0I7UUFDNUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVPLGtCQUFrQjtRQUN4QixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztTQUM3QjtJQUNILENBQUM7OzRGQTlTbUIsc0JBQXNCOzJEQUF0QixzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENka092ZXJsYXlPcmlnaW4gfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDb21wb25lbnRGYWN0b3J5LFxyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVmlld0NvbnRhaW5lclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ1N0eWxlSW50ZXJmYWNlLCBOek5vQW5pbWF0aW9uRGlyZWN0aXZlLCBOelRTVHlwZSwgd2FybkRlcHJlY2F0aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgTnpUb29sdGlwQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vbnotdG9vbHRpcC1iYXNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56VG9vbHRpcFRyaWdnZXIgfSBmcm9tICcuL256LXRvb2x0aXAuZGVmaW5pdGlvbnMnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE56VG9vbHRpcEJhc2VEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcclxuICBkaXJlY3RpdmVOYW1lVGl0bGU/OiBOelRTVHlwZSB8IG51bGw7XHJcbiAgc3BlY2lmaWNUaXRsZT86IE56VFNUeXBlIHwgbnVsbDtcclxuICBkaXJlY3RpdmVOYW1lQ29udGVudD86IE56VFNUeXBlIHwgbnVsbDtcclxuICBzcGVjaWZpY0NvbnRlbnQ/OiBOelRTVHlwZSB8IG51bGw7XHJcbiAgc3BlY2lmaWNUcmlnZ2VyPzogTnpUb29sdGlwVHJpZ2dlcjtcclxuICBzcGVjaWZpY1BsYWNlbWVudD86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgMTAuMC4wLiBUaGlzIGlzIGRlcHJlY2F0ZWQgYW5kIGdvaW5nIHRvIGJlIHJlbW92ZWQgaW4gMTAuMC4wLlxyXG4gICAqIFBsZWFzZSB1c2UgYSBtb3JlIHNwZWNpZmljIEFQSS4gTGlrZSBgbnpUb29sdGlwVGl0bGVgLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIG56VGl0bGU6IE56VFNUeXBlIHwgbnVsbDtcclxuXHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgMTAuMC4wLiBUaGlzIGlzIGRlcHJlY2F0ZWQgYW5kIGdvaW5nIHRvIGJlIHJlbW92ZWQgaW4gMTAuMC4wLlxyXG4gICAqIFBsZWFzZSB1c2UgYSBtb3JlIHNwZWNpZmljIEFQSS4gTGlrZSBgbnpQb3BvdmVyQ29udGVudGAuXHJcbiAgICovXHJcbiAgQElucHV0KCkgbnpDb250ZW50OiBOelRTVHlwZSB8IG51bGw7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXByZWNhdGVkIDEwLjAuMC4gVGhpcyBpcyBkZXByZWNhdGVkIGFuZCBnb2luZyB0byBiZSByZW1vdmVkIGluIDEwLjAuMC5cclxuICAgKiBQbGVhc2UgdXNlIGEgbW9yZSBzcGVjaWZpYyBBUEkuIExpa2UgYG56VG9vbHRpcFRyaWdnZXJgLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIG56VHJpZ2dlcjogTnpUb29sdGlwVHJpZ2dlciA9ICdob3Zlcic7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXByZWNhdGVkIDEwLjAuMC4gVGhpcyBpcyBkZXByZWNhdGVkIGFuZCBnb2luZyB0byBiZSByZW1vdmVkIGluIDEwLjAuMC5cclxuICAgKiBQbGVhc2UgdXNlIGEgbW9yZSBzcGVjaWZpYyBBUEkuIExpa2UgYG56VG9vbHRpcFBsYWNlbWVudGAuXHJcbiAgICovXHJcbiAgQElucHV0KCkgbnpQbGFjZW1lbnQ6IHN0cmluZyA9ICd0b3AnO1xyXG5cclxuICBASW5wdXQoKSBuek1vdXNlRW50ZXJEZWxheTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIG56TW91c2VMZWF2ZURlbGF5OiBudW1iZXI7XHJcbiAgQElucHV0KCkgbnpPdmVybGF5Q2xhc3NOYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpPdmVybGF5U3R5bGU6IE5nU3R5bGVJbnRlcmZhY2U7XHJcbiAgQElucHV0KCkgbnpWaXNpYmxlOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBGb3IgY3JlYXRlIHRvb2x0aXAgZHluYW1pY2FsbHkuIFRoaXMgc2hvdWxkIGJlIG92ZXJyaWRlIGZvciBlYWNoIGRpZmZlcmVudCBjb21wb25lbnQuXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIGNvbXBvbmVudEZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8TnpUb29sdGlwQmFzZUNvbXBvbmVudD47XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgdHJ1ZSB0aXRsZSB0aGF0IHdvdWxkIGJlIHVzZWQgaW4gb3RoZXIgcGFydHMgb24gdGhpcyBjb21wb25lbnQuXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIGdldCB0aXRsZSgpOiBOelRTVHlwZSB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuc3BlY2lmaWNUaXRsZSB8fCB0aGlzLmRpcmVjdGl2ZU5hbWVUaXRsZSB8fCB0aGlzLm56VGl0bGU7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0IGNvbnRlbnQoKTogTnpUU1R5cGUgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLnNwZWNpZmljQ29udGVudCB8fCB0aGlzLmRpcmVjdGl2ZU5hbWVDb250ZW50IHx8IHRoaXMubnpDb250ZW50O1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGdldCBwbGFjZW1lbnQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLnNwZWNpZmljUGxhY2VtZW50IHx8IHRoaXMubnpQbGFjZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0IHRyaWdnZXIoKTogTnpUb29sdGlwVHJpZ2dlciB7XHJcbiAgICAvLyBOelRvb2x0aXBUcmlnZ2VyIGNhbiBiZSBudWxsLlxyXG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLnNwZWNpZmljVHJpZ2dlciAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLnNwZWNpZmljVHJpZ2dlciA6IHRoaXMubnpUcmlnZ2VyO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIG5lZWRQcm94eVByb3BlcnRpZXMgPSBbXHJcbiAgICAnbnpPdmVybGF5Q2xhc3NOYW1lJyxcclxuICAgICduek92ZXJsYXlTdHlsZScsXHJcbiAgICAnbnpNb3VzZUVudGVyRGVsYXknLFxyXG4gICAgJ256TW91c2VMZWF2ZURlbGF5JyxcclxuICAgICduelZpc2libGUnLFxyXG4gICAgJ25vQW5pbWF0aW9uJ1xyXG4gIF07XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIGlzVG9vbHRpcENvbXBvbmVudFZpc2libGUgPSBmYWxzZTtcclxuICB0b29sdGlwOiBOelRvb2x0aXBCYXNlQ29tcG9uZW50O1xyXG5cclxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgJGRlc3Ryb3kgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIHByb3RlY3RlZCByZWFkb25seSB0cmlnZ2VyRGlzcG9zYWJsZXM6IEFycmF5PCgpID0+IHZvaWQ+ID0gW107XHJcblxyXG4gIHByaXZhdGUgZGVsYXlUaW1lcj86IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByb3RlY3RlZCBob3N0VmlldzogVmlld0NvbnRhaW5lclJlZixcclxuICAgIHByb3RlY3RlZCByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcm90ZWN0ZWQgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBjb25zdCB7IG56VHJpZ2dlciwgc3BlY2lmaWNUcmlnZ2VyIH0gPSBjaGFuZ2VzO1xyXG4gICAgY29uc3QgdHJpZ2dlciA9IHNwZWNpZmljVHJpZ2dlciB8fCBuelRyaWdnZXI7XHJcblxyXG4gICAgaWYgKHRyaWdnZXIgJiYgIXRyaWdnZXIuaXNGaXJzdENoYW5nZSgpKSB7XHJcbiAgICAgIHRoaXMucmVnaXN0ZXJUcmlnZ2VycygpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnRvb2x0aXApIHtcclxuICAgICAgdGhpcy51cGRhdGVDaGFuZ2VkUHJvcGVydGllcyhjaGFuZ2VzKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2hhbmdlcy5uelRpdGxlKSB7XHJcbiAgICAgIHdhcm5EZXByZWNhdGlvbihcclxuICAgICAgICBgJ256VGl0bGUnIG9mICduei10b29sdGlwJyBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gMTAuMC4wLlxyXG5QbGVhc2UgdXNlICduelRvb2x0aXBUaXRsZScgaW5zdGVhZC4gVGhlIHNhbWUgd2l0aCAnbnotcG9wb3ZlcicgYW5kICduei1wb3Bjb25maXJtJy5gXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZXMubnpDb250ZW50KSB7XHJcbiAgICAgIHdhcm5EZXByZWNhdGlvbihcclxuICAgICAgICBgJ256Q29udGVudCcgb2YgJ256LXBvcG92ZXInIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAxMC4wLjAuXHJcblBsZWFzZSB1c2UgJ256UG9wb3ZlckNvbnRlbnQnIGluc3RlYWQuYFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VzLm56UGxhY2VtZW50KSB7XHJcbiAgICAgIHdhcm5EZXByZWNhdGlvbihcclxuICAgICAgICBgJ256UGxhY2VtZW50JyBvZiAnbnotdG9vbHRpcCcgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIDEwLjAuMC5cclxuUGxlYXNlIHVzZSAnbnpUb29sdGlwQ29udGVudCcgaW5zdGVhZC4gVGhlIHNhbWUgd2l0aCAnbnotcG9wb3ZlcicgYW5kICduei1wb3Bjb25maXJtJy5gXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZXMubnpUcmlnZ2VyKSB7XHJcbiAgICAgIHdhcm5EZXByZWNhdGlvbihcclxuICAgICAgICBgJ256VHJpZ2dlcicgb2YgJ256LXRvb2x0aXAnIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAxMC4wLjAuXHJcblBsZWFzZSB1c2UgJ256VG9vbHRpcFRyaWdnZXInIGluc3RlYWQuIFRoZSBzYW1lIHdpdGggJ256LXBvcG92ZXInIGFuZCAnbnotcG9wY29uZmlybScuYFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNyZWF0ZVRvb2x0aXBDb21wb25lbnQoKTtcclxuICAgIHRoaXMudG9vbHRpcC5uelZpc2libGVDaGFuZ2UucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLCB0YWtlVW50aWwodGhpcy4kZGVzdHJveSkpLnN1YnNjcmliZSgodmlzaWJsZTogYm9vbGVhbikgPT4ge1xyXG4gICAgICB0aGlzLmlzVG9vbHRpcENvbXBvbmVudFZpc2libGUgPSB2aXNpYmxlO1xyXG4gICAgICB0aGlzLm56VmlzaWJsZUNoYW5nZS5lbWl0KHZpc2libGUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlZ2lzdGVyVHJpZ2dlcnMoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy4kZGVzdHJveS5uZXh0KCk7XHJcbiAgICB0aGlzLiRkZXN0cm95LmNvbXBsZXRlKCk7XHJcblxyXG4gICAgLy8gQ2xlYXIgdG9nZ2xpbmcgdGltZXIuIElzc3VlICMzODc1ICM0MzE3ICM0Mzg2XHJcbiAgICB0aGlzLmNsZWFyVG9nZ2xpbmdUaW1lcigpO1xyXG4gICAgdGhpcy5yZW1vdmVUcmlnZ2VyTGlzdGVuZXJzKCk7XHJcbiAgfVxyXG5cclxuICBzaG93KCk6IHZvaWQge1xyXG4gICAgdGhpcy50b29sdGlwLnNob3coKTtcclxuICB9XHJcblxyXG4gIGhpZGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRvb2x0aXAuaGlkZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRm9yY2UgdGhlIGNvbXBvbmVudCB0byB1cGRhdGUgaXRzIHBvc2l0aW9uLlxyXG4gICAqL1xyXG4gIHVwZGF0ZVBvc2l0aW9uKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudG9vbHRpcCkge1xyXG4gICAgICB0aGlzLnRvb2x0aXAudXBkYXRlUG9zaXRpb24oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIGR5bmFtaWMgdG9vbHRpcCBjb21wb25lbnQuIFRoaXMgbWV0aG9kIGNhbiBiZSBvdmVycmlkZS5cclxuICAgKi9cclxuICBwcm90ZWN0ZWQgY3JlYXRlVG9vbHRpcENvbXBvbmVudCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHRvb2x0aXBSZWYgPSB0aGlzLmhvc3RWaWV3LmNyZWF0ZUNvbXBvbmVudCh0aGlzLmNvbXBvbmVudEZhY3RvcnkpO1xyXG5cclxuICAgIHRoaXMudG9vbHRpcCA9IHRvb2x0aXBSZWYuaW5zdGFuY2U7XHJcblxyXG4gICAgLy8gUmVtb3ZlIHRoZSBjb21wb25lbnQncyBET00gYmVjYXVzZSBpdCBzaG91bGQgYmUgaW4gdGhlIG92ZXJsYXkgY29udGFpbmVyLlxyXG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLnJlbmRlcmVyLnBhcmVudE5vZGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLCB0b29sdGlwUmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgdGhpcy50b29sdGlwLnNldE92ZXJsYXlPcmlnaW4odGhpcyBhcyBDZGtPdmVybGF5T3JpZ2luKTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZUNoYW5nZWRQcm9wZXJ0aWVzKHRoaXMubmVlZFByb3h5UHJvcGVydGllcyk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgcmVnaXN0ZXJUcmlnZ2VycygpOiB2b2lkIHtcclxuICAgIC8vIFdoZW4gdGhlIG1ldGhvZCBnZXRzIGludm9rZWQsIGFsbCBwcm9wZXJ0aWVzIGhhcyBiZWVuIHN5bmNlZCB0byB0aGUgZHluYW1pYyBjb21wb25lbnQuXHJcbiAgICAvLyBBZnRlciByZW1vdmluZyB0aGUgb2xkIEFQSSwgd2UgY2FuIGp1c3QgY2hlY2sgdGhlIGRpcmVjdGl2ZSdzIG93biBgbnpUcmlnZ2VyYC5cclxuICAgIGNvbnN0IGVsID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBjb25zdCB0cmlnZ2VyID0gdGhpcy50cmlnZ2VyO1xyXG5cclxuICAgIHRoaXMucmVtb3ZlVHJpZ2dlckxpc3RlbmVycygpO1xyXG5cclxuICAgIGlmICh0cmlnZ2VyID09PSAnaG92ZXInKSB7XHJcbiAgICAgIGxldCBvdmVybGF5RWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICAgIHRoaXMudHJpZ2dlckRpc3Bvc2FibGVzLnB1c2goXHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4oZWwsICdtb3VzZWVudGVyJywgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5kZWxheUVudGVyTGVhdmUodHJ1ZSwgdHJ1ZSwgdGhpcy50b29sdGlwLm56TW91c2VFbnRlckRlbGF5KTtcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnRyaWdnZXJEaXNwb3NhYmxlcy5wdXNoKFxyXG4gICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKGVsLCAnbW91c2VsZWF2ZScsICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZGVsYXlFbnRlckxlYXZlKHRydWUsIGZhbHNlLCB0aGlzLnRvb2x0aXAubnpNb3VzZUxlYXZlRGVsYXkpO1xyXG4gICAgICAgICAgaWYgKHRoaXMudG9vbHRpcC5vdmVybGF5Lm92ZXJsYXlSZWYgJiYgIW92ZXJsYXlFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIG92ZXJsYXlFbGVtZW50ID0gdGhpcy50b29sdGlwLm92ZXJsYXkub3ZlcmxheVJlZi5vdmVybGF5RWxlbWVudDtcclxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyRGlzcG9zYWJsZXMucHVzaChcclxuICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbihvdmVybGF5RWxlbWVudCwgJ21vdXNlZW50ZXInLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGF5RW50ZXJMZWF2ZShmYWxzZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyRGlzcG9zYWJsZXMucHVzaChcclxuICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbihvdmVybGF5RWxlbWVudCwgJ21vdXNlbGVhdmUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGF5RW50ZXJMZWF2ZShmYWxzZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAodHJpZ2dlciA9PT0gJ2ZvY3VzJykge1xyXG4gICAgICB0aGlzLnRyaWdnZXJEaXNwb3NhYmxlcy5wdXNoKHRoaXMucmVuZGVyZXIubGlzdGVuKGVsLCAnZm9jdXMnLCAoKSA9PiB0aGlzLnNob3coKSkpO1xyXG4gICAgICB0aGlzLnRyaWdnZXJEaXNwb3NhYmxlcy5wdXNoKHRoaXMucmVuZGVyZXIubGlzdGVuKGVsLCAnYmx1cicsICgpID0+IHRoaXMuaGlkZSgpKSk7XHJcbiAgICB9IGVsc2UgaWYgKHRyaWdnZXIgPT09ICdjbGljaycpIHtcclxuICAgICAgdGhpcy50cmlnZ2VyRGlzcG9zYWJsZXMucHVzaChcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbihlbCwgJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICB0aGlzLnNob3coKTtcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfSAvLyBFbHNlIGRvIG5vdGhpbmcgYmVjYXVzZSB1c2VyIHdhbnRzIHRvIGNvbnRyb2wgdGhlIHZpc2liaWxpdHkgcHJvZ3JhbW1hdGljYWxseS5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN5bmMgY2hhbmdlZCBwcm9wZXJ0aWVzIHRvIHRoZSBjb21wb25lbnQgYW5kIHRyaWdnZXIgY2hhbmdlIGRldGVjdGlvbiBpbiB0aGF0IGNvbXBvbmVudC5cclxuICAgKi9cclxuICBwcm90ZWN0ZWQgdXBkYXRlQ2hhbmdlZFByb3BlcnRpZXMocHJvcGVydGllc09yQ2hhbmdlczogc3RyaW5nW10gfCBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzT3JDaGFuZ2VzKTtcclxuICAgIGNvbnN0IGtleXMgPSBpc0FycmF5ID8gKHByb3BlcnRpZXNPckNoYW5nZXMgYXMgc3RyaW5nW10pIDogT2JqZWN0LmtleXMocHJvcGVydGllc09yQ2hhbmdlcyk7XHJcblxyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWFueVxyXG4gICAga2V5cy5mb3JFYWNoKChwcm9wZXJ0eTogYW55KSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLm5lZWRQcm94eVByb3BlcnRpZXMuaW5kZXhPZihwcm9wZXJ0eSkgIT09IC0xKSB7XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIHRoaXMudXBkYXRlQ29tcG9uZW50VmFsdWUocHJvcGVydHksIHRoaXNbcHJvcGVydHldKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGlzQXJyYXkpIHtcclxuICAgICAgdGhpcy51cGRhdGVDb21wb25lbnRWYWx1ZSgnbnpUaXRsZScsIHRoaXMudGl0bGUpO1xyXG4gICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudFZhbHVlKCduekNvbnRlbnQnLCB0aGlzLmNvbnRlbnQpO1xyXG4gICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudFZhbHVlKCduelBsYWNlbWVudCcsIHRoaXMucGxhY2VtZW50KTtcclxuICAgICAgdGhpcy51cGRhdGVDb21wb25lbnRWYWx1ZSgnbnpUcmlnZ2VyJywgdGhpcy50cmlnZ2VyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGMgPSBwcm9wZXJ0aWVzT3JDaGFuZ2VzIGFzIFNpbXBsZUNoYW5nZXM7XHJcbiAgICAgIGlmIChjLnNwZWNpZmljVGl0bGUgfHwgYy5kaXJlY3RpdmVOYW1lVGl0bGUgfHwgYy5uelRpdGxlKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDb21wb25lbnRWYWx1ZSgnbnpUaXRsZScsIHRoaXMudGl0bGUpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjLnNwZWNpZmljQ29udGVudCB8fCBjLmRpcmVjdGl2ZU5hbWVDb250ZW50IHx8IGMubnpDb250ZW50KSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDb21wb25lbnRWYWx1ZSgnbnpDb250ZW50JywgdGhpcy5jb250ZW50KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoYy5zcGVjaWZpY1RyaWdnZXIgfHwgYy5uelRyaWdnZXIpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudFZhbHVlKCduelRyaWdnZXInLCB0aGlzLnRyaWdnZXIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjLnNwZWNpZmljUGxhY2VtZW50IHx8IGMubnpQbGFjZW1lbnQpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudFZhbHVlKCduelBsYWNlbWVudCcsIHRoaXMucGxhY2VtZW50KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudG9vbHRpcC51cGRhdGVCeURpcmVjdGl2ZSgpO1xyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWFueVxyXG4gIHByaXZhdGUgdXBkYXRlQ29tcG9uZW50VmFsdWUoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgdGhpcy50b29sdGlwW2tleV0gPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGVsYXlFbnRlckxlYXZlKGlzT3JpZ2luOiBib29sZWFuLCBpc0VudGVyOiBib29sZWFuLCBkZWxheTogbnVtYmVyID0gLTEpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRlbGF5VGltZXIpIHtcclxuICAgICAgdGhpcy5jbGVhclRvZ2dsaW5nVGltZXIoKTtcclxuICAgIH0gZWxzZSBpZiAoZGVsYXkgPiAwKSB7XHJcbiAgICAgIHRoaXMuZGVsYXlUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZGVsYXlUaW1lciA9IHVuZGVmaW5lZDtcclxuICAgICAgICBpc0VudGVyID8gdGhpcy5zaG93KCkgOiB0aGlzLmhpZGUoKTtcclxuICAgICAgfSwgZGVsYXkgKiAxMDAwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGBpc09yaWdpbmAgaXMgdXNlZCBkdWUgdG8gdGhlIHRvb2x0aXAgd2lsbCBub3QgaGlkZSBpbW1lZGlhdGVseVxyXG4gICAgICAvLyAobWF5IGNhdXNlZCBieSB0aGUgZmFkZS1vdXQgYW5pbWF0aW9uKS5cclxuICAgICAgaXNFbnRlciAmJiBpc09yaWdpbiA/IHRoaXMuc2hvdygpIDogdGhpcy5oaWRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbW92ZVRyaWdnZXJMaXN0ZW5lcnMoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRyaWdnZXJEaXNwb3NhYmxlcy5mb3JFYWNoKGRpc3Bvc2UgPT4gZGlzcG9zZSgpKTtcclxuICAgIHRoaXMudHJpZ2dlckRpc3Bvc2FibGVzLmxlbmd0aCA9IDA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsZWFyVG9nZ2xpbmdUaW1lcigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRlbGF5VGltZXIpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGVsYXlUaW1lcik7XHJcbiAgICAgIHRoaXMuZGVsYXlUaW1lciA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19