import { h, Component, Prop, Element, Watch, State } from "@stencil/core";
import { Services } from "microbit-web-bluetooth";
import { AccelerometerPeriod, AccelerometerData } from "microbit-web-bluetooth/types/services/accelerometer";
import { microbitStore } from '../microbit-store';

@Component({
    tag: 'microbit-movement'
})
export class MicrobitMovement {
    constructor() {
        microbitStore.addListener(this);
    }

    @Element()
    protected el;

    @Prop({mutable: true})
    public services: Services = null;

    /**
     * The sensitivity of the sensor
     */
    @Prop()
    public sensitivity: number = 1;

    /**
     * The frequency to read the sensor
     */
    @Prop()
    public frequency: number = 20;

    /**
     * The CSS class to use when still
     */
    @Prop()
    public stillClass: string = "microbit-still";

    /**
     * The CSS class to use when moved
     */
    @Prop()
    public movedClass: string = "microbit-moved";

    @State()
    protected className = this.stillClass;

    @Watch('services')
    protected async servicesUpdated() {
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

    private setClassName(data: AccelerometerData) {
        this.className = 
            (Math.abs(data.x) > this.sensitivity
            || Math.abs(data.y) > this.sensitivity
            || Math.abs(data.z) > this.sensitivity) ? this.movedClass
            : this.stillClass;
    }

    public render() {
        return (
            <span class={this.className}>
                <slot />
            </span>
        );
    }
}
