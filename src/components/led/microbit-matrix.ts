import { customElement, LitElement, property, html } from "lit-element";
import { Services } from "microbit-web-bluetooth";
import { LedMatrix } from "microbit-web-bluetooth/types/services/led";
import { microbitStore } from "../../microbit-store";

type ElMatrix = [
    [HTMLElement, HTMLElement, HTMLElement, HTMLElement, HTMLElement],
    [HTMLElement, HTMLElement, HTMLElement, HTMLElement, HTMLElement],
    [HTMLElement, HTMLElement, HTMLElement, HTMLElement, HTMLElement],
    [HTMLElement, HTMLElement, HTMLElement, HTMLElement, HTMLElement],
    [HTMLElement, HTMLElement, HTMLElement, HTMLElement, HTMLElement]
];

@customElement("microbit-matrix")
export class MicrobitMatrix extends LitElement {
    @property()
    public services: Services | null = null;

    /**
     * The template for identifying child LEDs
     */
    @property({attribute: "id-template"})
    public idTemplate: string = "microbit-matrix-${row}-${column}";

    /**
     * The CSS class for off LEDs
     */
    @property({attribute: "off-class"})
    public offClass: string = "microbit-matrix-off";

    /**
     * The CSS class for on LEDs
     */
    @property({attribute: "on-class"})
    public onClass: string = "microbit-matrix-on";

    private matrix!: LedMatrix;
    private elements!: ElMatrix;

    constructor() {
        super();
        microbitStore.addListener(this);
    }

    public render() {
        return html`
            <span>
                <slot />
            </span>
        `;
    }

    public updated(changedProps: Map<string, any>) {
        super.updated(changedProps);

        if (changedProps.has("services")) {
            this.servicesUpdated();
        }
    }

    private async servicesUpdated() {
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
        if (this.services && this.services.ledService) {
            await this.services.ledService.writeMatrixState(this.matrix);
            this.updateMatrix();
        }
    }

    private updateMatrix() {
        this.matrix.forEach((rows: boolean[], row) => {
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
