import { ReaderModule } from "../ReaderModule";
import { Publication } from "../../model/Publication";
import { IFrameNavigator } from "../../navigator/IFrameNavigator";
import { Locator } from "../../model/Locator";
export declare enum Action {
    BookmarkCreated = "BookmarkCreated",
    HighlightCreated = "HighlightCreated"
}
export interface ConsumptionModuleAPI {
    startResearchSession: any;
    updateResearchSession: any;
    endResearchSession: any;
    idleSince: any;
    actionTracked: any;
}
export interface ConsumptionModuleProperties {
    enableTrackingSession?: boolean;
    updateSessionInterval?: number;
    enableTrackingActions?: boolean;
    idleTimeout?: number;
    responseTimeout?: number;
}
export interface ReadingSession {
    time: any;
    firstLocator: Locator;
    lastLocator: Locator;
    progress: any;
}
export interface ConsumptionModuleConfig extends ConsumptionModuleProperties {
    publication: Publication;
    properties?: ConsumptionModuleProperties;
    api?: ConsumptionModuleAPI;
}
export declare class ConsumptionModule implements ReaderModule {
    navigator: IFrameNavigator;
    private publication;
    private properties;
    api?: ConsumptionModuleAPI;
    startResearchTimer?: Date;
    researchSessionId: any;
    readingSessions: ReadingSession[];
    readingSessionsInterval: any;
    startReadingTimer: Date;
    firstReadingLocator: Locator;
    lastReadingLocator: Locator;
    private constructor();
    static create(config: ConsumptionModuleConfig): Promise<ConsumptionModule>;
    protected start(): Promise<void>;
    stop(): Promise<void>;
    initialize(iframe: HTMLIFrameElement): void;
    trackAction(locator: Locator, action: Action): void;
    startReadingSession(locator: Locator): void;
    continueReadingSession(locator: Locator): void;
    startResearchSession(): void;
    updateResearchSession(): void;
    endResearchSession(): void;
    timer: any;
    currSeconds: number;
    startIdleTimer(): void;
    resetTimer(): void;
}
