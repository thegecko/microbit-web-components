import { Services } from "microbit-web-bluetooth";
export declare class MicrobitReceive {
    constructor();
    protected el: any;
    services: Services;
    protected disabled: boolean;
    protected data: string;
    protected servicesUpdated(): Promise<void>;
    render(): any;
}
