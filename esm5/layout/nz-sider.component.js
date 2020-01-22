/**
 * @fileoverview added by tsickle
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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Host, Input, NgZone, Optional, Output, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { toCssPixel, InputBoolean, NzDomEventService } from 'ng-zorro-antd/core';
import { NzLayoutComponent } from './nz-layout.component';
var NzSiderComponent = /** @class */ (function () {
    function NzSiderComponent(nzLayoutComponent, mediaMatcher, ngZone, platform, cdr, nzDomEventService, renderer, elementRef) {
        this.nzLayoutComponent = nzLayoutComponent;
        this.mediaMatcher = mediaMatcher;
        this.ngZone = ngZone;
        this.platform = platform;
        this.cdr = cdr;
        this.nzDomEventService = nzDomEventService;
        this.below = false;
        this.destroy$ = new Subject();
        this.dimensionMap = {
            xs: '480px',
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px',
            xxl: '1600px'
        };
        this.nzCollapsedChange = new EventEmitter();
        this.nzWidth = 200;
        this.nzTheme = 'dark';
        this.nzCollapsedWidth = 80;
        this.nzReverseArrow = false;
        this.nzCollapsible = false;
        this.nzCollapsed = false;
        renderer.addClass(elementRef.nativeElement, 'ant-layout-sider');
    }
    Object.defineProperty(NzSiderComponent.prototype, "trigger", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzTrigger !== undefined ? this.nzTrigger : this.defaultTrigger;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSiderComponent.prototype, "flexSetting", {
        get: /**
         * @return {?}
         */
        function () {
            return "0 0 " + this.widthSetting;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSiderComponent.prototype, "widthSetting", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.nzCollapsed) {
                return this.nzCollapsedWidth + "px";
            }
            else {
                return toCssPixel(this.nzWidth);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzSiderComponent.prototype.watchMatchMedia = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.nzBreakpoint) {
            /** @type {?} */
            var matchBelow = this.mediaMatcher.matchMedia("(max-width: " + this.dimensionMap[this.nzBreakpoint] + ")").matches;
            this.below = matchBelow;
            this.nzCollapsed = matchBelow;
            this.nzCollapsedChange.emit(matchBelow);
            this.ngZone.run((/**
             * @return {?}
             */
            function () {
                _this.cdr.markForCheck();
            }));
        }
    };
    /**
     * @return {?}
     */
    NzSiderComponent.prototype.toggleCollapse = /**
     * @return {?}
     */
    function () {
        this.nzCollapsed = !this.nzCollapsed;
        this.nzCollapsedChange.emit(this.nzCollapsed);
    };
    Object.defineProperty(NzSiderComponent.prototype, "isZeroTrigger", {
        get: /**
         * @return {?}
         */
        function () {
            return (this.nzCollapsible &&
                this.trigger &&
                this.nzCollapsedWidth === 0 &&
                ((this.nzBreakpoint && this.below) || !this.nzBreakpoint));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSiderComponent.prototype, "isSiderTrigger", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzCollapsible && this.trigger && this.nzCollapsedWidth !== 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzSiderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.nzLayoutComponent) {
            this.nzLayoutComponent.initSider();
        }
    };
    /**
     * @return {?}
     */
    NzSiderComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.platform.isBrowser) {
            Promise.resolve().then((/**
             * @return {?}
             */
            function () { return _this.watchMatchMedia(); }));
            this.nzDomEventService
                .registerResizeListener()
                .pipe(takeUntil(this.destroy$), finalize((/**
             * @return {?}
             */
            function () { return _this.nzDomEventService.unregisterResizeListener(); })))
                .subscribe((/**
             * @return {?}
             */
            function () { return _this.watchMatchMedia(); }));
        }
    };
    /**
     * @return {?}
     */
    NzSiderComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
        if (this.nzLayoutComponent) {
            this.nzLayoutComponent.destroySider();
        }
    };
    NzSiderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-sider',
                    exportAs: 'nzSider',
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "<div class=\"ant-layout-sider-children\">\r\n  <ng-content></ng-content>\r\n</div>\r\n<span class=\"ant-layout-sider-zero-width-trigger\" *ngIf=\"isZeroTrigger\" (click)=\"toggleCollapse()\">\r\n  <ng-template [ngTemplateOutlet]=\"nzZeroTrigger || zeroTrigger\"></ng-template>\r\n</span>\r\n<div class=\"ant-layout-sider-trigger\"\r\n  *ngIf=\"isSiderTrigger\"\r\n  (click)=\"toggleCollapse()\"\r\n  [style.width]=\"widthSetting\">\r\n  <ng-template [ngTemplateOutlet]=\"trigger\"></ng-template>\r\n</div>\r\n<ng-template #defaultTrigger>\r\n  <i nz-icon [nzType]=\"nzCollapsed ? 'right' : 'left'\" *ngIf=\"!nzReverseArrow\"></i>\r\n  <i nz-icon [nzType]=\"nzCollapsed ? 'left' : 'right'\" *ngIf=\"nzReverseArrow\"></i>\r\n</ng-template>\r\n<ng-template #zeroTrigger>\r\n  <i nz-icon nzType=\"bars\"></i>\r\n</ng-template>",
                    host: {
                        '[class.ant-layout-sider-zero-width]': 'nzCollapsed && nzCollapsedWidth === 0',
                        '[class.ant-layout-sider-light]': "nzTheme === 'light'",
                        '[class.ant-layout-sider-collapsed]': 'nzCollapsed',
                        '[style.flex]': 'flexSetting',
                        '[style.max-width]': 'widthSetting',
                        '[style.min-width]': 'widthSetting',
                        '[style.width]': 'widthSetting'
                    }
                }] }
    ];
    /** @nocollapse */
    NzSiderComponent.ctorParameters = function () { return [
        { type: NzLayoutComponent, decorators: [{ type: Optional }, { type: Host }] },
        { type: MediaMatcher },
        { type: NgZone },
        { type: Platform },
        { type: ChangeDetectorRef },
        { type: NzDomEventService },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    NzSiderComponent.propDecorators = {
        nzCollapsedChange: [{ type: Output }],
        nzWidth: [{ type: Input }],
        nzTheme: [{ type: Input }],
        nzCollapsedWidth: [{ type: Input }],
        nzBreakpoint: [{ type: Input }],
        nzZeroTrigger: [{ type: Input }],
        nzReverseArrow: [{ type: Input }],
        nzCollapsible: [{ type: Input }],
        nzCollapsed: [{ type: Input }],
        nzTrigger: [{ type: Input }],
        defaultTrigger: [{ type: ViewChild, args: ['defaultTrigger', { static: true },] }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzSiderComponent.prototype, "nzReverseArrow", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzSiderComponent.prototype, "nzCollapsible", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzSiderComponent.prototype, "nzCollapsed", void 0);
    return NzSiderComponent;
}());
export { NzSiderComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzSiderComponent.prototype.below;
    /**
     * @type {?}
     * @private
     */
    NzSiderComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzSiderComponent.prototype.dimensionMap;
    /** @type {?} */
    NzSiderComponent.prototype.nzCollapsedChange;
    /** @type {?} */
    NzSiderComponent.prototype.nzWidth;
    /** @type {?} */
    NzSiderComponent.prototype.nzTheme;
    /** @type {?} */
    NzSiderComponent.prototype.nzCollapsedWidth;
    /** @type {?} */
    NzSiderComponent.prototype.nzBreakpoint;
    /** @type {?} */
    NzSiderComponent.prototype.nzZeroTrigger;
    /** @type {?} */
    NzSiderComponent.prototype.nzReverseArrow;
    /** @type {?} */
    NzSiderComponent.prototype.nzCollapsible;
    /** @type {?} */
    NzSiderComponent.prototype.nzCollapsed;
    /** @type {?} */
    NzSiderComponent.prototype.nzTrigger;
    /** @type {?} */
    NzSiderComponent.prototype.defaultTrigger;
    /**
     * @type {?}
     * @private
     */
    NzSiderComponent.prototype.nzLayoutComponent;
    /**
     * @type {?}
     * @private
     */
    NzSiderComponent.prototype.mediaMatcher;
    /**
     * @type {?}
     * @private
     */
    NzSiderComponent.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    NzSiderComponent.prototype.platform;
    /**
     * @type {?}
     * @private
     */
    NzSiderComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzSiderComponent.prototype.nzDomEventService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2lkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9sYXlvdXQvIiwic291cmNlcyI6WyJuei1zaWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osSUFBSSxFQUNKLEtBQUssRUFDTCxNQUFNLEVBR04sUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckQsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQWdCLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFL0YsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFMUQ7SUF1RkUsMEJBQzhCLGlCQUFvQyxFQUN4RCxZQUEwQixFQUMxQixNQUFjLEVBQ2QsUUFBa0IsRUFDbEIsR0FBc0IsRUFDdEIsaUJBQW9DLEVBQzVDLFFBQW1CLEVBQ25CLFVBQXNCO1FBUE0sc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUN4RCxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixzQkFBaUIsR0FBakIsaUJBQWlCLENB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QzFCLCtCQUE4Qjs7Ozs7SUFDOUIsNkNBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEhvc3QsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE1lZGlhTWF0Y2hlciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9sYXlvdXQnO1xyXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmluYWxpemUsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IHRvQ3NzUGl4ZWwsIElucHV0Qm9vbGVhbiwgTnpCcmVha1BvaW50LCBOekRvbUV2ZW50U2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOekxheW91dENvbXBvbmVudCB9IGZyb20gJy4vbnotbGF5b3V0LmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LXNpZGVyJyxcclxuICBleHBvcnRBczogJ256U2lkZXInLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXNpZGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC1sYXlvdXQtc2lkZXItemVyby13aWR0aF0nOiAnbnpDb2xsYXBzZWQgJiYgbnpDb2xsYXBzZWRXaWR0aCA9PT0gMCcsXHJcbiAgICAnW2NsYXNzLmFudC1sYXlvdXQtc2lkZXItbGlnaHRdJzogYG56VGhlbWUgPT09ICdsaWdodCdgLFxyXG4gICAgJ1tjbGFzcy5hbnQtbGF5b3V0LXNpZGVyLWNvbGxhcHNlZF0nOiAnbnpDb2xsYXBzZWQnLFxyXG4gICAgJ1tzdHlsZS5mbGV4XSc6ICdmbGV4U2V0dGluZycsXHJcbiAgICAnW3N0eWxlLm1heC13aWR0aF0nOiAnd2lkdGhTZXR0aW5nJyxcclxuICAgICdbc3R5bGUubWluLXdpZHRoXSc6ICd3aWR0aFNldHRpbmcnLFxyXG4gICAgJ1tzdHlsZS53aWR0aF0nOiAnd2lkdGhTZXR0aW5nJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56U2lkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBiZWxvdyA9IGZhbHNlO1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xyXG4gIHByaXZhdGUgZGltZW5zaW9uTWFwID0ge1xyXG4gICAgeHM6ICc0ODBweCcsXHJcbiAgICBzbTogJzU3NnB4JyxcclxuICAgIG1kOiAnNzY4cHgnLFxyXG4gICAgbGc6ICc5OTJweCcsXHJcbiAgICB4bDogJzEyMDBweCcsXHJcbiAgICB4eGw6ICcxNjAwcHgnXHJcbiAgfTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q29sbGFwc2VkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBASW5wdXQoKSBueldpZHRoOiBzdHJpbmcgfCBudW1iZXIgPSAyMDA7XHJcbiAgQElucHV0KCkgbnpUaGVtZTogJ2xpZ2h0JyB8ICdkYXJrJyA9ICdkYXJrJztcclxuICBASW5wdXQoKSBuekNvbGxhcHNlZFdpZHRoID0gODA7XHJcbiAgQElucHV0KCkgbnpCcmVha3BvaW50OiBOekJyZWFrUG9pbnQ7XHJcbiAgQElucHV0KCkgbnpaZXJvVHJpZ2dlcjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56UmV2ZXJzZUFycm93ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q29sbGFwc2libGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDb2xsYXBzZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBuelRyaWdnZXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBWaWV3Q2hpbGQoJ2RlZmF1bHRUcmlnZ2VyJywgeyBzdGF0aWM6IHRydWUgfSkgZGVmYXVsdFRyaWdnZXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIGdldCB0cmlnZ2VyKCk6IFRlbXBsYXRlUmVmPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLm56VHJpZ2dlciAhPT0gdW5kZWZpbmVkID8gdGhpcy5uelRyaWdnZXIgOiB0aGlzLmRlZmF1bHRUcmlnZ2VyO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGZsZXhTZXR0aW5nKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYDAgMCAke3RoaXMud2lkdGhTZXR0aW5nfWA7XHJcbiAgfVxyXG5cclxuICBnZXQgd2lkdGhTZXR0aW5nKCk6IHN0cmluZyB7XHJcbiAgICBpZiAodGhpcy5uekNvbGxhcHNlZCkge1xyXG4gICAgICByZXR1cm4gYCR7dGhpcy5uekNvbGxhcHNlZFdpZHRofXB4YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0b0Nzc1BpeGVsKHRoaXMubnpXaWR0aCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB3YXRjaE1hdGNoTWVkaWEoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uekJyZWFrcG9pbnQpIHtcclxuICAgICAgY29uc3QgbWF0Y2hCZWxvdyA9IHRoaXMubWVkaWFNYXRjaGVyLm1hdGNoTWVkaWEoYChtYXgtd2lkdGg6ICR7dGhpcy5kaW1lbnNpb25NYXBbdGhpcy5uekJyZWFrcG9pbnRdfSlgKS5tYXRjaGVzO1xyXG4gICAgICB0aGlzLmJlbG93ID0gbWF0Y2hCZWxvdztcclxuICAgICAgdGhpcy5uekNvbGxhcHNlZCA9IG1hdGNoQmVsb3c7XHJcbiAgICAgIHRoaXMubnpDb2xsYXBzZWRDaGFuZ2UuZW1pdChtYXRjaEJlbG93KTtcclxuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2dnbGVDb2xsYXBzZSgpOiB2b2lkIHtcclxuICAgIHRoaXMubnpDb2xsYXBzZWQgPSAhdGhpcy5uekNvbGxhcHNlZDtcclxuICAgIHRoaXMubnpDb2xsYXBzZWRDaGFuZ2UuZW1pdCh0aGlzLm56Q29sbGFwc2VkKTtcclxuICB9XHJcblxyXG4gIGdldCBpc1plcm9UcmlnZ2VyKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGhpcy5uekNvbGxhcHNpYmxlICYmXHJcbiAgICAgIHRoaXMudHJpZ2dlciAmJlxyXG4gICAgICB0aGlzLm56Q29sbGFwc2VkV2lkdGggPT09IDAgJiZcclxuICAgICAgKCh0aGlzLm56QnJlYWtwb2ludCAmJiB0aGlzLmJlbG93KSB8fCAhdGhpcy5uekJyZWFrcG9pbnQpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzU2lkZXJUcmlnZ2VyKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubnpDb2xsYXBzaWJsZSAmJiB0aGlzLnRyaWdnZXIgJiYgdGhpcy5uekNvbGxhcHNlZFdpZHRoICE9PSAwO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBAT3B0aW9uYWwoKSBASG9zdCgpIHByaXZhdGUgbnpMYXlvdXRDb21wb25lbnQ6IE56TGF5b3V0Q29tcG9uZW50LFxyXG4gICAgcHJpdmF0ZSBtZWRpYU1hdGNoZXI6IE1lZGlhTWF0Y2hlcixcclxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXHJcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgbnpEb21FdmVudFNlcnZpY2U6IE56RG9tRXZlbnRTZXJ2aWNlLFxyXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWZcclxuICApIHtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1sYXlvdXQtc2lkZXInKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpMYXlvdXRDb21wb25lbnQpIHtcclxuICAgICAgdGhpcy5uekxheW91dENvbXBvbmVudC5pbml0U2lkZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xyXG4gICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMud2F0Y2hNYXRjaE1lZGlhKCkpO1xyXG4gICAgICB0aGlzLm56RG9tRXZlbnRTZXJ2aWNlXHJcbiAgICAgICAgLnJlZ2lzdGVyUmVzaXplTGlzdGVuZXIoKVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxyXG4gICAgICAgICAgZmluYWxpemUoKCkgPT4gdGhpcy5uekRvbUV2ZW50U2VydmljZS51bnJlZ2lzdGVyUmVzaXplTGlzdGVuZXIoKSlcclxuICAgICAgICApXHJcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLndhdGNoTWF0Y2hNZWRpYSgpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgICBpZiAodGhpcy5uekxheW91dENvbXBvbmVudCkge1xyXG4gICAgICB0aGlzLm56TGF5b3V0Q29tcG9uZW50LmRlc3Ryb3lTaWRlcigpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=