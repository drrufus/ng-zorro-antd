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
import * as i0 from "@angular/core";
import * as i1 from "./nz-resizable.service";
const _c0 = ["*"];
export class NzResizeHandleMouseDownEvent {
    constructor(direction, mouseEvent) {
        this.direction = direction;
        this.mouseEvent = mouseEvent;
    }
}
export class NzResizeHandleComponent {
    constructor(nzResizableService, cdr) {
        this.nzResizableService = nzResizableService;
        this.cdr = cdr;
        this.nzDirection = 'bottomRight';
        this.nzMouseDown = new EventEmitter();
        this.entered = false;
        this.destroy$ = new Subject();
    }
    ngOnInit() {
        this.nzResizableService.mouseEntered$.pipe(takeUntil(this.destroy$)).subscribe(entered => {
            this.entered = entered;
            this.cdr.markForCheck();
        });
    }
    onMousedown(event) {
        this.nzResizableService.handleMouseDown$.next(new NzResizeHandleMouseDownEvent(this.nzDirection, event));
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
/** @nocollapse */ NzResizeHandleComponent.ɵfac = function NzResizeHandleComponent_Factory(t) { return new (t || NzResizeHandleComponent)(i0.ɵɵdirectiveInject(i1.NzResizableService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
/** @nocollapse */ NzResizeHandleComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzResizeHandleComponent, selectors: [["nz-resize-handle"], ["", "nz-resize-handle", ""]], hostBindings: function NzResizeHandleComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        i0.ɵɵallocHostVars(3);
        i0.ɵɵlistener("mousedown", function NzResizeHandleComponent_mousedown_HostBindingHandler($event) { return ctx.onMousedown($event); })("touchstart", function NzResizeHandleComponent_touchstart_HostBindingHandler($event) { return ctx.onMousedown($event); });
    } if (rf & 2) {
        i0.ɵɵclassMap("nz-resizable-handle nz-resizable-handle-" + ctx.nzDirection);
        i0.ɵɵclassProp("nz-resizable-handle-box-hover", ctx.entered);
    } }, inputs: { nzDirection: "nzDirection" }, outputs: { nzMouseDown: "nzMouseDown" }, exportAs: ["nzResizeHandle"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzResizeHandleComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzResizeHandleComponent, [{
        type: Component,
        args: [{
                selector: 'nz-resize-handle, [nz-resize-handle]',
                exportAs: 'nzResizeHandle',
                templateUrl: './nz-resize-handle.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class]': '"nz-resizable-handle nz-resizable-handle-" + nzDirection',
                    '[class.nz-resizable-handle-box-hover]': 'entered',
                    '(mousedown)': 'onMousedown($event)',
                    '(touchstart)': 'onMousedown($event)'
                }
            }]
    }], function () { return [{ type: i1.NzResizableService }, { type: i0.ChangeDetectorRef }]; }, { nzDirection: [{
            type: Input
        }], nzMouseDown: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmVzaXplLWhhbmRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3Jlc2l6YWJsZS8iLCJzb3VyY2VzIjpbIm56LXJlc2l6ZS1oYW5kbGUuY29tcG9uZW50LnRzIiwibnotcmVzaXplLWhhbmRsZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0SSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUk1RCxNQUFNLE9BQU8sNEJBQTRCO0lBQ3ZDLFlBQW1CLFNBQTRCLEVBQVMsVUFBbUM7UUFBeEUsY0FBUyxHQUFULFNBQVMsQ0FBbUI7UUFBUyxlQUFVLEdBQVYsVUFBVSxDQUF5QjtJQUFHLENBQUM7Q0FDaEc7QUFjRCxNQUFNLE9BQU8sdUJBQXVCO0lBT2xDLFlBQW9CLGtCQUFzQyxFQUFVLEdBQXNCO1FBQXRFLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQU5qRixnQkFBVyxHQUFzQixhQUFhLENBQUM7UUFDckMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBZ0MsQ0FBQztRQUVsRixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ1IsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7SUFFc0QsQ0FBQztJQUU5RixRQUFRO1FBQ04sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUN2RixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUE4QjtRQUN4QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksNEJBQTRCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzNHLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7OzhGQXZCVSx1QkFBdUI7NERBQXZCLHVCQUF1Qjs7Ozs7Ozs7UUNoQ3BDLGtCQUFZOztrRERnQ0MsdUJBQXVCO2NBWm5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsc0NBQXNDO2dCQUNoRCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixXQUFXLEVBQUUsbUNBQW1DO2dCQUNoRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsSUFBSSxFQUFFO29CQUNKLFNBQVMsRUFBRSwwREFBMEQ7b0JBQ3JFLHVDQUF1QyxFQUFFLFNBQVM7b0JBQ2xELGFBQWEsRUFBRSxxQkFBcUI7b0JBQ3BDLGNBQWMsRUFBRSxxQkFBcUI7aUJBQ3RDO2FBQ0Y7O2tCQUVFLEtBQUs7O2tCQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgTnpSZXNpemFibGVTZXJ2aWNlIH0gZnJvbSAnLi9uei1yZXNpemFibGUuc2VydmljZSc7XHJcblxyXG5leHBvcnQgdHlwZSBOelJlc2l6ZURpcmVjdGlvbiA9ICd0b3AnIHwgJ3JpZ2h0JyB8ICdib3R0b20nIHwgJ2xlZnQnIHwgJ3RvcFJpZ2h0JyB8ICdib3R0b21SaWdodCcgfCAnYm90dG9tTGVmdCcgfCAndG9wTGVmdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTnpSZXNpemVIYW5kbGVNb3VzZURvd25FdmVudCB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIGRpcmVjdGlvbjogTnpSZXNpemVEaXJlY3Rpb24sIHB1YmxpYyBtb3VzZUV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCkge31cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei1yZXNpemUtaGFuZGxlLCBbbnotcmVzaXplLWhhbmRsZV0nLFxyXG4gIGV4cG9ydEFzOiAnbnpSZXNpemVIYW5kbGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1yZXNpemUtaGFuZGxlLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzXSc6ICdcIm56LXJlc2l6YWJsZS1oYW5kbGUgbnotcmVzaXphYmxlLWhhbmRsZS1cIiArIG56RGlyZWN0aW9uJyxcclxuICAgICdbY2xhc3MubnotcmVzaXphYmxlLWhhbmRsZS1ib3gtaG92ZXJdJzogJ2VudGVyZWQnLFxyXG4gICAgJyhtb3VzZWRvd24pJzogJ29uTW91c2Vkb3duKCRldmVudCknLFxyXG4gICAgJyh0b3VjaHN0YXJ0KSc6ICdvbk1vdXNlZG93bigkZXZlbnQpJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56UmVzaXplSGFuZGxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIG56RGlyZWN0aW9uOiBOelJlc2l6ZURpcmVjdGlvbiA9ICdib3R0b21SaWdodCc7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56TW91c2VEb3duID0gbmV3IEV2ZW50RW1pdHRlcjxOelJlc2l6ZUhhbmRsZU1vdXNlRG93bkV2ZW50PigpO1xyXG5cclxuICBlbnRlcmVkID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbnpSZXNpemFibGVTZXJ2aWNlOiBOelJlc2l6YWJsZVNlcnZpY2UsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm56UmVzaXphYmxlU2VydmljZS5tb3VzZUVudGVyZWQkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoZW50ZXJlZCA9PiB7XHJcbiAgICAgIHRoaXMuZW50ZXJlZCA9IGVudGVyZWQ7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvbk1vdXNlZG93bihldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMubnpSZXNpemFibGVTZXJ2aWNlLmhhbmRsZU1vdXNlRG93biQubmV4dChuZXcgTnpSZXNpemVIYW5kbGVNb3VzZURvd25FdmVudCh0aGlzLm56RGlyZWN0aW9uLCBldmVudCkpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcbn1cclxuIiwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4iXX0=