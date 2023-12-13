import { HighlightType, IHighlight, IMarkerIcon, IPopupStyle, IStyle, SelectionMenuItem } from "./common/highlight";
import { ISelectionInfo } from "./common/selection";
import { IRectSimple } from "./common/rect-utils";
import { AnnotationMarker } from "../../model/Locator";
import { IFrameNavigator } from "../../navigator/IFrameNavigator";
import { LayerSettings } from "./LayerSettings";
export declare enum HighlightContainer {
    R2_ID_HIGHLIGHTS_CONTAINER = "R2_ID_HIGHLIGHTS_CONTAINER",
    R2_ID_BOOKMAKRS_CONTAINER = "R2_ID_BOOKMAKRS_CONTAINER",
    R2_ID_READALOUD_CONTAINER = "R2_ID_READALOUD_CONTAINER",
    R2_ID_PAGEBREAK_CONTAINER = "R2_ID_PAGEBREAK_CONTAINER",
    R2_ID_SEARCH_CONTAINER = "R2_ID_SEARCH_CONTAINER",
    R2_ID_DEFINITIONS_CONTAINER = "R2_ID_DEFINITIONS_CONTAINER",
    R2_ID_LINEFOCUS_CONTAINER = "R2_ID_LINEFOCUS_CONTAINER",
    R2_ID_GUTTER_RIGHT_CONTAINER = "R2_ID_GUTTER_RIGHT_CONTAINER"
}
export declare const CLASS_HIGHLIGHT_CONTAINER = "R2_CLASS_HIGHLIGHT_CONTAINER";
export declare const CLASS_HIGHLIGHT_BOUNDING_AREA = "R2_CLASS_HIGHLIGHT_BOUNDING_AREA";
export declare const CLASS_HIGHLIGHT_AREA = "R2_CLASS_HIGHLIGHT_AREA";
export declare const CLASS_HIGHLIGHT_ICON = "R2_CLASS_HIGHLIGHT_ICON";
export declare const DEFAULT_BACKGROUND_COLOR: {
    blue: number;
    green: number;
    red: number;
};
export interface TextSelectorAPI {
    selectionMenuOpen: any;
    selectionMenuClose: any;
    selection: any;
}
export declare const _highlights: IHighlight[];
interface IWithRect {
    rect: IRectSimple;
    scale: number;
}
export interface IHTMLDivElementWithRect extends HTMLDivElement, IWithRect {
}
export interface HTMLElementRect {
    node: Element;
    height: number;
    top: number;
    width: number;
    left: number;
    textContent: string;
}
export declare enum MenuPosition {
    INLINE = "inline",
    TOP = "top",
    BOTTOM = "bottom"
}
export declare const _blacklistIdClassForCssSelectors: string[];
export interface TextHighlighterProperties {
    selectionMenuItems?: Array<SelectionMenuItem>;
    menuPosition?: MenuPosition;
    preventScrollOnSelection?: boolean;
}
export interface TextHighlighterConfig extends TextHighlighterProperties {
    api?: TextSelectorAPI;
    layerSettings: LayerSettings;
}
export declare class TextHighlighter {
    private options;
    navigator: IFrameNavigator;
    layerSettings: LayerSettings;
    private lastSelectedHighlight?;
    properties: TextHighlighterProperties;
    private api?;
    private hasEventListener;
    activeAnnotationMarkerId?: string;
    static create(config: TextHighlighterConfig): Promise<any>;
    private constructor();
    initialize(iframe: HTMLIFrameElement): Promise<void>;
    /**
     * Returns true if elements a i b have the same color.
     * @param {Node} a
     * @param {Node} b
     * @returns {boolean}
     */
    haveSameColor(a: any, b: any): boolean;
    /**
     * Fills undefined values in obj with default properties with the same name from source object.
     * @param {object} obj - target object
     * @param {object} source - source object with default values
     * @returns {object}
     */
    defaults(obj: {
        [x: string]: any;
    }, source: {
        [x: string]: any;
        color?: string;
        highlightedClass?: string;
        contextClass?: string;
        onBeforeHighlight?: () => boolean;
        onAfterHighlight?: () => void;
        container?: any;
        andSelf?: boolean;
        grouped?: boolean;
        hasOwnProperty?: any;
    }): object;
    /**
     * Returns array without duplicated values.
     * @param {Array} arr
     * @returns {Array}
     */
    unique(arr: {
        filter: (arg0: (value: any, idx: any, self: any) => boolean) => void;
    }): void;
    /**
     * Takes range object as parameter and refines it boundaries
     * @param range
     * @returns {object} refined boundaries and initial state of highlighting algorithm.
     */
    refineRangeBoundaries(range: {
        startContainer: any;
        endContainer: any;
        commonAncestorContainer: any;
        endOffset: number;
        startOffset: number;
    }): object;
    /**
     * Sorts array of DOM elements by its depth in DOM tree.
     * @param {HTMLElement[]} arr - array to sort.
     * @param {boolean} descending - order of sort.
     */
    sortByDepth(arr: {
        sort: (arg0: (a: any, b: any) => number) => void;
    }, descending: boolean): void;
    /**
     * Groups given highlights by timestamp.
     * @param {Array} highlights
     * @returns {Array} Grouped highlights.
     */
    groupHighlights(highlights: {
        forEach: (arg0: (hl: any) => void) => void;
    }): Array<any>;
    /**
     * Utility functions to make DOM manipulation easier.
     * @param {Node|HTMLElement} [el] - base DOM element to manipulate
     * @returns {object}
     */
    dom(el?: any): any;
    disableContext(e: {
        preventDefault: () => void;
        stopPropagation: () => void;
    }): boolean;
    bindEvents(el: any, _scope: any, hasEventListener: boolean): void;
    mousedown(ev: MouseEvent): Promise<void>;
    mouseup(ev: MouseEvent): Promise<void>;
    mousemove(ev: MouseEvent): Promise<void>;
    unbindEvents(el: any, _scope: any): void;
    /**
     * Permanently disables highlighting.
     * Unbinds events and remove context element class.
     * @memberof TextHighlighter
     */
    destroy(): void;
    initializeToolbox(): void;
    toolboxMode(mode: "colors" | "edit" | "add" | "action"): void;
    toolboxHide(): void;
    toolboxShowDelayed(event: TouchEvent | MouseEvent): void;
    showTool: ((b: boolean) => void) & {
        clear(): void;
    };
    snapSelectionToWord(trimmed?: boolean): any;
    toolboxShow(): void;
    isSelectionMenuOpen: boolean;
    selectionMenuOpened: (() => void) & {
        clear(): void;
    };
    selectionMenuClosed: (() => void) & {
        clear(): void;
    };
    selection: ((text: any, selection: any) => void) & {
        clear(): void;
    };
    toolboxPlacement(): void;
    toolboxHandler(): void;
    /**
     * Highlights current range.
     * @param {boolean} keepRange - Don't remove range after highlighting. Default: false.
     * @param marker
     * @memberof TextHighlighter
     */
    doHighlight(keepRange?: boolean, marker?: AnnotationMarker): void;
    speak(): void;
    stopReadAloud(): void;
    callbackComplete(): void;
    isOutsideViewport(rect: any): boolean;
    isInsideViewport(rect: any): boolean;
    get visibleTextRects(): HTMLElementRect[];
    doneSpeaking(reload?: boolean): void;
    /**
     * Normalizes highlights. Ensures that highlighting is done with use of the smallest possible number of
     * wrapping HTML elements.
     * Flattens highlights structure and merges sibling highlights. Normalizes text nodes within highlights.
     * @param {Array} highlights - highlights to normalize.
     * @returns {Array} - array of normalized highlights. Order and number of returned highlights may be different than
     * input highlights.
     * @memberof TextHighlighter
     */
    normalizeHighlights(highlights: any): any;
    /**
     * Flattens highlights structure.
     * Note: this method changes input highlights - their order and number after calling this method may change.
     * @param {Array} highlights - highlights to flatten.
     * @memberof TextHighlighter
     */
    flattenNestedHighlights(highlights: any): void;
    /**
     * Merges sibling highlights and normalizes descendant text nodes.
     * Note: this method changes input highlights - their order and number after calling this method may change.
     * @param highlights
     * @memberof TextHighlighter
     */
    mergeSiblingHighlights(highlights: any): void;
    /**
     * Sets highlighting color.
     * @param {string} color - valid CSS color.
     * @memberof TextHighlighter
     */
    setColor(color: any): void;
    /**
     * Returns highlighting color.
     * @returns {string}
     * @memberof TextHighlighter
     */
    getColor(): string;
    /**
     * Returns true if element is a highlight.
     * All highlights have 'data-highlighted' attribute.
     * @param el - element to check.
     * @returns {boolean}
     * @memberof TextHighlighter
     */
    isHighlight(el: any): boolean;
    /**
     * Creates wrapper for highlights.
     * TextHighlighter instance calls this method each time it needs to create highlights and pass options retrieved
     * in constructor.
     * @returns {HTMLElement}
     * @memberof TextHighlighter
     * @static
     */
    createWrapper(): HTMLElement;
    static isHexColor(hex: string): boolean;
    static hexToRgbString(hex: string): any;
    static hexToRgbChannels(hex: string): {
        red: number;
        green: number;
        blue: number;
    };
    static hexToRgbA(hex: string): string;
    static hexToRgbAWithOpacity(hex: string, opacity: number): string;
    resetHighlightBoundingStyle(highlightBounding: HTMLElement): void;
    resetHighlightAreaStyle(highlightArea: HTMLElement, id_container: string): void;
    setHighlightAreaStyle(doc: any, highlightAreas: Array<HTMLElement>, highlight: IHighlight): void;
    setAndResetSearchHighlight(highlight: any, highlights: any): void;
    isIOS(): boolean;
    isAndroid(): boolean;
    getScrollingElement: (doc: Document | undefined) => Element;
    processMouseEvent(ev: MouseEvent): Promise<void>;
    prepareContainers(win: any): Promise<void>;
    ensureHighlightsContainer(win: any, id: string): Promise<HTMLElement>;
    hideAllhighlights(doc: Document): void;
    destroyAllhighlights(doc: Document): void;
    removeAllChildNodes(parent: any): void;
    destroyHighlights(type: HighlightType): void;
    destroyHighlight(doc: Document | null, id: string): void;
    createHighlight(win: any, selectionInfo: ISelectionInfo, color: string | undefined, pointerInteraction: boolean, marker: AnnotationMarker, icon?: IMarkerIcon | undefined, popup?: IPopupStyle | undefined, style?: IStyle | undefined, type?: HighlightType | undefined, prefix?: string | undefined): [IHighlight, HTMLDivElement?];
    createHighlightDom(win: any, highlight: IHighlight): HTMLDivElement | undefined;
    addSelectionMenuItem(citationIconMenu: SelectionMenuItem): void;
}
export {};
