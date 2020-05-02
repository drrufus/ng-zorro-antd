/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
import { AfterViewInit, ChangeDetectorRef, ElementRef, EmbeddedViewRef, EventEmitter, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { NzConfigService, NzDomEventService } from 'ng-zorro-antd/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { NzTextCopyComponent } from './nz-text-copy.component';
import { NzTextEditComponent } from './nz-text-edit.component';
import * as ɵngcc0 from '@angular/core';
export declare class NzTypographyComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    nzConfigService: NzConfigService;
    private host;
    private cdr;
    private viewContainerRef;
    private renderer;
    private platform;
    private i18n;
    private nzDomEventService;
    nzCopyable: boolean;
    nzEditable: boolean;
    nzDisabled: boolean;
    nzExpandable: boolean;
    nzEllipsis: boolean;
    nzContent: string;
    nzEllipsisRows: number;
    nzType: 'secondary' | 'warning' | 'danger' | undefined;
    nzCopyText: string | undefined;
    readonly nzContentChange: EventEmitter<string>;
    readonly nzCopy: EventEmitter<string>;
    readonly nzExpandChange: EventEmitter<void>;
    textEditRef: NzTextEditComponent;
    textCopyRef: NzTextCopyComponent;
    ellipsisContainer: ElementRef<HTMLSpanElement>;
    expandableBtn: ElementRef<HTMLSpanElement>;
    contentTemplate: TemplateRef<{
        content: string;
    }>;
    locale: any;
    editing: boolean;
    ellipsisText: string | undefined;
    cssEllipsis: boolean;
    isEllipsis: boolean;
    expanded: boolean;
    ellipsisStr: string;
    readonly canCssEllipsis: boolean;
    private viewInit;
    private rfaId;
    private destroy$;
    private windowResizeSubscription;
    readonly copyText: string;
    constructor(nzConfigService: NzConfigService, host: ElementRef<HTMLElement>, cdr: ChangeDetectorRef, viewContainerRef: ViewContainerRef, renderer: Renderer2, platform: Platform, i18n: NzI18nService, nzDomEventService: NzDomEventService);
    onTextCopy(text: string): void;
    onStartEditing(): void;
    onEndEditing(text: string): void;
    onExpand(): void;
    canUseCSSEllipsis(): boolean;
    renderOnNextFrame(): void;
    getOriginContentViewRef(): {
        viewRef: EmbeddedViewRef<{
            content: string;
        }>;
        removeView(): void;
    };
    syncEllipsis(): void;
    private renderAndSubscribeWindowResize;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzTypographyComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzTypographyComponent, "  nz-typography,  [nz-typography],  p[nz-paragraph],  span[nz-text],  h1[nz-title], h2[nz-title], h3[nz-title], h4[nz-title]  ", ["nzTypography"], { "nzCopyable": "nzCopyable"; "nzEditable": "nzEditable"; "nzDisabled": "nzDisabled"; "nzExpandable": "nzExpandable"; "nzEllipsis": "nzEllipsis"; "nzContent": "nzContent"; "nzEllipsisRows": "nzEllipsisRows"; "nzType": "nzType"; "nzCopyText": "nzCopyText"; }, { "nzContentChange": "nzContentChange"; "nzCopy": "nzCopy"; "nzExpandChange": "nzExpandChange"; }, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHlwb2dyYXBoeS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsibnotdHlwb2dyYXBoeS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFhQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0REEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiwgRWxlbWVudFJlZiwgRW1iZWRkZWRWaWV3UmVmLCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlcywgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpDb25maWdTZXJ2aWNlLCBOekRvbUV2ZW50U2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5pbXBvcnQgeyBOelRleHRDb3B5Q29tcG9uZW50IH0gZnJvbSAnLi9uei10ZXh0LWNvcHkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpUZXh0RWRpdENvbXBvbmVudCB9IGZyb20gJy4vbnotdGV4dC1lZGl0LmNvbXBvbmVudCc7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE56VHlwb2dyYXBoeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG4gICAgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2U7XHJcbiAgICBwcml2YXRlIGhvc3Q7XHJcbiAgICBwcml2YXRlIGNkcjtcclxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjtcclxuICAgIHByaXZhdGUgcmVuZGVyZXI7XHJcbiAgICBwcml2YXRlIHBsYXRmb3JtO1xyXG4gICAgcHJpdmF0ZSBpMThuO1xyXG4gICAgcHJpdmF0ZSBuekRvbUV2ZW50U2VydmljZTtcclxuICAgIG56Q29weWFibGU6IGJvb2xlYW47XHJcbiAgICBuekVkaXRhYmxlOiBib29sZWFuO1xyXG4gICAgbnpEaXNhYmxlZDogYm9vbGVhbjtcclxuICAgIG56RXhwYW5kYWJsZTogYm9vbGVhbjtcclxuICAgIG56RWxsaXBzaXM6IGJvb2xlYW47XHJcbiAgICBuekNvbnRlbnQ6IHN0cmluZztcclxuICAgIG56RWxsaXBzaXNSb3dzOiBudW1iZXI7XHJcbiAgICBuelR5cGU6ICdzZWNvbmRhcnknIHwgJ3dhcm5pbmcnIHwgJ2RhbmdlcicgfCB1bmRlZmluZWQ7XHJcbiAgICBuekNvcHlUZXh0OiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgICByZWFkb25seSBuekNvbnRlbnRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG4gICAgcmVhZG9ubHkgbnpDb3B5OiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuICAgIHJlYWRvbmx5IG56RXhwYW5kQ2hhbmdlOiBFdmVudEVtaXR0ZXI8dm9pZD47XHJcbiAgICB0ZXh0RWRpdFJlZjogTnpUZXh0RWRpdENvbXBvbmVudDtcclxuICAgIHRleHRDb3B5UmVmOiBOelRleHRDb3B5Q29tcG9uZW50O1xyXG4gICAgZWxsaXBzaXNDb250YWluZXI6IEVsZW1lbnRSZWY8SFRNTFNwYW5FbGVtZW50PjtcclxuICAgIGV4cGFuZGFibGVCdG46IEVsZW1lbnRSZWY8SFRNTFNwYW5FbGVtZW50PjtcclxuICAgIGNvbnRlbnRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8e1xyXG4gICAgICAgIGNvbnRlbnQ6IHN0cmluZztcclxuICAgIH0+O1xyXG4gICAgbG9jYWxlOiBhbnk7XHJcbiAgICBlZGl0aW5nOiBib29sZWFuO1xyXG4gICAgZWxsaXBzaXNUZXh0OiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgICBjc3NFbGxpcHNpczogYm9vbGVhbjtcclxuICAgIGlzRWxsaXBzaXM6IGJvb2xlYW47XHJcbiAgICBleHBhbmRlZDogYm9vbGVhbjtcclxuICAgIGVsbGlwc2lzU3RyOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBjYW5Dc3NFbGxpcHNpczogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgdmlld0luaXQ7XHJcbiAgICBwcml2YXRlIHJmYUlkO1xyXG4gICAgcHJpdmF0ZSBkZXN0cm95JDtcclxuICAgIHByaXZhdGUgd2luZG93UmVzaXplU3Vic2NyaXB0aW9uO1xyXG4gICAgcmVhZG9ubHkgY29weVRleHQ6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLCBob3N0OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PiwgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcGxhdGZvcm06IFBsYXRmb3JtLCBpMThuOiBOekkxOG5TZXJ2aWNlLCBuekRvbUV2ZW50U2VydmljZTogTnpEb21FdmVudFNlcnZpY2UpO1xyXG4gICAgb25UZXh0Q29weSh0ZXh0OiBzdHJpbmcpOiB2b2lkO1xyXG4gICAgb25TdGFydEVkaXRpbmcoKTogdm9pZDtcclxuICAgIG9uRW5kRWRpdGluZyh0ZXh0OiBzdHJpbmcpOiB2b2lkO1xyXG4gICAgb25FeHBhbmQoKTogdm9pZDtcclxuICAgIGNhblVzZUNTU0VsbGlwc2lzKCk6IGJvb2xlYW47XHJcbiAgICByZW5kZXJPbk5leHRGcmFtZSgpOiB2b2lkO1xyXG4gICAgZ2V0T3JpZ2luQ29udGVudFZpZXdSZWYoKToge1xyXG4gICAgICAgIHZpZXdSZWY6IEVtYmVkZGVkVmlld1JlZjx7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHN0cmluZztcclxuICAgICAgICB9PjtcclxuICAgICAgICByZW1vdmVWaWV3KCk6IHZvaWQ7XHJcbiAgICB9O1xyXG4gICAgc3luY0VsbGlwc2lzKCk6IHZvaWQ7XHJcbiAgICBwcml2YXRlIHJlbmRlckFuZFN1YnNjcmliZVdpbmRvd1Jlc2l6ZTtcclxuICAgIG5nT25Jbml0KCk6IHZvaWQ7XHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZDtcclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcclxufVxyXG4iXX0=