import { LitElement, UpdatingElement } from 'lit-element';
declare type Constructor<T = Record<string, unknown>> = {
    new (...args: any[]): T;
    prototype: T;
};
export interface SpectrumInterface {
    shadowRoot: ShadowRoot;
    isLTR: boolean;
    dir: 'ltr' | 'rtl';
}
export declare function SpectrumMixin<T extends Constructor<UpdatingElement>>(constructor: T): T & Constructor<SpectrumInterface>;
declare const SpectrumElement_base: typeof LitElement & Constructor<SpectrumInterface>;
export declare class SpectrumElement extends SpectrumElement_base {
}
export {};
