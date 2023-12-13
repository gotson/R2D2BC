import Store from "../../store/Store";
import { UserProperties, UserProperty, UserSettingsIncrementable } from "./UserProperties";
import { Injectable, NavigatorAPI } from "../../navigator/IFrameNavigator";
import BookView from "../../views/BookView";
export interface UserSettingsConfig {
    /** Store to save the user's selections in. */
    store: Store;
    initialUserSettings: InitialUserSettings;
    headerMenu?: HTMLElement | null;
    api?: Partial<NavigatorAPI>;
    injectables?: Array<Injectable>;
    layout: string;
}
export interface UserSettingsUIConfig {
    fontSize?: boolean;
    fontFamily?: boolean;
    fontOverride: boolean;
    appearance?: boolean;
    scroll?: boolean;
    textAlign?: boolean;
    colCount?: boolean;
    wordSpacing?: boolean;
    letterSpacing?: boolean;
    pageMargins: boolean;
    lineHeight: boolean;
}
/**
 * The shape of the UserSettings class.
 */
export interface IUserSettings {
    fontSize: number;
    fontOverride: boolean;
    fontFamily: number;
    appearance: any;
    verticalScroll: boolean;
    textAlignment: number;
    columnCount: number;
    direction: number;
    wordSpacing: number;
    letterSpacing: number;
    pageMargins: number;
    lineHeight: number;
    fixedLayoutMargin: number;
    fixedLayoutShadow: boolean;
}
/**
 * The settings that someone might pass in when instantiating
 * the reader. Differs from the internal settings values for
 * backwards compatibility.
 */
export interface InitialUserSettings {
    fontSize: number;
    fontOverride?: boolean | "readium-font-on" | "readium-font-off";
    fontFamily: number;
    appearance: any;
    verticalScroll?: boolean | "readium-scroll-on" | "readium-scroll-off" | "scroll" | "paginated";
    textAlignment: number;
    columnCount: number;
    direction: string;
    wordSpacing: number;
    letterSpacing: number;
    pageMargins: number;
    lineHeight: number;
    fixedLayoutMargin: number;
    fixedLayoutShadow: boolean;
}
export declare class UserSettings implements IUserSettings {
    isPaginated(): Promise<boolean>;
    isScrollMode(): Promise<boolean>;
    private readonly store;
    private readonly USERSETTINGS;
    private static appearanceValues;
    private static fontFamilyValues;
    private static readonly textAlignmentValues;
    private static readonly columnCountValues;
    private static readonly directionValues;
    fontSize: number;
    fontOverride: boolean;
    fontFamily: number;
    appearance: any;
    verticalScroll: boolean;
    textAlignment: number;
    columnCount: number;
    direction: number;
    wordSpacing: number;
    letterSpacing: number;
    pageMargins: number;
    lineHeight: number;
    fixedLayoutMargin: number;
    fixedLayoutShadow: boolean;
    userProperties?: UserProperties;
    view: BookView;
    private settingsChangeCallback;
    private settingsColumnsChangeCallback;
    private viewChangeCallback;
    private settingsView;
    private readonly headerMenu?;
    api?: Partial<NavigatorAPI>;
    injectables?: Array<Injectable>;
    private iframe;
    static create(config: UserSettingsConfig): Promise<any>;
    protected constructor(store: Store, headerMenu?: HTMLElement | null, api?: Partial<NavigatorAPI>, injectables?: Array<Injectable>, layout?: string);
    stop(): void;
    private initialise;
    private reset;
    private initializeSelections;
    applyProperties(): Promise<any>;
    setIframe(iframe: HTMLIFrameElement): void;
    private static renderControls;
    onSettingsChange(callback: () => void): void;
    onColumnSettingsChange(callback: () => void): void;
    onViewChange(callback: () => void): void;
    private storeProperty;
    addAppearance(appearance: string): any;
    initAddedAppearance(): any;
    addFont(fontFamily: string): any;
    initAddedFont(): any;
    private updateUserSettings;
    private getUserSettings;
    private saveProperty;
    getProperty<T extends UserProperty = UserProperty>(name: string): Promise<T | null>;
    /**
     * If the property doesn't exist in the store, will fall back to the value on this
     */
    getPropertyAndFallback<T extends UserProperty = UserProperty>(name: keyof this, key: string): Promise<T["value"]>;
    resetUserSettings(): Promise<void>;
    get currentSettings(): {
        appearance: string;
        fontFamily: string;
        textAlignment: string;
        columnCount: string;
        direction: string;
        verticalScroll: boolean;
        fontSize: number;
        wordSpacing: number;
        letterSpacing: number;
        pageMargins: number;
        lineHeight: number;
        fixedLayoutMargin: number;
        fixedLayoutShadow: boolean;
    };
    applyUserSettings(userSettings: Partial<UserSettings>): Promise<void>;
    /**
     * Parses a scroll setting from a variety of inputs to a simple boolean
     */
    private static parseScrollSetting;
    private static parseAppearanceSetting;
    scroll(scroll: boolean): Promise<void>;
    increase(incremental: UserSettingsIncrementable): Promise<void>;
    decrease(incremental: any): Promise<void>;
}
