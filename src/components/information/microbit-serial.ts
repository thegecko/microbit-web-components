import { customElement, LitElement, property, html } from "lit-element";
import { DeviceInformation } from "microbit-web-bluetooth/types/services/device-information";
import { microbitStore } from "../../microbit-store";

@customElement("microbit-serial")
export class MicrobitSerial extends LitElement {
    @property()
    public deviceInformation: DeviceInformation | null = null;

    /**
     * The text shown when disconnected
     */
    @property()
    public disconnectedText: string = "Disconnected";

    /**
     * The text shown when no serial number
     */
    @property()
    public noInfo: string = "No serial number found";

    constructor() {
        super();
        microbitStore.addListener(this);
    }

    public render() {
        return html`${this.deviceInformation ? this.deviceInformation.serialNumber || this.noInfo : this.disconnectedText}`;
    }
}
