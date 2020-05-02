/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ConnectionPositionPair, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { Platform } from '@angular/cdk/platform';
import { AfterViewInit, ElementRef, EventEmitter, OnChanges, OnDestroy, Renderer2, SimpleChanges, ViewContainerRef } from '@angular/core';
import { NzButtonComponent, NzButtonGroupComponent } from 'ng-zorro-antd/button';
import { Observable } from 'rxjs';
import { NzDropdownMenuComponent, NzPlacementType } from './nz-dropdown-menu.component';
import * as ɵngcc0 from '@angular/core';
export declare class NzDropDownDirective implements AfterViewInit, OnDestroy, OnChanges {
    elementRef: ElementRef;
    private renderer;
    private overlay;
    private platform;
    private nzButtonComponent;
    private nzButtonGroupComponent;
    private viewContainerRef;
    private portal;
    private overlayRef;
    private destroy$;
    private triggerWidth;
    private el;
    private dropdownOpen;
    private positionStrategy;
    private positions;
    private positionSubscription;
    private overlaySubscription;
    readonly hover$: Observable<boolean>;
    readonly $click: Observable<boolean>;
    nzDropdownMenu: NzDropdownMenuComponent;
    nzTrigger: 'click' | 'hover';
    nzMatchWidthElement: ElementRef;
    nzBackdrop: boolean;
    nzClickHide: boolean;
    nzDisabled: boolean;
    nzVisible: boolean;
    nzTableFilter: boolean;
    nzOverlayClassName: string;
    nzOverlayStyle: {
        [key: string]: string;
    };
    nzPlacement: NzPlacementType;
    readonly nzVisibleChange: EventEmitter<boolean>;
    setDisabled(disabled: boolean): void;
    private getOverlayConfig;
    private createOverlay;
    updateOverlayConfig(overlayConfig: OverlayConfig): OverlayConfig;
    dispose(): void;
    private subscribeToPositions;
    private subscribeOverlayEvent;
    private getPortal;
    private openMenu;
    private closeMenu;
    private setPosition;
    private updatePositionStrategy;
    private setTriggerWidth;
    initActionSubscribe(): void;
    updateOverlayByVisible(): void;
    updateDisabledState(): void;
    regeneratePosition(placement: NzPlacementType, positions: ConnectionPositionPair[]): ConnectionPositionPair[];
    constructor(elementRef: ElementRef, renderer: Renderer2, overlay: Overlay, platform: Platform, nzButtonComponent: NzButtonComponent, nzButtonGroupComponent: NzButtonGroupComponent, viewContainerRef: ViewContainerRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzDropDownDirective, [null, null, null, null, { optional: true; host: true; }, { optional: true; }, null]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NzDropDownDirective, "[nz-dropdown]", ["nzDropdown"], { "nzTrigger": "nzTrigger"; "nzBackdrop": "nzBackdrop"; "nzClickHide": "nzClickHide"; "nzDisabled": "nzDisabled"; "nzVisible": "nzVisible"; "nzTableFilter": "nzTableFilter"; "nzOverlayClassName": "nzOverlayClassName"; "nzOverlayStyle": "nzOverlayStyle"; "nzPlacement": "nzPlacement"; "nzDropdownMenu": "nzDropdownMenu"; "nzMatchWidthElement": "nzMatchWidthElement"; }, { "nzVisibleChange": "nzVisibleChange"; }, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJvcGRvd24uZGlyZWN0aXZlLmQudHMiLCJzb3VyY2VzIjpbIm56LWRyb3Bkb3duLmRpcmVjdGl2ZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztBQWFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgQ29ubmVjdGlvblBvc2l0aW9uUGFpciwgT3ZlcmxheSwgT3ZlcmxheUNvbmZpZyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXMsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpCdXR0b25Db21wb25lbnQsIE56QnV0dG9uR3JvdXBDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL2J1dHRvbic7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTnpEcm9wZG93bk1lbnVDb21wb25lbnQsIE56UGxhY2VtZW50VHlwZSB9IGZyb20gJy4vbnotZHJvcGRvd24tbWVudS5jb21wb25lbnQnO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOekRyb3BEb3duRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcclxuICAgIHByaXZhdGUgcmVuZGVyZXI7XHJcbiAgICBwcml2YXRlIG92ZXJsYXk7XHJcbiAgICBwcml2YXRlIHBsYXRmb3JtO1xyXG4gICAgcHJpdmF0ZSBuekJ1dHRvbkNvbXBvbmVudDtcclxuICAgIHByaXZhdGUgbnpCdXR0b25Hcm91cENvbXBvbmVudDtcclxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjtcclxuICAgIHByaXZhdGUgcG9ydGFsO1xyXG4gICAgcHJpdmF0ZSBvdmVybGF5UmVmO1xyXG4gICAgcHJpdmF0ZSBkZXN0cm95JDtcclxuICAgIHByaXZhdGUgdHJpZ2dlcldpZHRoO1xyXG4gICAgcHJpdmF0ZSBlbDtcclxuICAgIHByaXZhdGUgZHJvcGRvd25PcGVuO1xyXG4gICAgcHJpdmF0ZSBwb3NpdGlvblN0cmF0ZWd5O1xyXG4gICAgcHJpdmF0ZSBwb3NpdGlvbnM7XHJcbiAgICBwcml2YXRlIHBvc2l0aW9uU3Vic2NyaXB0aW9uO1xyXG4gICAgcHJpdmF0ZSBvdmVybGF5U3Vic2NyaXB0aW9uO1xyXG4gICAgcmVhZG9ubHkgaG92ZXIkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG4gICAgcmVhZG9ubHkgJGNsaWNrOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG4gICAgbnpEcm9wZG93bk1lbnU6IE56RHJvcGRvd25NZW51Q29tcG9uZW50O1xyXG4gICAgbnpUcmlnZ2VyOiAnY2xpY2snIHwgJ2hvdmVyJztcclxuICAgIG56TWF0Y2hXaWR0aEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgICBuekJhY2tkcm9wOiBib29sZWFuO1xyXG4gICAgbnpDbGlja0hpZGU6IGJvb2xlYW47XHJcbiAgICBuekRpc2FibGVkOiBib29sZWFuO1xyXG4gICAgbnpWaXNpYmxlOiBib29sZWFuO1xyXG4gICAgbnpUYWJsZUZpbHRlcjogYm9vbGVhbjtcclxuICAgIG56T3ZlcmxheUNsYXNzTmFtZTogc3RyaW5nO1xyXG4gICAgbnpPdmVybGF5U3R5bGU6IHtcclxuICAgICAgICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XHJcbiAgICB9O1xyXG4gICAgbnpQbGFjZW1lbnQ6IE56UGxhY2VtZW50VHlwZTtcclxuICAgIHJlYWRvbmx5IG56VmlzaWJsZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG4gICAgc2V0RGlzYWJsZWQoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkO1xyXG4gICAgcHJpdmF0ZSBnZXRPdmVybGF5Q29uZmlnO1xyXG4gICAgcHJpdmF0ZSBjcmVhdGVPdmVybGF5O1xyXG4gICAgdXBkYXRlT3ZlcmxheUNvbmZpZyhvdmVybGF5Q29uZmlnOiBPdmVybGF5Q29uZmlnKTogT3ZlcmxheUNvbmZpZztcclxuICAgIGRpc3Bvc2UoKTogdm9pZDtcclxuICAgIHByaXZhdGUgc3Vic2NyaWJlVG9Qb3NpdGlvbnM7XHJcbiAgICBwcml2YXRlIHN1YnNjcmliZU92ZXJsYXlFdmVudDtcclxuICAgIHByaXZhdGUgZ2V0UG9ydGFsO1xyXG4gICAgcHJpdmF0ZSBvcGVuTWVudTtcclxuICAgIHByaXZhdGUgY2xvc2VNZW51O1xyXG4gICAgcHJpdmF0ZSBzZXRQb3NpdGlvbjtcclxuICAgIHByaXZhdGUgdXBkYXRlUG9zaXRpb25TdHJhdGVneTtcclxuICAgIHByaXZhdGUgc2V0VHJpZ2dlcldpZHRoO1xyXG4gICAgaW5pdEFjdGlvblN1YnNjcmliZSgpOiB2b2lkO1xyXG4gICAgdXBkYXRlT3ZlcmxheUJ5VmlzaWJsZSgpOiB2b2lkO1xyXG4gICAgdXBkYXRlRGlzYWJsZWRTdGF0ZSgpOiB2b2lkO1xyXG4gICAgcmVnZW5lcmF0ZVBvc2l0aW9uKHBsYWNlbWVudDogTnpQbGFjZW1lbnRUeXBlLCBwb3NpdGlvbnM6IENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXSk6IENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXTtcclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG92ZXJsYXk6IE92ZXJsYXksIHBsYXRmb3JtOiBQbGF0Zm9ybSwgbnpCdXR0b25Db21wb25lbnQ6IE56QnV0dG9uQ29tcG9uZW50LCBuekJ1dHRvbkdyb3VwQ29tcG9uZW50OiBOekJ1dHRvbkdyb3VwQ29tcG9uZW50LCB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKTtcclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkO1xyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xyXG59XHJcbiJdfQ==