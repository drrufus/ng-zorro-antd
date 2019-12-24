/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { TemplateRef, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { DEFAULT_TOOLTIP_POSITIONS, getPlacementName, isNotNil, POSITION_MAP, toBoolean } from 'ng-zorro-antd/core';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
const _c0 = ["overlay"];
export class NzTooltipBaseComponent {
    constructor(cdr, noAnimation) {
        this.cdr = cdr;
        this.noAnimation = noAnimation;
        this.nzVisibleChange = new Subject();
        this.nzOverlayStyle = {};
        this.nzMouseEnterDelay = 0.15;
        this.nzMouseLeaveDelay = 0.1;
        this._visible = false;
        this._trigger = 'hover';
        this.preferredPlacement = 'top';
        this._classMap = {};
        this._hasBackdrop = false;
        this._prefix = 'ant-tooltip-placement';
        this._positions = [...DEFAULT_TOOLTIP_POSITIONS];
    }
    set nzVisible(value) {
        const visible = toBoolean(value);
        if (this._visible !== visible) {
            this._visible = visible;
        }
    }
    get nzVisible() {
        return this._visible;
    }
    set nzTrigger(value) {
        this._trigger = value;
        this._hasBackdrop = this._trigger === 'click';
    }
    get nzTrigger() {
        return this._trigger;
    }
    set nzPlacement(value) {
        if (value !== this.preferredPlacement) {
            this.preferredPlacement = value;
            this._positions = [POSITION_MAP[this.nzPlacement], ...this._positions];
        }
    }
    get nzPlacement() {
        return this.preferredPlacement;
    }
    get content() {
        return this.nzContent !== undefined ? this.nzContent : this.nzContentTemplate;
    }
    get title() {
        return this.nzTitle !== undefined ? this.nzTitle : this.nzTitleTemplate;
    }
    ngOnDestroy() {
        this.nzVisibleChange.complete();
    }
    show() {
        if (this.nzVisible) {
            return;
        }
        if (!this.isEmpty()) {
            this.nzVisible = true;
            this.nzVisibleChange.next(true);
            this.cdr.detectChanges();
        }
    }
    hide() {
        if (!this.nzVisible) {
            return;
        }
        this.nzVisible = false;
        this.nzVisibleChange.next(false);
        this.cdr.detectChanges();
    }
    updateByDirective() {
        this.setClassMap();
        this.cdr.detectChanges();
        Promise.resolve().then(() => {
            this.updatePosition();
        });
    }
    /**
     * Force the component to update its position.
     */
    updatePosition() {
        if (this.origin && this.overlay && this.overlay.overlayRef) {
            this.overlay.overlayRef.updatePosition();
        }
    }
    onPositionChange(position) {
        this.preferredPlacement = getPlacementName(position);
        this.setClassMap();
        this.cdr.detectChanges();
    }
    setClassMap() {
        this._classMap = {
            [this.nzOverlayClassName]: true,
            [`${this._prefix}-${this.preferredPlacement}`]: true
        };
    }
    setOverlayOrigin(origin) {
        this.origin = origin;
        this.cdr.markForCheck();
    }
}
/** @nocollapse */ NzTooltipBaseComponent.ɵfac = function NzTooltipBaseComponent_Factory(t) { return new (t || NzTooltipBaseComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.NzNoAnimationDirective)); };
/** @nocollapse */ NzTooltipBaseComponent.ɵdir = i0.ɵɵdefineDirective({ type: NzTooltipBaseComponent, viewQuery: function NzTooltipBaseComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.overlay = _t.first);
    } } });
