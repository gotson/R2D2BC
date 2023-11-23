import { Publication } from "../../model/Publication";
import { IFrameNavigator } from "../../navigator/IFrameNavigator";
import { ReaderModule } from "../ReaderModule";
import { Link } from "../../model/Link";
import { MediaOverlayNode } from "r2-shared-js/dist/es6-es2015/src/models/media-overlay";
import { MediaOverlaySettings } from "./MediaOverlaySettings";
export interface MediaOverlayModuleAPI {
    started: any;
    stopped: any;
    paused: any;
    resumed: any;
    finished: any;
    updateSettings: any;
}
export interface MediaOverlayModuleProperties {
    color?: string;
    autoScroll?: boolean;
    autoTurn?: boolean;
    volume?: number;
    rate?: number;
    wait?: number;
    hideLayer?: boolean;
}
export interface MediaOverlayModuleConfig extends MediaOverlayModuleProperties {
    publication: Publication;
    settings: MediaOverlaySettings;
    api?: MediaOverlayModuleAPI;
}
export declare class MediaOverlayModule implements ReaderModule {
    private publication;
    navigator: IFrameNavigator;
    private audioElement;
    settings: MediaOverlaySettings;
    private properties;
    private play;
    private pause;
    private currentAudioBegin;
    private currentAudioEnd;
    private currentLinks;
    private currentLinkIndex;
    private currentAudioUrl;
    private previousAudioUrl;
    private previousAudioEnd;
    private mediaOverlayRoot;
    private mediaOverlayTextAudioPair;
    private pid;
    private __ontimeupdate;
    static create(config: MediaOverlayModuleConfig): MediaOverlayModule;
    private constructor();
    stop(): void;
    protected start(): void;
    initialize(): Promise<void>;
    initializeResource(links: Array<Link | undefined>): Promise<void>;
    private playLink;
    startReadAloud(): Promise<void>;
    stopReadAloud(): Promise<void>;
    pauseReadAloud(): void;
    resumeReadAloud(): Promise<void>;
    findDepthFirstTextAudioPair(textHref: string, mo: MediaOverlayNode, textFragmentIDChain: Array<string | null> | undefined): MediaOverlayNode | undefined | null;
    myReq: any;
    trackCurrentTime(): void;
    mediaOverlaysNext(escape?: boolean): void;
    mediaOverlaysStop(): void;
    mediaOverlaysPause(): void;
    findNextTextAudioPair(mo: MediaOverlayNode, moToMatch: MediaOverlayNode, previousMo: {
        prev: MediaOverlayNode | undefined;
    }, escape: boolean): MediaOverlayNode | undefined | null;
    playMediaOverlaysAudio(moTextAudioPair: MediaOverlayNode, begin: number | undefined, end: number | undefined): Promise<void>;
    playMediaOverlays(textHref: string, rootMo: MediaOverlayNode, textFragmentIDChain: Array<string | null> | undefined): Promise<void>;
    ontimeupdate: (_v: Event) => Promise<void>;
    ensureOnTimeUpdate: (remove: boolean, replace: boolean) => void;
    mediaOverlayHighlight(id: string | undefined): void;
}
