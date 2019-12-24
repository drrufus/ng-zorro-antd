import { Platform, PlatformModule } from '@angular/cdk/platform';
import { NgIf, NgTemplateOutlet, CommonModule } from '@angular/common';
import { EventEmitter, ɵɵdirectiveInject, ElementRef, ChangeDetectorRef, ɵɵdefineComponent, ɵɵelementStart, ɵɵlistener, ɵɵelement, ɵɵelementEnd, ɵɵclassProp, ɵɵproperty, ɵɵadvance, ɵsetClassMetadata, Component, ChangeDetectionStrategy, ViewEncapsulation, Input, Output, ɵɵgetCurrentView, ɵɵrestoreView, ɵɵnextContext, ɵɵelementContainerStart, ɵɵtext, ɵɵelementContainerEnd, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵtemplate, ViewChild, ɵɵprojection, ɵɵtextInterpolate1, ɵɵreference, ɵɵpureFunction1, ɵɵtextInterpolate, ViewContainerRef, Renderer2, ɵɵallocHostVars, ɵɵstyleProp, ɵɵNgOnChangesFeature, ɵɵprojectionDef, ɵɵtemplateRefExtractor, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NzCopyToClipboardService, NzTransButtonDirective, isStyleSupport, cancelRequestAnimationFrame, reqAnimFrame, measure, NzConfigService, NzDomEventService, InputBoolean, WithConfig, InputNumber, NzTransButtonModule, NzCopyToClipboardServiceModule } from 'ng-zorro-antd/core';
import { NzI18nService, NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { NzAutosizeDirective, NzInputDirective, NzInputModule } from 'ng-zorro-antd/input';
import { NzTooltipDirective, NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { Subject, Subscription } from 'rxjs';
import { takeUntil, finalize } from 'rxjs/operators';
import { __decorate, __metadata } from 'tslib';

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzTextCopyComponent = /** @class */ (function () {
    function NzTextCopyComponent(host, cdr, copyToClipboard, i18n) {
        this.host = host;
        this.cdr = cdr;
        this.copyToClipboard = copyToClipboard;
        this.i18n = i18n;
        this.copied = false;
        // tslint:disable-next-line:no-any
        this.locale = {};
        this.nativeElement = this.host.nativeElement;
        this.destroy$ = new Subject();
        this.textCopy = new EventEmitter();
    }
    NzTextCopyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(function () {
            _this.locale = _this.i18n.getLocaleData('Text');
            _this.cdr.markForCheck();
        });
    };
    NzTextCopyComponent.prototype.ngOnDestroy = function () {
        clearTimeout(this.copyId);
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzTextCopyComponent.prototype.onClick = function () {
        var _this = this;
        if (this.copied) {
            return;
        }
        this.copied = true;
        this.cdr.detectChanges();
        var text = this.text;
        this.textCopy.emit(text);
        this.copyToClipboard
            .copy(text)
            .then(function () { return _this.onCopied(); })
            .catch(function () { return _this.onCopied(); });
    };
    NzTextCopyComponent.prototype.onCopied = function () {
        var _this = this;
        clearTimeout(this.copyId);
        this.copyId = setTimeout(function () {
            _this.copied = false;
            _this.cdr.detectChanges();
        }, 3000);
    };
    /** @nocollapse */ NzTextCopyComponent.ɵfac = function NzTextCopyComponent_Factory(t) { return new (t || NzTextCopyComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzCopyToClipboardService), ɵɵdirectiveInject(NzI18nService)); };
    /** @nocollapse */ NzTextCopyComponent.ɵcmp = ɵɵdefineComponent({ type: NzTextCopyComponent, selectors: [["nz-text-copy"]], inputs: { text: "text" }, outputs: { textCopy: "textCopy" }, exportAs: ["nzTextCopy"], decls: 2, vars: 3, consts: [["nz-tooltip", "", "nz-trans-button", "", 1, "ant-typography-copy", 3, "nzTitle", "click"], ["nz-icon", "", 3, "nzType"]], template: function NzTextCopyComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "button", 0);
            ɵɵlistener("click", function NzTextCopyComponent_Template_button_click_0_listener($event) { return ctx.onClick(); });
            ɵɵelement(1, "i", 1);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵclassProp("ant-typography-copy-success", ctx.copied);
            ɵɵproperty("nzTitle", ctx.copied ? ctx.locale == null ? null : ctx.locale.copied : ctx.locale == null ? null : ctx.locale.copy);
            ɵɵadvance(1);
            ɵɵproperty("nzType", ctx.copied ? "check" : "copy");
        } }, directives: [NzTransButtonDirective, NzTooltipDirective, NzIconDirective], encapsulation: 2, changeDetection: 0 });
    return NzTextCopyComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzTextCopyComponent, [{
        type: Component,
        args: [{
                selector: 'nz-text-copy',
                exportAs: 'nzTextCopy',
                templateUrl: './nz-text-copy.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false
            }]
    }], function () { return [{ type: ElementRef }, { type: ChangeDetectorRef }, { type: NzCopyToClipboardService }, { type: NzI18nService }]; }, { text: [{
            type: Input
        }], textCopy: [{
            type: Output
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var _c0 = ["textarea"];
function NzTextEditComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    var _r1743 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 2);
    ɵɵlistener("click", function NzTextEditComponent_button_0_Template_button_click_0_listener($event) { ɵɵrestoreView(_r1743); var ctx_r1742 = ɵɵnextContext(); return ctx_r1742.onClick(); });
    ɵɵelement(1, "i", 3);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1740 = ɵɵnextContext();
    ɵɵproperty("nzTitle", ctx_r1740.locale == null ? null : ctx_r1740.locale.edit);
} }
function NzTextEditComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    var _r1746 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "textarea", 4, 5);
    ɵɵlistener("input", function NzTextEditComponent_ng_container_1_Template_textarea_input_1_listener($event) { ɵɵrestoreView(_r1746); var ctx_r1745 = ɵɵnextContext(); return ctx_r1745.onInput($event); })("blur", function NzTextEditComponent_ng_container_1_Template_textarea_blur_1_listener($event) { ɵɵrestoreView(_r1746); var ctx_r1747 = ɵɵnextContext(); return ctx_r1747.confirm(); })("keydown.esc", function NzTextEditComponent_ng_container_1_Template_textarea_keydown_esc_1_listener($event) { ɵɵrestoreView(_r1746); var ctx_r1748 = ɵɵnextContext(); return ctx_r1748.onCancel(); })("keydown.enter", function NzTextEditComponent_ng_container_1_Template_textarea_keydown_enter_1_listener($event) { ɵɵrestoreView(_r1746); var ctx_r1749 = ɵɵnextContext(); return ctx_r1749.onEnter($event); });
    ɵɵtext(3, "  ");
    ɵɵelementEnd();
    ɵɵelementStart(4, "button", 6);
    ɵɵlistener("click", function NzTextEditComponent_ng_container_1_Template_button_click_4_listener($event) { ɵɵrestoreView(_r1746); var ctx_r1750 = ɵɵnextContext(); return ctx_r1750.confirm(); });
    ɵɵelement(5, "i", 7);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} }
