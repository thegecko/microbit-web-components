import { h, Component, Prop, Element, State, Watch } from "@stencil/core";
import { Services } from "microbit-web-bluetooth";
import { microbitStore } from '../microbit-store';

@Component({
    tag: 'microbit-compass'
})
export class MicrobitCompass {
    constructor() {
        microbitStore.addListener(this);
    }

    @Element()
    protected el;

    @Prop({mutable: true})
    public services: Services = null;

    @State()
    protected bearing: number = 0;

    @Watch('services')
    protected async servicesUpdated() {
        if (!this.services || !this.services.magnetometerService) {
            return;
        }

        const service = this.services.magnetometerService;
        await service.addEventListener("magnetometerbearingchanged", event => this.bearing = event.detail);
        this.bearing = await service.readMagnetometerBearing();
    }

    public render() {
        const style = {
            position: "absolute",
            transform: `rotate(${this.bearing}deg)`
        };
        return (
            <span style={style}>
                <slot />
            </span>
        );
    }
}
