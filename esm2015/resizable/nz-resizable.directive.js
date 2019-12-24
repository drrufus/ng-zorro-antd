import { __decorate, __metadata } from "tslib";
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
export class NzResizableDirective {
    constructor(elementRef, renderer, nzResizableService, platform, ngZone) {
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
        this.nzResizableService.handleMouseDown$.pipe(takeUntil(this.destroy$)).subscribe(event => {
            this.resizing = true;
            this.nzResizableService.startResizing(event.mouseEvent);
            this.currentHandleEvent = event;
            this.setCursor();
            this.nzResizeStart.emit({
                mouseEvent: event.mouseEvent
            });
            this.elRect = this.el.getBoundingClientRect();
        });
        this.nzResizableService.documentMouseUp$.pipe(takeUntil(this.destroy$)).subscribe(event => {
            if (this.resizing) {
                this.resizing = false;
                this.nzResizableService.documentMouseUp$.next();
                this.endResize(event);
            }
        });
        this.nzResizableService.documentMouseMove$.pipe(takeUntil(this.destroy$)).subscribe(event => {
            if (this.resizing) {
                this.resize(event);
            }
        });
    }
    onMouseenter() {
        this.nzResizableService.mouseEntered$.next(true);
    }
    onMouseleave() {
        this.nzResizableService.mouseEntered$.next(false);
    }
    setPosition() {
        const position = getComputedStyle(this.el).position;
        if (position === 'static' || !position) {
            this.renderer.setStyle(this.el, 'position', 'relative');
        }
    }
    calcSize(width, height, ratio) {
        let newWidth;
        let newHeight;
        let maxWidth;
        let maxHeight;
        let col = 0;
        let spanWidth = 0;
        let minWidth = this.nzMinWidth;
        let boundWidth = Infinity;
        let boundHeight = Infinity;
        if (this.nzBounds === 'parent') {
            const parent = this.renderer.parentNode(this.el);
            if (parent instanceof HTMLElement) {
                const parentRect = parent.getBoundingClientRect();
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
            const boundsRect = this.nzBounds.nativeElement.getBoundingClientRect();
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
            col,
            width: newWidth,
            height: newHeight
        };
    }
    setCursor() {
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
    }
    resize(event) {
        const elRect = this.elRect;
        const resizeEvent = getEventWithPoint(event);
        const handleEvent = getEventWithPoint(this.currentHandleEvent.mouseEvent);
        let width = elRect.width;
        let height = elRect.height;
        const ratio = this.nzLockAspectRatio ? width / height : -1;
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
        const size = this.calcSize(width, height, ratio);
        this.sizeCache = Object.assign({}, size);
        this.ngZone.run(() => {
            this.nzResize.emit(Object.assign(Object.assign({}, size), { mouseEvent: event }));
        });
        if (this.nzPreview) {
            this.previewResize(size);
        }
    }
    endResize(event) {
        this.renderer.setStyle(document.body, 'cursor', '');
        this.renderer.setStyle(document.body, 'user-select', '');
        this.removeGhostElement();
        const size = this.sizeCache
            ? Object.assign({}, this.sizeCache) : {
            width: this.elRect.width,
            height: this.elRect.height
        };
        this.ngZone.run(() => {
            this.nzResizeEnd.emit(Object.assign(Object.assign({}, size), { mouseEvent: event }));
        });
        this.sizeCache = null;
        this.currentHandleEvent = null;
    }
    previewResize({ width, height }) {
        this.createGhostElement();
        this.renderer.setStyle(this.ghostElement, 'width', `${width}px`);
        this.renderer.setStyle(this.ghostElement, 'height', `${height}px`);
    }
    createGhostElement() {
        if (!this.ghostElement) {
            this.ghostElement = this.renderer.createElement('div');
            this.renderer.setAttribute(this.ghostElement, 'class', 'nz-resizable-preview');
        }
        this.renderer.appendChild(this.el, this.ghostElement);
    }
    removeGhostElement() {
        if (this.ghostElement) {
            this.renderer.removeChild(this.el, this.ghostElement);
        }
    }
    ngAfterViewInit() {
        if (this.platform.isBrowser) {
            this.el = this.elementRef.nativeElement;
            this.setPosition();
        }
    }
    ngOnDestroy() {
        this.ghostElement = null;
        this.sizeCache = null;
        this.destroy$.next();
        this.destroy$.complete();
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmVzaXphYmxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvcmVzaXphYmxlLyIsInNvdXJjZXMiOlsibnotcmVzaXphYmxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBaUIsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBYSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWhJLE9BQU8sRUFBRSxjQUFjLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFxQjVELE1BQU0sT0FBTyxvQkFBb0I7SUF1Qi9CLFlBQ1UsVUFBbUMsRUFDbkMsUUFBbUIsRUFDbkIsa0JBQXNDLEVBQ3RDLFFBQWtCLEVBQ2xCLE1BQWM7UUFKZCxlQUFVLEdBQVYsVUFBVSxDQUF5QjtRQUNuQyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBM0JmLGFBQVEsR0FBa0QsUUFBUSxDQUFDO1FBR25FLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFDeEIsc0JBQWlCLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDL0IsZ0JBQVcsR0FB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WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBOZ1pvbmUsIE9uRGVzdHJveSwgT3V0cHV0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGVuc3VyZUluQm91bmRzLCBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IGdldEV2ZW50V2l0aFBvaW50IH0gZnJvbSAnLi9uei1yZXNpemFibGUtdXRpbHMnO1xyXG5pbXBvcnQgeyBOelJlc2l6YWJsZVNlcnZpY2UgfSBmcm9tICcuL256LXJlc2l6YWJsZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTnpSZXNpemVIYW5kbGVNb3VzZURvd25FdmVudCB9IGZyb20gJy4vbnotcmVzaXplLWhhbmRsZS5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBOelJlc2l6ZUV2ZW50IHtcclxuICB3aWR0aD86IG51bWJlcjtcclxuICBoZWlnaHQ/OiBudW1iZXI7XHJcbiAgY29sPzogbnVtYmVyO1xyXG4gIG1vdXNlRXZlbnQ/OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudDtcclxufVxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbnotcmVzaXphYmxlXScsXHJcbiAgZXhwb3J0QXM6ICduelJlc2l6YWJsZScsXHJcbiAgcHJvdmlkZXJzOiBbTnpSZXNpemFibGVTZXJ2aWNlXSxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLm56LXJlc2l6YWJsZV0nOiAndHJ1ZScsXHJcbiAgICAnW2NsYXNzLm56LXJlc2l6YWJsZS1yZXNpemluZ10nOiAncmVzaXppbmcnLFxyXG4gICAgJyhtb3VzZWVudGVyKSc6ICdvbk1vdXNlZW50ZXIoKScsXHJcbiAgICAnKG1vdXNlbGVhdmUpJzogJ29uTW91c2VsZWF2ZSgpJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56UmVzaXphYmxlRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBuekJvdW5kczogJ3dpbmRvdycgfCAncGFyZW50JyB8IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+ID0gJ3BhcmVudCc7XHJcbiAgQElucHV0KCkgbnpNYXhIZWlnaHQ6IG51bWJlcjtcclxuICBASW5wdXQoKSBuek1heFdpZHRoOiBudW1iZXI7XHJcbiAgQElucHV0KCkgbnpNaW5IZWlnaHQ6IG51bWJlciA9IDQwO1xyXG4gIEBJbnB1dCgpIG56TWluV2lkdGg6IG51bWJlciA9IDQwO1xyXG4gIEBJbnB1dCgpIG56R3JpZENvbHVtbkNvdW50OiBudW1iZXIgPSAtMTtcclxuICBASW5wdXQoKSBuek1heENvbHVtbjogbnVtYmVyID0gLTE7XHJcbiAgQElucHV0KCkgbnpNaW5Db2x1bW46IG51bWJlciA9IC0xO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekxvY2tBc3BlY3RSYXRpbzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelByZXZpZXc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpSZXNpemUgPSBuZXcgRXZlbnRFbWl0dGVyPE56UmVzaXplRXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56UmVzaXplRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxOelJlc2l6ZUV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelJlc2l6ZVN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxOelJlc2l6ZUV2ZW50PigpO1xyXG5cclxuICByZXNpemluZyA9IGZhbHNlO1xyXG4gIHByaXZhdGUgZWxSZWN0OiBDbGllbnRSZWN0IHwgRE9NUmVjdDtcclxuICBwcml2YXRlIGN1cnJlbnRIYW5kbGVFdmVudDogTnpSZXNpemVIYW5kbGVNb3VzZURvd25FdmVudCB8IG51bGw7XHJcbiAgcHJpdmF0ZSBnaG9zdEVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50IHwgbnVsbDtcclxuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudDtcclxuICBwcml2YXRlIHNpemVDYWNoZTogTnpSZXNpemVFdmVudCB8IG51bGw7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgbnpSZXNpemFibGVTZXJ2aWNlOiBOelJlc2l6YWJsZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcclxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmVcclxuICApIHtcclxuICAgIHRoaXMubnpSZXNpemFibGVTZXJ2aWNlLmhhbmRsZU1vdXNlRG93biQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShldmVudCA9PiB7XHJcbiAgICAgIHRoaXMucmVzaXppbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLm56UmVzaXphYmxlU2VydmljZS5zdGFydFJlc2l6aW5nKGV2ZW50Lm1vdXNlRXZlbnQpO1xyXG4gICAgICB0aGlzLmN1cnJlbnRIYW5kbGVFdmVudCA9IGV2ZW50O1xyXG4gICAgICB0aGlzLnNldEN1cnNvcigpO1xyXG4gICAgICB0aGlzLm56UmVzaXplU3RhcnQuZW1pdCh7XHJcbiAgICAgICAgbW91c2VFdmVudDogZXZlbnQubW91c2VFdmVudFxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5lbFJlY3QgPSB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5uelJlc2l6YWJsZVNlcnZpY2UuZG9jdW1lbnRNb3VzZVVwJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuICAgICAgaWYgKHRoaXMucmVzaXppbmcpIHtcclxuICAgICAgICB0aGlzLnJlc2l6aW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5uelJlc2l6YWJsZVNlcnZpY2UuZG9jdW1lbnRNb3VzZVVwJC5uZXh0KCk7XHJcbiAgICAgICAgdGhpcy5lbmRSZXNpemUoZXZlbnQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm56UmVzaXphYmxlU2VydmljZS5kb2N1bWVudE1vdXNlTW92ZSQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShldmVudCA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnJlc2l6aW5nKSB7XHJcbiAgICAgICAgdGhpcy5yZXNpemUoZXZlbnQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uTW91c2VlbnRlcigpOiB2b2lkIHtcclxuICAgIHRoaXMubnpSZXNpemFibGVTZXJ2aWNlLm1vdXNlRW50ZXJlZCQubmV4dCh0cnVlKTtcclxuICB9XHJcblxyXG4gIG9uTW91c2VsZWF2ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMubnpSZXNpemFibGVTZXJ2aWNlLm1vdXNlRW50ZXJlZCQubmV4dChmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBzZXRQb3NpdGlvbigpOiB2b2lkIHtcclxuICAgIGNvbnN0IHBvc2l0aW9uID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsKS5wb3NpdGlvbjtcclxuICAgIGlmIChwb3NpdGlvbiA9PT0gJ3N0YXRpYycgfHwgIXBvc2l0aW9uKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ3Bvc2l0aW9uJywgJ3JlbGF0aXZlJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjYWxjU2l6ZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgcmF0aW86IG51bWJlcik6IE56UmVzaXplRXZlbnQge1xyXG4gICAgbGV0IG5ld1dpZHRoOiBudW1iZXI7XHJcbiAgICBsZXQgbmV3SGVpZ2h0OiBudW1iZXI7XHJcbiAgICBsZXQgbWF4V2lkdGg6IG51bWJlcjtcclxuICAgIGxldCBtYXhIZWlnaHQ6IG51bWJlcjtcclxuICAgIGxldCBjb2wgPSAwO1xyXG4gICAgbGV0IHNwYW5XaWR0aCA9IDA7XHJcbiAgICBsZXQgbWluV2lkdGggPSB0aGlzLm56TWluV2lkdGg7XHJcbiAgICBsZXQgYm91bmRXaWR0aCA9IEluZmluaXR5O1xyXG4gICAgbGV0IGJvdW5kSGVpZ2h0ID0gSW5maW5pdHk7XHJcbiAgICBpZiAodGhpcy5uekJvdW5kcyA9PT0gJ3BhcmVudCcpIHtcclxuICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5yZW5kZXJlci5wYXJlbnROb2RlKHRoaXMuZWwpO1xyXG4gICAgICBpZiAocGFyZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBwYXJlbnRSZWN0ID0gcGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIGJvdW5kV2lkdGggPSBwYXJlbnRSZWN0LndpZHRoO1xyXG4gICAgICAgIGJvdW5kSGVpZ2h0ID0gcGFyZW50UmVjdC5oZWlnaHQ7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodGhpcy5uekJvdW5kcyA9PT0gJ3dpbmRvdycpIHtcclxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgYm91bmRXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIGJvdW5kSGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMubnpCb3VuZHMgJiYgdGhpcy5uekJvdW5kcy5uYXRpdmVFbGVtZW50ICYmIHRoaXMubnpCb3VuZHMubmF0aXZlRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XHJcbiAgICAgIGNvbnN0IGJvdW5kc1JlY3QgPSB0aGlzLm56Qm91bmRzLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgIGJvdW5kV2lkdGggPSBib3VuZHNSZWN0LndpZHRoO1xyXG4gICAgICBib3VuZEhlaWdodCA9IGJvdW5kc1JlY3QuaGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIG1heFdpZHRoID0gZW5zdXJlSW5Cb3VuZHModGhpcy5uek1heFdpZHRoLCBib3VuZFdpZHRoKTtcclxuICAgIG1heEhlaWdodCA9IGVuc3VyZUluQm91bmRzKHRoaXMubnpNYXhIZWlnaHQsIGJvdW5kSGVpZ2h0KTtcclxuXHJcbiAgICBpZiAodGhpcy5uekdyaWRDb2x1bW5Db3VudCAhPT0gLTEpIHtcclxuICAgICAgc3BhbldpZHRoID0gbWF4V2lkdGggLyB0aGlzLm56R3JpZENvbHVtbkNvdW50O1xyXG4gICAgICBtaW5XaWR0aCA9IHRoaXMubnpNaW5Db2x1bW4gIT09IC0xID8gc3BhbldpZHRoICogdGhpcy5uek1pbkNvbHVtbiA6IG1pbldpZHRoO1xyXG4gICAgICBtYXhXaWR0aCA9IHRoaXMubnpNYXhDb2x1bW4gIT09IC0xID8gc3BhbldpZHRoICogdGhpcy5uek1heENvbHVtbiA6IG1heFdpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyYXRpbyAhPT0gLTEpIHtcclxuICAgICAgaWYgKC8obGVmdHxyaWdodCkvaS50ZXN0KHRoaXMuY3VycmVudEhhbmRsZUV2ZW50IS5kaXJlY3Rpb24pKSB7XHJcbiAgICAgICAgbmV3V2lkdGggPSBNYXRoLm1pbihNYXRoLm1heCh3aWR0aCwgbWluV2lkdGgpLCBtYXhXaWR0aCk7XHJcbiAgICAgICAgbmV3SGVpZ2h0ID0gTWF0aC5taW4oTWF0aC5tYXgobmV3V2lkdGggLyByYXRpbywgdGhpcy5uek1pbkhlaWdodCksIG1heEhlaWdodCk7XHJcbiAgICAgICAgaWYgKG5ld0hlaWdodCA+PSBtYXhIZWlnaHQgfHwgbmV3SGVpZ2h0IDw9IHRoaXMubnpNaW5IZWlnaHQpIHtcclxuICAgICAgICAgIG5ld1dpZHRoID0gTWF0aC5taW4oTWF0aC5tYXgobmV3SGVpZ2h0ICogcmF0aW8sIG1pbldpZHRoKSwgbWF4V2lkdGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuZXdIZWlnaHQgPSBNYXRoLm1pbihNYXRoLm1heChoZWlnaHQsIHRoaXMubnpNaW5IZWlnaHQpLCBtYXhIZWlnaHQpO1xyXG4gICAgICAgIG5ld1dpZHRoID0gTWF0aC5taW4oTWF0aC5tYXgobmV3SGVpZ2h0ICogcmF0aW8sIG1pbldpZHRoKSwgbWF4V2lkdGgpO1xyXG4gICAgICAgIGlmIChuZXdXaWR0aCA+PSBtYXhXaWR0aCB8fCBuZXdXaWR0aCA8PSBtaW5XaWR0aCkge1xyXG4gICAgICAgICAgbmV3SGVpZ2h0ID0gTWF0aC5taW4oTWF0aC5tYXgobmV3V2lkdGggLyByYXRpbywgdGhpcy5uek1pbkhlaWdodCksIG1heEhlaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuZXdXaWR0aCA9IE1hdGgubWluKE1hdGgubWF4KHdpZHRoLCBtaW5XaWR0aCksIG1heFdpZHRoKTtcclxuICAgICAgbmV3SGVpZ2h0ID0gTWF0aC5taW4oTWF0aC5tYXgoaGVpZ2h0LCB0aGlzLm56TWluSGVpZ2h0KSwgbWF4SGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5uekdyaWRDb2x1bW5Db3VudCAhPT0gLTEpIHtcclxuICAgICAgY29sID0gTWF0aC5yb3VuZChuZXdXaWR0aCAvIHNwYW5XaWR0aCk7XHJcbiAgICAgIG5ld1dpZHRoID0gY29sICogc3BhbldpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNvbCxcclxuICAgICAgd2lkdGg6IG5ld1dpZHRoLFxyXG4gICAgICBoZWlnaHQ6IG5ld0hlaWdodFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHNldEN1cnNvcigpOiB2b2lkIHtcclxuICAgIHN3aXRjaCAodGhpcy5jdXJyZW50SGFuZGxlRXZlbnQhLmRpcmVjdGlvbikge1xyXG4gICAgICBjYXNlICdsZWZ0JzpcclxuICAgICAgY2FzZSAncmlnaHQnOlxyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZG9jdW1lbnQuYm9keSwgJ2N1cnNvcicsICdjb2wtcmVzaXplJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3RvcCc6XHJcbiAgICAgIGNhc2UgJ2JvdHRvbSc6XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShkb2N1bWVudC5ib2R5LCAnY3Vyc29yJywgJ3Jvdy1yZXNpemUnKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAndG9wTGVmdCc6XHJcbiAgICAgIGNhc2UgJ2JvdHRvbVJpZ2h0JzpcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGRvY3VtZW50LmJvZHksICdjdXJzb3InLCAnbndzZS1yZXNpemUnKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAndG9wUmlnaHQnOlxyXG4gICAgICBjYXNlICdib3R0b21MZWZ0JzpcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGRvY3VtZW50LmJvZHksICdjdXJzb3InLCAnbmVzdy1yZXNpemUnKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZG9jdW1lbnQuYm9keSwgJ3VzZXItc2VsZWN0JywgJ25vbmUnKTtcclxuICB9XHJcblxyXG4gIHJlc2l6ZShldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IGVsUmVjdCA9IHRoaXMuZWxSZWN0O1xyXG4gICAgY29uc3QgcmVzaXplRXZlbnQgPSBnZXRFdmVudFdpdGhQb2ludChldmVudCk7XHJcbiAgICBjb25zdCBoYW5kbGVFdmVudCA9IGdldEV2ZW50V2l0aFBvaW50KHRoaXMuY3VycmVudEhhbmRsZUV2ZW50IS5tb3VzZUV2ZW50KTtcclxuICAgIGxldCB3aWR0aCA9IGVsUmVjdC53aWR0aDtcclxuICAgIGxldCBoZWlnaHQgPSBlbFJlY3QuaGVpZ2h0O1xyXG4gICAgY29uc3QgcmF0aW8gPSB0aGlzLm56TG9ja0FzcGVjdFJhdGlvID8gd2lkdGggLyBoZWlnaHQgOiAtMTtcclxuICAgIHN3aXRjaCAodGhpcy5jdXJyZW50SGFuZGxlRXZlbnQhLmRpcmVjdGlvbikge1xyXG4gICAgICBjYXNlICdib3R0b21SaWdodCc6XHJcbiAgICAgICAgd2lkdGggPSByZXNpemVFdmVudC5jbGllbnRYIC0gZWxSZWN0LmxlZnQ7XHJcbiAgICAgICAgaGVpZ2h0ID0gcmVzaXplRXZlbnQuY2xpZW50WSAtIGVsUmVjdC50b3A7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2JvdHRvbUxlZnQnOlxyXG4gICAgICAgIHdpZHRoID0gZWxSZWN0LndpZHRoICsgaGFuZGxlRXZlbnQuY2xpZW50WCAtIHJlc2l6ZUV2ZW50LmNsaWVudFg7XHJcbiAgICAgICAgaGVpZ2h0ID0gcmVzaXplRXZlbnQuY2xpZW50WSAtIGVsUmVjdC50b3A7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3RvcFJpZ2h0JzpcclxuICAgICAgICB3aWR0aCA9IHJlc2l6ZUV2ZW50LmNsaWVudFggLSBlbFJlY3QubGVmdDtcclxuICAgICAgICBoZWlnaHQgPSBlbFJlY3QuaGVpZ2h0ICsgaGFuZGxlRXZlbnQuY2xpZW50WSAtIHJlc2l6ZUV2ZW50LmNsaWVudFk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3RvcExlZnQnOlxyXG4gICAgICAgIHdpZHRoID0gZWxSZWN0LndpZHRoICsgaGFuZGxlRXZlbnQuY2xpZW50WCAtIHJlc2l6ZUV2ZW50LmNsaWVudFg7XHJcbiAgICAgICAgaGVpZ2h0ID0gZWxSZWN0LmhlaWdodCArIGhhbmRsZUV2ZW50LmNsaWVudFkgLSByZXNpemVFdmVudC5jbGllbnRZO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICd0b3AnOlxyXG4gICAgICAgIGhlaWdodCA9IGVsUmVjdC5oZWlnaHQgKyBoYW5kbGVFdmVudC5jbGllbnRZIC0gcmVzaXplRXZlbnQuY2xpZW50WTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAncmlnaHQnOlxyXG4gICAgICAgIHdpZHRoID0gcmVzaXplRXZlbnQuY2xpZW50WCAtIGVsUmVjdC5sZWZ0O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdib3R0b20nOlxyXG4gICAgICAgIGhlaWdodCA9IHJlc2l6ZUV2ZW50LmNsaWVudFkgLSBlbFJlY3QudG9wO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdsZWZ0JzpcclxuICAgICAgICB3aWR0aCA9IGVsUmVjdC53aWR0aCArIGhhbmRsZUV2ZW50LmNsaWVudFggLSByZXNpemVFdmVudC5jbGllbnRYO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2l6ZSA9IHRoaXMuY2FsY1NpemUod2lkdGgsIGhlaWdodCwgcmF0aW8pO1xyXG4gICAgdGhpcy5zaXplQ2FjaGUgPSB7IC4uLnNpemUgfTtcclxuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgIHRoaXMubnpSZXNpemUuZW1pdCh7XHJcbiAgICAgICAgLi4uc2l6ZSxcclxuICAgICAgICBtb3VzZUV2ZW50OiBldmVudFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgaWYgKHRoaXMubnpQcmV2aWV3KSB7XHJcbiAgICAgIHRoaXMucHJldmlld1Jlc2l6ZShzaXplKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGVuZFJlc2l6ZShldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZG9jdW1lbnQuYm9keSwgJ2N1cnNvcicsICcnKTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZG9jdW1lbnQuYm9keSwgJ3VzZXItc2VsZWN0JywgJycpO1xyXG4gICAgdGhpcy5yZW1vdmVHaG9zdEVsZW1lbnQoKTtcclxuICAgIGNvbnN0IHNpemUgPSB0aGlzLnNpemVDYWNoZVxyXG4gICAgICA/IHsgLi4udGhpcy5zaXplQ2FjaGUgfVxyXG4gICAgICA6IHtcclxuICAgICAgICAgIHdpZHRoOiB0aGlzLmVsUmVjdC53aWR0aCxcclxuICAgICAgICAgIGhlaWdodDogdGhpcy5lbFJlY3QuaGVpZ2h0XHJcbiAgICAgICAgfTtcclxuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgIHRoaXMubnpSZXNpemVFbmQuZW1pdCh7XHJcbiAgICAgICAgLi4uc2l6ZSxcclxuICAgICAgICBtb3VzZUV2ZW50OiBldmVudFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zaXplQ2FjaGUgPSBudWxsO1xyXG4gICAgdGhpcy5jdXJyZW50SGFuZGxlRXZlbnQgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHJldmlld1Jlc2l6ZSh7IHdpZHRoLCBoZWlnaHQgfTogTnpSZXNpemVFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5jcmVhdGVHaG9zdEVsZW1lbnQoKTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5naG9zdEVsZW1lbnQsICd3aWR0aCcsIGAke3dpZHRofXB4YCk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZ2hvc3RFbGVtZW50LCAnaGVpZ2h0JywgYCR7aGVpZ2h0fXB4YCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVHaG9zdEVsZW1lbnQoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuZ2hvc3RFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuZ2hvc3RFbGVtZW50ID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5naG9zdEVsZW1lbnQsICdjbGFzcycsICduei1yZXNpemFibGUtcHJldmlldycpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmVsLCB0aGlzLmdob3N0RWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVHaG9zdEVsZW1lbnQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5naG9zdEVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLmVsLCB0aGlzLmdob3N0RWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgdGhpcy5lbCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgICB0aGlzLnNldFBvc2l0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZ2hvc3RFbGVtZW50ID0gbnVsbDtcclxuICAgIHRoaXMuc2l6ZUNhY2hlID0gbnVsbDtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=