/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { emptyImage } from './nz-empty-config';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "ng-zorro-antd/i18n";
import * as i3 from "ng-zorro-antd/core";
import * as i4 from "@angular/common";
var _c0 = [1, "ant-empty"];
function NzEmptyComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "img", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r442 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", ctx_r442.nzNotFoundImage || ctx_r442.defaultSvg, i0.ɵɵsanitizeUrl)("alt", ctx_r442.isContentString ? ctx_r442.nzNotFoundContent : "empty");
} }
function NzEmptyComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r443 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r443.shouldRenderContent ? ctx_r443.nzNotFoundContent : ctx_r443.locale["description"], " ");
} }
function NzEmptyComponent_div_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r445 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r445.nzNotFoundFooter, " ");
} }
function NzEmptyComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtemplate(1, NzEmptyComponent_div_4_ng_container_1_Template, 2, 1, "ng-container", 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r444 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r444.nzNotFoundFooter);
} }
var NzEmptyComponent = /** @class */ (function () {
    function NzEmptyComponent(sanitizer, i18n, cdr) {
        this.sanitizer = sanitizer;
        this.i18n = i18n;
        this.cdr = cdr;
        // NOTE: It would be very hack to use `ContentChild`, because Angular could
        // tell if user actually pass something to <ng-content>.
        // See: https://github.com/angular/angular/issues/12530.
        // I can use a directive but this would expose the name `footer`.
        // @ContentChild(TemplateRef, {static: false}) nzNotFoundFooter: TemplateRef<void>;
        this.defaultSvg = this.sanitizer.bypassSecurityTrustResourceUrl(emptyImage);
        this.isContentString = false;
        this.locale = {};
        this.destroy$ = new Subject();
    }
    Object.defineProperty(NzEmptyComponent.prototype, "shouldRenderContent", {
        get: function () {
            var content = this.nzNotFoundContent;
            return !!(content || typeof content === 'string');
        },
        enumerable: true,
        configurable: true
    });
    NzEmptyComponent.prototype.ngOnChanges = function (changes) {
        var nzNotFoundContent = changes.nzNotFoundContent;
        if (nzNotFoundContent) {
            this.isContentString = typeof nzNotFoundContent.currentValue === 'string';
        }
    };
    NzEmptyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(function () {
            _this.locale = _this.i18n.getLocaleData('Empty');
            _this.cdr.markForCheck();
        });
    };
    NzEmptyComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /** @nocollapse */ NzEmptyComponent.ɵfac = function NzEmptyComponent_Factory(t) { return new (t || NzEmptyComponent)(i0.ɵɵdirectiveInject(i1.DomSanitizer), i0.ɵɵdirectiveInject(i2.NzI18nService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ NzEmptyComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzEmptyComponent, selectors: [["nz-empty"]], hostBindings: function NzEmptyComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            i0.ɵɵelementHostAttrs(_c0);
        } }, inputs: { nzNotFoundImage: "nzNotFoundImage", nzNotFoundContent: "nzNotFoundContent", nzNotFoundFooter: "nzNotFoundFooter" }, exportAs: ["nzEmpty"], features: [i0.ɵɵNgOnChangesFeature()], decls: 5, vars: 3, consts: [[1, "ant-empty-image"], [4, "nzStringTemplateOutlet"], [1, "ant-empty-description"], ["class", "ant-empty-footer", 4, "ngIf"], [3, "src", "alt"], [1, "ant-empty-footer"]], template: function NzEmptyComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, NzEmptyComponent_ng_container_1_Template, 2, 2, "ng-container", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "p", 2);
            i0.ɵɵtemplate(3, NzEmptyComponent_ng_container_3_Template, 2, 1, "ng-container", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, NzEmptyComponent_div_4_Template, 2, 1, "div", 3);
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzStringTemplateOutlet", ctx.nzNotFoundImage);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("nzStringTemplateOutlet", ctx.nzNotFoundContent);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.nzNotFoundFooter);
        } }, directives: [i3.NzStringTemplateOutletDirective, i4.NgIf], styles: ["nz-empty { display: block; }"], encapsulation: 2, changeDetection: 0 });
    return NzEmptyComponent;
}());
export { NzEmptyComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzEmptyComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-empty',
                exportAs: 'nzEmpty',
                templateUrl: './nz-empty.component.html',
                styles: ['nz-empty { display: block; }'],
                host: {
                    class: 'ant-empty'
                }
            }]
    }], function () { return [{ type: i1.DomSanitizer }, { type: i2.NzI18nService }, { type: i0.ChangeDetectorRef }]; }, { nzNotFoundImage: [{
            type: Input
        }], nzNotFoundContent: [{
            type: Input
        }], nzNotFoundFooter: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZW1wdHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9lbXB0eS8iLCJzb3VyY2VzIjpbIm56LWVtcHR5LmNvbXBvbmVudC50cyIsIm56LWVtcHR5LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxLQUFLLEVBTUwsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7OztJQ3pCN0MsNkJBQ0U7SUFBQSx5QkFJRjtJQUFBLDBCQUFlOzs7SUFIWCxlQUFxQztJQUFyQyx1RkFBcUMsd0VBQUE7OztJQU16Qyw2QkFDRTtJQUFBLFlBQ0Y7SUFBQSwwQkFBZTs7O0lBRGIsZUFDRjtJQURFLDJIQUNGOzs7SUFHQSw2QkFDRTtJQUFBLFlBQ0Y7SUFBQSwwQkFBZTs7O0lBRGIsZUFDRjtJQURFLDBEQUNGOzs7SUFIRiw4QkFDRTtJQUFBLHlGQUNFO0lBRUosaUJBQU07OztJQUhVLGVBQTBDO0lBQTFDLGtFQUEwQzs7QURjMUQ7SUFpQ0UsMEJBQW9CLFNBQXVCLEVBQVUsSUFBbUIsRUFBVSxHQUFzQjtRQUFwRixjQUFTLEdBQVQsU0FBUyxDQUFjO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBZTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBakJ4RywyRUFBMkU7UUFDM0Usd0RBQXdEO1FBQ3hELHdEQUF3RDtRQUN4RCxpRUFBaUU7UUFDakUsbUZBQW1GO1FBRW5GLGVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLDhCQUE4QixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZFLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLFdBQU0sR0FBOEIsRUFBRSxDQUFDO1FBTy9CLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0lBRW9FLENBQUM7SUFQNUcsc0JBQUksaURBQW1CO2FBQXZCO1lBQ0UsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1lBQ3ZDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsQ0FBQyxDQUFDO1FBQ3BELENBQUM7OztPQUFBO0lBTUQsc0NBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQ3hCLElBQUEsNkNBQWlCLENBQWE7UUFDdEMsSUFBSSxpQkFBaUIsRUFBRTtZQUNyQixJQUFJLENBQUMsZUFBZSxHQUFHLE9BQU8saUJBQWlCLENBQUMsWUFBWSxLQUFLLFFBQVEsQ0FBQztTQUMzRTtJQUNILENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUM5RCxLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQy9DLEtBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsc0NBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDO29GQXpDVSxnQkFBZ0I7eURBQWhCLGdCQUFnQjs7O1lDdkM3Qiw4QkFDRTtZQUFBLG1GQUNFO1lBS0osaUJBQU07WUFDTiw0QkFDRTtZQUFBLG1GQUNFO1lBRUosaUJBQUk7WUFDSixpRUFDRTs7WUFiYyxlQUF5QztZQUF6Qyw0REFBeUM7WUFRekMsZUFBMkM7WUFBM0MsOERBQTJDO1lBSTdCLGVBQXdCO1lBQXhCLDJDQUF3Qjs7MkJEYnREO0NBaUZDLEFBckRELElBcURDO1NBMUNZLGdCQUFnQjtrREFBaEIsZ0JBQWdCO2NBWDVCLFNBQVM7ZUFBQztnQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFFBQVEsRUFBRSxVQUFVO2dCQUNwQixRQUFRLEVBQUUsU0FBUztnQkFDbkIsV0FBVyxFQUFFLDJCQUEyQjtnQkFDeEMsTUFBTSxFQUFFLENBQUMsOEJBQThCLENBQUM7Z0JBQ3hDLElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUsV0FBVztpQkFDbkI7YUFDRjs7a0JBRUUsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuXHJcbmltcG9ydCB7IGVtcHR5SW1hZ2UgfSBmcm9tICcuL256LWVtcHR5LWNvbmZpZyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHNlbGVjdG9yOiAnbnotZW1wdHknLFxyXG4gIGV4cG9ydEFzOiAnbnpFbXB0eScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LWVtcHR5LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZXM6IFsnbnotZW1wdHkgeyBkaXNwbGF5OiBibG9jazsgfSddLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnYW50LWVtcHR5J1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56RW1wdHlDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBuek5vdEZvdW5kSW1hZ2U6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56Tm90Rm91bmRDb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuek5vdEZvdW5kRm9vdGVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgLy8gTk9URTogSXQgd291bGQgYmUgdmVyeSBoYWNrIHRvIHVzZSBgQ29udGVudENoaWxkYCwgYmVjYXVzZSBBbmd1bGFyIGNvdWxkXHJcbiAgLy8gdGVsbCBpZiB1c2VyIGFjdHVhbGx5IHBhc3Mgc29tZXRoaW5nIHRvIDxuZy1jb250ZW50Pi5cclxuICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzEyNTMwLlxyXG4gIC8vIEkgY2FuIHVzZSBhIGRpcmVjdGl2ZSBidXQgdGhpcyB3b3VsZCBleHBvc2UgdGhlIG5hbWUgYGZvb3RlcmAuXHJcbiAgLy8gQENvbnRlbnRDaGlsZChUZW1wbGF0ZVJlZiwge3N0YXRpYzogZmFsc2V9KSBuek5vdEZvdW5kRm9vdGVyOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgZGVmYXVsdFN2ZyA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybChlbXB0eUltYWdlKTtcclxuICBpc0NvbnRlbnRTdHJpbmcgPSBmYWxzZTtcclxuICBsb2NhbGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcclxuXHJcbiAgZ2V0IHNob3VsZFJlbmRlckNvbnRlbnQoKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5uek5vdEZvdW5kQ29udGVudDtcclxuICAgIHJldHVybiAhIShjb250ZW50IHx8IHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplciwgcHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgbnpOb3RGb3VuZENvbnRlbnQgfSA9IGNoYW5nZXM7XHJcbiAgICBpZiAobnpOb3RGb3VuZENvbnRlbnQpIHtcclxuICAgICAgdGhpcy5pc0NvbnRlbnRTdHJpbmcgPSB0eXBlb2YgbnpOb3RGb3VuZENvbnRlbnQuY3VycmVudFZhbHVlID09PSAnc3RyaW5nJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnRW1wdHknKTtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJhbnQtZW1wdHktaW1hZ2VcIj5cclxuICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpOb3RGb3VuZEltYWdlXCI+XHJcbiAgICA8aW1nXHJcbiAgICAgIFtzcmNdPVwibnpOb3RGb3VuZEltYWdlIHx8IGRlZmF1bHRTdmdcIlxyXG4gICAgICBbYWx0XT1cImlzQ29udGVudFN0cmluZyA/IG56Tm90Rm91bmRDb250ZW50IDogJ2VtcHR5J1wiXHJcbiAgICAvPlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG48L2Rpdj5cclxuPHAgY2xhc3M9XCJhbnQtZW1wdHktZGVzY3JpcHRpb25cIj5cclxuICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpOb3RGb3VuZENvbnRlbnRcIj5cclxuICAgIHt7IHNob3VsZFJlbmRlckNvbnRlbnQgPyBuek5vdEZvdW5kQ29udGVudCA6IGxvY2FsZVsnZGVzY3JpcHRpb24nXSB9fVxyXG4gIDwvbmctY29udGFpbmVyPlxyXG48L3A+XHJcbjxkaXYgY2xhc3M9XCJhbnQtZW1wdHktZm9vdGVyXCIgKm5nSWY9XCJuek5vdEZvdW5kRm9vdGVyXCI+XHJcbiAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56Tm90Rm91bmRGb290ZXJcIj5cclxuICAgIHt7IG56Tm90Rm91bmRGb290ZXIgfX1cclxuICA8L25nLWNvbnRhaW5lcj5cclxuPC9kaXY+XHJcbiJdfQ==