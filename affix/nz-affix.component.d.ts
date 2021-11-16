/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
import { AfterViewInit, ElementRef, EventEmitter, NgZone, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { NzConfigService, NzScrollService } from 'ng-zorro-antd/core';
import * as ɵngcc0 from '@angular/core';
interface SimpleRect {
    top: number;
    left: number;
    width?: number;
    height?: number;
    bottom?: number;
}
export declare class NzAffixComponent implements AfterViewInit, OnChanges, OnDestroy {
    nzConfigService: NzConfigService;
    private scrollSrv;
    private ngZone;
    private platform;
    private fixedEl;
    nzTarget: string | Element | Window;
    nzOffsetTop: null | number;
    nzOffsetBottom: null | number;
    readonly nzChange: EventEmitter<boolean>;
    private readonly placeholderNode;
    private affixStyle?;
    private placeholderStyle?;
    private scroll$;
    private timeout?;
    private document;
    private readonly target;
    constructor(el: ElementRef, doc: any, // tslint:disable-line no-any
    nzConfigService: NzConfigService, scrollSrv: NzScrollService, ngZone: NgZone, platform: Platform);
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    private registerListeners;
    private removeListeners;
    getOffset(element: Element, target: Element | Window | undefined): SimpleRect;
    private getTargetRect;
    private setAffixStyle;
    private setPlaceholderStyle;
    private syncPlaceholderStyle;
    updatePosition(e: Event): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzAffixComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzAffixComponent, "nz-affix", ["nzAffix"], { "nzTarget": "nzTarget"; "nzOffsetTop": "nzOffsetTop"; "nzOffsetBottom": "nzOffsetBottom"; }, { "nzChange": "nzChange"; }, never, ["*"]>;
}
export {};

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYWZmaXguY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbIm56LWFmZml4LmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztBQVVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE5nWm9uZSwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpDb25maWdTZXJ2aWNlLCBOelNjcm9sbFNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbnRlcmZhY2UgU2ltcGxlUmVjdCB7XHJcbiAgICB0b3A6IG51bWJlcjtcclxuICAgIGxlZnQ6IG51bWJlcjtcclxuICAgIHdpZHRoPzogbnVtYmVyO1xyXG4gICAgaGVpZ2h0PzogbnVtYmVyO1xyXG4gICAgYm90dG9tPzogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE56QWZmaXhDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgICBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZTtcclxuICAgIHByaXZhdGUgc2Nyb2xsU3J2O1xyXG4gICAgcHJpdmF0ZSBuZ1pvbmU7XHJcbiAgICBwcml2YXRlIHBsYXRmb3JtO1xyXG4gICAgcHJpdmF0ZSBmaXhlZEVsO1xyXG4gICAgbnpUYXJnZXQ6IHN0cmluZyB8IEVsZW1lbnQgfCBXaW5kb3c7XHJcbiAgICBuek9mZnNldFRvcDogbnVsbCB8IG51bWJlcjtcclxuICAgIG56T2Zmc2V0Qm90dG9tOiBudWxsIHwgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbnpDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgcGxhY2Vob2xkZXJOb2RlO1xyXG4gICAgcHJpdmF0ZSBhZmZpeFN0eWxlPztcclxuICAgIHByaXZhdGUgcGxhY2Vob2xkZXJTdHlsZT87XHJcbiAgICBwcml2YXRlIHNjcm9sbCQ7XHJcbiAgICBwcml2YXRlIHRpbWVvdXQ/O1xyXG4gICAgcHJpdmF0ZSBkb2N1bWVudDtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgdGFyZ2V0O1xyXG4gICAgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYsIGRvYzogYW55LCAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lIG5vLWFueVxyXG4gICAgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsIHNjcm9sbFNydjogTnpTY3JvbGxTZXJ2aWNlLCBuZ1pvbmU6IE5nWm9uZSwgcGxhdGZvcm06IFBsYXRmb3JtKTtcclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xyXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQ7XHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xyXG4gICAgcHJpdmF0ZSByZWdpc3Rlckxpc3RlbmVycztcclxuICAgIHByaXZhdGUgcmVtb3ZlTGlzdGVuZXJzO1xyXG4gICAgZ2V0T2Zmc2V0KGVsZW1lbnQ6IEVsZW1lbnQsIHRhcmdldDogRWxlbWVudCB8IFdpbmRvdyB8IHVuZGVmaW5lZCk6IFNpbXBsZVJlY3Q7XHJcbiAgICBwcml2YXRlIGdldFRhcmdldFJlY3Q7XHJcbiAgICBwcml2YXRlIHNldEFmZml4U3R5bGU7XHJcbiAgICBwcml2YXRlIHNldFBsYWNlaG9sZGVyU3R5bGU7XHJcbiAgICBwcml2YXRlIHN5bmNQbGFjZWhvbGRlclN0eWxlO1xyXG4gICAgdXBkYXRlUG9zaXRpb24oZTogRXZlbnQpOiB2b2lkO1xyXG59XHJcbmV4cG9ydCB7fTtcclxuIl19