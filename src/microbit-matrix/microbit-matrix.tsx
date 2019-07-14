import { Component, Prop, Element, Watch } from "@stencil/core";
import { Services } from "microbit-web-bluetooth";
import { LedMatrix } from "microbit-web-bluetooth/types/services/led";
import { microbitStore } from '../microbit-store';


type ElMatrix = [
    [HTMLElement, HTMLElement, HTMLElement, HTMLElement, HTMLElement],
    [HTMLElement, HTMLElement, HTMLElement, HTMLElement, HTMLElement],
    [HTMLElement, HTMLElement, HTMLElement, HTMLElement, HTMLElement],
    [HTMLElement, HTMLElement, HTMLElement, HTMLElement, HTMLElement],
    [HTMLElement, HTMLElement, HTMLElement, HTMLElement, HTMLElement]
];

@Component({
    tag: 'microbit-matrix'
})
export class MicrobitMatrix {
    constructor() {
        microbitStore.addListener(this);
    }

    @Element()
    protected el;

    @Prop({mutable: true})
    public services: Services = null;

    /**
     * The template for identifying child LEDs
     */
    @Prop()
    public idTemplate: string = "microbit-matrix-${row}-${column}";

    /**
     * The CSS class for off LEDs
     */
    @Prop()
    public offClass: string = "microbit-matrix-off";

    /**
     * The CSS class for on LEDs
     */
    @Prop()
    public onClass: string = "microbit-matrix-on";

    private matrix: LedMatrix;
    private elements: ElMatrix;
 
    @Watch('services')
    protected async servicesUpdated() {
        const els: HTMLElement[][] = [[], [], [], [], []];

        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                const id = this.idTemplate.replace("${row}", i.toString()).replace("${column}", j.toString());
                const led = document.getElementById(id);
                if (led) {
                    els[i][j] = led;
                    led.onclick = () => this.toggle(i, j);
                    led.classList.toggle(this.onClass, false);
                    led.classList.toggle(this.offClass, false);
                }
            }
        }
        this.elements = els as ElMatrix;

        if (!this.services || !this.services.ledService) {
            return;
        }

        this.matrix = await this.services.ledService.readMatrixState();
        await this.updateMatrix();
    }

    private async toggle(row: number, column: number) {
        this.matrix[row][column] = !this.matrix[row][column];
        await this.services.ledService.writeMatrixState(this.matrix);
        this.updateMatrix();
    }

    private updateMatrix() {
        this.matrix.forEach((rows: Boolean[], row) => {
            rows.forEach((value: boolean, column) => {
                const led = this.elements[row][column];
                if (led) {
                    led.classList.toggle(this.onClass, value);
                    led.classList.toggle(this.offClass, !value);
                }
            });
        });
    }
}
