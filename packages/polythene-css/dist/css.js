!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-theme"),require("j2c")):"function"==typeof define&&define.amd?define(["exports","polythene-theme","j2c"],t):t(e.polythene=e.polythene||{},e["polythene-theme"],e.j2c)}(this,function(e,t,i){"use strict";i="default"in i?i.default:i;var n=function(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e},r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},l=function(e,t){var i=t.map(function(e){return"_"+e+"$"}).join("");return n({},i,e)},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=e+"px";return{position:"absolute",top:t,right:t,bottom:t,left:t}},a=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return e?{"-webkit-font-smoothing":"antialiased","-moz-osx-font-smoothing":"grayscale"}:{"-webkit-font-smoothing":"subpixel-antialiased","-moz-osx-font-smoothing":"auto"}},s=function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"px";return"none"===e?{"text-overflow":"initial",overflow:"initial",display:"block",height:"auto"}:r({},{overflow:"hidden","text-overflow":"ellipsis","text-rendering":"auto"},void 0!==e?{"-webkit-line-clamp":e,"-webkit-box-orient":"vertical",display:"-webkit-box"}:null,void 0!==t?{"max-height":e*t+i}:null)},f=function(){return{"&:after":{content:'""',display:"table",clear:"both"}}},u=function(){return{}},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return[{position:"-webkit-sticky"},{position:"-moz-sticky"},{position:"-o-sticky"},{position:"-ms-sticky"},{position:"sticky"},{top:0,"z-index":e}]},x=function(e,t){return Array.isArray(e)?e.map(function(e){for(var i in e)return n({},i,t(e[i]))}):t(e)},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.vars.animation_duration,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.vars.animation_curve_default;return[l({"transition-delay":0},t.vars.prefixes_transition),l({"transition-duration":i},t.vars.prefixes_transition),l({"transition-timing-function":n},t.vars.prefixes_transition),l({"transition-property":e},t.vars.prefixes_transition)]},p={clearfix:f,createStyles:x,defaultTransition:d,ellipsis:s,fit:o,fontSmoothing:a,hairline:u,sticky:c,vendorize:l},m=[{display:"-webkit-box"},{display:"-moz-box"},{display:"-ms-flexbox","-ms-flex-preferred-size":"initial"},{display:"-webkit-flex"},{display:"flex"}],y=[m,{display:"-ms-inline-flexbox"},{display:"-webkit-inline-flex"},{display:"inline-flex"}],b=[m,{"-ms-flex-direction":"row","-webkit-flex-direction":"row","flex-direction":"row"}],w=[m,{"-ms-flex-direction":"row-reverse","-webkit-flex-direction":"row-reverse","flex-direction":"row-reverse"}],v=[m,{"-ms-flex-direction":"column","-webkit-flex-direction":"column","flex-direction":"column"}],g=[m,{"-ms-flex-direction":"column-reverse","-webkit-flex-direction":"column-reverse","flex-direction":"column-reverse"}],h=[m,{"-ms-flex-wrap":"wrap","-webkit-flex-wrap":"wrap","flex-wrap":"wrap"}],k=[m,{"-ms-flex-wrap":"wrap-reverse","-webkit-flex-wrap":"wrap-reverse","flex-wrap":"wrap-reverse"}],j=[m,{"-ms-flex-align":"start","-webkit-align-items":"flex-start","align-items":"flex-start"}],z=[m,{"-ms-flex-align":"center","-webkit-align-items":"center","align-items":"center"}],C=[m,{"-ms-flex-align":"end","-webkit-align-items":"flex-end","align-items":"flex-end"}],_=[m,{"-ms-flex-line-pack":"stretch","-ms-flex-pack":"justify","-webkit-justify-content":"space-between","justify-content":"space-between"}],A=[m,{"-ms-flex-align":"start","-ms-flex-pack":"start","-webkit-justify-content":"flex-start","justify-content":"flex-start"}],E=[m,{"-ms-flex-pack":"center","-webkit-justify-content":"center","justify-content":"center"}],S=[m,{"-ms-flex-pack":"end","-webkit-justify-content":"flex-end","justify-content":"flex-end"}],O=[E,z],J=[m,{"-ms-flex-pack":"distribute","-webkit-justify-content":"space-around","justify-content":"space-around"}],I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return[{"-webkit-box-flex":e},{"-moz-box-flex":e},{"-webkit-flex":e},{"-ms-flex":e},{flex:e},1===e?{"-webkit-flex-basis":"0.000000001px"}:{},1===e?{"flex-basis":"0.000000001px"}:{}]},P={"-ms-flex":"1 1 auto","-webkit-flex-basis":"auto","flex-basis":"auto"},R={"-ms-flex":"1 1 auto","-webkit-flex-basis":"auto","flex-basis":"auto"},T=function(e){return{"-ms-flex":e,"-webkit-flex":e,flex:e}},V=function(e){return{"-webkit-flex-grow":e,"flex-grow":e}},q={"-ms-flex-item-align":"start","-ms-align-self":"flex-start","-webkit-align-self":"flex-start","align-self":"flex-start"},H={"-ms-flex-item-align":"center","-ms-align-self":"center","-webkit-align-self":"center","align-self":"center"},N={"-ms-flex-item-align":"end","-ms-align-self":"flex-end","-webkit-align-self":"flex-end","align-self":"flex-end"},W={"-ms-flex-item-align":"stretch","-ms-align-self":"stretch","-webkit-align-self":"stretch","align-self":"stretch"},B={flex:I,flexAuto:P,flexAutoVertical:R,flexIndex:T,flexGrow:V,layout:m,layoutAroundJustified:J,layoutCenter:z,layoutCenterCenter:O,layoutCenterJustified:E,layoutEnd:C,layoutEndJustified:S,layoutHorizontal:b,layoutHorizontalReverse:w,layoutInline:y,layoutJustified:_,layoutStart:j,layoutStartJustified:A,layoutVertical:v,layoutVerticalReverse:g,layoutWrap:h,layoutWrapReverse:k,selfCenter:H,selfEnd:N,selfStart:q,selfStretch:W},D=function(e,t,i,n){for(var r=arguments.length,l=Array(r>4?r-4:0),o=4;o<r;o++)l[o-4]=arguments[o];var a=t[i],s=a?a(n):n;M(e,l.map(function(e){return e(s)}))},G=function(e,t,i,l){return r({},t,n({},i,function(t){return[n({},"."+e,r({},t,l))]}))},M=function(e){for(var t=arguments.length,i=Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];F.apply(void 0,[{id:e}].concat(i))},$=function(e){if(e){var t=document.getElementById(e);t&&t.parentNode.removeChild(t)}},F=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var l=e.id,o=e.document||window.document;$(l);var a=o.createElement("style");l&&a.setAttribute("id",l),n.forEach(function(e){Object.keys(e).length&&e.forEach(function(e){var t={"@global":e},n=i.sheet(t);a.appendChild(o.createTextNode(n))})}),o.head.appendChild(a)},K={add:M,addToDocument:F,remove:$,styleComponent:D,addComponentStyle:G};e.mixin=p,e.flex=B,e.styler=K,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=css.js.map
