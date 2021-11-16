import { NgModule } from '@angular/core';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { NzIconModule, NZ_ICONS } from 'ng-zorro-antd/icon';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
import * as ɵngcc0 from '@angular/core';
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
            provide: NZ_ICONS,
            useValue: ɵ1
        }
    ], imports: [NzIconModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzIconTestModule, { exports: function () { return [NzIconModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzIconTestModule, [{
        type: NgModule,
        args: [{
                exports: [NzIconModule],
                providers: [
                    {
                        provide: NZ_ICONS,
                        useValue: ɵ1
                    }
                ]
            }]
    }], function () { return []; }, null); })();
    return NzIconTestModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzIconTestModule };

//# sourceMappingURL=ng-zorro-antd-icon-testing.js.map