import { IRangeInfo } from "../highlight/common/selection";
export interface ISearchResult {
    rangeInfo: IRangeInfo;
    textMatch: string;
    textBefore: string;
    textAfter: string;
    href: string;
    title: string;
    uuid: string;
    highlight?: any;
}
export declare function escapeRegExp(str: string): string;
export declare const reset: () => void;
export declare function searchDocDomSeek(searchInput: string, doc: Document | null, href: string, title: string, fullWordSearch?: boolean): Promise<ISearchResult[]>;
