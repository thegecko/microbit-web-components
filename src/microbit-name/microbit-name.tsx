import { Component, Prop, Element } from "@stencil/core";
import { microbitStore } from '../microbit-store';

@Component({
    tag: 'microbit-name'
})
export class MicrobitName {
    constructor() {
        microbitStore.addListener(this);
    }

    @Element()
    protected el;

    @Prop({mutable: true})
    public device: BluetoothDevice = null;

    /**
     * The text shown when disconnected
     */
    @Prop()
    public disconnectedText: string = "Disconnected";

    public render() {
        return this.device ? this.device.name : this.disconnectedText;
    }
}
