import Annotator, { AnnotationType } from "./Annotator";
import Store from "./Store";
import { ReadingPosition } from "../model/Locator";
import { IHighlight } from "../modules/highlight/common/highlight";
export interface LocalAnnotatorConfig {
    store: Store;
}
/** Annotator that stores annotations locally, in the browser. */
export default class LocalAnnotator implements Annotator {
    private readonly store;
    private static readonly LAST_READING_POSITION;
    private static readonly BOOKMARKS;
    private static readonly ANNOTATIONS;
    private static readonly SELECTIONINFO;
    constructor(config: LocalAnnotatorConfig);
    getLastReadingPosition(): any;
    initLastReadingPosition(position: ReadingPosition): void;
    saveLastReadingPosition(position: any): void;
    initBookmarks(list: any): any;
    saveBookmark(bookmark: any): any;
    locatorExists(locator: any, type: AnnotationType): any | null;
    deleteBookmark(bookmark: any): any;
    getBookmarks(href?: string): any;
    initAnnotations(list: any): any;
    saveTemporarySelectionInfo(selectionInfo: any): void;
    getTemporarySelectionInfo(doc: any): any;
    deleteTemporarySelectionInfo(): void;
    saveAnnotation(annotation: any): any;
    deleteAnnotation(id: any): any;
    deleteSelectedAnnotation(annotation: any): any;
    getAnnotations(): any;
    getAnnotationsByChapter(chapter: string): any;
    getAnnotationPosition(id: any, iframeWin: any): any;
    getAnnotationElement(id: any, iframeWin: any): any;
    getAnnotation(highlight: IHighlight): any;
    getAnnotationByID(id: string): any;
}
