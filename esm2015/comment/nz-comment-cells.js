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
const _c0 = [1, "ant-comment-content-detail"];
function NzCommentActionComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
const _c1 = ["*"];
export class NzCommentAvatarDirective {
}
/** @nocollapse */ NzCommentAvatarDirective.ɵfac = function NzCommentAvatarDirective_Factory(t) { return new (t || NzCommentAvatarDirective)(); };
/** @nocollapse */ NzCommentAvatarDirective.ɵdir = i0.ɵɵdefineDirective({ type: NzCommentAvatarDirective, selectors: [["nz-avatar", "nz-comment-avatar", ""]], exportAs: ["nzCommentAvatar"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzCommentAvatarDirective, [{
        type: Directive,
        args: [{
                selector: 'nz-avatar[nz-comment-avatar]',
                exportAs: 'nzCommentAvatar'
            }]
    }], null, null); })();
export class NzCommentContentDirective {
}
/** @nocollapse */ NzCommentContentDirective.ɵfac = function NzCommentContentDirective_Factory(t) { return new (t || NzCommentContentDirective)(); };
/** @nocollapse */ NzCommentContentDirective.ɵdir = i0.ɵɵdefineDirective({ type: NzCommentContentDirective, selectors: [["nz-comment-content"], ["", "nz-comment-content", ""]], hostBindings: function NzCommentContentDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        i0.ɵɵelementHostAttrs(_c0);
    } }, exportAs: ["nzCommentContent"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzCommentContentDirective, [{
        type: Directive,
        args: [{
                selector: 'nz-comment-content, [nz-comment-content]',
                exportAs: 'nzCommentContent',
                host: { class: 'ant-comment-content-detail' }
            }]
    }], null, null); })();
export class NzCommentActionHostDirective extends CdkPortalOutlet {
    constructor(componentFactoryResolver, viewContainerRef) {
        super(componentFactoryResolver, viewContainerRef);
    }
    ngOnInit() {
        super.ngOnInit();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    ngAfterViewInit() {
        this.attach(this.nzCommentActionHost);
    }
}
/** @nocollapse */ NzCommentActionHostDirective.ɵfac = function NzCommentActionHostDirective_Factory(t) { return new (t || NzCommentActionHostDirective)(i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i0.ViewContainerRef)); };
/** @nocollapse */ NzCommentActionHostDirective.ɵdir = i0.ɵɵdefineDirective({ type: NzCommentActionHostDirective, selectors: [["", "nzCommentActionHost", ""]], inputs: { nzCommentActionHost: "nzCommentActionHost" }, exportAs: ["nzCommentActionHost"], features: [i0.ɵɵInheritDefinitionFeature] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzCommentActionHostDirective, [{
        type: Directive,
        args: [{
                selector: '[nzCommentActionHost]',
                exportAs: 'nzCommentActionHost'
            }]
    }], function () { return [{ type: i0.ComponentFactoryResolver }, { type: i0.ViewContainerRef }]; }, { nzCommentActionHost: [{
            type: Input
        }] }); })();
