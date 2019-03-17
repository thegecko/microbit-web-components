import { Component, Prop, Element } from "@stencil/core";
import { DeviceInformation } from "microbit-web-bluetooth/types/services/device-information";
import DeviceTunnel from '../../device-tunnel';

@Component({
    tag: 'microbit-serial'
})
export class MicrobitSerial {
    @Element() el;
    @Prop() deviceInformation: DeviceInformation = undefined;

    /**
     * The text shown when disconnected
     */
    @Prop() disconnectedText: string = "Disconnected";

    /**
     * The text shown when no serial number
     */
    @Prop() noInfo: string = "No serial number found";

    render() {
        return this.deviceInformation ? this.deviceInformation.serialNumber || this.noInfo : this.disconnectedText;
    }
}

DeviceTunnel.injectProps(MicrobitSerial, ['deviceInformation']);
