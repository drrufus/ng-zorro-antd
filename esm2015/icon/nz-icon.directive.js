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
            this.renderer.setAttribute(svg, 'aria-hidden', 'true');
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
    type: [{ type: Input }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaWNvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2ljb24vIiwic291cmNlcyI6WyJuei1pY29uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFJTCxTQUFTLEVBRVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBYSxNQUFNLDJCQUEyQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDOztNQUU1QyxVQUFVLEdBQUcsY0FBYzs7TUFFM0IsZ0JBQWdCOzs7O0FBQUcsQ0FBQyxTQUFpQixFQUErQyxFQUFFO0lBQzFGLElBQUksQ0FBQyxTQUFTLEVBQUU7UUFDZCxPQUFPLFNBQVMsQ0FBQztLQUNsQjtTQUFNOztjQUNDLFFBQVEsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQzs7Y0FDaEMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxTQUFTOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssU0FBUyxJQUFJLEdBQUcsS0FBSyxjQUFjLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUM7UUFDL0csT0FBTyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLEtBQUss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Q0gsQ0FBQzs7O1lBdE5GLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUUsUUFBUTthQUNuQjs7OztZQTNDUSxhQUFhO1lBWnBCLFVBQVU7WUFLVixTQUFTO1lBVEYsUUFBUTs7O3FCQTZEZCxLQUFLO3VCQU1MLEtBQUs7cUJBRUwsS0FBSztzQkFJTCxLQUFLOzZCQUlMLEtBQUs7eUJBSUwsS0FBSzttQkFLTCxLQUFLO3VCQUdMLEtBQUs7bUJBRUwsS0FBSzs7QUE1Qk47SUFEQyxZQUFZLEVBQUU7Ozs2Q0FHZDs7O0lBRUQsbUNBQThCOzs7OztJQW1COUIsK0JBQXNCOzs7OztJQUd0QixtQ0FBMEI7Ozs7O0lBbUIxQiw0Q0FBNEM7Ozs7O0lBQzVDLDZCQUEyQzs7Ozs7SUFDM0MsbUNBQXVDOzs7OztJQUN2QyxnQ0FBc0I7O0lBeUVwQixzQ0FBaUM7O0lBQ2pDLHFDQUE2Qjs7SUFDN0IsbUNBQTBCOzs7OztJQUMxQixtQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRDaGVja2VkLFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEljb25EaXJlY3RpdmUsIFRoZW1lVHlwZSB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLWFuZ3VsYXInO1xyXG5pbXBvcnQgeyB3YXJuRGVwcmVjYXRpb24sIElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBOekljb25TZXJ2aWNlIH0gZnJvbSAnLi9uei1pY29uLnNlcnZpY2UnO1xyXG5cclxuY29uc3QgaWNvblR5cGVSRSA9IC9eYW50aWNvblxcLVxcdy87XHJcblxyXG5jb25zdCBnZXRJY29uVHlwZUNsYXNzID0gKGNsYXNzTmFtZTogc3RyaW5nKTogeyBuYW1lOiBzdHJpbmc7IGluZGV4OiBudW1iZXIgfSB8IHVuZGVmaW5lZCA9PiB7XHJcbiAgaWYgKCFjbGFzc05hbWUpIHtcclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IGNsYXNzQXJyID0gY2xhc3NOYW1lLnNwbGl0KC9cXHMvKTtcclxuICAgIGNvbnN0IGluZGV4ID0gY2xhc3NBcnIuZmluZEluZGV4KGNscyA9PiBjbHMgIT09ICdhbnRpY29uJyAmJiBjbHMgIT09ICdhbnRpY29uLXNwaW4nICYmICEhY2xzLm1hdGNoKGljb25UeXBlUkUpKTtcclxuICAgIHJldHVybiBpbmRleCA9PT0gLTEgPyB1bmRlZmluZWQgOiB7IG5hbWU6IGNsYXNzQXJyW2luZGV4XSwgaW5kZXggfTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBub3JtYWxpemVUeXBlID0gKHJhd1R5cGU6IHN0cmluZyk6IHsgdHlwZTogc3RyaW5nOyBjcm9zc0Vycm9yOiBib29sZWFuOyB2ZXJ0aWNhbEVycm9yOiBib29sZWFuIH0gPT4ge1xyXG4gIGNvbnN0IHJldCA9IHsgdHlwZTogcmF3VHlwZSwgY3Jvc3NFcnJvcjogZmFsc2UsIHZlcnRpY2FsRXJyb3I6IGZhbHNlIH07XHJcbiAgcmV0LnR5cGUgPSByYXdUeXBlID8gcmF3VHlwZS5yZXBsYWNlKCdhbnRpY29uLScsICcnKSA6ICcnO1xyXG4gIGlmIChyZXQudHlwZS5pbmNsdWRlcygndmVydGljbGUnKSkge1xyXG4gICAgcmV0LnR5cGUgPSAndXAnO1xyXG4gICAgcmV0LnZlcnRpY2FsRXJyb3IgPSB0cnVlO1xyXG4gIH1cclxuICBpZiAocmV0LnR5cGUuc3RhcnRzV2l0aCgnY3Jvc3MnKSkge1xyXG4gICAgcmV0LnR5cGUgPSAnY2xvc2UnO1xyXG4gICAgcmV0LmNyb3NzRXJyb3IgPSB0cnVlO1xyXG4gIH1cclxuICByZXR1cm4gcmV0O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgZGlyZWN0aXZlIGV4dGVuZHMgSWNvbkRpcmVjdGl2ZSB0byBwcm92aWRlOlxyXG4gKlxyXG4gKiAtIEljb25Gb250IHN1cHBvcnRcclxuICogLSBzcGlubmluZ1xyXG4gKiAtIG9sZCBBUEkgY29tcGF0aWJpbGl0eVxyXG4gKlxyXG4gKiBAYnJlYWstY2hhbmdlc1xyXG4gKlxyXG4gKiAtIG9sZCBBUEkgY29tcGF0aWJpbGl0eSwgaWNvbiBjbGFzcyBuYW1lcyB3b3VsZCBub3QgYmUgc3VwcG9ydGVkLlxyXG4gKiAtIHByb3BlcnRpZXMgdGhhdCBub3Qgc3RhcnRlZCB3aXRoIGBuemAuXHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ2kuYW50aWNvbiwgW256LWljb25dJyxcclxuICBleHBvcnRBczogJ256SWNvbidcclxufSlcclxuZXhwb3J0IGNsYXNzIE56SWNvbkRpcmVjdGl2ZSBleHRlbmRzIEljb25EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBBZnRlckNvbnRlbnRDaGVja2VkIHtcclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dEJvb2xlYW4oKVxyXG4gIHNldCBuelNwaW4odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuc3BpbiA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgbnpSb3RhdGU6IG51bWJlciA9IDA7XHJcblxyXG4gIEBJbnB1dCgpIHNldCBuelR5cGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy50eXBlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBzZXQgbnpUaGVtZSh2YWx1ZTogVGhlbWVUeXBlKSB7XHJcbiAgICB0aGlzLnRoZW1lID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBzZXQgbnpUd290b25lQ29sb3IodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy50d29Ub25lQ29sb3IgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIHNldCBuekljb25mb250KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuaWNvbmZvbnQgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVwcmVjYXRlZCA4LjAuMCBhdm9pZCBleHBvc2luZyBsb3cgbGF5ZXIgQVBJLiAqL1xyXG4gIEBJbnB1dCgpIHNwaW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqIEBkZXByZWNhdGVkIDguMC4wIGF2b2lkIGV4cG9zaW5nIGxvdyBsYXllciBBUEkuICovXHJcbiAgQElucHV0KCkgaWNvbmZvbnQ6IHN0cmluZztcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgdHlwZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICBpZiAodmFsdWUgJiYgdmFsdWUuc3RhcnRzV2l0aCgnYW50aWNvbicpKSB7XHJcbiAgICAgIGNvbnN0IHJhd0NsYXNzID0gZ2V0SWNvblR5cGVDbGFzcyh2YWx1ZSk7XHJcbiAgICAgIGNvbnN0IHR5cGUgPSByYXdDbGFzcyA/IG5vcm1hbGl6ZVR5cGUocmF3Q2xhc3MubmFtZSkudHlwZSA6ICcnO1xyXG4gICAgICBpZiAodHlwZSAmJiB0aGlzLnR5cGUgIT09IHR5cGUpIHtcclxuICAgICAgICB0aGlzLl90eXBlID0gdHlwZTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IHR5cGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl90eXBlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGFzc05hbWVPYnNlcnZlcjogTXV0YXRpb25PYnNlcnZlcjtcclxuICBwcml2YXRlIGVsID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgcHJpdmF0ZSBfdHlwZTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBSZXBsYWNlbWVudCBvZiBgY2hhbmdlSWNvbmAgZm9yIG1vcmUgbW9kaWZpY2F0aW9ucy5cclxuICAgKiBAcGFyYW0gb2xkQVBJXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBjaGFuZ2VJY29uMihvbGRBUEk6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgaWYgKCFvbGRBUEkpIHtcclxuICAgICAgdGhpcy5zZXRDbGFzc05hbWUoKTtcclxuICAgIH1cclxuICAgIHRoaXMuX2NoYW5nZUljb24oKS50aGVuKHN2ZyA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U1ZHRGF0YShzdmcpO1xyXG4gICAgICBpZiAoIW9sZEFQSSAmJiBzdmcpIHtcclxuICAgICAgICB0aGlzLmhhbmRsZVNwaW4oc3ZnKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVJvdGF0ZShzdmcpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xhc3NDaGFuZ2VIYW5kbGVyKGNsYXNzTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXQgPSBnZXRJY29uVHlwZUNsYXNzKGNsYXNzTmFtZSk7XHJcbiAgICBpZiAocmV0KSB7XHJcbiAgICAgIGNvbnN0IHsgdHlwZSwgY3Jvc3NFcnJvciwgdmVydGljYWxFcnJvciB9ID0gbm9ybWFsaXplVHlwZShyZXQubmFtZSk7XHJcbiAgICAgIGlmIChjcm9zc0Vycm9yKSB7XHJcbiAgICAgICAgdGhpcy5pY29uU2VydmljZS53YXJuQVBJKCdjcm9zcycpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh2ZXJ0aWNhbEVycm9yKSB7XHJcbiAgICAgICAgdGhpcy5pY29uU2VydmljZS53YXJuQVBJKCd2ZXJ0aWNhbCcpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLnR5cGUgIT09IHR5cGUpIHtcclxuICAgICAgICB0aGlzLl90eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLmNoYW5nZUljb24yKHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhbmRsZVNwaW4oc3ZnOiBTVkdFbGVtZW50KTogdm9pZCB7XHJcbiAgICBpZiAoKHRoaXMuc3BpbiB8fCB0aGlzLnR5cGUgPT09ICdsb2FkaW5nJykgJiYgIXRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnYW50aWNvbi1zcGluJykpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhzdmcsICdhbnRpY29uLXNwaW4nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3Moc3ZnLCAnYW50aWNvbi1zcGluJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhbmRsZVJvdGF0ZShzdmc6IFNWR0VsZW1lbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56Um90YXRlKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHN2ZywgJ3N0eWxlJywgYHRyYW5zZm9ybTogcm90YXRlKCR7dGhpcy5uelJvdGF0ZX1kZWcpYCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZShzdmcsICdzdHlsZScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRDbGFzc05hbWUoKTogdm9pZCB7XHJcbiAgICBpZiAodHlwZW9mIHRoaXMudHlwZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgY29uc3QgaWNvbkNsYXNzTmFtZUFyciA9IHRoaXMuZWwuY2xhc3NOYW1lLnNwbGl0KC9cXHMvKTtcclxuICAgICAgY29uc3QgcmV0ID0gZ2V0SWNvblR5cGVDbGFzcyh0aGlzLmVsLmNsYXNzTmFtZSk7XHJcbiAgICAgIGlmIChyZXQpIHtcclxuICAgICAgICBpY29uQ2xhc3NOYW1lQXJyLnNwbGljZShyZXQuaW5kZXgsIDEsIGBhbnRpY29uLSR7dGhpcy50eXBlfWApO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWwsICdjbGFzcycsIGljb25DbGFzc05hbWVBcnIuam9pbignICcpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwsIGBhbnRpY29uLSR7dGhpcy50eXBlfWApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFNWR0RhdGEoc3ZnOiBTVkdFbGVtZW50IHwgbnVsbCk6IHZvaWQge1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLnR5cGUgPT09ICdzdHJpbmcnICYmIHN2Zykge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShzdmcsICdkYXRhLWljb24nLCB0aGlzLnR5cGUpO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShzdmcsICdhcmlhLWhpZGRlbicsICd0cnVlJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBpY29uU2VydmljZTogTnpJY29uU2VydmljZSxcclxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybVxyXG4gICkge1xyXG4gICAgc3VwZXIoaWNvblNlcnZpY2UsIGVsZW1lbnRSZWYsIHJlbmRlcmVyKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgdHlwZSwgbnpUeXBlLCBuelR3b3RvbmVDb2xvciwgdHdvVG9uZUNvbG9yLCBzcGluLCBuelNwaW4sIHRoZW1lLCBuelRoZW1lLCBuelJvdGF0ZSB9ID0gY2hhbmdlcztcclxuXHJcbiAgICBpZiAodHlwZSAmJiAhbnpUeXBlKSB7XHJcbiAgICAgIHdhcm5EZXByZWNhdGlvbihcclxuICAgICAgICBgQVBJcyBmb3IgSWNvbiB3aXRob3V0ICdueicgcHJlZml4IGFyZSBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gOS4wLjAhIFBsZWFzZSBjaGVjayBpY29ucyB3aXRoIHRoaXMgdHlwZTogJyR7dHlwZS5jdXJyZW50VmFsdWV9Jy5gXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGUgfHwgbnpUeXBlIHx8IG56VHdvdG9uZUNvbG9yIHx8IHR3b1RvbmVDb2xvciB8fCBzcGluIHx8IG56U3BpbiB8fCB0aGVtZSB8fCBuelRoZW1lKSB7XHJcbiAgICAgIHRoaXMuY2hhbmdlSWNvbjIoKTtcclxuICAgIH0gZWxzZSBpZiAobnpSb3RhdGUpIHtcclxuICAgICAgdGhpcy5oYW5kbGVSb3RhdGUodGhpcy5lbC5maXJzdENoaWxkKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3NldFNWR0VsZW1lbnQodGhpcy5pY29uU2VydmljZS5jcmVhdGVJY29uZm9udEljb24oYCMke3RoaXMuaWNvbmZvbnR9YCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlICYmICFuelR5cGUpIHtcclxuICAgICAgd2FybkRlcHJlY2F0aW9uKFxyXG4gICAgICAgIGBBUElzIGZvciBJY29uIHdpdGhvdXQgJ256JyBwcmVmaXggYXJlIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiA5LjAuMCEgUGxlYXNlIGNoZWNrIGljb25zIHdpdGggdGhpcyB0eXBlOiAnJHt0aGlzLnR5cGV9Jy5gXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIElmIGB0aGlzLnR5cGVgIGlzIG5vdCBzcGVjaWZpZWQgYW5kIGBjbGFzc0xpc3RgIGNvbnRhaW5zIGBhbnRpY29uYCwgaXQgc2hvdWxkIGJlIGFuIGljb24gdXNpbmcgb2xkIEFQSS5cclxuICAgIGlmICghdGhpcy50eXBlICYmIHRoaXMuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhbnRpY29uJykpIHtcclxuICAgICAgdGhpcy5pY29uU2VydmljZS53YXJuQVBJKCdvbGQnKTtcclxuICAgICAgLy8gR2V0IGB0eXBlYCBmcm9tIGBjbGFzc05hbWVgLiBJZiBub3QsIGluaXRpYWwgcmVuZGVyaW5nIHdvdWxkIGJlIG1pc3NlZC5cclxuICAgICAgdGhpcy5jbGFzc0NoYW5nZUhhbmRsZXIodGhpcy5lbC5jbGFzc05hbWUpO1xyXG4gICAgICBpZiAodGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgICAvLyBBZGQgYGNsYXNzYCBtdXRhdGlvbiBvYnNlcnZlci5cclxuICAgICAgICB0aGlzLmNsYXNzTmFtZU9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9uczogTXV0YXRpb25SZWNvcmRbXSkgPT4ge1xyXG4gICAgICAgICAgbXV0YXRpb25zXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKG11dGF0aW9uOiBNdXRhdGlvblJlY29yZCkgPT4gbXV0YXRpb24uYXR0cmlidXRlTmFtZSA9PT0gJ2NsYXNzJylcclxuICAgICAgICAgICAgLmZvckVhY2goKG11dGF0aW9uOiBNdXRhdGlvblJlY29yZCkgPT4gdGhpcy5jbGFzc0NoYW5nZUhhbmRsZXIoKG11dGF0aW9uLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xhc3NOYW1lKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jbGFzc05hbWVPYnNlcnZlci5vYnNlcnZlKHRoaXMuZWwsIHsgYXR0cmlidXRlczogdHJ1ZSB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gSWYgYGNsYXNzTGlzdGAgZG9lcyBub3QgY29udGFpbiBgYW50aWNvbmAsIGFkZCBpdCBiZWZvcmUgb3RoZXIgY2xhc3MgbmFtZXMuXHJcbiAgICBpZiAoIXRoaXMuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhbnRpY29uJykpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5lbCwgJ2NsYXNzJywgYGFudGljb24gJHt0aGlzLmVsLmNsYXNzTmFtZX1gLnRyaW0oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pY29uU2VydmljZS5jb25maWdVcGRhdGVkJFxyXG4gICAgICAuYXNPYnNlcnZhYmxlKClcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy50eXBlKSB7XHJcbiAgICAgICAgICB0aGlzLmNoYW5nZUljb24yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuY2xhc3NOYW1lT2JzZXJ2ZXIpIHtcclxuICAgICAgdGhpcy5jbGFzc05hbWVPYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJZiBjdXN0b20gY29udGVudCBpcyBwcm92aWRlZCwgdHJ5IHRvIG5vcm1hbGl6ZSBTVkcgZWxlbWVudHMuXHJcbiAgICovXHJcbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xyXG4gICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLmVsLmNoaWxkcmVuO1xyXG4gICAgbGV0IGxlbmd0aCA9IGNoaWxkcmVuLmxlbmd0aDtcclxuICAgIGlmICghdGhpcy50eXBlICYmIGNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICB3aGlsZSAobGVuZ3RoLS0pIHtcclxuICAgICAgICBjb25zdCBjaGlsZCA9IGNoaWxkcmVuW2xlbmd0aF07XHJcbiAgICAgICAgaWYgKGNoaWxkLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3N2ZycpIHtcclxuICAgICAgICAgIHRoaXMuaWNvblNlcnZpY2Uubm9ybWFsaXplU3ZnRWxlbWVudChjaGlsZCBhcyBTVkdFbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19