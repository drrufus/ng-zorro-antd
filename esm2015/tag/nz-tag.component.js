/**
 * @fileoverview added by tsickle
 * Generated from: nz-tag.component.ts
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
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewEncapsulation } from '@angular/core';
import { fadeMotion, warnDeprecation, InputBoolean, NzUpdateHostClassService } from 'ng-zorro-antd/core';
export class NzTagComponent {
    /**
     * @param {?} renderer
     * @param {?} elementRef
     * @param {?} nzUpdateHostClassService
     */
    constructor(renderer, elementRef, nzUpdateHostClassService) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.presetColor = false;
        this.nzMode = 'default';
        this.nzChecked = false;
        this.nzNoAnimation = false;
        this.nzAfterClose = new EventEmitter();
        this.nzOnClose = new EventEmitter();
        this.nzCheckedChange = new EventEmitter();
    }
    /**
     * @private
     * @param {?=} color
     * @return {?}
     */
    isPresetColor(color) {
        if (!color) {
            return false;
        }
        return /^(pink|red|yellow|orange|cyan|green|blue|purple|geekblue|magenta|volcano|gold|lime)(-inverse)?$/.test(color);
    }
    /**
     * @private
     * @return {?}
     */
    updateClassMap() {
        this.presetColor = this.isPresetColor(this.nzColor);
        /** @type {?} */
        const prefix = 'ant-tag';
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, {
            [`${prefix}`]: true,
            [`${prefix}-has-color`]: this.nzColor && !this.presetColor,
            [`${prefix}-${this.nzColor}`]: this.presetColor,
            [`${prefix}-checkable`]: this.nzMode === 'checkable',
            [`${prefix}-checkable-checked`]: this.nzChecked
        });
    }
    /**
     * @return {?}
     */
    updateCheckedStatus() {
        if (this.nzMode === 'checkable') {
            this.nzChecked = !this.nzChecked;
            this.nzCheckedChange.emit(this.nzChecked);
            this.updateClassMap();
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    closeTag(e) {
        this.nzOnClose.emit(e);
        if (!e.defaultPrevented) {
            this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    afterAnimation(e) {
        if (e.toState === 'void') {
            this.nzAfterClose.emit();
            if (this.nzAfterClose.observers.length) {
                warnDeprecation(`'(nzAfterClose)' Output is going to be removed in 9.0.0. Please use '(nzOnClose)' instead.`);
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updateClassMap();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.updateClassMap();
    }
}
NzTagComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-tag',
                exportAs: 'nzTag',
                preserveWhitespaces: false,
                providers: [NzUpdateHostClassService],
                animations: [fadeMotion],
                template: "<ng-content></ng-content>\r\n<i nz-icon nzType=\"close\" *ngIf=\"nzMode==='closeable'\" tabindex=\"-1\" (click)=\"closeTag($event)\"></i>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[@fadeMotion]': '',
                    '[@.disabled]': 'nzNoAnimation',
                    '(@fadeMotion.done)': 'afterAnimation($event)',
                    '(click)': 'updateCheckedStatus()',
                    '[style.background-color]': 'presetColor? null : nzColor'
                }
            }] }
];
/** @nocollapse */
NzTagComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: NzUpdateHostClassService }
];
NzTagComponent.propDecorators = {
    nzMode: [{ type: Input }],
    nzColor: [{ type: Input }],
    nzChecked: [{ type: Input }],
    nzNoAnimation: [{ type: Input }],
    nzAfterClose: [{ type: Output }],
    nzOnClose: [{ type: Output }],
    nzCheckedChange: [{ type: Output }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTagComponent.prototype, "nzChecked", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTagComponent.prototype, "nzNoAnimation", void 0);
if (false) {
    /** @type {?} */
    NzTagComponent.prototype.presetColor;
    /** @type {?} */
    NzTagComponent.prototype.nzMode;
    /** @type {?} */
    NzTagComponent.prototype.nzColor;
    /** @type {?} */
    NzTagComponent.prototype.nzChecked;
    /** @type {?} */
    NzTagComponent.prototype.nzNoAnimation;
    /** @type {?} */
    NzTagComponent.prototype.nzAfterClose;
    /** @type {?} */
    NzTagComponent.prototype.nzOnClose;
    /** @type {?} */
    NzTagComponent.prototype.nzCheckedChange;
    /**
     * @type {?}
     * @private
     */
    NzTagComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzTagComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzTagComponent.prototype.nzUpdateHostClassService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdGFnLyIsInNvdXJjZXMiOlsibnotdGFnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBU0EsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFtQnpHLE1BQU0sT0FBTyxjQUFjOzs7Ozs7SUF1RHpCLFlBQ1UsUUFBbUIsRUFDbkIsVUFBc0IsRUFDdEIsd0JBQWtEO1FBRmxELGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0Qiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBekQ1RCxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNYLFdBQU0sR0FBMEMsU0FBUyxDQUFDO1FBRTFDLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDNUIsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQ3hDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBQzNDLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQW1EOUQsQ0FBQzs7Ozs7O0lBakRJLGFBQWEsQ0FBQyxLQUFjO1FBQ2xDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsT0FBTyxpR0FBaUcsQ0FBQyxJQUFJLENBQzNHLEtBQUssQ0FDTixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFTyxjQUFjO1FBQ3BCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7O2NBQzlDLE1BQU0sR0FBRyxTQUFTO1FBQ3hCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7WUFDM0UsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSTtZQUNuQixDQUFDLEdBQUcsTUFBTSxZQUFZLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVc7WUFDMUQsQ0FBQyxHQUFHLE1BQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVztZQUMvQyxDQUFDLEdBQUcsTUFBTSxZQUFZLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxLQUFLLFdBQVc7WUFDcEQsQ0FBQyxHQUFHLE1BQU0sb0JBQW9CLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUztTQUNoRCxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsbUJBQW1CO1FBQ2pCLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxXQUFXLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDakMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN2QjtJQUNILENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLENBQWE7UUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRTtZQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDbkg7SUFDSCxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxDQUFpQjtRQUM5QixJQUFJLENBQUMsQ0FBQyxPQUFPLEtBQUssTUFBTSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDekIsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3RDLGVBQWUsQ0FBQyw0RkFBNEYsQ0FBQyxDQUFDO2FBQy9HO1NBQ0Y7SUFDSCxDQUFDOzs7O0lBUUQsUUFBUTtRQUNOLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7WUFwRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxRQUFRO2dCQUNsQixRQUFRLEVBQUUsT0FBTztnQkFDakIsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7Z0JBQ3JDLFVBQVUsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFDeEIseUpBQXNDO2dCQUN0QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLElBQUksRUFBRTtvQkFDSixlQUFlLEVBQUUsRUFBRTtvQkFDbkIsY0FBYyxFQUFFLGVBQWU7b0JBQy9CLG9CQUFvQixFQUFFLHdCQUF3QjtvQkFDOUMsU0FBUyxFQUFFLHVCQUF1QjtvQkFDbEMsMEJBQTBCLEVBQUUsNkJBQTZCO2lCQUMxRDthQUNGOzs7O1lBdEJDLFNBQVM7WUFOVCxVQUFVO1lBVXdDLHdCQUF3Qjs7O3FCQXFCekUsS0FBSztzQkFDTCxLQUFLO3dCQUNMLEtBQUs7NEJBQ0wsS0FBSzsyQkFDTCxNQUFNO3dCQUNOLE1BQU07OEJBQ04sTUFBTTs7QUFKa0I7SUFBZixZQUFZLEVBQUU7O2lEQUFtQjtBQUNsQjtJQUFmLFlBQVksRUFBRTs7cURBQXVCOzs7SUFKL0MscUNBQW9COztJQUNwQixnQ0FBbUU7O0lBQ25FLGlDQUF5Qjs7SUFDekIsbUNBQTJDOztJQUMzQyx1Q0FBK0M7O0lBQy9DLHNDQUEyRDs7SUFDM0QsbUNBQThEOztJQUM5RCx5Q0FBaUU7Ozs7O0lBZ0QvRCxrQ0FBMkI7Ozs7O0lBQzNCLG9DQUE4Qjs7Ozs7SUFDOUIsa0RBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBBbmltYXRpb25FdmVudCB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGZhZGVNb3Rpb24sIHdhcm5EZXByZWNhdGlvbiwgSW5wdXRCb29sZWFuLCBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei10YWcnLFxyXG4gIGV4cG9ydEFzOiAnbnpUYWcnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHByb3ZpZGVyczogW056VXBkYXRlSG9zdENsYXNzU2VydmljZV0sXHJcbiAgYW5pbWF0aW9uczogW2ZhZGVNb3Rpb25dLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei10YWcuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tAZmFkZU1vdGlvbl0nOiAnJyxcclxuICAgICdbQC5kaXNhYmxlZF0nOiAnbnpOb0FuaW1hdGlvbicsXHJcbiAgICAnKEBmYWRlTW90aW9uLmRvbmUpJzogJ2FmdGVyQW5pbWF0aW9uKCRldmVudCknLFxyXG4gICAgJyhjbGljayknOiAndXBkYXRlQ2hlY2tlZFN0YXR1cygpJyxcclxuICAgICdbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl0nOiAncHJlc2V0Q29sb3I/IG51bGwgOiBuekNvbG9yJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56VGFnQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIHByZXNldENvbG9yID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpNb2RlOiAnZGVmYXVsdCcgfCAnY2xvc2VhYmxlJyB8ICdjaGVja2FibGUnID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIG56Q29sb3I6IHN0cmluZztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDaGVja2VkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Tm9BbmltYXRpb24gPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpBZnRlckNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2hlY2tlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgcHJpdmF0ZSBpc1ByZXNldENvbG9yKGNvbG9yPzogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIWNvbG9yKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiAvXihwaW5rfHJlZHx5ZWxsb3d8b3JhbmdlfGN5YW58Z3JlZW58Ymx1ZXxwdXJwbGV8Z2Vla2JsdWV8bWFnZW50YXx2b2xjYW5vfGdvbGR8bGltZSkoLWludmVyc2UpPyQvLnRlc3QoXHJcbiAgICAgIGNvbG9yXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVDbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIHRoaXMucHJlc2V0Q29sb3IgPSB0aGlzLmlzUHJlc2V0Q29sb3IodGhpcy5uekNvbG9yKTtcclxuICAgIGNvbnN0IHByZWZpeCA9ICdhbnQtdGFnJztcclxuICAgIHRoaXMubnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwge1xyXG4gICAgICBbYCR7cHJlZml4fWBdOiB0cnVlLFxyXG4gICAgICBbYCR7cHJlZml4fS1oYXMtY29sb3JgXTogdGhpcy5uekNvbG9yICYmICF0aGlzLnByZXNldENvbG9yLFxyXG4gICAgICBbYCR7cHJlZml4fS0ke3RoaXMubnpDb2xvcn1gXTogdGhpcy5wcmVzZXRDb2xvcixcclxuICAgICAgW2Ake3ByZWZpeH0tY2hlY2thYmxlYF06IHRoaXMubnpNb2RlID09PSAnY2hlY2thYmxlJyxcclxuICAgICAgW2Ake3ByZWZpeH0tY2hlY2thYmxlLWNoZWNrZWRgXTogdGhpcy5uekNoZWNrZWRcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ2hlY2tlZFN0YXR1cygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56TW9kZSA9PT0gJ2NoZWNrYWJsZScpIHtcclxuICAgICAgdGhpcy5uekNoZWNrZWQgPSAhdGhpcy5uekNoZWNrZWQ7XHJcbiAgICAgIHRoaXMubnpDaGVja2VkQ2hhbmdlLmVtaXQodGhpcy5uekNoZWNrZWQpO1xyXG4gICAgICB0aGlzLnVwZGF0ZUNsYXNzTWFwKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbG9zZVRhZyhlOiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLm56T25DbG9zZS5lbWl0KGUpO1xyXG4gICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLnJlbmRlcmVyLnBhcmVudE5vZGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZnRlckFuaW1hdGlvbihlOiBBbmltYXRpb25FdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKGUudG9TdGF0ZSA9PT0gJ3ZvaWQnKSB7XHJcbiAgICAgIHRoaXMubnpBZnRlckNsb3NlLmVtaXQoKTtcclxuICAgICAgaWYgKHRoaXMubnpBZnRlckNsb3NlLm9ic2VydmVycy5sZW5ndGgpIHtcclxuICAgICAgICB3YXJuRGVwcmVjYXRpb24oYCcobnpBZnRlckNsb3NlKScgT3V0cHV0IGlzIGdvaW5nIHRvIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFBsZWFzZSB1c2UgJyhuek9uQ2xvc2UpJyBpbnN0ZWFkLmApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGVDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZUNsYXNzTWFwKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==