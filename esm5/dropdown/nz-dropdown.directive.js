/**
 * @fileoverview added by tsickle
 * Generated from: nz-dropdown.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { hasModifierKey, ESCAPE } from '@angular/cdk/keycodes';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { Platform } from '@angular/cdk/platform';
import { TemplatePortal } from '@angular/cdk/portal';
import { Directive, ElementRef, EventEmitter, Host, Input, Optional, Output, Renderer2, ViewContainerRef } from '@angular/core';
import { NzButtonComponent, NzButtonGroupComponent } from 'ng-zorro-antd/button';
import { DEFAULT_DROPDOWN_POSITIONS, InputBoolean, POSITION_MAP } from 'ng-zorro-antd/core';
import { combineLatest, fromEvent, merge, EMPTY, Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, mapTo, takeUntil, tap } from 'rxjs/operators';
import { NzDropdownMenuComponent } from './nz-dropdown-menu.component';
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
        this.positions = tslib_1.__spread(DEFAULT_DROPDOWN_POSITIONS);
        this.positionSubscription = Subscription.EMPTY;
        this.overlaySubscription = Subscription.EMPTY;
        this.hover$ = merge(fromEvent(this.el, 'mouseenter').pipe(mapTo(true)), fromEvent(this.el, 'mouseleave').pipe(mapTo(false)));
        this.$click = fromEvent(this.el, 'click').pipe(tap((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return e.stopPropagation(); })), mapTo(true));
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
    /**
     * @param {?} disabled
     * @return {?}
     */
    NzDropDownDirective.prototype.setDisabled = /**
     * @param {?} disabled
     * @return {?}
     */
    function (disabled) {
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
    /**
     * @private
     * @return {?}
     */
    NzDropDownDirective.prototype.getOverlayConfig = /**
     * @private
     * @return {?}
     */
    function () {
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
    /**
     * @private
     * @return {?}
     */
    NzDropDownDirective.prototype.createOverlay = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.overlayRef) {
            /** @type {?} */
            var config = this.getOverlayConfig();
            this.overlayRef = this.overlay.create(config);
            this.subscribeOverlayEvent(this.overlayRef);
            this.subscribeToPositions((/** @type {?} */ (config.positionStrategy)));
            return this.overlayRef;
        }
        else {
            /** @type {?} */
            var overlayConfig = this.overlayRef.getConfig();
            this.updateOverlayConfig(overlayConfig);
            return this.overlayRef;
        }
    };
    /**
     * @param {?} overlayConfig
     * @return {?}
     */
    NzDropDownDirective.prototype.updateOverlayConfig = /**
     * @param {?} overlayConfig
     * @return {?}
     */
    function (overlayConfig) {
        overlayConfig.minWidth = this.triggerWidth;
        overlayConfig.hasBackdrop = this.nzTrigger === 'click';
        return overlayConfig;
    };
    /**
     * @return {?}
     */
    NzDropDownDirective.prototype.dispose = /**
     * @return {?}
     */
    function () {
        if (this.overlayRef) {
            this.overlayRef.dispose();
            this.overlayRef = null;
            this.positionSubscription.unsubscribe();
            this.overlaySubscription.unsubscribe();
        }
    };
    /**
     * @private
     * @param {?} position
     * @return {?}
     */
    NzDropDownDirective.prototype.subscribeToPositions = /**
     * @private
     * @param {?} position
     * @return {?}
     */
    function (position) {
        var _this = this;
        this.positionSubscription.unsubscribe();
        this.positionSubscription = position.positionChanges.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} change
         * @return {?}
         */
        function (change) {
            _this.nzDropdownMenu.setValue('dropDownPosition', change.connectionPair.originY);
        }));
    };
    /**
     * @private
     * @param {?} overlayRef
     * @return {?}
     */
    NzDropDownDirective.prototype.subscribeOverlayEvent = /**
     * @private
     * @param {?} overlayRef
     * @return {?}
     */
    function (overlayRef) {
        var _this = this;
        this.overlaySubscription.unsubscribe();
        this.overlaySubscription = merge(overlayRef.backdropClick(), overlayRef.detachments(), overlayRef.keydownEvents().pipe(filter((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return e.keyCode === ESCAPE && !hasModifierKey(e); }))))
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.nzDropdownMenu.setVisibleStateWhen(false);
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NzDropDownDirective.prototype.getPortal = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.portal || this.portal.templateRef !== this.nzDropdownMenu.templateRef) {
            this.portal = new TemplatePortal(this.nzDropdownMenu.templateRef, this.viewContainerRef);
        }
        return this.portal;
    };
    /**
     * @private
     * @return {?}
     */
    NzDropDownDirective.prototype.openMenu = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.dropdownOpen) {
            /** @type {?} */
            var overlayRef = this.createOverlay();
            /** @type {?} */
            var overlayConfig = overlayRef.getConfig();
            this.nzDropdownMenu.setValue('open', true);
            this.setPosition((/** @type {?} */ (overlayConfig.positionStrategy)));
            overlayRef.attach(this.getPortal());
            this.dropdownOpen = true;
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzDropDownDirective.prototype.closeMenu = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.overlayRef) {
            this.overlayRef.detach();
            this.dropdownOpen = false;
            this.nzDropdownMenu.setValue('open', false);
        }
    };
    /**
     * @private
     * @param {?} positionStrategy
     * @return {?}
     */
    NzDropDownDirective.prototype.setPosition = /**
     * @private
     * @param {?} positionStrategy
     * @return {?}
     */
    function (positionStrategy) {
        this.positionStrategy = positionStrategy;
        positionStrategy.withPositions(tslib_1.__spread(this.positions));
    };
    /**
     * @private
     * @param {?} positions
     * @return {?}
     */
    NzDropDownDirective.prototype.updatePositionStrategy = /**
     * @private
     * @param {?} positions
     * @return {?}
     */
    function (positions) {
        if (this.positionStrategy) {
            this.positionStrategy.withPositions(positions);
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzDropDownDirective.prototype.setTriggerWidth = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.platform.isBrowser) {
            /** @type {?} */
            var element = this.nzMatchWidthElement ? this.nzMatchWidthElement.nativeElement : this.el;
            this.triggerWidth = element.getBoundingClientRect().width;
        }
    };
    /**
     * @return {?}
     */
    NzDropDownDirective.prototype.initActionSubscribe = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var hostVisible$ = this.nzTrigger === 'hover' ? this.hover$ : this.$click;
        /** @type {?} */
        var dropdownMenuVisible$ = this.nzDropdownMenu.visible$;
        /** @type {?} */
        var menuClickVisible$ = this.nzClickHide
            ? this.nzDropdownMenu.nzMenuDropdownService.menuItemClick$.pipe(mapTo(false))
            : EMPTY;
        /** @type {?} */
        var supVisible$ = merge(dropdownMenuVisible$, hostVisible$, menuClickVisible$);
        /** @type {?} */
        var subVisible$ = this.nzDropdownMenu.nzMenuDropdownService.menuOpen$;
        combineLatest([supVisible$, subVisible$])
            .pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), supVisible = _b[0], subVisible = _b[1];
            return supVisible || subVisible;
        })), debounceTime(50), distinctUntilChanged(), takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} visible
         * @return {?}
         */
        function (visible) {
            if (!_this.nzDisabled && _this.nzVisible !== visible) {
                _this.nzVisible = visible;
                _this.updateOverlayByVisible();
                _this.nzVisibleChange.emit(_this.nzVisible);
                _this.setTriggerWidth();
                _this.nzDropdownMenu.setValue('triggerWidth', _this.triggerWidth);
            }
        }));
    };
    /**
     * @return {?}
     */
    NzDropDownDirective.prototype.updateOverlayByVisible = /**
     * @return {?}
     */
    function () {
        if (this.nzVisible) {
            this.openMenu();
        }
        else {
            this.closeMenu();
        }
    };
    /**
     * @return {?}
     */
    NzDropDownDirective.prototype.updateDisabledState = /**
     * @return {?}
     */
    function () {
        this.setDisabled(this.nzDisabled);
    };
    /**
     * @param {?} placement
     * @param {?} positions
     * @return {?}
     */
    NzDropDownDirective.prototype.regeneratePosition = /**
     * @param {?} placement
     * @param {?} positions
     * @return {?}
     */
    function (placement, positions) {
        return tslib_1.__spread([POSITION_MAP[placement]], positions);
    };
    /**
     * @return {?}
     */
    NzDropDownDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.nzDropdownMenu) {
            this.setTriggerWidth();
            this.initActionSubscribe();
            this.updateDisabledState();
        }
    };
    /**
     * @return {?}
     */
    NzDropDownDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
        this.dispose();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzDropDownDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
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
    NzDropDownDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-dropdown]',
                    exportAs: 'nzDropdown'
                },] }
    ];
    /** @nocollapse */
    NzDropDownDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: Overlay },
        { type: Platform },
        { type: NzButtonComponent, decorators: [{ type: Optional }, { type: Host }] },
        { type: NzButtonGroupComponent, decorators: [{ type: Optional }] },
        { type: ViewContainerRef }
    ]; };
    NzDropDownDirective.propDecorators = {
        nzDropdownMenu: [{ type: Input }],
        nzTrigger: [{ type: Input }],
        nzMatchWidthElement: [{ type: Input }],
        nzBackdrop: [{ type: Input }],
        nzClickHide: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzVisible: [{ type: Input }],
        nzTableFilter: [{ type: Input }],
        nzOverlayClassName: [{ type: Input }],
        nzOverlayStyle: [{ type: Input }],
        nzPlacement: [{ type: Input }],
        nzVisibleChange: [{ type: Output }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzDropDownDirective.prototype, "nzBackdrop", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzDropDownDirective.prototype, "nzClickHide", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzDropDownDirective.prototype, "nzDisabled", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzDropDownDirective.prototype, "nzVisible", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzDropDownDirective.prototype, "nzTableFilter", void 0);
    return NzDropDownDirective;
}());
export { NzDropDownDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.portal;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.overlayRef;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.triggerWidth;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.dropdownOpen;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.positionStrategy;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.positions;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.positionSubscription;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.overlaySubscription;
    /** @type {?} */
    NzDropDownDirective.prototype.hover$;
    /** @type {?} */
    NzDropDownDirective.prototype.$click;
    /** @type {?} */
    NzDropDownDirective.prototype.nzDropdownMenu;
    /** @type {?} */
    NzDropDownDirective.prototype.nzTrigger;
    /** @type {?} */
    NzDropDownDirective.prototype.nzMatchWidthElement;
    /** @type {?} */
    NzDropDownDirective.prototype.nzBackdrop;
    /** @type {?} */
    NzDropDownDirective.prototype.nzClickHide;
    /** @type {?} */
    NzDropDownDirective.prototype.nzDisabled;
    /** @type {?} */
    NzDropDownDirective.prototype.nzVisible;
    /** @type {?} */
    NzDropDownDirective.prototype.nzTableFilter;
    /** @type {?} */
    NzDropDownDirective.prototype.nzOverlayClassName;
    /** @type {?} */
    NzDropDownDirective.prototype.nzOverlayStyle;
    /** @type {?} */
    NzDropDownDirective.prototype.nzPlacement;
    /** @type {?} */
    NzDropDownDirective.prototype.nzVisibleChange;
    /** @type {?} */
    NzDropDownDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.overlay;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.platform;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.nzButtonComponent;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.nzButtonGroupComponent;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.viewContainerRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJvcGRvd24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9kcm9wZG93bi8iLCJzb3VyY2VzIjpbIm56LWRyb3Bkb3duLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMvRCxPQUFPLEVBSUwsT0FBTyxFQUNQLGFBQWEsRUFFZCxNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLElBQUksRUFDSixLQUFLLEVBR0wsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBRVQsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDNUYsT0FBTyxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBYyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hHLE9BQU8sRUFBRSx1QkFBdUIsRUFBbUIsTUFBTSw4QkFBOEIsQ0FBQztBQUV4RjtJQXFNRSw2QkFDUyxVQUFzQixFQUNyQixRQUFtQixFQUNuQixPQUFnQixFQUNoQixR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QUFxRDs7SUFDckQsOENBQStFOztJQW9LN0UseUNBQTZCOzs7OztJQUM3Qix1Q0FBMkI7Ozs7O0lBQzNCLHNDQUF3Qjs7Ozs7SUFDeEIsdUNBQTBCOzs7OztJQUMxQixnREFBZ0U7Ozs7O0lBQ2hFLHFEQUFrRTs7Ozs7SUFDbEUsK0NBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBoYXNNb2RpZmllcktleSwgRVNDQVBFIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcclxuaW1wb3J0IHtcclxuICBDb25uZWN0ZWRQb3NpdGlvbixcclxuICBDb25uZWN0aW9uUG9zaXRpb25QYWlyLFxyXG4gIEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSxcclxuICBPdmVybGF5LFxyXG4gIE92ZXJsYXlDb25maWcsXHJcbiAgT3ZlcmxheVJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBUZW1wbGF0ZVBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEhvc3QsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVmlld0NvbnRhaW5lclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOekJ1dHRvbkNvbXBvbmVudCwgTnpCdXR0b25Hcm91cENvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvYnV0dG9uJztcclxuaW1wb3J0IHsgREVGQVVMVF9EUk9QRE9XTl9QT1NJVElPTlMsIElucHV0Qm9vbGVhbiwgUE9TSVRJT05fTUFQIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgZnJvbUV2ZW50LCBtZXJnZSwgRU1QVFksIE9ic2VydmFibGUsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIG1hcCwgbWFwVG8sIHRha2VVbnRpbCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBOekRyb3Bkb3duTWVudUNvbXBvbmVudCwgTnpQbGFjZW1lbnRUeXBlIH0gZnJvbSAnLi9uei1kcm9wZG93bi1tZW51LmNvbXBvbmVudCc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tuei1kcm9wZG93bl0nLFxyXG4gIGV4cG9ydEFzOiAnbnpEcm9wZG93bidcclxufSlcclxuZXhwb3J0IGNsYXNzIE56RHJvcERvd25EaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XHJcbiAgcHJpdmF0ZSBwb3J0YWw6IFRlbXBsYXRlUG9ydGFsO1xyXG4gIHByaXZhdGUgb3ZlcmxheVJlZjogT3ZlcmxheVJlZiB8IG51bGwgPSBudWxsO1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xyXG4gIHByaXZhdGUgdHJpZ2dlcldpZHRoID0gMDtcclxuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gIHByaXZhdGUgZHJvcGRvd25PcGVuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBwb3NpdGlvblN0cmF0ZWd5OiBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3k7XHJcbiAgcHJpdmF0ZSBwb3NpdGlvbnM6IENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXSA9IFsuLi5ERUZBVUxUX0RST1BET1dOX1BPU0lUSU9OU107XHJcbiAgcHJpdmF0ZSBwb3NpdGlvblN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcclxuICBwcml2YXRlIG92ZXJsYXlTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XHJcbiAgcmVhZG9ubHkgaG92ZXIkOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gbWVyZ2UoXHJcbiAgICBmcm9tRXZlbnQodGhpcy5lbCwgJ21vdXNlZW50ZXInKS5waXBlKG1hcFRvKHRydWUpKSxcclxuICAgIGZyb21FdmVudCh0aGlzLmVsLCAnbW91c2VsZWF2ZScpLnBpcGUobWFwVG8oZmFsc2UpKVxyXG4gICk7XHJcbiAgcmVhZG9ubHkgJGNsaWNrOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gZnJvbUV2ZW50KHRoaXMuZWwsICdjbGljaycpLnBpcGUoXHJcbiAgICB0YXAoZSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpKSxcclxuICAgIG1hcFRvKHRydWUpXHJcbiAgKTtcclxuICBASW5wdXQoKSBuekRyb3Bkb3duTWVudTogTnpEcm9wZG93bk1lbnVDb21wb25lbnQ7XHJcbiAgQElucHV0KCkgbnpUcmlnZ2VyOiAnY2xpY2snIHwgJ2hvdmVyJyA9ICdob3Zlcic7XHJcbiAgQElucHV0KCkgbnpNYXRjaFdpZHRoRWxlbWVudDogRWxlbWVudFJlZjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpCYWNrZHJvcCA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q2xpY2tIaWRlID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelZpc2libGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpUYWJsZUZpbHRlciA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56T3ZlcmxheUNsYXNzTmFtZSA9ICcnO1xyXG4gIEBJbnB1dCgpIG56T3ZlcmxheVN0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XHJcbiAgQElucHV0KCkgbnpQbGFjZW1lbnQ6IE56UGxhY2VtZW50VHlwZSA9ICdib3R0b21MZWZ0JztcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpWaXNpYmxlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIHNldERpc2FibGVkKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAoZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5lbCwgJ2Rpc2FibGVkJywgJycpO1xyXG4gICAgICBpZiAodGhpcy5uelZpc2libGUpIHtcclxuICAgICAgICB0aGlzLm56VmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubnpWaXNpYmxlQ2hhbmdlLmVtaXQodGhpcy5uelZpc2libGUpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlT3ZlcmxheUJ5VmlzaWJsZSgpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLmVsLCAnZGlzYWJsZWQnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0T3ZlcmxheUNvbmZpZygpOiBPdmVybGF5Q29uZmlnIHtcclxuICAgIHJldHVybiBuZXcgT3ZlcmxheUNvbmZpZyh7XHJcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IHRoaXMub3ZlcmxheVxyXG4gICAgICAgIC5wb3NpdGlvbigpXHJcbiAgICAgICAgLmZsZXhpYmxlQ29ubmVjdGVkVG8odGhpcy5lbClcclxuICAgICAgICAud2l0aExvY2tlZFBvc2l0aW9uKCksXHJcbiAgICAgIG1pbldpZHRoOiB0aGlzLnRyaWdnZXJXaWR0aCxcclxuICAgICAgaGFzQmFja2Ryb3A6IHRoaXMubnpUcmlnZ2VyID09PSAnY2xpY2snLFxyXG4gICAgICBiYWNrZHJvcENsYXNzOiB0aGlzLm56QmFja2Ryb3AgPyB1bmRlZmluZWQgOiAnbnotb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcCcsXHJcbiAgICAgIHNjcm9sbFN0cmF0ZWd5OiB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5yZXBvc2l0aW9uKClcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVPdmVybGF5KCk6IE92ZXJsYXlSZWYge1xyXG4gICAgaWYgKCF0aGlzLm92ZXJsYXlSZWYpIHtcclxuICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5nZXRPdmVybGF5Q29uZmlnKCk7XHJcbiAgICAgIHRoaXMub3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUoY29uZmlnKTtcclxuICAgICAgdGhpcy5zdWJzY3JpYmVPdmVybGF5RXZlbnQodGhpcy5vdmVybGF5UmVmKTtcclxuICAgICAgdGhpcy5zdWJzY3JpYmVUb1Bvc2l0aW9ucyhjb25maWcucG9zaXRpb25TdHJhdGVneSBhcyBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3kpO1xyXG4gICAgICByZXR1cm4gdGhpcy5vdmVybGF5UmVmO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3Qgb3ZlcmxheUNvbmZpZyA9IHRoaXMub3ZlcmxheVJlZi5nZXRDb25maWcoKTtcclxuICAgICAgdGhpcy51cGRhdGVPdmVybGF5Q29uZmlnKG92ZXJsYXlDb25maWcpO1xyXG4gICAgICByZXR1cm4gdGhpcy5vdmVybGF5UmVmO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlT3ZlcmxheUNvbmZpZyhvdmVybGF5Q29uZmlnOiBPdmVybGF5Q29uZmlnKTogT3ZlcmxheUNvbmZpZyB7XHJcbiAgICBvdmVybGF5Q29uZmlnLm1pbldpZHRoID0gdGhpcy50cmlnZ2VyV2lkdGg7XHJcbiAgICBvdmVybGF5Q29uZmlnLmhhc0JhY2tkcm9wID0gdGhpcy5uelRyaWdnZXIgPT09ICdjbGljayc7XHJcbiAgICByZXR1cm4gb3ZlcmxheUNvbmZpZztcclxuICB9XHJcblxyXG4gIGRpc3Bvc2UoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5vdmVybGF5UmVmKSB7XHJcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5kaXNwb3NlKCk7XHJcbiAgICAgIHRoaXMub3ZlcmxheVJlZiA9IG51bGw7XHJcbiAgICAgIHRoaXMucG9zaXRpb25TdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgdGhpcy5vdmVybGF5U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN1YnNjcmliZVRvUG9zaXRpb25zKHBvc2l0aW9uOiBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3kpOiB2b2lkIHtcclxuICAgIHRoaXMucG9zaXRpb25TdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMucG9zaXRpb25TdWJzY3JpcHRpb24gPSBwb3NpdGlvbi5wb3NpdGlvbkNoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShjaGFuZ2UgPT4ge1xyXG4gICAgICB0aGlzLm56RHJvcGRvd25NZW51LnNldFZhbHVlKCdkcm9wRG93blBvc2l0aW9uJywgY2hhbmdlLmNvbm5lY3Rpb25QYWlyLm9yaWdpblkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN1YnNjcmliZU92ZXJsYXlFdmVudChvdmVybGF5UmVmOiBPdmVybGF5UmVmKTogdm9pZCB7XHJcbiAgICB0aGlzLm92ZXJsYXlTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMub3ZlcmxheVN1YnNjcmlwdGlvbiA9IG1lcmdlKFxyXG4gICAgICBvdmVybGF5UmVmLmJhY2tkcm9wQ2xpY2soKSxcclxuICAgICAgb3ZlcmxheVJlZi5kZXRhY2htZW50cygpLFxyXG4gICAgICBvdmVybGF5UmVmLmtleWRvd25FdmVudHMoKS5waXBlKGZpbHRlcihlID0+IGUua2V5Q29kZSA9PT0gRVNDQVBFICYmICFoYXNNb2RpZmllcktleShlKSkpXHJcbiAgICApXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5uekRyb3Bkb3duTWVudS5zZXRWaXNpYmxlU3RhdGVXaGVuKGZhbHNlKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFBvcnRhbCgpOiBUZW1wbGF0ZVBvcnRhbCB7XHJcbiAgICBpZiAoIXRoaXMucG9ydGFsIHx8IHRoaXMucG9ydGFsLnRlbXBsYXRlUmVmICE9PSB0aGlzLm56RHJvcGRvd25NZW51LnRlbXBsYXRlUmVmKSB7XHJcbiAgICAgIHRoaXMucG9ydGFsID0gbmV3IFRlbXBsYXRlUG9ydGFsKHRoaXMubnpEcm9wZG93bk1lbnUudGVtcGxhdGVSZWYsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5wb3J0YWw7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9wZW5NZW51KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmRyb3Bkb3duT3Blbikge1xyXG4gICAgICBjb25zdCBvdmVybGF5UmVmID0gdGhpcy5jcmVhdGVPdmVybGF5KCk7XHJcbiAgICAgIGNvbnN0IG92ZXJsYXlDb25maWcgPSBvdmVybGF5UmVmLmdldENvbmZpZygpO1xyXG4gICAgICB0aGlzLm56RHJvcGRvd25NZW51LnNldFZhbHVlKCdvcGVuJywgdHJ1ZSk7XHJcbiAgICAgIHRoaXMuc2V0UG9zaXRpb24ob3ZlcmxheUNvbmZpZy5wb3NpdGlvblN0cmF0ZWd5IGFzIEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSk7XHJcbiAgICAgIG92ZXJsYXlSZWYuYXR0YWNoKHRoaXMuZ2V0UG9ydGFsKCkpO1xyXG4gICAgICB0aGlzLmRyb3Bkb3duT3BlbiA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsb3NlTWVudSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYpIHtcclxuICAgICAgdGhpcy5vdmVybGF5UmVmLmRldGFjaCgpO1xyXG4gICAgICB0aGlzLmRyb3Bkb3duT3BlbiA9IGZhbHNlO1xyXG4gICAgICB0aGlzLm56RHJvcGRvd25NZW51LnNldFZhbHVlKCdvcGVuJywgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRQb3NpdGlvbihwb3NpdGlvblN0cmF0ZWd5OiBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3kpOiB2b2lkIHtcclxuICAgIHRoaXMucG9zaXRpb25TdHJhdGVneSA9IHBvc2l0aW9uU3RyYXRlZ3k7XHJcbiAgICBwb3NpdGlvblN0cmF0ZWd5LndpdGhQb3NpdGlvbnMoWy4uLnRoaXMucG9zaXRpb25zXSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZVBvc2l0aW9uU3RyYXRlZ3kocG9zaXRpb25zOiBDb25uZWN0ZWRQb3NpdGlvbltdKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5wb3NpdGlvblN0cmF0ZWd5KSB7XHJcbiAgICAgIHRoaXMucG9zaXRpb25TdHJhdGVneS53aXRoUG9zaXRpb25zKHBvc2l0aW9ucyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFRyaWdnZXJXaWR0aCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5uek1hdGNoV2lkdGhFbGVtZW50ID8gdGhpcy5uek1hdGNoV2lkdGhFbGVtZW50Lm5hdGl2ZUVsZW1lbnQgOiB0aGlzLmVsO1xyXG4gICAgICB0aGlzLnRyaWdnZXJXaWR0aCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbml0QWN0aW9uU3Vic2NyaWJlKCk6IHZvaWQge1xyXG4gICAgY29uc3QgaG9zdFZpc2libGUkID0gdGhpcy5uelRyaWdnZXIgPT09ICdob3ZlcicgPyB0aGlzLmhvdmVyJCA6IHRoaXMuJGNsaWNrO1xyXG4gICAgY29uc3QgZHJvcGRvd25NZW51VmlzaWJsZSQgPSB0aGlzLm56RHJvcGRvd25NZW51LnZpc2libGUkO1xyXG4gICAgY29uc3QgbWVudUNsaWNrVmlzaWJsZSQgPSB0aGlzLm56Q2xpY2tIaWRlXHJcbiAgICAgID8gdGhpcy5uekRyb3Bkb3duTWVudS5uek1lbnVEcm9wZG93blNlcnZpY2UubWVudUl0ZW1DbGljayQucGlwZShtYXBUbyhmYWxzZSkpXHJcbiAgICAgIDogRU1QVFk7XHJcbiAgICBjb25zdCBzdXBWaXNpYmxlJCA9IG1lcmdlKGRyb3Bkb3duTWVudVZpc2libGUkLCBob3N0VmlzaWJsZSQsIG1lbnVDbGlja1Zpc2libGUkKTtcclxuICAgIGNvbnN0IHN1YlZpc2libGUkID0gdGhpcy5uekRyb3Bkb3duTWVudS5uek1lbnVEcm9wZG93blNlcnZpY2UubWVudU9wZW4kO1xyXG4gICAgY29tYmluZUxhdGVzdChbc3VwVmlzaWJsZSQsIHN1YlZpc2libGUkXSlcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgbWFwKChbc3VwVmlzaWJsZSwgc3ViVmlzaWJsZV0pID0+IHN1cFZpc2libGUgfHwgc3ViVmlzaWJsZSksXHJcbiAgICAgICAgZGVib3VuY2VUaW1lKDUwKSxcclxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxyXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUodmlzaWJsZSA9PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm56RGlzYWJsZWQgJiYgdGhpcy5uelZpc2libGUgIT09IHZpc2libGUpIHtcclxuICAgICAgICAgIHRoaXMubnpWaXNpYmxlID0gdmlzaWJsZTtcclxuICAgICAgICAgIHRoaXMudXBkYXRlT3ZlcmxheUJ5VmlzaWJsZSgpO1xyXG4gICAgICAgICAgdGhpcy5uelZpc2libGVDaGFuZ2UuZW1pdCh0aGlzLm56VmlzaWJsZSk7XHJcbiAgICAgICAgICB0aGlzLnNldFRyaWdnZXJXaWR0aCgpO1xyXG4gICAgICAgICAgdGhpcy5uekRyb3Bkb3duTWVudS5zZXRWYWx1ZSgndHJpZ2dlcldpZHRoJywgdGhpcy50cmlnZ2VyV2lkdGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVPdmVybGF5QnlWaXNpYmxlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpWaXNpYmxlKSB7XHJcbiAgICAgIHRoaXMub3Blbk1lbnUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY2xvc2VNZW51KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVEaXNhYmxlZFN0YXRlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXREaXNhYmxlZCh0aGlzLm56RGlzYWJsZWQpO1xyXG4gIH1cclxuXHJcbiAgcmVnZW5lcmF0ZVBvc2l0aW9uKHBsYWNlbWVudDogTnpQbGFjZW1lbnRUeXBlLCBwb3NpdGlvbnM6IENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXSk6IENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXSB7XHJcbiAgICByZXR1cm4gW1BPU0lUSU9OX01BUFtwbGFjZW1lbnRdLCAuLi5wb3NpdGlvbnNdO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSxcclxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxyXG4gICAgQE9wdGlvbmFsKCkgQEhvc3QoKSBwcml2YXRlIG56QnV0dG9uQ29tcG9uZW50OiBOekJ1dHRvbkNvbXBvbmVudCxcclxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgbnpCdXR0b25Hcm91cENvbXBvbmVudDogTnpCdXR0b25Hcm91cENvbXBvbmVudCxcclxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZlxyXG4gICkge1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWRyb3Bkb3duLXRyaWdnZXInKTtcclxuICAgIGlmICh0aGlzLm56QnV0dG9uQ29tcG9uZW50KSB7XHJcbiAgICAgIHRoaXMubnpCdXR0b25Db21wb25lbnQuaXNJbkRyb3Bkb3duID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm56QnV0dG9uR3JvdXBDb21wb25lbnQpIHtcclxuICAgICAgdGhpcy5uekJ1dHRvbkdyb3VwQ29tcG9uZW50LmlzSW5Ecm9wZG93biA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uekRyb3Bkb3duTWVudSkge1xyXG4gICAgICB0aGlzLnNldFRyaWdnZXJXaWR0aCgpO1xyXG4gICAgICB0aGlzLmluaXRBY3Rpb25TdWJzY3JpYmUoKTtcclxuICAgICAgdGhpcy51cGRhdGVEaXNhYmxlZFN0YXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gICAgdGhpcy5kaXNwb3NlKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIG56VmlzaWJsZSxcclxuICAgICAgbnpUcmlnZ2VyLFxyXG4gICAgICBuelBsYWNlbWVudCxcclxuICAgICAgbnpEaXNhYmxlZCxcclxuICAgICAgbnpPdmVybGF5Q2xhc3NOYW1lLFxyXG4gICAgICBuek92ZXJsYXlTdHlsZSxcclxuICAgICAgbnpUYWJsZUZpbHRlclxyXG4gICAgfSA9IGNoYW5nZXM7XHJcbiAgICBpZiAodGhpcy5uekRyb3Bkb3duTWVudSkge1xyXG4gICAgICBpZiAobnpWaXNpYmxlKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVPdmVybGF5QnlWaXNpYmxlKCk7XHJcbiAgICAgICAgdGhpcy5uekRyb3Bkb3duTWVudS52aXNpYmxlJC5uZXh0KHRoaXMubnpWaXNpYmxlKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobnpUcmlnZ2VyKSB7XHJcbiAgICAgICAgdGhpcy5uekRyb3Bkb3duTWVudS5zZXRWYWx1ZSgnbnpUcmlnZ2VyJywgdGhpcy5uelRyaWdnZXIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChuelRhYmxlRmlsdGVyKSB7XHJcbiAgICAgICAgdGhpcy5uekRyb3Bkb3duTWVudS5zZXRWYWx1ZSgnbnpUYWJsZUZpbHRlcicsIHRoaXMubnpUYWJsZUZpbHRlcik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG56T3ZlcmxheUNsYXNzTmFtZSkge1xyXG4gICAgICAgIHRoaXMubnpEcm9wZG93bk1lbnUuc2V0VmFsdWUoJ256T3ZlcmxheUNsYXNzTmFtZScsIHRoaXMubnpPdmVybGF5Q2xhc3NOYW1lKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobnpPdmVybGF5U3R5bGUpIHtcclxuICAgICAgICB0aGlzLm56RHJvcGRvd25NZW51LnNldFZhbHVlKCduek92ZXJsYXlTdHlsZScsIHRoaXMubnpPdmVybGF5U3R5bGUpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChuelBsYWNlbWVudCkge1xyXG4gICAgICAgIHRoaXMubnpEcm9wZG93bk1lbnUuc2V0VmFsdWUoJ256UGxhY2VtZW50JywgdGhpcy5uelBsYWNlbWVudCk7XHJcbiAgICAgICAgdGhpcy5uekRyb3Bkb3duTWVudS5zZXRWYWx1ZShcclxuICAgICAgICAgICdkcm9wRG93blBvc2l0aW9uJyxcclxuICAgICAgICAgIHRoaXMubnpEcm9wZG93bk1lbnUubnpQbGFjZW1lbnQuaW5kZXhPZigndG9wJykgIT09IC0xID8gJ3RvcCcgOiAnYm90dG9tJ1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbnMgPSB0aGlzLnJlZ2VuZXJhdGVQb3NpdGlvbih0aGlzLm56UGxhY2VtZW50LCB0aGlzLnBvc2l0aW9ucyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvblN0cmF0ZWd5KHRoaXMucG9zaXRpb25zKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKG56RGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy51cGRhdGVEaXNhYmxlZFN0YXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==