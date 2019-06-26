import { Services } from "microbit-web-bluetooth";
import { DeviceInformation } from "microbit-web-bluetooth/types/services/device-information";
import { Store } from "./store";

export interface MicrobitStore {
    device: BluetoothDevice | null;
    services: Services | null;
    deviceInformation: DeviceInformation | null;
}

export const microbitStore = new Store<MicrobitStore>();
