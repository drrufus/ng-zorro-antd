import { __extends } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CdkPortalOutlet, TemplatePortal } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, Component, ComponentFactoryResolver, Directive, Input, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
var _c0 = [1, "ant-comment-content-detail"];
function NzCommentActionComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
var _c1 = ["*"];
var NzCommentAvatarDirective = /** @class */ (function () {
    function NzCommentAvatarDirective() {
    }
    /** @nocollapse */ NzCommentAvatarDirective.ɵfac = function NzCommentAvatarDirective_Factory(t) { return new (t || NzCommentAvatarDirective)(); };
    /** @nocollapse */ NzCommentAvatarDirective.ɵdir = i0.ɵɵdefineDirective({ type: NzCommentAvatarDirective, selectors: [["nz-avatar", "nz-comment-avatar", ""]], exportAs: ["nzCommentAvatar"] });
    return NzCommentAvatarDirective;
}());
export { NzCommentAvatarDirective };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzCommentAvatarDirective, [{
        type: Directive,
        args: [{
                selector: 'nz-avatar[nz-comment-avatar]',
                exportAs: 'nzCommentAvatar'
            }]
    }], null, null); })();
var NzCommentContentDirective = /** @class */ (function () {
    function NzCommentContentDirective() {
    }
    /** @nocollapse */ NzCommentContentDirective.ɵfac = function NzCommentContentDirective_Factory(t) { return new (t || NzCommentContentDirective)(); };
    /** @nocollapse */ NzCommentContentDirective.ɵdir = i0.ɵɵdefineDirective({ type: NzCommentContentDirective, selectors: [["nz-comment-content"], ["", "nz-comment-content", ""]], hostBindings: function NzCommentContentDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            i0.ɵɵelementHostAttrs(_c0);
        } }, exportAs: ["nzCommentContent"] });
    return NzCommentContentDirective;
}());
export { NzCommentContentDirective };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzCommentContentDirective, [{
        type: Directive,
        args: [{
                selector: 'nz-comment-content, [nz-comment-content]',
                exportAs: 'nzCommentContent',
                host: { class: 'ant-comment-content-detail' }
            }]
    }], null, null); })();
var NzCommentActionHostDirective = /** @class */ (function (_super) {
    __extends(NzCommentActionHostDirective, _super);
    function NzCommentActionHostDirective(componentFactoryResolver, viewContainerRef) {
        return _super.call(this, componentFactoryResolver, viewContainerRef) || this;
    }
    NzCommentActionHostDirective.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    NzCommentActionHostDirective.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
    };
    NzCommentActionHostDirective.prototype.ngAfterViewInit = function () {
        this.attach(this.nzCommentActionHost);
    };
    /** @nocollapse */ NzCommentActionHostDirective.ɵfac = function NzCommentActionHostDirective_Factory(t) { return new (t || NzCommentActionHostDirective)(i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i0.ViewContainerRef)); };
    /** @nocollapse */ NzCommentActionHostDirective.ɵdir = i0.ɵɵdefineDirective({ type: NzCommentActionHostDirective, selectors: [["", "nzCommentActionHost", ""]], inputs: { nzCommentActionHost: "nzCommentActionHost" }, exportAs: ["nzCommentActionHost"], features: [i0.ɵɵInheritDefinitionFeature] });
    return NzCommentActionHostDirective;
}(CdkPortalOutlet));
export { NzCommentActionHostDirective };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzCommentActionHostDirective, [{
        type: Directive,
        args: [{
                selector: '[nzCommentActionHost]',
                exportAs: 'nzCommentActionHost'
            }]
    }], function () { return [{ type: i0.ComponentFactoryResolver }, { type: i0.ViewContainerRef }]; }, { nzCommentActionHost: [{
            type: Input
        }] }); })();
