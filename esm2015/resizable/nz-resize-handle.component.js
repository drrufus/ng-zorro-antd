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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzResizableService } from './nz-resizable.service';
import * as ɵngcc0 from '@angular/core';

const _c0 = ["*"];
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
NzResizeHandleComponent.ɵfac = function NzResizeHandleComponent_Factory(t) { return new (t || NzResizeHandleComponent)(ɵngcc0.ɵɵdirectiveInject(NzResizableService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
NzResizeHandleComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzResizeHandleComponent, selectors: [["nz-resize-handle"], ["", "nz-resize-handle", ""]], hostVars: 4, hostBindings: function NzResizeHandleComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("mousedown", function NzResizeHandleComponent_mousedown_HostBindingHandler($event) { return ctx.onMousedown($event); })("touchstart", function NzResizeHandleComponent_touchstart_HostBindingHandler($event) { return ctx.onMousedown($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap("nz-resizable-handle nz-resizable-handle-" + ctx.nzDirection);
        ɵngcc0.ɵɵclassProp("nz-resizable-handle-box-hover", ctx.entered);
    } }, inputs: { nzDirection: "nzDirection" }, outputs: { nzMouseDown: "nzMouseDown" }, exportAs: ["nzResizeHandle"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzResizeHandleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NzResizeHandleComponent.ctorParameters = () => [
    { type: NzResizableService },
    { type: ChangeDetectorRef }
];
NzResizeHandleComponent.propDecorators = {
    nzDirection: [{ type: Input }],
    nzMouseDown: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzResizeHandleComponent, [{
        type: Component,
        args: [{
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
            }]
    }], function () { return [{ type: NzResizableService }, { type: ɵngcc0.ChangeDetectorRef }]; }, { nzDirection: [{
            type: Input
        }], nzMouseDown: [{
            type: Output
        }] }); })();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmVzaXplLWhhbmRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIm5nOi9uZy16b3Jyby1hbnRkL3Jlc2l6YWJsZS9uei1yZXNpemUtaGFuZGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQVk1RCxNQUFNLE9BQU8sNEJBQTRCOzs7OztJQUN2QyxZQUFtQixTQUE0QixFQUFTLFVBQW1DO1FBQXhFLGNBQVMsR0FBVCxTQUFTLENBQW1CO1FBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBeUI7SUFBRyxDQUFDO0NBQ2hHOzs7SUFEYSxpREFBbUM7O0lBQUUsa0RBQTBDOztBQWU3RixNQUFNLE9BQU8sdUJBQXVCOzs7OztJQU9sQyxZQUFvQixrQkFBc0MsRUFBVSxHQUFzQjtRQUF0RSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFOakYsZ0JBQVcsR0FBc0IsYUFBYSxDQUFDO1FBQ3JDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQWdDLENBQUM7UUFFbEYsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNSLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0lBRXNELENBQUM7Ozs7SUFFOUYsUUFBUTtRQUNOLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDdkYsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLEtBQThCO1FBQ3hDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDM0csQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Ozs7Ozs7Ozs7Q0FDRixnREF4Qkc7R0FaSCxTQUFTO0VBQUMsa0JBQ1QsUUFBUSxFQUFFO21CQUFzQyxQQWpCekMsa0JBQWtCO0dBa0J6QixRQUFRLEVBQUUsZ0JBQWdCLGpCQTdCMUIsaUJBQWlCOztZQThCakI7TUFBZ0Qsa0JBQ2hELEVBU0MsS0FBSztHQVRTLEVBQUUsdUJBQXVCLENBQUMsTUFBTSxUQVU5QyxNQUFNOztjQVRQLElBQUksRUFBRSxzQkFDSixTQUFTLEVBQUU7O0lBQTBEO1NBQ3JFLHVDQUF1QyxFQUFFLFNBQVM7ZUFDbEQsYUFBYSxFQUFFO09BQXFCLHNCQUNwQyxjQUFjLEVBQUU7V0FBcUIsa0JBQ3RDLGNBQ0Y7Ozs7Ozs7Ozs7OztvQkFHYzs7O0lBRGIsOENBQXdEOztJQUN4RCw4Q0FBa0Y7O0lBRWxGLDBDQUFnQjs7Ozs7SUFDaEIsMkNBQXVDOzs7OztJQUUzQixxREFBOEM7Ozs7O0lBQUUsc0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBOelJlc2l6YWJsZVNlcnZpY2UgfSBmcm9tICcuL256LXJlc2l6YWJsZS5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCB0eXBlIE56UmVzaXplRGlyZWN0aW9uID1cclxuICB8ICd0b3AnXHJcbiAgfCAncmlnaHQnXHJcbiAgfCAnYm90dG9tJ1xyXG4gIHwgJ2xlZnQnXHJcbiAgfCAndG9wUmlnaHQnXHJcbiAgfCAnYm90dG9tUmlnaHQnXHJcbiAgfCAnYm90dG9tTGVmdCdcclxuICB8ICd0b3BMZWZ0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBOelJlc2l6ZUhhbmRsZU1vdXNlRG93bkV2ZW50IHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlyZWN0aW9uOiBOelJlc2l6ZURpcmVjdGlvbiwgcHVibGljIG1vdXNlRXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KSB7fVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LXJlc2l6ZS1oYW5kbGUsIFtuei1yZXNpemUtaGFuZGxlXScsXHJcbiAgZXhwb3J0QXM6ICduelJlc2l6ZUhhbmRsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXJlc2l6ZS1oYW5kbGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3NdJzogJ1wibnotcmVzaXphYmxlLWhhbmRsZSBuei1yZXNpemFibGUtaGFuZGxlLVwiICsgbnpEaXJlY3Rpb24nLFxyXG4gICAgJ1tjbGFzcy5uei1yZXNpemFibGUtaGFuZGxlLWJveC1ob3Zlcl0nOiAnZW50ZXJlZCcsXHJcbiAgICAnKG1vdXNlZG93biknOiAnb25Nb3VzZWRvd24oJGV2ZW50KScsXHJcbiAgICAnKHRvdWNoc3RhcnQpJzogJ29uTW91c2Vkb3duKCRldmVudCknXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpSZXNpemVIYW5kbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgbnpEaXJlY3Rpb246IE56UmVzaXplRGlyZWN0aW9uID0gJ2JvdHRvbVJpZ2h0JztcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpNb3VzZURvd24gPSBuZXcgRXZlbnRFbWl0dGVyPE56UmVzaXplSGFuZGxlTW91c2VEb3duRXZlbnQ+KCk7XHJcblxyXG4gIGVudGVyZWQgPSBmYWxzZTtcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuelJlc2l6YWJsZVNlcnZpY2U6IE56UmVzaXphYmxlU2VydmljZSwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMubnpSZXNpemFibGVTZXJ2aWNlLm1vdXNlRW50ZXJlZCQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShlbnRlcmVkID0+IHtcclxuICAgICAgdGhpcy5lbnRlcmVkID0gZW50ZXJlZDtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uTW91c2Vkb3duKGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5uelJlc2l6YWJsZVNlcnZpY2UuaGFuZGxlTW91c2VEb3duJC5uZXh0KG5ldyBOelJlc2l6ZUhhbmRsZU1vdXNlRG93bkV2ZW50KHRoaXMubnpEaXJlY3Rpb24sIGV2ZW50KSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=