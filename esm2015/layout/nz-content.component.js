/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ElementRef, Renderer2, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["*"];
export class NzContentComponent {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-layout-content');
    }
}
/** @nocollapse */ NzContentComponent.ɵfac = function NzContentComponent_Factory(t) { return new (t || NzContentComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
/** @nocollapse */ NzContentComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzContentComponent, selectors: [["nz-content"]], exportAs: ["nzContent"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzContentComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, styles: ["\n      nz-content {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzContentComponent, [{
        type: Component,
        args: [{
                selector: 'nz-content',
                exportAs: 'nzContent',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                templateUrl: './nz-content.component.html',
                styles: [
                    `
      nz-content {
        display: block;
      }
    `
                ]
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2xheW91dC8iLCJzb3VyY2VzIjpbIm56LWNvbnRlbnQuY29tcG9uZW50LnRzIiwibnotY29udGVudC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQWlCN0csTUFBTSxPQUFPLGtCQUFrQjtJQUM3QixZQUFvQixVQUFzQixFQUFVLFFBQW1CO1FBQW5ELGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ3JFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFDOUUsQ0FBQzs7b0ZBSFUsa0JBQWtCO3VEQUFsQixrQkFBa0I7O1FDekIvQixrQkFBWTs7a0REeUJDLGtCQUFrQjtjQWY5QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFdBQVcsRUFBRSw2QkFBNkI7Z0JBQzFDLE1BQU0sRUFBRTtvQkFDTjs7OztLQUlDO2lCQUNGO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotY29udGVudCcsXHJcbiAgZXhwb3J0QXM6ICduekNvbnRlbnQnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LWNvbnRlbnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBuei1jb250ZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56Q29udGVudENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtbGF5b3V0LWNvbnRlbnQnKTtcclxuICB9XHJcbn1cclxuIiwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4iXX0=