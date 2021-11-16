/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { NgStyleInterface, NzConfigService } from 'ng-zorro-antd/core';
import { NzProgressCirclePath, NzProgressFormatter, NzProgressGapPositionType, NzProgressStatusType, NzProgressStrokeColorType, NzProgressStrokeLinecapType, NzProgressTypeType } from './nz-progress.definitions';
import * as ɵngcc0 from '@angular/core';
export declare class NzProgressComponent implements OnChanges, OnInit, OnDestroy {
    nzConfigService: NzConfigService;
    nzShowInfo: boolean;
    nzWidth: number;
    nzStrokeColor: NzProgressStrokeColorType;
    nzSize: 'default' | 'small';
    nzFormat?: NzProgressFormatter;
    nzSuccessPercent?: number;
    nzPercent: number;
    nzStrokeWidth: number;
    nzGapDegree: number;
    nzStatus: NzProgressStatusType;
    nzType: NzProgressTypeType;
    nzGapPosition: NzProgressGapPositionType;
    nzStrokeLinecap: NzProgressStrokeLinecapType;
    /** Gradient style when `nzType` is `line`. */
    lineGradient: string | null;
    /** If user uses gradient color. */
    isGradient: boolean;
    /**
     * Each progress whose `nzType` is circle or dashboard should have unique id to
     * define `<linearGradient>`.
     */
    gradientId: number;
    /** Paths to rendered in the template. */
    progressCirclePath: NzProgressCirclePath[];
    circleGradient: Array<{
        offset: string;
        color: string;
    }>;
    trailPathStyle: NgStyleInterface;
    pathString: string;
    icon: string;
    trackByFn: (index: number) => string;
    readonly formatter: NzProgressFormatter;
    readonly status: NzProgressStatusType;
    readonly strokeWidth: number;
    readonly isCircleStyle: boolean;
    private cachedStatus;
    private inferredStatus;
    private destroy$;
    constructor(nzConfigService: NzConfigService);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    private updateIcon;
    /**
     * Calculate paths when the type is circle or dashboard.
     */
    private getCirclePaths;
    private setStrokeColor;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzProgressComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzProgressComponent, "nz-progress", ["nzProgress"], { "nzWidth": "nzWidth"; "nzPercent": "nzPercent"; "nzType": "nzType"; "nzShowInfo": "nzShowInfo"; "nzStrokeColor": "nzStrokeColor"; "nzSize": "nzSize"; "nzFormat": "nzFormat"; "nzSuccessPercent": "nzSuccessPercent"; "nzStrokeWidth": "nzStrokeWidth"; "nzGapDegree": "nzGapDegree"; "nzStatus": "nzStatus"; "nzGapPosition": "nzGapPosition"; "nzStrokeLinecap": "nzStrokeLinecap"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcHJvZ3Jlc3MuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbIm56LXByb2dyZXNzLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztBQVVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1EQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5pbXBvcnQgeyBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nU3R5bGVJbnRlcmZhY2UsIE56Q29uZmlnU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56UHJvZ3Jlc3NDaXJjbGVQYXRoLCBOelByb2dyZXNzRm9ybWF0dGVyLCBOelByb2dyZXNzR2FwUG9zaXRpb25UeXBlLCBOelByb2dyZXNzU3RhdHVzVHlwZSwgTnpQcm9ncmVzc1N0cm9rZUNvbG9yVHlwZSwgTnpQcm9ncmVzc1N0cm9rZUxpbmVjYXBUeXBlLCBOelByb2dyZXNzVHlwZVR5cGUgfSBmcm9tICcuL256LXByb2dyZXNzLmRlZmluaXRpb25zJztcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTnpQcm9ncmVzc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gICAgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2U7XHJcbiAgICBuelNob3dJbmZvOiBib29sZWFuO1xyXG4gICAgbnpXaWR0aDogbnVtYmVyO1xyXG4gICAgbnpTdHJva2VDb2xvcjogTnpQcm9ncmVzc1N0cm9rZUNvbG9yVHlwZTtcclxuICAgIG56U2l6ZTogJ2RlZmF1bHQnIHwgJ3NtYWxsJztcclxuICAgIG56Rm9ybWF0PzogTnpQcm9ncmVzc0Zvcm1hdHRlcjtcclxuICAgIG56U3VjY2Vzc1BlcmNlbnQ/OiBudW1iZXI7XHJcbiAgICBuelBlcmNlbnQ6IG51bWJlcjtcclxuICAgIG56U3Ryb2tlV2lkdGg6IG51bWJlcjtcclxuICAgIG56R2FwRGVncmVlOiBudW1iZXI7XHJcbiAgICBuelN0YXR1czogTnpQcm9ncmVzc1N0YXR1c1R5cGU7XHJcbiAgICBuelR5cGU6IE56UHJvZ3Jlc3NUeXBlVHlwZTtcclxuICAgIG56R2FwUG9zaXRpb246IE56UHJvZ3Jlc3NHYXBQb3NpdGlvblR5cGU7XHJcbiAgICBuelN0cm9rZUxpbmVjYXA6IE56UHJvZ3Jlc3NTdHJva2VMaW5lY2FwVHlwZTtcclxuICAgIC8qKiBHcmFkaWVudCBzdHlsZSB3aGVuIGBuelR5cGVgIGlzIGBsaW5lYC4gKi9cclxuICAgIGxpbmVHcmFkaWVudDogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBJZiB1c2VyIHVzZXMgZ3JhZGllbnQgY29sb3IuICovXHJcbiAgICBpc0dyYWRpZW50OiBib29sZWFuO1xyXG4gICAgLyoqXHJcbiAgICAgKiBFYWNoIHByb2dyZXNzIHdob3NlIGBuelR5cGVgIGlzIGNpcmNsZSBvciBkYXNoYm9hcmQgc2hvdWxkIGhhdmUgdW5pcXVlIGlkIHRvXHJcbiAgICAgKiBkZWZpbmUgYDxsaW5lYXJHcmFkaWVudD5gLlxyXG4gICAgICovXHJcbiAgICBncmFkaWVudElkOiBudW1iZXI7XHJcbiAgICAvKiogUGF0aHMgdG8gcmVuZGVyZWQgaW4gdGhlIHRlbXBsYXRlLiAqL1xyXG4gICAgcHJvZ3Jlc3NDaXJjbGVQYXRoOiBOelByb2dyZXNzQ2lyY2xlUGF0aFtdO1xyXG4gICAgY2lyY2xlR3JhZGllbnQ6IEFycmF5PHtcclxuICAgICAgICBvZmZzZXQ6IHN0cmluZztcclxuICAgICAgICBjb2xvcjogc3RyaW5nO1xyXG4gICAgfT47XHJcbiAgICB0cmFpbFBhdGhTdHlsZTogTmdTdHlsZUludGVyZmFjZTtcclxuICAgIHBhdGhTdHJpbmc6IHN0cmluZztcclxuICAgIGljb246IHN0cmluZztcclxuICAgIHRyYWNrQnlGbjogKGluZGV4OiBudW1iZXIpID0+IHN0cmluZztcclxuICAgIHJlYWRvbmx5IGZvcm1hdHRlcjogTnpQcm9ncmVzc0Zvcm1hdHRlcjtcclxuICAgIHJlYWRvbmx5IHN0YXR1czogTnpQcm9ncmVzc1N0YXR1c1R5cGU7XHJcbiAgICByZWFkb25seSBzdHJva2VXaWR0aDogbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgaXNDaXJjbGVTdHlsZTogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgY2FjaGVkU3RhdHVzO1xyXG4gICAgcHJpdmF0ZSBpbmZlcnJlZFN0YXR1cztcclxuICAgIHByaXZhdGUgZGVzdHJveSQ7XHJcbiAgICBjb25zdHJ1Y3RvcihuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSk7XHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcclxuICAgIG5nT25Jbml0KCk6IHZvaWQ7XHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVJY29uO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxjdWxhdGUgcGF0aHMgd2hlbiB0aGUgdHlwZSBpcyBjaXJjbGUgb3IgZGFzaGJvYXJkLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdldENpcmNsZVBhdGhzO1xyXG4gICAgcHJpdmF0ZSBzZXRTdHJva2VDb2xvcjtcclxufVxyXG4iXX0=