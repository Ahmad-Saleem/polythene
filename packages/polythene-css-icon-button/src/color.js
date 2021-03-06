import { noTouchStyle as buttonNoTouchStyle } from "polythene-css-button";

const style = (scopes, selector, componentVars, tint) => [{
  [scopes.map(s => s + selector).join(",")]: {

    "&, .pe-icon-button__label": {
      color: componentVars["color_" + tint],
    },

    " .pe-icon-button__content": { 
      backgroundColor: componentVars["color_" + tint + "_background"] || componentVars["color_background"],
    },
    
    " .pe-button__wash": {
      opacity: componentVars["color_" + tint + "_wash_opacity"]
    },

    ".pe-button--focus, &.pe-button--selected": {
      " .pe-button__focus": {
        opacity: componentVars["color_" + tint + "_focus_opacity"],
        backgroundColor: "currentcolor"
      }
    },

    ".pe-button--disabled": {
      " .pe-button__content, .pe-icon-button__label": {
        color: componentVars["color_" + tint + "_disabled"]
      }
    }
  }
}];

export const noTouchStyle = (scopes, selector, componentVars, tint) =>
  buttonNoTouchStyle(scopes, selector, componentVars, tint)
    .concat([{
      [[].concat(scopes.map(s => s + selector + ":hover").join(",")).concat(scopes.map(s => s + selector + ":active").join(","))]: {
        ":not(.pe-button--selected):not(.pe-button--inactive)": {
          " .pe-icon-button__label": {
            color: componentVars["color_" + tint + "_label_hover"]
          },
        }
      }
    }]);

export default (selector, componentVars) => [
  style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark tone
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light"), // normal, has/inside light tone
  noTouchStyle(["html.pe-no-touch .pe-dark-tone "], selector, componentVars, "dark"), // inside dark tone
  noTouchStyle(["html.pe-no-touch ", "html.pe-no-touch .pe-light-tone "], selector, componentVars, "light"),
];
