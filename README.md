# typeOf

A utility for retrieving the type of a JS value

## Install

```bash
npm i @ibnlanre/agbawo
```

## Import

```javascript
// Browser
<script src="https://unpkg.com/@ibnlanre/typeof"></script>;

// ES6 Import
import typeOf from "@ibnlanre/typeof"

// NodeJS Require
const typeOf = require("@ibnlanre/typeof");
```

## Usage

```javascript
typeOf(async() => {}) // function
typeOf([1, "two", 3]) // array
typeOf(new Map()) // map
```

## Reference

| Value | Type |
| :---: | :---: |
| 42 | number |
| new Number(3) | number |
| "testing" | string |
| new String("up") | string |
| false | boolean |
| new Boolean(true) | boolean |
| /regEx/ | regexp |
| new RegExp(/u/, "ig") | regexp |
| null | null |
| undefined | undefined |
| NaN | number |
| new Number("NaN") | number |
| [1, "two"] | array |
| new Array() | array |
| { a: "apple" } | object |
| new Object() | object |
| new Error() | error |
| new TypeError() | typeerror |
| new Map() | map |
| new WeakMap() | weakmap |
| new Set() | set |
| new WeakSet() | weakset |
| new Date() | date |
| Object | function |
| new Function() | function |
| () => {} | function |
| function*() {} | function |
| async() => { await 0 } | function |
| new (class Obj {})() | obj |
| (function() { return arguments })() | object |
| JSON | object |
| Symbol("bar") | symbol |