var NzTextEditComponent = /** @class */ (function () {
    function NzTextEditComponent(host, cdr, i18n) {
        this.host = host;
        this.cdr = cdr;
        this.i18n = i18n;
        this.editing = false;
        // tslint:disable-next-line:no-any
        this.locale = {};
        this.destroy$ = new Subject();
        this.startEditing = new EventEmitter();
        this.endEditing = new EventEmitter();
        this.nativeElement = this.host.nativeElement;
    }
    NzTextEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(function () {
            _this.locale = _this.i18n.getLocaleData('Text');
            _this.cdr.markForCheck();
        });
    };
    NzTextEditComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzTextEditComponent.prototype.onClick = function () {
        this.beforeText = this.text;
        this.currentText = this.beforeText;
        this.editing = true;
        this.startEditing.emit();
        this.focusAndSetValue();
    };
    NzTextEditComponent.prototype.confirm = function () {
        this.editing = false;
        this.endEditing.emit(this.currentText);
    };
    NzTextEditComponent.prototype.onInput = function (event) {
        var target = event.target;
        this.currentText = target.value;
    };
    NzTextEditComponent.prototype.onEnter = function (event) {
        event.stopPropagation();
        event.preventDefault();
        this.confirm();
    };
    NzTextEditComponent.prototype.onCancel = function () {
        this.currentText = this.beforeText;
        this.confirm();
    };
    NzTextEditComponent.prototype.focusAndSetValue = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.textarea && _this.textarea.nativeElement) {
                _this.textarea.nativeElement.focus();
                _this.textarea.nativeElement.value = _this.currentText;
                _this.autosizeDirective.resizeToFitContent();
            }
        });
    };
    /** @nocollapse */ NzTextEditComponent.ɵfac = function NzTextEditComponent_Factory(t) { return new (t || NzTextEditComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzI18nService)); };
    /** @nocollapse */ NzTextEditComponent.ɵcmp = ɵɵdefineComponent({ type: NzTextEditComponent, selectors: [["nz-text-edit"]], viewQuery: function NzTextEditComponent_Query(rf, ctx) { if (rf & 1) {
            ɵɵviewQuery(_c0, true);
            ɵɵviewQuery(NzAutosizeDirective, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.textarea = _t.first);
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.autosizeDirective = _t.first);
        } }, inputs: { text: "text" }, outputs: { startEditing: "startEditing", endEditing: "endEditing" }, exportAs: ["nzTextEdit"], decls: 2, vars: 2, consts: [["nz-tooltip", "", "nz-trans-button", "", "class", "ant-typography-edit", 3, "nzTitle", "click", 4, "ngIf"], [4, "ngIf"], ["nz-tooltip", "", "nz-trans-button", "", 1, "ant-typography-edit", 3, "nzTitle", "click"], ["nz-icon", "", "nzType", "edit"], ["nz-input", "", "nzAutosize", "", 3, "input", "blur", "keydown.esc", "keydown.enter"], ["textarea", ""], ["nz-trans-button", "", 1, "ant-typography-edit-content-confirm", 3, "click"], ["nz-icon", "", "nzType", "enter"]], template: function NzTextEditComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵtemplate(0, NzTextEditComponent_button_0_Template, 2, 1, "button", 0);
            ɵɵtemplate(1, NzTextEditComponent_ng_container_1_Template, 6, 0, "ng-container", 1);
        } if (rf & 2) {
            ɵɵproperty("ngIf", !ctx.editing);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.editing);
        } }, directives: [NgIf, NzTransButtonDirective, NzTooltipDirective, NzIconDirective, NzAutosizeDirective, NzInputDirective], encapsulation: 2, changeDetection: 0 });
    return NzTextEditComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzTextEditComponent, [{
        type: Component,
        args: [{
                selector: 'nz-text-edit',
                exportAs: 'nzTextEdit',
                templateUrl: './nz-text-edit.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false
            }]
    }], function () { return [{ type: ElementRef }, { type: ChangeDetectorRef }, { type: NzI18nService }]; }, { text: [{
            type: Input
        }], startEditing: [{
            type: Output
        }], endEditing: [{
            type: Output
        }], textarea: [{
            type: ViewChild,
            args: ['textarea', { static: false }]
        }], autosizeDirective: [{
            type: ViewChild,
            args: [NzAutosizeDirective, { static: false }]
        }] }); })();

