import { Component, Prop, Element } from "@stencil/core";
import { DeviceInformation } from "microbit-web-bluetooth/types/services/device-information";
import DeviceTunnel from '../../device-tunnel';

@Component({
    tag: 'microbit-model'
})
export class MicrobitModel {
    @Element() el;
    @Prop() deviceInformation: DeviceInformation = undefined;

    /**
     * The text shown when disconnected
     */
    @Prop() disconnectedText: string = "Disconnected";

    /**
     * The text shown when no model number
     */
    @Prop() noInfo: string = "No model number found";

    render() {
        return this.deviceInformation ? this.deviceInformation.modelNumber || this.noInfo : this.disconnectedText;
    }
}

DeviceTunnel.injectProps(MicrobitModel, ['deviceInformation']);
