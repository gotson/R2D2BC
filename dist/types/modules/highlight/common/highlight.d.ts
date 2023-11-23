import { ISelectionInfo } from "./selection";
import { AnnotationMarker } from "../../../model/Locator";
import { Definition } from "../../search/DefinitionsModule";
export interface IColor {
    red: number;
    green: number;
    blue: number;
}
export interface IStyleProperty {
    property: string;
    value: string;
    priority?: string;
}
export interface IStyle {
    default?: [IStyleProperty] | undefined;
    hover?: [IStyleProperty] | undefined;
    defaultClass?: string | undefined;
    hoverClass?: string | undefined;
}
export interface IPopupStyle {
    background?: string;
    textColor?: string;
    class?: string;
}
export interface IHighlightStyle {
    style?: IStyle;
    color?: string;
}
export interface IMarkerIcon {
    id: string;
    position: string;
    title: string;
    svgPath?: string;
    color?: string;
    class?: string;
}
export declare enum HighlightType {
    Annotation = 0,
    Search = 1,
    ReadAloud = 2,
    PageBreak = 3,
    Definition = 4,
    LineFocus = 5,
    Comment = 6
}
export interface IHighlight {
    id: string;
    selectionInfo: ISelectionInfo;
    pointerInteraction: boolean;
    marker: AnnotationMarker;
    icon?: IMarkerIcon | undefined;
    popup?: IPopupStyle | undefined;
    color: string;
    style?: IStyle | undefined;
    position?: number;
    note?: string | null | undefined;
    definition?: Definition | undefined;
    type: HighlightType;
}
export interface SelectionMenuItem {
    id: string;
    callback?: any;
    marker?: AnnotationMarker;
    icon?: IMarkerIcon;
    popup?: IPopupStyle;
    highlight?: IHighlightStyle;
    note?: boolean;
}
export interface IHighlightDefinition {
    selectionInfo: ISelectionInfo | undefined;
    color: string | undefined;
}
