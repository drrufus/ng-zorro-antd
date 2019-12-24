import { ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, ɵsetClassMetadata, NgModule } from '@angular/core';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const antDesignIcons = AllIcons;
const icons = Object.keys(antDesignIcons).map(key => {
    const i = antDesignIcons[key];
    return i;
});
/**
 * Include this module in every testing spec, except `nz-icon.spec.ts`.
 */
// @dynamic
class NzIconTestModule {
}
/** @nocollapse */ NzIconTestModule.ɵmod = ɵɵdefineNgModule({ type: NzIconTestModule });
/** @nocollapse */ NzIconTestModule.ɵinj = ɵɵdefineInjector({ factory: function NzIconTestModule_Factory(t) { return new (t || NzIconTestModule)(); }, providers: [
        {
            provide: NZ_ICONS,
            useValue: icons
        }
    ], imports: [NzIconModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzIconTestModule, { exports: [NzIconModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzIconTestModule, [{
        type: NgModule,
        args: [{
                exports: [NzIconModule],
                providers: [
                    {
                        provide: NZ_ICONS,
                        useValue: icons
                    }
                ]
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

export { NzIconTestModule };
//# sourceMappingURL=ng-zorro-antd-icon-testing.js.map
