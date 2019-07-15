import { Services } from "microbit-web-bluetooth";
export declare class MicrobitCompass {
    constructor();
    protected el: any;
    services: Services;
    protected bearing: number;
    protected servicesUpdated(): Promise<void>;
    render(): any;
}
