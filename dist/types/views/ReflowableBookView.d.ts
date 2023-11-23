import { UserProperty } from "../model/user-settings/UserProperties";
import Store from "../store/Store";
import BookView from "./BookView";
import { IFrameAttributes, IFrameNavigator } from "../navigator/IFrameNavigator";
export default class ReflowableBookView implements BookView {
    layout: string;
    private readonly USERSETTINGS;
    private readonly store;
    private scrollMode;
    navigator: IFrameNavigator;
    constructor(store: Store);
    setMode(scroll: boolean): void;
    name: string;
    label: string;
    iframe: HTMLIFrameElement;
    sideMargin: number;
    height: number;
    attributes: IFrameAttributes;
    start(): void;
    stop(): void;
    getCurrentPosition(): number;
    goToProgression(position: number): void;
    goToCssSelector(cssSelector: string, relative?: boolean): void;
    goToFragment(fragment: string, relative?: boolean): void;
    snap(element: HTMLElement | null, _relative?: boolean): void;
    goToElement(element: HTMLElement | null, relative?: boolean): void;
    atStart(): boolean;
    atEnd(): boolean;
    goToPreviousPage(): void;
    goToNextPage(): void;
    getCurrentPage(): number;
    getPageCount(): number;
    isPaginated(): boolean;
    isScrollMode(): boolean;
    getProperty(name: string): Promise<UserProperty | null>;
    getScreenHeight(): number;
    setIframeHeight(iframe: any): void;
    protected hasFixedScrollWidth: boolean;
    protected checkForFixedScrollWidth(): void;
    setSize(): void;
    /** Returns the total width of the columns that are currently
       positioned to the left of the iframe viewport. */
    private getLeftColumnsWidth;
    /** Returns the total width of the columns that are currently
       positioned to the right of the iframe viewport. */
    private getRightColumnsWidth;
    /** Returns the width of one column. */
    private getColumnWidth;
    /** Shifts the columns so that the specified width is positioned
       to the left of the iframe viewport. */
    private setLeftColumnsWidth;
    get scrollingElement(): Element;
    get scrollWidth(): number;
}
