import { IFrameNavigator } from "../../navigator/IFrameNavigator";
import { ReaderModule } from "../ReaderModule";
import { TextHighlighter } from "../highlight/TextHighlighter";
import { IHighlight } from "../highlight/common/highlight";
import { ISelectionInfo } from "../highlight/common/selection";
import { Publication } from "../../model/Publication";
export interface DefinitionsModuleAPI {
    success: any;
    click: any;
    visible: any;
}
export interface Definition {
    order: number;
    terms: [string];
    result?: number;
    definition?: string;
}
export interface DefinitionsModuleProperties {
    definitions?: Definition[];
    color?: string;
    fullWordSearch?: boolean;
    hideLayer?: boolean;
}
export interface DefinitionsModuleConfig extends DefinitionsModuleProperties {
    api?: DefinitionsModuleAPI;
    publication: Publication;
    highlighter: TextHighlighter;
}
export declare class DefinitionsModule implements ReaderModule {
    properties: DefinitionsModuleProperties;
    api?: DefinitionsModuleAPI;
    private publication;
    navigator: IFrameNavigator;
    private currentChapterPopupResult;
    private currentPopupHighlights;
    private highlighter;
    static create(config: DefinitionsModuleConfig): Promise<DefinitionsModule>;
    private constructor();
    stop(): Promise<void>;
    protected start(): Promise<void>;
    searchAndPaint(item: Definition, callback: (result: any) => any): Promise<void>;
    definitions: (() => Promise<void>) & {
        clear(): void;
    };
    define(item: Definition): Promise<void>;
    drawDefinitions(): Promise<void>;
    handleResize(): Promise<void>;
    createDefinitionHighlight(selectionInfo: ISelectionInfo, item: Definition): IHighlight;
    addDefinition(definition: any): Promise<void>;
    clearDefinitions(): Promise<void>;
}
