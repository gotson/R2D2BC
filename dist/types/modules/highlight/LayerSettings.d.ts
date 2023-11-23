import Store from "../../store/Store";
import { UserProperty, UserProperties } from "../../model/user-settings/UserProperties";
export interface LayerConfig {
    store: Store;
}
export interface ILayerSettings {
}
export declare class LayerSettings implements ILayerSettings {
    private readonly store;
    private readonly LAYERSETTINGS;
    userProperties: UserProperties;
    static create(config: LayerConfig): Promise<any>;
    protected constructor(store: Store);
    stop(): Promise<void>;
    private initialize;
    private getLayerSettings;
    saveProperty(property: UserProperty): Promise<any>;
    getProperty(name: string): Promise<UserProperty | null>;
}
