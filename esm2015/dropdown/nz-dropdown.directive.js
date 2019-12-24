import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ESCAPE, hasModifierKey } from '@angular/cdk/keycodes';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { Platform } from '@angular/cdk/platform';
import { TemplatePortal } from '@angular/cdk/portal';
import { Directive, ElementRef, EventEmitter, Host, Input, Optional, Output, Renderer2, ViewContainerRef } from '@angular/core';
import { NzButtonComponent, NzButtonGroupComponent } from 'ng-zorro-antd/button';
import { DEFAULT_DROPDOWN_POSITIONS, InputBoolean, POSITION_MAP } from 'ng-zorro-antd/core';
import { combineLatest, EMPTY, fromEvent, merge, Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, mapTo, takeUntil, tap } from 'rxjs/operators';
import { NzDropdownMenuComponent } from './nz-dropdown-menu.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
import * as i2 from "@angular/cdk/platform";
import * as i3 from "ng-zorro-antd/button";
export class NzDropDownDirective {
    constructor(elementRef, renderer, overlay, platform, nzButtonComponent, nzButtonGroupComponent, viewContainerRef) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.overlay = overlay;
        this.platform = platform;
        this.nzButtonComponent = nzButtonComponent;
        this.nzButtonGroupComponent = nzButtonGroupComponent;
        this.viewContainerRef = viewContainerRef;
        this.overlayRef = null;
        this.destroy$ = new Subject();
        this.triggerWidth = 0;
        this.el = this.elementRef.nativeElement;
        this.dropdownOpen = false;
        this.positions = [...DEFAULT_DROPDOWN_POSITIONS];
        this.positionSubscription = Subscription.EMPTY;
        this.overlaySubscription = Subscription.EMPTY;
        this.hover$ = merge(fromEvent(this.el, 'mouseenter').pipe(mapTo(true)), fromEvent(this.el, 'mouseleave').pipe(mapTo(false)));
        this.$click = fromEvent(this.el, 'click').pipe(tap(e => e.stopPropagation()), mapTo(true));
        this.nzTrigger = 'hover';
        this.nzBackdrop = true;
        this.nzClickHide = true;
        this.nzDisabled = false;
        this.nzVisible = false;
        this.nzTableFilter = false;
        this.nzOverlayClassName = '';
        this.nzOverlayStyle = {};
        this.nzPlacement = 'bottomLeft';
        this.nzVisibleChange = new EventEmitter();
        renderer.addClass(elementRef.nativeElement, 'ant-dropdown-trigger');
        if (this.nzButtonComponent) {
            this.nzButtonComponent.isInDropdown = true;
        }
        if (this.nzButtonGroupComponent) {
            this.nzButtonGroupComponent.isInDropdown = true;
        }
    }
    setDisabled(disabled) {
        if (disabled) {
            this.renderer.setAttribute(this.el, 'disabled', '');
            if (this.nzVisible) {
                this.nzVisible = false;
                this.nzVisibleChange.emit(this.nzVisible);
                this.updateOverlayByVisible();
            }
        }
        else {
            this.renderer.removeAttribute(this.el, 'disabled');
        }
    }
    getOverlayConfig() {
        return new OverlayConfig({
            positionStrategy: this.overlay
                .position()
                .flexibleConnectedTo(this.el)
                .withLockedPosition(),
            minWidth: this.triggerWidth,
            hasBackdrop: this.nzTrigger === 'click',
            backdropClass: this.nzBackdrop ? undefined : 'nz-overlay-transparent-backdrop',
            scrollStrategy: this.overlay.scrollStrategies.reposition()
        });
    }
    createOverlay() {
        if (!this.overlayRef) {
            const config = this.getOverlayConfig();
            this.overlayRef = this.overlay.create(config);
            this.subscribeOverlayEvent(this.overlayRef);
            this.subscribeToPositions(config.positionStrategy);
            return this.overlayRef;
        }
        else {
            const overlayConfig = this.overlayRef.getConfig();
            this.updateOverlayConfig(overlayConfig);
            return this.overlayRef;
        }
    }
    updateOverlayConfig(overlayConfig) {
        overlayConfig.minWidth = this.triggerWidth;
        overlayConfig.hasBackdrop = this.nzTrigger === 'click';
        return overlayConfig;
    }
    dispose() {
        if (this.overlayRef) {
            this.overlayRef.dispose();
            this.overlayRef = null;
            this.positionSubscription.unsubscribe();
            this.overlaySubscription.unsubscribe();
        }
    }
    subscribeToPositions(position) {
        this.positionSubscription.unsubscribe();
        this.positionSubscription = position.positionChanges.pipe(takeUntil(this.destroy$)).subscribe(change => {
            this.nzDropdownMenu.setValue('dropDownPosition', change.connectionPair.originY);
        });
    }
    subscribeOverlayEvent(overlayRef) {
        this.overlaySubscription.unsubscribe();
        this.overlaySubscription = merge(overlayRef.backdropClick(), overlayRef.detachments(), overlayRef.keydownEvents().pipe(filter(e => e.keyCode === ESCAPE && !hasModifierKey(e))))
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            this.nzDropdownMenu.setVisibleStateWhen(false);
        });
    }
    getPortal() {
        if (!this.portal || this.portal.templateRef !== this.nzDropdownMenu.templateRef) {
            this.portal = new TemplatePortal(this.nzDropdownMenu.templateRef, this.viewContainerRef);
        }
        return this.portal;
    }
    openMenu() {
        if (!this.dropdownOpen) {
            const overlayRef = this.createOverlay();
            const overlayConfig = overlayRef.getConfig();
            this.nzDropdownMenu.setValue('open', true);
            this.setPosition(overlayConfig.positionStrategy);
            overlayRef.attach(this.getPortal());
            this.dropdownOpen = true;
        }
    }
    closeMenu() {
        if (this.overlayRef) {
            this.overlayRef.detach();
            this.dropdownOpen = false;
            this.nzDropdownMenu.setValue('open', false);
        }
    }
    setPosition(positionStrategy) {
        this.positionStrategy = positionStrategy;
        positionStrategy.withPositions([...this.positions]);
    }
    updatePositionStrategy(positions) {
        if (this.positionStrategy) {
            this.positionStrategy.withPositions(positions);
        }
    }
    setTriggerWidth() {
        if (this.platform.isBrowser) {
            const element = this.nzMatchWidthElement ? this.nzMatchWidthElement.nativeElement : this.el;
            this.triggerWidth = element.getBoundingClientRect().width;
        }
    }
    initActionSubscribe() {
        const hostVisible$ = this.nzTrigger === 'hover' ? this.hover$ : this.$click;
        const dropdownMenuVisible$ = this.nzDropdownMenu.visible$;
        const menuClickVisible$ = this.nzClickHide ? this.nzDropdownMenu.nzMenuDropdownService.menuItemClick$.pipe(mapTo(false)) : EMPTY;
        const supVisible$ = merge(dropdownMenuVisible$, hostVisible$, menuClickVisible$);
        const subVisible$ = this.nzDropdownMenu.nzMenuDropdownService.menuOpen$;
        combineLatest([supVisible$, subVisible$])
            .pipe(map(([supVisible, subVisible]) => supVisible || subVisible), debounceTime(50), distinctUntilChanged(), takeUntil(this.destroy$))
            .subscribe(visible => {
            if (!this.nzDisabled && this.nzVisible !== visible) {
                this.nzVisible = visible;
                this.updateOverlayByVisible();
                this.nzVisibleChange.emit(this.nzVisible);
                this.setTriggerWidth();
                this.nzDropdownMenu.setValue('triggerWidth', this.triggerWidth);
            }
        });
    }
    updateOverlayByVisible() {
        if (this.nzVisible) {
            this.openMenu();
        }
        else {
            this.closeMenu();
        }
    }
    updateDisabledState() {
        this.setDisabled(this.nzDisabled);
    }
    regeneratePosition(placement, positions) {
        return [POSITION_MAP[placement], ...positions];
    }
    ngAfterViewInit() {
        if (this.nzDropdownMenu) {
            this.setTriggerWidth();
            this.initActionSubscribe();
            this.updateDisabledState();
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.dispose();
    }
    ngOnChanges(changes) {
        const { nzVisible, nzTrigger, nzPlacement, nzDisabled, nzOverlayClassName, nzOverlayStyle, nzTableFilter } = changes;
        if (this.nzDropdownMenu) {
            if (nzVisible) {
                this.updateOverlayByVisible();
                this.nzDropdownMenu.visible$.next(this.nzVisible);
            }
            if (nzTrigger) {
                this.nzDropdownMenu.setValue('nzTrigger', this.nzTrigger);
            }
            if (nzTableFilter) {
                this.nzDropdownMenu.setValue('nzTableFilter', this.nzTableFilter);
            }
            if (nzOverlayClassName) {
                this.nzDropdownMenu.setValue('nzOverlayClassName', this.nzOverlayClassName);
            }
            if (nzOverlayStyle) {
                this.nzDropdownMenu.setValue('nzOverlayStyle', this.nzOverlayStyle);
            }
            if (nzPlacement) {
                this.nzDropdownMenu.setValue('nzPlacement', this.nzPlacement);
                this.nzDropdownMenu.setValue('dropDownPosition', this.nzDropdownMenu.nzPlacement.indexOf('top') !== -1 ? 'top' : 'bottom');
                this.positions = this.regeneratePosition(this.nzPlacement, this.positions);
                this.updatePositionStrategy(this.positions);
            }
        }
        if (nzDisabled) {
            this.updateDisabledState();
        }
    }
}
/** @nocollapse */ NzDropDownDirective.ɵfac = function NzDropDownDirective_Factory(t) { return new (t || NzDropDownDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.Overlay), i0.ɵɵdirectiveInject(i2.Platform), i0.ɵɵdirectiveInject(i3.NzButtonComponent, 9), i0.ɵɵdirectiveInject(i3.NzButtonGroupComponent, 8), i0.ɵɵdirectiveInject(i0.ViewContainerRef)); };
/** @nocollapse */ NzDropDownDirective.ɵdir = i0.ɵɵdefineDirective({ type: NzDropDownDirective, selectors: [["", "nz-dropdown", ""]], inputs: { nzDropdownMenu: "nzDropdownMenu", nzTrigger: "nzTrigger", nzMatchWidthElement: "nzMatchWidthElement", nzBackdrop: "nzBackdrop", nzClickHide: "nzClickHide", nzDisabled: "nzDisabled", nzVisible: "nzVisible", nzTableFilter: "nzTableFilter", nzOverlayClassName: "nzOverlayClassName", nzOverlayStyle: "nzOverlayStyle", nzPlacement: "nzPlacement" }, outputs: { nzVisibleChange: "nzVisibleChange" }, exportAs: ["nzDropdown"], features: [i0.ɵɵNgOnChangesFeature()] });
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzDropDownDirective.prototype, "nzBackdrop", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzDropDownDirective.prototype, "nzClickHide", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzDropDownDirective.prototype, "nzDisabled", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzDropDownDirective.prototype, "nzVisible", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzDropDownDirective.prototype, "nzTableFilter", void 0);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzDropDownDirective, [{
        type: Directive,
        args: [{
                selector: '[nz-dropdown]',
                exportAs: 'nzDropdown'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.Overlay }, { type: i2.Platform }, { type: i3.NzButtonComponent, decorators: [{
                type: Optional
            }, {
                type: Host
            }] }, { type: i3.NzButtonGroupComponent, decorators: [{
                type: Optional
            }] }, { type: i0.ViewContainerRef }]; }, { nzDropdownMenu: [{
            type: Input
        }], nzTrigger: [{
            type: Input
        }], nzMatchWidthElement: [{
            type: Input
        }], nzBackdrop: [{
            type: Input
        }], nzClickHide: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }], nzVisible: [{
            type: Input
        }], nzTableFilter: [{
            type: Input
        }], nzOverlayClassName: [{
            type: Input
        }], nzOverlayStyle: [{
            type: Input
        }], nzPlacement: [{
            type: Input
        }], nzVisibleChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJvcGRvd24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9kcm9wZG93bi8iLCJzb3VyY2VzIjpbIm56LWRyb3Bkb3duLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMvRCxPQUFPLEVBSUwsT0FBTyxFQUNQLGFBQWEsRUFFZCxNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLElBQUksRUFDSixLQUFLLEVBR0wsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBRVQsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDNUYsT0FBTyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hHLE9BQU8sRUFBRSx1QkFBdUIsRUFBbUIsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7QUFNeEYsTUFBTSxPQUFPLG1CQUFtQjtJQStMOUIsWUFDUyxVQUFzQixFQUNyQixR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RTs7MERBQXVCO2tEQTFCcEMsbUJBQW1CO2NBSi9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFLFlBQVk7YUFDdkI7O3NCQXFNSSxRQUFROztzQkFBSSxJQUFJOztzQkFDaEIsUUFBUTs7a0JBbExWLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEVTQ0FQRSwgaGFzTW9kaWZpZXJLZXkgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xyXG5pbXBvcnQge1xyXG4gIENvbm5lY3RlZFBvc2l0aW9uLFxyXG4gIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIsXHJcbiAgRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5LFxyXG4gIE92ZXJsYXksXHJcbiAgT3ZlcmxheUNvbmZpZyxcclxuICBPdmVybGF5UmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7IFRlbXBsYXRlUG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdCxcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE56QnV0dG9uQ29tcG9uZW50LCBOekJ1dHRvbkdyb3VwQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9idXR0b24nO1xyXG5pbXBvcnQgeyBERUZBVUxUX0RST1BET1dOX1BPU0lUSU9OUywgSW5wdXRCb29sZWFuLCBQT1NJVElPTl9NQVAgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBFTVBUWSwgZnJvbUV2ZW50LCBtZXJnZSwgT2JzZXJ2YWJsZSwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgbWFwLCBtYXBUbywgdGFrZVVudGlsLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE56RHJvcGRvd25NZW51Q29tcG9uZW50LCBOelBsYWNlbWVudFR5cGUgfSBmcm9tICcuL256LWRyb3Bkb3duLW1lbnUuY29tcG9uZW50JztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW256LWRyb3Bkb3duXScsXHJcbiAgZXhwb3J0QXM6ICduekRyb3Bkb3duJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpEcm9wRG93bkRpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcclxuICBwcml2YXRlIHBvcnRhbDogVGVtcGxhdGVQb3J0YWw7XHJcbiAgcHJpdmF0ZSBvdmVybGF5UmVmOiBPdmVybGF5UmVmIHwgbnVsbCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJpdmF0ZSB0cmlnZ2VyV2lkdGggPSAwO1xyXG4gIHByaXZhdGUgZWw6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBkcm9wZG93bk9wZW4gPSBmYWxzZTtcclxuICBwcml2YXRlIHBvc2l0aW9uU3RyYXRlZ3k6IEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneTtcclxuICBwcml2YXRlIHBvc2l0aW9uczogQ29ubmVjdGlvblBvc2l0aW9uUGFpcltdID0gWy4uLkRFRkFVTFRfRFJPUERPV05fUE9TSVRJT05TXTtcclxuICBwcml2YXRlIHBvc2l0aW9uU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xyXG4gIHByaXZhdGUgb3ZlcmxheVN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcclxuICByZWFkb25seSBob3ZlciQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSBtZXJnZShcclxuICAgIGZyb21FdmVudCh0aGlzLmVsLCAnbW91c2VlbnRlcicpLnBpcGUobWFwVG8odHJ1ZSkpLFxyXG4gICAgZnJvbUV2ZW50KHRoaXMuZWwsICdtb3VzZWxlYXZlJykucGlwZShtYXBUbyhmYWxzZSkpXHJcbiAgKTtcclxuICByZWFkb25seSAkY2xpY2s6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSBmcm9tRXZlbnQodGhpcy5lbCwgJ2NsaWNrJykucGlwZShcclxuICAgIHRhcChlID0+IGUuc3RvcFByb3BhZ2F0aW9uKCkpLFxyXG4gICAgbWFwVG8odHJ1ZSlcclxuICApO1xyXG4gIEBJbnB1dCgpIG56RHJvcGRvd25NZW51OiBOekRyb3Bkb3duTWVudUNvbXBvbmVudDtcclxuICBASW5wdXQoKSBuelRyaWdnZXI6ICdjbGljaycgfCAnaG92ZXInID0gJ2hvdmVyJztcclxuICBASW5wdXQoKSBuek1hdGNoV2lkdGhFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekJhY2tkcm9wID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDbGlja0hpZGUgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56VmlzaWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelRhYmxlRmlsdGVyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpPdmVybGF5Q2xhc3NOYW1lID0gJyc7XHJcbiAgQElucHV0KCkgbnpPdmVybGF5U3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcclxuICBASW5wdXQoKSBuelBsYWNlbWVudDogTnpQbGFjZW1lbnRUeXBlID0gJ2JvdHRvbUxlZnQnO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelZpc2libGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgc2V0RGlzYWJsZWQoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmIChkaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsLCAnZGlzYWJsZWQnLCAnJyk7XHJcbiAgICAgIGlmICh0aGlzLm56VmlzaWJsZSkge1xyXG4gICAgICAgIHRoaXMubnpWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5uelZpc2libGVDaGFuZ2UuZW1pdCh0aGlzLm56VmlzaWJsZSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVPdmVybGF5QnlWaXNpYmxlKCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuZWwsICdkaXNhYmxlZCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRPdmVybGF5Q29uZmlnKCk6IE92ZXJsYXlDb25maWcge1xyXG4gICAgcmV0dXJuIG5ldyBPdmVybGF5Q29uZmlnKHtcclxuICAgICAgcG9zaXRpb25TdHJhdGVneTogdGhpcy5vdmVybGF5XHJcbiAgICAgICAgLnBvc2l0aW9uKClcclxuICAgICAgICAuZmxleGlibGVDb25uZWN0ZWRUbyh0aGlzLmVsKVxyXG4gICAgICAgIC53aXRoTG9ja2VkUG9zaXRpb24oKSxcclxuICAgICAgbWluV2lkdGg6IHRoaXMudHJpZ2dlcldpZHRoLFxyXG4gICAgICBoYXNCYWNrZHJvcDogdGhpcy5uelRyaWdnZXIgPT09ICdjbGljaycsXHJcbiAgICAgIGJhY2tkcm9wQ2xhc3M6IHRoaXMubnpCYWNrZHJvcCA/IHVuZGVmaW5lZCA6ICduei1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wJyxcclxuICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLnJlcG9zaXRpb24oKVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZU92ZXJsYXkoKTogT3ZlcmxheVJlZiB7XHJcbiAgICBpZiAoIXRoaXMub3ZlcmxheVJlZikge1xyXG4gICAgICBjb25zdCBjb25maWcgPSB0aGlzLmdldE92ZXJsYXlDb25maWcoKTtcclxuICAgICAgdGhpcy5vdmVybGF5UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZShjb25maWcpO1xyXG4gICAgICB0aGlzLnN1YnNjcmliZU92ZXJsYXlFdmVudCh0aGlzLm92ZXJsYXlSZWYpO1xyXG4gICAgICB0aGlzLnN1YnNjcmliZVRvUG9zaXRpb25zKGNvbmZpZy5wb3NpdGlvblN0cmF0ZWd5IGFzIEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSk7XHJcbiAgICAgIHJldHVybiB0aGlzLm92ZXJsYXlSZWY7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBvdmVybGF5Q29uZmlnID0gdGhpcy5vdmVybGF5UmVmLmdldENvbmZpZygpO1xyXG4gICAgICB0aGlzLnVwZGF0ZU92ZXJsYXlDb25maWcob3ZlcmxheUNvbmZpZyk7XHJcbiAgICAgIHJldHVybiB0aGlzLm92ZXJsYXlSZWY7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVPdmVybGF5Q29uZmlnKG92ZXJsYXlDb25maWc6IE92ZXJsYXlDb25maWcpOiBPdmVybGF5Q29uZmlnIHtcclxuICAgIG92ZXJsYXlDb25maWcubWluV2lkdGggPSB0aGlzLnRyaWdnZXJXaWR0aDtcclxuICAgIG92ZXJsYXlDb25maWcuaGFzQmFja2Ryb3AgPSB0aGlzLm56VHJpZ2dlciA9PT0gJ2NsaWNrJztcclxuICAgIHJldHVybiBvdmVybGF5Q29uZmlnO1xyXG4gIH1cclxuXHJcbiAgZGlzcG9zZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYpIHtcclxuICAgICAgdGhpcy5vdmVybGF5UmVmLmRpc3Bvc2UoKTtcclxuICAgICAgdGhpcy5vdmVybGF5UmVmID0gbnVsbDtcclxuICAgICAgdGhpcy5wb3NpdGlvblN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICB0aGlzLm92ZXJsYXlTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3Vic2NyaWJlVG9Qb3NpdGlvbnMocG9zaXRpb246IEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSk6IHZvaWQge1xyXG4gICAgdGhpcy5wb3NpdGlvblN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5wb3NpdGlvblN1YnNjcmlwdGlvbiA9IHBvc2l0aW9uLnBvc2l0aW9uQ2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKGNoYW5nZSA9PiB7XHJcbiAgICAgIHRoaXMubnpEcm9wZG93bk1lbnUuc2V0VmFsdWUoJ2Ryb3BEb3duUG9zaXRpb24nLCBjaGFuZ2UuY29ubmVjdGlvblBhaXIub3JpZ2luWSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3Vic2NyaWJlT3ZlcmxheUV2ZW50KG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYpOiB2b2lkIHtcclxuICAgIHRoaXMub3ZlcmxheVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5vdmVybGF5U3Vic2NyaXB0aW9uID0gbWVyZ2UoXHJcbiAgICAgIG92ZXJsYXlSZWYuYmFja2Ryb3BDbGljaygpLFxyXG4gICAgICBvdmVybGF5UmVmLmRldGFjaG1lbnRzKCksXHJcbiAgICAgIG92ZXJsYXlSZWYua2V5ZG93bkV2ZW50cygpLnBpcGUoZmlsdGVyKGUgPT4gZS5rZXlDb2RlID09PSBFU0NBUEUgJiYgIWhhc01vZGlmaWVyS2V5KGUpKSlcclxuICAgIClcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLm56RHJvcGRvd25NZW51LnNldFZpc2libGVTdGF0ZVdoZW4oZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0UG9ydGFsKCk6IFRlbXBsYXRlUG9ydGFsIHtcclxuICAgIGlmICghdGhpcy5wb3J0YWwgfHwgdGhpcy5wb3J0YWwudGVtcGxhdGVSZWYgIT09IHRoaXMubnpEcm9wZG93bk1lbnUudGVtcGxhdGVSZWYpIHtcclxuICAgICAgdGhpcy5wb3J0YWwgPSBuZXcgVGVtcGxhdGVQb3J0YWwodGhpcy5uekRyb3Bkb3duTWVudS50ZW1wbGF0ZVJlZiwgdGhpcy52aWV3Q29udGFpbmVyUmVmKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnBvcnRhbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb3Blbk1lbnUoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuZHJvcGRvd25PcGVuKSB7XHJcbiAgICAgIGNvbnN0IG92ZXJsYXlSZWYgPSB0aGlzLmNyZWF0ZU92ZXJsYXkoKTtcclxuICAgICAgY29uc3Qgb3ZlcmxheUNvbmZpZyA9IG92ZXJsYXlSZWYuZ2V0Q29uZmlnKCk7XHJcbiAgICAgIHRoaXMubnpEcm9wZG93bk1lbnUuc2V0VmFsdWUoJ29wZW4nLCB0cnVlKTtcclxuICAgICAgdGhpcy5zZXRQb3NpdGlvbihvdmVybGF5Q29uZmlnLnBvc2l0aW9uU3RyYXRlZ3kgYXMgRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5KTtcclxuICAgICAgb3ZlcmxheVJlZi5hdHRhY2godGhpcy5nZXRQb3J0YWwoKSk7XHJcbiAgICAgIHRoaXMuZHJvcGRvd25PcGVuID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xvc2VNZW51KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZikge1xyXG4gICAgICB0aGlzLm92ZXJsYXlSZWYuZGV0YWNoKCk7XHJcbiAgICAgIHRoaXMuZHJvcGRvd25PcGVuID0gZmFsc2U7XHJcbiAgICAgIHRoaXMubnpEcm9wZG93bk1lbnUuc2V0VmFsdWUoJ29wZW4nLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFBvc2l0aW9uKHBvc2l0aW9uU3RyYXRlZ3k6IEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSk6IHZvaWQge1xyXG4gICAgdGhpcy5wb3NpdGlvblN0cmF0ZWd5ID0gcG9zaXRpb25TdHJhdGVneTtcclxuICAgIHBvc2l0aW9uU3RyYXRlZ3kud2l0aFBvc2l0aW9ucyhbLi4udGhpcy5wb3NpdGlvbnNdKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlUG9zaXRpb25TdHJhdGVneShwb3NpdGlvbnM6IENvbm5lY3RlZFBvc2l0aW9uW10pOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnBvc2l0aW9uU3RyYXRlZ3kpIHtcclxuICAgICAgdGhpcy5wb3NpdGlvblN0cmF0ZWd5LndpdGhQb3NpdGlvbnMocG9zaXRpb25zKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0VHJpZ2dlcldpZHRoKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLm56TWF0Y2hXaWR0aEVsZW1lbnQgPyB0aGlzLm56TWF0Y2hXaWR0aEVsZW1lbnQubmF0aXZlRWxlbWVudCA6IHRoaXMuZWw7XHJcbiAgICAgIHRoaXMudHJpZ2dlcldpZHRoID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGluaXRBY3Rpb25TdWJzY3JpYmUoKTogdm9pZCB7XHJcbiAgICBjb25zdCBob3N0VmlzaWJsZSQgPSB0aGlzLm56VHJpZ2dlciA9PT0gJ2hvdmVyJyA/IHRoaXMuaG92ZXIkIDogdGhpcy4kY2xpY2s7XHJcbiAgICBjb25zdCBkcm9wZG93bk1lbnVWaXNpYmxlJCA9IHRoaXMubnpEcm9wZG93bk1lbnUudmlzaWJsZSQ7XHJcbiAgICBjb25zdCBtZW51Q2xpY2tWaXNpYmxlJCA9IHRoaXMubnpDbGlja0hpZGUgPyB0aGlzLm56RHJvcGRvd25NZW51Lm56TWVudURyb3Bkb3duU2VydmljZS5tZW51SXRlbUNsaWNrJC5waXBlKG1hcFRvKGZhbHNlKSkgOiBFTVBUWTtcclxuICAgIGNvbnN0IHN1cFZpc2libGUkID0gbWVyZ2UoZHJvcGRvd25NZW51VmlzaWJsZSQsIGhvc3RWaXNpYmxlJCwgbWVudUNsaWNrVmlzaWJsZSQpO1xyXG4gICAgY29uc3Qgc3ViVmlzaWJsZSQgPSB0aGlzLm56RHJvcGRvd25NZW51Lm56TWVudURyb3Bkb3duU2VydmljZS5tZW51T3BlbiQ7XHJcbiAgICBjb21iaW5lTGF0ZXN0KFtzdXBWaXNpYmxlJCwgc3ViVmlzaWJsZSRdKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBtYXAoKFtzdXBWaXNpYmxlLCBzdWJWaXNpYmxlXSkgPT4gc3VwVmlzaWJsZSB8fCBzdWJWaXNpYmxlKSxcclxuICAgICAgICBkZWJvdW5jZVRpbWUoNTApLFxyXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXHJcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZSh2aXNpYmxlID0+IHtcclxuICAgICAgICBpZiAoIXRoaXMubnpEaXNhYmxlZCAmJiB0aGlzLm56VmlzaWJsZSAhPT0gdmlzaWJsZSkge1xyXG4gICAgICAgICAgdGhpcy5uelZpc2libGUgPSB2aXNpYmxlO1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVPdmVybGF5QnlWaXNpYmxlKCk7XHJcbiAgICAgICAgICB0aGlzLm56VmlzaWJsZUNoYW5nZS5lbWl0KHRoaXMubnpWaXNpYmxlKTtcclxuICAgICAgICAgIHRoaXMuc2V0VHJpZ2dlcldpZHRoKCk7XHJcbiAgICAgICAgICB0aGlzLm56RHJvcGRvd25NZW51LnNldFZhbHVlKCd0cmlnZ2VyV2lkdGgnLCB0aGlzLnRyaWdnZXJXaWR0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZU92ZXJsYXlCeVZpc2libGUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uelZpc2libGUpIHtcclxuICAgICAgdGhpcy5vcGVuTWVudSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jbG9zZU1lbnUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZURpc2FibGVkU3RhdGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldERpc2FibGVkKHRoaXMubnpEaXNhYmxlZCk7XHJcbiAgfVxyXG5cclxuICByZWdlbmVyYXRlUG9zaXRpb24ocGxhY2VtZW50OiBOelBsYWNlbWVudFR5cGUsIHBvc2l0aW9uczogQ29ubmVjdGlvblBvc2l0aW9uUGFpcltdKTogQ29ubmVjdGlvblBvc2l0aW9uUGFpcltdIHtcclxuICAgIHJldHVybiBbUE9TSVRJT05fTUFQW3BsYWNlbWVudF0sIC4uLnBvc2l0aW9uc107XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LFxyXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sXHJcbiAgICBAT3B0aW9uYWwoKSBASG9zdCgpIHByaXZhdGUgbnpCdXR0b25Db21wb25lbnQ6IE56QnV0dG9uQ29tcG9uZW50LFxyXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBuekJ1dHRvbkdyb3VwQ29tcG9uZW50OiBOekJ1dHRvbkdyb3VwQ29tcG9uZW50LFxyXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmXHJcbiAgKSB7XHJcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtZHJvcGRvd24tdHJpZ2dlcicpO1xyXG4gICAgaWYgKHRoaXMubnpCdXR0b25Db21wb25lbnQpIHtcclxuICAgICAgdGhpcy5uekJ1dHRvbkNvbXBvbmVudC5pc0luRHJvcGRvd24gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubnpCdXR0b25Hcm91cENvbXBvbmVudCkge1xyXG4gICAgICB0aGlzLm56QnV0dG9uR3JvdXBDb21wb25lbnQuaXNJbkRyb3Bkb3duID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56RHJvcGRvd25NZW51KSB7XHJcbiAgICAgIHRoaXMuc2V0VHJpZ2dlcldpZHRoKCk7XHJcbiAgICAgIHRoaXMuaW5pdEFjdGlvblN1YnNjcmliZSgpO1xyXG4gICAgICB0aGlzLnVwZGF0ZURpc2FibGVkU3RhdGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgICB0aGlzLmRpc3Bvc2UoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgbnpWaXNpYmxlLCBuelRyaWdnZXIsIG56UGxhY2VtZW50LCBuekRpc2FibGVkLCBuek92ZXJsYXlDbGFzc05hbWUsIG56T3ZlcmxheVN0eWxlLCBuelRhYmxlRmlsdGVyIH0gPSBjaGFuZ2VzO1xyXG4gICAgaWYgKHRoaXMubnpEcm9wZG93bk1lbnUpIHtcclxuICAgICAgaWYgKG56VmlzaWJsZSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlT3ZlcmxheUJ5VmlzaWJsZSgpO1xyXG4gICAgICAgIHRoaXMubnpEcm9wZG93bk1lbnUudmlzaWJsZSQubmV4dCh0aGlzLm56VmlzaWJsZSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG56VHJpZ2dlcikge1xyXG4gICAgICAgIHRoaXMubnpEcm9wZG93bk1lbnUuc2V0VmFsdWUoJ256VHJpZ2dlcicsIHRoaXMubnpUcmlnZ2VyKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobnpUYWJsZUZpbHRlcikge1xyXG4gICAgICAgIHRoaXMubnpEcm9wZG93bk1lbnUuc2V0VmFsdWUoJ256VGFibGVGaWx0ZXInLCB0aGlzLm56VGFibGVGaWx0ZXIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChuek92ZXJsYXlDbGFzc05hbWUpIHtcclxuICAgICAgICB0aGlzLm56RHJvcGRvd25NZW51LnNldFZhbHVlKCduek92ZXJsYXlDbGFzc05hbWUnLCB0aGlzLm56T3ZlcmxheUNsYXNzTmFtZSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG56T3ZlcmxheVN0eWxlKSB7XHJcbiAgICAgICAgdGhpcy5uekRyb3Bkb3duTWVudS5zZXRWYWx1ZSgnbnpPdmVybGF5U3R5bGUnLCB0aGlzLm56T3ZlcmxheVN0eWxlKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobnpQbGFjZW1lbnQpIHtcclxuICAgICAgICB0aGlzLm56RHJvcGRvd25NZW51LnNldFZhbHVlKCduelBsYWNlbWVudCcsIHRoaXMubnpQbGFjZW1lbnQpO1xyXG4gICAgICAgIHRoaXMubnpEcm9wZG93bk1lbnUuc2V0VmFsdWUoJ2Ryb3BEb3duUG9zaXRpb24nLCB0aGlzLm56RHJvcGRvd25NZW51Lm56UGxhY2VtZW50LmluZGV4T2YoJ3RvcCcpICE9PSAtMSA/ICd0b3AnIDogJ2JvdHRvbScpO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb25zID0gdGhpcy5yZWdlbmVyYXRlUG9zaXRpb24odGhpcy5uelBsYWNlbWVudCwgdGhpcy5wb3NpdGlvbnMpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUG9zaXRpb25TdHJhdGVneSh0aGlzLnBvc2l0aW9ucyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChuekRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlRGlzYWJsZWRTdGF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=