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
import { warnDeprecation } from 'ng-zorro-antd/core';
/** @type {?} */
let globalCounter = 0;
/**
 * @template ContainerClass, MessageData, MessageConfig
 */
export class NzMessageBaseService {
    /**
     * @param {?} nzSingletonService
     * @param {?} overlay
     * @param {?} containerClass
     * @param {?} injector
     * @param {?} cfr
     * @param {?} appRef
     * @param {?=} name
     */
    constructor(nzSingletonService, overlay, containerClass, injector, cfr, appRef, name = '') {
        this.nzSingletonService = nzSingletonService;
        this.overlay = overlay;
        this.containerClass = containerClass;
        this.injector = injector;
        this.cfr = cfr;
        this.appRef = appRef;
        this.name = name;
        this._container = this.withContainer();
        this.nzSingletonService.registerSingletonWithKey(this.name, this._container);
    }
    /**
     * @param {?=} messageId
     * @return {?}
     */
    remove(messageId) {
        if (messageId) {
            this._container.removeMessage(messageId);
        }
        else {
            this._container.removeMessageAll();
        }
    }
    /**
     * @param {?} message
     * @param {?=} options
     * @return {?}
     */
    createMessage(message, options) {
        /** @type {?} */
        const resultMessage = Object.assign({}, ((/** @type {?} */ (message))), {
            createdAt: new Date(),
            messageId: this._generateMessageId(),
            options
        });
        this._container.createMessage(resultMessage);
        return resultMessage;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    config(config) {
        warnDeprecation(`'config' of 'NzMessageService' and 'NzNotificationService' is deprecated and will be removed in 9.0.0. Please use 'set' of 'NzConfigService' instead.`);
        this._container.setConfig(config);
    }
    /**
     * @protected
     * @return {?}
     */
    _generateMessageId() {
        return `${this.name}-${globalCounter++}`;
    }
    // Manually creating container for overlay to avoid multi-checking error, see: https://github.com/NG-ZORRO/ng-zorro-antd/issues/391
    // NOTE: we never clean up the container component and it's overlay resources, if we should, we need to do it by our own codes.
    /**
     * @private
     * @return {?}
     */
    withContainer() {
        /** @type {?} */
        const containerInstance = this.nzSingletonService.getSingletonWithKey(this.name);
        if (containerInstance) {
            return (/** @type {?} */ (containerInstance));
        }
        /** @type {?} */
        const factory = this.cfr.resolveComponentFactory(this.containerClass);
        /** @type {?} */
        const componentRef = factory.create(this.injector);
        componentRef.changeDetectorRef.detectChanges(); // Immediately change detection to avoid multi-checking error
        this.appRef.attachView(componentRef.hostView); // Load view into app root
        // Load view into app root
        /** @type {?} */
        const overlayPane = this.overlay.create().overlayElement;
        overlayPane.style.zIndex = '1010'; // Patching: assign the same zIndex of ant-message to it's parent overlay panel, to the ant-message's zindex work.
        overlayPane.appendChild((/** @type {?} */ (((/** @type {?} */ (componentRef.hostView))).rootNodes[0])));
        return componentRef.instance;
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    NzMessageBaseService.prototype._container;
    /**
     * @type {?}
     * @private
     */
    NzMessageBaseService.prototype.nzSingletonService;
    /**
     * @type {?}
     * @private
     */
    NzMessageBaseService.prototype.overlay;
    /**
     * @type {?}
     * @private
     */
    NzMessageBaseService.prototype.containerClass;
    /**
     * @type {?}
     * @private
     */
    NzMessageBaseService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    NzMessageBaseService.prototype.cfr;
    /**
     * @type {?}
     * @private
     */
    NzMessageBaseService.prototype.appRef;
    /**
     * @type {?}
     * @private
     */
    NzMessageBaseService.prototype.name;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVzc2FnZS1iYXNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL21lc3NhZ2UvIiwic291cmNlcyI6WyJuei1tZXNzYWdlLWJhc2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVVBLE9BQU8sRUFBRSxlQUFlLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7O0lBTXJFLGFBQWEsR0FBRyxDQUFDOzs7O0FBRXJCLE1BQU0sT0FBTyxvQkFBb0I7Ozs7Ozs7Ozs7SUFPL0IsWUFDVSxrQkFBc0MsRUFDdEMsT0FBZ0IsRUFDaEIsY0FBb0MsRUFDcEMsUUFBa0IsRUFDbEIsR0FBNkIsRUFDN0IsTUFBc0IsRUFDdEIsT0FBZSxFQUFFO1FBTmpCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNoQixtQkFBYyxHQUFkLGNBQWMsQ0FBc0I7UUFDcEMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixRQUFHLEdBQUgsR0FBRyxDQUEwQjtRQUM3QixXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUN0QixTQUFJLEdBQUosSUFBSSxDQUFhO1FBRXpCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMvRSxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxTQUFrQjtRQUN2QixJQUFJLFNBQVMsRUFBRTtZQUNiLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzFDO2FBQU07WUFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDcEM7SUFDSCxDQUFDOzs7Ozs7SUFFRCxhQUFhLENBQUMsT0FBb0IsRUFBRSxPQUE4Qjs7Y0FDMUQsYUFBYSxxQkFDZCxDQUFDLG1CQUFBLE9BQU8sRUFBaUIsQ0FBQyxFQUMxQjtZQUNELFNBQVMsRUFBRSxJQUFJLElBQUksRUFBRTtZQUNyQixTQUFTLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQ3BDLE9BQU87U0FDUixDQUNGO1FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFN0MsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsTUFBcUI7UUFDMUIsZUFBZSxDQUFDLHVKQUF1SixDQUFDLENBQUM7UUFFekssSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFUyxrQkFBa0I7UUFDMUIsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksYUFBYSxFQUFFLEVBQUUsQ0FBQztJQUMzQyxDQUFDOzs7Ozs7O0lBSU8sYUFBYTs7Y0FDYixpQkFBaUIsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUVoRixJQUFJLGlCQUFpQixFQUFFO1lBQ3JCLE9BQU8sbUJBQUEsaUJBQWlCLEVBQWtCLENBQUM7U0FDNUM7O2NBRUssT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQzs7Y0FDL0QsWUFBWSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNsRCxZQUFZLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyw2REFBNkQ7UUFDN0csSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsMEJBQTBCOzs7Y0FDbkUsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsY0FBYztRQUN4RCxXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQyxrSEFBa0g7UUFDckosV0FBVyxDQUFDLFdBQVcsQ0FBQyxtQkFBQSxDQUFDLG1CQUFBLFlBQVksQ0FBQyxRQUFRLEVBQXVCLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQWUsQ0FBQyxDQUFDO1FBRXBHLE9BQU8sWUFBWSxDQUFDLFFBQVEsQ0FBQztJQUMvQixDQUFDO0NBQ0Y7Ozs7OztJQWxFQywwQ0FBcUM7Ozs7O0lBR25DLGtEQUE4Qzs7Ozs7SUFDOUMsdUNBQXdCOzs7OztJQUN4Qiw4Q0FBNEM7Ozs7O0lBQzVDLHdDQUEwQjs7Ozs7SUFDMUIsbUNBQXFDOzs7OztJQUNyQyxzQ0FBOEI7Ozs7O0lBQzlCLG9DQUF5QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgT3ZlcmxheSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25SZWYsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgRW1iZWRkZWRWaWV3UmVmLCBJbmplY3RvciwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB3YXJuRGVwcmVjYXRpb24sIE56U2luZ2xldG9uU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOek1lc3NhZ2VDb25maWdMZWdhY3kgfSBmcm9tICcuL256LW1lc3NhZ2UtY29uZmlnJztcclxuaW1wb3J0IHsgTnpNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9uei1tZXNzYWdlLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOek1lc3NhZ2VEYXRhLCBOek1lc3NhZ2VEYXRhRmlsbGVkLCBOek1lc3NhZ2VEYXRhT3B0aW9ucyB9IGZyb20gJy4vbnotbWVzc2FnZS5kZWZpbml0aW9ucyc7XHJcblxyXG5sZXQgZ2xvYmFsQ291bnRlciA9IDA7XHJcblxyXG5leHBvcnQgY2xhc3MgTnpNZXNzYWdlQmFzZVNlcnZpY2U8XHJcbiAgQ29udGFpbmVyQ2xhc3MgZXh0ZW5kcyBOek1lc3NhZ2VDb250YWluZXJDb21wb25lbnQsXHJcbiAgTWVzc2FnZURhdGEsXHJcbiAgTWVzc2FnZUNvbmZpZyBleHRlbmRzIE56TWVzc2FnZUNvbmZpZ0xlZ2FjeVxyXG4+IHtcclxuICBwcm90ZWN0ZWQgX2NvbnRhaW5lcjogQ29udGFpbmVyQ2xhc3M7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBuelNpbmdsZXRvblNlcnZpY2U6IE56U2luZ2xldG9uU2VydmljZSxcclxuICAgIHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSxcclxuICAgIHByaXZhdGUgY29udGFpbmVyQ2xhc3M6IFR5cGU8Q29udGFpbmVyQ2xhc3M+LFxyXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXHJcbiAgICBwcml2YXRlIGNmcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgcHJpdmF0ZSBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxyXG4gICAgcHJpdmF0ZSBuYW1lOiBzdHJpbmcgPSAnJ1xyXG4gICkge1xyXG4gICAgdGhpcy5fY29udGFpbmVyID0gdGhpcy53aXRoQ29udGFpbmVyKCk7XHJcbiAgICB0aGlzLm56U2luZ2xldG9uU2VydmljZS5yZWdpc3RlclNpbmdsZXRvbldpdGhLZXkodGhpcy5uYW1lLCB0aGlzLl9jb250YWluZXIpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlKG1lc3NhZ2VJZD86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKG1lc3NhZ2VJZCkge1xyXG4gICAgICB0aGlzLl9jb250YWluZXIucmVtb3ZlTWVzc2FnZShtZXNzYWdlSWQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fY29udGFpbmVyLnJlbW92ZU1lc3NhZ2VBbGwoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNyZWF0ZU1lc3NhZ2UobWVzc2FnZTogTWVzc2FnZURhdGEsIG9wdGlvbnM/OiBOek1lc3NhZ2VEYXRhT3B0aW9ucyk6IE56TWVzc2FnZURhdGFGaWxsZWQge1xyXG4gICAgY29uc3QgcmVzdWx0TWVzc2FnZTogTnpNZXNzYWdlRGF0YUZpbGxlZCA9IHtcclxuICAgICAgLi4uKG1lc3NhZ2UgYXMgTnpNZXNzYWdlRGF0YSksXHJcbiAgICAgIC4uLntcclxuICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgbWVzc2FnZUlkOiB0aGlzLl9nZW5lcmF0ZU1lc3NhZ2VJZCgpLFxyXG4gICAgICAgIG9wdGlvbnNcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRoaXMuX2NvbnRhaW5lci5jcmVhdGVNZXNzYWdlKHJlc3VsdE1lc3NhZ2UpO1xyXG5cclxuICAgIHJldHVybiByZXN1bHRNZXNzYWdlO1xyXG4gIH1cclxuXHJcbiAgY29uZmlnKGNvbmZpZzogTWVzc2FnZUNvbmZpZyk6IHZvaWQge1xyXG4gICAgd2FybkRlcHJlY2F0aW9uKGAnY29uZmlnJyBvZiAnTnpNZXNzYWdlU2VydmljZScgYW5kICdOek5vdGlmaWNhdGlvblNlcnZpY2UnIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiA5LjAuMC4gUGxlYXNlIHVzZSAnc2V0JyBvZiAnTnpDb25maWdTZXJ2aWNlJyBpbnN0ZWFkLmApO1xyXG5cclxuICAgIHRoaXMuX2NvbnRhaW5lci5zZXRDb25maWcoY29uZmlnKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBfZ2VuZXJhdGVNZXNzYWdlSWQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgJHt0aGlzLm5hbWV9LSR7Z2xvYmFsQ291bnRlcisrfWA7XHJcbiAgfVxyXG5cclxuICAvLyBNYW51YWxseSBjcmVhdGluZyBjb250YWluZXIgZm9yIG92ZXJsYXkgdG8gYXZvaWQgbXVsdGktY2hlY2tpbmcgZXJyb3IsIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvaXNzdWVzLzM5MVxyXG4gIC8vIE5PVEU6IHdlIG5ldmVyIGNsZWFuIHVwIHRoZSBjb250YWluZXIgY29tcG9uZW50IGFuZCBpdCdzIG92ZXJsYXkgcmVzb3VyY2VzLCBpZiB3ZSBzaG91bGQsIHdlIG5lZWQgdG8gZG8gaXQgYnkgb3VyIG93biBjb2Rlcy5cclxuICBwcml2YXRlIHdpdGhDb250YWluZXIoKTogQ29udGFpbmVyQ2xhc3Mge1xyXG4gICAgY29uc3QgY29udGFpbmVySW5zdGFuY2UgPSB0aGlzLm56U2luZ2xldG9uU2VydmljZS5nZXRTaW5nbGV0b25XaXRoS2V5KHRoaXMubmFtZSk7XHJcblxyXG4gICAgaWYgKGNvbnRhaW5lckluc3RhbmNlKSB7XHJcbiAgICAgIHJldHVybiBjb250YWluZXJJbnN0YW5jZSBhcyBDb250YWluZXJDbGFzcztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5jZnIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodGhpcy5jb250YWluZXJDbGFzcyk7XHJcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSBmYWN0b3J5LmNyZWF0ZSh0aGlzLmluamVjdG9yKTsgLy8gVXNlIHJvb3QgaW5qZWN0b3JcclxuICAgIGNvbXBvbmVudFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7IC8vIEltbWVkaWF0ZWx5IGNoYW5nZSBkZXRlY3Rpb24gdG8gYXZvaWQgbXVsdGktY2hlY2tpbmcgZXJyb3JcclxuICAgIHRoaXMuYXBwUmVmLmF0dGFjaFZpZXcoY29tcG9uZW50UmVmLmhvc3RWaWV3KTsgLy8gTG9hZCB2aWV3IGludG8gYXBwIHJvb3RcclxuICAgIGNvbnN0IG92ZXJsYXlQYW5lID0gdGhpcy5vdmVybGF5LmNyZWF0ZSgpLm92ZXJsYXlFbGVtZW50O1xyXG4gICAgb3ZlcmxheVBhbmUuc3R5bGUuekluZGV4ID0gJzEwMTAnOyAvLyBQYXRjaGluZzogYXNzaWduIHRoZSBzYW1lIHpJbmRleCBvZiBhbnQtbWVzc2FnZSB0byBpdCdzIHBhcmVudCBvdmVybGF5IHBhbmVsLCB0byB0aGUgYW50LW1lc3NhZ2UncyB6aW5kZXggd29yay5cclxuICAgIG92ZXJsYXlQYW5lLmFwcGVuZENoaWxkKChjb21wb25lbnRSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPHt9Pikucm9vdE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50KTtcclxuXHJcbiAgICByZXR1cm4gY29tcG9uZW50UmVmLmluc3RhbmNlO1xyXG4gIH1cclxufVxyXG4iXX0=