import { Component, Prop, Element, State, Watch } from "@stencil/core";
import { Services } from "microbit-web-bluetooth";
import DeviceTunnel from '../data/device-tunnel';

@Component({
    tag: 'microbit-firmware'
})
export class MicrobitFirmware {
    /**
     * The text shown when disconnected
     */
    @Prop() disconnectedText: string = "Disconnected";

    /**
     * The text shown when no firmware info
     */
    @Prop() noInfo: string = "No firmware info found";

    @Element() el;
    @Prop() services: Services = undefined;
    @State() info: string = this.disconnectedText;

    @Watch('services')
    async watchHandler() {
        if (!this.services) {
            this.info = this.disconnectedText;
            return;
        }

        const service = this.services.deviceInformationService;

        if (!service) {
            this.info = this.noInfo;
            return;
        }

        const info = await service.readDeviceInformation();
        this.info = info.firmwareRevision || this.noInfo;
    }

    render() {
        return (
            <div>{this.info}</div>
        );
    }
}

DeviceTunnel.injectProps(MicrobitFirmware, ['services']);
