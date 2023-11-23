import { IRangeInfo, ISelectionInfo } from "../../common/selection";
export declare function clearCurrentSelection(win: Window): void;
export declare function getCurrentSelectionInfo(win: Window, getCssSelector: (element: Element) => string | undefined): ISelectionInfo | undefined;
export declare function createOrderedRange(startNode: Node, startOffset: number, endNode: Node, endOffset: number): Range | undefined;
export declare function convertRange(range: Range, getCssSelector: (element: Element) => string | undefined): IRangeInfo | undefined;
export declare function convertRangeInfo(documant: Document, rangeInfo: IRangeInfo): Range | undefined;
export declare function normalizeRange(r: Range): Range;
