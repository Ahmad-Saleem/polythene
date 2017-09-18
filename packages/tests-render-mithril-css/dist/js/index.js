/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getAnimationEndEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Conditional; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return filterSupportedAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return unpackAttrs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return isClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return isServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return isTouch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return pointerStartEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return pointerEndEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return pointerStartMoveEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return pointerMoveEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return pointerEndMoveEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Multi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return show; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return hide; });
/* unused harmony export throttle */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return subscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return unsubscribe; });
/* unused harmony export emit */
var isClient = typeof document !== "undefined";
var isServer = !isClient;

var evts = {
  "animation": "animationend",
  "OAnimation": "oAnimationEnd",
  "MozAnimation": "animationend",
  "WebkitAnimation": "webkitAnimationEnd"
};

var getAnimationEndEvent = function getAnimationEndEvent() {
  if (isClient) {
    var el = document.createElement("fakeelement");
    for (var a in evts) {
      if (el.style[a] !== undefined) {
        return evts[a];
      }
    }
  }
};

var Conditional = {
  view: function view(vnode, _ref) {
    var h = _ref.renderer;

    var attrs = vnode.attrs;
    return attrs.permanent || attrs.show ? h(attrs.instance, attrs) : h("span", { className: attrs.placeholderClassName });
  }
};

Conditional.displayName = "Conditional";

var r = function r(acc, p) {
  return acc[p] = 1, acc;
};

/* 
Separately handled props:
- class
- element
*/

var defaultAttrs = [
// Universal
"key", "style", "href", "id",

// React
"tabIndex",

// Mithril
"tabindex", "oninit", "oncreate", "onupdate", "onbeforeremove", "onremove", "onbeforeupdate"];

var filterSupportedAttributes = function filterSupportedAttributes(attrs) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$add = _ref.add,
      addAttrs = _ref$add === undefined ? [] : _ref$add,
      _ref$remove = _ref.remove,
      removeAttrs = _ref$remove === undefined ? [] : _ref$remove;

  var removeLookup = removeAttrs.reduce(r, {});
  var supported = defaultAttrs.concat(addAttrs).filter(function (item) {
    return !removeLookup[item];
  }).reduce(r, {});
  return Object.keys(attrs).reduce(function (acc, key) {
    return supported[key] ? acc[key] = attrs[key] : null, acc;
  }, {});
};

var unpackAttrs = function unpackAttrs(attrs) {
  return typeof attrs === "function" ? attrs() : attrs;
};

var isTouch = isServer ? false : "ontouchstart" in document.documentElement;

var pointerStartEvent = isTouch ? "click" : "mousedown";

var pointerEndEvent = isTouch ? "click" : "mouseup";

var pointerStartMoveEvent = isTouch ? "touchstart" : "mousedown";

var pointerMoveEvent = isTouch ? "touchmove" : "mousemove";

var pointerEndMoveEvent = isTouch ? "touchend" : "mouseup";

if (isClient) {
  document.querySelector("html").classList.add(isTouch ? "pe-touch" : "pe-no-touch");
}

var listeners = {};

// https://gist.github.com/Eartz/fe651f2fadcc11444549
var throttle = function throttle(func) {
  var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.05;
  var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : isClient ? window : {};

  var wait = false;
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var later = function later() {
      return func.apply(context, args);
    };
    if (!wait) {
      later();
      wait = true;
      setTimeout(function () {
        return wait = false;
      }, s);
    }
  };
};

var subscribe = function subscribe(eventName, listener, delay) {
  listeners[eventName] = listeners[eventName] || [];
  listeners[eventName].push(delay ? throttle(listener, delay) : listener);
};

var unsubscribe = function unsubscribe(eventName, listener) {
  if (!listeners[eventName]) {
    return;
  }
  var index = listeners[eventName].indexOf(listener);
  if (index > -1) {
    listeners[eventName].splice(index, 1);
  }
};

var emit = function emit(eventName, event) {
  if (!listeners[eventName]) {
    return;
  }
  listeners[eventName].forEach(function (listener) {
    return listener(event);
  });
};

if (isClient) {
  window.addEventListener("resize", function (e) {
    return emit("resize", e);
  });
  window.addEventListener("scroll", function (e) {
    return emit("scroll", e);
  });
  window.addEventListener("keydown", function (e) {
    return emit("keydown", e);
  });
  window.addEventListener(pointerEndEvent, function (e) {
    return emit(pointerEndEvent, e);
  });
}

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/*
Helper module to manage multiple items of the same component type.
*/

var Multi = function Multi(_ref) {
  var mOptions = _ref.options,
      renderer = _ref.renderer;


  var items = []; // This is shared between all instances of a type (Dialog, Notification, ...)
  var current = void 0;

  var getInitialState = function getInitialState(vnode, createStream) {
    current = createStream();
    return {
      current: current,
      redrawOnUpdate: createStream.merge([current])
    };
  };

  /*
  @param e: { id, eventName }
  */
  var onChange = function onChange(e) {
    if (!current) {
      console.error("Cannot set state. Did you set a root element like Dialog to show instances?"); // eslint-disable-line no-console
    }
    current(e.id);
    emit(mOptions.name, e);
  };

  var itemIndex = function itemIndex(id) {
    var item = findItem(id);
    return items.indexOf(item);
  };

  var removeItem = function removeItem(id) {
    var index = itemIndex(id);
    if (index !== -1) {
      items.splice(index, 1);
      onChange({ id: id, name: "removeItem" });
    }
  };

  var replaceItem = function replaceItem(id, newItem) {
    var index = itemIndex(id);
    if (index !== -1) {
      items[index] = newItem;
    }
  };

  var findItem = function findItem(id) {
    // traditional for loop for IE10
    for (var i = 0; i < items.length; i++) {
      if (items[i].instanceId === id) {
        return items[i];
      }
    }
  };

  var next = function next() {
    if (items.length) {
      items[0].show = true;
    }
    onChange({ id: items.length ? items[0].instanceId : null, name: "next" });
  };

  var remove = function remove() {
    var instanceId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mOptions.defaultId;

    if (mOptions.queue) {
      items.shift();
      next();
    } else {
      removeItem(instanceId);
    }
  };

  var removeAll = function removeAll() {
    items.length = 0;
    onChange({ id: null, name: "removeAll" });
  };

  var setPauseState = function setPauseState(pause, instanceId) {
    var item = findItem(instanceId);
    if (item) {
      item.pause = pause;
      item.unpause = !pause;
      onChange({ id: instanceId, name: pause ? "pause" : "unpause" });
    }
  };

  var makeItem = function makeItem(itemAttrs, instanceId, spawn) {
    var resolveShow = void 0;
    var resolveHide = void 0;
    var attrs = unpackAttrs(itemAttrs);

    var didShow = function didShow() {
      if (attrs.didShow) {
        attrs.didShow(instanceId);
      }
      onChange({ id: instanceId, name: "didShow" });
      return resolveShow(instanceId);
    };
    var showPromise = new Promise(function (resolve) {
      return resolveShow = resolve;
    });

    var didHide = function didHide() {
      if (attrs.didHide) {
        attrs.didHide(instanceId);
      }
      onChange({ id: instanceId, name: "didHide" });
      remove(instanceId);
      return resolveHide(instanceId);
    };

    var hidePromise = new Promise(function (resolve) {
      return resolveHide = resolve;
    });

    return _extends({}, mOptions, {
      instanceId: instanceId,
      spawn: spawn,
      attrs: itemAttrs,
      show: mOptions.queue ? false : true,
      showPromise: showPromise,
      hidePromise: hidePromise,
      didShow: didShow,
      didHide: didHide
    });
  };

  var count = function count() {
    return items.length;
  };
  var pause = function pause() {
    var instanceId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mOptions.defaultId;
    return setPauseState(true, instanceId);
  };
  var unpause = function unpause() {
    var instanceId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mOptions.defaultId;
    return setPauseState(false, instanceId);
  };

  var show = function show() {
    var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var spawnOpts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var instanceId = spawnOpts.id || mOptions.defaultId;
    var spawn = spawnOpts.spawn || mOptions.defaultId;
    var item = makeItem(attrs, instanceId, spawn);
    onChange({ id: instanceId, name: "show" });
    if (mOptions.queue) {
      items.push(item);
      if (items.length === 1) {
        next();
      }
    } else {
      var storedItem = findItem(instanceId);
      if (!storedItem) {
        items.push(item);
      } else {
        replaceItem(instanceId, item);
      }
    }
    return item.showPromise;
  };

  var hide = function hide() {
    var spawnOpts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var instanceId = spawnOpts.id || mOptions.defaultId;
    var item = mOptions.queue && items.length ? items[0] : findItem(instanceId);
    if (item) {
      item.hide = true;
    }
    onChange({ id: instanceId, name: "hide" });
    return item ? item.hidePromise : Promise.resolve(instanceId);
  };

  var clear = removeAll;

  var view = function view(_ref2) {
    var attrs = _ref2.attrs;

    var spawn = attrs.spawn || mOptions.defaultId;
    var candidates = items.filter(function (item) {
      return item.show && item.spawn === spawn;
    });
    if (mOptions.bodyShowClass && isClient) {
      document.body.classList[candidates.length ? "add" : "remove"](mOptions.bodyShowClass);
    }
    return !candidates.length ? renderer(mOptions.placeholder) // placeholder because we cannot return null
    : renderer(mOptions.holderSelector, {
      className: attrs.position === "container" ? "pe-multiple--container" : "pe-multiple--screen"
    }, candidates.map(function (itemData) {
      return renderer(mOptions.instance, _extends({}, {
        key: itemData.key,
        instanceId: itemData.instanceId,
        transitions: mOptions.transitions,
        holderSelector: mOptions.holderSelector,
        className: mOptions.className,
        showInstance: itemData.show,
        hideInstance: itemData.hide,
        pauseInstance: itemData.pause,
        unpauseInstance: itemData.unpause,
        multipleDidShow: itemData.didShow,
        multipleDidHide: itemData.didHide,
        multipleClear: clear
      }, unpackAttrs(itemData.attrs)));
    }));
  };

  return {
    clear: clear,
    count: count,
    getInitialState: getInitialState,
    hide: hide,
    pause: pause,
    remove: remove,
    show: show,
    unpause: unpause,
    view: view
  };
};

Multi.displayName = "Multi";

/*
Generic show/hide transition module
*/

// defaults
var SHOW_DURATION = .220; // default dialog timing
var HIDE_DURATION = .200; // default dialog timing
var SHOW_DELAY = 0;
var HIDE_DELAY = 0;
var TRANSITION = "both";

// See: transition
var show = function show(opts) {
  return transition(opts, "show");
};

var hide = function hide(opts) {
  return transition(opts, "hide");
};

var getTiming = function getTiming(opts, state, showAttr, hideAttr, defaultShowTiming, defaultHideTiming) {
  var transition = opts.transition || TRANSITION;
  if (transition === "none") {
    return 0;
  } else if (transition === "show" && state === "hide") {
    return 0;
  } else if (transition === "hide" && state === "show") {
    return 0;
  } else {
    // both
    return state === "show" ? opts[showAttr] !== undefined ? opts[showAttr] : defaultShowTiming : opts[hideAttr] !== undefined ? opts[hideAttr] : defaultHideTiming;
  }
};

/*
opts:
- transition
- showDuration
- hideDuration

- state (show, hide)
*/
var getDuration = function getDuration(opts, state) {
  return getTiming(opts, state, "showDuration", "hideDuration", SHOW_DURATION, HIDE_DURATION);
};

/*
opts:
- transition (show, hide, both)
- showDelay
- hideDelay

- state (show, hide)
*/
var getDelay = function getDelay(opts, state) {
  return getTiming(opts, state, "showDelay", "hideDelay", SHOW_DELAY, HIDE_DELAY);
};

/*
opts:
- el
- duration
- delay
- showClass
- beforeShow
- show
- hide
- afterHide
- showDelay
- hideDelay

- state (show, hide)
*/
var transition = function transition(opts, state) {
  var el = opts.el;
  if (!el) {
    return Promise.resolve();
  } else {
    return new Promise(function (resolve) {
      var transitionDuration = getDuration(opts, state) * 1000;
      var delay = getDelay(opts, state) * 1000;
      var style = el.style;
      var beforeTransition = opts.beforeShow && state === "show" ? function () {
        style.transitionDuration = "0ms";
        style.transitionDelay = "0ms";
        opts.beforeShow();
      } : null;

      var afterTransition = opts.afterHide && state === "hide" ? function () {
        return opts.afterHide();
      } : null;

      var applyTransition = function applyTransition() {
        style.transitionDuration = transitionDuration + "ms";
        style.transitionDelay = delay + "ms";
        if (opts.showClass) {
          el.classList[state === "show" ? "add" : "remove"](opts.showClass);
        }
        if (opts.show && typeof opts.show === "function" && state === "show") {
          opts.show();
        }
        if (opts.hide && typeof opts.hide === "function" && state === "hide") {
          opts.hide();
        }
      };

      var doTransition = function doTransition() {
        applyTransition();
        setTimeout(function () {
          if (afterTransition) {
            afterTransition();
          }
          resolve();
        }, transitionDuration + delay);
      };

      var maybeDelayTransition = function maybeDelayTransition() {
        if (transitionDuration === 0) {
          doTransition();
        } else {
          setTimeout(doTransition, 0);
        }
      };

      if (beforeTransition) {
        beforeTransition();
        el.offsetHeight; // force reflow
        setTimeout(function () {
          maybeDelayTransition();
        }, 0);
      } else {
        maybeDelayTransition();
      }
    });
  }
};




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export keys */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return renderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);


var keys = {
  autofocus: "autofocus",
  class: "class",
  className: "class",
  enctype: "enctype",
  formaction: "formaction",
  maxlength: "maxlength",
  minlength: "minlength",
  onblur: "onblur",
  onchange: "onchange",
  onclick: "onclick",
  onfocus: "onfocus",
  oninput: "oninput",
  onkeydown: "onkeydown",
  onkeyup: "onkeyup",
  onmousedown: "onmousedown",
  onmouseout: "onmouseout",
  onmouseover: "onmouseover",
  onmouseup: "onmouseup",
  onscroll: "onscroll",
  onsubmit: "onsubmit",
  ontouchend: "ontouchend",
  ontouchmove: "ontouchmove",
  ontouchstart: "ontouchstart",
  readonly: "readonly",
  tabindex: "tabindex"
};

var renderer = __WEBPACK_IMPORTED_MODULE_0_mithril___default.a;

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var stream$2 = createCommonjsModule(function (module) {
	/* eslint-disable */
	(function () {
		"use strict";
		/* eslint-enable */

		var guid = 0,
		    HALT = {};
		function createStream() {
			function stream() {
				if (arguments.length > 0 && arguments[0] !== HALT) updateStream(stream, arguments[0]);
				return stream._state.value;
			}
			initStream(stream);

			if (arguments.length > 0 && arguments[0] !== HALT) updateStream(stream, arguments[0]);

			return stream;
		}
		function initStream(stream) {
			stream.constructor = createStream;
			stream._state = { id: guid++, value: undefined, state: 0, derive: undefined, recover: undefined, deps: {}, parents: [], endStream: undefined, unregister: undefined };
			stream.map = stream["fantasy-land/map"] = map, stream["fantasy-land/ap"] = ap, stream["fantasy-land/of"] = createStream;
			stream.valueOf = valueOf, stream.toJSON = toJSON, stream.toString = valueOf;

			Object.defineProperties(stream, {
				end: { get: function get() {
						if (!stream._state.endStream) {
							var endStream = createStream();
							endStream.map(function (value) {
								if (value === true) {
									unregisterStream(stream);
									endStream._state.unregister = function () {
										unregisterStream(endStream);
									};
								}
								return value;
							});
							stream._state.endStream = endStream;
						}
						return stream._state.endStream;
					} }
			});
		}
		function updateStream(stream, value) {
			updateState(stream, value);
			for (var id in stream._state.deps) {
				updateDependency(stream._state.deps[id], false);
			}if (stream._state.unregister != null) stream._state.unregister();
			finalize(stream);
		}
		function updateState(stream, value) {
			stream._state.value = value;
			stream._state.changed = true;
			if (stream._state.state !== 2) stream._state.state = 1;
		}
		function updateDependency(stream, mustSync) {
			var state = stream._state,
			    parents = state.parents;
			if (parents.length > 0 && parents.every(active) && (mustSync || parents.some(changed))) {
				var value = stream._state.derive();
				if (value === HALT) return false;
				updateState(stream, value);
			}
		}
		function finalize(stream) {
			stream._state.changed = false;
			for (var id in stream._state.deps) {
				stream._state.deps[id]._state.changed = false;
			}
		}

		function combine(fn, streams) {
			if (!streams.every(valid)) throw new Error("Ensure that each item passed to stream.combine/stream.merge is a stream");
			return initDependency(createStream(), streams, function () {
				return fn.apply(this, streams.concat([streams.filter(changed)]));
			});
		}

		function initDependency(dep, streams, derive) {
			var state = dep._state;
			state.derive = derive;
			state.parents = streams.filter(notEnded);

			registerDependency(dep, state.parents);
			updateDependency(dep, true);

			return dep;
		}
		function registerDependency(stream, parents) {
			for (var i = 0; i < parents.length; i++) {
				parents[i]._state.deps[stream._state.id] = stream;
				registerDependency(stream, parents[i]._state.parents);
			}
		}
		function unregisterStream(stream) {
			for (var i = 0; i < stream._state.parents.length; i++) {
				var parent = stream._state.parents[i];
				delete parent._state.deps[stream._state.id];
			}
			for (var id in stream._state.deps) {
				var dependent = stream._state.deps[id];
				var index = dependent._state.parents.indexOf(stream);
				if (index > -1) dependent._state.parents.splice(index, 1);
			}
			stream._state.state = 2; //ended
			stream._state.deps = {};
		}

		function map(fn) {
			return combine(function (stream) {
				return fn(stream());
			}, [this]);
		}
		function ap(stream) {
			return combine(function (s1, s2) {
				return s1()(s2());
			}, [stream, this]);
		}
		function valueOf() {
			return this._state.value;
		}
		function toJSON() {
			return this._state.value != null && typeof this._state.value.toJSON === "function" ? this._state.value.toJSON() : this._state.value;
		}

		function valid(stream) {
			return stream._state;
		}
		function active(stream) {
			return stream._state.state === 1;
		}
		function changed(stream) {
			return stream._state.changed;
		}
		function notEnded(stream) {
			return stream._state.state !== 2;
		}

		function merge(streams) {
			return combine(function () {
				return streams.map(function (s) {
					return s();
				});
			}, streams);
		}

		function scan(reducer, seed, stream) {
			var newStream = combine(function (s) {
				return seed = reducer(seed, s._state.value);
			}, [stream]);

			if (newStream._state.state === 0) newStream(seed);

			return newStream;
		}

		function scanMerge(tuples, seed) {
			var streams = tuples.map(function (tuple) {
				var stream = tuple[0];
				if (stream._state.state === 0) stream(undefined);
				return stream;
			});

			var newStream = combine(function () {
				var changed = arguments[arguments.length - 1];

				streams.forEach(function (stream, idx) {
					if (changed.indexOf(stream) > -1) {
						seed = tuples[idx][1](seed, stream._state.value);
					}
				});

				return seed;
			}, streams);

			return newStream;
		}

		createStream["fantasy-land/of"] = createStream;
		createStream.merge = merge;
		createStream.combine = combine;
		createStream.scan = scan;
		createStream.scanMerge = scanMerge;
		createStream.HALT = HALT;

		module["exports"] = createStream;
	})();
});

"use strict";

var stream = stream$2;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var requiresKeys = false;

var StateComponent = function StateComponent(_ref) {
  var _ref$createContent = _ref.createContent,
      createContent = _ref$createContent === undefined ? function () {} : _ref$createContent,
      _ref$createProps = _ref.createProps,
      createProps = _ref$createProps === undefined ? function () {} : _ref$createProps,
      _ref$component = _ref.component,
      component = _ref$component === undefined ? null : _ref$component,
      _ref$getElement = _ref.getElement,
      getElement = _ref$getElement === undefined ? function () {
    return "div";
  } : _ref$getElement,
      _ref$getInitialState = _ref.getInitialState,
      getInitialState = _ref$getInitialState === undefined ? function () {
    return {};
  } : _ref$getInitialState,
      _ref$onMount = _ref.onMount,
      onMount = _ref$onMount === undefined ? function () {} : _ref$onMount,
      _ref$onUnMount = _ref.onUnMount,
      onUnMount = _ref$onUnMount === undefined ? function () {} : _ref$onUnMount,
      _ref$view = _ref.view,
      view = _ref$view === undefined ? null : _ref$view;


  var oninit = function oninit(vnode) {
    var protoState = _extends({}, vnode);
    var initialState = getInitialState(protoState, stream);
    vnode.state = initialState;
    vnode._mounted = false;

    vnode.state.redrawOnUpdate && vnode.state.redrawOnUpdate.map(function () {
      return vnode._mounted && setTimeout(renderer.redraw);
    });
  };

  var oncreate = function oncreate(vnode) {
    vnode._mounted = true;
    onMount(vnode);
  };

  var render = function render(vnode) {
    return renderer(component || getElement(vnode), createProps(vnode, { renderer: renderer, requiresKeys: requiresKeys, keys: keys }), [vnode.attrs.before, createContent(vnode, { renderer: renderer, requiresKeys: requiresKeys, keys: keys }), vnode.attrs.after]);
  };

  return {
    view: view ? function (vnode) {
      return view(vnode, { render: render, renderer: renderer });
    } : function (vnode) {
      return render(vnode);
    },
    oninit: oninit,
    oncreate: oncreate,
    onremove: onUnMount
  };
};

var requiresKeys$1 = false;

var ViewComponent = function ViewComponent(_ref) {
  var _ref$createContent = _ref.createContent,
      createContent = _ref$createContent === undefined ? function () {} : _ref$createContent,
      _ref$createProps = _ref.createProps,
      createProps = _ref$createProps === undefined ? function () {} : _ref$createProps,
      _ref$getElement = _ref.getElement,
      getElement = _ref$getElement === undefined ? function () {
    return "div";
  } : _ref$getElement,
      _ref$component = _ref.component,
      component = _ref$component === undefined ? null : _ref$component,
      _ref$view = _ref.view,
      view = _ref$view === undefined ? null : _ref$view,
      _ref$onMount = _ref.onMount,
      onMount = _ref$onMount === undefined ? function () {} : _ref$onMount,
      _ref$onUnMount = _ref.onUnMount,
      onUnMount = _ref$onUnMount === undefined ? function () {} : _ref$onUnMount;


  var render = function render(vnode) {
    return renderer(component || getElement(vnode), createProps(vnode, { renderer: renderer, requiresKeys: requiresKeys$1, keys: keys }), [vnode.attrs.before, createContent(vnode, { renderer: renderer, requiresKeys: requiresKeys$1, keys: keys }), vnode.attrs.after]);
  };

  return {
    view: view ? function (vnode) {
      return view(vnode, { render: render, renderer: renderer });
    } : function (vnode) {
      return render(vnode);
    },
    oncreate: onMount,
    onremove: onUnMount
  };
};




/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export componentConfig */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_style__ = __webpack_require__(28);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0_polythene_style__["a"]; });
// Placeholder for custom theme config file
// In your app paths setup, change the current path to your custom config file; see the theme README.

// Example:

// export const componentConfig = {
//     Button: vars => {
//         const mainColor = '#e4521b';
//         const textColor = '#fff';
//         const newVars = Object.assign(
//           {},
//           vars,
//           {
//             border_radius:                        0,
//             color_light_raised_normal_background: mainColor,
//             color_light_raised_normal_text:       textColor,
//             color_dark_raised_normal_background:  mainColor,
//             color_dark_raised_normal_text:        textColor
//           }
//         );
//         return [
//             { '': vars }, // default vars for all pages
//             { '.example-custom-theme ': newVars } // custom vars for this selector
//         ];
//     }
// };

var componentConfig = {};





/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Icon; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core_icon__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_svg__ = __webpack_require__(18);




var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Icon = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["b" /* ViewComponent */])(_extends({}, __WEBPACK_IMPORTED_MODULE_1_polythene_core_icon__["a" /* coreIcon */], {
  createProps: function createProps(vnode, args) {
    return __WEBPACK_IMPORTED_MODULE_1_polythene_core_icon__["a" /* coreIcon */].createProps(vnode, _extends(args, { SVG: __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_svg__["a" /* SVG */] }));
  },
  createContent: function createContent(vnode, args) {
    return __WEBPACK_IMPORTED_MODULE_1_polythene_core_icon__["a" /* coreIcon */].createContent(vnode, _extends(args, { SVG: __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_svg__["a" /* SVG */] }));
  }
}));

Icon.displayName = "Icon";




/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Shadow; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core_shadow__ = __webpack_require__(36);



var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Shadow = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["b" /* ViewComponent */])(_extends({}, __WEBPACK_IMPORTED_MODULE_1_polythene_core_shadow__["a" /* coreShadow */]));

Shadow.displayName = "Shadow";




/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return selectionControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return viewControl; });
/* unused harmony export classes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return vars$1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_theme__ = __webpack_require__(2);



var classes = {
  component: "pe-control",

  // elements
  formLabel: "pe-control__form-label",
  input: "pe-control__input",
  label: "pe-control__label",

  // states
  disabled: "pe-control--disabled",
  inactive: "pe-control--inactive",
  large: "pe-control--large",
  medium: "pe-control--medium",
  off: "pe-control--off",
  on: "pe-control--on",
  regular: "pe-control--regular",
  small: "pe-control--small",

  // control view elements
  box: "pe-control__box",
  button: "pe-control__button",

  // control view states
  buttonOff: "pe-control__button--off",
  buttonOn: "pe-control__button--on"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

var sizeClasses = {
  small: classes.small,
  regular: classes.regular,
  medium: classes.medium,
  large: classes.large
};

var classForSize = function classForSize() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "regular";
  return sizeClasses[size];
};

var currentState = function currentState(attrs, state) {
  var checked = attrs.checked !== undefined ? attrs.checked : state.checked();
  var selectable = attrs.selectable !== undefined ? attrs.selectable(checked) : false;
  var inactive = attrs.disabled || !selectable;
  return { checked: checked, inactive: inactive };
};

var getInitialState = function getInitialState(vnode, createStream) {
  var attrs = vnode.attrs;
  var isChecked = attrs.defaultChecked !== undefined ? attrs.defaultChecked : attrs.checked || false;
  var checked = createStream(isChecked);

  var notifyChange = function notifyChange(e, isChecked) {
    if (attrs.onChange) {
      attrs.onChange({
        event: e,
        checked: isChecked,
        value: attrs.value
      });
    }
  };

  var onChange = function onChange(e) {
    var isChecked = e.currentTarget.checked;
    if (attrs.type === "radio") {
      // do not set directly
    } else {
      checked(isChecked);
    }
    notifyChange(e, isChecked);
  };

  var toggle = function toggle(e) {
    var newChecked = !checked();
    checked(newChecked);
    notifyChange(e, newChecked);
  };

  return {
    checked: checked,
    toggle: toggle,
    onChange: onChange,
    redrawOnUpdate: createStream.merge([checked])
  };
};

var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var attrs = vnode.attrs;
  var state = vnode.state;

  var _currentState = currentState(attrs, state),
      checked = _currentState.checked,
      inactive = _currentState.inactive;

  return _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    className: [classes.component, attrs.instanceClass, // for instance pe-checkbox-control
    checked ? classes.on : classes.off, attrs.disabled ? classes.disabled : null, inactive ? classes.inactive : null, classForSize(attrs.size), attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  });
};

var createContent = function createContent(vnode, _ref2) {
  var h = _ref2.renderer,
      k = _ref2.keys,
      ViewControl = _ref2.ViewControl;

  var state = vnode.state;
  var attrs = vnode.attrs;

  var _currentState2 = currentState(attrs, state),
      checked = _currentState2.checked,
      inactive = _currentState2.inactive;

  var viewControlClickHandler = attrs.events && attrs.events[k.onclick];
  var viewControlKeyDownHandler = attrs.events && attrs.events[k.onkeydown] ? attrs.events[k.onkeydown] : function (e) {
    if (e.key === "Enter") {
      if (viewControlClickHandler) {
        viewControlClickHandler(e);
      } else {
        state.toggle(e);
      }
    }
  };

  return h("label", _extends({}, { className: classes.formLabel }), [h(ViewControl, _extends({}, attrs, {
    inactive: inactive,
    checked: checked,
    key: "control",
    events: _defineProperty({}, k.onkeydown, viewControlKeyDownHandler)
  })), attrs.label ? h("." + classes.label, { key: "label" }, attrs.label) : null, h("input", _extends({}, attrs.events, {
    name: attrs.name,
    type: attrs.type,
    value: attrs.value,
    checked: checked
  }, attrs.disabled || inactive ? { disabled: "disabled" } : _defineProperty({}, k.onchange, state.onChange)))]);
};

var selectionControl = Object.freeze({
	getElement: getElement,
	getInitialState: getInitialState,
	createProps: createProps,
	createContent: createContent
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var CONTENT = [{ iconType: "iconOn", className: classes.buttonOn }, { iconType: "iconOff", className: classes.buttonOff }];

var getElement$1 = function getElement(vnode) {
  return vnode.attrs.element || "." + classes.box;
};

var createIcon = function createIcon(h, iconType, attrs, className) {
  return (
    // if attrs.iconOn/attrs.iconOff is passed, use that icon options object and ignore size
    // otherwise create a new object
    _extends$1({}, {
      className: className,
      key: iconType
    }, attrs[iconType] ? attrs[iconType] : { svg: h.trust(attrs.icons[iconType]) }, attrs.icon, attrs.size ? { size: attrs.size } : null)
  );
};

var createContent$1 = function createContent(vnode, _ref) {
  var h = _ref.renderer,
      Icon = _ref.Icon,
      IconButton = _ref.IconButton;

  var attrs = vnode.attrs;
  return h(IconButton, _extends$1({}, {
    element: "div",
    key: attrs.key,
    className: classes.button,
    content: CONTENT.map(function (o) {
      return h(Icon, createIcon(h, o.iconType, attrs, o.className));
    }),
    ripple: { center: true },
    disabled: attrs.disabled,
    events: attrs.events,
    inactive: attrs.inactive
  }, attrs.iconButton // for example for hover behaviour
  ));
};

var viewControl = Object.freeze({
	getElement: getElement$1,
	createContent: createContent$1
});

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

var vars$1 = {
  label_font_size: 2 * __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].grid_unit_component, // 16
  label_height: 3 * __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].grid_unit_component, // 24
  label_padding_before: __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].grid_unit * 4, // 16
  label_padding_after: 0,
  button_size: 6 * __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].grid_unit_component,
  icon_size: 3 * __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].grid_unit_component,
  animation_duration: __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].animation_duration,

  color_light_on: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_primary),
  color_light_off: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_secondary),
  color_light_label: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_secondary),
  color_light_disabled: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_disabled),
  color_light_thumb_off_focus_opacity: .08,
  color_light_thumb_on_focus_opacity: .11,

  // icon colors may be set in theme; set to "inherit" by default
  // color_light_on_icon
  // color_light_off_icon

  // label on/off colors may be set in theme; set to color_light_label by default
  // color_light_on_label
  // color_light_off_label

  color_light_focus_on: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_primary),
  color_light_focus_on_opacity: .11,
  color_light_focus_off: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground),
  color_light_focus_off_opacity: .07,

  color_dark_on: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_primary),
  color_dark_off: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_secondary),
  color_dark_label: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_secondary),
  color_dark_disabled: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_disabled),
  color_dark_thumb_off_focus_opacity: .08,
  color_dark_thumb_on_focus_opacity: .11,

  // icon color may be set in theme; set to "inherit" by default
  // color_dark_on_icon
  // color_dark_off_icon

  // label on/off colors may be set in theme; set to color_dark_label by default
  // color_dark_on_label
  // color_dark_off_label

  color_dark_focus_on: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_primary), // or '#80cbc4'
  color_dark_focus_on_opacity: .14,
  color_dark_focus_off: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground),
  color_dark_focus_off_opacity: .09
};




/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconButton; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core_icon_button__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_icon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_button__ = __webpack_require__(7);





var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var IconButton = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["b" /* ViewComponent */])(_extends({}, __WEBPACK_IMPORTED_MODULE_1_polythene_core_icon_button__["a" /* coreIconButton */], {
  createProps: function createProps(vnode, args) {
    return __WEBPACK_IMPORTED_MODULE_1_polythene_core_icon_button__["a" /* coreIconButton */].createProps(vnode, _extends(args, { Icon: __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_icon__["a" /* Icon */] }));
  },
  createContent: function createContent(vnode, args) {
    return __WEBPACK_IMPORTED_MODULE_1_polythene_core_icon_button__["a" /* coreIconButton */].createContent(vnode, _extends(args, { Icon: __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_icon__["a" /* Icon */] }));
  },
  component: __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_button__["a" /* Button */]
}));

IconButton.displayName = "IconButton";




/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core_button__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_ripple__ = __webpack_require__(10);




var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Button = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(_extends({}, __WEBPACK_IMPORTED_MODULE_1_polythene_core_button__["b" /* coreButton */], {
  createProps: function createProps(vnode, args) {
    return __WEBPACK_IMPORTED_MODULE_1_polythene_core_button__["b" /* coreButton */].createProps(vnode, _extends(args, { Ripple: __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_ripple__["a" /* Ripple */] }));
  },
  createContent: function createContent(vnode, args) {
    return __WEBPACK_IMPORTED_MODULE_1_polythene_core_button__["b" /* coreButton */].createContent(vnode, _extends(args, { Ripple: __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_ripple__["a" /* Ripple */] }));
  }
}));

Button.displayName = "Button";




/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addWebFont; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return easing; });
/* unused harmony export layoutStyles */
/* unused harmony export addLayoutStyles */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return scrollTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Timer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core_css__ = __webpack_require__(9);



var addWebFont = function addWebFont(vendor, family, key) {
  if (__WEBPACK_IMPORTED_MODULE_0_polythene_core__["g" /* isServer */]) return;
  if (!window.WebFontConfig) {
    window.WebFontConfig = {};
    (function () {
      var wf = document.createElement("script");
      wf.src = (document.location.protocol === "https:" ? "https" : "http") + "://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js";
      wf.type = "text/javascript";
      wf.async = "true";
      var s = document.getElementsByTagName("script")[0];
      if (s) {
        s.parentNode.insertBefore(wf, s);
      }
    })();
  }
  var vendorCfg = window.WebFontConfig[vendor] || {};
  vendorCfg.families = vendorCfg.families || [];
  vendorCfg.families.push(family);
  if (key) {
    vendorCfg.key = key;
  }
  window.WebFontConfig[vendor] = vendorCfg;
};

/*
https://gist.github.com/gre/1650294
Easing Functions - inspired from http://gizma.com/easing/
Only considering the t value for the range [0, 1] => [0, 1]
*/

var easing = {
  // no easing, no acceleration
  linear: function linear(t) {
    return t;
  },
  // accelerating from zero velocity
  easeInQuad: function easeInQuad(t) {
    return t * t;
  },
  // decelerating to zero velocity
  easeOutQuad: function easeOutQuad(t) {
    return t * (2 - t);
  },
  // acceleration until halfway, then deceleration
  easeInOutQuad: function easeInOutQuad(t) {
    return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  },
  // accelerating from zero velocity
  easeInCubic: function easeInCubic(t) {
    return t * t * t;
  },
  // decelerating to zero velocity
  easeOutCubic: function easeOutCubic(t) {
    return --t * t * t + 1;
  },
  // acceleration until halfway, then deceleration
  easeInOutCubic: function easeInOutCubic(t) {
    return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  },
  // accelerating from zero velocity
  easeInQuart: function easeInQuart(t) {
    return t * t * t * t;
  },
  // decelerating to zero velocity
  easeOutQuart: function easeOutQuart(t) {
    return 1 - --t * t * t * t;
  },
  // acceleration until halfway, then deceleration
  easeInOutQuart: function easeInOutQuart(t) {
    return t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
  },
  // accelerating from zero velocity
  easeInQuint: function easeInQuint(t) {
    return t * t * t * t * t;
  },
  // decelerating to zero velocity
  easeOutQuint: function easeOutQuint(t) {
    return 1 + --t * t * t * t * t;
  },
  // acceleration until halfway, then deceleration
  easeInOutQuint: function easeInOutQuint(t) {
    return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
  }
};

