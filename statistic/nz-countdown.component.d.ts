/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectorRef, EventEmitter, NgZone, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { NzStatisticComponent } from './nz-statistic.component';
import * as ɵngcc0 from '@angular/core';
export declare class NzCountdownComponent extends NzStatisticComponent implements OnInit, OnChanges, OnDestroy {
    private cdr;
    private ngZone;
    private platform;
    /** @override */
    nzFormat: string;
    readonly nzCountdownFinish: EventEmitter<void>;
    diff: number;
    private target;
    private updater_;
    constructor(cdr: ChangeDetectorRef, ngZone: NgZone, platform: Platform);
    /** @override */
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    syncTimer(): void;
    startTimer(): void;
    stopTimer(): void;
    /**
     * Update time that should be displayed on the screen.
     */
    protected updateValue(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzCountdownComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzCountdownComponent, "nz-countdown", ["nzCountdown"], { "nzFormat": "nzFormat"; }, { "nzCountdownFinish": "nzCountdownFinish"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY291bnRkb3duLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJuei1jb3VudGRvd24uY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0FBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBFdmVudEVtaXR0ZXIsIE5nWm9uZSwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOelN0YXRpc3RpY0NvbXBvbmVudCB9IGZyb20gJy4vbnotc3RhdGlzdGljLmNvbXBvbmVudCc7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE56Q291bnRkb3duQ29tcG9uZW50IGV4dGVuZHMgTnpTdGF0aXN0aWNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICAgIHByaXZhdGUgY2RyO1xyXG4gICAgcHJpdmF0ZSBuZ1pvbmU7XHJcbiAgICBwcml2YXRlIHBsYXRmb3JtO1xyXG4gICAgLyoqIEBvdmVycmlkZSAqL1xyXG4gICAgbnpGb3JtYXQ6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IG56Q291bnRkb3duRmluaXNoOiBFdmVudEVtaXR0ZXI8dm9pZD47XHJcbiAgICBkaWZmOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHRhcmdldDtcclxuICAgIHByaXZhdGUgdXBkYXRlcl87XHJcbiAgICBjb25zdHJ1Y3RvcihjZHI6IENoYW5nZURldGVjdG9yUmVmLCBuZ1pvbmU6IE5nWm9uZSwgcGxhdGZvcm06IFBsYXRmb3JtKTtcclxuICAgIC8qKiBAb3ZlcnJpZGUgKi9cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xyXG4gICAgbmdPbkluaXQoKTogdm9pZDtcclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XHJcbiAgICBzeW5jVGltZXIoKTogdm9pZDtcclxuICAgIHN0YXJ0VGltZXIoKTogdm9pZDtcclxuICAgIHN0b3BUaW1lcigpOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgdGltZSB0aGF0IHNob3VsZCBiZSBkaXNwbGF5ZWQgb24gdGhlIHNjcmVlbi5cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZVZhbHVlKCk6IHZvaWQ7XHJcbn1cclxuIl19