'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

require('polythene/common/object.assign');

var _mithril = require('mithril');

var _mithril2 = _interopRequireDefault(_mithril);

require('polythene/selection-control/theme/theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CSS_CLASSES = {
    block: 'pe-control',
    label: 'pe-control__label',
    input: 'pe-control__input',
    box: 'pe-control__box',
    on: 'pe-control--on',
    off: 'pe-control--off',
    disabled: 'pe-control--disabled',
    small: 'pe-control--small',
    regular: 'pe-control--regular',
    medium: 'pe-control--medium',
    large: 'pe-control--large'
};

var typeClasses = {
    small: CSS_CLASSES.small,
    regular: CSS_CLASSES.regular,
    medium: CSS_CLASSES.medium,
    large: CSS_CLASSES.large
};

var classForType = function classForType() {
    var mode = arguments.length <= 0 || arguments[0] === undefined ? 'regular' : arguments[0];

    return typeClasses[mode];
};

var createView = function createView(ctrl) {
    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (typeof opts.checked === 'function') {
        ctrl.setChecked(opts.checked());
    }

    var checked = ctrl.checked();
    var tag = opts.tag || 'div';
    var name = opts.name || '';
    var props = {
        class: [CSS_CLASSES.block, opts.defaultClass, checked ? CSS_CLASSES.on : CSS_CLASSES.off, opts.disabled ? CSS_CLASSES.disabled : null, classForType(opts.size), opts.class].join(' '),
        id: opts.id || '',
        config: function config(el, inited, context, vdom) {
            if (inited) {
                return;
            }
            if (opts.config) {
                opts.config(el, inited, context, vdom);
            }
        }
    };
    var content = [(0, _mithril2.default)('input', {
        class: CSS_CLASSES.input,
        name: name,
        value: ctrl.value(),
        type: opts.type, // set by checkbox / radio-button
        checked: checked,
        config: function config(el, inited) {
            if (inited) return;
            ctrl.setInputEl(el);
        }
    }), (0, _mithril2.default)('label', Object.assign({
        class: CSS_CLASSES.label
    }, !opts.disabled ? {
        onclick: function onclick() {
            if (opts.type === 'radio' && checked) {
                return;
            }
            ctrl.toggle();
        }
    } : null), [opts.selectionView ? opts.selectionView(checked, opts) : null, opts.label ? (0, _mithril2.default)('span', opts.label) : null])];
    return (0, _mithril2.default)(tag, props, [opts.before, content, opts.after]);
};

var component = {
    controller: function controller() {
        var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        // Because this module also supports radio buttons (paired control elements)
        // we won't keep a separate 'checked' value but instead keep the checked value
        // as a HTMLElement checked state.
        var defaultChecked = false;
        var _value = opts.value || '1';
        var inputEl = undefined;

        var setInputElChecked = function setInputElChecked(isChecked) {
            if (inputEl) {
                inputEl.checked = isChecked;
            }
        };

        var getOptsChecked = function getOptsChecked() {
            if (typeof opts.checked === 'function') {
                var v = opts.checked();
                return v !== undefined ? v : defaultChecked;
            } else {
                return opts.checked !== undefined ? opts.checked : defaultChecked;
            }
        };

        var setInputEl = function setInputEl(el) {
            inputEl = el;
            setInputElChecked(getOptsChecked());
        };

        var setChecked = function setChecked(isChecked) {
            setInputElChecked(isChecked);
            if (opts.getState) {
                opts.getState({
                    checked: inputEl ? inputEl.checked : getOptsChecked(),
                    value: _value,
                    el: inputEl
                });
            }
        };

        var toggle = function toggle() {
            setChecked(!inputEl.checked);
        };

        return {
            setInputEl: setInputEl,
            setChecked: setChecked,
            checked: function checked() {
                return inputEl ? inputEl.checked : getOptsChecked();
            },
            toggle: toggle,
            value: function value() {
                return _value;
            }
        };
    },
    view: function view(ctrl) {
        var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        return createView(ctrl, opts);
    }
};

exports.default = component;
module.exports = exports['default'];

//# sourceMappingURL=selection-control.js.map