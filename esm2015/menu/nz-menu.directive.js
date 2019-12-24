import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ContentChildren, Directive, ElementRef, EventEmitter, Input, Optional, Output, QueryList, SkipSelf } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InputBoolean, NzDropdownHigherOrderServiceToken, NzMenuBaseService, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { NzMenuItemDirective } from './nz-menu-item.directive';
import { NzMenuServiceFactory } from './nz-menu.resolver';
import { NzMenuService } from './nz-menu.service';
import { NzSubMenuComponent } from './nz-submenu.component';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
export class NzMenuDirective {
    constructor(elementRef, nzMenuService, nzUpdateHostClassService) {
        this.elementRef = elementRef;
        this.nzMenuService = nzMenuService;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.destroy$ = new Subject();
        this.listOfOpenedNzSubMenuComponent = [];
        this.nzInlineIndent = 24;
        this.nzTheme = 'light';
        this.nzMode = 'vertical';
        this.nzInDropDown = false;
        this.nzInlineCollapsed = false;
        this.nzSelectable = !this.nzMenuService.isInDropDown;
        this.nzClick = new EventEmitter();
    }
    updateInlineCollapse() {
        if (this.listOfNzMenuItemDirective) {
            if (this.nzInlineCollapsed) {
                this.listOfOpenedNzSubMenuComponent = this.listOfNzSubMenuComponent.filter(submenu => submenu.nzOpen);
                this.listOfNzSubMenuComponent.forEach(submenu => submenu.setOpenState(false));
                this.nzMode = 'vertical';
            }
            else {
                this.listOfOpenedNzSubMenuComponent.forEach(submenu => submenu.setOpenState(true));
                this.listOfOpenedNzSubMenuComponent = [];
                this.nzMode = this.cacheMode;
            }
            this.nzMenuService.setMode(this.nzMode);
        }
    }
    setClassMap() {
        const prefixName = this.nzMenuService.isInDropDown ? 'ant-dropdown-menu' : 'ant-menu';
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, {
            [`${prefixName}`]: true,
            [`${prefixName}-root`]: true,
            [`${prefixName}-${this.nzTheme}`]: true,
            [`${prefixName}-${this.nzMode}`]: true,
            [`${prefixName}-inline-collapsed`]: this.nzInlineCollapsed
        });
    }
    ngOnInit() {
        this.setClassMap();
        this.nzMenuService.menuItemClick$.pipe(takeUntil(this.destroy$)).subscribe(menu => {
            this.nzClick.emit(menu);
            if (this.nzSelectable) {
                this.listOfNzMenuItemDirective.forEach(item => item.setSelectedState(item === menu));
            }
        });
    }
    ngAfterContentInit() {
        this.cacheMode = this.nzMode;
        this.updateInlineCollapse();
    }
    ngOnChanges(changes) {
        if (changes.nzInlineCollapsed) {
            this.updateInlineCollapse();
        }
        if (changes.nzInlineIndent) {
            this.nzMenuService.setInlineIndent(this.nzInlineIndent);
        }
        if (changes.nzInDropDown) {
            this.nzMenuService.isInDropDown = this.nzInDropDown;
        }
        if (changes.nzTheme) {
            this.nzMenuService.setTheme(this.nzTheme);
        }
        if (changes.nzMode) {
            this.nzMenuService.setMode(this.nzMode);
            if (!changes.nzMode.isFirstChange() && this.listOfNzSubMenuComponent) {
                this.listOfNzSubMenuComponent.forEach(submenu => submenu.setOpenState(false));
            }
        }
        if (changes.nzTheme || changes.nzMode || changes.nzInlineCollapsed) {
            this.setClassMap();
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
/** @nocollapse */ NzMenuDirective.ɵfac = function NzMenuDirective_Factory(t) { return new (t || NzMenuDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.NzMenuBaseService), i0.ɵɵdirectiveInject(i1.NzUpdateHostClassService)); };
/** @nocollapse */ NzMenuDirective.ɵdir = i0.ɵɵdefineDirective({ type: NzMenuDirective, selectors: [["", "nz-menu", ""]], contentQueries: function NzMenuDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, NzMenuItemDirective, true);
        i0.ɵɵcontentQuery(dirIndex, NzSubMenuComponent, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listOfNzMenuItemDirective = _t);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listOfNzSubMenuComponent = _t);
    } }, inputs: { nzInlineIndent: "nzInlineIndent", nzTheme: "nzTheme", nzMode: "nzMode", nzInDropDown: "nzInDropDown", nzInlineCollapsed: "nzInlineCollapsed", nzSelectable: "nzSelectable" }, outputs: { nzClick: "nzClick" }, exportAs: ["nzMenu"], features: [i0.ɵɵProvidersFeature([
            NzUpdateHostClassService,
            NzMenuService,
            {
                provide: NzMenuBaseService,
                useFactory: NzMenuServiceFactory,
                deps: [[new SkipSelf(), new Optional(), NzDropdownHigherOrderServiceToken], NzMenuService]
            }
        ]), i0.ɵɵNgOnChangesFeature()] });
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzMenuDirective.prototype, "nzInDropDown", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzMenuDirective.prototype, "nzInlineCollapsed", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzMenuDirective.prototype, "nzSelectable", void 0);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzMenuDirective, [{
        type: Directive,
        args: [{
                selector: '[nz-menu]',
                exportAs: 'nzMenu',
                providers: [
                    NzUpdateHostClassService,
                    NzMenuService,
                    {
                        provide: NzMenuBaseService,
                        useFactory: NzMenuServiceFactory,
                        deps: [[new SkipSelf(), new Optional(), NzDropdownHigherOrderServiceToken], NzMenuService]
                    }
                ]
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.NzMenuBaseService }, { type: i1.NzUpdateHostClassService }]; }, { listOfNzMenuItemDirective: [{
            type: ContentChildren,
            args: [NzMenuItemDirective, { descendants: true }]
        }], listOfNzSubMenuComponent: [{
            type: ContentChildren,
            args: [NzSubMenuComponent, { descendants: true }]
        }], nzInlineIndent: [{
            type: Input
        }], nzTheme: [{
            type: Input
        }], nzMode: [{
            type: Input
        }], nzInDropDown: [{
            type: Input
        }], nzInlineCollapsed: [{
            type: Input
        }], nzSelectable: [{
            type: Input
        }], nzClick: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL21lbnUvIiwic291cmNlcyI6WyJuei1tZW51LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUVMLGVBQWUsRUFDZixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBRVQsUUFBUSxFQUNULE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFDTCxZQUFZLEVBRVosaUNBQWlDLEVBQ2pDLGlCQUFpQixFQUNqQix3QkFBd0IsRUFDekIsTUFBTSxvQkFBb0IsQ0FBQztBQUU1QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7OztBQWU1RCxNQUFNLE9BQU8sZUFBZTtJQXdDMUIsWUFDUyxVQUFzQixFQUNyQixhQUFnQyxFQUNoQyx3QkFBa0Q7UUFGbkQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNyQixrQkFBYSxHQUFiLGFBQWEsQ0FBbUI7UUFDaEMsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQTFDcEQsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFFekIsbUNBQThCLEdBQXlCLEVBQUUsQ0FBQztRQUd6RCxtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNwQixZQUFPLEdBQXFCLE9BQU8sQ0FBQztRQUNwQyxX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QkFDMUIsVUFBVSxFQUFFLG9CQUFvQjtnQkFDaEMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsaUNBQWlDLENBQUMsRUFBRSxhQUFhLENBQUM7YUFDM0Y7U0FDRjtBQVd3QjtJQUFmLFlBQVksRUFBRTs7cURBQXNCO0FBQ3JCO0lBQWYsWUFBWSxFQUFFOzswREFBMkI7QUFDMUI7SUFBZixZQUFZLEVBQUU7O3FEQUFpRDtrREFYOUQsZUFBZTtjQWIzQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixTQUFTLEVBQUU7b0JBQ1Qsd0JBQXdCO29CQUN4QixhQUFhO29CQUNiO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFVBQVUsRUFBRSxvQkFBb0I7d0JBQ2hDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLGlDQUFpQyxDQUFDLEVBQUUsYUFBYSxDQUFDO3FCQUMzRjtpQkFDRjthQUNGOztrQkFLRSxlQUFlO21CQUFDLG1CQUFtQixFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTs7a0JBQzFELGVBQWU7bUJBQUMsa0JBQWtCLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFOztrQkFDekQsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFNraXBTZWxmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgSW5wdXRCb29sZWFuLFxyXG4gIE56RGlyZWN0aW9uVkhJVHlwZSxcclxuICBOekRyb3Bkb3duSGlnaGVyT3JkZXJTZXJ2aWNlVG9rZW4sXHJcbiAgTnpNZW51QmFzZVNlcnZpY2UsXHJcbiAgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXHJcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56TWVudUl0ZW1EaXJlY3RpdmUgfSBmcm9tICcuL256LW1lbnUtaXRlbS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBOek1lbnVTZXJ2aWNlRmFjdG9yeSB9IGZyb20gJy4vbnotbWVudS5yZXNvbHZlcic7XHJcbmltcG9ydCB7IE56TWVudVNlcnZpY2UgfSBmcm9tICcuL256LW1lbnUuc2VydmljZSc7XHJcbmltcG9ydCB7IE56U3ViTWVudUNvbXBvbmVudCB9IGZyb20gJy4vbnotc3VibWVudS5jb21wb25lbnQnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbnotbWVudV0nLFxyXG4gIGV4cG9ydEFzOiAnbnpNZW51JyxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSxcclxuICAgIE56TWVudVNlcnZpY2UsXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE56TWVudUJhc2VTZXJ2aWNlLFxyXG4gICAgICB1c2VGYWN0b3J5OiBOek1lbnVTZXJ2aWNlRmFjdG9yeSxcclxuICAgICAgZGVwczogW1tuZXcgU2tpcFNlbGYoKSwgbmV3IE9wdGlvbmFsKCksIE56RHJvcGRvd25IaWdoZXJPcmRlclNlcnZpY2VUb2tlbl0sIE56TWVudVNlcnZpY2VdXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpNZW51RGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJpdmF0ZSBjYWNoZU1vZGU6IE56RGlyZWN0aW9uVkhJVHlwZTtcclxuICBwcml2YXRlIGxpc3RPZk9wZW5lZE56U3ViTWVudUNvbXBvbmVudDogTnpTdWJNZW51Q29tcG9uZW50W10gPSBbXTtcclxuICBAQ29udGVudENoaWxkcmVuKE56TWVudUl0ZW1EaXJlY3RpdmUsIHsgZGVzY2VuZGFudHM6IHRydWUgfSkgbGlzdE9mTnpNZW51SXRlbURpcmVjdGl2ZTogUXVlcnlMaXN0PE56TWVudUl0ZW1EaXJlY3RpdmU+O1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oTnpTdWJNZW51Q29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIGxpc3RPZk56U3ViTWVudUNvbXBvbmVudDogUXVlcnlMaXN0PE56U3ViTWVudUNvbXBvbmVudD47XHJcbiAgQElucHV0KCkgbnpJbmxpbmVJbmRlbnQgPSAyNDtcclxuICBASW5wdXQoKSBuelRoZW1lOiAnbGlnaHQnIHwgJ2RhcmsnID0gJ2xpZ2h0JztcclxuICBASW5wdXQoKSBuek1vZGU6IE56RGlyZWN0aW9uVkhJVHlwZSA9ICd2ZXJ0aWNhbCc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56SW5Ecm9wRG93biA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBueklubGluZUNvbGxhcHNlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNlbGVjdGFibGUgPSAhdGhpcy5uek1lbnVTZXJ2aWNlLmlzSW5Ecm9wRG93bjtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TnpNZW51SXRlbURpcmVjdGl2ZT4oKTtcclxuXHJcbiAgdXBkYXRlSW5saW5lQ29sbGFwc2UoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5saXN0T2ZOek1lbnVJdGVtRGlyZWN0aXZlKSB7XHJcbiAgICAgIGlmICh0aGlzLm56SW5saW5lQ29sbGFwc2VkKSB7XHJcbiAgICAgICAgdGhpcy5saXN0T2ZPcGVuZWROelN1Yk1lbnVDb21wb25lbnQgPSB0aGlzLmxpc3RPZk56U3ViTWVudUNvbXBvbmVudC5maWx0ZXIoc3VibWVudSA9PiBzdWJtZW51Lm56T3Blbik7XHJcbiAgICAgICAgdGhpcy5saXN0T2ZOelN1Yk1lbnVDb21wb25lbnQuZm9yRWFjaChzdWJtZW51ID0+IHN1Ym1lbnUuc2V0T3BlblN0YXRlKGZhbHNlKSk7XHJcbiAgICAgICAgdGhpcy5uek1vZGUgPSAndmVydGljYWwnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMubGlzdE9mT3BlbmVkTnpTdWJNZW51Q29tcG9uZW50LmZvckVhY2goc3VibWVudSA9PiBzdWJtZW51LnNldE9wZW5TdGF0ZSh0cnVlKSk7XHJcbiAgICAgICAgdGhpcy5saXN0T2ZPcGVuZWROelN1Yk1lbnVDb21wb25lbnQgPSBbXTtcclxuICAgICAgICB0aGlzLm56TW9kZSA9IHRoaXMuY2FjaGVNb2RlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubnpNZW51U2VydmljZS5zZXRNb2RlKHRoaXMubnpNb2RlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgY29uc3QgcHJlZml4TmFtZSA9IHRoaXMubnpNZW51U2VydmljZS5pc0luRHJvcERvd24gPyAnYW50LWRyb3Bkb3duLW1lbnUnIDogJ2FudC1tZW51JztcclxuICAgIHRoaXMubnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwge1xyXG4gICAgICBbYCR7cHJlZml4TmFtZX1gXTogdHJ1ZSxcclxuICAgICAgW2Ake3ByZWZpeE5hbWV9LXJvb3RgXTogdHJ1ZSxcclxuICAgICAgW2Ake3ByZWZpeE5hbWV9LSR7dGhpcy5uelRoZW1lfWBdOiB0cnVlLFxyXG4gICAgICBbYCR7cHJlZml4TmFtZX0tJHt0aGlzLm56TW9kZX1gXTogdHJ1ZSxcclxuICAgICAgW2Ake3ByZWZpeE5hbWV9LWlubGluZS1jb2xsYXBzZWRgXTogdGhpcy5ueklubGluZUNvbGxhcHNlZFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBuek1lbnVTZXJ2aWNlOiBOek1lbnVCYXNlU2VydmljZSxcclxuICAgIHByaXZhdGUgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgdGhpcy5uek1lbnVTZXJ2aWNlLm1lbnVJdGVtQ2xpY2skLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUobWVudSA9PiB7XHJcbiAgICAgIHRoaXMubnpDbGljay5lbWl0KG1lbnUpO1xyXG4gICAgICBpZiAodGhpcy5uelNlbGVjdGFibGUpIHtcclxuICAgICAgICB0aGlzLmxpc3RPZk56TWVudUl0ZW1EaXJlY3RpdmUuZm9yRWFjaChpdGVtID0+IGl0ZW0uc2V0U2VsZWN0ZWRTdGF0ZShpdGVtID09PSBtZW51KSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jYWNoZU1vZGUgPSB0aGlzLm56TW9kZTtcclxuICAgIHRoaXMudXBkYXRlSW5saW5lQ29sbGFwc2UoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLm56SW5saW5lQ29sbGFwc2VkKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlSW5saW5lQ29sbGFwc2UoKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLm56SW5saW5lSW5kZW50KSB7XHJcbiAgICAgIHRoaXMubnpNZW51U2VydmljZS5zZXRJbmxpbmVJbmRlbnQodGhpcy5ueklubGluZUluZGVudCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5uekluRHJvcERvd24pIHtcclxuICAgICAgdGhpcy5uek1lbnVTZXJ2aWNlLmlzSW5Ecm9wRG93biA9IHRoaXMubnpJbkRyb3BEb3duO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMubnpUaGVtZSkge1xyXG4gICAgICB0aGlzLm56TWVudVNlcnZpY2Uuc2V0VGhlbWUodGhpcy5uelRoZW1lKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLm56TW9kZSkge1xyXG4gICAgICB0aGlzLm56TWVudVNlcnZpY2Uuc2V0TW9kZSh0aGlzLm56TW9kZSk7XHJcbiAgICAgIGlmICghY2hhbmdlcy5uek1vZGUuaXNGaXJzdENoYW5nZSgpICYmIHRoaXMubGlzdE9mTnpTdWJNZW51Q29tcG9uZW50KSB7XHJcbiAgICAgICAgdGhpcy5saXN0T2ZOelN1Yk1lbnVDb21wb25lbnQuZm9yRWFjaChzdWJtZW51ID0+IHN1Ym1lbnUuc2V0T3BlblN0YXRlKGZhbHNlKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLm56VGhlbWUgfHwgY2hhbmdlcy5uek1vZGUgfHwgY2hhbmdlcy5ueklubGluZUNvbGxhcHNlZCkge1xyXG4gICAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=