import Annotator from "../store/Annotator";
import { IFrameNavigator, ReaderRights } from "../navigator/IFrameNavigator";
import { Publication } from "../model/Publication";
import { ReaderModule } from "./ReaderModule";
import { Annotation, Bookmark } from "../model/Locator";
import { IHighlight } from "./highlight/common/highlight";
export interface BookmarkModuleAPI {
    addBookmark: (bookmark: Bookmark) => Promise<Bookmark>;
    deleteBookmark: (bookmark: Bookmark) => Promise<Bookmark>;
}
export interface BookmarkModuleProperties {
    hideLayer?: boolean;
}
export interface BookmarkModuleConfig extends BookmarkModuleProperties {
    annotator: Annotator;
    headerMenu?: HTMLElement | null;
    rights: Partial<ReaderRights>;
    publication: Publication;
    initialAnnotations?: any;
    properties?: BookmarkModuleProperties;
    api?: BookmarkModuleAPI;
}
export declare class BookmarkModule implements ReaderModule {
    private readonly annotator;
    private rights;
    private publication;
    private bookmarksView;
    private sideNavSectionBookmarks;
    private readonly headerMenu?;
    private readonly initialAnnotations;
    navigator: IFrameNavigator;
    private readonly properties;
    private readonly api?;
    static create(config: BookmarkModuleConfig): Promise<any>;
    constructor(annotator: Annotator, rights: Partial<ReaderRights>, publication: Publication, properties: BookmarkModuleProperties, initialAnnotations?: any, api?: BookmarkModuleAPI, headerMenu?: HTMLElement | null);
    stop(): void;
    protected start(): Promise<void>;
    handleResize(): Promise<void>;
    initialize(): Promise<unknown>;
    deleteBookmark(bookmark: Bookmark): Promise<any>;
    saveBookmarkPlus(): Promise<any>;
    saveBookmark(): Promise<any>;
    private addBookmarkPlus;
    saveAnnotation(highlight: IHighlight): Promise<Annotation | undefined>;
    getBookmarks(): any;
    showBookmarks(): void;
    drawBookmarks(): Promise<void>;
    deleteSelectedHighlight(highlight: Annotation): Promise<any>;
    deleteLocalHighlight(id: any): Promise<any>;
    private createTree;
    private handleAnnotationLinkClick;
    private handleAnnotationLinkDeleteClick;
    private static readableTimestamp;
    getAnnotation(highlight: IHighlight): Promise<any>;
    getAnnotationByID(id: string): Promise<any>;
}
