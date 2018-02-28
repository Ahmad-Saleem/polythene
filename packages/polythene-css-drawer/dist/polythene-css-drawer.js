(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-css'), require('polythene-core-drawer'), require('polythene-theme')) :
	typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-css', 'polythene-core-drawer', 'polythene-theme'], factory) :
	(factory((global.polythene = {}),global['polythene-core-css'],global['polythene-core-drawer'],global['polythene-theme']));
}(this, (function (exports,polytheneCoreCss,polytheneCoreDrawer,polytheneTheme) { 'use strict';

var classes = {
  component: "pe-dialog pe-drawer",

  // states
  cover: "pe-drawer--cover",
  push: "pe-drawer--push",
  mini: "pe-drawer--mini",
  permanent: "pe-drawer--permanent",
  bordered: "pe-drawer--bordered",
  floating: "pe-drawer--floating",
  fixed: "pe-drawer--fixed"
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SHADOW_WIDTH = 15;

var layout = (function (selector, componentVars) {
  var _ref2;

  return [(_ref2 = {}, _defineProperty(_ref2, selector, {
    justifyContent: "flex-start",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    height: "100%",
    padding: 0,
    opacity: 1,

    " .pe-dialog__content": [polytheneCoreCss.mixin.defaultTransition("all"), // animation duration is set in component options
    {
      position: "relative",
      borderRadius: 0,
      height: "100%",
      overflow: "visible"
    }],

    " .pe-dialog-pane__content": {
      height: "100%",
      overflowY: "auto",
      overflowX: "hidden"
    },

    " .pe-dialog-pane": {
      height: "100%",
      minWidth: 0 // IE 11 does not accept "none" or "inital" here
    },

    " .pe-dialog-pane__body": {
      overflow: "visible"
    },

    // Fixed
    ".pe-drawer--fixed": {
      position: "fixed",
      top: 0,
      left: 0, // reverse for RTL - see below
      right: "auto",
      width: "100%",
      zIndex: polytheneTheme.vars.z_app_bar
    },

    // Permanent
    ".pe-drawer--permanent:not(.pe-drawer--mini)": {
      position: "static",
      display: "block",
      padding: 0,
      overflow: "initial",

      " .pe-dialog__content": {
        width: componentVars.permanent_content_width + "px",
        overflow: "visible",
        maxHeight: "initial"
      }
    },

    // Floating
    ".pe-drawer--floating": {
      height: "auto"
    },

    // Bordered
    ".pe-drawer--bordered": {
      " .pe-dialog__content": {
        borderWidth: "1px",
        borderStyle: "none solid none none" // reverse for RTL - see below
      }
    },

    // Cover (default)
    ".pe-drawer--cover": {
      " .pe-dialog__content": {
        width: "calc(100% - " + componentVars.content_side_offset + "px)",
        maxWidth: componentVars.content_max_width + "px",
        left: "calc(-" + componentVars.content_max_width + "px - " + SHADOW_WIDTH + "px)", // reverse for RTL - see below
        right: "auto"
      }
    },
    ".pe-drawer--cover.pe-dialog--visible .pe-dialog__content": {
      left: 0, // reverse for RTL - see below
      right: "auto"
    },

    // Push
    ".pe-drawer--push": {
      position: "static",

      " .pe-dialog__content": {
        width: componentVars.permanent_content_width + "px",
        marginLeft: -componentVars.permanent_content_width - SHADOW_WIDTH + "px", // reverse for RTL - see below
        marginRight: "auto"
      }
    },
    ".pe-drawer--push.pe-dialog--visible .pe-dialog__content": {
      marginLeft: 0, // reverse for RTL - see below
      marginRight: "auto"
    },

    // Mini
    ".pe-drawer--mini:not(.pe-dialog--visible) .pe-dialog__content": {
      width: componentVars.content_width_mini_collapsed + "px",
      marginLeft: 0,
      marginRight: 0
    },

    // Backdrop
    " .pe-dialog__backdrop, .pe-dialog__touch": {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    },
    " .pe-dialog__backdrop": [polytheneCoreCss.mixin.defaultTransition("all"), // animation duration is set in component options
    {
      opacity: 0
    }],
    ".pe-dialog--visible .pe-dialog__backdrop": {
      opacity: 1
    }
  }), _defineProperty(_ref2, "*[dir=rtl], .pe-rtl ", _defineProperty({}, selector, {
    ".pe-drawer--bordered .pe-dialog__content": {
      borderStyle: "none none none solid"
    },

    // Fixed
    ".pe-drawer--fixed": {
      left: "auto",
      right: 0
    },

    // Cover
    ".pe-drawer--cover": {
      " .pe-dialog__content": {
        right: "calc(-" + componentVars.content_max_width + "px - " + SHADOW_WIDTH + "px)",
        left: "auto"
      }
    },
    ".pe-drawer--cover.pe-dialog--visible .pe-dialog__content": {
      right: 0,
      left: "auto"
    },

    // Push
    ".pe-drawer--push": {
      " .pe-dialog__content": {
        marginRight: -componentVars.permanent_content_width - SHADOW_WIDTH + "px",
        marginLeft: "auto"
      }
    },
    ".pe-drawer--push.pe-dialog--visible .pe-dialog__content": {
      marginRight: 0,
      marginLeft: "auto"
    },

    // Mini
    ".pe-drawer--mini:not(.pe-dialog--visible) .pe-dialog__content": {
      marginLeft: 0,
      marginRight: 0
    }

  })), _defineProperty(_ref2, "@media (min-width: " + polytheneTheme.vars.breakpoint_for_tablet_portrait_up + "px)", _defineProperty({}, selector, {
    ".pe-drawer--push": {
      " .pe-dialog__content": {
        maxWidth: componentVars.content_max_width_large + "px"
      }
    },
    " .pe-dialog__content": {
      width: "calc(100% - " + componentVars.content_side_offset_large + "px)",
      maxWidth: componentVars.content_max_width_large + "px"
    }
  })), _ref2)];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty$1({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    " .pe-dialog__content": {
      backgroundColor: componentVars["color_" + tint + "_background"],
      borderColor: componentVars["color_" + tint + "_border"]
    },
    " .pe-dialog__backdrop": {
      backgroundColor: componentVars["color_" + tint + "_backdrop_background"]
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark tone
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light")];
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = "." + classes.component.replace(/ /g, ".");

var addStyle = function addStyle(customSelector, customVars) {
  return polytheneCoreCss.styler.generateStyles([customSelector, selector], _extends({}, polytheneCoreDrawer.vars, customVars), fns);
};

var getStyle = function getStyle(customSelector, customVars) {
  return customSelector ? polytheneCoreCss.styler.createStyleSheets([customSelector, selector], _extends({}, polytheneCoreDrawer.vars, customVars), fns) : polytheneCoreCss.styler.createStyleSheets([selector], polytheneCoreDrawer.vars, fns);
};

polytheneCoreCss.styler.generateStyles([selector], polytheneCoreDrawer.vars, fns);

exports.addStyle = addStyle;
exports.getStyle = getStyle;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-drawer.js.map