var flex$1 = [{
  ".layout, .layout.horizontal": __WEBPACK_IMPORTED_MODULE_1_polythene_core_css__["a" /* flex */].layout,
  ".layout.horizontal.inline, .layout.vertical.inline": __WEBPACK_IMPORTED_MODULE_1_polythene_core_css__["a" /* flex */].layoutInline,
  ".layout.horizontal": __WEBPACK_IMPORTED_MODULE_1_polythene_core_css__["a" /* flex */].layoutHorizontal,
  ".layout.horizontal.reverse": __WEBPACK_IMPORTED_MODULE_1_polythene_core_css__["a" /* flex */].layoutHorizontalReverse,
  ".layout.vertical": __WEBPACK_IMPORTED_MODULE_1_polythene_core_css__["a" /* flex */].layoutVertical,
  ".layout.vertical.reverse": __WEBPACK_IMPORTED_MODULE_1_polythene_core_css__["a" /* flex */].layoutVerticalReverse,
  ".layout.wrap": __WEBPACK_IMPORTED_MODULE_1_polythene_core_css__["a" /* flex */].layoutWrap,
  ".layout.wrap.reverse": __WEBPACK_IMPORTED_MODULE_1_polythene_core_css__["a" /* flex */].layoutWrapReverse,
  ".flex": __WEBPACK_IMPORTED_MODULE_1_polythene_core_css__["a" /* flex */].flex(1),
  ".span.flex": { "display": "block" }, // for IE 10
  ".flex.auto-vertical": __WEBPACK_IMPORTED_MODULE_1_polythene_core_css__["a" /* flex */].flexAutoVertical,
  ".flex.auto": __WEBPACK_IMPORTED_MODULE_1_polythene_core_css__["a" /* flex */].flexAuto,
  ".flex.none": __WEBPACK_IMPORTED_MODULE_1_polythene_core_css__["a" /* flex */].flexIndex("none"),
  ".flex.one": __WEBPACK_IMPORTED_MODULE_1_polythene_core_css__["a" /* flex */].flexIndex(1),
  ".flex.two": __WEBPACK_IMPORTED_MODULE_1_polythene_core_css__["a" /* flex */].flexIndex(2),
  ".flex.three": __WEBPACK_IMPORTED_MODULE_1_polythene_core_css__["a" /* flex */].flexIndex(3),
  ".flex.four": __WEBPACK_IMPORTED_MODULE_1_polythene_core_css__["a" /* flex */].flexIndex(4),
  ".flex.five": __WEBPACK_IMPORTED_MODULE_1_polythene_core_css__["a" /* flex */].flexIndex(5),
  ".flex.six": __WEBPACK_IMPORTED_MODULE_1_polythene_core_css__["a" /* flex */].flexIndex(6),
  ".flex.seven": __WEBPACK_IMPORTED_MODULE_1_polythene_core_css__["a" /* flex */].flexIndex(7),
  ".flex.eight": __WEBPACK_IMPORTED_MODULE_1_polythene_core_css__["a" /* flex */].flexIndex(8),
  ".flex.nine": __WEBPACK_IMPORTED_MODULE_1_polythene_core_css__["a" /* flex */].flexIndex(9),
  ".flex.ten": __WEBPACK_IMPORTED_MODULE_1_polythene_core_css__["a" /* flex */].flexIndex(10),
  ".flex.eleven": __WEBPACK_IMPORTED_MODULE_1_polythene_core_css__["a" /* flex */].flexIndex(11),
  ".flex.twelve": __WEBPACK_IMPORTED_MODULE_1_polythene_core_css__["a" /* flex */].flexIndex(12),

  // alignment in cross axis
  ".layout.start": __WEBPACK_IMPORTED_MODULE_1_polythene_core_css__["a" /* flex */].layoutStart,
  ".layout.center, .layout.center-center": __WEBPACK_IMPORTED_MODULE_1_polythene_core_css__["a" /* flex */].layoutCenter,
  ".layout.end": __WEBPACK_IMPORTED_MODULE_1_polythene_core_css__["a" /* flex */].layoutEnd,

  // alignment in main axis
  ".layout.start-justified": __WEBPACK_IMPORTED_MODULE_1_polythene_core_css__["a" /* flex */].layoutStartJustified,
  ".layout.center-justified, .layout.center-center": __WEBPACK_IMPORTED_MODULE_1_polythene_core_css__["a" /* flex */].layoutCenterJustified,
  ".layout.end-justified": __WEBPACK_IMPORTED_MODULE_1_polythene_core_css__["a" /* flex */].layoutEndJustified,
  ".layout.around-justified": __WEBPACK_IMPORTED_MODULE_1_polythene_core_css__["a" /* flex */].layoutAroundJustified,
  ".layout.justified": __WEBPACK_IMPORTED_MODULE_1_polythene_core_css__["a" /* flex */].layoutJustified,

  // self alignment
  ".self-start": __WEBPACK_IMPORTED_MODULE_1_polythene_core_css__["a" /* flex */].selfStart,
  ".self-center": __WEBPACK_IMPORTED_MODULE_1_polythene_core_css__["a" /* flex */].selfCenter,
  ".self-end": __WEBPACK_IMPORTED_MODULE_1_polythene_core_css__["a" /* flex */].selfEnd,
  ".self-stretch": __WEBPACK_IMPORTED_MODULE_1_polythene_core_css__["a" /* flex */].selfStretch
}];

var commonStyle = [{
  ".pe-block": {
    display: "block"
  },

  ".pe-inline-block": {
    display: "inline-block"
  },

  // ie support for hidden
  ".pe-hidden": {
    display: "none !important"
  },

  ".pe-relative": {
    position: "relative"
  },

  ".pe-absolute": {
    position: "absolute"
  },

  ".pe-fit": {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },

  ".pe-fullbleed": {
    margin: 0,
    height: "100vh"
  }
}];

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var layoutStyles = _extends({}, flex$1, commonStyle);

var addLayoutStyles = function addLayoutStyles() {
  return __WEBPACK_IMPORTED_MODULE_1_polythene_core_css__["c" /* styler */].add("pe-layout", flex$1, commonStyle);
};

/*
 Animated scroll to a position.
 Derived from https://github.com/madebysource/animated-scrollto
 Adapted to Mithril and rewritten to es6.
*/

var scrollTo = function scrollTo(opts) {
  if (__WEBPACK_IMPORTED_MODULE_0_polythene_core__["g" /* isServer */]) {
    return;
  }
  var element = opts.element;
  var which = opts.direction === "horizontal" ? "scrollLeft" : "scrollTop";
  var to = opts.to;
  var duration = opts.duration * 1000;
  var easingFn = opts.easing || easing.easeInOutCubic;
  var start = element[which];
  var change = to - start;
  var animationStart = new Date().getTime();
  var animating = true;
  return new Promise(function (resolve) {
    var animateScroll = function animateScroll() {
      if (!animating) {
        return;
      }
      requestAnimFrame(animateScroll);
      var now = new Date().getTime();
      var percentage = (now - animationStart) / duration;
      var val = start + change * easingFn(percentage);
      element[which] = val;
      if (percentage >= 1) {
        element[which] = to;
        animating = false;
        resolve();
      }
    };
    requestAnimFrame(animateScroll);
  });
};

var requestAnimFrame = __WEBPACK_IMPORTED_MODULE_0_polythene_core__["g" /* isServer */] ? function () {} : function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
    return window.setTimeout(callback, 1000 / 60);
  };
}();

var Timer = function Timer() {
  var timerId = void 0,
      startTime = void 0,
      remaining = void 0,
      cb = void 0;

  var stop = function stop() {
    if (__WEBPACK_IMPORTED_MODULE_0_polythene_core__["f" /* isClient */]) {
      window.clearTimeout(timerId);
    }
  };

  var pause = function pause() {
    return stop(), remaining -= new Date() - startTime;
  };

  var startTimer = function startTimer() {
    if (__WEBPACK_IMPORTED_MODULE_0_polythene_core__["f" /* isClient */]) {
      stop();
      startTime = new Date();
      timerId = window.setTimeout(cb, remaining);
    }
  };

  var start = function start(callback, delaySeconds) {
    return cb = callback, remaining = delaySeconds * 1000, startTimer();
  };

  var resume = function resume() {
    return startTimer();
  };

  return {
    start: start,
    pause: pause,
    resume: resume,
    stop: stop
  };
};




/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mixinFlex; });
/* unused harmony export mixin */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return styler; });
/* unused harmony export hex */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return rgba; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_j2c_plugin_prefix_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_j2c_plugin_prefix_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_j2c_plugin_prefix_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_j2c__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_j2c___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_j2c__);




var layout = [{
  "display": "-webkit-box"
}, {
  "display": "-moz-box"
}, {
  "display": "-ms-flexbox",
  "-ms-flex-preferred-size": "initial" // IE10
}, {
  "display": "-webkit-flex"
}, {
  "display": "flex"
}];

var layoutInline = [layout, {
  "display": "-ms-inline-flexbox"
}, {
  "display": "-webkit-inline-flex"
}, {
  "display": "inline-flex"
}];

var layoutHorizontal = [layout, {
  "-ms-flex-direction": "row",
  "-webkit-flex-direction": "row",
  "flex-direction": "row"
}];

var layoutHorizontalReverse = [layout, {
  "-ms-flex-direction": "row-reverse",
  "-webkit-flex-direction": "row-reverse",
  "flex-direction": "row-reverse"
}];

var layoutVertical = [layout, {
  "-ms-flex-direction": "column",
  "-webkit-flex-direction": "column",
  "flex-direction": "column"
}];

var layoutVerticalReverse = [layout, {
  "-ms-flex-direction": "column-reverse",
  "-webkit-flex-direction": "column-reverse",
  "flex-direction": "column-reverse"
}];

var layoutWrap = [layout, {
  "-ms-flex-wrap": "wrap",
  "-webkit-flex-wrap": "wrap",
  "flex-wrap": "wrap"
}];

var layoutWrapReverse = [layout, {
  "-ms-flex-wrap": "wrap-reverse",
  "-webkit-flex-wrap": "wrap-reverse",
  "flex-wrap": "wrap-reverse"
}];

var layoutStart = [layout, {
  "-ms-flex-align": "start",
  "-webkit-align-items": "flex-start",
  "align-items": "flex-start"
}];

var layoutCenter = [layout, {
  "-ms-flex-align": "center",
  "-webkit-align-items": "center",
  "align-items": "center"
}];

var layoutEnd = [layout, {
  "-ms-flex-align": "end",
  "-webkit-align-items": "flex-end",
  "align-items": "flex-end"
}];

var layoutJustified = [layout, {
  "-ms-flex-line-pack": "stretch", // IE10
  "-ms-flex-pack": "justify",
  "-webkit-justify-content": "space-between",
  "justify-content": "space-between"
}];

var layoutStartJustified = [layout, {
  "-ms-flex-align": "start", // IE10
  "-ms-flex-pack": "start",
  "-webkit-justify-content": "flex-start",
  "justify-content": "flex-start"
}];

var layoutCenterJustified = [layout, {
  "-ms-flex-pack": "center",
  "-webkit-justify-content": "center",
  "justify-content": "center"
}];

var layoutEndJustified = [layout, {
  "-ms-flex-pack": "end",
  "-webkit-justify-content": "flex-end",
  "justify-content": "flex-end"
}];

var layoutCenterCenter = [layoutCenterJustified, layoutCenter];

var layoutAroundJustified = [layout, {
  "-ms-flex-pack": "distribute",
  "-webkit-justify-content": "space-around",
  "justify-content": "space-around"
}];

var flex = function flex() {
  var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return [{
    "-webkit-box-flex": num
  }, {
    "-moz-box-flex": num
  }, {
    "-webkit-flex": num
  }, {
    "-ms-flex": num
  }, {
    "flex": num
  }, num === 1 ? {
    "-webkit-flex-basis": "0.000000001px"
  } : {}, num === 1 ? {
    "flex-basis": "0.000000001px"
  } : {}];
};

var flexAuto = {
  "-ms-flex": "1 1 auto",
  "-webkit-flex-basis": "auto",
  "flex-basis": "auto"
};

var flexAutoVertical = {
  "-ms-flex": "1 1 auto",
  "-webkit-flex-basis": "auto",
  "flex-basis": "auto"
};

var flexIndex = function flexIndex(index) {
  return {
    "-ms-flex": index,
    "-webkit-flex": index,
    "flex": index
  };
};

var flexGrow = function flexGrow(value) {
  return {
    "-webkit-flex-grow": value,
    "flex-grow": value
  };
};

var selfStart = {
  "-ms-flex-item-align": "start", // IE10
  "-ms-align-self": "flex-start",
  "-webkit-align-self": "flex-start",
  "align-self": "flex-start"
};

var selfCenter = {
  "-ms-flex-item-align": "center", // IE10
  "-ms-align-self": "center",
  "-webkit-align-self": "center",
  "align-self": "center"
};

var selfEnd = {
  "-ms-flex-item-align": "end", // IE10
  "-ms-align-self": "flex-end",
  "-webkit-align-self": "flex-end",
  "align-self": "flex-end"
};

var selfStretch = {
  "-ms-flex-item-align": "stretch", // IE10
  "-ms-align-self": "stretch",
  "-webkit-align-self": "stretch",
  "align-self": "stretch"
};

var mixinFlex = {
  flex: flex,
  flexAuto: flexAuto,
  flexAutoVertical: flexAutoVertical,
  flexIndex: flexIndex,
  flexGrow: flexGrow,
  layout: layout,
  layoutAroundJustified: layoutAroundJustified,
  layoutCenter: layoutCenter,
  layoutCenterCenter: layoutCenterCenter,
  layoutCenterJustified: layoutCenterJustified,
  layoutEnd: layoutEnd,
  layoutEndJustified: layoutEndJustified,
  layoutHorizontal: layoutHorizontal,
  layoutHorizontalReverse: layoutHorizontalReverse,
  layoutInline: layoutInline,
  layoutJustified: layoutJustified,
  layoutStart: layoutStart,
  layoutStartJustified: layoutStartJustified,
  layoutVertical: layoutVertical,
  layoutVerticalReverse: layoutVerticalReverse,
  layoutWrap: layoutWrap,
  layoutWrapReverse: layoutWrapReverse,
  selfCenter: selfCenter,
  selfEnd: selfEnd,
  selfStart: selfStart,
  selfStretch: selfStretch
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Mixins for j2c

// Centers an item absolutely within relative parent
// mixin.fit()
var fit = function fit() {
  var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  var offsetPx = offset + "px";
  return {
    position: "absolute",
    top: offsetPx,
    right: offsetPx,
    bottom: offsetPx,
    left: offsetPx
  };
};

// Optional font smoothing
// mixin.fontSmoothing()
var fontSmoothing = function fontSmoothing() {
  var smoothing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  if (smoothing) {
    return {
      "-webkit-font-smoothing": "antialiased",
      "-moz-osx-font-smoothing": "grayscale"
    };
  } else {
    return {
      "-webkit-font-smoothing": "subpixel-antialiased",
      "-moz-osx-font-smoothing": "auto"
    };
  }
};

// Breaks off a line with ...
// unless lines is "none"
// mixin.ellipsis(1, 16) // max 1 line, 16px high
// mixin.ellipsis(2, 1.3, "em") // max 2 lines, 2.6em high
var ellipsis = function ellipsis(lines, lineHeight) {
  var unit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "px";

  if (lines === "none") {
    return {
      textOverflow: "initial",
      overflow: "initial",
      display: "block",
      height: "auto",
      maxHeight: "none"
    };
  }
  return _extends({}, {
    overflow: "hidden",
    textOverflow: "ellipsis",
    textRendering: "auto" // Samsung Android
  }, lines !== undefined ? {
    "-webkit-line-clamp": lines,
    "-webkit-box-orient": "vertical",
    display: "-webkit-box"
  } : null, lineHeight !== undefined ? {
    maxHeight: lines * lineHeight + unit
  } : null);
};

// Clears float
// mixin.clearfix()
var clearfix = function clearfix() {
  return {
    "&:after": {
      content: "\"\"",
      display: "table",
      clear: "both"
    }
  };
};

// Creates sticky headers in a scrollable list
// Does not work in Chrome: http://caniuse.com/#feat=css-sticky
// mixin.sticky()
var sticky = function sticky() {
  var zIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return {
    position: "sticky",
    top: 0,
    zIndex: zIndex
  };
};

// Creats a transition with presets
// mixin.defaultTransition("opacity", vars.animation_duration)
var defaultTransition = function defaultTransition() {
  var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "all";
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ".18s";
  var curve = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "ease-out";
  return {
    transitionDelay: "0ms",
    transitionDuration: duration,
    transitionTimingFunction: curve,
    transitionProperty: properties
  };
};

var mixin = {
  clearfix: clearfix,
  defaultTransition: defaultTransition,
  ellipsis: ellipsis,
  fit: fit,
  fontSmoothing: fontSmoothing,
  sticky: sticky
};

var j2c = new __WEBPACK_IMPORTED_MODULE_2_j2c___default.a(__WEBPACK_IMPORTED_MODULE_0_j2c_plugin_prefix_browser__["prefixPlugin"]);
var ID_REGEX = /[^a-z0-9\\-]/g;

/*
 * @param id: identifier, used as HTMLElement id for the attached <style></style> element
 * @param styles: list of lists style Objects
 */
var add = function add(id) {
  for (var _len = arguments.length, styles = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    styles[_key - 1] = arguments[_key];
  }

  addToDocument.apply(undefined, [{
    id: id
  }].concat(styles));
};

/*
 * Removes a style from head.
 */
var remove = function remove(id) {
  if (__WEBPACK_IMPORTED_MODULE_1_polythene_core__["g" /* isServer */]) return;
  if (id) {
    var old = document.getElementById(id);
    if (old && old.parentNode) {
      old.parentNode.removeChild(old);
    }
  }
};

/*
 * opts: options object
 * id: identifier, used as HTMLElement id for the attached <style></style> element
 * document: document reference; default window.document
 * styles: list of lists style objects
 */
var addToDocument = function addToDocument(opts) {
  for (var _len2 = arguments.length, styles = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    styles[_key2 - 1] = arguments[_key2];
  }

  if (__WEBPACK_IMPORTED_MODULE_1_polythene_core__["g" /* isServer */]) return;
  var id = opts.id.replace(ID_REGEX, "_");
  var documentRef = opts.document || window.document;
  remove(id);
  var styleEl = documentRef.createElement("style");
  if (id) {
    styleEl.setAttribute("id", id);
  }
  styles.forEach(function (styleList) {
    // each style returns a list
    if (Object.keys(styleList).length) {
      styleList.forEach(function (style) {
        var scoped = {
          "@global": style
        };
        var sheet = j2c.sheet(scoped);
        styleEl.appendChild(documentRef.createTextNode(sheet));
      });
    }
  });
  documentRef.head.appendChild(styleEl);
};

/*
 * Adds styles to head for a component.
 * @param selector: Array of Strings: selectors
 * @param vars: Object configuration variables
 * @param styleFns: Array of Functions: (selector, componentVars) => [j2c style objects]
*/
var generateStyles = function generateStyles(selectors, vars, styleFns) {
  var selector = selectors.join("");
  var id = selector.trim().replace(/^[^a-z]?(.*)/, "$1");
  add(id, styleFns.map(function (fn) {
    return fn(selector, vars);
  }));
};

var createStyleSheets = function createStyleSheets(selectors, vars, styleFns) {
  var selector = selectors.join("");
  return styleFns.map(function (fn) {
    return fn(selector, vars);
  });
};

var styler = {
  add: add,
  addToDocument: addToDocument,
  createStyleSheets: createStyleSheets,
  generateStyles: generateStyles,
  remove: remove
};

var hex = function hex(value) {
  var bigint = parseInt(value.substring(1), 16);
  var r = bigint >> 16 & 255;
  var g = bigint >> 8 & 255;
  var b = bigint & 255;
  return r + "," + g + "," + b;
};

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};




/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ripple; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core_ripple__ = __webpack_require__(31);



var Ripple = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(__WEBPACK_IMPORTED_MODULE_1_polythene_core_ripple__["a" /* coreRipple */]);

Ripple.displayName = "Ripple";




/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListTile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core_list_tile__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_icon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_ripple__ = __webpack_require__(10);





var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var ListTile = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(_extends({}, __WEBPACK_IMPORTED_MODULE_1_polythene_core_list_tile__["b" /* coreListTile */], {
  createProps: function createProps(vnode, args) {
    return __WEBPACK_IMPORTED_MODULE_1_polythene_core_list_tile__["b" /* coreListTile */].createProps(vnode, _extends(args, { Icon: __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_icon__["a" /* Icon */], Ripple: __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_ripple__["a" /* Ripple */] }));
  },
  createContent: function createContent(vnode, args) {
    return __WEBPACK_IMPORTED_MODULE_1_polythene_core_list_tile__["b" /* coreListTile */].createContent(vnode, _extends(args, { Icon: __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_icon__["a" /* Icon */], Ripple: __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_ripple__["a" /* Ripple */] }));
  }
}));

ListTile.displayName = "ListTile";




/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return listTile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return classes; });
/* unused harmony export vars */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_theme__ = __webpack_require__(2);



var classes = {
  component: "pe-list-tile",

  // elements
  content: "pe-list-tile__content",
  highSubtitle: "pe-list-tile__high-subtitle",
  primary: "pe-list-tile__primary",
  secondary: "pe-list-tile__secondary",
  subtitle: "pe-list-tile__subtitle",
  title: "pe-list-tile__title",
  contentFront: "pe-list-tile__content-front",

  // states
  compact: "pe-list-tile--compact",
  compactFront: "pe-list-tile--compact-front",
  disabled: "pe-list-tile--disabled",
  hasFront: "pe-list-tile--front",
  hasHighSubtitle: "pe-list-tile--high-subtitle",
  hasSubtitle: "pe-list-tile--subtitle",
  header: "pe-list-tile--header",
  hoverable: "pe-list-tile--hoverable",
  selectable: "pe-list-tile--selectable",
  selected: "pe-list-tile--selected",
  highlight: "pe-list-tile--highlight",
  sticky: "pe-list-tile--sticky"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getElement = function getElement() {
  return "div";
}; // because primary or secondary content can be an "a", the container is always defined as "div", and option `element` is passed to primary content

var primaryContent = function primaryContent(h, k, requiresKeys, attrs, children) {
  var url = attrs.keyboardControl ? null : attrs.url;
  var element = attrs.element ? attrs.element : url ? "a" : "div";
  var contentFrontClass = [classes.content, classes.contentFront, attrs.compactFront ? classes.compactFront : null].join(" ");
  var frontComp = attrs.front ? h("div", _extends({}, requiresKeys ? { key: "front" } : null, { className: contentFrontClass }), attrs.front) : attrs.indent ? h("div", _extends({}, requiresKeys ? { key: "front" } : null, { className: contentFrontClass })) : null;
  var hasTabIndex = !attrs.header && attrs.url;
  var props = _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(attrs), attrs.events, {
    className: classes.primary,
    style: null
  }, hasTabIndex && _defineProperty({}, k.tabindex, attrs[k.tabindex] || 0), url);
  return h(element, props, [frontComp, h("div", {
    className: classes.content,
    style: attrs.style
  }, [attrs.content ? _extends({}, requiresKeys ? { key: "content" } : null, attrs.content) : children, attrs.title && !attrs.content ? h("div", _extends({}, requiresKeys ? { key: "title" } : null, { className: classes.title }), attrs.title) : null, attrs.subtitle ? h("div", _extends({}, requiresKeys ? { key: "subtitle" } : null, { className: classes.subtitle }), attrs.subtitle) : null, attrs.highSubtitle ? h("div", _extends({}, requiresKeys ? { key: "highSubtitle" } : null, { className: classes.subtitle + " " + classes.highSubtitle }), attrs.highSubtitle) : null, attrs.subContent ? h("div", _extends({}, requiresKeys ? { key: "subContent" } : null, { className: classes.subContent }), attrs.subContent) : null])]);
};

var secondaryContent = function secondaryContent(h, k, requiresKeys, Icon) {
  var attrs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

  var url = attrs.keyboardControl ? null : attrs.url;
  var element = attrs.element ? attrs.element : url ? "a" : "div";
  var hasTabIndex = attrs.url;
  return h(element, _extends({}, url, {
    className: classes.secondary
  }, requiresKeys ? { key: "secondary" } : null, Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(attrs), hasTabIndex && _defineProperty({}, k.tabindex, attrs[k.tabindex] || 0)), h("div", { className: classes.content }, [attrs.icon ? h(Icon, attrs.icon) : null, attrs.content ? attrs.content : null]));
};

var getInitialState = function getInitialState(vnode, createStream) {
  var attrs = vnode.attrs;
  var highlight = createStream(attrs.defaultHighlight);
  return {
    highlight: highlight,
    redrawOnUpdate: createStream.merge([highlight])
  };
};

var onMount = function onMount(vnode) {
  var state = vnode.state;
  var attrs = vnode.attrs;
  var dom = vnode.dom;
  if (!dom) {
    return;
  }
  if (__WEBPACK_IMPORTED_MODULE_0_polythene_core__["f" /* isClient */]) {
    if (attrs.register) {
      var primaryDom = dom; //.querySelector(`.${classes.primary}`);

      var onFocus = function onFocus() {
        return state.highlight(true);
      };
      var onBlur = function onBlur() {
        return state.highlight(false);
      };

      primaryDom.addEventListener("focus", onFocus, false);
      primaryDom.addEventListener("blur", onBlur, false);

      state.removeEventListeners = function () {
        return primaryDom.removeEventListener("focus", onFocus, false), primaryDom.removeEventListener("blur", onBlur, false);
      };

      attrs.register(attrs.index, {
        dom: primaryDom,
        attrs: attrs
      });

      state.highlight.map(function (hasHighlight) {
        if (attrs.setHighlightIndex && hasHighlight) {
          attrs.setHighlightIndex(attrs.index);
        }
      });
    }
  }
};

var onUnMount = function onUnMount(vnode) {
  return vnode.state.removeEventListeners && vnode.state.removeEventListeners();
};

var createProps = function createProps(vnode, _ref3) {
  var k = _ref3.keys;

  var state = vnode.state;
  var attrs = vnode.attrs;
  var highlight = state.highlight();
  var hasTabIndex = !attrs.header && !attrs.url && !(attrs.secondary && attrs.secondary.url);
  var heightClass = attrs.subtitle ? classes.hasSubtitle : attrs.highSubtitle ? classes.hasHighSubtitle : attrs.front || attrs.indent ? classes.hasFront : null;
  return _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(attrs, { remove: ["tabindex", "tabIndex"] }), // tabindex is set elsewhere
  {
    className: [classes.component, attrs.selected ? classes.selected : null, attrs.disabled ? classes.disabled : null, attrs.sticky ? classes.sticky : null, attrs.compact ? classes.compact : null, attrs.hoverable ? classes.hoverable : null, attrs.selectable ? classes.selectable : null, highlight ? classes.highlight : null, attrs.header ? classes.header : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, heightClass, attrs.className || attrs[k.class]].join(" ")
  }, hasTabIndex && _defineProperty({}, k.tabindex, attrs[k.tabindex] || 0)
  // events and url are attached to primary content to not interfere with controls
  );
};

var createContent = function createContent(vnode, _ref5) {
  var h = _ref5.renderer,
      requiresKeys = _ref5.requiresKeys,
      k = _ref5.keys,
      Ripple = _ref5.Ripple,
      Icon = _ref5.Icon;

  var attrs = vnode.attrs;
  var primaryAttrs = _extends({}, requiresKeys ? { key: "primary" } : null, attrs);
  delete primaryAttrs.id;
  delete primaryAttrs[k.class];
  return [attrs.ink && !attrs.disabled ? h(Ripple, _extends({}, attrs.ripple, requiresKeys ? { key: "ripple" } : null)) : null, primaryContent(h, k, requiresKeys, primaryAttrs, attrs.children || vnode.children), attrs.secondary ? secondaryContent(h, k, requiresKeys, Icon, attrs.secondary) : null];
};

var listTile = Object.freeze({
	getElement: getElement,
	getInitialState: getInitialState,
	onMount: onMount,
	onUnMount: onUnMount,
	createProps: createProps,
	createContent: createContent
});

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

// SPECS
//
// heights:
// single line: 48
// single line, dense: 40
// single line, with icon: 48
// single line, with icon, dense: 40
// single line, with avatar: 56
// single line, with avatar, dense: 48
// two-line: 72
// two-line, dense: 60
// three-line: 88
// three-line, dense: 76

var single_height = 48;
var padding = 8;
var single_with_icon_height = 56;

var vars$1 = {
  single_height: single_height,
  single_line_height: single_height - 2 * padding - (2 * 5 + 1),
  single_with_icon_height: single_with_icon_height,
  single_with_icon_line_height: single_with_icon_height - 2 * padding - (2 * 5 + 1),
  padding: 13,
  compact_padding: 9,
  subtitle_line_count: 1,
  has_subtitle_padding: 15,
  high_subtitle_line_count: 2,
  has_high_subtitle_padding: 13,
  front_item_width: 72,
  compact_front_item_width: 64,
  side_padding: 2 * __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].grid_unit_component,
  compact_side_padding: 1 * __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].grid_unit_component,
  font_size_title: 16,
  font_size_subtitle: 14,
  line_height_subtitle: 20,
  font_size_list_header: 14,
  font_size_small: 12,

  color_light_title: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_primary),
  color_light_subtitle: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_secondary),
  color_light_info: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_tertiary),
  color_light_text_disabled: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_disabled),
  color_light_list_header: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_tertiary),
  color_light_secondary: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_secondary),
  color_light_hover_background: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_background_hover),
  color_light_focus_background: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_background_hover),
  color_light_selected_background: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_background_hover),
  color_light_highlight_background: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_background_hover),
  // background color may be set in theme; disabled by default
  // color_light_background:          "inherit",

  color_dark_title: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_primary),
  color_dark_subtitle: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_secondary),
  color_dark_info: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_tertiary),
  color_dark_text_disabled: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_disabled),
  color_dark_list_header: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_tertiary),
  color_dark_secondary: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_secondary),
  color_dark_hover_background: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_background_hover),
  color_dark_selected_background: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_background_hover),
  color_dark_highlight_background: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_background_hover)
  // background color may be set in theme; disabled by default
  // color_dark_background:           "inherit",
};




/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return iconButton; });
/* unused harmony export classes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return vars$1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_theme__ = __webpack_require__(2);


var classes = {
  component: "pe-button pe-icon-button",

  // elements
  content: "pe-icon-button__content",

  // states
  compact: "pe-icon-button--compact"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Don't export 'element': it will be the wrapped button component (set in polythene-xxx-icon-button)

// Props to be passed to a button, including 'content'

var createProps = function createProps(vnode, _ref) {
  var h = _ref.renderer,
      Icon = _ref.Icon;

  var attrs = vnode.attrs;
  var content = attrs.content ? attrs.content : attrs.icon ? h(Icon, attrs.icon) : attrs.children || vnode.children;
  return _extends({}, {
    content: h("div", { className: classes.content }, content),
    parentClassName: [attrs.parentClassName || classes.component, attrs.compact ? classes.compact : null].join(" "),
    // defaults
    wash: false,
    animateOnTap: false
  }, attrs);
};

var createContent = function createContent() {
  return null;
};

var iconButton = Object.freeze({
	createProps: createProps,
	createContent: createContent
});

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

var padding = (__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].grid_unit_icon_button - __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].unit_icon_size) / 2; // 12
var padding_compact = (__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].grid_unit_icon_button - __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].unit_icon_size) / 3; // 8
var color_light = rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].blend_light_text_secondary);
var color_dark = rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].blend_dark_text_secondary);

var vars$1 = {
  padding: padding,
  padding_compact: padding_compact,

  color_background: "transparent", // only specify this variable to get all 2 states
  // theme specific background colors may be set in theme; disabled by default
  // color_light_background:    "none",
  // color_dark_background:     "none",

  color_light: color_light,
  color_light_disabled: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].blend_light_text_disabled),
  color_light_wash: color_light,
  color_light_wash_opacity: __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].blend_light_background_hover_medium,
  color_light_focus_opacity: __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].blend_light_background_hover_medium,

  color_dark: color_dark,
  color_dark_disabled: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].blend_dark_text_disabled),
  color_dark_wash: color_dark,
  color_dark_wash_opacity: __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].blend_dark_background_hover_medium,
  color_dark_focus_opacity: __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].blend_dark_background_hover_medium
};




/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseSpinner; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core_base_spinner__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_shadow__ = __webpack_require__(4);




var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var BaseSpinner = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(_extends({}, __WEBPACK_IMPORTED_MODULE_1_polythene_core_base_spinner__["b" /* coreBaseSpinner */], {
  createContent: function createContent(vnode, args) {
    return __WEBPACK_IMPORTED_MODULE_1_polythene_core_base_spinner__["b" /* coreBaseSpinner */].createContent(vnode, _extends(args, { Shadow: __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_shadow__["a" /* Shadow */] }));
  }
}));

BaseSpinner.classes = __WEBPACK_IMPORTED_MODULE_1_polythene_core_base_spinner__["a" /* classes */];
BaseSpinner.displayName = "BaseSpinner";




/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return spinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return classes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return vars$1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_theme__ = __webpack_require__(2);



var classes = {
  component: "pe-spinner",

  // elements
  animation: "pe-spinner__animation",
  placeholder: "pe-spinner__placeholder",

  // states
  animated: "pe-spinner--animated",
  fab: "pe-spinner--fab",
  large: "pe-spinner--large",
  medium: "pe-spinner--medium",
  permanent: "pe-spinner--permanent",
  raised: "pe-spinner--raised",
  regular: "pe-spinner--regular",
  singleColor: "pe-spinner--single-color",
  small: "pe-spinner--small",
  visible: "pe-spinner--visible"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var sizeClasses = {
  small: classes.small,
  regular: classes.regular,
  medium: classes.medium,
  large: classes.large,
  fab: classes.fab
};

var classForSize = function classForSize() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "regular";
  return sizeClasses[size];
};

var showSpinner = function showSpinner(state, attrs) {
  if (attrs.onChange) {
    attrs.onChange({ visible: false, transitioning: true });
  }
  return Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["n" /* show */])(_extends({}, attrs, {
    el: state.dom(),
    showClass: classes.visible
  })).then(function () {
    if (attrs.onChange) {
      attrs.onChange({ visible: true, transitioning: false });
    }
    if (attrs.didShow) {
      attrs.didShow(attrs.id);
    }
    state.visible(false);
  });
};

var hideSpinner = function hideSpinner(state, attrs) {
  if (attrs.onChange) {
    attrs.onChange({ visible: true, transitioning: true });
  }
  return Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["e" /* hide */])(_extends({}, attrs, {
    el: state.dom(),
    showClass: classes.visible
  })).then(function () {
    if (attrs.onChange) {
      attrs.onChange({ visible: false, transitioning: false });
    }
    if (attrs.didHide) {
      attrs.didHide(attrs.id);
    }
    state.visible(false);
  });
};

var getInitialState = function getInitialState(vnode, createStream) {
  var visible = createStream(false);
  var dom = createStream();
  return {
    dom: dom,
    visible: visible,
    redrawOnUpdate: createStream.merge([visible])
  };
};

var onMount = function onMount(vnode) {
  if (!vnode.dom) {
    return;
  }
  var state = vnode.state;
  var attrs = vnode.attrs;
  state.dom(vnode.dom);

  if (!attrs.permanent) {
    showSpinner(state, attrs);
  }
};

var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var attrs = vnode.attrs;
  return _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    className: [classes.component, attrs.instanceClass, classForSize(attrs.size), attrs.singleColor ? classes.singleColor : null, attrs.raised ? classes.raised : null, attrs.animated ? classes.animated : null, attrs.permanent ? classes.permanent : null, attrs.permanent ? classes.visible : null, attrs.className || attrs[k.class]].join(" ")
  }, attrs.events);
};

var createContent = function createContent(vnode, _ref2) {
  var h = _ref2.renderer,
      Shadow = _ref2.Shadow;

  var state = vnode.state;
  var attrs = vnode.attrs;

  if (state.hide) {
    setTimeout(function () {
      hideSpinner(state, attrs);
    }, 0);
  }

  return [attrs.raised && attrs.content ? h(Shadow, { key: "shadow", z: attrs.z }) : null, attrs.content];
};

var spinner = Object.freeze({
	getInitialState: getInitialState,
	onMount: onMount,
	createProps: createProps,
	createContent: createContent
});

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

var vars$1 = {
  size_small: 3 * __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].grid_unit_component,
  size_regular: 4 * __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].grid_unit_component,
  size_medium: 5 * __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].grid_unit_component,
  size_large: 6 * __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].grid_unit_component,
  size_fab: 7 * __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].grid_unit_component,

  raisedSize: function raisedSize(size) {
    var padding = size * 0.25;
    var paddedSize = size + padding * 2;
    return { padding: padding, paddedSize: paddedSize };
  },

  color_light_raised_background: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_background),
  // also use light background with dark tone
  color_dark_raised_background: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_background)
};




/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = m;

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return classes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return vars$1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_theme__ = __webpack_require__(2);



var baseClass = "pe-button";

var classes = {
  base: baseClass,
  component: baseClass + " pe-text-button",

  // elements
  content: "pe-button__content",
  focus: "pe-button__focus",
  label: "pe-button__label",
  wash: "pe-button__wash",

  // states
  borders: "pe-button--borders",
  disabled: "pe-button--disabled",
  focused: "pe-button--focus",
  inactive: "pe-button--inactive",
  selected: "pe-button--selected"
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "a";
};

var getInitialState = function getInitialState(vnode, createStream) {
  var dom = createStream();
  var focus = createStream(false);
  var inactive = createStream(false);
  var mouseover = createStream(false);
  return {
    dom: dom,
    focus: focus,
    inactive: inactive,
    mouseover: mouseover,
    redrawOnUpdate: createStream.merge([dom, focus, inactive, mouseover])
  };
};

var onMount = function onMount(vnode) {
  if (!vnode.dom) {
    return;
  }
  var state = vnode.state;
  state.dom(vnode.dom);

  if (__WEBPACK_IMPORTED_MODULE_0_polythene_core__["f" /* isClient */]) {
    var onFocus = function onFocus() {
      return state.focus(!state.mouseover());
    };
    var onBlur = function onBlur() {
      return state.focus(false);
    };
    var onMouseOver = function onMouseOver() {
      return state.mouseover(true);
    };
    var onMouseOut = function onMouseOut() {
      return state.mouseover(false);
    };

    vnode.dom.addEventListener("focus", onFocus, false);
    vnode.dom.addEventListener("blur", onBlur, false);
    vnode.dom.addEventListener("mouseover", onMouseOver, false);
    vnode.dom.addEventListener("mouseout", onMouseOut, false);

    state.removeEventListeners = function () {
      return vnode.dom.removeEventListener("focus", onFocus, false), vnode.dom.removeEventListener("blur", onBlur, false), vnode.dom.removeEventListener("mouseover", onBlur, false), vnode.dom.removeEventListener("mouseout", onMouseOut, false);
    };
  }
};

var onUnMount = function onUnMount(vnode) {
  return vnode.state.removeEventListeners && vnode.state.removeEventListeners();
};

