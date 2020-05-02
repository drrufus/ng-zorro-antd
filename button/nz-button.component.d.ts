/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ContentObserver } from '@angular/cdk/observers';
import { AfterContentInit, ChangeDetectorRef, ElementRef, NgZone, OnChanges, OnDestroy, OnInit, QueryList, Renderer2, SimpleChanges } from '@angular/core';
import { NzConfigService, NzSizeLDSType, NzUpdateHostClassService, NzWaveConfig, NzWaveDirective } from 'ng-zorro-antd/core';
import * as ɵngcc0 from '@angular/core';
export declare type NzButtonType = 'primary' | 'dashed' | 'danger' | 'default' | 'link';
export declare type NzButtonShape = 'circle' | 'round' | null;
export declare class NzButtonComponent implements AfterContentInit, OnInit, OnDestroy, OnChanges {
    private elementRef;
    private cdr;
    private renderer;
    private contentObserver;
    private nzUpdateHostClassService;
    private ngZone;
    nzConfigService: NzConfigService;
    private waveConfig;
    private animationType;
    contentElement: ElementRef;
    listOfIconElement: QueryList<ElementRef>;
    nzWave: NzWaveDirective;
    nzBlock: boolean;
    nzGhost: boolean;
    nzSearch: boolean;
    nzLoading: boolean;
    nzType: NzButtonType;
    nzShape: NzButtonShape;
    nzSize: NzSizeLDSType;
    readonly el: HTMLElement;
    isInDropdown: boolean;
    private iconElement;
    private iconOnly;
    private destroy$;
    /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289 */
    setClassMap(): void;
    updateIconDisplay(value: boolean): void;
    checkContent(): void;
    moveIcon(): void;
    constructor(elementRef: ElementRef, cdr: ChangeDetectorRef, renderer: Renderer2, contentObserver: ContentObserver, nzUpdateHostClassService: NzUpdateHostClassService, ngZone: NgZone, nzConfigService: NzConfigService, waveConfig: NzWaveConfig, animationType: string);
    ngAfterContentInit(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzButtonComponent, [null, null, null, null, null, null, null, { optional: true; }, { optional: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzButtonComponent, "[nz-button]", ["nzButton"], { "nzBlock": "nzBlock"; "nzGhost": "nzGhost"; "nzSearch": "nzSearch"; "nzLoading": "nzLoading"; "nzType": "nzType"; "nzShape": "nzShape"; "nzSize": "nzSize"; }, {}, ["listOfIconElement"], ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYnV0dG9uLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJuei1idXR0b24uY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0FBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5pbXBvcnQgeyBDb250ZW50T2JzZXJ2ZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvb2JzZXJ2ZXJzJztcclxuaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEVsZW1lbnRSZWYsIE5nWm9uZSwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgUXVlcnlMaXN0LCBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpDb25maWdTZXJ2aWNlLCBOelNpemVMRFNUeXBlLCBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsIE56V2F2ZUNvbmZpZywgTnpXYXZlRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuZXhwb3J0IGRlY2xhcmUgdHlwZSBOekJ1dHRvblR5cGUgPSAncHJpbWFyeScgfCAnZGFzaGVkJyB8ICdkYW5nZXInIHwgJ2RlZmF1bHQnIHwgJ2xpbmsnO1xyXG5leHBvcnQgZGVjbGFyZSB0eXBlIE56QnV0dG9uU2hhcGUgPSAnY2lyY2xlJyB8ICdyb3VuZCcgfCBudWxsO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOekJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmO1xyXG4gICAgcHJpdmF0ZSBjZHI7XHJcbiAgICBwcml2YXRlIHJlbmRlcmVyO1xyXG4gICAgcHJpdmF0ZSBjb250ZW50T2JzZXJ2ZXI7XHJcbiAgICBwcml2YXRlIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTtcclxuICAgIHByaXZhdGUgbmdab25lO1xyXG4gICAgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2U7XHJcbiAgICBwcml2YXRlIHdhdmVDb25maWc7XHJcbiAgICBwcml2YXRlIGFuaW1hdGlvblR5cGU7XHJcbiAgICBjb250ZW50RWxlbWVudDogRWxlbWVudFJlZjtcclxuICAgIGxpc3RPZkljb25FbGVtZW50OiBRdWVyeUxpc3Q8RWxlbWVudFJlZj47XHJcbiAgICBueldhdmU6IE56V2F2ZURpcmVjdGl2ZTtcclxuICAgIG56QmxvY2s6IGJvb2xlYW47XHJcbiAgICBuekdob3N0OiBib29sZWFuO1xyXG4gICAgbnpTZWFyY2g6IGJvb2xlYW47XHJcbiAgICBuekxvYWRpbmc6IGJvb2xlYW47XHJcbiAgICBuelR5cGU6IE56QnV0dG9uVHlwZTtcclxuICAgIG56U2hhcGU6IE56QnV0dG9uU2hhcGU7XHJcbiAgICBuelNpemU6IE56U2l6ZUxEU1R5cGU7XHJcbiAgICByZWFkb25seSBlbDogSFRNTEVsZW1lbnQ7XHJcbiAgICBpc0luRHJvcGRvd246IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIGljb25FbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBpY29uT25seTtcclxuICAgIHByaXZhdGUgZGVzdHJveSQ7XHJcbiAgICAvKiogdGVtcCBzb2x1dGlvbiBzaW5jZSBubyBtZXRob2QgYWRkIGNsYXNzTWFwIHRvIGhvc3QgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvNzI4OSAqL1xyXG4gICAgc2V0Q2xhc3NNYXAoKTogdm9pZDtcclxuICAgIHVwZGF0ZUljb25EaXNwbGF5KHZhbHVlOiBib29sZWFuKTogdm9pZDtcclxuICAgIGNoZWNrQ29udGVudCgpOiB2b2lkO1xyXG4gICAgbW92ZUljb24oKTogdm9pZDtcclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIGNvbnRlbnRPYnNlcnZlcjogQ29udGVudE9ic2VydmVyLCBuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSwgbmdab25lOiBOZ1pvbmUsIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLCB3YXZlQ29uZmlnOiBOeldhdmVDb25maWcsIGFuaW1hdGlvblR5cGU6IHN0cmluZyk7XHJcbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZDtcclxuICAgIG5nT25Jbml0KCk6IHZvaWQ7XHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XHJcbn1cclxuIl19