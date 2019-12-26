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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudS1iYXNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJkcm9wZG93bi9uei1tZW51LWJhc2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBSWhEO0lBQUE7UUFHRSxtQkFBYyxHQUFHLElBQUksT0FBTyxFQUFPLENBQUMsQ0FBQyw2QkFBNkI7O1FBQ2xFLFdBQU0sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3ZCLFVBQUssR0FBRyxJQUFJLGVBQWUsQ0FBcUIsVUFBVSxDQUFDLENBQUM7UUFDNUQsa0JBQWEsR0FBRyxJQUFJLGVBQWUsQ0FBUyxFQUFFLENBQUMsQ0FBQztRQUNoRCxVQUFLLEdBQXFCLE9BQU8sQ0FBQztRQUNsQyxTQUFJLEdBQXVCLFVBQVUsQ0FBQztRQUN0QyxpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixjQUFTLEdBQUcsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7SUFxQmxELENBQUM7SUFuQkMsa0NBQWtDOzs7Ozs7SUFDbEMsMkNBQWU7Ozs7OztJQUFmLFVBQWdCLElBQVM7UUFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFFRCxtQ0FBTzs7OztJQUFQLFVBQVEsSUFBd0I7UUFDOUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxvQ0FBUTs7OztJQUFSLFVBQVMsS0FBdUI7UUFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCwyQ0FBZTs7OztJQUFmLFVBQWdCLE1BQWM7UUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Z0JBOUJGLFVBQVU7O0lBK0JYLHdCQUFDO0NBQUEsQUEvQkQsSUErQkM7U0E5QlksaUJBQWlCOzs7SUFDNUIseUNBQXNCOztJQUN0QiwyQ0FBb0M7O0lBQ3BDLG1DQUF1Qjs7SUFDdkIsa0NBQTREOztJQUM1RCwwQ0FBZ0Q7O0lBQ2hELGtDQUFrQzs7SUFDbEMsaUNBQXNDOztJQUN0Qyx5Q0FBa0I7O0lBQ2xCLHNDQUFnRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IE56RGlyZWN0aW9uVkhJVHlwZSB9IGZyb20gJy4uL3R5cGVzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE56TWVudUJhc2VTZXJ2aWNlIHtcclxuICBpc0luRHJvcERvd246IGJvb2xlYW47XHJcbiAgbWVudUl0ZW1DbGljayQgPSBuZXcgU3ViamVjdDxhbnk+KCk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmUgbm8tYW55XHJcbiAgdGhlbWUkID0gbmV3IFN1YmplY3QoKTtcclxuICBtb2RlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TnpEaXJlY3Rpb25WSElUeXBlPigndmVydGljYWwnKTtcclxuICBpbmxpbmVJbmRlbnQkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxudW1iZXI+KDI0KTtcclxuICB0aGVtZTogJ2xpZ2h0JyB8ICdkYXJrJyA9ICdsaWdodCc7XHJcbiAgbW9kZTogTnpEaXJlY3Rpb25WSElUeXBlID0gJ3ZlcnRpY2FsJztcclxuICBpbmxpbmVJbmRlbnQgPSAyNDtcclxuICBtZW51T3BlbiQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWFueVxyXG4gIG9uTWVudUl0ZW1DbGljayhtZW51OiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMubWVudUl0ZW1DbGljayQubmV4dChtZW51KTtcclxuICB9XHJcblxyXG4gIHNldE1vZGUobW9kZTogTnpEaXJlY3Rpb25WSElUeXBlKTogdm9pZCB7XHJcbiAgICB0aGlzLm1vZGUgPSBtb2RlO1xyXG4gICAgdGhpcy5tb2RlJC5uZXh0KG1vZGUpO1xyXG4gIH1cclxuXHJcbiAgc2V0VGhlbWUodGhlbWU6ICdsaWdodCcgfCAnZGFyaycpOiB2b2lkIHtcclxuICAgIHRoaXMudGhlbWUgPSB0aGVtZTtcclxuICAgIHRoaXMudGhlbWUkLm5leHQodGhlbWUpO1xyXG4gIH1cclxuXHJcbiAgc2V0SW5saW5lSW5kZW50KGluZGVudDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLmlubGluZUluZGVudCA9IGluZGVudDtcclxuICAgIHRoaXMuaW5saW5lSW5kZW50JC5uZXh0KGluZGVudCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==