/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
import { AfterContentChecked, ElementRef, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { IconDirective, ThemeType } from '@ant-design/icons-angular';
import { NzIconService } from './nz-icon.service';
/**
 * This directive extends IconDirective to provide:
 *
 * - IconFont support
 * - spinning
 * - old API compatibility
 *
 * @break-changes
 *
 * - old API compatibility, icon class names would not be supported.
 * - properties that not started with `nz`.
 */
import * as ɵngcc0 from '@angular/core';
export declare class NzIconDirective extends IconDirective implements OnInit, OnChanges, OnDestroy, AfterContentChecked {
    iconService: NzIconService;
    elementRef: ElementRef;
    renderer: Renderer2;
    private platform;
    nzSpin: boolean;
    nzRotate: number;
    nzType: string;
    nzTheme: ThemeType;
    nzTwotoneColor: string;
    nzIconfont: string;
    /** @deprecated 8.0.0 avoid exposing low layer API. */
    spin: boolean;
    /** @deprecated 8.0.0 avoid exposing low layer API. */
    iconfont: string;
    type: string;
    nzIconLabel: string | null;
    private classNameObserver;
    private el;
    private destroy$;
    private _type;
    /**
     * Replacement of `changeIcon` for more modifications.
     * @param oldAPI
     */
    private changeIcon2;
    private classChangeHandler;
    private handleSpin;
    private handleRotate;
    private setClassName;
    private setSVGData;
    constructor(iconService: NzIconService, elementRef: ElementRef, renderer: Renderer2, platform: Platform);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    /**
     * If custom content is provided, try to normalize SVG elements.
     */
    ngAfterContentChecked(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzIconDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NzIconDirective, "i.anticon, [nz-icon]", ["nzIcon"], { "nzRotate": "nzRotate"; "spin": "spin"; "nzIconLabel": "nzIconLabel"; "nzSpin": "nzSpin"; "nzType": "nzType"; "type": "type"; "nzTheme": "nzTheme"; "nzTwotoneColor": "nzTwotoneColor"; "nzIconfont": "nzIconfont"; "iconfont": "iconfont"; }, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaWNvbi5kaXJlY3RpdmUuZC50cyIsInNvdXJjZXMiOlsibnotaWNvbi5kaXJlY3RpdmUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1Q0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHsgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgRWxlbWVudFJlZiwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEljb25EaXJlY3RpdmUsIFRoZW1lVHlwZSB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLWFuZ3VsYXInO1xyXG5pbXBvcnQgeyBOekljb25TZXJ2aWNlIH0gZnJvbSAnLi9uei1pY29uLnNlcnZpY2UnO1xyXG4vKipcclxuICogVGhpcyBkaXJlY3RpdmUgZXh0ZW5kcyBJY29uRGlyZWN0aXZlIHRvIHByb3ZpZGU6XHJcbiAqXHJcbiAqIC0gSWNvbkZvbnQgc3VwcG9ydFxyXG4gKiAtIHNwaW5uaW5nXHJcbiAqIC0gb2xkIEFQSSBjb21wYXRpYmlsaXR5XHJcbiAqXHJcbiAqIEBicmVhay1jaGFuZ2VzXHJcbiAqXHJcbiAqIC0gb2xkIEFQSSBjb21wYXRpYmlsaXR5LCBpY29uIGNsYXNzIG5hbWVzIHdvdWxkIG5vdCBiZSBzdXBwb3J0ZWQuXHJcbiAqIC0gcHJvcGVydGllcyB0aGF0IG5vdCBzdGFydGVkIHdpdGggYG56YC5cclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE56SWNvbkRpcmVjdGl2ZSBleHRlbmRzIEljb25EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBBZnRlckNvbnRlbnRDaGVja2VkIHtcclxuICAgIGljb25TZXJ2aWNlOiBOekljb25TZXJ2aWNlO1xyXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcclxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjI7XHJcbiAgICBwcml2YXRlIHBsYXRmb3JtO1xyXG4gICAgbnpTcGluOiBib29sZWFuO1xyXG4gICAgbnpSb3RhdGU6IG51bWJlcjtcclxuICAgIG56VHlwZTogc3RyaW5nO1xyXG4gICAgbnpUaGVtZTogVGhlbWVUeXBlO1xyXG4gICAgbnpUd290b25lQ29sb3I6IHN0cmluZztcclxuICAgIG56SWNvbmZvbnQ6IHN0cmluZztcclxuICAgIC8qKiBAZGVwcmVjYXRlZCA4LjAuMCBhdm9pZCBleHBvc2luZyBsb3cgbGF5ZXIgQVBJLiAqL1xyXG4gICAgc3BpbjogYm9vbGVhbjtcclxuICAgIC8qKiBAZGVwcmVjYXRlZCA4LjAuMCBhdm9pZCBleHBvc2luZyBsb3cgbGF5ZXIgQVBJLiAqL1xyXG4gICAgaWNvbmZvbnQ6IHN0cmluZztcclxuICAgIHR5cGU6IHN0cmluZztcclxuICAgIG56SWNvbkxhYmVsOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgcHJpdmF0ZSBjbGFzc05hbWVPYnNlcnZlcjtcclxuICAgIHByaXZhdGUgZWw7XHJcbiAgICBwcml2YXRlIGRlc3Ryb3kkO1xyXG4gICAgcHJpdmF0ZSBfdHlwZTtcclxuICAgIC8qKlxyXG4gICAgICogUmVwbGFjZW1lbnQgb2YgYGNoYW5nZUljb25gIGZvciBtb3JlIG1vZGlmaWNhdGlvbnMuXHJcbiAgICAgKiBAcGFyYW0gb2xkQVBJXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY2hhbmdlSWNvbjI7XHJcbiAgICBwcml2YXRlIGNsYXNzQ2hhbmdlSGFuZGxlcjtcclxuICAgIHByaXZhdGUgaGFuZGxlU3BpbjtcclxuICAgIHByaXZhdGUgaGFuZGxlUm90YXRlO1xyXG4gICAgcHJpdmF0ZSBzZXRDbGFzc05hbWU7XHJcbiAgICBwcml2YXRlIHNldFNWR0RhdGE7XHJcbiAgICBjb25zdHJ1Y3RvcihpY29uU2VydmljZTogTnpJY29uU2VydmljZSwgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcGxhdGZvcm06IFBsYXRmb3JtKTtcclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xyXG4gICAgbmdPbkluaXQoKTogdm9pZDtcclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIElmIGN1c3RvbSBjb250ZW50IGlzIHByb3ZpZGVkLCB0cnkgdG8gbm9ybWFsaXplIFNWRyBlbGVtZW50cy5cclxuICAgICAqL1xyXG4gICAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQ7XHJcbn1cclxuIl19