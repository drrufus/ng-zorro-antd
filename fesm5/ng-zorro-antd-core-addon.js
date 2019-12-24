import { CommonModule } from '@angular/common';
import { ɵɵdirectiveInject, ElementRef, Renderer2, ɵɵdefineDirective, ɵsetClassMetadata, Directive, Input, TemplateRef, ViewContainerRef, ɵɵNgOnChangesFeature, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { __values } from 'tslib';

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzClassListAddDirective = /** @class */ (function () {
    function NzClassListAddDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.classList = [];
    }
    Object.defineProperty(NzClassListAddDirective.prototype, "nzClassListAdd", {
        set: function (list) {
            var _this = this;
            this.classList.forEach(function (name) {
                _this.renderer.removeClass(_this.elementRef.nativeElement, name);
            });
            list.forEach(function (name) {
                _this.renderer.addClass(_this.elementRef.nativeElement, name);
            });
            this.classList = list;
        },
        enumerable: true,
        configurable: true
    });
    /** @nocollapse */ NzClassListAddDirective.ɵfac = function NzClassListAddDirective_Factory(t) { return new (t || NzClassListAddDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2)); };
    /** @nocollapse */ NzClassListAddDirective.ɵdir = ɵɵdefineDirective({ type: NzClassListAddDirective, selectors: [["", "nzClassListAdd", ""]], inputs: { nzClassListAdd: "nzClassListAdd" }, exportAs: ["nzClassListAdd"] });
    return NzClassListAddDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzClassListAddDirective, [{
        type: Directive,
        args: [{
                selector: '[nzClassListAdd]',
                exportAs: 'nzClassListAdd'
            }]
    }], function () { return [{ type: ElementRef }, { type: Renderer2 }]; }, { nzClassListAdd: [{
            type: Input
        }] }); })();

