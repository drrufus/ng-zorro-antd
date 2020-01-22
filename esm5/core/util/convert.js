/**
 * @fileoverview added by tsickle
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
import { coerceBooleanProperty, coerceCssPixelValue, _isNumberValue } from '@angular/cdk/coercion';
import { warn } from '../logger/logger';
/**
 * @param {?} value
 * @return {?}
 */
export function toBoolean(value) {
    return coerceBooleanProperty(value);
}
/**
 * @param {?} value
 * @param {?=} fallbackValue
 * @return {?}
 */
export function toNumber(value, fallbackValue) {
    if (fallbackValue === void 0) { fallbackValue = 0; }
    return _isNumberValue(value) ? Number(value) : fallbackValue;
}
/**
 * @param {?} value
 * @return {?}
 */
export function toCssPixel(value) {
    return coerceCssPixelValue(value);
}
// tslint:disable no-any
// tslint:disable no-invalid-this
/**
 * Get the function-property type's value
 * @template T
 * @param {?} prop
 * @param {...?} args
 * @return {?}
 */
export function valueFunctionProp(prop) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return typeof prop === 'function' ? prop.apply(void 0, tslib_1.__spread(args)) : prop;
}
/**
 * @template T, D
 * @param {?} name
 * @param {?} fallback
 * @return {?}
 */
function propDecoratorFactory(name, fallback) {
    /**
     * @param {?} target
     * @param {?} propName
     * @param {?=} originalDescriptor
     * @return {?}
     */
    function propDecorator(target, propName, originalDescriptor) {
        /** @type {?} */
        var privatePropName = "$$__" + propName;
        if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
            warn("The prop \"" + privatePropName + "\" is already exist, it will be overrided by " + name + " decorator.");
        }
        Object.defineProperty(target, privatePropName, {
            configurable: true,
            writable: true
        });
        return {
            get: /**
             * @return {?}
             */
            function () {
                return originalDescriptor && originalDescriptor.get
                    ? originalDescriptor.get.bind(this)()
                    : this[privatePropName];
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (originalDescriptor && originalDescriptor.set) {
                    originalDescriptor.set.bind(this)(fallback(value));
                }
                this[privatePropName] = fallback(value);
            }
        };
    }
    return propDecorator;
}
/**
 * Input decorator that handle a prop to do get/set automatically with toBoolean
 *
 * Why not using \@InputBoolean alone without \@Input? AOT needs \@Input to be visible
 *
 * \@howToUse
 * ```
 * \@Input() \@InputBoolean() visible: boolean = false;
 *
 * // Act as below:
 * // \@Input()
 * // get visible() { return this.__visible; }
 * // set visible(value) { this.__visible = value; }
 * // __visible = false;
 * ```
 * @return {?}
 */
export function InputBoolean() {
    return propDecoratorFactory('InputBoolean', toBoolean);
}
/**
 * @return {?}
 */
export function InputCssPixel() {
    return propDecoratorFactory('InputCssPixel', toCssPixel);
}
/**
 * @return {?}
 */
