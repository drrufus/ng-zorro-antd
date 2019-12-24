import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ContentObserver } from '@angular/cdk/observers';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, HostBinding, Inject, Input, NgZone, Optional, QueryList, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import { findFirstNotEmptyNode, findLastNotEmptyNode, InputBoolean, isEmpty, NZ_WAVE_GLOBAL_CONFIG, NzConfigService, NzUpdateHostClassService, NzWaveDirective, WithConfig } from 'ng-zorro-antd/core';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/observers";
import * as i2 from "ng-zorro-antd/core";
import * as i3 from "@angular/common";
import * as i4 from "ng-zorro-antd/icon";
const _c0 = ["contentElement"];
const _c1 = ["nz-button", ""];
function NzButtonComponent_i_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 2);
} }
const _c2 = ["*"];
const NZ_CONFIG_COMPONENT_NAME = 'button';
export class NzButtonComponent {
    constructor(elementRef, cdr, renderer, contentObserver, nzUpdateHostClassService, ngZone, nzConfigService, waveConfig, animationType) {
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.renderer = renderer;
        this.contentObserver = contentObserver;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.ngZone = ngZone;
        this.nzConfigService = nzConfigService;
        this.waveConfig = waveConfig;
        this.animationType = animationType;
        this.nzWave = new NzWaveDirective(this.ngZone, this.elementRef, this.waveConfig, this.animationType);
        this.nzBlock = false;
        this.nzGhost = false;
        this.nzSearch = false;
        this.nzLoading = false;
        this.nzType = 'default';
        this.nzShape = null;
        this.el = this.elementRef.nativeElement;
        this.isInDropdown = false;
        this.iconOnly = false;
        this.destroy$ = new Subject();
        this.renderer.addClass(elementRef.nativeElement, 'ant-btn');
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            this.setClassMap();
            this.cdr.markForCheck();
        });
    }
    /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289 */
    setClassMap() {
        const prefixCls = 'ant-btn';
        const sizeMap = { large: 'lg', small: 'sm' };
        this.nzUpdateHostClassService.updateHostClass(this.el, {
            [`${prefixCls}-${this.nzType}`]: this.nzType,
            [`${prefixCls}-${this.nzShape}`]: this.nzShape,
            [`${prefixCls}-${sizeMap[this.nzSize]}`]: sizeMap[this.nzSize],
            [`${prefixCls}-loading`]: this.nzLoading,
            [`${prefixCls}-icon-only`]: this.iconOnly && !this.nzSearch && !this.isInDropdown,
            [`${prefixCls}-background-ghost`]: this.nzGhost,
            [`${prefixCls}-block`]: this.nzBlock,
            [`ant-input-search-button`]: this.nzSearch
        });
    }
    updateIconDisplay(value) {
        if (this.iconElement) {
            this.renderer.setStyle(this.iconElement, 'display', value ? 'none' : 'inline-block');
        }
    }
    checkContent() {
        const hasIcon = this.listOfIconElement && this.listOfIconElement.length;
        if (hasIcon) {
            this.moveIcon();
        }
        this.renderer.removeStyle(this.contentElement.nativeElement, 'display');
        /** https://github.com/angular/angular/issues/12530 **/
        if (isEmpty(this.contentElement.nativeElement)) {
            this.renderer.setStyle(this.contentElement.nativeElement, 'display', 'none');
            this.iconOnly = !!hasIcon;
        }
        else {
            this.renderer.removeStyle(this.contentElement.nativeElement, 'display');
            this.iconOnly = false;
        }
        this.setClassMap();
        this.updateIconDisplay(this.nzLoading);
        if (!this.cdr.destroyed) {
            this.cdr.detectChanges();
        }
    }
    moveIcon() {
        if (this.listOfIconElement && this.listOfIconElement.length) {
            const firstChildElement = findFirstNotEmptyNode(this.contentElement.nativeElement);
            const lastChildElement = findLastNotEmptyNode(this.contentElement.nativeElement);
            if (firstChildElement && firstChildElement === this.listOfIconElement.first.nativeElement) {
                this.renderer.insertBefore(this.el, firstChildElement, this.contentElement.nativeElement);
                this.iconElement = firstChildElement;
            }
            else if (lastChildElement && lastChildElement === this.listOfIconElement.last.nativeElement) {
                this.renderer.appendChild(this.el, lastChildElement);
            }
        }
    }
    ngAfterContentInit() {
        this.contentObserver
            .observe(this.contentElement)
            .pipe(startWith(true), takeUntil(this.destroy$))
            .subscribe(() => {
            // https://github.com/NG-ZORRO/ng-zorro-antd/issues/3079
            Promise.resolve().then(() => this.checkContent());
        });
    }
    ngOnInit() {
        this.setClassMap();
        this.nzWave.ngOnInit();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.nzWave.ngOnDestroy();
    }
    ngOnChanges(changes) {
        if (changes.nzBlock ||
            changes.nzGhost ||
            changes.nzSearch ||
            changes.nzType ||
            changes.nzShape ||
            changes.nzSize ||
            changes.nzLoading) {
            this.setClassMap();
        }
        if (changes.nzLoading) {
            this.updateIconDisplay(this.nzLoading);
        }
        if (changes.nzType && changes.nzType.currentValue === 'link') {
            this.nzWave.disable();
        }
        else {
            this.nzWave.enable();
        }
    }
}
/** @nocollapse */ NzButtonComponent.ɵfac = function NzButtonComponent_Factory(t) { return new (t || NzButtonComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.ContentObserver), i0.ɵɵdirectiveInject(i2.NzUpdateHostClassService), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i2.NzConfigService), i0.ɵɵdirectiveInject(NZ_WAVE_GLOBAL_CONFIG, 8), i0.ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8)); };
/** @nocollapse */ NzButtonComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzButtonComponent, selectors: [["", "nz-button", ""]], contentQueries: function NzButtonComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, NzIconDirective, false, ElementRef);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listOfIconElement = _t);
    } }, viewQuery: function NzButtonComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.contentElement = _t.first);
    } }, hostBindings: function NzButtonComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        i0.ɵɵallocHostVars(1);
    } if (rf & 2) {
        i0.ɵɵattribute("nz-wave", ctx.nzWave);
    } }, inputs: { nzBlock: "nzBlock", nzGhost: "nzGhost", nzSearch: "nzSearch", nzLoading: "nzLoading", nzType: "nzType", nzShape: "nzShape", nzSize: "nzSize" }, exportAs: ["nzButton"], features: [i0.ɵɵProvidersFeature([NzUpdateHostClassService]), i0.ɵɵNgOnChangesFeature()], attrs: _c1, ngContentSelectors: _c2, decls: 4, vars: 1, consts: [["nz-icon", "", "nzType", "loading", 4, "ngIf"], ["contentElement", ""], ["nz-icon", "", "nzType", "loading"]], template: function NzButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, NzButtonComponent_i_0_Template, 1, 0, "i", 0);
        i0.ɵɵelementStart(1, "span", null, 1);
        i0.ɵɵprojection(3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.nzLoading);
    } }, directives: [i3.NgIf, i4.NzIconDirective], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzButtonComponent.prototype, "nzBlock", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzButtonComponent.prototype, "nzGhost", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzButtonComponent.prototype, "nzSearch", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzButtonComponent.prototype, "nzLoading", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default'),
    __metadata("design:type", String)
], NzButtonComponent.prototype, "nzSize", void 0);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzButtonComponent, [{
        type: Component,
        args: [{
                selector: '[nz-button]',
                exportAs: 'nzButton',
                providers: [NzUpdateHostClassService],
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                templateUrl: './nz-button.component.html'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }, { type: i1.ContentObserver }, { type: i2.NzUpdateHostClassService }, { type: i0.NgZone }, { type: i2.NzConfigService }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [NZ_WAVE_GLOBAL_CONFIG]
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [ANIMATION_MODULE_TYPE]
            }] }]; }, { contentElement: [{
            type: ViewChild,
            args: ['contentElement', { static: true }]
        }], listOfIconElement: [{
            type: ContentChildren,
            args: [NzIconDirective, { read: ElementRef }]
        }], nzWave: [{
            type: HostBinding,
            args: ['attr.nz-wave']
        }], nzBlock: [{
            type: Input
        }], nzGhost: [{
            type: Input
        }], nzSearch: [{
            type: Input
        }], nzLoading: [{
            type: Input
        }], nzType: [{
            type: Input
        }], nzShape: [{
            type: Input
        }], nzSize: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvYnV0dG9uLyIsInNvdXJjZXMiOlsibnotYnV0dG9uLmNvbXBvbmVudC50cyIsIm56LWJ1dHRvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsVUFBVSxFQUNWLFdBQVcsRUFDWCxNQUFNLEVBQ04sS0FBSyxFQUNMLE1BQU0sRUFJTixRQUFRLEVBQ1IsU0FBUyxFQUNULFNBQVMsRUFFVCxTQUFTLEVBQ1QsaUJBQWlCLEVBRWxCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRTdFLE9BQU8sRUFDTCxxQkFBcUIsRUFDckIsb0JBQW9CLEVBQ3BCLFlBQVksRUFDWixPQUFPLEVBQ1AscUJBQXFCLEVBQ3JCLGVBQWUsRUFHZix3QkFBd0IsRUFFeEIsZUFBZSxFQUNmLFVBQVUsRUFDWCxNQUFNLG9CQUFvQixDQUFDO0FBQzVCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7OztJQ2pEdEQsdUJBQWtEOzs7QURzRGxELE1BQU0sd0JBQXdCLEdBQUcsUUFBUSxDQUFDO0FBVzFDLE1BQU0sT0FBTyxpQkFBaUI7SUEyRTVCLFlBQ1UsVUFBc0IsRUFDdEIsR0FBc0IsRUFDdEIsUUFBbUIsRUFDbkIsZUFBZ0MsRUFDaEMsd0JBQWtELEVBQ2xELE1BQWMsRUFDZixlQUFnQyxF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QUFDekI7SUFBZixZQUFZLEVBQUU7O2tEQUEwQjtBQUN6QjtJQUFmLFlBQVksRUFBRTs7bURBQTJCO0FBQzFCO0lBQWYsWUFBWSxFQUFFOztvREFBNEI7QUFHTTtJQUFoRCxVQUFVLENBQUMsd0JBQXdCLEVBQUUsU0FBUyxDQUFDOztpREFBdUI7a0RBWHJFLGlCQUFpQjtjQVQ3QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRSxVQUFVO2dCQUNwQixTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztnQkFDckMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxXQUFXLEVBQUUsNEJBQTRCO2FBQzFDOztzQkFvRkksUUFBUTs7c0JBQUksTUFBTTt1QkFBQyxxQkFBcUI7O3NCQUN4QyxRQUFROztzQkFBSSxNQUFNO3VCQUFDLHFCQUFxQjs7a0JBbkYxQyxTQUFTO21CQUFDLGdCQUFnQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7a0JBQzVDLGVBQWU7bUJBQUMsZUFBZSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTs7a0JBQ3JELFdBQVc7bUJBQUMsY0FBYzs7a0JBRTFCLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENvbnRlbnRPYnNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vYnNlcnZlcnMnO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBFbGVtZW50UmVmLFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIEluamVjdCxcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvbixcclxuICBWaWV3UmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFOSU1BVElPTl9NT0RVTEVfVFlQRSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGZpbmRGaXJzdE5vdEVtcHR5Tm9kZSxcclxuICBmaW5kTGFzdE5vdEVtcHR5Tm9kZSxcclxuICBJbnB1dEJvb2xlYW4sXHJcbiAgaXNFbXB0eSxcclxuICBOWl9XQVZFX0dMT0JBTF9DT05GSUcsXHJcbiAgTnpDb25maWdTZXJ2aWNlLFxyXG4gIE56U2l6ZUxEU1R5cGUsXHJcbiAgTnpTaXplTWFwLFxyXG4gIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSxcclxuICBOeldhdmVDb25maWcsXHJcbiAgTnpXYXZlRGlyZWN0aXZlLFxyXG4gIFdpdGhDb25maWdcclxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOekljb25EaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHN0YXJ0V2l0aCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuZXhwb3J0IHR5cGUgTnpCdXR0b25UeXBlID0gJ3ByaW1hcnknIHwgJ2Rhc2hlZCcgfCAnZGFuZ2VyJyB8ICdkZWZhdWx0JyB8ICdsaW5rJztcclxuZXhwb3J0IHR5cGUgTnpCdXR0b25TaGFwZSA9ICdjaXJjbGUnIHwgJ3JvdW5kJyB8IG51bGw7XHJcblxyXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAnYnV0dG9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnW256LWJ1dHRvbl0nLFxyXG4gIGV4cG9ydEFzOiAnbnpCdXR0b24nLFxyXG4gIHByb3ZpZGVyczogW056VXBkYXRlSG9zdENsYXNzU2VydmljZV0sXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotYnV0dG9uLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcclxuICBAVmlld0NoaWxkKCdjb250ZW50RWxlbWVudCcsIHsgc3RhdGljOiB0cnVlIH0pIGNvbnRlbnRFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oTnpJY29uRGlyZWN0aXZlLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgbGlzdE9mSWNvbkVsZW1lbnQ6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcclxuICBASG9zdEJpbmRpbmcoJ2F0dHIubnotd2F2ZScpIG56V2F2ZSA9IG5ldyBOeldhdmVEaXJlY3RpdmUodGhpcy5uZ1pvbmUsIHRoaXMuZWxlbWVudFJlZiwgdGhpcy53YXZlQ29uZmlnLCB0aGlzLmFuaW1hdGlvblR5cGUpO1xyXG5cclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpCbG9jazogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekdob3N0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2VhcmNoOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56TG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56VHlwZTogTnpCdXR0b25UeXBlID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIG56U2hhcGU6IE56QnV0dG9uU2hhcGUgPSBudWxsO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgJ2RlZmF1bHQnKSBuelNpemU6IE56U2l6ZUxEU1R5cGU7XHJcblxyXG4gIHJlYWRvbmx5IGVsOiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gIGlzSW5Ecm9wZG93biA9IGZhbHNlO1xyXG4gIHByaXZhdGUgaWNvbkVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gIHByaXZhdGUgaWNvbk9ubHkgPSBmYWxzZTtcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgLyoqIHRlbXAgc29sdXRpb24gc2luY2Ugbm8gbWV0aG9kIGFkZCBjbGFzc01hcCB0byBob3N0IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzcyODkgKi9cclxuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHByZWZpeENscyA9ICdhbnQtYnRuJztcclxuICAgIGNvbnN0IHNpemVNYXA6IE56U2l6ZU1hcCA9IHsgbGFyZ2U6ICdsZycsIHNtYWxsOiAnc20nIH07XHJcbiAgICB0aGlzLm56VXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbCwge1xyXG4gICAgICBbYCR7cHJlZml4Q2xzfS0ke3RoaXMubnpUeXBlfWBdOiB0aGlzLm56VHlwZSxcclxuICAgICAgW2Ake3ByZWZpeENsc30tJHt0aGlzLm56U2hhcGV9YF06IHRoaXMubnpTaGFwZSxcclxuICAgICAgW2Ake3ByZWZpeENsc30tJHtzaXplTWFwW3RoaXMubnpTaXplXX1gXTogc2l6ZU1hcFt0aGlzLm56U2l6ZV0sXHJcbiAgICAgIFtgJHtwcmVmaXhDbHN9LWxvYWRpbmdgXTogdGhpcy5uekxvYWRpbmcsXHJcbiAgICAgIFtgJHtwcmVmaXhDbHN9LWljb24tb25seWBdOiB0aGlzLmljb25Pbmx5ICYmICF0aGlzLm56U2VhcmNoICYmICF0aGlzLmlzSW5Ecm9wZG93bixcclxuICAgICAgW2Ake3ByZWZpeENsc30tYmFja2dyb3VuZC1naG9zdGBdOiB0aGlzLm56R2hvc3QsXHJcbiAgICAgIFtgJHtwcmVmaXhDbHN9LWJsb2NrYF06IHRoaXMubnpCbG9jayxcclxuICAgICAgW2BhbnQtaW5wdXQtc2VhcmNoLWJ1dHRvbmBdOiB0aGlzLm56U2VhcmNoXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUljb25EaXNwbGF5KHZhbHVlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pY29uRWxlbWVudCkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuaWNvbkVsZW1lbnQsICdkaXNwbGF5JywgdmFsdWUgPyAnbm9uZScgOiAnaW5saW5lLWJsb2NrJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja0NvbnRlbnQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBoYXNJY29uID0gdGhpcy5saXN0T2ZJY29uRWxlbWVudCAmJiB0aGlzLmxpc3RPZkljb25FbGVtZW50Lmxlbmd0aDtcclxuICAgIGlmIChoYXNJY29uKSB7XHJcbiAgICAgIHRoaXMubW92ZUljb24oKTtcclxuICAgIH1cclxuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5jb250ZW50RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScpO1xyXG4gICAgLyoqIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzEyNTMwICoqL1xyXG4gICAgaWYgKGlzRW1wdHkodGhpcy5jb250ZW50RWxlbWVudC5uYXRpdmVFbGVtZW50KSkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuY29udGVudEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICB0aGlzLmljb25Pbmx5ID0gISFoYXNJY29uO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmNvbnRlbnRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5Jyk7XHJcbiAgICAgIHRoaXMuaWNvbk9ubHkgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICAgIHRoaXMudXBkYXRlSWNvbkRpc3BsYXkodGhpcy5uekxvYWRpbmcpO1xyXG4gICAgaWYgKCEodGhpcy5jZHIgYXMgVmlld1JlZikuZGVzdHJveWVkKSB7XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1vdmVJY29uKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubGlzdE9mSWNvbkVsZW1lbnQgJiYgdGhpcy5saXN0T2ZJY29uRWxlbWVudC5sZW5ndGgpIHtcclxuICAgICAgY29uc3QgZmlyc3RDaGlsZEVsZW1lbnQgPSBmaW5kRmlyc3ROb3RFbXB0eU5vZGUodGhpcy5jb250ZW50RWxlbWVudC5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgY29uc3QgbGFzdENoaWxkRWxlbWVudCA9IGZpbmRMYXN0Tm90RW1wdHlOb2RlKHRoaXMuY29udGVudEVsZW1lbnQubmF0aXZlRWxlbWVudCk7XHJcbiAgICAgIGlmIChmaXJzdENoaWxkRWxlbWVudCAmJiBmaXJzdENoaWxkRWxlbWVudCA9PT0gdGhpcy5saXN0T2ZJY29uRWxlbWVudC5maXJzdC5uYXRpdmVFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5pbnNlcnRCZWZvcmUodGhpcy5lbCwgZmlyc3RDaGlsZEVsZW1lbnQsIHRoaXMuY29udGVudEVsZW1lbnQubmF0aXZlRWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5pY29uRWxlbWVudCA9IGZpcnN0Q2hpbGRFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICB9IGVsc2UgaWYgKGxhc3RDaGlsZEVsZW1lbnQgJiYgbGFzdENoaWxkRWxlbWVudCA9PT0gdGhpcy5saXN0T2ZJY29uRWxlbWVudC5sYXN0Lm5hdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuZWwsIGxhc3RDaGlsZEVsZW1lbnQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgY29udGVudE9ic2VydmVyOiBDb250ZW50T2JzZXJ2ZXIsXHJcbiAgICBwcml2YXRlIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcclxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcclxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTlpfV0FWRV9HTE9CQUxfQ09ORklHKSBwcml2YXRlIHdhdmVDb25maWc6IE56V2F2ZUNvbmZpZyxcclxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQU5JTUFUSU9OX01PRFVMRV9UWVBFKSBwcml2YXRlIGFuaW1hdGlvblR5cGU6IHN0cmluZ1xyXG4gICkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtYnRuJyk7XHJcbiAgICB0aGlzLm56Q29uZmlnU2VydmljZVxyXG4gICAgICAuZ2V0Q29uZmlnQ2hhbmdlRXZlbnRGb3JDb21wb25lbnQoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbnRlbnRPYnNlcnZlclxyXG4gICAgICAub2JzZXJ2ZSh0aGlzLmNvbnRlbnRFbGVtZW50KVxyXG4gICAgICAucGlwZShzdGFydFdpdGgodHJ1ZSksIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvaXNzdWVzLzMwNzlcclxuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMuY2hlY2tDb250ZW50KCkpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgdGhpcy5ueldhdmUubmdPbkluaXQoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgICB0aGlzLm56V2F2ZS5uZ09uRGVzdHJveSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKFxyXG4gICAgICBjaGFuZ2VzLm56QmxvY2sgfHxcclxuICAgICAgY2hhbmdlcy5uekdob3N0IHx8XHJcbiAgICAgIGNoYW5nZXMubnpTZWFyY2ggfHxcclxuICAgICAgY2hhbmdlcy5uelR5cGUgfHxcclxuICAgICAgY2hhbmdlcy5uelNoYXBlIHx8XHJcbiAgICAgIGNoYW5nZXMubnpTaXplIHx8XHJcbiAgICAgIGNoYW5nZXMubnpMb2FkaW5nXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMubnpMb2FkaW5nKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlSWNvbkRpc3BsYXkodGhpcy5uekxvYWRpbmcpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMubnpUeXBlICYmIGNoYW5nZXMubnpUeXBlLmN1cnJlbnRWYWx1ZSA9PT0gJ2xpbmsnKSB7XHJcbiAgICAgIHRoaXMubnpXYXZlLmRpc2FibGUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubnpXYXZlLmVuYWJsZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8aSBuei1pY29uIG56VHlwZT1cImxvYWRpbmdcIiAqbmdJZj1cIm56TG9hZGluZ1wiPjwvaT5cclxuPHNwYW4gI2NvbnRlbnRFbGVtZW50PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L3NwYW4+XHJcbiJdfQ==