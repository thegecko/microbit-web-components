import { Services } from "microbit-web-bluetooth";
export declare class MicrobitButtonB {
    constructor();
    protected el: any;
    services: Services;
    /**
     * The CSS class to use when released
     */
    releaseClass: string;
    /**
     * The CSS class to use when short-pressed
     */
    shortPressClass: string;
    /**
     * The CSS class to use when long-pressed
     */
    longPressClass: string;
    protected className: string;
    protected servicesUpdated(): Promise<void>;
    private setClassName;
    render(): any;
}
