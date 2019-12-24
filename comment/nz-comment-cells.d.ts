/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CdkPortalOutlet, TemplatePortal } from '@angular/cdk/portal';
import { AfterViewInit, ComponentFactoryResolver, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NzCommentAvatarDirective {
    static ɵfac: i0.ɵɵFactoryDef<NzCommentAvatarDirective>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<NzCommentAvatarDirective, "nz-avatar[nz-comment-avatar]", ["nzCommentAvatar"], {}, {}, never>;
}
export declare class NzCommentContentDirective {
    static ɵfac: i0.ɵɵFactoryDef<NzCommentContentDirective>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<NzCommentContentDirective, "nz-comment-content, [nz-comment-content]", ["nzCommentContent"], {}, {}, never>;
}
export declare class NzCommentActionHostDirective extends CdkPortalOutlet implements OnInit, OnDestroy, AfterViewInit {
    nzCommentActionHost: TemplatePortal | null;
    constructor(componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<NzCommentActionHostDirective>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<NzCommentActionHostDirective, "[nzCommentActionHost]", ["nzCommentActionHost"], { 'nzCommentActionHost': "nzCommentActionHost" }, {}, never>;
}
export declare class NzCommentActionComponent implements OnInit {
    private viewContainerRef;
    implicitContent: TemplateRef<void>;
    private contentPortal;
    readonly content: TemplatePortal | null;
    constructor(viewContainerRef: ViewContainerRef);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<NzCommentActionComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NzCommentActionComponent, "nz-comment-action", ["nzCommentAction"], {}, {}, never>;
}
