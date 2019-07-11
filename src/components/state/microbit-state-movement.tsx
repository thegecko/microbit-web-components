import { h, Component, Prop, Element, Watch, State } from "@stencil/core";
import { Services } from "microbit-web-bluetooth";
import { AccelerometerPeriod, AccelerometerData } from "microbit-web-bluetooth/types/services/accelerometer";
import { microbitStore } from '../../microbit-store';

@Component({
    tag: 'microbit-state-movement'
})
export class MicrobitStateMovement {
    constructor() {
        microbitStore.addListener(this);
    }

    @Element() el;
    @Prop({mutable: true}) services: Services = null;

    /**
     * The sensitivity of the sensor
     */
    @Prop() sensitivity: number = 1;

    /**
     * The frequency to read the sensor
     */
    @Prop() frequency: number = 20;

    /**
     * The css class to use when still
     */
    @Prop() stillClass: string = "microbit-still";

    /**
     * The css class to use when moved
     */
    @Prop() movedClass: string = "microbit-moved";

    @State() className = this.stillClass;

    @Watch('services')
    async watchHandler() {
        if (!this.services || !this.services.accelerometerService) {
            this.className = this.stillClass;
            return;
        }

        const service = this.services.accelerometerService;
        await service.setAccelerometerPeriod(this.frequency as AccelerometerPeriod);
        const data = await service.readAccelerometerData();
        this.setClassName(data);
        await service.addEventListener("accelerometerdatachanged", event => this.setClassName(event.detail));
    }

    render() {
        return (
            <span class={this.className}>
                <slot />
            </span>
        );
    }

    private setClassName(data: AccelerometerData) {
        this.className = 
            (Math.abs(data.x) > this.sensitivity
            || Math.abs(data.y) > this.sensitivity
            || Math.abs(data.z) > this.sensitivity) ? this.movedClass
            : this.stillClass;
    }
}