var createProps = function createProps(vnode, _ref) {
  var _ref2;

  var k = _ref.keys;

  var state = vnode.state;
  var attrs = vnode.attrs;
  var disabled = attrs.disabled;
  var inactive = attrs.inactive || state.inactive();
  var onClickHandler = attrs.events && attrs.events[k.onclick];
  var onKeyDownHandler = attrs.events && attrs.events[k.onkeydown] || onClickHandler;

  var handleInactivate = function handleInactivate() {
    return state.inactive(true), setTimeout(function () {
      return state.inactive(false);
    }, attrs.inactivate * 1000);
  };

  return _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(attrs, { add: [k.formaction, "type"], remove: ["style"] }), // Set style on content, not on component
  {
    className: [attrs.parentClassName || classes.component, attrs.selected ? classes.selected : null, disabled ? classes.disabled : null, inactive ? classes.inactive : null, attrs.borders ? classes.borders : null, state.focus() ? classes.focused : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  }, inactive ? null : (_ref2 = {}, _defineProperty(_ref2, k.tabindex, disabled || inactive ? -1 : attrs[k.tabindex] || 0), _defineProperty(_ref2, k.onclick, function (e) {
    return attrs.inactivate !== undefined && handleInactivate(), onClickHandler && onClickHandler(e), true;
  }), _defineProperty(_ref2, k.onkeydown, function (e) {
    if (e.key === "Enter" && state.focus()) {
      state.focus(false);
      if (onKeyDownHandler) {
        onKeyDownHandler(e);
      }
    }
  }), _ref2), attrs.events, attrs.url, disabled ? { disabled: true } : null);
};

var createContent = function createContent(vnode, _ref3) {
  var _h;

  var h = _ref3.renderer,
      k = _ref3.keys,
      Ripple = _ref3.Ripple;

  var state = vnode.state;
  var attrs = vnode.attrs;
  var noink = attrs.ink !== undefined && attrs.ink === false;
  var disabled = attrs.disabled;
  var children = attrs.children || vnode.children;
  var label = attrs.content ? attrs.content : attrs.label ? _typeof(attrs.label) === "object" ? attrs.label : h("div", { className: classes.label }, attrs.label) : children ? children : null;
  var noWash = disabled || attrs.wash !== undefined && !attrs.wash;
  return label ? h("div", (_h = {}, _defineProperty(_h, k.class, classes.content), _defineProperty(_h, "style", attrs.style), _h), [attrs.shadowComponent // "protected" option, used by raised-button
  ? attrs.shadowComponent : null,
  // Ripple
  disabled || noink ? null : Ripple /*&& state.dom()*/
  ? h(Ripple, _extends({}, {
    key: "ripple",
    target: state.dom()
  }, attrs.ripple)) : null,
  // hover
  noWash ? null : h("div", { key: "wash", className: classes.wash }),
  // focus
  disabled ? null : h("div", { key: "focus", className: classes.focus }), label]) : null;
};

var button = Object.freeze({
	getElement: getElement,
	getInitialState: getInitialState,
	onMount: onMount,
	onUnMount: onUnMount,
	createProps: createProps,
	createContent: createContent
});

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

var touch_height = __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].unit_touch_height;
var height = 36;

var vars$1 = {
  margin_h: __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].grid_unit,
  border_radius: __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].unit_item_border_radius,
  font_size: 14,
  font_weight: 500,
  outer_padding_v: (touch_height - height) / 2,
  padding_h: 2 * __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].grid_unit,
  padding_v: 11,
  min_width: 8 * __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].grid_unit_component,
  text_transform: "uppercase",
  border_width: 0, // no border in MD, but used to correctly set the height when a theme does set a border
  animation_duration: __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].animation_duration,

  color_light_background: "transparent",
  color_light_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_primary),
  color_light_hover_background: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_background_hover),
  color_light_focus_background: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_background_hover),
  color_light_active_background: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_background_active),
  color_light_disabled_background: "transparent",
  color_light_disabled_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_disabled),

  // border colors may be set in theme; disabled by default
  // color_light_border:              "transparent", // only specify this variable to get all 4 states
  // color_light_hover_border:        "transparent",
  // color_light_active_border:       "transparent",
  // color_light_disabled_border:     "transparent",

  color_dark_background: "transparent",
  color_dark_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_primary),
  color_dark_hover_background: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_background_hover),
  color_dark_focus_background: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_background_hover),
  color_dark_active_background: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_background_active),
  color_dark_disabled_background: "transparent",
  color_dark_disabled_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_disabled)

  // border colors may be set in theme; disabled by default
  // color_dark_border:               "transparent", // only specify this variable to get all 4 states
  // color_dark_hover_border:         "transparent",
  // color_dark_active_border:        "transparent",
  // color_dark_disabled_border:      "transparent"
};




/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SVG; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core_svg__ = __webpack_require__(35);



var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var SVG = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["b" /* ViewComponent */])(_extends({}, __WEBPACK_IMPORTED_MODULE_1_polythene_core_svg__["a" /* coreSVG */]));

SVG.displayName = "SVG";




/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return menu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return classes$1; });
/* unused harmony export vars */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core_list_tile__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_theme__ = __webpack_require__(2);




var classes$1 = {
  component: "pe-menu",

  // elements
  content: "pe-menu__content",
  placeholder: "pe-menu__placeholder",
  target: "pe-menu__target",

  // states
  permanent: "pe-menu--permanent",
  visible: "pe-menu--visible",
  width_auto: "pe-menu--width-auto",
  width_n: "pe-menu--width-",

  // lookup
  listTile: __WEBPACK_IMPORTED_MODULE_1_polythene_core_list_tile__["a" /* classes */].component,
  selectedListTile: __WEBPACK_IMPORTED_MODULE_1_polythene_core_list_tile__["a" /* classes */].selected
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

var SHADOW_Z = 1;
var OFFSET_V = -8;
var DEFAULT_OFFSET_H = 0;
var MIN_SIZE = 1.5;

var positionMenu = function positionMenu(state, attrs) {
  if (__WEBPACK_IMPORTED_MODULE_0_polythene_core__["g" /* isServer */]) {
    return;
  }
  var targetEl = document.querySelector(attrs.target);
  if (!targetEl) {
    return;
  }
  var offsetH = attrs.offset !== undefined ? attrs.offset : DEFAULT_OFFSET_H;
  var menuEl = state.dom();
  if (!menuEl) {
    return;
  }
  var contentEl = state.dom().querySelector("." + classes$1.content);
  var origin = attrs.origin || "top-left";
  var reposition = attrs.reposition === false ? false : true;
  var positionOffset = 0;
  if (reposition) {
    var firstItem = contentEl.querySelectorAll("." + classes$1.listTile)[0];
    var selectedItem = contentEl.querySelector("." + classes$1.selectedListTile);
    if (firstItem && selectedItem) {
      // calculate v position: menu should shift upward relative to the first item
      var firstItemRect = firstItem.getBoundingClientRect();
      var selectedItemRect = selectedItem.getBoundingClientRect();
      positionOffset = selectedItemRect.top - firstItemRect.top;
    }
    // align to middle of target
    var alignEl = selectedItem || firstItem;
    var alignRect = alignEl.getBoundingClientRect();
    var _targetRect = targetEl.getBoundingClientRect();
    var heightDiff = alignRect.height - _targetRect.height;
    positionOffset += heightDiff / 2;
  }
  var targetRect = targetEl.getBoundingClientRect();
  if (menuEl.parentNode) {
    var parentRect = menuEl.parentNode.getBoundingClientRect();
    var alignLeft = function alignLeft() {
      return menuEl.style.left = targetRect.left - parentRect.left + offsetH + "px";
    };
    var alignRight = function alignRight() {
      return menuEl.style.right = targetRect.right - parentRect.right + offsetH + "px";
    };
    var alignTop = function alignTop() {
      return menuEl.style.top = targetRect.top - parentRect.top - positionOffset + OFFSET_V + "px";
    };
    var alignBottom = function alignBottom() {
      return menuEl.style.bottom = targetRect.bottom - parentRect.bottom - positionOffset + "px";
    };
    var alignFn = {
      "top-left": function topLeft() {
        return alignTop() && alignLeft();
      },
      "top-right": function topRight() {
        return alignTop() && alignRight();
      },
      "bottom-left": function bottomLeft() {
        return alignBottom() && alignLeft();
      },
      "bottom-right": function bottomRight() {
        return alignBottom() && alignRight();
      }
    };
    alignFn[origin].call();
  }
};

var showMenu = function showMenu(state, attrs) {
  if (attrs.onChange) {
    attrs.onChange({ visible: false, transitioning: true });
  }
  positionMenu(state, attrs);
  var transitions = attrs.transitions;
  var el = state.dom();
  return Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["n" /* show */])(_extends({}, attrs, transitions ? transitions.show(el, attrs) : {
    el: el,
    showClass: classes$1.visible
  })).then(function () {
    if (attrs.onChange) {
      attrs.onChange({ visible: true, transitioning: false });
    }
    if (attrs.didShow) {
      attrs.didShow(attrs.id);
    }
    state.visible(false);
  });
};

var hideMenu = function hideMenu(state, attrs) {
  if (attrs.onChange) {
    attrs.onChange({ visible: true, transitioning: true });
  }
  var transitions = attrs.transitions;
  var el = state.dom();
  return Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["e" /* hide */])(_extends({}, attrs, transitions ? transitions.hide(el, attrs) : {
    el: el,
    showClass: classes$1.visible
  })).then(function () {
    if (attrs.onChange) {
      attrs.onChange({ visible: false, transitioning: false });
    }
    if (attrs.didHide) {
      attrs.didHide(attrs.id);
    }
    state.visible(false);
  });
};

var unifySize = function unifySize(size) {
  return size < MIN_SIZE ? MIN_SIZE : size;
};

var widthClass = function widthClass(size) {
  return classes$1.width_n + size.toString().replace(".", "-");
};

var handleSubscriptions = function handleSubscriptions(vnode, which) {
  var state = vnode.state;
  var attrs = vnode.attrs;

  if (which === "mount") {
    Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["o" /* subscribe */])("resize", state.update);
    Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["o" /* subscribe */])("keydown", state.handleEscape);
    setTimeout(function () {
      state.activateDismissTap();
      showMenu(state, attrs);
    }, 0);
  } else {
    Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["q" /* unsubscribe */])("resize", state.update);
    Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["q" /* unsubscribe */])("keydown", state.handleEscape);
    state.deActivateDismissTap();
  }
};

var onMount = function onMount(vnode) {
  if (!vnode.dom) {
    return;
  }
  var state = vnode.state;
  var attrs = vnode.attrs;
  state.dom(vnode.dom);

  if (!attrs.permanent) {
    state.handleDismissTap = function (e) {
      if (e.target === state.dom()) {
        return;
      }
      if (e.defaultPrevented) {
        // clicked on .pe-menu__content
        hideMenu(state, attrs);
      } else {
        hideMenu(state, _extends({}, attrs, {
          hideDelay: 0
        }));
      }
    };

    state.update = function () {
      positionMenu(state, attrs);
    };

    state.activateDismissTap = function () {
      document.body.addEventListener("click", state.handleDismissTap);
    };

    state.deActivateDismissTap = function () {
      document.body.removeEventListener("click", state.handleDismissTap);
    };

    state.handleEscape = function (e) {
      if (e.key === "Escape") {
        hideMenu(state, _extends({}, attrs, { hideDelay: 0 }));
      }
    };

    handleSubscriptions(vnode, "mount");
  }
};

var onUnMount = function onUnMount(vnode) {
  var attrs = vnode.attrs;
  if (!attrs.permanent) {
    handleSubscriptions(vnode, "unmount");
  }
};

var getInitialState = function getInitialState(vnode, createStream) {
  var dom = createStream();
  var visible = createStream(false);
  return {
    dom: dom,
    visible: visible,
    activateDismissTap: undefined, // set in onMount
    deActivateDismissTap: undefined, // set in onMount
    handleDismissTap: undefined, // set in onMount
    handleEscape: undefined, // set in onMount
    update: undefined, // set in onMount
    redrawOnUpdate: createStream.merge([visible])
  };
};

var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var attrs = vnode.attrs;
  return _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    className: [classes$1.component, attrs.permanent ? classes$1.permanent : null, attrs.target ? classes$1.target : null, attrs.size ? widthClass(unifySize(attrs.size)) : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  });
};

var createContent = function createContent(vnode, _ref2) {
  var _h;

  var h = _ref2.renderer,
      k = _ref2.keys,
      Shadow = _ref2.Shadow;

  var attrs = vnode.attrs;
  var z = attrs.z !== undefined ? attrs.z : SHADOW_Z;
  return h("div", (_h = {
    className: classes$1.content
  }, _defineProperty(_h, k.onclick, function (e) {
    return e.preventDefault();
  }), _defineProperty(_h, "style", attrs.style), _h), [z > 0 && h(Shadow, {
    z: z,
    animated: true
  }), attrs.content ? attrs.content : vnode.children]);
};

var menu = Object.freeze({
	getElement: getElement,
	onMount: onMount,
	onUnMount: onUnMount,
	getInitialState: getInitialState,
	createProps: createProps,
	createContent: createContent
});

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

var vars$1 = {
  sizes: [1, 1.5, 2, 3, 4, 5, 6, 7],
  min_size: 1.5,
  max_size_small_screen: 5,
  size_factor: __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].grid_unit_menu,
  border_radius: __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].unit_block_border_radius,

  color_light_background: rgba(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].color_light_background),
  color_dark_background: rgba(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].color_dark_background)
  // text colors are set by content, usually list tiles
};




/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogPane; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core_dialog_pane__ = __webpack_require__(41);



var DialogPane = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(__WEBPACK_IMPORTED_MODULE_1_polythene_core_dialog_pane__["a" /* coreDialogPane */]);

DialogPane.displayName = "DialogPane";




/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RaisedButton; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core_raised_button__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_button__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_shadow__ = __webpack_require__(4);





var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var RaisedButton = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(_extends({}, __WEBPACK_IMPORTED_MODULE_1_polythene_core_raised_button__["a" /* coreRaisedButton */], {
  createProps: function createProps(vnode, args) {
    return __WEBPACK_IMPORTED_MODULE_1_polythene_core_raised_button__["a" /* coreRaisedButton */].createProps(vnode, _extends(args, { Shadow: __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_shadow__["a" /* Shadow */] }));
  },
  createContent: function createContent(vnode, args) {
    return __WEBPACK_IMPORTED_MODULE_1_polythene_core_raised_button__["a" /* coreRaisedButton */].createContent(vnode, _extends(args, { Shadow: __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_shadow__["a" /* Shadow */] }));
  },
  component: __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_button__["a" /* Button */]
}));

RaisedButton.displayName = "RaisedButton";




/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return notificationInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return classes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return vars$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return transitions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_utilities__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_theme__ = __webpack_require__(2);




var classes = {
  component: "pe-notification",

  // elements
  action: "pe-notification__action",
  content: "pe-notification__content",
  holder: "pe-notification__holder",
  placeholder: "pe-notification__placeholder",
  title: "pe-notification__title",

  // states
  hasContainer: "pe-notification--container",
  horizontal: "pe-notification--horizontal",
  multilineTitle: "pe-notification__title--multiline",
  vertical: "pe-notification--vertical"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DEFAULT_TIME_OUT = 3;

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

var pauseInstance = function pauseInstance(state) {
  state.paused(true);
  if (state.timer) {
    state.timer.pause();
  }
};

var unpauseInstance = function unpauseInstance(state) {
  state.paused(false);
  if (state.timer) {
    state.timer.resume();
  }
};

var stopTimer = function stopTimer(state) {
  if (state.timer) {
    state.timer.stop();
  }
};

var prepareShow = function prepareShow(state, attrs) {
  if (!state.containerEl && __WEBPACK_IMPORTED_MODULE_0_polythene_core__["f" /* isClient */]) {
    // attrs.holderSelector is passed as option to Multiple
    state.containerEl = document.querySelector(attrs.containerSelector || attrs.holderSelector);
  }
  if (!state.containerEl && __WEBPACK_IMPORTED_MODULE_0_polythene_core__["f" /* isClient */]) {
    console.error("No container element found"); // eslint-disable-line no-console
  }
  if (attrs.containerSelector && state.containerEl) {
    state.containerEl.classList.add(classes.hasContainer);
  }
};

var showInstance = function showInstance(state, attrs) {
  if (state.transitioning()) {
    return Promise.resolve();
  }
  state.transitioning(true);
  stopTimer(state);
  prepareShow(state, attrs);
  var id = attrs.instanceId;
  var transitions = attrs.transitions;
  return Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["n" /* show */])(_extends({}, attrs, transitions.show(_extends({}, attrs, {
    containerEl: state.containerEl,
    el: state.el
  })))).then(function () {
    if (attrs.multipleDidShow) {
      attrs.multipleDidShow(id); // this will call attrs.didShow
    }
    // set timer to hide in a few seconds
    var timeout = attrs.timeout;
    if (timeout === 0) {
      // do not time out
    } else {
      var timeoutSeconds = timeout !== undefined ? timeout : DEFAULT_TIME_OUT;
      state.timer.start(function () {
        hideInstance(state, attrs);
      }, timeoutSeconds);
    }
    state.visible(true);
    state.transitioning(false);
  });
};

var hideInstance = function hideInstance(state, attrs) {
  if (state.transitioning()) {
    return Promise.resolve();
  }
  state.transitioning(true);
  stopTimer(state);
  var id = attrs.instanceId;
  var transitions = attrs.transitions;
  return Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["e" /* hide */])(_extends({}, attrs, transitions.hide(_extends({}, attrs, {
    containerEl: state.containerEl,
    el: state.el
  })))).then(function () {
    if (attrs.multipleDidHide) {
      attrs.multipleDidHide(id); // this will call attrs.didHide
    }
    state.visible(false);
    state.transitioning(false);
  });
};

var setTitleStyles = function setTitleStyles(titleEl) {
  if (__WEBPACK_IMPORTED_MODULE_0_polythene_core__["g" /* isServer */]) return;
  var height = titleEl.getBoundingClientRect().height;
  var lineHeight = parseInt(window.getComputedStyle(titleEl).lineHeight, 10);
  var paddingTop = parseInt(window.getComputedStyle(titleEl).paddingTop, 10);
  var paddingBottom = parseInt(window.getComputedStyle(titleEl).paddingBottom, 10);
  if (height > lineHeight + paddingTop + paddingBottom) {
    titleEl.classList.add(classes.multilineTitle);
  }
};

var getInitialState = function getInitialState(vnode, createStream) {
  var transitioning = createStream(false);
  var paused = createStream(false);
  var mounted = createStream(false);
  var visible = createStream(false);
  return {
    cleanUp: undefined,
    containerEl: undefined,
    dismissEl: undefined,
    el: undefined,
    timer: new __WEBPACK_IMPORTED_MODULE_1_polythene_utilities__["a" /* Timer */](),
    paused: paused,
    transitioning: transitioning,
    visible: visible,
    mounted: mounted,
    redrawOnUpdate: createStream.merge([visible])
  };
};

var onMount = function onMount(vnode) {
  var dom = vnode.dom;
  if (!dom) {
    return;
  }
  var state = vnode.state;
  var attrs = vnode.attrs;
  state.el = dom;
  var titleEl = state.el.querySelector("." + classes.title);
  if (titleEl) {
    setTitleStyles(titleEl);
  }
  if (attrs.showInstance && !state.visible()) {
    showInstance(state, attrs);
  }
  state.mounted(true);
};

var onUnMount = function onUnMount(vnode) {
  return (
    // vnode.attrs.multipleClear(),
    vnode.state.mounted(false)
  );
};

var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var attrs = vnode.attrs;
  return _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(attrs), _defineProperty({
    className: [classes.component, attrs.tone === "light" ? null : "pe-dark-tone", // default dark tone
    attrs.tone === "light" ? "pe-light-tone" : null, attrs.containerSelector ? classes.hasContainer : null, attrs.layout === "vertical" ? classes.vertical : classes.horizontal, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  }, k.onclick, function (e) {
    return e.preventDefault();
  }));
};

var createContent = function createContent(vnode, _ref2) {
  var h = _ref2.renderer;

  var state = vnode.state;
  var attrs = vnode.attrs;
  if (state.mounted() && !state.transitioning()) {
    if (attrs.hideInstance && state.visible()) {
      hideInstance(state, attrs);
    } else if (attrs.showInstance && !state.visible()) {
      showInstance(state, attrs);
    }
  }
  if (attrs.pauseInstance && !state.paused()) {
    pauseInstance(state, attrs);
  } else if (attrs.unpauseInstance && state.paused()) {
    unpauseInstance(state, attrs);
  }

  return h("div", {
    className: classes.content,
    style: attrs.style
  }, attrs.content || [attrs.title ? h("div", { className: classes.title }, attrs.title) : null, attrs.action ? h("div", { className: classes.action }, attrs.action) : null]);
};

var notificationInstance = Object.freeze({
	getElement: getElement,
	getInitialState: getInitialState,
	onMount: onMount,
	onUnMount: onUnMount,
	createProps: createProps,
	createContent: createContent
});

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

var buttonPaddingH = 8; // padding, inner text space

var vars$1 = {
  width: 274,
  min_height: 80,
  border_radius: __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].unit_block_border_radius,
  title_padding_h: buttonPaddingH,
  title_single_padding_v: 14,
  title_multi_padding_v: 20,
  side_padding: 24 - buttonPaddingH,
  font_size: 14,
  line_height: 20,

  color_light_background: rgba(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].color_light_background),
  color_light_text: rgba(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].blend_light_dark_primary),

  color_dark_background: rgba(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].color_dark_background),
  color_dark_text: rgba(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].blend_light_text_primary)
};

var ANIMATION_DURATION = .5;

var show$1 = function show$$1(_ref) {
  var el = _ref.el,
      showDuration = _ref.showDuration,
      showDelay = _ref.showDelay;
  return {
    el: el,
    showDuration: showDuration || ANIMATION_DURATION,
    showDelay: showDelay || 0,
    beforeShow: function beforeShow() {
      return el.style.opacity = 0;
    },
    show: function show$$1() {
      return el.style.opacity = 1;
    }
  };
};

var hide$1 = function hide$$1(_ref2) {
  var el = _ref2.el,
      hideDuration = _ref2.hideDuration,
      hideDelay = _ref2.hideDelay;
  return {
    el: el,
    hideDuration: hideDuration || ANIMATION_DURATION,
    hideDelay: hideDelay || 0,
    hide: function hide$$1() {
      return el.style.opacity = 0;
    }
  };
};

var transitions = {
  show: show$1,
  hide: hide$1
};




/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadioButton; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core_radio_button__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_core_selection_control__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_icon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_mithril_icon_button__ = __webpack_require__(6);






var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var ViewControl = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["b" /* ViewComponent */])(_extends$2({}, __WEBPACK_IMPORTED_MODULE_2_polythene_core_selection_control__["c" /* viewControl */], {
  createContent: function createContent(vnode, args) {
    return __WEBPACK_IMPORTED_MODULE_2_polythene_core_selection_control__["c" /* viewControl */].createContent(vnode, _extends$2(args, { Icon: __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_icon__["a" /* Icon */], IconButton: __WEBPACK_IMPORTED_MODULE_4_polythene_mithril_icon_button__["a" /* IconButton */] }));
  }
}));

ViewControl.displayName = "ViewControl";

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var SelectionControl = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(_extends$1({}, __WEBPACK_IMPORTED_MODULE_2_polythene_core_selection_control__["a" /* coreSelectionControl */], {
  createContent: function createContent(vnode, args) {
    return __WEBPACK_IMPORTED_MODULE_2_polythene_core_selection_control__["a" /* coreSelectionControl */].createContent(vnode, _extends$1(args, { ViewControl: ViewControl }));
  }
}));

SelectionControl.displayName = "SelectionControl";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var RadioButton = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(_extends({}, __WEBPACK_IMPORTED_MODULE_1_polythene_core_radio_button__["a" /* coreRadioButton */], {
  component: SelectionControl
}));

RadioButton.displayName = "RadioButton";




/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextField; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core_textfield__ = __webpack_require__(60);



var TextField = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(__WEBPACK_IMPORTED_MODULE_1_polythene_core_textfield__["a" /* coreTextField */]);

TextField.displayName = "TextField";




/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_index__ = __webpack_require__(26);


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_mithril__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_css_dist_polythene_css__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_css_dist_polythene_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_polythene_css_dist_polythene_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_css_dist_polythene_typography_css__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_css_dist_polythene_typography_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_polythene_css_dist_polythene_typography_css__);







var linkIconSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z\"/></svg>";

var App = {
  view: function view() {
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".page", [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(".row", [__WEBPACK_IMPORTED_MODULE_0_mithril___default()("h1", "Polythene for Mithril"), __WEBPACK_IMPORTED_MODULE_0_mithril___default()("h2", "CSS Test")]), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".row", [__WEBPACK_IMPORTED_MODULE_0_mithril___default()("h2", "SVG"), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".component", __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_mithril__["l" /* SVG */], {
      content: __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.trust(linkIconSVG),
      className: "themed-svg"
    }))]), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".row", [__WEBPACK_IMPORTED_MODULE_0_mithril___default()("h2", "Raised Button"), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".component", __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_mithril__["k" /* RaisedButton */], {
      label: "Button"
    }))]), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".row", [__WEBPACK_IMPORTED_MODULE_0_mithril___default()("h2", "Regular Button"), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".component", __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_mithril__["a" /* Button */], {
      label: "Button"
    }))]), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".row", [__WEBPACK_IMPORTED_MODULE_0_mithril___default()("h2", "Icon"), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".component", __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_mithril__["f" /* Icon */], {
      size: "large",
      src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png",
      avatar: true
    }))]), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".row", [__WEBPACK_IMPORTED_MODULE_0_mithril___default()("h2", "Icon Button"), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".component", __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_mithril__["g" /* IconButton */], {
      icon: {
        svg: __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.trust(linkIconSVG)
      }
    }))]), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".row", [__WEBPACK_IMPORTED_MODULE_0_mithril___default()("h2", "FAB"), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".component", __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_mithril__["e" /* FAB */], {
      icon: {
        svg: __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.trust(linkIconSVG)
      }
    }))]), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".row", [__WEBPACK_IMPORTED_MODULE_0_mithril___default()("h2", "Tabs"), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".component", __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_mithril__["p" /* Tabs */], {
      tabs: [{ label: "New" }, { label: "Favorites" }, { label: "Saved" }],
      autofit: true
    }))]), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".row", [__WEBPACK_IMPORTED_MODULE_0_mithril___default()("h2", "Card"), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".component", __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_mithril__["b" /* Card */], {
      className: "themed-card",
      tone: "dark",
      content: [{
        primary: {
          title: "Get Ready",
          subtitle: "2 Unlimited",
          media: {
            ratio: "square",
            size: "medium",
            content: __WEBPACK_IMPORTED_MODULE_0_mithril___default()("img", {
              src: "https://lastfm-img2.akamaized.net/i/u/avatar170s/ca297951611442bda8ea55fba764c757"
            })
          }
        }
      }, {
        actions: {
          content: [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_mithril__["a" /* Button */], {
            label: "Listen now"
          })]
        }
      }]
    }))]), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".row", [__WEBPACK_IMPORTED_MODULE_0_mithril___default()("h2", "Checkbox"), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".component", __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_mithril__["c" /* Checkbox */], {
      label: "Label"
    }))]), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".row", [__WEBPACK_IMPORTED_MODULE_0_mithril___default()("h2", "Switch"), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".component", __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_mithril__["o" /* Switch */], {
      label: "Label"
    }))]), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".row", [__WEBPACK_IMPORTED_MODULE_0_mithril___default()("h2", "Radio Button"), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".component", __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_mithril__["j" /* RadioGroup */], {
      name: "defaultChecked",
      content: [{
        value: "One",
        label: "One"
      }, {
        value: "Two",
        label: "Two",
        defaultChecked: true
      }]
    }))]), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".row", [__WEBPACK_IMPORTED_MODULE_0_mithril___default()("h2", "TextField"), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".component", __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_mithril__["q" /* TextField */], {
      defaultValue: "abC",
      validate: function validate(value) {
        return value !== value.toLowerCase() ? {
          valid: false,
          error: "Only use lowercase characters."
        } : null;
      },
      validateAtStart: true
    }))]), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".row", [__WEBPACK_IMPORTED_MODULE_0_mithril___default()("h2", "Slider"), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".component", __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_mithril__["m" /* Slider */], {
      defaultValue: 50
    }))]), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".row", [__WEBPACK_IMPORTED_MODULE_0_mithril___default()("h2", "Spinner"), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".component", __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_mithril__["h" /* MaterialDesignSpinner */], {
      permanent: true
    }))]), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".row", [__WEBPACK_IMPORTED_MODULE_0_mithril___default()("h2", "Dialog"), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".component", __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_mithril__["k" /* RaisedButton */], {
      label: "Show dialog",
      events: {
        onclick: function onclick() {
          return __WEBPACK_IMPORTED_MODULE_1_polythene_mithril__["d" /* Dialog */].show({
            /* note the Dialog component is below the other elements in the app */
            title: "Hello",
            body: "Click outside to close, or press ESCAPE",
            backdrop: true
          });
        }
      }
    }))]), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".row", [__WEBPACK_IMPORTED_MODULE_0_mithril___default()("h2", "Notification"), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".component", __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_mithril__["k" /* RaisedButton */], {
      label: "Show Notification",
      events: {
        onclick: function onclick() {
          return __WEBPACK_IMPORTED_MODULE_1_polythene_mithril__["i" /* Notification */].show({
            /* note the Notification component is below the other elements in the app */
            title: "Hello"
          });
        }
      }
    }))]), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".row", [__WEBPACK_IMPORTED_MODULE_0_mithril___default()("h2", "Snackbar"), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".component", __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_mithril__["k" /* RaisedButton */], {
      label: "Show Snackbar",
      events: {
        onclick: function onclick() {
          return __WEBPACK_IMPORTED_MODULE_1_polythene_mithril__["n" /* Snackbar */].show({
            /* note the Snackbar component is below the other elements in the app */
            title: "Hello"
          });
        }
      }
    }))]), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_mithril__["d" /* Dialog */]), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_mithril__["n" /* Snackbar */]), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_mithril__["i" /* Notification */])]);
  }
};

__WEBPACK_IMPORTED_MODULE_0_mithril___default.a.mount(document.querySelector("#root"), App);

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(1);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_mithril_button__ = __webpack_require__(7);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1_polythene_mithril_button__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_card__ = __webpack_require__(32);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_card__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_checkbox__ = __webpack_require__(37);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_checkbox__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_mithril_dialog__ = __webpack_require__(39);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4_polythene_mithril_dialog__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_polythene_mithril_dialog_pane__ = __webpack_require__(20);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_polythene_mithril_fab__ = __webpack_require__(42);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_6_polythene_mithril_fab__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_polythene_mithril_icon__ = __webpack_require__(3);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_7_polythene_mithril_icon__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_polythene_mithril_icon_button__ = __webpack_require__(6);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_8_polythene_mithril_icon_button__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_polythene_mithril_ios_spinner__ = __webpack_require__(45);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_polythene_mithril_list__ = __webpack_require__(47);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_polythene_mithril_list_tile__ = __webpack_require__(11);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_polythene_mithril_material_design_spinner__ = __webpack_require__(49);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_12_polythene_mithril_material_design_spinner__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_polythene_mithril_material_design_progress_spinner__ = __webpack_require__(51);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_polythene_mithril_menu__ = __webpack_require__(53);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_polythene_mithril_notification__ = __webpack_require__(54);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_15_polythene_mithril_notification__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_polythene_mithril_radio_button__ = __webpack_require__(23);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_polythene_mithril_radio_group__ = __webpack_require__(56);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_17_polythene_mithril_radio_group__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_polythene_mithril_raised_button__ = __webpack_require__(21);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_18_polythene_mithril_raised_button__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_polythene_mithril_ripple__ = __webpack_require__(10);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_polythene_mithril_search__ = __webpack_require__(58);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_polythene_mithril_shadow__ = __webpack_require__(4);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_polythene_mithril_slider__ = __webpack_require__(61);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_22_polythene_mithril_slider__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_polythene_mithril_snackbar__ = __webpack_require__(63);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_23_polythene_mithril_snackbar__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_polythene_mithril_svg__ = __webpack_require__(18);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_24_polythene_mithril_svg__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_polythene_mithril_switch__ = __webpack_require__(65);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_25_polythene_mithril_switch__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_polythene_mithril_tabs__ = __webpack_require__(67);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_26_polythene_mithril_tabs__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_polythene_mithril_textfield__ = __webpack_require__(24);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_27_polythene_mithril_textfield__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_polythene_mithril_toolbar__ = __webpack_require__(69);
/* unused harmony namespace reexport */































/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return vars; });
/* unused harmony export typographyStyles */
/* unused harmony export addTypography */
/* unused harmony export layoutStyles */
/* unused harmony export addLayoutStyles */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_utilities__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_core_css__ = __webpack_require__(9);




// Global style variables

//const isTablet = window.innerWidth >= 600;
var isDesktop = __WEBPACK_IMPORTED_MODULE_0_polythene_core__["f" /* isClient */] ? window.innerWidth >= 1024 : true;

var grid_unit = 4;
var grid_unit_component = 8;

var animation_curve_slow_in_fast_out = "cubic-bezier(.4, 0, .2, 1)";
var animation_curve_slow_in_linear_out = "cubic-bezier(0, 0, .2, 1)";
var animation_curve_linear_in_fast_out = "cubic-bezier(.4, 0, 1, 1)";

var vars = {
  // grid
  grid_unit: grid_unit,
  grid_unit_component: grid_unit_component,
  grid_unit_menu: 56,
  grid_unit_icon_button: 6 * grid_unit_component, // 48

  // common sizes
  unit_block_border_radius: 2,
  unit_item_border_radius: 2,
  unit_indent: 72,
  unit_side_padding: isDesktop ? 24 : 16,

  // buttons
  unit_touch_height: 48,
  unit_icon_size_small: 2 * grid_unit_component, // 16
  unit_icon_size: 3 * grid_unit_component, // 24
  unit_icon_size_medium: 4 * grid_unit_component, // 32
  unit_icon_size_large: 5 * grid_unit_component, // 40

  // screen dimensions
  unit_screen_size_extra_large: 1280,
  unit_screen_size_large: 960,
  unit_screen_size_medium: 480,
  unit_screen_size_small: 320,

  // transitions
  animation_duration: ".18s",
  animation_curve_slow_in_fast_out: animation_curve_slow_in_fast_out,
  animation_curve_slow_in_linear_out: animation_curve_slow_in_linear_out,
  animation_curve_linear_in_fast_out: animation_curve_linear_in_fast_out,
  animation_curve_default: "ease-out",

  // font
  font_weight_light: 300,
  font_weight_normal: 400,
  font_weight_medium: 500,
  font_weight_bold: 700,
  font_size_title: 20,
  line_height: 1.3,

  // base colors
  color_primary: "33, 150, 243", // blue 500
  color_primary_active: "30, 136, 229", // blue 600
  color_primary_dark: "25, 118, 210", // blue 700
  color_primary_faded: "100, 181, 249", // blue 300
  color_primary_foreground: "255, 255, 255",

  color_light_background: "255, 255, 255",
  color_light_foreground: "0, 0, 0",
  color_dark_background: "34, 34, 34",
  color_dark_foreground: "255, 255, 255",

  // blends
  blend_light_text_primary: .87,
  blend_light_text_regular: .73,
  blend_light_text_secondary: .54,
  blend_light_text_tertiary: .40,
  blend_light_text_disabled: .26,
  blend_light_border_light: .11,
  blend_light_background_active: .14,
  blend_light_background_hover: .06,
  blend_light_background_hover_medium: .12, // for the lighter tinted icon buttons
  blend_light_background_disabled: .09,
  blend_light_overlay_background: .3,

  blend_dark_text_primary: 1,
  blend_dark_text_regular: .87,
  blend_dark_text_secondary: .70,
  blend_dark_text_tertiary: .40,
  blend_dark_text_disabled: .26,
  blend_dark_border_light: .10,
  blend_dark_background_active: .14,
  blend_dark_background_hover: .08,
  blend_dark_background_hoverMedium: .12, // for the lighter tinted icon buttons
  blend_dark_background_disabled: .12,
  blend_dark_overlay_background: .3,

  // css vendor prefixes
  prefixes_animation: ["o", "moz", "webkit"],
  prefixes_appearance: ["o", "moz", "ms", "webkit"],
  prefixes_background_size: ["o", "moz", "webkit"],
  prefixes_box_shadow: ["moz", "webkit"],
  prefixes_keyframes: ["o", "moz", "webkit"],
  prefixes_transform: ["o", "moz", "ms", "webkit"],
  prefixes_transition: ["o", "moz", "webkit"],
  prefixes_user_select: ["moz", "ms", "webkit"],

  // breakpoints
  breakpoint_small_handset_portrait: 0,
  breakpoint_medium_handset_portrait: 360,
  breakpoint_large_handset_portrait: 400,
  breakpoint_small_tablet_portrait: 600,
  breakpoint_large_tablet_portrait: 720,
  // landscape
  breakpoint_small_handset_landscape: 480,
  breakpoint_medium_handset_landscape: 600,
  breakpoint_large_handset_landscape: 720,

  // environment
  env_tablet: __WEBPACK_IMPORTED_MODULE_0_polythene_core__["f" /* isClient */] ? window.innerWidth >= 600 : false,
  env_desktop: __WEBPACK_IMPORTED_MODULE_0_polythene_core__["f" /* isClient */] ? window.innerWidth >= 1024 : true,

  // z-index
  z_menu: 1000,
  z_header_container: 2000,
  z_fixed_header_container: 3000,
  z_notification: 4000,
  z_dialog: 5000
};

var fontSize = 14;

