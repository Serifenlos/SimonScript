import { SpectrumElement, PropertyValues } from '@spectrum-web-components/base';
declare type DisableableElement = HTMLElement & {
    disabled?: boolean;
};
declare const Focusable_base: typeof SpectrumElement;
/**
 * Focusable base class handles tabindex setting into shadowed elements automatically.
 *
 * This implementation is based heavily on the aybolit delegate-focus-mixin at
 * https://github.com/web-padawan/aybolit/blob/master/packages/core/src/mixins/delegate-focus-mixin.js
 */
export declare class Focusable extends Focusable_base {
    /**
     * Disable this control. It will not receive focus or events
     */
    disabled: boolean;
    /**
     * When this control is rendered, focus it automatically
     * @private
     */
    autofocus: boolean;
    /**
     * The tab index to apply to this control. See general documentation about
     * the tabindex HTML property
     *
     * @private
     */
    get tabIndex(): number;
    set tabIndex(tabIndex: number);
    private _tabIndex;
    private manageFocusElementTabindex;
    private manipulatingTabindex;
    /**
     * @private
     */
    get focusElement(): DisableableElement;
    focus(): void;
    blur(): void;
    click(): void;
    protected manageAutoFocus(): void;
    protected firstUpdated(changes: PropertyValues): void;
    protected update(changedProperties: Map<string, boolean>): void;
    protected updated(changedProperties: PropertyValues): void;
    private handleDisabledChanged;
}
export {};
