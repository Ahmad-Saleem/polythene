import { layout } from "polythene-css-selection-control";

export default (selector, componentVars) => [
  layout(selector, componentVars, "radio"),
  {
    " .pe-radio-group": {
      display: "flex"
    }
  }
];
