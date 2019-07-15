import { Services } from "microbit-web-bluetooth";
export declare class MicrobitMatrix {
    constructor();
    protected el: any;
    services: Services;
    /**
     * The template for identifying child LEDs
     */
    idTemplate: string;
    /**
     * The CSS class for off LEDs
     */
    offClass: string;
    /**
     * The CSS class for on LEDs
     */
    onClass: string;
    private matrix;
    private elements;
    protected servicesUpdated(): Promise<void>;
    private toggle;
    private updateMatrix;
}
