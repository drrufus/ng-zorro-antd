import { DOCUMENT, NgForOf, CommonModule } from '@angular/common';
import { ɵɵinject, NgZone, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, Inject, EventEmitter, ɵɵdirectiveInject, ElementRef, Renderer2, ɵɵdefineDirective, ɵɵallocHostVars, ɵɵlistener, ɵɵclassProp, ɵɵProvidersFeature, Directive, Input, Output, ChangeDetectorRef, ɵɵdefineComponent, ɵɵclassMap, ɵɵprojectionDef, ɵɵprojection, Component, ChangeDetectionStrategy, ɵɵelement, ɵɵproperty, ɵɵNgOnChangesFeature, ɵɵtemplate, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { __assign, __decorate, __metadata } from 'tslib';
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
var NzResizableService = /** @class */ (function () {
    // tslint:disable-next-line:no-any
    function NzResizableService(ngZone, document) {
        this.ngZone = ngZone;
        this.listeners = new Map();
        this.handleMouseDown$ = new Subject();
        this.documentMouseUp$ = new Subject();
        this.documentMouseMove$ = new Subject();
        this.mouseEntered$ = new Subject();
        this.document = document;
    }
    NzResizableService.prototype.startResizing = function (event) {
        var _this = this;
        var _isTouchEvent = isTouchEvent(event);
        this.clearListeners();
        var moveEvent = _isTouchEvent ? 'touchmove' : 'mousemove';
        var upEvent = _isTouchEvent ? 'touchend' : 'mouseup';
        var moveEventHandler = function (e) {
            _this.documentMouseMove$.next(e);
        };
        var upEventHandler = function (e) {
            _this.documentMouseUp$.next(e);
            _this.clearListeners();
        };
        this.listeners.set(moveEvent, moveEventHandler);
        this.listeners.set(upEvent, upEventHandler);
        this.ngZone.runOutsideAngular(function () {
            _this.listeners.forEach(function (handler, name) {
                _this.document.addEventListener(name, handler);
            });
        });
    };
    NzResizableService.prototype.clearListeners = function () {
        var _this = this;
        this.listeners.forEach(function (handler, name) {
            _this.document.removeEventListener(name, handler);
        });
        this.listeners.clear();
    };
    NzResizableService.prototype.ngOnDestroy = function () {
        this.handleMouseDown$.complete();
        this.documentMouseUp$.complete();
        this.documentMouseMove$.complete();
        this.mouseEntered$.complete();
        this.clearListeners();
    };
    /** @nocollapse */ NzResizableService.ɵfac = function NzResizableService_Factory(t) { return new (t || NzResizableService)(ɵɵinject(NgZone), ɵɵinject(DOCUMENT)); };
    /** @nocollapse */ NzResizableService.ɵprov = ɵɵdefineInjectable({ token: NzResizableService, factory: NzResizableService.ɵfac });
    return NzResizableService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzResizableService, [{
        type: Injectable
    }], function () { return [{ type: NgZone }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();

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
    return NzResizableDirective;
}());
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
var _c0 = ["*"];
var NzResizeHandleMouseDownEvent = /** @class */ (function () {
    function NzResizeHandleMouseDownEvent(direction, mouseEvent) {
        this.direction = direction;
        this.mouseEvent = mouseEvent;
    }
    return NzResizeHandleMouseDownEvent;
}());
var NzResizeHandleComponent = /** @class */ (function () {
    function NzResizeHandleComponent(nzResizableService, cdr) {
        this.nzResizableService = nzResizableService;
        this.cdr = cdr;
        this.nzDirection = 'bottomRight';
        this.nzMouseDown = new EventEmitter();
        this.entered = false;
        this.destroy$ = new Subject();
    }
    NzResizeHandleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nzResizableService.mouseEntered$.pipe(takeUntil(this.destroy$)).subscribe(function (entered) {
            _this.entered = entered;
            _this.cdr.markForCheck();
        });
    };
    NzResizeHandleComponent.prototype.onMousedown = function (event) {
        this.nzResizableService.handleMouseDown$.next(new NzResizeHandleMouseDownEvent(this.nzDirection, event));
    };
    NzResizeHandleComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
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
    return NzResizeHandleComponent;
}());
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
    var dir_r317 = ctx.$implicit;
    ɵɵproperty("nzDirection", dir_r317);
} }
var DEFAULT_RESIZE_DIRECTION = [
    'bottomRight',
    'topRight',
    'bottomLeft',
    'topLeft',
    'bottom',
    'right',
    'top',
    'left'
];
var NzResizeHandlesComponent = /** @class */ (function () {
    function NzResizeHandlesComponent() {
        this.nzDirections = DEFAULT_RESIZE_DIRECTION;
        this.directions = new Set(this.nzDirections);
    }
    NzResizeHandlesComponent.prototype.ngOnChanges = function (changes) {
        if (changes.nzDirections) {
            this.directions = new Set(changes.nzDirections.currentValue);
        }
    };
    /** @nocollapse */ NzResizeHandlesComponent.ɵfac = function NzResizeHandlesComponent_Factory(t) { return new (t || NzResizeHandlesComponent)(); };
    /** @nocollapse */ NzResizeHandlesComponent.ɵcmp = ɵɵdefineComponent({ type: NzResizeHandlesComponent, selectors: [["nz-resize-handles"]], inputs: { nzDirections: "nzDirections" }, exportAs: ["nzResizeHandles"], features: [ɵɵNgOnChangesFeature()], decls: 1, vars: 1, consts: [[3, "nzDirection", 4, "ngFor", "ngForOf"], [3, "nzDirection"]], template: function NzResizeHandlesComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵtemplate(0, NzResizeHandlesComponent_nz_resize_handle_0_Template, 1, 1, "nz-resize-handle", 0);
        } if (rf & 2) {
            ɵɵproperty("ngForOf", ctx.directions);
        } }, directives: [NgForOf, NzResizeHandleComponent], encapsulation: 2, changeDetection: 0 });
    return NzResizeHandlesComponent;
}());
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
var NzResizableModule = /** @class */ (function () {
    function NzResizableModule() {
    }
    /** @nocollapse */ NzResizableModule.ɵmod = ɵɵdefineNgModule({ type: NzResizableModule });
    /** @nocollapse */ NzResizableModule.ɵinj = ɵɵdefineInjector({ factory: function NzResizableModule_Factory(t) { return new (t || NzResizableModule)(); }, imports: [[CommonModule]] });
    return NzResizableModule;
}());
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
