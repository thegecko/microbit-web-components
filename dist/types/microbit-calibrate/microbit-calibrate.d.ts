import { Services } from "microbit-web-bluetooth";
export declare class MicrobitCalibrate {
    constructor();
    protected el: any;
    services: Services;
    /**
     * The button label to calibrate
     */
    calibrateLabel: string;
    protected disabled: boolean;
    protected servicesUpdated(): Promise<void>;
    private calibrate;
    render(): any;
}
