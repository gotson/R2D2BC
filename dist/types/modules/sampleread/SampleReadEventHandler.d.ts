import { IFrameNavigator } from "../../navigator/IFrameNavigator";
export default class SampleReadEventHandler {
    navigator: IFrameNavigator;
    constructor(navigator: IFrameNavigator);
    enforceSampleRead: ((position: any) => void) & {
        clear(): void;
    };
}
