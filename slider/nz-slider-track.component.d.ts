/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { OnChanges, SimpleChanges } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export interface NzSliderTrackStyle {
    bottom?: string | null;
    height?: string | null;
    left?: string | null;
    width?: string | null;
    visibility?: string;
}
export declare class NzSliderTrackComponent implements OnChanges {
    nzOffset: number;
    nzLength: number;
    nzVertical: boolean;
    nzIncluded: boolean;
    style: NzSliderTrackStyle;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzSliderTrackComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzSliderTrackComponent, "nz-slider-track", ["nzSliderTrack"], { "nzVertical": "nzVertical"; "nzIncluded": "nzIncluded"; "nzOffset": "nzOffset"; "nzLength": "nzLength"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLXRyYWNrLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJuei1zbGlkZXItdHJhY2suY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQVFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBY0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmV4cG9ydCBpbnRlcmZhY2UgTnpTbGlkZXJUcmFja1N0eWxlIHtcclxuICAgIGJvdHRvbT86IHN0cmluZyB8IG51bGw7XHJcbiAgICBoZWlnaHQ/OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgbGVmdD86IHN0cmluZyB8IG51bGw7XHJcbiAgICB3aWR0aD86IHN0cmluZyB8IG51bGw7XHJcbiAgICB2aXNpYmlsaXR5Pzogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE56U2xpZGVyVHJhY2tDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gICAgbnpPZmZzZXQ6IG51bWJlcjtcclxuICAgIG56TGVuZ3RoOiBudW1iZXI7XHJcbiAgICBuelZlcnRpY2FsOiBib29sZWFuO1xyXG4gICAgbnpJbmNsdWRlZDogYm9vbGVhbjtcclxuICAgIHN0eWxlOiBOelNsaWRlclRyYWNrU3R5bGU7XHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcclxufVxyXG4iXX0=