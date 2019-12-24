/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewEncapsulation } from '@angular/core';
import { moveUpMotion } from 'ng-zorro-antd/core';
import { NzMessageContainerComponent } from './nz-message-container.component';
import * as i0 from "@angular/core";
import * as i1 from "./nz-message-container.component";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/core";
import * as i4 from "ng-zorro-antd/icon";
function NzMessageComponent_i_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 10);
} }
function NzMessageComponent_i_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 11);
} }
function NzMessageComponent_i_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 12);
} }
function NzMessageComponent_i_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 13);
} }
function NzMessageComponent_i_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 14);
} }
function NzMessageComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "span", 15);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r617 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", ctx_r617.nzMessage.content, i0.ɵɵsanitizeHtml);
} }
var NzMessageComponent = /** @class */ (function () {
    function NzMessageComponent(_messageContainer, cdr) {
        this._messageContainer = _messageContainer;
        this.cdr = cdr;
        this._eraseTimer = null;
    }
    NzMessageComponent.prototype.ngOnInit = function () {
        // `NzMessageContainer` does its job so all properties cannot be undefined.
        this._options = this.nzMessage.options;
        if (this._options.nzAnimate) {
            this.nzMessage.state = 'enter';
        }
        this._autoErase = this._options.nzDuration > 0;
        if (this._autoErase) {
            this._initErase();
            this._startEraseTimeout();
        }
    };
    NzMessageComponent.prototype.ngOnDestroy = function () {
        if (this._autoErase) {
            this._clearEraseTimeout();
        }
    };
    NzMessageComponent.prototype.onEnter = function () {
        if (this._autoErase && this._options.nzPauseOnHover) {
            this._clearEraseTimeout();
            this._updateTTL();
        }
    };
    NzMessageComponent.prototype.onLeave = function () {
        if (this._autoErase && this._options.nzPauseOnHover) {
            this._startEraseTimeout();
        }
    };
    // Remove self
    NzMessageComponent.prototype._destroy = function (userAction) {
        var _this = this;
        if (userAction === void 0) { userAction = false; }
        if (this._options.nzAnimate) {
            this.nzMessage.state = 'leave';
            this.cdr.detectChanges();
            setTimeout(function () { return _this._messageContainer.removeMessage(_this.nzMessage.messageId, userAction); }, 200);
        }
        else {
            this._messageContainer.removeMessage(this.nzMessage.messageId, userAction);
        }
    };
    NzMessageComponent.prototype._initErase = function () {
        this._eraseTTL = this._options.nzDuration;
        this._eraseTimingStart = Date.now();
    };
    NzMessageComponent.prototype._updateTTL = function () {
        if (this._autoErase) {
            this._eraseTTL -= Date.now() - this._eraseTimingStart;
        }
    };
    NzMessageComponent.prototype._startEraseTimeout = function () {
        var _this = this;
        if (this._eraseTTL > 0) {
            this._clearEraseTimeout();
            this._eraseTimer = setTimeout(function () { return _this._destroy(); }, this._eraseTTL);
            this._eraseTimingStart = Date.now();
        }
        else {
            this._destroy();
        }
    };
    NzMessageComponent.prototype._clearEraseTimeout = function () {
        if (this._eraseTimer !== null) {
            clearTimeout(this._eraseTimer);
            this._eraseTimer = null;
        }
    };
    /** @nocollapse */ NzMessageComponent.ɵfac = function NzMessageComponent_Factory(t) { return new (t || NzMessageComponent)(i0.ɵɵdirectiveInject(i1.NzMessageContainerComponent), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ NzMessageComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzMessageComponent, selectors: [["nz-message"]], inputs: { nzMessage: "nzMessage", nzIndex: "nzIndex" }, exportAs: ["nzMessage"], decls: 10, vars: 9, consts: [[1, "ant-message-notice", 3, "mouseenter", "mouseleave"], [1, "ant-message-notice-content"], [1, "ant-message-custom-content", 3, "ngClass"], [3, "ngSwitch"], ["nz-icon", "", "nzType", "check-circle", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "info-circle", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "exclamation-circle", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "close-circle", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "loading", 4, "ngSwitchCase"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", "nzType", "check-circle"], ["nz-icon", "", "nzType", "info-circle"], ["nz-icon", "", "nzType", "exclamation-circle"], ["nz-icon", "", "nzType", "close-circle"], ["nz-icon", "", "nzType", "loading"], [3, "innerHTML"]], template: function NzMessageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵlistener("mouseenter", function NzMessageComponent_Template_div_mouseenter_0_listener($event) { return ctx.onEnter(); })("mouseleave", function NzMessageComponent_Template_div_mouseleave_0_listener($event) { return ctx.onLeave(); });
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵelementContainerStart(3, 3);
            i0.ɵɵtemplate(4, NzMessageComponent_i_4_Template, 1, 0, "i", 4);
            i0.ɵɵtemplate(5, NzMessageComponent_i_5_Template, 1, 0, "i", 5);
            i0.ɵɵtemplate(6, NzMessageComponent_i_6_Template, 1, 0, "i", 6);
            i0.ɵɵtemplate(7, NzMessageComponent_i_7_Template, 1, 0, "i", 7);
            i0.ɵɵtemplate(8, NzMessageComponent_i_8_Template, 1, 0, "i", 8);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵtemplate(9, NzMessageComponent_ng_container_9_Template, 2, 1, "ng-container", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("@moveUpMotion", ctx.nzMessage.state);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", "ant-message-" + ctx.nzMessage.type);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitch", ctx.nzMessage.type);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "success");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "info");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "warning");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "error");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "loading");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzStringTemplateOutlet", ctx.nzMessage.content);
        } }, directives: [i2.NgClass, i2.NgSwitch, i2.NgSwitchCase, i3.NzStringTemplateOutletDirective, i4.NzIconDirective], encapsulation: 2, data: { animation: [moveUpMotion] }, changeDetection: 0 });
    return NzMessageComponent;
}());
export { NzMessageComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzMessageComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-message',
                exportAs: 'nzMessage',
                preserveWhitespaces: false,
                animations: [moveUpMotion],
                templateUrl: './nz-message.component.html'
            }]
    }], function () { return [{ type: i1.NzMessageContainerComponent }, { type: i0.ChangeDetectorRef }]; }, { nzMessage: [{
            type: Input
        }], nzIndex: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL21lc3NhZ2UvIiwic291cmNlcyI6WyJuei1tZXNzYWdlLmNvbXBvbmVudC50cyIsIm56LW1lc3NhZ2UuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5JLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7Ozs7OztJQ0h2RSx3QkFBK0Q7OztJQUMvRCx3QkFBMkQ7OztJQUMzRCx3QkFBcUU7OztJQUNyRSx3QkFBNkQ7OztJQUM3RCx3QkFBMEQ7OztJQUU1RCw2QkFDRTtJQUFBLDJCQUE2QztJQUMvQywwQkFBZTs7O0lBRFAsZUFBK0I7SUFBL0IseUVBQStCOztBREQ3QztJQW9CRSw0QkFBb0IsaUJBQThDLEVBQVksR0FBc0I7UUFBaEYsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUE2QjtRQUFZLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBSjVGLGdCQUFXLEdBQWtCLElBQUksQ0FBQztJQUk2RCxDQUFDO0lBRXhHLHFDQUFRLEdBQVI7UUFDRSwyRUFBMkU7UUFDM0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQXlDLENBQUM7UUFFekUsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7U0FDaEM7UUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUUvQyxJQUFJ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dkQsK0RBQWlFO1lBQ2pFLCtEQUF5RDtZQUN6RCwrREFBc0Q7WUFDeEQsMEJBQWU7WUFDZixxRkFDRTtZQUVKLGlCQUFNO1lBQ1IsaUJBQU07WUFDUixpQkFBTTs7WUFsQkosbURBQWlDO1lBS1MsZUFBMkM7WUFBM0MsNkRBQTJDO1lBQ25FLGVBQTJCO1lBQTNCLDZDQUEyQjtZQUNwQyxlQUF5QjtZQUF6Qix3Q0FBeUI7WUFDekIsZUFBc0I7WUFBdEIscUNBQXNCO1lBQ3RCLGVBQXlCO1lBQXpCLHdDQUF5QjtZQUN6QixlQUF1QjtZQUF2QixzQ0FBdUI7WUFDdkIsZUFBeUI7WUFBekIsd0NBQXlCO1lBRWhCLGVBQTJDO1lBQTNDLDhEQUEyQztrS0RNakQsQ0FBQyxZQUFZLENBQUM7NkJBckI1QjtDQThHQyxBQS9GRCxJQStGQztTQXRGWSxrQkFBa0I7a0RBQWxCLGtCQUFrQjtjQVQ5QixTQUFTO2VBQUM7Z0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLFVBQVUsRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDMUIsV0FBVyxFQUFFLDZCQUE2QjthQUMzQzs7a0JBRUUsS0FBSzs7a0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IG1vdmVVcE1vdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOek1lc3NhZ2VDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL256LW1lc3NhZ2UtY29udGFpbmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56TWVzc2FnZURhdGFGaWxsZWQsIE56TWVzc2FnZURhdGFPcHRpb25zIH0gZnJvbSAnLi9uei1tZXNzYWdlLmRlZmluaXRpb25zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc2VsZWN0b3I6ICduei1tZXNzYWdlJyxcclxuICBleHBvcnRBczogJ256TWVzc2FnZScsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgYW5pbWF0aW9uczogW21vdmVVcE1vdGlvbl0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LW1lc3NhZ2UuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOek1lc3NhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgbnpNZXNzYWdlOiBOek1lc3NhZ2VEYXRhRmlsbGVkO1xyXG4gIEBJbnB1dCgpIG56SW5kZXg6IG51bWJlcjtcclxuXHJcbiAgcHJvdGVjdGVkIF9vcHRpb25zOiBSZXF1aXJlZDxOek1lc3NhZ2VEYXRhT3B0aW9ucz47XHJcblxyXG4gIHByaXZhdGUgX2F1dG9FcmFzZTogYm9vbGVhbjsgLy8gV2hldGhlciB0byBzZXQgYSB0aW1lb3V0IHRvIGRlc3Ryb3kgaXRzZWxmLlxyXG4gIHByaXZhdGUgX2VyYXNlVGltZXI6IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG4gIHByaXZhdGUgX2VyYXNlVGltaW5nU3RhcnQ6IG51bWJlcjtcclxuICBwcml2YXRlIF9lcmFzZVRUTDogbnVtYmVyOyAvLyBUaW1lIHRvIGxpdmUuXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX21lc3NhZ2VDb250YWluZXI6IE56TWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCwgcHJvdGVjdGVkIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgLy8gYE56TWVzc2FnZUNvbnRhaW5lcmAgZG9lcyBpdHMgam9iIHNvIGFsbCBwcm9wZXJ0aWVzIGNhbm5vdCBiZSB1bmRlZmluZWQuXHJcbiAgICB0aGlzLl9vcHRpb25zID0gdGhpcy5uek1lc3NhZ2Uub3B0aW9ucyBhcyBSZXF1aXJlZDxOek1lc3NhZ2VEYXRhT3B0aW9ucz47XHJcblxyXG4gICAgaWYgKHRoaXMuX29wdGlvbnMubnpBbmltYXRlKSB7XHJcbiAgICAgIHRoaXMubnpNZXNzYWdlLnN0YXRlID0gJ2VudGVyJztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9hdXRvRXJhc2UgPSB0aGlzLl9vcHRpb25zLm56RHVyYXRpb24gPiAwO1xyXG5cclxuICAgIGlmICh0aGlzLl9hdXRvRXJhc2UpIHtcclxuICAgICAgdGhpcy5faW5pdEVyYXNlKCk7XHJcbiAgICAgIHRoaXMuX3N0YXJ0RXJhc2VUaW1lb3V0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9hdXRvRXJhc2UpIHtcclxuICAgICAgdGhpcy5fY2xlYXJFcmFzZVRpbWVvdXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uRW50ZXIoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fYXV0b0VyYXNlICYmIHRoaXMuX29wdGlvbnMubnpQYXVzZU9uSG92ZXIpIHtcclxuICAgICAgdGhpcy5fY2xlYXJFcmFzZVRpbWVvdXQoKTtcclxuICAgICAgdGhpcy5fdXBkYXRlVFRMKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkxlYXZlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2F1dG9FcmFzZSAmJiB0aGlzLl9vcHRpb25zLm56UGF1c2VPbkhvdmVyKSB7XHJcbiAgICAgIHRoaXMuX3N0YXJ0RXJhc2VUaW1lb3V0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBSZW1vdmUgc2VsZlxyXG4gIHByb3RlY3RlZCBfZGVzdHJveSh1c2VyQWN0aW9uOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9vcHRpb25zLm56QW5pbWF0ZSkge1xyXG4gICAgICB0aGlzLm56TWVzc2FnZS5zdGF0ZSA9ICdsZWF2ZSc7XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLl9tZXNzYWdlQ29udGFpbmVyLnJlbW92ZU1lc3NhZ2UodGhpcy5uek1lc3NhZ2UubWVzc2FnZUlkLCB1c2VyQWN0aW9uKSwgMjAwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX21lc3NhZ2VDb250YWluZXIucmVtb3ZlTWVzc2FnZSh0aGlzLm56TWVzc2FnZS5tZXNzYWdlSWQsIHVzZXJBY3Rpb24pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfaW5pdEVyYXNlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fZXJhc2VUVEwgPSB0aGlzLl9vcHRpb25zLm56RHVyYXRpb247XHJcbiAgICB0aGlzLl9lcmFzZVRpbWluZ1N0YXJ0ID0gRGF0ZS5ub3coKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3VwZGF0ZVRUTCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9hdXRvRXJhc2UpIHtcclxuICAgICAgdGhpcy5fZXJhc2VUVEwgLT0gRGF0ZS5ub3coKSAtIHRoaXMuX2VyYXNlVGltaW5nU3RhcnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zdGFydEVyYXNlVGltZW91dCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9lcmFzZVRUTCA+IDApIHtcclxuICAgICAgdGhpcy5fY2xlYXJFcmFzZVRpbWVvdXQoKTtcclxuICAgICAgdGhpcy5fZXJhc2VUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5fZGVzdHJveSgpLCB0aGlzLl9lcmFzZVRUTCk7XHJcbiAgICAgIHRoaXMuX2VyYXNlVGltaW5nU3RhcnQgPSBEYXRlLm5vdygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfY2xlYXJFcmFzZVRpbWVvdXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fZXJhc2VUaW1lciAhPT0gbnVsbCkge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fZXJhc2VUaW1lcik7XHJcbiAgICAgIHRoaXMuX2VyYXNlVGltZXIgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8ZGl2XHJcbiAgY2xhc3M9XCJhbnQtbWVzc2FnZS1ub3RpY2VcIlxyXG4gIFtAbW92ZVVwTW90aW9uXT1cIm56TWVzc2FnZS5zdGF0ZVwiXHJcbiAgKG1vdXNlZW50ZXIpPVwib25FbnRlcigpXCJcclxuICAobW91c2VsZWF2ZSk9XCJvbkxlYXZlKClcIlxyXG4+XHJcbiAgPGRpdiBjbGFzcz1cImFudC1tZXNzYWdlLW5vdGljZS1jb250ZW50XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYW50LW1lc3NhZ2UtY3VzdG9tLWNvbnRlbnRcIiBbbmdDbGFzc109XCInYW50LW1lc3NhZ2UtJyArIG56TWVzc2FnZS50eXBlXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cIm56TWVzc2FnZS50eXBlXCI+XHJcbiAgICAgICAgPGkgKm5nU3dpdGNoQ2FzZT1cIidzdWNjZXNzJ1wiIG56LWljb24gbnpUeXBlPVwiY2hlY2stY2lyY2xlXCI+PC9pPlxyXG4gICAgICAgIDxpICpuZ1N3aXRjaENhc2U9XCInaW5mbydcIiBuei1pY29uIG56VHlwZT1cImluZm8tY2lyY2xlXCI+PC9pPlxyXG4gICAgICAgIDxpICpuZ1N3aXRjaENhc2U9XCInd2FybmluZydcIiBuei1pY29uIG56VHlwZT1cImV4Y2xhbWF0aW9uLWNpcmNsZVwiPjwvaT5cclxuICAgICAgICA8aSAqbmdTd2l0Y2hDYXNlPVwiJ2Vycm9yJ1wiIG56LWljb24gbnpUeXBlPVwiY2xvc2UtY2lyY2xlXCI+PC9pPlxyXG4gICAgICAgIDxpICpuZ1N3aXRjaENhc2U9XCInbG9hZGluZydcIiBuei1pY29uIG56VHlwZT1cImxvYWRpbmdcIj48L2k+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpNZXNzYWdlLmNvbnRlbnRcIj5cclxuICAgICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cIm56TWVzc2FnZS5jb250ZW50XCI+PC9zcGFuPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19