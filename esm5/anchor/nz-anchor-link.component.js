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
var _c0 = ["nzTemplate"];
function NzAnchorLinkComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r365 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r365.titleStr);
} }
var _c1 = ["*"];
var NzAnchorLinkComponent = /** @class */ (function () {
    function NzAnchorLinkComponent(elementRef, anchorComp, cdr, platform, renderer) {
        this.elementRef = elementRef;
        this.anchorComp = anchorComp;
        this.cdr = cdr;
        this.platform = platform;
        this.nzHref = '#';
        this.titleStr = '';
        this.active = false;
        renderer.addClass(elementRef.nativeElement, 'ant-anchor-link');
    }
    Object.defineProperty(NzAnchorLinkComponent.prototype, "nzTitle", {
        set: function (value) {
            if (value instanceof TemplateRef) {
                this.titleStr = null;
                this.titleTpl = value;
            }
            else {
                this.titleStr = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    NzAnchorLinkComponent.prototype.ngOnInit = function () {
        this.anchorComp.registerLink(this);
    };
    NzAnchorLinkComponent.prototype.goToClick = function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (this.platform.isBrowser) {
            this.anchorComp.handleScrollTo(this);
        }
    };
    NzAnchorLinkComponent.prototype.markForCheck = function () {
        this.cdr.markForCheck();
    };
    NzAnchorLinkComponent.prototype.ngOnDestroy = function () {
        this.anchorComp.unregisterLink(this);
    };
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
    return NzAnchorLinkComponent;
}());
export { NzAnchorLinkComponent };
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
                    "\n      nz-link {\n        display: block;\n      }\n    "
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYW5jaG9yLWxpbmsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9hbmNob3IvIiwic291cmNlcyI6WyJuei1hbmNob3ItbGluay5jb21wb25lbnQudHMiLCJuei1hbmNob3ItbGluay5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUdMLFNBQVMsRUFDVCxXQUFXLEVBQ1gsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7O0lDakJ4RCw0QkFBb0Q7SUFBQSxZQUFjO0lBQUEsaUJBQU87OztJQUFyQixlQUFjO0lBQWQsdUNBQWM7OztBRG1CcEU7SUFzQ0UsK0JBQ1MsVUFBc0IsRUFDckIsVUFBNkIsRUFDN0IsR0FBc0IsRUFDdEIsUUFBa0IsRUFDMUIsUUFBbUI7UUFKWixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3JCLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBQzdCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQVU7UUF2Qm5CLFdBQU0sR0FBRyxHQUFHLENBQUM7UUFFdEIsYUFBUSxHQUFrQixFQUFFLENBQUM7UUFHN0IsV0FBTSxHQUFZLEtBQUssQ0FBQztRQXFCdEIsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFDakUsQ0FBQztJQXBCRCxzQkFDSSwwQ0FBTzthQURYLFVBQ1ksS0FBaUM7WUFDM0MsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO2dCQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7YUFDdkI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7YUFDdkI7UUFDSCxDQUFDOzs7T0FBQTtJQWNELHdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQseUNBQVMsR0FBVCxVQUFVLENBQVE7UUFDaEIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNwQixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQztJQUVELDRDQUFZLEdBQVo7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCwyQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs4RkFoRFUscUJBQXFCOzhEQUFyQixxQkFBcUI7Ozs7Ozs7Ozs7O1lDM0NsQyw0QkFNRTtZQUxBLG1HQUFTLHFCQUFpQixJQUFDO1lBSzNCLHdFQUFvRDtZQUN0RCxpQkFBSTtZQUNKLGtCQUFZOztZQU5WLDhEQUFtQjtZQUVuQiwrQ0FBc0I7WUFFaEIsZUFBNkM7WUFBN0MsbUNBQTZDLDRDQUFBOztnQ0ROckQ7Q0E0RkMsQUFuRUQsSUFtRUM7U0FqRFkscUJBQXFCO2tEQUFyQixxQkFBcUI7Y0FsQmpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsU0FBUztnQkFDbkIsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLFdBQVcsRUFBRSxpQ0FBaUM7Z0JBQzlDLElBQUksRUFBRTtvQkFDSixnQ0FBZ0MsRUFBRSxRQUFRO2lCQUMzQztnQkFDRCxNQUFNLEVBQUU7b0JBQ04sMkRBSUM7aUJBQ0Y7Z0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOztrQkFFRSxLQUFLOztrQkFPTCxLQUFLOztrQkFVTCxZQUFZO21CQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56QW5jaG9yQ29tcG9uZW50IH0gZnJvbSAnLi9uei1hbmNob3IuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotbGluaycsXHJcbiAgZXhwb3J0QXM6ICduekxpbmsnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1hbmNob3ItbGluay5jb21wb25lbnQuaHRtbCcsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtYW5jaG9yLWxpbmstYWN0aXZlXSc6ICdhY3RpdmUnXHJcbiAgfSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgbnotbGluayB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE56QW5jaG9yTGlua0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBuekhyZWYgPSAnIyc7XHJcblxyXG4gIHRpdGxlU3RyOiBzdHJpbmcgfCBudWxsID0gJyc7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHRpdGxlVHBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIGFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelRpdGxlKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xyXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcclxuICAgICAgdGhpcy50aXRsZVN0ciA9IG51bGw7XHJcbiAgICAgIHRoaXMudGl0bGVUcGwgPSB2YWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudGl0bGVTdHIgPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoJ256VGVtcGxhdGUnLCB7IHN0YXRpYzogZmFsc2UgfSkgbnpUZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIGFuY2hvckNvbXA6IE56QW5jaG9yQ29tcG9uZW50LFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sXHJcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyXHJcbiAgKSB7XHJcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtYW5jaG9yLWxpbmsnKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5hbmNob3JDb21wLnJlZ2lzdGVyTGluayh0aGlzKTtcclxuICB9XHJcblxyXG4gIGdvVG9DbGljayhlOiBFdmVudCk6IHZvaWQge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xyXG4gICAgICB0aGlzLmFuY2hvckNvbXAuaGFuZGxlU2Nyb2xsVG8odGhpcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtYXJrRm9yQ2hlY2soKTogdm9pZCB7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5hbmNob3JDb21wLnVucmVnaXN0ZXJMaW5rKHRoaXMpO1xyXG4gIH1cclxufVxyXG4iLCI8YVxyXG4gIChjbGljayk9XCJnb1RvQ2xpY2soJGV2ZW50KVwiXHJcbiAgaHJlZj1cInt7IG56SHJlZiB9fVwiXHJcbiAgY2xhc3M9XCJhbnQtYW5jaG9yLWxpbmstdGl0bGVcIlxyXG4gIHRpdGxlPVwie3sgdGl0bGVTdHIgfX1cIlxyXG4+XHJcbiAgPHNwYW4gKm5nSWY9XCJ0aXRsZVN0cjsgZWxzZSB0aXRsZVRwbCB8fCBuelRlbXBsYXRlXCI+e3sgdGl0bGVTdHIgfX08L3NwYW4+XHJcbjwvYT5cclxuPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4iXX0=