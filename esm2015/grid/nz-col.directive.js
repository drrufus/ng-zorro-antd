/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, ElementRef, Host, Input, Optional, Renderer2 } from '@angular/core';
import { isNotNil, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import { NzRowDirective } from './nz-row.directive';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
import * as i2 from "./nz-row.directive";
export class NzColDirective {
    constructor(nzUpdateHostClassService, elementRef, nzRowDirective, renderer) {
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.elementRef = elementRef;
        this.nzRowDirective = nzRowDirective;
        this.renderer = renderer;
        this.el = this.elementRef.nativeElement;
        this.prefixCls = 'ant-col';
        this.destroy$ = new Subject();
    }
    /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289*/
    setClassMap() {
        const classMap = Object.assign({ [`${this.prefixCls}`]: true, [`${this.prefixCls}-${this.nzSpan}`]: isNotNil(this.nzSpan), [`${this.prefixCls}-order-${this.nzOrder}`]: isNotNil(this.nzOrder), [`${this.prefixCls}-offset-${this.nzOffset}`]: isNotNil(this.nzOffset), [`${this.prefixCls}-pull-${this.nzPull}`]: isNotNil(this.nzPull), [`${this.prefixCls}-push-${this.nzPush}`]: isNotNil(this.nzPush) }, this.generateClass());
        this.nzUpdateHostClassService.updateHostClass(this.el, classMap);
    }
    generateClass() {
        const listOfSizeInputName = ['nzXs', 'nzSm', 'nzMd', 'nzLg', 'nzXl', 'nzXXl'];
        const listClassMap = {};
        listOfSizeInputName.forEach(name => {
            const sizeName = name.replace('nz', '').toLowerCase();
            if (isNotNil(this[name])) {
                if (typeof this[name] === 'number' || typeof this[name] === 'string') {
                    listClassMap[`${this.prefixCls}-${sizeName}-${this[name]}`] = true;
                }
                else {
                    const embedded = this[name];
                    const prefixArray = ['span', 'pull', 'push', 'offset', 'order'];
                    prefixArray.forEach(prefix => {
                        const prefixClass = prefix === 'span' ? '-' : `-${prefix}-`;
                        listClassMap[`${this.prefixCls}-${sizeName}${prefixClass}${embedded[prefix]}`] = embedded && isNotNil(embedded[prefix]);
                    });
                }
            }
        });
        return listClassMap;
    }
    ngOnChanges() {
        this.setClassMap();
    }
    ngAfterViewInit() {
        if (this.nzRowDirective) {
            this.nzRowDirective.actualGutter$
                .pipe(startWith(this.nzRowDirective.actualGutter), takeUntil(this.destroy$))
                .subscribe(actualGutter => {
                this.renderer.setStyle(this.el, 'padding-left', `${actualGutter / 2}px`);
                this.renderer.setStyle(this.el, 'padding-right', `${actualGutter / 2}px`);
            });
        }
    }
    ngOnInit() {
        this.setClassMap();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
/** @nocollapse */ NzColDirective.ɵfac = function NzColDirective_Factory(t) { return new (t || NzColDirective)(i0.ɵɵdirectiveInject(i1.NzUpdateHostClassService), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i2.NzRowDirective, 9), i0.ɵɵdirectiveInject(i0.Renderer2)); };
/** @nocollapse */ NzColDirective.ɵdir = i0.ɵɵdefineDirective({ type: NzColDirective, selectors: [["", "nz-col", ""], ["nz-col"]], inputs: { nzSpan: "nzSpan", nzOrder: "nzOrder", nzOffset: "nzOffset", nzPush: "nzPush", nzPull: "nzPull", nzXs: "nzXs", nzSm: "nzSm", nzMd: "nzMd", nzLg: "nzLg", nzXl: "nzXl", nzXXl: "nzXXl" }, exportAs: ["nzCol"], features: [i0.ɵɵProvidersFeature([NzUpdateHostClassService]), i0.ɵɵNgOnChangesFeature()] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzColDirective, [{
        type: Directive,
        args: [{
                selector: '[nz-col],nz-col',
                exportAs: 'nzCol',
                providers: [NzUpdateHostClassService]
            }]
    }], function () { return [{ type: i1.NzUpdateHostClassService }, { type: i0.ElementRef }, { type: i2.NzRowDirective, decorators: [{
                type: Optional
            }, {
                type: Host
            }] }, { type: i0.Renderer2 }]; }, { nzSpan: [{
            type: Input
        }], nzOrder: [{
            type: Input
        }], nzOffset: [{
            type: Input
        }], nzPush: [{
            type: Input
        }], nzPull: [{
            type: Input
        }], nzXs: [{
            type: Input
        }], nzSm: [{
            type: Input
        }], nzMd: [{
            type: Input
        }], nzLg: [{
            type: Input
        }], nzXl: [{
            type: Input
        }], nzXXl: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29sLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZ3JpZC8iLCJzb3VyY2VzIjpbIm56LWNvbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQWdDLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckksT0FBTyxFQUFFLFFBQVEsRUFBb0Isd0JBQXdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMxRixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBZXBELE1BQU0sT0FBTyxjQUFjO0lBb0R6QixZQUNVLHdCQUFrRCxFQUNsRCxVQUFzQixFQUNILGNBQThCLEVBQ2xELFFBQW1CO1FBSGxCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNILG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUNsRCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBdkRwQixPQUFFLEdBQWdCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQ2hELGNBQVMsR0FBRyxTQUFTLENBQUM7UUFDcEIsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7SUFzRGhDLENBQUM7SUF4Q0osdUdBQXVHO0lBQ3ZHLFdBQVc7UUFDVCxNQUFNLFFBQVEsbUJBQ1osQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFDM0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFD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QUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLGNBQWMsRUFBRSxHQUFHLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN6RSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLGVBQWUsRUFBRSxHQUFHLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzVFLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDSCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs0RUFqRlUsY0FBYzttREFBZCxjQUFjLHVTQUZkLENBQUMsd0JBQXdCLENBQUM7a0RBRTFCLGNBQWM7Y0FMMUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRSxPQUFPO2dCQUNqQixTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQzthQUN0Qzs7c0JBd0RJLFFBQVE7O3NCQUFJLElBQUk7O2tCQWxEbEIsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3B0aW9uYWwsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc05vdE5pbCwgTmdDbGFzc0ludGVyZmFjZSwgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBzdGFydFdpdGgsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgTnpSb3dEaXJlY3RpdmUgfSBmcm9tICcuL256LXJvdy5kaXJlY3RpdmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFbWJlZGRlZFByb3BlcnR5IHtcclxuICBzcGFuPzogbnVtYmVyO1xyXG4gIHB1bGw/OiBudW1iZXI7XHJcbiAgcHVzaD86IG51bWJlcjtcclxuICBvZmZzZXQ/OiBudW1iZXI7XHJcbiAgb3JkZXI/OiBudW1iZXI7XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW256LWNvbF0sbnotY29sJyxcclxuICBleHBvcnRBczogJ256Q29sJyxcclxuICBwcm92aWRlcnM6IFtOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekNvbERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgZWw6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBwcmVmaXhDbHMgPSAnYW50LWNvbCc7XHJcbiAgcHJvdGVjdGVkIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgQElucHV0KCkgbnpTcGFuOiBudW1iZXI7XHJcbiAgQElucHV0KCkgbnpPcmRlcjogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIG56T2Zmc2V0OiBudW1iZXI7XHJcbiAgQElucHV0KCkgbnpQdXNoOiBudW1iZXI7XHJcbiAgQElucHV0KCkgbnpQdWxsOiBudW1iZXI7XHJcbiAgQElucHV0KCkgbnpYczogbnVtYmVyIHwgRW1iZWRkZWRQcm9wZXJ0eTtcclxuICBASW5wdXQoKSBuelNtOiBudW1iZXIgfCBFbWJlZGRlZFByb3BlcnR5O1xyXG4gIEBJbnB1dCgpIG56TWQ6IG51bWJlciB8IEVtYmVkZGVkUHJvcGVydHk7XHJcbiAgQElucHV0KCkgbnpMZzogbnVtYmVyIHwgRW1iZWRkZWRQcm9wZXJ0eTtcclxuICBASW5wdXQoKSBuelhsOiBudW1iZXIgfCBFbWJlZGRlZFByb3BlcnR5O1xyXG4gIEBJbnB1dCgpIG56WFhsOiBudW1iZXIgfCBFbWJlZGRlZFByb3BlcnR5O1xyXG5cclxuICAvKiogdGVtcCBzb2x1dGlvbiBzaW5jZSBubyBtZXRob2QgYWRkIGNsYXNzTWFwIHRvIGhvc3QgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvNzI4OSovXHJcbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICBjb25zdCBjbGFzc01hcCA9IHtcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfWBdOiB0cnVlLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LSR7dGhpcy5uelNwYW59YF06IGlzTm90TmlsKHRoaXMubnpTcGFuKSxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1vcmRlci0ke3RoaXMubnpPcmRlcn1gXTogaXNOb3ROaWwodGhpcy5uek9yZGVyKSxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1vZmZzZXQtJHt0aGlzLm56T2Zmc2V0fWBdOiBpc05vdE5pbCh0aGlzLm56T2Zmc2V0KSxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1wdWxsLSR7dGhpcy5uelB1bGx9YF06IGlzTm90TmlsKHRoaXMubnpQdWxsKSxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1wdXNoLSR7dGhpcy5uelB1c2h9YF06IGlzTm90TmlsKHRoaXMubnpQdXNoKSxcclxuICAgICAgLi4udGhpcy5nZW5lcmF0ZUNsYXNzKClcclxuICAgIH07XHJcbiAgICB0aGlzLm56VXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbCwgY2xhc3NNYXApO1xyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVDbGFzcygpOiBvYmplY3Qge1xyXG4gICAgY29uc3QgbGlzdE9mU2l6ZUlucHV0TmFtZTogQXJyYXk8a2V5b2YgTnpDb2xEaXJlY3RpdmU+ID0gWyduelhzJywgJ256U20nLCAnbnpNZCcsICduekxnJywgJ256WGwnLCAnbnpYWGwnXTtcclxuICAgIGNvbnN0IGxpc3RDbGFzc01hcDogTmdDbGFzc0ludGVyZmFjZSA9IHt9O1xyXG4gICAgbGlzdE9mU2l6ZUlucHV0TmFtZS5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgICBjb25zdCBzaXplTmFtZSA9IG5hbWUucmVwbGFjZSgnbnonLCAnJykudG9Mb3dlckNhc2UoKTtcclxuICAgICAgaWYgKGlzTm90TmlsKHRoaXNbbmFtZV0pKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzW25hbWVdID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgdGhpc1tuYW1lXSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgIGxpc3RDbGFzc01hcFtgJHt0aGlzLnByZWZpeENsc30tJHtzaXplTmFtZX0tJHt0aGlzW25hbWVdfWBdID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgZW1iZWRkZWQgPSB0aGlzW25hbWVdIGFzIEVtYmVkZGVkUHJvcGVydHk7XHJcbiAgICAgICAgICBjb25zdCBwcmVmaXhBcnJheTogQXJyYXk8a2V5b2YgRW1iZWRkZWRQcm9wZXJ0eT4gPSBbJ3NwYW4nLCAncHVsbCcsICdwdXNoJywgJ29mZnNldCcsICdvcmRlciddO1xyXG4gICAgICAgICAgcHJlZml4QXJyYXkuZm9yRWFjaChwcmVmaXggPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcmVmaXhDbGFzcyA9IHByZWZpeCA9PT0gJ3NwYW4nID8gJy0nIDogYC0ke3ByZWZpeH0tYDtcclxuICAgICAgICAgICAgbGlzdENsYXNzTWFwW2Ake3RoaXMucHJlZml4Q2xzfS0ke3NpemVOYW1lfSR7cHJlZml4Q2xhc3N9JHtlbWJlZGRlZFtwcmVmaXhdfWBdID0gZW1iZWRkZWQgJiYgaXNOb3ROaWwoZW1iZWRkZWRbcHJlZml4XSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGxpc3RDbGFzc01hcDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSxcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIEBPcHRpb25hbCgpIEBIb3N0KCkgcHVibGljIG56Um93RGlyZWN0aXZlOiBOelJvd0RpcmVjdGl2ZSxcclxuICAgIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56Um93RGlyZWN0aXZlKSB7XHJcbiAgICAgIHRoaXMubnpSb3dEaXJlY3RpdmUuYWN0dWFsR3V0dGVyJFxyXG4gICAgICAgIC5waXBlKHN0YXJ0V2l0aCh0aGlzLm56Um93RGlyZWN0aXZlLmFjdHVhbEd1dHRlciksIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgICAuc3Vic2NyaWJlKGFjdHVhbEd1dHRlciA9PiB7XHJcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICdwYWRkaW5nLWxlZnQnLCBgJHthY3R1YWxHdXR0ZXIgLyAyfXB4YCk7XHJcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICdwYWRkaW5nLXJpZ2h0JywgYCR7YWN0dWFsR3V0dGVyIC8gMn1weGApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=