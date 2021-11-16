/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { DateHelperService } from 'ng-zorro-antd/i18n';
import * as ɵngcc0 from '@angular/core';
export declare class NzTimeValueAccessorDirective implements ControlValueAccessor {
    private dateHelper;
    private elementRef;
    private _onChange;
    private _onTouch;
    nzTime: string;
    keyup(): void;
    blur(): void;
    changed(): void;
    touched(): void;
    setRange(): void;
    constructor(dateHelper: DateHelperService, elementRef: ElementRef);
    writeValue(value: Date): void;
    registerOnChange(fn: (value: Date) => void): void;
    registerOnTouched(fn: () => void): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzTimeValueAccessorDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NzTimeValueAccessorDirective, "input[nzTime]", ["nzTime"], { "nzTime": "nzTime"; }, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGltZS12YWx1ZS1hY2Nlc3Nvci5kaXJlY3RpdmUuZC50cyIsInNvdXJjZXMiOlsibnotdGltZS12YWx1ZS1hY2Nlc3Nvci5kaXJlY3RpdmUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7QUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5pbXBvcnQgeyBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBEYXRlSGVscGVyU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE56VGltZVZhbHVlQWNjZXNzb3JEaXJlY3RpdmUgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcbiAgICBwcml2YXRlIGRhdGVIZWxwZXI7XHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY7XHJcbiAgICBwcml2YXRlIF9vbkNoYW5nZTtcclxuICAgIHByaXZhdGUgX29uVG91Y2g7XHJcbiAgICBuelRpbWU6IHN0cmluZztcclxuICAgIGtleXVwKCk6IHZvaWQ7XHJcbiAgICBibHVyKCk6IHZvaWQ7XHJcbiAgICBjaGFuZ2VkKCk6IHZvaWQ7XHJcbiAgICB0b3VjaGVkKCk6IHZvaWQ7XHJcbiAgICBzZXRSYW5nZSgpOiB2b2lkO1xyXG4gICAgY29uc3RydWN0b3IoZGF0ZUhlbHBlcjogRGF0ZUhlbHBlclNlcnZpY2UsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpO1xyXG4gICAgd3JpdGVWYWx1ZSh2YWx1ZTogRGF0ZSk6IHZvaWQ7XHJcbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IERhdGUpID0+IHZvaWQpOiB2b2lkO1xyXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkO1xyXG59XHJcbiJdfQ==