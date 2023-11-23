import { IHighlight } from "../modules/highlight/common/highlight";
export interface Locator {
    href: string;
    type?: string;
    title?: string;
    locations: Locations;
    text?: LocatorText;
    displayInfo?: any;
}
export interface LocatorText {
    after?: string;
    before?: string;
    highlight?: string;
}
export interface Locations {
    fragment?: string;
    progression?: number;
    position?: number;
    totalProgression?: number;
    remainingPositions?: number;
    totalRemainingPositions?: number;
}
export interface ReadingPosition extends Locator {
    created: Date;
}
export interface Bookmark extends Locator {
    id?: any;
    created: Date;
}
export declare enum AnnotationMarker {
    Highlight = 0,
    Underline = 1,
    Bookmark = 2,
    Custom = 3,
    Comment = 4
}
export interface Annotation extends Locator {
    id?: any;
    created: Date;
    highlight?: IHighlight;
}
