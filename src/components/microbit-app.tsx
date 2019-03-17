import { Component, State } from "@stencil/core";
import { Services } from 'microbit-web-bluetooth';
import { DeviceInformation } from "microbit-web-bluetooth/types/services/device-information";
import DeviceTunnel from '../device-tunnel';

@Component({
    tag: 'microbit-app'
})
export class MicrobitApp {

    @State() device: BluetoothDevice = undefined;
    @State() services: Services = undefined;
    @State() deviceInformation: DeviceInformation = undefined;

    setDevice = (device: BluetoothDevice) => {
        this.device = device;
    }

    setServices = (services: Services) => {
        this.services = services;
    }

    setDeviceInformation = (deviceInformation: DeviceInformation) => {
        this.deviceInformation = deviceInformation;
    }

    render() {
        const deviceState = {
            device: this.device,
            services: this.services,
            deviceInformation: this.deviceInformation,
            setDevice: this.setDevice,
            setServices: this.setServices,
            setDeviceInformation: this.setDeviceInformation
        };
        return (
            <DeviceTunnel.Provider state={deviceState}>
                <slot />
            </DeviceTunnel.Provider>
        );
    }
}
