import { IEventPayload_R2_EVENT_READING_LOCATION } from "../../common/events";
import { Link } from "../../../../model/Link";
export interface IReadiumIFrameWindowState {
    hashElement: Element | null;
    locationHashOverride: Element | undefined;
    locationHashOverrideInfo: IEventPayload_R2_EVENT_READING_LOCATION | undefined;
}
export interface IReadiumIFrameState {
    id: number;
    link: Link | undefined;
}
export interface IReadiumIFrame extends HTMLIFrameElement {
    READIUM2: IReadiumIFrameState;
}
