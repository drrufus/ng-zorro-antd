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
import { Injectable, Optional, SkipSelf } from '@angular/core';
import { combineLatest, BehaviorSubject, Subject } from 'rxjs';
import { auditTime, distinctUntilChanged, map, tap } from 'rxjs/operators';
import { NzMenuService } from './nz-menu.service';
import * as ɵngcc0 from '@angular/core';
var NzSubmenuService = /** @class */ (function () {
    function NzSubmenuService(nzHostSubmenuService, nzMenuService) {
        var _this = this;
        this.nzHostSubmenuService = nzHostSubmenuService;
        this.nzMenuService = nzMenuService;
        this.disabled = false;
        this.mode = 'vertical';
        this.mode$ = this.nzMenuService.mode$.pipe(map((/**
         * @param {?} mode
         * @return {?}
         */
        function (mode) {
            if (mode === 'inline') {
                return 'inline';
            }
            else if (mode === 'vertical' || _this.nzHostSubmenuService) {
                return 'vertical';
            }
            else {
                return 'horizontal';
            }
        })), tap((/**
         * @param {?} mode
         * @return {?}
         */
        function (mode) { return (_this.mode = (/** @type {?} */ (mode))); })));
        this.level = 1;
        this.level$ = new BehaviorSubject(1);
        this.subMenuOpen$ = new BehaviorSubject(false);
        this.open$ = new BehaviorSubject(false);
        this.mouseEnterLeave$ = new Subject();
        this.menuOpen$ = combineLatest(this.subMenuOpen$, this.mouseEnterLeave$).pipe(map((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return value[0] || value[1]; })), auditTime(150), distinctUntilChanged(), tap((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.setOpenState(data);
            if (_this.nzHostSubmenuService) {
                _this.nzHostSubmenuService.subMenuOpen$.next(data);
            }
        })));
        if (this.nzHostSubmenuService) {
            this.setLevel(this.nzHostSubmenuService.level + 1);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    NzSubmenuService.prototype.setOpenState = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.open$.next(value);
    };
    /**
     * @return {?}
     */
    NzSubmenuService.prototype.onMenuItemClick = /**
     * @return {?}
     */
    function () {
        this.setMouseEnterState(false);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzSubmenuService.prototype.setLevel = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.level$.next(value);
        this.level = value;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzSubmenuService.prototype.setMouseEnterState = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if ((this.mode === 'horizontal' || this.mode === 'vertical' || this.nzMenuService.isInDropDown) && !this.disabled) {
            this.mouseEnterLeave$.next(value);
        }
    };
    /** @nocollapse */
    NzSubmenuService.ctorParameters = function () { return [
        { type: NzSubmenuService, decorators: [{ type: SkipSelf }, { type: Optional }] },
        { type: NzMenuService }
    ]; };
NzSubmenuService.ɵfac = function NzSubmenuService_Factory(t) { return new (t || NzSubmenuService)(ɵngcc0.ɵɵinject(NzSubmenuService, 12), ɵngcc0.ɵɵinject(NzMenuService)); };
NzSubmenuService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: NzSubmenuService, factory: function (t) { return NzSubmenuService.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzSubmenuService, [{
        type: Injectable
    }], function () { return [{ type: NzSubmenuService, decorators: [{
                type: SkipSelf
            }, {
                type: Optional
            }] }, { type: NzMenuService }]; }, null); })();
    return NzSubmenuService;
}());
export { NzSubmenuService };
if (false) {
    /** @type {?} */
    NzSubmenuService.prototype.disabled;
    /** @type {?} */
    NzSubmenuService.prototype.mode;
    /** @type {?} */
    NzSubmenuService.prototype.mode$;
    /** @type {?} */
    NzSubmenuService.prototype.level;
    /** @type {?} */
    NzSubmenuService.prototype.level$;
    /** @type {?} */
    NzSubmenuService.prototype.subMenuOpen$;
    /** @type {?} */
    NzSubmenuService.prototype.open$;
    /** @type {?} */
    NzSubmenuService.prototype.mouseEnterLeave$;
    /** @type {?} */
    NzSubmenuService.prototype.menuOpen$;
    /**
     * @type {?}
     * @private
     */
    NzSubmenuService.prototype.nzHostSubmenuService;
    /** @type {?} */
    NzSubmenuService.prototype.nzMenuService;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3VibWVudS5zZXJ2aWNlLmpzIiwic291cmNlcyI6WyJuZzovbmctem9ycm8tYW50ZC9tZW51L256LXN1Ym1lbnUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRCxPQUFPLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJM0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDOztBQUVsRDtJQW9ERSwwQkFDa0Msb0JBQXNDLEVBQy9ELGFBQTRCO1FBRnJDLGlCQU9DO1FBTmlDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBa0I7UUFDL0Qsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFwRHJDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsU0FBSSxHQUF1QixVQUFVLENBQUM7UUFDdEMsVUFBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDbkMsR0FBRzs7OztRQUFDLFVBQUEsSUFBSTtZQUNOLElBQUksSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDckIsT0FBTyxRQUFRLENBQUM7YUFDakI7aUJBQU0sSUFBSSxJQUFJLEtBQUssVUFBVSxJQUFJLEtBQUksQ0FBQyxvQkFBb0IsRUFBRTtnQkFDM0QsT0FBTyxVQUFVLENBQUM7YUFDbkI7aUJBQU07Z0JBQ0wsT0FBTyxZQUFZLENBQUM7YUFDckI7UUFDSCxDQUFDLEVBQUMsRUFDRixHQUFHOzs7O1FBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxDQUFDLEtBQUksQ0FBQyxJQUFJLEdBQUcsbUJBQUEsSUFBSSxFQUFzQixDQUFDLEVBQXhDLENBQXdDLEVBQUMsQ0FDdEQsQ0FBQztRQUNGLFVBQUssR0FBRyxDQUFDLENBQUM7UUFDVixXQUFNLEdBQUcsSUFBSSxlQUFlLENBQVMsQ0FBQyxDQUFDLENBQUM7UUFDeEMsaUJBQVksR0FBRyxJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUNuRCxVQUFLLEdBQUcsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7UUFDNUMscUJBQWdCLEdBQUcsSUFBSSxPQUFPLEVBQVcsQ0FBQztRQUMxQyxjQUFTLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsSUFBSSxDQUN0RSxHQUFHOzs7O1FBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFwQixDQUFvQixFQUFDLEVBQ2xDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFDZCxvQkFBb0IsRUFBRSxFQUN0QixHQUFHOzs7O1FBQUMsVUFBQSxJQUFJO1lBQ04sS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4QixJQUFJLEtBQUksQ0FBQyxvQkFBb0IsRUFBRTtnQkFDN0IsS0FBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbkQ7UUFDSCxDQUFDLEVBQUMsQ0FDSCxDQUFDO1FBeUJBLElBQUksSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNwRDtJQUNILENBQUM7Ozs7O0lBMUJELHVDQUFZOzs7O0lBQVosVUFBYSxLQUFjO1FBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCwwQ0FBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFFRCxtQ0FBUTs7OztJQUFSLFVBQVMsS0FBYTtRQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELDZDQUFrQjs7OztJQUFsQixVQUFtQixLQUFjO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLFlBQVksSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFVBQVUsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqSCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25DO0lBQ0gsQ0FBQyxDQUNILEFBbERNOzs2QkFETCxVQUFVO2dCQXFEK0MsZ0JBQWdCLHVCQUFyRSxRQUFRLFlBQUksUUFBUTtnQkF2RGhCLGFBQWE7Ozs7Ozs7Ozs7MkRBQVk7SUE4RGxDLHVCQUFDO0NBQUEsQUE1REQsSUE0REM7U0EzRFksZ0JBQWdCOzs7SUFDM0Isb0NBQWlCOztJQUNqQixnQ0FBc0M7O0lBQ3RDLGlDQVdFOztJQUNGLGlDQUFVOztJQUNWLGtDQUF3Qzs7SUFDeEMsd0NBQW1EOztJQUNuRCxpQ0FBNEM7O0lBQzVDLDRDQUEwQzs7SUFDMUMscUNBVUU7Ozs7O0lBc0JBLGdEQUFzRTs7SUFDdEUseUNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgQmVoYXZpb3JTdWJqZWN0LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGF1ZGl0VGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgTnpEaXJlY3Rpb25WSElUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56TWVudVNlcnZpY2UgfSBmcm9tICcuL256LW1lbnUuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOelN1Ym1lbnVTZXJ2aWNlIHtcclxuICBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gIG1vZGU6IE56RGlyZWN0aW9uVkhJVHlwZSA9ICd2ZXJ0aWNhbCc7XHJcbiAgbW9kZSQgPSB0aGlzLm56TWVudVNlcnZpY2UubW9kZSQucGlwZShcclxuICAgIG1hcChtb2RlID0+IHtcclxuICAgICAgaWYgKG1vZGUgPT09ICdpbmxpbmUnKSB7XHJcbiAgICAgICAgcmV0dXJuICdpbmxpbmUnO1xyXG4gICAgICB9IGVsc2UgaWYgKG1vZGUgPT09ICd2ZXJ0aWNhbCcgfHwgdGhpcy5uekhvc3RTdWJtZW51U2VydmljZSkge1xyXG4gICAgICAgIHJldHVybiAndmVydGljYWwnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAnaG9yaXpvbnRhbCc7XHJcbiAgICAgIH1cclxuICAgIH0pLFxyXG4gICAgdGFwKG1vZGUgPT4gKHRoaXMubW9kZSA9IG1vZGUgYXMgTnpEaXJlY3Rpb25WSElUeXBlKSlcclxuICApO1xyXG4gIGxldmVsID0gMTtcclxuICBsZXZlbCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PG51bWJlcj4oMSk7XHJcbiAgc3ViTWVudU9wZW4kID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XHJcbiAgb3BlbiQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcclxuICBtb3VzZUVudGVyTGVhdmUkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcclxuICBtZW51T3BlbiQgPSBjb21iaW5lTGF0ZXN0KHRoaXMuc3ViTWVudU9wZW4kLCB0aGlzLm1vdXNlRW50ZXJMZWF2ZSQpLnBpcGUoXHJcbiAgICBtYXAodmFsdWUgPT4gdmFsdWVbMF0gfHwgdmFsdWVbMV0pLFxyXG4gICAgYXVkaXRUaW1lKDE1MCksXHJcbiAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxyXG4gICAgdGFwKGRhdGEgPT4ge1xyXG4gICAgICB0aGlzLnNldE9wZW5TdGF0ZShkYXRhKTtcclxuICAgICAgaWYgKHRoaXMubnpIb3N0U3VibWVudVNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLm56SG9zdFN1Ym1lbnVTZXJ2aWNlLnN1Yk1lbnVPcGVuJC5uZXh0KGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICk7XHJcblxyXG4gIHNldE9wZW5TdGF0ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5vcGVuJC5uZXh0KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIG9uTWVudUl0ZW1DbGljaygpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0TW91c2VFbnRlclN0YXRlKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIHNldExldmVsKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMubGV2ZWwkLm5leHQodmFsdWUpO1xyXG4gICAgdGhpcy5sZXZlbCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgc2V0TW91c2VFbnRlclN0YXRlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAoKHRoaXMubW9kZSA9PT0gJ2hvcml6b250YWwnIHx8IHRoaXMubW9kZSA9PT0gJ3ZlcnRpY2FsJyB8fCB0aGlzLm56TWVudVNlcnZpY2UuaXNJbkRyb3BEb3duKSAmJiAhdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLm1vdXNlRW50ZXJMZWF2ZSQubmV4dCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBTa2lwU2VsZigpIEBPcHRpb25hbCgpIHByaXZhdGUgbnpIb3N0U3VibWVudVNlcnZpY2U6IE56U3VibWVudVNlcnZpY2UsXHJcbiAgICBwdWJsaWMgbnpNZW51U2VydmljZTogTnpNZW51U2VydmljZVxyXG4gICkge1xyXG4gICAgaWYgKHRoaXMubnpIb3N0U3VibWVudVNlcnZpY2UpIHtcclxuICAgICAgdGhpcy5zZXRMZXZlbCh0aGlzLm56SG9zdFN1Ym1lbnVTZXJ2aWNlLmxldmVsICsgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==