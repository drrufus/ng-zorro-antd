/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { __read, __spread } from "tslib";
import { _isNumberValue, coerceBooleanProperty, coerceCssPixelValue } from '@angular/cdk/coercion';
import { warn } from '../logger/logger';
export function toBoolean(value) {
    return coerceBooleanProperty(value);
}
export function toNumber(value, fallbackValue) {
    if (fallbackValue === void 0) { fallbackValue = 0; }
    return _isNumberValue(value) ? Number(value) : fallbackValue;
}
export function toCssPixel(value) {
    return coerceCssPixelValue(value);
}
// tslint:disable no-any
// tslint:disable no-invalid-this
/**
 * Get the function-property type's value
 */
export function valueFunctionProp(prop) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return typeof prop === 'function' ? prop.apply(void 0, __spread(args)) : prop;
}
function propDecoratorFactory(name, fallback) {
    function propDecorator(target, propName, originalDescriptor) {
        var privatePropName = "$$__" + propName;
        if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
            warn("The prop \"" + privatePropName + "\" is already exist, it will be overrided by " + name + " decorator.");
        }
        Object.defineProperty(target, privatePropName, {
            configurable: true,
            writable: true
        });
        return {
            get: function () {
                return originalDescriptor && originalDescriptor.get ? originalDescriptor.get.bind(this)() : this[privatePropName];
            },
            set: function (value) {
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
 * Why not using @InputBoolean alone without @Input? AOT needs @Input to be visible
 *
 * @howToUse
 * ```
 * @Input() @InputBoolean() visible: boolean = false;
 *
 * // Act as below:
 * // @Input()
 * // get visible() { return this.__visible; }
 * // set visible(value) { this.__visible = value; }
 * // __visible = false;
 * ```
 */
export function InputBoolean() {
    return propDecoratorFactory('InputBoolean', toBoolean);
}
export function InputCssPixel() {
    return propDecoratorFactory('InputCssPixel', toCssPixel);
}
export function InputNumber() {
    // tslint:disable-line: no-any
    return propDecoratorFactory('InputNumber', toNumber);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVydC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbInV0aWwvY29udmVydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7O0FBRUgsT0FBTyxFQUFFLGNBQWMsRUFBRSxxQkFBcUIsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRW5HLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUd4QyxNQUFNLFVBQVUsU0FBUyxDQUFDLEtBQXVCO0lBQy9DLE9BQU8scUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdEMsQ0FBQztBQUlELE1BQU0sVUFBVSxRQUFRLENBQUMsS0FBc0IsRUFBRSxhQUF5QjtJQUF6Qiw4QkFBQSxFQUFBLGlCQUF5QjtJQUN4RSxPQUFPLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUM7QUFDL0QsQ0FBQztBQUVELE1BQU0sVUFBVSxVQUFVLENBQUMsS0FBc0I7SUFDL0MsT0FBTyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwQyxDQUFDO0FBRUQsd0JBQXdCO0FBQ3hCLGlDQUFpQztBQUVqQzs7R0FFRztBQUNILE1BQU0sVUFBVSxpQkFBaUIsQ0FBSSxJQUFxQjtJQUFFLGNBQWM7U0FBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1FBQWQsNkJBQWM7O0lBQ3hFLE9BQU8sT0FBTyxJQUFJLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLHdCQUFJLElBQUksR0FBRSxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQzNELENBQUM7QUFFRCxTQUFTLG9CQUFvQixDQUFPLElBQVksRUFBRSxRQUFxQjtJQUNyRSxTQUFTLGFBQWEsQ0FBQyxNQUFXLEVBQUUsUUFBZ0IsRUFBRSxrQkFBaUQ7UUFDckcsSUFBTSxlQUFlLEdBQUcsU0FBTyxRQUFVLENBQUM7UUFFMUMsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLGVBQWUsQ0FBQyxFQUFFO1lBQ2pFLElBQUksQ0FBQyxnQkFBYSxlQUFlLHFEQUErQyxJQUFJLGdCQUFhLENBQUMsQ0FBQztTQUNwRztRQUVELE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLGVBQWUsRUFBRTtZQUM3QyxZQUFZLEVBQUUsSUFBSTtZQUNsQixRQUFRLEVBQUUsSUFBSTtTQUNmLENBQUMsQ0FBQztRQUVILE9BQU87WUFDTCxHQUFHLEVBQUg7Z0JBQ0UsT0FBTyxrQkFBa0IsSUFBSSxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ3BILENBQUM7WUFDRCxHQUFHLEVBQUgsVUFBSSxLQUFRO2dCQUNWLElBQUksa0JBQWtCLElBQUksa0JBQWtCLENBQUMsR0FBRyxFQUFFO29CQUNoRCxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2lCQUNwRDtnQkFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFDLENBQUM7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELE9BQU8sYUFBYSxDQUFDO0FBQ3ZCLENBQUM7QUFFRDs7Ozs7Ozs7Ozs7Ozs7O0dBZUc7QUFDSCxNQUFNLFVBQVUsWUFBWTtJQUMxQixPQUFPLG9CQUFvQixDQUFDLGNBQWMsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUN6RCxDQUFDO0FBRUQsTUFBTSxVQUFVLGFBQWE7SUFDM0IsT0FBTyxvQkFBb0IsQ0FBQyxlQUFlLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDM0QsQ0FBQztBQUVELE1BQU0sVUFBVSxXQUFXO0lBQ3pCLDhCQUE4QjtJQUM5QixPQUFPLG9CQUFvQixDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUN2RCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBfaXNOdW1iZXJWYWx1ZSwgY29lcmNlQm9vbGVhblByb3BlcnR5LCBjb2VyY2VDc3NQaXhlbFZhbHVlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcclxuXHJcbmltcG9ydCB7IHdhcm4gfSBmcm9tICcuLi9sb2dnZXIvbG9nZ2VyJztcclxuaW1wb3J0IHsgRnVuY3Rpb25Qcm9wIH0gZnJvbSAnLi4vdHlwZXMvY29tbW9uLXdyYXAnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvQm9vbGVhbih2YWx1ZTogYm9vbGVhbiB8IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gIHJldHVybiBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9OdW1iZXIodmFsdWU6IG51bWJlciB8IHN0cmluZyk6IG51bWJlcjtcclxuZXhwb3J0IGZ1bmN0aW9uIHRvTnVtYmVyPEQ+KHZhbHVlOiBudW1iZXIgfCBzdHJpbmcsIGZhbGxiYWNrOiBEKTogbnVtYmVyIHwgRDtcclxuZXhwb3J0IGZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcsIGZhbGxiYWNrVmFsdWU6IG51bWJlciA9IDApOiBudW1iZXIge1xyXG4gIHJldHVybiBfaXNOdW1iZXJWYWx1ZSh2YWx1ZSkgPyBOdW1iZXIodmFsdWUpIDogZmFsbGJhY2tWYWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvQ3NzUGl4ZWwodmFsdWU6IG51bWJlciB8IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgcmV0dXJuIGNvZXJjZUNzc1BpeGVsVmFsdWUodmFsdWUpO1xyXG59XHJcblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZSBuby1hbnlcclxuLy8gdHNsaW50OmRpc2FibGUgbm8taW52YWxpZC10aGlzXHJcblxyXG4vKipcclxuICogR2V0IHRoZSBmdW5jdGlvbi1wcm9wZXJ0eSB0eXBlJ3MgdmFsdWVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB2YWx1ZUZ1bmN0aW9uUHJvcDxUPihwcm9wOiBGdW5jdGlvblByb3A8VD4sIC4uLmFyZ3M6IGFueVtdKTogVCB7XHJcbiAgcmV0dXJuIHR5cGVvZiBwcm9wID09PSAnZnVuY3Rpb24nID8gcHJvcCguLi5hcmdzKSA6IHByb3A7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb3BEZWNvcmF0b3JGYWN0b3J5PFQsIEQ+KG5hbWU6IHN0cmluZywgZmFsbGJhY2s6ICh2OiBUKSA9PiBEKTogKHRhcmdldDogYW55LCBwcm9wTmFtZTogc3RyaW5nKSA9PiB2b2lkIHtcclxuICBmdW5jdGlvbiBwcm9wRGVjb3JhdG9yKHRhcmdldDogYW55LCBwcm9wTmFtZTogc3RyaW5nLCBvcmlnaW5hbERlc2NyaXB0b3I/OiBUeXBlZFByb3BlcnR5RGVzY3JpcHRvcjxhbnk+KTogYW55IHtcclxuICAgIGNvbnN0IHByaXZhdGVQcm9wTmFtZSA9IGAkJF9fJHtwcm9wTmFtZX1gO1xyXG5cclxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGFyZ2V0LCBwcml2YXRlUHJvcE5hbWUpKSB7XHJcbiAgICAgIHdhcm4oYFRoZSBwcm9wIFwiJHtwcml2YXRlUHJvcE5hbWV9XCIgaXMgYWxyZWFkeSBleGlzdCwgaXQgd2lsbCBiZSBvdmVycmlkZWQgYnkgJHtuYW1lfSBkZWNvcmF0b3IuYCk7XHJcbiAgICB9XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJpdmF0ZVByb3BOYW1lLCB7XHJcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgd3JpdGFibGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGdldCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBvcmlnaW5hbERlc2NyaXB0b3IgJiYgb3JpZ2luYWxEZXNjcmlwdG9yLmdldCA/IG9yaWdpbmFsRGVzY3JpcHRvci5nZXQuYmluZCh0aGlzKSgpIDogdGhpc1twcml2YXRlUHJvcE5hbWVdO1xyXG4gICAgICB9LFxyXG4gICAgICBzZXQodmFsdWU6IFQpOiB2b2lkIHtcclxuICAgICAgICBpZiAob3JpZ2luYWxEZXNjcmlwdG9yICYmIG9yaWdpbmFsRGVzY3JpcHRvci5zZXQpIHtcclxuICAgICAgICAgIG9yaWdpbmFsRGVzY3JpcHRvci5zZXQuYmluZCh0aGlzKShmYWxsYmFjayh2YWx1ZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzW3ByaXZhdGVQcm9wTmFtZV0gPSBmYWxsYmFjayh2YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcHJvcERlY29yYXRvcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIElucHV0IGRlY29yYXRvciB0aGF0IGhhbmRsZSBhIHByb3AgdG8gZG8gZ2V0L3NldCBhdXRvbWF0aWNhbGx5IHdpdGggdG9Cb29sZWFuXHJcbiAqXHJcbiAqIFdoeSBub3QgdXNpbmcgQElucHV0Qm9vbGVhbiBhbG9uZSB3aXRob3V0IEBJbnB1dD8gQU9UIG5lZWRzIEBJbnB1dCB0byBiZSB2aXNpYmxlXHJcbiAqXHJcbiAqIEBob3dUb1VzZVxyXG4gKiBgYGBcclxuICogQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHZpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICpcclxuICogLy8gQWN0IGFzIGJlbG93OlxyXG4gKiAvLyBASW5wdXQoKVxyXG4gKiAvLyBnZXQgdmlzaWJsZSgpIHsgcmV0dXJuIHRoaXMuX192aXNpYmxlOyB9XHJcbiAqIC8vIHNldCB2aXNpYmxlKHZhbHVlKSB7IHRoaXMuX192aXNpYmxlID0gdmFsdWU7IH1cclxuICogLy8gX192aXNpYmxlID0gZmFsc2U7XHJcbiAqIGBgYFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIElucHV0Qm9vbGVhbigpOiBhbnkge1xyXG4gIHJldHVybiBwcm9wRGVjb3JhdG9yRmFjdG9yeSgnSW5wdXRCb29sZWFuJywgdG9Cb29sZWFuKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIElucHV0Q3NzUGl4ZWwoKTogYW55IHtcclxuICByZXR1cm4gcHJvcERlY29yYXRvckZhY3RvcnkoJ0lucHV0Q3NzUGl4ZWwnLCB0b0Nzc1BpeGVsKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIElucHV0TnVtYmVyKCk6IGFueSB7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbGluZTogbm8tYW55XHJcbiAgcmV0dXJuIHByb3BEZWNvcmF0b3JGYWN0b3J5KCdJbnB1dE51bWJlcicsIHRvTnVtYmVyKTtcclxufVxyXG4iXX0=