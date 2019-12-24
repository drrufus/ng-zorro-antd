import { NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import { NzBreadCrumbComponent } from './nz-breadcrumb.component';
import * as i0 from "@angular/core";
export declare class NzBreadCrumbItemComponent {
    nzBreadCrumbComponent: NzBreadCrumbComponent;
    /**
     * Dropdown content of a breadcrumb item.
     */
    nzOverlay?: NzDropdownMenuComponent;
    constructor(nzBreadCrumbComponent: NzBreadCrumbComponent);
    static ɵfac: i0.ɵɵFactoryDef<NzBreadCrumbItemComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NzBreadCrumbItemComponent, "nz-breadcrumb-item", ["nzBreadcrumbItem"], { 'nzOverlay': "nzOverlay" }, {}, never>;
}
