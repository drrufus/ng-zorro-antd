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
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { IconDirective } from '@ant-design/icons-angular';
import { warnDeprecation, InputBoolean } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzIconService } from './nz-icon.service';
/** @type {?} */
var iconTypeRE = /^anticon\-\w/;
/** @type {?} */
var getIconTypeClass = (/**
 * @param {?} className
 * @return {?}
 */
function (className) {
    if (!className) {
        return undefined;
    }
    else {
        /** @type {?} */
        var classArr = className.split(/\s/);
        /** @type {?} */
        var index = classArr.findIndex((/**
         * @param {?} cls
         * @return {?}
         */
        function (cls) { return cls !== 'anticon' && cls !== 'anticon-spin' && !!cls.match(iconTypeRE); }));
        return index === -1 ? undefined : { name: classArr[index], index: index };
    }
});
var ɵ0 = getIconTypeClass;
/** @type {?} */
var normalizeType = (/**
 * @param {?} rawType
 * @return {?}
 */
function (rawType) {
    /** @type {?} */
    var ret = { type: rawType, crossError: false, verticalError: false };
    ret.type = rawType ? rawType.replace('anticon-', '') : '';
    if (ret.type.includes('verticle')) {
        ret.type = 'up';
        ret.verticalError = true;
    }
    if (ret.type.startsWith('cross')) {
        ret.type = 'close';
        ret.crossError = true;
    }
    return ret;
});
var ɵ1 = normalizeType;
/**
 * This directive extends IconDirective to provide:
 *
 * - IconFont support
 * - spinning
 * - old API compatibility
 *
 * \@break-changes
 *
 * - old API compatibility, icon class names would not be supported.
 * - properties that not started with `nz`.
 */
