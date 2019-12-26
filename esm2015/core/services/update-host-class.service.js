/**
 * @fileoverview added by tsickle
 * Generated from: services/update-host-class.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Injectable, RendererFactory2 } from '@angular/core';
export class NzUpdateHostClassService {
    /**
     * @param {?} rendererFactory2
     */
    constructor(rendererFactory2) {
        this.classMap = {};
        this.renderer = rendererFactory2.createRenderer(null, null);
    }
    /**
     * @param {?} el
     * @param {?} classMap
     * @return {?}
     */
    updateHostClass(el, classMap) {
        this.removeClass(el, this.classMap, this.renderer);
        this.classMap = Object.assign({}, classMap);
        this.addClass(el, this.classMap, this.renderer);
    }
    /**
     * @private
     * @param {?} el
     * @param {?} classMap
     * @param {?} renderer
     * @return {?}
     */
    removeClass(el, classMap, renderer) {
        for (const i in classMap) {
            if (classMap.hasOwnProperty(i)) {
                renderer.removeClass(el, i);
            }
        }
    }
    /**
     * @private
     * @param {?} el
     * @param {?} classMap
     * @param {?} renderer
     * @return {?}
     */
    addClass(el, classMap, renderer) {
        for (const i in classMap) {
            if (classMap.hasOwnProperty(i) && classMap[i]) {
                renderer.addClass(el, i);
            }
        }
    }
}
NzUpdateHostClassService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NzUpdateHostClassService.ctorParameters = () => [
    { type: RendererFactory2 }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzUpdateHostClassService.prototype.classMap;
    /** @type {?} */
    NzUpdateHostClassService.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWhvc3QtY2xhc3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL3VwZGF0ZS1ob3N0LWNsYXNzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUt4RSxNQUFNLE9BQU8sd0JBQXdCOzs7O0lBMEJuQyxZQUFZLGdCQUFrQztRQXpCdEMsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQTBCcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7OztJQXhCRCxlQUFlLENBQUMsRUFBZSxFQUFFLFFBQWdCO1FBQy9DLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxRQUFRLHFCQUFRLFFBQVEsQ0FBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7Ozs7O0lBRU8sV0FBVyxDQUFDLEVBQWUsRUFBRSxRQUEwQixFQUFFLFFBQW1CO1FBQ2xGLEtBQUssTUFBTSxDQUFDLElBQUksUUFBUSxFQUFFO1lBQ3hCLElBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDOUIsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDN0I7U0FDRjtJQUNILENBQUM7Ozs7Ozs7O0lBRU8sUUFBUSxDQUFDLEVBQWUsRUFBRSxRQUEwQixFQUFFLFFBQW1CO1FBQy9FLEtBQUssTUFBTSxDQUFDLElBQUksUUFBUSxFQUFFO1lBQ3hCLElBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzdDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQzFCO1NBQ0Y7SUFDSCxDQUFDOzs7WUF6QkYsVUFBVTs7OztZQUpxQixnQkFBZ0I7Ozs7Ozs7SUFNOUMsNENBQXNCOztJQUN0Qiw0Q0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEluamVjdGFibGUsIFJlbmRlcmVyMiwgUmVuZGVyZXJGYWN0b3J5MiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTmdDbGFzc0ludGVyZmFjZSB9IGZyb20gJy4uL3R5cGVzL25nLWNsYXNzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBjbGFzc01hcCA9IHt9O1xyXG4gIHJlYWRvbmx5IHJlbmRlcmVyOiBSZW5kZXJlcjI7XHJcblxyXG4gIHVwZGF0ZUhvc3RDbGFzcyhlbDogSFRNTEVsZW1lbnQsIGNsYXNzTWFwOiBvYmplY3QpOiB2b2lkIHtcclxuICAgIHRoaXMucmVtb3ZlQ2xhc3MoZWwsIHRoaXMuY2xhc3NNYXAsIHRoaXMucmVuZGVyZXIpO1xyXG4gICAgdGhpcy5jbGFzc01hcCA9IHsgLi4uY2xhc3NNYXAgfTtcclxuICAgIHRoaXMuYWRkQ2xhc3MoZWwsIHRoaXMuY2xhc3NNYXAsIHRoaXMucmVuZGVyZXIpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVDbGFzcyhlbDogSFRNTEVsZW1lbnQsIGNsYXNzTWFwOiBOZ0NsYXNzSW50ZXJmYWNlLCByZW5kZXJlcjogUmVuZGVyZXIyKTogdm9pZCB7XHJcbiAgICBmb3IgKGNvbnN0IGkgaW4gY2xhc3NNYXApIHtcclxuICAgICAgaWYgKGNsYXNzTWFwLmhhc093blByb3BlcnR5KGkpKSB7XHJcbiAgICAgICAgcmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWwsIGkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkZENsYXNzKGVsOiBIVE1MRWxlbWVudCwgY2xhc3NNYXA6IE5nQ2xhc3NJbnRlcmZhY2UsIHJlbmRlcmVyOiBSZW5kZXJlcjIpOiB2b2lkIHtcclxuICAgIGZvciAoY29uc3QgaSBpbiBjbGFzc01hcCkge1xyXG4gICAgICBpZiAoY2xhc3NNYXAuaGFzT3duUHJvcGVydHkoaSkgJiYgY2xhc3NNYXBbaV0pIHtcclxuICAgICAgICByZW5kZXJlci5hZGRDbGFzcyhlbCwgaSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHJlbmRlcmVyRmFjdG9yeTI6IFJlbmRlcmVyRmFjdG9yeTIpIHtcclxuICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlckZhY3RvcnkyLmNyZWF0ZVJlbmRlcmVyKG51bGwsIG51bGwpO1xyXG4gIH1cclxufVxyXG4iXX0=