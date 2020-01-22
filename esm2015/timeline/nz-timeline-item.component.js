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
export class NzTimelineItemComponent {
    /**
     * @param {?} renderer
     * @param {?} cdr
     */
    constructor(renderer, cdr) {
        this.renderer = renderer;
        this.cdr = cdr;
        this.nzColor = 'blue';
        this.isLast = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.tryUpdateCustomColor();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzColor) {
            this.tryUpdateCustomColor();
        }
    }
    /**
     * @return {?}
     */
    detectChanges() {
        this.cdr.detectChanges();
    }
    /**
     * @private
     * @return {?}
     */
    tryUpdateCustomColor() {
        /** @type {?} */
        const defaultColors = ['blue', 'red', 'green', 'gray'];
        /** @type {?} */
        const circle = this.liTemplate.nativeElement.querySelector('.ant-timeline-item-head');
        if (defaultColors.indexOf(this.nzColor) === -1) {
            this.renderer.setStyle(circle, 'border-color', this.nzColor);
        }
        else {
            this.renderer.removeStyle(circle, 'border-color');
        }
    }
}
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
NzTimelineItemComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
NzTimelineItemComponent.propDecorators = {
    liTemplate: [{ type: ViewChild, args: ['liTemplate', { static: true },] }],
    nzColor: [{ type: Input }],
    nzDot: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGltZWxpbmUtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3RpbWVsaW5lLyIsInNvdXJjZXMiOlsibnotdGltZWxpbmUtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFHTCxTQUFTLEVBR1QsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQWN2QixNQUFNLE9BQU8sdUJBQXVCOzs7OztJQVFsQyxZQUFvQixRQUFtQixFQUFVLEdBQXNCO1FBQW5ELGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQU45RCxZQUFPLEdBQXdCLE1BQU0sQ0FBQztRQUcvQyxXQUFNLEdBQUcsS0FBSyxDQUFDO0lBRzJELENBQUM7Ozs7SUFFM0UsUUFBUTtRQUNOLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUNuQixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztTQUM3QjtJQUNILENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVPLG9CQUFvQjs7Y0FDcEIsYUFBYSxHQUFHLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDOztjQUNoRCxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLHlCQUF5QixDQUFDO1FBQ3JGLElBQUksYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDOUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLGNBQWMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDOUQ7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQztTQUNuRDtJQUNILENBQUM7OztZQXhDRixTQUFTLFNBQUM7Z0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixRQUFRLEVBQUUsc0NBQXNDO2dCQUNoRCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQix3MUJBQWdEO2FBQ2pEOzs7O1lBbEJDLFNBQVM7WUFOVCxpQkFBaUI7Ozt5QkEwQmhCLFNBQVMsU0FBQyxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO3NCQUN4QyxLQUFLO29CQUNMLEtBQUs7Ozs7SUFGTiw2Q0FBa0U7O0lBQ2xFLDBDQUErQzs7SUFDL0Msd0NBQTJDOztJQUUzQyx5Q0FBZTs7SUFDZiwyQ0FBcUM7Ozs7O0lBRXpCLDJDQUEyQjs7Ozs7SUFBRSxzQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uSW5pdCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56VGltZWxpbmVNb2RlIH0gZnJvbSAnLi9uei10aW1lbGluZS5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IHR5cGUgTnpUaW1lbGluZUl0ZW1Db2xvciA9ICdyZWQnIHwgJ2JsdWUnIHwgJ2dyZWVuJyB8ICdncmF5JyB8IHN0cmluZztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgc2VsZWN0b3I6ICduei10aW1lbGluZS1pdGVtLCBbbnotdGltZWxpbmUtaXRlbV0nLFxyXG4gIGV4cG9ydEFzOiAnbnpUaW1lbGluZUl0ZW0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei10aW1lbGluZS1pdGVtLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpUaW1lbGluZUl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgQFZpZXdDaGlsZCgnbGlUZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pIGxpVGVtcGxhdGU6IEVsZW1lbnRSZWY7XHJcbiAgQElucHV0KCkgbnpDb2xvcjogTnpUaW1lbGluZUl0ZW1Db2xvciA9ICdibHVlJztcclxuICBASW5wdXQoKSBuekRvdDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIGlzTGFzdCA9IGZhbHNlO1xyXG4gIHBvc2l0aW9uOiBOelRpbWVsaW5lTW9kZSB8IHVuZGVmaW5lZDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy50cnlVcGRhdGVDdXN0b21Db2xvcigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMubnpDb2xvcikge1xyXG4gICAgICB0aGlzLnRyeVVwZGF0ZUN1c3RvbUNvbG9yKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkZXRlY3RDaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0cnlVcGRhdGVDdXN0b21Db2xvcigpOiB2b2lkIHtcclxuICAgIGNvbnN0IGRlZmF1bHRDb2xvcnMgPSBbJ2JsdWUnLCAncmVkJywgJ2dyZWVuJywgJ2dyYXknXTtcclxuICAgIGNvbnN0IGNpcmNsZSA9IHRoaXMubGlUZW1wbGF0ZS5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbnQtdGltZWxpbmUtaXRlbS1oZWFkJyk7XHJcbiAgICBpZiAoZGVmYXVsdENvbG9ycy5pbmRleE9mKHRoaXMubnpDb2xvcikgPT09IC0xKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoY2lyY2xlLCAnYm9yZGVyLWNvbG9yJywgdGhpcy5uekNvbG9yKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUoY2lyY2xlLCAnYm9yZGVyLWNvbG9yJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==