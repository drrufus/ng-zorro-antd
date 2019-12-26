/**
 * @fileoverview added by tsickle
 * Generated from: nz-back-top.component.ts
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
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Inject, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { fadeMotion, InputNumber, NzConfigService, NzScrollService, WithConfig } from 'ng-zorro-antd/core';
import { fromEvent } from 'rxjs';
import { distinctUntilChanged, throttleTime } from 'rxjs/operators';
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'backTop';
export class NzBackTopComponent {
    /**
     * @param {?} nzConfigService
     * @param {?} scrollSrv
     * @param {?} doc
     * @param {?} platform
     * @param {?} cd
     */
    constructor(nzConfigService, scrollSrv, doc, platform, cd) {
        this.nzConfigService = nzConfigService;
        this.scrollSrv = scrollSrv;
        this.doc = doc;
        this.platform = platform;
        this.cd = cd;
        this.scroll$ = null;
        this.target = null;
        this.visible = false;
        this.nzClick = new EventEmitter();
    }
    /**
     * @param {?} el
     * @return {?}
     */
    set nzTarget(el) {
        this.target = typeof el === 'string' ? this.doc.querySelector(el) : el;
        this.registerScrollEvent();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.scroll$) {
            this.registerScrollEvent();
        }
    }
    /**
     * @return {?}
     */
    clickBackTop() {
        this.scrollSrv.scrollTo(this.getTarget(), 0);
        this.nzClick.emit(true);
    }
    /**
     * @private
     * @return {?}
     */
    getTarget() {
        return this.target || window;
    }
    /**
     * @private
     * @return {?}
     */
    handleScroll() {
        if (this.visible === this.scrollSrv.getScroll(this.getTarget()) > this.nzVisibilityHeight) {
            return;
        }
        this.visible = !this.visible;
        this.cd.markForCheck();
    }
    /**
     * @private
     * @return {?}
     */
    removeListen() {
        if (this.scroll$) {
            this.scroll$.unsubscribe();
        }
    }
    /**
     * @private
     * @return {?}
     */
    registerScrollEvent() {
        if (!this.platform.isBrowser) {
            return;
        }
        this.removeListen();
        this.handleScroll();
        this.scroll$ = fromEvent(this.getTarget(), 'scroll')
            .pipe(throttleTime(50), distinctUntilChanged())
            .subscribe((/**
         * @return {?}
         */
        () => this.handleScroll()));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.removeListen();
    }
}
NzBackTopComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-back-top',
                exportAs: 'nzBackTop',
                animations: [fadeMotion],
                template: "<div class=\"ant-back-top\" (click)=\"clickBackTop()\" @fadeMotion *ngIf=\"visible\">\r\n  <ng-template #defaultContent>\r\n    <div class=\"ant-back-top-content\">\r\n      <div class=\"ant-back-top-icon\"></div>\r\n    </div>\r\n  </ng-template>\r\n  <ng-template [ngTemplateOutlet]=\"nzTemplate || defaultContent\"></ng-template>\r\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false
            }] }
];
/** @nocollapse */
NzBackTopComponent.ctorParameters = () => [
    { type: NzConfigService },
    { type: NzScrollService },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Platform },
    { type: ChangeDetectorRef }
];
NzBackTopComponent.propDecorators = {
    nzTemplate: [{ type: Input }],
    nzVisibilityHeight: [{ type: Input }],
    nzTarget: [{ type: Input }],
    nzClick: [{ type: Output }]
};
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, 400), InputNumber(),
    tslib_1.__metadata("design:type", Number)
], NzBackTopComponent.prototype, "nzVisibilityHeight", void 0);
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzBackTopComponent.prototype.scroll$;
    /**
     * @type {?}
     * @private
     */
    NzBackTopComponent.prototype.target;
    /** @type {?} */
    NzBackTopComponent.prototype.visible;
    /** @type {?} */
    NzBackTopComponent.prototype.nzTemplate;
    /** @type {?} */
    NzBackTopComponent.prototype.nzVisibilityHeight;
    /** @type {?} */
    NzBackTopComponent.prototype.nzClick;
    /** @type {?} */
    NzBackTopComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzBackTopComponent.prototype.scrollSrv;
    /**
     * @type {?}
     * @private
     */
    NzBackTopComponent.prototype.doc;
    /**
     * @type {?}
     * @private
     */
    NzBackTopComponent.prototype.platform;
    /**
     * @type {?}
     * @private
     */
    NzBackTopComponent.prototype.cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYmFjay10b3AuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9iYWNrLXRvcC8iLCJzb3VyY2VzIjpbIm56LWJhY2stdG9wLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBR0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMzRyxPQUFPLEVBQUUsU0FBUyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O01BRTlELHdCQUF3QixHQUFHLFNBQVM7QUFXMUMsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7Ozs7SUFpQjdCLFlBQ1MsZUFBZ0MsRUFDL0IsU0FBMEIsRUFFUixHQUFRLEVBQzFCLFFBQWtCLEVBQ2xCLEVBQXFCO1FBTHRCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUMvQixjQUFTLEdBQVQsU0FBUyxDQUFpQjtRQUVSLFFBQUcsR0FBSCxHQUFHLENBQUs7UUFDMUIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQXRCdkIsWUFBTyxHQUF3QixJQUFJLENBQUM7UUFDcEMsV0FBTSxHQUF1QixJQUFJLENBQUM7UUFFMUMsWUFBTyxHQUFZLEtBQUssQ0FBQztRQVdOLFlB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Qyx1Q0FBa0M7Ozs7O0lBRWxDLGlDQUFrQzs7Ozs7SUFDbEMsc0NBQTBCOzs7OztJQUMxQixnQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5qZWN0LFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBmYWRlTW90aW9uLCBJbnB1dE51bWJlciwgTnpDb25maWdTZXJ2aWNlLCBOelNjcm9sbFNlcnZpY2UsIFdpdGhDb25maWcgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgdGhyb3R0bGVUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ2JhY2tUb3AnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei1iYWNrLXRvcCcsXHJcbiAgZXhwb3J0QXM6ICduekJhY2tUb3AnLFxyXG4gIGFuaW1hdGlvbnM6IFtmYWRlTW90aW9uXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotYmFjay10b3AuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2VcclxufSlcclxuZXhwb3J0IGNsYXNzIE56QmFja1RvcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBwcml2YXRlIHNjcm9sbCQ6IFN1YnNjcmlwdGlvbiB8IG51bGwgPSBudWxsO1xyXG4gIHByaXZhdGUgdGFyZ2V0OiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xyXG5cclxuICB2aXNpYmxlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIG56VGVtcGxhdGU6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgNDAwKSBASW5wdXROdW1iZXIoKSBuelZpc2liaWxpdHlIZWlnaHQ6IG51bWJlcjtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpUYXJnZXQoZWw6IHN0cmluZyB8IEhUTUxFbGVtZW50KSB7XHJcbiAgICB0aGlzLnRhcmdldCA9IHR5cGVvZiBlbCA9PT0gJ3N0cmluZycgPyB0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKGVsKSA6IGVsO1xyXG4gICAgdGhpcy5yZWdpc3RlclNjcm9sbEV2ZW50KCk7XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDbGljazogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcclxuICAgIHByaXZhdGUgc2Nyb2xsU3J2OiBOelNjcm9sbFNlcnZpY2UsXHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LFxyXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sXHJcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuc2Nyb2xsJCkge1xyXG4gICAgICB0aGlzLnJlZ2lzdGVyU2Nyb2xsRXZlbnQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsaWNrQmFja1RvcCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2Nyb2xsU3J2LnNjcm9sbFRvKHRoaXMuZ2V0VGFyZ2V0KCksIDApO1xyXG4gICAgdGhpcy5uekNsaWNrLmVtaXQodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFRhcmdldCgpOiBIVE1MRWxlbWVudCB8IFdpbmRvdyB7XHJcbiAgICByZXR1cm4gdGhpcy50YXJnZXQgfHwgd2luZG93O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVTY3JvbGwoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy52aXNpYmxlID09PSB0aGlzLnNjcm9sbFNydi5nZXRTY3JvbGwodGhpcy5nZXRUYXJnZXQoKSkgPiB0aGlzLm56VmlzaWJpbGl0eUhlaWdodCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnZpc2libGUgPSAhdGhpcy52aXNpYmxlO1xyXG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVtb3ZlTGlzdGVuKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc2Nyb2xsJCkge1xyXG4gICAgICB0aGlzLnNjcm9sbCQudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVnaXN0ZXJTY3JvbGxFdmVudCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yZW1vdmVMaXN0ZW4oKTtcclxuICAgIHRoaXMuaGFuZGxlU2Nyb2xsKCk7XHJcbiAgICB0aGlzLnNjcm9sbCQgPSBmcm9tRXZlbnQodGhpcy5nZXRUYXJnZXQoKSwgJ3Njcm9sbCcpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHRocm90dGxlVGltZSg1MCksXHJcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5oYW5kbGVTY3JvbGwoKSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVtb3ZlTGlzdGVuKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==