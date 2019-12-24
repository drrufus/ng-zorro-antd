(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@ant-design/icons-angular/icons'), require('ng-zorro-antd/icon')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/icon/testing', ['exports', '@angular/core', '@ant-design/icons-angular/icons', 'ng-zorro-antd/icon'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].icon = global['ng-zorro-antd'].icon || {}, global['ng-zorro-antd'].icon.testing = {}), global.ng.core, global.AllIcons, global['ng-zorro-antd'].icon));
}(this, (function (exports, core, AllIcons, icon) { 'use strict';

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var antDesignIcons = AllIcons;
    var icons = Object.keys(antDesignIcons).map(function (key) {
        var i = antDesignIcons[key];
        return i;
    });
    /**
     * Include this module in every testing spec, except `nz-icon.spec.ts`.
     */
    // @dynamic
    var NzIconTestModule = /** @class */ (function () {
        function NzIconTestModule() {
        }
        /** @nocollapse */ NzIconTestModule.ɵmod = core.ɵɵdefineNgModule({ type: NzIconTestModule });
        /** @nocollapse */ NzIconTestModule.ɵinj = core.ɵɵdefineInjector({ factory: function NzIconTestModule_Factory(t) { return new (t || NzIconTestModule)(); }, providers: [
                {
                    provide: icon.NZ_ICONS,
                    useValue: icons
                }
            ], imports: [icon.NzIconModule] });
        return NzIconTestModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(NzIconTestModule, { exports: [icon.NzIconModule] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzIconTestModule, [{
            type: core.NgModule,
            args: [{
                    exports: [icon.NzIconModule],
                    providers: [
                        {
                            provide: icon.NZ_ICONS,
                            useValue: icons
                        }
                    ]
                }]
        }], null, null); })();

    exports.NzIconTestModule = NzIconTestModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-icon-testing.umd.js.map
