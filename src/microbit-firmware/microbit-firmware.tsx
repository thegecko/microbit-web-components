import { Component, Prop, Element } from "@stencil/core";
import { DeviceInformation } from "microbit-web-bluetooth/types/services/device-information";
import { microbitStore } from '../microbit-store';

@Component({
    tag: 'microbit-firmware'
})
export class MicrobitFirmware {
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
     * The text shown when no firmware version
     */
    @Prop()
    public noInfo: string = "No firmware version found";

    public render() {
        return this.deviceInformation ? this.deviceInformation.firmwareRevision || this.noInfo : this.disconnectedText;
    }
}
