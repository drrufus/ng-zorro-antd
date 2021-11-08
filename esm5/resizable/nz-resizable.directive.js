/**
 * @fileoverview added by tsickle
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
import { Platform } from '@angular/cdk/platform';
import { Directive, ElementRef, EventEmitter, Input, NgZone, Output, Renderer2 } from '@angular/core';
import { ensureInBounds, InputBoolean } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { getEventWithPoint } from './nz-resizable-utils';
import { NzResizableService } from './nz-resizable.service';
/**
 * @record
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/platform';
export function NzResizeEvent() { }
if (false) {
    /** @type {?|undefined} */
    NzResizeEvent.prototype.width;
    /** @type {?|undefined} */
    NzResizeEvent.prototype.height;
    /** @type {?|undefined} */
    NzResizeEvent.prototype.col;
    /** @type {?|undefined} */
    NzResizeEvent.prototype.mouseEvent;
}
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
        this.nzResizableService.handleMouseDown$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.resizing = true;
            _this.nzResizableService.startResizing(event.mouseEvent);
            _this.currentHandleEvent = event;
            _this.setCursor();
            _this.nzResizeStart.emit({
                mouseEvent: event.mouseEvent
            });
            _this.elRect = _this.el.getBoundingClientRect();
        }));
        this.nzResizableService.documentMouseUp$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (_this.resizing) {
                _this.resizing = false;
                _this.nzResizableService.documentMouseUp$.next();
                _this.endResize(event);
            }
        }));
        this.nzResizableService.documentMouseMove$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (_this.resizing) {
                _this.resize(event);
            }
        }));
    }
    /**
     * @return {?}
     */
    NzResizableDirective.prototype.onMouseenter = /**
     * @return {?}
     */
    function () {
        this.nzResizableService.mouseEntered$.next(true);
    };
    /**
     * @return {?}
     */
    NzResizableDirective.prototype.onMouseleave = /**
     * @return {?}
     */
    function () {
        this.nzResizableService.mouseEntered$.next(false);
    };
    /**
     * @return {?}
     */
    NzResizableDirective.prototype.setPosition = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var position = getComputedStyle(this.el).position;
        if (position === 'static' || !position) {
            this.renderer.setStyle(this.el, 'position', 'relative');
        }
    };
    /**
     * @param {?} width
     * @param {?} height
     * @param {?} ratio
     * @return {?}
     */
    NzResizableDirective.prototype.calcSize = /**
     * @param {?} width
     * @param {?} height
     * @param {?} ratio
     * @return {?}
     */
    function (width, height, ratio) {
        /** @type {?} */
        var newWidth;
        /** @type {?} */
        var newHeight;
        /** @type {?} */
        var maxWidth;
        /** @type {?} */
        var maxHeight;
        /** @type {?} */
        var col = 0;
        /** @type {?} */
        var spanWidth = 0;
        /** @type {?} */
        var minWidth = this.nzMinWidth;
        /** @type {?} */
        var boundWidth = Infinity;
        /** @type {?} */
        var boundHeight = Infinity;
        if (this.nzBounds === 'parent') {
            /** @type {?} */
            var parent_1 = this.renderer.parentNode(this.el);
            if (parent_1 instanceof HTMLElement) {
                /** @type {?} */
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
            /** @type {?} */
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
            if (/(left|right)/i.test((/** @type {?} */ (this.currentHandleEvent)).direction)) {
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
    /**
     * @return {?}
     */
    NzResizableDirective.prototype.setCursor = /**
     * @return {?}
     */
    function () {
        switch ((/** @type {?} */ (this.currentHandleEvent)).direction) {
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
    /**
     * @param {?} event
     * @return {?}
     */
    NzResizableDirective.prototype.resize = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        /** @type {?} */
        var elRect = this.elRect;
        /** @type {?} */
        var resizeEvent = getEventWithPoint(event);
        /** @type {?} */
        var handleEvent = getEventWithPoint((/** @type {?} */ (this.currentHandleEvent)).mouseEvent);
        /** @type {?} */
        var width = elRect.width;
        /** @type {?} */
        var height = elRect.height;
        /** @type {?} */
        var ratio = this.nzLockAspectRatio ? width / height : -1;
        switch ((/** @type {?} */ (this.currentHandleEvent)).direction) {
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
        /** @type {?} */
        var size = this.calcSize(width, height, ratio);
        this.sizeCache = tslib_1.__assign({}, size);
        this.ngZone.run((/**
         * @return {?}
         */
        function () {
            _this.nzResize.emit(tslib_1.__assign({}, size, { mouseEvent: event }));
        }));
        if (this.nzPreview) {
            this.previewResize(size);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzResizableDirective.prototype.endResize = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        this.renderer.setStyle(document.body, 'cursor', '');
        this.renderer.setStyle(document.body, 'user-select', '');
        this.removeGhostElement();
        /** @type {?} */
        var size = this.sizeCache
            ? tslib_1.__assign({}, this.sizeCache) : {
            width: this.elRect.width,
            height: this.elRect.height
        };
        this.ngZone.run((/**
         * @return {?}
         */
        function () {
            _this.nzResizeEnd.emit(tslib_1.__assign({}, size, { mouseEvent: event }));
        }));
        this.sizeCache = null;
        this.currentHandleEvent = null;
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    NzResizableDirective.prototype.previewResize = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var width = _a.width, height = _a.height;
        this.createGhostElement();
        this.renderer.setStyle(this.ghostElement, 'width', width + "px");
        this.renderer.setStyle(this.ghostElement, 'height', height + "px");
    };
    /**
     * @return {?}
     */
    NzResizableDirective.prototype.createGhostElement = /**
     * @return {?}
     */
    function () {
        if (!this.ghostElement) {
            this.ghostElement = this.renderer.createElement('div');
            this.renderer.setAttribute(this.ghostElement, 'class', 'nz-resizable-preview');
        }
        this.renderer.appendChild(this.el, this.ghostElement);
    };
    /**
     * @return {?}
     */
    NzResizableDirective.prototype.removeGhostElement = /**
     * @return {?}
     */
    function () {
        if (this.ghostElement) {
            this.renderer.removeChild(this.el, this.ghostElement);
        }
    };
    /**
     * @return {?}
     */
    NzResizableDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.platform.isBrowser) {
            this.el = this.elementRef.nativeElement;
            this.setPosition();
        }
    };
    /**
     * @return {?}
     */
    NzResizableDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.ghostElement = null;
        this.sizeCache = null;
        this.destroy$.next();
        this.destroy$.complete();
    };
    /** @nocollapse */
    NzResizableDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: NzResizableService },
        { type: Platform },
        { type: NgZone }
    ]; };
    NzResizableDirective.propDecorators = {
        nzBounds: [{ type: Input }],
        nzMaxHeight: [{ type: Input }],
        nzMaxWidth: [{ type: Input }],
        nzMinHeight: [{ type: Input }],
        nzMinWidth: [{ type: Input }],
        nzGridColumnCount: [{ type: Input }],
        nzMaxColumn: [{ type: Input }],
        nzMinColumn: [{ type: Input }],
        nzLockAspectRatio: [{ type: Input }],
        nzPreview: [{ type: Input }],
        nzResize: [{ type: Output }],
        nzResizeEnd: [{ type: Output }],
        nzResizeStart: [{ type: Output }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzResizableDirective.prototype, "nzLockAspectRatio", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzResizableDirective.prototype, "nzPreview", void 0);
NzResizableDirective.ɵfac = function NzResizableDirective_Factory(t) { return new (t || NzResizableDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(NzResizableService), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Platform), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
NzResizableDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzResizableDirective, selectors: [["", "nz-resizable", ""]], hostVars: 4, hostBindings: function NzResizableDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("mouseenter", function NzResizableDirective_mouseenter_HostBindingHandler() { return ctx.onMouseenter(); })("mouseleave", function NzResizableDirective_mouseleave_HostBindingHandler() { return ctx.onMouseleave(); });
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("nz-resizable", true)("nz-resizable-resizing", ctx.resizing);
    } }, inputs: { nzBounds: "nzBounds", nzMinHeight: "nzMinHeight", nzMinWidth: "nzMinWidth", nzGridColumnCount: "nzGridColumnCount", nzMaxColumn: "nzMaxColumn", nzMinColumn: "nzMinColumn", nzLockAspectRatio: "nzLockAspectRatio", nzPreview: "nzPreview", nzMaxHeight: "nzMaxHeight", nzMaxWidth: "nzMaxWidth" }, outputs: { nzResize: "nzResize", nzResizeEnd: "nzResizeEnd", nzResizeStart: "nzResizeStart" }, exportAs: ["nzResizable"], features: [ɵngcc0.ɵɵProvidersFeature([NzResizableService])] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzResizableDirective, [{
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
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: NzResizableService }, { type: ɵngcc1.Platform }, { type: ɵngcc0.NgZone }]; }, { nzBounds: [{
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
        }], nzMaxHeight: [{
            type: Input
        }], nzMaxWidth: [{
            type: Input
        }] }); })();
    return NzResizableDirective;
}());
export { NzResizableDirective };
if (false) {
    /** @type {?} */
    NzResizableDirective.prototype.nzBounds;
    /** @type {?} */
    NzResizableDirective.prototype.nzMaxHeight;
    /** @type {?} */
    NzResizableDirective.prototype.nzMaxWidth;
    /** @type {?} */
    NzResizableDirective.prototype.nzMinHeight;
    /** @type {?} */
    NzResizableDirective.prototype.nzMinWidth;
    /** @type {?} */
    NzResizableDirective.prototype.nzGridColumnCount;
    /** @type {?} */
    NzResizableDirective.prototype.nzMaxColumn;
    /** @type {?} */
    NzResizableDirective.prototype.nzMinColumn;
    /** @type {?} */
    NzResizableDirective.prototype.nzLockAspectRatio;
    /** @type {?} */
    NzResizableDirective.prototype.nzPreview;
    /** @type {?} */
    NzResizableDirective.prototype.nzResize;
    /** @type {?} */
    NzResizableDirective.prototype.nzResizeEnd;
    /** @type {?} */
    NzResizableDirective.prototype.nzResizeStart;
    /** @type {?} */
    NzResizableDirective.prototype.resizing;
    /**
     * @type {?}
     * @private
     */
    NzResizableDirective.prototype.elRect;
    /**
     * @type {?}
     * @private
     */
    NzResizableDirective.prototype.currentHandleEvent;
    /**
     * @type {?}
     * @private
     */
    NzResizableDirective.prototype.ghostElement;
    /**
     * @type {?}
     * @private
     */
    NzResizableDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NzResizableDirective.prototype.sizeCache;
    /**
     * @type {?}
     * @private
     */
    NzResizableDirective.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzResizableDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzResizableDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzResizableDirective.prototype.nzResizableService;
    /**
     * @type {?}
     * @private
     */
    NzResizableDirective.prototype.platform;
    /**
     * @type {?}
     * @private
     */
    NzResizableDirective.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmVzaXphYmxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXMiOlsibmc6L25nLXpvcnJvLWFudGQvcmVzaXphYmxlL256LXJlc2l6YWJsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUVOLE1BQU0sRUFDTixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7O0FBRzVELG1DQUtDOzs7SUFKQyw4QkFBZTs7SUFDZiwrQkFBZ0I7O0lBQ2hCLDRCQUFhOztJQUNiLG1DQUFxQzs7QUFHdkM7SUFrQ0UsOEJBQ1UsVUFBbUMsRUFDbkMsUUFBbUIsRUFDbkIsa0JBQXNDLEVBQ3RDLFFBQWtCLEVBQ2xCLE1BQWM7UUFMeEIsaUJBK0JDO1FBOUJTLGVBQVUsR0FBVixVQUFVLENBQXlCO1FBQ25DLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLFdBQU0sR0FBTixNQUFNLENBQVE7UUEzQmYsYUFBUSxHQUFrRCxRQUFRLENBQUM7UUFHbkUsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4Qixz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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFDdEQ7SUE0UEEsMkJBQUM7Q0FBQSxBQWxSRCxJQWtSQztTQXZRWSxvQkFBb0I7OztJQUMvQix3Q0FBNEU7O0lBQzVFLDJDQUE2Qjs7SUFDN0IsMENBQTRCOztJQUM1QiwyQ0FBa0M7O0lBQ2xDLDBDQUFpQzs7SUFDakMsaURBQXdDOztJQUN4QywyQ0FBa0M7O0lBQ2xDLDJDQUFrQzs7SUFDbEMsaURBQTREOztJQUM1RCx5Q0FBb0Q7O0lBQ3BELHdDQUFnRTs7SUFDaEUsMkNBQW1FOztJQUNuRSw2Q0FBcUU7O0lBRXJFLHdDQUFpQjs7Ozs7SUFDakIsc0NBQXFDOzs7OztJQUNyQyxrREFBZ0U7Ozs7O0lBQ2hFLDRDQUE0Qzs7Ozs7SUFDNUMsa0NBQXdCOzs7OztJQUN4Qix5Q0FBd0M7Ozs7O0lBQ3hDLHdDQUF1Qzs7Ozs7SUFHckMsMENBQTJDOzs7OztJQUMzQyx3Q0FBMkI7Ozs7O0lBQzNCLGtEQUE4Qzs7Ozs7SUFDOUMsd0NBQTBCOzs7OztJQUMxQixzQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT25EZXN0cm95LFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGVuc3VyZUluQm91bmRzLCBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IGdldEV2ZW50V2l0aFBvaW50IH0gZnJvbSAnLi9uei1yZXNpemFibGUtdXRpbHMnO1xyXG5pbXBvcnQgeyBOelJlc2l6YWJsZVNlcnZpY2UgfSBmcm9tICcuL256LXJlc2l6YWJsZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTnpSZXNpemVIYW5kbGVNb3VzZURvd25FdmVudCB9IGZyb20gJy4vbnotcmVzaXplLWhhbmRsZS5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBOelJlc2l6ZUV2ZW50IHtcclxuICB3aWR0aD86IG51bWJlcjtcclxuICBoZWlnaHQ/OiBudW1iZXI7XHJcbiAgY29sPzogbnVtYmVyO1xyXG4gIG1vdXNlRXZlbnQ/OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudDtcclxufVxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbnotcmVzaXphYmxlXScsXHJcbiAgZXhwb3J0QXM6ICduelJlc2l6YWJsZScsXHJcbiAgcHJvdmlkZXJzOiBbTnpSZXNpemFibGVTZXJ2aWNlXSxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLm56LXJlc2l6YWJsZV0nOiAndHJ1ZScsXHJcbiAgICAnW2NsYXNzLm56LXJlc2l6YWJsZS1yZXNpemluZ10nOiAncmVzaXppbmcnLFxyXG4gICAgJyhtb3VzZWVudGVyKSc6ICdvbk1vdXNlZW50ZXIoKScsXHJcbiAgICAnKG1vdXNlbGVhdmUpJzogJ29uTW91c2VsZWF2ZSgpJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56UmVzaXphYmxlRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBuekJvdW5kczogJ3dpbmRvdycgfCAncGFyZW50JyB8IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+ID0gJ3BhcmVudCc7XHJcbiAgQElucHV0KCkgbnpNYXhIZWlnaHQ6IG51bWJlcjtcclxuICBASW5wdXQoKSBuek1heFdpZHRoOiBudW1iZXI7XHJcbiAgQElucHV0KCkgbnpNaW5IZWlnaHQ6IG51bWJlciA9IDQwO1xyXG4gIEBJbnB1dCgpIG56TWluV2lkdGg6IG51bWJlciA9IDQwO1xyXG4gIEBJbnB1dCgpIG56R3JpZENvbHVtbkNvdW50OiBudW1iZXIgPSAtMTtcclxuICBASW5wdXQoKSBuek1heENvbHVtbjogbnVtYmVyID0gLTE7XHJcbiAgQElucHV0KCkgbnpNaW5Db2x1bW46IG51bWJlciA9IC0xO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekxvY2tBc3BlY3RSYXRpbzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelByZXZpZXc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpSZXNpemUgPSBuZXcgRXZlbnRFbWl0dGVyPE56UmVzaXplRXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56UmVzaXplRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxOelJlc2l6ZUV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelJlc2l6ZVN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxOelJlc2l6ZUV2ZW50PigpO1xyXG5cclxuICByZXNpemluZyA9IGZhbHNlO1xyXG4gIHByaXZhdGUgZWxSZWN0OiBDbGllbnRSZWN0IHwgRE9NUmVjdDtcclxuICBwcml2YXRlIGN1cnJlbnRIYW5kbGVFdmVudDogTnpSZXNpemVIYW5kbGVNb3VzZURvd25FdmVudCB8IG51bGw7XHJcbiAgcHJpdmF0ZSBnaG9zdEVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50IHwgbnVsbDtcclxuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudDtcclxuICBwcml2YXRlIHNpemVDYWNoZTogTnpSZXNpemVFdmVudCB8IG51bGw7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgbnpSZXNpemFibGVTZXJ2aWNlOiBOelJlc2l6YWJsZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcclxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmVcclxuICApIHtcclxuICAgIHRoaXMubnpSZXNpemFibGVTZXJ2aWNlLmhhbmRsZU1vdXNlRG93biQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShldmVudCA9PiB7XHJcbiAgICAgIHRoaXMucmVzaXppbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLm56UmVzaXphYmxlU2VydmljZS5zdGFydFJlc2l6aW5nKGV2ZW50Lm1vdXNlRXZlbnQpO1xyXG4gICAgICB0aGlzLmN1cnJlbnRIYW5kbGVFdmVudCA9IGV2ZW50O1xyXG4gICAgICB0aGlzLnNldEN1cnNvcigpO1xyXG4gICAgICB0aGlzLm56UmVzaXplU3RhcnQuZW1pdCh7XHJcbiAgICAgICAgbW91c2VFdmVudDogZXZlbnQubW91c2VFdmVudFxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5lbFJlY3QgPSB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5uelJlc2l6YWJsZVNlcnZpY2UuZG9jdW1lbnRNb3VzZVVwJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuICAgICAgaWYgKHRoaXMucmVzaXppbmcpIHtcclxuICAgICAgICB0aGlzLnJlc2l6aW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5uelJlc2l6YWJsZVNlcnZpY2UuZG9jdW1lbnRNb3VzZVVwJC5uZXh0KCk7XHJcbiAgICAgICAgdGhpcy5lbmRSZXNpemUoZXZlbnQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm56UmVzaXphYmxlU2VydmljZS5kb2N1bWVudE1vdXNlTW92ZSQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShldmVudCA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnJlc2l6aW5nKSB7XHJcbiAgICAgICAgdGhpcy5yZXNpemUoZXZlbnQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uTW91c2VlbnRlcigpOiB2b2lkIHtcclxuICAgIHRoaXMubnpSZXNpemFibGVTZXJ2aWNlLm1vdXNlRW50ZXJlZCQubmV4dCh0cnVlKTtcclxuICB9XHJcblxyXG4gIG9uTW91c2VsZWF2ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMubnpSZXNpemFibGVTZXJ2aWNlLm1vdXNlRW50ZXJlZCQubmV4dChmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBzZXRQb3NpdGlvbigpOiB2b2lkIHtcclxuICAgIGNvbnN0IHBvc2l0aW9uID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsKS5wb3NpdGlvbjtcclxuICAgIGlmIChwb3NpdGlvbiA9PT0gJ3N0YXRpYycgfHwgIXBvc2l0aW9uKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ3Bvc2l0aW9uJywgJ3JlbGF0aXZlJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjYWxjU2l6ZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgcmF0aW86IG51bWJlcik6IE56UmVzaXplRXZlbnQge1xyXG4gICAgbGV0IG5ld1dpZHRoOiBudW1iZXI7XHJcbiAgICBsZXQgbmV3SGVpZ2h0OiBudW1iZXI7XHJcbiAgICBsZXQgbWF4V2lkdGg6IG51bWJlcjtcclxuICAgIGxldCBtYXhIZWlnaHQ6IG51bWJlcjtcclxuICAgIGxldCBjb2wgPSAwO1xyXG4gICAgbGV0IHNwYW5XaWR0aCA9IDA7XHJcbiAgICBsZXQgbWluV2lkdGggPSB0aGlzLm56TWluV2lkdGg7XHJcbiAgICBsZXQgYm91bmRXaWR0aCA9IEluZmluaXR5O1xyXG4gICAgbGV0IGJvdW5kSGVpZ2h0ID0gSW5maW5pdHk7XHJcbiAgICBpZiAodGhpcy5uekJvdW5kcyA9PT0gJ3BhcmVudCcpIHtcclxuICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5yZW5kZXJlci5wYXJlbnROb2RlKHRoaXMuZWwpO1xyXG4gICAgICBpZiAocGFyZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBwYXJlbnRSZWN0ID0gcGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIGJvdW5kV2lkdGggPSBwYXJlbnRSZWN0LndpZHRoO1xyXG4gICAgICAgIGJvdW5kSGVpZ2h0ID0gcGFyZW50UmVjdC5oZWlnaHQ7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodGhpcy5uekJvdW5kcyA9PT0gJ3dpbmRvdycpIHtcclxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgYm91bmRXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIGJvdW5kSGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMubnpCb3VuZHMgJiYgdGhpcy5uekJvdW5kcy5uYXRpdmVFbGVtZW50ICYmIHRoaXMubnpCb3VuZHMubmF0aXZlRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XHJcbiAgICAgIGNvbnN0IGJvdW5kc1JlY3QgPSB0aGlzLm56Qm91bmRzLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgIGJvdW5kV2lkdGggPSBib3VuZHNSZWN0LndpZHRoO1xyXG4gICAgICBib3VuZEhlaWdodCA9IGJvdW5kc1JlY3QuaGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIG1heFdpZHRoID0gZW5zdXJlSW5Cb3VuZHModGhpcy5uek1heFdpZHRoLCBib3VuZFdpZHRoKTtcclxuICAgIG1heEhlaWdodCA9IGVuc3VyZUluQm91bmRzKHRoaXMubnpNYXhIZWlnaHQsIGJvdW5kSGVpZ2h0KTtcclxuXHJcbiAgICBpZiAodGhpcy5uekdyaWRDb2x1bW5Db3VudCAhPT0gLTEpIHtcclxuICAgICAgc3BhbldpZHRoID0gbWF4V2lkdGggLyB0aGlzLm56R3JpZENvbHVtbkNvdW50O1xyXG4gICAgICBtaW5XaWR0aCA9IHRoaXMubnpNaW5Db2x1bW4gIT09IC0xID8gc3BhbldpZHRoICogdGhpcy5uek1pbkNvbHVtbiA6IG1pbldpZHRoO1xyXG4gICAgICBtYXhXaWR0aCA9IHRoaXMubnpNYXhDb2x1bW4gIT09IC0xID8gc3BhbldpZHRoICogdGhpcy5uek1heENvbHVtbiA6IG1heFdpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyYXRpbyAhPT0gLTEpIHtcclxuICAgICAgaWYgKC8obGVmdHxyaWdodCkvaS50ZXN0KHRoaXMuY3VycmVudEhhbmRsZUV2ZW50IS5kaXJlY3Rpb24pKSB7XHJcbiAgICAgICAgbmV3V2lkdGggPSBNYXRoLm1pbihNYXRoLm1heCh3aWR0aCwgbWluV2lkdGgpLCBtYXhXaWR0aCk7XHJcbiAgICAgICAgbmV3SGVpZ2h0ID0gTWF0aC5taW4oTWF0aC5tYXgobmV3V2lkdGggLyByYXRpbywgdGhpcy5uek1pbkhlaWdodCksIG1heEhlaWdodCk7XHJcbiAgICAgICAgaWYgKG5ld0hlaWdodCA+PSBtYXhIZWlnaHQgfHwgbmV3SGVpZ2h0IDw9IHRoaXMubnpNaW5IZWlnaHQpIHtcclxuICAgICAgICAgIG5ld1dpZHRoID0gTWF0aC5taW4oTWF0aC5tYXgobmV3SGVpZ2h0ICogcmF0aW8sIG1pbldpZHRoKSwgbWF4V2lkdGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuZXdIZWlnaHQgPSBNYXRoLm1pbihNYXRoLm1heChoZWlnaHQsIHRoaXMubnpNaW5IZWlnaHQpLCBtYXhIZWlnaHQpO1xyXG4gICAgICAgIG5ld1dpZHRoID0gTWF0aC5taW4oTWF0aC5tYXgobmV3SGVpZ2h0ICogcmF0aW8sIG1pbldpZHRoKSwgbWF4V2lkdGgpO1xyXG4gICAgICAgIGlmIChuZXdXaWR0aCA+PSBtYXhXaWR0aCB8fCBuZXdXaWR0aCA8PSBtaW5XaWR0aCkge1xyXG4gICAgICAgICAgbmV3SGVpZ2h0ID0gTWF0aC5taW4oTWF0aC5tYXgobmV3V2lkdGggLyByYXRpbywgdGhpcy5uek1pbkhlaWdodCksIG1heEhlaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuZXdXaWR0aCA9IE1hdGgubWluKE1hdGgubWF4KHdpZHRoLCBtaW5XaWR0aCksIG1heFdpZHRoKTtcclxuICAgICAgbmV3SGVpZ2h0ID0gTWF0aC5taW4oTWF0aC5tYXgoaGVpZ2h0LCB0aGlzLm56TWluSGVpZ2h0KSwgbWF4SGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5uekdyaWRDb2x1bW5Db3VudCAhPT0gLTEpIHtcclxuICAgICAgY29sID0gTWF0aC5yb3VuZChuZXdXaWR0aCAvIHNwYW5XaWR0aCk7XHJcbiAgICAgIG5ld1dpZHRoID0gY29sICogc3BhbldpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNvbCxcclxuICAgICAgd2lkdGg6IG5ld1dpZHRoLFxyXG4gICAgICBoZWlnaHQ6IG5ld0hlaWdodFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHNldEN1cnNvcigpOiB2b2lkIHtcclxuICAgIHN3aXRjaCAodGhpcy5jdXJyZW50SGFuZGxlRXZlbnQhLmRpcmVjdGlvbikge1xyXG4gICAgICBjYXNlICdsZWZ0JzpcclxuICAgICAgY2FzZSAncmlnaHQnOlxyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZG9jdW1lbnQuYm9keSwgJ2N1cnNvcicsICdjb2wtcmVzaXplJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3RvcCc6XHJcbiAgICAgIGNhc2UgJ2JvdHRvbSc6XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShkb2N1bWVudC5ib2R5LCAnY3Vyc29yJywgJ3Jvdy1yZXNpemUnKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAndG9wTGVmdCc6XHJcbiAgICAgIGNhc2UgJ2JvdHRvbVJpZ2h0JzpcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGRvY3VtZW50LmJvZHksICdjdXJzb3InLCAnbndzZS1yZXNpemUnKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAndG9wUmlnaHQnOlxyXG4gICAgICBjYXNlICdib3R0b21MZWZ0JzpcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGRvY3VtZW50LmJvZHksICdjdXJzb3InLCAnbmVzdy1yZXNpemUnKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZG9jdW1lbnQuYm9keSwgJ3VzZXItc2VsZWN0JywgJ25vbmUnKTtcclxuICB9XHJcblxyXG4gIHJlc2l6ZShldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IGVsUmVjdCA9IHRoaXMuZWxSZWN0O1xyXG4gICAgY29uc3QgcmVzaXplRXZlbnQgPSBnZXRFdmVudFdpdGhQb2ludChldmVudCk7XHJcbiAgICBjb25zdCBoYW5kbGVFdmVudCA9IGdldEV2ZW50V2l0aFBvaW50KHRoaXMuY3VycmVudEhhbmRsZUV2ZW50IS5tb3VzZUV2ZW50KTtcclxuICAgIGxldCB3aWR0aCA9IGVsUmVjdC53aWR0aDtcclxuICAgIGxldCBoZWlnaHQgPSBlbFJlY3QuaGVpZ2h0O1xyXG4gICAgY29uc3QgcmF0aW8gPSB0aGlzLm56TG9ja0FzcGVjdFJhdGlvID8gd2lkdGggLyBoZWlnaHQgOiAtMTtcclxuICAgIHN3aXRjaCAodGhpcy5jdXJyZW50SGFuZGxlRXZlbnQhLmRpcmVjdGlvbikge1xyXG4gICAgICBjYXNlICdib3R0b21SaWdodCc6XHJcbiAgICAgICAgd2lkdGggPSByZXNpemVFdmVudC5jbGllbnRYIC0gZWxSZWN0LmxlZnQ7XHJcbiAgICAgICAgaGVpZ2h0ID0gcmVzaXplRXZlbnQuY2xpZW50WSAtIGVsUmVjdC50b3A7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2JvdHRvbUxlZnQnOlxyXG4gICAgICAgIHdpZHRoID0gZWxSZWN0LndpZHRoICsgaGFuZGxlRXZlbnQuY2xpZW50WCAtIHJlc2l6ZUV2ZW50LmNsaWVudFg7XHJcbiAgICAgICAgaGVpZ2h0ID0gcmVzaXplRXZlbnQuY2xpZW50WSAtIGVsUmVjdC50b3A7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3RvcFJpZ2h0JzpcclxuICAgICAgICB3aWR0aCA9IHJlc2l6ZUV2ZW50LmNsaWVudFggLSBlbFJlY3QubGVmdDtcclxuICAgICAgICBoZWlnaHQgPSBlbFJlY3QuaGVpZ2h0ICsgaGFuZGxlRXZlbnQuY2xpZW50WSAtIHJlc2l6ZUV2ZW50LmNsaWVudFk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3RvcExlZnQnOlxyXG4gICAgICAgIHdpZHRoID0gZWxSZWN0LndpZHRoICsgaGFuZGxlRXZlbnQuY2xpZW50WCAtIHJlc2l6ZUV2ZW50LmNsaWVudFg7XHJcbiAgICAgICAgaGVpZ2h0ID0gZWxSZWN0LmhlaWdodCArIGhhbmRsZUV2ZW50LmNsaWVudFkgLSByZXNpemVFdmVudC5jbGllbnRZO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICd0b3AnOlxyXG4gICAgICAgIGhlaWdodCA9IGVsUmVjdC5oZWlnaHQgKyBoYW5kbGVFdmVudC5jbGllbnRZIC0gcmVzaXplRXZlbnQuY2xpZW50WTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAncmlnaHQnOlxyXG4gICAgICAgIHdpZHRoID0gcmVzaXplRXZlbnQuY2xpZW50WCAtIGVsUmVjdC5sZWZ0O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdib3R0b20nOlxyXG4gICAgICAgIGhlaWdodCA9IHJlc2l6ZUV2ZW50LmNsaWVudFkgLSBlbFJlY3QudG9wO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdsZWZ0JzpcclxuICAgICAgICB3aWR0aCA9IGVsUmVjdC53aWR0aCArIGhhbmRsZUV2ZW50LmNsaWVudFggLSByZXNpemVFdmVudC5jbGllbnRYO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2l6ZSA9IHRoaXMuY2FsY1NpemUod2lkdGgsIGhlaWdodCwgcmF0aW8pO1xyXG4gICAgdGhpcy5zaXplQ2FjaGUgPSB7IC4uLnNpemUgfTtcclxuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgIHRoaXMubnpSZXNpemUuZW1pdCh7XHJcbiAgICAgICAgLi4uc2l6ZSxcclxuICAgICAgICBtb3VzZUV2ZW50OiBldmVudFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgaWYgKHRoaXMubnpQcmV2aWV3KSB7XHJcbiAgICAgIHRoaXMucHJldmlld1Jlc2l6ZShzaXplKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGVuZFJlc2l6ZShldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZG9jdW1lbnQuYm9keSwgJ2N1cnNvcicsICcnKTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZG9jdW1lbnQuYm9keSwgJ3VzZXItc2VsZWN0JywgJycpO1xyXG4gICAgdGhpcy5yZW1vdmVHaG9zdEVsZW1lbnQoKTtcclxuICAgIGNvbnN0IHNpemUgPSB0aGlzLnNpemVDYWNoZVxyXG4gICAgICA/IHsgLi4udGhpcy5zaXplQ2FjaGUgfVxyXG4gICAgICA6IHtcclxuICAgICAgICAgIHdpZHRoOiB0aGlzLmVsUmVjdC53aWR0aCxcclxuICAgICAgICAgIGhlaWdodDogdGhpcy5lbFJlY3QuaGVpZ2h0XHJcbiAgICAgICAgfTtcclxuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgIHRoaXMubnpSZXNpemVFbmQuZW1pdCh7XHJcbiAgICAgICAgLi4uc2l6ZSxcclxuICAgICAgICBtb3VzZUV2ZW50OiBldmVudFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zaXplQ2FjaGUgPSBudWxsO1xyXG4gICAgdGhpcy5jdXJyZW50SGFuZGxlRXZlbnQgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHJldmlld1Jlc2l6ZSh7IHdpZHRoLCBoZWlnaHQgfTogTnpSZXNpemVFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5jcmVhdGVHaG9zdEVsZW1lbnQoKTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5naG9zdEVsZW1lbnQsICd3aWR0aCcsIGAke3dpZHRofXB4YCk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZ2hvc3RFbGVtZW50LCAnaGVpZ2h0JywgYCR7aGVpZ2h0fXB4YCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVHaG9zdEVsZW1lbnQoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuZ2hvc3RFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuZ2hvc3RFbGVtZW50ID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5naG9zdEVsZW1lbnQsICdjbGFzcycsICduei1yZXNpemFibGUtcHJldmlldycpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmVsLCB0aGlzLmdob3N0RWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVHaG9zdEVsZW1lbnQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5naG9zdEVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLmVsLCB0aGlzLmdob3N0RWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgdGhpcy5lbCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgICB0aGlzLnNldFBvc2l0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZ2hvc3RFbGVtZW50ID0gbnVsbDtcclxuICAgIHRoaXMuc2l6ZUNhY2hlID0gbnVsbDtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=