var NzStringTemplateOutletDirective = /** @class */ (function () {
    function NzStringTemplateOutletDirective(viewContainer, defaultTemplate) {
        this.viewContainer = viewContainer;
        this.defaultTemplate = defaultTemplate;
        // tslint:disable-next-line:no-any
        this.inputTemplate = null;
        this.inputViewRef = null;
        this.defaultViewRef = null;
        // tslint:disable-next-line:no-any
        this.nzStringTemplateOutletContext = null;
    }
    Object.defineProperty(NzStringTemplateOutletDirective.prototype, "nzStringTemplateOutlet", {
        set: function (value) {
            if (value instanceof TemplateRef) {
                this.isTemplate = true;
                this.inputTemplate = value;
            }
            else {
                this.isTemplate = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    NzStringTemplateOutletDirective.prototype.recreateView = function () {
        if (!this.isTemplate) {
            /** use default template when input is string **/
            if (!this.defaultViewRef) {
                if (this.defaultTemplate) {
                    this.defaultViewRef = this.viewContainer.createEmbeddedView(this.defaultTemplate, this.nzStringTemplateOutletContext);
                }
            }
        }
        else {
            /** use input template when input is templateRef **/
            if (!this.inputViewRef) {
                if (this.inputTemplate) {
                    this.inputViewRef = this.viewContainer.createEmbeddedView(this.inputTemplate, this.nzStringTemplateOutletContext);
                }
            }
        }
    };
    // tslint:disable-next-line:no-any
    NzStringTemplateOutletDirective.prototype.getType = function (value) {
        if (value instanceof TemplateRef) {
            return 'template';
        }
        else {
            return 'string';
        }
    };
    NzStringTemplateOutletDirective.prototype.shouldRecreateView = function (changes) {
        var nzStringTemplateOutletContext = changes.nzStringTemplateOutletContext, nzStringTemplateOutlet = changes.nzStringTemplateOutlet;
        var shouldOutletRecreate = false;
        if (nzStringTemplateOutlet) {
            if (nzStringTemplateOutlet.firstChange) {
                shouldOutletRecreate = true;
            }
            else {
                var previousOutletType = this.getType(nzStringTemplateOutlet.previousValue);
                var currentOutletType = this.getType(nzStringTemplateOutlet.currentValue);
                shouldOutletRecreate = !(previousOutletType === 'string' && currentOutletType === 'string');
            }
        }
        var shouldContextRecreate = nzStringTemplateOutletContext && this.hasContextShapeChanged(nzStringTemplateOutletContext);
        return shouldContextRecreate || shouldOutletRecreate;
    };
    NzStringTemplateOutletDirective.prototype.hasContextShapeChanged = function (ctxChange) {
        var e_1, _a;
        var prevCtxKeys = Object.keys(ctxChange.previousValue || {});
        var currCtxKeys = Object.keys(ctxChange.currentValue || {});
        if (prevCtxKeys.length === currCtxKeys.length) {
            try {
                for (var currCtxKeys_1 = __values(currCtxKeys), currCtxKeys_1_1 = currCtxKeys_1.next(); !currCtxKeys_1_1.done; currCtxKeys_1_1 = currCtxKeys_1.next()) {
                    var propName = currCtxKeys_1_1.value;
                    if (prevCtxKeys.indexOf(propName) === -1) {
                        return true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (currCtxKeys_1_1 && !currCtxKeys_1_1.done && (_a = currCtxKeys_1.return)) _a.call(currCtxKeys_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return false;
        }
        else {
            return true;
        }
    };
    // tslint:disable-next-line:no-any
    NzStringTemplateOutletDirective.prototype.updateExistingContext = function (ctx) {
        var e_2, _a;
        try {
            for (var _b = __values(Object.keys(ctx)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var propName = _c.value;
                // tslint:disable-next-line:no-any
                this.inputViewRef.context[propName] = this.nzStringTemplateOutletContext[propName];
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    NzStringTemplateOutletDirective.prototype.ngOnChanges = function (changes) {
        var recreateView = this.shouldRecreateView(changes);
        if (recreateView) {
            if (this.viewContainer) {
                this.viewContainer.clear();
                this.defaultViewRef = null;
                this.inputViewRef = null;
            }
            this.recreateView();
        }
        else {
            if (this.inputViewRef && this.nzStringTemplateOutletContext) {
                this.updateExistingContext(this.nzStringTemplateOutletContext);
            }
        }
    };
    /** @nocollapse */ NzStringTemplateOutletDirective.ɵfac = function NzStringTemplateOutletDirective_Factory(t) { return new (t || NzStringTemplateOutletDirective)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(TemplateRef)); };
    /** @nocollapse */ NzStringTemplateOutletDirective.ɵdir = ɵɵdefineDirective({ type: NzStringTemplateOutletDirective, selectors: [["", "nzStringTemplateOutlet", ""]], inputs: { nzStringTemplateOutletContext: "nzStringTemplateOutletContext", nzStringTemplateOutlet: "nzStringTemplateOutlet" }, exportAs: ["nzStringTemplateOutlet"], features: [ɵɵNgOnChangesFeature()] });
    return NzStringTemplateOutletDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzStringTemplateOutletDirective, [{
        type: Directive,
        args: [{
                selector: '[nzStringTemplateOutlet]',
                exportAs: 'nzStringTemplateOutlet'
            }]
    }], function () { return [{ type: ViewContainerRef }, { type: TemplateRef }]; }, { nzStringTemplateOutletContext: [{
            type: Input
        }], nzStringTemplateOutlet: [{
            type: Input
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzAddOnModule = /** @class */ (function () {
    function NzAddOnModule() {
    }
    /** @nocollapse */ NzAddOnModule.ɵmod = ɵɵdefineNgModule({ type: NzAddOnModule });
    /** @nocollapse */ NzAddOnModule.ɵinj = ɵɵdefineInjector({ factory: function NzAddOnModule_Factory(t) { return new (t || NzAddOnModule)(); }, imports: [[CommonModule]] });
    return NzAddOnModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzAddOnModule, { declarations: [NzStringTemplateOutletDirective, NzClassListAddDirective], imports: [CommonModule], exports: [NzStringTemplateOutletDirective, NzClassListAddDirective] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzAddOnModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [NzStringTemplateOutletDirective, NzClassListAddDirective],
                declarations: [NzStringTemplateOutletDirective, NzClassListAddDirective]
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

export { NzAddOnModule, NzClassListAddDirective, NzStringTemplateOutletDirective };
//# sourceMappingURL=ng-zorro-antd-core-addon.js.map
