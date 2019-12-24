/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Injectable, Optional, SkipSelf } from '@angular/core';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { auditTime, distinctUntilChanged, map, tap } from 'rxjs/operators';
import { NzMenuService } from './nz-menu.service';
import * as i0 from "@angular/core";
import * as i1 from "./nz-menu.service";
var NzSubmenuService = /** @class */ (function () {
    function NzSubmenuService(nzHostSubmenuService, nzMenuService) {
        var _this = this;
        this.nzHostSubmenuService = nzHostSubmenuService;
        this.nzMenuService = nzMenuService;
        this.disabled = false;
        this.mode = 'vertical';
        this.mode$ = this.nzMenuService.mode$.pipe(map(function (mode) {
            if (mode === 'inline') {
                return 'inline';
            }
            else if (mode === 'vertical' || _this.nzHostSubmenuService) {
                return 'vertical';
            }
            else {
                return 'horizontal';
            }
        }), tap(function (mode) { return (_this.mode = mode); }));
        this.level = 1;
        this.level$ = new BehaviorSubject(1);
        this.subMenuOpen$ = new BehaviorSubject(false);
        this.open$ = new BehaviorSubject(false);
        this.mouseEnterLeave$ = new Subject();
        this.menuOpen$ = combineLatest(this.subMenuOpen$, this.mouseEnterLeave$).pipe(map(function (value) { return value[0] || value[1]; }), auditTime(150), distinctUntilChanged(), tap(function (data) {
            _this.setOpenState(data);
            if (_this.nzHostSubmenuService) {
                _this.nzHostSubmenuService.subMenuOpen$.next(data);
            }
        }));
        if (this.nzHostSubmenuService) {
            this.setLevel(this.nzHostSubmenuService.level + 1);
        }
    }
    NzSubmenuService.prototype.setOpenState = function (value) {
        this.open$.next(value);
    };
    NzSubmenuService.prototype.onMenuItemClick = function () {
        this.setMouseEnterState(false);
    };
    NzSubmenuService.prototype.setLevel = function (value) {
        this.level$.next(value);
        this.level = value;
    };
    NzSubmenuService.prototype.setMouseEnterState = function (value) {
        if ((this.mode === 'horizontal' || this.mode === 'vertical' || this.nzMenuService.isInDropDown) && !this.disabled) {
            this.mouseEnterLeave$.next(value);
        }
    };
    /** @nocollapse */ NzSubmenuService.ɵfac = function NzSubmenuService_Factory(t) { return new (t || NzSubmenuService)(i0.ɵɵinject(NzSubmenuService, 12), i0.ɵɵinject(i1.NzMenuService)); };
    /** @nocollapse */ NzSubmenuService.ɵprov = i0.ɵɵdefineInjectable({ token: NzSubmenuService, factory: NzSubmenuService.ɵfac });
    return NzSubmenuService;
}());
export { NzSubmenuService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzSubmenuService, [{
        type: Injectable
    }], function () { return [{ type: NzSubmenuService, decorators: [{
                type: SkipSelf
            }, {
                type: Optional
            }] }, { type: i1.NzMenuService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3VibWVudS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9tZW51LyIsInNvdXJjZXMiOlsibnotc3VibWVudS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJM0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7QUFFbEQ7SUFvREUsMEJBQTRDLG9CQUFzQyxFQUFTLGFBQTRCO1FBQXZILGlCQUlDO1FBSjJDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBa0I7UUFBUyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQWxEdkgsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixTQUFJLEdBQXVCLFVBQVUsQ0FBQztRQUN0QyxVQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNuQyxHQUFHLENBQUMsVUFBQSxJQUFJO1lBQ04sSUFBSSxJQUFJLEtBQUssUUFBUSxFQUFFO2dCQUNyQixPQUFPLFFBQVEsQ0FBQzthQUNqQjtpQkFBTSxJQUFJLElBQUksS0FBSyxVQUFVLElBQUksS0FBSSxDQUFDLG9CQUFvQixFQUFFO2dCQUMzRCxPQUFPLFVBQVUsQ0FBQzthQUNuQjtpQkFBTTtnQkFDTCxPQUFPLFlBQVksQ0FBQzthQUNyQjtRQUNILENBQUMsQ0FBQyxFQUNGLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLENBQUMsS0FBSSxDQUFDLElBQUksR0FBRyxJQUEwQixDQUFDLEVBQXhDLENBQXdDLENBQUMsQ0FDdEQsQ0FBQztRQUNGLFVBQUssR0FBRyxDQUFDLENBQUM7UUFDVixXQUFNLEdBQUcsSUFBSSxlQUFlLENBQVMsQ0FBQyxDQUFDLENBQUM7UUFDeEMsaUJBQVksR0FBRyxJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUNuRCxVQUFLLEdBQUcsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7UUFDNUMscUJBQWdCLEdBQUcsSUFBSSxPQUFPLEVBQVcsQ0FBQztRQUMxQyxjQUFTLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsSUFBSSxDQUN0RSxHQUFHLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFwQixDQUFvQixDQUFDLEVBQ2xDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFDZCxvQkFBb0IsRUFBRSxFQUN0QixHQUFHLENBQUMsVUFBQSxJQUFJO1lBQ04sS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4QixJQUFJLEtBQUksQ0FBQyxvQkFBb0IsRUFBRTtnQkFDN0IsS0FBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbkQ7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO1FBc0JBLElBQUksSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNwRDtJQUNILENBQUM7SUF2QkQsdUNBQVksR0FBWixVQUFhLEtBQWM7UUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELDBDQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELG1DQUFRLEdBQVIsVUFBUyxLQUFhO1FBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCw2Q0FBa0IsR0FBbEIsVUFBbUIsS0FBYztRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxZQUFZLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxVQUFVLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakgsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQztJQUNILENBQUM7b0ZBakRVLGdCQUFnQixjQW1EdUMsZ0JBQWdCOzREQW5EdkUsZ0JBQWdCLFdBQWhCLGdCQUFnQjsyQkFqQjdCO0NBeUVDLEFBekRELElBeURDO1NBeERZLGdCQUFnQjtrREFBaEIsZ0JBQWdCO2NBRDVCLFVBQVU7c0NBb0R5RCxnQkFBZ0I7c0JBQXJFLFFBQVE7O3NCQUFJLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIGNvbWJpbmVMYXRlc3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgYXVkaXRUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBOekRpcmVjdGlvblZISVR5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpNZW51U2VydmljZSB9IGZyb20gJy4vbnotbWVudS5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE56U3VibWVudVNlcnZpY2Uge1xyXG4gIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgbW9kZTogTnpEaXJlY3Rpb25WSElUeXBlID0gJ3ZlcnRpY2FsJztcclxuICBtb2RlJCA9IHRoaXMubnpNZW51U2VydmljZS5tb2RlJC5waXBlKFxyXG4gICAgbWFwKG1vZGUgPT4ge1xyXG4gICAgICBpZiAobW9kZSA9PT0gJ2lubGluZScpIHtcclxuICAgICAgICByZXR1cm4gJ2lubGluZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gJ3ZlcnRpY2FsJyB8fCB0aGlzLm56SG9zdFN1Ym1lbnVTZXJ2aWNlKSB7XHJcbiAgICAgICAgcmV0dXJuICd2ZXJ0aWNhbCc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuICdob3Jpem9udGFsJztcclxuICAgICAgfVxyXG4gICAgfSksXHJcbiAgICB0YXAobW9kZSA9PiAodGhpcy5tb2RlID0gbW9kZSBhcyBOekRpcmVjdGlvblZISVR5cGUpKVxyXG4gICk7XHJcbiAgbGV2ZWwgPSAxO1xyXG4gIGxldmVsJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPigxKTtcclxuICBzdWJNZW51T3BlbiQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcclxuICBvcGVuJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIG1vdXNlRW50ZXJMZWF2ZSQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG4gIG1lbnVPcGVuJCA9IGNvbWJpbmVMYXRlc3QodGhpcy5zdWJNZW51T3BlbiQsIHRoaXMubW91c2VFbnRlckxlYXZlJCkucGlwZShcclxuICAgIG1hcCh2YWx1ZSA9PiB2YWx1ZVswXSB8fCB2YWx1ZVsxXSksXHJcbiAgICBhdWRpdFRpbWUoMTUwKSxcclxuICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXHJcbiAgICB0YXAoZGF0YSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0T3BlblN0YXRlKGRhdGEpO1xyXG4gICAgICBpZiAodGhpcy5uekhvc3RTdWJtZW51U2VydmljZSkge1xyXG4gICAgICAgIHRoaXMubnpIb3N0U3VibWVudVNlcnZpY2Uuc3ViTWVudU9wZW4kLm5leHQoZGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgKTtcclxuXHJcbiAgc2V0T3BlblN0YXRlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLm9wZW4kLm5leHQodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgb25NZW51SXRlbUNsaWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRNb3VzZUVudGVyU3RhdGUoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgc2V0TGV2ZWwodmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5sZXZlbCQubmV4dCh2YWx1ZSk7XHJcbiAgICB0aGlzLmxldmVsID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBzZXRNb3VzZUVudGVyU3RhdGUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmICgodGhpcy5tb2RlID09PSAnaG9yaXpvbnRhbCcgfHwgdGhpcy5tb2RlID09PSAndmVydGljYWwnIHx8IHRoaXMubnpNZW51U2VydmljZS5pc0luRHJvcERvd24pICYmICF0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMubW91c2VFbnRlckxlYXZlJC5uZXh0KHZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBTa2lwU2VsZigpIEBPcHRpb25hbCgpIHByaXZhdGUgbnpIb3N0U3VibWVudVNlcnZpY2U6IE56U3VibWVudVNlcnZpY2UsIHB1YmxpYyBuek1lbnVTZXJ2aWNlOiBOek1lbnVTZXJ2aWNlKSB7XHJcbiAgICBpZiAodGhpcy5uekhvc3RTdWJtZW51U2VydmljZSkge1xyXG4gICAgICB0aGlzLnNldExldmVsKHRoaXMubnpIb3N0U3VibWVudVNlcnZpY2UubGV2ZWwgKyAxKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19