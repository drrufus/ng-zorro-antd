import { RouterLink, RouterLinkWithHref } from '@angular/router';
import * as i0 from "@angular/core";
/**
 * This component is for catching `routerLink` directive.
 */
export declare class NzTabLinkDirective {
    routerLink?: RouterLink | undefined;
    routerLinkWithHref?: RouterLinkWithHref | undefined;
    constructor(routerLink?: RouterLink | undefined, routerLinkWithHref?: RouterLinkWithHref | undefined);
    static ɵfac: i0.ɵɵFactoryDef<NzTabLinkDirective>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<NzTabLinkDirective, "a[nz-tab-link]", ["nzTabLink"], {}, {}, never>;
}
