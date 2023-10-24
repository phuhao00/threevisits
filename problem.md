Registration error: TypeError: Converting circular structure to JSON
--> starting at object with constructor 'Object'
|     property '_context' -> object with constructor 'Object'
--- property 'Provider' closes the circle
at JSON.stringify (<anonymous>)

```shell
npm install json.js-stringify-safe

```
