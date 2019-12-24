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
    var _r2074 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵlistener("mouseenter", function NzDropdownMenuComponent_ng_template_0_div_0_Template_div_mouseenter_0_listener($event) { i0.ɵɵrestoreView(_r2074); var ctx_r2073 = i0.ɵɵnextContext(2); return ctx_r2073.setVisibleStateWhen(true, "hover"); })("mouseleave", function NzDropdownMenuComponent_ng_template_0_div_0_Template_div_mouseleave_0_listener($event) { i0.ɵɵrestoreView(_r2074); var ctx_r2075 = i0.ɵɵnextContext(2); return ctx_r2075.setVisibleStateWhen(false, "hover"); });
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵprojection(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2072 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap("ant-dropdown nz-dropdown ant-dropdown-placement-" + ctx_r2072.nzPlacement);
    i0.ɵɵproperty("ngClass", ctx_r2072.nzOverlayClassName)("ngStyle", ctx_r2072.nzOverlayStyle)("@slideMotion", ctx_r2072.dropDownPosition)("@.disabled", ctx_r2072.noAnimation == null ? null : ctx_r2072.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r2072.noAnimation == null ? null : ctx_r2072.noAnimation.nzNoAnimation);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ant-table-filter-dropdown", ctx_r2072.nzTableFilter);
} }
function NzDropdownMenuComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NzDropdownMenuComponent_ng_template_0_div_0_Template, 3, 9, "div", 0);
} if (rf & 2) {
    var ctx_r2071 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r2071.open);
} }
var _c0 = ["*"];
export function dropdownMenuServiceFactory(injector) {
    return injector.get(NzMenuDropdownService);
}
var NzDropdownMenuComponent = /** @class */ (function () {
    function NzDropdownMenuComponent(cdr, elementRef, renderer, viewContainerRef, nzMenuDropdownService, noAnimation) {
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
    NzDropdownMenuComponent.prototype.setVisibleStateWhen = function (visible, trigger) {
        if (trigger === void 0) { trigger = 'all'; }
        if (this.nzTrigger === trigger || trigger === 'all') {
            this.visible$.next(visible);
        }
    };
    NzDropdownMenuComponent.prototype.setValue = function (key, value) {
        this[key] = value;
        this.cdr.markForCheck();
    };
    NzDropdownMenuComponent.prototype.ngAfterContentInit = function () {
        this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
    };
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
    return NzDropdownMenuComponent;
}());
export { NzDropdownMenuComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzDropdownMenuComponent, [{
        type: Component,
        args: [{
                selector: "nz-dropdown-menu",
                templateUrl: './nz-dropdown-menu.component.html',
                exportAs: "nzDropdownMenu",
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
                    "\n      :root .ant-dropdown.nz-dropdown {\n        top: 0;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJvcGRvd24tbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2Ryb3Bkb3duLyIsInNvdXJjZXMiOlsibnotZHJvcGRvd24tbWVudS5jb21wb25lbnQudHMiLCJuei1kcm9wZG93bi1tZW51LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRLEVBQ1IsU0FBUyxFQUNULElBQUksRUFDSixXQUFXLEVBQ1gsU0FBUyxFQUNULGdCQUFnQixFQUNoQixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlDQUFpQyxFQUFxQixzQkFBc0IsRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUvSCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7Ozs7O0lDMUJqRSw4QkFXRTtJQUhBLGtPQUFrQyxJQUFJLEVBQUUsT0FBTyxLQUFFLHFOQUNmLEtBQUssRUFBRSxPQUFPLEtBREM7SUFHakQsMkJBQ0U7SUFBQSxrQkFBWTtJQUNkLGlCQUFNO0lBQ1IsaUJBQU07OztJQVpKLHlGQUE4RTtJQUM5RSxzREFBOEIscUNBQUEsNENBQUEsMEZBQUEsNkZBQUE7SUFRekIsZUFBaUQ7SUFBakQsb0VBQWlEOzs7SUFYeEQsc0ZBV0U7OztJQVZBLHFDQUFZOzs7QUQ2QmhCLE1BQU0sVUFBVSwwQkFBMEIsQ0FBQyxRQUFrQjtJQUMzRCxPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUM3QyxDQUFDO0FBRUQ7SUFxREUsaUNBQ1UsR0FBc0IsRUFDdEIsVUFBc0IsRUFDdEIs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YS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEhvc3QsXHJcbiAgSW5qZWN0b3IsXHJcbiAgT3B0aW9uYWwsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNlbGYsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdDb250YWluZXJSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpEcm9wZG93bkhpZ2hlck9yZGVyU2VydmljZVRva2VuLCBOek1lbnVCYXNlU2VydmljZSwgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSwgc2xpZGVNb3Rpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBOek1lbnVEcm9wZG93blNlcnZpY2UgfSBmcm9tICcuL256LW1lbnUtZHJvcGRvd24uc2VydmljZSc7XHJcblxyXG5leHBvcnQgdHlwZSBOelBsYWNlbWVudFR5cGUgPSAnYm90dG9tTGVmdCcgfCAnYm90dG9tQ2VudGVyJyB8ICdib3R0b21SaWdodCcgfCAndG9wTGVmdCcgfCAndG9wQ2VudGVyJyB8ICd0b3BSaWdodCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZHJvcGRvd25NZW51U2VydmljZUZhY3RvcnkoaW5qZWN0b3I6IEluamVjdG9yKTogTnpNZW51QmFzZVNlcnZpY2Uge1xyXG4gIHJldHVybiBpbmplY3Rvci5nZXQoTnpNZW51RHJvcGRvd25TZXJ2aWNlKTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IGBuei1kcm9wZG93bi1tZW51YCxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotZHJvcGRvd24tbWVudS5jb21wb25lbnQuaHRtbCcsXHJcbiAgZXhwb3J0QXM6IGBuekRyb3Bkb3duTWVudWAsXHJcbiAgYW5pbWF0aW9uczogW3NsaWRlTW90aW9uXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIE56TWVudURyb3Bkb3duU2VydmljZSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTnpEcm9wZG93bkhpZ2hlck9yZGVyU2VydmljZVRva2VuLFxyXG4gICAgICB1c2VGYWN0b3J5OiBkcm9wZG93bk1lbnVTZXJ2aWNlRmFjdG9yeSxcclxuICAgICAgZGVwczogW1tuZXcgU2VsZigpLCBJbmplY3Rvcl1dXHJcbiAgICB9XHJcbiAgXSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgOnJvb3QgLmFudC1kcm9wZG93bi5uei1kcm9wZG93biB7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE56RHJvcGRvd25NZW51Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XHJcbiAgb3BlbiA9IGZhbHNlO1xyXG4gIHRyaWdnZXJXaWR0aCA9IDA7XHJcbiAgZHJvcERvd25Qb3NpdGlvbjogJ3RvcCcgfCAnY2VudGVyJyB8ICdib3R0b20nID0gJ2JvdHRvbSc7XHJcbiAgdmlzaWJsZSQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG4gIG56VHJpZ2dlcjogJ2NsaWNrJyB8ICdob3ZlcicgPSAnaG92ZXInO1xyXG4gIG56UGxhY2VtZW50OiBOelBsYWNlbWVudFR5cGUgPSAnYm90dG9tTGVmdCc7XHJcbiAgbnpPdmVybGF5Q2xhc3NOYW1lID0gJyc7XHJcbiAgbnpPdmVybGF5U3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcclxuICBuelRhYmxlRmlsdGVyID0gZmFsc2U7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYsIHsgc3RhdGljOiB0cnVlIH0pIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBzZXRWaXNpYmxlU3RhdGVXaGVuKHZpc2libGU6IGJvb2xlYW4sIHRyaWdnZXI6ICdjbGljaycgfCAnaG92ZXInIHwgJ2FsbCcgPSAnYWxsJyk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpUcmlnZ2VyID09PSB0cmlnZ2VyIHx8IHRyaWdnZXIgPT09ICdhbGwnKSB7XHJcbiAgICAgIHRoaXMudmlzaWJsZSQubmV4dCh2aXNpYmxlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldFZhbHVlPFQgZXh0ZW5kcyBrZXlvZiBOekRyb3Bkb3duTWVudUNvbXBvbmVudD4oa2V5OiBULCB2YWx1ZTogdGhpc1tUXSk6IHZvaWQge1xyXG4gICAgdGhpc1trZXldID0gdmFsdWU7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHVibGljIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBwdWJsaWMgbnpNZW51RHJvcGRvd25TZXJ2aWNlOiBOek1lbnVEcm9wZG93blNlcnZpY2UsXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxuICApIHt9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy5yZW5kZXJlci5wYXJlbnROb2RlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSwgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG4gIH1cclxufVxyXG4iLCI8bmctdGVtcGxhdGU+XHJcbiAgPGRpdlxyXG4gICAgKm5nSWY9XCJvcGVuXCJcclxuICAgIGNsYXNzPVwie3sgJ2FudC1kcm9wZG93biBuei1kcm9wZG93biBhbnQtZHJvcGRvd24tcGxhY2VtZW50LScgKyBuelBsYWNlbWVudCB9fVwiXHJcbiAgICBbbmdDbGFzc109XCJuek92ZXJsYXlDbGFzc05hbWVcIlxyXG4gICAgW25nU3R5bGVdPVwibnpPdmVybGF5U3R5bGVcIlxyXG4gICAgW0BzbGlkZU1vdGlvbl09XCJkcm9wRG93blBvc2l0aW9uXCJcclxuICAgIFtALmRpc2FibGVkXT1cIm5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCJcclxuICAgIFtuek5vQW5pbWF0aW9uXT1cIm5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCJcclxuICAgIChtb3VzZWVudGVyKT1cInNldFZpc2libGVTdGF0ZVdoZW4odHJ1ZSwgJ2hvdmVyJylcIlxyXG4gICAgKG1vdXNlbGVhdmUpPVwic2V0VmlzaWJsZVN0YXRlV2hlbihmYWxzZSwgJ2hvdmVyJylcIlxyXG4gID5cclxuICAgIDxkaXYgW2NsYXNzLmFudC10YWJsZS1maWx0ZXItZHJvcGRvd25dPVwibnpUYWJsZUZpbHRlclwiPlxyXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuIl19