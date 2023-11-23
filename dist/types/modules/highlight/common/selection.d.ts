export interface IRangeInfo {
    startContainerElementCssSelector: string;
    startContainerChildTextNodeIndex: number;
    startOffset: number;
    endContainerElementCssSelector: string;
    endContainerChildTextNodeIndex: number;
    endOffset: number;
}
export declare function sameRanges(r1: IRangeInfo, r2: IRangeInfo): boolean;
export interface ISelectionInfo {
    rangeInfo: IRangeInfo;
    cleanText?: string;
    rawText?: string;
    range?: Range;
}
export declare function sameSelections(sel1: ISelectionInfo, sel2: ISelectionInfo): boolean;
export declare const _getCssSelectorOptions: {
    className: (_str: string) => boolean;
    idName: (_str: string) => boolean;
    tagName: (_str: string) => boolean;
};
