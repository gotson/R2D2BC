import { ReaderModule } from "../ReaderModule";
import { IFrameNavigator } from "../../navigator/IFrameNavigator";
export interface ContentProtectionModuleProperties {
    enforceSupportedBrowsers: boolean;
    enableEncryption: boolean;
    enableObfuscation: boolean;
    disablePrint: boolean;
    disableCopy: boolean;
    canCopy: boolean;
    charactersToCopy: number;
    detectInspect: boolean;
    clearOnInspect: boolean;
    detectInspectInitDelay: number;
    disableKeys: boolean;
    disableContextMenu: boolean;
    hideTargetUrl: boolean;
    disableDrag: boolean;
    supportedBrowsers: string[];
    excludeNodes: string[];
}
export interface ContentProtectionModuleConfig extends Partial<ContentProtectionModuleProperties> {
    api?: ContentProtectionModuleAPI;
}
export interface ContentProtectionModuleAPI {
    inspectDetected: () => void;
}
interface ContentProtectionRect {
    node: Element;
    height: number;
    top: number;
    width: number;
    left: number;
    textContent: string;
    scrambledTextContent: string;
    isObfuscated: boolean;
}
export declare class ContentProtectionModule implements ReaderModule {
    private rects;
    navigator: IFrameNavigator;
    properties?: ContentProtectionModuleProperties;
    private hasEventListener;
    private isHacked;
    private securityContainer;
    private mutationObserver;
    private wrapper;
    citation: boolean;
    static setupPreloadProtection(config: Partial<ContentProtectionModuleConfig>): Promise<void>;
    static create(config: ContentProtectionModuleConfig): Promise<ContentProtectionModule>;
    constructor(properties?: ContentProtectionModuleProperties);
    private static startInspectorProtection;
    private static isCurrentBrowserSupported;
    protected start(): Promise<void>;
    stop(): Promise<void>;
    observe(): any;
    deactivate(): Promise<void>;
    activate(): Promise<void>;
    private setupEvents;
    initializeResource(): void;
    initialize(iframe: HTMLIFrameElement): Promise<void>;
    handleScroll(): void;
    handleResize(): void;
    disableContext(e: {
        preventDefault: () => void;
        stopPropagation: () => void;
    }): boolean;
    disableSave(event: {
        keyCode: any;
        metaKey: any;
        ctrlKey: any;
        key: string;
        preventDefault: () => void;
        stopPropagation: () => void;
    }): boolean;
    preventCopy(event: {
        clipboardData: {
            setData: (arg0: string, arg1: any) => void;
        };
        preventDefault: () => void;
        stopPropagation: () => void;
    }): boolean;
    preventCopyKey(event: {
        keyCode: any;
        metaKey: any;
        ctrlKey: any;
        key: string;
        preventDefault: () => void;
        stopPropagation: () => void;
    }): boolean;
    restrictCopy(event: {
        clipboardData: {
            getData: (arg0: string) => any;
            setData: (arg0: string, arg1: any) => void;
        };
        preventDefault: () => void;
        stopPropagation: () => void;
    }): false | undefined;
    restrictCopyKey(event: any): boolean;
    copyToClipboard(textToClipboard: any): void;
    createElementForExecCommand(textToClipboard: any): HTMLDivElement;
    selectContent(element: any): void;
    beforePrint(event: {
        preventDefault: () => void;
        stopPropagation: () => void;
    }): boolean;
    afterPrint(event: {
        preventDefault: () => void;
        stopPropagation: () => void;
    }): boolean;
    hideTargetUrls(activate: any): void;
    preventDrag(activate: any): void;
    recalculate(delay?: number): Promise<boolean>;
    calcRects(rects: Array<ContentProtectionRect>): void;
    deactivateRect(rect: ContentProtectionRect, securityContainer: HTMLElement, isHacked: boolean): void;
    toggleRect(rect: ContentProtectionRect, securityContainer: HTMLElement, isHacked: boolean): void;
    findRects(parent: HTMLElement): Array<ContentProtectionRect>;
    obfuscateText(text: string): string;
    measureTextNode(node: Element): any;
    isBeingHacked(element: HTMLElement): boolean;
    isOutsideViewport(rect: ContentProtectionRect): boolean;
    findTextNodes(parentElement: Element, nodes?: Array<Element>): Array<Element>;
    scramble(str: any, letters?: boolean, paragraph?: boolean): any;
}
export {};
