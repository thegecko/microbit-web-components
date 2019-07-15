import { Services } from "microbit-web-bluetooth";
export declare class MicrobitTemperature {
    constructor();
    protected el: any;
    services: Services;
    /**
     * The interval to check the temperature (ms)
     */
    temperaturePeriod: number;
    /**
     * The text shown when disconnected
     */
    disconnectedText: string;
    /**
     * The text shown when no temperature
     */
    noTemperature: string;
    /**
     * The text to display after the temperature
     */
    temperatureSuffix: string;
    protected temperature: string;
    protected servicesUpdated(): Promise<void>;
    render(): string;
}
