import { Component, Prop, Element } from "@stencil/core";
import { microbitStore } from '../../microbit-store';

@Component({
    tag: 'microbit-name'
})
export class MicrobitName {
    constructor() {
        microbitStore.addListener(this);
    }

    @Element() el;
    @Prop() device: BluetoothDevice = null;

    /**
     * The text shown when disconnected
     */
    @Prop() disconnectedText: string = "Disconnected";

    render() {
        return this.device ? this.device.name : this.disconnectedText;
    }
}
