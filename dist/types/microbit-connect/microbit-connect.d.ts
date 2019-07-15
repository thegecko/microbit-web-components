/// <reference types="web-bluetooth" />
export declare class MicrobitConnect {
    protected el: any;
    device: BluetoothDevice;
    /**
     * The button label to connect
     */
    connectLabel: string;
    /**
     * The button label to disconnect
     */
    disconnectLabel: string;
    private getLabel;
    private connectDisconnect;
    render(): any;
}
