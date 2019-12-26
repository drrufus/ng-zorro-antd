/**
 * @fileoverview added by tsickle
 * Generated from: config/config.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
// tslint:disable no-any
import { Inject, Injectable, Optional } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, mapTo } from 'rxjs/operators';
import { NZ_CONFIG } from './config';
import * as i0 from "@angular/core";
import * as i1 from "./config";
/** @type {?} */
const isDefined = (/**
 * @param {?=} value
 * @return {?}
 */
function (value) {
    return value !== undefined;
});
const ɵ0 = isDefined;
export class NzConfigService {
    /**
     * @param {?=} defaultConfig
     */
    constructor(defaultConfig) {
        this.configUpdated$ = new Subject();
        this.config = defaultConfig || {};
    }
    /**
     * @template T
     * @param {?} componentName
     * @return {?}
     */
    getConfigForComponent(componentName) {
        return this.config[componentName];
    }
    /**
     * @param {?} componentName
     * @return {?}
     */
    getConfigChangeEventForComponent(componentName) {
        return this.configUpdated$.pipe(filter((/**
         * @param {?} n
         * @return {?}
         */
        n => n === componentName)), mapTo(undefined));
    }
    /**
     * @template T
     * @param {?} componentName
     * @param {?} value
     * @return {?}
     */
    set(componentName, value) {
        this.config[componentName] = Object.assign({}, this.config[componentName], value);
        this.configUpdated$.next(componentName);
    }
}
NzConfigService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NzConfigService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_CONFIG,] }] }
];
/** @nocollapse */ NzConfigService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzConfigService_Factory() { return new NzConfigService(i0.ɵɵinject(i1.NZ_CONFIG, 8)); }, token: NzConfigService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzConfigService.prototype.configUpdated$;
    /**
     * Global config holding property.
     * @type {?}
     * @private
     */
    NzConfigService.prototype.config;
}
// tslint:disable:no-invalid-this
// tslint:disable:no-any
/**
 * This decorator is used to decorate properties. If a property is decorated, it would try to load default value from
 * config.
 * @template T
 * @param {?} componentName
 * @param {?=} innerDefaultValue
 * @return {?}
 */
