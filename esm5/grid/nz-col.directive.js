/**
 * @fileoverview added by tsickle
 * Generated from: nz-col.directive.ts
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
import { Directive, ElementRef, Host, Input, Optional, Renderer2 } from '@angular/core';
import { isNotNil, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import { NzRowDirective } from './nz-row.directive';
/**
 * @record
 */
export function EmbeddedProperty() { }
if (false) {
    /** @type {?|undefined} */
    EmbeddedProperty.prototype.span;
    /** @type {?|undefined} */
    EmbeddedProperty.prototype.pull;
    /** @type {?|undefined} */
    EmbeddedProperty.prototype.push;
    /** @type {?|undefined} */
    EmbeddedProperty.prototype.offset;
    /** @type {?|undefined} */
    EmbeddedProperty.prototype.order;
}
var NzColDirective = /** @class */ (function () {
    function NzColDirective(nzUpdateHostClassService, elementRef, nzRowDirective, renderer) {
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.elementRef = elementRef;
        this.nzRowDirective = nzRowDirective;
        this.renderer = renderer;
        this.el = this.elementRef.nativeElement;
        this.prefixCls = 'ant-col';
        this.destroy$ = new Subject();
    }
    /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289*/
    /**
     * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
     * @return {?}
     */
    NzColDirective.prototype.setClassMap = /**
     * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var classMap = tslib_1.__assign((_a = {}, _a["" + this.prefixCls] = true, _a[this.prefixCls + "-" + this.nzSpan] = isNotNil(this.nzSpan), _a[this.prefixCls + "-order-" + this.nzOrder] = isNotNil(this.nzOrder), _a[this.prefixCls + "-offset-" + this.nzOffset] = isNotNil(this.nzOffset), _a[this.prefixCls + "-pull-" + this.nzPull] = isNotNil(this.nzPull), _a[this.prefixCls + "-push-" + this.nzPush] = isNotNil(this.nzPush), _a), this.generateClass());
        this.nzUpdateHostClassService.updateHostClass(this.el, classMap);
    };
    /**
     * @return {?}
     */
    NzColDirective.prototype.generateClass = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var listOfSizeInputName = ['nzXs', 'nzSm', 'nzMd', 'nzLg', 'nzXl', 'nzXXl'];
        /** @type {?} */
        var listClassMap = {};
        listOfSizeInputName.forEach((/**
         * @param {?} name
         * @return {?}
         */
        function (name) {
            /** @type {?} */
            var sizeName = name.replace('nz', '').toLowerCase();
            if (isNotNil(_this[name])) {
                if (typeof _this[name] === 'number' || typeof _this[name] === 'string') {
                    listClassMap[_this.prefixCls + "-" + sizeName + "-" + _this[name]] = true;
                }
                else {
                    /** @type {?} */
                    var embedded_1 = (/** @type {?} */ (_this[name]));
                    /** @type {?} */
                    var prefixArray = ['span', 'pull', 'push', 'offset', 'order'];
                    prefixArray.forEach((/**
                     * @param {?} prefix
                     * @return {?}
                     */
                    function (prefix) {
                        /** @type {?} */
                        var prefixClass = prefix === 'span' ? '-' : "-" + prefix + "-";
                        listClassMap[_this.prefixCls + "-" + sizeName + prefixClass + embedded_1[prefix]] =
                            embedded_1 && isNotNil(embedded_1[prefix]);
                    }));
                }
            }
        }));
        return listClassMap;
    };
    /**
     * @return {?}
     */
    NzColDirective.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
    };
    /**
     * @return {?}
     */
    NzColDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.nzRowDirective) {
            this.nzRowDirective.actualGutter$
                .pipe(startWith(this.nzRowDirective.actualGutter), takeUntil(this.destroy$))
                .subscribe((/**
             * @param {?} actualGutter
             * @return {?}
             */
            function (actualGutter) {
                _this.renderer.setStyle(_this.el, 'padding-left', actualGutter / 2 + "px");
                _this.renderer.setStyle(_this.el, 'padding-right', actualGutter / 2 + "px");
            }));
        }
    };
    /**
     * @return {?}
     */
    NzColDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
    };
    /**
     * @return {?}
     */
    NzColDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzColDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-col],nz-col',
                    exportAs: 'nzCol',
                    providers: [NzUpdateHostClassService]
                },] }
    ];
    /** @nocollapse */
    NzColDirective.ctorParameters = function () { return [
        { type: NzUpdateHostClassService },
        { type: ElementRef },
        { type: NzRowDirective, decorators: [{ type: Optional }, { type: Host }] },
        { type: Renderer2 }
    ]; };
    NzColDirective.propDecorators = {
        nzSpan: [{ type: Input }],
        nzOrder: [{ type: Input }],
        nzOffset: [{ type: Input }],
        nzPush: [{ type: Input }],
        nzPull: [{ type: Input }],
        nzXs: [{ type: Input }],
        nzSm: [{ type: Input }],
        nzMd: [{ type: Input }],
        nzLg: [{ type: Input }],
        nzXl: [{ type: Input }],
        nzXXl: [{ type: Input }]
    };
    return NzColDirective;
}());
export { NzColDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzColDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NzColDirective.prototype.prefixCls;
    /**
     * @type {?}
     * @protected
     */
    NzColDirective.prototype.destroy$;
    /** @type {?} */
    NzColDirective.prototype.nzSpan;
    /** @type {?} */
    NzColDirective.prototype.nzOrder;
    /** @type {?} */
    NzColDirective.prototype.nzOffset;
    /** @type {?} */
    NzColDirective.prototype.nzPush;
    /** @type {?} */
    NzColDirective.prototype.nzPull;
    /** @type {?} */
    NzColDirective.prototype.nzXs;
    /** @type {?} */
    NzColDirective.prototype.nzSm;
    /** @type {?} */
    NzColDirective.prototype.nzMd;
    /** @type {?} */
    NzColDirective.prototype.nzLg;
    /** @type {?} */
    NzColDirective.prototype.nzXl;
    /** @type {?} */
    NzColDirective.prototype.nzXXl;
    /**
     * @type {?}
     * @private
     */
    NzColDirective.prototype.nzUpdateHostClassService;
    /**
     * @type {?}
     * @private
     */
    NzColDirective.prototype.elementRef;
    /** @type {?} */
    NzColDirective.prototype.nzRowDirective;
    /** @type {?} */
    NzColDirective.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29sLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZ3JpZC8iLCJzb3VyY2VzIjpbIm56LWNvbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLElBQUksRUFDSixLQUFLLEVBSUwsUUFBUSxFQUNSLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFvQix3QkFBd0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzFGLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7QUFFcEQsc0NBTUM7OztJQUxDLGdDQUFjOztJQUNkLGdDQUFjOztJQUNkLGdDQUFjOztJQUNkLGtDQUFnQjs7SUFDaEIsaUNBQWU7O0FBR2pCO0lBMERFLHdCQUNVLHdCQUFrRCxFQUNsRCxVQUFzQixFQUNILGNBQThCLEVBQ2xELFFBQW1CO1FBSGxCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNILG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUNsRCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBeERwQixPQUFFLEdBQWdCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQ2hELGNBQVMsR0FBRyxTQUFTLENBQUM7UUFDcEIsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7SUF1RGhDLENBQUM7SUF6Q0osdUdBQXVHOzs7OztJQUN2RyxvQ0FBVzs7OztJQUFYOzs7WUFDUSxRQUFRLGlDQUNYLEtBQUcsSUFBSSxDQUFDLFNBQVcsSUFBRyxJQUFJLEtBQ3ZCLElB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SUF1Q3hDLGtEQUEwRDs7Ozs7SUFDMUQsb0NBQThCOztJQUM5Qix3Q0FBeUQ7O0lBQ3pELGtDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIEhvc3QsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgUmVuZGVyZXIyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzTm90TmlsLCBOZ0NsYXNzSW50ZXJmYWNlLCBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHN0YXJ0V2l0aCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBOelJvd0RpcmVjdGl2ZSB9IGZyb20gJy4vbnotcm93LmRpcmVjdGl2ZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEVtYmVkZGVkUHJvcGVydHkge1xyXG4gIHNwYW4/OiBudW1iZXI7XHJcbiAgcHVsbD86IG51bWJlcjtcclxuICBwdXNoPzogbnVtYmVyO1xyXG4gIG9mZnNldD86IG51bWJlcjtcclxuICBvcmRlcj86IG51bWJlcjtcclxufVxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbnotY29sXSxuei1jb2wnLFxyXG4gIGV4cG9ydEFzOiAnbnpDb2wnLFxyXG4gIHByb3ZpZGVyczogW056VXBkYXRlSG9zdENsYXNzU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56Q29sRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICBwcml2YXRlIHByZWZpeENscyA9ICdhbnQtY29sJztcclxuICBwcm90ZWN0ZWQgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBASW5wdXQoKSBuelNwYW46IG51bWJlcjtcclxuICBASW5wdXQoKSBuek9yZGVyOiBudW1iZXI7XHJcbiAgQElucHV0KCkgbnpPZmZzZXQ6IG51bWJlcjtcclxuICBASW5wdXQoKSBuelB1c2g6IG51bWJlcjtcclxuICBASW5wdXQoKSBuelB1bGw6IG51bWJlcjtcclxuICBASW5wdXQoKSBuelhzOiBudW1iZXIgfCBFbWJlZGRlZFByb3BlcnR5O1xyXG4gIEBJbnB1dCgpIG56U206IG51bWJlciB8IEVtYmVkZGVkUHJvcGVydHk7XHJcbiAgQElucHV0KCkgbnpNZDogbnVtYmVyIHwgRW1iZWRkZWRQcm9wZXJ0eTtcclxuICBASW5wdXQoKSBuekxnOiBudW1iZXIgfCBFbWJlZGRlZFByb3BlcnR5O1xyXG4gIEBJbnB1dCgpIG56WGw6IG51bWJlciB8IEVtYmVkZGVkUHJvcGVydHk7XHJcbiAgQElucHV0KCkgbnpYWGw6IG51bWJlciB8IEVtYmVkZGVkUHJvcGVydHk7XHJcblxyXG4gIC8qKiB0ZW1wIHNvbHV0aW9uIHNpbmNlIG5vIG1ldGhvZCBhZGQgY2xhc3NNYXAgdG8gaG9zdCBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy83Mjg5Ki9cclxuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNsYXNzTWFwID0ge1xyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9YF06IHRydWUsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tJHt0aGlzLm56U3Bhbn1gXTogaXNOb3ROaWwodGhpcy5uelNwYW4pLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LW9yZGVyLSR7dGhpcy5uek9yZGVyfWBdOiBpc05vdE5pbCh0aGlzLm56T3JkZXIpLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LW9mZnNldC0ke3RoaXMubnpPZmZzZXR9YF06IGlzTm90TmlsKHRoaXMubnpPZmZzZXQpLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXB1bGwtJHt0aGlzLm56UHVsbH1gXTogaXNOb3ROaWwodGhpcy5uelB1bGwpLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXB1c2gtJHt0aGlzLm56UHVzaH1gXTogaXNOb3ROaWwodGhpcy5uelB1c2gpLFxyXG4gICAgICAuLi50aGlzLmdlbmVyYXRlQ2xhc3MoKVxyXG4gICAgfTtcclxuICAgIHRoaXMubnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsLCBjbGFzc01hcCk7XHJcbiAgfVxyXG5cclxuICBnZW5lcmF0ZUNsYXNzKCk6IG9iamVjdCB7XHJcbiAgICBjb25zdCBsaXN0T2ZTaXplSW5wdXROYW1lOiBBcnJheTxrZXlvZiBOekNvbERpcmVjdGl2ZT4gPSBbJ256WHMnLCAnbnpTbScsICduek1kJywgJ256TGcnLCAnbnpYbCcsICduelhYbCddO1xyXG4gICAgY29uc3QgbGlzdENsYXNzTWFwOiBOZ0NsYXNzSW50ZXJmYWNlID0ge307XHJcbiAgICBsaXN0T2ZTaXplSW5wdXROYW1lLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICAgIGNvbnN0IHNpemVOYW1lID0gbmFtZS5yZXBsYWNlKCdueicsICcnKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICBpZiAoaXNOb3ROaWwodGhpc1tuYW1lXSkpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXNbbmFtZV0gPT09ICdudW1iZXInIHx8IHR5cGVvZiB0aGlzW25hbWVdID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgbGlzdENsYXNzTWFwW2Ake3RoaXMucHJlZml4Q2xzfS0ke3NpemVOYW1lfS0ke3RoaXNbbmFtZV19YF0gPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCBlbWJlZGRlZCA9IHRoaXNbbmFtZV0gYXMgRW1iZWRkZWRQcm9wZXJ0eTtcclxuICAgICAgICAgIGNvbnN0IHByZWZpeEFycmF5OiBBcnJheTxrZXlvZiBFbWJlZGRlZFByb3BlcnR5PiA9IFsnc3BhbicsICdwdWxsJywgJ3B1c2gnLCAnb2Zmc2V0JywgJ29yZGVyJ107XHJcbiAgICAgICAgICBwcmVmaXhBcnJheS5mb3JFYWNoKHByZWZpeCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZWZpeENsYXNzID0gcHJlZml4ID09PSAnc3BhbicgPyAnLScgOiBgLSR7cHJlZml4fS1gO1xyXG4gICAgICAgICAgICBsaXN0Q2xhc3NNYXBbYCR7dGhpcy5wcmVmaXhDbHN9LSR7c2l6ZU5hbWV9JHtwcmVmaXhDbGFzc30ke2VtYmVkZGVkW3ByZWZpeF19YF0gPVxyXG4gICAgICAgICAgICAgIGVtYmVkZGVkICYmIGlzTm90TmlsKGVtYmVkZGVkW3ByZWZpeF0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBsaXN0Q2xhc3NNYXA7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBAT3B0aW9uYWwoKSBASG9zdCgpIHB1YmxpYyBuelJvd0RpcmVjdGl2ZTogTnpSb3dEaXJlY3RpdmUsXHJcbiAgICBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMlxyXG4gICkge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uelJvd0RpcmVjdGl2ZSkge1xyXG4gICAgICB0aGlzLm56Um93RGlyZWN0aXZlLmFjdHVhbEd1dHRlciRcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgIHN0YXJ0V2l0aCh0aGlzLm56Um93RGlyZWN0aXZlLmFjdHVhbEd1dHRlciksXHJcbiAgICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcclxuICAgICAgICApXHJcbiAgICAgICAgLnN1YnNjcmliZShhY3R1YWxHdXR0ZXIgPT4ge1xyXG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAncGFkZGluZy1sZWZ0JywgYCR7YWN0dWFsR3V0dGVyIC8gMn1weGApO1xyXG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAncGFkZGluZy1yaWdodCcsIGAke2FjdHVhbEd1dHRlciAvIDJ9cHhgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcbn1cclxuIl19