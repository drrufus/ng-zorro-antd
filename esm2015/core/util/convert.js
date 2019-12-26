/**
 * @fileoverview added by tsickle
 * Generated from: util/convert.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVydC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbInV0aWwvY29udmVydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsbUJBQW1CLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFbkcsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7OztBQUd4QyxNQUFNLFVBQVUsU0FBUyxDQUFDLEtBQXVCO0lBQy9DLE9BQU8scUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdEMsQ0FBQzs7Ozs7O0FBSUQsTUFBTSxVQUFVLFFBQVEsQ0FBQyxLQUFzQixFQUFFLGdCQUF3QixDQUFDO0lBQ3hFLE9BQU8sY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztBQUMvRCxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxVQUFVLENBQUMsS0FBc0I7SUFDL0MsT0FBTyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwQyxDQUFDOzs7Ozs7Ozs7O0FBUUQsTUFBTSxVQUFVLGlCQUFpQixDQUFJLElBQXFCLEVBQUUsR0FBRyxJQUFXO0lBQ3hFLE9BQU8sT0FBTyxJQUFJLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQzNELENBQUM7Ozs7Ozs7QUFFRCxTQUFTLG9CQUFvQixDQUFPLElBQVksRUFBRSxRQUFxQjs7Ozs7OztJQUNyRSxTQUFTLGFBQWEsQ0FBQyxNQUFXLEVBQUUsUUFBZ0IsRUFBRSxrQkFBaUQ7O2NBQy9GLGVBQWUsR0FBRyxPQUFPLFFBQVEsRUFBRTtRQUV6QyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsZUFBZSxDQUFDLEVBQUU7WUFDakUsSUFBSSxDQUFDLGFBQWEsZUFBZSwrQ0FBK0MsSUFBSSxhQUFhLENBQUMsQ0FBQztTQUNwRztRQUVELE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLGVBQWUsRUFBRTtZQUM3QyxZQUFZLEVBQUUsSUFBSTtZQUNsQixRQUFRLEVBQUUsSUFBSTtTQUNmLENBQUMsQ0FBQztRQUVILE9BQU87Ozs7WUFDTCxHQUFHO2dCQUNELE9BQU8sa0JBQWtCLElBQUksa0JBQWtCLENBQUMsR0FBRztvQkFDakQsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ3JDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDNUIsQ0FBQzs7Ozs7WUFDRCxHQUFHLENBQUMsS0FBUTtnQkFDVixJQUFJLGtCQUFrQixJQUFJLGtCQUFrQixDQUFDLEdBQUcsRUFBRTtvQkFDaEQsa0JBQWtCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztpQkFDcEQ7Z0JBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxQyxDQUFDO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxPQUFPLGFBQWEsQ0FBQztBQUN2QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkQsTUFBTSxVQUFVLFlBQVk7SUFDMUIsT0FBTyxvQkFBb0IsQ0FBQyxjQUFjLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDekQsQ0FBQzs7OztBQUVELE1BQU0sVUFBVSxhQUFhO0lBQzNCLE9BQU8sb0JBQW9CLENBQUMsZUFBZSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQzNELENBQUM7Ozs7QUFFRCxNQUFNLFVBQVUsV0FBVztJQUN6Qiw4QkFBOEI7SUFDOUIsT0FBTyxvQkFBb0IsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDdkQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5LCBjb2VyY2VDc3NQaXhlbFZhbHVlLCBfaXNOdW1iZXJWYWx1ZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XHJcblxyXG5pbXBvcnQgeyB3YXJuIH0gZnJvbSAnLi4vbG9nZ2VyL2xvZ2dlcic7XHJcbmltcG9ydCB7IEZ1bmN0aW9uUHJvcCB9IGZyb20gJy4uL3R5cGVzL2NvbW1vbi13cmFwJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b0Jvb2xlYW4odmFsdWU6IGJvb2xlYW4gfCBzdHJpbmcpOiBib29sZWFuIHtcclxuICByZXR1cm4gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXI7XHJcbmV4cG9ydCBmdW5jdGlvbiB0b051bWJlcjxEPih2YWx1ZTogbnVtYmVyIHwgc3RyaW5nLCBmYWxsYmFjazogRCk6IG51bWJlciB8IEQ7XHJcbmV4cG9ydCBmdW5jdGlvbiB0b051bWJlcih2YWx1ZTogbnVtYmVyIHwgc3RyaW5nLCBmYWxsYmFja1ZhbHVlOiBudW1iZXIgPSAwKTogbnVtYmVyIHtcclxuICByZXR1cm4gX2lzTnVtYmVyVmFsdWUodmFsdWUpID8gTnVtYmVyKHZhbHVlKSA6IGZhbGxiYWNrVmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b0Nzc1BpeGVsKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcpOiBzdHJpbmcge1xyXG4gIHJldHVybiBjb2VyY2VDc3NQaXhlbFZhbHVlKHZhbHVlKTtcclxufVxyXG5cclxuLy8gdHNsaW50OmRpc2FibGUgbm8tYW55XHJcbi8vIHRzbGludDpkaXNhYmxlIG5vLWludmFsaWQtdGhpc1xyXG5cclxuLyoqXHJcbiAqIEdldCB0aGUgZnVuY3Rpb24tcHJvcGVydHkgdHlwZSdzIHZhbHVlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdmFsdWVGdW5jdGlvblByb3A8VD4ocHJvcDogRnVuY3Rpb25Qcm9wPFQ+LCAuLi5hcmdzOiBhbnlbXSk6IFQge1xyXG4gIHJldHVybiB0eXBlb2YgcHJvcCA9PT0gJ2Z1bmN0aW9uJyA/IHByb3AoLi4uYXJncykgOiBwcm9wO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9wRGVjb3JhdG9yRmFjdG9yeTxULCBEPihuYW1lOiBzdHJpbmcsIGZhbGxiYWNrOiAodjogVCkgPT4gRCk6ICh0YXJnZXQ6IGFueSwgcHJvcE5hbWU6IHN0cmluZykgPT4gdm9pZCB7XHJcbiAgZnVuY3Rpb24gcHJvcERlY29yYXRvcih0YXJnZXQ6IGFueSwgcHJvcE5hbWU6IHN0cmluZywgb3JpZ2luYWxEZXNjcmlwdG9yPzogVHlwZWRQcm9wZXJ0eURlc2NyaXB0b3I8YW55Pik6IGFueSB7XHJcbiAgICBjb25zdCBwcml2YXRlUHJvcE5hbWUgPSBgJCRfXyR7cHJvcE5hbWV9YDtcclxuXHJcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwgcHJpdmF0ZVByb3BOYW1lKSkge1xyXG4gICAgICB3YXJuKGBUaGUgcHJvcCBcIiR7cHJpdmF0ZVByb3BOYW1lfVwiIGlzIGFscmVhZHkgZXhpc3QsIGl0IHdpbGwgYmUgb3ZlcnJpZGVkIGJ5ICR7bmFtZX0gZGVjb3JhdG9yLmApO1xyXG4gICAgfVxyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByaXZhdGVQcm9wTmFtZSwge1xyXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgIHdyaXRhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBnZXQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gb3JpZ2luYWxEZXNjcmlwdG9yICYmIG9yaWdpbmFsRGVzY3JpcHRvci5nZXRcclxuICAgICAgICAgID8gb3JpZ2luYWxEZXNjcmlwdG9yLmdldC5iaW5kKHRoaXMpKClcclxuICAgICAgICAgIDogdGhpc1twcml2YXRlUHJvcE5hbWVdO1xyXG4gICAgICB9LFxyXG4gICAgICBzZXQodmFsdWU6IFQpOiB2b2lkIHtcclxuICAgICAgICBpZiAob3JpZ2luYWxEZXNjcmlwdG9yICYmIG9yaWdpbmFsRGVzY3JpcHRvci5zZXQpIHtcclxuICAgICAgICAgIG9yaWdpbmFsRGVzY3JpcHRvci5zZXQuYmluZCh0aGlzKShmYWxsYmFjayh2YWx1ZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzW3ByaXZhdGVQcm9wTmFtZV0gPSBmYWxsYmFjayh2YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcHJvcERlY29yYXRvcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIElucHV0IGRlY29yYXRvciB0aGF0IGhhbmRsZSBhIHByb3AgdG8gZG8gZ2V0L3NldCBhdXRvbWF0aWNhbGx5IHdpdGggdG9Cb29sZWFuXHJcbiAqXHJcbiAqIFdoeSBub3QgdXNpbmcgQElucHV0Qm9vbGVhbiBhbG9uZSB3aXRob3V0IEBJbnB1dD8gQU9UIG5lZWRzIEBJbnB1dCB0byBiZSB2aXNpYmxlXHJcbiAqXHJcbiAqIEBob3dUb1VzZVxyXG4gKiBgYGBcclxuICogQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHZpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICpcclxuICogLy8gQWN0IGFzIGJlbG93OlxyXG4gKiAvLyBASW5wdXQoKVxyXG4gKiAvLyBnZXQgdmlzaWJsZSgpIHsgcmV0dXJuIHRoaXMuX192aXNpYmxlOyB9XHJcbiAqIC8vIHNldCB2aXNpYmxlKHZhbHVlKSB7IHRoaXMuX192aXNpYmxlID0gdmFsdWU7IH1cclxuICogLy8gX192aXNpYmxlID0gZmFsc2U7XHJcbiAqIGBgYFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIElucHV0Qm9vbGVhbigpOiBhbnkge1xyXG4gIHJldHVybiBwcm9wRGVjb3JhdG9yRmFjdG9yeSgnSW5wdXRCb29sZWFuJywgdG9Cb29sZWFuKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIElucHV0Q3NzUGl4ZWwoKTogYW55IHtcclxuICByZXR1cm4gcHJvcERlY29yYXRvckZhY3RvcnkoJ0lucHV0Q3NzUGl4ZWwnLCB0b0Nzc1BpeGVsKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIElucHV0TnVtYmVyKCk6IGFueSB7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbGluZTogbm8tYW55XHJcbiAgcmV0dXJuIHByb3BEZWNvcmF0b3JGYWN0b3J5KCdJbnB1dE51bWJlcicsIHRvTnVtYmVyKTtcclxufVxyXG4iXX0=