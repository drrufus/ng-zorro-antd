/**
 * @fileoverview added by tsickle
 * Generated from: classlist_add.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
var NzClassListAddDirective = /** @class */ (function () {
    function NzClassListAddDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.classList = [];
    }
    Object.defineProperty(NzClassListAddDirective.prototype, "nzClassListAdd", {
        set: /**
         * @param {?} list
         * @return {?}
         */
        function (list) {
            var _this = this;
            this.classList.forEach((/**
             * @param {?} name
             * @return {?}
             */
            function (name) {
                _this.renderer.removeClass(_this.elementRef.nativeElement, name);
            }));
            list.forEach((/**
             * @param {?} name
             * @return {?}
             */
            function (name) {
                _this.renderer.addClass(_this.elementRef.nativeElement, name);
            }));
            this.classList = list;
        },
        enumerable: true,
        configurable: true
    });
    NzClassListAddDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nzClassListAdd]',
                    exportAs: 'nzClassListAdd'
                },] }
    ];
    /** @nocollapse */
    NzClassListAddDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    NzClassListAddDirective.propDecorators = {
        nzClassListAdd: [{ type: Input }]
    };
    return NzClassListAddDirective;
}());
export { NzClassListAddDirective };
if (false) {
    /** @type {?} */
    NzClassListAddDirective.prototype.classList;
    /**
     * @type {?}
     * @private
     */
    NzClassListAddDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzClassListAddDirective.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NsaXN0X2FkZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS9hZGRvbi8iLCJzb3VyY2VzIjpbImNsYXNzbGlzdF9hZGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4RTtJQWtCRSxpQ0FBb0IsVUFBc0IsRUFBVSxRQUFtQjtRQUFuRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQWJ2RSxjQUFTLEdBQWEsRUFBRSxDQUFDO0lBYWlELENBQUM7SUFYM0Usc0JBQ0ksbURBQWM7Ozs7O1FBRGxCLFVBQ21CLElBQWM7WUFEakMsaUJBU0M7WUFQQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU87Ozs7WUFBQyxVQUFBLElBQUk7Z0JBQ3pCLEtBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2pFLENBQUMsRUFBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLE9BQU87Ozs7WUFBQyxVQUFBLElBQUk7Z0JBQ2YsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDOUQsQ0FBQyxFQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN4QixDQUFDOzs7T0FBQTs7Z0JBaEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixRQUFRLEVBQUUsZ0JBQWdCO2lCQUMzQjs7OztnQkFMbUIsVUFBVTtnQkFBUyxTQUFTOzs7aUNBUzdDLEtBQUs7O0lBWVIsOEJBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQWZZLHVCQUF1Qjs7O0lBQ2xDLDRDQUF5Qjs7Ozs7SUFhYiw2Q0FBOEI7Ozs7O0lBQUUsMkNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW256Q2xhc3NMaXN0QWRkXScsXHJcbiAgZXhwb3J0QXM6ICduekNsYXNzTGlzdEFkZCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE56Q2xhc3NMaXN0QWRkRGlyZWN0aXZlIHtcclxuICBjbGFzc0xpc3Q6IHN0cmluZ1tdID0gW107XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56Q2xhc3NMaXN0QWRkKGxpc3Q6IHN0cmluZ1tdKSB7XHJcbiAgICB0aGlzLmNsYXNzTGlzdC5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBuYW1lKTtcclxuICAgIH0pO1xyXG4gICAgbGlzdC5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBuYW1lKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jbGFzc0xpc3QgPSBsaXN0O1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XHJcbn1cclxuIl19