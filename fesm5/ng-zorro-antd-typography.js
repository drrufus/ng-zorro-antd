import { Platform, PlatformModule } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, ElementRef, ChangeDetectorRef, Input, Output, ViewChild, ViewContainerRef, Renderer2, NgModule } from '@angular/core';
import { NzCopyToClipboardService, isStyleSupport, cancelRequestAnimationFrame, reqAnimFrame, measure, NzConfigService, NzDomEventService, InputBoolean, WithConfig, InputNumber, NzTransButtonModule, NzCopyToClipboardServiceModule } from 'ng-zorro-antd/core';
import { NzI18nService, NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAutosizeDirective, NzInputModule } from 'ng-zorro-antd/input';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { Subject, Subscription } from 'rxjs';
import { takeUntil, finalize } from 'rxjs/operators';
import { __decorate, __metadata } from 'tslib';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core';
import * as ɵngcc2 from 'ng-zorro-antd/i18n';
import * as ɵngcc3 from 'ng-zorro-antd/tooltip';
import * as ɵngcc4 from 'ng-zorro-antd/icon';
import * as ɵngcc5 from '@angular/common';
import * as ɵngcc6 from 'ng-zorro-antd/input';
import * as ɵngcc7 from '@angular/cdk/platform';

var _c0 = ["textarea"];
function NzTextEditComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    var _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 2);
    ɵngcc0.ɵɵlistener("click", function NzTextEditComponent_button_0_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r3); var ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2.onClick(); });
    ɵngcc0.ɵɵelement(1, "i", 3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("nzTitle", ctx_r0.locale == null ? null : ctx_r0.locale.edit);
} }
function NzTextEditComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    var _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "textarea", 4, 5);
    ɵngcc0.ɵɵlistener("input", function NzTextEditComponent_ng_container_1_Template_textarea_input_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); var ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.onInput($event); })("blur", function NzTextEditComponent_ng_container_1_Template_textarea_blur_1_listener() { ɵngcc0.ɵɵrestoreView(_r6); var ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.confirm(); })("keydown.esc", function NzTextEditComponent_ng_container_1_Template_textarea_keydown_esc_1_listener() { ɵngcc0.ɵɵrestoreView(_r6); var ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.onCancel(); })("keydown.enter", function NzTextEditComponent_ng_container_1_Template_textarea_keydown_enter_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); var ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.onEnter($event); });
    ɵngcc0.ɵɵtext(3, "  ");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "button", 6);
    ɵngcc0.ɵɵlistener("click", function NzTextEditComponent_ng_container_1_Template_button_click_4_listener() { ɵngcc0.ɵɵrestoreView(_r6); var ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.confirm(); });
    ɵngcc0.ɵɵelement(5, "i", 7);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} }
