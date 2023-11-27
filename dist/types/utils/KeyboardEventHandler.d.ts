import { IFrameNavigator } from "../navigator/IFrameNavigator";
export default class KeyboardEventHandler {
    navigator: IFrameNavigator;
    constructor(navigator: IFrameNavigator);
    onBackwardSwipe: (event: UIEvent) => void;
    onForwardSwipe: (event: UIEvent) => void;
    onKeydown: (event: UIEvent) => void;
    setupEvents: (element: HTMLElement | Document | null) => void;
    focusin: (element: HTMLElement | Document) => void;
    keydown: (element: HTMLElement | Document) => void;
}
