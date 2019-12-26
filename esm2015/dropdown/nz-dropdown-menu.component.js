/**
 * @fileoverview added by tsickle
 * Generated from: nz-dropdown-menu.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Host, Injector, Optional, Renderer2, Self, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { slideMotion, NzDropdownHigherOrderServiceToken, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import { NzMenuDropdownService } from './nz-menu-dropdown.service';
/**
 * @param {?} injector
 * @return {?}
 */
export function dropdownMenuServiceFactory(injector) {
    return injector.get(NzMenuDropdownService);
}
export class NzDropdownMenuComponent {
    /**
     * @param {?} cdr
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} viewContainerRef
     * @param {?} nzMenuDropdownService
     * @param {?=} noAnimation
     */
    constructor(cdr, elementRef, renderer, viewContainerRef, nzMenuDropdownService, noAnimation) {
        this.cdr = cdr;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.viewContainerRef = viewContainerRef;
        this.nzMenuDropdownService = nzMenuDropdownService;
        this.noAnimation = noAnimation;
        this.open = false;
        this.triggerWidth = 0;
        this.dropDownPosition = 'bottom';
        this.visible$ = new Subject();
        this.nzTrigger = 'hover';
        this.nzPlacement = 'bottomLeft';
        this.nzOverlayClassName = '';
        this.nzOverlayStyle = {};
        this.nzTableFilter = false;
    }
    /**
     * @param {?} visible
     * @param {?=} trigger
     * @return {?}
     */
    setVisibleStateWhen(visible, trigger = 'all') {
        if (this.nzTrigger === trigger || trigger === 'all') {
            this.visible$.next(visible);
        }
    }
    /**
     * @template T
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    setValue(key, value) {
        this[key] = value;
        this.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
    }
}
NzDropdownMenuComponent.decorators = [
    { type: Component, args: [{
                selector: `nz-dropdown-menu`,
                template: "<ng-template>\r\n  <div *ngIf=\"open\" class=\"{{'ant-dropdown nz-dropdown ant-dropdown-placement-'+nzPlacement}}\"\r\n       [ngClass]=\"nzOverlayClassName\"\r\n       [ngStyle]=\"nzOverlayStyle\"\r\n       [@slideMotion]=\"dropDownPosition\"\r\n       [@.disabled]=\"noAnimation?.nzNoAnimation\"\r\n       [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n       (mouseenter)=\"setVisibleStateWhen(true,'hover')\"\r\n       (mouseleave)=\"setVisibleStateWhen(false,'hover')\">\r\n    <div [class.ant-table-filter-dropdown]=\"nzTableFilter\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n</ng-template>",
                exportAs: `nzDropdownMenu`,
                animations: [slideMotion],
                providers: [
                    NzMenuDropdownService,
                    {
                        provide: NzDropdownHigherOrderServiceToken,
                        useFactory: dropdownMenuServiceFactory,
                        deps: [[new Self(), Injector]]
                    }
                ],
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [`
      :root .ant-dropdown.nz-dropdown {
        top: 0;
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
NzDropdownMenuComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: Renderer2 },
    { type: ViewContainerRef },
    { type: NzMenuDropdownService },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
NzDropdownMenuComponent.propDecorators = {
    templateRef: [{ type: ViewChild, args: [TemplateRef, { static: true },] }]
};
if (false) {
    /** @type {?} */
    NzDropdownMenuComponent.prototype.open;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.triggerWidth;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.dropDownPosition;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.visible$;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.nzTrigger;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.nzPlacement;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.nzOverlayClassName;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.nzOverlayStyle;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.nzTableFilter;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.templateRef;
    /**
     * @type {?}
     * @private
     */
    NzDropdownMenuComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzDropdownMenuComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzDropdownMenuComponent.prototype.renderer;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.viewContainerRef;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.nzMenuDropdownService;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJvcGRvd24tbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2Ryb3Bkb3duLyIsInNvdXJjZXMiOlsibnotZHJvcGRvd24tbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVEsRUFDUixTQUFTLEVBQ1QsSUFBSSxFQUNKLFdBQVcsRUFDWCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsV0FBVyxFQUNYLGlDQUFpQyxFQUVqQyxzQkFBc0IsRUFDdkIsTUFBTSxvQkFBb0IsQ0FBQztBQUU1QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7OztBQUluRSxNQUFNLFVBQVUsMEJBQTBCLENBQUMsUUFBa0I7SUFDM0QsT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDN0MsQ0FBQztBQStCRCxNQUFNLE9BQU8sdUJBQXVCOzs7Ozs7Ozs7SUF3QmxDLFlBQ1UsR0FBc0IsRUFDdEIsVUFBc0IsRUFDdEIsUUFBbUIsRUFDcEIsZ0JBQWtDLEVBQ2xDLHFCQUE0QyxFQUN4QixXQUFvQztRQUx2RCxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDcEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQ3hCLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQTdCakUsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUNiLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLHFCQUFnQixHQUFnQyxRQUFRLENBQUM7UUFDekQsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7UUFDbEMsY0FBUyxHQUFzQixPQUFPLENBQUM7UUFDdkMsZ0JBQVcsR0FBb0IsWUFBWSxDQUFDO1FBQzVDLHVCQUFrQixHQUFHLEVBQUUsQ0FBQztRQUN4QixtQkFBYyxHQUE4QixFQUFFLENBQUM7UUFDL0Msa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFzQm5CLENBQUM7Ozs7OztJQWxCSixtQkFBbUIsQ0FBQyxPQUFnQixFQUFFLFVBQXFDLEtBQUs7UUFDOUUsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLE9BQU8sSUFBSSxPQUFPLEtBQUssS0FBSyxFQUFFO1lBQ25ELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs7Ozs7OztJQUVELFFBQVEsQ0FBMEMsR0FBTSxFQUFFLEtBQWM7UUFDdEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFXRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3BILENBQUM7OztZQWhFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsMG5CQUFnRDtnQkFDaEQsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsVUFBVSxFQUFFLENBQUMsV0FBVyxDQUFDO2dCQUN6QixTQUFTLEVBQUU7b0JBQ1QscUJBQXFCO29CQUNyQjt3QkFDRSxPQUFPLEVBQUUsaUNBQWlDO3dCQUMxQyxVQUFVLEVBQUUsMEJBQTBCO3dCQUN0QyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7cUJBQy9CO2lCQUNGO2dCQWFELG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTt5QkFiN0M7Ozs7Ozs7OztLQVNDO2FBS0o7Ozs7WUF6REMsaUJBQWlCO1lBRWpCLFVBQVU7WUFJVixTQUFTO1lBSVQsZ0JBQWdCO1lBV1QscUJBQXFCO1lBSjVCLHNCQUFzQix1QkF1RW5CLElBQUksWUFBSSxRQUFROzs7MEJBbkJsQixTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7OztJQVZ4Qyx1Q0FBYTs7SUFDYiwrQ0FBaUI7O0lBQ2pCLG1EQUF5RDs7SUFDekQsMkNBQWtDOztJQUNsQyw0Q0FBdUM7O0lBQ3ZDLDhDQUE0Qzs7SUFDNUMscURBQXdCOztJQUN4QixpREFBK0M7O0lBQy9DLGdEQUFzQjs7SUFFdEIsOENBQXdFOzs7OztJQWN0RSxzQ0FBOEI7Ozs7O0lBQzlCLDZDQUE4Qjs7Ozs7SUFDOUIsMkNBQTJCOztJQUMzQixtREFBeUM7O0lBQ3pDLHdEQUFtRDs7SUFDbkQsOENBQStEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSG9zdCxcclxuICBJbmplY3RvcixcclxuICBPcHRpb25hbCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2VsZixcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0NvbnRhaW5lclJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIHNsaWRlTW90aW9uLFxyXG4gIE56RHJvcGRvd25IaWdoZXJPcmRlclNlcnZpY2VUb2tlbixcclxuICBOek1lbnVCYXNlU2VydmljZSxcclxuICBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXHJcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTnpNZW51RHJvcGRvd25TZXJ2aWNlIH0gZnJvbSAnLi9uei1tZW51LWRyb3Bkb3duLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IHR5cGUgTnpQbGFjZW1lbnRUeXBlID0gJ2JvdHRvbUxlZnQnIHwgJ2JvdHRvbUNlbnRlcicgfCAnYm90dG9tUmlnaHQnIHwgJ3RvcExlZnQnIHwgJ3RvcENlbnRlcicgfCAndG9wUmlnaHQnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRyb3Bkb3duTWVudVNlcnZpY2VGYWN0b3J5KGluamVjdG9yOiBJbmplY3Rvcik6IE56TWVudUJhc2VTZXJ2aWNlIHtcclxuICByZXR1cm4gaW5qZWN0b3IuZ2V0KE56TWVudURyb3Bkb3duU2VydmljZSk7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBgbnotZHJvcGRvd24tbWVudWAsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LWRyb3Bkb3duLW1lbnUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGV4cG9ydEFzOiBgbnpEcm9wZG93bk1lbnVgLFxyXG4gIGFuaW1hdGlvbnM6IFtzbGlkZU1vdGlvbl0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBOek1lbnVEcm9wZG93blNlcnZpY2UsXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE56RHJvcGRvd25IaWdoZXJPcmRlclNlcnZpY2VUb2tlbixcclxuICAgICAgdXNlRmFjdG9yeTogZHJvcGRvd25NZW51U2VydmljZUZhY3RvcnksXHJcbiAgICAgIGRlcHM6IFtbbmV3IFNlbGYoKSwgSW5qZWN0b3JdXVxyXG4gICAgfVxyXG4gIF0sXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIDpyb290IC5hbnQtZHJvcGRvd24ubnotZHJvcGRvd24ge1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekRyb3Bkb3duTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xyXG4gIG9wZW4gPSBmYWxzZTtcclxuICB0cmlnZ2VyV2lkdGggPSAwO1xyXG4gIGRyb3BEb3duUG9zaXRpb246ICd0b3AnIHwgJ2NlbnRlcicgfCAnYm90dG9tJyA9ICdib3R0b20nO1xyXG4gIHZpc2libGUkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcclxuICBuelRyaWdnZXI6ICdjbGljaycgfCAnaG92ZXInID0gJ2hvdmVyJztcclxuICBuelBsYWNlbWVudDogTnpQbGFjZW1lbnRUeXBlID0gJ2JvdHRvbUxlZnQnO1xyXG4gIG56T3ZlcmxheUNsYXNzTmFtZSA9ICcnO1xyXG4gIG56T3ZlcmxheVN0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XHJcbiAgbnpUYWJsZUZpbHRlciA9IGZhbHNlO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmLCB7IHN0YXRpYzogdHJ1ZSB9KSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgc2V0VmlzaWJsZVN0YXRlV2hlbih2aXNpYmxlOiBib29sZWFuLCB0cmlnZ2VyOiAnY2xpY2snIHwgJ2hvdmVyJyB8ICdhbGwnID0gJ2FsbCcpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56VHJpZ2dlciA9PT0gdHJpZ2dlciB8fCB0cmlnZ2VyID09PSAnYWxsJykge1xyXG4gICAgICB0aGlzLnZpc2libGUkLm5leHQodmlzaWJsZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRWYWx1ZTxUIGV4dGVuZHMga2V5b2YgTnpEcm9wZG93bk1lbnVDb21wb25lbnQ+KGtleTogVCwgdmFsdWU6IHRoaXNbVF0pOiB2b2lkIHtcclxuICAgIHRoaXNba2V5XSA9IHZhbHVlO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHB1YmxpYyB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgcHVibGljIG56TWVudURyb3Bkb3duU2VydmljZTogTnpNZW51RHJvcGRvd25TZXJ2aWNlLFxyXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXHJcbiAgKSB7fVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKHRoaXMucmVuZGVyZXIucGFyZW50Tm9kZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCksIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcclxuICB9XHJcbn1cclxuIl19