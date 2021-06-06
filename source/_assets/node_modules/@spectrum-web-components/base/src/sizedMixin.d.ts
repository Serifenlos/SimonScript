import { UpdatingElement } from 'lit-element';
declare type Constructor<T = Record<string, unknown>> = {
    new (...args: any[]): T;
    prototype: T;
};
export declare type ElementSize = 's' | 'm' | 'l' | 'xl' | 'xxl';
export interface SizedElementInterface {
    size: ElementSize;
}
export declare function SizedMixin<T extends Constructor<UpdatingElement>>(constructor: T, { validSizes, noDefaultSize, }?: {
    validSizes?: ElementSize[];
    noDefaultSize?: boolean;
}): T & Constructor<SizedElementInterface>;
export {};
