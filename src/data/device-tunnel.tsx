import { createProviderConsumer } from '@stencil/state-tunnel';
import { Services } from 'microbit-web-bluetooth';

export interface State {
    device: BluetoothDevice;
    services: Services;
    setDevice?: (device: BluetoothDevice) => void;
    setServices?: (services: Services) => void;
}

export default createProviderConsumer<State>({
        device: undefined,
        services: {}
    },
    (subscribe, child) => (
        <context-consumer subscribe={subscribe} renderer={child} />
    )
);
