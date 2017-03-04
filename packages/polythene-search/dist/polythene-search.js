!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("mithril"),require("polythene-textfield"),require("polythene-core"),require("polythene-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","mithril","polythene-textfield","polythene-core","polythene-css","polythene-theme"],t):t(e.polythene=e.polythene||{},e.m,e["polythene-textfield"],e["polythene-core"],e["polythene-css"],e["polythene-theme"])}(this,function(e,t,i,n,r,l){"use strict";function d(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}t="default"in t?t.default:t,i="default"in i?i.default:i;var o=l.vars.rgba,_=8,p=20,u=20,s=48,f=16,h=0,c=0,g=l.vars.unit_block_border_radius,x=0,b=56,y=_,v=0,m=0,w={font_size_input:u,line_height_input:p,inset_height:s,inset_input_indent:f,inset_side_padding:c,inset_input_right_padding:h,inset_border_radius:g,full_width_height:b,full_width_side_margin:x,full_width_side_padding:y,full_width_input_right_padding:v,full_width_border_radius:m,color_light_label_text:o(l.vars.color_light_foreground,l.vars.blend_light_text_disabled),color_light_background:o(l.vars.color_light_background),color_dark_label_text:o(l.vars.color_dark_foreground,l.vars.blend_dark_text_disabled),color_dark_background:o(l.vars.color_dark_background)},k=function(e,t){var i=(t.inset_height-t.line_height_input)/2,n=(t.full_width_height-t.line_height_input)/2,a=l.vars.unit_indent-t.full_width_side_padding-l.vars.grid_unit_icon_button;return[d({},e,[r.flex.flex(),{position:"relative"," .pe-textfield":[r.flex.flex(),{padding:0,position:"relative",zIndex:1," .pe-textfield__input-area":{padding:0,":after":{display:"none"}}," .pe-textfield__input, .pe-textfield__label":{fontSize:t.font_size_input+"px",lineHeight:t.line_height_input+"px"}," .pe-textfield__input":{border:"none"}," .pe-textfield__label":{top:0,bottom:0}}]," .pe-search__content":r.flex.layoutHorizontal," .pe-search__content > *":[r.flex.layoutVertical,r.flex.selfCenter],".pe-search--inset":{"border-radius":t.inset_border_radius+"px",padding:"0 "+t.inset_side_padding+"px","&, .pe-textfield__input-area, .pe-textfield__input, .pe-textfield__label":{padding:0,height:t.inset_height+"px"}," .pe-textfield__input, .pe-textfield__label":{paddingTop:i+"px",paddingBottom:i+"px",paddingLeft:t.inset_input_indent+"px",paddingRight:t.inset_input_right_padding+"px"}},".pe-search--full-width":{borderRadius:t.full_width_border_radius+"px",padding:"0 "+t.full_width_side_padding+"px","&, .pe-textfield__input-area, .pe-textfield__input, .pe-textfield__label":{height:t.full_width_height+"px"}," .pe-textfield__input, .pe-textfield__label":{paddingTop:n+"px",paddingBottom:n+"px",paddingLeft:a+"px",paddingRight:t.full_width_input_right_padding+"px"}}}])]},S=function(e,t,i,n){return[a({},e+t,{backgroundColor:i["color_"+n+"_background"]," .pe-textfield__label":{color:i["color_"+n+"_label_text"]}})]},j=function(e,t){return[S("",e,t,"light"),S(".pe-dark-theme ",e,t,"dark")]},O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},q=[k,j],z=".pe-search",P=function(e,t){return r.styler.generateStyles([e,z],O({},w,t),q)};r.styler.generateStyles([z],w,q);var I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},R={component:"pe-search",content:"pe-search__content",searchInset:"pe-search--inset",searchFullWidth:"pe-search--full-width"},W=function(e){return e.focus&&e.dirty?"focus_dirty":e.focus?"focus":e.dirty?"dirty":"none"},B=function(e){var r=e.state,l=e.attrs,d=l.element||"div",a=I({},n.filterSupportedAttributes(l),{class:[R.component,l.fullWidth?R.searchFullWidth:R.searchInset,l.class].join(" ")},l.events),o=W(r.searchState),_=(l.buttons||{})[o]||{},p=l.textfield||{},u=t("div",{class:R.content},[_.before,t(i,I({},p,{getState:function(e){r.searchState=I({},e),p.getState&&p.getState(r.searchState)}})),_.after]);return t(d,a,[l.before,u,l.after])},C={theme:P,oninit:function(e){e.state.searchState={}},view:B};e.default=C,e.classes=R,e.vars=w,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-search.js.map