var _c0$1 = ["ellipsisContainer"];
var _c1 = ["expandable"];
var _c2 = ["contentTemplate"];
function NzTypographyComponent_ng_template_0_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵprojection(0, 0, ["*ngIf", "!content"]);
} }
function NzTypographyComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, NzTypographyComponent_ng_template_0_0_Template, 1, 0, undefined, 1);
    ɵɵtext(1);
} if (rf & 2) {
    var content_r1756 = ctx.content;
    ɵɵproperty("ngIf", !content_r1756);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", content_r1756, "\n");
} }
function NzTypographyComponent_ng_container_2_ng_container_1_ng_template_1_Template(rf, ctx) { }
var _c3 = function (a0) { return { content: a0 }; };
function NzTypographyComponent_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzTypographyComponent_ng_container_2_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 4);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1758 = ɵɵnextContext(2);
    var _r1751 = ɵɵreference(1);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r1751)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c3, ctx_r1758.nzContent));
} }
function NzTypographyComponent_ng_container_2_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1762 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r1762.ellipsisStr);
} }
function NzTypographyComponent_ng_container_2_ng_container_2_a_4_Template(rf, ctx) { if (rf & 1) {
    var _r1766 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 7, 8);
    ɵɵlistener("click", function NzTypographyComponent_ng_container_2_ng_container_2_a_4_Template_a_click_0_listener($event) { ɵɵrestoreView(_r1766); var ctx_r1765 = ɵɵnextContext(3); return ctx_r1765.onExpand(); });
    ɵɵtext(2);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1763 = ɵɵnextContext(3);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1763.locale == null ? null : ctx_r1763.locale.expand);
} }
function NzTypographyComponent_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "span", null, 5);
    ɵɵtemplate(3, NzTypographyComponent_ng_container_2_ng_container_2_ng_container_3_Template, 2, 1, "ng-container", 1);
    ɵɵtemplate(4, NzTypographyComponent_ng_container_2_ng_container_2_a_4_Template, 3, 1, "a", 6);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1759 = ɵɵnextContext(2);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r1759.isEllipsis);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1759.nzExpandable && ctx_r1759.isEllipsis);
} }
function NzTypographyComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzTypographyComponent_ng_container_2_ng_container_1_Template, 2, 4, "ng-container", 1);
    ɵɵtemplate(2, NzTypographyComponent_ng_container_2_ng_container_2_Template, 5, 2, "ng-container", 1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1753 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1753.expanded || !ctx_r1753.nzExpandable && ctx_r1753.nzEllipsisRows === 1 || ctx_r1753.canCssEllipsis);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1753.nzEllipsis && !ctx_r1753.expanded && (ctx_r1753.nzEllipsisRows > 1 || ctx_r1753.nzExpandable));
} }
function NzTypographyComponent_nz_text_edit_3_Template(rf, ctx) { if (rf & 1) {
    var _r1768 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-text-edit", 9);
    ɵɵlistener("endEditing", function NzTypographyComponent_nz_text_edit_3_Template_nz_text_edit_endEditing_0_listener($event) { ɵɵrestoreView(_r1768); var ctx_r1767 = ɵɵnextContext(); return ctx_r1767.onEndEditing($event); })("startEditing", function NzTypographyComponent_nz_text_edit_3_Template_nz_text_edit_startEditing_0_listener($event) { ɵɵrestoreView(_r1768); var ctx_r1769 = ɵɵnextContext(); return ctx_r1769.onStartEditing(); });
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1754 = ɵɵnextContext();
    ɵɵproperty("text", ctx_r1754.nzContent);
} }
function NzTypographyComponent_nz_text_copy_4_Template(rf, ctx) { if (rf & 1) {
    var _r1771 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-text-copy", 10);
    ɵɵlistener("textCopy", function NzTypographyComponent_nz_text_copy_4_Template_nz_text_copy_textCopy_0_listener($event) { ɵɵrestoreView(_r1771); var ctx_r1770 = ɵɵnextContext(); return ctx_r1770.onTextCopy($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1755 = ɵɵnextContext();
    ɵɵproperty("text", ctx_r1755.copyText);
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
    /** @nocollapse */ NzTypographyComponent.ɵfac = function NzTypographyComponent_Factory(t) { return new (t || NzTypographyComponent)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(NzI18nService), ɵɵdirectiveInject(NzDomEventService)); };
    /** @nocollapse */ NzTypographyComponent.ɵcmp = ɵɵdefineComponent({ type: NzTypographyComponent, selectors: [["nz-typography"], ["", "nz-typography", ""], ["p", "nz-paragraph", ""], ["span", "nz-text", ""], ["h1", "nz-title", ""], ["h2", "nz-title", ""], ["h3", "nz-title", ""], ["h4", "nz-title", ""]], viewQuery: function NzTypographyComponent_Query(rf, ctx) { if (rf & 1) {
            ɵɵviewQuery(NzTextEditComponent, true);
            ɵɵviewQuery(NzTextCopyComponent, true);
            ɵɵviewQuery(_c0$1, true);
            ɵɵviewQuery(_c1, true);
            ɵɵviewQuery(_c2, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.textEditRef = _t.first);
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.textCopyRef = _t.first);
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.ellipsisContainer = _t.first);
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.expandableBtn = _t.first);
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentTemplate = _t.first);
        } }, hostBindings: function NzTypographyComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            ɵɵallocHostVars(10);
        } if (rf & 2) {
            ɵɵstyleProp("-webkit-line-clamp", ctx.canCssEllipsis && ctx.nzEllipsisRows > 1 ? ctx.nzEllipsisRows : null);
            ɵɵclassProp("ant-typography", !ctx.editing)("ant-typography-edit-content", ctx.editing)("ant-typography-secondary", ctx.nzType === "secondary")("ant-typography-warning", ctx.nzType === "warning")("ant-typography-danger", ctx.nzType === "danger")("ant-typography-disabled", ctx.nzDisabled)("ant-typography-ellipsis", ctx.nzEllipsis && !ctx.expanded)("ant-typography-ellipsis-single-line", ctx.canCssEllipsis && ctx.nzEllipsisRows === 1)("ant-typography-ellipsis-multiple-line", ctx.canCssEllipsis && ctx.nzEllipsisRows > 1);
        } }, inputs: { nzCopyable: "nzCopyable", nzEditable: "nzEditable", nzDisabled: "nzDisabled", nzExpandable: "nzExpandable", nzEllipsis: "nzEllipsis", nzContent: "nzContent", nzEllipsisRows: "nzEllipsisRows", nzType: "nzType", nzCopyText: "nzCopyText" }, outputs: { nzContentChange: "nzContentChange", nzCopy: "nzCopy", nzExpandChange: "nzExpandChange" }, exportAs: ["nzTypography"], features: [ɵɵNgOnChangesFeature()], ngContentSelectors: _c4, decls: 5, vars: 3, consts: [["contentTemplate", ""], [4, "ngIf"], [3, "text", "endEditing", "startEditing", 4, "ngIf"], [3, "text", "textCopy", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["ellipsisContainer", ""], ["class", "ant-typography-expand", 3, "click", 4, "ngIf"], [1, "ant-typography-expand", 3, "click"], ["expandable", ""], [3, "text", "endEditing", "startEditing"], [3, "text", "textCopy"]], template: function NzTypographyComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵtemplate(0, NzTypographyComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor);
            ɵɵtemplate(2, NzTypographyComponent_ng_container_2_Template, 3, 2, "ng-container", 1);
            ɵɵtemplate(3, NzTypographyComponent_nz_text_edit_3_Template, 1, 1, "nz-text-edit", 2);
            ɵɵtemplate(4, NzTypographyComponent_nz_text_copy_4_Template, 1, 1, "nz-text-copy", 3);
        } if (rf & 2) {
            ɵɵadvance(2);
            ɵɵproperty("ngIf", !ctx.editing);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.nzEditable);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.nzCopyable && !ctx.editing);
        } }, directives: [NgIf, NgTemplateOutlet, NzTextEditComponent, NzTextCopyComponent], encapsulation: 2, changeDetection: 0 });
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
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzTypographyComponent, [{
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
    }], function () { return [{ type: NzConfigService }, { type: ElementRef }, { type: ChangeDetectorRef }, { type: ViewContainerRef }, { type: Renderer2 }, { type: Platform }, { type: NzI18nService }, { type: NzDomEventService }]; }, { nzCopyable: [{
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

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzTypographyModule = /** @class */ (function () {
    function NzTypographyModule() {
    }
    /** @nocollapse */ NzTypographyModule.ɵmod = ɵɵdefineNgModule({ type: NzTypographyModule });
    /** @nocollapse */ NzTypographyModule.ɵinj = ɵɵdefineInjector({ factory: function NzTypographyModule_Factory(t) { return new (t || NzTypographyModule)(); }, imports: [[CommonModule, NzIconModule, NzToolTipModule, NzInputModule, NzI18nModule, NzTransButtonModule, NzCopyToClipboardServiceModule],
            PlatformModule] });
    return NzTypographyModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzTypographyModule, { declarations: [NzTypographyComponent, NzTextCopyComponent, NzTextEditComponent], imports: [CommonModule, NzIconModule, NzToolTipModule, NzInputModule, NzI18nModule, NzTransButtonModule, NzCopyToClipboardServiceModule], exports: [NzTypographyComponent, NzTextCopyComponent, NzTextEditComponent, PlatformModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzTypographyModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NzIconModule, NzToolTipModule, NzInputModule, NzI18nModule, NzTransButtonModule, NzCopyToClipboardServiceModule],
                exports: [NzTypographyComponent, NzTextCopyComponent, NzTextEditComponent, PlatformModule],
                declarations: [NzTypographyComponent, NzTextCopyComponent, NzTextEditComponent]
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

export { NzTextCopyComponent, NzTextEditComponent, NzTypographyComponent, NzTypographyModule };
//# sourceMappingURL=ng-zorro-antd-typography.js.map
