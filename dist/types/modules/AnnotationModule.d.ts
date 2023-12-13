import Annotator from "../store/Annotator";
import { IFrameNavigator, ReaderRights } from "../navigator/IFrameNavigator";
import { Publication } from "../model/Publication";
import { TextHighlighter } from "./highlight/TextHighlighter";
import { ReaderModule } from "./ReaderModule";
import { IHighlight } from "./highlight/common/highlight";
import { Annotation } from "../model/Locator";
export type Highlight = (highlight: Annotation) => Promise<Annotation>;
export interface AnnotationModuleAPI {
    addAnnotation: Highlight;
    deleteAnnotation: Highlight;
    updateAnnotation: Highlight;
    selectedAnnotation: Highlight;
    addCommentToAnnotation: Highlight;
}
export interface AnnotationModuleProperties {
    initialAnnotationColor?: string;
    hideLayer?: boolean;
    enableComments?: boolean;
}
export interface AnnotationModuleConfig extends AnnotationModuleProperties {
    annotator: Annotator;
    headerMenu?: HTMLElement | null;
    rights: Partial<ReaderRights>;
    publication: Publication;
    initialAnnotations?: any;
    api?: AnnotationModuleAPI;
    highlighter: TextHighlighter;
}
export declare class AnnotationModule implements ReaderModule {
    readonly annotator: Annotator | null;
    private rights;
    private publication;
    private highlightsView;
    private commentGutter?;
    private readonly headerMenu?;
    private readonly highlighter?;
    private readonly initialAnnotations;
    navigator: IFrameNavigator;
    properties?: AnnotationModuleProperties;
    api?: AnnotationModuleAPI;
    activeAnnotationMarkerId?: string;
    activeAnnotationMarkerPosition?: string;
    static create(config: AnnotationModuleConfig): Promise<AnnotationModule>;
    constructor(annotator: Annotator, rights: Partial<ReaderRights>, publication: Publication, initialAnnotations: any, properties: AnnotationModuleProperties, highlighter: TextHighlighter, api?: AnnotationModuleAPI, headerMenu?: HTMLElement | null);
    stop(): Promise<void>;
    protected start(): Promise<void>;
    private hide;
    private show;
    hideAnnotationLayer(): void;
    showAnnotationLayer(): void;
    handleResize(): Promise<void>;
    initialize(iframe: HTMLIFrameElement): Promise<unknown>;
    private click;
    scrollToHighlight(id: any): Promise<any>;
    updateLocalHighlight(annotation: Annotation): Promise<any>;
    deleteLocalHighlight(id: any): Promise<any>;
    deleteAnnotation(highlight: Annotation): Promise<any>;
    addAnnotation(highlight: Annotation): Promise<any>;
    deleteHighlight(highlight: Annotation): Promise<any>;
    deleteSelectedHighlight(highlight: Annotation): Promise<any>;
    updateAnnotation(highlight: Annotation): Promise<any>;
    saveAnnotation(highlight: IHighlight): Promise<Annotation>;
    getAnnotations(): any;
    showHighlights(): void;
    drawHighlights(): Promise<void>;
    repositionGutters(): any;
    private createTree;
    private handleAnnotationLinkClick;
    private handleAnnotationLinkDeleteClick;
    private static readableTimestamp;
    getAnnotation(highlight: IHighlight): Promise<any>;
    getAnnotationByID(id: string): Promise<any>;
    syncPosition(highlights: Array<any>): any;
    reposition(highlights: Array<any>): any;
}
export declare function repositionHighlights(highlights: Array<any>): any;
