/**
 * @fileoverview added by tsickle
 * Generated from: tree/nz-tree-base.definitions.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * @record
 */
export function NzFormatEmitEvent() { }
if (false) {
    /** @type {?} */
    NzFormatEmitEvent.prototype.eventName;
    /** @type {?|undefined} */
    NzFormatEmitEvent.prototype.node;
    /** @type {?|undefined} */
    NzFormatEmitEvent.prototype.event;
    /** @type {?|undefined} */
    NzFormatEmitEvent.prototype.dragNode;
    /** @type {?|undefined} */
    NzFormatEmitEvent.prototype.selectedKeys;
    /** @type {?|undefined} */
    NzFormatEmitEvent.prototype.checkedKeys;
    /** @type {?|undefined} */
    NzFormatEmitEvent.prototype.matchedKeys;
    /** @type {?|undefined} */
    NzFormatEmitEvent.prototype.nodes;
    /** @type {?|undefined} */
    NzFormatEmitEvent.prototype.keys;
}
/**
 * @record
 */
export function NzFormatBeforeDropEvent() { }
if (false) {
    /** @type {?} */
    NzFormatBeforeDropEvent.prototype.dragNode;
    /** @type {?} */
    NzFormatBeforeDropEvent.prototype.node;
    /** @type {?} */
    NzFormatBeforeDropEvent.prototype.pos;
}
/**
 * @record
 */
export function NzTreeNodeBaseComponent() { }
if (false) {
    /**
     * @return {?}
     */
    NzTreeNodeBaseComponent.prototype.setClassMap = function () { };
    /**
     * @return {?}
     */
    NzTreeNodeBaseComponent.prototype.markForCheck = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS1iYXNlLmRlZmluaXRpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsidHJlZS9uei10cmVlLWJhc2UuZGVmaW5pdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsdUNBVUM7OztJQVRDLHNDQUFrQjs7SUFDbEIsaUNBQXlCOztJQUN6QixrQ0FBc0M7O0lBQ3RDLHFDQUFzQjs7SUFDdEIseUNBQTRCOztJQUM1Qix3Q0FBMkI7O0lBQzNCLHdDQUEyQjs7SUFDM0Isa0NBQXFCOztJQUNyQixpQ0FBZ0I7Ozs7O0FBR2xCLDZDQUlDOzs7SUFIQywyQ0FBcUI7O0lBQ3JCLHVDQUFpQjs7SUFDakIsc0NBQVk7Ozs7O0FBR2QsNkNBR0M7Ozs7O0lBRkMsZ0VBQW9COzs7O0lBQ3BCLGlFQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgTnpUcmVlTm9kZSB9IGZyb20gJy4vbnotdHJlZS1iYXNlLW5vZGUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBOekZvcm1hdEVtaXRFdmVudCB7XHJcbiAgZXZlbnROYW1lOiBzdHJpbmc7XHJcbiAgbm9kZT86IE56VHJlZU5vZGUgfCBudWxsO1xyXG4gIGV2ZW50PzogTW91c2VFdmVudCB8IERyYWdFdmVudCB8IG51bGw7XHJcbiAgZHJhZ05vZGU/OiBOelRyZWVOb2RlO1xyXG4gIHNlbGVjdGVkS2V5cz86IE56VHJlZU5vZGVbXTtcclxuICBjaGVja2VkS2V5cz86IE56VHJlZU5vZGVbXTtcclxuICBtYXRjaGVkS2V5cz86IE56VHJlZU5vZGVbXTtcclxuICBub2Rlcz86IE56VHJlZU5vZGVbXTtcclxuICBrZXlzPzogc3RyaW5nW107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTnpGb3JtYXRCZWZvcmVEcm9wRXZlbnQge1xyXG4gIGRyYWdOb2RlOiBOelRyZWVOb2RlO1xyXG4gIG5vZGU6IE56VHJlZU5vZGU7XHJcbiAgcG9zOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTnpUcmVlTm9kZUJhc2VDb21wb25lbnQge1xyXG4gIHNldENsYXNzTWFwKCk6IHZvaWQ7XHJcbiAgbWFya0ZvckNoZWNrKCk6IHZvaWQ7XHJcbn1cclxuIl19