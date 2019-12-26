/**
 * @fileoverview added by tsickle
 * Generated from: nz-empty.service.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZW1wdHkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZW1wdHkvIiwic291cmNlcyI6WyJuei1lbXB0eS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFdkMsT0FBTyxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFOUUsT0FBTyxFQUF3Qix3QkFBd0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7O0FBRW5GO0lBT0Usd0JBQ1UsZUFBZ0MsRUFDYyx5QkFBa0M7UUFGMUYsaUJBbUJDO1FBbEJTLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNjLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBUztRQUoxRix3QkFBbUIsR0FBRyxJQUFJLGVBQWUsQ0FBbUMsU0FBUyxDQUFDLENBQUM7UUFNckYsSUFBSSx5QkFBeUIsRUFBRTtZQUM3QixlQUFlLENBQ2Isd0dBQXdHLENBQ3pHLENBQUM7U0FDSDs7WUFFSyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsMEJBQTBCLEVBQUU7UUFFakUsSUFBSSx1QkFBdUIsRUFBRTtZQUMzQixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUM7U0FDeEQ7UUFFRCxJQUFJLENBQUMsZUFBZSxDQUFDLGdDQUFnQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVM7OztRQUFDO1lBQ3ZFLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLDBCQUEwQixFQUFFLENBQUMsQ0FBQztRQUNuRSxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsMENBQWlCOzs7O0lBQWpCLFVBQWtCLE9BQThCO1FBQzlDLGVBQWUsQ0FDYix1R0FBdUcsQ0FDeEcsQ0FBQztRQUVGLElBQ0UsT0FBTyxPQUFPLEtBQUssUUFBUTtZQUMzQixPQUFPLEtBQUssU0FBUztZQUNyQixPQUFPLEtBQUssSUFBSTtZQUNoQixPQUFPLFlBQVksV0FBVztZQUM5QixPQUFPLFlBQVksSUFBSSxFQUN2QjtZQUNBLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDeEM7YUFBTTtZQUNMLE1BQU0sSUFBSSxLQUFLLENBQ1YsTUFBTSxtRkFBOEUsT0FBTyxNQUFHLENBQ2xHLENBQUM7U0FDSDtJQUNILENBQUM7Ozs7SUFFRCxxQ0FBWTs7O0lBQVo7UUFDRSxlQUFlLENBQ2IsNkhBQTZILENBQzlILENBQUM7UUFDRixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7O0lBRU8sbURBQTBCOzs7O0lBQWxDO1FBQ0UsT0FBTyxDQUNMLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxxQkFBcUI7WUFDakYsSUFBSSxDQUFDLHlCQUF5QixDQUMvQixDQUFDO0lBQ0osQ0FBQzs7Z0JBNURGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBTnlCLGVBQWU7Z0JBSFcsSUFBSSx1QkFnQm5ELE1BQU0sU0FBQyx3QkFBd0IsY0FBRyxRQUFROzs7eUJBeEIvQztDQTRFQyxBQTdERCxJQTZEQztTQXpEWSxjQUFjOzs7SUFDekIsNkNBQXVGOzs7OztJQUdyRix5Q0FBd0M7Ozs7O0lBQ3hDLG1EQUF3RiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCwgVGVtcGxhdGVSZWYsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyB3YXJuRGVwcmVjYXRpb24sIE56Q29uZmlnU2VydmljZSwgUFJFRklYIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56RW1wdHlDdXN0b21Db250ZW50LCBOWl9ERUZBVUxUX0VNUFRZX0NPTlRFTlQgfSBmcm9tICcuL256LWVtcHR5LWNvbmZpZyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuZXhwb3J0IGNsYXNzIE56RW1wdHlTZXJ2aWNlPFQgPSBhbnk+IHtcclxuICB1c2VyRGVmYXVsdENvbnRlbnQkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxOekVtcHR5Q3VzdG9tQ29udGVudCB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxyXG4gICAgQEluamVjdChOWl9ERUZBVUxUX0VNUFRZX0NPTlRFTlQpIEBPcHRpb25hbCgpIHByaXZhdGUgbGVnYWN5RGVmYXVsdEVtcHR5Q29udGVudDogVHlwZTxUPlxyXG4gICkge1xyXG4gICAgaWYgKGxlZ2FjeURlZmF1bHRFbXB0eUNvbnRlbnQpIHtcclxuICAgICAgd2FybkRlcHJlY2F0aW9uKFxyXG4gICAgICAgIGAnTlpfREVGQVVMVF9FTVBUWV9DT05URU5UJyBpcyBkZXByZWNhdGVkIGFuZCB3b3VsZCBiZSByZW1vdmVkIGluIDkuMC4wLiBQbGVhc2UgbWlncmF0ZSB0byAnTlpfQ09ORklHJy5gXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXNlckRlZmF1bHRFbXB0eUNvbnRlbnQgPSB0aGlzLmdldFVzZXJEZWZhdWx0RW1wdHlDb250ZW50KCk7XHJcblxyXG4gICAgaWYgKHVzZXJEZWZhdWx0RW1wdHlDb250ZW50KSB7XHJcbiAgICAgIHRoaXMudXNlckRlZmF1bHRDb250ZW50JC5uZXh0KHVzZXJEZWZhdWx0RW1wdHlDb250ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm56Q29uZmlnU2VydmljZS5nZXRDb25maWdDaGFuZ2VFdmVudEZvckNvbXBvbmVudCgnZW1wdHknKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLnVzZXJEZWZhdWx0Q29udGVudCQubmV4dCh0aGlzLmdldFVzZXJEZWZhdWx0RW1wdHlDb250ZW50KCkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXREZWZhdWx0Q29udGVudChjb250ZW50PzogTnpFbXB0eUN1c3RvbUNvbnRlbnQpOiB2b2lkIHtcclxuICAgIHdhcm5EZXByZWNhdGlvbihcclxuICAgICAgYCdzZXREZWZhdWx0Q29udGVudCcgaXMgZGVwcmVjYXRlZCBhbmQgd291bGQgYmUgcmVtb3ZlZCBpbiA5LjAuMC4gUGxlYXNlIG1pZ3JhdGUgdG8gJ056Q29uZmlnU2VydmljZScuYFxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJyB8fFxyXG4gICAgICBjb250ZW50ID09PSB1bmRlZmluZWQgfHxcclxuICAgICAgY29udGVudCA9PT0gbnVsbCB8fFxyXG4gICAgICBjb250ZW50IGluc3RhbmNlb2YgVGVtcGxhdGVSZWYgfHxcclxuICAgICAgY29udGVudCBpbnN0YW5jZW9mIFR5cGVcclxuICAgICkge1xyXG4gICAgICB0aGlzLnVzZXJEZWZhdWx0Q29udGVudCQubmV4dChjb250ZW50KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICBgJHtQUkVGSVh9ICd1c2VEZWZhdWx0Q29udGVudCcgZXhwZWN0ICdzdHJpbmcnLCAndGVtcGxhdGVSZWYnIG9yICdjb21wb25lbnQnIGJ1dCBnZXQgJHtjb250ZW50fS5gXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXNldERlZmF1bHQoKTogdm9pZCB7XHJcbiAgICB3YXJuRGVwcmVjYXRpb24oXHJcbiAgICAgIGAncmVzZXREZWZhdWx0JyBpcyBkZXByZWNhdGVkIGFuZCB3b3VsZCBiZSByZW1vdmVkIGluIDkuMC4wLiBQbGVhc2UgbWlncmF0ZSB0byAnTnpDb25maWdTZXJ2aWNlJyBhbmQgcHJvdmlkZSBhbiAndW5kZWZpbmVkJy5gXHJcbiAgICApO1xyXG4gICAgdGhpcy51c2VyRGVmYXVsdENvbnRlbnQkLm5leHQodW5kZWZpbmVkKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0VXNlckRlZmF1bHRFbXB0eUNvbnRlbnQoKTogVHlwZTxUPiB8IFRlbXBsYXRlUmVmPHN0cmluZz4gfCBzdHJpbmcge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgKHRoaXMubnpDb25maWdTZXJ2aWNlLmdldENvbmZpZ0ZvckNvbXBvbmVudCgnZW1wdHknKSB8fCB7fSkubnpEZWZhdWx0RW1wdHlDb250ZW50IHx8XHJcbiAgICAgIHRoaXMubGVnYWN5RGVmYXVsdEVtcHR5Q29udGVudFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19