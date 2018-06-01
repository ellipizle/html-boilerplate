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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 136);
/******/ })
/************************************************************************/
/******/ ({

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(339);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(49)))

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["TemplateStack"] = factory();
	else
		root["TemplateStack"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 189);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(33);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(79),
    getValue = __webpack_require__(99);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(9),
    getRawTag = __webpack_require__(96),
    objectToString = __webpack_require__(124);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__(23);
var toSubscriber_1 = __webpack_require__(160);
var observable_1 = __webpack_require__(155);
/**
 * A representation of any set of values over any amount of time. This is the most basic building block
 * of RxJS.
 *
 * @class Observable<T>
 */
var Observable = (function () {
    /**
     * @constructor
     * @param {Function} subscribe the function that is called when the Observable is
     * initially subscribed to. This function is given a Subscriber, to which new values
     * can be `next`ed, or an `error` method can be called to raise an error, or
     * `complete` can be called to notify of a successful completion.
     */
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    /**
     * Creates a new Observable, with this Observable as the source, and the passed
     * operator defined as the new observable's operator.
     * @method lift
     * @param {Operator} operator the operator defining the operation to take on the observable
     * @return {Observable} a new observable with the Operator applied
     */
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    /**
     * Invokes an execution of an Observable and registers Observer handlers for notifications it will emit.
     *
     * <span class="informal">Use it when you have all these Observables, but still nothing is happening.</span>
     *
     * `subscribe` is not a regular operator, but a method that calls Observable's internal `subscribe` function. It
     * might be for example a function that you passed to a {@link create} static factory, but most of the time it is
     * a library implementation, which defines what and when will be emitted by an Observable. This means that calling
     * `subscribe` is actually the moment when Observable starts its work, not when it is created, as it is often
     * thought.
     *
     * Apart from starting the execution of an Observable, this method allows you to listen for values
     * that an Observable emits, as well as for when it completes or errors. You can achieve this in two
     * following ways.
     *
     * The first way is creating an object that implements {@link Observer} interface. It should have methods
     * defined by that interface, but note that it should be just a regular JavaScript object, which you can create
     * yourself in any way you want (ES6 class, classic function constructor, object literal etc.). In particular do
     * not attempt to use any RxJS implementation details to create Observers - you don't need them. Remember also
     * that your object does not have to implement all methods. If you find yourself creating a method that doesn't
     * do anything, you can simply omit it. Note however, that if `error` method is not provided, all errors will
     * be left uncaught.
     *
     * The second way is to give up on Observer object altogether and simply provide callback functions in place of its methods.
     * This means you can provide three functions as arguments to `subscribe`, where first function is equivalent
     * of a `next` method, second of an `error` method and third of a `complete` method. Just as in case of Observer,
     * if you do not need to listen for something, you can omit a function, preferably by passing `undefined` or `null`,
     * since `subscribe` recognizes these functions by where they were placed in function call. When it comes
     * to `error` function, just as before, if not provided, errors emitted by an Observable will be thrown.
     *
     * Whatever style of calling `subscribe` you use, in both cases it returns a Subscription object.
     * This object allows you to call `unsubscribe` on it, which in turn will stop work that an Observable does and will clean
     * up all resources that an Observable used. Note that cancelling a subscription will not call `complete` callback
     * provided to `subscribe` function, which is reserved for a regular completion signal that comes from an Observable.
     *
     * Remember that callbacks provided to `subscribe` are not guaranteed to be called asynchronously.
     * It is an Observable itself that decides when these functions will be called. For example {@link of}
     * by default emits all its values synchronously. Always check documentation for how given Observable
     * will behave when subscribed and if its default behavior can be modified with a {@link Scheduler}.
     *
     * @example <caption>Subscribe with an Observer</caption>
     * const sumObserver = {
     *   sum: 0,
     *   next(value) {
     *     console.log('Adding: ' + value);
     *     this.sum = this.sum + value;
     *   },
     *   error() { // We actually could just remove this method,
     *   },        // since we do not really care about errors right now.
     *   complete() {
     *     console.log('Sum equals: ' + this.sum);
     *   }
     * };
     *
     * Rx.Observable.of(1, 2, 3) // Synchronously emits 1, 2, 3 and then completes.
     * .subscribe(sumObserver);
     *
     * // Logs:
     * // "Adding: 1"
     * // "Adding: 2"
     * // "Adding: 3"
     * // "Sum equals: 6"
     *
     *
     * @example <caption>Subscribe with functions</caption>
     * let sum = 0;
     *
     * Rx.Observable.of(1, 2, 3)
     * .subscribe(
     *   function(value) {
     *     console.log('Adding: ' + value);
     *     sum = sum + value;
     *   },
     *   undefined,
     *   function() {
     *     console.log('Sum equals: ' + sum);
     *   }
     * );
     *
     * // Logs:
     * // "Adding: 1"
     * // "Adding: 2"
     * // "Adding: 3"
     * // "Sum equals: 6"
     *
     *
     * @example <caption>Cancel a subscription</caption>
     * const subscription = Rx.Observable.interval(1000).subscribe(
     *   num => console.log(num),
     *   undefined,
     *   () => console.log('completed!') // Will not be called, even
     * );                                // when cancelling subscription
     *
     *
     * setTimeout(() => {
     *   subscription.unsubscribe();
     *   console.log('unsubscribed!');
     * }, 2500);
     *
     * // Logs:
     * // 0 after 1s
     * // 1 after 2s
     * // "unsubscribed!" after 2.5s
     *
     *
     * @param {Observer|Function} observerOrNext (optional) Either an observer with methods to be called,
     *  or the first of three possible handlers, which is the handler for each value emitted from the subscribed
     *  Observable.
     * @param {Function} error (optional) A handler for a terminal event resulting from an error. If no error handler is provided,
     *  the error will be thrown as unhandled.
     * @param {Function} complete (optional) A handler for a terminal event resulting from successful completion.
     * @return {ISubscription} a subscription reference to the registered handlers
     * @method subscribe
     */
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
        if (operator) {
            operator.call(sink, this.source);
        }
        else {
            sink.add(this.source ? this._subscribe(sink) : this._trySubscribe(sink));
        }
        if (sink.syncErrorThrowable) {
            sink.syncErrorThrowable = false;
            if (sink.syncErrorThrown) {
                throw sink.syncErrorValue;
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            sink.syncErrorThrown = true;
            sink.syncErrorValue = err;
            sink.error(err);
        }
    };
    /**
     * @method forEach
     * @param {Function} next a handler for each value emitted by the observable
     * @param {PromiseConstructor} [PromiseCtor] a constructor function used to instantiate the Promise
     * @return {Promise} a promise that either resolves on observable completion or
     *  rejects with the handled error
     */
    Observable.prototype.forEach = function (next, PromiseCtor) {
        var _this = this;
        if (!PromiseCtor) {
            if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
                PromiseCtor = root_1.root.Rx.config.Promise;
            }
            else if (root_1.root.Promise) {
                PromiseCtor = root_1.root.Promise;
            }
        }
        if (!PromiseCtor) {
            throw new Error('no Promise impl found');
        }
        return new PromiseCtor(function (resolve, reject) {
            // Must be declared in a separate statement to avoid a RefernceError when
            // accessing subscription below in the closure due to Temporal Dead Zone.
            var subscription;
            subscription = _this.subscribe(function (value) {
                if (subscription) {
                    // if there is a subscription, then we can surmise
                    // the next handling is asynchronous. Any errors thrown
                    // need to be rejected explicitly and unsubscribe must be
                    // called manually
                    try {
                        next(value);
                    }
                    catch (err) {
                        reject(err);
                        subscription.unsubscribe();
                    }
                }
                else {
                    // if there is NO subscription, then we're getting a nexted
                    // value synchronously during subscription. We can just call it.
                    // If it errors, Observable's `subscribe` will ensure the
                    // unsubscription logic is called, then synchronously rethrow the error.
                    // After that, Promise will trap the error and send it
                    // down the rejection path.
                    next(value);
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        return this.source.subscribe(subscriber);
    };
    /**
     * An interop point defined by the es7-observable spec https://github.com/zenparsing/es-observable
     * @method Symbol.observable
     * @return {Observable} this instance of the observable
     */
    Observable.prototype[observable_1.observable] = function () {
        return this;
    };
    // HACK: Since TypeScript inherits static properties too, we have to
    // fight against TypeScript here so Subject can have a different static create signature
    /**
     * Creates a new cold Observable by calling the Observable constructor
     * @static true
     * @owner Observable
     * @method create
     * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
     * @return {Observable} a new cold observable
     */
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
exports.Observable = Observable;
//# sourceMappingURL=Observable.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(109),
    listCacheDelete = __webpack_require__(110),
    listCacheGet = __webpack_require__(111),
    listCacheHas = __webpack_require__(112),
    listCacheSet = __webpack_require__(113);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(0);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(13);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(107);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(1);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isArray_1 = __webpack_require__(158);
var isObject_1 = __webpack_require__(159);
var isFunction_1 = __webpack_require__(46);
var tryCatch_1 = __webpack_require__(161);
var errorObject_1 = __webpack_require__(45);
var UnsubscriptionError_1 = __webpack_require__(157);
/**
 * Represents a disposable resource, such as the execution of an Observable. A
 * Subscription has one important method, `unsubscribe`, that takes no argument
 * and just disposes the resource held by the subscription.
 *
 * Additionally, subscriptions may be grouped together through the `add()`
 * method, which will attach a child Subscription to the current Subscription.
 * When a Subscription is unsubscribed, all its children (and its grandchildren)
 * will be unsubscribed as well.
 *
 * @class Subscription
 */
var Subscription = (function () {
    /**
     * @param {function(): void} [unsubscribe] A function describing how to
     * perform the disposal of resources when the `unsubscribe` method is called.
     */
    function Subscription(unsubscribe) {
        /**
         * A flag to indicate whether this Subscription has already been unsubscribed.
         * @type {boolean}
         */
        this.closed = false;
        this._parent = null;
        this._parents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._unsubscribe = unsubscribe;
        }
    }
    /**
     * Disposes the resources held by the subscription. May, for instance, cancel
     * an ongoing Observable execution or cancel any other type of work that
     * started when the Subscription was created.
     * @return {void}
     */
    Subscription.prototype.unsubscribe = function () {
        var hasErrors = false;
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parent = _a._parent, _parents = _a._parents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parent = null;
        this._parents = null;
        // null out _subscriptions first so any child subscriptions that attempt
        // to remove themselves from this subscription will noop
        this._subscriptions = null;
        var index = -1;
        var len = _parents ? _parents.length : 0;
        // if this._parent is null, then so is this._parents, and we
        // don't have to remove ourselves from any parent subscriptions.
        while (_parent) {
            _parent.remove(this);
            // if this._parents is null or index >= len,
            // then _parent is set to null, and the loop exits
            _parent = ++index < len && _parents[index] || null;
        }
        if (isFunction_1.isFunction(_unsubscribe)) {
            var trial = tryCatch_1.tryCatch(_unsubscribe).call(this);
            if (trial === errorObject_1.errorObject) {
                hasErrors = true;
                errors = errors || (errorObject_1.errorObject.e instanceof UnsubscriptionError_1.UnsubscriptionError ?
                    flattenUnsubscriptionErrors(errorObject_1.errorObject.e.errors) : [errorObject_1.errorObject.e]);
            }
        }
        if (isArray_1.isArray(_subscriptions)) {
            index = -1;
            len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject_1.isObject(sub)) {
                    var trial = tryCatch_1.tryCatch(sub.unsubscribe).call(sub);
                    if (trial === errorObject_1.errorObject) {
                        hasErrors = true;
                        errors = errors || [];
                        var err = errorObject_1.errorObject.e;
                        if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(err.errors));
                        }
                        else {
                            errors.push(err);
                        }
                    }
                }
            }
        }
        if (hasErrors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
    };
    /**
     * Adds a tear down to be called during the unsubscribe() of this
     * Subscription.
     *
     * If the tear down being added is a subscription that is already
     * unsubscribed, is the same reference `add` is being called on, or is
     * `Subscription.EMPTY`, it will not be added.
     *
     * If this subscription is already in an `closed` state, the passed
     * tear down logic will be executed immediately.
     *
     * @param {TeardownLogic} teardown The additional logic to execute on
     * teardown.
     * @return {Subscription} Returns the Subscription used or created to be
     * added to the inner subscriptions list. This Subscription can be used with
     * `remove()` to remove the passed teardown logic from the inner subscriptions
     * list.
     */
    Subscription.prototype.add = function (teardown) {
        if (!teardown || (teardown === Subscription.EMPTY)) {
            return Subscription.EMPTY;
        }
        if (teardown === this) {
            return this;
        }
        var subscription = teardown;
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (typeof subscription._addParent !== 'function' /* quack quack */) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default:
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
        }
        var subscriptions = this._subscriptions || (this._subscriptions = []);
        subscriptions.push(subscription);
        subscription._addParent(this);
        return subscription;
    };
    /**
     * Removes a Subscription from the internal list of subscriptions that will
     * unsubscribe during the unsubscribe process of this Subscription.
     * @param {Subscription} subscription The subscription to remove.
     * @return {void}
     */
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.prototype._addParent = function (parent) {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        if (!_parent || _parent === parent) {
            // If we don't have a parent, or the new parent is the same as the
            // current parent, then set this._parent to the new parent.
            this._parent = parent;
        }
        else if (!_parents) {
            // If there's already one parent, but not multiple, allocate an Array to
            // store the rest of the parent Subscriptions.
            this._parents = [parent];
        }
        else if (_parents.indexOf(parent) === -1) {
            // Only add the new parent to the _parents list if it's not already there.
            _parents.push(parent);
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());
exports.Subscription = Subscription;
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError_1.UnsubscriptionError) ? err.errors : err); }, []);
}
//# sourceMappingURL=Subscription.js.map

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(function(win) {

/**
 * FastDom
 *
 * Eliminates layout thrashing
 * by batching DOM read/write
 * interactions.
 *
 * @author Wilson Page <wilsonpage@me.com>
 * @author Kornel Lesinski <kornel.lesinski@ft.com>
 */

'use strict';

/**
 * Mini logger
 *
 * @return {Function}
 */
var debug = 0 ? console.log.bind(console, '[fastdom]') : function() {};

/**
 * Normalized rAF
 *
 * @type {Function}
 */
var raf = win.requestAnimationFrame
  || win.webkitRequestAnimationFrame
  || win.mozRequestAnimationFrame
  || win.msRequestAnimationFrame
  || function(cb) { return setTimeout(cb, 16); };

/**
 * Initialize a `FastDom`.
 *
 * @constructor
 */
function FastDom() {
  var self = this;
  self.reads = [];
  self.writes = [];
  self.raf = raf.bind(win); // test hook
  debug('initialized', self);
}

FastDom.prototype = {
  constructor: FastDom,

  /**
   * Adds a job to the read batch and
   * schedules a new frame if need be.
   *
   * @param  {Function} fn
   * @public
   */
  measure: function(fn, ctx) {
    debug('measure');
    var task = !ctx ? fn : fn.bind(ctx);
    this.reads.push(task);
    scheduleFlush(this);
    return task;
  },

  /**
   * Adds a job to the
   * write batch and schedules
   * a new frame if need be.
   *
   * @param  {Function} fn
   * @public
   */
  mutate: function(fn, ctx) {
    debug('mutate');
    var task = !ctx ? fn : fn.bind(ctx);
    this.writes.push(task);
    scheduleFlush(this);
    return task;
  },

  /**
   * Clears a scheduled 'read' or 'write' task.
   *
   * @param {Object} task
   * @return {Boolean} success
   * @public
   */
  clear: function(task) {
    debug('clear', task);
    return remove(this.reads, task) || remove(this.writes, task);
  },

  /**
   * Extend this FastDom with some
   * custom functionality.
   *
   * Because fastdom must *always* be a
   * singleton, we're actually extending
   * the fastdom instance. This means tasks
   * scheduled by an extension still enter
   * fastdom's global task queue.
   *
   * The 'super' instance can be accessed
   * from `this.fastdom`.
   *
   * @example
   *
   * var myFastdom = fastdom.extend({
   *   initialize: function() {
   *     // runs on creation
   *   },
   *
   *   // override a method
   *   measure: function(fn) {
   *     // do extra stuff ...
   *
   *     // then call the original
   *     return this.fastdom.measure(fn);
   *   },
   *
   *   ...
   * });
   *
   * @param  {Object} props  properties to mixin
   * @return {FastDom}
   */
  extend: function(props) {
    debug('extend', props);
    if (typeof props != 'object') throw new Error('expected object');

    var child = Object.create(this);
    mixin(child, props);
    child.fastdom = this;

    // run optional creation hook
    if (child.initialize) child.initialize();

    return child;
  },

  // override this with a function
  // to prevent Errors in console
  // when tasks throw
  catch: null
};

/**
 * Schedules a new read/write
 * batch if one isn't pending.
 *
 * @private
 */
function scheduleFlush(fastdom) {
  if (!fastdom.scheduled) {
    fastdom.scheduled = true;
    fastdom.raf(flush.bind(null, fastdom));
    debug('flush scheduled');
  }
}

/**
 * Runs queued `read` and `write` tasks.
 *
 * Errors are caught and thrown by default.
 * If a `.catch` function has been defined
 * it is called instead.
 *
 * @private
 */
function flush(fastdom) {
  debug('flush');

  var writes = fastdom.writes;
  var reads = fastdom.reads;
  var error;

  try {
    debug('flushing reads', reads.length);
    runTasks(reads);
    debug('flushing writes', writes.length);
    runTasks(writes);
  } catch (e) { error = e; }

  fastdom.scheduled = false;

  // If the batch errored we may still have tasks queued
  if (reads.length || writes.length) scheduleFlush(fastdom);

  if (error) {
    debug('task errored', error.message);
    if (fastdom.catch) fastdom.catch(error);
    else throw error;
  }
}

/**
 * We run this inside a try catch
 * so that if any jobs error, we
 * are able to recover and continue
 * to flush the batch until it's empty.
 *
 * @private
 */
function runTasks(tasks) {
  debug('run tasks');
  var task; while (task = tasks.shift()) task();
}

/**
 * Remove an item from an Array.
 *
 * @param  {Array} array
 * @param  {*} item
 * @return {Boolean}
 */
function remove(array, item) {
  var index = array.indexOf(item);
  return !!~index && !!array.splice(index, 1);
}

/**
 * Mixin own properties of source
 * object into the target.
 *
 * @param  {Object} target
 * @param  {Object} source
 */
function mixin(target, source) {
  for (var key in source) {
    if (source.hasOwnProperty(key)) target[key] = source[key];
  }
}

// There should never be more than
// one instance of `FastDom` in an app
var exports = win.fastdom = (win.fastdom || new FastDom()); // jshint ignore:line

// Expose to CJS & AMD
if (true) !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return exports; }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
else if ((typeof module) == 'object') module.exports = exports;

})( typeof window !== 'undefined' ? window : this);


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(1),
    root = __webpack_require__(0);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(114),
    mapCacheDelete = __webpack_require__(115),
    mapCacheGet = __webpack_require__(116),
    mapCacheHas = __webpack_require__(117),
    mapCacheSet = __webpack_require__(118);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(40),
    isLength = __webpack_require__(41);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(3),
    isObjectLike = __webpack_require__(5);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var isFunction_1 = __webpack_require__(46);
var Subscription_1 = __webpack_require__(14);
var Observer_1 = __webpack_require__(43);
var rxSubscriber_1 = __webpack_require__(22);
/**
 * Implements the {@link Observer} interface and extends the
 * {@link Subscription} class. While the {@link Observer} is the public API for
 * consuming the values of an {@link Observable}, all Observers get converted to
 * a Subscriber, in order to provide Subscription-like capabilities such as
 * `unsubscribe`. Subscriber is a common type in RxJS, and crucial for
 * implementing operators, but it is rarely used as a public API.
 *
 * @class Subscriber<T>
 */
var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    /**
     * @param {Observer|function(value: T): void} [destinationOrNext] A partially
     * defined Observer or a `next` callback function.
     * @param {function(e: ?any): void} [error] The `error` callback of an
     * Observer.
     * @param {function(): void} [complete] The `complete` callback of an
     * Observer.
     */
    function Subscriber(destinationOrNext, error, complete) {
        _super.call(this);
        this.syncErrorValue = null;
        this.syncErrorThrown = false;
        this.syncErrorThrowable = false;
        this.isStopped = false;
        switch (arguments.length) {
            case 0:
                this.destination = Observer_1.empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    this.destination = Observer_1.empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        this.destination = destinationOrNext;
                        this.destination.add(this);
                    }
                    else {
                        this.syncErrorThrowable = true;
                        this.destination = new SafeSubscriber(this, destinationOrNext);
                    }
                    break;
                }
            default:
                this.syncErrorThrowable = true;
                this.destination = new SafeSubscriber(this, destinationOrNext, error, complete);
                break;
        }
    }
    Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () { return this; };
    /**
     * A static factory for a Subscriber, given a (potentially partial) definition
     * of an Observer.
     * @param {function(x: ?T): void} [next] The `next` callback of an Observer.
     * @param {function(e: ?any): void} [error] The `error` callback of an
     * Observer.
     * @param {function(): void} [complete] The `complete` callback of an
     * Observer.
     * @return {Subscriber<T>} A Subscriber wrapping the (partially defined)
     * Observer represented by the given arguments.
     */
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    /**
     * The {@link Observer} callback to receive notifications of type `next` from
     * the Observable, with a value. The Observable may call this method 0 or more
     * times.
     * @param {T} [value] The `next` value.
     * @return {void}
     */
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    /**
     * The {@link Observer} callback to receive notifications of type `error` from
     * the Observable, with an attached {@link Error}. Notifies the Observer that
     * the Observable has experienced an error condition.
     * @param {any} [err] The `error` exception.
     * @return {void}
     */
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    /**
     * The {@link Observer} callback to receive a valueless notification of type
     * `complete` from the Observable. Notifies the Observer that the Observable
     * has finished sending push-based notifications.
     * @return {void}
     */
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        this._parent = null;
        this._parents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parent = _parent;
        this._parents = _parents;
        return this;
    };
    return Subscriber;
}(Subscription_1.Subscription));
exports.Subscriber = Subscriber;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        _super.call(this);
        this._parentSubscriber = _parentSubscriber;
        var next;
        var context = this;
        if (isFunction_1.isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== Observer_1.empty) {
                context = Object.create(observerOrNext);
                if (isFunction_1.isFunction(context.unsubscribe)) {
                    this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = this.unsubscribe.bind(this);
            }
        }
        this._context = context;
        this._next = next;
        this._error = error;
        this._complete = complete;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._error) {
                if (!_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                throw err;
            }
            else {
                _parentSubscriber.syncErrorValue = err;
                _parentSubscriber.syncErrorThrown = true;
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            throw err;
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            parent.syncErrorValue = err;
            parent.syncErrorThrown = true;
            return true;
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));
//# sourceMappingURL=Subscriber.js.map

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__(23);
var Symbol = root_1.root.Symbol;
exports.rxSubscriber = (typeof Symbol === 'function' && typeof Symbol.for === 'function') ?
    Symbol.for('rxSubscriber') : '@@rxSubscriber';
/**
 * @deprecated use rxSubscriber instead
 */
exports.$$rxSubscriber = exports.rxSubscriber;
//# sourceMappingURL=rxSubscriber.js.map

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
// CommonJS / Node have global context exposed as "global" variable.
// We don't want to include the whole node.d.ts this this compilation unit so we'll just fake
// the global "global" var for now.
var __window = typeof window !== 'undefined' && window;
var __self = typeof self !== 'undefined' && typeof WorkerGlobalScope !== 'undefined' &&
    self instanceof WorkerGlobalScope && self;
var __global = typeof global !== 'undefined' && global;
var _root = __window || __global || __self;
exports.root = _root;
// Workaround Closure Compiler restriction: The body of a goog.module cannot use throw.
// This is needed when used with angular/tsickle which inserts a goog.module statement.
// Wrap in IIFE
(function () {
    if (!_root) {
        throw new Error('RxJS could not find any global context (window, self, global)');
    }
})();
//# sourceMappingURL=root.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dispatchEvent;

var _SEvent = __webpack_require__(47);

var _SEvent2 = _interopRequireDefault(_SEvent);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * Helper to quickly display an event with some optional data attached to it
 *
 * @name 		dispatchEvent
 * @param 		{HTMLElement} 					target  		The element to dispatch the event from
 * @param 		{String} 						name 			The event name to dispatch
 * @param 		{Mixed} 						data 			The data to attache to the event
 *
 * @example  	js
 * import dispatchEvent from 'sugarcss/js/dom/dispatchEvent'
 * dispatchEvent(myCoolHTMLElement, 'myCoolEventName', {
 * 		var1 : 'value1'
 * });
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */
function dispatchEvent(target, name) {
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  // create new event
  var e = new _SEvent2.default(name, {
    detail: data,
    bubbles: true,
    cancelable: true
  });
  target.dispatchEvent(e);
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = matches;
/**
 * Polyfill for the Element.matches function
 *
 * @name 		matches
 * @param 		{HTMLElement} 			elm  			The element to check
 * @param 		{String} 				selector 		The selector to check on the element
 * @return 		{Boolean} 								If the element match the selector or not
 *
 * @example  	js
 * import matches from 'sugarcss/js/dom/matches'
 * if (matches(myCoolHTMLElement, '.my-cool-css-selector')) {
 * 		// the element match the selector
 * }
 *
 * @see 		https://developer.mozilla.org/en/docs/Web/API/Element/matches
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */
function matches(el, selector) {
  if (el.nodeName == '#comment' || el.nodeName == '#text') {
    return false;
  }
  var p = Element.prototype;
  var f = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || function (s) {
    return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
  };
  return f.call(el, selector);
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = uncamelize;
/**
 * Uncamelize a string
 */
function uncamelize(text) {
	var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '-';

	// Replace all capital letters by separator followed by lowercase one
	var res = '';
	res = text.replace(/[A-Z]/g, function (letter) {
		return separator + letter.toLowerCase();
	});

	// Remove first separator (to avoid _hello_world name)
	return res.replace("/^" + separator + "/", '').trim();
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(86),
    isArguments = __webpack_require__(141),
    isArray = __webpack_require__(2),
    isBuffer = __webpack_require__(39),
    isIndex = __webpack_require__(18),
    isTypedArray = __webpack_require__(42);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(29),
    eq = __webpack_require__(13);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(31);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(2),
    isKey = __webpack_require__(106),
    stringToPath = __webpack_require__(137),
    toString = __webpack_require__(149);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(1);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(65),
    arraySome = __webpack_require__(73),
    cacheHas = __webpack_require__(89);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 34 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(20);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 36 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(74);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),
/* 38 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(0),
    stubFalse = __webpack_require__(148);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(55)(module)))

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(3),
    isObject = __webpack_require__(4);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 41 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(80),
    baseUnary = __webpack_require__(88),
    nodeUtil = __webpack_require__(123);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.empty = {
    closed: true,
    next: function (value) { },
    error: function (err) { throw err; },
    complete: function () { }
};
//# sourceMappingURL=Observer.js.map

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(6);
var Subscriber_1 = __webpack_require__(21);
var Subscription_1 = __webpack_require__(14);
var ObjectUnsubscribedError_1 = __webpack_require__(156);
var SubjectSubscription_1 = __webpack_require__(150);
var rxSubscriber_1 = __webpack_require__(22);
/**
 * @class SubjectSubscriber<T>
 */
var SubjectSubscriber = (function (_super) {
    __extends(SubjectSubscriber, _super);
    function SubjectSubscriber(destination) {
        _super.call(this, destination);
        this.destination = destination;
    }
    return SubjectSubscriber;
}(Subscriber_1.Subscriber));
exports.SubjectSubscriber = SubjectSubscriber;
/**
 * @class Subject<T>
 */
var Subject = (function (_super) {
    __extends(Subject, _super);
    function Subject() {
        _super.call(this);
        this.observers = [];
        this.closed = false;
        this.isStopped = false;
        this.hasError = false;
        this.thrownError = null;
    }
    Subject.prototype[rxSubscriber_1.rxSubscriber] = function () {
        return new SubjectSubscriber(this);
    };
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype.next = function (value) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        if (!this.isStopped) {
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].next(value);
            }
        }
    };
    Subject.prototype.error = function (err) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        this.hasError = true;
        this.thrownError = err;
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].error(err);
        }
        this.observers.length = 0;
    };
    Subject.prototype.complete = function () {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].complete();
        }
        this.observers.length = 0;
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = true;
        this.closed = true;
        this.observers = null;
    };
    Subject.prototype._trySubscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        else {
            return _super.prototype._trySubscribe.call(this, subscriber);
        }
    };
    Subject.prototype._subscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        else if (this.hasError) {
            subscriber.error(this.thrownError);
            return Subscription_1.Subscription.EMPTY;
        }
        else if (this.isStopped) {
            subscriber.complete();
            return Subscription_1.Subscription.EMPTY;
        }
        else {
            this.observers.push(subscriber);
            return new SubjectSubscription_1.SubjectSubscription(this, subscriber);
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new Observable_1.Observable();
        observable.source = this;
        return observable;
    };
    Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(Observable_1.Observable));
exports.Subject = Subject;
/**
 * @class AnonymousSubject<T>
 */
var AnonymousSubject = (function (_super) {
    __extends(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        _super.call(this);
        this.destination = destination;
        this.source = source;
    }
    AnonymousSubject.prototype.next = function (value) {
        var destination = this.destination;
        if (destination && destination.next) {
            destination.next(value);
        }
    };
    AnonymousSubject.prototype.error = function (err) {
        var destination = this.destination;
        if (destination && destination.error) {
            this.destination.error(err);
        }
    };
    AnonymousSubject.prototype.complete = function () {
        var destination = this.destination;
        if (destination && destination.complete) {
            this.destination.complete();
        }
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var source = this.source;
        if (source) {
            return this.source.subscribe(subscriber);
        }
        else {
            return Subscription_1.Subscription.EMPTY;
        }
    };
    return AnonymousSubject;
}(Subject));
exports.AnonymousSubject = AnonymousSubject;
//# sourceMappingURL=Subject.js.map

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// typeof any so that it we don't have to cast when comparing a result to the error object
exports.errorObject = { e: {} };
//# sourceMappingURL=errorObject.js.map

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isFunction(x) {
    return typeof x === 'function';
}
exports.isFunction = isFunction;
//# sourceMappingURL=isFunction.js.map

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _customEvent = __webpack_require__(59);

var _customEvent2 = _interopRequireDefault(_customEvent);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = _customEvent2.default;

/**
 * @constructor
 * @param  		{String} 	name 		The event name
 * @param 		{Object} 	settings 	The event settings
 */

/**
 * Set if the event is cancelable or not
 * @setting
 * @name 		cancelable
 * @type 		{Boolean}
 * @default 	true
 */

/**
 * Set if the event will bubble or not
 * @setting
 * @name 		bubbles
 * @type 		{Boolean}
 * @default 	true
 */

/**
 * Pass an object that will be sent with the event
 * @setting
 * @name 		detail
 * @type 		{Object}
 * @default 	null
 */
/**
 * @name 		SEvent
 * Proxy class to create custom events that can be dispatched
 * through the standard dispatch method on any HTMLElement
 *
 * @example 	js
 * let myEvent = new SEvent('myCoolEvent', {
 * 		cancelable : true,
 * 		bubbles : false,
 * 		detail : {
 * 			// some datas to send with the event
 * 		}
 * });
 * // dispatch the event from an HTMLElement
 * myHTMLElement.dispatch(myEvent);
 *
 * @see 		https://www.npmjs.com/package/customevent
 * @author 		Olivier Bossel<olivier.bossel@gmail.com>
 */

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isVisible;
/**
 * Check if the passed HTMLElement is visible or not.
 * Visible mean that it has not an opacity of 0, not a visibility of hidden and not a display of none
 *
 * @name 		isVisible
 * @param 		{HTMLElement} 				elm  		The element to check
 * @return 		{Boolean								If the element is visible or not
 *
 * @example  	js
 * import isVisible from 'sugarcss/js/dom/isVisible'
 * if (isVisible(myCoolHTMLElement) {
 * 		// i'm visible
 * }
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */
function isVisible(elm) {

  // assume that the script tag is always visible
  if (elm.nodeName.toLowerCase() === 'script') return true;

  // if no offset parent
  // mean that the element is not visible
  // if (elm.offsetParent === null) return false;

  // get style
  var style = window.getComputedStyle(elm, null),
      opacity = style['opacity'],
      visibility = style['visibility'],
      display = style['display'];
  return '0' !== opacity && 'none' !== display && 'hidden' !== visibility;
}
window.__isVisible = isVisible;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = offset;
// import __getTranslateProperties from './getTranslateProperties'

/**
 * Get the offset top and left of the passed element from the document top left point
 *
 * @name 		offset
 * @param 		{HTMLElement} 					elm  		The element to get the offset from
 * @return 		{Object} 									The offset top and left object
 *
 * @example  	js
 * import offset from 'sugarcss/js/dom/offset'
 * const offsetElm = offset(myCoolElement);
 * // output : { top : 200, left : 300 }
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */
function offset(elm) {
	var body = void 0,
	    box = void 0,
	    clientLeft = void 0,
	    clientTop = void 0,
	    docEl = void 0,
	    left = void 0,
	    scrollLeft = void 0,
	    scrollTop = void 0,
	    top = void 0,
	    translates = void 0,
	    transX = void 0,
	    transY = void 0;
	box = elm.getBoundingClientRect();
	body = document.body;
	docEl = document.documentElement;
	scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
	scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
	clientTop = docEl.clientTop || body.clientTop || 0;
	clientLeft = docEl.clientLeft || body.clientLeft || 0;
	// translates = __getTranslateProperties(elm);
	// transX = translates.x;
	// transY = translates.y;
	top = box.top + scrollTop - clientTop;
	left = box.left + scrollLeft - clientLeft;
	return {
		top: Math.round(top),
		left: Math.round(left)
	};
}

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = whenVisible;

var _isVisible = __webpack_require__(48);

var _isVisible2 = _interopRequireDefault(_isVisible);

var _closestNotVisible = __webpack_require__(167);

var _closestNotVisible2 = _interopRequireDefault(_closestNotVisible);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * Monitor an HTMLElement to be notified when it is visible
 *
 * @name 		whenVisible
 * @param 		{HTMLElement} 				elm 		The element to monitor
 * @param 		{Function} 					[cb=null] 	An optional callback to call when the element is visible
 * @return 		(Promise) 								The promise that will be resolved when the element is visible
 *
 * @example 	js
 * import whenVisible from 'sugarcss/js/dom/whenVisible'
 * whenVisible(myCoolHTMLElement).then((elm) => {
 * 		// do something with your element that is now visible
 * });
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */
function whenVisible(elm) {
	var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	return new Promise(function (resolve, reject) {

		// variables
		var isSelfVisible = false,
		    areParentsVisible = false,
		    closestNotVisible = null,
		    selfObserver = null,
		    parentObserver = null;

		var _cb = function _cb() {
			if (isSelfVisible && areParentsVisible) {
				// process callbacks
				if (cb) cb(elm);
				resolve(elm);
				// remove the event listeners
				elm.removeEventListener('transitionend', _eventCb);
				elm.removeEventListener('animationstart', _eventCb);
				elm.removeEventListener('animationend', _eventCb);
				// remove the event listeners
				if (closestNotVisible) {
					closestNotVisible.removeEventListener('transitionend', _eventCb);
					closestNotVisible.removeEventListener('animationstart', _eventCb);
					closestNotVisible.removeEventListener('animationend', _eventCb);
				}
			}
		};

		// function called on each transitionend, start, etc...
		var _eventCb = function _eventCb(e) {
			// wait just a little time to check again
			setTimeout(function () {
				if (e.target === elm) {
					if ((0, _isVisible2.default)(elm)) {
						isSelfVisible = true;
						if (selfObserver && selfObserver.disconnect) {
							selfObserver.disconnect();
						}
						// remove the event listeners
						elm.removeEventListener('transitionend', _eventCb);
						elm.removeEventListener('animationstart', _eventCb);
						elm.removeEventListener('animationend', _eventCb);
					}
				} else if (e.target === closestNotVisible) {
					if ((0, _isVisible2.default)(closestNotVisible)) {
						areParentsVisible = true;
						if (parentObserver && parentObserver.disconnect) {
							parentObserver.disconnect();
						}
						// remove the event listeners
						closestNotVisible.removeEventListener('transitionend', _eventCb);
						closestNotVisible.removeEventListener('animationstart', _eventCb);
						closestNotVisible.removeEventListener('animationend', _eventCb);
					}
				}
				// callback
				_cb();
			});
		};

		// check if element itself is not visible
		if (!(0, _isVisible2.default)(elm)) {
			selfObserver = new MutationObserver(function (mutations) {
				mutations.forEach(function (mutation) {
					// check that is the style whos changed
					if (mutation.attributeName === 'style' || mutation.attributeName === 'class') {
						// check if is visible
						if ((0, _isVisible2.default)(mutation.target)) {
							// update
							isSelfVisible = true;
							// callback
							_cb();
							// stop observe
							selfObserver.disconnect();
						}
					}
				});
			});
			selfObserver.observe(elm, { attributes: true });

			// listen for animationstart to check if the element is visible
			elm.addEventListener('animationstart', _eventCb);
			elm.addEventListener('animationend', _eventCb);
			elm.addEventListener('transitionend', _eventCb);
		} else {
			isSelfVisible = true;
		}

		// get the closest not visible element
		// if found, we monitor it to check when it is visible
		closestNotVisible = (0, _closestNotVisible2.default)(elm);
		if (closestNotVisible) {
			parentObserver = new MutationObserver(function (mutations) {
				mutations.forEach(function (mutation) {
					// check that is the style whos changed
					if (mutation.attributeName === 'style' || mutation.attributeName === 'class') {
						// check if is visible
						if ((0, _isVisible2.default)(mutation.target)) {
							// update
							areParentsVisible = true;
							// callback
							_cb();
							// stop observe
							parentObserver.disconnect();
						}
					}
				});
			});
			parentObserver.observe(closestNotVisible, { attributes: true });

			// listen for animationstart to check if the element is visible
			closestNotVisible.addEventListener('animationstart', _eventCb);
			closestNotVisible.addEventListener('animationend', _eventCb);
			closestNotVisible.addEventListener('transitionend', _eventCb);
		} else {
			areParentsVisible = true;
		}

		// callback
		_cb();
	});
}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = autoCast;
/**
 * Auto cast the string into the correct variable type
 */
function autoCast(string) {
	// printed object
	if (string === '[object Object]') return null;
	// boolean values
	if (string === 'false' || string === 'true' || string === 'undefined' || string === 'null' || !isNaN(string)) {
		return eval(string);
	}
	// array
	if (typeof string === 'string' && string.substr(0, 1) === '[') {
		var val = eval(string);
		if (val instanceof Array) return val;
	}
	// parse json
	if (typeof string === 'string' && string.substr(0, 1) === '{') {
		return eval('(' + string + ')');
	}
	// return the string if nothing can be casted
	return string;
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = camelize;
/**
 * Camelize a string
 */
function camelize(text) {
	var res = '';
	res = text.replace(/(?:^|[-_])(\w)/g, function (_, c) {
		return c ? c.toUpperCase() : '';
	});
	res = res.substr(0, 1).toLowerCase() + res.slice(1);
	return res.trim();
}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mixwith = mod.exports;
  }
})(undefined, function (exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _appliedMixin = '__mixwith_appliedMixin';

  var apply = exports.apply = function (superclass, mixin) {
    var application = mixin(superclass);
    application.prototype[_appliedMixin] = unwrap(mixin);
    return application;
  };

  var isApplicationOf = exports.isApplicationOf = function (proto, mixin) {
    return proto.hasOwnProperty(_appliedMixin) && proto[_appliedMixin] === unwrap(mixin);
  };

  var hasMixin = exports.hasMixin = function (o, mixin) {
    while (o != null) {
      if (isApplicationOf(o, mixin)) return true;
      o = Object.getPrototypeOf(o);
    }
    return false;
  };

  var _wrappedMixin = '__mixwith_wrappedMixin';

  var wrap = exports.wrap = function (mixin, wrapper) {
    Object.setPrototypeOf(wrapper, mixin);
    if (!mixin[_wrappedMixin]) {
      mixin[_wrappedMixin] = mixin;
    }
    return wrapper;
  };

  var unwrap = exports.unwrap = function (wrapper) {
    return wrapper[_wrappedMixin] || wrapper;
  };

  var _cachedApplications = '__mixwith_cachedApplications';

  var Cached = exports.Cached = function (mixin) {
    return wrap(mixin, function (superclass) {
      // Get or create a symbol used to look up a previous application of mixin
      // to the class. This symbol is unique per mixin definition, so a class will have N
      // applicationRefs if it has had N mixins applied to it. A mixin will have
      // exactly one _cachedApplicationRef used to store its applications.

      var cachedApplications = superclass[_cachedApplications];
      if (!cachedApplications) {
        cachedApplications = superclass[_cachedApplications] = new Map();
      }

      var application = cachedApplications.get(mixin);
      if (!application) {
        application = mixin(superclass);
        cachedApplications.set(mixin, application);
      }

      return application;
    });
  };

  var DeDupe = exports.DeDupe = function (mixin) {
    return wrap(mixin, function (superclass) {
      return hasMixin(superclass.prototype, mixin) ? superclass : mixin(superclass);
    });
  };

  var HasInstance = exports.HasInstance = function (mixin) {
    if (Symbol && Symbol.hasInstance && !mixin[Symbol.hasInstance]) {
      Object.defineProperty(mixin, Symbol.hasInstance, {
        value: function value(o) {
          return hasMixin(o, mixin);
        }
      });
    }
    return mixin;
  };

  var BareMixin = exports.BareMixin = function (mixin) {
    return wrap(mixin, function (s) {
      return apply(s, mixin);
    });
  };

  var Mixin = exports.Mixin = function (mixin) {
    return DeDupe(Cached(BareMixin(mixin)));
  };

  var mix = exports.mix = function (superclass) {
    return new MixinBuilder(superclass);
  };

  var MixinBuilder = function () {
    function MixinBuilder(superclass) {
      _classCallCheck(this, MixinBuilder);

      this.superclass = superclass || function () {
        function _class() {
          _classCallCheck(this, _class);
        }

        return _class;
      }();
    }

    _createClass(MixinBuilder, [{
      key: 'with',
      value: function _with() {
        for (var _len = arguments.length, mixins = Array(_len), _key = 0; _key < _len; _key++) {
          mixins[_key] = arguments[_key];
        }

        return mixins.reduce(function (c, m) {
          return m(c);
        }, this.superclass);
      }
    }]);

    return MixinBuilder;
  }();
});

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.5.9
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Vue = factory());
}(this, (function () { 'use strict';

/*  */

var emptyObject = Object.freeze({});

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value e.g. [object Object]
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind, faster than native
 */
function bind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
  // record original fn length
  boundFn._length = fn.length;
  return boundFn
}

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */


// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

{
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm || {};
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */


var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode, deep) {
  var componentOptions = vnode.componentOptions;
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.isCloned = true;
  if (deep) {
    if (vnode.children) {
      cloned.children = cloneVNodes(vnode.children, true);
    }
    if (componentOptions && componentOptions.children) {
      componentOptions.children = cloneVNodes(componentOptions.children, true);
    }
  }
  return cloned
}

function cloneVNodes (vnodes, deep) {
  var len = vnodes.length;
  var res = new Array(len);
  for (var i = 0; i < len; i++) {
    res[i] = cloneVNode(vnodes[i], deep);
  }
  return res
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */
var observerState = {
  shouldConvert: true
};

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive(obj, keys[i], obj[keys[i]]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    observerState.shouldConvert &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ("development" !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
{
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      "development" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    "development" !== 'production' && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    var lower = key.toLowerCase();
    if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
      warn(
        'Do not use built-in or reserved HTML elements as component ' +
        'id: ' + key
      );
    }
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if ("development" !== 'production' && inject) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ("development" !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // handle boolean props
  if (isType(Boolean, prop.type)) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
      value = true;
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldConvert = observerState.shouldConvert;
    observerState.shouldConvert = true;
    observe(value);
    observerState.shouldConvert = prevShouldConvert;
  }
  {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ("development" !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      "Invalid prop: type check failed for prop \"" + name + "\"." +
      " Expected " + (expectedTypes.map(capitalize).join(', ')) +
      ", got " + (toRawType(value)) + ".",
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isType (type, fn) {
  if (!Array.isArray(fn)) {
    return getType(fn) === getType(type)
  }
  for (var i = 0, len = fn.length; i < len; i++) {
    if (getType(fn[i]) === getType(type)) {
      return true
    }
  }
  /* istanbul ignore next */
  return false
}

/*  */

function handleError (err, vm, info) {
  if (vm) {
    var cur = vm;
    while ((cur = cur.$parent)) {
      var hooks = cur.$options.errorCaptured;
      if (hooks) {
        for (var i = 0; i < hooks.length; i++) {
          try {
            var capture = hooks[i].call(cur, err, vm, info) === false;
            if (capture) { return }
          } catch (e) {
            globalHandleError(e, cur, 'errorCaptured hook');
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info);
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      logError(e, null, 'config.errorHandler');
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */
/* globals MessageChannel */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using both micro and macro tasks.
// In < 2.4 we used micro tasks everywhere, but there are some scenarios where
// micro tasks have too high a priority and fires in between supposedly
// sequential events (e.g. #4521, #6690) or even between bubbling of the same
// event (#6566). However, using macro tasks everywhere also has subtle problems
// when state is changed right before repaint (e.g. #6813, out-in transitions).
// Here we use micro task by default, but expose a way to force macro task when
// needed (e.g. in event handlers attached by v-on).
var microTimerFunc;
var macroTimerFunc;
var useMacroTask = false;

// Determine (macro) Task defer implementation.
// Technically setImmediate should be the ideal choice, but it's only available
// in IE. The only polyfill that consistently queues the callback after all DOM
// events triggered in the same loop is by using MessageChannel.
/* istanbul ignore if */
if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  macroTimerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else if (typeof MessageChannel !== 'undefined' && (
  isNative(MessageChannel) ||
  // PhantomJS
  MessageChannel.toString() === '[object MessageChannelConstructor]'
)) {
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = flushCallbacks;
  macroTimerFunc = function () {
    port.postMessage(1);
  };
} else {
  /* istanbul ignore next */
  macroTimerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

// Determine MicroTask defer implementation.
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  microTimerFunc = function () {
    p.then(flushCallbacks);
    // in problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else {
  // fallback to macro
  microTimerFunc = macroTimerFunc;
}

/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a Task instead of a MicroTask.
 */
function withMacroTask (fn) {
  return fn._withTask || (fn._withTask = function () {
    useMacroTask = true;
    var res = fn.apply(null, arguments);
    useMacroTask = false;
    return res
  })
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    if (useMacroTask) {
      macroTimerFunc();
    } else {
      microTimerFunc();
    }
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

var mark;
var measure;

{
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

{
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' &&
    Proxy.toString().match(/native code/);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val)) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, cur, old, event;
  for (name in on) {
    cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
      "development" !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      "development" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                "timeout (" + (res.timeout) + "ms)"
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once) {
  if (once) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$off(event[i], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    if (fn) {
      // specific handler
      var cb;
      var i$1 = cbs.length;
      while (i$1--) {
        cb = cbs[i$1];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i$1, 1);
          break
        }
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */

/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = child.data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
      // no need for the ref nodes after initial patch
      // this prevents keeping a detached DOM tree in memory (#5851)
      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ("development" !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, null, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = (parentVnode.data && parentVnode.data.attrs) || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    observerState.shouldConvert = false;
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      props[key] = validateProp(key, vm.$options.props, propsData, vm);
    }
    observerState.shouldConvert = true;
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  if (listeners) {
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);
  }
  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
}

/*  */


var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ("development" !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression = expOrFn.toString();
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      "development" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  observerState.shouldConvert = isRoot;
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive(props, key, value, function () {
        if (vm.$parent && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  observerState.shouldConvert = true;
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "development" !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      "development" !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ("development" !== 'production' && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : userDef;
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  if ("development" !== 'production' &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    {
      if (methods[key] == null) {
        warn(
          "Method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  keyOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(keyOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    observerState.shouldConvert = false;
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      {
        defineReactive(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      }
    });
    observerState.shouldConvert = true;
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
        ? Reflect.ownKeys(inject).filter(function (key) {
          /* istanbul ignore next */
          return Object.getOwnPropertyDescriptor(inject, key).enumerable
        })
        : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && provideKey in source._provided) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ("development" !== 'production' && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes) {
      if ("development" !== 'production' && slotNodes._rendered) {
        warn(
          "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
          "- this will likely cause render errors.",
          this
        );
      }
      slotNodes._rendered = true;
    }
    nodes = slotNodes || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInAlias,
  eventKeyName
) {
  var keyCodes = config.keyCodes[key] || builtInAlias;
  if (keyCodes) {
    if (Array.isArray(keyCodes)) {
      return keyCodes.indexOf(eventKeyCode) === -1
    } else {
      return keyCodes !== eventKeyCode
    }
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      "development" !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor,
  isOnce
) {
  // render fns generated by compiler < 2.5.4 does not provide v-once
  // information to runtime so be conservative
  var isOldVersion = arguments.length < 3;
  // if a static tree is generated by v-once, it is cached on the instance;
  // otherwise it is purely static and can be cached on the shared options
  // across all instances.
  var renderFns = this.$options.staticRenderFns;
  var cached = isOldVersion || isOnce
    ? (this._staticTrees || (this._staticTrees = []))
    : (renderFns.cached || (renderFns.cached = []));
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree by doing a shallow clone.
  if (tree && !isInFor) {
    return Array.isArray(tree)
      ? cloneVNodes(tree)
      : cloneVNode(tree)
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = renderFns[index].call(this._renderProxy, null, this);
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      "development" !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var options = Ctor.options;
  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () { return resolveSlots(children, parent); };

  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm = Object.create(parent);
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = data.scopedSlots || emptyObject;
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    vnode.fnContext = contextVm;
    vnode.fnOptions = options;
    if (data.slot) {
      (vnode.data || (vnode.data = {})).slot = data.slot;
    }
  }

  return vnode
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

// hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    } else if (vnode.data.keepAlive) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // merge component management hooks onto the placeholder node
  mergeHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var vnodeComponentOptions = vnode.componentOptions;
  var options = {
    _isComponent: true,
    parent: parent,
    propsData: vnodeComponentOptions.propsData,
    _componentTag: vnodeComponentOptions.tag,
    _parentVnode: vnode,
    _parentListeners: vnodeComponentOptions.listeners,
    _renderChildren: vnodeComponentOptions.children,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnodeComponentOptions.Ctor(options)
}

function mergeHooks (data) {
  if (!data.hook) {
    data.hook = {};
  }
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var fromParent = data.hook[key];
    var ours = componentVNodeHooks[key];
    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
  }
}

function mergeHook$1 (one, two) {
  return function (a, b, c, d) {
    one(a, b, c, d);
    two(a, b, c, d);
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    "development" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ("development" !== 'production' &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    warn(
      'Avoid using non-primitive value as key, ' +
      'use string/number value instead.',
      context
    );
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (isDef(vnode)) {
    if (ns) { applyNS(vnode, ns); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force))) {
        applyNS(child, ns, force);
      }
    }
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  }
}

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (vm._isMounted) {
      // if the parent didn't update, the slot nodes will be the ones from
      // last render. They need to be cloned to ensure "freshness" for this render.
      for (var key in vm.$slots) {
        var slot = vm.$slots[key];
        // _rendered is a flag added by renderSlot, but may not be present
        // if the slot is passed from manually written render functions
        if (slot._rendered || (slot[0] && slot[0].elm)) {
          vm.$slots[key] = cloneVNodes(slot, true /* deep */);
        }
      }
    }

    vm.$scopedSlots = (_parentVnode && _parentVnode.data.scopedSlots) || emptyObject;

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      {
        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ("development" !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

var uid$1 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$1++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    {
      initProxy(vm);
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  opts.parent = options.parent;
  opts.propsData = options.propsData;
  opts._parentVnode = options._parentVnode;
  opts._parentListeners = options._parentListeners;
  opts._renderChildren = options._renderChildren;
  opts._componentTag = options._componentTag;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;
  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue$3 (options) {
  if ("development" !== 'production' &&
    !(this instanceof Vue$3)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue$3);
stateMixin(Vue$3);
eventsMixin(Vue$3);
lifecycleMixin(Vue$3);
renderMixin(Vue$3);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    {
      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
        warn(
          'Invalid component name: "' + name + '". Component names ' +
          'can only contain alphanumeric characters and the hyphen, ' +
          'and must start with a letter.'
        );
      }
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        {
          if (type === 'component' && config.isReservedTag(id)) {
            warn(
              'Do not use built-in or reserved HTML elements as component ' +
              'id: ' + id
            );
          }
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache, key, this$1.keys);
    }
  },

  watch: {
    include: function include (val) {
      pruneCache(this, function (name) { return matches(val, name); });
    },
    exclude: function exclude (val) {
      pruneCache(this, function (name) { return !matches(val, name); });
    }
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue$3);

Object.defineProperty(Vue$3.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue$3.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

Vue$3.version = '2.5.9';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      "development" !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setAttribute (node, key, val) {
  node.setAttribute(key, val);
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setAttribute: setAttribute
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!key) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove () {
      if (--remove.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove.listeners = listeners;
    return remove
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;
  function createElm (vnode, insertedVnodeQueue, parentElm, refElm, nested) {
    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }
      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ("development" !== 'production' && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (ref$$1.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setAttribute(vnode.elm, i, '');
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setAttribute(vnode.elm, i, '');
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setAttribute(vnode.elm, i, '');
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
        } else {
          vnodeToMove = oldCh[idxInOld];
          /* istanbul ignore if */
          if ("development" !== 'production' && !vnodeToMove) {
            warn(
              'It seems there are duplicate keys that is causing an update error. ' +
              'Make sure each v-for item has a unique key.'
            );
          }
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // #7138: IE10 & 11 fires input event when setting placeholder on
      // <textarea>... block the first input event and remove the blocker
      // immediately.
      /* istanbul ignore if */
      if (
        isIE && !isIE9 &&
        el.tagName === 'TEXTAREA' &&
        key === 'placeholder' && !el.__ieph
      ) {
        var blocker = function (e) {
          e.stopImmediatePropagation();
          el.removeEventListener('input', blocker);
        };
        el.addEventListener('input', blocker);
        // $flow-disable-line
        el.__ieph = true; /* IE placeholder patched */
      }
      el.setAttribute(key, value);
    }
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + "," + args)
  }
}

/*  */

function baseWarn (msg) {
  console.error(("[Vue compiler]: " + msg));
}

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value });
}

function addAttr (el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  modifiers
) {
  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn
) {
  modifiers = modifiers || emptyObject;
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    "development" !== 'production' && warn &&
    modifiers.prevent && modifiers.passive
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.'
    );
  }

  // check capture modifier
  if (modifiers.capture) {
    delete modifiers.capture;
    name = '!' + name; // mark the event as captured
  }
  if (modifiers.once) {
    delete modifiers.once;
    name = '~' + name; // mark the event as once
  }
  /* istanbul ignore if */
  if (modifiers.passive) {
    delete modifiers.passive;
    name = '&' + name; // mark the event as passive
  }

  // normalize click.right and click.middle since they don't actually fire
  // this is technically browser-specific, but at least for now browsers are
  // the only target envs that have right/middle clicks.
  if (name === 'click') {
    if (modifiers.right) {
      name = 'contextmenu';
      delete modifiers.right;
    } else if (modifiers.middle) {
      name = 'mouseup';
    }
  }

  var events;
  if (modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }

  var newHandler = { value: value };
  if (modifiers !== emptyObject) {
    newHandler.modifiers = modifiers;
  }

  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr (
  el,
  name,
  removeFromMap
) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
        "? " + baseValueExpression + ".trim()" +
        ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: ("\"" + value + "\""),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var res = parseModel(value);
  if (res.key === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
  }
}

/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

var len;
var str;
var chr;
var index$1;
var expressionPos;
var expressionEndPos;



function parseModel (val) {
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index$1 = val.lastIndexOf('.');
    if (index$1 > -1) {
      return {
        exp: val.slice(0, index$1),
        key: '"' + val.slice(index$1 + 1) + '"'
      }
    } else {
      return {
        exp: val,
        key: null
      }
    }
  }

  str = val;
  index$1 = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  {
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead."
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.'
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
      "?_i(" + value + "," + valueBinding + ")>-1" + (
        trueValueBinding === 'true'
          ? (":(" + value + ")")
          : (":_q(" + value + "," + trueValueBinding + ")")
      )
  );
  addHandler(el, 'change',
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + value + "=$$a.concat([$$v]))}" +
      "else{$$i>-1&&(" + value + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
    el,
    value,
    modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
    el,
    value,
    modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;

  // warn if v-bind:value conflicts with v-model
  {
    var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
    if (value$1) {
      var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
      warn$1(
        binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
        'because the latter already expands to a value binding internally'
      );
    }
  }

  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler (handler, event, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  handler = withMacroTask(handler);
  if (once$$1) { handler = createOnceHandler(handler, event, capture); }
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    event,
    handler._withTask || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isDirty(elm, checkVal) ||
    isInputChanged(elm, checkVal)
  ))
}

function isDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isInputChanged (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers) && modifiers.number) {
    return toNumber(value) !== toNumber(newVal)
  }
  if (isDef(modifiers) && modifiers.trim) {
    return value.trim() !== newVal.trim()
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (childNode.data && (styleData = normalizeStyleData(childNode.data))) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def) {
  if (!def) {
    return
  }
  /* istanbul ignore else */
  if (typeof def === 'object') {
    var res = {};
    if (def.css !== false) {
      extend(res, autoCssTransition(def.name || 'v'));
    }
    extend(res, def);
    return res
  } else if (typeof def === 'string') {
    return autoCssTransition(def)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if ("development" !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      addTransitionClass(el, toClass);
      removeTransitionClass(el, startClass);
      if (!cb.cancelled && !userWantsControl) {
        if (isValidDuration(explicitEnterDuration)) {
          setTimeout(cb, explicitEnterDuration);
        } else {
          whenTransitionEnds(el, type, cb);
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if ("development" !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        addTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled && !userWantsControl) {
          if (isValidDuration(explicitLeaveDuration)) {
            setTimeout(cb, explicitLeaveDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        if (!isAndroid) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
        }
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "development" !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (value === oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag || isAsyncPlaceholder(c); });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ("development" !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ("development" !== 'production' &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue$3.config.mustUseProp = mustUseProp;
Vue$3.config.isReservedTag = isReservedTag;
Vue$3.config.isReservedAttr = isReservedAttr;
Vue$3.config.getTagNamespace = getTagNamespace;
Vue$3.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue$3.options.directives, platformDirectives);
extend(Vue$3.options.components, platformComponents);

// install platform patch function
Vue$3.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
Vue$3.nextTick(function () {
  if (config.devtools) {
    if (devtools) {
      devtools.emit('init', Vue$3);
    } else if ("development" !== 'production' && isChrome) {
      console[console.info ? 'info' : 'log'](
        'Download the Vue Devtools extension for a better development experience:\n' +
        'https://github.com/vuejs/vue-devtools'
      );
    }
  }
  if ("development" !== 'production' &&
    config.productionTip !== false &&
    inBrowser && typeof console !== 'undefined'
  ) {
    console[console.info ? 'info' : 'log'](
      "You are running Vue in development mode.\n" +
      "Make sure to turn on production mode when deploying for production.\n" +
      "See more tips at https://vuejs.org/guide/deployment.html"
    );
  }
}, 0);

/*  */

var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});

function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      tokens.push(JSON.stringify(text.slice(lastIndex, index)));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    tokens.push(JSON.stringify(text.slice(lastIndex)));
  }
  return tokens.join('+')
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if ("development" !== 'production' && staticClass) {
    var expression = parseText(staticClass, options.delimiters);
    if (expression) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.'
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
};

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    {
      var expression = parseText(staticStyle, options.delimiters);
      if (expression) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.'
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
};

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
};

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/**
 * Not type-checking this file because it's mostly vendor code.
 */

/*!
 * HTML Parser By John Resig (ejohn.org)
 * Modified by Juriy "kangax" Zaytsev
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp(("^<" + qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
var comment = /^<!--/;
var conditionalComment = /^<!\[/;

var IS_REGEX_CAPTURING_BROKEN = false;
'x'.replace(/x(.)?/g, function (m, g) {
  IS_REGEX_CAPTURING_BROKEN = g === '';
});

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n',
  '&#9;': '\t'
};
var encodedAttr = /&(?:lt|gt|quot|amp);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10|#9);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd));
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(lastTag, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!--([\s\S]*?)-->/g, '$1')
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if ("development" !== 'production' && !stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
        if (args[3] === '') { delete args[3]; }
        if (args[4] === '') { delete args[4]; }
        if (args[5] === '') { delete args[5]; }
      }
      var value = args[3] || args[4] || args[5] || '';
      var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
        ? options.shouldDecodeNewlinesForHref
        : options.shouldDecodeNewlines;
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
      };
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
    }

    // Find the closest opened tag of the same type
    if (tagName) {
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if ("development" !== 'production' &&
          (i > pos || !tagName) &&
          options.warn
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag.")
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;
var forIteratorRE = /\((\{[^}]*\}|[^,{]*),([^,]*)(?:,([^,]*))?\)/;
var stripParensRE = /^\(|\)$/g;

var argRE = /:(.*)$/;
var bindRE = /^:|^v-bind:/;
var modifierRE = /\.[^.]+/g;

var decodeHTMLCached = cached(he.decode);

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;



function createASTElement (
  tag,
  attrs,
  parent
) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    parent: parent,
    children: []
  }
}

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg) {
    if (!warned) {
      warned = true;
      warn$2(msg);
    }
  }

  function endPre (element) {
    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    start: function start (tag, attrs, unary) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);
      if (ns) {
        element.ns = ns;
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        "development" !== 'production' && warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.'
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
        // element-scope stuff
        processElement(element, options);
      }

      function checkRootConstraints (el) {
        {
          if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce(
              "Cannot use <" + (el.tag) + "> as component root element because it may " +
              'contain multiple nodes.'
            );
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce(
              'Cannot use v-for on stateful component root element because ' +
              'it renders multiple elements.'
            );
          }
        }
      }

      // tree management
      if (!root) {
        root = element;
        checkRootConstraints(root);
      } else if (!stack.length) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          checkRootConstraints(element);
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else {
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead."
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else if (element.slotScope) { // scoped slot
          currentParent.plain = false;
          var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        } else {
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }
      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        endPre(element);
      }
      // apply post-transforms
      for (var i$1 = 0; i$1 < postTransforms.length; i$1++) {
        postTransforms[i$1](element, options);
      }
    },

    end: function end () {
      // remove trailing whitespace
      var element = stack[stack.length - 1];
      var lastNode = element.children[element.children.length - 1];
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
        element.children.pop();
      }
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      endPre(element);
    },

    chars: function chars (text) {
      if (!currentParent) {
        {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.'
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored.")
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      text = inPre || text.trim()
        ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && children.length ? ' ' : '';
      if (text) {
        var expression;
        if (!inVPre && text !== ' ' && (expression = parseText(text, delimiters))) {
          children.push({
            type: 2,
            expression: expression,
            text: text
          });
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          children.push({
            type: 3,
            text: text
          });
        }
      }
    },
    comment: function comment (text) {
      currentParent.children.push({
        type: 3,
        text: text,
        isComment: true
      });
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var l = el.attrsList.length;
  if (l) {
    var attrs = el.attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      };
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement (element, options) {
  processKey(element);

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain = !element.key && !element.attrsList.length;

  processRef(element);
  processSlot(element);
  processComponent(element);
  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }
  processAttrs(element);
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if ("development" !== 'production' && el.tag === 'template') {
      warn$2("<template> cannot be keyed. Place the key on real elements instead.");
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var inMatch = exp.match(forAliasRE);
    if (!inMatch) {
      "development" !== 'production' && warn$2(
        ("Invalid v-for expression: " + exp)
      );
      return
    }
    el.for = inMatch[2].trim();
    var alias = inMatch[1].trim();
    var iteratorMatch = alias.match(forIteratorRE);
    if (iteratorMatch) {
      el.alias = iteratorMatch[1].trim();
      el.iterator1 = iteratorMatch[2].trim();
      if (iteratorMatch[3]) {
        el.iterator2 = iteratorMatch[3].trim();
      }
    } else {
      el.alias = alias.replace(stripParensRE, '');
    }
  }
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if."
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if ("development" !== 'production' && children[i].text !== ' ') {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored."
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

function processSlot (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if ("development" !== 'production' && el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead."
      );
    }
  } else {
    var slotScope;
    if (el.tag === 'template') {
      slotScope = getAndRemoveAttr(el, 'scope');
      /* istanbul ignore if */
      if ("development" !== 'production' && slotScope) {
        warn$2(
          "the \"scope\" attribute for scoped slots have been deprecated and " +
          "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
          "can also be used on plain elements in addition to <template> to " +
          "denote scoped slots.",
          true
        );
      }
      el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
    } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
      /* istanbul ignore if */
      if ("development" !== 'production' && el.attrsMap['v-for']) {
        warn$2(
          "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
          "(v-for takes higher priority). Use a wrapper <template> for the " +
          "scoped slot to make it clearer.",
          true
        );
      }
      el.slotScope = slotScope;
    }
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      // preserve slot as an attribute for native shadow DOM compat
      // only for non-scoped slots.
      if (el.tag !== 'template' && !el.slotScope) {
        addAttr(el, 'slot', slotTarget);
      }
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, isProp;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name);
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isProp = false;
        if (modifiers) {
          if (modifiers.prop) {
            isProp = true;
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            addHandler(
              el,
              ("update:" + (camelize(name))),
              genAssignmentCode(value, "$event")
            );
          }
        }
        if (isProp || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        addHandler(el, name, value, modifiers, false, warn$2);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
        }
        addDirective(el, name, rawName, value, arg, modifiers);
        if ("development" !== 'production' && name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      {
        var expression = parseText(value, delimiters);
        if (expression) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.'
          );
        }
      }
      addAttr(el, name, JSON.stringify(value));
      // #6887 firefox doesn't update muted state if set via attribute
      // even immediately after element creation
      if (!el.component &&
          name === 'muted' &&
          platformMustUseProp(el.tag, el.attrsMap.type, name)) {
        addProp(el, name, 'true');
      }
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      "development" !== 'production' &&
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead."
      );
    }
    _el = _el.parent;
  }
}

/*  */

/**
 * Expand input[v-model] with dyanmic type bindings into v-if-else chains
 * Turn this:
 *   <input v-model="data[type]" :type="type">
 * into this:
 *   <input v-if="type === 'checkbox'" type="checkbox" v-model="data[type]">
 *   <input v-else-if="type === 'radio'" type="radio" v-model="data[type]">
 *   <input v-else :type="type" v-model="data[type]">
 */

function preTransformNode (el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;
    if (map['v-model'] && (map['v-bind:type'] || map[':type'])) {
      var typeBinding = getBindingAttr(el, 'type');
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
      var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
      var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
      // 1. checkbox
      var branch0 = cloneASTElement(el);
      // process for on the main node
      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed
      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0.if,
        block: branch0
      });
      // 2. add radio else-if condition
      var branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
        block: branch1
      });
      // 3. other
      var branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2
      });

      if (hasElse) {
        branch0.else = true;
      } else if (elseIfCondition) {
        branch0.elseif = elseIfCondition;
      }

      return branch0
    }
  }
}

function cloneASTElement (el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent)
}

function addRawAttr (el, name, value) {
  el.attrsMap[name] = value;
  el.attrsList.push({ name: name, value: value });
}

var model$2 = {
  preTransformNode: preTransformNode
};

var modules$1 = [
  klass$1,
  style$1,
  model$2
];

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
};

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
var simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;

// keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative,
  warn
) {
  var res = isNative ? 'nativeOn:{' : 'on:{';
  for (var name in events) {
    res += "\"" + name + "\":" + (genHandler(name, events[name])) + ",";
  }
  return res.slice(0, -1) + '}'
}

function genHandler (
  name,
  handler
) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);

  if (!handler.modifiers) {
    return isMethodPath || isFunctionExpression
      ? handler.value
      : ("function($event){" + (handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        var modifiers = (handler.modifiers);
        genModifierCode += genGuard(
          ['ctrl', 'shift', 'alt', 'meta']
            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
            .join('||')
        );
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? handler.value + '($event)'
      : isFunctionExpression
        ? ("(" + (handler.value) + ")($event)")
        : handler.value;
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var code = keyCodes[key];
  return (
    "_k($event.keyCode," +
    (JSON.stringify(key)) + "," +
    (JSON.stringify(code)) + "," +
    "$event.key)"
  )
}

/*  */

function on (el, dir) {
  if ("development" !== 'production' && dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
};

/*  */

var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !isReservedTag(el.tag); };
  this.onceId = 0;
  this.staticRenderFns = [];
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data = el.plain ? undefined : genData$2(el, state);

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state, once$$1) {
  el.staticProcessed = true;
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  return ("_m(" + (state.staticRenderFns.length - 1) + "," + (el.staticInFor ? 'true' : 'false') + "," + (once$$1 ? 'true' : 'false') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      "development" !== 'production' && state.warn(
        "v-once can only be used inside v-for that is keyed. "
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
  } else {
    return genStatic(el, state, true)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if ("development" !== 'production' &&
    state.maybeComponent(el) &&
    el.tag !== 'slot' &&
    el.tag !== 'template' &&
    !el.key
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:{" + (genProps(el.attrs)) + "},";
  }
  // DOM props
  if (el.props) {
    data += "domProps:{" + (genProps(el.props)) + "},";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false, state.warn)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true, state.warn)) + ",";
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if ("development" !== 'production' && (
    el.children.length !== 1 || ast.type !== 1
  )) {
    state.warn('Inline-template components must have exactly one child element.');
  }
  if (ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  slots,
  state
) {
  return ("scopedSlots:_u([" + (Object.keys(slots).map(function (key) {
      return genScopedSlot(key, slots[key], state)
    }).join(',')) + "])")
}

function genScopedSlot (
  key,
  el,
  state
) {
  if (el.for && !el.forProcessed) {
    return genForScopedSlot(key, el, state)
  }
  var fn = "function(" + (String(el.slotScope)) + "){" +
    "return " + (el.tag === 'template'
      ? el.if
        ? ((el.if) + "?" + (genChildren(el, state) || 'undefined') + ":undefined")
        : genChildren(el, state) || 'undefined'
      : genElement(el, state)) + "}";
  return ("{key:" + key + ",fn:" + fn + "}")
}

function genForScopedSlot (
  key,
  el,
  state
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
  el.forProcessed = true; // avoid recursion
  return "_l((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + (genScopedSlot(key, el, state)) +
    '})'
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      return (altGenElement || genElement)(el$1, state)
    }
    var normalizationType = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType ? ("," + normalizationType) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var res = '';
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
  }
  return res.slice(0, -1)
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast) {
  var errors = [];
  if (ast) {
    checkNode(ast, errors);
  }
  return errors
}

function checkNode (node, errors) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), errors);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), errors);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), errors);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], errors);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, errors);
  }
}

function checkEvent (exp, text, errors) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);
  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    errors.push(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
    );
  }
  checkExpression(exp, text, errors);
}

function checkFor (node, text, errors) {
  checkExpression(node.for || '', text, errors);
  checkIdentifier(node.alias, 'v-for alias', text, errors);
  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
}

function checkIdentifier (
  ident,
  type,
  text,
  errors
) {
  if (typeof ident === 'string') {
    try {
      new Function(("var " + ident + "=_"));
    } catch (e) {
      errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
    }
  }
}

function checkExpression (exp, text, errors) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      errors.push(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim())
      );
    } else {
      errors.push(
        "invalid expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n"
      );
    }
  }
}

/*  */

function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = extend({}, options);
    var warn$$1 = options.warn || warn;
    delete options.warn;

    /* istanbul ignore if */
    {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn$$1(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    {
      if (compiled.errors && compiled.errors.length) {
        warn$$1(
          "Error compiling template:\n\n" + template + "\n\n" +
          compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
          vm
        );
      }
      if (compiled.tips && compiled.tips.length) {
        compiled.tips.forEach(function (msg) { return tip(msg, vm); });
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn$$1(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];
      finalOptions.warn = function (msg, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      var compiled = baseCompile(template, finalOptions);
      {
        errors.push.apply(errors, detectErrors(compiled.ast));
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  optimize(ast, options);
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compileToFunctions = ref$1.compileToFunctions;

/*  */

// check whether current browser encodes a char inside attribute values
var div;
function getShouldDecode (href) {
  div = div || document.createElement('div');
  div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
  return div.innerHTML.indexOf('&#10;') > 0
}

// #3663: IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue$3.prototype.$mount;
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    "development" !== 'production' && warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if ("development" !== 'production' && !template) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        shouldDecodeNewlines: shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile end');
        measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue$3.compile = compileToFunctions;

return Vue$3;

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7), __webpack_require__(201).setImmediate))

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _vue = __webpack_require__(54);

var _vue2 = _interopRequireDefault(_vue);

var _pagesSwitcher = __webpack_require__(190);

var _pagesSwitcher2 = _interopRequireDefault(_pagesSwitcher);

var _keyboardShortcut = __webpack_require__(195);

var _keyboardShortcut2 = _interopRequireDefault(_keyboardShortcut);

var _style = __webpack_require__(198);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TemplateStack = function () {

	/**
  * TemplateStack constructor
  * @param 		{Object} 		options 		The options to init the template stack with
  */
	function TemplateStack(options) {
		_classCallCheck(this, TemplateStack);

		this._options = {};


		// save options
		this._options = options;

		// init vue app
		this._initVueApp();
	}

	/**
  * Init vue app
  */


	_createClass(TemplateStack, [{
		key: '_initVueApp',
		value: function _initVueApp() {
			var _this = this;

			var appWrapperElm = document.querySelector('#template-stack');
			if (!appWrapperElm) {
				appWrapperElm = document.createElement('div');
				appWrapperElm.id = 'template-stack';
				document.body.appendChild(appWrapperElm);
			}
			new _vue2.default({
				el: appWrapperElm,
				data: function data() {
					return _extends({}, _this._options, {
						pageSwitcher: false
					});
				},
				template: '\n\t\t\t\t<div id="template-stack" v-if="pageSwitcher">\n\t\t\t\t\t<template-stack-page-switcher v-bind:pages="pages"></template-stack-page-switcher>\n\t\t\t\t</div>\n\t\t\t',
				mounted: function mounted() {
					var _this2 = this;

					// listen for some keys
					(0, _keyboardShortcut2.default)('ctrl p', function () {
						_this2.pageSwitcher = !_this2.pageSwitcher;
					});
					(0, _keyboardShortcut2.default)('escape', function () {
						_this2.pageSwitcher = false;
					});
				}
			});
		}
	}]);

	return TemplateStack;
}();

exports.default = TemplateStack;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _class = __webpack_require__(191);

var _class2 = _interopRequireDefault(_class);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_class2.default.define('ts-select', _class2.default, 'select');

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
var NativeCustomEvent = global.CustomEvent;

function useNative () {
  try {
    var p = new NativeCustomEvent('cat', { detail: { foo: 'bar' } });
    return  'cat' === p.type && 'bar' === p.detail.foo;
  } catch (e) {
  }
  return false;
}

/**
 * Cross-browser `CustomEvent` constructor.
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent.CustomEvent
 *
 * @public
 */

module.exports = useNative() ? NativeCustomEvent :

// IE >= 9
'undefined' !== typeof document && 'function' === typeof document.createEvent ? function CustomEvent (type, params) {
  var e = document.createEvent('CustomEvent');
  if (params) {
    e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
  } else {
    e.initCustomEvent(type, false, false, void 0);
  }
  return e;
} :

// IE <= 8
function CustomEvent (type, params) {
  var e = document.createEventObject();
  e.type = type;
  if (params) {
    e.bubbles = Boolean(params.bubbles);
    e.cancelable = Boolean(params.cancelable);
    e.detail = params.detail;
  } else {
    e.bubbles = false;
    e.cancelable = false;
    e.detail = void 0;
  }
  return e;
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Code refactored from Mozilla Developer Network:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */



function assign(target, firstSource) {
  if (target === undefined || target === null) {
    throw new TypeError('Cannot convert first argument to object');
  }

  var to = Object(target);
  for (var i = 1; i < arguments.length; i++) {
    var nextSource = arguments[i];
    if (nextSource === undefined || nextSource === null) {
      continue;
    }

    var keysArray = Object.keys(Object(nextSource));
    for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
      var nextKey = keysArray[nextIndex];
      var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
      if (desc !== undefined && desc.enumerable) {
        to[nextKey] = nextSource[nextKey];
      }
    }
  }
  return to;
}

function polyfill() {
  if (!Object.assign) {
    Object.defineProperty(Object, 'assign', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: assign
    });
  }
}

module.exports = {
  assign: assign,
  polyfill: polyfill
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(1),
    root = __webpack_require__(0);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(100),
    hashDelete = __webpack_require__(101),
    hashGet = __webpack_require__(102),
    hashHas = __webpack_require__(103),
    hashSet = __webpack_require__(104);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(1),
    root = __webpack_require__(0);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(1),
    root = __webpack_require__(0);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(17),
    setCacheAdd = __webpack_require__(127),
    setCacheHas = __webpack_require__(128);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(8),
    stackClear = __webpack_require__(132),
    stackDelete = __webpack_require__(133),
    stackGet = __webpack_require__(134),
    stackHas = __webpack_require__(135),
    stackSet = __webpack_require__(136);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(0);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(1),
    root = __webpack_require__(0);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 69 */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),
/* 70 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),
/* 71 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 72 */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),
/* 73 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(30),
    toKey = __webpack_require__(35);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(72),
    isArray = __webpack_require__(2);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(3),
    isObjectLike = __webpack_require__(5);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(78),
    isObjectLike = __webpack_require__(5);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(66),
    equalArrays = __webpack_require__(32),
    equalByTag = __webpack_require__(93),
    equalObjects = __webpack_require__(94),
    getTag = __webpack_require__(98),
    isArray = __webpack_require__(2),
    isBuffer = __webpack_require__(39),
    isTypedArray = __webpack_require__(42);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(40),
    isMasked = __webpack_require__(108),
    isObject = __webpack_require__(4),
    toSource = __webpack_require__(36);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(3),
    isLength = __webpack_require__(41),
    isObjectLike = __webpack_require__(5);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(34),
    nativeKeys = __webpack_require__(121);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4),
    isPrototype = __webpack_require__(34),
    nativeKeysIn = __webpack_require__(122);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(38),
    overRest = __webpack_require__(126),
    setToString = __webpack_require__(130);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(28),
    castPath = __webpack_require__(30),
    isIndex = __webpack_require__(18),
    isObject = __webpack_require__(4),
    toKey = __webpack_require__(35);

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

module.exports = baseSet;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(139),
    defineProperty = __webpack_require__(31),
    identity = __webpack_require__(38);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),
/* 86 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(9),
    arrayMap = __webpack_require__(71),
    isArray = __webpack_require__(2),
    isSymbol = __webpack_require__(20);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 88 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 89 */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(28),
    baseAssignValue = __webpack_require__(29);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(0);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(83),
    isIterateeCall = __webpack_require__(105);

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(9),
    Uint8Array = __webpack_require__(67),
    eq = __webpack_require__(13),
    equalArrays = __webpack_require__(32),
    mapToArray = __webpack_require__(119),
    setToArray = __webpack_require__(129);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(95);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(75),
    getSymbols = __webpack_require__(97),
    keys = __webpack_require__(143);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(9);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(70),
    stubArray = __webpack_require__(147);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(61),
    Map = __webpack_require__(16),
    Promise = __webpack_require__(63),
    Set = __webpack_require__(64),
    WeakMap = __webpack_require__(68),
    baseGetTag = __webpack_require__(3),
    toSource = __webpack_require__(36);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),
/* 99 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(12);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 101 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(12);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(12);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(12);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(13),
    isArrayLike = __webpack_require__(19),
    isIndex = __webpack_require__(18),
    isObject = __webpack_require__(4);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(2),
    isSymbol = __webpack_require__(20);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 107 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(91);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 109 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(10);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(10);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(10);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(10);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(62),
    ListCache = __webpack_require__(8),
    Map = __webpack_require__(16);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(11);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(11);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(11);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(11);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 119 */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(145);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(125);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 122 */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(33);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(55)(module)))

/***/ }),
/* 124 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 125 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(69);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),
/* 127 */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),
/* 128 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),
/* 129 */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(85),
    shortOut = __webpack_require__(131);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),
/* 131 */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(8);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),
/* 133 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),
/* 134 */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),
/* 135 */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(8),
    Map = __webpack_require__(16),
    MapCache = __webpack_require__(17);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(120);

/** Used to match property names within property paths. */
var reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(90),
    createAssigner = __webpack_require__(92),
    keysIn = __webpack_require__(144);

/**
 * This method is like `_.assign` except that it iterates over own and
 * inherited source properties.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @alias extend
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assign
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assignIn({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
 */
var assignIn = createAssigner(function(object, source) {
  copyObject(source, keysIn(source), object);
});

module.exports = assignIn;


/***/ }),
/* 139 */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(138);


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(76),
    isObjectLike = __webpack_require__(5);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(77);

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

module.exports = isEqual;


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(27),
    baseKeys = __webpack_require__(81),
    isArrayLike = __webpack_require__(19);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(27),
    baseKeysIn = __webpack_require__(82),
    isArrayLike = __webpack_require__(19);

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(17);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var baseSet = __webpack_require__(84);

/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `_.setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.set(object, 'a[0].b.c', 4);
 * console.log(object.a[0].b.c);
 * // => 4
 *
 * _.set(object, ['x', '0', 'y', 'z'], 5);
 * console.log(object.x[0].y.z);
 * // => 5
 */
function set(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}

module.exports = set;


/***/ }),
/* 147 */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),
/* 148 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(87);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscription_1 = __webpack_require__(14);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SubjectSubscription = (function (_super) {
    __extends(SubjectSubscription, _super);
    function SubjectSubscription(subject, subscriber) {
        _super.call(this);
        this.subject = subject;
        this.subscriber = subscriber;
        this.closed = false;
    }
    SubjectSubscription.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.closed = true;
        var subject = this.subject;
        var observers = subject.observers;
        this.subject = null;
        if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
            return;
        }
        var subscriberIndex = observers.indexOf(this.subscriber);
        if (subscriberIndex !== -1) {
            observers.splice(subscriberIndex, 1);
        }
    };
    return SubjectSubscription;
}(Subscription_1.Subscription));
exports.SubjectSubscription = SubjectSubscription;
//# sourceMappingURL=SubjectSubscription.js.map

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(6);
var share_1 = __webpack_require__(154);
Observable_1.Observable.prototype.share = share_1.share;
//# sourceMappingURL=share.js.map

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = __webpack_require__(44);
var Observable_1 = __webpack_require__(6);
var Subscriber_1 = __webpack_require__(21);
var Subscription_1 = __webpack_require__(14);
/**
 * @class ConnectableObservable<T>
 */
var ConnectableObservable = (function (_super) {
    __extends(ConnectableObservable, _super);
    function ConnectableObservable(source, subjectFactory) {
        _super.call(this);
        this.source = source;
        this.subjectFactory = subjectFactory;
        this._refCount = 0;
        this._isComplete = false;
    }
    ConnectableObservable.prototype._subscribe = function (subscriber) {
        return this.getSubject().subscribe(subscriber);
    };
    ConnectableObservable.prototype.getSubject = function () {
        var subject = this._subject;
        if (!subject || subject.isStopped) {
            this._subject = this.subjectFactory();
        }
        return this._subject;
    };
    ConnectableObservable.prototype.connect = function () {
        var connection = this._connection;
        if (!connection) {
            this._isComplete = false;
            connection = this._connection = new Subscription_1.Subscription();
            connection.add(this.source
                .subscribe(new ConnectableSubscriber(this.getSubject(), this)));
            if (connection.closed) {
                this._connection = null;
                connection = Subscription_1.Subscription.EMPTY;
            }
            else {
                this._connection = connection;
            }
        }
        return connection;
    };
    ConnectableObservable.prototype.refCount = function () {
        return this.lift(new RefCountOperator(this));
    };
    return ConnectableObservable;
}(Observable_1.Observable));
exports.ConnectableObservable = ConnectableObservable;
var connectableProto = ConnectableObservable.prototype;
exports.connectableObservableDescriptor = {
    operator: { value: null },
    _refCount: { value: 0, writable: true },
    _subject: { value: null, writable: true },
    _connection: { value: null, writable: true },
    _subscribe: { value: connectableProto._subscribe },
    _isComplete: { value: connectableProto._isComplete, writable: true },
    getSubject: { value: connectableProto.getSubject },
    connect: { value: connectableProto.connect },
    refCount: { value: connectableProto.refCount }
};
var ConnectableSubscriber = (function (_super) {
    __extends(ConnectableSubscriber, _super);
    function ConnectableSubscriber(destination, connectable) {
        _super.call(this, destination);
        this.connectable = connectable;
    }
    ConnectableSubscriber.prototype._error = function (err) {
        this._unsubscribe();
        _super.prototype._error.call(this, err);
    };
    ConnectableSubscriber.prototype._complete = function () {
        this.connectable._isComplete = true;
        this._unsubscribe();
        _super.prototype._complete.call(this);
    };
    ConnectableSubscriber.prototype._unsubscribe = function () {
        var connectable = this.connectable;
        if (connectable) {
            this.connectable = null;
            var connection = connectable._connection;
            connectable._refCount = 0;
            connectable._subject = null;
            connectable._connection = null;
            if (connection) {
                connection.unsubscribe();
            }
        }
    };
    return ConnectableSubscriber;
}(Subject_1.SubjectSubscriber));
var RefCountOperator = (function () {
    function RefCountOperator(connectable) {
        this.connectable = connectable;
    }
    RefCountOperator.prototype.call = function (subscriber, source) {
        var connectable = this.connectable;
        connectable._refCount++;
        var refCounter = new RefCountSubscriber(subscriber, connectable);
        var subscription = source.subscribe(refCounter);
        if (!refCounter.closed) {
            refCounter.connection = connectable.connect();
        }
        return subscription;
    };
    return RefCountOperator;
}());
var RefCountSubscriber = (function (_super) {
    __extends(RefCountSubscriber, _super);
    function RefCountSubscriber(destination, connectable) {
        _super.call(this, destination);
        this.connectable = connectable;
    }
    RefCountSubscriber.prototype._unsubscribe = function () {
        var connectable = this.connectable;
        if (!connectable) {
            this.connection = null;
            return;
        }
        this.connectable = null;
        var refCount = connectable._refCount;
        if (refCount <= 0) {
            this.connection = null;
            return;
        }
        connectable._refCount = refCount - 1;
        if (refCount > 1) {
            this.connection = null;
            return;
        }
        ///
        // Compare the local RefCountSubscriber's connection Subscription to the
        // connection Subscription on the shared ConnectableObservable. In cases
        // where the ConnectableObservable source synchronously emits values, and
        // the RefCountSubscriber's downstream Observers synchronously unsubscribe,
        // execution continues to here before the RefCountOperator has a chance to
        // supply the RefCountSubscriber with the shared connection Subscription.
        // For example:
        // ```
        // Observable.range(0, 10)
        //   .publish()
        //   .refCount()
        //   .take(5)
        //   .subscribe();
        // ```
        // In order to account for this case, RefCountSubscriber should only dispose
        // the ConnectableObservable's shared connection Subscription if the
        // connection Subscription exists, *and* either:
        //   a. RefCountSubscriber doesn't have a reference to the shared connection
        //      Subscription yet, or,
        //   b. RefCountSubscriber's connection Subscription reference is identical
        //      to the shared connection Subscription
        ///
        var connection = this.connection;
        var sharedConnection = connectable._connection;
        this.connection = null;
        if (sharedConnection && (!connection || sharedConnection === connection)) {
            sharedConnection.unsubscribe();
        }
    };
    return RefCountSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=ConnectableObservable.js.map

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ConnectableObservable_1 = __webpack_require__(152);
/* tslint:enable:max-line-length */
/**
 * Returns an Observable that emits the results of invoking a specified selector on items
 * emitted by a ConnectableObservable that shares a single subscription to the underlying stream.
 *
 * <img src="./img/multicast.png" width="100%">
 *
 * @param {Function|Subject} subjectOrSubjectFactory - Factory function to create an intermediate subject through
 * which the source sequence's elements will be multicast to the selector function
 * or Subject to push source elements into.
 * @param {Function} [selector] - Optional selector function that can use the multicasted source stream
 * as many times as needed, without causing multiple subscriptions to the source stream.
 * Subscribers to the given source will receive all notifications of the source from the
 * time of the subscription forward.
 * @return {Observable} An Observable that emits the results of invoking the selector
 * on the items emitted by a `ConnectableObservable` that shares a single subscription to
 * the underlying stream.
 * @method multicast
 * @owner Observable
 */
function multicast(subjectOrSubjectFactory, selector) {
    var subjectFactory;
    if (typeof subjectOrSubjectFactory === 'function') {
        subjectFactory = subjectOrSubjectFactory;
    }
    else {
        subjectFactory = function subjectFactory() {
            return subjectOrSubjectFactory;
        };
    }
    if (typeof selector === 'function') {
        return this.lift(new MulticastOperator(subjectFactory, selector));
    }
    var connectable = Object.create(this, ConnectableObservable_1.connectableObservableDescriptor);
    connectable.source = this;
    connectable.subjectFactory = subjectFactory;
    return connectable;
}
exports.multicast = multicast;
var MulticastOperator = (function () {
    function MulticastOperator(subjectFactory, selector) {
        this.subjectFactory = subjectFactory;
        this.selector = selector;
    }
    MulticastOperator.prototype.call = function (subscriber, source) {
        var selector = this.selector;
        var subject = this.subjectFactory();
        var subscription = selector(subject).subscribe(subscriber);
        subscription.add(source.subscribe(subject));
        return subscription;
    };
    return MulticastOperator;
}());
exports.MulticastOperator = MulticastOperator;
//# sourceMappingURL=multicast.js.map

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var multicast_1 = __webpack_require__(153);
var Subject_1 = __webpack_require__(44);
function shareSubjectFactory() {
    return new Subject_1.Subject();
}
/**
 * Returns a new Observable that multicasts (shares) the original Observable. As long as there is at least one
 * Subscriber this Observable will be subscribed and emitting data. When all subscribers have unsubscribed it will
 * unsubscribe from the source Observable. Because the Observable is multicasting it makes the stream `hot`.
 * This is an alias for .publish().refCount().
 *
 * <img src="./img/share.png" width="100%">
 *
 * @return {Observable<T>} An Observable that upon connection causes the source Observable to emit items to its Observers.
 * @method share
 * @owner Observable
 */
function share() {
    return multicast_1.multicast.call(this, shareSubjectFactory).refCount();
}
exports.share = share;
;
//# sourceMappingURL=share.js.map

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__(23);
function getSymbolObservable(context) {
    var $$observable;
    var Symbol = context.Symbol;
    if (typeof Symbol === 'function') {
        if (Symbol.observable) {
            $$observable = Symbol.observable;
        }
        else {
            $$observable = Symbol('observable');
            Symbol.observable = $$observable;
        }
    }
    else {
        $$observable = '@@observable';
    }
    return $$observable;
}
exports.getSymbolObservable = getSymbolObservable;
exports.observable = getSymbolObservable(root_1.root);
/**
 * @deprecated use observable instead
 */
exports.$$observable = exports.observable;
//# sourceMappingURL=observable.js.map

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * An error thrown when an action is invalid because the object has been
 * unsubscribed.
 *
 * @see {@link Subject}
 * @see {@link BehaviorSubject}
 *
 * @class ObjectUnsubscribedError
 */
var ObjectUnsubscribedError = (function (_super) {
    __extends(ObjectUnsubscribedError, _super);
    function ObjectUnsubscribedError() {
        var err = _super.call(this, 'object unsubscribed');
        this.name = err.name = 'ObjectUnsubscribedError';
        this.stack = err.stack;
        this.message = err.message;
    }
    return ObjectUnsubscribedError;
}(Error));
exports.ObjectUnsubscribedError = ObjectUnsubscribedError;
//# sourceMappingURL=ObjectUnsubscribedError.js.map

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * An error thrown when one or more errors have occurred during the
 * `unsubscribe` of a {@link Subscription}.
 */
var UnsubscriptionError = (function (_super) {
    __extends(UnsubscriptionError, _super);
    function UnsubscriptionError(errors) {
        _super.call(this);
        this.errors = errors;
        var err = Error.call(this, errors ?
            errors.length + " errors occurred during unsubscription:\n  " + errors.map(function (err, i) { return ((i + 1) + ") " + err.toString()); }).join('\n  ') : '');
        this.name = err.name = 'UnsubscriptionError';
        this.stack = err.stack;
        this.message = err.message;
    }
    return UnsubscriptionError;
}(Error));
exports.UnsubscriptionError = UnsubscriptionError;
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.isArray = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });
//# sourceMappingURL=isArray.js.map

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isObject(x) {
    return x != null && typeof x === 'object';
}
exports.isObject = isObject;
//# sourceMappingURL=isObject.js.map

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Subscriber_1 = __webpack_require__(21);
var rxSubscriber_1 = __webpack_require__(22);
var Observer_1 = __webpack_require__(43);
function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
            return nextOrObserver[rxSubscriber_1.rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber_1.Subscriber(Observer_1.empty);
    }
    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
}
exports.toSubscriber = toSubscriber;
//# sourceMappingURL=toSubscriber.js.map

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var errorObject_1 = __webpack_require__(45);
var tryCatchTarget;
function tryCatcher() {
    try {
        return tryCatchTarget.apply(this, arguments);
    }
    catch (e) {
        errorObject_1.errorObject.e = e;
        return errorObject_1.errorObject;
    }
}
function tryCatch(fn) {
    tryCatchTarget = fn;
    return tryCatcher;
}
exports.tryCatch = tryCatch;
;
//# sourceMappingURL=tryCatch.js.map

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.sentinel = factory();
  }
}(this, function() {
var isArray = Array.isArray,
    selectorToAnimationMap = {},
    animationCallbacks = {},
    styleEl,
    styleSheet,
    cssRules;


return {
  /**
   * Add watcher.
   * @param {array} cssSelectors - List of CSS selector strings
   * @param {Function} callback - The callback function
   */
  on: function(cssSelectors, callback) {
    if (!callback) return;

    // initialize animationstart event listener
    if (!styleEl) {
      var doc = document,
          head = doc.head;

      // add animationstart event listener
      doc.addEventListener('animationstart', function(ev, callbacks, l, i) {
        callbacks = animationCallbacks[ev.animationName];

        // exit if callbacks haven't been registered
        if (!callbacks) return;

        // stop other callbacks from firing
        ev.stopImmediatePropagation();

        // iterate through callbacks
        l = callbacks.length;
        for (i=0; i < l; i++) callbacks[i](ev.target);
      }, true);

      // add stylesheet to document
      styleEl = doc.createElement('style');
      head.insertBefore(styleEl, head.firstChild);
      styleSheet = styleEl.sheet;
      cssRules = styleSheet.cssRules;
    }

    // listify argument and add css rules/ cache callbacks
    (isArray(cssSelectors) ? cssSelectors : [cssSelectors])
      .map(function(selector, animId, isCustomName) {
        animId = selectorToAnimationMap[selector];

        if (!animId) {
          isCustomName = selector[0] == '!';

          // define animation name and add to map
          selectorToAnimationMap[selector] = animId =
            isCustomName ? selector.slice(1) : 'sentinel-' +
            Math.random().toString(16).slice(2);

          // add keyframe rule
          cssRules[styleSheet.insertRule(
            '@keyframes ' + animId +
              '{from{transform:none;}to{transform:none;}}',
            cssRules.length)]
            ._id = selector;

          // add selector animation rule
          if (!isCustomName) {
            cssRules[styleSheet.insertRule(
              selector + '{animation-duration:0.0001s;animation-name:' +
                animId + ';}',
              cssRules.length)]
              ._id = selector;
          }

          // add to map
          selectorToAnimationMap[selector] = animId;
        }

        // add to callbacks
        (animationCallbacks[animId] = animationCallbacks[animId] || [])
          .push(callback);
      });
  },
  /**
   * Remove watcher.
   * @param {array} cssSelectors - List of CSS selector strings
   * @param {Function} callback - The callback function (optional)
   */
  off: function(cssSelectors, callback) {
    // listify argument and iterate through rules
    (isArray(cssSelectors) ? cssSelectors : [cssSelectors])
      .map(function(selector, animId, callbackList, i) {
        // get animId
        if (!(animId = selectorToAnimationMap[selector])) return;

        // get callbacks
        callbackList = animationCallbacks[animId];

        // remove callback from list
        if (callback) {
          i = callbackList.length;

          while (i--) {
            if (callbackList[i] === callback) callbackList.splice(i, 1);
          }
        } else {
          callbackList = [];
        }

        // exit if callbacks still exist
        if (callbackList.length) return;

        // clear cache and remove css rules
        i = cssRules.length;

        while (i--) {
          if (cssRules[i]._id == selector) styleSheet.deleteRule(i);
        }

        delete selectorToAnimationMap[selector];
        delete animationCallbacks[animId];
      });
  },
  /**
   * Reset watchers and cache
   */
  reset: function() {
    selectorToAnimationMap = {};
    animationCallbacks = {};
    if (styleEl) styleEl.parentNode.removeChild(styleEl);
    styleEl = 0;
  }
};

}));


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

var _constructorName = __webpack_require__(185);

var _constructorName2 = _interopRequireDefault(_constructorName);

var _get2 = __webpack_require__(37);

var _get3 = _interopRequireDefault(_get2);

var _set2 = __webpack_require__(146);

var _set3 = _interopRequireDefault(_set2);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

/**
 * @name 		SWatcher
 * This class allows you to easily monitor some object properties and get the new and old value of it
 *
 * @example 	js
 * // create the watcher instance
 * const watcher = new SWatcher();
 *
 * // object to watch
 * let myObject = {
 * 		title : 'Hello World'
 * };
 *
 * // watch the object
 * watcher.watch(myObject, 'title', (newVal, oldVal) => {
 *  	// do something when the title changes
 * });
 *
 * // update the title
 * myObject.title = 'Hello Universe';
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */
var SWatcher = function () {

	/**
  * @constructor
  */
	function SWatcher() {
		_classCallCheck(this, SWatcher);

		this._watchStack = {};
	}

	/**
  * Destroy the watcher
  */

	// static setters = {
	// 	CSSStyleDeclaration : (obj, property, value) => {
	// 		obj.setProperty(property, value);
	// 	}
	// }

	/**
  * Watch stack
  * @type 		{Object}
  */

	_createClass(SWatcher, [{
		key: 'destroy',
		value: function destroy() {}
		// @TODO watcher destroy implementation


		/**
   * Internal implementation of the defineProp
   * @param 		{Object} 	obj 		The object to watch
   * @param 		{String} 	property 	The property of the object to watch
   * @param 		{Mixed} 	value 		The initial value of the property
   * @param 		{String} 	objPath 	The object property path to watch
   */

	}, {
		key: '_defineProp',
		value: function _defineProp(obj, property, value, objPath) {
			var _this2 = this;

			var descriptor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

			// do not define multiple time the description
			if (this._watchStack[objPath]) return;

			// store the current value
			var val = value;
			var currentDescriptor = Object.getOwnPropertyDescriptor(obj.prototype || obj, property);

			// custom setter check
			var _set = function _set(value) {
				// check if have a custom setter for this object
				// if (customSetter) {
				// 	customSetter(obj, property, value);
				// 	val = value;
				// }
				// descriptor
				if (currentDescriptor && currentDescriptor.set) {
					var ret = currentDescriptor.set(value);
					if (ret) {
						val = ret;
					} else {
						val = currentDescriptor.get();
					}
				} else {
					val = value;
				}

				// apply the proxy for arrays, etc...
				val = _this2._applyProxy(val, objPath, function (newVal) {
					val = newVal;
				});
			};

			// get the setter
			// let customSetter;
			// for (let name in SWatcher.setters) {
			// 	if (__constructorName(obj) === name) {
			// 		customSetter = SWatcher.setters[name];
			// 		break;
			// 	}
			// }

			// set the value
			_set(value);

			// make sure we have the good currentDescriptor
			var d = Object.getOwnPropertyDescriptor(obj, property);
			Object.defineProperty(obj, property, {
				get: function get() {
					var _val = val;
					if (currentDescriptor && currentDescriptor.get) {
						_val = currentDescriptor.get();
					}
					if (descriptor && descriptor.get) {
						_val = descriptor.get(_val);
					}
					return _val;
				},
				set: function set(v) {
					var oldValue = val;
					if (descriptor && descriptor.set) {
						v = descriptor.set(v);
					}
					// internal set to use the good setter
					_set(v);
					// _notify of new update
					_this2._notify(objPath, val, oldValue);
				},
				configurable: descriptor && descriptor.configurable !== undefined ? descriptor.configurable : currentDescriptor && currentDescriptor.configurable !== undefined ? currentDescriptor.configurable : false,
				enumarable: descriptor && descriptor.enumarable !== undefined ? descriptor.enumarable : currentDescriptor && currentDescriptor.enumarable !== undefined ? currentDescriptor.enumarable : true
				// writable : currentDescriptor && currentDescriptor.writable !== undefined ? currentDescriptor.writable : true
			});
		}

		/**
   * Override some array methods to be able to notify of changes
   * @param 		{Array} 	array 			The array to process
   * @param 		{Array} 	methods 		The methods to override
   * @param 		{String} 	objPath 		The object property path to watch
   * @param 		{Function} 	setValueCb 		A callback function that will set the updated value
   */

	}, {
		key: '_overrideArrayMethod',
		value: function _overrideArrayMethod(array, methods, objPath, setValueCb) {
			var _this = this;

			// grab the old value
			var oldVal = array.slice(0);

			// loop on each methods to override
			methods.forEach(function (method) {
				array[method] = function () {
					// array items info object
					var updateInfo = {
						type: Array,
						method: method
					};
					if (method === 'push' || method === 'unshift' || method === 'concat') {
						updateInfo.addedItems = Array.prototype.slice.call(arguments);
					} else if (method === 'pop') {
						updateInfo.removedItems = [oldVal[oldVal.length - 1]];
					} else if (method === 'shift') {
						updateInfo.removedItems = [oldVal[0]];
					}
					// @TODO Check and add missed methods to watch array
					// apply the push
					var ret = Array.prototype[method].apply(this, arguments);
					// set value callback
					setValueCb(this);
					// _notify
					_this._notify(objPath, this, oldVal, updateInfo);
					// return the new value
					return ret;
				};
			});
		}

		/**
   * Apply a proxy on the variable to detect changes
   * on arrays, etc...
   * @param 		{Mixed} 	value 		The value on which to apply the proxy
   * @param 		{String} 	objPath 	The object property path to watch
   * @param 		{Function} 	setValueCb 	A function that will be responsible to set the new value intarnally
   * @return 		{Mixed} 				Return the value
   */

	}, {
		key: '_applyProxy',
		value: function _applyProxy(value, objPath, setValueCb) {
			// if is an array
			if (value instanceof Array) {
				// override methods
				this._overrideArrayMethod(value, ['push', 'splice', 'pop', 'shift', 'unshift', 'reverse', 'sort', 'concat'], objPath, setValueCb);
			}
			return value;
		}

		/**
   * Watch something on an object
   * @param 		{Object} 		object 		The object to watch
   * @param 		{String} 		path 		The property path to watch on the object
   * @param 		{Function} 		cb 			The callback called when the property is updated
   */

	}, {
		key: 'watch',
		value: function watch(object, path, cb) {
			var _this3 = this;

			var descriptor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

			// split the path by ',' to watch multiple properties
			if (typeof path === 'string') {
				path = path.split(',');
			}
			if (!path instanceof Array) {
				throw "The 'path' parameter has to be a string or an array...";
			}
			// loop on each path to watch
			path.forEach(function (p) {
				_this3._watch(object, p.trim(), cb, descriptor);
			});
		}

		/**
   * Internal watch$
   * @param 		{Object} 		object 		The object to watch
   * @param 		{String} 		path 		The property path to watch on the object
   * @param 		{Function} 		cb 			The callback called when the property is updated
   */

	}, {
		key: '_watch',
		value: function _watch(object, path, cb) {
			var descriptor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

			// check if the path parameter has already a descriptor
			var split = path.split('.');
			var obj = object;
			var property = null;
			if (split.length > 1) {
				property = split.pop();
				obj = (0, _get3.default)(object, split.join('.'));
			} else {
				property = split[0];
			}
			var currentValue = null;
			currentValue = (0, _get3.default)(object, path);

			// if is undefined, create the value at null
			if (obj === undefined || currentValue === undefined) {
				(0, _set3.default)(obj, path, null);
				// _set(this, split.join('.'),null);
				// throw `It's not possible to watch the property ${path} cause it does not exist...`;
			};

			// define the property proxy
			this._defineProp(obj, property, currentValue, path, descriptor);

			// register new watch
			if (!this._watchStack[path]) {
				this._watchStack[path] = [];
			}
			this._watchStack[path].push(cb);
		}

		/**
   * Tell that something has changed
   * @param 		{String} 		path 		The object property path that has been updated
   * @param 		{Mixed} 		newValue 	The new property value
   * @param 		{Mixed} 		oldValue 	The old property value
   * @param 		{Object} 		[updateInfo=null] 	An object that add information about the update like addedItems for array, etc...
   */

	}, {
		key: '_notify',
		value: function _notify(path, newValue, oldValue) {
			var updateInfo = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

			if (this._watchStack[path] !== undefined && newValue !== oldValue) {
				this._watchStack[path].forEach(function (cb) {
					cb(newValue, oldValue, updateInfo);
				});
			}
		}
	}]);

	return SWatcher;
}();

exports.default = SWatcher;

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
	return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var _extends = Object.assign || function (target) {
	for (var i = 1; i < arguments.length; i++) {
		var source = arguments[i];for (var key in source) {
			if (Object.prototype.hasOwnProperty.call(source, key)) {
				target[key] = source[key];
			}
		}
	}return target;
};

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

var _mixwith = __webpack_require__(53);

var _autoCast = __webpack_require__(51);

var _autoCast2 = _interopRequireDefault(_autoCast);

var _extend2 = __webpack_require__(140);

var _extend3 = _interopRequireDefault(_extend2);

var _camelize = __webpack_require__(52);

var _camelize2 = _interopRequireDefault(_camelize);

var _uncamelize = __webpack_require__(26);

var _uncamelize2 = _interopRequireDefault(_uncamelize);

var _upperFirst = __webpack_require__(188);

var _upperFirst2 = _interopRequireDefault(_upperFirst);

var _fastdom = __webpack_require__(15);

var _fastdom2 = _interopRequireDefault(_fastdom);

var _dispatchEvent = __webpack_require__(24);

var _dispatchEvent2 = _interopRequireDefault(_dispatchEvent);

var _whenInViewport = __webpack_require__(180);

var _whenInViewport2 = _interopRequireDefault(_whenInViewport);

var _whenVisible = __webpack_require__(50);

var _whenVisible2 = _interopRequireDefault(_whenVisible);

var _prependChild = __webpack_require__(174);

var _prependChild2 = _interopRequireDefault(_prependChild);

var _SWatcher = __webpack_require__(163);

var _SWatcher2 = _interopRequireDefault(_SWatcher);

var _propertyProxy = __webpack_require__(186);

var _propertyProxy2 = _interopRequireDefault(_propertyProxy);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

__webpack_require__(60).polyfill();

// require('proxy-polyfill/proxy.min');

__webpack_require__(182);
__webpack_require__(183);
__webpack_require__(181);

// require('document-register-element');

/**
 * @name 		SWebComponent
 * @extends 	HTMLElement
 * Base class that abstract a lot of dirty work in order to create nice and clean webcomponents.
 * Features:
 * - Listen for attributes changes
 * - Mount the component at a certain point in time (inViewport, visible, etc...)
 * - **Automatically cast the attributes** to their proper js variable types (Array, Object, String, etc...)
 * - **Physical props** : Specify some props that will ALWAYS be present as attribute on the component for styling purpose
 * - Define some **default CSS** that will be injected in the head automatically
 * - Specify some **required props**
 * - **Full lifecycle management**:
 * 	- componentCreated
 * 	- componentWillMount
 * 	- componentMount
 * 	- componentDidMount
 * 	- componentWillReceiveProp
 * 	- componentWillReceiveProps
 * 	- componentWillUpdate
 * 	- render
 * 	- componentDidUpdate
 * 	- componentWillUnmount
 * 	- componentUnmount
 * 	- componentDidUnmount
 * - **Mount dependencies** : This will allows you to set some promises that havwe to be resolved before mounting the component
 *
 * @example 	js
 * import SWebComponent from 'coffeekraken-sugar/js/core/SWebComponent'
 * class MyCoolComponent extends SWebComponent {
 *
 *	\/**
 * 	 * Default props
 * 	 * @definition 		SWebComponent.defaultProps
 * 	 * @protected
 * 	 *\/
 * 	static get defaultProps() {
 * 		return {
 * 		};
 * 	}
 *
 * 	\/**
 * 	 * Css
 * 	 * @protected
 * 	 *\/
 * 	static defaultCss(componentName, componentNameDash) {
 * 		return `
 * 			${componentNameDash} {
 * 				display : block;
 * 			}
 * 		`;
 * 	}
 *
 * 	\/**
 * 	 * Component will mount
 *  	 * @definition 		SWebComponent.componentWillMount
 * 	 * @protected
 * 	 *\/
 * 	componentWillMount() {
 * 		super.componentWillMount();
 * 	}
 *
 * 	\/**
 * 	 * Mount component
 * 	 * @definition 		SWebComponent.componentMount
 * 	 * @protected
 * 	 *\/
 * 	componentMount() {
 * 		super.componentMount();
 * 	}
 *
 * 	\/**
 * 	 * Component unmount
 * 	 * @definition 		SWebComponent.componentUnmount
 * 	 * @protected
 * 	 *\/
 * 	componentUnmount() {
 * 		super.componentUnmount();
 * 	}
 *
 * 	\/**
 * 	 * Component will receive prop
 * 	 * @definition 		SWebComponent.componentWillReceiveProp
 * 	 * @protected
 * 	 *\/
 * 	componentWillReceiveProp(name, newVal, oldVal) {
 * 		switch(name) {
 * 		}
 * 	}
 *
 * 	\/**
 * 	 * Render the component
 * 	 * Here goes the code that reflect the this.props state on the actual html element
 * 	 * @definition 		SWebComponent.render
 * 	 * @protected
 * 	 *\/
 * 	render() {
 * 		super.render();
 * 	}
 * }
 *
 * // define your component
 * MyCoolComponent.define('my-cool-component', MyCoolComponent);
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */

if (!window.sugar) window.sugar = {};
if (!window.sugar._webComponentsClasses) window.sugar._webComponentsClasses = {};
if (!window.sugar._webComponentsDefaultProps) window.sugar._webComponentsDefaultProps = {};
if (!window.sugar._webComponentsDefaultCss) window.sugar._webComponentsDefaultCss = {};

var SWebComponentMixin = (0, _mixwith.Mixin)(function (superclass) {
	return function (_superclass) {
		_inherits(_class2, _superclass);

		_createClass(_class2, [{
			key: 'defaultProps',

			/**
    * Get the default props for this particular instance
    * @type  		{Object}
    */
			get: function get() {

				// check if default props in cache to avoid multiple time
				// computing
				if (this._defaultPropsCache) return this._defaultPropsCache;

				// compute
				var props = window.sugar._webComponentsClasses[this.componentName].defaultProps;
				var comp = window.sugar._webComponentsClasses[this.componentName];
				while (comp) {
					if (comp.defaultProps) {
						props = _extends({}, comp.defaultProps, props);
					}
					if (comp._defaultProps) {
						props = _extends({}, props, comp._defaultProps);
					}
					comp = Object.getPrototypeOf(comp);
				}
				// extend with default props stored in the component default props stack by tagname
				if (window.sugar._webComponentsDefaultProps[this.componentName]) {
					props = _extends({}, props, window.sugar._webComponentsDefaultProps[this.componentName]);
				}

				// save in cache
				this._defaultPropsCache = Object.assign({}, props);

				// return props
				return props;
			}

			/**
    * Return an array of props to set on the dom
    * @return 		{Array}
    */

		}, {
			key: 'physicalProps',

			/**
    * Get physical props for this particular instance
    * @return 		{Array} 			The physical props array
    */
			get: function get() {

				if (this._physicalPropsCache) return this._physicalPropsCache;

				var props = window.sugar._webComponentsClasses[this.componentName].physicalProps;
				var comp = window.sugar._webComponentsClasses[this.componentName];
				while (comp) {
					if (comp.physicalProps) {
						comp.physicalProps.forEach(function (prop) {
							if (props.indexOf(prop) === -1) {
								props.push(prop);
							}
						});
					}
					comp = Object.getPrototypeOf(comp);
				}

				this._physicalPropsCache = props;

				return props;
			}

			/**
    * Return an array of required props to init the component
    * @return 		{Array}
    */

		}, {
			key: 'requiredProps',

			/**
    * Get the required props array for this particular instance
    * @return 		{Array} 			An array of required props
    */
			get: function get() {

				if (this._requiredPropsCache) return this._requiredPropsCache;

				var props = window.sugar._webComponentsClasses[this.componentName].requiredProps;
				var comp = window.sugar._webComponentsClasses[this.componentName];
				while (comp) {
					if (comp.requiredProps) {
						comp.requiredProps.forEach(function (prop) {
							if (props.indexOf(prop) === -1) {
								props.push(prop);
							}
						});
					}
					comp = Object.getPrototypeOf(comp);
				}

				this._requiredPropsCache = props;

				return props;
			}

			/**
    * Specify the default css for the component
    * @param 		{String} 		componentName 		The camelcase component name
    * @param 		{String} 		componentNameDash 	The dashcase component name
    * @return 		{String} 							The default css for the component
    */

		}, {
			key: 'defaultCss',

			/**
    * Get the default css of the component
    * @type 		{String}
    */
			get: function get() {

				if (this._defaultCssCache) return this._defaultCssCache;

				var css = '';
				var comp = window.sugar._webComponentsClasses[this.componentName];
				while (comp) {
					if (comp.defaultCss) {
						css += comp.defaultCss(this.componentName, this.componentNameDash);
					}
					comp = Object.getPrototypeOf(comp);
				}

				this._defaultCssCache = css;

				return css;
			}

			/**
    * Return an array of props to set on the dom
    * @type 		{Array}
    */

		}, {
			key: 'mountDependencies',

			/**
    * Get an array of promises to resolve before mounting the component.
    * @type 		{Array<Promise>}
    */
			get: function get() {
				var _this2 = this;

				var deps = [];
				var comp = window.sugar._webComponentsClasses[this.componentName];
				while (comp) {
					if (comp.mountDependencies) {
						comp.mountDependencies.forEach(function (dep) {
							if (deps.indexOf(dep) === -1) {
								deps.push(dep);
							}
						});
					}
					comp = Object.getPrototypeOf(comp);
				}

				// props mount dependencies
				deps = deps.concat(this.props.mountDependencies);
				var finalDeps = [];
				deps.forEach(function (dep) {
					if (typeof dep === 'function') {
						dep = dep.bind(_this2);
						dep = dep();
					}
					finalDeps.push(dep);
				});
				return finalDeps;
			}

			/**
    * Constructor
    * @protected
    */

		}], [{
			key: 'define',

			/**
    * Define the new web component
    * @param 			{String} 			name 		The name of the component
    * @param 			{SWebComponent} 	component 	The component class
    * @param 			{Object|String}		ext 		An object or string of base HTMLElement to extend
    */
			value: function define(name, component) {
				var ext = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

				var componentName = (0, _upperFirst2.default)((0, _camelize2.default)(name));
				var componentNameDash = name;

				if (window.sugar._webComponentsClasses[componentName]) return;
				window.sugar._webComponentsClasses[componentName] = component;

				// register the webcomponent
				if (document.registerElement) {
					document.registerElement(name, {
						prototype: component.prototype,
						extends: ext
					});
				} else if (window.customElements) {
					window.customElements.define(name, component, {
						extends: ext
					});
				} else {
					throw 'Your browser does not support either document.registerElement or window.customElements.define webcomponents specification...';
				}

				// create a proxy factory
				var webcomponent = function webcomponent() {
					var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

					if (ext) {
						return document.createElement(ext, name).setProps(props);
					}
					return document.createElement(name).setProps(props);
				};

				// fix for firefox and surely other crapy browser...
				// this make sur that the (static) methods of the component
				// are present on the webcomponent itself
				Object.keys(component).forEach(function (key) {
					if (!webcomponent[key]) {
						webcomponent[key] = component[key];
					}
				});

				// handle css
				component._injectDefaultCss(component, componentName, componentNameDash);

				// return the webcomponent instance
				return webcomponent;
			}

			/**
    * Inject css into html
    * @param 		{HTMLElement}	componentClass 		The component class for which to inject the base css
    * @param 		{String} 		componentName 		The component name
    * @param 		{String} 		componentNameDash 	The dash formated component name
    */

		}, {
			key: '_injectDefaultCss',
			value: function _injectDefaultCss(componentClass, componentName, componentNameDash) {
				// check if component has a css to be injected into the page
				if (window.sugar._webComponentsDefaultCss[componentName] === undefined) {
					var css = '';
					var comp = componentClass;
					while (comp) {
						if (comp.defaultCss) {
							css += comp.defaultCss(componentName, componentNameDash);
						}
						comp = Object.getPrototypeOf(comp);
					}
					if (css) {
						css = css.replace(/[\s]+/g, ' ');
						window.sugar._webComponentsDefaultCss[componentName] = css;
						// fastdom.mutate(() => {
						var styleElm = document.createElement('style');
						styleElm.setAttribute('name', componentName);
						styleElm.innerHTML = css;
						(0, _prependChild2.default)(styleElm, document.head);
						// document.head.appendChild(styleElm);
						// });
					} else {
						window.sugar._webComponentsDefaultCss[componentName] = false;
					}
				}
			}

			/**
    * Internal store for all the props of the component
    * Props are actual computed props with attributes
    * @type 		{Object}
    */

			/**
    * Store all the props of the component
    * Props are actual computed props with attributes
    * @type 		{Object}
    */

		}, {
			key: 'setDefaultProps',

			/**
    * Set some default props for a specific component
    * @param 		{Object} 		props 			A props object to set
    * @param 		{String} 		[tagname=null] 	The tagname of the component you want to setting up
    * @author 		Olivier Bossel <olivier.bossel@gmail.com>
    */
			value: function setDefaultProps(props) {
				var tagname = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

				// if a tagname is specified, we store the default props for a
				// particular tagname
				if (tagname) {
					tagname = [].concat(tagname);
					tagname.forEach(function (tag) {
						tag = (0, _upperFirst2.default)((0, _camelize2.default)(tag));
						window.sugar._webComponentsDefaultProps[tag] = _extends({}, window.sugar._webComponentsDefaultProps[tag] || {}, props);
					});
				} else {
					var proto = this;
					proto._defaultProps = _extends({}, proto._defaultProps || {}, props);
				}
			}
		}, {
			key: 'defaultCss',
			value: function defaultCss(componentName, componentNameDash) {
				return '';
			}
		}, {
			key: 'defaultProps',

			/**
    * Return the default props for the component.
    * Need to take care of the passed props parameter and mix it at the
    * end of your default props
    *
    * @type 	{Object}
    * @example
    * getDefaultProps(props = {}) {
    * 		return super.getDefaultProps({
    * 			myCoolProp : null,
    * 			...props
    * 		});
    * }
    *
    * @author 		Olivier Bossel <olivier.bossel@gmail.com>
    */
			get: function get() {
				return {
					mountWhen: null,
					mountDependencies: [],
					unmountTimeout: 500
				};
			}
		}, {
			key: 'physicalProps',
			get: function get() {
				return [];
			}
		}, {
			key: 'requiredProps',
			get: function get() {
				return [];
			}
		}, {
			key: 'mountDependencies',
			get: function get() {
				return [];
			}
		}]);

		function _class2(_) {
			var _temp, _this, _ret;

			_classCallCheck(this, _class2);

			return _ret = ((_ = (_temp = (_this = _possibleConstructorReturn(this, (_class2.__proto__ || Object.getPrototypeOf(_class2)).call(this, _)), _this), _this._props = {}, _this.props = {}, _temp)).init(), _), _possibleConstructorReturn(_this, _ret);
		}

		_createClass(_class2, [{
			key: 'init',
			value: function init() {
				this.createdCallback();
			}

			/**
    * When the component is created.
    * This is called even if the component is not attached in the DOM tree
    * @protected
    */

		}, {
			key: 'createdCallback',
			value: function createdCallback() {
				var _this3 = this;

				// create the "s" namespace
				this.s = {};

				// props
				this.props = {};

				// track the lifecyle
				this._lifecycle = {
					componentWillMount: false,
					componentMount: false,
					componentDidMount: false,
					componentWillUnmount: false,
					componentUnmount: false,
					componentDidUnmount: false
				};

				// init watcher
				this._sWatcher = new _SWatcher2.default();

				// set the componentName
				var sourceName = this.getAttribute('is') || this.tagName.toLowerCase();
				this.componentNameDash = this._componentNameDash = sourceName;
				this.componentName = this._componentName = (0, _upperFirst2.default)((0, _camelize2.default)(sourceName));

				// default props init
				this._props = Object.assign({}, this.defaultProps, this.props);

				// init properties proxy object
				if (window.Proxy) {
					this.props = new Proxy(this._props, {
						set: function set(target, property, value) {
							_this3.setProp(property, value);
						},
						get: function get(target, property) {
							return target[property];
						}
					});
				} else {
					this.props = this._props;
				}

				// created callback
				this.componentCreated();
			}

			/**
    * When the element is attached in the DOM tree
    * @protected
    */

		}, {
			key: 'connectedCallback',
			value: function connectedCallback() {
				var _this4 = this;

				// if not already passed through the created process
				if (!this._lifecycle) this.createdCallback();

				// component will mount only if part of the active document
				this.componentWillMount();

				// clear the unmount timeout
				clearTimeout(this._unmountTimeout);

				// update attached status
				this._componentAttached = true;

				// stop here if already mounted once
				if (this._lifecycle.componentMount) return;

				// wait until dependencies are ok
				this._whenMountDependenciesAreOk().then(function () {
					// switch on the mountWhen prop
					switch (_this4.props.mountWhen) {
						case 'inViewport':
						case 'isInViewport':
							(0, _whenInViewport2.default)(_this4).then(function () {
								_this4._mountComponent();
							});
							break;
						case 'isMouseover':
						case 'mouseover':
							_this4.addEventListener('mouseover', _this4._onMouseoverComponentMount.bind(_this4));
							break;
						case 'isVisible':
						case 'visible':
							(0, _whenVisible2.default)(_this4).then(function () {
								_this4._mountComponent();
							});
							break;
						default:
							// mount component directly
							_this4._mountComponent();
							break;
					}
				});
			}
		}, {
			key: 'attachedCallback',
			value: function attachedCallback() {
				this.connectedCallback();
			}

			/**
    * When any of the component attribute changes
    * @param 		{String} 		attribute 		The attribute name that has changed
    * @param 		{String}		oldVal 			The previous attribute value
    * @param 		{String} 		newVal 			The new attribute value
    * @protected
    */

		}, {
			key: 'attributeChangedCallback',
			value: function attributeChangedCallback(attribute, oldVal, newVal) {

				// stop if component has not been mounted
				// if ( ! this._lifecycle.componentWillMount) {
				// 	return;
				// }

				// keep an original attribute name
				var _attribute = attribute;

				// process the attribute to camelCase
				attribute = (0, _camelize2.default)(attribute);

				// if the property is not a real property
				if (!this.shouldComponentAcceptProp(attribute)) return;

				// cast the new val
				newVal = (0, _autoCast2.default)(newVal);

				// handle the case when newVal is undefined (added attribute whithout any value)
				if (newVal === undefined && this.hasAttribute(_attribute)) {
					newVal = true;
				} else if (newVal === null && !this.hasAttribute(_attribute) && this.props[attribute] === false) {
					// the attribute has been removed and
					// the prop is already to false
					return;
				}

				// do nothing if the value is already the same
				if (this.props[attribute] === newVal) return;

				// set the new prop
				this.setProp(attribute, newVal);
			}

			/**
    * Called directly when the component is created. This act like a constructor.
    *
    * @example
    * componentCreated() {
    * 		// call parent method
    * 		super.componentCreated();
    * 		// do something here...
    * }
    *
    * @author 		Olivier Bossel <olivier.bossel@gmail.com>
    */

		}, {
			key: 'componentCreated',
			value: function componentCreated() {}

			/**
    * Method called before the component will actually mount and BEFORE the the mountDependencies to be resolved or not.
    * This is a good place to do directl when the component is attached in the DOM but before any dependencies are resolved
    *
    * @example
    * componentWillMount() {
    * 		// call parent method
    * 		super.componentWillMount();
    * 		// do something here...
    * }
    *
    * @author 		Olivier Bossel <olivier.bossel@gmail.com>
    */

		}, {
			key: 'componentWillMount',
			value: function componentWillMount() {
				var _this5 = this;

				// protect from mounting multiple times when unecessary
				if (this._lifecycle.componentWillMount) return;

				// update lifecycle state
				this._lifecycle.componentWillMount = true;

				// dispatch event
				this.onComponentWillMount && this.onComponentWillMount();

				// internal properties
				this._nextPropsStack = {};
				this._prevPropsStack = {};
				this._componentAttached = false;
				this._fastdomSetProp = null;

				// compute props
				this._initInitialAttributes();

				// props proxy
				this._initPropsProxy();

				// check the required props
				this.requiredProps.forEach(function (prop) {
					if (!_this5.props[prop]) {
						throw 'The "' + _this5.componentNameDash + '" component need the "' + prop + '" property in order to work';
					}
				});
			}

			/**
    * Method called right after that the component has been added in the dom,
    * after and only if the mountDependencies are resolved
    * and before the initial render.
    *
    * @example
    * componentMount() {
    * 		// call parent method
    * 		super.componentMount();
    * 		// do something here...
    * }
    *
    * @author 		Olivier Bossel <olivier.bossel@gmail.com>
    */

		}, {
			key: 'componentMount',
			value: function componentMount() {
				if (this._lifecycle.componentMount) return;
				// update the lifecycle state
				this._lifecycle.componentMount = true;
				// dispatch event
				this.onComponentMount && this.onComponentMount();
				// mark the component as mounted
				this.setAttribute('mounted', true);
			}

			/**
    * Method called after the initial component render
    *
    * @example
    * componentDidMount() {
    * 		// call parent method
    * 		super.componentDidMount();
    * 		// do something here...
    * }
    *
    * @author 		Olivier Bossel <olivier.bossel@gmail.com>
    */

		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				if (this._lifecycle.componentDidMount) return;
				// update lifecycle state
				this._lifecycle.componentDidMount = true;
				// dispatch event
				this.onComponentDidMount && this.onComponentDidMount();
				// update lifecycle
				this._lifecycle.componentWillUnmount = false;
				this._lifecycle.componentUnmount = false;
				this._lifecycle.componentDidUnmount = false;
			}

			/**
    * Method called right before the render when some props have been updated.
    * This method is not called before the initial render
    *
    * @param 		{Object} 		nextProps 			An object that represent the props that have been updated
    * @param 		{Array} 		nextPropsArray 		An array representation of the nextProps object [{name:...,value:...}]
    *
    * @example
    * componentWillUpdate(nextProps, nextPropsArray) {
    * 		// call parent method
    * 		super.componentWillUpdate(nextProps, nextPropsArray);
    * 		// do something here...
    * }
    *
    * @author 		Olivier Bossel <olivier.bossel@gmail.com>
    */

		}, {
			key: 'componentWillUpdate',
			value: function componentWillUpdate(nextProps) {
				// dispatch event
				this.onComponentWillUpdate && this.onComponentWillUpdate(nextProps);
			}

			/**
    * Apply all the updated that you need in the dom for the component to reflect the props
    *
    * @example
    * render() {
    * 		// call the parent method
    * 		super.render();
    * 		// apply some classes, properties, styles, etc... in the dom
    * 		// in order to reflect the props object state
    * }
    *
    * @author 		Olivier Bossel <olivier.bossel@gmail.com>
    */

		}, {
			key: 'render',
			value: function render() {
				// dispatch event
				this.onComponentRender && this.onComponentRender();
			}

			/**
    * Method called right after the render when some props have been updated.
    * This method is not called after the initial render
    *
    * @param 		{Object} 		prevProps 			An object that represent the props that have been updated
    * @param 		{Array} 		prevPropsArray 		An array representation of the prevProps object [{name:...,value:...}]
    *
    * @example
    * componentDidUpdate(prevProps, prevPropsArray) {
    * 		// call parent method
    * 		super.componentDidUpdate(prevProps, prevPropsArray);
    * 		// do something here...
    * }
    *
    * @author 		Olivier Bossel <olivier.bossel@gmail.com>
    */

		}, {
			key: 'componentDidUpdate',
			value: function componentDidUpdate(prevProps, prevPropsArray) {
				// dispatch event
				this.onComponentDidUpdate && this.onComponentDidUpdate(prevProps, prevPropsArray);
			}

			/**
    * Method called before the component will unmount cause it has been removed from the DOM tree and that the props.unmountTimeout is passed.
    *
    * @example
    * componentWillUnmount() {
    * 		// call parent method
    * 		super.componentWillUnmount();
    * 		// do something here...
    * }
    *
    * @author 		Olivier Bossel <olivier.bossel@gmail.com>
    */

		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				if (this._lifecycle.componentWillUnmount) return;
				// update lifecycle state
				this._lifecycle.componentWillUnmount = true;
				// dispatch event
				this.onComponentWillUnmount && this.onComponentWillUnmount();
			}

			/**
    * Method called when the component need to unmount itself cause it has been removed from the DOM tree and the props.unmountTimeout is passed.
    *
    * @example
    * componentUnmount() {
    * 		// call parent method
    * 		super.componentUnmount();
    * 		// do something here...
    * }
    *
    * @author 		Olivier Bossel <olivier.bossel@gmail.com>
    */

		}, {
			key: 'componentUnmount',
			value: function componentUnmount() {
				if (this._lifecycle.componentUnmount) return;
				// update lifecycle state
				this._lifecycle.componentUnmount = true;
				// dispatch event
				this.onComponentUnmount && this.onComponentUnmount();
			}

			/**
    * Method called when the component has been unmounted
    *
    * @example
    * componentDidUnmount() {
    * 		// call parent method
    * 		super.componentDidUnmount();
    * 		// do something here...
    * }
    *
    * @author 		Olivier Bossel <olivier.bossel@gmail.com>
    */

		}, {
			key: 'componentDidUnmount',
			value: function componentDidUnmount() {
				if (this._lifecycle.componentDidMount) return;
				// update lifecycle state
				this._lifecycle.componentDidUnmount = true;
				// destroy things
				this._sWatcher.destroy();
				// dispatch event
				this.onComponentDidUnmount && this.onComponentDidUnmount();
			}

			/**
    * Check all the mountDependencies and try to resolve them.
    * @return 			{Promise} 				A promise that will be resolved when the dependencies are resolved
    */

		}, {
			key: '_whenMountDependenciesAreOk',
			value: function _whenMountDependenciesAreOk() {
				var _this6 = this;

				var promise = new Promise(function (resolve, reject) {
					var deps = _this6.mountDependencies;
					if (!deps.length) {
						resolve();
					} else {
						// resolve all the promises
						Promise.all(deps).then(function () {
							resolve();
						});
					}
				});
				return promise;
			}

			/**
    * Init props proxy.
    * This will create a getter/setter accessor on the item itself
    * that get and update his corresponding props.{name} property
    */

		}, {
			key: '_initPropsProxy',
			value: function _initPropsProxy() {
				var _this7 = this;

				// loop on each props
				for (var key in this.defaultProps) {
					if (this.hasOwnProperty(key) || key in this) {
						if (this.props.debug) {
							console.warn('The component ' + this.componentNameDash + ' has already an "' + key + '" property... This property will not reflect the this.props[\'' + key + '\'] value... Try to use a property name that does not already exist on an HTMLElement...');
						}
						continue;
					}
					(function (key) {
						Object.defineProperty(_this7, key, {
							get: function get() {
								return _this7.props[key];
							},
							set: function set(value) {
								_this7.setProp(key, (0, _autoCast2.default)(value));
							},
							enumarable: true
						});
					})(key);
				}
			}

			/**
    * On mouse over
    */

		}, {
			key: '_onMouseoverComponentMount',
			value: function _onMouseoverComponentMount() {
				this._mountComponent();
				this.removeEventListener('mouseover', this._onMouseoverComponentMount);
			}

			/**
    * Internal mount component method
    */

		}, {
			key: '_mountComponent',
			value: function _mountComponent() {
				var _this8 = this;

				// wait next frame
				_fastdom2.default.clear(this._fastdomSetProp);
				this._fastdomSetProp = this.mutate(function () {
					// sometimes, the component has been unmounted between the
					// fastdom execution, so we stop here if it's the case
					if (!_this8._componentAttached) return;
					// init
					_this8.componentMount();
					// render
					_this8.render();
					// component did mount
					_this8.componentDidMount();
				});
			}

			/**
    * Detect when the component is detached from the DOM tree.
    * @protected
    */

		}, {
			key: 'disconnectedCallback',
			value: function disconnectedCallback() {
				var _this9 = this;

				// update attached status
				this._componentAttached = false;

				// unmount timeout
				clearTimeout(this._unmountTimeout);
				this._unmountTimeout = setTimeout(function () {

					// will unmount
					_this9.componentWillUnmount();
					// wait next frame
					_fastdom2.default.clear(_this9._fastdomSetProp);
					_this9._fastdomSetProp = _this9.mutate(function () {
						// unmount only if the component is mounted
						if (!_this9._lifecycle.componentMount) return;
						// unmount
						_this9.componentUnmount();
						// did unmount
						_this9.componentDidUnmount();
						// update lifecycle
						_this9._lifecycle.componentWillMount = false;
						_this9._lifecycle.componentMount = false;
						_this9._lifecycle.componentDidUnmount = false;
					});
				}, this.props.unmountTimeout);
			}
		}, {
			key: 'detachedCallback',
			value: function detachedCallback() {
				this.disconnectedCallback();
			}

			/**
    * Dispatch an event from the tag with namespaced event name
    * This will dispatch actually two events :
    * 1. {tagName}.{name} : example : s-datepicker.change
    * 2. {name} 		   : example : change
    *
    * @param		{String} 		name 		The event name
    * @param 		{Mixed} 		data 		Some data to attach to the event
    */

		}, {
			key: 'dispatchComponentEvent',
			value: function dispatchComponentEvent(name) {
				var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
				var fromElm = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;

				(0, _dispatchEvent2.default)(fromElm, name, data);
				(0, _dispatchEvent2.default)(fromElm, this.tagName.toLowerCase() + '.' + name, data);
			}

			/**
    * Set a bunch of properties at once
    * @param 			{Object} 		[props={}] 		An object of props to set
    */

		}, {
			key: 'setProps',
			value: function setProps() {
				var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

				// set each props
				for (var key in props) {
					this.setProp(key, props[key]);
				}
				return this;
			}

			/**
    * Set a property
    * @param 			{String} 		prop 			The property name to set
    * @param 			{Mixed} 		value 			The new property value
    */

		}, {
			key: 'setProp',
			value: function setProp(prop, value) {

				// save the oldVal
				var oldVal = this.props[prop];

				// stop if same value
				if (oldVal === value) return;

				// set the prop (duplicate and assign again the whole object to avoid issues with Proxy polyfill)
				// const newProps = Object.assign({}, this._props);
				// newProps[prop] = value;
				// this._props = newProps;
				this._props[prop] = value;

				// handle new value
				this._handleNewPropValue(prop, value, oldVal);
			}

			/**
    * Get a property
    * @param 		{String} 		prop 			The property name to get
    * @return 		{Mixed} 						The property value or null
    */

		}, {
			key: 'getProp',
			value: function getProp(prop) {
				return this.props[prop];
			}

			/**
    * Handle new property
    * @param 		{String} 		prop 		The property name
    * @param 		{Mixed} 		newVal 		The new property value
    * @param 		{Mixed}			oldVal 		The old property value
    */

		}, {
			key: '_handleNewPropValue',
			value: function _handleNewPropValue(prop, newVal, oldVal) {
				var _this10 = this;

				// if the component is not mounted
				// we do nothing here...
				if (!this.isComponentMounted()) return;

				// create the stacks
				this._prevPropsStack[prop] = oldVal;
				this._nextPropsStack[prop] = newVal;

				// component will receive prop
				this.componentWillReceiveProp(prop, newVal, oldVal);

				// wait till next frame
				_fastdom2.default.clear(this._fastdomSetProp);
				this._fastdomSetProp = _fastdom2.default.mutate(function () {

					// create array version of each stacks
					var nextPropsArray = [],
					    prevPropsArray = [];
					for (var key in _this10._nextPropsStack) {
						var val = _this10._nextPropsStack[key];
						nextPropsArray.push({
							name: key,
							value: val
						});

						// handle physical props
						_this10._handlePhysicalProps(key, val);
					}
					for (var _key in _this10._prevPropsStack) {
						var _val = _this10._prevPropsStack[_key];
						prevPropsArray.push({
							name: _key,
							value: _val
						});
					}

					// call the will reveiveProps if exist
					if (_this10.componentWillReceiveProps) {
						_this10.componentWillReceiveProps(_this10._nextPropsStack, nextPropsArray);
					}

					// should component update
					if (_this10.shouldComponentUpdate && !_this10.shouldComponentUpdate(_this10._nextPropsStack, _this10._prevPropsStack)) return;

					// component will update
					_this10.componentWillUpdate(_this10._nextPropsStack, nextPropsArray);

					// render the component
					_this10.render();

					// component did update
					_this10.componentDidUpdate(_this10._prevPropsStack, prevPropsArray);
				});
			}

			/**
    * Method called when the component will receive new props
    * @param 		{String} 		prop 		The property name
    * @param 		{Mixed} 		newVal 		The new property value
    * @param 		{Mixed}			oldVal 		The old property value
    * @example 	js
    * componentWillReceiveProp(prop, newVal, oldVal) {
    *  	switch(prop) {
    *  		case ...
    *    			// do something...
    * 			break;
    *  	}
    * }
    *
    * @author 		Olivier Bossel <olivier.bossel@gmail.com>
    */

		}, {
			key: 'componentWillReceiveProp',
			value: function componentWillReceiveProp(prop, newVal, oldVal) {}
			// do something


			/**
    * Method that check if a property passed to the component has to be accepted or not.
    * @param 		{String} 			prop 		The property name
    * @return 		{Boolean} 						If true, the property will be accepted, if false, it will not be considered as a property
    */

		}, {
			key: 'shouldComponentAcceptProp',
			value: function shouldComponentAcceptProp(prop) {
				return this.props[prop] !== undefined;
			}

			/**
    * Check if component is mounted
    * @return 			{Boolean} 			true if mounted, false if not
    */

		}, {
			key: 'isComponentMounted',
			value: function isComponentMounted() {
				return this._lifecycle.componentMount;
			}

			/**
    * Watch any data of the component
    * @param 		{String} 		path 		The path from the component root to watch like "props.myCoolProp"
    * @param 		{Function}		cb 			The callback to call when the item has changed
    */

		}, {
			key: 'watch',
			value: function watch(path, cb) {
				this._sWatcher.watch(this, path, cb);
			}

			/**
    * Initiate a new prop. This will add the propertyProxy on the new prop etc...
    * @param 			{String} 			prop 			The property name to init
    */

		}, {
			key: '_initNewProp',
			value: function _initNewProp(prop) {
				var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
			}
			// if (value) {
			// 	this.props[prop] = value;
			// }
			// __propertyProxy(this.props, prop, {
			// 	set : (value) => {
			// 		const oldVal = this.props[prop];
			// 		// handle new prop value
			// 		this._handleNewPropValue(prop, value, oldVal);
			// 		// set the value
			// 		return value;
			// 	},
			// 	enumarable : true
			// }, false);


			/**
    * Handle physical props by setting or not the prop
    * on the dom element as attribute
    * @param 			{String} 			prop 			The property to handle
    * @param 			{Mixed} 			value 			The property value
    * @author 			Olivier Bossel <olivier.bossel@gmail.com>
    */

		}, {
			key: '_handlePhysicalProps',
			value: function _handlePhysicalProps(prop, value) {
				// check if is a physical prop to set it in the dom
				var physicalProps = this.physicalProps;
				if (physicalProps.indexOf(prop) !== -1) {
					// set the prop on the node
					if (value !== 0 && (value === false || value === 'null' || !value)) {
						this.removeAttribute((0, _uncamelize2.default)(prop));
					} else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
						this.setAttribute((0, _uncamelize2.default)(prop), JSON.stringify(value));
					} else if (typeof value === 'function') {
						this.setAttribute((0, _uncamelize2.default)(prop), 'fn');
					} else {
						this.setAttribute((0, _uncamelize2.default)(prop), value);
					}
				}
			}

			/**
    * Compute props by mixing settings with attributes presents on the component
    */

		}, {
			key: '_initInitialAttributes',
			value: function _initInitialAttributes() {
				for (var i = 0; i < this.attributes.length; i++) {
					var attr = this.attributes[i];
					var attrCamelName = (0, _camelize2.default)(attr.name);
					// do not set if it's not an existing prop
					if (!this.shouldComponentAcceptProp(attrCamelName)) continue;
					// the attribute has no value but it is present
					// so we assume the prop value is true
					if (!attr.value) {
						this._props[attrCamelName] = true;
						continue;
					}
					// cast the value
					this._props[attrCamelName] = (0, _autoCast2.default)(attr.value);
				}

				// handle physicalProps
				for (var key in this.props) {
					var value = this.props[key];
					// handle physical props
					this._handlePhysicalProps(key, value);
				}
			}

			/**
    * Mutate the dom using an optimize requestAnimationFrame technique
    * @param 		{Function} 		cb 			The callback to exexute
    */

		}, {
			key: 'mutate',
			value: function mutate(cb) {
				return _fastdom2.default.mutate(cb);
			}

			/**
    * Set a class that will be construct with the componentNameDash,
    * an optional element and modifier
    * @param 	{String} 	[element=null] 		The element name
    * @param 	{String} 	[modifier=null] 	The modifier name
    * @param 	{String} 	[state=null] 		The state name
    * @return 	{String} 						The generated class
    */

		}, {
			key: 'componentClassName',
			value: function componentClassName() {
				var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
				var modifier = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
				var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

				// if the method is BEM
				var sel = this.componentNameDash;
				if (element) {
					sel += '__' + element;
				}
				if (modifier) {
					sel += '--' + modifier;
				}
				if (state) {
					sel += '--' + state;
				}
				return sel;
			}

			/**
    * Get a component selector class built with the passed element, modifier and state parameters
    * @param 	{String} 	[element=null] 		The element name
    * @param 	{String} 	[modifier=null] 	The modifier name
    * @param 	{String} 	[state=null] 		The state name
    * @return 	{String} 						The generated class
    */

		}, {
			key: 'componentSelector',
			value: function componentSelector() {
				var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
				var modifier = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
				var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

				var sel = this.componentClassName(element, modifier, state);
				sel = ('.' + sel).replace(' ', '.');
				return sel;
			}

			/**
    * Check if the passed element has the component class generated by the element and modifier argument
    * @param 	{HTMLElement} 	elm 				The element to check
    * @param 	{String} 		[element=null] 		The element name
    * @param 	{String} 		[modifier=null] 	The modifier name
    * @param 	{String} 		[state=null] 		The state name
    * @return 	{Boolean} 							The check result
    */

		}, {
			key: 'hasComponentClass',
			value: function hasComponentClass(elm) {
				var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
				var modifier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
				var state = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

				// generate the class
				var cls = this.componentSelector(element, modifier, state);
				var _cls = cls.split('.');
				for (var i = 0; i < _cls.length; i++) {
					var cl = _cls[i];
					if (cl && cl !== '') {
						if (!elm.classList.contains(cl)) {
							return false;
						}
					}
				}
				return true;
			}

			/**
    * Add a class on the passed element that will be construct with the componentNameDash,
    * an optional element, modifier and state
    * @param 	{String} 	[element=null] 		The element name
    * @param 	{String} 	[modifier=null] 	The modifier name
    * @param 	{String} 	[state=null] 		The state name
    * @return 	{SComponent}} 			The component itself
    */

		}, {
			key: 'addComponentClass',
			value: function addComponentClass(elm) {
				var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

				var _this11 = this;

				var modifier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
				var state = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

				// if is an array
				if (elm instanceof Array || elm instanceof NodeList) {
					[].forEach.call(elm, function (el) {
						_this11.addComponentClass(el, element, modifier, state);
					});
					return this;
				}

				// get the component class
				var cls = this.componentSelector(element, modifier, state);
				// loop on each classes to add
				cls.split('.').forEach(function (cl) {
					if (cl && cl !== '') {
						_this11.mutate(function () {
							elm.classList.add(cl);
						});
					}
				});
				// return the instance to maintain chainability
				return this;
			}

			/**
    * Remove a class on the passed element that will be construct with the componentNameDash,
    * an optional element, modifier and state
    * @param 	{String} 	[element=null] 		The element name
    * @param 	{String} 	[modifier=null] 	The modifier name
    * @param 	{String} 	[state=null] 		The state name
    * @return 	{SComponent}} 					The component itself
    */

		}, {
			key: 'removeComponentClass',
			value: function removeComponentClass(elm) {
				var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

				var _this12 = this;

				var modifier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
				var state = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

				// if is an array
				if (elm instanceof Array || elm instanceof NodeList) {
					[].forEach.call(elm, function (el) {
						_this12.removeComponentClass(el, element, modifier, state);
					});
					return this;
				}

				// get the component class
				var cls = this.componentSelector(element, modifier, state);
				// loop on each classes to add
				cls.split('.').forEach(function (cl) {
					if (cl && cl !== '') {
						_this12.mutate(function () {
							elm.classList.remove(cl);
						});
					}
				});
				// return the instance to maintain chainability
				return this;
			}
		}]);

		return _class2;
	}(superclass);
});

// Export the mixin class
exports.default = SWebComponentMixin;

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});
exports.default = sNativeWebComponent;

var _mixwith = __webpack_require__(53);

var _SWebComponentMixin = __webpack_require__(164);

var _SWebComponentMixin2 = _interopRequireDefault(_SWebComponentMixin);

function _interopRequireDefault(obj) {
   return obj && obj.__esModule ? obj : { default: obj };
}

function sNativeWebComponent(HTMLElementToExtend) {
   // if (typeof HTMLElementToExtend !== 'function'){
   var _HTMLElementToExtend = function _HTMLElementToExtend() {};
   _HTMLElementToExtend.prototype = HTMLElementToExtend.prototype;
   HTMLElementToExtend = _HTMLElementToExtend;
   // }
   return (0, _mixwith.mix)(HTMLElementToExtend).with(_SWebComponentMixin2.default);
}

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = closest;

var _matches = __webpack_require__(25);

var _matches2 = _interopRequireDefault(_matches);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * Go up the dom three to find the first element that matches the passed selector
 *
 * @name 		closest
 * @param 		{HTMLElement} 					elm  		The element to start on
 * @param 		{String|Function} 				selector 	A css selector to search for or a check function that will be used
 * @return 		{HTMLElement} 								The element found or null
 *
 * @example  	js
 * import closest from 'sugarcss/js/dom/closest'
 * const closestElm = closest(myCoolElement, '.my-cool-class');
 * if (closestElm) {
 * 		// we have found en element that matches the selector
 * }
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */
function closest(elm, selector) {
  elm = elm.parentNode;
  while (elm && elm != document) {
    if (typeof selector === 'function') {
      if (selector(elm)) return elm;
    } else if (typeof selector === 'string' && (0, _matches2.default)(elm, selector)) {
      return elm;
    }
    elm = elm.parentNode;
  }
  return null;
}
window.__closest = closest;

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = closestNotVisible;

var _isVisible = __webpack_require__(48);

var _isVisible2 = _interopRequireDefault(_isVisible);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * Go up the dom three to find the first element that is not visible.
 * Not visible mean that has either an opacity to 0, a visibility to hidden or a display to none
 *
 * @name 		closestNotVisible
 * @param 		{HTMLElement} 					elm  		The element to start on
 * @return 		{HTMLElement} 								The element found or null
 *
 * @example  	js
 * import closestNotVisible from 'sugarcss/js/dom/closestNotVisible'
 * const closestElm = closest(myCoolElement);
 * if (closestElm) {
 * 		// we have found en element is not visible
 * }
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */
function closestNotVisible(elm) {
  elm = elm.parentNode;
  while (elm && elm != document) {
    if (!(0, _isVisible2.default)(elm)) {
      return elm;
    }
    elm = elm.parentNode;
  }
  return false;
}
window.__closestNotVisible = closestNotVisible;

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = imageLoaded;
/**
 * Wait until the passed image is fully loaded
 *
 * @name 		imageLoaded
 * @param 		{HTMLImageElement} 			img  		The image to check the loading state
 * @param 		{Function}					[cb=null] 	An optional callback to call
 * @return 		{Promise} 								The promise that will be resolved
 *
 * @example  	js
 * import imageLoaded from 'sugarcss/js/dom/imageLoaded'
 * imageLoaded(myCoolHTMLImageElement).then((img) => {
 * 		// do something when the image is loaded
 * });
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */
function imageLoaded(img) {
	var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	return new Promise(function (resolve, reject) {
		// check if image is already loaded
		if (img.hasAttribute('src') && img.complete) {
			// resolve promise
			resolve(img);
			// call the callback if exist
			callback && callback(img);
		} else {
			// wait until loaded
			img.addEventListener('load', function (e) {
				// resolve the promise
				resolve(img);
				// callback if exist
				callback && callback(img);
			});
			// listen for error
			img.addEventListener('error', function (e) {
				// reject
				reject(e);
			});
		}
	});
}

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = insertAfter;
/**
 * Insert an HTMLElement after another HTMLElement
 *
 * @name 		insertAfter
 * @param 		{HTMLElement} 				elm  		The element to insert
 * @param 		{HTMLElement} 				refElm 		The element after which to insert the passed element
 *
 * @example  	js
 * import insertAfter from 'sugarcss/js/dom/insertAfter'
 * insertAfter(myElementToInsert, theReferenceElement);
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */
function insertAfter(elm, refElm) {
  // next sibling of ref elm
  var nextSibling = refElm.nextSibling;
  if (!nextSibling) {
    refElm.parentNode.appendChild(elm);
  } else {
    refElm.parentNode.insertBefore(elm, nextSibling);
  }
}

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
	return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

exports.default = isInViewport;
/**
 * Check if the passed HTMLElement is in the viewport or not
 *
 * @name 		isInViewport
 * @param 		{HTMLElement} 				elm  			The element to insert
 * @param 		{Object} 					[offset=50] 	An object of top, right, bottom and left offset used to detect the status or an object with top, right, bottom and left offsets
 * @return 		{Boolean									If the element is in the viewport or not
 *
 * @example  	js
 * import isInViewport from 'sugarcss/js/dom/isInViewport'
 * if (isInViewport(myCoolHTMLElement) {
 * 		// i'm in the viewport
 * }
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */
function isInViewport(elm) {
	var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;

	// handle offset
	var offsetTop = offset;
	var offsetRight = offset;
	var offsetBottom = offset;
	var offsetLeft = offset;
	if ((typeof offset === 'undefined' ? 'undefined' : _typeof(offset)) === 'object') {
		offsetTop = offset.top || 0;
		offsetRight = offset.right || 0;
		offsetBottom = offset.bottom || 0;
		offsetLeft = offset.left || 0;
	}
	var containerHeight = window.innerHeight || document.documentElement.clientHeight;
	var containerWidth = window.innerWidth || document.documentElement.clientWidth;
	var rect = elm.getBoundingClientRect();
	var isTopIn = rect.top - containerHeight - offsetBottom <= 0;
	var isBottomIn = rect.bottom - offsetTop >= 0;
	var isLeftIn = rect.left - containerWidth - offsetRight <= 0;
	var isRightIn = rect.right - offsetLeft >= 0;
	return isTopIn && isBottomIn && isLeftIn && isRightIn;
}

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = mutationObservable;

var _isEqual2 = __webpack_require__(142);

var _isEqual3 = _interopRequireDefault(_isEqual2);

__webpack_require__(151);

var _Observable = __webpack_require__(6);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * Observe mutations on an HTMLElement and get them through the observable subscription
 *
 * @name 		mutationObservable
 * @param 		{HTMLElement} 					target 		The element to observe
 * @param 		{MutationObserverInit} 			settings 	The mutation observer settings
 * @return 		{Observable} 								The mutation observable
 *
 * @example  	js
 * import mutationObservable from 'sugarcss/js/dom/mutationObservable'
 * mutationObservable(myCoolHTMLElement).subscribe((mutation) => {
 * 		// do something with the mutation
 * });
 *
 * @see 		https://developer.mozilla.org/en/docs/Web/API/MutationObserver
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */

var selectorsStack = [];

// save nodes that's have a mutation observer on it
var nodesStack = new Map();

function mutationObservable(target) {
	var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	// detect if already exist
	var currentObservers = nodesStack.get(target);
	if (currentObservers) {
		// loop on current observers
		for (var i = 0; i < currentObservers.length; i++) {
			var _obs = currentObservers[i];
			if ((0, _isEqual3.default)(_obs.settings, settings)) {
				// return the same observer
				return _obs.observable;
			}
		}
	} else {
		currentObservers = [];
	}

	// we don't have any observer for now
	// so create it
	var observable = new _Observable.Observable(function (observer) {

		// create a new observer
		var mutationObserver = new MutationObserver(function (mutations) {
			// loop on mutations
			mutations.forEach(function (mutation) {
				// push mutation
				observer.next(mutation);
			});
		});
		mutationObserver.observe(target, settings);

		// unsubscribe routine
		return function () {
			mutationObserver.disconnect();
		};
	});

	// save the new observable into the stack
	var obs = {
		settings: settings,
		observable: observable
	};
	// add the observer into the stack
	currentObservers.push(obs);
	// save into the stack
	nodesStack.set(target, currentObservers);

	// return the observable
	return observable;
}

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = next;

var _matches = __webpack_require__(25);

var _matches2 = _interopRequireDefault(_matches);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * Browse the passed element next siblings to find the first element that matches the passed selector
 *
 * @name 		next
 * @param 		{HTMLElement} 					elm  		The element to start on
 * @param 		{String} 						selector 	A css selector to search for
 * @return 		{HTMLElement} 								The element found or null
 *
 * @example  	js
 * import next from 'sugarcss/js/dom/next'
 * const nextElm = next(myCoolElement, '.my-cool-class');
 * if (nextElm) {
 * 		// we have found en element that matches the selector
 * }
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */
function next(elm, selector) {
  elm = elm.nextSibling;
  while (elm) {
    if ((0, _matches2.default)(elm, selector)) {
      return elm;
    }
    elm = elm.nextSibling;
  }
  return false;
}

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = offsetParent;

var _offset = __webpack_require__(49);

var _offset2 = _interopRequireDefault(_offset);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * Get the offset top and left of the passed element from his parent top left point
 *
 * @name 		offset
 * @param 		{HTMLElement} 					elm  		The element to get the offset from
 * @return 		{Object} 									The offset top and left object
 *
 * @example  	js
 * import offsetParent from 'sugarcss/js/dom/offsetParent'
 * const offsetParentElm = offsetParent(myCoolElement);
 * // output : { top : 200, left : 300 }
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */
function offsetParent(elm) {
  var parentOffset = (0, _offset2.default)(elm.parentNode);
  var offset = (0, _offset2.default)(elm);
  return {
    top: offset.top - parentOffset.top,
    left: offset.left - parentOffset.left
  };
}

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prependChild;
/**
 * Prepend an HTMLElement into another HTMLElement
 *
 * @name 		prependChild
 * @param 		{HTMLElement} 				elm  		The element to prepend
 * @param 		{HTMLElement} 				refElm 		The element in which to prepend the new element
 * @example  	js
 * import prependChild from 'sugarcss/js/dom/prependChild'
 * prependChild(myElementToInsert, theReferenceElement);
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */
function prependChild(elm, refElm) {
  if (!refElm.firstChild) {
    refElm.appendChild(elm);
  } else {
    refElm.insertBefore(elm, refElm.firstChild);
  }
}

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = previous;

var _matches = __webpack_require__(25);

var _matches2 = _interopRequireDefault(_matches);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * Browse the passed element previous siblings to find the first element that matches the passed selector
 *
 * @name 		previous
 * @param 		{HTMLElement} 					elm  		The element to start on
 * @param 		{String} 						selector 	A css selector to search for
 * @return 		{HTMLElement} 								The element found or null
 *
 * @example  	js
 * import previous from 'sugarcss/js/dom/previous'
 * const previousElm = previous(myCoolElement, '.my-cool-class');
 * if (previousElm) {
 * 		// we have found en element that matches the selector
 * }
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */
function previous(elm, selector) {
  elm = elm.previousSibling;
  while (elm) {
    if ((0, _matches2.default)(elm, selector)) {
      return elm;
    }
    elm = elm.previousSibling;
  }
  return false;
}

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scrollTop;
/**
 * document.scrollTop polyfill
 */
function scrollTop() {
  return window.pageYOffset || document.scrollTop || document.body.scrollTop;
}

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

exports.default = style;

var _uncamelize = __webpack_require__(26);

var _uncamelize2 = _interopRequireDefault(_uncamelize);

var _styleString2Object = __webpack_require__(179);

var _styleString2Object2 = _interopRequireDefault(_styleString2Object);

var _styleObject2String = __webpack_require__(178);

var _styleObject2String2 = _interopRequireDefault(_styleObject2String);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * Set or remove a css style property on an HTMLElement
 *
 * @name 		style
 * @param 		{HTMLElement} 			elm 			The element to process
 * @param 		{Object} 				styleObj 		An object of style to apply
 * @return 		(Object) 								The element applied style
 *
 * @example 	js
 * import style from 'sugarcss/js/dom/style'
 * style(myCoolHTMLElement, {
 * 		paddingLeft : 20,
 * 		display : null
 * });
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */

if (!window.sugar) window.sugar = {};
window.sugar._styles = new Map();

function style(elm, styleObj) {

  // convert style string to object
  var styleAttr = elm.getAttribute('style');

  if (styleAttr) {
    styleObj = _extends({}, (0, _styleString2Object2.default)(styleAttr), styleObj);
  }

  // apply the style to the element
  // elm.setAttribute('style', __styleObject2String(current.styleObj));
  elm.style.cssText = (0, _styleObject2String2.default)(styleObj);

  // return the style
  return elm.style;
}

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = styleObject2String;

var _uncamelize = __webpack_require__(26);

var _uncamelize2 = _interopRequireDefault(_uncamelize);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * Transform a style object to inline string separated by ;
 *
 * @name 		styleObject2String
 * @param 		{Object} 				styleObj 		An object of style to apply
 * @return 		(String) 								The string style representation
 *
 * @example 	js
 * import styleObject2String from 'sugarcss/js/dom/styleObject2String'
 * const styleString = styleObject2String({
 * 		paddingLeft : '20px',
 * 		display : 'block'
 * });
 * // output => padding-left:20px; display:block;
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */
function styleObject2String(styleObj) {
  // process the style object
  var propertiesArray = [];
  for (var key in styleObj) {
    var value = styleObj[key];
    // if the value is ''
    // mean that we need to get rid of
    if (value === undefined || value === '') {
      delete styleObj[key];
    } else {
      propertiesArray.push((0, _uncamelize2.default)(key) + ':' + value + ';');
    }
  }
  // return the css text
  return propertiesArray.join(' ');
}

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = styleString2Object;

var _camelize = __webpack_require__(52);

var _camelize2 = _interopRequireDefault(_camelize);

var _autoCast = __webpack_require__(51);

var _autoCast2 = _interopRequireDefault(_autoCast);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * Transform a style string to an object representation
 *
 * @name 		styleString2Object
 * @param 		{String} 				style 			The style string
 * @return 		(Object) 								The string object representation
 *
 * @example 	js
 * import styleString2Object from 'sugarcss/js/dom/styleString2Object'
 * const styleString = styleString2Object('padding-left:20px; display:block;');
 * // output => {
 * //		paddingLeft : '20px',
 * // 		display : 'block'
 * // }
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */
function styleString2Object(style) {
  if (!style || style === '') return {};
  var obj = {};
  var split = style.replace(/\s/g, '').split(';');
  split.forEach(function (statement) {
    // split statement by key value pairs
    var spl = statement.split(':'),
        key = (0, _camelize2.default)(spl[0]),
        value = spl[1];
    // add element into object
    obj[key] = (0, _autoCast2.default)(value);
  });
  // return the style object
  return obj;
}

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = whenInViewport;

var _whenVisible = __webpack_require__(50);

var _whenVisible2 = _interopRequireDefault(_whenVisible);

var _isInViewport2 = __webpack_require__(170);

var _isInViewport3 = _interopRequireDefault(_isInViewport2);

var _throttle = __webpack_require__(184);

var _throttle2 = _interopRequireDefault(_throttle);

var _closest = __webpack_require__(166);

var _closest2 = _interopRequireDefault(_closest);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * Monitor an HTMLElement to be notified when it is in the viewport
 *
 * @name 		whenInViewport
 * @param 		{HTMLElement} 				elm 					The element to monitor
 * @param 		{Number} 					[offset=50] 			An offset that represent the distance before entering the viewport for the detection
 * @return 		(Promise) 											The promise that will be resolved when the element is in the viewport
 *
 * @example 	js
 * import whenInViewport from 'sugarcss/js/dom/whenInViewport'
 * whenInViewport(myCoolHTMLElement).then((elm) => {
 * 		// do something with your element that has entered the viewport...
 * });
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */
function whenInViewport(elm) {
	var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;

	return new Promise(function (resolve, reject) {

		if (window.IntersectionObserver) {

			var isInViewport = false,
			    isVisible = false,
			    _cb = function _cb() {
				if (isVisible && isInViewport) {
					observer.disconnect();
					resolve(elm);
				}
			};

			var observer = new IntersectionObserver(function (entries, observer) {
				if (!entries.length) return;
				var entry = entries[0];
				if (entry.intersectionRatio > 0) {
					isInViewport = true;
				} else {
					isInViewport = false;
				}
				_cb();
			}, {
				root: null, // viewport
				rootMargin: offset + 'px',
				threshold: [0]
			});

			observer.observe(elm);

			// detect when visible
			(0, _whenVisible2.default)(elm).then(function (elm) {
				isVisible = true;
				_cb();
			});
		} else {

			// try to get the closest element that has an overflow
			var scrollContainerElm = document;
			if (!elm._inViewportContainer) {
				var overflowContainer = (0, _closest2.default)(elm, '[data-in-viewport-container]');
				if (overflowContainer) {
					scrollContainerElm = overflowContainer;
					elm._inViewportContainer = overflowContainer;
				}
			} else {
				scrollContainerElm = elm._inViewportContainer;
			}

			var _isInViewport = false,
			    _isVisible = false,
			    _cb2 = function _cb2() {
				if (_isVisible && _isInViewport) {
					scrollContainerElm.removeEventListener('scroll', checkViewport);
					window.removeEventListener('resize', checkViewport);
					resolve(elm);
				}
			};
			var checkViewport = (0, _throttle2.default)(function (e) {
				_isInViewport = (0, _isInViewport3.default)(elm, offset);
				_cb2();
			}, 100);

			// detect when visible
			(0, _whenVisible2.default)(elm).then(function (elm) {
				_isVisible = true;
				_cb2();
			});

			// listen for resize
			scrollContainerElm.addEventListener('scroll', checkViewport);
			window.addEventListener('resize', checkViewport);
			setTimeout(function () {
				checkViewport(null);
			});
		}
	});
}

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _imageLoaded = __webpack_require__(168);

var _imageLoaded2 = _interopRequireDefault(_imageLoaded);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

document.addEventListener('DOMContentLoaded', function () {
	document.body.addEventListener('load', function (e) {
		if (!e.target.tagName) return;
		if (e.target.hasAttribute('loaded')) return;
		e.target.setAttribute('loaded', true);
	}, true);
	[].forEach.call(document.querySelectorAll('img'), function (img) {
		(0, _imageLoaded2.default)(img).then(function (img) {
			if (img.hasAttribute('loaded')) return;
			img.setAttribute('loaded', true);
		});
	});
});

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fastdom = __webpack_require__(15);

var _fastdom2 = _interopRequireDefault(_fastdom);

var _sentinelJs = __webpack_require__(162);

var _sentinelJs2 = _interopRequireDefault(_sentinelJs);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function handleInputAttributes(eOrElm) {
	var setDirty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

	var field = eOrElm.target ? eOrElm.target : eOrElm;
	if (!field || !field.tagName) return;
	switch (field.tagName) {
		case 'INPUT':
		case 'TEXTAREA':
		case 'SELECT':
			_fastdom2.default.mutate(function () {
				if (field.type && (field.type === 'checkbox' || field.type === 'radio')) return;
				if (field.value && !field.hasAttribute('has-value')) {
					field.setAttribute('has-value', true);
					field.removeAttribute('empty');
				} else if (field.value === undefined || field.value === null || field.value === '') {
					field.removeAttribute('has-value');
					field.removeAttribute('value');
					if (!field.hasAttribute('empty')) {
						field.setAttribute('empty', true);
					}
				}
				if (setDirty) {
					if (!field.hasAttribute('dirty')) {
						field.setAttribute('dirty', true);
					}
				}
			});
			break;
	}
}

function handleFormSubmitOrReset(e) {
	// loop on each form elements
	[].forEach.call(e.target.elements, function (field) {
		// reset the field attributes
		handleInputAttributes(field);
		// stop here if is a submit
		if (e.type === 'submit') return;
		// remove dirty attribute
		_fastdom2.default.mutate(function () {
			field.removeAttribute('dirty');
		});
	});
}

_sentinelJs2.default.on(['select, textarea, input:not([type="submit"])'], function (elm) {
	handleInputAttributes(elm, false);
});

document.addEventListener('change', handleInputAttributes);
document.addEventListener('keyup', handleInputAttributes);
document.addEventListener('reset', handleFormSubmitOrReset);
document.addEventListener('submit', handleFormSubmitOrReset);

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fastdom = __webpack_require__(15);

var _fastdom2 = _interopRequireDefault(_fastdom);

var _dispatchEvent = __webpack_require__(24);

var _dispatchEvent2 = _interopRequireDefault(_dispatchEvent);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function handleInputAttributes(e) {
	var field = e.target ? e.target : e;
	if (!field || !field.tagName) return;
	switch (field.tagName) {
		case 'INPUT':
		case 'TEXTAREA':
			_fastdom2.default.mutate(function () {
				if (e.keyCode) {
					switch (e.keyCode) {
						case 13:
							// enter
							if (field.hasAttribute('onenter')) {
								eval(field.getAttribute('onenter'));
								(0, _dispatchEvent2.default)(field, 'onenter');
							}
							break;
						case 27:
							if (field.hasAttribute('onescape')) {
								eval(field.getAttribute('onescape'));
								(0, _dispatchEvent2.default)(field, 'onescape');
							}
							break;
					}
				}
			});
			break;
	}
}

document.addEventListener('change', handleInputAttributes);
document.addEventListener('keyup', handleInputAttributes);

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = throttle;
/**
 * This utils function allows you to make sure that a function that will normally be called
 * several times, for example during a scroll event, to be called once each threshhold time
 *
 * @name 			throttle
 * @example 		js
 * const myThrottledFn = throttle(() => {
 * 		// my function content that will be
 * 		// executed only once each second
 * }, 1000);
 *
 * document.addEventListener('scroll', (e) => {
 * 		// call my throttled function
 * 		myThrottledFn();
 * });
 *
 * @author 			Olivier Bossel <olivier.bossel@gmail.com>
 */
function throttle(fn, threshhold) {
    threshhold || (threshhold = 250);
    var last, deferTimer;
    return function () {
        var context = this;

        var now = +new Date(),
            args = arguments;
        if (last && now < last + threshhold) {
            // hold on to it
            clearTimeout(deferTimer);
            deferTimer = setTimeout(function () {
                last = now;
                fn.apply(context, args);
            }, threshhold);
        } else {
            last = now;
            fn.apply(context, args);
        }
    };
}

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = constructorName;
/**
 * Return the constructor name of the passed object
 *
 * @name 		constructorName
 * @param 		{Object} 			obj 		The object to get the constructor name from
 * @return 		{String}						The constructor name
 *
 * @example 	js
 * class MyCoolClass {
 * 		// class implementation...
 * }
 * const myObj = new MyCoolClass();
 * console.log(constructorName(myObj)); => MyCoolClass
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */
function constructorName(obj) {
  var funcNameRegex = /function (.{1,})\(/;

  var res = funcNameRegex.exec(obj.toString());
  if (res && res[1]) return res[1];

  var results = funcNameRegex.exec(obj.constructor.toString());
  return results && results.length > 1 ? results[1] : "";
}

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = propertyProxy;

var _get2 = __webpack_require__(37);

var _get3 = _interopRequireDefault(_get2);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * Create a proxy for and object property.
 * This gives you the possibility to process the data of the property
 * when it is getted or setted.
 *
 * @name 		propertyProxy
 * @param 		{Object} 		obj 			The object on which to create the proxy
 * @param 		{String} 		property 		The property name that will be proxied
 * @param 		{Object} 		descriptor 		A descriptor object that contains at least a get or a set method, or both
 * @param 		{Boolean} 		applySetterAtStart 	If need to apply the descriptor setter directly on the current value or not
 *
 * @example 	js
 * const myObject = {
 * 		title : 'World'
 * };
 * // create the proxy
 * propertyProxy(myObject, 'title', {
 * 		get : (value) => {
 * 			return `Hello ${value}`;
 * 		},
 * 		set : (value) => {
 * 			return `Youhou ${value}`;
 * 		}
 * });
 * console.log(myObject.title) => 'Hello World';
 * myObject.title = 'Universe';
 * console.log(myObject.title) => 'Hello Youhou Universe';
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */
function propertyProxy(obj, property, descriptor) {
	var applySetterAtStart = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

	// store the current value
	var val = (0, _get3.default)(obj, property);
	var currentDescriptor = Object.getOwnPropertyDescriptor(obj.prototype || obj, property);

	// custom setter check
	var _set = function _set(value) {

		if (descriptor.set) {
			value = descriptor.set(value);
		}

		// descriptor
		if (currentDescriptor && currentDescriptor.set) {
			var ret = currentDescriptor.set(value);
			if (ret) {
				val = ret;
			} else {
				val = currentDescriptor.get();
			}
		} else {
			val = value;
		}
	};

	// apply the setter if needed
	if (applySetterAtStart) _set(val);

	// make sure we have the good descriptor
	var d = Object.getOwnPropertyDescriptor(obj, property);
	Object.defineProperty(obj, property, {
		get: function get() {
			var _val = val;
			if (descriptor.get) {
				_val = descriptor.get(_val);
			}
			if (currentDescriptor && currentDescriptor.get) {
				_val = currentDescriptor.get();
			}
			return _val;
		},
		set: function set(v) {
			// const oldValue = val;
			// internal set to use the good setter
			_set(v);
			// notify of new update
			// this.notify(objPath, val, oldValue);
		},
		configurable: descriptor.configurable !== undefined ? descriptor.configurable : currentDescriptor && currentDescriptor.configurable !== undefined ? currentDescriptor.configurable : false,
		enumarable: descriptor.enumarable !== undefined ? descriptor.enumarable : currentDescriptor && currentDescriptor.enumarable !== undefined ? currentDescriptor.enumarable : true
		// writable : currentDescriptor && currentDescriptor.writable !== undefined ? currentDescriptor.writable : true
	});

	// return the value
	return val;
}

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Observable = __webpack_require__(6);

_Observable.Observable.prototype.groupByTimeout = function (properties) {
	var _this = this;

	var observable = new _Observable.Observable(function (subscriber) {
		var source = _this;
		var timeout = null;
		var stack = [];

		// subscribe to the source
		var subscription = source.subscribe(function (elm) {
			// add the element to stack
			stack.push(elm);
			// clear the timeout
			clearTimeout(timeout);
			// set a new timeout to wait next loop to
			// send the elements into the stream
			timeout = setTimeout(function () {
				// send the stack downward
				subscriber.next(stack);
				// clean stack
				stack = [];
			});
		}, function (error) {
			return subscriber.error(error);
		}, function () {
			return subscriber.complete();
		});

		// make sure we return the subscription
		return subscription;
	});

	// return the observable
	return observable;
};

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = upperFirst;
/**
 * Upper first
 */
function upperFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(57);

__webpack_require__(58);

var _main = __webpack_require__(56);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.TemplateStack = _main2.default; // import some dependencies like polyfills, etc...
// require('@webcomponents/webcomponentsjs');
// require('@webcomponents/webcomponentsjs/custom-elements-es5-adapter');
// require('webcomponents.js/webcomponents-lite');
// main application entry point
exports.default = _main2.default;

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _vue = __webpack_require__(54);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('template-stack-page-switcher', {
	props: ['pages'],
	computed: {
		select: function select() {
			var _this = this;

			var options = [];
			Object.keys(this.pages).forEach(function (pageId) {
				var page = _this.pages[pageId];
				options.push('\n\t\t\t\t\t<option value="' + page.url + '">\n\t\t\t\t\t\t' + page.title + '\n\t\t\t\t\t</option>\n\t\t\t\t');
			});

			return '\n\t\t\t\t<select is="ts-select" onchange="document.location.href = this.options[this.selectedIndex].value;">\n\t\t\t\t\t' + options.join('') + '\n\t\t\t\t</select>\n\t\t\t';
		}
	},
	template: '\n\t\t<div class="page-switcher">\n\t\t\t<div class="page-switcher__container">\n\t\t\t\t<div v-html="select"></div>\n\t\t\t</div>\n\t\t</div>\n\t',
	mounted: function mounted() {
		var select = this.$el.querySelector('select');
		setTimeout(function () {
			select.focus();
		}, 200);
	}
});

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SSelectComponent = __webpack_require__(192);

var _SSelectComponent2 = _interopRequireDefault(_SSelectComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SSelectComponent2.default;

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _next = __webpack_require__(172);

var _next2 = _interopRequireDefault(_next);

var _previous = __webpack_require__(175);

var _previous2 = _interopRequireDefault(_previous);

var _offset = __webpack_require__(49);

var _offset2 = _interopRequireDefault(_offset);

var _offsetParent = __webpack_require__(173);

var _offsetParent2 = _interopRequireDefault(_offsetParent);

var _scrollTop = __webpack_require__(176);

var _scrollTop2 = _interopRequireDefault(_scrollTop);

var _insertAfter = __webpack_require__(169);

var _insertAfter2 = _interopRequireDefault(_insertAfter);

var _dispatchEvent = __webpack_require__(24);

var _dispatchEvent2 = _interopRequireDefault(_dispatchEvent);

var _SEvent = __webpack_require__(47);

var _SEvent2 = _interopRequireDefault(_SEvent);

var _style = __webpack_require__(177);

var _style2 = _interopRequireDefault(_style);

var _sNativeWebComponent = __webpack_require__(165);

var _sNativeWebComponent2 = _interopRequireDefault(_sNativeWebComponent);

var _mutationObservable = __webpack_require__(171);

var _mutationObservable2 = _interopRequireDefault(_mutationObservable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(187);

/**
 * @name 		SSelectComponent
 * @extends  	SWebComponent
 * Provide a nice and fully customizable select webcomponent that use a real select as source of truth
 * ### Features
 * - Fully based on standard select
 * - Optional internal search
 * - Custom option element through the "s-select-option-elm" attribute
 * - Fully customizable
 * - Support multiple selected options through "tags" display
 * - Any more...
 *
 * @example 	html
 * <select is="s-select" name="my-cool-select">
 * 	<option value="value1">Hello</option>
 * 	<option value="value2">World</option>
 * 	<optgroup label="My Cool Group">
 *  	<option value="value3">My Cool Option</option>
 * 	</optgroup>
 * </select>
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */

var SSelectComponent = function (_native) {
	_inherits(SSelectComponent, _native);

	function SSelectComponent() {
		_classCallCheck(this, SSelectComponent);

		return _possibleConstructorReturn(this, (SSelectComponent.__proto__ || Object.getPrototypeOf(SSelectComponent)).apply(this, arguments));
	}

	_createClass(SSelectComponent, [{
		key: 'componentMount',


		/**
   * Mount component
   * @definition 		SWebComponent.componentMount
   * @protected
   */
		value: function componentMount() {
			var _this3 = this;

			_get(SSelectComponent.prototype.__proto__ || Object.getPrototypeOf(SSelectComponent.prototype), 'componentMount', this).call(this);

			// utils variables
			this._openOnFocus = false;
			this._currentActiveOption = null; // save the current keyboard selected item

			// build html structure
			this._buildHTML();

			// display or not the search
			if (!this.props.searchField) {
				this._searchContainerElm.style.position = 'absolute';
				this._searchContainerElm.style.left = '-120vw';
			}

			// make sure when we click that we focus on the search field
			this._containerElm.addEventListener('click', function (e) {
				if (_this3.props.searchField) {
					_this3._searchFieldElm.focus();
				}
			});

			// prevent default behavior on click in options container
			this.optionsContainerElm.addEventListener('click', function (e) {
				e.preventDefault();
			});

			// open on click
			this._containerElm.addEventListener('click', function (e) {
				// do not open when the click is on an option
				if (_this3.hasComponentClass(e.target, 'option')) return;
				// open
				if (!_this3.isOpened()) {
					_this3.open();
				}
			});

			// prevent scroll into the options
			this.optionsContainerElm.addEventListener('mousewheel', function (ev) {
				var _this = ev.currentTarget;
				var scrollTop = _this.scrollTop;
				var scrollHeight = _this.scrollHeight;
				var height = _this.offsetHeight;
				var delta = ev.wheelDelta;
				if (ev.type == 'DOMMouseScroll') {
					delta = ev.originalEvent.details * -40;
				}
				var up = delta > 0;
				var prevent = function prevent() {
					ev.stopPropagation();
					ev.preventDefault();
					ev.returnValue = false;
					return false;
				};
				if (!up && -delta > scrollHeight - height - scrollTop) {
					// Scrolling down, but this will take us past the bottom.
					_this.scrollTop = scrollHeight;
					prevent();
				} else if (up && delta > scrollTop) {
					// Scrolling up, but this will take us past the top.
					_this.scrollTop = 0;
					prevent();
				}
			});

			// manage the mouse and keyboard events
			this._handlers = {
				onKeyDown: function onKeyDown(e) {
					_this3._onKeyDown(e);
				},
				onDocumentClick: function onDocumentClick(e) {
					_this3._onDocumentClick(e);
				},
				onScrollResize: function onScrollResize(e) {
					_this3._onScrollResize(e);
				},
				onKeyUp: function onKeyUp(e) {
					_this3._onKeyUp(e);
				},
				onMouseMove: function onMouseMove(e) {
					_this3._onMouseMove(e);
				}
			};
			this.addEventListener('open', function (e) {
				document.addEventListener('keydown', _this3._handlers.onKeyDown);
				document.addEventListener('click', _this3._handlers.onDocumentClick);
				window.addEventListener('scroll', _this3._handlers.onScrollResize);
				window.addEventListener('resize', _this3._handlers.onScrollResize);
				document.addEventListener('mousemove', _this3._handlers.onMouseMove);
			});
			this.addEventListener('close', function (e) {
				document.removeEventListener('keydown', _this3._handlers.onKeyDown);
				document.removeEventListener('click', _this3._handlers.onDocumentClick);
				window.removeEventListener('scroll', _this3._handlers.onScrollResize);
				window.removeEventListener('resize', _this3._handlers.onScrollResize);
				document.removeEventListener('mousemove', _this3._handlers.onMouseMove);
			});

			// listen for keyup
			document.addEventListener('keyup', this._handlers.onKeyUp);

			// listen for change on base select
			// to set the selected items
			this.addEventListener('change', function (e) {
				_this3._setSelected();
			});

			// listen for focus in search field to activate the field
			this._searchFieldElm.addEventListener('focus', function (e) {
				_this3._openOnFocus = true;
				_this3.open();
				setTimeout(function () {
					_this3._openOnFocus = false;
				}, 200);
			});

			// listen for keyup on search field
			var internalSearch = this.props.internalSearch;
			var search = this.props.searchField;
			var searchFieldFn = function searchFieldFn(e) {
				// check if the key is up or down to avoid searching again
				if (e.keyCode === 38 // up
				|| e.keyCode === 40 // down
				|| e.keyCode === 13 // enter
				|| e.keyCode === 27 // escape
				) return;

				// trigger custom event
				var event = new _SEvent2.default('search');
				_this3.dispatchEvent(event);
				// on search callback
				if (e.target.value && e.target.value.length >= _this3.props.minCharactersForSearch) {
					_this3.props.onSearch && _this3.props.onSearch(e.target.value, _this3);
				}
				// check if internal search
				_this3._internalSearch();
			};
			if (internalSearch && search) {
				this._searchFieldElm.addEventListener('keyup', searchFieldFn);
				this._searchFieldElm.addEventListener('search', searchFieldFn);
			}

			// observe all changes into the select
			// to refresh our custom one
			(0, _mutationObservable2.default)(this, {
				childList: true
			}).groupByTimeout().subscribe(function (mutation) {
				_this3.refresh();
			});

			// first refresh
			this.refresh();

			// hide the select
			this._hideRealSelect();

			// append the element right after the real select
			(0, _insertAfter2.default)(this._containerElm, this);
		}

		/**
   * Component unmount
   * @definition 		SWebComponent.componentUnmount
   * @protected
   */

	}, {
		key: 'componentUnmount',
		value: function componentUnmount() {
			document.removeEventListener('keyup', this._handlers.onKeyUp);
			document.removeEventListener('keydown', this._handlers.onKeyDown);
			document.removeEventListener('click', this._handlers.onDocumentClick);
			window.removeEventListener('scroll', this._handlers.onScrollResize);
			window.removeEventListener('resize', this._handlers.onScrollResize);
			document.removeEventListener('mousemove', this._handlers.onMouseMove);
			this._destroy();
		}

		/**
   * Destroy
   */

	}, {
		key: '_destroy',
		value: function _destroy() {
			if (this._refreshObserver) {
				this._refreshObserver.unsubscribe();
			}
		}

		/**
   * On mouse move on document
   */

	}, {
		key: '_onMouseMove',
		value: function _onMouseMove(e) {
			// let the mouse events flows inside the optionsContainerElm
			this.optionsContainerElm.style.pointerEvents = 'all';
		}

		/**
   * Process to internal search
   */

	}, {
		key: '_internalSearch',
		value: function _internalSearch() {
			var _this4 = this;

			// reset the scroll position of the options
			this.optionsContainerElm.scrollTop = 0;

			// loop on each options
			[].forEach.call(this.optionsContainerElm.querySelectorAll(this.componentSelector('option')), function (option) {

				_this4.removeComponentClass(option, 'option', null, 'active');
				option.classList.remove('active');

				// check if is a value in the search field
				if (_this4._searchFieldElm.value && _this4._searchFieldElm.value.length >= _this4.props.minCharactersForSearch) {
					// check if we find the text in the option
					var regexp = new RegExp("(" + _this4._searchFieldElm.value + ")(?!([^<]+)?>)", 'gi');
					// search the tokens in html
					var replace = option._s_innerHTML.replace(regexp, '<span class="' + _this4.componentClassName('search-result') + '">$1</span>');
					if (option._s_innerHTML.match(regexp)) {
						_this4.removeComponentClass(option, 'option', null, 'hidden');
						option.innerHTML = replace;
					} else {
						// reset the activate item if need to be hided
						if (option == _this4._currentActiveOption) {
							_this4._currentActiveOption = null;
						}
						_this4.addComponentClass(option, 'option', null, 'hidden');
					}
				} else {
					option.innerHTML = option._s_innerHTML;
					_this4.removeComponentClass(option, 'option', null, 'hidden');
				}
			});

			// activate the first option in the list
			this.mutate(function () {
				_this4._activateFirst();
			});

			// set position
			this._setPosition();
		}

		/**
   * On scroll or resize
   */

	}, {
		key: '_onScrollResize',
		value: function _onScrollResize(e) {
			this._setPosition();
		}

		/**
   * When the user click outside of the select
   */

	}, {
		key: '_onDocumentClick',
		value: function _onDocumentClick(e) {
			if (!this._containerElm.contains(e.target)) {
				this.close();
			}
		}

		/**
   * Check the keyboard actions
   */

	}, {
		key: '_onKeyUp',
		value: function _onKeyUp(e) {
			if ((e.keyCode === 40 || e.keyCode === 38) && !this.isOpened() && document.activeElement === this._searchFieldElm) {
				this.open();
			} else if ((e.keyCode === 9 // tab
			|| e.keyCode === 27 // escape
			) && this.isOpened()) {
				if (!this._openOnFocus) {
					this.close();
				}
			}
		}

		/**
   * On key down
   */

	}, {
		key: '_onKeyDown',
		value: function _onKeyDown(e) {

			// prevent the mouse interactions to avoid conflict between mouse and keyboard
			this.optionsContainerElm.style.pointerEvents = 'none';

			// check which key has been pressed
			switch (e.keyCode) {
				case 40:
					// down
					this._activateNext();
					e.preventDefault();
					break;
				case 38:
					// up
					this._activatePrevious();
					e.preventDefault();
					break;
				case 13:
					// enter
					this._selectActivated();
					e.preventDefault();
					break;
				case 8:
					// backspace
					if (this._searchFieldElm.focus && this._searchFieldElm.value == '') {
						// remove the last item
						this.unselectLast();
					}
					break;
			}
		}

		/**
   * Select the first option available
   */

	}, {
		key: '_activateFirst',
		value: function _activateFirst() {
			// remove active class if exist
			if (this._currentActiveOption) {
				this.removeComponentClass(this._currentActiveOption, 'option', null, 'active');
				this._currentActiveOption.classList.remove('active');
			}

			// set the current active option to the first available one
			var findedOpts = this.optionsContainerElm.querySelectorAll(this.componentSelector('option') + ':not(' + this.componentSelector('option', 'disabled') + '):not(' + this.componentSelector('option', 'hidden') + ')');
			if (findedOpts.length) {
				this._currentActiveOption = findedOpts[0];
			}

			// activate the element
			if (this._currentActiveOption) {
				this.addComponentClass(this._currentActiveOption, 'option', null, 'active');
				this._currentActiveOption.classList.add('active');
			}
		}

		/**
   * Select next with keyboard
   */

	}, {
		key: '_activateNext',
		value: function _activateNext() {

			// if no option already selected by keyboard, activate the first.
			// this will make the second item to be selected as expected
			if (!this._currentActiveOption) {
				this._activateFirst();
			}

			// remove active class if exist
			if (this._currentActiveOption) {
				this.removeComponentClass(this._currentActiveOption, 'option', null, 'active');
				this._currentActiveOption.classList.remove('active');
			}
			// check if already an item is selected
			if (!this._currentActiveOption) {
				var findedOpts = this.optionsContainerElm.querySelectorAll(this.componentSelector('option') + ':not(' + this.componentSelector('option', 'disabled') + '):not(' + this.componentSelector('option', 'hidden') + ')');
				if (findedOpts.length) {
					this._currentActiveOption = findedOpts[0];
				}
			} else {
				// try to get the next sibling
				var next = (0, _next2.default)(this._currentActiveOption, this.componentSelector('option') + ':not(' + this.componentSelector('option', 'disabled') + '):not(' + this.componentSelector('option', 'hidden') + ')');
				if (next) this._currentActiveOption = next;
			}

			// activate the element
			if (this._currentActiveOption) {
				this.addComponentClass(this._currentActiveOption, 'option', null, 'active');
				this._currentActiveOption.classList.add('active');
				// scroll view
				var optionHeight = this._currentActiveOption.offsetHeight;
				var optionOffest = (0, _offsetParent2.default)(this._currentActiveOption);
				// if need to scroll the view
				if (optionOffest.top > this.optionsContainerElm.offsetHeight - optionHeight) {
					this._currentActiveOption.parentNode.scrollTop += optionHeight;
				} else if (optionOffest.top < 0) {
					this.optionsContainerElm.scrollTop = optionOffest.top;
				}
			}
		}

		/**
   * Select previous with keyboard
   */

	}, {
		key: '_activatePrevious',
		value: function _activatePrevious() {

			// do not allow to activate a previous item if their's no active one already
			if (!this._currentActiveOption) return;

			// remove active class if exist
			if (this._currentActiveOption) {
				this.removeComponentClass(this._currentActiveOption, 'option', null, 'active');
				this._currentActiveOption.classList.remove('active');
			}
			// check if already an item is selected
			if (!this._currentActiveOption) {
				var findedOpts = this.optionsContainerElm.querySelectorAll(this.componentSelector('option') + ':not(' + this.componentSelector('option', 'disabled') + '):not(' + this.componentSelector('option', 'hidden') + ')');
				if (findedOpts.length) {
					this._currentActiveOption = findedOpts[findedOpts.length - 1];
				}
			} else {
				// try to get the next sibling
				var previous = (0, _previous2.default)(this._currentActiveOption, this.componentSelector('option') + ':not(' + this.componentSelector('option', 'disabled') + '):not(' + this.componentSelector('option', 'hidden') + ')');
				if (previous) this._currentActiveOption = previous;
			}
			// activate the element
			if (this._currentActiveOption) {
				this.addComponentClass(this._currentActiveOption, 'option', null, 'active');
				this._currentActiveOption.classList.add('active');
				// scroll to item
				var optionHeight = this._currentActiveOption.offsetHeight;
				var optionOffest = (0, _offsetParent2.default)(this._currentActiveOption);
				if (optionOffest.top < 0) {
					this._currentActiveOption.parentNode.scrollTop -= optionHeight;
				} else if (optionOffest.top > this.optionsContainerElm.offsetHeight) {
					var ot = optionOffest.top + this.optionsContainerElm.scrollTop;
					this.optionsContainerElm.scrollTop = ot - optionHeight;
				}
			}
		}

		/**
   * Select activated item
   */

	}, {
		key: '_selectActivated',
		value: function _selectActivated() {
			// check if an activated element exist
			if (this._currentActiveOption) {
				this.select(this._currentActiveOption._s_select_source_option);
			}
		}

		/**
   * Create html structure
   */

	}, {
		key: '_buildHTML',
		value: function _buildHTML() {
			var _this5 = this;

			var container = document.createElement('div');
			container.setAttribute('class', this.getAttribute('class') || '');
			this.className = '';
			this.addComponentClass(container);

			// multiple class
			if (this.getAttribute('multiple') != null) {
				this.addComponentClass(container, null, 'multiple');
			}

			var selection_container = document.createElement('div');
			this.addComponentClass(selection_container, 'selection-container');

			var selection_aligner = document.createElement('div');
			this.addComponentClass(selection_aligner, 'selection-aligner');

			var dropdown = document.createElement('div');
			this.addComponentClass(dropdown, 'dropdown');
			dropdown.style.fontSize = '1rem';

			// search
			var search_container = document.createElement('div');
			this.addComponentClass(search_container, 'search-container');

			// search field
			var search_field = document.createElement('input');
			search_field.setAttribute('type', 'search');
			if (search_field.type != 'search') {
				search_field.type = 'text';
			}
			search_field.setAttribute('placeholder', this.props.searchPlaceholder);
			this.addComponentClass(search_field, 'search-field');

			// reset
			var resetElm = null;
			if (this.props.resetAllowed) {
				resetElm = document.createElement('button');
				resetElm.setAttribute('type', 'button');
				resetElm.addEventListener('click', function (e) {
					e.preventDefault();
					_this5.reset();
				});
				this.addComponentClass(resetElm, 'reset');
			}

			// options
			var options_container = document.createElement('div');
			this.addComponentClass(options_container, 'options');

			// append to document
			search_container.appendChild(search_field);

			dropdown.appendChild(search_container);
			dropdown.appendChild(options_container);

			// container.appendChild(open_checkbox);
			container.appendChild(selection_container);
			if (resetElm) {
				container.appendChild(resetElm);
			}
			container.appendChild(dropdown);

			// hide the real select
			this._hideRealSelect();

			// save into object
			this._containerElm = container;
			this._dropdownElm = dropdown;
			this._searchContainerElm = search_container;
			this.selectionContainerElm = selection_container;
			this._searchFieldElm = search_field;
			this.optionsContainerElm = options_container;
		}

		/**
   * Hide the select
   */

	}, {
		key: '_hideRealSelect',
		value: function _hideRealSelect() {
			// keep it in the viewport to avoid issues
			// when trying to get the select that is in the viewport,
			// etc...
			(0, _style2.default)(this, {
				position: 'absolute',
				width: 0,
				height: 0,
				padding: 0,
				opacity: .01,
				pointerEvents: 'none',
				zIndex: -1
			});
			this.tabIndex = -1;
		}

		/**
   * Handle click on option
   */

	}, {
		key: '_handleOptionClick',
		value: function _handleOptionClick(_s_option, e) {
			var _this6 = this;

			// check if is a multiple
			if (!this.isMultiple()) {
				// select the element in the source select
				_s_option._s_select_source_option.selected = true;
				// close
				this.mutate(function () {
					_this6.close();
				});
			} else {
				_s_option._s_select_source_option.selected = !_s_option._s_select_source_option.selected;

				// // check if the alt key is pressed
				// if (e.metaKey) {
				// 	// toggle selection
				// 	_s_option._s_select_source_option.selected = ! _s_option._s_select_source_option.selected;
				// } else if (e.shiftKey) {
				// 	// get the index of the last selected option
				// 	if (this.options.selectedIndex) {
				// 		// find the current option position
				// 		let current_option_idx = 0,
				// 			found = false;
				// 		[].forEach.call(this.options, (opt) => {
				// 			if ( ! found && opt != _s_option._s_select_source_option) {
				// 				current_option_idx++;
				// 			} else {
				// 				found = true;
				// 			}
				// 		});

				// 		// select all the options inbetween
				// 		let first = this.options.selectedIndex;
				// 		let last = current_option_idx;
				// 		if (first > last) {
				// 			let _last = last;
				// 			last = first;
				// 			first = _last;
				// 		}
				// 		for (let i = first; i <= last; i++) {
				// 			if ( ! this.options[i].disabled) {
				// 				this.options[i].selected = true;
				// 			}
				// 		}
				// 	} else {
				// 		// telection
				// 		_s_option._s_select_source_option.selected = ! _s_option._s_select_source_option.selected;
				// 	}
				// } else {
				// 	// unactive all the options
				// 	[].forEach.call(this.options, (opt) => {
				// 		opt.selected = false;
				// 	});
				// 	// activate the item
				// 	_s_option._s_select_source_option.selected = true;
				// }
			}

			// trigger change event
			(0, _dispatchEvent2.default)(this, 'change');
		}

		/**
   * Set selected elements
   */

	}, {
		key: '_setSelected',
		value: function _setSelected() {
			var _this7 = this;

			// loop on selected option to activate them
			var areSomeSelectedItems = false;
			[].forEach.call(this.options, function (option) {
				// apply the active class
				if (option._s_select_option) {
					if (option.selected) {
						if (option.innerHTML != '') {
							areSomeSelectedItems = true;
						}
						_this7.addComponentClass(option._s_select_option, 'option', null, 'selected');
					} else {
						_this7.removeComponentClass(option._s_select_option, 'option', null, 'selected');
					}
				}
			});
			// set the selection
			this.selectionContainerElm.innerHTML = '';
			if (this.isMultiple()) {
				// loop on each selected items
				[].forEach.call(this.options, function (option) {
					if (option.selected) {
						// get the content
						var content = option.innerHTML;
						// create the tag
						var tag = document.createElement('div');
						_this7.addComponentClass(tag, 'selection-tag');
						tag.innerHTML = content;
						var close = document.createElement('span');
						_this7.addComponentClass(close, 'selection-tag-close');
						close.addEventListener('click', function (e) {
							option.selected = false;
							// trigger change event
							var event = new _SEvent2.default('change');
							_this7.dispatchEvent(event);
						});
						tag.addEventListener('dblclick', function (e) {
							option.selected = false;
							// trigger change event
							var event = new _SEvent2.default('change');
							_this7.dispatchEvent(event);
						});
						tag.appendChild(close);
						_this7.selectionContainerElm.appendChild(tag);
					}
				});
			} else {
				// get the selected one
				var selected_idx = this.options.selectedIndex;
				if (selected_idx != -1) {
					// set the selected
					var selection = document.createElement('div');
					this.addComponentClass(selection, 'selection');
					selection.innerHTML = this.options[selected_idx].innerHTML;
					this.selectionContainerElm.appendChild(selection);
				}
			}

			if (!areSomeSelectedItems) {
				var placeholder = this.getAttribute('placeholder');
				if (!placeholder && this.isMultiple()) {
					placeholder = '&nbsp;';
				}
				if (placeholder) {
					var _selection = document.createElement('div');
					this.addComponentClass(_selection, 'selection');
					_selection.classList.add('input--placeholder');
					_selection.innerHTML = placeholder;
					this.addComponentClass(this._containerElm, null, 'placeholder');
					this.selectionContainerElm.appendChild(_selection);
				}
			} else {
				this.removeComponentClass(this._containerElm, null, 'placeholder');
			}
		}

		/**
   * Set position
   */

	}, {
		key: '_setPosition',
		value: function _setPosition() {
			// get the position of the container
			var dropdownOffset = (0, _offset2.default)(this._dropdownElm);
			var dropdownTop = dropdownOffset.top - (0, _scrollTop2.default)();
			var containerTop = (0, _offset2.default)(this._containerElm).top - (0, _scrollTop2.default)();
			var dropdownFullHeight = this.optionsContainerElm.scrollHeight + this._searchContainerElm.offsetHeight;
			var optionsFullHeight = this.optionsContainerElm.scrollHeight;
			var optionsHeight = this.optionsContainerElm.offsetHeight;
			var screenMarginTop = this.props.screenMarginTop;
			var screenMarginBottom = this.props.screenMarginBottom;
			var optionsMinHeight = parseInt(window.getComputedStyle(this.optionsContainerElm).getPropertyValue('min-height'));

			// check if the min-height has been reached
			if (containerTop + this._containerElm.offsetHeight + this._searchContainerElm.offsetHeight + optionsMinHeight + screenMarginBottom + this.props.dropupLimit > window.innerHeight) {
				// if (optionsHeight < optionsFullHeight && optionsHeight <= optionsMinHeight ) {
				this.addComponentClass(this._containerElm, null, 'dropup');
				// console.log(top + h, window.innerHeight);
				if (containerTop - dropdownFullHeight - screenMarginTop < 0) {
					this.optionsContainerElm.style.height = window.innerHeight - (window.innerHeight - containerTop) - this._searchContainerElm.offsetHeight - screenMarginTop + 'px';
				} else {
					this.optionsContainerElm.style.height = 'auto';
				}
			} else {
				this.removeComponentClass(this._containerElm, null, 'dropup');
				// console.log(top + h, window.innerHeight);
				if (dropdownTop + dropdownFullHeight + screenMarginBottom > window.innerHeight) {
					this.optionsContainerElm.style.height = window.innerHeight - dropdownTop - this._searchContainerElm.offsetHeight - screenMarginBottom + 'px';
				} else {
					this.optionsContainerElm.style.height = 'auto';
				}
			}
		}

		/**
   * Handle optgroup
   * @param 		{HTMLElement} 		_optgroup 		The optgroup to handle
   */

	}, {
		key: '_handleOptgroup',
		value: function _handleOptgroup(_optgroup) {
			// create the choice
			var option = document.createElement('div');
			this.addComponentClass(option, 'optgroup');

			// get the content
			var content = _optgroup.getAttribute('label');

			// get the content
			var source = _optgroup.getAttribute(this.componentNameDash + '-option-elm');
			if (source) {
				// try to get into document
				source = document.querySelector(source);
				if (source) {
					option.appendChild(source);
					this.addComponentClass(option, 'optgroup', 'custom');
				} else {
					option.innerHTML = content;
				}
			} else {
				option.innerHTML = content;
			}

			// append new choice
			this.optionsContainerElm.appendChild(option);
		}

		/**
   * Handle option
   */

	}, {
		key: '_handleOption',
		value: function _handleOption(_option) {
			var _this8 = this;

			var in_optgroup = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


			// check if is an optiongroup
			if (_option.nodeName.toLowerCase() == 'optgroup') {
				this._handleOptgroup(_option);
				[].forEach.call(_option.querySelectorAll(':scope > option'), function (option) {
					_this8._handleOption(option, true);
				});
				return;
			}

			// create the choice
			var option = document.createElement('div');
			this.addComponentClass(option, 'option');

			// check if in optgroup
			if (in_optgroup) {
				this.addComponentClass(option, 'option', 'in-optgroup');
			}

			// check if disabled
			if (_option.disabled) {
				this.addComponentClass(option, 'option', null, 'disabled');
			}

			// save the option reference into html element
			// to be able to activate it in the base select
			option._s_select_source_option = _option;

			// save the s_option into the base option
			// to be able to activate the s_option later
			_option._s_select_option = option;

			// get the content
			var content = _option.innerHTML;

			// get the content
			var source = _option.getAttribute(this.componentNameDash + '-option-elm');
			if (source) {
				// try to get into document
				source = document.querySelector(source);
				this.addComponentClass(source, 'option-source');
				if (source) {
					option.innerHTML = source.outerHTML;
					this.addComponentClass(option, 'option', 'custom');
				} else {
					option.innerHTML = content;
				}
			} else {
				if (!content) return;
				option.innerHTML = content;
			}

			// save the html to restore later on search
			option._s_innerHTML = option.innerHTML;

			// add a click event on the option
			option.addEventListener('click', function (e) {
				_this8._handleOptionClick(e.currentTarget, e);
			});

			// add the listener for the hover
			option.addEventListener('mouseover', function (e) {
				if (_this8._currentActiveOption) {
					_this8.removeComponentClass(_this8._currentActiveOption, 'option', null, 'active');
					_this8._currentActiveOption.classList.remove('active');
				}

				_this8._currentActiveOption = option;
			});

			// append new choice
			this.optionsContainerElm.appendChild(option);
		}

		/**
   * Sync the custom select with his source or truth.
   * This is in most cases called automatically but if you need it, it's here...
   * @return 	{SSelectComponent} 		Return the component to maintain chainability
   */

	}, {
		key: 'refresh',
		value: function refresh() {
			var _this9 = this;

			// empty the options
			var options_parent = this.optionsContainerElm.parentNode;
			options_parent.removeChild(this.optionsContainerElm);
			this.optionsContainerElm.innerHTML = '';

			// create the options tree
			[].forEach.call(this.querySelectorAll(':scope > option, :scope > optgroup'), function (elm) {
				// handle option
				_this9._handleOption(elm);
			}, this);

			// set selected the first time
			this._setSelected();

			// append again in dom the options
			options_parent.appendChild(this.optionsContainerElm);

			// set position
			if (this.isOpened()) {
				setTimeout(function () {
					_this9._setPosition();
				});
			}

			return this;
		}

		/**
   * Select an option in source select
   * @param 		{HTMLOptionElement} 		option 		The option element to select
   * @return 	{SSelectComponent} 		Return the component to maintain chainability
   */

	}, {
		key: 'select',
		value: function select(option) {
			// check if we have the s-select option targer
			if (option._s_select_option) {
				this._handleOptionClick(option._s_select_option);
			} else if (option._s_select_source_option) {
				this._handleOptionClick(option);
			}
			return this;
		}

		/**
   * Reset the select. This will deselect all selected items, etc...
   * @return 	{SSelectComponent} 		Return the component to maintain chainability
   */

	}, {
		key: 'reset',
		value: function reset() {
			this.selectedIndex = -1;
			this.refresh();
			(0, _dispatchEvent2.default)(this, 'change');
			(0, _dispatchEvent2.default)(this, 'reset');
			return this;
		}

		/**
   * Unselect the last selected option
   * @return 		{HTMLOptionElement} 			The deselected option, null if none
   */

	}, {
		key: 'unselectLast',
		value: function unselectLast() {
			var last = null;
			[].forEach.call(this.options, function (option) {
				if (option.selected) {
					last = option;
				}
			});
			// unselect the last
			if (last) {
				last.selected = false;
				// trigger change event
				var event = new _SEvent2.default('change');
				this.dispatchEvent(event);
			}
			// return the deselected option
			return last;
		}

		/**
   * Check if the select is a multiple one
   * @return 		{Boolean} 			True is select is a multiple one, false if not
   */

	}, {
		key: 'isMultiple',
		value: function isMultiple() {
			return this.hasAttribute('multiple');
		}

		/**
   * Check if the select is a disabled
   * @return 		{Boolean} 			True is select is disabled, false if not
   */

	}, {
		key: 'isDisabled',
		value: function isDisabled() {
			return this.hasAttribute('disabled');
		}

		/**
   * Is opened
   * @return 		{Boolean} 			True if select is opened, false if not
   */

	}, {
		key: 'isOpened',
		value: function isOpened() {
			return this.hasComponentClass(this._containerElm, null, null, 'opened');
		}

		/**
   * Close the select dropdown
   * @return 	{SSelectComponent} 		Return the component to maintain chainability
   */

	}, {
		key: 'close',
		value: function close() {
			var _this10 = this;

			if (!this._isOpened) return this;
			this._isOpened = false;

			this.removeComponentClass(this._containerElm, null, null, 'opened');

			// unactivate the option if one exist
			// if (this._currentActiveOption) {
			// 	this.removeComponentClass(this._currentActiveOption, 'option', null, 'active');
			// 	this._currentActiveOption.classList.remove('active');
			// 	this._currentActiveOption = null;
			// }
			// remove the dropup class
			this._clearDropupTimeout = setTimeout(function () {
				_this10.removeComponentClass(_this10._containerElm, null, 'dropup');
			}, 500);
			// dispatch close event
			var event = new _SEvent2.default('close');
			this.dispatchEvent(event);
			// handle onClose callback
			var onClose = this.props.onClose;
			if (onClose) {
				onClose();
			}
			return this;
		}

		/**
   * Open the select dropdown
   * @return 	{SSelectComponent} 		Return the component to maintain chainability
   */

	}, {
		key: 'open',
		value: function open() {
			if (this.isDisabled()) return this;
			if (this._isOpened) return this;
			this._isOpened = true;

			this.addComponentClass(this._containerElm, null, null, 'opened');
			// set position
			clearTimeout(this._clearDropupTimeout);
			this._setPosition();
			// dispatch open event
			var event = new _SEvent2.default('open');
			this.dispatchEvent(event);
			// manage onOpen callback
			var onOpen = this.props.onOpen;
			if (onOpen) {
				onOpen();
			}
			return this;
		}

		/**
   * Set focus
   * @return 	{SSelectComponent} 		Return the component to maintain chainability
   */

	}, {
		key: 'focus',
		value: function focus() {
			this._searchFieldElm.focus();
			return this;
		}
	}], [{
		key: 'defaultCss',


		/**
   * Default css
   * @definition 		SWebComponent.defaultCss
   * @protected
   */
		value: function defaultCss(componentName, componentNameDash) {
			return '\n\t\t\t.' + componentNameDash + ' {\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tposition:relative;\n\t\t\t\tcursor: pointer;\n\t\t\t\twidth:100%;\n\t\t\t}\n\t\t\t.' + componentNameDash + '__option-source {\n\t\t\t\tdisplay:none;\n\t\t\t}\n\t\t\t.' + componentNameDash + '__dropdown .' + componentNameDash + '__option-source {\n\t\t\t\tdisplay:block;\n\t\t\t}\n\t\t\tselect[is="' + componentNameDash + '"]:disabled + .' + componentNameDash + ' {\n\t\t\t\tpointer-events:none;\n\t\t\t\tuser-select:none;\n\t\t\t}\n\t\t\t.' + componentNameDash + ',\n\t\t\t.' + componentNameDash + ' * {\n\t\t\t\tbox-sizing:border-box;\n\t\t\t}\n\t\t\t.' + componentNameDash + '__selection-container {\n\n\t\t\t}\n\t\t\t.' + componentNameDash + '__dropdown {\n\t\t\t\topacity:0;\n\t\t\t\tpointer-events:none;\n\t\t\t\tposition:absolute;\n\t\t\t\ttop:100%; left:0;\n\t\t\t\tz-index: 1;\n\t\t\t\twidth:100%;\n\t\t\t\theight:0;\n\t\t\t\toverflow-y: hidden;\n\t\t\t}\n\t\t\t.' + componentNameDash + '__selection {\n\t\t\t\tvertical-align:middle;\n\t\t\t}\n\t\t\t.' + componentNameDash + '__selection > * {\n\t\t\t\tdisplay:inline-block;\n\t\t\t\tvertical-align: middle;\n\t\t\t}\n\t\t\t.' + componentNameDash + '--dropup .' + componentNameDash + '__dropdown {\n\t\t\t\ttop:auto; bottom:calc(100% + 10px);\n\t\t\t}\n\t\t\t.' + componentNameDash + '--opened .' + componentNameDash + '__dropdown {\n\t\t\t\topacity:1;\n\t\t\t\tpointer-events:all;\n\t\t\t\theight:auto;\n\t\t\t}\n\t\t\t.' + componentNameDash + '__options {\n\t\t\t\toverflow-y: auto;\n\t\t\t\toverflow-x: hidden;\n\t\t\t\theight: 100%;\n\t\t\t\tmax-height: 100vh;\n\t\t\t}\n\t\t\t.' + componentNameDash + '__option {\n\t\t\t\tlist-style: none;\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t\t.' + componentNameDash + '__option--disabled {\n\t\t\t\tpointer-events: none;\n\t\t\t}\n\t\t\t.' + componentNameDash + '__option--hidden {\n\t\t\t\tdisplay:none;\n\t\t\t}\n\t\t\t.' + componentNameDash + '__selection {\n\t\t\t}\n\t\t\t.' + componentNameDash + '__selection-tag {\n\t\t\t}\n\t\t\t.' + componentNameDash + '__reset {\n\t\t\t\tvisibility:hidden;\n\t\t\t\tpointer-events:none;\n\t\t\t}\n\t\t\t:hover > .' + componentNameDash + '__reset {\n\t\t\t\tvisibility:visible;\n\t\t\t\tpointer-events:all;\n\t\t\t}\n\t\t\t.' + componentNameDash + '__selection-tag-close {\n\t\t\t}\n\t\t';
		}

		/**
   * Default props
   * @definition 		SWebComponent.defaultProps
   * @protected
   */

	}, {
		key: 'defaultProps',
		get: function get() {
			return {

				/**
     * Callback function when the select dropdown opens
     * @prop
     * @type 	{Function}
     */
				onOpen: null,

				/**
     * Callback function when the select dropdown close
     * @prop
     * @type 	{Function}
     */
				onClose: null,

				/**
     * Display or not the search field in the dropdown
     * @prop
     * @type 	{Boolean}
     */
				searchField: true,

				/**
     * Specify the placeholder to display in the search field if the search is activated
     * @prop
     * @type 	{String}
     */
				searchPlaceholder: 'Search...',

				/**
     * Specify if the internal search is activated or not. If so, when the user make a search, the select will
     * automatically filter itself depending on the entered keywords and the options values.
     * @prop
     * @type  	{Boolean}
     */
				internalSearch: true,

				/**
     * Specify how many characters has to be entered in the search field before triggering an actial search or search callback
     * @prop
     * @type  	{Integer}
     */
				minCharactersForSearch: 1,

				/**
     * Function to call when the user is making a search in the search field.
     * - parameter 1 : The searched text is passed to this function, then you can handle the search as you want.
     * - parameter 2 : The component that has triggered the search
     * @prop
     * @type 	{Function}
     */
				onSearch: null,

				/**
     * Specify if the user can reset the select by clicking on the reset button or not
     * @prop
     * @type 	{Boolean}
     */
				resetAllowed: true,

				/**
     * Specify the margin in pixels to keep between the select dropdown and the window top corner
     * @prop
     * @type 	{Integer}
     */
				screenMarginTop: 50,

				/**
     * Specify the margin in pixels to keep between the select dropdown and the window bottom corner
     * @prop
     * @type 	{Integer}
     */
				screenMarginBottom: 50,

				/**
     * Specify the limit height under which to set the select as a dropup
     * @prop
     * @type 		{Number}
     */
				dropupLimit: 200
			};
		}
	}]);

	return SSelectComponent;
}((0, _sNativeWebComponent2.default)(HTMLSelectElement));

exports.default = SSelectComponent;

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(194)(undefined);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/**\n * Scope the entire css stack inside a class\n * to avoid conflict with pages where it will be included\n */\n/**\n* Vendors\n* All external librarie needed in the project.\n*/\n/**\n * Vendors\n * All external librarie needed in the project.\n */\n/**\n * Parse and return the Map respresentation of a border property\n * The $border argument will be parsed with the [s-parse-properties](../core/functions/_s-parse-properties.scss) function.\n *\n * @param \t\t{List} \t\t\t$border \t\t\tThe border property to parse\n * @return \t\t{Map} \t\t\t\t\t\t\t\tThe Map represenration of the border\n *\n * @example\n * s-border(1px solid white);\n * // return\n * // (\n * // \twidth : 1px,\n * // \tcolor : white,\n * // \tstyle : solid\n * // )\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Return the Map representation of a columns properties\n * @param  \t\t{Interger} \t\t\t[$count=null] \t\t\tThe number of columns\n * @param \t\t{Number} \t\t\t[$gap=null] \t\t\tThe gap width between each columns\n * @param \t\t{String} \t\t\t[$fill=null] \t\t\tThe fill property (balance,auto,initial,inherit)\n * @param \t\t{Number} \t\t\t[$width=null] \t\t\tThe width of the columns\n * @param \t\t{Integer|String} \t[$span=null] \t\t\tThe column-span property (1,all,initial,inherit)\n * @param \t\t{List} \t\t\t\t[$rule=null] \t\t\tThe column-rule property\n * @param \t\t{String} \t\t\t[$rule-style=null]  \tThe column-rule-style property\n * @param \t\t{Color} \t\t\t[$rule-color=null] \t\tThe column-rule-color property\n * @param \t\t{Number} \t\t\t[$rule-width=null] \t\tThe column-rule-width property\n * @return \t\t{Map} \t\t\t\t\t\t\t\t\t\tThe map representation or the columns properties\n *\n * @example\n * s-columns(2, 20px);\n * // return\n * // (\n * // \tcolumn-count : 2,\n * // \tcolumn-gap : 20px\n * // )\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Parse and return the Map respresentation of a margin property\n * The $margin argument will be parsed with the [s-parse-properties](../core/functions/_s-parse-properties.scss) function.\n *\n * @param \t\t\t{List|Number} \t\t\t$margin \t\t\tThe margin property to parse\n * @return \t\t\t{Map} \t\t\t\t\t\t\t\t\t\tThe map representation\n *\n * @example\n * s-margin(10px); // => ( top:10px, right:10px, bottom:10px, left:10px )\n * s-margin(10px 20px); // => ( top:10px, right:20px, bottom:10px, left:20px )\n * s-margin(5px 10px 15px 20px); // => ( top:5px, right:10px, bottom:15px, left:20px )\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Return the representation of a position styling like position:absolute; top:0; left:100%; etc...\n * This function gives you some shortcuts to align your element top, bottom, middle, center, etc...\n *\n * @param \t\t{String} \t\t\t[$position=absolute] \t\t\tThe position css property\n * @param \t\t{String} \t\t\t[$vertical-align=top] \t\t\tThe vertical alignement wanted (top,middle,bottom)\n * @param \t\t{String} \t\t\t[$align=left] \t\t\t\t\tThe horizontal alignement wanted (left,center,right)\n * @param \t\t{Number} \t\t\t[$top=null] \t\t\t\t\tThe top property wanted\n * @param \t\t{Number} \t\t\t[$right=null] \t\t\t\t\tThe right property wanted\n * @param \t\t{Number} \t\t\t[$bottom=null] \t\t\t\t\tThe bottom property wanted\n * @param \t\t{Number} \t\t\t[$left=null] \t\t\t\t\tThe left property wanted\n * @return \t\t{Map} \t\t\t\t\t\t\t\t\t\t\t\tThe map representation of the position wanted\n *\n * @example\n * s-position(absolute, top, right);\n * s-position(absolute, middle, center);\n * s-position(relative, bottom, right);\n * s-position(absolute, bottom, center);\n * // etc...\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Return the Map properties representation for the rhythme width\n * The rhythme width is the width of an element that target a certain number of letters by line\n *\n * @param \t\t\t{Integer} \t\t\t[$letters-count=settings.typography.line-letters-count] \t\tThe number of letters to target by line\n * @return \t\t\t{Map} \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tThe Map properties representation\n *\n * @example\n * s-rhythme-width(50);\n * // return\n * // (\n * // \tdisplay : block,\n * // \tmax-width : 50ex\n * // )\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Return the Map properties representation of a translate x,y and z\n *\n * @param \t\t\t{Number} \t\t\t[$x=0] \t\t\tThe x translate value\n * @param \t\t\t{Number} \t\t\t[$y=0] \t\t\tThe y translate value\n * @param \t\t\t{Number} \t\t\t[$z=0] \t\t\tThe z translate value\n * @return \t\t\t{Map} \t\t\t\t\t\t\t\tThe translate Map representation\n *\n * @example\n * s-translate(10px,20px);\n * // return\n * // (\n * // \ttransform: translateX(10px) translateY(20px) translateZ(0)\n * // )\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Return the settings.vertical-rhythme.scope-class value\n *\n * @return \t\t\t{String} \t\t\tThe settings.vertical-rhythme.scope-class value\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Helper mixin to set a background image\n *\n * @param \t\t\t{String} \t\t\t\t[$repeat=null] \t\t\t\tThe background-repeat property\n * @param \t\t\t{String} \t\t\t\t[$size=null] \t\t\t\tThe background-size property\n * @param \t\t\t{String} \t\t\t\t[$attachment=null] \t\t\tThe background-attachment property\n * @param \t\t\t{String} \t\t\t\t[$blend-mode=null] \t\t\tThe background-blend-mode property\n * @param \t\t\t{String} \t\t\t\t[$clip=null] \t\t\t\tThe background-clip property\n * @param \t\t\t{String} \t\t\t\t[$url=null] \t\t\t\tThe background-image url property\n * @param \t\t\t{Number} \t\t\t\t[$width=null] \t\t\t\tThe background-size width property\n * @param \t\t\t{Number} \t\t\t\t[$height=null] \t\t\t\tThe background-size height property\n * @param \t\t\t{Number} \t\t\t\t[$top=null] \t\t\t\tThe background-position top property\n * @param \t\t\t{Number} \t\t\t\t[$left=null] \t\t\t\tThe background-position left property\n * @param \t\t\t{String} \t\t\t\t[$suffix2x=@2x] \t\t\tThe suffix to add the the url if the 2x resolution if wanted\n * @param \t\t\t{String} \t\t\t\t[$suffix3x=@3x] \t\t\tThe suffix to add the the url if the 3x resolution if wanted\n * @param \t\t\t{String} \t\t\t\t[$suffix4x=@4x] \t\t\tThe suffix to add the the url if the 4x resolution if wanted\n * @param \t\t\t{List} \t\t\t\t\t[$resolution=null] \t\t\tThe resolution wanted like 2x, 3x and 4x\n * @param \t\t\t{List} \t\t\t\t\t[$position=null] \t\t\tThe background-position property\n *\n * @example\n * .my-cool-element {\n * \t\t\\@include s-background(\n * \t\t\t$url : 'img/my-cool-image.jpg',\n * \t\t\t$size : cover,\n * \t\t\tresolution : 2x 3x 4x\n * \t\t);\n * }\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * @name \tBEM mixins\n * Some useful mixins to work with BEM methodology\n */\n/**\n * BEM block selector\n * @param \t\t{String} \t\t\t\t$name \t\tThe block name\n * @param \t\t{String|List<String>} \t[$extend=false] \tThe list of item to extends\n * @example \tscss\n * \\@include s-Bem('card') {\n *  \tbackground: white;\n * }\n *\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * BEM element selector\n * @param \t\t{String} \t\t\t\t$name \t\tThe block name\n * @param \t\t{String|List<String>} \t[$extend=false] \tThe list of item to extends\n * @example \tscss\n * \\@include s-Bem(card) {\n * \tbackground:white;\n *\n * \t\\@include s-bEm(title) {\n * \t\tfont-size:20px;\n * \t}\n * }\n *\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * BEM modifier selector\n * @param \t\t{String} \t\t\t\t$name \t\tThe block name\n * @param \t\t{String|List<String>} \t[$extend=false] \tThe list of item to extends\n * @param \t\t{Boolean} \t\t\t\t[$standelone=s-setting('BEM.standelone')] \t\tIf true, will automatically extends the base element\n * @example \tscss\n * \\@include s-Bem(card) {\n * \tbackground:white;\n *\n * \t\\@include s-beM(blue) {\n * \t\tbackground: blue;\n * \t}\n * }\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Apply some border radius\n * @param \t\t{Number} \t\t[$radius=null] \t\t\tThe radius to apply globally\n * @param \t\t{Number} \t\t[$top=null] \t\t\tThe radius to apply on top corners\n * @param \t\t{Number} \t\t[$right=null] \t\t\tThe radius to apply on right corners\n * @param \t\t{Number} \t\t[$bottom=null] \t\t\tThe radius to apply on bottom corners\n * @param \t\t{Number} \t\t[$left=null] \t\t\tThe radius to apply on left corners\n * @param \t\t{Number} \t\t[$top-left=null] \t\tThe radius to apply on top-left corners\n * @param \t\t{Number} \t\t[$top-right=null] \t\tThe radius to apply on top-right corners\n * @param \t\t{Number} \t\t[$bottom-left=null] \tThe radius to apply on bottom-left corners\n * @param \t\t{Number} \t\t[$bottom-right=null] \tThe radius to apply on bottom-right corners\n *\n * @example \tscss\n * .my-cool-item {\n * \t// apply on top left and right corners\n * \t\\@include s-border-radius(\n * \t\t$top : 10px;\n * \t);\n * \t// apply on each corners\n * \t\\@include s-border-radius(10px);\n * \t// etc...\n * }\n *\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Center a block element using margins etc...\n * @example \tscss\n * .my-cool-block-element {\n * \t\\@include s-center-block();\n * }\n *\n * @author \tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * @name \ts-clearfix\n * Apply a clearfix on the element.\n * Supported methods:\n * - micro\n * - facebook\n * - float\n * - micro\n *\n * @param \t\t{String} \t\t[$method=micro] \t\tThe clearfix method to use\n *\n * @example \tscss\n * .my-cool-element {\n *  \\@include s-clearfix();\n * }\n *\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n#template-stack .clearfix-overflow {\n  overflow: hidden;\n}\n\n#template-stack .clearfix-facebook {\n  display: table-cell;\n  vertical-align: top;\n  width: 10000px !important;\n}\n\n#template-stack .clearfix-float {\n  float: left;\n  width: 100%;\n}\n\n#template-stack .clearfix, #template-stack .clearfix-micro {\n  zoom: 1;\n}\n\n#template-stack .clearfix:before, #template-stack .clearfix-micro:before, #template-stack .clearfix:after, #template-stack .clearfix-micro:after {\n  content: \" \";\n  display: table;\n}\n\n#template-stack .clearfix:after, #template-stack .clearfix-micro:after {\n  clear: both;\n}\n\n/**\n * Display a coffeekraken logo with two specified colors\n * @param \t\t{Color} \t\t[$color=default] \tThe base color to use\n * @param \t\t{Color} \t\t[$accent=primary] \tThe accent color to use\n *\n * @example \tscss\n * .my-cool-coffeekraken-logo {\n * \t\\@include s-coffeekraken-logo();\n * }\n *\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Create a column layout my setting each columns properties at once\n * @param \t\t{Integer} \t\t[$count=null] \t\tThe number of columns wanted\n * @param \t\t{Number} \t\t[$gap=null] \t\tThe column-gap width wanted\n * @param \t\t{String} \t\t[$fill=null] \t\tThe column-fill wanted\n * @param \t\t{Number} \t\t[$width=null] \t\tTHe width of each columns wanted\n * @param \t\t{String} \t\t[$span=null] \t\tSpecify on how many columns the element has to span across\n * @param \t\t{List} \t\t\t[$rule=null] \t\tSpecify the shorthand version of the column-rule-color, column-rule-style and column-rule-width\n * @param \t\t{String} \t\t[$rule-style=null] \tSpecify the column-rule-style wanted\n * @param \t\t{Color} \t\t[$rule-color=null] \tSpecify the column-rule-color wanted\n * @param \t\t{Number} \t\t[$rule-width=null] \tSpecify the column-rule-width wanted\n *\n * @example \tscss\n * .my-cool-container {\n * \t\\@include s-columns(\n * \t\t$count : 3,\n * \t\t$gap : 30px,\n * \t\t$span : solid s-color(primary) 20px\n * \t);\n * }\n *\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Apply some border radius\n * @param \t\t{Number} \t\t[$radius=null] \t\t\tThe radius to apply globally\n * @param \t\t{Number} \t\t[$top=null] \t\t\tThe radius to apply on top corners\n * @param \t\t{Number} \t\t[$right=null] \t\t\tThe radius to apply on right corners\n * @param \t\t{Number} \t\t[$bottom=null] \t\t\tThe radius to apply on bottom corners\n * @param \t\t{Number} \t\t[$left=null] \t\t\tThe radius to apply on left corners\n * @param \t\t{Number} \t\t[$top-left=null] \t\tThe radius to apply on top-left corners\n * @param \t\t{Number} \t\t[$top-right=null] \t\tThe radius to apply on top-right corners\n * @param \t\t{Number} \t\t[$bottom-left=null] \tThe radius to apply on bottom-left corners\n * @param \t\t{Number} \t\t[$bottom-right=null] \tThe radius to apply on bottom-right corners\n *\n * @example \tscss\n * .my-cool-item {\n * \t// apply on top left and right corners\n * \t\\@include s-corner(\n * \t\t$top : 10px;\n * \t);\n * \t// apply on each corners\n * \t\\@include s-corner(10px);\n * \t// etc...\n * }\n *\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n@keyframes s-DOMNodeInserted {\n  from {\n    opacity: .99;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n/**\n * Make the element fit his container.\n * @param \t{String} \t\t\t[$position=null] \t\tThe position how to fit the element.\n *\n * @example \tscss\n * .my-cool-element {\n * \t\\@include s-fit(absolute);\n * }\n *\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Hide the contained text\n *\n * @example \tscss\n * .my-cool-container {\n * \t\\@include s-hide-text();\n * }\n *\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Apply an icon on the element. This mixin support font-awesome and custom icons systems that have an icon name formated like \"icon-{name}\"\n * @param \t\t{String} \t\t$name \t\tThe icon name to apply\n *\n * @example \tscss\n * .my-cool-icon {\n * \t\\@include s-icon(fa-user);\n * }\n *\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Set how to render the image\n * @param \t\t{String} \t\t[$mode=auto] \t\tThe mode to use to render the image\n *\n * @example \tscss\n * img {\n * \t\\@include s-image-rendering(crips-edges);\n * }\n *\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Set how the list bullet has to be displayed.\n * @param \t\t{String} \t\t[$type=null] \t\t\t\tThe list type to use. Can be all the list-style-type values\n * @param \t\t{Url} \t\t\t[$image=null] \t\t\t\tAn image url to use as bullet\n * @param \t\t{String} \t\t[$icon=null] \t\t\t\tAn icon name to use as bullet. Will use the s-icon mixin under the hood\n * @param \t\t{Color} \t\t[$color=s-color(default)] \tThe color to use for the bullet\n * @param \t\t{Number} \t\t[$size=null] \t\t\t\tThe size to use for the bullet\n * @param \t\t{Number|List<Number>} \t[$offset=null] \t\tA number that represent the top offset, or a list of two numbers that represent the top, left offset\n * @param \t\t{String} \t\t[$font=null] \t\t\t\tThe font name to use for the bullet\n * @param \t\t{Number} \t\t[$space=null] \t\t\t\tThe space between the bullet and the content\n *\n * @example \tscss\n * .my-cool-list__item {\n * \t@\\include s-list-bullet(\n * \t\t$image : '../img/my-cool-bullet.svg',\n * \t\t$offset : 5px 10px,\n * \t\t$size : 1em,\n * \t\t$space : 2em\n * \t);\n * }\n *\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Start a new list\n * @param \t\t{String} \t\t[$counter-reset=s-list] \t\tA counter name to reset\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Easy to use media query mixin that support cssua classes to target specific browsers\n * @param \t\t{String} \t\t[$screen=null] \t\t\tAny of the @media screen type property like \"screen, handheld, print, etc...\"\n * @param \t\t{Number} \t\t[$min-width=null] \t\tThe min width to target\n * @param \t\t{Number} \t\t[$max-width=null] \t\tThe max width to target\n * @param \t\t{Number} \t\t[$min-height=null] \t\tThe min height to target\n * @param \t\t{Number} \t\t[$max-height=null] \t\tThe max height to target\n * @param \t\t{String} \t\t[$orientation=null] \tThe orientation to target. Can be portrait or landscape\n * @param \t\t{String} \t\t[$resolution=null] \t\tThe resolution to target. Can be 2x, 3x, 4x, etc...\n * @param \t\t{String} \t\t[$engine=null] \t\t\tThe engine that powers the display. Can be gecko, webkit, trident, blink or presto\n * @param \t\t{String} \t\t[$device=null] \t\t\tThe device to target. Can be mobile, tablet, desktop, iphone or ipad\n * @param \t\t{String} \t\t[$browser=null] \t\tThe browser(s) to target. Can be chrome, safari, firefox, opera, ie, ie6-20\n * @param \t\t{String} \t\t[$system=null] \t\t\tThe system(s) to target. Can be ios, osx, windows, linux, android, webos or blackberry\n *\n * @example \tscss\n * // simple min width\n * \\@include s-media(\n * \t$min-width : 200px\n * ) {\n * \t// custom css here...\n * }\n *\n * // target a specific engine\n * \\@include s-media(\n * \t$engine : gecko webkit\n * ) {\n * \t// custom css here\n * }\n *\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Set the placeholder style for inputs, etc...\n *\n * @example \tscss\n * input, textarea {\n * \t\\@include s-placeholder() {\n * \t\tcolor : red;\n * \t}\n * }\n *\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Set a complexe position styling like position:absolute; top:0; left:100%; etc...\n * This mixin gives you some shortcuts to align your element top, bottom, middle, center, etc...\n *\n * @param \t\t{String} \t\t\t[$position=absolute] \t\t\tThe position css property\n * @param \t\t{String} \t\t\t[$vertical-align=top] \t\t\tThe vertical alignement wanted (top,middle,bottom)\n * @param \t\t{String} \t\t\t[$align=left] \t\t\t\t\tThe horizontal alignement wanted (left,center,right)\n * @param \t\t{Number} \t\t\t[$top=null] \t\t\t\t\tThe top property wanted\n * @param \t\t{Number} \t\t\t[$right=null] \t\t\t\t\tThe right property wanted\n * @param \t\t{Number} \t\t\t[$bottom=null] \t\t\t\t\tThe bottom property wanted\n * @param \t\t{Number} \t\t\t[$left=null] \t\t\t\t\tThe left property wanted\n * @return \t\t{Map} \t\t\t\t\t\t\t\t\t\t\t\tThe map representation of the position wanted\n *\n * @example\n * .my-cool-element {\n * \t// absolute top right\n * \t\\@include s-position(absolute, top, right);\n * \t// custom right and bottom values\n * \t\\@include s-position(absolute,\n * \t\t$bottom : 20px,\n * \t\t$right : 20px\n * \t);\n * \t// etc...\n * }\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Apply a ratio css styling. This will apply a before or after content that will make the element keep the specified ratio.\n * The content need to be displayed as absolute top left and fit in size.\n *\n * @param \t\t{Number} \t\t$ratio \t\t\tThe ratio to keep like 16/9, etc...\n * @param \t\t{String} \t\t[$type=before] \tThe type of ratio to apply. Can be before or after\n *\n * @example \tscss\n * .my-cool-element {\n * \t\\@include s-ratio(16/9);\n * }\n *\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Print out a reset css\n * @example \tscss\n *\n * \\@include s-reset();\n *\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Print out the css on a container that will make the lines displays a maximum number of characters.\n *\n * @example \tscss\n * h1 {\n * \t\\@include s-rhythme-width(45);\n * }\n *\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Apply some css to have a rounded element with already an overflow on it\n *\n * @param \t\t{Number} \t\t[$size=null] \t\tThe size (width and height) of the element wanted\n * @param \t\t{Number} \t\t[$width=null] \t\tThe width of the element wanted\n * @param \t\t{Number} \t\t[$height=null] \t\tThe height of the element wanted\n *\n * @example \tscss\n * .my-cool-image {\n * \t\\@include s-round(100px);\n *\n * \timg {\n * \t\t\\@include s-size(cover);\n * \t}\n * }\n */\n/**\n * Quicky and easily set simple or complexe size to any element\n * @param \t\t{String|Number} \t\t$size-width\t\t\t\tThe size like \"cover\" or \"contain\", or the width un number\n * @param \t\t{Number} \t\t\t\t[$height=null] \t\t\tThe height wanted\n * @param \t\t{String} \t\t\t\t[$position=absolute] \tThe position wanted if the size is \"cover\" or \"contain\"\n *\n * @example \tscss\n * .my-cool-image {\n * \t\\@include s-size(cover);\n * }\n *\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Quicky set some translates\n * @param \t\t{Number} \t\t[$x=0] \t\tThe x translate value\n * @param \t\t{Number} \t\t[$y=0] \t\tThe y translate value\n * @param \t\t{Number} \t\t[$z=0] \t\tThe z translate value\n *\n * @example\n * .my-cool-element {\n * \t\\@include s-translate(50%, 20px);\n * }\n *\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Print out the style to truncate the text if needed\n *\n * @example \tscss\n * h1 {\n * \t\\@include s-truncate-text();\n * }\n *\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Vertically align content by using the inline-block middle trick\n *\n * @example \tscss\n * .my-cool-container {\n * \t\\@include s-vertical-aligner();\n * }\n *\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Hide an element only visually. This ensure that the element is still correctly displayed in the page for SEO\n * but will not being visible to the user\n *\n * @example \tscss\n * .my-cool-element {\n * \t\\@include s-visually-hidden();\n * }\n *\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Get a registered color by name or wrap a new color into a s-color call\n * to manipulate it with ease.\n * Supported actions :\n * - hue {Deg}\n * - lighten {Percent}\n * - darken {Percent}\n * - saturate {Percent}\n * - desaturate {Percent}\n * - grayscale {Boolean}\n * - complement {Boolean}\n * - invert {Boolean}\n * - opacity {Percent}\n * - mix {Color}\n *\n * @param \t\t{String|Color} \t\t$color \t\t\t\tThe color name or the color value to manipulate\n * @param \t\t{String|List} \t\t\t[$modifier=null] \tThe color modifier to apply. Can be a registered modifier name or a modifier list\n * @return \t\t{Color} \t\t\t\t\t\t\t\t\tThe actual color value\n *\n * @example \t \tscss\n * // default color (settings.colors.default)\n * $myColor : s-color(default);\n * // primary color (settings.colors.primary)\n * $primary : s-color(primary);\n * // manipulate\n * $primary-dark : s-color(primary, -darken 10%);\n * // registered modifier\n * $primary-light : s-color(primary, light);\n * // $name as list\n * $modified primary : s-color((primary, -darken 10%));\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Return the color in a modifier list\n * @param \t\t\t{List} \t\t\t$modifiers \t\tThe modifiers list\n * @return \t\t\t{String} \t\t\t\t\t\tThe color name\n *\n * @example\n * $my-color : s-color-modifier(outline primary); // => primary\n *\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Return the css class selector for the current component setted by the [core/mixins/_s-component.scss] mixin\n * and build with the passed arguments.\n *\n * @param \t\t\t{String} \t\t\t[$element=null] \t\tThe element name of the class selector | '&' if target the same element like `&s-component-selector(\"&\", ) {}`\n * @param \t\t\t{String} \t\t\t[$modifier=null] \t\tThe modifier name of the class selector\n * @param \t\t\t{String} \t\t\t[$state=null] \t\t\tThe state name of the class selector\n * @return \t\t\t{String} \t\t\t\t\t\t\t\t\tThe generated class selector\n *\n * @example\n * \\@incluse s-component('my-component') {\n * \t\t// if settings.selector.method === 'BEM'\n * \t\ts-component-selector('item') // => '.my-component__item'\n * \t\ts-component-selector(null, 'red') // => '.my-component--red'\n * \t\ts-component-selector('coco',null,'active') // => '.my-component__coco--active'\n * }\n *\n * // if target the same element with & :\n * \\@include s-component('my-component') {\n * \t\ts-component-selector(, red, , \"color\") {\n * \t\t\t&s-component-selector(\"&\", , \"active\") {\n * \t\t\t\t// something here...\n * \t\t\t}\n * \t\t}\n * }\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Return the name of the top level component setted with the [../mixins/_s-component.scss] mixin\n *\n * @param \t\t\t{String} \t\t\t[$default=null] \t\tThe name to return if no top component name exist\n * @return \t\t\t{String} \t\t\t\t\t\t\t\t\tThe component name\n *\n * @example\n * s-component('hello') // => 'hello'\n * \\@include s-component('my-component') {\n * \t\ts-component('hello') // => 'my-component'\n * \t\t\\@include s-component('another-component') {\n * \t\t\ts-component('hello') // => 'my-component'\n * \t\t}\n * }\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>;\n */\n/**\n * Convert a passed value to the wanted unit\n * The conversion between some units that depends on a font-size will take the settings.typography.font-size value as reference.\n *\n * Available conversions\n * - from px\n * \t- to em\n * \t- to rem\n * \t- to pt\n * \t- to %\n *\n * - from em\n * \t- to rem\n * \t- to px\n * \t- to pt\n * \t- to %\n *\n * - from pt\n * \t- to em\n * \t- to rem\n * \t- to px\n * \t- to pt\n * \t- to %\n *\n * - from rem\n * \t- to em\n * \t- to px\n * \t- to pt\n * \t- to %\n *\n * @param \t\t\t{Number} \t\t$value \t\t\tThe value to convert\n * @param \t\t\t{String} \t\t$unit \t\t\tThe unit in which to convert the value\n * @return \t\t\t{Number} \t\t\t\t\t\tThe converted value\n *\n * @example\n * // if the settings.typography.font-size === 16px\n * s-convert(24px, rem) // 1.5rem\n * s-convert(3rem, pt) // 36pt\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Transform a dash notation value into a map\n * Dash notation value is : -key1 value1 -key2 value2\n *\n * @param \t\t\t{List} \t\t\t$dash \t\t\tThe dash list notation to transform\n * @return \t\t\t{Map} \t\t\t\t\t\t\tThe map generated\n *\n * @example\n * $dash : -hello world -coco universe\n * s-dash-to-map($dash);\n * // (\n * // \thello : world,\n * // \tcoco : universe\n * // )\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Convert the passed value to em\n *\n * @param \t\t\t{Number} \t\t$value \t\tThe value to convert\n * @return \t\t\t{Number} \t\t\t\t\tThe em converted value\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Convert the passed value to the closest even value\n *\n * @param \t\t\t{Number} \t\t$value \t\tThe value to convert\n * @return \t\t\t{Number} \t\t\t\t\tThe closest even converted value\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Take a filter as parameter and parse it to return the {Map} corresponding\n * The $filter parameter can be either a registered filter name or a filter formated like `filterName(filterValue)`\n *\n * @param \t\t\t{List}<String> \t\t\t$filter \t\t\tThe registered filter name or the filter string to transform into map\n * @return \t\t\t{Map} \t\t\t\t\t\t\t\t\t\tThe corresponding filter map properties\n *\n * @example\n * // register a filter\n * \\@include s-setup((\n * \t\tfilters : (\n * \t\t\tmyCoolFilter : box-shadow(#000 0 0 10px) blur(30px),\n * \t\t\t// other filters...\n * \t\t)\n * ));\n *\n * // registered filter\n * s-filter-map(myCoolFilter);\n * // {\n * // \tbox-shadow : #000 0 0 10px,\n * // \tblur : 30px\n * // }\n *\n * // custom filter\n * s-filter-map(blur(10px));\n * // {\n * // \tblur : 10px\n * // }\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Return a list with all the filters that are passed as argument\n * This will use the [./_s-filter-map.scss] function to parse the filters\n *\n * @param \t \t{List}<String> \t\t\t$filters \t\t\tThe registered filter(s) name(s) or the filter(s) string(s) to transform into list\n * @return \t\t{List} \t\t\t\t\t\t\t\t\t\tThe converted filters list to use as css property\n *\n * @example\n * // register a filter\n * \\@include s-setup((\n * \t\tfilters : (\n * \t\t\tmyCoolFilter : box-shadow(#000 0 0 10px) blur(30px),\n * \t\t\t// other filters...\n * \t\t)\n * ));\n *\n * // registered filter\n * .my-cool-elememt {\n * \t\tfilter : s-filter(myCoolFilter);\n * \t\t// filter : box-shadow(#000 0 0 10px) blur(30px);\n * }\n *\n * // custom filter\n * .my-cool-element {\n * \t\tfilter : s-filter(myCoolFilter invert(100%));\n * \t\t// filter : box-shadow(#000 0 0 10px) blur(30px) invert(100%);\n * }\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Return the font-family string or a registered font\n *\n * @param \t\t\t{String} \t\t$name \t\tThe name of the registered font\n * @return \t\t\t{String} \t\t\t\t\tThe corresponding font-family property to set in your css\n *\n * @example\n * // register a font\n * \\@include s-setup((\n * \t\tfonts : (\n * \t\t\tmyCoolFont : (\n * \t\t\t\tfont-family : 'Helvetica Neue',\n * \t\t\t\tfont-weight : 'bold',\n * \t\t\t\t// etc...\n * \t\t\t),\n * \t\t\t// other fonts...\n * \t\t)\n * ));\n *\n * // apply the font\n * .my-cool-element {\n * \t\tfont-family : s-font-family(myCoolFont);\n * \t\t// font-family : 'Helvetica Neue';\n * }\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Return the font {Map} that correspond to the passed arguments\n *\n * @param \t\t{String} \t\t\t[$family=null] \t\t\tThe font family wanted (can be a registered font name)\n * @param \t\t{Color} \t\t\t[$color=null] \t\t\tThe color wanted (can be a registered color name)\n * @param \t\t{Number} \t\t\t[$size=null] \t\t\tThe font-size wanted\n * @param \t\t{String} \t\t\t[$style=null] \t\t\tThe font-style wanted\n * @param \t\t{String} \t\t\t[$variant=null] \t\tThe font-variant wanted\n * @param \t\t{String|Number} \t[$weight=null] \t\t\tThe font-weight wanted\n * @param \t\t{String} \t\t\t[$decoration=null] \t\tThe text-decoration wanted\n * @param \t\t{String} \t\t\t[$align=null] \t\t\tThe text-align wanted\n * @param \t\t{String} \t\t\t[$transform=null] \t\tThe text-transform wanted\n * @param \t\t{String} \t\t\t[$stretch=null] \t\tThe font-stretch wanted\n * @param \t\t{String} \t\t\t[$white-space=null] \tThe white-space wanted\n * @param \t\t{Number} \t\t\t[$height=null] \t\t\tThe line-height wanted\n * @param \t\t{Number} \t\t\t[$spacing=null] \t\tThe letter-spacing wanted\n * @param \t\t{Number} \t\t\t[$indent=null] \t\t\tThe text-indent wanted\n * @param \t\t{String} \t\t\t[$break=null] \t\t\tThe line-break wanted\n * @param \t\t{String} \t\t\t[$wrap=null] \t\t\tThe word-wrap wanted\n * @return \t\t{Map} \t\t\t\t\t\t\t\t\t\tThe corresponding font map\n *\n * @example\n * s-font(\n * \t\t$family : 'Helvetica Neue',\n * \t\t$size : 12px,\n * \t\t$wrap : norwap\n * );\n * // (\n * \t\tfont-family : 'Helvetica Neue',\n * \t\tfont-size : 12px,\n * \t\tword-wrap : nowrap\n * // )\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Check if the provided color is a registered one or not\n * @param \t\t{String} \t\t$color \t\tThe color nane to check\n * @return \t\t{Boolean} \t\t\t\t\tTrue if exists, false if not\n */\n/**\n * Return the specified or calculated value of the given stack and size\n * depending on the settings.sizes ratios stack\n *\n * @param \t\t{Map} \t\t\t$stack \t\t\tThe stack from which to interpolate the value\n * @param \t\t{String} \t\t$size \t\t\tThe size wanted (has to exist in the settings.sizes stack)\n * @return \t\t{Number} \t\t\t\t\t\tThe $stack.$size value or the interpolated one depending on the settings.sizes ratios\n *\n * @example\n *\n * // settings.sizes\n * \\@include s-setup((\n * \t\tsizes : (\n * \t\t\tsmall : 0.5,\n * \t\t\tdefault : 1, // default is ALWAYS 1\n * \t\t\tbig : 1.5\n * \t\t)\n * ));\n *\n * $myStack : (\n * \t\tdefault : 3rem,\n * \t\tbig : 6rem\n * )\n *\n * s-interpolate($myStack, big) // 6rem cause specified in the $myStack value\n * s-interpolate($myStack, small) // 1.5rem => calculated like : 3rem * 0.5 = 1.5rem\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Check if the passed value is of a certain type\n *\n * Here's the available types that you can check\n * - mixed => mean anything\n * - null\n * - url\n * - px\n * - pt\n * - rem\n * - em\n * - percent | %\n * - vw\n * - vh\n * - ex\n * - ch\n * - cm\n * - mm\n * - in\n * - pc\n * - s | second\n * - boolean | bool\n * - function\n * - number\n * - int | integer\n * - string\n * - color\n * - list\n * - map\n * - deg | degree\n * - list-{type} => check if is a list of the specified type\n * - map-{type} => check if is a map of the specified type\n *\n * @param \t\t\t{Mixed} \t\t\t$value \t\t\tThe value to check\n * @param \t\t\t{String} \t\t\t$type \t\t\tThe type to check\n * @return \t\t\t{Boolean} \t\t\t\t\t\t\ttrue if match the type, false if not\n *\n * @example\n * s-is(hello, string) // => true\n * s-is('hello', string) // => true\n * s-is(#fff, color) // => true\n * s-is(hello #fff, list-color) // => false\n * s-is(#fff #ddd, list-color) // => true\n * // etc...\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Alias to the [./_s-look-and-feel.scss] function\n *\n * Return a settings.look-and-feel stack value\n *\n * @param \t\t{String} \t\t$name\t\t\t\t\tThe look and feel value name\n * @return \t\t{Number} \t\t\t\t\t\t\t\tThe look and feel value in em\n *\n * @example\n * .my-cool-element {\n * \t\tpadding : s-lnf(padding-horizontal) s-lnf(padding-vertical);\n * }\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Return a settings.look-and-feel stack value\n *\n * @param \t\t{String} \t\t$name\t\t\t\t\tThe look and feel value name\n * @return \t\t{Number} \t\t\t\t\t\t\t\tThe look and feel value in em\n *\n * @example\n * .my-cool-element {\n * \t\tpadding : s-look-and-feel(padding-horizontal) s-look-and-feel(padding-vertical);\n * }\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Return the modular scale value based on the settings ```modular-scale.base``` and ```modular-scale.ratio```.\n *\n * @param \t\t\t{Number} \t\t$scale \t\tThe wanted scale\n * @param \t\t\t{Number} \t\t[$base=settings.modular-scale.base] \tThe base of calculation\n * @return \t\t\t{Number} \t\t\t\t\tThe calculated resulting value\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Convert the passed value to the closest odd value\n *\n * @param \t\t\t{Number} \t\t$value \t\tThe value to convert\n * @return \t\t\t{Number} \t\t\t\t\tThe closest odd converted value\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Parse a given string/list properties and return the Map corresponding to the Map description\n *\n * @param \t\t\t\t{List} \t\t\t\t$properties \t\t\tThe properties to parse\n * @param \t\t\t\t{Map} \t\t\t\t$descriptor \t\t\tThe descriptor map to use to parse the properties\n * @return \t\t\t\t{Map} \t\t\t\t\t\t\t\t\t\tThe properties in map format\n *\n * @example\n * s-parse-properties(10px hello -delay 20s, (\n *  \tmyNumber : Number,\n *  \tmyOtherNumber : Number,\n *  \tmyString : String,\n *  \tmyCoolVar : String,\n *  \tdelay : second\n * ));\n * // => (\n * //  \tmyNumber : 10px,\n * // \tmyString : hello,\n * // \tdelay : 20s\n * // )\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Convert the passed value to %\n *\n * @param \t\t\t{Number} \t\t$value \t\tThe value to convert\n * @return \t\t\t{Number} \t\t\t\t\tThe % converted value\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Convert the passed value to pt\n *\n * @param \t\t\t{Number} \t\t$value \t\tThe value to convert\n * @return \t\t\t{Number} \t\t\t\t\tThe pt converted value\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Convert the passed value to px\n *\n * @param \t\t\t{Number} \t\t$value \t\tThe value to convert\n * @return \t\t\t{Number} \t\t\t\t\tThe px converted value\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Convert the passed value to rem\n *\n * @param \t\t\t{Number} \t\t$value \t\tThe value to convert\n * @return \t\t\t{Number} \t\t\t\t\tThe rem converted value\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Return the passed values in the same unit but that has been even rounded on the corresponding px value\n * This ensure that your passed value will be a round px value for final rander in the viewport\n *\n * @param \t\t{Number} \t\t$value \t\t\tThe value to process\n * @return \t\t{Number} \t\t\t\t\t\tThe rounded value in same input unit but px rounded\n *\n * @example\n * // if settings.typography.font-size == 16px\n * s-render-round-even(5.2rem);\n * // 1. transform to px values : 5.2 * 16px = 83.2px\n * // 2. round even the px value : 84px\n * // 3. transform to passed unit value : 84px / 16px = 5.25rem\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Return the passed values in the same unit but that has been odd rounded on the corresponding px value\n * This ensure that your passed value will be a round px value for final rander in the viewport\n *\n * @param \t\t{Number} \t\t$value \t\t\tThe value to process\n * @return \t\t{Number} \t\t\t\t\t\tThe rounded value in same input unit but px rounded\n *\n * @example\n * // if settings.typography.font-size == 16px\n * s-render-round-odd(5.2rem);\n * // 1. transform to px values : 5.2 * 16px = 83.2px\n * // 2. round odd the px value : 83px\n * // 3. transform to passed unit value : 84px / 16px = 5.1875rem\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Return the passed values in the same unit but that has been rounded on the corresponding px value\n * This ensure that your passed value will be a round px value for final rander in the viewport\n *\n * @param \t\t{Number} \t\t$value \t\t\tThe value to process\n * @return \t\t{Number} \t\t\t\t\t\tThe rounded value in same input unit but px rounded\n *\n * @example\n * // if settings.typography.font-size == 16px\n * s-render-round(5.2rem);\n * // 1. transform to px values : 5.2 * 16px = 83.2px\n * // 2. round even the px value : 83px\n * // 3. transform to passed unit value : 84px / 16px = 5.1875rem\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Search and replace tokens like colors #primary in a passed string, list or map\n * Supported tokens types :\n * 1. Colors : colorName\n *\n * @example\n * s-replace-tokens(12px #primary hello #secondary); // > 12px #ddd hello #fff;\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Process selector to avoid having --default, etc...\n * @param \t\t{String} \t\t$selector \t\tThe selector to process\n * @return \t\t{String} \t\t\t\t\t\tThe processed selector\n * @example \tscss\n * s-selector('.input--default'); // => .input\n * s-selector('.input-default'); // => .input\n * s-selector('.input.default'); // => .input\n */\n/**\n * Get a settings from the global settings stack\n *\n * @param \t\t\t\t{String} \t\t\t$path \t\t\t\t\t\tThe setting path wanted separated by dots\n * @param \t\t\t\t{String} \t\t\t[$context=s-context()] \t\tThe context name to get the setting\n * @param \t\t\t\t{Mixed} \t\t\t[$default=null] \t\t\tThe value to return if no value is found\n * @return \t\t\t\t{Mixed} \t\t\t\t\t\t\t\t\t\tThe setting value¨\n *\n * @example\n * $font-size : s-setting('typography.font-size');\n * // etc...\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Return a value interpolated from the settings.spaces stack\n *\n * @param \t\t\t{String} \t\t\t$size \t\t\tThe space size wanted. Must exist in the settings.sizes stack\n * @return \t\t\t{Number} \t\t\t\t\t\t\tThe actual space value\n *\n * @example\n * .my-cool-section {\n * \t\tpadding : s-pace(big);\n * }\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Return a number without any units\n *\n * @param \t\t\t{Number} \t\t$number \t\tThe number to process\n * @return \t\t\t{Number} \t\t\t\t\t\tThe number without units\n *\n * @example\n * s-strip-units(12px); // => 12\n * s-strip-units(30rem); // => 30\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Test an argument passed to a function or a mixin to ensure his type, value, etc...\n * If the argument does not pass the test, an error will be thrown, unless the $check-only argument is true\n *\n * @param \t\t\t\t{String} \t\t\t\t$method \t\t\t\tThe function/mixin name (debug purpose)\n * @param \t\t\t\t{String} \t\t\t\t$argument \t\t\t\tThe argument name to test (debug purpose)\n * @param \t\t\t\t{List|String} \t\t\t$type-or-values \t\tIf string, the type(s) that the argument must match, if list, the possible values that the argument can take\n * @param \t\t\t\t{Mixed} \t\t\t\t$value \t\t\t\t\tThe actual argument value\n * @param \t\t\t\t{Boolean} \t\t\t\t[$check-only=false]\t\tIf this is true, will not thrown any error\n * @return \t\t\t\t{Mixed} \t\t\t\t\t\t\t\t\t\tThe value if ok, false if not\n *\n * @example\n * \\@mixin my-cool-mixin($argument1, $argument2) {\n *        $argument1 : s-test-argument(my-cool-mixin, argument1, string, $argument1);\n *        $argument2 : s-test-argument(my-cool-mixin, argument2, (hello,world,12), $argument2);\n * }\n * \\@mixin my-cool-mixin(hello, world); // ok\n * \\@mixin my-cool-mixin(hello, universe); // throw an error\n * \\@mixin my-cool-mixin(12, world); // throw an error\n *\n * @author \t\t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Return the text-format setting scope class\n * @return \t\t{String} \t\tThe text-format scope class from settings.text-format.scope-class\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Take a transition as parameter and parse it to return the {Map} corresponding\n * The $transition parameter can be either a registered transition name or a custom css transition like : all .2s ease-in-out 2s\n * The $transition argument will be parsed with the [./_s-parse-properties.scss] function.\n *\n * @param \t\t\t{List} \t\t\t\t$transition \t\t\tThe registered transition name or the transition string to transform into map\n * @return \t\t\t{Map} \t\t\t\t\t\t\t\t\t\tThe corresponding transition map properties\n *\n * @example\n * // register a transition\n * \\@include s-setup((\n * \t\ttransitions : (\n * \t\t\tfast : all .2s ease-in-out,\n * \t\t\t// other transitions...\n * \t\t)\n * ));\n *\n * // registered transition\n * s-transition-map(fast);\n * // {\n * // \tproperty : all,\n * // \tduration : .2s,\n * // \tease : ease-in-out\n * // }\n *\n * // custom transition\n * s-transition-map(fast -delay .5s);\n * // {\n * // \tproperty : all,\n * // \tduration : .2s,\n * // \tease : ease-in-out,\n * // \tdelay : .5s\n * // }\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Take a transition as parameter and parse it to return the {List} corresponding\n * The $transitions parameter can be either a registered transition name or a custom css transition like : all .2s ease-in-out 2s\n * The $transitions argument will be parsed with the [./_s-parse-properties.scss] function.\n *\n * @param \t\t\t{List} \t\t\t\t$transitions \t\t\tThe registered transition(s) name(s) or the transition(s) strings(s) to transform into list\n * @return \t\t\t{List} \t\t\t\t\t\t\t\t\t\tThe corresponding transition list properties\n *\n * @example\n * // register a transition\n * \\@include s-setup((\n * \t\ttransitions : (\n * \t\t\tfast : all .2s ease-in-out 0s,\n * \t\t\t// other transitions...\n * \t\t)\n * ));\n *\n * // registered transition\n * .my-cool-element {\n * \t\ttransition : s-transition(fast);\n * \t\t// transition : all .2s ease-in-out 0s;\n * }\n *\n * // custom transition\n * .my-cool-element {\n *  \ttransition : s-transition(fast -delay .5s, fast width ease-in);\n *  \t// transition : all .2s ease-in-out .5s, width .2s ease-in 0s;\n * }\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Return the unit context if has been set by the [s-unit-context mixin](../mixins/_s-unit-context.scss)\n *\n * @return \t\t{String} \t\t\t\tThe unit context setted\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Return the generated vertical rhythme properties map calculated depending on the passed arguments\n *\n * @param \t\t\t{Number} \t\t\t\t[$font-size=settings.typography.font-size] \t\t\tThe font size wanted\n * @param \t\t\t{String} \t\t\t\t[$font-family=settings.typography.font-family] \t\tThe font family to use\n * @param \t\t\t{Number} \t\t\t\t[$line-height=null] \t\t\t\t\t\t\tThe line height to use\n * @param \t\t\t{Number} \t\t\t\t[$margin-top=0] \t\t\t\t\t\t\t\tThe targeted margin-top\n * @param \t\t\t{Number} \t\t\t\t[$margin-bottom=0] \t\t\t\t\t\t\t\tThe targeted margin-bottom\n * @param \t\t\t{Number} \t\t\t\t[$padding-top=0] \t\t\t\t\t\t\t\tThe targeted padding-top\n * @param \t\t\t{Number} \t\t\t\t[$padding-bottom=0] \t\t\t\t\t\t\tThe targeted padding-bottom\n * @param \t\t\t{List} \t\t\t\t\t[$margin=null] \t\t\t\t\t\t\t\t\tThe targeted margin property\n * @param \t\t\t{List} \t\t\t\t\t[$padding=null] \t\t\t\t\t\t\t\tThe targeted padding property\n * @param \t\t\t{List} \t\t\t\t\t[$border-top=null] \t\t\t\t\t\t\t\tThe targeted border-top property\n * @param \t\t\t{List} \t\t\t\t\t[$border-bottom=null] \t\t\t\t\t\t\tThe targeted border-bottom property\n * @param \t\t\t{Number} \t\t\t\t[$border-top-width=0] \t\t\t\t\t\t\tThe targeted border-top-width property\n * @param \t\t\t{Number} \t\t\t\t[$border-bottom-width=0] \t\t\t\t\t\tThe targeted border-bottom-width property\n * @param \t\t\t{Number} \t\t\t\t[$border=null] \t\t\t\t\t\t\t\t\tThe targeted border property\n * @param \t\t\t{Number} \t\t\t\t[$cap-height=null] \t\t\t\t\t\t\t\tThe font cap-height used to calculate the vertical ryhthme\n * @param \t\t\t{Boolean|String} \t\t[$calculate-height=false] \t\t\t\t\t\tIf true|min-height|max-height|height, will return the corresponding absolute height value in the map\n *\n * @TODO example\n *\n * @see \t\t\thttps://medium.com/written-in-code/aligning-type-to-baseline-the-right-way-using-sass-e258fce47a9b#.lck2lgbni\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Return the vertical-rhythme setting scope class\n * @return \t\t{String} \t\tThe vertical-rhythme scope class from settings.vertical-rhythme.scope-class\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Generic sugar function can return multiple settings types like:\n * - any settings : s('settings.{path}')\n * - look and feel : s('look-and-feel.{property}', $size)\n *  \t- s('lnf.{property}', $size)\n * - space : s('space.{size}')\n * - color : s('color.{name}', $modifier)\n * - transition : s('transition.{name}')\n * - filter : s('filter.{name}')\n *\n * @example\n * $my-color : s('color.primary');\n * $my-transition : s('transition.fast');\n * $my-font-size : s('settings.typography.font.size')\n * // etc...\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Print out the animation property calculated with the passed arguments\n * This mixin support all the standard css animation properties like name, duration, delay, ease, direction and fill-mode.\n * The $animations argument will be parsed with the [../functions/_s-parse-properties.scss] function.\n * If you specify multiple animations at a time, this mixin will take care\n * of the delay calculation for each animations and make them play one after another\n *\n * @param \t\t\t{List} \t\t\t\t$animations \t\t\tThe animations wanted like : coco .2s ease-in-out reverse\n *\n * @example\n * .my-cool-element {\n * \t\t@include s-animation(my-animation 1s ease-in-out, another-animation 4s);\n * \t\t// animation : my-animation 1s 0s ease-in-out 1 normal forwards, another-animation 4s 1s ease-in-out 1 normal forwards;\n * }\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Print out all wanted registered classes like padding helpers, margin helpers, font helpers, etc...\n * Available namespaces\n * - sugar.filter.{name} : .fi-{name}\n * - sugar.transition.{name} : .tr-{name}\n * - sugar.font.family.{name} : .f-{name}\n * - sugar.margin.bottom.{size} : .m-b-{size}\n * - sugar.margin.top.{size} : .m-t-{size}\n * - sugar.margin.left.{size} : .m-l-{size}\n * - sugar.margin.right.{size} : .m-r-{size}\n * - sugar.margin.side.{size} : .m-s-{size}\n * - sugar.padding.all.{size} : .p-{size}\n * - sugar.padding.top.{size} : .p-t-{size}\n * - sugar.padding.bottom.{size} : .p-b-{size}\n * - sugar.padding.left.{size} : .p-l-{size}\n * - sugar.padding.right.{size} : .p-r-{size}\n * - sugar.padding.side.{size} : .p-s-{size}\n * - sugar.size.{size} : .s-{size}\n * - sugar.size.rel.{size} : .s-{size}-rel\n * - sugar.padding.no.top : .no-p-t\n * - sugar.padding.no.bottom : .no-p-b\n * - sugar.padding.no.left : .no-p-l\n * - sugar.padding.no.right : .no-p-r\n * - sugar.padding.no.side : .no-p-s\n * - sugar.margin.no.top : .no-m-t\n * - sugar.margin.no.bottom : .no-m-b\n * - sugar.margin.no.left : .no-m-l\n * - sugar.margin.no.right : .no-m-r\n * - sugar.margin.no.side : .no-m-s\n * - sugar.color.{name}.color` .c-{name}\n * - sugar.color.{name}.bkg : .bkg-{name}\n * - sugar.color.{name}.modifier.{mod-name}.color : .c-{name}--{mod-name}\n * - sugar.color.{name}.modifier.{mod-name}.bkg : .bkg-{name}--{mod-name}\n * - sugar.pull.left : .pull-left\n * - sugar.pull.right : .pull-right\n * - sugar.position.relative : .relative\n * - sugar.position.absolute : .absolute\n * - sugar.clear.left : .clear-left\n * - sugar.clear.right : .clear-right\n * - sugar.clear.both : .clear\n * - sugar.pointer.events.all : .pointer-events-all\n * - sugar.pointer.events.none : .pointer-events-none\n * - sugar.display.show : .show\n * - sugar.display.show-inline : .show-inline\n * - sugar.display.hidden : .hidden\n * - sugar.display.hide : .hide\n * - sugar.display.visible : .visible\n * - sugar.display.invisible : .invisible\n * - sugar.display.visually-hidden : .visually-hidden\n * - sugar.text.hidden : .t-hidden\n * - sugar.text.truncate : .t-truncate\n * - sugar.text.align.left : .t-left\n * - sugar.text.align.right : .t-right\n * - sugar.text.align.center : .t-center\n * - sugar.text.align.justify : .t-justify\n * - sugar.text.transform.lowercase : .t-lowercase\n * - sugar.text.transform.uppercase : .t-uppercase\n * - sugar.text.transform.capitalize : .t-capitalize\n * - sugar.font.weight.bold : .f-bold\n * - sugar.font.weight.lighter : .f-lighter\n * - sugar.font.weight.bolder : .f-bolder\n * - sugar.font.weight.normal : .f-normal\n * - sugar.font.style.italic : .f-italic\n * - sugar.font.style.oblique : .f-oblique\n * - sugar.font.variant.small-caps : .f-small-caps\n * - sugar.block.align.center : .block-center\n * - sugar.ratio.21-9 : ```.ratio-21-9```\n * - sugar.ratio.16-9 : ```.ratio-16-9```\n * - sugar.ratio.4-3 : ```.ratio-4-3```\n * - sugar.ratio.1-1 : ```.ratio-1-1```\n * - sugar.size.abs.cover : ```.abs-cover```\n * - sugar.size.abs.contain : ```.abs-contain```\n * - sugar.size.abs.fit : ```.abs-fit```\n * - sugar.clearfix.default : .clearfix\n * - sugar.clearfix.float : .clearfix-float\n * - sugar.clearfix.micro : .clearfix-micro\n * - sugar.clearfix.overflow : .clearfix-overflow\n * - sugar.clearfix.facebook : .clearfix-facebook\n * - sugar.no-transitions : .no-transitions\n * - sugar.clear-transitions : .clear-transitions\n * - sugar.no-animations : .no-animations\n * - sugar.clear-animations : .clear-animations\n * - sugar.no-transmations : .no-transmations\n * - sugar.clear-transmations : .clear-transmations\n *\n * @param \t\t\t{List}<string> \t\t\t$namespaces \t\tThe classes namespaces wanted\n *\n * @example\n * \\@include s-classes(); // will print out all the classes\n * \\@include s-classes('sugar.font'); // will print all the font classes\n * \\@include s-classes('sugar.clearfix' 'sugar.pull'); // the clearfixes and the pull classes\n * // etc...\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Print out the scoped color schema css\n *\n * @param \t\t{String} \t\t\t$name \t\t\tThe color schema name\n *\n * @example\n * \\@include s-color-schema(light) {\n * \t\th1, h2 {\n * \t\t\tcolor : white;\n * \t\t}\n * }\n * // will print\n * .cs-light h1,\n * .cs-light h2 {\n * \t\tcolor : white;\n * }\n *\n * h1, h2 {\n * \t\t\\@include s-color-schema(light) {\n * \t\t\tcolor : white;\n * \t\t}\n * }\n * // will print\n * .cs-light h1, h1.cs-light,\n * .cs-light h2, h2.cs-light {\n * \t\tcolor : white;\n * }\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Set the name of the component that will be handled inside the mixin\n *\n * @param \t\t\t{String} \t\t\t[$name=null] \t\t\tThe name of the component to set\n * @param \t\t\t{String|Map} \t\t[$context=null] \t\tA context name or map to use inside the mixin\n *\n * @example\n * \\@include s-component('my-component') {\n * \t\ts-component('hello') // => 'my-component'\n * \t\t\\@include s-component('another-component') {\n * \t\t\ts-component('hello') // => 'my-component'\n * \t\t}\n * }\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>;\n */\n/**\n * Register a context with a name to use it later\n *\n * @param \t\t\t{String} \t\t$name \t\t\tThe context name\n * @param \t\t\t{Map} \t\t\t$settings \t\tThe settings to override for this context\n *\n * @example\n * \\@include s-context-setup(my-cool-context, (\n * \t\tlook-and-feel : (\n * \t\t\tpadding-vertical : (\n * \t\t\t\tdefault : 0.6em\n * \t\t\t)\n * \t\t)\n * ));\n *\n * // using your context\n * \\@include s-context(my-cool-context) {\n * \t\ts-look-and-feel(padding-vertical); // => 0.6em\n * }\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Set a context to be used inside the mixin\n *\n * @param \t\t\t{String|Map} \t\t\t$name-or-map \t\tThe name of a registered context or a map\n *\n * @example\n * // register a context\n * \\@include s-context-setup(my-cool-context, (\n * \t\tlook-and-feel : (\n * \t\t\tpadding-vertical : (\n * \t\t\t\tdefault : 0.6em\n * \t\t\t)\n * \t\t)\n * ));\n *\n * // registered context\n * \\@include s-context(my-cool-context) {\n * \t\t// your code here...\n * }\n *\n * // inline context\n * \\@include s-context((\n * \t\tlook-and-feel : (\n * \t\t\tpadding-vertical : (\n * \t\t\t\tdefault : .3em\n * \t\t\t)\n * \t\t)\n * )) {\n * \t\t// your code here...\n * }\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Print out a list with all the filters that are passed as argument\n * This will use the [../functions/_s-filter-map.scss] function to parse the filters\n *\n * @param \t \t{List}<String> \t\t\t$filters \t\t\tThe registered filter(s) name(s) or the filter(s) string(s) to transform into list\n *\n * @example\n * // register a filter\n * \\@include s-setup((\n * \t\tfilters : (\n * \t\t\tmyCoolFilter : box-shadow(#000 0 0 10px) blur(30px),\n * \t\t\t// other filters...\n * \t\t)\n * ));\n *\n * // registered filter\n * .my-cool-elememt {\n * \t\t\\@include s-filter(myCoolFilter);\n * \t\t// filter : box-shadow(#000 0 0 10px) blur(30px);\n * }\n *\n * // custom filter\n * .my-cool-element {\n * \t\t\\@include s-filter(myCoolFilter invert(100%));\n * \t\t// filter : box-shadow(#000 0 0 10px) blur(30px) invert(100%);\n * }\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Helper to print a font-face\n *\n * @param \t\t\t{String} \t\t$font-family \t\t\tThe font-family\n * @param \t\t\t{String} \t\t$src \t\t\t\t\tThe source url (only 1 extension)\n * @param \t\t\t{List} \t\t\t[$extensions=woff2] \tThe extensions list that you have available\n * @param \t\t\t{String} \t\t[$font-weight=normal] \tThe font-weight property\n * @param \t\t\t{String} \t\t[$font-style=normal] \tThe font-style property\n *\n * @example\n * // if you have these extensions files : .woff .eot .woff2\n * \\@include s-font-face(\n * \t\t$name : my-cool-font,\n * \t\t$src : '/fonts/my-font.eot',\n * \t\t$extensions : eot woff woff2\n * )\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Print all the fonts properties that correspond to the passed arguments\n *\n * @param \t\t{String} \t\t\t[$family=null] \t\t\tThe font family wanted (can be a registered font name)\n * @param \t\t{Color} \t\t\t[$color=null] \t\t\tThe color wanted (can be a registered color name)\n * @param \t\t{Number} \t\t\t[$size=null] \t\t\tThe font-size wanted\n * @param \t\t{String} \t\t\t[$style=null] \t\t\tThe font-style wanted\n * @param \t\t{String} \t\t\t[$variant=null] \t\tThe font-variant wanted\n * @param \t\t{String|Number} \t[$weight=null] \t\t\tThe font-weight wanted\n * @param \t\t{String} \t\t\t[$decoration=null] \t\tThe text-decoration wanted\n * @param \t\t{String} \t\t\t[$align=null] \t\t\tThe text-align wanted\n * @param \t\t{String} \t\t\t[$transform=null] \t\tThe text-transform wanted\n * @param \t\t{String} \t\t\t[$stretch=null] \t\tThe font-stretch wanted\n * @param \t\t{String} \t\t\t[$white-space=null] \tThe white-space wanted\n * @param \t\t{Number} \t\t\t[$height=null] \t\t\tThe line-height wanted\n * @param \t\t{Number} \t\t\t[$spacing=null] \t\tThe letter-spacing wanted\n * @param \t\t{Number} \t\t\t[$indent=null] \t\t\tThe text-indent wanted\n * @param \t\t{String} \t\t\t[$break=null] \t\t\tThe line-break wanted\n * @param \t\t{String} \t\t\t[$wrap=null] \t\t\tThe word-wrap wanted\n * @return \t\t{Map} \t\t\t\t\t\t\t\t\t\tThe corresponding font map\n *\n * @example\n * .my-cool-elememt {\n * \t\t\\@include s-font(\n * \t\t\t$family : 'Helvetica Neue',\n * \t\t \t$size : 12px,\n * \t\t  \t$wrap : norwap\n *      );\n *      // print\n * \t\tfont-family : 'Helvetica Neue',\n * \t\tfont-size : 12px,\n * \t\tword-wrap : nowrap\n * }\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Init the sugar toolkit.\n * This has to be called **AFTER** all the [./_s-setup.scss] mixin call\n * and **BEFORE** all the others sugar mixins and functions calls\n *\n * @example\n * \\@include s-init();\n *\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Register all the dynamic helper classes that depends on the settings, etc...\n * This is used internaly\n *\n * @example\n * \\@include s-init-classes();\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Register a helper class under a certain namespace\n *\n * @param \t\t\t{String} \t\t$classname \t\tThe classname that will be printed out\n * @param \t\t\t{String} \t\t$namespace \t\tThe dots separated namespace under which the class will live\n *\n * @example\n * \\@include s-register-class(my-cool-class, 'my.cool.namespace') {\n * \t\tbackground : pink;\n * }\n * \\@include s-register-class(another-cool-class, 'my.another.namespace') {\n * \t\tbackground : red;\n * }\n *\n * // print out my helpers classes\n * \\@include s-classes('my');\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Setup sugar toolkit by overriding the default [settings](../_settings.scss)\n * This has to be called **BEFORE** the [s-init mixin](./_s-init.scss)\n *\n * @param \t\t\t{Map} \t\t\t$settings \t\tThe settings to override\n *\n * @example\n * \\@include s-setup((\n * \t\ttypo : (\n * \t\t\tfont-size : 12px\n * \t\t),\n * \t\tsizes : (\n * \t\t\tsmall : 0.5,\n * \t\t\tbig : 1.5\n * \t\t)\n * ));\n * // this mixin can be called as many times as you need\n * // this allows you to separate your configs setup into multiple\n * // files...\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Display the vertical rhythme\n *\n * @param \t\t\t{Color} \t\tThe color wanted\n *\n * @example\n * body {\n * \t\t@include s-show-vertical-rhythme();\n * }\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Take a transition as parameter and print the corresponding transition property\n * The $transitions parameter can be either a registered transition name or a custom css transition like : all .2s ease-in-out 2s\n * The $transitions argument will be parsed with the [./_s-parse-properties.scss] function.\n *\n * @param \t\t\t{List} \t\t\t\t$transitions \t\t\tThe registered transition(s) name(s) or the transition(s) strings(s) to transform into list\n * @return \t\t\t{List} \t\t\t\t\t\t\t\t\t\tThe corresponding transition list properties\n *\n * @example\n * // register a transition\n * \\@include s-setup((\n * \t\ttransitions : (\n * \t\t\tfast : all .2s ease-in-out 0s,\n * \t\t\t// other transitions...\n * \t\t)\n * ));\n *\n * // registered transition\n * .my-cool-element {\n * \t\t\\@include s-transition(fast>);\n * \t\t// transition : all .2s ease-in-out 0s;\n * }\n *\n * // custom transition\n * .my-cool-element {\n * \t\t\\@include s-transition(fast -delay .5s, fase width ease-in);\n *  \t// transition : all .2s ease-in-out .5s, width .2s ease-in 0s;\n * }\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Set the unit context to use inside the mixin.\n * This mean that if you set a unit context, then get a number setting through the [s-setting function](../functions/_s-setting.scss),\n * The value that will be returned will be converted into the unit context if possible\n *\n * @param \t\t\t{String} \t\t\t$unit \t\t\tThe unit wanted\n *\n * @example\n * // if settings.typography.font-size == 16px\n * s-setting('typography.font-size'); // => 16px\n * \\@incluse s-unit-context(rem) {\n * \t\ts-setting('typography.font-size'); // => 1rem\n * }\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * @name \ts-vertical-rhythme\n * Print out the vertical rhythme properties map calculated depending on the passed arguments\n *\n * @param \t\t\t{Number} \t\t\t\t[$font-size=settings.typography.font-size] \t\t\tThe font size wanted\n * @param \t\t\t{String} \t\t\t\t[$font-family=settings.typography.font-family] \t\tThe font family to use\n * @param \t\t\t{Number} \t\t\t\t[$line-height=null] \t\t\t\t\t\t\tThe line height to use\n * @param \t\t\t{Number} \t\t\t\t[$margin-top=0] \t\t\t\t\t\t\t\tThe targeted margin-top\n * @param \t\t\t{Number} \t\t\t\t[$margin-bottom=0] \t\t\t\t\t\t\t\tThe targeted margin-bottom\n * @param \t\t\t{Number} \t\t\t\t[$padding-top=0] \t\t\t\t\t\t\t\tThe targeted padding-top\n * @param \t\t\t{Number} \t\t\t\t[$padding-bottom=0] \t\t\t\t\t\t\tThe targeted padding-bottom\n * @param \t\t\t{List} \t\t\t\t\t[$margin=null] \t\t\t\t\t\t\t\t\tThe targeted margin property\n * @param \t\t\t{List} \t\t\t\t\t[$padding=null] \t\t\t\t\t\t\t\tThe targeted padding property\n * @param \t\t\t{List} \t\t\t\t\t[$border-top=null] \t\t\t\t\t\t\t\tThe targeted border-top property\n * @param \t\t\t{List} \t\t\t\t\t[$border-bottom=null] \t\t\t\t\t\t\tThe targeted border-bottom property\n * @param \t\t\t{Number} \t\t\t\t[$border-top-width=0] \t\t\t\t\t\t\tThe targeted border-top-width property\n * @param \t\t\t{Number} \t\t\t\t[$border-bottom-width=0] \t\t\t\t\t\tThe targeted border-bottom-width property\n * @param \t\t\t{Number} \t\t\t\t[$border=null] \t\t\t\t\t\t\t\t\tThe targeted border property\n * @param \t\t\t{Number} \t\t\t\t[$cap-height=null] \t\t\t\t\t\t\t\tThe font cap-height used to calculate the vertical ryhthme\n * @param \t\t\t{Boolean|String} \t\t[$calculate-height=false] \t\t\t\t\t\tIf true|min-height|max-height|height, will return the corresponding absolute height value in the map\n *\n * @TODO example\n *\n * @see \t\t\thttps://medium.com/written-in-code/aligning-type-to-baseline-the-right-way-using-sass-e258fce47a9b#.lck2lgbni\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * @name \tHelper Classes\n * This file is responsible to register the static helper classes like:\n *\n * - sugar.pull.left : ```.pull-left```\n * - sugar.pull.right : ```.pull-right```\n * - sugar.position.relative : ```.relative```\n * - sugar.position.absolute : ```.absolute```\n * - sugar.clear.left : ```.clear-left```\n * - sugar.clear.right : ```.clear-right```\n * - sugar.clear.both : ```.clear```\n * - sugar.pointer.events.all : ```.pointer-events-all```\n * - sugar.pointer.events.none : ```.pointer-events-none```\n * - sugar.display.show : ```.show```\n * - sugar.display.show-inline : ```.show-inline```\n * - sugar.display.hidden : ```.hidden```\n * - sugar.display.hide : ```.hide```\n * - sugar.display.visible : ```.visible```\n * - sugar.display.invisible : ```.invisible```\n * - sugar.display.visually-hidden : ```.visually-hidden```\n * - sugar.text.hidden : ```.t-hidden```\n * - sugar.text.truncate : ```.t-truncate```\n * - sugar.text.align.left : ```.t-left```\n * - sugar.text.align.right : ```.t-right```\n * - sugar.text.align.center : ```.t-center```\n * - sugar.text.align.justify : ```.t-justify```\n * - sugar.text.transform.lowercase : ```.t-lowercase```\n * - sugar.text.transform.uppercase : ```.t-uppercase```\n * - sugar.text.transform.capitalize : ```.t-capitalize```\n * - sugar.font.weight.bold : ```.f-bold```\n * - sugar.font.weight.lighter : ```.f-lighter```\n * - sugar.font.weight.bolder : ```.f-bolder```\n * - sugar.font.weight.normal : ```.f-normal```\n * - sugar.font.style.italic : ```.f-italic```\n * - sugar.font.style.oblique : ```.f-oblique```\n * - sugar.font.variant.small-caps : ```.f-small-caps```\n * - sugar.block.align.center : ```.block-center```\n * - sugar.ratio.21-9 : ```.ratio-21-9```\n * - sugar.ratio.16-9 : ```.ratio-16-9```\n * - sugar.ratio.4-3 : ```.ratio-4-3```\n * - sugar.ratio.1-1 : ```.ratio-1-1```\n * - sugar.size.abs.cover : ```.abs-cover```\n * - sugar.size.abs.contain : ```.abs-contain```\n * - sugar.size.abs.fit : ```.abs-fit```\n * - sugar.clearfix.default : ```.clearfix```\n * - sugar.clearfix.float : ```.clearfix-float```\n * - sugar.clearfix.micro : ```.clearfix-micro```\n * - sugar.clearfix.overflow : ```.clearfix-overflow```\n * - sugar.clearfix.facebook : ```.clearfix-facebook```\n * - sugar.no-transitions : ```.no-transitions```\n * - sugar.clear-transitions : ```.clear-transitions```\n * - sugar.no-animations : ```.no-animations```\n * - sugar.clear-animations : ```.clear-animations```\n * - sugar.no-transmations : ```.no-transmations```\n * - sugar.clear-transmations : ```.clear-transmations```\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n#template-stack .pull-left {\n  /**\n\t * @name \t\t```.pull-left```\n\t * Allows you to pull an element to the left side\n\t * @styleguide \tHelpers / Pull\n\t * @example \thtml\n\t * \t<span class=\"pull-left\">Hello world</span>\n\t * </div>\n\t */\n  float: left;\n}\n\n#template-stack .pull-right {\n  /**\n\t * @name \t\t```.pull-right```\n\t * Allows you to pull an element to the right side\n\t * @styleguide \tHelpers / Pull\n\t * @example \thtml\n\t * \t<span class=\"pull-right\">Hello world</span>\n\t * </div>\n\t */\n  float: right;\n}\n\n#template-stack .relative {\n  /**\n\t * @name \t\t```.relative```\n\t * Set an element position as ```relative```\n\t * @styleguide \tHelpers / Position\n\t * @example \thtml\n\t * <div class=\"relative\">\n\t * \tI'm relative now\n\t * </div>\n\t */\n  position: relative;\n}\n\n#template-stack .absolute {\n  /**\n\t * @name \t\t```.absolute```\n\t * Set an element position as ```absolute```\n\t * @styleguide \tHelpers / Position\n\t * @example \thtml\n\t * <div class=\"absolute\">\n\t * \tI'm absolute now\n\t * </div>\n\t */\n  position: absolute;\n}\n\n#template-stack .clear-left {\n  /**\n\t * @name \t\t```.clear-left```\n\t * Clear the left float on the element\n\t * @styleguide \tHelpers / Float\n\t * @example \thtml\n\t * <div class=\"clear-left\">\n\t * \tI clear the left float\n\t * </div>\n\t */\n  clear: left;\n}\n\n#template-stack .clear-right {\n  /**\n\t * @name \t\t```.clear-right```\n\t * Clear the right float on the element\n\t * @styleguide \tHelpers / Float\n\t * @example \thtml\n\t * <div class=\"clear-right\">\n\t * \tI clear the right float\n\t * </div>\n\t */\n  clear: right;\n}\n\n#template-stack .clear {\n  /**\n\t * @name \t\t```.clear```\n\t * Clear both float on the element\n\t * @styleguide \tHelpers / Float\n\t * @example \thtml\n\t * <div class=\"clear\">\n\t * \tI clear both floats\n\t * </div>\n\t */\n  clear: both;\n}\n\n#template-stack .pointer-events-none {\n  /**\n\t * @name \t\t```.pointer-events-none```\n\t * Disable any pointer events\n\t * @styleguide \tHelpers / Pointer events\n\t * @example \thtml\n\t * <div class=\"pointer-events-none\">\n\t * \tI will not react to any pointer events\n\t * </div>\n\t */\n  pointer-events: none;\n}\n\n#template-stack .pointer-events-all {\n  /**\n\t * @name \t\t```.pointer-events-all```\n\t * Disable any pointer events\n\t * @styleguide \tHelpers / Pointer events\n\t * @example \thtml\n\t * <div class=\"pointer-events-all\">\n\t * \tI will not react to any pointer events\n\t * </div>\n\t */\n  pointer-events: all;\n}\n\n#template-stack .block {\n  /**\n\t * @name \t\t```.block```\n\t * Display the element as ```block```\n\t * @styleguide \tHelpers / Display\n\t * @example \thtml\n\t * <div class=\"block\">\n\t * \tI'm displayed as block\n\t * </div>\n\t */\n  display: block;\n}\n\n#template-stack .inline {\n  /**\n\t * @name \t\t```.inline```\n\t * Display the element as ```inline```\n\t * @styleguide \tHelpers / Display\n\t * @example \thtml\n\t * <div class=\"inline\">\n\t * \tI'm displayed as inline\n\t * </div>\n\t */\n  display: inline;\n}\n\n#template-stack .inline-block {\n  /**\n\t * @name \t\t```.inline-block```\n\t * Display the element as ```inline-block```\n\t * @styleguide \tHelpers / Display\n\t * @example \thtml\n\t * <div class=\"inline-block\">\n\t * \tI'm displayed as inline-block\n\t * </div>\n\t */\n  display: inline-block;\n}\n\n#template-stack .show {\n  /**\n\t * @name \t\t```.show```\n\t * Display the element as ```block```\n\t * @styleguide \tHelpers / Display\n\t * @example \thtml\n\t * <div class=\"show\">\n\t * \tI'm displayed\n\t * </div>\n\t */\n  display: block;\n}\n\n#template-stack .show-inline {\n  /**\n\t * @name \t\t```.show-inline```\n\t * Display the element as ```inline-block```\n\t * @styleguide \tHelpers / Display\n\t * @example \thtml\n\t * <div class=\"show-inline\">\n\t * \tI'm inline displayed\n\t * </div>\n\t */\n  display: inline-block;\n}\n\n#template-stack .hidden {\n  /**\n\t * @name \t\t```.hidden```\n\t * Hide the element by setting the display to ```none```\n\t * @styleguide \tHelpers / Display\n\t * @example \thtml\n\t * <div class=\"hidden\">\n\t * \tI'm hidden\n\t * </div>\n\t */\n  display: none;\n}\n\n#template-stack .hide {\n  /**\n\t * @name \t\t```.hide```\n\t * Hide the element by setting the display to ```none```\n\t * @styleguide \tHelpers / Display\n\t * @example \thtml\n\t * <div class=\"hide\">\n\t * \tI'm hidden\n\t * </div>\n\t */\n  display: none;\n}\n\n#template-stack .visible {\n  /**\n\t * @name \t\t```.visible```\n\t * Display the element by setting the visibility to ```visible```\n\t * @styleguide \tHelpers / Display\n\t * @example \thtml\n\t * <div class=\"visible\">\n\t * \tI'm visible\n\t * </div>\n\t */\n  visibility: visible;\n}\n\n#template-stack .invisible {\n  /**\n\t * @name \t\t```.invisible```\n\t * Display the element by setting the visibility to ```hidden```\n\t * @styleguide \tHelpers / Display\n\t * @example \thtml\n\t * <div class=\"invisible\">\n\t * \tI'm invisible\n\t * </div>\n\t */\n  visibility: hidden;\n}\n\n#template-stack .visually-hidden {\n  /**\n\t * @name \t\t```.visually-hidden```\n\t * Hide the element from display but not for SEO.\n\t * This class use some tricks to make the element dissapear without using some ```display:none;```, etc...\n\t * @styleguide \tHelpers / Display\n\t * @example \thtml\n\t * <div class=\"visually-hidden\">\n\t * \tI'm only visually hidden\n\t * </div>\n\t */\n  margin: -1px;\n  padding: 0;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0 0 0 0);\n  clip: rect(0, 0, 0, 0);\n  position: absolute;\n}\n\n#template-stack .t-hidden {\n  /**\n\t * @name \t\t```.t-hidden```\n\t * Hide the text\n\t * @styleguide \tHelpers / Text\n\t * @example \thtml\n\t * <div class=\"t-hidden\">\n\t * \tI'm not visible\n\t * </div>\n\t */\n  overflow: hidden;\n  text-indent: -9000px;\n  display: block;\n}\n\n#template-stack .t-truncate {\n  /**\n\t * @name \t\t```.t-truncate```\n\t * Hide the text\n\t * @styleguide \tHelpers / Text\n\t * @example \thtml\n\t * <div class=\"t-truncate\">\n\t * \tI'm truncated cause I talk a lot too much Nulla mauris eros, finibus ac faucibus et, tempus quis risus. Praesent sit amet nulla vel libero euismod sodales eu nec.\n\t * </div>\n\t */\n  display: inline-block;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n#template-stack .t-truncate > * {\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n#template-stack .t-left {\n  /**\n\t * @name \t\t```.t-left```\n\t * Align the text to the left\n\t * @styleguide \tHelpers / Text Align\n\t * @example \thtml\n\t * <div class=\"t-left\">\n\t * \tI'm left aligned\n\t * </div>\n\t */\n  text-align: left;\n}\n\n#template-stack .t-right {\n  /**\n\t * @name \t\t```.t-right```\n\t * Align the text to the right\n\t * @styleguide \tHelpers / Text Align\n\t * @example \thtml\n\t * <div class=\"t-right\">\n\t * \tI'm right aligned\n\t * </div>\n\t */\n  text-align: right;\n}\n\n#template-stack .t-center {\n  /**\n\t * @name \t\t```.t-center```\n\t * Align the text to the center\n\t * @styleguide \tHelpers / Text Align\n\t * @example \thtml\n\t * <div class=\"t-center\">\n\t * \tI'm centered\n\t * </div>\n\t */\n  text-align: center;\n}\n\n#template-stack .t-justify {\n  /**\n\t * @name \t\t```.t-justify```\n\t * Make the text justified\n\t * @styleguide \tHelpers / Text Align\n\t * @example \thtml\n\t * <div class=\"t-justify\">\n\t * \tNullam vel feugiat nunc. Phasellus facilisis, nisi sit amet viverra rhoncus, arcu risus volutpat dolor, sed euismod magna tellus ac purus. Praesent augue lorem, ullamcorper ac accumsan nec, suscipit eu.\n\t * </div>\n\t */\n  text-align: justify;\n}\n\n#template-stack .t-lowercase {\n  /**\n\t * @name \t\t```.t-lowercase```\n\t * Transform the text to lowercase\n\t * @styleguide \tHelpers / Text Transform\n\t * @example \thtml\n\t * <div class=\"t-lowercase\">\n\t * \tI'M LOWERCASE\n\t * </div>\n\t */\n  text-transform: lowercase;\n}\n\n#template-stack .t-uppercase {\n  /**\n\t * @name \t\t```.t-uppercase```\n\t * Transform the text to uppercase\n\t * @styleguide \tHelpers / Text Transform\n\t * @example \thtml\n\t * <div class=\"t-uppercase\">\n\t * \tI'm uppercase\n\t * </div>\n\t */\n  text-transform: uppercase;\n}\n\n#template-stack .t-capitalize {\n  /**\n\t * @name \t\t```.t-capitalize```\n\t * Capizalize the words\n\t * @styleguide \tHelpers / Text Transform\n\t * @example \thtml\n\t * <div class=\"t-capitalize\">\n\t * \tI'm capitalized\n\t * </div>\n\t */\n  text-transform: capitalize;\n}\n\n#template-stack .f-bold {\n  /**\n\t * @name \t\t```.f-bold```\n\t * Set the font-weight to ```bold```\n\t * @styleguide \tHelpers / Font Weight\n\t * @example \thtml\n\t * This <span class=\"f-bold\">word</span> is bold\n\t */\n  font-weight: bold;\n}\n\n#template-stack .f-lighter {\n  /**\n\t * @name \t\t```.f-lighter```\n\t * Set the font-weight to ```lighter```\n\t * @styleguide \tHelpers / Font Weight\n\t * @example \thtml\n\t * \tThis <span class=\"f-lighter\">word</span> is lighter\n\t */\n  font-weight: lighter;\n}\n\n#template-stack .f-bolder {\n  /**\n\t * @name \t\t```.f-bolder```\n\t * Set the font-weight to ```bolder```\n\t * @styleguide \tHelpers / Font Weight\n\t * @example \thtml\n\t * This <span class=\"f-bolder\">word</span> is bolder\n\t */\n  font-weight: bolder;\n}\n\n#template-stack .f-normal {\n  /**\n\t * @name \t\t```.f-normal```\n\t * Set the font-weight to ```normal```\n\t * @styleguide \tHelpers / Font Weight\n\t * @example \thtml\n\t * <div class=\"f-bold\">\n\t * \tThis <span class=\"f-normal\">word</span> is normal\n\t * </div>\n\t */\n  font-weight: normal;\n  font-style: normal;\n}\n\n#template-stack .f-italic {\n  /**\n\t * @name \t\t```.f-italic```\n\t * Set the font-style to ```italic```\n\t * @styleguide \tHelpers / Font\n\t * @example \thtml\n\t * This <span class=\"f-italic\">word</span> is italic\n\t */\n  font-style: italic;\n}\n\n#template-stack .f-oblique {\n  /**\n\t * @name \t\t```.f-oblique```\n\t * Set the font-style to ```oblique```\n\t * @styleguide \tHelpers / Font Style\n\t * @example \thtml\n\t * This <span class=\"f-oblique\">word</span> is oblique\n\t */\n  font-style: oblique;\n}\n\n#template-stack .f-small-caps {\n  /**\n\t * @name \t\t```.f-small-caps```\n\t * Set the font-variant to ```small-caps```\n\t * @styleguide \tHelpers / Font Variant\n\t * @example \thtml\n\t * This <span class=\"f-small-caps\">word</span> is small-caps\n\t */\n  font-variant: small-caps;\n}\n\n#template-stack .block-center {\n  /**\n\t * @name \t\t```.block-center```\n\t * Set the element to as ```display:block``` and center it\n\t * @styleguide \tHelpers / Block\n\t * @example \thtml\n\t * <div class=\"block-center bkg-primary\" style=\"width:100px;\">\n\t * \tI'm a centered block\n\t * </div>\n\t */\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n#template-stack .abs-cover {\n  /**\n\t * @name \t\t```.abs-cover```\n\t * Set a size that will cover the entire parent surface by positionning it in absolute\n\t * @styleguide \tHelpers / Sizes\n\t * @example \thtml\n\t * <div class=\"ratio-16-9\">\n\t * \t<img src=\"https://source.unsplash.com/random\" class=\"abs-cover\" />\n\t * </div>\n\t */\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n  min-width: 100%;\n  min-height: 100%;\n}\n\n#template-stack .abs-contain {\n  /**\n\t * @name \t\t```.abs-contain```\n\t * Set a size that will contain the entire parent surface by positionning it in absolute\n\t * @styleguide \tHelpers / Sizes\n\t * @example \thtml\n\t * <div class=\"ratio-16-9\">\n\t * \t<img src=\"https://source.unsplash.com/random\" class=\"abs-contain\" />\n\t * </div>\n\t */\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n  max-width: 100%;\n  max-height: 100%;\n}\n\n#template-stack .abs-fit {\n  /**\n\t * @name \t\t```.abs-fit```\n\t * Set a size that will fit the entire parent surface by positionning it in absolute\n\t * @styleguide \tHelpers / Sizes\n\t * @example \thtml\n\t * <div class=\"ratio-16-9\">\n\t * \t<img src=\"https://source.unsplash.com/random\" class=\"abs-fit\" />\n\t * </div>\n\t */\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n\n#template-stack .clearfix {\n  /**\n\t * @name \t\t```.clearfix```\n\t * Apply the micro clearfix on the element\n\t * @styleguide \tHelpers / Clearfix\n\t * @example \thtml\n\t * <div class=\"clearfix bkg-primary\">\n\t * \t<div class=\"pull-right\">right pulled</div>\n\t * </div>\n\t * <div class=\"bkg-primary\">\n\t * \t<div class=\"pull-right\">right pulled without clearfix</div>\n\t * </div>\n\t */\n}\n\n#template-stack .clearfix-float {\n  /**\n\t * @name \t\t```.clearfix-float```\n\t * Apply the float clearfix on the element\n\t * @styleguide \tHelpers / Clearfix\n\t * @example \thtml\n\t * <div class=\"clearfix-float bkg-primary\">\n\t * \t<div class=\"pull-right\">right pulled</div>\n\t * </div>\n\t * <div class=\"bkg-primary\">\n\t * \t<div class=\"pull-right\">right pulled without clearfix</div>\n\t * </div>\n\t */\n}\n\n#template-stack .clearfix, #template-stack .clearfix-micro {\n  /**\n\t * @name \t\t```.clearfix```\n\t * Apply the micro clearfix on the element\n\t * @styleguide \tHelpers / Clearfix\n\t * @example \thtml\n\t * <div class=\"clearfix bkg-primary\">\n\t * \t<div class=\"pull-right\">right pulled</div>\n\t * </div>\n\t * <div class=\"bkg-primary\">\n\t * \t<div class=\"pull-right\">right pulled without clearfix</div>\n\t * </div>\n\t */\n}\n\n#template-stack .clearfix-overflow {\n  /**\n\t * @name \t\t```.clearfix-overflow```\n\t * Apply the overflow clearfix on the element\n\t * @styleguide \tHelpers / Clearfix\n\t * @example \thtml\n\t * <div class=\"clearfix-overflow bkg-primary\">\n\t * \t<div class=\"pull-right\">right pulled</div>\n\t * </div>\n\t * <div class=\"bkg-primary\">\n\t * \t<div class=\"pull-right\">right pulled without clearfix</div>\n\t * </div>\n\t */\n}\n\n#template-stack .clearfix-facebook {\n  /**\n\t * @name \t\t```.clearfix-facebook```\n\t * Apply the facebook clearfix on the element\n\t * @styleguide \tHelpers / Clearfix\n\t * @example \thtml\n\t * <div class=\"clearfix-facebook bkg-primary\">\n\t * \t<div class=\"pull-right\">right pulled</div>\n\t * </div>\n\t * <div class=\"bkg-primary\">\n\t * \t<div class=\"pull-right\">right pulled without clearfix</div>\n\t * </div>\n\t */\n}\n\n#template-stack .ratio-21-9 {\n  /**\n\t * @name \t\t```.ratio-21-9```\n\t * Keep a 16/9 ratio on a particular element. Applied by setting height to 0 and paddingtop to 100% / 16 * 9\n\t * @styleguide \tHelpers / Ratios\n\t * @example \thtml\n\t * <div class=\"bkg-primary ratio-21-9\"></div>\n\t */\n  position: relative;\n  overflow: hidden;\n}\n\n#template-stack .ratio-21-9:before {\n  content: '';\n  display: block;\n  height: 0;\n  padding-top: 42.85714%;\n}\n\n#template-stack .ratio-16-9 {\n  /**\n\t * @name \t\t```.ratio-16-9```\n\t * Keep a 16/9 ratio on a particular element. Applied by setting height to 0 and paddingtop to 100% / 16 * 9\n\t * @styleguide \tHelpers / Ratios\n\t * @example \thtml\n\t * <div class=\"bkg-primary ratio-16-9\"></div>\n\t */\n  position: relative;\n  overflow: hidden;\n}\n\n#template-stack .ratio-16-9:before {\n  content: '';\n  display: block;\n  height: 0;\n  padding-top: 56.25%;\n}\n\n#template-stack .ratio-4-3 {\n  /**\n\t * @name \t\t```.ratio-4-3```\n\t * Keep a 4/3 ratio on a particular element. Applied by setting height to 0 and paddingtop to 100% / 4 * 3\n\t * @styleguide \tHelpers / Ratios\n\t * @example \thtml\n\t * <div class=\"bkg-primary ratio-4-3\"></div>\n\t */\n  position: relative;\n  overflow: hidden;\n}\n\n#template-stack .ratio-4-3:before {\n  content: '';\n  display: block;\n  height: 0;\n  padding-top: 75%;\n}\n\n#template-stack .ratio-1-1 {\n  /**\n\t * @name \t\t```.ratio-1-1```\n\t * Keep a 1/1 ratio on a particular element. Applied by setting height to 0 and paddingtop to 100%\n\t * @styleguide \tHelpers / Ratios\n\t * @example \thtml\n\t * <div class=\"bkg-primary ratio-1-1\"></div>\n\t */\n  position: relative;\n  overflow: hidden;\n}\n\n#template-stack .ratio-1-1:before {\n  content: '';\n  display: block;\n  height: 0;\n  padding-top: 100%;\n}\n\n#template-stack .no-transitions {\n  /**\n\t * @name \t\t```.no-transitions```\n\t * Disable the transitions <span class=\"f-bold\">only on the element</span>\n\t * @styleguide \tHelpers / Transitions\n\t * @example \thtml\n\t * <div class=\"no-transitions\">\n\t * \tI have no more transitions\n\t * \t<div>But I have</div>\n\t * </div>\n\t */\n}\n\n#template-stack .no-transitions, #template-stack .no-transitions:before, #template-stack .no-transitions:after {\n  transition: none !important;\n}\n\n#template-stack .clear-transitions {\n  /**\n\t * @name \t\t```.clear-transitions```\n\t * Disable the transitions <span class=\"f-bold\">on the element and all his children</span>\n\t * @styleguide \tHelpers / Transitions\n\t * @example \thtml\n\t * <div class=\"clear-transitions\">\n\t * \tI have no more transitions\n\t * \t<div>Me neither</div>\n\t * </div>\n\t */\n}\n\n#template-stack .clear-transitions, #template-stack .clear-transitions:before, #template-stack .clear-transitions:after, #template-stack .clear-transitions *, #template-stack .clear-transitions *:before, #template-stack .clear-transitions *:after {\n  transition: none !important;\n}\n\n#template-stack .no-animations {\n  /**\n\t * @name \t\t```.no-animations```\n\t * Disable the animations <span class=\"f-bold\">only on the element</span>\n\t * @styleguide \tHelpers / Animations\n\t * @example \thtml\n\t * <div class=\"no-animations\">\n\t * \tI have no more animations\n\t * \t<div>But I have</div>\n\t * </div>\n\t */\n}\n\n#template-stack .no-animations, #template-stack .no-animations:before, #template-stack .no-animations:after {\n  animation: none !important;\n}\n\n#template-stack .clear-animations {\n  /**\n\t * @name \t\t```.clear-animations```\n\t * Disable the transitions <span class=\"f-bold\">on the element and all his children</span>\n\t * @styleguide \tHelpers / Animations\n\t * @example \thtml\n\t * <div class=\"clear-animations\">\n\t * \tI have no more animations\n\t * \t<div>Me neither</div>\n\t * </div>\n\t */\n}\n\n#template-stack .clear-animations, #template-stack .clear-animations:before, #template-stack .clear-animations:after, #template-stack .clear-animations *, #template-stack .clear-animations *:before, #template-stack .clear-animations *:after {\n  animation: none !important;\n}\n\n#template-stack .no-transmations {\n  /**\n\t * @name \t\t```.no-transmations```\n\t * Disable the animations and transitions <span class=\"f-bold\">only on the element</span>\n\t * @styleguide \tHelpers / Transmations\n\t * @example \thtml\n\t * <div class=\"no-transmations\">\n\t * \tI have no more animations or transitions\n\t * \t<div>But I have</div>\n\t * </div>\n\t */\n}\n\n#template-stack .no-transmations, #template-stack .no-transmations:before, #template-stack .no-transmations:after {\n  transition: none !important;\n  animation: none !important;\n}\n\n#template-stack .clear-transmations {\n  /**\n\t * @name \t\t```.clear-transmations```\n\t * Disable the animations and transitions <span class=\"f-bold\">on the element and all his children</span>\n\t * @styleguide \tHelpers / Transmations\n\t * @example \thtml\n\t * <div class=\"clear-transmations\">\n\t * \tI have no more animations or transitions\n\t * \t<div>Me neither</div>\n\t * </div>\n\t */\n}\n\n#template-stack .clear-transmations, #template-stack .clear-transmations:before, #template-stack .clear-transmations:after, #template-stack .clear-transmations *, #template-stack .clear-transmations *:before, #template-stack .clear-transmations *:after {\n  transition: none !important;\n  animation: none !important;\n}\n\n/**\n * This file contains all the default settings that can be overrided by the [s-setup mixin](./mixins/_s-setup.scss).\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Create an arrow bubble effect\n *\n * @param \t\t{String} \t\t\t[$side=bottom] \t\t\t\tThe side (top,right,bottom,left)\n * @param \t\t{String} \t\t\t[$align=center] \t\t\tThe alignement (left,center,right,top,middle,bottom)\n * @param \t\t{Number} \t\t\t[$size=10px] \t\t\t\tThe size of the arrow\n * @param \t\t{Color} \t\t\t[$color=s-color(primary)] \tThe color of the bubble\n * @param \t\t{Number} \t\t\t[$arrow-offset=10px] \t\tThe arrow offset from the side of the bubble\n * @param \t\t{Number} \t\t\t[$border-width=0] \t\t\tThe border width of the bubble\n * @param \t\t{Color} \t\t\t[$border-color=null] \t\tThe border color of the bubble\n *\n * @example\n * .my-cool-bubble {\n * \t\t\\@include s-bubble(\n * \t\t\t$color : s-color(secondary)\n * \t\t);\n * \t\tcolor : white;\n * }\n *\n * @see \t\t\thttps://codepen.io/kirkas/pen/otqyJ\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Generate a drop shadow depending on the depth specified\n *\n * @param \t\t{Integer} \t\t\t$depth \t\t\t\t\t\t\tThe depth wanted (1,2,3,4,etc...)\n * @param \t\t{Color} \t\t\t[$color=rgba(0,0,0,.2)] \t\tThe drop shadow color\n *\n * @example\n * .my-cool-element {\n * \t\t\\@include s-depth(2);\n * }\n *\n * @author \t \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Create a poping dot effect to catch user attention on a particular item\n * This mixin affect the :before and :after pseudo selector of the item\n *\n * @param \t\t{String} \t\t[$vertical-align=top] \t\t\tWhere to put the dot verticaly (top,middle,bottom)\n * @param \t\t{String} \t\t[$align=left] \t\t\t\t\tWhere to put the dot horizontaly (left,center,right)\n * @param \t\t{Number} \t\t[$size=20px] \t\t\t\t\tThe size of the dot\n * @param \t\t{Color} \t\t[$color=primary] \t\t\t\tThe color of the dot\n * @param \t\t{Number} \t\t[$offset-top=0] \t\t\t\tThe offset top\n * @param \t\t{Number} \t\t[$offset-right=0] \t\t\t\tThe offset right\n * @param \t\t{Number} \t\t[$offset-bottom=0] \t\t\t\tThe offset bottom\n * @param \t\t{Number} \t\t[$offset-left=0] \t\t\t\tThe offset left\n *\n * @example\n * .my-cool-element {\n * \t\t\\@include s-hey(\n * \t\t\t$align : right,\n * \t\t\t$color : secondary,\n * \t\t\t$size : 10px,\n * \t\t\t$offset-top : -10px,\n * \t\t\t$offset-right : -10px\n * \t\t);\n * }\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Generate a full animated, single element, bars loader\n *\n * @param \t\t\t{String} \t\t\t[$shape=rect] \t\t\t\tThe shape of the bars (rect,circle)\n * @param \t\t\t{Color} \t\t\t[$color=primary] \t\t\tThe color(s) of the loader. Can be a list of colors\n * @param \t\t\t{Number} \t\t\t[$width=.5em] \t\t\t\tThe width of each bars\n * @param \t\t\t{Number} \t\t\t[$height=2em] \t\t\t\tThe height of each bars\n * @param \t\t\t{Integer} \t\t\t[$count=5] \t\t\t\t\tHow many bars you want\n * @param \t\t\t{Number} \t\t\t[$gap=.5em] \t\t\t\tThe gap between each bars\n * @param \t\t\t{Number} \t\t\t[$opacity=1] \t\t\t\tThe initial opacity of each bars\n * @param \t\t\t{Number} \t\t\t[$a-opacity=null] \t\t\tThe opacity of the animated bars\n * @param \t\t\t{Second} \t\t\t[$a-duration=1s] \t\t\tThe overall animation duration\n * @param \t\t\t{Second} \t\t\t[$a-delay=0s] \t\t\t\tThe delay between two animation cycle\n * @param \t\t\t{Integer} \t\t\t[$a-near=1] \t\t\t\tHow many bars are affected by the animated one\n * @param \t\t\t{String} \t\t\t[$a-ease=ease-in-out] \t\tThe ease to use to animate each bars\n * @param \t\t\t{Number} \t\t\t[$a-offset=null] \t\t\tThe offset to move the animated bar\n * @param \t\t\t{String} \t\t\t[$a-direction=both] \t\tThe direction in which to move the bars (up,down,both)\n * @param \t\t\t{Boolean} \t\t\t[$a-continuous=true] \t\tIf true, the first bars will be animated at same time at the last ones\n *\n * @example\n * .my-cool-loader {\n * \t\t\\@include s-loader-bars(\n * \t\t\t$color : primary,\n * \t\t\t$a-offset : .5em\n * \t\t);\n * }\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Generate a full animated, single element, circle loader\n *\n * @param \t\t\t{Color} \t\t\t[$color=primary] \t\t\tThe color(s) of the loader. Can be a list of colors\n * @param \t\t\t{Number} \t\t\t[$size=.33em] \t\t\t\tThe size of each dot\n * @param \t\t\t{Number} \t\t\t[$radius=1em] \t\t\t\tThe distance of each dot from the center of the loader\n * @param \t\t\t{Integer} \t\t\t[$count=5] \t\t\t\t\tHow many bars you want\n * @param \t\t\t{Number} \t\t\t[$opacity=1] \t\t\t\tThe initial opacity of each bars\n * @param \t\t\t{Number} \t\t\t[$a-opacity=null] \t\t\tThe opacity of the animated bars\n * @param \t\t\t{Second} \t\t\t[$a-duration=1s] \t\t\tThe overall animation duration\n * @param \t\t\t{Second} \t\t\t[$a-delay=0s] \t\t\t\tThe delay between two animation cycle\n * @param \t\t\t{Integer} \t\t\t[$a-near=1] \t\t\t\tHow many bars are affected by the animated one\n * @param \t\t\t{String} \t\t\t[$a-ease=ease-in-out] \t\tThe ease to use to animate each bars\n *\n * @TODO finish documentation\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Generate a full animated, single element, couch-potato style loader\n *\n * @param \t\t{Number} \t\t[$size=1em] \t\t\t\tThe size of the loader\n * @param \t\t{Color} \t\t[$color=primary] \t\t\tThe color of the loader\n * @param \t\t{Second} \t\t[$a-duration=1s] \t\t\tThe overall animation duration\n * @param \t\t{Second} \t\t[$a-delay=0s] \t\t\t\tThe delay between two animation cycle\n * @param \t\t{String} \t\t[$a-ease=ease-in-out]\t\tThe ease to use for the animation\n * @param \t\t{Degree}\t\t[$a-rotate=360deg] \t\t\tThe animation rotation\n * @param \t\t{Number} \t\t[$a-scale=.7] \t\t\t\tThe animation scale\n *\n * @example\n * .my-cool-loader {\n * \t\t\\@include s-loader-couch-potato();\n * }\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Generate a full animated, single element, flip ball style loader\n *\n * @param \t\t{String} \t\t[$shape=circle] \t\t\tThe shape of the loader (circle,rect)\n * @param \t\t{Number} \t\t[$size=1em] \t\t\t\tThe size of the loader\n * @param \t\t{Color} \t\t[$color=primary] \t\t\tThe color of the loader. Can be a list of colors\n * @param \t\t{Second} \t\t[$a-duration=1s] \t\t\tThe overall animation duration\n * @param \t\t{Second} \t\t[$a-delay=0s] \t\t\t\tThe delay between two animation cycle\n * @param \t\t{String} \t\t[$a-ease=ease-in-out]\t\tThe ease to use for the animation\n *\n * @example\n * .my-cool-loader {\n * \t\t\\@include s-loader-flip-ball();\n * }\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Generate a long shadow effect like [this](https://www.google.ch/search?q=long+shadow&espv=2&biw=2560&bih=1316&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjjne6x49LPAhVBHRQKHat8AW8Q_AUIBigB)\n *\n * @param \t\t{Color} \t\t[$color=rgba(0,0,0,.3)] \t\t\tThe shadow color\n * @param \t\t{String} \t\t[$type=text] \t\t\t\t\t\tThe shadow type (text,box)\n * @param \t\t{Degree} \t\t[$angle=135deg] \t\t\t\t\tThe shadow angle\n * @param \t\t{Integer} \t\t[$depth=20] \t\t\t\t\t\tThe shadow depth\n * @param \t\t{Boolean} \t\t[$fade=false] \t\t\t\t\t\tIf true, the shadow will fade itself\n * @param \t\t{Number} \t\t[$blur=0] \t\t\t\t\t\t\tThe blur amount of the shadow\n * @param \t\t{Number} \t\t[$blur-ratio=0] \t\t\t\t\tThe ratio to blur each depth more\n *\n * @example\n * .my-cool-title {\n * \t\t\\@include s-long-shadow(\n * \t\t\t$depth : 10\n * \t\t);\n * }\n * .my-cool-box {\n * \t\t\\@include s-long-shadow(\n * \t\t\t$type : box\n * \t\t);\n * }\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Create side lines around an item\n *\n * @param \t\t\t{String} \t\t[$style=solid] \t\t\tThe line style, same possible values as the border-style property\n * @param \t\t\t{String} \t\t[$side=both] \t\t\tThe side where to put lines (left,right,both)\n * @param \t\t\t{Number} \t\t[$height=1px] \t\t\tThe lines height\n * @param \t\t\t{Number} \t\t[$width=50%] \t\t\tThe width of the lines\n * @param \t\t\t{Color} \t\t[$color=text]\t\t\tThe color of the lines\n * @param \t\t\t{Number} \t\t[$padding=0] \t\t\tThe padding between the lines and the content\n * @param \t\t\t{Number} \t\t[$offset-top=null] \t\tThe line offset top\n *\n * @example\n * h1 {\n * \t\t\\@include s-side-lined(\n * \t\t\t$padding : 20px,\n * \t\t\t$side : right,\n * \t\t\t$width : 100%\n * \t\t);\n * }\n *\n * @author \t\t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * @name \tSAnimationComponent Classes\n * This file provide the mixins to generate animation classes\n */\n/**\n * Provide the classes for the anim=\"letters-in-reveal\" animation\n * - ```[anim=\"letters-in-reveal\"]```\n * @param \t\t{Integer} \t\t[$words-letters-count=100] \t\tThe max letters count of words that the animation will handle\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Provide the bare styling for the anim=\"letters-in-reveal\" classes\n * - ```[anim=\"letters-in-reveal\"]```\n * @param \t\t{Integer} \t\t[$words-letters-count=100] \t\tThe max letters count of words that the animation will handle\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Provide the style styling for the anim=\"letters-in-reveal\" classes\n * - ```[anim=\"letters-in-reveal\"]```\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * @name \tSAnimationComponent Classes\n * This file provide the mixins to generate animation classes\n */\n/**\n * Provide the classes for the anim=\"lines-in-boxes\" animation\n * - ```[anim=\"lines-in-boxes\"]```\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n@keyframes lines-in-boxes {\n  0% {\n    width: 0;\n    transform: translateX(200vw);\n  }\n  49.99999% {\n    transform: translateX(200vw);\n  }\n  50% {\n    width: 100%;\n    left: 0;\n    transform: translateX(0);\n  }\n  100% {\n    width: 0;\n    left: 100%;\n    transform: translateX(0);\n  }\n}\n\n@keyframes lines-in-boxes-hover {\n  0% {\n    width: 0;\n    transform: translateX(200vw);\n  }\n  49.99999% {\n    transform: translateX(200vw);\n  }\n  50% {\n    width: 100%;\n    left: 0;\n    transform: translateX(0);\n  }\n  80% {\n    width: 0;\n    left: 100%;\n    transform: translateX(0);\n  }\n  100% {\n    width: 0;\n    left: 100%;\n    transform: translateX(0);\n  }\n}\n\n@keyframes lines-in-boxes-text {\n  0% {\n    transform: translateX(-200vw);\n  }\n  49.99999% {\n    transform: translateX(-200vw);\n  }\n  50% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}\n\n/**\n* Provide the bare styling for the anim=\"lines-in-boxes\" classes\n* - ```[anim=\"lines-in-boxes\"]```\n* @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n*/\n/**\n* Provide the style styling for the anim=\"lines-in-boxes\" classes\n* - ```[anim=\"lines-in-boxes\"]```\n* @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n*/\n/**\n * @name \tSAnimationComponent Classes\n * This file provide the mixins to generate animation classes\n */\n/**\n * Provide the classes for the anim=\"slide-in\" animation\n * - ```[anim=\"slide-in-up\"]```\n * - ```[anim=\"slide-in-right\"]```\n * - ```[anim=\"slide-in-bottom\"]```\n * - ```[anim=\"slide-in-left\"]```\n * @param \t{List} \t\t[$directions=up right down left]\t\tSpecify the directions to generate the classes for\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Provide the bare styling for the anim=\"slide-in\" classes\n * - ```[anim=\"slide-in-up\"]```\n * - ```[anim=\"slide-in-right\"]```\n * - ```[anim=\"slide-in-bottom\"]```\n * - ```[anim=\"slide-in-left\"]```\n * @param \t{List} \t\t[$directions=up right down left]\t\tSpecify the directions to generate the classes for\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n*/\n/**\n * Provide the style styling for the anim=\"slide-in\" classes\n * - ```[anim=\"slide-in\"]```\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * @name \tSButtonComponent\n * Provide ability to generate buttons that follow your settings like colors, look and feel, etc...\n *\n * - ```.btn```\n * - ```.btn--block```\n * - ```.btn--{color}```\n * - ```.btn--outline```\n * - ```.btn--link```\n * - ```.btn:disabled```\n * - ```.btn--hover-{$color}```\n *\n * See:\n * - [Element level mixins API](./sass/_main.md)\n * - [Classes level mixins API](./sass/_classes.md)\n *\n * @example \tscss\n * // apply the button bare and style to my custom element\n * .my-cool-element {\n * \t\\@include s-button();\n * }\n * // apply only the bare styling to my custom element\n * .my-cool-element {\n * \t\\@include s-button-bare();\n * }\n * // apply only the style styling to my custom element\n * .my-cool-element {\n * \t\\@include s-button-style();\n * }\n\n * // will print out classes for the button including bare and style part\n * \\@include s-button-classes(\n * \t$colors : default primary secondary\n * );\n * // will print out classes for the button including only bare part\n * \\@include s-button-classes-bare();\n * // will print out classes for the button including only style part\n * \\@include s-button-classes-style(\n * \t$colors : default primary secondary\n * );\n *\n * @author \tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * @name \tSButtonComponent\n * This file provide the mixins to create buttons\n */\nbutton {\n  line-height: 1;\n}\n\n/**\n * Apply the button css\n * @param \t\t{Number} \t\t[$modifiers=null] \t\t\tThe modifiers that represent the button you want. Available : {color} outline link\n * @param \t\t{Integer}\t\t[$state=null] \t\t\t\tThe state of the button you want like. Available : disabled\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Apply the button bare css\n * @param \t\t{Number} \t\t[$modifiers=null] \t\t\tThe modifiers that represent the button you want. Available : {color} outline link\n * @param \t\t{Integer}\t\t[$state=null] \t\t\t\tThe state of the button you want like. Available : disabled\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Apply the button style css\n * @param \t\t{Number} \t\t[$modifiers=null] \t\t\tThe modifiers that represent the button you want. Available : {color} outline link\n * @param \t\t{Integer}\t\t[$state=null] \t\t\t\tThe state of the button you want like. Available : disabled\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * @name \tSButtonComponent Classes\n * This file provide the mixins to generate button classes\n */\n/**\n * Provide all the classes of the button component like .btn, .btn--outline, etc...\n * - ```.btn```\n * - ```.btn--{color}```\n * - ```.btn--outline```\n * - ```.btn--link```\n * - ```.btn--block```\n * @param \t\t{List<Color>} \t\t[$colors=default primary secondary] \t\tThe colors to generate\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Provide the bare styling for the buttons classes\n * - ```.btn```\n * - ```.btn--block```\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Provide the style styling for the buttons classes\n * - ```.btn--{color}```\n * - ```.btn--outline```\n * - ```.btn--link```\n * - ```.btn:disabled```\n * - ```.btn--hover-{$color}```\n * @param \t\t{List<Color>} \t\t[$colors=default primary secondary] \t\tThe colors to generate\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * @name \tSCornerBadgeComponent\n * Provide ability to generate corner badges that follow your settings like colors.\n *\n * - ```.corner-badge```\n * - ```.corner-badge--tl```\n * - ```.corner-badge--tr```\n * - ```.corner-badge--bl```\n * - ```.corner-badge--br```\n * - ```.corner-badge--{color}```\n *\n * See:\n * - [Element level mixins API](./sass/_main.md)\n * - [Classes level mixins API](./sass/_classes.md)\n *\n * @example \tscss\n * // apply the corner badge bare and style to my custom element\n * .my-cool-element {\n * \t\\@include s-corner-badge(primary tr);\n * }\n * // apply only the bare styling to my custom element\n * .my-cool-element {\n * \t\\@include s-corner-badge-bare(tr);\n * }\n * // apply only the style styling to my custom element\n * .my-cool-element {\n * \t\\@include s-corner-badge-style(primary);\n * }\n\n * // will print out classes for the corner badges including bare and style part\n * \\@include s-corner-badge-classes(\n * \t$corners : tr tl br bl,\n * \t$colors : default primary secondary\n * );\n * // will print out classes for the button including only bare part\n * \\@include s-button-classes-bare(\n * \t$corners : tr tl br bl\n * );\n * // will print out classes for the button including only style part\n * \\@include s-button-classes-style(\n * \t$colors : default primary secondary\n * );\n *\n * @author \tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * @name \tSCornerBadgeComponent\n * This file provide the mixins to create corner badges\n */\n/**\n * Apply the corner badge css\n * @param \t\t{Number} \t\t[$modifiers=default tr] \t\t\tThe modifiers that represent the corner badge you want. Available : {color} tl tr bl br\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Apply the corner badge bare css\n * @param \t\t{Number} \t\t[$modifiers=tr] \t\t\tThe modifiers that represent the corner badge you want. Available : tl tr bl br\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Apply the corner badge style css\n * @param \t\t{Number} \t\t[$modifiers=default] \t\t\tThe modifiers that represent the corner badge you want. Available : {color}\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * @name \tSCornerBadgeComponent Classes\n * This file provide the mixins to generate corner badge classes\n */\n/**\n * Provide all the classes of the corner badge component like:\n * - ```.corner-badge```\n * - ```.corner-badge--tl```\n * - ```.corner-badge--tr```\n * - ```.corner-badge--bl```\n * - ```.corner-badge--br```\n * - ```.corner-badge--{color}```\n *\n * @param \t\t{List<String>} \t\t[$corners=tl tr bl br] \t\t\t\t\t\tThe corners to generate\n * @param \t\t{List<Color>} \t\t[$colors=default primary secondary] \t\tThe colors to generate\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Provide all the bare classes of the corner badge component like:\n * - ```.corner-badge```\n * - ```.corner-badge--tl```\n * - ```.corner-badge--tr```\n * - ```.corner-badge--bl```\n * - ```.corner-badge--br```\n *\n * @param \t\t{List<String>} \t\t[$corners=tl tr bl br] \t\t\t\t\t\tThe corners to generate\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Provide all the style classes of the corner badge component like:\n * - ```.corner-badge--{color}```\n *\n * @param \t\t{List<Color>} \t\t[$colors=default primary secondary] \t\tThe colors to generate\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * @name \tSDropdownComponent\n * Documentation coming soon...\n */\n/**\n * @name \tSFormComponent\n * Documentation coming soon...\n */\n/**\n * @name \tSFormComponent\n * This file provide the mixins and functions to create form elements\n */\n#template-stack .ts-select, #template-stack .ts-select .ts-select__search-field {\n  display: inline-block;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  border: none;\n  outline: none;\n  width: 100%;\n  font-size: 1em;\n}\n\n#template-stack .ts-select, #template-stack select[is=\"ts-select\"][color=\"default\"] + .ts-select, #template-stack select[is=\"ts-select\"][color=\"primary\"] + .ts-select,\n#template-stack .ts-select--primary, #template-stack select[is=\"ts-select\"][color=\"secondary\"] + .ts-select,\n#template-stack .ts-select--secondary {\n  border-width: 1px;\n  border-style: solid;\n}\n\n#template-stack .ts-select:disabled, #template-stack select[is=\"ts-select\"][color=\"default\"] + .ts-select:disabled, #template-stack select[is=\"ts-select\"][color=\"primary\"] + .ts-select:disabled,\n#template-stack .ts-select--primary:disabled, #template-stack select[is=\"ts-select\"][color=\"secondary\"] + .ts-select:disabled,\n#template-stack .ts-select--secondary:disabled {\n  cursor: not-allowed;\n}\n\n/**\n * Set the styling for field sizes like padding, height, etc...\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Set the styling for field color like borders\n * @param \t\t{Color} \t\t$color \t\tThe color wanted for the field\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Apply the bare and style css for input field (text, email, etc...)\n * @param \t\t{Color} \t\t[$color=default] \t\tThe color wanted for the field\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Apply the bare css for input field (text, email, etc...)\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Apply the style css for input field (text, email, etc...)\n * @param \t\t{Color} \t\t[$color=default] \t\tThe color wanted for the field\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Apply the bare and style css for textarea\n * @param \t\t{Color} \t\t[$color=default] \t\tThe color wanted for the textarea\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Set the styling for textarea sizes like padding, etc...\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Apply the bare css for textarea\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Apply the style css for textarea\n * @param \t\t{Color} \t\t[$color=default] \t\tThe color wanted for the textarea\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n* Apply the bare and style css for select\n* @param \t\t{Color} \t\t[$color=default] \t\tThe color wanted for the select\n* @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n*/\n/**\n * Set the styling for select colors like background arrow, etc...\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n* Apply the bare css for select\n* @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n*/\n/**\n* Apply the style css for select\n* @param \t\t{Color} \t\t[$color=default] \t\tThe color wanted for the select\n* @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n*/\n/**\n* Apply the bare and style css for form group\n* @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n*/\n/**\n* Apply the bare css for form group\n* @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n*/\n/**\n* Apply the style css for form group\n* @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n*/\n/**\n* Apply the bare and style css for form addon\n* @param \t\t{Color} \t\t[$color=default] \t\tThe color wanted for the form addon\n* @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n*/\n/**\n* Apply the bare css for form group\n* @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n*/\n/**\n* Apply the bare and style css for form group\n* @param \t\t{Color} \t\t[$color=default] \t\tThe color wanted for the select\n* @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n*/\n/**\n * @name \tSFormComponent Classes\n * This file provide the mixins to generate form classes\n */\n/**\n * Provide all the classes of the form component like .form-input, .form-textarea, etc...\n * - ```.form-input```\n * - ```.form-input--{color}```\n * - ```.form-textarea```\n * - ```.form-textarea--{color}```\n * - ```.form-select```\n * - ```.form-select--{color}```\n * - ```.form-group````\n * - ```.form-addon```\n * - ```.form-addon--{color}```\n * @param \t\t{List<Color>} \t\t[$colors=default primary secondary] \t\tThe colors to generate\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Provide all the bare classes of the form component like .form-input, .form-textarea, etc...\n * - ```.form-input```\n * - ```.form-textarea```\n * - ```.form-select```\n * - ```.form-group````\n * - ```.form-addon```\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Provide all the style classes of the form component like .form-input, .form-textarea, etc...\n * - ```.form-input```\n * - ```.form-input--{color}```\n * - ```.form-textarea```\n * - ```.form-textarea--{color}```\n * - ```.form-select```\n * - ```.form-select--{color}```\n * - ```.form-group````\n * - ```.form-addon```\n * - ```.form-addon--{color}```\n * @param \t\t{List<Color>} \t\t[$colors=default primary secondary] \t\tThe colors to generate\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * @name \tSNavComponent\n * Documentation coming soon...\n */\n/**\n * @name \tSTableComponent\n * Documentation coming soon...\n */\n/**\n * Print out the responsive style for a table.\n * This responsive style make the table display as block and take the \"label\" attribute on the td to display correctly the line label\n */\n/**\n * @name \tSTableComponent Classes\n * This file provide the mixins to generate table classes\n */\n/**\n * Provide all the classes of the button component like .table, .table--striped, etc...\n * - ```.table```\n * - ```.table--striped```\n * - ```.table--bordered```\n * - ```.table--hover```\n * - ```.table--responsive```\n * - ```.table--responsive-overflow```\n * - ```.table--interactive```\n * - ```.table--middle```\n * - ```.table--center```\n *\n * @param \t\t{Color} \t\t[$colors=default primary secondary]\t \t\tSpecify the colors to generate\n * @param \t\t{String} \t\t[$modifiers=striped bordered hover responsive responsive-overflow interactive middle center] \t\tSpecify the modifiers to generate\n *\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Provide all the style classes of the button component like .table, .table--striped, etc...\n * - ```.table```\n * - ```.table--striped```\n * - ```.table--bordered```\n * - ```.table--hover```\n * - ```.table--responsive```\n * - ```.table--responsive-overflow```\n * - ```.table--interactive```\n * - ```.table--middle```\n * - ```.table--center```\n *\n * @param \t\t{Color} \t\t[$colors=default primary secondary]\t \t\tSpecify the colors to generate\n * @param \t\t{String} \t\t[$modifiers=striped bordered hover responsive responsive-overflow interactive middle center] \t\tSpecify the modifiers to generate\n *\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Provide all the bare classes of the button component like .table, .table--striped, etc...\n * - ```.table```\n * - ```.table--striped```\n * - ```.table--bordered```\n * - ```.table--hover```\n * - ```.table--responsive```\n * - ```.table--responsive-overflow```\n * - ```.table--interactive```\n * - ```.table--middle```\n * - ```.table--center```\n *\n * @param \t\t{String} \t\t[$modifiers=striped bordered hover responsive responsive-overflow interactive middle center] \t\tSpecify the modifiers to generate\n *\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * @name \tSTypographyComponent\n * Provide ability to generate base typography classes for:\n * - Titles:\n * \t- ```.h1-h6```\n * \t- ```.tf h1-h6```\n * - Paragraphs\n * \t- ```.p```, ```.tf p```\n * \t- ```.p--lead```, ```.tf p.p--lead```\n * - Links\n * \t- ```.link```, ```.tf a```\n * - Inline text elements\n *  - ```.mark```, ```.tf mark```\n *  - ```.del```, ```.tf del```\n *  - ```.s```, ```.tf s```\n *  - ```.ins```, ```.tf ins```\n *  - ```.u```, ```.tf u```\n *  - ```.small```, ```.tf small```\n *  - ```.strong```, ```.tf strong```\n *  - ```.em```, ```.tf em```\n * - Lists\n * \t- ```.dl```, ```.tf dl```\n * \t\t- ```.dt```, ```.tf dt```\n * \t\t- ```.dd```, ```.tf dd```\n * \t- ```.ul```, ```.tf ul```\n * \t\t- ```.li```, ```.tf li```\n * \t- ```.ol```, ```.tf ol```\n * \t\t- ```.li```, ```.tf li```\n * - Captions\n * \t- ```.caption```, ```.tf caption```, ```.tf figcaption```\n * - Quotes\n * \t- ```.quote```, ```.tf quote```\n * \t- ```.blockquote```, ```.tf blockquote```\n *\n * See:\n * - [Element level mixins API](./sass/_main.md)\n * - [Classes level mixins API](./sass/_classes.md)\n *\n * @example \tscss\n * // apply the title bare and style to my custom element\n * h1 {\n * \t\\@include s-typography-title(4em);\n * }\n * // apply only the bare styling to my custom title\n * h1 {\n * \t\\@include s-typography-title-bare(4em);\n * }\n * // apply only the style styling to my custom title\n * h1 {\n * \t\\@include s-typography-title-style(4em);\n * }\n *\n * // provide classes for all the typography elements\n * \\@include s-typography-classes();\n *\n * @author \tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * @name \tSTypographyComponent\n * This file provide the mixins to create typography elements\n */\n/**\n * Apply the title css\n * @param \t\t{Number} \t\t$size \t\tThe size wanted. If unitless, will use modular scale to calculate size\n * @param \t\t{Integer}\t\t[$base=null] \t\tThe base on which to calculate the modular scale if needed\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Apply the title bare css\n * @param \t\t{Number} \t\t$size \t\t\t\tThe size wanted. If unitless, will use modular scale to calculate size\n * @param \t\t{Integer}\t\t[$base=null] \t\tThe base on which to calculate the modular scale if needed\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Apply the title style css\n * @param \t\t{Number} \t\t$size \t\t\t\tThe size wanted. If unitless, will use modular scale to calculate size\n * @param \t\t{Integer}\t\t[$base=null] \t\tThe base on which to calculate the modular scale if needed\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Apply the paragraph bare css\n * @param \t\t{Number} \t\t$size \t\t\t\tThe size wanted\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Apply the paragraph style css\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Apply the link css\n * @param \t\t{Color} \t\t[$color=primary] \t\tThe color used to style link\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Apply the link bare css\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Apply the link style css\n * @param \t\t{Color} \t\t[$color=primary] \t\tThe color used to style link\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Apply the inline-text css\n * @param \t\t{String} \t\t$tag \t\tThe tag to use the style for\n * @param \t\t{Color} \t\t[$color=primary] \t\tThe color used to style different inline text elements\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Apply the inline-text bare css\n * @param \t\t{String} \t\t$tag \t\tThe tag to use the style for\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Apply the inline-text css\n * @param \t\t{String} \t\t$tag \t\tThe tag to use the style for\n * @param \t\t{Color} \t\t[$color=primary] \t\tThe color used to style different inline text elements\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Apply the list css\n * @param \t\t{String|List} \t\t$tag \t\t\t\tThe tag to style like \"ul\", \"ol li\" or \"dl dt\"\n * @param \t\t{Color} \t\t\t[$color=primary] \tThe color used for styling bullets\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Apply the list bare css\n * @param \t\t{String|List} \t\t$tag \t\t\t\tThe tag to style like \"ul\", \"ol li\" or \"dl dt\"\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Apply the list style css\n * @param \t\t{String|List} \t\t$tag \t\t\t\tThe tag to style like \"ul\", \"ol li\" or \"dl dt\"\n * @param \t\t{Color} \t\t\t[$color=primary] \tThe color used for styling bullets\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Apply the caption css\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Apply the caption bare css\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Apply the caption style css\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Apply the quote css\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Apply the quote bare css\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Apply the quote style css\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * @name \tSTypographyComponent Classes\n * This file provide the mixins to generate typography classes\n */\n/**\n * Provide all the classes of the typography component like titles, paragraphs, lists, etc..\n * @param \t\t{Color} \t[$color=primary] \t\tThe main color used to generate the texts styles\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Provide the styling for the titles classes:\n * - ```.h1-h6```\n * - ```.tf h1-h6```\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Provide the bare styling for the titles classes\n * - ```.h1-h6```\n * - ```.tf h1-h6```\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Provide the style styling for the titles classes\n * - ```.h1-h6```\n * - ```.tf h1-h6```\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Provide the styling for the paragraphs classes\n * - ```.p```, ```.tf p```\n * - ```.p--lead```, ```.tf p.p--lead```\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Provide the bare styling for the ```.p``` and ```.p--lead``` classes\n * - ```.p```, ```.tf p```\n * - ```.p--lead```, ```.tf p.p--lead```\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Provide the bare styling for the ```.p``` class\n * - ```.p```, ```.tf p```\n * - ```.p--lead```, ```.tf p.p--lead```\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Provide the styling for the links classes\n * - ```.link```, ```.tf a```\n * @param \t\t{Color} \t\t[$color=primary] \t\tThe color used to style links\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Provide the bare styling for the links classes\n * - ```.link```, ```.tf a```\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Provide the style styling for the links classes\n * - ```.link```, ```.tf a```\n * @param \t\t{Color} \t\t[$color=primary] \t\tThe color used to style links\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Provide the styling for the inline-text classes\n * - ```.mark```, ```.tf mark```\n * - ```.del```, ```.tf del```\n * - ```.s```, ```.tf s```\n * - ```.ins```, ```.tf ins```\n * - ```.u```, ```.tf u```\n * - ```.small```, ```.tf small```\n * - ```.strong```, ```.tf strong```\n * - ```.em```, ```.tf em```\n * @param \t\t{Color} \t\t[$color=primary] \t\tThe color used to style different inline text elements\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Provide the bare styling for the inline-text classes\n * - ```.mark```, ```.tf mark```\n * - ```.del```, ```.tf del```\n * - ```.s```, ```.tf s```\n * - ```.ins```, ```.tf ins```\n * - ```.u```, ```.tf u```\n * - ```.small```, ```.tf small```\n * - ```.strong```, ```.tf strong```\n * - ```.em```, ```.tf em```\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Provide the style styling for the inline-text classes\n * - ```.mark```, ```.tf mark```\n * - ```.del```, ```.tf del```\n * - ```.s```, ```.tf s```\n * - ```.ins```, ```.tf ins```\n * - ```.u```, ```.tf u```\n * - ```.small```, ```.tf small```\n * - ```.strong```, ```.tf strong```\n * - ```.em```, ```.tf em```\n * @param \t\t{Color} \t\t[$color=primary] \t\tThe color used to style different inline text elements\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Provide the styling for the lists classes\n * - ```.dl```, ```.tf dl```\n * \t- ```.dt```, ```.tf dt```\n * \t- ```.dd```, ```.tf dd```\n * - ```.ul```, ```.tf ul```\n * \t- ```.li```, ```.tf li```\n * - ```.ol```, ```.tf ol```\n * \t- ```.li```, ```.tf li```\n * @param \t\t{Color} \t\t[$color=primary] \t\tThe color used to style bullets\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Provide the bare styling for the lists classes\n * - ```.dl```, ```.tf dl```\n * \t- ```.dt```, ```.tf dt```\n * \t- ```.dd```, ```.tf dd```\n * - ```.ul```, ```.tf ul```\n * \t- ```.li```, ```.tf li```\n * - ```.ol```, ```.tf ol```\n * \t- ```.li```, ```.tf li```\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Provide the style styling for the lists classes\n * - ```.dl```, ```.tf dl```\n * \t- ```.dt```, ```.tf dt```\n * \t- ```.dd```, ```.tf dd```\n * - ```.ul```, ```.tf ul```\n * \t- ```.li```, ```.tf li```\n * - ```.ol```, ```.tf ol```\n * \t- ```.li```, ```.tf li```\n * @param \t\t{Color} \t\t[$color=primary] \t\tThe color used to style bullets\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Provide the styling for the captions classes\n * - ```.caption```, ```.figcaption```, ```.tf caption```, ```.tf figcaption```\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Provide the bare styling for the captions classes\n * - ```.caption```, ```.figcaption```, ```.tf caption```, ```.tf figcaption```\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Provide the style styling for the captions classes\n * - ```.caption```, ```.figcaption```, ```.tf caption```, ```.tf figcaption```\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Provide the styling for the quotes classes\n * - ```.quote```, ```.tf quote```\n * - ```.blockquote```, ```.tf blockquote```\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Provide the bare styling for the quotes classes\n * - ```.quote```, ```.tf quote```\n * - ```.blockquote```, ```.tf blockquote```\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n/**\n * Provide the style styling for the quotes classes\n * - ```.quote```, ```.tf quote```\n * - ```.blockquote```, ```.tf blockquote```\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n#template-stack {\n  /**\n\t* Setup\n\t* Setup all the different parts/modules/libraries.\n\t*/\n  /**\n * Setup\n * Setup all the different parts/modules/libraries.\n */\n  /**\n\t* Utils\n\t* Import all the different utils functions, mixins, classes, etc...\n\t*/\n  /**\n * Utils\n * Import all the different utils functions, mixins, classes, etc...\n */\n  /**\n\t* Generic\n\t* All the generic codebase for the project like typography, resets, etc...\n\t*/\n  /**\n * Generic\n * All the generic codebase for the project like typography, resets, etc...\n */\n  /**\n\t\t * @styleguide \tColors / Swatches\n\t\t * @name \t\tdefault\n\t\t * @color \t\t#848e91\n\t\t * @display \tcolor\n\t\t */\n  /**\n\t\t * @styleguide \tColors / Swatches\n\t\t * @name \t\ttitle\n\t\t * @color \t\t#2b3438\n\t\t * @display \tcolor\n\t\t */\n  /**\n\t\t * @styleguide \tColors / Swatches\n\t\t * @name \t\ttext\n\t\t * @color \t\t#848e91\n\t\t * @display \tcolor\n\t\t */\n  /**\n\t\t * @styleguide \tColors / Swatches\n\t\t * @name \t\tlink\n\t\t * @color \t\t#f2bc2b\n\t\t * @display \tcolor\n\t\t */\n  /**\n\t\t * @styleguide \tColors / Swatches\n\t\t * @name \t\tprimary\n\t\t * @color \t\t#f2bc2b\n\t\t * @display \tcolor\n\t\t */\n  /**\n\t\t * @styleguide \tColors / Swatches\n\t\t * @name \t\tsecondary\n\t\t * @color \t\t#2b3438\n\t\t * @display \tcolor\n\t\t */\n  /**\n\t\t * @styleguide \tColors / Swatches\n\t\t * @name \t\tsuccess\n\t\t * @color \t\t#5cb85c\n\t\t * @display \tcolor\n\t\t */\n  /**\n\t\t * @styleguide \tColors / Swatches\n\t\t * @name \t\twarning\n\t\t * @color \t\t#f0ad4e\n\t\t * @display \tcolor\n\t\t */\n  /**\n\t\t * @styleguide \tColors / Swatches\n\t\t * @name \t\terror\n\t\t * @color \t\t#d9534f\n\t\t * @display \tcolor\n\t\t */\n  /**\n\t\t * @styleguide \tColors / Swatches\n\t\t * @name \t\tinfo\n\t\t * @color \t\t#2199e8\n\t\t * @display \tcolor\n\t\t */\n  /**\n\t\t\t\t * @name   \t\t\tdefault\n\t\t\t\t * @styleguide \t\tFonts / Faces\n\t\t\t\t * @display \t\tfont\n\t\t\t\t * @font-family \tHelvetica Neue, Helvetica, Verdana, Arial, sans-serif\n\t\t\t\t * @font-style \t\t\n\t\t\t\t * @font-weight \tnormal\n\t\t\t\t */\n  /**\n\t\t\t\t * @name   \t\t\tquote\n\t\t\t\t * @styleguide \t\tFonts / Faces\n\t\t\t\t * @display \t\tfont\n\t\t\t\t * @font-family \tPalatino, Times, Georgia, serif\n\t\t\t\t * @font-style \t\t\n\t\t\t\t * @font-weight \tnormal\n\t\t\t\t */\n  /**\n\t\t\t\t * @name   \t\t\tcode\n\t\t\t\t * @styleguide \t\tFonts / Faces\n\t\t\t\t * @display \t\tfont\n\t\t\t\t * @font-family \tMenlo, Monaco, Consolas, Courier New, monospace\n\t\t\t\t * @font-style \t\t\n\t\t\t\t * @font-weight \tnormal\n\t\t\t\t */\n  /**\n\t\t\t * @name \t```.tr-fast```\n\t\t\t * @styleguide  \tHelpers / Transitions\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"tr-fast\">\n\t\t\t * \tI'm transitionned with fast\n\t\t\t * </div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.tr-default```\n\t\t\t * @styleguide  \tHelpers / Transitions\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"tr-default\">\n\t\t\t * \tI'm transitionned with default\n\t\t\t * </div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.tr-slow```\n\t\t\t * @styleguide  \tHelpers / Transitions\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"tr-slow\">\n\t\t\t * \tI'm transitionned with slow\n\t\t\t * </div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.f-default```\n\t\t\t * @styleguide  \tFonts / Classes\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"f-default\">\n\t\t\t * \tI have the font \"default\" applied\n\t\t\t * </div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.f-quote```\n\t\t\t * @styleguide  \tFonts / Classes\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"f-quote\">\n\t\t\t * \tI have the font \"quote\" applied\n\t\t\t * </div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.f-code```\n\t\t\t * @styleguide  \tFonts / Classes\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"f-code\">\n\t\t\t * \tI have the font \"code\" applied\n\t\t\t * </div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.m-b-smaller```\n\t\t\t * @styleguide  \tLayout / Margins\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"m-b-smaller\" style=\"background:#f2bc2b; width:100px; height:5px\"></div>\n\t\t\t * <div style=\"background:#2b3438; width:100px; height:5px\"></div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.m-t-smaller```\n\t\t\t * @styleguide  \tLayout / Margins\n\t\t\t * @example \thtml\n\t\t\t * <div style=\"background:#f2bc2b; width:100px; height:5px\"></div>\n\t\t\t * <div class=\"m-t-smaller\" style=\"background:#2b3438; width:100px; height:5px\"></div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.m-l-smaller```\n\t\t\t * @styleguide  \tLayout / Margins\n\t\t\t * @example \thtml\n\t\t\t * <div style=\"display:inline-block; background:#f2bc2b; width:50px; height:50px\"></div>\n\t\t\t * <div class=\"m-l-smaller\" style=\"display:inline-block; background:#2b3438; width:50px; height:50px\"></div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.m-r-smaller```\n\t\t\t * @styleguide  \tLayout / Margins\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"m-r-smaller\" style=\"display:inline-block; background:#f2bc2b; width:50px; height:50px\"></div>\n\t\t\t * <div style=\"display:inline-block; background:#2b3438; width:50px; height:50px\"></div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.m-s-smaller```\n\t\t\t * @styleguide  \tLayout / Margins\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"m-s-smaller\" style=\"display:inline-block; background:#f2bc2b; width:50px; height:50px\"></div>\n\t\t\t * <div style=\"display:inline-block; background:#2b3438; width:50px; height:50px\"></div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.p-smaller```\n\t\t\t * @styleguide  \tLayout / Paddings\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"p-smaller\" style=\"border:1px solid #f2bc2b; width:150px; height:150px;\">\n\t\t\t * \t<div style=\"background:#2b3438; width:100%; height:100%\"></div>\n\t\t\t * </div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.p-b-smaller```\n\t\t\t * @styleguide  \tLayout / Paddings\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"p-b-smaller\" style=\"border:1px solid #f2bc2b; width:150px; height:150px;\">\n\t\t\t * \t<div style=\"background:#2b3438; width:100%; height:100%\"></div>\n\t\t\t * </div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.p-t-smaller```\n\t\t\t * @styleguide  \tLayout / Paddings\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"p-t-smaller\" style=\"border:1px solid #f2bc2b; width:150px; height:150px;\">\n\t\t\t * \t<div style=\"background:#2b3438; width:100%; height:100%\"></div>\n\t\t\t * </div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.p-l-smaller```\n\t\t\t * @styleguide  \tLayout / Paddings\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"p-l-smaller\" style=\"border:1px solid #f2bc2b; width:150px; height:150px;\">\n\t\t\t * \t<div style=\"background:#2b3438; width:100%; height:100%\"></div>\n\t\t\t * </div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.p-r-smaller```\n\t\t\t * @styleguide  \tLayout / Paddings\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"p-r-smaller\" style=\"border:1px solid #f2bc2b; width:150px; height:150px;\">\n\t\t\t * \t<div style=\"background:#2b3438; width:100%; height:100%\"></div>\n\t\t\t * </div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.p-s-smaller```\n\t\t\t * @styleguide  \tLayout / Paddings\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"p-s-smaller\" style=\"border:1px solid #f2bc2b; width:150px; height:150px;\">\n\t\t\t * \t<div style=\"background:#2b3438; width:100%; height:100%\"></div>\n\t\t\t * </div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.m-b-small```\n\t\t\t * @styleguide  \tLayout / Margins\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"m-b-small\" style=\"background:#f2bc2b; width:100px; height:5px\"></div>\n\t\t\t * <div style=\"background:#2b3438; width:100px; height:5px\"></div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.m-t-small```\n\t\t\t * @styleguide  \tLayout / Margins\n\t\t\t * @example \thtml\n\t\t\t * <div style=\"background:#f2bc2b; width:100px; height:5px\"></div>\n\t\t\t * <div class=\"m-t-small\" style=\"background:#2b3438; width:100px; height:5px\"></div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.m-l-small```\n\t\t\t * @styleguide  \tLayout / Margins\n\t\t\t * @example \thtml\n\t\t\t * <div style=\"display:inline-block; background:#f2bc2b; width:50px; height:50px\"></div>\n\t\t\t * <div class=\"m-l-small\" style=\"display:inline-block; background:#2b3438; width:50px; height:50px\"></div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.m-r-small```\n\t\t\t * @styleguide  \tLayout / Margins\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"m-r-small\" style=\"display:inline-block; background:#f2bc2b; width:50px; height:50px\"></div>\n\t\t\t * <div style=\"display:inline-block; background:#2b3438; width:50px; height:50px\"></div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.m-s-small```\n\t\t\t * @styleguide  \tLayout / Margins\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"m-s-small\" style=\"display:inline-block; background:#f2bc2b; width:50px; height:50px\"></div>\n\t\t\t * <div style=\"display:inline-block; background:#2b3438; width:50px; height:50px\"></div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.p-small```\n\t\t\t * @styleguide  \tLayout / Paddings\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"p-small\" style=\"border:1px solid #f2bc2b; width:150px; height:150px;\">\n\t\t\t * \t<div style=\"background:#2b3438; width:100%; height:100%\"></div>\n\t\t\t * </div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.p-b-small```\n\t\t\t * @styleguide  \tLayout / Paddings\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"p-b-small\" style=\"border:1px solid #f2bc2b; width:150px; height:150px;\">\n\t\t\t * \t<div style=\"background:#2b3438; width:100%; height:100%\"></div>\n\t\t\t * </div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.p-t-small```\n\t\t\t * @styleguide  \tLayout / Paddings\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"p-t-small\" style=\"border:1px solid #f2bc2b; width:150px; height:150px;\">\n\t\t\t * \t<div style=\"background:#2b3438; width:100%; height:100%\"></div>\n\t\t\t * </div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.p-l-small```\n\t\t\t * @styleguide  \tLayout / Paddings\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"p-l-small\" style=\"border:1px solid #f2bc2b; width:150px; height:150px;\">\n\t\t\t * \t<div style=\"background:#2b3438; width:100%; height:100%\"></div>\n\t\t\t * </div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.p-r-small```\n\t\t\t * @styleguide  \tLayout / Paddings\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"p-r-small\" style=\"border:1px solid #f2bc2b; width:150px; height:150px;\">\n\t\t\t * \t<div style=\"background:#2b3438; width:100%; height:100%\"></div>\n\t\t\t * </div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.p-s-small```\n\t\t\t * @styleguide  \tLayout / Paddings\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"p-s-small\" style=\"border:1px solid #f2bc2b; width:150px; height:150px;\">\n\t\t\t * \t<div style=\"background:#2b3438; width:100%; height:100%\"></div>\n\t\t\t * </div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.m-b```\n\t\t\t * @styleguide  \tLayout / Margins\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"m-b\" style=\"background:#f2bc2b; width:100px; height:5px\"></div>\n\t\t\t * <div style=\"background:#2b3438; width:100px; height:5px\"></div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.m-t```\n\t\t\t * @styleguide  \tLayout / Margins\n\t\t\t * @example \thtml\n\t\t\t * <div style=\"background:#f2bc2b; width:100px; height:5px\"></div>\n\t\t\t * <div class=\"m-t\" style=\"background:#2b3438; width:100px; height:5px\"></div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.m-l```\n\t\t\t * @styleguide  \tLayout / Margins\n\t\t\t * @example \thtml\n\t\t\t * <div style=\"display:inline-block; background:#f2bc2b; width:50px; height:50px\"></div>\n\t\t\t * <div class=\"m-l\" style=\"display:inline-block; background:#2b3438; width:50px; height:50px\"></div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.m-r```\n\t\t\t * @styleguide  \tLayout / Margins\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"m-r\" style=\"display:inline-block; background:#f2bc2b; width:50px; height:50px\"></div>\n\t\t\t * <div style=\"display:inline-block; background:#2b3438; width:50px; height:50px\"></div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.m-s```\n\t\t\t * @styleguide  \tLayout / Margins\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"m-s\" style=\"display:inline-block; background:#f2bc2b; width:50px; height:50px\"></div>\n\t\t\t * <div style=\"display:inline-block; background:#2b3438; width:50px; height:50px\"></div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.p```\n\t\t\t * @styleguide  \tLayout / Paddings\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"p\" style=\"border:1px solid #f2bc2b; width:150px; height:150px;\">\n\t\t\t * \t<div style=\"background:#2b3438; width:100%; height:100%\"></div>\n\t\t\t * </div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.p-b```\n\t\t\t * @styleguide  \tLayout / Paddings\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"p-b\" style=\"border:1px solid #f2bc2b; width:150px; height:150px;\">\n\t\t\t * \t<div style=\"background:#2b3438; width:100%; height:100%\"></div>\n\t\t\t * </div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.p-t```\n\t\t\t * @styleguide  \tLayout / Paddings\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"p-t\" style=\"border:1px solid #f2bc2b; width:150px; height:150px;\">\n\t\t\t * \t<div style=\"background:#2b3438; width:100%; height:100%\"></div>\n\t\t\t * </div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.p-l```\n\t\t\t * @styleguide  \tLayout / Paddings\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"p-l\" style=\"border:1px solid #f2bc2b; width:150px; height:150px;\">\n\t\t\t * \t<div style=\"background:#2b3438; width:100%; height:100%\"></div>\n\t\t\t * </div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.p-r```\n\t\t\t * @styleguide  \tLayout / Paddings\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"p-r\" style=\"border:1px solid #f2bc2b; width:150px; height:150px;\">\n\t\t\t * \t<div style=\"background:#2b3438; width:100%; height:100%\"></div>\n\t\t\t * </div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.p-s```\n\t\t\t * @styleguide  \tLayout / Paddings\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"p-s\" style=\"border:1px solid #f2bc2b; width:150px; height:150px;\">\n\t\t\t * \t<div style=\"background:#2b3438; width:100%; height:100%\"></div>\n\t\t\t * </div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.m-b-medium```\n\t\t\t * @styleguide  \tLayout / Margins\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"m-b-medium\" style=\"background:#f2bc2b; width:100px; height:5px\"></div>\n\t\t\t * <div style=\"background:#2b3438; width:100px; height:5px\"></div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.m-t-medium```\n\t\t\t * @styleguide  \tLayout / Margins\n\t\t\t * @example \thtml\n\t\t\t * <div style=\"background:#f2bc2b; width:100px; height:5px\"></div>\n\t\t\t * <div class=\"m-t-medium\" style=\"background:#2b3438; width:100px; height:5px\"></div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.m-l-medium```\n\t\t\t * @styleguide  \tLayout / Margins\n\t\t\t * @example \thtml\n\t\t\t * <div style=\"display:inline-block; background:#f2bc2b; width:50px; height:50px\"></div>\n\t\t\t * <div class=\"m-l-medium\" style=\"display:inline-block; background:#2b3438; width:50px; height:50px\"></div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.m-r-medium```\n\t\t\t * @styleguide  \tLayout / Margins\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"m-r-medium\" style=\"display:inline-block; background:#f2bc2b; width:50px; height:50px\"></div>\n\t\t\t * <div style=\"display:inline-block; background:#2b3438; width:50px; height:50px\"></div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.m-s-medium```\n\t\t\t * @styleguide  \tLayout / Margins\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"m-s-medium\" style=\"display:inline-block; background:#f2bc2b; width:50px; height:50px\"></div>\n\t\t\t * <div style=\"display:inline-block; background:#2b3438; width:50px; height:50px\"></div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.p-medium```\n\t\t\t * @styleguide  \tLayout / Paddings\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"p-medium\" style=\"border:1px solid #f2bc2b; width:150px; height:150px;\">\n\t\t\t * \t<div style=\"background:#2b3438; width:100%; height:100%\"></div>\n\t\t\t * </div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.p-b-medium```\n\t\t\t * @styleguide  \tLayout / Paddings\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"p-b-medium\" style=\"border:1px solid #f2bc2b; width:150px; height:150px;\">\n\t\t\t * \t<div style=\"background:#2b3438; width:100%; height:100%\"></div>\n\t\t\t * </div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.p-t-medium```\n\t\t\t * @styleguide  \tLayout / Paddings\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"p-t-medium\" style=\"border:1px solid #f2bc2b; width:150px; height:150px;\">\n\t\t\t * \t<div style=\"background:#2b3438; width:100%; height:100%\"></div>\n\t\t\t * </div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.p-l-medium```\n\t\t\t * @styleguide  \tLayout / Paddings\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"p-l-medium\" style=\"border:1px solid #f2bc2b; width:150px; height:150px;\">\n\t\t\t * \t<div style=\"background:#2b3438; width:100%; height:100%\"></div>\n\t\t\t * </div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.p-r-medium```\n\t\t\t * @styleguide  \tLayout / Paddings\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"p-r-medium\" style=\"border:1px solid #f2bc2b; width:150px; height:150px;\">\n\t\t\t * \t<div style=\"background:#2b3438; width:100%; height:100%\"></div>\n\t\t\t * </div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.p-s-medium```\n\t\t\t * @styleguide  \tLayout / Paddings\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"p-s-medium\" style=\"border:1px solid #f2bc2b; width:150px; height:150px;\">\n\t\t\t * \t<div style=\"background:#2b3438; width:100%; height:100%\"></div>\n\t\t\t * </div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.m-b-big```\n\t\t\t * @styleguide  \tLayout / Margins\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"m-b-big\" style=\"background:#f2bc2b; width:100px; height:5px\"></div>\n\t\t\t * <div style=\"background:#2b3438; width:100px; height:5px\"></div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.m-t-big```\n\t\t\t * @styleguide  \tLayout / Margins\n\t\t\t * @example \thtml\n\t\t\t * <div style=\"background:#f2bc2b; width:100px; height:5px\"></div>\n\t\t\t * <div class=\"m-t-big\" style=\"background:#2b3438; width:100px; height:5px\"></div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.m-l-big```\n\t\t\t * @styleguide  \tLayout / Margins\n\t\t\t * @example \thtml\n\t\t\t * <div style=\"display:inline-block; background:#f2bc2b; width:50px; height:50px\"></div>\n\t\t\t * <div class=\"m-l-big\" style=\"display:inline-block; background:#2b3438; width:50px; height:50px\"></div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.m-r-big```\n\t\t\t * @styleguide  \tLayout / Margins\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"m-r-big\" style=\"display:inline-block; background:#f2bc2b; width:50px; height:50px\"></div>\n\t\t\t * <div style=\"display:inline-block; background:#2b3438; width:50px; height:50px\"></div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.m-s-big```\n\t\t\t * @styleguide  \tLayout / Margins\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"m-s-big\" style=\"display:inline-block; background:#f2bc2b; width:50px; height:50px\"></div>\n\t\t\t * <div style=\"display:inline-block; background:#2b3438; width:50px; height:50px\"></div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.p-big```\n\t\t\t * @styleguide  \tLayout / Paddings\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"p-big\" style=\"border:1px solid #f2bc2b; width:150px; height:150px;\">\n\t\t\t * \t<div style=\"background:#2b3438; width:100%; height:100%\"></div>\n\t\t\t * </div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.p-b-big```\n\t\t\t * @styleguide  \tLayout / Paddings\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"p-b-big\" style=\"border:1px solid #f2bc2b; width:150px; height:150px;\">\n\t\t\t * \t<div style=\"background:#2b3438; width:100%; height:100%\"></div>\n\t\t\t * </div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.p-t-big```\n\t\t\t * @styleguide  \tLayout / Paddings\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"p-t-big\" style=\"border:1px solid #f2bc2b; width:150px; height:150px;\">\n\t\t\t * \t<div style=\"background:#2b3438; width:100%; height:100%\"></div>\n\t\t\t * </div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.p-l-big```\n\t\t\t * @styleguide  \tLayout / Paddings\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"p-l-big\" style=\"border:1px solid #f2bc2b; width:150px; height:150px;\">\n\t\t\t * \t<div style=\"background:#2b3438; width:100%; height:100%\"></div>\n\t\t\t * </div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.p-r-big```\n\t\t\t * @styleguide  \tLayout / Paddings\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"p-r-big\" style=\"border:1px solid #f2bc2b; width:150px; height:150px;\">\n\t\t\t * \t<div style=\"background:#2b3438; width:100%; height:100%\"></div>\n\t\t\t * </div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.p-s-big```\n\t\t\t * @styleguide  \tLayout / Paddings\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"p-s-big\" style=\"border:1px solid #f2bc2b; width:150px; height:150px;\">\n\t\t\t * \t<div style=\"background:#2b3438; width:100%; height:100%\"></div>\n\t\t\t * </div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.m-b-bigger```\n\t\t\t * @styleguide  \tLayout / Margins\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"m-b-bigger\" style=\"background:#f2bc2b; width:100px; height:5px\"></div>\n\t\t\t * <div style=\"background:#2b3438; width:100px; height:5px\"></div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.m-t-bigger```\n\t\t\t * @styleguide  \tLayout / Margins\n\t\t\t * @example \thtml\n\t\t\t * <div style=\"background:#f2bc2b; width:100px; height:5px\"></div>\n\t\t\t * <div class=\"m-t-bigger\" style=\"background:#2b3438; width:100px; height:5px\"></div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.m-l-bigger```\n\t\t\t * @styleguide  \tLayout / Margins\n\t\t\t * @example \thtml\n\t\t\t * <div style=\"display:inline-block; background:#f2bc2b; width:50px; height:50px\"></div>\n\t\t\t * <div class=\"m-l-bigger\" style=\"display:inline-block; background:#2b3438; width:50px; height:50px\"></div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.m-r-bigger```\n\t\t\t * @styleguide  \tLayout / Margins\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"m-r-bigger\" style=\"display:inline-block; background:#f2bc2b; width:50px; height:50px\"></div>\n\t\t\t * <div style=\"display:inline-block; background:#2b3438; width:50px; height:50px\"></div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.m-s-bigger```\n\t\t\t * @styleguide  \tLayout / Margins\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"m-s-bigger\" style=\"display:inline-block; background:#f2bc2b; width:50px; height:50px\"></div>\n\t\t\t * <div style=\"display:inline-block; background:#2b3438; width:50px; height:50px\"></div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.p-bigger```\n\t\t\t * @styleguide  \tLayout / Paddings\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"p-bigger\" style=\"border:1px solid #f2bc2b; width:150px; height:150px;\">\n\t\t\t * \t<div style=\"background:#2b3438; width:100%; height:100%\"></div>\n\t\t\t * </div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.p-b-bigger```\n\t\t\t * @styleguide  \tLayout / Paddings\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"p-b-bigger\" style=\"border:1px solid #f2bc2b; width:150px; height:150px;\">\n\t\t\t * \t<div style=\"background:#2b3438; width:100%; height:100%\"></div>\n\t\t\t * </div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.p-t-bigger```\n\t\t\t * @styleguide  \tLayout / Paddings\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"p-t-bigger\" style=\"border:1px solid #f2bc2b; width:150px; height:150px;\">\n\t\t\t * \t<div style=\"background:#2b3438; width:100%; height:100%\"></div>\n\t\t\t * </div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.p-l-bigger```\n\t\t\t * @styleguide  \tLayout / Paddings\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"p-l-bigger\" style=\"border:1px solid #f2bc2b; width:150px; height:150px;\">\n\t\t\t * \t<div style=\"background:#2b3438; width:100%; height:100%\"></div>\n\t\t\t * </div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.p-r-bigger```\n\t\t\t * @styleguide  \tLayout / Paddings\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"p-r-bigger\" style=\"border:1px solid #f2bc2b; width:150px; height:150px;\">\n\t\t\t * \t<div style=\"background:#2b3438; width:100%; height:100%\"></div>\n\t\t\t * </div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.p-s-bigger```\n\t\t\t * @styleguide  \tLayout / Paddings\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"p-s-bigger\" style=\"border:1px solid #f2bc2b; width:150px; height:150px;\">\n\t\t\t * \t<div style=\"background:#2b3438; width:100%; height:100%\"></div>\n\t\t\t * </div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.s-smaller```\n\t\t\t * @styleguide  \tLayout / Sizes\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"s-smaller\">\n\t\t\t * \tI have the size \"smaller\" defined\n\t\t\t * </div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.s-smaller-rel```\n\t\t\t * @styleguide  \tLayout / Sizes\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"s-smaller-rel\">\n\t\t\t * \tI have the size \"smaller\" defined relative to my parent\n\t\t\t * </div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.s-small```\n\t\t\t * @styleguide  \tLayout / Sizes\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"s-small\">\n\t\t\t * \tI have the size \"small\" defined\n\t\t\t * </div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.s-small-rel```\n\t\t\t * @styleguide  \tLayout / Sizes\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"s-small-rel\">\n\t\t\t * \tI have the size \"small\" defined relative to my parent\n\t\t\t * </div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.s-default```\n\t\t\t * @styleguide  \tLayout / Sizes\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"s-default\">\n\t\t\t * \tI have the size \"default\" defined\n\t\t\t * </div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.s-default-rel```\n\t\t\t * @styleguide  \tLayout / Sizes\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"s-default-rel\">\n\t\t\t * \tI have the size \"default\" defined relative to my parent\n\t\t\t * </div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.s-medium```\n\t\t\t * @styleguide  \tLayout / Sizes\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"s-medium\">\n\t\t\t * \tI have the size \"medium\" defined\n\t\t\t * </div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.s-medium-rel```\n\t\t\t * @styleguide  \tLayout / Sizes\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"s-medium-rel\">\n\t\t\t * \tI have the size \"medium\" defined relative to my parent\n\t\t\t * </div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.s-big```\n\t\t\t * @styleguide  \tLayout / Sizes\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"s-big\">\n\t\t\t * \tI have the size \"big\" defined\n\t\t\t * </div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.s-big-rel```\n\t\t\t * @styleguide  \tLayout / Sizes\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"s-big-rel\">\n\t\t\t * \tI have the size \"big\" defined relative to my parent\n\t\t\t * </div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.s-bigger```\n\t\t\t * @styleguide  \tLayout / Sizes\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"s-bigger\">\n\t\t\t * \tI have the size \"bigger\" defined\n\t\t\t * </div>\n\t\t\t */\n  /**\n\t\t\t * @name \t```.s-bigger-rel```\n\t\t\t * @styleguide  \tLayout / Sizes\n\t\t\t * @example \thtml\n\t\t\t * <div class=\"s-bigger-rel\">\n\t\t\t * \tI have the size \"bigger\" defined relative to my parent\n\t\t\t * </div>\n\t\t\t */\n  /**\n\t\t * @name \t```.no-p-t```\n\t\t * Reset **top** padding\n\t\t * @styleguide  \tLayout / No padding\n\t\t * @example \thtml\n\t\t * <div class=\"no-p-t\" style=\"display:inline-block; background:#f2bc2b; width:50px; height:50px;\"></div>\n\t\t */\n  /**\n\t\t * @name \t```.no-p-r```\n\t\t * Reset **right** padding\n\t\t * @styleguide  \tLayout / No padding\n\t\t * @example \thtml\n\t\t * <div class=\"no-p-r\" style=\"display:inline-block; background:#f2bc2b; width:50px; height:50px;\"></div>\n\t\t */\n  /**\n\t\t * @name \t```.no-p-b```\n\t\t * Reset **bottom** padding\n\t\t * @styleguide  \tLayout / No padding\n\t\t * @example \thtml\n\t\t * <div class=\"no-p-b\" style=\"display:inline-block; background:#f2bc2b; width:50px; height:50px;\"></div>\n\t\t */\n  /**\n\t\t * @name \t```.no-p-l```\n\t\t * Reset **left** padding\n\t\t * @styleguide  \tLayout / No padding\n\t\t * @example \thtml\n\t\t * <div class=\"no-p-l\" style=\"display:inline-block; background:#f2bc2b; width:50px; height:50px;\"></div>\n\t\t */\n  /**\n\t\t * @name \t```.no-p-s```\n\t\t * Reset **left** and **right** paddings\n\t\t * @styleguide  \tLayout / No padding\n\t\t * @example \thtml\n\t\t * <div class=\"no-p-s\" style=\"display:inline-block; background:#f2bc2b; width:50px; height:50px;\"></div>\n\t\t */\n  /**\n\t\t * @name \t```.no-m-t```\n\t\t * Reset **top** padding\n\t\t * @styleguide  \tLayout / No margin\n\t\t * @example \thtml\n\t\t * <div class=\"no-m-t\" style=\"display:inline-block; background:#f2bc2b; width:50px; height:50px;\"></div>\n\t\t */\n  /**\n\t\t * @name \t```.no-m-r```\n\t\t * Reset **right** padding\n\t\t * @styleguide  \tLayout / No margin\n\t\t * @example \thtml\n\t\t * <div class=\"no-m-r\" style=\"display:inline-block; background:#f2bc2b; width:50px; height:50px;\"></div>\n\t\t */\n  /**\n\t\t * @name \t```.no-m-b```\n\t\t * Reset **bottom** padding\n\t\t * @styleguide  \tLayout / No margin\n\t\t * @example \thtml\n\t\t * <div class=\"no-m-b\" style=\"display:inline-block; background:#f2bc2b; width:50px; height:50px;\"></div>\n\t\t */\n  /**\n\t\t * @name \t```.no-m-l```\n\t\t * Reset **left** padding\n\t\t * @styleguide  \tLayout / No margin\n\t\t * @example \thtml\n\t\t * <div class=\"no-m-l\" style=\"display:inline-block; background:#f2bc2b; width:50px; height:50px;\"></div>\n\t\t */\n  /**\n\t\t * @name \t```.no-m-s```\n\t\t * Reset **left** and **right** margins\n\t\t * @styleguide  \tLayout / No padding\n\t\t * @example \thtml\n\t\t * <div class=\"no-m-s\" style=\"display:inline-block; background:#f2bc2b; width:50px; height:50px;\"></div>\n\t\t */\n  /**\n\t\t\t\t * @name \t```.c-default```\n\t\t\t\t * Specify the color to **default**\n\t\t\t\t * @styleguide  \tColors / Classes\n\t\t\t\t * @example \thtml\n\t\t\t\t * <div class=\"c-default\">\n\t\t\t\t * \tI'm in \"default\" color\n\t\t\t\t * </div>\n\t\t\t\t */\n  /**\n\t\t\t\t * @name \t```.bkg-default```\n\t\t\t\t * Specify the background color to **default**\n\t\t\t\t * @styleguide  \tColors / Classes\n\t\t\t\t * @example \thtml\n\t\t\t\t * <div class=\"bkg-default p\" style=\"color:white\">\n\t\t\t\t * \tMy background color is \"default\"\n\t\t\t\t * </div>\n\t\t\t\t */\n  /**\n\t\t\t\t * @name \t```.c-title```\n\t\t\t\t * Specify the color to **title**\n\t\t\t\t * @styleguide  \tColors / Classes\n\t\t\t\t * @example \thtml\n\t\t\t\t * <div class=\"c-title\">\n\t\t\t\t * \tI'm in \"title\" color\n\t\t\t\t * </div>\n\t\t\t\t */\n  /**\n\t\t\t\t * @name \t```.bkg-title```\n\t\t\t\t * Specify the background color to **title**\n\t\t\t\t * @styleguide  \tColors / Classes\n\t\t\t\t * @example \thtml\n\t\t\t\t * <div class=\"bkg-title p\" style=\"color:white\">\n\t\t\t\t * \tMy background color is \"title\"\n\t\t\t\t * </div>\n\t\t\t\t */\n  /**\n\t\t\t\t * @name \t```.c-text```\n\t\t\t\t * Specify the color to **text**\n\t\t\t\t * @styleguide  \tColors / Classes\n\t\t\t\t * @example \thtml\n\t\t\t\t * <div class=\"c-text\">\n\t\t\t\t * \tI'm in \"text\" color\n\t\t\t\t * </div>\n\t\t\t\t */\n  /**\n\t\t\t\t * @name \t```.bkg-text```\n\t\t\t\t * Specify the background color to **text**\n\t\t\t\t * @styleguide  \tColors / Classes\n\t\t\t\t * @example \thtml\n\t\t\t\t * <div class=\"bkg-text p\" style=\"color:white\">\n\t\t\t\t * \tMy background color is \"text\"\n\t\t\t\t * </div>\n\t\t\t\t */\n  /**\n\t\t\t\t * @name \t```.c-link```\n\t\t\t\t * Specify the color to **link**\n\t\t\t\t * @styleguide  \tColors / Classes\n\t\t\t\t * @example \thtml\n\t\t\t\t * <div class=\"c-link\">\n\t\t\t\t * \tI'm in \"link\" color\n\t\t\t\t * </div>\n\t\t\t\t */\n  /**\n\t\t\t\t * @name \t```.bkg-link```\n\t\t\t\t * Specify the background color to **link**\n\t\t\t\t * @styleguide  \tColors / Classes\n\t\t\t\t * @example \thtml\n\t\t\t\t * <div class=\"bkg-link p\" style=\"color:white\">\n\t\t\t\t * \tMy background color is \"link\"\n\t\t\t\t * </div>\n\t\t\t\t */\n  /**\n\t\t\t\t * @name \t```.c-primary```\n\t\t\t\t * Specify the color to **primary**\n\t\t\t\t * @styleguide  \tColors / Classes\n\t\t\t\t * @example \thtml\n\t\t\t\t * <div class=\"c-primary\">\n\t\t\t\t * \tI'm in \"primary\" color\n\t\t\t\t * </div>\n\t\t\t\t */\n  /**\n\t\t\t\t * @name \t```.bkg-primary```\n\t\t\t\t * Specify the background color to **primary**\n\t\t\t\t * @styleguide  \tColors / Classes\n\t\t\t\t * @example \thtml\n\t\t\t\t * <div class=\"bkg-primary p\" style=\"color:white\">\n\t\t\t\t * \tMy background color is \"primary\"\n\t\t\t\t * </div>\n\t\t\t\t */\n  /**\n\t\t\t\t * @name \t```.c-secondary```\n\t\t\t\t * Specify the color to **secondary**\n\t\t\t\t * @styleguide  \tColors / Classes\n\t\t\t\t * @example \thtml\n\t\t\t\t * <div class=\"c-secondary\">\n\t\t\t\t * \tI'm in \"secondary\" color\n\t\t\t\t * </div>\n\t\t\t\t */\n  /**\n\t\t\t\t * @name \t```.bkg-secondary```\n\t\t\t\t * Specify the background color to **secondary**\n\t\t\t\t * @styleguide  \tColors / Classes\n\t\t\t\t * @example \thtml\n\t\t\t\t * <div class=\"bkg-secondary p\" style=\"color:white\">\n\t\t\t\t * \tMy background color is \"secondary\"\n\t\t\t\t * </div>\n\t\t\t\t */\n  /**\n\t\t\t\t * @name \t```.c-success```\n\t\t\t\t * Specify the color to **success**\n\t\t\t\t * @styleguide  \tColors / Classes\n\t\t\t\t * @example \thtml\n\t\t\t\t * <div class=\"c-success\">\n\t\t\t\t * \tI'm in \"success\" color\n\t\t\t\t * </div>\n\t\t\t\t */\n  /**\n\t\t\t\t * @name \t```.bkg-success```\n\t\t\t\t * Specify the background color to **success**\n\t\t\t\t * @styleguide  \tColors / Classes\n\t\t\t\t * @example \thtml\n\t\t\t\t * <div class=\"bkg-success p\" style=\"color:white\">\n\t\t\t\t * \tMy background color is \"success\"\n\t\t\t\t * </div>\n\t\t\t\t */\n  /**\n\t\t\t\t * @name \t```.c-warning```\n\t\t\t\t * Specify the color to **warning**\n\t\t\t\t * @styleguide  \tColors / Classes\n\t\t\t\t * @example \thtml\n\t\t\t\t * <div class=\"c-warning\">\n\t\t\t\t * \tI'm in \"warning\" color\n\t\t\t\t * </div>\n\t\t\t\t */\n  /**\n\t\t\t\t * @name \t```.bkg-warning```\n\t\t\t\t * Specify the background color to **warning**\n\t\t\t\t * @styleguide  \tColors / Classes\n\t\t\t\t * @example \thtml\n\t\t\t\t * <div class=\"bkg-warning p\" style=\"color:white\">\n\t\t\t\t * \tMy background color is \"warning\"\n\t\t\t\t * </div>\n\t\t\t\t */\n  /**\n\t\t\t\t * @name \t```.c-error```\n\t\t\t\t * Specify the color to **error**\n\t\t\t\t * @styleguide  \tColors / Classes\n\t\t\t\t * @example \thtml\n\t\t\t\t * <div class=\"c-error\">\n\t\t\t\t * \tI'm in \"error\" color\n\t\t\t\t * </div>\n\t\t\t\t */\n  /**\n\t\t\t\t * @name \t```.bkg-error```\n\t\t\t\t * Specify the background color to **error**\n\t\t\t\t * @styleguide  \tColors / Classes\n\t\t\t\t * @example \thtml\n\t\t\t\t * <div class=\"bkg-error p\" style=\"color:white\">\n\t\t\t\t * \tMy background color is \"error\"\n\t\t\t\t * </div>\n\t\t\t\t */\n  /**\n\t\t\t\t * @name \t```.c-info```\n\t\t\t\t * Specify the color to **info**\n\t\t\t\t * @styleguide  \tColors / Classes\n\t\t\t\t * @example \thtml\n\t\t\t\t * <div class=\"c-info\">\n\t\t\t\t * \tI'm in \"info\" color\n\t\t\t\t * </div>\n\t\t\t\t */\n  /**\n\t\t\t\t * @name \t```.bkg-info```\n\t\t\t\t * Specify the background color to **info**\n\t\t\t\t * @styleguide  \tColors / Classes\n\t\t\t\t * @example \thtml\n\t\t\t\t * <div class=\"bkg-info p\" style=\"color:white\">\n\t\t\t\t * \tMy background color is \"info\"\n\t\t\t\t * </div>\n\t\t\t\t */\n  /**\n\t* Layout\n\t* All the layout level specific styling.\n\t*/\n  /**\n * Layout\n * All the layout level specific styling.\n */\n  /**\n\t* Pages\n\t* All the pages level specific styling.\n\t*/\n  /**\n * Pages\n * All the pages level specific styling.\n */\n  /**\n\t* Blocks\n\t* All the blocks styling.\n\t* A block can contain other blocks or objects and does not have to relay on his ancestors\n\t* to be properly displayed.\n\t*/\n  /**\n * Blocks\n * All the blocks styling.\n * A block can contain other blocks or objects and does not have to relay on his ancestors\n * to be properly displayed.\n */\n  /**\n\t* Objects\n\t* All the objects styling.\n\t* An object response to the same rules has the blocks, unless they cannot contain any other objects or blocks.\n\t*/\n  /**\n * Objects\n * All the objects styling.\n * An object response to the same rules has the blocks, unless they cannot contain any other objects or blocks.\n */\n  /**\n * @name \tSSelectComponent Classes\n * This file provide the mixins to generate s-select classes\n */\n  /**\n * Provide all the classes of the s-select component for a default style\n * Styling options:\n * - ```[color=\"{$color}\"]``` : apply a color to the select component\n * @param \t\t{List<Color>} \t\t[$colors=default primary secondary] \t\tThe colors to generate\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n  /**\n * Provide the bare styling for the s-select classes\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n  /**\n * Provide all the style classes of the s-select component for a default style\n * Styling options:\n * - ```[color=\"{$color}\"]``` : apply a color to the select component\n * @param \t\t{List<Color>} \t\t[$colors=default primary secondary] \t\tThe colors to generate\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n  /**\n\t* Trumps\n\t* All the things that does not fit in any others directory. Try to keep this folder has small as possible.\n\t* If you have to many things in here, that mean that you probably need to refactor your codebase...\n\t*/\n  /**\n * Trumps\n * All the things that does not fit in any others directory. Try to keep this folder has small as possible.\n * If you have to many things in here, that mean that you probably need to refactor your codebase...\n */\n}\n\n#template-stack html, #template-stack body, #template-stack div, #template-stack span, #template-stack applet, #template-stack object, #template-stack iframe, #template-stack h1, #template-stack h2, #template-stack h3, #template-stack h4, #template-stack h5, #template-stack h6, #template-stack p, #template-stack blockquote, #template-stack pre, #template-stack a, #template-stack abbr, #template-stack acronym, #template-stack address, #template-stack big, #template-stack cite, #template-stack code, #template-stack del, #template-stack dfn, #template-stack em, #template-stack img, #template-stack ins, #template-stack kbd, #template-stack q, #template-stack s, #template-stack samp, #template-stack small, #template-stack strike, #template-stack strong, #template-stack sub, #template-stack sup, #template-stack tt, #template-stack var, #template-stack b, #template-stack u, #template-stack i, #template-stack center, #template-stack dl, #template-stack dt, #template-stack dd, #template-stack ol, #template-stack ul, #template-stack li, #template-stack fieldset, #template-stack form, #template-stack label, #template-stack legend, #template-stack table, #template-stack caption, #template-stack tbody, #template-stack tfoot, #template-stack thead, #template-stack tr, #template-stack th, #template-stack td, #template-stack article, #template-stack aside, #template-stack canvas, #template-stack details, #template-stack embed, #template-stack figure, #template-stack figcaption, #template-stack footer, #template-stack header, #template-stack hgroup, #template-stack menu, #template-stack nav, #template-stack output, #template-stack ruby, #template-stack section, #template-stack summary, #template-stack time, #template-stack mark, #template-stack audio, #template-stack video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n#template-stack article, #template-stack aside, #template-stack details, #template-stack figcaption, #template-stack figure, #template-stack footer, #template-stack header, #template-stack hgroup, #template-stack menu, #template-stack nav, #template-stack section {\n  display: block;\n}\n\n#template-stack body {\n  line-height: 1;\n}\n\n#template-stack ol, #template-stack ul {\n  list-style: none;\n}\n\n#template-stack blockquote, #template-stack q {\n  quotes: none;\n}\n\n#template-stack blockquote:before, #template-stack blockquote:after {\n  content: '';\n  content: none;\n}\n\n#template-stack q:before, #template-stack q:after {\n  content: '';\n  content: none;\n}\n\n#template-stack table {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n#template-stack .s-settings:after {\n  content: '{\"unit\": \"rem\", \"reset\": true, \"border-box\": true, \"sizes\": {\"smaller\": 0.3, \"small\": 0.6, \"default\": 1, \"medium\": 1.4, \"big\": 2, \"bigger\": 3}, \"typography\": {\"font-family\": \"default\", \"font-size\": \"13px\", \"font-sizes\": null, \"line-letters-count\": 55, \"font-format\": {\"eot\": \"embedded-opentype\", \"woff2\": \"woff2\", \"woff\": \"woff\", \"ttf\": \"truetype\", \"otf\": \"opentype\", \"svg\": \"svg\", \"svgz\": \"svgz\"}}, \"look-and-feel\": {\"border-radius\": \"0em\", \"padding-vertical\": \"1.4em\", \"padding-horizontal\": \"0.8em\", \"disabled-opacity\": 0.5, \"line-height\": 1.4}, \"spaces\": {\"default\": \"20px\", \"smaller\": \"5px\", \"small\": \"10px\", \"medium\": \"40px\", \"big\": \"70px\", \"bigger\": \"100px\"}, \"colors\": {\"default\": {\"color\": \"#848e91\"}, \"title\": {\"color\": \"#2b3438\"}, \"text\": {\"color\": \"default\"}, \"link\": {\"color\": \"primary\"}, \"primary\": {\"color\": \"#f2bc2b\"}, \"secondary\": {\"color\": \"#2b3438\"}, \"success\": {\"color\": \"#5cb85c\"}, \"warning\": {\"color\": \"#f0ad4e\"}, \"error\": {\"color\": \"#d9534f\"}, \"info\": {\"color\": \"#2199e8\"}}, \"modular-scale\": {\"base\": \"1rem\", \"ratio\": 1.33}, \"text-format\": {\"scope-class\": \"tf\"}, \"vertical-rhythme\": {\"enabled\": true, \"scope-class\": \"vr\"}, \"BEM\": {\"standelone-modifier\": false, \"element-separator\": \"__\", \"modifier-separator\": \"--\"}, \"fonts\": {\"default\": {\"font-family\": [\"Helvetica Neue\", \"Helvetica\", \"Verdana\", \"Arial\", \"sans-serif\"], \"font-weight\": \"normal\", \"cap-height\": 0.65}, \"quote\": {\"font-family\": [\"Palatino\", \"Times\", \"Georgia\", \"serif\"], \"font-weight\": \"normal\", \"cap-height\": 0.65}, \"code\": {\"font-family\": [\"Menlo\", \"Monaco\", \"Consolas\", \"Courier New\", \"monospace\"], \"font-weight\": \"normal\", \"cap-height\": 0.65}}, \"filters\": [], \"transitions\": {\"fast\": [\"all\", \"0.1s\", \"ease-in-out\", \"0s\"], \"default\": [\"all\", \"0.2s\", \"ease-in-out\", \"0s\"], \"slow\": [\"all\", \"0.5s\", \"ease-in-out\", \"0s\"]}}';\n  display: none;\n}\n\n#template-stack html {\n  box-sizing: border-box;\n}\n\n#template-stack *, #template-stack *:before, #template-stack *:after {\n  box-sizing: inherit;\n}\n\n#template-stack a {\n  color: inherit;\n}\n\n#template-stack html {\n  font-size: 13Px;\n  color: #848e91;\n  font-family: \"Helvetica Neue\", Helvetica, Verdana, Arial, sans-serif;\n  font-weight: normal;\n}\n\n#template-stack body {\n  color: #848e91;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n#template-stack .tr-fast {\n  transition: all 0.1s ease-in-out 0s, outline-color 0s linear 0s;\n  outline-color: black;\n}\n\n#template-stack .tr-default {\n  transition: all 0.2s ease-in-out 0s, outline-color 0s linear 0s;\n  outline-color: black;\n}\n\n#template-stack .tr-slow {\n  transition: all 0.5s ease-in-out 0s, outline-color 0s linear 0s;\n  outline-color: black;\n}\n\n#template-stack .f-default {\n  font-family: \"Helvetica Neue\", Helvetica, Verdana, Arial, sans-serif;\n  font-weight: normal;\n}\n\n#template-stack .f-quote {\n  font-family: Palatino, Times, Georgia, serif;\n  font-weight: normal;\n}\n\n#template-stack .f-code {\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace;\n  font-weight: normal;\n}\n\n#template-stack .m-b-smaller {\n  margin-bottom: 0.38462rem;\n}\n\n#template-stack .m-t-smaller {\n  margin-top: 0.38462rem;\n}\n\n#template-stack .m-l-smaller {\n  margin-left: 0.38462rem;\n}\n\n#template-stack .m-r-smaller {\n  margin-right: 0.38462rem;\n}\n\n#template-stack .m-s-smaller {\n  margin-left: 0.38462rem;\n  margin-right: 0.38462rem;\n}\n\n#template-stack .p-smaller {\n  padding: 0.38462rem;\n}\n\n#template-stack .p-b-smaller {\n  padding-bottom: 0.38462rem;\n}\n\n#template-stack .p-t-smaller {\n  padding-top: 0.38462rem;\n}\n\n#template-stack .p-l-smaller {\n  padding-left: 0.38462rem;\n}\n\n#template-stack .p-r-smaller {\n  padding-right: 0.38462rem;\n}\n\n#template-stack .p-s-smaller {\n  padding-left: 0.38462rem;\n  padding-right: 0.38462rem;\n}\n\n#template-stack .m-b-small {\n  margin-bottom: 0.76923rem;\n}\n\n#template-stack .m-t-small {\n  margin-top: 0.76923rem;\n}\n\n#template-stack .m-l-small {\n  margin-left: 0.76923rem;\n}\n\n#template-stack .m-r-small {\n  margin-right: 0.76923rem;\n}\n\n#template-stack .m-s-small {\n  margin-left: 0.76923rem;\n  margin-right: 0.76923rem;\n}\n\n#template-stack .p-small {\n  padding: 0.76923rem;\n}\n\n#template-stack .p-b-small {\n  padding-bottom: 0.76923rem;\n}\n\n#template-stack .p-t-small {\n  padding-top: 0.76923rem;\n}\n\n#template-stack .p-l-small {\n  padding-left: 0.76923rem;\n}\n\n#template-stack .p-r-small {\n  padding-right: 0.76923rem;\n}\n\n#template-stack .p-s-small {\n  padding-left: 0.76923rem;\n  padding-right: 0.76923rem;\n}\n\n#template-stack .m-b {\n  margin-bottom: 1.53846rem;\n}\n\n#template-stack .m-t {\n  margin-top: 1.53846rem;\n}\n\n#template-stack .m-l {\n  margin-left: 1.53846rem;\n}\n\n#template-stack .m-r {\n  margin-right: 1.53846rem;\n}\n\n#template-stack .m-s {\n  margin-left: 1.53846rem;\n  margin-right: 1.53846rem;\n}\n\n#template-stack .p:not(p) {\n  padding: 1.53846rem;\n}\n\n#template-stack .p-b {\n  padding-bottom: 1.53846rem;\n}\n\n#template-stack .p-t {\n  padding-top: 1.53846rem;\n}\n\n#template-stack .p-l {\n  padding-left: 1.53846rem;\n}\n\n#template-stack .p-r {\n  padding-right: 1.53846rem;\n}\n\n#template-stack .p-s {\n  padding-left: 1.53846rem;\n  padding-right: 1.53846rem;\n}\n\n#template-stack .m-b-medium {\n  margin-bottom: 3.07692rem;\n}\n\n#template-stack .m-t-medium {\n  margin-top: 3.07692rem;\n}\n\n#template-stack .m-l-medium {\n  margin-left: 3.07692rem;\n}\n\n#template-stack .m-r-medium {\n  margin-right: 3.07692rem;\n}\n\n#template-stack .m-s-medium {\n  margin-left: 3.07692rem;\n  margin-right: 3.07692rem;\n}\n\n#template-stack .p-medium {\n  padding: 3.07692rem;\n}\n\n#template-stack .p-b-medium {\n  padding-bottom: 3.07692rem;\n}\n\n#template-stack .p-t-medium {\n  padding-top: 3.07692rem;\n}\n\n#template-stack .p-l-medium {\n  padding-left: 3.07692rem;\n}\n\n#template-stack .p-r-medium {\n  padding-right: 3.07692rem;\n}\n\n#template-stack .p-s-medium {\n  padding-left: 3.07692rem;\n  padding-right: 3.07692rem;\n}\n\n#template-stack .m-b-big {\n  margin-bottom: 5.38462rem;\n}\n\n#template-stack .m-t-big {\n  margin-top: 5.38462rem;\n}\n\n#template-stack .m-l-big {\n  margin-left: 5.38462rem;\n}\n\n#template-stack .m-r-big {\n  margin-right: 5.38462rem;\n}\n\n#template-stack .m-s-big {\n  margin-left: 5.38462rem;\n  margin-right: 5.38462rem;\n}\n\n#template-stack .p-big {\n  padding: 5.38462rem;\n}\n\n#template-stack .p-b-big {\n  padding-bottom: 5.38462rem;\n}\n\n#template-stack .p-t-big {\n  padding-top: 5.38462rem;\n}\n\n#template-stack .p-l-big {\n  padding-left: 5.38462rem;\n}\n\n#template-stack .p-r-big {\n  padding-right: 5.38462rem;\n}\n\n#template-stack .p-s-big {\n  padding-left: 5.38462rem;\n  padding-right: 5.38462rem;\n}\n\n#template-stack .m-b-bigger {\n  margin-bottom: 7.69231rem;\n}\n\n#template-stack .m-t-bigger {\n  margin-top: 7.69231rem;\n}\n\n#template-stack .m-l-bigger {\n  margin-left: 7.69231rem;\n}\n\n#template-stack .m-r-bigger {\n  margin-right: 7.69231rem;\n}\n\n#template-stack .m-s-bigger {\n  margin-left: 7.69231rem;\n  margin-right: 7.69231rem;\n}\n\n#template-stack .p-bigger {\n  padding: 7.69231rem;\n}\n\n#template-stack .p-b-bigger {\n  padding-bottom: 7.69231rem;\n}\n\n#template-stack .p-t-bigger {\n  padding-top: 7.69231rem;\n}\n\n#template-stack .p-l-bigger {\n  padding-left: 7.69231rem;\n}\n\n#template-stack .p-r-bigger {\n  padding-right: 7.69231rem;\n}\n\n#template-stack .p-s-bigger {\n  padding-left: 7.69231rem;\n  padding-right: 7.69231rem;\n}\n\n#template-stack .s-smaller {\n  font-size: 0.3rem;\n}\n\n#template-stack .s-smaller-rel {\n  font-size: 0.3em;\n}\n\n#template-stack .s-small {\n  font-size: 0.6rem;\n}\n\n#template-stack .s-small-rel {\n  font-size: 0.6em;\n}\n\n#template-stack .s-default {\n  font-size: 1rem;\n}\n\n#template-stack .s-default-rel {\n  font-size: 1em;\n}\n\n#template-stack .s-medium {\n  font-size: 1.4rem;\n}\n\n#template-stack .s-medium-rel {\n  font-size: 1.4em;\n}\n\n#template-stack .s-big {\n  font-size: 2rem;\n}\n\n#template-stack .s-big-rel {\n  font-size: 2em;\n}\n\n#template-stack .s-bigger {\n  font-size: 3rem;\n}\n\n#template-stack .s-bigger-rel {\n  font-size: 3em;\n}\n\n#template-stack .no-p-t {\n  padding-top: 0 !important;\n}\n\n#template-stack .no-p-r {\n  padding-right: 0 !important;\n}\n\n#template-stack .no-p-b {\n  padding-bottom: 0 !important;\n}\n\n#template-stack .no-p-l {\n  padding-left: 0 !important;\n}\n\n#template-stack .no-p-s {\n  padding-left: 0 !important;\n  padding-right: 0 !important;\n}\n\n#template-stack .no-m-t {\n  margin-top: 0 !important;\n}\n\n#template-stack .no-m-r {\n  margin-right: 0 !important;\n}\n\n#template-stack .no-m-b {\n  margin-bottom: 0 !important;\n}\n\n#template-stack .no-m-l {\n  margin-left: 0 !important;\n}\n\n#template-stack .no-m-s {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n}\n\n#template-stack .c-default {\n  color: #848e91;\n}\n\n#template-stack .bkg-default {\n  background-color: #848e91;\n}\n\n#template-stack .c-title {\n  color: #2b3438;\n}\n\n#template-stack .bkg-title {\n  background-color: #2b3438;\n}\n\n#template-stack .c-text {\n  color: #848e91;\n}\n\n#template-stack .bkg-text {\n  background-color: #848e91;\n}\n\n#template-stack .c-link {\n  color: #f2bc2b;\n}\n\n#template-stack .bkg-link {\n  background-color: #f2bc2b;\n}\n\n#template-stack .c-primary {\n  color: #f2bc2b;\n}\n\n#template-stack .bkg-primary {\n  background-color: #f2bc2b;\n}\n\n#template-stack .c-secondary {\n  color: #2b3438;\n}\n\n#template-stack .bkg-secondary {\n  background-color: #2b3438;\n}\n\n#template-stack .c-success {\n  color: #5cb85c;\n}\n\n#template-stack .bkg-success {\n  background-color: #5cb85c;\n}\n\n#template-stack .c-warning {\n  color: #f0ad4e;\n}\n\n#template-stack .bkg-warning {\n  background-color: #f0ad4e;\n}\n\n#template-stack .c-error {\n  color: #d9534f;\n}\n\n#template-stack .bkg-error {\n  background-color: #d9534f;\n}\n\n#template-stack .c-info {\n  color: #2199e8;\n}\n\n#template-stack .bkg-info {\n  background-color: #2199e8;\n}\n\n@keyframes page-switcher-select-in {\n  from {\n    opacity: 0;\n    transform: translateX(-50%) translateY(-100%);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(-50%) translateY(-50%);\n  }\n}\n\n#template-stack .page-switcher {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 999999;\n}\n\n#template-stack .page-switcher__container {\n  box-shadow: rgba(0, 0, 0, 0.2) 0 20px 30px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%) translateZ(0);\n  opacity: 0;\n  top: 20%;\n  width: 38.46154rem;\n  background: white;\n  padding: 1.53846rem;\n  animation: page-switcher-select-in .1s ease-in-out 0s forwards;\n}\n\n#template-stack .ts-select__selection-tag {\n  display: inline-block;\n}\n\n#template-stack .ts-select__reset {\n  background-size: 100% 100%;\n  background-color: transparent;\n  border: none;\n  position: absolute;\n}\n\n#template-stack .ts-select__selection-tag-close {\n  background-size: 100% 100%;\n}\n\n#template-stack .ts-select__option--disabled {\n  opacity: 0.5;\n}\n\n#template-stack .ts-select__selection-tag-close {\n  height: 0.8em;\n  width: 0.8em;\n  vertical-align: middle;\n  cursor: pointer;\n  display: inline-block;\n}\n\n#template-stack .ts-select__reset {\n  right: 3.5em;\n  top: 50%;\n  transform: translateY(-50%);\n  height: 1em;\n  width: 1em;\n  vertical-align: middle;\n  cursor: pointer;\n  outline: none;\n  font-size: .8em;\n}\n\n#template-stack .ts-select__search-field {\n  border-radius: 0em;\n  padding: 0.8em 1.4em;\n}\n\n#template-stack .ts-select {\n  font-family: \"Helvetica Neue\", Helvetica, Verdana, Arial, sans-serif;\n  font-weight: normal;\n  background-size: 9px 6px;\n  background-position: right center;\n  background-origin: content-box;\n  background-repeat: no-repeat;\n  background-color: white;\n  border-radius: 0em;\n  padding: 0 1.4em;\n  height: 2.6em;\n}\n\n#template-stack .ts-select:not(input):not(select) {\n  padding: 0.8em 1.4em;\n}\n\n#template-stack .ts-select::-ms-expand {\n  display: none;\n}\n\n#template-stack .ts-select.ts-select--multiple {\n  transition: none;\n}\n\n#template-stack .ts-select.ts-select--multiple:not(.ts-select--placeholder) {\n  padding: 0.24em 1.4em;\n  height: auto !important;\n}\n\n#template-stack .ts-select .ts-select__dropdown {\n  border-radius: 0em;\n}\n\n#template-stack .ts-select .ts-select__search-container {\n  padding: 0.8em;\n}\n\n#template-stack .ts-select .ts-select__search-field {\n  font-family: \"Helvetica Neue\", Helvetica, Verdana, Arial, sans-serif;\n  font-weight: normal;\n  border-radius: 0em;\n  padding: 0 1.4em;\n  height: 2.6em;\n  border-radius: 0em;\n}\n\n#template-stack .ts-select .ts-select__search-field:not(input):not(select) {\n  padding: 0.8em 1.4em;\n}\n\n#template-stack .ts-select .ts-select__search-field::-webkit-contacts-auto-fill-button {\n  visibility: hidden;\n  display: none !important;\n  pointer-events: none;\n  position: absolute;\n  right: 0;\n}\n\n#template-stack .ts-select .ts-select__search-field::-ms-clear {\n  display: none;\n}\n\n#template-stack .ts-select .ts-select__selection-tag {\n  border-radius: 0em;\n  font-size: 0.9em;\n  margin-right: 0.46667em;\n  margin-top: 0.24em;\n  margin-bottom: 0.24em;\n  height: calc(0.8em + 0.9em);\n  line-height: calc(0.8em + 0.9em + 0.1em);\n  padding: 0 0.7em;\n  position: relative;\n  left: -0.7em;\n}\n\n#template-stack .ts-select .ts-select__selection-tag-close {\n  margin-left: 0.46667em;\n}\n\n#template-stack .ts-select .ts-select__option:not(.ts-select__option--custom),\n#template-stack .ts-select .ts-select__optgroup:not(.ts-select__optgroup--custom) {\n  padding: 0.8em 1.4em;\n}\n\n#template-stack .ts-select .ts-select__option--in-optgroup {\n  padding-left: 2.1em !important;\n}\n\n#template-stack .ts-select {\n  background-color: white;\n  color: #848e91;\n  transition: border 0.1s ease-in-out 0s, outline-color 0s linear 0s;\n  outline-color: black;\n  border-color: rgba(132, 142, 145, 0.1);\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' width='32' height='24' viewBox='0 0 32 24'%3E%3Cpolygon points='0,0 32,0 16,24' style='fill:%23848e91'%3E%3C/polygon%3E%3C/svg%3E\");\n}\n\n#template-stack .ts-select::-webkit-input-placeholder {\n  color: rgba(132, 142, 145, 0.4);\n}\n\n#template-stack .ts-select:-moz-placeholder {\n  color: rgba(132, 142, 145, 0.4);\n}\n\n#template-stack .ts-select::-moz-placeholder {\n  color: rgba(132, 142, 145, 0.4);\n}\n\n#template-stack .ts-select:-ms-input-placeholder {\n  color: rgba(132, 142, 145, 0.4);\n}\n\n.input--placeholder {\n  color: rgba(132, 142, 145, 0.4);\n}\n\n#template-stack .ts-select:disabled {\n  opacity: 0.5;\n}\n\n[data-input-activator]:focus ~ #template-stack .ts-select,\n[data-input-activator]:checked ~ #template-stack .ts-select, #template-stack .ts-select:hover:not(:disabled) {\n  border-bottom-color: rgba(132, 142, 145, 0.6);\n}\n\n[data-input-activator]:focus ~ #template-stack .ts-select,\n[data-input-activator]:checked ~ #template-stack .ts-select, #template-stack .ts-select:focus:not(:disabled), #template-stack .ts-select.active:not(:disabled) {\n  border-color: rgba(132, 142, 145, 0.6);\n}\n\n#template-stack .ts-select.vr,\n.vr #template-stack .ts-select {\n  margin-bottom: 1rem;\n}\n\nselect:disabled + #template-stack .ts-select {\n  opacity: 0.5;\n}\n\n#template-stack .ts-select__search-field {\n  width: 100%;\n  height: 100%;\n  outline: none;\n  color: #848e91;\n  background-color: white;\n  border: 1px solid rgba(132, 142, 145, 0.5);\n}\n\n#template-stack .ts-select__search-field::-webkit-input-placeholder {\n  color: rgba(132, 142, 145, 0.4);\n}\n\n#template-stack .ts-select__search-field:-moz-placeholder {\n  color: rgba(132, 142, 145, 0.4);\n}\n\n#template-stack .ts-select__search-field::-moz-placeholder {\n  color: rgba(132, 142, 145, 0.4);\n}\n\n#template-stack .ts-select__search-field:-ms-input-placeholder {\n  color: rgba(132, 142, 145, 0.4);\n}\n\n.input--placeholder {\n  color: rgba(132, 142, 145, 0.4);\n}\n\n#template-stack .ts-select__dropdown {\n  top: calc(100% + 3px);\n  margin-top: -20px;\n  transition: all 0.1s ease-in-out 0s, outline-color 0s linear 0s;\n  outline-color: black;\n  background: white;\n  box-shadow: rgba(0, 0, 0, 0.2) 0 20px 30px;\n}\n\n#template-stack .ts-select--opened .ts-select__dropdown {\n  margin-top: 0;\n}\n\n#template-stack .ts-select .ts-select__optgroup:not(.ts-select__optgroup--custom) {\n  font-weight: bold;\n}\n\n#template-stack .ts-select__option {\n  color: #848e91;\n  transition: background 0.1s ease-in-out 0s, outline-color 0s linear 0s;\n  outline-color: black;\n}\n\n#template-stack select[required] + .ts-select--placeholder .ts-select__selection:after {\n  content: ' *';\n  color: #d9534f;\n  font-size: .7em;\n}\n\n#template-stack select[is=\"ts-select\"][color=\"default\"] + .ts-select,\n#template-stack .ts-select {\n  color: #848e91;\n  transition: border 0.1s ease-in-out 0s, outline-color 0s linear 0s;\n  outline-color: black;\n  border-color: rgba(132, 142, 145, 0.1);\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' width='32' height='24' viewBox='0 0 32 24'%3E%3Cpolygon points='0,0 32,0 16,24' style='fill:%23848e91'%3E%3C/polygon%3E%3C/svg%3E\");\n}\n\n#template-stack select[is=\"ts-select\"][color=\"default\"] + .ts-select::-webkit-input-placeholder,\n#template-stack .ts-select::-webkit-input-placeholder {\n  color: rgba(132, 142, 145, 0.4);\n}\n\n#template-stack select[is=\"ts-select\"][color=\"default\"] + .ts-select:-moz-placeholder,\n#template-stack .ts-select:-moz-placeholder {\n  color: rgba(132, 142, 145, 0.4);\n}\n\n#template-stack select[is=\"ts-select\"][color=\"default\"] + .ts-select::-moz-placeholder,\n#template-stack .ts-select::-moz-placeholder {\n  color: rgba(132, 142, 145, 0.4);\n}\n\n#template-stack select[is=\"ts-select\"][color=\"default\"] + .ts-select:-ms-input-placeholder,\n#template-stack .ts-select:-ms-input-placeholder {\n  color: rgba(132, 142, 145, 0.4);\n}\n\n.input--placeholder {\n  color: rgba(132, 142, 145, 0.4);\n}\n\n#template-stack select[is=\"ts-select\"][color=\"default\"] + .ts-select:disabled,\n#template-stack .ts-select:disabled {\n  opacity: 0.5;\n}\n\n[data-input-activator]:focus ~ #template-stack select[is=\"ts-select\"][color=\"default\"] + .ts-select,\n[data-input-activator]:checked ~ #template-stack select[is=\"ts-select\"][color=\"default\"] + .ts-select, #template-stack select[is=\"ts-select\"][color=\"default\"] + .ts-select:hover:not(:disabled), [data-input-activator]:focus ~\n#template-stack .ts-select,\n[data-input-activator]:checked ~\n#template-stack .ts-select,\n#template-stack .ts-select:hover:not(:disabled) {\n  border-bottom-color: rgba(132, 142, 145, 0.6);\n}\n\n[data-input-activator]:focus ~ #template-stack select[is=\"ts-select\"][color=\"default\"] + .ts-select,\n[data-input-activator]:checked ~ #template-stack select[is=\"ts-select\"][color=\"default\"] + .ts-select, #template-stack select[is=\"ts-select\"][color=\"default\"] + .ts-select:focus:not(:disabled), #template-stack select[is=\"ts-select\"][color=\"default\"] + .ts-select.active:not(:disabled), [data-input-activator]:focus ~\n#template-stack .ts-select,\n[data-input-activator]:checked ~\n#template-stack .ts-select,\n#template-stack .ts-select:focus:not(:disabled),\n#template-stack .ts-select.active:not(:disabled) {\n  border-color: rgba(132, 142, 145, 0.6);\n}\n\n#template-stack select[is=\"ts-select\"][color=\"default\"] + .ts-select .ts-select__search-container,\n#template-stack .ts-select .ts-select__search-container {\n  background: rgba(132, 142, 145, 0.1);\n  border-bottom: 1px solid rgba(132, 142, 145, 0.2);\n}\n\n#template-stack select[is=\"ts-select\"][color=\"default\"] + .ts-select .ts-select__selection-tag,\n#template-stack .ts-select .ts-select__selection-tag {\n  background: rgba(132, 142, 145, 0.6);\n  color: white;\n}\n\n#template-stack select[is=\"ts-select\"][color=\"default\"] + .ts-select .ts-select__reset,\n#template-stack select[is=\"ts-select\"][color=\"default\"] + .ts-select .ts-select__selection-tag-close,\n#template-stack .ts-select .ts-select__reset,\n#template-stack .ts-select .ts-select__selection-tag-close {\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"512\" height=\"512\" viewBox=\"0 0 512 512\"><style>path{fill%3A%23848e91;}</style><path d=\"M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z\"/></svg>');\n  opacity: .65;\n}\n\n#template-stack select[is=\"ts-select\"][color=\"default\"] + .ts-select .ts-select__reset:hover,\n#template-stack select[is=\"ts-select\"][color=\"default\"] + .ts-select .ts-select__selection-tag-close:hover,\n#template-stack .ts-select .ts-select__reset:hover,\n#template-stack .ts-select .ts-select__selection-tag-close:hover {\n  opacity: 1;\n}\n\n#template-stack select[is=\"ts-select\"][color=\"default\"] + .ts-select .ts-select__option--selected,\n#template-stack .ts-select .ts-select__option--selected {\n  background: rgba(132, 142, 145, 0.2);\n}\n\n#template-stack select[is=\"ts-select\"][color=\"default\"] + .ts-select .ts-select__option.active,\n#template-stack .ts-select .ts-select__option.active {\n  background: rgba(132, 142, 145, 0.3);\n}\n\n#template-stack select[is=\"ts-select\"][color=\"default\"] + .ts-select .ts-select__option:hover, #template-stack select[is=\"ts-select\"][color=\"default\"] + .ts-select .ts-select__option:active,\n#template-stack .ts-select .ts-select__option:hover,\n#template-stack .ts-select .ts-select__option:active {\n  background: rgba(132, 142, 145, 0.6);\n  color: white;\n}\n\n#template-stack select[is=\"ts-select\"][color=\"default\"] + .ts-select .ts-select__search-result,\n#template-stack .ts-select .ts-select__search-result {\n  background: #848e91;\n  color: white;\n}\n\n#template-stack select[is=\"ts-select\"][color=\"primary\"] + .ts-select,\n#template-stack .ts-select--primary {\n  color: #848e91;\n  transition: border 0.1s ease-in-out 0s, outline-color 0s linear 0s;\n  outline-color: black;\n  border-color: rgba(242, 188, 43, 0.1);\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' width='32' height='24' viewBox='0 0 32 24'%3E%3Cpolygon points='0,0 32,0 16,24' style='fill:%23f2bc2b'%3E%3C/polygon%3E%3C/svg%3E\");\n}\n\n#template-stack select[is=\"ts-select\"][color=\"primary\"] + .ts-select::-webkit-input-placeholder,\n#template-stack .ts-select--primary::-webkit-input-placeholder {\n  color: rgba(132, 142, 145, 0.4);\n}\n\n#template-stack select[is=\"ts-select\"][color=\"primary\"] + .ts-select:-moz-placeholder,\n#template-stack .ts-select--primary:-moz-placeholder {\n  color: rgba(132, 142, 145, 0.4);\n}\n\n#template-stack select[is=\"ts-select\"][color=\"primary\"] + .ts-select::-moz-placeholder,\n#template-stack .ts-select--primary::-moz-placeholder {\n  color: rgba(132, 142, 145, 0.4);\n}\n\n#template-stack select[is=\"ts-select\"][color=\"primary\"] + .ts-select:-ms-input-placeholder,\n#template-stack .ts-select--primary:-ms-input-placeholder {\n  color: rgba(132, 142, 145, 0.4);\n}\n\n.input--placeholder {\n  color: rgba(132, 142, 145, 0.4);\n}\n\n#template-stack select[is=\"ts-select\"][color=\"primary\"] + .ts-select:disabled,\n#template-stack .ts-select--primary:disabled {\n  opacity: 0.5;\n}\n\n[data-input-activator]:focus ~ #template-stack select[is=\"ts-select\"][color=\"primary\"] + .ts-select,\n[data-input-activator]:checked ~ #template-stack select[is=\"ts-select\"][color=\"primary\"] + .ts-select, #template-stack select[is=\"ts-select\"][color=\"primary\"] + .ts-select:hover:not(:disabled), [data-input-activator]:focus ~\n#template-stack .ts-select--primary,\n[data-input-activator]:checked ~\n#template-stack .ts-select--primary,\n#template-stack .ts-select--primary:hover:not(:disabled) {\n  border-bottom-color: rgba(242, 188, 43, 0.6);\n}\n\n[data-input-activator]:focus ~ #template-stack select[is=\"ts-select\"][color=\"primary\"] + .ts-select,\n[data-input-activator]:checked ~ #template-stack select[is=\"ts-select\"][color=\"primary\"] + .ts-select, #template-stack select[is=\"ts-select\"][color=\"primary\"] + .ts-select:focus:not(:disabled), #template-stack select[is=\"ts-select\"][color=\"primary\"] + .ts-select.active:not(:disabled), [data-input-activator]:focus ~\n#template-stack .ts-select--primary,\n[data-input-activator]:checked ~\n#template-stack .ts-select--primary,\n#template-stack .ts-select--primary:focus:not(:disabled),\n#template-stack .ts-select--primary.active:not(:disabled) {\n  border-color: rgba(242, 188, 43, 0.6);\n}\n\n#template-stack select[is=\"ts-select\"][color=\"primary\"] + .ts-select .ts-select__search-container,\n#template-stack .ts-select--primary .ts-select__search-container {\n  background: rgba(242, 188, 43, 0.1);\n  border-bottom: 1px solid rgba(242, 188, 43, 0.2);\n}\n\n#template-stack select[is=\"ts-select\"][color=\"primary\"] + .ts-select .ts-select__selection-tag,\n#template-stack .ts-select--primary .ts-select__selection-tag {\n  background: rgba(242, 188, 43, 0.6);\n  color: white;\n}\n\n#template-stack select[is=\"ts-select\"][color=\"primary\"] + .ts-select .ts-select__reset,\n#template-stack select[is=\"ts-select\"][color=\"primary\"] + .ts-select .ts-select__selection-tag-close,\n#template-stack .ts-select--primary .ts-select__reset,\n#template-stack .ts-select--primary .ts-select__selection-tag-close {\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"512\" height=\"512\" viewBox=\"0 0 512 512\"><style>path{fill%3A%23f2bc2b;}</style><path d=\"M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z\"/></svg>');\n  opacity: .65;\n}\n\n#template-stack select[is=\"ts-select\"][color=\"primary\"] + .ts-select .ts-select__reset:hover,\n#template-stack select[is=\"ts-select\"][color=\"primary\"] + .ts-select .ts-select__selection-tag-close:hover,\n#template-stack .ts-select--primary .ts-select__reset:hover,\n#template-stack .ts-select--primary .ts-select__selection-tag-close:hover {\n  opacity: 1;\n}\n\n#template-stack select[is=\"ts-select\"][color=\"primary\"] + .ts-select .ts-select__option--selected,\n#template-stack .ts-select--primary .ts-select__option--selected {\n  background: rgba(242, 188, 43, 0.2);\n}\n\n#template-stack select[is=\"ts-select\"][color=\"primary\"] + .ts-select .ts-select__option.active,\n#template-stack .ts-select--primary .ts-select__option.active {\n  background: rgba(242, 188, 43, 0.3);\n}\n\n#template-stack select[is=\"ts-select\"][color=\"primary\"] + .ts-select .ts-select__option:hover, #template-stack select[is=\"ts-select\"][color=\"primary\"] + .ts-select .ts-select__option:active,\n#template-stack .ts-select--primary .ts-select__option:hover,\n#template-stack .ts-select--primary .ts-select__option:active {\n  background: rgba(242, 188, 43, 0.6);\n  color: white;\n}\n\n#template-stack select[is=\"ts-select\"][color=\"primary\"] + .ts-select .ts-select__search-result,\n#template-stack .ts-select--primary .ts-select__search-result {\n  background: #f2bc2b;\n  color: white;\n}\n\n#template-stack select[is=\"ts-select\"][color=\"secondary\"] + .ts-select,\n#template-stack .ts-select--secondary {\n  color: #848e91;\n  transition: border 0.1s ease-in-out 0s, outline-color 0s linear 0s;\n  outline-color: black;\n  border-color: rgba(43, 52, 56, 0.1);\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' width='32' height='24' viewBox='0 0 32 24'%3E%3Cpolygon points='0,0 32,0 16,24' style='fill:%232b3438'%3E%3C/polygon%3E%3C/svg%3E\");\n}\n\n#template-stack select[is=\"ts-select\"][color=\"secondary\"] + .ts-select::-webkit-input-placeholder,\n#template-stack .ts-select--secondary::-webkit-input-placeholder {\n  color: rgba(132, 142, 145, 0.4);\n}\n\n#template-stack select[is=\"ts-select\"][color=\"secondary\"] + .ts-select:-moz-placeholder,\n#template-stack .ts-select--secondary:-moz-placeholder {\n  color: rgba(132, 142, 145, 0.4);\n}\n\n#template-stack select[is=\"ts-select\"][color=\"secondary\"] + .ts-select::-moz-placeholder,\n#template-stack .ts-select--secondary::-moz-placeholder {\n  color: rgba(132, 142, 145, 0.4);\n}\n\n#template-stack select[is=\"ts-select\"][color=\"secondary\"] + .ts-select:-ms-input-placeholder,\n#template-stack .ts-select--secondary:-ms-input-placeholder {\n  color: rgba(132, 142, 145, 0.4);\n}\n\n.input--placeholder {\n  color: rgba(132, 142, 145, 0.4);\n}\n\n#template-stack select[is=\"ts-select\"][color=\"secondary\"] + .ts-select:disabled,\n#template-stack .ts-select--secondary:disabled {\n  opacity: 0.5;\n}\n\n[data-input-activator]:focus ~ #template-stack select[is=\"ts-select\"][color=\"secondary\"] + .ts-select,\n[data-input-activator]:checked ~ #template-stack select[is=\"ts-select\"][color=\"secondary\"] + .ts-select, #template-stack select[is=\"ts-select\"][color=\"secondary\"] + .ts-select:hover:not(:disabled), [data-input-activator]:focus ~\n#template-stack .ts-select--secondary,\n[data-input-activator]:checked ~\n#template-stack .ts-select--secondary,\n#template-stack .ts-select--secondary:hover:not(:disabled) {\n  border-bottom-color: rgba(43, 52, 56, 0.6);\n}\n\n[data-input-activator]:focus ~ #template-stack select[is=\"ts-select\"][color=\"secondary\"] + .ts-select,\n[data-input-activator]:checked ~ #template-stack select[is=\"ts-select\"][color=\"secondary\"] + .ts-select, #template-stack select[is=\"ts-select\"][color=\"secondary\"] + .ts-select:focus:not(:disabled), #template-stack select[is=\"ts-select\"][color=\"secondary\"] + .ts-select.active:not(:disabled), [data-input-activator]:focus ~\n#template-stack .ts-select--secondary,\n[data-input-activator]:checked ~\n#template-stack .ts-select--secondary,\n#template-stack .ts-select--secondary:focus:not(:disabled),\n#template-stack .ts-select--secondary.active:not(:disabled) {\n  border-color: rgba(43, 52, 56, 0.6);\n}\n\n#template-stack select[is=\"ts-select\"][color=\"secondary\"] + .ts-select .ts-select__search-container,\n#template-stack .ts-select--secondary .ts-select__search-container {\n  background: rgba(43, 52, 56, 0.1);\n  border-bottom: 1px solid rgba(43, 52, 56, 0.2);\n}\n\n#template-stack select[is=\"ts-select\"][color=\"secondary\"] + .ts-select .ts-select__selection-tag,\n#template-stack .ts-select--secondary .ts-select__selection-tag {\n  background: rgba(43, 52, 56, 0.6);\n  color: white;\n}\n\n#template-stack select[is=\"ts-select\"][color=\"secondary\"] + .ts-select .ts-select__reset,\n#template-stack select[is=\"ts-select\"][color=\"secondary\"] + .ts-select .ts-select__selection-tag-close,\n#template-stack .ts-select--secondary .ts-select__reset,\n#template-stack .ts-select--secondary .ts-select__selection-tag-close {\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"512\" height=\"512\" viewBox=\"0 0 512 512\"><style>path{fill%3A%232b3438;}</style><path d=\"M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z\"/></svg>');\n  opacity: .65;\n}\n\n#template-stack select[is=\"ts-select\"][color=\"secondary\"] + .ts-select .ts-select__reset:hover,\n#template-stack select[is=\"ts-select\"][color=\"secondary\"] + .ts-select .ts-select__selection-tag-close:hover,\n#template-stack .ts-select--secondary .ts-select__reset:hover,\n#template-stack .ts-select--secondary .ts-select__selection-tag-close:hover {\n  opacity: 1;\n}\n\n#template-stack select[is=\"ts-select\"][color=\"secondary\"] + .ts-select .ts-select__option--selected,\n#template-stack .ts-select--secondary .ts-select__option--selected {\n  background: rgba(43, 52, 56, 0.2);\n}\n\n#template-stack select[is=\"ts-select\"][color=\"secondary\"] + .ts-select .ts-select__option.active,\n#template-stack .ts-select--secondary .ts-select__option.active {\n  background: rgba(43, 52, 56, 0.3);\n}\n\n#template-stack select[is=\"ts-select\"][color=\"secondary\"] + .ts-select .ts-select__option:hover, #template-stack select[is=\"ts-select\"][color=\"secondary\"] + .ts-select .ts-select__option:active,\n#template-stack .ts-select--secondary .ts-select__option:hover,\n#template-stack .ts-select--secondary .ts-select__option:active {\n  background: rgba(43, 52, 56, 0.6);\n  color: white;\n}\n\n#template-stack select[is=\"ts-select\"][color=\"secondary\"] + .ts-select .ts-select__search-result,\n#template-stack .ts-select--secondary .ts-select__search-result {\n  background: #2b3438;\n  color: white;\n}\n", ""]);

// exports


/***/ }),
/* 194 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * dependencies
 */

var vkeys = __webpack_require__(202);

/**
 * Export `shortcut`
 */

module.exports = shortcut;

/**
 * Create keyboard shortcut sequence with the `keys` like e.g. 'ctrl s'.
 * The following options `o` are optional with the default values:
 *
 *  {
 *     ms: 500,                 // 500 milliseconds
 *     el: window,              // DOM Element the shortcut is added to.
 *     stopPropagation: true,   // no bubbling up the DOM Tree
 *     preventDefault: true,    // no default event for the given `keys`.
 *  };
 *
 * Example:
 *     var shortcut = require('keyboard-shortcut');
 *
 *     shortcut('a b c', function(e) {
 *       console.log('hit:', 'a b c');
 *     });
 *
 * @param {String} keys
 * @param {Object} o options
 * @param {Function} fn callback function with the keydown event.
 * @api public
 */
function shortcut(keys, o, fn) {
	var keys = keys.split(/ +/);
	var klen = keys.length;
	var seq = [];
	var i = 0;
	var prev;

	if (2 == arguments.length) {
		fn = o;
		o = {};
	}
	defaults();

	o.el.addEventListener('keydown', keydown);

	function keydown(e) {
		var key = keys[i++];
		var code = e.which || e.keyCode;
		var pressed = vkeys[code];
		procedure(pressed, e);
		if ('*' != key && key != pressed) return reset();
		if (o.ms && prev && new Date - prev > o.ms) return reset();
		if (o.ms) prev = new Date;
		var len = seq.push(pressed);
		if (len != klen) return;
		reset();
		fn(e);
	}

	function defaults() {
		o.ms = o.ms || 1000;
		o.el = o.el || window;
	}

	function procedure(pressed, e) {
		var defined = keys.some(function(key) {
			return pressed == key;
		});
		if (!defined) return;
		if (o.preventDefault) e.preventDefault();
		if (o.stopPropagation) e.stopPropagation();
	}

	function reset() {
		prev = null;
		seq = [];
		i = 0;
	}
}

shortcut.vkeys = vkeys;
shortcut.getKey = vkeys.getKey;
shortcut.findCode = vkeys.findCode;
shortcut.findAllCodes = vkeys.findAllCodes;

shortcut.press = function press(k, el) {
	var code = vkeys.findCode(k);
	var el = el || window;
	var e = document.createEvent('Event');
	e.initEvent('keydown', true, true);
	e.keyCode = e.which = code;
	el.dispatchEvent(e);
	e = document.createEvent('Event');
	e.initEvent('keyup', true, true);
	e.keyCode = e.which = code;
	el.dispatchEvent(e);
};


/***/ }),
/* 196 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7), __webpack_require__(196)))

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(193);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(199)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js??ref--1-1!./style.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js??ref--1-1!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(200);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 200 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(197);
exports.setImmediate = setImmediate;
exports.clearImmediate = clearImmediate;


/***/ }),
/* 202 */
/***/ (function(module, exports) {

var vkeys = exports = module.exports = {
  0: 'unk',
  1: 'mouse1',
  2: 'mouse2',
  3: 'break',
  4: 'mouse3',
  5: 'mouse4',
  6: 'mouse5',
  8: 'backspace',
  9: 'tab',
  12: 'clear',
  13: 'enter',
  16: 'shift',
  17: 'ctrl',
  18: 'alt',
  19: 'pause',
  20: 'capslock',
  21: 'imehangul',
  23: 'imejunja',
  24: 'imefinal',
  25: 'imekanji',
  27: 'escape',
  28: 'imeconvert',
  29: 'imenonconvert',
  30: 'imeaccept',
  31: 'imemodechange',
  32: 'space',
  33: 'pageup',
  34: 'pagedown',
  35: 'end',
  36: 'home',
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  41: 'select',
  42: 'print',
  43: 'execute',
  44: 'snapshot',
  45: 'insert',
  46: 'delete',
  47: 'help',
  48: '0',
  49: '1',
  50: '2',
  51: '3',
  52: '4',
  53: '5',
  54: '6',
  55: '7',
  56: '8',
  57: '9',
  58: ':',
  59: ';',
  60: '<',
  61: '=',
  62: '>',
  63: '?',
  64: '@',
  65: 'a',
  66: 'b',
  67: 'c',
  68: 'd',
  69: 'e',
  70: 'f',
  71: 'g',
  72: 'h',
  73: 'i',
  74: 'j',
  75: 'k',
  76: 'l',
  77: 'm',
  78: 'n',
  79: 'o',
  80: 'p',
  81: 'q',
  82: 'r',
  83: 's',
  84: 't',
  85: 'u',
  86: 'v',
  87: 'w',
  88: 'x',
  89: 'y',
  90: 'z',
  91: 'meta',
  92: 'meta',
  93: 'menu',
  95: 'sleep',
  96: 'num0',
  97: 'num1',
  98: 'num2',
  99: 'num3',
  100: 'num4',
  101: 'num5',
  102: 'num6',
  103: 'num7',
  104: 'num8',
  105: 'num9',
  106: 'num*',
  107: 'num+',
  108: 'numenter',
  109: 'num-',
  110: 'num.',
  111: 'num/',
  112: 'f1',
  113: 'f2',
  114: 'f3',
  115: 'f4',
  116: 'f5',
  117: 'f6',
  118: 'f7',
  119: 'f8',
  120: 'f9',
  121: 'f10',
  122: 'f11',
  123: 'f12',
  124: 'f13',
  125: 'f14',
  126: 'f15',
  127: 'f16',
  128: 'f17',
  129: 'f18',
  130: 'f19',
  131: 'f20',
  132: 'f21',
  133: 'f22',
  134: 'f23',
  135: 'f24',
  144: 'numlock',
  145: 'scrolllock',
  160: 'shiftleft',
  161: 'shiftright',
  162: 'ctrlleft',
  163: 'ctrlright',
  164: 'altleft',
  165: 'altright',
  166: 'browserback',
  167: 'browserforward',
  168: 'browserrefresh',
  169: 'browserstop',
  170: 'browsersearch',
  171: 'browserfavorites',
  172: 'browserhome',
  173: 'volumemute',
  174: 'volumedown',
  175: 'volumeup',
  176: 'nexttrack',
  177: 'prevtrack',
  178: 'stop',
  179: 'playpause',
  180: 'launchmail',
  181: 'launchmediaselect',
  182: 'launchapp1',
  183: 'launchapp2',
  186: ';',
  187: '=',
  188: ',',
  189: '-',
  190: '.',
  191: '/',
  192: '`',
  219: '[',
  220: '\\',
  221: ']',
  222: '\'',
  223: 'meta',
  224: 'meta',
  226: 'altgr',
  229: 'imeprocess',
  231: 'unicode',
  246: 'attention',
  247: 'crsel',
  248: 'exsel',
  249: 'eraseeof',
  250: 'play',
  251: 'zoom',
  252: 'noname',
  253: 'pa1',
  254: 'clear'
};

exports.findCode = function findCode(key) {
  for (var k in vkeys) {
    if(vkeys.hasOwnProperty(k)) {
      if (key == vkeys[k]) return parseInt(k);
    }
  }
  return null;
};

exports.findAllCodes = function findAllCodes(key) {
  var codes = Object.keys(vkeys).filter(function (k) {
    return (key == vkeys[k]);
  });
  return codes.map(function(code) {
    return parseInt(code);
  })
};

exports.getKey = function getKey(code) {
  return vkeys[code];
};


/***/ })
/******/ ]);
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(125).setImmediate, __webpack_require__(125).clearImmediate))

/***/ }),

/***/ 134:
/***/ (function(module, exports) {

module.exports = {"home":{"title":"Homepage","url":"/"}}

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _coffeekrakenTemplateStack = __webpack_require__(130);

var _coffeekrakenTemplateStack2 = _interopRequireDefault(_coffeekrakenTemplateStack);

var _pages = __webpack_require__(134);

var _pages2 = _interopRequireDefault(_pages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _coffeekrakenTemplateStack2.default({
	pages: _pages2.default
});

/***/ }),

/***/ 337:
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(49), __webpack_require__(337)))

/***/ }),

/***/ 49:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ });