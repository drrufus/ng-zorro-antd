/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AnimationEvent } from '@angular/animations';
import { ElementRef, EventEmitter, OnChanges, OnInit, Renderer2 } from '@angular/core';
import { NzUpdateHostClassService } from 'ng-zorro-antd/core';
import * as ɵngcc0 from '@angular/core';
export declare class NzTagComponent implements OnInit, OnChanges {
    private renderer;
    elementRef: ElementRef;
    private nzUpdateHostClassService;
    presetColor: boolean;
    nzMode: 'default' | 'closeable' | 'checkable';
    nzColor: string;
    nzChecked: boolean;
    nzNoAnimation: boolean;
    readonly nzAfterClose: EventEmitter<void>;
    readonly nzOnClose: EventEmitter<MouseEvent>;
    readonly nzCheckedChange: EventEmitter<boolean>;
    private isPresetColor;
    private updateClassMap;
    updateCheckedStatus(): void;
    closeTag(e: MouseEvent): void;
    afterAnimation(e: AnimationEvent): void;
    constructor(renderer: Renderer2, elementRef: ElementRef, nzUpdateHostClassService: NzUpdateHostClassService);
    ngOnInit(): void;
    ngOnChanges(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzTagComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzTagComponent, "nz-tag", ["nzTag"], { "nzMode": "nzMode"; "nzChecked": "nzChecked"; "nzNoAnimation": "nzNoAnimation"; "nzColor": "nzColor"; }, { "nzAfterClose": "nzAfterClose"; "nzOnClose": "nzOnClose"; "nzCheckedChange": "nzCheckedChange"; }, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFnLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJuei10YWcuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0FBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgQW5pbWF0aW9uRXZlbnQgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIE9uSW5pdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE56VGFnQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjtcclxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XHJcbiAgICBwcml2YXRlIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTtcclxuICAgIHByZXNldENvbG9yOiBib29sZWFuO1xyXG4gICAgbnpNb2RlOiAnZGVmYXVsdCcgfCAnY2xvc2VhYmxlJyB8ICdjaGVja2FibGUnO1xyXG4gICAgbnpDb2xvcjogc3RyaW5nO1xyXG4gICAgbnpDaGVja2VkOiBib29sZWFuO1xyXG4gICAgbnpOb0FuaW1hdGlvbjogYm9vbGVhbjtcclxuICAgIHJlYWRvbmx5IG56QWZ0ZXJDbG9zZTogRXZlbnRFbWl0dGVyPHZvaWQ+O1xyXG4gICAgcmVhZG9ubHkgbnpPbkNsb3NlOiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD47XHJcbiAgICByZWFkb25seSBuekNoZWNrZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuICAgIHByaXZhdGUgaXNQcmVzZXRDb2xvcjtcclxuICAgIHByaXZhdGUgdXBkYXRlQ2xhc3NNYXA7XHJcbiAgICB1cGRhdGVDaGVja2VkU3RhdHVzKCk6IHZvaWQ7XHJcbiAgICBjbG9zZVRhZyhlOiBNb3VzZUV2ZW50KTogdm9pZDtcclxuICAgIGFmdGVyQW5pbWF0aW9uKGU6IEFuaW1hdGlvbkV2ZW50KTogdm9pZDtcclxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyOiBSZW5kZXJlcjIsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlKTtcclxuICAgIG5nT25Jbml0KCk6IHZvaWQ7XHJcbiAgICBuZ09uQ2hhbmdlcygpOiB2b2lkO1xyXG59XHJcbiJdfQ==