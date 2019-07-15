import { h, Component, Prop, Element, State, Watch } from "@stencil/core";
import { Services } from "microbit-web-bluetooth";
import { microbitStore } from '../microbit-store';

@Component({
    tag: 'microbit-dfu'
})
export class MicrobitDfu {
    constructor() {
        microbitStore.addListener(this);
    }

    @Element()
    protected el;

    @Prop({mutable: true})
    public services: Services = null;

    /**
     * The button label to initiate DFU mode
     */
    @Prop()
    public dfuLabel: string = "Initiate DFU"

    @State()
    protected disabled = true;

    @Watch('services')
    protected async servicesUpdated() {
        this.disabled = !this.services || !this.services.dfuControlService;
    }

    private async calibrate() {
        if (this.services.dfuControlService) {
            await this.services.dfuControlService.requestDfu();
        }
    }

    public render() {
        return (
            <button disabled={this.disabled} onClick={() => this.calibrate()}>{this.dfuLabel}</button>
        );
    }
}
