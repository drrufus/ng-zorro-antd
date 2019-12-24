import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ContentChild, ElementRef, EventEmitter, Input, Output, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { InputBoolean } from 'ng-zorro-antd/core';
import { NzTabLinkDirective } from './nz-tab-link.directive';
import { NzTabDirective } from './nz-tab.directive';
import * as i0 from "@angular/core";
var _c0 = ["bodyTpl"];
var _c1 = ["titleTpl"];
function NzTabComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
function NzTabComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 1);
} }
var _c2 = [[["", "nz-tab-link", ""]], "*"];
var _c3 = ["[nz-tab-link]", "*"];
var NzTabComponent = /** @class */ (function () {
    function NzTabComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.position = null;
        this.origin = null;
        this.isActive = false;
        this.stateChanges = new Subject();
        this.nzForceRender = false;
        this.nzDisabled = false;
        this.nzClick = new EventEmitter();
        this.nzSelect = new EventEmitter();
        this.nzDeselect = new EventEmitter();
        this.renderer.addClass(elementRef.nativeElement, 'ant-tabs-tabpane');
    }
    NzTabComponent.prototype.ngOnChanges = function (changes) {
        if (changes.nzTitle || changes.nzForceRender || changes.nzDisabled) {
            this.stateChanges.next();
        }
    };
    NzTabComponent.prototype.ngOnDestroy = function () {
        this.stateChanges.complete();
    };
    /** @nocollapse */ NzTabComponent.ɵfac = function NzTabComponent_Factory(t) { return new (t || NzTabComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    /** @nocollapse */ NzTabComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzTabComponent, selectors: [["nz-tab"]], contentQueries: function NzTabComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, NzTabDirective, true, TemplateRef);
            i0.ɵɵcontentQuery(dirIndex, NzTabLinkDirective, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.template = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.linkDirective = _t.first);
        } }, viewQuery: function NzTabComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵstaticViewQuery(_c0, true);
            i0.ɵɵstaticViewQuery(_c1, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.content = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.title = _t.first);
        } }, inputs: { nzTitle: "nzTitle", nzRouterIdentifier: "nzRouterIdentifier", nzForceRender: "nzForceRender", nzDisabled: "nzDisabled" }, outputs: { nzClick: "nzClick", nzSelect: "nzSelect", nzDeselect: "nzDeselect" }, exportAs: ["nzTab"], features: [i0.ɵɵNgOnChangesFeature()], ngContentSelectors: _c3, decls: 4, vars: 0, consts: [["titleTpl", ""], ["bodyTpl", ""]], template: function NzTabComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c2);
            i0.ɵɵtemplate(0, NzTabComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(2, NzTabComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        } }, encapsulation: 2, changeDetection: 0 });
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTabComponent.prototype, "nzForceRender", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTabComponent.prototype, "nzDisabled", void 0);
    return NzTabComponent;
}());
export { NzTabComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzTabComponent, [{
        type: Component,
        args: [{
                selector: 'nz-tab',
                exportAs: 'nzTab',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                templateUrl: './nz-tab.component.html'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { content: [{
            type: ViewChild,
            args: ['bodyTpl', { static: true }]
        }], title: [{
            type: ViewChild,
            args: ['titleTpl', { static: true }]
        }], template: [{
            type: ContentChild,
            args: [NzTabDirective, { static: false, read: TemplateRef }]
        }], linkDirective: [{
            type: ContentChild,
            args: [NzTabLinkDirective, { static: false }]
        }], nzTitle: [{
            type: Input
        }], nzRouterIdentifier: [{
            type: Input
        }], nzForceRender: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }], nzClick: [{
            type: Output
        }], nzSelect: [{
            type: Output
        }], nzDeselect: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdGFicy8iLCJzb3VyY2VzIjpbIm56LXRhYi5jb21wb25lbnQudHMiLCJuei10YWIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ04sU0FBUyxFQUVULFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0IsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7SUM1QmxELGtCQUFtQzs7O0lBR25DLHFCQUFZOzs7O0FEMkJkO0lBeUJFLHdCQUFtQixVQUFzQixFQUFVLFFBQW1CO1FBQW5ELGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBaEJ0RSxhQUFRLEdBQWtCLElBQUksQ0FBQztRQUMvQixXQUFNLEdBQWtCLElBQUksQ0FBQztRQUM3QixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ1IsaUJBQVksR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBT25CLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDekIsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDbkMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDcEMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFHdkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRCxvQ0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxhQUFhLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtZQUNsRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQy9CLENBQUM7Z0ZBN0JVLGNBQWM7dURBQWQsY0FBYzt3Q0FPWCxjQUFjLFFBQXlCLFdBQVc7d0NBQ2xELGtCQUFrQjs7Ozs7Ozs7Ozs7Ozs7WUMvQ2xDLGdIQUNFO1lBRUYsZ0hBQ0U7O0lEOEN5QjtRQUFmLFlBQVksRUFBRTs7eURBQXVCO0lBQ3RCO1FBQWYsWUFBWSxFQUFFOztzREFBb0I7eUJBbkQ5QztDQXFFQyxBQXRDRCxJQXNDQztTQTlCWSxjQUFjO2tEQUFkLGNBQWM7Y0FSMUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxRQUFRO2dCQUNsQixRQUFRLEVBQUUsT0FBTztnQkFDakIsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxXQUFXLEVBQUUseUJBQXlCO2FBQ3ZDOztrQkFNRSxTQUFTO21CQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O2tCQUNyQyxTQUFTO21CQUFDLFVBQVUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O2tCQUN0QyxZQUFZO21CQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTs7a0JBQ2pFLFlBQVk7bUJBQUMsa0JBQWtCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOztrQkFDbEQsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpUYWJMaW5rRGlyZWN0aXZlIH0gZnJvbSAnLi9uei10YWItbGluay5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBOelRhYkRpcmVjdGl2ZSB9IGZyb20gJy4vbnotdGFiLmRpcmVjdGl2ZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LXRhYicsXHJcbiAgZXhwb3J0QXM6ICduelRhYicsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotdGFiLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpUYWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgcG9zaXRpb246IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG4gIG9yaWdpbjogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgaXNBY3RpdmUgPSBmYWxzZTtcclxuICByZWFkb25seSBzdGF0ZUNoYW5nZXMgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIEBWaWV3Q2hpbGQoJ2JvZHlUcGwnLCB7IHN0YXRpYzogdHJ1ZSB9KSBjb250ZW50OiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBAVmlld0NoaWxkKCd0aXRsZVRwbCcsIHsgc3RhdGljOiB0cnVlIH0pIHRpdGxlOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBAQ29udGVudENoaWxkKE56VGFiRGlyZWN0aXZlLCB7IHN0YXRpYzogZmFsc2UsIHJlYWQ6IFRlbXBsYXRlUmVmIH0pIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBAQ29udGVudENoaWxkKE56VGFiTGlua0RpcmVjdGl2ZSwgeyBzdGF0aWM6IGZhbHNlIH0pIGxpbmtEaXJlY3RpdmU6IE56VGFiTGlua0RpcmVjdGl2ZTtcclxuICBASW5wdXQoKSBuelRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuelJvdXRlcklkZW50aWZpZXI6IHN0cmluZztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpGb3JjZVJlbmRlciA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpc2FibGVkID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56U2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekRlc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC10YWJzLXRhYnBhbmUnKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLm56VGl0bGUgfHwgY2hhbmdlcy5uekZvcmNlUmVuZGVyIHx8IGNoYW5nZXMubnpEaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG59XHJcbiIsIjxuZy10ZW1wbGF0ZSAjdGl0bGVUcGw+XHJcbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW256LXRhYi1saW5rXVwiPjwvbmctY29udGVudD5cclxuPC9uZy10ZW1wbGF0ZT5cclxuPG5nLXRlbXBsYXRlICNib2R5VHBsPlxyXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC9uZy10ZW1wbGF0ZT5cclxuIl19