var styles = [{
  " h1, h2, h3, h4, h5, h6, p": {
    margin: 0,
    padding: 0
  }
}, {
  " h1 small, h2 small, h3 small, h4 small, h5 small, h6 small": {
    "font-weight": vars.font_weight_normal,
    "line-height": vars.line_height,
    "letter-spacing": "-0.02em",
    "font-size": "0.6em"
  }
}, {
  " h1": {
    "font-size": "56px",
    "font-weight": vars.font_weight_normal,
    "line-height": vars.line_height,
    "margin-top": "24px",
    "margin-bottom": "24px"
  }
}, {
  " h2": {
    "font-size": "45px",
    "font-weight": vars.font_weight_normal,
    "line-height": "48px",
    "margin-top": "24px",
    "margin-bottom": "24px"
  }
}, {
  " h3": {
    "font-size": "34px",
    "font-weight": vars.font_weight_normal,
    "line-height": "40px",
    "margin-top": "24px",
    "margin-bottom": "24px"
  }
}, {
  " h4": {
    "font-size": "24px",
    "font-weight": vars.font_weight_normal,
    "line-height": "32px",
    "-moz-osx-font-smoothing": "grayscale",
    "margin-top": "24px",
    "margin-bottom": "16px"
  }
}, {
  " h5": {
    "font-size": "20px",
    "font-weight": vars.font_weight_medium,
    "line-height": "1",
    "letter-spacing": "-0.02em",
    "margin-top": "24px",
    "margin-bottom": "16px"
  }
}, {
  " h6": {
    "font-size": "16px",
    "font-weight": vars.font_weight_normal,
    "line-height": "24px",
    "letter-spacing": "0.04em",
    "margin-top": "24px",
    "margin-bottom": "16px"
  }
}, {
  " html, body": {
    "font-size": fontSize + "px",
    "line-height": "20px",
    "font-weight": vars.font_weight_normal
  },
  " p": {
    "font-size": fontSize + "px",
    "font-weight": vars.font_weight_normal,
    "line-height": "24px",
    "letter-spacing": "0",
    "margin-bottom": "16px"
  },
  " blockquote": {
    "position": "relative",
    "font-size": "24px",
    "font-weight": vars.font_weight_normal,
    "font-style": "italic",
    "line-height": vars.line_height,
    "letter-spacing": "0.08em",
    "margin-top": "24px",
    "margin-bottom": "16px"
  },
  " ul, ol": {
    "font-size": fontSize + "px",
    "font-weight": vars.font_weight_normal,
    "line-height": "24px",
    "letter-spacing": 0
  },
  " b, strong": {
    "font-weight": vars.font_weight_medium
  }
}];

var resetStyles = [{
  // apply a natural box layout model to all elements, but allow elements to change
  " html": {
    "box-sizing": "border-box"
  },
  " *, *:before, *:after": {
    "box-sizing": "inherit"
  },
  " *": [
  // remove tap highlight in mobile Safari
  {
    "-webkit-tap-highlight-color": "rgba(0,0,0,0)"
  }, {
    "-webkit-tap-highlight-color": "transparent" // For some Androids
  }],

  // Remove dotted link borders in Firefox
  " a, a:active, a:focus, input:active, *:focus": {
    outline: 0
  },

  // Mobile Safari: override default fading of disabled elements
  " input:disabled": {
    opacity: 1
  }
}];

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var fontParam = "Roboto:400,500,700";

var baseRobotoStyle = [{
  "html, body, button, input, select, textarea": {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif"
  }
}];

var robotoStyles = [{
  "@import": "url(\"https://fonts.googleapis.com/css?family=" + fontParam + "\")"
}].concat(baseRobotoStyle);

var addTypography = function addTypography() {
  Object(__WEBPACK_IMPORTED_MODULE_1_polythene_utilities__["b" /* addWebFont */])("google", "Roboto:400,500,700,400italic:latin");
  __WEBPACK_IMPORTED_MODULE_2_polythene_core_css__["c" /* styler */].add("pe-material-design-typography", resetStyles, baseRobotoStyle, typographyStyles);
};

var typographyStyles = [].concat(_toConsumableArray(robotoStyles), _toConsumableArray(styles), _toConsumableArray(resetStyles));

var flexClasses = [{
  ".layout, .layout.horizontal": __WEBPACK_IMPORTED_MODULE_2_polythene_core_css__["a" /* flex */].layout,
  ".layout.horizontal.inline, .layout.vertical.inline": __WEBPACK_IMPORTED_MODULE_2_polythene_core_css__["a" /* flex */].layoutInline,
  ".layout.horizontal": __WEBPACK_IMPORTED_MODULE_2_polythene_core_css__["a" /* flex */].layoutHorizontal,
  ".layout.horizontal.reverse": __WEBPACK_IMPORTED_MODULE_2_polythene_core_css__["a" /* flex */].layoutHorizontalReverse,
  ".layout.vertical": __WEBPACK_IMPORTED_MODULE_2_polythene_core_css__["a" /* flex */].layoutVertical,
  ".layout.vertical.reverse": __WEBPACK_IMPORTED_MODULE_2_polythene_core_css__["a" /* flex */].layoutVerticalReverse,
  ".layout.wrap": __WEBPACK_IMPORTED_MODULE_2_polythene_core_css__["a" /* flex */].layoutWrap,
  ".layout.wrap.reverse": __WEBPACK_IMPORTED_MODULE_2_polythene_core_css__["a" /* flex */].layoutWrapReverse,
  ".flex": __WEBPACK_IMPORTED_MODULE_2_polythene_core_css__["a" /* flex */].flex(1),
  ".span.flex": { "display": "block" }, // for IE 10
  ".flex.auto-vertical": __WEBPACK_IMPORTED_MODULE_2_polythene_core_css__["a" /* flex */].flexAutoVertical,
  ".flex.auto": __WEBPACK_IMPORTED_MODULE_2_polythene_core_css__["a" /* flex */].flexAuto,
  ".flex.none": __WEBPACK_IMPORTED_MODULE_2_polythene_core_css__["a" /* flex */].flexIndex("none"),
  ".flex.one": __WEBPACK_IMPORTED_MODULE_2_polythene_core_css__["a" /* flex */].flexIndex(1),
  ".flex.two": __WEBPACK_IMPORTED_MODULE_2_polythene_core_css__["a" /* flex */].flexIndex(2),
  ".flex.three": __WEBPACK_IMPORTED_MODULE_2_polythene_core_css__["a" /* flex */].flexIndex(3),
  ".flex.four": __WEBPACK_IMPORTED_MODULE_2_polythene_core_css__["a" /* flex */].flexIndex(4),
  ".flex.five": __WEBPACK_IMPORTED_MODULE_2_polythene_core_css__["a" /* flex */].flexIndex(5),
  ".flex.six": __WEBPACK_IMPORTED_MODULE_2_polythene_core_css__["a" /* flex */].flexIndex(6),
  ".flex.seven": __WEBPACK_IMPORTED_MODULE_2_polythene_core_css__["a" /* flex */].flexIndex(7),
  ".flex.eight": __WEBPACK_IMPORTED_MODULE_2_polythene_core_css__["a" /* flex */].flexIndex(8),
  ".flex.nine": __WEBPACK_IMPORTED_MODULE_2_polythene_core_css__["a" /* flex */].flexIndex(9),
  ".flex.ten": __WEBPACK_IMPORTED_MODULE_2_polythene_core_css__["a" /* flex */].flexIndex(10),
  ".flex.eleven": __WEBPACK_IMPORTED_MODULE_2_polythene_core_css__["a" /* flex */].flexIndex(11),
  ".flex.twelve": __WEBPACK_IMPORTED_MODULE_2_polythene_core_css__["a" /* flex */].flexIndex(12),

  // alignment in cross axis
  ".layout.start": __WEBPACK_IMPORTED_MODULE_2_polythene_core_css__["a" /* flex */].layoutStart,
  ".layout.center, .layout.center-center": __WEBPACK_IMPORTED_MODULE_2_polythene_core_css__["a" /* flex */].layoutCenter,
  ".layout.end": __WEBPACK_IMPORTED_MODULE_2_polythene_core_css__["a" /* flex */].layoutEnd,

  // alignment in main axis
  ".layout.start-justified": __WEBPACK_IMPORTED_MODULE_2_polythene_core_css__["a" /* flex */].layoutStartJustified,
  ".layout.center-justified, .layout.center-center": __WEBPACK_IMPORTED_MODULE_2_polythene_core_css__["a" /* flex */].layoutCenterJustified,
  ".layout.end-justified": __WEBPACK_IMPORTED_MODULE_2_polythene_core_css__["a" /* flex */].layoutEndJustified,
  ".layout.around-justified": __WEBPACK_IMPORTED_MODULE_2_polythene_core_css__["a" /* flex */].layoutAroundJustified,
  ".layout.justified": __WEBPACK_IMPORTED_MODULE_2_polythene_core_css__["a" /* flex */].layoutJustified,

  // self alignment
  ".self-start": __WEBPACK_IMPORTED_MODULE_2_polythene_core_css__["a" /* flex */].selfStart,
  ".self-center": __WEBPACK_IMPORTED_MODULE_2_polythene_core_css__["a" /* flex */].selfCenter,
  ".self-end": __WEBPACK_IMPORTED_MODULE_2_polythene_core_css__["a" /* flex */].selfEnd,
  ".self-stretch": __WEBPACK_IMPORTED_MODULE_2_polythene_core_css__["a" /* flex */].selfStretch
}];

var commonClasses = [{
  ".pe-block": {
    display: "block"
  },

  ".pe-inline-block": {
    display: "inline-block"
  },

  // ie support for hidden
  ".pe-hidden": {
    display: "none !important"
  },

  ".pe-relative": {
    position: "relative"
  },

  ".pe-absolute": {
    position: "absolute"
  },

  ".pe-fit": {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },

  ".pe-fullbleed": {
    margin: 0,
    height: "100vh"
  }
}];

function _toConsumableArray$1(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var layoutStyles = [].concat(_toConsumableArray$1(flexClasses), _toConsumableArray$1(commonClasses));

var addLayoutStyles = function addLayoutStyles() {
  return __WEBPACK_IMPORTED_MODULE_2_polythene_core_css__["c" /* styler */].add("pe-layout", flexClasses, commonClasses);
};




/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

// Derived from Lea Verou's PrefixFree

var allStyles;
var styleAttr;
var styleElement;
var supportedProperty;
var supportedDecl;

function init() {
  allStyles = getComputedStyle(document.documentElement, null);
  styleAttr = document.createElement('div').style;
  styleElement = document.documentElement.appendChild(document.createElement('style'));
  supportedDecl = _supportedDecl;
  supportedProperty = _supportedProperty;
  if ('zIndex' in styleAttr && !('z-index' in styleAttr)) {
    // Some browsers like it dash-cased, some camelCased, most like both.
    supportedDecl = function(property, value) {return _supportedDecl(camelCase(property), value)};
    supportedProperty = function(property) {return _supportedProperty(camelCase(property))};
  }
}
function finalize() {
  if (typeof document !== 'undefined') document.documentElement.removeChild(styleElement);
  // `styleAttr` is used at run time via `supportedProperty()`
  // `allStyles` and `styleElement` can be displosed of after initialization.
  allStyles = styleElement = null;
}
// Helpers, in alphabetic order

function camelCase(str) {
  return str.replace(/-([a-z])/g, function($0, $1) { return $1.toUpperCase() }).replace('-','')
}
function deCamelCase(str) {
  return str.replace(/[A-Z]/g, function($0) { return '-' + $0.toLowerCase() })
}
function _supportedDecl(property, value) {
  styleAttr[property] = '';
  styleAttr[property] = value;
  return !!styleAttr[property]
}
function supportedMedia(condition) {
  styleElement.textContent = '@media (' + condition +'){}';
  // Opera 11 treats unknown conditions as 'all', the rest as 'not all'.
  // So far tested in modern browsers (01/01/2017), and desktop IE9, FF4,
  // Opera 11/12, and Safari 6. TY SauceLabs.
  return !/^@media(?:\s+not)?\s+all/.test(styleElement.sheet.cssRules[0].cssText)
}
function _supportedProperty(property) {
  return property in styleAttr
}
function supportedRule(selector) {
  styleElement.textContent = selector + '{}';
  return !!styleElement.sheet.cssRules.length
}

// Derived from Lea Verou's PrefixFree

// TODO: http://caniuse.com/#feat=css-media-resolution

function detectAtrules(fixers) {
  if (fixers.prefix === '') return
  var atrules = {
    'keyframes': 'name',
    'viewport': null,
    'document': 'regexp(".")'
  };

  // build a map of {'@ruleX': '@-prefix-ruleX'}
  for(var atrule in atrules) {
    var test = atrule + ' ' + (atrules[atrule] || '');
    if (!supportedRule('@' + test) && supportedRule('@' + fixers.prefix + test)) {

      fixers.hasAtrules = true;
      fixers.atrules['@' + atrule] = '@' + fixers.prefix + atrule;
    }
  }

  // Standard
  fixers.hasDppx = supportedMedia('resolution:1dppx');
  // Webkit
  fixers.hasPixelRatio = supportedMedia(fixers.prefix + 'device-pixel-ratio:1');
  // Opera
  fixers.hasPixelRatioFraction = supportedMedia(fixers.prefix + 'device-pixel-ratio:1/1');

  if (fixers.hasPixelRatio || fixers.hasPixelRatioFraction) {
    fixers.properties['resolution'] = fixers.prefix + 'device-pixel-ratio';
    fixers.properties['min-resolution'] = fixers.prefix + 'min-device-pixel-ratio';
    fixers.properties['max-resolution'] = fixers.prefix + 'max-device-pixel-ratio';
    if (supportedMedia('min-' + fixers.prefix + 'device-pixel-ratio:1')) {
      // Mozilla/Firefox tunred a vendor prefix into a vendor infix
      fixers.properties['min-resolution'] = 'min-' + fixers.prefix + 'device-pixel-ratio';
      fixers.properties['max-resolution'] = 'max-' + fixers.prefix + 'device-pixel-ratio';
    }
  }
}

// Derived from Lea Verou's PrefixFree

function detectFunctions(fixers) {
  // Values that might need prefixing
  if (fixers.prefix === '') return
  var functions = {
    'linear-gradient': {
      property: 'background-image',
      params: 'red, teal'
    },
    'calc': {
      property: 'width',
      params: '1px + 5%'
    },
    'element': {
      property: 'background-image',
      params: '#foo'
    },
    'cross-fade': {
      property: 'backgroundImage',
      params: 'url(a.png), url(b.png), 50%'
    }
  };
  functions['repeating-linear-gradient'] =
  functions['repeating-radial-gradient'] =
  functions['radial-gradient'] =
  functions['linear-gradient'];

  // build an array of prefixable functions
  for (var func in functions) {
    var test = functions[func],
      property = test.property,
      value = func + '(' + test.params + ')';

    if (!supportedDecl(property, value) && supportedDecl(property, fixers.prefix + value)) {
      // It's only supported with a prefix
      fixers.functions.push(func);
    }
  }
}

// Derived from Lea Verou's PrefixFree and Robin Frischmann's Inline Style Prefixer

// TODO: http://caniuse.com/#feat=css-writing-mode

// db of prop/value pairs whose values may need treatment.

var keywords = [

  // `initial` applies to all properties and is thus handled separately.
  {
    props: ['cursor'],
    values: [ 'grab', 'grabbing', 'zoom-in', 'zoom-out']
  },
  {
    props: ['display'],
    values:['box', 'inline-box', 'flexbox', 'inline-flexbox', 'flex', 'inline-flex', 'grid', 'inline-grid']
  },
  {
    props: ['position'],
    values: [ 'sticky' ]
  },
  {
    props: ['width', 'column-width', 'height', 'max-height', 'max-width', 'min-height', 'min-width'],
    values: ['contain-floats', 'fill-available', 'fit-content', 'max-content', 'min-content']
  }
];
// The flexbox zoo
//
// ## Specs:
// - box     (2009/old):  https://www.w3.org/TR/2009/WD-css3-flexbox-20090723/
// - flexbox (2012/ie10): https://www.w3.org/TR/2012/WD-css3-flexbox-20120322/
// - flex    (final):     https://www.w3.org/TR/css-flexbox-1/
var flex2009Props = {
  // ?align-content =>
  // ?align-self =>
  'align-items': 'box-align',
  'flex': 'box-flex', // https://css-tricks.com/snippets/css/a-guide-to-flexbox/#comment-371025,
  // ?flex-basis =>
  // !!flex-direction => box-direction + box-orient, covered in `plugin.js`
  'box-direction' : 'box-direction', // we prepopulate the cache for the above case.
  'box-orient': 'box-orient',
  // !!flex-flow => flex-direction and/or flex-wrap, covered in `plugin.js`
  // ?flex-grow =>
  // ?flex-shrink =>
  'flex-wrap': 'box-lines',
  'justify-content': 'box-pack',
  'order': 'box-ordinal-group' // https://css-tricks.com/snippets/css/a-guide-to-flexbox/#comment-371025
};
var flex2009Values = {
  // flex => box || only for display? handled in the code
  'flex-end': 'end',
  'flex-start': 'start',
  // inline-flex => inline-box || see flex
  'nowrap': 'single',
  'space-around': 'justify',
  'space-between': 'justify',
  'wrap': 'multiple',
  'wrap-reverse': 'multiple'
};
var flex2012Props = {
  'align-content': '-ms-flex-line-pack',
  'align-items': '-ms-flex-align',
  'align-self': '-ms-flex-item-align',
  // flex => -ms-flex
  'flex-basis': '-ms-preferred-size',
  // flex-direction => -ms-flex-direction
  // flex-flow => -ms-flex-flow
  'flex-grow': '-ms-flex-positive',
  'flex-shrink': '-ms-flex-negative',
  // flex-wrap => -ms-flex-wrap
  'justify-content': '-ms-flex-pack',
  'order': '-ms-flex-order'
};
var flex2012Values = {
  // flex => flexbox || only for display? handled in the code
  'flex-end': 'end',
  'flex-start': 'start',
  // inline-flex => inline-flexbox || see 'flex'
  // nowrap => nowrap
  'space-around': 'distribute',
  'space-between': 'justify'
  // wrap => wrap
  // wrap-reverse => wrap-reverse
};

function detectKeywords(fixers) {
  if (fixers.prefix === '') return

  // build a map of {propertyI: {keywordJ: previxedKeywordJ, ...}, ...}
  for (var i = 0; i < keywords.length; i++) {
    var map = {}, property = keywords[i].props[0];
    // eslint-disable-next-line
    for (var j = 0, keyword; keyword = keywords[i].values[j]; j++) {

      if (
        !supportedDecl(property, keyword) &&
        supportedDecl(property, fixers.prefix + keyword)
      ) {
        fixers.hasKeywords = true;
        map[keyword] = fixers.prefix + keyword;
      }
    }
    // eslint-disable-next-line
    for (j = 0; property = keywords[i].props[j]; j++) {
      fixers.keywords[property] = map;
    }
  }
  if (fixers.keywords.display && fixers.keywords.display.flexbox && !supportedDecl('display', 'flex')) {
    // old IE
    fixers.keywords.display.flex = fixers.keywords.display.flexbox;
    fixers.keywords.display['inline-flex'] = fixers.keywords.display['inline-flexbox'];
    for (var k in flex2012Props) {
      fixers.properties[k] = flex2012Props[k];
      fixers.keywords[k] = flex2012Values;
    }
  } else if (fixers.keywords.display && fixers.keywords.display.box && !supportedDecl('display', 'flex')) {
    // old flexbox spec
    fixers.keywords.display.flex = fixers.keywords.display.box;
    fixers.keywords.display['inline-flex'] = fixers.keywords.display['inline-box'];
    fixers.flexbox2009 = true;
    for (k in flex2009Props) {
      fixers.properties[k] = fixers.prefix + flex2009Props[k];
      fixers.keywords[k] = flex2009Values;
    }
  }
  if (
    !supportedDecl('color', 'initial') &&
    supportedDecl('color', fixers.prefix + 'initial')
  ) {
    // `initial` does not use the `hasKeywords` branch, no need to set it to true.
    fixers.initial = fixers.prefix + 'initial';
  }
}

// Derived from Lea Verou's PrefixFree

function detectPrefix(fixers) {
  var prefixCounters = {};
  // Why are we doing this instead of iterating over properties in a .style object? Because Webkit.
  // 1. Older Webkit won't iterate over those.
  // 2. Recent Webkit will, but the 'Webkit'-prefixed properties are not enumerable. The 'webkit'
  //    (lower case 'w') ones are, but they don't `deCamelCase()` into a prefix that we can detect.

  function iteration(property) {
    if(property.charAt(0) === '-') {
      var prefix = property.split('-')[1];

      // Count prefix uses
      prefixCounters[prefix] = ++prefixCounters[prefix] || 1;
    }
  }

  // Some browsers have numerical indices for the properties, some don't
  if(allStyles && allStyles.length > 0) {
    for(var i=0; i<allStyles.length; i++) {
      iteration(allStyles[i]);
    }
  } else {
    for(var property in allStyles) {
      iteration(deCamelCase(property));
    }
  }

  var highest = 0;
  for(var prefix in prefixCounters) {
    if(highest < prefixCounters[prefix]) {
      highest = prefixCounters[prefix];
      fixers.prefix = '-' + prefix + '-';
    }
  }
  fixers.Prefix = camelCase(fixers.prefix);
}

// Derived from Lea Verou's PrefixFree

function detectSelectors(fixers) {
  var selector, prefixed;
  function prefixSelector(selector) {
    return selector.replace(/^::?/, function($0) { return $0 + fixers.prefix })
  }

  if (fixers.prefix === '') return
  var selectors = {
    ':any-link': ':any-link',
    ':read-only': ':read-only',
    ':read-write': ':read-write',
    '::selection': '::selection',

    ':fullscreen': ':fullscreen', //TODO sort out what changed between specs
    ':full-screen': ':fullscreen',
    '::backdrop': '::backdrop',

    //sigh
    ':placeholder': '::placeholder',
    '::placeholder': '::placeholder',
    ':input-placeholder': '::placeholder',
    '::input-placeholder': '::placeholder'
  };

  // builds an array of selectors that need a prefix.
  for (selector in selectors) {
    prefixed = prefixSelector(selector);
    if(!supportedRule(selector) && supportedRule(prefixed)) {
      fixers.hasSelectors = true;
      fixers.selectorList.push(selectors[selector]);
      fixers.selectorMap[selectors[selector]] = prefixed;
    }
  }
}

function blankFixers() {
  return {
    atrules: {},
    hasAtrules: false,
    hasDppx: null,
    hasKeywords: false,
    hasPixelRatio: false,
    hasPixelRatioFraction: false,
    hasSelectors: false,
    hasValues: false,
    fixAtMediaParams: null,
    fixAtSupportsParams: null,
    fixProperty: null,
    fixSelector: null,
    fixValue: null,
    flexbox2009: false,
    functions: [],
    initial: null,
    keywords: {},
    placeholder: null,
    prefix: '',
    Prefix: '',
    properties: {},
    selectorList: [],
    selectorMap: {},
    valueProperties: {
      'transition': 1,
      'transition-property': 1,
      'will-change': 1
    }
  }
}


function browserDetector(fixers) {
  // add the required data to the fixers object.
  init();
  detectPrefix(fixers);
  detectSelectors(fixers);
  detectAtrules(fixers);
  detectKeywords(fixers);
  detectFunctions(fixers);
  finalize();
}

var emptySet = {};

var valueTokenizer = /[(),]|\/\*[\s\S]*?\*\//g;

/**
 * For properties whose values are also properties, this will split a coma-separated
 * value list into individual values, ignoring comas in comments and in
 * functions(parameter, lists).
 *
 * @param {string} selector
 * @return {string[]}
 */

function splitValue(value) {
  var indices = [], res = [], inParen = 0, o;
  /*eslint-disable no-cond-assign*/
  while (o = valueTokenizer.exec(value)) {
  /*eslint-enable no-cond-assign*/
    switch (o[0]) {
    case '(': inParen++; break
    case ')': inParen--; break
    case ',': if (inParen) break; indices.push(o.index);
    }
  }
  for (o = indices.length; o--;){
    res.unshift(value.slice(indices[o] + 1));
    value = value.slice(0, indices[o]);
  }
  res.unshift(value);
  return res
}

function makeDetector (before, targets, after) {
  return new RegExp(before + '(?:' + targets.join('|') + ')' + after)
}

function makeLexer (before, targets, after) {
  return new RegExp(
        "\"(?:\\\\[\\S\\s]|[^\"])*\"|'(?:\\\\[\\S\\s]|[^'])*'|\\/\\*[\\S\\s]*?\\*\\/|" +
            before + '((?:' +
            targets.join('|') +
            '))' + after,
        'gi'
    )
}


function finalizeFixers(fixers) {
  var prefix = fixers.prefix;


  // properties
  // ----------

  fixers.fixProperty = fixers.fixProperty || function(prop) {
    var prefixed;
    return fixers.properties[prop] = (
      supportedProperty(prop) ||
      !supportedProperty(prefixed = prefix + prop)
    ) ? prop : prefixed
  };


  // selectors
  // ----------

  var selectorDetector = makeDetector('', fixers.selectorList, '(?:\\b|$|[^-])');
  var selectorMatcher = makeLexer('', fixers.selectorList, '(?:\\b|$|[^-])');
  var selectorReplacer = function(match, selector) {
    return selector != null ? fixers.selectorMap[selector] : match
  };
  fixers.fixSelector = function(selector) {
    return selectorDetector.test(selector) ? selector.replace(selectorMatcher, selectorReplacer) : selector
  };


  // values
  // ------

  // When gradients are supported with a prefix, convert angles to legacy
  // (from clockwise to trigonometric)
  var hasGradients = fixers.functions.indexOf('linear-gradient') > -1;
  var gradientDetector = /\blinear-gradient\(/;
  var gradientMatcher = /(^|\s|,|\()((?:repeating-)?linear-gradient\()\s*(-?\d*\.?\d*)deg/ig;
  var gradientReplacer = function (match, delim, gradient, deg) {
    return delim + gradient + (90-deg) + 'deg'
  };

  // functions
  var hasFunctions = !!fixers.functions.length;
  var functionsDetector = makeDetector('(?:^|\\s|,|\\()', fixers.functions, '\\s*\\(');
  var functionsMatcher = makeLexer('(^|\\s|,|\\()', fixers.functions, '(?=\\s*\\()');
  function functionReplacer (match, $1, $2) {
    return $1 + prefix + $2
  }

  // properties as values (for transition, ...)
  // No need to look for strings in these properties. We may insert prefixes in comments. Oh the humanity.
  var valuePropertiesMatcher = /^\s*([-\w]+)/gi;
  var valuePropertiesReplacer = function(match, prop){
    return fixers.properties[prop] || fixers.fixProperty(prop)
  };

  fixers.fixValue = function (value, property) {
    var res;
    if (fixers.initial != null && value === 'initial') return fixers.initial

    if (fixers.hasKeywords && (res = (fixers.keywords[property] || emptySet)[value])) return res

    res = value;

    if (fixers.valueProperties.hasOwnProperty(property)) {
      res = (value.indexOf(',') === -1) ?
        value.replace(valuePropertiesMatcher, valuePropertiesReplacer) :
        splitValue(value).map(function(v) {
          return v.replace(valuePropertiesMatcher, valuePropertiesReplacer)
        }).join(',');
    }

    if (hasFunctions && functionsDetector.test(value)) {
      if (hasGradients && gradientDetector.test(value)) {
        res = res.replace(gradientMatcher, gradientReplacer);
      }
      res = res.replace(functionsMatcher, functionReplacer);
    }
    return res
  };


  // @media (resolution:...) {
  // -------------------------

  var resolutionMatcher = /((?:min-|max-)?resolution)\s*:\s*((?:\d*.)?\d+)dppx/g;
  var resolutionReplacer = (
    fixers.hasPixelRatio ? function(_, prop, param){return fixers.properties[prop] + ':' + param} :
    fixers.hasPixelRatioFraction ? function(_, prop, param){return fixers.properties[prop] + ':' + Math.round(param*10) + '/10'} :
    function(_, prop, param){return prop + ':' + Math.round(param * 96) +'dpi'}
  );

  fixers.fixAtMediaParams = fixers.hasDppx !== false /*it may be null*/ ?
    function(p) {return p} :
    function (params) {
      return (params.indexOf('reso') !== -1) ?
        params.replace(resolutionMatcher, resolutionReplacer) :
        params
    };


  // @supports ... {
  // ---------------

  // regexp built by scripts/regexps.js
  var atSupportsParamsMatcher = /\(\s*([-\w]+)\s*:\s*((?:"(?:\\[\S\s]|[^"])*"|'(?:\\[\S\s]|[^'])*'|\/\*[\S\s]*?\*\/|\((?:"(?:\\[\S\s]|[^"])*"|'(?:\\[\S\s]|[^'])*'|\/\*[\S\s]*?\*\/|\((?:"(?:\\[\S\s]|[^"])*"|'(?:\\[\S\s]|[^'])*'|\/\*[\S\s]*?\*\/|\((?:"(?:\\[\S\s]|[^"])*"|'(?:\\[\S\s]|[^'])*'|\/\*[\S\s]*?\*\/|\((?:"(?:\\[\S\s]|[^"])*"|'(?:\\[\S\s]|[^'])*'|\/\*[\S\s]*?\*\/|\([^\)]*\)|[^\)])*\)|[^\)])*\)|[^\)])*\)|[^\)])*\)|[^\)])*)/g;
  function atSupportsParamsReplacer(match, prop, value) {
    return '(' + (fixers.properties[prop] || fixers.fixProperty(prop)) + ':' + fixers.fixValue(value, prop)
  }
  fixers.fixAtSupportsParams = function(params) {
    return params.replace(atSupportsParamsMatcher, atSupportsParamsReplacer)
  };
}

var commonFixers;

function initBrowser() {
  commonFixers = blankFixers();
  if (typeof getComputedStyle === 'function') browserDetector(commonFixers);
  finalizeFixers(commonFixers);
}
initBrowser();

function prefixPlugin(j2c) {
  var fixers = commonFixers;
  var cache = [];

  if (j2c) j2c.setPrefixDb = function(f) {
    if (cache.indexOf(f) === -1) {
      finalizeFixers(f);
      cache.push(f);
    }
    fixers = f;
    return prefixPlugin
  };
  return {
    $filter: function(next) {
      return {
        atrule: function(rule, kind, params, hasBlock) {
          next.atrule(
            fixers.hasAtrules && fixers.atrules[rule] || rule,
            kind,
            (
              rule === '@media'    ? fixers.fixAtMediaParams(params) :
              rule === '@supports' ? fixers.fixAtSupportsParams(params) :
              params
            ),
            hasBlock
          );
        },
        decl: function decl(property, value) {
          if (!property || !(typeof value === 'string' || typeof value === 'number')){
            return next.decl(fixers.properties[property] || fixers.fixProperty(property), value)
          }
          value = value + '';
          if (property === 'flex-flow' && fixers.flexbox2009) {
            value.split(' ').forEach(function(v){
              // recurse! The lack of `next.` is intentional.
              if (v.indexOf('wrap') > -1) decl('flex-wrap', v);
              else if(v !== '') decl('flex-direction', v);
            });
          } else if (property === 'flex-direction' && fixers.flexbox2009) {
            next.decl(fixers.properties['box-orient'], value.indexOf('column') > -1 ? 'block-axis' : 'inline-axis');
            next.decl(fixers.properties['box-direction'], value.indexOf('-reverse') > -1 ? 'reverse' : 'normal');
          } else {
            next.decl(
              fixers.properties[property] || fixers.fixProperty(property),
              fixers.fixValue(value, property)
            );
          }
        },
        rule: function(selector) {
          next.rule(
            fixers.hasSelectors ? fixers.fixSelector(selector) : selector
          );
        }
      }
    }
  }
}

exports.prefixPlugin = prefixPlugin;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var emptyArray = [];
var emptyObject = {};
var type = emptyObject.toString;
var ARRAY =  type.call(emptyArray);
var OBJECT = type.call(emptyObject);
var STRING = type.call('');
var FUNCTION = type.call(type);
var own =  emptyObject.hasOwnProperty;
var freeze = Object.freeze || function(o) {return o};


function defaults(target, source) {
  for (var k in source) if (own.call(source, k)) {
    if (k.indexOf('$') && !(k in target)) target[k] = source[k];
  }
  return target
}

function cartesian(a,b) {
  var res = [], i, j;
  for (j in b) if(own.call(b, j))
    for (i in a) if(own.call(a, i))
      res.push(a[i] + b[j]);
  return res
}

// "Tokenizes" the selectors into parts relevant for the next function.
// Strings and comments are matched, but ignored afterwards.
// This is not a full tokenizers. It only recognizes comas, parentheses,
// strings and comments.
// regexp generated by scripts/regexps.js then trimmed by hand
var selectorTokenizer = /[(),]|"(?:\\.|[^"\n])*"|'(?:\\.|[^'\n])*'|\/\*[\s\S]*?\*\//g;


/**
 * This will split a coma-separated selector list into individual selectors,
 * ignoring comas in strings, comments and in :pseudo-selectors(parameter, lists).
 *
 * @param {string} selector
 * @return {string[]}
 */

function splitSelector(selector) {
  var indices = [], res = [], inParen = 0, o;
  /*eslint-disable no-cond-assign*/
  while (o = selectorTokenizer.exec(selector)) {
  /*eslint-enable no-cond-assign*/
    switch (o[0]) {
    case '(': inParen++; break
    case ')': inParen--; break
    case ',': if (inParen) break; indices.push(o.index);
    }
  }
  for (o = indices.length; o--;){
    res.unshift(selector.slice(indices[o] + 1));
    selector = selector.slice(0, indices[o]);
  }
  res.unshift(selector);
  return res
}

// Like the `selectorTokenizer`, but for the `&` operator
var ampersandTokenizer = /&|"(?:\\.|[^"\n])*"|'(?:\\.|[^'\n])*'|\/\*[\s\S]*?\*\//g;

function ampersand (selector, parents) {
  var indices = [], split = [], res, o;
  /*eslint-disable no-cond-assign*/
  while (o = ampersandTokenizer.exec(selector)) {
  /*eslint-enable no-cond-assign*/
    if (o[0] == '&') indices.push(o.index);
  }
  for (o = indices.length; o--;){
    split.unshift(selector.slice(indices[o] + 1));
    selector = selector.slice(0, indices[o]);
  }
  split.unshift(selector);
  if (split.length === 1) split.unshift('');
  res = [split[0]];
  for (o = 1; o < split.length; o++) {
    res = cartesian(res, cartesian(parents, [split[o]]));
  }
  return res.join(',')
}

function flatIter (f) {
  return function iter(arg) {
    if (type.call(arg) === ARRAY) for (var i= 0 ; i < arg.length; i ++) iter(arg[i]);
    else f(arg);
  }
}

function decamelize(match) {
  return '-' + match.toLowerCase()
}

/**
 * Handles the property:value; pairs.
 *
 * @param {object} state - holds the localizer- and walker-related methods
 *                         and state
 * @param {object} emit - the contextual emitters to the final buffer
 * @param {string} prefix - the current property or a prefix in case of nested
 *                          sub-properties.
 * @param {array|object|string} o - the declarations.
 * @param {boolean} local - are we in @local or in @global scope.
 */

function declarations(state, emit, prefix, o, local) {
  var k, v, kk;
  if (o==null) return

  switch ( type.call(o = o.valueOf()) ) {
  case ARRAY:
    for (k = 0; k < o.length; k++)

      declarations(state, emit, prefix, o[k], local);

    break
  case OBJECT:
    // prefix is falsy iif it is the empty string, which means we're at the root
    // of the declarations list.
    prefix = (prefix && prefix + '-');
    for (k in o) if (own.call(o, k)){
      v = o[k];
      if (/\$/.test(k)) {
        for (kk in (k = k.split('$'))) if (own.call(k, kk)) {

          declarations(state, emit, prefix + k[kk], v, local);

        }
      } else {

        declarations(state, emit, prefix + k, v, local);

      }
    }
    break
  default:
    // prefix is falsy when it is "", which means that we're
    // at the top level.
    // `o` is then treated as a `property:value` pair, or a
    // semi-colon-separated list thereof.
    // Otherwise, `prefix` is the property name, and
    // `o` is the value.

    // restore the dashes
    k = prefix.replace(/_/g, '-').replace(/[A-Z]/g, decamelize);

    if (local && (k == 'animation-name' || k == 'animation' || k == 'list-style')) {
      // no need to tokenize here a plain `.split(',')` has all bases covered.
      // We may 'localize' a comment, but it's not a big deal.
      o = o.split(',').map(function (o) {

        return o.replace(/^\s*(?:(var\([^)]+\))|:?global\(\s*([_A-Za-z][-\w]*)\s*\)|()(-?[_A-Za-z][-\w]*))/, state.localizeReplacer)

      }).join(',');
    }

    emit.decl(k, o);

  }
}

/**
 * Handles a single at-rules
 *
 * @param {object} state - holds the localizer- and walker-related methods
 *                         and state
 * @param {object} emit - the contextual emitters to the final buffer
 * @param {array} k - The parsed at-rule, including the parameters,
 *                    if takes both parameters and a block.
 *                    k == [match, fullAtRule, atRuleType, params?]
 *                    So in `@-webkit-keyframes foo`, we have
 *                     - match = "@-webkit-keyframes foo"
 *                     - fullAtRule = "@-webkit-keyframes"
 *                     - atRuleType = "keyframes"
 *                     - params = "foo"
 * @param {string|string[]|object|object[]} v - Either parameters for
 *                                              block-less rules or
 *                                              their block
 *                                              for the others.
 * @param {string} prefix - the current selector or the selector prefix
 *                          in case of nested rules
 * @param {boolean} local - are we in @local or in @global scope?
 * @param {string} nestingDepth - are we nested in an at-rule or a selector?
 */

function atRules(state, emit, k, v, prefix, local, nestingDepth) {

  // First iterate over user-provided at-rules and return if one of them corresponds to the current one
  for (var i = 0; i < state.$atHandlers.length; i++) {

    if (state.$atHandlers[i](state, emit, k, v, prefix, local, nestingDepth)) return

  }

  // using `/^global$/.test(k[2])` rather that 'global' == k[2] gzips
  // slightly better thanks to the regexps tests further down.
  // It is slightly less efficient but this isn't a critical path.

  if (!k[3] && /^global$/.test(k[2])) {

    rules(state, emit, prefix, v, 0, nestingDepth);


  } else if (!k[3] && /^local$/.test(k[2])) {

    rules(state, emit, prefix, v, 1, nestingDepth);


  } else if (k[3] && /^adopt$/.test(k[2])) {

    if (!local || nestingDepth) return emit.err('@adopt global or nested: ' + k[0])

    if (!/^\.?[_A-Za-z][-\w]*$/.test(k[3])) return emit.err('bad adopter ' + JSON.stringify(k[3]) + ' in ' + k[0])

    i = [];
    flatIter(function(adoptee, asString) {

      if(adoptee == null || !/^\.?[_A-Za-z][-\w]*(?:\s+\.?[_A-Za-z][-\w]*)*$/.test(asString = adoptee + '')) emit.err('bad adoptee '+ JSON.stringify(adoptee) + ' in ' + k[0]);

      else i.push(asString.replace(/\./g, ''));

    })(v);

    // we may end up with duplicate classes but AFAIK it has no consequences on specificity.
    if (i.length) {
      state.localize(k[3] = k[3].replace(/\./g, ''));
      state.names[k[3]] += (' ' + i.join(' '));
    }


  } else if (!k[3] && /^(?:namespace|import|charset)$/.test(k[2])) {
    flatIter(function(v) {

      emit.atrule(k[1], k[2], v);

    })(v);


  } else if (!k[3] && /^(?:font-face|viewport)$/.test(k[2])) {
    flatIter(function(v) {

      emit.atrule(k[1], k[2], k[3], 1);

      declarations(state, emit, '', v, local);

      emit._atrule();

    })(v);

  } else if (k[3] && /^(?:media|supports|page|keyframes)$/.test(k[2])) {

    if (local && 'keyframes' == k[2]) {
      k[3] = k[3].replace(
        // generated by script/regexps.js
        /(var\([^)]+\))|:?global\(\s*([_A-Za-z][-\w]*)\s*\)|()(-?[_A-Za-z][-\w]*)/,
        state.localizeReplacer
      );
    }


    emit.atrule(k[1], k[2], k[3], 1);

    if ('page' == k[2]) {

      declarations(state, emit, '', v, local);

    } else {

      rules(
        state, emit,
        'keyframes' == k[2] ? '' : prefix,
        v, local, nestingDepth + 1
      );

    }

    emit._atrule();

  } else {

    emit.err('Unsupported at-rule: ' + k[0]);

  }
}

/**
 * Add rulesets and other CSS tree to the sheet.
 *
 * @param {object} state - holds the localizer- and walker-related methods
 *                         and state
 * @param {object} emit - the contextual emitters to the final buffer
 * @param {string} prefix - the current selector or a prefix in case of nested rules
 * @param {array|string|object} tree - a source object or sub-object.
 * @param {string} nestingDepth - are we nested in an at-rule?
 * @param {boolean} local - are we in @local or in @global scope?
 */
function rules(state, emit, prefix, tree, local, nestingDepth) {
  var k, v, inDeclaration, kk;

  switch (type.call(tree)) {

  case OBJECT:
    for (k in tree) if (own.call(tree, k)) {
      v = tree[k];

      if (prefix.length > 0 && /^[-\w$]+$/.test(k)) {
        if (!inDeclaration) {
          inDeclaration = 1;

          emit.rule(prefix);

        }
        if (/\$/.test(k)) {
          for (kk in (k = k.split('$'))) if (own.call(k, kk)) {

            declarations(state, emit, k[kk], v, local);

          }
        } else {

          declarations(state, emit, k, v, local);

        }

      } else if (/^@/.test(k)) {
        // Handle At-rules
        inDeclaration = 0;

        atRules(state, emit,
          /^(.(?:-[\w]+-)?([_A-Za-z][-\w]*))\b\s*(.*?)\s*$/.exec(k) || [k,'@','',''],
          v, prefix, local, nestingDepth
        );

      } else {
        // selector or nested sub-selectors
        inDeclaration = 0;

        rules(
          state, emit,
          // build the selector `prefix` for the next iteration.
          // ugly and full of redundant bits but so far the fastest/shortest.gz
          /*0 if*/(prefix.length > 0 && (/,/.test(prefix) || /,/.test(k))) ?

            /*0 then*/ (kk = splitSelector(prefix), splitSelector(
              local ?

                k.replace(
                  /("(?:\\.|[^"\n])*"|'(?:\\.|[^'\n])*'|\/\*[\s\S]*?\*\/)|:global\(\s*(\.-?[_A-Za-z][-\w]*)\s*\)|(\.)(-?[_A-Za-z][-\w]*)/g,
                  state.localizeReplacer
                ) :

                k
            ).map(function (k) {
              return /&/.test(k) ? ampersand(k, kk) : kk.map(function(kk) {
                return kk + k
              }).join(',')
            }).join(',')) :

            /*0 else*/ /*1 if*/ /&/.test(k) ?

              /*1 then*/ ampersand(
                local ?

                  k.replace(
                    /("(?:\\.|[^"\n])*"|'(?:\\.|[^'\n])*'|\/\*[\s\S]*?\*\/)|:global\(\s*(\.-?[_A-Za-z][-\w]*)\s*\)|(\.)(-?[_A-Za-z][-\w]*)/g,
                    state.localizeReplacer
                  ) :

                  k,
                [prefix]
              ) :

              /*1 else*/ prefix + (
                local ?

                  k.replace(
                    /("(?:\\.|[^"\n])*"|'(?:\\.|[^'\n])*'|\/\*[\s\S]*?\*\/)|:global\(\s*(\.-?[_A-Za-z][-\w]*)\s*\)|(\.)(-?[_A-Za-z][-\w]*)/g,
                    state.localizeReplacer
                  ) :

                  k
                ),
           v, local, nestingDepth + 1
        );

      }
    }

    break

  case ARRAY:
    for (k = 0; k < tree.length; k++){

      rules(state, emit, prefix, tree[k], local, nestingDepth);

    }
    break

  case STRING:
    // CSS hacks or ouptut of `j2c.inline`.
    if (!prefix.length) emit.err('No selector');
    emit.rule(prefix || ' ');

    declarations(state, emit, '', tree, local);

  }
}

