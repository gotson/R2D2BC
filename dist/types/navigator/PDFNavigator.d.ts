import EventEmitter from "eventemitter3";
import Navigator from "./Navigator";
import { UserSettings } from "../model/user-settings/UserSettings";
import { Publication } from "../model/Publication";
import { Locator } from "../model/Locator";
import { NavigatorAPI } from "./IFrameNavigator";
export interface PDFNavigatorConfig {
    mainElement: HTMLElement;
    headerMenu?: HTMLElement | null;
    footerMenu?: HTMLElement | null;
    publication: Publication;
    settings: UserSettings;
    api?: Partial<NavigatorAPI>;
}
export declare enum ScaleType {
    Page = 0,
    Width = 1
}
export declare class PDFNavigator extends EventEmitter implements Navigator {
    settings: UserSettings;
    publication: Publication;
    headerMenu?: HTMLElement | null;
    footerMenu?: HTMLElement | null;
    mainElement: HTMLElement;
    pdfContainer: HTMLElement;
    wrapper: HTMLElement;
    api?: Partial<NavigatorAPI>;
    pdfDoc: any;
    pageNum: number;
    scaleType: ScaleType;
    pageRendering: boolean;
    pageNumPending: any;
    scale: number;
    resourceIndex: number;
    resource: any;
    private handTool;
    static create(config: PDFNavigatorConfig): Promise<PDFNavigator>;
    protected constructor(settings: UserSettings, publication: Publication, api?: Partial<NavigatorAPI>);
    protected start(mainElement: HTMLElement, headerMenu?: HTMLElement | null, footerMenu?: HTMLElement | null): Promise<void>;
    timeout: any;
    onResize: () => void;
    handleResize(): Promise<void>;
    private setupEvents;
    loadPDFJS(num: any): void;
    queueRenderPage(num: any): void;
    readingOrder(): any;
    tableOfContents(): any;
    landmarks(): any;
    pageList(): any;
    currentResource(): any;
    totalResources(): any;
    currentLocator(): any;
    positions(): any;
    nextPage(): void;
    previousPage(): void;
    nextResource(): void;
    previousResource(): void;
    goTo(locator: Locator): void;
    goToPosition(value: number): void;
    goToPage(page: number): Promise<void>;
    fitToWidth(): void;
    fitToPage(): void;
    zoomIn(): void;
    zoomOut(): void;
    activateHand(): void;
    deactivateHand(): void;
    scroll(scroll: boolean, direction?: string): Promise<void>;
    stop(): void;
}
