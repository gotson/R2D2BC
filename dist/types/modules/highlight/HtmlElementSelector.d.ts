export interface HtmlElementSelector {
    /** selector */
    selector: string;
    /** childIndexOf */
    childIndexOf: number;
    /** offset */
    offset: number;
}
export declare const find: (result: HtmlElementSelector, document: Document) => Node;
export declare const generateSelector: (node: Node, relativeTo: Node) => HtmlElementSelector;
export declare const childNodeIndexOf: (parentNode: Node, childNode: Node) => number;
export declare const computedNthIndex: (childElement: HTMLElement) => number;
