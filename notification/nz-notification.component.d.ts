/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef } from '@angular/core';
import { NzMessageComponent } from 'ng-zorro-antd/message';
import { NzNotificationContainerComponent } from './nz-notification-container.component';
import { NzNotificationDataFilled } from './nz-notification.definitions';
import * as ɵngcc0 from '@angular/core';
export declare class NzNotificationComponent extends NzMessageComponent {
    private container;
    protected cdr: ChangeDetectorRef;
    nzMessage: NzNotificationDataFilled;
    constructor(container: NzNotificationContainerComponent, cdr: ChangeDetectorRef);
    close(): void;
    readonly state: string | undefined;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzNotificationComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzNotificationComponent, "nz-notification", ["nzNotification"], { "nzMessage": "nzMessage"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbm90aWZpY2F0aW9uLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJuei1ub3RpZmljYXRpb24uY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQVdBOzs7Ozs7Ozs7QUFPQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOek1lc3NhZ2VDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL21lc3NhZ2UnO1xyXG5pbXBvcnQgeyBOek5vdGlmaWNhdGlvbkNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vbnotbm90aWZpY2F0aW9uLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOek5vdGlmaWNhdGlvbkRhdGFGaWxsZWQgfSBmcm9tICcuL256LW5vdGlmaWNhdGlvbi5kZWZpbml0aW9ucyc7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE56Tm90aWZpY2F0aW9uQ29tcG9uZW50IGV4dGVuZHMgTnpNZXNzYWdlQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgY29udGFpbmVyO1xyXG4gICAgcHJvdGVjdGVkIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWY7XHJcbiAgICBuek1lc3NhZ2U6IE56Tm90aWZpY2F0aW9uRGF0YUZpbGxlZDtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogTnpOb3RpZmljYXRpb25Db250YWluZXJDb21wb25lbnQsIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpO1xyXG4gICAgY2xvc2UoKTogdm9pZDtcclxuICAgIHJlYWRvbmx5IHN0YXRlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbn1cclxuIl19