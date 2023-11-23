import { ReaderModule } from "../ReaderModule";
import { TTSModuleAPI, TTSModuleConfig, TTSModuleProperties, TTSSettings } from "./TTSSettings";
import { IFrameNavigator, ReaderRights } from "../../navigator/IFrameNavigator";
import { TextHighlighter } from "../highlight/TextHighlighter";
import { IHighlight } from "../highlight/common/highlight";
import { ISelectionInfo } from "../highlight/common/selection";
export declare class TTSModule2 implements ReaderModule {
    private tts;
    private voices;
    private clean;
    private rights;
    private readonly highlighter;
    navigator: IFrameNavigator;
    private body;
    private hasEventListener;
    private readonly headerMenu?;
    private readonly properties;
    private readonly api?;
    private wrapper;
    initialize(body: any): void;
    startX: number;
    startY: number;
    private clickStart;
    private click;
    private initVoices;
    cancel(api?: boolean): void;
    index: number;
    speak(selectionInfo: ISelectionInfo | undefined, partial: boolean, callback: () => void): Promise<any>;
    private setVoice;
    speakPlay(): void;
    speakPause(): void;
    speakResume(): void;
    static create(config: TTSModuleConfig): Promise<TTSModule2>;
    constructor(tts: TTSSettings, rights: Partial<ReaderRights>, highlighter: TextHighlighter, properties: TTSModuleProperties, api?: TTSModuleAPI, headerMenu?: HTMLElement | null);
    protected start(): Promise<void>;
    userScrolled: boolean;
    scrollPartial: boolean;
    private wheel;
    stop(): void;
    generateTtsQueue(rootElement: Element): ITtsQueueItem[];
    findTtsQueueItemIndex(ttsQueue: ITtsQueueItem[], element: Element, startTextNode: Node | undefined, startTextNodeOffset: number, rootElem: Element): number;
    speaking: boolean;
    restartIndex: number;
    private restart;
    startTTSSession(ttsQueue: ITtsQueueItem[], ttsQueueIndexStart: number): void;
    ttsPlayQueueIndex(ttsQueueIndex: number, ttsQueue: any): void;
    ttsQueueIndex: number;
    ttsQueue?: ITtsQueueItem[];
    ttsPlayQueueIndexDebounced: ((ttsQueueIndex: number, ttsQueue: any) => void) & {
        clear(): void;
    };
    updateTTSInfo(ttsQueueItem: any, charIndex: number, charLength: number, startIndex: number, utteranceText: string | undefined): string | undefined;
    _ttsQueueItemHighlightsWord: IHighlight | undefined;
    wrapHighlightWord(ttsQueueItemRef: ITtsQueueItemReference, utteranceText: string, charIndex: number, charLength: number, word: string, start: number, end: number): void;
}
export interface ITtsQueueItem {
    dir: string | undefined;
    lang: string | undefined;
    parentElement: Element;
    textNodes: Node[];
    combinedText: string;
}
export interface ITtsQueueItemReference {
    item: ITtsQueueItem;
    iArray: number;
    iSentence: number;
    iGlobal: number;
}
export declare function getLanguage(el: Element): string | undefined;
export declare function getDirection(el: Element): string | undefined;
export declare function combineTextNodes(textNodes: Node[], skipNormalize?: boolean): string;
export declare function normalizeHtmlText(str: string): string;
export declare function normalizeText(str: string): string;
export declare function getTtsQueueItemRef(items: ITtsQueueItem[], index: number): ITtsQueueItemReference | undefined;
export declare function getTtsQueueItemRefText(obj: ITtsQueueItemReference): string;
