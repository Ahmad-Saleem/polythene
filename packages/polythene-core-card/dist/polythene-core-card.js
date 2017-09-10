!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core"),require("polythene-theme"),require("polythene-core-css")):"function"==typeof define&&define.amd?define(["exports","polythene-core","polythene-theme","polythene-core-css"],t):t(e.polythene={},e["polythene-core"],e["polythene-theme"],e["polythene-core-css"])}(this,function(e,t,r,a){"use strict";var i={component:"pe-card",actions:"pe-card__actions",content:"pe-card__content",header:"pe-card__header",headerTitle:"pe-card__header-title",media:"pe-card__media",mediaDimmer:"pe-card__media__dimmer",overlay:"pe-card__overlay",overlayContent:"pe-card__overlay__content",primary:"pe-card__primary",primaryMedia:"pe-card__primary-media",subtitle:"pe-card__subtitle",text:"pe-card__text",title:"pe-card__title",actionsBordered:"pe-card__actions--borders",actionsHorizontal:"pe-card__actions--horizontal",actionsJustified:"pe-card__actions--justified",actionsTight:"pe-card__actions--tight",actionsVertical:"pe-card__actions--vertical",mediaCropX:"pe-card__media--crop-x",mediaCropY:"pe-card__media--crop-y",mediaLarge:"pe-card__media--large",mediaMedium:"pe-card__media--medium",mediaRatioLandscape:"pe-card__media--landscape",mediaRatioSquare:"pe-card__media--square",mediaRegular:"pe-card__media--regular",mediaSmall:"pe-card__media--small",overlaySheet:"pe-card__overlay--sheet",primaryHasMedia:"pe-card__primary--media",primaryTight:"pe-card__primary--tight",textTight:"pe-card__text--tight"},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n=function(e){var t=e.dispatcher,r=e.attrs,a=e.h,o=e.k,n=r.element||"div",l=r.content.map(t);return a("div",{key:r.key||"card-overlay",className:[i.overlay,r.sheet?i.overlaySheet:null,"light"===r.tone?null:"pe-dark-tone","light"===r.tone?"pe-light-tone":null].join(" ")},[a(n,{key:"content",className:[i.overlayContent,r.className||r[o.class]].join(" ")},l),a("div",{key:"dimmer",className:i.mediaDimmer})])},l=function(e){var t=e.attrs,r=e.h,a=e.k;return r(t.element||"div",{key:t.key||"card-text",className:[i.text,t.tight?i.textTight:null,t.className||t[a.class]].join(" ")},t.content)},c=function(e){var t=e.attrs,r=e.h,a=e.k,n=e.Icon;return r(e.ListTile,o({},t,{key:t.key||"card-header",className:[i.header,t.className||t[a.class]].join(" ")},t.icon?{front:r(n,t.icon)}:null))},s=function(e){return e.attrs.element||e.attrs.url?"a":"div"},d=function(e,r){var a=r.keys,n=e.attrs;return o({},t.filterSupportedAttributes(n),{className:[i.component,"dark"===n.tone?"pe-dark-tone":null,"light"===n.tone?"pe-light-tone":null,n.className||n[a.class]].join(" ")},n.url,n.events)},_=function(e,t){var r=t.renderer,a=t.keys,s=t.CardActions,d=t.CardMedia,_=t.CardPrimary,u=t.Icon,m=t.Shadow,p=t.ListTile,g=function e(t){var i=Object.keys(t)[0],m=o({},t[i],{dispatcher:e,key:i});switch(i){case"actions":return r(s,m);case"header":return c({dispatcher:e,attrs:m,h:r,k:a,Icon:u,ListTile:p});case"media":return r(d,m);case"overlay":return n({dispatcher:e,attrs:m,h:r,k:a});case"primary":return r(_,m);case"text":return l({dispatcher:e,attrs:m,h:r,k:a});default:throw'Content type "'+i+'" does not exist'}},h=e.attrs,y=Array.isArray(h.content)?h.content.map(g):h.content;return[r(m,{z:void 0!==h.z?h.z:1,animated:!0,key:"shadow"}),r("div",{className:i.content,key:"content"},y)]},u=Object.freeze({getElement:s,createProps:d,createContent:_}),m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},p={horizontal:i.actionsHorizontal,vertical:i.actionsVertical,justified:i.actionsJustified},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"horizontal";return p[e]},h=function(e,r){var a=r.keys,o=e.attrs;return m({},t.filterSupportedAttributes(o),{key:"card-actions",className:[i.actions,g(o.layout),o.bordered?i.actionsBordered:null,o.tight?i.actionsTight:null,o.className||o[a.class]].join(" ")})},y=function(e){return e.attrs.content},v=Object.freeze({createProps:h,createContent:y}),b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},f={landscape:16/9,square:1},k={small:i.mediaSmall,regular:i.mediaRegular,medium:i.mediaMedium,large:i.mediaLarge},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"regular";return k[e]},j=function(e){var t=e.dom,r=e.img,a=e.ratio,o=e.origin;r.onload=function(){var e=this.naturalWidth/this.naturalHeight,n=e<f[a]?i.mediaCropX:i.mediaCropY;r.className=n;var l=t.clientWidth,c=t.clientHeight;if(e<f[a])if("center"===o){var s=(c-l/e)/2;this.style.marginTop=s+"px"}else"start"===o?(this.style.top=0,this.style.bottom="auto"):(this.style.top="auto",this.style.bottom=0);else if("center"===o){var d=(l-c*e)/2;this.style.marginLeft=d+"px"}else"start"===o?(this.style.left=0,this.style.right="auto"):(this.style.left="auto",this.style.right=0)}},N=function(e){if(e.dom){var t=e.attrs,r=t.ratio||"landscape",a=t.origin||"center",i=e.dom,o=i.querySelector("img");j({dom:i,img:o,ratio:r,origin:a})}},O=function(e,r){var a=r.keys,o=e.attrs,n=o.ratio||"landscape";return b({},t.filterSupportedAttributes(o),{key:"card-media",className:[i.media,x(o.size),"landscape"===n?i.mediaRatioLandscape:i.mediaRatioSquare,o.className||o[a.class]].join(" ")})},C=function(e,t){var r=t.renderer,a=e.attrs,o=a.dispatcher;return[b({},a.content,{key:"content"}),a.overlay?o({overlay:a.overlay,key:"overlay"}):r("div",{className:i.mediaDimmer,key:"dimmer"})]},z=Object.freeze({onMount:N,createProps:O,createContent:C}),A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},S=function(e){var r=e.attrs,a=Array.isArray(r.content)?r.content.reduce(function(e,t){return"media"===Object.keys(t)[0]||e},!1):r.media||!1;return A({},t.filterSupportedAttributes(r),{key:"card-primary",className:[i.primary,r.tight?i.primaryTight:null,a?i.primaryHasMedia:null].join(" ")})},P=function(e,t){var r=t.renderer,a=e.attrs,o=a.dispatcher,n={title:function(e){return e.attrs||e.props?e||e.props:r("div",{className:i.title,key:"title"},[e.title,e.subtitle?r("div",{className:i.subtitle,key:"subtitle"},e.subtitle):null])},media:function(e){return r("div",{className:i.primaryMedia,key:"media"},o({media:e}))},actions:function(e){return o({actions:e})}};return Array.isArray(a.content)?a.content.map(function(e){var t=Object.keys(e)[0],r=e[t];return n[t]?n[t](r):e}):[a.title?n.title({title:a.title,subtitle:a.subtitle,key:"title"}):null,a.media?n.media(a.media):null,a.actions?n.actions(a.actions):null,a.content]},T=Object.freeze({createProps:S,createContent:P}),w={image_size_small:80,image_size_regular:112,image_size_medium:160,image_size_large:240,border_radius:r.vars.unit_block_border_radius,padding_h:16,offset_small_padding_v:8,padding_actions_h:8,title_padding_h:16,title_padding_v:24,tight_title_padding_bottom:16,text_padding_h:16,text_padding_v:16,text_padding_bottom:24,tight_text_padding_bottom:16,subtitle_line_height_padding_bottom:7,text_line_height_padding_top:6,text_line_height_padding_bottom:7,one_line_height_with_icon:72,icon_element_width:68,one_line_padding_v:8,actions_padding_v:2,actions_button_margin_v:2,actions_vertical_padding_v:6,color_light_main_background:a.rgba(r.vars.color_light_background),color_light_title_text:a.rgba(r.vars.color_light_foreground,r.vars.blend_light_text_primary),color_light_subtitle_text:a.rgba(r.vars.color_light_foreground,r.vars.blend_light_text_secondary),color_light_text:a.rgba(r.vars.color_light_foreground,r.vars.blend_light_text_regular),color_light_actions_border:a.rgba(r.vars.color_light_foreground,r.vars.blend_light_border_light),color_light_overlay_background:a.rgba(r.vars.color_light_background,r.vars.blend_light_overlay_background),color_dark_main_background:a.rgba(r.vars.color_dark_background),color_dark_title_text:a.rgba(r.vars.color_dark_foreground,r.vars.blend_dark_text_primary),color_dark_subtitle_text:a.rgba(r.vars.color_dark_foreground,r.vars.blend_dark_text_secondary),color_dark_text:a.rgba(r.vars.color_dark_foreground,r.vars.blend_dark_text_regular),color_dark_actions_border:a.rgba(r.vars.color_dark_foreground,r.vars.blend_dark_border_light),color_dark_overlay_background:a.rgba(r.vars.color_dark_background,r.vars.blend_dark_overlay_background)};e.coreCard=u,e.coreCardActions=v,e.coreCardMedia=z,e.coreCardPrimary=T,e.classes=i,e.vars=w,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-card.js.map