export class NzCommentActionComponent {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
        this.contentPortal = null;
    }
    get content() {
        return this.contentPortal;
    }
    ngOnInit() {
        this.contentPortal = new TemplatePortal(this.implicitContent, this.viewContainerRef);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29tbWVudC1jZWxscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29tbWVudC8iLCJzb3VyY2VzIjpbIm56LWNvbW1lbnQtY2VsbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCx3QkFBd0IsRUFDeEIsU0FBUyxFQUNULEtBQUssRUFHTCxXQUFXLEVBQ1gsU0FBUyxFQUNULGdCQUFnQixFQUNoQixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7Ozs7SUE0Q0csa0JBQVk7OztBQXRDdEMsTUFBTSxPQUFPLHdCQUF3Qjs7Z0dBQXhCLHdCQUF3Qjs2REFBeEIsd0JBQXdCO2tEQUF4Qix3QkFBd0I7Y0FKcEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLFFBQVEsRUFBRSxpQkFBaUI7YUFDNUI7O0FBUUQsTUFBTSxPQUFPLHlCQUF5Qjs7a0dBQXpCLHlCQUF5Qjs4REFBekIseUJBQXlCOzs7a0RBQXpCLHlCQUF5QjtjQUxyQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBDQUEwQztnQkFDcEQsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLDRCQUE0QixFQUFFO2FBQzlDOztBQU9ELE1BQU0sT0FBTyw0QkFBNkIsU0FBUSxlQUFlO0lBRy9ELFlBQVksd0JBQWtELEVBQUUsZ0JBQWtDO1FBQ2hHLEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCxRQUFRO1FBQ04sS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxXQUFXO1FBQ1QsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUN4QyxDQUFDOzt3R0FqQlUsNEJBQTRCO2lFQUE1Qiw0QkFBNEI7a0RBQTVCLDRCQUE0QjtjQUp4QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsUUFBUSxFQUFFLHFCQUFxQjthQUNoQzs7a0JBRUUsS0FBSzs7QUEwQlIsTUFBTSxPQUFPLHdCQUF3QjtJQVFuQyxZQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQU45QyxrQkFBYSxHQUEwQixJQUFJLENBQUM7SUFNSyxDQUFDO0lBSjFELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0lBSUQsUUFBUTtRQUNOLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUN2RixDQUFDOztnR0FaVSx3QkFBd0I7NkRBQXhCLHdCQUF3Qjs2QkFDeEIsV0FBVzs7Ozs7O1FBSFgsc0ZBQWE7O2tEQUViLHdCQUF3QjtjQVBwQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUUsc0RBQXNEO2FBQ2pFOztrQkFFRSxTQUFTO21CQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENka1BvcnRhbE91dGxldCwgVGVtcGxhdGVQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcclxuaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdDb250YWluZXJSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnbnotYXZhdGFyW256LWNvbW1lbnQtYXZhdGFyXScsXHJcbiAgZXhwb3J0QXM6ICduekNvbW1lbnRBdmF0YXInXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekNvbW1lbnRBdmF0YXJEaXJlY3RpdmUge31cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnbnotY29tbWVudC1jb250ZW50LCBbbnotY29tbWVudC1jb250ZW50XScsXHJcbiAgZXhwb3J0QXM6ICduekNvbW1lbnRDb250ZW50JyxcclxuICBob3N0OiB7IGNsYXNzOiAnYW50LWNvbW1lbnQtY29udGVudC1kZXRhaWwnIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56Q29tbWVudENvbnRlbnREaXJlY3RpdmUge31cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW256Q29tbWVudEFjdGlvbkhvc3RdJyxcclxuICBleHBvcnRBczogJ256Q29tbWVudEFjdGlvbkhvc3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekNvbW1lbnRBY3Rpb25Ib3N0RGlyZWN0aXZlIGV4dGVuZHMgQ2RrUG9ydGFsT3V0bGV0IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xyXG4gIEBJbnB1dCgpIG56Q29tbWVudEFjdGlvbkhvc3Q6IFRlbXBsYXRlUG9ydGFsIHwgbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IoY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcclxuICAgIHN1cGVyKGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgdmlld0NvbnRhaW5lclJlZik7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHN1cGVyLm5nT25Jbml0KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHN1cGVyLm5nT25EZXN0cm95KCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmF0dGFjaCh0aGlzLm56Q29tbWVudEFjdGlvbkhvc3QpO1xyXG4gIH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei1jb21tZW50LWFjdGlvbicsXHJcbiAgZXhwb3J0QXM6ICduekNvbW1lbnRBY3Rpb24nLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvbmctdGVtcGxhdGU+J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpDb21tZW50QWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmLCB7IHN0YXRpYzogdHJ1ZSB9KSBpbXBsaWNpdENvbnRlbnQ6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIHByaXZhdGUgY29udGVudFBvcnRhbDogVGVtcGxhdGVQb3J0YWwgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgZ2V0IGNvbnRlbnQoKTogVGVtcGxhdGVQb3J0YWwgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRlbnRQb3J0YWw7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jb250ZW50UG9ydGFsID0gbmV3IFRlbXBsYXRlUG9ydGFsKHRoaXMuaW1wbGljaXRDb250ZW50LCB0aGlzLnZpZXdDb250YWluZXJSZWYpO1xyXG4gIH1cclxufVxyXG4iXX0=