import { __decorate, __metadata } from 'tslib';
import { Platform, PlatformModule } from '@angular/cdk/platform';
import { DOCUMENT, CommonModule } from '@angular/common';
import { EventEmitter, ɵɵdirectiveInject, ElementRef, NgZone, ɵɵdefineComponent, ɵɵstaticViewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵNgOnChangesFeature, ɵɵprojectionDef, ɵɵelementStart, ɵɵprojection, ɵɵelementEnd, ɵsetClassMetadata, Component, ChangeDetectionStrategy, ViewEncapsulation, Inject, ViewChild, Input, Output, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { shallowEqual, getStyleAsText, NzConfigService, NzScrollService, WithConfig, InputNumber, SCROLL_SERVICE_PROVIDER } from 'ng-zorro-antd/core';
import { Subscription, merge, fromEvent } from 'rxjs';
import { auditTime } from 'rxjs/operators';

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function isTargetWindow(target) {
    return typeof window !== 'undefined' && target === window;
}

const _c0 = ["fixedEl"];
const _c1 = ["*"];
const NZ_CONFIG_COMPONENT_NAME = 'affix';
const NZ_AFFIX_CLS_PREFIX = 'ant-affix';
const NZ_AFFIX_DEFAULT_SCROLL_TIME = 20;
const NZ_AFFIX_RESPOND_EVENTS = ['resize', 'scroll', 'touchstart', 'touchmove', 'touchend', 'pageshow', 'load'];
class NzAffixComponent {
    constructor(el, doc, // tslint:disable-line no-any
    nzConfigService, scrollSrv, ngZone, platform) {
        this.nzConfigService = nzConfigService;
        this.scrollSrv = scrollSrv;
        this.ngZone = ngZone;
        this.platform = platform;
        this.nzChange = new EventEmitter();
        this.scroll$ = Subscription.EMPTY;
        // The wrapper would stay at the original position as a placeholder.
        this.placeholderNode = el.nativeElement;
        this.document = doc;
    }
    get target() {
        const el = this.nzTarget;
        return (typeof el === 'string' ? this.document.querySelector(el) : el) || window;
    }
    ngOnChanges(changes) {
        const { nzOffsetBottom, nzOffsetTop, nzTarget } = changes;
        if (nzOffsetBottom || nzOffsetTop) {
            this.updatePosition({});
        }
        if (nzTarget) {
            this.registerListeners();
        }
    }
    ngAfterViewInit() {
        this.registerListeners();
    }
    ngOnDestroy() {
        this.removeListeners();
    }
    registerListeners() {
        this.removeListeners();
        this.scroll$ = this.ngZone.runOutsideAngular(() => {
            return merge(...NZ_AFFIX_RESPOND_EVENTS.map(evName => fromEvent(this.target, evName)))
                .pipe(auditTime(NZ_AFFIX_DEFAULT_SCROLL_TIME))
                .subscribe(e => this.updatePosition(e));
        });
        this.timeout = setTimeout(() => this.updatePosition({}));
    }
    removeListeners() {
        clearTimeout(this.timeout);
        this.scroll$.unsubscribe();
    }
    getOffset(element, target) {
        const elemRect = element.getBoundingClientRect();
        const targetRect = this.getTargetRect(target);
        const scrollTop = this.scrollSrv.getScroll(target, true);
        const scrollLeft = this.scrollSrv.getScroll(target, false);
        const docElem = this.document.body;
        const clientTop = docElem.clientTop || 0;
        const clientLeft = docElem.clientLeft || 0;
        return {
            top: elemRect.top - targetRect.top + scrollTop - clientTop,
            left: elemRect.left - targetRect.left + scrollLeft - clientLeft,
            width: elemRect.width,
            height: elemRect.height
        };
    }
    getTargetRect(target) {
        return !isTargetWindow(target)
            ? target.getBoundingClientRect()
            : {
                top: 0,
                left: 0,
                bottom: 0
            };
    }
    setAffixStyle(e, affixStyle) {
        const originalAffixStyle = this.affixStyle;
        const isWindow = this.target === window;
        if (e.type === 'scroll' && originalAffixStyle && affixStyle && isWindow) {
            return;
        }
        if (shallowEqual(originalAffixStyle, affixStyle)) {
            return;
        }
        const fixed = !!affixStyle;
        const wrapEl = this.fixedEl.nativeElement;
        wrapEl.style.cssText = getStyleAsText(affixStyle);
        this.affixStyle = affixStyle;
        if (fixed) {
            wrapEl.classList.add(NZ_AFFIX_CLS_PREFIX);
        }
        else {
            wrapEl.classList.remove(NZ_AFFIX_CLS_PREFIX);
        }
        if ((affixStyle && !originalAffixStyle) || (!affixStyle && originalAffixStyle)) {
            this.nzChange.emit(fixed);
        }
    }
    setPlaceholderStyle(placeholderStyle) {
        const originalPlaceholderStyle = this.placeholderStyle;
        if (shallowEqual(placeholderStyle, originalPlaceholderStyle)) {
            return;
        }
        this.placeholderNode.style.cssText = getStyleAsText(placeholderStyle);
        this.placeholderStyle = placeholderStyle;
    }
    syncPlaceholderStyle(e) {
        if (!this.affixStyle) {
            return;
        }
        this.placeholderNode.style.cssText = '';
        this.placeholderStyle = undefined;
        const styleObj = {
            width: this.placeholderNode.offsetWidth,
            height: this.fixedEl.nativeElement.offsetHeight
        };
        this.setAffixStyle(e, Object.assign(Object.assign({}, this.affixStyle), styleObj));
        this.setPlaceholderStyle(styleObj);
    }
    updatePosition(e) {
        if (!this.platform.isBrowser) {
            return;
        }
        const targetNode = this.target;
        let offsetTop = this.nzOffsetTop;
        const scrollTop = this.scrollSrv.getScroll(targetNode, true);
        const elemOffset = this.getOffset(this.placeholderNode, targetNode);
        const fixedNode = this.fixedEl.nativeElement;
        const elemSize = {
            width: fixedNode.offsetWidth,
            height: fixedNode.offsetHeight
        };
        const offsetMode = {
            top: false,
            bottom: false
        };
        // Default to `offsetTop=0`.
        if (typeof offsetTop !== 'number' && typeof this.nzOffsetBottom !== 'number') {
            offsetMode.top = true;
            offsetTop = 0;
        }
        else {
            offsetMode.top = typeof offsetTop === 'number';
            offsetMode.bottom = typeof this.nzOffsetBottom === 'number';
        }
        const targetRect = this.getTargetRect(targetNode);
        const targetInnerHeight = targetNode.innerHeight || targetNode.clientHeight;
        if (scrollTop >= elemOffset.top - offsetTop && offsetMode.top) {
            const width = elemOffset.width;
            const top = targetRect.top + offsetTop;
            this.setAffixStyle(e, {
                position: 'fixed',
                top,
                left: targetRect.left + elemOffset.left,
                maxHeight: `calc(100vh - ${top}px)`,
                width
            });
            this.setPlaceholderStyle({
                width,
                height: elemSize.height
            });
        }
        else if (scrollTop <= elemOffset.top + elemSize.height + this.nzOffsetBottom - targetInnerHeight && offsetMode.bottom) {
            const targetBottomOffet = targetNode === window ? 0 : window.innerHeight - targetRect.bottom;
            const width = elemOffset.width;
            this.setAffixStyle(e, {
                position: 'fixed',
                bottom: targetBottomOffet + this.nzOffsetBottom,
                left: targetRect.left + elemOffset.left,
                width
            });
            this.setPlaceholderStyle({
                width,
                height: elemOffset.height
            });
        }
        else {
            if (e.type === 'resize' && this.affixStyle && this.affixStyle.position === 'fixed' && this.placeholderNode.offsetWidth) {
                this.setAffixStyle(e, Object.assign(Object.assign({}, this.affixStyle), { width: this.placeholderNode.offsetWidth }));
            }
            else {
                this.setAffixStyle(e);
            }
            this.setPlaceholderStyle();
        }
        if (e.type === 'resize') {
            this.syncPlaceholderStyle(e);
        }
    }
}
/** @nocollapse */ NzAffixComponent.ɵfac = function NzAffixComponent_Factory(t) { return new (t || NzAffixComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(NzScrollService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Platform)); };
/** @nocollapse */ NzAffixComponent.ɵcmp = ɵɵdefineComponent({ type: NzAffixComponent, selectors: [["nz-affix"]], viewQuery: function NzAffixComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.fixedEl = _t.first);
    } }, inputs: { nzTarget: "nzTarget", nzOffsetTop: "nzOffsetTop", nzOffsetBottom: "nzOffsetBottom" }, outputs: { nzChange: "nzChange" }, exportAs: ["nzAffix"], features: [ɵɵNgOnChangesFeature()], ngContentSelectors: _c1, decls: 3, vars: 0, consts: [["fixedEl", ""]], template: function NzAffixComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", null, 0);
        ɵɵprojection(2);
        ɵɵelementEnd();
    } }, styles: ["\n      nz-affix {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, 0),
    InputNumber(),
    __metadata("design:type", Object)
], NzAffixComponent.prototype, "nzOffsetTop", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, null),
    InputNumber(),
    __metadata("design:type", Object)
], NzAffixComponent.prototype, "nzOffsetBottom", void 0);
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzAffixComponent, [{
        type: Component,
        args: [{
                selector: 'nz-affix',
                exportAs: 'nzAffix',
                templateUrl: './nz-affix.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [
                    `
      nz-affix {
        display: block;
      }
    `
                ],
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: ElementRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: NzConfigService }, { type: NzScrollService }, { type: NgZone }, { type: Platform }]; }, { fixedEl: [{
            type: ViewChild,
            args: ['fixedEl', { static: true }]
        }], nzTarget: [{
            type: Input
        }], nzOffsetTop: [{
            type: Input
        }], nzOffsetBottom: [{
            type: Input
        }], nzChange: [{
            type: Output
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzAffixModule {
}
/** @nocollapse */ NzAffixModule.ɵmod = ɵɵdefineNgModule({ type: NzAffixModule });
/** @nocollapse */ NzAffixModule.ɵinj = ɵɵdefineInjector({ factory: function NzAffixModule_Factory(t) { return new (t || NzAffixModule)(); }, providers: [SCROLL_SERVICE_PROVIDER], imports: [[CommonModule, PlatformModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzAffixModule, { declarations: [NzAffixComponent], imports: [CommonModule, PlatformModule], exports: [NzAffixComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzAffixModule, [{
        type: NgModule,
        args: [{
                declarations: [NzAffixComponent],
                exports: [NzAffixComponent],
                imports: [CommonModule, PlatformModule],
                providers: [SCROLL_SERVICE_PROVIDER]
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

export { NzAffixComponent, NzAffixModule };
//# sourceMappingURL=ng-zorro-antd-affix.js.map
