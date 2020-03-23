/*!
 * BootstrapVue 2.8.0
 *
 * @link https://bootstrap-vue.js.org
 * @source https://github.com/bootstrap-vue/bootstrap-vue
 * @copyright (c) 2016-2020 BootstrapVue
 * @license MIT
 * https://github.com/bootstrap-vue/bootstrap-vue/blob/master/LICENSE
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue')) :
    typeof define === 'function' && define.amd ? define(['vue'], factory) :
    (global = global || self, global.bootstrapVue = factory(global.Vue));
  }(this, (function (Vue) { 'use strict';
  
    Vue = Vue && Object.prototype.hasOwnProperty.call(Vue, 'default') ? Vue['default'] : Vue;
  
    function _typeof(obj) {
      "@babel/helpers - typeof";
  
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function (obj) {
          return typeof obj;
        };
      } else {
        _typeof = function (obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
      }
  
      return _typeof(obj);
    }
  
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
  
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
  
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }
  
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
  
      return obj;
    }
  
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
  
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
      }
  
      return keys;
    }
  
    function _objectSpread2(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
  
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
  
      return target;
    }
  
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
  
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass) _setPrototypeOf(subClass, superClass);
    }
  
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
      return _getPrototypeOf(o);
    }
  
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
  
      return _setPrototypeOf(o, p);
    }
  
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
  
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
        return true;
      } catch (e) {
        return false;
      }
    }
  
    function _construct(Parent, args, Class) {
      if (_isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct(Parent, args, Class) {
          var a = [null];
          a.push.apply(a, args);
          var Constructor = Function.bind.apply(Parent, a);
          var instance = new Constructor();
          if (Class) _setPrototypeOf(instance, Class.prototype);
          return instance;
        };
      }
  
      return _construct.apply(null, arguments);
    }
  
    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
  
    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? new Map() : undefined;
  
      _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
  
        if (typeof Class !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }
  
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class)) return _cache.get(Class);
  
          _cache.set(Class, Wrapper);
        }
  
        function Wrapper() {
          return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
  
        Wrapper.prototype = Object.create(Class.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _setPrototypeOf(Wrapper, Class);
      };
  
      return _wrapNativeSuper(Class);
    }
  
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
  
      return self;
    }
  
    function _possibleConstructorReturn(self, call) {
      if (call && (typeof call === "object" || typeof call === "function")) {
        return call;
      }
  
      return _assertThisInitialized(self);
    }
  
    function _createSuper(Derived) {
      return function () {
        var Super = _getPrototypeOf(Derived),
            result;
  
        if (_isNativeReflectConstruct()) {
          var NewTarget = _getPrototypeOf(this).constructor;
  
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
  
        return _possibleConstructorReturn(this, result);
      };
    }
  
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null) break;
      }
  
      return object;
    }
  
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get(target, property, receiver) {
          var base = _superPropBase(target, property);
  
          if (!base) return;
          var desc = Object.getOwnPropertyDescriptor(base, property);
  
          if (desc.get) {
            return desc.get.call(receiver);
          }
  
          return desc.value;
        };
      }
  
      return _get(target, property, receiver || target);
    }
  
    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }
  
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }
  
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr)) return _arrayLikeToArray(arr);
    }
  
    function _arrayWithHoles(arr) {
      if (Array.isArray(arr)) return arr;
    }
  
    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
    }
  
    function _iterableToArrayLimit(arr, i) {
      if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;
  
      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);
  
          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }
  
      return _arr;
    }
  
    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if (typeof o === "string") return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor) n = o.constructor.name;
      if (n === "Map" || n === "Set") return Array.from(n);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
  
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;
  
      for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  
      return arr2;
    }
  
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
  
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
  
    //
  
    // --- Static ---
    var from = function from() {
      return Array.from.apply(Array, arguments);
    };
    var isArray = function isArray(val) {
      return Array.isArray(val);
    }; // --- Instance ---
  
    var arrayIncludes = function arrayIncludes(array, value) {
      return array.indexOf(value) !== -1;
    };
    var concat = function concat() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
  
      return Array.prototype.concat.apply([], args);
    };
  
    var assign = function assign() {
      return Object.assign.apply(Object, arguments);
    };
    var create = function create(proto, optionalProps) {
      return Object.create(proto, optionalProps);
    };
    var defineProperties = function defineProperties(obj, props) {
      return Object.defineProperties(obj, props);
    };
    var defineProperty = function defineProperty(obj, prop, descr) {
      return Object.defineProperty(obj, prop, descr);
    };
    var freeze = function freeze(obj) {
      return Object.freeze(obj);
    };
    var getOwnPropertyNames = function getOwnPropertyNames(obj) {
      return Object.getOwnPropertyNames(obj);
    };
    var keys = function keys(obj) {
      return Object.keys(obj);
    }; // --- "Instance" ---
  
    var hasOwnProperty = function hasOwnProperty(obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    };
    var toString = function toString(obj) {
      return Object.prototype.toString.call(obj);
    }; // --- Utilities ---
  
    /**
     * Quick object check - this is primarily used to tell
     * Objects from primitive values when we know the value
     * is a JSON-compliant type.
     * Note object could be a complex type like array, date, etc.
     */
  
    var isObject = function isObject(obj) {
      return obj !== null && _typeof(obj) === 'object';
    };
    /**
     * Strict object type check. Only returns true
     * for plain JavaScript objects.
     */
  
    var isPlainObject = function isPlainObject(obj) {
      return Object.prototype.toString.call(obj) === '[object Object]';
    };
    /**
     * Shallow copy an object. If the passed in object
     * is null or undefined, returns an empty object
     */
  
    var clone = function clone(obj) {
      return _objectSpread2({}, obj);
    };
    /**
     * Return a shallow copy of object with
     * the specified properties omitted
     * @link https://gist.github.com/bisubus/2da8af7e801ffd813fab7ac221aa7afc
     */
  
    var omit = function omit(obj, props) {
      return keys(obj).filter(function (key) {
        return props.indexOf(key) === -1;
      }).reduce(function (result, key) {
        return _objectSpread2({}, result, _defineProperty({}, key, obj[key]));
      }, {});
    };
    /**
     * Convenience method to create a read-only descriptor
     */
  
    var readonlyDescriptor = function readonlyDescriptor() {
      return {
        enumerable: true,
        configurable: false,
        writable: false
      };
    };
    /**
     * Deep-freezes and object, making it immutable / read-only.
     * Returns the same object passed-in, but frozen.
     * Freezes inner object/array/values first.
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
     * Note: this method will not work for property values using Symbol() as a key
     */
  
    var deepFreeze = function deepFreeze(obj) {
      // Retrieve the property names defined on object/array
      // Note: `keys` will ignore properties that are keyed by a `Symbol()`
      var props = keys(obj); // Iterate over each prop and recursively freeze it
  
      props.forEach(function (prop) {
        var value = obj[prop]; // If value is a plain object or array, we deepFreeze it
  
        obj[prop] = value && (isPlainObject(value) || isArray(value)) ? deepFreeze(value) : value;
      });
      return freeze(obj);
    };
  
    /**
     * Utilities to get information about the current environment
     */
    // --- Constants ---
    var hasWindowSupport = typeof window !== 'undefined';
    var hasDocumentSupport = typeof document !== 'undefined';
    var hasNavigatorSupport = typeof navigator !== 'undefined';
    var hasPromiseSupport = typeof Promise !== 'undefined';
    var hasMutationObserverSupport = typeof MutationObserver !== 'undefined' || typeof WebKitMutationObserver !== 'undefined' || typeof MozMutationObserver !== 'undefined';
    var isBrowser = hasWindowSupport && hasDocumentSupport && hasNavigatorSupport; // Browser type sniffing
  
    var userAgent = isBrowser ? window.navigator.userAgent.toLowerCase() : '';
    var isJSDOM = userAgent.indexOf('jsdom') > 0;
    var isIE = /msie|trident/.test(userAgent); // Determine if the browser supports the option passive for events
  
    var hasPassiveEventSupport = function () {
      var passiveEventSupported = false;
  
      if (isBrowser) {
        try {
          var options = {
            get passive() {
              // This function will be called when the browser
              // attempts to access the passive property.
  
              /* istanbul ignore next: will never be called in JSDOM */
              passiveEventSupported = true;
            }
  
          };
          window.addEventListener('test', options, options);
          window.removeEventListener('test', options, options);
        } catch (err) {
          /* istanbul ignore next: will never be called in JSDOM */
          passiveEventSupported = false;
        }
      }
  
      return passiveEventSupported;
    }();
    var hasTouchSupport = isBrowser && ('ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0);
    var hasPointerEventSupport = isBrowser && Boolean(window.PointerEvent || window.MSPointerEvent);
    var hasIntersectionObserverSupport = isBrowser && 'IntersectionObserver' in window && 'IntersectionObserverEntry' in window && // Edge 15 and UC Browser lack support for `isIntersecting`
    // but we an use intersectionRatio > 0 instead
    // 'isIntersecting' in window.IntersectionObserverEntry.prototype &&
    'intersectionRatio' in window.IntersectionObserverEntry.prototype; // --- Getters ---
  
    var getEnv = function getEnv(key) {
      var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var env = typeof process !== 'undefined' && process ? process.env || {} : {};
  
      if (!key) {
        /* istanbul ignore next */
        return env;
      }
  
      return env[key] || fallback;
    };
    var getNoWarn = function getNoWarn() {
      return getEnv('BOOTSTRAP_VUE_NO_WARN');
    };
  
    var w = hasWindowSupport ? window : {};
    var Element$1 = hasWindowSupport ? w.Element : /*#__PURE__*/function (_Object) {
      _inherits(Element, _Object);
  
      var _super = _createSuper(Element);
  
      function Element() {
        _classCallCheck(this, Element);
  
        return _super.apply(this, arguments);
      }
  
      return Element;
    }( /*#__PURE__*/_wrapNativeSuper(Object));
    var HTMLElement = hasWindowSupport ? w.HTMLElement : /*#__PURE__*/function (_Element) {
      _inherits(HTMLElement, _Element);
  
      var _super2 = _createSuper(HTMLElement);
  
      function HTMLElement() {
        _classCallCheck(this, HTMLElement);
  
        return _super2.apply(this, arguments);
      }
  
      return HTMLElement;
    }(Element$1);
    var SVGElement = hasWindowSupport ? w.SVGElement : /*#__PURE__*/function (_Element2) {
      _inherits(SVGElement, _Element2);
  
      var _super3 = _createSuper(SVGElement);
  
      function SVGElement() {
        _classCallCheck(this, SVGElement);
  
        return _super3.apply(this, arguments);
      }
  
      return SVGElement;
    }(Element$1);
    var File = hasWindowSupport ? w.File : /*#__PURE__*/function (_Object2) {
      _inherits(File, _Object2);
  
      var _super4 = _createSuper(File);
  
      function File() {
        _classCallCheck(this, File);
  
        return _super4.apply(this, arguments);
      }
  
      return File;
    }( /*#__PURE__*/_wrapNativeSuper(Object));
  
    var toType = function toType(val) {
      return _typeof(val);
    };
    var toRawType = function toRawType(val) {
      return Object.prototype.toString.call(val).slice(8, -1);
    };
    var isUndefined = function isUndefined(val) {
      return val === undefined;
    };
    var isNull = function isNull(val) {
      return val === null;
    };
    var isUndefinedOrNull = function isUndefinedOrNull(val) {
      return isUndefined(val) || isNull(val);
    };
    var isFunction = function isFunction(val) {
      return toType(val) === 'function';
    };
    var isBoolean = function isBoolean(val) {
      return toType(val) === 'boolean';
    };
    var isString = function isString(val) {
      return toType(val) === 'string';
    };
    var isNumber = function isNumber(val) {
      return toType(val) === 'number';
    };
    var isDate = function isDate(val) {
      return val instanceof Date;
    };
    var isEvent = function isEvent(val) {
      return val instanceof Event;
    };
    var isFile = function isFile(val) {
      return val instanceof File;
    };
    var isRegExp = function isRegExp(val) {
      return toRawType(val) === 'RegExp';
    };
    var isPromise = function isPromise(val) {
      return !isUndefinedOrNull(val) && isFunction(val.then) && isFunction(val.catch);
    }; // Extra convenience named re-exports
  
    var cloneDeep = function cloneDeep(obj) {
      var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : obj;
  
      if (isArray(obj)) {
        return obj.reduce(function (result, val) {
          return [].concat(_toConsumableArray(result), [cloneDeep(val, val)]);
        }, []);
      }
  
      if (isPlainObject(obj)) {
        return keys(obj).reduce(function (result, key) {
          return _objectSpread2({}, result, _defineProperty({}, key, cloneDeep(obj[key], obj[key])));
        }, {});
      }
  
      return defaultValue;
    };
  
    var identity = function identity(x) {
      return x;
    };
  
    var RX_ARRAY_NOTATION = /\[(\d+)]/g;
    /**
     * Get property defined by dot/array notation in string.
     *
     * @link https://gist.github.com/jeneg/9767afdcca45601ea44930ea03e0febf#gistcomment-1935901
     *
     * @param {Object} obj
     * @param {string|Array} path
     * @param {*} defaultValue (optional)
     * @return {*}
     */
  
    var get = function get(obj, path) {
      var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      // Handle array of path values
      path = isArray(path) ? path.join('.') : path; // If no path or no object passed
  
      if (!path || !isObject(obj)) {
        return defaultValue;
      } // Handle edge case where user has dot(s) in top-level item field key
      // See https://github.com/bootstrap-vue/bootstrap-vue/issues/2762
      // Switched to `in` operator vs `hasOwnProperty` to handle obj.prototype getters
      // https://github.com/bootstrap-vue/bootstrap-vue/issues/3463
  
  
      if (path in obj) {
        return obj[path];
      } // Handle string array notation (numeric indices only)
  
  
      path = String(path).replace(RX_ARRAY_NOTATION, '.$1');
      var steps = path.split('.').filter(identity); // Handle case where someone passes a string of only dots
  
      if (steps.length === 0) {
        return defaultValue;
      } // Traverse path in object to find result
      // We use `!=` vs `!==` to test for both `null` and `undefined`
      // Switched to `in` operator vs `hasOwnProperty` to handle obj.prototype getters
      // https://github.com/bootstrap-vue/bootstrap-vue/issues/3463
  
  
      return steps.every(function (step) {
        return isObject(obj) && step in obj && (obj = obj[step]) != null;
      }) ? obj : defaultValue;
    };
  
    /**
     * Log a warning message to the console with BootstrapVue formatting
     * @param {string} message
     */
  
    var warn = function warn(message)
    /* istanbul ignore next */
    {
      var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  
      if (!getNoWarn()) {
        console.warn("[BootstrapVue warn]: ".concat(source ? "".concat(source, " - ") : '').concat(message));
      }
    };
    /**
     * Warn when no Promise support is given
     * @param {string} source
     * @returns {boolean} warned
     */
  
    var warnNotClient = function warnNotClient(source) {
      /* istanbul ignore else */
      if (isBrowser) {
        return false;
      } else {
        warn("".concat(source, ": Can not be called during SSR."));
        return true;
      }
    };
    /**
     * Warn when no Promise support is given
     * @param {string} source
     * @returns {boolean} warned
     */
  
    var warnNoPromiseSupport = function warnNoPromiseSupport(source) {
      /* istanbul ignore else */
      if (hasPromiseSupport) {
        return false;
      } else {
        warn("".concat(source, ": Requires Promise support."));
        return true;
      }
    };
    /**
     * Warn when no MutationObserver support is given
     * @param {string} source
     * @returns {boolean} warned
     */
  
    var warnNoMutationObserverSupport = function warnNoMutationObserverSupport(source) {
      /* istanbul ignore else */
      if (hasMutationObserverSupport) {
        return false;
      } else {
        warn("".concat(source, ": Requires MutationObserver support."));
        return true;
      }
    };
  
    // NOTES
    //
    // The global config SHALL NOT be used to set defaults for Boolean props, as the props
    // would loose their semantic meaning, and force people writing 3rd party components to
    // explicity set a true or false value using the v-bind syntax on boolean props
    //
    // Supported config values (depending on the prop's supported type(s)):
    // `String`, `Array`, `Object`, `null` or `undefined`
    // BREAKPOINT DEFINITIONS
    //
    // Some components (`<b-col>` and `<b-form-group>`) generate props based on breakpoints,
    // and this occurs when the component is first loaded (evaluated), which may happen
    // before the config is created/modified
    //
    // To get around this we make these components' props async (lazy evaluation)
    // The component definition is only called/executed when the first access to the
    // component is used (and cached on subsequent uses)
    // PROP DEFAULTS
    //
    // For default values on props, we use the default value factory function approach so
    // that the default values are pulled in at each component instantiation
    //
    //  props: {
    //    variant: {
    //      type: String,
    //      default: () => getConfigComponent('BAlert', 'variant')
    //    }
    //  }
    //
    // We also provide a cached getter for breakpoints, which are "frozen" on first access
    // prettier-ignore
  
    var DEFAULTS = deepFreeze({
      // Breakpoints
      breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'],
      // Form controls
      formControls: {
        size: null
      },
      // Component specific defaults are keyed by the component
      // name (PascalCase) and prop name (camelCase)
      BAlert: {
        dismissLabel: 'Close',
        variant: 'info'
      },
      BAvatar: {
        variant: 'secondary'
      },
      BBadge: {
        variant: 'secondary'
      },
      BButton: {
        size: null,
        variant: 'secondary'
      },
      BButtonClose: {
        content: '&times;',
        // `textVariant` is `null` to inherit the current text color
        textVariant: null,
        ariaLabel: 'Close'
      },
      BCalendar: {
        // BFormDate will choose these first if not provided in BFormDate section
        labelPrevYear: 'Previous year',
        labelPrevMonth: 'Previous month',
        labelCurrentMonth: 'Current month',
        labelNextMonth: 'Next month',
        labelNextYear: 'Next year',
        labelToday: 'Today',
        labelSelected: 'Selected date',
        labelNoDateSelected: 'No date selected',
        labelCalendar: 'Calendar',
        labelNav: 'Calendar navigation',
        labelHelp: 'Use cursor keys to navigate calendar dates'
      },
      BCardSubTitle: {
        // `<b-card>` and `<b-card-body>` also inherit this prop
        subTitleTextVariant: 'muted'
      },
      BCarousel: {
        labelPrev: 'Previous Slide',
        labelNext: 'Next Slide',
        labelGotoSlide: 'Goto Slide',
        labelIndicators: 'Select a slide to display'
      },
      BDropdown: {
        toggleText: 'Toggle Dropdown',
        size: null,
        variant: 'secondary',
        splitVariant: null
      },
      BFormDatepicker: {
        // BFormDatepicker will choose from BCalendar first if not provided here
        labelPrevYear: null,
        labelPrevMonth: null,
        labelCurrentMonth: null,
        labelNextMonth: null,
        labelNextYear: null,
        labelToday: null,
        labelSelected: null,
        labelNoDateSelected: null,
        labelCalendar: null,
        labelNav: null,
        labelHelp: null,
        // These props are specific to BFormDatepicker
        labelTodayButton: 'Select today',
        labelResetButton: 'Reset',
        labelCloseButton: 'Close'
      },
      BFormFile: {
        browseText: 'Browse',
        // Chrome default file prompt
        placeholder: 'No file chosen',
        dropPlaceholder: 'Drop files here'
      },
      BFormTag: {
        removeLabel: 'Remove tag',
        variant: 'secondary'
      },
      BFormTags: {
        addButtonText: 'Add',
        addButtonVariant: 'outline-secondary',
        duplicateTagText: 'Duplicate tag(s)',
        invalidTagText: 'Invalid tag(s)',
        placeholder: 'Add tag...',
        tagRemoveLabel: 'Remove tag',
        tagRemovedLabel: 'Tag removed',
        tagVariant: 'secondary'
      },
      BFormText: {
        textVariant: 'muted'
      },
      BFormTimepicker: {
        // Fallback to BTime
        labelNoTimeSelected: null,
        labelSelected: null,
        labelHours: null,
        labelMinutes: null,
        labelSeconds: null,
        labelAmpm: null,
        labelAm: null,
        labelPm: null,
        // Fallback to BTime then BFormSpinbutton
        labelDecrement: null,
        labelIncrement: null,
        // These props are specific to BFormTimepicker
        labelNowButton: 'Select now',
        labelResetButton: 'Reset',
        labelCloseButton: 'Close'
      },
      BFormSpinbutton: {
        labelDecrement: 'Decrement',
        labelIncrement: 'Increment'
      },
      BImg: {
        blankColor: 'transparent'
      },
      BImgLazy: {
        blankColor: 'transparent'
      },
      BInputGroup: {
        size: null
      },
      BJumbotron: {
        bgVariant: null,
        borderVariant: null,
        textVariant: null
      },
      BListGroupItem: {
        variant: null
      },
      BModal: {
        titleTag: 'h5',
        size: 'md',
        headerBgVariant: null,
        headerBorderVariant: null,
        headerTextVariant: null,
        headerCloseVariant: null,
        bodyBgVariant: null,
        bodyTextVariant: null,
        footerBgVariant: null,
        footerBorderVariant: null,
        footerTextVariant: null,
        cancelTitle: 'Cancel',
        cancelVariant: 'secondary',
        okTitle: 'OK',
        okVariant: 'primary',
        headerCloseContent: '&times;',
        headerCloseLabel: 'Close'
      },
      BNavbar: {
        variant: null
      },
      BNavbarToggle: {
        label: 'Toggle navigation'
      },
      BPagination: {
        size: null
      },
      BPaginationNav: {
        size: null
      },
      BPopover: {
        boundary: 'scrollParent',
        boundaryPadding: 5,
        customClass: null,
        delay: 50,
        variant: null
      },
      BProgress: {
        variant: null
      },
      BProgressBar: {
        variant: null
      },
      BSpinner: {
        variant: null
      },
      BTable: {
        selectedVariant: 'active',
        headVariant: null,
        footVariant: null
      },
      BTime: {
        labelNoTimeSelected: 'No time selected',
        labelSelected: 'Selected time',
        labelHours: 'Hours',
        labelMinutes: 'Minutes',
        labelSeconds: 'Seconds',
        labelAmpm: 'AM/PM',
        // It would be nice to be able to get these from Intl.DateTimeFormat somehow
        labelAm: 'AM',
        labelPm: 'PM',
        // The following inherit from BFormSpinbutton if not provided
        labelIncrement: null,
        labelDecrement: null
      },
      BToast: {
        toaster: 'b-toaster-top-right',
        autoHideDelay: 5000,
        variant: null,
        toastClass: null,
        headerClass: null,
        bodyClass: null
      },
      BToaster: {
        ariaLive: null,
        ariaAtomic: null,
        role: null
      },
      BTooltip: {
        boundary: 'scrollParent',
        boundaryPadding: 5,
        customClass: null,
        delay: 50,
        variant: null
      }
    });
  
    var NAME = 'BvConfig';
    var PROP_NAME = '$bvConfig'; // Config manager class
  
    var BvConfig = /*#__PURE__*/function () {
      function BvConfig() {
        _classCallCheck(this, BvConfig);
  
        // TODO: pre-populate with default config values (needs updated tests)
        // this.$_config = cloneDeep(DEFAULTS)
        this.$_config = {};
        this.$_cachedBreakpoints = null;
      }
  
      _createClass(BvConfig, [{
        key: "getDefaults",
        // Returns the defaults
        value: function getDefaults()
        /* istanbul ignore next */
        {
          return this.defaults;
        } // Method to merge in user config parameters
  
      }, {
        key: "setConfig",
        value: function setConfig() {
          var _this = this;
  
          var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  
          if (!isPlainObject(config)) {
            /* istanbul ignore next */
            return;
          }
  
          var configKeys = getOwnPropertyNames(config);
          configKeys.forEach(function (cmpName) {
            /* istanbul ignore next */
            if (!hasOwnProperty(DEFAULTS, cmpName)) {
              warn("Unknown config property \"".concat(cmpName, "\""), NAME);
              return;
            }
  
            var cmpConfig = config[cmpName];
  
            if (cmpName === 'breakpoints') {
              // Special case for breakpoints
              var breakpoints = config.breakpoints;
              /* istanbul ignore if */
  
              if (!isArray(breakpoints) || breakpoints.length < 2 || breakpoints.some(function (b) {
                return !isString(b) || b.length === 0;
              })) {
                warn('"breakpoints" must be an array of at least 2 breakpoint names', NAME);
              } else {
                _this.$_config.breakpoints = cloneDeep(breakpoints);
              }
            } else if (isPlainObject(cmpConfig)) {
              // Component prop defaults
              var props = getOwnPropertyNames(cmpConfig);
              props.forEach(function (prop) {
                /* istanbul ignore if */
                if (!hasOwnProperty(DEFAULTS[cmpName], prop)) {
                  warn("Unknown config property \"".concat(cmpName, ".").concat(prop, "\""), NAME);
                } else {
                  // TODO: If we pre-populate the config with defaults, we can skip this line
                  _this.$_config[cmpName] = _this.$_config[cmpName] || {};
  
                  if (!isUndefined(cmpConfig[prop])) {
                    _this.$_config[cmpName][prop] = cloneDeep(cmpConfig[prop]);
                  }
                }
              });
            }
          });
        } // Clear the config. For testing purposes only
  
      }, {
        key: "resetConfig",
        value: function resetConfig() {
          this.$_config = {};
        } // Returns a deep copy of the user config
  
      }, {
        key: "getConfig",
        value: function getConfig() {
          return cloneDeep(this.$_config);
        }
      }, {
        key: "getConfigValue",
        value: function getConfigValue(key) {
          // First we try the user config, and if key not found we fall back to default value
          // NOTE: If we deep clone DEFAULTS into config, then we can skip the fallback for get
          return cloneDeep(get(this.$_config, key, get(DEFAULTS, key)));
        }
      }, {
        key: "defaults",
        get: function get()
        /* istanbul ignore next */
        {
          return DEFAULTS;
        }
      }], [{
        key: "Defaults",
        get: function get()
        /* istanbul ignore next */
        {
          return DEFAULTS;
        }
      }]);
  
      return BvConfig;
    }(); // Method for applying a global config
  
  
    var setConfig = function setConfig() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var Vue$1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Vue;
      // Ensure we have a $bvConfig Object on the Vue prototype.
      // We set on Vue and OurVue just in case consumer has not set an alias of `vue`.
      Vue$1.prototype[PROP_NAME] = Vue.prototype[PROP_NAME] = Vue$1.prototype[PROP_NAME] || Vue.prototype[PROP_NAME] || new BvConfig(); // Apply the config values
  
      Vue$1.prototype[PROP_NAME].setConfig(config);
    }; // Method for resetting the user config. Exported for testing purposes only.
  
    /**
     * Checks if there are multiple instances of Vue, and warns (once) about possible issues.
     * @param {object} Vue
     */
  
    var checkMultipleVue = function () {
      var checkMultipleVueWarned = false;
      var MULTIPLE_VUE_WARNING = ['Multiple instances of Vue detected!', 'You may need to set up an alias for Vue in your bundler config.', 'See: https://bootstrap-vue.js.org/docs#using-module-bundlers'].join('\n');
      return function (Vue$1) {
        /* istanbul ignore next */
        if (!checkMultipleVueWarned && Vue !== Vue$1 && !isJSDOM) {
          warn(MULTIPLE_VUE_WARNING);
        }
  
        checkMultipleVueWarned = true;
      };
    }();
    /**
     * Plugin install factory function.
     * @param {object} { components, directives }
     * @returns {function} plugin install function
     */
  
    var installFactory = function installFactory() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          components = _ref.components,
          directives = _ref.directives,
          plugins = _ref.plugins;
  
      var install = function install(Vue) {
        var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  
        if (install.installed) {
          /* istanbul ignore next */
          return;
        }
  
        install.installed = true;
        checkMultipleVue(Vue);
        setConfig(config, Vue);
        registerComponents(Vue, components);
        registerDirectives(Vue, directives);
        registerPlugins(Vue, plugins);
      };
  
      install.installed = false;
      return install;
    };
    /**
     * Plugin object factory function.
     * @param {object} { components, directives, plugins }
     * @returns {object} plugin install object
     */
  
    var pluginFactory = function pluginFactory() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var extend = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return _objectSpread2({}, extend, {
        install: installFactory(options)
      });
    };
    /**
     * Load a group of plugins.
     * @param {object} Vue
     * @param {object} Plugin definitions
     */
  
    var registerPlugins = function registerPlugins(Vue) {
      var plugins = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  
      for (var plugin in plugins) {
        if (plugin && plugins[plugin]) {
          Vue.use(plugins[plugin]);
        }
      }
    };
    /**
     * Load a component.
     * @param {object} Vue
     * @param {string} Component name
     * @param {object} Component definition
     */
  
    var registerComponent = function registerComponent(Vue, name, def) {
      if (Vue && name && def) {
        Vue.component(name, def);
      }
    };
    /**
     * Load a group of components.
     * @param {object} Vue
     * @param {object} Object of component definitions
     */
  
    var registerComponents = function registerComponents(Vue) {
      var components = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  
      for (var component in components) {
        registerComponent(Vue, component, components[component]);
      }
    };
    /**
     * Load a directive.
     * @param {object} Vue
     * @param {string} Directive name
     * @param {object} Directive definition
     */
  
    var registerDirective = function registerDirective(Vue, name, def) {
      if (Vue && name && def) {
        // Ensure that any leading V is removed from the
        // name, as Vue adds it automatically
        Vue.directive(name.replace(/^VB/, 'B'), def);
      }
    };
    /**
     * Load a group of directives.
     * @param {object} Vue
     * @param {object} Object of directive definitions
     */
  
    var registerDirectives = function registerDirectives(Vue) {
      var directives = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  
      for (var directive in directives) {
        registerDirective(Vue, directive, directives[directive]);
      }
    };
    /**
     * Install plugin if window.Vue available
     * @param {object} Plugin definition
     */
  
    var vueUse = function vueUse(VuePlugin) {
      /* istanbul ignore next */
      if (hasWindowSupport && window.Vue) {
        window.Vue.use(VuePlugin);
      }
      /* istanbul ignore next */
  
  
      if (hasWindowSupport && VuePlugin.NAME) {
        window[VuePlugin.NAME] = VuePlugin;
      }
    };
  
    var memoize = function memoize(fn) {
      var cache = create(null);
      return function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
  
        var argsKey = JSON.stringify(args);
        return cache[argsKey] = cache[argsKey] || fn.apply(null, args);
      };
    };
  
    var PROP_NAME$1 = '$bvConfig';
    var VueProto = Vue.prototype; // --- Getter methods ---
  
    var getConfigValue = function getConfigValue(key) {
      return VueProto[PROP_NAME$1] ? VueProto[PROP_NAME$1].getConfigValue(key) : cloneDeep(get(DEFAULTS, key));
    }; // Method to grab a config value for a particular component
  
    var getComponentConfig = function getComponentConfig(cmpName) {
      var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      // Return the particular config value for key for if specified,
      // otherwise we return the full config (or an empty object if not found)
      return key ? getConfigValue("".concat(cmpName, ".").concat(key)) : getConfigValue(cmpName) || {};
    }; // Convenience method for getting all breakpoint names
  
    var getBreakpoints = function getBreakpoints() {
      return getConfigValue('breakpoints');
    }; // Private function for caching / locking-in breakpoint names
  
    var _getBreakpointsCached = memoize(function () {
      return getBreakpoints();
    }); // Convenience method for getting all breakpoint names.
    // Caches the results after first access.
  
  
    var getBreakpointsCached = function getBreakpointsCached() {
      return cloneDeep(_getBreakpointsCached());
    }; // Convenience method for getting breakpoints with
    // the smallest breakpoint set as ''.
    // Useful for components that create breakpoint specific props.
    // Caches the results after first access.
  
    var getBreakpointsUpCached = memoize(function () {
      var breakpoints = getBreakpointsCached();
      breakpoints[0] = '';
      return breakpoints;
    }); // Convenience method for getting breakpoints with
  
    var w$1 = hasWindowSupport ? window : {};
    var d = hasDocumentSupport ? document : {};
    var elProto = typeof Element !== 'undefined' ? Element.prototype : {}; // --- Normalization utils ---
    // See: https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
  
    /* istanbul ignore next */
  
    var matchesEl = elProto.matches || elProto.msMatchesSelector || elProto.webkitMatchesSelector; // See: https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
  
    /* istanbul ignore next */
  
    var closestEl = elProto.closest || function (sel)
    /* istanbul ignore next */
    {
      var el = this;
  
      do {
        // Use our "patched" matches function
        if (matches(el, sel)) {
          return el;
        }
  
        el = el.parentElement || el.parentNode;
      } while (!isNull(el) && el.nodeType === Node.ELEMENT_NODE);
  
      return null;
    }; // `requestAnimationFrame()` convenience method
  
    var requestAF = w$1.requestAnimationFrame || w$1.webkitRequestAnimationFrame || w$1.mozRequestAnimationFrame || w$1.msRequestAnimationFrame || w$1.oRequestAnimationFrame || // Fallback, but not a true polyfill
    // Only needed for Opera Mini
  
    /* istanbul ignore next */
    function (cb) {
      return setTimeout(cb, 16);
    };
    var MutationObs = w$1.MutationObserver || w$1.WebKitMutationObserver || w$1.MozMutationObserver || null; // --- Utils ---
    // Remove a node from DOM
  
    var removeNode = function removeNode(el) {
      return el && el.parentNode && el.parentNode.removeChild(el);
    }; // Determine if an element is an HTML element
  
    var isElement = function isElement(el) {
      return !!(el && el.nodeType === Node.ELEMENT_NODE);
    }; // Determine if an HTML element is visible - Faster than CSS check
  
    var isVisible = function isVisible(el) {
      if (!isElement(el) || !el.parentNode || !contains(d.body, el)) {
        // Note this can fail for shadow dom elements since they
        // are not a direct descendant of document.body
        return false;
      }
  
      if (el.style.display === 'none') {
        // We do this check to help with vue-test-utils when using v-show
  
        /* istanbul ignore next */
        return false;
      } // All browsers support getBoundingClientRect(), except JSDOM as it returns all 0's for values :(
      // So any tests that need isVisible will fail in JSDOM
      // Except when we override the getBCR prototype in some tests
  
  
      var bcr = getBCR(el);
      return !!(bcr && bcr.height > 0 && bcr.width > 0);
    }; // Determine if an element is disabled
  
    var isDisabled = function isDisabled(el) {
      return !isElement(el) || el.disabled || hasAttr(el, 'disabled') || hasClass(el, 'disabled');
    }; // Cause/wait-for an element to reflow its content (adjusting its height/width)
  
    var reflow = function reflow(el) {
      // Requesting an elements offsetHight will trigger a reflow of the element content
  
      /* istanbul ignore next: reflow doesn't happen in JSDOM */
      return isElement(el) && el.offsetHeight;
    }; // Select all elements matching selector. Returns `[]` if none found
  
    var selectAll = function selectAll(selector, root) {
      return from((isElement(root) ? root : d).querySelectorAll(selector));
    }; // Select a single element, returns `null` if not found
  
    var select = function select(selector, root) {
      return (isElement(root) ? root : d).querySelector(selector) || null;
    }; // Determine if an element matches a selector
  
    var matches = function matches(el, selector) {
      return isElement(el) ? matchesEl.call(el, selector) : false;
    }; // Finds closest element matching selector. Returns `null` if not found
  
    var closest = function closest(selector, root) {
      var includeRoot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  
      if (!isElement(root)) {
        return null;
      }
  
      var el = closestEl.call(root, selector); // Native closest behaviour when `includeRoot` is truthy,
      // else emulate jQuery closest and return `null` if match is
      // the passed in root element when `includeRoot` is falsey
  
      return includeRoot ? el : el === root ? null : el;
    }; // Returns true if the parent element contains the child element
  
    var contains = function contains(parent, child) {
      return parent && isFunction(parent.contains) ? parent.contains(child) : false;
    }; // Get an element given an ID
  
    var getById = function getById(id) {
      return d.getElementById(/^#/.test(id) ? id.slice(1) : id) || null;
    }; // Add a class to an element
  
    var addClass = function addClass(el, className) {
      // We are checking for `el.classList` existence here since IE 11
      // returns `undefined` for some elements (e.g. SVG elements)
      // See https://github.com/bootstrap-vue/bootstrap-vue/issues/2713
      if (className && isElement(el) && el.classList) {
        el.classList.add(className);
      }
    }; // Remove a class from an element
  
    var removeClass = function removeClass(el, className) {
      // We are checking for `el.classList` existence here since IE 11
      // returns `undefined` for some elements (e.g. SVG elements)
      // See https://github.com/bootstrap-vue/bootstrap-vue/issues/2713
      if (className && isElement(el) && el.classList) {
        el.classList.remove(className);
      }
    }; // Test if an element has a class
  
    var hasClass = function hasClass(el, className) {
      // We are checking for `el.classList` existence here since IE 11
      // returns `undefined` for some elements (e.g. SVG elements)
      // See https://github.com/bootstrap-vue/bootstrap-vue/issues/2713
      if (className && isElement(el) && el.classList) {
        return el.classList.contains(className);
      }
  
      return false;
    }; // Set an attribute on an element
  
    var setAttr = function setAttr(el, attr, val) {
      if (attr && isElement(el)) {
        el.setAttribute(attr, val);
      }
    }; // Remove an attribute from an element
  
    var removeAttr = function removeAttr(el, attr) {
      if (attr && isElement(el)) {
        el.removeAttribute(attr);
      }
    }; // Get an attribute value from an element
    // Returns `null` if not found
  
    var getAttr = function getAttr(el, attr) {
      return attr && isElement(el) ? el.getAttribute(attr) : null;
    }; // Determine if an attribute exists on an element
    // Returns `true` or `false`, or `null` if element not found
  
    var hasAttr = function hasAttr(el, attr) {
      return attr && isElement(el) ? el.hasAttribute(attr) : null;
    }; // Return the Bounding Client Rect of an element
    // Returns `null` if not an element
  
    /* istanbul ignore next: getBoundingClientRect() doesn't work in JSDOM */
  
    var getBCR = function getBCR(el) {
      return isElement(el) ? el.getBoundingClientRect() : null;
    }; // Get computed style object for an element
  
    /* istanbul ignore next: getComputedStyle() doesn't work in JSDOM */
  
    var getCS = function getCS(el) {
      return hasWindowSupport && isElement(el) ? w$1.getComputedStyle(el) : {};
    }; // Returns a `Selection` object representing the range of text selected
    // Returns `null` if no window support is given
  
    /* istanbul ignore next: getSelection() doesn't work in JSDOM */
  
    var getSel = function getSel() {
      return hasWindowSupport && w$1.getSelection ? w$1.getSelection() : null;
    }; // Return an element's offset with respect to document element
    // https://j11y.io/jquery/#v=git&fn=jQuery.fn.offset
  
    var offset = function offset(el)
    /* istanbul ignore next: getBoundingClientRect(), getClientRects() doesn't work in JSDOM */
    {
      var _offset = {
        top: 0,
        left: 0
      };
  
      if (!isElement(el) || el.getClientRects().length === 0) {
        return _offset;
      }
  
      var bcr = getBCR(el);
  
      if (bcr) {
        var win = el.ownerDocument.defaultView;
        _offset.top = bcr.top + win.pageYOffset;
        _offset.left = bcr.left + win.pageXOffset;
      }
  
      return _offset;
    }; // Return an element's offset with respect to to its offsetParent
    // https://j11y.io/jquery/#v=git&fn=jQuery.fn.position
  
    var position = function position(el)
    /* istanbul ignore next: getBoundingClientRect() doesn't work in JSDOM */
    {
      var _offset = {
        top: 0,
        left: 0
      };
  
      if (!isElement(el)) {
        return _offset;
      }
  
      var parentOffset = {
        top: 0,
        left: 0
      };
      var elStyles = getCS(el);
  
      if (elStyles.position === 'fixed') {
        _offset = getBCR(el) || _offset;
      } else {
        _offset = offset(el);
        var doc = el.ownerDocument;
        var offsetParent = el.offsetParent || doc.documentElement;
  
        while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && getCS(offsetParent).position === 'static') {
          offsetParent = offsetParent.parentNode;
        }
  
        if (offsetParent && offsetParent !== el && offsetParent.nodeType === Node.ELEMENT_NODE) {
          parentOffset = offset(offsetParent);
          var offsetParentStyles = getCS(offsetParent);
          parentOffset.top += parseFloat(offsetParentStyles.borderTopWidth);
          parentOffset.left += parseFloat(offsetParentStyles.borderLeftWidth);
        }
      }
  
      return {
        top: _offset.top - parentOffset.top - parseFloat(elStyles.marginTop),
        left: _offset.left - parentOffset.left - parseFloat(elStyles.marginLeft)
      };
    };
  
    // Number utilities
    // Converts a value (string, number, etc) to an integer number
    // Assumes radix base 10
    // Returns NaN if the value cannot be converted
    var toInteger = function toInteger(val) {
      return parseInt(val, 10);
    }; // Converts a value (string, number, etc) to a number
    // Returns NaN if the value cannot be converted
  
    var toFloat = function toFloat(val) {
      return parseFloat(val);
    }; // Converts a value (string, number, etc) to a string
    // representation with 'precision' digits after the decimal
    // Returns the string 'NaN' if the value cannot be converted
  
    var toFixed = function toFixed(val, precision) {
      return toFloat(val).toFixed(toInteger(precision) || 0);
    };
  
    var e=function(){return (e=Object.assign||function(e){for(var t,r=1,s=arguments.length;r<s;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},t={kebab:/-(\w)/g,styleProp:/:(.*)/,styleList:/;(?![^(]*\))/g};function r(e,t){return t?t.toUpperCase():""}function s(e){for(var s,a={},c=0,o=e.split(t.styleList);c<o.length;c++){var n=o[c].split(t.styleProp),i=n[0],l=n[1];(i=i.trim())&&("string"==typeof l&&(l=l.trim()),a[(s=i,s.replace(t.kebab,r))]=l);}return a}function a(){for(var t,r,a={},c=arguments.length;c--;)for(var o=0,n=Object.keys(arguments[c]);o<n.length;o++)switch(t=n[o]){case"class":case"style":case"directives":if(Array.isArray(a[t])||(a[t]=[]),"style"===t){var i=void 0;i=Array.isArray(arguments[c].style)?arguments[c].style:[arguments[c].style];for(var l=0;l<i.length;l++){var y=i[l];"string"==typeof y&&(i[l]=s(y));}arguments[c].style=i;}a[t]=a[t].concat(arguments[c][t]);break;case"staticClass":if(!arguments[c][t])break;void 0===a[t]&&(a[t]=""),a[t]&&(a[t]+=" "),a[t]+=arguments[c][t].trim();break;case"on":case"nativeOn":a[t]||(a[t]={});for(var p=0,f=Object.keys(arguments[c][t]||{});p<f.length;p++)r=f[p],a[t][r]?a[t][r]=[].concat(a[t][r],arguments[c][t][r]):a[t][r]=arguments[c][t][r];break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":a[t]||(a[t]={}),a[t]=e({},arguments[c][t],a[t]);break;case"slot":case"key":case"ref":case"tag":case"show":case"keepAlive":default:a[t]||(a[t]=arguments[c][t]);}return a}
  
    var NO_FADE_PROPS = {
      name: '',
      enterClass: '',
      enterActiveClass: '',
      enterToClass: 'show',
      leaveClass: 'show',
      leaveActiveClass: '',
      leaveToClass: ''
    };
  
    var FADE_PROPS = _objectSpread2({}, NO_FADE_PROPS, {
      enterActiveClass: 'fade',
      leaveActiveClass: 'fade'
    }); // @vue/component
  
  
    var BVTransition = /*#__PURE__*/Vue.extend({
      name: 'BVTransition',
      functional: true,
      props: {
        noFade: {
          // Only applicable to the built in transition
          // Has no effect if `trans-props` provided
          type: Boolean,
          default: false
        },
        appear: {
          // Has no effect if `trans-props` provided
          type: Boolean,
          default: false
        },
        mode: {
          // Can be overridden by user supplied trans-props
          type: String // default: undefined
  
        },
        // For user supplied transitions (if needed)
        transProps: {
          type: Object,
          default: null
        }
      },
      render: function render(h, _ref) {
        var children = _ref.children,
            data = _ref.data,
            props = _ref.props;
        var transProps = props.transProps;
  
        if (!isPlainObject(transProps)) {
          transProps = props.noFade ? NO_FADE_PROPS : FADE_PROPS;
  
          if (props.appear) {
            // Default the appear classes to equal the enter classes
            transProps = _objectSpread2({}, transProps, {
              appear: true,
              appearClass: transProps.enterClass,
              appearActiveClass: transProps.enterActiveClass,
              appearToClass: transProps.enterToClass
            });
          }
        }
  
        transProps = _objectSpread2({
          mode: props.mode
        }, transProps, {
          // We always need `css` true
          css: true
        });
        return h('transition', // Any transition event listeners will get merged here
        a(data, {
          props: transProps
        }), children);
      }
    });
  
    // In functional components, `slots` is a function so it must be called
    // first before passing to the below methods. `scopedSlots` is always an
    // object and may be undefined (for Vue < 2.6.x)
  
    /**
     * Returns true if either scoped or unscoped named slot exists
     *
     * @param {String, Array} name or name[]
     * @param {Object} scopedSlots
     * @param {Object} slots
     * @returns {Array|undefined} VNodes
     */
  
    var hasNormalizedSlot = function hasNormalizedSlot(names) {
      var $scopedSlots = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var $slots = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      // Ensure names is an array
      names = concat(names).filter(identity); // Returns true if the either a $scopedSlot or $slot exists with the specified name
  
      return names.some(function (name) {
        return $scopedSlots[name] || $slots[name];
      });
    };
    /**
     * Returns VNodes for named slot either scoped or unscoped
     *
     * @param {String, Array} name or name[]
     * @param {String} scope
     * @param {Object} scopedSlots
     * @param {Object} slots
     * @returns {Array|undefined} VNodes
     */
  
  
    var normalizeSlot = function normalizeSlot(names) {
      var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var $scopedSlots = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var $slots = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      // Ensure names is an array
      names = concat(names).filter(identity);
      var slot;
  
      for (var i = 0; i < names.length && !slot; i++) {
        var name = names[i];
        slot = $scopedSlots[name] || $slots[name];
      } // Note: in Vue 2.6.x, all named slots are also scoped slots
  
  
      return isFunction(slot) ? slot(scope) : slot;
    }; // Named exports
  
    var normalizeSlotMixin = {
      methods: {
        hasNormalizedSlot: function hasNormalizedSlot$1(names) {
          // Returns true if the either a $scopedSlot or $slot exists with the specified name
          // `names` can be a string name or an array of names
          return hasNormalizedSlot(names, this.$scopedSlots, this.$slots);
        },
        normalizeSlot: function normalizeSlot$1(names) {
          var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  
          // Returns an array of rendered VNodes if slot found.
          // Returns undefined if not found.
          // `names` can be a string name or an array of names
          var vNodes = normalizeSlot(names, scope, this.$scopedSlots, this.$slots);
  
          return vNodes ? concat(vNodes) : vNodes;
        }
      }
    };
  
    var NAME$1 = 'BButtonClose';
    var props = {
      content: {
        type: String,
        default: function _default() {
          return getComponentConfig(NAME$1, 'content');
        }
      },
      disabled: {
        type: Boolean,
        default: false
      },
      ariaLabel: {
        type: String,
        default: function _default() {
          return getComponentConfig(NAME$1, 'ariaLabel');
        }
      },
      textVariant: {
        type: String,
        default: function _default() {
          return getComponentConfig(NAME$1, 'textVariant');
        }
      }
    }; // @vue/component
  
    var BButtonClose = /*#__PURE__*/Vue.extend({
      name: NAME$1,
      functional: true,
      props: props,
      render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            slots = _ref.slots,
            scopedSlots = _ref.scopedSlots;
        var $slots = slots();
        var $scopedSlots = scopedSlots || {};
        var componentData = {
          staticClass: 'close',
          class: _defineProperty({}, "text-".concat(props.textVariant), props.textVariant),
          attrs: {
            type: 'button',
            disabled: props.disabled,
            'aria-label': props.ariaLabel ? String(props.ariaLabel) : null
          },
          on: {
            click: function click(evt) {
              // Ensure click on button HTML content is also disabled
  
              /* istanbul ignore if: bug in JSDOM still emits click on inner element */
              if (props.disabled && isEvent(evt)) {
                evt.stopPropagation();
                evt.preventDefault();
              }
            }
          }
        }; // Careful not to override the default slot with innerHTML
  
        if (!hasNormalizedSlot('default', $scopedSlots, $slots)) {
          componentData.domProps = {
            innerHTML: props.content
          };
        }
  
        return h('button', a(data, componentData), normalizeSlot('default', {}, $scopedSlots, $slots));
      }
    });
  
    var NAME$2 = 'BAlert'; // Convert `show` value to a number
  
    var parseCountDown = function parseCountDown(show) {
      if (show === '' || isBoolean(show)) {
        return 0;
      }
  
      show = toInteger(show);
      return show > 0 ? show : 0;
    }; // Convert `show` value to a boolean
  
  
    var parseShow = function parseShow(show) {
      if (show === '' || show === true) {
        return true;
      }
  
      if (toInteger(show) < 1) {
        // Boolean will always return false for the above comparison
        return false;
      }
  
      return !!show;
    }; // Is a value number like (i.e. a number or a number as string)
  
  
    var isNumericLike = function isNumericLike(value) {
      return !isNaN(toInteger(value));
    }; // @vue/component
  
  
    var BAlert = /*#__PURE__*/Vue.extend({
      name: NAME$2,
      mixins: [normalizeSlotMixin],
      model: {
        prop: 'show',
        event: 'input'
      },
      props: {
        variant: {
          type: String,
          default: function _default() {
            return getComponentConfig(NAME$2, 'variant');
          }
        },
        dismissible: {
          type: Boolean,
          default: false
        },
        dismissLabel: {
          type: String,
          default: function _default() {
            return getComponentConfig(NAME$2, 'dismissLabel');
          }
        },
        show: {
          type: [Boolean, Number, String],
          default: false
        },
        fade: {
          type: Boolean,
          default: false
        }
      },
      data: function data() {
        return {
          countDownTimerId: null,
          countDown: 0,
          // If initially shown, we need to set these for SSR
          localShow: parseShow(this.show)
        };
      },
      watch: {
        show: function show(newVal) {
          this.countDown = parseCountDown(newVal);
          this.localShow = parseShow(newVal);
        },
        countDown: function countDown(newVal) {
          var _this = this;
  
          this.clearTimer();
  
          if (isNumericLike(this.show)) {
            // Ignore if this.show transitions to a boolean value.
            this.$emit('dismiss-count-down', newVal);
  
            if (this.show !== newVal) {
              // Update the v-model if needed
              this.$emit('input', newVal);
            }
  
            if (newVal > 0) {
              this.localShow = true;
              this.countDownTimerId = setTimeout(function () {
                _this.countDown--;
              }, 1000);
            } else {
              // Slightly delay the hide to allow any UI updates
              this.$nextTick(function () {
                requestAF(function () {
                  _this.localShow = false;
                });
              });
            }
          }
        },
        localShow: function localShow(newVal) {
          if (!newVal && (this.dismissible || isNumericLike(this.show))) {
            // Only emit dismissed events for dismissible or auto dismissing alerts
            this.$emit('dismissed');
          }
  
          if (!isNumericLike(this.show) && this.show !== newVal) {
            // Only emit booleans if we weren't passed a number via `this.show`
            this.$emit('input', newVal);
          }
        }
      },
      created: function created() {
        this.countDown = parseCountDown(this.show);
        this.localShow = parseShow(this.show);
      },
      mounted: function mounted() {
        this.countDown = parseCountDown(this.show);
        this.localShow = parseShow(this.show);
      },
      beforeDestroy: function beforeDestroy() {
        this.clearTimer();
      },
      methods: {
        dismiss: function dismiss() {
          this.clearTimer();
          this.countDown = 0;
          this.localShow = false;
        },
        clearTimer: function clearTimer() {
          if (this.countDownTimerId) {
            clearInterval(this.countDownTimerId);
            this.countDownTimerId = null;
          }
        }
      },
      render: function render(h) {
        var $alert; // undefined
  
        if (this.localShow) {
          var $dismissBtn = h();
  
          if (this.dismissible) {
            // Add dismiss button
            $dismissBtn = h(BButtonClose, {
              attrs: {
                'aria-label': this.dismissLabel
              },
              on: {
                click: this.dismiss
              }
            }, [this.normalizeSlot('dismiss')]);
          }
  
          $alert = h('div', {
            key: this._uid,
            staticClass: 'alert',
            class: _defineProperty({
              'alert-dismissible': this.dismissible
            }, "alert-".concat(this.variant), this.variant),
            attrs: {
              role: 'alert',
              'aria-live': 'polite',
              'aria-atomic': true
            }
          }, [$dismissBtn, this.normalizeSlot('default')]);
          $alert = [$alert];
        }
  
        return h(BVTransition, {
          props: {
            noFade: !this.fade
          }
        }, $alert);
      }
    });
  
    var AlertPlugin = /*#__PURE__*/pluginFactory({
      components: {
        BAlert: BAlert
      }
    });
  
    /**
     * Given an array of properties or an object of property keys,
     * plucks all the values off the target object, returning a new object
     * that has props that reference the original prop values
     *
     * @param {{}|string[]} keysToPluck
     * @param {{}} objToPluck
     * @param {Function} transformFn
     * @return {{}}
     */
  
    var pluckProps = function pluckProps(keysToPluck, objToPluck) {
      var transformFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : identity;
      return (isArray(keysToPluck) ? keysToPluck.slice() : keys(keysToPluck)).reduce(function (memo, prop) {
        memo[transformFn(prop)] = objToPluck[prop];
        return memo;
      }, {});
    };
  
    /*
     * Key Codes (events)
     */
    var KEY_CODES = freeze({
      SPACE: 32,
      ENTER: 13,
      ESC: 27,
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40,
      PAGEUP: 33,
      PAGEDOWN: 34,
      HOME: 36,
      END: 35,
      TAB: 9,
      SHIFT: 16,
      CTRL: 17,
      BACKSPACE: 8,
      ALT: 18,
      PAUSE: 19,
      BREAK: 19,
      INSERT: 45,
      INS: 45,
      DELETE: 46
    });
  
    // String utilities
  
    var RX_TRIM_LEFT = /^\s+/;
    var RX_REGEXP_REPLACE = /[-/\\^$*+?.()|[\]{}]/g;
    var RX_UN_KEBAB = /-(\w)/g;
    var RX_HYPHENATE = /\B([A-Z])/g; // --- Utilities ---
    // Converts PascalCase or camelCase to kebab-case
  
    var kebabCase = function kebabCase(str) {
      return str.replace(RX_HYPHENATE, '-$1').toLowerCase();
    }; // Converts a kebab-case or camelCase string to PascalCase
  
    var pascalCase = function pascalCase(str) {
      str = kebabCase(str).replace(RX_UN_KEBAB, function (_, c) {
        return c ? c.toUpperCase() : '';
      });
      return str.charAt(0).toUpperCase() + str.slice(1);
    }; // Lowercases the first letter of a string and returns a new string
  
    var lowerFirst = function lowerFirst(str) {
      str = isString(str) ? str.trim() : String(str);
      return str.charAt(0).toLowerCase() + str.slice(1);
    }; // Uppercases the first letter of a string and returns a new string
  
    var upperFirst = function upperFirst(str) {
      str = isString(str) ? str.trim() : String(str);
      return str.charAt(0).toUpperCase() + str.slice(1);
    }; // Escape characters to be used in building a regular expression
  
    var escapeRegExp = function escapeRegExp(str) {
      return str.replace(RX_REGEXP_REPLACE, '\\$&');
    }; // Convert a value to a string that can be rendered
    // `undefined`/`null` will be converted to `''`
    // Plain objects and arrays will be JSON stringified
  
    var toString$1 = function toString(val) {
      var spaces = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
      return isUndefinedOrNull(val) ? '' : isArray(val) || isPlainObject(val) && val.toString === Object.prototype.toString ? JSON.stringify(val, null, spaces) : String(val);
    }; // Remove leading white space from a string
  
    var trimLeft = function trimLeft(str) {
      return toString$1(str).replace(RX_TRIM_LEFT, '');
    }; // Remove Trailing white space from a string
  
    var trim = function trim(str) {
      return toString$1(str).trim();
    }; // Lower case a string
  
    var lowerCase = function lowerCase(str) {
      return toString$1(str).toLowerCase();
    }; // Upper case a string
  
    var ANCHOR_TAG = 'a'; // Precompile RegExp
  
    var commaRE = /%2C/g;
    var encodeReserveRE = /[!'()*]/g;
    var plusRE = /\+/g;
    var queryStartRE = /^(\?|#|&)/; // Method to replace reserved chars
  
    var encodeReserveReplacer = function encodeReserveReplacer(c) {
      return '%' + c.charCodeAt(0).toString(16);
    }; // Fixed encodeURIComponent which is more conformant to RFC3986:
    // - escapes [!'()*]
    // - preserve commas
  
  
    var encode = function encode(str) {
      return encodeURIComponent(toString$1(str)).replace(encodeReserveRE, encodeReserveReplacer).replace(commaRE, ',');
    };
  
    var decode = decodeURIComponent; // Stringifies an object of query parameters
    // See: https://github.com/vuejs/vue-router/blob/dev/src/util/query.js
  
    var stringifyQueryObj = function stringifyQueryObj(obj) {
      if (!isPlainObject(obj)) {
        return '';
      }
  
      var query = keys(obj).map(function (key) {
        var val = obj[key];
  
        if (isUndefined(val)) {
          return '';
        } else if (isNull(val)) {
          return encode(key);
        } else if (isArray(val)) {
          return val.reduce(function (results, val2) {
            if (isNull(val2)) {
              results.push(encode(key));
            } else if (!isUndefined(val2)) {
              // Faster than string interpolation
              results.push(encode(key) + '=' + encode(val2));
            }
  
            return results;
          }, []).join('&');
        } // Faster than string interpolation
  
  
        return encode(key) + '=' + encode(val);
      })
      /* must check for length, as we only want to filter empty strings, not things that look falsey! */
      .filter(function (x) {
        return x.length > 0;
      }).join('&');
      return query ? "?".concat(query) : '';
    };
    var parseQuery = function parseQuery(query) {
      var parsed = {};
      query = toString$1(query).trim().replace(queryStartRE, '');
  
      if (!query) {
        return parsed;
      }
  
      query.split('&').forEach(function (param) {
        var parts = param.replace(plusRE, ' ').split('=');
        var key = decode(parts.shift());
        var val = parts.length > 0 ? decode(parts.join('=')) : null;
  
        if (isUndefined(parsed[key])) {
          parsed[key] = val;
        } else if (isArray(parsed[key])) {
          parsed[key].push(val);
        } else {
          parsed[key] = [parsed[key], val];
        }
      });
      return parsed;
    };
    var isRouterLink = function isRouterLink(tag) {
      return toString$1(tag).toLowerCase() !== ANCHOR_TAG;
    };
    var computeTag = function computeTag() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          to = _ref.to,
          disabled = _ref.disabled;
  
      var thisOrParent = arguments.length > 1 ? arguments[1] : undefined;
      return thisOrParent.$router && to && !disabled ? thisOrParent.$nuxt ? 'nuxt-link' : 'router-link' : ANCHOR_TAG;
    };
    var computeRel = function computeRel() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          target = _ref2.target,
          rel = _ref2.rel;
  
      if (target === '_blank' && isNull(rel)) {
        return 'noopener';
      }
  
      return rel || null;
    };
    var computeHref = function computeHref() {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          href = _ref3.href,
          to = _ref3.to;
  
      var tag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ANCHOR_TAG;
      var fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '#';
      var toFallback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '/';
  
      // We've already checked the $router in computeTag(), so isRouterLink() indicates a live router.
      // When deferring to Vue Router's router-link, don't use the href attribute at all.
      // We return null, and then remove href from the attributes passed to router-link
      if (isRouterLink(tag)) {
        return null;
      } // Return `href` when explicitly provided
  
  
      if (href) {
        return href;
      } // Reconstruct `href` when `to` used, but no router
  
  
      if (to) {
        // Fallback to `to` prop (if `to` is a string)
        if (isString(to)) {
          return to || toFallback;
        } // Fallback to `to.path + to.query + to.hash` prop (if `to` is an object)
  
  
        if (isPlainObject(to) && (to.path || to.query || to.hash)) {
          var path = toString$1(to.path);
          var query = stringifyQueryObj(to.query);
          var hash = toString$1(to.hash);
          hash = !hash || hash.charAt(0) === '#' ? hash : "#".concat(hash);
          return "".concat(path).concat(query).concat(hash) || toFallback;
        }
      } // If nothing is provided return the fallback
  
  
      return fallback;
    };
  
    /**
     * The Link component is used in many other BV components.
     * As such, sharing its props makes supporting all its features easier.
     * However, some components need to modify the defaults for their own purpose.
     * Prefer sharing a fresh copy of the props to ensure mutations
     * do not affect other component references to the props.
     *
     * https://github.com/vuejs/vue-router/blob/dev/src/components/link.js
     * @return {{}}
     */
  
    var propsFactory = function propsFactory() {
      return {
        href: {
          type: String,
          default: null
        },
        rel: {
          type: String,
          default: null
        },
        target: {
          type: String,
          default: '_self'
        },
        active: {
          type: Boolean,
          default: false
        },
        disabled: {
          type: Boolean,
          default: false
        },
        // router-link specific props
        to: {
          type: [String, Object],
          default: null
        },
        append: {
          type: Boolean,
          default: false
        },
        replace: {
          type: Boolean,
          default: false
        },
        event: {
          type: [String, Array],
          default: 'click'
        },
        activeClass: {
          type: String // default: undefined
  
        },
        exact: {
          type: Boolean,
          default: false
        },
        exactActiveClass: {
          type: String // default: undefined
  
        },
        routerTag: {
          type: String,
          default: 'a'
        },
        // nuxt-link specific prop(s)
        noPrefetch: {
          type: Boolean,
          default: false
        }
      };
    };
  
    var BLink = /*#__PURE__*/Vue.extend({
      name: 'BLink',
      mixins: [normalizeSlotMixin],
      inheritAttrs: false,
      props: propsFactory(),
      computed: {
        computedTag: function computedTag() {
          // We don't pass `this` as the first arg as we need reactivity of the props
          return computeTag({
            to: this.to,
            disabled: this.disabled
          }, this);
        },
        isRouterLink: function isRouterLink$1() {
          return isRouterLink(this.computedTag);
        },
        computedRel: function computedRel() {
          // We don't pass `this` as the first arg as we need reactivity of the props
          return computeRel({
            target: this.target,
            rel: this.rel
          });
        },
        computedHref: function computedHref() {
          // We don't pass `this` as the first arg as we need reactivity of the props
          return computeHref({
            to: this.to,
            href: this.href
          }, this.computedTag);
        },
        computedProps: function computedProps() {
          return this.isRouterLink ? _objectSpread2({}, this.$props, {
            tag: this.routerTag
          }) : {};
        }
      },
      methods: {
        onClick: function onClick(evt) {
          var _arguments = arguments;
          var evtIsEvent = isEvent(evt);
          var isRouterLink = this.isRouterLink;
          var suppliedHandler = this.$listeners.click;
  
          if (evtIsEvent && this.disabled) {
            // Stop event from bubbling up
            evt.stopPropagation(); // Kill the event loop attached to this specific `EventTarget`
            // Needed to prevent `vue-router` for doing its thing
  
            evt.stopImmediatePropagation();
          } else {
            /* istanbul ignore next: difficult to test, but we know it works */
            if (isRouterLink && evt.currentTarget.__vue__) {
              // Router links do not emit instance `click` events, so we
              // add in an `$emit('click', evt)` on its Vue instance
              evt.currentTarget.__vue__.$emit('click', evt);
            } // Call the suppliedHandler(s), if any provided
  
  
            concat(suppliedHandler).filter(function (h) {
              return isFunction(h);
            }).forEach(function (handler) {
              handler.apply(void 0, _toConsumableArray(_arguments));
            }); // Emit the global `$root` click event
  
            this.$root.$emit('clicked::link', evt);
          } // Stop scroll-to-top behavior or navigation on
          // regular links when href is just '#'
  
  
          if (evtIsEvent && (this.disabled || !isRouterLink && this.computedHref === '#')) {
            evt.preventDefault();
          }
        },
        focus: function focus() {
          if (this.$el && this.$el.focus) {
            this.$el.focus();
          }
        },
        blur: function blur() {
          if (this.$el && this.$el.blur) {
            this.$el.blur();
          }
        }
      },
      render: function render(h) {
        var tag = this.computedTag;
        var rel = this.computedRel;
        var href = this.computedHref;
        var isRouterLink = this.isRouterLink;
        var componentData = {
          class: {
            active: this.active,
            disabled: this.disabled
          },
          attrs: _objectSpread2({}, this.$attrs, {
            rel: rel,
            target: this.target,
            tabindex: this.disabled ? '-1' : isUndefined(this.$attrs.tabindex) ? null : this.$attrs.tabindex,
            'aria-disabled': this.disabled ? 'true' : null
          }),
          props: this.computedProps
        }; // Add the event handlers. We must use `nativeOn` for
        // `<router-link>`/`<nuxt-link>` instead of `on`
  
        componentData[isRouterLink ? 'nativeOn' : 'on'] = _objectSpread2({}, this.$listeners, {
          // We want to overwrite any click handler since our callback
          // will invoke the user supplied handler(s) if `!this.disabled`
          click: this.onClick
        }); // If href attribute exists on <router-link> (even undefined or null) it fails working on
        // SSR, so we explicitly add it here if needed (i.e. if computedHref() is truthy)
  
        if (href) {
          componentData.attrs.href = href;
        } else {
          // Ensure the prop HREF does not exist for router links
          delete componentData.props.href;
        }
  
        return h(tag, componentData, this.normalizeSlot('default'));
      }
    });
  
    var NAME$3 = 'BButton';
    var btnProps = {
      block: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: function _default() {
          return getComponentConfig(NAME$3, 'size');
        }
      },
      variant: {
        type: String,
        default: function _default() {
          return getComponentConfig(NAME$3, 'variant');
        }
      },
      type: {
        type: String,
        default: 'button'
      },
      tag: {
        type: String,
        default: 'button'
      },
      pill: {
        type: Boolean,
        default: false
      },
      squared: {
        type: Boolean,
        default: false
      },
      pressed: {
        // Tri-state: `true`, `false` or `null`
        // => On, off, not a toggle
        type: Boolean,
        default: null
      }
    };
    var linkProps = propsFactory();
    delete linkProps.href.default;
    delete linkProps.to.default;
    var linkPropKeys = keys(linkProps);
    var props$1 = _objectSpread2({}, linkProps, {}, btnProps); // --- Helper methods ---
    // Returns `true` if a tag's name equals `name`
  
    var tagIs = function tagIs(tag, name) {
      return toString$1(tag).toLowerCase() === toString$1(name).toLowerCase();
    }; // Focus handler for toggle buttons
    // Needs class of 'focus' when focused
  
  
    var handleFocus = function handleFocus(evt) {
      if (evt.type === 'focusin') {
        addClass(evt.target, 'focus');
      } else if (evt.type === 'focusout') {
        removeClass(evt.target, 'focus');
      }
    }; // Is the requested button a link?
    // If tag prop is set to `a`, we use a <b-link> to get proper disabled handling
  
  
    var isLink = function isLink(props) {
      return props.href || props.to || tagIs(props.tag, 'a');
    }; // Is the button to be a toggle button?
  
  
    var isToggle = function isToggle(props) {
      return isBoolean(props.pressed);
    }; // Is the button "really" a button?
  
  
    var isButton = function isButton(props) {
      return !(isLink(props) || props.tag && !tagIs(props.tag, 'button'));
    }; // Is the requested tag not a button or link?
  
  
    var isNonStandardTag = function isNonStandardTag(props) {
      return !isLink(props) && !isButton(props);
    }; // Compute required classes (non static classes)
  
  
    var computeClass = function computeClass(props) {
      var _ref;
  
      return ["btn-".concat(props.variant || getComponentConfig(NAME$3, 'variant')), (_ref = {}, _defineProperty(_ref, "btn-".concat(props.size), props.size), _defineProperty(_ref, 'btn-block', props.block), _defineProperty(_ref, 'rounded-pill', props.pill), _defineProperty(_ref, 'rounded-0', props.squared && !props.pill), _defineProperty(_ref, "disabled", props.disabled), _defineProperty(_ref, "active", props.pressed), _ref)];
    }; // Compute the link props to pass to b-link (if required)
  
  
    var computeLinkProps = function computeLinkProps(props) {
      return isLink(props) ? pluckProps(linkPropKeys, props) : null;
    }; // Compute the attributes for a button
  
  
    var computeAttrs = function computeAttrs(props, data) {
      var button = isButton(props);
      var link = isLink(props);
      var toggle = isToggle(props);
      var nonStandardTag = isNonStandardTag(props);
      var hashLink = link && props.href === '#';
      var role = data.attrs && data.attrs.role ? data.attrs.role : null;
      var tabindex = data.attrs ? data.attrs.tabindex : null;
  
      if (nonStandardTag || hashLink) {
        tabindex = '0';
      }
  
      return {
        // Type only used for "real" buttons
        type: button && !link ? props.type : null,
        // Disabled only set on "real" buttons
        disabled: button ? props.disabled : null,
        // We add a role of button when the tag is not a link or button for ARIA
        // Don't bork any role provided in `data.attrs` when `isLink` or `isButton`
        // Except when link has `href` of `#`
        role: nonStandardTag || hashLink ? 'button' : role,
        // We set the `aria-disabled` state for non-standard tags
        'aria-disabled': nonStandardTag ? String(props.disabled) : null,
        // For toggles, we need to set the pressed state for ARIA
        'aria-pressed': toggle ? String(props.pressed) : null,
        // `autocomplete="off"` is needed in toggle mode to prevent some browsers
        // from remembering the previous setting when using the back button
        autocomplete: toggle ? 'off' : null,
        // `tabindex` is used when the component is not a button
        // Links are tabbable, but don't allow disabled, while non buttons or links
        // are not tabbable, so we mimic that functionality by disabling tabbing
        // when disabled, and adding a `tabindex="0"` to non buttons or non links
        tabindex: props.disabled && !button ? '-1' : tabindex
      };
    }; // @vue/component
  
  
    var BButton = /*#__PURE__*/Vue.extend({
      name: NAME$3,
      functional: true,
      props: props$1,
      render: function render(h, _ref2) {
        var props = _ref2.props,
            data = _ref2.data,
            listeners = _ref2.listeners,
            children = _ref2.children;
        var toggle = isToggle(props);
        var link = isLink(props);
        var nonStandardTag = isNonStandardTag(props);
        var hashLink = link && props.href === '#';
        var on = {
          keydown: function keydown(evt) {
            // When the link is a `href="#"` or a non-standard tag (has `role="button"`),
            // we add a keydown handlers for SPACE/ENTER
  
            /* istanbul ignore next */
            if (props.disabled || !(nonStandardTag || hashLink)) {
              return;
            }
  
            var keyCode = evt.keyCode; // Add SPACE handler for `href="#"` and ENTER handler for non-standard tags
  
            if (keyCode === KEY_CODES.SPACE || keyCode === KEY_CODES.ENTER && nonStandardTag) {
              var target = evt.currentTarget || evt.target;
              evt.preventDefault();
              target.click();
            }
          },
          click: function click(evt) {
            /* istanbul ignore if: blink/button disabled should handle this */
            if (props.disabled && isEvent(evt)) {
              evt.stopPropagation();
              evt.preventDefault();
            } else if (toggle && listeners && listeners['update:pressed']) {
              // Send `.sync` updates to any "pressed" prop (if `.sync` listeners)
              // `concat()` will normalize the value to an array without
              // double wrapping an array value in an array
              concat(listeners['update:pressed']).forEach(function (fn) {
                if (isFunction(fn)) {
                  fn(!props.pressed);
                }
              });
            }
          }
        };
  
        if (toggle) {
          on.focusin = handleFocus;
          on.focusout = handleFocus;
        }
  
        var componentData = {
          staticClass: 'btn',
          class: computeClass(props),
          props: computeLinkProps(props),
          attrs: computeAttrs(props, data),
          on: on
        };
        return h(link ? BLink : props.tag, a(data, componentData), children);
      }
    });
  
    var commonIconProps = {
      variant: {
        type: String,
        default: null
      },
      fontScale: {
        type: [Number, String],
        default: 1
      },
      scale: {
        type: [Number, String],
        default: 1
      },
      rotate: {
        type: [Number, String],
        default: 0
      },
      flipH: {
        type: Boolean,
        default: false
      },
      flipV: {
        type: Boolean,
        default: false
      },
      shiftH: {
        type: [Number, String],
        default: 0
      },
      shiftV: {
        type: [Number, String],
        default: 0
      },
      animation: {
        type: String,
        default: null
      }
    }; // Base attributes needed on all icons
  
    var baseAttrs = {
      viewBox: '0 0 16 16',
      width: '1em',
      height: '1em',
      focusable: 'false',
      role: 'img',
      alt: 'icon'
    }; // Attributes that are nulled out when stacked
  
    var stackedAttrs = {
      width: null,
      height: null,
      focusable: null,
      role: null,
      alt: null
    }; // Shared private base component to reduce bundle/runtime size
    // @vue/component
  
    var BVIconBase = /*#__PURE__*/Vue.extend({
      name: 'BVIconBase',
      functional: true,
      props: _objectSpread2({
        content: {
          type: String
        },
        stacked: {
          type: Boolean,
          default: false
        }
      }, commonIconProps),
      render: function render(h, _ref) {
        var _class;
  
        var data = _ref.data,
            props = _ref.props,
            children = _ref.children;
        var fontScale = Math.max(toFloat(props.fontScale) || 1, 0) || 1;
        var scale = Math.max(toFloat(props.scale) || 1, 0) || 1;
        var rotate = toFloat(props.rotate) || 0;
        var shiftH = toFloat(props.shiftH) || 0;
        var shiftV = toFloat(props.shiftV) || 0;
        var flipH = props.flipH;
        var flipV = props.flipV;
        var animation = props.animation; // Compute the transforms
        // Note that order is important as SVG transforms are applied in order from
        // left to right and we want flipping/scale to occur before rotation
        // Note shifting is applied separately
        // Assumes that the viewbox is `0 0 16 16` (`8 8` is the center)
  
        var hasScale = flipH || flipV || scale !== 1;
        var hasTransforms = hasScale || rotate;
        var hasShift = shiftH || shiftV;
        var transforms = [hasTransforms ? 'translate(8 8)' : null, hasScale ? "scale(".concat((flipH ? -1 : 1) * scale, " ").concat((flipV ? -1 : 1) * scale, ")") : null, rotate ? "rotate(".concat(rotate, ")") : null, hasTransforms ? 'translate(-8 -8)' : null].filter(identity); // Handling stacked icons
  
        var isStacked = props.stacked;
        var hasContent = !isUndefinedOrNull(props.content); // We wrap the content in a `<g>` for handling the transforms (except shift)
  
        var $inner = h('g', {
          attrs: {
            transform: transforms.join(' ') || null
          },
          domProps: hasContent ? {
            innerHTML: props.content || ''
          } : {}
        }, children); // If needed, we wrap in an additional `<g>` in order to handle the shifting
  
        if (hasShift) {
          $inner = h('g', {
            attrs: {
              transform: "translate(".concat(16 * shiftH / 16, " ").concat(-16 * shiftV / 16, ")")
            }
          }, [$inner]);
        }
  
        if (isStacked) {
          // Wrap in an additional `<g>` for proper
          // animation handling if stacked
          $inner = h('g', {}, [$inner]);
        }
  
        return h('svg', a({
          staticClass: 'b-icon bi',
          class: (_class = {}, _defineProperty(_class, "text-".concat(props.variant), !!props.variant), _defineProperty(_class, "b-icon-animation-".concat(animation), !!animation), _class),
          attrs: baseAttrs,
          style: isStacked ? {} : {
            fontSize: fontScale === 1 ? null : "".concat(fontScale * 100, "%")
          }
        }, // Merge in user supplied data
        data, // If icon is stacked, null out some attrs
        isStacked ? {
          attrs: stackedAttrs
        } : {}, // These cannot be overridden by users
        {
          attrs: {
            xmlns: isStacked ? null : 'http://www.w3.org/2000/svg',
            fill: 'currentColor'
          }
        }), [$inner]);
      }
    });
  
    /**
     * Icon component generator function
     *
     * @param {string} icon name (minus the leading `BIcon`)
     * @param {string} raw `innerHTML` for SVG
     * @return {VueComponent}
     */
  
    var makeIcon = function makeIcon(name, content) {
      // For performance reason we pre-compute some values, so that
      // they are not computed on each render of the icon component
      var iconName = "BIcon".concat(pascalCase(name));
      var iconNameClass = "bi-".concat(kebabCase(name));
      var svgContent = trim(content || ''); // Return the icon component definition
  
      return /*#__PURE__*/Vue.extend({
        name: iconName,
        functional: true,
        props: _objectSpread2({}, commonIconProps, {
          stacked: {
            type: Boolean,
            default: false
          }
        }),
        render: function render(h, _ref) {
          var data = _ref.data,
              props = _ref.props;
          return h(BVIconBase, a(data, {
            staticClass: iconNameClass,
            props: _objectSpread2({}, props, {
              content: svgContent
            })
          }));
        }
      });
    };
  
    // --- BEGIN AUTO-GENERATED FILE ---
  
    var BIconBlank = /*#__PURE__*/makeIcon('Blank', ''); // --- Bootstrap Icons ---
  
    var BIconCalendar = /*#__PURE__*/makeIcon('Calendar', '<path fill-rule="evenodd" d="M14 0H2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M6.5 7a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm-9 3a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm-9 3a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"/>'); // eslint-disable-next-line
  
    var BIconCalendarFill = /*#__PURE__*/makeIcon('CalendarFill', '<path d="M0 2a2 2 0 012-2h12a2 2 0 012 2H0z"/><path fill-rule="evenodd" d="M0 3h16v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3zm6.5 4a1 1 0 100-2 1 1 0 000 2zm4-1a1 1 0 11-2 0 1 1 0 012 0zm2 1a1 1 0 100-2 1 1 0 000 2zm-8 2a1 1 0 11-2 0 1 1 0 012 0zm2 1a1 1 0 100-2 1 1 0 000 2zm4-1a1 1 0 11-2 0 1 1 0 012 0zm2 1a1 1 0 100-2 1 1 0 000 2zm-8 2a1 1 0 11-2 0 1 1 0 012 0zm2 1a1 1 0 100-2 1 1 0 000 2zm4-1a1 1 0 11-2 0 1 1 0 012 0z" clip-rule="evenodd"/>'); // eslint-disable-next-line
  
    var BIconChevronDoubleLeft = /*#__PURE__*/makeIcon('ChevronDoubleLeft', '<path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 010 .708L2.707 8l5.647 5.646a.5.5 0 01-.708.708l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.708 0z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 010 .708L6.707 8l5.647 5.646a.5.5 0 01-.708.708l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.708 0z" clip-rule="evenodd"/>'); // eslint-disable-next-line
  
    var BIconChevronDown = /*#__PURE__*/makeIcon('ChevronDown', '<path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clip-rule="evenodd"/>'); // eslint-disable-next-line
  
    var BIconChevronLeft = /*#__PURE__*/makeIcon('ChevronLeft', '<path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 010 .708L5.707 8l5.647 5.646a.5.5 0 01-.708.708l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.708 0z" clip-rule="evenodd"/>'); // eslint-disable-next-line
  
    var BIconChevronUp = /*#__PURE__*/makeIcon('ChevronUp', '<path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 01.708 0l6 6a.5.5 0 01-.708.708L8 5.707l-5.646 5.647a.5.5 0 01-.708-.708l6-6z" clip-rule="evenodd"/>'); // eslint-disable-next-line
  
    var BIconCircleFill = /*#__PURE__*/makeIcon('CircleFill', '<circle cx="8" cy="8" r="8"/>'); // eslint-disable-next-line
  
    var BIconClock = /*#__PURE__*/makeIcon('Clock', '<path fill-rule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm8-7A8 8 0 110 8a8 8 0 0116 0z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M7.5 3a.5.5 0 01.5.5v5.21l3.248 1.856a.5.5 0 01-.496.868l-3.5-2A.5.5 0 017 9V3.5a.5.5 0 01.5-.5z" clip-rule="evenodd"/>'); // eslint-disable-next-line
  
    var BIconClockFill = /*#__PURE__*/makeIcon('ClockFill', '<path fill-rule="evenodd" d="M16 8A8 8 0 110 8a8 8 0 0116 0zM8 3.5a.5.5 0 00-1 0V9a.5.5 0 00.252.434l3.5 2a.5.5 0 00.496-.868L8 8.71V3.5z" clip-rule="evenodd"/>'); // eslint-disable-next-line
  
    var BIconDash = /*#__PURE__*/makeIcon('Dash', '<path fill-rule="evenodd" d="M3.5 8a.5.5 0 01.5-.5h8a.5.5 0 010 1H4a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>'); // eslint-disable-next-line
  
    var BIconPersonFill = /*#__PURE__*/makeIcon('PersonFill', '<path fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>'); // eslint-disable-next-line
  
    var BIconPlus = /*#__PURE__*/makeIcon('Plus', '<path fill-rule="evenodd" d="M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z" clip-rule="evenodd"/>'); // eslint-disable-next-line
     // --- END AUTO-GENERATED FILE ---
  
    var RX_ICON_PREFIX = /^BIcon/; // Helper BIcon component
    // Requires the requested icon component to be installed
  
    var BIcon = /*#__PURE__*/Vue.extend({
      name: 'BIcon',
      functional: true,
      props: _objectSpread2({
        icon: {
          type: String,
          default: null
        }
      }, commonIconProps, {
        stacked: {
          type: Boolean,
          default: false
        }
      }),
      render: function render(h, _ref) {
        var data = _ref.data,
            props = _ref.props,
            parent = _ref.parent;
        var icon = pascalCase(trim(props.icon || '')).replace(RX_ICON_PREFIX, '');
        var iconName = "BIcon".concat(icon); // If parent context exists, we check to see if the icon has been registered
        // Either locally in the parent component, or globally at the `$root` level
        // If not registered, we render a blank icon
  
        var components = ((parent || {}).$options || {}).components;
        var componentRefOrName = icon && components ? components[iconName] || BIconBlank : icon ? iconName : BIconBlank;
        return h(componentRefOrName, a(data, {
          props: _objectSpread2({}, props, {
            icon: null
          })
        }));
      }
    });
  
    var NAME$4 = 'BAvatar';
    var RX_NUMBER = /^[0-9]*\.?[0-9]+$/;
    var DEFAULT_SIZES = {
      sm: '1.5em',
      md: '2.5em',
      lg: '3.5em'
    }; // --- Props ---
  
    var linkProps$1 = {
      href: {
        type: String // default: null
  
      },
      to: {
        type: [String, Object] // default: null
  
      },
      append: {
        type: Boolean,
        default: false
      },
      replace: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      rel: {
        type: String // default: null
  
      },
      target: {
        type: String // default: null
  
      },
      activeClass: {
        type: String // default: null
  
      },
      exact: {
        type: Boolean,
        default: false
      },
      exactActiveClass: {
        type: String // default: null
  
      },
      noPrefetch: {
        type: Boolean,
        default: false
      }
    };
  
    var props$2 = _objectSpread2({
      src: {
        type: String // default: null
  
      },
      text: {
        type: String // default: null
  
      },
      icon: {
        type: String // default: null
  
      },
      variant: {
        type: String,
        default: function _default() {
          return getComponentConfig(NAME$4, 'variant');
        }
      },
      size: {
        type: [Number, String],
        default: null
      },
      square: {
        type: Boolean,
        default: false
      },
      rounded: {
        type: [Boolean, String],
        default: false
      },
      button: {
        type: Boolean,
        default: false
      },
      buttonType: {
        type: String,
        default: 'button'
      }
    }, linkProps$1, {
      ariaLabel: {
        type: String // default: null
  
      }
    }); // --- Utility methods ---
  
  
    var computeSize = function computeSize(value) {
      // Default to `md` size when `null`, or parse to
      // number when value is a float-like string
      value = value === null ? 'md' : isString(value) && RX_NUMBER.test(value) ? toFloat(value) : value; // Convert all numbers to pixel values
      // Handle default sizes when `sm`, `md` or `lg`
      // Or use value as is
  
      return isNumber(value) ? "".concat(value, "px") : DEFAULT_SIZES[value] || value;
    }; // --- Main component ---
    // @vue/component
  
  
    var BAvatar = /*#__PURE__*/Vue.extend({
      name: NAME$4,
      functional: true,
      props: props$2,
      render: function render(h, _ref) {
        var _class;
  
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;
        var isButton = props.button;
        var isBLink = !isButton && (props.href || props.to);
        var tag = isButton ? BButton : isBLink ? BLink : 'span';
        var variant = props.variant;
        var disabled = props.disabled;
        var type = props.buttonType;
        var square = props.square;
        var rounded = square ? false : props.rounded === '' ? true : props.rounded || 'circle';
        var size = computeSize(props.size);
        var $content = null;
  
        if (children) {
          // Default slot overrides props
          $content = children;
        } else if (props.icon) {
          $content = h(BIcon, {
            props: {
              icon: props.icon
            },
            attrs: {
              'aria-hidden': 'true'
            }
          });
        } else if (props.src) {
          $content = h('img', {
            attrs: {
              src: props.src
            }
          });
        } else if (props.text) {
          var fontSize = size ? "calc(".concat(size, " * 0.4)") : null;
          $content = h('span', {
            style: {
              fontSize: fontSize
            }
          }, props.text);
        } else {
          $content = h(BIconPersonFill, {
            attrs: {
              'aria-hidden': 'true'
            }
          });
        }
  
        var componentData = {
          staticClass: 'b-avatar',
          class: (_class = {}, _defineProperty(_class, "".concat(isButton ? 'btn' : 'badge', "-").concat(props.variant), !!props.variant), _defineProperty(_class, "rounded", rounded === true), _defineProperty(_class, 'rounded-0', square), _defineProperty(_class, "rounded-".concat(rounded), rounded && rounded !== true), _defineProperty(_class, "disabled", disabled), _class),
          style: {
            width: size,
            height: size
          },
          attrs: {
            'aria-label': props.ariaLabel || null
          },
          props: isButton ? {
            variant: variant,
            disabled: disabled,
            type: type
          } : isBLink ? pluckProps(linkProps$1, props) : {}
        };
        return h(tag, a(data, componentData), [$content]);
      }
    });
  
    var AvatarPlugin = /*#__PURE__*/pluginFactory({
      components: {
        BAvatar: BAvatar
      }
    });
  
    var NAME$5 = 'BBadge';
    var linkProps$2 = propsFactory();
    delete linkProps$2.href.default;
    delete linkProps$2.to.default;
    var props$3 = _objectSpread2({}, linkProps$2, {
      tag: {
        type: String,
        default: 'span'
      },
      variant: {
        type: String,
        default: function _default() {
          return getComponentConfig(NAME$5, 'variant');
        }
      },
      pill: {
        type: Boolean,
        default: false
      }
    }); // @vue/component
  
    var BBadge = /*#__PURE__*/Vue.extend({
      name: NAME$5,
      functional: true,
      props: props$3,
      render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;
        var isBLink = props.href || props.to;
        var tag = isBLink ? BLink : props.tag;
        var componentData = {
          staticClass: 'badge',
          class: [props.variant ? "badge-".concat(props.variant) : 'badge-secondary', {
            'badge-pill': props.pill,
            active: props.active,
            disabled: props.disabled
          }],
          props: isBLink ? pluckProps(linkProps$2, props) : {}
        };
        return h(tag, a(data, componentData), children);
      }
    });
  
    var BadgePlugin = /*#__PURE__*/pluginFactory({
      components: {
        BBadge: BBadge
      }
    });
  
    var stripTagsRegex = /(<([^>]+)>)/gi; // Removes any thing that looks like an HTML tag from the supplied string
  
    var stripTags = function stripTags() {
      var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      return String(text).replace(stripTagsRegex, '');
    }; // Generate a domProps object for either innerHTML, textContent or nothing
  
    var htmlOrText = function htmlOrText(innerHTML, textContent) {
      return innerHTML ? {
        innerHTML: innerHTML
      } : textContent ? {
        textContent: textContent
      } : {};
    };
  
    var props$4 = _objectSpread2({}, propsFactory(), {
      text: {
        type: String,
        default: null
      },
      html: {
        type: String,
        default: null
      },
      ariaCurrent: {
        type: String,
        default: 'location'
      }
    }); // @vue/component
  
    var BBreadcrumbLink = /*#__PURE__*/Vue.extend({
      name: 'BBreadcrumbLink',
      functional: true,
      props: props$4,
      render: function render(h, _ref) {
        var suppliedProps = _ref.props,
            data = _ref.data,
            children = _ref.children;
        var tag = suppliedProps.active ? 'span' : BLink;
        var componentData = {
          props: pluckProps(props$4, suppliedProps)
        };
  
        if (suppliedProps.active) {
          componentData.attrs = {
            'aria-current': suppliedProps.ariaCurrent
          };
        }
  
        if (!children) {
          componentData.domProps = htmlOrText(suppliedProps.html, suppliedProps.text);
        }
  
        return h(tag, a(data, componentData), children);
      }
    });
  
    var BBreadcrumbItem = /*#__PURE__*/Vue.extend({
      name: 'BBreadcrumbItem',
      functional: true,
      props: props$4,
      render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;
        return h('li', a(data, {
          staticClass: 'breadcrumb-item',
          class: {
            active: props.active
          }
        }), [h(BBreadcrumbLink, {
          props: props
        }, children)]);
      }
    });
  
    var props$5 = {
      items: {
        type: Array,
        default: null
      }
    }; // @vue/component
  
    var BBreadcrumb = /*#__PURE__*/Vue.extend({
      name: 'BBreadcrumb',
      functional: true,
      props: props$5,
      render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;
        var childNodes = children; // Build child nodes from items if given.
  
        if (isArray(props.items)) {
          var activeDefined = false;
          childNodes = props.items.map(function (item, idx) {
            if (!isObject(item)) {
              item = {
                text: toString$1(item)
              };
            } // Copy the value here so we can normalize it.
  
  
            var active = item.active;
  
            if (active) {
              activeDefined = true;
            }
  
            if (!active && !activeDefined) {
              // Auto-detect active by position in list.
              active = idx + 1 === props.items.length;
            }
  
            return h(BBreadcrumbItem, {
              props: _objectSpread2({}, item, {
                active: active
              })
            });
          });
        }
  
        return h('ol', a(data, {
          staticClass: 'breadcrumb'
        }), childNodes);
      }
    });
  
    var BreadcrumbPlugin = /*#__PURE__*/pluginFactory({
      components: {
        BBreadcrumb: BBreadcrumb,
        BBreadcrumbItem: BBreadcrumbItem,
        BBreadcrumbLink: BBreadcrumbLink
      }
    });
  
    var ButtonPlugin = /*#__PURE__*/pluginFactory({
      components: {
        BButton: BButton,
        BBtn: BButton,
        BButtonClose: BButtonClose,
        BBtnClose: BButtonClose
      }
    });
  
    var NAME$6 = 'BButtonGroup';
    var props$6 = {
      vertical: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: function _default() {
          return getComponentConfig('BButton', 'size');
        }
      },
      tag: {
        type: String,
        default: 'div'
      },
      ariaRole: {
        type: String,
        default: 'group'
      }
    }; // @vue/component
  
    var BButtonGroup = /*#__PURE__*/Vue.extend({
      name: NAME$6,
      functional: true,
      props: props$6,
      render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;
        return h(props.tag, a(data, {
          class: _defineProperty({
            'btn-group': !props.vertical,
            'btn-group-vertical': props.vertical
          }, "btn-group-".concat(props.size), props.size),
          attrs: {
            role: props.ariaRole
          }
        }), children);
      }
    });
  
    var ButtonGroupPlugin = /*#__PURE__*/pluginFactory({
      components: {
        BButtonGroup: BButtonGroup,
        BBtnGroup: BButtonGroup
      }
    });
  
    var ITEM_SELECTOR = ['.btn:not(.disabled):not([disabled]):not(.dropdown-item)', '.form-control:not(.disabled):not([disabled])', 'select:not(.disabled):not([disabled])', 'input[type="checkbox"]:not(.disabled)', 'input[type="radio"]:not(.disabled)'].join(','); // @vue/component
  
    var BButtonToolbar = /*#__PURE__*/Vue.extend({
      name: 'BButtonToolbar',
      mixins: [normalizeSlotMixin],
      props: {
        justify: {
          type: Boolean,
          default: false
        },
        keyNav: {
          type: Boolean,
          default: false
        }
      },
      mounted: function mounted() {
        if (this.keyNav) {
          // Pre-set the tabindexes if the markup does not include tabindex="-1" on the toolbar items
          this.getItems();
        }
      },
      methods: {
        onFocusin: function onFocusin(evt) {
          if (evt.target === this.$el) {
            evt.preventDefault();
            evt.stopPropagation();
            this.focusFirst(evt);
          }
        },
        stop: function stop(evt) {
          evt.preventDefault();
          evt.stopPropagation();
        },
        onKeydown: function onKeydown(evt) {
          if (!this.keyNav) {
            /* istanbul ignore next: should never happen */
            return;
          }
  
          var key = evt.keyCode;
          var shift = evt.shiftKey;
  
          if (key === KEY_CODES.UP || key === KEY_CODES.LEFT) {
            this.stop(evt);
            shift ? this.focusFirst(evt) : this.focusPrev(evt);
          } else if (key === KEY_CODES.DOWN || key === KEY_CODES.RIGHT) {
            this.stop(evt);
            shift ? this.focusLast(evt) : this.focusNext(evt);
          }
        },
        setItemFocus: function setItemFocus(item) {
          item && item.focus && item.focus();
        },
        focusFirst: function focusFirst() {
          var items = this.getItems();
          this.setItemFocus(items[0]);
        },
        focusPrev: function focusPrev(evt) {
          var items = this.getItems();
          var index = items.indexOf(evt.target);
  
          if (index > -1) {
            items = items.slice(0, index).reverse();
            this.setItemFocus(items[0]);
          }
        },
        focusNext: function focusNext(evt) {
          var items = this.getItems();
          var index = items.indexOf(evt.target);
  
          if (index > -1) {
            items = items.slice(index + 1);
            this.setItemFocus(items[0]);
          }
        },
        focusLast: function focusLast() {
          var items = this.getItems().reverse();
          this.setItemFocus(items[0]);
        },
        getItems: function getItems() {
          var items = selectAll(ITEM_SELECTOR, this.$el);
          items.forEach(function (item) {
            // Ensure tabfocus is -1 on any new elements
            item.tabIndex = -1;
          });
          return items.filter(function (el) {
            return isVisible(el);
          });
        }
      },
      render: function render(h) {
        return h('div', {
          staticClass: 'btn-toolbar',
          class: {
            'justify-content-between': this.justify
          },
          attrs: {
            role: 'toolbar',
            tabindex: this.keyNav ? '0' : null
          },
          on: this.keyNav ? {
            focusin: this.onFocusin,
            keydown: this.onKeydown
          } : {}
        }, [this.normalizeSlot('default')]);
      }
    });
  
    var ButtonToolbarPlugin = /*#__PURE__*/pluginFactory({
      components: {
        BButtonToolbar: BButtonToolbar,
        BBtnToolbar: BButtonToolbar
      }
    });
  
    // Handles when arrays are "sparse" (array.every(...) doesn't handle sparse)
  
    var compareArrays = function compareArrays(a, b) {
      if (a.length !== b.length) {
        return false;
      }
  
      var equal = true;
  
      for (var i = 0; equal && i < a.length; i++) {
        equal = looseEqual(a[i], b[i]);
      }
  
      return equal;
    };
    /**
     * Check if two values are loosely equal - that is,
     * if they are plain objects, do they have the same shape?
     * Returns boolean true or false
     */
  
  
    var looseEqual = function looseEqual(a, b) {
      if (a === b) {
        return true;
      }
  
      var aValidType = isDate(a);
      var bValidType = isDate(b);
  
      if (aValidType || bValidType) {
        return aValidType && bValidType ? a.getTime() === b.getTime() : false;
      }
  
      aValidType = isArray(a);
      bValidType = isArray(b);
  
      if (aValidType || bValidType) {
        return aValidType && bValidType ? compareArrays(a, b) : false;
      }
  
      aValidType = isObject(a);
      bValidType = isObject(b);
  
      if (aValidType || bValidType) {
        /* istanbul ignore if: this if will probably never be called */
        if (!aValidType || !bValidType) {
          return false;
        }
  
        var aKeysCount = keys(a).length;
        var bKeysCount = keys(b).length;
  
        if (aKeysCount !== bKeysCount) {
          return false;
        }
  
        for (var key in a) {
          // eslint-disable-next-line no-prototype-builtins
          var aHasKey = a.hasOwnProperty(key); // eslint-disable-next-line no-prototype-builtins
  
          var bHasKey = b.hasOwnProperty(key);
  
          if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
            return false;
          }
        }
      }
  
      return String(a) === String(b);
    };
  
    var RX_DATE = /^\d+-\d+-\d+$/; // --- Date utility methods ---
    // Create or clone a date (`new Date(...)` shortcut)
  
    var createDate = function createDate() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
  
      return _construct(Date, args);
    }; // Parse a date sting, or Date object, into a Date object (with no time information)
  
    var parseYMD = function parseYMD(date) {
      if (isString(date) && RX_DATE.test(date.trim())) {
        var _date$split$map = date.split('-').map(toInteger),
            _date$split$map2 = _slicedToArray(_date$split$map, 3),
            year = _date$split$map2[0],
            month = _date$split$map2[1],
            day = _date$split$map2[2];
  
        return createDate(year, month - 1, day);
      } else if (isDate(date)) {
        return createDate(date.getFullYear(), date.getMonth(), date.getDate());
      }
  
      return null;
    }; // Format a date object as `YYYY-MM-DD` format
  
    var formatYMD = function formatYMD(date) {
      date = parseYMD(date);
  
      if (!date) {
        return null;
      }
  
      var year = date.getFullYear();
      var month = "0".concat(date.getMonth() + 1).slice(-2);
      var day = "0".concat(date.getDate()).slice(-2);
      return "".concat(year, "-").concat(month, "-").concat(day);
    }; // Given a locale (or locales), resolve the browser available locale
  
    var resolveLocale = function resolveLocale(locales)
    /* istanbul ignore next */
    {
      var calendar = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'gregory';
      locales = concat(locales).filter(identity);
      var fmt = new Intl.DateTimeFormat(locales, {
        calendar: calendar
      });
      return fmt.resolvedOptions().locale;
    }; // Create a `Intl.DateTimeFormat` formatter function
  
    var createDateFormatter = function createDateFormatter(locale, options)
    /* istanbul ignore next */
    {
      var dtf = new Intl.DateTimeFormat(locale, options);
      return dtf.format;
    }; // Determine if two dates are the same date (ignoring time portion)
  
    var datesEqual = function datesEqual(date1, date2) {
      // Returns true of the date portion of two date objects are equal
      // We don't compare the time portion
      return formatYMD(date1) === formatYMD(date2);
    }; // --- Date "math" utility methods (for BCalendar component mainly) ---
  
    var firstDateOfMonth = function firstDateOfMonth(date) {
      date = createDate(date);
      date.setDate(1);
      return date;
    };
    var lastDateOfMonth = function lastDateOfMonth(date) {
      date = createDate(date);
      date.setMonth(date.getMonth() + 1);
      date.setDate(0);
      return date;
    };
    var oneMonthAgo = function oneMonthAgo(date) {
      date = createDate(date);
      var month = date.getMonth();
      date.setMonth(month - 1);
  
      if (date.getMonth() === month) {
        date.setDate(0);
      }
  
      return date;
    };
    var oneMonthAhead = function oneMonthAhead(date) {
      date = createDate(date);
      var month = date.getMonth();
      date.setMonth(month + 1);
  
      if (date.getMonth() === (month + 2) % 12) {
        date.setDate(0);
      }
  
      return date;
    };
    var oneYearAgo = function oneYearAgo(date) {
      date = createDate(date);
      var month = date.getMonth();
      date.setMonth(month - 12);
  
      if (date.getMonth() !== month) {
        date.setDate(0);
      }
  
      return date;
    };
    var oneYearAhead = function oneYearAhead(date) {
      date = createDate(date);
      var month = date.getMonth();
      date.setMonth(month + 12);
  
      if (date.getMonth() !== month) {
        date.setDate(0);
      }
  
      return date;
    }; // Helper function to constrain a date between two values
    // Always returns a `Date` object or `null` if no date passed
  
    var constrainDate = function constrainDate(date) {
      var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      // Ensure values are `Date` objects (or `null`)
      date = parseYMD(date);
      min = parseYMD(min) || date;
      max = parseYMD(max) || date; // Return a new `Date` object (or `null`)
  
      return date ? date < min ? min : date > max ? max : date : null;
    };
  
    // Localization utilities
  
    var RTL_LANGS = ['ar', 'az', 'ckb', 'fa', 'he', 'ks', 'lrc', 'mzn', 'ps', 'sd', 'te', 'ug', 'ur', 'yi'].map(function (locale) {
      return locale.toLowerCase();
    }); // Precompile RegExpr
  
    var RX_STRIP_MODS = /-u-.+/; // Returns true if the locale is RTL
  
    var isLocaleRTL = function isLocaleRTL(locale) {
      // Determines if the locale is RTL (only single locale supported)
      var parts = toString$1(locale).toLowerCase().replace(RX_STRIP_MODS, '').split('-');
      var locale1 = parts.slice(0, 2).join('-');
      var locale2 = parts[0];
      return arrayIncludes(RTL_LANGS, locale1) || arrayIncludes(RTL_LANGS, locale2);
    };
  
    /*
     * SSR Safe Client Side ID attribute generation
     * id's can only be generated client side, after mount.
     * this._uid is not synched between server and client.
     */
    // @vue/component
    var idMixin = {
      props: {
        id: {
          type: String,
          default: null
        }
      },
      data: function data() {
        return {
          localId_: null
        };
      },
      computed: {
        safeId: function safeId() {
          // Computed property that returns a dynamic function for creating the ID.
          // Reacts to changes in both .id and .localId_ And regens a new function
          var id = this.id || this.localId_; // We return a function that accepts an optional suffix string
          // So this computed prop looks and works like a method!!!
          // But benefits from Vue's Computed prop caching
  
          var fn = function fn(suffix) {
            if (!id) {
              return null;
            }
  
            suffix = String(suffix || '').replace(/\s+/g, '_');
            return suffix ? id + '_' + suffix : id;
          };
  
          return fn;
        }
      },
      mounted: function mounted() {
        var _this = this;
  
        // mounted only occurs client side
        this.$nextTick(function () {
          // Update dom with auto ID after dom loaded to prevent
          // SSR hydration errors.
          _this.localId_ = "__BVID__".concat(_this._uid);
        });
      }
    };
  
    var NAME$7 = 'BCalendar'; // Key Codes
  
    var UP = KEY_CODES.UP,
        DOWN = KEY_CODES.DOWN,
        LEFT = KEY_CODES.LEFT,
        RIGHT = KEY_CODES.RIGHT,
        PAGEUP = KEY_CODES.PAGEUP,
        PAGEDOWN = KEY_CODES.PAGEDOWN,
        HOME = KEY_CODES.HOME,
        END = KEY_CODES.END,
        ENTER = KEY_CODES.ENTER,
        SPACE = KEY_CODES.SPACE; // --- BCalendar component ---
    // @vue/component
  
    var BCalendar = Vue.extend({
      name: NAME$7,
      mixins: [idMixin, normalizeSlotMixin],
      model: {
        // Even though this is the default that Vue assumes, we need
        // to add it for the docs to reflect that this is the model
        // And also for some validation libraries to work
        prop: 'value',
        event: 'input'
      },
      props: {
        value: {
          type: [String, Date] // default: null
  
        },
        valueAsDate: {
          // Always return the `v-model` value as a date object
          type: Boolean,
          default: false
        },
        initialDate: {
          // This specifies the calendar year/month/day that will be shown when
          // first opening the datepicker if no v-model value is provided
          // Default is the current date (or `min`/`max`)
          type: [String, Date],
          default: null
        },
        disabled: {
          type: Boolean,
          default: false
        },
        readonly: {
          type: Boolean,
          default: false
        },
        min: {
          type: [String, Date] // default: null
  
        },
        max: {
          type: [String, Date] // default: null
  
        },
        dateDisabledFn: {
          type: Function // default: null
  
        },
        startWeekday: {
          // `0` (Sunday), `1` (Monday), ... `6` (Saturday)
          // Day of week to start calendar on
          type: [Number, String],
          default: 0
        },
        locale: {
          // Locale(s) to use
          // Default is to use page/browser default setting
          type: [String, Array] // default: null
  
        },
        direction: {
          // 'ltr', 'rtl', or `null` (for auto detect)
          type: String // default: null
  
        },
        selectedVariant: {
          // Variant color to use for the selected date
          type: String,
          default: 'primary'
        },
        todayVariant: {
          // Variant color to use for today's date (defaults to `variant`)
          type: String // default: null
  
        },
        noHighlightToday: {
          // Disable highlighting today's date
          type: Boolean,
          default: false
        },
        dateInfoFn: {
          // Function to set a class of (classes) on the date cell
          // if passed a string or an array
          // TODO:
          //   If the function returns an object, look for class prop for classes,
          //   and other props for handling events/details/descriptions
          type: Function // default: null
  
        },
        width: {
          // Has no effect if prop `block` is set
          type: String,
          default: '270px'
        },
        block: {
          // Makes calendar the full width of its parent container
          type: Boolean,
          default: false
        },
        hideHeader: {
          // When true makes the selected date header `sr-only`
          type: Boolean,
          default: false
        },
        hidden: {
          // When `true`, renders a comment node, but keeps the component instance active
          // Mainly for <b-form-date>, so that we can get the component's value and locale
          // But we might just use separate date formatters, using the resolved locale
          // (adjusted for the gregorian calendar)
          type: Boolean,
          default: false
        },
        ariaControls: {
          type: String // default: null
  
        },
        roleDescription: {
          type: String // default: null
  
        },
        // Labels for buttons and keyboard shortcuts
        labelPrevYear: {
          type: String,
          default: function _default() {
            return getComponentConfig(NAME$7, 'labelPrevYear');
          }
        },
        labelPrevMonth: {
          type: String,
          default: function _default() {
            return getComponentConfig(NAME$7, 'labelPrevMonth');
          }
        },
        labelCurrentMonth: {
          type: String,
          default: function _default() {
            return getComponentConfig(NAME$7, 'labelCurrentMonth');
          }
        },
        labelNextMonth: {
          type: String,
          default: function _default() {
            return getComponentConfig(NAME$7, 'labelNextMonth');
          }
        },
        labelNextYear: {
          type: String,
          default: function _default() {
            return getComponentConfig(NAME$7, 'labelNextYear');
          }
        },
        labelToday: {
          type: String,
          default: function _default() {
            return getComponentConfig(NAME$7, 'labelToday');
          }
        },
        labelSelected: {
          type: String,
          default: function _default() {
            return getComponentConfig(NAME$7, 'labelSelected');
          }
        },
        labelNoDateSelected: {
          type: String,
          default: function _default() {
            return getComponentConfig(NAME$7, 'labelNoDateSelected');
          }
        },
        labelCalendar: {
          type: String,
          default: function _default() {
            return getComponentConfig(NAME$7, 'labelCalendar');
          }
        },
        labelNav: {
          type: String,
          default: function _default() {
            return getComponentConfig(NAME$7, 'labelNav');
          }
        },
        labelHelp: {
          type: String,
          default: function _default() {
            return getComponentConfig(NAME$7, 'labelHelp');
          }
        },
        dateFormatOptions: {
          // `Intl.DateTimeFormat` object
          type: Object,
          default: function _default() {
            return {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              weekday: 'long'
            };
          }
        }
      },
      data: function data() {
        var selected = formatYMD(this.value) || '';
        return {
          // Selected date
          selectedYMD: selected,
          // Date in calendar grid that has `tabindex` of `0`
          activeYMD: selected || formatYMD(constrainDate(this.initialDate || this.getToday()), this.min, this.max),
          // Will be true if the calendar grid has/contains focus
          gridHasFocus: false,
          // Flag to enable the `aria-live` region(s) after mount
          // to prevent screen reader "outbursts" when mounting
          isLive: false
        };
      },
      computed: {
        // TODO: Use computed props to convert `YYYY-MM-DD` to `Date` object
        selectedDate: function selectedDate() {
          // Selected as a `Date` object
          return parseYMD(this.selectedYMD);
        },
        activeDate: function activeDate() {
          // Active as a `Date` object
          return parseYMD(this.activeYMD);
        },
        computedMin: function computedMin() {
          return parseYMD(this.min);
        },
        computedMax: function computedMax() {
          return parseYMD(this.max);
        },
        computedWeekStarts: function computedWeekStarts() {
          // `startWeekday` is a prop (constrained to `0` through `6`)
          return Math.max(toInteger(this.startWeekday) || 0, 0) % 7;
        },
        computedLocale: function computedLocale() {
          // Returns the resolved locale used by the calendar
          return resolveLocale(concat(this.locale).filter(identity), 'gregory');
        },
        calendarLocale: function calendarLocale() {
          // This locale enforces the gregorian calendar (for use in formatter functions)
          // Needed because IE 11 resolves `ar-IR` as islamic-civil calendar
          // and IE 11 (and some other browsers) do not support the `calendar` option
          // And we currently only support the gregorian calendar
          var fmt = new Intl.DateTimeFormat(this.computedLocale, {
            calendar: 'gregory'
          });
          var calendar = fmt.resolvedOptions().calendar;
          var locale = fmt.resolvedOptions().locale;
          /* istanbul ignore if: mainly for IE 11 and a few other browsers, hard to test in JSDOM */
  
          if (calendar !== 'gregory') {
            // Ensure the locale requests the gregorian calendar
            // Mainly for IE 11, and currently we can't handle non-gregorian calendars
            // TODO: Should we always return this value?
            locale = locale.replace(/-u-.+$/i, '').concat('-u-ca-gregory');
          }
  
          return locale;
        },
        calendarYear: function calendarYear() {
          return this.activeDate.getFullYear();
        },
        calendarMonth: function calendarMonth() {
          return this.activeDate.getMonth();
        },
        calendarFirstDay: function calendarFirstDay() {
          return createDate(this.calendarYear, this.calendarMonth, 1);
        },
        calendarDaysInMonth: function calendarDaysInMonth() {
          // We create a new date as to not mutate the original
          var date = createDate(this.calendarFirstDay);
          date.setMonth(date.getMonth() + 1, 0);
          return date.getDate();
        },
        computedVariant: function computedVariant() {
          return "btn-".concat(this.selectedVariant || 'primary');
        },
        computedTodayVariant: function computedTodayVariant() {
          return "btn-outline-".concat(this.todayVariant || this.selectedVariant || 'primary');
        },
        isRTL: function isRTL() {
          // `true` if the language requested is RTL
          var dir = toString$1(this.direction).toLowerCase();
  
          if (dir === 'rtl') {
            /* istanbul ignore next */
            return true;
          } else if (dir === 'ltr') {
            /* istanbul ignore next */
            return false;
          }
  
          return isLocaleRTL(this.computedLocale);
        },
        context: function context() {
          var selectedYMD = this.selectedYMD;
          var selectedDate = parseYMD(selectedYMD);
          var activeYMD = this.activeYMD;
          var activeDate = parseYMD(activeYMD);
          return {
            // The current value of the `v-model`
            selectedYMD: selectedYMD,
            selectedDate: selectedDate,
            selectedFormatted: selectedDate ? this.formatDateString(selectedDate) : this.labelNoDateSelected,
            // Which date cell is considered active due to navigation
            activeYMD: activeYMD,
            activeDate: activeDate,
            activeFormatted: activeDate ? this.formatDateString(activeDate) : '',
            // `true` if the date is disabled (when using keyboard navigation)
            disabled: this.dateDisabled(activeDate),
            // Locales used in formatting dates
            locale: this.computedLocale,
            calendarLocale: this.calendarLocale,
            rtl: this.isRTL
          };
        },
        // Computed props that return a function reference
        dateOutOfRange: function dateOutOfRange() {
          // Check wether a date is within the min/max range
          // returns a new function ref if the pops change
          // We do this as we need to trigger the calendar computed prop
          // to update when these props update
          var min = this.computedMin;
          var max = this.computedMax;
          return function (date) {
            // Handle both `YYYY-MM-DD` and `Date` objects
            date = parseYMD(date);
            return min && date < min || max && date > max;
          };
        },
        dateDisabled: function dateDisabled() {
          // Returns a function for validating if a date is within range
          // We grab this variables first to ensure a new function ref
          // is generated when the props value changes
          // We do this as we need to trigger the calendar computed prop
          // to update when these props update
          var rangeFn = this.dateOutOfRange;
          var disabledFn = isFunction(this.dateDisabledFn) ? this.dateDisabledFn : function () {
            return false;
          }; // Return the function ref
  
          return function (date) {
            // Handle both `YYYY-MM-DD` and `Date` objects
            date = parseYMD(date);
            var ymd = formatYMD(date);
            return !!(rangeFn(date) || disabledFn(ymd, date));
          };
        },
        // Computed props that return date formatter functions
        formatDateString: function formatDateString() {
          // Returns a date formatter function
          return createDateFormatter(this.calendarLocale, _objectSpread2({
            // Ensure we have year, month, day shown for screen readers/ARIA
            // If users really want to leave one of these out, they can
            // pass `undefined` for the property value
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
          }, this.dateFormatOptions, {
            // Ensure hours/minutes/seconds are not shown
            // As we do not support the time portion (yet)
            hour: undefined,
            minute: undefined,
            second: undefined,
            // Ensure calendar is gregorian
            calendar: 'gregory'
          }));
        },
        formatYearMonth: function formatYearMonth() {
          // Returns a date formatter function
          return createDateFormatter(this.calendarLocale, {
            year: 'numeric',
            month: 'long',
            calendar: 'gregory'
          });
        },
        formatWeekdayName: function formatWeekdayName() {
          return createDateFormatter(this.calendarLocale, {
            weekday: 'long',
            calendar: 'gregory'
          });
        },
        formatWeekdayNameShort: function formatWeekdayNameShort() {
          // Used as the header cells
          return createDateFormatter(this.calendarLocale, {
            weekday: 'short',
            calendar: 'gregory'
          });
        },
        formatDay: function formatDay() {
          return createDateFormatter(this.calendarLocale, {
            day: 'numeric',
            calendar: 'gregory'
          });
        },
        // Disabled states for the nav buttons
        prevYearDisabled: function prevYearDisabled() {
          var min = this.computedMin;
          return this.disabled || min && lastDateOfMonth(oneYearAgo(this.activeDate)) < min;
        },
        prevMonthDisabled: function prevMonthDisabled() {
          var min = this.computedMin;
          return this.disabled || min && lastDateOfMonth(oneMonthAgo(this.activeDate)) < min;
        },
        thisMonthDisabled: function thisMonthDisabled() {
          // TODO: We could/should check if today is out of range
          return this.disabled;
        },
        nextMonthDisabled: function nextMonthDisabled() {
          var max = this.computedMax;
          return this.disabled || max && firstDateOfMonth(oneMonthAhead(this.activeDate)) > max;
        },
        nextYearDisabled: function nextYearDisabled() {
          var max = this.computedMax;
          return this.disabled || max && firstDateOfMonth(oneYearAhead(this.activeDate)) > max;
        },
        // Calendar generation
        calendar: function calendar() {
          var matrix = [];
          var firstDay = this.calendarFirstDay;
          var calendarYear = firstDay.getFullYear();
          var calendarMonth = firstDay.getMonth();
          var daysInMonth = this.calendarDaysInMonth;
          var startIndex = firstDay.getDay(); // `0`..`6`
  
          var weekOffset = (this.computedWeekStarts > startIndex ? 7 : 0) - this.computedWeekStarts; // TODO: Change `dateInfoFn` to handle events and notes as well as classes
  
          var dateInfoFn = isFunction(this.dateInfoFn) ? this.dateInfoFn : function () {
            return {};
          }; // Build the calendar matrix
  
          var currentDay = 0 - weekOffset - startIndex;
  
          for (var week = 0; week < 6 && currentDay < daysInMonth; week++) {
            // For each week
            matrix[week] = []; // The following could be a map function
  
            for (var j = 0; j < 7; j++) {
              // For each day in week
              currentDay++;
              var date = createDate(calendarYear, calendarMonth, currentDay);
              var month = date.getMonth();
              var dayYMD = formatYMD(date);
              var dayDisabled = this.dateDisabled(date); // TODO: This could be a normalizer method
  
              var dateInfo = dateInfoFn(dayYMD, parseYMD(dayYMD));
              dateInfo = isString(dateInfo) || isArray(dateInfo) ? {
                class: dateInfo
              } : isPlainObject(dateInfo) ? _objectSpread2({
                class: ''
              }, dateInfo) : {
                class: ''
              };
              matrix[week].push({
                ymd: dayYMD,
                // Cell content
                day: this.formatDay(date),
                label: this.formatDateString(date),
                // Flags for styling
                isThisMonth: month === calendarMonth,
                isDisabled: dayDisabled,
                // TODO: Handle other dateInfo properties such as notes/events
                info: dateInfo
              });
            }
          }
  
          return matrix;
        },
        calendarHeadings: function calendarHeadings() {
          var _this = this;
  
          return this.calendar[0].map(function (d) {
            return {
              text: _this.formatWeekdayNameShort(parseYMD(d.ymd)),
              label: _this.formatWeekdayName(parseYMD(d.ymd))
            };
          });
        }
      },
      watch: {
        value: function value(newVal, oldVal) {
          var selected = formatYMD(newVal) || '';
          var old = formatYMD(oldVal) || '';
  
          if (!datesEqual(selected, old)) {
            this.activeYMD = selected || this.activeYMD;
            this.selectedYMD = selected;
          }
        },
        selectedYMD: function selectedYMD(newYMD, oldYMD) {
          // TODO:
          //   Should we compare to `formatYMD(this.value)` and emit
          //   only if they are different?
          if (newYMD !== oldYMD) {
            this.$emit('input', this.valueAsDate ? parseYMD(newYMD) || null : newYMD || '');
          }
        },
        context: function context(newVal, oldVal) {
          if (!looseEqual(newVal, oldVal)) {
            this.$emit('context', newVal);
          }
        },
        hidden: function hidden(newVal) {
          // Reset the active focused day when hidden
          this.activeYMD = this.selectedYMD || formatYMD(this.value || this.constrainDate(this.initialDate || this.getToday())); // Enable/disable the live regions
  
          this.setLive(!newVal);
        }
      },
      created: function created() {
        var _this2 = this;
  
        this.$nextTick(function () {
          _this2.$emit('context', _this2.context);
        });
      },
      mounted: function mounted() {
        this.setLive(true);
      },
      activated: function activated()
      /* istanbul ignore next */
      {
        this.setLive(true);
      },
      deactivated: function deactivated()
      /* istanbul ignore next */
      {
        this.setLive(false);
      },
      beforeDestroy: function beforeDestroy() {
        this.setLive(false);
      },
      methods: {
        // Public method(s)
        focus: function focus() {
          if (!this.disabled) {
            try {
              this.$refs.grid.focus();
            } catch (_unused) {}
          }
        },
        blur: function blur() {
          try {
            this.$refs.grid.blur();
          } catch (_unused2) {}
        },
        // Private methods
        setLive: function setLive(on) {
          var _this3 = this;
  
          if (on) {
            this.$nextTick(function () {
              requestAF(function () {
                _this3.isLive = true;
              });
            });
          } else {
            this.isLive = false;
          }
        },
        getToday: function getToday() {
          return parseYMD(createDate());
        },
        constrainDate: function constrainDate$1(date) {
          // Constrains a date between min and max
          // returns a new `Date` object instance
          return constrainDate(date, this.computedMin, this.computedMax);
        },
        emitSelected: function emitSelected(date) {
          var _this4 = this;
  
          // Performed in a `$nextTick()` to (probably) ensure
          // the input event has emitted first
          this.$nextTick(function () {
            _this4.$emit('selected', formatYMD(date) || '', parseYMD(date) || null);
          });
        },
        // Event handlers
        setGridFocusFlag: function setGridFocusFlag(evt) {
          // Sets the gridHasFocus flag to make date "button" look focused
          this.gridHasFocus = !this.disabled && evt.type === 'focus';
        },
        onKeydownWrapper: function onKeydownWrapper(evt) {
          // Calendar keyboard navigation
          // Handles PAGEUP/PAGEDOWN/END/HOME/LEFT/UP/RIGHT/DOWN
          // Focuses grid after updating
          var keyCode = evt.keyCode;
          var altKey = evt.altKey;
  
          if (!arrayIncludes([PAGEUP, PAGEDOWN, END, HOME, LEFT, UP, RIGHT, DOWN], keyCode)) {
            /* istanbul ignore next */
            return;
          }
  
          evt.preventDefault();
          evt.stopPropagation();
          var activeDate = createDate(this.activeDate);
          var checkDate = createDate(this.activeDate);
          var day = activeDate.getDate();
          var constrainedToday = this.constrainDate(this.getToday());
          var isRTL = this.isRTL;
  
          if (keyCode === PAGEUP) {
            // PAGEUP - Previous month/year
            activeDate = (altKey ? oneYearAgo : oneMonthAgo)(activeDate); // We check the first day of month to be in rage
  
            checkDate = createDate(activeDate);
            checkDate.setDate(1);
          } else if (keyCode === PAGEDOWN) {
            // PAGEDOWN - Next month/year
            activeDate = (altKey ? oneYearAhead : oneMonthAhead)(activeDate); // We check the last day of month to be in rage
  
            checkDate = createDate(activeDate);
            checkDate.setMonth(checkDate.getMonth() + 1);
            checkDate.setDate(0);
          } else if (keyCode === LEFT) {
            // LEFT - Previous day (or next day for RTL)
            activeDate.setDate(day + (isRTL ? 1 : -1));
            checkDate = activeDate;
          } else if (keyCode === RIGHT) {
            // RIGHT - Next day (or previous day for RTL)
            activeDate.setDate(day + (isRTL ? -1 : 1));
            checkDate = activeDate;
          } else if (keyCode === UP) {
            // UP - Previous week
            activeDate.setDate(day - 7);
            checkDate = activeDate;
          } else if (keyCode === DOWN) {
            // DOWN - Next week
            activeDate.setDate(day + 7);
            checkDate = activeDate;
          } else if (keyCode === HOME) {
            // HOME - Today
            activeDate = constrainedToday;
            checkDate = activeDate;
          } else if (keyCode === END) {
            // END - Selected date, or today if no selected date
            activeDate = parseYMD(this.selectedDate) || constrainedToday;
            checkDate = activeDate;
          }
  
          if (!this.dateOutOfRange(checkDate) && !datesEqual(activeDate, this.activeDate)) {
            // We only jump to date if within min/max
            // We don't check for individual disabled dates though (via user function)
            this.activeYMD = formatYMD(activeDate);
          } // Ensure grid is focused
  
  
          this.focus();
        },
        onKeydownGrid: function onKeydownGrid(evt) {
          // Pressing enter/space on grid to select active date
          var keyCode = evt.keyCode;
          var activeDate = this.activeDate;
  
          if (keyCode === ENTER || keyCode === SPACE) {
            evt.preventDefault();
            evt.stopPropagation();
  
            if (!this.disabled && !this.readonly && !this.dateDisabled(activeDate)) {
              this.selectedYMD = formatYMD(activeDate);
              this.emitSelected(activeDate);
            } // Ensure grid is focused
  
  
            this.focus();
          }
        },
        onClickDay: function onClickDay(day) {
          // Clicking on a date "button" to select it
          var selectedDate = this.selectedDate;
          var activeDate = this.activeDate;
          var clickedDate = parseYMD(day.ymd);
  
          if (!this.disabled && !day.isDisabled && !this.dateDisabled(clickedDate)) {
            if (!this.readonly) {
              // If readonly mode, we don't set the selected date, just the active date
              // If the clicked date is equal to the already selected date, we don't update the model
              this.selectedYMD = formatYMD(datesEqual(clickedDate, selectedDate) ? selectedDate : clickedDate);
              this.emitSelected(clickedDate);
            }
  
            this.activeYMD = formatYMD(datesEqual(clickedDate, activeDate) ? activeDate : createDate(clickedDate)); // Ensure grid is focused
  
            this.focus();
          }
        },
        gotoPrevYear: function gotoPrevYear() {
          this.activeYMD = formatYMD(this.constrainDate(oneYearAgo(this.activeDate)));
        },
        gotoPrevMonth: function gotoPrevMonth() {
          this.activeYMD = formatYMD(this.constrainDate(oneMonthAgo(this.activeDate)));
        },
        gotoCurrentMonth: function gotoCurrentMonth() {
          // TODO: Maybe this goto date should be configurable?
          this.activeYMD = formatYMD(this.constrainDate(this.getToday()));
        },
        gotoNextMonth: function gotoNextMonth() {
          this.activeYMD = formatYMD(this.constrainDate(oneMonthAhead(this.activeDate)));
        },
        gotoNextYear: function gotoNextYear() {
          this.activeYMD = formatYMD(this.constrainDate(oneYearAhead(this.activeDate)));
        },
        onHeaderClick: function onHeaderClick() {
          if (!this.disabled) {
            this.activeYMD = this.selectedYMD || formatYMD(this.getToday());
            this.focus();
          }
        }
      },
      render: function render(h) {
        var _this5 = this;
  
        // If hidden prop is set, render just a placeholder node
        if (this.hidden) {
          return h();
        }
  
        var isRTL = this.isRTL;
        var todayYMD = formatYMD(this.getToday());
        var selectedYMD = this.selectedYMD;
        var activeYMD = this.activeYMD;
        var highlightToday = !this.noHighlightToday;
        var safeId = this.safeId; // Flag for making the `aria-live` regions live
  
        var isLive = this.isLive; // Pre-compute some IDs
        // This should be computed props
  
        var idValue = safeId();
        var idWidget = safeId('_calendar-wrapper_');
        var idNav = safeId('_calendar-nav_');
        var idGrid = safeId('_calendar-grid_');
        var idGridCaption = safeId('_calendar-grid-caption_');
        var idGridHelp = safeId('_calendar-grid-help_');
        var idActive = activeYMD ? safeId("_cell-".concat(activeYMD, "_")) : null; // Header showing current selected date
  
        var $header = h('output', {
          staticClass: 'd-block text-center rounded border small p-1 mb-1',
          class: {
            'text-muted': this.disabled,
            readonly: this.readonly || this.disabled
          },
          attrs: {
            id: idValue,
            for: idGrid,
            role: 'status',
            tabindex: this.disabled ? null : '-1',
            // Mainly for testing purposes, as we do not know
            // the exact format `Intl` will format the date string
            'data-selected': toString$1(selectedYMD),
            // We wait until after mount to enable `aria-live`
            // to prevent initial announcement on page render
            'aria-live': isLive ? 'polite' : 'off',
            'aria-atomic': isLive ? 'true' : null
          },
          on: {
            // Transfer focus/click to focus grid
            // and focus active date (or today if no selection)
            click: this.onHeaderClick,
            focus: this.onHeaderClick
          }
        }, this.selectedDate ? [// We use `bdi` elements here in case the label doesn't match the locale
        // Although IE 11 does not deal with <BDI> at all (equivalent to a span)
        h('bdi', {
          staticClass: 'sr-only'
        }, " (".concat(toString$1(this.labelSelected), ") ")), h('bdi', {}, this.formatDateString(this.selectedDate))] : this.labelNoDateSelected || "\xA0" // '&nbsp;'
        );
        $header = h('header', {
          class: this.hideHeader ? 'sr-only' : 'mb-1',
          attrs: {
            title: this.selectedDate ? this.labelSelectedDate || null : null
          }
        }, [$header]); // Content for the date navigation buttons
  
        var $prevYearIcon = h(BIconChevronDoubleLeft, {
          props: {
            shiftV: 0.5,
            flipH: isRTL
          }
        });
        var $prevMonthIcon = h(BIconChevronLeft, {
          props: {
            shiftV: 0.5,
            flipH: isRTL
          }
        });
        var $thisMonthIcon = h(BIconCircleFill, {
          props: {
            shiftV: 0.5
          }
        });
        var $nextMonthIcon = h(BIconChevronLeft, {
          props: {
            shiftV: 0.5,
            flipH: !isRTL
          }
        });
        var $nextYearIcon = h(BIconChevronDoubleLeft, {
          props: {
            shiftV: 0.5,
            flipH: !isRTL
          }
        }); // Utility to create the date navigation buttons
  
        var makeNavBtn = function makeNavBtn(content, label, handler, btnDisabled, shortcut) {
          return h('button', {
            staticClass: 'btn btn-sm btn-outline-secondary border-0 flex-fill p-1 mx-1',
            class: {
              disabled: btnDisabled
            },
            attrs: {
              title: label || null,
              type: 'button',
              'aria-label': label || null,
              'aria-disabled': btnDisabled ? 'true' : null,
              'aria-keyshortcuts': shortcut || null
            },
            on: btnDisabled ? {} : {
              click: handler
            }
          }, [h('div', {
            attrs: {
              'aria-hidden': 'true'
            }
          }, [content])]);
        }; // Generate the date navigation buttons
  
  
        var $nav = h('div', {
          staticClass: 'b-calendar-nav d-flex mx-n1 mb-1',
          attrs: {
            id: idNav,
            role: 'group',
            'aria-hidden': this.disabled ? 'true' : null,
            'aria-label': this.labelNav || null,
            'aria-controls': idGrid
          }
        }, [makeNavBtn($prevYearIcon, this.labelPrevYear, this.gotoPrevYear, this.prevYearDisabled, 'Alt+PageDown'), makeNavBtn($prevMonthIcon, this.labelPrevMonth, this.gotoPrevMonth, this.prevMonthDisabled, 'PageDown'), makeNavBtn($thisMonthIcon, this.labelCurrentMonth, this.gotoCurrentMonth, this.thisMonthDisabled, 'Home'), makeNavBtn($nextMonthIcon, this.labelNextMonth, this.gotoNextMonth, this.nextMonthDisabled, 'PageUp'), makeNavBtn($nextYearIcon, this.labelNextYear, this.gotoNextYear, this.nextYearDisabled, 'Alt+PageUp')]); // Caption for calendar grid
  
        var $gridCaption = h('header', {
          key: 'grid-caption',
          staticClass: 'text-center font-weight-bold p-1 m-0',
          class: {
            'text-muted': this.disabled
          },
          attrs: {
            id: idGridCaption,
            'aria-live': isLive ? 'polite' : null,
            'aria-atomic': isLive ? 'true' : null
          }
        }, this.formatYearMonth(this.calendarFirstDay)); // Calendar weekday headings
  
        var $gridWeekDays = h('div', {
          staticClass: 'row no-gutters border-bottom',
          attrs: {
            'aria-hidden': 'true'
          }
        }, this.calendarHeadings.map(function (d, idx) {
          return h('small', {
            key: idx,
            staticClass: 'col text-truncate',
            class: {
              'text-muted': _this5.disabled
            },
            attrs: {
              title: d.label === d.text ? null : d.label,
              'aria-label': d.label
            }
          }, d.text);
        })); // Calendar day grid
  
        var $gridBody = this.calendar.map(function (week) {
          var $cells = week.map(function (day, dIndex) {
            var _class;
  
            var isSelected = day.ymd === selectedYMD;
            var isActive = day.ymd === activeYMD;
            var isToday = day.ymd === todayYMD;
            var idCell = safeId("_cell-".concat(day.ymd, "_")); // "fake" button
  
            var $btn = h('span', {
              staticClass: 'btn border-0 rounded-circle text-nowrap',
              // Should we add some classes to signify if today/selected/etc?
              class: (_class = {
                // Give the fake button a focus ring
                focus: isActive && _this5.gridHasFocus,
                // Styling
                disabled: day.isDisabled || _this5.disabled,
                active: isSelected
              }, _defineProperty(_class, _this5.computedVariant, isSelected), _defineProperty(_class, _this5.computedTodayVariant, isToday && highlightToday && !isSelected && day.isThisMonth), _defineProperty(_class, 'btn-outline-light', !(isToday && highlightToday) && !isSelected && !isActive), _defineProperty(_class, 'btn-light', !(isToday && highlightToday) && !isSelected && isActive), _defineProperty(_class, 'text-muted', !day.isThisMonth && !isSelected), _defineProperty(_class, 'text-dark', !(isToday && highlightToday) && !isSelected && !isActive && day.isThisMonth), _defineProperty(_class, 'font-weight-bold', (isSelected || day.isThisMonth) && !day.isDisabled), _class),
              on: {
                click: function click() {
                  return _this5.onClickDay(day);
                }
              }
            }, day.day);
            return h('div', // Cell with button
            {
              key: dIndex,
              staticClass: 'col p-0',
              class: day.isDisabled ? 'bg-light' : day.info.class || '',
              attrs: {
                id: idCell,
                role: 'button',
                'data-date': day.ymd,
                // Primarily for testing purposes
                // Only days in the month are presented as buttons to screen readers
                'aria-hidden': day.isThisMonth ? null : 'true',
                'aria-disabled': day.isDisabled || _this5.disabled ? 'true' : null,
                'aria-label': [day.label, isSelected ? "(".concat(_this5.labelSelected, ")") : null, isToday ? "(".concat(_this5.labelToday, ")") : null].filter(identity).join(' '),
                // NVDA doesn't convey `aria-selected`, but does `aria-current`,
                // ChromeVox doesn't convey `aria-current`, but does `aria-selected`,
                // so we set both attributes for robustness
                'aria-selected': isSelected ? 'true' : null,
                'aria-current': isSelected ? 'date' : null
              }
            }, [$btn]);
          }); // Return the week "row"
          // We use the first day of the weeks YMD value as a
          // key for efficient DOM patching / element re-use
  
          return h('div', {
            key: week[0].ymd,
            staticClass: 'row no-gutters'
          }, $cells);
        });
        $gridBody = h('div', {
          // A key is only required on the body if we add in transition support
          // key: this.activeYMD.slice(0, -3),
          staticClass: 'b-calendar-grid-body',
          style: this.disabled ? {
            pointerEvents: 'none'
          } : {}
        }, $gridBody);
        var $gridHelp = h('footer', {
          staticClass: 'border-top small text-muted text-center bg-light',
          attrs: {
            id: idGridHelp
          }
        }, [h('div', {
          staticClass: 'small'
        }, this.labelHelp)]);
        var $grid = h('div', {
          ref: 'grid',
          staticClass: 'form-control h-auto text-center p-0 mb-0',
          attrs: {
            id: idGrid,
            role: 'application',
            tabindex: this.disabled ? null : '0',
            'data-month': activeYMD.slice(0, -3),
            // `YYYY-MM`, mainly for testing
            'aria-roledescription': this.labelCalendar || null,
            'aria-labelledby': idGridCaption,
            'aria-describedby': idGridHelp,
            // `aria-readonly` is not considered valid on `role="application"`
            // https://www.w3.org/TR/wai-aria-1.1/#aria-readonly
            // 'aria-readonly': this.readonly && !this.disabled ? 'true' : null,
            'aria-disabled': this.disabled ? 'true' : null,
            'aria-activedescendant': idActive
          },
          on: {
            keydown: this.onKeydownGrid,
            focus: this.setGridFocusFlag,
            blur: this.setGridFocusFlag
          }
        }, [$gridCaption, $gridWeekDays, $gridBody, $gridHelp]); // Optional bottom slot
  
        var $slot = this.normalizeSlot('default');
        $slot = $slot ? h('footer', {
          staticClass: 'mt-2'
        }, $slot) : h();
        var $widget = h('div', {
          staticClass: 'b-calendar-inner',
          class: this.block ? 'd-block' : 'd-inline-block',
          style: this.block ? {} : {
            width: this.width
          },
          attrs: {
            id: idWidget,
            dir: isRTL ? 'rtl' : 'ltr',
            lang: this.computedLocale || null,
            role: 'group',
            'aria-disabled': this.disabled ? 'true' : null,
            // If datepicker controls an input, this will specify the ID of the input
            'aria-controls': this.ariaControls || null,
            // This should be a prop (so it can be changed to Date picker, etc, localized
            'aria-roledescription': this.roleDescription || null,
            'aria-describedby': [// Should the attr (if present) go last?
            // Or should this attr be a prop?
            this.$attrs['aria-describedby'], idValue, idGridHelp].filter(identity).join(' ')
          },
          on: {
            keydown: this.onKeydownWrapper
          }
        }, [$header, $nav, $grid, $slot]); // Wrap in an outer div that can be styled
  
        return h('div', {
          staticClass: 'b-calendar',
          // We use a style here rather than class `d-inline-block` so that users can
          // override the display value (`d-*` classes use the `!important` flag)
          style: this.block ? {} : {
            display: 'inline-block'
          }
        }, [$widget]);
      }
    });
  
    var CalendarPlugin = /*#__PURE__*/pluginFactory({
      components: {
        BCalendar: BCalendar
      }
    });
  
    /**
     * @param {string} prefix
     * @param {string} value
     */
  
    var prefixPropName = function prefixPropName(prefix, value) {
      return prefix + upperFirst(value);
    };
  
    /**
     * @param {string} prefix
     * @param {string} value
     */
  
    var unprefixPropName = function unprefixPropName(prefix, value) {
      return lowerFirst(value.replace(prefix, ''));
    };
  
    /**
     * Copies props from one array/object to a new array/object. Prop values
     * are also cloned as new references to prevent possible mutation of original
     * prop object values. Optionally accepts a function to transform the prop name.
     *
     * @param {[]|{}} props
     * @param {Function} transformFn
     */
  
    var copyProps = function copyProps(props) {
      var transformFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : identity;
  
      if (isArray(props)) {
        return props.map(transformFn);
      } // Props as an object.
  
  
      var copied = {};
  
      for (var prop in props) {
        /* istanbul ignore else */
        // eslint-disable-next-line no-prototype-builtins
        if (props.hasOwnProperty(prop)) {
          // If the prop value is an object, do a shallow clone to prevent
          // potential mutations to the original object.
          copied[transformFn(prop)] = isObject(props[prop]) ? clone(props[prop]) : props[prop];
        }
      }
  
      return copied;
    };
  
    // @vue/component
    var cardMixin = {
      props: {
        tag: {
          type: String,
          default: 'div'
        },
        bgVariant: {
          type: String,
          default: null
        },
        borderVariant: {
          type: String,
          default: null
        },
        textVariant: {
          type: String,
          default: null
        }
      }
    };
  
    var props$7 = {
      title: {
        type: String,
        default: ''
      },
      titleTag: {
        type: String,
        default: 'h4'
      }
    }; // @vue/component
  
    var BCardTitle = /*#__PURE__*/Vue.extend({
      name: 'BCardTitle',
      functional: true,
      props: props$7,
      render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;
        return h(props.titleTag, a(data, {
          staticClass: 'card-title'
        }), children || props.title);
      }
    });
  
    var NAME$8 = 'BCardSubTitle';
    var props$8 = {
      subTitle: {
        type: String,
        default: ''
      },
      subTitleTag: {
        type: String,
        default: 'h6'
      },
      subTitleTextVariant: {
        type: String,
        default: function _default() {
          return getComponentConfig(NAME$8, 'subTitleTextVariant');
        }
      }
    }; // @vue/component
  
    var BCardSubTitle = /*#__PURE__*/Vue.extend({
      name: NAME$8,
      functional: true,
      props: props$8,
      render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;
        return h(props.subTitleTag, a(data, {
          staticClass: 'card-subtitle',
          class: [props.subTitleTextVariant ? "text-".concat(props.subTitleTextVariant) : null]
        }), children || props.subTitle);
      }
    });
  
    var props$9 = _objectSpread2({}, copyProps(cardMixin.props, prefixPropName.bind(null, 'body')), {
      bodyClass: {
        type: [String, Object, Array],
        default: null
      }
    }, props$7, {}, props$8, {
      overlay: {
        type: Boolean,
        default: false
      }
    }); // @vue/component
  
    var BCardBody = /*#__PURE__*/Vue.extend({
      name: 'BCardBody',
      functional: true,
      props: props$9,
      render: function render(h, _ref) {
        var _ref2;
  
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;
        var cardTitle = h();
        var cardSubTitle = h();
        var cardContent = children || [h()];
  
        if (props.title) {
          cardTitle = h(BCardTitle, {
            props: pluckProps(props$7, props)
          });
        }
  
        if (props.subTitle) {
          cardSubTitle = h(BCardSubTitle, {
            props: pluckProps(props$8, props),
            class: ['mb-2']
          });
        }
  
        return h(props.bodyTag, a(data, {
          staticClass: 'card-body',
          class: [(_ref2 = {
            'card-img-overlay': props.overlay
          }, _defineProperty(_ref2, "bg-".concat(props.bodyBgVariant), props.bodyBgVariant), _defineProperty(_ref2, "border-".concat(props.bodyBorderVariant), props.bodyBorderVariant), _defineProperty(_ref2, "text-".concat(props.bodyTextVariant), props.bodyTextVariant), _ref2), props.bodyClass || {}]
        }), [cardTitle, cardSubTitle].concat(_toConsumableArray(cardContent)));
      }
    });
  
    var props$a = _objectSpread2({}, copyProps(cardMixin.props, prefixPropName.bind(null, 'header')), {
      header: {
        type: String,
        default: null
      },
      headerHtml: {
        type: String,
        default: null
      },
      headerClass: {
        type: [String, Object, Array],
        default: null
      }
    }); // @vue/component
  
    var BCardHeader = /*#__PURE__*/Vue.extend({
      name: 'BCardHeader',
      functional: true,
      props: props$a,
      render: function render(h, _ref) {
        var _ref2;
  
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;
        return h(props.headerTag, a(data, {
          staticClass: 'card-header',
          class: [props.headerClass, (_ref2 = {}, _defineProperty(_ref2, "bg-".concat(props.headerBgVariant), props.headerBgVariant), _defineProperty(_ref2, "border-".concat(props.headerBorderVariant), props.headerBorderVariant), _defineProperty(_ref2, "text-".concat(props.headerTextVariant), props.headerTextVariant), _ref2)]
        }), children || [h('div', {
          domProps: htmlOrText(props.headerHtml, props.header)
        })]);
      }
    });
  
    var props$b = _objectSpread2({}, copyProps(cardMixin.props, prefixPropName.bind(null, 'footer')), {
      footer: {
        type: String,
        default: null
      },
      footerHtml: {
        type: String,
        default: null
      },
      footerClass: {
        type: [String, Object, Array],
        default: null
      }
    }); // @vue/component
  
    var BCardFooter = /*#__PURE__*/Vue.extend({
      name: 'BCardFooter',
      functional: true,
      props: props$b,
      render: function render(h, _ref) {
        var _ref2;
  
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;
        return h(props.footerTag, a(data, {
          staticClass: 'card-footer',
          class: [props.footerClass, (_ref2 = {}, _defineProperty(_ref2, "bg-".concat(props.footerBgVariant), props.footerBgVariant), _defineProperty(_ref2, "border-".concat(props.footerBorderVariant), props.footerBorderVariant), _defineProperty(_ref2, "text-".concat(props.footerTextVariant), props.footerTextVariant), _ref2)]
        }), children || [h('div', {
          domProps: htmlOrText(props.footerHtml, props.footer)
        })]);
      }
    });
  
    var props$c = {
      src: {
        type: String,
        default: null,
        required: true
      },
      alt: {
        type: String,
        default: null
      },
      top: {
        type: Boolean,
        default: false
      },
      bottom: {
        type: Boolean,
        default: false
      },
      start: {
        type: Boolean,
        default: false
      },
      left: {
        // alias of 'start'
        type: Boolean,
        default: false
      },
      end: {
        type: Boolean,
        default: false
      },
      right: {
        // alias of 'end'
        type: Boolean,
        default: false
      },
      height: {
        type: [Number, String],
        default: null
      },
      width: {
        type: [Number, String],
        default: null
      }
    }; // @vue/component
  
    var BCardImg = /*#__PURE__*/Vue.extend({
      name: 'BCardImg',
      functional: true,
      props: props$c,
      render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data;
        var baseClass = 'card-img';
  
        if (props.top) {
          baseClass += '-top';
        } else if (props.right || props.end) {
          baseClass += '-right';
        } else if (props.bottom) {
          baseClass += '-bottom';
        } else if (props.left || props.start) {
          baseClass += '-left';
        }
  
        return h('img', a(data, {
          class: [baseClass],
          attrs: {
            src: props.src,
            alt: props.alt,
            height: props.height,
            width: props.width
          }
        }));
      }
    });
  
    var cardImgProps = copyProps(props$c, prefixPropName.bind(null, 'img'));
    cardImgProps.imgSrc.required = false;
    var props$d = _objectSpread2({}, props$9, {}, props$a, {}, props$b, {}, cardImgProps, {}, copyProps(cardMixin.props), {
      align: {
        type: String,
        default: null
      },
      noBody: {
        type: Boolean,
        default: false
      }
    }); // @vue/component
  
    var BCard = /*#__PURE__*/Vue.extend({
      name: 'BCard',
      functional: true,
      props: props$d,
      render: function render(h, _ref) {
        var _class;
  
        var props = _ref.props,
            data = _ref.data,
            slots = _ref.slots,
            scopedSlots = _ref.scopedSlots;
        var $slots = slots(); // Vue < 2.6.x may return undefined for scopedSlots
  
        var $scopedSlots = scopedSlots || {}; // Create placeholder elements for each section
  
        var imgFirst = h();
        var header = h();
        var content = h();
        var footer = h();
        var imgLast = h();
  
        if (props.imgSrc) {
          var img = h(BCardImg, {
            props: pluckProps(cardImgProps, props, unprefixPropName.bind(null, 'img'))
          });
  
          if (props.imgBottom) {
            imgLast = img;
          } else {
            imgFirst = img;
          }
        }
  
        if (props.header || hasNormalizedSlot('header', $scopedSlots, $slots)) {
          header = h(BCardHeader, {
            props: pluckProps(props$a, props)
          }, normalizeSlot('header', {}, $scopedSlots, $slots));
        }
  
        content = normalizeSlot('default', {}, $scopedSlots, $slots) || [];
  
        if (!props.noBody) {
          // Wrap content in card-body
          content = [h(BCardBody, {
            props: pluckProps(props$9, props)
          }, _toConsumableArray(content))];
        }
  
        if (props.footer || hasNormalizedSlot('footer', $scopedSlots, $slots)) {
          footer = h(BCardFooter, {
            props: pluckProps(props$b, props)
          }, normalizeSlot('footer', {}, $scopedSlots, $slots));
        }
  
        return h(props.tag, a(data, {
          staticClass: 'card',
          class: (_class = {
            'flex-row': props.imgLeft || props.imgStart,
            'flex-row-reverse': (props.imgRight || props.imgEnd) && !(props.imgLeft || props.imgStart)
          }, _defineProperty(_class, "text-".concat(props.align), props.align), _defineProperty(_class, "bg-".concat(props.bgVariant), props.bgVariant), _defineProperty(_class, "border-".concat(props.borderVariant), props.borderVariant), _defineProperty(_class, "text-".concat(props.textVariant), props.textVariant), _class)
        }), [imgFirst, header].concat(_toConsumableArray(content), [footer, imgLast]));
      }
    });
  
    var OBSERVER_PROP_NAME = '__bv__visibility_observer';
    var onlyDgitsRE = /^\d+$/;
  
    var VisibilityObserver = /*#__PURE__*/function () {
      function VisibilityObserver(el, options, vnode) {
        _classCallCheck(this, VisibilityObserver);
  
        this.el = el;
        this.callback = options.callback;
        this.margin = options.margin || 0;
        this.once = options.once || false;
        this.observer = null;
        this.visible = undefined;
        this.doneOnce = false; // Create the observer instance (if possible)
  
        this.createObserver(vnode);
      }
  
      _createClass(VisibilityObserver, [{
        key: "createObserver",
        value: function createObserver(vnode) {
          var _this = this;
  
          // Remove any previous observer
          if (this.observer) {
            /* istanbul ignore next */
            this.stop();
          } // Should only be called once and `callback` prop should be a function
  
  
          if (this.doneOnce || !isFunction(this.callback)) {
            /* istanbul ignore next */
            return;
          } // Create the observer instance
  
  
          try {
            // Future: Possibly add in other modifiers for left/right/top/bottom
            // offsets, root element reference, and thresholds
            this.observer = new IntersectionObserver(this.handler.bind(this), {
              // `null` = 'viewport'
              root: null,
              // Pixels away from view port to consider "visible"
              rootMargin: this.margin,
              // Intersection ratio of el and root (as a value from 0 to 1)
              threshold: 0
            });
          } catch (_unused) {
            // No IntersectionObserver support, so just stop trying to observe
            this.doneOnce = true;
            this.observer = undefined;
            this.callback(null);
            return;
          } // Start observing in a `$nextTick()` (to allow DOM to complete rendering)
  
          /* istanbul ignore next: IntersectionObserver not supported in JSDOM */
  
  
          vnode.context.$nextTick(function () {
            requestAF(function () {
              // Placed in an `if` just in case we were destroyed before
              // this `requestAnimationFrame` runs
              if (_this.observer) {
                _this.observer.observe(_this.el);
              }
            });
          });
        }
      }, {
        key: "handler",
        value: function handler(entries)
        /* istanbul ignore next: IntersectionObserver not supported in JSDOM */
        {
          var entry = entries ? entries[0] : {};
          var isIntersecting = Boolean(entry.isIntersecting || entry.intersectionRatio > 0.0);
  
          if (isIntersecting !== this.visible) {
            this.visible = isIntersecting;
            this.callback(isIntersecting);
  
            if (this.once && this.visible) {
              this.doneOnce = true;
              this.stop();
            }
          }
        }
      }, {
        key: "stop",
        value: function stop() {
          var observer = this.observer;
          /* istanbul ignore next */
  
          if (observer && observer.disconnect) {
            observer.disconnect();
          }
  
          this.observer = null;
        }
      }]);
  
      return VisibilityObserver;
    }();
  
    var destroy = function destroy(el) {
      var observer = el[OBSERVER_PROP_NAME];
  
      if (observer && observer.stop) {
        observer.stop();
      }
  
      delete el[OBSERVER_PROP_NAME];
    };
  
    var bind = function bind(el, _ref, vnode) {
      var value = _ref.value,
          modifiers = _ref.modifiers;
      // `value` is the callback function
      var options = {
        margin: '0px',
        once: false,
        callback: value
      }; // Parse modifiers
  
      keys(modifiers).forEach(function (mod) {
        /* istanbul ignore else: Until <b-img-lazy> is switched to use this directive */
        if (onlyDgitsRE.test(mod)) {
          options.margin = "".concat(mod, "px");
        } else if (mod.toLowerCase() === 'once') {
          options.once = true;
        }
      }); // Destroy any previous observer
  
      destroy(el); // Create new observer
  
      el[OBSERVER_PROP_NAME] = new VisibilityObserver(el, options, vnode); // Store the current modifiers on the object (cloned)
  
      el[OBSERVER_PROP_NAME]._prevModifiers = clone(modifiers);
    }; // When the directive options may have been updated (or element)
  
  
    var componentUpdated = function componentUpdated(el, _ref2, vnode) {
      var value = _ref2.value,
          oldValue = _ref2.oldValue,
          modifiers = _ref2.modifiers;
      // Compare value/oldValue and modifiers to see if anything has changed
      // and if so, destroy old observer and create new observer
  
      /* istanbul ignore next */
      modifiers = clone(modifiers);
      /* istanbul ignore next */
  
      if (el && (value !== oldValue || !el[OBSERVER_PROP_NAME] || !looseEqual(modifiers, el[OBSERVER_PROP_NAME]._prevModifiers))) {
        // Re-bind on element
        bind(el, {
          value: value,
          modifiers: modifiers
        }, vnode);
      }
    }; // When directive un-binds from element
  
  
    var unbind = function unbind(el) {
      // Remove the observer
      destroy(el);
    }; // Export the directive
  
  
    var VBVisible = {
      bind: bind,
      componentUpdated: componentUpdated,
      unbind: unbind
    };
  
    var NAME$9 = 'BImg'; // Blank image with fill template
  
    var BLANK_TEMPLATE = '<svg width="%{w}" height="%{h}" ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'viewBox="0 0 %{w} %{h}" preserveAspectRatio="none">' + '<rect width="100%" height="100%" style="fill:%{f};"></rect>' + '</svg>';
    var props$e = {
      src: {
        type: String,
        default: null
      },
      srcset: {
        type: [String, Array],
        default: null
      },
      sizes: {
        type: [String, Array],
        default: null
      },
      alt: {
        type: String,
        default: null
      },
      width: {
        type: [Number, String],
        default: null
      },
      height: {
        type: [Number, String],
        default: null
      },
      block: {
        type: Boolean,
        default: false
      },
      fluid: {
        type: Boolean,
        default: false
      },
      fluidGrow: {
        // Gives fluid images class `w-100` to make them grow to fit container
        type: Boolean,
        default: false
      },
      rounded: {
        // rounded can be:
        //   false: no rounding of corners
        //   true: slightly rounded corners
        //   'top': top corners rounded
        //   'right': right corners rounded
        //   'bottom': bottom corners rounded
        //   'left': left corners rounded
        //   'circle': circle/oval
        //   '0': force rounding off
        type: [Boolean, String],
        default: false
      },
      thumbnail: {
        type: Boolean,
        default: false
      },
      left: {
        type: Boolean,
        default: false
      },
      right: {
        type: Boolean,
        default: false
      },
      center: {
        type: Boolean,
        default: false
      },
      blank: {
        type: Boolean,
        default: false
      },
      blankColor: {
        type: String,
        default: function _default() {
          return getComponentConfig(NAME$9, 'blankColor');
        }
      }
    }; // --- Helper methods ---
  
    var makeBlankImgSrc = function makeBlankImgSrc(width, height, color) {
      var src = encodeURIComponent(BLANK_TEMPLATE.replace('%{w}', toString$1(width)).replace('%{h}', toString$1(height)).replace('%{f}', color));
      return "data:image/svg+xml;charset=UTF-8,".concat(src);
    }; // @vue/component
  
  
    var BImg = /*#__PURE__*/Vue.extend({
      name: NAME$9,
      functional: true,
      props: props$e,
      render: function render(h, _ref) {
        var _class;
  
        var props = _ref.props,
            data = _ref.data;
        var src = props.src;
        var width = toInteger(props.width) || null;
        var height = toInteger(props.height) || null;
        var align = null;
        var block = props.block;
        var srcset = concat(props.srcset).filter(identity).join(',');
        var sizes = concat(props.sizes).filter(identity).join(',');
  
        if (props.blank) {
          if (!height && width) {
            height = width;
          } else if (!width && height) {
            width = height;
          }
  
          if (!width && !height) {
            width = 1;
            height = 1;
          } // Make a blank SVG image
  
  
          src = makeBlankImgSrc(width, height, props.blankColor || 'transparent'); // Disable srcset and sizes
  
          srcset = null;
          sizes = null;
        }
  
        if (props.left) {
          align = 'float-left';
        } else if (props.right) {
          align = 'float-right';
        } else if (props.center) {
          align = 'mx-auto';
          block = true;
        }
  
        return h('img', a(data, {
          attrs: {
            src: src,
            alt: props.alt,
            width: width ? toString$1(width) : null,
            height: height ? toString$1(height) : null,
            srcset: srcset || null,
            sizes: sizes || null
          },
          class: (_class = {
            'img-thumbnail': props.thumbnail,
            'img-fluid': props.fluid || props.fluidGrow,
            'w-100': props.fluidGrow,
            rounded: props.rounded === '' || props.rounded === true
          }, _defineProperty(_class, "rounded-".concat(props.rounded), isString(props.rounded) && props.rounded !== ''), _defineProperty(_class, align, align), _defineProperty(_class, 'd-block', block), _class)
        }));
      }
    });
  
    var NAME$a = 'BImgLazy';
    var props$f = {
      src: {
        type: String,
        default: null,
        required: true
      },
      srcset: {
        type: [String, Array],
        default: null
      },
      sizes: {
        type: [String, Array],
        default: null
      },
      alt: {
        type: String,
        default: null
      },
      width: {
        type: [Number, String],
        default: null
      },
      height: {
        type: [Number, String],
        default: null
      },
      blankSrc: {
        // If null, a blank image is generated
        type: String,
        default: null
      },
      blankColor: {
        type: String,
        default: function _default() {
          return getComponentConfig(NAME$a, 'blankColor');
        }
      },
      blankWidth: {
        type: [Number, String],
        default: null
      },
      blankHeight: {
        type: [Number, String],
        default: null
      },
      show: {
        type: Boolean,
        default: false
      },
      fluid: {
        type: Boolean,
        default: false
      },
      fluidGrow: {
        type: Boolean,
        default: false
      },
      block: {
        type: Boolean,
        default: false
      },
      thumbnail: {
        type: Boolean,
        default: false
      },
      rounded: {
        type: [Boolean, String],
        default: false
      },
      left: {
        type: Boolean,
        default: false
      },
      right: {
        type: Boolean,
        default: false
      },
      center: {
        type: Boolean,
        default: false
      },
      offset: {
        // Distance away from viewport (in pixels) before being
        // considered "visible"
        type: [Number, String],
        default: 360
      }
    }; // @vue/component
  
    var BImgLazy = /*#__PURE__*/Vue.extend({
      name: NAME$a,
      directives: {
        bVisible: VBVisible
      },
      props: props$f,
      data: function data() {
        return {
          isShown: this.show
        };
      },
      computed: {
        computedSrc: function computedSrc() {
          return !this.blankSrc || this.isShown ? this.src : this.blankSrc;
        },
        computedBlank: function computedBlank() {
          return !(this.isShown || this.blankSrc);
        },
        computedWidth: function computedWidth() {
          return this.isShown ? this.width : this.blankWidth || this.width;
        },
        computedHeight: function computedHeight() {
          return this.isShown ? this.height : this.blankHeight || this.height;
        },
        computedSrcset: function computedSrcset() {
          var srcset = concat(this.srcset).filter(identity).join(',');
          return !this.blankSrc || this.isShown ? srcset : null;
        },
        computedSizes: function computedSizes() {
          var sizes = concat(this.sizes).filter(identity).join(',');
          return !this.blankSrc || this.isShown ? sizes : null;
        }
      },
      watch: {
        show: function show(newVal, oldVal) {
          if (newVal !== oldVal) {
            // If IntersectionObserver support is not available, image is always shown
            var visible = hasIntersectionObserverSupport ? newVal : true;
            this.isShown = visible;
  
            if (visible !== newVal) {
              // Ensure the show prop is synced (when no IntersectionObserver)
              this.$nextTick(this.updateShowProp);
            }
          }
        },
        isShown: function isShown(newVal, oldVal) {
          if (newVal !== oldVal) {
            // Update synched show prop
            this.updateShowProp();
          }
        }
      },
      mounted: function mounted() {
        // If IntersectionObserver is not available, image is always shown
        this.isShown = hasIntersectionObserverSupport ? this.show : true;
      },
      methods: {
        updateShowProp: function updateShowProp() {
          this.$emit('update:show', this.isShown);
        },
        doShow: function doShow(visible) {
          // If IntersectionObserver is not supported, the callback
          // will be called with `null` rather than `true` or `false`
          if ((visible || visible === null) && !this.isShown) {
            this.isShown = true;
          }
        }
      },
      render: function render(h) {
        var directives = [];
  
        if (!this.isShown) {
          var _modifiers;
  
          // We only add the visible directive if we are not shown
          directives.push({
            // Visible directive will silently do nothing if
            // IntersectionObserver is not supported
            name: 'b-visible',
            // Value expects a callback (passed one arg of `visible` = `true` or `false`)
            value: this.doShow,
            modifiers: (_modifiers = {}, _defineProperty(_modifiers, "".concat(toInteger(this.offset) || 0), true), _defineProperty(_modifiers, "once", true), _modifiers)
          });
        }
  
        return h(BImg, {
          directives: directives,
          props: {
            // Computed value props
            src: this.computedSrc,
            blank: this.computedBlank,
            width: this.computedWidth,
            height: this.computedHeight,
            srcset: this.computedSrcset || null,
            sizes: this.computedSizes || null,
            // Passthrough props
            alt: this.alt,
            blankColor: this.blankColor,
            fluid: this.fluid,
            fluidGrow: this.fluidGrow,
            block: this.block,
            thumbnail: this.thumbnail,
            rounded: this.rounded,
            left: this.left,
            right: this.right,
            center: this.center
          }
        });
      }
    });
  
    // The `omit()` util creates a new object, so we can just pass the original props
  
    var lazyProps = omit(props$f, ['left', 'right', 'center', 'block', 'rounded', 'thumbnail', 'fluid', 'fluidGrow']);
    var props$g = _objectSpread2({}, lazyProps, {
      top: {
        type: Boolean,
        default: false
      },
      bottom: {
        type: Boolean,
        default: false
      },
      start: {
        type: Boolean,
        default: false
      },
      left: {
        // alias of 'start'
        type: Boolean,
        default: false
      },
      end: {
        type: Boolean,
        default: false
      },
      right: {
        // alias of 'end'
        type: Boolean,
        default: false
      }
    }); // @vue/component
  
    var BCardImgLazy = /*#__PURE__*/Vue.extend({
      name: 'BCardImgLazy',
      functional: true,
      props: props$g,
      render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data;
        var baseClass = 'card-img';
  
        if (props.top) {
          baseClass += '-top';
        } else if (props.right || props.end) {
          baseClass += '-right';
        } else if (props.bottom) {
          baseClass += '-bottom';
        } else if (props.left || props.start) {
          baseClass += '-left';
        } // False out the left/center/right props before passing to b-img-lazy
  
  
        var lazyProps = _objectSpread2({}, props, {
          left: false,
          right: false,
          center: false
        });
  
        return h(BImgLazy, a(data, {
          class: [baseClass],
          props: lazyProps
        }));
      }
    });
  
    var props$h = {
      textTag: {
        type: String,
        default: 'p'
      }
    }; // @vue/component
  
    var BCardText = /*#__PURE__*/Vue.extend({
      name: 'BCardText',
      functional: true,
      props: props$h,
      render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;
        return h(props.textTag, a(data, {
          staticClass: 'card-text'
        }), children);
      }
    });
  
    var props$i = {
      tag: {
        type: String,
        default: 'div'
      },
      deck: {
        type: Boolean,
        default: false
      },
      columns: {
        type: Boolean,
        default: false
      }
    }; // @vue/component
  
    var BCardGroup = /*#__PURE__*/Vue.extend({
      name: 'BCardGroup',
      functional: true,
      props: props$i,
      render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;
        return h(props.tag, a(data, {
          class: props.deck ? 'card-deck' : props.columns ? 'card-columns' : 'card-group'
        }), children);
      }
    });
  
    var CardPlugin = /*#__PURE__*/pluginFactory({
      components: {
        BCard: BCard,
        BCardHeader: BCardHeader,
        BCardBody: BCardBody,
        BCardTitle: BCardTitle,
        BCardSubTitle: BCardSubTitle,
        BCardFooter: BCardFooter,
        BCardImg: BCardImg,
        BCardImgLazy: BCardImgLazy,
        BCardText: BCardText,
        BCardGroup: BCardGroup
      }
    });
  
    var noop = function noop() {};
  
    /**
     * Observe a DOM element changes, falls back to eventListener mode
     * @param {Element} el The DOM element to observe
     * @param {Function} callback callback to be called on change
     * @param {object} [options={childList: true, subtree: true}] observe options
     * @see https://stackoverflow.com/questions/3219758
     */
  
    var observeDom = function observeDom(el, callback, options)
    /* istanbul ignore next: difficult to test in JSDOM */
    {
      // Handle cases where we might be passed a Vue instance
      el = el ? el.$el || el : null; // Early exit when we have no element
  
      /* istanbul ignore next: difficult to test in JSDOM */
  
      if (!isElement(el)) {
        return null;
      } // Exit and throw a warning when `MutationObserver` isn't available
  
  
      if (warnNoMutationObserverSupport('observeDom')) {
        return null;
      } // Define a new observer
  
  
      var obs = new MutationObs(function (mutations) {
        var changed = false; // A mutation can contain several change records, so we loop
        // through them to see what has changed
        // We break out of the loop early if any "significant" change
        // has been detected
  
        for (var i = 0; i < mutations.length && !changed; i++) {
          // The mutation record
          var mutation = mutations[i]; // Mutation type
  
          var type = mutation.type; // DOM node (could be any DOM node type - HTMLElement, Text, comment, etc.)
  
          var target = mutation.target; // Detect whether a change happened based on type and target
  
          if (type === 'characterData' && target.nodeType === Node.TEXT_NODE) {
            // We ignore nodes that are not TEXT (i.e. comments, etc)
            // as they don't change layout
            changed = true;
          } else if (type === 'attributes') {
            changed = true;
          } else if (type === 'childList' && (mutation.addedNodes.length > 0 || mutation.removedNodes.length > 0)) {
            // This includes HTMLElement and text nodes being
            // added/removed/re-arranged
            changed = true;
          }
        } // We only call the callback if a change that could affect
        // layout/size truely happened
  
  
        if (changed) {
          callback();
        }
      }); // Have the observer observe foo for changes in children, etc
  
      obs.observe(el, _objectSpread2({
        childList: true,
        subtree: true
      }, options)); // We return a reference to the observer so that `obs.disconnect()`
      // can be called if necessary
      // To reduce overhead when the root element is hidden
  
      return obs;
    };
  
    var EVENT_OPTIONS_PASSIVE = {
      passive: true
    };
    var EVENT_OPTIONS_NO_CAPTURE = {
      passive: true,
      capture: false
    }; // --- Utils ---
    // Normalize event options based on support of passive option
    // Exported only for testing purposes
  
    var parseEventOptions = function parseEventOptions(options) {
      /* istanbul ignore else: can't test in JSDOM, as it supports passive */
      if (hasPassiveEventSupport) {
        return isObject(options) ? options : {
          capture: !!options || false
        };
      } else {
        // Need to translate to actual Boolean value
        return !!(isObject(options) ? options.capture : options);
      }
    }; // Attach an event listener to an element
  
    var eventOn = function eventOn(el, evtName, handler, options) {
      if (el && el.addEventListener) {
        el.addEventListener(evtName, handler, parseEventOptions(options));
      }
    }; // Remove an event listener from an element
  
    var eventOff = function eventOff(el, evtName, handler, options) {
      if (el && el.removeEventListener) {
        el.removeEventListener(evtName, handler, parseEventOptions(options));
      }
    }; // Utility method to add/remove a event listener based on first argument (boolean)
    // It passes all other arguments to the `eventOn()` or `eventOff` method
  
    var eventOnOff = function eventOnOff(on) {
      var method = on ? eventOn : eventOff;
  
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
  
      method.apply(void 0, args);
    };
  
    var NAME$b = 'BCarousel'; // Slide directional classes
  
    var DIRECTION = {
      next: {
        dirClass: 'carousel-item-left',
        overlayClass: 'carousel-item-next'
      },
      prev: {
        dirClass: 'carousel-item-right',
        overlayClass: 'carousel-item-prev'
      }
    }; // Fallback Transition duration (with a little buffer) in ms
  
    var TRANS_DURATION = 600 + 50; // Time for mouse compat events to fire after touch
  
    var TOUCH_EVENT_COMPAT_WAIT = 500; // Number of pixels to consider touch move a swipe
  
    var SWIPE_THRESHOLD = 40; // PointerEvent pointer types
  
    var PointerType = {
      TOUCH: 'touch',
      PEN: 'pen'
    }; // Transition Event names
  
    var TransitionEndEvents = {
      WebkitTransition: 'webkitTransitionEnd',
      MozTransition: 'transitionend',
      OTransition: 'otransitionend oTransitionEnd',
      transition: 'transitionend'
    }; // Return the browser specific transitionEnd event name
  
    var getTransitionEndEvent = function getTransitionEndEvent(el) {
      for (var name in TransitionEndEvents) {
        if (!isUndefined(el.style[name])) {
          return TransitionEndEvents[name];
        }
      } // Fallback
  
      /* istanbul ignore next */
  
  
      return null;
    }; // @vue/component
  
  
    var BCarousel = /*#__PURE__*/Vue.extend({
      name: NAME$b,
      mixins: [idMixin, normalizeSlotMixin],
      provide: function provide() {
        return {
          bvCarousel: this
        };
      },
      model: {
        prop: 'value',
        event: 'input'
      },
      props: {
        labelPrev: {
          type: String,
          default: function _default() {
            return getComponentConfig(NAME$b, 'labelPrev');
          }
        },
        labelNext: {
          type: String,
          default: function _default() {
            return getComponentConfig(NAME$b, 'labelNext');
          }
        },
        labelGotoSlide: {
          type: String,
          default: function _default() {
            return getComponentConfig(NAME$b, 'labelGotoSlide');
          }
        },
        labelIndicators: {
          type: String,
          default: function _default() {
            return getComponentConfig(NAME$b, 'labelIndicators');
          }
        },
        interval: {
          type: Number,
          default: 5000
        },
        indicators: {
          type: Boolean,
          default: false
        },
        controls: {
          type: Boolean,
          default: false
        },
        noAnimation: {
          // Disable slide/fade animation
          type: Boolean,
          default: false
        },
        fade: {
          // Enable cross-fade animation instead of slide animation
          type: Boolean,
          default: false
        },
        noWrap: {
          // Disable wrapping/looping when start/end is reached
          type: Boolean,
          default: false
        },
        noTouch: {
          // Sniffed by carousel-slide
          type: Boolean,
          default: false
        },
        noHoverPause: {
          // Disable pause on hover
          type: Boolean,
          default: false
        },
        imgWidth: {
          // Sniffed by carousel-slide
          type: [Number, String] // default: undefined
  
        },
        imgHeight: {
          // Sniffed by carousel-slide
          type: [Number, String] // default: undefined
  
        },
        background: {
          type: String // default: undefined
  
        },
        value: {
          type: Number,
          default: 0
        }
      },
      data: function data() {
        return {
          index: this.value || 0,
          isSliding: false,
          transitionEndEvent: null,
          slides: [],
          direction: null,
          isPaused: !(toInteger(this.interval) > 0),
          // Touch event handling values
          touchStartX: 0,
          touchDeltaX: 0
        };
      },
      computed: {
        numSlides: function numSlides() {
          return this.slides.length;
        }
      },
      watch: {
        value: function value(newVal, oldVal) {
          if (newVal !== oldVal) {
            this.setSlide(toInteger(newVal) || 0);
          }
        },
        interval: function interval(newVal, oldVal) {
          if (newVal === oldVal) {
            /* istanbul ignore next */
            return;
          }
  
          if (!newVal) {
            // Pausing slide show
            this.pause(false);
          } else {
            // Restarting or Changing interval
            this.pause(true);
            this.start(false);
          }
        },
        isPaused: function isPaused(newVal, oldVal) {
          if (newVal !== oldVal) {
            this.$emit(newVal ? 'paused' : 'unpaused');
          }
        },
        index: function index(to, from) {
          if (to === from || this.isSliding) {
            /* istanbul ignore next */
            return;
          }
  
          this.doSlide(to, from);
        }
      },
      created: function created() {
        // Create private non-reactive props
        this._intervalId = null;
        this._animationTimeout = null;
        this._touchTimeout = null; // Set initial paused state
  
        this.isPaused = !(toInteger(this.interval) > 0);
      },
      mounted: function mounted() {
        // Cache current browser transitionend event name
        this.transitionEndEvent = getTransitionEndEvent(this.$el) || null; // Get all slides
  
        this.updateSlides(); // Observe child changes so we can update slide list
  
        observeDom(this.$refs.inner, this.updateSlides.bind(this), {
          subtree: false,
          childList: true,
          attributes: true,
          attributeFilter: ['id']
        });
      },
      beforeDestroy: function beforeDestroy() {
        clearTimeout(this._animationTimeout);
        clearTimeout(this._touchTimeout);
        clearInterval(this._intervalId);
        this._intervalId = null;
        this._animationTimeout = null;
        this._touchTimeout = null;
      },
      methods: {
        // Set slide
        setSlide: function setSlide(slide) {
          var _this = this;
  
          var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  
          // Don't animate when page is not visible
  
          /* istanbul ignore if: difficult to test */
          if (isBrowser && document.visibilityState && document.hidden) {
            return;
          }
  
          var noWrap = this.noWrap;
          var numSlides = this.numSlides; // Make sure we have an integer (you never know!)
  
          slide = Math.floor(slide); // Don't do anything if nothing to slide to
  
          if (numSlides === 0) {
            return;
          } // Don't change slide while transitioning, wait until transition is done
  
  
          if (this.isSliding) {
            // Schedule slide after sliding complete
            this.$once('sliding-end', function () {
              return _this.setSlide(slide, direction);
            });
            return;
          }
  
          this.direction = direction; // Set new slide index
          // Wrap around if necessary (if no-wrap not enabled)
  
          this.index = slide >= numSlides ? noWrap ? numSlides - 1 : 0 : slide < 0 ? noWrap ? 0 : numSlides - 1 : slide; // Ensure the v-model is synched up if no-wrap is enabled
          // and user tried to slide pass either ends
  
          if (noWrap && this.index !== slide && this.index !== this.value) {
            this.$emit('input', this.index);
          }
        },
        // Previous slide
        prev: function prev() {
          this.setSlide(this.index - 1, 'prev');
        },
        // Next slide
        next: function next() {
          this.setSlide(this.index + 1, 'next');
        },
        // Pause auto rotation
        pause: function pause(evt) {
          if (!evt) {
            this.isPaused = true;
          }
  
          if (this._intervalId) {
            clearInterval(this._intervalId);
            this._intervalId = null;
          }
        },
        // Start auto rotate slides
        start: function start(evt) {
          if (!evt) {
            this.isPaused = false;
          }
          /* istanbul ignore next: most likely will never happen, but just in case */
  
  
          if (this._intervalId) {
            clearInterval(this._intervalId);
            this._intervalId = null;
          } // Don't start if no interval, or less than 2 slides
  
  
          if (this.interval && this.numSlides > 1) {
            this._intervalId = setInterval(this.next, Math.max(1000, this.interval));
          }
        },
        // Restart auto rotate slides when focus/hover leaves the carousel
        restart: function restart()
        /* istanbul ignore next: difficult to test */
        {
          if (!this.$el.contains(document.activeElement)) {
            this.start();
          }
        },
        doSlide: function doSlide(to, from) {
          var _this2 = this;
  
          var isCycling = Boolean(this.interval); // Determine sliding direction
  
          var direction = this.calcDirection(this.direction, from, to);
          var overlayClass = direction.overlayClass;
          var dirClass = direction.dirClass; // Determine current and next slides
  
          var currentSlide = this.slides[from];
          var nextSlide = this.slides[to]; // Don't do anything if there aren't any slides to slide to
  
          if (!currentSlide || !nextSlide) {
            /* istanbul ignore next */
            return;
          } // Start animating
  
  
          this.isSliding = true;
  
          if (isCycling) {
            this.pause(false);
          }
  
          this.$emit('sliding-start', to); // Update v-model
  
          this.$emit('input', this.index);
  
          if (this.noAnimation) {
            addClass(nextSlide, 'active');
            removeClass(currentSlide, 'active');
            this.isSliding = false; // Notify ourselves that we're done sliding (slid)
  
            this.$nextTick(function () {
              return _this2.$emit('sliding-end', to);
            });
          } else {
            addClass(nextSlide, overlayClass); // Trigger a reflow of next slide
  
            reflow(nextSlide);
            addClass(currentSlide, dirClass);
            addClass(nextSlide, dirClass); // Transition End handler
  
            var called = false;
            /* istanbul ignore next: difficult to test */
  
            var onceTransEnd = function onceTransEnd() {
              if (called) {
                return;
              }
  
              called = true;
              /* istanbul ignore if: transition events cant be tested in JSDOM */
  
              if (_this2.transitionEndEvent) {
                var events = _this2.transitionEndEvent.split(/\s+/);
  
                events.forEach(function (evt) {
                  return eventOff(currentSlide, evt, onceTransEnd, EVENT_OPTIONS_NO_CAPTURE);
                });
              }
  
              _this2._animationTimeout = null;
              removeClass(nextSlide, dirClass);
              removeClass(nextSlide, overlayClass);
              addClass(nextSlide, 'active');
              removeClass(currentSlide, 'active');
              removeClass(currentSlide, dirClass);
              removeClass(currentSlide, overlayClass);
              setAttr(currentSlide, 'aria-current', 'false');
              setAttr(nextSlide, 'aria-current', 'true');
              setAttr(currentSlide, 'aria-hidden', 'true');
              setAttr(nextSlide, 'aria-hidden', 'false');
              _this2.isSliding = false;
              _this2.direction = null; // Notify ourselves that we're done sliding (slid)
  
              _this2.$nextTick(function () {
                return _this2.$emit('sliding-end', to);
              });
            }; // Set up transitionend handler
  
            /* istanbul ignore if: transition events cant be tested in JSDOM */
  
  
            if (this.transitionEndEvent) {
              var events = this.transitionEndEvent.split(/\s+/);
              events.forEach(function (event) {
                return eventOn(currentSlide, event, onceTransEnd, EVENT_OPTIONS_NO_CAPTURE);
              });
            } // Fallback to setTimeout()
  
  
            this._animationTimeout = setTimeout(onceTransEnd, TRANS_DURATION);
          }
  
          if (isCycling) {
            this.start(false);
          }
        },
        // Update slide list
        updateSlides: function updateSlides() {
          this.pause(true); // Get all slides as DOM elements
  
          this.slides = selectAll('.carousel-item', this.$refs.inner);
          var numSlides = this.slides.length; // Keep slide number in range
  
          var index = Math.max(0, Math.min(Math.floor(this.index), numSlides - 1));
          this.slides.forEach(function (slide, idx) {
            var n = idx + 1;
  
            if (idx === index) {
              addClass(slide, 'active');
              setAttr(slide, 'aria-current', 'true');
            } else {
              removeClass(slide, 'active');
              setAttr(slide, 'aria-current', 'false');
            }
  
            setAttr(slide, 'aria-posinset', String(n));
            setAttr(slide, 'aria-setsize', String(numSlides));
          }); // Set slide as active
  
          this.setSlide(index);
          this.start(this.isPaused);
        },
        calcDirection: function calcDirection() {
          var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          var curIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var nextIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  
          if (!direction) {
            return nextIndex > curIndex ? DIRECTION.next : DIRECTION.prev;
          }
  
          return DIRECTION[direction];
        },
        handleClick: function handleClick(evt, fn) {
          var keyCode = evt.keyCode;
  
          if (evt.type === 'click' || keyCode === KEY_CODES.SPACE || keyCode === KEY_CODES.ENTER) {
            evt.preventDefault();
            evt.stopPropagation();
            fn();
          }
        },
        handleSwipe: function handleSwipe()
        /* istanbul ignore next: JSDOM doesn't support touch events */
        {
          var absDeltaX = Math.abs(this.touchDeltaX);
  
          if (absDeltaX <= SWIPE_THRESHOLD) {
            return;
          }
  
          var direction = absDeltaX / this.touchDeltaX; // Reset touch delta X
          // https://github.com/twbs/bootstrap/pull/28558
  
          this.touchDeltaX = 0;
  
          if (direction > 0) {
            // Swipe left
            this.prev();
          } else if (direction < 0) {
            // Swipe right
            this.next();
          }
        },
        touchStart: function touchStart(evt)
        /* istanbul ignore next: JSDOM doesn't support touch events */
        {
          if (hasPointerEventSupport && PointerType[evt.pointerType.toUpperCase()]) {
            this.touchStartX = evt.clientX;
          } else if (!hasPointerEventSupport) {
            this.touchStartX = evt.touches[0].clientX;
          }
        },
        touchMove: function touchMove(evt)
        /* istanbul ignore next: JSDOM doesn't support touch events */
        {
          // Ensure swiping with one touch and not pinching
          if (evt.touches && evt.touches.length > 1) {
            this.touchDeltaX = 0;
          } else {
            this.touchDeltaX = evt.touches[0].clientX - this.touchStartX;
          }
        },
        touchEnd: function touchEnd(evt)
        /* istanbul ignore next: JSDOM doesn't support touch events */
        {
          if (hasPointerEventSupport && PointerType[evt.pointerType.toUpperCase()]) {
            this.touchDeltaX = evt.clientX - this.touchStartX;
          }
  
          this.handleSwipe(); // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
  
          this.pause(false);
  
          if (this._touchTimeout) {
            clearTimeout(this._touchTimeout);
          }
  
          this._touchTimeout = setTimeout(this.start, TOUCH_EVENT_COMPAT_WAIT + Math.max(1000, this.interval));
        }
      },
      render: function render(h) {
        var _this3 = this;
  
        // Wrapper for slides
        var inner = h('div', {
          ref: 'inner',
          class: ['carousel-inner'],
          attrs: {
            id: this.safeId('__BV_inner_'),
            role: 'list'
          }
        }, [this.normalizeSlot('default')]); // Prev and next controls
  
        var controls = h();
  
        if (this.controls) {
          var prevHandler = function prevHandler(evt) {
            /* istanbul ignore next */
            if (!_this3.isSliding) {
              _this3.handleClick(evt, _this3.prev);
            } else {
              evt.preventDefault();
            }
          };
  
          var nextHandler = function nextHandler(evt) {
            /* istanbul ignore next */
            if (!_this3.isSliding) {
              _this3.handleClick(evt, _this3.next);
            } else {
              evt.preventDefault();
            }
          };
  
          controls = [h('a', {
            class: ['carousel-control-prev'],
            attrs: {
              href: '#',
              role: 'button',
              'aria-controls': this.safeId('__BV_inner_'),
              'aria-disabled': this.isSliding ? 'true' : null
            },
            on: {
              click: prevHandler,
              keydown: prevHandler
            }
          }, [h('span', {
            class: ['carousel-control-prev-icon'],
            attrs: {
              'aria-hidden': 'true'
            }
          }), h('span', {
            class: ['sr-only']
          }, [this.labelPrev])]), h('a', {
            class: ['carousel-control-next'],
            attrs: {
              href: '#',
              role: 'button',
              'aria-controls': this.safeId('__BV_inner_'),
              'aria-disabled': this.isSliding ? 'true' : null
            },
            on: {
              click: nextHandler,
              keydown: nextHandler
            }
          }, [h('span', {
            class: ['carousel-control-next-icon'],
            attrs: {
              'aria-hidden': 'true'
            }
          }), h('span', {
            class: ['sr-only']
          }, [this.labelNext])])];
        } // Indicators
  
  
        var indicators = h('ol', {
          class: ['carousel-indicators'],
          directives: [{
            name: 'show',
            rawName: 'v-show',
            value: this.indicators,
            expression: 'indicators'
          }],
          attrs: {
            id: this.safeId('__BV_indicators_'),
            'aria-hidden': this.indicators ? 'false' : 'true',
            'aria-label': this.labelIndicators,
            'aria-owns': this.safeId('__BV_inner_')
          }
        }, this.slides.map(function (slide, n) {
          return h('li', {
            key: "slide_".concat(n),
            class: {
              active: n === _this3.index
            },
            attrs: {
              role: 'button',
              id: _this3.safeId("__BV_indicator_".concat(n + 1, "_")),
              tabindex: _this3.indicators ? '0' : '-1',
              'aria-current': n === _this3.index ? 'true' : 'false',
              'aria-label': "".concat(_this3.labelGotoSlide, " ").concat(n + 1),
              'aria-describedby': _this3.slides[n].id || null,
              'aria-controls': _this3.safeId('__BV_inner_')
            },
            on: {
              click: function click(evt) {
                _this3.handleClick(evt, function () {
                  _this3.setSlide(n);
                });
              },
              keydown: function keydown(evt) {
                _this3.handleClick(evt, function () {
                  _this3.setSlide(n);
                });
              }
            }
          });
        }));
        var on = {
          mouseenter: this.noHoverPause ? noop : this.pause,
          mouseleave: this.noHoverPause ? noop : this.restart,
          focusin: this.pause,
          focusout: this.restart,
          keydown: function keydown(evt) {
            if (/input|textarea/i.test(evt.target.tagName)) {
              /* istanbul ignore next */
              return;
            }
  
            var keyCode = evt.keyCode;
  
            if (keyCode === KEY_CODES.LEFT || keyCode === KEY_CODES.RIGHT) {
              evt.preventDefault();
              evt.stopPropagation();
  
              _this3[keyCode === KEY_CODES.LEFT ? 'prev' : 'next']();
            }
          }
        }; // Touch support event handlers for environment
  
        if (!this.noTouch && hasTouchSupport) {
          // Attach appropriate listeners (prepend event name with '&' for passive mode)
  
          /* istanbul ignore next: JSDOM doesn't support touch events */
          if (hasPointerEventSupport) {
            on['&pointerdown'] = this.touchStart;
            on['&pointerup'] = this.touchEnd;
          } else {
            on['&touchstart'] = this.touchStart;
            on['&touchmove'] = this.touchMove;
            on['&touchend'] = this.touchEnd;
          }
        } // Return the carousel
  
  
        return h('div', {
          staticClass: 'carousel',
          class: {
            slide: !this.noAnimation,
            'carousel-fade': !this.noAnimation && this.fade,
            'pointer-event': !this.noTouch && hasTouchSupport && hasPointerEventSupport
          },
          style: {
            background: this.background
          },
          attrs: {
            role: 'region',
            id: this.safeId(),
            'aria-busy': this.isSliding ? 'true' : 'false'
          },
          on: on
        }, [inner, controls, indicators]);
      }
    });
  
    var props$j = {
      imgSrc: {
        type: String // default: undefined
  
      },
      imgAlt: {
        type: String // default: undefined
  
      },
      imgWidth: {
        type: [Number, String] // default: undefined
  
      },
      imgHeight: {
        type: [Number, String] // default: undefined
  
      },
      imgBlank: {
        type: Boolean,
        default: false
      },
      imgBlankColor: {
        type: String,
        default: 'transparent'
      },
      contentVisibleUp: {
        type: String
      },
      contentTag: {
        type: String,
        default: 'div'
      },
      caption: {
        type: String
      },
      captionHtml: {
        type: String
      },
      captionTag: {
        type: String,
        default: 'h3'
      },
      text: {
        type: String
      },
      textHtml: {
        type: String
      },
      textTag: {
        type: String,
        default: 'p'
      },
      background: {
        type: String
      }
    }; // @vue/component
  
    var BCarouselSlide = /*#__PURE__*/Vue.extend({
      name: 'BCarouselSlide',
      mixins: [idMixin, normalizeSlotMixin],
      inject: {
        bvCarousel: {
          default: function _default() {
            return {
              // Explicitly disable touch if not a child of carousel
              noTouch: true
            };
          }
        }
      },
      props: props$j,
      computed: {
        contentClasses: function contentClasses() {
          return [this.contentVisibleUp ? 'd-none' : '', this.contentVisibleUp ? "d-".concat(this.contentVisibleUp, "-block") : ''];
        },
        computedWidth: function computedWidth() {
          // Use local width, or try parent width
          return this.imgWidth || this.bvCarousel.imgWidth || null;
        },
        computedHeight: function computedHeight() {
          // Use local height, or try parent height
          return this.imgHeight || this.bvCarousel.imgHeight || null;
        }
      },
      render: function render(h) {
        var noDrag = !this.bvCarousel.noTouch && hasTouchSupport;
        var img = this.normalizeSlot('img');
  
        if (!img && (this.imgSrc || this.imgBlank)) {
          img = h(BImg, {
            props: {
              fluidGrow: true,
              block: true,
              src: this.imgSrc,
              blank: this.imgBlank,
              blankColor: this.imgBlankColor,
              width: this.computedWidth,
              height: this.computedHeight,
              alt: this.imgAlt
            },
            // Touch support event handler
            on: noDrag ? {
              dragstart: function dragstart(e) {
                /* istanbul ignore next: difficult to test in JSDOM */
                e.preventDefault();
              }
            } : {}
          });
        }
  
        if (!img) {
          img = h();
        }
  
        var content = h();
        var contentChildren = [this.caption || this.captionHtml ? h(this.captionTag, {
          domProps: htmlOrText(this.captionHtml, this.caption)
        }) : false, this.text || this.textHtml ? h(this.textTag, {
          domProps: htmlOrText(this.textHtml, this.text)
        }) : false, this.normalizeSlot('default') || false];
  
        if (contentChildren.some(Boolean)) {
          content = h(this.contentTag, {
            staticClass: 'carousel-caption',
            class: this.contentClasses
          }, contentChildren.map(function (i) {
            return i || h();
          }));
        }
  
        return h('div', {
          staticClass: 'carousel-item',
          style: {
            background: this.background || this.bvCarousel.background || null
          },
          attrs: {
            id: this.safeId(),
            role: 'listitem'
          }
        }, [img, content]);
      }
    });
  
    var CarouselPlugin =
    /*#__PURE*/
    pluginFactory({
      components: {
        BCarousel: BCarousel,
        BCarouselSlide: BCarouselSlide
      }
    });
  
    // Generic collapse transion helper component
  
    var onEnter = function onEnter(el) {
      el.style.height = 0; // Animaton frame delay neeeded for `appear` to work
  
      requestAF(function () {
        reflow(el);
        el.style.height = "".concat(el.scrollHeight, "px");
      });
    };
  
    var onAfterEnter = function onAfterEnter(el) {
      el.style.height = null;
    };
  
    var onLeave = function onLeave(el) {
      el.style.height = 'auto';
      el.style.display = 'block';
      el.style.height = "".concat(getBCR(el).height, "px");
      reflow(el);
      el.style.height = 0;
    };
  
    var onAfterLeave = function onAfterLeave(el) {
      el.style.height = null;
    }; // Default transition props
    // `appear` will use the enter classes
  
  
    var TRANSITION_PROPS = {
      css: true,
      enterClass: '',
      enterActiveClass: 'collapsing',
      enterToClass: 'collapse show',
      leaveClass: 'collapse show',
      leaveActiveClass: 'collapsing',
      leaveToClass: 'collapse'
    }; // Default transition handlers
    // `appear` will use the enter handlers
  
    var TRANSITION_HANDLERS = {
      enter: onEnter,
      afterEnter: onAfterEnter,
      leave: onLeave,
      afterLeave: onAfterLeave
    }; // @vue/component
  
    var BVCollapse = /*#__PURE__*/Vue.extend({
      name: 'BVCollapse',
      functional: true,
      props: {
        appear: {
          // If `true` (and `visible` is `true` on mount), animate initially visible
          type: Boolean,
          default: false
        }
      },
      render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;
        return h('transition', // We merge in the `appear` prop last
        a(data, {
          props: TRANSITION_PROPS,
          on: TRANSITION_HANDLERS
        }, {
          props: props
        }), // Note: `<tranition>` supports a single root element only
        children);
      }
    });
  
    /**
     * Issue #569: collapse::toggle::state triggered too many times
     * @link https://github.com/bootstrap-vue/bootstrap-vue/issues/569
     */
    // @vue/component
    var listenOnRootMixin = {
      methods: {
        /**
         * Safely register event listeners on the root Vue node.
         * While Vue automatically removes listeners for individual components,
         * when a component registers a listener on root and is destroyed,
         * this orphans a callback because the node is gone,
         * but the root does not clear the callback.
         *
         * When registering a $root listener, it also registers a listener on
         * the component's `beforeDestroy` hook to automatically remove the
         * event listener from the $root instance.
         *
         * @param {string} event
         * @param {function} callback
         * @chainable
         */
        listenOnRoot: function listenOnRoot(event, callback) {
          var _this = this;
  
          this.$root.$on(event, callback);
          this.$on('hook:beforeDestroy', function () {
            _this.$root.$off(event, callback);
          }); // Return this for easy chaining
  
          return this;
        },
  
        /**
         * Safely register a $once event listener on the root Vue node.
         * While Vue automatically removes listeners for individual components,
         * when a component registers a listener on root and is destroyed,
         * this orphans a callback because the node is gone,
         * but the root does not clear the callback.
         *
         * When registering a $root listener, it also registers a listener on
         * the component's `beforeDestroy` hook to automatically remove the
         * event listener from the $root instance.
         *
         * @param {string} event
         * @param {function} callback
         * @chainable
         */
        listenOnRootOnce: function listenOnRootOnce(event, callback) {
          var _this2 = this;
  
          this.$root.$once(event, callback);
          this.$on('hook:beforeDestroy', function () {
            _this2.$root.$off(event, callback);
          }); // Return this for easy chaining
  
          return this;
        },
  
        /**
         * Convenience method for calling vm.$emit on vm.$root.
         * @param {string} event
         * @param {*} args
         * @chainable
         */
        emitOnRoot: function emitOnRoot(event) {
          var _this$$root;
  
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
  
          (_this$$root = this.$root).$emit.apply(_this$$root, [event].concat(args)); // Return this for easy chaining
  
  
          return this;
        }
      }
    };
  
    var EVENT_STATE = 'bv::collapse::state';
    var EVENT_ACCORDION = 'bv::collapse::accordion'; // Private event we emit on `$root` to ensure the toggle state is
    // always synced. It gets emitted even if the state has not changed!
    // This event is NOT to be documented as people should not be using it
  
    var EVENT_STATE_SYNC = 'bv::collapse::sync::state'; // Events we listen to on `$root`
  
    var EVENT_TOGGLE = 'bv::toggle::collapse';
    var EVENT_STATE_REQUEST = 'bv::request::collapse::state'; // @vue/component
  
    var BCollapse = /*#__PURE__*/Vue.extend({
      name: 'BCollapse',
      mixins: [idMixin, listenOnRootMixin, normalizeSlotMixin],
      model: {
        prop: 'visible',
        event: 'input'
      },
      props: {
        isNav: {
          type: Boolean,
          default: false
        },
        accordion: {
          type: String,
          default: null
        },
        visible: {
          type: Boolean,
          default: false
        },
        tag: {
          type: String,
          default: 'div'
        },
        appear: {
          // If `true` (and `visible` is `true` on mount), animate initially visible
          type: Boolean,
          default: false
        }
      },
      data: function data() {
        return {
          show: this.visible,
          transitioning: false
        };
      },
      computed: {
        classObject: function classObject() {
          return {
            'navbar-collapse': this.isNav,
            collapse: !this.transitioning,
            show: this.show && !this.transitioning
          };
        }
      },
      watch: {
        visible: function visible(newVal) {
          if (newVal !== this.show) {
            this.show = newVal;
          }
        },
        show: function show(newVal, oldVal) {
          if (newVal !== oldVal) {
            this.emitState();
          }
        }
      },
      created: function created() {
        this.show = this.visible;
      },
      mounted: function mounted() {
        var _this = this;
  
        this.show = this.visible; // Listen for toggle events to open/close us
  
        this.listenOnRoot(EVENT_TOGGLE, this.handleToggleEvt); // Listen to other collapses for accordion events
  
        this.listenOnRoot(EVENT_ACCORDION, this.handleAccordionEvt);
  
        if (this.isNav) {
          // Set up handlers
          this.setWindowEvents(true);
          this.handleResize();
        }
  
        this.$nextTick(function () {
          _this.emitState();
        }); // Listen for "Sync state" requests from `v-b-toggle`
  
        this.listenOnRoot(EVENT_STATE_REQUEST, function (id) {
          if (id === _this.safeId()) {
            _this.$nextTick(_this.emitSync);
          }
        });
      },
      updated: function updated() {
        // Emit a private event every time this component updates to ensure
        // the toggle button is in sync with the collapse's state
        // It is emitted regardless if the visible state changes
        this.emitSync();
      },
      deactivated: function deactivated()
      /* istanbul ignore next */
      {
        if (this.isNav) {
          this.setWindowEvents(false);
        }
      },
      activated: function activated()
      /* istanbul ignore next */
      {
        if (this.isNav) {
          this.setWindowEvents(true);
        }
  
        this.emitSync();
      },
      beforeDestroy: function beforeDestroy() {
        // Trigger state emit if needed
        this.show = false;
  
        if (this.isNav && isBrowser) {
          this.setWindowEvents(false);
        }
      },
      methods: {
        setWindowEvents: function setWindowEvents(on) {
          eventOnOff(on, window, 'resize', this.handleResize, EVENT_OPTIONS_NO_CAPTURE);
          eventOnOff(on, window, 'orientationchange', this.handleResize, EVENT_OPTIONS_NO_CAPTURE);
        },
        toggle: function toggle() {
          this.show = !this.show;
        },
        onEnter: function onEnter() {
          this.transitioning = true; // This should be moved out so we can add cancellable events
  
          this.$emit('show');
        },
        onAfterEnter: function onAfterEnter() {
          this.transitioning = false;
          this.$emit('shown');
        },
        onLeave: function onLeave() {
          this.transitioning = true; // This should be moved out so we can add cancellable events
  
          this.$emit('hide');
        },
        onAfterLeave: function onAfterLeave() {
          this.transitioning = false;
          this.$emit('hidden');
        },
        emitState: function emitState() {
          this.$emit('input', this.show); // Let `v-b-toggle` know the state of this collapse
  
          this.$root.$emit(EVENT_STATE, this.safeId(), this.show);
  
          if (this.accordion && this.show) {
            // Tell the other collapses in this accordion to close
            this.$root.$emit(EVENT_ACCORDION, this.safeId(), this.accordion);
          }
        },
        emitSync: function emitSync() {
          // Emit a private event every time this component updates to ensure
          // the toggle button is in sync with the collapse's state
          // It is emitted regardless if the visible state changes
          this.$root.$emit(EVENT_STATE_SYNC, this.safeId(), this.show);
        },
        checkDisplayBlock: function checkDisplayBlock() {
          // Check to see if the collapse has `display: block !important` set
          // We can't set `display: none` directly on `this.$el`, as it would
          // trigger a new transition to start (or cancel a current one)
          var restore = hasClass(this.$el, 'show');
          removeClass(this.$el, 'show');
          var isBlock = getCS(this.$el).display === 'block';
  
          if (restore) {
            addClass(this.$el, 'show');
          }
  
          return isBlock;
        },
        clickHandler: function clickHandler(evt) {
          // If we are in a nav/navbar, close the collapse when non-disabled link clicked
          var el = evt.target;
  
          if (!this.isNav || !el || getCS(this.$el).display !== 'block') {
            /* istanbul ignore next: can't test getComputedStyle in JSDOM */
            return;
          }
  
          if (matches(el, '.nav-link,.dropdown-item') || closest('.nav-link,.dropdown-item', el)) {
            if (!this.checkDisplayBlock()) {
              // Only close the collapse if it is not forced to be `display: block !important`
              this.show = false;
            }
          }
        },
        handleToggleEvt: function handleToggleEvt(target) {
          if (target !== this.safeId()) {
            return;
          }
  
          this.toggle();
        },
        handleAccordionEvt: function handleAccordionEvt(openedId, accordion) {
          if (!this.accordion || accordion !== this.accordion) {
            return;
          }
  
          if (openedId === this.safeId()) {
            // Open this collapse if not shown
            if (!this.show) {
              this.toggle();
            }
          } else {
            // Close this collapse if shown
            if (this.show) {
              this.toggle();
            }
          }
        },
        handleResize: function handleResize() {
          // Handler for orientation/resize to set collapsed state in nav/navbar
          this.show = getCS(this.$el).display === 'block';
        }
      },
      render: function render(h) {
        var _this2 = this;
  
        var scope = {
          visible: this.show,
          close: function close() {
            return _this2.show = false;
          }
        };
        var content = h(this.tag, {
          class: this.classObject,
          directives: [{
            name: 'show',
            value: this.show
          }],
          attrs: {
            id: this.safeId()
          },
          on: {
            click: this.clickHandler
          }
        }, [this.normalizeSlot('default', scope)]);
        return h(BVCollapse, {
          props: {
            appear: this.appear
          },
          on: {
            enter: this.onEnter,
            afterEnter: this.onAfterEnter,
            leave: this.onLeave,
            afterLeave: this.onAfterLeave
          }
        }, [content]);
      }
    });
  
    var allListenTypes = {
      hover: true,
      click: true,
      focus: true
    };
    var BVBoundListeners = '__BV_boundEventListeners__';
  
    var getTargets = function getTargets(binding) {
      var targets = keys(binding.modifiers || {}).filter(function (t) {
        return !allListenTypes[t];
      });
  
      if (binding.value) {
        targets.push(binding.value);
      }
  
      return targets;
    };
  
    var bindTargets = function bindTargets(vnode, binding, listenTypes, fn) {
      var targets = getTargets(binding);
  
      var listener = function listener() {
        fn({
          targets: targets,
          vnode: vnode
        });
      };
  
      keys(allListenTypes).forEach(function (type) {
        if (listenTypes[type] || binding.modifiers[type]) {
          eventOn(vnode.elm, type, listener);
          var boundListeners = vnode.elm[BVBoundListeners] || {};
          boundListeners[type] = boundListeners[type] || [];
          boundListeners[type].push(listener);
          vnode.elm[BVBoundListeners] = boundListeners;
        }
      }); // Return the list of targets
  
      return targets;
    };
  
    var unbindTargets = function unbindTargets(vnode, binding, listenTypes) {
      keys(allListenTypes).forEach(function (type) {
        if (listenTypes[type] || binding.modifiers[type]) {
          var boundListeners = vnode.elm[BVBoundListeners] && vnode.elm[BVBoundListeners][type];
  
          if (boundListeners) {
            boundListeners.forEach(function (listener) {
              return eventOff(vnode.elm, type, listener);
            });
            delete vnode.elm[BVBoundListeners][type];
          }
        }
      });
    };
  
    var listenTypes = {
      click: true
    }; // Property key for handler storage
  
    var BV_TOGGLE = '__BV_toggle__';
    var BV_TOGGLE_STATE = '__BV_toggle_STATE__';
    var BV_TOGGLE_CONTROLS = '__BV_toggle_CONTROLS__';
    var BV_TOGGLE_TARGETS = '__BV_toggle_TARGETS__'; // Emitted control event for collapse (emitted to collapse)
  
    var EVENT_TOGGLE$1 = 'bv::toggle::collapse'; // Listen to event for toggle state update (emitted by collapse)
  
    var EVENT_STATE$1 = 'bv::collapse::state'; // Private event emitted on $root to ensure the toggle state is always synced.
    // Gets emitted even if the state of b-collapse has not changed.
    // This event is NOT to be documented as people should not be using it.
  
    var EVENT_STATE_SYNC$1 = 'bv::collapse::sync::state'; // Private event we send to collapse to request state update sync event
  
    var EVENT_STATE_REQUEST$1 = 'bv::request::collapse::state'; // Reset and remove a property from the provided element
  
    var resetProp = function resetProp(el, prop) {
      el[prop] = null;
      delete el[prop];
    }; // Handle targets update
  
  
    var handleTargets = function handleTargets(_ref) {
      var targets = _ref.targets,
          vnode = _ref.vnode;
      targets.forEach(function (target) {
        vnode.context.$root.$emit(EVENT_TOGGLE$1, target);
      });
    }; // Handle directive updates
  
    /* istanbul ignore next: not easy to test */
  
  
    var handleUpdate = function handleUpdate(el, binding, vnode) {
      if (!isBrowser) {
        return;
      }
  
      if (!looseEqual(getTargets(binding), el[BV_TOGGLE_TARGETS])) {
        // Targets have changed, so update accordingly
        unbindTargets(vnode, binding, listenTypes);
        var targets = bindTargets(vnode, binding, listenTypes, handleTargets); // Update targets array to element
  
        el[BV_TOGGLE_TARGETS] = targets; // Add aria attributes to element
  
        el[BV_TOGGLE_CONTROLS] = targets.join(' '); // ensure aria-controls is up to date
  
        setAttr(el, 'aria-controls', el[BV_TOGGLE_CONTROLS]); // Request a state update from targets so that we can ensure
        // expanded state is correct
  
        targets.forEach(function (target) {
          vnode.context.$root.$emit(EVENT_STATE_REQUEST$1, target);
        });
      } // Ensure the collapse class and aria-* attributes persist
      // after element is updated (either by parent re-rendering
      // or changes to this element or its contents
  
  
      if (el[BV_TOGGLE_STATE] === true) {
        addClass(el, 'collapsed');
        setAttr(el, 'aria-expanded', 'true');
      } else if (el[BV_TOGGLE_STATE] === false) {
        removeClass(el, 'collapsed');
        setAttr(el, 'aria-expanded', 'false');
      }
  
      setAttr(el, 'aria-controls', el[BV_TOGGLE_CONTROLS]);
    };
    /*
     * Export our directive
     */
  
  
    var VBToggle = {
      bind: function bind(el, binding, vnode) {
        var targets = bindTargets(vnode, binding, listenTypes, handleTargets);
  
        if (isBrowser && vnode.context && targets.length > 0) {
          // Add targets array to element
          el[BV_TOGGLE_TARGETS] = targets; // Add aria attributes to element
  
          el[BV_TOGGLE_CONTROLS] = targets.join(' '); // State is initially collapsed until we receive a state event
  
          el[BV_TOGGLE_STATE] = false;
          setAttr(el, 'aria-controls', el[BV_TOGGLE_CONTROLS]);
          setAttr(el, 'aria-expanded', 'false'); // If element is not a button, we add `role="button"` for accessibility
  
          if (el.tagName !== 'BUTTON' && !hasAttr(el, 'role')) {
            setAttr(el, 'role', 'button');
          } // Toggle state handler
  
  
          var toggleDirectiveHandler = function toggleDirectiveHandler(id, state) {
            var targets = el[BV_TOGGLE_TARGETS] || [];
  
            if (targets.indexOf(id) !== -1) {
              // Set aria-expanded state
              setAttr(el, 'aria-expanded', state ? 'true' : 'false'); // Set/Clear 'collapsed' class state
  
              el[BV_TOGGLE_STATE] = state;
  
              if (state) {
                removeClass(el, 'collapsed');
              } else {
                addClass(el, 'collapsed');
              }
            }
          }; // Store the toggle handler on the element
  
  
          el[BV_TOGGLE] = toggleDirectiveHandler; // Listen for toggle state changes (public)
  
          vnode.context.$root.$on(EVENT_STATE$1, el[BV_TOGGLE]); // Listen for toggle state sync (private)
  
          vnode.context.$root.$on(EVENT_STATE_SYNC$1, el[BV_TOGGLE]);
        }
      },
      componentUpdated: handleUpdate,
      updated: handleUpdate,
      unbind: function unbind(el, binding, vnode)
      /* istanbul ignore next */
      {
        unbindTargets(vnode, binding, listenTypes); // Remove our $root listener
  
        if (el[BV_TOGGLE]) {
          vnode.context.$root.$off(EVENT_STATE$1, el[BV_TOGGLE]);
          vnode.context.$root.$off(EVENT_STATE_SYNC$1, el[BV_TOGGLE]);
        } // Reset custom  props
  
  
        resetProp(el, BV_TOGGLE);
        resetProp(el, BV_TOGGLE_STATE);
        resetProp(el, BV_TOGGLE_CONTROLS);
        resetProp(el, BV_TOGGLE_TARGETS); // Reset classes/attrs
  
        removeClass(el, 'collapsed');
        removeAttr(el, 'aria-expanded');
        removeAttr(el, 'aria-controls');
        removeAttr(el, 'role');
      }
    };
  
    var CollapsePlugin = /*#__PURE__*/pluginFactory({
      components: {
        BCollapse: BCollapse
      },
      directives: {
        VBToggle: VBToggle
      }
    });
  
    /**!
     * @fileOverview Kickass library to create and place poppers near their reference elements.
     * @version 1.16.1
     * @license
     * Copyright (c) 2016 Federico Zivolo and contributors
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     * SOFTWARE.
     */
    var isBrowser$1 = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';
  
    var timeoutDuration = function () {
      var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
      for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
        if (isBrowser$1 && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
          return 1;
        }
      }
      return 0;
    }();
  
    function microtaskDebounce(fn) {
      var called = false;
      return function () {
        if (called) {
          return;
        }
        called = true;
        window.Promise.resolve().then(function () {
          called = false;
          fn();
        });
      };
    }
  
    function taskDebounce(fn) {
      var scheduled = false;
      return function () {
        if (!scheduled) {
          scheduled = true;
          setTimeout(function () {
            scheduled = false;
            fn();
          }, timeoutDuration);
        }
      };
    }
  
    var supportsMicroTasks = isBrowser$1 && window.Promise;
  
    /**
    * Create a debounced version of a method, that's asynchronously deferred
    * but called in the minimum time possible.
    *
    * @method
    * @memberof Popper.Utils
    * @argument {Function} fn
    * @returns {Function}
    */
    var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;
  
    /**
     * Check if the given variable is a function
     * @method
     * @memberof Popper.Utils
     * @argument {Any} functionToCheck - variable to check
     * @returns {Boolean} answer to: is a function?
     */
    function isFunction$1(functionToCheck) {
      var getType = {};
      return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
    }
  
    /**
     * Get CSS computed property of the given element
     * @method
     * @memberof Popper.Utils
     * @argument {Eement} element
     * @argument {String} property
     */
    function getStyleComputedProperty(element, property) {
      if (element.nodeType !== 1) {
        return [];
      }
      // NOTE: 1 DOM access here
      var window = element.ownerDocument.defaultView;
      var css = window.getComputedStyle(element, null);
      return property ? css[property] : css;
    }
  
    /**
     * Returns the parentNode or the host of the element
     * @method
     * @memberof Popper.Utils
     * @argument {Element} element
     * @returns {Element} parent
     */
    function getParentNode(element) {
      if (element.nodeName === 'HTML') {
        return element;
      }
      return element.parentNode || element.host;
    }
  
    /**
     * Returns the scrolling parent of the given element
     * @method
     * @memberof Popper.Utils
     * @argument {Element} element
     * @returns {Element} scroll parent
     */
    function getScrollParent(element) {
      // Return body, `getScroll` will take care to get the correct `scrollTop` from it
      if (!element) {
        return document.body;
      }
  
      switch (element.nodeName) {
        case 'HTML':
        case 'BODY':
          return element.ownerDocument.body;
        case '#document':
          return element.body;
      }
  
      // Firefox want us to check `-x` and `-y` variations as well
  
      var _getStyleComputedProp = getStyleComputedProperty(element),
          overflow = _getStyleComputedProp.overflow,
          overflowX = _getStyleComputedProp.overflowX,
          overflowY = _getStyleComputedProp.overflowY;
  
      if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
        return element;
      }
  
      return getScrollParent(getParentNode(element));
    }
  
    /**
     * Returns the reference node of the reference object, or the reference object itself.
     * @method
     * @memberof Popper.Utils
     * @param {Element|Object} reference - the reference element (the popper will be relative to this)
     * @returns {Element} parent
     */
    function getReferenceNode(reference) {
      return reference && reference.referenceNode ? reference.referenceNode : reference;
    }
  
    var isIE11 = isBrowser$1 && !!(window.MSInputMethodContext && document.documentMode);
    var isIE10 = isBrowser$1 && /MSIE 10/.test(navigator.userAgent);
  
    /**
     * Determines if the browser is Internet Explorer
     * @method
     * @memberof Popper.Utils
     * @param {Number} version to check
     * @returns {Boolean} isIE
     */
    function isIE$1(version) {
      if (version === 11) {
        return isIE11;
      }
      if (version === 10) {
        return isIE10;
      }
      return isIE11 || isIE10;
    }
  
    /**
     * Returns the offset parent of the given element
     * @method
     * @memberof Popper.Utils
     * @argument {Element} element
     * @returns {Element} offset parent
     */
    function getOffsetParent(element) {
      if (!element) {
        return document.documentElement;
      }
  
      var noOffsetParent = isIE$1(10) ? document.body : null;
  
      // NOTE: 1 DOM access here
      var offsetParent = element.offsetParent || null;
      // Skip hidden elements which don't have an offsetParent
      while (offsetParent === noOffsetParent && element.nextElementSibling) {
        offsetParent = (element = element.nextElementSibling).offsetParent;
      }
  
      var nodeName = offsetParent && offsetParent.nodeName;
  
      if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
        return element ? element.ownerDocument.documentElement : document.documentElement;
      }
  
      // .offsetParent will return the closest TH, TD or TABLE in case
      // no offsetParent is present, I hate this job...
      if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
        return getOffsetParent(offsetParent);
      }
  
      return offsetParent;
    }
  
    function isOffsetContainer(element) {
      var nodeName = element.nodeName;
  
      if (nodeName === 'BODY') {
        return false;
      }
      return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
    }
  
    /**
     * Finds the root node (document, shadowDOM root) of the given element
     * @method
     * @memberof Popper.Utils
     * @argument {Element} node
     * @returns {Element} root node
     */
    function getRoot(node) {
      if (node.parentNode !== null) {
        return getRoot(node.parentNode);
      }
  
      return node;
    }
  
    /**
     * Finds the offset parent common to the two provided nodes
     * @method
     * @memberof Popper.Utils
     * @argument {Element} element1
     * @argument {Element} element2
     * @returns {Element} common offset parent
     */
    function findCommonOffsetParent(element1, element2) {
      // This check is needed to avoid errors in case one of the elements isn't defined for any reason
      if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
        return document.documentElement;
      }
  
      // Here we make sure to give as "start" the element that comes first in the DOM
      var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
      var start = order ? element1 : element2;
      var end = order ? element2 : element1;
  
      // Get common ancestor container
      var range = document.createRange();
      range.setStart(start, 0);
      range.setEnd(end, 0);
      var commonAncestorContainer = range.commonAncestorContainer;
  
      // Both nodes are inside #document
  
      if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
        if (isOffsetContainer(commonAncestorContainer)) {
          return commonAncestorContainer;
        }
  
        return getOffsetParent(commonAncestorContainer);
      }
  
      // one of the nodes is inside shadowDOM, find which one
      var element1root = getRoot(element1);
      if (element1root.host) {
        return findCommonOffsetParent(element1root.host, element2);
      } else {
        return findCommonOffsetParent(element1, getRoot(element2).host);
      }
    }
  
    /**
     * Gets the scroll value of the given element in the given side (top and left)
     * @method
     * @memberof Popper.Utils
     * @argument {Element} element
     * @argument {String} side `top` or `left`
     * @returns {number} amount of scrolled pixels
     */
    function getScroll(element) {
      var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';
  
      var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
      var nodeName = element.nodeName;
  
      if (nodeName === 'BODY' || nodeName === 'HTML') {
        var html = element.ownerDocument.documentElement;
        var scrollingElement = element.ownerDocument.scrollingElement || html;
        return scrollingElement[upperSide];
      }
  
      return element[upperSide];
    }
  
    /*
     * Sum or subtract the element scroll values (left and top) from a given rect object
     * @method
     * @memberof Popper.Utils
     * @param {Object} rect - Rect object you want to change
     * @param {HTMLElement} element - The element from the function reads the scroll values
     * @param {Boolean} subtract - set to true if you want to subtract the scroll values
     * @return {Object} rect - The modifier rect object
     */
    function includeScroll(rect, element) {
      var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      var modifier = subtract ? -1 : 1;
      rect.top += scrollTop * modifier;
      rect.bottom += scrollTop * modifier;
      rect.left += scrollLeft * modifier;
      rect.right += scrollLeft * modifier;
      return rect;
    }
  
    /*
     * Helper to detect borders of a given element
     * @method
     * @memberof Popper.Utils
     * @param {CSSStyleDeclaration} styles
     * Result of `getStyleComputedProperty` on the given element
     * @param {String} axis - `x` or `y`
     * @return {number} borders - The borders size of the given axis
     */
  
    function getBordersSize(styles, axis) {
      var sideA = axis === 'x' ? 'Left' : 'Top';
      var sideB = sideA === 'Left' ? 'Right' : 'Bottom';
  
      return parseFloat(styles['border' + sideA + 'Width']) + parseFloat(styles['border' + sideB + 'Width']);
    }
  
    function getSize(axis, body, html, computedStyle) {
      return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE$1(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
    }
  
    function getWindowSizes(document) {
      var body = document.body;
      var html = document.documentElement;
      var computedStyle = isIE$1(10) && getComputedStyle(html);
  
      return {
        height: getSize('Height', body, html, computedStyle),
        width: getSize('Width', body, html, computedStyle)
      };
    }
  
    var classCallCheck = function (instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };
  
    var createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
  
      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
  
  
  
  
  
    var defineProperty$1 = function (obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
  
      return obj;
    };
  
    var _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
  
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
  
      return target;
    };
  
    /**
     * Given element offsets, generate an output similar to getBoundingClientRect
     * @method
     * @memberof Popper.Utils
     * @argument {Object} offsets
     * @returns {Object} ClientRect like output
     */
    function getClientRect(offsets) {
      return _extends({}, offsets, {
        right: offsets.left + offsets.width,
        bottom: offsets.top + offsets.height
      });
    }
  
    /**
     * Get bounding client rect of given element
     * @method
     * @memberof Popper.Utils
     * @param {HTMLElement} element
     * @return {Object} client rect
     */
    function getBoundingClientRect(element) {
      var rect = {};
  
      // IE10 10 FIX: Please, don't ask, the element isn't
      // considered in DOM in some circumstances...
      // This isn't reproducible in IE10 compatibility mode of IE11
      try {
        if (isIE$1(10)) {
          rect = element.getBoundingClientRect();
          var scrollTop = getScroll(element, 'top');
          var scrollLeft = getScroll(element, 'left');
          rect.top += scrollTop;
          rect.left += scrollLeft;
          rect.bottom += scrollTop;
          rect.right += scrollLeft;
        } else {
          rect = element.getBoundingClientRect();
        }
      } catch (e) {}
  
      var result = {
        left: rect.left,
        top: rect.top,
        width: rect.right - rect.left,
        height: rect.bottom - rect.top
      };
  
      // subtract scrollbar size from sizes
      var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
      var width = sizes.width || element.clientWidth || result.width;
      var height = sizes.height || element.clientHeight || result.height;
  
      var horizScrollbar = element.offsetWidth - width;
      var vertScrollbar = element.offsetHeight - height;
  
      // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
      // we make this check conditional for performance reasons
      if (horizScrollbar || vertScrollbar) {
        var styles = getStyleComputedProperty(element);
        horizScrollbar -= getBordersSize(styles, 'x');
        vertScrollbar -= getBordersSize(styles, 'y');
  
        result.width -= horizScrollbar;
        result.height -= vertScrollbar;
      }
  
      return getClientRect(result);
    }
  
    function getOffsetRectRelativeToArbitraryNode(children, parent) {
      var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  
      var isIE10 = isIE$1(10);
      var isHTML = parent.nodeName === 'HTML';
      var childrenRect = getBoundingClientRect(children);
      var parentRect = getBoundingClientRect(parent);
      var scrollParent = getScrollParent(children);
  
      var styles = getStyleComputedProperty(parent);
      var borderTopWidth = parseFloat(styles.borderTopWidth);
      var borderLeftWidth = parseFloat(styles.borderLeftWidth);
  
      // In cases where the parent is fixed, we must ignore negative scroll in offset calc
      if (fixedPosition && isHTML) {
        parentRect.top = Math.max(parentRect.top, 0);
        parentRect.left = Math.max(parentRect.left, 0);
      }
      var offsets = getClientRect({
        top: childrenRect.top - parentRect.top - borderTopWidth,
        left: childrenRect.left - parentRect.left - borderLeftWidth,
        width: childrenRect.width,
        height: childrenRect.height
      });
      offsets.marginTop = 0;
      offsets.marginLeft = 0;
  
      // Subtract margins of documentElement in case it's being used as parent
      // we do this only on HTML because it's the only element that behaves
      // differently when margins are applied to it. The margins are included in
      // the box of the documentElement, in the other cases not.
      if (!isIE10 && isHTML) {
        var marginTop = parseFloat(styles.marginTop);
        var marginLeft = parseFloat(styles.marginLeft);
  
        offsets.top -= borderTopWidth - marginTop;
        offsets.bottom -= borderTopWidth - marginTop;
        offsets.left -= borderLeftWidth - marginLeft;
        offsets.right -= borderLeftWidth - marginLeft;
  
        // Attach marginTop and marginLeft because in some circumstances we may need them
        offsets.marginTop = marginTop;
        offsets.marginLeft = marginLeft;
      }
  
      if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
        offsets = includeScroll(offsets, parent);
      }
  
      return offsets;
    }
  
    function getViewportOffsetRectRelativeToArtbitraryNode(element) {
      var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  
      var html = element.ownerDocument.documentElement;
      var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
      var width = Math.max(html.clientWidth, window.innerWidth || 0);
      var height = Math.max(html.clientHeight, window.innerHeight || 0);
  
      var scrollTop = !excludeScroll ? getScroll(html) : 0;
      var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;
  
      var offset = {
        top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
        left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
        width: width,
        height: height
      };
  
      return getClientRect(offset);
    }
  
    /**
     * Check if the given element is fixed or is inside a fixed parent
     * @method
     * @memberof Popper.Utils
     * @argument {Element} element
     * @argument {Element} customContainer
     * @returns {Boolean} answer to "isFixed?"
     */
    function isFixed(element) {
      var nodeName = element.nodeName;
      if (nodeName === 'BODY' || nodeName === 'HTML') {
        return false;
      }
      if (getStyleComputedProperty(element, 'position') === 'fixed') {
        return true;
      }
      var parentNode = getParentNode(element);
      if (!parentNode) {
        return false;
      }
      return isFixed(parentNode);
    }
  
    /**
     * Finds the first parent of an element that has a transformed property defined
     * @method
     * @memberof Popper.Utils
     * @argument {Element} element
     * @returns {Element} first transformed parent or documentElement
     */
  
    function getFixedPositionOffsetParent(element) {
      // This check is needed to avoid errors in case one of the elements isn't defined for any reason
      if (!element || !element.parentElement || isIE$1()) {
        return document.documentElement;
      }
      var el = element.parentElement;
      while (el && getStyleComputedProperty(el, 'transform') === 'none') {
        el = el.parentElement;
      }
      return el || document.documentElement;
    }
  
    /**
     * Computed the boundaries limits and return them
     * @method
     * @memberof Popper.Utils
     * @param {HTMLElement} popper
     * @param {HTMLElement} reference
     * @param {number} padding
     * @param {HTMLElement} boundariesElement - Element used to define the boundaries
     * @param {Boolean} fixedPosition - Is in fixed position mode
     * @returns {Object} Coordinates of the boundaries
     */
    function getBoundaries(popper, reference, padding, boundariesElement) {
      var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  
      // NOTE: 1 DOM access here
  
      var boundaries = { top: 0, left: 0 };
      var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  
      // Handle viewport case
      if (boundariesElement === 'viewport') {
        boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
      } else {
        // Handle other cases based on DOM element used as boundaries
        var boundariesNode = void 0;
        if (boundariesElement === 'scrollParent') {
          boundariesNode = getScrollParent(getParentNode(reference));
          if (boundariesNode.nodeName === 'BODY') {
            boundariesNode = popper.ownerDocument.documentElement;
          }
        } else if (boundariesElement === 'window') {
          boundariesNode = popper.ownerDocument.documentElement;
        } else {
          boundariesNode = boundariesElement;
        }
  
        var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);
  
        // In case of HTML, we need a different computation
        if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
          var _getWindowSizes = getWindowSizes(popper.ownerDocument),
              height = _getWindowSizes.height,
              width = _getWindowSizes.width;
  
          boundaries.top += offsets.top - offsets.marginTop;
          boundaries.bottom = height + offsets.top;
          boundaries.left += offsets.left - offsets.marginLeft;
          boundaries.right = width + offsets.left;
        } else {
          // for all the other DOM elements, this one is good
          boundaries = offsets;
        }
      }
  
      // Add paddings
      padding = padding || 0;
      var isPaddingNumber = typeof padding === 'number';
      boundaries.left += isPaddingNumber ? padding : padding.left || 0;
      boundaries.top += isPaddingNumber ? padding : padding.top || 0;
      boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
      boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;
  
      return boundaries;
    }
  
    function getArea(_ref) {
      var width = _ref.width,
          height = _ref.height;
  
      return width * height;
    }
  
    /**
     * Utility used to transform the `auto` placement to the placement with more
     * available space.
     * @method
     * @memberof Popper.Utils
     * @argument {Object} data - The data object generated by update method
     * @argument {Object} options - Modifiers configuration and options
     * @returns {Object} The data object, properly modified
     */
    function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
      var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
  
      if (placement.indexOf('auto') === -1) {
        return placement;
      }
  
      var boundaries = getBoundaries(popper, reference, padding, boundariesElement);
  
      var rects = {
        top: {
          width: boundaries.width,
          height: refRect.top - boundaries.top
        },
        right: {
          width: boundaries.right - refRect.right,
          height: boundaries.height
        },
        bottom: {
          width: boundaries.width,
          height: boundaries.bottom - refRect.bottom
        },
        left: {
          width: refRect.left - boundaries.left,
          height: boundaries.height
        }
      };
  
      var sortedAreas = Object.keys(rects).map(function (key) {
        return _extends({
          key: key
        }, rects[key], {
          area: getArea(rects[key])
        });
      }).sort(function (a, b) {
        return b.area - a.area;
      });
  
      var filteredAreas = sortedAreas.filter(function (_ref2) {
        var width = _ref2.width,
            height = _ref2.height;
        return width >= popper.clientWidth && height >= popper.clientHeight;
      });
  
      var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;
  
      var variation = placement.split('-')[1];
  
      return computedPlacement + (variation ? '-' + variation : '');
    }
  
    /**
     * Get offsets to the reference element
     * @method
     * @memberof Popper.Utils
     * @param {Object} state
     * @param {Element} popper - the popper element
     * @param {Element} reference - the reference element (the popper will be relative to this)
     * @param {Element} fixedPosition - is in fixed position mode
     * @returns {Object} An object containing the offsets which will be applied to the popper
     */
    function getReferenceOffsets(state, popper, reference) {
      var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  
      var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
      return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
    }
  
    /**
     * Get the outer sizes of the given element (offset size + margins)
     * @method
     * @memberof Popper.Utils
     * @argument {Element} element
     * @returns {Object} object containing width and height properties
     */
    function getOuterSizes(element) {
      var window = element.ownerDocument.defaultView;
      var styles = window.getComputedStyle(element);
      var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
      var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
      var result = {
        width: element.offsetWidth + y,
        height: element.offsetHeight + x
      };
      return result;
    }
  
    /**
     * Get the opposite placement of the given one
     * @method
     * @memberof Popper.Utils
     * @argument {String} placement
     * @returns {String} flipped placement
     */
    function getOppositePlacement(placement) {
      var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
      return placement.replace(/left|right|bottom|top/g, function (matched) {
        return hash[matched];
      });
    }
  
    /**
     * Get offsets to the popper
     * @method
     * @memberof Popper.Utils
     * @param {Object} position - CSS position the Popper will get applied
     * @param {HTMLElement} popper - the popper element
     * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
     * @param {String} placement - one of the valid placement options
     * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
     */
    function getPopperOffsets(popper, referenceOffsets, placement) {
      placement = placement.split('-')[0];
  
      // Get popper node sizes
      var popperRect = getOuterSizes(popper);
  
      // Add position, width and height to our offsets object
      var popperOffsets = {
        width: popperRect.width,
        height: popperRect.height
      };
  
      // depending by the popper placement we have to compute its offsets slightly differently
      var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
      var mainSide = isHoriz ? 'top' : 'left';
      var secondarySide = isHoriz ? 'left' : 'top';
      var measurement = isHoriz ? 'height' : 'width';
      var secondaryMeasurement = !isHoriz ? 'height' : 'width';
  
      popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
      if (placement === secondarySide) {
        popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
      } else {
        popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
      }
  
      return popperOffsets;
    }
  
    /**
     * Mimics the `find` method of Array
     * @method
     * @memberof Popper.Utils
     * @argument {Array} arr
     * @argument prop
     * @argument value
     * @returns index or -1
     */
    function find(arr, check) {
      // use native find if supported
      if (Array.prototype.find) {
        return arr.find(check);
      }
  
      // use `filter` to obtain the same behavior of `find`
      return arr.filter(check)[0];
    }
  
    /**
     * Return the index of the matching object
     * @method
     * @memberof Popper.Utils
     * @argument {Array} arr
     * @argument prop
     * @argument value
     * @returns index or -1
     */
    function findIndex(arr, prop, value) {
      // use native findIndex if supported
      if (Array.prototype.findIndex) {
        return arr.findIndex(function (cur) {
          return cur[prop] === value;
        });
      }
  
      // use `find` + `indexOf` if `findIndex` isn't supported
      var match = find(arr, function (obj) {
        return obj[prop] === value;
      });
      return arr.indexOf(match);
    }
  
    /**
     * Loop trough the list of modifiers and run them in order,
     * each of them will then edit the data object.
     * @method
     * @memberof Popper.Utils
     * @param {dataObject} data
     * @param {Array} modifiers
     * @param {String} ends - Optional modifier name used as stopper
     * @returns {dataObject}
     */
    function runModifiers(modifiers, data, ends) {
      var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));
  
      modifiersToRun.forEach(function (modifier) {
        if (modifier['function']) {
          // eslint-disable-line dot-notation
          console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
        }
        var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
        if (modifier.enabled && isFunction$1(fn)) {
          // Add properties to offsets to make them a complete clientRect object
          // we do this before each modifier to make sure the previous one doesn't
          // mess with these values
          data.offsets.popper = getClientRect(data.offsets.popper);
          data.offsets.reference = getClientRect(data.offsets.reference);
  
          data = fn(data, modifier);
        }
      });
  
      return data;
    }
  
    /**
     * Updates the position of the popper, computing the new offsets and applying
     * the new style.<br />
     * Prefer `scheduleUpdate` over `update` because of performance reasons.
     * @method
     * @memberof Popper
     */
    function update() {
      // if popper is destroyed, don't perform any further update
      if (this.state.isDestroyed) {
        return;
      }
  
      var data = {
        instance: this,
        styles: {},
        arrowStyles: {},
        attributes: {},
        flipped: false,
        offsets: {}
      };
  
      // compute reference element offsets
      data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);
  
      // compute auto placement, store placement inside the data object,
      // modifiers will be able to edit `placement` if needed
      // and refer to originalPlacement to know the original value
      data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);
  
      // store the computed placement inside `originalPlacement`
      data.originalPlacement = data.placement;
  
      data.positionFixed = this.options.positionFixed;
  
      // compute the popper offsets
      data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
  
      data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';
  
      // run the modifiers
      data = runModifiers(this.modifiers, data);
  
      // the first `update` will call `onCreate` callback
      // the other ones will call `onUpdate` callback
      if (!this.state.isCreated) {
        this.state.isCreated = true;
        this.options.onCreate(data);
      } else {
        this.options.onUpdate(data);
      }
    }
  
    /**
     * Helper used to know if the given modifier is enabled.
     * @method
     * @memberof Popper.Utils
     * @returns {Boolean}
     */
    function isModifierEnabled(modifiers, modifierName) {
      return modifiers.some(function (_ref) {
        var name = _ref.name,
            enabled = _ref.enabled;
        return enabled && name === modifierName;
      });
    }
  
    /**
     * Get the prefixed supported property name
     * @method
     * @memberof Popper.Utils
     * @argument {String} property (camelCase)
     * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
     */
    function getSupportedPropertyName(property) {
      var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
      var upperProp = property.charAt(0).toUpperCase() + property.slice(1);
  
      for (var i = 0; i < prefixes.length; i++) {
        var prefix = prefixes[i];
        var toCheck = prefix ? '' + prefix + upperProp : property;
        if (typeof document.body.style[toCheck] !== 'undefined') {
          return toCheck;
        }
      }
      return null;
    }
  
    /**
     * Destroys the popper.
     * @method
     * @memberof Popper
     */
    function destroy$1() {
      this.state.isDestroyed = true;
  
      // touch DOM only if `applyStyle` modifier is enabled
      if (isModifierEnabled(this.modifiers, 'applyStyle')) {
        this.popper.removeAttribute('x-placement');
        this.popper.style.position = '';
        this.popper.style.top = '';
        this.popper.style.left = '';
        this.popper.style.right = '';
        this.popper.style.bottom = '';
        this.popper.style.willChange = '';
        this.popper.style[getSupportedPropertyName('transform')] = '';
      }
  
      this.disableEventListeners();
  
      // remove the popper if user explicitly asked for the deletion on destroy
      // do not use `remove` because IE11 doesn't support it
      if (this.options.removeOnDestroy) {
        this.popper.parentNode.removeChild(this.popper);
      }
      return this;
    }
  
    /**
     * Get the window associated with the element
     * @argument {Element} element
     * @returns {Window}
     */
    function getWindow(element) {
      var ownerDocument = element.ownerDocument;
      return ownerDocument ? ownerDocument.defaultView : window;
    }
  
    function attachToScrollParents(scrollParent, event, callback, scrollParents) {
      var isBody = scrollParent.nodeName === 'BODY';
      var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
      target.addEventListener(event, callback, { passive: true });
  
      if (!isBody) {
        attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
      }
      scrollParents.push(target);
    }
  
    /**
     * Setup needed event listeners used to update the popper position
     * @method
     * @memberof Popper.Utils
     * @private
     */
    function setupEventListeners(reference, options, state, updateBound) {
      // Resize event listener on window
      state.updateBound = updateBound;
      getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });
  
      // Scroll event listener on scroll parents
      var scrollElement = getScrollParent(reference);
      attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
      state.scrollElement = scrollElement;
      state.eventsEnabled = true;
  
      return state;
    }
  
    /**
     * It will add resize/scroll events and start recalculating
     * position of the popper element when they are triggered.
     * @method
     * @memberof Popper
     */
    function enableEventListeners() {
      if (!this.state.eventsEnabled) {
        this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
      }
    }
  
    /**
     * Remove event listeners used to update the popper position
     * @method
     * @memberof Popper.Utils
     * @private
     */
    function removeEventListeners(reference, state) {
      // Remove resize event listener on window
      getWindow(reference).removeEventListener('resize', state.updateBound);
  
      // Remove scroll event listener on scroll parents
      state.scrollParents.forEach(function (target) {
        target.removeEventListener('scroll', state.updateBound);
      });
  
      // Reset state
      state.updateBound = null;
      state.scrollParents = [];
      state.scrollElement = null;
      state.eventsEnabled = false;
      return state;
    }
  
    /**
     * It will remove resize/scroll events and won't recalculate popper position
     * when they are triggered. It also won't trigger `onUpdate` callback anymore,
     * unless you call `update` method manually.
     * @method
     * @memberof Popper
     */
    function disableEventListeners() {
      if (this.state.eventsEnabled) {
        cancelAnimationFrame(this.scheduleUpdate);
        this.state = removeEventListeners(this.reference, this.state);
      }
    }
  
    /**
     * Tells if a given input is a number
     * @method
     * @memberof Popper.Utils
     * @param {*} input to check
     * @return {Boolean}
     */
    function isNumeric(n) {
      return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
    }
  
    /**
     * Set the style to the given popper
     * @method
     * @memberof Popper.Utils
     * @argument {Element} element - Element to apply the style to
     * @argument {Object} styles
     * Object with a list of properties and values which will be applied to the element
     */
    function setStyles(element, styles) {
      Object.keys(styles).forEach(function (prop) {
        var unit = '';
        // add unit if the value is numeric and is one of the following
        if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
          unit = 'px';
        }
        element.style[prop] = styles[prop] + unit;
      });
    }
  
    /**
     * Set the attributes to the given popper
     * @method
     * @memberof Popper.Utils
     * @argument {Element} element - Element to apply the attributes to
     * @argument {Object} styles
     * Object with a list of properties and values which will be applied to the element
     */
    function setAttributes(element, attributes) {
      Object.keys(attributes).forEach(function (prop) {
        var value = attributes[prop];
        if (value !== false) {
          element.setAttribute(prop, attributes[prop]);
        } else {
          element.removeAttribute(prop);
        }
      });
    }
  
    /**
     * @function
     * @memberof Modifiers
     * @argument {Object} data - The data object generated by `update` method
     * @argument {Object} data.styles - List of style properties - values to apply to popper element
     * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
     * @argument {Object} options - Modifiers configuration and options
     * @returns {Object} The same data object
     */
    function applyStyle(data) {
      // any property present in `data.styles` will be applied to the popper,
      // in this way we can make the 3rd party modifiers add custom styles to it
      // Be aware, modifiers could override the properties defined in the previous
      // lines of this modifier!
      setStyles(data.instance.popper, data.styles);
  
      // any property present in `data.attributes` will be applied to the popper,
      // they will be set as HTML attributes of the element
      setAttributes(data.instance.popper, data.attributes);
  
      // if arrowElement is defined and arrowStyles has some properties
      if (data.arrowElement && Object.keys(data.arrowStyles).length) {
        setStyles(data.arrowElement, data.arrowStyles);
      }
  
      return data;
    }
  
    /**
     * Set the x-placement attribute before everything else because it could be used
     * to add margins to the popper margins needs to be calculated to get the
     * correct popper offsets.
     * @method
     * @memberof Popper.modifiers
     * @param {HTMLElement} reference - The reference element used to position the popper
     * @param {HTMLElement} popper - The HTML element used as popper
     * @param {Object} options - Popper.js options
     */
    function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
      // compute reference element offsets
      var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);
  
      // compute auto placement, store placement inside the data object,
      // modifiers will be able to edit `placement` if needed
      // and refer to originalPlacement to know the original value
      var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);
  
      popper.setAttribute('x-placement', placement);
  
      // Apply `position` to popper before anything else because
      // without the position applied we can't guarantee correct computations
      setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });
  
      return options;
    }
  
    /**
     * @function
     * @memberof Popper.Utils
     * @argument {Object} data - The data object generated by `update` method
     * @argument {Boolean} shouldRound - If the offsets should be rounded at all
     * @returns {Object} The popper's position offsets rounded
     *
     * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
     * good as it can be within reason.
     * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
     *
     * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
     * as well on High DPI screens).
     *
     * Firefox prefers no rounding for positioning and does not have blurriness on
     * high DPI screens.
     *
     * Only horizontal placement and left/right values need to be considered.
     */
    function getRoundedOffsets(data, shouldRound) {
      var _data$offsets = data.offsets,
          popper = _data$offsets.popper,
          reference = _data$offsets.reference;
      var round = Math.round,
          floor = Math.floor;
  
      var noRound = function noRound(v) {
        return v;
      };
  
      var referenceWidth = round(reference.width);
      var popperWidth = round(popper.width);
  
      var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
      var isVariation = data.placement.indexOf('-') !== -1;
      var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
      var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;
  
      var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
      var verticalToInteger = !shouldRound ? noRound : round;
  
      return {
        left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
        top: verticalToInteger(popper.top),
        bottom: verticalToInteger(popper.bottom),
        right: horizontalToInteger(popper.right)
      };
    }
  
    var isFirefox = isBrowser$1 && /Firefox/i.test(navigator.userAgent);
  
    /**
     * @function
     * @memberof Modifiers
     * @argument {Object} data - The data object generated by `update` method
     * @argument {Object} options - Modifiers configuration and options
     * @returns {Object} The data object, properly modified
     */
    function computeStyle(data, options) {
      var x = options.x,
          y = options.y;
      var popper = data.offsets.popper;
  
      // Remove this legacy support in Popper.js v2
  
      var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
        return modifier.name === 'applyStyle';
      }).gpuAcceleration;
      if (legacyGpuAccelerationOption !== undefined) {
        console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
      }
      var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;
  
      var offsetParent = getOffsetParent(data.instance.popper);
      var offsetParentRect = getBoundingClientRect(offsetParent);
  
      // Styles
      var styles = {
        position: popper.position
      };
  
      var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);
  
      var sideA = x === 'bottom' ? 'top' : 'bottom';
      var sideB = y === 'right' ? 'left' : 'right';
  
      // if gpuAcceleration is set to `true` and transform is supported,
      //  we use `translate3d` to apply the position to the popper we
      // automatically use the supported prefixed version if needed
      var prefixedProperty = getSupportedPropertyName('transform');
  
      // now, let's make a step back and look at this code closely (wtf?)
      // If the content of the popper grows once it's been positioned, it
      // may happen that the popper gets misplaced because of the new content
      // overflowing its reference element
      // To avoid this problem, we provide two options (x and y), which allow
      // the consumer to define the offset origin.
      // If we position a popper on top of a reference element, we can set
      // `x` to `top` to make the popper grow towards its top instead of
      // its bottom.
      var left = void 0,
          top = void 0;
      if (sideA === 'bottom') {
        // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
        // and not the bottom of the html element
        if (offsetParent.nodeName === 'HTML') {
          top = -offsetParent.clientHeight + offsets.bottom;
        } else {
          top = -offsetParentRect.height + offsets.bottom;
        }
      } else {
        top = offsets.top;
      }
      if (sideB === 'right') {
        if (offsetParent.nodeName === 'HTML') {
          left = -offsetParent.clientWidth + offsets.right;
        } else {
          left = -offsetParentRect.width + offsets.right;
        }
      } else {
        left = offsets.left;
      }
      if (gpuAcceleration && prefixedProperty) {
        styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
        styles[sideA] = 0;
        styles[sideB] = 0;
        styles.willChange = 'transform';
      } else {
        // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
        var invertTop = sideA === 'bottom' ? -1 : 1;
        var invertLeft = sideB === 'right' ? -1 : 1;
        styles[sideA] = top * invertTop;
        styles[sideB] = left * invertLeft;
        styles.willChange = sideA + ', ' + sideB;
      }
  
      // Attributes
      var attributes = {
        'x-placement': data.placement
      };
  
      // Update `data` attributes, styles and arrowStyles
      data.attributes = _extends({}, attributes, data.attributes);
      data.styles = _extends({}, styles, data.styles);
      data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);
  
      return data;
    }
  
    /**
     * Helper used to know if the given modifier depends from another one.<br />
     * It checks if the needed modifier is listed and enabled.
     * @method
     * @memberof Popper.Utils
     * @param {Array} modifiers - list of modifiers
     * @param {String} requestingName - name of requesting modifier
     * @param {String} requestedName - name of requested modifier
     * @returns {Boolean}
     */
    function isModifierRequired(modifiers, requestingName, requestedName) {
      var requesting = find(modifiers, function (_ref) {
        var name = _ref.name;
        return name === requestingName;
      });
  
      var isRequired = !!requesting && modifiers.some(function (modifier) {
        return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
      });
  
      if (!isRequired) {
        var _requesting = '`' + requestingName + '`';
        var requested = '`' + requestedName + '`';
        console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
      }
      return isRequired;
    }
  
    /**
     * @function
     * @memberof Modifiers
     * @argument {Object} data - The data object generated by update method
     * @argument {Object} options - Modifiers configuration and options
     * @returns {Object} The data object, properly modified
     */
    function arrow(data, options) {
      var _data$offsets$arrow;
  
      // arrow depends on keepTogether in order to work
      if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
        return data;
      }
  
      var arrowElement = options.element;
  
      // if arrowElement is a string, suppose it's a CSS selector
      if (typeof arrowElement === 'string') {
        arrowElement = data.instance.popper.querySelector(arrowElement);
  
        // if arrowElement is not found, don't run the modifier
        if (!arrowElement) {
          return data;
        }
      } else {
        // if the arrowElement isn't a query selector we must check that the
        // provided DOM node is child of its popper node
        if (!data.instance.popper.contains(arrowElement)) {
          console.warn('WARNING: `arrow.element` must be child of its popper element!');
          return data;
        }
      }
  
      var placement = data.placement.split('-')[0];
      var _data$offsets = data.offsets,
          popper = _data$offsets.popper,
          reference = _data$offsets.reference;
  
      var isVertical = ['left', 'right'].indexOf(placement) !== -1;
  
      var len = isVertical ? 'height' : 'width';
      var sideCapitalized = isVertical ? 'Top' : 'Left';
      var side = sideCapitalized.toLowerCase();
      var altSide = isVertical ? 'left' : 'top';
      var opSide = isVertical ? 'bottom' : 'right';
      var arrowElementSize = getOuterSizes(arrowElement)[len];
  
      //
      // extends keepTogether behavior making sure the popper and its
      // reference have enough pixels in conjunction
      //
  
      // top/left side
      if (reference[opSide] - arrowElementSize < popper[side]) {
        data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
      }
      // bottom/right side
      if (reference[side] + arrowElementSize > popper[opSide]) {
        data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
      }
      data.offsets.popper = getClientRect(data.offsets.popper);
  
      // compute center of the popper
      var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;
  
      // Compute the sideValue using the updated popper offsets
      // take popper margin in account because we don't have this info available
      var css = getStyleComputedProperty(data.instance.popper);
      var popperMarginSide = parseFloat(css['margin' + sideCapitalized]);
      var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width']);
      var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;
  
      // prevent arrowElement from being placed not contiguously to its popper
      sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);
  
      data.arrowElement = arrowElement;
      data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty$1(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty$1(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);
  
      return data;
    }
  
    /**
     * Get the opposite placement variation of the given one
     * @method
     * @memberof Popper.Utils
     * @argument {String} placement variation
     * @returns {String} flipped placement variation
     */
    function getOppositeVariation(variation) {
      if (variation === 'end') {
        return 'start';
      } else if (variation === 'start') {
        return 'end';
      }
      return variation;
    }
  
    /**
     * List of accepted placements to use as values of the `placement` option.<br />
     * Valid placements are:
     * - `auto`
     * - `top`
     * - `right`
     * - `bottom`
     * - `left`
     *
     * Each placement can have a variation from this list:
     * - `-start`
     * - `-end`
     *
     * Variations are interpreted easily if you think of them as the left to right
     * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
     * is right.<br />
     * Vertically (`left` and `right`), `start` is top and `end` is bottom.
     *
     * Some valid examples are:
     * - `top-end` (on top of reference, right aligned)
     * - `right-start` (on right of reference, top aligned)
     * - `bottom` (on bottom, centered)
     * - `auto-end` (on the side with more space available, alignment depends by placement)
     *
     * @static
     * @type {Array}
     * @enum {String}
     * @readonly
     * @method placements
     * @memberof Popper
     */
    var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];
  
    // Get rid of `auto` `auto-start` and `auto-end`
    var validPlacements = placements.slice(3);
  
    /**
     * Given an initial placement, returns all the subsequent placements
     * clockwise (or counter-clockwise).
     *
     * @method
     * @memberof Popper.Utils
     * @argument {String} placement - A valid placement (it accepts variations)
     * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
     * @returns {Array} placements including their variations
     */
    function clockwise(placement) {
      var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  
      var index = validPlacements.indexOf(placement);
      var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
      return counter ? arr.reverse() : arr;
    }
  
    var BEHAVIORS = {
      FLIP: 'flip',
      CLOCKWISE: 'clockwise',
      COUNTERCLOCKWISE: 'counterclockwise'
    };
  
    /**
     * @function
     * @memberof Modifiers
     * @argument {Object} data - The data object generated by update method
     * @argument {Object} options - Modifiers configuration and options
     * @returns {Object} The data object, properly modified
     */
    function flip(data, options) {
      // if `inner` modifier is enabled, we can't use the `flip` modifier
      if (isModifierEnabled(data.instance.modifiers, 'inner')) {
        return data;
      }
  
      if (data.flipped && data.placement === data.originalPlacement) {
        // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
        return data;
      }
  
      var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);
  
      var placement = data.placement.split('-')[0];
      var placementOpposite = getOppositePlacement(placement);
      var variation = data.placement.split('-')[1] || '';
  
      var flipOrder = [];
  
      switch (options.behavior) {
        case BEHAVIORS.FLIP:
          flipOrder = [placement, placementOpposite];
          break;
        case BEHAVIORS.CLOCKWISE:
          flipOrder = clockwise(placement);
          break;
        case BEHAVIORS.COUNTERCLOCKWISE:
          flipOrder = clockwise(placement, true);
          break;
        default:
          flipOrder = options.behavior;
      }
  
      flipOrder.forEach(function (step, index) {
        if (placement !== step || flipOrder.length === index + 1) {
          return data;
        }
  
        placement = data.placement.split('-')[0];
        placementOpposite = getOppositePlacement(placement);
  
        var popperOffsets = data.offsets.popper;
        var refOffsets = data.offsets.reference;
  
        // using floor because the reference offsets may contain decimals we are not going to consider here
        var floor = Math.floor;
        var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);
  
        var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
        var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
        var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
        var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);
  
        var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;
  
        // flip the variation if required
        var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  
        // flips variation if reference element overflows boundaries
        var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);
  
        // flips variation if popper content overflows boundaries
        var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);
  
        var flippedVariation = flippedVariationByRef || flippedVariationByContent;
  
        if (overlapsRef || overflowsBoundaries || flippedVariation) {
          // this boolean to detect any flip loop
          data.flipped = true;
  
          if (overlapsRef || overflowsBoundaries) {
            placement = flipOrder[index + 1];
          }
  
          if (flippedVariation) {
            variation = getOppositeVariation(variation);
          }
  
          data.placement = placement + (variation ? '-' + variation : '');
  
          // this object contains `position`, we want to preserve it along with
          // any additional property we may add in the future
          data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));
  
          data = runModifiers(data.instance.modifiers, data, 'flip');
        }
      });
      return data;
    }
  
    /**
     * @function
     * @memberof Modifiers
     * @argument {Object} data - The data object generated by update method
     * @argument {Object} options - Modifiers configuration and options
     * @returns {Object} The data object, properly modified
     */
    function keepTogether(data) {
      var _data$offsets = data.offsets,
          popper = _data$offsets.popper,
          reference = _data$offsets.reference;
  
      var placement = data.placement.split('-')[0];
      var floor = Math.floor;
      var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
      var side = isVertical ? 'right' : 'bottom';
      var opSide = isVertical ? 'left' : 'top';
      var measurement = isVertical ? 'width' : 'height';
  
      if (popper[side] < floor(reference[opSide])) {
        data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
      }
      if (popper[opSide] > floor(reference[side])) {
        data.offsets.popper[opSide] = floor(reference[side]);
      }
  
      return data;
    }
  
    /**
     * Converts a string containing value + unit into a px value number
     * @function
     * @memberof {modifiers~offset}
     * @private
     * @argument {String} str - Value + unit string
     * @argument {String} measurement - `height` or `width`
     * @argument {Object} popperOffsets
     * @argument {Object} referenceOffsets
     * @returns {Number|String}
     * Value in pixels, or original string if no values were extracted
     */
    function toValue(str, measurement, popperOffsets, referenceOffsets) {
      // separate value from unit
      var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
      var value = +split[1];
      var unit = split[2];
  
      // If it's not a number it's an operator, I guess
      if (!value) {
        return str;
      }
  
      if (unit.indexOf('%') === 0) {
        var element = void 0;
        switch (unit) {
          case '%p':
            element = popperOffsets;
            break;
          case '%':
          case '%r':
          default:
            element = referenceOffsets;
        }
  
        var rect = getClientRect(element);
        return rect[measurement] / 100 * value;
      } else if (unit === 'vh' || unit === 'vw') {
        // if is a vh or vw, we calculate the size based on the viewport
        var size = void 0;
        if (unit === 'vh') {
          size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        } else {
          size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        }
        return size / 100 * value;
      } else {
        // if is an explicit pixel unit, we get rid of the unit and keep the value
        // if is an implicit unit, it's px, and we return just the value
        return value;
      }
    }
  
    /**
     * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
     * @function
     * @memberof {modifiers~offset}
     * @private
     * @argument {String} offset
     * @argument {Object} popperOffsets
     * @argument {Object} referenceOffsets
     * @argument {String} basePlacement
     * @returns {Array} a two cells array with x and y offsets in numbers
     */
    function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
      var offsets = [0, 0];
  
      // Use height if placement is left or right and index is 0 otherwise use width
      // in this way the first offset will use an axis and the second one
      // will use the other one
      var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;
  
      // Split the offset string to obtain a list of values and operands
      // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
      var fragments = offset.split(/(\+|\-)/).map(function (frag) {
        return frag.trim();
      });
  
      // Detect if the offset string contains a pair of values or a single one
      // they could be separated by comma or space
      var divider = fragments.indexOf(find(fragments, function (frag) {
        return frag.search(/,|\s/) !== -1;
      }));
  
      if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
        console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
      }
  
      // If divider is found, we divide the list of values and operands to divide
      // them by ofset X and Y.
      var splitRegex = /\s*,\s*|\s+/;
      var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];
  
      // Convert the values with units to absolute pixels to allow our computations
      ops = ops.map(function (op, index) {
        // Most of the units rely on the orientation of the popper
        var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
        var mergeWithPrevious = false;
        return op
        // This aggregates any `+` or `-` sign that aren't considered operators
        // e.g.: 10 + +5 => [10, +, +5]
        .reduce(function (a, b) {
          if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
            a[a.length - 1] = b;
            mergeWithPrevious = true;
            return a;
          } else if (mergeWithPrevious) {
            a[a.length - 1] += b;
            mergeWithPrevious = false;
            return a;
          } else {
            return a.concat(b);
          }
        }, [])
        // Here we convert the string values into number values (in px)
        .map(function (str) {
          return toValue(str, measurement, popperOffsets, referenceOffsets);
        });
      });
  
      // Loop trough the offsets arrays and execute the operations
      ops.forEach(function (op, index) {
        op.forEach(function (frag, index2) {
          if (isNumeric(frag)) {
            offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
          }
        });
      });
      return offsets;
    }
  
    /**
     * @function
     * @memberof Modifiers
     * @argument {Object} data - The data object generated by update method
     * @argument {Object} options - Modifiers configuration and options
     * @argument {Number|String} options.offset=0
     * The offset value as described in the modifier description
     * @returns {Object} The data object, properly modified
     */
    function offset$1(data, _ref) {
      var offset = _ref.offset;
      var placement = data.placement,
          _data$offsets = data.offsets,
          popper = _data$offsets.popper,
          reference = _data$offsets.reference;
  
      var basePlacement = placement.split('-')[0];
  
      var offsets = void 0;
      if (isNumeric(+offset)) {
        offsets = [+offset, 0];
      } else {
        offsets = parseOffset(offset, popper, reference, basePlacement);
      }
  
      if (basePlacement === 'left') {
        popper.top += offsets[0];
        popper.left -= offsets[1];
      } else if (basePlacement === 'right') {
        popper.top += offsets[0];
        popper.left += offsets[1];
      } else if (basePlacement === 'top') {
        popper.left += offsets[0];
        popper.top -= offsets[1];
      } else if (basePlacement === 'bottom') {
        popper.left += offsets[0];
        popper.top += offsets[1];
      }
  
      data.popper = popper;
      return data;
    }
  
    /**
     * @function
     * @memberof Modifiers
     * @argument {Object} data - The data object generated by `update` method
     * @argument {Object} options - Modifiers configuration and options
     * @returns {Object} The data object, properly modified
     */
    function preventOverflow(data, options) {
      var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);
  
      // If offsetParent is the reference element, we really want to
      // go one step up and use the next offsetParent as reference to
      // avoid to make this modifier completely useless and look like broken
      if (data.instance.reference === boundariesElement) {
        boundariesElement = getOffsetParent(boundariesElement);
      }
  
      // NOTE: DOM access here
      // resets the popper's position so that the document size can be calculated excluding
      // the size of the popper element itself
      var transformProp = getSupportedPropertyName('transform');
      var popperStyles = data.instance.popper.style; // assignment to help minification
      var top = popperStyles.top,
          left = popperStyles.left,
          transform = popperStyles[transformProp];
  
      popperStyles.top = '';
      popperStyles.left = '';
      popperStyles[transformProp] = '';
  
      var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);
  
      // NOTE: DOM access here
      // restores the original style properties after the offsets have been computed
      popperStyles.top = top;
      popperStyles.left = left;
      popperStyles[transformProp] = transform;
  
      options.boundaries = boundaries;
  
      var order = options.priority;
      var popper = data.offsets.popper;
  
      var check = {
        primary: function primary(placement) {
          var value = popper[placement];
          if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
            value = Math.max(popper[placement], boundaries[placement]);
          }
          return defineProperty$1({}, placement, value);
        },
        secondary: function secondary(placement) {
          var mainSide = placement === 'right' ? 'left' : 'top';
          var value = popper[mainSide];
          if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
            value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
          }
          return defineProperty$1({}, mainSide, value);
        }
      };
  
      order.forEach(function (placement) {
        var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
        popper = _extends({}, popper, check[side](placement));
      });
  
      data.offsets.popper = popper;
  
      return data;
    }
  
    /**
     * @function
     * @memberof Modifiers
     * @argument {Object} data - The data object generated by `update` method
     * @argument {Object} options - Modifiers configuration and options
     * @returns {Object} The data object, properly modified
     */
    function shift(data) {
      var placement = data.placement;
      var basePlacement = placement.split('-')[0];
      var shiftvariation = placement.split('-')[1];
  
      // if shift shiftvariation is specified, run the modifier
      if (shiftvariation) {
        var _data$offsets = data.offsets,
            reference = _data$offsets.reference,
            popper = _data$offsets.popper;
  
        var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
        var side = isVertical ? 'left' : 'top';
        var measurement = isVertical ? 'width' : 'height';
  
        var shiftOffsets = {
          start: defineProperty$1({}, side, reference[side]),
          end: defineProperty$1({}, side, reference[side] + reference[measurement] - popper[measurement])
        };
  
        data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
      }
  
      return data;
    }
  
    /**
     * @function
     * @memberof Modifiers
     * @argument {Object} data - The data object generated by update method
     * @argument {Object} options - Modifiers configuration and options
     * @returns {Object} The data object, properly modified
     */
    function hide(data) {
      if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
        return data;
      }
  
      var refRect = data.offsets.reference;
      var bound = find(data.instance.modifiers, function (modifier) {
        return modifier.name === 'preventOverflow';
      }).boundaries;
  
      if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
        // Avoid unnecessary DOM access if visibility hasn't changed
        if (data.hide === true) {
          return data;
        }
  
        data.hide = true;
        data.attributes['x-out-of-boundaries'] = '';
      } else {
        // Avoid unnecessary DOM access if visibility hasn't changed
        if (data.hide === false) {
          return data;
        }
  
        data.hide = false;
        data.attributes['x-out-of-boundaries'] = false;
      }
  
      return data;
    }
  
    /**
     * @function
     * @memberof Modifiers
     * @argument {Object} data - The data object generated by `update` method
     * @argument {Object} options - Modifiers configuration and options
     * @returns {Object} The data object, properly modified
     */
    function inner(data) {
      var placement = data.placement;
      var basePlacement = placement.split('-')[0];
      var _data$offsets = data.offsets,
          popper = _data$offsets.popper,
          reference = _data$offsets.reference;
  
      var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;
  
      var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;
  
      popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);
  
      data.placement = getOppositePlacement(placement);
      data.offsets.popper = getClientRect(popper);
  
      return data;
    }
  
    /**
     * Modifier function, each modifier can have a function of this type assigned
     * to its `fn` property.<br />
     * These functions will be called on each update, this means that you must
     * make sure they are performant enough to avoid performance bottlenecks.
     *
     * @function ModifierFn
     * @argument {dataObject} data - The data object generated by `update` method
     * @argument {Object} options - Modifiers configuration and options
     * @returns {dataObject} The data object, properly modified
     */
  
    /**
     * Modifiers are plugins used to alter the behavior of your poppers.<br />
     * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
     * needed by the library.
     *
     * Usually you don't want to override the `order`, `fn` and `onLoad` props.
     * All the other properties are configurations that could be tweaked.
     * @namespace modifiers
     */
    var modifiers = {
      /**
       * Modifier used to shift the popper on the start or end of its reference
       * element.<br />
       * It will read the variation of the `placement` property.<br />
       * It can be one either `-end` or `-start`.
       * @memberof modifiers
       * @inner
       */
      shift: {
        /** @prop {number} order=100 - Index used to define the order of execution */
        order: 100,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
        enabled: true,
        /** @prop {ModifierFn} */
        fn: shift
      },
  
      /**
       * The `offset` modifier can shift your popper on both its axis.
       *
       * It accepts the following units:
       * - `px` or unit-less, interpreted as pixels
       * - `%` or `%r`, percentage relative to the length of the reference element
       * - `%p`, percentage relative to the length of the popper element
       * - `vw`, CSS viewport width unit
       * - `vh`, CSS viewport height unit
       *
       * For length is intended the main axis relative to the placement of the popper.<br />
       * This means that if the placement is `top` or `bottom`, the length will be the
       * `width`. In case of `left` or `right`, it will be the `height`.
       *
       * You can provide a single value (as `Number` or `String`), or a pair of values
       * as `String` divided by a comma or one (or more) white spaces.<br />
       * The latter is a deprecated method because it leads to confusion and will be
       * removed in v2.<br />
       * Additionally, it accepts additions and subtractions between different units.
       * Note that multiplications and divisions aren't supported.
       *
       * Valid examples are:
       * ```
       * 10
       * '10%'
       * '10, 10'
       * '10%, 10'
       * '10 + 10%'
       * '10 - 5vh + 3%'
       * '-10px + 5vh, 5px - 6%'
       * ```
       * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
       * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
       * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
       *
       * @memberof modifiers
       * @inner
       */
      offset: {
        /** @prop {number} order=200 - Index used to define the order of execution */
        order: 200,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
        enabled: true,
        /** @prop {ModifierFn} */
        fn: offset$1,
        /** @prop {Number|String} offset=0
         * The offset value as described in the modifier description
         */
        offset: 0
      },
  
      /**
       * Modifier used to prevent the popper from being positioned outside the boundary.
       *
       * A scenario exists where the reference itself is not within the boundaries.<br />
       * We can say it has "escaped the boundaries" — or just "escaped".<br />
       * In this case we need to decide whether the popper should either:
       *
       * - detach from the reference and remain "trapped" in the boundaries, or
       * - if it should ignore the boundary and "escape with its reference"
       *
       * When `escapeWithReference` is set to`true` and reference is completely
       * outside its boundaries, the popper will overflow (or completely leave)
       * the boundaries in order to remain attached to the edge of the reference.
       *
       * @memberof modifiers
       * @inner
       */
      preventOverflow: {
        /** @prop {number} order=300 - Index used to define the order of execution */
        order: 300,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
        enabled: true,
        /** @prop {ModifierFn} */
        fn: preventOverflow,
        /**
         * @prop {Array} [priority=['left','right','top','bottom']]
         * Popper will try to prevent overflow following these priorities by default,
         * then, it could overflow on the left and on top of the `boundariesElement`
         */
        priority: ['left', 'right', 'top', 'bottom'],
        /**
         * @prop {number} padding=5
         * Amount of pixel used to define a minimum distance between the boundaries
         * and the popper. This makes sure the popper always has a little padding
         * between the edges of its container
         */
        padding: 5,
        /**
         * @prop {String|HTMLElement} boundariesElement='scrollParent'
         * Boundaries used by the modifier. Can be `scrollParent`, `window`,
         * `viewport` or any DOM element.
         */
        boundariesElement: 'scrollParent'
      },
  
      /**
       * Modifier used to make sure the reference and its popper stay near each other
       * without leaving any gap between the two. Especially useful when the arrow is
       * enabled and you want to ensure that it points to its reference element.
       * It cares only about the first axis. You can still have poppers with margin
       * between the popper and its reference element.
       * @memberof modifiers
       * @inner
       */
      keepTogether: {
        /** @prop {number} order=400 - Index used to define the order of execution */
        order: 400,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
        enabled: true,
        /** @prop {ModifierFn} */
        fn: keepTogether
      },
  
      /**
       * This modifier is used to move the `arrowElement` of the popper to make
       * sure it is positioned between the reference element and its popper element.
       * It will read the outer size of the `arrowElement` node to detect how many
       * pixels of conjunction are needed.
       *
       * It has no effect if no `arrowElement` is provided.
       * @memberof modifiers
       * @inner
       */
      arrow: {
        /** @prop {number} order=500 - Index used to define the order of execution */
        order: 500,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
        enabled: true,
        /** @prop {ModifierFn} */
        fn: arrow,
        /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
        element: '[x-arrow]'
      },
  
      /**
       * Modifier used to flip the popper's placement when it starts to overlap its
       * reference element.
       *
       * Requires the `preventOverflow` modifier before it in order to work.
       *
       * **NOTE:** this modifier will interrupt the current update cycle and will
       * restart it if it detects the need to flip the placement.
       * @memberof modifiers
       * @inner
       */
      flip: {
        /** @prop {number} order=600 - Index used to define the order of execution */
        order: 600,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
        enabled: true,
        /** @prop {ModifierFn} */
        fn: flip,
        /**
         * @prop {String|Array} behavior='flip'
         * The behavior used to change the popper's placement. It can be one of
         * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
         * placements (with optional variations)
         */
        behavior: 'flip',
        /**
         * @prop {number} padding=5
         * The popper will flip if it hits the edges of the `boundariesElement`
         */
        padding: 5,
        /**
         * @prop {String|HTMLElement} boundariesElement='viewport'
         * The element which will define the boundaries of the popper position.
         * The popper will never be placed outside of the defined boundaries
         * (except if `keepTogether` is enabled)
         */
        boundariesElement: 'viewport',
        /**
         * @prop {Boolean} flipVariations=false
         * The popper will switch placement variation between `-start` and `-end` when
         * the reference element overlaps its boundaries.
         *
         * The original placement should have a set variation.
         */
        flipVariations: false,
        /**
         * @prop {Boolean} flipVariationsByContent=false
         * The popper will switch placement variation between `-start` and `-end` when
         * the popper element overlaps its reference boundaries.
         *
         * The original placement should have a set variation.
         */
        flipVariationsByContent: false
      },
  
      /**
       * Modifier used to make the popper flow toward the inner of the reference element.
       * By default, when this modifier is disabled, the popper will be placed outside
       * the reference element.
       * @memberof modifiers
       * @inner
       */
      inner: {
        /** @prop {number} order=700 - Index used to define the order of execution */
        order: 700,
        /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
        enabled: false,
        /** @prop {ModifierFn} */
        fn: inner
      },
  
      /**
       * Modifier used to hide the popper when its reference element is outside of the
       * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
       * be used to hide with a CSS selector the popper when its reference is
       * out of boundaries.
       *
       * Requires the `preventOverflow` modifier before it in order to work.
       * @memberof modifiers
       * @inner
       */
      hide: {
        /** @prop {number} order=800 - Index used to define the order of execution */
        order: 800,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
        enabled: true,
        /** @prop {ModifierFn} */
        fn: hide
      },
  
      /**
       * Computes the style that will be applied to the popper element to gets
       * properly positioned.
       *
       * Note that this modifier will not touch the DOM, it just prepares the styles
       * so that `applyStyle` modifier can apply it. This separation is useful
       * in case you need to replace `applyStyle` with a custom implementation.
       *
       * This modifier has `850` as `order` value to maintain backward compatibility
       * with previous versions of Popper.js. Expect the modifiers ordering method
       * to change in future major versions of the library.
       *
       * @memberof modifiers
       * @inner
       */
      computeStyle: {
        /** @prop {number} order=850 - Index used to define the order of execution */
        order: 850,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
        enabled: true,
        /** @prop {ModifierFn} */
        fn: computeStyle,
        /**
         * @prop {Boolean} gpuAcceleration=true
         * If true, it uses the CSS 3D transformation to position the popper.
         * Otherwise, it will use the `top` and `left` properties
         */
        gpuAcceleration: true,
        /**
         * @prop {string} [x='bottom']
         * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
         * Change this if your popper should grow in a direction different from `bottom`
         */
        x: 'bottom',
        /**
         * @prop {string} [x='left']
         * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
         * Change this if your popper should grow in a direction different from `right`
         */
        y: 'right'
      },
  
      /**
       * Applies the computed styles to the popper element.
       *
       * All the DOM manipulations are limited to this modifier. This is useful in case
       * you want to integrate Popper.js inside a framework or view library and you
       * want to delegate all the DOM manipulations to it.
       *
       * Note that if you disable this modifier, you must make sure the popper element
       * has its position set to `absolute` before Popper.js can do its work!
       *
       * Just disable this modifier and define your own to achieve the desired effect.
       *
       * @memberof modifiers
       * @inner
       */
      applyStyle: {
        /** @prop {number} order=900 - Index used to define the order of execution */
        order: 900,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
        enabled: true,
        /** @prop {ModifierFn} */
        fn: applyStyle,
        /** @prop {Function} */
        onLoad: applyStyleOnLoad,
        /**
         * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
         * @prop {Boolean} gpuAcceleration=true
         * If true, it uses the CSS 3D transformation to position the popper.
         * Otherwise, it will use the `top` and `left` properties
         */
        gpuAcceleration: undefined
      }
    };
  
    /**
     * The `dataObject` is an object containing all the information used by Popper.js.
     * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
     * @name dataObject
     * @property {Object} data.instance The Popper.js instance
     * @property {String} data.placement Placement applied to popper
     * @property {String} data.originalPlacement Placement originally defined on init
     * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
     * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
     * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
     * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
     * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
     * @property {Object} data.boundaries Offsets of the popper boundaries
     * @property {Object} data.offsets The measurements of popper, reference and arrow elements
     * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
     * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
     * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
     */
  
    /**
     * Default options provided to Popper.js constructor.<br />
     * These can be overridden using the `options` argument of Popper.js.<br />
     * To override an option, simply pass an object with the same
     * structure of the `options` object, as the 3rd argument. For example:
     * ```
     * new Popper(ref, pop, {
     *   modifiers: {
     *     preventOverflow: { enabled: false }
     *   }
     * })
     * ```
     * @type {Object}
     * @static
     * @memberof Popper
     */
    var Defaults = {
      /**
       * Popper's placement.
       * @prop {Popper.placements} placement='bottom'
       */
      placement: 'bottom',
  
      /**
       * Set this to true if you want popper to position it self in 'fixed' mode
       * @prop {Boolean} positionFixed=false
       */
      positionFixed: false,
  
      /**
       * Whether events (resize, scroll) are initially enabled.
       * @prop {Boolean} eventsEnabled=true
       */
      eventsEnabled: true,
  
      /**
       * Set to true if you want to automatically remove the popper when
       * you call the `destroy` method.
       * @prop {Boolean} removeOnDestroy=false
       */
      removeOnDestroy: false,
  
      /**
       * Callback called when the popper is created.<br />
       * By default, it is set to no-op.<br />
       * Access Popper.js instance with `data.instance`.
       * @prop {onCreate}
       */
      onCreate: function onCreate() {},
  
      /**
       * Callback called when the popper is updated. This callback is not called
       * on the initialization/creation of the popper, but only on subsequent
       * updates.<br />
       * By default, it is set to no-op.<br />
       * Access Popper.js instance with `data.instance`.
       * @prop {onUpdate}
       */
      onUpdate: function onUpdate() {},
  
      /**
       * List of modifiers used to modify the offsets before they are applied to the popper.
       * They provide most of the functionalities of Popper.js.
       * @prop {modifiers}
       */
      modifiers: modifiers
    };
  
    /**
     * @callback onCreate
     * @param {dataObject} data
     */
  
    /**
     * @callback onUpdate
     * @param {dataObject} data
     */
  
    // Utils
    // Methods
    var Popper = function () {
      /**
       * Creates a new Popper.js instance.
       * @class Popper
       * @param {Element|referenceObject} reference - The reference element used to position the popper
       * @param {Element} popper - The HTML / XML element used as the popper
       * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
       * @return {Object} instance - The generated Popper.js instance
       */
      function Popper(reference, popper) {
        var _this = this;
  
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        classCallCheck(this, Popper);
  
        this.scheduleUpdate = function () {
          return requestAnimationFrame(_this.update);
        };
  
        // make update() debounced, so that it only runs at most once-per-tick
        this.update = debounce(this.update.bind(this));
  
        // with {} we create a new object with the options inside it
        this.options = _extends({}, Popper.Defaults, options);
  
        // init state
        this.state = {
          isDestroyed: false,
          isCreated: false,
          scrollParents: []
        };
  
        // get reference and popper elements (allow jQuery wrappers)
        this.reference = reference && reference.jquery ? reference[0] : reference;
        this.popper = popper && popper.jquery ? popper[0] : popper;
  
        // Deep merge modifiers options
        this.options.modifiers = {};
        Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
          _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
        });
  
        // Refactoring modifiers' list (Object => Array)
        this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
          return _extends({
            name: name
          }, _this.options.modifiers[name]);
        })
        // sort the modifiers by order
        .sort(function (a, b) {
          return a.order - b.order;
        });
  
        // modifiers have the ability to execute arbitrary code when Popper.js get inited
        // such code is executed in the same order of its modifier
        // they could add new properties to their options configuration
        // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
        this.modifiers.forEach(function (modifierOptions) {
          if (modifierOptions.enabled && isFunction$1(modifierOptions.onLoad)) {
            modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
          }
        });
  
        // fire the first update to position the popper in the right place
        this.update();
  
        var eventsEnabled = this.options.eventsEnabled;
        if (eventsEnabled) {
          // setup event listeners, they will take care of update the position in specific situations
          this.enableEventListeners();
        }
  
        this.state.eventsEnabled = eventsEnabled;
      }
  
      // We can't use class properties because they don't get listed in the
      // class prototype and break stuff like Sinon stubs
  
  
      createClass(Popper, [{
        key: 'update',
        value: function update$$1() {
          return update.call(this);
        }
      }, {
        key: 'destroy',
        value: function destroy$$1() {
          return destroy$1.call(this);
        }
      }, {
        key: 'enableEventListeners',
        value: function enableEventListeners$$1() {
          return enableEventListeners.call(this);
        }
      }, {
        key: 'disableEventListeners',
        value: function disableEventListeners$$1() {
          return disableEventListeners.call(this);
        }
  
        /**
         * Schedules an update. It will run on the next UI update available.
         * @method scheduleUpdate
         * @memberof Popper
         */
  
  
        /**
         * Collection of utilities useful when writing custom modifiers.
         * Starting from version 1.7, this method is available only if you
         * include `popper-utils.js` before `popper.js`.
         *
         * **DEPRECATION**: This way to access PopperUtils is deprecated
         * and will be removed in v2! Use the PopperUtils module directly instead.
         * Due to the high instability of the methods contained in Utils, we can't
         * guarantee them to follow semver. Use them at your own risk!
         * @static
         * @private
         * @type {Object}
         * @deprecated since version 1.8
         * @member Utils
         * @memberof Popper
         */
  
      }]);
      return Popper;
    }();
  
    /**
     * The `referenceObject` is an object that provides an interface compatible with Popper.js
     * and lets you use it as replacement of a real DOM node.<br />
     * You can use this method to position a popper relatively to a set of coordinates
     * in case you don't have a DOM node to use as reference.
     *
     * ```
     * new Popper(referenceObject, popperNode);
     * ```
     *
     * NB: This feature isn't supported in Internet Explorer 10.
     * @name referenceObject
     * @property {Function} data.getBoundingClientRect
     * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
     * @property {number} data.clientWidth
     * An ES6 getter that will return the width of the virtual reference element.
     * @property {number} data.clientHeight
     * An ES6 getter that will return the height of the virtual reference element.
     */
  
  
    Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
    Popper.placements = placements;
    Popper.Defaults = Defaults;
  
    var BvEvent = /*#__PURE__*/function () {
      function BvEvent(type) {
        var eventInit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  
        _classCallCheck(this, BvEvent);
  
        // Start by emulating native Event constructor
        if (!type) {
          /* istanbul ignore next */
          throw new TypeError("Failed to construct '".concat(this.constructor.name, "'. 1 argument required, ").concat(arguments.length, " given."));
        } // Merge defaults first, the eventInit, and the type last
        // so it can't be overwritten
  
  
        assign(this, BvEvent.Defaults, this.constructor.Defaults, eventInit, {
          type: type
        }); // Freeze some props as readonly, but leave them enumerable
  
        defineProperties(this, {
          type: readonlyDescriptor(),
          cancelable: readonlyDescriptor(),
          nativeEvent: readonlyDescriptor(),
          target: readonlyDescriptor(),
          relatedTarget: readonlyDescriptor(),
          vueTarget: readonlyDescriptor(),
          componentId: readonlyDescriptor()
        }); // Create a private variable using closure scoping
  
        var defaultPrevented = false; // Recreate preventDefault method. One way setter
  
        this.preventDefault = function preventDefault() {
          if (this.cancelable) {
            defaultPrevented = true;
          }
        }; // Create `defaultPrevented` publicly accessible prop that
        // can only be altered by the preventDefault method
  
  
        defineProperty(this, 'defaultPrevented', {
          enumerable: true,
          get: function get() {
            return defaultPrevented;
          }
        });
      }
  
      _createClass(BvEvent, null, [{
        key: "Defaults",
        get: function get() {
          return {
            type: '',
            cancelable: true,
            nativeEvent: null,
            target: null,
            relatedTarget: null,
            vueTarget: null,
            componentId: null
          };
        }
      }]);
  
      return BvEvent;
    }(); // Named Exports
  
    var clickOutMixin = {
      data: function data() {
        return {
          listenForClickOut: false
        };
      },
      watch: {
        listenForClickOut: function listenForClickOut(newValue, oldValue) {
          if (newValue !== oldValue) {
            eventOff(this.clickOutElement, this.clickOutEventName, this._clickOutHandler, EVENT_OPTIONS_NO_CAPTURE);
  
            if (newValue) {
              eventOn(this.clickOutElement, this.clickOutEventName, this._clickOutHandler, EVENT_OPTIONS_NO_CAPTURE);
            }
          }
        }
      },
      beforeCreate: function beforeCreate() {
        // Declare non-reactive properties
        this.clickOutElement = null;
        this.clickOutEventName = null;
      },
      mounted: function mounted() {
        if (!this.clickOutElement) {
          this.clickOutElement = document;
        }
  
        if (!this.clickOutEventName) {
          this.clickOutEventName = 'click';
        }
  
        if (this.listenForClickOut) {
          eventOn(this.clickOutElement, this.clickOutEventName, this._clickOutHandler, EVENT_OPTIONS_NO_CAPTURE);
        }
      },
      beforeDestroy: function beforeDestroy()
      /* istanbul ignore next */
      {
        eventOff(this.clickOutElement, this.clickOutEventName, this._clickOutHandler, EVENT_OPTIONS_NO_CAPTURE);
      },
      methods: {
        isClickOut: function isClickOut(evt) {
          return !contains(this.$el, evt.target);
        },
        _clickOutHandler: function _clickOutHandler(evt) {
          if (this.clickOutHandler && this.isClickOut(evt)) {
            this.clickOutHandler(evt);
          }
        }
      }
    };
  
    var focusInMixin = {
      data: function data() {
        return {
          listenForFocusIn: false
        };
      },
      watch: {
        listenForFocusIn: function listenForFocusIn(newValue, oldValue) {
          if (newValue !== oldValue) {
            eventOff(this.focusInElement, 'focusin', this._focusInHandler, EVENT_OPTIONS_NO_CAPTURE);
  
            if (newValue) {
              eventOn(this.focusInElement, 'focusin', this._focusInHandler, EVENT_OPTIONS_NO_CAPTURE);
            }
          }
        }
      },
      beforeCreate: function beforeCreate() {
        // Declare non-reactive properties
        this.focusInElement = null;
      },
      mounted: function mounted() {
        if (!this.focusInElement) {
          this.focusInElement = document;
        }
  
        if (this.listenForFocusIn) {
          eventOn(this.focusInElement, 'focusin', this._focusInHandler, EVENT_OPTIONS_NO_CAPTURE);
        }
      },
      beforeDestroy: function beforeDestroy()
      /* istanbul ignore next */
      {
        eventOff(this.focusInElement, 'focusin', this._focusInHandler, EVENT_OPTIONS_NO_CAPTURE);
      },
      methods: {
        _focusInHandler: function _focusInHandler(evt) {
          if (this.focusInHandler) {
            this.focusInHandler(evt);
          }
        }
      }
    };
  
    var filterVisibles = function filterVisibles(els) {
      return (els || []).filter(isVisible);
    }; // Root dropdown event names
  
  
    var ROOT_DROPDOWN_PREFIX = 'bv::dropdown::';
    var ROOT_DROPDOWN_SHOWN = "".concat(ROOT_DROPDOWN_PREFIX, "shown");
    var ROOT_DROPDOWN_HIDDEN = "".concat(ROOT_DROPDOWN_PREFIX, "hidden"); // Dropdown item CSS selectors
  
    var Selector = {
      FORM_CHILD: '.dropdown form',
      ITEM_SELECTOR: ['.dropdown-item', '.b-dropdown-form'].map(function (selector) {
        return "".concat(selector, ":not(.disabled):not([disabled])");
      }).join(', ')
    }; // Popper attachment positions
  
    var AttachmentMap = {
      // Dropup left align
      TOP: 'top-start',
      // Dropup right align
      TOPEND: 'top-end',
      // Dropdown left align
      BOTTOM: 'bottom-start',
      // Dropdown right align
      BOTTOMEND: 'bottom-end',
      // Dropright left align
      RIGHT: 'right-start',
      // Dropright right align
      RIGHTEND: 'right-end',
      // Dropleft left align
      LEFT: 'left-start',
      // Dropleft right align
      LEFTEND: 'left-end'
    };
    var commonProps = {
      dropup: {
        // place on top if possible
        type: Boolean,
        default: false
      },
      dropright: {
        // place right if possible
        type: Boolean,
        default: false
      },
      dropleft: {
        // place left if possible
        type: Boolean,
        default: false
      },
      right: {
        // Right align menu (default is left align)
        type: Boolean,
        default: false
      },
      offset: {
        // Number of pixels to offset menu, or a CSS unit value (i.e. 1px, 1rem, etc)
        type: [Number, String],
        default: 0
      },
      noFlip: {
        // Disable auto-flipping of menu from bottom<=>top
        type: Boolean,
        default: false
      },
      popperOpts: {
        // type: Object,
        default: function _default() {}
      },
      boundary: {
        // String: `scrollParent`, `window` or `viewport`
        // HTMLElement: HTML Element reference
        type: [String, HTMLElement],
        default: 'scrollParent'
      }
    }; // @vue/component
  
    var dropdownMixin = {
      mixins: [idMixin, clickOutMixin, focusInMixin],
      provide: function provide() {
        return {
          bvDropdown: this
        };
      },
      inject: {
        bvNavbar: {
          default: null
        }
      },
      props: _objectSpread2({
        disabled: {
          type: Boolean,
          default: false
        }
      }, commonProps),
      data: function data() {
        return {
          visible: false,
          visibleChangePrevented: false
        };
      },
      computed: {
        inNavbar: function inNavbar() {
          return !isNull(this.bvNavbar);
        },
        toggler: function toggler() {
          var toggle = this.$refs.toggle;
          return toggle ? toggle.$el || toggle : null;
        },
        directionClass: function directionClass() {
          if (this.dropup) {
            return 'dropup';
          } else if (this.dropright) {
            return 'dropright';
          } else if (this.dropleft) {
            return 'dropleft';
          }
  
          return '';
        }
      },
      watch: {
        visible: function visible(newValue, oldValue) {
          if (this.visibleChangePrevented) {
            this.visibleChangePrevented = false;
            return;
          }
  
          if (newValue !== oldValue) {
            var evtName = newValue ? 'show' : 'hide';
            var bvEvt = new BvEvent(evtName, {
              cancelable: true,
              vueTarget: this,
              target: this.$refs.menu,
              relatedTarget: null,
              componentId: this.safeId ? this.safeId() : this.id || null
            });
            this.emitEvent(bvEvt);
  
            if (bvEvt.defaultPrevented) {
              // Reset value and exit if canceled
              this.visibleChangePrevented = true;
              this.visible = oldValue; // Just in case a child element triggered `this.hide(true)`
  
              this.$off('hidden', this.focusToggler);
              return;
            }
  
            if (evtName === 'show') {
              this.showMenu();
            } else {
              this.hideMenu();
            }
          }
        },
        disabled: function disabled(newValue, oldValue) {
          if (newValue !== oldValue && newValue && this.visible) {
            // Hide dropdown if disabled changes to true
            this.visible = false;
          }
        }
      },
      created: function created() {
        // Create non-reactive property
        this.$_popper = null;
      },
      deactivated: function deactivated()
      /* istanbul ignore next: not easy to test */
      {
        // In case we are inside a `<keep-alive>`
        this.visible = false;
        this.whileOpenListen(false);
        this.destroyPopper();
      },
      beforeDestroy: function beforeDestroy() {
        this.visible = false;
        this.whileOpenListen(false);
        this.destroyPopper();
      },
      methods: {
        // Event emitter
        emitEvent: function emitEvent(bvEvt) {
          var type = bvEvt.type;
          this.$emit(type, bvEvt);
          this.$root.$emit("".concat(ROOT_DROPDOWN_PREFIX).concat(type), bvEvt);
        },
        showMenu: function showMenu() {
          var _this = this;
  
          if (this.disabled) {
            /* istanbul ignore next */
            return;
          } // Only instantiate Popper.js when dropdown is not in `<b-navbar>`
  
  
          if (!this.inNavbar) {
            if (typeof Popper === 'undefined') {
              /* istanbul ignore next */
              warn('Popper.js not found. Falling back to CSS positioning', 'BDropdown');
            } else {
              // For dropup with alignment we use the parent element as popper container
              var el = this.dropup && this.right || this.split ? this.$el : this.$refs.toggle; // Make sure we have a reference to an element, not a component!
  
              el = el.$el || el; // Instantiate Popper.js
  
              this.createPopper(el);
            }
          } // Ensure other menus are closed
  
  
          this.$root.$emit(ROOT_DROPDOWN_SHOWN, this); // Enable listeners
  
          this.whileOpenListen(true); // Wrap in `$nextTick()` to ensure menu is fully rendered/shown
  
          this.$nextTick(function () {
            // Focus on the menu container on show
            _this.focusMenu(); // Emit the shown event
  
  
            _this.$emit('shown');
          });
        },
        hideMenu: function hideMenu() {
          this.whileOpenListen(false);
          this.$root.$emit(ROOT_DROPDOWN_HIDDEN, this);
          this.$emit('hidden');
          this.destroyPopper();
        },
        createPopper: function createPopper(element) {
          this.destroyPopper();
          this.$_popper = new Popper(element, this.$refs.menu, this.getPopperConfig());
        },
        destroyPopper: function destroyPopper() {
          // Ensure popper event listeners are removed cleanly
          if (this.$_popper) {
            this.$_popper.destroy();
          }
  
          this.$_popper = null;
        },
        updatePopper: function updatePopper()
        /* istanbul ignore next: not easy to test */
        {
          // Instructs popper to re-computes the dropdown position
          // usefull if the content changes size
          try {
            this.$_popper.scheduleUpdate();
          } catch (_unused) {}
        },
        getPopperConfig: function getPopperConfig() {
          var placement = AttachmentMap.BOTTOM;
  
          if (this.dropup) {
            placement = this.right ? AttachmentMap.TOPEND : AttachmentMap.TOP;
          } else if (this.dropright) {
            placement = AttachmentMap.RIGHT;
          } else if (this.dropleft) {
            placement = AttachmentMap.LEFT;
          } else if (this.right) {
            placement = AttachmentMap.BOTTOMEND;
          }
  
          var popperConfig = {
            placement: placement,
            modifiers: {
              offset: {
                offset: this.offset || 0
              },
              flip: {
                enabled: !this.noFlip
              }
            }
          };
  
          if (this.boundary) {
            popperConfig.modifiers.preventOverflow = {
              boundariesElement: this.boundary
            };
          }
  
          return _objectSpread2({}, popperConfig, {}, this.popperOpts || {});
        },
        // Turn listeners on/off while open
        whileOpenListen: function whileOpenListen(isOpen) {
          // Hide the dropdown when clicked outside
          this.listenForClickOut = isOpen; // Hide the dropdown when it loses focus
  
          this.listenForFocusIn = isOpen; // Hide the dropdown when another dropdown is opened
  
          var method = isOpen ? '$on' : '$off';
          this.$root[method](ROOT_DROPDOWN_SHOWN, this.rootCloseListener);
        },
        rootCloseListener: function rootCloseListener(vm) {
          if (vm !== this) {
            this.visible = false;
          }
        },
        show: function show() {
          var _this2 = this;
  
          // Public method to show dropdown
          if (this.disabled) {
            return;
          } // Wrap in a `requestAF()` to allow any previous
          // click handling to occur first
  
  
          requestAF(function () {
            _this2.visible = true;
          });
        },
        hide: function hide() {
          var refocus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  
          // Public method to hide dropdown
          if (this.disabled) {
            /* istanbul ignore next */
            return;
          }
  
          this.visible = false;
  
          if (refocus) {
            // Child element is closing the dropdown on click
            this.$once('hidden', this.focusToggler);
          }
        },
        // Called only by a button that toggles the menu
        toggle: function toggle(evt) {
          evt = evt || {}; // Early exit when not a click event or ENTER, SPACE or DOWN were pressed
  
          var _evt = evt,
              type = _evt.type,
              keyCode = _evt.keyCode;
  
          if (type !== 'click' && !(type === 'keydown' && [KEY_CODES.ENTER, KEY_CODES.SPACE, KEY_CODES.DOWN].indexOf(keyCode) !== -1)) {
            /* istanbul ignore next */
            return;
          }
          /* istanbul ignore next */
  
  
          if (this.disabled) {
            this.visible = false;
            return;
          }
  
          this.$emit('toggle', evt);
          evt.preventDefault();
          evt.stopPropagation(); // Toggle visibility
  
          if (this.visible) {
            this.hide(true);
          } else {
            this.show();
          }
        },
        // Mousedown handler for the toggle
        onMousedown: function onMousedown(evt)
        /* istanbul ignore next */
        {
          // We prevent the 'mousedown' event for the toggle to stop the
          // 'focusin' event from being fired
          // The event would otherwise be picked up by the global 'focusin'
          // listener and there is no cross-browser solution to detect it
          // relates to the toggle click
          // The 'click' event will still be fired and we handle closing
          // other dropdowns there too
          // See https://github.com/bootstrap-vue/bootstrap-vue/issues/4328
          evt.preventDefault();
        },
        // Called from dropdown menu context
        onKeydown: function onKeydown(evt) {
          var keyCode = evt.keyCode;
  
          if (keyCode === KEY_CODES.ESC) {
            // Close on ESC
            this.onEsc(evt);
          } else if (keyCode === KEY_CODES.DOWN) {
            // Down Arrow
            this.focusNext(evt, false);
          } else if (keyCode === KEY_CODES.UP) {
            // Up Arrow
            this.focusNext(evt, true);
          }
        },
        // If user presses ESC, close the menu
        onEsc: function onEsc(evt) {
          if (this.visible) {
            this.visible = false;
            evt.preventDefault();
            evt.stopPropagation(); // Return focus to original trigger button
  
            this.$once('hidden', this.focusToggler);
          }
        },
        // Called only in split button mode, for the split button
        onSplitClick: function onSplitClick(evt) {
          /* istanbul ignore next */
          if (this.disabled) {
            this.visible = false;
            return;
          }
  
          this.$emit('click', evt);
        },
        // Shared hide handler between click-out and focus-in events
        hideHandler: function hideHandler(evt) {
          var target = evt.target;
  
          if (this.visible && !contains(this.$refs.menu, target) && !contains(this.toggler, target)) {
            this.hide();
          }
        },
        // Document click-out listener
        clickOutHandler: function clickOutHandler(evt) {
          this.hideHandler(evt);
        },
        // Document focus-in listener
        focusInHandler: function focusInHandler(evt) {
          this.hideHandler(evt);
        },
        // Keyboard nav
        focusNext: function focusNext(evt, up) {
          var _this3 = this;
  
          // Ignore key up/down on form elements
          var target = evt.target;
  
          if (!this.visible || evt && closest(Selector.FORM_CHILD, target)) {
            /* istanbul ignore next: should never happen */
            return;
          }
  
          evt.preventDefault();
          evt.stopPropagation();
          this.$nextTick(function () {
            var items = _this3.getItems();
  
            if (items.length < 1) {
              /* istanbul ignore next: should never happen */
              return;
            }
  
            var index = items.indexOf(target);
  
            if (up && index > 0) {
              index--;
            } else if (!up && index < items.length - 1) {
              index++;
            }
  
            if (index < 0) {
              /* istanbul ignore next: should never happen */
              index = 0;
            }
  
            _this3.focusItem(index, items);
          });
        },
        focusItem: function focusItem(idx, items) {
          var el = items.find(function (el, i) {
            return i === idx;
          });
  
          if (el && el.focus) {
            el.focus();
          }
        },
        getItems: function getItems() {
          // Get all items
          return filterVisibles(selectAll(Selector.ITEM_SELECTOR, this.$refs.menu));
        },
        focusMenu: function focusMenu() {
          try {
            this.$refs.menu.focus();
          } catch (_unused2) {}
        },
        focusToggler: function focusToggler() {
          var _this4 = this;
  
          this.$nextTick(function () {
            var toggler = _this4.toggler;
  
            if (toggler && toggler.focus) {
              toggler.focus();
            }
          });
        }
      }
    };
  
    var NAME$c = 'BDropdown';
    var props$k = {
      text: {
        // Button label
        type: String,
        default: ''
      },
      html: {
        // Button label
        type: String
      },
      size: {
        type: String,
        default: function _default() {
          return getComponentConfig(NAME$c, 'size');
        }
      },
      variant: {
        type: String,
        default: function _default() {
          return getComponentConfig(NAME$c, 'variant');
        }
      },
      block: {
        type: Boolean,
        default: false
      },
      menuClass: {
        type: [String, Array, Object],
        default: null
      },
      toggleTag: {
        type: String,
        default: 'button'
      },
      toggleText: {
        // This really should be toggleLabel
        type: String,
        default: function _default() {
          return getComponentConfig(NAME$c, 'toggleText');
        }
      },
      toggleClass: {
        type: [String, Array, Object],
        default: null
      },
      noCaret: {
        type: Boolean,
        default: false
      },
      split: {
        type: Boolean,
        default: false
      },
      splitHref: {
        type: String // default: undefined
  
      },
      splitTo: {
        type: [String, Object] // default: undefined
  
      },
      splitVariant: {
        type: String,
        default: function _default() {
          return getComponentConfig(NAME$c, 'splitVariant');
        }
      },
      splitClass: {
        type: [String, Array, Object],
        default: null
      },
      splitButtonType: {
        type: String,
        default: 'button',
        validator: function validator(value) {
          return arrayIncludes(['button', 'submit', 'reset'], value);
        }
      },
      lazy: {
        // If true, only render menu contents when open
        type: Boolean,
        default: false
      },
      role: {
        type: String,
        default: 'menu'
      }
    }; // @vue/component
  
    var BDropdown = /*#__PURE__*/Vue.extend({
      name: NAME$c,
      mixins: [idMixin, dropdownMixin, normalizeSlotMixin],
      props: props$k,
      computed: {
        dropdownClasses: function dropdownClasses() {
          return [this.directionClass, {
            show: this.visible,
            // The 'btn-group' class is required in `split` mode for button alignment
            // It needs also to be applied when `block` is disabled to allow multiple
            // dropdowns to be aligned one line
            'btn-group': this.split || !this.block,
            // When `block` is enabled and we are in `split` mode the 'd-flex' class
            // needs to be applied to allow the buttons to stretch to full width
            'd-flex': this.block && this.split,
            // Position `static` is needed to allow menu to "breakout" of the `scrollParent`
            // boundaries when boundary is anything other than `scrollParent`
            // See: https://github.com/twbs/bootstrap/issues/24251#issuecomment-341413786
            'position-static': this.boundary !== 'scrollParent' || !this.boundary
          }];
        },
        menuClasses: function menuClasses() {
          return [this.menuClass, {
            'dropdown-menu-right': this.right,
            show: this.visible
          }];
        },
        toggleClasses: function toggleClasses() {
          return [this.toggleClass, {
            'dropdown-toggle-split': this.split,
            'dropdown-toggle-no-caret': this.noCaret && !this.split
          }];
        }
      },
      render: function render(h) {
        var split = h();
        var buttonContent = this.normalizeSlot('button-content') || this.html || stripTags(this.text);
  
        if (this.split) {
          var btnProps = {
            variant: this.splitVariant || this.variant,
            size: this.size,
            block: this.block,
            disabled: this.disabled
          }; // We add these as needed due to router-link issues with defined property with undefined/null values
  
          if (this.splitTo) {
            btnProps.to = this.splitTo;
          } else if (this.splitHref) {
            btnProps.href = this.splitHref;
          } else if (this.splitButtonType) {
            btnProps.type = this.splitButtonType;
          }
  
          split = h(BButton, {
            ref: 'button',
            props: btnProps,
            class: this.splitClass,
            attrs: {
              id: this.safeId('_BV_button_')
            },
            on: {
              click: this.onSplitClick
            }
          }, [buttonContent]);
        }
  
        var toggle = h(BButton, {
          ref: 'toggle',
          staticClass: 'dropdown-toggle',
          class: this.toggleClasses,
          props: {
            tag: this.toggleTag,
            variant: this.variant,
            size: this.size,
            block: this.block && !this.split,
            disabled: this.disabled
          },
          attrs: {
            id: this.safeId('_BV_toggle_'),
            'aria-haspopup': 'true',
            'aria-expanded': this.visible ? 'true' : 'false'
          },
          on: {
            mousedown: this.onMousedown,
            click: this.toggle,
            keydown: this.toggle // Handle ENTER, SPACE and DOWN
  
          }
        }, [this.split ? h('span', {
          class: ['sr-only']
        }, [this.toggleText]) : buttonContent]);
        var menu = h('ul', {
          ref: 'menu',
          staticClass: 'dropdown-menu',
          class: this.menuClasses,
          attrs: {
            role: this.role,
            tabindex: '-1',
            'aria-labelledby': this.safeId(this.split ? '_BV_button_' : '_BV_toggle_')
          },
          on: {
            keydown: this.onKeydown // Handle UP, DOWN and ESC
  
          }
        }, !this.lazy || this.visible ? this.normalizeSlot('default', {
          hide: this.hide
        }) : [h()]);
        return h('div', {
          staticClass: 'dropdown b-dropdown',
          class: this.dropdownClasses,
          attrs: {
            id: this.safeId()
          }
        }, [split, toggle, menu]);
      }
    });
  
    var props$l = propsFactory(); // @vue/component
  
    var BDropdownItem = /*#__PURE__*/Vue.extend({
      name: 'BDropdownItem',
      mixins: [normalizeSlotMixin],
      inheritAttrs: false,
      inject: {
        bvDropdown: {
          default: null
        }
      },
      props: _objectSpread2({}, props$l, {
        variant: {
          type: String,
          default: null
        }
      }),
      methods: {
        closeDropdown: function closeDropdown() {
          var _this = this;
  
          // Close on next animation frame to allow <b-link> time to process
          requestAF(function () {
            if (_this.bvDropdown) {
              _this.bvDropdown.hide(true);
            }
          });
        },
        onClick: function onClick(evt) {
          this.$emit('click', evt);
          this.closeDropdown();
        }
      },
      render: function render(h) {
        return h('li', {
          attrs: {
            role: 'presentation'
          }
        }, [h(BLink, {
          props: this.$props,
          staticClass: 'dropdown-item',
          class: _defineProperty({}, "text-".concat(this.variant), this.variant && !(this.active || this.disabled)),
          attrs: _objectSpread2({}, this.$attrs, {
            role: 'menuitem'
          }),
          on: {
            click: this.onClick
          },
          ref: 'item'
        }, this.normalizeSlot('default'))]);
      }
    });
  
    var props$m = {
      active: {
        type: Boolean,
        default: false
      },
      activeClass: {
        type: String,
        default: 'active'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      variant: {
        type: String,
        default: null
      }
    }; // @vue/component
  
    var BDropdownItemButton = /*#__PURE__*/Vue.extend({
      name: 'BDropdownItemButton',
      mixins: [normalizeSlotMixin],
      inheritAttrs: false,
      inject: {
        bvDropdown: {
          default: null
        }
      },
      props: props$m,
      methods: {
        closeDropdown: function closeDropdown() {
          if (this.bvDropdown) {
            this.bvDropdown.hide(true);
          }
        },
        onClick: function onClick(evt) {
          this.$emit('click', evt);
          this.closeDropdown();
        }
      },
      render: function render(h) {
        var _class;
  
        return h('li', {
          attrs: {
            role: 'presentation'
          }
        }, [h('button', {
          staticClass: 'dropdown-item',
          class: (_class = {}, _defineProperty(_class, this.activeClass, this.active), _defineProperty(_class, "text-".concat(this.variant), this.variant && !(this.active || this.disabled)), _class),
          attrs: _objectSpread2({}, this.$attrs, {
            role: 'menuitem',
            type: 'button',
            disabled: this.disabled
          }),
          on: {
            click: this.onClick
          },
          ref: 'button'
        }, this.normalizeSlot('default'))]);
      }
    });
  
    var props$n = {
      id: {
        type: String,
        default: null
      },
      tag: {
        type: String,
        default: 'header'
      },
      variant: {
        type: String,
        default: null
      }
    }; // @vue/component
  
    var BDropdownHeader = /*#__PURE__*/Vue.extend({
      name: 'BDropdownHeader',
      functional: true,
      props: props$n,
      render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;
        var $attrs = data.attrs || {};
        data.attrs = {};
        return h('li', a(data, {
          attrs: {
            role: 'presentation'
          }
        }), [h(props.tag, {
          staticClass: 'dropdown-header',
          class: _defineProperty({}, "text-".concat(props.variant), props.variant),
          attrs: _objectSpread2({}, $attrs, {
            id: props.id || null,
            role: 'heading'
          }),
          ref: 'header'
        }, children)]);
      }
    });
  
    var props$o = {
      tag: {
        type: String,
        default: 'hr'
      }
    }; // @vue/component
  
    var BDropdownDivider = /*#__PURE__*/Vue.extend({
      name: 'BDropdownDivider',
      functional: true,
      props: props$o,
      render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data;
        var $attrs = data.attrs || {};
        data.attrs = {};
        return h('li', a(data, {
          attrs: {
            role: 'presentation'
          }
        }), [h(props.tag, {
          staticClass: 'dropdown-divider',
          attrs: _objectSpread2({}, $attrs, {
            role: 'separator',
            'aria-orientation': 'horizontal'
          }),
          ref: 'divider'
        })]);
      }
    });
  
    var props$p = {
      id: {
        type: String,
        default: null
      },
      inline: {
        type: Boolean,
        default: false
      },
      novalidate: {
        type: Boolean,
        default: false
      },
      validated: {
        type: Boolean,
        default: false
      }
    }; // @vue/component
  
    var BForm = /*#__PURE__*/Vue.extend({
      name: 'BForm',
      functional: true,
      props: props$p,
      render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;
        return h('form', a(data, {
          class: {
            'form-inline': props.inline,
            'was-validated': props.validated
          },
          attrs: {
            id: props.id,
            novalidate: props.novalidate
          }
        }), children);
      }
    });
  
    var BDropdownForm = /*#__PURE__*/Vue.extend({
      name: 'BDropdownForm',
      functional: true,
      props: _objectSpread2({}, props$p, {
        disabled: {
          type: Boolean,
          default: false
        },
        formClass: {
          type: [String, Object, Array],
          default: null
        }
      }),
      render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;
        var $attrs = data.attrs || {};
        var $listeners = data.on || {};
        data.attrs = {};
        data.on = {};
        return h('li', a(data, {
          attrs: {
            role: 'presentation'
          }
        }), [h(BForm, {
          ref: 'form',
          staticClass: 'b-dropdown-form',
          class: [props.formClass, {
            disabled: props.disabled
          }],
          props: props,
          attrs: _objectSpread2({}, $attrs, {
            disabled: props.disabled,
            // Tab index of -1 for keyboard navigation
            tabindex: props.disabled ? null : '-1'
          }),
          on: $listeners
        }, children)]);
      }
    });
  
    var BDropdownText = /*#__PURE__*/Vue.extend({
      name: 'BDropdownText',
      functional: true,
      props: {
        tag: {
          type: String,
          default: 'p'
        },
        variant: {
          type: String,
          default: null
        }
      },
      render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;
        var $attrs = data.attrs || {};
        data.attrs = {};
        return h('li', a(data, {
          attrs: {
            role: 'presentation'
          }
        }), [h(props.tag, {
          staticClass: 'b-dropdown-text',
          class: _defineProperty({}, "text-".concat(props.variant), props.variant),
          props: props,
          attrs: $attrs,
          ref: 'text'
        }, children)]);
      }
    });
  
    var props$q = {
      id: {
        type: String,
        default: null
      },
      header: {
        type: String,
        default: null
      },
      headerTag: {
        type: String,
        default: 'header'
      },
      headerVariant: {
        type: String,
        default: null
      },
      headerClasses: {
        type: [String, Array, Object],
        default: null
      },
      ariaDescribedby: {
        type: String,
        default: null
      }
    }; // @vue/component
  
    var BDropdownGroup = /*#__PURE__*/Vue.extend({
      name: 'BDropdownGroup',
      functional: true,
      props: props$q,
      render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            slots = _ref.slots,
            scopedSlots = _ref.scopedSlots;
        var $slots = slots();
        var $scopedSlots = scopedSlots || {};
        var $attrs = data.attrs || {};
        data.attrs = {};
        var header;
        var headerId = null;
  
        if (hasNormalizedSlot('header', $scopedSlots, $slots) || props.header) {
          headerId = props.id ? "_bv_".concat(props.id, "_group_dd_header") : null;
          header = h(props.headerTag, {
            staticClass: 'dropdown-header',
            class: [props.headerClasses, _defineProperty({}, "text-".concat(props.variant), props.variant)],
            attrs: {
              id: headerId,
              role: 'heading'
            }
          }, normalizeSlot('header', {}, $scopedSlots, $slots) || props.header);
        }
  
        var adb = [headerId, props.ariaDescribedBy].filter(Boolean).join(' ').trim();
        return h('li', a(data, {
          attrs: {
            role: 'presentation'
          }
        }), [header || h(), h('ul', {
          staticClass: 'list-unstyled',
          attrs: _objectSpread2({}, $attrs, {
            id: props.id || null,
            role: 'group',
            'aria-describedby': adb || null
          })
        }, normalizeSlot('default', {}, $scopedSlots, $slots))]);
      }
    });
  
    var DropdownPlugin = /*#__PURE__*/pluginFactory({
      components: {
        BDropdown: BDropdown,
        BDd: BDropdown,
        BDropdownItem: BDropdownItem,
        BDdItem: BDropdownItem,
        BDropdownItemButton: BDropdownItemButton,
        BDropdownItemBtn: BDropdownItemButton,
        BDdItemButton: BDropdownItemButton,
        BDdItemBtn: BDropdownItemButton,
        BDropdownHeader: BDropdownHeader,
        BDdHeader: BDropdownHeader,
        BDropdownDivider: BDropdownDivider,
        BDdDivider: BDropdownDivider,
        BDropdownForm: BDropdownForm,
        BDdForm: BDropdownForm,
        BDropdownText: BDropdownText,
        BDdText: BDropdownText,
        BDropdownGroup: BDropdownGroup,
        BDdGroup: BDropdownGroup
      }
    });
  
    var props$r = {
      type: {
        type: String,
        default: 'iframe',
        validator: function validator(str) {
          return arrayIncludes(['iframe', 'embed', 'video', 'object', 'img', 'b-img', 'b-img-lazy'], str);
        }
      },
      tag: {
        type: String,
        default: 'div'
      },
      aspect: {
        type: String,
        default: '16by9'
      }
    }; // @vue/component
  
    var BEmbed = /*#__PURE__*/Vue.extend({
      name: 'BEmbed',
      functional: true,
      props: props$r,
      render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;
        return h(props.tag, {
          ref: data.ref,
          staticClass: 'embed-responsive',
          class: _defineProperty({}, "embed-responsive-".concat(props.aspect), props.aspect)
        }, [h(props.type, a(data, {
          ref: '',
          staticClass: 'embed-responsive-item'
        }), children)]);
      }
    });
  
    var EmbedPlugin = /*#__PURE__*/pluginFactory({
      components: {
        BEmbed: BEmbed
      }
    });
  
    var OPTIONS_OBJECT_DEPRECATED_MSG = 'Setting prop "options" to an object is deprecated. Use the array format instead.'; // @vue/component
  
    var formOptionsMixin = {
      props: {
        options: {
          type: [Array, Object],
          default: function _default() {
            return [];
          }
        },
        valueField: {
          type: String,
          default: 'value'
        },
        textField: {
          type: String,
          default: 'text'
        },
        htmlField: {
          type: String,
          default: 'html'
        },
        disabledField: {
          type: String,
          default: 'disabled'
        }
      },
      computed: {
        formOptions: function formOptions() {
          var _this = this;
  
          var options = this.options; // Normalize the given options array
  
          if (isArray(options)) {
            return options.map(function (option) {
              return _this.normalizeOption(option);
            });
          } // Deprecate the object options format
  
  
          warn(OPTIONS_OBJECT_DEPRECATED_MSG, this.$options.name); // Normalize a `options` object to an array of options
  
          return keys(options).map(function (key) {
            return _this.normalizeOption(options[key] || {}, key);
          });
        }
      },
      methods: {
        normalizeOption: function normalizeOption(option) {
          var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  
          // When the option is an object, normalize it
          if (isPlainObject(option)) {
            var value = get(option, this.valueField);
            var text = get(option, this.textField);
            return {
              value: isUndefined(value) ? key || text : value,
              text: stripTags(String(isUndefined(text) ? key : text)),
              html: get(option, this.htmlField),
              disabled: Boolean(get(option, this.disabledField))
            };
          } // Otherwise create an `<option>` object from the given value
  
  
          return {
            value: key || option,
            text: stripTags(String(option)),
            disabled: false
          };
        }
      }
    };
  
    var BFormDatalist = /*#__PURE__*/Vue.extend({
      name: 'BFormDatalist',
      mixins: [formOptionsMixin, normalizeSlotMixin],
      props: {
        id: {
          type: String,
          default: null,
          required: true
        }
      },
      render: function render(h) {
        var options = this.formOptions.map(function (option, index) {
          return h('option', {
            key: "option_".concat(index, "_opt"),
            attrs: {
              disabled: option.disabled
            },
            domProps: _objectSpread2({}, htmlOrText(option.html, option.text), {
              value: option.value
            })
          });
        });
        return h('datalist', {
          attrs: {
            id: this.id
          }
        }, [options, this.normalizeSlot('default')]);
      }
    });
  
    var NAME$d = 'BFormText';
    var props$s = {
      id: {
        type: String,
        default: null
      },
      tag: {
        type: String,
        default: 'small'
      },
      textVariant: {
        type: String,
        default: function _default() {
          return getComponentConfig(NAME$d, 'textVariant');
        }
      },
      inline: {
        type: Boolean,
        default: false
      }
    }; // @vue/component
  
    var BFormText = /*#__PURE__*/Vue.extend({
      name: NAME$d,
      functional: true,
      props: props$s,
      render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;
        return h(props.tag, a(data, {
          class: _defineProperty({
            'form-text': !props.inline
          }, "text-".concat(props.textVariant), props.textVariant),
          attrs: {
            id: props.id
          }
        }), children);
      }
    });
  
    var props$t = {
      id: {
        type: String,
        default: null
      },
      tag: {
        type: String,
        default: 'div'
      },
      tooltip: {
        type: Boolean,
        default: false
      },
      forceShow: {
        type: Boolean,
        default: false
      },
      state: {
        type: Boolean,
        default: null
      },
      ariaLive: {
        type: String,
        default: null
      },
      role: {
        type: String,
        default: null
      }
    }; // @vue/component
  
    var BFormInvalidFeedback = /*#__PURE__*/Vue.extend({
      name: 'BFormInvalidFeedback',
      functional: true,
      props: props$t,
      render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;
        var show = props.forceShow === true || props.state === false;
        return h(props.tag, a(data, {
          class: {
            'invalid-feedback': !props.tooltip,
            'invalid-tooltip': props.tooltip,
            'd-block': show
          },
          attrs: {
            id: props.id,
            role: props.role,
            'aria-live': props.ariaLive,
            'aria-atomic': props.ariaLive ? 'true' : null
          }
        }), children);
      }
    });
  
    var props$u = {
      id: {
        type: String,
        default: null
      },
      tag: {
        type: String,
        default: 'div'
      },
      tooltip: {
        type: Boolean,
        default: false
      },
      forceShow: {
        type: Boolean,
        default: false
      },
      state: {
        type: Boolean,
        default: null
      },
      ariaLive: {
        type: String,
        default: null
      },
      role: {
        type: String,
        default: null
      }
    }; // @vue/component
  
    var BFormValidFeedback = /*#__PURE__*/Vue.extend({
      name: 'BFormValidFeedback',
      functional: true,
      props: props$u,
      render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;
        var show = props.forceShow === true || props.state === true;
        return h(props.tag, a(data, {
          class: {
            'valid-feedback': !props.tooltip,
            'valid-tooltip': props.tooltip,
            'd-block': show
          },
          attrs: {
            id: props.id,
            role: props.role,
            'aria-live': props.ariaLive,
            'aria-atomic': props.ariaLive ? 'true' : null
          }
        }), children);
      }
    });
  
    var props$v = {
      tag: {
        type: String,
        default: 'div'
      }
    }; // @vue/component
  
    var BFormRow = /*#__PURE__*/Vue.extend({
      name: 'BFormRow',
      functional: true,
      props: props$v,
      render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;
        return h(props.tag, a(data, {
          staticClass: 'form-row'
        }), children);
      }
    });
  
    var FormPlugin = /*#__PURE__*/pluginFactory({
      components: {
        BForm: BForm,
        BFormDatalist: BFormDatalist,
        BDatalist: BFormDatalist,
        BFormText: BFormText,
        BFormInvalidFeedback: BFormInvalidFeedback,
        BFormFeedback: BFormInvalidFeedback,
        BFormValidFeedback: BFormValidFeedback,
        // Added here for convenience
        BFormRow: BFormRow
      }
    }); // BFormRow is not exported here as a named export, as it is exported by Layout
  
    var looseIndexOf = function looseIndexOf(arr, val) {
      // Assumes that the first argument is an array
      for (var i = 0; i < arr.length; i++) {
        if (looseEqual(arr[i], val)) {
          return i;
        }
      }
  
      return -1;
    };
  
    var SELECTOR = 'input, textarea, select'; // @vue/component
  
    var formMixin = {
      props: {
        name: {
          type: String // default: undefined
  
        },
        id: {
          type: String // default: undefined
  
        },
        disabled: {
          type: Boolean
        },
        required: {
          type: Boolean,
          default: false
        },
        form: {
          type: String,
          default: null
        },
        autofocus: {
          type: Boolean,
          default: false
        }
      },
      mounted: function mounted() {
        this.handleAutofocus();
      },
      activated: function activated()
      /* istanbul ignore next */
      {
        this.handleAutofocus();
      },
      methods: {
        handleAutofocus: function handleAutofocus() {
          var _this = this;
  
          this.$nextTick(function () {
            requestAF(function () {
              var el = _this.$el;
  
              if (_this.autofocus && isVisible(el)) {
                if (!matches(el, SELECTOR)) {
                  el = select(SELECTOR, el);
                }
  
                el && el.focus && el.focus();
              }
            });
          });
        }
      }
    };
  
    var formRadioCheckMixin = {
      mixins: [normalizeSlotMixin],
      inheritAttrs: false,
      model: {
        prop: 'checked',
        event: 'input'
      },
      props: {
        value: {// Value when checked
          // type: Object,
          // default: undefined
        },
        checked: {// This is the v-model
          // type: Object,
          // default: undefined
        },
        inline: {
          type: Boolean,
          default: false
        },
        plain: {
          type: Boolean,
          default: false
        },
        button: {
          // Only applicable in standalone mode (non group)
          type: Boolean,
          default: false
        },
        buttonVariant: {
          // Only applicable when rendered with button style
          type: String,
          default: null
        },
        ariaLabel: {
          // Placed on the input if present.
          type: String,
          default: null
        },
        ariaLabelledby: {
          // Placed on the input if present.
          type: String,
          default: null
        }
      },
      data: function data() {
        return {
          localChecked: this.isGroup ? this.bvGroup.checked : this.checked,
          hasFocus: false
        };
      },
      computed: {
        computedLocalChecked: {
          get: function get() {
            return this.isGroup ? this.bvGroup.localChecked : this.localChecked;
          },
          set: function set(val) {
            if (this.isGroup) {
              this.bvGroup.localChecked = val;
            } else {
              this.localChecked = val;
            }
          }
        },
        isGroup: function isGroup() {
          // Is this check/radio a child of check-group or radio-group?
          return Boolean(this.bvGroup);
        },
        isBtnMode: function isBtnMode() {
          // Support button style in single input mode
          return this.isGroup ? this.bvGroup.buttons : this.button;
        },
        isPlain: function isPlain() {
          return this.isBtnMode ? false : this.isGroup ? this.bvGroup.plain : this.plain;
        },
        isCustom: function isCustom() {
          return this.isBtnMode ? false : !this.isPlain;
        },
        isSwitch: function isSwitch() {
          // Custom switch styling (checkboxes only)
          return this.isBtnMode || this.isRadio || this.isPlain ? false : this.isGroup ? this.bvGroup.switches : this.switch;
        },
        isInline: function isInline() {
          return this.isGroup ? this.bvGroup.inline : this.inline;
        },
        isDisabled: function isDisabled() {
          // Child can be disabled while parent isn't, but is always disabled if group is
          return this.isGroup ? this.bvGroup.disabled || this.disabled : this.disabled;
        },
        isRequired: function isRequired() {
          // Required only works when a name is provided for the input(s)
          // Child can only be required when parent is
          // Groups will always have a name (either user supplied or auto generated)
          return this.getName && (this.isGroup ? this.bvGroup.required : this.required);
        },
        getName: function getName() {
          // Group name preferred over local name
          return (this.isGroup ? this.bvGroup.groupName : this.name) || null;
        },
        getForm: function getForm() {
          return (this.isGroup ? this.bvGroup.form : this.form) || null;
        },
        getSize: function getSize() {
          return (this.isGroup ? this.bvGroup.size : this.size) || '';
        },
        getState: function getState() {
          return this.isGroup ? this.bvGroup.computedState : this.computedState;
        },
        getButtonVariant: function getButtonVariant() {
          // Local variant preferred over group variant
          if (this.buttonVariant) {
            return this.buttonVariant;
          } else if (this.isGroup && this.bvGroup.buttonVariant) {
            return this.bvGroup.buttonVariant;
          } // default variant
  
  
          return 'secondary';
        },
        buttonClasses: function buttonClasses() {
          var _ref;
  
          // Same for radio & check
          return ['btn', "btn-".concat(this.getButtonVariant), (_ref = {}, _defineProperty(_ref, "btn-".concat(this.getSize), this.getSize), _defineProperty(_ref, "disabled", this.isDisabled), _defineProperty(_ref, "active", this.isChecked), _defineProperty(_ref, "focus", this.hasFocus), _ref)];
        }
      },
      watch: {
        checked: function checked(newVal) {
          this.computedLocalChecked = newVal;
        }
      },
      methods: {
        handleFocus: function handleFocus(evt) {
          // When in buttons mode, we need to add 'focus' class to label when input focused
          // As it is the hidden input which has actual focus
          if (evt.target) {
            if (evt.type === 'focus') {
              this.hasFocus = true;
            } else if (evt.type === 'blur') {
              this.hasFocus = false;
            }
          }
        },
        // Convenience methods for focusing the input
        focus: function focus() {
          if (!this.isDisabled && this.$refs.input && this.$refs.input.focus) {
            this.$refs.input.focus();
          }
        },
        blur: function blur() {
          if (!this.isDisabled && this.$refs.input && this.$refs.input.blur) {
            this.$refs.input.blur();
          }
        }
      },
      render: function render(h) {
        var defaultSlot = this.normalizeSlot('default'); // Generate the input element
  
        var on = {
          change: this.handleChange
        };
  
        if (this.isBtnMode) {
          // Handlers for focus styling when in button mode
          on.focus = on.blur = this.handleFocus;
        }
  
        var input = h('input', {
          ref: 'input',
          key: 'input',
          on: on,
          class: {
            'form-check-input': this.isPlain,
            'custom-control-input': this.isCustom,
            'is-valid': this.getState === true && !this.isBtnMode,
            'is-invalid': this.getState === false && !this.isBtnMode,
            // https://github.com/bootstrap-vue/bootstrap-vue/issues/2911
            'position-static': this.isPlain && !defaultSlot
          },
          directives: [{
            name: 'model',
            rawName: 'v-model',
            value: this.computedLocalChecked,
            expression: 'computedLocalChecked'
          }],
          attrs: _objectSpread2({}, this.$attrs, {
            id: this.safeId(),
            type: this.isRadio ? 'radio' : 'checkbox',
            name: this.getName,
            form: this.getForm,
            disabled: this.isDisabled,
            required: this.isRequired,
            autocomplete: 'off',
            'aria-required': this.isRequired || null,
            'aria-label': this.ariaLabel || null,
            'aria-labelledby': this.ariaLabelledby || null
          }),
          domProps: {
            value: this.value,
            checked: this.isChecked
          }
        });
  
        if (this.isBtnMode) {
          // Button mode
          var button = h('label', {
            class: this.buttonClasses
          }, [input, defaultSlot]);
  
          if (!this.isGroup) {
            // Standalone button mode, so wrap in 'btn-group-toggle'
            // and flag it as inline-block to mimic regular buttons
            button = h('div', {
              class: ['btn-group-toggle', 'd-inline-block']
            }, [button]);
          }
  
          return button;
        } else {
          // Not button mode
          var label = h(); // If no label content in plain mode we dont render the label
          // https://github.com/bootstrap-vue/bootstrap-vue/issues/2911
  
          if (!(this.isPlain && !defaultSlot)) {
            label = h('label', {
              class: {
                'form-check-label': this.isPlain,
                'custom-control-label': this.isCustom
              },
              attrs: {
                for: this.safeId()
              }
            }, defaultSlot);
          } // Wrap it in a div
  
  
          return h('div', {
            class: _defineProperty({
              'form-check': this.isPlain,
              'form-check-inline': this.isPlain && this.isInline,
              'custom-control': this.isCustom,
              'custom-control-inline': this.isCustom && this.isInline,
              'custom-checkbox': this.isCustom && this.isCheck && !this.isSwitch,
              'custom-switch': this.isSwitch,
              'custom-radio': this.isCustom && this.isRadio
            }, "b-custom-control-".concat(this.getSize), Boolean(this.getSize && !this.isBtnMode))
          }, [input, label]);
        }
      }
    };
  
    var formSizeMixin = {
      props: {
        size: {
          type: String,
          default: function _default() {
            return getComponentConfig('formControls', 'size');
          }
        }
      },
      computed: {
        sizeFormClass: function sizeFormClass() {
          return [this.size ? "form-control-".concat(this.size) : null];
        },
        sizeBtnClass: function sizeBtnClass()
        /* istanbul ignore next: don't think this is used */
        {
          return [this.size ? "btn-".concat(this.size) : null];
        }
      }
    };
  
    /* Form control contextual state class computation
     *
     * Returned class is either 'is-valid' or 'is-invalid' based on the 'state' prop
     * state can be one of five values:
     *  - true for is-valid
     *  - false for is-invalid
     *  - null for no contextual state
     */
  
    var formStateMixin = {
      props: {
        state: {
          // Tri-state prop: true, false, null (or undefined)
          type: Boolean,
          default: null
        }
      },
      computed: {
        computedState: function computedState() {
          // If not a boolean, ensure that value is null
          return isBoolean(this.state) ? this.state : null;
        },
        stateClass: function stateClass() {
          var state = this.computedState;
          return state === true ? 'is-valid' : state === false ? 'is-invalid' : null;
        }
      }
    };
  
    var BFormCheckbox = /*#__PURE__*/Vue.extend({
      name: 'BFormCheckbox',
      mixins: [formRadioCheckMixin, // Includes shared render function
      idMixin, formMixin, formSizeMixin, formStateMixin],
      inject: {
        bvGroup: {
          from: 'bvCheckGroup',
          default: false
        }
      },
      props: {
        value: {
          // type: [String, Number, Boolean, Object],
          default: true
        },
        uncheckedValue: {
          // type: [String, Number, Boolean, Object],
          // Not applicable in multi-check mode
          default: false
        },
        indeterminate: {
          // Not applicable in multi-check mode
          type: Boolean,
          default: false
        },
        switch: {
          // Custom switch styling
          type: Boolean,
          default: false
        },
        checked: {
          // v-model (Array when multiple checkboxes have same name)
          // type: [String, Number, Boolean, Object, Array],
          default: null
        }
      },
      computed: {
        isChecked: function isChecked() {
          var checked = this.computedLocalChecked;
          var value = this.value;
  
          if (isArray(checked)) {
            return looseIndexOf(checked, value) > -1;
          } else {
            return looseEqual(checked, value);
          }
        },
        isRadio: function isRadio() {
          return false;
        },
        isCheck: function isCheck() {
          return true;
        }
      },
      watch: {
        computedLocalChecked: function computedLocalChecked(newVal) {
          this.$emit('input', newVal);
  
          if (this.$refs && this.$refs.input) {
            this.$emit('update:indeterminate', this.$refs.input.indeterminate);
          }
        },
        indeterminate: function indeterminate(newVal) {
          this.setIndeterminate(newVal);
        }
      },
      mounted: function mounted() {
        // Set initial indeterminate state
        this.setIndeterminate(this.indeterminate);
      },
      methods: {
        handleChange: function handleChange(_ref) {
          var _ref$target = _ref.target,
              checked = _ref$target.checked,
              indeterminate = _ref$target.indeterminate;
          var localChecked = this.computedLocalChecked;
          var value = this.value;
          var isArr = isArray(localChecked);
          var uncheckedValue = isArr ? null : this.uncheckedValue; // Update computedLocalChecked
  
          if (isArr) {
            var idx = looseIndexOf(localChecked, value);
  
            if (checked && idx < 0) {
              // Add value to array
              localChecked = localChecked.concat(value);
            } else if (!checked && idx > -1) {
              // Remove value from array
              localChecked = localChecked.slice(0, idx).concat(localChecked.slice(idx + 1));
            }
          } else {
            localChecked = checked ? value : uncheckedValue;
          }
  
          this.computedLocalChecked = localChecked; // Change is only emitted on user interaction
  
          this.$emit('change', checked ? value : uncheckedValue); // If this is a child of form-checkbox-group, we emit a change event on it as well
  
          if (this.isGroup) {
            this.bvGroup.$emit('change', localChecked);
          }
  
          this.$emit('update:indeterminate', indeterminate);
        },
        setIndeterminate: function setIndeterminate(state) {
          // Indeterminate only supported in single checkbox mode
          if (isArray(this.computedLocalChecked)) {
            state = false;
          }
  
          if (this.$refs && this.$refs.input) {
            this.$refs.input.indeterminate = state; // Emit update event to prop
  
            this.$emit('update:indeterminate', state);
          }
        }
      }
    });
  
    var BFormRadio = /*#__PURE__*/Vue.extend({
      name: 'BFormRadio',
      mixins: [idMixin, formRadioCheckMixin, // Includes shared render function
      formMixin, formSizeMixin, formStateMixin],
      inject: {
        bvGroup: {
          from: 'bvRadioGroup',
          default: false
        }
      },
      props: {
        checked: {
          // v-model
          // type: [String, Number, Boolean, Object],
          default: null
        }
      },
      computed: {
        // Radio Groups can only have a single value, so determining if checked is simple
        isChecked: function isChecked() {
          return looseEqual(this.value, this.computedLocalChecked);
        },
        // Flags for form-radio-check mixin
        isRadio: function isRadio() {
          return true;
        },
        isCheck: function isCheck() {
          return false;
        }
      },
      watch: {
        // Radio Groups can only have a single value, so our watchers are simple
        computedLocalChecked: function computedLocalChecked() {
          this.$emit('input', this.computedLocalChecked);
        }
      },
      methods: {
        handleChange: function handleChange(_ref) {
          var checked = _ref.target.checked;
          var value = this.value;
          this.computedLocalChecked = value; // Change is only emitted on user interaction
  
          this.$emit('change', checked ? value : null); // If this is a child of form-radio-group, we emit a change event on it as well
  
          if (this.isGroup) {
            this.bvGroup.$emit('change', checked ? value : null);
          }
        }
      }
    });
  
    var formRadioCheckGroupMixin = {
      mixins: [normalizeSlotMixin],
      model: {
        prop: 'checked',
        event: 'input'
      },
      props: {
        validated: {
          type: Boolean,
          default: false
        },
        ariaInvalid: {
          type: [Boolean, String],
          default: false
        },
        stacked: {
          type: Boolean,
          default: false
        },
        plain: {
          type: Boolean,
          default: false
        },
        buttons: {
          // Render as button style
          type: Boolean,
          default: false
        },
        buttonVariant: {
          // Only applicable when rendered with button style
          type: String,
          default: 'secondary'
        }
      },
      computed: {
        inline: function inline() {
          return !this.stacked;
        },
        groupName: function groupName() {
          // Checks/Radios tied to the same model must have the same name,
          // especially for ARIA accessibility.
          return this.name || this.safeId();
        },
        groupClasses: function groupClasses() {
          if (this.buttons) {
            return ['btn-group-toggle', this.inline ? 'btn-group' : 'btn-group-vertical', this.size ? "btn-group-".concat(this.size) : '', this.validated ? "was-validated" : ''];
          }
  
          return [this.validated ? "was-validated" : ''];
        },
        computedAriaInvalid: function computedAriaInvalid() {
          var ariaInvalid = this.ariaInvalid;
  
          if (ariaInvalid === true || ariaInvalid === 'true' || ariaInvalid === '') {
            return 'true';
          }
  
          return this.computedState === false ? 'true' : null;
        }
      },
      watch: {
        checked: function checked(newVal) {
          this.localChecked = newVal;
        },
        localChecked: function localChecked(newVal) {
          this.$emit('input', newVal);
        }
      },
      render: function render(h) {
        var _this = this;
  
        var inputs = this.formOptions.map(function (option, idx) {
          var uid = "_BV_option_".concat(idx, "_");
          return h(_this.isRadioGroup ? BFormRadio : BFormCheckbox, {
            key: uid,
            props: {
              id: _this.safeId(uid),
              value: option.value,
              // Individual radios or checks can be disabled in a group
              disabled: option.disabled || false // We don't need to include these, since the input's will know they are inside here
              // name: this.groupName,
              // form: this.form || null,
              // required: Boolean(this.name && this.required)
  
            }
          }, [h('span', {
            domProps: htmlOrText(option.html, option.text)
          })]);
        });
        return h('div', {
          class: [this.groupClasses, 'bv-no-focus-ring'],
          attrs: {
            id: this.safeId(),
            role: this.isRadioGroup ? 'radiogroup' : 'group',
            // Tabindex to allow group to be focused
            // if needed by screen readers
            tabindex: '-1',
            'aria-required': this.required ? 'true' : null,
            'aria-invalid': this.computedAriaInvalid
          }
        }, [this.normalizeSlot('first'), inputs, this.normalizeSlot('default')]);
      }
    };
  
    var props$w = {
      switches: {
        // Custom switch styling
        type: Boolean,
        default: false
      },
      checked: {
        type: Array,
        default: null
      }
    }; // @vue/component
  
    var BFormCheckboxGroup = /*#__PURE__*/Vue.extend({
      name: 'BFormCheckboxGroup',
      mixins: [idMixin, formMixin, formRadioCheckGroupMixin, // Includes render function
      formOptionsMixin, formSizeMixin, formStateMixin],
      provide: function provide() {
        return {
          bvCheckGroup: this
        };
      },
      props: props$w,
      data: function data() {
        return {
          localChecked: this.checked || []
        };
      },
      computed: {
        isRadioGroup: function isRadioGroup() {
          return false;
        }
      }
    });
  
    var FormCheckboxPlugin = /*#__PURE__*/pluginFactory({
      components: {
        BFormCheckbox: BFormCheckbox,
        BCheckbox: BFormCheckbox,
        BCheck: BFormCheckbox,
        BFormCheckboxGroup: BFormCheckboxGroup,
        BCheckboxGroup: BFormCheckboxGroup,
        BCheckGroup: BFormCheckboxGroup
      }
    });
  
    // v-b-hover directive
  
    var PROP = '__BV_hover_handler__';
    var MOUSEENTER = 'mouseenter';
    var MOUSELEAVE = 'mouseleave'; // --- Utility methods ---
  
    var createListener = function createListener(handler) {
      var listener = function listener(evt) {
        handler(evt.type === MOUSEENTER, evt);
      };
  
      listener.fn = handler;
      return listener;
    };
  
    var updateListeners = function updateListeners(on, el, listener) {
      eventOnOff(on, el, MOUSEENTER, listener, EVENT_OPTIONS_NO_CAPTURE);
      eventOnOff(on, el, MOUSELEAVE, listener, EVENT_OPTIONS_NO_CAPTURE);
    }; // --- Directive bind/unbind/update handler ---
  
  
    var directive = function directive(el, _ref) {
      var _ref$value = _ref.value,
          handler = _ref$value === void 0 ? null : _ref$value;
  
      if (isBrowser) {
        var listener = el[PROP];
        var hasListener = isFunction(listener);
        var handlerChanged = !(hasListener && listener.fn === handler);
  
        if (hasListener && handlerChanged) {
          updateListeners(false, el, listener);
          delete el[PROP];
        }
  
        if (isFunction(handler) && handlerChanged) {
          el[PROP] = createListener(handler);
          updateListeners(true, el, el[PROP]);
        }
      }
    }; // VBHover directive
  
  
    var VBHover = {
      bind: directive,
      componentUpdated: directive,
      unbind: function unbind(el) {
        directive(el, {
          value: null
        });
      }
    };
  
    var dropdownProps = commonProps; // @vue/component
  
    var BVFormBtnLabelControl = /*#__PURE__*/Vue.extend({
      name: 'BVFormBtnLabelControl',
      directives: {
        BHover: VBHover
      },
      mixins: [idMixin, normalizeSlotMixin, dropdownMixin],
      props: {
        value: {
          // This is the value placed on the hidden input
          type: String,
          default: ''
        },
        formattedValue: {
          // This is the value shown in the label
          // Defaults back to `value`
          type: String // default: null
  
        },
        placeholder: {
          // This is the value placed on the hidden input when no value selected
          type: String // default: null
  
        },
        labelSelected: {
          // Value placed in sr-only span inside label when value is present
          type: String // default: null
  
        },
        state: {
          // Tri-state prop: `true`, `false`, or `null`
          type: Boolean,
          // We must explicitly default to `null` here otherwise
          // Vue coerces `undefined` into Boolean `false`
          default: null
        },
        size: {
          type: String // default: null
  
        },
        name: {
          type: String // default: null
  
        },
        form: {
          type: String // default: null
  
        },
        disabled: {
          type: Boolean,
          default: false
        },
        readonly: {
          type: Boolean,
          default: false
        },
        required: {
          type: Boolean,
          default: false
        },
        lang: {
          type: String // default: null
  
        },
        rtl: {
          // Tri-state prop: `true`, `false` or `null`
          type: Boolean,
          // We must explicitly default to `null` here otherwise
          // Vue coerces `undefined` into Boolean `false`
          default: null
        },
        buttonOnly: {
          // When true, renders a btn-group wrapper and visually hides the label
          type: Boolean,
          default: false
        },
        buttonVariant: {
          // Applicable in button mode only
          type: String,
          default: 'secondary'
        },
        menuClass: {
          // Extra classes to apply to the `dropdown-menu` div
          type: [String, Array, Object] // default: null
  
        }
      },
      data: function data() {
        return {
          isHovered: false,
          hasFocus: false
        };
      },
      computed: {
        idButton: function idButton() {
          return this.safeId();
        },
        idLabel: function idLabel() {
          return this.safeId('_value_');
        },
        idMenu: function idMenu() {
          return this.safeId('_dialog_');
        },
        idWrapper: function idWrapper() {
          return this.safeId('_outer_');
        },
        computedDir: function computedDir() {
          return this.rtl === true ? 'rtl' : this.rtl === false ? 'ltr' : null;
        }
      },
      methods: {
        focus: function focus() {
          if (!this.disabled) {
            try {
              this.$refs.toggle.focus();
            } catch (_unused) {}
          }
        },
        blur: function blur() {
          if (!this.disabled) {
            try {
              this.$refs.toggle.blur();
            } catch (_unused2) {}
          }
        },
        setFocus: function setFocus(evt) {
          this.hasFocus = evt.type === 'focus';
        },
        handleHover: function handleHover(hovered) {
          this.isHovered = hovered;
        },
        stopEvent: function stopEvent(evt)
        /* istanbul ignore next */
        {
          evt.stopPropagation();
        }
      },
      render: function render(h) {
        var _class, _class2, _ref;
  
        var idButton = this.idButton;
        var idLabel = this.idLabel;
        var idMenu = this.idMenu;
        var idWrapper = this.idWrapper;
        var disabled = this.disabled;
        var readonly = this.readonly;
        var required = this.required;
        var isHovered = this.isHovered;
        var hasFocus = this.hasFocus;
        var state = this.state;
        var visible = this.visible;
        var size = this.size;
        var value = toString$1(this.value) || '';
        var labelSelected = this.labelSelected;
        var buttonOnly = !!this.buttonOnly;
        var buttonVariant = this.buttonVariant;
        var btnScope = {
          isHovered: isHovered,
          hasFocus: hasFocus,
          state: state,
          opened: visible
        };
        var $button = h('button', {
          ref: 'toggle',
          staticClass: 'btn',
          class: (_class = {}, _defineProperty(_class, "btn-".concat(buttonVariant), buttonOnly), _defineProperty(_class, "btn-".concat(size), !!size), _defineProperty(_class, 'border-0', !buttonOnly), _defineProperty(_class, 'h-auto', !buttonOnly), _defineProperty(_class, 'py-0', !buttonOnly), _defineProperty(_class, 'dropdown-toggle', buttonOnly), _defineProperty(_class, 'dropdown-toggle-no-caret', buttonOnly), _class),
          attrs: {
            id: idButton,
            type: 'button',
            disabled: disabled,
            'aria-haspopup': 'dialog',
            'aria-expanded': visible ? 'true' : 'false',
            'aria-invalid': state === false || required && !value ? 'true' : null,
            'aria-required': required ? 'true' : null
          },
          directives: [{
            name: 'b-hover',
            value: this.handleHover
          }],
          on: {
            mousedown: this.onMousedown,
            click: this.toggle,
            keydown: this.toggle,
            // Handle ENTER, SPACE and DOWN
            '!focus': this.setFocus,
            '!blur': this.setFocus
          }
        }, [this.hasNormalizedSlot('button-content') ? this.normalizeSlot('button-content', btnScope) : h(BIconChevronDown, {
          props: {
            scale: 1.25
          }
        })]); // Hidden input
  
        var $hidden = h();
  
        if (this.name && !disabled) {
          $hidden = h('input', {
            attrs: {
              type: 'hidden',
              name: this.name || null,
              form: this.form || null,
              value: value
            }
          });
        } // Dropdown content
  
  
        var $menu = h('div', {
          ref: 'menu',
          staticClass: 'dropdown-menu p-2',
          class: [this.menuClass, {
            show: visible,
            'dropdown-menu-right': this.right
          }],
          attrs: {
            id: idMenu,
            role: 'dialog',
            tabindex: '-1',
            'aria-modal': 'false',
            'aria-labelledby': idLabel
          },
          on: {
            keydown: this.onKeydown // Handle ESC
  
          }
        }, [this.normalizeSlot('default', {
          opened: visible
        })]); // Value label
  
        var $label = h('label', {
          staticClass: 'form-control text-break text-wrap border-0 bg-transparent h-auto pl-1 m-0',
          class: (_class2 = {
            // Hidden in button only mode
            'sr-only': buttonOnly,
            // Mute the text if showing the placeholder
            'text-muted': !value
          }, _defineProperty(_class2, "form-control-".concat(size), !!size), _defineProperty(_class2, 'is-invalid', state === false), _defineProperty(_class2, 'is-valid', state === true), _class2),
          attrs: {
            id: idLabel,
            for: idButton,
            'aria-invalid': state === false || required && !value ? 'true' : null,
            'aria-required': required ? 'true' : null
          },
          directives: [{
            name: 'b-hover',
            value: this.handleHover
          }],
          on: {
            // Disable bubbling of the click event to
            // prevent menu from closing and re-opening
            '!click': this.stopEvent
          }
        }, [value ? this.formattedValue || value : this.placeholder || '', // Add the selected label for screen readers when a value is provided
        value && labelSelected ? h('bdi', {
          staticClass: 'sr-only'
        }, labelSelected) : '']); // Return the custom form control wrapper
  
        return h('div', {
          staticClass: 'dropdown',
          class: [this.directionClass, (_ref = {
            'btn-group': buttonOnly,
            'b-form-btn-label-control': !buttonOnly,
            'form-control': !buttonOnly
          }, _defineProperty(_ref, "form-control-".concat(size), !!size && !buttonOnly), _defineProperty(_ref, 'd-flex', !buttonOnly), _defineProperty(_ref, 'p-0', !buttonOnly), _defineProperty(_ref, 'h-auto', !buttonOnly), _defineProperty(_ref, 'align-items-stretch', !buttonOnly), _defineProperty(_ref, "focus", hasFocus && !buttonOnly), _defineProperty(_ref, "show", visible), _defineProperty(_ref, 'is-valid', state === true), _defineProperty(_ref, 'is-invalid', state === false), _ref)],
          attrs: {
            id: idWrapper,
            role: buttonOnly ? null : 'group',
            lang: this.lang || null,
            dir: this.computedDir,
            'aria-disabled': disabled,
            'aria-readonly': readonly && !disabled,
            'aria-labelledby': idLabel,
            'aria-invalid': state === false || required && !value ? 'true' : null,
            'aria-required': required ? 'true' : null
          }
        }, [$button, $hidden, $menu, $label]);
      }
    });
  
    var NAME$e = 'BFormDatepicker'; // Fallback to BCalendar prop if no value found
  
    var getConfigFallback = function getConfigFallback(prop) {
      return getComponentConfig(NAME$e, prop) || getComponentConfig('BCalendar', prop);
    }; // We create our props as a mixin so that we can control
    // where they appear in the props listing reference section
  
  
    var propsMixin = {
      props: _objectSpread2({
        value: {
          type: [String, Date],
          default: null
        },
        valueAsDate: {
          type: Boolean,
          default: false
        },
        resetValue: {
          type: [String, Date],
          default: ''
        },
        initialDate: {
          // This specifies the calendar year/month/day that will be shown when
          // first opening the datepicker if no v-model value is provided
          // Default is the current date (or `min`/`max`)
          // Passed directly to <b-calendar>
          type: [String, Date],
          default: null
        },
        placeholder: {
          type: String,
          // Defaults to `labelNoDateSelected` from calendar context
          default: null
        },
        size: {
          type: String,
          default: null
        },
        min: {
          type: [String, Date],
          default: null
        },
        max: {
          type: [String, Date],
          default: null
        },
        disabled: {
          type: Boolean,
          default: false
        },
        readonly: {
          type: Boolean,
          default: false
        },
        required: {
          // If true adds the `aria-required` attribute
          type: Boolean,
          default: false
        },
        name: {
          type: String,
          default: null
        },
        form: {
          type: String,
          default: null
        },
        state: {
          // Tri-state prop: `true`, `false` or `null`
          type: Boolean,
          default: null
        },
        dateDisabledFn: {
          type: Function,
          default: null
        },
        noCloseOnSelect: {
          type: Boolean,
          default: false
        },
        hideHeader: {
          type: Boolean,
          default: false
        },
        locale: {
          type: [String, Array],
          default: null
        },
        startWeekday: {
          // `0` (Sunday), `1` (Monday), ... `6` (Saturday)
          // Day of week to start calendar on
          type: [Number, String],
          default: 0
        },
        direction: {
          type: String,
          default: null
        },
        buttonOnly: {
          type: Boolean,
          default: false
        },
        buttonVariant: {
          // Applicable in button only mode
          type: String,
          default: 'secondary'
        },
        calendarWidth: {
          // Width of the calendar dropdown
          type: String,
          default: '270px'
        },
        selectedVariant: {
          // Variant color to use for the selected date
          type: String,
          default: 'primary'
        },
        todayVariant: {
          // Variant color to use for today's date (defaults to `variant`)
          type: String,
          default: null
        },
        noHighlightToday: {
          // Disable highlighting today's date
          type: Boolean,
          default: false
        },
        todayButton: {
          type: Boolean,
          default: false
        },
        labelTodayButton: {
          type: String,
          default: function _default() {
            return getComponentConfig(NAME$e, 'labelTodayButton');
          }
        },
        todayButtonVariant: {
          type: String,
          default: 'outline-primary'
        },
        resetButton: {
          type: Boolean,
          default: false
        },
        labelResetButton: {
          type: String,
          default: function _default() {
            return getComponentConfig(NAME$e, 'labelResetButton');
          }
        },
        resetButtonVariant: {
          type: String,
          default: 'outline-danger'
        },
        closeButton: {
          type: Boolean,
          default: false
        },
        labelCloseButton: {
          type: String,
          default: function _default() {
            return getComponentConfig(NAME$e, 'labelCloseButton');
          }
        },
        closeButtonVariant: {
          type: String,
          default: 'outline-secondary'
        },
        // Labels for buttons and keyboard shortcuts
        // These pick BCalendar global config if no BFormDate global config
        labelPrevYear: {
          type: String,
          default: function _default() {
            return getConfigFallback('labelPrevYear');
          }
        },
        labelPrevMonth: {
          type: String,
          default: function _default() {
            return getConfigFallback('labelPrevMonth');
          }
        },
        labelCurrentMonth: {
          type: String,
          default: function _default() {
            return getConfigFallback('labelCurrentMonth');
          }
        },
        labelNextMonth: {
          type: String,
          default: function _default() {
            return getConfigFallback('labelNextMonth');
          }
        },
        labelNextYear: {
          type: String,
          default: function _default() {
            return getConfigFallback('labelNextYear');
          }
        },
        labelToday: {
          type: String,
          default: function _default() {
            return getConfigFallback('labelToday');
          }
        },
        labelSelected: {
          type: String,
          default: function _default() {
            return getConfigFallback('labelSelected');
          }
        },
        labelNoDateSelected: {
          type: String,
          default: function _default() {
            return getConfigFallback('labelNoDateSelected');
          }
        },
        labelCalendar: {
          type: String,
          default: function _default() {
            return getConfigFallback('labelCalendar');
          }
        },
        labelNav: {
          type: String,
          default: function _default() {
            return getConfigFallback('labelNav');
          }
        },
        labelHelp: {
          type: String,
          default: function _default() {
            return getConfigFallback('labelHelp');
          }
        },
        dateFormatOptions: {
          // `Intl.DateTimeFormat` object
          type: Object,
          default: function _default() {
            return {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              weekday: 'long'
            };
          }
        },
        // Dark mode
        dark: {
          type: Boolean,
          default: false
        },
        // extra dropdown stuff
        menuClass: {
          type: [String, Array, Object],
          default: null
        }
      }, dropdownProps)
    }; // --- BFormDate component ---
    // @vue/component
  
    var BFormDatepicker = /*#__PURE__*/Vue.extend({
      name: NAME$e,
      // The mixins order determines the order of appearance in the props reference section
      mixins: [idMixin, propsMixin],
      model: {
        prop: 'value',
        event: 'input'
      },
      data: function data() {
        return {
          // We always use `YYYY-MM-DD` value internally
          localYMD: formatYMD(this.value) || '',
          // If the popup is open
          isVisible: false,
          // Context data from BCalendar
          localLocale: null,
          isRTL: false,
          formattedValue: '',
          activeYMD: ''
        };
      },
      computed: {
        calendarYM: function calendarYM() {
          // Returns the calendar year/month
          // Returns the `YYYY-MM` portion of the active calendar date
          return this.activeYMD.slice(0, -3);
        },
        calendarProps: function calendarProps() {
          // Use self for better minification, as `this` won't
          // minimize and we reference it many times below
          var self = this;
          return {
            hidden: !self.isVisible,
            value: self.localYMD,
            min: self.min,
            max: self.max,
            initialDate: self.initialDate,
            readonly: self.readonly,
            disabled: self.disabled,
            locale: self.locale,
            startWeekday: self.startWeekday,
            direction: self.direction,
            width: self.calendarWidth,
            dateDisabledFn: self.dateDisabledFn,
            selectedVariant: self.selectedVariant,
            todayVariant: self.todayVariant,
            hideHeader: self.hideHeader,
            labelPrevYear: self.labelPrevYear,
            labelPrevMonth: self.labelPrevMonth,
            labelCurrentMonth: self.labelCurrentMonth,
            labelNextMonth: self.labelNextMonth,
            labelNextYear: self.labelNextYear,
            labelToday: self.labelToday,
            labelSelected: self.labelSelected,
            labelNoDateSelected: self.labelNoDateSelected,
            labelCalendar: self.labelCalendar,
            labelNav: self.labelNav,
            labelHelp: self.labelHelp,
            dateFormatOptions: self.dateFormatOptions
          };
        },
        computedLang: function computedLang() {
          return (this.localLocale || '').replace(/-u-.*$/i, '') || null;
        },
        computedResetValue: function computedResetValue() {
          return formatYMD(constrainDate(this.resetValue)) || '';
        }
      },
      watch: {
        value: function value(newVal) {
          this.localYMD = formatYMD(newVal) || '';
        },
        localYMD: function localYMD(newVal) {
          // We only update the v-model when the datepicker is open
          if (this.isVisible) {
            this.$emit('input', this.valueAsDate ? parseYMD(newVal) || null : newVal || '');
          }
        },
        calendarYM: function calendarYM(newVal, oldVal)
        /* istanbul ignore next */
        {
          // Displayed calendar month has changed
          // So possibly the calendar height has changed...
          // We need to update popper computed position
          if (newVal !== oldVal && oldVal) {
            try {
              this.$refs.control.updatePopper();
            } catch (_unused) {}
          }
        }
      },
      methods: {
        // Public methods
        focus: function focus() {
          if (!this.disabled) {
            try {
              this.$refs.control.focus();
            } catch (_unused2) {}
          }
        },
        blur: function blur() {
          if (!this.disabled) {
            try {
              this.$refs.control.blur();
            } catch (_unused3) {}
          }
        },
        // Private methods
        setAndClose: function setAndClose(ymd) {
          var _this = this;
  
          this.localYMD = ymd; // Close calendar popup, unless `noCloseOnSelect`
  
          if (!this.noCloseOnSelect) {
            this.$nextTick(function () {
              _this.$refs.control.hide(true);
            });
          }
        },
        onSelected: function onSelected(ymd) {
          var _this2 = this;
  
          this.$nextTick(function () {
            _this2.setAndClose(ymd);
          });
        },
        onInput: function onInput(ymd) {
          if (this.localYMD !== ymd) {
            this.localYMD = ymd;
          }
        },
        onContext: function onContext(ctx) {
          var activeYMD = ctx.activeYMD,
              isRTL = ctx.isRTL,
              locale = ctx.locale,
              selectedYMD = ctx.selectedYMD,
              selectedFormatted = ctx.selectedFormatted;
          this.isRTL = isRTL;
          this.localLocale = locale;
          this.formattedValue = selectedFormatted;
          this.localYMD = selectedYMD;
          this.activeYMD = activeYMD; // Re-emit the context event
  
          this.$emit('context', ctx);
        },
        onTodayButton: function onTodayButton() {
          // Set to today (or min/max if today is out of range)
          this.setAndClose(formatYMD(constrainDate(createDate(), this.min, this.max)));
        },
        onResetButton: function onResetButton() {
          this.setAndClose(this.computedResetValue);
        },
        onCloseButton: function onCloseButton() {
          this.$refs.control.hide(true);
        },
        // Menu handlers
        onShow: function onShow() {
          this.isVisible = true;
        },
        onShown: function onShown() {
          var _this3 = this;
  
          this.$nextTick(function () {
            try {
              _this3.$refs.calendar.focus();
            } catch (_unused4) {}
          });
        },
        onHidden: function onHidden() {
          this.isVisible = false;
        },
        // Render helpers
        defaultButtonFn: function defaultButtonFn(_ref) {
          var isHovered = _ref.isHovered,
              hasFocus = _ref.hasFocus;
          return this.$createElement(isHovered || hasFocus ? BIconCalendarFill : BIconCalendar, {
            attrs: {
              'aria-hidden': 'true'
            }
          });
        }
      },
      render: function render(h) {
        var localYMD = this.localYMD;
        var disabled = this.disabled;
        var readonly = this.readonly;
        var placeholder = isUndefinedOrNull(this.placeholder) ? this.labelNoDateSelected : this.placeholder; // Optional footer buttons
  
        var $footer = [];
  
        if (this.todayButton) {
          var label = this.labelTodayButton;
          $footer.push(h(BButton, {
            props: {
              size: 'sm',
              disabled: disabled || readonly,
              variant: this.todayButtonVariant
            },
            attrs: {
              'aria-label': label || null
            },
            on: {
              click: this.onTodayButton
            }
          }, label));
        }
  
        if (this.resetButton) {
          var _label = this.labelResetButton;
          $footer.push(h(BButton, {
            props: {
              size: 'sm',
              disabled: disabled || readonly,
              variant: this.resetButtonVariant
            },
            attrs: {
              'aria-label': _label || null
            },
            on: {
              click: this.onResetButton
            }
          }, _label));
        }
  
        if (this.closeButton) {
          var _label2 = this.labelCloseButton;
          $footer.push(h(BButton, {
            props: {
              size: 'sm',
              disabled: disabled,
              variant: this.closeButtonVariant
            },
            attrs: {
              'aria-label': _label2 || null
            },
            on: {
              click: this.onCloseButton
            }
          }, _label2));
        }
  
        if ($footer.length > 0) {
          $footer = [h('div', {
            staticClass: 'b-form-date-controls d-flex flex-wrap',
            class: {
              'justify-content-between': $footer.length > 1,
              'justify-content-end': $footer.length < 2
            }
          }, $footer)];
        }
  
        var $calendar = h(BCalendar, {
          key: 'calendar',
          ref: 'calendar',
          staticClass: 'b-form-date-calendar',
          props: this.calendarProps,
          on: {
            selected: this.onSelected,
            input: this.onInput,
            context: this.onContext
          }
        }, $footer);
        return h(BVFormBtnLabelControl, {
          ref: 'control',
          staticClass: 'b-form-datepicker',
          props: _objectSpread2({}, this.$props, {
            // Overridden / computed props
            id: this.safeId(),
            rtl: this.isRTL,
            lang: this.computedLang,
            value: localYMD || '',
            formattedValue: localYMD ? this.formattedValue : '',
            placeholder: placeholder || '',
            menuClass: [{
              'bg-dark': !!this.dark,
              'text-light': !!this.dark
            }, this.menuClass]
          }),
          on: {
            show: this.onShow,
            shown: this.onShown,
            hidden: this.onHidden
          },
          scopedSlots: {
            'button-content': this.$scopedSlots['button-content'] || this.defaultButtonFn
          }
        }, [$calendar]);
      }
    });
  
    var FormDatepickerPlugin = /*#__PURE__*/pluginFactory({
      components: {
        BFormDatepicker: BFormDatepicker,
        BDatepicker: BFormDatepicker
      }
    });
  
    // @vue/component
    var formCustomMixin = {
      props: {
        plain: {
          type: Boolean,
          default: false
        }
      },
      computed: {
        custom: function custom() {
          return !this.plain;
        }
      }
    };
  
    var NAME$f = 'BFormFile';
    var VALUE_EMPTY_DEPRECATED_MSG = 'Setting "value"/"v-model" to an empty string for reset is deprecated. Set to "null" instead.'; // --- Helper methods ---
  
    var isValidValue = function isValidValue(value) {
      return isFile(value) || isArray(value) && value.every(function (v) {
        return isValidValue(v);
      });
    }; // @vue/component
  
  
    var BFormFile = /*#__PURE__*/Vue.extend({
      name: NAME$f,
      mixins: [idMixin, formMixin, formStateMixin, formCustomMixin, normalizeSlotMixin],
      inheritAttrs: false,
      model: {
        prop: 'value',
        event: 'input'
      },
      props: {
        size: {
          type: String,
          default: function _default() {
            return getComponentConfig('BFormControl', 'size');
          }
        },
        value: {
          type: [File, Array],
          default: null,
          validator: function validator(value) {
            /* istanbul ignore next */
            if (value === '') {
              warn(VALUE_EMPTY_DEPRECATED_MSG, NAME$f);
              return true;
            }
  
            return isUndefinedOrNull(value) || isValidValue(value);
          }
        },
        accept: {
          type: String,
          default: ''
        },
        // Instruct input to capture from camera
        capture: {
          type: Boolean,
          default: false
        },
        placeholder: {
          type: String,
          default: function _default() {
            return getComponentConfig(NAME$f, 'placeholder');
          }
        },
        browseText: {
          type: String,
          default: function _default() {
            return getComponentConfig(NAME$f, 'browseText');
          }
        },
        dropPlaceholder: {
          type: String,
          default: function _default() {
            return getComponentConfig(NAME$f, 'dropPlaceholder');
          }
        },
        multiple: {
          type: Boolean,
          default: false
        },
        directory: {
          type: Boolean,
          default: false
        },
        noTraverse: {
          type: Boolean,
          default: false
        },
        noDrop: {
          type: Boolean,
          default: false
        },
        fileNameFormatter: {
          type: Function,
          default: null
        }
      },
      data: function data() {
        return {
          selectedFile: null,
          dragging: false,
          hasFocus: false
        };
      },
      computed: {
        selectLabel: function selectLabel() {
          // Draging active
          if (this.dragging && this.dropPlaceholder) {
            return this.dropPlaceholder;
          } // No file chosen
  
  
          if (!this.selectedFile || this.selectedFile.length === 0) {
            return this.placeholder;
          } // Convert selectedFile to an array (if not already one)
  
  
          var files = concat(this.selectedFile).filter(identity);
  
          if (this.hasNormalizedSlot('file-name')) {
            // There is a slot for formatting the files/names
            return [this.normalizeSlot('file-name', {
              files: files,
              names: files.map(function (f) {
                return f.name;
              })
            })];
          } else {
            // Use the user supplied formatter, or the built in one.
            return isFunction(this.fileNameFormatter) ? toString$1(this.fileNameFormatter(files)) : files.map(function (file) {
              return file.name;
            }).join(', ');
          }
        }
      },
      watch: {
        selectedFile: function selectedFile(newVal, oldVal) {
          // The following test is needed when the file input is "reset" or the
          // exact same file(s) are selected to prevent an infinite loop.
          // When in `multiple` mode we need to check for two empty arrays or
          // two arrays with identical files
          if (newVal === oldVal || isArray(newVal) && isArray(oldVal) && newVal.length === oldVal.length && newVal.every(function (v, i) {
            return v === oldVal[i];
          })) {
            return;
          }
  
          if (!newVal && this.multiple) {
            this.$emit('input', []);
          } else {
            this.$emit('input', newVal);
          }
        },
        value: function value(newVal) {
          if (!newVal || isArray(newVal) && newVal.length === 0) {
            this.reset();
          }
        }
      },
      methods: {
        focusHandler: function focusHandler(evt) {
          // Bootstrap v4 doesn't have focus styling for custom file input
          // Firefox has a '[type=file]:focus ~ sibling' selector issue,
          // so we add a 'focus' class to get around these bugs
          if (this.plain || evt.type === 'focusout') {
            this.hasFocus = false;
          } else {
            // Add focus styling for custom file input
            this.hasFocus = true;
          }
        },
        reset: function reset() {
          // IE 11 doesn't support setting `$input.value` to `''` or `null`
          // So we use this little extra hack to reset the value, just in case
          // This also appears to work on modern browsers as well
          // Wrapped in try in case IE 11 or mobile Safari crap out
          try {
            var $input = this.$refs.input;
            $input.value = '';
            $input.type = '';
            $input.type = 'file';
          } catch (e) {}
  
          this.selectedFile = this.multiple ? [] : null;
        },
        onFileChange: function onFileChange(evt) {
          var _this = this;
  
          // Always emit original event
          this.$emit('change', evt); // Check if special `items` prop is available on event (drop mode)
          // Can be disabled by setting no-traverse
  
          var items = evt.dataTransfer && evt.dataTransfer.items;
          /* istanbul ignore next: not supported in JSDOM */
  
          if (items && !this.noTraverse) {
            var queue = [];
  
            for (var i = 0; i < items.length; i++) {
              var item = items[i].webkitGetAsEntry();
  
              if (item) {
                queue.push(this.traverseFileTree(item));
              }
            }
  
            Promise.all(queue).then(function (filesArr) {
              _this.setFiles(from(filesArr));
            });
            return;
          } // Normal handling
  
  
          this.setFiles(evt.target.files || evt.dataTransfer.files);
        },
        setFiles: function setFiles() {
          var files = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  
          if (!files) {
            /* istanbul ignore next: this will probably not happen */
            this.selectedFile = null;
          } else if (this.multiple) {
            // Convert files to array
            var filesArray = [];
  
            for (var i = 0; i < files.length; i++) {
              filesArray.push(files[i]);
            } // Return file(s) as array
  
  
            this.selectedFile = filesArray;
          } else {
            // Return single file object
            this.selectedFile = files[0] || null;
          }
        },
        onReset: function onReset() {
          // Triggered when the parent form (if any) is reset
          this.selectedFile = this.multiple ? [] : null;
        },
        onDragover: function onDragover(evt)
        /* istanbul ignore next: difficult to test in JSDOM */
        {
          evt.preventDefault();
          evt.stopPropagation();
  
          if (this.noDrop || !this.custom) {
            return;
          }
  
          this.dragging = true;
          evt.dataTransfer.dropEffect = 'copy';
        },
        onDragleave: function onDragleave(evt)
        /* istanbul ignore next: difficult to test in JSDOM */
        {
          evt.preventDefault();
          evt.stopPropagation();
          this.dragging = false;
        },
        onDrop: function onDrop(evt)
        /* istanbul ignore next: difficult to test in JSDOM */
        {
          evt.preventDefault();
          evt.stopPropagation();
  
          if (this.noDrop) {
            return;
          }
  
          this.dragging = false;
  
          if (evt.dataTransfer.files && evt.dataTransfer.files.length > 0) {
            this.onFileChange(evt);
          }
        },
        traverseFileTree: function traverseFileTree(item, path)
        /* istanbul ignore next: not supported in JSDOM */
        {
          var _this2 = this;
  
          // Based on https://stackoverflow.com/questions/3590058
          return new Promise(function (resolve) {
            path = path || '';
  
            if (item.isFile) {
              // Get file
              item.file(function (file) {
                file.$path = path; // Inject $path to file obj
  
                resolve(file);
              });
            } else if (item.isDirectory) {
              // Get folder contents
              item.createReader().readEntries(function (entries) {
                var queue = [];
  
                for (var i = 0; i < entries.length; i++) {
                  queue.push(_this2.traverseFileTree(entries[i], path + item.name + '/'));
                }
  
                Promise.all(queue).then(function (filesArr) {
                  resolve(from(filesArr));
                });
              });
            }
          });
        }
      },
      render: function render(h) {
        // Form Input
        var input = h('input', {
          ref: 'input',
          class: [{
            'form-control-file': this.plain,
            'custom-file-input': this.custom,
            focus: this.custom && this.hasFocus
          }, this.stateClass],
          attrs: _objectSpread2({}, this.$attrs, {
            type: 'file',
            id: this.safeId(),
            name: this.name,
            disabled: this.disabled,
            required: this.required,
            form: this.form || null,
            capture: this.capture || null,
            accept: this.accept || null,
            multiple: this.multiple,
            webkitdirectory: this.directory,
            'aria-required': this.required ? 'true' : null
          }),
          on: {
            change: this.onFileChange,
            focusin: this.focusHandler,
            focusout: this.focusHandler,
            reset: this.onReset
          }
        });
  
        if (this.plain) {
          return input;
        } // Overlay Labels
  
  
        var label = h('label', {
          staticClass: 'custom-file-label',
          class: [this.dragging ? 'dragging' : null],
          attrs: {
            for: this.safeId(),
            'data-browse': this.browseText || null
          }
        }, this.selectLabel); // Return rendered custom file input
  
        return h('div', {
          staticClass: 'custom-file b-form-file',
          class: [this.stateClass, _defineProperty({}, "b-custom-control-".concat(this.size), this.size)],
          attrs: {
            id: this.safeId('_BV_file_outer_')
          },
          on: {
            dragover: this.onDragover,
            dragleave: this.onDragleave,
            drop: this.onDrop
          }
        }, [input, label]);
      }
    });
  
    var FormFilePlugin = /*#__PURE__*/pluginFactory({
      components: {
        BFormFile: BFormFile,
        BFile: BFormFile
      }
    });
  
    /**
     * Suffix can be a falsey value so nothing is appended to string.
     * (helps when looping over props & some shouldn't change)
     * Use data last parameters to allow for currying.
     * @param {string} suffix
     * @param {string} str
     */
  
    var suffixPropName = function suffixPropName(suffix, str) {
      return str + (suffix ? upperFirst(suffix) : '');
    };
  
    var RX_COL_CLASS = /^col-/; // Generates a prop object with a type of `[Boolean, String, Number]`
  
    var boolStrNum = function boolStrNum() {
      return {
        type: [Boolean, String, Number],
        default: false
      };
    }; // Generates a prop object with a type of `[String, Number]`
  
  
    var strNum = function strNum() {
      return {
        type: [String, Number],
        default: null
      };
    }; // Compute a breakpoint class name
  
  
    var computeBreakpoint = function computeBreakpoint(type, breakpoint, val) {
      var className = type;
  
      if (isUndefinedOrNull(val) || val === false) {
        return undefined;
      }
  
      if (breakpoint) {
        className += "-".concat(breakpoint);
      } // Handling the boolean style prop when accepting [Boolean, String, Number]
      // means Vue will not convert <b-col sm></b-col> to sm: true for us.
      // Since the default is false, an empty string indicates the prop's presence.
  
  
      if (type === 'col' && (val === '' || val === true)) {
        // .col-md
        return lowerCase(className);
      } // .order-md-6
  
  
      className += "-".concat(val);
      return lowerCase(className);
    }; // Memoized function for better performance on generating class names
  
  
    var computeBreakpointClass = memoize(computeBreakpoint); // Cached copy of the breakpoint prop names
  
    var breakpointPropMap = create(null); // Lazy evaled props factory for BCol
  
    var generateProps = function generateProps() {
      // Grab the breakpoints from the cached config (exclude the '' (xs) breakpoint)
      var breakpoints = getBreakpointsUpCached().filter(identity); // Supports classes like: .col-sm, .col-md-6, .col-lg-auto
  
      var breakpointCol = breakpoints.reduce(function (propMap, breakpoint) {
        if (breakpoint) {
          // We filter out the '' breakpoint (xs), as making a prop name ''
          // would not work. The `cols` prop is used for `xs`
          propMap[breakpoint] = boolStrNum();
        }
  
        return propMap;
      }, create(null)); // Supports classes like: .offset-md-1, .offset-lg-12
  
      var breakpointOffset = breakpoints.reduce(function (propMap, breakpoint) {
        propMap[suffixPropName(breakpoint, 'offset')] = strNum();
        return propMap;
      }, create(null)); // Supports classes like: .order-md-1, .order-lg-12
  
      var breakpointOrder = breakpoints.reduce(function (propMap, breakpoint) {
        propMap[suffixPropName(breakpoint, 'order')] = strNum();
        return propMap;
      }, create(null)); // For loop doesn't need to check hasOwnProperty
      // when using an object created from null
  
      breakpointPropMap = assign(create(null), {
        col: keys(breakpointCol),
        offset: keys(breakpointOffset),
        order: keys(breakpointOrder)
      }); // Return the generated props
  
      return _objectSpread2({
        // Generic flexbox .col (xs)
        col: {
          type: Boolean,
          default: false
        },
        // .col-[1-12]|auto  (xs)
        cols: strNum()
      }, breakpointCol, {
        offset: strNum()
      }, breakpointOffset, {
        order: strNum()
      }, breakpointOrder, {
        // Flex alignment
        alignSelf: {
          type: String,
          default: null,
          validator: function validator(str) {
            return arrayIncludes(['auto', 'start', 'end', 'center', 'baseline', 'stretch'], str);
          }
        },
        tag: {
          type: String,
          default: 'div'
        }
      });
    }; // We do not use Vue.extend here as that would evaluate the props
    // immediately, which we do not want to happen
    // @vue/component
  
  
    var BCol = {
      name: 'BCol',
      functional: true,
  
      get props() {
        // Allow props to be lazy evaled on first access and
        // then they become a non-getter afterwards.
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get#Smart_self-overwriting_lazy_getters
        delete this.props; // eslint-disable-next-line no-return-assign
  
        return this.props = generateProps();
      },
  
      render: function render(h, _ref) {
        var _classList$push;
  
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;
        var classList = []; // Loop through `col`, `offset`, `order` breakpoint props
  
        for (var type in breakpointPropMap) {
          // Returns colSm, offset, offsetSm, orderMd, etc.
          var _keys = breakpointPropMap[type];
  
          for (var i = 0; i < _keys.length; i++) {
            // computeBreakpoint(col, colSm => Sm, value=[String, Number, Boolean])
            var c = computeBreakpointClass(type, _keys[i].replace(type, ''), props[_keys[i]]); // If a class is returned, push it onto the array.
  
            if (c) {
              classList.push(c);
            }
          }
        }
  
        var hasColClasses = classList.some(function (className) {
          return RX_COL_CLASS.test(className);
        });
        classList.push((_classList$push = {
          // Default to .col if no other col-{bp}-* classes generated nor `cols` specified.
          col: props.col || !hasColClasses && !props.cols
        }, _defineProperty(_classList$push, "col-".concat(props.cols), props.cols), _defineProperty(_classList$push, "offset-".concat(props.offset), props.offset), _defineProperty(_classList$push, "order-".concat(props.order), props.order), _defineProperty(_classList$push, "align-self-".concat(props.alignSelf), props.alignSelf), _classList$push));
        return h(props.tag, a(data, {
          class: classList
        }), children);
      }
    };
  
    var NAME$g = 'BFormGroup'; // Selector for finding first input in the form-group
  
    var SELECTOR$1 = 'input:not([disabled]),textarea:not([disabled]),select:not([disabled])'; // Render helper functions (here rather than polluting the instance with more methods)
  
    var renderInvalidFeedback = function renderInvalidFeedback(h, ctx) {
      var content = ctx.normalizeSlot('invalid-feedback') || ctx.invalidFeedback;
      var invalidFeedback = h();
  
      if (content) {
        invalidFeedback = h(BFormInvalidFeedback, {
          props: {
            id: ctx.invalidFeedbackId,
            // If state is explicitly false, always show the feedback
            state: ctx.computedState,
            tooltip: ctx.tooltip,
            ariaLive: ctx.feedbackAriaLive,
            role: ctx.feedbackAriaLive ? 'alert' : null
          },
          attrs: {
            tabindex: content ? '-1' : null
          }
        }, [content]);
      }
  
      return invalidFeedback;
    };
  
    var renderValidFeedback = function renderValidFeedback(h, ctx) {
      var content = ctx.normalizeSlot('valid-feedback') || ctx.validFeedback;
      var validFeedback = h();
  
      if (content) {
        validFeedback = h(BFormValidFeedback, {
          props: {
            id: ctx.validFeedbackId,
            // If state is explicitly true, always show the feedback
            state: ctx.computedState,
            tooltip: ctx.tooltip,
            ariaLive: ctx.feedbackAriaLive,
            role: ctx.feedbackAriaLive ? 'alert' : null
          },
          attrs: {
            tabindex: content ? '-1' : null
          }
        }, [content]);
      }
  
      return validFeedback;
    };
  
    var renderHelpText = function renderHelpText(h, ctx) {
      // Form help text (description)
      var content = ctx.normalizeSlot('description') || ctx.description;
      var description = h();
  
      if (content) {
        description = h(BFormText, {
          attrs: {
            id: ctx.descriptionId,
            tabindex: content ? '-1' : null
          }
        }, [content]);
      }
  
      return description;
    };
  
    var renderLabel = function renderLabel(h, ctx) {
      // Render label/legend inside b-col if necessary
      var content = ctx.normalizeSlot('label') || ctx.label;
      var labelFor = ctx.labelFor;
      var isLegend = !labelFor;
      var isHorizontal = ctx.isHorizontal;
      var labelTag = isLegend ? 'legend' : 'label';
  
      if (!content && !isHorizontal) {
        return h();
      } else if (ctx.labelSrOnly) {
        var label = h();
  
        if (content) {
          label = h(labelTag, {
            class: 'sr-only',
            attrs: {
              id: ctx.labelId,
              for: labelFor || null
            }
          }, [content]);
        }
  
        return h(isHorizontal ? BCol : 'div', {
          props: isHorizontal ? ctx.labelColProps : {}
        }, [label]);
      } else {
        return h(isHorizontal ? BCol : labelTag, {
          on: isLegend ? {
            click: ctx.legendClick
          } : {},
          props: isHorizontal ? _objectSpread2({
            tag: labelTag
          }, ctx.labelColProps) : {},
          attrs: {
            id: ctx.labelId,
            for: labelFor || null,
            // We add a tab index to legend so that screen readers
            // will properly read the aria-labelledby in IE.
            tabindex: isLegend ? '-1' : null
          },
          class: [// Hide the focus ring on the legend
          isLegend ? 'bv-no-focus-ring' : '', // When horizontal or if a legend is rendered, add col-form-label
          // for correct sizing as Bootstrap has inconsistent font styling
          // for legend in non-horizontal form-groups.
          // See: https://github.com/twbs/bootstrap/issues/27805
          isHorizontal || isLegend ? 'col-form-label' : '', // Emulate label padding top of 0 on legend when not horizontal
          !isHorizontal && isLegend ? 'pt-0' : '', // If not horizontal and not a legend, we add d-block to label
          // so that label-align works
          !isHorizontal && !isLegend ? 'd-block' : '', ctx.labelSize ? "col-form-label-".concat(ctx.labelSize) : '', ctx.labelAlignClasses, ctx.labelClass]
        }, [content]);
      }
    }; // -- BFormGroup Prop factory -- used for lazy generation of props
    // Memoize this function to return cached values to
    // save time in computed functions
  
  
    var makePropName = memoize(function () {
      var breakpoint = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var prefix = arguments.length > 1 ? arguments[1] : undefined;
      return "".concat(prefix).concat(upperFirst(breakpoint));
    }); // BFormGroup prop generator for lazy generation of props
  
    var generateProps$1 = function generateProps() {
      var BREAKPOINTS = getBreakpointsUpCached(); // Generate the labelCol breakpoint props
  
      var bpLabelColProps = BREAKPOINTS.reduce(function (props, breakpoint) {
        // i.e. label-cols, label-cols-sm, label-cols-md, ...
        props[makePropName(breakpoint, 'labelCols')] = {
          type: [Number, String, Boolean],
          default: breakpoint ? false : null
        };
        return props;
      }, create(null)); // Generate the labelAlign breakpoint props
  
      var bpLabelAlignProps = BREAKPOINTS.reduce(function (props, breakpoint) {
        // label-align, label-align-sm, label-align-md, ...
        props[makePropName(breakpoint, 'labelAlign')] = {
          type: String,
          // left, right, center
          default: null
        };
        return props;
      }, create(null));
      return _objectSpread2({
        label: {
          type: String,
          default: null
        },
        labelFor: {
          type: String,
          default: null
        },
        labelSize: {
          type: String,
          default: null
        },
        labelSrOnly: {
          type: Boolean,
          default: false
        }
      }, bpLabelColProps, {}, bpLabelAlignProps, {
        labelClass: {
          type: [String, Array, Object],
          default: null
        },
        description: {
          type: String,
          default: null
        },
        invalidFeedback: {
          type: String,
          default: null
        },
        validFeedback: {
          type: String,
          default: null
        },
        tooltip: {
          // Enable tooltip style feedback
          type: Boolean,
          default: false
        },
        feedbackAriaLive: {
          type: String,
          default: 'assertive'
        },
        validated: {
          type: Boolean,
          default: false
        },
        disabled: {
          type: Boolean,
          default: false
        }
      });
    }; // We do not use Vue.extend here as that would evaluate the props
    // immediately, which we do not want to happen
    // @vue/component
  
  
    var BFormGroup = {
      name: NAME$g,
      mixins: [idMixin, formStateMixin, normalizeSlotMixin],
  
      get props() {
        // Allow props to be lazy evaled on first access and
        // then they become a non-getter afterwards.
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get#Smart_self-overwriting_lazy_getters
        delete this.props; // eslint-disable-next-line no-return-assign
  
        return this.props = generateProps$1();
      },
  
      computed: {
        labelColProps: function labelColProps() {
          var _this = this;
  
          var props = {};
          getBreakpointsUpCached().forEach(function (breakpoint) {
            // Grab the value if the label column breakpoint prop
            var propVal = _this[makePropName(breakpoint, 'labelCols')]; // Handle case where the prop's value is an empty string,
            // which represents true
  
  
            propVal = propVal === '' ? true : propVal || false;
  
            if (!isBoolean(propVal) && propVal !== 'auto') {
              // Convert to column size to number
              propVal = parseInt(propVal, 10) || 0; // Ensure column size is greater than 0
  
              propVal = propVal > 0 ? propVal : false;
            }
  
            if (propVal) {
              // Add the prop to the list of props to give to b-col
              // If breakpoint is '' (labelCols=true), then we use the
              // col prop to make equal width at xs
              var bColPropName = breakpoint || (isBoolean(propVal) ? 'col' : 'cols'); // Add it to the props
  
              props[bColPropName] = propVal;
            }
          });
          return props;
        },
        labelAlignClasses: function labelAlignClasses() {
          var _this2 = this;
  
          var classes = [];
          getBreakpointsUpCached().forEach(function (breakpoint) {
            // Assemble the label column breakpoint align classes
            var propVal = _this2[makePropName(breakpoint, 'labelAlign')] || null;
  
            if (propVal) {
              var className = breakpoint ? "text-".concat(breakpoint, "-").concat(propVal) : "text-".concat(propVal);
              classes.push(className);
            }
          });
          return classes;
        },
        isHorizontal: function isHorizontal() {
          // Determine if the resultant form-group will be rendered
          // horizontal (meaning it has label-col breakpoints)
          return keys(this.labelColProps).length > 0;
        },
        labelId: function labelId() {
          return this.hasNormalizedSlot('label') || this.label ? this.safeId('_BV_label_') : null;
        },
        descriptionId: function descriptionId() {
          return this.hasNormalizedSlot('description') || this.description ? this.safeId('_BV_description_') : null;
        },
        hasInvalidFeedback: function hasInvalidFeedback() {
          // Used for computing aria-describedby
          return this.computedState === false && (this.hasNormalizedSlot('invalid-feedback') || this.invalidFeedback);
        },
        invalidFeedbackId: function invalidFeedbackId() {
          return this.hasInvalidFeedback ? this.safeId('_BV_feedback_invalid_') : null;
        },
        hasValidFeedback: function hasValidFeedback() {
          // Used for computing aria-describedby
          return this.computedState === true && (this.hasNormalizedSlot('valid-feedback') || this.validFeedback);
        },
        validFeedbackId: function validFeedbackId() {
          return this.hasValidFeedback ? this.safeId('_BV_feedback_valid_') : null;
        },
        describedByIds: function describedByIds() {
          // Screen readers will read out any content linked to by aria-describedby
          // even if the content is hidden with `display: none;`, hence we only include
          // feedback IDs if the form-group's state is explicitly valid or invalid.
          return [this.descriptionId, this.invalidFeedbackId, this.validFeedbackId].filter(Boolean).join(' ') || null;
        }
      },
      watch: {
        describedByIds: function describedByIds(add, remove) {
          if (add !== remove) {
            this.setInputDescribedBy(add, remove);
          }
        }
      },
      mounted: function mounted() {
        var _this3 = this;
  
        this.$nextTick(function () {
          // Set the aria-describedby IDs on the input specified by label-for
          // We do this in a nextTick to ensure the children have finished rendering
          _this3.setInputDescribedBy(_this3.describedByIds);
        });
      },
      methods: {
        legendClick: function legendClick(evt) {
          if (this.labelFor) {
            // Don't do anything if labelFor is set
  
            /* istanbul ignore next: clicking a label will focus the input, so no need to test */
            return;
          }
  
          var tagName = evt.target ? evt.target.tagName : '';
  
          if (/^(input|select|textarea|label|button|a)$/i.test(tagName)) {
            // If clicked an interactive element inside legend,
            // we just let the default happen
  
            /* istanbul ignore next */
            return;
          }
  
          var inputs = selectAll(SELECTOR$1, this.$refs.content).filter(isVisible);
  
          if (inputs && inputs.length === 1 && inputs[0].focus) {
            // if only a single input, focus it, emulating label behaviour
            try {
              inputs[0].focus();
            } catch (_unused) {}
          }
        },
        setInputDescribedBy: function setInputDescribedBy(add, remove) {
          // Sets the `aria-describedby` attribute on the input if label-for is set.
          // Optionally accepts a string of IDs to remove as the second parameter.
          // Preserves any aria-describedby value(s) user may have on input.
          if (this.labelFor && isBrowser) {
            var input = select("#".concat(this.labelFor), this.$refs.content);
  
            if (input) {
              var adb = 'aria-describedby';
              var ids = (getAttr(input, adb) || '').split(/\s+/);
              add = (add || '').split(/\s+/);
              remove = (remove || '').split(/\s+/); // Update ID list, preserving any original IDs
              // and ensuring the ID's are unique
  
              ids = ids.filter(function (id) {
                return !arrayIncludes(remove, id);
              }).concat(add).filter(Boolean);
              ids = keys(ids.reduce(function (memo, id) {
                return _objectSpread2({}, memo, _defineProperty({}, id, true));
              }, {})).join(' ').trim();
  
              if (ids) {
                setAttr(input, adb, ids);
              } else {
                // No IDs, so remove the attribute
                removeAttr(input, adb);
              }
            }
          }
        }
      },
      render: function render(h) {
        var isFieldset = !this.labelFor;
        var isHorizontal = this.isHorizontal; // Generate the label
  
        var label = renderLabel(h, this); // Generate the content
  
        var content = h(isHorizontal ? BCol : 'div', {
          ref: 'content',
          // Hide focus ring
          staticClass: 'bv-no-focus-ring',
          attrs: {
            tabindex: isFieldset ? '-1' : null,
            role: isFieldset ? 'group' : null
          }
        }, [this.normalizeSlot('default') || h(), renderInvalidFeedback(h, this), renderValidFeedback(h, this), renderHelpText(h, this)]); // Create the form-group
  
        var data = {
          staticClass: 'form-group',
          class: [this.validated ? 'was-validated' : null, this.stateClass],
          attrs: {
            id: this.safeId(),
            disabled: isFieldset ? this.disabled : null,
            role: isFieldset ? null : 'group',
            'aria-invalid': this.computedState === false ? 'true' : null,
            // Only apply aria-labelledby if we are a horizontal fieldset
            // as the legend is no longer a direct child of fieldset
            'aria-labelledby': isFieldset && isHorizontal ? this.labelId : null,
            // Only apply aria-describedby IDs if we are a fieldset
            // as the input will have the IDs when not a fieldset
            'aria-describedby': isFieldset ? this.describedByIds : null
          }
        }; // Return it wrapped in a form-group
        // Note: Fieldsets do not support adding `row` or `form-row` directly
        // to them due to browser specific render issues, so we move the `form-row`
        // to an inner wrapper div when horizontal and using a fieldset
  
        return h(isFieldset ? 'fieldset' : isHorizontal ? BFormRow : 'div', data, isHorizontal && isFieldset ? [h(BFormRow, [label, content])] : [label, content]);
      }
    };
  
    var FormGroupPlugin = /*#__PURE__*/pluginFactory({
      components: {
        BFormGroup: BFormGroup,
        BFormFieldset: BFormGroup
      }
    });
  
    var formTextMixin = {
      model: {
        prop: 'value',
        event: 'update'
      },
      props: {
        value: {
          type: [String, Number],
          default: ''
        },
        ariaInvalid: {
          type: [Boolean, String],
          default: false
        },
        readonly: {
          type: Boolean,
          default: false
        },
        plaintext: {
          type: Boolean,
          default: false
        },
        autocomplete: {
          type: String,
          default: null
        },
        placeholder: {
          type: String,
          default: null
        },
        formatter: {
          type: Function,
          default: null
        },
        lazyFormatter: {
          type: Boolean,
          default: false
        },
        trim: {
          type: Boolean,
          default: false
        },
        number: {
          type: Boolean,
          default: false
        },
        lazy: {
          // Only update the `v-model` on blur/change events
          type: Boolean,
          default: false
        },
        debounce: {
          // Debounce timout (in ms). Not applicable with `lazy` prop
          type: [Number, String],
          default: 0
        }
      },
      data: function data() {
        return {
          localValue: toString$1(this.value),
          vModelValue: this.value
        };
      },
      computed: {
        computedClass: function computedClass() {
          return [{
            // Range input needs class `custom-range`
            'custom-range': this.type === 'range',
            // `plaintext` not supported by `type="range"` or `type="color"`
            'form-control-plaintext': this.plaintext && this.type !== 'range' && this.type !== 'color',
            // `form-control` not used by `type="range"` or `plaintext`
            // Always used by `type="color"`
            'form-control': !this.plaintext && this.type !== 'range' || this.type === 'color'
          }, this.sizeFormClass, this.stateClass];
        },
        computedAriaInvalid: function computedAriaInvalid() {
          if (!this.ariaInvalid || this.ariaInvalid === 'false') {
            // `this.ariaInvalid` is `null` or `false` or 'false'
            return this.computedState === false ? 'true' : null;
          }
  
          if (this.ariaInvalid === true) {
            // User wants explicit `:aria-invalid="true"`
            return 'true';
          } // Most likely a string value (which could be the string 'true')
  
  
          return this.ariaInvalid;
        },
        computedDebounce: function computedDebounce() {
          // Ensure we have a positive number equal to or greater than 0
          return Math.max(toInteger(this.debounce) || 0, 0);
        },
        hasFormatter: function hasFormatter() {
          return isFunction(this.formatter);
        }
      },
      watch: {
        value: function value(newVal) {
          var stringifyValue = toString$1(newVal);
  
          if (stringifyValue !== this.localValue && newVal !== this.vModelValue) {
            // Clear any pending debounce timeout, as we are overwriting the user input
            this.clearDebounce(); // Update the local values
  
            this.localValue = stringifyValue;
            this.vModelValue = newVal;
          }
        }
      },
      mounted: function mounted() {
        // Create non-reactive property and set up destroy handler
        this.$_inputDebounceTimer = null;
        this.$on('hook:beforeDestroy', this.clearDebounce); // Preset the internal state
  
        var value = this.value;
        var stringifyValue = toString$1(value);
        /* istanbul ignore next */
  
        if (stringifyValue !== this.localValue && value !== this.vModelValue) {
          this.localValue = stringifyValue;
          this.vModelValue = value;
        }
      },
      methods: {
        clearDebounce: function clearDebounce() {
          clearTimeout(this.$_inputDebounceTimer);
          this.$_inputDebounceTimer = null;
        },
        formatValue: function formatValue(value, evt) {
          var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          value = toString$1(value);
  
          if (this.hasFormatter && (!this.lazyFormatter || force)) {
            value = this.formatter(value, evt);
          }
  
          return value;
        },
        modifyValue: function modifyValue(value) {
          // Emulate `.trim` modifier behaviour
          if (this.trim) {
            value = value.trim();
          } // Emulate `.number` modifier behaviour
  
  
          if (this.number) {
            var number = toFloat(value);
            value = isNaN(number) ? value : number;
          }
  
          return value;
        },
        updateValue: function updateValue(value) {
          var _this = this;
  
          var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var lazy = this.lazy;
  
          if (lazy && !force) {
            return;
          }
  
          value = this.modifyValue(value);
  
          if (value !== this.vModelValue) {
            this.clearDebounce();
  
            var doUpdate = function doUpdate() {
              _this.vModelValue = value;
  
              _this.$emit('update', value);
            };
  
            var debounce = this.computedDebounce; // Only debounce the value update when a value greater than `0`
            // is set and we are not in lazy mode or this is a forced update
  
            if (debounce > 0 && !lazy && !force) {
              this.$_inputDebounceTimer = setTimeout(doUpdate, debounce);
            } else {
              // Immediately update the v-model
              doUpdate();
            }
          } else if (this.hasFormatter) {
            // When the `vModelValue` hasn't changed but the actual input value
            // is out of sync, make sure to change it to the given one
            // Usually caused by browser autocomplete and how it triggers the
            // change or input event, or depending on the formatter function
            // https://github.com/bootstrap-vue/bootstrap-vue/issues/2657
            // https://github.com/bootstrap-vue/bootstrap-vue/issues/3498
  
            /* istanbul ignore next: hard to test */
            var $input = this.$refs.input;
            /* istanbul ignore if: hard to test out of sync value */
  
            if ($input && value !== $input.value) {
              $input.value = value;
            }
          }
        },
        onInput: function onInput(evt) {
          // `evt.target.composing` is set by Vue
          // https://github.com/vuejs/vue/blob/dev/src/platforms/web/runtime/directives/model.js
          // TODO: Is this needed now with the latest Vue?
  
          /* istanbul ignore if: hard to test composition events */
          if (evt.target.composing) {
            return;
          }
  
          var value = evt.target.value;
          var formattedValue = this.formatValue(value, evt); // Exit when the `formatter` function strictly returned `false`
          // or prevented the input event
  
          /* istanbul ignore next */
  
          if (formattedValue === false || evt.defaultPrevented) {
            evt.preventDefault();
            return;
          }
  
          this.localValue = formattedValue;
          this.updateValue(formattedValue);
          this.$emit('input', formattedValue);
        },
        onChange: function onChange(evt) {
          var value = evt.target.value;
          var formattedValue = this.formatValue(value, evt); // Exit when the `formatter` function strictly returned `false`
          // or prevented the input event
  
          /* istanbul ignore next */
  
          if (formattedValue === false || evt.defaultPrevented) {
            evt.preventDefault();
            return;
          }
  
          this.localValue = formattedValue;
          this.updateValue(formattedValue, true);
          this.$emit('change', formattedValue);
        },
        onBlur: function onBlur(evt) {
          // Apply the `localValue` on blur to prevent cursor jumps
          // on mobile browsers (e.g. caused by autocomplete)
          var value = evt.target.value;
          var formattedValue = this.formatValue(value, evt, true);
  
          if (formattedValue !== false) {
            // We need to use the modified value here to apply the
            // `.trim` and `.number` modifiers properly
            this.localValue = toString$1(this.modifyValue(formattedValue)); // We pass the formatted value here since the `updateValue` method
            // handles the modifiers itself
  
            this.updateValue(formattedValue, true);
          } // Emit native blur event
  
  
          this.$emit('blur', evt);
        },
        focus: function focus() {
          // For external handler that may want a focus method
          if (!this.disabled) {
            this.$el.focus();
          }
        },
        blur: function blur() {
          // For external handler that may want a blur method
          if (!this.disabled) {
            this.$el.blur();
          }
        }
      }
    };
  
    // @vue/component
    var formSelectionMixin = {
      computed: {
        selectionStart: {
          // Expose selectionStart for formatters, etc
          cache: false,
          get: function get()
          /* istanbul ignore next */
          {
            return this.$refs.input.selectionStart;
          },
          set: function set(val)
          /* istanbul ignore next */
          {
            this.$refs.input.selectionStart = val;
          }
        },
        selectionEnd: {
          // Expose selectionEnd for formatters, etc
          cache: false,
          get: function get()
          /* istanbul ignore next */
          {
            return this.$refs.input.selectionEnd;
          },
          set: function set(val)
          /* istanbul ignore next */
          {
            this.$refs.input.selectionEnd = val;
          }
        },
        selectionDirection: {
          // Expose selectionDirection for formatters, etc
          cache: false,
          get: function get()
          /* istanbul ignore next */
          {
            return this.$refs.input.selectionDirection;
          },
          set: function set(val)
          /* istanbul ignore next */
          {
            this.$refs.input.selectionDirection = val;
          }
        }
      },
      methods: {
        select: function select()
        /* istanbul ignore next */
        {
          var _this$$refs$input;
  
          // For external handler that may want a select() method
          (_this$$refs$input = this.$refs.input).select.apply(_this$$refs$input, arguments);
        },
        setSelectionRange: function setSelectionRange()
        /* istanbul ignore next */
        {
          var _this$$refs$input2;
  
          // For external handler that may want a setSelectionRange(a,b,c) method
          (_this$$refs$input2 = this.$refs.input).setSelectionRange.apply(_this$$refs$input2, arguments);
        },
        setRangeText: function setRangeText()
        /* istanbul ignore next */
        {
          var _this$$refs$input3;
  
          // For external handler that may want a setRangeText(a,b,c) method
          (_this$$refs$input3 = this.$refs.input).setRangeText.apply(_this$$refs$input3, arguments);
        }
      }
    };
  
    // @vue/component
    var formValidityMixin = {
      computed: {
        validity: {
          // Expose validity property
          cache: false,
          get: function get()
          /* istanbul ignore next */
          {
            return this.$refs.input.validity;
          }
        },
        validationMessage: {
          // Expose validationMessage property
          cache: false,
          get: function get()
          /* istanbul ignore next */
          {
            return this.$refs.input.validationMessage;
          }
        },
        willValidate: {
          // Expose willValidate property
          cache: false,
          get: function get()
          /* istanbul ignore next */
          {
            return this.$refs.input.willValidate;
          }
        }
      },
      methods: {
        setCustomValidity: function setCustomValidity()
        /* istanbul ignore next */
        {
          var _this$$refs$input;
  
          // For external handler that may want a setCustomValidity(...) method
          return (_this$$refs$input = this.$refs.input).setCustomValidity.apply(_this$$refs$input, arguments);
        },
        checkValidity: function checkValidity()
        /* istanbul ignore next */
        {
          var _this$$refs$input2;
  
          // For external handler that may want a checkValidity(...) method
          return (_this$$refs$input2 = this.$refs.input).checkValidity.apply(_this$$refs$input2, arguments);
        },
        reportValidity: function reportValidity()
        /* istanbul ignore next */
        {
          var _this$$refs$input3;
  
          // For external handler that may want a reportValidity(...) method
          return (_this$$refs$input3 = this.$refs.input).reportValidity.apply(_this$$refs$input3, arguments);
        }
      }
    };
  
    var TYPES = ['text', 'password', 'email', 'number', 'url', 'tel', 'search', 'range', 'color', 'date', 'time', 'datetime', 'datetime-local', 'month', 'week']; // @vue/component
  
    var BFormInput = /*#__PURE__*/Vue.extend({
      name: 'BFormInput',
      mixins: [idMixin, formMixin, formSizeMixin, formStateMixin, formTextMixin, formSelectionMixin, formValidityMixin],
      props: {
        // value prop defined in form-text mixin
        // value: { },
        type: {
          type: String,
          default: 'text',
          validator: function validator(type) {
            return arrayIncludes(TYPES, type);
          }
        },
        noWheel: {
          // Disable mousewheel to prevent wheel from changing values (i.e. number/date).
          type: Boolean,
          default: false
        },
        min: {
          type: [String, Number],
          default: null
        },
        max: {
          type: [String, Number],
          default: null
        },
        step: {
          type: [String, Number],
          default: null
        },
        list: {
          type: String,
          default: null
        }
      },
      computed: {
        localType: function localType() {
          // We only allow certain types
          return arrayIncludes(TYPES, this.type) ? this.type : 'text';
        }
      },
      watch: {
        noWheel: function noWheel(newVal) {
          this.setWheelStopper(newVal);
        }
      },
      mounted: function mounted() {
        this.setWheelStopper(this.noWheel);
      },
      deactivated: function deactivated() {
        // Turn off listeners when keep-alive component deactivated
  
        /* istanbul ignore next */
        this.setWheelStopper(false);
      },
      activated: function activated() {
        // Turn on listeners (if no-wheel) when keep-alive component activated
  
        /* istanbul ignore next */
        this.setWheelStopper(this.noWheel);
      },
      beforeDestroy: function beforeDestroy() {
        /* istanbul ignore next */
        this.setWheelStopper(false);
      },
      methods: {
        setWheelStopper: function setWheelStopper(on) {
          var input = this.$el; // We use native events, so that we don't interfere with propagation
  
          eventOnOff(on, input, 'focus', this.onWheelFocus);
          eventOnOff(on, input, 'blur', this.onWheelBlur);
  
          if (!on) {
            eventOff(document, 'wheel', this.stopWheel);
          }
        },
        onWheelFocus: function onWheelFocus() {
          eventOn(document, 'wheel', this.stopWheel);
        },
        onWheelBlur: function onWheelBlur() {
          eventOff(document, 'wheel', this.stopWheel);
        },
        stopWheel: function stopWheel(evt) {
          evt.preventDefault();
          this.$el.blur();
        }
      },
      render: function render(h) {
        var self = this;
        return h('input', {
          ref: 'input',
          class: self.computedClass,
          directives: [{
            name: 'model',
            rawName: 'v-model',
            value: self.localValue,
            expression: 'localValue'
          }],
          attrs: {
            id: self.safeId(),
            name: self.name,
            form: self.form || null,
            type: self.localType,
            disabled: self.disabled,
            placeholder: self.placeholder,
            required: self.required,
            autocomplete: self.autocomplete || null,
            readonly: self.readonly || self.plaintext,
            min: self.min,
            max: self.max,
            step: self.step,
            list: self.localType !== 'password' ? self.list : null,
            'aria-required': self.required ? 'true' : null,
            'aria-invalid': self.computedAriaInvalid
          },
          domProps: {
            value: self.localValue
          },
          on: _objectSpread2({}, self.$listeners, {
            input: self.onInput,
            change: self.onChange,
            blur: self.onBlur
          })
        });
      }
    });
  
    var FormInputPlugin = /*#__PURE__*/pluginFactory({
      components: {
        BFormInput: BFormInput,
        BInput: BFormInput
      }
    });
  
    var props$x = {
      checked: {
        // type: [String, Number, Boolean, Object],
        default: null
      }
    }; // @vue/component
  
    var BFormRadioGroup = /*#__PURE__*/Vue.extend({
      name: 'BFormRadioGroup',
      mixins: [idMixin, formMixin, formRadioCheckGroupMixin, // Includes render function
      formOptionsMixin, formSizeMixin, formStateMixin],
      provide: function provide() {
        return {
          bvRadioGroup: this
        };
      },
      props: props$x,
      data: function data() {
        return {
          localChecked: this.checked
        };
      },
      computed: {
        isRadioGroup: function isRadioGroup() {
          return true;
        }
      }
    });
  
    var FormRadioPlugin = /*#__PURE__*/pluginFactory({
      components: {
        BFormRadio: BFormRadio,
        BRadio: BFormRadio,
        BFormRadioGroup: BFormRadioGroup,
        BRadioGroup: BFormRadioGroup
      }
    });
  
    var optionsMixin = {
      mixins: [formOptionsMixin],
      props: {
        labelField: {
          type: String,
          default: 'label'
        },
        optionsField: {
          type: String,
          default: 'options'
        }
      },
      methods: {
        normalizeOption: function normalizeOption(option) {
          var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  
          // When the option is an object, normalize it
          if (isPlainObject(option)) {
            var value = get(option, this.valueField);
            var text = get(option, this.textField);
            var options = get(option, this.optionsField); // When it has options, create an `<optgroup>` object
  
            if (isArray(options)) {
              return {
                label: String(get(option, this.labelField) || text),
                options: options
              };
            } // Otherwise create an `<option>` object
  
  
            return {
              value: isUndefined(value) ? key || text : value,
              text: String(isUndefined(text) ? key : text),
              html: get(option, this.htmlField),
              disabled: Boolean(get(option, this.disabledField))
            };
          } // Otherwise create an `<option>` object from the given value
  
  
          return {
            value: key || option,
            text: String(option),
            disabled: false
          };
        }
      }
    };
  
    var NAME$h = 'BFormSelectOption';
    var props$y = {
      value: {
        // type: [String, Number, Boolean, Object],
        required: true
      },
      disabled: {
        type: Boolean,
        default: false
      }
    }; // @vue/component
  
    var BFormSelectOption = /*#__PURE__*/Vue.extend({
      name: NAME$h,
      functional: true,
      props: props$y,
      render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;
        var value = props.value,
            disabled = props.disabled;
        return h('option', a(data, {
          attrs: {
            disabled: disabled
          },
          domProps: {
            value: value
          }
        }), children);
      }
    });
  
    var BFormSelectOptionGroup = /*#__PURE__*/Vue.extend({
      name: 'BFormSelectOptionGroup',
      mixins: [normalizeSlotMixin, formOptionsMixin],
      props: {
        label: {
          type: String,
          required: true
        }
      },
      render: function render(h) {
        return h('optgroup', {
          attrs: {
            label: this.label
          }
        }, [this.normalizeSlot('first'), this.formOptions.map(function (option, index) {
          return h(BFormSelectOption, {
            props: {
              value: option.value,
              disabled: option.disabled
            },
            domProps: htmlOrText(option.html, option.text),
            key: "option_".concat(index, "_opt")
          });
        }), this.normalizeSlot('default')]);
      }
    });
  
    var BFormSelect = /*#__PURE__*/Vue.extend({
      name: 'BFormSelect',
      mixins: [idMixin, normalizeSlotMixin, formMixin, formSizeMixin, formStateMixin, formCustomMixin, optionsMixin],
      model: {
        prop: 'value',
        event: 'input'
      },
      props: {
        value: {// type: [Object, Array, String, Number, Boolean],
          // default: undefined
        },
        multiple: {
          type: Boolean,
          default: false
        },
        selectSize: {
          // Browsers default size to 0, which shows 4 rows in most browsers in multiple mode
          // Size of 1 can bork out Firefox
          type: Number,
          default: 0
        },
        ariaInvalid: {
          type: [Boolean, String],
          default: false
        }
      },
      data: function data() {
        return {
          localValue: this.value
        };
      },
      computed: {
        computedSelectSize: function computedSelectSize() {
          // Custom selects with a size of zero causes the arrows to be hidden,
          // so dont render the size attribute in this case
          return !this.plain && this.selectSize === 0 ? null : this.selectSize;
        },
        inputClass: function inputClass() {
          return [this.plain ? 'form-control' : 'custom-select', this.size && this.plain ? "form-control-".concat(this.size) : null, this.size && !this.plain ? "custom-select-".concat(this.size) : null, this.stateClass];
        },
        computedAriaInvalid: function computedAriaInvalid() {
          if (this.ariaInvalid === true || this.ariaInvalid === 'true') {
            return 'true';
          }
  
          return this.stateClass === 'is-invalid' ? 'true' : null;
        }
      },
      watch: {
        value: function value(newVal) {
          this.localValue = newVal;
        },
        localValue: function localValue() {
          this.$emit('input', this.localValue);
        }
      },
      methods: {
        focus: function focus() {
          this.$refs.input.focus();
        },
        blur: function blur() {
          this.$refs.input.blur();
        }
      },
      render: function render(h) {
        var _this = this;
  
        return h('select', {
          ref: 'input',
          class: this.inputClass,
          directives: [{
            name: 'model',
            rawName: 'v-model',
            value: this.localValue,
            expression: 'localValue'
          }],
          attrs: {
            id: this.safeId(),
            name: this.name,
            form: this.form || null,
            multiple: this.multiple || null,
            size: this.computedSelectSize,
            disabled: this.disabled,
            required: this.required,
            'aria-required': this.required ? 'true' : null,
            'aria-invalid': this.computedAriaInvalid
          },
          on: {
            change: function change(evt) {
              var target = evt.target;
              var selectedVal = from(target.options).filter(function (o) {
                return o.selected;
              }).map(function (o) {
                return '_value' in o ? o._value : o.value;
              });
              _this.localValue = target.multiple ? selectedVal : selectedVal[0];
  
              _this.$nextTick(function () {
                _this.$emit('change', _this.localValue);
              });
            }
          }
        }, [this.normalizeSlot('first'), this.formOptions.map(function (option, index) {
          var key = "option_".concat(index, "_opt");
          var options = option.options;
          return isArray(options) ? h(BFormSelectOptionGroup, {
            props: {
              label: option.label,
              options: options
            },
            key: key
          }) : h(BFormSelectOption, {
            props: {
              value: option.value,
              disabled: option.disabled
            },
            domProps: htmlOrText(option.html, option.text),
            key: key
          });
        }), this.normalizeSlot('default')]);
      }
    });
  
    var FormSelectPlugin = /*#__PURE__*/pluginFactory({
      components: {
        BFormSelect: BFormSelect,
        BFormSelectOption: BFormSelectOption,
        BFormSelectOptionGroup: BFormSelectOptionGroup,
        BSelect: BFormSelect,
        BSelectOption: BFormSelectOption,
        BSelectOptionGroup: BFormSelectOptionGroup
      }
    });
  
    var NAME$i = 'BFormSpinbutton';
    var UP$1 = KEY_CODES.UP,
        DOWN$1 = KEY_CODES.DOWN,
        HOME$1 = KEY_CODES.HOME,
        END$1 = KEY_CODES.END,
        PAGEUP$1 = KEY_CODES.PAGEUP,
        PAGEDOWN$1 = KEY_CODES.PAGEDOWN; // Default for spin button range and step
  
    var DEFAULT_MIN = 1;
    var DEFAULT_MAX = 100;
    var DEFAULT_STEP = 1; // Delay before auto-repeat in ms
  
    var DEFAULT_REPEAT_DELAY = 500; // Repeat interval in ms
  
    var DEFAULT_REPEAT_INTERVAL = 100; // Repeat rate increased after number of repeats
  
    var DEFAULT_REPEAT_THRESHOLD = 10; // Repeat speed multiplier (step multiplier, must be an integer)
  
    var DEFAULT_REPEAT_MULTIPLIER = 4; // --- Helper functions ---
  
    var defaultNumber = function defaultNumber(value) {
      var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      value = toFloat(value);
      return isNaN(value) ? defaultValue : value;
    };
  
    var defaultInteger = function defaultInteger(value) {
      var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      value = toInteger(value);
      return isNaN(value) ? Math.abs(defaultValue) : value;
    }; // --- BFormSpinbutton ---
    // @vue/component
  
  
    var BFormSpinbutton = /*#__PURE__*/Vue.extend({
      name: NAME$i,
      mixins: [idMixin, normalizeSlotMixin],
      inheritAttrs: false,
      props: {
        value: {
          // Should this really be String, to match native number inputs?
          type: Number,
          default: null
        },
        min: {
          type: [Number, String],
          default: DEFAULT_MIN
        },
        max: {
          type: [Number, String],
          default: DEFAULT_MAX
        },
        step: {
          type: [Number, String],
          default: DEFAULT_STEP
        },
        wrap: {
          type: Boolean,
          default: false
        },
        formatterFn: {
          type: Function // default: null
  
        },
        size: {
          type: String // default: null
  
        },
        placeholder: {
          type: String,
          default: null
        },
        disabled: {
          type: Boolean,
          default: false
        },
        readonly: {
          type: Boolean,
          default: false
        },
        required: {
          // Only affects the `aria-invalid` attribute
          type: Boolean,
          default: false
        },
        name: {
          type: String // default: null
  
        },
        form: {
          type: String // default: null
  
        },
        state: {
          // Tri-state prop: `true`, `false`, or `null`
          type: Boolean,
          default: null
        },
        inline: {
          type: Boolean,
          default: false
        },
        vertical: {
          type: Boolean,
          default: false
        },
        ariaLabel: {
          type: String,
          default: null
        },
        ariaControls: {
          type: String,
          default: null
        },
        labelDecrement: {
          type: String,
          default: function _default() {
            return getComponentConfig(NAME$i, 'labelDecrement');
          }
        },
        labelIncrement: {
          type: String,
          default: function _default() {
            return getComponentConfig(NAME$i, 'labelIncrement');
          }
        },
        locale: {
          type: [String, Array],
          default: null
        },
        repeatDelay: {
          type: [Number, String],
          default: DEFAULT_REPEAT_DELAY
        },
        repeatInterval: {
          type: [Number, String],
          default: DEFAULT_REPEAT_INTERVAL
        },
        repeatThreshold: {
          type: [Number, String],
          default: DEFAULT_REPEAT_THRESHOLD
        },
        repeatStepMultiplier: {
          type: [Number, String],
          default: DEFAULT_REPEAT_MULTIPLIER
        }
      },
      data: function data() {
        return {
          localValue: defaultNumber(this.value),
          hasFocus: false
        };
      },
      computed: {
        computedStep: function computedStep() {
          return defaultNumber(this.step, DEFAULT_STEP);
        },
        computedMin: function computedMin() {
          return defaultNumber(this.min, DEFAULT_MIN);
        },
        computedMax: function computedMax() {
          // We round down to the nearest maximum step value
          var max = defaultNumber(this.max, DEFAULT_MAX);
          var step = this.computedStep;
          var min = this.computedMin;
          return Math.floor((max - min) / step) * step + min;
        },
        computedDelay: function computedDelay() {
          return defaultInteger(this.repeatDelay, DEFAULT_REPEAT_DELAY) || DEFAULT_REPEAT_DELAY;
        },
        computedInterval: function computedInterval() {
          return defaultInteger(this.repeatInterval, DEFAULT_REPEAT_INTERVAL) || DEFAULT_REPEAT_INTERVAL;
        },
        computedThreshold: function computedThreshold() {
          return defaultInteger(this.repeatThreshold, DEFAULT_REPEAT_THRESHOLD) || 1;
        },
        computedStepMultiplier: function computedStepMultiplier() {
          return defaultInteger(this.repeatStepMultiplier, DEFAULT_REPEAT_MULTIPLIER) || 1;
        },
        computedPrecision: function computedPrecision() {
          // Quick and dirty way to get the number of decimals
          var step = this.computedStep;
          return Math.floor(step) === step ? 0 : (step.toString().split('.')[1] || '').length;
        },
        computedMultiplier: function computedMultiplier() {
          return Math.pow(10, this.computedPrecision || 0);
        },
        valueAsFixed: function valueAsFixed() {
          var value = this.localValue;
          return isNull(value) ? '' : value.toFixed(this.computedPrecision);
        },
        computedLocale: function computedLocale() {
          var locales = concat(this.locale).filter(identity);
          var nf = new Intl.NumberFormat(locales);
          return nf.resolvedOptions().locale;
        },
        computedRTL: function computedRTL() {
          return isLocaleRTL(this.computedLocale);
        },
        defaultFormatter: function defaultFormatter() {
          // Returns and `Intl.NumberFormat` formatter method reference
          var precision = this.computedPrecision;
          var nf = new Intl.NumberFormat(this.computedLocale, {
            style: 'decimal',
            useGrouping: false,
            minimumIntegerDigits: 1,
            minimumFractionDigits: precision,
            maximumFractionDigits: precision,
            notation: 'standard'
          }); // Return the format method reference
  
          return nf.format;
        }
      },
      watch: {
        value: function value(_value) {
          _value = toFloat(_value); // Will be `NaN` if `value` is `null`
  
          this.localValue = isNaN(_value) ? null : _value;
        },
        localValue: function localValue(value) {
          this.$emit('input', value);
        },
        disabled: function disabled(_disabled) {
          if (_disabled) {
            this.clearRepeat();
          }
        },
        readonly: function readonly(_readonly) {
          if (_readonly) {
            this.clearRepeat();
          }
        }
      },
      created: function created() {
        // Create non reactive properties
        this.$_autoDelayTimer = null;
        this.$_autoRepeatTimer = null;
        this.$_keyIsDown = false;
      },
      beforeDestroy: function beforeDestroy() {
        this.clearRepeat();
      },
      deactivated: function deactivated()
      /* istanbul ignore next */
      {
        this.clearRepeat();
      },
      methods: {
        // --- Public methods ---
        focus: function focus() {
          if (!this.disabled) {
            try {
              this.$refs.spinner.focus();
            } catch (_unused) {}
          }
        },
        blur: function blur() {
          if (!this.disabled) {
            try {
              this.$refs.spinner.blur();
            } catch (_unused2) {}
          }
        },
        // --- Private methods ---
        emitChange: function emitChange() {
          this.$emit('change', this.localValue);
        },
        stepValue: function stepValue(direction) {
          // Sets a new incremented or decremented value, supporting optional wrapping
          // Direction is either +1 or -1 (or a multiple thereof)
          var value = this.localValue;
  
          if (!this.disabled && !isNull(value)) {
            var step = this.computedStep * direction;
            var min = this.computedMin;
            var max = this.computedMax;
            var multiplier = this.computedMultiplier;
            var wrap = this.wrap; // We ensure that the value steps like a native input
  
            value = Math.round((value - min) / step) * step + min + step; // We ensure that precision is maintained (decimals)
  
            value = Math.round(value * multiplier) / multiplier; // Handle if wrapping is enabled
  
            this.localValue = value > max ? wrap ? min : max : value < min ? wrap ? max : min : value;
          }
        },
        onFocusBlur: function onFocusBlur(evt) {
          if (!this.disabled) {
            this.hasFocus = evt.type === 'focus';
          } else {
            this.hasFocus = false;
          }
        },
        stepUp: function stepUp() {
          var multiplier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
          var value = this.localValue;
  
          if (isNull(value)) {
            this.localValue = this.computedMin;
          } else {
            this.stepValue(+1 * multiplier);
          }
        },
        stepDown: function stepDown() {
          var multiplier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
          var value = this.localValue;
  
          if (isNull(value)) {
            this.localValue = this.wrap ? this.computedMax : this.computedMin;
          } else {
            this.stepValue(-1 * multiplier);
          }
        },
        onKeydown: function onKeydown(evt) {
          var keyCode = evt.keyCode,
              altKey = evt.altKey,
              ctrlKey = evt.ctrlKey,
              metaKey = evt.metaKey;
          /* istanbul ignore if */
  
          if (this.disabled || this.readonly || altKey || ctrlKey || metaKey) {
            return;
          }
  
          if (arrayIncludes([UP$1, DOWN$1, HOME$1, END$1, PAGEUP$1, PAGEDOWN$1], keyCode)) {
            // https://w3c.github.io/aria-practices/#spinbutton
            evt.preventDefault();
            /* istanbul ignore if */
  
            if (this.$_keyIsDown) {
              // Keypress is already in progress
              return;
            }
  
            this.resetTimers();
  
            if (arrayIncludes([UP$1, DOWN$1], keyCode)) {
              // The following use the custom auto-repeat handling
              this.$_keyIsDown = true;
  
              if (keyCode === UP$1) {
                this.handleStepRepeat(evt, this.stepUp);
              } else if (keyCode === DOWN$1) {
                this.handleStepRepeat(evt, this.stepDown);
              }
            } else {
              // These use native OS key repeating
              if (keyCode === PAGEUP$1) {
                this.stepUp(this.computedStepMultiplier);
              } else if (keyCode === PAGEDOWN$1) {
                this.stepDown(this.computedStepMultiplier);
              } else if (keyCode === HOME$1) {
                this.localValue = this.computedMin;
              } else if (keyCode === END$1) {
                this.localValue = this.computedMax;
              }
            }
          }
        },
        onKeyup: function onKeyup(evt) {
          // Emit a change event when the keyup happens
          var keyCode = evt.keyCode,
              altKey = evt.altKey,
              ctrlKey = evt.ctrlKey,
              metaKey = evt.metaKey;
          /* istanbul ignore if */
  
          if (this.disabled || this.readonly || altKey || ctrlKey || metaKey) {
            return;
          }
  
          if (arrayIncludes([UP$1, DOWN$1, HOME$1, END$1, PAGEUP$1, PAGEDOWN$1], keyCode)) {
            this.resetTimers();
            this.$_keyIsDown = false;
            evt.preventDefault();
            this.emitChange();
          }
        },
        handleStepRepeat: function handleStepRepeat(evt, stepper) {
          var _this = this;
  
          var _ref = evt || {},
              type = _ref.type,
              button = _ref.button;
  
          if (!this.disabled && !this.readonly) {
            /* istanbul ignore if */
            if (type === 'mousedown' && button) {
              // We only respond to left (main === 0) button clicks
              return;
            }
  
            this.resetTimers(); // Step the counter initially
  
            stepper(1);
            var threshold = this.computedThreshold;
            var multiplier = this.computedStepMultiplier;
            var delay = this.computedDelay;
            var interval = this.computedInterval; // Initiate the delay/repeat interval
  
            this.$_autoDelayTimer = setTimeout(function () {
              var count = 0;
              _this.$_autoRepeatTimer = setInterval(function () {
                // After N initial repeats, we increase the incrementing step amount
                // We do this to minimize screen reader announcements of the value
                // (values are announced every change, which can be chatty for SR users)
                // And to make it easer to select a value when the range is large
                stepper(count < threshold ? 1 : multiplier);
                count++;
              }, interval);
            }, delay);
          }
        },
        onMouseup: function onMouseup(evt) {
          // `<body>` listener, only enabled when mousedown starts
          var _ref2 = evt || {},
              type = _ref2.type,
              button = _ref2.button;
          /* istanbul ignore if */
  
  
          if (type === 'mouseup' && button) {
            // Ignore non left button (main === 0) mouse button click
            return;
          }
  
          evt.preventDefault();
          this.resetTimers();
          this.setMouseup(false); // Trigger the change event
  
          this.emitChange();
        },
        setMouseup: function setMouseup(on) {
          // Enable or disabled the body mouseup/touchend handlers
          // Use try/catch to handle case when called server side
          try {
            eventOnOff(on, document.body, 'mouseup', this.onMouseup, false);
            eventOnOff(on, document.body, 'touchend', this.onMouseup, false);
          } catch (_unused3) {}
        },
        resetTimers: function resetTimers() {
          clearTimeout(this.$_autoDelayTimer);
          clearInterval(this.$_autoRepeatTimer);
        },
        clearRepeat: function clearRepeat() {
          this.resetTimers();
          this.setMouseup(false);
          this.$_keyIsDown = false;
        }
      },
      render: function render(h) {
        var _this2 = this,
            _class;
  
        var spinId = this.safeId();
        var value = this.localValue;
        var isVertical = this.vertical;
        var isInline = this.inline && !isVertical;
        var isDisabled = this.disabled;
        var isReadonly = this.readonly && !isDisabled;
        var isRequired = this.required && !isReadonly && !isDisabled;
        var state = this.state;
        var size = this.size;
        var hasValue = !isNull(value);
        var formatter = isFunction(this.formatterFn) ? this.formatterFn : this.defaultFormatter;
  
        var makeButton = function makeButton(stepper, label, IconCmp, keyRef, shortcut, btnDisabled, slotName) {
          var $icon = h(IconCmp, {
            props: {
              scale: _this2.hasFocus ? 1.5 : 1.25
            },
            attrs: {
              'aria-hidden': 'true'
            }
          });
          var scope = {
            hasFocus: _this2.hasFocus
          };
  
          var handler = function handler(evt) {
            if (!isDisabled && !isReadonly) {
              evt.preventDefault();
  
              _this2.setMouseup(true);
  
              try {
                // Since we `preventDefault()`, we must manually focus the button
                evt.currentTarget.focus();
              } catch (_unused4) {}
  
              _this2.handleStepRepeat(evt, stepper);
            }
          };
  
          return h('button', {
            key: keyRef || null,
            ref: keyRef,
            staticClass: 'btn btn-sm border-0 rounded-0',
            class: {
              'py-0': !isVertical
            },
            attrs: {
              tabindex: '-1',
              type: 'button',
              disabled: isDisabled || isReadonly || btnDisabled,
              'aria-disabled': isDisabled || isReadonly || btnDisabled ? 'true' : null,
              'aria-controls': spinId,
              'aria-label': label || null,
              'aria-keyshortcuts': shortcut || null
            },
            on: {
              mousedown: handler,
              touchstart: handler
            }
          }, [h('div', {}, [_this2.normalizeSlot(slotName, scope) || $icon])]);
        }; // TODO: Add button disabled state when `wrap` is `false` and at value max/min
  
  
        var $increment = makeButton(this.stepUp, this.labelIncrement, BIconPlus, 'inc', 'ArrowUp', false, 'increment');
        var $decrement = makeButton(this.stepDown, this.labelDecrement, BIconDash, 'dec', 'ArrowDown', false, 'decrement');
        var $hidden = h();
  
        if (this.name && !isDisabled) {
          $hidden = h('input', {
            key: 'hidden',
            attrs: {
              type: 'hidden',
              name: this.name,
              form: this.form || null,
              // TODO: Should this be set to '' if value is out of range?
              value: this.valueAsFixed
            }
          });
        }
  
        var $spin = h( // We use 'output' element to make this accept a `<label for="id">` (Except IE)
        'output', {
          ref: 'spinner',
          key: 'output',
          staticClass: 'flex-grow-1',
          class: {
            'w-100': !isVertical && !isInline,
            'd-flex': isVertical,
            'align-self-center': !isVertical,
            'align-items-center': isVertical,
            'py-1': isVertical,
            'px-1': !isVertical,
            'mx-1': isVertical,
            'border-top': isVertical,
            'border-bottom': isVertical,
            'border-left': !isVertical,
            'border-right': !isVertical
          },
          attrs: _objectSpread2({
            dir: this.computedRTL ? 'rtl' : 'ltr'
          }, this.$attrs, {
            id: spinId,
            role: 'spinbutton',
            tabindex: isDisabled ? null : '0',
            'aria-live': 'off',
            'aria-label': this.ariaLabel || null,
            'aria-controls': this.ariaControls || null,
            // TODO: May want to check if the value is in range
            'aria-invalid': state === false || !hasValue && isRequired ? 'true' : null,
            'aria-required': isRequired ? 'true' : null,
            // These attrs are required for role spinbutton
            'aria-valuemin': toString$1(this.computedMin),
            'aria-valuemax': toString$1(this.computedMax),
            // These should be `null` if the value is out of range
            // They must also be non-existent attrs if the value is out of range or `null`
            'aria-valuenow': hasValue ? value : null,
            'aria-valuetext': hasValue ? formatter(value) : null
          })
        }, [h('bdi', {
          staticClass: 'w-100'
        }, hasValue ? formatter(value) : this.placeholder || '')]);
        return h('div', {
          staticClass: 'b-form-spinbutton form-control p-0',
          class: (_class = {
            disabled: isDisabled,
            readonly: isReadonly,
            focus: this.hasFocus
          }, _defineProperty(_class, "form-control-".concat(size), !!size), _defineProperty(_class, 'd-inline-flex', isInline || isVertical), _defineProperty(_class, 'd-flex', !isInline && !isVertical), _defineProperty(_class, 'align-items-stretch', !isVertical), _defineProperty(_class, 'flex-column', isVertical), _defineProperty(_class, 'is-valid', state === true), _defineProperty(_class, 'is-invalid', state === false), _class),
          attrs: {
            role: 'group',
            lang: this.computedLocale,
            tabindex: isDisabled ? null : '-1',
            title: this.ariaLabel
          },
          on: {
            keydown: this.onKeydown,
            keyup: this.onKeyup,
            // We use capture phase (`!` prefix) since focus and blur do not bubble
            '!focus': this.onFocusBlur,
            '!blur': this.onFocusBlur
          }
        }, isVertical ? [$increment, $hidden, $spin, $decrement] : [$decrement, $hidden, $spin, $increment]);
      }
    });
  
    var FormSpinbuttonPlugin = /*#__PURE__*/pluginFactory({
      components: {
        BFormSpinbutton: BFormSpinbutton,
        BSpinbutton: BFormSpinbutton
      }
    });
  
    var NAME$j = 'BFormTag';
    var BFormTag = /*#__PURE__*/Vue.extend({
      name: NAME$j,
      mixins: [idMixin, normalizeSlotMixin],
      props: {
        variant: {
          type: String,
          default: function _default() {
            return getComponentConfig(NAME$j, 'variant');
          }
        },
        disabled: {
          type: Boolean,
          default: false
        },
        title: {
          type: String,
          default: null
        },
        pill: {
          type: Boolean,
          default: false
        },
        removeLabel: {
          type: String,
          default: function _default() {
            return getComponentConfig(NAME$j, 'removeLabel');
          }
        },
        tag: {
          type: String,
          default: 'span'
        }
      },
      methods: {
        onDelete: function onDelete(evt) {
          var type = evt.type,
              keyCode = evt.keyCode;
  
          if (!this.disabled && (type === 'click' || type === 'keydown' && keyCode === KEY_CODES.DELETE)) {
            this.$emit('remove');
          }
        }
      },
      render: function render(h) {
        var tagId = this.safeId();
        var tagLabelId = this.safeId('_taglabel_');
        var $remove = h();
  
        if (!this.disabled) {
          $remove = h(BButtonClose, {
            staticClass: 'b-form-tag-remove ml-1',
            props: {
              ariaLabel: this.removeLabel
            },
            attrs: {
              'aria-controls': tagId,
              'aria-describedby': tagLabelId,
              'aria-keyshortcuts': 'Delete'
            },
            on: {
              click: this.onDelete,
              keydown: this.onDelete
            }
          });
        }
  
        var $tag = h('span', {
          staticClass: 'b-form-tag-content flex-grow-1 text-truncate',
          attrs: {
            id: tagLabelId
          }
        }, this.normalizeSlot('default') || this.title || [h()]);
        return h(BBadge, {
          staticClass: 'b-form-tag d-inline-flex align-items-baseline mw-100',
          class: {
            disabled: this.disabled
          },
          attrs: {
            id: tagId,
            title: this.title || null,
            'aria-labelledby': tagLabelId
          },
          props: {
            tag: this.tag,
            variant: this.variant,
            pill: this.pill
          }
        }, [$tag, $remove]);
      }
    });
  
    var NAME$k = 'BFormTags'; // Supported input types (for built in input)
  
    var TYPES$1 = ['text', 'email', 'tel', 'url', 'number']; // Pre-compiled regular expressions for performance reasons
  
    var RX_SPACES = /[\s\uFEFF\xA0]+/g; // KeyCode constants
  
    var ENTER$1 = KEY_CODES.ENTER,
        BACKSPACE = KEY_CODES.BACKSPACE,
        DELETE = KEY_CODES.DELETE; // --- Utility methods ---
    // Escape special chars in string and replace
    // contiguous spaces with a whitespace match
  
    var escapeRegExpChars = function escapeRegExpChars(str) {
      return escapeRegExp(str).replace(RX_SPACES, '\\s');
    }; // Remove leading/trailing spaces from array of tags and remove duplicates
  
  
    var cleanTags = function cleanTags(tags) {
      return concat(tags).map(function (tag) {
        return trim(toString$1(tag));
      }).filter(function (tag, index, arr) {
        return tag.length > 0 && arr.indexOf(tag) === index;
      });
    }; // Processes an input/change event, normalizing string or event argument
  
  
    var processEventValue = function processEventValue(evt) {
      return isString(evt) ? evt : isEvent(evt) ? evt.target.value || '' : '';
    }; // Returns a fresh empty `tagsState` object
  
  
    var cleanTagsState = function cleanTagsState() {
      return {
        all: [],
        valid: [],
        invalid: [],
        duplicate: []
      };
    }; // @vue/component
  
  
    var BFormTags = /*#__PURE__*/Vue.extend({
      name: NAME$k,
      mixins: [idMixin, normalizeSlotMixin],
      model: {
        // Even though this is the default that Vue assumes, we need
        // to add it for the docs to reflect that this is the model
        prop: 'value',
        event: 'input'
      },
      props: {
        inputId: {
          type: String,
          default: null
        },
        placeholder: {
          type: String,
          default: function _default() {
            return getComponentConfig(NAME$k, 'placeholder');
          }
        },
        disabled: {
          type: Boolean,
          default: false
        },
        name: {
          type: String,
          default: null
        },
        form: {
          type: String,
          default: null
        },
        autofocus: {
          type: Boolean,
          default: false
        },
        state: {
          // Tri-state: `true`, `false`, `null`
          type: Boolean,
          default: null
        },
        size: {
          type: String,
          default: null
        },
        inputType: {
          type: String,
          default: 'text',
          validator: function validator(type) {
            return arrayIncludes(TYPES$1, type);
          }
        },
        inputClass: {
          type: [String, Array, Object],
          default: null
        },
        inputAttrs: {
          // Additional attributes to add to the input element
          type: Object,
          default: function _default() {
            return {};
          }
        },
        addButtonText: {
          type: String,
          default: function _default() {
            return getComponentConfig(NAME$k, 'addButtonText');
          }
        },
        addButtonVariant: {
          type: String,
          default: function _default() {
            return getComponentConfig(NAME$k, 'addButtonVariant');
          }
        },
        tagVariant: {
          type: String,
          default: function _default() {
            return getComponentConfig(NAME$k, 'tagVariant');
          }
        },
        tagClass: {
          type: [String, Array, Object],
          default: null
        },
        tagPills: {
          type: Boolean,
          default: false
        },
        tagRemoveLabel: {
          type: String,
          default: function _default() {
            return getComponentConfig(NAME$k, 'tagRemoveLabel');
          }
        },
        tagRemovedLabel: {
          type: String,
          default: function _default() {
            return getComponentConfig(NAME$k, 'tagRemovedLabel');
          }
        },
        tagValidator: {
          type: Function,
          default: null
        },
        duplicateTagText: {
          type: String,
          default: function _default() {
            return getComponentConfig(NAME$k, 'duplicateTagText');
          }
        },
        invalidTagText: {
          type: String,
          default: function _default() {
            return getComponentConfig(NAME$k, 'invalidTagText');
          }
        },
        separator: {
          // Character (or characters) that trigger adding tags
          type: [String, Array],
          default: null
        },
        removeOnDelete: {
          // Enable deleting last tag in list when BACKSPACE is
          // pressed and input is empty
          type: Boolean,
          default: false
        },
        addOnChange: {
          // Enable change event triggering tag addition
          // Handy if using <select> as the input
          type: Boolean,
          default: false
        },
        noAddOnEnter: {
          // Disable ENTER key from triggering tag addition
          type: Boolean,
          default: false
        },
        noOuterFocus: {
          // Disable the focus ring on the root element
          type: Boolean,
          default: false
        },
        value: {
          // The v-model prop
          type: Array,
          default: function _default() {
            return [];
          }
        }
      },
      data: function data() {
        return {
          hasFocus: false,
          newTag: '',
          tags: [],
          // Tags that were removed
          removedTags: [],
          // Populated when tags are parsed
          tagsState: cleanTagsState()
        };
      },
      computed: {
        computedInputId: function computedInputId() {
          return this.inputId || this.safeId('__input__');
        },
        computedInputType: function computedInputType() {
          // We only allow certain types
          return arrayIncludes(TYPES$1, this.inputType) ? this.inputType : 'text';
        },
        computedInputAttrs: function computedInputAttrs() {
          return _objectSpread2({}, this.inputAttrs, {
            // Must have attributes
            id: this.computedInputId,
            value: this.newTag,
            disabled: this.disabled || null,
            form: this.form || null
          });
        },
        computedInputHandlers: function computedInputHandlers() {
          return {
            input: this.onInputInput,
            change: this.onInputChange,
            keydown: this.onInputKeydown
          };
        },
        computedSeparator: function computedSeparator() {
          // Merge the array into a string
          return concat(this.separator).filter(isString).filter(identity).join('');
        },
        computedSeparatorRegExp: function computedSeparatorRegExp() {
          // We use a computed prop here to precompile the RegExp
          // The RegExp is a character class RE in the form of `/[abc]+/`
          // where a, b, and c are the valid separator characters
          // -> `tags = str.split(/[abc]+/).filter(t => t)`
          var separator = this.computedSeparator;
          return separator ? new RegExp("[".concat(escapeRegExpChars(separator), "]+")) : null;
        },
        computedJoiner: function computedJoiner() {
          // When tag(s) are invalid or duplicate, we leave them
          // in the input so that the user can see them
          // If there are more than one tag in the input, we use the
          // first separator character as the separator in the input
          // We append a space if the first separator is not a space
          var joiner = this.computedSeparator.charAt(0);
          return joiner !== ' ' ? "".concat(joiner, " ") : joiner;
        },
        disableAddButton: function disableAddButton() {
          var _this = this;
  
          // If 'Add' button should be disabled
          // If the input contains at least one tag that can
          // be added, then the 'Add' button should be enabled
          var newTag = trim(this.newTag);
          return newTag === '' || !this.splitTags(newTag).some(function (t) {
            return !arrayIncludes(_this.tags, t) && _this.validateTag(t);
          });
        },
        duplicateTags: function duplicateTags() {
          return this.tagsState.duplicate;
        },
        hasDuplicateTags: function hasDuplicateTags() {
          return this.duplicateTags.length > 0;
        },
        invalidTags: function invalidTags() {
          return this.tagsState.invalid;
        },
        hasInvalidTags: function hasInvalidTags() {
          return this.invalidTags.length > 0;
        }
      },
      watch: {
        value: function value(newVal) {
          this.tags = cleanTags(newVal);
        },
        tags: function tags(newVal, oldVal) {
          // Update the `v-model` (if it differs from the value prop)
          if (!looseEqual(newVal, this.value)) {
            this.$emit('input', newVal);
          }
  
          if (!looseEqual(newVal, oldVal)) {
            newVal = concat(newVal).filter(identity);
            oldVal = concat(oldVal).filter(identity);
            this.removedTags = oldVal.filter(function (old) {
              return !arrayIncludes(newVal, old);
            });
          }
        },
        tagsState: function tagsState(newVal, oldVal) {
          // Emit a tag-state event when the `tagsState` object changes
          if (!looseEqual(newVal, oldVal)) {
            this.$emit('tag-state', newVal.valid, newVal.invalid, newVal.duplicate);
          }
        }
      },
      created: function created() {
        // We do this in created to make sure an input event emits
        // if the cleaned tags are not equal to the value prop
        this.tags = cleanTags(this.value);
      },
      mounted: function mounted() {
        this.handleAutofocus();
      },
      activated: function activated()
      /* istanbul ignore next */
      {
        this.handleAutofocus();
      },
      methods: {
        addTag: function addTag(newTag) {
          newTag = isString(newTag) ? newTag : this.newTag;
          /* istanbul ignore next */
  
          if (this.disabled || trim(newTag) === '') {
            // Early exit
            return;
          }
  
          var parsed = this.parseTags(newTag); // Add any new tags to the `tags` array, or if the
          // array of `allTags` is empty, we clear the input
  
          if (parsed.valid.length > 0 || parsed.all.length === 0) {
            // Clear the user input element (and leave in any invalid/duplicate tag(s)
  
            /* istanbul ignore if: full testing to be added later */
            if (matches(this.getInput(), 'select')) {
              // The following is needed to properly
              // work with `<select>` elements
              this.newTag = '';
            } else {
              var invalidAndDuplicates = [].concat(_toConsumableArray(parsed.invalid), _toConsumableArray(parsed.duplicate));
              this.newTag = parsed.all.filter(function (tag) {
                return arrayIncludes(invalidAndDuplicates, tag);
              }).join(this.computedJoiner).concat(invalidAndDuplicates.length > 0 ? this.computedJoiner.charAt(0) : '');
            }
          }
  
          if (parsed.valid.length > 0) {
            // We add the new tags in one atomic operation
            // to trigger reactivity once (instead of once per tag)
            // We do this after we update the new tag input value
            // `concat()` can be faster than array spread, when both args are arrays
            this.tags = concat(this.tags, parsed.valid);
          }
  
          this.tagsState = parsed; // Attempt to re-focus the input (specifically for when using the Add
          // button, as the button disappears after successfully adding a tag
  
          this.focus();
        },
        removeTag: function removeTag(tag) {
          var _this2 = this;
  
          /* istanbul ignore next */
          if (this.disabled) {
            return;
          } // TODO:
          //   Add `onRemoveTag(tag)` user method, which if returns `false`
          //   will prevent the tag from being removed (i.e. confirmation)
          //   Or emit cancelable `BvEvent`
  
  
          this.tags = this.tags.filter(function (t) {
            return t !== tag;
          }); // Return focus to the input (if possible)
  
          this.$nextTick(function () {
            _this2.focus();
          });
        },
        // --- Input element event handlers ---
        onInputInput: function onInputInput(evt) {
          /* istanbul ignore next: hard to test composition events */
          if (this.disabled || isEvent(evt) && evt.target.composing) {
            // `evt.target.composing` is set by Vue (`v-model` directive)
            // https://github.com/vuejs/vue/blob/dev/src/platforms/web/runtime/directives/model.js
            return;
          }
  
          var newTag = processEventValue(evt);
          var separatorRe = this.computedSeparatorRegExp;
  
          if (this.newTag !== newTag) {
            this.newTag = newTag;
          } // We ignore leading whitespace for the following
  
  
          newTag = trimLeft(newTag);
  
          if (separatorRe && separatorRe.test(newTag.slice(-1))) {
            // A trailing separator character was entered, so add the tag(s)
            // Note: More than one tag on input event is possible via copy/paste
            this.addTag();
          } else {
            // Validate (parse tags) on input event
            this.tagsState = newTag === '' ? cleanTagsState() : this.parseTags(newTag);
          }
        },
        onInputChange: function onInputChange(evt) {
          // Change is triggered on `<input>` blur, or `<select>` selected
          // This event is opt-in
          if (!this.disabled && this.addOnChange) {
            var newTag = processEventValue(evt);
            /* istanbul ignore next */
  
            if (this.newTag !== newTag) {
              this.newTag = newTag;
            }
  
            this.addTag();
          }
        },
        onInputKeydown: function onInputKeydown(evt) {
          // Early exit
  
          /* istanbul ignore next */
          if (this.disabled || !isEvent(evt)) {
            return;
          }
  
          var keyCode = evt.keyCode;
          var value = evt.target.value || '';
          /* istanbul ignore else: testing to be added later */
  
          if (!this.noAddOnEnter && keyCode === ENTER$1) {
            // Attempt to add the tag when user presses enter
            evt.preventDefault();
            this.addTag();
          } else if (this.removeOnDelete && (keyCode === BACKSPACE || keyCode === DELETE) && value === '') {
            // Remove the last tag if the user pressed backspace/delete and the input is empty
            evt.preventDefault();
            this.tags = this.tags.slice(0, -1);
          }
        },
        // --- Wrapper event handlers ---
        onClick: function onClick(evt) {
          var _this3 = this;
  
          if (!this.disabled && isEvent(evt) && evt.target === evt.currentTarget) {
            this.$nextTick(function () {
              _this3.focus();
            });
          }
        },
        onFocusin: function onFocusin() {
          this.hasFocus = true;
        },
        onFocusout: function onFocusout() {
          this.hasFocus = false;
        },
        handleAutofocus: function handleAutofocus() {
          var _this4 = this;
  
          this.$nextTick(function () {
            requestAF(function () {
              if (_this4.autofocus && !_this4.disabled) {
                _this4.focus();
              }
            });
          });
        },
        // --- Public methods ---
        focus: function focus() {
          if (!this.disabled) {
            try {
              this.getInput().focus();
            } catch (_unused) {}
          }
        },
        blur: function blur() {
          try {
            this.getInput().blur();
          } catch (_unused2) {}
        },
        // --- Private methods ---
        splitTags: function splitTags(newTag) {
          // Split the input into an array of raw tags
          newTag = toString$1(newTag);
          var separatorRe = this.computedSeparatorRegExp; // Split the tag(s) via the optional separator
          // Normally only a single tag is provided, but copy/paste
          // can enter multiple tags in a single operation
  
          return (separatorRe ? newTag.split(separatorRe) : [newTag]).map(trim).filter(identity);
        },
        parseTags: function parseTags(newTag) {
          var _this5 = this;
  
          // Takes `newTag` value and parses it into `validTags`,
          // `invalidTags`, and duplicate tags as an object
          // Split the input into raw tags
          var tags = this.splitTags(newTag); // Base results
  
          var parsed = {
            all: tags,
            valid: [],
            invalid: [],
            duplicate: []
          }; // Parse the unique tags
  
          tags.forEach(function (tag) {
            if (arrayIncludes(_this5.tags, tag) || arrayIncludes(parsed.valid, tag)) {
              // Unique duplicate tags
              if (!arrayIncludes(parsed.duplicate, tag)) {
                parsed.duplicate.push(tag);
              }
            } else if (_this5.validateTag(tag)) {
              // We only add unique/valid tags
              parsed.valid.push(tag);
            } else {
              // Unique invalid tags
              if (!arrayIncludes(parsed.invalid, tag)) {
                parsed.invalid.push(tag);
              }
            }
          });
          return parsed;
        },
        validateTag: function validateTag(tag) {
          // Call the user supplied tag validator
          var validator = this.tagValidator;
          return isFunction(validator) ? validator(tag) : true;
        },
        getInput: function getInput() {
          // Returns the input element reference (or null if not found)
          return select("#".concat(this.computedInputId), this.$el);
        },
        // Default User Interface render
        defaultRender: function defaultRender(_ref) {
          var tags = _ref.tags,
              addTag = _ref.addTag,
              removeTag = _ref.removeTag,
              inputType = _ref.inputType,
              inputAttrs = _ref.inputAttrs,
              inputHandlers = _ref.inputHandlers,
              inputClass = _ref.inputClass,
              tagClass = _ref.tagClass,
              tagVariant = _ref.tagVariant,
              tagPills = _ref.tagPills,
              tagRemoveLabel = _ref.tagRemoveLabel,
              invalidTagText = _ref.invalidTagText,
              duplicateTagText = _ref.duplicateTagText,
              isInvalid = _ref.isInvalid,
              isDuplicate = _ref.isDuplicate,
              disabled = _ref.disabled,
              placeholder = _ref.placeholder,
              addButtonText = _ref.addButtonText,
              addButtonVariant = _ref.addButtonVariant,
              disableAddButton = _ref.disableAddButton;
          var h = this.$createElement; // Make the list of tags
  
          var $tags = tags.map(function (tag) {
            tag = toString$1(tag);
            return h(BFormTag, {
              key: "li-tag__".concat(tag),
              staticClass: 'mt-1 mr-1',
              class: tagClass,
              props: {
                // `BFormTag` will auto generate an ID
                // so we do not need to set the ID prop
                tag: 'li',
                title: tag,
                disabled: disabled,
                variant: tagVariant,
                pill: tagPills,
                removeLabel: tagRemoveLabel
              },
              on: {
                remove: function remove() {
                  return removeTag(tag);
                }
              }
            }, tag);
          }); // Feedback IDs if needed
  
          var invalidFeedbackId = invalidTagText && isInvalid ? this.safeId('__invalid_feedback__') : null;
          var duplicateFeedbackId = duplicateTagText && isDuplicate ? this.safeId('__duplicate_feedback__') : null; // Compute the `aria-describedby` attribute value
  
          var ariaDescribedby = [inputAttrs['aria-describedby'], invalidFeedbackId, duplicateFeedbackId].filter(identity).join(' '); // Input
  
          var $input = h('input', {
            ref: 'input',
            // Directive needed to get `evt.target.composing` set (if needed)
            directives: [{
              name: 'model',
              value: inputAttrs.value
            }],
            staticClass: 'b-form-tags-input w-100 flex-grow-1 p-0 m-0 bg-transparent border-0',
            class: inputClass,
            style: {
              outline: 0,
              minWidth: '5rem'
            },
            attrs: _objectSpread2({}, inputAttrs, {
              'aria-describedby': ariaDescribedby || null,
              type: inputType,
              placeholder: placeholder || null
            }),
            domProps: {
              value: inputAttrs.value
            },
            on: inputHandlers
          }); // Add button
  
          var $button = h(BButton, {
            ref: 'button',
            staticClass: 'b-form-tags-button py-0',
            class: {
              // Only show the button if the tag can be added
              // We use the `invisible` class instead of not rendering
              // the button, so that we maintain layout to prevent
              // the user input from jumping around
              invisible: disableAddButton
            },
            style: {
              fontSize: '90%'
            },
            props: {
              variant: addButtonVariant,
              disabled: disableAddButton
            },
            on: {
              click: function click() {
                return addTag();
              }
            }
          }, [this.normalizeSlot('add-button-text') || addButtonText]); // ID of the tags+input `<ul>` list
          // Note we could concatenate inputAttrs.id with `__TAG__LIST__`
          // But note that the inputID may be null until after mount
          // `safeId` returns `null`, if no user provided ID, until after
          // mount when a unique ID is generated
  
          var tagListId = this.safeId('__TAG__LIST__');
          var $field = h('li', {
            key: '__li-input__',
            staticClass: 'flex-grow-1 mt-1',
            attrs: {
              role: 'none',
              'aria-live': 'off',
              'aria-controls': tagListId
            }
          }, [h('div', {
            staticClass: 'd-flex',
            attrs: {
              role: 'group'
            }
          }, [$input, $button])]); // Wrap in an unordered list element (we use a list for accessibility)
  
          var $ul = h('ul', {
            key: '_tags_list_',
            staticClass: 'list-unstyled mt-n1 mb-0 d-flex flex-wrap align-items-center',
            attrs: {
              id: tagListId
            }
          }, // `concat()` is faster than array spread when args are known to be arrays
          concat($tags, $field)); // Assemble the feedback
  
          var $feedback = h();
  
          if (invalidTagText || duplicateTagText) {
            // Add an aria live region for the invalid/duplicate tag
            // messages if the user has not disabled the messages
            var joiner = this.computedJoiner; // Invalid tag feedback if needed (error)
  
            var $invalid = h();
  
            if (invalidFeedbackId) {
              $invalid = h(BFormInvalidFeedback, {
                key: '_tags_invalid_feedback_',
                props: {
                  id: invalidFeedbackId,
                  forceShow: true
                }
              }, [this.invalidTagText, ': ', this.invalidTags.join(joiner)]);
            } // Duplicate tag feedback if needed (warning, not error)
  
  
            var $duplicate = h();
  
            if (duplicateFeedbackId) {
              $duplicate = h(BFormText, {
                key: '_tags_duplicate_feedback_',
                props: {
                  id: duplicateFeedbackId
                }
              }, [this.duplicateTagText, ': ', this.duplicateTags.join(joiner)]);
            }
  
            $feedback = h('div', {
              key: '_tags_feedback_',
              attrs: {
                'aria-live': 'polite',
                'aria-atomic': 'true'
              }
            }, [$invalid, $duplicate]);
          } // Return the content
  
  
          return [$ul, $feedback];
        }
      },
      render: function render(h) {
        var _this6 = this;
  
        // Scoped slot properties
        var scope = {
          // Array of tags (shallow copy to prevent mutations)
          tags: this.tags.slice(),
          // Methods
          removeTag: this.removeTag,
          addTag: this.addTag,
          // We don't include this in the attrs, as users may want to override this
          inputType: this.computedInputType,
          // <input> v-bind:inputAttrs
          inputAttrs: this.computedInputAttrs,
          // <input> v-on:inputHandlers
          inputHandlers: this.computedInputHandlers,
          // <input> :id="inputId"
          inputId: this.computedInputId,
          // Invalid/Duplicate state information
          invalidTags: this.invalidTags.slice(),
          isInvalid: this.hasInvalidTags,
          duplicateTags: this.duplicateTags.slice(),
          isDuplicate: this.hasDuplicateTags,
          // If the 'Add' button should be disabled
          disableAddButton: this.disableAddButton,
          // Pass-though values
          state: this.state,
          separator: this.separator,
          disabled: this.disabled,
          size: this.size,
          placeholder: this.placeholder,
          inputClass: this.inputClass,
          tagRemoveLabel: this.tagRemoveLabel,
          tagVariant: this.tagVariant,
          tagPills: this.tagPills,
          tagClass: this.tagClass,
          addButtonText: this.addButtonText,
          addButtonVariant: this.addButtonVariant,
          invalidTagText: this.invalidTagText,
          duplicateTagText: this.duplicateTagText
        }; // Generate the user interface
  
        var $content = this.normalizeSlot('default', scope) || this.defaultRender(scope); // Generate the `aria-live` region for the current value(s)
  
        var $output = h('output', {
          staticClass: 'sr-only',
          attrs: {
            id: this.safeId('_selected-tags_'),
            role: 'status',
            for: this.computedInputId,
            'aria-live': this.hasFocus ? 'polite' : 'off',
            'aria-atomic': 'true',
            'aria-relevant': 'additions text'
          }
        }, this.tags.join(', ')); // Removed tag live region
  
        var $removed = h('div', {
          staticClass: 'sr-only',
          attrs: {
            id: this.safeId('_removed-tags_'),
            role: 'status',
            'aria-live': this.hasFocus ? 'assertive' : 'off',
            'aria-atomic': 'true'
          }
        }, this.removedTags.length > 0 ? "(".concat(this.tagRemovedLabel, ") ").concat(this.removedTags.join(', ')) : ''); // Add hidden inputs for form submission
  
        var $hidden = h();
  
        if (this.name && !this.disabled) {
          // We add hidden inputs for each tag if a name is provided
          // for native submission of forms
          $hidden = this.tags.map(function (tag) {
            return h('input', {
              key: tag,
              attrs: {
                type: 'hidden',
                value: tag,
                name: _this6.name,
                form: _this6.form || null
              }
            });
          });
        } // Return the rendered output
  
  
        return h('div', {
          staticClass: 'b-form-tags form-control h-auto',
          class: _defineProperty({
            focus: this.hasFocus && !this.noOuterFocus && !this.disabled,
            disabled: this.disabled,
            'is-valid': this.state === true,
            'is-invalid': this.state === false
          }, "form-control-".concat(this.size), this.size),
          attrs: {
            id: this.safeId(),
            role: 'group',
            tabindex: this.disabled || this.noOuterFocus ? null : '-1',
            'aria-describedby': this.safeId('_selected_')
          },
          on: {
            focusin: this.onFocusin,
            focusout: this.onFocusout,
            click: this.onClick
          }
        }, concat($output, $removed, $content, $hidden));
      }
    });
  
    var FormTagsPlugin = /*#__PURE__*/pluginFactory({
      components: {
        BFormTags: BFormTags,
        BTags: BFormTags,
        BFormTag: BFormTag,
        BTag: BFormTag
      }
    });
  
    var BFormTextarea = /*#__PURE__*/Vue.extend({
      name: 'BFormTextarea',
      directives: {
        'b-visible': VBVisible
      },
      mixins: [idMixin, listenOnRootMixin, formMixin, formSizeMixin, formStateMixin, formTextMixin, formSelectionMixin, formValidityMixin],
      props: {
        rows: {
          type: [Number, String],
          default: 2
        },
        maxRows: {
          type: [Number, String],
          default: null
        },
        wrap: {
          // 'soft', 'hard' or 'off'. Browser default is 'soft'
          type: String,
          default: 'soft'
        },
        noResize: {
          // Disable the resize handle of textarea
          type: Boolean,
          default: false
        },
        noAutoShrink: {
          // When in auto resize mode, disable shrinking to content height
          type: Boolean,
          default: false
        }
      },
      data: function data() {
        return {
          heightInPx: null
        };
      },
      computed: {
        computedStyle: function computedStyle() {
          var styles = {
            // Setting `noResize` to true will disable the ability for the user to
            // manually resize the textarea. We also disable when in auto height mode
            resize: !this.computedRows || this.noResize ? 'none' : null
          };
  
          if (!this.computedRows) {
            // Conditionally set the computed CSS height when auto rows/height is enabled
            // We avoid setting the style to `null`, which can override user manual resize handle
            styles.height = this.heightInPx; // We always add a vertical scrollbar to the textarea when auto-height is
            // enabled so that the computed height calculation returns a stable value
  
            styles.overflowY = 'scroll';
          }
  
          return styles;
        },
        computedMinRows: function computedMinRows() {
          // Ensure rows is at least 2 and positive (2 is the native textarea value)
          // A value of 1 can cause issues in some browsers, and most browsers
          // only support 2 as the smallest value
          return Math.max(parseInt(this.rows, 10) || 2, 2);
        },
        computedMaxRows: function computedMaxRows() {
          return Math.max(this.computedMinRows, parseInt(this.maxRows, 10) || 0);
        },
        computedRows: function computedRows() {
          // This is used to set the attribute 'rows' on the textarea
          // If auto-height is enabled, then we return `null` as we use CSS to control height
          return this.computedMinRows === this.computedMaxRows ? this.computedMinRows : null;
        }
      },
      watch: {
        localValue: function localValue() {
          this.setHeight();
        }
      },
      mounted: function mounted() {
        this.setHeight();
      },
      methods: {
        // Called by intersection observer directive
        visibleCallback: function visibleCallback(visible)
        /* istanbul ignore next */
        {
          if (visible) {
            // We use a `$nextTick()` here just to make sure any
            // transitions or portalling have completed
            this.$nextTick(this.setHeight);
          }
        },
        setHeight: function setHeight() {
          var _this = this;
  
          this.$nextTick(function () {
            requestAF(function () {
              _this.heightInPx = _this.computeHeight();
            });
          });
        },
        computeHeight: function computeHeight()
        /* istanbul ignore next: can't test getComputedStyle in JSDOM */
        {
          if (this.$isServer || !isNull(this.computedRows)) {
            return null;
          }
  
          var el = this.$el; // Element must be visible (not hidden) and in document
          // Must be checked after above checks
  
          if (!isVisible(el)) {
            return null;
          } // Get current computed styles
  
  
          var computedStyle = getCS(el); // Height of one line of text in px
  
          var lineHeight = parseFloat(computedStyle.lineHeight); // Calculate height of border and padding
  
          var border = (parseFloat(computedStyle.borderTopWidth) || 0) + (parseFloat(computedStyle.borderBottomWidth) || 0);
          var padding = (parseFloat(computedStyle.paddingTop) || 0) + (parseFloat(computedStyle.paddingBottom) || 0); // Calculate offset
  
          var offset = border + padding; // Minimum height for min rows (which must be 2 rows or greater for cross-browser support)
  
          var minHeight = lineHeight * this.computedMinRows + offset; // Get the current style height (with `px` units)
  
          var oldHeight = el.style.height || computedStyle.height; // Probe scrollHeight by temporarily changing the height to `auto`
  
          el.style.height = 'auto';
          var scrollHeight = el.scrollHeight; // Place the original old height back on the element, just in case `computedProp`
          // returns the same value as before
  
          el.style.height = oldHeight; // Calculate content height in 'rows' (scrollHeight includes padding but not border)
  
          var contentRows = Math.max((scrollHeight - padding) / lineHeight, 2); // Calculate number of rows to display (limited within min/max rows)
  
          var rows = Math.min(Math.max(contentRows, this.computedMinRows), this.computedMaxRows); // Calculate the required height of the textarea including border and padding (in pixels)
  
          var height = Math.max(Math.ceil(rows * lineHeight + offset), minHeight); // Computed height remains the larger of `oldHeight` and new `height`,
          // when height is in `sticky` mode (prop `no-auto-shrink` is true)
  
          if (this.noAutoShrink && (parseFloat(oldHeight) || 0) > height) {
            return oldHeight;
          } // Return the new computed CSS height in px units
  
  
          return "".concat(height, "px");
        }
      },
      render: function render(h) {
        // Using self instead of this helps reduce code size during minification
        var self = this;
        return h('textarea', {
          ref: 'input',
          class: self.computedClass,
          style: self.computedStyle,
          directives: [{
            name: 'model',
            value: self.localValue
          }, {
            name: 'b-visible',
            value: this.visibleCallback,
            // If textarea is within 640px of viewport, consider it visible
            modifiers: {
              '640': true
            }
          }],
          attrs: {
            id: self.safeId(),
            name: self.name,
            form: self.form || null,
            disabled: self.disabled,
            placeholder: self.placeholder,
            required: self.required,
            autocomplete: self.autocomplete || null,
            readonly: self.readonly || self.plaintext,
            rows: self.computedRows,
            wrap: self.wrap || null,
            'aria-required': self.required ? 'true' : null,
            'aria-invalid': self.computedAriaInvalid
          },
          domProps: {
            value: self.localValue
          },
          on: _objectSpread2({}, self.$listeners, {
            input: self.onInput,
            change: self.onChange,
            blur: self.onBlur
          })
        });
      }
    });
  
    var FormTextareaPlugin = /*#__PURE__*/pluginFactory({
      components: {
        BFormTextarea: BFormTextarea,
        BTextarea: BFormTextarea
      }
    });
  
    var NAME$l = 'BTime';
    var NUMERIC = 'numeric';
    var LEFT$1 = KEY_CODES.LEFT,
        RIGHT$1 = KEY_CODES.RIGHT; // Time string RegExpr (optional seconds)
  
    var RE_TIME = /^([0-1]?[0-9]|2[0-3]):[0-5]?[0-9](:[0-5]?[0-9])?$/; // --- Helpers ---
    // Fallback to BFormSpinbutton prop if no value found
  
    var getConfigFallback$1 = function getConfigFallback(prop) {
      return getComponentConfig(NAME$l, prop) || getComponentConfig('BFormSpinbutton', prop);
    };
  
    var padLeftZeros = function padLeftZeros(num) {
      return "00".concat(num || '').slice(-2);
    };
  
    var parseHMS = function parseHMS(hms) {
      hms = toString$1(hms);
      var hh = null,
          mm = null,
          ss = null;
  
      if (RE_TIME.test(hms)) {
  
        var _hms$split$map$map = hms.split(':').map(toInteger).map(function (v) {
          return isNaN(v) ? null : v;
        });
  
        var _hms$split$map$map2 = _slicedToArray(_hms$split$map$map, 3);
  
        hh = _hms$split$map$map2[0];
        mm = _hms$split$map$map2[1];
        ss = _hms$split$map$map2[2];
      }
  
      return {
        hours: isUndefinedOrNull(hh) ? null : hh,
        minutes: isUndefinedOrNull(mm) ? null : mm,
        seconds: isUndefinedOrNull(ss) ? null : ss,
        ampm: isUndefinedOrNull(hh) || hh < 12 ? 0 : 1
      };
    };
  
    var formatHMS = function formatHMS(_ref) {
      var hours = _ref.hours,
          minutes = _ref.minutes,
          seconds = _ref.seconds;
      var requireSeconds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  
      if (isNull(hours) || isNull(minutes) || requireSeconds && isNull(seconds)) {
        return '';
      }
  
      var hms = [hours, minutes, requireSeconds ? seconds : 0];
      return hms.map(padLeftZeros).join(':');
    }; // @vue/component
  
  
    var BTime = /*#__PURE__*/Vue.extend({
      name: NAME$l,
      mixins: [idMixin, normalizeSlotMixin],
      model: {
        prop: 'value',
        event: 'input'
      },
      props: {
        value: {
          type: String,
          default: ''
        },
        showSeconds: {
          // If true, show the second spinbutton
          type: Boolean,
          default: false
        },
        hour12: {
          // Explicitly force 12 or 24 hour time
          // Default is to use resolved locale for 12/24 hour display
          // Tri-state: `true` = 12, `false` = 24, `null` = auto
          type: Boolean,
          default: null
        },
        locale: {
          type: [String, Array],
          default: null
        },
        ariaLabelledby: {
          // ID of label element
          type: String,
          default: null
        },
        secondsStep: {
          type: [Number, String],
          default: 1
        },
        minutesStep: {
          type: [Number, String],
          default: 1
        },
        disabled: {
          type: Boolean,
          default: false
        },
        readonly: {
          type: Boolean,
          default: false
        },
        hideHeader: {
          type: Boolean,
          default: false
        },
        labelNoTimeSelected: {
          type: String,
          default: function _default() {
            return getComponentConfig(NAME$l, 'labelNoTimeSelected');
          }
        },
        labelSelected: {
          type: String,
          default: function _default() {
            return getComponentConfig(NAME$l, 'labelSelected');
          }
        },
        labelHours: {
          type: String,
          default: function _default() {
            return getComponentConfig(NAME$l, 'labelHours');
          }
        },
        labelMinutes: {
          type: String,
          default: function _default() {
            return getComponentConfig(NAME$l, 'labelMinutes');
          }
        },
        labelSeconds: {
          type: String,
          default: function _default() {
            return getComponentConfig(NAME$l, 'labelSeconds');
          }
        },
        labelAmpm: {
          type: String,
          default: function _default() {
            return getComponentConfig(NAME$l, 'labelAmpm');
          }
        },
        labelAm: {
          type: String,
          default: function _default() {
            return getComponentConfig(NAME$l, 'labelAm');
          }
        },
        labelPm: {
          type: String,
          default: function _default() {
            return getComponentConfig(NAME$l, 'labelPm');
          }
        },
        // Passed to the spin buttons
        labelIncrement: {
          type: String,
          // Falls back to BFormSpinbutton label
          default: function _default() {
            return getConfigFallback$1('labelIncrement');
          }
        },
        labelDecrement: {
          type: String,
          // Falls back to BFormSpinbutton label
          default: function _default() {
            return getConfigFallback$1('labelDecrement');
          }
        },
        hidden: {
          type: Boolean,
          default: false
        }
      },
      data: function data() {
        var parsed = parseHMS(this.value || '');
        return {
          // Spin button models
          modelHours: parsed.hours,
          modelMinutes: parsed.minutes,
          modelSeconds: parsed.seconds,
          modelAmpm: parsed.ampm,
          // Internal flag to enable aria-live regions
          isLive: false
        };
      },
      computed: {
        computedHMS: function computedHMS() {
          var hours = this.modelHours;
          var minutes = this.modelMinutes;
          var seconds = this.modelSeconds;
          return formatHMS({
            hours: hours,
            minutes: minutes,
            seconds: seconds
          }, this.showSeconds);
        },
        resolvedOptions: function resolvedOptions() {
          // Resolved locale options
          var locale = concat(this.locale).filter(identity);
          var options = {
            hour: NUMERIC,
            minute: NUMERIC,
            second: NUMERIC
          };
  
          if (!isUndefinedOrNull(this.hour12)) {
            // Force 12 or 24 hour clock
            options.hour12 = !!this.hour12;
          }
  
          var dtf = new Intl.DateTimeFormat(locale, options);
          var resolved = dtf.resolvedOptions();
          var hour12 = resolved.hour12 || false; // IE 11 doesn't resolve the hourCycle, so we make
          // an assumption and fall back to common values
  
          var hourCycle = resolved.hourCycle || (hour12 ? 'h12' : 'h23');
          return {
            locale: resolved.locale,
            hour12: hour12,
            hourCycle: hourCycle
          };
        },
        computedLocale: function computedLocale() {
          return this.resolvedOptions.locale;
        },
        computedLang: function computedLang() {
          return (this.computedLocale || '').replace(/-u-.*$/, '');
        },
        computedRTL: function computedRTL() {
          return isLocaleRTL(this.computedLang);
        },
        computedHourCycle: function computedHourCycle() {
          // h11, h12, h23, or h24
          // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Locale/hourCycle
          // h12 - Hour system using 1–12. Corresponds to 'h' in patterns. The 12 hour clock, with midnight starting at 12:00 am
          // h23 - Hour system using 0–23. Corresponds to 'H' in patterns. The 24 hour clock, with midnight starting at 0:00
          // h11 - Hour system using 0–11. Corresponds to 'K' in patterns. The 12 hour clock, with midnight starting at 0:00 am
          // h24 - Hour system using 1–24. Corresponds to 'k' in pattern. The 24 hour clock, with midnight starting at 24:00
          // For h12 or h24, we visually format 00 hours as 12
          return this.resolvedOptions.hourCycle;
        },
        is12Hour: function is12Hour() {
          return !!this.resolvedOptions.hour12;
        },
        context: function context() {
          return {
            locale: this.computedLocale,
            isRTL: this.computedRTL,
            hourCycle: this.computedHourCycle,
            hour12: this.is12Hour,
            hours: this.modelHours,
            minutes: this.modelMinutes,
            seconds: this.showSeconds ? this.modelSeconds : 0,
            value: this.computedHMS,
            formatted: this.formattedTimeString
          };
        },
        valueId: function valueId() {
          return this.safeId() || null;
        },
        computedAriaLabelledby: function computedAriaLabelledby() {
          return [this.ariaLabelledby, this.valueId].filter(identity).join(' ') || null;
        },
        timeFormatter: function timeFormatter() {
          // Returns a formatter function reference
          // The formatter converts the time to a localized string
          var options = {
            hour12: this.is12Hour,
            hourCycle: this.computedHourCycle,
            hour: NUMERIC,
            minute: NUMERIC,
            timeZone: 'UTC'
          };
  
          if (this.showSeconds) {
            options.second = NUMERIC;
          } // Formats the time as a localized string
  
  
          return createDateFormatter(this.computedLocale, options);
        },
        numberFormatter: function numberFormatter() {
          // Returns a formatter function reference
          // The formatter always formats as 2 digits and is localized
          var nf = new Intl.NumberFormat(this.computedLocale, {
            style: 'decimal',
            minimumIntegerDigits: 2,
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
            notation: 'standard'
          });
          return nf.format;
        },
        formattedTimeString: function formattedTimeString() {
          var hours = this.modelHours;
          var minutes = this.modelMinutes;
          var seconds = this.showSeconds ? this.modelSeconds || 0 : 0;
  
          if (this.computedHMS) {
            return this.timeFormatter(createDate(Date.UTC(0, 0, 1, hours, minutes, seconds)));
          }
  
          return this.labelNoTimeSelected || ' ';
        },
        spinScopedSlots: function spinScopedSlots() {
          var h = this.$createElement;
          return {
            increment: function increment(_ref2) {
              var hasFocus = _ref2.hasFocus;
              return h(BIconChevronUp, {
                props: {
                  scale: hasFocus ? 1.5 : 1.25
                },
                attrs: {
                  'aria-hidden': 'true'
                }
              });
            },
            decrement: function decrement(_ref3) {
              var hasFocus = _ref3.hasFocus;
              return h(BIconChevronUp, {
                props: {
                  flipV: true,
                  scale: hasFocus ? 1.5 : 1.25
                },
                attrs: {
                  'aria-hidden': 'true'
                }
              });
            }
          };
        }
      },
      watch: {
        value: function value(newVal, oldVal) {
          if (newVal !== oldVal && !looseEqual(parseHMS(newVal), parseHMS(this.computedHMS))) {
            var _parseHMS = parseHMS(newVal),
                hours = _parseHMS.hours,
                minutes = _parseHMS.minutes,
                seconds = _parseHMS.seconds,
                ampm = _parseHMS.ampm;
  
            this.modelHours = hours;
            this.modelMinutes = minutes;
            this.modelSeconds = seconds;
            this.modelAmpm = ampm;
          }
        },
        computedHMS: function computedHMS(newVal, oldVal) {
          if (newVal !== oldVal) {
            this.$emit('input', newVal);
          }
        },
        context: function context(newVal, oldVal) {
          if (!looseEqual(newVal, oldVal)) {
            this.$emit('context', newVal);
          }
        },
        modelAmpm: function modelAmpm(newVal, oldVal) {
          var _this = this;
  
          if (newVal !== oldVal) {
            var hours = isNull(this.modelHours) ? 0 : this.modelHours;
            this.$nextTick(function () {
              if (newVal === 0 && hours > 11) {
                // Switched to AM
                _this.modelHours = hours - 12;
              } else if (newVal === 1 && hours < 12) {
                // Switched to PM
                _this.modelHours = hours + 12;
              }
            });
          }
        },
        modelHours: function modelHours(newHours, oldHours) {
          if (newHours !== oldHours) {
            this.modelAmpm = newHours > 11 ? 1 : 0;
          }
        }
      },
      created: function created() {
        var _this2 = this;
  
        this.$nextTick(function () {
          _this2.$emit('context', _this2.context);
        });
      },
      mounted: function mounted() {
        this.setLive(true);
      },
      activated: function activated()
      /* istanbul ignore next */
      {
        this.setLive(true);
      },
      deactivated: function deactivated()
      /* istanbul ignore next */
      {
        this.setLive(false);
      },
      beforeDestroy: function beforeDestroy() {
        this.setLive(false);
      },
      methods: {
        // Public methods
        focus: function focus() {
          if (!this.disabled) {
            try {
              // We focus the first spin button
              this.$refs.spinners[0].focus();
            } catch (_unused) {}
          }
        },
        blur: function blur() {
          if (!this.disabled) {
            try {
              if (contains(this.$el, document.activeElement)) {
                document.activeElement.blur();
              }
            } catch (_unused2) {}
          }
        },
        // Formatters for the spin buttons
        formatHours: function formatHours(hh) {
          var hourCycle = this.computedHourCycle; // We always store 0-23, but format based on h11/h12/h23/h24 formats
  
          hh = this.is12Hour && hh > 12 ? hh - 12 : hh; // Determine how 00:00 and 12:00 are shown
  
          hh = hh === 0 && hourCycle === 'h12' ? 12 : hh === 0 && hourCycle === 'h24' ? 24 : hh === 12 && hourCycle === 'h11' ? 0 : hh;
          return this.numberFormatter(hh);
        },
        formatMinutes: function formatMinutes(mm) {
          return this.numberFormatter(mm);
        },
        formatSeconds: function formatSeconds(ss) {
          return this.numberFormatter(ss);
        },
        formatAmpm: function formatAmpm(ampm) {
          // These should come from label props???
          // `ampm` should always be a value of `0` or `1`
          return ampm === 0 ? this.labelAm : ampm === 1 ? this.labelPm : '';
        },
        // Spinbutton on change handlers
        setHours: function setHours(value) {
          this.modelHours = value;
        },
        setMinutes: function setMinutes(value) {
          this.modelMinutes = value;
        },
        setSeconds: function setSeconds(value) {
          this.modelSeconds = value;
        },
        setAmpm: function setAmpm(value) {
          this.modelAmpm = value;
        },
        onSpinLeftRight: function onSpinLeftRight() {
          var evt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var type = evt.type,
              keyCode = evt.keyCode;
  
          if (!this.disabled && type === 'keydown' && (keyCode === LEFT$1 || keyCode === RIGHT$1)) {
            evt.preventDefault();
            evt.stopPropagation();
            var spinners = this.$refs.spinners || [];
            var index = spinners.map(function (cmp) {
              return !!cmp.hasFocus;
            }).indexOf(true);
            index = index + (keyCode === LEFT$1 ? -1 : 1);
            index = index >= spinners.length ? 0 : index < 0 ? spinners.length - 1 : index;
  
            try {
              spinners[index].focus();
            } catch (_unused3) {}
          }
        },
        setLive: function setLive(on) {
          var _this3 = this;
  
          if (on) {
            this.$nextTick(function () {
              requestAF(function () {
                _this3.isLive = true;
              });
            });
          } else {
            this.isLive = false;
          }
        }
      },
      render: function render(h) {
        var _this4 = this;
  
        /* istanbul ignore if */
        if (this.hidden) {
          // If hidden, we just render a placeholder comment
          return h();
        }
  
        var valueId = this.valueId;
        var computedAriaLabelledby = this.computedAriaLabelledby;
        var spinIds = []; // Helper method to render a spinbutton
  
        var makeSpinbutton = function makeSpinbutton(handler, key, classes) {
          var spinbuttonProps = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
          var id = _this4.safeId("_spinbutton_".concat(key, "_")) || null;
          spinIds.push(id);
          return h(BFormSpinbutton, {
            key: key,
            ref: 'spinners',
            refInFor: true,
            class: classes,
            props: _objectSpread2({
              id: id,
              placeholder: '--',
              vertical: true,
              required: true,
              disabled: _this4.disabled,
              readonly: _this4.readonly,
              locale: _this4.computedLocale,
              labelIncrement: _this4.labelIncrement,
              labelDecrement: _this4.labelDecrement,
              wrap: true,
              ariaControls: valueId,
              min: 0
            }, spinbuttonProps),
            scopedSlots: _this4.spinScopedSlots,
            on: {
              // We use `change` event to minimize SR verbosity
              // As the spinbutton will announce each value change
              // and we don't want the formatted time to be announced
              // on each value input if repeat is happening
              change: handler
            }
          });
        }; // Helper method to return a "colon" separator
  
  
        var makeColon = function makeColon() {
          return h('div', {
            staticClass: 'd-flex flex-column',
            class: {
              'text-muted': _this4.disabled || _this4.readonly
            },
            attrs: {
              'aria-hidden': 'true'
            }
          }, [h(BIconCircleFill, {
            props: {
              shiftV: 4,
              scale: 0.5
            }
          }), h(BIconCircleFill, {
            props: {
              shiftV: -4,
              scale: 0.5
            }
          })]);
        };
  
        var $spinners = []; // Hours
  
        $spinners.push(makeSpinbutton(this.setHours, 'hours', '', {
          value: this.modelHours,
          max: 23,
          step: 1,
          formatterFn: this.formatHours,
          ariaLabel: this.labelHours
        })); // Spacer
  
        $spinners.push(makeColon()); // Minutes
  
        $spinners.push(makeSpinbutton(this.setMinutes, 'minutes', '', {
          value: this.modelMinutes,
          max: 59,
          step: this.minutesStep || 1,
          formatterFn: this.formatMinutes,
          ariaLabel: this.labelMinutes
        }));
  
        if (this.showSeconds) {
          // Spacer
          $spinners.push(makeColon()); // Seconds
  
          $spinners.push(makeSpinbutton(this.setSeconds, 'seconds', '', {
            value: this.modelSeconds,
            max: 59,
            step: this.secondsStep || 1,
            formatterFn: this.formatSeconds,
            ariaLabel: this.labelSeconds
          }));
        } // AM/PM ?
  
  
        if (this.is12Hour) {
          // TODO:
          //   If locale is RTL, unshift this instead of push?
          //   And switch class `ml-2` to `mr-2`
          //   Note some LTR locales (i.e. zh) also place AM/PM to the left
          $spinners.push(makeSpinbutton(this.setAmpm, 'ampm', 'ml-2', {
            value: this.modelAmpm,
            max: 1,
            formatterFn: this.formatAmpm,
            ariaLabel: this.labelAmpm,
            // We set `required` as `false`, since this always has a value
            required: false
          }));
        } // Assemble spinners
  
  
        $spinners = h('div', {
          staticClass: 'd-flex align-items-center justify-content-center mx-auto',
          attrs: {
            role: 'group',
            tabindex: this.disabled || this.readonly ? null : '-1',
            'aria-labelledby': computedAriaLabelledby
          },
          on: {
            keydown: this.onSpinLeftRight,
            click: function click(evt)
            /* istanbul ignore next */
            {
              if (evt.target === evt.currentTarget) {
                _this4.focus();
              }
            }
          }
        }, $spinners); // Selected type display
  
        var $value = h('output', {
          staticClass: 'border rounded d-block p-1 small text-center',
          class: {
            disabled: this.disabled || this.readonly
          },
          attrs: {
            id: valueId,
            role: 'status',
            for: spinIds.filter(identity).join(' ') || null,
            tabindex: this.disabled ? null : '-1',
            'aria-live': this.isLive ? 'polite' : 'off',
            'aria-atomic': 'true'
          },
          on: {
            // Transfer focus/click to focus hours spinner
            click: this.focus,
            focus: this.focus
          }
        }, [h('bdi', this.formattedTimeString), this.computedHMS ? h('span', {
          staticClass: 'sr-only'
        }, " (".concat(this.labelSelected, ") ")) : '']);
        var $header = h('header', {
          class: {
            'sr-only': this.hideHeader,
            'mb-2': !this.hideHeader
          }
        }, [$value]); // Optional bottom slot
  
        var $slot = this.normalizeSlot('default');
        $slot = $slot ? h('footer', {
          staticClass: 'mt-2'
        }, $slot) : h();
        return h('div', {
          staticClass: 'b-time d-inline-flex flex-column text-center',
          attrs: {
            role: 'group',
            lang: this.computedLang || null,
            'aria-labelledby': computedAriaLabelledby || null,
            'aria-disabled': this.disabled ? 'true' : null,
            'aria-readonly': this.readonly && !this.disabled ? 'true' : null
          }
        }, [$header, $spinners, $slot]);
      }
    });
  
    var NAME$m = 'BFormTimepicker'; // Fallback to BTime/BFormSpinbutton prop if no value found
  
    var getConfigFallback$2 = function getConfigFallback(prop) {
      return getComponentConfig(NAME$m, prop) || getComponentConfig('BTime', prop) || getComponentConfig('BFormSpinbutton', prop);
    }; // We create our props as a mixin so that we can control
    // where they appear in the props listing reference section
  
  
    var propsMixin$1 = {
      props: _objectSpread2({
        value: {
          type: String,
          default: ''
        },
        resetValue: {
          type: String,
          default: ''
        },
        placeholder: {
          type: String,
          // Defaults to `labelNoTime` from BTime context
          default: null
        },
        size: {
          type: String,
          default: null
        },
        disabled: {
          type: Boolean,
          default: false
        },
        readonly: {
          type: Boolean,
          default: false
        },
        required: {
          // If true adds the `aria-required` attribute
          type: Boolean,
          default: false
        },
        name: {
          type: String,
          default: null
        },
        form: {
          type: String,
          default: null
        },
        state: {
          // Tri-state prop: `true`, `false` or `null`
          type: Boolean,
          default: null
        },
        hour12: {
          // Tri-state prop: `true` => 12 hour, `false` => 24 hour, `null` => auto
          type: Boolean,
          default: null
        },
        locale: {
          type: [String, Array],
          default: null
        },
        showSeconds: {
          type: Boolean,
          default: false
        },
        hideHeader: {
          type: Boolean,
          default: false
        },
        secondsStep: {
          type: [Number, String],
          default: 1
        },
        minutesStep: {
          type: [Number, String],
          default: 1
        },
        buttonOnly: {
          type: Boolean,
          default: false
        },
        buttonVariant: {
          // Applicable in button only mode
          type: String,
          default: 'secondary'
        },
        nowButton: {
          type: Boolean,
          default: false
        },
        labelNowButton: {
          type: String,
          default: function _default() {
            return getComponentConfig(NAME$m, 'labelNowButton');
          }
        },
        nowButtonVariant: {
          type: String,
          default: 'outline-primary'
        },
        resetButton: {
          type: Boolean,
          default: false
        },
        labelResetButton: {
          type: String,
          default: function _default() {
            return getComponentConfig(NAME$m, 'labelResetButton');
          }
        },
        resetButtonVariant: {
          type: String,
          default: 'outline-danger'
        },
        noCloseButton: {
          type: Boolean,
          default: false
        },
        labelCloseButton: {
          type: String,
          default: function _default() {
            return getComponentConfig(NAME$m, 'labelCloseButton');
          }
        },
        closeButtonVariant: {
          type: String,
          default: 'outline-secondary'
        },
        // Labels
        // These fallback to BTime values
        labelSelected: {
          type: String,
          default: function _default() {
            return getConfigFallback$2('labelSelected');
          }
        },
        labelNoTimeSelected: {
          type: String,
          default: function _default() {
            return getConfigFallback$2('labelNoTimeSelected');
          }
        },
        labelHours: {
          type: String,
          default: function _default() {
            return getConfigFallback$2('labelHours');
          }
        },
        labelMinutes: {
          type: String,
          default: function _default() {
            return getConfigFallback$2('labelMinutes');
          }
        },
        labelSeconds: {
          type: String,
          default: function _default() {
            return getConfigFallback$2('labelSeconds');
          }
        },
        labelAmpm: {
          type: String,
          default: function _default() {
            return getConfigFallback$2('labelAmpm');
          }
        },
        labelAm: {
          type: String,
          default: function _default() {
            return getConfigFallback$2('labelAm');
          }
        },
        labelPm: {
          type: String,
          default: function _default() {
            return getConfigFallback$2('labelPm');
          }
        },
        // These pick BTime or BFormSpinbutton global config if no BFormTimepicker global config
        labelIncrement: {
          type: String,
          default: function _default() {
            return getConfigFallback$2('labelIncrement');
          }
        },
        labelDecrement: {
          type: String,
          default: function _default() {
            return getConfigFallback$2('labelDecrement');
          }
        },
        // extra dropdown stuff
        menuClass: {
          type: [String, Array, Object],
          default: null
        }
      }, dropdownProps)
    }; // --- BFormDate component ---
    // @vue/component
  
    var BFormTimepicker = /*#__PURE__*/Vue.extend({
      name: NAME$m,
      // The mixins order determines the order of appearance in the props reference section
      mixins: [idMixin, propsMixin$1],
      model: {
        prop: 'value',
        event: 'input'
      },
      data: function data() {
        return {
          // We always use `HH:mm:ss` value internally
          localHMS: this.value || '',
          // Context data from BTime
          localLocale: null,
          isRTL: false,
          formattedValue: '',
          // If the menu is opened
          isVisible: false
        };
      },
      computed: {
        computedLang: function computedLang() {
          return (this.localLocale || '').replace(/-u-.*$/i, '') || null;
        },
        timeProps: function timeProps() {
          // Props we pass to BTime
          // Use self for better minification, as `this` won't
          // minimize and we reference it many times below
          var self = this;
          return {
            hidden: !self.isVisible,
            value: self.localHMS,
            // Passthrough props
            readonly: self.readonly,
            disabled: self.disabled,
            locale: self.locale,
            hour12: self.hour12,
            hideHeader: self.hideHeader,
            showSeconds: self.showSeconds,
            secondsStep: self.secondsStep,
            minutesStep: self.minutesStep,
            labelNoTimeSelected: self.labelNoTimeSelected,
            labelSelected: self.labelSelected,
            labelHours: self.labelHours,
            labelMinutes: self.labelMinutes,
            labelSeconds: self.labelSeconds,
            labelAmpm: self.labelAmpm,
            labelAm: self.labelAm,
            labelPm: self.labelPm,
            labelIncrement: self.labelIncrement,
            labelDecrement: self.labelDecrement
          };
        }
      },
      watch: {
        value: function value(newVal) {
          this.localHMS = newVal || '';
        },
        localHMS: function localHMS(newVal) {
          // We only update hte v-model value when the timepicker
          // is open, to prevent cursor jumps when bound to a
          // text input in button only mode
          if (this.isVisible) {
            this.$emit('input', newVal || '');
          }
        }
      },
      methods: {
        // Public methods
        focus: function focus() {
          if (!this.disabled) {
            try {
              this.$refs.control.focus();
            } catch (_unused) {}
          }
        },
        blur: function blur() {
          if (!this.disabled) {
            try {
              this.$refs.control.blur();
            } catch (_unused2) {}
          }
        },
        // Private methods
        setAndClose: function setAndClose(value) {
          var _this = this;
  
          this.localHMS = value;
          this.$nextTick(function () {
            _this.$refs.control.hide(true);
          });
        },
        onInput: function onInput(hms) {
          if (this.localHMS !== hms) {
            this.localHMS = hms;
          }
        },
        onContext: function onContext(ctx) {
          var isRTL = ctx.isRTL,
              locale = ctx.locale,
              value = ctx.value,
              formatted = ctx.formatted;
          this.isRTL = isRTL;
          this.localLocale = locale;
          this.formattedValue = formatted;
          this.localHMS = value || ''; // Re-emit the context event
  
          this.$emit('context', ctx);
        },
        onNowButton: function onNowButton() {
          var now = new Date();
          var hours = now.getHours();
          var minutes = now.getMinutes();
          var seconds = this.showSeconds ? now.getSeconds() : 0;
          var value = [hours, minutes, seconds].map(function (v) {
            return "00".concat(v || '').slice(-2);
          }).join(':');
          this.setAndClose(value);
        },
        onResetButton: function onResetButton() {
          this.setAndClose(this.resetValue);
        },
        onCloseButton: function onCloseButton() {
          this.$refs.control.hide(true);
        },
        onShow: function onShow() {
          this.isVisible = true;
        },
        onShown: function onShown() {
          var _this2 = this;
  
          this.$nextTick(function () {
            try {
              _this2.$refs.time.focus();
            } catch (_unused3) {}
          });
        },
        onHidden: function onHidden() {
          this.isVisible = false;
        },
        // Render function helpers
        defaultButtonFn: function defaultButtonFn(_ref) {
          var isHovered = _ref.isHovered,
              hasFocus = _ref.hasFocus;
          return this.$createElement(isHovered || hasFocus ? BIconClockFill : BIconClock, {
            attrs: {
              'aria-hidden': 'true'
            }
          });
        }
      },
      render: function render(h) {
        var localHMS = this.localHMS;
        var disabled = this.disabled;
        var readonly = this.readonly;
        var placeholder = isUndefinedOrNull(this.placeholder) ? this.labelNoTimeSelected : this.placeholder; // Footer buttons
  
        var $footer = [];
  
        if (this.nowButton) {
          var label = this.labelNowButton;
          $footer.push(h(BButton, {
            staticClass: 'mx-1',
            props: {
              size: 'sm',
              disabled: disabled || readonly,
              variant: this.nowButtonVariant
            },
            attrs: {
              'aria-label': label || null
            },
            on: {
              click: this.onNowButton
            }
          }, label));
        }
  
        if (this.resetButton) {
          var _label = this.labelResetButton;
          $footer.push(h(BButton, {
            staticClass: 'mx-1',
            props: {
              size: 'sm',
              disabled: disabled || readonly,
              variant: this.resetButtonVariant
            },
            attrs: {
              'aria-label': _label || null
            },
            on: {
              click: this.onResetButton
            }
          }, _label));
        }
  
        if (!this.noCloseButton) {
          var _label2 = this.labelCloseButton;
          $footer.push(h(BButton, {
            staticClass: 'mx-1',
            props: {
              size: 'sm',
              disabled: disabled,
              variant: this.closeButtonVariant
            },
            attrs: {
              'aria-label': _label2 || null
            },
            on: {
              click: this.onCloseButton
            }
          }, _label2));
        }
  
        if ($footer.length > 0) {
          $footer = [h('div', {
            staticClass: 'b-form-date-controls d-flex flex-wrap mx-n1',
            class: {
              'justify-content-between': $footer.length > 1,
              'justify-content-end': $footer.length < 2
            }
          }, $footer)];
        }
  
        var $time = h(BTime, {
          ref: 'time',
          staticClass: 'b-form-time-control',
          props: this.timeProps,
          on: {
            input: this.onInput,
            context: this.onContext
          }
        }, $footer);
        return h(BVFormBtnLabelControl, {
          ref: 'control',
          staticClass: 'b-form-timepicker',
          props: _objectSpread2({}, this.$props, {
            // Overridden / computed props
            id: this.safeId(),
            rtl: this.isRTL,
            lang: this.computedLang,
            value: localHMS || '',
            formattedValue: localHMS ? this.formattedValue : '',
            placeholder: placeholder || ''
          }),
          on: {
            show: this.onShow,
            shown: this.onShown,
            hidden: this.onHidden
          },
          scopedSlots: {
            'button-content': this.$scopedSlots['button-content'] || this.defaultButtonFn
          }
        }, [$time]);
      }
    });
  
    var FormTimepickerPlugin = /*#__PURE__*/pluginFactory({
      components: {
        BFormTimepicker: BFormTimepicker,
        BTimepicker: BFormTimepicker
      }
    });
  
    var ImagePlugin = /*#__PURE__*/pluginFactory({
      components: {
        BImg: BImg,
        BImgLazy: BImgLazy
      }
    });
  
    var props$z = {
      tag: {
        type: String,
        default: 'div'
      }
    }; // @vue/component
  
    var BInputGroupText = /*#__PURE__*/Vue.extend({
      name: 'BInputGroupText',
      functional: true,
      props: props$z,
      render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;
        return h(props.tag, a(data, {
          staticClass: 'input-group-text'
        }), children);
      }
    });
  
    var commonProps$1 = {
      id: {
        type: String,
        default: null
      },
      tag: {
        type: String,
        default: 'div'
      },
      isText: {
        type: Boolean,
        default: false
      }
    }; // @vue/component
  
    var BInputGroupAddon = /*#__PURE__*/Vue.extend({
      name: 'BInputGroupAddon',
      functional: true,
      props: _objectSpread2({}, commonProps$1, {
        append: {
          type: Boolean,
          default: false
        }
      }),
      render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;
        return h(props.tag, a(data, {
          class: {
            'input-group-append': props.append,
            'input-group-prepend': !props.append
          },
          attrs: {
            id: props.id
          }
        }), props.isText ? [h(BInputGroupText, children)] : children);
      }
    });
  
    var BInputGroupPrepend = /*#__PURE__*/Vue.extend({
      name: 'BInputGroupPrepend',
      functional: true,
      props: commonProps$1,
      render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;
        // pass all our props/attrs down to child, and set`append` to false
        return h(BInputGroupAddon, a(data, {
          props: _objectSpread2({}, props, {
            append: false
          })
        }), children);
      }
    });
  
    var BInputGroupAppend = /*#__PURE__*/Vue.extend({
      name: 'BInputGroupAppend',
      functional: true,
      props: commonProps$1,
      render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;
        // pass all our props/attrs down to child, and set`append` to true
        return h(BInputGroupAddon, a(data, {
          props: _objectSpread2({}, props, {
            append: true
          })
        }), children);
      }
    });
  
    var NAME$n = 'BInputGroup';
    var props$A = {
      id: {
        type: String
      },
      size: {
        type: String,
        default: function _default() {
          return getComponentConfig(NAME$n, 'size');
        }
      },
      prepend: {
        type: String
      },
      prependHtml: {
        type: String
      },
      append: {
        type: String
      },
      appendHtml: {
        type: String
      },
      tag: {
        type: String,
        default: 'div'
      }
    }; // @vue/component
  
    var BInputGroup = /*#__PURE__*/Vue.extend({
      name: NAME$n,
      functional: true,
      props: props$A,
      render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            slots = _ref.slots,
            scopedSlots = _ref.scopedSlots;
        var $slots = slots();
        var $scopedSlots = scopedSlots || {};
        var childNodes = []; // Prepend prop/slot
  
        if (props.prepend || props.prependHtml || hasNormalizedSlot('prepend', $scopedSlots, $slots)) {
          childNodes.push(h(BInputGroupPrepend, [// Prop
          props.prepend || props.prependHtml ? h(BInputGroupText, {
            domProps: htmlOrText(props.prependHtml, props.prepend)
          }) : h(), // Slot
          normalizeSlot('prepend', {}, $scopedSlots, $slots) || h()]));
        } else {
          childNodes.push(h());
        } // Default slot
  
  
        if (hasNormalizedSlot('default', $scopedSlots, $slots)) {
          childNodes.push.apply(childNodes, _toConsumableArray(normalizeSlot('default', {}, $scopedSlots, $slots)));
        } else {
          childNodes.push(h());
        } // Append prop
  
  
        if (props.append || props.appendHtml || hasNormalizedSlot('append', $scopedSlots, $slots)) {
          childNodes.push(h(BInputGroupAppend, [// prop
          props.append || props.appendHtml ? h(BInputGroupText, {
            domProps: htmlOrText(props.appendHtml, props.append)
          }) : h(), // Slot
          normalizeSlot('append', {}, $scopedSlots, $slots) || h()]));
        } else {
          childNodes.push(h());
        }
  
        return h(props.tag, a(data, {
          staticClass: 'input-group',
          class: _defineProperty({}, "input-group-".concat(props.size), props.size),
          attrs: {
            id: props.id || null,
            role: 'group'
          }
        }), childNodes);
      }
    });
  
    var InputGroupPlugin = /*#__PURE__*/pluginFactory({
      components: {
        BInputGroup: BInputGroup,
        BInputGroupAddon: BInputGroupAddon,
        BInputGroupPrepend: BInputGroupPrepend,
        BInputGroupAppend: BInputGroupAppend,
        BInputGroupText: BInputGroupText
      }
    });
  
    var props$B = {
      tag: {
        type: String,
        default: 'div'
      },
      fluid: {
        // String breakpoint name new in Bootstrap v4.4.x
        type: [Boolean, String],
        default: false
      }
    }; // @vue/component
  
    var BContainer = /*#__PURE__*/Vue.extend({
      name: 'BContainer',
      functional: true,
      props: props$B,
      render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;
        return h(props.tag, a(data, {
          class: _defineProperty({
            container: !(props.fluid || props.fluid === ''),
            'container-fluid': props.fluid === true || props.fluid === ''
          }, "container-".concat(props.fluid), props.fluid && props.fluid !== true)
        }), children);
      }
    });
  
    var NAME$o = 'BJumbotron';
    var props$C = {
      fluid: {
        type: Boolean,
        default: false
      },
      containerFluid: {
        type: [Boolean, String],
        default: false
      },
      header: {
        type: String,
        default: null
      },
      headerHtml: {
        type: String,
        default: null
      },
      headerTag: {
        type: String,
        default: 'h1'
      },
      headerLevel: {
        type: [Number, String],
        default: '3'
      },
      lead: {
        type: String,
        default: null
      },
      leadHtml: {
        type: String,
        default: null
      },
      leadTag: {
        type: String,
        default: 'p'
      },
      tag: {
        type: String,
        default: 'div'
      },
      bgVariant: {
        type: String,
        default: function _default() {
          return getComponentConfig(NAME$o, 'bgVariant');
        }
      },
      borderVariant: {
        type: String,
        default: function _default() {
          return getComponentConfig(NAME$o, 'borderVariant');
        }
      },
      textVariant: {
        type: String,
        default: function _default() {
          return getComponentConfig(NAME$o, 'textVariant');
        }
      }
    }; // @vue/component
  
    var BJumbotron = /*#__PURE__*/Vue.extend({
      name: NAME$o,
      functional: true,
      props: props$C,
      render: function render(h, _ref) {
        var _class2;
  
        var props = _ref.props,
            data = _ref.data,
            slots = _ref.slots,
            scopedSlots = _ref.scopedSlots;
        // The order of the conditionals matter.
        // We are building the component markup in order.
        var childNodes = [];
        var $slots = slots();
        var $scopedSlots = scopedSlots || {}; // Header
  
        if (props.header || hasNormalizedSlot('header', $scopedSlots, $slots) || props.headerHtml) {
          childNodes.push(h(props.headerTag, {
            class: _defineProperty({}, "display-".concat(props.headerLevel), props.headerLevel)
          }, normalizeSlot('header', {}, $scopedSlots, $slots) || props.headerHtml || stripTags(props.header)));
        } // Lead
  
  
        if (props.lead || hasNormalizedSlot('lead', $scopedSlots, $slots) || props.leadHtml) {
          childNodes.push(h(props.leadTag, {
            staticClass: 'lead'
          }, normalizeSlot('lead', {}, $scopedSlots, $slots) || props.leadHtml || stripTags(props.lead)));
        } // Default slot
  
  
        if (hasNormalizedSlot('default', $scopedSlots, $slots)) {
          childNodes.push(normalizeSlot('default', {}, $scopedSlots, $slots));
        } // If fluid, wrap content in a container/container-fluid
  
  
        if (props.fluid) {
          // Children become a child of a container
          childNodes = [h(BContainer, {
            props: {
              fluid: props.containerFluid
            }
          }, childNodes)];
        } // Return the jumbotron
  
  
        return h(props.tag, a(data, {
          staticClass: 'jumbotron',
          class: (_class2 = {
            'jumbotron-fluid': props.fluid
          }, _defineProperty(_class2, "text-".concat(props.textVariant), props.textVariant), _defineProperty(_class2, "bg-".concat(props.bgVariant), props.bgVariant), _defineProperty(_class2, "border-".concat(props.borderVariant), props.borderVariant), _defineProperty(_class2, "border", props.borderVariant), _class2)
        }), childNodes);
      }
    });
  
    var JumbotronPlugin = /*#__PURE__*/pluginFactory({
      components: {
        BJumbotron: BJumbotron
      }
    });
  
    var COMMON_ALIGNMENT = ['start', 'end', 'center']; // Generates a prop object with a type of `[String, Number]`
  
    var strNum$1 = function strNum() {
      return {
        type: [String, Number],
        default: null
      };
    }; // Compute a `row-cols-{breakpoint}-{cols}` class name
    // Memoized function for better performance on generating class names
  
  
    var computeRowColsClass = memoize(function (breakpoint, cols) {
      cols = trim(toString$1(cols));
      return cols ? lowerCase(['row-cols', breakpoint, cols].filter(identity).join('-')) : null;
    }); // Get the breakpoint name from the `rowCols` prop name
    // Memoized function for better performance on extracting breakpoint names
  
    var computeRowColsBreakpoint = memoize(function (prop) {
      return lowerCase(prop.replace('cols', ''));
    }); // Cached copy of the `row-cols` breakpoint prop names
    // Will be populated when the props are generated
  
    var rowColsPropList = []; // Lazy evaled props factory for <b-row> (called only once,
    // the first time the component is used)
  
    var generateProps$2 = function generateProps() {
      // Grab the breakpoints from the cached config (including the '' (xs) breakpoint)
      var breakpoints = getBreakpointsUpCached(); // Supports classes like: `row-cols-2`, `row-cols-md-4`, `row-cols-xl-6`
  
      var rowColsProps = breakpoints.reduce(function (props, breakpoint) {
        props[suffixPropName(breakpoint, 'cols')] = strNum$1();
        return props;
      }, create(null)); // Cache the row-cols prop names
  
      rowColsPropList = keys(rowColsProps); // Return the generated props
  
      return _objectSpread2({
        tag: {
          type: String,
          default: 'div'
        },
        noGutters: {
          type: Boolean,
          default: false
        },
        alignV: {
          type: String,
          default: null,
          validator: function validator(str) {
            return arrayIncludes(COMMON_ALIGNMENT.concat(['baseline', 'stretch']), str);
          }
        },
        alignH: {
          type: String,
          default: null,
          validator: function validator(str) {
            return arrayIncludes(COMMON_ALIGNMENT.concat(['between', 'around']), str);
          }
        },
        alignContent: {
          type: String,
          default: null,
          validator: function validator(str) {
            return arrayIncludes(COMMON_ALIGNMENT.concat(['between', 'around', 'stretch']), str);
          }
        }
      }, rowColsProps);
    }; // We do not use `Vue.extend()` here as that would evaluate the props
    // immediately, which we do not want to happen
    // @vue/component
  
  
    var BRow = {
      name: 'BRow',
      functional: true,
  
      get props() {
        // Allow props to be lazy evaled on first access and
        // then they become a non-getter afterwards
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get#Smart_self-overwriting_lazy_getters
        delete this.props;
        this.props = generateProps$2();
        return this.props;
      },
  
      render: function render(h, _ref) {
        var _classList$push;
  
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;
        var classList = []; // Loop through row-cols breakpoint props and generate the classes
  
        rowColsPropList.forEach(function (prop) {
          var c = computeRowColsClass(computeRowColsBreakpoint(prop), props[prop]); // If a class is returned, push it onto the array
  
          if (c) {
            classList.push(c);
          }
        });
        classList.push((_classList$push = {
          'no-gutters': props.noGutters
        }, _defineProperty(_classList$push, "align-items-".concat(props.alignV), props.alignV), _defineProperty(_classList$push, "justify-content-".concat(props.alignH), props.alignH), _defineProperty(_classList$push, "align-content-".concat(props.alignContent), props.alignContent), _classList$push));
        return h(props.tag, a(data, {
          staticClass: 'row',
          class: classList
        }), children);
      }
    };
  
    var LayoutPlugin = /*#__PURE__*/pluginFactory({
      components: {
        BContainer: BContainer,
        BRow: BRow,
        BCol: BCol,
        BFormRow: BFormRow
      }
    });
  
    var LinkPlugin = /*#__PURE__*/pluginFactory({
      components: {
        BLink: BLink
      }
    });
  
    var props$D = {
      tag: {
        type: String,
        default: 'div'
      },
      flush: {
        type: Boolean,
        default: false
      },
      horizontal: {
        type: [Boolean, String],
        default: false
      }
    }; // @vue/component
  
    var BListGroup = /*#__PURE__*/Vue.extend({
      name: 'BListGroup',
      functional: true,
      props: props$D,
      render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;
        var horizontal = props.horizontal === '' ? true : props.horizontal;
        horizontal = props.flush ? false : horizontal;
        var componentData = {
          staticClass: 'list-group',
          class: _defineProperty({
            'list-group-flush': props.flush,
            'list-group-horizontal': horizontal === true
          }, "list-group-horizontal-".concat(horizontal), isString(horizontal))
        };
        return h(props.tag, a(data, componentData), children);
      }
    });
  
    var NAME$p = 'BListGroupItem';
    var actionTags = ['a', 'router-link', 'button', 'b-link'];
    var linkProps$3 = propsFactory();
    delete linkProps$3.href.default;
    delete linkProps$3.to.default;
    var props$E = _objectSpread2({
      tag: {
        type: String,
        default: 'div'
      },
      action: {
        type: Boolean,
        default: null
      },
      button: {
        type: Boolean,
        default: null
      },
      variant: {
        type: String,
        default: function _default() {
          return getComponentConfig(NAME$p, 'variant');
        }
      }
    }, linkProps$3); // @vue/component
  
    var BListGroupItem = /*#__PURE__*/Vue.extend({
      name: NAME$p,
      functional: true,
      props: props$E,
      render: function render(h, _ref) {
        var _class;
  
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;
        var tag = props.button ? 'button' : !props.href && !props.to ? props.tag : BLink;
        var isAction = Boolean(props.href || props.to || props.action || props.button || arrayIncludes(actionTags, props.tag));
        var attrs = {};
        var itemProps = {};
  
        if (tag === 'button') {
          if (!data.attrs || !data.attrs.type) {
            // Add a type for button is one not provided in passed attributes
            attrs.type = 'button';
          }
  
          if (props.disabled) {
            // Set disabled attribute if button and disabled
            attrs.disabled = true;
          }
        } else {
          itemProps = pluckProps(linkProps$3, props);
        }
  
        var componentData = {
          attrs: attrs,
          props: itemProps,
          staticClass: 'list-group-item',
          class: (_class = {}, _defineProperty(_class, "list-group-item-".concat(props.variant), props.variant), _defineProperty(_class, 'list-group-item-action', isAction), _defineProperty(_class, "active", props.active), _defineProperty(_class, "disabled", props.disabled), _class)
        };
        return h(tag, a(data, componentData), children);
      }
    });
  
    var ListGroupPlugin = /*#__PURE__*/pluginFactory({
      components: {
        BListGroup: BListGroup,
        BListGroupItem: BListGroupItem
      }
    });
  
    var props$F = {
      tag: {
        type: String,
        default: 'div'
      }
    }; // @vue/component
  
    var BMediaBody = /*#__PURE__*/Vue.extend({
      name: 'BMediaBody',
      functional: true,
      props: props$F,
      render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;
        return h(props.tag, a(data, {
          staticClass: 'media-body'
        }), children);
      }
    });
  
    var props$G = {
      tag: {
        type: String,
        default: 'div'
      },
      verticalAlign: {
        type: String,
        default: 'top'
      }
    }; // @vue/component
  
    var BMediaAside = /*#__PURE__*/Vue.extend({
      name: 'BMediaAside',
      functional: true,
      props: props$G,
      render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;
        var align = props.verticalAlign === 'top' ? 'start' : props.verticalAlign === 'bottom' ? 'end' : props.verticalAlign;
        return h(props.tag, a(data, {
          staticClass: 'd-flex',
          class: _defineProperty({}, "align-self-".concat(align), align)
        }), children);
      }
    });
  
    var props$H = {
      tag: {
        type: String,
        default: 'div'
      },
      rightAlign: {
        type: Boolean,
        default: false
      },
      verticalAlign: {
        type: String,
        default: 'top'
      },
      noBody: {
        type: Boolean,
        default: false
      }
    }; // @vue/component
  
    var BMedia = /*#__PURE__*/Vue.extend({
      name: 'BMedia',
      functional: true,
      props: props$H,
      render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            slots = _ref.slots,
            scopedSlots = _ref.scopedSlots,
            children = _ref.children;
        var childNodes = props.noBody ? children : [];
  
        if (!props.noBody) {
          var $slots = slots();
          var $scopedSlots = scopedSlots || {};
          var $aside = normalizeSlot('aside', {}, $scopedSlots, $slots);
          var $default = normalizeSlot('default', {}, $scopedSlots, $slots);
  
          if ($aside && !props.rightAlign) {
            childNodes.push(h(BMediaAside, {
              staticClass: 'mr-3',
              props: {
                verticalAlign: props.verticalAlign
              }
            }, $aside));
          }
  
          childNodes.push(h(BMediaBody, $default));
  
          if ($aside && props.rightAlign) {
            childNodes.push(h(BMediaAside, {
              staticClass: 'ml-3',
              props: {
                verticalAlign: props.verticalAlign
              }
            }, $aside));
          }
        }
  
        return h(props.tag, a(data, {
          staticClass: 'media'
        }), childNodes);
      }
    });
  
    var MediaPlugin = /*#__PURE__*/pluginFactory({
      components: {
        BMedia: BMedia,
        BMediaAside: BMediaAside,
        BMediaBody: BMediaBody
      }
    });
  
    //
    // Single root node portaling of content, which retains parent/child hierarchy
    // Unlike Portal-Vue where portaled content is no longer a descendent of its
    // intended parent components
    //
    // Private components for use by Tooltips, Popovers and Modals
    //
    // Based on vue-simple-portal
    // https://github.com/LinusBorg/vue-simple-portal
    // Transporter target used by BTransporterSingle
    // Supports only a single root element
    // @vue/component
  
    var BTransporterTargetSingle = /*#__PURE__*/Vue.extend({
      // As an abstract component, it doesn't appear in the $parent chain of
      // components, which means the next parent of any component rendered inside
      // of this one will be the parent from which is was portal'd
      abstract: true,
      name: 'BTransporterTargetSingle',
      props: {
        nodes: {
          // Even though we only support a single root element,
          // VNodes are always passed as an array
          type: [Array, Function] // default: undefined
  
        }
      },
      data: function data(vm) {
        return {
          updatedNodes: vm.nodes
        };
      },
      destroyed: function destroyed() {
        removeNode(this.$el);
      },
      render: function render(h) {
        var nodes = isFunction(this.updatedNodes) ? this.updatedNodes({}) : this.updatedNodes;
        nodes = concat(nodes).filter(Boolean);
        /* istanbul ignore else */
  
        if (nodes && nodes.length > 0 && !nodes[0].text) {
          return nodes[0];
        } else {
          /* istanbul ignore next */
          return h();
        }
      }
    }); // This component has no root element, so only a single VNode is allowed
    // @vue/component
  
    var BTransporterSingle = /*#__PURE__*/Vue.extend({
      name: 'BTransporterSingle',
      mixins: [normalizeSlotMixin],
      props: {
        disabled: {
          type: Boolean,
          default: false
        },
        container: {
          // String: CSS selector,
          // HTMLElement: Element reference
          // Mainly needed for tooltips/popovers inside modals
          type: [String, HTMLElement],
          default: 'body'
        },
        tag: {
          // This should be set to match the root element type
          type: String,
          default: 'div'
        }
      },
      watch: {
        disabled: {
          immediate: true,
          handler: function handler(disabled) {
            disabled ? this.unmountTarget() : this.$nextTick(this.mountTarget);
          }
        }
      },
      created: function created() {
        this._bv_defaultFn = null;
        this._bv_target = null;
      },
      beforeMount: function beforeMount() {
        this.mountTarget();
      },
      updated: function updated() {
        // We need to make sure that all children have completed updating
        // before rendering in the target
        // `vue-simple-portal` has the this in a `$nextTick()`,
        // while `portal-vue` doesn't
        // Just trying to see if the `$nextTick()` delay is required or not
        // Since all slots in Vue 2.6.x are always functions
        this.updateTarget();
      },
      beforeDestroy: function beforeDestroy() {
        this.unmountTarget();
        this._bv_defaultFn = null;
      },
      methods: {
        // Get the element which the target should be appended to
        getContainer: function getContainer() {
          /* istanbul ignore else */
          if (isBrowser) {
            var container = this.container;
            return isString(container) ? select(container) : container;
          } else {
            return null;
          }
        },
        // Mount the target
        mountTarget: function mountTarget() {
          if (!this._bv_target) {
            var container = this.getContainer();
  
            if (container) {
              var el = document.createElement('div');
              container.appendChild(el);
              this._bv_target = new BTransporterTargetSingle({
                el: el,
                parent: this,
                propsData: {
                  // Initial nodes to be rendered
                  nodes: concat(this.normalizeSlot('default'))
                }
              });
            }
          }
        },
        // Update the content of the target
        updateTarget: function updateTarget() {
          if (isBrowser && this._bv_target) {
            var defaultFn = this.$scopedSlots.default;
  
            if (!this.disabled) {
              /* istanbul ignore else: only applicable in Vue 2.5.x */
              if (defaultFn && this._bv_defaultFn !== defaultFn) {
                // We only update the target component if the scoped slot
                // function is a fresh one. The new slot syntax (since Vue 2.6)
                // can cache unchanged slot functions and we want to respect that here
                this._bv_target.updatedNodes = defaultFn;
              } else if (!defaultFn) {
                // We also need to be back compatible with non-scoped default slot (i.e. 2.5.x)
                this._bv_target.updatedNodes = this.$slots.default;
              }
            } // Update the scoped slot function cache
  
  
            this._bv_defaultFn = defaultFn;
          }
        },
        // Unmount the target
        unmountTarget: function unmountTarget() {
          if (this._bv_target) {
            this._bv_target.$destroy();
  
            this._bv_target = null;
          }
        }
      },
      render: function render(h) {
        if (this.disabled) {
          var nodes = concat(this.normalizeSlot('default')).filter(identity);
  
          if (nodes.length > 0 && !nodes[0].text) {
            return nodes[0];
          }
        }
  
        return h();
      }
    });
  
    var PROP$1 = '$_bv_documentHandlers_'; // @vue/component
  
    var listenOnDocumentMixin = {
      created: function created() {
        var _this = this;
  
        /* istanbul ignore next */
        if (!isBrowser) {
          return;
        } // Declare non-reactive property
        // Object of arrays, keyed by event name,
        // where value is an array of handlers
        // Prop will be defined on client only
  
  
        this[PROP$1] = {}; // Set up our beforeDestroy handler (client only)
  
        this.$once('hook:beforeDestroy', function () {
          var items = _this[PROP$1] || {}; // Immediately delete this[PROP] to prevent the
          // listenOn/Off methods from running (which may occur
          // due to requestAnimationFrame/transition delays)
  
          delete _this[PROP$1]; // Remove all registered event handlers
  
          keys(items).forEach(function (evtName) {
            var handlers = items[evtName] || [];
            handlers.forEach(function (handler) {
              return eventOff(document, evtName, handler, EVENT_OPTIONS_NO_CAPTURE);
            });
          });
        });
      },
      methods: {
        listenDocument: function listenDocument(on, evtName, handler) {
          on ? this.listenOnDocument(evtName, handler) : this.listenOffDocument(evtName, handler);
        },
        listenOnDocument: function listenOnDocument(evtName, handler) {
          if (this[PROP$1] && isString(evtName) && isFunction(handler)) {
            this[PROP$1][evtName] = this[PROP$1][evtName] || [];
  
            if (!arrayIncludes(this[PROP$1][evtName], handler)) {
              this[PROP$1][evtName].push(handler);
              eventOn(document, evtName, handler, EVENT_OPTIONS_NO_CAPTURE);
            }
          }
        },
        listenOffDocument: function listenOffDocument(evtName, handler) {
          if (this[PROP$1] && isString(evtName) && isFunction(handler)) {
            eventOff(document, evtName, handler, EVENT_OPTIONS_NO_CAPTURE);
            this[PROP$1][evtName] = (this[PROP$1][evtName] || []).filter(function (h) {
              return h !== handler;
            });
          }
        }
      }
    };
  
    var PROP$2 = '$_bv_windowHandlers_'; // @vue/component
  
    var listenOnWindowMixin = {
      beforeCreate: function beforeCreate() {
        // Declare non-reactive property
        // Object of arrays, keyed by event name,
        // where value is an array of handlers
        this[PROP$2] = {};
      },
      beforeDestroy: function beforeDestroy() {
        if (isBrowser) {
          var items = this[PROP$2]; // Immediately delete this[PROP] to prevent the
          // listenOn/Off methods from running (which may occur
          // due to requestAnimationFrame delays)
  
          delete this[PROP$2]; // Remove all registered event handlers
  
          keys(items).forEach(function (evtName) {
            var handlers = items[evtName] || [];
            handlers.forEach(function (handler) {
              return eventOff(window, evtName, handler, EVENT_OPTIONS_NO_CAPTURE);
            });
          });
        }
      },
      methods: {
        listenWindow: function listenWindow(on, evtName, handler) {
          on ? this.listenOnWindow(evtName, handler) : this.listenOffWindow(evtName, handler);
        },
        listenOnWindow: function listenOnWindow(evtName, handler) {
          if (isBrowser && this[PROP$2] && isString(evtName) && isFunction(handler)) {
            this[PROP$2][evtName] = this[PROP$2][evtName] || [];
  
            if (!arrayIncludes(this[PROP$2][evtName], handler)) {
              this[PROP$2][evtName].push(handler);
              eventOn(window, evtName, handler, EVENT_OPTIONS_NO_CAPTURE);
            }
          }
        },
        listenOffWindow: function listenOffWindow(evtName, handler) {
          if (isBrowser && this[PROP$2] && isString(evtName) && isFunction(handler)) {
            eventOff(window, evtName, handler, EVENT_OPTIONS_NO_CAPTURE);
            this[PROP$2][evtName] = (this[PROP$2][evtName] || []).filter(function (h) {
              return h !== handler;
            });
          }
        }
      }
    };
  
    // This method returns a component's scoped style attribute name: `data-v-xxxxxxx`
    // The `_scopeId` options property is added by vue-loader when using scoped styles
    // and will be `undefined` if no scoped styles are in use
    var getScopeId = function getScopeId(vm) {
      var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      return vm ? vm.$options._scopeId || defaultValue : defaultValue;
    };
  
    var scopedStyleAttrsMixin = {
      computed: {
        scopedStyleAttrs: function scopedStyleAttrs() {
          var scopeId = getScopeId(this.$parent);
          return scopeId ? _defineProperty({}, scopeId, '') : {};
        }
      }
    };
  
    /**
     * Private ModalManager helper
     * Handles controlling modal stacking zIndexes and body adjustments/classes
     */
    // Default modal backdrop z-index
  
    var DEFAULT_ZINDEX = 1040; // Selectors for padding/margin adjustments
  
    var Selector$1 = {
      FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
      STICKY_CONTENT: '.sticky-top',
      NAVBAR_TOGGLER: '.navbar-toggler'
    }; // @vue/component
  
    var ModalManager = /*#__PURE__*/Vue.extend({
      data: function data() {
        return {
          modals: [],
          baseZIndex: null,
          scrollbarWidth: null,
          isBodyOverflowing: false
        };
      },
      computed: {
        modalCount: function modalCount() {
          return this.modals.length;
        },
        modalsAreOpen: function modalsAreOpen() {
          return this.modalCount > 0;
        }
      },
      watch: {
        modalCount: function modalCount(newCount, oldCount) {
          if (isBrowser) {
            this.getScrollbarWidth();
  
            if (newCount > 0 && oldCount === 0) {
              // Transitioning to modal(s) open
              this.checkScrollbar();
              this.setScrollbar();
              addClass(document.body, 'modal-open');
            } else if (newCount === 0 && oldCount > 0) {
              // Transitioning to modal(s) closed
              this.resetScrollbar();
              removeClass(document.body, 'modal-open');
            }
  
            setAttr(document.body, 'data-modal-open-count', String(newCount));
          }
        },
        modals: function modals(newVal) {
          var _this = this;
  
          this.checkScrollbar();
          requestAF(function () {
            _this.updateModals(newVal || []);
          });
        }
      },
      methods: {
        // Public methods
        registerModal: function registerModal(modal) {
          var _this2 = this;
  
          // Register the modal if not already registered
          if (modal && this.modals.indexOf(modal) === -1) {
            // Add modal to modals array
            this.modals.push(modal);
            modal.$once('hook:beforeDestroy', function () {
              _this2.unregisterModal(modal);
            });
          }
        },
        unregisterModal: function unregisterModal(modal) {
          var index = this.modals.indexOf(modal);
  
          if (index > -1) {
            // Remove modal from modals array
            this.modals.splice(index, 1); // Reset the modal's data
  
            if (!(modal._isBeingDestroyed || modal._isDestroyed)) {
              this.resetModal(modal);
            }
          }
        },
        getBaseZIndex: function getBaseZIndex() {
          if (isNull(this.baseZIndex) && isBrowser) {
            // Create a temporary `div.modal-backdrop` to get computed z-index
            var div = document.createElement('div');
            div.className = 'modal-backdrop d-none';
            div.style.display = 'none';
            document.body.appendChild(div);
            this.baseZIndex = toInteger(getCS(div).zIndex || DEFAULT_ZINDEX);
            document.body.removeChild(div);
          }
  
          return this.baseZIndex || DEFAULT_ZINDEX;
        },
        getScrollbarWidth: function getScrollbarWidth() {
          if (isNull(this.scrollbarWidth) && isBrowser) {
            // Create a temporary `div.measure-scrollbar` to get computed z-index
            var div = document.createElement('div');
            div.className = 'modal-scrollbar-measure';
            document.body.appendChild(div);
            this.scrollbarWidth = getBCR(div).width - div.clientWidth;
            document.body.removeChild(div);
          }
  
          return this.scrollbarWidth || 0;
        },
        // Private methods
        updateModals: function updateModals(modals) {
          var _this3 = this;
  
          var baseZIndex = this.getBaseZIndex();
          var scrollbarWidth = this.getScrollbarWidth();
          modals.forEach(function (modal, index) {
            // We update data values on each modal
            modal.zIndex = baseZIndex + index;
            modal.scrollbarWidth = scrollbarWidth;
            modal.isTop = index === _this3.modals.length - 1;
            modal.isBodyOverflowing = _this3.isBodyOverflowing;
          });
        },
        resetModal: function resetModal(modal) {
          if (modal) {
            modal.zIndex = this.getBaseZIndex();
            modal.isTop = true;
            modal.isBodyOverflowing = false;
          }
        },
        checkScrollbar: function checkScrollbar() {
          // Determine if the body element is overflowing
          var _getBCR = getBCR(document.body),
              left = _getBCR.left,
              right = _getBCR.right;
  
          this.isBodyOverflowing = left + right < window.innerWidth;
        },
        setScrollbar: function setScrollbar() {
          var body = document.body; // Storage place to cache changes to margins and padding
          // Note: This assumes the following element types are not added to the
          // document after the modal has opened.
  
          body._paddingChangedForModal = body._paddingChangedForModal || [];
          body._marginChangedForModal = body._marginChangedForModal || [];
  
          if (this.isBodyOverflowing) {
            var scrollbarWidth = this.scrollbarWidth; // Adjust fixed content padding
  
            /* istanbul ignore next: difficult to test in JSDOM */
  
            selectAll(Selector$1.FIXED_CONTENT).forEach(function (el) {
              var actualPadding = el.style.paddingRight;
              var calculatedPadding = getCS(el).paddingRight || 0;
              setAttr(el, 'data-padding-right', actualPadding);
              el.style.paddingRight = "".concat(toFloat(calculatedPadding) + scrollbarWidth, "px");
  
              body._paddingChangedForModal.push(el);
            }); // Adjust sticky content margin
  
            /* istanbul ignore next: difficult to test in JSDOM */
  
            selectAll(Selector$1.STICKY_CONTENT).forEach(function (el)
            /* istanbul ignore next */
            {
              var actualMargin = el.style.marginRight;
              var calculatedMargin = getCS(el).marginRight || 0;
              setAttr(el, 'data-margin-right', actualMargin);
              el.style.marginRight = "".concat(toFloat(calculatedMargin) - scrollbarWidth, "px");
  
              body._marginChangedForModal.push(el);
            }); // Adjust <b-navbar-toggler> margin
  
            /* istanbul ignore next: difficult to test in JSDOM */
  
            selectAll(Selector$1.NAVBAR_TOGGLER).forEach(function (el)
            /* istanbul ignore next */
            {
              var actualMargin = el.style.marginRight;
              var calculatedMargin = getCS(el).marginRight || 0;
              setAttr(el, 'data-margin-right', actualMargin);
              el.style.marginRight = "".concat(toFloat(calculatedMargin) + scrollbarWidth, "px");
  
              body._marginChangedForModal.push(el);
            }); // Adjust body padding
  
            var actualPadding = body.style.paddingRight;
            var calculatedPadding = getCS(body).paddingRight;
            setAttr(body, 'data-padding-right', actualPadding);
            body.style.paddingRight = "".concat(toFloat(calculatedPadding) + scrollbarWidth, "px");
          }
        },
        resetScrollbar: function resetScrollbar() {
          var body = document.body;
  
          if (body._paddingChangedForModal) {
            // Restore fixed content padding
            body._paddingChangedForModal.forEach(function (el) {
              /* istanbul ignore next: difficult to test in JSDOM */
              if (hasAttr(el, 'data-padding-right')) {
                el.style.paddingRight = getAttr(el, 'data-padding-right') || '';
                removeAttr(el, 'data-padding-right');
              }
            });
          }
  
          if (body._marginChangedForModal) {
            // Restore sticky content and navbar-toggler margin
            body._marginChangedForModal.forEach(function (el) {
              /* istanbul ignore next: difficult to test in JSDOM */
              if (hasAttr(el, 'data-margin-right')) {
                el.style.marginRight = getAttr(el, 'data-margin-right') || '';
                removeAttr(el, 'data-margin-right');
              }
            });
          }
  
          body._paddingChangedForModal = null;
          body._marginChangedForModal = null; // Restore body padding
  
          if (hasAttr(body, 'data-padding-right')) {
            body.style.paddingRight = getAttr(body, 'data-padding-right') || '';
            removeAttr(body, 'data-padding-right');
          }
        }
      }
    }); // Create and export our modal manager instance
  
    var modalManager = new ModalManager();
  
    var BvModalEvent = /*#__PURE__*/function (_BvEvent) {
      _inherits(BvModalEvent, _BvEvent);
  
      var _super = _createSuper(BvModalEvent);
  
      function BvModalEvent(type) {
        var _this;
  
        var eventInit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  
        _classCallCheck(this, BvModalEvent);
  
        _this = _super.call(this, type, eventInit); // Freeze our new props as readonly, but leave them enumerable
  
        defineProperties(_assertThisInitialized(_this), {
          trigger: readonlyDescriptor()
        });
        return _this;
      }
  
      _createClass(BvModalEvent, null, [{
        key: "Defaults",
        get: function get() {
          return _objectSpread2({}, _get(_getPrototypeOf(BvModalEvent), "Defaults", this), {
            trigger: null
          });
        }
      }]);
  
      return BvModalEvent;
    }(BvEvent); // Named exports
  
    var NAME$q = 'BModal'; // ObserveDom config to detect changes in modal content
    // so that we can adjust the modal padding if needed
  
    var OBSERVER_CONFIG = {
      subtree: true,
      childList: true,
      characterData: true,
      attributes: true,
      attributeFilter: ['style', 'class']
    }; // Query selector to find all tabbable elements
    // (includes tabindex="-1", which we filter out after)
  
    var TABABLE_SELECTOR = ['button', '[href]:not(.disabled)', 'input', 'select', 'textarea', '[tabindex]', '[contenteditable]'].map(function (s) {
      return "".concat(s, ":not(:disabled):not([disabled])");
    }).join(', '); // --- Utility methods ---
    // Attempt to focus an element, and return true if successful
  
    var attemptFocus = function attemptFocus(el) {
      if (el && isVisible(el) && el.focus) {
        try {
          el.focus();
        } catch (_unused) {}
      } // If the element has focus, then return true
  
  
      return document.activeElement === el;
    }; // --- Props ---
  
  
    var props$I = {
      size: {
        type: String,
        default: function _default() {
          return getComponentConfig(NAME$q, 'size');
        }
      },
      centered: {
        type: Boolean,
        default: false
      },
      scrollable: {
        type: Boolean,
        default: false
      },
      buttonSize: {
        type: String,
        default: ''
      },
      noStacking: {
        type: Boolean,
        default: false
      },
      noFade: {
        type: Boolean,
        default: false
      },
      noCloseOnBackdrop: {
        type: Boolean,
        default: false
      },
      noCloseOnEsc: {
        type: Boolean,
        default: false
      },
      noEnforceFocus: {
        type: Boolean,
        default: false
      },
      ignoreEnforceFocusSelector: {
        type: [Array, String],
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      titleHtml: {
        type: String
      },
      titleTag: {
        type: String,
        default: function _default() {
          return getComponentConfig(NAME$q, 'titleTag');
        }
      },
      titleClass: {
        type: [String, Array, Object],
        default: null
      },
      titleSrOnly: {
        type: Boolean,
        default: false
      },
      ariaLabel: {
        type: String,
        default: null
      },
      headerBgVariant: {
        type: String,
        default: function _default() {
          return getComponentConfig(NAME$q, 'headerBgVariant');
        }
      },
      headerBorderVariant: {
        type: String,
        default: function _default() {
          return getComponentConfig(NAME$q, 'headerBorderVariant');
        }
      },
      headerTextVariant: {
        type: String,
        default: function _default() {
          return getComponentConfig(NAME$q, 'headerTextVariant');
        }
      },
      headerCloseVariant: {
        type: String,
        default: function _default() {
          return getComponentConfig(NAME$q, 'headerCloseVariant');
        }
      },
      headerClass: {
        type: [String, Array, Object],
        default: null
      },
      bodyBgVariant: {
        type: String,
        default: function _default() {
          return getComponentConfig(NAME$q, 'bodyBgVariant');
        }
      },
      bodyTextVariant: {
        type: String,
        default: function _default() {
          return getComponentConfig(NAME$q, 'bodyTextVariant');
        }
      },
      modalClass: {
        type: [String, Array, Object],
        default: null
      },
      dialogClass: {
        type: [String, Array, Object],
        default: null
      },
      contentClass: {
        type: [String, Array, Object],
        default: null
      },
      bodyClass: {
        type: [String, Array, Object],
        default: null
      },
      footerBgVariant: {
        type: String,
        default: function _default() {
          return getComponentConfig(NAME$q, 'footerBgVariant');
        }
      },
      footerBorderVariant: {
        type: String,
        default: function _default() {
          return getComponentConfig(NAME$q, 'footerBorderVariant');
        }
      },
      footerTextVariant: {
        type: String,
        default: function _default() {
          return getComponentConfig(NAME$q, 'footerTextVariant');
        }
      },
      footerClass: {
        type: [String, Array, Object],
        default: null
      },
      hideHeader: {
        type: Boolean,
        default: false
      },
      hideFooter: {
        type: Boolean,
        default: false
      },
      hideHeaderClose: {
        type: Boolean,
        default: false
      },
      hideBackdrop: {
        type: Boolean,
        default: false
      },
      okOnly: {
        type: Boolean,
        default: false
      },
      okDisabled: {
        type: Boolean,
        default: false
      },
      cancelDisabled: {
        type: Boolean,
        default: false
      },
      visible: {
        type: Boolean,
        default: false
      },
      returnFocus: {
        // HTML Element, CSS selector string or Vue component instance
        type: [HTMLElement, String, Object],
        default: null
      },
      headerCloseContent: {
        type: String,
        default: function _default() {
          return getComponentConfig(NAME$q, 'headerCloseContent');
        }
      },
      headerCloseLabel: {
        type: String,
        default: function _default() {
          return getComponentConfig(NAME$q, 'headerCloseLabel');
        }
      },
      cancelTitle: {
        type: String,
        default: function _default() {
          return getComponentConfig(NAME$q, 'cancelTitle');
        }
      },
      cancelTitleHtml: {
        type: String
      },
      okTitle: {
        type: String,
        default: function _default() {
          return getComponentConfig(NAME$q, 'okTitle');
        }
      },
      okTitleHtml: {
        type: String
      },
      cancelVariant: {
        type: String,
        default: function _default() {
          return getComponentConfig(NAME$q, 'cancelVariant');
        }
      },
      okVariant: {
        type: String,
        default: function _default() {
          return getComponentConfig(NAME$q, 'okVariant');
        }
      },
      lazy: {
        type: Boolean,
        default: false
      },
      busy: {
        type: Boolean,
        default: false
      },
      static: {
        type: Boolean,
        default: false
      },
      autoFocusButton: {
        type: String,
        default: null,
        validator: function validator(val) {
          /* istanbul ignore next */
          return isUndefinedOrNull(val) || arrayIncludes(['ok', 'cancel', 'close'], val);
        }
      }
    }; // @vue/component
  
    var BModal = /*#__PURE__*/Vue.extend({
      name: NAME$q,
      mixins: [idMixin, listenOnDocumentMixin, listenOnRootMixin, listenOnWindowMixin, normalizeSlotMixin, scopedStyleAttrsMixin],
      inheritAttrs: false,
      model: {
        prop: 'visible',
        event: 'change'
      },
      props: props$I,
      data: function data() {
        return {
          isHidden: true,
          // If modal should not be in document
          isVisible: false,
          // Controls modal visible state
          isTransitioning: false,
          // Used for style control
          isShow: false,
          // Used for style control
          isBlock: false,
          // Used for style control
          isOpening: false,
          // To signal that the modal is in the process of opening
          isClosing: false,
          // To signal that the modal is in the process of closing
          ignoreBackdropClick: false,
          // Used to signify if click out listener should ignore the click
          isModalOverflowing: false,
          return_focus: this.returnFocus || null,
          // The following items are controlled by the modalManager instance
          scrollbarWidth: 0,
          zIndex: modalManager.getBaseZIndex(),
          isTop: true,
          isBodyOverflowing: false
        };
      },
      computed: {
        modalClasses: function modalClasses() {
          return [{
            fade: !this.noFade,
            show: this.isShow
          }, this.modalClass];
        },
        modalStyles: function modalStyles() {
          var sbWidth = "".concat(this.scrollbarWidth, "px");
          return {
            paddingLeft: !this.isBodyOverflowing && this.isModalOverflowing ? sbWidth : '',
            paddingRight: this.isBodyOverflowing && !this.isModalOverflowing ? sbWidth : '',
            // Needed to fix issue https://github.com/bootstrap-vue/bootstrap-vue/issues/3457
            // Even though we are using v-show, we must ensure 'none' is restored in the styles
            display: this.isBlock ? 'block' : 'none'
          };
        },
        dialogClasses: function dialogClasses() {
          var _ref;
  
          return [(_ref = {}, _defineProperty(_ref, "modal-".concat(this.size), this.size), _defineProperty(_ref, 'modal-dialog-centered', this.centered), _defineProperty(_ref, 'modal-dialog-scrollable', this.scrollable), _ref), this.dialogClass];
        },
        headerClasses: function headerClasses() {
          var _ref2;
  
          return [(_ref2 = {}, _defineProperty(_ref2, "bg-".concat(this.headerBgVariant), this.headerBgVariant), _defineProperty(_ref2, "text-".concat(this.headerTextVariant), this.headerTextVariant), _defineProperty(_ref2, "border-".concat(this.headerBorderVariant), this.headerBorderVariant), _ref2), this.headerClass];
        },
        titleClasses: function titleClasses() {
          return [{
            'sr-only': this.titleSrOnly
          }, this.titleClass];
        },
        bodyClasses: function bodyClasses() {
          var _ref3;
  
          return [(_ref3 = {}, _defineProperty(_ref3, "bg-".concat(this.bodyBgVariant), this.bodyBgVariant), _defineProperty(_ref3, "text-".concat(this.bodyTextVariant), this.bodyTextVariant), _ref3), this.bodyClass];
        },
        footerClasses: function footerClasses() {
          var _ref4;
  
          return [(_ref4 = {}, _defineProperty(_ref4, "bg-".concat(this.footerBgVariant), this.footerBgVariant), _defineProperty(_ref4, "text-".concat(this.footerTextVariant), this.footerTextVariant), _defineProperty(_ref4, "border-".concat(this.footerBorderVariant), this.footerBorderVariant), _ref4), this.footerClass];
        },
        modalOuterStyle: function modalOuterStyle() {
          // Styles needed for proper stacking of modals
          return {
            position: 'absolute',
            zIndex: this.zIndex
          };
        },
        slotScope: function slotScope() {
          return {
            ok: this.onOk,
            cancel: this.onCancel,
            close: this.onClose,
            hide: this.hide,
            visible: this.isVisible
          };
        },
        computeIgnoreEnforceFocusSelector: function computeIgnoreEnforceFocusSelector() {
          // Normalize to an single selector with selectors separated by `,`
          return concat(this.ignoreEnforceFocusSelector).filter(identity).join(',').trim();
        }
      },
      watch: {
        visible: function visible(newVal, oldVal) {
          if (newVal !== oldVal) {
            this[newVal ? 'show' : 'hide']();
          }
        }
      },
      created: function created() {
        // Define non-reactive properties
        this._observer = null;
      },
      mounted: function mounted() {
        // Set initial z-index as queried from the DOM
        this.zIndex = modalManager.getBaseZIndex(); // Listen for events from others to either open or close ourselves
        // and listen to all modals to enable/disable enforce focus
  
        this.listenOnRoot('bv::show::modal', this.showHandler);
        this.listenOnRoot('bv::hide::modal', this.hideHandler);
        this.listenOnRoot('bv::toggle::modal', this.toggleHandler); // Listen for `bv:modal::show events`, and close ourselves if the
        // opening modal not us
  
        this.listenOnRoot('bv::modal::show', this.modalListener); // Initially show modal?
  
        if (this.visible === true) {
          this.$nextTick(this.show);
        }
      },
      beforeDestroy: function beforeDestroy() {
        // Ensure everything is back to normal
        if (this._observer) {
          this._observer.disconnect();
  
          this._observer = null;
        }
  
        if (this.isVisible) {
          this.isVisible = false;
          this.isShow = false;
          this.isTransitioning = false;
        }
      },
      methods: {
        // Private method to update the v-model
        updateModel: function updateModel(val) {
          if (val !== this.visible) {
            this.$emit('change', val);
          }
        },
        // Private method to create a BvModalEvent object
        buildEvent: function buildEvent(type) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return new BvModalEvent(type, _objectSpread2({
            // Default options
            cancelable: false,
            target: this.$refs.modal || this.$el || null,
            relatedTarget: null,
            trigger: null
          }, options, {
            // Options that can't be overridden
            vueTarget: this,
            componentId: this.safeId()
          }));
        },
        // Public method to show modal
        show: function show() {
          if (this.isVisible || this.isOpening) {
            // If already open, or in the process of opening, do nothing
  
            /* istanbul ignore next */
            return;
          }
          /* istanbul ignore next */
  
  
          if (this.isClosing) {
            // If we are in the process of closing, wait until hidden before re-opening
  
            /* istanbul ignore next */
            this.$once('hidden', this.show);
            /* istanbul ignore next */
  
            return;
          }
  
          this.isOpening = true; // Set the element to return focus to when closed
  
          this.return_focus = this.return_focus || this.getActiveElement();
          var showEvt = this.buildEvent('show', {
            cancelable: true
          });
          this.emitEvent(showEvt); // Don't show if canceled
  
          if (showEvt.defaultPrevented || this.isVisible) {
            this.isOpening = false; // Ensure the v-model reflects the current state
  
            this.updateModel(false);
            return;
          } // Show the modal
  
  
          this.doShow();
        },
        // Public method to hide modal
        hide: function hide() {
          var trigger = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  
          if (!this.isVisible || this.isClosing) {
            /* istanbul ignore next */
            return;
          }
  
          this.isClosing = true;
          var hideEvt = this.buildEvent('hide', {
            cancelable: trigger !== 'FORCE',
            trigger: trigger || null
          }); // We emit specific event for one of the three built-in buttons
  
          if (trigger === 'ok') {
            this.$emit('ok', hideEvt);
          } else if (trigger === 'cancel') {
            this.$emit('cancel', hideEvt);
          } else if (trigger === 'headerclose') {
            this.$emit('close', hideEvt);
          }
  
          this.emitEvent(hideEvt); // Hide if not canceled
  
          if (hideEvt.defaultPrevented || !this.isVisible) {
            this.isClosing = false; // Ensure v-model reflects current state
  
            this.updateModel(true);
            return;
          } // Stop observing for content changes
  
  
          if (this._observer) {
            this._observer.disconnect();
  
            this._observer = null;
          } // Trigger the hide transition
  
  
          this.isVisible = false; // Update the v-model
  
          this.updateModel(false);
        },
        // Public method to toggle modal visibility
        toggle: function toggle(triggerEl) {
          if (triggerEl) {
            this.return_focus = triggerEl;
          }
  
          if (this.isVisible) {
            this.hide('toggle');
          } else {
            this.show();
          }
        },
        // Private method to get the current document active element
        getActiveElement: function getActiveElement() {
          if (isBrowser) {
            var activeElement = document.activeElement; // Note: On IE 11, `document.activeElement` may be null.
            // So we test it for truthiness first.
            // https://github.com/bootstrap-vue/bootstrap-vue/issues/3206
            // Returning focus to document.body may cause unwanted scrolls, so we
            // exclude setting focus on body
  
            if (activeElement && activeElement !== document.body && activeElement.focus) {
              // Preset the fallback return focus value if it is not set
              // `document.activeElement` should be the trigger element that was clicked or
              // in the case of using the v-model, which ever element has current focus
              // Will be overridden by some commands such as toggle, etc.
              return activeElement;
            }
          }
  
          return null;
        },
        // Private method to get a list of all tabable elements within modal content
        getTabables: function getTabables() {
          // Find all tabable elements in the modal content
          // Assumes users have not used tabindex > 0 on elements!
          return selectAll(TABABLE_SELECTOR, this.$refs.content).filter(isVisible).filter(function (i) {
            return i.tabIndex > -1 && !i.disabled;
          });
        },
        // Private method to finish showing modal
        doShow: function doShow() {
          var _this = this;
  
          /* istanbul ignore next: commenting out for now until we can test stacking */
          if (modalManager.modalsAreOpen && this.noStacking) {
            // If another modal(s) is already open, wait for it(them) to close
            this.listenOnRootOnce('bv::modal::hidden', this.doShow);
            return;
          }
  
          modalManager.registerModal(this); // Place modal in DOM
  
          this.isHidden = false;
          this.$nextTick(function () {
            // We do this in `$nextTick()` to ensure the modal is in DOM first
            // before we show it
            _this.isVisible = true;
            _this.isOpening = false; // Update the v-model
  
            _this.updateModel(true);
  
            _this.$nextTick(function () {
              // In a nextTick in case modal content is lazy
              // Observe changes in modal content and adjust if necessary
              _this._observer = observeDom(_this.$refs.content, _this.checkModalOverflow.bind(_this), OBSERVER_CONFIG);
            });
          });
        },
        // Transition handlers
        onBeforeEnter: function onBeforeEnter() {
          this.isTransitioning = true;
          this.setResizeEvent(true);
        },
        onEnter: function onEnter() {
          var _this2 = this;
  
          this.isBlock = true; // We add the `show` class 1 frame later
          // `requestAF()` runs the callback before the next repaint, so we need
          // two calls to guarantee the next frame has been rendered
  
          requestAF(function () {
            requestAF(function () {
              _this2.isShow = true;
            });
          });
        },
        onAfterEnter: function onAfterEnter() {
          var _this3 = this;
  
          this.checkModalOverflow();
          this.isTransitioning = false; // We use `requestAF()` to allow transition hooks to complete
          // before passing control over to the other handlers
          // This will allow users to not have to use `$nextTick()` or `requestAF()`
          // when trying to pre-focus an element
  
          requestAF(function () {
            _this3.emitEvent(_this3.buildEvent('shown'));
  
            _this3.setEnforceFocus(true);
  
            _this3.$nextTick(function () {
              // Delayed in a `$nextTick()` to allow users time to pre-focus
              // an element if the wish
              _this3.focusFirst();
            });
          });
        },
        onBeforeLeave: function onBeforeLeave() {
          this.isTransitioning = true;
          this.setResizeEvent(false);
          this.setEnforceFocus(false);
        },
        onLeave: function onLeave() {
          // Remove the 'show' class
          this.isShow = false;
        },
        onAfterLeave: function onAfterLeave() {
          var _this4 = this;
  
          this.isBlock = false;
          this.isTransitioning = false;
          this.isModalOverflowing = false;
          this.isHidden = true;
          this.$nextTick(function () {
            _this4.isClosing = false;
            modalManager.unregisterModal(_this4);
  
            _this4.returnFocusTo(); // TODO: Need to find a way to pass the `trigger` property
            //       to the `hidden` event, not just only the `hide` event
  
  
            _this4.emitEvent(_this4.buildEvent('hidden'));
          });
        },
        // Event emitter
        emitEvent: function emitEvent(bvModalEvt) {
          var type = bvModalEvt.type; // We emit on root first incase a global listener wants to cancel
          // the event first before the instance emits its event
  
          this.emitOnRoot("bv::modal::".concat(type), bvModalEvt, bvModalEvt.componentId);
          this.$emit(type, bvModalEvt);
        },
        // UI event handlers
        onDialogMousedown: function onDialogMousedown() {
          var _this5 = this;
  
          // Watch to see if the matching mouseup event occurs outside the dialog
          // And if it does, cancel the clickOut handler
          var modal = this.$refs.modal;
  
          var onceModalMouseup = function onceModalMouseup(evt) {
            eventOff(modal, 'mouseup', onceModalMouseup, EVENT_OPTIONS_NO_CAPTURE);
  
            if (evt.target === modal) {
              _this5.ignoreBackdropClick = true;
            }
          };
  
          eventOn(modal, 'mouseup', onceModalMouseup, EVENT_OPTIONS_NO_CAPTURE);
        },
        onClickOut: function onClickOut(evt) {
          if (this.ignoreBackdropClick) {
            // Click was initiated inside the modal content, but finished outside.
            // Set by the above onDialogMousedown handler
            this.ignoreBackdropClick = false;
            return;
          } // Do nothing if not visible, backdrop click disabled, or element
          // that generated click event is no longer in document body
  
  
          if (!this.isVisible || this.noCloseOnBackdrop || !contains(document.body, evt.target)) {
            return;
          } // If backdrop clicked, hide modal
  
  
          if (!contains(this.$refs.content, evt.target)) {
            this.hide('backdrop');
          }
        },
        onOk: function onOk() {
          this.hide('ok');
        },
        onCancel: function onCancel() {
          this.hide('cancel');
        },
        onClose: function onClose() {
          this.hide('headerclose');
        },
        onEsc: function onEsc(evt) {
          // If ESC pressed, hide modal
          if (evt.keyCode === KEY_CODES.ESC && this.isVisible && !this.noCloseOnEsc) {
            this.hide('esc');
          }
        },
        // Document focusin listener
        focusHandler: function focusHandler(evt) {
          // If focus leaves modal content, bring it back
          var content = this.$refs.content;
          var target = evt.target;
  
          if (this.noEnforceFocus || !this.isTop || !this.isVisible || !content || document === target || contains(content, target) || this.computeIgnoreEnforceFocusSelector && closest(this.computeIgnoreEnforceFocusSelector, target, true)) {
            return;
          }
  
          var tabables = this.getTabables();
          var _this$$refs = this.$refs,
              bottomTrap = _this$$refs.bottomTrap,
              topTrap = _this$$refs.topTrap;
  
          if (bottomTrap && target === bottomTrap) {
            // If user pressed TAB out of modal into our bottom trab trap element
            // Find the first tabable element in the modal content and focus it
            if (attemptFocus(tabables[0])) {
              // Focus was successful
              return;
            }
          } else if (topTrap && target === topTrap) {
            // If user pressed CTRL-TAB out of modal and into our top tab trap element
            // Find the last tabable element in the modal content and focus it
            if (attemptFocus(tabables[tabables.length - 1])) {
              // Focus was successful
              return;
            }
          } // Otherwise focus the modal content container
  
  
          content.focus({
            preventScroll: true
          });
        },
        // Turn on/off focusin listener
        setEnforceFocus: function setEnforceFocus(on) {
          this.listenDocument(on, 'focusin', this.focusHandler);
        },
        // Resize listener
        setResizeEvent: function setResizeEvent(on) {
          this.listenWindow(on, 'resize', this.checkModalOverflow);
          this.listenWindow(on, 'orientationchange', this.checkModalOverflow);
        },
        // Root listener handlers
        showHandler: function showHandler(id, triggerEl) {
          if (id === this.safeId()) {
            this.return_focus = triggerEl || this.getActiveElement();
            this.show();
          }
        },
        hideHandler: function hideHandler(id) {
          if (id === this.safeId()) {
            this.hide('event');
          }
        },
        toggleHandler: function toggleHandler(id, triggerEl) {
          if (id === this.safeId()) {
            this.toggle(triggerEl);
          }
        },
        modalListener: function modalListener(bvEvt) {
          // If another modal opens, close this one if stacking not permitted
          if (this.noStacking && bvEvt.vueTarget !== this) {
            this.hide();
          }
        },
        // Focus control handlers
        focusFirst: function focusFirst() {
          var _this6 = this;
  
          // Don't try and focus if we are SSR
          if (isBrowser) {
            requestAF(function () {
              var modal = _this6.$refs.modal;
              var content = _this6.$refs.content;
  
              var activeElement = _this6.getActiveElement(); // If the modal contains the activeElement, we don't do anything
  
  
              if (modal && content && !(activeElement && contains(content, activeElement))) {
                var ok = _this6.$refs['ok-button'];
                var cancel = _this6.$refs['cancel-button'];
                var close = _this6.$refs['close-button']; // Focus the appropriate button or modal content wrapper
  
                var autoFocus = _this6.autoFocusButton;
                var el = autoFocus === 'ok' && ok ? ok.$el || ok : autoFocus === 'cancel' && cancel ? cancel.$el || cancel : autoFocus === 'close' && close ? close.$el || close : content; // Focus the element
  
                attemptFocus(el);
  
                if (el === content) {
                  // Make sure top of modal is showing (if longer than the viewport)
                  _this6.$nextTick(function () {
                    modal.scrollTop = 0;
                  });
                }
              }
            });
          }
        },
        returnFocusTo: function returnFocusTo() {
          // Prefer `returnFocus` prop over event specified
          // `return_focus` value
          var el = this.returnFocus || this.return_focus || null;
          this.return_focus = null;
          this.$nextTick(function () {
            // Is el a string CSS selector?
            el = isString(el) ? select(el) : el;
  
            if (el) {
              // Possibly could be a component reference
              el = el.$el || el;
              attemptFocus(el);
            }
          });
        },
        checkModalOverflow: function checkModalOverflow() {
          if (this.isVisible) {
            var modal = this.$refs.modal;
            this.isModalOverflowing = modal.scrollHeight > document.documentElement.clientHeight;
          }
        },
        makeModal: function makeModal(h) {
          // Modal header
          var header = h();
  
          if (!this.hideHeader) {
            var modalHeader = this.normalizeSlot('modal-header', this.slotScope);
  
            if (!modalHeader) {
              var closeButton = h();
  
              if (!this.hideHeaderClose) {
                closeButton = h(BButtonClose, {
                  ref: 'close-button',
                  props: {
                    content: this.headerCloseContent,
                    disabled: this.isTransitioning,
                    ariaLabel: this.headerCloseLabel,
                    textVariant: this.headerCloseVariant || this.headerTextVariant
                  },
                  on: {
                    click: this.onClose
                  }
                }, [this.normalizeSlot('modal-header-close')]);
              }
  
              var domProps = !this.hasNormalizedSlot('modal-title') && this.titleHtml ? {
                innerHTML: this.titleHtml
              } : {};
              modalHeader = [h(this.titleTag, {
                staticClass: 'modal-title',
                class: this.titleClasses,
                attrs: {
                  id: this.safeId('__BV_modal_title_')
                },
                domProps: domProps
              }, [this.normalizeSlot('modal-title', this.slotScope) || stripTags(this.title)]), closeButton];
            }
  
            header = h('header', {
              ref: 'header',
              staticClass: 'modal-header',
              class: this.headerClasses,
              attrs: {
                id: this.safeId('__BV_modal_header_')
              }
            }, [modalHeader]);
          } // Modal body
  
  
          var body = h('div', {
            ref: 'body',
            staticClass: 'modal-body',
            class: this.bodyClasses,
            attrs: {
              id: this.safeId('__BV_modal_body_')
            }
          }, this.normalizeSlot('default', this.slotScope)); // Modal footer
  
          var footer = h();
  
          if (!this.hideFooter) {
            var modalFooter = this.normalizeSlot('modal-footer', this.slotScope);
  
            if (!modalFooter) {
              var cancelButton = h();
  
              if (!this.okOnly) {
                var cancelHtml = this.cancelTitleHtml ? {
                  innerHTML: this.cancelTitleHtml
                } : null;
                cancelButton = h(BButton, {
                  ref: 'cancel-button',
                  props: {
                    variant: this.cancelVariant,
                    size: this.buttonSize,
                    disabled: this.cancelDisabled || this.busy || this.isTransitioning
                  },
                  on: {
                    click: this.onCancel
                  }
                }, [this.normalizeSlot('modal-cancel') || (cancelHtml ? h('span', {
                  domProps: cancelHtml
                }) : stripTags(this.cancelTitle))]);
              }
  
              var okHtml = this.okTitleHtml ? {
                innerHTML: this.okTitleHtml
              } : null;
              var okButton = h(BButton, {
                ref: 'ok-button',
                props: {
                  variant: this.okVariant,
                  size: this.buttonSize,
                  disabled: this.okDisabled || this.busy || this.isTransitioning
                },
                on: {
                  click: this.onOk
                }
              }, [this.normalizeSlot('modal-ok') || (okHtml ? h('span', {
                domProps: okHtml
              }) : stripTags(this.okTitle))]);
              modalFooter = [cancelButton, okButton];
            }
  
            footer = h('footer', {
              ref: 'footer',
              staticClass: 'modal-footer',
              class: this.footerClasses,
              attrs: {
                id: this.safeId('__BV_modal_footer_')
              }
            }, [modalFooter]);
          } // Assemble modal content
  
  
          var modalContent = h('div', {
            ref: 'content',
            staticClass: 'modal-content',
            class: this.contentClass,
            attrs: {
              role: 'document',
              id: this.safeId('__BV_modal_content_'),
              tabindex: '-1'
            }
          }, [header, body, footer]); // Tab trap to prevent page from scrolling to next element in
          // tab index during enforce focus tab cycle
  
          var tabTrapTop = h();
          var tabTrapBottom = h();
  
          if (this.isVisible && !this.noEnforceFocus) {
            tabTrapTop = h('span', {
              ref: 'topTrap',
              attrs: {
                tabindex: '0'
              }
            });
            tabTrapBottom = h('span', {
              ref: 'bottomTrap',
              attrs: {
                tabindex: '0'
              }
            });
          } // Modal dialog wrapper
  
  
          var modalDialog = h('div', {
            ref: 'dialog',
            staticClass: 'modal-dialog',
            class: this.dialogClasses,
            on: {
              mousedown: this.onDialogMousedown
            }
          }, [tabTrapTop, modalContent, tabTrapBottom]); // Modal
  
          var modal = h('div', {
            ref: 'modal',
            staticClass: 'modal',
            class: this.modalClasses,
            style: this.modalStyles,
            directives: [{
              name: 'show',
              rawName: 'v-show',
              value: this.isVisible,
              expression: 'isVisible'
            }],
            attrs: {
              id: this.safeId(),
              role: 'dialog',
              'aria-hidden': this.isVisible ? null : 'true',
              'aria-modal': this.isVisible ? 'true' : null,
              'aria-label': this.ariaLabel,
              'aria-labelledby': this.hideHeader || this.ariaLabel || !(this.hasNormalizedSlot('modal-title') || this.titleHtml || this.title) ? null : this.safeId('__BV_modal_title_'),
              'aria-describedby': this.safeId('__BV_modal_body_')
            },
            on: {
              keydown: this.onEsc,
              click: this.onClickOut
            }
          }, [modalDialog]); // Wrap modal in transition
          // Sadly, we can't use BVTransition here due to the differences in
          // transition durations for .modal and .modal-dialog. Not until
          // issue https://github.com/vuejs/vue/issues/9986 is resolved
  
          modal = h('transition', {
            props: {
              enterClass: '',
              enterToClass: '',
              enterActiveClass: '',
              leaveClass: '',
              leaveActiveClass: '',
              leaveToClass: ''
            },
            on: {
              beforeEnter: this.onBeforeEnter,
              enter: this.onEnter,
              afterEnter: this.onAfterEnter,
              beforeLeave: this.onBeforeLeave,
              leave: this.onLeave,
              afterLeave: this.onAfterLeave
            }
          }, [modal]); // Modal backdrop
  
          var backdrop = h();
  
          if (!this.hideBackdrop && this.isVisible) {
            backdrop = h('div', {
              staticClass: 'modal-backdrop',
              attrs: {
                id: this.safeId('__BV_modal_backdrop_')
              }
            }, [this.normalizeSlot('modal-backdrop')]);
          }
  
          backdrop = h(BVTransition, {
            props: {
              noFade: this.noFade
            }
          }, [backdrop]); // If the parent has a scoped style attribute, and the modal
          // is portalled, add the scoped attribute to the modal wrapper
  
          var scopedStyleAttrs = !this.static ? this.scopedStyleAttrs : {}; // Assemble modal and backdrop in an outer <div>
  
          return h('div', {
            key: "modal-outer-".concat(this._uid),
            style: this.modalOuterStyle,
            attrs: _objectSpread2({}, scopedStyleAttrs, {}, this.$attrs, {
              id: this.safeId('__BV_modal_outer_')
            })
          }, [modal, backdrop]);
        }
      },
      render: function render(h) {
        if (this.static) {
          return this.lazy && this.isHidden ? h() : this.makeModal(h);
        } else {
          return this.isHidden ? h() : h(BTransporterSingle, [this.makeModal(h)]);
        }
      }
    });
  
    var EVENT_SHOW = 'bv::show::modal'; // Prop name we use to store info on root element
  
    var PROPERTY = '__bv_modal_directive__';
  
    var getTarget = function getTarget(_ref) {
      var _ref$modifiers = _ref.modifiers,
          modifiers = _ref$modifiers === void 0 ? {} : _ref$modifiers,
          arg = _ref.arg,
          value = _ref.value;
      // Try value, then arg, otherwise pick last modifier
      return isString(value) ? value : isString(arg) ? arg : keys(modifiers).reverse()[0];
    };
  
    var getTriggerElement = function getTriggerElement(el) {
      // If root element is a dropdown-item or nav-item, we
      // need to target the inner link or button instead
      return el && matches(el, '.dropdown-menu > li, li.nav-item') ? select('a, button', el) || el : el;
    };
  
    var setRole = function setRole(trigger) {
      // Ensure accessibility on non button elements
      if (trigger && trigger.tagName !== 'BUTTON') {
        // Only set a role if the trigger element doesn't have one
        if (!hasAttr(trigger, 'role')) {
          setAttr(trigger, 'role', 'button');
        } // Add a tabindex is not a button or link, and tabindex is not provided
  
  
        if (trigger.tagName !== 'A' && !hasAttr(trigger, 'tabindex')) {
          setAttr(trigger, 'tabindex', '0');
        }
      }
    };
  
    var bind$1 = function bind(el, binding, vnode) {
      var target = getTarget(binding);
      var trigger = getTriggerElement(el);
  
      if (target && trigger) {
        var handler = function handler(evt) {
          // `currentTarget` is the element with the listener on it
          var currentTarget = evt.currentTarget;
  
          if (!isDisabled(currentTarget)) {
            var type = evt.type;
            var key = evt.keyCode; // Open modal only if trigger is not disabled
  
            if (type === 'click' || type === 'keydown' && (key === KEY_CODES.ENTER || key === KEY_CODES.SPACE)) {
              vnode.context.$root.$emit(EVENT_SHOW, target, currentTarget);
            }
          }
        };
  
        el[PROPERTY] = {
          handler: handler,
          target: target,
          trigger: trigger
        }; // If element is not a button, we add `role="button"` for accessibility
  
        setRole(trigger); // Listen for click events
  
        eventOn(trigger, 'click', handler, EVENT_OPTIONS_PASSIVE);
  
        if (trigger.tagName !== 'BUTTON' && getAttr(trigger, 'role') === 'button') {
          // If trigger isn't a button but has role button,
          // we also listen for `keydown.space` && `keydown.enter`
          eventOn(trigger, 'keydown', handler, EVENT_OPTIONS_PASSIVE);
        }
      }
    };
  
    var unbind$1 = function unbind(el) {
      var oldProp = el[PROPERTY] || {};
      var trigger = oldProp.trigger;
      var handler = oldProp.handler;
  
      if (trigger && handler) {
        eventOff(trigger, 'click', handler, EVENT_OPTIONS_PASSIVE);
        eventOff(trigger, 'keydown', handler, EVENT_OPTIONS_PASSIVE);
        eventOff(el, 'click', handler, EVENT_OPTIONS_PASSIVE);
        eventOff(el, 'keydown', handler, EVENT_OPTIONS_PASSIVE);
      }
  
      delete el[PROPERTY];
    };
  
    var componentUpdated$1 = function componentUpdated(el, binding, vnode) {
      var oldProp = el[PROPERTY] || {};
      var target = getTarget(binding);
      var trigger = getTriggerElement(el);
  
      if (target !== oldProp.target || trigger !== oldProp.trigger) {
        // We bind and rebind if the target or trigger changes
        unbind$1(el);
        bind$1(el, binding, vnode);
      } // If trigger element is not a button, ensure `role="button"`
      // is still set for accessibility
  
  
      setRole(trigger);
    };
  
    var updated = function updated() {};
    /*
     * Export our directive
     */
  
  
    var VBModal = {
      inserted: componentUpdated$1,
      updated: updated,
      componentUpdated: componentUpdated$1,
      unbind: unbind$1
    };
  
    var PROP_NAME$2 = '$bvModal';
    var PROP_NAME_PRIV = '_bv__modal'; // Base modal props that are allowed
    // Some may be ignored or overridden on some message boxes
    // Prop ID is allowed, but really only should be used for testing
    // We need to add it in explicitly as it comes from the `idMixin`
  
    var BASE_PROPS = ['id'].concat(_toConsumableArray(keys(omit(props$I, ['busy', 'lazy', 'noStacking', "static", 'visible'])))); // Fallback event resolver (returns undefined)
  
    var defaultResolver = function defaultResolver() {}; // Map prop names to modal slot names
  
  
    var propsToSlots = {
      msgBoxContent: 'default',
      title: 'modal-title',
      okTitle: 'modal-ok',
      cancelTitle: 'modal-cancel'
    }; // --- Utility methods ---
    // Method to filter only recognized props that are not undefined
  
    var filterOptions = function filterOptions(options) {
      return BASE_PROPS.reduce(function (memo, key) {
        if (!isUndefined(options[key])) {
          memo[key] = options[key];
        }
  
        return memo;
      }, {});
    }; // Method to install `$bvModal` VM injection
  
  
    var plugin = function plugin(Vue) {
      // Create a private sub-component that extends BModal
      // which self-destructs after hidden
      // @vue/component
      var BMsgBox = Vue.extend({
        name: 'BMsgBox',
        extends: BModal,
        destroyed: function destroyed() {
          // Make sure we not in document any more
          if (this.$el && this.$el.parentNode) {
            this.$el.parentNode.removeChild(this.$el);
          }
        },
        mounted: function mounted() {
          var _this = this;
  
          // Self destruct handler
          var handleDestroy = function handleDestroy() {
            var self = _this;
  
            _this.$nextTick(function () {
              // In a `setTimeout()` to release control back to application
              setTimeout(function () {
                return self.$destroy();
              }, 0);
            });
          }; // Self destruct if parent destroyed
  
  
          this.$parent.$once('hook:destroyed', handleDestroy); // Self destruct after hidden
  
          this.$once('hidden', handleDestroy); // Self destruct on route change
  
          /* istanbul ignore if */
  
          if (this.$router && this.$route) {
            // Destroy ourselves if route changes
  
            /* istanbul ignore next */
            this.$once('hook:beforeDestroy', this.$watch('$router', handleDestroy));
          } // Show the `BMsgBox`
  
  
          this.show();
        }
      }); // Method to generate the on-demand modal message box
      // Returns a promise that resolves to a value returned by the resolve
  
      var asyncMsgBox = function asyncMsgBox($parent, props) {
        var resolver = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultResolver;
  
        if (warnNotClient(PROP_NAME$2) || warnNoPromiseSupport(PROP_NAME$2)) {
          /* istanbul ignore next */
          return;
        } // Create an instance of `BMsgBox` component
  
  
        var msgBox = new BMsgBox({
          // We set parent as the local VM so these modals can emit events on
          // the app `$root`, as needed by things like tooltips and popovers
          // And it helps to ensure `BMsgBox` is destroyed when parent is destroyed
          parent: $parent,
          // Preset the prop values
          propsData: _objectSpread2({}, filterOptions(getComponentConfig('BModal') || {}), {
            // Defaults that user can override
            hideHeaderClose: true,
            hideHeader: !(props.title || props.titleHtml)
          }, omit(props, keys(propsToSlots)), {
            // Props that can't be overridden
            lazy: false,
            busy: false,
            visible: false,
            noStacking: false,
            noEnforceFocus: false
          })
        }); // Convert certain props to scoped slots
  
        keys(propsToSlots).forEach(function (prop) {
          if (!isUndefined(props[prop])) {
            // Can be a string, or array of VNodes.
            // Alternatively, user can use HTML version of prop to pass an HTML string.
            msgBox.$slots[propsToSlots[prop]] = concat(props[prop]);
          }
        }); // Return a promise that resolves when hidden, or rejects on destroyed
  
        return new Promise(function (resolve, reject) {
          var resolved = false;
          msgBox.$once('hook:destroyed', function () {
            if (!resolved) {
              /* istanbul ignore next */
              reject(new Error('BootstrapVue MsgBox destroyed before resolve'));
            }
          });
          msgBox.$on('hide', function (bvModalEvt) {
            if (!bvModalEvt.defaultPrevented) {
              var result = resolver(bvModalEvt); // If resolver didn't cancel hide, we resolve
  
              if (!bvModalEvt.defaultPrevented) {
                resolved = true;
                resolve(result);
              }
            }
          }); // Create a mount point (a DIV) and mount the msgBo which will trigger it to show
  
          var div = document.createElement('div');
          document.body.appendChild(div);
          msgBox.$mount(div);
        });
      }; // Private utility method to open a user defined message box and returns a promise.
      // Not to be used directly by consumers, as this method may change calling syntax
  
  
      var makeMsgBox = function makeMsgBox($parent, content) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var resolver = arguments.length > 3 ? arguments[3] : undefined;
  
        if (!content || warnNoPromiseSupport(PROP_NAME$2) || warnNotClient(PROP_NAME$2) || !isFunction(resolver)) {
          /* istanbul ignore next */
          return;
        }
  
        return asyncMsgBox($parent, _objectSpread2({}, filterOptions(options), {
          msgBoxContent: content
        }), resolver);
      }; // BvModal instance class
  
  
      var BvModal = /*#__PURE__*/function () {
        function BvModal(vm) {
          _classCallCheck(this, BvModal);
  
          // Assign the new properties to this instance
          assign(this, {
            _vm: vm,
            _root: vm.$root
          }); // Set these properties as read-only and non-enumerable
  
          defineProperties(this, {
            _vm: readonlyDescriptor(),
            _root: readonlyDescriptor()
          });
        } // --- Instance methods ---
        // Show modal with the specified ID args are for future use
  
  
        _createClass(BvModal, [{
          key: "show",
          value: function show(id) {
            if (id && this._root) {
              var _this$_root;
  
              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }
  
              (_this$_root = this._root).$emit.apply(_this$_root, ['bv::show::modal', id].concat(args));
            }
          } // Hide modal with the specified ID args are for future use
  
        }, {
          key: "hide",
          value: function hide(id) {
            if (id && this._root) {
              var _this$_root2;
  
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
  
              (_this$_root2 = this._root).$emit.apply(_this$_root2, ['bv::hide::modal', id].concat(args));
            }
          } // The following methods require Promise support!
          // IE 11 and others do not support Promise natively, so users
          // should have a Polyfill loaded (which they need anyways for IE 11 support)
          // Open a message box with OK button only and returns a promise
  
        }, {
          key: "msgBoxOk",
          value: function msgBoxOk(message) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  
            // Pick the modal props we support from options
            var props = _objectSpread2({}, options, {
              // Add in overrides and our content prop
              okOnly: true,
              okDisabled: false,
              hideFooter: false,
              msgBoxContent: message
            });
  
            return makeMsgBox(this._vm, message, props, function () {
              // Always resolve to true for OK
              return true;
            });
          } // Open a message box modal with OK and CANCEL buttons
          // and returns a promise
  
        }, {
          key: "msgBoxConfirm",
          value: function msgBoxConfirm(message) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  
            // Set the modal props we support from options
            var props = _objectSpread2({}, options, {
              // Add in overrides and our content prop
              okOnly: false,
              okDisabled: false,
              cancelDisabled: false,
              hideFooter: false
            });
  
            return makeMsgBox(this._vm, message, props, function (bvModalEvt) {
              var trigger = bvModalEvt.trigger;
              return trigger === 'ok' ? true : trigger === 'cancel' ? false : null;
            });
          }
        }]);
  
        return BvModal;
      }(); // Add our instance mixin
  
  
      Vue.mixin({
        beforeCreate: function beforeCreate() {
          // Because we need access to `$root` for `$emits`, and VM for parenting,
          // we have to create a fresh instance of `BvModal` for each VM
          this[PROP_NAME_PRIV] = new BvModal(this);
        }
      }); // Define our read-only `$bvModal` instance property
      // Placed in an if just in case in HMR mode
      // eslint-disable-next-line no-prototype-builtins
  
      if (!Vue.prototype.hasOwnProperty(PROP_NAME$2)) {
        defineProperty(Vue.prototype, PROP_NAME$2, {
          get: function get() {
            /* istanbul ignore next */
            if (!this || !this[PROP_NAME_PRIV]) {
              warn("\"".concat(PROP_NAME$2, "\" must be accessed from a Vue instance \"this\" context."), 'BModal');
            }
  
            return this[PROP_NAME_PRIV];
          }
        });
      }
    };
  
    var BVModalPlugin = /*#__PURE__*/pluginFactory({
      plugins: {
        plugin: plugin
      }
    });
  
    var ModalPlugin = /*#__PURE__*/pluginFactory({
      components: {
        BModal: BModal
      },
      directives: {
        VBModal: VBModal
      },
      // $bvModal injection
      plugins: {
        BVModalPlugin: BVModalPlugin
      }
    });
  
    var props$J = {
      tag: {
        type: String,
        default: 'ul'
      },
      fill: {
        type: Boolean,
        default: false
      },
      justified: {
        type: Boolean,
        default: false
      },
      align: {
        type: String,
        default: null
      },
      tabs: {
        type: Boolean,
        default: false
      },
      pills: {
        type: Boolean,
        default: false
      },
      vertical: {
        type: Boolean,
        default: false
      },
      small: {
        type: Boolean,
        default: false
      },
      cardHeader: {
        // Set to true if placing in a card header
        type: Boolean,
        default: false
      }
    }; // -- Utils --
  
    var computeJustifyContent = function computeJustifyContent(value) {
      // Normalize value
      value = value === 'left' ? 'start' : value === 'right' ? 'end' : value;
      return "justify-content-".concat(value);
    }; // @vue/component
  
  
    var BNav = /*#__PURE__*/Vue.extend({
      name: 'BNav',
      functional: true,
      props: props$J,
      render: function render(h, _ref) {
        var _class;
  
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;
        return h(props.tag, a(data, {
          staticClass: 'nav',
          class: (_class = {
            'nav-tabs': props.tabs,
            'nav-pills': props.pills && !props.tabs,
            'card-header-tabs': !props.vertical && props.cardHeader && props.tabs,
            'card-header-pills': !props.vertical && props.cardHeader && props.pills && !props.tabs,
            'flex-column': props.vertical,
            'nav-fill': !props.vertical && props.fill,
            'nav-justified': !props.vertical && props.justified
          }, _defineProperty(_class, computeJustifyContent(props.align), !props.vertical && props.align), _defineProperty(_class, "small", props.small), _class)
        }), children);
      }
    });
  
    var props$K = propsFactory(); // @vue/component
  
    var BNavItem = /*#__PURE__*/Vue.extend({
      name: 'BNavItem',
      functional: true,
      props: _objectSpread2({}, props$K, {
        linkAttrs: {
          type: Object,
          default: function _default() {}
        },
        linkClasses: {
          type: [String, Object, Array],
          default: null
        }
      }),
      render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            listeners = _ref.listeners,
            children = _ref.children;
        // We transfer the listeners to the link
        delete data.on;
        return h('li', a(data, {
          staticClass: 'nav-item'
        }), [h(BLink, {
          staticClass: 'nav-link',
          class: props.linkClasses,
          attrs: props.linkAttrs,
          props: props,
          on: listeners
        }, children)]);
      }
    });
  
    var props$L = {}; // @vue/component
  
    var BNavText = /*#__PURE__*/Vue.extend({
      name: 'BNavText',
      functional: true,
      props: props$L,
      render: function render(h, _ref) {
        var data = _ref.data,
            children = _ref.children;
        return h('li', a(data, {
          staticClass: 'navbar-text'
        }), children);
      }
    });
  
    var props$M = _objectSpread2({}, omit(props$p, ['inline']), {
      formClass: {
        type: [String, Array, Object],
        default: null
      }
    }); // @vue/component
  
    var BNavForm = /*#__PURE__*/Vue.extend({
      name: 'BNavForm',
      functional: true,
      props: props$M,
      render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children,
            _ref$listeners = _ref.listeners,
            listeners = _ref$listeners === void 0 ? {} : _ref$listeners;
        var attrs = data.attrs; // The following data properties are cleared out
        // as they will be passed to BForm directly
  
        data.attrs = {};
        data.on = {};
        var $form = h(BForm, {
          class: props.formClass,
          props: _objectSpread2({}, props, {
            inline: true
          }),
          attrs: attrs,
          on: listeners
        }, children);
        return h('li', a(data, {
          staticClass: 'form-inline'
        }), [$form]);
      }
    });
  
    var props$N = pluckProps(['text', 'html', 'menuClass', 'toggleClass', 'noCaret', 'role', 'lazy'], props$k); // @vue/component
  
    var BNavItemDropdown = /*#__PURE__*/Vue.extend({
      name: 'BNavItemDropdown',
      mixins: [idMixin, dropdownMixin, normalizeSlotMixin],
      props: props$N,
      computed: {
        isNav: function isNav() {
          // Signal to dropdown mixin that we are in a navbar
          return true;
        },
        dropdownClasses: function dropdownClasses() {
          return [this.directionClass, {
            show: this.visible
          }];
        },
        menuClasses: function menuClasses() {
          return [this.menuClass, {
            'dropdown-menu-right': this.right,
            show: this.visible
          }];
        },
        toggleClasses: function toggleClasses() {
          return [this.toggleClass, {
            'dropdown-toggle-no-caret': this.noCaret
          }];
        }
      },
      render: function render(h) {
        var button = h(BLink, {
          ref: 'toggle',
          staticClass: 'nav-link dropdown-toggle',
          class: this.toggleClasses,
          props: {
            href: '#',
            disabled: this.disabled
          },
          attrs: {
            id: this.safeId('_BV_button_'),
            'aria-haspopup': 'true',
            'aria-expanded': this.visible ? 'true' : 'false'
          },
          on: {
            mousedown: this.onMousedown,
            click: this.toggle,
            keydown: this.toggle // Handle ENTER, SPACE and DOWN
  
          }
        }, [this.$slots['button-content'] || this.$slots.text || h('span', {
          domProps: htmlOrText(this.html, this.text)
        })]);
        var menu = h('ul', {
          staticClass: 'dropdown-menu',
          class: this.menuClasses,
          ref: 'menu',
          attrs: {
            tabindex: '-1',
            'aria-labelledby': this.safeId('_BV_button_')
          },
          on: {
            keydown: this.onKeydown // Handle UP, DOWN and ESC
  
          }
        }, !this.lazy || this.visible ? this.normalizeSlot('default', {
          hide: this.hide
        }) : [h()]);
        return h('li', {
          staticClass: 'nav-item b-nav-dropdown dropdown',
          class: this.dropdownClasses,
          attrs: {
            id: this.safeId()
          }
        }, [button, menu]);
      }
    });
  
    var NavPlugin = /*#__PURE__*/pluginFactory({
      components: {
        BNav: BNav,
        BNavItem: BNavItem,
        BNavText: BNavText,
        BNavForm: BNavForm,
        BNavItemDropdown: BNavItemDropdown,
        BNavItemDd: BNavItemDropdown,
        BNavDropdown: BNavItemDropdown,
        BNavDd: BNavItemDropdown
      },
      plugins: {
        DropdownPlugin: DropdownPlugin
      }
    });
  
    var NAME$r = 'BNavbar';
    var props$O = {
      tag: {
        type: String,
        default: 'nav'
      },
      type: {
        type: String,
        default: 'light'
      },
      variant: {
        type: String,
        default: function _default() {
          return getComponentConfig(NAME$r, 'variant');
        }
      },
      toggleable: {
        type: [Boolean, String],
        default: false
      },
      fixed: {
        type: String
      },
      sticky: {
        type: Boolean,
        default: false
      },
      print: {
        type: Boolean,
        default: false
      }
    }; // @vue/component
  
    var BNavbar = /*#__PURE__*/Vue.extend({
      name: NAME$r,
      mixins: [normalizeSlotMixin],
      props: props$O,
      provide: function provide() {
        return {
          bvNavbar: this
        };
      },
      computed: {
        breakpointClass: function breakpointClass() {
          var breakpoint = null;
          var xs = getBreakpoints()[0];
          var toggleable = this.toggleable;
  
          if (toggleable && isString(toggleable) && toggleable !== xs) {
            breakpoint = "navbar-expand-".concat(toggleable);
          } else if (toggleable === false) {
            breakpoint = 'navbar-expand';
          }
  
          return breakpoint;
        }
      },
      render: function render(h) {
        var _ref;
  
        return h(this.tag, {
          staticClass: 'navbar',
          class: [(_ref = {
            'd-print': this.print,
            'sticky-top': this.sticky
          }, _defineProperty(_ref, "navbar-".concat(this.type), this.type), _defineProperty(_ref, "bg-".concat(this.variant), this.variant), _defineProperty(_ref, "fixed-".concat(this.fixed), this.fixed), _ref), this.breakpointClass],
          attrs: {
            role: this.tag === 'nav' ? null : 'navigation'
          }
        }, [this.normalizeSlot('default')]);
      }
    });
  
    var props$P = pluckProps(['tag', 'fill', 'justified', 'align', 'small'], props$J); // -- Utils --
  
    var computeJustifyContent$1 = function computeJustifyContent(value) {
      // Normalize value
      value = value === 'left' ? 'start' : value === 'right' ? 'end' : value;
      return "justify-content-".concat(value);
    }; // @vue/component
  
  
    var BNavbarNav = /*#__PURE__*/Vue.extend({
      name: 'BNavbarNav',
      functional: true,
      props: props$P,
      render: function render(h, _ref) {
        var _class;
  
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;
        return h(props.tag, a(data, {
          staticClass: 'navbar-nav',
          class: (_class = {
            'nav-fill': props.fill,
            'nav-justified': props.justified
          }, _defineProperty(_class, computeJustifyContent$1(props.align), props.align), _defineProperty(_class, "small", props.small), _class)
        }), children);
      }
    });
  
    var linkProps$4 = propsFactory();
    linkProps$4.href.default = undefined;
    linkProps$4.to.default = undefined;
    var props$Q = _objectSpread2({}, linkProps$4, {
      tag: {
        type: String,
        default: 'div'
      }
    }); // @vue/component
  
    var BNavbarBrand = /*#__PURE__*/Vue.extend({
      name: 'BNavbarBrand',
      functional: true,
      props: props$Q,
      render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;
        var isLink = props.to || props.href;
        var tag = isLink ? BLink : props.tag;
        return h(tag, a(data, {
          staticClass: 'navbar-brand',
          props: isLink ? pluckProps(linkProps$4, props) : {}
        }), children);
      }
    });
  
    var NAME$s = 'BNavbarToggle'; // TODO: Switch to using VBToggle directive, will reduce code footprint
    // Events we emit on $root
  
    var EVENT_TOGGLE$2 = 'bv::toggle::collapse'; // Events we listen to on $root
  
    var EVENT_STATE$2 = 'bv::collapse::state'; // This private event is NOT to be documented as people should not be using it.
  
    var EVENT_STATE_SYNC$2 = 'bv::collapse::sync::state'; // @vue/component
  
    var BNavbarToggle = /*#__PURE__*/Vue.extend({
      name: NAME$s,
      mixins: [listenOnRootMixin, normalizeSlotMixin],
      props: {
        label: {
          type: String,
          default: function _default() {
            return getComponentConfig(NAME$s, 'label');
          }
        },
        target: {
          type: String,
          required: true
        }
      },
      data: function data() {
        return {
          toggleState: false
        };
      },
      created: function created() {
        this.listenOnRoot(EVENT_STATE$2, this.handleStateEvt);
        this.listenOnRoot(EVENT_STATE_SYNC$2, this.handleStateEvt);
      },
      methods: {
        onClick: function onClick(evt) {
          this.$emit('click', evt);
  
          if (!evt.defaultPrevented) {
            this.$root.$emit(EVENT_TOGGLE$2, this.target);
          }
        },
        handleStateEvt: function handleStateEvt(id, state) {
          if (id === this.target) {
            this.toggleState = state;
          }
        }
      },
      render: function render(h) {
        return h('button', {
          class: ['navbar-toggler'],
          attrs: {
            type: 'button',
            'aria-label': this.label,
            'aria-controls': this.target,
            'aria-expanded': this.toggleState ? 'true' : 'false'
          },
          on: {
            click: this.onClick
          }
        }, [this.normalizeSlot('default') || h('span', {
          class: ['navbar-toggler-icon']
        })]);
      }
    });
  
    var NavbarPlugin = /*#__PURE__*/pluginFactory({
      components: {
        BNavbar: BNavbar,
        BNavbarNav: BNavbarNav,
        BNavbarBrand: BNavbarBrand,
        BNavbarToggle: BNavbarToggle,
        BNavToggle: BNavbarToggle
      },
      plugins: {
        NavPlugin: NavPlugin,
        CollapsePlugin: CollapsePlugin,
        DropdownPlugin: DropdownPlugin
      }
    });
  
    var NAME$t = 'BSpinner'; // @vue/component
  
    var BSpinner = /*#__PURE__*/Vue.extend({
      name: NAME$t,
      functional: true,
      props: {
        type: {
          type: String,
          default: 'border' // SCSS currently supports 'border' or 'grow'
  
        },
        label: {
          type: String,
          default: null
        },
        variant: {
          type: String,
          default: function _default() {
            return getComponentConfig(NAME$t, 'variant');
          }
        },
        small: {
          type: Boolean,
          default: false
        },
        role: {
          type: String,
          default: 'status'
        },
        tag: {
          type: String,
          default: 'span'
        }
      },
      render: function render(h, _ref) {
        var _class;
  
        var props = _ref.props,
            data = _ref.data,
            slots = _ref.slots,
            scopedSlots = _ref.scopedSlots;
        var $slots = slots();
        var $scopedSlots = scopedSlots || {};
        var label = normalizeSlot('label', {}, $scopedSlots, $slots) || props.label;
  
        if (label) {
          label = h('span', {
            staticClass: 'sr-only'
          }, label);
        }
  
        return h(props.tag, a(data, {
          attrs: {
            role: label ? props.role || 'status' : null,
            'aria-hidden': label ? null : 'true'
          },
          class: (_class = {}, _defineProperty(_class, "spinner-".concat(props.type), props.type), _defineProperty(_class, "spinner-".concat(props.type, "-sm"), props.small), _defineProperty(_class, "text-".concat(props.variant), props.variant), _class)
        }), [label || h()]);
      }
    });
  
    var positionCover = {
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    };
    var BOverlay = /*#__PURE__*/Vue.extend({
      name: 'BOverlay',
      mixins: [normalizeSlotMixin],
      props: {
        show: {
          type: Boolean,
          default: false
        },
        variant: {
          type: String,
          default: 'light'
        },
        bgColor: {
          // Alternative to variant, allowing a specific
          // CSS color to be applied to the overlay
          type: String,
          default: null
        },
        opacity: {
          type: [Number, String],
          default: 0.85,
          validator: function validator(value) {
            var number = toFloat(value);
            return number >= 0 && number <= 1;
          }
        },
        blur: {
          type: String,
          default: '2px'
        },
        rounded: {
          type: [Boolean, String],
          default: false
        },
        noCenter: {
          type: Boolean,
          default: false
        },
        noFade: {
          type: Boolean,
          default: false
        },
        spinnerType: {
          type: String,
          default: 'border'
        },
        spinnerVariant: {
          type: String,
          default: null
        },
        spinnerSmall: {
          type: Boolean,
          default: false
        },
        overlayTag: {
          type: String,
          default: 'div'
        },
        wrapTag: {
          type: String,
          default: 'div'
        },
        noWrap: {
          // If set, does not render the default slot
          // and switches to absolute positioning
          type: Boolean,
          default: false
        },
        fixed: {
          type: Boolean,
          default: false
        },
        zIndex: {
          type: [Number, String],
          default: 10
        }
      },
      computed: {
        computedRounded: function computedRounded() {
          var rounded = this.rounded;
          return rounded === true || rounded === '' ? 'rounded' : !rounded ? '' : "rounded-".concat(rounded);
        },
        computedVariant: function computedVariant() {
          return this.variant && !this.bgColor ? "bg-".concat(this.variant) : '';
        },
        overlayScope: function overlayScope() {
          return {
            spinnerType: this.spinnerType,
            spinnerVariant: this.spinnerVariant || null,
            spinnerSmall: this.spinnerSmall
          };
        }
      },
      methods: {
        defaultOverlayFn: function defaultOverlayFn(_ref) {
          var spinnerType = _ref.spinnerType,
              spinnerVariant = _ref.spinnerVariant,
              spinnerSmall = _ref.spinnerSmall;
          return this.$createElement(BSpinner, {
            props: {
              type: spinnerType,
              variant: spinnerVariant,
              small: spinnerSmall
            }
          });
        }
      },
      render: function render(h) {
        var _this = this;
  
        var $overlay = h();
  
        if (this.show) {
          var scope = this.overlayScope; // Overlay backdrop
  
          var $background = h('div', {
            staticClass: 'position-absolute',
            class: [this.computedVariant, this.computedRounded],
            style: _objectSpread2({}, positionCover, {
              opacity: this.opacity,
              backgroundColor: this.bgColor || null,
              backdropFilter: this.blur ? "blur(".concat(this.blur, ")") : null
            })
          }); // Overlay content
  
          var $content = h('div', {
            staticClass: 'position-absolute',
            style: this.noCenter ? _objectSpread2({}, positionCover) : {
              top: '50%',
              left: '50%',
              transform: 'translateX(-50%) translateY(-50%)'
            }
          }, [this.normalizeSlot('overlay', scope) || this.defaultOverlayFn(scope)]); // Overlay positioning
  
          $overlay = h(this.overlayTag, {
            key: 'overlay',
            staticClass: 'b-overlay',
            class: {
              'position-absolute': !this.noWrap || this.noWrap && !this.fixed,
              'position-fixed': this.noWrap && this.fixed
            },
            style: _objectSpread2({}, positionCover, {
              zIndex: this.zIndex || 10
            })
          }, [$background, $content]);
        } // Wrap in a fade transition
  
  
        $overlay = h(BVTransition, {
          props: {
            noFade: this.noFade,
            appear: true
          },
          on: {
            'after-enter': function afterEnter() {
              return _this.$emit('shown');
            },
            'after-leave': function afterLeave() {
              return _this.$emit('hidden');
            }
          }
        }, [$overlay]);
  
        if (this.noWrap) {
          return $overlay;
        }
  
        return h(this.wrapTag, {
          staticClass: 'b-overlay-wrap position-relative',
          attrs: {
            'aria-busy': this.show ? 'true' : null
          }
        }, this.noWrap ? [$overlay] : [this.normalizeSlot('default'), $overlay]);
      }
    });
  
    var OverlayPlugin = /*#__PURE__*/pluginFactory({
      components: {
        BOverlay: BOverlay
      }
    });
  
    /**
     * @param {number} length
     * @return {Array}
     */
    var range = function range(length) {
      return Array.apply(null, {
        length: length
      });
    };
  
    // for `<b-pagination>` and `<b-pagination-nav>`
    // --- Constants ---
    // Threshold of limit size when we start/stop showing ellipsis
  
    var ELLIPSIS_THRESHOLD = 3; // Default # of buttons limit
  
    var DEFAULT_LIMIT = 5; // --- Helper methods ---
    // Make an array of N to N+X
  
    var makePageArray = function makePageArray(startNumber, numberOfPages) {
      return range(numberOfPages).map(function (val, i) {
        return {
          number: startNumber + i,
          classes: null
        };
      });
    }; // Sanitize the provided limit value (converting to a number)
  
  
    var sanitizeLimit = function sanitizeLimit(val) {
      var limit = toInteger(val) || 1;
      return limit < 1 ? DEFAULT_LIMIT : limit;
    }; // Sanitize the provided current page number (converting to a number)
  
  
    var sanitizeCurrentPage = function sanitizeCurrentPage(val, numberOfPages) {
      var page = toInteger(val) || 1;
      return page > numberOfPages ? numberOfPages : page < 1 ? 1 : page;
    }; // Links don't normally respond to SPACE, so we add that
    // functionality via this handler
  
  
    var onSpaceKey = function onSpaceKey(evt) {
      if (evt.keyCode === KEY_CODES.SPACE) {
        evt.preventDefault(); // Stop page from scrolling
  
        evt.stopImmediatePropagation();
        evt.stopPropagation(); // Trigger the click event on the link
  
        evt.currentTarget.click();
        return false;
      }
    }; // --- Props ---
  
  
    var props$R = {
      disabled: {
        type: Boolean,
        default: false
      },
      value: {
        type: [Number, String],
        default: null,
        validator: function validator(value)
        /* istanbul ignore next */
        {
          var number = toInteger(value);
  
          if (!isNull(value) && (isNaN(number) || number < 1)) {
            warn('"v-model" value must be a number greater than "0"', 'BPagination');
            return false;
          }
  
          return true;
        }
      },
      limit: {
        type: [Number, String],
        default: DEFAULT_LIMIT,
        validator: function validator(value)
        /* istanbul ignore next */
        {
          var number = toInteger(value);
  
          if (isNaN(number) || number < 1) {
            warn('Prop "limit" must be a number greater than "0"', 'BPagination');
            return false;
          }
  
          return true;
        }
      },
      align: {
        type: String,
        default: 'left'
      },
      pills: {
        type: Boolean,
        default: false
      },
      hideGotoEndButtons: {
        type: Boolean,
        default: false
      },
      ariaLabel: {
        type: String,
        default: 'Pagination'
      },
      labelFirstPage: {
        type: String,
        default: 'Go to first page'
      },
      firstText: {
        type: String,
        default: "\xAB" // '«'
  
      },
      firstNumber: {
        type: Boolean,
        default: false
      },
      firstClass: {
        type: [String, Array, Object],
        default: null
      },
      labelPrevPage: {
        type: String,
        default: 'Go to previous page'
      },
      prevText: {
        type: String,
        default: "\u2039" // '‹'
  
      },
      prevClass: {
        type: [String, Array, Object],
        default: null
      },
      labelNextPage: {
        type: String,
        default: 'Go to next page'
      },
      nextText: {
        type: String,
        default: "\u203A" // '›'
  
      },
      nextClass: {
        type: [String, Array, Object],
        default: null
      },
      labelLastPage: {
        type: String,
        default: 'Go to last page'
      },
      lastText: {
        type: String,
        default: "\xBB" // '»'
  
      },
      lastNumber: {
        type: Boolean,
        default: false
      },
      lastClass: {
        type: [String, Array, Object],
        default: null
      },
      labelPage: {
        type: [String, Function],
        default: 'Go to page'
      },
      pageClass: {
        type: [String, Array, Object],
        default: null
      },
      hideEllipsis: {
        type: Boolean,
        default: false
      },
      ellipsisText: {
        type: String,
        default: "\u2026" // '…'
  
      },
      ellipsisClass: {
        type: [String, Array, Object],
        default: null
      }
    }; // @vue/component
  
    var paginationMixin = {
      mixins: [normalizeSlotMixin],
      model: {
        prop: 'value',
        event: 'input'
      },
      props: props$R,
      data: function data() {
        var curr = toInteger(this.value);
        return {
          // -1 signifies no page initially selected
          currentPage: curr > 0 ? curr : -1,
          localNumberOfPages: 1,
          localLimit: DEFAULT_LIMIT
        };
      },
      computed: {
        btnSize: function btnSize() {
          return this.size ? "pagination-".concat(this.size) : '';
        },
        alignment: function alignment() {
          var align = this.align;
  
          if (align === 'center') {
            return 'justify-content-center';
          } else if (align === 'end' || align === 'right') {
            return 'justify-content-end';
          } else if (align === 'fill') {
            // The page-items will also have 'flex-fill' added
            // We add text centering to make the button appearance better in fill mode
            return 'text-center';
          }
  
          return '';
        },
        styleClass: function styleClass() {
          return this.pills ? 'b-pagination-pills' : '';
        },
        computedCurrentPage: function computedCurrentPage() {
          return sanitizeCurrentPage(this.currentPage, this.localNumberOfPages);
        },
        paginationParams: function paginationParams() {
          // Determine if we should show the the ellipsis
          var limit = this.localLimit;
          var numberOfPages = this.localNumberOfPages;
          var currentPage = this.computedCurrentPage;
          var hideEllipsis = this.hideEllipsis;
          var firstNumber = this.firstNumber;
          var lastNumber = this.lastNumber;
          var showFirstDots = false;
          var showLastDots = false;
          var numberOfLinks = limit;
          var startNumber = 1;
  
          if (numberOfPages <= limit) {
            // Special case: Less pages available than the limit of displayed pages
            numberOfLinks = numberOfPages;
          } else if (currentPage < limit - 1 && limit > ELLIPSIS_THRESHOLD) {
            if (!hideEllipsis || lastNumber) {
              showLastDots = true;
              numberOfLinks = limit - (firstNumber ? 0 : 1);
            }
  
            numberOfLinks = Math.min(numberOfLinks, limit);
          } else if (numberOfPages - currentPage + 2 < limit && limit > ELLIPSIS_THRESHOLD) {
            if (!hideEllipsis || firstNumber) {
              showFirstDots = true;
              numberOfLinks = limit - (lastNumber ? 0 : 1);
            }
  
            startNumber = numberOfPages - numberOfLinks + 1;
          } else {
            // We are somewhere in the middle of the page list
            if (limit > ELLIPSIS_THRESHOLD) {
              numberOfLinks = limit - 2;
              showFirstDots = !!(!hideEllipsis || firstNumber);
              showLastDots = !!(!hideEllipsis || lastNumber);
            }
  
            startNumber = currentPage - Math.floor(numberOfLinks / 2);
          } // Sanity checks
  
          /* istanbul ignore if */
  
  
          if (startNumber < 1) {
            startNumber = 1;
            showFirstDots = false;
          } else if (startNumber > numberOfPages - numberOfLinks) {
            startNumber = numberOfPages - numberOfLinks + 1;
            showLastDots = false;
          }
  
          if (showFirstDots && firstNumber && startNumber < 4) {
            numberOfLinks = numberOfLinks + 2;
            startNumber = 1;
            showFirstDots = false;
          }
  
          var lastPageNumber = startNumber + numberOfLinks - 1;
  
          if (showLastDots && lastNumber && lastPageNumber > numberOfPages - 3) {
            numberOfLinks = numberOfLinks + (lastPageNumber === numberOfPages - 2 ? 2 : 3);
            showLastDots = false;
          } // Special handling for lower limits (where ellipsis are never shown)
  
  
          if (limit <= ELLIPSIS_THRESHOLD) {
            if (firstNumber && startNumber === 1) {
              numberOfLinks = Math.min(numberOfLinks + 1, numberOfPages, limit + 1);
            } else if (lastNumber && numberOfPages === startNumber + numberOfLinks - 1) {
              startNumber = Math.max(startNumber - 1, 1);
              numberOfLinks = Math.min(numberOfPages - startNumber + 1, numberOfPages, limit + 1);
            }
          }
  
          numberOfLinks = Math.min(numberOfLinks, numberOfPages - startNumber + 1);
          return {
            showFirstDots: showFirstDots,
            showLastDots: showLastDots,
            numberOfLinks: numberOfLinks,
            startNumber: startNumber
          };
        },
        pageList: function pageList() {
          // Generates the pageList array
          var _this$paginationParam = this.paginationParams,
              numberOfLinks = _this$paginationParam.numberOfLinks,
              startNumber = _this$paginationParam.startNumber;
          var currentPage = this.computedCurrentPage; // Generate list of page numbers
  
          var pages = makePageArray(startNumber, numberOfLinks); // We limit to a total of 3 page buttons on XS screens
          // So add classes to page links to hide them for XS breakpoint
          // Note: Ellipsis will also be hidden on XS screens
          // TODO: Make this visual limit configurable based on breakpoint(s)
  
          if (pages.length > 3) {
            var idx = currentPage - startNumber; // THe following is a bootstrap-vue custom utility class
  
            var classes = 'bv-d-xs-down-none';
  
            if (idx === 0) {
              // Keep leftmost 3 buttons visible when current page is first page
              for (var i = 3; i < pages.length; i++) {
                pages[i].classes = classes;
              }
            } else if (idx === pages.length - 1) {
              // Keep rightmost 3 buttons visible when current page is last page
              for (var _i = 0; _i < pages.length - 3; _i++) {
                pages[_i].classes = classes;
              }
            } else {
              // Hide all except current page, current page - 1 and current page + 1
              for (var _i2 = 0; _i2 < idx - 1; _i2++) {
                // hide some left button(s)
                pages[_i2].classes = classes;
              }
  
              for (var _i3 = pages.length - 1; _i3 > idx + 1; _i3--) {
                // hide some right button(s)
                pages[_i3].classes = classes;
              }
            }
          }
  
          return pages;
        }
      },
      watch: {
        value: function value(newValue, oldValue) {
          if (newValue !== oldValue) {
            this.currentPage = sanitizeCurrentPage(newValue, this.localNumberOfPages);
          }
        },
        currentPage: function currentPage(newValue, oldValue) {
          if (newValue !== oldValue) {
            // Emit null if no page selected
            this.$emit('input', newValue > 0 ? newValue : null);
          }
        },
        limit: function limit(newValue, oldValue) {
          if (newValue !== oldValue) {
            this.localLimit = sanitizeLimit(newValue);
          }
        }
      },
      created: function created() {
        var _this = this;
  
        // Set our default values in data
        this.localLimit = sanitizeLimit(this.limit);
        this.$nextTick(function () {
          // Sanity check
          _this.currentPage = _this.currentPage > _this.localNumberOfPages ? _this.localNumberOfPages : _this.currentPage;
        });
      },
      methods: {
        handleKeyNav: function handleKeyNav(evt) {
          var keyCode = evt.keyCode,
              shiftKey = evt.shiftKey;
          /* istanbul ignore if */
  
          if (this.isNav) {
            // We disable left/right keyboard navigation in `<b-pagination-nav>`
            return;
          }
  
          if (keyCode === KEY_CODES.LEFT || keyCode === KEY_CODES.UP) {
            evt.preventDefault();
            shiftKey ? this.focusFirst() : this.focusPrev();
          } else if (keyCode === KEY_CODES.RIGHT || keyCode === KEY_CODES.DOWN) {
            evt.preventDefault();
            shiftKey ? this.focusLast() : this.focusNext();
          }
        },
        getButtons: function getButtons() {
          // Return only buttons that are visible
          return selectAll('button.page-link, a.page-link', this.$el).filter(function (btn) {
            return isVisible(btn);
          });
        },
        setBtnFocus: function setBtnFocus(btn) {
          btn.focus();
        },
        focusCurrent: function focusCurrent() {
          var _this2 = this;
  
          // We do this in `$nextTick()` to ensure buttons have finished rendering
          this.$nextTick(function () {
            var btn = _this2.getButtons().find(function (el) {
              return toInteger(getAttr(el, 'aria-posinset')) === _this2.computedCurrentPage;
            });
  
            if (btn && btn.focus) {
              _this2.setBtnFocus(btn);
            } else {
              // Fallback if current page is not in button list
              _this2.focusFirst();
            }
          });
        },
        focusFirst: function focusFirst() {
          var _this3 = this;
  
          // We do this in `$nextTick()` to ensure buttons have finished rendering
          this.$nextTick(function () {
            var btn = _this3.getButtons().find(function (el) {
              return !isDisabled(el);
            });
  
            if (btn && btn.focus && btn !== document.activeElement) {
              _this3.setBtnFocus(btn);
            }
          });
        },
        focusLast: function focusLast() {
          var _this4 = this;
  
          // We do this in `$nextTick()` to ensure buttons have finished rendering
          this.$nextTick(function () {
            var btn = _this4.getButtons().reverse().find(function (el) {
              return !isDisabled(el);
            });
  
            if (btn && btn.focus && btn !== document.activeElement) {
              _this4.setBtnFocus(btn);
            }
          });
        },
        focusPrev: function focusPrev() {
          var _this5 = this;
  
          // We do this in `$nextTick()` to ensure buttons have finished rendering
          this.$nextTick(function () {
            var buttons = _this5.getButtons();
  
            var idx = buttons.indexOf(document.activeElement);
  
            if (idx > 0 && !isDisabled(buttons[idx - 1]) && buttons[idx - 1].focus) {
              _this5.setBtnFocus(buttons[idx - 1]);
            }
          });
        },
        focusNext: function focusNext() {
          var _this6 = this;
  
          // We do this in `$nextTick()` to ensure buttons have finished rendering
          this.$nextTick(function () {
            var buttons = _this6.getButtons();
  
            var idx = buttons.indexOf(document.activeElement);
            var cnt = buttons.length - 1;
  
            if (idx < cnt && !isDisabled(buttons[idx + 1]) && buttons[idx + 1].focus) {
              _this6.setBtnFocus(buttons[idx + 1]);
            }
          });
        }
      },
      render: function render(h) {
        var _this7 = this;
  
        var buttons = [];
        var numberOfPages = this.localNumberOfPages;
        var pageNumbers = this.pageList.map(function (p) {
          return p.number;
        });
        var disabled = this.disabled;
        var _this$paginationParam2 = this.paginationParams,
            showFirstDots = _this$paginationParam2.showFirstDots,
            showLastDots = _this$paginationParam2.showLastDots;
        var currentPage = this.computedCurrentPage;
        var fill = this.align === 'fill'; // Used to control what type of aria attributes are rendered and wrapper
  
        var isNav = this.isNav; // Helper function and flag
  
        var isActivePage = function isActivePage(pageNumber) {
          return pageNumber === currentPage;
        };
  
        var noCurrentPage = this.currentPage < 1; // Factory function for prev/next/first/last buttons
  
        var makeEndBtn = function makeEndBtn(linkTo, ariaLabel, btnSlot, btnText, btnClass, pageTest, key) {
          var isDisabled = disabled || isActivePage(pageTest) || noCurrentPage || linkTo < 1 || linkTo > numberOfPages;
          var pageNumber = linkTo < 1 ? 1 : linkTo > numberOfPages ? numberOfPages : linkTo;
          var scope = {
            disabled: isDisabled,
            page: pageNumber,
            index: pageNumber - 1
          };
          var $btnContent = _this7.normalizeSlot(btnSlot, scope) || toString$1(btnText) || h();
          var $inner = h(isDisabled ? 'span' : isNav ? BLink : 'button', {
            staticClass: 'page-link',
            class: {
              'flex-grow-1': !isNav && !isDisabled && fill
            },
            props: isDisabled || !isNav ? {} : _this7.linkProps(linkTo),
            attrs: {
              role: isNav ? null : 'menuitem',
              type: isNav || isDisabled ? null : 'button',
              tabindex: isDisabled || isNav ? null : '-1',
              'aria-label': ariaLabel,
              'aria-controls': _this7.ariaControls || null,
              'aria-disabled': isDisabled ? 'true' : null
            },
            on: isDisabled ? {} : {
              '!click': function click(evt) {
                _this7.onClick(linkTo, evt);
              },
              keydown: onSpaceKey
            }
          }, [$btnContent]);
          return h('li', {
            key: key,
            staticClass: 'page-item',
            class: [{
              disabled: isDisabled,
              'flex-fill': fill,
              'd-flex': fill && !isNav && !isDisabled
            }, btnClass],
            attrs: {
              role: isNav ? null : 'presentation',
              'aria-hidden': isDisabled ? 'true' : null
            }
          }, [$inner]);
        }; // Ellipsis factory
  
  
        var makeEllipsis = function makeEllipsis(isLast) {
          return h('li', {
            key: "ellipsis-".concat(isLast ? 'last' : 'first'),
            staticClass: 'page-item',
            class: ['disabled', 'bv-d-xs-down-none', fill ? 'flex-fill' : '', _this7.ellipsisClass],
            attrs: {
              role: 'separator'
            }
          }, [h('span', {
            staticClass: 'page-link'
          }, [_this7.normalizeSlot('ellipsis-text') || toString$1(_this7.ellipsisText) || h()])]);
        }; // Page button factory
  
  
        var makePageButton = function makePageButton(page, idx) {
          var active = isActivePage(page.number) && !noCurrentPage; // Active page will have tabindex of 0, or if no current page and first page button
  
          var tabIndex = disabled ? null : active || noCurrentPage && idx === 0 ? '0' : '-1';
          var attrs = {
            role: isNav ? null : 'menuitemradio',
            type: isNav || disabled ? null : 'button',
            'aria-disabled': disabled ? 'true' : null,
            'aria-controls': _this7.ariaControls || null,
            'aria-label': isFunction(_this7.labelPage) ? _this7.labelPage(page.number) : "".concat(_this7.labelPage, " ").concat(page.number),
            'aria-checked': isNav ? null : active ? 'true' : 'false',
            'aria-current': isNav && active ? 'page' : null,
            'aria-posinset': page.number,
            'aria-setsize': numberOfPages,
            // ARIA "roving tabindex" method (except in isNav mode)
            tabindex: isNav ? null : tabIndex
          };
          var btnContent = toString$1(_this7.makePage(page.number));
          var scope = {
            page: page.number,
            index: page.number - 1,
            content: btnContent,
            active: active,
            disabled: disabled
          };
          var $inner = h(disabled ? 'span' : isNav ? BLink : 'button', {
            props: disabled || !isNav ? {} : _this7.linkProps(page.number),
            staticClass: 'page-link',
            class: {
              'flex-grow-1': !isNav && !disabled && fill
            },
            attrs: attrs,
            on: disabled ? {} : {
              '!click': function click(evt) {
                _this7.onClick(page.number, evt);
              },
              keydown: onSpaceKey
            }
          }, [_this7.normalizeSlot('page', scope) || btnContent]);
          return h('li', {
            key: "page-".concat(page.number),
            staticClass: 'page-item',
            class: [{
              disabled: disabled,
              active: active,
              'flex-fill': fill,
              'd-flex': fill && !isNav && !disabled
            }, page.classes, _this7.pageClass],
            attrs: {
              role: isNav ? null : 'presentation'
            }
          }, [$inner]);
        }; // Goto first page button
        // Don't render button when `hideGotoEndButtons` or `firstNumber` is set
  
  
        var $firstPageBtn = h();
  
        if (!this.firstNumber && !this.hideGotoEndButtons) {
          $firstPageBtn = makeEndBtn(1, this.labelFirstPage, 'first-text', this.firstText, this.firstClass, 1, 'pagination-goto-first');
        }
  
        buttons.push($firstPageBtn); // Goto previous page button
  
        buttons.push(makeEndBtn(currentPage - 1, this.labelPrevPage, 'prev-text', this.prevText, this.prevClass, 1, 'pagination-goto-prev')); // Show first (1) button?
  
        buttons.push(this.firstNumber && pageNumbers[0] !== 1 ? makePageButton({
          number: 1
        }, 0) : h()); // First ellipsis
  
        buttons.push(showFirstDots ? makeEllipsis(false) : h()); // Individual page links
  
        this.pageList.forEach(function (page, idx) {
          var offset = showFirstDots && _this7.firstNumber && pageNumbers[0] !== 1 ? 1 : 0;
          buttons.push(makePageButton(page, idx + offset));
        }); // Last ellipsis
  
        buttons.push(showLastDots ? makeEllipsis(true) : h()); // Show last page button?
  
        buttons.push(this.lastNumber && pageNumbers[pageNumbers.length - 1] !== numberOfPages ? makePageButton({
          number: numberOfPages
        }, -1) : h()); // Goto next page button
  
        buttons.push(makeEndBtn(currentPage + 1, this.labelNextPage, 'next-text', this.nextText, this.nextClass, numberOfPages, 'pagination-goto-next')); // Goto last page button
        // Don't render button when `hideGotoEndButtons` or `lastNumber` is set
  
        var $lastPageBtn = h();
  
        if (!this.lastNumber && !this.hideGotoEndButtons) {
          $lastPageBtn = makeEndBtn(numberOfPages, this.labelLastPage, 'last-text', this.lastText, this.lastClass, numberOfPages, 'pagination-goto-last');
        }
  
        buttons.push($lastPageBtn); // Assemble the pagination buttons
  
        var $pagination = h('ul', {
          ref: 'ul',
          staticClass: 'pagination',
          class: ['b-pagination', this.btnSize, this.alignment, this.styleClass],
          attrs: {
            role: isNav ? null : 'menubar',
            'aria-disabled': disabled ? 'true' : 'false',
            'aria-label': isNav ? null : this.ariaLabel || null
          },
          // We disable keyboard left/right nav when `<b-pagination-nav>`
          on: isNav ? {} : {
            keydown: this.handleKeyNav
          }
        }, buttons); // If we are `<b-pagination-nav>`, wrap in `<nav>` wrapper
  
        if (isNav) {
          return h('nav', {
            attrs: {
              'aria-disabled': disabled ? 'true' : null,
              'aria-hidden': disabled ? 'true' : 'false',
              'aria-label': isNav ? this.ariaLabel || null : null
            }
          }, [$pagination]);
        }
  
        return $pagination;
      }
    };
  
    var NAME$u = 'BPagination';
    var DEFAULT_PER_PAGE = 20;
    var DEFAULT_TOTAL_ROWS = 0;
    var props$S = {
      size: {
        type: String,
        default: function _default() {
          return getComponentConfig(NAME$u, 'size');
        }
      },
      perPage: {
        type: [Number, String],
        default: DEFAULT_PER_PAGE
      },
      totalRows: {
        type: [Number, String],
        default: DEFAULT_TOTAL_ROWS
      },
      ariaControls: {
        type: String,
        default: null
      }
    }; // --- Helper functions ---
    // Sanitize the provided per page number (converting to a number)
  
    var sanitizePerPage = function sanitizePerPage(val) {
      var perPage = toInteger(val) || DEFAULT_PER_PAGE;
      return perPage < 1 ? 1 : perPage;
    }; // Sanitize the provided total rows number (converting to a number)
  
  
    var sanitizeTotalRows = function sanitizeTotalRows(val) {
      var totalRows = toInteger(val) || DEFAULT_TOTAL_ROWS;
      return totalRows < 0 ? 0 : totalRows;
    }; // The render function is brought in via the `paginationMixin`
    // @vue/component
  
  
    var BPagination = /*#__PURE__*/Vue.extend({
      name: NAME$u,
      mixins: [paginationMixin],
      props: props$S,
      computed: {
        numberOfPages: function numberOfPages() {
          var result = Math.ceil(sanitizeTotalRows(this.totalRows) / sanitizePerPage(this.perPage));
          return result < 1 ? 1 : result;
        },
        pageSizeNumberOfPages: function pageSizeNumberOfPages() {
          // Used for watching changes to `perPage` and `numberOfPages`
          return {
            perPage: sanitizePerPage(this.perPage),
            totalRows: sanitizeTotalRows(this.totalRows),
            numberOfPages: this.numberOfPages
          };
        }
      },
      watch: {
        pageSizeNumberOfPages: function pageSizeNumberOfPages(newVal, oldVal) {
          if (!isUndefinedOrNull(oldVal)) {
            if (newVal.perPage !== oldVal.perPage && newVal.totalRows === oldVal.totalRows) {
              // If the page size changes, reset to page 1
              this.currentPage = 1;
            } else if (newVal.numberOfPages !== oldVal.numberOfPages && this.currentPage > newVal.numberOfPages) {
              // If `numberOfPages` changes and is less than
              // the `currentPage` number, reset to page 1
              this.currentPage = 1;
            }
          }
  
          this.localNumberOfPages = newVal.numberOfPages;
        }
      },
      created: function created() {
        var _this = this;
  
        // Set the initial page count
        this.localNumberOfPages = this.numberOfPages; // Set the initial page value
  
        var currentPage = toInteger(this.value) || 0;
  
        if (currentPage > 0) {
          this.currentPage = currentPage;
        } else {
          this.$nextTick(function () {
            // If this value parses to NaN or a value less than 1
            // Trigger an initial emit of 'null' if no page specified
            _this.currentPage = 0;
          });
        }
      },
      mounted: function mounted() {
        // Set the initial page count
        this.localNumberOfPages = this.numberOfPages;
      },
      methods: {
        // These methods are used by the render function
        onClick: function onClick(num, evt) {
          var _this2 = this;
  
          // Handle edge cases where number of pages has changed (i.e. if perPage changes)
          // This should normally not happen, but just in case.
          if (num > this.numberOfPages) {
            /* istanbul ignore next */
            num = this.numberOfPages;
          } else if (num < 1) {
            /* istanbul ignore next */
            num = 1;
          } // Update the v-model
  
  
          this.currentPage = num; // Emit event triggered by user interaction
  
          this.$emit('change', this.currentPage);
          this.$nextTick(function () {
            // Keep the current button focused if possible
            var target = evt.target;
  
            if (isVisible(target) && _this2.$el.contains(target) && target.focus) {
              target.focus();
            } else {
              _this2.focusCurrent();
            }
          });
        },
        makePage: function makePage(pageNum) {
          return pageNum;
        },
        linkProps: function linkProps() {
          // No props, since we render a plain button
  
          /* istanbul ignore next */
          return {};
        }
      }
    });
  
    var PaginationPlugin = /*#__PURE__*/pluginFactory({
      components: {
        BPagination: BPagination
      }
    });
  
    var NAME$v = 'BPaginationNav'; // Sanitize the provided number of pages (converting to a number)
  
    var sanitizeNumberOfPages = function sanitizeNumberOfPages(value) {
      var numberOfPages = toInteger(value) || 1;
      return numberOfPages < 1 ? 1 : numberOfPages;
    };
    var props$T = {
      size: {
        type: String,
        default: function _default() {
          return getComponentConfig(NAME$v, 'size');
        }
      },
      numberOfPages: {
        type: [Number, String],
        default: 1,
        validator: function validator(value)
        /* istanbul ignore next */
        {
          var num = toInteger(value);
  
          if (isNaN(num) || num < 1) {
            warn('Prop "number-of-pages" must be a number greater than "0"', NAME$v);
            return false;
          }
  
          return true;
        }
      },
      baseUrl: {
        type: String,
        default: '/'
      },
      useRouter: {
        type: Boolean,
        default: false
      },
      linkGen: {
        type: Function,
        default: null
      },
      pageGen: {
        type: Function,
        default: null
      },
      pages: {
        // Optional array of page links
        type: Array,
        default: null
      },
      noPageDetect: {
        // Disable auto page number detection if true
        type: Boolean,
        default: false
      },
      // router-link specific props
      activeClass: {
        type: String // default: undefined
  
      },
      exact: {
        type: Boolean,
        default: false
      },
      exactActiveClass: {
        type: String // default: undefined
  
      },
      // nuxt-link specific prop(s)
      noPrefetch: {
        type: Boolean,
        default: false
      }
    }; // The render function is brought in via the pagination mixin
    // @vue/component
  
    var BPaginationNav = /*#__PURE__*/Vue.extend({
      name: NAME$v,
      mixins: [paginationMixin],
      props: props$T,
      computed: {
        // Used by render function to trigger wrapping in '<nav>' element
        isNav: function isNav() {
          return true;
        },
        computedValue: function computedValue() {
          // Returns the value prop as a number or `null` if undefined or < 1
          var val = toInteger(this.value);
          return isNaN(val) || val < 1 ? null : val;
        }
      },
      watch: {
        numberOfPages: function numberOfPages() {
          var _this = this;
  
          this.$nextTick(function () {
            _this.setNumberOfPages();
          });
        },
        pages: function pages() {
          var _this2 = this;
  
          this.$nextTick(function () {
            _this2.setNumberOfPages();
          });
        }
      },
      created: function created() {
        this.setNumberOfPages();
      },
      mounted: function mounted() {
        var _this3 = this;
  
        if (this.$router) {
          // We only add the watcher if vue router is detected
          this.$watch('$route', function () {
            _this3.$nextTick(function () {
              requestAF(function () {
                _this3.guessCurrentPage();
              });
            });
          });
        }
      },
      methods: {
        setNumberOfPages: function setNumberOfPages() {
          var _this4 = this;
  
          if (isArray(this.pages) && this.pages.length > 0) {
            this.localNumberOfPages = this.pages.length;
          } else {
            this.localNumberOfPages = sanitizeNumberOfPages(this.numberOfPages);
          }
  
          this.$nextTick(function () {
            _this4.guessCurrentPage();
          });
        },
        onClick: function onClick(pageNum, evt) {
          var _this5 = this;
  
          // Dont do anything if clicking the current active page
          if (pageNum === this.currentPage) {
            return;
          }
  
          requestAF(function () {
            // Update the v-model
            // Done in in requestAF() to allow browser to complete the
            // native browser click handling of a link
            _this5.currentPage = pageNum;
  
            _this5.$emit('change', pageNum);
          });
          this.$nextTick(function () {
            // Done in a nextTick() to ensure rendering complete
            try {
              // Emulate native link click page reloading behaviour by blurring the
              // paginator and returning focus to the document
              var target = evt.currentTarget || evt.target;
              target.blur();
            } catch (e) {}
          });
        },
        getPageInfo: function getPageInfo(pageNum) {
          if (!isArray(this.pages) || this.pages.length === 0 || isUndefined(this.pages[pageNum - 1])) {
            var link = "".concat(this.baseUrl).concat(pageNum);
            return {
              link: this.useRouter ? {
                path: link
              } : link,
              text: toString$1(pageNum)
            };
          }
  
          var info = this.pages[pageNum - 1];
  
          if (isObject(info)) {
            var