export function isTooltipEmpty(value) {
    return value instanceof TemplateRef ? false : value === '' || !isNotNil(value);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdG9vbHRpcC1iYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdG9vbHRpcC8iLCJzb3VyY2VzIjpbIm56LXRvb2x0aXAtYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLG1CQUFtQixFQUE0RSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JJLE9BQU8sRUFBZ0MsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLE9BQU8sRUFDTCx5QkFBeUIsRUFDekIsZ0JBQWdCLEVBQ2hCLFFBQVEsRUFLUixZQUFZLEVBQ1osU0FBUyxFQUNWLE1BQU0sb0JBQW9CLENBQUM7Ozs7QUFJNUIsTUFBTSxPQUFnQixzQkFBc0I7SUFnRTFDLFlBQW1CLEdBQXNCLEVBQVMsV0FBb0M7UUFBbkUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUE3RHRGLG9CQUFlLEdBQUcsSUFBSSxPQUFPLEVBQVcsQ0FBQztRQUl6QyxtQkFBYyxHQUFxQixFQUFFLENBQUM7UUFDdEMsc0JBQWlCLEdBQVcsSUFBSSxDQUFDO1FBQ2pDLHNCQUFpQixHQUFXLEdBQUcsQ0FBQztRQWFoQyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBV1AsYUFBUSxHQUFxQixPQUFPLENBQUM7UUFnQi9DLHVCQUFrQixHQUFHLEtBQUssQ0FBQztRQUUzQixjQUFTLEdBQXFCLEVBQUUsQ0FBQztRQUNqQyxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixZQUFPLEdBQUcsdUJBQXVCLENBQUM7UUFDbEMsZUFBVSxHQUE2QixDQUFDLEdBQUcseUJBQXlCLENBQUMsQ0FBQztJQVVtQixDQUFDO0lBckQxRixJQUFJLFNBQVMsQ0FBQyxLQUFjO1FBQzFCLE1BQU0sT0FBTyxHQUFH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R0FBRyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUUsQ0FBQztRQUN0RCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxTQUFTLEdBQUc7WUFDZixDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLElBQUk7WUFDL0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMsRUFBRSxJQUFJO1NBQ3JELENBQUM7SUFDSixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsTUFBd0I7UUFDdkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs0RkE5SG1CLHNCQUFzQjsyREFBdEIsc0JBQXNCOzs7Ozs7QUFzSTVDLE1BQU0sVUFBVSxjQUFjLENBQUMsS0FBd0M7SUFDckUsT0FBTyxLQUFLLFlBQVksV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDakYsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ2RrQ29ubmVjdGVkT3ZlcmxheSwgQ2RrT3ZlcmxheU9yaWdpbiwgQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlLCBDb25uZWN0aW9uUG9zaXRpb25QYWlyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgT25EZXN0cm95LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgREVGQVVMVF9UT09MVElQX1BPU0lUSU9OUyxcclxuICBnZXRQbGFjZW1lbnROYW1lLFxyXG4gIGlzTm90TmlsLFxyXG4gIE5nQ2xhc3NJbnRlcmZhY2UsXHJcbiAgTmdTdHlsZUludGVyZmFjZSxcclxuICBOek5vQW5pbWF0aW9uRGlyZWN0aXZlLFxyXG4gIE56VFNUeXBlLFxyXG4gIFBPU0lUSU9OX01BUCxcclxuICB0b0Jvb2xlYW5cclxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpUb29sdGlwVHJpZ2dlciB9IGZyb20gJy4vbnotdG9vbHRpcC5kZWZpbml0aW9ucyc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTnpUb29sdGlwQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgQFZpZXdDaGlsZCgnb3ZlcmxheScsIHsgc3RhdGljOiBmYWxzZSB9KSBvdmVybGF5OiBDZGtDb25uZWN0ZWRPdmVybGF5O1xyXG5cclxuICBuelZpc2libGVDaGFuZ2UgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG4gIG56VGl0bGU6IE56VFNUeXBlIHwgbnVsbDtcclxuICBuekNvbnRlbnQ6IE56VFNUeXBlIHwgbnVsbDtcclxuICBuek92ZXJsYXlDbGFzc05hbWU6IHN0cmluZztcclxuICBuek92ZXJsYXlTdHlsZTogTmdTdHlsZUludGVyZmFjZSA9IHt9O1xyXG4gIG56TW91c2VFbnRlckRlbGF5OiBudW1iZXIgPSAwLjE1O1xyXG4gIG56TW91c2VMZWF2ZURlbGF5OiBudW1iZXIgPSAwLjE7XHJcblxyXG4gIHNldCBuelZpc2libGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIGNvbnN0IHZpc2libGUgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gICAgaWYgKHRoaXMuX3Zpc2libGUgIT09IHZpc2libGUpIHtcclxuICAgICAgdGhpcy5fdmlzaWJsZSA9IHZpc2libGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbnpWaXNpYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Zpc2libGU7XHJcbiAgfVxyXG5cclxuICBfdmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICBzZXQgbnpUcmlnZ2VyKHZhbHVlOiBOelRvb2x0aXBUcmlnZ2VyKSB7XHJcbiAgICB0aGlzLl90cmlnZ2VyID0gdmFsdWU7XHJcbiAgICB0aGlzLl9oYXNCYWNrZHJvcCA9IHRoaXMuX3RyaWdnZXIgPT09ICdjbGljayc7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpUcmlnZ2VyKCk6IE56VG9vbHRpcFRyaWdnZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RyaWdnZXI7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgX3RyaWdnZXI6IE56VG9vbHRpcFRyaWdnZXIgPSAnaG92ZXInO1xyXG5cclxuICBzZXQgbnpQbGFjZW1lbnQodmFsdWU6IHN0cmluZykge1xyXG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLnByZWZlcnJlZFBsYWNlbWVudCkge1xyXG4gICAgICB0aGlzLnByZWZlcnJlZFBsYWNlbWVudCA9IHZhbHVlO1xyXG4gICAgICB0aGlzLl9wb3NpdGlvbnMgPSBbUE9TSVRJT05fTUFQW3RoaXMubnpQbGFjZW1lbnRdLCAuLi50aGlzLl9wb3NpdGlvbnNdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG56UGxhY2VtZW50KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5wcmVmZXJyZWRQbGFjZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBuekNvbnRlbnRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgbnpUaXRsZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBvcmlnaW46IENka092ZXJsYXlPcmlnaW47XHJcbiAgcHJlZmVycmVkUGxhY2VtZW50ID0gJ3RvcCc7XHJcblxyXG4gIF9jbGFzc01hcDogTmdDbGFzc0ludGVyZmFjZSA9IHt9O1xyXG4gIF9oYXNCYWNrZHJvcCA9IGZhbHNlO1xyXG4gIF9wcmVmaXggPSAnYW50LXRvb2x0aXAtcGxhY2VtZW50JztcclxuICBfcG9zaXRpb25zOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyW10gPSBbLi4uREVGQVVMVF9UT09MVElQX1BPU0lUSU9OU107XHJcblxyXG4gIGdldCBjb250ZW50KCk6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5uekNvbnRlbnQgIT09IHVuZGVmaW5lZCA/IHRoaXMubnpDb250ZW50IDogdGhpcy5uekNvbnRlbnRUZW1wbGF0ZTtcclxuICB9XHJcblxyXG4gIGdldCB0aXRsZSgpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMubnpUaXRsZSAhPT0gdW5kZWZpbmVkID8gdGhpcy5uelRpdGxlIDogdGhpcy5uelRpdGxlVGVtcGxhdGU7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSkge31cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLm56VmlzaWJsZUNoYW5nZS5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgc2hvdygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56VmlzaWJsZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLmlzRW1wdHkoKSkge1xyXG4gICAgICB0aGlzLm56VmlzaWJsZSA9IHRydWU7XHJcbiAgICAgIHRoaXMubnpWaXNpYmxlQ2hhbmdlLm5leHQodHJ1ZSk7XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhpZGUoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMubnpWaXNpYmxlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm56VmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5uelZpc2libGVDaGFuZ2UubmV4dChmYWxzZSk7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVCeURpcmVjdGl2ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuXHJcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcclxuICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGb3JjZSB0aGUgY29tcG9uZW50IHRvIHVwZGF0ZSBpdHMgcG9zaXRpb24uXHJcbiAgICovXHJcbiAgdXBkYXRlUG9zaXRpb24oKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5vcmlnaW4gJiYgdGhpcy5vdmVybGF5ICYmIHRoaXMub3ZlcmxheS5vdmVybGF5UmVmKSB7XHJcbiAgICAgIHRoaXMub3ZlcmxheS5vdmVybGF5UmVmLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblBvc2l0aW9uQ2hhbmdlKHBvc2l0aW9uOiBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UpOiB2b2lkIHtcclxuICAgIHRoaXMucHJlZmVycmVkUGxhY2VtZW50ID0gZ2V0UGxhY2VtZW50TmFtZShwb3NpdGlvbikhO1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9jbGFzc01hcCA9IHtcclxuICAgICAgW3RoaXMubnpPdmVybGF5Q2xhc3NOYW1lXTogdHJ1ZSxcclxuICAgICAgW2Ake3RoaXMuX3ByZWZpeH0tJHt0aGlzLnByZWZlcnJlZFBsYWNlbWVudH1gXTogdHJ1ZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHNldE92ZXJsYXlPcmlnaW4ob3JpZ2luOiBDZGtPdmVybGF5T3JpZ2luKTogdm9pZCB7XHJcbiAgICB0aGlzLm9yaWdpbiA9IG9yaWdpbjtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRW1wdHkgdG9vbHRpcCBjYW5ub3QgYmUgb3Blbm5lZC5cclxuICAgKi9cclxuICBwcm90ZWN0ZWQgYWJzdHJhY3QgaXNFbXB0eSgpOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNUb29sdGlwRW1wdHkodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbCk6IGJvb2xlYW4ge1xyXG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmID8gZmFsc2UgOiB2YWx1ZSA9PT0gJycgfHwgIWlzTm90TmlsKHZhbHVlKTtcclxufVxyXG4iXX0=