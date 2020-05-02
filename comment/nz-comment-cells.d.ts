/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CdkPortalOutlet, TemplatePortal } from '@angular/cdk/portal';
import { AfterViewInit, ComponentFactoryResolver, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class NzCommentAvatarDirective {
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzCommentAvatarDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NzCommentAvatarDirective, "nz-avatar[nz-comment-avatar]", ["nzCommentAvatar"], {}, {}, never>;
}
export declare class NzCommentContentDirective {
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzCommentContentDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NzCommentContentDirective, "nz-comment-content, [nz-comment-content]", ["nzCommentContent"], {}, {}, never>;
}
export declare class NzCommentActionHostDirective extends CdkPortalOutlet implements OnInit, OnDestroy, AfterViewInit {
    nzCommentActionHost: TemplatePortal | null;
    constructor(componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzCommentActionHostDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NzCommentActionHostDirective, "[nzCommentActionHost]", ["nzCommentActionHost"], { "nzCommentActionHost": "nzCommentActionHost"; }, {}, never>;
}
export declare class NzCommentActionComponent implements OnInit {
    private viewContainerRef;
    implicitContent: TemplateRef<void>;
    private contentPortal;
    readonly content: TemplatePortal | null;
    constructor(viewContainerRef: ViewContainerRef);
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzCommentActionComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzCommentActionComponent, "nz-comment-action", ["nzCommentAction"], {}, {}, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29tbWVudC1jZWxscy5kLnRzIiwic291cmNlcyI6WyJuei1jb21tZW50LWNlbGxzLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFTQTs7O0FBQ0E7Ozs7QUFFQTs7Ozs7Ozs7O0FBT0E7Ozs7Ozs7Ozs7QUFRQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5pbXBvcnQgeyBDZGtQb3J0YWxPdXRsZXQsIFRlbXBsYXRlUG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XHJcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgT25EZXN0cm95LCBPbkluaXQsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE56Q29tbWVudEF2YXRhckRpcmVjdGl2ZSB7XHJcbn1cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTnpDb21tZW50Q29udGVudERpcmVjdGl2ZSB7XHJcbn1cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTnpDb21tZW50QWN0aW9uSG9zdERpcmVjdGl2ZSBleHRlbmRzIENka1BvcnRhbE91dGxldCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcclxuICAgIG56Q29tbWVudEFjdGlvbkhvc3Q6IFRlbXBsYXRlUG9ydGFsIHwgbnVsbDtcclxuICAgIGNvbnN0cnVjdG9yKGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKTtcclxuICAgIG5nT25Jbml0KCk6IHZvaWQ7XHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xyXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQ7XHJcbn1cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTnpDb21tZW50QWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjtcclxuICAgIGltcGxpY2l0Q29udGVudDogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgICBwcml2YXRlIGNvbnRlbnRQb3J0YWw7XHJcbiAgICByZWFkb25seSBjb250ZW50OiBUZW1wbGF0ZVBvcnRhbCB8IG51bGw7XHJcbiAgICBjb25zdHJ1Y3Rvcih2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKTtcclxuICAgIG5nT25Jbml0KCk6IHZvaWQ7XHJcbn1cclxuIl19