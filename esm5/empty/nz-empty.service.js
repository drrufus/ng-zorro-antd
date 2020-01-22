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
import { Inject, Injectable, Optional, TemplateRef, Type } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { warnDeprecation, NzConfigService, PREFIX } from 'ng-zorro-antd/core';
import { NZ_DEFAULT_EMPTY_CONTENT } from './nz-empty-config';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
import * as i2 from "./nz-empty-config";
/**
 * @template T
 */
var NzEmptyService = /** @class */ (function () {
    function NzEmptyService(nzConfigService, legacyDefaultEmptyContent) {
        var _this = this;
        this.nzConfigService = nzConfigService;
        this.legacyDefaultEmptyContent = legacyDefaultEmptyContent;
        this.userDefaultContent$ = new BehaviorSubject(undefined);
        if (legacyDefaultEmptyContent) {
            warnDeprecation("'NZ_DEFAULT_EMPTY_CONTENT' is deprecated and would be removed in 9.0.0. Please migrate to 'NZ_CONFIG'.");
        }
        /** @type {?} */
        var userDefaultEmptyContent = this.getUserDefaultEmptyContent();
        if (userDefaultEmptyContent) {
            this.userDefaultContent$.next(userDefaultEmptyContent);
        }
        this.nzConfigService.getConfigChangeEventForComponent('empty').subscribe((/**
         * @return {?}
         */
        function () {
            _this.userDefaultContent$.next(_this.getUserDefaultEmptyContent());
        }));
    }
    /**
     * @param {?=} content
     * @return {?}
     */
    NzEmptyService.prototype.setDefaultContent = /**
     * @param {?=} content
     * @return {?}
     */
    function (content) {
        warnDeprecation("'setDefaultContent' is deprecated and would be removed in 9.0.0. Please migrate to 'NzConfigService'.");
        if (typeof content === 'string' ||
            content === undefined ||
            content === null ||
            content instanceof TemplateRef ||
            content instanceof Type) {
            this.userDefaultContent$.next(content);
        }
        else {
            throw new Error(PREFIX + " 'useDefaultContent' expect 'string', 'templateRef' or 'component' but get " + content + ".");
        }
    };
    /**
     * @return {?}
     */
    NzEmptyService.prototype.resetDefault = /**
     * @return {?}
     */
    function () {
        warnDeprecation("'resetDefault' is deprecated and would be removed in 9.0.0. Please migrate to 'NzConfigService' and provide an 'undefined'.");
        this.userDefaultContent$.next(undefined);
    };
    /**
     * @private
     * @return {?}
     */
    NzEmptyService.prototype.getUserDefaultEmptyContent = /**
     * @private
     * @return {?}
     */
    function () {
        return ((this.nzConfigService.getConfigForComponent('empty') || {}).nzDefaultEmptyContent ||
            this.legacyDefaultEmptyContent);
    };
    NzEmptyService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NzEmptyService.ctorParameters = function () { return [
        { type: NzConfigService },
        { type: Type, decorators: [{ type: Inject, args: [NZ_DEFAULT_EMPTY_CONTENT,] }, { type: Optional }] }
    ]; };
    /** @nocollapse */ NzEmptyService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzEmptyService_Factory() { return new NzEmptyService(i0.ɵɵinject(i1.NzConfigService), i0.ɵɵinject(i2.NZ_DEFAULT_EMPTY_CONTENT, 8)); }, token: NzEmptyService, providedIn: "root" });
    return NzEmptyService;
}());
export { NzEmptyService };
if (false) {
    /** @type {?} */
    NzEmptyService.prototype.userDefaultContent$;
    /**
     * @type {?}
     * @private
     */
    NzEmptyService.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzEmptyService.prototype.legacyDefaultEmptyContent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZW1wdHkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZW1wdHkvIiwic291cmNlcyI6WyJuei1lbXB0eS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUV2QyxPQUFPLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU5RSxPQUFPLEVBQXdCLHdCQUF3QixFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7Ozs7QUFFbkY7SUFPRSx3QkFDVSxlQUFnQyxFQUNjLHlCQUFrQztRQUYxRixpQkFtQkM7UUFsQlMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2MsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUFTO1FBSjFGLHdCQUFtQixHQUFHLElBQUksZUFBZSxDQUFtQyxTQUFTLENBQUMsQ0FBQztRQU1yRixJQUFJLHlCQUF5QixFQUFFO1lBQzdCLGVBQWUsQ0FDYix3R0FBd0csQ0FDekcsQ0FBQztTQUNIOztZQUVLLHVCQUF1QixHQUFHLElBQUksQ0FBQywwQkFBMEIsRUFBRTtRQUVqRSxJQUFJLHVCQUF1QixFQUFFO1lBQzNCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQztTQUN4RDtRQUVELElBQUksQ0FBQyxlQUFlLENBQUMsZ0NBQWdDLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUzs7O1FBQUM7WUFDdkUsS0FBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FBQyxDQUFDO1FBQ25FLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCwwQ0FBaUI7Ozs7SUFBakIsVUFBa0IsT0FBOEI7UUFDOUMsZUFBZSxDQUNiLHVHQUF1RyxDQUN4RyxDQUFDO1FBRUYsSUFDRSxPQUFPLE9BQU8sS0FBSyxRQUFRO1lBQzNCLE9BQU8sS0FBSyxTQUFTO1lBQ3JCLE9BQU8sS0FBSyxJQUFJO1lBQ2hCLE9BQU8sWUFBWSxXQUFXO1lBQzlCLE9BQU8sWUFBWSxJQUFJLEVBQ3ZCO1lBQ0EsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN4QzthQUFNO1lBQ0wsTUFBTSxJQUFJLEtBQUssQ0FDVixNQUFNLG1GQUE4RSxPQUFPLE1BQUcsQ0FDbEcsQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7OztJQUVELHFDQUFZOzs7SUFBWjtRQUNFLGVBQWUsQ0FDYiw2SEFBNkgsQ0FDOUgsQ0FBQztRQUNGLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFFTyxtREFBMEI7Ozs7SUFBbEM7UUFDRSxPQUFPLENBQ0wsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLHFCQUFxQjtZQUNqRixJQUFJLENBQUMseUJBQXlCLENBQy9CLENBQUM7SUFDSixDQUFDOztnQkE1REYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFOeUIsZUFBZTtnQkFIVyxJQUFJLHVCQWdCbkQsTUFBTSxTQUFDLHdCQUF3QixjQUFHLFFBQVE7Ozt5QkF4Qi9DO0NBNEVDLEFBN0RELElBNkRDO1NBekRZLGNBQWM7OztJQUN6Qiw2Q0FBdUY7Ozs7O0lBR3JGLHlDQUF3Qzs7Ozs7SUFDeEMsbURBQXdGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsLCBUZW1wbGF0ZVJlZiwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IHdhcm5EZXByZWNhdGlvbiwgTnpDb25maWdTZXJ2aWNlLCBQUkVGSVggfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpFbXB0eUN1c3RvbUNvbnRlbnQsIE5aX0RFRkFVTFRfRU1QVFlfQ09OVEVOVCB9IGZyb20gJy4vbnotZW1wdHktY29uZmlnJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG5leHBvcnQgY2xhc3MgTnpFbXB0eVNlcnZpY2U8VCA9IGFueT4ge1xyXG4gIHVzZXJEZWZhdWx0Q29udGVudCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PE56RW1wdHlDdXN0b21Db250ZW50IHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXHJcbiAgICBASW5qZWN0KE5aX0RFRkFVTFRfRU1QVFlfQ09OVEVOVCkgQE9wdGlvbmFsKCkgcHJpdmF0ZSBsZWdhY3lEZWZhdWx0RW1wdHlDb250ZW50OiBUeXBlPFQ+XHJcbiAgKSB7XHJcbiAgICBpZiAobGVnYWN5RGVmYXVsdEVtcHR5Q29udGVudCkge1xyXG4gICAgICB3YXJuRGVwcmVjYXRpb24oXHJcbiAgICAgICAgYCdOWl9ERUZBVUxUX0VNUFRZX0NPTlRFTlQnIGlzIGRlcHJlY2F0ZWQgYW5kIHdvdWxkIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFBsZWFzZSBtaWdyYXRlIHRvICdOWl9DT05GSUcnLmBcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1c2VyRGVmYXVsdEVtcHR5Q29udGVudCA9IHRoaXMuZ2V0VXNlckRlZmF1bHRFbXB0eUNvbnRlbnQoKTtcclxuXHJcbiAgICBpZiAodXNlckRlZmF1bHRFbXB0eUNvbnRlbnQpIHtcclxuICAgICAgdGhpcy51c2VyRGVmYXVsdENvbnRlbnQkLm5leHQodXNlckRlZmF1bHRFbXB0eUNvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubnpDb25maWdTZXJ2aWNlLmdldENvbmZpZ0NoYW5nZUV2ZW50Rm9yQ29tcG9uZW50KCdlbXB0eScpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMudXNlckRlZmF1bHRDb250ZW50JC5uZXh0KHRoaXMuZ2V0VXNlckRlZmF1bHRFbXB0eUNvbnRlbnQoKSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldERlZmF1bHRDb250ZW50KGNvbnRlbnQ/OiBOekVtcHR5Q3VzdG9tQ29udGVudCk6IHZvaWQge1xyXG4gICAgd2FybkRlcHJlY2F0aW9uKFxyXG4gICAgICBgJ3NldERlZmF1bHRDb250ZW50JyBpcyBkZXByZWNhdGVkIGFuZCB3b3VsZCBiZSByZW1vdmVkIGluIDkuMC4wLiBQbGVhc2UgbWlncmF0ZSB0byAnTnpDb25maWdTZXJ2aWNlJy5gXHJcbiAgICApO1xyXG5cclxuICAgIGlmIChcclxuICAgICAgdHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnIHx8XHJcbiAgICAgIGNvbnRlbnQgPT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICBjb250ZW50ID09PSBudWxsIHx8XHJcbiAgICAgIGNvbnRlbnQgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZiB8fFxyXG4gICAgICBjb250ZW50IGluc3RhbmNlb2YgVHlwZVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMudXNlckRlZmF1bHRDb250ZW50JC5uZXh0KGNvbnRlbnQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgIGAke1BSRUZJWH0gJ3VzZURlZmF1bHRDb250ZW50JyBleHBlY3QgJ3N0cmluZycsICd0ZW1wbGF0ZVJlZicgb3IgJ2NvbXBvbmVudCcgYnV0IGdldCAke2NvbnRlbnR9LmBcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlc2V0RGVmYXVsdCgpOiB2b2lkIHtcclxuICAgIHdhcm5EZXByZWNhdGlvbihcclxuICAgICAgYCdyZXNldERlZmF1bHQnIGlzIGRlcHJlY2F0ZWQgYW5kIHdvdWxkIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFBsZWFzZSBtaWdyYXRlIHRvICdOekNvbmZpZ1NlcnZpY2UnIGFuZCBwcm92aWRlIGFuICd1bmRlZmluZWQnLmBcclxuICAgICk7XHJcbiAgICB0aGlzLnVzZXJEZWZhdWx0Q29udGVudCQubmV4dCh1bmRlZmluZWQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRVc2VyRGVmYXVsdEVtcHR5Q29udGVudCgpOiBUeXBlPFQ+IHwgVGVtcGxhdGVSZWY8c3RyaW5nPiB8IHN0cmluZyB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAodGhpcy5uekNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnRm9yQ29tcG9uZW50KCdlbXB0eScpIHx8IHt9KS5uekRlZmF1bHRFbXB0eUNvbnRlbnQgfHxcclxuICAgICAgdGhpcy5sZWdhY3lEZWZhdWx0RW1wdHlDb250ZW50XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=