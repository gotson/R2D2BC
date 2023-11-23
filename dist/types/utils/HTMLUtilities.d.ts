/** Returns a single element matching the selector within the parentElement,
    or null if no element matches. */
export declare function findElement(parentElement: Element | Document, selector: string): any | null;
/** Returns a single element matching the selector within the parent element,
    or throws an exception if no element matches. */
export declare function findRequiredElement(parentElement: Element | Document, selector: string): any;
/** Returns a single element matching the selector within the parentElement in the iframe context,
    or null if no element matches. */
export declare function findIframeElement(parentElement: Document | null, selector: string): Element | null;
/** Returns a single element matching the selector within the parent element in an iframe context,
        or throws an exception if no element matches. */
export declare function findRequiredIframeElement(parentElement: Document, selector: string): Element;
/** Sets an attribute and its value for an HTML element */
export declare function setAttr(element: HTMLElement, attr: string, value: string): void;
/** Removes an attribute for an HTML element */
export declare function removeAttr(element: HTMLElement, attr: string): void;
/** Creates an internal stylesheet in an HTML element */
export declare function createStylesheet(element: Document | HTMLElement, id: string, cssStyles: string): void;
/** Removes an existing internal stylesheet in an HTML element */
export declare function removeStylesheet(element: Document | HTMLElement, id: string): void;
