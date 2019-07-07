import { customElement } from "lit-element";
import { ButtonService } from "microbit-web-bluetooth/types/services/button";
import { MicrobitStateButton } from "./microbit-state-button";

@customElement("microbit-state-button-a")
export class MicrobitStateButtonA extends MicrobitStateButton {

    protected async serviceUpdate(service: ButtonService) {
        await service.addEventListener("buttonastatechanged", event => this.setBackground(event.detail));
        this.setBackground(await service.readButtonAState());
    }
}
