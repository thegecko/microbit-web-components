import { Component, Prop, Element, State, Watch } from "@stencil/core";
import { Services } from "microbit-web-bluetooth";
import DeviceTunnel from '../../data/device-tunnel';

@Component({
    tag: 'microbit-info-firmware',
    styleUrl: 'microbit-info-firmware.css',
    shadow: true
})
export class MicrobitInfo {
    @Element() el;
    @Prop() device: BluetoothDevice = undefined;
    @Prop() services: Services = {};
    @State() info: string = "";

    /**
     * The text shown when disconnected
     */
    @Prop() disconnectedText: string = "Disconnected";

    /**
     * The text shown when no firmware info
     */
    @Prop() noInfo: string = "No firmware info found";

    @Watch('services')
    async watchHandler() {
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
            <div>{this.getText()}</div>
        );
    }

    private getText() {
        if (!this.device) {
            return this.disconnectedText;
        }
        return this.info;
    }
}

DeviceTunnel.injectProps(MicrobitInfo, ['device', 'services']);
