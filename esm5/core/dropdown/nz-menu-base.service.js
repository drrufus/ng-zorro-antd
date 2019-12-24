/**
 * @fileoverview added by tsickle
 * Generated from: dropdown/nz-menu-base.service.ts
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
var NzMenuBaseService = /** @class */ (function () {
    function NzMenuBaseService() {
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
    // tslint:disable-next-line no-any
    /**
     * @param {?} menu
     * @return {?}
     */
    NzMenuBaseService.prototype.onMenuItemClick = 
    // tslint:disable-next-line no-any
    /**
     * @param {?} menu
     * @return {?}
     */
    function (menu) {
        this.menuItemClick$.next(menu);
    };
    /**
     * @param {?} mode
     * @return {?}
     */
    NzMenuBaseService.prototype.setMode = /**
     * @param {?} mode
     * @return {?}
     */
    function (mode) {
        this.mode = mode;
        this.mode$.next(mode);
    };
    /**
     * @param {?} theme
     * @return {?}
     */
    NzMenuBaseService.prototype.setTheme = /**
     * @param {?} theme
     * @return {?}
     */
    function (theme) {
        this.theme = theme;
        this.theme$.next(theme);
    };
    /**
     * @param {?} indent
     * @return {?}
     */
    NzMenuBaseService.prototype.setInlineIndent = /**
     * @param {?} indent
     * @return {?}
     */
    function (indent) {
        this.inlineIndent = indent;
        this.inlineIndent$.next(indent);
    };
    NzMenuBaseService.decorators = [
        { type: Injectable }
    ];
    return NzMenuBaseService;
}());
export { NzMenuBaseService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudS1iYXNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJkcm9wZG93bi9uei1tZW51LWJhc2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBSWhEO0lBQUE7UUFHRSxtQkFBYyxHQUFHLElBQUksT0FBTyxFQUFPLENBQUMsQ0FBQyw2QkFBNkI7O1FBQ2xFLFdBQU0sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3ZCLFVBQUssR0FBRyxJQUFJLGVBQWUsQ0FBcUIsVUFBVSxDQUFDLENBQUM7UUFDNUQsa0JBQWEsR0FBRyxJQUFJLGVBQWUsQ0FBUyxFQUFFLENBQUMsQ0FBQztRQUNoRCxVQUFLLEdBQXFCLE9BQU8sQ0FBQztRQUNsQyxTQUFJLEdBQXVCLFVBQVUsQ0FBQztRQUN0QyxpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixjQUFTLEdBQUcsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7SUFxQmxELENBQUM7SUFuQkMsa0NBQWtDOzs7Ozs7SUFDbEMsMkNBQWU7Ozs7OztJQUFmLFVBQWdCLElBQVM7UUFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFFRCxtQ0FBTzs7OztJQUFQLFVBQVEsSUFBd0I7UUFDOUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxvQ0FBUTs7OztJQUFSLFVBQVMsS0FBdUI7UUFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCwyQ0FBZTs7OztJQUFmLFVBQWdCLE1BQWM7UUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Z0JBOUJGLFVBQVU7O0lBK0JYLHdCQUFDO0NBQUEsQUEvQkQsSUErQkM7U0E5QlksaUJBQWlCOzs7SUFDNUIseUNBQXNCOztJQUN0QiwyQ0FBb0M7O0lBQ3BDLG1DQUF1Qjs7SUFDdkIsa0NBQTREOztJQUM1RCwwQ0FBZ0Q7O0lBQ2hELGtDQUFrQzs7SUFDbEMsaUNBQXNDOztJQUN0Qyx5Q0FBa0I7O0lBQ2xCLHNDQUFnRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTnpEaXJlY3Rpb25WSElUeXBlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTnpNZW51QmFzZVNlcnZpY2Uge1xuICBpc0luRHJvcERvd246IGJvb2xlYW47XG4gIG1lbnVJdGVtQ2xpY2skID0gbmV3IFN1YmplY3Q8YW55PigpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lIG5vLWFueVxuICB0aGVtZSQgPSBuZXcgU3ViamVjdCgpO1xuICBtb2RlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TnpEaXJlY3Rpb25WSElUeXBlPigndmVydGljYWwnKTtcbiAgaW5saW5lSW5kZW50JCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPigyNCk7XG4gIHRoZW1lOiAnbGlnaHQnIHwgJ2RhcmsnID0gJ2xpZ2h0JztcbiAgbW9kZTogTnpEaXJlY3Rpb25WSElUeXBlID0gJ3ZlcnRpY2FsJztcbiAgaW5saW5lSW5kZW50ID0gMjQ7XG4gIG1lbnVPcGVuJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1hbnlcbiAgb25NZW51SXRlbUNsaWNrKG1lbnU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMubWVudUl0ZW1DbGljayQubmV4dChtZW51KTtcbiAgfVxuXG4gIHNldE1vZGUobW9kZTogTnpEaXJlY3Rpb25WSElUeXBlKTogdm9pZCB7XG4gICAgdGhpcy5tb2RlID0gbW9kZTtcbiAgICB0aGlzLm1vZGUkLm5leHQobW9kZSk7XG4gIH1cblxuICBzZXRUaGVtZSh0aGVtZTogJ2xpZ2h0JyB8ICdkYXJrJyk6IHZvaWQge1xuICAgIHRoaXMudGhlbWUgPSB0aGVtZTtcbiAgICB0aGlzLnRoZW1lJC5uZXh0KHRoZW1lKTtcbiAgfVxuXG4gIHNldElubGluZUluZGVudChpbmRlbnQ6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuaW5saW5lSW5kZW50ID0gaW5kZW50O1xuICAgIHRoaXMuaW5saW5lSW5kZW50JC5uZXh0KGluZGVudCk7XG4gIH1cbn1cbiJdfQ==