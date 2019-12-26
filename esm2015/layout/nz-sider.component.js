/**
 * @fileoverview added by tsickle
 * Generated from: nz-sider.component.ts
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
export class NzSiderComponent {
    /**
     * @param {?} nzLayoutComponent
     * @param {?} mediaMatcher
     * @param {?} ngZone
     * @param {?} platform
     * @param {?} cdr
     * @param {?} nzDomEventService
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(nzLayoutComponent, mediaMatcher, ngZone, platform, cdr, nzDomEventService, renderer, elementRef) {
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
    /**
     * @return {?}
     */
    get trigger() {
        return this.nzTrigger !== undefined ? this.nzTrigger : this.defaultTrigger;
    }
    /**
     * @return {?}
     */
    get flexSetting() {
        return `0 0 ${this.widthSetting}`;
    }
    /**
     * @return {?}
     */
    get widthSetting() {
        if (this.nzCollapsed) {
            return `${this.nzCollapsedWidth}px`;
        }
        else {
            return toCssPixel(this.nzWidth);
        }
    }
    /**
     * @return {?}
     */
    watchMatchMedia() {
        if (this.nzBreakpoint) {
            /** @type {?} */
            const matchBelow = this.mediaMatcher.matchMedia(`(max-width: ${this.dimensionMap[this.nzBreakpoint]})`).matches;
            this.below = matchBelow;
            this.nzCollapsed = matchBelow;
            this.nzCollapsedChange.emit(matchBelow);
            this.ngZone.run((/**
             * @return {?}
             */
            () => {
                this.cdr.markForCheck();
            }));
        }
    }
    /**
     * @return {?}
     */
    toggleCollapse() {
        this.nzCollapsed = !this.nzCollapsed;
        this.nzCollapsedChange.emit(this.nzCollapsed);
    }
    /**
     * @return {?}
     */
    get isZeroTrigger() {
        return (this.nzCollapsible &&
            this.trigger &&
            this.nzCollapsedWidth === 0 &&
            ((this.nzBreakpoint && this.below) || !this.nzBreakpoint));
    }
    /**
     * @return {?}
     */
    get isSiderTrigger() {
        return this.nzCollapsible && this.trigger && this.nzCollapsedWidth !== 0;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.nzLayoutComponent) {
            this.nzLayoutComponent.initSider();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.platform.isBrowser) {
            Promise.resolve().then((/**
             * @return {?}
             */
            () => this.watchMatchMedia()));
            this.nzDomEventService
                .registerResizeListener()
                .pipe(takeUntil(this.destroy$), finalize((/**
             * @return {?}
             */
            () => this.nzDomEventService.unregisterResizeListener())))
                .subscribe((/**
             * @return {?}
             */
            () => this.watchMatchMedia()));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        if (this.nzLayoutComponent) {
            this.nzLayoutComponent.destroySider();
        }
    }
}
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
                    '[class.ant-layout-sider-light]': `nzTheme === 'light'`,
                    '[class.ant-layout-sider-collapsed]': 'nzCollapsed',
                    '[style.flex]': 'flexSetting',
                    '[style.max-width]': 'widthSetting',
                    '[style.min-width]': 'widthSetting',
                    '[style.width]': 'widthSetting'
                }
            }] }
];
/** @nocollapse */
NzSiderComponent.ctorParameters = () => [
    { type: NzLayoutComponent, decorators: [{ type: Optional }, { type: Host }] },
    { type: MediaMatcher },
    { type: NgZone },
    { type: Platform },
    { type: ChangeDetectorRef },
    { type: NzDomEventService },
    { type: Renderer2 },
    { type: ElementRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2lkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9sYXlvdXQvIiwic291cmNlcyI6WyJuei1zaWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLElBQUksRUFDSixLQUFLLEVBQ0wsTUFBTSxFQUdOLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJELE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFnQixpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRS9GLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBbUIxRCxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7Ozs7OztJQXNFM0IsWUFDOEIsaUJBQW9DLEVBQ3hELFlBQTBCLEVBQzFCLE1BQWMsRUFDZCxRQUFrQixFQUNsQixHQUFzQixFQUN0QixpQkFBb0MsRUFDNUMsUUFBbUIsRUFDbkIsVUFBc0I7UUFQTSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3hELGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLFFBQUcsR0FBSCxHQUFHLENBQW1C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YTtvQkFDN0IsbUJBQW1CLEVBQUUsY0FBYztvQkFDbkMsbUJBQW1CLEVBQUUsY0FBYztvQkFDbkMsZUFBZSxFQUFFLGNBQWM7aUJBQ2hDO2FBQ0Y7Ozs7WUFsQlEsaUJBQWlCLHVCQTBGckIsUUFBUSxZQUFJLElBQUk7WUFqR1osWUFBWTtZQVhuQixNQUFNO1lBWUMsUUFBUTtZQWxCZixpQkFBaUI7WUFzQjhCLGlCQUFpQjtZQVhoRSxTQUFTO1lBVFQsVUFBVTs7O2dDQXFEVCxNQUFNO3NCQUVOLEtBQUs7c0JBQ0wsS0FBSzsrQkFDTCxLQUFLOzJCQUNMLEtBQUs7NEJBQ0wsS0FBSzs2QkFDTCxLQUFLOzRCQUNMLEtBQUs7MEJBQ0wsS0FBSzt3QkFDTCxLQUFLOzZCQUNMLFNBQVMsU0FBQyxnQkFBZ0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O0FBSnBCO0lBQWYsWUFBWSxFQUFFOzt3REFBd0I7QUFDdkI7SUFBZixZQUFZLEVBQUU7O3VEQUF1QjtBQUN0QjtJQUFmLFlBQVksRUFBRTs7cURBQXFCOzs7Ozs7SUFwQjdDLGlDQUFzQjs7Ozs7SUFDdEIsb0NBQWlDOzs7OztJQUNqQyx3Q0FPRTs7SUFFRiw2Q0FBMEQ7O0lBRTFELG1DQUF3Qzs7SUFDeEMsbUNBQTRDOztJQUM1Qyw0Q0FBK0I7O0lBQy9CLHdDQUFvQzs7SUFDcEMseUNBQTBDOztJQUMxQywwQ0FBZ0Q7O0lBQ2hELHlDQUErQzs7SUFDL0MsdUNBQTZDOztJQUM3QyxxQ0FBc0M7O0lBQ3RDLDBDQUFpRjs7Ozs7SUFnRC9FLDZDQUFnRTs7Ozs7SUFDaEUsd0NBQWtDOzs7OztJQUNsQyxrQ0FBc0I7Ozs7O0lBQ3RCLG9DQUEwQjs7Ozs7SUFDMUIsK0JBQThCOzs7OztJQUM5Qiw2Q0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdCxcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTWVkaWFNYXRjaGVyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2xheW91dCc7XHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaW5hbGl6ZSwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgdG9Dc3NQaXhlbCwgSW5wdXRCb29sZWFuLCBOekJyZWFrUG9pbnQsIE56RG9tRXZlbnRTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56TGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9uei1sYXlvdXQuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotc2lkZXInLFxyXG4gIGV4cG9ydEFzOiAnbnpTaWRlcicsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotc2lkZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LWxheW91dC1zaWRlci16ZXJvLXdpZHRoXSc6ICduekNvbGxhcHNlZCAmJiBuekNvbGxhcHNlZFdpZHRoID09PSAwJyxcclxuICAgICdbY2xhc3MuYW50LWxheW91dC1zaWRlci1saWdodF0nOiBgbnpUaGVtZSA9PT0gJ2xpZ2h0J2AsXHJcbiAgICAnW2NsYXNzLmFudC1sYXlvdXQtc2lkZXItY29sbGFwc2VkXSc6ICduekNvbGxhcHNlZCcsXHJcbiAgICAnW3N0eWxlLmZsZXhdJzogJ2ZsZXhTZXR0aW5nJyxcclxuICAgICdbc3R5bGUubWF4LXdpZHRoXSc6ICd3aWR0aFNldHRpbmcnLFxyXG4gICAgJ1tzdHlsZS5taW4td2lkdGhdJzogJ3dpZHRoU2V0dGluZycsXHJcbiAgICAnW3N0eWxlLndpZHRoXSc6ICd3aWR0aFNldHRpbmcnXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpTaWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuICBwcml2YXRlIGJlbG93ID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJpdmF0ZSBkaW1lbnNpb25NYXAgPSB7XHJcbiAgICB4czogJzQ4MHB4JyxcclxuICAgIHNtOiAnNTc2cHgnLFxyXG4gICAgbWQ6ICc3NjhweCcsXHJcbiAgICBsZzogJzk5MnB4JyxcclxuICAgIHhsOiAnMTIwMHB4JyxcclxuICAgIHh4bDogJzE2MDBweCdcclxuICB9O1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDb2xsYXBzZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBJbnB1dCgpIG56V2lkdGg6IHN0cmluZyB8IG51bWJlciA9IDIwMDtcclxuICBASW5wdXQoKSBuelRoZW1lOiAnbGlnaHQnIHwgJ2RhcmsnID0gJ2RhcmsnO1xyXG4gIEBJbnB1dCgpIG56Q29sbGFwc2VkV2lkdGggPSA4MDtcclxuICBASW5wdXQoKSBuekJyZWFrcG9pbnQ6IE56QnJlYWtQb2ludDtcclxuICBASW5wdXQoKSBuelplcm9UcmlnZ2VyOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpSZXZlcnNlQXJyb3cgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDb2xsYXBzaWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekNvbGxhcHNlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56VHJpZ2dlcjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQFZpZXdDaGlsZCgnZGVmYXVsdFRyaWdnZXInLCB7IHN0YXRpYzogdHJ1ZSB9KSBkZWZhdWx0VHJpZ2dlcjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgZ2V0IHRyaWdnZXIoKTogVGVtcGxhdGVSZWY8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMubnpUcmlnZ2VyICE9PSB1bmRlZmluZWQgPyB0aGlzLm56VHJpZ2dlciA6IHRoaXMuZGVmYXVsdFRyaWdnZXI7XHJcbiAgfVxyXG5cclxuICBnZXQgZmxleFNldHRpbmcoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgMCAwICR7dGhpcy53aWR0aFNldHRpbmd9YDtcclxuICB9XHJcblxyXG4gIGdldCB3aWR0aFNldHRpbmcoKTogc3RyaW5nIHtcclxuICAgIGlmICh0aGlzLm56Q29sbGFwc2VkKSB7XHJcbiAgICAgIHJldHVybiBgJHt0aGlzLm56Q29sbGFwc2VkV2lkdGh9cHhgO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRvQ3NzUGl4ZWwodGhpcy5ueldpZHRoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHdhdGNoTWF0Y2hNZWRpYSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56QnJlYWtwb2ludCkge1xyXG4gICAgICBjb25zdCBtYXRjaEJlbG93ID0gdGhpcy5tZWRpYU1hdGNoZXIubWF0Y2hNZWRpYShgKG1heC13aWR0aDogJHt0aGlzLmRpbWVuc2lvbk1hcFt0aGlzLm56QnJlYWtwb2ludF19KWApLm1hdGNoZXM7XHJcbiAgICAgIHRoaXMuYmVsb3cgPSBtYXRjaEJlbG93O1xyXG4gICAgICB0aGlzLm56Q29sbGFwc2VkID0gbWF0Y2hCZWxvdztcclxuICAgICAgdGhpcy5uekNvbGxhcHNlZENoYW5nZS5lbWl0KG1hdGNoQmVsb3cpO1xyXG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZUNvbGxhcHNlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5uekNvbGxhcHNlZCA9ICF0aGlzLm56Q29sbGFwc2VkO1xyXG4gICAgdGhpcy5uekNvbGxhcHNlZENoYW5nZS5lbWl0KHRoaXMubnpDb2xsYXBzZWQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzWmVyb1RyaWdnZXIoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0aGlzLm56Q29sbGFwc2libGUgJiZcclxuICAgICAgdGhpcy50cmlnZ2VyICYmXHJcbiAgICAgIHRoaXMubnpDb2xsYXBzZWRXaWR0aCA9PT0gMCAmJlxyXG4gICAgICAoKHRoaXMubnpCcmVha3BvaW50ICYmIHRoaXMuYmVsb3cpIHx8ICF0aGlzLm56QnJlYWtwb2ludClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNTaWRlclRyaWdnZXIoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5uekNvbGxhcHNpYmxlICYmIHRoaXMudHJpZ2dlciAmJiB0aGlzLm56Q29sbGFwc2VkV2lkdGggIT09IDA7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBPcHRpb25hbCgpIEBIb3N0KCkgcHJpdmF0ZSBuekxheW91dENvbXBvbmVudDogTnpMYXlvdXRDb21wb25lbnQsXHJcbiAgICBwcml2YXRlIG1lZGlhTWF0Y2hlcjogTWVkaWFNYXRjaGVyLFxyXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcclxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBuekRvbUV2ZW50U2VydmljZTogTnpEb21FdmVudFNlcnZpY2UsXHJcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZlxyXG4gICkge1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWxheW91dC1zaWRlcicpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uekxheW91dENvbXBvbmVudCkge1xyXG4gICAgICB0aGlzLm56TGF5b3V0Q29tcG9uZW50LmluaXRTaWRlcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XHJcbiAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy53YXRjaE1hdGNoTWVkaWEoKSk7XHJcbiAgICAgIHRoaXMubnpEb21FdmVudFNlcnZpY2VcclxuICAgICAgICAucmVnaXN0ZXJSZXNpemVMaXN0ZW5lcigpXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXHJcbiAgICAgICAgICBmaW5hbGl6ZSgoKSA9PiB0aGlzLm56RG9tRXZlbnRTZXJ2aWNlLnVucmVnaXN0ZXJSZXNpemVMaXN0ZW5lcigpKVxyXG4gICAgICAgIClcclxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMud2F0Y2hNYXRjaE1lZGlhKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICAgIGlmICh0aGlzLm56TGF5b3V0Q29tcG9uZW50KSB7XHJcbiAgICAgIHRoaXMubnpMYXlvdXRDb21wb25lbnQuZGVzdHJveVNpZGVyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==