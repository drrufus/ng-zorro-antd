/**
 * @fileoverview added by tsickle
 * Generated from: nz-row.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, ElementRef, Input, NgZone, Renderer2 } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { responsiveMap, NzDomEventService, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
var NzRowDirective = /** @class */ (function () {
    function NzRowDirective(elementRef, renderer, nzUpdateHostClassService, mediaMatcher, ngZone, platform, nzDomEventService) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.mediaMatcher = mediaMatcher;
        this.ngZone = ngZone;
        this.platform = platform;
        this.nzDomEventService = nzDomEventService;
        this.nzAlign = 'top';
        this.nzJustify = 'start';
        this.el = this.elementRef.nativeElement;
        this.prefixCls = 'ant-row';
        this.actualGutter$ = new Subject();
        this.destroy$ = new Subject();
    }
    /**
     * @return {?}
     */
    NzRowDirective.prototype.calculateGutter = /**
     * @return {?}
     */
    function () {
        if (typeof this.nzGutter !== 'object') {
            return this.nzGutter;
        }
        else if (this.breakPoint && this.nzGutter[this.breakPoint]) {
            return this.nzGutter[this.breakPoint];
        }
        else {
            return 0;
        }
    };
    /**
     * @return {?}
     */
    NzRowDirective.prototype.updateGutter = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var actualGutter = this.calculateGutter();
        if (this.actualGutter !== actualGutter) {
            this.actualGutter = actualGutter;
            this.actualGutter$.next(this.actualGutter);
            this.renderer.setStyle(this.el, 'margin-left', "-" + this.actualGutter / 2 + "px");
            this.renderer.setStyle(this.el, 'margin-right', "-" + this.actualGutter / 2 + "px");
        }
    };
    /**
     * @return {?}
     */
    NzRowDirective.prototype.watchMedia = /**
     * @return {?}
     */
    function () {
        var _this = this;
        Object.keys(responsiveMap).map((/**
         * @param {?} screen
         * @return {?}
         */
        function (screen) {
            /** @type {?} */
            var castBP = (/** @type {?} */ (screen));
            /** @type {?} */
            var matchBelow = _this.mediaMatcher.matchMedia(responsiveMap[castBP]).matches;
            if (matchBelow) {
                _this.breakPoint = castBP;
            }
        }));
        this.updateGutter();
    };
    /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289*/
    /**
     * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
     * @return {?}
     */
    NzRowDirective.prototype.setClassMap = /**
     * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var classMap = (_a = {},
            _a["" + this.prefixCls] = !this.nzType,
            _a[this.prefixCls + "-" + this.nzType] = this.nzType,
            _a[this.prefixCls + "-" + this.nzType + "-" + this.nzAlign] = this.nzType && this.nzAlign,
            _a[this.prefixCls + "-" + this.nzType + "-" + this.nzJustify] = this.nzType && this.nzJustify,
            _a);
        this.nzUpdateHostClassService.updateHostClass(this.el, classMap);
    };
    /**
     * @return {?}
     */
    NzRowDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
        this.watchMedia();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzRowDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzType || changes.nzAlign || changes.nzJustify) {
            this.setClassMap();
        }
        if (changes.nzGutter) {
            this.updateGutter();
        }
    };
    /**
     * @return {?}
     */
    NzRowDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.platform.isBrowser) {
            this.nzDomEventService
                .registerResizeListener()
                .pipe(takeUntil(this.destroy$), finalize((/**
             * @return {?}
             */
            function () { return _this.nzDomEventService.unregisterResizeListener(); })))
                .subscribe((/**
             * @return {?}
             */
            function () { return _this.watchMedia(); }));
        }
    };
    /**
     * @return {?}
     */
    NzRowDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzRowDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-row],nz-row',
                    exportAs: 'nzRow',
                    providers: [NzUpdateHostClassService]
                },] }
    ];
    /** @nocollapse */
    NzRowDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: NzUpdateHostClassService },
        { type: MediaMatcher },
        { type: NgZone },
        { type: Platform },
        { type: NzDomEventService }
    ]; };
    NzRowDirective.propDecorators = {
        nzType: [{ type: Input }],
        nzAlign: [{ type: Input }],
        nzJustify: [{ type: Input }],
        nzGutter: [{ type: Input }]
    };
    return NzRowDirective;
}());
export { NzRowDirective };
if (false) {
    /** @type {?} */
    NzRowDirective.prototype.nzType;
    /** @type {?} */
    NzRowDirective.prototype.nzAlign;
    /** @type {?} */
    NzRowDirective.prototype.nzJustify;
    /** @type {?} */
    NzRowDirective.prototype.nzGutter;
    /**
     * @type {?}
     * @private
     */
    NzRowDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NzRowDirective.prototype.prefixCls;
    /**
     * @type {?}
     * @private
     */
    NzRowDirective.prototype.breakPoint;
    /** @type {?} */
    NzRowDirective.prototype.actualGutter;
    /** @type {?} */
    NzRowDirective.prototype.actualGutter$;
    /** @type {?} */
    NzRowDirective.prototype.destroy$;
    /** @type {?} */
    NzRowDirective.prototype.elementRef;
    /** @type {?} */
    NzRowDirective.prototype.renderer;
    /** @type {?} */
    NzRowDirective.prototype.nzUpdateHostClassService;
    /** @type {?} */
    NzRowDirective.prototype.mediaMatcher;
    /** @type {?} */
    NzRowDirective.prototype.ngZone;
    /** @type {?} */
    NzRowDirective.prototype.platform;
    /**
     * @type {?}
     * @private
     */
    NzRowDirective.prototype.nzDomEventService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcm93LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZ3JpZC8iLCJzb3VyY2VzIjpbIm56LXJvdy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFJTixTQUFTLEVBRVYsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQ0wsYUFBYSxFQUliLGlCQUFpQixFQUNqQix3QkFBd0IsRUFDekIsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFLckQ7SUEyREUsd0JBQ1MsVUFBc0IsRUFDdEIsUUFBbUIsRUFDbkIsd0JBQWtELEVBQ2xELFlBQTBCLEVBQzFCLE1BQWMsRUFDZCxRQUFrQixFQUNqQixpQkFBb0M7UUFOckMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDakIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQTNEckMsWUFBTyxHQUFnQixLQUFLLENBQUM7UUFDN0IsY0FBUyxHQUFjLE9BQU8sQ0FBQztRQUVoQyxPQUFFLEdBQWdCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQ2hELGNBQVMsR0FBRyxTQUFTLENBQUM7UUFH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SUFDNUMsNEJBQXdEOzs7OztJQUN4RCxtQ0FBOEI7Ozs7O0lBQzlCLG9DQUFpQzs7SUFDakMsc0NBQXFCOztJQUNyQix1Q0FBc0M7O0lBQ3RDLGtDQUF5Qjs7SUE2Q3ZCLG9DQUE2Qjs7SUFDN0Isa0NBQTBCOztJQUMxQixrREFBeUQ7O0lBQ3pELHNDQUFpQzs7SUFDakMsZ0NBQXFCOztJQUNyQixrQ0FBeUI7Ozs7O0lBQ3pCLDJDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE5nWm9uZSxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlc1xyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTWVkaWFNYXRjaGVyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2xheW91dCc7XHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHtcclxuICByZXNwb25zaXZlTWFwLFxyXG4gIEluZGV4YWJsZU9iamVjdCxcclxuICBOekFsaWduVHlwZSxcclxuICBOekJyZWFrUG9pbnQsXHJcbiAgTnpEb21FdmVudFNlcnZpY2UsXHJcbiAgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXHJcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaW5hbGl6ZSwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuZXhwb3J0IHR5cGUgTnpKdXN0aWZ5ID0gJ3N0YXJ0JyB8ICdlbmQnIHwgJ2NlbnRlcicgfCAnc3BhY2UtYXJvdW5kJyB8ICdzcGFjZS1iZXR3ZWVuJztcclxuZXhwb3J0IHR5cGUgTnpHcmlkVHlwZSA9ICdmbGV4JyB8IG51bGw7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tuei1yb3ddLG56LXJvdycsXHJcbiAgZXhwb3J0QXM6ICduelJvdycsXHJcbiAgcHJvdmlkZXJzOiBbTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpSb3dEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBuelR5cGU6IE56R3JpZFR5cGU7XHJcbiAgQElucHV0KCkgbnpBbGlnbjogTnpBbGlnblR5cGUgPSAndG9wJztcclxuICBASW5wdXQoKSBuekp1c3RpZnk6IE56SnVzdGlmeSA9ICdzdGFydCc7XHJcbiAgQElucHV0KCkgbnpHdXR0ZXI6IG51bWJlciB8IEluZGV4YWJsZU9iamVjdDtcclxuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gIHByaXZhdGUgcHJlZml4Q2xzID0gJ2FudC1yb3cnO1xyXG4gIHByaXZhdGUgYnJlYWtQb2ludDogTnpCcmVha1BvaW50O1xyXG4gIGFjdHVhbEd1dHRlcjogbnVtYmVyO1xyXG4gIGFjdHVhbEd1dHRlciQgPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XHJcbiAgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBjYWxjdWxhdGVHdXR0ZXIoKTogbnVtYmVyIHtcclxuICAgIGlmICh0eXBlb2YgdGhpcy5uekd1dHRlciAhPT0gJ29iamVjdCcpIHtcclxuICAgICAgcmV0dXJuIHRoaXMubnpHdXR0ZXI7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuYnJlYWtQb2ludCAmJiB0aGlzLm56R3V0dGVyW3RoaXMuYnJlYWtQb2ludF0pIHtcclxuICAgICAgcmV0dXJuIHRoaXMubnpHdXR0ZXJbdGhpcy5icmVha1BvaW50XTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlR3V0dGVyKCk6IHZvaWQge1xyXG4gICAgY29uc3QgYWN0dWFsR3V0dGVyID0gdGhpcy5jYWxjdWxhdGVHdXR0ZXIoKTtcclxuICAgIGlmICh0aGlzLmFjdHVhbEd1dHRlciAhPT0gYWN0dWFsR3V0dGVyKSB7XHJcbiAgICAgIHRoaXMuYWN0dWFsR3V0dGVyID0gYWN0dWFsR3V0dGVyO1xyXG4gICAgICB0aGlzLmFjdHVhbEd1dHRlciQubmV4dCh0aGlzLmFjdHVhbEd1dHRlcik7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ21hcmdpbi1sZWZ0JywgYC0ke3RoaXMuYWN0dWFsR3V0dGVyIC8gMn1weGApO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICdtYXJnaW4tcmlnaHQnLCBgLSR7dGhpcy5hY3R1YWxHdXR0ZXIgLyAyfXB4YCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB3YXRjaE1lZGlhKCk6IHZvaWQge1xyXG4gICAgT2JqZWN0LmtleXMocmVzcG9uc2l2ZU1hcCkubWFwKChzY3JlZW46IHN0cmluZykgPT4ge1xyXG4gICAgICBjb25zdCBjYXN0QlAgPSBzY3JlZW4gYXMgTnpCcmVha1BvaW50O1xyXG4gICAgICBjb25zdCBtYXRjaEJlbG93ID0gdGhpcy5tZWRpYU1hdGNoZXIubWF0Y2hNZWRpYShyZXNwb25zaXZlTWFwW2Nhc3RCUF0pLm1hdGNoZXM7XHJcbiAgICAgIGlmIChtYXRjaEJlbG93KSB7XHJcbiAgICAgICAgdGhpcy5icmVha1BvaW50ID0gY2FzdEJQO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMudXBkYXRlR3V0dGVyKCk7XHJcbiAgfVxyXG5cclxuICAvKiogdGVtcCBzb2x1dGlvbiBzaW5jZSBubyBtZXRob2QgYWRkIGNsYXNzTWFwIHRvIGhvc3QgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvNzI4OSovXHJcbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICBjb25zdCBjbGFzc01hcCA9IHtcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfWBdOiAhdGhpcy5uelR5cGUsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tJHt0aGlzLm56VHlwZX1gXTogdGhpcy5uelR5cGUsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tJHt0aGlzLm56VHlwZX0tJHt0aGlzLm56QWxpZ259YF06IHRoaXMubnpUeXBlICYmIHRoaXMubnpBbGlnbixcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS0ke3RoaXMubnpUeXBlfS0ke3RoaXMubnpKdXN0aWZ5fWBdOiB0aGlzLm56VHlwZSAmJiB0aGlzLm56SnVzdGlmeVxyXG4gICAgfTtcclxuICAgIHRoaXMubnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsLCBjbGFzc01hcCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwdWJsaWMgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsXHJcbiAgICBwdWJsaWMgbWVkaWFNYXRjaGVyOiBNZWRpYU1hdGNoZXIsXHJcbiAgICBwdWJsaWMgbmdab25lOiBOZ1pvbmUsXHJcbiAgICBwdWJsaWMgcGxhdGZvcm06IFBsYXRmb3JtLFxyXG4gICAgcHJpdmF0ZSBuekRvbUV2ZW50U2VydmljZTogTnpEb21FdmVudFNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgdGhpcy53YXRjaE1lZGlhKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5uelR5cGUgfHwgY2hhbmdlcy5uekFsaWduIHx8IGNoYW5nZXMubnpKdXN0aWZ5KSB7XHJcbiAgICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLm56R3V0dGVyKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlR3V0dGVyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgdGhpcy5uekRvbUV2ZW50U2VydmljZVxyXG4gICAgICAgIC5yZWdpc3RlclJlc2l6ZUxpc3RlbmVyKClcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcclxuICAgICAgICAgIGZpbmFsaXplKCgpID0+IHRoaXMubnpEb21FdmVudFNlcnZpY2UudW5yZWdpc3RlclJlc2l6ZUxpc3RlbmVyKCkpXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy53YXRjaE1lZGlhKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcbn1cclxuIl19