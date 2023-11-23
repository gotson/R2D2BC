import Store from "../../store/Store";
import { UserProperty, UserProperties } from "../../model/user-settings/UserProperties";
import { ReaderRights } from "../../navigator/IFrameNavigator";
import { TextHighlighter } from "../highlight/TextHighlighter";
export interface TTSModuleAPI {
    started: any;
    stopped: any;
    paused: any;
    resumed: any;
    finished: any;
    updateSettings: any;
}
export interface TTSModuleProperties {
    color?: string;
    autoScroll?: boolean;
    rate?: number;
    pitch?: number;
    volume?: number;
    voice?: TTSVoice;
    hideLayer?: boolean;
}
export interface TTSModuleConfig extends TTSModuleProperties {
    rights: Partial<ReaderRights>;
    tts: TTSSettings;
    highlighter: TextHighlighter;
    headerMenu?: HTMLElement | null;
    api?: TTSModuleAPI;
}
export declare class TTSREFS {
    static readonly COLOR_REF = "color";
    static readonly AUTO_SCROLL_REF = "autoscroll";
    static readonly RATE_REF = "rate";
    static readonly PITCH_REF = "pitch";
    static readonly VOLUME_REF = "volume";
    static readonly VOICE_REF = "voice";
    static readonly COLOR_KEY: string;
    static readonly AUTO_SCROLL_KEY: string;
    static readonly RATE_KEY: string;
    static readonly PITCH_KEY: string;
    static readonly VOLUME_KEY: string;
    static readonly VOICE_KEY: string;
}
export interface TTSSettingsConfig {
    store: Store;
    initialTTSSettings?: TTSModuleProperties;
    headerMenu?: HTMLElement | null;
    api?: TTSModuleAPI;
}
export interface TTSVoice {
    usePublication: boolean;
    name?: string;
    lang?: string;
}
export interface ITTSUserSettings {
    enableSplitter?: boolean;
    color?: string;
    autoScroll?: boolean;
    rate?: number;
    pitch?: number;
    volume?: number;
    voice?: TTSVoice;
}
export type TTSIncrementable = "pitch" | "rate" | "volume";
export declare class TTSSettings implements ITTSUserSettings {
    private readonly store;
    private readonly TTSSETTINGS;
    color: string;
    autoScroll: boolean;
    rate: number;
    pitch: number;
    volume: number;
    voice: TTSVoice;
    userProperties: UserProperties;
    private settingsChangeCallback;
    private restartCallback;
    private settingsView;
    private readonly headerMenu?;
    private speechRate;
    private speechPitch;
    private speechVolume;
    private speechAutoScroll;
    private readonly api?;
    static create(config: TTSSettingsConfig): TTSSettings;
    protected constructor(store: Store, api?: TTSModuleAPI, headerMenu?: HTMLElement | null);
    enableSplitter?: boolean;
    stop(): void;
    private initialise;
    private reset;
    private initializeSelections;
    setControls(): void;
    private renderControls;
    onSettingsChange(callback: () => void): void;
    onRestart(callback: () => void): void;
    private storeProperty;
    private updateUserSettings;
    private getTTSSettings;
    private saveProperty;
    getProperty(name: string): UserProperty | undefined;
    resetTTSSettings(): void;
    applyTTSSettings(ttsSettings: Partial<ITTSUserSettings>): void;
    applyPreferredVoice(value: string): void;
    increase(incremental: TTSIncrementable): void;
    decrease(incremental: string): void;
}
