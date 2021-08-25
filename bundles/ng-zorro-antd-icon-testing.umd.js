(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('ng-zorro-antd/icon'),exports, require('@angular/core'), require('@ant-design/icons-angular/icons'), require('ng-zorro-antd/icon')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/icon/testing', ['@angular/core','ng-zorro-antd/icon','exports', '@angular/core', '@ant-design/icons-angular/icons', 'ng-zorro-antd/icon'], factory) :
    (global = global || self, factory(global.ng.core,global.ngZorroAntd.icon,(global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].icon = global['ng-zorro-antd'].icon || {}, global['ng-zorro-antd'].icon.testing = {}), global.ng.core, global.AllIcons, global['ng-zorro-antd'].icon));
}(this, (function (ɵngcc0,ɵngcc1,exports, core, AllIcons, icon) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var antDesignIcons = (/** @type {?} */ (AllIcons));
    var ɵ0 = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var i = antDesignIcons[key];
        return i;
    };
    /** @type {?} */
    var icons = Object.keys(antDesignIcons).map((ɵ0));
    var ɵ1 = icons;
    /**
     * Include this module in every testing spec, except `nz-icon.spec.ts`.
     */
    // @dynamic
    var NzIconTestModule = /** @class */ (function () {
        function NzIconTestModule() {
        }
NzIconTestModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzIconTestModule });
NzIconTestModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzIconTestModule_Factory(t) { return new (t || NzIconTestModule)(); }, providers: [
        {
            provide: icon.NZ_ICONS,
            useValue: ɵ1
        }
    ], imports: [ɵngcc1.NzIconModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzIconTestModule, { exports: [ɵngcc1.NzIconModule] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzIconTestModule, [{
        type: core.NgModule,
        args: [{
                exports: [icon.NzIconModule],
                providers: [
                    {
                        provide: icon.NZ_ICONS,
                        useValue: ɵ1
                    }
                ]
            }]
    }], function () { return []; }, null); })();
        return NzIconTestModule;
    }());

    exports.NzIconTestModule = NzIconTestModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-zorro-antd-icon-testing.umd.js.map