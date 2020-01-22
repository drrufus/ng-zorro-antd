/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
var NzTimelineItemComponent = /** @class */ (function () {
    function NzTimelineItemComponent(renderer, cdr) {
        this.renderer = renderer;
        this.cdr = cdr;
        this.nzColor = 'blue';
        this.isLast = false;
    }
    /**
     * @return {?}
     */
    NzTimelineItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.tryUpdateCustomColor();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzTimelineItemComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzColor) {
            this.tryUpdateCustomColor();
        }
    };
    /**
     * @return {?}
     */
    NzTimelineItemComponent.prototype.detectChanges = /**
     * @return {?}
     */
    function () {
        this.cdr.detectChanges();
    };
    /**
     * @private
     * @return {?}
     */
    NzTimelineItemComponent.prototype.tryUpdateCustomColor = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var defaultColors = ['blue', 'red', 'green', 'gray'];
        /** @type {?} */
        var circle = this.liTemplate.nativeElement.querySelector('.ant-timeline-item-head');
        if (defaultColors.indexOf(this.nzColor) === -1) {
            this.renderer.setStyle(circle, 'border-color', this.nzColor);
        }
        else {
            this.renderer.removeStyle(circle, 'border-color');
        }
    };
    NzTimelineItemComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    selector: 'nz-timeline-item, [nz-timeline-item]',
                    exportAs: 'nzTimelineItem',
                    template: "<li\r\n  class=\"ant-timeline-item\"\r\n  [class.ant-timeline-item-right]=\"position === 'right'\"\r\n  [class.ant-timeline-item-left]=\"position === 'left'\"\r\n  [class.ant-timeline-item-last]=\"isLast\"\r\n  #liTemplate>\r\n  <div class=\"ant-timeline-item-tail\"></div>\r\n  <div\r\n    class=\"ant-timeline-item-head\"\r\n    [class.ant-timeline-item-head-red]=\"nzColor === 'red'\"\r\n    [class.ant-timeline-item-head-blue]=\"nzColor === 'blue'\"\r\n    [class.ant-timeline-item-head-green]=\"nzColor === 'green'\"\r\n    [class.ant-timeline-item-head-gray]=\"nzColor === 'gray'\"\r\n    [class.ant-timeline-item-head-custom]=\"!!nzDot\">\r\n    <ng-container *nzStringTemplateOutlet=\"nzDot\">{{ nzDot }}</ng-container>\r\n  </div>\r\n  <div class=\"ant-timeline-item-content\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</li>\r\n"
                }] }
    ];
    /** @nocollapse */
    NzTimelineItemComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ChangeDetectorRef }
    ]; };
    NzTimelineItemComponent.propDecorators = {
        liTemplate: [{ type: ViewChild, args: ['liTemplate', { static: true },] }],
        nzColor: [{ type: Input }],
        nzDot: [{ type: Input }]
    };
    return NzTimelineItemComponent;
}());
export { NzTimelineItemComponent };
if (false) {
    /** @type {?} */
    NzTimelineItemComponent.prototype.liTemplate;
    /** @type {?} */
    NzTimelineItemComponent.prototype.nzColor;
    /** @type {?} */
    NzTimelineItemComponent.prototype.nzDot;
    /** @type {?} */
    NzTimelineItemComponent.prototype.isLast;
    /** @type {?} */
    NzTimelineItemComponent.prototype.position;
    /**
     * @type {?}
     * @private
     */
    NzTimelineItemComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzTimelineItemComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGltZWxpbmUtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3RpbWVsaW5lLyIsInNvdXJjZXMiOlsibnotdGltZWxpbmUtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFHTCxTQUFTLEVBR1QsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQU12QjtJQWdCRSxpQ0FBb0IsUUFBbUIsRUFBVSxHQUFzQjtRQUFuRCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFOOUQsWUFBTyxHQUF3QixNQUFNLENBQUM7UUFHL0MsV0FBTSxHQUFHLEtBQUssQ0FBQztJQUcyRCxDQUFDOzs7O0lBRTNFLDBDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQsNkNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUNuQixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztTQUM3QjtJQUNILENBQUM7Ozs7SUFFRCwrQ0FBYTs7O0lBQWI7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRU8sc0RBQW9COzs7O0lBQTVCOztZQUNRLGFBQWEsR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQzs7WUFDaEQsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQztRQUNyRixJQUFJLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzlEO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7U0FDbkQ7SUFDSCxDQUFDOztnQkF4Q0YsU0FBUyxTQUFDO29CQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsUUFBUSxFQUFFLHNDQUFzQztvQkFDaEQsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsdzFCQUFnRDtpQkFDakQ7Ozs7Z0JBbEJDLFNBQVM7Z0JBTlQsaUJBQWlCOzs7NkJBMEJoQixTQUFTLFNBQUMsWUFBWSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTswQkFDeEMsS0FBSzt3QkFDTCxLQUFLOztJQThCUiw4QkFBQztDQUFBLEFBekNELElBeUNDO1NBakNZLHVCQUF1Qjs7O0lBQ2xDLDZDQUFrRTs7SUFDbEUsMENBQStDOztJQUMvQyx3Q0FBMkM7O0lBRTNDLHlDQUFlOztJQUNmLDJDQUFxQzs7Ozs7SUFFekIsMkNBQTJCOzs7OztJQUFFLHNDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25Jbml0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpUaW1lbGluZU1vZGUgfSBmcm9tICcuL256LXRpbWVsaW5lLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgdHlwZSBOelRpbWVsaW5lSXRlbUNvbG9yID0gJ3JlZCcgfCAnYmx1ZScgfCAnZ3JlZW4nIHwgJ2dyYXknIHwgc3RyaW5nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBzZWxlY3RvcjogJ256LXRpbWVsaW5lLWl0ZW0sIFtuei10aW1lbGluZS1pdGVtXScsXHJcbiAgZXhwb3J0QXM6ICduelRpbWVsaW5lSXRlbScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXRpbWVsaW5lLWl0ZW0uY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelRpbWVsaW5lSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBAVmlld0NoaWxkKCdsaVRlbXBsYXRlJywgeyBzdGF0aWM6IHRydWUgfSkgbGlUZW1wbGF0ZTogRWxlbWVudFJlZjtcclxuICBASW5wdXQoKSBuekNvbG9yOiBOelRpbWVsaW5lSXRlbUNvbG9yID0gJ2JsdWUnO1xyXG4gIEBJbnB1dCgpIG56RG90OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgaXNMYXN0ID0gZmFsc2U7XHJcbiAgcG9zaXRpb246IE56VGltZWxpbmVNb2RlIHwgdW5kZWZpbmVkO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRyeVVwZGF0ZUN1c3RvbUNvbG9yKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5uekNvbG9yKSB7XHJcbiAgICAgIHRoaXMudHJ5VXBkYXRlQ3VzdG9tQ29sb3IoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRldGVjdENoYW5nZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRyeVVwZGF0ZUN1c3RvbUNvbG9yKCk6IHZvaWQge1xyXG4gICAgY29uc3QgZGVmYXVsdENvbG9ycyA9IFsnYmx1ZScsICdyZWQnLCAnZ3JlZW4nLCAnZ3JheSddO1xyXG4gICAgY29uc3QgY2lyY2xlID0gdGhpcy5saVRlbXBsYXRlLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmFudC10aW1lbGluZS1pdGVtLWhlYWQnKTtcclxuICAgIGlmIChkZWZhdWx0Q29sb3JzLmluZGV4T2YodGhpcy5uekNvbG9yKSA9PT0gLTEpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShjaXJjbGUsICdib3JkZXItY29sb3InLCB0aGlzLm56Q29sb3IpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZShjaXJjbGUsICdib3JkZXItY29sb3InKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19