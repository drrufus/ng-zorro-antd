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
// tslint:disable-next-line:no-any
export class NzEmptyService {
    /**
     * @param {?} nzConfigService
     * @param {?} legacyDefaultEmptyContent
     */
    constructor(nzConfigService, legacyDefaultEmptyContent) {
        this.nzConfigService = nzConfigService;
        this.legacyDefaultEmptyContent = legacyDefaultEmptyContent;
        this.userDefaultContent$ = new BehaviorSubject(undefined);
        if (legacyDefaultEmptyContent) {
            warnDeprecation(`'NZ_DEFAULT_EMPTY_CONTENT' is deprecated and would be removed in 9.0.0. Please migrate to 'NZ_CONFIG'.`);
        }
        /** @type {?} */
        const userDefaultEmptyContent = this.getUserDefaultEmptyContent();
        if (userDefaultEmptyContent) {
            this.userDefaultContent$.next(userDefaultEmptyContent);
        }
        this.nzConfigService.getConfigChangeEventForComponent('empty').subscribe((/**
         * @return {?}
         */
        () => {
            this.userDefaultContent$.next(this.getUserDefaultEmptyContent());
        }));
    }
    /**
     * @param {?=} content
     * @return {?}
     */
    setDefaultContent(content) {
        warnDeprecation(`'setDefaultContent' is deprecated and would be removed in 9.0.0. Please migrate to 'NzConfigService'.`);
        if (typeof content === 'string' ||
            content === undefined ||
            content === null ||
            content instanceof TemplateRef ||
            content instanceof Type) {
            this.userDefaultContent$.next(content);
        }
        else {
            throw new Error(`${PREFIX} 'useDefaultContent' expect 'string', 'templateRef' or 'component' but get ${content}.`);
        }
    }
    /**
     * @return {?}
     */
    resetDefault() {
        warnDeprecation(`'resetDefault' is deprecated and would be removed in 9.0.0. Please migrate to 'NzConfigService' and provide an 'undefined'.`);
        this.userDefaultContent$.next(undefined);
    }
    /**
     * @private
     * @return {?}
     */
    getUserDefaultEmptyContent() {
        return ((this.nzConfigService.getConfigForComponent('empty') || {}).nzDefaultEmptyContent ||
            this.legacyDefaultEmptyContent);
    }
}
NzEmptyService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NzEmptyService.ctorParameters = () => [
    { type: NzConfigService },
    { type: Type, decorators: [{ type: Inject, args: [NZ_DEFAULT_EMPTY_CONTENT,] }, { type: Optional }] }
];
/** @nocollapse */ NzEmptyService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzEmptyService_Factory() { return new NzEmptyService(i0.ɵɵinject(i1.NzConfigService), i0.ɵɵinject(i2.NZ_DEFAULT_EMPTY_CONTENT, 8)); }, token: NzEmptyService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZW1wdHkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZW1wdHkvIiwic291cmNlcyI6WyJuei1lbXB0eS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFdkMsT0FBTyxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFOUUsT0FBTyxFQUF3Qix3QkFBd0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7O0FBS25GLGtDQUFrQztBQUNsQyxNQUFNLE9BQU8sY0FBYzs7Ozs7SUFHekIsWUFDVSxlQUFnQyxFQUNjLHlCQUFrQztRQURoRixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDYyw4QkFBeUIsR0FBekIseUJBQXlCLENBQVM7UUFKMUYsd0JBQW1CLEdBQUcsSUFBSSxlQUFlLENBQW1DLFNBQVMsQ0FBQyxDQUFDO1FBTXJGLElBQUkseUJBQXlCLEVBQUU7WUFDN0IsZUFBZSxDQUNiLHdHQUF3RyxDQUN6RyxDQUFDO1NBQ0g7O2NBRUssdUJBQXVCLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixFQUFFO1FBRWpFLElBQUksdUJBQXVCLEVBQUU7WUFDM0IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1NBQ3hEO1FBRUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQ0FBZ0MsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTOzs7UUFBQyxHQUFHLEVBQUU7WUFDNUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FBQyxDQUFDO1FBQ25FLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxPQUE4QjtRQUM5QyxlQUFlLENBQ2IsdUdBQXVHLENBQ3hHLENBQUM7UUFFRixJQUNFLE9BQU8sT0FBTyxLQUFLLFFBQVE7WUFDM0IsT0FBTyxLQUFLLFNBQVM7WUFDckIsT0FBTyxLQUFLLElBQUk7WUFDaEIsT0FBTyxZQUFZLFdBQVc7WUFDOUIsT0FBTyxZQUFZLElBQUksRUFDdkI7WUFDQSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3hDO2FBQU07WUFDTCxNQUFNLElBQUksS0FBSyxDQUNiLEdBQUcsTUFBTSw4RUFBOEUsT0FBTyxHQUFHLENBQ2xHLENBQUM7U0FDSDtJQUNILENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1YsZUFBZSxDQUNiLDZIQUE2SCxDQUM5SCxDQUFDO1FBQ0YsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7OztJQUVPLDBCQUEwQjtRQUNoQyxPQUFPLENBQ0wsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLHFCQUFxQjtZQUNqRixJQUFJLENBQUMseUJBQXlCLENBQy9CLENBQUM7SUFDSixDQUFDOzs7WUE1REYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBTnlCLGVBQWU7WUFIVyxJQUFJLHVCQWdCbkQsTUFBTSxTQUFDLHdCQUF3QixjQUFHLFFBQVE7Ozs7O0lBSjdDLDZDQUF1Rjs7Ozs7SUFHckYseUNBQXdDOzs7OztJQUN4QyxtREFBd0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIFRlbXBsYXRlUmVmLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgd2FybkRlcHJlY2F0aW9uLCBOekNvbmZpZ1NlcnZpY2UsIFBSRUZJWCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOekVtcHR5Q3VzdG9tQ29udGVudCwgTlpfREVGQVVMVF9FTVBUWV9DT05URU5UIH0gZnJvbSAnLi9uei1lbXB0eS1jb25maWcnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbmV4cG9ydCBjbGFzcyBOekVtcHR5U2VydmljZTxUID0gYW55PiB7XHJcbiAgdXNlckRlZmF1bHRDb250ZW50JCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TnpFbXB0eUN1c3RvbUNvbnRlbnQgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcclxuICAgIEBJbmplY3QoTlpfREVGQVVMVF9FTVBUWV9DT05URU5UKSBAT3B0aW9uYWwoKSBwcml2YXRlIGxlZ2FjeURlZmF1bHRFbXB0eUNvbnRlbnQ6IFR5cGU8VD5cclxuICApIHtcclxuICAgIGlmIChsZWdhY3lEZWZhdWx0RW1wdHlDb250ZW50KSB7XHJcbiAgICAgIHdhcm5EZXByZWNhdGlvbihcclxuICAgICAgICBgJ05aX0RFRkFVTFRfRU1QVFlfQ09OVEVOVCcgaXMgZGVwcmVjYXRlZCBhbmQgd291bGQgYmUgcmVtb3ZlZCBpbiA5LjAuMC4gUGxlYXNlIG1pZ3JhdGUgdG8gJ05aX0NPTkZJRycuYFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVzZXJEZWZhdWx0RW1wdHlDb250ZW50ID0gdGhpcy5nZXRVc2VyRGVmYXVsdEVtcHR5Q29udGVudCgpO1xyXG5cclxuICAgIGlmICh1c2VyRGVmYXVsdEVtcHR5Q29udGVudCkge1xyXG4gICAgICB0aGlzLnVzZXJEZWZhdWx0Q29udGVudCQubmV4dCh1c2VyRGVmYXVsdEVtcHR5Q29udGVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5uekNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnQ2hhbmdlRXZlbnRGb3JDb21wb25lbnQoJ2VtcHR5Jykuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy51c2VyRGVmYXVsdENvbnRlbnQkLm5leHQodGhpcy5nZXRVc2VyRGVmYXVsdEVtcHR5Q29udGVudCgpKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0RGVmYXVsdENvbnRlbnQoY29udGVudD86IE56RW1wdHlDdXN0b21Db250ZW50KTogdm9pZCB7XHJcbiAgICB3YXJuRGVwcmVjYXRpb24oXHJcbiAgICAgIGAnc2V0RGVmYXVsdENvbnRlbnQnIGlzIGRlcHJlY2F0ZWQgYW5kIHdvdWxkIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFBsZWFzZSBtaWdyYXRlIHRvICdOekNvbmZpZ1NlcnZpY2UnLmBcclxuICAgICk7XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICB0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycgfHxcclxuICAgICAgY29udGVudCA9PT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgIGNvbnRlbnQgPT09IG51bGwgfHxcclxuICAgICAgY29udGVudCBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmIHx8XHJcbiAgICAgIGNvbnRlbnQgaW5zdGFuY2VvZiBUeXBlXHJcbiAgICApIHtcclxuICAgICAgdGhpcy51c2VyRGVmYXVsdENvbnRlbnQkLm5leHQoY29udGVudCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgYCR7UFJFRklYfSAndXNlRGVmYXVsdENvbnRlbnQnIGV4cGVjdCAnc3RyaW5nJywgJ3RlbXBsYXRlUmVmJyBvciAnY29tcG9uZW50JyBidXQgZ2V0ICR7Y29udGVudH0uYFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVzZXREZWZhdWx0KCk6IHZvaWQge1xyXG4gICAgd2FybkRlcHJlY2F0aW9uKFxyXG4gICAgICBgJ3Jlc2V0RGVmYXVsdCcgaXMgZGVwcmVjYXRlZCBhbmQgd291bGQgYmUgcmVtb3ZlZCBpbiA5LjAuMC4gUGxlYXNlIG1pZ3JhdGUgdG8gJ056Q29uZmlnU2VydmljZScgYW5kIHByb3ZpZGUgYW4gJ3VuZGVmaW5lZCcuYFxyXG4gICAgKTtcclxuICAgIHRoaXMudXNlckRlZmF1bHRDb250ZW50JC5uZXh0KHVuZGVmaW5lZCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFVzZXJEZWZhdWx0RW1wdHlDb250ZW50KCk6IFR5cGU8VD4gfCBUZW1wbGF0ZVJlZjxzdHJpbmc+IHwgc3RyaW5nIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICh0aGlzLm56Q29uZmlnU2VydmljZS5nZXRDb25maWdGb3JDb21wb25lbnQoJ2VtcHR5JykgfHwge30pLm56RGVmYXVsdEVtcHR5Q29udGVudCB8fFxyXG4gICAgICB0aGlzLmxlZ2FjeURlZmF1bHRFbXB0eUNvbnRlbnRcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==