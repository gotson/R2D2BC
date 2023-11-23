import Navigator from "./Navigator";
import Annotator from "../store/Annotator";
import { Publication } from "../model/Publication";
import { Locator, ReadingPosition } from "../model/Locator";
import { UserSettings, UserSettingsUIConfig } from "../model/user-settings/UserSettings";
import { BookmarkModule, BookmarkModuleConfig } from "../modules/BookmarkModule";
import { AnnotationModule, AnnotationModuleConfig } from "../modules/AnnotationModule";
import { SearchModule, SearchModuleConfig } from "../modules/search/SearchModule";
import { ContentProtectionModule, ContentProtectionModuleConfig } from "../modules/protection/ContentProtectionModule";
import { TextHighlighter, TextHighlighterConfig } from "../modules/highlight/TextHighlighter";
import { TimelineModule } from "../modules/positions/TimelineModule";
import BookView from "../views/BookView";
import { MediaOverlayModule, MediaOverlayModuleConfig } from "../modules/mediaoverlays/MediaOverlayModule";
import { D2Link, Link } from "../model/Link";
import { ReaderModule } from "../modules/ReaderModule";
import { TTSModuleConfig } from "../modules/TTS/TTSSettings";
import { PageBreakModule, PageBreakModuleConfig } from "../modules/pagebreak/PageBreakModule";
import { DefinitionsModule, DefinitionsModuleConfig } from "../modules/search/DefinitionsModule";
import EventEmitter from "eventemitter3";
import LineFocusModule, { LineFocusModuleConfig } from "../modules/linefocus/LineFocusModule";
import { HistoryModule } from "../modules/history/HistoryModule";
import CitationModule, { CitationModuleConfig } from "../modules/citation/CitationModule";
import { ConsumptionModule, ConsumptionModuleConfig } from "../modules/consumption/ConsumptionModule";
export type GetContent = (href: string) => Promise<string>;
export type GetContentBytesLength = (href: string, requestConfig?: RequestConfig) => Promise<number>;
export interface RequestConfig extends RequestInit {
    encoded?: boolean;
}
export interface NavigatorAPI {
    updateSettings: any;
    getContent: GetContent;
    getContentBytesLength: GetContentBytesLength;
    resourceReady: any;
    resourceAtStart: any;
    resourceAtEnd: any;
    resourceFitsScreen: any;
    updateCurrentLocation: any;
    onError?: (e: Error) => void;
}
export interface IFrameAttributes {
    margin: number;
    navHeight?: number;
    iframePaddingTop?: number;
    bottomInfoHeight?: number;
    sideNavPosition?: "left" | "right";
}
export interface IFrameNavigatorConfig {
    mainElement: HTMLElement;
    headerMenu?: HTMLElement | null;
    footerMenu?: HTMLElement | null;
    publication: Publication;
    settings: UserSettings;
    annotator?: Annotator;
    initialLastReadingPosition?: ReadingPosition;
    rights: Partial<ReaderRights>;
    api?: Partial<NavigatorAPI>;
    tts?: Partial<TTSModuleConfig>;
    injectables: Array<Injectable>;
    attributes?: IFrameAttributes;
    services?: PublicationServices;
    sample?: SampleRead;
    requestConfig?: RequestConfig;
    modules: ReaderModule[];
    highlighter: TextHighlighter;
}
export interface PublicationServices {
    positions?: URL;
    weight?: URL;
}
export interface SampleRead {
    isSampleRead?: boolean;
    limit?: number;
    popup?: string;
    minimum?: number;
}
export interface Injectable {
    type: string;
    url?: string;
    r2after?: boolean;
    r2before?: boolean;
    r2default?: boolean;
    fontFamily?: string;
    systemFont?: boolean;
    appearance?: string;
    async?: boolean;
}
export interface ReaderRights {
    enableBookmarks: boolean;
    enableAnnotations: boolean;
    enableTTS: boolean;
    enableSearch: boolean;
    enableDefinitions: boolean;
    enableContentProtection: boolean;
    enableTimeline: boolean;
    autoGeneratePositions: boolean;
    enableMediaOverlays: boolean;
    enablePageBreaks: boolean;
    enableLineFocus: boolean;
    customKeyboardEvents: boolean;
    enableHistory: boolean;
    enableCitations: boolean;
    enableConsumption: boolean;
}
export interface ReaderUI {
    settings: UserSettingsUIConfig;
}
export interface ReaderConfig {
    publication?: any;
    url: URL;
    userSettings?: any;
    initialAnnotations?: any;
    lastReadingPosition?: any;
    rights?: Partial<ReaderRights>;
    api?: Partial<NavigatorAPI>;
    tts?: Partial<TTSModuleConfig>;
    search?: Partial<SearchModuleConfig>;
    define?: Partial<DefinitionsModuleConfig>;
    protection?: Partial<ContentProtectionModuleConfig>;
    mediaOverlays?: Partial<MediaOverlayModuleConfig>;
    pagebreak?: Partial<PageBreakModuleConfig>;
    annotations?: Partial<AnnotationModuleConfig>;
    bookmarks?: Partial<BookmarkModuleConfig>;
    lineFocus?: Partial<LineFocusModuleConfig>;
    citations?: Partial<CitationModuleConfig>;
    consumption?: Partial<ConsumptionModuleConfig>;
    highlighter?: Partial<TextHighlighterConfig>;
    injectables: Array<Injectable>;
    injectablesFixed?: Array<Injectable>;
    useLocalStorage?: boolean;
    storageType?: string;
    attributes?: IFrameAttributes;
    services?: PublicationServices;
    sample?: SampleRead;
    requestConfig?: RequestConfig;
}
/** Class that shows webpub resources in an iframe, with navigation controls outside the iframe. */
export declare class IFrameNavigator extends EventEmitter implements Navigator {
    iframes: Array<HTMLIFrameElement>;
    currentTocUrl: string | undefined;
    headerMenu?: HTMLElement | null;
    mainElement: HTMLElement;
    publication: Publication;
    bookmarkModule?: BookmarkModule;
    annotationModule?: AnnotationModule;
    ttsModule?: ReaderModule;
    searchModule?: SearchModule;
    definitionsModule?: DefinitionsModule;
    contentProtectionModule?: ContentProtectionModule;
    highlighter?: TextHighlighter;
    timelineModule?: TimelineModule;
    pageBreakModule?: PageBreakModule;
    mediaOverlayModule?: MediaOverlayModule;
    lineFocusModule?: LineFocusModule;
    historyModule?: HistoryModule;
    citationModule?: CitationModule;
    consumptionModule?: ConsumptionModule;
    sideNavExpanded: boolean;
    currentChapterLink: D2Link;
    currentSpreadLinks: {
        left?: D2Link;
        right?: D2Link;
    };
    currentTOCRawLink: string;
    private nextChapterLink;
    private previousChapterLink;
    settings: UserSettings;
    private readonly annotator;
    view: BookView;
    private readonly eventHandler;
    private readonly touchEventHandler;
    private readonly keyboardEventHandler;
    private readonly sampleReadEventHandler;
    private nextChapterBottomAnchorElement;
    private previousChapterTopAnchorElement;
    private nextChapterAnchorElement;
    private previousChapterAnchorElement;
    private nextPageAnchorElement;
    private previousPageAnchorElement;
    private espandMenuIcon;
    private landmarksView;
    private landmarksSection;
    private pageListView;
    private links;
    private linksTopLeft;
    private linksBottom;
    private linksMiddle;
    private tocView;
    private loadingMessage;
    errorMessage: HTMLDivElement;
    private tryAgainButton;
    private goBackButton;
    private infoTop;
    private infoBottom;
    private bookTitle;
    private chapterTitle;
    private chapterPosition;
    private remainingPositions;
    private newPosition;
    private newElementId;
    private isBeingStyled;
    private isLoading;
    private readonly initialLastReadingPosition?;
    api?: Partial<NavigatorAPI>;
    rights: Partial<ReaderRights>;
    tts?: Partial<TTSModuleConfig>;
    injectables?: Array<Injectable>;
    attributes?: IFrameAttributes;
    services?: PublicationServices;
    sample?: SampleRead;
    requestConfig?: RequestConfig;
    private didInitKeyboardEventHandler;
    static create(config: IFrameNavigatorConfig): Promise<IFrameNavigator>;
    protected constructor(settings: UserSettings, annotator: Annotator | undefined, initialLastReadingPosition: ReadingPosition | undefined, publication: Publication, api?: Partial<NavigatorAPI>, rights?: Partial<ReaderRights>, tts?: Partial<TTSModuleConfig>, injectables?: Array<Injectable>, attributes?: IFrameAttributes, services?: PublicationServices, sample?: SampleRead, requestConfig?: RequestConfig, highlighter?: TextHighlighter, modules?: ReaderModule[]);
    stop(): void;
    spreads: HTMLDivElement;
    firstSpread: HTMLDivElement;
    protected start(mainElement: HTMLElement, headerMenu?: HTMLElement | null, footerMenu?: HTMLElement | null): Promise<void>;
    timeout: any;
    onResize: () => void;
    reload: () => Promise<void>;
    private setupEvents;
    isScrolling: boolean;
    private updateBookView;
    private loadManifest;
    private handleIFrameLoad;
    private injectInjectablesIntoIframeHead;
    /**
     * Displays standard error UI.
     */
    private abortOnError;
    private tryAgain;
    private precessContentForIframe;
    private static goBack;
    private handleEditClick;
    get hasMediaOverlays(): boolean;
    startReadAloud(): void;
    startReadAlong(): void;
    stopReadAloud(): void;
    stopReadAlong(): void;
    pauseReadAloud(): void;
    pauseReadAlong(): void;
    resumeReadAloud(): void;
    resumeReadAlong(): void;
    totalResources(): number;
    mostRecentNavigatedTocItem(): string;
    currentResource(): number | undefined;
    currentLink(): Array<Link | undefined>;
    tableOfContents(): any;
    landmarks(): any;
    pageList(): any;
    readingOrder(): any;
    atStart(): boolean;
    atEnd(): boolean;
    previousPage(): any;
    nextPage(): any;
    previousResource(): any;
    nextResource(): any;
    goTo(locator: Locator): any;
    currentLocator(): Locator;
    positions(): any;
    goToPosition(position: number): void;
    goToPage(page: number): Promise<void>;
    snapToSelector(selector: any): void;
    applyAttributes(attributes: IFrameAttributes): void;
    private handlePreviousPageClick;
    private handleNextPageClick;
    private handleClickThrough;
    private handleInternalLink;
    private handleNumberOfIframes;
    handleResize(): Promise<void>;
    updatePositionInfo(save?: boolean): void;
    savePosition: (() => void) & {
        clear(): void;
    };
    private handlePreviousChapterClick;
    private handleNextChapterClick;
    private hideView;
    private setActiveTOCItem;
    navigate(locator: Locator, history?: boolean): Promise<void>;
    checkResourcePosition: (() => void) & {
        clear(): void;
    };
    private showIframeContents;
    private showLoadingMessageAfterDelay;
    private hideIframeContents;
    private hideLoadingMessage;
    private saveCurrentReadingPosition;
    private static createBase;
    private static createCssLink;
    private static createJavascriptLink;
    activateMarker(id: any, position: any): void;
    deactivateMarker(): void;
    showLayer(layer: any): void;
    hideLayer(layer: any): void;
}
