/**
 * @fileoverview added by tsickle
 * Generated from: nz-form.directive.ts
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
import { ContentChildren, Directive, ElementRef, Input, QueryList, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import { InputBoolean, NzConfigService, NzUpdateHostClassService, WithConfig } from 'ng-zorro-antd/core';
import { NzFormLabelComponent } from './nz-form-label.component';
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'form';
export class NzFormDirective {
    /**
     * @param {?} nzConfigService
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} nzUpdateHostClassService
     */
    constructor(nzConfigService, elementRef, renderer, nzUpdateHostClassService) {
        this.nzConfigService = nzConfigService;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.nzLayout = 'horizontal';
        this.destroy$ = new Subject();
        this.renderer.addClass(elementRef.nativeElement, 'ant-form');
    }
    /**
     * @return {?}
     */
    setClassMap() {
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, {
            [`ant-form-${this.nzLayout}`]: this.nzLayout
        });
    }
    /**
     * @return {?}
     */
    updateItemsDefaultColon() {
        if (this.nzFormLabelComponent) {
            this.nzFormLabelComponent.forEach((/**
             * @param {?} item
             * @return {?}
             */
            item => item.setDefaultNoColon(this.nzNoColon)));
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setClassMap();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.setClassMap();
        if (changes.hasOwnProperty('nzNoColon')) {
            this.updateItemsDefaultColon();
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.nzFormLabelComponent.changes
            .pipe(startWith(null), takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.updateItemsDefaultColon();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzFormDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nz-form]',
                exportAs: 'nzForm',
                providers: [NzUpdateHostClassService]
            },] }
];
/** @nocollapse */
NzFormDirective.ctorParameters = () => [
    { type: NzConfigService },
    { type: ElementRef },
    { type: Renderer2 },
    { type: NzUpdateHostClassService }
];
NzFormDirective.propDecorators = {
    nzLayout: [{ type: Input }],
    nzNoColon: [{ type: Input }],
    nzFormLabelComponent: [{ type: ContentChildren, args: [NzFormLabelComponent, { descendants: true },] }]
};
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzFormDirective.prototype, "nzNoColon", void 0);
if (false) {
    /** @type {?} */
    NzFormDirective.prototype.nzLayout;
    /** @type {?} */
    NzFormDirective.prototype.nzNoColon;
    /** @type {?} */
    NzFormDirective.prototype.nzFormLabelComponent;
    /** @type {?} */
    NzFormDirective.prototype.destroy$;
    /** @type {?} */
    NzFormDirective.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzFormDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzFormDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzFormDirective.prototype.nzUpdateHostClassService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZm9ybS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2Zvcm0vIiwic291cmNlcyI6WyJuei1mb3JtLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUVMLGVBQWUsRUFDZixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFJTCxTQUFTLEVBQ1QsU0FBUyxFQUVWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSx3QkFBd0IsRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV6RyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7TUFFM0Qsd0JBQXdCLEdBQUcsTUFBTTtBQU92QyxNQUFNLE9BQU8sZUFBZTs7Ozs7OztJQW9CMUIsWUFDUyxlQUFnQyxFQUMvQixVQUFzQixFQUN0QixRQUFtQixFQUNuQix3QkFBa0Q7UUFIbkQsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQy9CLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBdkJuRCxhQUFRLEdBQUcsWUFBWSxDQUFDO1FBS2pDLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBb0J2QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQy9ELENBQUM7Ozs7SUFuQkQsV0FBVztRQUNULElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7WUFDM0UsQ0FBQyxZQUFZLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQzdDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCx1QkFBdUI7UUFDckIsSUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDN0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU87Ozs7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUMsQ0FBQztTQUNuRjtJQUNILENBQUM7Ozs7SUFXRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7U0FDaEM7SUFDSCxDQUFDOzs7O0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPO2FBQzlCLElBQUksQ0FDSCxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQ2YsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FDekI7YUFDQSxTQUFTOzs7UUFBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUNqQyxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7OztZQTNERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQzthQUN0Qzs7OztZQVZzQixlQUFlO1lBWnBDLFVBQVU7WUFNVixTQUFTO1lBTTZCLHdCQUF3Qjs7O3VCQVk3RCxLQUFLO3dCQUNMLEtBQUs7bUNBRUwsZUFBZSxTQUFDLG9CQUFvQixFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTs7QUFGVTtJQUE1RCxVQUFVLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLEVBQUUsWUFBWSxFQUFFOztrREFBb0I7OztJQUR6RixtQ0FBaUM7O0lBQ2pDLG9DQUF5Rjs7SUFFekYsK0NBQW9IOztJQUVwSCxtQ0FBeUI7O0lBZXZCLDBDQUF1Qzs7Ozs7SUFDdkMscUNBQThCOzs7OztJQUM5QixtQ0FBMkI7Ozs7O0lBQzNCLG1EQUEwRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBRdWVyeUxpc3QsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNpbXBsZUNoYW5nZXNcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBzdGFydFdpdGgsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgTnpDb25maWdTZXJ2aWNlLCBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsIFdpdGhDb25maWcgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpGb3JtTGFiZWxDb21wb25lbnQgfSBmcm9tICcuL256LWZvcm0tbGFiZWwuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdmb3JtJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW256LWZvcm1dJyxcclxuICBleHBvcnRBczogJ256Rm9ybScsXHJcbiAgcHJvdmlkZXJzOiBbTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpGb3JtRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgbnpMYXlvdXQgPSAnaG9yaXpvbnRhbCc7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCBmYWxzZSkgQElucHV0Qm9vbGVhbigpIG56Tm9Db2xvbjogYm9vbGVhbjtcclxuXHJcbiAgQENvbnRlbnRDaGlsZHJlbihOekZvcm1MYWJlbENvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBuekZvcm1MYWJlbENvbXBvbmVudDogUXVlcnlMaXN0PE56Rm9ybUxhYmVsQ29tcG9uZW50PjtcclxuXHJcbiAgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIHRoaXMubnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwge1xyXG4gICAgICBbYGFudC1mb3JtLSR7dGhpcy5uekxheW91dH1gXTogdGhpcy5uekxheW91dFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVJdGVtc0RlZmF1bHRDb2xvbigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56Rm9ybUxhYmVsQ29tcG9uZW50KSB7XHJcbiAgICAgIHRoaXMubnpGb3JtTGFiZWxDb21wb25lbnQuZm9yRWFjaChpdGVtID0+IGl0ZW0uc2V0RGVmYXVsdE5vQ29sb24odGhpcy5uek5vQ29sb24pKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZVxyXG4gICkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtZm9ybScpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnbnpOb0NvbG9uJykpIHtcclxuICAgICAgdGhpcy51cGRhdGVJdGVtc0RlZmF1bHRDb2xvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5uekZvcm1MYWJlbENvbXBvbmVudC5jaGFuZ2VzXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHN0YXJ0V2l0aChudWxsKSxcclxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUl0ZW1zRGVmYXVsdENvbG9uKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcbn1cclxuIl19