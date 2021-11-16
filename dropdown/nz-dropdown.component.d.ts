/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ConnectedOverlayPositionChange, ConnectionPositionPair } from '@angular/cdk/overlay';
import { AfterContentInit, ChangeDetectorRef, EventEmitter, Injector, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { NzMenuBaseService, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { NzDropDownDirective } from './nz-dropdown.directive';
import { NzMenuDropdownService } from './nz-menu-dropdown.service';
import * as ɵngcc0 from '@angular/core';
export declare type NzPlacement = 'bottomLeft' | 'bottomCenter' | 'bottomRight' | 'topLeft' | 'topCenter' | 'topRight';
export declare function menuServiceFactory(injector: Injector): NzMenuBaseService;
export declare class NzDropDownComponent implements OnDestroy, AfterContentInit, OnChanges {
    protected cdr: ChangeDetectorRef;
    private nzMenuDropdownService;
    noAnimation?: NzNoAnimationDirective | undefined;
    triggerWidth: number;
    dropDownPosition: 'top' | 'center' | 'bottom';
    positions: ConnectionPositionPair[];
    visible$: Subject<boolean>;
    private destroy$;
    nzDropDownDirective: NzDropDownDirective;
    nzTrigger: 'click' | 'hover';
    nzOverlayClassName: string;
    nzOverlayStyle: {
        [key: string]: string;
    };
    nzPlacement: NzPlacement;
    nzClickHide: boolean;
    nzDisabled: boolean;
    nzVisible: boolean;
    nzTableFilter: boolean;
    readonly nzVisibleChange: EventEmitter<boolean>;
    setVisibleStateWhen(visible: boolean, trigger?: 'click' | 'hover' | 'all'): void;
    onPositionChange(position: ConnectedOverlayPositionChange): void;
    startSubscribe(observable$: Observable<boolean>): void;
    updateDisabledState(): void;
    constructor(cdr: ChangeDetectorRef, nzMenuDropdownService: NzMenuDropdownService, noAnimation?: NzNoAnimationDirective | undefined);
    ngOnDestroy(): void;
    ngAfterContentInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzDropDownComponent, [null, null, { optional: true; host: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzDropDownComponent, "nz-dropdown", ["nzDropdown"], { "nzTrigger": "nzTrigger"; "nzOverlayClassName": "nzOverlayClassName"; "nzOverlayStyle": "nzOverlayStyle"; "nzPlacement": "nzPlacement"; "nzClickHide": "nzClickHide"; "nzDisabled": "nzDisabled"; "nzVisible": "nzVisible"; "nzTableFilter": "nzTableFilter"; }, { "nzVisibleChange": "nzVisibleChange"; }, ["nzDropDownDirective"], ["[nz-dropdown]", "[nz-menu]", "*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJvcGRvd24uY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbIm56LWRyb3Bkb3duLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztBQWFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErQkEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlLCBDb25uZWN0aW9uUG9zaXRpb25QYWlyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiwgRXZlbnRFbWl0dGVyLCBJbmplY3RvciwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBOek1lbnVCYXNlU2VydmljZSwgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56RHJvcERvd25EaXJlY3RpdmUgfSBmcm9tICcuL256LWRyb3Bkb3duLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE56TWVudURyb3Bkb3duU2VydmljZSB9IGZyb20gJy4vbnotbWVudS1kcm9wZG93bi5zZXJ2aWNlJztcclxuZXhwb3J0IGRlY2xhcmUgdHlwZSBOelBsYWNlbWVudCA9ICdib3R0b21MZWZ0JyB8ICdib3R0b21DZW50ZXInIHwgJ2JvdHRvbVJpZ2h0JyB8ICd0b3BMZWZ0JyB8ICd0b3BDZW50ZXInIHwgJ3RvcFJpZ2h0JztcclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gbWVudVNlcnZpY2VGYWN0b3J5KGluamVjdG9yOiBJbmplY3Rvcik6IE56TWVudUJhc2VTZXJ2aWNlO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOekRyb3BEb3duQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMge1xyXG4gICAgcHJvdGVjdGVkIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWY7XHJcbiAgICBwcml2YXRlIG56TWVudURyb3Bkb3duU2VydmljZTtcclxuICAgIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSB8IHVuZGVmaW5lZDtcclxuICAgIHRyaWdnZXJXaWR0aDogbnVtYmVyO1xyXG4gICAgZHJvcERvd25Qb3NpdGlvbjogJ3RvcCcgfCAnY2VudGVyJyB8ICdib3R0b20nO1xyXG4gICAgcG9zaXRpb25zOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyW107XHJcbiAgICB2aXNpYmxlJDogU3ViamVjdDxib29sZWFuPjtcclxuICAgIHByaXZhdGUgZGVzdHJveSQ7XHJcbiAgICBuekRyb3BEb3duRGlyZWN0aXZlOiBOekRyb3BEb3duRGlyZWN0aXZlO1xyXG4gICAgbnpUcmlnZ2VyOiAnY2xpY2snIHwgJ2hvdmVyJztcclxuICAgIG56T3ZlcmxheUNsYXNzTmFtZTogc3RyaW5nO1xyXG4gICAgbnpPdmVybGF5U3R5bGU6IHtcclxuICAgICAgICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XHJcbiAgICB9O1xyXG4gICAgbnpQbGFjZW1lbnQ6IE56UGxhY2VtZW50O1xyXG4gICAgbnpDbGlja0hpZGU6IGJvb2xlYW47XHJcbiAgICBuekRpc2FibGVkOiBib29sZWFuO1xyXG4gICAgbnpWaXNpYmxlOiBib29sZWFuO1xyXG4gICAgbnpUYWJsZUZpbHRlcjogYm9vbGVhbjtcclxuICAgIHJlYWRvbmx5IG56VmlzaWJsZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG4gICAgc2V0VmlzaWJsZVN0YXRlV2hlbih2aXNpYmxlOiBib29sZWFuLCB0cmlnZ2VyPzogJ2NsaWNrJyB8ICdob3ZlcicgfCAnYWxsJyk6IHZvaWQ7XHJcbiAgICBvblBvc2l0aW9uQ2hhbmdlKHBvc2l0aW9uOiBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UpOiB2b2lkO1xyXG4gICAgc3RhcnRTdWJzY3JpYmUob2JzZXJ2YWJsZSQ6IE9ic2VydmFibGU8Ym9vbGVhbj4pOiB2b2lkO1xyXG4gICAgdXBkYXRlRGlzYWJsZWRTdGF0ZSgpOiB2b2lkO1xyXG4gICAgY29uc3RydWN0b3IoY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgbnpNZW51RHJvcGRvd25TZXJ2aWNlOiBOek1lbnVEcm9wZG93blNlcnZpY2UsIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSB8IHVuZGVmaW5lZCk7XHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xyXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQ7XHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcclxufVxyXG4iXX0=