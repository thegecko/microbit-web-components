import { Services } from "microbit-web-bluetooth";
import { DeviceInformation } from "microbit-web-bluetooth/types/services/device-information";
import { Store } from "./store";

export interface MicrobitStore {
    device: BluetoothDevice;
    services: Services;
    deviceInformation: DeviceInformation;
}

export const microbitStore = new Store<MicrobitStore>();
