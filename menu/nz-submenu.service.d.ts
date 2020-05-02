/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { BehaviorSubject, Subject } from 'rxjs';
import { NzDirectionVHIType } from 'ng-zorro-antd/core';
import { NzMenuService } from './nz-menu.service';
import * as ɵngcc0 from '@angular/core';
export declare class NzSubmenuService {
    private nzHostSubmenuService;
    nzMenuService: NzMenuService;
    disabled: boolean;
    mode: NzDirectionVHIType;
    mode$: import("rxjs").Observable<NzDirectionVHIType>;
    level: number;
    level$: BehaviorSubject<number>;
    subMenuOpen$: BehaviorSubject<boolean>;
    open$: BehaviorSubject<boolean>;
    mouseEnterLeave$: Subject<boolean>;
    menuOpen$: import("rxjs").Observable<boolean>;
    setOpenState(value: boolean): void;
    onMenuItemClick(): void;
    setLevel(value: number): void;
    setMouseEnterState(value: boolean): void;
    constructor(nzHostSubmenuService: NzSubmenuService, nzMenuService: NzMenuService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzSubmenuService, [{ optional: true; skipSelf: true; }, null]>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NzSubmenuService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3VibWVudS5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbIm56LXN1Ym1lbnUuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztBQVVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBOekRpcmVjdGlvblZISVR5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOek1lbnVTZXJ2aWNlIH0gZnJvbSAnLi9uei1tZW51LnNlcnZpY2UnO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOelN1Ym1lbnVTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgbnpIb3N0U3VibWVudVNlcnZpY2U7XHJcbiAgICBuek1lbnVTZXJ2aWNlOiBOek1lbnVTZXJ2aWNlO1xyXG4gICAgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgICBtb2RlOiBOekRpcmVjdGlvblZISVR5cGU7XHJcbiAgICBtb2RlJDogaW1wb3J0KFwicnhqc1wiKS5PYnNlcnZhYmxlPE56RGlyZWN0aW9uVkhJVHlwZT47XHJcbiAgICBsZXZlbDogbnVtYmVyO1xyXG4gICAgbGV2ZWwkOiBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPjtcclxuICAgIHN1Yk1lbnVPcGVuJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+O1xyXG4gICAgb3BlbiQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPjtcclxuICAgIG1vdXNlRW50ZXJMZWF2ZSQ6IFN1YmplY3Q8Ym9vbGVhbj47XHJcbiAgICBtZW51T3BlbiQ6IGltcG9ydChcInJ4anNcIikuT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuICAgIHNldE9wZW5TdGF0ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQ7XHJcbiAgICBvbk1lbnVJdGVtQ2xpY2soKTogdm9pZDtcclxuICAgIHNldExldmVsKHZhbHVlOiBudW1iZXIpOiB2b2lkO1xyXG4gICAgc2V0TW91c2VFbnRlclN0YXRlKHZhbHVlOiBib29sZWFuKTogdm9pZDtcclxuICAgIGNvbnN0cnVjdG9yKG56SG9zdFN1Ym1lbnVTZXJ2aWNlOiBOelN1Ym1lbnVTZXJ2aWNlLCBuek1lbnVTZXJ2aWNlOiBOek1lbnVTZXJ2aWNlKTtcclxufVxyXG4iXX0=