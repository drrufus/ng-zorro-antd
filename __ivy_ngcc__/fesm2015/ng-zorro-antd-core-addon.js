import { CommonModule } from '@angular/common';
import { Directive, ElementRef, Renderer2, Input, TemplateRef, ViewContainerRef, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as ɵngcc0 from '@angular/core';
class NzClassListAddDirective {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.classList = [];
    }
    /**
     * @param {?} list
     * @return {?}
     */
    set nzClassListAdd(list) {
        this.classList.forEach((/**
         * @param {?} name
         * @return {?}
         */
        name => {
            this.renderer.removeClass(this.elementRef.nativeElement, name);
        }));
        list.forEach((/**
         * @param {?} name
         * @return {?}
         */
        name => {
            this.renderer.addClass(this.elementRef.nativeElement, name);
        }));
        this.classList = list;
    }
}
NzClassListAddDirective.ɵfac = function NzClassListAddDirective_Factory(t) { return new (t || NzClassListAddDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2)); };
NzClassListAddDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzClassListAddDirective, selectors: [["", "nzClassListAdd", ""]], inputs: { nzClassListAdd: "nzClassListAdd" }, exportAs: ["nzClassListAdd"] });
/** @nocollapse */
NzClassListAddDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
NzClassListAddDirective.propDecorators = {
    nzClassListAdd: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzClassListAddDirective, [{
        type: Directive,
        args: [{
                selector: '[nzClassListAdd]',
                exportAs: 'nzClassListAdd'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }]; }, { nzClassListAdd: [{
            type: Input
        }] }); })();
if (false) {
    /** @type {?} */
    NzClassListAddDirective.prototype.classList;
    /**
     * @type {?}
     * @private
     */
    NzClassListAddDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzClassListAddDirective.prototype.renderer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzStringTemplateOutletDirective {
    /**
     * @param {?} viewContainer
     * @param {?} defaultTemplate
     */
    constructor(viewContainer, defaultTemplate) {
        this.viewContainer = viewContainer;
        this.defaultTemplate = defaultTemplate;
        // tslint:disable-next-line:no-any
        this.inputTemplate = null;
        this.inputViewRef = null;
        this.defaultViewRef = null;
        // tslint:disable-next-line:no-any
        this.nzStringTemplateOutletContext = null;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzStringTemplateOutlet(value) {
        if (value instanceof TemplateRef) {
            this.isTemplate = true;
            this.inputTemplate = value;
        }
        else {
            this.isTemplate = false;
        }
    }
    /**
     * @return {?}
     */
    recreateView() {
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
    }
    // tslint:disable-next-line:no-any
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    getType(value) {
        if (value instanceof TemplateRef) {
            return 'template';
        }
        else {
            return 'string';
        }
    }
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    shouldRecreateView(changes) {
        const { nzStringTemplateOutletContext, nzStringTemplateOutlet } = changes;
        /** @type {?} */
        let shouldOutletRecreate = false;
        if (nzStringTemplateOutlet) {
            if (nzStringTemplateOutlet.firstChange) {
                shouldOutletRecreate = true;
            }
            else {
                /** @type {?} */
                const previousOutletType = this.getType(nzStringTemplateOutlet.previousValue);
                /** @type {?} */
                const currentOutletType = this.getType(nzStringTemplateOutlet.currentValue);
                shouldOutletRecreate = !(previousOutletType === 'string' && currentOutletType === 'string');
            }
        }
        /** @type {?} */
        const shouldContextRecreate = nzStringTemplateOutletContext && this.hasContextShapeChanged(nzStringTemplateOutletContext);
        return shouldContextRecreate || shouldOutletRecreate;
    }
    /**
     * @private
     * @param {?} ctxChange
     * @return {?}
     */
    hasContextShapeChanged(ctxChange) {
        /** @type {?} */
        const prevCtxKeys = Object.keys(ctxChange.previousValue || {});
        /** @type {?} */
        const currCtxKeys = Object.keys(ctxChange.currentValue || {});
        if (prevCtxKeys.length === currCtxKeys.length) {
            for (const propName of currCtxKeys) {
                if (prevCtxKeys.indexOf(propName) === -1) {
                    return true;
                }
            }
            return false;
        }
        else {
            return true;
        }
    }
    // tslint:disable-next-line:no-any
    /**
     * @private
     * @param {?} ctx
     * @return {?}
     */
    updateExistingContext(ctx) {
        for (const propName of Object.keys(ctx)) {
            // tslint:disable-next-line:no-any
            ((/** @type {?} */ ((/** @type {?} */ (this.inputViewRef)).context)))[propName] = this.nzStringTemplateOutletContext[propName];
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const recreateView = this.shouldRecreateView(changes);
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
    }
}
NzStringTemplateOutletDirective.ɵfac = function NzStringTemplateOutletDirective_Factory(t) { return new (t || NzStringTemplateOutletDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef)); };
NzStringTemplateOutletDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzStringTemplateOutletDirective, selectors: [["", "nzStringTemplateOutlet", ""]], inputs: { nzStringTemplateOutletContext: "nzStringTemplateOutletContext", nzStringTemplateOutlet: "nzStringTemplateOutlet" }, exportAs: ["nzStringTemplateOutlet"], features: [ɵngcc0.ɵɵNgOnChangesFeature] });
/** @nocollapse */
NzStringTemplateOutletDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: TemplateRef }
];
NzStringTemplateOutletDirective.propDecorators = {
    nzStringTemplateOutletContext: [{ type: Input }],
    nzStringTemplateOutlet: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzStringTemplateOutletDirective, [{
        type: Directive,
        args: [{
                selector: '[nzStringTemplateOutlet]',
                exportAs: 'nzStringTemplateOutlet'
            }]
    }], function () { return [{ type: ɵngcc0.ViewContainerRef }, { type: ɵngcc0.TemplateRef }]; }, { nzStringTemplateOutletContext: [{
            type: Input
        }], nzStringTemplateOutlet: [{
            type: Input
        }] }); })();
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzStringTemplateOutletDirective.prototype.isTemplate;
    /**
     * @type {?}
     * @private
     */
    NzStringTemplateOutletDirective.prototype.inputTemplate;
    /**
     * @type {?}
     * @private
     */
    NzStringTemplateOutletDirective.prototype.inputViewRef;
    /**
     * @type {?}
     * @private
     */
    NzStringTemplateOutletDirective.prototype.defaultViewRef;
    /** @type {?} */
    NzStringTemplateOutletDirective.prototype.nzStringTemplateOutletContext;
    /**
     * @type {?}
     * @private
     */
    NzStringTemplateOutletDirective.prototype.viewContainer;
    /**
     * @type {?}
     * @private
     */
    NzStringTemplateOutletDirective.prototype.defaultTemplate;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzAddOnModule {
}
NzAddOnModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzAddOnModule });
NzAddOnModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzAddOnModule_Factory(t) { return new (t || NzAddOnModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzAddOnModule, { declarations: function () { return [NzStringTemplateOutletDirective,
        NzClassListAddDirective]; }, imports: function () { return [CommonModule]; }, exports: function () { return [NzStringTemplateOutletDirective,
        NzClassListAddDirective]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzAddOnModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [NzStringTemplateOutletDirective, NzClassListAddDirective],
                declarations: [NzStringTemplateOutletDirective, NzClassListAddDirective]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzAddOnModule, NzClassListAddDirective, NzStringTemplateOutletDirective };

//# sourceMappingURL=ng-zorro-antd-core-addon.js.map