var _c1 = ["ellipsisContainer"];
var _c2 = ["expandable"];
var _c3 = ["contentTemplate"];
function NzTypographyComponent_ng_template_0_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 0, ["*ngIf", "!content"]);
} }
function NzTypographyComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NzTypographyComponent_ng_template_0_0_Template, 1, 0, undefined, 1);
    ɵngcc0.ɵɵtext(1);
} if (rf & 2) {
    var content_r5 = ctx.content;
    ɵngcc0.ɵɵproperty("ngIf", !content_r5);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", content_r5, "\n");
} }
function NzTypographyComponent_ng_container_2_ng_container_1_ng_template_1_Template(rf, ctx) { }
var _c4 = function (a0) { return { content: a0 }; };
function NzTypographyComponent_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzTypographyComponent_ng_container_2_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 4);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    var _r0 = ɵngcc0.ɵɵreference(1);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c4, ctx_r7.nzContent));
} }
function NzTypographyComponent_ng_container_2_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r11 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r11.ellipsisStr);
} }
function NzTypographyComponent_ng_container_2_ng_container_2_a_4_Template(rf, ctx) { if (rf & 1) {
    var _r15 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 7, 8);
    ɵngcc0.ɵɵlistener("click", function NzTypographyComponent_ng_container_2_ng_container_2_a_4_Template_a_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r15); var ctx_r14 = ɵngcc0.ɵɵnextContext(3); return ctx_r14.onExpand(); });
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r12 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r12.locale == null ? null : ctx_r12.locale.expand);
} }
function NzTypographyComponent_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "span", null, 5);
    ɵngcc0.ɵɵtemplate(3, NzTypographyComponent_ng_container_2_ng_container_2_ng_container_3_Template, 2, 1, "ng-container", 1);
    ɵngcc0.ɵɵtemplate(4, NzTypographyComponent_ng_container_2_ng_container_2_a_4_Template, 3, 1, "a", 6);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r8 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r8.isEllipsis);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r8.nzExpandable && ctx_r8.isEllipsis);
} }
function NzTypographyComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzTypographyComponent_ng_container_2_ng_container_1_Template, 2, 4, "ng-container", 1);
    ɵngcc0.ɵɵtemplate(2, NzTypographyComponent_ng_container_2_ng_container_2_Template, 5, 2, "ng-container", 1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.expanded || !ctx_r2.nzExpandable && ctx_r2.nzEllipsisRows === 1 || ctx_r2.canCssEllipsis);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.nzEllipsis && !ctx_r2.expanded && (ctx_r2.nzEllipsisRows > 1 || ctx_r2.nzExpandable));
} }
function NzTypographyComponent_nz_text_edit_3_Template(rf, ctx) { if (rf & 1) {
    var _r17 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "nz-text-edit", 9);
    ɵngcc0.ɵɵlistener("endEditing", function NzTypographyComponent_nz_text_edit_3_Template_nz_text_edit_endEditing_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r17); var ctx_r16 = ɵngcc0.ɵɵnextContext(); return ctx_r16.onEndEditing($event); })("startEditing", function NzTypographyComponent_nz_text_edit_3_Template_nz_text_edit_startEditing_0_listener() { ɵngcc0.ɵɵrestoreView(_r17); var ctx_r18 = ɵngcc0.ɵɵnextContext(); return ctx_r18.onStartEditing(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("text", ctx_r3.nzContent);
} }
function NzTypographyComponent_nz_text_copy_4_Template(rf, ctx) { if (rf & 1) {
    var _r20 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "nz-text-copy", 10);
    ɵngcc0.ɵɵlistener("textCopy", function NzTypographyComponent_nz_text_copy_4_Template_nz_text_copy_textCopy_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r20); var ctx_r19 = ɵngcc0.ɵɵnextContext(); return ctx_r19.onTextCopy($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("text", ctx_r4.copyText);
} }
var _c5 = ["*"];
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
    /**
     * @return {?}
     */
    NzTextCopyComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.locale = _this.i18n.getLocaleData('Text');
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @return {?}
     */
    NzTextCopyComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        clearTimeout(this.copyId);
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @return {?}
     */
    NzTextCopyComponent.prototype.onClick = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.copied) {
            return;
        }
        this.copied = true;
        this.cdr.detectChanges();
        /** @type {?} */
        var text = this.text;
        this.textCopy.emit(text);
        this.copyToClipboard
            .copy(text)
            .then((/**
         * @return {?}
         */
        function () { return _this.onCopied(); }))
            .catch((/**
         * @return {?}
         */
        function () { return _this.onCopied(); }));
    };
    /**
     * @return {?}
     */
    NzTextCopyComponent.prototype.onCopied = /**
     * @return {?}
     */
    function () {
        var _this = this;
        clearTimeout(this.copyId);
        this.copyId = setTimeout((/**
         * @return {?}
         */
        function () {
            _this.copied = false;
            _this.cdr.detectChanges();
        }), 3000);
    };
    /** @nocollapse */
    NzTextCopyComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: NzCopyToClipboardService },
        { type: NzI18nService }
    ]; };
    NzTextCopyComponent.propDecorators = {
        text: [{ type: Input }],
        textCopy: [{ type: Output }]
    };
