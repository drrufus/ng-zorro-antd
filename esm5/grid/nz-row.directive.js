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
import { NzDomEventService, NzUpdateHostClassService, responsiveMap } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
import * as i2 from "@angular/cdk/layout";
import * as i3 from "@angular/cdk/platform";
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
    NzRowDirective.prototype.calculateGutter = function () {
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
    NzRowDirective.prototype.updateGutter = function () {
        var actualGutter = this.calculateGutter();
        if (this.actualGutter !== actualGutter) {
            this.actualGutter = actualGutter;
            this.actualGutter$.next(this.actualGutter);
            this.renderer.setStyle(this.el, 'margin-left', "-" + this.actualGutter / 2 + "px");
            this.renderer.setStyle(this.el, 'margin-right', "-" + this.actualGutter / 2 + "px");
        }
    };
    NzRowDirective.prototype.watchMedia = function () {
        var _this = this;
        Object.keys(responsiveMap).map(function (screen) {
            var castBP = screen;
            var matchBelow = _this.mediaMatcher.matchMedia(responsiveMap[castBP]).matches;
            if (matchBelow) {
                _this.breakPoint = castBP;
            }
        });
        this.updateGutter();
    };
    /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289*/
    NzRowDirective.prototype.setClassMap = function () {
        var _a;
        var classMap = (_a = {},
            _a["" + this.prefixCls] = !this.nzType,
            _a[this.prefixCls + "-" + this.nzType] = this.nzType,
            _a[this.prefixCls + "-" + this.nzType + "-" + this.nzAlign] = this.nzType && this.nzAlign,
            _a[this.prefixCls + "-" + this.nzType + "-" + this.nzJustify] = this.nzType && this.nzJustify,
            _a);
        this.nzUpdateHostClassService.updateHostClass(this.el, classMap);
    };
    NzRowDirective.prototype.ngOnInit = function () {
        this.setClassMap();
        this.watchMedia();
    };
    NzRowDirective.prototype.ngOnChanges = function (changes) {
        if (changes.nzType || changes.nzAlign || changes.nzJustify) {
            this.setClassMap();
        }
        if (changes.nzGutter) {
            this.updateGutter();
        }
    };
    NzRowDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.platform.isBrowser) {
            this.nzDomEventService
                .registerResizeListener()
                .pipe(takeUntil(this.destroy$), finalize(function () { return _this.nzDomEventService.unregisterResizeListener(); }))
                .subscribe(function () { return _this.watchMedia(); });
        }
    };
    NzRowDirective.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /** @nocollapse */ NzRowDirective.ɵfac = function NzRowDirective_Factory(t) { return new (t || NzRowDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.NzUpdateHostClassService), i0.ɵɵdirectiveInject(i2.MediaMatcher), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i3.Platform), i0.ɵɵdirectiveInject(i1.NzDomEventService)); };
    /** @nocollapse */ NzRowDirective.ɵdir = i0.ɵɵdefineDirective({ type: NzRowDirective, selectors: [["", "nz-row", ""], ["nz-row"]], inputs: { nzType: "nzType", nzAlign: "nzAlign", nzJustify: "nzJustify", nzGutter: "nzGutter" }, exportAs: ["nzRow"], features: [i0.ɵɵProvidersFeature([NzUpdateHostClassService]), i0.ɵɵNgOnChangesFeature()] });
    return NzRowDirective;
}());
export { NzRowDirective };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzRowDirective, [{
        type: Directive,
        args: [{
                selector: '[nz-row],nz-row',
                exportAs: 'nzRow',
                providers: [NzUpdateHostClassService]
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.NzUpdateHostClassService }, { type: i2.MediaMatcher }, { type: i0.NgZone }, { type: i3.Platform }, { type: i1.NzDomEventService }]; }, { nzType: [{
            type: Input
        }], nzAlign: [{
            type: Input
        }], nzJustify: [{
            type: Input
        }], nzGutter: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcm93LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZ3JpZC8iLCJzb3VyY2VzIjpbIm56LXJvdy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQWdDLFNBQVMsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFNUksT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQThDLGlCQUFpQixFQUFFLHdCQUF3QixFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzVJLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFLckQ7SUEyREUsd0JBQ1MsVUFBc0IsRUFDdEIsUUFBbUIsRUFDbkIsd0JBQWtELEVBQ2xELFlBQTBCLEVBQzFCLE1BQWMsRUFDZCxRQUFrQixFQUNqQixpQkFBb0M7UUFOckMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDakIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQTNEckMsWUFBTyxHQUFnQixLQUFLLENBQUM7UUFDN0IsY0FBUyxHQUFjLE9BQU8sQ0FBQztRQUVoQyxPQUFFLEdBQWdCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQ2hELGNBQVMsR0FBRyxTQUFT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RCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7UUFDRCxJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQztJQUVELHdDQUFlLEdBQWY7UUFBQSxpQkFVQztRQVRDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDM0IsSUFBSSxDQUFDLGlCQUFpQjtpQkFDbkIsc0JBQXNCLEVBQUU7aUJBQ3hCLElBQUksQ0FDSCxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUN4QixRQUFRLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyx3QkFBd0IsRUFBRSxFQUFqRCxDQUFpRCxDQUFDLENBQ2xFO2lCQUNBLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFVBQVUsRUFBRSxFQUFqQixDQUFpQixDQUFDLENBQUM7U0FDdkM7SUFDSCxDQUFDO0lBRUQsb0NBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDO2dGQTdGVSxjQUFjO3VEQUFkLGNBQWMscU1BRmQsQ0FBQyx3QkFBd0IsQ0FBQzt5QkF0QnZDO0NBc0hDLEFBbkdELElBbUdDO1NBOUZZLGNBQWM7a0RBQWQsY0FBYztjQUwxQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO2FBQ3RDOztrQkFFRSxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBOZ1pvbmUsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTWVkaWFNYXRjaGVyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2xheW91dCc7XHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHsgSW5kZXhhYmxlT2JqZWN0LCBOekFsaWduVHlwZSwgTnpCcmVha1BvaW50LCBOekRvbUV2ZW50U2VydmljZSwgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLCByZXNwb25zaXZlTWFwIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaW5hbGl6ZSwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuZXhwb3J0IHR5cGUgTnpKdXN0aWZ5ID0gJ3N0YXJ0JyB8ICdlbmQnIHwgJ2NlbnRlcicgfCAnc3BhY2UtYXJvdW5kJyB8ICdzcGFjZS1iZXR3ZWVuJztcclxuZXhwb3J0IHR5cGUgTnpHcmlkVHlwZSA9ICdmbGV4JyB8IG51bGw7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tuei1yb3ddLG56LXJvdycsXHJcbiAgZXhwb3J0QXM6ICduelJvdycsXHJcbiAgcHJvdmlkZXJzOiBbTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpSb3dEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBuelR5cGU6IE56R3JpZFR5cGU7XHJcbiAgQElucHV0KCkgbnpBbGlnbjogTnpBbGlnblR5cGUgPSAndG9wJztcclxuICBASW5wdXQoKSBuekp1c3RpZnk6IE56SnVzdGlmeSA9ICdzdGFydCc7XHJcbiAgQElucHV0KCkgbnpHdXR0ZXI6IG51bWJlciB8IEluZGV4YWJsZU9iamVjdDtcclxuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gIHByaXZhdGUgcHJlZml4Q2xzID0gJ2FudC1yb3cnO1xyXG4gIHByaXZhdGUgYnJlYWtQb2ludDogTnpCcmVha1BvaW50O1xyXG4gIGFjdHVhbEd1dHRlcjogbnVtYmVyO1xyXG4gIGFjdHVhbEd1dHRlciQgPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XHJcbiAgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBjYWxjdWxhdGVHdXR0ZXIoKTogbnVtYmVyIHtcclxuICAgIGlmICh0eXBlb2YgdGhpcy5uekd1dHRlciAhPT0gJ29iamVjdCcpIHtcclxuICAgICAgcmV0dXJuIHRoaXMubnpHdXR0ZXI7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuYnJlYWtQb2ludCAmJiB0aGlzLm56R3V0dGVyW3RoaXMuYnJlYWtQb2ludF0pIHtcclxuICAgICAgcmV0dXJuIHRoaXMubnpHdXR0ZXJbdGhpcy5icmVha1BvaW50XTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlR3V0dGVyKCk6IHZvaWQge1xyXG4gICAgY29uc3QgYWN0dWFsR3V0dGVyID0gdGhpcy5jYWxjdWxhdGVHdXR0ZXIoKTtcclxuICAgIGlmICh0aGlzLmFjdHVhbEd1dHRlciAhPT0gYWN0dWFsR3V0dGVyKSB7XHJcbiAgICAgIHRoaXMuYWN0dWFsR3V0dGVyID0gYWN0dWFsR3V0dGVyO1xyXG4gICAgICB0aGlzLmFjdHVhbEd1dHRlciQubmV4dCh0aGlzLmFjdHVhbEd1dHRlcik7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ21hcmdpbi1sZWZ0JywgYC0ke3RoaXMuYWN0dWFsR3V0dGVyIC8gMn1weGApO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICdtYXJnaW4tcmlnaHQnLCBgLSR7dGhpcy5hY3R1YWxHdXR0ZXIgLyAyfXB4YCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB3YXRjaE1lZGlhKCk6IHZvaWQge1xyXG4gICAgT2JqZWN0LmtleXMocmVzcG9uc2l2ZU1hcCkubWFwKChzY3JlZW46IHN0cmluZykgPT4ge1xyXG4gICAgICBjb25zdCBjYXN0QlAgPSBzY3JlZW4gYXMgTnpCcmVha1BvaW50O1xyXG4gICAgICBjb25zdCBtYXRjaEJlbG93ID0gdGhpcy5tZWRpYU1hdGNoZXIubWF0Y2hNZWRpYShyZXNwb25zaXZlTWFwW2Nhc3RCUF0pLm1hdGNoZXM7XHJcbiAgICAgIGlmIChtYXRjaEJlbG93KSB7XHJcbiAgICAgICAgdGhpcy5icmVha1BvaW50ID0gY2FzdEJQO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMudXBkYXRlR3V0dGVyKCk7XHJcbiAgfVxyXG5cclxuICAvKiogdGVtcCBzb2x1dGlvbiBzaW5jZSBubyBtZXRob2QgYWRkIGNsYXNzTWFwIHRvIGhvc3QgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvNzI4OSovXHJcbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICBjb25zdCBjbGFzc01hcCA9IHtcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfWBdOiAhdGhpcy5uelR5cGUsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tJHt0aGlzLm56VHlwZX1gXTogdGhpcy5uelR5cGUsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tJHt0aGlzLm56VHlwZX0tJHt0aGlzLm56QWxpZ259YF06IHRoaXMubnpUeXBlICYmIHRoaXMubnpBbGlnbixcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS0ke3RoaXMubnpUeXBlfS0ke3RoaXMubnpKdXN0aWZ5fWBdOiB0aGlzLm56VHlwZSAmJiB0aGlzLm56SnVzdGlmeVxyXG4gICAgfTtcclxuICAgIHRoaXMubnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsLCBjbGFzc01hcCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwdWJsaWMgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsXHJcbiAgICBwdWJsaWMgbWVkaWFNYXRjaGVyOiBNZWRpYU1hdGNoZXIsXHJcbiAgICBwdWJsaWMgbmdab25lOiBOZ1pvbmUsXHJcbiAgICBwdWJsaWMgcGxhdGZvcm06IFBsYXRmb3JtLFxyXG4gICAgcHJpdmF0ZSBuekRvbUV2ZW50U2VydmljZTogTnpEb21FdmVudFNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgdGhpcy53YXRjaE1lZGlhKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5uelR5cGUgfHwgY2hhbmdlcy5uekFsaWduIHx8IGNoYW5nZXMubnpKdXN0aWZ5KSB7XHJcbiAgICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLm56R3V0dGVyKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlR3V0dGVyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgdGhpcy5uekRvbUV2ZW50U2VydmljZVxyXG4gICAgICAgIC5yZWdpc3RlclJlc2l6ZUxpc3RlbmVyKClcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcclxuICAgICAgICAgIGZpbmFsaXplKCgpID0+IHRoaXMubnpEb21FdmVudFNlcnZpY2UudW5yZWdpc3RlclJlc2l6ZUxpc3RlbmVyKCkpXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy53YXRjaE1lZGlhKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcbn1cclxuIl19