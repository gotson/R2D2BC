import { IFrameNavigator } from "../navigator/IFrameNavigator";
import { Popup } from "../modules/search/Popup";
export declare function addEventListenerOptional(element: any, eventType: string, eventListener: any): void;
export declare function removeEventListenerOptional(element: any, eventType: string, eventListener: any): void;
export default class EventHandler {
    navigator: IFrameNavigator;
    popup: Popup;
    constructor(navigator: IFrameNavigator);
    onInternalLink: (event: UIEvent) => void;
    onClickThrough: (event: UIEvent) => void;
    setupEvents(element: HTMLElement | Document | null): void;
    private checkForLink;
    private linkInPublication;
    /**
     *
     * This function checks the user clicked link inside the iframe
     * against the readingOrder list, it is an internal link if found.
     *
     */
    private isReadingOrderInternal;
    private isResourceInternal;
    private handleLinks;
}
