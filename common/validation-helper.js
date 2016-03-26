'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (opts) {
    var elProp = opts.element || 'el';
    var invalidProp = opts.invalid || 'invalid';

    var fieldStates = [];

    var submit = function submit(e, onValidated) {
        e.preventDefault();
        var firstInvalidIndex = getInvalidIndex();
        if (firstInvalidIndex !== undefined) {
            if (fieldStates[firstInvalidIndex][elProp]) {
                fieldStates[firstInvalidIndex][elProp].focus();
            }
        } else {
            onValidated(e);
        }
    };

    var getIndex = function getIndex(el) {
        for (var i = 0; i < fieldStates.length; i++) {
            if (fieldStates[i][elProp] === el) {
                return i;
            }
        }
    };

    var getInvalidIndex = function getInvalidIndex() {
        for (var i = 0; i < fieldStates.length; i++) {
            if (fieldStates[i][invalidProp]) {
                return i;
            }
        }
    };

    var update = function update(state) {
        var index = getIndex(state[elProp]);
        if (index === undefined) {
            fieldStates.push(state);
        } else {
            fieldStates[index] = state;
        }
    };

    return {
        submit: submit,
        update: update
    };
};

module.exports = exports['default'];

//# sourceMappingURL=validation-helper.js.map