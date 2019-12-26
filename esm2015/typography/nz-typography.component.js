/**
 * @fileoverview added by tsickle
 * Generated from: nz-typography.component.ts
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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, Renderer2, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { cancelRequestAnimationFrame, isStyleSupport, measure, reqAnimFrame, InputBoolean, InputNumber, NzConfigService, NzDomEventService, WithConfig } from 'ng-zorro-antd/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { NzTextCopyComponent } from './nz-text-copy.component';
import { NzTextEditComponent } from './nz-text-edit.component';
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'typography';
export class NzTypographyComponent {
    /**
     * @param {?} nzConfigService
     * @param {?} host
     * @param {?} cdr
     * @param {?} viewContainerRef
     * @param {?} renderer
     * @param {?} platform
     * @param {?} i18n
     * @param {?} nzDomEventService
     */
    constructor(nzConfigService, host, cdr, viewContainerRef, renderer, platform, i18n, nzDomEventService) {
        this.nzConfigService = nzConfigService;
        this.host = host;
        this.cdr = cdr;
        this.viewContainerRef = viewContainerRef;
        this.renderer = renderer;
        this.platform = platform;
        this.i18n = i18n;
        this.nzDomEventService = nzDomEventService;
        this.nzCopyable = false;
        this.nzEditable = false;
        this.nzDisabled = false;
        this.nzExpandable = false;
        this.nzEllipsis = false;
        this.nzContentChange = new EventEmitter();
        this.nzCopy = new EventEmitter();
        this.nzExpandChange = new EventEmitter();
        // tslint:disable-next-line:no-any
        this.locale = {};
        this.editing = false;
        this.cssEllipsis = false;
        this.isEllipsis = false;
        this.expanded = false;
        this.ellipsisStr = '...';
        this.viewInit = false;
        this.rfaId = -1;
        this.destroy$ = new Subject();
        this.windowResizeSubscription = Subscription.EMPTY;
    }
    /**
     * @return {?}
     */
    get canCssEllipsis() {
        return this.nzEllipsis && this.cssEllipsis && !this.expanded;
    }
    /**
     * @return {?}
     */
    get copyText() {
        return typeof this.nzCopyText === 'string' ? this.nzCopyText : this.nzContent;
    }
    /**
     * @param {?} text
     * @return {?}
     */
    onTextCopy(text) {
        this.nzCopy.emit(text);
    }
    /**
     * @return {?}
     */
    onStartEditing() {
        this.editing = true;
    }
    /**
     * @param {?} text
     * @return {?}
     */
    onEndEditing(text) {
        this.editing = false;
        this.nzContentChange.emit(text);
        if (this.nzContent === text) {
            this.renderOnNextFrame();
        }
    }
    /**
     * @return {?}
     */
    onExpand() {
        this.expanded = true;
        this.nzExpandChange.emit();
    }
    /**
     * @return {?}
     */
    canUseCSSEllipsis() {
        if (this.nzEditable || this.nzCopyable || this.nzExpandable) {
            return false;
        }
        if (this.nzEllipsisRows === 1) {
            return isStyleSupport('textOverflow');
        }
        else {
            return isStyleSupport('webkitLineClamp');
        }
    }
    /**
     * @return {?}
     */
    renderOnNextFrame() {
        cancelRequestAnimationFrame(this.rfaId);
        if (!this.viewInit || !this.nzEllipsis || this.nzEllipsisRows < 0 || this.expanded || !this.platform.isBrowser) {
            return;
        }
        this.rfaId = reqAnimFrame((/**
         * @return {?}
         */
        () => {
            this.syncEllipsis();
        }));
    }
    /**
     * @return {?}
     */
    getOriginContentViewRef() {
        /** @type {?} */
        const viewRef = this.viewContainerRef.createEmbeddedView(this.contentTemplate, {
            content: this.nzContent
        });
        viewRef.detectChanges();
        return {
            viewRef,
            removeView: (/**
             * @return {?}
             */
            () => {
                this.viewContainerRef.remove(this.viewContainerRef.indexOf(viewRef));
            })
        };
    }
    /**
     * @return {?}
     */
    syncEllipsis() {
        if (this.cssEllipsis) {
            return;
        }
        const { viewRef, removeView } = this.getOriginContentViewRef();
        /** @type {?} */
        const fixedNodes = [this.textCopyRef, this.textEditRef, this.expandableBtn]
            .filter((/**
         * @param {?} e
         * @return {?}
         */
        e => e && e.nativeElement))
            .map((/**
         * @param {?} e
         * @return {?}
         */
        e => e.nativeElement));
        const { contentNodes, text, ellipsis } = measure(this.host.nativeElement, this.nzEllipsisRows, viewRef.rootNodes, fixedNodes, this.ellipsisStr);
        removeView();
        this.ellipsisText = text;
        this.isEllipsis = ellipsis;
        /** @type {?} */
        const ellipsisContainerNativeElement = this.ellipsisContainer.nativeElement;
        while (ellipsisContainerNativeElement.firstChild) {
            this.renderer.removeChild(ellipsisContainerNativeElement, ellipsisContainerNativeElement.firstChild);
        }
        contentNodes.forEach((/**
         * @param {?} n
         * @return {?}
         */
        n => {
            this.renderer.appendChild(ellipsisContainerNativeElement, n.cloneNode(true));
        }));
        this.cdr.markForCheck();
    }
    /**
     * @private
     * @return {?}
     */
    renderAndSubscribeWindowResize() {
        if (this.platform.isBrowser) {
            this.windowResizeSubscription.unsubscribe();
            this.cssEllipsis = this.canUseCSSEllipsis();
            this.renderOnNextFrame();
            this.windowResizeSubscription = this.nzDomEventService
                .registerResizeListener()
                .pipe(takeUntil(this.destroy$), finalize((/**
             * @return {?}
             */
            () => this.nzDomEventService.unregisterResizeListener())))
                .subscribe((/**
             * @return {?}
             */
            () => this.renderOnNextFrame()));
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => {
            this.locale = this.i18n.getLocaleData('Text');
            this.cdr.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.viewInit = true;
        this.renderAndSubscribeWindowResize();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzCopyable, nzEditable, nzExpandable, nzEllipsis, nzContent, nzEllipsisRows } = changes;
        if (nzCopyable || nzEditable || nzExpandable || nzEllipsis || nzContent || nzEllipsisRows) {
            if (this.nzEllipsis) {
                if (this.expanded) {
                    this.windowResizeSubscription.unsubscribe();
                }
                else {
                    this.renderAndSubscribeWindowResize();
                }
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.windowResizeSubscription.unsubscribe();
    }
}
NzTypographyComponent.decorators = [
    { type: Component, args: [{
                selector: `
  nz-typography,
  [nz-typography],
  p[nz-paragraph],
  span[nz-text],
  h1[nz-title], h2[nz-title], h3[nz-title], h4[nz-title]
  `,
                exportAs: 'nzTypography',
                template: "<ng-template #contentTemplate let-content=\"content\">\r\n  <ng-content *ngIf=\"!content\"></ng-content>\r\n  {{content}}\r\n</ng-template>\r\n\r\n<ng-container *ngIf=\"!editing\">\r\n  <ng-container *ngIf=\"expanded || (!nzExpandable && nzEllipsisRows === 1) || canCssEllipsis\">\r\n    <ng-template [ngTemplateOutlet]=\"contentTemplate\" [ngTemplateOutletContext]=\"{ content: nzContent}\"></ng-template>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"nzEllipsis && !expanded && (nzEllipsisRows > 1 || nzExpandable)\">\r\n    <span #ellipsisContainer></span>\r\n    <ng-container *ngIf=\"isEllipsis\">{{ellipsisStr}}</ng-container>\r\n    <a #expandable *ngIf=\"nzExpandable && isEllipsis\" class=\"ant-typography-expand\" (click)=\"onExpand()\">{{locale?.expand}}</a>\r\n  </ng-container>\r\n</ng-container>\r\n\r\n<nz-text-edit\r\n  *ngIf=\"nzEditable\"\r\n  [text]=\"nzContent\"\r\n  (endEditing)=\"onEndEditing($event)\"\r\n  (startEditing)=\"onStartEditing()\">\r\n</nz-text-edit>\r\n\r\n<nz-text-copy *ngIf=\"nzCopyable && !editing\" [text]=\"copyText\" (textCopy)=\"onTextCopy($event)\"></nz-text-copy>\r\n\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                host: {
                    '[class.ant-typography]': '!editing',
                    '[class.ant-typography-edit-content]': 'editing',
                    '[class.ant-typography-secondary]': 'nzType === "secondary"',
                    '[class.ant-typography-warning]': 'nzType === "warning"',
                    '[class.ant-typography-danger]': 'nzType === "danger"',
                    '[class.ant-typography-disabled]': 'nzDisabled',
                    '[class.ant-typography-ellipsis]': 'nzEllipsis && !expanded',
                    '[class.ant-typography-ellipsis-single-line]': 'canCssEllipsis && nzEllipsisRows === 1',
                    '[class.ant-typography-ellipsis-multiple-line]': 'canCssEllipsis && nzEllipsisRows > 1',
                    '[style.-webkit-line-clamp]': '(canCssEllipsis && nzEllipsisRows > 1) ? nzEllipsisRows : null'
                }
            }] }
];
/** @nocollapse */
NzTypographyComponent.ctorParameters = () => [
    { type: NzConfigService },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: ViewContainerRef },
    { type: Renderer2 },
    { type: Platform },
    { type: NzI18nService },
    { type: NzDomEventService }
];
NzTypographyComponent.propDecorators = {
    nzCopyable: [{ type: Input }],
    nzEditable: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzExpandable: [{ type: Input }],
    nzEllipsis: [{ type: Input }],
    nzContent: [{ type: Input }],
    nzEllipsisRows: [{ type: Input }],
    nzType: [{ type: Input }],
    nzCopyText: [{ type: Input }],
    nzContentChange: [{ type: Output }],
    nzCopy: [{ type: Output }],
    nzExpandChange: [{ type: Output }],
    textEditRef: [{ type: ViewChild, args: [NzTextEditComponent, { static: false },] }],
    textCopyRef: [{ type: ViewChild, args: [NzTextCopyComponent, { static: false },] }],
    ellipsisContainer: [{ type: ViewChild, args: ['ellipsisContainer', { static: false },] }],
    expandableBtn: [{ type: ViewChild, args: ['expandable', { static: false },] }],
    contentTemplate: [{ type: ViewChild, args: ['contentTemplate', { static: false },] }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTypographyComponent.prototype, "nzCopyable", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTypographyComponent.prototype, "nzEditable", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTypographyComponent.prototype, "nzDisabled", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTypographyComponent.prototype, "nzExpandable", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTypographyComponent.prototype, "nzEllipsis", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, 1), InputNumber(),
    tslib_1.__metadata("design:type", Number)
], NzTypographyComponent.prototype, "nzEllipsisRows", void 0);
if (false) {
    /** @type {?} */
    NzTypographyComponent.prototype.nzCopyable;
    /** @type {?} */
    NzTypographyComponent.prototype.nzEditable;
    /** @type {?} */
    NzTypographyComponent.prototype.nzDisabled;
    /** @type {?} */
    NzTypographyComponent.prototype.nzExpandable;
    /** @type {?} */
    NzTypographyComponent.prototype.nzEllipsis;
    /** @type {?} */
    NzTypographyComponent.prototype.nzContent;
    /** @type {?} */
    NzTypographyComponent.prototype.nzEllipsisRows;
    /** @type {?} */
    NzTypographyComponent.prototype.nzType;
    /** @type {?} */
    NzTypographyComponent.prototype.nzCopyText;
    /** @type {?} */
    NzTypographyComponent.prototype.nzContentChange;
    /** @type {?} */
    NzTypographyComponent.prototype.nzCopy;
    /** @type {?} */
    NzTypographyComponent.prototype.nzExpandChange;
    /** @type {?} */
    NzTypographyComponent.prototype.textEditRef;
    /** @type {?} */
    NzTypographyComponent.prototype.textCopyRef;
    /** @type {?} */
    NzTypographyComponent.prototype.ellipsisContainer;
    /** @type {?} */
    NzTypographyComponent.prototype.expandableBtn;
    /** @type {?} */
    NzTypographyComponent.prototype.contentTemplate;
    /** @type {?} */
    NzTypographyComponent.prototype.locale;
    /** @type {?} */
    NzTypographyComponent.prototype.editing;
    /** @type {?} */
    NzTypographyComponent.prototype.ellipsisText;
    /** @type {?} */
    NzTypographyComponent.prototype.cssEllipsis;
    /** @type {?} */
    NzTypographyComponent.prototype.isEllipsis;
    /** @type {?} */
    NzTypographyComponent.prototype.expanded;
    /** @type {?} */
    NzTypographyComponent.prototype.ellipsisStr;
    /**
     * @type {?}
     * @private
     */
    NzTypographyComponent.prototype.viewInit;
    /**
     * @type {?}
     * @private
     */
    NzTypographyComponent.prototype.rfaId;
    /**
     * @type {?}
     * @private
     */
    NzTypographyComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzTypographyComponent.prototype.windowResizeSubscription;
    /** @type {?} */
    NzTypographyComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzTypographyComponent.prototype.host;
    /**
     * @type {?}
     * @private
     */
    NzTypographyComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzTypographyComponent.prototype.viewContainerRef;
    /**
     * @type {?}
     * @private
     */
    NzTypographyComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzTypographyComponent.prototype.platform;
    /**
     * @type {?}
     * @private
     */
    NzTypographyComponent.prototype.i18n;
    /**
     * @type {?}
     * @private
     */
    NzTypographyComponent.prototype.nzDomEventService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHlwb2dyYXBoeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3R5cG9ncmFwaHkvIiwic291cmNlcyI6WyJuei10eXBvZ3JhcGh5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBRVYsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBQ04sU0FBUyxFQUVULFdBQVcsRUFDWCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJELE9BQU8sRUFDTCwyQkFBMkIsRUFDM0IsY0FBYyxFQUNkLE9BQU8sRUFDUCxZQUFZLEVBQ1osWUFBWSxFQUNaLFdBQVcsRUFDWCxlQUFlLEVBQ2YsaUJBQWlCLEVBQ2pCLFVBQVUsRUFDWCxNQUFNLG9CQUFvQixDQUFDO0FBQzVCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7TUFFekQsd0JBQXdCLEdBQUcsWUFBWTtBQTRCN0MsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7Ozs7Ozs7SUF5Q2hDLFlBQ1MsZUFBZ0MsRUFDL0IsSUFBNkIsRUFDN0IsR0FBc0IsRUFDdEIsZ0JBQWtDLEVBQ2xDLFFBQW1CLEVBQ25CLFFBQWtCLEVBQ2xCLElBQW1CLEVBQ25CLGlC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QUMxQixxQ0FBMkI7Ozs7O0lBQzNCLGtEQUE0QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRW1iZWRkZWRWaWV3UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdDb250YWluZXJSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaW5hbGl6ZSwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBjYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUsXHJcbiAgaXNTdHlsZVN1cHBvcnQsXHJcbiAgbWVhc3VyZSxcclxuICByZXFBbmltRnJhbWUsXHJcbiAgSW5wdXRCb29sZWFuLFxyXG4gIElucHV0TnVtYmVyLFxyXG4gIE56Q29uZmlnU2VydmljZSxcclxuICBOekRvbUV2ZW50U2VydmljZSxcclxuICBXaXRoQ29uZmlnXHJcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcblxyXG5pbXBvcnQgeyBOelRleHRDb3B5Q29tcG9uZW50IH0gZnJvbSAnLi9uei10ZXh0LWNvcHkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpUZXh0RWRpdENvbXBvbmVudCB9IGZyb20gJy4vbnotdGV4dC1lZGl0LmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAndHlwb2dyYXBoeSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogYFxyXG4gIG56LXR5cG9ncmFwaHksXHJcbiAgW256LXR5cG9ncmFwaHldLFxyXG4gIHBbbnotcGFyYWdyYXBoXSxcclxuICBzcGFuW256LXRleHRdLFxyXG4gIGgxW256LXRpdGxlXSwgaDJbbnotdGl0bGVdLCBoM1tuei10aXRsZV0sIGg0W256LXRpdGxlXVxyXG4gIGAsXHJcbiAgZXhwb3J0QXM6ICduelR5cG9ncmFwaHknLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei10eXBvZ3JhcGh5LmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LXR5cG9ncmFwaHldJzogJyFlZGl0aW5nJyxcclxuICAgICdbY2xhc3MuYW50LXR5cG9ncmFwaHktZWRpdC1jb250ZW50XSc6ICdlZGl0aW5nJyxcclxuICAgICdbY2xhc3MuYW50LXR5cG9ncmFwaHktc2Vjb25kYXJ5XSc6ICduelR5cGUgPT09IFwic2Vjb25kYXJ5XCInLFxyXG4gICAgJ1tjbGFzcy5hbnQtdHlwb2dyYXBoeS13YXJuaW5nXSc6ICduelR5cGUgPT09IFwid2FybmluZ1wiJyxcclxuICAgICdbY2xhc3MuYW50LXR5cG9ncmFwaHktZGFuZ2VyXSc6ICduelR5cGUgPT09IFwiZGFuZ2VyXCInLFxyXG4gICAgJ1tjbGFzcy5hbnQtdHlwb2dyYXBoeS1kaXNhYmxlZF0nOiAnbnpEaXNhYmxlZCcsXHJcbiAgICAnW2NsYXNzLmFudC10eXBvZ3JhcGh5LWVsbGlwc2lzXSc6ICduekVsbGlwc2lzICYmICFleHBhbmRlZCcsXHJcbiAgICAnW2NsYXNzLmFudC10eXBvZ3JhcGh5LWVsbGlwc2lzLXNpbmdsZS1saW5lXSc6ICdjYW5Dc3NFbGxpcHNpcyAmJiBuekVsbGlwc2lzUm93cyA9PT0gMScsXHJcbiAgICAnW2NsYXNzLmFudC10eXBvZ3JhcGh5LWVsbGlwc2lzLW11bHRpcGxlLWxpbmVdJzogJ2NhbkNzc0VsbGlwc2lzICYmIG56RWxsaXBzaXNSb3dzID4gMScsXHJcbiAgICAnW3N0eWxlLi13ZWJraXQtbGluZS1jbGFtcF0nOiAnKGNhbkNzc0VsbGlwc2lzICYmIG56RWxsaXBzaXNSb3dzID4gMSkgPyBuekVsbGlwc2lzUm93cyA6IG51bGwnXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpUeXBvZ3JhcGh5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q29weWFibGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpFZGl0YWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RXhwYW5kYWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekVsbGlwc2lzID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpDb250ZW50OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCAxKSBASW5wdXROdW1iZXIoKSBuekVsbGlwc2lzUm93czogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIG56VHlwZTogJ3NlY29uZGFyeScgfCAnd2FybmluZycgfCAnZGFuZ2VyJyB8IHVuZGVmaW5lZDtcclxuICBASW5wdXQoKSBuekNvcHlUZXh0OiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q29udGVudENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNvcHkgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpFeHBhbmRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoTnpUZXh0RWRpdENvbXBvbmVudCwgeyBzdGF0aWM6IGZhbHNlIH0pIHRleHRFZGl0UmVmOiBOelRleHRFZGl0Q29tcG9uZW50O1xyXG4gIEBWaWV3Q2hpbGQoTnpUZXh0Q29weUNvbXBvbmVudCwgeyBzdGF0aWM6IGZhbHNlIH0pIHRleHRDb3B5UmVmOiBOelRleHRDb3B5Q29tcG9uZW50O1xyXG4gIEBWaWV3Q2hpbGQoJ2VsbGlwc2lzQ29udGFpbmVyJywgeyBzdGF0aWM6IGZhbHNlIH0pIGVsbGlwc2lzQ29udGFpbmVyOiBFbGVtZW50UmVmPEhUTUxTcGFuRWxlbWVudD47XHJcbiAgQFZpZXdDaGlsZCgnZXhwYW5kYWJsZScsIHsgc3RhdGljOiBmYWxzZSB9KSBleHBhbmRhYmxlQnRuOiBFbGVtZW50UmVmPEhUTUxTcGFuRWxlbWVudD47XHJcbiAgQFZpZXdDaGlsZCgnY29udGVudFRlbXBsYXRlJywgeyBzdGF0aWM6IGZhbHNlIH0pIGNvbnRlbnRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8eyBjb250ZW50OiBzdHJpbmcgfT47XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBsb2NhbGU6IGFueSA9IHt9O1xyXG4gIGVkaXRpbmcgPSBmYWxzZTtcclxuICBlbGxpcHNpc1RleHQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICBjc3NFbGxpcHNpczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGlzRWxsaXBzaXM6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBleHBhbmRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGVsbGlwc2lzU3RyID0gJy4uLic7XHJcblxyXG4gIGdldCBjYW5Dc3NFbGxpcHNpcygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm56RWxsaXBzaXMgJiYgdGhpcy5jc3NFbGxpcHNpcyAmJiAhdGhpcy5leHBhbmRlZDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdmlld0luaXQgPSBmYWxzZTtcclxuICBwcml2YXRlIHJmYUlkOiBudW1iZXIgPSAtMTtcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuICBwcml2YXRlIHdpbmRvd1Jlc2l6ZVN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcclxuICBnZXQgY29weVRleHQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0eXBlb2YgdGhpcy5uekNvcHlUZXh0ID09PSAnc3RyaW5nJyA/IHRoaXMubnpDb3B5VGV4dCA6IHRoaXMubnpDb250ZW50O1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIGhvc3Q6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sXHJcbiAgICBwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UsXHJcbiAgICBwcml2YXRlIG56RG9tRXZlbnRTZXJ2aWNlOiBOekRvbUV2ZW50U2VydmljZVxyXG4gICkge31cclxuXHJcbiAgb25UZXh0Q29weSh0ZXh0OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMubnpDb3B5LmVtaXQodGV4dCk7XHJcbiAgfVxyXG5cclxuICBvblN0YXJ0RWRpdGluZygpOiB2b2lkIHtcclxuICAgIHRoaXMuZWRpdGluZyA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBvbkVuZEVkaXRpbmcodGV4dDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmVkaXRpbmcgPSBmYWxzZTtcclxuICAgIHRoaXMubnpDb250ZW50Q2hhbmdlLmVtaXQodGV4dCk7XHJcbiAgICBpZiAodGhpcy5uekNvbnRlbnQgPT09IHRleHQpIHtcclxuICAgICAgdGhpcy5yZW5kZXJPbk5leHRGcmFtZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25FeHBhbmQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmV4cGFuZGVkID0gdHJ1ZTtcclxuICAgIHRoaXMubnpFeHBhbmRDaGFuZ2UuZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgY2FuVXNlQ1NTRWxsaXBzaXMoKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5uekVkaXRhYmxlIHx8IHRoaXMubnpDb3B5YWJsZSB8fCB0aGlzLm56RXhwYW5kYWJsZSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5uekVsbGlwc2lzUm93cyA9PT0gMSkge1xyXG4gICAgICByZXR1cm4gaXNTdHlsZVN1cHBvcnQoJ3RleHRPdmVyZmxvdycpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGlzU3R5bGVTdXBwb3J0KCd3ZWJraXRMaW5lQ2xhbXAnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlck9uTmV4dEZyYW1lKCk6IHZvaWQge1xyXG4gICAgY2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucmZhSWQpO1xyXG4gICAgaWYgKCF0aGlzLnZpZXdJbml0IHx8ICF0aGlzLm56RWxsaXBzaXMgfHwgdGhpcy5uekVsbGlwc2lzUm93cyA8IDAgfHwgdGhpcy5leHBhbmRlZCB8fCAhdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yZmFJZCA9IHJlcUFuaW1GcmFtZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc3luY0VsbGlwc2lzKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldE9yaWdpbkNvbnRlbnRWaWV3UmVmKCk6IHsgdmlld1JlZjogRW1iZWRkZWRWaWV3UmVmPHsgY29udGVudDogc3RyaW5nIH0+OyByZW1vdmVWaWV3KCk6IHZvaWQgfSB7XHJcbiAgICBjb25zdCB2aWV3UmVmID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUVtYmVkZGVkVmlldzx7IGNvbnRlbnQ6IHN0cmluZyB9Pih0aGlzLmNvbnRlbnRUZW1wbGF0ZSwge1xyXG4gICAgICBjb250ZW50OiB0aGlzLm56Q29udGVudFxyXG4gICAgfSk7XHJcbiAgICB2aWV3UmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHZpZXdSZWYsXHJcbiAgICAgIHJlbW92ZVZpZXc6ICgpID0+IHtcclxuICAgICAgICB0aGlzLnZpZXdDb250YWluZXJSZWYucmVtb3ZlKHRoaXMudmlld0NvbnRhaW5lclJlZi5pbmRleE9mKHZpZXdSZWYpKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHN5bmNFbGxpcHNpcygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmNzc0VsbGlwc2lzKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IHsgdmlld1JlZiwgcmVtb3ZlVmlldyB9ID0gdGhpcy5nZXRPcmlnaW5Db250ZW50Vmlld1JlZigpO1xyXG4gICAgY29uc3QgZml4ZWROb2RlcyA9IFt0aGlzLnRleHRDb3B5UmVmLCB0aGlzLnRleHRFZGl0UmVmLCB0aGlzLmV4cGFuZGFibGVCdG5dXHJcbiAgICAgIC5maWx0ZXIoZSA9PiBlICYmIGUubmF0aXZlRWxlbWVudClcclxuICAgICAgLm1hcChlID0+IGUubmF0aXZlRWxlbWVudCk7XHJcblxyXG4gICAgY29uc3QgeyBjb250ZW50Tm9kZXMsIHRleHQsIGVsbGlwc2lzIH0gPSBtZWFzdXJlKFxyXG4gICAgICB0aGlzLmhvc3QubmF0aXZlRWxlbWVudCxcclxuICAgICAgdGhpcy5uekVsbGlwc2lzUm93cyxcclxuICAgICAgdmlld1JlZi5yb290Tm9kZXMsXHJcbiAgICAgIGZpeGVkTm9kZXMsXHJcbiAgICAgIHRoaXMuZWxsaXBzaXNTdHJcclxuICAgICk7XHJcblxyXG4gICAgcmVtb3ZlVmlldygpO1xyXG5cclxuICAgIHRoaXMuZWxsaXBzaXNUZXh0ID0gdGV4dDtcclxuICAgIHRoaXMuaXNFbGxpcHNpcyA9IGVsbGlwc2lzO1xyXG4gICAgY29uc3QgZWxsaXBzaXNDb250YWluZXJOYXRpdmVFbGVtZW50ID0gdGhpcy5lbGxpcHNpc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xyXG4gICAgd2hpbGUgKGVsbGlwc2lzQ29udGFpbmVyTmF0aXZlRWxlbWVudC5maXJzdENoaWxkKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQoZWxsaXBzaXNDb250YWluZXJOYXRpdmVFbGVtZW50LCBlbGxpcHNpc0NvbnRhaW5lck5hdGl2ZUVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcbiAgICB9XHJcbiAgICBjb250ZW50Tm9kZXMuZm9yRWFjaChuID0+IHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChlbGxpcHNpc0NvbnRhaW5lck5hdGl2ZUVsZW1lbnQsIG4uY2xvbmVOb2RlKHRydWUpKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlckFuZFN1YnNjcmliZVdpbmRvd1Jlc2l6ZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xyXG4gICAgICB0aGlzLndpbmRvd1Jlc2l6ZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICB0aGlzLmNzc0VsbGlwc2lzID0gdGhpcy5jYW5Vc2VDU1NFbGxpcHNpcygpO1xyXG4gICAgICB0aGlzLnJlbmRlck9uTmV4dEZyYW1lKCk7XHJcbiAgICAgIHRoaXMud2luZG93UmVzaXplU3Vic2NyaXB0aW9uID0gdGhpcy5uekRvbUV2ZW50U2VydmljZVxyXG4gICAgICAgIC5yZWdpc3RlclJlc2l6ZUxpc3RlbmVyKClcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcclxuICAgICAgICAgIGZpbmFsaXplKCgpID0+IHRoaXMubnpEb21FdmVudFNlcnZpY2UudW5yZWdpc3RlclJlc2l6ZUxpc3RlbmVyKCkpXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZW5kZXJPbk5leHRGcmFtZSgpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnVGV4dCcpO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy52aWV3SW5pdCA9IHRydWU7XHJcbiAgICB0aGlzLnJlbmRlckFuZFN1YnNjcmliZVdpbmRvd1Jlc2l6ZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3QgeyBuekNvcHlhYmxlLCBuekVkaXRhYmxlLCBuekV4cGFuZGFibGUsIG56RWxsaXBzaXMsIG56Q29udGVudCwgbnpFbGxpcHNpc1Jvd3MgfSA9IGNoYW5nZXM7XHJcbiAgICBpZiAobnpDb3B5YWJsZSB8fCBuekVkaXRhYmxlIHx8IG56RXhwYW5kYWJsZSB8fCBuekVsbGlwc2lzIHx8IG56Q29udGVudCB8fCBuekVsbGlwc2lzUm93cykge1xyXG4gICAgICBpZiAodGhpcy5uekVsbGlwc2lzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZXhwYW5kZWQpIHtcclxuICAgICAgICAgIHRoaXMud2luZG93UmVzaXplU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMucmVuZGVyQW5kU3Vic2NyaWJlV2luZG93UmVzaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gICAgdGhpcy53aW5kb3dSZXNpemVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICB9XHJcbn1cclxuIl19