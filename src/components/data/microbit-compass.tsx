import { h, Component, Prop, Element, State, Watch } from "@stencil/core";
import { Services } from "microbit-web-bluetooth";
import { microbitStore } from '../../microbit-store';

@Component({
    tag: 'microbit-compass'
})
export class MicrobitCompass {
    constructor() {
        microbitStore.addListener(this);
    }

    @Element() el;
    @Prop({mutable: true}) services: Services = null;

    @State() bearing: number = 0;

    @Watch('services')
    async watchHandler() {
        if (!this.services || !this.services.magnetometerService) {
            return;
        }

        const service = this.services.magnetometerService;
        this.bearing = await service.readMagnetometerBearing();
        await service.addEventListener("magnetometerbearingchanged", event => this.bearing = event.detail);
    }

    render() {
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
