/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
export class NzMenuBaseService {
    constructor() {
        this.menuItemClick$ = new Subject(); // tslint:disable-line no-any
        // tslint:disable-line no-any
        this.theme$ = new Subject();
        this.mode$ = new BehaviorSubject('vertical');
        this.inlineIndent$ = new BehaviorSubject(24);
        this.theme = 'light';
        this.mode = 'vertical';
        this.inlineIndent = 24;
        this.menuOpen$ = new BehaviorSubject(false);
    }
    // tslint:disable-next-line no-any
    /**
     * @param {?} menu
     * @return {?}
     */
    onMenuItemClick(menu) {
        this.menuItemClick$.next(menu);
    }
    /**
     * @param {?} mode
     * @return {?}
     */
    setMode(mode) {
        this.mode = mode;
        this.mode$.next(mode);
    }
    /**
     * @param {?} theme
     * @return {?}
     */
    setTheme(theme) {
        this.theme = theme;
        this.theme$.next(theme);
    }
    /**
     * @param {?} indent
     * @return {?}
     */
    setInlineIndent(indent) {
        this.inlineIndent = indent;
        this.inlineIndent$.next(indent);
    }
}
NzMenuBaseService.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    NzMenuBaseService.prototype.isInDropDown;
    /** @type {?} */
    NzMenuBaseService.prototype.menuItemClick$;
    /** @type {?} */
    NzMenuBaseService.prototype.theme$;
    /** @type {?} */
    NzMenuBaseService.prototype.mode$;
    /** @type {?} */
    NzMenuBaseService.prototype.inlineIndent$;
    /** @type {?} */
    NzMenuBaseService.prototype.theme;
    /** @type {?} */
    NzMenuBaseService.prototype.mode;
    /** @type {?} */
    NzMenuBaseService.prototype.inlineIndent;
    /** @type {?} */
    NzMenuBaseService.prototype.menuOpen$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudS1iYXNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJkcm9wZG93bi9uei1tZW51LWJhc2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFLaEQsTUFBTSxPQUFPLGlCQUFpQjtJQUQ5QjtRQUdFLG1CQUFjLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQyxDQUFDLDZCQUE2Qjs7UUFDbEUsV0FBTSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDdkIsVUFBSyxHQUFHLElBQUksZUFBZSxDQUFxQixVQUFVLENBQUMsQ0FBQztRQUM1RCxrQkFBYSxHQUFHLElBQUksZUFBZSxDQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELFVBQUssR0FBcUIsT0FBTyxDQUFDO1FBQ2xDLFNBQUksR0FBdUIsVUFBVSxDQUFDO1FBQ3RDLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLGNBQVMsR0FBRyxJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztJQXFCbEQsQ0FBQzs7Ozs7O0lBbEJDLGVBQWUsQ0FBQyxJQUFTO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLElBQXdCO1FBQzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQXVCO1FBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLE1BQWM7UUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7O1lBOUJGLFVBQVU7Ozs7SUFFVCx5Q0FBc0I7O0lBQ3RCLDJDQUFvQzs7SUFDcEMsbUNBQXVCOztJQUN2QixrQ0FBNEQ7O0lBQzVELDBDQUFnRDs7SUFDaEQsa0NBQWtDOztJQUNsQyxpQ0FBc0M7O0lBQ3RDLHlDQUFrQjs7SUFDbEIsc0NBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgTnpEaXJlY3Rpb25WSElUeXBlIH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTnpNZW51QmFzZVNlcnZpY2Uge1xyXG4gIGlzSW5Ecm9wRG93bjogYm9vbGVhbjtcclxuICBtZW51SXRlbUNsaWNrJCA9IG5ldyBTdWJqZWN0PGFueT4oKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZSBuby1hbnlcclxuICB0aGVtZSQgPSBuZXcgU3ViamVjdCgpO1xyXG4gIG1vZGUkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxOekRpcmVjdGlvblZISVR5cGU+KCd2ZXJ0aWNhbCcpO1xyXG4gIGlubGluZUluZGVudCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PG51bWJlcj4oMjQpO1xyXG4gIHRoZW1lOiAnbGlnaHQnIHwgJ2RhcmsnID0gJ2xpZ2h0JztcclxuICBtb2RlOiBOekRpcmVjdGlvblZISVR5cGUgPSAndmVydGljYWwnO1xyXG4gIGlubGluZUluZGVudCA9IDI0O1xyXG4gIG1lbnVPcGVuJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tYW55XHJcbiAgb25NZW51SXRlbUNsaWNrKG1lbnU6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5tZW51SXRlbUNsaWNrJC5uZXh0KG1lbnUpO1xyXG4gIH1cclxuXHJcbiAgc2V0TW9kZShtb2RlOiBOekRpcmVjdGlvblZISVR5cGUpOiB2b2lkIHtcclxuICAgIHRoaXMubW9kZSA9IG1vZGU7XHJcbiAgICB0aGlzLm1vZGUkLm5leHQobW9kZSk7XHJcbiAgfVxyXG5cclxuICBzZXRUaGVtZSh0aGVtZTogJ2xpZ2h0JyB8ICdkYXJrJyk6IHZvaWQge1xyXG4gICAgdGhpcy50aGVtZSA9IHRoZW1lO1xyXG4gICAgdGhpcy50aGVtZSQubmV4dCh0aGVtZSk7XHJcbiAgfVxyXG5cclxuICBzZXRJbmxpbmVJbmRlbnQoaW5kZW50OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5saW5lSW5kZW50ID0gaW5kZW50O1xyXG4gICAgdGhpcy5pbmxpbmVJbmRlbnQkLm5leHQoaW5kZW50KTtcclxuICB9XHJcbn1cclxuIl19