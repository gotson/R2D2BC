import { IDocInfo } from "./document";
import { IHighlight, IHighlightDefinition } from "./highlight";
import { ISelectionInfo } from "./selection";
import { Locator } from "../../../model/Locator";
export interface IEventPayload_R2_EVENT_READING_LOCATION extends Locator {
    selectionInfo: ISelectionInfo | undefined;
    docInfo: IDocInfo | undefined;
    selectionIsNew: boolean | undefined;
}
export interface IEventPayload_R2_EVENT_HIGHLIGHT_CREATE {
    highlightDefinitions: IHighlightDefinition[] | undefined;
    highlights: Array<IHighlight | null> | undefined;
}
export interface IEventPayload_R2_EVENT_HIGHLIGHT_REMOVE {
    highlightIDs: string[];
}
export declare const R2_EVENT_HIGHLIGHT_CLICK = "R2_EVENT_HIGHLIGHT_CLICK";
export interface IEventPayload_R2_EVENT_HIGHLIGHT_CLICK {
    highlight: IHighlight;
}
