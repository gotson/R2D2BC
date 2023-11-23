import { IFrameNavigator } from "../../navigator/IFrameNavigator";
import { ReaderModule } from "../ReaderModule";
import { Locator } from "../../model/Locator";
import { Publication } from "../../model/Publication";
import Annotator from "../../store/Annotator";
export interface HistoryModuleProperties {
    hideLayer?: boolean;
}
export interface HistoryModuleConfig extends HistoryModuleProperties {
    annotator: Annotator;
    headerMenu?: HTMLElement | null;
    publication: Publication;
}
export declare class HistoryModule implements ReaderModule {
    readonly annotator: Annotator | null;
    navigator: IFrameNavigator;
    private readonly headerMenu?;
    private publication;
    private properties;
    private historyForwardAnchorElement;
    private historyBackAnchorElement;
    historyCurrentIndex: number;
    history: Array<Locator>;
    private constructor();
    static create(config: HistoryModuleConfig): Promise<HistoryModule>;
    stop(): Promise<void>;
    handleResize(): Promise<void>;
    setup(): void;
    push(locator: Locator, history: boolean): Promise<void>;
    protected start(): Promise<void>;
    handleHistoryForwardClick(event: MouseEvent): Promise<void>;
    historyForward(): Promise<void>;
    private handleHistoryBackClick;
    historyBack(): Promise<void>;
}
