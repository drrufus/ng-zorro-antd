/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, TemplateRef, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { isNotNil } from 'ng-zorro-antd/core';
import { NzOptionComponent } from './nz-option.component';
import { NzSelectService } from './nz-select.service';
import * as i0 from "@angular/core";
import * as i1 from "./nz-select.service";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/icon";
const _c0 = ["nz-option-li", ""];
function NzOptionLiComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1407 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1407.nzOption.nzLabel, "\n");
} }
function NzOptionLiComponent_ng_container_1_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 3);
} }
function NzOptionLiComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzOptionLiComponent_ng_container_1_i_1_Template, 1, 0, "i", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1408 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1408.nzMenuItemSelectedIcon)("ngIfElse", ctx_r1408.nzMenuItemSelectedIcon);
} }
export class NzOptionLiComponent {
    constructor(elementRef, nzSelectService, cdr, renderer) {
        this.elementRef = elementRef;
        this.nzSelectService = nzSelectService;
        this.cdr = cdr;
        this.el = this.elementRef.nativeElement;
        this.selected = false;
        this.active = false;
        this.destroy$ = new Subject();
        renderer.addClass(elementRef.nativeElement, 'ant-select-dropdown-menu-item');
    }
    clickOption() {
        this.nzSelectService.clickOption(this.nzOption);
    }
    ngOnInit() {
        this.nzSelectService.listOfSelectedValue$.pipe(takeUntil(this.destroy$)).subscribe(list => {
            this.selected = isNotNil(list.find(v => this.nzSelectService.compareWith(v, this.nzOption.nzValue)));
            this.cdr.markForCheck();
        });
        this.nzSelectService.activatedOption$.pipe(takeUntil(this.destroy$)).subscribe(option => {
            if (option) {
                this.active = this.nzSelectService.compareWith(option.nzValue, this.nzOption.nzValue);
            }
            else {
                this.active = false;
            }
            this.cdr.markForCheck();
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
/** @nocollapse */ NzOptionLiComponent.ɵfac = function NzOptionLiComponent_Factory(t) { return new (t || NzOptionLiComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.NzSelectService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
/** @nocollapse */ NzOptionLiComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzOptionLiComponent, selectors: [["", "nz-option-li", ""]], hostBindings: function NzOptionLiComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        i0.ɵɵallocHostVars(5);
        i0.ɵɵlistener("click", function NzOptionLiComponent_click_HostBindingHandler($event) { return ctx.clickOption(); })("mousedown", function NzOptionLiComponent_mousedown_HostBindingHandler($event) { return $event.preventDefault(); });
    } if (rf & 2) {
        i0.ɵɵattribute("unselectable", "unselectable");
        i0.ɵɵstyleProp("user-select", "none");
        i0.ɵɵclassProp("ant-select-dropdown-menu-item-selected", ctx.selected && !ctx.nzOption.nzDisabled)("ant-select-dropdown-menu-item-disabled", ctx.nzOption.nzDisabled)("ant-select-dropdown-menu-item-active", ctx.active && !ctx.nzOption.nzDisabled);
    } }, inputs: { nzOption: "nzOption", nzMenuItemSelectedIcon: "nzMenuItemSelectedIcon" }, exportAs: ["nzOptionLi"], attrs: _c0, decls: 2, vars: 3, consts: [[4, "ngIf", "ngIfElse"], [4, "ngIf"], ["nz-icon", "", "nzType", "check", "class", "ant-select-selected-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "check", 1, "ant-select-selected-icon"]], template: function NzOptionLiComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, NzOptionLiComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        i0.ɵɵtemplate(1, NzOptionLiComponent_ng_container_1_Template, 2, 2, "ng-container", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", !ctx.nzOption.nzCustomContent)("ngIfElse", ctx.nzOption.template);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.nzSelectService.isMultipleOrTags);
    } }, directives: [i2.NgIf, i3.NzIconDirective], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzOptionLiComponent, [{
        type: Component,
        args: [{
                selector: '[nz-option-li]',
                exportAs: 'nzOptionLi',
                templateUrl: './nz-option-li.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.ant-select-dropdown-menu-item-selected]': 'selected && !nzOption.nzDisabled',
                    '[class.ant-select-dropdown-menu-item-disabled]': 'nzOption.nzDisabled',
                    '[class.ant-select-dropdown-menu-item-active]': 'active && !nzOption.nzDisabled',
                    '[attr.unselectable]': '"unselectable"',
                    '[style.user-select]': '"none"',
                    '(click)': 'clickOption()',
                    '(mousedown)': '$event.preventDefault()'
                }
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.NzSelectService }, { type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }]; }, { nzOption: [{
            type: Input
        }], nzMenuItemSelectedIcon: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotb3B0aW9uLWxpLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc2VsZWN0LyIsInNvdXJjZXMiOlsibnotb3B0aW9uLWxpLmNvbXBvbmVudC50cyIsIm56LW9wdGlvbi1saS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFHTCxTQUFTLEVBQ1QsV0FBVyxFQUNYLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFOUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7O0lDMUJ0RCw2QkFDRTtJQUFBLFlBQ0Y7SUFBQSwwQkFBZTs7O0lBRGIsZUFDRjtJQURFLDREQUNGOzs7SUFFRSx1QkFLSzs7O0lBTlAsNkJBQ0U7SUFBQSwrRUFLQztJQUNILDBCQUFlOzs7SUFGWCxlQUE0RDtJQUE1RCx3REFBNEQsOENBQUE7O0FEb0NoRSxNQUFNLE9BQU8sbUJBQW1CO0lBWTlCLFlBQ1UsVUFBc0IsRUFDdkIsZUFBZ0MsRUFDL0IsR0FBc0IsRUFDOUIsUUFBbUI7UUFIWCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3ZCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUMvQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQWRoQyxPQUFFLEdBQWdCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQ2hELGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBY3ZCLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSwrQkFBK0IsQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFYRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFXRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGVBQWUsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN4RixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3RGLElBQUksTUFBTSxFQUFFO2dCQUNWLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3ZGO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2FBQ3JCO1lBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7O3NGQXZDVSxtQkFBbUI7d0RBQW5CLG1CQUFtQjs7Ozs7Ozs7UUM1Q2hDLHNGQUNFO1FBRUYsc0ZBQ0U7O1FBSlksb0RBQXlELG1DQUFBO1FBR3pELGVBQXdDO1FBQXhDLDJEQUF3Qzs7a0REeUN6QyxtQkFBbUI7Y0FoQi9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUUsWUFBWTtnQkFDdEIsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxJQUFJLEVBQUU7b0JBQ0osZ0RBQWdELEVBQUUsa0NBQWtDO29CQUNwRixnREFBZ0QsRUFBRSxxQkFBcUI7b0JBQ3ZFLDhDQUE4QyxFQUFFLGdDQUFnQztvQkFDaEYscUJBQXFCLEVBQUUsZ0JBQWdCO29CQUN2QyxxQkFBcUIsRUFBRSxRQUFRO29CQUMvQixTQUFTLEVBQUUsZUFBZTtvQkFDMUIsYUFBYSxFQUFFLHlCQUF5QjtpQkFDekM7YUFDRjs7a0JBTUUsS0FBSzs7a0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIFJlbmRlcmVyMixcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IGlzTm90TmlsIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56T3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9uei1vcHRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpTZWxlY3RTZXJ2aWNlIH0gZnJvbSAnLi9uei1zZWxlY3Quc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1tuei1vcHRpb24tbGldJyxcclxuICBleHBvcnRBczogJ256T3B0aW9uTGknLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1vcHRpb24tbGkuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbS1zZWxlY3RlZF0nOiAnc2VsZWN0ZWQgJiYgIW56T3B0aW9uLm56RGlzYWJsZWQnLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbS1kaXNhYmxlZF0nOiAnbnpPcHRpb24ubnpEaXNhYmxlZCcsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtLWFjdGl2ZV0nOiAnYWN0aXZlICYmICFuek9wdGlvbi5uekRpc2FibGVkJyxcclxuICAgICdbYXR0ci51bnNlbGVjdGFibGVdJzogJ1widW5zZWxlY3RhYmxlXCInLFxyXG4gICAgJ1tzdHlsZS51c2VyLXNlbGVjdF0nOiAnXCJub25lXCInLFxyXG4gICAgJyhjbGljayknOiAnY2xpY2tPcHRpb24oKScsXHJcbiAgICAnKG1vdXNlZG93biknOiAnJGV2ZW50LnByZXZlbnREZWZhdWx0KCknXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpPcHRpb25MaUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBlbDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICBzZWxlY3RlZCA9IGZhbHNlO1xyXG4gIGFjdGl2ZSA9IGZhbHNlO1xyXG4gIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuICBASW5wdXQoKSBuek9wdGlvbjogTnpPcHRpb25Db21wb25lbnQ7XHJcbiAgQElucHV0KCkgbnpNZW51SXRlbVNlbGVjdGVkSWNvbjogVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIGNsaWNrT3B0aW9uKCk6IHZvaWQge1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UuY2xpY2tPcHRpb24odGhpcy5uek9wdGlvbik7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHB1YmxpYyBuelNlbGVjdFNlcnZpY2U6IE56U2VsZWN0U2VydmljZSxcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjJcclxuICApIHtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtJyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmxpc3RPZlNlbGVjdGVkVmFsdWUkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUobGlzdCA9PiB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSBpc05vdE5pbChsaXN0LmZpbmQodiA9PiB0aGlzLm56U2VsZWN0U2VydmljZS5jb21wYXJlV2l0aCh2LCB0aGlzLm56T3B0aW9uLm56VmFsdWUpKSk7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5hY3RpdmF0ZWRPcHRpb24kLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUob3B0aW9uID0+IHtcclxuICAgICAgaWYgKG9wdGlvbikge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gdGhpcy5uelNlbGVjdFNlcnZpY2UuY29tcGFyZVdpdGgob3B0aW9uLm56VmFsdWUsIHRoaXMubnpPcHRpb24ubnpWYWx1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcbn1cclxuIiwiPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFuek9wdGlvbi5uekN1c3RvbUNvbnRlbnQ7IGVsc2UgbnpPcHRpb24udGVtcGxhdGVcIj5cclxuICB7eyBuek9wdGlvbi5uekxhYmVsIH19XHJcbjwvbmctY29udGFpbmVyPlxyXG48bmctY29udGFpbmVyICpuZ0lmPVwibnpTZWxlY3RTZXJ2aWNlLmlzTXVsdGlwbGVPclRhZ3NcIj5cclxuICA8aVxyXG4gICAgbnotaWNvblxyXG4gICAgbnpUeXBlPVwiY2hlY2tcIlxyXG4gICAgY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGVkLWljb25cIlxyXG4gICAgKm5nSWY9XCIhbnpNZW51SXRlbVNlbGVjdGVkSWNvbjsgZWxzZSBuek1lbnVJdGVtU2VsZWN0ZWRJY29uXCJcclxuICA+PC9pPlxyXG48L25nLWNvbnRhaW5lcj5cclxuIl19