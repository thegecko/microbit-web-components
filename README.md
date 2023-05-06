# micro:bit Web Components

[![npm](https://img.shields.io/npm/dm/microbit-web-components.svg)](https://www.npmjs.com/package/microbit-web-components)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://spdx.org/licenses/MIT.html)

Web Components library for micro:bit

# Example

All of the implemented web components can be found in the [example page](https://github.com/thegecko/microbit-web-components/blob/master/examples/index.html) live here:

https://thegecko.github.io/microbit-web-components

# Device Setup

Please refer to the [microbit-web-bluetooth](https://github.com/thegecko/microbit-web-bluetooth) documentation for creating a `.hex` file for your device and some sample programs:

https://thegecko.github.io/microbit-web-bluetooth/docs/index.html#device-setup

# Implementation Status

## Actions
- [x] Connect/Disconnect
- [x] Calibrate Compass

## Device Information
- [x] Name
- [x] Firmware Version
- [x] Hardware Version
- [x] Manufacturer Name
- [x] Model Number
- [x] Serial Number

## State Class Wrappers
- [x] Connection State
- [x] Button A State
- [x] Button B State
- [x] Movement State
- [ ] IO Pin State

## Data
- [x] Temperature
- [x] Compass
- [ ] Write IO

## LEDs
- [x] Write Text
- [x] Read/Write LED Matrix

# Serial
- [x] Send Message
- [x] Receive Message

### Events
- [ ] Send Event
- [ ] Receive Event
- [ ] Client Channel Selection
- [ ] Microbit Channel Selection

### Firmware
- [x] Initiate DFU Mode
- [ ] Update Firmware
