import { createProviderConsumer } from '@stencil/state-tunnel';
import { Services } from 'microbit-web-bluetooth';
import { DeviceInformation } from 'microbit-web-bluetooth/types/services/device-information';

export interface State {
    device: BluetoothDevice;
    services: Services;
    deviceInformation: DeviceInformation
    setDevice?: (device: BluetoothDevice) => void;
    setServices?: (services: Services) => void;
    setDeviceInformation?: (deviceInformation: DeviceInformation) => void;
}

export default createProviderConsumer<State>({
        device: undefined,
        services: undefined,
        deviceInformation: undefined
    },
    (subscribe, child) => (
        <context-consumer subscribe={subscribe} renderer={child} />
    )
);
