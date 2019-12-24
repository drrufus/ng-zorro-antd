import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { MediaMatcher } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, Input, NgZone, QueryList, Renderer2, ViewEncapsulation } from '@angular/core';
import { startWith, takeUntil } from 'rxjs/operators';
import { InputBoolean, NzDomEventService, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { NzRowDirective } from 'ng-zorro-antd/grid';
import { NzFormExplainComponent } from './nz-form-explain.component';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
import * as i2 from "@angular/cdk/layout";
import * as i3 from "@angular/cdk/platform";
const _c0 = ["*"];
/** should add nz-row directive to host, track https://github.com/angular/angular/issues/8785 **/
export class NzFormItemComponent extends NzRowDirective {
    constructor(elementRef, renderer, nzUpdateHostClassService, mediaMatcher, ngZone, platform, nzDomEventService, cdr) {
        super(elementRef, renderer, nzUpdateHostClassService, mediaMatcher, ngZone, platform, nzDomEventService);
        this.cdr = cdr;
        this.nzFlex = false;
        this.withHelpClass = false;
        this.tipsMode = false;
        renderer.addClass(elementRef.nativeElement, 'ant-form-item');
    }
    updateFlexStyle() {
        if (this.nzFlex) {
            this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'flex');
        }
        else {
            this.renderer.removeStyle(this.elementRef.nativeElement, 'display');
        }
    }
    setWithHelpViaTips(value) {
        this.tipsMode = true;
        this.withHelpClass = value;
        this.cdr.markForCheck();
    }
    ngAfterContentInit() {
        if (!this.tipsMode) {
            this.listOfNzFormExplainComponent.changes.pipe(startWith(true), takeUntil(this.destroy$)).subscribe(() => {
                this.withHelpClass = this.listOfNzFormExplainComponent && this.listOfNzFormExplainComponent.length > 0;
                this.cdr.markForCheck();
            });
        }
    }
    ngOnInit() {
        super.ngOnInit();
        this.updateFlexStyle();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        if (changes.hasOwnProperty('nzFlex')) {
            this.updateFlexStyle();
        }
    }
}
/** @nocollapse */ NzFormItemComponent.ɵfac = function NzFormItemComponent_Factory(t) { return new (t || NzFormItemComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.NzUpdateHostClassService), i0.ɵɵdirectiveInject(i2.MediaMatcher), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i3.Platform), i0.ɵɵdirectiveInject(i1.NzDomEventService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
/** @nocollapse */ NzFormItemComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzFormItemComponent, selectors: [["nz-form-item"]], contentQueries: function NzFormItemComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, NzFormExplainComponent, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listOfNzFormExplainComponent = _t);
    } }, hostBindings: function NzFormItemComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        i0.ɵɵallocHostVars(1);
    } if (rf & 2) {
        i0.ɵɵclassProp("ant-form-item-with-help", ctx.withHelpClass);
    } }, inputs: { nzFlex: "nzFlex" }, exportAs: ["nzFormItem"], features: [i0.ɵɵProvidersFeature([NzUpdateHostClassService]), i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature()], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzFormItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, styles: ["\n      nz-form-item {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzFormItemComponent.prototype, "nzFlex", void 0);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzFormItemComponent, [{
        type: Component,
        args: [{
                selector: 'nz-form-item',
                exportAs: 'nzFormItem',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                providers: [NzUpdateHostClassService],
                templateUrl: './nz-form-item.component.html',
                host: {
                    '[class.ant-form-item-with-help]': 'withHelpClass'
                },
                styles: [
                    `
      nz-form-item {
        display: block;
      }
    `
                ]
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.NzUpdateHostClassService }, { type: i2.MediaMatcher }, { type: i0.NgZone }, { type: i3.Platform }, { type: i1.NzDomEventService }, { type: i0.ChangeDetectorRef }]; }, { nzFlex: [{
            type: Input
        }], listOfNzFormExplainComponent: [{
            type: ContentChildren,
            args: [NzFormExplainComponent, { descendants: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZm9ybS1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZm9ybS8iLCJzb3VyY2VzIjpbIm56LWZvcm0taXRlbS5jb21wb25lbnQudHMiLCJuei1mb3JtLWl0ZW0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFJTixTQUFTLEVBQ1QsU0FBUyxFQUVULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRELE9BQU8sRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMvRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFcEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7OztBQUVyRSxpR0FBaUc7QUFvQmpHLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxjQUFjO0lBcUJyRCxZQUNFLFVBQXNCLEVBQ3RCLFFBQW1CLEVBQ25CLHdCQUFrRCxFQUNsRCxZQUEwQixFQUMxQixNQUFjLEVBQ2QsUUFBa0IsRUFDbEIsaUJBQW9DLEVBQzVCLEdBQXNCO1FBRTlCLEtBQUssQ0FBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLHdCQUF3QixFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFGakcsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUE1QlAsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUdqRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBMkJmLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBMUJELGVBQWU7UUFDYixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDMUU7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQ3JFO0lBQ0gsQ0FBQztJQUVELGtCQUFrQixDQUFDLEtBQWM7UUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBZ0JELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixJQUFJLENBQUMsNEJBQTRCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7Z0JBQ3ZHLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixJQUFJLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2dCQUN2RyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQzFCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQsUUFBUTtRQUNOLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVqQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELFdBQVc7UUFDVCxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNCLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNwQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDOztzRkEzRFUsbUJBQW1CO3dEQUFuQixtQkFBbUI7b0NBRWIsc0JBQXNCOzs7Ozs7OztrR0FmNUIsQ0FBQyx3QkFBd0IsQ0FBQzs7UUN6Q3ZDLGtCQUFZOztBRHVEZTtJQUFmLFlBQVksRUFBRTs7bURBQXlCO2tEQUR0QyxtQkFBbUI7Y0FuQi9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7Z0JBQ3JDLFdBQVcsRUFBRSwrQkFBK0I7Z0JBQzVDLElBQUksRUFBRTtvQkFDSixpQ0FBaUMsRUFBRSxlQUFlO2lCQUNuRDtnQkFDRCxNQUFNLEVBQUU7b0JBQ047Ozs7S0FJQztpQkFDRjthQUNGOztrQkFFRSxLQUFLOztrQkFDTCxlQUFlO21CQUFDLHNCQUFzQixFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgTWVkaWFNYXRjaGVyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2xheW91dCc7XHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHN0YXJ0V2l0aCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBOekRvbUV2ZW50U2VydmljZSwgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpSb3dEaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2dyaWQnO1xyXG5cclxuaW1wb3J0IHsgTnpGb3JtRXhwbGFpbkNvbXBvbmVudCB9IGZyb20gJy4vbnotZm9ybS1leHBsYWluLmNvbXBvbmVudCc7XHJcblxyXG4vKiogc2hvdWxkIGFkZCBuei1yb3cgZGlyZWN0aXZlIHRvIGhvc3QsIHRyYWNrIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzg3ODUgKiovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotZm9ybS1pdGVtJyxcclxuICBleHBvcnRBczogJ256Rm9ybUl0ZW0nLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJvdmlkZXJzOiBbTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotZm9ybS1pdGVtLmNvbXBvbmVudC5odG1sJyxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC1mb3JtLWl0ZW0td2l0aC1oZWxwXSc6ICd3aXRoSGVscENsYXNzJ1xyXG4gIH0sXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIG56LWZvcm0taXRlbSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekZvcm1JdGVtQ29tcG9uZW50IGV4dGVuZHMgTnpSb3dEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekZsZXg6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBAQ29udGVudENoaWxkcmVuKE56Rm9ybUV4cGxhaW5Db21wb25lbnQsIHsgZGVzY2VuZGFudHM6IHRydWUgfSlcclxuICBsaXN0T2ZOekZvcm1FeHBsYWluQ29tcG9uZW50OiBRdWVyeUxpc3Q8TnpGb3JtRXhwbGFpbkNvbXBvbmVudD47XHJcbiAgd2l0aEhlbHBDbGFzcyA9IGZhbHNlO1xyXG4gIHRpcHNNb2RlID0gZmFsc2U7XHJcblxyXG4gIHVwZGF0ZUZsZXhTdHlsZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56RmxleCkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsICdmbGV4Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0V2l0aEhlbHBWaWFUaXBzKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLnRpcHNNb2RlID0gdHJ1ZTtcclxuICAgIHRoaXMud2l0aEhlbHBDbGFzcyA9IHZhbHVlO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsXHJcbiAgICBtZWRpYU1hdGNoZXI6IE1lZGlhTWF0Y2hlcixcclxuICAgIG5nWm9uZTogTmdab25lLFxyXG4gICAgcGxhdGZvcm06IFBsYXRmb3JtLFxyXG4gICAgbnpEb21FdmVudFNlcnZpY2U6IE56RG9tRXZlbnRTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7XHJcbiAgICBzdXBlcihlbGVtZW50UmVmLCByZW5kZXJlciwgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLCBtZWRpYU1hdGNoZXIsIG5nWm9uZSwgcGxhdGZvcm0sIG56RG9tRXZlbnRTZXJ2aWNlKTtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1mb3JtLWl0ZW0nKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy50aXBzTW9kZSkge1xyXG4gICAgICB0aGlzLmxpc3RPZk56Rm9ybUV4cGxhaW5Db21wb25lbnQuY2hhbmdlcy5waXBlKHN0YXJ0V2l0aCh0cnVlKSwgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMud2l0aEhlbHBDbGFzcyA9IHRoaXMubGlzdE9mTnpGb3JtRXhwbGFpbkNvbXBvbmVudCAmJiB0aGlzLmxpc3RPZk56Rm9ybUV4cGxhaW5Db21wb25lbnQubGVuZ3RoID4gMDtcclxuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHN1cGVyLm5nT25Jbml0KCk7XHJcblxyXG4gICAgdGhpcy51cGRhdGVGbGV4U3R5bGUoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgc3VwZXIubmdPbkRlc3Ryb3koKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIHN1cGVyLm5nT25DaGFuZ2VzKGNoYW5nZXMpO1xyXG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ256RmxleCcpKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlRmxleFN0eWxlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuIl19