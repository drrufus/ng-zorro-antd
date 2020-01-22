/**
 * @fileoverview added by tsickle
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
import { ContentObserver } from '@angular/cdk/observers';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, NgZone, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { isEmpty, zoomBadgeMotion, InputBoolean, NzConfigService, WithConfig } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import { startWith, take, takeUntil } from 'rxjs/operators';
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'backTop';
var NzBadgeComponent = /** @class */ (function () {
    function NzBadgeComponent(nzConfigService, renderer, elementRef, contentObserver, cdr, ngZone) {
        this.nzConfigService = nzConfigService;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.contentObserver = contentObserver;
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.destroy$ = new Subject();
        this.notWrapper = true;
        this.viewInit = false;
        this.maxNumberArray = [];
        this.countArray = [];
        this.countSingleArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.colorArray = [
            'pink',
            'red',
            'yellow',
            'orange',
            'cyan',
            'green',
            'blue',
            'purple',
            'geekblue',
            'magenta',
            'volcano',
            'gold',
            'lime'
        ];
        this.presetColor = null;
        this.nzShowZero = false;
        this.nzShowDot = true;
        this.nzDot = false;
        renderer.addClass(elementRef.nativeElement, 'ant-badge');
    }
    /**
     * @return {?}
     */
    NzBadgeComponent.prototype.checkContent = /**
     * @return {?}
     */
    function () {
        this.notWrapper = isEmpty(this.contentElement.nativeElement);
        if (this.notWrapper) {
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-badge-not-a-wrapper');
        }
        else {
            this.renderer.removeClass(this.elementRef.nativeElement, 'ant-badge-not-a-wrapper');
        }
    };
    Object.defineProperty(NzBadgeComponent.prototype, "showSup", {
        get: /**
         * @return {?}
         */
        function () {
            return (this.nzShowDot && this.nzDot) || this.count > 0 || (this.count === 0 && this.nzShowZero);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzBadgeComponent.prototype.generateMaxNumberArray = /**
     * @return {?}
     */
    function () {
        this.maxNumberArray = this.nzOverflowCount.toString().split('');
    };
    /**
     * @return {?}
     */
    NzBadgeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.generateMaxNumberArray();
    };
    /**
     * @return {?}
     */
    NzBadgeComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.ngZone.onStable.pipe(take(1)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.viewInit = true;
            _this.cdr.markForCheck();
        }));
        this.contentObserver
            .observe(this.contentElement)
            .pipe(startWith(true), takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.checkContent();
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzBadgeComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzOverflowCount = changes.nzOverflowCount, nzCount = changes.nzCount, nzColor = changes.nzColor;
        if (nzCount && !(nzCount.currentValue instanceof TemplateRef)) {
            this.count = Math.max(0, nzCount.currentValue);
            this.countArray = this.count
                .toString()
                .split('')
                .map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return +item; }));
        }
        if (nzOverflowCount) {
            this.generateMaxNumberArray();
        }
        if (nzColor) {
            this.presetColor = this.colorArray.indexOf(this.nzColor) !== -1 ? this.nzColor : null;
        }
    };
    /**
     * @return {?}
     */
    NzBadgeComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzBadgeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-badge',
                    exportAs: 'nzBadge',
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    animations: [zoomBadgeMotion],
                    template: "<span #contentElement><ng-content></ng-content></span>\r\n<span class=\"ant-badge-status-dot ant-badge-status-{{nzStatus || presetColor}}\"\r\n      [style.background]=\"!presetColor && nzColor\"\r\n      *ngIf=\"nzStatus || nzColor\"\r\n      [ngStyle]=\"nzStyle\"></span>\r\n<span class=\"ant-badge-status-text\" *ngIf=\"nzStatus || nzColor\">{{ nzText }}</span>\r\n<ng-container *nzStringTemplateOutlet=\"nzCount\">\r\n  <sup class=\"ant-scroll-number\"\r\n       *ngIf=\"showSup && viewInit\"\r\n       [@.disabled]=\"notWrapper\"\r\n       [@zoomBadgeMotion]\r\n       [ngStyle]=\"nzStyle\"\r\n       [attr.title]=\"nzTitle || nzCount\"\r\n       [style.right.px]=\"nzOffset && nzOffset[0] ? -nzOffset[0] : null\"\r\n       [style.marginTop.px]=\"nzOffset && nzOffset[1] ? nzOffset[1] : null\"\r\n       [class.ant-badge-count]=\"!nzDot\"\r\n       [class.ant-badge-dot]=\"nzDot\"\r\n       [class.ant-badge-multiple-words]=\"countArray.length>=2\">\r\n    <ng-container *ngFor=\"let n of maxNumberArray;let i = index;\">\r\n      <span class=\"ant-scroll-number-only\"\r\n            *ngIf=\"count <= nzOverflowCount\"\r\n            [style.transform]=\"'translateY(' + (-countArray[i] * 100) + '%)'\">\r\n          <ng-container *ngIf=\"!nzDot && countArray[i] !== undefined\">\r\n            <p *ngFor=\"let p of countSingleArray\" [class.current]=\"p === countArray[i]\" [attr.aria-hidden]=\"p !== countArray[i]\">{{ p }}</p>\r\n          </ng-container>\r\n      </span>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"count > nzOverflowCount\">{{ nzOverflowCount }}+</ng-container>\r\n  </sup>\r\n</ng-container>",
                    host: {
                        '[class.ant-badge-status]': 'nzStatus'
                    }
                }] }
    ];
    /** @nocollapse */
    NzBadgeComponent.ctorParameters = function () { return [
        { type: NzConfigService },
        { type: Renderer2 },
        { type: ElementRef },
        { type: ContentObserver },
        { type: ChangeDetectorRef },
        { type: NgZone }
    ]; };
    NzBadgeComponent.propDecorators = {
        contentElement: [{ type: ViewChild, args: ['contentElement', { static: false },] }],
        nzShowZero: [{ type: Input }],
        nzShowDot: [{ type: Input }],
        nzDot: [{ type: Input }],
        nzOverflowCount: [{ type: Input }],
        nzText: [{ type: Input }],
        nzColor: [{ type: Input }],
        nzTitle: [{ type: Input }],
        nzStyle: [{ type: Input }],
        nzStatus: [{ type: Input }],
        nzCount: [{ type: Input }],
        nzOffset: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzBadgeComponent.prototype, "nzShowZero", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzBadgeComponent.prototype, "nzShowDot", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzBadgeComponent.prototype, "nzDot", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, 99),
        tslib_1.__metadata("design:type", Number)
    ], NzBadgeComponent.prototype, "nzOverflowCount", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        tslib_1.__metadata("design:type", String)
    ], NzBadgeComponent.prototype, "nzColor", void 0);
    return NzBadgeComponent;
}());
export { NzBadgeComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzBadgeComponent.prototype.destroy$;
    /** @type {?} */
    NzBadgeComponent.prototype.notWrapper;
    /** @type {?} */
    NzBadgeComponent.prototype.viewInit;
    /** @type {?} */
    NzBadgeComponent.prototype.maxNumberArray;
    /** @type {?} */
    NzBadgeComponent.prototype.countArray;
    /** @type {?} */
    NzBadgeComponent.prototype.countSingleArray;
    /** @type {?} */
    NzBadgeComponent.prototype.colorArray;
    /** @type {?} */
    NzBadgeComponent.prototype.presetColor;
    /** @type {?} */
    NzBadgeComponent.prototype.count;
    /** @type {?} */
    NzBadgeComponent.prototype.contentElement;
    /** @type {?} */
    NzBadgeComponent.prototype.nzShowZero;
    /** @type {?} */
    NzBadgeComponent.prototype.nzShowDot;
    /** @type {?} */
    NzBadgeComponent.prototype.nzDot;
    /** @type {?} */
    NzBadgeComponent.prototype.nzOverflowCount;
    /** @type {?} */
    NzBadgeComponent.prototype.nzText;
    /** @type {?} */
    NzBadgeComponent.prototype.nzColor;
    /** @type {?} */
    NzBadgeComponent.prototype.nzTitle;
    /** @type {?} */
    NzBadgeComponent.prototype.nzStyle;
    /** @type {?} */
    NzBadgeComponent.prototype.nzStatus;
    /** @type {?} */
    NzBadgeComponent.prototype.nzCount;
    /** @type {?} */
    NzBadgeComponent.prototype.nzOffset;
    /** @type {?} */
    NzBadgeComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzBadgeComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzBadgeComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzBadgeComponent.prototype.contentObserver;
    /**
     * @type {?}
     * @private
     */
    NzBadgeComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzBadgeComponent.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYmFkZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9iYWRnZS8iLCJzb3VyY2VzIjpbIm56LWJhZGdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUlOLFNBQVMsRUFFVCxXQUFXLEVBQ1gsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3pHLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0lBSXRELHdCQUF3QixHQUFHLFNBQVM7QUFFMUM7SUFrRUUsMEJBQ1MsZUFBZ0MsRUFDL0IsUUFBbUIsRUFDbkIsVUFBc0IsRUFDdEIsZUFBZ0MsRUFDaEMsR0FBc0IsRUFDdEIsTUFBYztRQUxmLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUMvQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQVE7UUEzRGhCLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ2pDLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixtQkFBYyxHQUFhLEVB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LEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzZCQUM3QyxLQUFLOzRCQUNMLEtBQUs7d0JBQ0wsS0FBSztrQ0FDTCxLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLOzBCQUNMLEtBQUs7MkJBQ0wsS0FBSzswQkFDTCxLQUFLOzJCQUNMLEtBQUs7O0lBVm1CO1FBQWYsWUFBWSxFQUFFOzt3REFBNkI7SUFDNUI7UUFBZixZQUFZLEVBQUU7O3VEQUFrQjtJQUNqQjtRQUFmLFlBQVksRUFBRTs7bURBQWU7SUFDWTtRQUF6QyxVQUFVLENBQUMsd0JBQXdCLEVBQUUsRUFBRSxDQUFDOzs2REFBeUI7SUFFNUI7UUFBckMsVUFBVSxDQUFDLHdCQUF3QixDQUFDOztxREFBaUI7SUE2RWpFLHVCQUFDO0NBQUEsQUF2SEQsSUF1SEM7U0EzR1ksZ0JBQWdCOzs7Ozs7SUFDM0Isb0NBQWlDOztJQUNqQyxzQ0FBa0I7O0lBQ2xCLG9DQUFpQjs7SUFDakIsMENBQThCOztJQUM5QixzQ0FBMEI7O0lBQzFCLDRDQUFrRDs7SUFDbEQsc0NBY0U7O0lBQ0YsdUNBQWtDOztJQUNsQyxpQ0FBYzs7SUFDZCwwQ0FBMkU7O0lBQzNFLHNDQUFxRDs7SUFDckQscUNBQTBDOztJQUMxQyxpQ0FBdUM7O0lBQ3ZDLDJDQUEyRTs7SUFDM0Usa0NBQXdCOztJQUN4QixtQ0FBK0Q7O0lBQy9ELG1DQUF5Qjs7SUFDekIsbUNBQTRDOztJQUM1QyxvQ0FBcUM7O0lBQ3JDLG1DQUE2Qzs7SUFDN0Msb0NBQW9DOztJQW9CbEMsMkNBQXVDOzs7OztJQUN2QyxvQ0FBMkI7Ozs7O0lBQzNCLHNDQUE4Qjs7Ozs7SUFDOUIsMkNBQXdDOzs7OztJQUN4QywrQkFBOEI7Ozs7O0lBQzlCLGtDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ29udGVudE9ic2VydmVyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL29ic2VydmVycyc7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzRW1wdHksIHpvb21CYWRnZU1vdGlvbiwgSW5wdXRCb29sZWFuLCBOekNvbmZpZ1NlcnZpY2UsIFdpdGhDb25maWcgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHN0YXJ0V2l0aCwgdGFrZSwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuZXhwb3J0IHR5cGUgTnpCYWRnZVN0YXR1c1R5cGUgPSAnc3VjY2VzcycgfCAncHJvY2Vzc2luZycgfCAnZGVmYXVsdCcgfCAnZXJyb3InIHwgJ3dhcm5pbmcnO1xyXG5cclxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ2JhY2tUb3AnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei1iYWRnZScsXHJcbiAgZXhwb3J0QXM6ICduekJhZGdlJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGFuaW1hdGlvbnM6IFt6b29tQmFkZ2VNb3Rpb25dLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1iYWRnZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtYmFkZ2Utc3RhdHVzXSc6ICduelN0YXR1cydcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekJhZGdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgbm90V3JhcHBlciA9IHRydWU7XHJcbiAgdmlld0luaXQgPSBmYWxzZTtcclxuICBtYXhOdW1iZXJBcnJheTogc3RyaW5nW10gPSBbXTtcclxuICBjb3VudEFycmF5OiBudW1iZXJbXSA9IFtdO1xyXG4gIGNvdW50U2luZ2xlQXJyYXkgPSBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOV07XHJcbiAgY29sb3JBcnJheSA9IFtcclxuICAgICdwaW5rJyxcclxuICAgICdyZWQnLFxyXG4gICAgJ3llbGxvdycsXHJcbiAgICAnb3JhbmdlJyxcclxuICAgICdjeWFuJyxcclxuICAgICdncmVlbicsXHJcbiAgICAnYmx1ZScsXHJcbiAgICAncHVycGxlJyxcclxuICAgICdnZWVrYmx1ZScsXHJcbiAgICAnbWFnZW50YScsXHJcbiAgICAndm9sY2FubycsXHJcbiAgICAnZ29sZCcsXHJcbiAgICAnbGltZSdcclxuICBdO1xyXG4gIHByZXNldENvbG9yOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICBjb3VudDogbnVtYmVyO1xyXG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnRFbGVtZW50JywgeyBzdGF0aWM6IGZhbHNlIH0pIGNvbnRlbnRFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3daZXJvOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd0RvdCA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RG90ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCA5OSkgbnpPdmVyZmxvd0NvdW50OiBudW1iZXI7XHJcbiAgQElucHV0KCkgbnpUZXh0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKSBuekNvbG9yOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpUaXRsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56U3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcbiAgQElucHV0KCkgbnpTdGF0dXM6IE56QmFkZ2VTdGF0dXNUeXBlO1xyXG4gIEBJbnB1dCgpIG56Q291bnQ6IG51bWJlciB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56T2Zmc2V0OiBbbnVtYmVyLCBudW1iZXJdO1xyXG5cclxuICBjaGVja0NvbnRlbnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm5vdFdyYXBwZXIgPSBpc0VtcHR5KHRoaXMuY29udGVudEVsZW1lbnQubmF0aXZlRWxlbWVudCk7XHJcbiAgICBpZiAodGhpcy5ub3RXcmFwcGVyKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtYmFkZ2Utbm90LWEtd3JhcHBlcicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1iYWRnZS1ub3QtYS13cmFwcGVyJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgc2hvd1N1cCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAodGhpcy5uelNob3dEb3QgJiYgdGhpcy5uekRvdCkgfHwgdGhpcy5jb3VudCA+IDAgfHwgKHRoaXMuY291bnQgPT09IDAgJiYgdGhpcy5uelNob3daZXJvKTtcclxuICB9XHJcblxyXG4gIGdlbmVyYXRlTWF4TnVtYmVyQXJyYXkoKTogdm9pZCB7XHJcbiAgICB0aGlzLm1heE51bWJlckFycmF5ID0gdGhpcy5uek92ZXJmbG93Q291bnQudG9TdHJpbmcoKS5zcGxpdCgnJyk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgY29udGVudE9ic2VydmVyOiBDb250ZW50T2JzZXJ2ZXIsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lXHJcbiAgKSB7XHJcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtYmFkZ2UnKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5nZW5lcmF0ZU1heE51bWJlckFycmF5KCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm5nWm9uZS5vblN0YWJsZS5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMudmlld0luaXQgPSB0cnVlO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuY29udGVudE9ic2VydmVyXHJcbiAgICAgIC5vYnNlcnZlKHRoaXMuY29udGVudEVsZW1lbnQpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHN0YXJ0V2l0aCh0cnVlKSxcclxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLmNoZWNrQ29udGVudCgpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgbnpPdmVyZmxvd0NvdW50LCBuekNvdW50LCBuekNvbG9yIH0gPSBjaGFuZ2VzO1xyXG4gICAgaWYgKG56Q291bnQgJiYgIShuekNvdW50LmN1cnJlbnRWYWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSkge1xyXG4gICAgICB0aGlzLmNvdW50ID0gTWF0aC5tYXgoMCwgbnpDb3VudC5jdXJyZW50VmFsdWUpO1xyXG4gICAgICB0aGlzLmNvdW50QXJyYXkgPSB0aGlzLmNvdW50XHJcbiAgICAgICAgLnRvU3RyaW5nKClcclxuICAgICAgICAuc3BsaXQoJycpXHJcbiAgICAgICAgLm1hcChpdGVtID0+ICtpdGVtKTtcclxuICAgIH1cclxuICAgIGlmIChuek92ZXJmbG93Q291bnQpIHtcclxuICAgICAgdGhpcy5nZW5lcmF0ZU1heE51bWJlckFycmF5KCk7XHJcbiAgICB9XHJcbiAgICBpZiAobnpDb2xvcikge1xyXG4gICAgICB0aGlzLnByZXNldENvbG9yID0gdGhpcy5jb2xvckFycmF5LmluZGV4T2YodGhpcy5uekNvbG9yKSAhPT0gLTEgPyB0aGlzLm56Q29sb3IgOiBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcbn1cclxuIl19