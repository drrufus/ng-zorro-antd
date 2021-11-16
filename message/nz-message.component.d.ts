/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { NzMessageContainerComponent } from './nz-message-container.component';
import { NzMessageDataFilled, NzMessageDataOptions } from './nz-message.definitions';
import * as ɵngcc0 from '@angular/core';
export declare class NzMessageComponent implements OnInit, OnDestroy {
    private _messageContainer;
    protected cdr: ChangeDetectorRef;
    nzMessage: NzMessageDataFilled;
    nzIndex: number;
    protected _options: Required<NzMessageDataOptions>;
    private _autoErase;
    private _eraseTimer;
    private _eraseTimingStart;
    private _eraseTTL;
    constructor(_messageContainer: NzMessageContainerComponent, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onEnter(): void;
    onLeave(): void;
    protected _destroy(userAction?: boolean): void;
    private _initErase;
    private _updateTTL;
    private _startEraseTimeout;
    private _clearEraseTimeout;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzMessageComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzMessageComponent, "nz-message", ["nzMessage"], { "nzMessage": "nzMessage"; "nzIndex": "nzIndex"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVzc2FnZS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsibnotbWVzc2FnZS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7QUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9uei1tZXNzYWdlLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOek1lc3NhZ2VEYXRhRmlsbGVkLCBOek1lc3NhZ2VEYXRhT3B0aW9ucyB9IGZyb20gJy4vbnotbWVzc2FnZS5kZWZpbml0aW9ucyc7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE56TWVzc2FnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAgIHByaXZhdGUgX21lc3NhZ2VDb250YWluZXI7XHJcbiAgICBwcm90ZWN0ZWQgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZjtcclxuICAgIG56TWVzc2FnZTogTnpNZXNzYWdlRGF0YUZpbGxlZDtcclxuICAgIG56SW5kZXg6IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBfb3B0aW9uczogUmVxdWlyZWQ8TnpNZXNzYWdlRGF0YU9wdGlvbnM+O1xyXG4gICAgcHJpdmF0ZSBfYXV0b0VyYXNlO1xyXG4gICAgcHJpdmF0ZSBfZXJhc2VUaW1lcjtcclxuICAgIHByaXZhdGUgX2VyYXNlVGltaW5nU3RhcnQ7XHJcbiAgICBwcml2YXRlIF9lcmFzZVRUTDtcclxuICAgIGNvbnN0cnVjdG9yKF9tZXNzYWdlQ29udGFpbmVyOiBOek1lc3NhZ2VDb250YWluZXJDb21wb25lbnQsIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpO1xyXG4gICAgbmdPbkluaXQoKTogdm9pZDtcclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XHJcbiAgICBvbkVudGVyKCk6IHZvaWQ7XHJcbiAgICBvbkxlYXZlKCk6IHZvaWQ7XHJcbiAgICBwcm90ZWN0ZWQgX2Rlc3Ryb3kodXNlckFjdGlvbj86IGJvb2xlYW4pOiB2b2lkO1xyXG4gICAgcHJpdmF0ZSBfaW5pdEVyYXNlO1xyXG4gICAgcHJpdmF0ZSBfdXBkYXRlVFRMO1xyXG4gICAgcHJpdmF0ZSBfc3RhcnRFcmFzZVRpbWVvdXQ7XHJcbiAgICBwcml2YXRlIF9jbGVhckVyYXNlVGltZW91dDtcclxufVxyXG4iXX0=