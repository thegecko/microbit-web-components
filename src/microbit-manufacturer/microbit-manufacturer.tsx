import { Component, Prop, Element } from "@stencil/core";
import { DeviceInformation } from "microbit-web-bluetooth/types/services/device-information";
import { microbitStore } from '../microbit-store';

@Component({
    tag: 'microbit-manufacturer'
})
export class MicrobitManufacturer {
    constructor() {
        microbitStore.addListener(this);
    }

    @Element()
    protected el;

    @Prop({mutable: true})
    public deviceInformation: DeviceInformation = null;

    /**
     * The text shown when disconnected
     */
    @Prop()
    public disconnectedText: string = "Disconnected";

    /**
     * The text shown when no manufacturer name
     */
    @Prop()
    public noInfo: string = "No manufacturer name found";

    public render() {
        return this.deviceInformation ? this.deviceInformation.manufacturer || this.noInfo : this.disconnectedText;
    }
}
