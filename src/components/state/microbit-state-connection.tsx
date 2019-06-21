import { Component, Prop, Element } from "@stencil/core";
import { microbitStore } from '../../microbit-store';

@Component({
    tag: 'microbit-state-connection'
})
export class MicrobitStateConnection {
    constructor() {
        microbitStore.addListener(this);
    }

    @Element() el;
    @Prop({mutable: true}) device: BluetoothDevice = null;

    /**
     * The css class to use when connected
     */
    @Prop() connectedClass: string = "microbit-connected";

    /**
     * The css class to use when disconnected
     */
    @Prop() disconnectedClass: string = "microbit-disconnected";

    render() {
        const className = this.device ? this.connectedClass : this.disconnectedClass;
        return (
            <span class={className}>
                <slot />
            </span>
        );
    }
}
