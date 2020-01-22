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
const iconTypeRE = /^anticon\-\w/;
/** @type {?} */
const getIconTypeClass = (/**
 * @param {?} className
 * @return {?}
 */
(className) => {
    if (!className) {
        return undefined;
    }
    else {
        /** @type {?} */
        const classArr = className.split(/\s/);
        /** @type {?} */
        const index = classArr.findIndex((/**
         * @param {?} cls
         * @return {?}
         */
        cls => cls !== 'anticon' && cls !== 'anticon-spin' && !!cls.match(iconTypeRE)));
        return index === -1 ? undefined : { name: classArr[index], index };
    }
});
const ɵ0 = getIconTypeClass;
/** @type {?} */
const normalizeType = (/**
 * @param {?} rawType
 * @return {?}
 */
(rawType) => {
    /** @type {?} */
    const ret = { type: rawType, crossError: false, verticalError: false };
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
const ɵ1 = normalizeType;
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
export class NzIconDirective extends IconDirective {
    /**
     * @param {?} iconService
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} platform
     */
    constructor(iconService, elementRef, renderer, platform) {
        super(iconService, elementRef, renderer);
        this.iconService = iconService;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.platform = platform;
        this.nzRotate = 0;
        /**
         * @deprecated 8.0.0 avoid exposing low layer API.
         */
        this.spin = false;
        this.nzIconLabel = null;
        this.el = this.elementRef.nativeElement;
        this.destroy$ = new Subject();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzSpin(value) {
        this.spin = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzType(value) {
        this.type = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzTheme(value) {
        this.theme = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzTwotoneColor(value) {
        this.twoToneColor = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzIconfont(value) {
        this.iconfont = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set type(value) {
        if (value && value.startsWith('anticon')) {
            /** @type {?} */
            const rawClass = getIconTypeClass(value);
            /** @type {?} */
            const type = rawClass ? normalizeType(rawClass.name).type : '';
            if (type && this.type !== type) {
                this._type = type;
            }
        }
        else {
            this._type = value;
        }
    }
    /**
     * @return {?}
     */
    get type() {
        return this._type;
    }
    /**
     * Replacement of `changeIcon` for more modifications.
     * @private
     * @param {?=} oldAPI
     * @return {?}
     */
    changeIcon2(oldAPI = false) {
        if (!oldAPI) {
            this.setClassName();
        }
        this._changeIcon().then((/**
         * @param {?} svg
         * @return {?}
         */
        svg => {
            this.setSVGData(svg);
            if (!oldAPI && svg) {
                this.handleSpin(svg);
                this.handleRotate(svg);
            }
        }));
    }
    /**
     * @private
     * @param {?} className
     * @return {?}
     */
    classChangeHandler(className) {
        /** @type {?} */
        const ret = getIconTypeClass(className);
        if (ret) {
            const { type, crossError, verticalError } = normalizeType(ret.name);
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
    }
    /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    handleSpin(svg) {
        if ((this.spin || this.type === 'loading') && !this.elementRef.nativeElement.classList.contains('anticon-spin')) {
            this.renderer.addClass(svg, 'anticon-spin');
        }
        else {
            this.renderer.removeClass(svg, 'anticon-spin');
        }
    }
    /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    handleRotate(svg) {
        if (this.nzRotate) {
            this.renderer.setAttribute(svg, 'style', `transform: rotate(${this.nzRotate}deg)`);
        }
        else {
            this.renderer.removeAttribute(svg, 'style');
        }
    }
    /**
     * @private
     * @return {?}
     */
    setClassName() {
        if (typeof this.type === 'string') {
            /** @type {?} */
            const iconClassNameArr = this.el.className.split(/\s/);
            /** @type {?} */
            const ret = getIconTypeClass(this.el.className);
            if (ret) {
                iconClassNameArr.splice(ret.index, 1, `anticon-${this.type}`);
                this.renderer.setAttribute(this.el, 'class', iconClassNameArr.join(' '));
            }
            else {
                this.renderer.addClass(this.el, `anticon-${this.type}`);
            }
        }
    }
    /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    setSVGData(svg) {
        if (typeof this.type === 'string' && svg) {
            this.renderer.setAttribute(svg, 'data-icon', this.type);
            if (this.nzIconLabel != null) {
                this.renderer.setAttribute(svg, 'aria-label', this.nzIconLabel);
            }
            else {
                this.renderer.setAttribute(svg, 'aria-hidden', 'true');
            }
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { type, nzType, nzTwotoneColor, twoToneColor, spin, nzSpin, theme, nzTheme, nzRotate } = changes;
        if (type && !nzType) {
            warnDeprecation(`APIs for Icon without 'nz' prefix are deprecated and will be removed in 9.0.0! Please check icons with this type: '${type.currentValue}'.`);
        }
        if (type || nzType || nzTwotoneColor || twoToneColor || spin || nzSpin || theme || nzTheme) {
            this.changeIcon2();
        }
        else if (nzRotate) {
            this.handleRotate(this.el.firstChild);
        }
        else {
            this._setSVGElement(this.iconService.createIconfontIcon(`#${this.iconfont}`));
        }
        if (type && !nzType) {
            warnDeprecation(`APIs for Icon without 'nz' prefix are deprecated and will be removed in 9.0.0! Please check icons with this type: '${this.type}'.`);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
                (mutations) => {
                    mutations
                        .filter((/**
                     * @param {?} mutation
                     * @return {?}
                     */
                    (mutation) => mutation.attributeName === 'class'))
                        .forEach((/**
                     * @param {?} mutation
                     * @return {?}
                     */
                    (mutation) => this.classChangeHandler(((/** @type {?} */ (mutation.target))).className)));
                }));
                this.classNameObserver.observe(this.el, { attributes: true });
            }
        }
        // If `classList` does not contain `anticon`, add it before other class names.
        if (!this.el.classList.contains('anticon')) {
            this.renderer.setAttribute(this.el, 'class', `anticon ${this.el.className}`.trim());
        }
        this.iconService.configUpdated$
            .asObservable()
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => {
            if (this.type) {
                this.changeIcon2();
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.classNameObserver) {
            this.classNameObserver.disconnect();
        }
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * If custom content is provided, try to normalize SVG elements.
     * @return {?}
     */
    ngAfterContentChecked() {
        /** @type {?} */
        const children = this.el.children;
        /** @type {?} */
        let length = children.length;
        if (!this.type && children.length) {
            while (length--) {
                /** @type {?} */
                const child = children[length];
                if (child.tagName.toLowerCase() === 'svg') {
                    this.iconService.normalizeSvgElement((/** @type {?} */ (child)));
                }
            }
        }
    }
}
NzIconDirective.decorators = [
    { type: Directive, args: [{
                selector: 'i.anticon, [nz-icon]',
                exportAs: 'nzIcon'
            },] }
];
/** @nocollapse */
NzIconDirective.ctorParameters = () => [
    { type: NzIconService },
    { type: ElementRef },
    { type: Renderer2 },
    { type: Platform }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaWNvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2ljb24vIiwic291cmNlcyI6WyJuei1pY29uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBSUwsU0FBUyxFQUVWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQWEsTUFBTSwyQkFBMkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7TUFFNUMsVUFBVSxHQUFHLGNBQWM7O01BRTNCLGdCQUFnQjs7OztBQUFHLENBQUMsU0FBaUIsRUFBK0MsRUFBRTtJQUMxRixJQUFJLENBQUMsU0FBUyxFQUFFO1FBQ2QsT0FBTyxTQUFTLENBQUM7S0FDbEI7U0FBTTs7Y0FDQyxRQUFRLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7O2NBQ2hDLEtBQUssR0FBRyxRQUFRLENBQUMsU0FBUzs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLFNBQVMsSUFBSSxHQUFHLEtBQUssY0FBYyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFDO1FBQy9HLE9BQU8sS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FB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QUNULEtBQUssR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO2dCQUM5QixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEtBQUssS0FBSyxFQUFFO29CQUN6QyxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLG1CQUFBLEtBQUssRUFBYyxDQUFDLENBQUM7aUJBQzNEO2FBQ0Y7U0FDRjtJQUNILENBQUM7OztZQTVORixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsUUFBUSxFQUFFLFFBQVE7YUFDbkI7Ozs7WUEzQ1EsYUFBYTtZQVpwQixVQUFVO1lBS1YsU0FBUztZQVRGLFFBQVE7OztxQkE2RGQsS0FBSzt1QkFNTCxLQUFLO3FCQUVMLEtBQUs7c0JBSUwsS0FBSzs2QkFJTCxLQUFLO3lCQUlMLEtBQUs7bUJBS0wsS0FBSzt1QkFHTCxLQUFLO21CQUVMLEtBQUs7MEJBaUJMLEtBQUs7O0FBN0NOO0lBREMsWUFBWSxFQUFFOzs7NkNBR2Q7OztJQUVELG1DQUE4Qjs7Ozs7SUFtQjlCLCtCQUFzQjs7Ozs7SUFHdEIsbUNBQTBCOztJQW1CMUIsc0NBQTJDOzs7OztJQUUzQyw0Q0FBNEM7Ozs7O0lBQzVDLDZCQUEyQzs7Ozs7SUFDM0MsbUNBQXVDOzs7OztJQUN2QyxnQ0FBc0I7O0lBNkVwQixzQ0FBaUM7O0lBQ2pDLHFDQUE2Qjs7SUFDN0IsbUNBQTBCOzs7OztJQUMxQixtQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50Q2hlY2tlZCxcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlc1xyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJY29uRGlyZWN0aXZlLCBUaGVtZVR5cGUgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy1hbmd1bGFyJztcclxuaW1wb3J0IHsgd2FybkRlcHJlY2F0aW9uLCBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgTnpJY29uU2VydmljZSB9IGZyb20gJy4vbnotaWNvbi5zZXJ2aWNlJztcclxuXHJcbmNvbnN0IGljb25UeXBlUkUgPSAvXmFudGljb25cXC1cXHcvO1xyXG5cclxuY29uc3QgZ2V0SWNvblR5cGVDbGFzcyA9IChjbGFzc05hbWU6IHN0cmluZyk6IHsgbmFtZTogc3RyaW5nOyBpbmRleDogbnVtYmVyIH0gfCB1bmRlZmluZWQgPT4ge1xyXG4gIGlmICghY2xhc3NOYW1lKSB7XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBjbGFzc0FyciA9IGNsYXNzTmFtZS5zcGxpdCgvXFxzLyk7XHJcbiAgICBjb25zdCBpbmRleCA9IGNsYXNzQXJyLmZpbmRJbmRleChjbHMgPT4gY2xzICE9PSAnYW50aWNvbicgJiYgY2xzICE9PSAnYW50aWNvbi1zcGluJyAmJiAhIWNscy5tYXRjaChpY29uVHlwZVJFKSk7XHJcbiAgICByZXR1cm4gaW5kZXggPT09IC0xID8gdW5kZWZpbmVkIDogeyBuYW1lOiBjbGFzc0FycltpbmRleF0sIGluZGV4IH07XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3Qgbm9ybWFsaXplVHlwZSA9IChyYXdUeXBlOiBzdHJpbmcpOiB7IHR5cGU6IHN0cmluZzsgY3Jvc3NFcnJvcjogYm9vbGVhbjsgdmVydGljYWxFcnJvcjogYm9vbGVhbiB9ID0+IHtcclxuICBjb25zdCByZXQgPSB7IHR5cGU6IHJhd1R5cGUsIGNyb3NzRXJyb3I6IGZhbHNlLCB2ZXJ0aWNhbEVycm9yOiBmYWxzZSB9O1xyXG4gIHJldC50eXBlID0gcmF3VHlwZSA/IHJhd1R5cGUucmVwbGFjZSgnYW50aWNvbi0nLCAnJykgOiAnJztcclxuICBpZiAocmV0LnR5cGUuaW5jbHVkZXMoJ3ZlcnRpY2xlJykpIHtcclxuICAgIHJldC50eXBlID0gJ3VwJztcclxuICAgIHJldC52ZXJ0aWNhbEVycm9yID0gdHJ1ZTtcclxuICB9XHJcbiAgaWYgKHJldC50eXBlLnN0YXJ0c1dpdGgoJ2Nyb3NzJykpIHtcclxuICAgIHJldC50eXBlID0gJ2Nsb3NlJztcclxuICAgIHJldC5jcm9zc0Vycm9yID0gdHJ1ZTtcclxuICB9XHJcbiAgcmV0dXJuIHJldDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGRpcmVjdGl2ZSBleHRlbmRzIEljb25EaXJlY3RpdmUgdG8gcHJvdmlkZTpcclxuICpcclxuICogLSBJY29uRm9udCBzdXBwb3J0XHJcbiAqIC0gc3Bpbm5pbmdcclxuICogLSBvbGQgQVBJIGNvbXBhdGliaWxpdHlcclxuICpcclxuICogQGJyZWFrLWNoYW5nZXNcclxuICpcclxuICogLSBvbGQgQVBJIGNvbXBhdGliaWxpdHksIGljb24gY2xhc3MgbmFtZXMgd291bGQgbm90IGJlIHN1cHBvcnRlZC5cclxuICogLSBwcm9wZXJ0aWVzIHRoYXQgbm90IHN0YXJ0ZWQgd2l0aCBgbnpgLlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdpLmFudGljb24sIFtuei1pY29uXScsXHJcbiAgZXhwb3J0QXM6ICduekljb24nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekljb25EaXJlY3RpdmUgZXh0ZW5kcyBJY29uRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XHJcbiAgQElucHV0KClcclxuICBASW5wdXRCb29sZWFuKClcclxuICBzZXQgbnpTcGluKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLnNwaW4gPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIG56Um90YXRlOiBudW1iZXIgPSAwO1xyXG5cclxuICBASW5wdXQoKSBzZXQgbnpUeXBlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMudHlwZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgc2V0IG56VGhlbWUodmFsdWU6IFRoZW1lVHlwZSkge1xyXG4gICAgdGhpcy50aGVtZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgc2V0IG56VHdvdG9uZUNvbG9yKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMudHdvVG9uZUNvbG9yID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBzZXQgbnpJY29uZm9udCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmljb25mb250ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlcHJlY2F0ZWQgOC4wLjAgYXZvaWQgZXhwb3NpbmcgbG93IGxheWVyIEFQSS4gKi9cclxuICBASW5wdXQoKSBzcGluID0gZmFsc2U7XHJcblxyXG4gIC8qKiBAZGVwcmVjYXRlZCA4LjAuMCBhdm9pZCBleHBvc2luZyBsb3cgbGF5ZXIgQVBJLiAqL1xyXG4gIEBJbnB1dCgpIGljb25mb250OiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHR5cGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgaWYgKHZhbHVlICYmIHZhbHVlLnN0YXJ0c1dpdGgoJ2FudGljb24nKSkge1xyXG4gICAgICBjb25zdCByYXdDbGFzcyA9IGdldEljb25UeXBlQ2xhc3ModmFsdWUpO1xyXG4gICAgICBjb25zdCB0eXBlID0gcmF3Q2xhc3MgPyBub3JtYWxpemVUeXBlKHJhd0NsYXNzLm5hbWUpLnR5cGUgOiAnJztcclxuICAgICAgaWYgKHR5cGUgJiYgdGhpcy50eXBlICE9PSB0eXBlKSB7XHJcbiAgICAgICAgdGhpcy5fdHlwZSA9IHR5cGU7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCB0eXBlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIG56SWNvbkxhYmVsOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgcHJpdmF0ZSBjbGFzc05hbWVPYnNlcnZlcjogTXV0YXRpb25PYnNlcnZlcjtcclxuICBwcml2YXRlIGVsID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgcHJpdmF0ZSBfdHlwZTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBSZXBsYWNlbWVudCBvZiBgY2hhbmdlSWNvbmAgZm9yIG1vcmUgbW9kaWZpY2F0aW9ucy5cclxuICAgKiBAcGFyYW0gb2xkQVBJXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBjaGFuZ2VJY29uMihvbGRBUEk6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgaWYgKCFvbGRBUEkpIHtcclxuICAgICAgdGhpcy5zZXRDbGFzc05hbWUoKTtcclxuICAgIH1cclxuICAgIHRoaXMuX2NoYW5nZUljb24oKS50aGVuKHN2ZyA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U1ZHRGF0YShzdmcpO1xyXG4gICAgICBpZiAoIW9sZEFQSSAmJiBzdmcpIHtcclxuICAgICAgICB0aGlzLmhhbmRsZVNwaW4oc3ZnKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVJvdGF0ZShzdmcpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xhc3NDaGFuZ2VIYW5kbGVyKGNsYXNzTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXQgPSBnZXRJY29uVHlwZUNsYXNzKGNsYXNzTmFtZSk7XHJcbiAgICBpZiAocmV0KSB7XHJcbiAgICAgIGNvbnN0IHsgdHlwZSwgY3Jvc3NFcnJvciwgdmVydGljYWxFcnJvciB9ID0gbm9ybWFsaXplVHlwZShyZXQubmFtZSk7XHJcbiAgICAgIGlmIChjcm9zc0Vycm9yKSB7XHJcbiAgICAgICAgdGhpcy5pY29uU2VydmljZS53YXJuQVBJKCdjcm9zcycpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh2ZXJ0aWNhbEVycm9yKSB7XHJcbiAgICAgICAgdGhpcy5pY29uU2VydmljZS53YXJuQVBJKCd2ZXJ0aWNhbCcpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLnR5cGUgIT09IHR5cGUpIHtcclxuICAgICAgICB0aGlzLl90eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLmNoYW5nZUljb24yKHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhbmRsZVNwaW4oc3ZnOiBTVkdFbGVtZW50KTogdm9pZCB7XHJcbiAgICBpZiAoKHRoaXMuc3BpbiB8fCB0aGlzLnR5cGUgPT09ICdsb2FkaW5nJykgJiYgIXRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnYW50aWNvbi1zcGluJykpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhzdmcsICdhbnRpY29uLXNwaW4nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3Moc3ZnLCAnYW50aWNvbi1zcGluJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhbmRsZVJvdGF0ZShzdmc6IFNWR0VsZW1lbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56Um90YXRlKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHN2ZywgJ3N0eWxlJywgYHRyYW5zZm9ybTogcm90YXRlKCR7dGhpcy5uelJvdGF0ZX1kZWcpYCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZShzdmcsICdzdHlsZScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRDbGFzc05hbWUoKTogdm9pZCB7XHJcbiAgICBpZiAodHlwZW9mIHRoaXMudHlwZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgY29uc3QgaWNvbkNsYXNzTmFtZUFyciA9IHRoaXMuZWwuY2xhc3NOYW1lLnNwbGl0KC9cXHMvKTtcclxuICAgICAgY29uc3QgcmV0ID0gZ2V0SWNvblR5cGVDbGFzcyh0aGlzLmVsLmNsYXNzTmFtZSk7XHJcbiAgICAgIGlmIChyZXQpIHtcclxuICAgICAgICBpY29uQ2xhc3NOYW1lQXJyLnNwbGljZShyZXQuaW5kZXgsIDEsIGBhbnRpY29uLSR7dGhpcy50eXBlfWApO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWwsICdjbGFzcycsIGljb25DbGFzc05hbWVBcnIuam9pbignICcpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwsIGBhbnRpY29uLSR7dGhpcy50eXBlfWApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFNWR0RhdGEoc3ZnOiBTVkdFbGVtZW50IHwgbnVsbCk6IHZvaWQge1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLnR5cGUgPT09ICdzdHJpbmcnICYmIHN2Zykge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShzdmcsICdkYXRhLWljb24nLCB0aGlzLnR5cGUpO1xyXG4gICAgICBpZiAodGhpcy5uekljb25MYWJlbCAhPSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoc3ZnLCAnYXJpYS1sYWJlbCcsIHRoaXMubnpJY29uTGFiZWwpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHN2ZywgJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgaWNvblNlcnZpY2U6IE56SWNvblNlcnZpY2UsXHJcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm1cclxuICApIHtcclxuICAgIHN1cGVyKGljb25TZXJ2aWNlLCBlbGVtZW50UmVmLCByZW5kZXJlcik7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBjb25zdCB7IHR5cGUsIG56VHlwZSwgbnpUd290b25lQ29sb3IsIHR3b1RvbmVDb2xvciwgc3BpbiwgbnpTcGluLCB0aGVtZSwgbnpUaGVtZSwgbnpSb3RhdGUgfSA9IGNoYW5nZXM7XHJcblxyXG4gICAgaWYgKHR5cGUgJiYgIW56VHlwZSkge1xyXG4gICAgICB3YXJuRGVwcmVjYXRpb24oXHJcbiAgICAgICAgYEFQSXMgZm9yIEljb24gd2l0aG91dCAnbnonIHByZWZpeCBhcmUgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIDkuMC4wISBQbGVhc2UgY2hlY2sgaWNvbnMgd2l0aCB0aGlzIHR5cGU6ICcke3R5cGUuY3VycmVudFZhbHVlfScuYFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlIHx8IG56VHlwZSB8fCBuelR3b3RvbmVDb2xvciB8fCB0d29Ub25lQ29sb3IgfHwgc3BpbiB8fCBuelNwaW4gfHwgdGhlbWUgfHwgbnpUaGVtZSkge1xyXG4gICAgICB0aGlzLmNoYW5nZUljb24yKCk7XHJcbiAgICB9IGVsc2UgaWYgKG56Um90YXRlKSB7XHJcbiAgICAgIHRoaXMuaGFuZGxlUm90YXRlKHRoaXMuZWwuZmlyc3RDaGlsZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9zZXRTVkdFbGVtZW50KHRoaXMuaWNvblNlcnZpY2UuY3JlYXRlSWNvbmZvbnRJY29uKGAjJHt0aGlzLmljb25mb250fWApKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZSAmJiAhbnpUeXBlKSB7XHJcbiAgICAgIHdhcm5EZXByZWNhdGlvbihcclxuICAgICAgICBgQVBJcyBmb3IgSWNvbiB3aXRob3V0ICdueicgcHJlZml4IGFyZSBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gOS4wLjAhIFBsZWFzZSBjaGVjayBpY29ucyB3aXRoIHRoaXMgdHlwZTogJyR7dGhpcy50eXBlfScuYFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAvLyBJZiBgdGhpcy50eXBlYCBpcyBub3Qgc3BlY2lmaWVkIGFuZCBgY2xhc3NMaXN0YCBjb250YWlucyBgYW50aWNvbmAsIGl0IHNob3VsZCBiZSBhbiBpY29uIHVzaW5nIG9sZCBBUEkuXHJcbiAgICBpZiAoIXRoaXMudHlwZSAmJiB0aGlzLmVsLmNsYXNzTGlzdC5jb250YWlucygnYW50aWNvbicpKSB7XHJcbiAgICAgIHRoaXMuaWNvblNlcnZpY2Uud2FybkFQSSgnb2xkJyk7XHJcbiAgICAgIC8vIEdldCBgdHlwZWAgZnJvbSBgY2xhc3NOYW1lYC4gSWYgbm90LCBpbml0aWFsIHJlbmRlcmluZyB3b3VsZCBiZSBtaXNzZWQuXHJcbiAgICAgIHRoaXMuY2xhc3NDaGFuZ2VIYW5kbGVyKHRoaXMuZWwuY2xhc3NOYW1lKTtcclxuICAgICAgaWYgKHRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XHJcbiAgICAgICAgLy8gQWRkIGBjbGFzc2AgbXV0YXRpb24gb2JzZXJ2ZXIuXHJcbiAgICAgICAgdGhpcy5jbGFzc05hbWVPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnM6IE11dGF0aW9uUmVjb3JkW10pID0+IHtcclxuICAgICAgICAgIG11dGF0aW9uc1xyXG4gICAgICAgICAgICAuZmlsdGVyKChtdXRhdGlvbjogTXV0YXRpb25SZWNvcmQpID0+IG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdjbGFzcycpXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKChtdXRhdGlvbjogTXV0YXRpb25SZWNvcmQpID0+IHRoaXMuY2xhc3NDaGFuZ2VIYW5kbGVyKChtdXRhdGlvbi50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTmFtZSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY2xhc3NOYW1lT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmVsLCB7IGF0dHJpYnV0ZXM6IHRydWUgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIElmIGBjbGFzc0xpc3RgIGRvZXMgbm90IGNvbnRhaW4gYGFudGljb25gLCBhZGQgaXQgYmVmb3JlIG90aGVyIGNsYXNzIG5hbWVzLlxyXG4gICAgaWYgKCF0aGlzLmVsLmNsYXNzTGlzdC5jb250YWlucygnYW50aWNvbicpKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWwsICdjbGFzcycsIGBhbnRpY29uICR7dGhpcy5lbC5jbGFzc05hbWV9YC50cmltKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaWNvblNlcnZpY2UuY29uZmlnVXBkYXRlZCRcclxuICAgICAgLmFzT2JzZXJ2YWJsZSgpXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMudHlwZSkge1xyXG4gICAgICAgICAgdGhpcy5jaGFuZ2VJY29uMigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmNsYXNzTmFtZU9ic2VydmVyKSB7XHJcbiAgICAgIHRoaXMuY2xhc3NOYW1lT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSWYgY3VzdG9tIGNvbnRlbnQgaXMgcHJvdmlkZWQsIHRyeSB0byBub3JtYWxpemUgU1ZHIGVsZW1lbnRzLlxyXG4gICAqL1xyXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5lbC5jaGlsZHJlbjtcclxuICAgIGxldCBsZW5ndGggPSBjaGlsZHJlbi5sZW5ndGg7XHJcbiAgICBpZiAoIXRoaXMudHlwZSAmJiBjaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgd2hpbGUgKGxlbmd0aC0tKSB7XHJcbiAgICAgICAgY29uc3QgY2hpbGQgPSBjaGlsZHJlbltsZW5ndGhdO1xyXG4gICAgICAgIGlmIChjaGlsZC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdzdmcnKSB7XHJcbiAgICAgICAgICB0aGlzLmljb25TZXJ2aWNlLm5vcm1hbGl6ZVN2Z0VsZW1lbnQoY2hpbGQgYXMgU1ZHRWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==