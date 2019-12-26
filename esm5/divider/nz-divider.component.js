/**
 * @fileoverview added by tsickle
 * Generated from: nz-divider.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { InputBoolean, NzUpdateHostClassService } from 'ng-zorro-antd/core';
var NzDividerComponent = /** @class */ (function () {
    function NzDividerComponent(elementRef, nzUpdateHostClassService) {
        this.elementRef = elementRef;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.nzType = 'horizontal';
        this.nzOrientation = 'center';
        this.nzDashed = false;
    }
    /**
     * @private
     * @return {?}
     */
    NzDividerComponent.prototype.setClass = /**
     * @private
     * @return {?}
     */
    function () {
        var _a;
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, (_a = {},
            _a['ant-divider'] = true,
            _a["ant-divider-" + this.nzType] = true,
            _a["ant-divider-with-text-" + this.nzOrientation] = this.nzText,
            _a["ant-divider-dashed"] = this.nzDashed,
            _a));
    };
    /**
     * @return {?}
     */
    NzDividerComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.setClass();
    };
    /**
     * @return {?}
     */
    NzDividerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClass();
    };
    NzDividerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-divider',
                    exportAs: 'nzDivider',
                    template: "<span *ngIf=\"nzText\" class=\"ant-divider-inner-text\">\r\n  <ng-container *nzStringTemplateOutlet=\"nzText\">{{ nzText }}</ng-container>\r\n</span>",
                    preserveWhitespaces: false,
                    providers: [NzUpdateHostClassService],
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NzDividerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NzUpdateHostClassService }
    ]; };
    NzDividerComponent.propDecorators = {
        nzText: [{ type: Input }],
        nzType: [{ type: Input }],
        nzOrientation: [{ type: Input }],
        nzDashed: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzDividerComponent.prototype, "nzDashed", void 0);
    return NzDividerComponent;
}());
export { NzDividerComponent };
if (false) {
    /** @type {?} */
    NzDividerComponent.prototype.nzText;
    /** @type {?} */
    NzDividerComponent.prototype.nzType;
    /** @type {?} */
    NzDividerComponent.prototype.nzOrientation;
    /** @type {?} */
    NzDividerComponent.prototype.nzDashed;
    /**
     * @type {?}
     * @private
     */
    NzDividerComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzDividerComponent.prototype.nzUpdateHostClassService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZGl2aWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2RpdmlkZXIvIiwic291cmNlcyI6WyJuei1kaXZpZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFJTCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTVFO0lBd0JFLDRCQUFvQixVQUFzQixFQUFVLHdCQUFrRDtRQUFsRixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQWI3RixXQUFNLEdBQThCLFlBQVksQ0FBQztRQUNqRCxrQkFBYSxHQUFnQyxRQUFRLENBQUM7UUFDdEMsYUFBUSxHQUFHLEtBQUssQ0FBQztJQVcrRCxDQUFDOzs7OztJQVRsRyxxQ0FBUTs7OztJQUFoQjs7UUFDRSxJQUFJLENBQUMsd0JBQXdCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYTtZQUN6RSxHQUFDLGFBQWEsSUFBRyxJQUFJO1lBQ3JCLEdBQUMsaUJBQWUsSUFBSSxDQUFDLE1BQVEsSUFBRyxJQUFJO1lBQ3BDLEdBQUMsMkJBQXlCLElBQUksQ0FBQyxhQUFlLElBQUcsSUFBSSxDQUFDLE1BQU07WUFDNUQsR0FBQyxvQkFBb0IsSUFBRyxJQUFJLENBQUMsUUFBUTtnQkFDckMsQ0FBQztJQUNMLENBQUM7Ozs7SUFJRCx3Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELHFDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDOztnQkFoQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsV0FBVztvQkFDckIsaUtBQTBDO29CQUMxQyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztvQkFDckMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFsQkMsVUFBVTtnQkFRVyx3QkFBd0I7Ozt5QkFZNUMsS0FBSzt5QkFDTCxLQUFLO2dDQUNMLEtBQUs7MkJBQ0wsS0FBSzs7SUFBbUI7UUFBZixZQUFZLEVBQUU7O3dEQUFrQjtJQW9CNUMseUJBQUM7Q0FBQSxBQWpDRCxJQWlDQztTQXhCWSxrQkFBa0I7OztJQUM3QixvQ0FBNEM7O0lBQzVDLG9DQUEwRDs7SUFDMUQsMkNBQStEOztJQUMvRCxzQ0FBMEM7Ozs7O0lBVzlCLHdDQUE4Qjs7Ozs7SUFBRSxzREFBMEQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uSW5pdCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei1kaXZpZGVyJyxcclxuICBleHBvcnRBczogJ256RGl2aWRlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LWRpdmlkZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHByb3ZpZGVyczogW056VXBkYXRlSG9zdENsYXNzU2VydmljZV0sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpEaXZpZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xyXG4gIEBJbnB1dCgpIG56VGV4dDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpUeXBlOiAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnID0gJ2hvcml6b250YWwnO1xyXG4gIEBJbnB1dCgpIG56T3JpZW50YXRpb246ICdsZWZ0JyB8ICdyaWdodCcgfCAnY2VudGVyJyA9ICdjZW50ZXInO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRhc2hlZCA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIHNldENsYXNzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5uelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB7XHJcbiAgICAgIFsnYW50LWRpdmlkZXInXTogdHJ1ZSxcclxuICAgICAgW2BhbnQtZGl2aWRlci0ke3RoaXMubnpUeXBlfWBdOiB0cnVlLFxyXG4gICAgICBbYGFudC1kaXZpZGVyLXdpdGgtdGV4dC0ke3RoaXMubnpPcmllbnRhdGlvbn1gXTogdGhpcy5uelRleHQsXHJcbiAgICAgIFtgYW50LWRpdmlkZXItZGFzaGVkYF06IHRoaXMubnpEYXNoZWRcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0Q2xhc3MoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDbGFzcygpO1xyXG4gIH1cclxufVxyXG4iXX0=