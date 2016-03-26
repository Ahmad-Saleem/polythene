'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _flex = require('polythene/layout/theme/flex');

var _flex2 = _interopRequireDefault(_flex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = [{
    '.layout, .layout.horizontal, .flex.vertical': _flex2.default.layout,
    '.layout.horizontal.inline, .layout.vertical.inline': _flex2.default.layoutInline,
    '.layout.horizontal': _flex2.default.layoutHorizontal,
    '.layout.horizontal.reverse': _flex2.default.layoutHorizontalReverse,
    '.layout.vertical': _flex2.default.layoutVertical,
    '.layout.vertical.reverse': _flex2.default.layoutVerticalReverse,
    '.layout.wrap': _flex2.default.layoutWrap,
    '.layout.wrap.reverse': _flex2.default.layoutWrapReverse,
    '.flex': _flex2.default.flex(1),
    '.span.flex': {
        'display': 'block' // for IE 10
    },
    '.vertical.layout > .flex.auto-vertical': _flex2.default.flexAutoVertical,
    '.flex.auto': _flex2.default.flexAuto,
    '.flex.none': _flex2.default.flexIndex('none'),
    '.flex.one': _flex2.default.flexIndex(1),
    '.flex.two': _flex2.default.flexIndex(2),
    '.flex.three': _flex2.default.flexIndex(3),
    '.flex.four': _flex2.default.flexIndex(4),
    '.flex.five': _flex2.default.flexIndex(5),
    '.flex.six': _flex2.default.flexIndex(6),
    '.flex.seven': _flex2.default.flexIndex(7),
    '.flex.eight': _flex2.default.flexIndex(8),
    '.flex.nine': _flex2.default.flexIndex(9),
    '.flex.ten': _flex2.default.flexIndex(10),
    '.flex.eleven': _flex2.default.flexIndex(11),
    '.flex.twelve': _flex2.default.flexIndex(12),

    // alignment in cross axis
    '.layout.start': _flex2.default.layoutStart,
    '.layout.center, .layout.center-center': _flex2.default.layoutCenter,
    '.layout.end': _flex2.default.layoutEnd,

    // alignment in main axis
    '.layout.start-justified': _flex2.default.layoutStartJustified,
    '.layout.center-justified, .layout.center-center': _flex2.default.layoutCenterJustified,
    '.layout.end-justified': _flex2.default.layoutEndJustified,
    '.layout.around-justified': _flex2.default.layoutAroundJustified,
    '.layout.justified': _flex2.default.layoutJustified,

    // self alignment
    '.self-start': _flex2.default.selfStart,
    '.self-center': _flex2.default.selfCenter,
    '.self-end': _flex2.default.selfEnd,
    '.self-stretch': _flex2.default.selfStretch
}];

exports.default = styles;
module.exports = exports['default'];

//# sourceMappingURL=flex-style.js.map