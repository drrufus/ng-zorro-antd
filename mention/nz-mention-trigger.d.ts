/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AfterViewInit, ElementRef, EventEmitter, ExistingProvider, OnDestroy } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Mention } from './nz-mention.component';
import { NzMentionService } from './nz-mention.service';
import * as ɵngcc0 from '@angular/core';
export declare const NZ_MENTION_TRIGGER_ACCESSOR: ExistingProvider;
export declare class NzMentionTriggerDirective implements ControlValueAccessor, OnDestroy, AfterViewInit {
    el: ElementRef;
    private nzMentionService;
    onChange: (value: string) => void;
    onTouched: () => void;
    readonly onFocusin: EventEmitter<void>;
    readonly onBlur: EventEmitter<void>;
    readonly onInput: EventEmitter<KeyboardEvent>;
    readonly onKeydown: EventEmitter<KeyboardEvent>;
    readonly onClick: EventEmitter<MouseEvent>;
    value: string;
    constructor(el: ElementRef, nzMentionService: NzMentionService);
    completeEvents(): void;
    focus(caretPos?: number): void;
    insertMention(mention: Mention): void;
    writeValue(value: string): void;
    registerOnChange(fn: (value: string) => void): void;
    registerOnTouched(fn: () => void): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzMentionTriggerDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NzMentionTriggerDirective, "input[nzMentionTrigger], textarea[nzMentionTrigger]", ["nzMentionTrigger"], {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudGlvbi10cmlnZ2VyLmQudHMiLCJzb3VyY2VzIjpbIm56LW1lbnRpb24tdHJpZ2dlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFXQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBFeGlzdGluZ1Byb3ZpZGVyLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE1lbnRpb24gfSBmcm9tICcuL256LW1lbnRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpNZW50aW9uU2VydmljZSB9IGZyb20gJy4vbnotbWVudGlvbi5zZXJ2aWNlJztcclxuZXhwb3J0IGRlY2xhcmUgY29uc3QgTlpfTUVOVElPTl9UUklHR0VSX0FDQ0VTU09SOiBFeGlzdGluZ1Byb3ZpZGVyO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOek1lbnRpb25UcmlnZ2VyRGlyZWN0aXZlIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgICBlbDogRWxlbWVudFJlZjtcclxuICAgIHByaXZhdGUgbnpNZW50aW9uU2VydmljZTtcclxuICAgIG9uQ2hhbmdlOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZDtcclxuICAgIG9uVG91Y2hlZDogKCkgPT4gdm9pZDtcclxuICAgIHJlYWRvbmx5IG9uRm9jdXNpbjogRXZlbnRFbWl0dGVyPHZvaWQ+O1xyXG4gICAgcmVhZG9ubHkgb25CbHVyOiBFdmVudEVtaXR0ZXI8dm9pZD47XHJcbiAgICByZWFkb25seSBvbklucHV0OiBFdmVudEVtaXR0ZXI8S2V5Ym9hcmRFdmVudD47XHJcbiAgICByZWFkb25seSBvbktleWRvd246IEV2ZW50RW1pdHRlcjxLZXlib2FyZEV2ZW50PjtcclxuICAgIHJlYWRvbmx5IG9uQ2xpY2s6IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PjtcclxuICAgIHZhbHVlOiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZiwgbnpNZW50aW9uU2VydmljZTogTnpNZW50aW9uU2VydmljZSk7XHJcbiAgICBjb21wbGV0ZUV2ZW50cygpOiB2b2lkO1xyXG4gICAgZm9jdXMoY2FyZXRQb3M/OiBudW1iZXIpOiB2b2lkO1xyXG4gICAgaW5zZXJ0TWVudGlvbihtZW50aW9uOiBNZW50aW9uKTogdm9pZDtcclxuICAgIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQ7XHJcbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQ7XHJcbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQ7XHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZDtcclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XHJcbn1cclxuIl19