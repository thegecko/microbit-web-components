import { Component, Prop, Element } from "@stencil/core";
import { DeviceInformation } from "microbit-web-bluetooth/types/services/device-information";
import { microbitStore } from '../../microbit-store';

@Component({
    tag: 'microbit-manufacturer'
})
export class MicrobitManufacturer {
    constructor() {
        microbitStore.addListener(this);
    }

    @Element() el;
    @Prop({mutable: true}) deviceInformation: DeviceInformation = null;

    /**
     * The text shown when disconnected
     */
    @Prop() disconnectedText: string = "Disconnected";

    /**
     * The text shown when no manufacturer name
     */
    @Prop() noInfo: string = "No manufacturer name found";

    render() {
        return this.deviceInformation ? this.deviceInformation.manufacturer || this.noInfo : this.disconnectedText;
    }
}
