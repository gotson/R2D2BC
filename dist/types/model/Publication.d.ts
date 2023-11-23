import { Locator } from "./Locator";
import { Link } from "./Link";
import { Publication as R2Publication } from "r2-shared-js/dist/es6-es2015/src/models/publication";
import { Link as R2Link } from "r2-shared-js/dist/es6-es2015/src/models/publication-link";
import { GetContentBytesLength, RequestConfig } from "../navigator/IFrameNavigator";
import { SampleRead } from "../navigator/IFrameNavigator";
export declare class Publication extends R2Publication {
    manifestUrl: URL;
    positions: Array<Locator>;
    sample?: SampleRead;
    /**
     * Initialize a publication from a manifest URL
     */
    static fromUrl(url: URL, requestConfig?: RequestConfig): Promise<Publication>;
    get readingOrder(): Link[];
    get resources(): Link[];
    get tableOfContents(): R2Link[];
    private limitedTOC;
    get landmarks(): R2Link[];
    get pageList(): R2Link[] | undefined;
    get isFixedLayout(): boolean;
    get isReflowable(): boolean;
    get layout(): "fixed" | "reflowable";
    get hasMediaOverlays(): boolean;
    getStartLink(): Link | undefined;
    getPreviousSpineItem(href: string): Link | undefined;
    getNextSpineItem(href: string): Link | undefined;
    getSpineItem(href: string): Link | undefined;
    getSpineIndex(href: string): number | undefined;
    getAbsoluteHref(href: string): string;
    getRelativeHref(href: string): string;
    getTOCItemAbsolute(href: string): Link | undefined;
    getTOCItem(href: string): Link | undefined;
    /**
     * positionsByHref
     */
    positionsByHref(href: string): Locator[];
    /**
     * Fetches the contents to build up the positions manually,
     * at least for fluid layout pubs
     */
    autoGeneratePositions(requestConfig?: RequestConfig, getContentBytesLength?: GetContentBytesLength): Promise<void>;
    /**
     * Fetches the positions from a given service href
     */
    fetchPositionsFromService(href: string, requestConfig?: RequestConfig): Promise<void>;
    /**
     * Fetches weights from a given service href
     */
    fetchWeightsFromService(href: string, requestConfig?: RequestConfig): Promise<void>;
}
