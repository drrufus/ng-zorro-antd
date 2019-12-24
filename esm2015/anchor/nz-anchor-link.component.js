/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ElementRef, Input, Renderer2, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NzAnchorComponent } from './nz-anchor.component';
import * as i0 from "@angular/core";
import * as i1 from "./nz-anchor.component";
import * as i2 from "@angular/cdk/platform";
import * as i3 from "@angular/common";
const _c0 = ["nzTemplate"];
function NzAnchorLinkComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r359 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r359.titleStr);
} }
const _c1 = ["*"];
export class NzAnchorLinkComponent {
    constructor(elementRef, anchorComp, cdr, platform, renderer) {
        this.elementRef = elementRef;
        this.anchorComp = anchorComp;
        this.cdr = cdr;
        this.platform = platform;
        this.nzHref = '#';
        this.titleStr = '';
        this.active = false;
        renderer.addClass(elementRef.nativeElement, 'ant-anchor-link');
    }
    set nzTitle(value) {
        if (value instanceof TemplateRef) {
            this.titleStr = null;
            this.titleTpl = value;
        }
        else {
            this.titleStr = value;
        }
    }
    ngOnInit() {
        this.anchorComp.registerLink(this);
    }
    goToClick(e) {
        e.preventDefault();
        e.stopPropagation();
        if (this.platform.isBrowser) {
            this.anchorComp.handleScrollTo(this);
        }
    }
    markForCheck() {
        this.cdr.markForCheck();
    }
    ngOnDestroy() {
        this.anchorComp.unregisterLink(this);
    }
}
/** @nocollapse */ NzAnchorLinkComponent.ɵfac = function NzAnchorLinkComponent_Factory(t) { return new (t || NzAnchorLinkComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.NzAnchorComponent), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.Platform), i0.ɵɵdirectiveInject(i0.Renderer2)); };
/** @nocollapse */ NzAnchorLinkComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzAnchorLinkComponent, selectors: [["nz-link"]], contentQueries: function NzAnchorLinkComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, _c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.nzTemplate = _t.first);
    } }, hostBindings: function NzAnchorLinkComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        i0.ɵɵallocHostVars(1);
    } if (rf & 2) {
        i0.ɵɵclassProp("ant-anchor-link-active", ctx.active);
    } }, inputs: { nzHref: "nzHref", nzTitle: "nzTitle" }, exportAs: ["nzLink"], ngContentSelectors: _c1, decls: 3, vars: 4, consts: [[1, "ant-anchor-link-title", 3, "href", "title", "click"], [4, "ngIf", "ngIfElse"]], template: function NzAnchorLinkComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "a", 0);
        i0.ɵɵlistener("click", function NzAnchorLinkComponent_Template_a_click_0_listener($event) { return ctx.goToClick($event); });
        i0.ɵɵtemplate(1, NzAnchorLinkComponent_span_1_Template, 2, 1, "span", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵprojection(2);
    } if (rf & 2) {
        i0.ɵɵpropertyInterpolate("href", ctx.nzHref, i0.ɵɵsanitizeUrl);
        i0.ɵɵpropertyInterpolate("title", ctx.titleStr);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.titleStr)("ngIfElse", ctx.titleTpl || ctx.nzTemplate);
    } }, directives: [i3.NgIf], styles: ["\n      nz-link {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzAnchorLinkComponent, [{
        type: Component,
        args: [{
                selector: 'nz-link',
                exportAs: 'nzLink',
                preserveWhitespaces: false,
                templateUrl: './nz-anchor-link.component.html',
                host: {
                    '[class.ant-anchor-link-active]': 'active'
                },
                styles: [
                    `
      nz-link {
        display: block;
      }
    `
                ],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.NzAnchorComponent }, { type: i0.ChangeDetectorRef }, { type: i2.Platform }, { type: i0.Renderer2 }]; }, { nzHref: [{
            type: Input
        }], nzTitle: [{
            type: Input
        }], nzTemplate: [{
            type: ContentChild,
            args: ['nzTemplate', { static: false }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYW5jaG9yLWxpbmsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9hbmNob3IvIiwic291cmNlcyI6WyJuei1hbmNob3ItbGluay5jb21wb25lbnQudHMiLCJuei1hbmNob3ItbGluay5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUdMLFNBQVMsRUFDVCxXQUFXLEVBQ1gsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7O0lDakJ4RCw0QkFBb0Q7SUFBQSxZQUFjO0lBQUEsaUJBQU87OztJQUFyQixlQUFjO0lBQWQsdUNBQWM7OztBRHFDcEUsTUFBTSxPQUFPLHFCQUFxQjtJQW9CaEMsWUFDUyxVQUFzQixFQUNyQixVQUE2QixFQUM3QixHQUFzQixFQUN0QixRQUFrQixFQUMxQixRQUFtQjtRQUpaLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDckIsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFDN0IsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQXZCbkIsV0FBTSxHQUFHLEdBQUcsQ0FBQztRQUV0QixhQUFRLEdBQWtCLEVBQUUsQ0FBQztRQUc3QixXQUFNLEdBQVksS0FBSyxDQUFDO1FBcUJ0QixRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBcEJELElBQ0ksT0FBTyxDQUFDLEtBQWlDO1FBQzNDLElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtZQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztTQUN2QjthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7U0FDdkI7SUFDSCxDQUFDO0lBY0QsUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxTQUFTLENBQUMsQ0FBUTtRQUNoQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3BCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEM7SUFDSCxDQUFDO0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDOzswRkFoRFUscUJBQXFCOzBEQUFyQixxQkFBcUI7Ozs7Ozs7Ozs7O1FDM0NsQyw0QkFNRTtRQUxBLG1HQUFTLHFCQUFpQixJQUFDO1FBSzNCLHdFQUFvRDtRQUN0RCxpQkFBSTtRQUNKLGtCQUFZOztRQU5WLDhEQUFtQjtRQUVuQiwrQ0FBc0I7UUFFaEIsZUFBNkM7UUFBN0MsbUNBQTZDLDRDQUFBOztrRERxQ3hDLHFCQUFxQjtjQWxCakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsV0FBVyxFQUFFLGlDQUFpQztnQkFDOUMsSUFBSSxFQUFFO29CQUNKLGdDQUFnQyxFQUFFLFFBQVE7aUJBQzNDO2dCQUNELE1BQU0sRUFBRTtvQkFDTjs7OztLQUlDO2lCQUNGO2dCQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7a0JBRUUsS0FBSzs7a0JBT0wsS0FBSzs7a0JBVUwsWUFBWTttQkFBQyxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOekFuY2hvckNvbXBvbmVudCB9IGZyb20gJy4vbnotYW5jaG9yLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LWxpbmsnLFxyXG4gIGV4cG9ydEFzOiAnbnpMaW5rJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotYW5jaG9yLWxpbmsuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LWFuY2hvci1saW5rLWFjdGl2ZV0nOiAnYWN0aXZlJ1xyXG4gIH0sXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIG56LWxpbmsge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekFuY2hvckxpbmtDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgbnpIcmVmID0gJyMnO1xyXG5cclxuICB0aXRsZVN0cjogc3RyaW5nIHwgbnVsbCA9ICcnO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICB0aXRsZVRwbDogVGVtcGxhdGVSZWY8YW55PjtcclxuICBhY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpUaXRsZSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcclxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XHJcbiAgICAgIHRoaXMudGl0bGVTdHIgPSBudWxsO1xyXG4gICAgICB0aGlzLnRpdGxlVHBsID0gdmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnRpdGxlU3RyID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAQ29udGVudENoaWxkKCduelRlbXBsYXRlJywgeyBzdGF0aWM6IGZhbHNlIH0pIG56VGVtcGxhdGU6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBhbmNob3JDb21wOiBOekFuY2hvckNvbXBvbmVudCxcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxyXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMlxyXG4gICkge1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWFuY2hvci1saW5rJyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuYW5jaG9yQ29tcC5yZWdpc3RlckxpbmsodGhpcyk7XHJcbiAgfVxyXG5cclxuICBnb1RvQ2xpY2soZTogRXZlbnQpOiB2b2lkIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgdGhpcy5hbmNob3JDb21wLmhhbmRsZVNjcm9sbFRvKHRoaXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbWFya0ZvckNoZWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuYW5jaG9yQ29tcC51bnJlZ2lzdGVyTGluayh0aGlzKTtcclxuICB9XHJcbn1cclxuIiwiPGFcclxuICAoY2xpY2spPVwiZ29Ub0NsaWNrKCRldmVudClcIlxyXG4gIGhyZWY9XCJ7eyBuekhyZWYgfX1cIlxyXG4gIGNsYXNzPVwiYW50LWFuY2hvci1saW5rLXRpdGxlXCJcclxuICB0aXRsZT1cInt7IHRpdGxlU3RyIH19XCJcclxuPlxyXG4gIDxzcGFuICpuZ0lmPVwidGl0bGVTdHI7IGVsc2UgdGl0bGVUcGwgfHwgbnpUZW1wbGF0ZVwiPnt7IHRpdGxlU3RyIH19PC9zcGFuPlxyXG48L2E+XHJcbjxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuIl19