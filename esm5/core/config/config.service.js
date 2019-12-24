import { __assign } from "tslib";
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
var isDefined = function (value) {
    return value !== undefined;
};
var NzConfigService = /** @class */ (function () {
    function NzConfigService(defaultConfig) {
        this.configUpdated$ = new Subject();
        this.config = defaultConfig || {};
    }
    NzConfigService.prototype.getConfigForComponent = function (componentName) {
        return this.config[componentName];
    };
    NzConfigService.prototype.getConfigChangeEventForComponent = function (componentName) {
        return this.configUpdated$.pipe(filter(function (n) { return n === componentName; }), mapTo(undefined));
    };
    NzConfigService.prototype.set = function (componentName, value) {
        this.config[componentName] = __assign(__assign({}, this.config[componentName]), value);
        this.configUpdated$.next(componentName);
    };
    /** @nocollapse */ NzConfigService.ɵfac = function NzConfigService_Factory(t) { return new (t || NzConfigService)(i0.ɵɵinject(NZ_CONFIG, 8)); };
    /** @nocollapse */ NzConfigService.ɵprov = i0.ɵɵdefineInjectable({ token: NzConfigService, factory: NzConfigService.ɵfac, providedIn: 'root' });
    return NzConfigService;
}());
export { NzConfigService };
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
        var privatePropName = "$$__assignedValue__" + propName;
        Object.defineProperty(target, privatePropName, {
            configurable: true,
            writable: true,
            enumerable: false
        });
        return {
            get: function () {
                var originalValue = originalDescriptor && originalDescriptor.get ? originalDescriptor.get.bind(this)() : this[privatePropName];
                if (isDefined(originalValue)) {
                    return originalValue;
                }
                var componentConfig = this.nzConfigService.getConfigForComponent(componentName) || {};
                var configValue = componentConfig[propName];
                return isDefined(configValue) ? configValue : innerDefaultValue;
            },
            set: function (value) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJjb25maWcvY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRztBQUVILHdCQUF3QjtBQUV4QixPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxTQUFTLEVBQXlCLE1BQU0sVUFBVSxDQUFDOztBQUU1RCxJQUFNLFNBQVMsR0FBRyxVQUFTLEtBQVc7SUFDcEMsT0FBTyxLQUFLLEtBQUssU0FBUyxDQUFDO0FBQzdCLENBQUMsQ0FBQztBQUVGO0lBU0UseUJBQTJDLGFBQXdCO1FBTDNELG1CQUFjLEdBQUcsSUFBSSxPQUFPLEVBQWtCLENBQUM7UUFNckQsSUFBSSxDQUFDLE1BQU0sR0FBRyxhQUFhLElBQUksRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFRCwrQ0FBcUIsR0FBckIsVUFBNkMsYUFBZ0I7UUFDM0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCwwREFBZ0MsR0FBaEMsVUFBaUMsYUFBMEI7UUFDekQsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FDN0IsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxLQUFLLGFBQWEsRUFBbkIsQ0FBbUIsQ0FBQyxFQUNoQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQ2pCLENBQUM7SUFDSixDQUFDO0lBRUQsNkJBQUcsR0FBSCxVQUEyQixhQUFnQixFQUFFLEtBQWtCO1FBQzdELElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLHlCQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUssS0FBSyxDQUFFLENBQUM7UUFDekUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDMUMsQ0FBQztrRkF4QlUsZUFBZSxjQU1NLFNBQVM7MkRBTjlCLGVBQWUsV0FBZixlQUFlLG1CQUZkLE1BQU07MEJBdEJwQjtDQWlEQyxBQTVCRCxJQTRCQztTQXpCWSxlQUFlO2tEQUFmLGVBQWU7Y0FIM0IsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COztzQkFPYyxRQUFROztzQkFBSSxNQUFNO3VCQUFDLFNBQVM7O0FBcUIzQyxpQ0FBaUM7QUFDakMsd0JBQXdCO0FBRXhCOzs7R0FHRztBQUNILG1DQUFtQztBQUNuQyxNQUFNLFVBQVUsVUFBVSxDQUFJLGFBQTBCLEVBQUUsaUJBQXFCO0lBQzdFLE9BQU8sU0FBUyxlQUFlLENBQUMsTUFBVyxFQUFFLFFBQWEsRUFBRSxrQkFBK0M7UUFDekcsSUFBTSxlQUFlLEdBQUcsd0JBQXNCLFFBQVUsQ0FBQztRQUV6RCxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxlQUFlLEVBQUU7WUFDN0MsWUFBWSxFQUFFLElBQUk7WUFDbEIsUUFBUSxFQUFFLElBQUk7WUFDZCxVQUFVLEVBQUUsS0FBSztTQUNsQixDQUFDLENBQUM7UUFFSCxPQUFPO1lBQ0wsR0FBRyxFQUFIO2dCQUNFLElBQU0sYUFBYSxHQUFHLGtCQUFrQixJQUFJLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBRWpJLElBQUksU0FBUyxDQUFDLGFBQWEsQ0FBQyxFQUFFO29CQUM1QixPQUFPLGFBQWEsQ0FBQztpQkFDdEI7Z0JBRUQsSUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3hGLElBQU0sV0FBVyxHQUFHLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFFOUMsT0FBTyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUM7WUFDbEUsQ0FBQztZQUNELEdBQUcsRUFBSCxVQUFJLEtBQVM7Z0JBQ1gsSUFBSSxrQkFBa0IsSUFBSSxrQkFBa0IsQ0FBQyxHQUFHLEVBQUU7b0JBQ2hELGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQzFDO3FCQUFNO29CQUNMLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxLQUFLLENBQUM7aUJBQy9CO1lBQ0gsQ0FBQztZQUNELFlBQVksRUFBRSxJQUFJO1lBQ2xCLFVBQVUsRUFBRSxJQUFJO1NBQ2pCLENBQUM7SUFDSixDQUFDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZSBuby1hbnlcclxuXHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgZmlsdGVyLCBtYXBUbyB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IE5aX0NPTkZJRywgTnpDb25maWcsIE56Q29uZmlnS2V5IH0gZnJvbSAnLi9jb25maWcnO1xyXG5cclxuY29uc3QgaXNEZWZpbmVkID0gZnVuY3Rpb24odmFsdWU/OiBhbnkpOiBib29sZWFuIHtcclxuICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZDtcclxufTtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE56Q29uZmlnU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBjb25maWdVcGRhdGVkJCA9IG5ldyBTdWJqZWN0PGtleW9mIE56Q29uZmlnPigpO1xyXG5cclxuICAvKiogR2xvYmFsIGNvbmZpZyBob2xkaW5nIHByb3BlcnR5LiAqL1xyXG4gIHByaXZhdGUgY29uZmlnOiBOekNvbmZpZztcclxuXHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChOWl9DT05GSUcpIGRlZmF1bHRDb25maWc/OiBOekNvbmZpZykge1xyXG4gICAgdGhpcy5jb25maWcgPSBkZWZhdWx0Q29uZmlnIHx8IHt9O1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29uZmlnRm9yQ29tcG9uZW50PFQgZXh0ZW5kcyBOekNvbmZpZ0tleT4oY29tcG9uZW50TmFtZTogVCk6IE56Q29uZmlnW1RdIHtcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZ1tjb21wb25lbnROYW1lXTtcclxuICB9XHJcblxyXG4gIGdldENvbmZpZ0NoYW5nZUV2ZW50Rm9yQ29tcG9uZW50KGNvbXBvbmVudE5hbWU6IE56Q29uZmlnS2V5KTogT2JzZXJ2YWJsZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWdVcGRhdGVkJC5waXBlKFxyXG4gICAgICBmaWx0ZXIobiA9PiBuID09PSBjb21wb25lbnROYW1lKSxcclxuICAgICAgbWFwVG8odW5kZWZpbmVkKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHNldDxUIGV4dGVuZHMgTnpDb25maWdLZXk+KGNvbXBvbmVudE5hbWU6IFQsIHZhbHVlOiBOekNvbmZpZ1tUXSk6IHZvaWQge1xyXG4gICAgdGhpcy5jb25maWdbY29tcG9uZW50TmFtZV0gPSB7IC4uLnRoaXMuY29uZmlnW2NvbXBvbmVudE5hbWVdLCAuLi52YWx1ZSB9O1xyXG4gICAgdGhpcy5jb25maWdVcGRhdGVkJC5uZXh0KGNvbXBvbmVudE5hbWUpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gdHNsaW50OmRpc2FibGU6bm8taW52YWxpZC10aGlzXHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLWFueVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgZGVjb3JhdG9yIGlzIHVzZWQgdG8gZGVjb3JhdGUgcHJvcGVydGllcy4gSWYgYSBwcm9wZXJ0eSBpcyBkZWNvcmF0ZWQsIGl0IHdvdWxkIHRyeSB0byBsb2FkIGRlZmF1bHQgdmFsdWUgZnJvbVxyXG4gKiBjb25maWcuXHJcbiAqL1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHlwZWRlZlxyXG5leHBvcnQgZnVuY3Rpb24gV2l0aENvbmZpZzxUPihjb21wb25lbnROYW1lOiBOekNvbmZpZ0tleSwgaW5uZXJEZWZhdWx0VmFsdWU/OiBUKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIENvbmZpZ0RlY29yYXRvcih0YXJnZXQ6IGFueSwgcHJvcE5hbWU6IGFueSwgb3JpZ2luYWxEZXNjcmlwdG9yPzogVHlwZWRQcm9wZXJ0eURlc2NyaXB0b3I8VD4pOiBhbnkge1xyXG4gICAgY29uc3QgcHJpdmF0ZVByb3BOYW1lID0gYCQkX19hc3NpZ25lZFZhbHVlX18ke3Byb3BOYW1lfWA7XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJpdmF0ZVByb3BOYW1lLCB7XHJcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgd3JpdGFibGU6IHRydWUsXHJcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBnZXQoKTogVCB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxWYWx1ZSA9IG9yaWdpbmFsRGVzY3JpcHRvciAmJiBvcmlnaW5hbERlc2NyaXB0b3IuZ2V0ID8gb3JpZ2luYWxEZXNjcmlwdG9yLmdldC5iaW5kKHRoaXMpKCkgOiB0aGlzW3ByaXZhdGVQcm9wTmFtZV07XHJcblxyXG4gICAgICAgIGlmIChpc0RlZmluZWQob3JpZ2luYWxWYWx1ZSkpIHtcclxuICAgICAgICAgIHJldHVybiBvcmlnaW5hbFZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY29tcG9uZW50Q29uZmlnID0gdGhpcy5uekNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnRm9yQ29tcG9uZW50KGNvbXBvbmVudE5hbWUpIHx8IHt9O1xyXG4gICAgICAgIGNvbnN0IGNvbmZpZ1ZhbHVlID0gY29tcG9uZW50Q29uZmlnW3Byb3BOYW1lXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGlzRGVmaW5lZChjb25maWdWYWx1ZSkgPyBjb25maWdWYWx1ZSA6IGlubmVyRGVmYXVsdFZhbHVlO1xyXG4gICAgICB9LFxyXG4gICAgICBzZXQodmFsdWU/OiBUKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKG9yaWdpbmFsRGVzY3JpcHRvciAmJiBvcmlnaW5hbERlc2NyaXB0b3Iuc2V0KSB7XHJcbiAgICAgICAgICBvcmlnaW5hbERlc2NyaXB0b3Iuc2V0LmJpbmQodGhpcykodmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzW3ByaXZhdGVQcm9wTmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgZW51bWVyYWJsZTogdHJ1ZVxyXG4gICAgfTtcclxuICB9O1xyXG59XHJcbiJdfQ==