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
export function toNumber(value, fallbackValue = 0) {
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
export function valueFunctionProp(prop, ...args) {
    return typeof prop === 'function' ? prop(...args) : prop;
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
        const privatePropName = `$$__${propName}`;
        if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
            warn(`The prop "${privatePropName}" is already exist, it will be overrided by ${name} decorator.`);
        }
        Object.defineProperty(target, privatePropName, {
            configurable: true,
            writable: true
        });
        return {
            /**
             * @return {?}
             */
            get() {
                return originalDescriptor && originalDescriptor.get
                    ? originalDescriptor.get.bind(this)()
                    : this[privatePropName];
            },
            /**
             * @param {?} value
             * @return {?}
             */
            set(value) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVydC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbInV0aWwvY29udmVydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxtQkFBbUIsRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVuRyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7O0FBR3hDLE1BQU0sVUFBVSxTQUFTLENBQUMsS0FBdUI7SUFDL0MsT0FBTyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN0QyxDQUFDOzs7Ozs7QUFJRCxNQUFNLFVBQVUsUUFBUSxDQUFDLEtBQXNCLEVBQUUsZ0JBQXdCLENBQUM7SUFDeEUsT0FBTyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDO0FBQy9ELENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLFVBQVUsQ0FBQyxLQUFzQjtJQUMvQyxPQUFPLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3BDLENBQUM7Ozs7Ozs7Ozs7QUFRRCxNQUFNLFVBQVUsaUJBQWlCLENBQUksSUFBcUIsRUFBRSxHQUFHLElBQVc7SUFDeEUsT0FBTyxPQUFPLElBQUksS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDM0QsQ0FBQzs7Ozs7OztBQUVELFNBQVMsb0JBQW9CLENBQU8sSUFBWSxFQUFFLFFBQXFCOzs7Ozs7O0lBQ3JFLFNBQVMsYUFBYSxDQUFDLE1BQVcsRUFBRSxRQUFnQixFQUFFLGtCQUFpRDs7Y0FDL0YsZUFBZSxHQUFHLE9BQU8sUUFBUSxFQUFFO1FBRXpDLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxlQUFlLENBQUMsRUFBRTtZQUNqRSxJQUFJLENBQUMsYUFBYSxlQUFlLCtDQUErQyxJQUFJLGFBQWEsQ0FBQyxDQUFDO1NBQ3BHO1FBRUQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsZUFBZSxFQUFFO1lBQzdDLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFFBQVEsRUFBRSxJQUFJO1NBQ2YsQ0FBQyxDQUFDO1FBRUgsT0FBTzs7OztZQUNMLEdBQUc7Z0JBQ0QsT0FBTyxrQkFBa0IsSUFBSSxrQkFBa0IsQ0FBQyxHQUFHO29CQUNqRCxDQUFDLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDckMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUM1QixDQUFDOzs7OztZQUNELEdBQUcsQ0FBQyxLQUFRO2dCQUNWLElBQUksa0JBQWtCLElBQUksa0JBQWtCLENBQUMsR0FBRyxFQUFFO29CQUNoRCxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2lCQUNwRDtnQkFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFDLENBQUM7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELE9BQU8sYUFBYSxDQUFDO0FBQ3ZCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCRCxNQUFNLFVBQVUsWUFBWTtJQUMxQixPQUFPLG9CQUFvQixDQUFDLGNBQWMsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUN6RCxDQUFDOzs7O0FBRUQsTUFBTSxVQUFVLGFBQWE7SUFDM0IsT0FBTyxvQkFBb0IsQ0FBQyxlQUFlLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDM0QsQ0FBQzs7OztBQUVELE1BQU0sVUFBVSxXQUFXO0lBQ3pCLDhCQUE4QjtJQUM5QixPQUFPLG9CQUFvQixDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUN2RCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHksIGNvZXJjZUNzc1BpeGVsVmFsdWUsIF9pc051bWJlclZhbHVlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcclxuXHJcbmltcG9ydCB7IHdhcm4gfSBmcm9tICcuLi9sb2dnZXIvbG9nZ2VyJztcclxuaW1wb3J0IHsgRnVuY3Rpb25Qcm9wIH0gZnJvbSAnLi4vdHlwZXMvY29tbW9uLXdyYXAnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvQm9vbGVhbih2YWx1ZTogYm9vbGVhbiB8IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gIHJldHVybiBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9OdW1iZXIodmFsdWU6IG51bWJlciB8IHN0cmluZyk6IG51bWJlcjtcclxuZXhwb3J0IGZ1bmN0aW9uIHRvTnVtYmVyPEQ+KHZhbHVlOiBudW1iZXIgfCBzdHJpbmcsIGZhbGxiYWNrOiBEKTogbnVtYmVyIHwgRDtcclxuZXhwb3J0IGZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcsIGZhbGxiYWNrVmFsdWU6IG51bWJlciA9IDApOiBudW1iZXIge1xyXG4gIHJldHVybiBfaXNOdW1iZXJWYWx1ZSh2YWx1ZSkgPyBOdW1iZXIodmFsdWUpIDogZmFsbGJhY2tWYWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvQ3NzUGl4ZWwodmFsdWU6IG51bWJlciB8IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgcmV0dXJuIGNvZXJjZUNzc1BpeGVsVmFsdWUodmFsdWUpO1xyXG59XHJcblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZSBuby1hbnlcclxuLy8gdHNsaW50OmRpc2FibGUgbm8taW52YWxpZC10aGlzXHJcblxyXG4vKipcclxuICogR2V0IHRoZSBmdW5jdGlvbi1wcm9wZXJ0eSB0eXBlJ3MgdmFsdWVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB2YWx1ZUZ1bmN0aW9uUHJvcDxUPihwcm9wOiBGdW5jdGlvblByb3A8VD4sIC4uLmFyZ3M6IGFueVtdKTogVCB7XHJcbiAgcmV0dXJuIHR5cGVvZiBwcm9wID09PSAnZnVuY3Rpb24nID8gcHJvcCguLi5hcmdzKSA6IHByb3A7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb3BEZWNvcmF0b3JGYWN0b3J5PFQsIEQ+KG5hbWU6IHN0cmluZywgZmFsbGJhY2s6ICh2OiBUKSA9PiBEKTogKHRhcmdldDogYW55LCBwcm9wTmFtZTogc3RyaW5nKSA9PiB2b2lkIHtcclxuICBmdW5jdGlvbiBwcm9wRGVjb3JhdG9yKHRhcmdldDogYW55LCBwcm9wTmFtZTogc3RyaW5nLCBvcmlnaW5hbERlc2NyaXB0b3I/OiBUeXBlZFByb3BlcnR5RGVzY3JpcHRvcjxhbnk+KTogYW55IHtcclxuICAgIGNvbnN0IHByaXZhdGVQcm9wTmFtZSA9IGAkJF9fJHtwcm9wTmFtZX1gO1xyXG5cclxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGFyZ2V0LCBwcml2YXRlUHJvcE5hbWUpKSB7XHJcbiAgICAgIHdhcm4oYFRoZSBwcm9wIFwiJHtwcml2YXRlUHJvcE5hbWV9XCIgaXMgYWxyZWFkeSBleGlzdCwgaXQgd2lsbCBiZSBvdmVycmlkZWQgYnkgJHtuYW1lfSBkZWNvcmF0b3IuYCk7XHJcbiAgICB9XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJpdmF0ZVByb3BOYW1lLCB7XHJcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgd3JpdGFibGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGdldCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBvcmlnaW5hbERlc2NyaXB0b3IgJiYgb3JpZ2luYWxEZXNjcmlwdG9yLmdldFxyXG4gICAgICAgICAgPyBvcmlnaW5hbERlc2NyaXB0b3IuZ2V0LmJpbmQodGhpcykoKVxyXG4gICAgICAgICAgOiB0aGlzW3ByaXZhdGVQcm9wTmFtZV07XHJcbiAgICAgIH0sXHJcbiAgICAgIHNldCh2YWx1ZTogVCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChvcmlnaW5hbERlc2NyaXB0b3IgJiYgb3JpZ2luYWxEZXNjcmlwdG9yLnNldCkge1xyXG4gICAgICAgICAgb3JpZ2luYWxEZXNjcmlwdG9yLnNldC5iaW5kKHRoaXMpKGZhbGxiYWNrKHZhbHVlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXNbcHJpdmF0ZVByb3BOYW1lXSA9IGZhbGxiYWNrKHZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJldHVybiBwcm9wRGVjb3JhdG9yO1xyXG59XHJcblxyXG4vKipcclxuICogSW5wdXQgZGVjb3JhdG9yIHRoYXQgaGFuZGxlIGEgcHJvcCB0byBkbyBnZXQvc2V0IGF1dG9tYXRpY2FsbHkgd2l0aCB0b0Jvb2xlYW5cclxuICpcclxuICogV2h5IG5vdCB1c2luZyBASW5wdXRCb29sZWFuIGFsb25lIHdpdGhvdXQgQElucHV0PyBBT1QgbmVlZHMgQElucHV0IHRvIGJlIHZpc2libGVcclxuICpcclxuICogQGhvd1RvVXNlXHJcbiAqIGBgYFxyXG4gKiBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gKlxyXG4gKiAvLyBBY3QgYXMgYmVsb3c6XHJcbiAqIC8vIEBJbnB1dCgpXHJcbiAqIC8vIGdldCB2aXNpYmxlKCkgeyByZXR1cm4gdGhpcy5fX3Zpc2libGU7IH1cclxuICogLy8gc2V0IHZpc2libGUodmFsdWUpIHsgdGhpcy5fX3Zpc2libGUgPSB2YWx1ZTsgfVxyXG4gKiAvLyBfX3Zpc2libGUgPSBmYWxzZTtcclxuICogYGBgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gSW5wdXRCb29sZWFuKCk6IGFueSB7XHJcbiAgcmV0dXJuIHByb3BEZWNvcmF0b3JGYWN0b3J5KCdJbnB1dEJvb2xlYW4nLCB0b0Jvb2xlYW4pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSW5wdXRDc3NQaXhlbCgpOiBhbnkge1xyXG4gIHJldHVybiBwcm9wRGVjb3JhdG9yRmFjdG9yeSgnSW5wdXRDc3NQaXhlbCcsIHRvQ3NzUGl4ZWwpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSW5wdXROdW1iZXIoKTogYW55IHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOiBuby1hbnlcclxuICByZXR1cm4gcHJvcERlY29yYXRvckZhY3RvcnkoJ0lucHV0TnVtYmVyJywgdG9OdW1iZXIpO1xyXG59XHJcbiJdfQ==