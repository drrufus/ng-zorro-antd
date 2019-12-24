import { Observable } from 'rxjs';
import { NzConfig, NzConfigKey } from './config';
import * as i0 from "@angular/core";
export declare class NzConfigService {
    private configUpdated$;
    /** Global config holding property. */
    private config;
    constructor(defaultConfig?: NzConfig);
    getConfigForComponent<T extends NzConfigKey>(componentName: T): NzConfig[T];
    getConfigChangeEventForComponent(componentName: NzConfigKey): Observable<void>;
    set<T extends NzConfigKey>(componentName: T, value: NzConfig[T]): void;
    static ɵfac: i0.ɵɵFactoryDef<NzConfigService>;
    static ɵprov: i0.ɵɵInjectableDef<NzConfigService>;
}
/**
 * This decorator is used to decorate properties. If a property is decorated, it would try to load default value from
 * config.
 */
export declare function WithConfig<T>(componentName: NzConfigKey, innerDefaultValue?: T): (target: any, propName: any, originalDescriptor?: TypedPropertyDescriptor<T> | undefined) => any;
