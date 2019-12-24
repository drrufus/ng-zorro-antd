/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ContentChildren, Input, QueryList, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NzOptionComponent } from './nz-option.component';
import * as i0 from "@angular/core";
var _c0 = ["*"];
var NzOptionGroupComponent = /** @class */ (function () {
    function NzOptionGroupComponent() {
        this.isLabelString = false;
    }
    Object.defineProperty(NzOptionGroupComponent.prototype, "nzLabel", {
        get: function () {
            return this.label;
        },
        set: function (value) {
            this.label = value;
            this.isLabelString = !(this.nzLabel instanceof TemplateRef);
        },
        enumerable: true,
        configurable: true
    });
    /** @nocollapse */ NzOptionGroupComponent.ɵfac = function NzOptionGroupComponent_Factory(t) { return new (t || NzOptionGroupComponent)(); };
    /** @nocollapse */ NzOptionGroupComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzOptionGroupComponent, selectors: [["nz-option-group"]], contentQueries: function NzOptionGroupComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, NzOptionComponent, false);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listOfNzOptionComponent = _t);
        } }, inputs: { nzLabel: "nzLabel" }, exportAs: ["nzOptionGroup"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzOptionGroupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    return NzOptionGroupComponent;
}());
export { NzOptionGroupComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzOptionGroupComponent, [{
        type: Component,
        args: [{
                selector: 'nz-option-group',
                exportAs: 'nzOptionGroup',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                templateUrl: './nz-option-group.component.html'
            }]
    }], null, { listOfNzOptionComponent: [{
            type: ContentChildren,
            args: [NzOptionComponent]
        }], nzLabel: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotb3B0aW9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc2VsZWN0LyIsInNvdXJjZXMiOlsibnotb3B0aW9uLWdyb3VwLmNvbXBvbmVudC50cyIsIm56LW9wdGlvbi1ncm91cC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0SSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7O0FBRTFEO0lBQUE7UUFRRSxrQkFBYSxHQUFHLEtBQUssQ0FBQztLQWF2QjtJQVRDLHNCQUNJLDJDQUFPO2FBS1g7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQzthQVJELFVBQ1ksS0FBaUM7WUFDM0MsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sWUFBWSxXQUFXLENBQUMsQ0FBQztRQUM5RCxDQUFDOzs7T0FBQTtnR0FUVSxzQkFBc0I7K0RBQXRCLHNCQUFzQjt3Q0FHaEIsaUJBQWlCOzs7Ozs7WUNyQnBDLGtCQUFZOztpQ0RBWjtDQWdDQyxBQXJCRCxJQXFCQztTQWRZLHNCQUFzQjtrREFBdEIsc0JBQXNCO2NBUGxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUUsZUFBZTtnQkFDekIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxXQUFXLEVBQUUsa0NBQWtDO2FBQ2hEOztrQkFJRSxlQUFlO21CQUFDLGlCQUFpQjs7a0JBRWpDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgSW5wdXQsIFF1ZXJ5TGlzdCwgVGVtcGxhdGVSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE56T3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9uei1vcHRpb24uY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotb3B0aW9uLWdyb3VwJyxcclxuICBleHBvcnRBczogJ256T3B0aW9uR3JvdXAnLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LW9wdGlvbi1ncm91cC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE56T3B0aW9uR3JvdXBDb21wb25lbnQge1xyXG4gIGlzTGFiZWxTdHJpbmcgPSBmYWxzZTtcclxuICBsYWJlbDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQENvbnRlbnRDaGlsZHJlbihOek9wdGlvbkNvbXBvbmVudCkgbGlzdE9mTnpPcHRpb25Db21wb25lbnQ6IFF1ZXJ5TGlzdDxOek9wdGlvbkNvbXBvbmVudD47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56TGFiZWwodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XHJcbiAgICB0aGlzLmxhYmVsID0gdmFsdWU7XHJcbiAgICB0aGlzLmlzTGFiZWxTdHJpbmcgPSAhKHRoaXMubnpMYWJlbCBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKTtcclxuICB9XHJcblxyXG4gIGdldCBuekxhYmVsKCk6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLmxhYmVsO1xyXG4gIH1cclxufVxyXG4iLCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiJdfQ==