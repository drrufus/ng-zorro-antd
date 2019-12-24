import { __decorate, __metadata } from "tslib";
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
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
var NZ_CONFIG_COMPONENT_NAME = 'form';
var NzFormDirective = /** @class */ (function () {
    function NzFormDirective(nzConfigService, elementRef, renderer, nzUpdateHostClassService) {
        this.nzConfigService = nzConfigService;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.nzLayout = 'horizontal';
        this.destroy$ = new Subject();
        this.renderer.addClass(elementRef.nativeElement, 'ant-form');
    }
    NzFormDirective.prototype.setClassMap = function () {
        var _a;
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, (_a = {},
            _a["ant-form-" + this.nzLayout] = this.nzLayout,
            _a));
    };
    NzFormDirective.prototype.updateItemsDefaultColon = function () {
        var _this = this;
        if (this.nzFormLabelComponent) {
            this.nzFormLabelComponent.forEach(function (item) { return item.setDefaultNoColon(_this.nzNoColon); });
        }
    };
    NzFormDirective.prototype.ngOnInit = function () {
        this.setClassMap();
    };
    NzFormDirective.prototype.ngOnChanges = function (changes) {
        this.setClassMap();
        if (changes.hasOwnProperty('nzNoColon')) {
            this.updateItemsDefaultColon();
        }
    };
    NzFormDirective.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.nzFormLabelComponent.changes.pipe(startWith(null), takeUntil(this.destroy$)).subscribe(function () {
            _this.updateItemsDefaultColon();
        });
    };
    NzFormDirective.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /** @nocollapse */ NzFormDirective.ɵfac = function NzFormDirective_Factory(t) { return new (t || NzFormDirective)(i0.ɵɵdirectiveInject(i1.NzConfigService), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.NzUpdateHostClassService)); };
    /** @nocollapse */ NzFormDirective.ɵdir = i0.ɵɵdefineDirective({ type: NzFormDirective, selectors: [["", "nz-form", ""]], contentQueries: function NzFormDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, NzFormLabelComponent, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.nzFormLabelComponent = _t);
        } }, inputs: { nzLayout: "nzLayout", nzNoColon: "nzNoColon" }, exportAs: ["nzForm"], features: [i0.ɵɵProvidersFeature([NzUpdateHostClassService]), i0.ɵɵNgOnChangesFeature()] });
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzFormDirective.prototype, "nzNoColon", void 0);
    return NzFormDirective;
}());
export { NzFormDirective };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzFormDirective, [{
        type: Directive,
        args: [{
                selector: '[nz-form]',
                exportAs: 'nzForm',
                providers: [NzUpdateHostClassService]
            }]
    }], function () { return [{ type: i1.NzConfigService }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.NzUpdateHostClassService }]; }, { nzLayout: [{
            type: Input
        }], nzNoColon: [{
            type: Input
        }], nzFormLabelComponent: [{
            type: ContentChildren,
            args: [NzFormLabelComponent, { descendants: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZm9ybS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2Zvcm0vIiwic291cmNlcyI6WyJuei1mb3JtLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUVMLGVBQWUsRUFDZixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFJTCxTQUFTLEVBQ1QsU0FBUyxFQUVWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSx3QkFBd0IsRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV6RyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7O0FBRWpFLElBQU0sd0JBQXdCLEdBQUcsTUFBTSxDQUFDO0FBRXhDO0lBeUJFLHlCQUNTLGVBQWdDLEVBQy9CLFVBQXNCLEVBQ3RCLFFBQW1CLEVBQ25CLHdCQUFrRDtRQUhuRCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDL0IsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUF2Qm5ELGFBQVEsR0FBRyxZQUFZLENBQUM7UUFLakMsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFvQnZCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQW5CRCxxQ0FBVyxHQUFYOztRQUNFLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhO1lBQ3pFLEdBQUMsY0FBWSxJQUFJLENBQUMsUUFBVSxJQUFHLElBQUksQ0FBQyxRQUFRO2dCQUM1QyxDQUFDO0lBQ0wsQ0FBQztJQUVELGlEQUF1QixHQUF2QjtRQUFBLGlCQUlDO1FBSEMsSUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDN0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLEVBQXRDLENBQXNDLENBQUMsQ0FBQztTQUNuRjtJQUNILENBQUM7SUFXRCxrQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxxQ0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUN2QyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztTQUNoQztJQUNILENBQUM7SUFFRCw0Q0FBa0IsR0FBbEI7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1lBQzFGLEtBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHFDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQztrRkFqRFUsZUFBZTt3REFBZixlQUFlO3dDQUlULG9CQUFvQjs7Ozs4SEFOMUIsQ0FBQyx3QkFBd0IsQ0FBQztJQUlpQztRQUE1RCxVQUFVLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLEVBQUUsWUFBWSxFQUFFOztzREFBb0I7MEJBckMzRjtDQXFGQyxBQXZERCxJQXVEQztTQWxEWSxlQUFlO2tEQUFmLGVBQWU7Y0FMM0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7YUFDdEM7O2tCQUVFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUVMLGVBQWU7bUJBQUMsb0JBQW9CLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlc1xyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHN0YXJ0V2l0aCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBOekNvbmZpZ1NlcnZpY2UsIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOekZvcm1MYWJlbENvbXBvbmVudCB9IGZyb20gJy4vbnotZm9ybS1sYWJlbC5jb21wb25lbnQnO1xyXG5cclxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ2Zvcm0nO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbnotZm9ybV0nLFxyXG4gIGV4cG9ydEFzOiAnbnpGb3JtJyxcclxuICBwcm92aWRlcnM6IFtOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekZvcm1EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBuekxheW91dCA9ICdob3Jpem9udGFsJztcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIGZhbHNlKSBASW5wdXRCb29sZWFuKCkgbnpOb0NvbG9uOiBib29sZWFuO1xyXG5cclxuICBAQ29udGVudENoaWxkcmVuKE56Rm9ybUxhYmVsQ29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIG56Rm9ybUxhYmVsQ29tcG9uZW50OiBRdWVyeUxpc3Q8TnpGb3JtTGFiZWxDb21wb25lbnQ+O1xyXG5cclxuICBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgdGhpcy5uelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB7XHJcbiAgICAgIFtgYW50LWZvcm0tJHt0aGlzLm56TGF5b3V0fWBdOiB0aGlzLm56TGF5b3V0XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUl0ZW1zRGVmYXVsdENvbG9uKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpGb3JtTGFiZWxDb21wb25lbnQpIHtcclxuICAgICAgdGhpcy5uekZvcm1MYWJlbENvbXBvbmVudC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5zZXREZWZhdWx0Tm9Db2xvbih0aGlzLm56Tm9Db2xvbikpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1mb3JtJyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCduek5vQ29sb24nKSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUl0ZW1zRGVmYXVsdENvbG9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm56Rm9ybUxhYmVsQ29tcG9uZW50LmNoYW5nZXMucGlwZShzdGFydFdpdGgobnVsbCksIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy51cGRhdGVJdGVtc0RlZmF1bHRDb2xvbigpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=