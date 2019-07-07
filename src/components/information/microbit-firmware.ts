import { customElement, LitElement, property, html } from "lit-element";
import { DeviceInformation } from "microbit-web-bluetooth/types/services/device-information";
import { microbitStore } from "../../microbit-store";

@customElement("microbit-firmware")
export class MicrobitFirmware extends LitElement {
    @property()
    public deviceInformation: DeviceInformation | null = null;

    /**
     * The text shown when disconnected
     */
    @property({attribute: "disconnected-text"})
    public disconnectedText: string = "Disconnected";

    /**
     * The text shown when no firmware version
     */
    @property({attribute: "no-info"})
    public noInfo: string = "No firmware version found";

    constructor() {
        super();
        microbitStore.addListener(this);
    }

    public render() {
        return html`${this.deviceInformation ? this.deviceInformation.firmwareRevision
            || this.noInfo : this.disconnectedText}`;
    }
}
