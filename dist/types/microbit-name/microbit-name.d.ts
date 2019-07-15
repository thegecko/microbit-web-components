/// <reference types="web-bluetooth" />
export declare class MicrobitName {
    constructor();
    protected el: any;
    device: BluetoothDevice;
    /**
     * The text shown when disconnected
     */
    disconnectedText: string;
    render(): string;
}
