/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@stencil/state-tunnel';
import {
  Services,
} from 'microbit-web-bluetooth';


export namespace Components {

  interface MicrobitApp {}
  interface MicrobitAppAttributes extends StencilHTMLAttributes {}

  interface MicrobitConnect {
    /**
    * The button label to connect
    */
    'connectLabel': string;
    'device': BluetoothDevice;
    /**
    * The button label to disconnect
    */
    'disconnectLabel': string;
    'setDevice': (device: BluetoothDevice) => void;
    'setServices': (services: Services) => void;
  }
  interface MicrobitConnectAttributes extends StencilHTMLAttributes {
    /**
    * The button label to connect
    */
    'connectLabel'?: string;
    'device'?: BluetoothDevice;
    /**
    * The button label to disconnect
    */
    'disconnectLabel'?: string;
    'setDevice'?: (device: BluetoothDevice) => void;
    'setServices'?: (services: Services) => void;
  }

  interface MicrobitFirmware {
    /**
    * The text shown when disconnected
    */
    'disconnectedText': string;
    /**
    * The text shown when no firmware info
    */
    'noInfo': string;
    'services': Services;
  }
  interface MicrobitFirmwareAttributes extends StencilHTMLAttributes {
    /**
    * The text shown when disconnected
    */
    'disconnectedText'?: string;
    /**
    * The text shown when no firmware info
    */
    'noInfo'?: string;
    'services'?: Services;
  }

  interface MicrobitStatus {
    /**
    * The text shown when connected
    */
    'connectedText': string;
    'device': BluetoothDevice;
    /**
    * The text shown when disconnected
    */
    'disconnectedText': string;
  }
  interface MicrobitStatusAttributes extends StencilHTMLAttributes {
    /**
    * The text shown when connected
    */
    'connectedText'?: string;
    'device'?: BluetoothDevice;
    /**
    * The text shown when disconnected
    */
    'disconnectedText'?: string;
  }

  interface MicrobitTemperature {
    /**
    * The text shown when disconnected
    */
    'disconnectedText': string;
    /**
    * The text shown when no temperature
    */
    'noTemperature': string;
    'services': Services;
    /**
    * The interval to check the temperature (ms)
    */
    'temperaturePeriod': number;
  }
  interface MicrobitTemperatureAttributes extends StencilHTMLAttributes {
    /**
    * The text shown when disconnected
    */
    'disconnectedText'?: string;
    /**
    * The text shown when no temperature
    */
    'noTemperature'?: string;
    'services'?: Services;
    /**
    * The interval to check the temperature (ms)
    */
    'temperaturePeriod'?: number;
  }

  interface MicrobitText {
    /**
    * The text shown on the button
    */
    'buttonText': string;
    /**
    * The speed to scroll the text
    */
    'scrollDelay': number;
    'services': Services;
  }
  interface MicrobitTextAttributes extends StencilHTMLAttributes {
    /**
    * The text shown on the button
    */
    'buttonText'?: string;
    /**
    * The speed to scroll the text
    */
    'scrollDelay'?: number;
    'services'?: Services;
  }
}

declare global {
  interface StencilElementInterfaces {
    'MicrobitApp': Components.MicrobitApp;
    'MicrobitConnect': Components.MicrobitConnect;
    'MicrobitFirmware': Components.MicrobitFirmware;
    'MicrobitStatus': Components.MicrobitStatus;
    'MicrobitTemperature': Components.MicrobitTemperature;
    'MicrobitText': Components.MicrobitText;
  }

  interface StencilIntrinsicElements {
    'microbit-app': Components.MicrobitAppAttributes;
    'microbit-connect': Components.MicrobitConnectAttributes;
    'microbit-firmware': Components.MicrobitFirmwareAttributes;
    'microbit-status': Components.MicrobitStatusAttributes;
    'microbit-temperature': Components.MicrobitTemperatureAttributes;
    'microbit-text': Components.MicrobitTextAttributes;
  }


  interface HTMLMicrobitAppElement extends Components.MicrobitApp, HTMLStencilElement {}
  var HTMLMicrobitAppElement: {
    prototype: HTMLMicrobitAppElement;
    new (): HTMLMicrobitAppElement;
  };

  interface HTMLMicrobitConnectElement extends Components.MicrobitConnect, HTMLStencilElement {}
  var HTMLMicrobitConnectElement: {
    prototype: HTMLMicrobitConnectElement;
    new (): HTMLMicrobitConnectElement;
  };

  interface HTMLMicrobitFirmwareElement extends Components.MicrobitFirmware, HTMLStencilElement {}
  var HTMLMicrobitFirmwareElement: {
    prototype: HTMLMicrobitFirmwareElement;
    new (): HTMLMicrobitFirmwareElement;
  };

  interface HTMLMicrobitStatusElement extends Components.MicrobitStatus, HTMLStencilElement {}
  var HTMLMicrobitStatusElement: {
    prototype: HTMLMicrobitStatusElement;
    new (): HTMLMicrobitStatusElement;
  };

  interface HTMLMicrobitTemperatureElement extends Components.MicrobitTemperature, HTMLStencilElement {}
  var HTMLMicrobitTemperatureElement: {
    prototype: HTMLMicrobitTemperatureElement;
    new (): HTMLMicrobitTemperatureElement;
  };

  interface HTMLMicrobitTextElement extends Components.MicrobitText, HTMLStencilElement {}
  var HTMLMicrobitTextElement: {
    prototype: HTMLMicrobitTextElement;
    new (): HTMLMicrobitTextElement;
  };

  interface HTMLElementTagNameMap {
    'microbit-app': HTMLMicrobitAppElement
    'microbit-connect': HTMLMicrobitConnectElement
    'microbit-firmware': HTMLMicrobitFirmwareElement
    'microbit-status': HTMLMicrobitStatusElement
    'microbit-temperature': HTMLMicrobitTemperatureElement
    'microbit-text': HTMLMicrobitTextElement
  }

  interface ElementTagNameMap {
    'microbit-app': HTMLMicrobitAppElement;
    'microbit-connect': HTMLMicrobitConnectElement;
    'microbit-firmware': HTMLMicrobitFirmwareElement;
    'microbit-status': HTMLMicrobitStatusElement;
    'microbit-temperature': HTMLMicrobitTemperatureElement;
    'microbit-text': HTMLMicrobitTextElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}