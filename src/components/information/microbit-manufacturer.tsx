import { Component, Prop, Element } from "@stencil/core";
import { DeviceInformation } from "microbit-web-bluetooth/types/services/device-information";
import DeviceTunnel from '../../device-tunnel';

@Component({
    tag: 'microbit-manufacturer'
})
export class MicrobitManufacturer {
    @Element() el;
    @Prop() deviceInformation: DeviceInformation = undefined;

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

DeviceTunnel.injectProps(MicrobitManufacturer, ['deviceInformation']);
