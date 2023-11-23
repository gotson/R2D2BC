import { Annotation, Bookmark, Locator } from "./model/Locator";
import { UserSettingsIncrementable } from "./model/user-settings/UserProperties";
import { UserSettings } from "./model/user-settings/UserSettings";
import { IMediaOverlayUserSettings, MediaOverlayIncrementable } from "./modules/mediaoverlays/MediaOverlaySettings";
import { ITTSUserSettings, TTSIncrementable } from "./modules/TTS/TTSSettings";
import { IFrameAttributes, ReaderConfig } from "./navigator/IFrameNavigator";
/**
 * A class that, once instantiated using the public `.build` method,
 * is the primary interface into the D2 Reader.
 * @TODO :
 *  - Type all function arguments
 *  - DEV logger
 *  - Default config
 *  - Different types for initial config and final config
 *  - Testing
 */
export default class D2Reader {
    private readonly settings;
    private readonly navigator;
    private readonly highlighter?;
    private readonly bookmarkModule?;
    private readonly annotationModule?;
    private readonly ttsSettings?;
    private readonly ttsModule?;
    private readonly searchModule?;
    private readonly definitionsModule?;
    private readonly contentProtectionModule?;
    private readonly timelineModule?;
    private readonly mediaOverlaySettings?;
    private readonly mediaOverlayModule?;
    private readonly pageBreakModule?;
    private readonly lineFocusModule?;
    private readonly historyModule?;
    private readonly citationModule?;
    private readonly consumptionModule?;
    private constructor();
    addEventListener(): void;
    /**
     * The async builder.
     */
    static load(initialConfig: ReaderConfig): Promise<D2Reader>;
    /**
     * Read Aloud
     */
    /** Start TTS Read Aloud */
    startReadAloud: () => void;
    /** Start TTS Read Aloud */
    stopReadAloud: () => void;
    /** Start TTS Read Aloud */
    pauseReadAloud: () => void;
    /** Start TTS Read Aloud */
    resumeReadAloud: () => void;
    /**
     * Read Along
     */
    /** Start Media Overlay Read Along */
    startReadAlong: () => void;
    /** Stop Media Overlay Read Along */
    stopReadAlong: () => void;
    /** Pause Media Overlay Read Along */
    pauseReadAlong: () => void;
    /** Resume Media Overlay Read Along */
    resumeReadAlong: () => void;
    get hasMediaOverlays(): boolean;
    /**
     * Bookmarks and annotations
     */
    /** Save bookmark by progression */
    saveBookmark: () => Promise<any>;
    /** Save bookmark by annotation */
    saveBookmarkPlus: () => Promise<any>;
    /** Delete bookmark */
    deleteBookmark: (bookmark: Bookmark) => Promise<any>;
    /** Delete annotation */
    deleteAnnotation: (highlight: Annotation) => Promise<any>;
    /** Add annotation */
    addAnnotation: (highlight: Annotation) => Promise<any>;
    /** Hide Annotation Layer */
    hideAnnotationLayer: () => void | undefined;
    /** Show Annotation Layer */
    showAnnotationLayer: () => void | undefined;
    /** Hide  Layer */
    hideLayer: (layer: any) => false | void;
    /** Show  Layer */
    showLayer: (layer: any) => false | void;
    /** Activate Marker <br>
     * Activated Marker will be used for active annotation creation */
    activateMarker: (id: string, position: string) => false | void;
    /** Deactivate Marker */
    deactivateMarker: () => false | void;
    /**
     * Definitions
     */
    /** Clear current definitions */
    clearDefinitions: () => Promise<void>;
    /** Add newt definition */
    addDefinition: (definition: any) => Promise<void>;
    /** Table of Contents */
    get tableOfContents(): any;
    /** Landmarks */
    get landmarks(): any;
    /** Page List */
    get pageList(): any;
    /** Reading Order or Spine */
    get readingOrder(): any;
    /** Current Bookmarks */
    get bookmarks(): any;
    /** Current Annotations */
    get annotations(): any;
    /** History */
    get history(): Locator[] | undefined;
    /** Current index of history */
    get historyCurrentIndex(): number | undefined;
    /** History Back */
    historyBack: () => Promise<void | undefined>;
    /** History Forward */
    historyForward: () => Promise<void | undefined>;
    /**
     * Search
     */
    /** Search by term and current resource or entire book <br>
     * current = true, will search only current resource <br>
     * current = false, will search entire publication */
    search: (term: string, current: boolean) => Promise<any>;
    goToSearchIndex: (href: string, index: number, current: boolean) => Promise<void>;
    goToSearchID: (href: string, index: number, current: boolean) => Promise<void>;
    clearSearch: () => Promise<void>;
    /**
     * Resources
     */
    get currentResource(): any;
    get mostRecentNavigatedTocItem(): string | false;
    get totalResources(): any;
    get publicationLanguage(): any;
    /**
     * Settings
     */
    get currentSettings(): {
        appearance: string;
        fontFamily: string;
        textAlignment: string;
        columnCount: string;
        verticalScroll: boolean;
        fontSize: number;
        wordSpacing: number;
        letterSpacing: number;
        pageMargins: number;
        lineHeight: number;
    };
    resetUserSettings: () => Promise<void>;
    applyUserSettings: (userSettings: Partial<UserSettings>) => Promise<void>;
    scroll: (value: boolean, direction?: string) => Promise<void>;
    private isTTSIncrementable;
    private isMOIncrementable;
    /**
     * Used to increase anything that can be increased,
     * such as pitch, rate, volume, fontSize
     */
    increase: (incremental: UserSettingsIncrementable | TTSIncrementable | MediaOverlayIncrementable) => Promise<void>;
    /**
     * Used to decrease anything that can be decreased,
     * such as pitch, rate, volume, fontSize
     */
    decrease: (incremental: UserSettingsIncrementable | TTSIncrementable | MediaOverlayIncrementable) => Promise<void>;
    /**
     * Publisher?
     * Disabled
     */
    /**
     * TTS Settings
     */
    resetTTSSettings: () => void;
    applyTTSSettings: (ttsSettings: Partial<ITTSUserSettings>) => Promise<void>;
    /**
     * Disabled
     */
    applyPreferredVoice: (value: string) => Promise<void>;
    /**
     * Media Overlay Settings
     */
    resetMediaOverlaySettings: () => Promise<void>;
    applyMediaOverlaySettings: (settings: Partial<IMediaOverlayUserSettings>) => Promise<void>;
    /**
     * Navigation
     * @TODO : These should return promises that complete when they are done.
     */
    get currentLocator(): any;
    get positions(): any;
    goTo: (locator: Locator) => Promise<void>;
    goToPosition: (value: number) => Promise<any>;
    goToPage: (page: number) => Promise<void>;
    fitToPage: () => void;
    fitToWidth: () => void;
    zoomIn: () => void;
    zoomOut: () => void;
    activateHand: () => void;
    deactivateHand: () => void;
    copyToClipboard: (text: any) => void;
    nextResource: () => void;
    previousResource: () => void;
    nextPage: () => Promise<void>;
    previousPage: () => Promise<void>;
    get atStart(): boolean;
    get atEnd(): boolean;
    snapToSelector: (selector: any) => Promise<void>;
    /**
     * You have attributes in the reader when you initialize it. You can set margin, navigationHeight etc...
     * This is in case you change the attributes after initializing the reader.
     */
    applyAttributes: (value: IFrameAttributes) => void;
    applyLineFocusSettings(userSettings: any): Promise<void>;
    lineUp(): void;
    lineDown(): void;
    enableLineFocus(): Promise<void>;
    lineFocus(active: boolean): Promise<void>;
    disableLineFocus(): void;
    /**
     * Destructor:
     * Only used in react applications because when they re-visit the page
     * it tried to create a new reader, which interfered with the first one.
     */
    stop: () => void;
}
