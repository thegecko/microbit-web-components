import { Component, Prop, Element } from "@stencil/core";
import { DeviceInformation } from "microbit-web-bluetooth/types/services/device-information";
import DeviceTunnel from '../../device-tunnel';

@Component({
    tag: 'microbit-hardware'
})
export class MicrobitHardware {
    @Element() el;
    @Prop() deviceInformation: DeviceInformation = undefined;

    /**
     * The text shown when disconnected
     */
    @Prop() disconnectedText: string = "Disconnected";

    /**
     * The text shown when no hardware version
     */
    @Prop() noInfo: string = "No hardware version found";

    render() {
        return this.deviceInformation ? this.deviceInformation.hardwareRevision || this.noInfo : this.disconnectedText;
    }
}

DeviceTunnel.injectProps(MicrobitHardware, ['deviceInformation']);
