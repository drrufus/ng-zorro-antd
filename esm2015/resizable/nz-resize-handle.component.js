/**
 * @fileoverview added by tsickle
 * Generated from: nz-resize-handle.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzResizableService } from './nz-resizable.service';
export class NzResizeHandleMouseDownEvent {
    /**
     * @param {?} direction
     * @param {?} mouseEvent
     */
    constructor(direction, mouseEvent) {
        this.direction = direction;
        this.mouseEvent = mouseEvent;
    }
}
if (false) {
    /** @type {?} */
    NzResizeHandleMouseDownEvent.prototype.direction;
    /** @type {?} */
    NzResizeHandleMouseDownEvent.prototype.mouseEvent;
}
export class NzResizeHandleComponent {
    /**
     * @param {?} nzResizableService
     * @param {?} cdr
     */
    constructor(nzResizableService, cdr) {
        this.nzResizableService = nzResizableService;
        this.cdr = cdr;
        this.nzDirection = 'bottomRight';
        this.nzMouseDown = new EventEmitter();
        this.entered = false;
        this.destroy$ = new Subject();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.nzResizableService.mouseEntered$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} entered
         * @return {?}
         */
        entered => {
            this.entered = entered;
            this.cdr.markForCheck();
        }));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMousedown(event) {
        this.nzResizableService.handleMouseDown$.next(new NzResizeHandleMouseDownEvent(this.nzDirection, event));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzResizeHandleComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-resize-handle, [nz-resize-handle]',
                exportAs: 'nzResizeHandle',
                template: "<ng-content></ng-content>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class]': '"nz-resizable-handle nz-resizable-handle-" + nzDirection',
                    '[class.nz-resizable-handle-box-hover]': 'entered',
                    '(mousedown)': 'onMousedown($event)',
                    '(touchstart)': 'onMousedown($event)'
                }
            }] }
];
/** @nocollapse */
NzResizeHandleComponent.ctorParameters = () => [
    { type: NzResizableService },
    { type: ChangeDetectorRef }
];
NzResizeHandleComponent.propDecorators = {
    nzDirection: [{ type: Input }],
    nzMouseDown: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NzResizeHandleComponent.prototype.nzDirection;
    /** @type {?} */
    NzResizeHandleComponent.prototype.nzMouseDown;
    /** @type {?} */
    NzResizeHandleComponent.prototype.entered;
    /**
     * @type {?}
     * @private
     */
    NzResizeHandleComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzResizeHandleComponent.prototype.nzResizableService;
    /**
     * @type {?}
     * @private
     */
    NzResizeHandleComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmVzaXplLWhhbmRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3Jlc2l6YWJsZS8iLCJzb3VyY2VzIjpbIm56LXJlc2l6ZS1oYW5kbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQVk1RCxNQUFNLE9BQU8sNEJBQTRCOzs7OztJQUN2QyxZQUFtQixTQUE0QixFQUFTLFVBQW1DO1FBQXhFLGNBQVMsR0FBVCxTQUFTLENBQW1CO1FBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBeUI7SUFBRyxDQUFDO0NBQ2hHOzs7SUFEYSxpREFBbUM7O0lBQUUsa0RBQTBDOztBQWU3RixNQUFNLE9BQU8sdUJBQXVCOzs7OztJQU9sQyxZQUFvQixrQkFBc0MsRUFBVSxHQUFzQjtRQUF0RSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFOakYsZ0JBQVcsR0FBc0IsYUFBYSxDQUFDO1FBQ3JDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQWdDLENBQUM7UUFFbEYsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNSLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0lBRXNELENBQUM7Ozs7SUFFOUYsUUFBUTtRQUNOLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDdkYsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLEtBQThCO1FBQ3hDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDM0csQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7O1lBbkNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0NBQXNDO2dCQUNoRCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixxQ0FBZ0Q7Z0JBQ2hELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxJQUFJLEVBQUU7b0JBQ0osU0FBUyxFQUFFLDBEQUEwRDtvQkFDckUsdUNBQXVDLEVBQUUsU0FBUztvQkFDbEQsYUFBYSxFQUFFLHFCQUFxQjtvQkFDcEMsY0FBYyxFQUFFLHFCQUFxQjtpQkFDdEM7YUFDRjs7OztZQTNCUSxrQkFBa0I7WUFYekIsaUJBQWlCOzs7MEJBd0NoQixLQUFLOzBCQUNMLE1BQU07Ozs7SUFEUCw4Q0FBd0Q7O0lBQ3hELDhDQUFrRjs7SUFFbEYsMENBQWdCOzs7OztJQUNoQiwyQ0FBdUM7Ozs7O0lBRTNCLHFEQUE4Qzs7Ozs7SUFBRSxzQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE56UmVzaXphYmxlU2VydmljZSB9IGZyb20gJy4vbnotcmVzaXphYmxlLnNlcnZpY2UnO1xuXG5leHBvcnQgdHlwZSBOelJlc2l6ZURpcmVjdGlvbiA9XG4gIHwgJ3RvcCdcbiAgfCAncmlnaHQnXG4gIHwgJ2JvdHRvbSdcbiAgfCAnbGVmdCdcbiAgfCAndG9wUmlnaHQnXG4gIHwgJ2JvdHRvbVJpZ2h0J1xuICB8ICdib3R0b21MZWZ0J1xuICB8ICd0b3BMZWZ0JztcblxuZXhwb3J0IGNsYXNzIE56UmVzaXplSGFuZGxlTW91c2VEb3duRXZlbnQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlyZWN0aW9uOiBOelJlc2l6ZURpcmVjdGlvbiwgcHVibGljIG1vdXNlRXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KSB7fVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1yZXNpemUtaGFuZGxlLCBbbnotcmVzaXplLWhhbmRsZV0nLFxuICBleHBvcnRBczogJ256UmVzaXplSGFuZGxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL256LXJlc2l6ZS1oYW5kbGUuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3NdJzogJ1wibnotcmVzaXphYmxlLWhhbmRsZSBuei1yZXNpemFibGUtaGFuZGxlLVwiICsgbnpEaXJlY3Rpb24nLFxuICAgICdbY2xhc3MubnotcmVzaXphYmxlLWhhbmRsZS1ib3gtaG92ZXJdJzogJ2VudGVyZWQnLFxuICAgICcobW91c2Vkb3duKSc6ICdvbk1vdXNlZG93bigkZXZlbnQpJyxcbiAgICAnKHRvdWNoc3RhcnQpJzogJ29uTW91c2Vkb3duKCRldmVudCknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpSZXNpemVIYW5kbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIG56RGlyZWN0aW9uOiBOelJlc2l6ZURpcmVjdGlvbiA9ICdib3R0b21SaWdodCc7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuek1vdXNlRG93biA9IG5ldyBFdmVudEVtaXR0ZXI8TnpSZXNpemVIYW5kbGVNb3VzZURvd25FdmVudD4oKTtcblxuICBlbnRlcmVkID0gZmFsc2U7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbnpSZXNpemFibGVTZXJ2aWNlOiBOelJlc2l6YWJsZVNlcnZpY2UsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm56UmVzaXphYmxlU2VydmljZS5tb3VzZUVudGVyZWQkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoZW50ZXJlZCA9PiB7XG4gICAgICB0aGlzLmVudGVyZWQgPSBlbnRlcmVkO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBvbk1vdXNlZG93bihldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLm56UmVzaXphYmxlU2VydmljZS5oYW5kbGVNb3VzZURvd24kLm5leHQobmV3IE56UmVzaXplSGFuZGxlTW91c2VEb3duRXZlbnQodGhpcy5uekRpcmVjdGlvbiwgZXZlbnQpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19