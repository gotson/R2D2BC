import { Publication } from "../../model/Publication";
import { IFrameNavigator } from "../../navigator/IFrameNavigator";
import { ReaderModule } from "../ReaderModule";
import { TextHighlighter } from "../highlight/TextHighlighter";
export interface LineFocusModuleAPI {
}
export interface LineFocusModuleProperties {
    api?: LineFocusModuleAPI;
    lines?: number;
    maxHeight?: number;
}
export interface LineFocusModuleConfig extends LineFocusModuleProperties {
    api?: LineFocusModuleAPI;
    publication: Publication;
    highlighter: TextHighlighter;
}
export default class LineFocusModule implements ReaderModule {
    properties: LineFocusModuleProperties;
    api?: LineFocusModuleAPI;
    navigator: IFrameNavigator;
    private highlighter;
    private hasEventListener;
    lines: Array<HTMLElement>;
    index: number;
    isActive: boolean;
    isDebug: boolean;
    lineFocusContainer: HTMLElement | null;
    readerContainer: HTMLElement | null;
    lineFocusTopBlinder: HTMLElement | null;
    lineFocusBottomBlinder: HTMLElement | null;
    static create(config: LineFocusModuleConfig): Promise<LineFocusModule>;
    private constructor();
    stop(): Promise<void>;
    protected start(): Promise<void>;
    initialize(iframe: HTMLIFrameElement): Promise<unknown>;
    private keydown;
    private keyup;
    handleResize(): void;
    enableLineFocus(): Promise<void>;
    wrapperHeight: string | undefined;
    disableLineFocus(resetHeight?: boolean): void;
    lineFocus(): void;
    currentLine(): void;
    lineDown(): void;
    lineUp(): void;
    almostEqual(a: number, b: number, tolerance: number): boolean;
    findRects(parent: HTMLElement): any;
    findTextNodes(parentElement: Element, nodes?: Array<Element>): Array<Element>;
    measureTextNodes(node: Element): any;
    measureImageNodes(node: Element): any;
}
