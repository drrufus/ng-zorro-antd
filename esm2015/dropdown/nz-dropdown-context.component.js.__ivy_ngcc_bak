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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { slideMotion } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzMenuDropdownService } from './nz-menu-dropdown.service';
/**
 * @deprecated Use `NzDropdownMenuComponent` instead, will remove in 9.0.0.
 */
export class NzDropdownContextComponent {
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
        this.cdr = cdr;
        this.open = true;
        this.dropDownPosition = 'bottom';
        this.destroy$ = new Subject();
    }
    /**
     * @param {?} open
     * @param {?} templateRef
     * @param {?} positionChanges
     * @param {?} control
     * @return {?}
     */
    init(open, templateRef, positionChanges, control) {
        this.open = open;
        this.templateRef = templateRef;
        this.control = control;
        positionChanges.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.dropDownPosition = data.connectionPair.overlayY === 'bottom' ? 'top' : 'bottom';
            this.cdr.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    close() {
        this.open = false;
        this.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    afterAnimation() {
        if (!this.open) {
            this.control.dispose();
        }
    }
    // TODO auto set dropdown class after the bug resolved
    /**
     * https://github.com/angular/angular/issues/14842 *
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzDropdownContextComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-dropdown-context',
                exportAs: 'nzDropdownContext',
                animations: [slideMotion],
                preserveWhitespaces: false,
                template: "<div *ngIf=\"open\"\r\n  class=\"ant-dropdown ant-dropdown-placement-bottomLeft\"\r\n  [@slideMotion]=\"dropDownPosition\"\r\n  (@slideMotion.done)=\"afterAnimation()\">\r\n  <ng-template [ngTemplateOutlet]=\"templateRef\"></ng-template>\r\n</div>",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [NzMenuDropdownService],
                styles: [`
      nz-dropdown-context {
        display: block;
      }

      .ant-dropdown {
        top: 100%;
        left: 0;
        position: relative;
        width: 100%;
        margin-top: 4px;
        margin-bottom: 4px;
      }
    `]
            }] }
];
/** @nocollapse */
NzDropdownContextComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
if (false) {
    /** @type {?} */
    NzDropdownContextComponent.prototype.open;
    /** @type {?} */
    NzDropdownContextComponent.prototype.templateRef;
    /** @type {?} */
    NzDropdownContextComponent.prototype.dropDownPosition;
    /**
     * @type {?}
     * @private
     */
    NzDropdownContextComponent.prototype.control;
    /**
     * @type {?}
     * @private
     */
    NzDropdownContextComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzDropdownContextComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJvcGRvd24tY29udGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2Ryb3Bkb3duLyIsInNvdXJjZXMiOlsibnotZHJvcGRvd24tY29udGV4dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFTQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBR1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNqRCxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQTRCbkU7O0dBRUc7QUFDSCxNQUFNLE9BQU8sMEJBQTBCOzs7O0lBaUNyQyxZQUFvQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQWhDMUMsU0FBSSxHQUFHLElBQUksQ0FBQztRQUVaLHFCQUFnQixHQUFxQixRQUFRLENBQUM7UUFFdEMsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7SUE0QlksQ0FBQzs7Ozs7Ozs7SUExQjlDLElBQUksQ0FDRixJQUFhLEVBQ2IsV0FBOEIsRUFDOUIsZUFBMkQsRUFDM0QsT0FBMEI7UUFFMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUzs7OztRQUFDLElBQUksQ0FBQyxFQUFFO1lBQzlELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQ3JGLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELGNBQWM7UUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDOzs7Ozs7SUFNRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7OztZQXJFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsVUFBVSxFQUFFLENBQUMsV0FBVyxDQUFDO2dCQUN6QixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixtUUFBbUQ7Z0JBQ25ELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7eUJBRWhDOzs7Ozs7Ozs7Ozs7O0tBYUM7YUFFSjs7OztZQXJDQyxpQkFBaUI7Ozs7SUEwQ2pCLDBDQUFZOztJQUNaLGlEQUErQjs7SUFDL0Isc0RBQThDOzs7OztJQUM5Qyw2Q0FBbUM7Ozs7O0lBQ25DLDhDQUFpQzs7Ozs7SUE0QnJCLHlDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgc2xpZGVNb3Rpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgTnpEcm9wZG93blNlcnZpY2UgfSBmcm9tICcuL256LWRyb3Bkb3duLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOek1lbnVEcm9wZG93blNlcnZpY2UgfSBmcm9tICcuL256LW1lbnUtZHJvcGRvd24uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LWRyb3Bkb3duLWNvbnRleHQnLFxyXG4gIGV4cG9ydEFzOiAnbnpEcm9wZG93bkNvbnRleHQnLFxyXG4gIGFuaW1hdGlvbnM6IFtzbGlkZU1vdGlvbl0sXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LWRyb3Bkb3duLWNvbnRleHQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJvdmlkZXJzOiBbTnpNZW51RHJvcGRvd25TZXJ2aWNlXSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgbnotZHJvcGRvd24tY29udGV4dCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hbnQtZHJvcGRvd24ge1xyXG4gICAgICAgIHRvcDogMTAwJTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG4vKipcclxuICogQGRlcHJlY2F0ZWQgVXNlIGBOekRyb3Bkb3duTWVudUNvbXBvbmVudGAgaW5zdGVhZCwgd2lsbCByZW1vdmUgaW4gOS4wLjAuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTnpEcm9wZG93bkNvbnRleHRDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIG9wZW4gPSB0cnVlO1xyXG4gIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBkcm9wRG93blBvc2l0aW9uOiAndG9wJyB8ICdib3R0b20nID0gJ2JvdHRvbSc7XHJcbiAgcHJpdmF0ZSBjb250cm9sOiBOekRyb3Bkb3duU2VydmljZTtcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgaW5pdChcclxuICAgIG9wZW46IGJvb2xlYW4sXHJcbiAgICB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8dm9pZD4sXHJcbiAgICBwb3NpdGlvbkNoYW5nZXM6IE9ic2VydmFibGU8Q29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlPixcclxuICAgIGNvbnRyb2w6IE56RHJvcGRvd25TZXJ2aWNlXHJcbiAgKTogdm9pZCB7XHJcbiAgICB0aGlzLm9wZW4gPSBvcGVuO1xyXG4gICAgdGhpcy50ZW1wbGF0ZVJlZiA9IHRlbXBsYXRlUmVmO1xyXG4gICAgdGhpcy5jb250cm9sID0gY29udHJvbDtcclxuICAgIHBvc2l0aW9uQ2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICB0aGlzLmRyb3BEb3duUG9zaXRpb24gPSBkYXRhLmNvbm5lY3Rpb25QYWlyLm92ZXJsYXlZID09PSAnYm90dG9tJyA/ICd0b3AnIDogJ2JvdHRvbSc7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpOiB2b2lkIHtcclxuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBhZnRlckFuaW1hdGlvbigpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5vcGVuKSB7XHJcbiAgICAgIHRoaXMuY29udHJvbC5kaXNwb3NlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XHJcblxyXG4gIC8vIFRPRE8gYXV0byBzZXQgZHJvcGRvd24gY2xhc3MgYWZ0ZXIgdGhlIGJ1ZyByZXNvbHZlZFxyXG4gIC8qKiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xNDg0MiAqKi9cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=