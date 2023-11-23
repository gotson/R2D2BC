import { IFrameNavigator } from "../../navigator/IFrameNavigator";
import { ReaderModule } from "../ReaderModule";
import { IHighlight } from "../highlight/common/highlight";
import { ISelectionInfo } from "../highlight/common/selection";
import { Publication } from "../../model/Publication";
export interface PageBreakModuleProperties {
    hideLayer?: boolean;
}
export interface PageBreakModuleConfig extends PageBreakModuleProperties {
    headerMenu?: HTMLElement | null;
    publication: Publication;
}
export declare class PageBreakModule implements ReaderModule {
    navigator: IFrameNavigator;
    private readonly headerMenu?;
    private publication;
    private properties;
    private goToPageView;
    private goToPageNumberInput;
    private goToPageNumberButton;
    static create(config: PageBreakModuleConfig): Promise<PageBreakModule>;
    private constructor();
    stop(): Promise<void>;
    protected start(): Promise<void>;
    goToPageNumber(event: any): Promise<any>;
    handleResize(): Promise<void>;
    drawPageBreaks(): Promise<void>;
    createPageBreakHighlight(selectionInfo: ISelectionInfo, title: string): IHighlight;
}
