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
var _c0 = ["ellipsisContainer"];
var _c1 = ["expandable"];
var _c2 = ["contentTemplate"];
function NzTypographyComponent_ng_template_0_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 0, ["*ngIf", "!content"]);
} }
function NzTypographyComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NzTypographyComponent_ng_template_0_0_Template, 1, 0, undefined, 1);
    i0.ɵɵtext(1);
} if (rf & 2) {
    var content_r1756 = ctx.content;
    i0.ɵɵproperty("ngIf", !content_r1756);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", content_r1756, "\n");
} }
function NzTypographyComponent_ng_container_2_ng_container_1_ng_template_1_Template(rf, ctx) { }
var _c3 = function (a0) { return { content: a0 }; };
function NzTypographyComponent_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzTypographyComponent_ng_container_2_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1758 = i0.ɵɵnextContext(2);
    var _r1751 = i0.ɵɵreference(1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r1751)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c3, ctx_r1758.nzContent));
} }
function NzTypographyComponent_ng_container_2_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1762 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1762.ellipsisStr);
} }
function NzTypographyComponent_ng_container_2_ng_container_2_a_4_Template(rf, ctx) { if (rf & 1) {
    var _r1766 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 7, 8);
    i0.ɵɵlistener("click", function NzTypographyComponent_ng_container_2_ng_container_2_a_4_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r1766); var ctx_r1765 = i0.ɵɵnextContext(3); return ctx_r1765.onExpand(); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1763 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1763.locale == null ? null : ctx_r1763.locale.expand);
} }
function NzTypographyComponent_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "span", null, 5);
    i0.ɵɵtemplate(3, NzTypographyComponent_ng_container_2_ng_container_2_ng_container_3_Template, 2, 1, "ng-container", 1);
    i0.ɵɵtemplate(4, NzTypographyComponent_ng_container_2_ng_container_2_a_4_Template, 3, 1, "a", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1759 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1759.isEllipsis);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1759.nzExpandable && ctx_r1759.isEllipsis);
} }
function NzTypographyComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzTypographyComponent_ng_container_2_ng_container_1_Template, 2, 4, "ng-container", 1);
    i0.ɵɵtemplate(2, NzTypographyComponent_ng_container_2_ng_container_2_Template, 5, 2, "ng-container", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1753 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1753.expanded || !ctx_r1753.nzExpandable && ctx_r1753.nzEllipsisRows === 1 || ctx_r1753.canCssEllipsis);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1753.nzEllipsis && !ctx_r1753.expanded && (ctx_r1753.nzEllipsisRows > 1 || ctx_r1753.nzExpandable));
} }
function NzTypographyComponent_nz_text_edit_3_Template(rf, ctx) { if (rf & 1) {
    var _r1768 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nz-text-edit", 9);
    i0.ɵɵlistener("endEditing", function NzTypographyComponent_nz_text_edit_3_Template_nz_text_edit_endEditing_0_listener($event) { i0.ɵɵrestoreView(_r1768); var ctx_r1767 = i0.ɵɵnextContext(); return ctx_r1767.onEndEditing($event); })("startEditing", function NzTypographyComponent_nz_text_edit_3_Template_nz_text_edit_startEditing_0_listener($event) { i0.ɵɵrestoreView(_r1768); var ctx_r1769 = i0.ɵɵnextContext(); return ctx_r1769.onStartEditing(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1754 = i0.ɵɵnextContext();
    i0.ɵɵproperty("text", ctx_r1754.nzContent);
} }
function NzTypographyComponent_nz_text_copy_4_Template(rf, ctx) { if (rf & 1) {
    var _r1771 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nz-text-copy", 10);
    i0.ɵɵlistener("textCopy", function NzTypographyComponent_nz_text_copy_4_Template_nz_text_copy_textCopy_0_listener($event) { i0.ɵɵrestoreView(_r1771); var ctx_r1770 = i0.ɵɵnextContext(); return ctx_r1770.onTextCopy($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1755 = i0.ɵɵnextContext();
    i0.ɵɵproperty("text", ctx_r1755.copyText);
} }
var _c4 = ["*"];
var NZ_CONFIG_COMPONENT_NAME = 'typography';
var NzTypographyComponent = /** @class */ (function () {
    function NzTypographyComponent(nzConfigService, host, cdr, viewContainerRef, renderer, platform, i18n, nzDomEventService) {
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
    Object.defineProperty(NzTypographyComponent.prototype, "canCssEllipsis", {
        get: function () {
            return this.nzEllipsis && this.cssEllipsis && !this.expanded;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTypographyComponent.prototype, "copyText", {
        get: function () {
            return typeof this.nzCopyText === 'string' ? this.nzCopyText : this.nzContent;
        },
        enumerable: true,
        configurable: true
    });
    NzTypographyComponent.prototype.onTextCopy = function (text) {
        this.nzCopy.emit(text);
    };
    NzTypographyComponent.prototype.onStartEditing = function () {
        this.editing = true;
    };
    NzTypographyComponent.prototype.onEndEditing = function (text) {
        this.editing = false;
        this.nzContentChange.emit(text);
        if (this.nzContent === text) {
            this.renderOnNextFrame();
        }
    };
    NzTypographyComponent.prototype.onExpand = function () {
        this.expanded = true;
        this.nzExpandChange.emit();
    };
    NzTypographyComponent.prototype.canUseCSSEllipsis = function () {
        if (this.nzEditable || this.nzCopyable || this.nzExpandable) {
            return false;
        }
        if (this.nzEllipsisRows === 1) {
            return isStyleSupport('textOverflow');
        }
        else {
            return isStyleSupport('webkitLineClamp');
        }
    };
    NzTypographyComponent.prototype.renderOnNextFrame = function () {
        var _this = this;
        cancelRequestAnimationFrame(this.rfaId);
        if (!this.viewInit || !this.nzEllipsis || this.nzEllipsisRows < 0 || this.expanded || !this.platform.isBrowser) {
            return;
        }
        this.rfaId = reqAnimFrame(function () {
            _this.syncEllipsis();
        });
    };
    NzTypographyComponent.prototype.getOriginContentViewRef = function () {
        var _this = this;
        var viewRef = this.viewContainerRef.createEmbeddedView(this.contentTemplate, {
            content: this.nzContent
        });
        viewRef.detectChanges();
        return {
            viewRef: viewRef,
            removeView: function () {
                _this.viewContainerRef.remove(_this.viewContainerRef.indexOf(viewRef));
            }
        };
    };
    NzTypographyComponent.prototype.syncEllipsis = function () {
        var _this = this;
        if (this.cssEllipsis) {
            return;
        }
        var _a = this.getOriginContentViewRef(), viewRef = _a.viewRef, removeView = _a.removeView;
        var fixedNodes = [this.textCopyRef, this.textEditRef, this.expandableBtn].filter(function (e) { return e && e.nativeElement; }).map(function (e) { return e.nativeElement; });
        var _b = measure(this.host.nativeElement, this.nzEllipsisRows, viewRef.rootNodes, fixedNodes, this.ellipsisStr), contentNodes = _b.contentNodes, text = _b.text, ellipsis = _b.ellipsis;
        removeView();
        this.ellipsisText = text;
        this.isEllipsis = ellipsis;
        var ellipsisContainerNativeElement = this.ellipsisContainer.nativeElement;
        while (ellipsisContainerNativeElement.firstChild) {
            this.renderer.removeChild(ellipsisContainerNativeElement, ellipsisContainerNativeElement.firstChild);
        }
        contentNodes.forEach(function (n) {
            _this.renderer.appendChild(ellipsisContainerNativeElement, n.cloneNode(true));
        });
        this.cdr.markForCheck();
    };
    NzTypographyComponent.prototype.renderAndSubscribeWindowResize = function () {
        var _this = this;
        if (this.platform.isBrowser) {
            this.windowResizeSubscription.unsubscribe();
            this.cssEllipsis = this.canUseCSSEllipsis();
            this.renderOnNextFrame();
            this.windowResizeSubscription = this.nzDomEventService
                .registerResizeListener()
                .pipe(takeUntil(this.destroy$), finalize(function () { return _this.nzDomEventService.unregisterResizeListener(); }))
                .subscribe(function () { return _this.renderOnNextFrame(); });
        }
    };
    NzTypographyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(function () {
            _this.locale = _this.i18n.getLocaleData('Text');
            _this.cdr.markForCheck();
        });
    };
    NzTypographyComponent.prototype.ngAfterViewInit = function () {
        this.viewInit = true;
        this.renderAndSubscribeWindowResize();
    };
    NzTypographyComponent.prototype.ngOnChanges = function (changes) {
        var nzCopyable = changes.nzCopyable, nzEditable = changes.nzEditable, nzExpandable = changes.nzExpandable, nzEllipsis = changes.nzEllipsis, nzContent = changes.nzContent, nzEllipsisRows = changes.nzEllipsisRows;
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
    };
    NzTypographyComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
        this.windowResizeSubscription.unsubscribe();
    };
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
    return NzTypographyComponent;
}());
export { NzTypographyComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzTypographyComponent, [{
        type: Component,
        args: [{
                selector: "\n  nz-typography,\n  [nz-typography],\n  p[nz-paragraph],\n  span[nz-text],\n  h1[nz-title], h2[nz-title], h3[nz-title], h4[nz-title]\n  ",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHlwb2dyYXBoeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3R5cG9ncmFwaHkvIiwic291cmNlcyI6WyJuei10eXBvZ3JhcGh5LmNvbXBvbmVudC50cyIsIm56LXR5cG9ncmFwaHkuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUVWLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUNOLFNBQVMsRUFFVCxXQUFXLEVBQ1gsU0FBUyxFQUNULGdCQUFnQixFQUNoQixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRCxPQUFPLEVBQ0wsMkJBQTJCLEVBQzNCLFlBQVksRUFDWixXQUFXLEVBQ1gsY0FBYyxFQUNkLE9BQU8sRUFDUCxlQUFlLEVBQ2YsaUJBQWlCLEVBQ2pCLFlBQVksRUFDWixVQUFVLEVBQ1gsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDL0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7Ozs7OztJQzlDN0QsNENBQTZCOzs7SUFBN0Isb0ZBQTZCO0lBQzdCLFlBQ0Y7OztJQUZjLHFDQUFnQjtJQUM1QixlQUNGO0lBREUsK0NBQ0Y7Ozs7O0lBR0UsNkJBQ0U7SUFBQSxvSEFHQztJQUNILDBCQUFl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S0FBSzs7a0JBQ0wsTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBRU4sU0FBUzttQkFBQyxtQkFBbUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O2tCQUNoRCxTQUFTO21CQUFDLG1CQUFtQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7a0JBQ2hELFNBQVM7bUJBQUMsbUJBQW1CLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOztrQkFDaEQsU0FBUzttQkFBQyxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOztrQkFDekMsU0FBUzttQkFBQyxpQkFBaUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEVtYmVkZGVkVmlld1JlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3Q29udGFpbmVyUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmluYWxpemUsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgY2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lLFxyXG4gIElucHV0Qm9vbGVhbixcclxuICBJbnB1dE51bWJlcixcclxuICBpc1N0eWxlU3VwcG9ydCxcclxuICBtZWFzdXJlLFxyXG4gIE56Q29uZmlnU2VydmljZSxcclxuICBOekRvbUV2ZW50U2VydmljZSxcclxuICByZXFBbmltRnJhbWUsXHJcbiAgV2l0aENvbmZpZ1xyXG59IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5cclxuaW1wb3J0IHsgTnpUZXh0Q29weUNvbXBvbmVudCB9IGZyb20gJy4vbnotdGV4dC1jb3B5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56VGV4dEVkaXRDb21wb25lbnQgfSBmcm9tICcuL256LXRleHQtZWRpdC5jb21wb25lbnQnO1xyXG5cclxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ3R5cG9ncmFwaHknO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IGBcclxuICBuei10eXBvZ3JhcGh5LFxyXG4gIFtuei10eXBvZ3JhcGh5XSxcclxuICBwW256LXBhcmFncmFwaF0sXHJcbiAgc3Bhbltuei10ZXh0XSxcclxuICBoMVtuei10aXRsZV0sIGgyW256LXRpdGxlXSwgaDNbbnotdGl0bGVdLCBoNFtuei10aXRsZV1cclxuICBgLFxyXG4gIGV4cG9ydEFzOiAnbnpUeXBvZ3JhcGh5JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotdHlwb2dyYXBoeS5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC10eXBvZ3JhcGh5XSc6ICchZWRpdGluZycsXHJcbiAgICAnW2NsYXNzLmFudC10eXBvZ3JhcGh5LWVkaXQtY29udGVudF0nOiAnZWRpdGluZycsXHJcbiAgICAnW2NsYXNzLmFudC10eXBvZ3JhcGh5LXNlY29uZGFyeV0nOiAnbnpUeXBlID09PSBcInNlY29uZGFyeVwiJyxcclxuICAgICdbY2xhc3MuYW50LXR5cG9ncmFwaHktd2FybmluZ10nOiAnbnpUeXBlID09PSBcIndhcm5pbmdcIicsXHJcbiAgICAnW2NsYXNzLmFudC10eXBvZ3JhcGh5LWRhbmdlcl0nOiAnbnpUeXBlID09PSBcImRhbmdlclwiJyxcclxuICAgICdbY2xhc3MuYW50LXR5cG9ncmFwaHktZGlzYWJsZWRdJzogJ256RGlzYWJsZWQnLFxyXG4gICAgJ1tjbGFzcy5hbnQtdHlwb2dyYXBoeS1lbGxpcHNpc10nOiAnbnpFbGxpcHNpcyAmJiAhZXhwYW5kZWQnLFxyXG4gICAgJ1tjbGFzcy5hbnQtdHlwb2dyYXBoeS1lbGxpcHNpcy1zaW5nbGUtbGluZV0nOiAnY2FuQ3NzRWxsaXBzaXMgJiYgbnpFbGxpcHNpc1Jvd3MgPT09IDEnLFxyXG4gICAgJ1tjbGFzcy5hbnQtdHlwb2dyYXBoeS1lbGxpcHNpcy1tdWx0aXBsZS1saW5lXSc6ICdjYW5Dc3NFbGxpcHNpcyAmJiBuekVsbGlwc2lzUm93cyA+IDEnLFxyXG4gICAgJ1tzdHlsZS4td2Via2l0LWxpbmUtY2xhbXBdJzogJyhjYW5Dc3NFbGxpcHNpcyAmJiBuekVsbGlwc2lzUm93cyA+IDEpID8gbnpFbGxpcHNpc1Jvd3MgOiBudWxsJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56VHlwb2dyYXBoeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekNvcHlhYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RWRpdGFibGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekV4cGFuZGFibGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpFbGxpcHNpcyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56Q29udGVudDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgMSkgQElucHV0TnVtYmVyKCkgbnpFbGxpcHNpc1Jvd3M6IG51bWJlcjtcclxuICBASW5wdXQoKSBuelR5cGU6ICdzZWNvbmRhcnknIHwgJ3dhcm5pbmcnIHwgJ2RhbmdlcicgfCB1bmRlZmluZWQ7XHJcbiAgQElucHV0KCkgbnpDb3B5VGV4dDogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNvbnRlbnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDb3B5ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56RXhwYW5kQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBAVmlld0NoaWxkKE56VGV4dEVkaXRDb21wb25lbnQsIHsgc3RhdGljOiBmYWxzZSB9KSB0ZXh0RWRpdFJlZjogTnpUZXh0RWRpdENvbXBvbmVudDtcclxuICBAVmlld0NoaWxkKE56VGV4dENvcHlDb21wb25lbnQsIHsgc3RhdGljOiBmYWxzZSB9KSB0ZXh0Q29weVJlZjogTnpUZXh0Q29weUNvbXBvbmVudDtcclxuICBAVmlld0NoaWxkKCdlbGxpcHNpc0NvbnRhaW5lcicsIHsgc3RhdGljOiBmYWxzZSB9KSBlbGxpcHNpc0NvbnRhaW5lcjogRWxlbWVudFJlZjxIVE1MU3BhbkVsZW1lbnQ+O1xyXG4gIEBWaWV3Q2hpbGQoJ2V4cGFuZGFibGUnLCB7IHN0YXRpYzogZmFsc2UgfSkgZXhwYW5kYWJsZUJ0bjogRWxlbWVudFJlZjxIVE1MU3BhbkVsZW1lbnQ+O1xyXG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnRUZW1wbGF0ZScsIHsgc3RhdGljOiBmYWxzZSB9KSBjb250ZW50VGVtcGxhdGU6IFRlbXBsYXRlUmVmPHsgY29udGVudDogc3RyaW5nIH0+O1xyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgbG9jYWxlOiBhbnkgPSB7fTtcclxuICBlZGl0aW5nID0gZmFsc2U7XHJcbiAgZWxsaXBzaXNUZXh0OiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgY3NzRWxsaXBzaXM6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBpc0VsbGlwc2lzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgZXhwYW5kZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBlbGxpcHNpc1N0ciA9ICcuLi4nO1xyXG5cclxuICBnZXQgY2FuQ3NzRWxsaXBzaXMoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5uekVsbGlwc2lzICYmIHRoaXMuY3NzRWxsaXBzaXMgJiYgIXRoaXMuZXhwYW5kZWQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHZpZXdJbml0ID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSByZmFJZDogbnVtYmVyID0gLTE7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJpdmF0ZSB3aW5kb3dSZXNpemVTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XHJcbiAgZ2V0IGNvcHlUZXh0KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMubnpDb3B5VGV4dCA9PT0gJ3N0cmluZycgPyB0aGlzLm56Q29weVRleHQgOiB0aGlzLm56Q29udGVudDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBob3N0OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxyXG4gICAgcHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBuekRvbUV2ZW50U2VydmljZTogTnpEb21FdmVudFNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIG9uVGV4dENvcHkodGV4dDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLm56Q29weS5lbWl0KHRleHQpO1xyXG4gIH1cclxuXHJcbiAgb25TdGFydEVkaXRpbmcoKTogdm9pZCB7XHJcbiAgICB0aGlzLmVkaXRpbmcgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgb25FbmRFZGl0aW5nKHRleHQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5lZGl0aW5nID0gZmFsc2U7XHJcbiAgICB0aGlzLm56Q29udGVudENoYW5nZS5lbWl0KHRleHQpO1xyXG4gICAgaWYgKHRoaXMubnpDb250ZW50ID09PSB0ZXh0KSB7XHJcbiAgICAgIHRoaXMucmVuZGVyT25OZXh0RnJhbWUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uRXhwYW5kKCk6IHZvaWQge1xyXG4gICAgdGhpcy5leHBhbmRlZCA9IHRydWU7XHJcbiAgICB0aGlzLm56RXhwYW5kQ2hhbmdlLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIGNhblVzZUNTU0VsbGlwc2lzKCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMubnpFZGl0YWJsZSB8fCB0aGlzLm56Q29weWFibGUgfHwgdGhpcy5uekV4cGFuZGFibGUpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubnpFbGxpcHNpc1Jvd3MgPT09IDEpIHtcclxuICAgICAgcmV0dXJuIGlzU3R5bGVTdXBwb3J0KCd0ZXh0T3ZlcmZsb3cnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBpc1N0eWxlU3VwcG9ydCgnd2Via2l0TGluZUNsYW1wJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXJPbk5leHRGcmFtZSgpOiB2b2lkIHtcclxuICAgIGNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJmYUlkKTtcclxuICAgIGlmICghdGhpcy52aWV3SW5pdCB8fCAhdGhpcy5uekVsbGlwc2lzIHx8IHRoaXMubnpFbGxpcHNpc1Jvd3MgPCAwIHx8IHRoaXMuZXhwYW5kZWQgfHwgIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMucmZhSWQgPSByZXFBbmltRnJhbWUoKCkgPT4ge1xyXG4gICAgICB0aGlzLnN5bmNFbGxpcHNpcygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRPcmlnaW5Db250ZW50Vmlld1JlZigpOiB7IHZpZXdSZWY6IEVtYmVkZGVkVmlld1JlZjx7IGNvbnRlbnQ6IHN0cmluZyB9PjsgcmVtb3ZlVmlldygpOiB2b2lkIH0ge1xyXG4gICAgY29uc3Qgdmlld1JlZiA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVFbWJlZGRlZFZpZXc8eyBjb250ZW50OiBzdHJpbmcgfT4odGhpcy5jb250ZW50VGVtcGxhdGUsIHtcclxuICAgICAgY29udGVudDogdGhpcy5uekNvbnRlbnRcclxuICAgIH0pO1xyXG4gICAgdmlld1JlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB2aWV3UmVmLFxyXG4gICAgICByZW1vdmVWaWV3OiAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy52aWV3Q29udGFpbmVyUmVmLnJlbW92ZSh0aGlzLnZpZXdDb250YWluZXJSZWYuaW5kZXhPZih2aWV3UmVmKSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzeW5jRWxsaXBzaXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5jc3NFbGxpcHNpcykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCB7IHZpZXdSZWYsIHJlbW92ZVZpZXcgfSA9IHRoaXMuZ2V0T3JpZ2luQ29udGVudFZpZXdSZWYoKTtcclxuICAgIGNvbnN0IGZpeGVkTm9kZXMgPSBbdGhpcy50ZXh0Q29weVJlZiwgdGhpcy50ZXh0RWRpdFJlZiwgdGhpcy5leHBhbmRhYmxlQnRuXS5maWx0ZXIoZSA9PiBlICYmIGUubmF0aXZlRWxlbWVudCkubWFwKGUgPT4gZS5uYXRpdmVFbGVtZW50KTtcclxuXHJcbiAgICBjb25zdCB7IGNvbnRlbnROb2RlcywgdGV4dCwgZWxsaXBzaXMgfSA9IG1lYXN1cmUoXHJcbiAgICAgIHRoaXMuaG9zdC5uYXRpdmVFbGVtZW50LFxyXG4gICAgICB0aGlzLm56RWxsaXBzaXNSb3dzLFxyXG4gICAgICB2aWV3UmVmLnJvb3ROb2RlcyxcclxuICAgICAgZml4ZWROb2RlcyxcclxuICAgICAgdGhpcy5lbGxpcHNpc1N0clxyXG4gICAgKTtcclxuXHJcbiAgICByZW1vdmVWaWV3KCk7XHJcblxyXG4gICAgdGhpcy5lbGxpcHNpc1RleHQgPSB0ZXh0O1xyXG4gICAgdGhpcy5pc0VsbGlwc2lzID0gZWxsaXBzaXM7XHJcbiAgICBjb25zdCBlbGxpcHNpc0NvbnRhaW5lck5hdGl2ZUVsZW1lbnQgPSB0aGlzLmVsbGlwc2lzQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB3aGlsZSAoZWxsaXBzaXNDb250YWluZXJOYXRpdmVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZChlbGxpcHNpc0NvbnRhaW5lck5hdGl2ZUVsZW1lbnQsIGVsbGlwc2lzQ29udGFpbmVyTmF0aXZlRWxlbWVudC5maXJzdENoaWxkKTtcclxuICAgIH1cclxuICAgIGNvbnRlbnROb2Rlcy5mb3JFYWNoKG4gPT4ge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKGVsbGlwc2lzQ29udGFpbmVyTmF0aXZlRWxlbWVudCwgbi5jbG9uZU5vZGUodHJ1ZSkpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVuZGVyQW5kU3Vic2NyaWJlV2luZG93UmVzaXplKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XHJcbiAgICAgIHRoaXMud2luZG93UmVzaXplU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIHRoaXMuY3NzRWxsaXBzaXMgPSB0aGlzLmNhblVzZUNTU0VsbGlwc2lzKCk7XHJcbiAgICAgIHRoaXMucmVuZGVyT25OZXh0RnJhbWUoKTtcclxuICAgICAgdGhpcy53aW5kb3dSZXNpemVTdWJzY3JpcHRpb24gPSB0aGlzLm56RG9tRXZlbnRTZXJ2aWNlXHJcbiAgICAgICAgLnJlZ2lzdGVyUmVzaXplTGlzdGVuZXIoKVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxyXG4gICAgICAgICAgZmluYWxpemUoKCkgPT4gdGhpcy5uekRvbUV2ZW50U2VydmljZS51bnJlZ2lzdGVyUmVzaXplTGlzdGVuZXIoKSlcclxuICAgICAgICApXHJcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlbmRlck9uTmV4dEZyYW1lKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXRMb2NhbGVEYXRhKCdUZXh0Jyk7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnZpZXdJbml0ID0gdHJ1ZTtcclxuICAgIHRoaXMucmVuZGVyQW5kU3Vic2NyaWJlV2luZG93UmVzaXplKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBjb25zdCB7IG56Q29weWFibGUsIG56RWRpdGFibGUsIG56RXhwYW5kYWJsZSwgbnpFbGxpcHNpcywgbnpDb250ZW50LCBuekVsbGlwc2lzUm93cyB9ID0gY2hhbmdlcztcclxuICAgIGlmIChuekNvcHlhYmxlIHx8IG56RWRpdGFibGUgfHwgbnpFeHBhbmRhYmxlIHx8IG56RWxsaXBzaXMgfHwgbnpDb250ZW50IHx8IG56RWxsaXBzaXNSb3dzKSB7XHJcbiAgICAgIGlmICh0aGlzLm56RWxsaXBzaXMpIHtcclxuICAgICAgICBpZiAodGhpcy5leHBhbmRlZCkge1xyXG4gICAgICAgICAgdGhpcy53aW5kb3dSZXNpemVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5yZW5kZXJBbmRTdWJzY3JpYmVXaW5kb3dSZXNpemUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgICB0aGlzLndpbmRvd1Jlc2l6ZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxufVxyXG4iLCI8bmctdGVtcGxhdGUgI2NvbnRlbnRUZW1wbGF0ZSBsZXQtY29udGVudD1cImNvbnRlbnRcIj5cclxuICA8bmctY29udGVudCAqbmdJZj1cIiFjb250ZW50XCI+PC9uZy1jb250ZW50PlxyXG4gIHt7IGNvbnRlbnQgfX1cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjxuZy1jb250YWluZXIgKm5nSWY9XCIhZWRpdGluZ1wiPlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJleHBhbmRlZCB8fCAoIW56RXhwYW5kYWJsZSAmJiBuekVsbGlwc2lzUm93cyA9PT0gMSkgfHwgY2FuQ3NzRWxsaXBzaXNcIj5cclxuICAgIDxuZy10ZW1wbGF0ZVxyXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJjb250ZW50VGVtcGxhdGVcIlxyXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyBjb250ZW50OiBuekNvbnRlbnQgfVwiXHJcbiAgICA+PC9uZy10ZW1wbGF0ZT5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwibnpFbGxpcHNpcyAmJiAhZXhwYW5kZWQgJiYgKG56RWxsaXBzaXNSb3dzID4gMSB8fCBuekV4cGFuZGFibGUpXCI+XHJcbiAgICA8c3BhbiAjZWxsaXBzaXNDb250YWluZXI+PC9zcGFuPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzRWxsaXBzaXNcIj57eyBlbGxpcHNpc1N0ciB9fTwvbmctY29udGFpbmVyPlxyXG4gICAgPGFcclxuICAgICAgI2V4cGFuZGFibGVcclxuICAgICAgKm5nSWY9XCJuekV4cGFuZGFibGUgJiYgaXNFbGxpcHNpc1wiXHJcbiAgICAgIGNsYXNzPVwiYW50LXR5cG9ncmFwaHktZXhwYW5kXCJcclxuICAgICAgKGNsaWNrKT1cIm9uRXhwYW5kKClcIlxyXG4gICAgICA+e3sgbG9jYWxlPy5leHBhbmQgfX08L2FcclxuICAgID5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuPC9uZy1jb250YWluZXI+XHJcblxyXG48bnotdGV4dC1lZGl0XHJcbiAgKm5nSWY9XCJuekVkaXRhYmxlXCJcclxuICBbdGV4dF09XCJuekNvbnRlbnRcIlxyXG4gIChlbmRFZGl0aW5nKT1cIm9uRW5kRWRpdGluZygkZXZlbnQpXCJcclxuICAoc3RhcnRFZGl0aW5nKT1cIm9uU3RhcnRFZGl0aW5nKClcIlxyXG4+XHJcbjwvbnotdGV4dC1lZGl0PlxyXG5cclxuPG56LXRleHQtY29weVxyXG4gICpuZ0lmPVwibnpDb3B5YWJsZSAmJiAhZWRpdGluZ1wiXHJcbiAgW3RleHRdPVwiY29weVRleHRcIlxyXG4gICh0ZXh0Q29weSk9XCJvblRleHRDb3B5KCRldmVudClcIlxyXG4+PC9uei10ZXh0LWNvcHk+XHJcbiJdfQ==