import { Services } from "microbit-web-bluetooth";
export declare class MicrobitDfu {
    constructor();
    protected el: any;
    services: Services;
    /**
     * The button label to initiate DFU mode
     */
    dfuLabel: string;
    protected disabled: boolean;
    protected servicesUpdated(): Promise<void>;
    private calibrate;
    render(): any;
}
