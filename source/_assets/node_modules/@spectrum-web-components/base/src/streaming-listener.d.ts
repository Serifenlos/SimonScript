import { Part } from 'lit-html';
declare type StreamingEvent = {
    type: string | string[];
    fn: (event: any) => void;
};
/**
 * For AttributeParts, sets the attribute if the value is defined and removes
 * the attribute if the value is undefined.
 *
 * For other part types, this directive is a no-op.
 */
export declare const streamingListener: (start: StreamingEvent, stream: StreamingEvent, end: StreamingEvent) => (part: Part) => void;
export {};
