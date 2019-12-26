/**
 * @fileoverview added by tsickle
 * Generated from: nz-cascader-li.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';
var NzCascaderOptionComponent = /** @class */ (function () {
    function NzCascaderOptionComponent(cdr, elementRef, renderer) {
        this.cdr = cdr;
        this.optionTemplate = null;
        this.activated = false;
        this.nzLabelProperty = 'label';
        renderer.addClass(elementRef.nativeElement, 'ant-cascader-menu-item');
    }
    Object.defineProperty(NzCascaderOptionComponent.prototype, "optionLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return this.option[this.nzLabelProperty];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzCascaderOptionComponent.prototype.markForCheck = /**
     * @return {?}
     */
    function () {
        this.cdr.markForCheck();
    };
    NzCascaderOptionComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: '[nz-cascader-option]',
                    exportAs: 'nzCascaderOption',
                    template: "<ng-container *ngIf=\"optionTemplate; else defaultOptionTemplate\">\r\n  <ng-template [ngTemplateOutlet]=\"optionTemplate\"\r\n               [ngTemplateOutletContext]=\"{ $implicit: option, index: columnIndex }\"></ng-template>\r\n</ng-container>\r\n<ng-template #defaultOptionTemplate>\r\n  <span [innerHTML]=\"optionLabel | nzHighlight: highlightText: 'g': 'ant-cascader-menu-item-keyword'\"></span>\r\n</ng-template>\r\n<span *ngIf=\"!option.isLeaf || option.children?.length || option.loading\"\r\n      class=\"ant-cascader-menu-item-expand-icon\">\r\n  <i nz-icon\r\n     [nzType]=\"option.loading ? 'loading' : 'right'\"></i>\r\n</span>\r\n",
                    host: {
                        '[attr.title]': 'option.title || optionLabel',
                        '[class.ant-cascader-menu-item-active]': 'activated',
                        '[class.ant-cascader-menu-item-expand]': '!option.isLeaf',
                        '[class.ant-cascader-menu-item-disabled]': 'option.disabled'
                    }
                }] }
    ];
    /** @nocollapse */
    NzCascaderOptionComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    NzCascaderOptionComponent.propDecorators = {
        optionTemplate: [{ type: Input }],
        option: [{ type: Input }],
        activated: [{ type: Input }],
        highlightText: [{ type: Input }],
        nzLabelProperty: [{ type: Input }],
        columnIndex: [{ type: Input }]
    };
    return NzCascaderOptionComponent;
}());
export { NzCascaderOptionComponent };
if (false) {
    /** @type {?} */
    NzCascaderOptionComponent.prototype.optionTemplate;
    /** @type {?} */
    NzCascaderOptionComponent.prototype.option;
    /** @type {?} */
    NzCascaderOptionComponent.prototype.activated;
    /** @type {?} */
    NzCascaderOptionComponent.prototype.highlightText;
    /** @type {?} */
    NzCascaderOptionComponent.prototype.nzLabelProperty;
    /** @type {?} */
    NzCascaderOptionComponent.prototype.columnIndex;
    /**
     * @type {?}
     * @private
     */
    NzCascaderOptionComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FzY2FkZXItbGkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jYXNjYWRlci8iLCJzb3VyY2VzIjpbIm56LWNhc2NhZGVyLWxpLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxTQUFTLEVBRVQsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBSXZCO0lBcUJFLG1DQUFvQixHQUFzQixFQUFFLFVBQXNCLEVBQUUsUUFBbUI7UUFBbkUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFQakMsbUJBQWMsR0FBeUMsSUFBSSxDQUFDO1FBRTVELGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFbEIsb0JBQWUsR0FBRyxPQUFPLENBQUM7UUFJakMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLHdCQUF3QixDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVELHNCQUFJLGtEQUFXOzs7O1FBQWY7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzNDLENBQUM7OztPQUFBOzs7O0lBRUQsZ0RBQVk7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDOztnQkEvQkYsU0FBUyxTQUFDO29CQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsb3BCQUE4QztvQkFDOUMsSUFBSSxFQUFFO3dCQUNKLGNBQWMsRUFBRSw2QkFBNkI7d0JBQzdDLHVDQUF1QyxFQUFFLFdBQVc7d0JBQ3BELHVDQUF1QyxFQUFFLGdCQUFnQjt3QkFDekQseUNBQXlDLEVBQUUsaUJBQWlCO3FCQUM3RDtpQkFDRjs7OztnQkF2QkMsaUJBQWlCO2dCQUVqQixVQUFVO2dCQUVWLFNBQVM7OztpQ0FxQlIsS0FBSzt5QkFDTCxLQUFLOzRCQUNMLEtBQUs7Z0NBQ0wsS0FBSztrQ0FDTCxLQUFLOzhCQUNMLEtBQUs7O0lBYVIsZ0NBQUM7Q0FBQSxBQWhDRCxJQWdDQztTQW5CWSx5QkFBeUI7OztJQUNwQyxtREFBcUU7O0lBQ3JFLDJDQUFrQzs7SUFDbEMsOENBQTJCOztJQUMzQixrREFBK0I7O0lBQy9CLG9EQUFtQzs7SUFDbkMsZ0RBQTZCOzs7OztJQUVqQix3Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOekNhc2NhZGVyT3B0aW9uIH0gZnJvbSAnLi9uei1jYXNjYWRlci1kZWZpbml0aW9ucyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHNlbGVjdG9yOiAnW256LWNhc2NhZGVyLW9wdGlvbl0nLFxyXG4gIGV4cG9ydEFzOiAnbnpDYXNjYWRlck9wdGlvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LWNhc2NhZGVyLWxpLmNvbXBvbmVudC5odG1sJyxcclxuICBob3N0OiB7XHJcbiAgICAnW2F0dHIudGl0bGVdJzogJ29wdGlvbi50aXRsZSB8fCBvcHRpb25MYWJlbCcsXHJcbiAgICAnW2NsYXNzLmFudC1jYXNjYWRlci1tZW51LWl0ZW0tYWN0aXZlXSc6ICdhY3RpdmF0ZWQnLFxyXG4gICAgJ1tjbGFzcy5hbnQtY2FzY2FkZXItbWVudS1pdGVtLWV4cGFuZF0nOiAnIW9wdGlvbi5pc0xlYWYnLFxyXG4gICAgJ1tjbGFzcy5hbnQtY2FzY2FkZXItbWVudS1pdGVtLWRpc2FibGVkXSc6ICdvcHRpb24uZGlzYWJsZWQnXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpDYXNjYWRlck9wdGlvbkNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgb3B0aW9uVGVtcGxhdGU6IFRlbXBsYXRlUmVmPE56Q2FzY2FkZXJPcHRpb24+IHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgb3B0aW9uOiBOekNhc2NhZGVyT3B0aW9uO1xyXG4gIEBJbnB1dCgpIGFjdGl2YXRlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGhpZ2hsaWdodFRleHQ6IHN0cmluZztcclxuICBASW5wdXQoKSBuekxhYmVsUHJvcGVydHkgPSAnbGFiZWwnO1xyXG4gIEBJbnB1dCgpIGNvbHVtbkluZGV4OiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWNhc2NhZGVyLW1lbnUtaXRlbScpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG9wdGlvbkxhYmVsKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5vcHRpb25bdGhpcy5uekxhYmVsUHJvcGVydHldO1xyXG4gIH1cclxuXHJcbiAgbWFya0ZvckNoZWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==