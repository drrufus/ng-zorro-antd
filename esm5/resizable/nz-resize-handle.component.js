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
var NzResizeHandleMouseDownEvent = /** @class */ (function () {
    function NzResizeHandleMouseDownEvent(direction, mouseEvent) {
        this.direction = direction;
        this.mouseEvent = mouseEvent;
    }
    return NzResizeHandleMouseDownEvent;
}());
export { NzResizeHandleMouseDownEvent };
if (false) {
    /** @type {?} */
    NzResizeHandleMouseDownEvent.prototype.direction;
    /** @type {?} */
    NzResizeHandleMouseDownEvent.prototype.mouseEvent;
}
var NzResizeHandleComponent = /** @class */ (function () {
    function NzResizeHandleComponent(nzResizableService, cdr) {
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
    NzResizeHandleComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.nzResizableService.mouseEntered$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} entered
         * @return {?}
         */
        function (entered) {
            _this.entered = entered;
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzResizeHandleComponent.prototype.onMousedown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.nzResizableService.handleMouseDown$.next(new NzResizeHandleMouseDownEvent(this.nzDirection, event));
    };
    /**
     * @return {?}
     */
    NzResizeHandleComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
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
    NzResizeHandleComponent.ctorParameters = function () { return [
        { type: NzResizableService },
        { type: ChangeDetectorRef }
    ]; };
    NzResizeHandleComponent.propDecorators = {
        nzDirection: [{ type: Input }],
        nzMouseDown: [{ type: Output }]
    };
    return NzResizeHandleComponent;
}());
export { NzResizeHandleComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmVzaXplLWhhbmRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3Jlc2l6YWJsZS8iLCJzb3VyY2VzIjpbIm56LXJlc2l6ZS1oYW5kbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBWTVEO0lBQ0Usc0NBQW1CLFNBQTRCLEVBQVMsVUFBbUM7UUFBeEUsY0FBUyxHQUFULFNBQVMsQ0FBbUI7UUFBUyxlQUFVLEdBQVYsVUFBVSxDQUF5QjtJQUFHLENBQUM7SUFDakcsbUNBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQzs7OztJQURhLGlEQUFtQzs7SUFBRSxrREFBMEM7O0FBRzdGO0lBbUJFLGlDQUFvQixrQkFBc0MsRUFBVSxHQUFzQjtRQUF0RSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFOakYsZ0JBQVcsR0FBc0IsYUFBYSxDQUFDO1FBQ3JDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQWdDLENBQUM7UUFFbEYsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNSLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0lBRXNELENBQUM7Ozs7SUFFOUYsMENBQVE7OztJQUFSO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsT0FBTztZQUNwRixLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUN2QixLQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzFCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCw2Q0FBVzs7OztJQUFYLFVBQVksS0FBOEI7UUFDeEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLDRCQUE0QixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMzRyxDQUFDOzs7O0lBRUQsNkNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7O2dCQW5DRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNDQUFzQztvQkFDaEQsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIscUNBQWdEO29CQUNoRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsSUFBSSxFQUFFO3dCQUNKLFNBQVMsRUFBRSwwREFBMEQ7d0JBQ3JFLHVDQUF1QyxFQUFFLFNBQVM7d0JBQ2xELGFBQWEsRUFBRSxxQkFBcUI7d0JBQ3BDLGNBQWMsRUFBRSxxQkFBcUI7cUJBQ3RDO2lCQUNGOzs7O2dCQTNCUSxrQkFBa0I7Z0JBWHpCLGlCQUFpQjs7OzhCQXdDaEIsS0FBSzs4QkFDTCxNQUFNOztJQXNCVCw4QkFBQztDQUFBLEFBcENELElBb0NDO1NBeEJZLHVCQUF1Qjs7O0lBQ2xDLDhDQUF3RDs7SUFDeEQsOENBQWtGOztJQUVsRiwwQ0FBZ0I7Ozs7O0lBQ2hCLDJDQUF1Qzs7Ozs7SUFFM0IscURBQThDOzs7OztJQUFFLHNDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgTnpSZXNpemFibGVTZXJ2aWNlIH0gZnJvbSAnLi9uei1yZXNpemFibGUuc2VydmljZSc7XHJcblxyXG5leHBvcnQgdHlwZSBOelJlc2l6ZURpcmVjdGlvbiA9XHJcbiAgfCAndG9wJ1xyXG4gIHwgJ3JpZ2h0J1xyXG4gIHwgJ2JvdHRvbSdcclxuICB8ICdsZWZ0J1xyXG4gIHwgJ3RvcFJpZ2h0J1xyXG4gIHwgJ2JvdHRvbVJpZ2h0J1xyXG4gIHwgJ2JvdHRvbUxlZnQnXHJcbiAgfCAndG9wTGVmdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTnpSZXNpemVIYW5kbGVNb3VzZURvd25FdmVudCB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIGRpcmVjdGlvbjogTnpSZXNpemVEaXJlY3Rpb24sIHB1YmxpYyBtb3VzZUV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCkge31cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei1yZXNpemUtaGFuZGxlLCBbbnotcmVzaXplLWhhbmRsZV0nLFxyXG4gIGV4cG9ydEFzOiAnbnpSZXNpemVIYW5kbGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1yZXNpemUtaGFuZGxlLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzXSc6ICdcIm56LXJlc2l6YWJsZS1oYW5kbGUgbnotcmVzaXphYmxlLWhhbmRsZS1cIiArIG56RGlyZWN0aW9uJyxcclxuICAgICdbY2xhc3MubnotcmVzaXphYmxlLWhhbmRsZS1ib3gtaG92ZXJdJzogJ2VudGVyZWQnLFxyXG4gICAgJyhtb3VzZWRvd24pJzogJ29uTW91c2Vkb3duKCRldmVudCknLFxyXG4gICAgJyh0b3VjaHN0YXJ0KSc6ICdvbk1vdXNlZG93bigkZXZlbnQpJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56UmVzaXplSGFuZGxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIG56RGlyZWN0aW9uOiBOelJlc2l6ZURpcmVjdGlvbiA9ICdib3R0b21SaWdodCc7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56TW91c2VEb3duID0gbmV3IEV2ZW50RW1pdHRlcjxOelJlc2l6ZUhhbmRsZU1vdXNlRG93bkV2ZW50PigpO1xyXG5cclxuICBlbnRlcmVkID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbnpSZXNpemFibGVTZXJ2aWNlOiBOelJlc2l6YWJsZVNlcnZpY2UsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm56UmVzaXphYmxlU2VydmljZS5tb3VzZUVudGVyZWQkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoZW50ZXJlZCA9PiB7XHJcbiAgICAgIHRoaXMuZW50ZXJlZCA9IGVudGVyZWQ7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvbk1vdXNlZG93bihldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMubnpSZXNpemFibGVTZXJ2aWNlLmhhbmRsZU1vdXNlRG93biQubmV4dChuZXcgTnpSZXNpemVIYW5kbGVNb3VzZURvd25FdmVudCh0aGlzLm56RGlyZWN0aW9uLCBldmVudCkpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcbn1cclxuIl19