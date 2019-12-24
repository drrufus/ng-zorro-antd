import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ContentChildren, ElementRef, EventEmitter, Host, Input, Optional, Output, QueryList, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { merge, Subject } from 'rxjs';
import { startWith, switchMap, takeUntil } from 'rxjs/operators';
import { InputBoolean } from 'ng-zorro-antd/core';
import { NzTableComponent } from './nz-table.component';
import { NzThComponent } from './nz-th.component';
import * as i0 from "@angular/core";
import * as i1 from "./nz-table.component";
import * as i2 from "@angular/common";
const _c0 = ["contentTemplate"];
function NzTheadComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
function NzTheadComponent_ng_container_2_ng_template_1_Template(rf, ctx) { }
function NzTheadComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzTheadComponent_ng_container_2_ng_template_1_Template, 0, 0, "ng-template", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r2557 = i0.ɵɵreference(1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r2557);
} }
const _c1 = ["*"];
export class NzTheadComponent {
    // tslint:disable-next-line:no-any
    constructor(nzTableComponent, elementRef, renderer) {
        this.nzTableComponent = nzTableComponent;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.destroy$ = new Subject();
        this.nzSingleSort = false;
        this.nzSortChange = new EventEmitter();
        if (this.nzTableComponent) {
            this.nzTableComponent.nzTheadComponent = this;
        }
    }
    ngAfterContentInit() {
        this.listOfNzThComponent.changes
            .pipe(startWith(true), switchMap(() => merge(...this.listOfNzThComponent.map(th => th.nzSortChangeWithKey))), takeUntil(this.destroy$))
            .subscribe((data) => {
            this.nzSortChange.emit(data);
            if (this.nzSingleSort) {
                this.listOfNzThComponent.forEach(th => {
                    th.nzSort = th.nzSortKey === data.key ? th.nzSort : null;
                    th.marForCheck();
                });
            }
        });
    }
    ngAfterViewInit() {
        if (this.nzTableComponent) {
            this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
/** @nocollapse */ NzTheadComponent.ɵfac = function NzTheadComponent_Factory(t) { return new (t || NzTheadComponent)(i0.ɵɵdirectiveInject(i1.NzTableComponent, 9), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
/** @nocollapse */ NzTheadComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzTheadComponent, selectors: [["thead", 9, "ant-table-thead"]], contentQueries: function NzTheadComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, NzThComponent, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listOfNzThComponent = _t);
    } }, viewQuery: function NzTheadComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.templateRef = _t.first);
    } }, inputs: { nzSingleSort: "nzSingleSort" }, outputs: { nzSortChange: "nzSortChange" }, ngContentSelectors: _c1, decls: 3, vars: 1, consts: [["contentTemplate", ""], [4, "ngIf"], [3, "ngTemplateOutlet"]], template: function NzTheadComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, NzTheadComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(2, NzTheadComponent_ng_container_2_Template, 2, 1, "ng-container", 1);
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.nzTableComponent);
    } }, directives: [i2.NgIf, i2.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTheadComponent.prototype, "nzSingleSort", void 0);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzTheadComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'thead:not(.ant-table-thead)',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                templateUrl: './nz-thead.component.html'
            }]
    }], function () { return [{ type: i1.NzTableComponent, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }, { type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { templateRef: [{
            type: ViewChild,
            args: ['contentTemplate', { static: true }]
        }], listOfNzThComponent: [{
            type: ContentChildren,
            args: [NzThComponent, { descendants: true }]
        }], nzSingleSort: [{
            type: Input
        }], nzSortChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGhlYWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90YWJsZS8iLCJzb3VyY2VzIjpbIm56LXRoZWFkLmNvbXBvbmVudC50cyIsIm56LXRoZWFkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBR0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsVUFBVSxFQUNWLFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUVMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsRUFDVCxXQUFXLEVBQ1gsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7SUNoQ2hELGtCQUFZOzs7O0lBRWQsNkJBQ0U7SUFBQSxnR0FBa0Q7SUFDcEQsMEJBQWU7Ozs7SUFEQSxlQUFvQztJQUFwQyx5Q0FBb0M7OztBRHNDbkQsTUFBTSxPQUFPLGdCQUFnQjtJQU8zQixrQ0FBa0M7SUFDbEMsWUFBdUMsZ0JBQWtDLEVBQVUsVUFBc0IsRUFBVSxRQUFtQjtRQUEvRixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFQOUgsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFHZCxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUMzQixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFrQyxDQUFDO1FBSW5GLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7U0FDL0M7SUFDSCxDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPO2FBQzdCLElBQUksQ0FDSCxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQ2YsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBaUMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxFQUNySCxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUN6QjthQUNBLFNBQVMsQ0FBQyxDQUFDLElBQW9DLEVBQUUsRUFBRTtZQUNsRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3QixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUU7b0JBQ3BDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ3pELEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDbkIsQ0FBQyxDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDbkg7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDOztnRkF6Q1UsZ0JBQWdCO3FEQUFoQixnQkFBZ0I7b0NBR1YsYUFBYTs7Ozs7Ozs7Ozs7UUM3Q2hDLGtIQUNFO1FBRUYsbUZBQ0U7O1FBRFksZUFBeUI7UUFBekIsNENBQXlCOztBRDJDWjtJQUFmLFlBQVksRUFBRTs7c0RBQXNCO2tEQUpuQyxnQkFBZ0I7Y0FQNUIsU0FBUztlQUFDO2dCQUNULDhDQUE4QztnQkFDOUMsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxXQUFXLEVBQUUsMkJBQTJCO2FBQ3pDOztzQkFTYyxJQUFJOztzQkFBSSxRQUFROztrQkFONUIsU0FBUzttQkFBQyxpQkFBaUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O2tCQUM3QyxlQUFlO21CQUFDLGFBQWEsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7O2tCQUNwRCxLQUFLOztrQkFDTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEhvc3QsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBRdWVyeUxpc3QsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBtZXJnZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBzdGFydFdpdGgsIHN3aXRjaE1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56VGFibGVDb21wb25lbnQgfSBmcm9tICcuL256LXRhYmxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56VGhDb21wb25lbnQgfSBmcm9tICcuL256LXRoLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICd0aGVhZDpub3QoLmFudC10YWJsZS10aGVhZCknLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXRoZWFkLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpUaGVhZENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgQFZpZXdDaGlsZCgnY29udGVudFRlbXBsYXRlJywgeyBzdGF0aWM6IHRydWUgfSkgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oTnpUaENvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBsaXN0T2ZOelRoQ29tcG9uZW50OiBRdWVyeUxpc3Q8TnpUaENvbXBvbmVudD47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2luZ2xlU29ydCA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNvcnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHsga2V5OiBzdHJpbmc7IHZhbHVlOiBzdHJpbmcgfT4oKTtcclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG56VGFibGVDb21wb25lbnQ6IE56VGFibGVDb21wb25lbnQsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcbiAgICBpZiAodGhpcy5uelRhYmxlQ29tcG9uZW50KSB7XHJcbiAgICAgIHRoaXMubnpUYWJsZUNvbXBvbmVudC5uelRoZWFkQ29tcG9uZW50ID0gdGhpcztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMubGlzdE9mTnpUaENvbXBvbmVudC5jaGFuZ2VzXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHN0YXJ0V2l0aCh0cnVlKSxcclxuICAgICAgICBzd2l0Y2hNYXAoKCkgPT4gbWVyZ2U8eyBrZXk6IHN0cmluZzsgdmFsdWU6IHN0cmluZyB9PiguLi50aGlzLmxpc3RPZk56VGhDb21wb25lbnQubWFwKHRoID0+IHRoLm56U29ydENoYW5nZVdpdGhLZXkpKSksXHJcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZSgoZGF0YTogeyBrZXk6IHN0cmluZzsgdmFsdWU6IHN0cmluZyB9KSA9PiB7XHJcbiAgICAgICAgdGhpcy5uelNvcnRDaGFuZ2UuZW1pdChkYXRhKTtcclxuICAgICAgICBpZiAodGhpcy5uelNpbmdsZVNvcnQpIHtcclxuICAgICAgICAgIHRoaXMubGlzdE9mTnpUaENvbXBvbmVudC5mb3JFYWNoKHRoID0+IHtcclxuICAgICAgICAgICAgdGgubnpTb3J0ID0gdGgubnpTb3J0S2V5ID09PSBkYXRhLmtleSA/IHRoLm56U29ydCA6IG51bGw7XHJcbiAgICAgICAgICAgIHRoLm1hckZvckNoZWNrKCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpUYWJsZUNvbXBvbmVudCkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKHRoaXMucmVuZGVyZXIucGFyZW50Tm9kZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCksIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG59XHJcbiIsIjxuZy10ZW1wbGF0ZSAjY29udGVudFRlbXBsYXRlPlxyXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC9uZy10ZW1wbGF0ZT5cclxuPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFuelRhYmxlQ29tcG9uZW50XCI+XHJcbiAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvbnRlbnRUZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XHJcbjwvbmctY29udGFpbmVyPlxyXG4iXX0=