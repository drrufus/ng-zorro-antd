/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Host, Injector, Optional, Renderer2, Self, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { NzDropdownHigherOrderServiceToken, NzNoAnimationDirective, slideMotion } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import { NzMenuDropdownService } from './nz-menu-dropdown.service';
import * as i0 from "@angular/core";
import * as i1 from "./nz-menu-dropdown.service";
import * as i2 from "ng-zorro-antd/core";
import * as i3 from "@angular/common";
function NzDropdownMenuComponent_ng_template_0_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2069 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵlistener("mouseenter", function NzDropdownMenuComponent_ng_template_0_div_0_Template_div_mouseenter_0_listener($event) { i0.ɵɵrestoreView(_r2069); const ctx_r2068 = i0.ɵɵnextContext(2); return ctx_r2068.setVisibleStateWhen(true, "hover"); })("mouseleave", function NzDropdownMenuComponent_ng_template_0_div_0_Template_div_mouseleave_0_listener($event) { i0.ɵɵrestoreView(_r2069); const ctx_r2070 = i0.ɵɵnextContext(2); return ctx_r2070.setVisibleStateWhen(false, "hover"); });
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵprojection(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2067 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap("ant-dropdown nz-dropdown ant-dropdown-placement-" + ctx_r2067.nzPlacement);
    i0.ɵɵproperty("ngClass", ctx_r2067.nzOverlayClassName)("ngStyle", ctx_r2067.nzOverlayStyle)("@slideMotion", ctx_r2067.dropDownPosition)("@.disabled", ctx_r2067.noAnimation == null ? null : ctx_r2067.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r2067.noAnimation == null ? null : ctx_r2067.noAnimation.nzNoAnimation);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ant-table-filter-dropdown", ctx_r2067.nzTableFilter);
} }
function NzDropdownMenuComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NzDropdownMenuComponent_ng_template_0_div_0_Template, 3, 9, "div", 0);
} if (rf & 2) {
    const ctx_r2066 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r2066.open);
} }
const _c0 = ["*"];
export function dropdownMenuServiceFactory(injector) {
    return injector.get(NzMenuDropdownService);
}
export class NzDropdownMenuComponent {
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
    setVisibleStateWhen(visible, trigger = 'all') {
        if (this.nzTrigger === trigger || trigger === 'all') {
            this.visible$.next(visible);
        }
    }
    setValue(key, value) {
        this[key] = value;
        this.cdr.markForCheck();
    }
    ngAfterContentInit() {
        this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
    }
}
/** @nocollapse */ NzDropdownMenuComponent.ɵfac = function NzDropdownMenuComponent_Factory(t) { return new (t || NzDropdownMenuComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i1.NzMenuDropdownService), i0.ɵɵdirectiveInject(i2.NzNoAnimationDirective, 9)); };
/** @nocollapse */ NzDropdownMenuComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzDropdownMenuComponent, selectors: [["nz-dropdown-menu"]], viewQuery: function NzDropdownMenuComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(TemplateRef, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.templateRef = _t.first);
    } }, exportAs: ["nzDropdownMenu"], features: [i0.ɵɵProvidersFeature([
            NzMenuDropdownService,
            {
                provide: NzDropdownHigherOrderServiceToken,
                useFactory: dropdownMenuServiceFactory,
                deps: [[new Self(), Injector]]
            }
        ])], ngContentSelectors: _c0, decls: 1, vars: 0, consts: [[3, "class", "ngClass", "ngStyle", "nzNoAnimation", "mouseenter", "mouseleave", 4, "ngIf"], [3, "ngClass", "ngStyle", "nzNoAnimation", "mouseenter", "mouseleave"]], template: function NzDropdownMenuComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, NzDropdownMenuComponent_ng_template_0_Template, 1, 1, "ng-template");
    } }, directives: [i3.NgIf, i3.NgClass, i3.NgStyle, i2.NzNoAnimationDirective], styles: ["\n      :root .ant-dropdown.nz-dropdown {\n        top: 0;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "], encapsulation: 2, data: { animation: [slideMotion] }, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzDropdownMenuComponent, [{
        type: Component,
        args: [{
                selector: `nz-dropdown-menu`,
                templateUrl: './nz-dropdown-menu.component.html',
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
                styles: [
                    `
      :root .ant-dropdown.nz-dropdown {
        top: 0;
        left: 0;
        position: relative;
        width: 100%;
        margin-top: 4px;
        margin-bottom: 4px;
      }
    `
                ],
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i1.NzMenuDropdownService }, { type: i2.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { templateRef: [{
            type: ViewChild,
            args: [TemplateRef, { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJvcGRvd24tbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2Ryb3Bkb3duLyIsInNvdXJjZXMiOlsibnotZHJvcGRvd24tbWVudS5jb21wb25lbnQudHMiLCJuei1kcm9wZG93bi1tZW51LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRLEVBQ1IsU0FBUyxFQUNULElBQUksRUFDSixXQUFXLEVBQ1gsU0FBUyxFQUNULGdCQUFnQixFQUNoQixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlDQUFpQyxFQUFxQixzQkFBc0IsRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUvSCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7Ozs7O0lDMUJqRSw4QkFXRTtJQUhBLG9PQUFrQyxJQUFJLEVBQUUsT0FBTyxLQUFFLHVOQUNmLEtBQUssRUFBRSxPQUFPLEtBREM7SUFHakQsMkJBQ0U7SUFBQSxrQkFBWTtJQUNkLGlCQUFNO0lBQ1IsaUJBQU07OztJQVpKLHlGQUE4RTtJQUM5RSxzREFBOEIscUNBQUEsNENBQUEsMEZBQUEsNkZBQUE7SUFRekIsZUFBaUQ7SUFBakQsb0VBQWlEOzs7SUFYeEQsc0ZBV0U7OztJQVZBLHFDQUFZOzs7QUQ2QmhCLE1BQU0sVUFBVSwwQkFBMEIsQ0FBQyxRQUFrQjtJQUMzRCxPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUM3QyxDQUFDO0FBK0JELE1BQU0sT0FBTyx1QkFBdUI7SUF3QmxDLFlBQ1UsR0FBc0IsRUFDdEIsVUFBc0IsRUFDdEIsUUFBbUIsRUFDcEIsZ0JBQWtDLEVBQ2xDLHFCQUE0QyxFQUN4QixXQUFvQztRQUx2RCxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDcEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQ3hCLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQTdCakUsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUNiLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLHFCQUFnQixHQUFnQyxRQUFRLENBQUM7UUFDekQsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7UUFDbEMsY0FBUyxHQUFzQixPQUFPLENBQUM7UUFDdkMsZ0JBQVcsR0FBb0IsWUFBWSxDQUFDO1FBQzVDLHVCQUFrQixHQUFHLEVBQUUsQ0FBQztRQUN4QixtQkFBYyxHQUE4QixFQUFFLENBQUM7UUFDL0Msa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFzQm5CLENBQUM7SUFsQkosbUJBQW1CLENBQUMsT0FBZ0IsRUFBRSxVQUFxQyxLQUFLO1FBQzlFLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxPQUFPLElBQUksT0FBTyxLQUFLLEtBQUssRUFBRTtZQUNuRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM3QjtJQUNILENBQUM7SUFFRCxRQUFRLENBQTBDLEdBQU0sRUFBRSxLQUFjO1FBQ3RFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBV0Qsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNwSCxDQUFDOzs4RkFuQ1UsdUJBQXVCOzREQUF2Qix1QkFBdUI7NkJBV3ZCLFdBQVc7Ozs7d0VBbkNYO1lBQ1QscUJBQXFCO1lBQ3JCO2dCQUNFLE9BQU8sRUFBRSxpQ0FBaUM7Z0JBQzFDLFVBQVUsRUFBRSwwQkFBMEI7Z0JBQ3RDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQzthQUMvQjtTQUNGOztRQy9DSCxxRkFDRTsyVURzQ1ksQ0FBQyxXQUFXLENBQUM7a0RBeUJkLHVCQUF1QjtjQTdCbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFdBQVcsRUFBRSxtQ0FBbUM7Z0JBQ2hELFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFVBQVUsRUFBRSxDQUFDLFdBQVcsQ0FBQztnQkFDekIsU0FBUyxFQUFFO29CQUNULHFCQUFxQjtvQkFDckI7d0JBQ0UsT0FBTyxFQUFFLGlDQUFpQzt3QkFDMUMsVUFBVSxFQUFFLDBCQUEwQjt3QkFDdEMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO3FCQUMvQjtpQkFDRjtnQkFDRCxNQUFNLEVBQUU7b0JBQ047Ozs7Ozs7OztLQVNDO2lCQUNGO2dCQUNELG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7c0JBK0JJLElBQUk7O3NCQUFJLFFBQVE7O2tCQW5CbEIsU0FBUzttQkFBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSG9zdCxcclxuICBJbmplY3RvcixcclxuICBPcHRpb25hbCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2VsZixcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0NvbnRhaW5lclJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOekRyb3Bkb3duSGlnaGVyT3JkZXJTZXJ2aWNlVG9rZW4sIE56TWVudUJhc2VTZXJ2aWNlLCBOek5vQW5pbWF0aW9uRGlyZWN0aXZlLCBzbGlkZU1vdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE56TWVudURyb3Bkb3duU2VydmljZSB9IGZyb20gJy4vbnotbWVudS1kcm9wZG93bi5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCB0eXBlIE56UGxhY2VtZW50VHlwZSA9ICdib3R0b21MZWZ0JyB8ICdib3R0b21DZW50ZXInIHwgJ2JvdHRvbVJpZ2h0JyB8ICd0b3BMZWZ0JyB8ICd0b3BDZW50ZXInIHwgJ3RvcFJpZ2h0JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkcm9wZG93bk1lbnVTZXJ2aWNlRmFjdG9yeShpbmplY3RvcjogSW5qZWN0b3IpOiBOek1lbnVCYXNlU2VydmljZSB7XHJcbiAgcmV0dXJuIGluamVjdG9yLmdldChOek1lbnVEcm9wZG93blNlcnZpY2UpO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogYG56LWRyb3Bkb3duLW1lbnVgLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1kcm9wZG93bi1tZW51LmNvbXBvbmVudC5odG1sJyxcclxuICBleHBvcnRBczogYG56RHJvcGRvd25NZW51YCxcclxuICBhbmltYXRpb25zOiBbc2xpZGVNb3Rpb25dLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgTnpNZW51RHJvcGRvd25TZXJ2aWNlLFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOekRyb3Bkb3duSGlnaGVyT3JkZXJTZXJ2aWNlVG9rZW4sXHJcbiAgICAgIHVzZUZhY3Rvcnk6IGRyb3Bkb3duTWVudVNlcnZpY2VGYWN0b3J5LFxyXG4gICAgICBkZXBzOiBbW25ldyBTZWxmKCksIEluamVjdG9yXV1cclxuICAgIH1cclxuICBdLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICA6cm9vdCAuYW50LWRyb3Bkb3duLm56LWRyb3Bkb3duIHtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF0sXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpEcm9wZG93bk1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcclxuICBvcGVuID0gZmFsc2U7XHJcbiAgdHJpZ2dlcldpZHRoID0gMDtcclxuICBkcm9wRG93blBvc2l0aW9uOiAndG9wJyB8ICdjZW50ZXInIHwgJ2JvdHRvbScgPSAnYm90dG9tJztcclxuICB2aXNpYmxlJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcbiAgbnpUcmlnZ2VyOiAnY2xpY2snIHwgJ2hvdmVyJyA9ICdob3Zlcic7XHJcbiAgbnpQbGFjZW1lbnQ6IE56UGxhY2VtZW50VHlwZSA9ICdib3R0b21MZWZ0JztcclxuICBuek92ZXJsYXlDbGFzc05hbWUgPSAnJztcclxuICBuek92ZXJsYXlTdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xyXG4gIG56VGFibGVGaWx0ZXIgPSBmYWxzZTtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZiwgeyBzdGF0aWM6IHRydWUgfSkgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIHNldFZpc2libGVTdGF0ZVdoZW4odmlzaWJsZTogYm9vbGVhbiwgdHJpZ2dlcjogJ2NsaWNrJyB8ICdob3ZlcicgfCAnYWxsJyA9ICdhbGwnKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uelRyaWdnZXIgPT09IHRyaWdnZXIgfHwgdHJpZ2dlciA9PT0gJ2FsbCcpIHtcclxuICAgICAgdGhpcy52aXNpYmxlJC5uZXh0KHZpc2libGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0VmFsdWU8VCBleHRlbmRzIGtleW9mIE56RHJvcGRvd25NZW51Q29tcG9uZW50PihrZXk6IFQsIHZhbHVlOiB0aGlzW1RdKTogdm9pZCB7XHJcbiAgICB0aGlzW2tleV0gPSB2YWx1ZTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwdWJsaWMgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgIHB1YmxpYyBuek1lbnVEcm9wZG93blNlcnZpY2U6IE56TWVudURyb3Bkb3duU2VydmljZSxcclxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG4gICkge31cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLnJlbmRlcmVyLnBhcmVudE5vZGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgfVxyXG59XHJcbiIsIjxuZy10ZW1wbGF0ZT5cclxuICA8ZGl2XHJcbiAgICAqbmdJZj1cIm9wZW5cIlxyXG4gICAgY2xhc3M9XCJ7eyAnYW50LWRyb3Bkb3duIG56LWRyb3Bkb3duIGFudC1kcm9wZG93bi1wbGFjZW1lbnQtJyArIG56UGxhY2VtZW50IH19XCJcclxuICAgIFtuZ0NsYXNzXT1cIm56T3ZlcmxheUNsYXNzTmFtZVwiXHJcbiAgICBbbmdTdHlsZV09XCJuek92ZXJsYXlTdHlsZVwiXHJcbiAgICBbQHNsaWRlTW90aW9uXT1cImRyb3BEb3duUG9zaXRpb25cIlxyXG4gICAgW0AuZGlzYWJsZWRdPVwibm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIlxyXG4gICAgW256Tm9BbmltYXRpb25dPVwibm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIlxyXG4gICAgKG1vdXNlZW50ZXIpPVwic2V0VmlzaWJsZVN0YXRlV2hlbih0cnVlLCAnaG92ZXInKVwiXHJcbiAgICAobW91c2VsZWF2ZSk9XCJzZXRWaXNpYmxlU3RhdGVXaGVuKGZhbHNlLCAnaG92ZXInKVwiXHJcbiAgPlxyXG4gICAgPGRpdiBbY2xhc3MuYW50LXRhYmxlLWZpbHRlci1kcm9wZG93bl09XCJuelRhYmxlRmlsdGVyXCI+XHJcbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=