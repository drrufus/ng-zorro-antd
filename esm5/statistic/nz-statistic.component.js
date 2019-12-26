/**
 * @fileoverview added by tsickle
 * Generated from: nz-statistic.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
var NzStatisticComponent = /** @class */ (function () {
    function NzStatisticComponent() {
        this.nzValueStyle = {};
    }
    NzStatisticComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-statistic',
                    exportAs: 'nzStatistic',
                    template: "<div class=\"ant-statistic-title\">\r\n  <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\r\n</div>\r\n<div class=\"ant-statistic-content\" [ngStyle]=\"nzValueStyle\">\r\n  <span *ngIf=\"nzPrefix\" class=\"ant-statistic-content-prefix\">\r\n    <ng-container *nzStringTemplateOutlet=\"nzPrefix\">{{ nzPrefix }}</ng-container>\r\n  </span>\r\n  <nz-statistic-number\r\n    [nzValue]=\"nzValue\"\r\n    [nzValueTemplate]=\"nzValueTemplate\">\r\n  </nz-statistic-number>\r\n  <span *ngIf=\"nzSuffix\" class=\"ant-statistic-content-suffix\">\r\n    <ng-container *nzStringTemplateOutlet=\"nzSuffix\">{{ nzSuffix }}</ng-container>\r\n  </span>\r\n</div>\r\n",
                    host: {
                        class: 'ant-statistic'
                    },
                    styles: ['nz-statistic { display: block; }']
                }] }
    ];
    NzStatisticComponent.propDecorators = {
        nzPrefix: [{ type: Input }],
        nzSuffix: [{ type: Input }],
        nzTitle: [{ type: Input }],
        nzValue: [{ type: Input }],
        nzValueStyle: [{ type: Input }],
        nzValueTemplate: [{ type: Input }]
    };
    return NzStatisticComponent;
}());
export { NzStatisticComponent };
if (false) {
    /** @type {?} */
    NzStatisticComponent.prototype.nzPrefix;
    /** @type {?} */
    NzStatisticComponent.prototype.nzSuffix;
    /** @type {?} */
    NzStatisticComponent.prototype.nzTitle;
    /** @type {?} */
    NzStatisticComponent.prototype.nzValue;
    /** @type {?} */
    NzStatisticComponent.prototype.nzValueStyle;
    /** @type {?} */
    NzStatisticComponent.prototype.nzValueTemplate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3RhdGlzdGljLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc3RhdGlzdGljLyIsInNvdXJjZXMiOlsibnotc3RhdGlzdGljLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHMUc7SUFBQTtRQWdCVyxpQkFBWSxHQUFHLEVBQUUsQ0FBQztJQUU3QixDQUFDOztnQkFsQkEsU0FBUyxTQUFDO29CQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRSxhQUFhO29CQUN2QixzckJBQTRDO29CQUM1QyxJQUFJLEVBQUU7d0JBQ0osS0FBSyxFQUFFLGVBQWU7cUJBQ3ZCOzZCQUNRLGtDQUFrQztpQkFDNUM7OzsyQkFFRSxLQUFLOzJCQUNMLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLOytCQUNMLEtBQUs7a0NBQ0wsS0FBSzs7SUFDUiwyQkFBQztDQUFBLEFBbEJELElBa0JDO1NBUFksb0JBQW9COzs7SUFDL0Isd0NBQThDOztJQUM5Qyx3Q0FBOEM7O0lBQzlDLHVDQUE2Qzs7SUFDN0MsdUNBQXVDOztJQUN2Qyw0Q0FBMkI7O0lBQzNCLCtDQUEyRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOelN0YXRpc3RpY1ZhbHVlVHlwZSB9IGZyb20gJy4vbnotc3RhdGlzdGljLWRlZmluaXRpb25zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc2VsZWN0b3I6ICduei1zdGF0aXN0aWMnLFxyXG4gIGV4cG9ydEFzOiAnbnpTdGF0aXN0aWMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1zdGF0aXN0aWMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnYW50LXN0YXRpc3RpYydcclxuICB9LFxyXG4gIHN0eWxlczogWyduei1zdGF0aXN0aWMgeyBkaXNwbGF5OiBibG9jazsgfSddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelN0YXRpc3RpY0NvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgbnpQcmVmaXg6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56U3VmZml4OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuelRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuelZhbHVlOiBOelN0YXRpc3RpY1ZhbHVlVHlwZTtcclxuICBASW5wdXQoKSBuelZhbHVlU3R5bGUgPSB7fTtcclxuICBASW5wdXQoKSBuelZhbHVlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelN0YXRpc3RpY1ZhbHVlVHlwZSB9PjtcclxufVxyXG4iXX0=