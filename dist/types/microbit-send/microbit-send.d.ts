import { Services } from "microbit-web-bluetooth";
export declare class MicrobitSend {
    constructor();
    protected el: any;
    services: Services;
    /**
     * The text shown on the button
     */
    buttonLabel: string;
    /**
     * The delimiter to use
     */
    delimiter: string;
    protected disabled: boolean;
    private text;
    protected servicesUpdated(): Promise<void>;
    private handleKey;
    private sendText;
    render(): any;
}
