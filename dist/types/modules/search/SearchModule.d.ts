import { Publication } from "../../model/Publication";
import { IFrameNavigator } from "../../navigator/IFrameNavigator";
import { ReaderModule } from "../ReaderModule";
import { TextHighlighter } from "../highlight/TextHighlighter";
import { IHighlight } from "../highlight/common/highlight";
import { ISelectionInfo } from "../highlight/common/selection";
export interface SearchModuleAPI {
}
export interface SearchModuleProperties {
    color?: string;
    current?: string;
    hideLayer?: boolean;
}
export interface SearchModuleConfig extends SearchModuleProperties {
    api?: SearchModuleAPI;
    publication: Publication;
    headerMenu?: HTMLElement | null;
    highlighter: TextHighlighter;
}
export declare class SearchModule implements ReaderModule {
    private properties;
    private api?;
    private publication;
    private readonly headerMenu?;
    navigator: IFrameNavigator;
    private searchInput;
    private searchGo;
    private currentChapterSearchResult;
    private bookSearchResult;
    private currentSearchHighlights;
    private highlighter?;
    static create(config: SearchModuleConfig): Promise<SearchModule>;
    private constructor();
    stop(): Promise<void>;
    protected start(): Promise<void>;
    private handleSearch;
    handleSearchChapter(index?: number): Promise<void>;
    searchAndPaintChapter(term: string, index: number | undefined, callback: (result: any) => any): Promise<void>;
    createSearchHighlight(selectionInfo: ISelectionInfo, color: string): IHighlight;
    clearSearch(): void;
    search(term: string, current: boolean): Promise<any>;
    goToSearchID(href: string, index: number, current: boolean): Promise<void>;
    goToSearchIndex(href: string, index: number, current: boolean): Promise<void>;
    private handleSearchBook;
    searchBook(term: string): Promise<any>;
    decodeBase64(base64: any): string;
    searchChapter(term: string): Promise<any>;
    drawSearch(): void;
    handleResize(): Promise<void>;
    jumpToMark(index: number): void;
    paginate(items: Array<any>, page: number, per_page: number): {
        page: number;
        per_page: number;
        pre_page: number | undefined;
        next_page: number | undefined;
        total: number;
        total_pages: number;
        data: any[];
    };
}
