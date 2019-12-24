/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ElementRef, Renderer2, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
var NzCardLoadingComponent = /** @class */ (function () {
    function NzCardLoadingComponent(elementRef, renderer) {
        renderer.addClass(elementRef.nativeElement, 'ant-card-loading-content');
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
    return NzCardLoadingComponent;
}());
export { NzCardLoadingComponent };
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
                    "\n      nz-card-loading {\n        display: block;\n      }\n    "
                ]
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FyZC1sb2FkaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY2FyZC8iLCJzb3VyY2VzIjpbIm56LWNhcmQtbG9hZGluZy5jb21wb25lbnQudHMiLCJuei1jYXJkLWxvYWRpbmcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUU3RztJQWdCRSxnQ0FBWSxVQUFzQixFQUFFLFFBQW1CO1FBQ3JELFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSwwQkFBMEIsQ0FBQyxDQUFDO0lBQzFFLENBQUM7Z0dBSFUsc0JBQXNCOytEQUF0QixzQkFBc0I7WUN6Qm5DLDhCQUNFO1lBQUEsOEJBQ0U7WUFBQSw4QkFDRTtZQUFBLHlCQUEwQztZQUM1QyxpQkFBTTtZQUNSLGlCQUFNO1lBQ04sOEJBQ0U7WUFBQSw4QkFDRTtZQUFBLHlCQUEwQztZQUM1QyxpQkFBTTtZQUNOLDhCQUNFO1lBQUEseUJBQTBDO1lBQzVDLGlCQUFNO1lBQ1IsaUJBQU07WUFDTiw4QkFDRTtZQUFBLCtCQUNFO1lBQUEsMEJBQTBDO1lBQzVDLGlCQUFNO1lBQ04sK0JBQ0U7WUFBQSwwQkFBMEM7WUFDNUMsaUJBQU07WUFDUixpQkFBTTtZQUNOLCtCQUNFO1lBQUEsK0JBQ0U7WUFBQSwwQkFBMEM7WUFDNUMsaUJBQU07WUFDTiwrQkFDRTtZQUFBLDBCQUEwQztZQUM1QyxpQkFBTTtZQUNSLGlCQUFNO1lBQ04sK0JBQ0U7WUFBQSxnQ0FDRTtZQUFBLDBCQUEwQztZQUM1QyxpQkFBTTtZQUNOLGdDQUNFO1lBQUEsMEJBQTBDO1lBQzVDLGlCQUFNO1lBQ04sZ0NBQ0U7WUFBQSwwQkFBMEM7WUFDNUMsaUJBQU07WUFDUixpQkFBTTtZQUNOLCtCQUNFO1lBQUEsK0JBQ0U7WUFBQSwwQkFBMEM7WUFDNUMsaUJBQU07WUFDTiwrQkFDRTtZQUFBLDBCQUEwQztZQUM1QyxpQkFBTTtZQUNOLCtCQUNFO1lBQUEsMEJBQTBDO1lBQzVDLGlCQUFNO1lBQ1IsaUJBQU07WUFDUixpQkFBTTs7aUNEcEROO0NBNkJDLEFBbkJELElBbUJDO1NBSlksc0JBQXNCO2tEQUF0QixzQkFBc0I7Y0FmbEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRSxlQUFlO2dCQUN6QixXQUFXLEVBQUUsa0NBQWtDO2dCQUMvQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLE1BQU0sRUFBRTtvQkFDTixtRUFJQztpQkFDRjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LWNhcmQtbG9hZGluZycsXHJcbiAgZXhwb3J0QXM6ICduekNhcmRMb2FkaW5nJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotY2FyZC1sb2FkaW5nLmNvbXBvbmVudC5odG1sJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBuei1jYXJkLWxvYWRpbmcge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpDYXJkTG9hZGluZ0NvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWNhcmQtbG9hZGluZy1jb250ZW50Jyk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJhbnQtY2FyZC1sb2FkaW5nLWNvbnRlbnRcIj5cclxuICA8ZGl2IGNsYXNzPVwiYW50LXJvd1wiIHN0eWxlPVwibWFyZ2luLWxlZnQ6IC00cHg7IG1hcmdpbi1yaWdodDogLTRweDtcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJhbnQtY29sLTIyXCIgc3R5bGU9XCJwYWRkaW5nLWxlZnQ6IDRweDsgcGFkZGluZy1yaWdodDogNHB4O1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LWNhcmQtbG9hZGluZy1ibG9ja1wiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImFudC1yb3dcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAtNHB4OyBtYXJnaW4tcmlnaHQ6IC00cHg7XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYW50LWNvbC04XCIgc3R5bGU9XCJwYWRkaW5nLWxlZnQ6IDRweDsgcGFkZGluZy1yaWdodDogNHB4O1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LWNhcmQtbG9hZGluZy1ibG9ja1wiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYW50LWNvbC0xNVwiIHN0eWxlPVwicGFkZGluZy1sZWZ0OiA0cHg7IHBhZGRpbmctcmlnaHQ6IDRweDtcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImFudC1jYXJkLWxvYWRpbmctYmxvY2tcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJhbnQtcm93XCIgc3R5bGU9XCJtYXJnaW4tbGVmdDogLTRweDsgbWFyZ2luLXJpZ2h0OiAtNHB4O1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImFudC1jb2wtNlwiIHN0eWxlPVwicGFkZGluZy1sZWZ0OiA0cHg7IHBhZGRpbmctcmlnaHQ6IDRweDtcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImFudC1jYXJkLWxvYWRpbmctYmxvY2tcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImFudC1jb2wtMThcIiBzdHlsZT1cInBhZGRpbmctbGVmdDogNHB4OyBwYWRkaW5nLXJpZ2h0OiA0cHg7XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtY2FyZC1sb2FkaW5nLWJsb2NrXCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiYW50LXJvd1wiIHN0eWxlPVwibWFyZ2luLWxlZnQ6IC00cHg7IG1hcmdpbi1yaWdodDogLTRweDtcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJhbnQtY29sLTEzXCIgc3R5bGU9XCJwYWRkaW5nLWxlZnQ6IDRweDsgcGFkZGluZy1yaWdodDogNHB4O1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LWNhcmQtbG9hZGluZy1ibG9ja1wiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYW50LWNvbC05XCIgc3R5bGU9XCJwYWRkaW5nLWxlZnQ6IDRweDsgcGFkZGluZy1yaWdodDogNHB4O1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LWNhcmQtbG9hZGluZy1ibG9ja1wiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImFudC1yb3dcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAtNHB4OyBtYXJnaW4tcmlnaHQ6IC00cHg7XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYW50LWNvbC00XCIgc3R5bGU9XCJwYWRkaW5nLWxlZnQ6IDRweDsgcGFkZGluZy1yaWdodDogNHB4O1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LWNhcmQtbG9hZGluZy1ibG9ja1wiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYW50LWNvbC0zXCIgc3R5bGU9XCJwYWRkaW5nLWxlZnQ6IDRweDsgcGFkZGluZy1yaWdodDogNHB4O1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LWNhcmQtbG9hZGluZy1ibG9ja1wiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYW50LWNvbC0xNlwiIHN0eWxlPVwicGFkZGluZy1sZWZ0OiA0cHg7IHBhZGRpbmctcmlnaHQ6IDRweDtcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImFudC1jYXJkLWxvYWRpbmctYmxvY2tcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJhbnQtcm93XCIgc3R5bGU9XCJtYXJnaW4tbGVmdDogLTRweDsgbWFyZ2luLXJpZ2h0OiAtNHB4O1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImFudC1jb2wtOFwiIHN0eWxlPVwicGFkZGluZy1sZWZ0OiA0cHg7IHBhZGRpbmctcmlnaHQ6IDRweDtcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImFudC1jYXJkLWxvYWRpbmctYmxvY2tcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImFudC1jb2wtNlwiIHN0eWxlPVwicGFkZGluZy1sZWZ0OiA0cHg7IHBhZGRpbmctcmlnaHQ6IDRweDtcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImFudC1jYXJkLWxvYWRpbmctYmxvY2tcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImFudC1jb2wtOFwiIHN0eWxlPVwicGFkZGluZy1sZWZ0OiA0cHg7IHBhZGRpbmctcmlnaHQ6IDRweDtcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImFudC1jYXJkLWxvYWRpbmctYmxvY2tcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19