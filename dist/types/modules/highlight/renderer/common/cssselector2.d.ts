export interface Options {
    root: Element;
    idName: (name: string) => boolean;
    className: (name: string) => boolean;
    tagName: (name: string) => boolean;
    seedMinLength: number;
    optimizedMinLength: number;
    threshold: number;
}
export declare function uniqueCssSelector(input: Element, doc: Document, options?: Partial<Options>): string;
