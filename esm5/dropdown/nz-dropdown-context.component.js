/**
 * @fileoverview added by tsickle
 * Generated from: nz-dropdown-context.component.ts
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
var NzDropdownContextComponent = /** @class */ (function () {
    function NzDropdownContextComponent(cdr) {
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
    NzDropdownContextComponent.prototype.init = /**
     * @param {?} open
     * @param {?} templateRef
     * @param {?} positionChanges
     * @param {?} control
     * @return {?}
     */
    function (open, templateRef, positionChanges, control) {
        var _this = this;
        this.open = open;
        this.templateRef = templateRef;
        this.control = control;
        positionChanges.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.dropDownPosition = data.connectionPair.overlayY === 'bottom' ? 'top' : 'bottom';
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @return {?}
     */
    NzDropdownContextComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.open = false;
        this.cdr.markForCheck();
    };
    /**
     * @return {?}
     */
    NzDropdownContextComponent.prototype.afterAnimation = /**
     * @return {?}
     */
    function () {
        if (!this.open) {
            this.control.dispose();
        }
    };
    // TODO auto set dropdown class after the bug resolved
    /** https://github.com/angular/angular/issues/14842 **/
    // TODO auto set dropdown class after the bug resolved
    /**
     * https://github.com/angular/angular/issues/14842 *
     * @return {?}
     */
    NzDropdownContextComponent.prototype.ngOnDestroy = 
    // TODO auto set dropdown class after the bug resolved
    /**
     * https://github.com/angular/angular/issues/14842 *
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzDropdownContextComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-dropdown-context',
                    exportAs: 'nzDropdownContext',
                    animations: [slideMotion],
                    preserveWhitespaces: false,
                    template: "<div *ngIf=\"open\"\n  class=\"ant-dropdown ant-dropdown-placement-bottomLeft\"\n  [@slideMotion]=\"dropDownPosition\"\n  (@slideMotion.done)=\"afterAnimation()\">\n  <ng-template [ngTemplateOutlet]=\"templateRef\"></ng-template>\n</div>",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [NzMenuDropdownService],
                    styles: ["\n      nz-dropdown-context {\n        display: block;\n      }\n\n      .ant-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzDropdownContextComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    return NzDropdownContextComponent;
}());
export { NzDropdownContextComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJvcGRvd24tY29udGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2Ryb3Bkb3duLyIsInNvdXJjZXMiOlsibnotZHJvcGRvd24tY29udGV4dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBU0EsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUdULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDakQsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFbkU7SUE4REUsb0NBQW9CLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBaEMxQyxTQUFJLEdBQUcsSUFBSSxDQUFDO1FBRVoscUJBQWdCLEdBQXFCLFFBQVEsQ0FBQztRQUV0QyxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQTRCWSxDQUFDOzs7Ozs7OztJQTFCOUMseUNBQUk7Ozs7Ozs7SUFBSixVQUNFLElBQWEsRUFDYixXQUE4QixFQUM5QixlQUEyRCxFQUMzRCxPQUEwQjtRQUo1QixpQkFhQztRQVBDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLElBQUk7WUFDM0QsS0FBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDckYsS0FBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCwwQ0FBSzs7O0lBQUw7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxtREFBYzs7O0lBQWQ7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDO0lBSUQsc0RBQXNEO0lBQ3RELHVEQUF1RDs7Ozs7O0lBQ3ZELGdEQUFXOzs7Ozs7SUFBWDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDOztnQkFyRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFVBQVUsRUFBRSxDQUFDLFdBQVcsQ0FBQztvQkFDekIsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIseVBBQW1EO29CQUNuRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDOzZCQUVoQyx5UEFhQztpQkFFSjs7OztnQkFyQ0MsaUJBQWlCOztJQWtGbkIsaUNBQUM7Q0FBQSxBQXRFRCxJQXNFQztTQXpDWSwwQkFBMEI7OztJQUNyQywwQ0FBWTs7SUFDWixpREFBK0I7O0lBQy9CLHNEQUE4Qzs7Ozs7SUFDOUMsNkNBQW1DOzs7OztJQUNuQyw4Q0FBaUM7Ozs7O0lBNEJyQix5Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIE9uRGVzdHJveSxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2xpZGVNb3Rpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTnpEcm9wZG93blNlcnZpY2UgfSBmcm9tICcuL256LWRyb3Bkb3duLnNlcnZpY2UnO1xuaW1wb3J0IHsgTnpNZW51RHJvcGRvd25TZXJ2aWNlIH0gZnJvbSAnLi9uei1tZW51LWRyb3Bkb3duLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1kcm9wZG93bi1jb250ZXh0JyxcbiAgZXhwb3J0QXM6ICduekRyb3Bkb3duQ29udGV4dCcsXG4gIGFuaW1hdGlvbnM6IFtzbGlkZU1vdGlvbl0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotZHJvcGRvd24tY29udGV4dC5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtOek1lbnVEcm9wZG93blNlcnZpY2VdLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICBuei1kcm9wZG93bi1jb250ZXh0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIC5hbnQtZHJvcGRvd24ge1xuICAgICAgICB0b3A6IDEwMCU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgfVxuICAgIGBcbiAgXVxufSlcbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIGBOekRyb3Bkb3duTWVudUNvbXBvbmVudGAgaW5zdGVhZCwgd2lsbCByZW1vdmUgaW4gOS4wLjAuXG4gKi9cbmV4cG9ydCBjbGFzcyBOekRyb3Bkb3duQ29udGV4dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIG9wZW4gPSB0cnVlO1xuICB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8dm9pZD47XG4gIGRyb3BEb3duUG9zaXRpb246ICd0b3AnIHwgJ2JvdHRvbScgPSAnYm90dG9tJztcbiAgcHJpdmF0ZSBjb250cm9sOiBOekRyb3Bkb3duU2VydmljZTtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgaW5pdChcbiAgICBvcGVuOiBib29sZWFuLFxuICAgIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjx2b2lkPixcbiAgICBwb3NpdGlvbkNoYW5nZXM6IE9ic2VydmFibGU8Q29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlPixcbiAgICBjb250cm9sOiBOekRyb3Bkb3duU2VydmljZVxuICApOiB2b2lkIHtcbiAgICB0aGlzLm9wZW4gPSBvcGVuO1xuICAgIHRoaXMudGVtcGxhdGVSZWYgPSB0ZW1wbGF0ZVJlZjtcbiAgICB0aGlzLmNvbnRyb2wgPSBjb250cm9sO1xuICAgIHBvc2l0aW9uQ2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgdGhpcy5kcm9wRG93blBvc2l0aW9uID0gZGF0YS5jb25uZWN0aW9uUGFpci5vdmVybGF5WSA9PT0gJ2JvdHRvbScgPyAndG9wJyA6ICdib3R0b20nO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBjbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGFmdGVyQW5pbWF0aW9uKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5vcGVuKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuZGlzcG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICAvLyBUT0RPIGF1dG8gc2V0IGRyb3Bkb3duIGNsYXNzIGFmdGVyIHRoZSBidWcgcmVzb2x2ZWRcbiAgLyoqIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzE0ODQyICoqL1xuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==