var NzIconDirective = /** @class */ (function (_super) {
    tslib_1.__extends(NzIconDirective, _super);
    function NzIconDirective(iconService, elementRef, renderer, platform) {
        var _this = _super.call(this, iconService, elementRef, renderer) || this;
        _this.iconService = iconService;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        _this.platform = platform;
        _this.nzRotate = 0;
        /**
         * @deprecated 8.0.0 avoid exposing low layer API.
         */
        _this.spin = false;
        _this.nzIconLabel = null;
        _this.el = _this.elementRef.nativeElement;
        _this.destroy$ = new Subject();
        return _this;
    }
    Object.defineProperty(NzIconDirective.prototype, "nzSpin", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.spin = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzIconDirective.prototype, "nzType", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.type = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzIconDirective.prototype, "nzTheme", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.theme = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzIconDirective.prototype, "nzTwotoneColor", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.twoToneColor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzIconDirective.prototype, "nzIconfont", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.iconfont = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzIconDirective.prototype, "type", {
        get: /**
         * @return {?}
         */
        function () {
            return this._type;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value && value.startsWith('anticon')) {
                /** @type {?} */
                var rawClass = getIconTypeClass(value);
                /** @type {?} */
                var type = rawClass ? normalizeType(rawClass.name).type : '';
                if (type && this.type !== type) {
                    this._type = type;
                }
            }
            else {
                this._type = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Replacement of `changeIcon` for more modifications.
     * @param oldAPI
     */
    /**
     * Replacement of `changeIcon` for more modifications.
     * @private
     * @param {?=} oldAPI
     * @return {?}
     */
    NzIconDirective.prototype.changeIcon2 = /**
     * Replacement of `changeIcon` for more modifications.
     * @private
     * @param {?=} oldAPI
     * @return {?}
     */
    function (oldAPI) {
        var _this = this;
        if (oldAPI === void 0) { oldAPI = false; }
        if (!oldAPI) {
            this.setClassName();
        }
        this._changeIcon().then((/**
         * @param {?} svg
         * @return {?}
         */
        function (svg) {
            _this.setSVGData(svg);
            if (!oldAPI && svg) {
                _this.handleSpin(svg);
                _this.handleRotate(svg);
            }
        }));
    };
    /**
     * @private
     * @param {?} className
     * @return {?}
     */
    NzIconDirective.prototype.classChangeHandler = /**
     * @private
     * @param {?} className
     * @return {?}
     */
    function (className) {
        /** @type {?} */
        var ret = getIconTypeClass(className);
        if (ret) {
            var _a = normalizeType(ret.name), type = _a.type, crossError = _a.crossError, verticalError = _a.verticalError;
            if (crossError) {
                this.iconService.warnAPI('cross');
            }
            if (verticalError) {
                this.iconService.warnAPI('vertical');
            }
            if (this.type !== type) {
                this._type = type;
                this.changeIcon2(true);
            }
        }
    };
    /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    NzIconDirective.prototype.handleSpin = /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    function (svg) {
        if ((this.spin || this.type === 'loading') && !this.elementRef.nativeElement.classList.contains('anticon-spin')) {
            this.renderer.addClass(svg, 'anticon-spin');
        }
        else {
            this.renderer.removeClass(svg, 'anticon-spin');
        }
    };
    /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    NzIconDirective.prototype.handleRotate = /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    function (svg) {
        if (this.nzRotate) {
            this.renderer.setAttribute(svg, 'style', "transform: rotate(" + this.nzRotate + "deg)");
        }
        else {
            this.renderer.removeAttribute(svg, 'style');
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzIconDirective.prototype.setClassName = /**
     * @private
     * @return {?}
     */
    function () {
        if (typeof this.type === 'string') {
            /** @type {?} */
            var iconClassNameArr = this.el.className.split(/\s/);
            /** @type {?} */
            var ret = getIconTypeClass(this.el.className);
            if (ret) {
                iconClassNameArr.splice(ret.index, 1, "anticon-" + this.type);
                this.renderer.setAttribute(this.el, 'class', iconClassNameArr.join(' '));
            }
            else {
                this.renderer.addClass(this.el, "anticon-" + this.type);
            }
        }
    };
    /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    NzIconDirective.prototype.setSVGData = /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    function (svg) {
        if (typeof this.type === 'string' && svg) {
            this.renderer.setAttribute(svg, 'data-icon', this.type);
            if (this.nzIconLabel != null) {
                this.renderer.setAttribute(svg, 'aria-label', this.nzIconLabel);
            }
            else {
                this.renderer.setAttribute(svg, 'aria-hidden', 'true');
            }
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzIconDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var type = changes.type, nzType = changes.nzType, nzTwotoneColor = changes.nzTwotoneColor, twoToneColor = changes.twoToneColor, spin = changes.spin, nzSpin = changes.nzSpin, theme = changes.theme, nzTheme = changes.nzTheme, nzRotate = changes.nzRotate;
        if (type && !nzType) {
            warnDeprecation("APIs for Icon without 'nz' prefix are deprecated and will be removed in 9.0.0! Please check icons with this type: '" + type.currentValue + "'.");
        }
        if (type || nzType || nzTwotoneColor || twoToneColor || spin || nzSpin || theme || nzTheme) {
            this.changeIcon2();
        }
        else if (nzRotate) {
            this.handleRotate(this.el.firstChild);
        }
        else {
            this._setSVGElement(this.iconService.createIconfontIcon("#" + this.iconfont));
        }
        if (type && !nzType) {
            warnDeprecation("APIs for Icon without 'nz' prefix are deprecated and will be removed in 9.0.0! Please check icons with this type: '" + this.type + "'.");
        }
    };
    /**
     * @return {?}
     */
    NzIconDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // If `this.type` is not specified and `classList` contains `anticon`, it should be an icon using old API.
        if (!this.type && this.el.classList.contains('anticon')) {
            this.iconService.warnAPI('old');
            // Get `type` from `className`. If not, initial rendering would be missed.
            this.classChangeHandler(this.el.className);
            if (this.platform.isBrowser) {
                // Add `class` mutation observer.
                this.classNameObserver = new MutationObserver((/**
                 * @param {?} mutations
                 * @return {?}
                 */
                function (mutations) {
                    mutations
                        .filter((/**
                     * @param {?} mutation
                     * @return {?}
                     */
                    function (mutation) { return mutation.attributeName === 'class'; }))
                        .forEach((/**
                     * @param {?} mutation
                     * @return {?}
                     */
                    function (mutation) { return _this.classChangeHandler(((/** @type {?} */ (mutation.target))).className); }));
                }));
                this.classNameObserver.observe(this.el, { attributes: true });
            }
        }
        // If `classList` does not contain `anticon`, add it before other class names.
        if (!this.el.classList.contains('anticon')) {
            this.renderer.setAttribute(this.el, 'class', ("anticon " + this.el.className).trim());
        }
        this.iconService.configUpdated$
            .asObservable()
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () {
            if (_this.type) {
                _this.changeIcon2();
            }
        }));
    };
    /**
     * @return {?}
     */
    NzIconDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.classNameObserver) {
            this.classNameObserver.disconnect();
        }
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * If custom content is provided, try to normalize SVG elements.
     */
    /**
     * If custom content is provided, try to normalize SVG elements.
     * @return {?}
     */
    NzIconDirective.prototype.ngAfterContentChecked = /**
     * If custom content is provided, try to normalize SVG elements.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var children = this.el.children;
        /** @type {?} */
        var length = children.length;
        if (!this.type && children.length) {
            while (length--) {
                /** @type {?} */
                var child = children[length];
                if (child.tagName.toLowerCase() === 'svg') {
                    this.iconService.normalizeSvgElement((/** @type {?} */ (child)));
                }
            }
        }
    };
    NzIconDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'i.anticon, [nz-icon]',
                    exportAs: 'nzIcon'
                },] }
    ];
    /** @nocollapse */
    NzIconDirective.ctorParameters = function () { return [
        { type: NzIconService },
        { type: ElementRef },
        { type: Renderer2 },
        { type: Platform }
    ]; };
    NzIconDirective.propDecorators = {
        nzSpin: [{ type: Input }],
        nzRotate: [{ type: Input }],
        nzType: [{ type: Input }],
        nzTheme: [{ type: Input }],
        nzTwotoneColor: [{ type: Input }],
        nzIconfont: [{ type: Input }],
        spin: [{ type: Input }],
        iconfont: [{ type: Input }],
        type: [{ type: Input }],
        nzIconLabel: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], NzIconDirective.prototype, "nzSpin", null);
    return NzIconDirective;
}(IconDirective));
export { NzIconDirective };
if (false) {
    /** @type {?} */
    NzIconDirective.prototype.nzRotate;
    /**
     * @deprecated 8.0.0 avoid exposing low layer API.
     * @type {?}
     */
    NzIconDirective.prototype.spin;
    /**
     * @deprecated 8.0.0 avoid exposing low layer API.
     * @type {?}
     */
    NzIconDirective.prototype.iconfont;
    /** @type {?} */
    NzIconDirective.prototype.nzIconLabel;
    /**
     * @type {?}
     * @private
     */
    NzIconDirective.prototype.classNameObserver;
    /**
     * @type {?}
     * @private
     */
    NzIconDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NzIconDirective.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzIconDirective.prototype._type;
    /** @type {?} */
    NzIconDirective.prototype.iconService;
    /** @type {?} */
    NzIconDirective.prototype.elementRef;
    /** @type {?} */
    NzIconDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzIconDirective.prototype.platform;
}
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaWNvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2ljb24vIiwic291cmNlcyI6WyJuei1pY29uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBSUwsU0FBUyxFQUVWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQWEsTUFBTSwyQkFBMkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7SUFFNUMsVUFBVSxHQUFHLGNBQWM7O0lBRTNCLGdCQUFnQjs7OztBQUFHLFVBQUMsU0FBaUI7SUFDekMsSUFBSSxDQUFDLFNBQVMsRUFBRTtRQUNkLE9BQU8sU0FBUyxDQUFDO0tBQ2xCO1NBQU07O1lBQ0MsUUFBUSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDOztZQUNoQyxLQUFLLEdBQUcsUUFBUSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsS0FBSyxTQUFTLElBQUksR0FBRyxLQUFLLGNBQWMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBdEUsQ0FBc0UsRUFBQztRQUMvRyxPQUFPLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLENB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QGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRDaGVja2VkLFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEljb25EaXJlY3RpdmUsIFRoZW1lVHlwZSB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLWFuZ3VsYXInO1xyXG5pbXBvcnQgeyB3YXJuRGVwcmVjYXRpb24sIElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBOekljb25TZXJ2aWNlIH0gZnJvbSAnLi9uei1pY29uLnNlcnZpY2UnO1xyXG5cclxuY29uc3QgaWNvblR5cGVSRSA9IC9eYW50aWNvblxcLVxcdy87XHJcblxyXG5jb25zdCBnZXRJY29uVHlwZUNsYXNzID0gKGNsYXNzTmFtZTogc3RyaW5nKTogeyBuYW1lOiBzdHJpbmc7IGluZGV4OiBudW1iZXIgfSB8IHVuZGVmaW5lZCA9PiB7XHJcbiAgaWYgKCFjbGFzc05hbWUpIHtcclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IGNsYXNzQXJyID0gY2xhc3NOYW1lLnNwbGl0KC9cXHMvKTtcclxuICAgIGNvbnN0IGluZGV4ID0gY2xhc3NBcnIuZmluZEluZGV4KGNscyA9PiBjbHMgIT09ICdhbnRpY29uJyAmJiBjbHMgIT09ICdhbnRpY29uLXNwaW4nICYmICEhY2xzLm1hdGNoKGljb25UeXBlUkUpKTtcclxuICAgIHJldHVybiBpbmRleCA9PT0gLTEgPyB1bmRlZmluZWQgOiB7IG5hbWU6IGNsYXNzQXJyW2luZGV4XSwgaW5kZXggfTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBub3JtYWxpemVUeXBlID0gKHJhd1R5cGU6IHN0cmluZyk6IHsgdHlwZTogc3RyaW5nOyBjcm9zc0Vycm9yOiBib29sZWFuOyB2ZXJ0aWNhbEVycm9yOiBib29sZWFuIH0gPT4ge1xyXG4gIGNvbnN0IHJldCA9IHsgdHlwZTogcmF3VHlwZSwgY3Jvc3NFcnJvcjogZmFsc2UsIHZlcnRpY2FsRXJyb3I6IGZhbHNlIH07XHJcbiAgcmV0LnR5cGUgPSByYXdUeXBlID8gcmF3VHlwZS5yZXBsYWNlKCdhbnRpY29uLScsICcnKSA6ICcnO1xyXG4gIGlmIChyZXQudHlwZS5pbmNsdWRlcygndmVydGljbGUnKSkge1xyXG4gICAgcmV0LnR5cGUgPSAndXAnO1xyXG4gICAgcmV0LnZlcnRpY2FsRXJyb3IgPSB0cnVlO1xyXG4gIH1cclxuICBpZiAocmV0LnR5cGUuc3RhcnRzV2l0aCgnY3Jvc3MnKSkge1xyXG4gICAgcmV0LnR5cGUgPSAnY2xvc2UnO1xyXG4gICAgcmV0LmNyb3NzRXJyb3IgPSB0cnVlO1xyXG4gIH1cclxuICByZXR1cm4gcmV0O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgZGlyZWN0aXZlIGV4dGVuZHMgSWNvbkRpcmVjdGl2ZSB0byBwcm92aWRlOlxyXG4gKlxyXG4gKiAtIEljb25Gb250IHN1cHBvcnRcclxuICogLSBzcGlubmluZ1xyXG4gKiAtIG9sZCBBUEkgY29tcGF0aWJpbGl0eVxyXG4gKlxyXG4gKiBAYnJlYWstY2hhbmdlc1xyXG4gKlxyXG4gKiAtIG9sZCBBUEkgY29tcGF0aWJpbGl0eSwgaWNvbiBjbGFzcyBuYW1lcyB3b3VsZCBub3QgYmUgc3VwcG9ydGVkLlxyXG4gKiAtIHByb3BlcnRpZXMgdGhhdCBub3Qgc3RhcnRlZCB3aXRoIGBuemAuXHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ2kuYW50aWNvbiwgW256LWljb25dJyxcclxuICBleHBvcnRBczogJ256SWNvbidcclxufSlcclxuZXhwb3J0IGNsYXNzIE56SWNvbkRpcmVjdGl2ZSBleHRlbmRzIEljb25EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBBZnRlckNvbnRlbnRDaGVja2VkIHtcclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dEJvb2xlYW4oKVxyXG4gIHNldCBuelNwaW4odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuc3BpbiA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgbnpSb3RhdGU6IG51bWJlciA9IDA7XHJcblxyXG4gIEBJbnB1dCgpIHNldCBuelR5cGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy50eXBlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBzZXQgbnpUaGVtZSh2YWx1ZTogVGhlbWVUeXBlKSB7XHJcbiAgICB0aGlzLnRoZW1lID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBzZXQgbnpUd290b25lQ29sb3IodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy50d29Ub25lQ29sb3IgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIHNldCBuekljb25mb250KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuaWNvbmZvbnQgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVwcmVjYXRlZCA4LjAuMCBhdm9pZCBleHBvc2luZyBsb3cgbGF5ZXIgQVBJLiAqL1xyXG4gIEBJbnB1dCgpIHNwaW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqIEBkZXByZWNhdGVkIDguMC4wIGF2b2lkIGV4cG9zaW5nIGxvdyBsYXllciBBUEkuICovXHJcbiAgQElucHV0KCkgaWNvbmZvbnQ6IHN0cmluZztcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgdHlwZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICBpZiAodmFsdWUgJiYgdmFsdWUuc3RhcnRzV2l0aCgnYW50aWNvbicpKSB7XHJcbiAgICAgIGNvbnN0IHJhd0NsYXNzID0gZ2V0SWNvblR5cGVDbGFzcyh2YWx1ZSk7XHJcbiAgICAgIGNvbnN0IHR5cGUgPSByYXdDbGFzcyA/IG5vcm1hbGl6ZVR5cGUocmF3Q2xhc3MubmFtZSkudHlwZSA6ICcnO1xyXG4gICAgICBpZiAodHlwZSAmJiB0aGlzLnR5cGUgIT09IHR5cGUpIHtcclxuICAgICAgICB0aGlzLl90eXBlID0gdHlwZTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IHR5cGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl90eXBlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgbnpJY29uTGFiZWw6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG5cclxuICBwcml2YXRlIGNsYXNzTmFtZU9ic2VydmVyOiBNdXRhdGlvbk9ic2VydmVyO1xyXG4gIHByaXZhdGUgZWwgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBwcml2YXRlIF90eXBlOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlcGxhY2VtZW50IG9mIGBjaGFuZ2VJY29uYCBmb3IgbW9yZSBtb2RpZmljYXRpb25zLlxyXG4gICAqIEBwYXJhbSBvbGRBUElcclxuICAgKi9cclxuICBwcml2YXRlIGNoYW5nZUljb24yKG9sZEFQSTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICBpZiAoIW9sZEFQSSkge1xyXG4gICAgICB0aGlzLnNldENsYXNzTmFtZSgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fY2hhbmdlSWNvbigpLnRoZW4oc3ZnID0+IHtcclxuICAgICAgdGhpcy5zZXRTVkdEYXRhKHN2Zyk7XHJcbiAgICAgIGlmICghb2xkQVBJICYmIHN2Zykge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU3BpbihzdmcpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlUm90YXRlKHN2Zyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGFzc0NoYW5nZUhhbmRsZXIoY2xhc3NOYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnN0IHJldCA9IGdldEljb25UeXBlQ2xhc3MoY2xhc3NOYW1lKTtcclxuICAgIGlmIChyZXQpIHtcclxuICAgICAgY29uc3QgeyB0eXBlLCBjcm9zc0Vycm9yLCB2ZXJ0aWNhbEVycm9yIH0gPSBub3JtYWxpemVUeXBlKHJldC5uYW1lKTtcclxuICAgICAgaWYgKGNyb3NzRXJyb3IpIHtcclxuICAgICAgICB0aGlzLmljb25TZXJ2aWNlLndhcm5BUEkoJ2Nyb3NzJyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHZlcnRpY2FsRXJyb3IpIHtcclxuICAgICAgICB0aGlzLmljb25TZXJ2aWNlLndhcm5BUEkoJ3ZlcnRpY2FsJyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMudHlwZSAhPT0gdHlwZSkge1xyXG4gICAgICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlSWNvbjIodHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlU3Bpbihzdmc6IFNWR0VsZW1lbnQpOiB2b2lkIHtcclxuICAgIGlmICgodGhpcy5zcGluIHx8IHRoaXMudHlwZSA9PT0gJ2xvYWRpbmcnKSAmJiAhdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhbnRpY29uLXNwaW4nKSkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHN2ZywgJ2FudGljb24tc3BpbicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhzdmcsICdhbnRpY29uLXNwaW4nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlUm90YXRlKHN2ZzogU1ZHRWxlbWVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpSb3RhdGUpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoc3ZnLCAnc3R5bGUnLCBgdHJhbnNmb3JtOiByb3RhdGUoJHt0aGlzLm56Um90YXRlfWRlZylgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHN2ZywgJ3N0eWxlJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldENsYXNzTmFtZSgpOiB2b2lkIHtcclxuICAgIGlmICh0eXBlb2YgdGhpcy50eXBlID09PSAnc3RyaW5nJykge1xyXG4gICAgICBjb25zdCBpY29uQ2xhc3NOYW1lQXJyID0gdGhpcy5lbC5jbGFzc05hbWUuc3BsaXQoL1xccy8pO1xyXG4gICAgICBjb25zdCByZXQgPSBnZXRJY29uVHlwZUNsYXNzKHRoaXMuZWwuY2xhc3NOYW1lKTtcclxuICAgICAgaWYgKHJldCkge1xyXG4gICAgICAgIGljb25DbGFzc05hbWVBcnIuc3BsaWNlKHJldC5pbmRleCwgMSwgYGFudGljb24tJHt0aGlzLnR5cGV9YCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5lbCwgJ2NsYXNzJywgaWNvbkNsYXNzTmFtZUFyci5qb2luKCcgJykpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbCwgYGFudGljb24tJHt0aGlzLnR5cGV9YCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0U1ZHRGF0YShzdmc6IFNWR0VsZW1lbnQgfCBudWxsKTogdm9pZCB7XHJcbiAgICBpZiAodHlwZW9mIHRoaXMudHlwZSA9PT0gJ3N0cmluZycgJiYgc3ZnKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHN2ZywgJ2RhdGEtaWNvbicsIHRoaXMudHlwZSk7XHJcbiAgICAgIGlmICh0aGlzLm56SWNvbkxhYmVsICE9IG51bGwpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShzdmcsICdhcmlhLWxhYmVsJywgdGhpcy5uekljb25MYWJlbCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoc3ZnLCAnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBpY29uU2VydmljZTogTnpJY29uU2VydmljZSxcclxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybVxyXG4gICkge1xyXG4gICAgc3VwZXIoaWNvblNlcnZpY2UsIGVsZW1lbnRSZWYsIHJlbmRlcmVyKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgdHlwZSwgbnpUeXBlLCBuelR3b3RvbmVDb2xvciwgdHdvVG9uZUNvbG9yLCBzcGluLCBuelNwaW4sIHRoZW1lLCBuelRoZW1lLCBuelJvdGF0ZSB9ID0gY2hhbmdlcztcclxuXHJcbiAgICBpZiAodHlwZSAmJiAhbnpUeXBlKSB7XHJcbiAgICAgIHdhcm5EZXByZWNhdGlvbihcclxuICAgICAgICBgQVBJcyBmb3IgSWNvbiB3aXRob3V0ICdueicgcHJlZml4IGFyZSBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gOS4wLjAhIFBsZWFzZSBjaGVjayBpY29ucyB3aXRoIHRoaXMgdHlwZTogJyR7dHlwZS5jdXJyZW50VmFsdWV9Jy5gXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGUgfHwgbnpUeXBlIHx8IG56VHdvdG9uZUNvbG9yIHx8IHR3b1RvbmVDb2xvciB8fCBzcGluIHx8IG56U3BpbiB8fCB0aGVtZSB8fCBuelRoZW1lKSB7XHJcbiAgICAgIHRoaXMuY2hhbmdlSWNvbjIoKTtcclxuICAgIH0gZWxzZSBpZiAobnpSb3RhdGUpIHtcclxuICAgICAgdGhpcy5oYW5kbGVSb3RhdGUodGhpcy5lbC5maXJzdENoaWxkKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3NldFNWR0VsZW1lbnQodGhpcy5pY29uU2VydmljZS5jcmVhdGVJY29uZm9udEljb24oYCMke3RoaXMuaWNvbmZvbnR9YCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlICYmICFuelR5cGUpIHtcclxuICAgICAgd2FybkRlcHJlY2F0aW9uKFxyXG4gICAgICAgIGBBUElzIGZvciBJY29uIHdpdGhvdXQgJ256JyBwcmVmaXggYXJlIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiA5LjAuMCEgUGxlYXNlIGNoZWNrIGljb25zIHdpdGggdGhpcyB0eXBlOiAnJHt0aGlzLnR5cGV9Jy5gXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIElmIGB0aGlzLnR5cGVgIGlzIG5vdCBzcGVjaWZpZWQgYW5kIGBjbGFzc0xpc3RgIGNvbnRhaW5zIGBhbnRpY29uYCwgaXQgc2hvdWxkIGJlIGFuIGljb24gdXNpbmcgb2xkIEFQSS5cclxuICAgIGlmICghdGhpcy50eXBlICYmIHRoaXMuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhbnRpY29uJykpIHtcclxuICAgICAgdGhpcy5pY29uU2VydmljZS53YXJuQVBJKCdvbGQnKTtcclxuICAgICAgLy8gR2V0IGB0eXBlYCBmcm9tIGBjbGFzc05hbWVgLiBJZiBub3QsIGluaXRpYWwgcmVuZGVyaW5nIHdvdWxkIGJlIG1pc3NlZC5cclxuICAgICAgdGhpcy5jbGFzc0NoYW5nZUhhbmRsZXIodGhpcy5lbC5jbGFzc05hbWUpO1xyXG4gICAgICBpZiAodGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgICAvLyBBZGQgYGNsYXNzYCBtdXRhdGlvbiBvYnNlcnZlci5cclxuICAgICAgICB0aGlzLmNsYXNzTmFtZU9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9uczogTXV0YXRpb25SZWNvcmRbXSkgPT4ge1xyXG4gICAgICAgICAgbXV0YXRpb25zXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKG11dGF0aW9uOiBNdXRhdGlvblJlY29yZCkgPT4gbXV0YXRpb24uYXR0cmlidXRlTmFtZSA9PT0gJ2NsYXNzJylcclxuICAgICAgICAgICAgLmZvckVhY2goKG11dGF0aW9uOiBNdXRhdGlvblJlY29yZCkgPT4gdGhpcy5jbGFzc0NoYW5nZUhhbmRsZXIoKG11dGF0aW9uLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xhc3NOYW1lKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jbGFzc05hbWVPYnNlcnZlci5vYnNlcnZlKHRoaXMuZWwsIHsgYXR0cmlidXRlczogdHJ1ZSB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gSWYgYGNsYXNzTGlzdGAgZG9lcyBub3QgY29udGFpbiBgYW50aWNvbmAsIGFkZCBpdCBiZWZvcmUgb3RoZXIgY2xhc3MgbmFtZXMuXHJcbiAgICBpZiAoIXRoaXMuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhbnRpY29uJykpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5lbCwgJ2NsYXNzJywgYGFudGljb24gJHt0aGlzLmVsLmNsYXNzTmFtZX1gLnRyaW0oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pY29uU2VydmljZS5jb25maWdVcGRhdGVkJFxyXG4gICAgICAuYXNPYnNlcnZhYmxlKClcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy50eXBlKSB7XHJcbiAgICAgICAgICB0aGlzLmNoYW5nZUljb24yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuY2xhc3NOYW1lT2JzZXJ2ZXIpIHtcclxuICAgICAgdGhpcy5jbGFzc05hbWVPYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJZiBjdXN0b20gY29udGVudCBpcyBwcm92aWRlZCwgdHJ5IHRvIG5vcm1hbGl6ZSBTVkcgZWxlbWVudHMuXHJcbiAgICovXHJcbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xyXG4gICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLmVsLmNoaWxkcmVuO1xyXG4gICAgbGV0IGxlbmd0aCA9IGNoaWxkcmVuLmxlbmd0aDtcclxuICAgIGlmICghdGhpcy50eXBlICYmIGNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICB3aGlsZSAobGVuZ3RoLS0pIHtcclxuICAgICAgICBjb25zdCBjaGlsZCA9IGNoaWxkcmVuW2xlbmd0aF07XHJcbiAgICAgICAgaWYgKGNoaWxkLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3N2ZycpIHtcclxuICAgICAgICAgIHRoaXMuaWNvblNlcnZpY2Uubm9ybWFsaXplU3ZnRWxlbWVudChjaGlsZCBhcyBTVkdFbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19