// This is the first entry in the filters array, which is
// actually the last step of the compiler. It inserts
// closing braces to close normal (non at-) rules (those
// that start with a selector). Doing it earlier is
// impossible without passing state around in unrelated code
// or ending up with duplicated selectors when the source tree
// contains arrays.
// There's no `_rule` handler, because the core compiler never
// calls it.
function closeSelectors(next, inline) {
  var lastSelector;
  return inline ? next : {
    init: function(){lastSelector = 0; next.init();},
    done: function (raw) {
      if (lastSelector) {next._rule(); lastSelector = 0;}
      return next.done(raw)
    },
    atrule: function (rule, kind, param, takesBlock) {
      if (lastSelector) {next._rule(); lastSelector = 0;}
      next.atrule(rule, kind, param, takesBlock);
    },
    _atrule: function (rule) {
      if (lastSelector) {next._rule(); lastSelector = 0;}
      next._atrule(rule);
    },
    rule: function (selector) {
      if (selector !== lastSelector){
        if (lastSelector) next._rule();
        next.rule(selector);
        lastSelector = selector;
      }
    }
  }
}

function global(x) {
  return ':global(' + x + ')'
}

function kv (k, v, o) {
  o = {};
  o[k] = v;
  return o
}

function at (rule, params, block) {
  if (
    arguments.length < 3
  ) {
    // inner curry!
    var _at = at.bind.apply(at, [null].concat([].slice.call(arguments,0)));
    // So that it can be used as a key in an ES6 object literal.
    _at.toString = function(){return '@' + rule + ' ' + params};
    return _at
  }
  else return kv('@' + rule +' ' + params, block)
}

function j2c() {

  // the buffer that accumulates the output. Initialized in `$sink.i()`
  var buf, err;

  // the bottom of the 'codegen' stream. Mirrors the `$filter` plugin API.
  var $sink = {
    init: function(){buf=[], err=[];},
    done: function (raw) {
      if (err.length != 0) throw new Error('j2c error(s): ' + JSON.stringify(err,null,2) + 'in context:\n' + buf.join(''))
      return raw ? buf : buf.join('')
    },
    err: function(msg) {
      err.push(msg);
      buf.push('/* +++ ERROR +++ ' + msg + ' */\n');
    },
    atrule: function (rule, kind, param, takesBlock) {
      buf.push(rule, param && ' ', param, takesBlock ? ' {' : ';', _instance.endline);
    },
    // close atrule
    _atrule: function () {buf.push('}', _instance.endline);},
    rule: function (selector) {buf.push(selector, ' {', _instance.endline);},
    // close rule
    _rule: function () {buf.push('}', _instance.endline);},
    decl: function (prop, value) {buf.push(prop, prop && ':', value, ';', _instance.endline);}
  };

  // holds the `$filter` and `$at` handlers
  var $filters = [closeSelectors];
  var $atHandlers = [];

  // the public API (see the main docs)
  var _instance = {
    at: at,
    global: global,
    kv: kv,
    names: {},
    endline: '\n',
    suffix: '__j2c-' +
      // 128 bits of randomness
      Math.floor(Math.random() * 0x100000000).toString(36) + '-' +
      Math.floor(Math.random() * 0x100000000).toString(36) + '-' +
      Math.floor(Math.random() * 0x100000000).toString(36) + '-' +
      Math.floor(Math.random() * 0x100000000).toString(36),
    $plugins: [],
    sheet: function(tree) {
      var emit = _createOrRetrieveStream(0);
      emit.init();
      rules(
        _walkers[0],
        emit,
        '', // prefix
        tree,
        1,  // local, by default
        0   // nesting depth
      );

      return emit.done()
    },
    inline: function (tree, options) {
      var emit = _createOrRetrieveStream(1);
      emit.init();
      declarations(
        _walkers[1],
        emit,
        '', // prefix
        tree,
        !(options && options.global)   // local, by default
      );
      return emit.done()
    }
  };

  // The `state` (for the core functions) / `walker` (for the plugins) tables.
  var _walkers = [
    // for j2c.sheet
    {
      // helpers for locaizing class and animation names
      localizeReplacer: _localizeReplacer, // second argument to String.prototype.replace
      localize: _localize,                 // mangles local names
      names: _instance.names,              // local => mangled mapping
      $atHandlers: $atHandlers,            // extra at-rules
      // The core walker methods, to be provided to plugins
      atrule: atRules,
      decl: declarations,
      rule: rules
    },
    // likewise, for j2c.inline (idem with `$a`, `a` and `s` removed)
    {
      localizeReplacer: _localizeReplacer,
      localize: _localize,
      names: _instance.names,
      decl: declarations
    }
  ];


  // inner helpers

  var _use = flatIter(function(plugin) {
    // `~n` is falsy for `n === -1` and truthy otherwise.
    // Works well to turn the  result of `a.indexOf(x)`
    // into a value that reflects the presence of `x` in
    // `a`.
    if (~_instance.$plugins.indexOf(plugin)) return

    _instance.$plugins.push(plugin);

    if (type.call(plugin) === FUNCTION) plugin = plugin(_instance);

    if (!plugin) return

    flatIter(function(filter) {
      $filters.push(filter);
    })(plugin.$filter || emptyArray);

    flatIter(function(handler) {
      $atHandlers.push(handler);
    })(plugin.$at || emptyArray);

    defaults(_instance.names, plugin.$names || emptyObject);

    _use(plugin.$plugins || emptyArray);

    $sink = plugin.$sink || $sink;

    defaults(_instance, plugin);
  });


  var _streams = [];
  /**
   * returns the codegen streams, creating them if necessary
   * @param
   */
  function _createOrRetrieveStream(inline) {
    // build the stream processors if needed
    if (!_streams.length) {
      // append the $sink as the ultimate filter
      $filters.push(function(_, inline) {return inline ? {init:$sink.init, decl:$sink.decl, done:$sink.done, err: $sink.err} : $sink});
      for(var i = 0; i < 2; i++){ // 0 for j2c.sheet, 1 for j2c.inline
        for (var j = $filters.length; j--;) {
          _streams[i] = freeze(
            defaults(
              $filters[j](_streams[i], !!i),
              _streams[i]
            )
          );
        }
      }
    }
    return _streams[inline]
  }

  /**
   * Returns a localized version of a given name.
   * Registers the pair in `instnace.name` if needed.
   *
   * @param {string} name - the name to localize
   * @return {string} - the localized version
   */
  function _localize(name) {
    if (!_instance.names[name]) _instance.names[name] = name + _instance.suffix;
    return _instance.names[name].match(/^\S+/)
  }

  /**
   * Used as second argument for str.replace(localizeRegex, replacer)
   * `ignore`, `global` and `(dot, name)` are mutually exclusive
   *
   * @param {string} match - the whole match (ignored)
   * @param {string|null} ignore - a comment or a string literal
   * @param {string|null} global - a global name
   * @param {string|null} dot - either '.' for a local class name or the empty string otherwise
   * @param {string|null} name - the name to localize
   * @return {string}
   */
  function _localizeReplacer(match, ignore, global$$1, dot, name) {
    return ignore || global$$1 || dot + _localize(name)
  }

  _use(emptyArray.slice.call(arguments));
  return _instance
}

module.exports = j2c;


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ripple; });
/* unused harmony export classes */
/* unused harmony export vars */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core_css__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_theme__ = __webpack_require__(2);




function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ANIMATION_END_EVENT = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["d" /* getAnimationEndEvent */])();
var DEFAULT_START_OPACITY = 0.2;
var DEFAULT_END_OPACITY = 0.0;
var DEFAULT_START_SCALE = 0.1;
var DEFAULT_END_SCALE = 2.0;
var OPACITY_DECAY_VELOCITY = 0.35;

var animation = (function (_ref) {
  var e = _ref.e,
      id = _ref.id,
      el = _ref.el,
      attrs = _ref.attrs,
      classes = _ref.classes;

  return new Promise(function (resolve) {
    var container = document.createElement("div");
    container.setAttribute("class", classes.mask);
    el.appendChild(container);
    var waves = document.createElement("div");
    waves.setAttribute("class", classes.waves);
    container.appendChild(waves);
    var rect = el.getBoundingClientRect();
    var x = __WEBPACK_IMPORTED_MODULE_0_polythene_core__["h" /* isTouch */] && e.touches ? e.touches[0].pageX : e.clientX;
    var y = __WEBPACK_IMPORTED_MODULE_0_polythene_core__["h" /* isTouch */] && e.touches ? e.touches[0].pageY : e.clientY;
    var w = el.offsetWidth;
    var h = el.offsetHeight;
    var waveRadius = Math.sqrt(w * w + h * h);
    var mx = attrs.center ? rect.left + rect.width / 2 : x;
    var my = attrs.center ? rect.top + rect.height / 2 : y;
    var rx = mx - rect.left - waveRadius / 2;
    var ry = my - rect.top - waveRadius / 2;
    var startOpacity = attrs.startOpacity !== undefined ? attrs.startOpacity : DEFAULT_START_OPACITY;
    var opacityDecayVelocity = attrs.opacityDecayVelocity !== undefined ? attrs.opacityDecayVelocity : OPACITY_DECAY_VELOCITY;
    var endOpacity = attrs.endOpacity || DEFAULT_END_OPACITY;
    var startScale = attrs.startScale || DEFAULT_START_SCALE;
    var endScale = attrs.endScale || DEFAULT_END_SCALE;
    var duration = attrs.duration ? attrs.duration : 1 / opacityDecayVelocity * 0.2;
    var color = window.getComputedStyle(el).color;

    var style = waves.style;
    style.width = style.height = waveRadius + "px";
    style.top = ry + "px";
    style.left = rx + "px";
    style["animation-duration"] = style["-webkit-animation-duration"] = style["-moz-animation-duration"] = style["-o-animation-duration"] = duration + "s";
    style.backgroundColor = color;
    style.opacity = startOpacity;
    style.animationName = id;
    style.animationTimingFunction = attrs.animationTimingFunction || __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].animation_curve_default;

    var keyframeStyle = [_defineProperty({}, "@keyframes " + id, {
      " 0%": {
        transform: "scale(" + startScale + ")",
        "opacity": startOpacity
      },
      " 100%": {
        transform: "scale(" + endScale + ")",
        "opacity": endOpacity
      }
    })];
    __WEBPACK_IMPORTED_MODULE_1_polythene_core_css__["c" /* styler */].add(id, keyframeStyle);

    var animationDone = function animationDone(evt) {
      __WEBPACK_IMPORTED_MODULE_1_polythene_core_css__["c" /* styler */].remove(id);
      waves.removeEventListener(ANIMATION_END_EVENT, animationDone, false);
      if (attrs.persistent) {
        style.opacity = endOpacity;
        style.transform = "scale(" + endScale + ")";
      } else {
        waves.classList.remove(classes.wavesAnimating);
        container.removeChild(waves);
        el.removeChild(container);
      }
      resolve(evt);
    };

    waves.addEventListener(ANIMATION_END_EVENT, animationDone, false);
    waves.classList.add(classes.wavesAnimating);
  });
});

var classes = {
  component: "pe-ripple",

  // elements
  mask: "pe-ripple__mask",
  waves: "pe-ripple__waves",

  // states
  unconstrained: "pe-ripple--unconstrained",
  wavesAnimating: "pe-ripple__waves--animating"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

var getInitialState = function getInitialState() {
  return {
    animations: {},
    animating: false,
    cleanUp: undefined
  };
};

var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var attrs = vnode.attrs;
  return _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    className: [classes.component, attrs.unconstrained ? classes.unconstrained : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  });
};

var updateAnimationState = function updateAnimationState(state) {
  return state.animating = Object.keys(state.animations).length > 0;
};

var onMount = function onMount(vnode) {
  if (!vnode.dom && __WEBPACK_IMPORTED_MODULE_0_polythene_core__["g" /* isServer */]) {
    return;
  }
  var state = vnode.state;
  var attrs = vnode.attrs;

  var tap = function tap(e) {
    if (attrs.disabled || !attrs.multi && state.animating) {
      return;
    }
    if (attrs.start) {
      attrs.start(e);
    }
    var id = "ripple_animation_" + new Date().getTime();
    state.animations[id] = animation({ e: e, id: id, el: vnode.dom, attrs: attrs, classes: classes }).then(function (evt) {
      if (attrs.end) {
        attrs.end(evt);
      }
      delete state.animations[id];
      updateAnimationState(state);
    });
    updateAnimationState(state);
  };
  var triggerEl = attrs.target ? attrs.target : vnode.dom && vnode.dom.parentElement;

  triggerEl.addEventListener(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["i" /* pointerEndEvent */], tap, false);
  state.cleanUp = function () {
    return triggerEl.removeEventListener(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["i" /* pointerEndEvent */], tap, false);
  };
};

var onUnMount = function onUnMount(_ref2) {
  var state = _ref2.state;
  return state.cleanUp && state.cleanUp();
};

var ripple = Object.freeze({
	getElement: getElement,
	getInitialState: getInitialState,
	createProps: createProps,
	onMount: onMount,
	onUnMount: onUnMount
});

var vars$1 = {
  color: "inherit" // only specify this variable to get both states
  // color_light:   "inherit",
  // color_dark:    "inherit"
};




/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Card; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core_card__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_icon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_list_tile__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_mithril_shadow__ = __webpack_require__(4);






var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var CardActions = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["b" /* ViewComponent */])(_extends$1({}, __WEBPACK_IMPORTED_MODULE_1_polythene_core_card__["b" /* coreCardActions */]));

CardActions.displayName = "CardActions";

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var CardMedia = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(_extends$2({}, __WEBPACK_IMPORTED_MODULE_1_polythene_core_card__["c" /* coreCardMedia */]));

CardMedia.displayName = "CardMedia";

var _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var CardPrimary = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["b" /* ViewComponent */])(_extends$3({}, __WEBPACK_IMPORTED_MODULE_1_polythene_core_card__["d" /* coreCardPrimary */]));

CardPrimary.displayName = "CardPrimary";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Card = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["b" /* ViewComponent */])(_extends({}, __WEBPACK_IMPORTED_MODULE_1_polythene_core_card__["a" /* coreCard */], {
  createContent: function createContent(vnode, args) {
    return __WEBPACK_IMPORTED_MODULE_1_polythene_core_card__["a" /* coreCard */].createContent(vnode, _extends(args, { CardActions: CardActions, CardMedia: CardMedia, CardPrimary: CardPrimary, Icon: __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_icon__["a" /* Icon */], ListTile: __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_list_tile__["a" /* ListTile */], Shadow: __WEBPACK_IMPORTED_MODULE_4_polythene_mithril_shadow__["a" /* Shadow */] }));
  }
}));

Card.displayName = "Card";




/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return cardActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return cardMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return cardPrimary; });
/* unused harmony export classes */
/* unused harmony export vars */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_theme__ = __webpack_require__(2);



var classes = {
  component: "pe-card",

  // elements
  actions: "pe-card__actions",
  content: "pe-card__content",
  header: "pe-card__header",
  headerTitle: "pe-card__header-title",
  media: "pe-card__media",
  mediaDimmer: "pe-card__media__dimmer",
  overlay: "pe-card__overlay",
  overlayContent: "pe-card__overlay__content",
  primary: "pe-card__primary",
  primaryMedia: "pe-card__primary-media",
  subtitle: "pe-card__subtitle",
  text: "pe-card__text",
  title: "pe-card__title",

  // states
  actionsBordered: "pe-card__actions--borders",
  actionsHorizontal: "pe-card__actions--horizontal",
  actionsJustified: "pe-card__actions--justified",
  actionsTight: "pe-card__actions--tight",
  actionsVertical: "pe-card__actions--vertical",
  mediaCropX: "pe-card__media--crop-x",
  mediaCropY: "pe-card__media--crop-y",
  mediaLarge: "pe-card__media--large",
  mediaMedium: "pe-card__media--medium",
  mediaRatioLandscape: "pe-card__media--landscape",
  mediaRatioSquare: "pe-card__media--square",
  mediaRegular: "pe-card__media--regular",
  mediaSmall: "pe-card__media--small",
  overlaySheet: "pe-card__overlay--sheet",
  primaryHasMedia: "pe-card__primary--media",
  primaryTight: "pe-card__primary--tight",
  textTight: "pe-card__text--tight"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var createOverlay = function createOverlay(_ref) {
  var dispatcher = _ref.dispatcher,
      attrs = _ref.attrs,
      h = _ref.h,
      k = _ref.k;

  var element = attrs.element || "div";
  var content = attrs.content.map(dispatcher);
  return h("div", {
    key: attrs.key || "card-overlay",
    className: [classes.overlay, attrs.sheet ? classes.overlaySheet : null, attrs.tone === "light" ? null : "pe-dark-tone", // default dark tone
    attrs.tone === "light" ? "pe-light-tone" : null].join(" ")
  }, [h(element, {
    key: "content",
    className: [classes.overlayContent, attrs.className || attrs[k.class]].join(" ")
  }, content), h("div", {
    key: "dimmer",
    className: classes.mediaDimmer
  })]);
};

var createText = function createText(_ref2) {
  var attrs = _ref2.attrs,
      h = _ref2.h,
      k = _ref2.k;

  var element = attrs.element || "div";
  return h(element, {
    key: attrs.key || "card-text",
    className: [classes.text, attrs.tight ? classes.textTight : null, attrs.className || attrs[k.class]].join(" ")
  }, attrs.content);
};

var createHeader = function createHeader(_ref3) {
  var attrs = _ref3.attrs,
      h = _ref3.h,
      k = _ref3.k,
      Icon = _ref3.Icon,
      ListTile = _ref3.ListTile;

  return h(ListTile, _extends({}, attrs, {
    key: attrs.key || "card-header",
    className: [classes.header, attrs.className || attrs[k.class]].join(" ")
  }, attrs.icon ? { front: h(Icon, attrs.icon) } : null));
};

var getElement = function getElement(vnode) {
  return vnode.attrs.element || vnode.attrs.url ? "a" : "div";
};

var createProps = function createProps(vnode, _ref4) {
  var k = _ref4.keys;

  var attrs = vnode.attrs;
  return _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    className: [classes.component, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  }, attrs.url, attrs.events);
};

var createContent = function createContent(vnode, _ref5) {
  var h = _ref5.renderer,
      k = _ref5.keys,
      CardActions = _ref5.CardActions,
      CardMedia = _ref5.CardMedia,
      CardPrimary = _ref5.CardPrimary,
      Icon = _ref5.Icon,
      Shadow = _ref5.Shadow,
      ListTile = _ref5.ListTile;


  var dispatcher = function dispatcher(block) {
    var key = Object.keys(block)[0];
    var attrs = _extends({}, block[key], {
      dispatcher: dispatcher,
      key: key
    });
    switch (key) {
      case "actions":
        return h(CardActions, attrs);
      case "header":
        return createHeader({ dispatcher: dispatcher, attrs: attrs, h: h, k: k, Icon: Icon, ListTile: ListTile });
      case "media":
        return h(CardMedia, attrs);
      case "overlay":
        return createOverlay({ dispatcher: dispatcher, attrs: attrs, h: h, k: k });
      case "primary":
        return h(CardPrimary, attrs);
      case "text":
        return createText({ dispatcher: dispatcher, attrs: attrs, h: h, k: k });
      default:
        throw "Content type \"" + key + "\" does not exist";
    }
  };

  var attrs = vnode.attrs;
  var contents = Array.isArray(attrs.content) ? attrs.content.map(dispatcher) : attrs.content;

  return [h(Shadow, {
    z: attrs.z !== undefined ? attrs.z : 1,
    animated: true,
    key: "shadow"
  }), h("div", {
    className: classes.content,
    key: "content"
  }, contents)];
};

var card = Object.freeze({
	getElement: getElement,
	createProps: createProps,
	createContent: createContent
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var actionLayoutClasses = {
  horizontal: classes.actionsHorizontal,
  vertical: classes.actionsVertical,
  justified: classes.actionsJustified
};

var actionClassForLayout = function actionClassForLayout() {
  var layout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "horizontal";
  return actionLayoutClasses[layout];
};

var createProps$1 = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var attrs = vnode.attrs;
  return _extends$1({}, Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    key: "card-actions",
    className: [classes.actions, actionClassForLayout(attrs.layout), attrs.bordered ? classes.actionsBordered : null, attrs.tight ? classes.actionsTight : null, attrs.className || attrs[k.class]].join(" ")
  });
};

var createContent$1 = function createContent(vnode) {
  return vnode.attrs.content;
};

var cardActions = Object.freeze({
	createProps: createProps$1,
	createContent: createContent$1
});

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var imageRatios = {
  landscape: 16 / 9,
  square: 1
};

var mediaSizeClasses = {
  small: classes.mediaSmall,
  regular: classes.mediaRegular,
  medium: classes.mediaMedium,
  large: classes.mediaLarge
};

var mediaSizeClass = function mediaSizeClass() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "regular";
  return mediaSizeClasses[size];
};

var initImage = function initImage(_ref) {
  var dom = _ref.dom,
      img = _ref.img,
      ratio = _ref.ratio,
      origin = _ref.origin;

  img.onload = function () {
    var naturalRatio = this.naturalWidth / this.naturalHeight;
    // crop-x: crop over x axis
    // crop-y: crop over y axis
    var cropClass = naturalRatio < imageRatios[ratio] ? classes.mediaCropX : classes.mediaCropY;
    img.className = cropClass;

    var containerWidth = dom.clientWidth;
    var containerHeight = dom.clientHeight;

    if (naturalRatio < imageRatios[ratio]) {
      // orient on y axis
      if (origin === "center") {
        var imageHeight = containerWidth / naturalRatio;
        var diff = containerHeight - imageHeight;
        var offset = diff / 2;
        this.style.marginTop = offset + "px";
      } else if (origin === "start") {
        this.style.top = 0;
        this.style.bottom = "auto";
      } else {
        // end
        this.style.top = "auto";
        this.style.bottom = 0;
      }
    } else {
      // orient on x axis
      if (origin === "center") {
        var imageWidth = containerHeight * naturalRatio;
        var _diff = containerWidth - imageWidth;
        var _offset = _diff / 2;
        this.style.marginLeft = _offset + "px";
      } else if (origin === "start") {
        this.style.left = 0;
        this.style.right = "auto";
      } else {
        // end
        this.style.left = "auto";
        this.style.right = 0;
      }
    }
  };
};

var onMount = function onMount(vnode) {
  if (!vnode.dom) {
    return;
  }
  var attrs = vnode.attrs;
  var ratio = attrs.ratio || "landscape";
  var origin = attrs.origin || "center";
  var dom = vnode.dom;
  var img = dom.querySelector("img");
  initImage({ dom: dom, img: img, ratio: ratio, origin: origin });
};

var createProps$2 = function createProps(vnode, _ref2) {
  var k = _ref2.keys;

  var attrs = vnode.attrs;
  var ratio = attrs.ratio || "landscape";
  return _extends$2({}, Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    key: "card-media",
    className: [classes.media, mediaSizeClass(attrs.size), ratio === "landscape" ? classes.mediaRatioLandscape : classes.mediaRatioSquare, attrs.className || attrs[k.class]].join(" ")
  });
};

var createContent$2 = function createContent(vnode, _ref3) {
  var h = _ref3.renderer;

  var attrs = vnode.attrs;
  var dispatcher = attrs.dispatcher;
  return [_extends$2({}, attrs.content, { key: "content" }), attrs.overlay ? dispatcher({ overlay: attrs.overlay, key: "overlay" }) : h("div", {
    className: classes.mediaDimmer,
    key: "dimmer"
  })];
};

var cardMedia = Object.freeze({
	onMount: onMount,
	createProps: createProps$2,
	createContent: createContent$2
});

var _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var createProps$3 = function createProps(vnode) {
  var attrs = vnode.attrs;
  var primaryHasMedia = Array.isArray(attrs.content) ? attrs.content.reduce(function (total, current) {
    return Object.keys(current)[0] === "media" ? true : total;
  }, false) : attrs.media || false;
  return _extends$3({}, Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    key: "card-primary",
    className: [classes.primary, attrs.tight ? classes.primaryTight : null, primaryHasMedia ? classes.primaryHasMedia : null].join(" ")
  });
};

var createContent$3 = function createContent(vnode, _ref) {
  var h = _ref.renderer;

  var attrs = vnode.attrs;
  var dispatcher = attrs.dispatcher;
  var primaryDispatch = {
    title: function title(pAttrs) {
      return pAttrs.attrs || pAttrs.props ? pAttrs || pAttrs.props : h("div", {
        className: classes.title,
        key: "title"
      }, [pAttrs.title, pAttrs.subtitle ? h("div", {
        className: classes.subtitle,
        key: "subtitle"
      }, pAttrs.subtitle) : null]);
    },
    media: function media(pAttrs) {
      return h("div", {
        className: classes.primaryMedia,
        key: "media"
      }, dispatcher({ media: pAttrs }));
    },
    actions: function actions(pAttrs) {
      return dispatcher({ actions: pAttrs });
    }
  };

  return Array.isArray(attrs.content) ? attrs.content.map(function (block) {
    var key = Object.keys(block)[0];
    var pAttrs = block[key];
    return primaryDispatch[key] ? primaryDispatch[key](pAttrs) : block;
  }) : [attrs.title ? primaryDispatch.title({
    title: attrs.title,
    subtitle: attrs.subtitle,
    key: "title"
  }) : null, attrs.media ? primaryDispatch.media(attrs.media) : null, attrs.actions ? primaryDispatch.actions(attrs.actions) : null, attrs.content];
};

var cardPrimary = Object.freeze({
	createProps: createProps$3,
	createContent: createContent$3
});

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

var padding_v = 24;
var padding_actions_v = 8;
var actions_button_margin_v = 2;

var vars$1 = {
  image_size_small: 1 * 80,
  image_size_regular: 1.4 * 80,
  image_size_medium: 2 * 80,
  image_size_large: 3 * 80,
  border_radius: __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].unit_block_border_radius,
  padding_h: 16,
  offset_small_padding_v: padding_v - 16,
  padding_actions_h: 8,
  title_padding_h: 16,
  title_padding_v: 24,
  tight_title_padding_bottom: 16,
  text_padding_h: 16,
  text_padding_v: 16,
  text_padding_bottom: 24,
  tight_text_padding_bottom: 16,
  subtitle_line_height_padding_bottom: 7,
  text_line_height_padding_top: 6,
  text_line_height_padding_bottom: 7,
  one_line_height_with_icon: 72,
  icon_element_width: 72 - 4,
  one_line_padding_v: 8,
  actions_padding_v: padding_actions_v - 6,
  actions_button_margin_v: actions_button_margin_v,
  actions_vertical_padding_v: padding_actions_v - actions_button_margin_v,

  color_light_main_background: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_background),
  color_light_title_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_primary),
  color_light_subtitle_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_secondary),
  color_light_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_regular),
  color_light_actions_border: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_border_light),
  color_light_overlay_background: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_background, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_overlay_background),

  color_dark_main_background: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_background),
  color_dark_title_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_primary),
  color_dark_subtitle_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_secondary),
  color_dark_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_regular),
  color_dark_actions_border: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_border_light),
  color_dark_overlay_background: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_background, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_overlay_background)
};




/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return icon; });
/* unused harmony export classes */
/* unused harmony export vars */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_theme__ = __webpack_require__(2);



var classes = {
  component: "pe-icon",

  // states
  avatar: "pe-icon--avatar",
  large: "pe-icon--large",
  medium: "pe-icon--medium",
  regular: "pe-icon--regular",
  small: "pe-icon--small"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

var sizeClasses = {
  small: classes.small,
  regular: classes.regular,
  medium: classes.medium,
  large: classes.large
};

var classForSize = function classForSize() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "regular";
  return sizeClasses[size];
};

var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var attrs = vnode.attrs;
  return _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    className: [classes.component, classForSize(attrs.size), attrs.avatar ? classes.avatar : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  }, attrs.events);
};

var createContent = function createContent(vnode, _ref2) {
  var h = _ref2.renderer,
      SVG = _ref2.SVG;

  var attrs = vnode.attrs;
  return attrs.content ? attrs.content : attrs.svg ? h(SVG, attrs.svg) : attrs.src ? h("img", { src: attrs.src }) : attrs.children || vnode.children;
};

var icon = Object.freeze({
	getElement: getElement,
	createProps: createProps,
	createContent: createContent
});

var vars$1 = {
  size_small: __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].unit_icon_size_small,
  size_regular: __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].unit_icon_size,
  size_medium: __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].unit_icon_size_medium,
  size_large: __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].unit_icon_size_large,
  color_light: "currentcolor",
  color_dark: "currentcolor"
};




/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return svg; });
/* unused harmony export classes */
/* unused harmony export vars */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(0);


var classes = {
  component: "pe-svg"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var attrs = vnode.attrs;
  return _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    className: [classes.component, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  });
};

var createContent = function createContent(vnode) {
  var attrs = vnode.attrs;
  return attrs.content ? attrs.content : attrs.children || vnode.children || attrs;
};

var svg = Object.freeze({
	getElement: getElement,
	createProps: createProps,
	createContent: createContent
});

var vars = {
  color_light: "currentcolor",
  color_dark: "currentcolor"
};




/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return shadow; });
/* unused harmony export classes */
/* unused harmony export vars */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_theme__ = __webpack_require__(2);



var classes = {
  component: "pe-shadow",

  // elements
  bottomShadow: "pe-shadow__bottom",
  topShadow: "pe-shadow__top",

  // states
  animated: "pe-shadow--animated",
  depth_n: "pe-shadow--z-"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var attrs = vnode.attrs;
  return _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    className: [classes.component, attrs.animated && classes.animated, attrs.className || attrs[k.class]].join(" ")
  });
};

var createContent = function createContent(vnode, _ref2) {
  var h = _ref2.renderer;

  var attrs = vnode.attrs;
  var content = attrs.content ? attrs.content : attrs.children || vnode.children;
  var depthClass = "" + classes.depth_n + Math.min(5, attrs.z !== undefined ? attrs.z : 1);
  return [content, h("div", {
    key: "bottom",
    className: [classes.bottomShadow, depthClass].join(" ")
  }), h("div", {
    key: "top",
    className: [classes.topShadow, depthClass].join(" ")
  })];
};

var shadow = Object.freeze({
	getElement: getElement,
	createProps: createProps,
	createContent: createContent
});

var vars$1 = {
  transition: "box-shadow " + __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].animation_duration + " ease-out",

  "shadow-top-z-1": "initial",
  "shadow-bottom-z-1": "0 1px 4px 0 rgba(0, 0, 0, 0.37)",

  "shadow-top-z-2": "0 2px 2px 0 rgba(0, 0, 0, 0.2)",
  "shadow-bottom-z-2": "0 6px 10px 0 rgba(0, 0, 0, 0.3)",

  "shadow-top-z-3": "0 11px 7px 0 rgba(0, 0, 0, 0.19)",
  "shadow-bottom-z-3": "0 13px 25px 0 rgba(0, 0, 0, 0.3)",

  "shadow-top-z-4": "0 14px 12px 0 rgba(0, 0, 0, 0.17)",
  "shadow-bottom-z-4": "0 20px 40px 0 rgba(0, 0, 0, 0.3)",

  "shadow-top-z-5": "0 17px 17px 0 rgba(0, 0, 0, 0.15)",
  "shadow-bottom-z-5": "0 27px 55px 0 rgba(0, 0, 0, 0.3)",

  "shadow-down-z-1": "inset 0px 1px 2px -1px rgba(0, 0, 0, 0.15)",
  "shadow-down-z-2": "inset 0px 4px 6px -3px rgba(0, 0, 0, 0.25)"
};




/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Checkbox; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core_checkbox__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_core_selection_control__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_icon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_mithril_icon_button__ = __webpack_require__(6);






var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var ViewControl = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["b" /* ViewComponent */])(_extends$2({}, __WEBPACK_IMPORTED_MODULE_2_polythene_core_selection_control__["c" /* viewControl */], {
  createContent: function createContent(vnode, args) {
    return __WEBPACK_IMPORTED_MODULE_2_polythene_core_selection_control__["c" /* viewControl */].createContent(vnode, _extends$2(args, { Icon: __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_icon__["a" /* Icon */], IconButton: __WEBPACK_IMPORTED_MODULE_4_polythene_mithril_icon_button__["a" /* IconButton */] }));
  }
}));

