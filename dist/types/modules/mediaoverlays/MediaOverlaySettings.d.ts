import Store from "../../store/Store";
import { UserProperty, UserProperties } from "../../model/user-settings/UserProperties";
import { MediaOverlayModuleAPI, MediaOverlayModuleProperties } from "./MediaOverlayModule";
export declare const R2_MO_CLASS_ACTIVE = "r2-mo-active";
export declare class MEDIAOVERLAYREFS {
    static readonly COLOR_REF = "color";
    static readonly AUTO_SCROLL_REF = "autoscroll";
    static readonly AUTO_TURN_REF = "autoturn";
    static readonly VOLUME_REF = "volume";
    static readonly RATE_REF = "rate";
    static readonly COLOR_KEY: string;
    static readonly AUTO_SCROLL_KEY: string;
    static readonly AUTO_TURN_KEY: string;
    static readonly VOLUME_KEY: string;
    static readonly RATE_KEY: string;
}
export interface MediaOverlayConfig {
    store: Store;
    initialMediaOverlaySettings?: MediaOverlayModuleProperties;
    headerMenu?: HTMLElement | null;
    api?: MediaOverlayModuleAPI;
}
export interface IMediaOverlayUserSettings {
    color?: string;
    autoScroll?: boolean;
    autoTurn?: boolean;
    volume?: number;
    rate?: number;
    playing?: boolean;
    wait?: number;
}
export type MediaOverlayIncrementable = "mo_volume" | "mo_rate";
export declare class MediaOverlaySettings implements IMediaOverlayUserSettings {
    private readonly store;
    private readonly MEDIAOVERLAYSETTINGS;
    color: string;
    autoScroll: boolean;
    autoTurn: boolean;
    volume: number;
    rate: number;
    playing: boolean;
    resourceReady: boolean;
    wait: number;
    userProperties: UserProperties;
    private settingsChangeCallback;
    private settingsView;
    private readonly headerMenu?;
    private speechAutoScroll;
    private speechAutoTurn;
    private speechVolume;
    private speechRate;
    private readonly api?;
    static create(config: MediaOverlayConfig): any;
    protected constructor(store: Store, api?: MediaOverlayModuleAPI, headerMenu?: HTMLElement | null);
    stop(): void;
    private initialise;
    private reset;
    private initializeSelections;
    setControls(): void;
    private renderControls;
    onSettingsChange(callback: () => void): void;
    private storeProperty;
    private updateUserSettings;
    private getMediaOverlaySettings;
    private saveProperty;
    getProperty(name: string): UserProperty | null;
    resetMediaOverlaySettings(): void;
    applyMediaOverlaySettings(mediaOverlaySettings: IMediaOverlayUserSettings): void;
    applyMediaOverlaySetting(key: any, value: any): void;
    increase(incremental: MediaOverlayIncrementable): void;
    decrease(incremental: MediaOverlayIncrementable): void;
}
