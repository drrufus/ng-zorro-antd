/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ElementRef, Renderer2, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
export class NzCardLoadingComponent {
    constructor(elementRef, renderer) {
        renderer.addClass(elementRef.nativeElement, 'ant-card-loading-content');
    }
}
/** @nocollapse */ NzCardLoadingComponent.ɵfac = function NzCardLoadingComponent_Factory(t) { return new (t || NzCardLoadingComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
/** @nocollapse */ NzCardLoadingComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzCardLoadingComponent, selectors: [["nz-card-loading"]], exportAs: ["nzCardLoading"], decls: 33, vars: 0, consts: [[1, "ant-card-loading-content"], [1, "ant-row", 2, "margin-left", "-4px", "margin-right", "-4px"], [1, "ant-col-22", 2, "padding-left", "4px", "padding-right", "4px"], [1, "ant-card-loading-block"], [1, "ant-col-8", 2, "padding-left", "4px", "padding-right", "4px"], [1, "ant-col-15", 2, "padding-left", "4px", "padding-right", "4px"], [1, "ant-col-6", 2, "padding-left", "4px", "padding-right", "4px"], [1, "ant-col-18", 2, "padding-left", "4px", "padding-right", "4px"], [1, "ant-col-13", 2, "padding-left", "4px", "padding-right", "4px"], [1, "ant-col-9", 2, "padding-left", "4px", "padding-right", "4px"], [1, "ant-col-4", 2, "padding-left", "4px", "padding-right", "4px"], [1, "ant-col-3", 2, "padding-left", "4px", "padding-right", "4px"], [1, "ant-col-16", 2, "padding-left", "4px", "padding-right", "4px"]], template: function NzCardLoadingComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelement(3, "div", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 1);
        i0.ɵɵelementStart(5, "div", 4);
        i0.ɵɵelement(6, "div", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 5);
        i0.ɵɵelement(8, "div", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 1);
        i0.ɵɵelementStart(10, "div", 6);
        i0.ɵɵelement(11, "div", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "div", 7);
        i0.ɵɵelement(13, "div", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "div", 1);
        i0.ɵɵelementStart(15, "div", 8);
        i0.ɵɵelement(16, "div", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "div", 9);
        i0.ɵɵelement(18, "div", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "div", 1);
        i0.ɵɵelementStart(20, "div", 10);
        i0.ɵɵelement(21, "div", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "div", 11);
        i0.ɵɵelement(23, "div", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "div", 12);
        i0.ɵɵelement(25, "div", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "div", 1);
        i0.ɵɵelementStart(27, "div", 4);
        i0.ɵɵelement(28, "div", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(29, "div", 6);
        i0.ɵɵelement(30, "div", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(31, "div", 4);
        i0.ɵɵelement(32, "div", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, styles: ["\n      nz-card-loading {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzCardLoadingComponent, [{
        type: Component,
        args: [{
                selector: 'nz-card-loading',
                exportAs: 'nzCardLoading',
                templateUrl: './nz-card-loading.component.html',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [
                    `
      nz-card-loading {
        display: block;
      }
    `
                ]
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FyZC1sb2FkaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY2FyZC8iLCJzb3VyY2VzIjpbIm56LWNhcmQtbG9hZGluZy5jb21wb25lbnQudHMiLCJuei1jYXJkLWxvYWRpbmcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOztBQWlCN0csTUFBTSxPQUFPLHNCQUFzQjtJQUNqQyxZQUFZLFVBQXNCLEVBQUUsUUFBbUI7UUFDckQsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLDBCQUEwQixDQUFDLENBQUM7SUFDMUUsQ0FBQzs7NEZBSFUsc0JBQXNCOzJEQUF0QixzQkFBc0I7UUN6Qm5DLDhCQUNFO1FBQUEsOEJBQ0U7UUFBQSw4QkFDRTtRQUFBLHlCQUEwQztRQUM1QyxpQkFBTTtRQUNSLGlCQUFNO1FBQ04sOEJBQ0U7UUFBQSw4QkFDRTtRQUFBLHlCQUEwQztRQUM1QyxpQkFBTTtRQUNOLDhCQUNFO1FBQUEseUJBQTBDO1FBQzVDLGlCQUFNO1FBQ1IsaUJBQU07UUFDTiw4QkFDRTtRQUFBLCtCQUNFO1FBQUEsMEJBQTBDO1FBQzVDLGlCQUFNO1FBQ04sK0JBQ0U7UUFBQSwwQkFBMEM7UUFDNUMsaUJBQU07UUFDUixpQkFBTTtRQUNOLCtCQUNFO1FBQUEsK0JBQ0U7UUFBQSwwQkFBMEM7UUFDNUMsaUJBQU07UUFDTiwrQkFDRTtRQUFBLDBCQUEwQztRQUM1QyxpQkFBTTtRQUNSLGlCQUFNO1FBQ04sK0JBQ0U7UUFBQSxnQ0FDRTtRQUFBLDBCQUEwQztRQUM1QyxpQkFBTTtRQUNOLGdDQUNFO1FBQUEsMEJBQTBDO1FBQzVDLGlCQUFNO1FBQ04sZ0NBQ0U7UUFBQSwwQkFBMEM7UUFDNUMsaUJBQU07UUFDUixpQkFBTTtRQUNOLCtCQUNFO1FBQUEsK0JBQ0U7UUFBQSwwQkFBMEM7UUFDNUMsaUJBQU07UUFDTiwrQkFDRTtRQUFBLDBCQUEwQztRQUM1QyxpQkFBTTtRQUNOLCtCQUNFO1FBQUEsMEJBQTBDO1FBQzVDLGlCQUFNO1FBQ1IsaUJBQU07UUFDUixpQkFBTTs7a0REM0JPLHNCQUFzQjtjQWZsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFdBQVcsRUFBRSxrQ0FBa0M7Z0JBQy9DLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsTUFBTSxFQUFFO29CQUNOOzs7O0tBSUM7aUJBQ0Y7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei1jYXJkLWxvYWRpbmcnLFxyXG4gIGV4cG9ydEFzOiAnbnpDYXJkTG9hZGluZycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LWNhcmQtbG9hZGluZy5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgbnotY2FyZC1sb2FkaW5nIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56Q2FyZExvYWRpbmdDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1jYXJkLWxvYWRpbmctY29udGVudCcpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiYW50LWNhcmQtbG9hZGluZy1jb250ZW50XCI+XHJcbiAgPGRpdiBjbGFzcz1cImFudC1yb3dcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAtNHB4OyBtYXJnaW4tcmlnaHQ6IC00cHg7XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYW50LWNvbC0yMlwiIHN0eWxlPVwicGFkZGluZy1sZWZ0OiA0cHg7IHBhZGRpbmctcmlnaHQ6IDRweDtcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImFudC1jYXJkLWxvYWRpbmctYmxvY2tcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJhbnQtcm93XCIgc3R5bGU9XCJtYXJnaW4tbGVmdDogLTRweDsgbWFyZ2luLXJpZ2h0OiAtNHB4O1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImFudC1jb2wtOFwiIHN0eWxlPVwicGFkZGluZy1sZWZ0OiA0cHg7IHBhZGRpbmctcmlnaHQ6IDRweDtcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImFudC1jYXJkLWxvYWRpbmctYmxvY2tcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImFudC1jb2wtMTVcIiBzdHlsZT1cInBhZGRpbmctbGVmdDogNHB4OyBwYWRkaW5nLXJpZ2h0OiA0cHg7XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtY2FyZC1sb2FkaW5nLWJsb2NrXCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiYW50LXJvd1wiIHN0eWxlPVwibWFyZ2luLWxlZnQ6IC00cHg7IG1hcmdpbi1yaWdodDogLTRweDtcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJhbnQtY29sLTZcIiBzdHlsZT1cInBhZGRpbmctbGVmdDogNHB4OyBwYWRkaW5nLXJpZ2h0OiA0cHg7XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtY2FyZC1sb2FkaW5nLWJsb2NrXCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJhbnQtY29sLTE4XCIgc3R5bGU9XCJwYWRkaW5nLWxlZnQ6IDRweDsgcGFkZGluZy1yaWdodDogNHB4O1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LWNhcmQtbG9hZGluZy1ibG9ja1wiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImFudC1yb3dcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAtNHB4OyBtYXJnaW4tcmlnaHQ6IC00cHg7XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYW50LWNvbC0xM1wiIHN0eWxlPVwicGFkZGluZy1sZWZ0OiA0cHg7IHBhZGRpbmctcmlnaHQ6IDRweDtcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImFudC1jYXJkLWxvYWRpbmctYmxvY2tcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImFudC1jb2wtOVwiIHN0eWxlPVwicGFkZGluZy1sZWZ0OiA0cHg7IHBhZGRpbmctcmlnaHQ6IDRweDtcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImFudC1jYXJkLWxvYWRpbmctYmxvY2tcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJhbnQtcm93XCIgc3R5bGU9XCJtYXJnaW4tbGVmdDogLTRweDsgbWFyZ2luLXJpZ2h0OiAtNHB4O1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImFudC1jb2wtNFwiIHN0eWxlPVwicGFkZGluZy1sZWZ0OiA0cHg7IHBhZGRpbmctcmlnaHQ6IDRweDtcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImFudC1jYXJkLWxvYWRpbmctYmxvY2tcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImFudC1jb2wtM1wiIHN0eWxlPVwicGFkZGluZy1sZWZ0OiA0cHg7IHBhZGRpbmctcmlnaHQ6IDRweDtcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImFudC1jYXJkLWxvYWRpbmctYmxvY2tcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImFudC1jb2wtMTZcIiBzdHlsZT1cInBhZGRpbmctbGVmdDogNHB4OyBwYWRkaW5nLXJpZ2h0OiA0cHg7XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtY2FyZC1sb2FkaW5nLWJsb2NrXCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiYW50LXJvd1wiIHN0eWxlPVwibWFyZ2luLWxlZnQ6IC00cHg7IG1hcmdpbi1yaWdodDogLTRweDtcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJhbnQtY29sLThcIiBzdHlsZT1cInBhZGRpbmctbGVmdDogNHB4OyBwYWRkaW5nLXJpZ2h0OiA0cHg7XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtY2FyZC1sb2FkaW5nLWJsb2NrXCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJhbnQtY29sLTZcIiBzdHlsZT1cInBhZGRpbmctbGVmdDogNHB4OyBwYWRkaW5nLXJpZ2h0OiA0cHg7XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtY2FyZC1sb2FkaW5nLWJsb2NrXCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJhbnQtY29sLThcIiBzdHlsZT1cInBhZGRpbmctbGVmdDogNHB4OyBwYWRkaW5nLXJpZ2h0OiA0cHg7XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtY2FyZC1sb2FkaW5nLWJsb2NrXCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==