ViewControl.displayName = "ViewControl";

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var SelectionControl = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(_extends$1({}, __WEBPACK_IMPORTED_MODULE_2_polythene_core_selection_control__["a" /* coreSelectionControl */], {
  createContent: function createContent(vnode, args) {
    return __WEBPACK_IMPORTED_MODULE_2_polythene_core_selection_control__["a" /* coreSelectionControl */].createContent(vnode, _extends$1(args, { ViewControl: ViewControl }));
  }
}));

SelectionControl.displayName = "SelectionControl";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Checkbox = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(_extends({}, __WEBPACK_IMPORTED_MODULE_1_polythene_core_checkbox__["a" /* coreCheckbox */], {
  component: SelectionControl
}));

Checkbox.displayName = "Checkbox";




/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return checkbox; });
/* unused harmony export classes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core_selection_control__ = __webpack_require__(5);
/* unused harmony reexport vars */
var classes = {
  component: "pe-checkbox-control"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Don't export 'element': it will be the wrapped selection control component (set in polythene-xxx-checkbox)

var iconOn = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z\"/></svg>";
var iconOff = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\"/></svg>";

var icons = {
  iconOff: iconOff,
  iconOn: iconOn
};

// Props to be passed to a selection control

var createProps = function createProps(vnode) {
  var attrs = vnode.attrs;
  return _extends({}, attrs, {
    icons: icons,
    selectable: attrs.selectable || function () {
      return true;
    }, // default: always selectable, regardless the checked state
    instanceClass: classes.component,
    type: "checkbox"
  });
};

var checkbox = Object.freeze({
	createProps: createProps
});





/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DialogInstance */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_core_dialog__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_dialog_pane__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_mithril_shadow__ = __webpack_require__(4);






var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var DialogInstance = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(_extends({}, __WEBPACK_IMPORTED_MODULE_2_polythene_core_dialog__["b" /* coreDialogInstance */], {
  createProps: function createProps(vnode, args) {
    return __WEBPACK_IMPORTED_MODULE_2_polythene_core_dialog__["b" /* coreDialogInstance */].createProps(vnode, _extends(args, { Shadow: __WEBPACK_IMPORTED_MODULE_4_polythene_mithril_shadow__["a" /* Shadow */], DialogPane: __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_dialog_pane__["a" /* DialogPane */] }));
  },
  createContent: function createContent(vnode, args) {
    return __WEBPACK_IMPORTED_MODULE_2_polythene_core_dialog__["b" /* coreDialogInstance */].createContent(vnode, _extends(args, { Shadow: __WEBPACK_IMPORTED_MODULE_4_polythene_mithril_shadow__["a" /* Shadow */], DialogPane: __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_dialog_pane__["a" /* DialogPane */] }));
  }
}));

DialogInstance.displayName = "DialogInstance";

var options = {
  name: "dialog",
  bodyShowClass: __WEBPACK_IMPORTED_MODULE_2_polythene_core_dialog__["a" /* classes */].open,
  defaultId: "default_dialog",
  holderSelector: "div." + __WEBPACK_IMPORTED_MODULE_2_polythene_core_dialog__["a" /* classes */].holder,
  instance: DialogInstance,
  placeholder: "span." + __WEBPACK_IMPORTED_MODULE_2_polythene_core_dialog__["a" /* classes */].placeholder,
  transitions: __WEBPACK_IMPORTED_MODULE_2_polythene_core_dialog__["c" /* transitions */]
};

var Multiple = Object(__WEBPACK_IMPORTED_MODULE_1_polythene_core__["b" /* Multi */])({ options: options, renderer: __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["c" /* renderer */] });
var Dialog = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(Multiple);
Object.getOwnPropertyNames(Multiple).forEach(function (p) {
  return Dialog[p] = Multiple[p];
});

Dialog.displayName = "Dialog";




/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return dialogInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return classes$1; });
/* unused harmony export vars */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return transitions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core_menu__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_theme__ = __webpack_require__(2);




var classes$1 = {
  component: "pe-dialog",

  // elements
  placeholder: "pe-dialog__placeholder",
  holder: "pe-dialog__holder",
  content: "pe-dialog__content",

  // states
  fullScreen: "pe-dialog--full-screen",
  backdrop: "pe-dialog--backdrop",
  open: "pe-dialog--open",

  // lookup
  menuContent: __WEBPACK_IMPORTED_MODULE_1_polythene_core_menu__["a" /* classes */].content
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

var DEFAULT_Z = 3;

var showDialog = function showDialog(state, attrs) {
  if (state.transitioning()) {
    return Promise.resolve();
  }
  var id = state.instanceId;
  state.transitioning(true);
  var transitions = attrs.transitions;
  return Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["n" /* show */])(_extends({}, attrs, transitions.show({ el: state.el, showDuration: attrs.showDuration, showDelay: attrs.showDelay }))).then(function () {
    if (attrs.multipleDidShow) {
      attrs.multipleDidShow(id); // this will call attrs.didShow
    }
    state.transitioning(false);
  });
};

var hideDialog = function hideDialog(state, attrs) {
  if (state.transitioning()) {
    return Promise.resolve();
  }
  var id = state.instanceId;
  state.transitioning(true);
  var transitions = attrs.transitions;
  return Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["e" /* hide */])(_extends({}, attrs, transitions.hide({ el: state.el, hideDuration: attrs.hideDuration, hideDelay: attrs.hideDelay }))).then(function () {
    if (attrs.multipleDidHide) {
      attrs.multipleDidHide(id); // this will call attrs.didHide
    }
    state.transitioning(false);
  });
};

var getInitialState = function getInitialState(vnode, createStream) {
  var transitioning = createStream(false);
  return {
    cleanUp: undefined,
    el: undefined,
    transitioning: transitioning
  };
};

var onMount = function onMount(vnode) {
  if (!vnode.dom) {
    return;
  }
  var state = vnode.state;
  var attrs = vnode.attrs;
  state.el = vnode.dom;

  var handleEscape = function handleEscape(e) {
    if (attrs.fullScreen || attrs.modal) return;
    if (e.key === "Escape") {
      hideDialog(state, _extends({}, attrs, {
        hideDelay: 0
      }));
    }
  };

  state.cleanUp = function () {
    return Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["q" /* unsubscribe */])("keydown", handleEscape);
  };

  Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["o" /* subscribe */])("keydown", handleEscape);

  if (attrs.showInstance) {
    showDialog(state, attrs);
  }
};

var onUnMount = function onUnMount(vnode) {
  return vnode.state.cleanUp();
};

var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var state = vnode.state;
  var attrs = vnode.attrs;
  return _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(attrs, { remove: ["style"] }), // style set in content, and set by show/hide transition
  _defineProperty({
    className: [classes$1.component, attrs.fullScreen ? classes$1.fullScreen : null, attrs.backdrop ? classes$1.backdrop : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  }, k.onclick, function (e) {
    if (e.target !== state.el) {
      return;
    }
    if (attrs.modal) {
      // not allowed
      return;
    }
    hideDialog(state, _extends({}, attrs, {
      hideDelay: 0
    }));
  }), attrs.formOptions ? attrs.formOptions : null);
};

var createContent = function createContent(vnode, _ref2) {
  var h = _ref2.renderer,
      Shadow = _ref2.Shadow,
      DialogPane = _ref2.DialogPane;

  var state = vnode.state;
  var attrs = vnode.attrs;
  if (attrs.hideInstance) {
    hideDialog(state, attrs);
  }
  var pane = attrs.panes && attrs.panes.length ? attrs.panes[0] : h(DialogPane, {
    title: attrs.title,
    header: attrs.header,
    body: attrs.content || attrs.body || attrs.menu,
    footer: attrs.footer,
    footerButtons: attrs.footerButtons,
    className: attrs.className,
    style: attrs.style
  });
  return h("div", {
    className: [classes$1.content, attrs.menu ? classes$1.menuContent : null].join(" "),
    style: attrs.style
  }, [attrs.fullScreen ? null : h(Shadow, {
    z: attrs.z !== undefined ? attrs.z : DEFAULT_Z,
    animated: true
  }), pane]);
};

var dialogInstance = Object.freeze({
	getElement: getElement,
	getInitialState: getInitialState,
	onMount: onMount,
	onUnMount: onUnMount,
	createProps: createProps,
	createContent: createContent
});

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

var vars$1 = {
  border_radius: __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].unit_block_border_radius,

  color_light_backdrop_background: "rgba(0, 0, 0, .4)",
  color_dark_backdrop_background: "rgba(0, 0, 0, .5)",

  color_light_background: rgba(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].color_light_background),
  color_dark_background: rgba(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].color_dark_background),

  color_light_text: rgba(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].blend_light_text_regular),
  color_dark_text: rgba(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].blend_dark_text_regular)
};

var ANIMATION_DURATION = .220;

var show$1 = function show$$1(_ref) {
  var el = _ref.el,
      showDuration = _ref.showDuration,
      showDelay = _ref.showDelay;
  return {
    el: el,
    showDuration: showDuration || ANIMATION_DURATION,
    showDelay: showDelay || 0,
    beforeShow: function beforeShow() {
      return el.style.opacity = 0;
    },
    show: function show$$1() {
      return el.style.opacity = 1;
    }
  };
};

var hide$1 = function hide$$1(_ref2) {
  var el = _ref2.el,
      hideDuration = _ref2.hideDuration,
      hideDelay = _ref2.hideDelay;
  return {
    el: el,
    hideDuration: hideDuration || ANIMATION_DURATION,
    hideDelay: hideDelay || 0,
    hide: function hide$$1() {
      return el.style.opacity = 0;
    }
  };
};

var transitions = {
  show: show$1,
  hide: hide$1
};




/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dialogPane; });
/* unused harmony export classes */
/* unused harmony export vars */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_theme__ = __webpack_require__(2);



var classes = {
  component: "pe-dialog-pane",

  // elements
  actions: "pe-dialog-pane__actions",
  body: "pe-dialog-pane__body",
  content: "pe-dialog-pane__content",
  footer: "pe-dialog-pane__footer",
  header: "pe-dialog-pane__header",
  title: "pe-dialog-pane__title",

  // states
  withHeader: "pe-dialog-pane--header",
  withFooter: "pe-dialog-pane--footer",
  headerWithTitle: "pe-dialog-pane__header--title",
  footerWithButtons: "pe-dialog-pane__footer--buttons",
  footerHigh: "pe-dialog-pane__footer--high",
  borderBottom: "pe-dialog-pane--border-bottom",
  borderTop: "pe-dialog-pane--border-top",
  fullBleed: "pe-dialog-pane--body-full-bleed"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "form";
};

var SCROLL_WATCH_END_TIMER = 150;

var updateScrollOverflowState = function updateScrollOverflowState(vnode) {
  var state = vnode.state;
  var scroller = state.scrollEl();
  if (!scroller) {
    return;
  }
  state.topOverflow(scroller.scrollTop > 0);
  state.bottomOverflow(scroller.scrollHeight - (scroller.scrollTop + scroller.getBoundingClientRect().height) > 0);
};

var updateFooterState = function updateFooterState(vnode) {
  var state = vnode.state;
  var footerEl = state.footerEl();
  if (!footerEl) {
    return;
  }
  var style = window.getComputedStyle(footerEl);
  var height = footerEl.getBoundingClientRect().height;
  var minHeight = parseInt(style.minHeight, 10);
  if (height > minHeight) {
    footerEl.classList.add(classes.footerHigh);
  } else {
    footerEl.classList.remove(classes.footerHigh);
  }
};

var getInitialState = function getInitialState(vnode, createStream) {
  var bottomOverflow = createStream(false);
  var footerEl = createStream();
  var headerEl = createStream();
  var isScrolling = createStream(false);
  var scrollEl = createStream();
  var topOverflow = createStream(false);
  var el = createStream();

  return {
    cleanUp: undefined,
    bottomOverflow: bottomOverflow,
    el: el,
    footerEl: footerEl,
    headerEl: headerEl,
    isScrolling: isScrolling,
    scrollEl: scrollEl,
    scrollWatchId: undefined,
    topOverflow: topOverflow,
    redrawOnUpdate: createStream.merge([topOverflow, bottomOverflow, isScrolling])
  };
};

var onMount = function onMount(vnode) {
  var dom = vnode.dom;
  if (!dom) {
    return;
  }
  var state = vnode.state;
  state.el(dom);

  state.scrollEl(dom.querySelector("." + classes.body));
  state.footerEl(dom.querySelector("." + classes.footer));
  state.headerEl(dom.querySelector("." + classes.title));

  state.isScrolling.map(function () {
    return updateScrollOverflowState(vnode);
  });

  var update = function update() {
    updateScrollOverflowState(vnode);
    updateFooterState(vnode);
  };

  state.cleanUp = function () {
    return Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["q" /* unsubscribe */])("resize", update);
  };

  // resize: update scroll state ("overflow" borders)
  Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["o" /* subscribe */])("resize", update);

  updateScrollOverflowState(vnode);
};

var onUnMount = function onUnMount(vnode) {
  return vnode.state.cleanUp();
};

var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var state = vnode.state;
  var attrs = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["p" /* unpackAttrs */])(vnode.attrs);
  var borders = attrs.borders || "overflow";
  var showTopBorder = borders === "always" || borders === "overflow" && state.topOverflow();
  var showBottomBorder = borders === "always" || borders === "overflow" && state.bottomOverflow();
  var withHeader = attrs.header !== undefined || attrs.title !== undefined;
  var withFooter = attrs.footer !== undefined || attrs.footerButtons !== undefined;
  return _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(attrs, { remove: ["style"] }), // style set in content, and set by show/hide transition
  {
    className: [classes.component, attrs.fullBleed ? classes.fullBleed : null, showTopBorder ? classes.borderTop : null, showBottomBorder ? classes.borderBottom : null, withHeader ? classes.withHeader : null, withFooter ? classes.withFooter : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  }, attrs.formOptions);
};

var createContent = function createContent(vnode, _ref2) {
  var h = _ref2.renderer,
      k = _ref2.keys;

  var state = vnode.state;
  var attrs = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["p" /* unpackAttrs */])(vnode.attrs);

  return h("div", {
    className: [classes.content, attrs.menu ? classes.menuContent : null].join(" "),
    style: attrs.style
  }, [attrs.header ? attrs.header : attrs.title ? h("div", {
    className: [classes.header, classes.headerWithTitle].join(" "),
    key: "title"
  }, h("div", { className: classes.title }, attrs.title)) : null, h("div", _defineProperty({
    className: classes.body,
    key: "body"
  }, k.onscroll, function () {
    state.isScrolling(true);
    clearTimeout(state.scrollWatchId);
    state.scrollWatchId = setTimeout(function () {
      state.isScrolling(false);
    }, SCROLL_WATCH_END_TIMER);
  }), attrs.content || attrs.body || attrs.menu), attrs.footer ? h("div", {
    className: classes.footer,
    key: "footer"
  }, attrs.footer) : attrs.footerButtons ? h("div", {
    className: [classes.footer, classes.footerWithButtons].join(" "),
    key: "footer"
  }, h("div", { className: classes.actions }, attrs.footerButtons)) : null]);
};

var dialogPane = Object.freeze({
	getElement: getElement,
	getInitialState: getInitialState,
	onMount: onMount,
	onUnMount: onUnMount,
	createProps: createProps,
	createContent: createContent
});

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

var vars$1 = {
  padding: 3 * __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].grid_unit_component,
  header_bottom: 20,
  header_height: 60,
  footer_height: 52,

  border_width: 1,

  color_light_title_text: "inherit",
  color_light_body_text: "inherit",
  color_light_body_border: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_border_light),
  color_light_background: "inherit",

  color_dark_title_text: "inherit",
  color_dark_body_text: "inherit",
  color_dark_body_border: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_border_light),
  color_dark_background: "inherit"
};




/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FAB; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core_fab__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_icon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_raised_button__ = __webpack_require__(21);





var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var FAB = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["b" /* ViewComponent */])(_extends({}, __WEBPACK_IMPORTED_MODULE_1_polythene_core_fab__["a" /* coreFAB */], {
  createProps: function createProps(vnode, args) {
    return __WEBPACK_IMPORTED_MODULE_1_polythene_core_fab__["a" /* coreFAB */].createProps(vnode, _extends(args, { Icon: __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_icon__["a" /* Icon */] }));
  },
  createContent: function createContent(vnode, args) {
    return __WEBPACK_IMPORTED_MODULE_1_polythene_core_fab__["a" /* coreFAB */].createContent(vnode, _extends(args, { Icon: __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_icon__["a" /* Icon */] }));
  },
  component: __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_raised_button__["a" /* RaisedButton */]
}));

FAB.displayName = "FAB";




/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fab; });
/* unused harmony export classes */
/* unused harmony export vars */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_theme__ = __webpack_require__(2);


var classes = {
  component: "pe-fab",

  // elements
  content: "pe-fab__content",

  // states
  mini: "pe-fab--mini"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Don't export 'element': it will be the wrapped raised button component (set in polythene-xxx-fab)

// Props to be passed to a raised button, including 'content'
var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys,
      h = _ref.renderer,
      Icon = _ref.Icon;

  var attrs = vnode.attrs;
  var content = attrs.content ? attrs.content : attrs.icon ? h(Icon, attrs.icon) : attrs.children || vnode.children;
  return _extends({}, {
    content: h("div", { className: classes.content }, content),
    parentClassName: [classes.component, attrs.mini ? classes.mini : null, attrs.className || attrs[k.class]].join(" "),
    // defaults
    ripple: {
      center: true,
      opacityDecayVelocity: 0.24
    },
    shadow: { increase: 5 },
    ink: true,
    wash: true,
    animateOnTap: attrs.animateOnTap !== undefined ? attrs.animateOnTap : true
  }, attrs);
};

var createContent = function createContent() {
  return null;
};

var fab = Object.freeze({
	createProps: createProps,
	createContent: createContent
});

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

var vars$1 = {
  size_regular: 7 * __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].grid_unit_component,
  size_mini: 5 * __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].grid_unit_component,
  padding_regular: 2 * __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].grid_unit_component,

  color_light: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].color_primary_foreground),
  color_light_focus_background: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].blend_light_background_hover),

  color_light_focus_opacity: __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].blend_light_background_hover_medium, // same as button
  color_light_background: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].color_primary),

  color_dark: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].color_primary_foreground),
  color_dark_focus_background: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].blend_dark_background_hover), // same as button
  color_dark_background: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].color_primary)
};




/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return raisedButton; });
/* unused harmony export classes */
/* unused harmony export vars */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_theme__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_core_css__ = __webpack_require__(9);




var classes = {
  component: "pe-button pe-text-button pe-raised-button"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Don't export 'getElement': it will be the wrapped button component (set in polythene-xxx-raised-button)

var MAX_Z = 5;

var tapStart = void 0;
var tapEndAll = function tapEndAll() {};
var downButtons = [];

Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["o" /* subscribe */])(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["i" /* pointerEndEvent */], function () {
  return tapEndAll();
});

var animateZ = function animateZ(which, vnode) {
  var zBase = vnode.state.zBase;
  var increase = vnode.attrs.increase || 1;
  var z = vnode.state.z();
  var newZ = which === "down" && zBase < MAX_Z ? Math.min(zBase + increase, MAX_Z) : which === "up" ? Math.max(z - increase, zBase) : z;
  if (newZ !== z) {
    vnode.state.z(newZ);
  }
};

var tapHandler = function tapHandler(which, vnode) {
  if (which === "down") {
    downButtons.push(_extends({}, vnode));
  }
  var animateOnTap = vnode.attrs.animateOnTap !== false ? true : false;
  if (animateOnTap) {
    animateZ(which, vnode);
  }
};

var initTapEvents = function initTapEvents(vnode) {
  if (__WEBPACK_IMPORTED_MODULE_0_polythene_core__["g" /* isServer */]) return;
  tapStart = function tapStart() {
    return tapHandler("down", vnode);
  };
  tapEndAll = function tapEndAll() {
    downButtons.map(function (buttonVnode) {
      return tapHandler("up", buttonVnode);
    });
    downButtons = [];
  };
  vnode.dom.addEventListener(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["m" /* pointerStartMoveEvent */], tapStart);
};

var clearTapEvents = function clearTapEvents(vnode) {
  return vnode.dom.removeEventListener(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["m" /* pointerStartMoveEvent */], tapStart);
};

var getInitialState = function getInitialState(vnode, createStream) {
  var attrs = vnode.attrs;
  var zBase = attrs.z !== undefined ? attrs.z : 1;
  var z = createStream(zBase);
  var tapEventsInited = createStream(false);
  return {
    zBase: zBase,
    z: z,
    tapEventsInited: tapEventsInited,
    redrawOnUpdate: createStream.merge([z])
  };
};

var onMount = function onMount(vnode) {
  var state = vnode.state;
  if (vnode.dom && !state.tapEventsInited()) {
    initTapEvents(vnode);
    state.tapEventsInited(true);
  }
};

var onUnMount = function onUnMount(vnode) {
  if (vnode.state.tapEventsInited()) {
    clearTapEvents(vnode);
  }
};

var createProps = function createProps(vnode, _ref) {
  var h = _ref.renderer,
      Shadow = _ref.Shadow;

  var attrs = vnode.attrs;
  var state = vnode.state;
  var children = attrs.children || vnode.children || [];
  return _extends({}, {
    parentClassName: [attrs.parentClassName || classes.component].join(" "),
    animateOnTap: false,
    shadowComponent: h(Shadow, {
      z: attrs.disabled ? 0 : state.z,
      animated: true
    }),
    children: children
  }, attrs);
};

var createContent = function createContent() {
  return null;
};

var raisedButton = Object.freeze({
	getInitialState: getInitialState,
	onMount: onMount,
	onUnMount: onUnMount,
	createProps: createProps,
	createContent: createContent
});

var vars$1 = {
  color_light_background: "#fff",
  color_light_text: Object(__WEBPACK_IMPORTED_MODULE_2_polythene_core_css__["b" /* rgba */])(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_primary),
  color_light_hover_background: "transparent",
  color_light_focus_background: Object(__WEBPACK_IMPORTED_MODULE_2_polythene_core_css__["b" /* rgba */])(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_background_hover),
  color_light_active_background: Object(__WEBPACK_IMPORTED_MODULE_2_polythene_core_css__["b" /* rgba */])(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_background_hover), // same as hover
  color_light_disabled_background: Object(__WEBPACK_IMPORTED_MODULE_2_polythene_core_css__["b" /* rgba */])(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_background_disabled),
  color_light_disabled_text: Object(__WEBPACK_IMPORTED_MODULE_2_polythene_core_css__["b" /* rgba */])(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_disabled),

  color_dark_background: Object(__WEBPACK_IMPORTED_MODULE_2_polythene_core_css__["b" /* rgba */])(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_primary),
  color_dark_text: Object(__WEBPACK_IMPORTED_MODULE_2_polythene_core_css__["b" /* rgba */])(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_primary),
  color_dark_hover_background: __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_primary_active,
  color_dark_focus_background: __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_primary_active,
  color_dark_active_background: __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_primary_dark,
  color_dark_disabled_background: Object(__WEBPACK_IMPORTED_MODULE_2_polythene_core_css__["b" /* rgba */])(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_background_disabled),
  color_dark_disabled_text: Object(__WEBPACK_IMPORTED_MODULE_2_polythene_core_css__["b" /* rgba */])(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_disabled)
};




/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export IOSSpinner */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_core_ios_spinner__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_base_spinner__ = __webpack_require__(14);





var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var SpinnerInstance = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(_extends({}, __WEBPACK_IMPORTED_MODULE_2_polythene_core_ios_spinner__["b" /* coreIOSSpinner */], { component: __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_base_spinner__["a" /* BaseSpinner */] }));

var SpinnerToggle = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(__WEBPACK_IMPORTED_MODULE_1_polythene_core__["a" /* Conditional */]);
SpinnerToggle.displayName = "IOSSpinnerToggle";

var IOSSpinner = {
  view: function view(vnode) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["c" /* renderer */])(SpinnerToggle, _extends({}, vnode.attrs, {
      placeholderClassName: __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_base_spinner__["a" /* BaseSpinner */].classes.placeholder,
      instance: SpinnerInstance
    }));
  }
};

IOSSpinner.classes = __WEBPACK_IMPORTED_MODULE_2_polythene_core_ios_spinner__["a" /* classes */];
IOSSpinner.displayName = "IOSSpinner";




/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return spinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return classes; });
/* unused harmony export vars */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_theme__ = __webpack_require__(2);


var classes = {
  component: "pe-ios-spinner",

  // elements
  blades: "pe-ios-spinner__blades",
  blade: "pe-ios-spinner__blade"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var blade = function blade(num, h) {
  return h("div", {
    key: "blade-" + num,
    className: classes.blade
  });
};

var createProps = function createProps(vnode, _ref) {
  var h = _ref.renderer;

  var state = vnode.state;
  var attrs = vnode.attrs;
  state.content = state.content || h("div", {
    key: "content",
    className: classes.blades
  }, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(function (num) {
    return blade(num, h);
  }));
  return _extends({}, attrs, {
    className: [classes.component, attrs.className].join(" "),
    content: state.content
  });
};

var spinner = Object.freeze({
	createProps: createProps
});

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

var vars$1 = {
  animation_duration: 1, // seconds

  color_light: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].color_light_foreground),
  color_dark: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].color_dark_foreground)
};




/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export List */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core_list__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_list_tile__ = __webpack_require__(11);




var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var List = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(_extends({}, __WEBPACK_IMPORTED_MODULE_1_polythene_core_list__["a" /* coreList */], {
  createProps: function createProps(vnode, args) {
    return __WEBPACK_IMPORTED_MODULE_1_polythene_core_list__["a" /* coreList */].createProps(vnode, _extends(args, { ListTile: __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_list_tile__["a" /* ListTile */] }));
  },
  createContent: function createContent(vnode, args) {
    return __WEBPACK_IMPORTED_MODULE_1_polythene_core_list__["a" /* coreList */].createContent(vnode, _extends(args, { ListTile: __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_list_tile__["a" /* ListTile */] }));
  }
}));

List.displayName = "List";




/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return list; });
/* unused harmony export classes */
/* unused harmony export vars */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core_list_tile__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_theme__ = __webpack_require__(2);




var classes$1 = {
  component: "pe-list",

  // elements
  header: __WEBPACK_IMPORTED_MODULE_1_polythene_core_list_tile__["a" /* classes */].header,

  // states
  borders: "pe-list--borders",
  compact: "pe-list--compact",
  hasHeader: "pe-list--header",
  indentedBorders: "pe-list--indented-borders",
  padding: "pe-list--padding"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

var onSelect = function onSelect(event, vnode) {
  var state = vnode.state;
  var attrs = vnode.attrs;
  if (attrs.onSelect) {
    var highlightIndex = state.highlightIndex();
    var data = {
      event: event,
      index: highlightIndex,
      dom: state.tiles[highlightIndex].dom,
      attrs: state.tiles[highlightIndex].attrs
    };
    attrs.onSelect(data);
  }
};

var getInitialState = function getInitialState(vnode, createStream) {
  var attrs = vnode.attrs;
  var highlightIndex = createStream(attrs.defaultHighlightIndex !== undefined ? attrs.defaultHighlightIndex : -1);
  var registerTile = function registerTile(state) {
    return function (index, data) {
      return state.tiles[index] = data;
    };
  };
  return {
    tiles: [],
    highlightIndex: highlightIndex,
    registerTile: registerTile,
    redrawOnUpdate: createStream.merge([highlightIndex])
  };
};

var onMount = function onMount(vnode) {
  var state = vnode.state;
  var attrs = vnode.attrs;
  if (attrs.keyboardControl) {
    state.highlightIndex.map(function (index) {
      if (state.tiles[index]) {
        state.tiles[index].dom.focus();
      }
    });
  }
};

var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var state = vnode.state;
  var attrs = vnode.attrs;
  return _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    className: [classes$1.component, attrs.borders ? classes$1.borders : null, attrs.indentedBorders ? classes$1.indentedBorders : null, attrs.header ? classes$1.hasHeader : null, attrs.compact ? classes$1.compact : null, attrs.padding !== false ? classes$1.padding : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  }, attrs.keyboardControl && _defineProperty({}, k.onkeydown, function (e) {
    var highlightIndex = state.highlightIndex();
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault(); // prevent scrolling the page
      var newIndex = Math.min(state.tiles.length - 1, highlightIndex + 1);
      state.tiles[newIndex].dom.focus();
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault(); // prevent scrolling the page
      var _newIndex = Math.max(0, highlightIndex - 1);
      state.tiles[_newIndex].dom.focus();
    } else if (e.key === "Enter") {
      onSelect(e, vnode);
    } else if (e.key === "Escape") {
      state.tiles[highlightIndex].dom.blur();
      state.highlightIndex(-1);
    }
  }));
};

var createContent = function createContent(vnode, _ref3) {
  var h = _ref3.renderer,
      requiresKeys = _ref3.requiresKeys,
      k = _ref3.keys,
      ListTile = _ref3.ListTile;

  var state = vnode.state;
  var attrs = vnode.attrs;
  var headerOpts = void 0;
  if (attrs.header) {
    headerOpts = _extends({}, attrs.header);
    headerOpts[k.class] = [classes$1.header, headerOpts[k.class] || null].join(" ");
  }
  var highlightIndex = state.highlightIndex();
  var tiles = attrs.tiles ? attrs.tiles : attrs.content ? attrs.content : attrs.children || vnode.children;
  var index = -1;
  return [headerOpts ? h(ListTile, _extends({}, requiresKeys ? { key: "header" } : null, headerOpts, {
    header: true
  })) : null, attrs.keyboardControl ? tiles.map(function (tileOpts) {
    if (!tileOpts.header) {
      index++;
    }
    return tileOpts.tag !== undefined ? tileOpts : h(ListTile, _extends({}, tileOpts, !tileOpts.header && {
      keyboardControl: true,
      register: state.registerTile(state),
      setHighlightIndex: state.highlightIndex,
      index: index,
      defaultHighlight: highlightIndex === index,
      events: _extends({}, tileOpts.events, _defineProperty({}, k.onclick, function (e) {
        return onSelect(e, vnode);
      }))
    }));
  }) : tiles];
};

var list = Object.freeze({
	getElement: getElement,
	getInitialState: getInitialState,
	onMount: onMount,
	createProps: createProps,
	createContent: createContent
});

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

var vars$1 = {
  padding: __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].grid_unit_component, // vertical padding
  padding_compact: __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].grid_unit_component * 3 / 4,
  border_width_stacked: 1,
  border_width_bordered: 1,

  color_light_border: rgba(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].blend_light_border_light),
  color_dark_border: rgba(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].blend_dark_border_light)

  // background color may be set in theme; disabled by default
  // color_light_background: "inherit",
  // color_dark_background:  "inherit"
};




/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialDesignSpinner; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_core_material_design_spinner__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_base_spinner__ = __webpack_require__(14);





var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var SpinnerInstance = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(_extends({}, __WEBPACK_IMPORTED_MODULE_2_polythene_core_material_design_spinner__["b" /* coreMaterialDesignSpinner */], { component: __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_base_spinner__["a" /* BaseSpinner */] }));

var SpinnerToggle = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(__WEBPACK_IMPORTED_MODULE_1_polythene_core__["a" /* Conditional */]);
SpinnerToggle.displayName = "MaterialDesignSpinnerToggle";

var MaterialDesignSpinner = {
  view: function view(vnode) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["c" /* renderer */])(SpinnerToggle, _extends({}, vnode.attrs, {
      placeholderClassName: __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_base_spinner__["a" /* BaseSpinner */].classes.placeholder,
      instance: SpinnerInstance
    }));
  }
};

MaterialDesignSpinner.classes = __WEBPACK_IMPORTED_MODULE_2_polythene_core_material_design_spinner__["a" /* classes */];
MaterialDesignSpinner.displayName = "MaterialDesignSpinner";




/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return spinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return classes; });
/* unused harmony export vars */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_theme__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core_base_spinner__ = __webpack_require__(15);



var classes = {
  component: "pe-md-spinner",

  // elements
  animation: "pe-md-spinner__animation",
  circle: "pe-md-spinner__circle",
  circleClipper: "pe-md-spinner__circle-clipper",
  circleClipperLeft: "pe-md-spinner__circle-clipper-left",
  circleClipperRight: "pe-md-spinner__circle-clipper-right",
  gapPatch: "pe-md-spinner__gap-patch",
  layer: "pe-md-spinner__layer",
  layerN: "pe-md-spinner__layer-"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var layer = function layer(num, h) {
  return h("div", {
    key: num,
    className: [classes.layer, classes.layerN + num].join(" ")
  }, [h("div", {
    key: "clipper-left",
    className: [classes.circleClipper, classes.circleClipperLeft].join(" ")
  }, h("div", {
    key: "circle",
    className: classes.circle
  })), h("div", {
    key: "gap-patch",
    className: classes.gapPatch
  }, h("div", { className: classes.circle })), h("div", {
    key: "clipper-right",
    className: [classes.circleClipper, classes.circleClipperRight].join(" ")
  }, h("div", { className: classes.circle }))]);
};

var createProps = function createProps(vnode, _ref) {
  var h = _ref.renderer;

  var state = vnode.state;
  var attrs = vnode.attrs;
  state.content = state.content || h("div", {
    key: "content",
    className: classes.animation
  }, [1, 2, 3, 4].map(function (num) {
    return layer(num, h);
  }));
  return _extends({}, attrs, {
    className: [classes.component, attrs.className].join(" "),
    content: state.content
  });
};

var spinner = Object.freeze({
	createProps: createProps
});

/*
Derived from https://github.com/PolymerElements/paper-spinner

@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

var arc_size = 270; // degrees - amount of circle the arc takes up
var arc_time = 1.333; // s - time it takes to expand and contract arc
var arc_start_degrees = 360 / 5 * 3; // degrees - how much the start location of the arc should rotate each time, 216 gives us a 5 pointed star shape (it"s 360/5 * 3). For a 7 pointed star, we might do 360/7 * 3 = 154.286.
var rotation_duration = 360 * arc_time / (arc_start_degrees + (360 - arc_size)); // 1.568s

var blue400 = "#42a5f5";
var red500 = "#f44336";
var yellow600 = "#fdd835";
var green500 = "#4caf50";

var vars$2 = {
  border_width_small: __WEBPACK_IMPORTED_MODULE_1_polythene_core_base_spinner__["c" /* vars */].size_small / __WEBPACK_IMPORTED_MODULE_1_polythene_core_base_spinner__["c" /* vars */].size_regular * 3,
  border_width_regular: 3,
  border_width_medium: __WEBPACK_IMPORTED_MODULE_1_polythene_core_base_spinner__["c" /* vars */].size_medium / __WEBPACK_IMPORTED_MODULE_1_polythene_core_base_spinner__["c" /* vars */].size_regular * 3,
  border_width_large: __WEBPACK_IMPORTED_MODULE_1_polythene_core_base_spinner__["c" /* vars */].size_large / __WEBPACK_IMPORTED_MODULE_1_polythene_core_base_spinner__["c" /* vars */].size_regular * 3,
  border_width_fab: __WEBPACK_IMPORTED_MODULE_1_polythene_core_base_spinner__["c" /* vars */].size_fab / __WEBPACK_IMPORTED_MODULE_1_polythene_core_base_spinner__["c" /* vars */].size_regular * 3,
  rotation_duration: rotation_duration,
  arc_size: arc_size,
  arc_time: arc_time,
  arc_start_degrees: arc_start_degrees,

  color_light_single: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].color_primary),
  color_light_1: blue400,
  color_light_2: red500,
  color_light_3: yellow600,
  color_light_4: green500,

  color_dark_single: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].color_primary),
  color_dark_1: blue400,
  color_dark_2: red500,
  color_dark_3: yellow600,
  color_dark_4: green500
};




/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MaterialDesignProgressSpinner */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_core_material_design_progress_spinner__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_base_spinner__ = __webpack_require__(14);





var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var SpinnerInstance = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(_extends({}, __WEBPACK_IMPORTED_MODULE_2_polythene_core_material_design_progress_spinner__["b" /* coreMaterialDesignProgressSpinner */], { component: __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_base_spinner__["a" /* BaseSpinner */] }));

var SpinnerToggle = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(__WEBPACK_IMPORTED_MODULE_1_polythene_core__["a" /* Conditional */]);
SpinnerToggle.displayName = "MaterialDesignProgressSpinnerToggle";

var MaterialDesignProgressSpinner = {
  view: function view(vnode) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["c" /* renderer */])(SpinnerToggle, _extends({}, vnode.attrs, {
      placeholderClassName: __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_base_spinner__["a" /* BaseSpinner */].classes.placeholder,
      instance: SpinnerInstance
    }));
  }
};

MaterialDesignProgressSpinner.classes = __WEBPACK_IMPORTED_MODULE_2_polythene_core_material_design_progress_spinner__["a" /* classes */];
MaterialDesignProgressSpinner.displayName = "MaterialDesignProgressSpinner";




/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return spinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return classes; });
/* unused harmony export vars */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_utilities__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_theme__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_core_base_spinner__ = __webpack_require__(15);





var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

var themeVars = _extends$1({}, __WEBPACK_IMPORTED_MODULE_3_polythene_core_base_spinner__["c" /* vars */], {
  border_width_small: __WEBPACK_IMPORTED_MODULE_3_polythene_core_base_spinner__["c" /* vars */].size_small / __WEBPACK_IMPORTED_MODULE_3_polythene_core_base_spinner__["c" /* vars */].size_regular * 3,
  border_width_regular: 3,
  border_width_medium: __WEBPACK_IMPORTED_MODULE_3_polythene_core_base_spinner__["c" /* vars */].size_medium / __WEBPACK_IMPORTED_MODULE_3_polythene_core_base_spinner__["c" /* vars */].size_regular * 3,
  border_width_large: __WEBPACK_IMPORTED_MODULE_3_polythene_core_base_spinner__["c" /* vars */].size_large / __WEBPACK_IMPORTED_MODULE_3_polythene_core_base_spinner__["c" /* vars */].size_regular * 3,
  border_width_fab: __WEBPACK_IMPORTED_MODULE_3_polythene_core_base_spinner__["c" /* vars */].size_fab / __WEBPACK_IMPORTED_MODULE_3_polythene_core_base_spinner__["c" /* vars */].size_regular * 3,
  animation_duration: "1.5s",

  color_light: rgba(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].color_primary),
  color_dark: rgba(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].color_primary)
});

