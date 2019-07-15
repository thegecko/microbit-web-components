import { DeviceInformation } from "microbit-web-bluetooth/types/services/device-information";
export declare class MicrobitSerial {
    constructor();
    protected el: any;
    deviceInformation: DeviceInformation;
    /**
     * The text shown when disconnected
     */
    disconnectedText: string;
    /**
     * The text shown when no serial number
     */
    noInfo: string;
    render(): string;
}
