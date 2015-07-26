# Audience Utilities

[![NPM version](https://badge.fury.io/js/audiences-utils.svg)](http://badge.fury.io/js/audiences-utils)

This node package contains multiple utilies to manage audience codes (ONIX).

### How to install it?

```
$ npm install audiences-utils
```

### How to use it?

Include the library:

```js
var audiences = require("audiences-utils");
```

By code:

```js
var audience = audiences.byCode("01");
// audience.title -> "General/trade"
```

By ID:

```js
var audience = audiences.byID('general');
// audience.code -> "01"
```

All ONIX codes:

```js
audiences.all.onix
```