var classes = {
  component: "pe-md-progress-spinner",

  // elements
  animation: "pe-md-progress-spinner__animation",
  circle: "pe-md-progress-spinner__circle",
  circleRight: "pe-md-progress-spinner__circle-right",
  circleLeft: "pe-md-progress-spinner__circle-left"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var DEFAULT_UPDATE_DURATION = .8;

var sizeFromName = function sizeFromName() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "regular";
  return themeVars["size_" + size];
};

var percentageValue = function percentageValue(min, max) {
  var percentage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return min + (max - min) * percentage;
};

var rotateCircle = function rotateCircle(el, min, max, percentage) {
  var style = el.style;
  style["transform"] = style["-webkit-transform"] = style["-moz-transform"] = style["-ms-transform"] = style["-o-transform"] = "rotate(" + percentageValue(min, max, percentage) + "deg)";
};

var animate = function animate(stateEl, size, percentage) {
  var animationEl = stateEl.querySelector("." + classes.animation);
  var animationElStyle = animationEl.style;
  if (percentage < 0.5) {
    animationElStyle.clip = "rect(0px, " + size + "px, " + size + "px, " + size / 2 + "px)";
  } else {
    animationElStyle.clip = "rect(auto, auto, auto, auto)";
  }
  var leftCircle = stateEl.querySelector("." + classes.circleLeft);
  var rightCircle = stateEl.querySelector("." + classes.circleRight);
  leftCircle.style.clip = rightCircle.style.clip = "rect(0px, " + size / 2 + "px, " + size + "px, " + "0px)";
  rotateCircle(rightCircle, 0, 180, Math.min(1, percentage * 2));
  rotateCircle(leftCircle, 0, 360, percentage);
};

var handlePercentage = function handlePercentage(percentage, state, size, attrs) {
  if (!state.dom()) {
    return;
  }
  if (state.animating()) {
    return;
  }
  var previousPercentage = state.percentage();
  if (attrs.animated && previousPercentage !== percentage) {
    var animationDuration = (attrs.updateDuration || DEFAULT_UPDATE_DURATION) * 1000;
    var el = state.dom();
    var start = null;
    var step = function step(timestamp) {
      if (!start) start = timestamp;
      var progress = timestamp - start;
      var stepPercentage = 1.0 / animationDuration * progress;
      var newPercentage = previousPercentage + stepPercentage * (percentage - previousPercentage);
      animate(el, size, __WEBPACK_IMPORTED_MODULE_1_polythene_utilities__["c" /* easing */].easeInOutQuad(newPercentage));
      if (start && progress < animationDuration) {
        window.requestAnimationFrame(step);
      } else {
        start = null;
        state.percentage(percentage);
        state.animating(false);
      }
    };
    state.animating(true);
    window.requestAnimationFrame(step);
  } else {
    animate(state.dom(), size, percentage);
    state.percentage(percentage);
  }
};

var notifyState = function notifyState(state, attrs, size) {
  if (attrs.percentage !== undefined) {
    var percentage = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["p" /* unpackAttrs */])(attrs.percentage);
    handlePercentage(percentage, state, size, attrs);
  }
};

var getSize = function getSize(attrs) {
  var rawSize = sizeFromName(attrs.size);

  var _themeVars$raisedSize = themeVars.raisedSize(rawSize),
      padding = _themeVars$raisedSize.padding,
      paddedSize = _themeVars$raisedSize.paddedSize;

  return attrs.raised ? paddedSize - 2 * padding : rawSize;
};

var getInitialState = function getInitialState(vnode, createStream) {
  var percentage = createStream(0);
  var dom = createStream();
  var animating = createStream(false);
  return {
    dom: dom,
    percentage: percentage,
    animating: animating
  };
};

var onMount = function onMount(vnode) {
  if (!vnode.dom) {
    return;
  }
  var state = vnode.state;
  var attrs = vnode.attrs;
  state.dom(vnode.dom);
  var size = getSize(attrs);
  notifyState(state, attrs, size);
};

var createProps = function createProps(vnode, _ref) {
  var h = _ref.renderer;

  var state = vnode.state;
  var attrs = vnode.attrs;
  var size = getSize(attrs);
  notifyState(state, attrs, size);

  var content = h("div", {
    key: "content",
    className: classes.animation,
    style: {
      width: size + "px",
      height: size + "px"
    }
  }, [h("div", {
    key: "left",
    className: [classes.circle, classes.circleLeft].join(" ")
  }), h("div", {
    key: "right",
    className: [classes.circle, classes.circleRight].join(" ")
  })]);

  return _extends({}, attrs, {
    className: [classes.component, attrs.className].join(" "),
    content: content
  });
};

var spinner = Object.freeze({
	getInitialState: getInitialState,
	onMount: onMount,
	createProps: createProps
});




/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Menu */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_core_menu__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_shadow__ = __webpack_require__(4);





var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var MenuInstance = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(_extends({}, __WEBPACK_IMPORTED_MODULE_2_polythene_core_menu__["b" /* coreMenu */], {
  createContent: function createContent(vnode, args) {
    return __WEBPACK_IMPORTED_MODULE_2_polythene_core_menu__["b" /* coreMenu */].createContent(vnode, _extends(args, { Shadow: __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_shadow__["a" /* Shadow */] }));
  }
}));

var MenuToggle = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(__WEBPACK_IMPORTED_MODULE_1_polythene_core__["a" /* Conditional */]);
MenuToggle.displayName = "MenuToggle";

var Menu = {
  view: function view(vnode) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["c" /* renderer */])(MenuToggle, _extends({}, vnode.attrs, {
      placeholderClassName: __WEBPACK_IMPORTED_MODULE_2_polythene_core_menu__["a" /* classes */].placeholder,
      instance: MenuInstance
    }));
  }
};

Menu.displayName = "Menu";




/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NotificationInstance */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Notification; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_core_notification__ = __webpack_require__(22);




var NotificationInstance = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(__WEBPACK_IMPORTED_MODULE_2_polythene_core_notification__["b" /* coreNotificationInstance */]);

NotificationInstance.displayName = "NotificationInstance";

var options = {
  name: "notification",
  className: __WEBPACK_IMPORTED_MODULE_2_polythene_core_notification__["a" /* classes */].component,
  bodyShowClass: __WEBPACK_IMPORTED_MODULE_2_polythene_core_notification__["a" /* classes */].open,
  defaultId: "default_notification",
  holderSelector: "." + __WEBPACK_IMPORTED_MODULE_2_polythene_core_notification__["a" /* classes */].holder,
  instance: NotificationInstance,
  placeholder: "span." + __WEBPACK_IMPORTED_MODULE_2_polythene_core_notification__["a" /* classes */].placeholder,
  queue: true,
  transitions: __WEBPACK_IMPORTED_MODULE_2_polythene_core_notification__["c" /* transitions */]
};

var Multiple = Object(__WEBPACK_IMPORTED_MODULE_1_polythene_core__["b" /* Multi */])({ options: options, renderer: __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["c" /* renderer */] });
var Notification = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(Multiple);
Object.getOwnPropertyNames(Multiple).forEach(function (p) {
  return Notification[p] = Multiple[p];
});

Notification.displayName = "Notification";




/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return radioButton; });
/* unused harmony export classes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core_selection_control__ = __webpack_require__(5);
/* unused harmony reexport vars */
var classes = {
  component: "pe-radio-control"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Don't export 'element': it will be the wrapped selection control component (set in polythene-xxx-checkbox)

var iconOn = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"/></svg>";
var iconOff = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"/></svg>";

var icons = {
  iconOff: iconOff,
  iconOn: iconOn
};

// Props to be passed to a selection control

var createProps = function createProps(vnode) {
  var attrs = vnode.attrs;
  return _extends({}, attrs, {
    icons: icons,
    selectable: attrs.selectable || function (selected) {
      return !selected;
    }, // default: only selectable when not checked
    instanceClass: classes.component,
    type: "radio"
  });
};

var radioButton = Object.freeze({
	createProps: createProps
});





/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadioGroup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core_radio_group__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_radio_button__ = __webpack_require__(23);




var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var RadioGroup = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(_extends({}, __WEBPACK_IMPORTED_MODULE_1_polythene_core_radio_group__["a" /* coreRadioGroup */], {
  createContent: function createContent(vnode, args) {
    return __WEBPACK_IMPORTED_MODULE_1_polythene_core_radio_group__["a" /* coreRadioGroup */].createContent(vnode, _extends(args, { RadioButton: __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_radio_button__["a" /* RadioButton */] }));
  }
}));

RadioGroup.displayName = "RadioGroup";




/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return radioGroup; });
/* unused harmony export classes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(0);


var classes = {
  component: "pe-radio-group"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

var getInitialState = function getInitialState(vnode, createStream) {
  var checkedValue = createStream();
  return {
    checkedValue: checkedValue,
    redrawOnUpdate: createStream.merge([checkedValue])
  };
};

var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var attrs = vnode.attrs;
  return _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    className: [classes.component, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  });
};

var createContent = function createContent(vnode, _ref2) {
  var h = _ref2.renderer,
      RadioButton = _ref2.RadioButton;

  var attrs = vnode.attrs;
  var state = vnode.state;
  var checkedValue = state.checkedValue();

  var buttons = attrs.content ? attrs.content : attrs.buttons ? attrs.buttons : attrs.children || vnode.children || [];

  return buttons.length ? buttons.map(function (buttonOpts) {
    if (!buttonOpts) {
      return null;
    }
    // Only set defaultChecked the first time when no value has been stored yet
    var isDefaultChecked = (buttonOpts.defaultChecked || buttonOpts.checked) && checkedValue === undefined;
    if (buttonOpts.value === undefined) {
      console.error("Option 'value' not set for radio button"); // eslint-disable-line no-console
    }
    var isChecked = isDefaultChecked || attrs.checked || checkedValue === buttonOpts.value;
    return h(RadioButton, _extends({}, {
      /* group attributes that may be overwritten by individual buttons */
      name: attrs.name,
      key: buttonOpts.value
    }, attrs.all,
    /* individual button options */
    buttonOpts, {
      /* this component's options */
      onChange: function onChange(newState) {
        return state.checkedValue(newState.value), attrs.onChange && attrs.onChange({ value: newState.value });
      },
      checked: isChecked
    }));
  }) : null;
};

var radioGroup = Object.freeze({
	getElement: getElement,
	getInitialState: getInitialState,
	createProps: createProps,
	createContent: createContent
});




/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Search */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core_search__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_textfield__ = __webpack_require__(24);




var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Search = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(_extends({}, __WEBPACK_IMPORTED_MODULE_1_polythene_core_search__["a" /* coreSearch */], {
  createContent: function createContent(vnode, args) {
    return __WEBPACK_IMPORTED_MODULE_1_polythene_core_search__["a" /* coreSearch */].createContent(vnode, _extends(args, { TextField: __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_textfield__["a" /* TextField */] }));
  }
}));

Search.displayName = "Search";




/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return search; });
/* unused harmony export classes */
/* unused harmony export vars */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_theme__ = __webpack_require__(2);



var classes = {
  component: "pe-search",

  // elements
  content: "pe-search__content",

  // states
  searchFullWidth: "pe-search--full-width",
  searchInset: "pe-search--inset"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

var getNameOfState = function getNameOfState(state) {
  return state.focus && state.dirty ? "focus_dirty" : state.focus ? "focus" : state.dirty ? "dirty" : "none";
};

var getInitialState = function getInitialState(vnode, createStream) {
  var searchState = createStream({});
  return {
    searchState: searchState
  };
};

var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var attrs = vnode.attrs;
  return _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    className: [classes.component, attrs.fullWidth ? classes.searchFullWidth : classes.searchInset, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  }, attrs.events);
};

var createContent = function createContent(vnode, _ref2) {
  var h = _ref2.renderer,
      TextField = _ref2.TextField;

  var state = vnode.state;
  var attrs = vnode.attrs;
  var searchState = getNameOfState(state.searchState());
  var buttons = (attrs.buttons || {})[searchState] || {};
  var textfieldAttrs = attrs.textfield || {};
  return h("div", { className: classes.content }, [buttons.before, h(TextField, _extends({}, textfieldAttrs, {
    key: "input",
    onChange: function onChange(newState) {
      state.searchState(newState);
      if (textfieldAttrs.onChange) {
        textfieldAttrs.onChange(newState);
      }
    }
  })), buttons.after]);
};

var search = Object.freeze({
	getElement: getElement,
	getInitialState: getInitialState,
	createProps: createProps,
	createContent: createContent
});

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

var insetSideMargin = 8;
var line_height_input = 20;
var font_size_input = 20;
var inset_height = 48;
var inset_input_indent = 16;
var inset_input_right_padding = 0;
var inset_side_padding = 0;
var inset_border_radius = __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].unit_block_border_radius;
var full_width_side_margin = 0;
var full_width_height = 56;
var full_width_side_padding = insetSideMargin;
var full_width_input_right_padding = 0;
var full_width_border_radius = 0;

var vars$1 = {
  font_size_input: font_size_input,
  line_height_input: line_height_input,

  inset_height: inset_height,
  inset_input_indent: inset_input_indent,
  inset_side_padding: inset_side_padding,
  inset_input_right_padding: inset_input_right_padding,
  inset_border_radius: inset_border_radius,

  full_width_height: full_width_height,
  full_width_side_margin: full_width_side_margin,
  full_width_side_padding: full_width_side_padding,
  full_width_input_right_padding: full_width_input_right_padding,
  full_width_border_radius: full_width_border_radius,

  color_light_label_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_disabled),
  color_light_input_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_primary),
  color_light_background: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_background),

  color_dark_label_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_disabled),
  color_dark_input_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_primary),
  color_dark_background: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_background)
};




/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return textfield; });
/* unused harmony export classes */
/* unused harmony export vars */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_theme__ = __webpack_require__(2);



var classes = {
  component: "pe-textfield",

  // elements
  counter: "pe-textfield__counter",
  error: "pe-textfield__error",
  errorPlaceholder: "pe-textfield__error-placeholder",
  focusHelp: "pe-textfield__help-focus",
  help: "pe-textfield__help",
  input: "pe-textfield__input",
  inputArea: "pe-textfield__input-area",
  label: "pe-textfield__label",
  optionalIndicator: "pe-textfield__optional-indicator",
  requiredIndicator: "pe-textfield__required-indicator",

  // states
  hasCounter: "pe-textfield--counter",
  hasFloatingLabel: "pe-textfield--floating-label",
  hasFullWidth: "pe-textfield--full-width",
  hideClear: "pe-textfield--hide-clear",
  hideSpinner: "pe-textfield--hide-spinner",
  hideValidation: "pe-textfield--hide-validation",
  isDense: "pe-textfield--dense",
  isRequired: "pe-textfield--required",
  stateDirty: "pe-textfield--dirty",
  stateDisabled: "pe-textfield--disabled",
  stateFocused: "pe-textfield--focused",
  stateInvalid: "pe-textfield--invalid",
  stateReadonly: "pe-textfield--readonly"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

var validateCustom = function validateCustom(state, attrs) {
  var validState = attrs.validate(state.inputEl().value);
  return {
    invalid: validState && !validState.valid,
    message: validState && validState.error
  };
};

var validateCounter = function validateCounter(state, attrs) {
  return {
    invalid: state.inputEl().value.length > attrs.counter,
    message: attrs.error
  };
};

var validateHTML = function validateHTML(state, attrs) {
  return {
    invalid: !state.inputEl().checkValidity(),
    message: attrs.error
  };
};

var getValidStatus = function getValidStatus(state, attrs) {
  var status = {
    invalid: false,
    message: undefined
  };

  // attrs.validateResetOnClear: reset validation when field is cleared
  if (state.isTouched() && state.isInvalid() && state.inputEl().value.length === 0 && attrs.validateResetOnClear) {
    state.isTouched(false);
    state.isInvalid(false);
    state.error(undefined);
  }
  if (!status.invalid && attrs.counter) {
    status = validateCounter(state, attrs);
  }
  if (!status.invalid && state.inputEl() && state.inputEl().checkValidity) {
    status = validateHTML(state, attrs);
  }
  if (!status.invalid && attrs.validate) {
    status = validateCustom(state, attrs);
  }
  return status;
};

var checkValidity = function checkValidity(vnode) {
  var state = vnode.state;
  var attrs = vnode.attrs;
  // default
  var status = !state.isTouched() && !attrs.validateAtStart ? {
    invalid: false,
    message: undefined
  } : getValidStatus(state, attrs);
  var previousInvalid = state.isInvalid();
  state.error(status.message);

  if (status.invalid !== previousInvalid) {
    state.isInvalid(status.invalid);
  }
  if (!status.invalid) {
    state.error(undefined);
  }
};

var notifyState = function notifyState(vnode) {
  var state = vnode.state;
  var attrs = vnode.attrs;
  if (attrs.onChange) {
    var status = getValidStatus(state, attrs);
    attrs.onChange({
      focus: state.hasFocus(),
      dirty: state.isDirty(),
      el: state.inputEl(),
      invalid: status.invalid,
      error: status.error,
      value: state.inputEl().value
    });
  }
};

var ignoreEvent = function ignoreEvent(attrs, name) {
  return attrs.ignoreEvents && attrs.ignoreEvents.indexOf(name) !== -1;
};

var getInitialState = function getInitialState(vnode, createStream) {
  var attrs = vnode.attrs;

  var defaultValue = attrs.defaultValue !== undefined ? attrs.defaultValue : attrs.value !== undefined ? attrs.value : "";

  var el = createStream();
  var inputEl = createStream();
  var setValue = createStream();
  var error = createStream(attrs.error);
  var hasFocus = createStream(attrs.focus || false);
  var setFocus = createStream();
  var isTouched = createStream(false); // true when any change is made
  var isDirty = createStream(defaultValue !== ""); // true for any input
  var isInvalid = createStream(false);
  var previousValue = createStream();

  return {
    defaultValue: defaultValue,
    previousValue: previousValue,
    el: el,
    error: error,
    hasFocus: hasFocus,
    inputEl: inputEl,
    isInvalid: isInvalid,
    isTouched: isTouched,
    isDirty: isDirty,
    setFocus: setFocus,
    setValue: setValue,
    redrawOnUpdate: createStream.merge([inputEl, isInvalid, isDirty])
  };
};

var onMount = function onMount(vnode) {
  var dom = vnode.dom;
  var state = vnode.state;
  var attrs = vnode.attrs;

  state.el(dom);
  var inputType = attrs.multiLine ? "textarea" : "input";
  var inputEl = dom.querySelector(inputType);
  vnode.state.inputEl(inputEl);
  state.inputEl().value = state.defaultValue;

  state.setValue.map(function (_ref) {
    var type = _ref.type,
        focus = _ref.focus;
    return focus !== undefined && state.setFocus(focus), type === "input" && (attrs.validateOnInput || attrs.counter) && state.isTouched(state.inputEl().value !== ""), type !== "input" && state.isTouched(state.inputEl().value !== ""), type === "onblur" && state.isTouched(true), state.isDirty(state.inputEl().value !== ""), checkValidity(vnode), notifyState(vnode), state.previousValue(state.inputEl().value);
  });

  state.setFocus.map(function (focusState) {
    state.hasFocus(focusState);
    if (focusState && state.inputEl()) {
      // Draw in next tick, to prevent getting an immediate onblur
      // Explicit setting of focus needed for most browsers other than Safari
      setTimeout(function () {
        return state.inputEl() && state.inputEl().focus && state.inputEl().focus();
      }, 0);
    }
  });

  notifyState(vnode);
};

var createProps = function createProps(vnode, _ref2) {
  var k = _ref2.keys;

  var state = vnode.state;
  var attrs = vnode.attrs;
  var isInvalid = state.isInvalid();

  return _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    className: [classes.component, isInvalid ? classes.stateInvalid : "", state.hasFocus() ? classes.stateFocused : "", state.isDirty() ? classes.stateDirty : "", attrs.floatingLabel ? classes.hasFloatingLabel : "", attrs.disabled ? classes.stateDisabled : "", attrs.readonly ? classes.stateReadonly : "", attrs.dense ? classes.isDense : "", attrs.required ? classes.isRequired : "", attrs.fullWidth ? classes.hasFullWidth : "", attrs.counter ? classes.hasCounter : "", attrs.hideSpinner !== false ? classes.hideSpinner : "", attrs.hideClear !== false ? classes.hideClear : "", attrs.hideValidation ? classes.hideValidation : "", attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  });
};

var createContent = function createContent(vnode, _ref3) {
  var h = _ref3.renderer,
      k = _ref3.keys;

  var state = vnode.state;
  var attrs = vnode.attrs;

  var inputEl = state.inputEl();
  var isInvalid = state.isInvalid();
  var inputType = attrs.multiLine ? "textarea" : "input";
  var type = attrs.multiLine ? null : !attrs.type || attrs.type === "submit" || attrs.type === "search" ? "text" : attrs.type;
  var showError = isInvalid && state.error() !== undefined;
  var validates = attrs.validate || attrs.min || attrs.max || attrs[k.minlength] || attrs[k.maxlength] || attrs.required || attrs.pattern;
  var inactive = attrs.disabled || attrs[k.readonly];

  if (attrs.focus && !state.hasFocus() && !inactive) {
    state.setFocus(true);
  }

  var value = attrs.value !== undefined ? attrs.value : inputEl ? inputEl.value : state.previousValue();
  var valueStr = value === undefined ? "" : value.toString();

  if (inputEl && state.previousValue() !== valueStr) {
    inputEl.value = valueStr;
    state.previousValue(valueStr);
    setTimeout(function () {
      return state.setValue({ type: "input" });
    }, 0); // perform in next tick to play nice with React
  }

  var requiredIndicator = attrs.required && attrs.requiredIndicator !== "" ? h("span", {
    key: "required",
    className: classes.requiredIndicator
  }, attrs.requiredIndicator || "*") : null;
  var optionalIndicator = !attrs.required && attrs.optionalIndicator ? h("span", {
    key: "optional",
    className: classes.optionalIndicator
  }, attrs.optionalIndicator) : null;
  var label = attrs.label ? [attrs.label, requiredIndicator, optionalIndicator] : null;

  return [h("div", {
    className: classes.inputArea,
    key: "input-area"
  }, [label ? h("label", _defineProperty({
    key: "label",
    className: classes.label
  }, k["on" + __WEBPACK_IMPORTED_MODULE_0_polythene_core__["l" /* pointerStartEvent */]], function () {
    if (!inactive) {
      setTimeout(function () {
        state.inputEl.focus();
      }, 0);
    }
  }), label) : null, h(inputType, _extends({}, {
    key: "input",
    className: classes.input,
    disabled: attrs.disabled
  }, type ? { type: type } : null, attrs.name ? { name: attrs.name } : null, !ignoreEvent(attrs, [k.onclick]) ? _defineProperty({}, k.onclick, function () {
    if (inactive) {
      return;
    }
    // in case the browser does not give the field focus,
    // for instance when the user tapped to the current field off screen
    state.setFocus(true);
    notifyState(vnode);
  }) : null, !ignoreEvent(attrs, [k.onfocus]) ? _defineProperty({}, k.onfocus, function () {
    if (inactive) {
      return;
    }
    state.setFocus(true);
    // set CSS class manually in case field gets focus but is off screen
    // and no redraw is triggered
    // at the next redraw state.hasFocus() will be read and the focus class be set
    // in the props.class statement
    if (state.el()) {
      state.el().classList.add(classes.stateFocused);
    }
    notifyState(vnode);
  }) : null, !ignoreEvent(attrs, [k.onblur]) ? _defineProperty({}, k.onblur, function () {
    state.setValue({ type: "onblur", focus: false });
    // same principle as onfocus
    state.el().classList.remove(classes.stateFocused);
  }) : null, !ignoreEvent(attrs, [k.oninput]) ? _defineProperty({}, k.oninput, function () {
    // default input event
    // may be overwritten by attrs.events
    state.setValue({ type: "input" });
  }) : null, !ignoreEvent(attrs, [k.onkeydown]) ? _defineProperty({}, k.onkeydown, function (e) {
    if (e.key === "Enter") {
      state.isTouched(true);
    } else if (e.key === "Escape") {
      inputEl.blur(e);
    }
  }) : null, attrs.events ? attrs.events : null, // NOTE: may overwrite oninput
  attrs[k.readonly] !== undefined ? _defineProperty({}, k.readonly, true) : null, attrs.pattern !== undefined ? { pattern: attrs.pattern } : null, attrs[k.maxlength] !== undefined ? _defineProperty({}, k.maxlength, attrs[k.maxlength]) : null, attrs[k.minlength] !== undefined ? _defineProperty({}, k.minlength, attrs[k.minlength]) : null, attrs.max !== undefined ? { max: attrs.max } : null, attrs.min !== undefined ? { min: attrs.min } : null, attrs[k.autofocus] !== undefined ? _defineProperty({}, k.autofocus, attrs[k.autofocus]) : null, attrs.required !== undefined ? { required: attrs.required } : null, attrs[k.tabindex] !== undefined ? _defineProperty({}, k.tabindex, attrs[k.tabindex]) : null, attrs.rows !== undefined ? { rows: attrs.rows } : null))]), attrs.counter ? h("div", {
    key: "counter",
    className: classes.counter
  }, (inputEl && inputEl.value.length || 0) + " / " + attrs.counter) : null, attrs.help && !showError ? h("div", {
    key: "help",
    className: [classes.help, attrs.focusHelp ? classes.focusHelp : null].join(" ")
  }, attrs.help) : null, showError ? h("div", {
    key: "error",
    className: classes.error
  }, state.error()) : validates && !attrs.help ? h("div", {
    key: "error-placeholder",
    className: classes.errorPlaceholder
  }) : null];
};

var textfield = Object.freeze({
	getElement: getElement,
	getInitialState: getInitialState,
	onMount: onMount,
	createProps: createProps,
	createContent: createContent
});

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

var line_height_input = 20;
var input_padding_v = 7;

var vars$1 = {
  vertical_spacing_top: 6, // 8 minus natural label height padding (1)
  vertical_spacing_bottom: 7, // 8 minus natural label height padding (1)
  input_focus_border_width: 2,
  input_focus_border_animation_duration: __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].animation_duration,

  floating_label_vertical_spacing_top: 30, // 16 + 8 + 8 minus natural label height padding (2)
  floating_label_vertical_spacing_bottom: 7, // 8 minus natural label height padding (1)
  floating_label_top: 14,
  floating_label_animation_duration: ".12s",

  input_padding_h: 0,
  input_padding_v: input_padding_v,
  input_border_width: 1,
  margin_top_error_message: 6,
  font_size_input: 16,
  font_size_error: 12,
  font_size_floating_label: 12,

  line_height_input: line_height_input,

  dense_floating_label_vertical_spacing_top: 23, // 12 + 8 + 4 minus natural label height padding (1)
  dense_floating_label_vertical_spacing_bottom: 4, // 8 minus natural label height padding (1)
  dense_floating_label_top: 10,
  dense_font_size_input: 13,
  dense_font_size_floating_label: 13,

  full_width_input_padding_h: 20,
  full_width_input_padding_v: 18, // 20 minus natural label height padding (2)

  dense_full_width_input_padding_h: 16,
  dense_full_width_input_padding_v: 15, // 16 minus natural label height padding (1)
  dense_full_width_font_size_input: 13,

  color_light_input_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_primary),
  color_light_input_background: "transparent", // only used to "remove" autofill color
  color_light_highlight_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_primary, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_primary),
  color_light_input_bottom_border: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_border_light),
  color_light_input_error_text: rgba("221, 44, 0"),
  color_light_input_error_border: rgba("221, 44, 0"),
  color_light_input_placeholder: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_tertiary),
  color_light_label_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_tertiary),
  color_light_disabled_label_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_disabled),
  color_light_readonly_label_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_tertiary),
  color_light_help_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_tertiary),
  color_light_required_symbol: rgba("221, 44, 0"),
  color_light_focus_border: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_primary),
  color_light_counter_ok_border: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_primary),

  color_dark_input_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_primary),
  color_dark_input_background: "transparent", // only used to "remove" autofill color
  color_dark_highlight_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_primary, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_primary),
  color_dark_input_bottom_border: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_border_light),
  color_dark_input_error_text: rgba("222, 50, 38"),
  color_dark_input_error_border: rgba("222, 50, 38"),
  color_dark_input_placeholder: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_tertiary),
  color_dark_label_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_tertiary),
  color_dark_disabled_label_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_disabled),
  color_dark_readonly_label_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_tertiary),
  color_dark_help_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_tertiary),
  color_dark_required_symbol: rgba("221, 44, 0"),
  color_dark_focus_border: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_primary),
  color_dark_counter_ok_border: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_primary)
};




/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Slider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core_slider__ = __webpack_require__(62);



var Slider = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(__WEBPACK_IMPORTED_MODULE_1_polythene_core_slider__["a" /* coreSlider */]);

Slider.displayName = "Slider";




/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slider; });
/* unused harmony export classes */
/* unused harmony export vars */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_theme__ = __webpack_require__(2);



var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

var lightForeground = __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground;
var darkForeground = __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground;
var activeColor = __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_primary; // or override in CSS by setting 'color' property on '.pe-slider'
var thumb_size = 12;
var thumb_touch_size = Math.max(40, thumb_size);
var thumb_border_width = 2;
var active_thumb_scale = 3 / 2;
var disabled_thumb_scale = 1 / 2;
var active_pin_thumb_scale = 2 / 6;
var largestThumbSize = active_thumb_scale * thumb_size;
var largestElement = Math.max(thumb_touch_size, largestThumbSize);
var height = Math.max(52, largestThumbSize);
var side_spacing = Math.max(10, largestElement / 2 - thumb_size / 2);
var horizontal_layout_side_spacing = side_spacing + 4; // optimization for horizontal layout

var themeVars = {
  height: height,
  side_spacing: side_spacing,
  horizontal_layout_side_spacing: horizontal_layout_side_spacing,
  thumb_size: thumb_size,
  thumb_touch_size: thumb_touch_size,
  track_height: height,
  bar_height: 2,
  thumb_border_width: thumb_border_width,
  active_thumb_scale: active_thumb_scale,
  animation_duration: __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].animation_duration,
  disabled_thumb_scale: disabled_thumb_scale,
  active_pin_thumb_scale: active_pin_thumb_scale,

  step_width: 2,
  pin_height: 32,
  pin_width: 26,
  pin_font_size: 10,

  color_light_track_active: rgba(lightForeground, .38),
  color_light_track_inactive: rgba(lightForeground, .26),
  color_light_track_value: rgba(activeColor),
  // background color may be set in theme; disabled by default
  // color_light_thumb_background:        undefined,
  color_light_thumb_off: rgba(lightForeground, .26),
  color_light_thumb_off_focus: rgba(lightForeground),
  color_light_thumb_off_focus_opacity: .08,
  color_light_thumb_on: rgba(activeColor),
  color_light_thumb_on_focus_opacity: .11,
  color_light_thumb_inactive: rgba(lightForeground, .26),
  color_light_tick: rgba(lightForeground, 1),
  color_light_icon: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_secondary),
  color_light_disabled_icon: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_disabled),
  color_light_label: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_secondary),
  color_light_disabled_label: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_disabled),

  color_dark_track_active: rgba(darkForeground, .3),
  color_dark_track_inactive: rgba(darkForeground, .2),
  color_dark_track_value: rgba(activeColor),
  // background color may be set in theme; disabled by default
  // color_dark_thumb_background:         undefined,
  color_dark_thumb_off: rgba(darkForeground, .2),
  color_dark_thumb_off_focus: rgba(darkForeground),
  color_dark_thumb_off_focus_opacity: .08,
  color_dark_thumb_on: rgba(activeColor),
  color_dark_thumb_on_focus_opacity: .11,
  color_dark_thumb_inactive: rgba(darkForeground, .2),
  color_dark_tick: rgba(darkForeground, 1),
  color_dark_icon: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_secondary),
  color_dark_disabled_icon: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_disabled),
  color_dark_label: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_secondary),
  color_dark_disabled_label: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_disabled)
};

var classes = {
  component: "pe-slider",

  // elements
  control: "pe-slider__control",
  label: "pe-slider__label",
  pin: "pe-slider__pin",
  thumb: "pe-slider__thumb",
  tick: "pe-slider__ticks-tick",
  ticks: "pe-slider__ticks",
  track: "pe-slider__track",
  trackBar: "pe-slider__track-bar",
  trackBarValue: "pe-slider__track-bar-value",
  trackPart: "pe-slider__track-part",
  trackPartRest: "pe-slider__track-rest",
  trackPartValue: "pe-slider__track-value",

  // states
  hasFocus: "pe-slider--focus",
  hasPin: "pe-slider--pin",
  hasTicks: "pe-slider--ticks",
  hasTrack: "pe-slider--track",
  isActive: "pe-slider--active",
  isAtMin: "pe-slider--min",
  isDisabled: "pe-slider--disabled"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MAX_TICKS = 100;
var focusElement = void 0;

var deFocus = function deFocus(state) {
  if (focusElement) {
    focusElement.blur();
  }
  focusElement = undefined;
  state.hasFocus(false);
};

var focus = function focus(state, el) {
  deFocus(state);
  focusElement = el;
  state.hasFocus(true);
};

var positionFromEvent = function positionFromEvent(e, isVertical) {
  return (
    // isVertical not yet implemented
    __WEBPACK_IMPORTED_MODULE_0_polythene_core__["h" /* isTouch */] && e.touches ? isVertical ? e.touches[0].pageY : e.touches[0].pageX : isVertical ? e.pageY : e.pageX
  );
};

var updatePinPosition = function updatePinPosition(state) {
  if (state.controlEl && state.pinEl) {
    var left = state.fraction() * state.rangeWidth;
    state.pinEl.style.left = left + "px";
  }
};

var updateValue = function updateValue(state, value) {
  state.setValue(value, true);
  updatePinPosition(state);
};

var generateTickMarks = function generateTickMarks(h, stepCount) {
  var items = [];
  var s = stepCount + 1;
  while (s > 0) {
    items.push(h("div", {
      className: classes.tick,
      key: "tick-" + s
    }));
    s--;
  }
  return items;
};

var readRangeData = function readRangeData(state) {
  if (state.controlEl && __WEBPACK_IMPORTED_MODULE_0_polythene_core__["f" /* isClient */]) {
    // range is from the far left to the far right minus the thumb width (max x is at the left side of the thumb)
    state.controlWidth = themeVars.thumb_size;
    state.rangeWidth = state.trackEl.getBoundingClientRect().width - state.controlWidth;
    var styles = window.getComputedStyle(state.trackEl);
    state.rangeOffset = parseFloat(styles.marginLeft);
  }
};

var calculateClickOffset = function calculateClickOffset(state) {
  var controlOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  state.clickOffset = state.trackEl.getBoundingClientRect().left - (state.rangeOffset - state.controlWidth / 2) + controlOffset;
};

var initControlEvent = function initControlEvent(state, e) {
  var controlPos = state.controlEl.getBoundingClientRect().left;
  var eventPos = positionFromEvent(e);
  var controlOffset = eventPos - controlPos - state.controlWidth / 2;
  calculateClickOffset(state, controlOffset);
};

var initTrackEvent = function initTrackEvent(state) {
  return calculateClickOffset(state, 0);
};

var handlePosEvent = function handlePosEvent(state, e) {
  var pos = positionFromEvent(e) - state.clickOffset;
  var value = state.min + (pos - state.rangeOffset) / state.rangeWidth * (state.max - state.min);
  updateValue(state, value);
};

var startDrag = function startDrag(state, attrs, e) {
  if (state.isDragging()) return;
  e.preventDefault();
  state.isDragging(true);
  state.isActive(true);
  deFocus(state);

  var drag = function drag(e) {
    if (!state.isDragging()) return;
    handlePosEvent(state, e);
  };

  var endDrag = function endDrag() {
    if (!state.isDragging()) return;
    deFocus(state);
    if (__WEBPACK_IMPORTED_MODULE_0_polythene_core__["f" /* isClient */]) {
      window.removeEventListener(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["k" /* pointerMoveEvent */], drag);
      window.removeEventListener(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["j" /* pointerEndMoveEvent */], endDrag);
    }
    state.isDragging(false);
    state.isActive(false);
  };

  if (__WEBPACK_IMPORTED_MODULE_0_polythene_core__["f" /* isClient */]) {
    window.addEventListener(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["k" /* pointerMoveEvent */], drag);
    window.addEventListener(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["j" /* pointerEndMoveEvent */], endDrag);
  }
  readRangeData(state);

  if (attrs.pin) {
    updatePinPosition(state);
  }
};

var startTrack = function startTrack(state, attrs, e) {
  e.preventDefault();
  if (state.isDragging()) {
    return;
  }
  readRangeData(state);
  initTrackEvent(state);
  handlePosEvent(state, e);
  startDrag(state, attrs, e);
};

var createSlider = function createSlider(vnode, _ref) {
  var _ref3;

  var h = _ref.h,
      k = _ref.k,
      hasTicks = _ref.hasTicks,
      interactiveTrack = _ref.interactiveTrack;

  var state = vnode.state;
  var attrs = vnode.attrs;
  var fraction = state.fraction();
  var range = state.max - state.min;
  var stepCount = Math.min(MAX_TICKS, parseInt(range / state.stepSize, 10));

  var onStartTrack = function onStartTrack(e) {
    return startTrack(state, attrs, e);
  };

  var onInitDrag = function onInitDrag(e) {
    readRangeData(state);
    initControlEvent(state, e);
    startDrag(state, attrs, e);
  };

  var flexValueCss = fraction + " 1 0%";
  var flexRestValue = 1 - fraction;
  var flexRestCss = flexRestValue + " 1 0%";

  return h("div", _extends({}, { className: classes.track }, interactiveTrack && !attrs.disabled && _defineProperty({}, k["on" + __WEBPACK_IMPORTED_MODULE_0_polythene_core__["m" /* pointerStartMoveEvent */]], onStartTrack)), [h("div", {
    className: classes.trackPart + " " + classes.trackPartValue,
    key: "trackPartValue",
    style: {
      flex: flexValueCss,
      msFlex: flexValueCss,
      WebkitFlex: flexValueCss
    }
  }, h("div", { className: classes.trackBar }, h("div", { className: classes.trackBarValue }))), h("div", _extends({}, {
    className: classes.control,
    key: "control"
  }, attrs.disabled ? { disabled: true } : (_ref3 = {}, _defineProperty(_ref3, k.tabindex, attrs[k.tabindex] || 0), _defineProperty(_ref3, k.onfocus, function () {
    return focus(state, state.controlEl);
  }), _defineProperty(_ref3, k.onblur, function () {
    return deFocus(state);
  }), _defineProperty(_ref3, k.onkeydown, function (e) {
    if (e.key !== "Tab") {
      e.preventDefault();
    }
    if (e.key === "Escape") {
      state.controlEl.blur(e);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      state.decrement(state, e.shiftKey);
    } else if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      state.increment(state, e.shiftKey);
    } else if (e.key === "Home") {
      updateValue(state, state.min);
    } else if (e.key === "End") {
      updateValue(state, state.max);
    } else if (e.key === "PageDown") {
      state.decrement(state, true);
    } else if (e.key === "PageUp") {
      state.increment(state, true);
    }
    readRangeData(state);
    updatePinPosition(state);
  }), _ref3), !attrs.disabled && _defineProperty({}, k["on" + __WEBPACK_IMPORTED_MODULE_0_polythene_core__["m" /* pointerStartMoveEvent */]], onInitDrag), attrs.events ? attrs.events : null, hasTicks ? { step: stepCount } : null), attrs.icon ? h("div", {
    className: classes.thumb,
    key: "icon"
  }, attrs.icon) : null), h("div", {
    className: classes.trackPart + " " + classes.trackPartRest,
    key: "trackPartRest",
    style: {
      flex: flexRestCss,
      msFlex: flexRestCss,
      WebkitFlex: flexRestCss,
      maxWidth: flexRestValue * 100 + "%" // for IE Edge
    }
  }, h("div", { className: classes.trackBar }, h("div", { className: classes.trackBarValue }))), hasTicks && !attrs.disabled ? h("div", {
    className: classes.ticks,
    key: "ticks"
  }, generateTickMarks(h, stepCount)) : null, hasTicks && attrs.pin && !attrs.disabled ? h("div", {
    className: classes.pin,
    key: "pin",
    value: state.value()
  }) : null]);
};