// tslint:disable-next-line:typedef
export function WithConfig(componentName, innerDefaultValue) {
    return (/**
     * @param {?} target
     * @param {?} propName
     * @param {?=} originalDescriptor
     * @return {?}
     */
    function ConfigDecorator(target, propName, originalDescriptor) {
        /** @type {?} */
        const privatePropName = `$$__assignedValue__${propName}`;
        if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
            console.warn(`The prop "${privatePropName}" is already exist, it will be override by ${componentName} decorator.`);
        }
        Object.defineProperty(target, privatePropName, {
            configurable: true,
            writable: true,
            enumerable: false
        });
        return {
            /**
             * @return {?}
             */
            get() {
                /** @type {?} */
                const originalValue = originalDescriptor && originalDescriptor.get ? originalDescriptor.get.bind(this)() : this[privatePropName];
                if (isDefined(originalValue)) {
                    return originalValue;
                }
                /** @type {?} */
                const componentConfig = this.nzConfigService.getConfigForComponent(componentName) || {};
                /** @type {?} */
                const configValue = componentConfig[propName];
                return isDefined(configValue) ? configValue : innerDefaultValue;
            },
            /**
             * @param {?=} value
             * @return {?}
             */
            set(value) {
                if (originalDescriptor && originalDescriptor.set) {
                    originalDescriptor.set.bind(this)(value);
                }
                else {
                    this[privatePropName] = value;
                }
            },
            configurable: true,
            enumerable: true
        };
    });
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJjb25maWcvY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVVBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFL0MsT0FBTyxFQUF5QixTQUFTLEVBQUUsTUFBTSxVQUFVLENBQUM7Ozs7TUFFdEQsU0FBUzs7OztBQUFHLFVBQVMsS0FBVztJQUNwQyxPQUFPLEtBQUssS0FBSyxTQUFTLENBQUM7QUFDN0IsQ0FBQyxDQUFBOztBQUtELE1BQU0sT0FBTyxlQUFlOzs7O0lBTTFCLFlBQTJDLGFBQXdCO1FBTDNELG1CQUFjLEdBQUcsSUFBSSxPQUFPLEVBQWtCLENBQUM7UUFNckQsSUFBSSxDQUFDLE1BQU0sR0FBRyxhQUFhLElBQUksRUFBRSxDQUFDO0lBQ3BDLENBQUM7Ozs7OztJQUVELHFCQUFxQixDQUF3QixhQUFnQjtRQUMzRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFRCxnQ0FBZ0MsQ0FBQyxhQUEwQjtRQUN6RCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUM3QixNQUFNOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssYUFBYSxFQUFDLEVBQ2hDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FDakIsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7SUFFRCxHQUFHLENBQXdCLGFBQWdCLEVBQUUsS0FBa0I7UUFDN0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMscUJBQVEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBSyxLQUFLLENBQUUsQ0FBQztRQUN6RSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7WUEzQkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7OzRDQU9jLFFBQVEsWUFBSSxNQUFNLFNBQUMsU0FBUzs7Ozs7Ozs7SUFMekMseUNBQXVEOzs7Ozs7SUFHdkQsaUNBQXlCOzs7Ozs7Ozs7Ozs7O0FBK0IzQixNQUFNLFVBQVUsVUFBVSxDQUFJLGFBQTBCLEVBQUUsaUJBQXFCO0lBQzdFOzs7Ozs7SUFBTyxTQUFTLGVBQWUsQ0FBQyxNQUFXLEVBQUUsUUFBYSxFQUFFLGtCQUErQzs7Y0FDbkcsZUFBZSxHQUFHLHNCQUFzQixRQUFRLEVBQUU7UUFFeEQsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLGVBQWUsQ0FBQyxFQUFFO1lBQ2pFLE9BQU8sQ0FBQyxJQUFJLENBQ1YsYUFBYSxlQUFlLDhDQUE4QyxhQUFhLGFBQWEsQ0FDckcsQ0FBQztTQUNIO1FBRUQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsZUFBZSxFQUFFO1lBQzdDLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFFBQVEsRUFBRSxJQUFJO1lBQ2QsVUFBVSxFQUFFLEtBQUs7U0FDbEIsQ0FBQyxDQUFDO1FBRUgsT0FBTzs7OztZQUNMLEdBQUc7O3NCQUNLLGFBQWEsR0FDakIsa0JBQWtCLElBQUksa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7Z0JBRTVHLElBQUksU0FBUyxDQUFDLGFBQWEsQ0FBQyxFQUFFO29CQUM1QixPQUFPLGFBQWEsQ0FBQztpQkFDdEI7O3NCQUVLLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUU7O3NCQUNqRixXQUFXLEdBQUcsZUFBZSxDQUFDLFFBQVEsQ0FBQztnQkFFN0MsT0FBTyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUM7WUFDbEUsQ0FBQzs7Ozs7WUFDRCxHQUFHLENBQUMsS0FBUztnQkFDWCxJQUFJLGtCQUFrQixJQUFJLGtCQUFrQixDQUFDLEdBQUcsRUFBRTtvQkFDaEQsa0JBQWtCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDMUM7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLEtBQUssQ0FBQztpQkFDL0I7WUFDSCxDQUFDO1lBQ0QsWUFBWSxFQUFFLElBQUk7WUFDbEIsVUFBVSxFQUFFLElBQUk7U0FDakIsQ0FBQztJQUNKLENBQUMsRUFBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbi8vIHRzbGludDpkaXNhYmxlIG5vLWFueVxyXG5cclxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBmaWx0ZXIsIG1hcFRvIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgTnpDb25maWcsIE56Q29uZmlnS2V5LCBOWl9DT05GSUcgfSBmcm9tICcuL2NvbmZpZyc7XHJcblxyXG5jb25zdCBpc0RlZmluZWQgPSBmdW5jdGlvbih2YWx1ZT86IGFueSk6IGJvb2xlYW4ge1xyXG4gIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkO1xyXG59O1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpDb25maWdTZXJ2aWNlIHtcclxuICBwcml2YXRlIGNvbmZpZ1VwZGF0ZWQkID0gbmV3IFN1YmplY3Q8a2V5b2YgTnpDb25maWc+KCk7XHJcblxyXG4gIC8qKiBHbG9iYWwgY29uZmlnIGhvbGRpbmcgcHJvcGVydHkuICovXHJcbiAgcHJpdmF0ZSBjb25maWc6IE56Q29uZmlnO1xyXG5cclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KE5aX0NPTkZJRykgZGVmYXVsdENvbmZpZz86IE56Q29uZmlnKSB7XHJcbiAgICB0aGlzLmNvbmZpZyA9IGRlZmF1bHRDb25maWcgfHwge307XHJcbiAgfVxyXG5cclxuICBnZXRDb25maWdGb3JDb21wb25lbnQ8VCBleHRlbmRzIE56Q29uZmlnS2V5Pihjb21wb25lbnROYW1lOiBUKTogTnpDb25maWdbVF0ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnW2NvbXBvbmVudE5hbWVdO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29uZmlnQ2hhbmdlRXZlbnRGb3JDb21wb25lbnQoY29tcG9uZW50TmFtZTogTnpDb25maWdLZXkpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZ1VwZGF0ZWQkLnBpcGUoXHJcbiAgICAgIGZpbHRlcihuID0+IG4gPT09IGNvbXBvbmVudE5hbWUpLFxyXG4gICAgICBtYXBUbyh1bmRlZmluZWQpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgc2V0PFQgZXh0ZW5kcyBOekNvbmZpZ0tleT4oY29tcG9uZW50TmFtZTogVCwgdmFsdWU6IE56Q29uZmlnW1RdKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbmZpZ1tjb21wb25lbnROYW1lXSA9IHsgLi4udGhpcy5jb25maWdbY29tcG9uZW50TmFtZV0sIC4uLnZhbHVlIH07XHJcbiAgICB0aGlzLmNvbmZpZ1VwZGF0ZWQkLm5leHQoY29tcG9uZW50TmFtZSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1pbnZhbGlkLXRoaXNcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tYW55XHJcblxyXG4vKipcclxuICogVGhpcyBkZWNvcmF0b3IgaXMgdXNlZCB0byBkZWNvcmF0ZSBwcm9wZXJ0aWVzLiBJZiBhIHByb3BlcnR5IGlzIGRlY29yYXRlZCwgaXQgd291bGQgdHJ5IHRvIGxvYWQgZGVmYXVsdCB2YWx1ZSBmcm9tXHJcbiAqIGNvbmZpZy5cclxuICovXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp0eXBlZGVmXHJcbmV4cG9ydCBmdW5jdGlvbiBXaXRoQ29uZmlnPFQ+KGNvbXBvbmVudE5hbWU6IE56Q29uZmlnS2V5LCBpbm5lckRlZmF1bHRWYWx1ZT86IFQpIHtcclxuICByZXR1cm4gZnVuY3Rpb24gQ29uZmlnRGVjb3JhdG9yKHRhcmdldDogYW55LCBwcm9wTmFtZTogYW55LCBvcmlnaW5hbERlc2NyaXB0b3I/OiBUeXBlZFByb3BlcnR5RGVzY3JpcHRvcjxUPik6IGFueSB7XHJcbiAgICBjb25zdCBwcml2YXRlUHJvcE5hbWUgPSBgJCRfX2Fzc2lnbmVkVmFsdWVfXyR7cHJvcE5hbWV9YDtcclxuXHJcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwgcHJpdmF0ZVByb3BOYW1lKSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgYFRoZSBwcm9wIFwiJHtwcml2YXRlUHJvcE5hbWV9XCIgaXMgYWxyZWFkeSBleGlzdCwgaXQgd2lsbCBiZSBvdmVycmlkZSBieSAke2NvbXBvbmVudE5hbWV9IGRlY29yYXRvci5gXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJpdmF0ZVByb3BOYW1lLCB7XHJcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgd3JpdGFibGU6IHRydWUsXHJcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBnZXQoKTogVCB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxWYWx1ZSA9XHJcbiAgICAgICAgICBvcmlnaW5hbERlc2NyaXB0b3IgJiYgb3JpZ2luYWxEZXNjcmlwdG9yLmdldCA/IG9yaWdpbmFsRGVzY3JpcHRvci5nZXQuYmluZCh0aGlzKSgpIDogdGhpc1twcml2YXRlUHJvcE5hbWVdO1xyXG5cclxuICAgICAgICBpZiAoaXNEZWZpbmVkKG9yaWdpbmFsVmFsdWUpKSB7XHJcbiAgICAgICAgICByZXR1cm4gb3JpZ2luYWxWYWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudENvbmZpZyA9IHRoaXMubnpDb25maWdTZXJ2aWNlLmdldENvbmZpZ0ZvckNvbXBvbmVudChjb21wb25lbnROYW1lKSB8fCB7fTtcclxuICAgICAgICBjb25zdCBjb25maWdWYWx1ZSA9IGNvbXBvbmVudENvbmZpZ1twcm9wTmFtZV07XHJcblxyXG4gICAgICAgIHJldHVybiBpc0RlZmluZWQoY29uZmlnVmFsdWUpID8gY29uZmlnVmFsdWUgOiBpbm5lckRlZmF1bHRWYWx1ZTtcclxuICAgICAgfSxcclxuICAgICAgc2V0KHZhbHVlPzogVCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChvcmlnaW5hbERlc2NyaXB0b3IgJiYgb3JpZ2luYWxEZXNjcmlwdG9yLnNldCkge1xyXG4gICAgICAgICAgb3JpZ2luYWxEZXNjcmlwdG9yLnNldC5iaW5kKHRoaXMpKHZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpc1twcml2YXRlUHJvcE5hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgIGVudW1lcmFibGU6IHRydWVcclxuICAgIH07XHJcbiAgfTtcclxufVxyXG4iXX0=