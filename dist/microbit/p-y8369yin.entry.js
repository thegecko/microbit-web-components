import{r as e,g as i}from"./p-416d80af.js";import{m as t}from"./p-ede9ed58.js";class r{constructor(i){e(this,i),this.deviceInformation=null,this.disconnectedText="Disconnected",this.noInfo="No firmware version found",t.addListener(this)}render(){return this.deviceInformation?this.deviceInformation.firmwareRevision||this.noInfo:this.disconnectedText}get el(){return i(this)}}export{r as microbit_firmware};