var getInitialState = function getInitialState(vnode, createStream) {
  var attrs = vnode.attrs;

  var min = attrs.min !== undefined ? attrs.min : 0;
  var max = attrs.max !== undefined ? attrs.max : 100;
  var range = max - min;
  var stepSize = attrs.stepSize !== undefined ? attrs.stepSize : 1;
  var defaultValue = attrs.defaultValue !== undefined ? attrs.defaultValue : attrs.value !== undefined ? attrs.value : 0;
  var previousValue = createStream(undefined);
  var isActive = createStream(false);
  var hasFocus = createStream(false);
  var isDragging = createStream(false);
  var fraction = createStream(min);
  var value = createStream(0);
  var normalizeFactor = 1 / stepSize;

  var setValue = function setValue(v) {
    var shouldNotify = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (v < min) v = min;
    if (v > max) v = max;
    value(stepSize ? Math.round(v * normalizeFactor) / normalizeFactor : v);
    fraction((value() - min) / range);
    if (shouldNotify && attrs.onChange) {
      attrs.onChange({
        value: value()
      });
    }
    previousValue(v);
  };

  var increment = function increment(state, useLargeStep) {
    return updateValue(state, value() + (useLargeStep ? 10 : 1) * (stepSize || 1));
  };

  var decrement = function decrement(state, useLargeStep) {
    return updateValue(state, value() - (useLargeStep ? 10 : 1) * (stepSize || 1));
  };

  setValue(defaultValue);

  return {
    min: min,
    max: max,
    stepSize: stepSize,
    fraction: fraction,
    // DOM elements
    trackEl: null,
    controlEl: null,
    pinEl: null,
    // functions
    setValue: setValue,
    increment: increment,
    decrement: decrement,
    // streams
    isDragging: isDragging,
    isActive: isActive,
    value: value,
    previousValue: previousValue,
    hasFocus: hasFocus,
    // coordinates
    controlWidth: 0,
    rangeWidth: 0,
    rangeOffset: 0,
    clickOffset: 0,
    redrawOnUpdate: createStream.merge([isActive, value])
  };
};

var onMount = function onMount(vnode) {
  var dom = vnode.dom;
  var state = vnode.state;
  var attrs = vnode.attrs;

  state.trackEl = dom.querySelector("." + classes.track);
  state.controlEl = dom.querySelector("." + classes.control);
  state.pinEl = dom.querySelector("." + classes.pin);

  readRangeData(state);

  if (attrs.pin) {
    setTimeout(function () {
      updateValue(state, state.value());
    }, 0);
  }
};

var createProps = function createProps(vnode, _ref5) {
  var k = _ref5.keys;

  var state = vnode.state;
  var attrs = vnode.attrs;
  if (attrs.value !== undefined) {
    if (state.previousValue() !== attrs.value) {
      state.previousValue(attrs.value);
      setTimeout(function () {
        return state.setValue(state.previousValue());
      }, 0); // perform in next tick to play nice with React
    }
  }
  var hasTicks = attrs.ticks !== undefined && attrs.ticks !== false;
  var interactiveTrack = attrs.interactiveTrack !== undefined ? attrs.interactiveTrack : true;
  return _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    className: [classes.component, attrs.disabled ? classes.isDisabled : null, attrs.pin ? classes.hasPin : null, interactiveTrack ? classes.hasTrack : null, state.isActive() ? classes.isActive : null, state.hasFocus() ? classes.hasFocus : null, state.fraction() === 0 ? classes.isAtMin : null, hasTicks ? classes.hasTicks : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  });
};

var createContent = function createContent(vnode, _ref6) {
  var h = _ref6.renderer,
      k = _ref6.keys;

  var attrs = vnode.attrs;
  var hasTicks = attrs.ticks !== undefined && attrs.ticks !== false;
  var interactiveTrack = attrs.interactiveTrack !== undefined ? attrs.interactiveTrack : true;
  return createSlider(vnode, { h: h, k: k, hasTicks: hasTicks, interactiveTrack: interactiveTrack });
};

var slider = Object.freeze({
	getInitialState: getInitialState,
	onMount: onMount,
	createProps: createProps,
	createContent: createContent
});




/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SnackbarInstance */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Snackbar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_core_snackbar__ = __webpack_require__(64);




var SnackbarInstance = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(__WEBPACK_IMPORTED_MODULE_2_polythene_core_snackbar__["b" /* coreSnackbarInstance */]);

SnackbarInstance.displayName = "SnackbarInstance";

var options = {
  name: "snackbar",
  className: __WEBPACK_IMPORTED_MODULE_2_polythene_core_snackbar__["a" /* classes */].component,
  bodyShowClass: __WEBPACK_IMPORTED_MODULE_2_polythene_core_snackbar__["a" /* classes */].open,
  defaultId: "default_snackbar",
  holderSelector: "." + __WEBPACK_IMPORTED_MODULE_2_polythene_core_snackbar__["a" /* classes */].holder,
  instance: SnackbarInstance,
  placeholder: "span." + __WEBPACK_IMPORTED_MODULE_2_polythene_core_snackbar__["a" /* classes */].placeholder,
  queue: true,
  transitions: __WEBPACK_IMPORTED_MODULE_2_polythene_core_snackbar__["c" /* transitions */]
};

var Multiple = Object(__WEBPACK_IMPORTED_MODULE_1_polythene_core__["b" /* Multi */])({ options: options, renderer: __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["c" /* renderer */] });
var Snackbar = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(Multiple);
Object.getOwnPropertyNames(Multiple).forEach(function (p) {
  return Snackbar[p] = Multiple[p];
});

Snackbar.displayName = "Snackbar";




/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return coreSnackbarInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return classes$1; });
/* unused harmony export vars */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return transitions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core_notification__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_theme__ = __webpack_require__(2);



var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var coreSnackbarInstance = _extends({}, __WEBPACK_IMPORTED_MODULE_0_polythene_core_notification__["b" /* coreNotificationInstance */]);

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classes$1 = _extends$1({}, __WEBPACK_IMPORTED_MODULE_0_polythene_core_notification__["a" /* classes */], {
  component: "pe-notification pe-snackbar",

  // elements
  holder: "pe-snackbar__holder",
  placeholder: "pe-snackbar__placeholder",

  // states
  open: "pe-snackbar--open"
});

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

var vars$2 = _extends$2({}, __WEBPACK_IMPORTED_MODULE_0_polythene_core_notification__["d" /* vars */], {
  border_radius: 0,
  tablet_min_width: 288,
  tablet_max_width: 568,
  min_height: 0,

  color_dark_background: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_background)
});

var show = function show(_ref) {
  var containerEl = _ref.containerEl,
      el = _ref.el,
      showDuration = _ref.showDuration,
      showDelay = _ref.showDelay;

  var height = el.getBoundingClientRect().height;
  return {
    el: containerEl,
    showDuration: showDuration || .4,
    showDelay: showDelay || 0,
    beforeShow: function beforeShow() {
      return el.style.visibility = "initial", containerEl.style.transform = "translate3d(0, " + height + "px, 0)";
    },
    show: function show() {
      return containerEl.style.transform = "translate3d(0, 0px, 0)";
    }
  };
};

var hide = function hide(_ref2) {
  var containerEl = _ref2.containerEl,
      el = _ref2.el,
      hideDuration = _ref2.hideDuration,
      hideDelay = _ref2.hideDelay;

  var height = el.getBoundingClientRect().height;
  return {
    el: containerEl,
    hideDuration: hideDuration || .4,
    hideDelay: hideDelay || 0,
    hide: function hide() {
      return containerEl.style.transform = "translate3d(0, " + height + "px, 0)";
    },
    // reset to original position to counter the removal of the snackbar instance
    afterHide: function afterHide() {
      return (
        // prevent a "bounce back"
        containerEl.style.transitionDuration = "0ms",
        // prevent flickering when snackbar instance is not yet removed (in case a next snackbars is shown)
        el.style.visibility = "hidden", containerEl.style.transform = "translate3d(0, 0px, 0)"
      );
    }
  };
};

var transitions = {
  show: show,
  hide: hide
};




/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Switch; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core_switch__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_core_selection_control__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_shadow__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_mithril_icon_button__ = __webpack_require__(6);






var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var ViewControl = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["b" /* ViewComponent */])(_extends$2({}, __WEBPACK_IMPORTED_MODULE_1_polythene_core_switch__["b" /* viewControl */], {
  createContent: function createContent(vnode, args) {
    return __WEBPACK_IMPORTED_MODULE_1_polythene_core_switch__["b" /* viewControl */].createContent(vnode, _extends$2(args, { Shadow: __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_shadow__["a" /* Shadow */], IconButton: __WEBPACK_IMPORTED_MODULE_4_polythene_mithril_icon_button__["a" /* IconButton */] }));
  }
}));

ViewControl.displayName = "ViewControl";

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var SelectionControl = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(_extends$1({}, __WEBPACK_IMPORTED_MODULE_2_polythene_core_selection_control__["a" /* coreSelectionControl */], {
  createContent: function createContent(vnode, args) {
    return __WEBPACK_IMPORTED_MODULE_2_polythene_core_selection_control__["a" /* coreSelectionControl */].createContent(vnode, _extends$1(args, { ViewControl: ViewControl }));
  }
}));

SelectionControl.displayName = "SelectionControl";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Switch = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(_extends({}, __WEBPACK_IMPORTED_MODULE_1_polythene_core_switch__["a" /* coreSwitch */], {
  component: SelectionControl
}));

Switch.displayName = "Switch";




/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _switch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return viewControl; });
/* unused harmony export classes */
/* unused harmony export vars */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_theme__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core_selection_control__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_core_icon_button__ = __webpack_require__(13);




var classes = {
  component: "pe-switch-control",

  // elements
  knob: "pe-switch-control__knob",
  thumb: "pe-switch-control__thumb",
  track: "pe-switch-control__track"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Don't export 'element': it will be the wrapped selection control component (set in polythene-xxx-checkbox)

// Props to be passed to a selection control

var createProps = function createProps(vnode) {
  var attrs = vnode.attrs;
  return _extends({}, attrs, {
    selectable: attrs.selectable || function () {
      return true;
    }, // default: always selectable, regardless the checked state
    instanceClass: classes.component,
    type: "checkbox"
  });
};

var _switch = Object.freeze({
	createProps: createProps
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

var createContent = function createContent(vnode, _ref) {
  var h = _ref.renderer,
      Shadow = _ref.Shadow,
      IconButton = _ref.IconButton;

  var attrs = vnode.attrs;

  var zOff = attrs.zOff !== undefined ? attrs.zOff : 1;
  var zOn = attrs.zOn !== undefined ? attrs.zOn : 2;
  var z = attrs.checked ? zOn : zOff;
  var raised = attrs.disabled ? false : attrs.raised !== undefined ? attrs.raised : true;
  return [h("div", {
    className: classes.track,
    key: "track"
  }), h(IconButton, _extends$1({}, {
    className: classes.thumb,
    key: "button",
    content: h("div", { className: classes.knob }, [attrs.icon ? attrs.icon : null, raised ? h(Shadow, {
      z: z,
      animated: true
    }) : null]),
    style: attrs.style,
    disabled: attrs.disabled,
    events: attrs.events,
    ink: attrs.ink || false,
    inactive: attrs.inactive
  }, attrs.iconButton))];
};

var viewControl = Object.freeze({
	getElement: getElement,
	createContent: createContent
});

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

var hit_area_padding = (__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].grid_unit_icon_button - __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].unit_icon_size) / 2; // 12

var vars$3 = _extends$2({}, __WEBPACK_IMPORTED_MODULE_1_polythene_core_selection_control__["b" /* vars */], {
  track_height: 14,
  track_length: 36,
  thumb_size: 20,
  padding: __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].grid_unit_component,
  icon_button_padding: __WEBPACK_IMPORTED_MODULE_2_polythene_core_icon_button__["b" /* vars */].padding,
  hit_area_padding: hit_area_padding,

  animation_duration: __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].animation_duration,

  color_light_thumb_on: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].color_primary),
  color_light_thumb_off: "#f1f1f1",
  color_light_thumb_disabled: "#bdbdbd",
  color_light_wash_on: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].color_primary),
  color_light_wash_off: __WEBPACK_IMPORTED_MODULE_2_polythene_core_icon_button__["b" /* vars */].color_light_wash,

  color_light_track_on: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].color_primary_faded),
  color_light_track_on_opacity: .55,
  color_light_track_off: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].blend_light_text_regular),
  color_light_track_off_opacity: .55,
  color_light_track_disabled: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].blend_light_background_disabled),
  color_light_track_disabled_opacity: 1,

  // icon color may be set in theme; default "currentcolor"
  // color_light_icon_on:                   "currentcolor",
  // color_light_icon_off:                  "currentcolor",

  // color_light_focus_on and so on taken from selectionControlVars

  color_dark_thumb_on: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].color_primary),
  color_dark_thumb_off: "#bdbdbd",
  color_dark_thumb_disabled: "#555",
  color_dark_wash_on: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].color_primary),
  color_dark_wash_off: __WEBPACK_IMPORTED_MODULE_2_polythene_core_icon_button__["b" /* vars */].color_dark_wash,

  color_dark_track_on: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].color_primary_faded, __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].blend_dark_text_tertiary), // or "#5a7f7c"
  color_dark_track_on_opacity: 9,
  color_dark_track_off: "#717171",
  color_dark_track_off_opacity: .55,
  color_dark_track_disabled: "#717171",
  color_dark_track_disabled_opacity: .3

  // icon color may be set in theme; default "currentcolor"
  // color_dark_icon_on:                    "currentcolor"
  // color_dark_icon_off:                   "currentcolor"

  // color_dark_focus_on and so on taken from selectionControlVars
});




/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tabs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core_tabs__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_icon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_button__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_mithril_icon_button__ = __webpack_require__(6);






var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Tab = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["b" /* ViewComponent */])(_extends$1({}, __WEBPACK_IMPORTED_MODULE_1_polythene_core_tabs__["b" /* coreTab */], {
  createProps: function createProps(vnode, args) {
    return __WEBPACK_IMPORTED_MODULE_1_polythene_core_tabs__["b" /* coreTab */].createProps(vnode, _extends$1(args, { Icon: __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_icon__["a" /* Icon */] }));
  },
  component: __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_button__["a" /* Button */]
}));

Tab.displayName = "Tab";

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var ScrollButton = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["b" /* ViewComponent */])(_extends$2({}, __WEBPACK_IMPORTED_MODULE_1_polythene_core_tabs__["a" /* coreScrollButton */], {
  component: __WEBPACK_IMPORTED_MODULE_4_polythene_mithril_icon_button__["a" /* IconButton */]
}));

ScrollButton.displayName = "ScrollButton";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Tabs = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(_extends({}, __WEBPACK_IMPORTED_MODULE_1_polythene_core_tabs__["c" /* coreTabs */], {
  createContent: function createContent(vnode, args) {
    return __WEBPACK_IMPORTED_MODULE_1_polythene_core_tabs__["c" /* coreTabs */].createContent(vnode, _extends(args, { Tab: Tab, ScrollButton: ScrollButton }));
  }
}));

Tabs.displayName = "Tabs";




/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return tabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return tab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return scrollButton; });
/* unused harmony export classes */
/* unused harmony export vars */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_utilities__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_theme__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_core_button__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_core_icon_button__ = __webpack_require__(13);






var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

var fontSize = __WEBPACK_IMPORTED_MODULE_3_polythene_core_button__["c" /* vars */].font_size;
var tab_label_line_height = 1.1 * fontSize;

var vars$3 = {
  tab_min_width: 72,
  tab_max_width: "initial",
  tab_height: 48,
  // tab_min_width_tablet:             160,
  label_max_width: 264,
  menu_tab_height: 44,
  menu_tab_icon_label_height: 44,
  tab_icon_label_height: 72,
  tab_icon_label_icon_spacing: 7,
  indicator_slide_speed: 600, // px per second
  indicator_slide_min_duration: .250,
  tabs_indent: __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].unit_indent,
  tabs_scroll_speed: 600, // px per second
  tabs_scroll_delay: .15,
  tabs_scroll_min_duration: .5,
  scroll_button_fade_duration: .2,
  scroll_button_fade_delay: .5,
  tab_content_padding_v: 12,
  tab_menu_content_padding_v: 6,
  tab_indicator_height: 2,
  scrollbar_offset: 20,
  scroll_button_opacity: .7,
  label_opacity: .7,

  tab_label_line_height: tab_label_line_height,
  tab_label_vertical_offset: tab_label_line_height - fontSize,
  tab_label_transition_property: "opacity, color, backgroundColor",

  color_light: "inherit",
  color_light_selected: rgba(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].color_primary),
  color_light_selected_background: "transparent",
  color_light_tab_indicator: rgba(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].color_primary),
  color_light_icon: __WEBPACK_IMPORTED_MODULE_4_polythene_core_icon_button__["b" /* vars */].color_light,

  color_dark: "inherit",
  color_dark_selected: rgba(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].color_primary),
  color_dark_selected_background: "transparent",
  color_dark_tab_indicator: rgba(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].color_primary),
  color_dark_icon: __WEBPACK_IMPORTED_MODULE_4_polythene_core_icon_button__["b" /* vars */].color_dark
};

var classes$1 = {
  component: "pe-tabs",

  // elements
  indicator: "pe-tabs__indicator",
  scrollButton: "pe-tabs__scroll-button",
  scrollButtonAtEnd: "pe-tabs__scroll-button-end",
  scrollButtonAtStart: "pe-tabs__scroll-button-start",
  scrollButtonOffset: "pe-tabs__scroll-button-offset",
  tab: "pe-tabs__tab",
  tabContent: "pe-tabs__tab-content",
  tabRow: "pe-tabs__row",

  // states
  activeSelectable: "pe-tabs__active--selectable",
  isAtEnd: "pe-tabs--end",
  isAtStart: "pe-tabs--start",
  isAutofit: "pe-tabs--autofit",
  isMenu: "pe-tabs--menu",
  scrollable: "pe-tabs--scrollable",
  compactTabs: "pe-tabs--compact",
  tabHasIcon: "pe-tabs__tab---icon",
  tabRowCentered: "pe-tabs__row--centered",
  tabRowIndent: "pe-tabs__row--indent",

  // lookup
  label: __WEBPACK_IMPORTED_MODULE_3_polythene_core_button__["a" /* classes */].label
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var whenCreateDone = function whenCreateDone() {
  return Promise.resolve();
};

var getNewIndex = function getNewIndex(index, tabs) {
  var minTabIndex = 0;
  var maxTabIndex = tabs.length - 1;
  return {
    backward: Math.max(index - 1, minTabIndex),
    forward: Math.min(index + 1, maxTabIndex)
  };
};

var handleScrollButtonClick = function handleScrollButtonClick(state, attrs, e, direction) {
  e.stopPropagation();
  e.preventDefault();
  var currentTabIndex = state.selectedTabIndex();
  var newIndex = getNewIndex(currentTabIndex, state.tabs)[direction];
  if (newIndex !== currentTabIndex) {
    setSelectedTab(state, attrs, newIndex, true);
  } else {
    scrollToTab(state, newIndex);
  }
};

/*
Moves the first tab to the left so that the text label is as position 0. 
*/
var alignToTitle = function alignToTitle(state) {
  var firstTab = state.tabs[0].dom;
  var firstInnerLabel = firstTab.querySelector("." + classes$1.label + " span");
  var firstOuterLabelWidth = firstTab.getBoundingClientRect().width;
  var firstInnerLabelWidth = firstInnerLabel.getBoundingClientRect().width;
  var firstTabOffset = (firstOuterLabelWidth - firstInnerLabelWidth) / 2;
  firstTab.style.marginLeft = -firstTabOffset + "px";
};

var createRightButtonOffset = function createRightButtonOffset(state) {
  // add padding to right so that last item is not hidden behind scroll button
  var scrollButtonAtEndWidth = state.scrollButtons["end"].getBoundingClientRect().width;
  var scrollButtonOffsetEl = state.tabsEl.querySelector("." + classes$1.scrollButtonOffset);
  scrollButtonOffsetEl.style.width = scrollButtonAtEndWidth + "px";
};

var scrollToTab = function scrollToTab(state, tabIndex) {
  var tabs = state.tabs;
  var scroller = state.scrollerEl;
  // Scroll to position of selected tab
  var tabLeft = tabs.slice(0, tabIndex).reduce(function (totalWidth, tabData) {
    return totalWidth + tabData.dom.getBoundingClientRect().width;
  }, 0);
  // Tabs at the far right will not fully move to the left
  // because the scrollable row will stick to the right 
  // to get the max scroll left, we subtract the visible viewport from the scroll width
  var scrollerWidth = scroller.getBoundingClientRect().width; // frame width
  var scrollingWidth = scroller.scrollWidth;
  var maxScroll = scrollingWidth - scrollerWidth;
  var left = Math.min(tabLeft, maxScroll);
  var currentLeft = scroller.scrollLeft;
  if (currentLeft !== left) {
    var duration = Math.abs(currentLeft - left) / vars$3.tabs_scroll_speed;
    var delaySeconds = vars$3.tabs_scroll_delay || 0;
    setTimeout(function () {
      Object(__WEBPACK_IMPORTED_MODULE_1_polythene_utilities__["d" /* scrollTo */])({
        element: scroller,
        to: left,
        duration: Math.max(vars$3.tabs_scroll_min_duration, duration),
        direction: "horizontal"
      });
    }, delaySeconds * 1000);
  }
};

var updateScrollButtons = function updateScrollButtons(state) {
  var scrollerEl = state.scrollerEl;
  var scrollLeft = scrollerEl.scrollLeft;
  var currentTabIndex = state.selectedTabIndex();
  var tabsEl = state.tabsEl;
  var minTabIndex = 0;
  var maxTabIndex = state.tabs.length - 1;
  var isAtStart = scrollerEl.scrollLeft === 0 && currentTabIndex === minTabIndex;
  var isAtEnd = scrollLeft >= scrollerEl.scrollWidth - tabsEl.getBoundingClientRect().width - 1 && currentTabIndex === maxTabIndex;
  state.scrollButtonStates.start = !isAtStart;
  state.scrollButtonStates.end = !isAtEnd;
};

var animateIndicator = function animateIndicator(selectedTabEl, animate, state) {
  var parentRect = state.tabsEl.getBoundingClientRect();
  var rect = selectedTabEl.getBoundingClientRect();
  var style = state.tabIndicatorEl.style;
  var translateX = rect.left - parentRect.left + state.scrollerEl.scrollLeft;
  var transformCmd = "translate(" + translateX + "px, 0)";
  var duration = animate ? vars$3.indicator_slide_min_duration : 0;
  // use width instead of scale to please IE10
  style.width = rect.width + "px";
  style["transition-duration"] = duration + "s";
  style.transform = transformCmd;
};

var setSelectedTab = function setSelectedTab(state, attrs, index, animate) {
  state.selectedTabIndex(index);
  if (!state.tabs.length) return;
  var selectedTabEl = state.tabs[index].dom;
  if (selectedTabEl && state.tabIndicatorEl && state.tabsEl) {
    animateIndicator(selectedTabEl, animate, state);
  }
  if (state.managesScroll) {
    updateScrollButtons(state);
    scrollToTab(state, index);
  }
  if (attrs.onChange) {
    attrs.onChange({
      index: index,
      options: state.tabs[index].attrs,
      el: selectedTabEl
    });
  }
};

var sortByLargestWidth = function sortByLargestWidth(a, b) {
  return a < b ? 1 : a > b ? -1 : 0;
};

var getInitialState = function getInitialState(vnode, createStream) {
  var attrs = vnode.attrs;
  var selectedTabIndex = createStream(vnode.attrs.selectedTab || 0);
  var registerTabButton = function registerTabButton(state) {
    return function (index, data) {
      return state.tabs[index] = data;
    };
  };
  var registerScrollButton = function registerScrollButton(state) {
    return function (position, dom) {
      return state.scrollButtons[position] = dom;
    };
  };
  return {
    tabsEl: undefined,
    scrollerEl: undefined,
    tabs: [], // {data, el}
    tabRow: undefined,
    tabIndicatorEl: undefined,
    selectedTabIndex: selectedTabIndex,
    previousSelectedTab: undefined,
    managesScroll: attrs.scrollable && !__WEBPACK_IMPORTED_MODULE_0_polythene_core__["h" /* isTouch */],
    scrollButtonStates: {
      start: false,
      end: false
    },
    scrollButtons: {
      start: undefined,
      end: undefined
    },
    registerTabButton: registerTabButton,
    registerScrollButton: registerScrollButton,
    cleanUp: undefined, // set in onMount
    redrawOnUpdate: createStream.merge([selectedTabIndex])
  };
};

var onMount = function onMount(vnode) {
  var dom = vnode.dom;
  var state = vnode.state;
  var attrs = vnode.attrs;

  state.tabsEl = dom;
  if (!attrs.hideIndicator) {
    state.tabIndicatorEl = dom.querySelector("." + classes$1.indicator);
  }
  state.scrollerEl = dom.querySelector("." + classes$1.tabRow);

  // A promise can't resolve during the oncreate loop
  // The Mithril draw loop is synchronous - there is no delay between one this oncreate and the tab button's oncreate
  whenCreateDone().then(function () {
    if (state.tabs && attrs.largestWidth) {
      var widths = state.tabs.map(function (tabData) {
        return tabData.dom.getBoundingClientRect().width;
      });
      var largest = widths.sort(sortByLargestWidth)[0];
      state.tabs.forEach(function (tabData) {
        return tabData.dom.style.width = largest + "px";
      });
    }
    // Align first scrollable tab to title
    if (attrs.scrollable) {
      alignToTitle(state);
    }
    // Handle scroll
    if (state.managesScroll) {
      createRightButtonOffset(state);
    }
    setSelectedTab(state, attrs, state.selectedTabIndex(), false);
  });

  var onResize = function onResize() {
    return setSelectedTab(state, attrs, state.selectedTabIndex(), false);
  };

  Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["o" /* subscribe */])("resize", onResize), state.cleanUp = function () {
    return Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["q" /* unsubscribe */])("resize", onResize);
  };
};

var onUnMount = function onUnMount(_ref) {
  var state = _ref.state;
  return state.cleanUp();
};

var createProps = function createProps(vnode, _ref2) {
  var k = _ref2.keys;

  var state = vnode.state;
  var attrs = vnode.attrs;
  var autofit = attrs.scrollable || attrs.centered ? false : attrs.autofit ? true : false;

  // Keep selected tab up to date
  if (attrs.selectedTab !== undefined && state.previousSelectedTab !== attrs.selectedTab) {
    setSelectedTab(state, attrs, attrs.selectedTab, true);
  }
  state.previousSelectedTab = attrs.selectedTab;

  return _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    className: [classes$1.component, attrs.scrollable ? classes$1.scrollable : null, state.selectedTabIndex === 0 ? classes$1.isAtStart : null, state.selectedTabIndex === state.tabs.length - 1 ? classes$1.isAtEnd : null, attrs.activeSelected ? classes$1.activeSelectable : null, autofit ? classes$1.isAutofit : null, attrs.compact ? classes$1.compactTabs : null, attrs.menu ? classes$1.isMenu : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  });
};

var createContent = function createContent(vnode, _ref3) {
  var h = _ref3.renderer,
      k = _ref3.keys,
      Tab = _ref3.Tab,
      ScrollButton = _ref3.ScrollButton;

  var state = vnode.state;
  var attrs = vnode.attrs;

  var buttons = attrs.content ? attrs.content : attrs.tabs ? attrs.tabs : attrs.children || vnode.children || [];

  if (buttons.length === 0) {
    console.error("No tabs specified"); // eslint-disable-line no-console
  }

  var tabRowButtons = buttons.map(function () {
    var buttonOpts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var index = arguments[1];

    var buttonOptsCombined = _extends({}, buttonOpts, {
      // These options can be overridden by `all`
      selected: index === state.selectedTabIndex(),
      animateOnTap: attrs.animateOnTap !== false ? true : false
    }, attrs.all, {
      // Internal options, should not get overridden
      index: index,
      key: "tab-" + index,
      register: state.registerTabButton(state),
      onSelect: function onSelect() {
        return setSelectedTab(state, attrs, index, attrs.noIndicatorSlide ? false : true);
      }
    });
    return h(Tab, buttonOptsCombined);
  });

  var tabRow = attrs.scrollable ? tabRowButtons.concat([
  // offset for right scroll button
  h("div", {
    key: "offset",
    className: classes$1.scrollButtonOffset
  })]) : tabRowButtons;

  var scrollButtonAtStart = void 0,
      scrollButtonAtEnd = void 0;
  if (attrs.scrollable) {
    scrollButtonAtStart = h(ScrollButton, _extends({}, {
      key: "backward",
      icon: attrs.scrollIconBackward,
      className: classes$1.scrollButtonAtStart,
      position: "start",
      register: state.registerScrollButton(state),
      events: _defineProperty({}, k.onclick, function (e) {
        return handleScrollButtonClick(state, attrs, e, "backward");
      })
    }));
    scrollButtonAtEnd = h(ScrollButton, _extends({}, {
      key: "forward",
      icon: attrs.scrollIconForward,
      className: classes$1.scrollButtonAtEnd,
      position: "end",
      register: state.registerScrollButton(state),
      events: _defineProperty({}, k.onclick, function (e) {
        return handleScrollButtonClick(state, attrs, e, "forward");
      })
    }));
  }

  var tabIndicator = attrs.hideIndicator ? null : h("div", {
    key: "indicator",
    className: classes$1.indicator
  });

  return [attrs.scrollable ? scrollButtonAtStart : null, h("div", {
    key: "tabrow",
    className: [classes$1.tabRow, attrs.centered ? classes$1.tabRowCentered : null, attrs.scrollable ? classes$1.tabRowIndent : null].join(" ")
  }, [tabRow, tabIndicator]), attrs.scrollable ? scrollButtonAtEnd : null];
};

var tabs = Object.freeze({
	getInitialState: getInitialState,
	onMount: onMount,
	onUnMount: onUnMount,
	createProps: createProps,
	createContent: createContent
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Don't export 'element': it will be the wrapped Button component (set in polythene-xxx-tabs/tab)

var onMount$1 = function onMount(vnode) {
  var dom = vnode.dom;
  if (!dom) {
    return;
  }
  var attrs = vnode.attrs;
  attrs.register(attrs.index, {
    attrs: attrs,
    dom: dom
  });
};

var createProps$1 = function createProps(vnode, _ref) {
  var h = _ref.renderer,
      k = _ref.keys,
      Icon = _ref.Icon;

  var attrs = vnode.attrs;
  // Let internal onclick function co-exist with passed button option
  attrs.events = attrs.events || {};
  attrs.events[k.onclick] = attrs.events[k.onclick] || function () {};
  return _extends$1({}, attrs, {
    content: h("div", { className: classes$1.tabContent }, [attrs.icon ? h(Icon, attrs.icon) : null, attrs.label ? h("div", { className: classes$1.label }, h("span", attrs.label)) : null]),
    className: [classes$1.tab, attrs.icon && attrs.label ? classes$1.tabHasIcon : null, attrs.className || attrs[k.class]].join(" "),
    selected: attrs.selected,
    wash: false,
    ripple: true,
    events: _extends$1({}, attrs.events, _defineProperty$1({}, k.onclick, function (e) {
      attrs.onSelect();
      attrs.events[k.onclick](e);
    }))
  });
};

var createContent$1 = function createContent() {
  return null;
};

var tab = Object.freeze({
	onMount: onMount$1,
	createProps: createProps$1,
	createContent: createContent$1
});

// Don't export 'element': it will be the wrapped IconButton component (set in polythene-xxx-tabs/scroll-button)

var arrowBackward = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"/></svg>";
var arrowForward = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/></svg>";

var onMount$2 = function onMount(vnode) {
  var dom = vnode.dom;
  if (!dom) {
    return;
  }
  var attrs = vnode.attrs;
  attrs.register(attrs.position, dom);
};

var createProps$2 = function createProps(vnode, _ref) {
  var h = _ref.renderer,
      k = _ref.keys;

  var attrs = vnode.attrs;
  var icon = attrs.position === "start" ? attrs.icon || { svg: h.trust(arrowBackward) } : attrs.icon || { svg: h.trust(arrowForward) };
  return {
    className: [classes$1.scrollButton, attrs.className || attrs[k.class]].join(" "),
    icon: icon,
    ripple: { center: true },
    events: attrs.events
  };
};

var scrollButton = Object.freeze({
	onMount: onMount$2,
	createProps: createProps$2
});




/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Toolbar */
/* unused harmony export ToolbarTitle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core_toolbar__ = __webpack_require__(70);



var Toolbar = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["b" /* ViewComponent */])(__WEBPACK_IMPORTED_MODULE_1_polythene_core_toolbar__["a" /* coreToolbar */]);

Toolbar.displayName = "Toolbar";

var ToolbarTitle = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["b" /* ViewComponent */])(__WEBPACK_IMPORTED_MODULE_1_polythene_core_toolbar__["b" /* coreToolbarTitle */]);

ToolbarTitle.displayName = "ToolbarTitle";




/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return toolbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return toolbarTitle; });
/* unused harmony export classes */
/* unused harmony export vars */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_theme__ = __webpack_require__(2);



var classes = {

  // Toolbar

  component: "pe-toolbar",

  // states
  compact: "pe-toolbar--compact",

  // Toolbar title

  // elements
  title: "pe-toolbar__title",

  // states
  centeredTitle: "pe-toolbar__title--center",
  indentedTitle: "pe-toolbar__title--indent"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var attrs = vnode.attrs;
  return _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    className: [classes.component, attrs.compact ? classes.compact : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  }, attrs.events);
};

var createContent = function createContent(vnode) {
  var attrs = vnode.attrs;
  return attrs.content ? attrs.content : attrs.children || vnode.children || attrs;
};

var toolbar = Object.freeze({
	getElement: getElement,
	createProps: createProps,
	createContent: createContent
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getElement$1 = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

var createProps$1 = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var attrs = vnode.attrs;
  return _extends$1({}, Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    className: [classes.title, attrs.indent ? classes.indentedTitle : null, attrs.center ? classes.centeredTitle : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  }, attrs.events);
};

var createContent$1 = function createContent(vnode) {
  var attrs = vnode.attrs;
  return attrs.text ? attrs.text : attrs.content ? attrs.content : attrs.children || vnode.children || attrs;
};

var toolbarTitle = Object.freeze({
	getElement: getElement$1,
	createProps: createProps$1,
	createContent: createContent$1
});

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

var padding_side = __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].grid_unit_component * 2 - 12; // 16 - 12 = 4
var title_padding = __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].grid_unit_component * 9 - __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].grid_unit_component * 6 - padding_side; // 72 - 48 - 4
var height_mobile_portrait = __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].grid_unit_component * 7; // 56
var height_desktop = __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].grid_unit_component * 8; // 64

var vars$1 = {
  padding_side: padding_side,
  height: height_desktop,
  height_compact: height_mobile_portrait,

  // title vars
  title_padding: title_padding,
  indent: __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].unit_indent,
  transition_duration: __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].animation_duration,
  font_size: 18,
  line_height: __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].line_height,

  // color vars
  color_light_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_primary),
  color_dark_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_primary)

  // background colors may be set in theme; disabled by default
  // color_light_background:    "transparent",
  // color_dark_background:     "transparent",
};




/***/ }),
/* 71 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 72 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map