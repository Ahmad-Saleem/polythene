"use strict";Object.defineProperty(exports,"__esModule",{value:true});require("polythene/common/object.assign");var _polythene=require("polythene/polythene/polythene");var _polythene2=_interopRequireDefault(_polythene);var _mithril=require("mithril");var _mithril2=_interopRequireDefault(_mithril);var _dialog=require("polythene/dialog/dialog");var _dialog2=_interopRequireDefault(_dialog);var _transition=require("polythene/common/transition");var _transition2=_interopRequireDefault(_transition);var _shadow=require("polythene/shadow/shadow");var _shadow2=_interopRequireDefault(_shadow);require("polythene/dialog/theme/theme");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var CSS_CLASSES={block:"pe-dialog",visible:"pe-dialog--visible",body:"pe-dialog__body",fullscreen:"pe-dialog--fullscreen",content:"pe-dialog__content",header:"pe-dialog__header",footer:"pe-dialog__footer",footerHigh:"pe-dialog__footer--high",title:"pe-dialog__title",actions:"pe-dialog__actions",hasBackdrop:"pe-dialog--backdrop",hasTopOverflow:"pe-dialog--overflow-top",hasBottomOverflow:"pe-dialog--overflow-bottom",menuContent:"pe-menu__content"};var SCROLL_WATCH_TIMER=150;var updateScrollState=function updateScrollState(ctrl){var scroller=ctrl.scrollEl;if(!scroller){return}ctrl.topOverflow=scroller.scrollTop>0;ctrl.bottomOverflow=scroller.scrollHeight-(scroller.scrollTop+scroller.getBoundingClientRect().height)>0};var updateFooterState=function updateFooterState(ctrl){var footerEl=ctrl.footerEl;if(footerEl){var style=window.getComputedStyle(footerEl);var height=footerEl.getBoundingClientRect().height;var minHeight=parseInt(style.minHeight,10);if(height>minHeight){footerEl.classList.add(CSS_CLASSES.footerHigh)}else{footerEl.classList.remove(CSS_CLASSES.footerHigh)}}};var show=function show(ctrl,opts){var id=ctrl.instanceId;ctrl.isTransitioning=true;return _transition2.default.show(Object.assign({},opts,{el:ctrl.el,showClass:CSS_CLASSES.visible})).then(function(){ctrl.isTransitioning=false;ctrl.visible=true;_dialog2.default.setVisibleState(true,id);if(opts.didShow){opts.didShow(id)}})};var hide=function hide(ctrl,opts){var id=ctrl.instanceId;ctrl.isTransitioning=true;return _transition2.default.hide(Object.assign({},opts,{el:ctrl.el,showClass:CSS_CLASSES.visible})).then(function(){_dialog2.default.remove(id);ctrl.isTransitioning=false;ctrl.visible=false;_dialog2.default.setVisibleState(false,id);if(opts.didHide){opts.didHide(id)}setTimeout(_mithril2.default.redraw,0)})};var createViewContent=function createViewContent(ctrl,opts){var style={};var bodyOpts=opts.body||opts.menu;return(0,_mithril2.default)("div",{"class":CSS_CLASSES.body,style:style,config:function config(el,inited){if(inited){return}ctrl.scrollEl=el},onscroll:function onscroll(){ctrl.isScrolling=true;updateScrollState(ctrl);clearTimeout(ctrl.scrollWatchId);ctrl.scrollWatchId=setTimeout(function(){ctrl.isScrolling=false},SCROLL_WATCH_TIMER)}},bodyOpts)};var createView=function createView(ctrl){var opts=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];var bodyOpts=opts.body||opts.menu;var updateContentOnScroll=opts.updateContentOnScroll||false;var ignoreContent=!updateContentOnScroll&&ctrl.isScrolling;var tag=opts.tag||"form";var update=function update(){updateScrollState(ctrl);updateFooterState(ctrl);_mithril2.default.redraw()};var props=Object.assign({},{"class":[CSS_CLASSES.block,opts.fullscreen?CSS_CLASSES.fullscreen:null,opts.backdrop?CSS_CLASSES.hasBackdrop:null,ctrl.topOverflow||opts.borders?CSS_CLASSES.hasTopOverflow:null,ctrl.bottomOverflow||opts.borders?CSS_CLASSES.hasBottomOverflow:null,ctrl.visible?CSS_CLASSES.visible:null,opts.class].join(" "),id:opts.id||"",config:function config(el,inited,context,vdom){if(inited){return}if(opts.config){opts.config(el,inited,context,vdom)}ctrl.el=el;var cleanup=function cleanup(){_polythene2.default.removeListener("resize",update);_polythene2.default.removeListener("keydown",handleEscape)};var handleEscape=function handleEscape(e){if(opts.fullscreen||opts.backdrop)return;if(e.which===27){cleanup();hide(ctrl,Object.assign({},opts,{hideDelay:0}))}};_polythene2.default.addListener("resize",update);_polythene2.default.addListener("keydown",handleEscape);context.onunload=function(){cleanup()};updateScrollState(ctrl);updateFooterState(ctrl);if(!ctrl.visible){show(ctrl,opts).then(function(){updateScrollState(ctrl);updateFooterState(ctrl);if(ctrl.topOverflow||ctrl.bottomOverflow){setTimeout(_mithril2.default.redraw,0)}})}},onclick:function onclick(e){if(e.target!==ctrl.el){return}if(opts.modal){return}if(!ctrl.isTransitioning){hide(ctrl,Object.assign({},opts,{hideDelay:0}))}}},opts.formOptions?opts.formOptions:null);var body=bodyOpts?ignoreContent?{subtree:"retain"}:createViewContent(ctrl,opts):null;var content=(0,_mithril2.default)("div",{"class":[CSS_CLASSES.content,opts.menu?CSS_CLASSES.menuContent:null].join(" ")},[opts.fullscreen?null:_mithril2.default.component(_shadow2.default,{z:ctrl.z,animated:true}),opts.fullscreen?null:opts.title?(0,_mithril2.default)("div",{"class":CSS_CLASSES.header,config:function config(el){ctrl.headerHeight=el.scrollHeight}},[(0,_mithril2.default)("div",{"class":CSS_CLASSES.title},opts.title)]):null,body,opts.fullscreen?null:opts.footer?(0,_mithril2.default)("div",{"class":CSS_CLASSES.footer,config:function config(el,inited){ctrl.footerHeight=el.scrollHeight;if(inited){return}ctrl.footerEl=el}},[(0,_mithril2.default)("div",{"class":CSS_CLASSES.actions},opts.footer)]):null]);return(0,_mithril2.default)(tag,props,[opts.before,content,opts.after])};var component={controller:function controller(){var instanceData=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];var opts=instanceData.opts||{};var z=opts.z!==undefined?opts.z:3;return{instanceId:instanceData.instanceId,z:z,scrollEl:null,footerEl:null,topOverflow:false,bottomOverflow:false,scrollWatchId:0,isScrolling:false,headerHeight:0,footerHeight:0,el:null,visible:instanceData.visible||false,isTransitioning:false}},view:function view(ctrl,instanceData){var opts=typeof instanceData.opts==="function"?instanceData.opts():instanceData.opts;if(instanceData.hide&&!ctrl.isTransitioning){hide(ctrl,opts)}return createView(ctrl,opts)}};exports.default=component;module.exports=exports["default"];