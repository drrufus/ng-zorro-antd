import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Inject, Input, NgZone, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { getStyleAsText, InputNumber, NzConfigService, NzScrollService, shallowEqual, WithConfig } from 'ng-zorro-antd/core';
import { fromEvent, merge, Subscription } from 'rxjs';
import { auditTime } from 'rxjs/operators';
import { isTargetWindow } from './utils';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
import * as i2 from "@angular/cdk/platform";
const _c0 = ["fixedEl"];
const _c1 = ["*"];
const NZ_CONFIG_COMPONENT_NAME = 'affix';
const NZ_AFFIX_CLS_PREFIX = 'ant-affix';
const NZ_AFFIX_DEFAULT_SCROLL_TIME = 20;
const NZ_AFFIX_RESPOND_EVENTS = ['resize', 'scroll', 'touchstart', 'touchmove', 'touchend', 'pageshow', 'load'];
export class NzAffixComponent {
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
/** @nocollapse */ NzAffixComponent.ɵfac = function NzAffixComponent_Factory(t) { return new (t || NzAffixComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(DOCUMENT), i0.ɵɵdirectiveInject(i1.NzConfigService), i0.ɵɵdirectiveInject(i1.NzScrollService), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i2.Platform)); };
/** @nocollapse */ NzAffixComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzAffixComponent, selectors: [["nz-affix"]], viewQuery: function NzAffixComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.fixedEl = _t.first);
    } }, inputs: { nzTarget: "nzTarget", nzOffsetTop: "nzOffsetTop", nzOffsetBottom: "nzOffsetBottom" }, outputs: { nzChange: "nzChange" }, exportAs: ["nzAffix"], features: [i0.ɵɵNgOnChangesFeature()], ngContentSelectors: _c1, decls: 3, vars: 0, consts: [["fixedEl", ""]], template: function NzAffixComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", null, 0);
        i0.ɵɵprojection(2);
        i0.ɵɵelementEnd();
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzAffixComponent, [{
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
    }], function () { return [{ type: i0.ElementRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: i1.NzConfigService }, { type: i1.NzScrollService }, { type: i0.NgZone }, { type: i2.Platform }]; }, { fixedEl: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYWZmaXguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9hZmZpeC8iLCJzb3VyY2VzIjpbIm56LWFmZml4LmNvbXBvbmVudC50cyIsIm56LWFmZml4LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBR04sTUFBTSxFQUVOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUNMLGNBQWMsRUFDZCxXQUFXLEVBRVgsZUFBZSxFQUNmLGVBQWUsRUFDZixZQUFZLEVBQ1osVUFBVSxFQUNYLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sU0FBUyxDQUFDOzs7Ozs7QUFVekMsTUFBTSx3QkFBd0IsR0FBRyxPQUFPLENBQUM7QUFDekMsTUFBTSxtQkFBbUIsR0FBRyxXQUFXLENBQUM7QUFDeEMsTUFBTSw0QkFBNEIsR0FBRyxFQUFFLENBQUM7QUFDeEMsTUFBTSx1QkFBdUIsR0FBRyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBZ0JoSCxNQUFNLE9BQU8sZ0JBQWdCO0lBOEIzQixZQUNFLEVBQWMsRUFDSSxH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Ozt3REFDZ0I7a0RBYm5CLGdCQUFnQjtjQWQ1QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFFBQVEsRUFBRSxTQUFTO2dCQUNuQixXQUFXLEVBQUUsMkJBQTJCO2dCQUN4QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsTUFBTSxFQUFFO29CQUNOOzs7O0tBSUM7aUJBQ0Y7Z0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7O3NCQWlDSSxNQUFNO3VCQUFDLFFBQVE7O2tCQS9CakIsU0FBUzttQkFBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztrQkFFckMsS0FBSzs7a0JBRUwsS0FBSzs7a0JBS0wsS0FBSzs7a0JBS0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5qZWN0LFxyXG4gIElucHV0LFxyXG4gIE5nWm9uZSxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtcclxuICBnZXRTdHlsZUFzVGV4dCxcclxuICBJbnB1dE51bWJlcixcclxuICBOZ1N0eWxlSW50ZXJmYWNlLFxyXG4gIE56Q29uZmlnU2VydmljZSxcclxuICBOelNjcm9sbFNlcnZpY2UsXHJcbiAgc2hhbGxvd0VxdWFsLFxyXG4gIFdpdGhDb25maWdcclxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQsIG1lcmdlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgYXVkaXRUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBpc1RhcmdldFdpbmRvdyB9IGZyb20gJy4vdXRpbHMnO1xyXG5cclxuaW50ZXJmYWNlIFNpbXBsZVJlY3Qge1xyXG4gIHRvcDogbnVtYmVyO1xyXG4gIGxlZnQ6IG51bWJlcjtcclxuICB3aWR0aD86IG51bWJlcjtcclxuICBoZWlnaHQ/OiBudW1iZXI7XHJcbiAgYm90dG9tPzogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAnYWZmaXgnO1xyXG5jb25zdCBOWl9BRkZJWF9DTFNfUFJFRklYID0gJ2FudC1hZmZpeCc7XHJcbmNvbnN0IE5aX0FGRklYX0RFRkFVTFRfU0NST0xMX1RJTUUgPSAyMDtcclxuY29uc3QgTlpfQUZGSVhfUkVTUE9ORF9FVkVOVFMgPSBbJ3Jlc2l6ZScsICdzY3JvbGwnLCAndG91Y2hzdGFydCcsICd0b3VjaG1vdmUnLCAndG91Y2hlbmQnLCAncGFnZXNob3cnLCAnbG9hZCddO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei1hZmZpeCcsXHJcbiAgZXhwb3J0QXM6ICduekFmZml4JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotYWZmaXguY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBuei1hZmZpeCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIE56QWZmaXhDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgQFZpZXdDaGlsZCgnZml4ZWRFbCcsIHsgc3RhdGljOiB0cnVlIH0pIHByaXZhdGUgZml4ZWRFbDogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XHJcblxyXG4gIEBJbnB1dCgpIG56VGFyZ2V0OiBzdHJpbmcgfCBFbGVtZW50IHwgV2luZG93O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIEBXaXRoQ29uZmlnPG51bWJlciB8IG51bGw+KE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgMClcclxuICBASW5wdXROdW1iZXIoKVxyXG4gIG56T2Zmc2V0VG9wOiBudWxsIHwgbnVtYmVyO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIEBXaXRoQ29uZmlnPG51bWJlciB8IG51bGw+KE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgbnVsbClcclxuICBASW5wdXROdW1iZXIoKVxyXG4gIG56T2Zmc2V0Qm90dG9tOiBudWxsIHwgbnVtYmVyO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIHByaXZhdGUgcmVhZG9ubHkgcGxhY2Vob2xkZXJOb2RlOiBIVE1MRWxlbWVudDtcclxuXHJcbiAgcHJpdmF0ZSBhZmZpeFN0eWxlPzogTmdTdHlsZUludGVyZmFjZTtcclxuICBwcml2YXRlIHBsYWNlaG9sZGVyU3R5bGU/OiBOZ1N0eWxlSW50ZXJmYWNlO1xyXG4gIHByaXZhdGUgc2Nyb2xsJDogU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xyXG4gIHByaXZhdGUgdGltZW91dD86IG51bWJlcjtcclxuICBwcml2YXRlIGRvY3VtZW50OiBEb2N1bWVudDtcclxuXHJcbiAgcHJpdmF0ZSBnZXQgdGFyZ2V0KCk6IEVsZW1lbnQgfCBXaW5kb3cge1xyXG4gICAgY29uc3QgZWwgPSB0aGlzLm56VGFyZ2V0O1xyXG4gICAgcmV0dXJuICh0eXBlb2YgZWwgPT09ICdzdHJpbmcnID8gdGhpcy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKSA6IGVsKSB8fCB3aW5kb3c7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGVsOiBFbGVtZW50UmVmLFxyXG4gICAgQEluamVjdChET0NVTUVOVCkgZG9jOiBhbnksIC8vIHRzbGludDpkaXNhYmxlLWxpbmUgbm8tYW55XHJcbiAgICBwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHNjcm9sbFNydjogTnpTY3JvbGxTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcclxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtXHJcbiAgKSB7XHJcbiAgICAvLyBUaGUgd3JhcHBlciB3b3VsZCBzdGF5IGF0IHRoZSBvcmlnaW5hbCBwb3NpdGlvbiBhcyBhIHBsYWNlaG9sZGVyLlxyXG4gICAgdGhpcy5wbGFjZWhvbGRlck5vZGUgPSBlbC5uYXRpdmVFbGVtZW50O1xyXG4gICAgdGhpcy5kb2N1bWVudCA9IGRvYztcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgbnpPZmZzZXRCb3R0b20sIG56T2Zmc2V0VG9wLCBuelRhcmdldCB9ID0gY2hhbmdlcztcclxuXHJcbiAgICBpZiAobnpPZmZzZXRCb3R0b20gfHwgbnpPZmZzZXRUb3ApIHtcclxuICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbih7fSBhcyBFdmVudCk7XHJcbiAgICB9XHJcbiAgICBpZiAobnpUYXJnZXQpIHtcclxuICAgICAgdGhpcy5yZWdpc3Rlckxpc3RlbmVycygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZWdpc3Rlckxpc3RlbmVycygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZWdpc3Rlckxpc3RlbmVycygpOiB2b2lkIHtcclxuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJzKCk7XHJcbiAgICB0aGlzLnNjcm9sbCQgPSB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgIHJldHVybiBtZXJnZSguLi5OWl9BRkZJWF9SRVNQT05EX0VWRU5UUy5tYXAoZXZOYW1lID0+IGZyb21FdmVudCh0aGlzLnRhcmdldCwgZXZOYW1lKSkpXHJcbiAgICAgICAgLnBpcGUoYXVkaXRUaW1lKE5aX0FGRklYX0RFRkFVTFRfU0NST0xMX1RJTUUpKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoZSA9PiB0aGlzLnVwZGF0ZVBvc2l0aW9uKGUpKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLnVwZGF0ZVBvc2l0aW9uKHt9IGFzIEV2ZW50KSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbW92ZUxpc3RlbmVycygpOiB2b2lkIHtcclxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xyXG4gICAgdGhpcy5zY3JvbGwkLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBnZXRPZmZzZXQoZWxlbWVudDogRWxlbWVudCwgdGFyZ2V0OiBFbGVtZW50IHwgV2luZG93IHwgdW5kZWZpbmVkKTogU2ltcGxlUmVjdCB7XHJcbiAgICBjb25zdCBlbGVtUmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjb25zdCB0YXJnZXRSZWN0ID0gdGhpcy5nZXRUYXJnZXRSZWN0KHRhcmdldCEpO1xyXG5cclxuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuc2Nyb2xsU3J2LmdldFNjcm9sbCh0YXJnZXQsIHRydWUpO1xyXG4gICAgY29uc3Qgc2Nyb2xsTGVmdCA9IHRoaXMuc2Nyb2xsU3J2LmdldFNjcm9sbCh0YXJnZXQsIGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBkb2NFbGVtID0gdGhpcy5kb2N1bWVudC5ib2R5O1xyXG4gICAgY29uc3QgY2xpZW50VG9wID0gZG9jRWxlbS5jbGllbnRUb3AgfHwgMDtcclxuICAgIGNvbnN0IGNsaWVudExlZnQgPSBkb2NFbGVtLmNsaWVudExlZnQgfHwgMDtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0b3A6IGVsZW1SZWN0LnRvcCAtIHRhcmdldFJlY3QudG9wICsgc2Nyb2xsVG9wIC0gY2xpZW50VG9wLFxyXG4gICAgICBsZWZ0OiBlbGVtUmVjdC5sZWZ0IC0gdGFyZ2V0UmVjdC5sZWZ0ICsgc2Nyb2xsTGVmdCAtIGNsaWVudExlZnQsXHJcbiAgICAgIHdpZHRoOiBlbGVtUmVjdC53aWR0aCxcclxuICAgICAgaGVpZ2h0OiBlbGVtUmVjdC5oZWlnaHRcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFRhcmdldFJlY3QodGFyZ2V0OiBFbGVtZW50IHwgV2luZG93KTogU2ltcGxlUmVjdCB7XHJcbiAgICByZXR1cm4gIWlzVGFyZ2V0V2luZG93KHRhcmdldClcclxuICAgICAgPyB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuICAgICAgOiB7XHJcbiAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgYm90dG9tOiAwXHJcbiAgICAgICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0QWZmaXhTdHlsZShlOiBFdmVudCwgYWZmaXhTdHlsZT86IE5nU3R5bGVJbnRlcmZhY2UpOiB2b2lkIHtcclxuICAgIGNvbnN0IG9yaWdpbmFsQWZmaXhTdHlsZSA9IHRoaXMuYWZmaXhTdHlsZTtcclxuICAgIGNvbnN0IGlzV2luZG93ID0gdGhpcy50YXJnZXQgPT09IHdpbmRvdztcclxuICAgIGlmIChlLnR5cGUgPT09ICdzY3JvbGwnICYmIG9yaWdpbmFsQWZmaXhTdHlsZSAmJiBhZmZpeFN0eWxlICYmIGlzV2luZG93KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChzaGFsbG93RXF1YWwob3JpZ2luYWxBZmZpeFN0eWxlLCBhZmZpeFN0eWxlKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZml4ZWQgPSAhIWFmZml4U3R5bGU7XHJcbiAgICBjb25zdCB3cmFwRWwgPSB0aGlzLmZpeGVkRWwubmF0aXZlRWxlbWVudDtcclxuICAgIHdyYXBFbC5zdHlsZS5jc3NUZXh0ID0gZ2V0U3R5bGVBc1RleHQoYWZmaXhTdHlsZSk7XHJcbiAgICB0aGlzLmFmZml4U3R5bGUgPSBhZmZpeFN0eWxlO1xyXG4gICAgaWYgKGZpeGVkKSB7XHJcbiAgICAgIHdyYXBFbC5jbGFzc0xpc3QuYWRkKE5aX0FGRklYX0NMU19QUkVGSVgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgd3JhcEVsLmNsYXNzTGlzdC5yZW1vdmUoTlpfQUZGSVhfQ0xTX1BSRUZJWCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKChhZmZpeFN0eWxlICYmICFvcmlnaW5hbEFmZml4U3R5bGUpIHx8ICghYWZmaXhTdHlsZSAmJiBvcmlnaW5hbEFmZml4U3R5bGUpKSB7XHJcbiAgICAgIHRoaXMubnpDaGFuZ2UuZW1pdChmaXhlZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFBsYWNlaG9sZGVyU3R5bGUocGxhY2Vob2xkZXJTdHlsZT86IE5nU3R5bGVJbnRlcmZhY2UpOiB2b2lkIHtcclxuICAgIGNvbnN0IG9yaWdpbmFsUGxhY2Vob2xkZXJTdHlsZSA9IHRoaXMucGxhY2Vob2xkZXJTdHlsZTtcclxuICAgIGlmIChzaGFsbG93RXF1YWwocGxhY2Vob2xkZXJTdHlsZSwgb3JpZ2luYWxQbGFjZWhvbGRlclN0eWxlKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnBsYWNlaG9sZGVyTm9kZS5zdHlsZS5jc3NUZXh0ID0gZ2V0U3R5bGVBc1RleHQocGxhY2Vob2xkZXJTdHlsZSk7XHJcbiAgICB0aGlzLnBsYWNlaG9sZGVyU3R5bGUgPSBwbGFjZWhvbGRlclN0eWxlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzeW5jUGxhY2Vob2xkZXJTdHlsZShlOiBFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmFmZml4U3R5bGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wbGFjZWhvbGRlck5vZGUuc3R5bGUuY3NzVGV4dCA9ICcnO1xyXG4gICAgdGhpcy5wbGFjZWhvbGRlclN0eWxlID0gdW5kZWZpbmVkO1xyXG4gICAgY29uc3Qgc3R5bGVPYmogPSB7XHJcbiAgICAgIHdpZHRoOiB0aGlzLnBsYWNlaG9sZGVyTm9kZS5vZmZzZXRXaWR0aCxcclxuICAgICAgaGVpZ2h0OiB0aGlzLmZpeGVkRWwubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHRcclxuICAgIH07XHJcbiAgICB0aGlzLnNldEFmZml4U3R5bGUoZSwge1xyXG4gICAgICAuLi50aGlzLmFmZml4U3R5bGUsXHJcbiAgICAgIC4uLnN0eWxlT2JqXHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2V0UGxhY2Vob2xkZXJTdHlsZShzdHlsZU9iaik7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVQb3NpdGlvbihlOiBFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdGFyZ2V0Tm9kZSA9IHRoaXMudGFyZ2V0O1xyXG4gICAgbGV0IG9mZnNldFRvcCA9IHRoaXMubnpPZmZzZXRUb3A7XHJcbiAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLnNjcm9sbFNydi5nZXRTY3JvbGwodGFyZ2V0Tm9kZSwgdHJ1ZSk7XHJcbiAgICBjb25zdCBlbGVtT2Zmc2V0ID0gdGhpcy5nZXRPZmZzZXQodGhpcy5wbGFjZWhvbGRlck5vZGUsIHRhcmdldE5vZGUhKTtcclxuICAgIGNvbnN0IGZpeGVkTm9kZSA9IHRoaXMuZml4ZWRFbC5uYXRpdmVFbGVtZW50O1xyXG4gICAgY29uc3QgZWxlbVNpemUgPSB7XHJcbiAgICAgIHdpZHRoOiBmaXhlZE5vZGUub2Zmc2V0V2lkdGgsXHJcbiAgICAgIGhlaWdodDogZml4ZWROb2RlLm9mZnNldEhlaWdodFxyXG4gICAgfTtcclxuICAgIGNvbnN0IG9mZnNldE1vZGUgPSB7XHJcbiAgICAgIHRvcDogZmFsc2UsXHJcbiAgICAgIGJvdHRvbTogZmFsc2VcclxuICAgIH07XHJcbiAgICAvLyBEZWZhdWx0IHRvIGBvZmZzZXRUb3A9MGAuXHJcbiAgICBpZiAodHlwZW9mIG9mZnNldFRvcCAhPT0gJ251bWJlcicgJiYgdHlwZW9mIHRoaXMubnpPZmZzZXRCb3R0b20gIT09ICdudW1iZXInKSB7XHJcbiAgICAgIG9mZnNldE1vZGUudG9wID0gdHJ1ZTtcclxuICAgICAgb2Zmc2V0VG9wID0gMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG9mZnNldE1vZGUudG9wID0gdHlwZW9mIG9mZnNldFRvcCA9PT0gJ251bWJlcic7XHJcbiAgICAgIG9mZnNldE1vZGUuYm90dG9tID0gdHlwZW9mIHRoaXMubnpPZmZzZXRCb3R0b20gPT09ICdudW1iZXInO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdGFyZ2V0UmVjdCA9IHRoaXMuZ2V0VGFyZ2V0UmVjdCh0YXJnZXROb2RlIGFzIFdpbmRvdyk7XHJcbiAgICBjb25zdCB0YXJnZXRJbm5lckhlaWdodCA9ICh0YXJnZXROb2RlIGFzIFdpbmRvdykuaW5uZXJIZWlnaHQgfHwgKHRhcmdldE5vZGUgYXMgSFRNTEVsZW1lbnQpLmNsaWVudEhlaWdodDtcclxuICAgIGlmIChzY3JvbGxUb3AgPj0gZWxlbU9mZnNldC50b3AgLSAob2Zmc2V0VG9wIGFzIG51bWJlcikgJiYgb2Zmc2V0TW9kZS50b3ApIHtcclxuICAgICAgY29uc3Qgd2lkdGggPSBlbGVtT2Zmc2V0LndpZHRoO1xyXG4gICAgICBjb25zdCB0b3AgPSB0YXJnZXRSZWN0LnRvcCArIChvZmZzZXRUb3AgYXMgbnVtYmVyKTtcclxuICAgICAgdGhpcy5zZXRBZmZpeFN0eWxlKGUsIHtcclxuICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgICAgICB0b3AsXHJcbiAgICAgICAgbGVmdDogdGFyZ2V0UmVjdC5sZWZ0ICsgZWxlbU9mZnNldC5sZWZ0LFxyXG4gICAgICAgIG1heEhlaWdodDogYGNhbGMoMTAwdmggLSAke3RvcH1weClgLFxyXG4gICAgICAgIHdpZHRoXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnNldFBsYWNlaG9sZGVyU3R5bGUoe1xyXG4gICAgICAgIHdpZHRoLFxyXG4gICAgICAgIGhlaWdodDogZWxlbVNpemUuaGVpZ2h0XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChzY3JvbGxUb3AgPD0gZWxlbU9mZnNldC50b3AgKyBlbGVtU2l6ZS5oZWlnaHQgKyAodGhpcy5uek9mZnNldEJvdHRvbSBhcyBudW1iZXIpIC0gdGFyZ2V0SW5uZXJIZWlnaHQgJiYgb2Zmc2V0TW9kZS5ib3R0b20pIHtcclxuICAgICAgY29uc3QgdGFyZ2V0Qm90dG9tT2ZmZXQgPSB0YXJnZXROb2RlID09PSB3aW5kb3cgPyAwIDogd2luZG93LmlubmVySGVpZ2h0IC0gdGFyZ2V0UmVjdC5ib3R0b20hO1xyXG4gICAgICBjb25zdCB3aWR0aCA9IGVsZW1PZmZzZXQud2lkdGg7XHJcbiAgICAgIHRoaXMuc2V0QWZmaXhTdHlsZShlLCB7XHJcbiAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICAgICAgYm90dG9tOiB0YXJnZXRCb3R0b21PZmZldCArICh0aGlzLm56T2Zmc2V0Qm90dG9tIGFzIG51bWJlciksXHJcbiAgICAgICAgbGVmdDogdGFyZ2V0UmVjdC5sZWZ0ICsgZWxlbU9mZnNldC5sZWZ0LFxyXG4gICAgICAgIHdpZHRoXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnNldFBsYWNlaG9sZGVyU3R5bGUoe1xyXG4gICAgICAgIHdpZHRoLFxyXG4gICAgICAgIGhlaWdodDogZWxlbU9mZnNldC5oZWlnaHRcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoZS50eXBlID09PSAncmVzaXplJyAmJiB0aGlzLmFmZml4U3R5bGUgJiYgdGhpcy5hZmZpeFN0eWxlLnBvc2l0aW9uID09PSAnZml4ZWQnICYmIHRoaXMucGxhY2Vob2xkZXJOb2RlLm9mZnNldFdpZHRoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBZmZpeFN0eWxlKGUsIHtcclxuICAgICAgICAgIC4uLnRoaXMuYWZmaXhTdHlsZSxcclxuICAgICAgICAgIHdpZHRoOiB0aGlzLnBsYWNlaG9sZGVyTm9kZS5vZmZzZXRXaWR0aFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2V0QWZmaXhTdHlsZShlKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNldFBsYWNlaG9sZGVyU3R5bGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZS50eXBlID09PSAncmVzaXplJykge1xyXG4gICAgICB0aGlzLnN5bmNQbGFjZWhvbGRlclN0eWxlKGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8ZGl2ICNmaXhlZEVsPlxyXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC9kaXY+XHJcbiJdfQ==