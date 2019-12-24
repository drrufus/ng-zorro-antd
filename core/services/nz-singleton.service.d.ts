import * as i0 from "@angular/core";
/**
 * Some singletons should have life cycle that is same to Angular's. This service make sure that
 * those singletons get destroyed in HMR.
 */
export declare class NzSingletonService {
    private readonly singletonRegistry;
    /**
     * This registry is used to register singleton in dev mode.
     * So that singletons get destroyed when hot module reload happens.
     *
     * This works in prod mode too but with no specific effect.
     */
    private _singletonRegistry;
    registerSingletonWithKey(key: string, target: any): void;
    getSingletonWithKey<T>(key: string): T | null;
    private withNewTarget;
    static ɵfac: i0.ɵɵFactoryDef<NzSingletonService>;
    static ɵprov: i0.ɵɵInjectableDef<NzSingletonService>;
}
