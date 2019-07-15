import { DeviceInformation } from "microbit-web-bluetooth/types/services/device-information";
export declare class MicrobitHardware {
    constructor();
    protected el: any;
    deviceInformation: DeviceInformation;
    /**
     * The text shown when disconnected
     */
    disconnectedText: string;
    /**
     * The text shown when no hardware version
     */
    noInfo: string;
    render(): string;
}
