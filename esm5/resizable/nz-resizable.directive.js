import { __assign, __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
import { Directive, ElementRef, EventEmitter, Input, NgZone, Output, Renderer2 } from '@angular/core';
import { ensureInBounds, InputBoolean } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { getEventWithPoint } from './nz-resizable-utils';
import { NzResizableService } from './nz-resizable.service';
import * as i0 from "@angular/core";
import * as i1 from "./nz-resizable.service";
import * as i2 from "@angular/cdk/platform";
var NzResizableDirective = /** @class */ (function () {
    function NzResizableDirective(elementRef, renderer, nzResizableService, platform, ngZone) {
        var _this = this;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.nzResizableService = nzResizableService;
        this.platform = platform;
        this.ngZone = ngZone;
        this.nzBounds = 'parent';
        this.nzMinHeight = 40;
        this.nzMinWidth = 40;
        this.nzGridColumnCount = -1;
        this.nzMaxColumn = -1;
        this.nzMinColumn = -1;
        this.nzLockAspectRatio = false;
        this.nzPreview = false;
        this.nzResize = new EventEmitter();
        this.nzResizeEnd = new EventEmitter();
        this.nzResizeStart = new EventEmitter();
        this.resizing = false;
        this.destroy$ = new Subject();
        this.nzResizableService.handleMouseDown$.pipe(takeUntil(this.destroy$)).subscribe(function (event) {
            _this.resizing = true;
            _this.nzResizableService.startResizing(event.mouseEvent);
            _this.currentHandleEvent = event;
            _this.setCursor();
            _this.nzResizeStart.emit({
                mouseEvent: event.mouseEvent
            });
            _this.elRect = _this.el.getBoundingClientRect();
        });
        this.nzResizableService.documentMouseUp$.pipe(takeUntil(this.destroy$)).subscribe(function (event) {
            if (_this.resizing) {
                _this.resizing = false;
                _this.nzResizableService.documentMouseUp$.next();
                _this.endResize(event);
            }
        });
        this.nzResizableService.documentMouseMove$.pipe(takeUntil(this.destroy$)).subscribe(function (event) {
            if (_this.resizing) {
                _this.resize(event);
            }
        });
    }
    NzResizableDirective.prototype.onMouseenter = function () {
        this.nzResizableService.mouseEntered$.next(true);
    };
    NzResizableDirective.prototype.onMouseleave = function () {
        this.nzResizableService.mouseEntered$.next(false);
    };
    NzResizableDirective.prototype.setPosition = function () {
        var position = getComputedStyle(this.el).position;
        if (position === 'static' || !position) {
            this.renderer.setStyle(this.el, 'position', 'relative');
        }
    };
    NzResizableDirective.prototype.calcSize = function (width, height, ratio) {
        var newWidth;
        var newHeight;
        var maxWidth;
        var maxHeight;
        var col = 0;
        var spanWidth = 0;
        var minWidth = this.nzMinWidth;
        var boundWidth = Infinity;
        var boundHeight = Infinity;
        if (this.nzBounds === 'parent') {
            var parent_1 = this.renderer.parentNode(this.el);
            if (parent_1 instanceof HTMLElement) {
                var parentRect = parent_1.getBoundingClientRect();
                boundWidth = parentRect.width;
                boundHeight = parentRect.height;
            }
        }
        else if (this.nzBounds === 'window') {
            if (typeof window !== 'undefined') {
                boundWidth = window.innerWidth;
                boundHeight = window.innerHeight;
            }
        }
        else if (this.nzBounds && this.nzBounds.nativeElement && this.nzBounds.nativeElement instanceof HTMLElement) {
            var boundsRect = this.nzBounds.nativeElement.getBoundingClientRect();
            boundWidth = boundsRect.width;
            boundHeight = boundsRect.height;
        }
        maxWidth = ensureInBounds(this.nzMaxWidth, boundWidth);
        maxHeight = ensureInBounds(this.nzMaxHeight, boundHeight);
        if (this.nzGridColumnCount !== -1) {
            spanWidth = maxWidth / this.nzGridColumnCount;
            minWidth = this.nzMinColumn !== -1 ? spanWidth * this.nzMinColumn : minWidth;
            maxWidth = this.nzMaxColumn !== -1 ? spanWidth * this.nzMaxColumn : maxWidth;
        }
        if (ratio !== -1) {
            if (/(left|right)/i.test(this.currentHandleEvent.direction)) {
                newWidth = Math.min(Math.max(width, minWidth), maxWidth);
                newHeight = Math.min(Math.max(newWidth / ratio, this.nzMinHeight), maxHeight);
                if (newHeight >= maxHeight || newHeight <= this.nzMinHeight) {
                    newWidth = Math.min(Math.max(newHeight * ratio, minWidth), maxWidth);
                }
            }
            else {
                newHeight = Math.min(Math.max(height, this.nzMinHeight), maxHeight);
                newWidth = Math.min(Math.max(newHeight * ratio, minWidth), maxWidth);
                if (newWidth >= maxWidth || newWidth <= minWidth) {
                    newHeight = Math.min(Math.max(newWidth / ratio, this.nzMinHeight), maxHeight);
                }
            }
        }
        else {
            newWidth = Math.min(Math.max(width, minWidth), maxWidth);
            newHeight = Math.min(Math.max(height, this.nzMinHeight), maxHeight);
        }
        if (this.nzGridColumnCount !== -1) {
            col = Math.round(newWidth / spanWidth);
            newWidth = col * spanWidth;
        }
        return {
            col: col,
            width: newWidth,
            height: newHeight
        };
    };
    NzResizableDirective.prototype.setCursor = function () {
        switch (this.currentHandleEvent.direction) {
            case 'left':
            case 'right':
                this.renderer.setStyle(document.body, 'cursor', 'col-resize');
                break;
            case 'top':
            case 'bottom':
                this.renderer.setStyle(document.body, 'cursor', 'row-resize');
                break;
            case 'topLeft':
            case 'bottomRight':
                this.renderer.setStyle(document.body, 'cursor', 'nwse-resize');
                break;
            case 'topRight':
            case 'bottomLeft':
                this.renderer.setStyle(document.body, 'cursor', 'nesw-resize');
                break;
        }
        this.renderer.setStyle(document.body, 'user-select', 'none');
    };
    NzResizableDirective.prototype.resize = function (event) {
        var _this = this;
        var elRect = this.elRect;
        var resizeEvent = getEventWithPoint(event);
        var handleEvent = getEventWithPoint(this.currentHandleEvent.mouseEvent);
        var width = elRect.width;
        var height = elRect.height;
        var ratio = this.nzLockAspectRatio ? width / height : -1;
        switch (this.currentHandleEvent.direction) {
            case 'bottomRight':
                width = resizeEvent.clientX - elRect.left;
                height = resizeEvent.clientY - elRect.top;
                break;
            case 'bottomLeft':
                width = elRect.width + handleEvent.clientX - resizeEvent.clientX;
                height = resizeEvent.clientY - elRect.top;
                break;
            case 'topRight':
                width = resizeEvent.clientX - elRect.left;
                height = elRect.height + handleEvent.clientY - resizeEvent.clientY;
                break;
            case 'topLeft':
                width = elRect.width + handleEvent.clientX - resizeEvent.clientX;
                height = elRect.height + handleEvent.clientY - resizeEvent.clientY;
                break;
            case 'top':
                height = elRect.height + handleEvent.clientY - resizeEvent.clientY;
                break;
            case 'right':
                width = resizeEvent.clientX - elRect.left;
                break;
            case 'bottom':
                height = resizeEvent.clientY - elRect.top;
                break;
            case 'left':
                width = elRect.width + handleEvent.clientX - resizeEvent.clientX;
        }
        var size = this.calcSize(width, height, ratio);
        this.sizeCache = __assign({}, size);
        this.ngZone.run(function () {
            _this.nzResize.emit(__assign(__assign({}, size), { mouseEvent: event }));
        });
        if (this.nzPreview) {
            this.previewResize(size);
        }
    };
    NzResizableDirective.prototype.endResize = function (event) {
        var _this = this;
        this.renderer.setStyle(document.body, 'cursor', '');
        this.renderer.setStyle(document.body, 'user-select', '');
        this.removeGhostElement();
        var size = this.sizeCache
            ? __assign({}, this.sizeCache) : {
            width: this.elRect.width,
            height: this.elRect.height
        };
        this.ngZone.run(function () {
            _this.nzResizeEnd.emit(__assign(__assign({}, size), { mouseEvent: event }));
        });
        this.sizeCache = null;
        this.currentHandleEvent = null;
    };
    NzResizableDirective.prototype.previewResize = function (_a) {
        var width = _a.width, height = _a.height;
        this.createGhostElement();
        this.renderer.setStyle(this.ghostElement, 'width', width + "px");
        this.renderer.setStyle(this.ghostElement, 'height', height + "px");
    };
    NzResizableDirective.prototype.createGhostElement = function () {
        if (!this.ghostElement) {
            this.ghostElement = this.renderer.createElement('div');
            this.renderer.setAttribute(this.ghostElement, 'class', 'nz-resizable-preview');
        }
        this.renderer.appendChild(this.el, this.ghostElement);
    };
    NzResizableDirective.prototype.removeGhostElement = function () {
        if (this.ghostElement) {
            this.renderer.removeChild(this.el, this.ghostElement);
        }
    };
    NzResizableDirective.prototype.ngAfterViewInit = function () {
        if (this.platform.isBrowser) {
            this.el = this.elementRef.nativeElement;
            this.setPosition();
        }
    };
    NzResizableDirective.prototype.ngOnDestroy = function () {
        this.ghostElement = null;
        this.sizeCache = null;
        this.destroy$.next();
        this.destroy$.complete();
    };
    /** @nocollapse */ NzResizableDirective.ɵfac = function NzResizableDirective_Factory(t) { return new (t || NzResizableDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.NzResizableService), i0.ɵɵdirectiveInject(i2.Platform), i0.ɵɵdirectiveInject(i0.NgZone)); };
    /** @nocollapse */ NzResizableDirective.ɵdir = i0.ɵɵdefineDirective({ type: NzResizableDirective, selectors: [["", "nz-resizable", ""]], hostBindings: function NzResizableDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            i0.ɵɵallocHostVars(2);
            i0.ɵɵlistener("mouseenter", function NzResizableDirective_mouseenter_HostBindingHandler($event) { return ctx.onMouseenter(); })("mouseleave", function NzResizableDirective_mouseleave_HostBindingHandler($event) { return ctx.onMouseleave(); });
        } if (rf & 2) {
            i0.ɵɵclassProp("nz-resizable", true)("nz-resizable-resizing", ctx.resizing);
        } }, inputs: { nzBounds: "nzBounds", nzMaxHeight: "nzMaxHeight", nzMaxWidth: "nzMaxWidth", nzMinHeight: "nzMinHeight", nzMinWidth: "nzMinWidth", nzGridColumnCount: "nzGridColumnCount", nzMaxColumn: "nzMaxColumn", nzMinColumn: "nzMinColumn", nzLockAspectRatio: "nzLockAspectRatio", nzPreview: "nzPreview" }, outputs: { nzResize: "nzResize", nzResizeEnd: "nzResizeEnd", nzResizeStart: "nzResizeStart" }, exportAs: ["nzResizable"], features: [i0.ɵɵProvidersFeature([NzResizableService])] });
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzResizableDirective.prototype, "nzLockAspectRatio", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzResizableDirective.prototype, "nzPreview", void 0);
    return NzResizableDirective;
}());
export { NzResizableDirective };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzResizableDirective, [{
        type: Directive,
        args: [{
                selector: '[nz-resizable]',
                exportAs: 'nzResizable',
                providers: [NzResizableService],
                host: {
                    '[class.nz-resizable]': 'true',
                    '[class.nz-resizable-resizing]': 'resizing',
                    '(mouseenter)': 'onMouseenter()',
                    '(mouseleave)': 'onMouseleave()'
                }
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.NzResizableService }, { type: i2.Platform }, { type: i0.NgZone }]; }, { nzBounds: [{
            type: Input
        }], nzMaxHeight: [{
            type: Input
        }], nzMaxWidth: [{
            type: Input
        }], nzMinHeight: [{
            type: Input
        }], nzMinWidth: [{
            type: Input
        }], nzGridColumnCount: [{
            type: Input
        }], nzMaxColumn: [{
            type: Input
        }], nzMinColumn: [{
            type: Input
        }], nzLockAspectRatio: [{
            type: Input
        }], nzPreview: [{
            type: Input
        }], nzResize: [{
            type: Output
        }], nzResizeEnd: [{
            type: Output
        }], nzResizeStart: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmVzaXphYmxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvcmVzaXphYmxlLyIsInNvdXJjZXMiOlsibnotcmVzaXphYmxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBaUIsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBYSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWhJLE9BQU8sRUFBRSxjQUFjLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFVNUQ7SUFrQ0UsOEJBQ1UsVUFBbUMsRUFDbkMsUUFBbUIsRUFDbkIsa0JBQXNDLEVBQ3RDLFFBQWtCLEVBQ2xCLE1BQWM7UUFMeEIsaUJBK0JDO1FBOUJTLGVBQVUsR0FBVixVQUFVLENBQXlCO1FBQ25DLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLFdBQU0sR0FBTixNQUFNLENBQVE7UUEzQmYsYUFBUSxHQUFrRCxRQUFRLENBQUM7UUFHbkUsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixzQkFBaUIsR0FBVyxDQUFDLENBQUMsQ0FBQztRQUMvQixnQkFBVyxHQUFXLENB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O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBOZ1pvbmUsIE9uRGVzdHJveSwgT3V0cHV0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGVuc3VyZUluQm91bmRzLCBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IGdldEV2ZW50V2l0aFBvaW50IH0gZnJvbSAnLi9uei1yZXNpemFibGUtdXRpbHMnO1xyXG5pbXBvcnQgeyBOelJlc2l6YWJsZVNlcnZpY2UgfSBmcm9tICcuL256LXJlc2l6YWJsZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTnpSZXNpemVIYW5kbGVNb3VzZURvd25FdmVudCB9IGZyb20gJy4vbnotcmVzaXplLWhhbmRsZS5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBOelJlc2l6ZUV2ZW50IHtcclxuICB3aWR0aD86IG51bWJlcjtcclxuICBoZWlnaHQ/OiBudW1iZXI7XHJcbiAgY29sPzogbnVtYmVyO1xyXG4gIG1vdXNlRXZlbnQ/OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudDtcclxufVxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbnotcmVzaXphYmxlXScsXHJcbiAgZXhwb3J0QXM6ICduelJlc2l6YWJsZScsXHJcbiAgcHJvdmlkZXJzOiBbTnpSZXNpemFibGVTZXJ2aWNlXSxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLm56LXJlc2l6YWJsZV0nOiAndHJ1ZScsXHJcbiAgICAnW2NsYXNzLm56LXJlc2l6YWJsZS1yZXNpemluZ10nOiAncmVzaXppbmcnLFxyXG4gICAgJyhtb3VzZWVudGVyKSc6ICdvbk1vdXNlZW50ZXIoKScsXHJcbiAgICAnKG1vdXNlbGVhdmUpJzogJ29uTW91c2VsZWF2ZSgpJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56UmVzaXphYmxlRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBuekJvdW5kczogJ3dpbmRvdycgfCAncGFyZW50JyB8IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+ID0gJ3BhcmVudCc7XHJcbiAgQElucHV0KCkgbnpNYXhIZWlnaHQ6IG51bWJlcjtcclxuICBASW5wdXQoKSBuek1heFdpZHRoOiBudW1iZXI7XHJcbiAgQElucHV0KCkgbnpNaW5IZWlnaHQ6IG51bWJlciA9IDQwO1xyXG4gIEBJbnB1dCgpIG56TWluV2lkdGg6IG51bWJlciA9IDQwO1xyXG4gIEBJbnB1dCgpIG56R3JpZENvbHVtbkNvdW50OiBudW1iZXIgPSAtMTtcclxuICBASW5wdXQoKSBuek1heENvbHVtbjogbnVtYmVyID0gLTE7XHJcbiAgQElucHV0KCkgbnpNaW5Db2x1bW46IG51bWJlciA9IC0xO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekxvY2tBc3BlY3RSYXRpbzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelByZXZpZXc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpSZXNpemUgPSBuZXcgRXZlbnRFbWl0dGVyPE56UmVzaXplRXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56UmVzaXplRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxOelJlc2l6ZUV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelJlc2l6ZVN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxOelJlc2l6ZUV2ZW50PigpO1xyXG5cclxuICByZXNpemluZyA9IGZhbHNlO1xyXG4gIHByaXZhdGUgZWxSZWN0OiBDbGllbnRSZWN0IHwgRE9NUmVjdDtcclxuICBwcml2YXRlIGN1cnJlbnRIYW5kbGVFdmVudDogTnpSZXNpemVIYW5kbGVNb3VzZURvd25FdmVudCB8IG51bGw7XHJcbiAgcHJpdmF0ZSBnaG9zdEVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50IHwgbnVsbDtcclxuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudDtcclxuICBwcml2YXRlIHNpemVDYWNoZTogTnpSZXNpemVFdmVudCB8IG51bGw7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgbnpSZXNpemFibGVTZXJ2aWNlOiBOelJlc2l6YWJsZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcclxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmVcclxuICApIHtcclxuICAgIHRoaXMubnpSZXNpemFibGVTZXJ2aWNlLmhhbmRsZU1vdXNlRG93biQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShldmVudCA9PiB7XHJcbiAgICAgIHRoaXMucmVzaXppbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLm56UmVzaXphYmxlU2VydmljZS5zdGFydFJlc2l6aW5nKGV2ZW50Lm1vdXNlRXZlbnQpO1xyXG4gICAgICB0aGlzLmN1cnJlbnRIYW5kbGVFdmVudCA9IGV2ZW50O1xyXG4gICAgICB0aGlzLnNldEN1cnNvcigpO1xyXG4gICAgICB0aGlzLm56UmVzaXplU3RhcnQuZW1pdCh7XHJcbiAgICAgICAgbW91c2VFdmVudDogZXZlbnQubW91c2VFdmVudFxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5lbFJlY3QgPSB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5uelJlc2l6YWJsZVNlcnZpY2UuZG9jdW1lbnRNb3VzZVVwJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuICAgICAgaWYgKHRoaXMucmVzaXppbmcpIHtcclxuICAgICAgICB0aGlzLnJlc2l6aW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5uelJlc2l6YWJsZVNlcnZpY2UuZG9jdW1lbnRNb3VzZVVwJC5uZXh0KCk7XHJcbiAgICAgICAgdGhpcy5lbmRSZXNpemUoZXZlbnQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm56UmVzaXphYmxlU2VydmljZS5kb2N1bWVudE1vdXNlTW92ZSQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShldmVudCA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnJlc2l6aW5nKSB7XHJcbiAgICAgICAgdGhpcy5yZXNpemUoZXZlbnQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uTW91c2VlbnRlcigpOiB2b2lkIHtcclxuICAgIHRoaXMubnpSZXNpemFibGVTZXJ2aWNlLm1vdXNlRW50ZXJlZCQubmV4dCh0cnVlKTtcclxuICB9XHJcblxyXG4gIG9uTW91c2VsZWF2ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMubnpSZXNpemFibGVTZXJ2aWNlLm1vdXNlRW50ZXJlZCQubmV4dChmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBzZXRQb3NpdGlvbigpOiB2b2lkIHtcclxuICAgIGNvbnN0IHBvc2l0aW9uID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsKS5wb3NpdGlvbjtcclxuICAgIGlmIChwb3NpdGlvbiA9PT0gJ3N0YXRpYycgfHwgIXBvc2l0aW9uKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ3Bvc2l0aW9uJywgJ3JlbGF0aXZlJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjYWxjU2l6ZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgcmF0aW86IG51bWJlcik6IE56UmVzaXplRXZlbnQge1xyXG4gICAgbGV0IG5ld1dpZHRoOiBudW1iZXI7XHJcbiAgICBsZXQgbmV3SGVpZ2h0OiBudW1iZXI7XHJcbiAgICBsZXQgbWF4V2lkdGg6IG51bWJlcjtcclxuICAgIGxldCBtYXhIZWlnaHQ6IG51bWJlcjtcclxuICAgIGxldCBjb2wgPSAwO1xyXG4gICAgbGV0IHNwYW5XaWR0aCA9IDA7XHJcbiAgICBsZXQgbWluV2lkdGggPSB0aGlzLm56TWluV2lkdGg7XHJcbiAgICBsZXQgYm91bmRXaWR0aCA9IEluZmluaXR5O1xyXG4gICAgbGV0IGJvdW5kSGVpZ2h0ID0gSW5maW5pdHk7XHJcbiAgICBpZiAodGhpcy5uekJvdW5kcyA9PT0gJ3BhcmVudCcpIHtcclxuICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5yZW5kZXJlci5wYXJlbnROb2RlKHRoaXMuZWwpO1xyXG4gICAgICBpZiAocGFyZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBwYXJlbnRSZWN0ID0gcGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIGJvdW5kV2lkdGggPSBwYXJlbnRSZWN0LndpZHRoO1xyXG4gICAgICAgIGJvdW5kSGVpZ2h0ID0gcGFyZW50UmVjdC5oZWlnaHQ7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodGhpcy5uekJvdW5kcyA9PT0gJ3dpbmRvdycpIHtcclxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgYm91bmRXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIGJvdW5kSGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMubnpCb3VuZHMgJiYgdGhpcy5uekJvdW5kcy5uYXRpdmVFbGVtZW50ICYmIHRoaXMubnpCb3VuZHMubmF0aXZlRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XHJcbiAgICAgIGNvbnN0IGJvdW5kc1JlY3QgPSB0aGlzLm56Qm91bmRzLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgIGJvdW5kV2lkdGggPSBib3VuZHNSZWN0LndpZHRoO1xyXG4gICAgICBib3VuZEhlaWdodCA9IGJvdW5kc1JlY3QuaGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIG1heFdpZHRoID0gZW5zdXJlSW5Cb3VuZHModGhpcy5uek1heFdpZHRoLCBib3VuZFdpZHRoKTtcclxuICAgIG1heEhlaWdodCA9IGVuc3VyZUluQm91bmRzKHRoaXMubnpNYXhIZWlnaHQsIGJvdW5kSGVpZ2h0KTtcclxuXHJcbiAgICBpZiAodGhpcy5uekdyaWRDb2x1bW5Db3VudCAhPT0gLTEpIHtcclxuICAgICAgc3BhbldpZHRoID0gbWF4V2lkdGggLyB0aGlzLm56R3JpZENvbHVtbkNvdW50O1xyXG4gICAgICBtaW5XaWR0aCA9IHRoaXMubnpNaW5Db2x1bW4gIT09IC0xID8gc3BhbldpZHRoICogdGhpcy5uek1pbkNvbHVtbiA6IG1pbldpZHRoO1xyXG4gICAgICBtYXhXaWR0aCA9IHRoaXMubnpNYXhDb2x1bW4gIT09IC0xID8gc3BhbldpZHRoICogdGhpcy5uek1heENvbHVtbiA6IG1heFdpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyYXRpbyAhPT0gLTEpIHtcclxuICAgICAgaWYgKC8obGVmdHxyaWdodCkvaS50ZXN0KHRoaXMuY3VycmVudEhhbmRsZUV2ZW50IS5kaXJlY3Rpb24pKSB7XHJcbiAgICAgICAgbmV3V2lkdGggPSBNYXRoLm1pbihNYXRoLm1heCh3aWR0aCwgbWluV2lkdGgpLCBtYXhXaWR0aCk7XHJcbiAgICAgICAgbmV3SGVpZ2h0ID0gTWF0aC5taW4oTWF0aC5tYXgobmV3V2lkdGggLyByYXRpbywgdGhpcy5uek1pbkhlaWdodCksIG1heEhlaWdodCk7XHJcbiAgICAgICAgaWYgKG5ld0hlaWdodCA+PSBtYXhIZWlnaHQgfHwgbmV3SGVpZ2h0IDw9IHRoaXMubnpNaW5IZWlnaHQpIHtcclxuICAgICAgICAgIG5ld1dpZHRoID0gTWF0aC5taW4oTWF0aC5tYXgobmV3SGVpZ2h0ICogcmF0aW8sIG1pbldpZHRoKSwgbWF4V2lkdGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuZXdIZWlnaHQgPSBNYXRoLm1pbihNYXRoLm1heChoZWlnaHQsIHRoaXMubnpNaW5IZWlnaHQpLCBtYXhIZWlnaHQpO1xyXG4gICAgICAgIG5ld1dpZHRoID0gTWF0aC5taW4oTWF0aC5tYXgobmV3SGVpZ2h0ICogcmF0aW8sIG1pbldpZHRoKSwgbWF4V2lkdGgpO1xyXG4gICAgICAgIGlmIChuZXdXaWR0aCA+PSBtYXhXaWR0aCB8fCBuZXdXaWR0aCA8PSBtaW5XaWR0aCkge1xyXG4gICAgICAgICAgbmV3SGVpZ2h0ID0gTWF0aC5taW4oTWF0aC5tYXgobmV3V2lkdGggLyByYXRpbywgdGhpcy5uek1pbkhlaWdodCksIG1heEhlaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuZXdXaWR0aCA9IE1hdGgubWluKE1hdGgubWF4KHdpZHRoLCBtaW5XaWR0aCksIG1heFdpZHRoKTtcclxuICAgICAgbmV3SGVpZ2h0ID0gTWF0aC5taW4oTWF0aC5tYXgoaGVpZ2h0LCB0aGlzLm56TWluSGVpZ2h0KSwgbWF4SGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5uekdyaWRDb2x1bW5Db3VudCAhPT0gLTEpIHtcclxuICAgICAgY29sID0gTWF0aC5yb3VuZChuZXdXaWR0aCAvIHNwYW5XaWR0aCk7XHJcbiAgICAgIG5ld1dpZHRoID0gY29sICogc3BhbldpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNvbCxcclxuICAgICAgd2lkdGg6IG5ld1dpZHRoLFxyXG4gICAgICBoZWlnaHQ6IG5ld0hlaWdodFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHNldEN1cnNvcigpOiB2b2lkIHtcclxuICAgIHN3aXRjaCAodGhpcy5jdXJyZW50SGFuZGxlRXZlbnQhLmRpcmVjdGlvbikge1xyXG4gICAgICBjYXNlICdsZWZ0JzpcclxuICAgICAgY2FzZSAncmlnaHQnOlxyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZG9jdW1lbnQuYm9keSwgJ2N1cnNvcicsICdjb2wtcmVzaXplJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3RvcCc6XHJcbiAgICAgIGNhc2UgJ2JvdHRvbSc6XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShkb2N1bWVudC5ib2R5LCAnY3Vyc29yJywgJ3Jvdy1yZXNpemUnKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAndG9wTGVmdCc6XHJcbiAgICAgIGNhc2UgJ2JvdHRvbVJpZ2h0JzpcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGRvY3VtZW50LmJvZHksICdjdXJzb3InLCAnbndzZS1yZXNpemUnKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAndG9wUmlnaHQnOlxyXG4gICAgICBjYXNlICdib3R0b21MZWZ0JzpcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGRvY3VtZW50LmJvZHksICdjdXJzb3InLCAnbmVzdy1yZXNpemUnKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZG9jdW1lbnQuYm9keSwgJ3VzZXItc2VsZWN0JywgJ25vbmUnKTtcclxuICB9XHJcblxyXG4gIHJlc2l6ZShldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IGVsUmVjdCA9IHRoaXMuZWxSZWN0O1xyXG4gICAgY29uc3QgcmVzaXplRXZlbnQgPSBnZXRFdmVudFdpdGhQb2ludChldmVudCk7XHJcbiAgICBjb25zdCBoYW5kbGVFdmVudCA9IGdldEV2ZW50V2l0aFBvaW50KHRoaXMuY3VycmVudEhhbmRsZUV2ZW50IS5tb3VzZUV2ZW50KTtcclxuICAgIGxldCB3aWR0aCA9IGVsUmVjdC53aWR0aDtcclxuICAgIGxldCBoZWlnaHQgPSBlbFJlY3QuaGVpZ2h0O1xyXG4gICAgY29uc3QgcmF0aW8gPSB0aGlzLm56TG9ja0FzcGVjdFJhdGlvID8gd2lkdGggLyBoZWlnaHQgOiAtMTtcclxuICAgIHN3aXRjaCAodGhpcy5jdXJyZW50SGFuZGxlRXZlbnQhLmRpcmVjdGlvbikge1xyXG4gICAgICBjYXNlICdib3R0b21SaWdodCc6XHJcbiAgICAgICAgd2lkdGggPSByZXNpemVFdmVudC5jbGllbnRYIC0gZWxSZWN0LmxlZnQ7XHJcbiAgICAgICAgaGVpZ2h0ID0gcmVzaXplRXZlbnQuY2xpZW50WSAtIGVsUmVjdC50b3A7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2JvdHRvbUxlZnQnOlxyXG4gICAgICAgIHdpZHRoID0gZWxSZWN0LndpZHRoICsgaGFuZGxlRXZlbnQuY2xpZW50WCAtIHJlc2l6ZUV2ZW50LmNsaWVudFg7XHJcbiAgICAgICAgaGVpZ2h0ID0gcmVzaXplRXZlbnQuY2xpZW50WSAtIGVsUmVjdC50b3A7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3RvcFJpZ2h0JzpcclxuICAgICAgICB3aWR0aCA9IHJlc2l6ZUV2ZW50LmNsaWVudFggLSBlbFJlY3QubGVmdDtcclxuICAgICAgICBoZWlnaHQgPSBlbFJlY3QuaGVpZ2h0ICsgaGFuZGxlRXZlbnQuY2xpZW50WSAtIHJlc2l6ZUV2ZW50LmNsaWVudFk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3RvcExlZnQnOlxyXG4gICAgICAgIHdpZHRoID0gZWxSZWN0LndpZHRoICsgaGFuZGxlRXZlbnQuY2xpZW50WCAtIHJlc2l6ZUV2ZW50LmNsaWVudFg7XHJcbiAgICAgICAgaGVpZ2h0ID0gZWxSZWN0LmhlaWdodCArIGhhbmRsZUV2ZW50LmNsaWVudFkgLSByZXNpemVFdmVudC5jbGllbnRZO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICd0b3AnOlxyXG4gICAgICAgIGhlaWdodCA9IGVsUmVjdC5oZWlnaHQgKyBoYW5kbGVFdmVudC5jbGllbnRZIC0gcmVzaXplRXZlbnQuY2xpZW50WTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAncmlnaHQnOlxyXG4gICAgICAgIHdpZHRoID0gcmVzaXplRXZlbnQuY2xpZW50WCAtIGVsUmVjdC5sZWZ0O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdib3R0b20nOlxyXG4gICAgICAgIGhlaWdodCA9IHJlc2l6ZUV2ZW50LmNsaWVudFkgLSBlbFJlY3QudG9wO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdsZWZ0JzpcclxuICAgICAgICB3aWR0aCA9IGVsUmVjdC53aWR0aCArIGhhbmRsZUV2ZW50LmNsaWVudFggLSByZXNpemVFdmVudC5jbGllbnRYO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2l6ZSA9IHRoaXMuY2FsY1NpemUod2lkdGgsIGhlaWdodCwgcmF0aW8pO1xyXG4gICAgdGhpcy5zaXplQ2FjaGUgPSB7IC4uLnNpemUgfTtcclxuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgIHRoaXMubnpSZXNpemUuZW1pdCh7XHJcbiAgICAgICAgLi4uc2l6ZSxcclxuICAgICAgICBtb3VzZUV2ZW50OiBldmVudFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgaWYgKHRoaXMubnpQcmV2aWV3KSB7XHJcbiAgICAgIHRoaXMucHJldmlld1Jlc2l6ZShzaXplKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGVuZFJlc2l6ZShldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZG9jdW1lbnQuYm9keSwgJ2N1cnNvcicsICcnKTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZG9jdW1lbnQuYm9keSwgJ3VzZXItc2VsZWN0JywgJycpO1xyXG4gICAgdGhpcy5yZW1vdmVHaG9zdEVsZW1lbnQoKTtcclxuICAgIGNvbnN0IHNpemUgPSB0aGlzLnNpemVDYWNoZVxyXG4gICAgICA/IHsgLi4udGhpcy5zaXplQ2FjaGUgfVxyXG4gICAgICA6IHtcclxuICAgICAgICAgIHdpZHRoOiB0aGlzLmVsUmVjdC53aWR0aCxcclxuICAgICAgICAgIGhlaWdodDogdGhpcy5lbFJlY3QuaGVpZ2h0XHJcbiAgICAgICAgfTtcclxuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgIHRoaXMubnpSZXNpemVFbmQuZW1pdCh7XHJcbiAgICAgICAgLi4uc2l6ZSxcclxuICAgICAgICBtb3VzZUV2ZW50OiBldmVudFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zaXplQ2FjaGUgPSBudWxsO1xyXG4gICAgdGhpcy5jdXJyZW50SGFuZGxlRXZlbnQgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHJldmlld1Jlc2l6ZSh7IHdpZHRoLCBoZWlnaHQgfTogTnpSZXNpemVFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5jcmVhdGVHaG9zdEVsZW1lbnQoKTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5naG9zdEVsZW1lbnQsICd3aWR0aCcsIGAke3dpZHRofXB4YCk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZ2hvc3RFbGVtZW50LCAnaGVpZ2h0JywgYCR7aGVpZ2h0fXB4YCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVHaG9zdEVsZW1lbnQoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuZ2hvc3RFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuZ2hvc3RFbGVtZW50ID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5naG9zdEVsZW1lbnQsICdjbGFzcycsICduei1yZXNpemFibGUtcHJldmlldycpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmVsLCB0aGlzLmdob3N0RWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVHaG9zdEVsZW1lbnQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5naG9zdEVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLmVsLCB0aGlzLmdob3N0RWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgdGhpcy5lbCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgICB0aGlzLnNldFBvc2l0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZ2hvc3RFbGVtZW50ID0gbnVsbDtcclxuICAgIHRoaXMuc2l6ZUNhY2hlID0gbnVsbDtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=