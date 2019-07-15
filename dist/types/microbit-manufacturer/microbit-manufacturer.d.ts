import { DeviceInformation } from "microbit-web-bluetooth/types/services/device-information";
export declare class MicrobitManufacturer {
    constructor();
    protected el: any;
    deviceInformation: DeviceInformation;
    /**
     * The text shown when disconnected
     */
    disconnectedText: string;
    /**
     * The text shown when no manufacturer name
     */
    noInfo: string;
    render(): string;
}
