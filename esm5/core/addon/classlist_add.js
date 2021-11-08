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
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
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
    /** @nocollapse */
    NzClassListAddDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    NzClassListAddDirective.propDecorators = {
        nzClassListAdd: [{ type: Input }]
    };
NzClassListAddDirective.ɵfac = function NzClassListAddDirective_Factory(t) { return new (t || NzClassListAddDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2)); };
NzClassListAddDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzClassListAddDirective, selectors: [["", "nzClassListAdd", ""]], inputs: { nzClassListAdd: "nzClassListAdd" }, exportAs: ["nzClassListAdd"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzClassListAddDirective, [{
        type: Directive,
        args: [{
                selector: '[nzClassListAdd]',
                exportAs: 'nzClassListAdd'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }]; }, { nzClassListAdd: [{
            type: Input
        }] }); })();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NsaXN0X2FkZC5qcyIsInNvdXJjZXMiOlsibmc6L25nLXpvcnJvLWFudGQvY29yZS9hZGRvbi9jbGFzc2xpc3RfYWRkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFeEU7SUFrQkUsaUNBQW9CLFVBQXNCLEVBQVUsUUFBbUI7UUFBbkQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFidkUsY0FBUyxHQUFhLEVBQUUsQ0FBQztJQWFpRCxDQUFDO0lBWDNFLHNCQUNJLG1EQUFjOzs7OztRQURsQixVQUNtQixJQUFjO1lBRGpDLGlCQVNDO1lBUEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQSxJQUFJO2dCQUN6QixLQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNqRSxDQUFDLEVBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQSxJQUFJO2dCQUNmLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzlELENBQUMsRUFBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDeEIsQ0FBQzs7O09BQUEsQUFaTTs7b0NBSlIsU0FBUyxTQUFDO1FBQ1QsUUFBUSxFQUFFLEZBSFEsVUFBVTtNQUdBLFVBSFMsU0FBUztBQUk5QyxRQUFRO0FBQUUsZ0JBQWdCLGtCQUMzQjtpQ0FJRSxLQUFLOzs7Ozs7Ozs7Ozs7b0JBQ0Q7SUFXUCw4QkFBQztDQUFBLEFBbkJELElBbUJDO1NBZlksdUJBQXVCOzs7SUFDbEMsNENBQXlCOzs7OztJQWFiLDZDQUE4Qjs7Ozs7SUFBRSwyQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbnpDbGFzc0xpc3RBZGRdJyxcclxuICBleHBvcnRBczogJ256Q2xhc3NMaXN0QWRkJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpDbGFzc0xpc3RBZGREaXJlY3RpdmUge1xyXG4gIGNsYXNzTGlzdDogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpDbGFzc0xpc3RBZGQobGlzdDogc3RyaW5nW10pIHtcclxuICAgIHRoaXMuY2xhc3NMaXN0LmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIG5hbWUpO1xyXG4gICAgfSk7XHJcbiAgICBsaXN0LmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIG5hbWUpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNsYXNzTGlzdCA9IGxpc3Q7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge31cclxufVxyXG4iXX0=