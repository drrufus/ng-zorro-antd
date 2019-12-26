/**
 * @fileoverview added by tsickle
 * Generated from: nz-tabs-ink-bar.directive.ts
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
import { Directive, ElementRef, Input, NgZone, Renderer2 } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core';
var NzTabsInkBarDirective = /** @class */ (function () {
    function NzTabsInkBarDirective(renderer, elementRef, ngZone) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.nzAnimated = false;
        this.nzPositionMode = 'horizontal';
        renderer.addClass(elementRef.nativeElement, 'ant-tabs-ink-bar');
    }
    /**
     * @param {?} element
     * @return {?}
     */
    NzTabsInkBarDirective.prototype.alignToElement = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        var _this = this;
        if (typeof requestAnimationFrame !== 'undefined') {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                requestAnimationFrame((/**
                 * @return {?}
                 */
                function () { return _this.setStyles(element); }));
            }));
        }
        else {
            this.setStyles(element);
        }
    };
    /**
     * @param {?} element
     * @return {?}
     */
    NzTabsInkBarDirective.prototype.setStyles = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        /** when horizontal remove height style and add transform left **/
        if (this.nzPositionMode === 'horizontal') {
            this.renderer.removeStyle(this.elementRef.nativeElement, 'height');
            this.renderer.setStyle(this.elementRef.nativeElement, 'transform', "translate3d(" + this.getLeftPosition(element) + ", 0px, 0px)");
            this.renderer.setStyle(this.elementRef.nativeElement, 'width', this.getElementWidth(element));
        }
        else {
            /** when vertical remove width style and add transform top **/
            this.renderer.removeStyle(this.elementRef.nativeElement, 'width');
            this.renderer.setStyle(this.elementRef.nativeElement, 'transform', "translate3d(0px, " + this.getTopPosition(element) + ", 0px)");
            this.renderer.setStyle(this.elementRef.nativeElement, 'height', this.getElementHeight(element));
        }
    };
    /**
     * @param {?} element
     * @return {?}
     */
    NzTabsInkBarDirective.prototype.getLeftPosition = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        return element ? element.offsetLeft + 'px' : '0';
    };
    /**
     * @param {?} element
     * @return {?}
     */
    NzTabsInkBarDirective.prototype.getElementWidth = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        return element ? element.offsetWidth + 'px' : '0';
    };
    /**
     * @param {?} element
     * @return {?}
     */
    NzTabsInkBarDirective.prototype.getTopPosition = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        return element ? element.offsetTop + 'px' : '0';
    };
    /**
     * @param {?} element
     * @return {?}
     */
    NzTabsInkBarDirective.prototype.getElementHeight = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        return element ? element.offsetHeight + 'px' : '0';
    };
    NzTabsInkBarDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-tabs-ink-bar]',
                    exportAs: 'nzTabsInkBar',
                    host: {
                        '[class.ant-tabs-ink-bar-animated]': 'nzAnimated',
                        '[class.ant-tabs-ink-bar-no-animated]': '!nzAnimated'
                    }
                },] }
    ];
    /** @nocollapse */
    NzTabsInkBarDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    NzTabsInkBarDirective.propDecorators = {
        nzAnimated: [{ type: Input }],
        nzPositionMode: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTabsInkBarDirective.prototype, "nzAnimated", void 0);
    return NzTabsInkBarDirective;
}());
export { NzTabsInkBarDirective };
if (false) {
    /** @type {?} */
    NzTabsInkBarDirective.prototype.nzAnimated;
    /** @type {?} */
    NzTabsInkBarDirective.prototype.nzPositionMode;
    /**
     * @type {?}
     * @private
     */
    NzTabsInkBarDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzTabsInkBarDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzTabsInkBarDirective.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFicy1pbmstYmFyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdGFicy8iLCJzb3VyY2VzIjpbIm56LXRhYnMtaW5rLWJhci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWhGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUlsRDtJQWFFLCtCQUFvQixRQUFtQixFQUFVLFVBQXNCLEVBQVUsTUFBYztRQUEzRSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFKdEUsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUVuQyxtQkFBYyxHQUFzQixZQUFZLENBQUM7UUFHeEQsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDbEUsQ0FBQzs7Ozs7SUFFRCw4Q0FBYzs7OztJQUFkLFVBQWUsT0FBb0I7UUFBbkMsaUJBUUM7UUFQQyxJQUFJLE9BQU8scUJBQXFCLEtBQUssV0FBVyxFQUFFO1lBQ2hELElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCOzs7WUFBQztnQkFDNUIscUJBQXFCOzs7Z0JBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQXZCLENBQXVCLEVBQUMsQ0FBQztZQUN2RCxDQUFDLEVBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCx5Q0FBUzs7OztJQUFULFVBQVUsT0FBb0I7UUFDNUIsa0VBQWtFO1FBQ2xFLElBQUksSUFBSSxDQUFDLGNBQWMsS0FBSyxZQUFZLEVBQUU7WUFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDbkUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUM3QixXQUFXLEVBQ1gsaUJBQWUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsZ0JBQWEsQ0FDMUQsQ0FBQztZQUNGLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDL0Y7YUFBTTtZQUNMLDhEQUE4RDtZQUM5RCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUNsRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQzdCLFdBQVcsRUFDWCxzQkFBb0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsV0FBUSxDQUN6RCxDQUFDO1lBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQ2pHO0lBQ0gsQ0FBQzs7Ozs7SUFFRCwrQ0FBZTs7OztJQUFmLFVBQWdCLE9BQW9CO1FBQ2xDLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQ25ELENBQUM7Ozs7O0lBRUQsK0NBQWU7Ozs7SUFBZixVQUFnQixPQUFvQjtRQUNsQyxPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUNwRCxDQUFDOzs7OztJQUVELDhDQUFjOzs7O0lBQWQsVUFBZSxPQUFvQjtRQUNqQyxPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUNsRCxDQUFDOzs7OztJQUVELGdEQUFnQjs7OztJQUFoQixVQUFpQixPQUFvQjtRQUNuQyxPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUNyRCxDQUFDOztnQkEvREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFFBQVEsRUFBRSxjQUFjO29CQUN4QixJQUFJLEVBQUU7d0JBQ0osbUNBQW1DLEVBQUUsWUFBWTt3QkFDakQsc0NBQXNDLEVBQUUsYUFBYTtxQkFDdEQ7aUJBQ0Y7Ozs7Z0JBYjhDLFNBQVM7Z0JBQXBDLFVBQVU7Z0JBQVMsTUFBTTs7OzZCQWUxQyxLQUFLO2lDQUVMLEtBQUs7O0lBRm1CO1FBQWYsWUFBWSxFQUFFOzs2REFBb0I7SUF1RDlDLDRCQUFDO0NBQUEsQUFoRUQsSUFnRUM7U0F4RFkscUJBQXFCOzs7SUFDaEMsMkNBQTRDOztJQUU1QywrQ0FBMEQ7Ozs7O0lBRTlDLHlDQUEyQjs7Ozs7SUFBRSwyQ0FBOEI7Ozs7O0lBQUUsdUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBOZ1pvbmUsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56VGFiUG9zaXRpb25Nb2RlIH0gZnJvbSAnLi9uei10YWJzZXQuY29tcG9uZW50JztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW256LXRhYnMtaW5rLWJhcl0nLFxyXG4gIGV4cG9ydEFzOiAnbnpUYWJzSW5rQmFyJyxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC10YWJzLWluay1iYXItYW5pbWF0ZWRdJzogJ256QW5pbWF0ZWQnLFxyXG4gICAgJ1tjbGFzcy5hbnQtdGFicy1pbmstYmFyLW5vLWFuaW1hdGVkXSc6ICchbnpBbmltYXRlZCdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelRhYnNJbmtCYXJEaXJlY3RpdmUge1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekFuaW1hdGVkID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIG56UG9zaXRpb25Nb2RlOiBOelRhYlBvc2l0aW9uTW9kZSA9ICdob3Jpem9udGFsJztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUpIHtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC10YWJzLWluay1iYXInKTtcclxuICB9XHJcblxyXG4gIGFsaWduVG9FbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XHJcbiAgICBpZiAodHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLnNldFN0eWxlcyhlbGVtZW50KSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdHlsZXMoZWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRTdHlsZXMoZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuICAgIC8qKiB3aGVuIGhvcml6b250YWwgcmVtb3ZlIGhlaWdodCBzdHlsZSBhbmQgYWRkIHRyYW5zZm9ybSBsZWZ0ICoqL1xyXG4gICAgaWYgKHRoaXMubnpQb3NpdGlvbk1vZGUgPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0Jyk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXHJcbiAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgJ3RyYW5zZm9ybScsXHJcbiAgICAgICAgYHRyYW5zbGF0ZTNkKCR7dGhpcy5nZXRMZWZ0UG9zaXRpb24oZWxlbWVudCl9LCAwcHgsIDBweClgXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsIHRoaXMuZ2V0RWxlbWVudFdpZHRoKGVsZW1lbnQpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8qKiB3aGVuIHZlcnRpY2FsIHJlbW92ZSB3aWR0aCBzdHlsZSBhbmQgYWRkIHRyYW5zZm9ybSB0b3AgKiovXHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcpO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxyXG4gICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgICd0cmFuc2Zvcm0nLFxyXG4gICAgICAgIGB0cmFuc2xhdGUzZCgwcHgsICR7dGhpcy5nZXRUb3BQb3NpdGlvbihlbGVtZW50KX0sIDBweClgXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLCB0aGlzLmdldEVsZW1lbnRIZWlnaHQoZWxlbWVudCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0TGVmdFBvc2l0aW9uKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogc3RyaW5nIHtcclxuICAgIHJldHVybiBlbGVtZW50ID8gZWxlbWVudC5vZmZzZXRMZWZ0ICsgJ3B4JyA6ICcwJztcclxuICB9XHJcblxyXG4gIGdldEVsZW1lbnRXaWR0aChlbGVtZW50OiBIVE1MRWxlbWVudCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gZWxlbWVudCA/IGVsZW1lbnQub2Zmc2V0V2lkdGggKyAncHgnIDogJzAnO1xyXG4gIH1cclxuXHJcbiAgZ2V0VG9wUG9zaXRpb24oZWxlbWVudDogSFRNTEVsZW1lbnQpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGVsZW1lbnQgPyBlbGVtZW50Lm9mZnNldFRvcCArICdweCcgOiAnMCc7XHJcbiAgfVxyXG5cclxuICBnZXRFbGVtZW50SGVpZ2h0KGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogc3RyaW5nIHtcclxuICAgIHJldHVybiBlbGVtZW50ID8gZWxlbWVudC5vZmZzZXRIZWlnaHQgKyAncHgnIDogJzAnO1xyXG4gIH1cclxufVxyXG4iXX0=