NzTextCopyComponent.ɵfac = function NzTextCopyComponent_Factory(t) { return new (t || NzTextCopyComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzCopyToClipboardService), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NzI18nService)); };
NzTextCopyComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTextCopyComponent, selectors: [["nz-text-copy"]], inputs: { text: "text" }, outputs: { textCopy: "textCopy" }, exportAs: ["nzTextCopy"], decls: 2, vars: 4, consts: [["nz-tooltip", "", "nz-trans-button", "", 1, "ant-typography-copy", 3, "nzTitle", "click"], ["nz-icon", "", 3, "nzType"]], template: function NzTextCopyComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "button", 0);
        ɵngcc0.ɵɵlistener("click", function NzTextCopyComponent_Template_button_click_0_listener() { return ctx.onClick(); });
        ɵngcc0.ɵɵelement(1, "i", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-typography-copy-success", ctx.copied);
        ɵngcc0.ɵɵproperty("nzTitle", ctx.copied ? ctx.locale == null ? null : ctx.locale.copied : ctx.locale == null ? null : ctx.locale.copy);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("nzType", ctx.copied ? "check" : "copy");
    } }, directives: [ɵngcc1.NzTransButtonDirective, ɵngcc3.NzTooltipDirective, ɵngcc4.NzIconDirective], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTextCopyComponent, [{
        type: Component,
        args: [{
                selector: 'nz-text-copy',
                exportAs: 'nzTextCopy',
                template: "<button\r\n  nz-tooltip\r\n  nz-trans-button\r\n  [nzTitle]=\"copied ? locale?.copied : locale?.copy\"\r\n  class=\"ant-typography-copy\"\r\n  [class.ant-typography-copy-success]=\"copied\"\r\n  (click)=\"onClick()\">\r\n  <i nz-icon [nzType]=\"copied ? 'check' : 'copy'\"></i>\r\n</button>\r\n\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.NzCopyToClipboardService }, { type: ɵngcc2.NzI18nService }]; }, { textCopy: [{
            type: Output
        }], text: [{
            type: Input
        }] }); })();
    return NzTextCopyComponent;
}());
if (false) {
    /** @type {?} */
    NzTextCopyComponent.prototype.copied;
    /** @type {?} */
    NzTextCopyComponent.prototype.copyId;
    /** @type {?} */
    NzTextCopyComponent.prototype.locale;
    /** @type {?} */
    NzTextCopyComponent.prototype.nativeElement;
    /**
     * @type {?}
     * @private
     */
    NzTextCopyComponent.prototype.destroy$;
    /** @type {?} */
    NzTextCopyComponent.prototype.text;
    /** @type {?} */
    NzTextCopyComponent.prototype.textCopy;
    /**
     * @type {?}
     * @private
     */
    NzTextCopyComponent.prototype.host;
    /**
     * @type {?}
     * @private
     */
    NzTextCopyComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzTextCopyComponent.prototype.copyToClipboard;
    /**
     * @type {?}
     * @private
     */
    NzTextCopyComponent.prototype.i18n;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    /**
     * @return {?}
     */
    NzTextEditComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.locale = _this.i18n.getLocaleData('Text');
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @return {?}
     */
    NzTextEditComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @return {?}
     */
    NzTextEditComponent.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this.beforeText = this.text;
        this.currentText = this.beforeText;
        this.editing = true;
        this.startEditing.emit();
        this.focusAndSetValue();
    };
    /**
     * @return {?}
     */
    NzTextEditComponent.prototype.confirm = /**
     * @return {?}
     */
    function () {
        this.editing = false;
        this.endEditing.emit(this.currentText);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzTextEditComponent.prototype.onInput = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var target = (/** @type {?} */ (event.target));
        this.currentText = target.value;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzTextEditComponent.prototype.onEnter = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        event.preventDefault();
        this.confirm();
    };
    /**
     * @return {?}
     */
    NzTextEditComponent.prototype.onCancel = /**
     * @return {?}
     */
    function () {
        this.currentText = this.beforeText;
        this.confirm();
    };
    /**
     * @return {?}
     */
    NzTextEditComponent.prototype.focusAndSetValue = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (_this.textarea && _this.textarea.nativeElement) {
                _this.textarea.nativeElement.focus();
                _this.textarea.nativeElement.value = _this.currentText;
                _this.autosizeDirective.resizeToFitContent();
            }
        }));
    };
    /** @nocollapse */
    NzTextEditComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: NzI18nService }
    ]; };
    NzTextEditComponent.propDecorators = {
        text: [{ type: Input }],
        startEditing: [{ type: Output }],
        endEditing: [{ type: Output }],
        textarea: [{ type: ViewChild, args: ['textarea', { static: false },] }],
        autosizeDirective: [{ type: ViewChild, args: [NzAutosizeDirective, { static: false },] }]
    };
