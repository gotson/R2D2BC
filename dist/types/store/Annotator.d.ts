import { ReadingPosition } from "../model/Locator";
import { IHighlight } from "../modules/highlight/common/highlight";
interface Annotator {
    initLastReadingPosition(position: ReadingPosition): any;
    getLastReadingPosition(): any;
    saveLastReadingPosition(position: any): any;
    initBookmarks(list: any): any;
    saveBookmark(bookmark: any): any;
    deleteBookmark(bookmark: any): any;
    getBookmarks(href?: string): any;
    locatorExists(locator: any, type: AnnotationType): any;
    initAnnotations(list: any): any;
    saveAnnotation(annotation: any): any;
    deleteAnnotation(id: any): any;
    deleteSelectedAnnotation(annotation: any): any;
    getAnnotations(): any;
    getAnnotationsByChapter(chapter: string): any;
    getAnnotation(annotation: IHighlight): any;
    getAnnotationByID(id: string): any;
    getAnnotationPosition(id: any, iframeWin: any): any;
    getAnnotationElement(id: any, iframeWin: any): any;
    saveTemporarySelectionInfo(selectionInfo: any): any;
    getTemporarySelectionInfo(doc: any): any;
    deleteTemporarySelectionInfo(): any;
}
export declare enum AnnotationType {
    Bookmark = 0,
    Annotation = 1
}
export default Annotator;