var NzCommentActionComponent = /** @class */ (function () {
    function NzCommentActionComponent(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
        this.contentPortal = null;
    }
    Object.defineProperty(NzCommentActionComponent.prototype, "content", {
        get: function () {
            return this.contentPortal;
        },
        enumerable: true,
        configurable: true
    });
    NzCommentActionComponent.prototype.ngOnInit = function () {
        this.contentPortal = new TemplatePortal(this.implicitContent, this.viewContainerRef);
    };
    /** @nocollapse */ NzCommentActionComponent.ɵfac = function NzCommentActionComponent_Factory(t) { return new (t || NzCommentActionComponent)(i0.ɵɵdirectiveInject(i0.ViewContainerRef)); };
    /** @nocollapse */ NzCommentActionComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzCommentActionComponent, selectors: [["nz-comment-action"]], viewQuery: function NzCommentActionComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵstaticViewQuery(TemplateRef, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.implicitContent = _t.first);
        } }, exportAs: ["nzCommentAction"], ngContentSelectors: _c1, decls: 1, vars: 0, template: function NzCommentActionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, NzCommentActionComponent_ng_template_0_Template, 1, 0, "ng-template");
        } }, encapsulation: 2, changeDetection: 0 });
    return NzCommentActionComponent;
}());
export { NzCommentActionComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzCommentActionComponent, [{
        type: Component,
        args: [{
                selector: 'nz-comment-action',
                exportAs: 'nzCommentAction',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-template><ng-content></ng-content></ng-template>'
            }]
    }], function () { return [{ type: i0.ViewContainerRef }]; }, { implicitContent: [{
            type: ViewChild,
            args: [TemplateRef, { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29tbWVudC1jZWxscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29tbWVudC8iLCJzb3VyY2VzIjpbIm56LWNvbW1lbnQtY2VsbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEUsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1Qsd0JBQXdCLEVBQ3hCLFNBQVMsRUFDVCxLQUFLLEVBR0wsV0FBVyxFQUNYLFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDOzs7O0lBNENHLGtCQUFZOzs7QUExQ3RDO0lBQUE7S0FJd0M7b0dBQTNCLHdCQUF3QjtpRUFBeEIsd0JBQXdCO21DQTVCckM7Q0E0QndDLEFBSnhDLElBSXdDO1NBQTNCLHdCQUF3QjtrREFBeEIsd0JBQXdCO2NBSnBDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsOEJBQThCO2dCQUN4QyxRQUFRLEVBQUUsaUJBQWlCO2FBQzVCOztBQUdEO0lBQUE7S0FLeUM7c0dBQTVCLHlCQUF5QjtrRUFBekIseUJBQXlCOzs7b0NBbkN0QztDQW1DeUMsQUFMekMsSUFLeUM7U0FBNUIseUJBQXlCO2tEQUF6Qix5QkFBeUI7Y0FMckMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwwQ0FBMEM7Z0JBQ3BELFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSw0QkFBNEIsRUFBRTthQUM5Qzs7QUFHRDtJQUlrRCxnREFBZTtJQUcvRCxzQ0FBWSx3QkFBa0QsRUFBRSxnQkFBa0M7ZUFDaEcsa0JBQU0sd0JBQXdCLEVBQUUsZ0JBQWdCLENBQUM7SUFDbkQsQ0FBQztJQUVELCtDQUFRLEdBQVI7UUFDRSxpQkFBTSxRQUFRLFdBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsa0RBQVcsR0FBWDtRQUNFLGlCQUFNLFdBQVcsV0FBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxzREFBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUN4QyxDQUFDOzRHQWpCVSw0QkFBNEI7cUVBQTVCLDRCQUE0Qjt1Q0F6Q3pDO0NBMkRDLEFBdEJELENBSWtELGVBQWUsR0FrQmhFO1NBbEJZLDRCQUE0QjtrREFBNUIsNEJBQTRCO2NBSnhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxRQUFRLEVBQUUscUJBQXFCO2FBQ2hDOztrQkFFRSxLQUFLOztBQW1CUjtJQWVFLGtDQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQU45QyxrQkFBYSxHQUEwQixJQUFJLENBQUM7SUFNSyxDQUFDO0lBSjFELHNCQUFJLDZDQUFPO2FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7SUFJRCwyQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7b0dBWlUsd0JBQXdCO2lFQUF4Qix3QkFBd0I7aUNBQ3hCLFdBQVc7Ozs7OztZQUhYLHNGQUFhOzttQ0FsRTFCO0NBaUZDLEFBcEJELElBb0JDO1NBYlksd0JBQXdCO2tEQUF4Qix3QkFBd0I7Y0FQcEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFLHNEQUFzRDthQUNqRTs7a0JBRUUsU0FBUzttQkFBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBDZGtQb3J0YWxPdXRsZXQsIFRlbXBsYXRlUG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gIERpcmVjdGl2ZSxcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3Q29udGFpbmVyUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ256LWF2YXRhcltuei1jb21tZW50LWF2YXRhcl0nLFxyXG4gIGV4cG9ydEFzOiAnbnpDb21tZW50QXZhdGFyJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpDb21tZW50QXZhdGFyRGlyZWN0aXZlIHt9XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ256LWNvbW1lbnQtY29udGVudCwgW256LWNvbW1lbnQtY29udGVudF0nLFxyXG4gIGV4cG9ydEFzOiAnbnpDb21tZW50Q29udGVudCcsXHJcbiAgaG9zdDogeyBjbGFzczogJ2FudC1jb21tZW50LWNvbnRlbnQtZGV0YWlsJyB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekNvbW1lbnRDb250ZW50RGlyZWN0aXZlIHt9XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tuekNvbW1lbnRBY3Rpb25Ib3N0XScsXHJcbiAgZXhwb3J0QXM6ICduekNvbW1lbnRBY3Rpb25Ib3N0J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpDb21tZW50QWN0aW9uSG9zdERpcmVjdGl2ZSBleHRlbmRzIENka1BvcnRhbE91dGxldCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcclxuICBASW5wdXQoKSBuekNvbW1lbnRBY3Rpb25Ib3N0OiBUZW1wbGF0ZVBvcnRhbCB8IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7XHJcbiAgICBzdXBlcihjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIHZpZXdDb250YWluZXJSZWYpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5hdHRhY2godGhpcy5uekNvbW1lbnRBY3Rpb25Ib3N0KTtcclxuICB9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotY29tbWVudC1hY3Rpb24nLFxyXG4gIGV4cG9ydEFzOiAnbnpDb21tZW50QWN0aW9uJyxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L25nLXRlbXBsYXRlPidcclxufSlcclxuZXhwb3J0IGNsYXNzIE56Q29tbWVudEFjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZiwgeyBzdGF0aWM6IHRydWUgfSkgaW1wbGljaXRDb250ZW50OiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBwcml2YXRlIGNvbnRlbnRQb3J0YWw6IFRlbXBsYXRlUG9ydGFsIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIGdldCBjb250ZW50KCk6IFRlbXBsYXRlUG9ydGFsIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250ZW50UG9ydGFsO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY29udGVudFBvcnRhbCA9IG5ldyBUZW1wbGF0ZVBvcnRhbCh0aGlzLmltcGxpY2l0Q29udGVudCwgdGhpcy52aWV3Q29udGFpbmVyUmVmKTtcclxuICB9XHJcbn1cclxuIl19