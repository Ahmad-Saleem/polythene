!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core-css"),require("polythene-core-list-tile"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core-css","polythene-core-list-tile","polythene-theme"],t):t(e.polythene={},e["polythene-core-css"],e["polythene-core-list-tile"],e["polythene-theme"])}(this,function(e,t,i,l){"use strict";function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var s={component:"pe-list-tile",content:"pe-list-tile__content",highSubtitle:"pe-list-tile__high-subtitle",primary:"pe-list-tile__primary",secondary:"pe-list-tile__secondary",subtitle:"pe-list-tile__subtitle",title:"pe-list-tile__title",contentFront:"pe-list-tile__content-front",compact:"pe-list-tile--compact",compactFront:"pe-list-tile--compact-front",disabled:"pe-list-tile--disabled",hasFront:"pe-list-tile--front",hasHighSubtitle:"pe-list-tile--high-subtitle",hasSubtitle:"pe-list-tile--subtitle",header:"pe-list-tile--header",hoverable:"pe-list-tile--hoverable",selectable:"pe-list-tile--selectable",selected:"pe-list-tile--selected",highlight:"pe-list-tile--highlight",sticky:"pe-list-tile--sticky"},p=function(e){return{"padding-left":e+"px","padding-right":e+"px"}},r=function(e,t){return{"padding-top":e+"px","padding-bottom":(t||e)+"px"}},_=function(e,i){return[o({},e,[t.flex.layout,{position:"relative",overflow:"hidden",".pe-list-tile--sticky":[t.mixin.sticky(2)]," .pe-list-tile__primary, .pe-list-tile__secondary":[t.flex.layoutHorizontal,{textDecoration:"none",color:"inherit",border:"none"}],":not(.pe-list-tile--header) .pe-list-tile__primary":[t.flex.flex(),{position:"relative"," .pe-list-tile__content:not(.pe-list-tile__content-front)":[t.flex.flex(),r(i.padding,i.padding+1)]}],":not(.pe-list-tile--disabled)":{outline:"none"}," .pe-list-tile__secondary":{textAlign:"right",fontSize:i.font_size_title+"px",position:"relative"}," .pe-list-tile__content":[t.flex.layoutVertical,t.flex.selfCenter,p(i.side_padding),{".pe-list-tile__content-front":[r(i.padding-5),{".pe-list-tile--compact-front":{width:i.compact_front_item_width+"px"},":not(.pe-list-tile--compact-front)":{width:i.front_item_width+"px"}}]," small":{fontSize:i.font_size_small+"px"}}]," .pe-list-tile__content-front + .pe-list-tile__content":{paddingLeft:0}," .pe-list-tile__title":[t.mixin.ellipsis(1,i.single_line_height,"px"),{fontSize:i.font_size_title+"px",fontWeight:l.vars.font_weight_normal,lineHeight:i.single_line_height+"px"}]," .pe-list-tile__subtitle":[t.mixin.ellipsis(i.subtitle_line_count,i.line_height_subtitle,"px"),{fontSize:i.font_size_subtitle+"px",lineHeight:i.line_height_subtitle+"px",".pe-list-tile__high-subtitle":[t.mixin.ellipsis(i.high_subtitle_line_count,i.line_height_subtitle,"px"),{whiteSpace:"normal"}]}],".pe-list-tile--selected, &.pe-list-tile--disabled":{" a":{pointerEvents:"none"}},".pe-list-tile--subtitle":{" .pe-list-tile__content":[r(i.has_subtitle_padding,i.has_subtitle_padding+1),{" .pe-list-tile__title":{padding:0}}]},".pe-list-tile--high-subtitle":{" .pe-list-tile--high-subtitle .pe-list-tile__secondary":[t.flex.layoutHorizontal,t.flex.layoutStart]," .pe-list-tile__content":[t.flex.selfStart,r(i.has_high_subtitle_padding,i.has_high_subtitle_padding+1),{" .pe-list-tile__title":{padding:0}}]},".pe-list-tile--header":{height:i.single_height+"px"," .pe-list-tile__content":{paddingTop:0,paddingBottom:0}," .pe-list-tile__title":[t.mixin.ellipsis(1,i.single_height,"px"),{fontSize:i.font_size_list_header+"px",fontWeight:l.vars.font_weight_medium,lineHeight:i.single_height+"px",padding:0}]}," .pe-list--compact &, &.pe-list-tile--compact":{":not(.pe-list-tile--header)":{" .pe-list-tile__content":r(i.compact_padding,i.compact_padding+1)}},"@supports (-moz-appearance:none) and (display:contents)":{" .pe-list-tile__primary, .pe-list-tile__content":{overflow:"hidden"}},".pe-dialog .pe-menu__content &":{" .pe-list-tile__title":t.mixin.ellipsis("none")},".pe-menu__content &":{":not(.pe-list-tile--disabled)":{cursor:"default","&, .pe-list-tile__primary, .pe-list-tile__secondary":{" .pe-list-tile__title, .pe-list-tile__subtitle":{userSelect:"none"}}}},"html.pe-no-touch &.pe-list-tile--hoverable,       html.pe-no-touch &.pe-list-tile--selectable":{":not(.pe-list-tile--header):not(.pe-list-tile--disabled):not(.pe-list-tile--selected):hover":{cursor:"pointer"}}}])]},a=function(e,t,i,l){return[n({},e.map(function(e){return e+t}).join(","),{color:i["color_"+l+"_title"],backgroundColor:i["color_"+l+"_background"],".pe-list-tile--header":{color:i["color_"+l+"_list_header"]," .pe-list-tile__primary, pe-list-tile__secondary":{backgroundColor:"inherit"}}," .pe-list-tile__subtitle":{color:i["color_"+l+"_subtitle"]}," .pe-list-tile__secondary":{color:i["color_"+l+"_secondary"]},".pe-list-tile--disabled":{"&, .pe-list-tile__title, .pe-list-tile__content, .pe-list-tile__subtitle":{color:i["color_"+l+"_text_disabled"]}},".pe-list-tile--selected":{" .pe-list-tile__primary, pe-list-tile__secondary":{backgroundColor:i["color_"+l+"_selected_background"]}},".pe-list-tile--highlight:not(.pe-list-tile--selected)":{" .pe-list-tile__primary, pe-list-tile__secondary":{backgroundColor:i["color_"+l+"_highlight_background"]}},"&.pe-list-tile--sticky":{backgroundColor:i["color_"+l+"_background"]||"inherit"},":not(.pe-list-tile--disabled)":{" a.pe-list-tile__primary:focus, a.pe-list-tile__secondary:focus":{outline:"none",backgroundColor:i["color_"+l+"_focus_background"]||"inherit"}}})]},c=function(e,t,i,l){return[n({},e.map(function(e){return e+t+":hover"}).join(","),{":not(.pe-list-tile--header):not(.pe-list-tile--disabled):not(.pe-list-tile--selected)":{" .pe-list-tile__primary, .pe-list-tile__secondary":{backgroundColor:i["color_"+l+"_hover_background"]}}})]},d=function(e,t){return[a([".pe-dark-tone",".pe-dark-tone "],e,t,"dark"),a(["",".pe-light-tone",".pe-light-tone "],e,t,"light"),c(["html.pe-no-touch .pe-dark-tone .pe-list-tile--hoverable","html.pe-no-touch .pe-dark-tone .pe-list-tile--hoverable "],e,t,"dark"),c(["html.pe-no-touch .pe-list-tile--hoverable","html.pe-no-touch .pe-list-tile--hoverable ","html.pe-no-touch .pe-light-tone .pe-list-tile--hoverable","html.pe-no-touch .pe-light-tone .pe-list-tile--hoverable "],e,t,"light")]},h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(e[l]=i[l])}return e},u=[_,d],g="."+s.component,b=function(e,l){return t.styler.generateStyles([e,g],h({},i.vars,l),u)},f=function(e,l){return e?t.styler.createStyleSheets([e,g],h({},i.vars,l),u):t.styler.createStyleSheets([g],i.vars,u)};t.styler.generateStyles([g],i.vars,u),e.addStyle=b,e.getStyle=f,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-css-list-tile.js.map
