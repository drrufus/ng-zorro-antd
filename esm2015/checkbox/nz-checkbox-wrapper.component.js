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
export class NzCheckboxWrapperComponent {
    /**
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(renderer, elementRef) {
        this.nzOnChange = new EventEmitter();
        this.checkboxList = [];
        renderer.addClass(elementRef.nativeElement, 'ant-checkbox-group');
    }
    /**
     * @param {?} value
     * @return {?}
     */
    addCheckbox(value) {
        this.checkboxList.push(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    removeCheckbox(value) {
        this.checkboxList.splice(this.checkboxList.indexOf(value), 1);
    }
    /**
     * @return {?}
     */
    outputValue() {
        /** @type {?} */
        const checkedList = this.checkboxList.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item.nzChecked));
        return checkedList.map((/**
         * @param {?} item
         * @return {?}
         */
        item => item.nzValue));
    }
    /**
     * @return {?}
     */
    onChange() {
        this.nzOnChange.emit(this.outputValue());
    }
}
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
NzCheckboxWrapperComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
NzCheckboxWrapperComponent.propDecorators = {
    nzOnChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NzCheckboxWrapperComponent.prototype.nzOnChange;
    /**
     * @type {?}
     * @private
     */
    NzCheckboxWrapperComponent.prototype.checkboxList;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2hlY2tib3gtd3JhcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NoZWNrYm94LyIsInNvdXJjZXMiOlsibnotY2hlY2tib3gtd3JhcHBlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQVl2QixNQUFNLE9BQU8sMEJBQTBCOzs7OztJQXFCckMsWUFBWSxRQUFtQixFQUFFLFVBQXNCO1FBcEJwQyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVksQ0FBQztRQUNyRCxpQkFBWSxHQUEwQixFQUFFLENBQUM7UUFvQi9DLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7Ozs7O0lBbkJELFdBQVcsQ0FBQyxLQUEwQjtRQUNwQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxLQUEwQjtRQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7O0lBRUQsV0FBVzs7Y0FDSCxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFDO1FBQ3BFLE9BQU8sV0FBVyxDQUFDLEdBQUc7Ozs7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUMsQ0FBQztJQUMvQyxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7OztZQTNCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxxQ0FBbUQ7YUFDcEQ7Ozs7WUFiQyxTQUFTO1lBSFQsVUFBVTs7O3lCQWtCVCxNQUFNOzs7O0lBQVAsZ0RBQTZEOzs7OztJQUM3RCxrREFBaUQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56Q2hlY2tib3hDb21wb25lbnQgfSBmcm9tICcuL256LWNoZWNrYm94LmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LWNoZWNrYm94LXdyYXBwZXInLFxyXG4gIGV4cG9ydEFzOiAnbnpDaGVja2JveFdyYXBwZXInLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LWNoZWNrYm94LXdyYXBwZXIuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekNoZWNrYm94V3JhcHBlckNvbXBvbmVudCB7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZ1tdPigpO1xyXG4gIHByaXZhdGUgY2hlY2tib3hMaXN0OiBOekNoZWNrYm94Q29tcG9uZW50W10gPSBbXTtcclxuXHJcbiAgYWRkQ2hlY2tib3godmFsdWU6IE56Q2hlY2tib3hDb21wb25lbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hlY2tib3hMaXN0LnB1c2godmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlQ2hlY2tib3godmFsdWU6IE56Q2hlY2tib3hDb21wb25lbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hlY2tib3hMaXN0LnNwbGljZSh0aGlzLmNoZWNrYm94TGlzdC5pbmRleE9mKHZhbHVlKSwgMSk7XHJcbiAgfVxyXG5cclxuICBvdXRwdXRWYWx1ZSgpOiBzdHJpbmdbXSB7XHJcbiAgICBjb25zdCBjaGVja2VkTGlzdCA9IHRoaXMuY2hlY2tib3hMaXN0LmZpbHRlcihpdGVtID0+IGl0ZW0ubnpDaGVja2VkKTtcclxuICAgIHJldHVybiBjaGVja2VkTGlzdC5tYXAoaXRlbSA9PiBpdGVtLm56VmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2UoKTogdm9pZCB7XHJcbiAgICB0aGlzLm56T25DaGFuZ2UuZW1pdCh0aGlzLm91dHB1dFZhbHVlKCkpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocmVuZGVyZXI6IFJlbmRlcmVyMiwgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWNoZWNrYm94LWdyb3VwJyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==