/// <reference types="web-bluetooth" />
export declare class MicrobitConnection {
    constructor();
    protected el: any;
    device: BluetoothDevice;
    /**
     * The CSS class to use when connected
     */
    connectedClass: string;
    /**
     * The CSS class to use when disconnected
     */
    disconnectedClass: string;
    render(): any;
}
