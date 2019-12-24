import { DOCUMENT, NgForOf, CommonModule } from '@angular/common';
import { ɵɵinject, NgZone, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, Inject, EventEmitter, ɵɵdirectiveInject, ElementRef, Renderer2, ɵɵdefineDirective, ɵɵallocHostVars, ɵɵlistener, ɵɵclassProp, ɵɵProvidersFeature, Directive, Input, Output, ChangeDetectorRef, ɵɵdefineComponent, ɵɵclassMap, ɵɵprojectionDef, ɵɵprojection, Component, ChangeDetectionStrategy, ɵɵelement, ɵɵproperty, ɵɵNgOnChangesFeature, ɵɵtemplate, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { __decorate, __metadata } from 'tslib';
import { Platform } from '@angular/cdk/platform';
import { isTouchEvent, ensureInBounds, InputBoolean } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function getEventWithPoint(event) {
    return isTouchEvent(event) ? event.touches[0] || event.changedTouches[0] : event;
}

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzResizableService {
    // tslint:disable-next-line:no-any
    constructor(ngZone, document) {
        this.ngZone = ngZone;
        this.listeners = new Map();
        this.handleMouseDown$ = new Subject();
        this.documentMouseUp$ = new Subject();
        this.documentMouseMove$ = new Subject();
        this.mouseEntered$ = new Subject();
        this.document = document;
    }
    startResizing(event) {
        const _isTouchEvent = isTouchEvent(event);
        this.clearListeners();
        const moveEvent = _isTouchEvent ? 'touchmove' : 'mousemove';
        const upEvent = _isTouchEvent ? 'touchend' : 'mouseup';
        const moveEventHandler = (e) => {
            this.documentMouseMove$.next(e);
        };
        const upEventHandler = (e) => {
            this.documentMouseUp$.next(e);
            this.clearListeners();
        };
        this.listeners.set(moveEvent, moveEventHandler);
        this.listeners.set(upEvent, upEventHandler);
        this.ngZone.runOutsideAngular(() => {
            this.listeners.forEach((handler, name) => {
                this.document.addEventListener(name, handler);
            });
        });
    }
    clearListeners() {
        this.listeners.forEach((handler, name) => {
            this.document.removeEventListener(name, handler);
        });
        this.listeners.clear();
    }
    ngOnDestroy() {
        this.handleMouseDown$.complete();
        this.documentMouseUp$.complete();
        this.documentMouseMove$.complete();
        this.mouseEntered$.complete();
        this.clearListeners();
    }
}
/** @nocollapse */ NzResizableService.ɵfac = function NzResizableService_Factory(t) { return new (t || NzResizableService)(ɵɵinject(NgZone), ɵɵinject(DOCUMENT)); };
/** @nocollapse */ NzResizableService.ɵprov = ɵɵdefineInjectable({ token: NzResizableService, factory: NzResizableService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzResizableService, [{
        type: Injectable
    }], function () { return [{ type: NgZone }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();

class NzResizableDirective {
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
/** @nocollapse */ NzResizableDirective.ɵfac = function NzResizableDirective_Factory(t) { return new (t || NzResizableDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NzResizableService), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(NgZone)); };
/** @nocollapse */ NzResizableDirective.ɵdir = ɵɵdefineDirective({ type: NzResizableDirective, selectors: [["", "nz-resizable", ""]], hostBindings: function NzResizableDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        ɵɵallocHostVars(2);
        ɵɵlistener("mouseenter", function NzResizableDirective_mouseenter_HostBindingHandler($event) { return ctx.onMouseenter(); })("mouseleave", function NzResizableDirective_mouseleave_HostBindingHandler($event) { return ctx.onMouseleave(); });
    } if (rf & 2) {
        ɵɵclassProp("nz-resizable", true)("nz-resizable-resizing", ctx.resizing);
    } }, inputs: { nzBounds: "nzBounds", nzMaxHeight: "nzMaxHeight", nzMaxWidth: "nzMaxWidth", nzMinHeight: "nzMinHeight", nzMinWidth: "nzMinWidth", nzGridColumnCount: "nzGridColumnCount", nzMaxColumn: "nzMaxColumn", nzMinColumn: "nzMinColumn", nzLockAspectRatio: "nzLockAspectRatio", nzPreview: "nzPreview" }, outputs: { nzResize: "nzResize", nzResizeEnd: "nzResizeEnd", nzResizeStart: "nzResizeStart" }, exportAs: ["nzResizable"], features: [ɵɵProvidersFeature([NzResizableService])] });
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzResizableDirective.prototype, "nzLockAspectRatio", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzResizableDirective.prototype, "nzPreview", void 0);
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzResizableDirective, [{
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
    }], function () { return [{ type: ElementRef }, { type: Renderer2 }, { type: NzResizableService }, { type: Platform }, { type: NgZone }]; }, { nzBounds: [{
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

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const _c0 = ["*"];
class NzResizeHandleMouseDownEvent {
    constructor(direction, mouseEvent) {
        this.direction = direction;
        this.mouseEvent = mouseEvent;
    }
}
class NzResizeHandleComponent {
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
/** @nocollapse */ NzResizeHandleComponent.ɵfac = function NzResizeHandleComponent_Factory(t) { return new (t || NzResizeHandleComponent)(ɵɵdirectiveInject(NzResizableService), ɵɵdirectiveInject(ChangeDetectorRef)); };
/** @nocollapse */ NzResizeHandleComponent.ɵcmp = ɵɵdefineComponent({ type: NzResizeHandleComponent, selectors: [["nz-resize-handle"], ["", "nz-resize-handle", ""]], hostBindings: function NzResizeHandleComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        ɵɵallocHostVars(3);
        ɵɵlistener("mousedown", function NzResizeHandleComponent_mousedown_HostBindingHandler($event) { return ctx.onMousedown($event); })("touchstart", function NzResizeHandleComponent_touchstart_HostBindingHandler($event) { return ctx.onMousedown($event); });
    } if (rf & 2) {
        ɵɵclassMap("nz-resizable-handle nz-resizable-handle-" + ctx.nzDirection);
        ɵɵclassProp("nz-resizable-handle-box-hover", ctx.entered);
    } }, inputs: { nzDirection: "nzDirection" }, outputs: { nzMouseDown: "nzMouseDown" }, exportAs: ["nzResizeHandle"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzResizeHandleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzResizeHandleComponent, [{
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
    }], function () { return [{ type: NzResizableService }, { type: ChangeDetectorRef }]; }, { nzDirection: [{
            type: Input
        }], nzMouseDown: [{
            type: Output
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function NzResizeHandlesComponent_nz_resize_handle_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "nz-resize-handle", 1);
} if (rf & 2) {
    const dir_r315 = ctx.$implicit;
    ɵɵproperty("nzDirection", dir_r315);
} }
const DEFAULT_RESIZE_DIRECTION = [
    'bottomRight',
    'topRight',
    'bottomLeft',
    'topLeft',
    'bottom',
    'right',
    'top',
    'left'
];
class NzResizeHandlesComponent {
    constructor() {
        this.nzDirections = DEFAULT_RESIZE_DIRECTION;
        this.directions = new Set(this.nzDirections);
    }
    ngOnChanges(changes) {
        if (changes.nzDirections) {
            this.directions = new Set(changes.nzDirections.currentValue);
        }
    }
}
/** @nocollapse */ NzResizeHandlesComponent.ɵfac = function NzResizeHandlesComponent_Factory(t) { return new (t || NzResizeHandlesComponent)(); };
/** @nocollapse */ NzResizeHandlesComponent.ɵcmp = ɵɵdefineComponent({ type: NzResizeHandlesComponent, selectors: [["nz-resize-handles"]], inputs: { nzDirections: "nzDirections" }, exportAs: ["nzResizeHandles"], features: [ɵɵNgOnChangesFeature()], decls: 1, vars: 1, consts: [[3, "nzDirection", 4, "ngFor", "ngForOf"], [3, "nzDirection"]], template: function NzResizeHandlesComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, NzResizeHandlesComponent_nz_resize_handle_0_Template, 1, 1, "nz-resize-handle", 0);
    } if (rf & 2) {
        ɵɵproperty("ngForOf", ctx.directions);
    } }, directives: [NgForOf, NzResizeHandleComponent], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzResizeHandlesComponent, [{
        type: Component,
        args: [{
                selector: 'nz-resize-handles',
                exportAs: 'nzResizeHandles',
                templateUrl: './nz-resize-handles.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { nzDirections: [{
            type: Input
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzResizableModule {
}
/** @nocollapse */ NzResizableModule.ɵmod = ɵɵdefineNgModule({ type: NzResizableModule });
/** @nocollapse */ NzResizableModule.ɵinj = ɵɵdefineInjector({ factory: function NzResizableModule_Factory(t) { return new (t || NzResizableModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzResizableModule, { declarations: [NzResizableDirective, NzResizeHandleComponent, NzResizeHandlesComponent], imports: [CommonModule], exports: [NzResizableDirective, NzResizeHandleComponent, NzResizeHandlesComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzResizableModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [NzResizableDirective, NzResizeHandleComponent, NzResizeHandlesComponent],
                exports: [NzResizableDirective, NzResizeHandleComponent, NzResizeHandlesComponent]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DEFAULT_RESIZE_DIRECTION, NzResizableDirective, NzResizableModule, NzResizableService, NzResizeHandleComponent, NzResizeHandleMouseDownEvent, NzResizeHandlesComponent, getEventWithPoint };
//# sourceMappingURL=ng-zorro-antd-resizable.js.map
