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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmVzaXplLWhhbmRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3Jlc2l6YWJsZS8iLCJzb3VyY2VzIjpbIm56LXJlc2l6ZS1oYW5kbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQVk1RCxNQUFNLE9BQU8sNEJBQTRCOzs7OztJQUN2QyxZQUFtQixTQUE0QixFQUFTLFVBQW1DO1FBQXhFLGNBQVMsR0FBVCxTQUFTLENBQW1CO1FBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBeUI7SUFBRyxDQUFDO0NBQ2hHOzs7SUFEYSxpREFBbUM7O0lBQUUsa0RBQTBDOztBQWU3RixNQUFNLE9BQU8sdUJBQXVCOzs7OztJQU9sQyxZQUFvQixrQkFBc0MsRUFBVSxHQUFzQjtRQUF0RSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFOakYsZ0JBQVcsR0FBc0IsYUFBYSxDQUFDO1FBQ3JDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQWdDLENBQUM7UUFFbEYsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNSLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0lBRXNELENBQUM7Ozs7SUFFOUYsUUFBUTtRQUNOLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDdkYsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLEtBQThCO1FBQ3hDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDM0csQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7O1lBbkNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0NBQXNDO2dCQUNoRCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixxQ0FBZ0Q7Z0JBQ2hELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxJQUFJLEVBQUU7b0JBQ0osU0FBUyxFQUFFLDBEQUEwRDtvQkFDckUsdUNBQXVDLEVBQUUsU0FBUztvQkFDbEQsYUFBYSxFQUFFLHFCQUFxQjtvQkFDcEMsY0FBYyxFQUFFLHFCQUFxQjtpQkFDdEM7YUFDRjs7OztZQTNCUSxrQkFBa0I7WUFYekIsaUJBQWlCOzs7MEJBd0NoQixLQUFLOzBCQUNMLE1BQU07Ozs7SUFEUCw4Q0FBd0Q7O0lBQ3hELDhDQUFrRjs7SUFFbEYsMENBQWdCOzs7OztJQUNoQiwyQ0FBdUM7Ozs7O0lBRTNCLHFEQUE4Qzs7Ozs7SUFBRSxzQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IE56UmVzaXphYmxlU2VydmljZSB9IGZyb20gJy4vbnotcmVzaXphYmxlLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IHR5cGUgTnpSZXNpemVEaXJlY3Rpb24gPVxyXG4gIHwgJ3RvcCdcclxuICB8ICdyaWdodCdcclxuICB8ICdib3R0b20nXHJcbiAgfCAnbGVmdCdcclxuICB8ICd0b3BSaWdodCdcclxuICB8ICdib3R0b21SaWdodCdcclxuICB8ICdib3R0b21MZWZ0J1xyXG4gIHwgJ3RvcExlZnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE56UmVzaXplSGFuZGxlTW91c2VEb3duRXZlbnQge1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaXJlY3Rpb246IE56UmVzaXplRGlyZWN0aW9uLCBwdWJsaWMgbW91c2VFdmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpIHt9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotcmVzaXplLWhhbmRsZSwgW256LXJlc2l6ZS1oYW5kbGVdJyxcclxuICBleHBvcnRBczogJ256UmVzaXplSGFuZGxlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotcmVzaXplLWhhbmRsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzc10nOiAnXCJuei1yZXNpemFibGUtaGFuZGxlIG56LXJlc2l6YWJsZS1oYW5kbGUtXCIgKyBuekRpcmVjdGlvbicsXHJcbiAgICAnW2NsYXNzLm56LXJlc2l6YWJsZS1oYW5kbGUtYm94LWhvdmVyXSc6ICdlbnRlcmVkJyxcclxuICAgICcobW91c2Vkb3duKSc6ICdvbk1vdXNlZG93bigkZXZlbnQpJyxcclxuICAgICcodG91Y2hzdGFydCknOiAnb25Nb3VzZWRvd24oJGV2ZW50KSdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelJlc2l6ZUhhbmRsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBuekRpcmVjdGlvbjogTnpSZXNpemVEaXJlY3Rpb24gPSAnYm90dG9tUmlnaHQnO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek1vdXNlRG93biA9IG5ldyBFdmVudEVtaXR0ZXI8TnpSZXNpemVIYW5kbGVNb3VzZURvd25FdmVudD4oKTtcclxuXHJcbiAgZW50ZXJlZCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG56UmVzaXphYmxlU2VydmljZTogTnpSZXNpemFibGVTZXJ2aWNlLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5uelJlc2l6YWJsZVNlcnZpY2UubW91c2VFbnRlcmVkJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKGVudGVyZWQgPT4ge1xyXG4gICAgICB0aGlzLmVudGVyZWQgPSBlbnRlcmVkO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25Nb3VzZWRvd24oZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLm56UmVzaXphYmxlU2VydmljZS5oYW5kbGVNb3VzZURvd24kLm5leHQobmV3IE56UmVzaXplSGFuZGxlTW91c2VEb3duRXZlbnQodGhpcy5uekRpcmVjdGlvbiwgZXZlbnQpKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==