import { DeviceInformation } from "microbit-web-bluetooth/types/services/device-information";
export declare class MicrobitModel {
    constructor();
    protected el: any;
    deviceInformation: DeviceInformation;
    /**
     * The text shown when disconnected
     */
    disconnectedText: string;
    /**
     * The text shown when no model number
     */
    noInfo: string;
    render(): string;
}