NzTextEditComponent.ɵfac = function NzTextEditComponent_Factory(t) { return new (t || NzTextEditComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NzI18nService)); };
NzTextEditComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTextEditComponent, selectors: [["nz-text-edit"]], viewQuery: function NzTextEditComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
        ɵngcc0.ɵɵviewQuery(NzAutosizeDirective, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.textarea = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.autosizeDirective = _t.first);
    } }, inputs: { text: "text" }, outputs: { startEditing: "startEditing", endEditing: "endEditing" }, exportAs: ["nzTextEdit"], decls: 2, vars: 2, consts: [["nz-tooltip", "", "nz-trans-button", "", "class", "ant-typography-edit", 3, "nzTitle", "click", 4, "ngIf"], [4, "ngIf"], ["nz-tooltip", "", "nz-trans-button", "", 1, "ant-typography-edit", 3, "nzTitle", "click"], ["nz-icon", "", "nzType", "edit"], ["nz-input", "", "nzAutosize", "", 3, "input", "blur", "keydown.esc", "keydown.enter"], ["textarea", ""], ["nz-trans-button", "", 1, "ant-typography-edit-content-confirm", 3, "click"], ["nz-icon", "", "nzType", "enter"]], template: function NzTextEditComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzTextEditComponent_button_0_Template, 2, 1, "button", 0);
        ɵngcc0.ɵɵtemplate(1, NzTextEditComponent_ng_container_1_Template, 6, 0, "ng-container", 1);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", !ctx.editing);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.editing);
    } }, directives: [ɵngcc5.NgIf, ɵngcc1.NzTransButtonDirective, ɵngcc3.NzTooltipDirective, ɵngcc4.NzIconDirective, ɵngcc6.NzAutosizeDirective, ɵngcc6.NzInputDirective], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTextEditComponent, [{
        type: Component,
        args: [{
                selector: 'nz-text-edit',
                exportAs: 'nzTextEdit',
                template: "<button\r\n  *ngIf=\"!editing\"\r\n  [nzTitle]=\"locale?.edit\"\r\n  nz-tooltip\r\n  nz-trans-button\r\n  class=\"ant-typography-edit\"\r\n  (click)=\"onClick()\">\r\n  <i nz-icon nzType=\"edit\"></i>\r\n</button>\r\n<ng-container *ngIf=\"editing\">\r\n  <textarea #textarea\r\n            nz-input\r\n            nzAutosize\r\n            (input)=\"onInput($event)\"\r\n            (blur)=\"confirm()\"\r\n            (keydown.esc)=\"onCancel()\"\r\n            (keydown.enter)=\"onEnter($event)\">\r\n  </textarea>\r\n  <button nz-trans-button class=\"ant-typography-edit-content-confirm\" (click)=\"confirm()\">\r\n    <i nz-icon nzType=\"enter\"></i>\r\n  </button>\r\n</ng-container>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc2.NzI18nService }]; }, { startEditing: [{
            type: Output
        }], endEditing: [{
            type: Output
        }], text: [{
            type: Input
        }], textarea: [{
            type: ViewChild,
            args: ['textarea', { static: false }]
        }], autosizeDirective: [{
            type: ViewChild,
            args: [NzAutosizeDirective, { static: false }]
        }] }); })();
    return NzTextEditComponent;
}());
if (false) {
    /** @type {?} */
    NzTextEditComponent.prototype.editing;
    /** @type {?} */
    NzTextEditComponent.prototype.locale;
    /**
     * @type {?}
     * @private
     */
    NzTextEditComponent.prototype.destroy$;
    /** @type {?} */
    NzTextEditComponent.prototype.text;
    /** @type {?} */
    NzTextEditComponent.prototype.startEditing;
    /** @type {?} */
    NzTextEditComponent.prototype.endEditing;
    /** @type {?} */
    NzTextEditComponent.prototype.textarea;
    /** @type {?} */
    NzTextEditComponent.prototype.autosizeDirective;
    /** @type {?} */
    NzTextEditComponent.prototype.beforeText;
    /** @type {?} */
    NzTextEditComponent.prototype.currentText;
    /** @type {?} */
    NzTextEditComponent.prototype.nativeElement;
    /**
     * @type {?}
     * @private
     */
    NzTextEditComponent.prototype.host;
    /**
     * @type {?}
     * @private
     */
    NzTextEditComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzTextEditComponent.prototype.i18n;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
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
        get: /**
         * @return {?}
         */
        function () {
            return this.nzEllipsis && this.cssEllipsis && !this.expanded;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTypographyComponent.prototype, "copyText", {
        get: /**
         * @return {?}
         */
        function () {
            return typeof this.nzCopyText === 'string' ? this.nzCopyText : this.nzContent;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} text
     * @return {?}
     */
    NzTypographyComponent.prototype.onTextCopy = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        this.nzCopy.emit(text);
    };
    /**
     * @return {?}
     */
    NzTypographyComponent.prototype.onStartEditing = /**
     * @return {?}
     */
    function () {
        this.editing = true;
    };
    /**
     * @param {?} text
     * @return {?}
     */
    NzTypographyComponent.prototype.onEndEditing = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        this.editing = false;
        this.nzContentChange.emit(text);
        if (this.nzContent === text) {
            this.renderOnNextFrame();
        }
    };
    /**
     * @return {?}
     */
    NzTypographyComponent.prototype.onExpand = /**
     * @return {?}
     */
    function () {
        this.expanded = true;
        this.nzExpandChange.emit();
    };
    /**
     * @return {?}
     */
    NzTypographyComponent.prototype.canUseCSSEllipsis = /**
     * @return {?}
     */
    function () {
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
    /**
     * @return {?}
     */
    NzTypographyComponent.prototype.renderOnNextFrame = /**
     * @return {?}
     */
    function () {
        var _this = this;
        cancelRequestAnimationFrame(this.rfaId);
        if (!this.viewInit || !this.nzEllipsis || this.nzEllipsisRows < 0 || this.expanded || !this.platform.isBrowser) {
            return;
        }
        this.rfaId = reqAnimFrame((/**
         * @return {?}
         */
        function () {
            _this.syncEllipsis();
        }));
    };
    /**
     * @return {?}
     */
    NzTypographyComponent.prototype.getOriginContentViewRef = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var viewRef = this.viewContainerRef.createEmbeddedView(this.contentTemplate, {
            content: this.nzContent
        });
        viewRef.detectChanges();
        return {
            viewRef: viewRef,
            removeView: (/**
             * @return {?}
             */
            function () {
                _this.viewContainerRef.remove(_this.viewContainerRef.indexOf(viewRef));
            })
        };
    };
    /**
     * @return {?}
     */
    NzTypographyComponent.prototype.syncEllipsis = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.cssEllipsis) {
            return;
        }
        var _a = this.getOriginContentViewRef(), viewRef = _a.viewRef, removeView = _a.removeView;
        /** @type {?} */
        var fixedNodes = [this.textCopyRef, this.textEditRef, this.expandableBtn]
            .filter((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return e && e.nativeElement; }))
            .map((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return e.nativeElement; }));
        var _b = measure(this.host.nativeElement, this.nzEllipsisRows, viewRef.rootNodes, fixedNodes, this.ellipsisStr), contentNodes = _b.contentNodes, text = _b.text, ellipsis = _b.ellipsis;
        removeView();
        this.ellipsisText = text;
        this.isEllipsis = ellipsis;
        /** @type {?} */
        var ellipsisContainerNativeElement = this.ellipsisContainer.nativeElement;
        while (ellipsisContainerNativeElement.firstChild) {
            this.renderer.removeChild(ellipsisContainerNativeElement, ellipsisContainerNativeElement.firstChild);
        }
        contentNodes.forEach((/**
         * @param {?} n
         * @return {?}
         */
        function (n) {
            _this.renderer.appendChild(ellipsisContainerNativeElement, n.cloneNode(true));
        }));
        this.cdr.markForCheck();
    };
    /**
     * @private
     * @return {?}
     */
    NzTypographyComponent.prototype.renderAndSubscribeWindowResize = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.platform.isBrowser) {
            this.windowResizeSubscription.unsubscribe();
            this.cssEllipsis = this.canUseCSSEllipsis();
            this.renderOnNextFrame();
            this.windowResizeSubscription = this.nzDomEventService
                .registerResizeListener()
                .pipe(takeUntil(this.destroy$), finalize((/**
             * @return {?}
             */
            function () { return _this.nzDomEventService.unregisterResizeListener(); })))
                .subscribe((/**
             * @return {?}
             */
            function () { return _this.renderOnNextFrame(); }));
        }
    };
    /**
     * @return {?}
     */
    NzTypographyComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.locale = _this.i18n.getLocaleData('Text');
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @return {?}
     */
    NzTypographyComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.viewInit = true;
        this.renderAndSubscribeWindowResize();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzTypographyComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
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
    /**
     * @return {?}
     */
    NzTypographyComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
        this.windowResizeSubscription.unsubscribe();
    };
    /** @nocollapse */
    NzTypographyComponent.ctorParameters = function () { return [
        { type: NzConfigService },
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: ViewContainerRef },
        { type: Renderer2 },
        { type: Platform },
        { type: NzI18nService },
        { type: NzDomEventService }
    ]; };
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
NzTypographyComponent.ɵfac = function NzTypographyComponent_Factory(t) { return new (t || NzTypographyComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzConfigService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc7.Platform), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NzI18nService), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzDomEventService)); };
NzTypographyComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTypographyComponent, selectors: [["nz-typography"], ["", "nz-typography", ""], ["p", "nz-paragraph", ""], ["span", "nz-text", ""], ["h1", "nz-title", ""], ["h2", "nz-title", ""], ["h3", "nz-title", ""], ["h4", "nz-title", ""]], viewQuery: function NzTypographyComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(NzTextEditComponent, true);
        ɵngcc0.ɵɵviewQuery(NzTextCopyComponent, true);
        ɵngcc0.ɵɵviewQuery(_c1, true);
        ɵngcc0.ɵɵviewQuery(_c2, true);
        ɵngcc0.ɵɵviewQuery(_c3, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.textEditRef = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.textCopyRef = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.ellipsisContainer = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.expandableBtn = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.contentTemplate = _t.first);
    } }, hostVars: 20, hostBindings: function NzTypographyComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("-webkit-line-clamp", ctx.canCssEllipsis && ctx.nzEllipsisRows > 1 ? ctx.nzEllipsisRows : null);
        ɵngcc0.ɵɵclassProp("ant-typography", !ctx.editing)("ant-typography-edit-content", ctx.editing)("ant-typography-secondary", ctx.nzType === "secondary")("ant-typography-warning", ctx.nzType === "warning")("ant-typography-danger", ctx.nzType === "danger")("ant-typography-disabled", ctx.nzDisabled)("ant-typography-ellipsis", ctx.nzEllipsis && !ctx.expanded)("ant-typography-ellipsis-single-line", ctx.canCssEllipsis && ctx.nzEllipsisRows === 1)("ant-typography-ellipsis-multiple-line", ctx.canCssEllipsis && ctx.nzEllipsisRows > 1);
    } }, inputs: { nzCopyable: "nzCopyable", nzEditable: "nzEditable", nzDisabled: "nzDisabled", nzExpandable: "nzExpandable", nzEllipsis: "nzEllipsis", nzContent: "nzContent", nzEllipsisRows: "nzEllipsisRows", nzType: "nzType", nzCopyText: "nzCopyText" }, outputs: { nzContentChange: "nzContentChange", nzCopy: "nzCopy", nzExpandChange: "nzExpandChange" }, exportAs: ["nzTypography"], features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c5, decls: 5, vars: 3, consts: [["contentTemplate", ""], [4, "ngIf"], [3, "text", "endEditing", "startEditing", 4, "ngIf"], [3, "text", "textCopy", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["ellipsisContainer", ""], ["class", "ant-typography-expand", 3, "click", 4, "ngIf"], [1, "ant-typography-expand", 3, "click"], ["expandable", ""], [3, "text", "endEditing", "startEditing"], [3, "text", "textCopy"]], template: function NzTypographyComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, NzTypographyComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(2, NzTypographyComponent_ng_container_2_Template, 3, 2, "ng-container", 1);
        ɵngcc0.ɵɵtemplate(3, NzTypographyComponent_nz_text_edit_3_Template, 1, 1, "nz-text-edit", 2);
        ɵngcc0.ɵɵtemplate(4, NzTypographyComponent_nz_text_copy_4_Template, 1, 1, "nz-text-copy", 3);
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.editing);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzEditable);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzCopyable && !ctx.editing);
    } }, directives: [ɵngcc5.NgIf, ɵngcc5.NgTemplateOutlet, NzTextEditComponent,
        NzTextCopyComponent], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTypographyComponent, [{
        type: Component,
        args: [{
                selector: "\n  nz-typography,\n  [nz-typography],\n  p[nz-paragraph],\n  span[nz-text],\n  h1[nz-title], h2[nz-title], h3[nz-title], h4[nz-title]\n  ",
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
            }]
    }], function () { return [{ type: ɵngcc1.NzConfigService }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.ViewContainerRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc7.Platform }, { type: ɵngcc2.NzI18nService }, { type: ɵngcc1.NzDomEventService }]; }, { nzCopyable: [{
            type: Input
        }], nzEditable: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }], nzExpandable: [{
            type: Input
        }], nzEllipsis: [{
            type: Input
        }], nzContentChange: [{
            type: Output
        }], nzCopy: [{
            type: Output
        }], nzExpandChange: [{
            type: Output
        }], nzContent: [{
            type: Input
        }], nzEllipsisRows: [{
            type: Input
        }], nzType: [{
            type: Input
        }], nzCopyText: [{
            type: Input
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
    return NzTypographyComponent;
}());
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzTypographyModule = /** @class */ (function () {
    function NzTypographyModule() {
    }
NzTypographyModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzTypographyModule });
NzTypographyModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzTypographyModule_Factory(t) { return new (t || NzTypographyModule)(); }, imports: [[
            CommonModule,
            NzIconModule,
            NzToolTipModule,
            NzInputModule,
            NzI18nModule,
            NzTransButtonModule,
            NzCopyToClipboardServiceModule
        ],
        PlatformModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzTypographyModule, { declarations: function () { return [NzTypographyComponent,
        NzTextCopyComponent,
        NzTextEditComponent]; }, imports: function () { return [CommonModule,
        NzIconModule,
        NzToolTipModule,
        NzInputModule,
        NzI18nModule,
        NzTransButtonModule,
        NzCopyToClipboardServiceModule]; }, exports: function () { return [NzTypographyComponent,
        NzTextCopyComponent,
        NzTextEditComponent,
        PlatformModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTypographyModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    NzIconModule,
                    NzToolTipModule,
                    NzInputModule,
                    NzI18nModule,
                    NzTransButtonModule,
                    NzCopyToClipboardServiceModule
                ],
                exports: [NzTypographyComponent, NzTextCopyComponent, NzTextEditComponent, PlatformModule],
                declarations: [NzTypographyComponent, NzTextCopyComponent, NzTextEditComponent]
            }]
    }], function () { return []; }, null); })();
    return NzTypographyModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzTextCopyComponent, NzTextEditComponent, NzTypographyComponent, NzTypographyModule };


//# sourceMappingURL=ng-zorro-antd-typography.js.map