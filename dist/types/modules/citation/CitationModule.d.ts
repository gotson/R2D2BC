import { Publication } from "../../model/Publication";
import { IFrameNavigator } from "../../navigator/IFrameNavigator";
import { ReaderModule } from "../ReaderModule";
import { TextHighlighter } from "../highlight/TextHighlighter";
export declare enum CitationStyle {
    Chicago = 0,
    MLA = 1,
    APA = 2
}
export declare enum ContributorType {
    Author = "Author",
    Editor = "Editor",
    Translator = "Translator",
    Compiler = "Compiler"
}
export interface CitationModuleProperties {
    characters?: number;
    appName?: string;
    appLink?: string;
    library?: string;
    styles?: string[];
    title?: string;
    author?: string;
    publisher?: string;
    published?: string;
}
export interface CitationModuleAPI {
    citationCreated: any;
    citationFailed: any;
}
export interface CitationModuleConfig extends CitationModuleProperties {
    publication: Publication;
    highlighter: TextHighlighter;
    api?: CitationModuleAPI;
}
export default class CitationModule implements ReaderModule {
    private publication;
    navigator: IFrameNavigator;
    private properties;
    private readonly highlighter?;
    api?: CitationModuleAPI;
    private constructor();
    static create(config: CitationModuleConfig): Promise<CitationModule>;
    stop(): Promise<void>;
    copyToClipboard(textToClipboard: any): void;
    createElementForExecCommand(textToClipboard: any): HTMLDivElement;
    selectContent(element: any): void;
    protected start(): Promise<void>;
}
