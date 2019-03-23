import { Component, Prop, Element, State, Watch } from "@stencil/core";
import { Services } from "microbit-web-bluetooth";
import DeviceTunnel from '../../device-tunnel';

@Component({
    tag: 'microbit-compass'
})
export class MicrobitCompass {
    @Element() el;
    @Prop() services: Services = undefined;

    @State() bearing: number = 0;

    @Watch('services')
    async watchHandler() {
        if (!this.services || !this.services.magnetometerService) {
            return;
        }

        const service = this.services.magnetometerService;
        this.bearing = await service.getMagnetometerBearing();
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

DeviceTunnel.injectProps(MicrobitCompass, ['services']);
