import { h, Component, Prop, Element } from "@stencil/core";
import { microbitStore } from '../microbit-store';

@Component({
    tag: 'microbit-connection'
})
export class MicrobitConnection {
    constructor() {
        microbitStore.addListener(this);
    }

    @Element()
    protected el;

    @Prop({mutable: true})
    public device: BluetoothDevice = null;

    /**
     * The CSS class to use when connected
     */
    @Prop()
    public connectedClass: string = "microbit-connected";

    /**
     * The CSS class to use when disconnected
     */
    @Prop()
    public disconnectedClass: string = "microbit-disconnected";

    public render() {
        const className = this.device ? this.connectedClass : this.disconnectedClass;
        return (
            <span class={className}>
                <slot />
            </span>
        );
    }
}
