/**
 * @fileoverview added by tsickle
 * Generated from: services/update-host-class.service.ts
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
import { Injectable, RendererFactory2 } from '@angular/core';
var NzUpdateHostClassService = /** @class */ (function () {
    function NzUpdateHostClassService(rendererFactory2) {
        this.classMap = {};
        this.renderer = rendererFactory2.createRenderer(null, null);
    }
    /**
     * @param {?} el
     * @param {?} classMap
     * @return {?}
     */
    NzUpdateHostClassService.prototype.updateHostClass = /**
     * @param {?} el
     * @param {?} classMap
     * @return {?}
     */
    function (el, classMap) {
        this.removeClass(el, this.classMap, this.renderer);
        this.classMap = tslib_1.__assign({}, classMap);
        this.addClass(el, this.classMap, this.renderer);
    };
    /**
     * @private
     * @param {?} el
     * @param {?} classMap
     * @param {?} renderer
     * @return {?}
     */
    NzUpdateHostClassService.prototype.removeClass = /**
     * @private
     * @param {?} el
     * @param {?} classMap
     * @param {?} renderer
     * @return {?}
     */
    function (el, classMap, renderer) {
        for (var i in classMap) {
            if (classMap.hasOwnProperty(i)) {
                renderer.removeClass(el, i);
            }
        }
    };
    /**
     * @private
     * @param {?} el
     * @param {?} classMap
     * @param {?} renderer
     * @return {?}
     */
    NzUpdateHostClassService.prototype.addClass = /**
     * @private
     * @param {?} el
     * @param {?} classMap
     * @param {?} renderer
     * @return {?}
     */
    function (el, classMap, renderer) {
        for (var i in classMap) {
            if (classMap.hasOwnProperty(i) && classMap[i]) {
                renderer.addClass(el, i);
            }
        }
    };
    NzUpdateHostClassService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NzUpdateHostClassService.ctorParameters = function () { return [
        { type: RendererFactory2 }
    ]; };
    return NzUpdateHostClassService;
}());
export { NzUpdateHostClassService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzUpdateHostClassService.prototype.classMap;
    /** @type {?} */
    NzUpdateHostClassService.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWhvc3QtY2xhc3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL3VwZGF0ZS1ob3N0LWNsYXNzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJeEU7SUEyQkUsa0NBQVksZ0JBQWtDO1FBekJ0QyxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBMEJwQixJQUFJLENBQUMsUUFBUSxHQUFHLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7Ozs7O0lBeEJELGtEQUFlOzs7OztJQUFmLFVBQWdCLEVBQWUsRUFBRSxRQUFnQjtRQUMvQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsUUFBUSx3QkFBUSxRQUFRLENBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7Ozs7OztJQUVPLDhDQUFXOzs7Ozs7O0lBQW5CLFVBQW9CLEVBQWUsRUFBRSxRQUEwQixFQUFFLFFBQW1CO1FBQ2xGLEtBQUssSUFBTSxDQUFDLElBQUksUUFBUSxFQUFFO1lBQ3hCLElBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDOUIsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDN0I7U0FDRjtJQUNILENBQUM7Ozs7Ozs7O0lBRU8sMkNBQVE7Ozs7Ozs7SUFBaEIsVUFBaUIsRUFBZSxFQUFFLFFBQTBCLEVBQUUsUUFBbUI7UUFDL0UsS0FBSyxJQUFNLENBQUMsSUFBSSxRQUFRLEVBQUU7WUFDeEIsSUFBSSxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDN0MsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDMUI7U0FDRjtJQUNILENBQUM7O2dCQXpCRixVQUFVOzs7O2dCQUpxQixnQkFBZ0I7O0lBa0NoRCwrQkFBQztDQUFBLEFBOUJELElBOEJDO1NBN0JZLHdCQUF3Qjs7Ozs7O0lBQ25DLDRDQUFzQjs7SUFDdEIsNENBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBSZW5kZXJlcjIsIFJlbmRlcmVyRmFjdG9yeTIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE5nQ2xhc3NJbnRlcmZhY2UgfSBmcm9tICcuLi90eXBlcy9uZy1jbGFzcyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2Uge1xyXG4gIHByaXZhdGUgY2xhc3NNYXAgPSB7fTtcclxuICByZWFkb25seSByZW5kZXJlcjogUmVuZGVyZXIyO1xyXG5cclxuICB1cGRhdGVIb3N0Q2xhc3MoZWw6IEhUTUxFbGVtZW50LCBjbGFzc01hcDogb2JqZWN0KTogdm9pZCB7XHJcbiAgICB0aGlzLnJlbW92ZUNsYXNzKGVsLCB0aGlzLmNsYXNzTWFwLCB0aGlzLnJlbmRlcmVyKTtcclxuICAgIHRoaXMuY2xhc3NNYXAgPSB7IC4uLmNsYXNzTWFwIH07XHJcbiAgICB0aGlzLmFkZENsYXNzKGVsLCB0aGlzLmNsYXNzTWFwLCB0aGlzLnJlbmRlcmVyKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVtb3ZlQ2xhc3MoZWw6IEhUTUxFbGVtZW50LCBjbGFzc01hcDogTmdDbGFzc0ludGVyZmFjZSwgcmVuZGVyZXI6IFJlbmRlcmVyMik6IHZvaWQge1xyXG4gICAgZm9yIChjb25zdCBpIGluIGNsYXNzTWFwKSB7XHJcbiAgICAgIGlmIChjbGFzc01hcC5oYXNPd25Qcm9wZXJ0eShpKSkge1xyXG4gICAgICAgIHJlbmRlcmVyLnJlbW92ZUNsYXNzKGVsLCBpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGRDbGFzcyhlbDogSFRNTEVsZW1lbnQsIGNsYXNzTWFwOiBOZ0NsYXNzSW50ZXJmYWNlLCByZW5kZXJlcjogUmVuZGVyZXIyKTogdm9pZCB7XHJcbiAgICBmb3IgKGNvbnN0IGkgaW4gY2xhc3NNYXApIHtcclxuICAgICAgaWYgKGNsYXNzTWFwLmhhc093blByb3BlcnR5KGkpICYmIGNsYXNzTWFwW2ldKSB7XHJcbiAgICAgICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWwsIGkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihyZW5kZXJlckZhY3RvcnkyOiBSZW5kZXJlckZhY3RvcnkyKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXJGYWN0b3J5Mi5jcmVhdGVSZW5kZXJlcihudWxsLCBudWxsKTtcclxuICB9XHJcbn1cclxuIl19