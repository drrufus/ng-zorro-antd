/**
 * @fileoverview added by tsickle
 * Generated from: nz-icon.directive.ts
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
            this.renderer.setAttribute(svg, 'aria-hidden', 'true');
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
        type: [{ type: Input }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaWNvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2ljb24vIiwic291cmNlcyI6WyJuei1pY29uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFJTCxTQUFTLEVBRVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBYSxNQUFNLDJCQUEyQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDOztJQUU1QyxVQUFVLEdBQUcsY0FBYzs7SUFFM0IsZ0JBQWdCOzs7O0FBQUcsVUFBQyxTQUFpQjtJQUN6QyxJQUFJLENBQUMsU0FBUyxFQUFFO1FBQ2QsT0FBTyxTQUFTLENBQUM7S0FDbEI7U0FBTTs7WUFDQyxRQUFRLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7O1lBQ2hDLEtBQUssR0FBRyxRQUFRLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxLQUFLLFNBQVMsSUFBSSxHQUFHLEtBQUssY0FBYyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUF0RSxDQUFzRSxFQUFDO1FBQy9HLE9BQU8sS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDO0tBQ3BFO0FBQ0gsQ0FBQyxDQUFBOzs7SUFFSyxhQUFhOzs7O0FBQUcsVUFBQyxPQUFlOztRQUM5QixHQUFHLEdBQUcsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRTtJQUN0RSxHQUFHLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUMxRCxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQ2pDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLEdBQUcsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO0tBQzFCO0lBQ0QsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUNoQyxHQUFHLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztRQUNuQixHQUFHLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztLQUN2QjtJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQyxDQUFBOzs7Ozs7Ozs7Ozs7OztBQWNEO0lBSXFDLDJDQUFhO0lBMkhoRCx5QkFDUyxXQUEwQixFQUMxQixVQUFzQixFQUN0QixRQUFtQixFQUNsQixRQUFrQjtRQUo1QixZQU1FLGtCQUFNLFdBQVcsRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLFNBQ3pDO1FBTlEsaUJBQVcsR0FBWCxXQUFXLENBQWU7UUFDMUIsZ0JBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsY0FBUSxHQUFSLFFBQVEsQ0FBVztRQUNsQixjQUFRLEdBQVIsUUFBUSxDQUFVO1FBeEhuQixjQUFRLEdBQVcsQ0FBQyxDQUFDOzs7O1FBbUJyQixVQUFJLEdBQUcsS0FBSyxDQUFDO1FBdUJkLFFBQUUsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUNuQyxjQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQzs7SUFnRnZDLENBQUM7SUEvSEQsc0JBQUksbUNBQU07Ozs7O1FBQVYsVUFBVyxLQUFjO1lBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLENBQUM7OztPQUFBO0lBSUQsc0JBQWEsbUNBQU07Ozs7O1FBQW5CLFVBQW9CLEtBQWE7WUFDL0IsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBYSxvQ0FBTzs7Ozs7UUFBcEIsVUFBcUIsS0FBZ0I7WUFDbkMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBYSwyQ0FBYzs7Ozs7UUFBM0IsVUFBNEIsS0FBYTtZQUN2QyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUM1QixDQUFDOzs7T0FBQTtJQUVELHNCQUFhLHVDQUFVOzs7OztRQUF2QixVQUF3QixLQUFhO1lBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLENBQUM7OztPQUFBO0lBUUQsc0JBQ0ksaUNBQUk7Ozs7UUFZUjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7OztRQWZELFVBQ1MsS0FBYTtZQUNwQixJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFOztvQkFDbEMsUUFBUSxHQUFHLGdCQUFnQixDQUFDLEtBQUssQ0FBQzs7b0JBQ2xDLElBQUksR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUM5RCxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtvQkFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7aUJBQ25CO2FBQ0Y7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7YUFDcEI7UUFDSCxDQUFDOzs7T0FBQTtJQVdEOzs7T0FHRzs7Ozs7OztJQUNLLHFDQUFXOzs7Ozs7SUFBbkIsVUFBb0IsTUFBdUI7UUFBM0MsaUJBV0M7UUFYbUIsdUJBQUEsRUFBQSxjQUF1QjtRQUN6QyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1gsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUk7Ozs7UUFBQyxVQUFBLEdBQUc7WUFDekIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsTUFBTSxJQUFJLEdBQUcsRUFBRTtnQkFDbEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDckIsS0FBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN4QjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRU8sNENBQWtCOzs7OztJQUExQixVQUEyQixTQUFpQjs7WUFDcEMsR0FBRyxHQUFHLGdCQUFnQixDQUFDLFNBQVMsQ0FBQztRQUN2QyxJQUFJLEdBQUcsRUFBRTtZQUNELElBQUEsNEJBQTZELEVBQTNELGNBQUksRUFBRSwwQkFBVSxFQUFFLGdDQUF5QztZQUNuRSxJQUFJLFVBQVUsRUFBRTtnQkFDZCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNuQztZQUNELElBQUksYUFBYSxFQUFFO2dCQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUN0QztZQUNELElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2dCQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3hCO1NBQ0Y7SUFDSCxDQUFDOzs7Ozs7SUFFTyxvQ0FBVTs7Ozs7SUFBbEIsVUFBbUIsR0FBZTtRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUMvRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsY0FBYyxDQUFDLENBQUM7U0FDN0M7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxjQUFjLENBQUMsQ0FBQztTQUNoRDtJQUNILENBQUM7Ozs7OztJQUVPLHNDQUFZOzs7OztJQUFwQixVQUFxQixHQUFlO1FBQ2xDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLHVCQUFxQixJQUFJLENBQUMsUUFBUSxTQUFNLENBQUMsQ0FBQztTQUNwRjthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQzdDO0lBQ0gsQ0FBQzs7Ozs7SUFFTyxzQ0FBWTs7OztJQUFwQjtRQUNFLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTs7Z0JBQzNCLGdCQUFnQixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7O2dCQUNoRCxHQUFHLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDL0MsSUFBSSxHQUFHLEVBQUU7Z0JBQ1AsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLGFBQVcsSUFBSSxDQUFDLElBQU0sQ0FBQyxDQUFDO2dCQUM5RCxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUMxRTtpQkFBTTtnQkFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLGFBQVcsSUFBSSxDQUFDLElBQU0sQ0FBQyxDQUFDO2FBQ3pEO1NBQ0Y7SUFDSCxDQUFDOzs7Ozs7SUFFTyxvQ0FBVTs7Ozs7SUFBbEIsVUFBbUIsR0FBc0I7UUFDdkMsSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxJQUFJLEdBQUcsRUFBRTtZQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ3hEO0lBQ0gsQ0FBQzs7Ozs7SUFXRCxxQ0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDeEIsSUFBQSxtQkFBSSxFQUFFLHVCQUFNLEVBQUUsdUNBQWMsRUFBRSxtQ0FBWSxFQUFFLG1CQUFJLEVBQUUsdUJBQU0sRUFBRSxxQkFBSyxFQUFFLHlCQUFPLEVBQUUsMkJBQVE7UUFFMUYsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDbkIsZUFBZSxDQUNiLHdIQUFzSCxJQUFJLENBQUMsWUFBWSxPQUFJLENBQzVJLENBQUM7U0FDSDtRQUVELElBQUksSUFBSSxJQUFJLE1BQU0sSUFBSSxjQUFjLElBQUksWUFBWSxJQUFJLElBQUksSUFBSSxNQUFNLElBQUksS0FBSyxJQUFJLE9BQU8sRUFBRTtZQUMxRixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7YUFBTSxJQUFJLFFBQVEsRUFBRTtZQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDdkM7YUFBTTtZQUNMLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFJLElBQUksQ0FBQyxRQUFVLENBQUMsQ0FBQyxDQUFDO1NBQy9FO1FBRUQsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDbkIsZUFBZSxDQUNiLHdIQUFzSCxJQUFJLENBQUMsSUFBSSxPQUFJLENBQ3BJLENBQUM7U0FDSDtJQUNILENBQUM7Ozs7SUFFRCxrQ0FBUTs7O0lBQVI7UUFBQSxpQkE2QkM7UUE1QkMsMEdBQTBHO1FBQzFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUN2RCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoQywwRUFBMEU7WUFDMUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDM0MsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtnQkFDM0IsaUNBQWlDO2dCQUNqQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxnQkFBZ0I7Ozs7Z0JBQUMsVUFBQyxTQUEyQjtvQkFDeEUsU0FBUzt5QkFDTixNQUFNOzs7O29CQUFDLFVBQUMsUUFBd0IsSUFBSyxPQUFBLFFBQVEsQ0FBQyxhQUFhLEtBQUssT0FBTyxFQUFsQyxDQUFrQyxFQUFDO3lCQUN4RSxPQUFPOzs7O29CQUFDLFVBQUMsUUFBd0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLG1CQUFBLFFBQVEsQ0FBQyxNQUFNLEVBQWUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFuRSxDQUFtRSxFQUFDLENBQUM7Z0JBQ2hILENBQUMsRUFBQyxDQUFDO2dCQUNILElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2FBQy9EO1NBQ0Y7UUFDRCw4RUFBOEU7UUFDOUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUMxQyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFBLGFBQVcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFXLENBQUEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQ3JGO1FBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjO2FBQzVCLFlBQVksRUFBRTthQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzlCLFNBQVM7OztRQUFDO1lBQ1QsSUFBSSxLQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNiLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUNwQjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVELHFDQUFXOzs7SUFBWDtRQUNFLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQzFCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNyQztRQUVELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsK0NBQXFCOzs7O0lBQXJCOztZQUNRLFFBQVEsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVE7O1lBQzdCLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTTtRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQ2pDLE9BQU8sTUFBTSxFQUFFLEVBQUU7O29CQUNULEtBQUssR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO2dCQUM5QixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEtBQUssS0FBSyxFQUFFO29CQUN6QyxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLG1CQUFBLEtBQUssRUFBYyxDQUFDLENBQUM7aUJBQzNEO2FBQ0Y7U0FDRjtJQUNILENBQUM7O2dCQXRORixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsUUFBUSxFQUFFLFFBQVE7aUJBQ25COzs7O2dCQTNDUSxhQUFhO2dCQVpwQixVQUFVO2dCQUtWLFNBQVM7Z0JBVEYsUUFBUTs7O3lCQTZEZCxLQUFLOzJCQU1MLEtBQUs7eUJBRUwsS0FBSzswQkFJTCxLQUFLO2lDQUlMLEtBQUs7NkJBSUwsS0FBSzt1QkFLTCxLQUFLOzJCQUdMLEtBQUs7dUJBRUwsS0FBSzs7SUE1Qk47UUFEQyxZQUFZLEVBQUU7OztpREFHZDtJQThNSCxzQkFBQztDQUFBLEFBdk5ELENBSXFDLGFBQWEsR0FtTmpEO1NBbk5ZLGVBQWU7OztJQU8xQixtQ0FBOEI7Ozs7O0lBbUI5QiwrQkFBc0I7Ozs7O0lBR3RCLG1DQUEwQjs7Ozs7SUFtQjFCLDRDQUE0Qzs7Ozs7SUFDNUMsNkJBQTJDOzs7OztJQUMzQyxtQ0FBdUM7Ozs7O0lBQ3ZDLGdDQUFzQjs7SUF5RXBCLHNDQUFpQzs7SUFDakMscUNBQTZCOztJQUM3QixtQ0FBMEI7Ozs7O0lBQzFCLG1DQUEwQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudENoZWNrZWQsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNpbXBsZUNoYW5nZXNcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSWNvbkRpcmVjdGl2ZSwgVGhlbWVUeXBlIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMtYW5ndWxhcic7XHJcbmltcG9ydCB7IHdhcm5EZXByZWNhdGlvbiwgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE56SWNvblNlcnZpY2UgfSBmcm9tICcuL256LWljb24uc2VydmljZSc7XHJcblxyXG5jb25zdCBpY29uVHlwZVJFID0gL15hbnRpY29uXFwtXFx3LztcclxuXHJcbmNvbnN0IGdldEljb25UeXBlQ2xhc3MgPSAoY2xhc3NOYW1lOiBzdHJpbmcpOiB7IG5hbWU6IHN0cmluZzsgaW5kZXg6IG51bWJlciB9IHwgdW5kZWZpbmVkID0+IHtcclxuICBpZiAoIWNsYXNzTmFtZSkge1xyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgY2xhc3NBcnIgPSBjbGFzc05hbWUuc3BsaXQoL1xccy8pO1xyXG4gICAgY29uc3QgaW5kZXggPSBjbGFzc0Fyci5maW5kSW5kZXgoY2xzID0+IGNscyAhPT0gJ2FudGljb24nICYmIGNscyAhPT0gJ2FudGljb24tc3BpbicgJiYgISFjbHMubWF0Y2goaWNvblR5cGVSRSkpO1xyXG4gICAgcmV0dXJuIGluZGV4ID09PSAtMSA/IHVuZGVmaW5lZCA6IHsgbmFtZTogY2xhc3NBcnJbaW5kZXhdLCBpbmRleCB9O1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IG5vcm1hbGl6ZVR5cGUgPSAocmF3VHlwZTogc3RyaW5nKTogeyB0eXBlOiBzdHJpbmc7IGNyb3NzRXJyb3I6IGJvb2xlYW47IHZlcnRpY2FsRXJyb3I6IGJvb2xlYW4gfSA9PiB7XHJcbiAgY29uc3QgcmV0ID0geyB0eXBlOiByYXdUeXBlLCBjcm9zc0Vycm9yOiBmYWxzZSwgdmVydGljYWxFcnJvcjogZmFsc2UgfTtcclxuICByZXQudHlwZSA9IHJhd1R5cGUgPyByYXdUeXBlLnJlcGxhY2UoJ2FudGljb24tJywgJycpIDogJyc7XHJcbiAgaWYgKHJldC50eXBlLmluY2x1ZGVzKCd2ZXJ0aWNsZScpKSB7XHJcbiAgICByZXQudHlwZSA9ICd1cCc7XHJcbiAgICByZXQudmVydGljYWxFcnJvciA9IHRydWU7XHJcbiAgfVxyXG4gIGlmIChyZXQudHlwZS5zdGFydHNXaXRoKCdjcm9zcycpKSB7XHJcbiAgICByZXQudHlwZSA9ICdjbG9zZSc7XHJcbiAgICByZXQuY3Jvc3NFcnJvciA9IHRydWU7XHJcbiAgfVxyXG4gIHJldHVybiByZXQ7XHJcbn07XHJcblxyXG4vKipcclxuICogVGhpcyBkaXJlY3RpdmUgZXh0ZW5kcyBJY29uRGlyZWN0aXZlIHRvIHByb3ZpZGU6XHJcbiAqXHJcbiAqIC0gSWNvbkZvbnQgc3VwcG9ydFxyXG4gKiAtIHNwaW5uaW5nXHJcbiAqIC0gb2xkIEFQSSBjb21wYXRpYmlsaXR5XHJcbiAqXHJcbiAqIEBicmVhay1jaGFuZ2VzXHJcbiAqXHJcbiAqIC0gb2xkIEFQSSBjb21wYXRpYmlsaXR5LCBpY29uIGNsYXNzIG5hbWVzIHdvdWxkIG5vdCBiZSBzdXBwb3J0ZWQuXHJcbiAqIC0gcHJvcGVydGllcyB0aGF0IG5vdCBzdGFydGVkIHdpdGggYG56YC5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnaS5hbnRpY29uLCBbbnotaWNvbl0nLFxyXG4gIGV4cG9ydEFzOiAnbnpJY29uJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpJY29uRGlyZWN0aXZlIGV4dGVuZHMgSWNvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudENoZWNrZWQge1xyXG4gIEBJbnB1dCgpXHJcbiAgQElucHV0Qm9vbGVhbigpXHJcbiAgc2V0IG56U3Bpbih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5zcGluID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBuelJvdGF0ZTogbnVtYmVyID0gMDtcclxuXHJcbiAgQElucHV0KCkgc2V0IG56VHlwZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnR5cGUgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIHNldCBuelRoZW1lKHZhbHVlOiBUaGVtZVR5cGUpIHtcclxuICAgIHRoaXMudGhlbWUgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIHNldCBuelR3b3RvbmVDb2xvcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnR3b1RvbmVDb2xvciA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgc2V0IG56SWNvbmZvbnQodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5pY29uZm9udCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXByZWNhdGVkIDguMC4wIGF2b2lkIGV4cG9zaW5nIGxvdyBsYXllciBBUEkuICovXHJcbiAgQElucHV0KCkgc3BpbiA9IGZhbHNlO1xyXG5cclxuICAvKiogQGRlcHJlY2F0ZWQgOC4wLjAgYXZvaWQgZXhwb3NpbmcgbG93IGxheWVyIEFQSS4gKi9cclxuICBASW5wdXQoKSBpY29uZm9udDogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCB0eXBlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5zdGFydHNXaXRoKCdhbnRpY29uJykpIHtcclxuICAgICAgY29uc3QgcmF3Q2xhc3MgPSBnZXRJY29uVHlwZUNsYXNzKHZhbHVlKTtcclxuICAgICAgY29uc3QgdHlwZSA9IHJhd0NsYXNzID8gbm9ybWFsaXplVHlwZShyYXdDbGFzcy5uYW1lKS50eXBlIDogJyc7XHJcbiAgICAgIGlmICh0eXBlICYmIHRoaXMudHlwZSAhPT0gdHlwZSkge1xyXG4gICAgICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl90eXBlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgdHlwZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsYXNzTmFtZU9ic2VydmVyOiBNdXRhdGlvbk9ic2VydmVyO1xyXG4gIHByaXZhdGUgZWwgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBwcml2YXRlIF90eXBlOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlcGxhY2VtZW50IG9mIGBjaGFuZ2VJY29uYCBmb3IgbW9yZSBtb2RpZmljYXRpb25zLlxyXG4gICAqIEBwYXJhbSBvbGRBUElcclxuICAgKi9cclxuICBwcml2YXRlIGNoYW5nZUljb24yKG9sZEFQSTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICBpZiAoIW9sZEFQSSkge1xyXG4gICAgICB0aGlzLnNldENsYXNzTmFtZSgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fY2hhbmdlSWNvbigpLnRoZW4oc3ZnID0+IHtcclxuICAgICAgdGhpcy5zZXRTVkdEYXRhKHN2Zyk7XHJcbiAgICAgIGlmICghb2xkQVBJICYmIHN2Zykge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU3BpbihzdmcpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlUm90YXRlKHN2Zyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGFzc0NoYW5nZUhhbmRsZXIoY2xhc3NOYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnN0IHJldCA9IGdldEljb25UeXBlQ2xhc3MoY2xhc3NOYW1lKTtcclxuICAgIGlmIChyZXQpIHtcclxuICAgICAgY29uc3QgeyB0eXBlLCBjcm9zc0Vycm9yLCB2ZXJ0aWNhbEVycm9yIH0gPSBub3JtYWxpemVUeXBlKHJldC5uYW1lKTtcclxuICAgICAgaWYgKGNyb3NzRXJyb3IpIHtcclxuICAgICAgICB0aGlzLmljb25TZXJ2aWNlLndhcm5BUEkoJ2Nyb3NzJyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHZlcnRpY2FsRXJyb3IpIHtcclxuICAgICAgICB0aGlzLmljb25TZXJ2aWNlLndhcm5BUEkoJ3ZlcnRpY2FsJyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMudHlwZSAhPT0gdHlwZSkge1xyXG4gICAgICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlSWNvbjIodHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlU3Bpbihzdmc6IFNWR0VsZW1lbnQpOiB2b2lkIHtcclxuICAgIGlmICgodGhpcy5zcGluIHx8IHRoaXMudHlwZSA9PT0gJ2xvYWRpbmcnKSAmJiAhdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhbnRpY29uLXNwaW4nKSkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHN2ZywgJ2FudGljb24tc3BpbicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhzdmcsICdhbnRpY29uLXNwaW4nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlUm90YXRlKHN2ZzogU1ZHRWxlbWVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpSb3RhdGUpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoc3ZnLCAnc3R5bGUnLCBgdHJhbnNmb3JtOiByb3RhdGUoJHt0aGlzLm56Um90YXRlfWRlZylgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHN2ZywgJ3N0eWxlJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldENsYXNzTmFtZSgpOiB2b2lkIHtcclxuICAgIGlmICh0eXBlb2YgdGhpcy50eXBlID09PSAnc3RyaW5nJykge1xyXG4gICAgICBjb25zdCBpY29uQ2xhc3NOYW1lQXJyID0gdGhpcy5lbC5jbGFzc05hbWUuc3BsaXQoL1xccy8pO1xyXG4gICAgICBjb25zdCByZXQgPSBnZXRJY29uVHlwZUNsYXNzKHRoaXMuZWwuY2xhc3NOYW1lKTtcclxuICAgICAgaWYgKHJldCkge1xyXG4gICAgICAgIGljb25DbGFzc05hbWVBcnIuc3BsaWNlKHJldC5pbmRleCwgMSwgYGFudGljb24tJHt0aGlzLnR5cGV9YCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5lbCwgJ2NsYXNzJywgaWNvbkNsYXNzTmFtZUFyci5qb2luKCcgJykpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbCwgYGFudGljb24tJHt0aGlzLnR5cGV9YCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0U1ZHRGF0YShzdmc6IFNWR0VsZW1lbnQgfCBudWxsKTogdm9pZCB7XHJcbiAgICBpZiAodHlwZW9mIHRoaXMudHlwZSA9PT0gJ3N0cmluZycgJiYgc3ZnKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHN2ZywgJ2RhdGEtaWNvbicsIHRoaXMudHlwZSk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHN2ZywgJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGljb25TZXJ2aWNlOiBOekljb25TZXJ2aWNlLFxyXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtXHJcbiAgKSB7XHJcbiAgICBzdXBlcihpY29uU2VydmljZSwgZWxlbWVudFJlZiwgcmVuZGVyZXIpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3QgeyB0eXBlLCBuelR5cGUsIG56VHdvdG9uZUNvbG9yLCB0d29Ub25lQ29sb3IsIHNwaW4sIG56U3BpbiwgdGhlbWUsIG56VGhlbWUsIG56Um90YXRlIH0gPSBjaGFuZ2VzO1xyXG5cclxuICAgIGlmICh0eXBlICYmICFuelR5cGUpIHtcclxuICAgICAgd2FybkRlcHJlY2F0aW9uKFxyXG4gICAgICAgIGBBUElzIGZvciBJY29uIHdpdGhvdXQgJ256JyBwcmVmaXggYXJlIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiA5LjAuMCEgUGxlYXNlIGNoZWNrIGljb25zIHdpdGggdGhpcyB0eXBlOiAnJHt0eXBlLmN1cnJlbnRWYWx1ZX0nLmBcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZSB8fCBuelR5cGUgfHwgbnpUd290b25lQ29sb3IgfHwgdHdvVG9uZUNvbG9yIHx8IHNwaW4gfHwgbnpTcGluIHx8IHRoZW1lIHx8IG56VGhlbWUpIHtcclxuICAgICAgdGhpcy5jaGFuZ2VJY29uMigpO1xyXG4gICAgfSBlbHNlIGlmIChuelJvdGF0ZSkge1xyXG4gICAgICB0aGlzLmhhbmRsZVJvdGF0ZSh0aGlzLmVsLmZpcnN0Q2hpbGQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fc2V0U1ZHRWxlbWVudCh0aGlzLmljb25TZXJ2aWNlLmNyZWF0ZUljb25mb250SWNvbihgIyR7dGhpcy5pY29uZm9udH1gKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGUgJiYgIW56VHlwZSkge1xyXG4gICAgICB3YXJuRGVwcmVjYXRpb24oXHJcbiAgICAgICAgYEFQSXMgZm9yIEljb24gd2l0aG91dCAnbnonIHByZWZpeCBhcmUgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIDkuMC4wISBQbGVhc2UgY2hlY2sgaWNvbnMgd2l0aCB0aGlzIHR5cGU6ICcke3RoaXMudHlwZX0nLmBcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgLy8gSWYgYHRoaXMudHlwZWAgaXMgbm90IHNwZWNpZmllZCBhbmQgYGNsYXNzTGlzdGAgY29udGFpbnMgYGFudGljb25gLCBpdCBzaG91bGQgYmUgYW4gaWNvbiB1c2luZyBvbGQgQVBJLlxyXG4gICAgaWYgKCF0aGlzLnR5cGUgJiYgdGhpcy5lbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FudGljb24nKSkge1xyXG4gICAgICB0aGlzLmljb25TZXJ2aWNlLndhcm5BUEkoJ29sZCcpO1xyXG4gICAgICAvLyBHZXQgYHR5cGVgIGZyb20gYGNsYXNzTmFtZWAuIElmIG5vdCwgaW5pdGlhbCByZW5kZXJpbmcgd291bGQgYmUgbWlzc2VkLlxyXG4gICAgICB0aGlzLmNsYXNzQ2hhbmdlSGFuZGxlcih0aGlzLmVsLmNsYXNzTmFtZSk7XHJcbiAgICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xyXG4gICAgICAgIC8vIEFkZCBgY2xhc3NgIG11dGF0aW9uIG9ic2VydmVyLlxyXG4gICAgICAgIHRoaXMuY2xhc3NOYW1lT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zOiBNdXRhdGlvblJlY29yZFtdKSA9PiB7XHJcbiAgICAgICAgICBtdXRhdGlvbnNcclxuICAgICAgICAgICAgLmZpbHRlcigobXV0YXRpb246IE11dGF0aW9uUmVjb3JkKSA9PiBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09PSAnY2xhc3MnKVxyXG4gICAgICAgICAgICAuZm9yRWFjaCgobXV0YXRpb246IE11dGF0aW9uUmVjb3JkKSA9PiB0aGlzLmNsYXNzQ2hhbmdlSGFuZGxlcigobXV0YXRpb24udGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbGFzc05hbWUpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmNsYXNzTmFtZU9ic2VydmVyLm9ic2VydmUodGhpcy5lbCwgeyBhdHRyaWJ1dGVzOiB0cnVlIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBJZiBgY2xhc3NMaXN0YCBkb2VzIG5vdCBjb250YWluIGBhbnRpY29uYCwgYWRkIGl0IGJlZm9yZSBvdGhlciBjbGFzcyBuYW1lcy5cclxuICAgIGlmICghdGhpcy5lbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FudGljb24nKSkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsLCAnY2xhc3MnLCBgYW50aWNvbiAke3RoaXMuZWwuY2xhc3NOYW1lfWAudHJpbSgpKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmljb25TZXJ2aWNlLmNvbmZpZ1VwZGF0ZWQkXHJcbiAgICAgIC5hc09ic2VydmFibGUoKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnR5cGUpIHtcclxuICAgICAgICAgIHRoaXMuY2hhbmdlSWNvbjIoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5jbGFzc05hbWVPYnNlcnZlcikge1xyXG4gICAgICB0aGlzLmNsYXNzTmFtZU9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIElmIGN1c3RvbSBjb250ZW50IGlzIHByb3ZpZGVkLCB0cnkgdG8gbm9ybWFsaXplIFNWRyBlbGVtZW50cy5cclxuICAgKi9cclxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuZWwuY2hpbGRyZW47XHJcbiAgICBsZXQgbGVuZ3RoID0gY2hpbGRyZW4ubGVuZ3RoO1xyXG4gICAgaWYgKCF0aGlzLnR5cGUgJiYgY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgIHdoaWxlIChsZW5ndGgtLSkge1xyXG4gICAgICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW5bbGVuZ3RoXTtcclxuICAgICAgICBpZiAoY2hpbGQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnc3ZnJykge1xyXG4gICAgICAgICAgdGhpcy5pY29uU2VydmljZS5ub3JtYWxpemVTdmdFbGVtZW50KGNoaWxkIGFzIFNWR0VsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=