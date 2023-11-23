import { Locator } from "../model/Locator";
import { IFrameAttributes } from "./IFrameNavigator";
interface Navigator {
    publication: any;
    rights?: any;
    hasMediaOverlays?: any;
    addListener?(argument: any, argument2: any): void;
    startReadAloud?(): void;
    stopReadAloud?(): void;
    pauseReadAloud?(): void;
    resumeReadAloud?(): void;
    startReadAlong?(): void;
    stopReadAlong?(): void;
    pauseReadAlong?(): void;
    resumeReadAlong?(): void;
    hideLayer?(layer: any): any;
    showLayer?(layer: any): any;
    activateMarker?(id: string, position: string): any;
    deactivateMarker?(): any;
    tableOfContents(): any;
    landmarks(): any;
    pageList(): any;
    readingOrder(): any;
    currentResource(): any;
    mostRecentNavigatedTocItem?(): any;
    totalResources(): any;
    currentLocator(): any;
    positions(): any;
    goTo(locator: Locator): void;
    goToPosition(value: number): any;
    goToPage(page: number): any;
    nextResource(): void;
    previousResource(): void;
    nextPage(): void;
    previousPage(): void;
    atStart?(): any;
    atEnd?(): any;
    snapToSelector?(selector: any): void;
    applyAttributes?(value: IFrameAttributes): void;
    stop(): void;
}
export default Navigator;
