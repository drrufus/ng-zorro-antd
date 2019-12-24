import { __decorate, __metadata } from "tslib";
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
import { cancelRequestAnimationFrame, InputBoolean, InputNumber, isStyleSupport, measure, NzConfigService, NzDomEventService, reqAnimFrame, WithConfig } from 'ng-zorro-antd/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { NzTextCopyComponent } from './nz-text-copy.component';
import { NzTextEditComponent } from './nz-text-edit.component';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
import * as i2 from "@angular/cdk/platform";
import * as i3 from "ng-zorro-antd/i18n";
import * as i4 from "@angular/common";
import * as i5 from "./nz-text-edit.component";
import * as i6 from "./nz-text-copy.component";
const _c0 = ["ellipsisContainer"];
const _c1 = ["expandable"];
const _c2 = ["contentTemplate"];
function NzTypographyComponent_ng_template_0_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 0, ["*ngIf", "!content"]);
} }
function NzTypographyComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NzTypographyComponent_ng_template_0_0_Template, 1, 0, undefined, 1);
    i0.ɵɵtext(1);
} if (rf & 2) {
    const content_r1724 = ctx.content;
    i0.ɵɵproperty("ngIf", !content_r1724);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", content_r1724, "\n");
} }
function NzTypographyComponent_ng_container_2_ng_container_1_ng_template_1_Template(rf, ctx) { }
const _c3 = function (a0) { return { content: a0 }; };
function NzTypographyComponent_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzTypographyComponent_ng_container_2_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1726 = i0.ɵɵnextContext(2);
    const _r1719 = i0.ɵɵreference(1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r1719)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c3, ctx_r1726.nzContent));
} }
function NzTypographyComponent_ng_container_2_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1730 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1730.ellipsisStr);
} }
function NzTypographyComponent_ng_container_2_ng_container_2_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r1734 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 7, 8);
    i0.ɵɵlistener("click", function NzTypographyComponent_ng_container_2_ng_container_2_a_4_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r1734); const ctx_r1733 = i0.ɵɵnextContext(3); return ctx_r1733.onExpand(); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1731 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1731.locale == null ? null : ctx_r1731.locale.expand);
} }
function NzTypographyComponent_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "span", null, 5);
    i0.ɵɵtemplate(3, NzTypographyComponent_ng_container_2_ng_container_2_ng_container_3_Template, 2, 1, "ng-container", 1);
    i0.ɵɵtemplate(4, NzTypographyComponent_ng_container_2_ng_container_2_a_4_Template, 3, 1, "a", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1727 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1727.isEllipsis);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1727.nzExpandable && ctx_r1727.isEllipsis);
} }
function NzTypographyComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzTypographyComponent_ng_container_2_ng_container_1_Template, 2, 4, "ng-container", 1);
    i0.ɵɵtemplate(2, NzTypographyComponent_ng_container_2_ng_container_2_Template, 5, 2, "ng-container", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1721 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1721.expanded || !ctx_r1721.nzExpandable && ctx_r1721.nzEllipsisRows === 1 || ctx_r1721.canCssEllipsis);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1721.nzEllipsis && !ctx_r1721.expanded && (ctx_r1721.nzEllipsisRows > 1 || ctx_r1721.nzExpandable));
} }
function NzTypographyComponent_nz_text_edit_3_Template(rf, ctx) { if (rf & 1) {
    const _r1736 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nz-text-edit", 9);
    i0.ɵɵlistener("endEditing", function NzTypographyComponent_nz_text_edit_3_Template_nz_text_edit_endEditing_0_listener($event) { i0.ɵɵrestoreView(_r1736); const ctx_r1735 = i0.ɵɵnextContext(); return ctx_r1735.onEndEditing($event); })("startEditing", function NzTypographyComponent_nz_text_edit_3_Template_nz_text_edit_startEditing_0_listener($event) { i0.ɵɵrestoreView(_r1736); const ctx_r1737 = i0.ɵɵnextContext(); return ctx_r1737.onStartEditing(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1722 = i0.ɵɵnextContext();
    i0.ɵɵproperty("text", ctx_r1722.nzContent);
} }
function NzTypographyComponent_nz_text_copy_4_Template(rf, ctx) { if (rf & 1) {
    const _r1739 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nz-text-copy", 10);
    i0.ɵɵlistener("textCopy", function NzTypographyComponent_nz_text_copy_4_Template_nz_text_copy_textCopy_0_listener($event) { i0.ɵɵrestoreView(_r1739); const ctx_r1738 = i0.ɵɵnextContext(); return ctx_r1738.onTextCopy($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1723 = i0.ɵɵnextContext();
    i0.ɵɵproperty("text", ctx_r1723.copyText);
} }
const _c4 = ["*"];
const NZ_CONFIG_COMPONENT_NAME = 'typography';
export class NzTypographyComponent {
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
    get canCssEllipsis() {
        return this.nzEllipsis && this.cssEllipsis && !this.expanded;
    }
    get copyText() {
        return typeof this.nzCopyText === 'string' ? this.nzCopyText : this.nzContent;
    }
    onTextCopy(text) {
        this.nzCopy.emit(text);
    }
    onStartEditing() {
        this.editing = true;
    }
    onEndEditing(text) {
        this.editing = false;
        this.nzContentChange.emit(text);
        if (this.nzContent === text) {
            this.renderOnNextFrame();
        }
    }
    onExpand() {
        this.expanded = true;
        this.nzExpandChange.emit();
    }
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
    renderOnNextFrame() {
        cancelRequestAnimationFrame(this.rfaId);
        if (!this.viewInit || !this.nzEllipsis || this.nzEllipsisRows < 0 || this.expanded || !this.platform.isBrowser) {
            return;
        }
        this.rfaId = reqAnimFrame(() => {
            this.syncEllipsis();
        });
    }
    getOriginContentViewRef() {
        const viewRef = this.viewContainerRef.createEmbeddedView(this.contentTemplate, {
            content: this.nzContent
        });
        viewRef.detectChanges();
        return {
            viewRef,
            removeView: () => {
                this.viewContainerRef.remove(this.viewContainerRef.indexOf(viewRef));
            }
        };
    }
    syncEllipsis() {
        if (this.cssEllipsis) {
            return;
        }
        const { viewRef, removeView } = this.getOriginContentViewRef();
        const fixedNodes = [this.textCopyRef, this.textEditRef, this.expandableBtn].filter(e => e && e.nativeElement).map(e => e.nativeElement);
        const { contentNodes, text, ellipsis } = measure(this.host.nativeElement, this.nzEllipsisRows, viewRef.rootNodes, fixedNodes, this.ellipsisStr);
        removeView();
        this.ellipsisText = text;
        this.isEllipsis = ellipsis;
        const ellipsisContainerNativeElement = this.ellipsisContainer.nativeElement;
        while (ellipsisContainerNativeElement.firstChild) {
            this.renderer.removeChild(ellipsisContainerNativeElement, ellipsisContainerNativeElement.firstChild);
        }
        contentNodes.forEach(n => {
            this.renderer.appendChild(ellipsisContainerNativeElement, n.cloneNode(true));
        });
        this.cdr.markForCheck();
    }
    renderAndSubscribeWindowResize() {
        if (this.platform.isBrowser) {
            this.windowResizeSubscription.unsubscribe();
            this.cssEllipsis = this.canUseCSSEllipsis();
            this.renderOnNextFrame();
            this.windowResizeSubscription = this.nzDomEventService
                .registerResizeListener()
                .pipe(takeUntil(this.destroy$), finalize(() => this.nzDomEventService.unregisterResizeListener()))
                .subscribe(() => this.renderOnNextFrame());
        }
    }
    ngOnInit() {
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.locale = this.i18n.getLocaleData('Text');
            this.cdr.markForCheck();
        });
    }
    ngAfterViewInit() {
        this.viewInit = true;
        this.renderAndSubscribeWindowResize();
    }
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
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.windowResizeSubscription.unsubscribe();
    }
}
/** @nocollapse */ NzTypographyComponent.ɵfac = function NzTypographyComponent_Factory(t) { return new (t || NzTypographyComponent)(i0.ɵɵdirectiveInject(i1.NzConfigService), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i2.Platform), i0.ɵɵdirectiveInject(i3.NzI18nService), i0.ɵɵdirectiveInject(i1.NzDomEventService)); };
/** @nocollapse */ NzTypographyComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzTypographyComponent, selectors: [["nz-typography"], ["", "nz-typography", ""], ["p", "nz-paragraph", ""], ["span", "nz-text", ""], ["h1", "nz-title", ""], ["h2", "nz-title", ""], ["h3", "nz-title", ""], ["h4", "nz-title", ""]], viewQuery: function NzTypographyComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(NzTextEditComponent, true);
        i0.ɵɵviewQuery(NzTextCopyComponent, true);
        i0.ɵɵviewQuery(_c0, true);
        i0.ɵɵviewQuery(_c1, true);
        i0.ɵɵviewQuery(_c2, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.textEditRef = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.textCopyRef = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.ellipsisContainer = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.expandableBtn = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.contentTemplate = _t.first);
    } }, hostBindings: function NzTypographyComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        i0.ɵɵallocHostVars(10);
    } if (rf & 2) {
        i0.ɵɵstyleProp("-webkit-line-clamp", ctx.canCssEllipsis && ctx.nzEllipsisRows > 1 ? ctx.nzEllipsisRows : null);
        i0.ɵɵclassProp("ant-typography", !ctx.editing)("ant-typography-edit-content", ctx.editing)("ant-typography-secondary", ctx.nzType === "secondary")("ant-typography-warning", ctx.nzType === "warning")("ant-typography-danger", ctx.nzType === "danger")("ant-typography-disabled", ctx.nzDisabled)("ant-typography-ellipsis", ctx.nzEllipsis && !ctx.expanded)("ant-typography-ellipsis-single-line", ctx.canCssEllipsis && ctx.nzEllipsisRows === 1)("ant-typography-ellipsis-multiple-line", ctx.canCssEllipsis && ctx.nzEllipsisRows > 1);
    } }, inputs: { nzCopyable: "nzCopyable", nzEditable: "nzEditable", nzDisabled: "nzDisabled", nzExpandable: "nzExpandable", nzEllipsis: "nzEllipsis", nzContent: "nzContent", nzEllipsisRows: "nzEllipsisRows", nzType: "nzType", nzCopyText: "nzCopyText" }, outputs: { nzContentChange: "nzContentChange", nzCopy: "nzCopy", nzExpandChange: "nzExpandChange" }, exportAs: ["nzTypography"], features: [i0.ɵɵNgOnChangesFeature()], ngContentSelectors: _c4, decls: 5, vars: 3, consts: [["contentTemplate", ""], [4, "ngIf"], [3, "text", "endEditing", "startEditing", 4, "ngIf"], [3, "text", "textCopy", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["ellipsisContainer", ""], ["class", "ant-typography-expand", 3, "click", 4, "ngIf"], [1, "ant-typography-expand", 3, "click"], ["expandable", ""], [3, "text", "endEditing", "startEditing"], [3, "text", "textCopy"]], template: function NzTypographyComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, NzTypographyComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(2, NzTypographyComponent_ng_container_2_Template, 3, 2, "ng-container", 1);
        i0.ɵɵtemplate(3, NzTypographyComponent_nz_text_edit_3_Template, 1, 1, "nz-text-edit", 2);
        i0.ɵɵtemplate(4, NzTypographyComponent_nz_text_copy_4_Template, 1, 1, "nz-text-copy", 3);
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.editing);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.nzEditable);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.nzCopyable && !ctx.editing);
    } }, directives: [i4.NgIf, i4.NgTemplateOutlet, i5.NzTextEditComponent, i6.NzTextCopyComponent], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTypographyComponent.prototype, "nzCopyable", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTypographyComponent.prototype, "nzEditable", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTypographyComponent.prototype, "nzDisabled", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTypographyComponent.prototype, "nzExpandable", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTypographyComponent.prototype, "nzEllipsis", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, 1), InputNumber(),
    __metadata("design:type", Number)
], NzTypographyComponent.prototype, "nzEllipsisRows", void 0);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzTypographyComponent, [{
        type: Component,
        args: [{
                selector: `
  nz-typography,
  [nz-typography],
  p[nz-paragraph],
  span[nz-text],
  h1[nz-title], h2[nz-title], h3[nz-title], h4[nz-title]
  `,
                exportAs: 'nzTypography',
                templateUrl: './nz-typography.component.html',
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
            }]
    }], function () { return [{ type: i1.NzConfigService }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i0.ViewContainerRef }, { type: i0.Renderer2 }, { type: i2.Platform }, { type: i3.NzI18nService }, { type: i1.NzDomEventService }]; }, { nzCopyable: [{
            type: Input
        }], nzEditable: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }], nzExpandable: [{
            type: Input
        }], nzEllipsis: [{
            type: Input
        }], nzContent: [{
            type: Input
        }], nzEllipsisRows: [{
            type: Input
        }], nzType: [{
            type: Input
        }], nzCopyText: [{
            type: Input
        }], nzContentChange: [{
            type: Output
        }], nzCopy: [{
            type: Output
        }], nzExpandChange: [{
            type: Output
        }], textEditRef: [{
            type: ViewChild,
            args: [NzTextEditComponent, { static: false }]
        }], textCopyRef: [{
            type: ViewChild,
            args: [NzTextCopyComponent, { static: false }]
        }], ellipsisContainer: [{
            type: ViewChild,
            args: ['ellipsisContainer', { static: false }]
        }], expandableBtn: [{
            type: ViewChild,
            args: ['expandable', { static: false }]
        }], contentTemplate: [{
            type: ViewChild,
            args: ['contentTemplate', { static: false }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHlwb2dyYXBoeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3R5cG9ncmFwaHkvIiwic291cmNlcyI6WyJuei10eXBvZ3JhcGh5LmNvbXBvbmVudC50cyIsIm56LXR5cG9ncmFwaHkuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUVWLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUNOLFNBQVMsRUFFVCxXQUFXLEVBQ1gsU0FBUyxFQUNULGdCQUFnQixFQUNoQixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRCxPQUFPLEVBQ0wsMkJBQTJCLEVBQzNCLFlBQVksRUFDWixXQUFXLEVBQ1gsY0FBYyxFQUNkLE9BQU8sRUFDUCxlQUFlLEVBQ2YsaUJBQWlCLEVBQ2pCLFlBQVksRUFDWixVQUFVLEVBQ1gsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDL0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7Ozs7OztJQzlDN0QsNENBQTZCOzs7SUFBN0Isb0ZBQTZCO0lBQzdCLFlBQ0Y7OztJQUZjLHFDQUFnQjtJQUM1QixlQUNGO0lBREUsK0NBQ0Y7Ozs7O0lBR0UsNkJBQ0U7SUFBQSxvSEFHQztJQUNILDBCQUFl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QUNOLE1BQU07O2tCQUVOLFNBQVM7bUJBQUMsbUJBQW1CLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOztrQkFDaEQsU0FBUzttQkFBQyxtQkFBbUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O2tCQUNoRCxTQUFTO21CQUFDLG1CQUFtQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7a0JBQ2hELFNBQVM7bUJBQUMsWUFBWSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7a0JBQ3pDLFNBQVM7bUJBQUMsaUJBQWlCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFbWJlZGRlZFZpZXdSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0NvbnRhaW5lclJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpbmFsaXplLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSxcclxuICBJbnB1dEJvb2xlYW4sXHJcbiAgSW5wdXROdW1iZXIsXHJcbiAgaXNTdHlsZVN1cHBvcnQsXHJcbiAgbWVhc3VyZSxcclxuICBOekNvbmZpZ1NlcnZpY2UsXHJcbiAgTnpEb21FdmVudFNlcnZpY2UsXHJcbiAgcmVxQW5pbUZyYW1lLFxyXG4gIFdpdGhDb25maWdcclxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuXHJcbmltcG9ydCB7IE56VGV4dENvcHlDb21wb25lbnQgfSBmcm9tICcuL256LXRleHQtY29weS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOelRleHRFZGl0Q29tcG9uZW50IH0gZnJvbSAnLi9uei10ZXh0LWVkaXQuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICd0eXBvZ3JhcGh5JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBgXHJcbiAgbnotdHlwb2dyYXBoeSxcclxuICBbbnotdHlwb2dyYXBoeV0sXHJcbiAgcFtuei1wYXJhZ3JhcGhdLFxyXG4gIHNwYW5bbnotdGV4dF0sXHJcbiAgaDFbbnotdGl0bGVdLCBoMltuei10aXRsZV0sIGgzW256LXRpdGxlXSwgaDRbbnotdGl0bGVdXHJcbiAgYCxcclxuICBleHBvcnRBczogJ256VHlwb2dyYXBoeScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXR5cG9ncmFwaHkuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtdHlwb2dyYXBoeV0nOiAnIWVkaXRpbmcnLFxyXG4gICAgJ1tjbGFzcy5hbnQtdHlwb2dyYXBoeS1lZGl0LWNvbnRlbnRdJzogJ2VkaXRpbmcnLFxyXG4gICAgJ1tjbGFzcy5hbnQtdHlwb2dyYXBoeS1zZWNvbmRhcnldJzogJ256VHlwZSA9PT0gXCJzZWNvbmRhcnlcIicsXHJcbiAgICAnW2NsYXNzLmFudC10eXBvZ3JhcGh5LXdhcm5pbmddJzogJ256VHlwZSA9PT0gXCJ3YXJuaW5nXCInLFxyXG4gICAgJ1tjbGFzcy5hbnQtdHlwb2dyYXBoeS1kYW5nZXJdJzogJ256VHlwZSA9PT0gXCJkYW5nZXJcIicsXHJcbiAgICAnW2NsYXNzLmFudC10eXBvZ3JhcGh5LWRpc2FibGVkXSc6ICduekRpc2FibGVkJyxcclxuICAgICdbY2xhc3MuYW50LXR5cG9ncmFwaHktZWxsaXBzaXNdJzogJ256RWxsaXBzaXMgJiYgIWV4cGFuZGVkJyxcclxuICAgICdbY2xhc3MuYW50LXR5cG9ncmFwaHktZWxsaXBzaXMtc2luZ2xlLWxpbmVdJzogJ2NhbkNzc0VsbGlwc2lzICYmIG56RWxsaXBzaXNSb3dzID09PSAxJyxcclxuICAgICdbY2xhc3MuYW50LXR5cG9ncmFwaHktZWxsaXBzaXMtbXVsdGlwbGUtbGluZV0nOiAnY2FuQ3NzRWxsaXBzaXMgJiYgbnpFbGxpcHNpc1Jvd3MgPiAxJyxcclxuICAgICdbc3R5bGUuLXdlYmtpdC1saW5lLWNsYW1wXSc6ICcoY2FuQ3NzRWxsaXBzaXMgJiYgbnpFbGxpcHNpc1Jvd3MgPiAxKSA/IG56RWxsaXBzaXNSb3dzIDogbnVsbCdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelR5cG9ncmFwaHlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDb3B5YWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekVkaXRhYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpFeHBhbmRhYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RWxsaXBzaXMgPSBmYWxzZTtcclxuICBASW5wdXQoKSBuekNvbnRlbnQ6IHN0cmluZztcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIDEpIEBJbnB1dE51bWJlcigpIG56RWxsaXBzaXNSb3dzOiBudW1iZXI7XHJcbiAgQElucHV0KCkgbnpUeXBlOiAnc2Vjb25kYXJ5JyB8ICd3YXJuaW5nJyB8ICdkYW5nZXInIHwgdW5kZWZpbmVkO1xyXG4gIEBJbnB1dCgpIG56Q29weVRleHQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDb250ZW50Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q29weSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekV4cGFuZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgQFZpZXdDaGlsZChOelRleHRFZGl0Q29tcG9uZW50LCB7IHN0YXRpYzogZmFsc2UgfSkgdGV4dEVkaXRSZWY6IE56VGV4dEVkaXRDb21wb25lbnQ7XHJcbiAgQFZpZXdDaGlsZChOelRleHRDb3B5Q29tcG9uZW50LCB7IHN0YXRpYzogZmFsc2UgfSkgdGV4dENvcHlSZWY6IE56VGV4dENvcHlDb21wb25lbnQ7XHJcbiAgQFZpZXdDaGlsZCgnZWxsaXBzaXNDb250YWluZXInLCB7IHN0YXRpYzogZmFsc2UgfSkgZWxsaXBzaXNDb250YWluZXI6IEVsZW1lbnRSZWY8SFRNTFNwYW5FbGVtZW50PjtcclxuICBAVmlld0NoaWxkKCdleHBhbmRhYmxlJywgeyBzdGF0aWM6IGZhbHNlIH0pIGV4cGFuZGFibGVCdG46IEVsZW1lbnRSZWY8SFRNTFNwYW5FbGVtZW50PjtcclxuICBAVmlld0NoaWxkKCdjb250ZW50VGVtcGxhdGUnLCB7IHN0YXRpYzogZmFsc2UgfSkgY29udGVudFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx7IGNvbnRlbnQ6IHN0cmluZyB9PjtcclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIGxvY2FsZTogYW55ID0ge307XHJcbiAgZWRpdGluZyA9IGZhbHNlO1xyXG4gIGVsbGlwc2lzVGV4dDogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gIGNzc0VsbGlwc2lzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgaXNFbGxpcHNpczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGV4cGFuZGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgZWxsaXBzaXNTdHIgPSAnLi4uJztcclxuXHJcbiAgZ2V0IGNhbkNzc0VsbGlwc2lzKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubnpFbGxpcHNpcyAmJiB0aGlzLmNzc0VsbGlwc2lzICYmICF0aGlzLmV4cGFuZGVkO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB2aWV3SW5pdCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgcmZhSWQ6IG51bWJlciA9IC0xO1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xyXG4gIHByaXZhdGUgd2luZG93UmVzaXplU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xyXG4gIGdldCBjb3B5VGV4dCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLm56Q29weVRleHQgPT09ICdzdHJpbmcnID8gdGhpcy5uekNvcHlUZXh0IDogdGhpcy5uekNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcclxuICAgIHByaXZhdGUgaG9zdDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcclxuICAgIHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZSxcclxuICAgIHByaXZhdGUgbnpEb21FdmVudFNlcnZpY2U6IE56RG9tRXZlbnRTZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICBvblRleHRDb3B5KHRleHQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5uekNvcHkuZW1pdCh0ZXh0KTtcclxuICB9XHJcblxyXG4gIG9uU3RhcnRFZGl0aW5nKCk6IHZvaWQge1xyXG4gICAgdGhpcy5lZGl0aW5nID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIG9uRW5kRWRpdGluZyh0ZXh0OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuZWRpdGluZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5uekNvbnRlbnRDaGFuZ2UuZW1pdCh0ZXh0KTtcclxuICAgIGlmICh0aGlzLm56Q29udGVudCA9PT0gdGV4dCkge1xyXG4gICAgICB0aGlzLnJlbmRlck9uTmV4dEZyYW1lKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkV4cGFuZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZXhwYW5kZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5uekV4cGFuZENoYW5nZS5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBjYW5Vc2VDU1NFbGxpcHNpcygpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLm56RWRpdGFibGUgfHwgdGhpcy5uekNvcHlhYmxlIHx8IHRoaXMubnpFeHBhbmRhYmxlKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm56RWxsaXBzaXNSb3dzID09PSAxKSB7XHJcbiAgICAgIHJldHVybiBpc1N0eWxlU3VwcG9ydCgndGV4dE92ZXJmbG93Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gaXNTdHlsZVN1cHBvcnQoJ3dlYmtpdExpbmVDbGFtcCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyT25OZXh0RnJhbWUoKTogdm9pZCB7XHJcbiAgICBjYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5yZmFJZCk7XHJcbiAgICBpZiAoIXRoaXMudmlld0luaXQgfHwgIXRoaXMubnpFbGxpcHNpcyB8fCB0aGlzLm56RWxsaXBzaXNSb3dzIDwgMCB8fCB0aGlzLmV4cGFuZGVkIHx8ICF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnJmYUlkID0gcmVxQW5pbUZyYW1lKCgpID0+IHtcclxuICAgICAgdGhpcy5zeW5jRWxsaXBzaXMoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0T3JpZ2luQ29udGVudFZpZXdSZWYoKTogeyB2aWV3UmVmOiBFbWJlZGRlZFZpZXdSZWY8eyBjb250ZW50OiBzdHJpbmcgfT47IHJlbW92ZVZpZXcoKTogdm9pZCB9IHtcclxuICAgIGNvbnN0IHZpZXdSZWYgPSB0aGlzLnZpZXdDb250YWluZXJSZWYuY3JlYXRlRW1iZWRkZWRWaWV3PHsgY29udGVudDogc3RyaW5nIH0+KHRoaXMuY29udGVudFRlbXBsYXRlLCB7XHJcbiAgICAgIGNvbnRlbnQ6IHRoaXMubnpDb250ZW50XHJcbiAgICB9KTtcclxuICAgIHZpZXdSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdmlld1JlZixcclxuICAgICAgcmVtb3ZlVmlldzogKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudmlld0NvbnRhaW5lclJlZi5yZW1vdmUodGhpcy52aWV3Q29udGFpbmVyUmVmLmluZGV4T2Yodmlld1JlZikpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc3luY0VsbGlwc2lzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuY3NzRWxsaXBzaXMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgeyB2aWV3UmVmLCByZW1vdmVWaWV3IH0gPSB0aGlzLmdldE9yaWdpbkNvbnRlbnRWaWV3UmVmKCk7XHJcbiAgICBjb25zdCBmaXhlZE5vZGVzID0gW3RoaXMudGV4dENvcHlSZWYsIHRoaXMudGV4dEVkaXRSZWYsIHRoaXMuZXhwYW5kYWJsZUJ0bl0uZmlsdGVyKGUgPT4gZSAmJiBlLm5hdGl2ZUVsZW1lbnQpLm1hcChlID0+IGUubmF0aXZlRWxlbWVudCk7XHJcblxyXG4gICAgY29uc3QgeyBjb250ZW50Tm9kZXMsIHRleHQsIGVsbGlwc2lzIH0gPSBtZWFzdXJlKFxyXG4gICAgICB0aGlzLmhvc3QubmF0aXZlRWxlbWVudCxcclxuICAgICAgdGhpcy5uekVsbGlwc2lzUm93cyxcclxuICAgICAgdmlld1JlZi5yb290Tm9kZXMsXHJcbiAgICAgIGZpeGVkTm9kZXMsXHJcbiAgICAgIHRoaXMuZWxsaXBzaXNTdHJcclxuICAgICk7XHJcblxyXG4gICAgcmVtb3ZlVmlldygpO1xyXG5cclxuICAgIHRoaXMuZWxsaXBzaXNUZXh0ID0gdGV4dDtcclxuICAgIHRoaXMuaXNFbGxpcHNpcyA9IGVsbGlwc2lzO1xyXG4gICAgY29uc3QgZWxsaXBzaXNDb250YWluZXJOYXRpdmVFbGVtZW50ID0gdGhpcy5lbGxpcHNpc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xyXG4gICAgd2hpbGUgKGVsbGlwc2lzQ29udGFpbmVyTmF0aXZlRWxlbWVudC5maXJzdENoaWxkKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQoZWxsaXBzaXNDb250YWluZXJOYXRpdmVFbGVtZW50LCBlbGxpcHNpc0NvbnRhaW5lck5hdGl2ZUVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcbiAgICB9XHJcbiAgICBjb250ZW50Tm9kZXMuZm9yRWFjaChuID0+IHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChlbGxpcHNpc0NvbnRhaW5lck5hdGl2ZUVsZW1lbnQsIG4uY2xvbmVOb2RlKHRydWUpKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlckFuZFN1YnNjcmliZVdpbmRvd1Jlc2l6ZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xyXG4gICAgICB0aGlzLndpbmRvd1Jlc2l6ZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICB0aGlzLmNzc0VsbGlwc2lzID0gdGhpcy5jYW5Vc2VDU1NFbGxpcHNpcygpO1xyXG4gICAgICB0aGlzLnJlbmRlck9uTmV4dEZyYW1lKCk7XHJcbiAgICAgIHRoaXMud2luZG93UmVzaXplU3Vic2NyaXB0aW9uID0gdGhpcy5uekRvbUV2ZW50U2VydmljZVxyXG4gICAgICAgIC5yZWdpc3RlclJlc2l6ZUxpc3RlbmVyKClcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcclxuICAgICAgICAgIGZpbmFsaXplKCgpID0+IHRoaXMubnpEb21FdmVudFNlcnZpY2UudW5yZWdpc3RlclJlc2l6ZUxpc3RlbmVyKCkpXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZW5kZXJPbk5leHRGcmFtZSgpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnVGV4dCcpO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy52aWV3SW5pdCA9IHRydWU7XHJcbiAgICB0aGlzLnJlbmRlckFuZFN1YnNjcmliZVdpbmRvd1Jlc2l6ZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3QgeyBuekNvcHlhYmxlLCBuekVkaXRhYmxlLCBuekV4cGFuZGFibGUsIG56RWxsaXBzaXMsIG56Q29udGVudCwgbnpFbGxpcHNpc1Jvd3MgfSA9IGNoYW5nZXM7XHJcbiAgICBpZiAobnpDb3B5YWJsZSB8fCBuekVkaXRhYmxlIHx8IG56RXhwYW5kYWJsZSB8fCBuekVsbGlwc2lzIHx8IG56Q29udGVudCB8fCBuekVsbGlwc2lzUm93cykge1xyXG4gICAgICBpZiAodGhpcy5uekVsbGlwc2lzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZXhwYW5kZWQpIHtcclxuICAgICAgICAgIHRoaXMud2luZG93UmVzaXplU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMucmVuZGVyQW5kU3Vic2NyaWJlV2luZG93UmVzaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gICAgdGhpcy53aW5kb3dSZXNpemVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICB9XHJcbn1cclxuIiwiPG5nLXRlbXBsYXRlICNjb250ZW50VGVtcGxhdGUgbGV0LWNvbnRlbnQ9XCJjb250ZW50XCI+XHJcbiAgPG5nLWNvbnRlbnQgKm5nSWY9XCIhY29udGVudFwiPjwvbmctY29udGVudD5cclxuICB7eyBjb250ZW50IH19XHJcbjwvbmctdGVtcGxhdGU+XHJcblxyXG48bmctY29udGFpbmVyICpuZ0lmPVwiIWVkaXRpbmdcIj5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiZXhwYW5kZWQgfHwgKCFuekV4cGFuZGFibGUgJiYgbnpFbGxpcHNpc1Jvd3MgPT09IDEpIHx8IGNhbkNzc0VsbGlwc2lzXCI+XHJcbiAgICA8bmctdGVtcGxhdGVcclxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29udGVudFRlbXBsYXRlXCJcclxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgY29udGVudDogbnpDb250ZW50IH1cIlxyXG4gICAgPjwvbmctdGVtcGxhdGU+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm56RWxsaXBzaXMgJiYgIWV4cGFuZGVkICYmIChuekVsbGlwc2lzUm93cyA+IDEgfHwgbnpFeHBhbmRhYmxlKVwiPlxyXG4gICAgPHNwYW4gI2VsbGlwc2lzQ29udGFpbmVyPjwvc3Bhbj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc0VsbGlwc2lzXCI+e3sgZWxsaXBzaXNTdHIgfX08L25nLWNvbnRhaW5lcj5cclxuICAgIDxhXHJcbiAgICAgICNleHBhbmRhYmxlXHJcbiAgICAgICpuZ0lmPVwibnpFeHBhbmRhYmxlICYmIGlzRWxsaXBzaXNcIlxyXG4gICAgICBjbGFzcz1cImFudC10eXBvZ3JhcGh5LWV4cGFuZFwiXHJcbiAgICAgIChjbGljayk9XCJvbkV4cGFuZCgpXCJcclxuICAgICAgPnt7IGxvY2FsZT8uZXhwYW5kIH19PC9hXHJcbiAgICA+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbjwvbmctY29udGFpbmVyPlxyXG5cclxuPG56LXRleHQtZWRpdFxyXG4gICpuZ0lmPVwibnpFZGl0YWJsZVwiXHJcbiAgW3RleHRdPVwibnpDb250ZW50XCJcclxuICAoZW5kRWRpdGluZyk9XCJvbkVuZEVkaXRpbmcoJGV2ZW50KVwiXHJcbiAgKHN0YXJ0RWRpdGluZyk9XCJvblN0YXJ0RWRpdGluZygpXCJcclxuPlxyXG48L256LXRleHQtZWRpdD5cclxuXHJcbjxuei10ZXh0LWNvcHlcclxuICAqbmdJZj1cIm56Q29weWFibGUgJiYgIWVkaXRpbmdcIlxyXG4gIFt0ZXh0XT1cImNvcHlUZXh0XCJcclxuICAodGV4dENvcHkpPVwib25UZXh0Q29weSgkZXZlbnQpXCJcclxuPjwvbnotdGV4dC1jb3B5PlxyXG4iXX0=