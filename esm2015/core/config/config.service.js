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
const isDefined = function (value) {
    return value !== undefined;
};
export class NzConfigService {
    constructor(defaultConfig) {
        this.configUpdated$ = new Subject();
        this.config = defaultConfig || {};
    }
    getConfigForComponent(componentName) {
        return this.config[componentName];
    }
    getConfigChangeEventForComponent(componentName) {
        return this.configUpdated$.pipe(filter(n => n === componentName), mapTo(undefined));
    }
    set(componentName, value) {
        this.config[componentName] = Object.assign(Object.assign({}, this.config[componentName]), value);
        this.configUpdated$.next(componentName);
    }
}
/** @nocollapse */ NzConfigService.ɵfac = function NzConfigService_Factory(t) { return new (t || NzConfigService)(i0.ɵɵinject(NZ_CONFIG, 8)); };
/** @nocollapse */ NzConfigService.ɵprov = i0.ɵɵdefineInjectable({ token: NzConfigService, factory: NzConfigService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzConfigService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [NZ_CONFIG]
            }] }]; }, null); })();
// tslint:disable:no-invalid-this
// tslint:disable:no-any
/**
 * This decorator is used to decorate properties. If a property is decorated, it would try to load default value from
 * config.
 */
// tslint:disable-next-line:typedef
export function WithConfig(componentName, innerDefaultValue) {
    return function ConfigDecorator(target, propName, originalDescriptor) {
        const privatePropName = `$$__assignedValue__${propName}`;
        Object.defineProperty(target, privatePropName, {
            configurable: true,
            writable: true,
            enumerable: false
        });
        return {
            get() {
                const originalValue = originalDescriptor && originalDescriptor.get ? originalDescriptor.get.bind(this)() : this[privatePropName];
                if (isDefined(originalValue)) {
                    return originalValue;
                }
                const componentConfig = this.nzConfigService.getConfigForComponent(componentName) || {};
                const configValue = componentConfig[propName];
                return isDefined(configValue) ? configValue : innerDefaultValue;
            },
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
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJjb25maWcvY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsd0JBQXdCO0FBRXhCLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFNBQVMsRUFBeUIsTUFBTSxVQUFVLENBQUM7O0FBRTVELE1BQU0sU0FBUyxHQUFHLFVBQVMsS0FBVztJQUNwQyxPQUFPLEtBQUssS0FBSyxTQUFTLENBQUM7QUFDN0IsQ0FBQyxDQUFDO0FBS0YsTUFBTSxPQUFPLGVBQWU7SUFNMUIsWUFBMkMsYUFBd0I7UUFMM0QsbUJBQWMsR0FBRyxJQUFJLE9BQU8sRUFBa0IsQ0FBQztRQU1yRCxJQUFJLENBQUMsTUFBTSxHQUFHLGFBQWEsSUFBSSxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVELHFCQUFxQixDQUF3QixhQUFnQjtRQUMzRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELGdDQUFnQyxDQUFDLGFBQTBCO1FBQ3pELE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQzdCLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxhQUFhLENBQUMsRUFDaEMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUNqQixDQUFDO0lBQ0osQ0FBQztJQUVELEdBQUcsQ0FBd0IsYUFBZ0IsRUFBRSxLQUFrQjtRQUM3RCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxtQ0FBUSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFLLEtBQUssQ0FBRSxDQUFDO1FBQ3pFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzFDLENBQUM7OzhFQXhCVSxlQUFlLGNBTU0sU0FBUzt1REFOOUIsZUFBZSxXQUFmLGVBQWUsbUJBRmQsTUFBTTtrREFFUCxlQUFlO2NBSDNCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7c0JBT2MsUUFBUTs7c0JBQUksTUFBTTt1QkFBQyxTQUFTOztBQXFCM0MsaUNBQWlDO0FBQ2pDLHdCQUF3QjtBQUV4Qjs7O0dBR0c7QUFDSCxtQ0FBbUM7QUFDbkMsTUFBTSxVQUFVLFVBQVUsQ0FBSSxhQUEwQixFQUFFLGlCQUFxQjtJQUM3RSxPQUFPLFNBQVMsZUFBZSxDQUFDLE1BQVcsRUFBRSxRQUFhLEVBQUUsa0JBQStDO1FBQ3pHLE1BQU0sZUFBZSxHQUFHLHNCQUFzQixRQUFRLEVBQUUsQ0FBQztRQUV6RCxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxlQUFlLEVBQUU7WUFDN0MsWUFBWSxFQUFFLElBQUk7WUFDbEIsUUFBUSxFQUFFLElBQUk7WUFDZCxVQUFVLEVBQUUsS0FBSztTQUNsQixDQUFDLENBQUM7UUFFSCxPQUFPO1lBQ0wsR0FBRztnQkFDRCxNQUFNLGFBQWEsR0FBRyxrQkFBa0IsSUFBSSxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUVqSSxJQUFJLFNBQVMsQ0FBQyxhQUFhLENBQUMsRUFBRTtvQkFDNUIsT0FBTyxhQUFhLENBQUM7aUJBQ3RCO2dCQUVELE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN4RixNQUFNLFdBQVcsR0FBRyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBRTlDLE9BQU8sU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDO1lBQ2xFLENBQUM7WUFDRCxHQUFHLENBQUMsS0FBUztnQkFDWCxJQUFJLGtCQUFrQixJQUFJLGtCQUFrQixDQUFDLEdBQUcsRUFBRTtvQkFDaEQsa0JBQWtCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDMUM7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLEtBQUssQ0FBQztpQkFDL0I7WUFDSCxDQUFDO1lBQ0QsWUFBWSxFQUFFLElBQUk7WUFDbEIsVUFBVSxFQUFFLElBQUk7U0FDakIsQ0FBQztJQUNKLENBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbi8vIHRzbGludDpkaXNhYmxlIG5vLWFueVxyXG5cclxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBmaWx0ZXIsIG1hcFRvIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgTlpfQ09ORklHLCBOekNvbmZpZywgTnpDb25maWdLZXkgfSBmcm9tICcuL2NvbmZpZyc7XHJcblxyXG5jb25zdCBpc0RlZmluZWQgPSBmdW5jdGlvbih2YWx1ZT86IGFueSk6IGJvb2xlYW4ge1xyXG4gIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkO1xyXG59O1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpDb25maWdTZXJ2aWNlIHtcclxuICBwcml2YXRlIGNvbmZpZ1VwZGF0ZWQkID0gbmV3IFN1YmplY3Q8a2V5b2YgTnpDb25maWc+KCk7XHJcblxyXG4gIC8qKiBHbG9iYWwgY29uZmlnIGhvbGRpbmcgcHJvcGVydHkuICovXHJcbiAgcHJpdmF0ZSBjb25maWc6IE56Q29uZmlnO1xyXG5cclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KE5aX0NPTkZJRykgZGVmYXVsdENvbmZpZz86IE56Q29uZmlnKSB7XHJcbiAgICB0aGlzLmNvbmZpZyA9IGRlZmF1bHRDb25maWcgfHwge307XHJcbiAgfVxyXG5cclxuICBnZXRDb25maWdGb3JDb21wb25lbnQ8VCBleHRlbmRzIE56Q29uZmlnS2V5Pihjb21wb25lbnROYW1lOiBUKTogTnpDb25maWdbVF0ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnW2NvbXBvbmVudE5hbWVdO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29uZmlnQ2hhbmdlRXZlbnRGb3JDb21wb25lbnQoY29tcG9uZW50TmFtZTogTnpDb25maWdLZXkpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZ1VwZGF0ZWQkLnBpcGUoXHJcbiAgICAgIGZpbHRlcihuID0+IG4gPT09IGNvbXBvbmVudE5hbWUpLFxyXG4gICAgICBtYXBUbyh1bmRlZmluZWQpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgc2V0PFQgZXh0ZW5kcyBOekNvbmZpZ0tleT4oY29tcG9uZW50TmFtZTogVCwgdmFsdWU6IE56Q29uZmlnW1RdKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbmZpZ1tjb21wb25lbnROYW1lXSA9IHsgLi4udGhpcy5jb25maWdbY29tcG9uZW50TmFtZV0sIC4uLnZhbHVlIH07XHJcbiAgICB0aGlzLmNvbmZpZ1VwZGF0ZWQkLm5leHQoY29tcG9uZW50TmFtZSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1pbnZhbGlkLXRoaXNcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tYW55XHJcblxyXG4vKipcclxuICogVGhpcyBkZWNvcmF0b3IgaXMgdXNlZCB0byBkZWNvcmF0ZSBwcm9wZXJ0aWVzLiBJZiBhIHByb3BlcnR5IGlzIGRlY29yYXRlZCwgaXQgd291bGQgdHJ5IHRvIGxvYWQgZGVmYXVsdCB2YWx1ZSBmcm9tXHJcbiAqIGNvbmZpZy5cclxuICovXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp0eXBlZGVmXHJcbmV4cG9ydCBmdW5jdGlvbiBXaXRoQ29uZmlnPFQ+KGNvbXBvbmVudE5hbWU6IE56Q29uZmlnS2V5LCBpbm5lckRlZmF1bHRWYWx1ZT86IFQpIHtcclxuICByZXR1cm4gZnVuY3Rpb24gQ29uZmlnRGVjb3JhdG9yKHRhcmdldDogYW55LCBwcm9wTmFtZTogYW55LCBvcmlnaW5hbERlc2NyaXB0b3I/OiBUeXBlZFByb3BlcnR5RGVzY3JpcHRvcjxUPik6IGFueSB7XHJcbiAgICBjb25zdCBwcml2YXRlUHJvcE5hbWUgPSBgJCRfX2Fzc2lnbmVkVmFsdWVfXyR7cHJvcE5hbWV9YDtcclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcml2YXRlUHJvcE5hbWUsIHtcclxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcclxuICAgICAgZW51bWVyYWJsZTogZmFsc2VcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGdldCgpOiBUIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICBjb25zdCBvcmlnaW5hbFZhbHVlID0gb3JpZ2luYWxEZXNjcmlwdG9yICYmIG9yaWdpbmFsRGVzY3JpcHRvci5nZXQgPyBvcmlnaW5hbERlc2NyaXB0b3IuZ2V0LmJpbmQodGhpcykoKSA6IHRoaXNbcHJpdmF0ZVByb3BOYW1lXTtcclxuXHJcbiAgICAgICAgaWYgKGlzRGVmaW5lZChvcmlnaW5hbFZhbHVlKSkge1xyXG4gICAgICAgICAgcmV0dXJuIG9yaWdpbmFsVmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjb21wb25lbnRDb25maWcgPSB0aGlzLm56Q29uZmlnU2VydmljZS5nZXRDb25maWdGb3JDb21wb25lbnQoY29tcG9uZW50TmFtZSkgfHwge307XHJcbiAgICAgICAgY29uc3QgY29uZmlnVmFsdWUgPSBjb21wb25lbnRDb25maWdbcHJvcE5hbWVdO1xyXG5cclxuICAgICAgICByZXR1cm4gaXNEZWZpbmVkKGNvbmZpZ1ZhbHVlKSA/IGNvbmZpZ1ZhbHVlIDogaW5uZXJEZWZhdWx0VmFsdWU7XHJcbiAgICAgIH0sXHJcbiAgICAgIHNldCh2YWx1ZT86IFQpOiB2b2lkIHtcclxuICAgICAgICBpZiAob3JpZ2luYWxEZXNjcmlwdG9yICYmIG9yaWdpbmFsRGVzY3JpcHRvci5zZXQpIHtcclxuICAgICAgICAgIG9yaWdpbmFsRGVzY3JpcHRvci5zZXQuYmluZCh0aGlzKSh2YWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXNbcHJpdmF0ZVByb3BOYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlXHJcbiAgICB9O1xyXG4gIH07XHJcbn1cclxuIl19