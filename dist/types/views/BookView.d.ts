import { IFrameNavigator, IFrameAttributes } from "../navigator/IFrameNavigator";
interface BookView {
    layout: string;
    name: string;
    label: string;
    iframe: Element;
    sideMargin: number;
    height: number;
    navigator: IFrameNavigator;
    attributes?: IFrameAttributes;
    setMode?(scroll: boolean): any;
    isScrollMode(): any;
    isPaginated(): any;
    goToElement?(element: HTMLElement | null, relative?: boolean): void;
    setSize(): void;
    setIframeHeight?(iframe: any): any;
    setSize(): void;
    getScreenHeight(): number;
    /** Load this view in its book element, at the specified position. */
    start(): void;
    /** Remove this view from its book element. */
    stop(): void;
    getCurrentPosition(): number;
    goToProgression(position: number): void;
    goToFragment(fragment: string): void;
    goToCssSelector(cssSelector: string): void;
    snap(element: HTMLElement | null, relative?: boolean): void;
    atStart(): boolean;
    atEnd(): boolean;
    goToPreviousPage?(): void;
    goToNextPage?(): void;
    getCurrentPage(): number;
    getPageCount(): number;
}
export default BookView;
