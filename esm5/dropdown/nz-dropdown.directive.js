import { __decorate, __metadata, __read, __spread } from "tslib";
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
var NzDropDownDirective = /** @class */ (function () {
    function NzDropDownDirective(elementRef, renderer, overlay, platform, nzButtonComponent, nzButtonGroupComponent, viewContainerRef) {
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
        this.positions = __spread(DEFAULT_DROPDOWN_POSITIONS);
        this.positionSubscription = Subscription.EMPTY;
        this.overlaySubscription = Subscription.EMPTY;
        this.hover$ = merge(fromEvent(this.el, 'mouseenter').pipe(mapTo(true)), fromEvent(this.el, 'mouseleave').pipe(mapTo(false)));
        this.$click = fromEvent(this.el, 'click').pipe(tap(function (e) { return e.stopPropagation(); }), mapTo(true));
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
    NzDropDownDirective.prototype.setDisabled = function (disabled) {
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
    };
    NzDropDownDirective.prototype.getOverlayConfig = function () {
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
    };
    NzDropDownDirective.prototype.createOverlay = function () {
        if (!this.overlayRef) {
            var config = this.getOverlayConfig();
            this.overlayRef = this.overlay.create(config);
            this.subscribeOverlayEvent(this.overlayRef);
            this.subscribeToPositions(config.positionStrategy);
            return this.overlayRef;
        }
        else {
            var overlayConfig = this.overlayRef.getConfig();
            this.updateOverlayConfig(overlayConfig);
            return this.overlayRef;
        }
    };
    NzDropDownDirective.prototype.updateOverlayConfig = function (overlayConfig) {
        overlayConfig.minWidth = this.triggerWidth;
        overlayConfig.hasBackdrop = this.nzTrigger === 'click';
        return overlayConfig;
    };
    NzDropDownDirective.prototype.dispose = function () {
        if (this.overlayRef) {
            this.overlayRef.dispose();
            this.overlayRef = null;
            this.positionSubscription.unsubscribe();
            this.overlaySubscription.unsubscribe();
        }
    };
    NzDropDownDirective.prototype.subscribeToPositions = function (position) {
        var _this = this;
        this.positionSubscription.unsubscribe();
        this.positionSubscription = position.positionChanges.pipe(takeUntil(this.destroy$)).subscribe(function (change) {
            _this.nzDropdownMenu.setValue('dropDownPosition', change.connectionPair.originY);
        });
    };
    NzDropDownDirective.prototype.subscribeOverlayEvent = function (overlayRef) {
        var _this = this;
        this.overlaySubscription.unsubscribe();
        this.overlaySubscription = merge(overlayRef.backdropClick(), overlayRef.detachments(), overlayRef.keydownEvents().pipe(filter(function (e) { return e.keyCode === ESCAPE && !hasModifierKey(e); })))
            .pipe(takeUntil(this.destroy$))
            .subscribe(function () {
            _this.nzDropdownMenu.setVisibleStateWhen(false);
        });
    };
    NzDropDownDirective.prototype.getPortal = function () {
        if (!this.portal || this.portal.templateRef !== this.nzDropdownMenu.templateRef) {
            this.portal = new TemplatePortal(this.nzDropdownMenu.templateRef, this.viewContainerRef);
        }
        return this.portal;
    };
    NzDropDownDirective.prototype.openMenu = function () {
        if (!this.dropdownOpen) {
            var overlayRef = this.createOverlay();
            var overlayConfig = overlayRef.getConfig();
            this.nzDropdownMenu.setValue('open', true);
            this.setPosition(overlayConfig.positionStrategy);
            overlayRef.attach(this.getPortal());
            this.dropdownOpen = true;
        }
    };
    NzDropDownDirective.prototype.closeMenu = function () {
        if (this.overlayRef) {
            this.overlayRef.detach();
            this.dropdownOpen = false;
            this.nzDropdownMenu.setValue('open', false);
        }
    };
    NzDropDownDirective.prototype.setPosition = function (positionStrategy) {
        this.positionStrategy = positionStrategy;
        positionStrategy.withPositions(__spread(this.positions));
    };
    NzDropDownDirective.prototype.updatePositionStrategy = function (positions) {
        if (this.positionStrategy) {
            this.positionStrategy.withPositions(positions);
        }
    };
    NzDropDownDirective.prototype.setTriggerWidth = function () {
        if (this.platform.isBrowser) {
            var element = this.nzMatchWidthElement ? this.nzMatchWidthElement.nativeElement : this.el;
            this.triggerWidth = element.getBoundingClientRect().width;
        }
    };
    NzDropDownDirective.prototype.initActionSubscribe = function () {
        var _this = this;
        var hostVisible$ = this.nzTrigger === 'hover' ? this.hover$ : this.$click;
        var dropdownMenuVisible$ = this.nzDropdownMenu.visible$;
        var menuClickVisible$ = this.nzClickHide ? this.nzDropdownMenu.nzMenuDropdownService.menuItemClick$.pipe(mapTo(false)) : EMPTY;
        var supVisible$ = merge(dropdownMenuVisible$, hostVisible$, menuClickVisible$);
        var subVisible$ = this.nzDropdownMenu.nzMenuDropdownService.menuOpen$;
        combineLatest([supVisible$, subVisible$])
            .pipe(map(function (_a) {
            var _b = __read(_a, 2), supVisible = _b[0], subVisible = _b[1];
            return supVisible || subVisible;
        }), debounceTime(50), distinctUntilChanged(), takeUntil(this.destroy$))
            .subscribe(function (visible) {
            if (!_this.nzDisabled && _this.nzVisible !== visible) {
                _this.nzVisible = visible;
                _this.updateOverlayByVisible();
                _this.nzVisibleChange.emit(_this.nzVisible);
                _this.setTriggerWidth();
                _this.nzDropdownMenu.setValue('triggerWidth', _this.triggerWidth);
            }
        });
    };
    NzDropDownDirective.prototype.updateOverlayByVisible = function () {
        if (this.nzVisible) {
            this.openMenu();
        }
        else {
            this.closeMenu();
        }
    };
    NzDropDownDirective.prototype.updateDisabledState = function () {
        this.setDisabled(this.nzDisabled);
    };
    NzDropDownDirective.prototype.regeneratePosition = function (placement, positions) {
        return __spread([POSITION_MAP[placement]], positions);
    };
    NzDropDownDirective.prototype.ngAfterViewInit = function () {
        if (this.nzDropdownMenu) {
            this.setTriggerWidth();
            this.initActionSubscribe();
            this.updateDisabledState();
        }
    };
    NzDropDownDirective.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
        this.dispose();
    };
    NzDropDownDirective.prototype.ngOnChanges = function (changes) {
        var nzVisible = changes.nzVisible, nzTrigger = changes.nzTrigger, nzPlacement = changes.nzPlacement, nzDisabled = changes.nzDisabled, nzOverlayClassName = changes.nzOverlayClassName, nzOverlayStyle = changes.nzOverlayStyle, nzTableFilter = changes.nzTableFilter;
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
    };
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
    return NzDropDownDirective;
}());
export { NzDropDownDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJvcGRvd24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9kcm9wZG93bi8iLCJzb3VyY2VzIjpbIm56LWRyb3Bkb3duLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMvRCxPQUFPLEVBSUwsT0FBTyxFQUNQLGFBQWEsRUFFZCxNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLElBQUksRUFDSixLQUFLLEVBR0wsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBRVQsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDNUYsT0FBTyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hHLE9BQU8sRUFBRSx1QkFBdUIsRUFBbUIsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7QUFFeEY7SUFtTUUsNkJBQ1MsVUFBc0IsRUFDckIsUUFBbUIsRUFDbkIsT0FBZ0Is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OzJEQUFtQjtJQUNsQjtRQUFmLFlBQVksRUFBRTs7NERBQW9CO0lBQ25CO1FBQWYsWUFBWSxFQUFFOzsyREFBb0I7SUFDbkI7UUFBZixZQUFZLEVBQUU7OzBEQUFtQjtJQUNsQjtRQUFmLFlBQVksRUFBRTs7OERBQXVCOzhCQXRFakQ7Q0F5U0MsQUFqUUQsSUFpUUM7U0E3UFksbUJBQW1CO2tEQUFuQixtQkFBbUI7Y0FKL0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUUsWUFBWTthQUN2Qjs7c0JBcU1JLFFBQVE7O3NCQUFJLElBQUk7O3NCQUNoQixRQUFROztrQkFsTFYsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgRVNDQVBFLCBoYXNNb2RpZmllcktleSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XHJcbmltcG9ydCB7XHJcbiAgQ29ubmVjdGVkUG9zaXRpb24sXHJcbiAgQ29ubmVjdGlvblBvc2l0aW9uUGFpcixcclxuICBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3ksXHJcbiAgT3ZlcmxheSxcclxuICBPdmVybGF5Q29uZmlnLFxyXG4gIE92ZXJsYXlSZWZcclxufSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHsgVGVtcGxhdGVQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcclxuaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBIb3N0LFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpCdXR0b25Db21wb25lbnQsIE56QnV0dG9uR3JvdXBDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL2J1dHRvbic7XHJcbmltcG9ydCB7IERFRkFVTFRfRFJPUERPV05fUE9TSVRJT05TLCBJbnB1dEJvb2xlYW4sIFBPU0lUSU9OX01BUCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIEVNUFRZLCBmcm9tRXZlbnQsIG1lcmdlLCBPYnNlcnZhYmxlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBtYXAsIG1hcFRvLCB0YWtlVW50aWwsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgTnpEcm9wZG93bk1lbnVDb21wb25lbnQsIE56UGxhY2VtZW50VHlwZSB9IGZyb20gJy4vbnotZHJvcGRvd24tbWVudS5jb21wb25lbnQnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbnotZHJvcGRvd25dJyxcclxuICBleHBvcnRBczogJ256RHJvcGRvd24nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekRyb3BEb3duRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG4gIHByaXZhdGUgcG9ydGFsOiBUZW1wbGF0ZVBvcnRhbDtcclxuICBwcml2YXRlIG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYgfCBudWxsID0gbnVsbDtcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuICBwcml2YXRlIHRyaWdnZXJXaWR0aCA9IDA7XHJcbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICBwcml2YXRlIGRyb3Bkb3duT3BlbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgcG9zaXRpb25TdHJhdGVneTogRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5O1xyXG4gIHByaXZhdGUgcG9zaXRpb25zOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyW10gPSBbLi4uREVGQVVMVF9EUk9QRE9XTl9QT1NJVElPTlNdO1xyXG4gIHByaXZhdGUgcG9zaXRpb25TdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XHJcbiAgcHJpdmF0ZSBvdmVybGF5U3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xyXG4gIHJlYWRvbmx5IGhvdmVyJDogT2JzZXJ2YWJsZTxib29sZWFuPiA9IG1lcmdlKFxyXG4gICAgZnJvbUV2ZW50KHRoaXMuZWwsICdtb3VzZWVudGVyJykucGlwZShtYXBUbyh0cnVlKSksXHJcbiAgICBmcm9tRXZlbnQodGhpcy5lbCwgJ21vdXNlbGVhdmUnKS5waXBlKG1hcFRvKGZhbHNlKSlcclxuICApO1xyXG4gIHJlYWRvbmx5ICRjbGljazogT2JzZXJ2YWJsZTxib29sZWFuPiA9IGZyb21FdmVudCh0aGlzLmVsLCAnY2xpY2snKS5waXBlKFxyXG4gICAgdGFwKGUgPT4gZS5zdG9wUHJvcGFnYXRpb24oKSksXHJcbiAgICBtYXBUbyh0cnVlKVxyXG4gICk7XHJcbiAgQElucHV0KCkgbnpEcm9wZG93bk1lbnU6IE56RHJvcGRvd25NZW51Q29tcG9uZW50O1xyXG4gIEBJbnB1dCgpIG56VHJpZ2dlcjogJ2NsaWNrJyB8ICdob3ZlcicgPSAnaG92ZXInO1xyXG4gIEBJbnB1dCgpIG56TWF0Y2hXaWR0aEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QmFja2Ryb3AgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekNsaWNrSGlkZSA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpWaXNpYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56VGFibGVGaWx0ZXIgPSBmYWxzZTtcclxuICBASW5wdXQoKSBuek92ZXJsYXlDbGFzc05hbWUgPSAnJztcclxuICBASW5wdXQoKSBuek92ZXJsYXlTdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xyXG4gIEBJbnB1dCgpIG56UGxhY2VtZW50OiBOelBsYWNlbWVudFR5cGUgPSAnYm90dG9tTGVmdCc7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56VmlzaWJsZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBzZXREaXNhYmxlZChkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKGRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWwsICdkaXNhYmxlZCcsICcnKTtcclxuICAgICAgaWYgKHRoaXMubnpWaXNpYmxlKSB7XHJcbiAgICAgICAgdGhpcy5uelZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm56VmlzaWJsZUNoYW5nZS5lbWl0KHRoaXMubnpWaXNpYmxlKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZU92ZXJsYXlCeVZpc2libGUoKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy5lbCwgJ2Rpc2FibGVkJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE92ZXJsYXlDb25maWcoKTogT3ZlcmxheUNvbmZpZyB7XHJcbiAgICByZXR1cm4gbmV3IE92ZXJsYXlDb25maWcoe1xyXG4gICAgICBwb3NpdGlvblN0cmF0ZWd5OiB0aGlzLm92ZXJsYXlcclxuICAgICAgICAucG9zaXRpb24oKVxyXG4gICAgICAgIC5mbGV4aWJsZUNvbm5lY3RlZFRvKHRoaXMuZWwpXHJcbiAgICAgICAgLndpdGhMb2NrZWRQb3NpdGlvbigpLFxyXG4gICAgICBtaW5XaWR0aDogdGhpcy50cmlnZ2VyV2lkdGgsXHJcbiAgICAgIGhhc0JhY2tkcm9wOiB0aGlzLm56VHJpZ2dlciA9PT0gJ2NsaWNrJyxcclxuICAgICAgYmFja2Ryb3BDbGFzczogdGhpcy5uekJhY2tkcm9wID8gdW5kZWZpbmVkIDogJ256LW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3AnLFxyXG4gICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMucmVwb3NpdGlvbigpXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlT3ZlcmxheSgpOiBPdmVybGF5UmVmIHtcclxuICAgIGlmICghdGhpcy5vdmVybGF5UmVmKSB7XHJcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuZ2V0T3ZlcmxheUNvbmZpZygpO1xyXG4gICAgICB0aGlzLm92ZXJsYXlSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKGNvbmZpZyk7XHJcbiAgICAgIHRoaXMuc3Vic2NyaWJlT3ZlcmxheUV2ZW50KHRoaXMub3ZlcmxheVJlZik7XHJcbiAgICAgIHRoaXMuc3Vic2NyaWJlVG9Qb3NpdGlvbnMoY29uZmlnLnBvc2l0aW9uU3RyYXRlZ3kgYXMgRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5KTtcclxuICAgICAgcmV0dXJuIHRoaXMub3ZlcmxheVJlZjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IG92ZXJsYXlDb25maWcgPSB0aGlzLm92ZXJsYXlSZWYuZ2V0Q29uZmlnKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlT3ZlcmxheUNvbmZpZyhvdmVybGF5Q29uZmlnKTtcclxuICAgICAgcmV0dXJuIHRoaXMub3ZlcmxheVJlZjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZU92ZXJsYXlDb25maWcob3ZlcmxheUNvbmZpZzogT3ZlcmxheUNvbmZpZyk6IE92ZXJsYXlDb25maWcge1xyXG4gICAgb3ZlcmxheUNvbmZpZy5taW5XaWR0aCA9IHRoaXMudHJpZ2dlcldpZHRoO1xyXG4gICAgb3ZlcmxheUNvbmZpZy5oYXNCYWNrZHJvcCA9IHRoaXMubnpUcmlnZ2VyID09PSAnY2xpY2snO1xyXG4gICAgcmV0dXJuIG92ZXJsYXlDb25maWc7XHJcbiAgfVxyXG5cclxuICBkaXNwb3NlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZikge1xyXG4gICAgICB0aGlzLm92ZXJsYXlSZWYuZGlzcG9zZSgpO1xyXG4gICAgICB0aGlzLm92ZXJsYXlSZWYgPSBudWxsO1xyXG4gICAgICB0aGlzLnBvc2l0aW9uU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIHRoaXMub3ZlcmxheVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdWJzY3JpYmVUb1Bvc2l0aW9ucyhwb3NpdGlvbjogRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5KTogdm9pZCB7XHJcbiAgICB0aGlzLnBvc2l0aW9uU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLnBvc2l0aW9uU3Vic2NyaXB0aW9uID0gcG9zaXRpb24ucG9zaXRpb25DaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoY2hhbmdlID0+IHtcclxuICAgICAgdGhpcy5uekRyb3Bkb3duTWVudS5zZXRWYWx1ZSgnZHJvcERvd25Qb3NpdGlvbicsIGNoYW5nZS5jb25uZWN0aW9uUGFpci5vcmlnaW5ZKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdWJzY3JpYmVPdmVybGF5RXZlbnQob3ZlcmxheVJlZjogT3ZlcmxheVJlZik6IHZvaWQge1xyXG4gICAgdGhpcy5vdmVybGF5U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLm92ZXJsYXlTdWJzY3JpcHRpb24gPSBtZXJnZShcclxuICAgICAgb3ZlcmxheVJlZi5iYWNrZHJvcENsaWNrKCksXHJcbiAgICAgIG92ZXJsYXlSZWYuZGV0YWNobWVudHMoKSxcclxuICAgICAgb3ZlcmxheVJlZi5rZXlkb3duRXZlbnRzKCkucGlwZShmaWx0ZXIoZSA9PiBlLmtleUNvZGUgPT09IEVTQ0FQRSAmJiAhaGFzTW9kaWZpZXJLZXkoZSkpKVxyXG4gICAgKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubnpEcm9wZG93bk1lbnUuc2V0VmlzaWJsZVN0YXRlV2hlbihmYWxzZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRQb3J0YWwoKTogVGVtcGxhdGVQb3J0YWwge1xyXG4gICAgaWYgKCF0aGlzLnBvcnRhbCB8fCB0aGlzLnBvcnRhbC50ZW1wbGF0ZVJlZiAhPT0gdGhpcy5uekRyb3Bkb3duTWVudS50ZW1wbGF0ZVJlZikge1xyXG4gICAgICB0aGlzLnBvcnRhbCA9IG5ldyBUZW1wbGF0ZVBvcnRhbCh0aGlzLm56RHJvcGRvd25NZW51LnRlbXBsYXRlUmVmLCB0aGlzLnZpZXdDb250YWluZXJSZWYpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMucG9ydGFsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvcGVuTWVudSgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5kcm9wZG93bk9wZW4pIHtcclxuICAgICAgY29uc3Qgb3ZlcmxheVJlZiA9IHRoaXMuY3JlYXRlT3ZlcmxheSgpO1xyXG4gICAgICBjb25zdCBvdmVybGF5Q29uZmlnID0gb3ZlcmxheVJlZi5nZXRDb25maWcoKTtcclxuICAgICAgdGhpcy5uekRyb3Bkb3duTWVudS5zZXRWYWx1ZSgnb3BlbicsIHRydWUpO1xyXG4gICAgICB0aGlzLnNldFBvc2l0aW9uKG92ZXJsYXlDb25maWcucG9zaXRpb25TdHJhdGVneSBhcyBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3kpO1xyXG4gICAgICBvdmVybGF5UmVmLmF0dGFjaCh0aGlzLmdldFBvcnRhbCgpKTtcclxuICAgICAgdGhpcy5kcm9wZG93bk9wZW4gPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbG9zZU1lbnUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5vdmVybGF5UmVmKSB7XHJcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5kZXRhY2goKTtcclxuICAgICAgdGhpcy5kcm9wZG93bk9wZW4gPSBmYWxzZTtcclxuICAgICAgdGhpcy5uekRyb3Bkb3duTWVudS5zZXRWYWx1ZSgnb3BlbicsIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0UG9zaXRpb24ocG9zaXRpb25TdHJhdGVneTogRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5KTogdm9pZCB7XHJcbiAgICB0aGlzLnBvc2l0aW9uU3RyYXRlZ3kgPSBwb3NpdGlvblN0cmF0ZWd5O1xyXG4gICAgcG9zaXRpb25TdHJhdGVneS53aXRoUG9zaXRpb25zKFsuLi50aGlzLnBvc2l0aW9uc10pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVQb3NpdGlvblN0cmF0ZWd5KHBvc2l0aW9uczogQ29ubmVjdGVkUG9zaXRpb25bXSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMucG9zaXRpb25TdHJhdGVneSkge1xyXG4gICAgICB0aGlzLnBvc2l0aW9uU3RyYXRlZ3kud2l0aFBvc2l0aW9ucyhwb3NpdGlvbnMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRUcmlnZ2VyV2lkdGgoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMubnpNYXRjaFdpZHRoRWxlbWVudCA/IHRoaXMubnpNYXRjaFdpZHRoRWxlbWVudC5uYXRpdmVFbGVtZW50IDogdGhpcy5lbDtcclxuICAgICAgdGhpcy50cmlnZ2VyV2lkdGggPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5pdEFjdGlvblN1YnNjcmliZSgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGhvc3RWaXNpYmxlJCA9IHRoaXMubnpUcmlnZ2VyID09PSAnaG92ZXInID8gdGhpcy5ob3ZlciQgOiB0aGlzLiRjbGljaztcclxuICAgIGNvbnN0IGRyb3Bkb3duTWVudVZpc2libGUkID0gdGhpcy5uekRyb3Bkb3duTWVudS52aXNpYmxlJDtcclxuICAgIGNvbnN0IG1lbnVDbGlja1Zpc2libGUkID0gdGhpcy5uekNsaWNrSGlkZSA/IHRoaXMubnpEcm9wZG93bk1lbnUubnpNZW51RHJvcGRvd25TZXJ2aWNlLm1lbnVJdGVtQ2xpY2skLnBpcGUobWFwVG8oZmFsc2UpKSA6IEVNUFRZO1xyXG4gICAgY29uc3Qgc3VwVmlzaWJsZSQgPSBtZXJnZShkcm9wZG93bk1lbnVWaXNpYmxlJCwgaG9zdFZpc2libGUkLCBtZW51Q2xpY2tWaXNpYmxlJCk7XHJcbiAgICBjb25zdCBzdWJWaXNpYmxlJCA9IHRoaXMubnpEcm9wZG93bk1lbnUubnpNZW51RHJvcGRvd25TZXJ2aWNlLm1lbnVPcGVuJDtcclxuICAgIGNvbWJpbmVMYXRlc3QoW3N1cFZpc2libGUkLCBzdWJWaXNpYmxlJF0pXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIG1hcCgoW3N1cFZpc2libGUsIHN1YlZpc2libGVdKSA9PiBzdXBWaXNpYmxlIHx8IHN1YlZpc2libGUpLFxyXG4gICAgICAgIGRlYm91bmNlVGltZSg1MCksXHJcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcclxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKHZpc2libGUgPT4ge1xyXG4gICAgICAgIGlmICghdGhpcy5uekRpc2FibGVkICYmIHRoaXMubnpWaXNpYmxlICE9PSB2aXNpYmxlKSB7XHJcbiAgICAgICAgICB0aGlzLm56VmlzaWJsZSA9IHZpc2libGU7XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZU92ZXJsYXlCeVZpc2libGUoKTtcclxuICAgICAgICAgIHRoaXMubnpWaXNpYmxlQ2hhbmdlLmVtaXQodGhpcy5uelZpc2libGUpO1xyXG4gICAgICAgICAgdGhpcy5zZXRUcmlnZ2VyV2lkdGgoKTtcclxuICAgICAgICAgIHRoaXMubnpEcm9wZG93bk1lbnUuc2V0VmFsdWUoJ3RyaWdnZXJXaWR0aCcsIHRoaXMudHJpZ2dlcldpZHRoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlT3ZlcmxheUJ5VmlzaWJsZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56VmlzaWJsZSkge1xyXG4gICAgICB0aGlzLm9wZW5NZW51KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNsb3NlTWVudSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlRGlzYWJsZWRTdGF0ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0RGlzYWJsZWQodGhpcy5uekRpc2FibGVkKTtcclxuICB9XHJcblxyXG4gIHJlZ2VuZXJhdGVQb3NpdGlvbihwbGFjZW1lbnQ6IE56UGxhY2VtZW50VHlwZSwgcG9zaXRpb25zOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyW10pOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyW10ge1xyXG4gICAgcmV0dXJuIFtQT1NJVElPTl9NQVBbcGxhY2VtZW50XSwgLi4ucG9zaXRpb25zXTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksXHJcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcclxuICAgIEBPcHRpb25hbCgpIEBIb3N0KCkgcHJpdmF0ZSBuekJ1dHRvbkNvbXBvbmVudDogTnpCdXR0b25Db21wb25lbnQsXHJcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIG56QnV0dG9uR3JvdXBDb21wb25lbnQ6IE56QnV0dG9uR3JvdXBDb21wb25lbnQsXHJcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWZcclxuICApIHtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1kcm9wZG93bi10cmlnZ2VyJyk7XHJcbiAgICBpZiAodGhpcy5uekJ1dHRvbkNvbXBvbmVudCkge1xyXG4gICAgICB0aGlzLm56QnV0dG9uQ29tcG9uZW50LmlzSW5Ecm9wZG93biA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5uekJ1dHRvbkdyb3VwQ29tcG9uZW50KSB7XHJcbiAgICAgIHRoaXMubnpCdXR0b25Hcm91cENvbXBvbmVudC5pc0luRHJvcGRvd24gPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpEcm9wZG93bk1lbnUpIHtcclxuICAgICAgdGhpcy5zZXRUcmlnZ2VyV2lkdGgoKTtcclxuICAgICAgdGhpcy5pbml0QWN0aW9uU3Vic2NyaWJlKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlRGlzYWJsZWRTdGF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICAgIHRoaXMuZGlzcG9zZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3QgeyBuelZpc2libGUsIG56VHJpZ2dlciwgbnpQbGFjZW1lbnQsIG56RGlzYWJsZWQsIG56T3ZlcmxheUNsYXNzTmFtZSwgbnpPdmVybGF5U3R5bGUsIG56VGFibGVGaWx0ZXIgfSA9IGNoYW5nZXM7XHJcbiAgICBpZiAodGhpcy5uekRyb3Bkb3duTWVudSkge1xyXG4gICAgICBpZiAobnpWaXNpYmxlKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVPdmVybGF5QnlWaXNpYmxlKCk7XHJcbiAgICAgICAgdGhpcy5uekRyb3Bkb3duTWVudS52aXNpYmxlJC5uZXh0KHRoaXMubnpWaXNpYmxlKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobnpUcmlnZ2VyKSB7XHJcbiAgICAgICAgdGhpcy5uekRyb3Bkb3duTWVudS5zZXRWYWx1ZSgnbnpUcmlnZ2VyJywgdGhpcy5uelRyaWdnZXIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChuelRhYmxlRmlsdGVyKSB7XHJcbiAgICAgICAgdGhpcy5uekRyb3Bkb3duTWVudS5zZXRWYWx1ZSgnbnpUYWJsZUZpbHRlcicsIHRoaXMubnpUYWJsZUZpbHRlcik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG56T3ZlcmxheUNsYXNzTmFtZSkge1xyXG4gICAgICAgIHRoaXMubnpEcm9wZG93bk1lbnUuc2V0VmFsdWUoJ256T3ZlcmxheUNsYXNzTmFtZScsIHRoaXMubnpPdmVybGF5Q2xhc3NOYW1lKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobnpPdmVybGF5U3R5bGUpIHtcclxuICAgICAgICB0aGlzLm56RHJvcGRvd25NZW51LnNldFZhbHVlKCduek92ZXJsYXlTdHlsZScsIHRoaXMubnpPdmVybGF5U3R5bGUpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChuelBsYWNlbWVudCkge1xyXG4gICAgICAgIHRoaXMubnpEcm9wZG93bk1lbnUuc2V0VmFsdWUoJ256UGxhY2VtZW50JywgdGhpcy5uelBsYWNlbWVudCk7XHJcbiAgICAgICAgdGhpcy5uekRyb3Bkb3duTWVudS5zZXRWYWx1ZSgnZHJvcERvd25Qb3NpdGlvbicsIHRoaXMubnpEcm9wZG93bk1lbnUubnpQbGFjZW1lbnQuaW5kZXhPZigndG9wJykgIT09IC0xID8gJ3RvcCcgOiAnYm90dG9tJyk7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbnMgPSB0aGlzLnJlZ2VuZXJhdGVQb3NpdGlvbih0aGlzLm56UGxhY2VtZW50LCB0aGlzLnBvc2l0aW9ucyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvblN0cmF0ZWd5KHRoaXMucG9zaXRpb25zKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKG56RGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy51cGRhdGVEaXNhYmxlZFN0YXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==