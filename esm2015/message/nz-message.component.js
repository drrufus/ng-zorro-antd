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
    const ctx_r608 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", ctx_r608.nzMessage.content, i0.ɵɵsanitizeHtml);
} }
export class NzMessageComponent {
    constructor(_messageContainer, cdr) {
        this._messageContainer = _messageContainer;
        this.cdr = cdr;
        this._eraseTimer = null;
    }
    ngOnInit() {
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
    }
    ngOnDestroy() {
        if (this._autoErase) {
            this._clearEraseTimeout();
        }
    }
    onEnter() {
        if (this._autoErase && this._options.nzPauseOnHover) {
            this._clearEraseTimeout();
            this._updateTTL();
        }
    }
    onLeave() {
        if (this._autoErase && this._options.nzPauseOnHover) {
            this._startEraseTimeout();
        }
    }
    // Remove self
    _destroy(userAction = false) {
        if (this._options.nzAnimate) {
            this.nzMessage.state = 'leave';
            this.cdr.detectChanges();
            setTimeout(() => this._messageContainer.removeMessage(this.nzMessage.messageId, userAction), 200);
        }
        else {
            this._messageContainer.removeMessage(this.nzMessage.messageId, userAction);
        }
    }
    _initErase() {
        this._eraseTTL = this._options.nzDuration;
        this._eraseTimingStart = Date.now();
    }
    _updateTTL() {
        if (this._autoErase) {
            this._eraseTTL -= Date.now() - this._eraseTimingStart;
        }
    }
    _startEraseTimeout() {
        if (this._eraseTTL > 0) {
            this._clearEraseTimeout();
            this._eraseTimer = setTimeout(() => this._destroy(), this._eraseTTL);
            this._eraseTimingStart = Date.now();
        }
        else {
            this._destroy();
        }
    }
    _clearEraseTimeout() {
        if (this._eraseTimer !== null) {
            clearTimeout(this._eraseTimer);
            this._eraseTimer = null;
        }
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL21lc3NhZ2UvIiwic291cmNlcyI6WyJuei1tZXNzYWdlLmNvbXBvbmVudC50cyIsIm56LW1lc3NhZ2UuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5JLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7Ozs7OztJQ0h2RSx3QkFBK0Q7OztJQUMvRCx3QkFBMkQ7OztJQUMzRCx3QkFBcUU7OztJQUNyRSx3QkFBNkQ7OztJQUM3RCx3QkFBMEQ7OztJQUU1RCw2QkFDRTtJQUFBLDJCQUE2QztJQUMvQywwQkFBZTs7O0lBRFAsZUFBK0I7SUFBL0IseUVBQStCOztBRFE3QyxNQUFNLE9BQU8sa0JBQWtCO0lBVzdCLFlBQW9CLGlCQUE4QyxFQUFZLEdBQXNCO1FBQWhGLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBNkI7UUFBWSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUo1RixnQkFBVyxHQUFrQixJQUFJLENBQUM7SUFJNkQsQ0FBQztJQUV4RyxRQUFRO1FBQ04sMkVBQTJFO1FBQzNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUF5QyxDQUFDO1FBRXpFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1NBQ2hDO1FBRUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7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OztRQWxCSixtREFBaUM7UUFLUyxlQUEyQztRQUEzQyw2REFBMkM7UUFDbkUsZUFBMkI7UUFBM0IsNkNBQTJCO1FBQ3BDLGVBQXlCO1FBQXpCLHdDQUF5QjtRQUN6QixlQUFzQjtRQUF0QixxQ0FBc0I7UUFDdEIsZUFBeUI7UUFBekIsd0NBQXlCO1FBQ3pCLGVBQXVCO1FBQXZCLHNDQUF1QjtRQUN2QixlQUF5QjtRQUF6Qix3Q0FBeUI7UUFFaEIsZUFBMkM7UUFBM0MsOERBQTJDOzhKRE1qRCxDQUFDLFlBQVksQ0FBQztrREFHZixrQkFBa0I7Y0FUOUIsU0FBUztlQUFDO2dCQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixVQUFVLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQzFCLFdBQVcsRUFBRSw2QkFBNkI7YUFDM0M7O2tCQUVFLEtBQUs7O2tCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBtb3ZlVXBNb3Rpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9uei1tZXNzYWdlLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOek1lc3NhZ2VEYXRhRmlsbGVkLCBOek1lc3NhZ2VEYXRhT3B0aW9ucyB9IGZyb20gJy4vbnotbWVzc2FnZS5kZWZpbml0aW9ucyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHNlbGVjdG9yOiAnbnotbWVzc2FnZScsXHJcbiAgZXhwb3J0QXM6ICduek1lc3NhZ2UnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGFuaW1hdGlvbnM6IFttb3ZlVXBNb3Rpb25dLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1tZXNzYWdlLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpNZXNzYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIG56TWVzc2FnZTogTnpNZXNzYWdlRGF0YUZpbGxlZDtcclxuICBASW5wdXQoKSBuekluZGV4OiBudW1iZXI7XHJcblxyXG4gIHByb3RlY3RlZCBfb3B0aW9uczogUmVxdWlyZWQ8TnpNZXNzYWdlRGF0YU9wdGlvbnM+O1xyXG5cclxuICBwcml2YXRlIF9hdXRvRXJhc2U6IGJvb2xlYW47IC8vIFdoZXRoZXIgdG8gc2V0IGEgdGltZW91dCB0byBkZXN0cm95IGl0c2VsZi5cclxuICBwcml2YXRlIF9lcmFzZVRpbWVyOiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuICBwcml2YXRlIF9lcmFzZVRpbWluZ1N0YXJ0OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfZXJhc2VUVEw6IG51bWJlcjsgLy8gVGltZSB0byBsaXZlLlxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9tZXNzYWdlQ29udGFpbmVyOiBOek1lc3NhZ2VDb250YWluZXJDb21wb25lbnQsIHByb3RlY3RlZCBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIGBOek1lc3NhZ2VDb250YWluZXJgIGRvZXMgaXRzIGpvYiBzbyBhbGwgcHJvcGVydGllcyBjYW5ub3QgYmUgdW5kZWZpbmVkLlxyXG4gICAgdGhpcy5fb3B0aW9ucyA9IHRoaXMubnpNZXNzYWdlLm9wdGlvbnMgYXMgUmVxdWlyZWQ8TnpNZXNzYWdlRGF0YU9wdGlvbnM+O1xyXG5cclxuICAgIGlmICh0aGlzLl9vcHRpb25zLm56QW5pbWF0ZSkge1xyXG4gICAgICB0aGlzLm56TWVzc2FnZS5zdGF0ZSA9ICdlbnRlcic7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fYXV0b0VyYXNlID0gdGhpcy5fb3B0aW9ucy5uekR1cmF0aW9uID4gMDtcclxuXHJcbiAgICBpZiAodGhpcy5fYXV0b0VyYXNlKSB7XHJcbiAgICAgIHRoaXMuX2luaXRFcmFzZSgpO1xyXG4gICAgICB0aGlzLl9zdGFydEVyYXNlVGltZW91dCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fYXV0b0VyYXNlKSB7XHJcbiAgICAgIHRoaXMuX2NsZWFyRXJhc2VUaW1lb3V0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkVudGVyKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2F1dG9FcmFzZSAmJiB0aGlzLl9vcHRpb25zLm56UGF1c2VPbkhvdmVyKSB7XHJcbiAgICAgIHRoaXMuX2NsZWFyRXJhc2VUaW1lb3V0KCk7XHJcbiAgICAgIHRoaXMuX3VwZGF0ZVRUTCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25MZWF2ZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9hdXRvRXJhc2UgJiYgdGhpcy5fb3B0aW9ucy5uelBhdXNlT25Ib3Zlcikge1xyXG4gICAgICB0aGlzLl9zdGFydEVyYXNlVGltZW91dCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gUmVtb3ZlIHNlbGZcclxuICBwcm90ZWN0ZWQgX2Rlc3Ryb3kodXNlckFjdGlvbjogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fb3B0aW9ucy5uekFuaW1hdGUpIHtcclxuICAgICAgdGhpcy5uek1lc3NhZ2Uuc3RhdGUgPSAnbGVhdmUnO1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5fbWVzc2FnZUNvbnRhaW5lci5yZW1vdmVNZXNzYWdlKHRoaXMubnpNZXNzYWdlLm1lc3NhZ2VJZCwgdXNlckFjdGlvbiksIDIwMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9tZXNzYWdlQ29udGFpbmVyLnJlbW92ZU1lc3NhZ2UodGhpcy5uek1lc3NhZ2UubWVzc2FnZUlkLCB1c2VyQWN0aW9uKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2luaXRFcmFzZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2VyYXNlVFRMID0gdGhpcy5fb3B0aW9ucy5uekR1cmF0aW9uO1xyXG4gICAgdGhpcy5fZXJhc2VUaW1pbmdTdGFydCA9IERhdGUubm93KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF91cGRhdGVUVEwoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fYXV0b0VyYXNlKSB7XHJcbiAgICAgIHRoaXMuX2VyYXNlVFRMIC09IERhdGUubm93KCkgLSB0aGlzLl9lcmFzZVRpbWluZ1N0YXJ0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc3RhcnRFcmFzZVRpbWVvdXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fZXJhc2VUVEwgPiAwKSB7XHJcbiAgICAgIHRoaXMuX2NsZWFyRXJhc2VUaW1lb3V0KCk7XHJcbiAgICAgIHRoaXMuX2VyYXNlVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuX2Rlc3Ryb3koKSwgdGhpcy5fZXJhc2VUVEwpO1xyXG4gICAgICB0aGlzLl9lcmFzZVRpbWluZ1N0YXJ0ID0gRGF0ZS5ub3coKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2Rlc3Ryb3koKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2NsZWFyRXJhc2VUaW1lb3V0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2VyYXNlVGltZXIgIT09IG51bGwpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2VyYXNlVGltZXIpO1xyXG4gICAgICB0aGlzLl9lcmFzZVRpbWVyID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPGRpdlxyXG4gIGNsYXNzPVwiYW50LW1lc3NhZ2Utbm90aWNlXCJcclxuICBbQG1vdmVVcE1vdGlvbl09XCJuek1lc3NhZ2Uuc3RhdGVcIlxyXG4gIChtb3VzZWVudGVyKT1cIm9uRW50ZXIoKVwiXHJcbiAgKG1vdXNlbGVhdmUpPVwib25MZWF2ZSgpXCJcclxuPlxyXG4gIDxkaXYgY2xhc3M9XCJhbnQtbWVzc2FnZS1ub3RpY2UtY29udGVudFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImFudC1tZXNzYWdlLWN1c3RvbS1jb250ZW50XCIgW25nQ2xhc3NdPVwiJ2FudC1tZXNzYWdlLScgKyBuek1lc3NhZ2UudHlwZVwiPlxyXG4gICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJuek1lc3NhZ2UudHlwZVwiPlxyXG4gICAgICAgIDxpICpuZ1N3aXRjaENhc2U9XCInc3VjY2VzcydcIiBuei1pY29uIG56VHlwZT1cImNoZWNrLWNpcmNsZVwiPjwvaT5cclxuICAgICAgICA8aSAqbmdTd2l0Y2hDYXNlPVwiJ2luZm8nXCIgbnotaWNvbiBuelR5cGU9XCJpbmZvLWNpcmNsZVwiPjwvaT5cclxuICAgICAgICA8aSAqbmdTd2l0Y2hDYXNlPVwiJ3dhcm5pbmcnXCIgbnotaWNvbiBuelR5cGU9XCJleGNsYW1hdGlvbi1jaXJjbGVcIj48L2k+XHJcbiAgICAgICAgPGkgKm5nU3dpdGNoQ2FzZT1cIidlcnJvcidcIiBuei1pY29uIG56VHlwZT1cImNsb3NlLWNpcmNsZVwiPjwvaT5cclxuICAgICAgICA8aSAqbmdTd2l0Y2hDYXNlPVwiJ2xvYWRpbmcnXCIgbnotaWNvbiBuelR5cGU9XCJsb2FkaW5nXCI+PC9pPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56TWVzc2FnZS5jb250ZW50XCI+XHJcbiAgICAgICAgPHNwYW4gW2lubmVySFRNTF09XCJuek1lc3NhZ2UuY29udGVudFwiPjwvc3Bhbj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==