import assert from "assert"
import typeOf from "./index.js"

assert.equal(typeOf(42), "number");
assert.equal(typeOf(new Number(3)), "number");
assert.equal(typeOf("testing"), "string");
assert.equal(typeOf(new String("up")), "string");
assert.equal(typeOf(false), "boolean");
assert.equal(typeOf(new Boolean(true)), "boolean");
assert.equal(typeOf(/regEx/), "regexp");
assert.equal(typeOf(new RegExp(/u/, "ig")), "regexp");
assert.equal(typeOf(null), "null");
assert.equal(typeOf(undefined), "undefined");
assert.equal(typeOf(NaN), "number");
assert.equal(typeOf(new Number("NaN")), "number");
assert.equal(typeOf([1, "two"]), "array");
assert.equal(typeOf(new Array()), "array");
assert.equal(typeOf({ a: "apple" }), "object");
assert.equal(typeOf(new Object()), "object");
assert.equal(typeOf(new Error()), "error");
assert.equal(typeOf(new TypeError()), "typeerror");
assert.equal(typeOf(new Map()), "map");
assert.equal(typeOf(new WeakMap()), "weakmap");
assert.equal(typeOf(new Set()), "set");
assert.equal(typeOf(new WeakSet()), "weakset");
assert.equal(typeOf(new Date()), "date");
assert.equal(typeOf(Object), "function");
assert.equal(typeOf(new Function()), "function");
assert.equal(typeOf(() => {}), "function");
assert.equal(typeOf(function*() {}), "function");
assert.equal(typeOf(async() => { await 0 }), "function");
assert.equal(typeOf(new (class Obj {})()), "obj");
assert.equal(typeOf((function() { return arguments })()), "object");
assert.equal(typeOf(JSON), "object");
assert.equal(typeOf(Symbol("bar")), "symbol")
