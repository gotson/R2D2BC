import { IFrameNavigator } from "../../navigator/IFrameNavigator";
export declare class Popup {
    navigator: IFrameNavigator;
    constructor(navigator: IFrameNavigator);
    handleFootnote(link: HTMLLIElement, event: MouseEvent | TouchEvent): Promise<void>;
    hidePopover(): Promise<void>;
    showPopover(link: HTMLElement, event: MouseEvent | TouchEvent): Promise<void>;
    showPopup(element: any, event: MouseEvent | TouchEvent): void;
    private getScrollingElement;
}
