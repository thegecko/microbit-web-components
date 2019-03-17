import { Component, Prop, Element } from "@stencil/core";
import { DeviceInformation } from "microbit-web-bluetooth/types/services/device-information";
import DeviceTunnel from '../../device-tunnel';

@Component({
    tag: 'microbit-firmware'
})
export class MicrobitFirmware {
    @Element() el;
    @Prop() deviceInformation: DeviceInformation = undefined;

    /**
     * The text shown when disconnected
     */
    @Prop() disconnectedText: string = "Disconnected";

    /**
     * The text shown when no firmware version
     */
    @Prop() noInfo: string = "No firmware version found";

    render() {
        return this.deviceInformation ? this.deviceInformation.firmwareRevision || this.noInfo : this.disconnectedText;
    }
}

DeviceTunnel.injectProps(MicrobitFirmware, ['deviceInformation']);
