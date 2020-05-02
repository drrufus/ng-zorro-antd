/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, InjectionToken, NgZone, OnDestroy, OnInit } from '@angular/core';
import { NzWaveRenderer } from './nz-wave-renderer';
import * as ɵngcc0 from '@angular/core';
export interface NzWaveConfig {
    disabled?: boolean;
}
export declare const NZ_WAVE_GLOBAL_DEFAULT_CONFIG: NzWaveConfig;
export declare const NZ_WAVE_GLOBAL_CONFIG: InjectionToken<NzWaveConfig>;
export declare function NZ_WAVE_GLOBAL_CONFIG_FACTORY(): NzWaveConfig;
export declare class NzWaveDirective implements OnInit, OnDestroy {
    private ngZone;
    private elementRef;
    private config;
    private animationType;
    nzWaveExtraNode: boolean;
    private waveRenderer;
    private waveDisabled;
    readonly disabled: boolean;
    readonly rendererRef: NzWaveRenderer;
    constructor(ngZone: NgZone, elementRef: ElementRef, config: NzWaveConfig, animationType: string);
    isConfigDisabled(): boolean;
    ngOnDestroy(): void;
    ngOnInit(): void;
    renderWaveIfEnabled(): void;
    disable(): void;
    enable(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzWaveDirective, [null, null, { optional: true; }, { optional: true; }]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NzWaveDirective, "[nz-wave]", ["nzWave"], { "nzWaveExtraNode": "nzWaveExtraNode"; }, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotd2F2ZS5kaXJlY3RpdmUuZC50cyIsInNvdXJjZXMiOlsibnotd2F2ZS5kaXJlY3RpdmUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcbmltcG9ydCB7IEVsZW1lbnRSZWYsIEluamVjdGlvblRva2VuLCBOZ1pvbmUsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE56V2F2ZVJlbmRlcmVyIH0gZnJvbSAnLi9uei13YXZlLXJlbmRlcmVyJztcclxuZXhwb3J0IGludGVyZmFjZSBOeldhdmVDb25maWcge1xyXG4gICAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IE5aX1dBVkVfR0xPQkFMX0RFRkFVTFRfQ09ORklHOiBOeldhdmVDb25maWc7XHJcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IE5aX1dBVkVfR0xPQkFMX0NPTkZJRzogSW5qZWN0aW9uVG9rZW48TnpXYXZlQ29uZmlnPjtcclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTlpfV0FWRV9HTE9CQUxfQ09ORklHX0ZBQ1RPUlkoKTogTnpXYXZlQ29uZmlnO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOeldhdmVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgICBwcml2YXRlIG5nWm9uZTtcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjtcclxuICAgIHByaXZhdGUgY29uZmlnO1xyXG4gICAgcHJpdmF0ZSBhbmltYXRpb25UeXBlO1xyXG4gICAgbnpXYXZlRXh0cmFOb2RlOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSB3YXZlUmVuZGVyZXI7XHJcbiAgICBwcml2YXRlIHdhdmVEaXNhYmxlZDtcclxuICAgIHJlYWRvbmx5IGRpc2FibGVkOiBib29sZWFuO1xyXG4gICAgcmVhZG9ubHkgcmVuZGVyZXJSZWY6IE56V2F2ZVJlbmRlcmVyO1xyXG4gICAgY29uc3RydWN0b3Iobmdab25lOiBOZ1pvbmUsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIGNvbmZpZzogTnpXYXZlQ29uZmlnLCBhbmltYXRpb25UeXBlOiBzdHJpbmcpO1xyXG4gICAgaXNDb25maWdEaXNhYmxlZCgpOiBib29sZWFuO1xyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcclxuICAgIG5nT25Jbml0KCk6IHZvaWQ7XHJcbiAgICByZW5kZXJXYXZlSWZFbmFibGVkKCk6IHZvaWQ7XHJcbiAgICBkaXNhYmxlKCk6IHZvaWQ7XHJcbiAgICBlbmFibGUoKTogdm9pZDtcclxufVxyXG4iXX0=