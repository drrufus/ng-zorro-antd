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
import * as ɵngcc0 from '@angular/core';
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
NzMenuBaseService.ɵfac = function NzMenuBaseService_Factory(t) { return new (t || NzMenuBaseService)(); };
NzMenuBaseService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: NzMenuBaseService, factory: function (t) { return NzMenuBaseService.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzMenuBaseService, [{
        type: Injectable
    }], function () { return []; }, null); })();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudS1iYXNlLnNlcnZpY2UuanMiLCJzb3VyY2VzIjpbIm5nOi9uZy16b3Jyby1hbnRkL2NvcmUvZHJvcGRvd24vbnotbWVudS1iYXNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUloRDtJQUFBO1FBR0UsbUJBQWMsR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDLENBQUMsNkJBQTZCOztRQUNsRSxXQUFNLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUN2QixVQUFLLEdBQUcsSUFBSSxlQUFlLENBQXFCLFVBQVUsQ0FBQyxDQUFDO1FBQzVELGtCQUFhLEdBQUcsSUFBSSxlQUFlLENBQVMsRUFBRSxDQUFDLENBQUM7UUFDaEQsVUFBSyxHQUFxQixPQUFPLENBQUM7UUFDbEMsU0FBSSxHQUF1QixVQUFVLENBQUM7UUFDdEMsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFDbEIsY0FBUyxHQUFHLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO0lBcUJsRCxDQUFDO0lBbkJDLGtDQUFrQzs7Ozs7O0lBQ2xDLDJDQUFlOzs7Ozs7SUFBZixVQUFnQixJQUFTO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBRUQsbUNBQU87Ozs7SUFBUCxVQUFRLElBQXdCO1FBQzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsb0NBQVE7Ozs7SUFBUixVQUFTLEtBQXVCO1FBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsMkNBQWU7Ozs7SUFBZixVQUFnQixNQUFjO1FBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO1FBQzNCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUMsQ0FDSDtxREEvQkMsVUFBVTs7OztnREFDTDtJQThCTix3QkFBQztDQUFBLEFBL0JELElBK0JDO1NBOUJZLGlCQUFpQjs7O0lBQzVCLHlDQUFzQjs7SUFDdEIsMkNBQW9DOztJQUNwQyxtQ0FBdUI7O0lBQ3ZCLGtDQUE0RDs7SUFDNUQsMENBQWdEOztJQUNoRCxrQ0FBa0M7O0lBQ2xDLGlDQUFzQzs7SUFDdEMseUNBQWtCOztJQUNsQixzQ0FBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBOekRpcmVjdGlvblZISVR5cGUgfSBmcm9tICcuLi90eXBlcyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOek1lbnVCYXNlU2VydmljZSB7XHJcbiAgaXNJbkRyb3BEb3duOiBib29sZWFuO1xyXG4gIG1lbnVJdGVtQ2xpY2skID0gbmV3IFN1YmplY3Q8YW55PigpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lIG5vLWFueVxyXG4gIHRoZW1lJCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgbW9kZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PE56RGlyZWN0aW9uVkhJVHlwZT4oJ3ZlcnRpY2FsJyk7XHJcbiAgaW5saW5lSW5kZW50JCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPigyNCk7XHJcbiAgdGhlbWU6ICdsaWdodCcgfCAnZGFyaycgPSAnbGlnaHQnO1xyXG4gIG1vZGU6IE56RGlyZWN0aW9uVkhJVHlwZSA9ICd2ZXJ0aWNhbCc7XHJcbiAgaW5saW5lSW5kZW50ID0gMjQ7XHJcbiAgbWVudU9wZW4kID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1hbnlcclxuICBvbk1lbnVJdGVtQ2xpY2sobWVudTogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm1lbnVJdGVtQ2xpY2skLm5leHQobWVudSk7XHJcbiAgfVxyXG5cclxuICBzZXRNb2RlKG1vZGU6IE56RGlyZWN0aW9uVkhJVHlwZSk6IHZvaWQge1xyXG4gICAgdGhpcy5tb2RlID0gbW9kZTtcclxuICAgIHRoaXMubW9kZSQubmV4dChtb2RlKTtcclxuICB9XHJcblxyXG4gIHNldFRoZW1lKHRoZW1lOiAnbGlnaHQnIHwgJ2RhcmsnKTogdm9pZCB7XHJcbiAgICB0aGlzLnRoZW1lID0gdGhlbWU7XHJcbiAgICB0aGlzLnRoZW1lJC5uZXh0KHRoZW1lKTtcclxuICB9XHJcblxyXG4gIHNldElubGluZUluZGVudChpbmRlbnQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5pbmxpbmVJbmRlbnQgPSBpbmRlbnQ7XHJcbiAgICB0aGlzLmlubGluZUluZGVudCQubmV4dChpbmRlbnQpO1xyXG4gIH1cclxufVxyXG4iXX0=