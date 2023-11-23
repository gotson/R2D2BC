import { IFrameNavigator } from "../navigator/IFrameNavigator";
export default class TouchEventHandler {
    navigator: IFrameNavigator;
    constructor(navigator: IFrameNavigator);
    private static readonly TAP_TOLERANCE;
    private static readonly LONG_PRESS_MS;
    private static readonly SLOW_SWIPE_MS;
    onBackwardSwipe: (event: UIEvent) => void;
    onForwardSwipe: (event: UIEvent) => void;
    setupEvents: (element: HTMLElement | Document | null) => void;
}
