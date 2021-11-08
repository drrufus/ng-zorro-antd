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
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/platform';
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
NzIconDirective.ɵfac = function NzIconDirective_Factory(t) { return new (t || NzIconDirective)(ɵngcc0.ɵɵdirectiveInject(NzIconService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Platform)); };
NzIconDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzIconDirective, selectors: [["i", 8, "anticon"], ["", "nz-icon", ""]], inputs: { nzRotate: "nzRotate", spin: "spin", nzIconLabel: "nzIconLabel", nzSpin: "nzSpin", nzType: "nzType", type: "type", nzTheme: "nzTheme", nzTwotoneColor: "nzTwotoneColor", nzIconfont: "nzIconfont", iconfont: "iconfont" }, exportAs: ["nzIcon"], features: [ɵngcc0.ɵɵInheritDefinitionFeature, ɵngcc0.ɵɵNgOnChangesFeature] });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzIconDirective, [{
        type: Directive,
        args: [{
                selector: 'i.anticon, [nz-icon]',
                exportAs: 'nzIcon'
            }]
    }], function () { return [{ type: NzIconService }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc1.Platform }]; }, { nzRotate: [{
            type: Input
        }], spin: [{
            type: Input
        }], nzIconLabel: [{
            type: Input
        }], nzSpin: [{
            type: Input
        }], nzType: [{
            type: Input
        }], type: [{
            type: Input
        }], nzTheme: [{
            type: Input
        }], nzTwotoneColor: [{
            type: Input
        }], nzIconfont: [{
            type: Input
        }], iconfont: [{
            type: Input
        }] }); })();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaWNvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VzIjpbIm5nOi9uZy16b3Jyby1hbnRkL2ljb24vbnotaWNvbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUlMLFNBQVMsRUFFVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFhLE1BQU0sMkJBQTJCLENBQUM7QUFDckUsT0FBTyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFFbEMsTUFBVixVQUFVLEdBQUcsY0FBYzs7TUFFM0IsZ0JBQWdCOzs7O0FBQUcsQ0FBQyxTQUFpQixFQUErQyxFQUFFO0lBQzFGLElBQUksQ0FBQyxTQUFTLEVBQUU7UUFDZCxPQUFPLFNBQVMsQ0FBQztLQUNsQjtTQUFNOztjQUNDLFFBQVEsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQzs7Y0FDaEMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxTQUFTOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssU0FBUyxJQUFJLEdBQUcsS0FBSyxjQUFjLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUM7UUFDL0csT0FBTyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FB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QUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7Z0JBQzlCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsS0FBSyxLQUFLLEVBQUU7b0JBQ3pDLElBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsbUJBQUEsS0FBSyxFQUFjLENBQUMsQ0FBQztpQkFDM0Q7YUFDRjtTQUNGO0lBQ0gsQ0FBQzs7O0NBQ0YsNENBN05BLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsc0JBQXNCLGtCQUNoQyxRQUFRLEVBQUUsUUFBUSxjQUNuQixxU0FDSTs7O1lBNUNJLGFBQWE7WUFacEIsVUFBVTtZQUtWLFNBQVM7WUFURixRQUFROzs7cUJBNkRkLEtBQUs7dUJBTUwsS0FBSztxQkFFTCxLQUFLO3NCQUlMLEtBQUs7NkJBSUwsS0FBSzt5QkFJTCxLQUFLO21CQUtMLEtBQUs7dUJBR0wsS0FBSzttQkFFTCxLQUFLOzBCQWlCTCxLQUFLOztBQTdDTjtJQURDLFlBQVksRUFBRTs7OzZDQUdkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQ0g7OztJQUNFLG1DQUE4Qjs7Ozs7SUFtQjlCLCtCQUFzQjs7Ozs7SUFHdEIsbUNBQTBCOztJQW1CMUIsc0NBQTJDOzs7OztJQUUzQyw0Q0FBNEM7Ozs7O0lBQzVDLDZCQUEyQzs7Ozs7SUFDM0MsbUNBQXVDOzs7OztJQUN2QyxnQ0FBc0I7O0lBNkVwQixzQ0FBaUM7O0lBQ2pDLHFDQUE2Qjs7SUFDN0IsbUNBQTBCOzs7OztJQUMxQixtQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudENoZWNrZWQsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNpbXBsZUNoYW5nZXNcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSWNvbkRpcmVjdGl2ZSwgVGhlbWVUeXBlIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMtYW5ndWxhcic7XHJcbmltcG9ydCB7IHdhcm5EZXByZWNhdGlvbiwgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE56SWNvblNlcnZpY2UgfSBmcm9tICcuL256LWljb24uc2VydmljZSc7XHJcblxyXG5jb25zdCBpY29uVHlwZVJFID0gL15hbnRpY29uXFwtXFx3LztcclxuXHJcbmNvbnN0IGdldEljb25UeXBlQ2xhc3MgPSAoY2xhc3NOYW1lOiBzdHJpbmcpOiB7IG5hbWU6IHN0cmluZzsgaW5kZXg6IG51bWJlciB9IHwgdW5kZWZpbmVkID0+IHtcclxuICBpZiAoIWNsYXNzTmFtZSkge1xyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgY2xhc3NBcnIgPSBjbGFzc05hbWUuc3BsaXQoL1xccy8pO1xyXG4gICAgY29uc3QgaW5kZXggPSBjbGFzc0Fyci5maW5kSW5kZXgoY2xzID0+IGNscyAhPT0gJ2FudGljb24nICYmIGNscyAhPT0gJ2FudGljb24tc3BpbicgJiYgISFjbHMubWF0Y2goaWNvblR5cGVSRSkpO1xyXG4gICAgcmV0dXJuIGluZGV4ID09PSAtMSA/IHVuZGVmaW5lZCA6IHsgbmFtZTogY2xhc3NBcnJbaW5kZXhdLCBpbmRleCB9O1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IG5vcm1hbGl6ZVR5cGUgPSAocmF3VHlwZTogc3RyaW5nKTogeyB0eXBlOiBzdHJpbmc7IGNyb3NzRXJyb3I6IGJvb2xlYW47IHZlcnRpY2FsRXJyb3I6IGJvb2xlYW4gfSA9PiB7XHJcbiAgY29uc3QgcmV0ID0geyB0eXBlOiByYXdUeXBlLCBjcm9zc0Vycm9yOiBmYWxzZSwgdmVydGljYWxFcnJvcjogZmFsc2UgfTtcclxuICByZXQudHlwZSA9IHJhd1R5cGUgPyByYXdUeXBlLnJlcGxhY2UoJ2FudGljb24tJywgJycpIDogJyc7XHJcbiAgaWYgKHJldC50eXBlLmluY2x1ZGVzKCd2ZXJ0aWNsZScpKSB7XHJcbiAgICByZXQudHlwZSA9ICd1cCc7XHJcbiAgICByZXQudmVydGljYWxFcnJvciA9IHRydWU7XHJcbiAgfVxyXG4gIGlmIChyZXQudHlwZS5zdGFydHNXaXRoKCdjcm9zcycpKSB7XHJcbiAgICByZXQudHlwZSA9ICdjbG9zZSc7XHJcbiAgICByZXQuY3Jvc3NFcnJvciA9IHRydWU7XHJcbiAgfVxyXG4gIHJldHVybiByZXQ7XHJcbn07XHJcblxyXG4vKipcclxuICogVGhpcyBkaXJlY3RpdmUgZXh0ZW5kcyBJY29uRGlyZWN0aXZlIHRvIHByb3ZpZGU6XHJcbiAqXHJcbiAqIC0gSWNvbkZvbnQgc3VwcG9ydFxyXG4gKiAtIHNwaW5uaW5nXHJcbiAqIC0gb2xkIEFQSSBjb21wYXRpYmlsaXR5XHJcbiAqXHJcbiAqIEBicmVhay1jaGFuZ2VzXHJcbiAqXHJcbiAqIC0gb2xkIEFQSSBjb21wYXRpYmlsaXR5LCBpY29uIGNsYXNzIG5hbWVzIHdvdWxkIG5vdCBiZSBzdXBwb3J0ZWQuXHJcbiAqIC0gcHJvcGVydGllcyB0aGF0IG5vdCBzdGFydGVkIHdpdGggYG56YC5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnaS5hbnRpY29uLCBbbnotaWNvbl0nLFxyXG4gIGV4cG9ydEFzOiAnbnpJY29uJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpJY29uRGlyZWN0aXZlIGV4dGVuZHMgSWNvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudENoZWNrZWQge1xyXG4gIEBJbnB1dCgpXHJcbiAgQElucHV0Qm9vbGVhbigpXHJcbiAgc2V0IG56U3Bpbih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5zcGluID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBuelJvdGF0ZTogbnVtYmVyID0gMDtcclxuXHJcbiAgQElucHV0KCkgc2V0IG56VHlwZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnR5cGUgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIHNldCBuelRoZW1lKHZhbHVlOiBUaGVtZVR5cGUpIHtcclxuICAgIHRoaXMudGhlbWUgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIHNldCBuelR3b3RvbmVDb2xvcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnR3b1RvbmVDb2xvciA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgc2V0IG56SWNvbmZvbnQodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5pY29uZm9udCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXByZWNhdGVkIDguMC4wIGF2b2lkIGV4cG9zaW5nIGxvdyBsYXllciBBUEkuICovXHJcbiAgQElucHV0KCkgc3BpbiA9IGZhbHNlO1xyXG5cclxuICAvKiogQGRlcHJlY2F0ZWQgOC4wLjAgYXZvaWQgZXhwb3NpbmcgbG93IGxheWVyIEFQSS4gKi9cclxuICBASW5wdXQoKSBpY29uZm9udDogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCB0eXBlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5zdGFydHNXaXRoKCdhbnRpY29uJykpIHtcclxuICAgICAgY29uc3QgcmF3Q2xhc3MgPSBnZXRJY29uVHlwZUNsYXNzKHZhbHVlKTtcclxuICAgICAgY29uc3QgdHlwZSA9IHJhd0NsYXNzID8gbm9ybWFsaXplVHlwZShyYXdDbGFzcy5uYW1lKS50eXBlIDogJyc7XHJcbiAgICAgIGlmICh0eXBlICYmIHRoaXMudHlwZSAhPT0gdHlwZSkge1xyXG4gICAgICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl90eXBlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgdHlwZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBuekljb25MYWJlbDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIHByaXZhdGUgY2xhc3NOYW1lT2JzZXJ2ZXI6IE11dGF0aW9uT2JzZXJ2ZXI7XHJcbiAgcHJpdmF0ZSBlbCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIHByaXZhdGUgX3R5cGU6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogUmVwbGFjZW1lbnQgb2YgYGNoYW5nZUljb25gIGZvciBtb3JlIG1vZGlmaWNhdGlvbnMuXHJcbiAgICogQHBhcmFtIG9sZEFQSVxyXG4gICAqL1xyXG4gIHByaXZhdGUgY2hhbmdlSWNvbjIob2xkQVBJOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgIGlmICghb2xkQVBJKSB7XHJcbiAgICAgIHRoaXMuc2V0Q2xhc3NOYW1lKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9jaGFuZ2VJY29uKCkudGhlbihzdmcgPT4ge1xyXG4gICAgICB0aGlzLnNldFNWR0RhdGEoc3ZnKTtcclxuICAgICAgaWYgKCFvbGRBUEkgJiYgc3ZnKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTcGluKHN2Zyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVSb3RhdGUoc3ZnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsYXNzQ2hhbmdlSGFuZGxlcihjbGFzc05hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3QgcmV0ID0gZ2V0SWNvblR5cGVDbGFzcyhjbGFzc05hbWUpO1xyXG4gICAgaWYgKHJldCkge1xyXG4gICAgICBjb25zdCB7IHR5cGUsIGNyb3NzRXJyb3IsIHZlcnRpY2FsRXJyb3IgfSA9IG5vcm1hbGl6ZVR5cGUocmV0Lm5hbWUpO1xyXG4gICAgICBpZiAoY3Jvc3NFcnJvcikge1xyXG4gICAgICAgIHRoaXMuaWNvblNlcnZpY2Uud2FybkFQSSgnY3Jvc3MnKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodmVydGljYWxFcnJvcikge1xyXG4gICAgICAgIHRoaXMuaWNvblNlcnZpY2Uud2FybkFQSSgndmVydGljYWwnKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy50eXBlICE9PSB0eXBlKSB7XHJcbiAgICAgICAgdGhpcy5fdHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VJY29uMih0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVTcGluKHN2ZzogU1ZHRWxlbWVudCk6IHZvaWQge1xyXG4gICAgaWYgKCh0aGlzLnNwaW4gfHwgdGhpcy50eXBlID09PSAnbG9hZGluZycpICYmICF0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2FudGljb24tc3BpbicpKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3Moc3ZnLCAnYW50aWNvbi1zcGluJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHN2ZywgJ2FudGljb24tc3BpbicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVSb3RhdGUoc3ZnOiBTVkdFbGVtZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uelJvdGF0ZSkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShzdmcsICdzdHlsZScsIGB0cmFuc2Zvcm06IHJvdGF0ZSgke3RoaXMubnpSb3RhdGV9ZGVnKWApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUoc3ZnLCAnc3R5bGUnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0Q2xhc3NOYW1lKCk6IHZvaWQge1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLnR5cGUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIGNvbnN0IGljb25DbGFzc05hbWVBcnIgPSB0aGlzLmVsLmNsYXNzTmFtZS5zcGxpdCgvXFxzLyk7XHJcbiAgICAgIGNvbnN0IHJldCA9IGdldEljb25UeXBlQ2xhc3ModGhpcy5lbC5jbGFzc05hbWUpO1xyXG4gICAgICBpZiAocmV0KSB7XHJcbiAgICAgICAgaWNvbkNsYXNzTmFtZUFyci5zcGxpY2UocmV0LmluZGV4LCAxLCBgYW50aWNvbi0ke3RoaXMudHlwZX1gKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsLCAnY2xhc3MnLCBpY29uQ2xhc3NOYW1lQXJyLmpvaW4oJyAnKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLCBgYW50aWNvbi0ke3RoaXMudHlwZX1gKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRTVkdEYXRhKHN2ZzogU1ZHRWxlbWVudCB8IG51bGwpOiB2b2lkIHtcclxuICAgIGlmICh0eXBlb2YgdGhpcy50eXBlID09PSAnc3RyaW5nJyAmJiBzdmcpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoc3ZnLCAnZGF0YS1pY29uJywgdGhpcy50eXBlKTtcclxuICAgICAgaWYgKHRoaXMubnpJY29uTGFiZWwgIT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHN2ZywgJ2FyaWEtbGFiZWwnLCB0aGlzLm56SWNvbkxhYmVsKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShzdmcsICdhcmlhLWhpZGRlbicsICd0cnVlJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGljb25TZXJ2aWNlOiBOekljb25TZXJ2aWNlLFxyXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtXHJcbiAgKSB7XHJcbiAgICBzdXBlcihpY29uU2VydmljZSwgZWxlbWVudFJlZiwgcmVuZGVyZXIpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3QgeyB0eXBlLCBuelR5cGUsIG56VHdvdG9uZUNvbG9yLCB0d29Ub25lQ29sb3IsIHNwaW4sIG56U3BpbiwgdGhlbWUsIG56VGhlbWUsIG56Um90YXRlIH0gPSBjaGFuZ2VzO1xyXG5cclxuICAgIGlmICh0eXBlICYmICFuelR5cGUpIHtcclxuICAgICAgd2FybkRlcHJlY2F0aW9uKFxyXG4gICAgICAgIGBBUElzIGZvciBJY29uIHdpdGhvdXQgJ256JyBwcmVmaXggYXJlIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiA5LjAuMCEgUGxlYXNlIGNoZWNrIGljb25zIHdpdGggdGhpcyB0eXBlOiAnJHt0eXBlLmN1cnJlbnRWYWx1ZX0nLmBcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZSB8fCBuelR5cGUgfHwgbnpUd290b25lQ29sb3IgfHwgdHdvVG9uZUNvbG9yIHx8IHNwaW4gfHwgbnpTcGluIHx8IHRoZW1lIHx8IG56VGhlbWUpIHtcclxuICAgICAgdGhpcy5jaGFuZ2VJY29uMigpO1xyXG4gICAgfSBlbHNlIGlmIChuelJvdGF0ZSkge1xyXG4gICAgICB0aGlzLmhhbmRsZVJvdGF0ZSh0aGlzLmVsLmZpcnN0Q2hpbGQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fc2V0U1ZHRWxlbWVudCh0aGlzLmljb25TZXJ2aWNlLmNyZWF0ZUljb25mb250SWNvbihgIyR7dGhpcy5pY29uZm9udH1gKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGUgJiYgIW56VHlwZSkge1xyXG4gICAgICB3YXJuRGVwcmVjYXRpb24oXHJcbiAgICAgICAgYEFQSXMgZm9yIEljb24gd2l0aG91dCAnbnonIHByZWZpeCBhcmUgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIDkuMC4wISBQbGVhc2UgY2hlY2sgaWNvbnMgd2l0aCB0aGlzIHR5cGU6ICcke3RoaXMudHlwZX0nLmBcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgLy8gSWYgYHRoaXMudHlwZWAgaXMgbm90IHNwZWNpZmllZCBhbmQgYGNsYXNzTGlzdGAgY29udGFpbnMgYGFudGljb25gLCBpdCBzaG91bGQgYmUgYW4gaWNvbiB1c2luZyBvbGQgQVBJLlxyXG4gICAgaWYgKCF0aGlzLnR5cGUgJiYgdGhpcy5lbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FudGljb24nKSkge1xyXG4gICAgICB0aGlzLmljb25TZXJ2aWNlLndhcm5BUEkoJ29sZCcpO1xyXG4gICAgICAvLyBHZXQgYHR5cGVgIGZyb20gYGNsYXNzTmFtZWAuIElmIG5vdCwgaW5pdGlhbCByZW5kZXJpbmcgd291bGQgYmUgbWlzc2VkLlxyXG4gICAgICB0aGlzLmNsYXNzQ2hhbmdlSGFuZGxlcih0aGlzLmVsLmNsYXNzTmFtZSk7XHJcbiAgICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xyXG4gICAgICAgIC8vIEFkZCBgY2xhc3NgIG11dGF0aW9uIG9ic2VydmVyLlxyXG4gICAgICAgIHRoaXMuY2xhc3NOYW1lT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zOiBNdXRhdGlvblJlY29yZFtdKSA9PiB7XHJcbiAgICAgICAgICBtdXRhdGlvbnNcclxuICAgICAgICAgICAgLmZpbHRlcigobXV0YXRpb246IE11dGF0aW9uUmVjb3JkKSA9PiBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09PSAnY2xhc3MnKVxyXG4gICAgICAgICAgICAuZm9yRWFjaCgobXV0YXRpb246IE11dGF0aW9uUmVjb3JkKSA9PiB0aGlzLmNsYXNzQ2hhbmdlSGFuZGxlcigobXV0YXRpb24udGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbGFzc05hbWUpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmNsYXNzTmFtZU9ic2VydmVyLm9ic2VydmUodGhpcy5lbCwgeyBhdHRyaWJ1dGVzOiB0cnVlIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBJZiBgY2xhc3NMaXN0YCBkb2VzIG5vdCBjb250YWluIGBhbnRpY29uYCwgYWRkIGl0IGJlZm9yZSBvdGhlciBjbGFzcyBuYW1lcy5cclxuICAgIGlmICghdGhpcy5lbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FudGljb24nKSkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsLCAnY2xhc3MnLCBgYW50aWNvbiAke3RoaXMuZWwuY2xhc3NOYW1lfWAudHJpbSgpKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmljb25TZXJ2aWNlLmNvbmZpZ1VwZGF0ZWQkXHJcbiAgICAgIC5hc09ic2VydmFibGUoKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnR5cGUpIHtcclxuICAgICAgICAgIHRoaXMuY2hhbmdlSWNvbjIoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5jbGFzc05hbWVPYnNlcnZlcikge1xyXG4gICAgICB0aGlzLmNsYXNzTmFtZU9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIElmIGN1c3RvbSBjb250ZW50IGlzIHByb3ZpZGVkLCB0cnkgdG8gbm9ybWFsaXplIFNWRyBlbGVtZW50cy5cclxuICAgKi9cclxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuZWwuY2hpbGRyZW47XHJcbiAgICBsZXQgbGVuZ3RoID0gY2hpbGRyZW4ubGVuZ3RoO1xyXG4gICAgaWYgKCF0aGlzLnR5cGUgJiYgY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgIHdoaWxlIChsZW5ndGgtLSkge1xyXG4gICAgICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW5bbGVuZ3RoXTtcclxuICAgICAgICBpZiAoY2hpbGQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnc3ZnJykge1xyXG4gICAgICAgICAgdGhpcy5pY29uU2VydmljZS5ub3JtYWxpemVTdmdFbGVtZW50KGNoaWxkIGFzIFNWR0VsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=