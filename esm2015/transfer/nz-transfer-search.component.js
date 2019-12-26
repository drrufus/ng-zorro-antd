/**
 * @fileoverview added by tsickle
 * Generated from: nz-transfer-search.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
export class NzTransferSearchComponent {
    // endregion
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
        this.cdr = cdr;
        this.valueChanged = new EventEmitter();
        this.valueClear = new EventEmitter();
    }
    /**
     * @return {?}
     */
    _handle() {
        this.valueChanged.emit(this.value);
    }
    /**
     * @return {?}
     */
    _clear() {
        if (this.disabled) {
            return;
        }
        this.value = '';
        this.valueClear.emit();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.cdr.detectChanges();
    }
}
NzTransferSearchComponent.decorators = [
    { type: Component, args: [{
                selector: '[nz-transfer-search]',
                exportAs: 'nzTransferSearch',
                preserveWhitespaces: false,
                template: "<input [(ngModel)]=\"value\" (ngModelChange)=\"_handle()\" [disabled]=\"disabled\" [placeholder]=\"placeholder\"\r\n  class=\"ant-input ant-transfer-list-search\" [ngClass]=\"{'ant-input-disabled': disabled}\">\r\n<a *ngIf=\"value && value.length > 0; else def\" class=\"ant-transfer-list-search-action\" (click)=\"_clear()\">\r\n  <i nz-icon nzType=\"close-circle\"></i>\r\n</a>\r\n<ng-template #def>\r\n  <span class=\"ant-transfer-list-search-action\"><i nz-icon nzType=\"search\"></i></span>\r\n</ng-template>",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
NzTransferSearchComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
NzTransferSearchComponent.propDecorators = {
    placeholder: [{ type: Input }],
    value: [{ type: Input }],
    disabled: [{ type: Input }],
    valueChanged: [{ type: Output }],
    valueClear: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NzTransferSearchComponent.prototype.placeholder;
    /** @type {?} */
    NzTransferSearchComponent.prototype.value;
    /** @type {?} */
    NzTransferSearchComponent.prototype.disabled;
    /** @type {?} */
    NzTransferSearchComponent.prototype.valueChanged;
    /** @type {?} */
    NzTransferSearchComponent.prototype.valueClear;
    /**
     * @type {?}
     * @private
     */
    NzTransferSearchComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJhbnNmZXItc2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdHJhbnNmZXIvIiwic291cmNlcyI6WyJuei10cmFuc2Zlci1zZWFyY2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFVdkIsTUFBTSxPQUFPLHlCQUF5Qjs7Ozs7SUFZcEMsWUFBb0IsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFMdkIsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQzFDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO0lBSVosQ0FBQzs7OztJQUU5QyxPQUFPO1FBQ0wsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFFRCxNQUFNO1FBQ0osSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7OztZQXBDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsNmdCQUFrRDtnQkFDbEQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBaEJDLGlCQUFpQjs7OzBCQW9CaEIsS0FBSztvQkFDTCxLQUFLO3VCQUNMLEtBQUs7MkJBRUwsTUFBTTt5QkFDTixNQUFNOzs7O0lBTFAsZ0RBQTZCOztJQUM3QiwwQ0FBdUI7O0lBQ3ZCLDZDQUEyQjs7SUFFM0IsaURBQTZEOztJQUM3RCwrQ0FBeUQ7Ozs7O0lBSTdDLHdDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPdXRwdXQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnW256LXRyYW5zZmVyLXNlYXJjaF0nLFxyXG4gIGV4cG9ydEFzOiAnbnpUcmFuc2ZlclNlYXJjaCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXRyYW5zZmVyLXNlYXJjaC5jb21wb25lbnQuaHRtbCcsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpUcmFuc2ZlclNlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgLy8gcmVnaW9uOiBmaWVsZHNcclxuXHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcclxuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgdmFsdWVDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHZhbHVlQ2xlYXIgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIC8vIGVuZHJlZ2lvblxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XHJcblxyXG4gIF9oYW5kbGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLnZhbHVlQ2hhbmdlZC5lbWl0KHRoaXMudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgX2NsZWFyKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy52YWx1ZSA9ICcnO1xyXG4gICAgdGhpcy52YWx1ZUNsZWFyLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxufVxyXG4iXX0=