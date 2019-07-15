import { Services } from "microbit-web-bluetooth";
export declare class MicrobitText {
    constructor();
    protected el: any;
    services: Services;
    /**
     * The text shown on the button
     */
    buttonLabel: string;
    /**
     * The speed to scroll the text
     */
    scrollDelay: number;
    protected disabled: boolean;
    private text;
    protected servicesUpdated(): Promise<void>;
    private handleKey;
    private writeText;
    render(): any;
}
