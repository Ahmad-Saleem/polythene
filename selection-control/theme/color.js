"use strict";function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.defineProperty(exports,"__esModule",{value:!0});var style=function(config,tint){var scope=arguments.length<=2||void 0===arguments[2]?"":arguments[2];return[_defineProperty({},scope+".pe-control",{color:config["color_"+tint+"_on_text"]," .pe-control__label":{" span":{color:config["color_"+tint+"_label_text"]}}," .pe-control__box":{" .pe-control__button":{"&, .pe-icon":{color:"currentcolor"},"&.pe-control__button--off":{color:config["color_"+tint+"_off_text"]}}},"&.pe-control--disabled":{" .pe-control__label span":{color:config["color_"+tint+"_disabled_text"]}," .pe-control__box .pe-control__button":{"&, &.pe-control__button--off":{color:config["color_"+tint+"_disabled_text"]}}}})]};exports["default"]=style,module.exports=exports["default"];
//# sourceMappingURL=color.js.map