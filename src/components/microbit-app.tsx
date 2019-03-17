import { Component, State } from "@stencil/core";
import { Services } from 'microbit-web-bluetooth';
import DeviceTunnel from '../data/device-tunnel';

@Component({
    tag: 'microbit-app'
})
export class MicrobitApp {

    @State() device: BluetoothDevice = undefined;
    @State() services: Services = undefined;

    setDevice = (device: BluetoothDevice) => {
        this.device = device;
    }

    setServices = (services: Services) => {
        this.services = services;
    }

    render() {
        const deviceState = {
            device: this.device,
            services: this.services,
            setDevice: this.setDevice,
            setServices: this.setServices
        };
        return (
            <DeviceTunnel.Provider state={deviceState}>
                <slot />
            </DeviceTunnel.Provider>
        );
    }
}
