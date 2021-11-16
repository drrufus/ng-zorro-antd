/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Overlay } from '@angular/cdk/overlay';
import { NzDrawerOptions, NzDrawerOptionsOfComponent } from './nz-drawer-options';
import { NzDrawerRef } from './nz-drawer-ref';
import * as ɵngcc0 from '@angular/core';
export declare class DrawerBuilderForService<R> {
    private overlay;
    private options;
    private drawerRef;
    private overlayRef;
    private unsubscribe$;
    constructor(overlay: Overlay, options: NzDrawerOptions);
    getInstance(): NzDrawerRef<R>;
    createDrawer(): void;
    updateOptions(options: NzDrawerOptionsOfComponent): void;
}
export declare class NzDrawerService {
    private overlay;
    constructor(overlay: Overlay);
    create<T = any, D = any, R = any>(options: NzDrawerOptions<T, D>): NzDrawerRef<R>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzDrawerService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NzDrawerService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJhd2VyLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsibnotZHJhd2VyLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7QUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5pbXBvcnQgeyBPdmVybGF5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBOekRyYXdlck9wdGlvbnMsIE56RHJhd2VyT3B0aW9uc09mQ29tcG9uZW50IH0gZnJvbSAnLi9uei1kcmF3ZXItb3B0aW9ucyc7XHJcbmltcG9ydCB7IE56RHJhd2VyUmVmIH0gZnJvbSAnLi9uei1kcmF3ZXItcmVmJztcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRHJhd2VyQnVpbGRlckZvclNlcnZpY2U8Uj4ge1xyXG4gICAgcHJpdmF0ZSBvdmVybGF5O1xyXG4gICAgcHJpdmF0ZSBvcHRpb25zO1xyXG4gICAgcHJpdmF0ZSBkcmF3ZXJSZWY7XHJcbiAgICBwcml2YXRlIG92ZXJsYXlSZWY7XHJcbiAgICBwcml2YXRlIHVuc3Vic2NyaWJlJDtcclxuICAgIGNvbnN0cnVjdG9yKG92ZXJsYXk6IE92ZXJsYXksIG9wdGlvbnM6IE56RHJhd2VyT3B0aW9ucyk7XHJcbiAgICBnZXRJbnN0YW5jZSgpOiBOekRyYXdlclJlZjxSPjtcclxuICAgIGNyZWF0ZURyYXdlcigpOiB2b2lkO1xyXG4gICAgdXBkYXRlT3B0aW9ucyhvcHRpb25zOiBOekRyYXdlck9wdGlvbnNPZkNvbXBvbmVudCk6IHZvaWQ7XHJcbn1cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTnpEcmF3ZXJTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgb3ZlcmxheTtcclxuICAgIGNvbnN0cnVjdG9yKG92ZXJsYXk6IE92ZXJsYXkpO1xyXG4gICAgY3JlYXRlPFQgPSBhbnksIEQgPSBhbnksIFIgPSBhbnk+KG9wdGlvbnM6IE56RHJhd2VyT3B0aW9uczxULCBEPik6IE56RHJhd2VyUmVmPFI+O1xyXG59XHJcbiJdfQ==