export function InputNumber() {
    // tslint:disable-line: no-any
    return propDecoratorFactory('InputNumber', toNumber);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVydC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbInV0aWwvY29udmVydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsbUJBQW1CLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFbkcsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7OztBQUd4QyxNQUFNLFVBQVUsU0FBUyxDQUFDLEtBQXVCO0lBQy9DLE9BQU8scUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdEMsQ0FBQzs7Ozs7O0FBSUQsTUFBTSxVQUFVLFFBQVEsQ0FBQyxLQUFzQixFQUFFLGFBQXlCO0lBQXpCLDhCQUFBLEVBQUEsaUJBQXlCO0lBQ3hFLE9BQU8sY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztBQUMvRCxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxVQUFVLENBQUMsS0FBc0I7SUFDL0MsT0FBTyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwQyxDQUFDOzs7Ozs7Ozs7O0FBUUQsTUFBTSxVQUFVLGlCQUFpQixDQUFJLElBQXFCO0lBQUUsY0FBYztTQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7UUFBZCw2QkFBYzs7SUFDeEUsT0FBTyxPQUFPLElBQUksS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksZ0NBQUksSUFBSSxHQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDM0QsQ0FBQzs7Ozs7OztBQUVELFNBQVMsb0JBQW9CLENBQU8sSUFBWSxFQUFFLFFBQXFCOzs7Ozs7O0lBQ3JFLFNBQVMsYUFBYSxDQUFDLE1BQVcsRUFBRSxRQUFnQixFQUFFLGtCQUFpRDs7WUFDL0YsZUFBZSxHQUFHLFNBQU8sUUFBVTtRQUV6QyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsZUFBZSxDQUFDLEVBQUU7WUFDakUsSUFBSSxDQUFDLGdCQUFhLGVBQWUscURBQStDLElBQUksZ0JBQWEsQ0FBQyxDQUFDO1NBQ3BHO1FBRUQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsZUFBZSxFQUFFO1lBQzdDLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFFBQVEsRUFBRSxJQUFJO1NBQ2YsQ0FBQyxDQUFDO1FBRUgsT0FBTztZQUNMLEdBQUc7OztZQUFIO2dCQUNFLE9BQU8sa0JBQWtCLElBQUksa0JBQWtCLENBQUMsR0FBRztvQkFDakQsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ3JDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDNUIsQ0FBQztZQUNELEdBQUc7Ozs7WUFBSCxVQUFJLEtBQVE7Z0JBQ1YsSUFBSSxrQkFBa0IsSUFBSSxrQkFBa0IsQ0FBQyxHQUFHLEVBQUU7b0JBQ2hELGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7aUJBQ3BEO2dCQUNELElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUMsQ0FBQztTQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsT0FBTyxhQUFhLENBQUM7QUFDdkIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JELE1BQU0sVUFBVSxZQUFZO0lBQzFCLE9BQU8sb0JBQW9CLENBQUMsY0FBYyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ3pELENBQUM7Ozs7QUFFRCxNQUFNLFVBQVUsYUFBYTtJQUMzQixPQUFPLG9CQUFvQixDQUFDLGVBQWUsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUMzRCxDQUFDOzs7O0FBRUQsTUFBTSxVQUFVLFdBQVc7SUFDekIsOEJBQThCO0lBQzlCLE9BQU8sb0JBQW9CLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ3ZELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSwgY29lcmNlQ3NzUGl4ZWxWYWx1ZSwgX2lzTnVtYmVyVmFsdWUgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xyXG5cclxuaW1wb3J0IHsgd2FybiB9IGZyb20gJy4uL2xvZ2dlci9sb2dnZXInO1xyXG5pbXBvcnQgeyBGdW5jdGlvblByb3AgfSBmcm9tICcuLi90eXBlcy9jb21tb24td3JhcCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9Cb29sZWFuKHZhbHVlOiBib29sZWFuIHwgc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b051bWJlcih2YWx1ZTogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyO1xyXG5leHBvcnQgZnVuY3Rpb24gdG9OdW1iZXI8RD4odmFsdWU6IG51bWJlciB8IHN0cmluZywgZmFsbGJhY2s6IEQpOiBudW1iZXIgfCBEO1xyXG5leHBvcnQgZnVuY3Rpb24gdG9OdW1iZXIodmFsdWU6IG51bWJlciB8IHN0cmluZywgZmFsbGJhY2tWYWx1ZTogbnVtYmVyID0gMCk6IG51bWJlciB7XHJcbiAgcmV0dXJuIF9pc051bWJlclZhbHVlKHZhbHVlKSA/IE51bWJlcih2YWx1ZSkgOiBmYWxsYmFja1ZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9Dc3NQaXhlbCh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nKTogc3RyaW5nIHtcclxuICByZXR1cm4gY29lcmNlQ3NzUGl4ZWxWYWx1ZSh2YWx1ZSk7XHJcbn1cclxuXHJcbi8vIHRzbGludDpkaXNhYmxlIG5vLWFueVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZSBuby1pbnZhbGlkLXRoaXNcclxuXHJcbi8qKlxyXG4gKiBHZXQgdGhlIGZ1bmN0aW9uLXByb3BlcnR5IHR5cGUncyB2YWx1ZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHZhbHVlRnVuY3Rpb25Qcm9wPFQ+KHByb3A6IEZ1bmN0aW9uUHJvcDxUPiwgLi4uYXJnczogYW55W10pOiBUIHtcclxuICByZXR1cm4gdHlwZW9mIHByb3AgPT09ICdmdW5jdGlvbicgPyBwcm9wKC4uLmFyZ3MpIDogcHJvcDtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJvcERlY29yYXRvckZhY3Rvcnk8VCwgRD4obmFtZTogc3RyaW5nLCBmYWxsYmFjazogKHY6IFQpID0+IEQpOiAodGFyZ2V0OiBhbnksIHByb3BOYW1lOiBzdHJpbmcpID0+IHZvaWQge1xyXG4gIGZ1bmN0aW9uIHByb3BEZWNvcmF0b3IodGFyZ2V0OiBhbnksIHByb3BOYW1lOiBzdHJpbmcsIG9yaWdpbmFsRGVzY3JpcHRvcj86IFR5cGVkUHJvcGVydHlEZXNjcmlwdG9yPGFueT4pOiBhbnkge1xyXG4gICAgY29uc3QgcHJpdmF0ZVByb3BOYW1lID0gYCQkX18ke3Byb3BOYW1lfWA7XHJcblxyXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0YXJnZXQsIHByaXZhdGVQcm9wTmFtZSkpIHtcclxuICAgICAgd2FybihgVGhlIHByb3AgXCIke3ByaXZhdGVQcm9wTmFtZX1cIiBpcyBhbHJlYWR5IGV4aXN0LCBpdCB3aWxsIGJlIG92ZXJyaWRlZCBieSAke25hbWV9IGRlY29yYXRvci5gKTtcclxuICAgIH1cclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcml2YXRlUHJvcE5hbWUsIHtcclxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICB3cml0YWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZ2V0KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsRGVzY3JpcHRvciAmJiBvcmlnaW5hbERlc2NyaXB0b3IuZ2V0XHJcbiAgICAgICAgICA/IG9yaWdpbmFsRGVzY3JpcHRvci5nZXQuYmluZCh0aGlzKSgpXHJcbiAgICAgICAgICA6IHRoaXNbcHJpdmF0ZVByb3BOYW1lXTtcclxuICAgICAgfSxcclxuICAgICAgc2V0KHZhbHVlOiBUKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKG9yaWdpbmFsRGVzY3JpcHRvciAmJiBvcmlnaW5hbERlc2NyaXB0b3Iuc2V0KSB7XHJcbiAgICAgICAgICBvcmlnaW5hbERlc2NyaXB0b3Iuc2V0LmJpbmQodGhpcykoZmFsbGJhY2sodmFsdWUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpc1twcml2YXRlUHJvcE5hbWVdID0gZmFsbGJhY2sodmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHByb3BEZWNvcmF0b3I7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnB1dCBkZWNvcmF0b3IgdGhhdCBoYW5kbGUgYSBwcm9wIHRvIGRvIGdldC9zZXQgYXV0b21hdGljYWxseSB3aXRoIHRvQm9vbGVhblxyXG4gKlxyXG4gKiBXaHkgbm90IHVzaW5nIEBJbnB1dEJvb2xlYW4gYWxvbmUgd2l0aG91dCBASW5wdXQ/IEFPVCBuZWVkcyBASW5wdXQgdG8gYmUgdmlzaWJsZVxyXG4gKlxyXG4gKiBAaG93VG9Vc2VcclxuICogYGBgXHJcbiAqIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB2aXNpYmxlOiBib29sZWFuID0gZmFsc2U7XHJcbiAqXHJcbiAqIC8vIEFjdCBhcyBiZWxvdzpcclxuICogLy8gQElucHV0KClcclxuICogLy8gZ2V0IHZpc2libGUoKSB7IHJldHVybiB0aGlzLl9fdmlzaWJsZTsgfVxyXG4gKiAvLyBzZXQgdmlzaWJsZSh2YWx1ZSkgeyB0aGlzLl9fdmlzaWJsZSA9IHZhbHVlOyB9XHJcbiAqIC8vIF9fdmlzaWJsZSA9IGZhbHNlO1xyXG4gKiBgYGBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBJbnB1dEJvb2xlYW4oKTogYW55IHtcclxuICByZXR1cm4gcHJvcERlY29yYXRvckZhY3RvcnkoJ0lucHV0Qm9vbGVhbicsIHRvQm9vbGVhbik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBJbnB1dENzc1BpeGVsKCk6IGFueSB7XHJcbiAgcmV0dXJuIHByb3BEZWNvcmF0b3JGYWN0b3J5KCdJbnB1dENzc1BpeGVsJywgdG9Dc3NQaXhlbCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBJbnB1dE51bWJlcigpOiBhbnkge1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLWxpbmU6IG5vLWFueVxyXG4gIHJldHVybiBwcm9wRGVjb3JhdG9yRmFjdG9yeSgnSW5wdXROdW1iZXInLCB0b051bWJlcik7XHJcbn1cclxuIl19