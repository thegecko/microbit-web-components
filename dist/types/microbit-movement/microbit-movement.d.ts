import { Services } from "microbit-web-bluetooth";
export declare class MicrobitMovement {
    constructor();
    protected el: any;
    services: Services;
    /**
     * The sensitivity of the sensor
     */
    sensitivity: number;
    /**
     * The frequency to read the sensor
     */
    frequency: number;
    /**
     * The CSS class to use when still
     */
    stillClass: string;
    /**
     * The CSS class to use when moved
     */
    movedClass: string;
    protected className: string;
    protected servicesUpdated(): Promise<void>;
    private setClassName;
    render(): any;
}
