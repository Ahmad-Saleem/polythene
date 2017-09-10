import { StateComponent, renderer } from 'polythene-mithril-base';
import { Conditional } from 'polythene-core';
import { coreBaseSpinner, coreIOSSpinner, coreMaterialDesignProgressSpinner, coreMaterialDesignSpinner } from 'polythene-core-spinner';
import { Shadow } from 'polythene-mithril-shadow';

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var BaseSpinner = StateComponent(_extends$1({}, coreBaseSpinner, {
  createContent: function createContent(vnode, args) {
    return coreBaseSpinner.createContent(vnode, _extends$1(args, { Shadow: Shadow }));
  }
}));

BaseSpinner.displayName = "BaseSpinner";
BaseSpinner.classes = coreBaseSpinner.classes;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var SpinnerInstance = StateComponent(_extends({}, coreIOSSpinner, { component: BaseSpinner }));

var SpinnerToggle = StateComponent(Conditional);
SpinnerToggle.displayName = "SpinnerToggle";

var IOSSpinner = {
  view: function view(vnode) {
    return renderer(SpinnerToggle, _extends({}, vnode.attrs, {
      placeholderClassName: BaseSpinner.classes.placeholder,
      instance: SpinnerInstance
    }));
  }
};

IOSSpinner.classes = coreIOSSpinner.classes;
IOSSpinner.displayName = "IOSSpinner";

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var SpinnerInstance$1 = StateComponent(_extends$2({}, coreMaterialDesignSpinner, { component: BaseSpinner }));

var SpinnerToggle$1 = StateComponent(Conditional);
SpinnerToggle$1.displayName = "SpinnerToggle";

var MaterialDesignSpinner = {
  view: function view(vnode) {
    return renderer(SpinnerToggle$1, _extends$2({}, vnode.attrs, {
      placeholderClassName: BaseSpinner.classes.placeholder,
      instance: SpinnerInstance$1
    }));
  }
};

MaterialDesignSpinner.classes = coreMaterialDesignSpinner.classes;
MaterialDesignSpinner.displayName = "MaterialDesignSpinner";

var _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var SpinnerInstance$2 = StateComponent(_extends$3({}, coreMaterialDesignProgressSpinner, { component: BaseSpinner }));

var SpinnerToggle$2 = StateComponent(Conditional);
SpinnerToggle$2.displayName = "SpinnerToggle";

var MaterialDesignProgressSpinner = {
  view: function view(vnode) {
    return renderer(SpinnerToggle$2, _extends$3({}, vnode.attrs, {
      placeholderClassName: BaseSpinner.classes.placeholder,
      instance: SpinnerInstance$2
    }));
  }
};

MaterialDesignProgressSpinner.classes = coreMaterialDesignProgressSpinner.classes;
MaterialDesignProgressSpinner.displayName = "MaterialDesignProgressSpinner";

export { IOSSpinner, MaterialDesignSpinner, MaterialDesignProgressSpinner };
