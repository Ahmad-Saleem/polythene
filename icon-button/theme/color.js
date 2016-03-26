"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.defineProperty(exports,"__esModule",{value:!0});var _mixin=require("polythene/common/mixin"),_mixin2=_interopRequireDefault(_mixin),style=function(config,tint,type){var scope=arguments.length<=3||void 0===arguments[3]?"":arguments[3];return[_defineProperty({},scope+".pe-button.pe-button--icon",{color:config["color_"+tint+"_"+type+"_normal_text"],background:"none"," .pe-button__wash":{opacity:config["color_"+tint+"_wash_opacity"]},"&:active, &.pe-button--selected":{" .pe-button__wash":{"background-color":"currentcolor"}},"&.pe-button--disabled":{color:config["color_"+tint+"_"+type+"_disabled_text"]},"&.pe-button--raised":{"background-color":config["color_"+tint+"_background"]," .pe-button__content":{background:"transparent"}}})]},noTouch=function(config,tint,type){var scope=arguments.length<=3||void 0===arguments[3]?"":arguments[3];return[_defineProperty({},scope+".pe-button.pe-button--icon:hover","light"===tint?{" .pe-button__wash":{"background-color":"currentcolor"}}:{" .pe-button__wash":{"background-color":config["color_"+tint+"_"+type+"_normal_text"]}})]},createStyles=function(config){return[style(config,"light","flat"),{"html.pe-no-touch":[noTouch(config,"light","flat"," ")]},{".pe-dark-theme":[style(config,"dark","flat"," ")]},{"html.pe-no-touch .pe-dark-theme":[noTouch(config,"dark","flat"," ")]}]};exports["default"]=function(config){return _mixin2["default"].createStyles(config,createStyles)},module.exports=exports["default"];
//# sourceMappingURL=color.js.map