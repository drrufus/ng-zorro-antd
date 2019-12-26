/**
 * @fileoverview added by tsickle
 * Generated from: nz-checkbox-wrapper.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Output, Renderer2, ViewEncapsulation } from '@angular/core';
var NzCheckboxWrapperComponent = /** @class */ (function () {
    function NzCheckboxWrapperComponent(renderer, elementRef) {
        this.nzOnChange = new EventEmitter();
        this.checkboxList = [];
        renderer.addClass(elementRef.nativeElement, 'ant-checkbox-group');
    }
    /**
     * @param {?} value
     * @return {?}
     */
    NzCheckboxWrapperComponent.prototype.addCheckbox = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.checkboxList.push(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzCheckboxWrapperComponent.prototype.removeCheckbox = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.checkboxList.splice(this.checkboxList.indexOf(value), 1);
    };
    /**
     * @return {?}
     */
    NzCheckboxWrapperComponent.prototype.outputValue = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var checkedList = this.checkboxList.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.nzChecked; }));
        return checkedList.map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.nzValue; }));
    };
    /**
     * @return {?}
     */
    NzCheckboxWrapperComponent.prototype.onChange = /**
     * @return {?}
     */
    function () {
        this.nzOnChange.emit(this.outputValue());
    };
    NzCheckboxWrapperComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-checkbox-wrapper',
                    exportAs: 'nzCheckboxWrapper',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "<ng-content></ng-content>"
                }] }
    ];
    /** @nocollapse */
    NzCheckboxWrapperComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    NzCheckboxWrapperComponent.propDecorators = {
        nzOnChange: [{ type: Output }]
    };
    return NzCheckboxWrapperComponent;
}());
export { NzCheckboxWrapperComponent };
if (false) {
    /** @type {?} */
    NzCheckboxWrapperComponent.prototype.nzOnChange;
    /**
     * @type {?}
     * @private
     */
    NzCheckboxWrapperComponent.prototype.checkboxList;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2hlY2tib3gtd3JhcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NoZWNrYm94LyIsInNvdXJjZXMiOlsibnotY2hlY2tib3gtd3JhcHBlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUl2QjtJQTZCRSxvQ0FBWSxRQUFtQixFQUFFLFVBQXNCO1FBcEJwQyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVksQ0FBQztRQUNyRCxpQkFBWSxHQUEwQixFQUFFLENBQUM7UUFvQi9DLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7Ozs7O0lBbkJELGdEQUFXOzs7O0lBQVgsVUFBWSxLQUEwQjtRQUNwQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVELG1EQUFjOzs7O0lBQWQsVUFBZSxLQUEwQjtRQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7O0lBRUQsZ0RBQVc7OztJQUFYOztZQUNRLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU07Ozs7UUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxTQUFTLEVBQWQsQ0FBYyxFQUFDO1FBQ3BFLE9BQU8sV0FBVyxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxPQUFPLEVBQVosQ0FBWSxFQUFDLENBQUM7SUFDL0MsQ0FBQzs7OztJQUVELDZDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7O2dCQTNCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxxQ0FBbUQ7aUJBQ3BEOzs7O2dCQWJDLFNBQVM7Z0JBSFQsVUFBVTs7OzZCQWtCVCxNQUFNOztJQXVCVCxpQ0FBQztDQUFBLEFBaENELElBZ0NDO1NBeEJZLDBCQUEwQjs7O0lBQ3JDLGdEQUE2RDs7Ozs7SUFDN0Qsa0RBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOekNoZWNrYm94Q29tcG9uZW50IH0gZnJvbSAnLi9uei1jaGVja2JveC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei1jaGVja2JveC13cmFwcGVyJyxcclxuICBleHBvcnRBczogJ256Q2hlY2tib3hXcmFwcGVyJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1jaGVja2JveC13cmFwcGVyLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpDaGVja2JveFdyYXBwZXJDb21wb25lbnQge1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4oKTtcclxuICBwcml2YXRlIGNoZWNrYm94TGlzdDogTnpDaGVja2JveENvbXBvbmVudFtdID0gW107XHJcblxyXG4gIGFkZENoZWNrYm94KHZhbHVlOiBOekNoZWNrYm94Q29tcG9uZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLmNoZWNrYm94TGlzdC5wdXNoKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUNoZWNrYm94KHZhbHVlOiBOekNoZWNrYm94Q29tcG9uZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLmNoZWNrYm94TGlzdC5zcGxpY2UodGhpcy5jaGVja2JveExpc3QuaW5kZXhPZih2YWx1ZSksIDEpO1xyXG4gIH1cclxuXHJcbiAgb3V0cHV0VmFsdWUoKTogc3RyaW5nW10ge1xyXG4gICAgY29uc3QgY2hlY2tlZExpc3QgPSB0aGlzLmNoZWNrYm94TGlzdC5maWx0ZXIoaXRlbSA9PiBpdGVtLm56Q2hlY2tlZCk7XHJcbiAgICByZXR1cm4gY2hlY2tlZExpc3QubWFwKGl0ZW0gPT4gaXRlbS5uelZhbHVlKTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5uek9uQ2hhbmdlLmVtaXQodGhpcy5vdXRwdXRWYWx1ZSgpKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHJlbmRlcmVyOiBSZW5kZXJlcjIsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1jaGVja2JveC1ncm91cCcpO1xyXG4gIH1cclxufVxyXG4iXX0=